/* Wortschatz-Logik (ADR-3) – rein, ohne DOM/localStorage, in Node testbar.
 * Erzeugt aus einem Wortschatz-Eintrag Abfragen im bestehenden Übungsformat (mc/listen/gap),
 * inkl. sinnvoller Ablenker und automatisch erzeugter Erklärung.
 */
(function (DT) {
  'use strict';

  // Kleiner deterministischer Zufall (gleiche Frage → gleiche Ablenker in einer Sitzung)
  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul ? Math.imul(h, 16777619) : (h * 16777619) | 0; }
    return h >>> 0;
  }
  function rng(seed) {
    var s = hash(String(seed)) || 1;
    return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 100000) / 100000; };
  }
  function shuffle(arr, r) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }

  /* Index aller Wörter: { [wordId]: { w, key:'de-a1', course:'de', level:'A1' } } */
  function index(K) {
    var WI = {};
    Object.keys(K.vocab || {}).forEach(function (key) {
      var parts = key.split('-');
      (K.vocab[key] || []).forEach(function (w) {
        WI[w.id] = { w: w, key: key, course: parts[0], level: (parts[1] || '').toUpperCase() };
      });
    });
    return WI;
  }

  /* Wörter eines Kurses (optional nur ein Niveau / Wortfeld), in Lehrplan-Reihenfolge */
  function wordsOf(K, course, level, field) {
    var out = [];
    Object.keys(K.vocab || {}).sort().forEach(function (key) {
      var parts = key.split('-');
      if (parts[0] !== course) return;
      if (level && (parts[1] || '').toUpperCase() !== level) return;
      (K.vocab[key] || []).forEach(function (w) { if (!field || w.topic === field) out.push(w); });
    });
    return out;
  }

  /* 3 Ablenker: gleiche Wortart, bevorzugt gleiches Wortfeld; nie gleiche Bedeutung oder gleiches Wort */
  function distractors(word, pool, n, seed) {
    var r = rng(seed || word.id);
    var cand = pool.filter(function (x) {
      return x.id !== word.id && x.n !== word.n && x.t !== word.t;
    });
    var samePosField = cand.filter(function (x) { return x.pos === word.pos && x.topic === word.topic; });
    var samePos = cand.filter(function (x) { return x.pos === word.pos && x.topic !== word.topic; });
    var rest = cand.filter(function (x) { return x.pos !== word.pos; });
    var picked = [];
    [shuffle(samePosField, r), shuffle(samePos, r), shuffle(rest, r)].forEach(function (list) {
      list.forEach(function (x) { if (picked.length < (n || 3) && !picked.some(function (p) { return p.n === x.n || p.t === x.t; })) picked.push(x); });
    });
    return picked;
  }

  /* Deutsches Nomen ohne Artikel? (für Tipp-Hinweis) */
  function stripArticle(t) { return String(t).replace(/^(der|die|das)\s+/i, ''); }

  /* Erzeugt eine Abfrage.
   * mode: 'pick' (Zielwort → Übersetzung wählen) | 'listen' (hören → Übersetzung) | 'rev' (Übersetzung → Zielwort) | 'type' (Übersetzung → Zielwort tippen)
   * L: Texte in der Oberflächensprache { pickQ, listenQ, revQ, typeQ, wrongIs, wanted, example, articleMissing }
   */
  function makeQuestion(word, mode, pool, L, seed) {
    var r = rng((seed || '') + word.id + mode);
    var ds = distractors(word, pool, 3, (seed || '') + word.id);
    var expl = '**' + word.t + '**' + (word.pl ? ' (' + word.pl + ')' : '') + ' = ' + word.n +
      (word.ex ? '\n' + L.example + ': *' + word.ex + '* – ' + (word.exn || '') : '') +
      (word.note ? '\n💡 ' + word.note : '');
    var opts, a, why = {}, ex;
    if (mode === 'pick' || mode === 'listen') {
      var all = shuffle([word].concat(ds), r);
      opts = all.map(function (x) { return x.n; });
      a = all.indexOf(word);
      all.forEach(function (x, i) { if (i !== a) why[i] = L.wrongIs.replace('{a}', x.n).replace('{b}', x.t); });
      ex = mode === 'pick'
        ? { t: 'mc', q: L.pickQ.replace('{w}', word.t), o: opts, a: a, why: why, e: expl }
        : { t: 'listen', say: word.t, q: L.listenQ, o: opts, a: a, why: why, e: expl };
    } else if (mode === 'rev') {
      var all2 = shuffle([word].concat(ds), r);
      opts = all2.map(function (x) { return x.t; });
      a = all2.indexOf(word);
      all2.forEach(function (x, i) { if (i !== a) why[i] = L.wrongIs.replace('{a}', x.t).replace('{b}', x.n); });
      ex = { t: 'mc', q: L.revQ.replace('{w}', word.n), o: opts, a: a, why: why, e: expl, sayAnswer: true };
    } else {
      var wrong = {};
      var bare = stripArticle(word.t);
      if (bare !== word.t) wrong[bare] = L.articleMissing.replace('{w}', word.t);
      ex = { t: 'gap', q: L.typeQ.replace('{w}', word.n), a: [word.t], wrong: wrong, e: expl };
    }
    ex.id = 'w:' + word.id + ':' + mode;
    ex.wordId = word.id;
    ex.mode = mode;
    return ex;
  }

  /* Neue Wörter für den Tagesmix (A1-Aufrüstung Paket 0): lists = neue Wörter je Niveau aufsteigend, die letzte Liste ist
   * das Fokus-Niveau. Liegen darunter noch neue Wörter (z. B. ein später erweitertes A1), wechseln sie sich 1:1 mit dem
   * Fokus-Niveau ab (Fokus zuerst) – statt dass erst alle unteren Wörter kommen. Ist eine Seite leer, kommt die andere. */
  function mixNew(lists, n) {
    lists = lists || []; if (n == null) n = Infinity;
    var focus = (lists[lists.length - 1] || []).slice(), lower = [], out = [];
    lists.slice(0, -1).forEach(function (l) { lower = lower.concat(l || []); });
    var i = 0, j = 0;
    while (out.length < n && (i < focus.length || j < lower.length)) {
      if (i < focus.length) out.push(focus[i++]);
      if (out.length < n && j < lower.length) out.push(lower[j++]);
    }
    return out;
  }

  DT.vocab = {
    hash: hash, rng: rng, shuffle: shuffle, mixNew: mixNew,
    index: index, wordsOf: wordsOf, distractors: distractors, makeQuestion: makeQuestion, stripArticle: stripArticle
  };
})(window.DT = window.DT || {});
