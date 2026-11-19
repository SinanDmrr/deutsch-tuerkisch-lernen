/* Stimmen pro Sprecher (ADR-14) – rein, ohne DOM/localStorage, in Node (Werkzeug) und im Browser (App) identisch.
 * assign(lines, slots, fallback, roleG) ordnet jedem Sprecher eines Dialogs/Hörtexts einen Stimm-Platz zu.
 *   lines    [{ s: Sprechername, g: 'f'|'m'|'' }]   (g leer → roleG, sonst „neutral“)
 *   slots    Platznamen in fester Reihenfolge, z. B. ['female','male','male2']; Plätze eines Geschlechts beginnen mit female/male
 *   fallback Reihenfolge für Sprecher, deren Geschlecht keine Stimme hat, z. B. TR ['male2','male']
 *   roleG    Geschlecht für Zeilen ohne g (Wahlzeilen im Rollenspiel), sonst ''
 * → { speakers: [Name in Reihenfolge des ersten Auftretens], map: { Name: { slot, fb } } }   slot = null, wenn es gar keine Plätze gibt.
 */
(function (DT) {
  'use strict';

  function slotGender(slot) { return /^female/.test(slot) ? 'f' : /^male/.test(slot) ? 'm' : ''; }

  function assign(lines, slots, fallback, roleG) {
    slots = (slots || []).slice();
    var fb = (fallback || []).filter(function (s) { return slots.indexOf(s) >= 0; });
    var speakers = [], gOf = {}, map = {}, used = {}, rr = { f: 0, m: 0 };
    (lines || []).forEach(function (l) {
      var s = l.s == null ? '' : String(l.s);
      if (!Object.prototype.hasOwnProperty.call(gOf, s)) {
        var g = l.g || roleG || '';
        gOf[s] = (g === 'f' || g === 'm') ? g : '';
        speakers.push(s);
      }
    });
    function own(g) { return slots.filter(function (x) { return slotGender(x) === g; }); }
    function firstUnused(list) { for (var i = 0; i < list.length; i++) if (!used[list[i]]) return list[i]; return null; }
    // Durchgang 1: eigenes Geschlecht – erster unbenutzter Platz, sonst reihum
    speakers.forEach(function (s) {
      var g = gOf[s], mine = g ? own(g) : [];
      if (!mine.length) return;
      var slot = firstUnused(mine);
      if (!slot) { slot = mine[rr[g] % mine.length]; rr[g]++; }
      used[slot] = true; map[s] = { slot: slot, fb: false };
    });
    // Durchgang 2: ohne eigene Stimme (fb) bzw. neutral – erster unbenutzter Platz der Fallback-Liste, sonst deren erster
    var order = fb.length ? fb : slots;
    speakers.forEach(function (s) {
      if (map[s]) return;
      var slot = firstUnused(order) || order[0] || null;
      if (slot) used[slot] = true;
      map[s] = { slot: slot, fb: !!gOf[s] };
    });
    return { speakers: speakers, map: map };
  }

  // Plätze aus einer Stimmenliste (manifest.voices[lang] bzw. tts-voices.json): female, male, dann Extra-Plätze in Schlüssel-Reihenfolge
  function slotsOf(voicesOfLang) {
    var keys = Object.keys(voicesOfLang || {}).filter(function (k) { return slotGender(k) && voicesOfLang[k] && (!Array.isArray(voicesOfLang[k]) || voicesOfLang[k].length); });
    return keys.sort(function (a, b) {
      var ba = a === 'female' ? 0 : a === 'male' ? 1 : 2, bb = b === 'female' ? 0 : b === 'male' ? 1 : 2;
      return ba - bb || (a < b ? -1 : a > b ? 1 : 0);
    });
  }

  DT.voices = { assign: assign, slotGender: slotGender, slotsOf: slotsOf };
})(window.DT = window.DT || {});
