/* Inhaltsprüfung – läuft lokal (node tools/validate.js) und als GitHub Action.
 * Prüft: eindeutige IDs, ID-Präfixe, gültige Antworten, Erklärungen vorhanden, Wortschatz- und Dialogformat,
 * gleiche Version überall (?v= in index.html, APP_VERSION, später VERSION in sw.js), Manifest aktuell (ADR-15).
 * Geladen werden NUR js/curriculum.js und js/content/*.js (ADR-10) – App- und Kern-Dateien dürfen DOM/Speicher nutzen.
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console };
vm.createContext(ctx);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
/* ADR-15: Dateiliste aus dem Manifest (js/content/manifest.js, erzeugt von tools/build-manifest.js) statt aus index.html.
 * Geladen werden weiterhin ALLE Inhaltsdateien (Lehrplan zuerst, dann Manifest, dann je Paket). */
const BM = require('./build-manifest.js');
const manifestFile = path.join(root, 'js', 'content', 'manifest.js');
vm.runInContext(fs.readFileSync(path.join(root, 'js', 'curriculum.js'), 'utf8'), ctx, { filename: 'js/curriculum.js' });
if (fs.existsSync(manifestFile)) vm.runInContext(fs.readFileSync(manifestFile, 'utf8'), ctx, { filename: 'js/content/manifest.js' });
const MF = (ctx.window.KOPRU && ctx.window.KOPRU.manifest) || {};
const scripts = ['js/curriculum.js'];
Object.keys(MF).sort().forEach(k => (MF[k].files || []).forEach(f => scripts.push('js/content/' + f)));
scripts.slice(1).forEach(s => { if (fs.existsSync(path.join(root, s))) vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s }); });
const K = ctx.window.KOPRU;

let errors = 0, warnings = 0;
const err = (...a) => { errors++; console.log('FEHLER:', ...a); };
const warn = (...a) => { warnings++; console.log('Hinweis:', ...a); };
if (!K) { err('window.KOPRU fehlt – js/curriculum.js fehlt oder ist kaputt'); process.exit(1); }

/* ---------- Manifest (ADR-15) ---------- */
const MF_CMD = 'node tools/build-manifest.js';
if (!fs.existsSync(manifestFile)) err('js/content/manifest.js fehlt –', MF_CMD, 'ausführen');
else {
  const built = BM.build(root);
  built.problems.forEach(p => err('Manifest:', p));
  if (fs.readFileSync(manifestFile, 'utf8') !== built.text) err('js/content/manifest.js ist veraltet –', MF_CMD, 'ausführen');
}
// (a) jede Inhaltsdatei ↔ Manifest
fs.readdirSync(path.join(root, 'js', 'content')).filter(f => f.endsWith('.js') && f !== 'manifest.js').forEach(f => {
  if (!BM.FILE_RE.test(f)) err('Inhaltsdatei: Name muss <kurs>-<niveau>[-teil].js sein', 'js/content/' + f);
  else if (!scripts.includes('js/content/' + f)) err('Inhaltsdatei fehlt im Manifest –', MF_CMD, 'ausführen', 'js/content/' + f);
});
scripts.slice(1).forEach(s => { if (!fs.existsSync(path.join(root, s))) err('Manifest nennt eine Datei, die es nicht gibt –', MF_CMD, 'ausführen', s); });
// index.html: Lehrplan und Manifest synchron, Manifest direkt danach (K.setManifest braucht KOPRU)
const tagOrder = [...html.matchAll(/<script\s+src="(js\/[^"?]+)/g)].map(m => m[1]);
const iCur = tagOrder.indexOf('js/curriculum.js'), iMf = tagOrder.indexOf('js/content/manifest.js');
if (iCur < 0) err('index.html: js/curriculum.js nicht eingebunden');
if (iMf < 0) err('index.html: js/content/manifest.js nicht eingebunden');
else if (iMf !== iCur + 1) err('index.html: js/content/manifest.js muss direkt nach js/curriculum.js stehen');
if (tagOrder.includes('js/core/loader.js') && tagOrder.indexOf('js/core/loader.js') > tagOrder.indexOf('js/app.js')) err('index.html: js/core/loader.js muss vor js/app.js stehen');
// (c) größte Startlast je Kurs: alle Pakete eines Kurses + Lehrplan/Manifest + App/Kern (ADR-15 Stufe 2 ab 1,5 MB)
const startBase = tagOrder.filter(s => !/^js\/content\/(?!manifest\.js)/.test(s) && fs.existsSync(path.join(root, s)))
  .reduce((n, s) => n + fs.statSync(path.join(root, s)).size, 0);
const startLoad = {};
Object.keys(MF).forEach(k => { const c = k.split('-')[0]; startLoad[c] = (startLoad[c] || startBase) + (MF[k].bytes || 0); });
Object.keys(startLoad).sort().forEach(c => {
  const kb = Math.round(startLoad[c] / 1024);
  console.log(`Startlast Kurs ${c} (alle Niveaus geladen): ${kb} KB roh`);
  if (startLoad[c] > 1.5 * 1024 * 1024) warn(`Startlast Kurs ${c} über 1,5 MB (${kb} KB) – ADR-15 Stufe 2 prüfen`);
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
['check.js', 'catalog.js', 'voices.js', 'writes.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(root, 'js', 'core', f), 'utf8'), coreCtx, { filename: 'js/core/' + f }));
if (!coreCtx.window.DT.check || !coreCtx.window.DT.catalog || !coreCtx.window.DT.voices || !coreCtx.window.DT.writes) err('js/core/check.js, catalog.js, voices.js bzw. writes.js definiert DT.check/DT.catalog/DT.voices/DT.writes nicht');
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

// cloze/sort/respond: Format-Prüfung liegt in js/core/check.js (DT.check.lint, rein und in tools/test-core.js getestet)
function lintNew(e) {
  const r = CHK.lint(e);
  r.errors.forEach(m => err(m[0], e.id, m[1] == null ? '' : m[1]));
  r.warnings.forEach(m => warn(m[0], e.id, m[1] == null ? '' : m[1]));
}

function checkExercise(e, where) {
  useId(e.id, where);
  if (!e.e) warn('Erklärung (e) fehlt', e.id);
  if (e.ext != null && e.ext !== 1) err('ext darf nur 1 sein (Erweiterung eines Niveaus, A1-Aufrüstung P0)', e.id);
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
    case 'cloze': case 'sort': case 'respond': lintNew(e); break;
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
    if (v.ext != null && v.ext !== 1) err('ext darf nur 1 sein (Erweiterung eines Niveaus, A1-Aufrüstung P0)', v.id);
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
  // Abdeckung je Text: A1- + A2-Wortschatz + gloss. Nicht gezählt: Zahlen, Eigennamen (TR: Wörter mit Apostroph-Suffix, großgeschrieben mitten im Satz;
  // DE: großgeschriebenes Wort, das kein Nomen nach Artikel/Adjektiv ist, Sprechernamen, Unterschriften), Stoppwörter (tools/stopwords.js) gelten als bekannt.
  const mk = () => ({ stems: new Set(), exact: new Set() }), SETS = { a1: mk(), a2: mk() }, STOP = require('./stopwords.js')[tr ? 'tr' : 'de'];
  const addStem = (stems, b) => { stems.add(b); if (tr && b.length >= 4) { stems.add(b.replace(/[aeıioöuü]$/, '')); stems.add(b.replace(/t$/, 'd').replace(/k$/, 'ğ').replace(/ç$/, 'c').replace(/p$/, 'b')); } };
  const addForm = (S, x) => normW(x).forEach(w => { S.exact.add(w); addStem(S.stems, stemOf(w, tr)); });
  // A1-Texte: nur A1-Wortschatz; A2-Texte: A1 + A2
  ['a1', 'a2'].forEach(l => ((K.vocab || {})[cid + '-' + l] || []).forEach(v => [v.t, v.pl, v.pf, v.ao].forEach(x => { if (!x) return; addForm(SETS.a2, x); if (l === 'a1') addForm(SETS.a1, x); })));
  const known = (w, gl, S) => S.exact.has(w) || STOP.has(w) || gl.has(w) || (() => { for (let i = Math.min(w.length, 12); i >= 3; i--) if (S.stems.has(w.slice(0, i))) return true; return false; })();
  const paras = t => [].concat(t.body || [], (t.items || []).map(i => i.t), (t.lines || []).map(l => l.t)).map(x => String(x).replace(/\*\*|\*/g, ''));
  const DE_DET = new Set(['der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'einer', 'eines', 'kein', 'keine', 'keinen', 'keinem', 'keiner', 'mein', 'meine', 'meinen', 'meinem', 'meiner', 'dein', 'deine', 'deinen', 'deinem', 'deiner', 'sein', 'seine', 'seinen', 'seinem', 'seiner', 'ihr', 'ihre', 'ihren', 'ihrem', 'ihrer', 'unser', 'unsere', 'unseren', 'unserem', 'euer', 'eure', 'dieser', 'diese', 'dieses', 'diesen', 'diesem', 'jeder', 'jede', 'jedes', 'jeden', 'jedem', 'alle', 'viele', 'einige', 'manche', 'welche', 'welcher', 'welches', 'im', 'am', 'zum', 'zur', 'vom', 'beim', 'ins', 'aufs', 'ans', 'in', 'an', 'auf', 'mit', 'von', 'zu', 'bei', 'nach', 'aus', 'für', 'über', 'unter', 'neben', 'zwischen', 'hinter', 'vor', 'durch', 'gegen', 'ohne', 'um', 'bis', 'seit', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn']);
  // Tokens eines Textes: { w: normalisiert, name: Eigenname/Zahl (nicht zählen) }
  const tokenize = (text, names) => {
    const out = [];
    paras(text).forEach((p, pi, all) => {
      const toks = [...p.matchAll(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu)].map(m => ({ raw: m[0], i: m.index }));
      const sig = pi === all.length - 1 && all.length > 1 && toks.length <= 4;   // kurze Schlusszeile = Unterschrift
      toks.forEach((tk, k) => {
        const raw = tk.raw, w = normW(raw).join(' '), prev = k ? toks[k - 1].raw : '', start = !k || /[.!?:]/.test(p.slice(toks[k - 1].i + prev.length, tk.i));
        const cap = /^\p{Lu}/u.test(raw);
        let name = false;
        if (/\d/.test(raw)) name = true;
        else if (tr && /['’]/.test(raw)) name = true;
        else if (cap && tr && !start) name = true;
        else if (cap && !tr && !start) {
          const pw = prev.toLowerCase(), lower = /^\p{Ll}/u.test(prev);
          name = /^(herr|frau|dr)$/.test(pw) ? true : !DE_DET.has(pw) && !(lower && /(e|en|er|es|em)$/.test(pw));   // Nomen stehen nach Artikel/Präposition/Adjektiv
        } else if (cap && sig) name = true;
        if (name && cap && !/\d/.test(raw)) names.add(w.split(' ')[0].replace(/'.*/, ''));
        out.push({ w: w.split(' ')[0], name: name });
      });
    });
    return out;
  };
  const names = new Set();
  Object.entries(K.texts || {}).forEach(([id, t]) => { if (id.startsWith(cid + '-')) { (t.lines || []).forEach(l => normW(l.s || '').forEach(w => names.add(w))); tokenize(t, names); } });
  Object.entries(K.dialogs || {}).forEach(([id, d]) => { if (id.startsWith(cid + '-')) (d.lines || []).forEach(l => normW(l.s || '').forEach(w => names.add(w))); });
  Object.entries(K.texts || {}).forEach(([id, t]) => {
    const lv = id.startsWith(cid + '-a1-') ? 'a1' : id.startsWith(cid + '-a2-') ? 'a2' : null; if (!lv) return;
    const toks = tokenize(t, names).filter(x => !x.name && !names.has(x.w) && x.w), gl = new Set(); Object.keys(t.gloss || {}).forEach(g => normW(g).forEach(w => gl.add(w)));
    if (!toks.length) return;
    const bad = toks.filter(x => !known(x.w, gl, SETS[lv])), pctCov = 100 * (1 - bad.length / toks.length), freq = {};
    bad.forEach(x => { freq[x.w] = (freq[x.w] || 0) + 1; });
    const top = Object.entries(freq).sort((x, y) => y[1] - x[1] || (x[0] < y[0] ? -1 : 1)).slice(0, 10).map(([w, n]) => n > 1 ? `${w} (${n}×)` : w);
    if (pctCov < 95) warn(`Abdeckung ${id}: ${pctCov.toFixed(0)} % der Textwörter bekannt (${lv === 'a1' ? 'A1' : 'A1/A2'}-Wortschatz, gloss, ohne Namen/Zahlen/Funktionswörter); häufigste unbekannte: ` + top.join(', '));
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
  // Längen-Richtwert nach Niveau: A1 Lesen 25–90, Hören 20–70 (ab A2 wie in texts.js: 60–180 / 30–120)
  const isA1 = /^[a-z]+-a1-/.test(id);
  r.warnings.forEach(m => { if (isA1 && /^Länge /.test(m)) return; warn(lbl, m, id); });
  if (isA1) { const n = TX.wordCount(t), lo = t.kind === 'listen' ? 20 : 25, hi = t.kind === 'listen' ? 70 : 90; if (n && (n < lo || n > hi)) warn(lbl, `Länge ${n} Wörter (Richtwert A1 ${lo}–${hi})`, id); }
  (t.questions || []).forEach((q, i) => checkExercise(q, id + '?' + i));
});

// Schreibaufgaben (ADR-13): Pflichtfelder, Mustertext, Checkliste, Wortgrenzen, IDs, Erklärsprache
// ID-Regel nur an einer Stelle: DT.writes.ID_RE (js/core/writes.js) – dieselbe Regel nutzt sanitize beim Import
const WRITE_RE = (coreCtx.window.DT.writes || {}).ID_RE || /^$/;   // de-a2-s01
const REG = { de: ['du', 'Sie'], tr: ['sen', 'siz'] };
const wCount = s => String(s || '').split(/[\s\/–—]+/).filter(w => /[0-9A-Za-zÀ-ɏ]/.test(w)).length;
const TR_W = new Set(['ve', 'bir', 'bu', 'için', 'ile', 'çok', 'değil', 'gibi', 'ama', 'olur', 'mi', 'ne', 'sen', 'yani', 'daha', 'en', 'her', 'hem', 'olarak', 'cümle', 'fiil', 'sonra', 'önce']);
const DE_W = new Set(['und', 'der', 'die', 'das', 'ist', 'nicht', 'mit', 'ein', 'eine', 'zu', 'auf', 'im', 'wenn', 'auch', 'du', 'für', 'den', 'dem', 'es', 'sich', 'oder', 'wie', 'dann', 'steht', 'immer']);
// grobe Spracherkennung der Erklärtexte: zitierte Beispiele („…“, "…", **…**) zählen nicht
function langScore(s) {
  const t = String(s || '').replace(/„[^“”]*[“”]/g, ' ').replace(/"[^"]*"/g, ' ').replace(/\*\*[^*]*\*\*/g, ' ').replace(/\([^)]*\)/g, ' ');
  const ws = t.toLocaleLowerCase('tr-TR').split(/[^a-zäöüßçğıişâîû]+/).filter(Boolean);
  return { tr: (t.match(/[ıİşŞğĞ]/g) || []).length + ws.filter(w => TR_W.has(w)).length, de: (t.match(/[ßÄ]/g) || []).length + ws.filter(w => DE_W.has(w)).length };
}
let nWrite = 0;
(K.writeDups || []).forEach(id => err('Schreibaufgabe: ID doppelt (zweimal in addWrites)', id));
Object.entries(K.writes || {}).forEach(([id, w]) => {
  nWrite++; useId(id, 'write');
  const lbl = 'Schreibaufgabe:', E = (m, ...x) => err(lbl, m, id, ...x), W = (m, ...x) => warn(lbl, m, id, ...x);
  if (!WRITE_RE.test(id) || !K.courses[id.split('-')[0]]) return E('ID ungültig (erwartet <kurs>-<niveau>-s<nn>, z. B. de-a2-s01)');
  if (!KEY_RE.test(w.key || '')) E('addWrites: Schlüssel ungültig', w.key);
  else if (!id.startsWith(w.key + '-s')) E(`ID passt nicht zur Datei (addWrites „${w.key}“)`);
  const cid = id.split('-')[0], expl = K.courses[cid].ui;       // Erklärsprache = Oberflächensprache des Kurses
  const s = x => typeof x === 'string' && x.trim();
  ['title', 'sub', 'task', 'model', 'modeln', 'e'].forEach(f => { if (!s(w[f])) E(f + ' fehlt'); });
  if (!s(w.scene)) W('scene (Szenario) fehlt');
  if (!Array.isArray(w.points) || w.points.length < 2 || w.points.length > 4 || !w.points.every(s)) E('points braucht 2–4 Inhaltspunkte (Texte)');
  if ((REG[cid] || []).indexOf(w.reg) < 0) E(`reg muss ${(REG[cid] || []).join(' oder ')} sein`, w.reg);
  const wd = w.words || {};
  if (!(Number.isInteger(wd.min) && Number.isInteger(wd.ziel) && wd.min > 0 && wd.min < wd.ziel)) E('words braucht { min, ziel } mit 0 < min < ziel', JSON.stringify(w.words));
  if (w.chunks != null && (!Array.isArray(w.chunks) || !w.chunks.every(s))) E('chunks muss eine Liste von Texten sein');
  if (w.hint != null && (!Array.isArray(w.hint) || !Array.isArray(w.points) || w.hint.length !== w.points.length || !w.hint.every(h => Array.isArray(h) && h.length && h.every(s)))) E('hint: je Inhaltspunkt eine Liste von Leitwörtern (Länge = points)');
  if (!Array.isArray(w.check) || w.check.length < 2 || w.check.length > 6) E('check braucht 2–6 Punkte');
  (w.check || []).forEach((c, i) => { if (!c || !s(c.k) || !s(c.e)) E('check: k und e nötig', i); });
  if (!Array.isArray(w.mistakes) || w.mistakes.length < 2) E('mistakes braucht mindestens 2 typische Fehler');
  (w.mistakes || []).forEach((x, i) => {
    if (!x || !s(x.bad) || !s(x.good) || !s(x.why)) E('mistakes: bad, good und why nötig', i);
    else if (x.bad.trim() === x.good.trim()) E('mistakes: bad = good', i);
  });
  // Hinweise: Länge des Mustertexts, Redemittel im Mustertext (… = beliebiger Teil)
  if (s(w.model) && wd.min && wd.ziel) {
    const n = wCount(w.model);
    if (n < wd.min || n > wd.ziel * 1.5) W(`Mustertext hat ${n} Wörter (min ${wd.min}, Ziel ${wd.ziel}, höchstens ${Math.floor(wd.ziel * 1.5)})`);
  }
  if (s(w.model)) {
    const body = CHK.fold(w.model);
    (w.chunks || []).forEach(c => {
      const parts = String(c).split('…').map(x => CHK.fold(x).trim()).filter(Boolean);
      let at = 0;
      const okIn = parts.every(p => { const k = body.indexOf(p, at); if (k < 0) return false; at = k + p.length; return true; });
      if (!okIn) W('Redemittel kommt im Mustertext nicht vor', c);
    });
  }
  // Erklärsprache: Aufgabe, Punkte, Übersetzung, Checkliste, Fehler-Erklärungen und e
  const other = expl === 'tr' ? 'de' : 'tr';
  const explTexts = [['task', w.task], ['modeln', w.modeln], ['e', w.e]]   // sub: eigene Sprachregel unten
    .concat((w.points || []).map((x, i) => ['points[' + i + ']', x]))
    .concat((w.check || []).flatMap((c, i) => [['check[' + i + '].k', c && c.k], ['check[' + i + '].e', c && c.e]]))
    .concat((w.mistakes || []).map((x, i) => ['mistakes[' + i + '].why', x && x.why]));
  explTexts.forEach(([f, x]) => {
    if (!s(x)) return;
    const sc = langScore(x);
    if (wCount(x) >= 4 && sc[other] >= 2 && sc[expl] * 3 < sc[other]) E(`${f} ist nicht in der Erklärsprache (${expl === 'tr' ? 'Türkisch' : 'Deutsch'})`, String(x).slice(0, 50));
  });
  // Wie bei Dialogen: title in der Zielsprache des Kurses, sub in der anderen Sprache
  // (Kurs de: title Deutsch, sub Türkisch · Kurs tr: title Türkisch, sub Deutsch)
  const tL = cid === 'tr' ? 'tr' : 'de', sL = tL === 'tr' ? 'de' : 'tr', nm = { de: 'Deutsch', tr: 'Türkisch' };
  const rule = `(Kurs ${cid}: title ${nm[tL]}, sub ${nm[sL]} – wie bei Dialogen)`;
  const scT = langScore(w.title), scS = langScore(w.sub);
  if (wCount(w.sub) >= 3 && scS[tL] >= 2 && scS[sL] * 3 < scS[tL]) E(`sub muss ${nm[sL]} sein ${rule}`, String(w.sub).slice(0, 50));
  if (wCount(w.title) >= 3 && scT[sL] >= 2 && scT[tL] * 3 < scT[sL]) E(`title muss ${nm[tL]} sein ${rule}`, String(w.title).slice(0, 50));
});

let nDia = 0;
Object.entries(K.dialogs || {}).forEach(([id, d]) => {
  nDia++; useId(id, 'dialog');
  if (!DIALOG_RE.test(id)) err('Dialog-ID ungültig (erwartet <kurs>-<niveau>-d<nn>, z. B. de-a1-d01)', id);
  else if (d.level && d.level.toLowerCase() !== id.split('-')[1]) err('Dialog: level passt nicht zur ID', id, d.level);
  if (!d.lines || d.lines.length < 2) err('Dialog zu kurz', id);
  (d.lines || []).forEach((l, i) => {
    if (l.me) return;   // Wahlzeile des Rollenspiels (ADR-12.6): prüft catalog.checkRoleplay
    if (!l.t || !l.n || !l.s) err('Dialogzeile unvollständig', id, i);
    else if (!/-a1-/.test(id) && l.g !== 'f' && l.g !== 'm') err('Dialogzeile ab A2 braucht g (f|m) für die Stimme (ADR-14)', id, i);
  });
  (d.questions || []).forEach((q, i) => { checkExercise(q, id + '?' + i); prefix(q.id, id + '.', 'Dialogfrage in ' + id); });
  // Rollenspiel (ADR-12.6): Wahlzeilen als Format prüfen, dann die abgeleiteten Aufgaben wie alle Übungen (IDs, why je falscher Option, Kontext ≤ 3)
  const CAT = coreCtx.window.DT.catalog;
  if (CAT.hasRole(d)) {
    const r = CAT.checkRoleplay(id, d);
    r.errors.forEach(m => err('Rollenspiel:', ...m.filter(x => x != null), id));
    r.warnings.forEach(m => warn('Rollenspiel:', ...m.filter(x => x != null), id));
    if (!r.errors.length) CAT.roleExercises(d).forEach(q => { checkExercise(q, id + '?' + q.id); if (q.ctx.length > 3) err('Rollenspiel: Kontext > 3 Zeilen', q.id); });
  }
});

console.log(`\nVersion: ${appVersion || '?'}${swVersion ? ' (sw.js ✓)' : ''} · Skripte: ${scripts.length}`);
console.log(`Themen mit Inhalt: ${Object.keys(K.content).length} · Übungen: ${nEx} · Wörter: ${nVocab} · Dialoge: ${nDia} · Lesetexte: ${nTxt} · Schreibaufgaben: ${nWrite}`);
console.log(`${errors} Fehler, ${warnings} Hinweise`);
process.exit(errors ? 1 : 0);
