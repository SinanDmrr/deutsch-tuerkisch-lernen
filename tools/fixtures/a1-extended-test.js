/* TEST-FIXTURE (nicht in index.html, nicht im Inhalt): simuliert ein aufgerüstetes A1 (A1-Aufrüstung Paket 0).
 * Je Kurs: +300 Wörter (zusammen ≈ 650; nur simuliert, solange der Kurs noch keine echten ext-Wörter hat) und 4 neue Grammatikthemen mit je 24 Aufgaben (zusammen 16 Themen), alle mit ext:1; Themen und Wörter werden nur simuliert, solange der Kurs keine echten ext-Wörter/-Themen hat.
 * IDs (…-a1.w9001 …, …-a1-91 … -94) liegen absichtlich außerhalb des echten Inhalts und werden nie vergeben.
 * Node: in einer VM nach den A1-Inhalten ausführen (tools/test-core.js). Browser: per page.route an <kurs>-a1-vocab.js anhängen.
 * Läuft je Kurs höchstens einmal (K.__a1ext) und nur, wenn der A1-Wortschatz des Kurses schon geladen ist. */
(function (K) {
  if (!K) return;
  K.__a1ext = K.__a1ext || {};
  var FIELDS = ['greet', 'people', 'numbers', 'food', 'home', 'city', 'shop', 'work', 'body', 'free', 'verbs', 'adj', 'small'];
  function pad(n) { return ('000' + n).slice(-4); }
  ['de', 'tr'].forEach(function (cid) {
    var key = cid + '-a1';
    if (K.__a1ext[cid] || !K.vocab[key] || !K.courses || !K.courses[cid]) return;
    K.__a1ext[cid] = true;
    var de = cid === 'de', words = [];
    var hasExt = K.vocab[key].some(function (w) { return w.ext; }); // echte Erweiterungswörter vorhanden → nicht simulieren
    for (var i = 1; i <= 300 && !hasExt; i++) {
      words.push({ id: key + '.w' + pad(9000 + i), t: (de ? 'Probewort ' : 'deneme kelime ') + i, pos: 'x',
        n: (de ? 'deneme kelime ' : 'Probewort ') + i, ex: (de ? 'Das ist Probewort ' : 'Bu deneme kelime ') + i + '.',
        exn: (de ? 'Bu deneme kelime ' : 'Das ist Probewort ') + i + '.', topic: FIELDS[i % FIELDS.length], ext: 1 });
    }
    if (words.length) K.addVocab(key, words);
    // echte ext-Themen (z. B. -13…-16) vorhanden → keine Testthemen -91…-94
    var hasExtTopic = Object.keys(K.content || {}).some(function (id) { return id.indexOf(key + '-') === 0 && K.content[id] && K.content[id].ext; });
    for (var t = 91; t <= 94 && !hasExtTopic; t++) {
      var id = key + '-' + t, ex = [];
      for (var j = 1; j <= 24; j++) {
        ex.push({ id: id + '.' + j, t: 'mc', q: (de ? 'Test-Frage ' : 'Testfrage ') + t + '.' + j, o: ['A', 'B', 'C'], a: 0,
          why: { 1: de ? 'B yanlış (test).' : 'B ist falsch (Test).', 2: de ? 'C yanlış (test).' : 'C ist falsch (Test).' },
          e: de ? 'Doğrusu A (test).' : 'Richtig ist A (Test).' });
      }
      K.add(id, { ext: 1, lesson: [{ p: de ? 'Test konusu (A1 genişletmesi).' : 'Testthema (A1-Erweiterung).' }], exercises: ex });
      K.courses[cid].levels.A1.push([id, 'Testthema ' + t, 'Test konusu ' + t]);
    }
  });
})(typeof window !== 'undefined' ? window.KOPRU : null);
