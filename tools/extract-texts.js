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

vm.runInContext(fs.readFileSync(path.join(root, 'js', 'core', 'voices.js'), 'utf8'), ctx, { filename: 'js/core/voices.js' });   // rein (ADR-10/14)
vm.runInContext(fs.readFileSync(path.join(root, 'js', 'core', 'catalog.js'), 'utf8'), ctx, { filename: 'js/core/catalog.js' });   // dialogLines: Wahlzeilen des Rollenspiels (ADR-12.6)
const VA = ctx.window.DT.voices, CAT = ctx.window.DT.catalog;
const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'tts-voices.json'), 'utf8'));
const K = ctx.window.KOPRU;
const plain = s => String(s || '').replace(/\*\*|\*/g, '').trim();   // identisch zu plain() in app.js
function addEx(ex, set) {
  if ((ex.t === 'gap' || ex.t === 'order' || ex.t === 'dictation') && ex.a && ex.a[0]) set.add(plain(ex.a[0]));
  if (ex.say) set.add(plain(ex.say));
}
const out = {}, extraOut = {};
// Stimm-Plätze je Sprache aus der Konfiguration (wie die App sie aus manifest.voices ableitet): female, male, dann Extra-Plätze
function slotsFor(lang) { return VA.slotsOf(Object.assign({}, (cfg.voices || {})[lang], ((cfg.extra || {})[lang]) || {})); }
// Zeilen mit Sprecher (Dialoge, Hörtexte): Texte der Plätze, die NICHT die Primärstimmen (female/male) sind, zusätzlich in Extra-Stimmen erzeugen
function addLines(lines, lang, roleG) {
  const slots = slotsFor(lang), res = VA.assign(lines, slots, ((cfg.fallback || {})[lang]) || [], roleG || '');
  lines.forEach(l => {
    const sl = (res.map[l.s] || {}).slot;
    if (sl && sl !== 'female' && sl !== 'male' && ((cfg.extra || {})[lang] || {})[sl]) {
      ((extraOut[lang] = extraOut[lang] || {})[sl] = extraOut[lang][sl] || new Set()).add(plain(l.t));
    }
  });
}
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
    const dl = CAT.dialogLines(d);   // Wahlzeile → richtige Antwort in der Stimme der Rolle (roleG)
    dl.forEach(l => set.add(plain(l.t)));
    addLines(dl, c.target, d.roleG);
    (d.questions || []).forEach(q => addEx(q, set));
  });
  Object.entries(K.texts || {}).forEach(([id, t]) => {   // Lesetexte: Absätze bzw. Anzeigen (ADR-12.2: body[*] / items[*].t)
    if (!id.startsWith(c.id + '-')) return;
    (t.body || []).forEach(p => set.add(plain(p)));
    (t.items || []).forEach(it => set.add(plain(it.t)));
    (t.lines || []).forEach(l => set.add(plain(l.t)));   // Hörtext (ADR-12.3): Zeilen in der Stimme des Sprechers
    addLines(t.lines || [], c.target);
    (t.questions || []).forEach(q => addEx(q, set));
  });
  Object.entries(K.writes || {}).forEach(([id, w]) => {   // Schreibaufgaben (ADR-13): Mustertext und Redemittel
    if (!id.startsWith(c.id + '-')) return;
    if (w.model) set.add(plain(w.model));
    (w.chunks || []).forEach(x => set.add(plain(x)));
  });
  set.delete('');
  out[c.target] = [...set].sort();
});
// Zusätzlich zu den Primärstimmen (die weiter ALLE Texte bekommen): extra.<lang>.<platz> = [Texte]
const extra = {};
Object.keys(extraOut).forEach(lang => { extra[lang] = {}; Object.keys(extraOut[lang]).forEach(sl => { extra[lang][sl] = [...extraOut[lang][sl]].sort(); }); });
if (Object.keys(extra).length) out.extra = extra;
process.stdout.write(JSON.stringify(out, null, 1));
