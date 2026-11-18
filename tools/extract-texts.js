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
// Nur Lehrplan und Inhalte laden, in derselben Reihenfolge wie index.html (ADR-10: App-/Kern-Dateien nutzen DOM/Speicher)
const scripts = [...html.matchAll(/<script\s+src="(js\/(?:curriculum|content\/[A-Za-z0-9_-]+)\.js)(?:\?[^"]*)?"/g)].map(m => m[1]);
scripts.forEach(s => vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s }));

const K = ctx.window.KOPRU;
const plain = s => String(s || '').replace(/\*\*|\*/g, '').trim();   // identisch zu plain() in app.js
function addEx(ex, set) {
  if ((ex.t === 'gap' || ex.t === 'order' || ex.t === 'dictation') && ex.a && ex.a[0]) set.add(plain(ex.a[0]));
  if (ex.say) set.add(plain(ex.say));
}
const out = {};
Object.values(K.courses).forEach(c => {
  const set = new Set();
  Object.values(c.levels).forEach(list => list.forEach(([id]) => {
    const d = K.content[id]; if (!d) return;
    (d.lesson || []).forEach(b => {
      (b.ex || []).forEach(e => set.add(plain(e[0])));
      (b.vocab || []).forEach(v => set.add(plain(v[0])));
    });
    (d.exercises || []).forEach(ex => addEx(ex, set));
  }));
  const lv = c.target;  // Wortschatz & Dialoge: Schlüssel beginnen mit Kurs-ID (de-a1, tr-a1 …)
  Object.entries(K.vocab || {}).forEach(([key, list]) => {
    if (!key.startsWith(c.id + '-')) return;
    list.forEach(v => { set.add(plain(v.t)); if (v.ex) set.add(plain(v.ex)); });
  });
  Object.entries(K.dialogs || {}).forEach(([id, d]) => {
    if (!id.startsWith(c.id + '-')) return;
    (d.lines || []).forEach(l => set.add(plain(l.t)));
    (d.questions || []).forEach(q => addEx(q, set));
  });
  Object.entries(K.texts || {}).forEach(([id, t]) => {   // Lesetexte: Absätze bzw. Anzeigen (ADR-12.2: body[*] / items[*].t)
    if (!id.startsWith(c.id + '-')) return;
    (t.body || []).forEach(p => set.add(plain(p)));
    (t.items || []).forEach(it => set.add(plain(it.t)));
    (t.questions || []).forEach(q => addEx(q, set));
  });
  set.delete('');
  out[c.target] = [...set].sort();
});
process.stdout.write(JSON.stringify(out, null, 1));
