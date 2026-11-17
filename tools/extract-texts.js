/* Sammelt alle Texte, die die Seite vorliest (Beispiele, Wortschatz, Lösungen von Lückentext/Satzbau).
 * Aufruf: node tools/extract-texts.js > texts.json
 * Ausgabe: { "de": ["Guten Tag!", …], "tr": ["Merhaba!", …] }  (Sprache = Zielsprache des Kurses)
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = { window: {} };
vm.createContext(ctx);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
// Alle Skripte in derselben Reihenfolge wie index.html laden (außer app.js)
const scripts = [...html.matchAll(/<script src="([^"?]+)/g)].map(m => m[1]).filter(s => !s.endsWith('app.js'));
scripts.forEach(s => vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s }));

const K = ctx.window.KOPRU;
const plain = s => String(s || '').replace(/\*\*|\*/g, '').trim();   // identisch zu plain() in app.js
const out = {};
Object.values(K.courses).forEach(c => {
  const set = new Set();
  Object.values(c.levels).forEach(list => list.forEach(([id]) => {
    const d = K.content[id]; if (!d) return;
    (d.lesson || []).forEach(b => {
      (b.ex || []).forEach(e => set.add(plain(e[0])));
      (b.vocab || []).forEach(v => set.add(plain(v[0])));
    });
    (d.exercises || []).forEach(ex => {
      if ((ex.t === 'gap' || ex.t === 'order') && ex.a && ex.a[0]) set.add(plain(ex.a[0]));
    });
  }));
  set.delete('');
  out[c.target] = [...set].sort();
});
process.stdout.write(JSON.stringify(out, null, 1));
