/* TEST-FIXTURE (nicht in index.html, nicht im Inhalt): Beispiel-Hörtexte für Validator-/Browsertests von Schritt 4.
 * Browsertest: per page.route in index.html vor app.js einfügen. IDs h90 sind absichtlich außerhalb des echten Inhalts. */
(function (K) {
  var q = function (id, n, qq, o, a, why) { return { id: id + '.q' + n, t: 'mc', q: qq, o: o, a: a, why: why, e: 'Erklärung: Die Antwort steht im Gespräch.' }; };
  K.addText('de-a2-h90', {
    level: 'A2', scene: 'bahn', genre: 'gespraech', title: 'Am Fahrkartenschalter', sub: 'Bilet gişesinde', plays: 2,
    lines: [
      { s: 'Anna', g: 'f', t: 'Guten Tag, ich möchte eine Fahrkarte nach Köln, bitte.', n: 'İyi günler, Köln’e bir bilet istiyorum.' },
      { s: 'Ben', g: 'm', t: 'Gern. Einfach oder hin und zurück? Der Zug fährt um zehn Uhr dreißig von Gleis vier.', n: 'Tabii. Gidiş mi, gidiş-dönüş mü? Tren saat on otuzda dört numaralı perondan kalkıyor.' },
      { s: 'Anna', g: 'f', t: 'Hin und zurück, bitte. Kann ich mit Karte zahlen?', n: 'Gidiş-dönüş lütfen. Kartla ödeyebilir miyim?' },
      { s: 'Ben', g: 'm', t: 'Ja, natürlich. Das macht achtunddreißig Euro.', n: 'Evet, tabii. Otuz sekiz avro tutuyor.' }
    ],
    questions: [
      q('de-a2-h90', 1, 'Wohin will Anna fahren?', ['Nach Köln', 'Nach Bonn', 'Nach Essen'], 0, { 1: 'Bonn wird nicht genannt.', 2: 'Essen wird nicht genannt.' }),
      q('de-a2-h90', 2, 'Von welchem Gleis fährt der Zug?', ['Gleis zwei', 'Gleis vier', 'Gleis zehn'], 1, { 0: 'Gleis vier, nicht zwei.', 2: 'Zehn ist die Uhrzeit.' }),
      q('de-a2-h90', 3, 'Wie zahlt Anna?', ['Bar', 'Mit Karte', 'Gar nicht'], 1, { 0: 'Sie fragt nach der Karte.', 2: 'Sie zahlt.' })
    ]
  });
  K.addText('tr-a2-h90', {
    level: 'A2', scene: 'otogar', genre: 'gespraech', title: 'Gişede', sub: 'Am Schalter', plays: 2,
    lines: [
      { s: 'Elif', g: 'f', t: 'İyi günler, Ankara’ya bir bilet istiyorum.', n: 'Guten Tag, ich möchte ein Ticket nach Ankara.' },
      { s: 'Jonas', g: 'm', t: 'Tabii. Otobüs saat onda kalkıyor. Gidiş mi, gidiş-dönüş mü olsun?', n: 'Natürlich. Der Bus fährt um zehn. Einfach oder hin und zurück?' },
      { s: 'Elif', g: 'f', t: 'Sadece gidiş olsun, lütfen. Kredi kartıyla ödeyebilir miyim?', n: 'Nur einfach, bitte. Kann ich mit Kreditkarte zahlen?' },
      { s: 'Jonas', g: 'm', t: 'Evet, tabii. Toplam yüz yirmi lira.', n: 'Ja, natürlich. Zusammen hundertzwanzig Lira.' }
    ],
    questions: [
      q('tr-a2-h90', 1, 'Elif nereye gidiyor?', ['Ankara', 'İzmir', 'Bursa'], 0, { 1: 'İzmir geçmiyor.', 2: 'Bursa geçmiyor.' }),
      q('tr-a2-h90', 2, 'Otobüs saat kaçta kalkıyor?', ['Dokuzda', 'Onda', 'On birde'], 1, { 0: 'Dokuz değil.', 2: 'On bir değil.' }),
      q('tr-a2-h90', 3, 'Elif nasıl ödüyor?', ['Nakit', 'Kartla', 'Ödemiyor'], 1, { 0: 'Kartla soruyor.', 2: 'Ödüyor.' })
    ]
  });
})(window.KOPRU);
