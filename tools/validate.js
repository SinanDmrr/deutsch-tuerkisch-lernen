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

// Bewertung und Katalog (ADR-12.9): reine Kernlogik – hier geladen, damit Syntax-/Ladefehler den Validator rot machen
const coreCtx = { window: {}, console }; vm.createContext(coreCtx);
['check.js', 'catalog.js', 'voices.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(root, 'js', 'core', f), 'utf8'), coreCtx, { filename: 'js/core/' + f }));
if (!coreCtx.window.DT.check || !coreCtx.window.DT.catalog || !coreCtx.window.DT.voices) err('js/core/check.js, catalog.js bzw. voices.js definiert DT.check/DT.catalog/DT.voices nicht');
const CHK = coreCtx.window.DT.check || {};

/* ---------- Schreibweise in Lücken/Diktaten (strikte Prüfung: Groß-/Kleinschreibung und Satzzeichen zählen) ---------- */
const UP = /^[A-ZÄÖÜÇĞİŞ]/, LOW = /^[a-zäöüßçğışı]/;
const firstLetter = x => (String(x).match(/[A-Za-zÄÖÜäöüßÇĞİŞçğışıÂâÎîÛû]/) || [''])[0];
const DE_NOUNS = new Set(), DE_POLITE = new Set(['Sie', 'Ihnen', 'Ihr', 'Ihre', 'Ihren', 'Ihrem', 'Ihrer', 'Ihres']);
['de-a1', 'de-a2'].forEach(k => ((K.vocab || {})[k] || []).forEach(v => {
  if (v.pos !== 'n') return;
  [v.t, v.pl].forEach(x => { if (x) String(x).replace(/^(der|die|das)\s+/, '').split(/[\s/,]+/).forEach(w => { if (UP.test(w)) DE_NOUNS.add(w); }); });
}));
const isDeNoun = w => DE_NOUNS.has(w) || [...DE_NOUNS].some(n => n.length >= 4 && w.startsWith(n) && w.length - n.length <= 2);   // Endung -n/-en/-s
const ARTICLE_BEFORE = /(?:^|\s)(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines|kein|keine|keinen|keinem|keiner|mein|meine|meinen|meinem|meiner|dein|deine|sein|seine|ihr|ihre|unser|unsere)\s*$/i;
function checkSpelling(e) {
  const lang = String(e.id).slice(0, 2), S = CHK.strict || (x => x);
  if (e.cs === false) return;
  const a = (e.a || []).map(String);
  // (c) Lösungen, die sich nur typografisch unterscheiden, sind doppelt; fehlender Apostroph/Komma als Alternative = Fehler
  a.forEach((x, i) => a.forEach((y, j) => {
    if (j <= i) return;
    if (S(x) === S(y)) warn('Lösung doppelt (nur typografisch verschieden)', e.id, y);
    else if (x.replace(/['’,]/g, '') === y.replace(/['’,]/g, '') || S(x).replace(/[',]/g, '') === S(y).replace(/[',]/g, '')) err('Lösungen unterscheiden sich nur durch Apostroph/Komma – eine davon ist falsch geschrieben', e.id, x + ' | ' + y);
  }));
  if (e.t === 'dictation') {
    const say = String(e.say || ''), end = /[.?!]["“”»]?$/.test(say.trim());
    if (a[0] && S(a[0]) !== S(say)) err('dictation: a[0] muss say entsprechen (bis auf Leerraum/typografische Zeichen)', e.id);
    a.forEach(x => {
      if (end && !/[.?!]["“”»]?$/.test(x.trim())) err('dictation: Lösung ohne Schlusszeichen (. ? !)', e.id, x);
      if (firstLetter(x) && firstLetter(say) && /^\S/.test(x) && x.trim()[0] !== say.trim()[0] && UP.test(say.trim()) !== UP.test(x.trim())) err('dictation: Lösung beginnt anders als say (Großschreibung)', e.id, x);
    });
    return;
  }
  // (b) gap: Satzanfang → Großbuchstabe; mitten im Satz → klein, außer Nomen (DE), Höflichkeitsform, Eigennamen
  const q = String(e.q || ''), i = q.search(/_{3,}/);
  if (i < 0) return;
  const before = q.slice(0, i), start = !before.trim() || /[.?!]\s*$/.test(before) || /[„“"«]\s*$/.test(before);
  const wordJoined = /[\p{L}]$/u.test(before);   // Lücke mitten im Wort (Stra___e)
  if (wordJoined) return;
  const qWords = new Set(q.replace(/_{3,}/g, ' ').split(/[^\p{L}0-9]+/u).filter(w => UP.test(w)));
  a.forEach(x => {
    const w = x.trim().split(/[\s'’]/)[0];
    if (!/^\p{L}/u.test(w)) return;   // beginnt mit Ziffer o. Ä.
    if (start) { if (!UP.test(w)) err('gap: Lücke am Satzanfang – Lösung muss großgeschrieben sein', e.id, x); return; }
    if (UP.test(w)) {
      const known = lang === 'de' ? (isDeNoun(w) || DE_POLITE.has(w)) : false;
      const fromQ = [...qWords].some(n => n.length >= 3 && w.startsWith(n.replace(/[’']/g, '')));
      if (!known && !fromQ) warn('gap: Lösung mitten im Satz großgeschrieben – Nomen/Eigenname? bitte prüfen', e.id, x);
    } else if (lang === 'de' && ARTICLE_BEFORE.test(before)) {
      const cap = w[0].toUpperCase() + w.slice(1);
      if (DE_NOUNS.has(cap)) err('gap: Nomen nach Artikel muss großgeschrieben sein', e.id, x);
    }
  });
}

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
      // wrong-Schlüssel dürfen keine richtige Lösung sein (strikt; bei cs:false auch ohne Groß-/Kleinschreibung)
      if (e.wrong) Object.keys(e.wrong).forEach(k => { if (e.a.some(a => e.cs === false ? a.toLowerCase() === k.toLowerCase() : (CHK.strict || String)(a) === (CHK.strict || String)(k))) err('wrong == Antwort', e.id, k); });
      if (e.cs === true) warn('cs:true ist jetzt Standard und kann entfallen', e.id);
      checkSpelling(e);
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
    // ab A2: ID-Muster <kurs>-a2.w<nnn> (genau dreistellig bis 999) und optionale Verb-Zusatzfelder
    if (/-a2$/.test(key) && v.id && !new RegExp('^' + key + '\\.w\\d{3}$').test(String(v.id))) err(`A2-Wort-ID muss ${key}.w<nnn> lauten`, v.id);
    if (v.topic && !(K.wordfields || []).some(f => f[0] === v.topic)) err('Wortfeld (topic) unbekannt', v.id, v.topic);
    const verbFields = key.startsWith('de-') ? ['pf', 'rek'] : ['ao', 'rek'];
    ['pf', 'ao', 'rek'].forEach(f => {
      if (v[f] == null) return;
      if (!verbFields.includes(f)) return err(`Feld „${f}“ gibt es im Kurs ${key.split('-')[0]} nicht (erlaubt: ${verbFields.join(', ')})`, v.id);
      if (typeof v[f] !== 'string' || !v[f].trim()) err(`Feld „${f}“ muss ein nicht leerer Text sein`, v.id);
      else if (v.pos !== 'v') warn(`Feld „${f}“ ist für Verben (pos "v") gedacht`, v.id);
    });
  });
});
// Doppelte Wörter (gleiche Schreibweise im selben Kurs, auch zwischen A1 und A2) – als Hinweis, Homonyme sind selten, aber möglich
{
  const seenW = {};
  Object.entries(K.vocab || {}).forEach(([key, list]) => list.forEach(v => {
    const k = key.split('-')[0] + '|' + String(v.t || '').toLowerCase().trim() + '|' + (v.pos === 'v' ? 'v' : 'x');
    if (seenW[k]) warn('Wort doppelt', `${seenW[k]} / ${v.id}`, v.t); else seenW[k] = v.id;
  }));
}

/* ---------- A2-Wortschatz: Zusammenhang und Abdeckung (Hinweise, keine Fehler) ---------- */
const normW = x => String(x).replace(/['’]/g, '').replace(/İ/g, 'i').toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, ' ').split(/\s+/).filter(Boolean);
const stemOf = (w, tr) => { const b = tr ? w.replace(/(mek|mak)$/, '') : w.replace(/(en|n|e)$/, ''); return b.length >= 3 ? b : w; };
const stringsOf = o => typeof o === 'string' ? [o] : (o && typeof o === 'object') ? Object.values(o).flatMap(stringsOf) : [];
Object.keys(K.courses).forEach(cid => {
  const tr = cid === 'tr', a2 = (K.vocab || {})[cid + '-a2'] || [];
  if (!a2.length) { console.log(`Info: Abdeckungs-/Zusammenhangsprüfung A2 (${cid}) inaktiv – noch keine A2-Wörter`); return; }
  // Zusammenhang: Text aller A2-Inhalte des Kurses
  let corpus = '';
  Object.entries(K.texts || {}).forEach(([id, t]) => { if (id.startsWith(cid + '-a2-')) corpus += ' ' + stringsOf(t).join(' '); });
  Object.entries(K.dialogs || {}).forEach(([id, d]) => { if (id.startsWith(cid + '-a2-')) corpus += ' ' + stringsOf(d).join(' '); });
  Object.entries(K.content || {}).forEach(([id, d]) => { if (id.startsWith(cid + '-a2-')) corpus += ' ' + stringsOf(d).join(' '); });
  corpus = ' ' + normW(corpus).join(' ');
  const lonely = a2.filter(v => {
    const toks = normW(String(v.t).replace(/^(der|die|das|sich)\s+/i, '')).filter(w => w.length >= 3 || normW(v.t).length === 1);
    return !toks.some(w => corpus.includes(w.length >= 4 ? ' ' + stemOf(w, tr) : ' ' + w + ' ') );
  });
  if (lonely.length) warn(`${lonely.length} von ${a2.length} A2-Wörtern (${cid}) kommen in keinem A2-Text/-Dialog/-Übung vor, z. B.: ` + lonely.slice(0, 15).map(v => v.t).join(', '));
  // Abdeckung je Text: A1- + A2-Wortschatz + gloss
  const stems = new Set(), exact = new Set();
  const addForm = x => normW(x).forEach(w => { exact.add(w); stems.add(stemOf(w, tr)); });
  ['a1', 'a2'].forEach(l => ((K.vocab || {})[cid + '-' + l] || []).forEach(v => { addForm(v.t); if (v.pl) addForm(v.pl); if (v.pf) addForm(v.pf); if (v.ao) addForm(v.ao); }));
  const known = (w, gl) => exact.has(w) || gl.has(w) || /^\d+$/.test(w) || (() => { for (let i = Math.min(w.length, 12); i >= 3; i--) if (stems.has(w.slice(0, i))) return true; return false; })();
  Object.entries(K.texts || {}).forEach(([id, t]) => {
    if (!id.startsWith(cid + '-a2-')) return;
    const text = [].concat(t.body || [], (t.items || []).map(i => i.t), (t.lines || []).map(l => l.t)).join(' ');
    const words = normW(text), gl = new Set(); Object.keys(t.gloss || {}).forEach(g => normW(g).forEach(w => gl.add(w)));
    if (!words.length) return;
    const unk = [...new Set(words.filter(w => !known(w, gl)))], pctCov = 100 * (1 - words.filter(w => !known(w, gl)).length / words.length);
    if (pctCov < 95) warn(`Abdeckung ${id}: ${pctCov.toFixed(0)} % der Textwörter bekannt (A1/A2-Wortschatz, gloss); unbekannt z. B.: ` + unk.slice(0, 10).join(', '));
  });
});

// Lesetexte (ADR-12.2): Format prüft js/core/texts.js (rein, ohne DOM), Fragen wie alle Übungen
const textsCtx = { window: {}, console }; vm.createContext(textsCtx);
vm.runInContext(fs.readFileSync(path.join(root, 'js', 'core', 'texts.js'), 'utf8'), textsCtx, { filename: 'js/core/texts.js' });
const TX = textsCtx.window.DT.texts;
let nTxt = 0;
Object.entries(K.texts || {}).forEach(([id, t]) => {
  nTxt++; useId(id, 'text');
  const r = TX.check(id, t);
  const lbl = t.kind === 'listen' ? 'Hörtext:' : 'Lesetext:';
  r.errors.forEach(m => err(lbl, m, id));
  r.warnings.forEach(m => warn(lbl, m, id));
  (t.questions || []).forEach((q, i) => checkExercise(q, id + '?' + i));
});

let nDia = 0;
Object.entries(K.dialogs || {}).forEach(([id, d]) => {
  nDia++; useId(id, 'dialog');
  if (!DIALOG_RE.test(id)) err('Dialog-ID ungültig (erwartet <kurs>-<niveau>-d<nn>, z. B. de-a1-d01)', id);
  else if (d.level && d.level.toLowerCase() !== id.split('-')[1]) err('Dialog: level passt nicht zur ID', id, d.level);
  if (!d.lines || d.lines.length < 2) err('Dialog zu kurz', id);
  (d.lines || []).forEach((l, i) => {
    if (!l.t || !l.n || !l.s) err('Dialogzeile unvollständig', id, i);
    else if (!/-a1-/.test(id) && l.g !== 'f' && l.g !== 'm') err('Dialogzeile ab A2 braucht g (f|m) für die Stimme (ADR-14)', id, i);
  });
  (d.questions || []).forEach((q, i) => { checkExercise(q, id + '?' + i); prefix(q.id, id + '.', 'Dialogfrage in ' + id); });
});

console.log(`\nVersion: ${appVersion || '?'}${swVersion ? ' (sw.js ✓)' : ''} · Skripte: ${scripts.length}`);
console.log(`Themen mit Inhalt: ${Object.keys(K.content).length} · Übungen: ${nEx} · Wörter: ${nVocab} · Dialoge: ${nDia} · Lesetexte: ${nTxt}`);
console.log(`${errors} Fehler, ${warnings} Hinweise`);
process.exit(errors ? 1 : 0);
