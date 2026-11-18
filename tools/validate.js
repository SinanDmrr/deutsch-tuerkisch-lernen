/* Inhaltsprüfung – läuft lokal (node tools/validate.js) und als GitHub Action.
 * Prüft: eindeutige IDs, ID-Präfixe, gültige Antworten, Erklärungen vorhanden, Wortschatz- und Dialogformat,
 * gleiche Version überall (?v= in index.html, APP_VERSION, später VERSION in sw.js).
 * Geladen werden NUR js/curriculum.js und js/content/*.js (ADR-10) – App- und Kern-Dateien dürfen DOM/Speicher nutzen.
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console };
vm.createContext(ctx);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const CONTENT_SCRIPT = /<script\s+src="(js\/(?:curriculum|content\/[A-Za-z0-9_-]+)\.js)(?:\?[^"]*)?"/g;
const scripts = [...html.matchAll(CONTENT_SCRIPT)].map(m => m[1]);
scripts.forEach(s => vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s }));
const K = ctx.window.KOPRU;

let errors = 0, warnings = 0;
const err = (...a) => { errors++; console.log('FEHLER:', ...a); };
const warn = (...a) => { warnings++; console.log('Hinweis:', ...a); };
if (!K) { err('window.KOPRU fehlt – ist js/curriculum.js in index.html eingebunden?'); process.exit(1); }
if (scripts[0] !== 'js/curriculum.js') err('js/curriculum.js muss als erstes Inhaltsskript geladen werden');

// Jede Inhaltsdatei muss in index.html eingebunden sein (sonst fehlt sie still in der App)
fs.readdirSync(path.join(root, 'js', 'content')).filter(f => f.endsWith('.js')).forEach(f => {
  if (!scripts.includes('js/content/' + f)) err('Inhaltsdatei nicht in index.html eingebunden', 'js/content/' + f);
});

/* ---------- Versionsgleichheit ---------- */
const versions = [...html.matchAll(/\?v=([^"'&\s>]+)/g)].map(m => m[1]);
const readVersion = (file, re) => {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) return undefined;
  const m = re.exec(fs.readFileSync(p, 'utf8'));
  return m ? m[1] : null;
};
// APP_VERSION steht in js/app.js; falls sie nach js/core/config.js umzieht (ADR-10 Schritt 2), dort suchen
let appVersion = readVersion('js/app.js', /APP_VERSION\s*=\s*['"]([^'"]+)['"]/);
let appVersionFile = 'js/app.js';
if (!appVersion) { appVersion = readVersion('js/core/config.js', /APP_VERSION\s*=\s*['"]([^'"]+)['"]/); appVersionFile = 'js/core/config.js'; }
if (!appVersion) err('APP_VERSION nicht gefunden (js/app.js bzw. js/core/config.js)');
const vSet = [...new Set(versions)];
if (!versions.length) err('index.html enthält keine ?v=-Angaben');
if (vSet.length > 1) err('?v= in index.html uneinheitlich:', vSet.join(', '));
if (appVersion && vSet.length && vSet.some(v => v !== appVersion)) err(`?v= (${vSet.join(', ')}) ≠ APP_VERSION in ${appVersionFile} (${appVersion}) – tools/bump-version.py ausführen`);
const swVersion = readVersion('sw.js', /const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);
if (swVersion === null) err('sw.js vorhanden, aber ohne „const VERSION = …“');
if (swVersion && appVersion && swVersion !== appVersion) err(`VERSION in sw.js (${swVersion}) ≠ APP_VERSION (${appVersion})`);

/* ---------- IDs ---------- */
const ids = new Set();
const useId = (id, where) => { if (!id) return err('ID fehlt', where); if (ids.has(id)) err('ID doppelt', id); ids.add(id); };
const prefix = (id, pre, what) => { if (id && !String(id).startsWith(pre)) err(`${what}: ID muss mit „${pre}“ beginnen`, id); };
const courseIds = Object.keys(K.courses);
const LEVEL_KEYS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
const KEY_RE = new RegExp(`^(${courseIds.join('|')})-(${LEVEL_KEYS.join('|')})$`);              // de-a1
const DIALOG_RE = new RegExp(`^(${courseIds.join('|')})-(${LEVEL_KEYS.join('|')})-d\\d{2,}$`);  // de-a1-d01

// Lehrplan
const topicIds = new Set();
Object.values(K.courses).forEach(c => Object.entries(c.levels).forEach(([lv, l]) => l.forEach(([id]) => {
  if (topicIds.has(id)) err('Thema doppelt', id); topicIds.add(id);
  prefix(id, c.id + '-' + lv.toLowerCase() + '-', 'Thema');
})));
// ADR-11: als „complete“ freigegebene Niveaus müssen für jedes Thema Inhalt haben (sonst Zertifikat/Einstufung falsch)
Object.values(K.courses).forEach(c => (c.complete || []).forEach(lv => {
  if (!c.levels[lv]) return err(`complete: Niveau ${lv} gibt es im Kurs ${c.id} nicht`);
  c.levels[lv].forEach(([id]) => { const d = K.content[id]; if (!d || !d.exercises || !d.exercises.length) err(`complete: ${c.id} ${lv} ist freigegeben, aber Thema ohne Inhalt`, id); });
}));

function checkExercise(e, where) {
  useId(e.id, where);
  if (!e.e) warn('Erklärung (e) fehlt', e.id);
  switch (e.t) {
    case 'mc': case 'listen':
      if (!Array.isArray(e.o) || !(e.a >= 0 && e.a < e.o.length)) err('ungültige Antwort', e.id);
      (e.o || []).forEach((_, j) => { if (j !== e.a && !(e.why && e.why[j])) err('why fehlt für Option', j, e.id); });
      if (e.t === 'listen' && !e.say) err('listen ohne say', e.id);
      break;
    case 'gap': case 'dictation':
      if (!e.a || !e.a.length) err('keine Antworten', e.id);
      if (e.t === 'dictation' && !e.say) err('dictation ohne say', e.id);
      if (e.wrong && !e.cs) Object.keys(e.wrong).forEach(k => { if (e.a.some(a => a.toLowerCase() === k.toLowerCase())) err('wrong == Antwort', e.id, k); });
      break;
    case 'order': {
      const w = e.w.join(' ').toLowerCase().split(' ').sort().join(' ');
      e.a.forEach(a => { if (a.toLowerCase().split(' ').sort().join(' ') !== w) err('Satzbau: Wörter passen nicht', e.id, a); });
      break;
    }
    case 'match': {
      const r = e.p.map(x => x[1]); if (new Set(r).size !== r.length) err('Zuordnung doppelt', e.id);
      break;
    }
    case 'speak': if (!e.say) err('speak ohne say', e.id); break;
    default: err('unbekannter Typ', e.t, e.id);
  }
}

let nEx = 0;
Object.keys(K.content).forEach(tid => {
  if (!topicIds.has(tid)) err('Inhalt ohne Lehrplan-Eintrag', tid);
  (K.content[tid].exercises || []).forEach((e, i) => {
    nEx++; checkExercise(e, tid + '#' + i);
    prefix(e.id, tid + '.', 'Aufgabe in ' + tid);
  });
});

let nVocab = 0;
Object.entries(K.vocab || {}).forEach(([key, list]) => {
  if (!KEY_RE.test(key)) err('Wortschatz-Schlüssel ungültig (erwartet <kurs>-<niveau>, z. B. de-a1)', key);
  list.forEach(v => {
    nVocab++; useId(v.id, key);
    prefix(v.id, key + '.w', 'Wort in ' + key);
    if (v.id && String(v.id).startsWith(key + '.w') && !/^\d{3,}$/.test(String(v.id).slice(key.length + 2))) warn('Wort-ID sollte <kurs>-<niveau>.w<nnn> sein', v.id);
    if (!v.t || !v.n) err('Wort ohne t/n', v.id);
    if (!v.ex || !v.exn) warn('Wort ohne Beispielsatz', v.id);
    if (key.startsWith('de-') && /^(der|die|das) /.test(v.t) === false && v.pos === 'n') err('Nomen ohne Artikel', v.id);
  });
});

let nDia = 0;
Object.entries(K.dialogs || {}).forEach(([id, d]) => {
  nDia++; useId(id, 'dialog');
  if (!DIALOG_RE.test(id)) err('Dialog-ID ungültig (erwartet <kurs>-<niveau>-d<nn>, z. B. de-a1-d01)', id);
  else if (d.level && d.level.toLowerCase() !== id.split('-')[1]) err('Dialog: level passt nicht zur ID', id, d.level);
  if (!d.lines || d.lines.length < 2) err('Dialog zu kurz', id);
  (d.lines || []).forEach((l, i) => { if (!l.t || !l.n || !l.s) err('Dialogzeile unvollständig', id, i); });
  (d.questions || []).forEach((q, i) => { checkExercise(q, id + '?' + i); prefix(q.id, id + '.', 'Dialogfrage in ' + id); });
});

console.log(`\nVersion: ${appVersion || '?'}${swVersion ? ' (sw.js ✓)' : ''} · Skripte: ${scripts.length}`);
console.log(`Themen mit Inhalt: ${Object.keys(K.content).length} · Übungen: ${nEx} · Wörter: ${nVocab} · Dialoge: ${nDia}`);
console.log(`${errors} Fehler, ${warnings} Hinweise`);
process.exit(errors ? 1 : 0);
