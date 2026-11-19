/* TEST-FIXTURE (nicht in index.html, nicht im Inhalt): Beispiel-Dialoge mit cloze und sort für Validator-/Browsertests von Schritt 5.
 * Browsertest: per page.route in index.html vor js/app.js einfügen (Vorbild tools/fixtures/listen-test.js).
 * IDs d90 sind absichtlich außerhalb des echten Inhalts. Erklärungen stehen in der Erklärsprache (de-Kurs: Türkisch, tr-Kurs: Deutsch). */
(function (K) {
  var dlg = function (id, title, sub, lines, questions) { K.addDialog(id, { level: 'A2', title: title, sub: sub, lines: lines, questions: questions }); };
  dlg('de-a2-d90', 'Gestern im Kino', 'Dün sinemada', [
    { s: 'Ayla', g: 'f', t: 'Gestern bin ich mit Mehmet im Kino gewesen.', n: 'Dün Mehmet’le sinemadaydım.' },
    { s: 'Tom', g: 'm', t: 'Und? Der Film war toll, oder?', n: 'Ee? Film harikaydı, değil mi?' }
  ], [
    { id: 'de-a2-d90.1', t: 'cloze', q: 'Vervollständige die Nachricht.', text: 'Gestern {1} ich mit Mehmet im Kino {2}. Der Film {3} toll!',
      gaps: {
        1: { a: ['bin'], o: ['bin', 'habe', 'war'], wrong: { habe: '„gewesen“ (sein fiilinin Partizip’i) ile Perfekt „sein“ ile kurulur: bin … gewesen.', war: '„war“ Präteritum’dur; burada „gewesen“ ile Perfekt kuruluyor.' } },
        2: { a: ['gewesen'], wrong: { gegangen: '„im Kino“ = nerede? Bu yüzden „gewesen“ (bulunmak). „gegangen“ için „ins Kino“ gerekir.' } },
        3: { a: ['war'], o: ['war', 'hatte', 'ist'], wrong: { hatte: '„toll“ ile „sein“ kullanılır: Der Film war toll.', ist: 'Cümle geçmiş zamanda: „ist“ değil „war“.' } } },
      e: 'Perfekt: sein + gewesen („bin … gewesen“). Anlatırken „war“ (Präteritum) çok kullanılır.' },
    { id: 'de-a2-d90.2', t: 'cloze', q: 'Schreibe die fehlenden Wörter.', text: 'Ich {1} gestern sehr müde. Darum {2} ich früh ins Bett gegangen.',
      gaps: { 1: { a: ['war'], wrong: { bin: 'Dün olan bir durum: Präteritum „war“ kullanılır.' } }, 2: { a: ['bin'], wrong: { habe: '„gehen“ yer değiştirme bildirir, „sein“ ile kurulur.' } } },
      e: '„sein“ ile: war (Präteritum), bin … gegangen (Perfekt).' },
    { id: 'de-a2-d90.3', t: 'sort', q: 'Perfekt mit „haben“ oder „sein“?', cats: ['haben', 'sein'],
      items: [['fahren', 1], ['kaufen', 0], ['aufstehen', 1], ['schlafen', 0]],
      why: { fahren: 'Yer değiştirme (bir yerden bir yere) → sein', kaufen: 'Nesne alan fiil (Akkusativ) → haben', aufstehen: 'Durum/yer değişimi (ayağa kalkmak) → sein', schlafen: 'Yer değiştirme yok, durum değişmiyor → haben' },
      e: 'Kural: yer değiştirme ve durum değişimi → sein; diğerleri çoğunlukla haben.' }
  ]);
  dlg('tr-a2-d90', 'Gestern im Kino', 'Dün sinemada', [
    { s: 'Ayla', g: 'f', t: 'Dün sinemaya gittim.', n: 'Gestern war ich im Kino.' },
    { s: 'Tom', g: 'm', t: 'Film nasıldı?', n: 'Wie war der Film?' }
  ], [
    { id: 'tr-a2-d90.1', t: 'cloze', q: 'Ergänze die Endungen und das Verb.', text: 'Ben her sabah okul{1} gidiyorum. Akşam ev{2} dönüyorum. Dün sinemaya {3}.',
      gaps: {
        1: { a: ['a'], o: ['a', 'e', 'ı'], wrong: { e: 'Letzter Vokal von „okul“ ist u (hinten) → -a, nicht -e.', ı: '„ı“ gehört nicht zum Dativ; der Dativ heißt -a/-e.' } },
        2: { a: ['e'], o: ['e', 'a', 'i'], wrong: { a: 'Letzter Vokal von „ev“ ist e (vorn) → -e, nicht -a.', i: '„i“ ist Akkusativ; „dönmek“ verlangt den Dativ (-e).' } },
        3: { a: ['gittim'], wrong: { gittik: '„Ben“ gehört zu -im („gittim“), -ik wäre „wir“.', gitti: 'Nach „ben“ braucht das Verb die Endung -m: gittim.' } } },
      e: 'Dativ (-a/-e) richtet sich nach dem letzten Vokal des Wortes (Vokalharmonie). Vergangenheit: git-ti-m.' },
    { id: 'tr-a2-d90.2', t: 'sort', q: 'Welche Pluralendung passt: -lar oder -ler?', cats: ['-lar', '-ler'],
      items: [['kitap', 0], ['ev', 1], ['okul', 0], ['göz', 1]],
      why: { kitap: 'Letzter Vokal „a“ (hinten) → kitaplar', ev: 'Letzter Vokal „e“ (vorn) → evler', okul: 'Letzter Vokal „u“ (hinten) → okullar', göz: 'Letzter Vokal „ö“ (vorn) → gözler' },
      e: 'Hintere Vokale (a, ı, o, u) → -lar; vordere Vokale (e, i, ö, ü) → -ler.' }
  ]);
})(window.KOPRU);
