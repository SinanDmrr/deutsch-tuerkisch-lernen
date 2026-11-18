/* Lesetexte (ADR-12.2) – rein, ohne DOM/localStorage, in Node testbar.
 * Format: K.addText('de-a2-r01', { level, kind:'read', genre, title, sub, body:[…] | items:[{h,t}], gloss?, scene?, questions:[…] })
 * Dieses Modul prüft das Format (check) und liefert Absätze für Anzeige und Audio (paragraphs).
 */
(function (DT) {
  'use strict';

  var GENRES = ['anzeige', 'email', 'nachricht', 'hinweis', 'artikel', 'programm', 'formular'];
  var QTYPES = ['mc', 'gap', 'match']; // cloze, sort, write folgen mit Schritt 5/7 (erst wenn der Player sie darstellen kann)
  var KINDS = { r: 'read' };                       // h (Hörtext) folgt in einem späteren Schritt
  var ID_RE = /^([a-z]{2})-(a1|a2|b1|b2|c1|c2)-([rh])(\d{2,})$/;
  var MIN_WORDS = 60, MAX_WORDS = 180;

  function plain(s) { return String(s == null ? '' : s).replace(/\*\*|\*/g, '').trim(); }

  // Anzeige-/Vorlese-Absätze: [{ h?, t }]
  function paragraphs(text) {
    if (!text) return [];
    if (text.body) return text.body.map(function (p) { return { t: p }; });
    return (text.items || []).map(function (it) { return { h: it.h, t: it.t }; });
  }
  function fullText(text) { return paragraphs(text).map(function (p) { return plain(p.t); }).join(' '); }
  function wordCount(text) {
    var s = fullText(text);
    return s ? s.split(/\s+/).filter(Boolean).length : 0;
  }

  // → { errors:[…], warnings:[…] } (Texte als Meldung, ohne IDs)
  function check(id, t) {
    var errors = [], warnings = [], m = ID_RE.exec(id || '');
    if (!m) { errors.push('Text-ID ungültig (erwartet <kurs>-<niveau>-r<nn>, z. B. de-a2-r01)'); return { errors: errors, warnings: warnings }; }
    if (m[3] !== 'r') errors.push('Hörtexte (h) werden noch nicht unterstützt');
    if (t.kind !== KINDS[m[3]]) errors.push('kind muss „' + (KINDS[m[3]] || '?') + '“ sein (passend zum Buchstaben in der ID)');
    if (!t.level || String(t.level).toLowerCase() !== m[2]) errors.push('level passt nicht zur ID');
    if (GENRES.indexOf(t.genre) < 0) errors.push('genre ungültig (' + GENRES.join('|') + ')');
    if (!t.title || !t.sub) errors.push('title und sub (DE/TR) sind Pflicht');
    var hasBody = !!(Array.isArray(t.body) && t.body.length), hasItems = !!(Array.isArray(t.items) && t.items.length);
    if (hasBody === hasItems) errors.push('genau eines von body/items angeben');
    if (hasBody) t.body.forEach(function (p, i) { if (!plain(p)) errors.push('body[' + i + '] leer'); });
    if (hasItems) {
      var seen = {};
      t.items.forEach(function (it, i) {
        if (!it || !it.h || !plain(it.t)) errors.push('items[' + i + '] braucht h und t');
        else { if (seen[it.h]) errors.push('items[*].h doppelt: ' + it.h); seen[it.h] = true; }
      });
    }
    var qs = t.questions || [];
    if (!Array.isArray(t.questions)) errors.push('questions fehlt');
    var counted = 0;
    qs.forEach(function (q) {
      if (QTYPES.indexOf(q.t) < 0) errors.push('Fragetyp „' + q.t + '“ nicht erlaubt (' + QTYPES.join(', ') + ')');
      else if (q.t !== 'write') counted++;
      if (q.id && q.id.indexOf(id + '.q') !== 0) errors.push('Fragen-ID muss mit „' + id + '.q“ beginnen: ' + q.id);
    });
    if (counted < 3) errors.push('mindestens 3 gewertete Fragen nötig (hat ' + counted + ')');
    if (t.scene != null && !t.scene) errors.push('scene leer');
    if (t.gloss != null && (typeof t.gloss !== 'object' || Array.isArray(t.gloss))) errors.push('gloss muss ein Objekt { Wort: Erklärung } sein');
    var n = wordCount(t);
    if (n && (n < MIN_WORDS || n > MAX_WORDS)) warnings.push('Länge ' + n + ' Wörter (Richtwert ' + MIN_WORDS + '–' + MAX_WORDS + ')');
    var low = fullText(t).toLowerCase();
    Object.keys(t.gloss || {}).forEach(function (w) {
      if (low.indexOf(String(w).toLowerCase()) < 0) warnings.push('gloss-Wort kommt im Text nicht vor: ' + w);
    });
    return { errors: errors, warnings: warnings };
  }

  DT.texts = { GENRES: GENRES, QTYPES: QTYPES, ID_RE: ID_RE, plain: plain, paragraphs: paragraphs, fullText: fullText, wordCount: wordCount, check: check };
})(window.DT = window.DT || {});
