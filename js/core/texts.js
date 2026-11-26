/* Lesetexte (ADR-12.2) – rein, ohne DOM/localStorage, in Node testbar.
 * Hörtexte (ADR-12.3, kind:'listen', ID …-h<nn>): lines:[{ s, g:'f'|'m', t, n }] statt body/items, genre durchsage|anrufbeantworter|radio|gespraech|interview.
 * Format: K.addText('de-a2-r01', { level, kind:'read', genre, title, sub, body:[…] | items:[{h,t}], gloss?, scene?, questions:[…] })
 * Dieses Modul prüft das Format (check) und liefert Absätze für Anzeige und Audio (paragraphs).
 */
(function (DT) {
  'use strict';

  var GENRES = ['anzeige', 'email', 'nachricht', 'hinweis', 'artikel', 'programm', 'formular'];
  var LISTEN_GENRES = ['durchsage', 'anrufbeantworter', 'radio', 'gespraech', 'interview'];
  var QTYPES = ['mc', 'gap', 'match', 'cloze']; // sort und write sind in Texten laut ADR-12.2 nicht vorgesehen
  var LISTEN_QTYPES = ['mc', 'listen', 'gap', 'cloze', 'match'];
  var KINDS = { r: 'read', h: 'listen' };
  var ID_RE = /^([a-z]{2})-(a1|a2|b1|b2|c1|c2)-([rh])(\d{2,})$/;
  var MIN_WORDS = 60, MAX_WORDS = 180, MIN_WORDS_L = 30, MAX_WORDS_L = 120;

  function plain(s) { return String(s == null ? '' : s).replace(/\*\*|\*/g, '').trim(); }

  // Anzeige-/Vorlese-Absätze: [{ h?, t }]
  function paragraphs(text) {
    if (!text) return [];
    if (text.lines) return text.lines.map(function (l) { return { s: l.s, g: l.g, t: l.t, n: l.n }; });
    if (text.body) return text.body.map(function (p) { return { t: p }; });
    return (text.items || []).map(function (it) { return { h: it.h, t: it.t }; });
  }
  function fullText(text) { return paragraphs(text).map(function (p) { return plain(p.t); }).join(' '); }
  function wordCount(text) {
    var s = fullText(text);
    return s ? s.split(/\s+/).filter(Boolean).length : 0;
  }

  // → { errors:[…], warnings:[…] } (Texte als Meldung, ohne IDs)
  function isListen(x) { return !!x && x.kind === 'listen'; }
  // Sprecher eines Hörtexts in Reihenfolge des ersten Auftretens
  function speakers(t) {
    var seen = {}, out = [];
    ((t && t.lines) || []).forEach(function (l) { if (l && !seen[l.s]) { seen[l.s] = true; out.push(l.s); } });
    return out;
  }
  function check(id, t) {
    var errors = [], warnings = [], m = ID_RE.exec(id || '');
    if (!m) { errors.push('Text-ID ungültig (erwartet <kurs>-<niveau>-r<nn>, z. B. de-a2-r01)'); return { errors: errors, warnings: warnings }; }
    var L = m[3] === 'h', genres = L ? LISTEN_GENRES : GENRES, qtypes = L ? LISTEN_QTYPES : QTYPES;
    if (t.kind !== KINDS[m[3]]) errors.push('kind muss „' + (KINDS[m[3]] || '?') + '“ sein (passend zum Buchstaben in der ID)');
    if (!t.level || String(t.level).toLowerCase() !== m[2]) errors.push('level passt nicht zur ID');
    if (genres.indexOf(t.genre) < 0) errors.push('genre ungültig (' + genres.join('|') + ')');
    if (!t.title || !t.sub) errors.push('title und sub (DE/TR) sind Pflicht');
    var hasBody = !!(Array.isArray(t.body) && t.body.length), hasItems = !!(Array.isArray(t.items) && t.items.length);
    if (L) {
      if (hasBody || hasItems) errors.push('Hörtext hat lines (nicht body/items)');
      if (!Array.isArray(t.lines) || !t.lines.length) errors.push('lines fehlt (je s, g, t, n)');
      else t.lines.forEach(function (l, i) {
        if (!l || !l.s || !plain(l.t) || !l.n) errors.push('lines[' + i + '] braucht s, t und n');
        else if (l.g !== 'f' && l.g !== 'm') errors.push('lines[' + i + '].g muss „f“ oder „m“ sein');
      });
      if (t.plays != null && !(t.plays >= 1 && t.plays <= 5)) errors.push('plays muss eine Zahl 1–5 sein');
      if (String(id).slice(0, 2) === 'tr' && speakers(t).length >= 3) warnings.push('TR-Hörtext mit ' + speakers(t).length + ' Sprechern: Stimmen wiederholen sich (ADR-14); höchstens 2 Sprecher, sonst Namen im Text nennen');
    } else if (t.lines) errors.push('lines gibt es nur im Hörtext (…-h<nn>)');
    if (!L && hasBody === hasItems) errors.push('genau eines von body/items angeben');
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
      if (qtypes.indexOf(q.t) < 0) errors.push('Fragetyp „' + q.t + '“ nicht erlaubt (' + qtypes.join(', ') + ')');
      else if (q.t !== 'write') counted++;
      if (q.id && q.id.indexOf(id + '.q') !== 0) errors.push('Fragen-ID muss mit „' + id + '.q“ beginnen: ' + q.id);
    });
    if (counted < 3) errors.push('mindestens 3 gewertete Fragen nötig (hat ' + counted + ')');
    if (t.scene != null && !t.scene) errors.push('scene leer');
    if (t.gloss != null && (typeof t.gloss !== 'object' || Array.isArray(t.gloss))) errors.push('gloss muss ein Objekt { Wort: Erklärung } sein');
    var n = wordCount(t), lo = L ? MIN_WORDS_L : MIN_WORDS, hi = L ? MAX_WORDS_L : MAX_WORDS;
    if (m[2] === 'b1') hi = L ? 200 : 300; // B1: längere Texte (Lesen bis 300, Hören bis 200 Wörter)
    if (m[2] === 'b2') { lo = L ? 120 : 200; hi = L ? 200 : 320; } // B2: Lesen 200–320, Hören 120–200 Wörter
    if (n && (n < lo || n > hi)) warnings.push('Länge ' + n + ' Wörter (Richtwert ' + lo + '–' + hi + ')');
    var low = fullText(t).toLowerCase();
    Object.keys(t.gloss || {}).forEach(function (w) {
      if (low.indexOf(String(w).toLowerCase()) < 0) warnings.push('gloss-Wort kommt im Text nicht vor: ' + w);
    });
    return { errors: errors, warnings: warnings };
  }

  DT.texts = { GENRES: GENRES, LISTEN_GENRES: LISTEN_GENRES, QTYPES: QTYPES, LISTEN_QTYPES: LISTEN_QTYPES, isListen: isListen, speakers: speakers, ID_RE: ID_RE, plain: plain, paragraphs: paragraphs, fullText: fullText, wordCount: wordCount, check: check };
})(window.DT = window.DT || {});
