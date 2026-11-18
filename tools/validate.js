/* Inhaltsprüfung – läuft lokal (node tools/validate.js) und als GitHub Action.
 * Prüft: eindeutige IDs, gültige Antworten, Erklärungen vorhanden, Wortschatz- und Dialogformat.
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console };
vm.createContext(ctx);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
[...html.matchAll(/<script src="([^"?]+)/g)].map(m => m[1]).filter(s => !s.endsWith('app.js'))
  .forEach(s => vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s }));
const K = ctx.window.KOPRU;

let errors = 0, warnings = 0;
const err = (...a) => { errors++; console.log('FEHLER:', ...a); };
const warn = (...a) => { warnings++; console.log('Hinweis:', ...a); };
const ids = new Set();
const useId = (id, where) => { if (!id) return err('ID fehlt', where); if (ids.has(id)) err('ID doppelt', id); ids.add(id); };

// Lehrplan
const topicIds = new Set();
Object.values(K.courses).forEach(c => Object.values(c.levels).forEach(l => l.forEach(([id]) => {
  if (topicIds.has(id)) err('Thema doppelt', id); topicIds.add(id);
})));

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
  (K.content[tid].exercises || []).forEach((e, i) => { nEx++; checkExercise(e, tid + '#' + i); });
});

let nVocab = 0;
Object.entries(K.vocab || {}).forEach(([key, list]) => list.forEach(v => {
  nVocab++; useId(v.id, key);
  if (!v.t || !v.n) err('Wort ohne t/n', v.id);
  if (!v.ex || !v.exn) warn('Wort ohne Beispielsatz', v.id);
  if (key.startsWith('de-') && /^(der|die|das) /.test(v.t) === false && v.pos === 'n') err('Nomen ohne Artikel', v.id);
}));

let nDia = 0;
Object.entries(K.dialogs || {}).forEach(([id, d]) => {
  nDia++; useId(id, 'dialog');
  if (!d.lines || d.lines.length < 2) err('Dialog zu kurz', id);
  (d.lines || []).forEach((l, i) => { if (!l.t || !l.n || !l.s) err('Dialogzeile unvollständig', id, i); });
  (d.questions || []).forEach((q, i) => checkExercise(q, id + '?' + i));
});

console.log(`\nThemen mit Inhalt: ${Object.keys(K.content).length} · Übungen: ${nEx} · Wörter: ${nVocab} · Dialoge: ${nDia}`);
console.log(`${errors} Fehler, ${warnings} Hinweise`);
process.exit(errors ? 1 : 0);
