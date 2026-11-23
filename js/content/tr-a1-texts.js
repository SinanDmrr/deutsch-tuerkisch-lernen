/* Türkisch A1 – Lese- und Hörtexte für Deutschsprechende (Erklärungen auf Deutsch)
 * Format: K.addText('tr-a1-rNN' | 'tr-a1-hNN', { level, kind:'read'|'listen', scene, genre, title (TR), sub (DE), body | items | lines, gloss, questions }).
 * Fragen-IDs '<textId>.qN' sind fest und werden nie geändert oder wiederverwendet.
 * Alle Texte sind selbst geschrieben. Lesen: r01–r12 (Schild, Notiz, Einkaufszettel, SMS, Speisekarte, Einladung, Stundenplan, Anzeige, Visitenkarte, Wetter, Mail, Fahrplan).
 * Hören: h01–h10 (Begrüßung, Laden, Bahnhof, Anrufbeantworter, Café, Weg, Termin, Familie, Wetter, Arzt); nur männliche Stimmen (g:'m').
 */
(function (K) {

/* ================= LESETEXTE ================= */

K.addText('tr-a1-r01', {
  level: 'A1', kind: 'read', scene: 'market', genre: 'hinweis',
  title: "Fırında bir tabela", sub: "Ein Schild an der Bäckerei",
  body: [
    "Küçük Fırın",
    "Pazartesiden cumartesiye kadar açığız: sabah yediden akşam sekize kadar.",
    "Pazar günü kapalıyız.",
    "Taze ekmek yedi lira. Kek yirmi lira. Çay beş lira.",
    "Kredi kartı yok, nakit lütfen.",
    "Hoş geldiniz!"
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r01.q1", t: "mc", q: "An welchem Tag ist die Bäckerei geschlossen?", o: ["Samstag", "Sonntag", "Montag"], a: 1,
      why: { 0: "Samstag (*cumartesi*) steht bei den Öffnungstagen: „…kadar açığız“.", 2: "Montag (*pazartesi*) ist der erste Öffnungstag." },
      e: "*Pazar günü kapalıyız.* = „Am Sonntag sind wir geschlossen.“ *kapalı* = geschlossen, *açık* = offen." },
    { id: "tr-a1-r01.q2", t: "gap", q: "Taze ekmek ___ lira. (sieben)", a: ["yedi"],
      wrong: { "yirmi": "*yirmi* (20) ist der Preis für den Kuchen (*kek*), nicht für das Brot.", "beş": "*beş* (5) ist der Preis für den Tee." },
      e: "*Taze ekmek yedi lira.* = „Frisches Brot kostet sieben Lira.“ Nach einer Zahl bleibt das Wort im Singular: *yedi lira*, nicht *yedi liralar*." },
    { id: "tr-a1-r01.q3", t: "mc", q: "Wie kann man in der Bäckerei bezahlen?", o: ["Nur bar", "Nur mit Karte", "Bar oder mit Karte"], a: 0,
      why: { 1: "*Kredi kartı yok* heißt: Kreditkarte gibt es nicht, also geht Karte nicht.", 2: "*yok* = „es gibt nicht“. Die Karte ist ausgeschlossen." },
      e: "*Kredi kartı yok, nakit lütfen.* = „Keine Kreditkarte, bitte bar.“ *nakit* = Bargeld." },
    { id: "tr-a1-r01.q4", t: "match", q: "Ordne zu, was was kostet:", p: [["ekmek", "7 Lira"], ["kek", "20 Lira"], ["çay", "5 Lira"]],
      e: "*yedi* = 7, *yirmi* = 20, *beş* = 5. Im Schild steht jedes Produkt direkt vor seinem Preis." },
    { id: "tr-a1-r01.q5", t: "mc", q: "Sprachmittlung: Deine Freundin Anna versteht kein Türkisch und fragt, was auf dem Schild steht. Was sagst du ihr?", o: ["Montag bis Samstag von 7 bis 20 Uhr geöffnet, sonntags zu; Brot 7 Lira; nur Bargeld.", "Täglich von 7 bis 20 Uhr geöffnet; Brot 20 Lira; Kartenzahlung möglich.", "Montag bis Samstag geöffnet; sonntags nur bis 8 Uhr; Brot 5 Lira; nur Bargeld.", "Nur samstags und sonntags geöffnet; Kuchen 7 Lira; Zahlung mit Karte."], a: 0,
      why: { 1: "Sonntags ist geschlossen, Brot kostet 7 (nicht 20) Lira und Karte geht nicht.", 2: "Die Bäckerei öffnet bis 20 Uhr (*akşam sekize kadar*); 5 Lira kostet der Tee.", 3: "Geöffnet ist von Montag bis Samstag; Karte geht nicht." },
      e: "Bei Sprachmittlung gibst du die wichtigen Infos sinngemäß weiter: Zeiten, Ruhetag, Preis, Zahlungsart." }
  ]
});

K.addText('tr-a1-r02', {
  level: 'A1', kind: 'read', scene: 'ev', genre: 'nachricht',
  title: "Annemden not", sub: "Ein Zettel von der Mutter",
  body: [
    "Deniz,",
    "bugün ben ofisteyim. Akşam saat altıda geliyorum.",
    "Yemek masada: ekmek, peynir ve çay. Buzdolabında süt ve elma var. Öğlen çorba var.",
    "Okuldan sonra ödev yap, sonra televizyon izle. Telefonum açık.",
    "Görüşürüz, anne"
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r02.q1", t: "mc", q: "Wann kommt die Mutter nach Hause?", o: ["Um sechs Uhr abends", "Um acht Uhr abends", "Mittags"], a: 0,
      why: { 1: "Es steht *altıda* (um sechs), nicht *sekizde* (um acht).", 2: "Mittags (*öğlen*) gibt es Suppe. Die Mutter kommt abends." },
      e: "*Akşam saat altıda geliyorum.* = „Abends um sechs komme ich.“ *-dA* (hier *altıda*) heißt „um“." },
    { id: "tr-a1-r02.q2", t: "gap", q: "Buzdolabında süt ve elma ___ . (es gibt)", a: ["var"],
      wrong: { "yok": "*yok* bedeutet „es gibt nicht“. Im Zettel steht das Gegenteil." },
      e: "*Buzdolabında süt ve elma var.* = „Im Kühlschrank gibt es Milch und Äpfel.“ *Buzdolabı* + *-nda* = „im Kühlschrank“." },
    { id: "tr-a1-r02.q3", t: "mc", q: "Was soll Deniz nach der Schule tun?", o: ["Erst Hausaufgaben machen, dann fernsehen", "Erst fernsehen, dann Hausaufgaben machen", "Einkaufen gehen"], a: 0,
      why: { 1: "Die Reihenfolge ist umgekehrt: zuerst *ödev yap*, *sonra* Fernsehen.", 2: "Vom Einkaufen steht nichts auf dem Zettel." },
      e: "*Okuldan sonra ödev yap, sonra televizyon izle.* = „Nach der Schule mach Hausaufgaben, danach schau fern.“ Das erste *sonra* gehört zu *okuldan* (nach der Schule)." },
    { id: "tr-a1-r02.q4", t: "mc", q: "Wo steht das Essen?", o: ["Auf dem Tisch", "Im Kühlschrank", "In der Schule"], a: 0,
      why: { 1: "Im Kühlschrank (*buzdolabında*) sind Milch und Äpfel; das Essen steht auf dem Tisch.", 2: "Von der Schule ist nur bei den Hausaufgaben die Rede." },
      e: "*Yemek masada* = „Das Essen ist auf dem Tisch.“ *masada* = *masa* + *-da* (auf dem Tisch)." },
    { id: "tr-a1-r02.q5", t: "mc", q: "Sprachmittlung: Deniz’ Freund Paul versteht kein Türkisch. Was sagst du ihm über den Zettel?", o: ["Die Mutter ist heute im Büro und kommt um 18 Uhr; Essen steht auf dem Tisch; Deniz soll Hausaufgaben machen und darf danach fernsehen.", "Die Mutter ist zu Hause und kocht Suppe; Deniz soll sofort fernsehen.", "Die Mutter kommt um acht Uhr; es gibt nichts zu essen; Deniz soll einkaufen gehen.", "Die Mutter ist in der Schule; Deniz soll anrufen."], a: 0,
      why: { 1: "Die Mutter ist *ofiste* (im Büro, bei der Arbeit), nicht zu Hause.", 2: "Sie kommt um sechs, und es gibt Essen auf dem Tisch.", 3: "Die Mutter ist im Büro, nicht in der Schule. Anrufen soll Deniz nicht; ihr Telefon ist nur *açık* (eingeschaltet)." },
      e: "Fasse die wichtigen Punkte zusammen: Wer ist wo? Wann kommt sie? Was gibt es? Was soll Deniz tun?" }
  ]
});

K.addText('tr-a1-r03', {
  level: 'A1', kind: 'read', scene: 'market', genre: 'hinweis',
  title: "Alışveriş listesi", sub: "Ein Einkaufszettel",
  body: [
    "Alışveriş listesi",
    "iki kilo domates, bir kilo elma, yarım kilo peynir",
    "on yumurta, iki ekmek, bir kilo patates",
    "çay ve şeker",
    "Bakkal pazar günü kapalı. Market akşam sekize kadar açık."
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r03.q1", t: "mc", q: "Wie viel Käse steht auf der Liste?", o: ["Ein halbes Kilo", "Ein Kilo", "Zwei Kilo"], a: 0,
      why: { 1: "Ein Kilo steht bei den Äpfeln und Kartoffeln (*bir kilo*).", 2: "Zwei Kilo (*iki kilo*) braucht man von den Tomaten." },
      e: "*yarım kilo peynir* = „ein halbes Kilo Käse“. *yarım* = halb." },
    { id: "tr-a1-r03.q2", t: "gap", q: "Listede ___ kilo domates var. (zwei)", a: ["iki"],
      wrong: { "bir": "*bir kilo* (1 kg) steht bei den Äpfeln und Kartoffeln, nicht bei den Tomaten.", "on": "*on* (10) gehört zu den Eiern: *on yumurta*." },
      e: "*iki kilo domates* = „zwei Kilo Tomaten“. Nach der Zahl bleibt das Wort im Singular, also nicht *domatesler*." },
    { id: "tr-a1-r03.q3", t: "match", q: "Ordne zu:", p: [["on yumurta", "zehn Eier"], ["yarım kilo peynir", "ein halbes Kilo Käse"], ["iki ekmek", "zwei Brote"], ["çay ve şeker", "Tee und Zucker"]],
      e: "Zahl + Nomen im Singular: *on yumurta*, *iki ekmek*. *ve* = und." },
    { id: "tr-a1-r03.q4", t: "mc", q: "Was steht über die Geschäfte auf dem Zettel?", o: ["Der kleine Laden (*bakkal*) ist sonntags zu, der Supermarkt bis 20 Uhr offen.", "Der Supermarkt ist sonntags zu, der Laden bis 20 Uhr offen.", "Beide Geschäfte sind sonntags offen.", "Beide Geschäfte schließen um 18 Uhr."], a: 0,
      why: { 1: "Es ist umgekehrt: *Bakkal pazar günü kapalı*, *Market … açık*.", 2: "Der *bakkal* ist sonntags *kapalı* (geschlossen).", 3: "Der Markt ist bis *sekiz* (20 Uhr, *akşam sekize kadar*) offen, nicht bis sechs." },
      e: "*kapalı* = geschlossen, *açık* = offen, *akşam sekize kadar* = bis acht Uhr abends. Ein *bakkal* ist ein kleiner Lebensmittelladen." },
    { id: "tr-a1-r03.q5", t: "mc", q: "Sprachmittlung: Dein Mitbewohner Jonas fragt, was er einkaufen soll. Was sagst du?", o: ["Tomaten (2 kg), Äpfel (1 kg), Käse (500 g), zehn Eier, zwei Brote, Kartoffeln (1 kg), Tee und Zucker.", "Tomaten (1 kg), Äpfel (2 kg), Käse (1 kg), zehn Brote, zwei Eier, Tee.", "Nur Obst: Äpfel und Bananen, dazu Milch.", "Tomaten, Käse und Fisch; der Laden ist sonntags geöffnet."], a: 0,
      why: { 1: "Die Mengen sind vertauscht: Tomaten 2 kg, Äpfel 1 kg, Käse nur ein halbes Kilo, Eier 10, Brote 2.", 2: "Bananen und Milch stehen nicht auf dem Zettel; fast alles andere fehlt.", 3: "Fisch steht nicht auf der Liste." },
      e: "Bei Zahlen genau hinschauen: Menge und Ware gehören zusammen (*iki kilo domates*, *on yumurta*)." }
  ]
});

K.addText('tr-a1-r04', {
  level: 'A1', kind: 'read', scene: 'sinema', genre: 'nachricht',
  title: "Mert’ten mesaj", sub: "Eine SMS von Mert",
  body: [
    "Merhaba Selin!",
    "Bu akşam Ali ve ben sinemaya gidiyoruz. Film saat yedide. Sinema istasyonun yakınında. Bilet yirmi beş lira.",
    "Sen de gel! Saat altıda istasyonda bekliyorum. Cevap yaz lütfen.",
    "Mert"
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r04.q1", t: "mc", q: "Was machen Mert und Ali heute Abend?", o: ["Sie gehen ins Kino", "Sie gehen ins Café", "Sie lernen Türkisch"], a: 0,
      why: { 1: "Ein Café wird nicht erwähnt.", 2: "Vom Lernen steht nichts in der SMS." },
      e: "*sinemaya gidiyoruz* = „wir gehen ins Kino“. *-ya* zeigt die Richtung („ins Kino“)." },
    { id: "tr-a1-r04.q2", t: "gap", q: "Film saat ___ . (um sieben)", a: ["yedide"],
      wrong: { "yedi": "Für „um sieben Uhr“ braucht das Türkische das Suffix *-dA*: *yedide*.", "yedi'de": "Ausgeschriebene Zahlen bekommen keinen Apostroph: *yedide* (nur bei Ziffern: 7’de)." },
      e: "*saat yedide* = „um sieben Uhr“. Die Zahl bekommt *-de* (nach *i* steht *-de*)." },
    { id: "tr-a1-r04.q3", t: "mc", q: "Wo wartet Mert auf Selin?", o: ["Am Bahnhof", "Im Kino", "Zu Hause"], a: 0,
      why: { 1: "Das Kino liegt nur *istasyonun yakınında* (in der Nähe des Bahnhofs); Mert wartet am Bahnhof.", 2: "Mert geht aus; er wartet *istasyonda*." },
      e: "*istasyonda bekliyorum* = „ich warte am Bahnhof“. *-da* = an/in/auf (Ort)." },
    { id: "tr-a1-r04.q4", t: "mc", q: "Wie viel kostet die Eintrittskarte?", o: ["25 Lira", "15 Lira", "50 Lira"], a: 0,
      why: { 1: "*on beş* wäre 15. Es steht *yirmi beş*.", 2: "*elli* wäre 50. Es steht *yirmi beş*." },
      e: "*yirmi beş* = 20 + 5 = 25. Zehner kommt vor Einer." },
    { id: "tr-a1-r04.q5", t: "mc", q: "Sprachmittlung: Selins Mitbewohnerin Lena versteht kein Türkisch. Was sagst du ihr über die SMS?", o: ["Mert und Ali gehen heute Abend um 7 ins Kino (Karte 25 Lira); Mert wartet um 6 am Bahnhof und möchte, dass Selin mitkommt.", "Mert lädt Selin morgen zum Frühstück ein.", "Mert und Ali sind krank und gehen nicht ins Kino.", "Mert will um 7 zum Bahnhof und fragt nach dem Weg."], a: 0,
      why: { 1: "Von Frühstück ist keine Rede; es geht um *sinema*.", 2: "Nichts deutet auf Krankheit hin.", 3: "Mert wartet um 6 (*altıda*) am Bahnhof, um 7 beginnt der Film. Nach dem Weg fragt er nicht." },
      e: "In der Zusammenfassung zählen: Wer? Wohin? Wann? Wie viel? Was möchte Mert von Selin?" }
  ]
});

K.addText('tr-a1-r05', {
  level: 'A1', kind: 'read', scene: 'lokanta', genre: 'programm',
  title: "Lokanta menüsü", sub: "Eine Speisekarte",
  items: [
    { h: "Başlangıç", t: "Çorba 40 lira. Salata 45 lira." },
    { h: "Ana yemek", t: "Tavuk ve pilav 120 lira. Balık 150 lira. Kebap 140 lira." },
    { h: "İçecek", t: "Çay 10 lira. Ayran 15 lira. Su 5 lira." },
    { h: "Not", t: "Kahve yok. Çocuk menüsü var." }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r05.q1", t: "mc", q: "Was kostet der Fisch (*balık*)?", o: ["150 Lira", "140 Lira", "120 Lira"], a: 0,
      why: { 1: "140 Lira kostet der Kebap.", 2: "120 Lira kostet das Hähnchen mit Reis." },
      e: "*Balık 150 lira.* = „Fisch kostet 150 Lira.“ *yüz elli* = 150." },
    { id: "tr-a1-r05.q2", t: "gap", q: "Ayran ___ lira. (fünfzehn)", a: ["on beş"],
      wrong: { "elli": "*elli* ist 50. Fünfzehn heißt *on beş* (10 + 5).", "on": "*on* ist nur 10. Das ist der Preis für den Tee." },
      e: "*on beş* = 15. Im Türkischen schreibt man Zahlen getrennt: *on beş*, *yirmi beş*." },
    { id: "tr-a1-r05.q3", t: "mc", q: "Was gibt es laut Karte nicht?", o: ["Kaffee", "Tee", "Salat"], a: 0,
      why: { 1: "Tee (*çay*) steht auf der Karte: 10 Lira.", 2: "Salat (*salata*) steht auf der Karte: 45 Lira." },
      e: "*Kahve yok.* = „Es gibt keinen Kaffee.“ *yok* = es gibt nicht, *var* = es gibt." },
    { id: "tr-a1-r05.q4", t: "match", q: "Ordne zu:", p: [["çorba", "Suppe"], ["tavuk", "Hähnchen"], ["balık", "Fisch"], ["ayran", "Joghurtgetränk"]],
      e: "*Ayran* ist ein salziges Getränk aus Joghurt und Wasser. Alle anderen Wörter sind Gerichte." },
    { id: "tr-a1-r05.q5", t: "mc", q: "Sprachmittlung: Dein Freund Tom möchte wissen, ob es Kaffee und etwas für Kinder gibt. Was sagst du?", o: ["Keinen Kaffee, aber ein Kindermenü.", "Kaffee ja, ein Kindermenü nicht.", "Weder Kaffee noch Kindermenü.", "Beides gibt es."], a: 0,
      why: { 1: "Es ist umgekehrt: *Kahve yok*, *Çocuk menüsü var*.", 2: "*Çocuk menüsü var* heißt: ein Kindermenü gibt es.", 3: "*Kahve yok*: Kaffee gibt es nicht." },
      e: "*var* und *yok* sind hier wichtig: *Kahve yok. Çocuk menüsü var.*" }
  ]
});

K.addText('tr-a1-r06', {
  level: 'A1', kind: 'read', scene: 'ev', genre: 'nachricht',
  title: "Kahvaltıya davet", sub: "Eine Einladung zum Frühstück",
  body: [
    "Merhaba Ayşe,",
    "cumartesi günü bizim evde kahvaltı yapıyoruz. Sen de gel! Saat on birde başlıyoruz.",
    "Adres: Gül Sokak 5, üçüncü kat. Annem, babam ve kardeşim de burada. Lütfen cevap yaz.",
    "Deniz"
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r06.q1", t: "mc", q: "Wann findet das Frühstück statt?", o: ["Samstag um elf Uhr", "Sonntag um elf Uhr", "Samstag um zehn Uhr"], a: 0,
      why: { 1: "Es steht *cumartesi* (Samstag), nicht *pazar* (Sonntag).", 2: "Es steht *on bir* (11), nicht *on* (10)." },
      e: "*cumartesi günü … saat on birde* = „am Samstag um elf Uhr“." },
    { id: "tr-a1-r06.q2", t: "gap", q: "Sen de ___ ! (Komm doch auch!)", a: ["gel"],
      wrong: { "gelmek": "*gelmek* ist der Infinitiv („kommen“). Zum Auffordern nimmt man den Stamm: *gel*.", "geliyorsun": "*geliyorsun* heißt „du kommst“ (Aussage). Eine Aufforderung ist *gel!*." },
      e: "Die Du-Aufforderung ist der Verbstamm ohne *-mek*: *gelmek* → *gel*, *yapmak* → *yap*." },
    { id: "tr-a1-r06.q3", t: "mc", q: "In welchem Stock wohnen Deniz und seine Familie?", o: ["Im dritten Stock", "Im zweiten Stock", "Im fünften Stock"], a: 0,
      why: { 1: "*ikinci* = zweiter. Es steht *üçüncü kat*.", 2: "Die *5* ist die Hausnummer (*Gül Sokak 5*), nicht der Stock." },
      e: "*üçüncü kat* = „dritter Stock“. *kat* = Etage; *Gül Sokak 5* ist die Hausnummer." },
    { id: "tr-a1-r06.q4", t: "mc", q: "Was soll Ayşe laut Einladung tun?", o: ["Eine Antwort schreiben", "Etwas mitbringen", "Deniz anrufen"], a: 0,
      why: { 1: "Von Mitbringen steht nichts da.", 2: "Es steht *cevap yaz* (schreib eine Antwort), nicht *ara* (ruf an)." },
      e: "*Lütfen cevap yaz.* = „Bitte schreib eine Antwort.“ *yazmak* = schreiben." },
    { id: "tr-a1-r06.q5", t: "mc", q: "Sprachmittlung: Ayşes Freund Ben versteht kein Türkisch. Was sagst du ihm über die Einladung?", o: ["Deniz lädt Ayşe am Samstag um 11 Uhr zum Frühstück bei sich ein (Gül Sokak 5, 3. Stock); die Familie ist auch da; Ayşe soll antworten.", "Deniz lädt Ayşe am Sonntag zum Abendessen ein; sie soll Kuchen mitbringen.", "Deniz ist am Samstag nicht zu Hause; Ayşe soll anrufen.", "Deniz lädt alle ins Restaurant ein; das Essen kostet 5 Lira."], a: 0,
      why: { 1: "Es geht um ein Frühstück (*kahvaltı*) am Samstag.", 2: "Deniz ist da und wartet auf eine schriftliche Antwort.", 3: "Das Frühstück ist *bizim evde* (bei uns zu Hause); die 5 ist die Hausnummer." },
      e: "Typisch bei Einladungen: Wann? Wo? Wer ist da? Was soll der Gast tun?" }
  ]
});

K.addText('tr-a1-r07', {
  level: 'A1', kind: 'read', scene: 'okul', genre: 'programm',
  title: "Ders programı", sub: "Ein Stundenplan",
  items: [
    { h: "Pazartesi", t: "Saat dokuzda Türkçe, saat onda müzik." },
    { h: "Salı", t: "Saat dokuzda Almanca, saat on birde spor." },
    { h: "Çarşamba", t: "Saat dokuzda bilgisayar, saat onda resim." },
    { h: "Perşembe", t: "Saat dokuzda Türkçe, saat on birde Almanca." },
    { h: "Cuma", t: "Ders yok, sadece spor." }
  ],
  gloss: { "sadece": "nur" },
  questions: [
    { id: "tr-a1-r07.q1", t: "mc", q: "Wann hat die Klasse Musik?", o: ["Montag um zehn Uhr", "Dienstag um zehn Uhr", "Montag um neun Uhr"], a: 0,
      why: { 1: "Dienstag (*salı*) gibt es Deutsch und Sport, keine Musik.", 2: "Um neun Uhr (*dokuzda*) ist am Montag Türkisch." },
      e: "*Pazartesi … saat onda müzik* = „Montag um zehn Uhr Musik“." },
    { id: "tr-a1-r07.q2", t: "gap", q: "Salı günü saat on birde ___ var. (Sport)", a: ["spor"],
      wrong: { "Almanca": "*Almanca* ist am Dienstag um neun Uhr, nicht um elf.", "resim": "*resim* (Zeichnen) ist mittwochs." },
      e: "*Salı … saat on birde spor.* = „Dienstag um elf Uhr Sport.“" },
    { id: "tr-a1-r07.q3", t: "mc", q: "An welchem Tag gibt es Computerunterricht (*bilgisayar*)?", o: ["Mittwoch", "Donnerstag", "Freitag"], a: 0,
      why: { 1: "Donnerstag (*perşembe*) gibt es Türkisch und Deutsch.", 2: "Freitag (*cuma*) gibt es nur Sport." },
      e: "*Çarşamba … bilgisayar* = „Mittwoch Computer“." },
    { id: "tr-a1-r07.q4", t: "match", q: "Ordne zu:", p: [["Pazartesi saat dokuz", "Türkisch"], ["Salı saat dokuz", "Deutsch"], ["Çarşamba saat on", "Zeichnen"], ["Cuma", "nur Sport"]],
      e: "*Türkçe* = Türkisch, *Almanca* = Deutsch, *resim* = Zeichnen/Bild, *sadece* = nur." },
    { id: "tr-a1-r07.q5", t: "mc", q: "Sprachmittlung: Die Nachbarin fragt dich, wann das Kind Schule hat. Was sagst du?", o: ["Montag bis Donnerstag ab 9 Uhr Unterricht; freitags nur Sport.", "Jeden Tag ab 9 Uhr; freitags Computer.", "Nur montags und dienstags; sonst frei.", "Freitags ganztägig; am Wochenende Sport."], a: 0,
      why: { 1: "Freitag gibt es keinen Unterricht, nur Sport.", 2: "Auch mittwochs und donnerstags ist Unterricht.", 3: "Das Wochenende steht nicht im Plan. Freitag ist nur Sport." },
      e: "*Ders yok, sadece spor* = „Kein Unterricht, nur Sport“. Das ist der entscheidende Satz am Freitag." }
  ]
});

K.addText('tr-a1-r08', {
  level: 'A1', kind: 'read', scene: 'ev', genre: 'anzeige',
  title: "Kiralık daire", sub: "Eine Wohnungsanzeige",
  body: [
    "Kiralık daire",
    "Üç oda, mutfak, banyo ve balkon. İkinci kat. Kira her ay 20.000 lira.",
    "Evin yanında market ve durak var. Okul yakın. Ev yeni ve temiz.",
    "Telefon: 0532 000 00 00"
  ],
  gloss: { "kiralık": "zu vermieten" },
  questions: [
    { id: "tr-a1-r08.q1", t: "mc", q: "Wie viele Zimmer hat die Wohnung?", o: ["Drei", "Zwei", "Fünf"], a: 0,
      why: { 1: "*iki* wäre zwei. Es steht *üç oda*.", 2: "*beş* wäre fünf. Es steht *üç oda*." },
      e: "*Üç oda, mutfak, banyo* = „drei Zimmer, Küche, Bad“. Küche und Bad zählt man nicht mit." },
    { id: "tr-a1-r08.q2", t: "gap", q: "Evin yanında market ve ___ var. (Haltestelle)", a: ["durak"],
      wrong: { "okul": "*okul* (Schule) steht im nächsten Satz: *Okul yakın*." },
      e: "*Evin yanında market ve durak var.* = „Neben dem Haus gibt es einen Laden und eine Haltestelle.“" },
    { id: "tr-a1-r08.q3", t: "mc", q: "In welchem Stock liegt die Wohnung?", o: ["Im zweiten Stock", "Im dritten Stock", "Im Erdgeschoss"], a: 0,
      why: { 1: "Es steht *ikinci kat*, nicht *üçüncü kat*. Drei ist die Zahl der Zimmer.", 2: "Das Erdgeschoss heißt *zemin kat*; hier steht *ikinci kat*." },
      e: "*İkinci kat* = zweiter Stock. Ordnungszahlen enden auf *-inci/-ıncı …*" },
    { id: "tr-a1-r08.q4", t: "mc", q: "Was wird in der Anzeige NICHT erwähnt?", o: ["Ein Garten", "Ein Balkon", "Die Miete"], a: 0,
      why: { 1: "*Balkon* wird genannt.", 2: "Die Miete (*kira*) steht dort: 20.000 Lira." },
      e: "Von einem *bahçe* (Garten) steht nichts im Text. Balkon (*balkon*) und Miete (*kira*) kommen vor." },
    { id: "tr-a1-r08.q5", t: "mc", q: "Sprachmittlung: Dein Freund Marc sucht eine Wohnung. Was sagst du ihm?", o: ["3 Zimmer, Küche, Bad und Balkon im 2. Stock; 20.000 Lira Miete im Monat; Laden und Haltestelle nebenan, Schule nah.", "2 Zimmer ohne Balkon im 3. Stock; 3.000 Lira Miete; weit weg vom Zentrum.", "Eine Wohnung zu verkaufen für 20.000 Lira; Telefon 5.", "3 Zimmer im Erdgeschoss; Miete jede Woche; es gibt einen Garten."], a: 0,
      why: { 1: "Zimmer, Stock und Preis stimmen nicht.", 2: "*Kiralık* heißt „zu vermieten“, nicht „zu verkaufen“; 20.000 Lira sind die Monatsmiete.", 3: "Die Miete gilt *her ay* (jeden Monat); ein Garten wird nicht genannt." },
      e: "*kiralık* = zu vermieten; *her ay* = jeden Monat." }
  ]
});

K.addText('tr-a1-r09', {
  level: 'A1', kind: 'read', scene: 'hastane', genre: 'formular',
  title: "Bir kartvizit", sub: "Eine Visitenkarte",
  items: [
    { h: "İsim", t: "Doktor Elif Yıldız, diş doktoru" },
    { h: "Adres", t: "Çiçek Caddesi 12, Ankara" },
    { h: "Telefon", t: "0312 000 00 00" },
    { h: "Saat", t: "Pazartesiden cumaya kadar saat dokuzdan beşe kadar açık. Cumartesi ve pazar kapalı." },
    { h: "Not", t: "Lütfen önce arayın. Hoş geldiniz!" }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r09.q1", t: "mc", q: "Was ist Elif Yıldız von Beruf?", o: ["Zahnärztin", "Lehrerin", "Apothekerin"], a: 0,
      why: { 1: "Eine Lehrerin heißt *öğretmen*.", 2: "Eine Apotheke ist *eczane*; hier steht *diş doktoru*." },
      e: "*diş doktoru* = Zahnärztin/Zahnarzt (*diş* = Zahn, *doktor* = Arzt)." },
    { id: "tr-a1-r09.q2", t: "gap", q: "Doktor Elif Yıldız ___ doktoru. (Zahn-)", a: ["diş"],
      wrong: { "göz": "*göz* = Auge; Augenärztin wäre *göz doktoru*.", "dişi": "Hier gehört die Endung *-u* nur an *doktor*: *diş doktoru*." },
      e: "*diş doktoru* – zwei Nomen: *diş* + *doktor-u*. Die Endung *-u* steht nur am zweiten Wort." },
    { id: "tr-a1-r09.q3", t: "mc", q: "Wann ist die Praxis geschlossen?", o: ["Samstag und Sonntag", "Montag und Dienstag", "Nur sonntags"], a: 0,
      why: { 1: "Montag bis Freitag (*pazartesiden cumaya kadar*) ist geöffnet.", 2: "Auch samstags ist zu: *Cumartesi ve pazar kapalı*." },
      e: "*Cumartesi ve pazar kapalı.* = „Samstag und Sonntag geschlossen.“" },
    { id: "tr-a1-r09.q4", t: "mc", q: "Was soll man laut Visitenkarte zuerst tun?", o: ["Anrufen", "Hinfahren", "Eine E-Mail schreiben"], a: 0,
      why: { 1: "Man soll erst anrufen, nicht einfach hingehen.", 2: "Eine Mail wird nicht erwähnt; es gibt eine Telefonnummer." },
      e: "*Lütfen önce arayın.* = „Bitte rufen Sie zuerst an.“ *aramak* = anrufen." },
    { id: "tr-a1-r09.q5", t: "mc", q: "Sprachmittlung: Deine Freundin Lisa hat Zahnschmerzen. Was sagst du ihr über die Karte?", o: ["Das ist eine Zahnärztin; Montag bis Freitag von 9 bis 17 Uhr geöffnet; erst anrufen.", "Das ist eine Augenärztin; täglich geöffnet; man kann einfach kommen.", "Das ist eine Zahnärztin; nur samstags geöffnet; vorher nicht anrufen.", "Das ist eine Apotheke; Montag bis Sonntag offen."], a: 0,
      why: { 1: "*diş* = Zahn (nicht *göz*, Auge); am Wochenende ist geschlossen.", 2: "Samstag ist gerade geschlossen; man soll vorher anrufen.", 3: "Es ist eine Praxis (*doktor*), keine Apotheke; sonntags ist zu." },
      e: "Wichtige Infos: Beruf, Öffnungszeit, Ruhetage, Handlung (*arayın*)." }
  ]
});

K.addText('tr-a1-r10', {
  level: 'A1', kind: 'read', scene: 'hava', genre: 'artikel',
  title: "Hava durumu", sub: "Ein Wetterbericht",
  body: [
    "Bugün İstanbul’da hava güneşli ve sıcak: yirmi beş derece.",
    "Yarın hava bulutlu ve serin: on sekiz derece. Perşembe günü yağmur var, rüzgâr çok. Cuma günü hava soğuk.",
    "Hafta sonu hava güzel. Ankara’da bugün yağmur var."
  ],
  gloss: { "derece": "Grad" },
  questions: [
    { id: "tr-a1-r10.q1", t: "mc", q: "Wie ist das Wetter heute in Istanbul?", o: ["Sonnig und warm", "Bewölkt und kühl", "Regnerisch und windig"], a: 0,
      why: { 1: "Bewölkt und kühl (*bulutlu ve serin*) ist das Wetter von **morgen**.", 2: "Regen und Wind (*yağmur, rüzgâr*) kommen erst am Donnerstag." },
      e: "*güneşli ve sıcak* = sonnig und warm. *-lI* bedeutet „mit“: *güneş* + *-li* = „mit Sonne“ = sonnig." },
    { id: "tr-a1-r10.q2", t: "gap", q: "Perşembe günü ___ var. (Regen)", a: ["yağmur"],
      wrong: { "kar": "*kar* (Schnee) wird im Text nicht erwähnt.", "rüzgâr": "*rüzgâr* (Wind) wird zusätzlich genannt, aber gefragt ist der Niederschlag: *yağmur*." },
      e: "*Perşembe günü yağmur var.* = „Am Donnerstag gibt es Regen.“" },
    { id: "tr-a1-r10.q3", t: "mc", q: "An welchem Tag ist es kalt?", o: ["Freitag", "Donnerstag", "Wochenende"], a: 0,
      why: { 1: "Donnerstag ist es regnerisch und windig.", 2: "Am Wochenende ist es schön (*güzel*)." },
      e: "*Cuma günü hava soğuk.* = „Am Freitag ist es kalt.“ *soğuk* = kalt, *sıcak* = warm/heiß." },
    { id: "tr-a1-r10.q4", t: "match", q: "Ordne zu:", p: [["güneşli", "sonnig"], ["bulutlu", "bewölkt"], ["serin", "kühl"], ["rüzgâr", "Wind"]],
      e: "Endung *-lI* = „mit“: *bulut* (Wolke) → *bulutlu* (bewölkt)." },
    { id: "tr-a1-r10.q5", t: "mc", q: "Sprachmittlung: Deine Kollegin Petra reist morgen nach Istanbul. Was sagst du ihr?", o: ["Morgen ist es bewölkt und kühl, 18 Grad.", "Morgen ist es sonnig und 25 Grad warm.", "Morgen schneit es.", "Morgen gibt es Sturm und Regen."], a: 0,
      why: { 1: "Sonnig und 25 Grad ist das Wetter von **heute**.", 2: "In Ankara regnet es heute; morgen schneit es nirgends.", 3: "Regen und Wind sind erst am Donnerstag angesagt." },
      e: "*Yarın* = morgen, *bugün* = heute. Achte auf diese Zeitwörter, sie ändern die richtige Antwort." }
  ]
});

K.addText('tr-a1-r11', {
  level: 'A1', kind: 'read', scene: 'ofis', genre: 'email',
  title: "Toplantı için e-posta", sub: "Eine kurze E-Mail",
  body: [
    "Merhaba Ahmet Bey,",
    "yarın saat on ikide toplantı var. Toplantı ikinci katta, ofiste değil. Patron da geliyor. Lütfen erken gelin ve telefonunuzu kapatın.",
    "Sorunuz var mı? Beni arayın.",
    "İyi günler, Selma Kaya"
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r11.q1", t: "mc", q: "Wann ist die Besprechung?", o: ["Morgen um zwölf Uhr", "Heute um zwölf Uhr", "Morgen um zehn Uhr"], a: 0,
      why: { 1: "*yarın* heißt morgen, nicht heute (*bugün*).", 2: "Es steht *on iki* (12), nicht *on* (10)." },
      e: "*yarın saat on ikide* = „morgen um zwölf Uhr“." },
    { id: "tr-a1-r11.q2", t: "gap", q: "Patron da ___ . (kommt)", a: ["geliyor"],
      wrong: { "geldi": "*geldi* = „ist gekommen“ (Vergangenheit). Die Besprechung ist morgen.", "gelin": "*gelin* ist eine höfliche Aufforderung („kommen Sie!“), keine Aussage über den Chef." },
      e: "*Patron da geliyor.* = „Der Chef kommt auch.“ *-yor* ist die Gegenwart: *gel-iyor*." },
    { id: "tr-a1-r11.q3", t: "mc", q: "Wo findet die Besprechung statt?", o: ["Im zweiten Stock", "Im Büro", "Im Café"], a: 0,
      why: { 1: "*ofiste değil* heißt: nicht im Büro.", 2: "Ein Café wird nicht erwähnt." },
      e: "*Toplantı ikinci katta, ofiste değil.* = „Die Besprechung ist im zweiten Stock, nicht im Büro.“ *değil* = nicht." },
    { id: "tr-a1-r11.q4", t: "mc", q: "Was soll Herr Ahmet mit seinem Telefon tun?", o: ["Es ausschalten", "Es mitbringen und laden", "Es zu Hause lassen"], a: 0,
      why: { 1: "Vom Laden steht nichts da.", 2: "Er soll es nicht zu Hause lassen, sondern ausschalten (*kapatın*)." },
      e: "*telefonunuzu kapatın* = „schalten Sie Ihr Telefon aus“. *kapatmak* = zumachen/ausschalten." },
    { id: "tr-a1-r11.q5", t: "mc", q: "Sprachmittlung: Ahmets Kollege Tom versteht kein Türkisch. Was sagst du ihm über die E-Mail?", o: ["Morgen um 12 Uhr ist eine Besprechung im 2. Stock; der Chef kommt auch; man soll früh kommen und das Handy ausschalten.", "Heute um 12 Uhr ist eine Besprechung im Büro; das Handy soll an bleiben.", "Morgen um 2 Uhr ist Mittagessen; der Chef kommt nicht.", "Die Besprechung ist abgesagt; man soll anrufen."], a: 0,
      why: { 1: "Es ist morgen und nicht im Büro; das Handy soll aus.", 2: "*İkinci kat* ist der zweite Stock, nicht „2 Uhr“; der Chef kommt (*geliyor*).", 3: "Die Besprechung findet statt; anrufen soll man nur bei Fragen." },
      e: "Fasse Datum, Uhrzeit, Ort, Personen und Bitten zusammen." }
  ]
});

K.addText('tr-a1-r12', {
  level: 'A1', kind: 'read', scene: 'otobus', genre: 'programm',
  title: "Otobüs tarifesi", sub: "Ein Fahrplan",
  items: [
    { h: "Otobüs 24 – Durak: Okul", t: "Pazartesiden cumaya sabah saat yedi, sekiz ve dokuzda otobüs var." },
    { h: "Cumartesi", t: "Cumartesi sabah sekizde ve onda." },
    { h: "Pazar", t: "Otobüs yok." },
    { h: "Son otobüs", t: "Hafta içi akşam saat onda. Sonra otobüs yok, taksi var." },
    { h: "Bilet", t: "Otobüste yirmi lira. Kredi kartı yok. Çocuklar için bilet ucuz." }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-r12.q1", t: "mc", q: "Fährt der Bus sonntags?", o: ["Nein", "Ja, um acht Uhr", "Ja, den ganzen Tag"], a: 0,
      why: { 1: "Um acht fährt er samstags (*Cumartesi … sekizde*).", 2: "*Pazar: Otobüs yok.* Sonntags fährt kein Bus." },
      e: "*Otobüs yok.* = „Es gibt keinen Bus.“ *yok* = es gibt nicht." },
    { id: "tr-a1-r12.q2", t: "gap", q: "Cumartesi otobüs saat sekizde ve ___ . (um zehn)", a: ["onda"],
      wrong: { "on": "*on* (10) ohne Endung heißt nur „zehn“. Für „um zehn“ braucht man *onda*.", "ondan": "*-dan* heißt „von … aus/ab“; „um“ heißt *-da*: *onda*." },
      e: "*saat onda* = „um zehn Uhr“. *on* + *-da* = *onda* (Lokativ: *-da* nach dunklem Vokal *o*)." },
    { id: "tr-a1-r12.q3", t: "mc", q: "Wie bezahlt man im Bus?", o: ["Bar, 20 Lira", "Mit Kreditkarte", "Gar nicht, die Fahrt ist frei"], a: 0,
      why: { 1: "*Kredi kartı yok* heißt: Kreditkarte geht nicht.", 2: "Es gibt einen Preis: *yirmi lira*." },
      e: "*Otobüste yirmi lira. Kredi kartı yok.* = „Im Bus 20 Lira. Keine Kreditkarte.“ Kinder zahlen weniger (*ucuz*)." },
    { id: "tr-a1-r12.q4", t: "mc", q: "Wann fährt unter der Woche der letzte Bus?", o: ["Um 22 Uhr", "Um 20 Uhr", "Um 19 Uhr"], a: 0,
      why: { 1: "*Sekiz* = 8 und *on* = 10. Es steht *Akşam saat onda* (22 Uhr).", 2: "Um sieben fährt der erste Bus am Morgen." },
      e: "*Akşam saat onda* = „Abends um zehn“ (22 Uhr). Danach fährt nur noch ein Taxi." },
    { id: "tr-a1-r12.q5", t: "mc", q: "Sprachmittlung: Deine Kollegin Nina will am Samstag um neun Uhr mit dem Bus fahren. Was sagst du ihr?", o: ["Samstags fährt um 9 kein Bus, nur um 8 und um 10.", "Samstags fährt um 9 ein Bus, wie an allen Tagen.", "Samstags fährt gar kein Bus.", "Der Bus um 9 kostet am Samstag nichts."], a: 0,
      why: { 1: "Die Abfahrt um 9 gibt es nur Montag bis Freitag.", 2: "Samstags fahren zwei Busse: *sekizde* und *onda*.", 3: "Von kostenlosen Fahrten steht nichts im Plan." },
      e: "Prüfe Wochentag und Uhrzeit getrennt: *Pazartesiden cumaya* ≠ *Cumartesi*." }
  ]
});

/* ================= HÖRTEXTE ================= */

K.addText('tr-a1-h01', {
  level: 'A1', kind: 'listen', scene: 'sokak', genre: 'gespraech',
  title: "Tanışma", sub: "Sich kennenlernen", plays: 2,
  lines: [
    { s: 'Murat', g: 'm', t: "Merhaba, ben Murat. Adın ne?", n: "Hallo, ich bin Murat. Wie heißt du?" },
    { s: 'Emre', g: 'm', t: "Merhaba Murat, benim adım Emre. Memnun oldum.", n: "Hallo Murat, mein Name ist Emre. Freut mich." },
    { s: 'Murat', g: 'm', t: "Ben de memnun oldum. Nerelisin?", n: "Mich freut es auch. Woher kommst du?" },
    { s: 'Emre', g: 'm', t: "Ben Almanya’dan geliyorum ama ailem Türk. Sen nerelisin?", n: "Ich komme aus Deutschland, aber meine Familie ist türkisch. Und woher bist du?" },
    { s: 'Murat', g: 'm', t: "Ben İzmir’denim. Kaç yaşındasın?", n: "Ich bin aus Izmir. Wie alt bist du?" },
    { s: 'Emre', g: 'm', t: "Yirmi beş yaşındayım.", n: "Ich bin fünfundzwanzig Jahre alt." }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-h01.q1", t: "mc", q: "Wie heißt der zweite Mann?", o: ["Emre", "Murat", "İzmir"], a: 0,
      why: { 1: "Murat ist der erste Mann, der fragt.", 2: "İzmir ist eine Stadt." },
      e: "*benim adım Emre* = „mein Name ist Emre“." },
    { id: "tr-a1-h01.q2", t: "mc", q: "Woher kommt Emre?", o: ["Aus Deutschland", "Aus Izmir", "Aus der Türkei"], a: 0,
      why: { 1: "Aus Izmir kommt Murat (*İzmir’denim*).", 2: "Seine Familie ist türkisch (*ailem Türk*), er selbst kommt aus Deutschland." },
      e: "*Almanya’dan geliyorum* = „ich komme aus Deutschland“. *-dan* = aus/von." },
    { id: "tr-a1-h01.q3", t: "mc", q: "Wie alt ist Emre?", o: ["25", "15", "55"], a: 0,
      why: { 1: "Es ist nicht *on beş* (15).", 2: "Es ist nicht *elli beş* (55)." },
      e: "*yirmi beş* = 25: *yirmi* (20) + *beş* (5)." },
    { id: "tr-a1-h01.q4", t: "listen", say: "Ben de memnun oldum.", q: "Hör zu. Was bedeutet der Satz?", o: ["Mich freut es auch.", "Ich bin auch müde.", "Ich gehe auch."], a: 0,
      why: { 1: "Müde heißt *yorgun*.", 2: "Gehen heißt *gitmek*." },
      e: "*memnun oldum* = „freut mich“; *ben de* = „ich auch“." }
  ]
});

K.addText('tr-a1-h02', {
  level: 'A1', kind: 'listen', scene: 'market', genre: 'durchsage',
  title: "Markette anons", sub: "Eine Durchsage im Supermarkt", plays: 2,
  lines: [
    { s: 'Anons', g: 'm', t: "Merhaba! Bugün meyve ve sebze çok ucuz: domates kilosu on lira, elma kilosu on beş lira. Süt ve yumurta ikinci katta. Market akşam dokuza kadar açık. İyi alışverişler!", n: "Hallo! Heute sind Obst und Gemüse sehr günstig: Tomaten das Kilo zehn Lira, Äpfel das Kilo fünfzehn Lira. Milch und Eier im zweiten Stock. Der Markt ist abends bis neun Uhr geöffnet. Viel Spaß beim Einkaufen!" }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-h02.q1", t: "mc", q: "Was ist heute günstig?", o: ["Obst und Gemüse", "Fleisch und Fisch", "Brot und Kuchen"], a: 0,
      why: { 1: "Fleisch (*et*) und Fisch (*balık*) kommen nicht vor.", 2: "Brot (*ekmek*) und Kuchen (*kek*) kommen nicht vor." },
      e: "*meyve ve sebze çok ucuz* = „Obst und Gemüse sind sehr günstig“." },
    { id: "tr-a1-h02.q2", t: "gap", q: "Domates kilosu ___ lira. (zehn)", a: ["on"],
      wrong: { "on beş": "*on beş* (15) ist der Preis für Äpfel.", "elli": "*elli* ist 50." },
      e: "*on* = 10. Das Kilo Tomaten kostet *on lira*; für Äpfel hörst du *on beş*." },
    { id: "tr-a1-h02.q3", t: "mc", q: "Wo gibt es Milch und Eier?", o: ["Im zweiten Stock", "Im Erdgeschoss", "Im ersten Stock"], a: 0,
      why: { 1: "Im Erdgeschoss würde man *zemin kat* sagen.", 2: "*birinci* = erster; gesagt wird *ikinci*." },
      e: "*Süt ve yumurta ikinci katta.* = „Milch und Eier sind im zweiten Stock.“" },
    { id: "tr-a1-h02.q4", t: "mc", q: "Bis wann ist der Markt geöffnet?", o: ["Bis 21 Uhr", "Bis 20 Uhr", "Bis 19 Uhr"], a: 0,
      why: { 1: "*sekiz* = 8 (20 Uhr); gehört wird *dokuz* (9).", 2: "*yedi* = 7; gehört wird *dokuz* (9)." },
      e: "*akşam dokuza kadar* = „bis neun Uhr abends“ (21 Uhr). *kadar* = bis." }
  ]
});

K.addText('tr-a1-h03', {
  level: 'A1', kind: 'listen', scene: 'istasyon', genre: 'durchsage',
  title: "İstasyonda anons", sub: "Eine Bahnhofsdurchsage", plays: 2,
  lines: [
    { s: 'Anons', g: 'm', t: "Merhaba! İzmir treni on beş dakika geç. Tren saat sekizde değil, sekiz on beşte geliyor. Tren ikinci yolda. Lütfen istasyonda bekleyin. Çay ve kahve birinci katta.", n: "Hallo! Der Zug nach Izmir hat fünfzehn Minuten Verspätung. Der Zug kommt nicht um acht, sondern um acht Uhr fünfzehn. Der Zug kommt auf Gleis zwei an. Bitte warten Sie im Bahnhof. Tee und Kaffee gibt es im ersten Stock." }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-h03.q1", t: "mc", q: "Wie viel Verspätung hat der Zug?", o: ["15 Minuten", "50 Minuten", "5 Minuten"], a: 0,
      why: { 1: "*elli* wäre 50; gehört wird *on beş*.", 2: "*beş* wäre 5; gehört wird *on beş* (15)." },
      e: "*on beş dakika geç* = „fünfzehn Minuten zu spät“." },
    { id: "tr-a1-h03.q2", t: "mc", q: "Wann kommt der Zug an?", o: ["8:15 Uhr", "8:00 Uhr", "7:15 Uhr"], a: 0,
      why: { 1: "Um acht Uhr sollte er kommen, tut es aber nicht: *sekizde değil*.", 2: "Von sieben Uhr ist nicht die Rede." },
      e: "*sekiz on beşte* = „um acht Uhr fünfzehn“. *değil* = nicht." },
    { id: "tr-a1-h03.q3", t: "gap", q: "Tren ___ yolda. (zweiten)", a: ["ikinci"],
      wrong: { "iki": "*iki* ist die Grundzahl („zwei“). Für „zweiter“ sagt man *ikinci*." },
      e: "*ikinci yol* = „Gleis zwei“, wörtlich „zweiter Weg“. *yolda* = auf dem Weg/Gleis." },
    { id: "tr-a1-h03.q4", t: "mc", q: "Welcher Zug hat Verspätung?", o: ["Der Izmir-Zug", "Der Ankara-Zug", "Der Antalya-Zug"], a: 0,
      why: { 1: "Ankara wird nicht genannt.", 2: "Antalya wird nicht genannt." },
      e: "*İzmir treni* = „der Izmir-Zug“, also der Zug nach Izmir." }
  ]
});

K.addText('tr-a1-h04', {
  level: 'A1', kind: 'listen', scene: 'berber', genre: 'anrufbeantworter',
  title: "Berberin mesajı", sub: "Anrufbeantworter eines Friseurs", plays: 2,
  lines: [
    { s: 'Ayhan', g: 'm', t: "Merhaba, ben Ayhan, berberim. Bugün pazar, kapalıyız. Pazartesi günü sabah dokuzdan akşam altıya kadar açığız. Saç kesimi yüz elli lira. Lütfen o zaman arayın. Hoşça kalın!", n: "Hallo, ich bin Ayhan, Friseur. Heute ist Sonntag, wir haben geschlossen. Am Montag sind wir von neun Uhr morgens bis sechs Uhr abends geöffnet. Haarschnitt hundertfünfzig Lira. Bitte rufen Sie dann an. Auf Wiederhören!" }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-h04.q1", t: "mc", q: "Wer spricht?", o: ["Ein Friseur", "Ein Arzt", "Ein Lehrer"], a: 0,
      why: { 1: "Ein Arzt wäre *doktor*.", 2: "Ein Lehrer wäre *öğretmen*." },
      e: "*berberim* = „ich bin Friseur“ (*berber* + *-im* = ich bin)." },
    { id: "tr-a1-h04.q2", t: "mc", q: "Warum ist heute geschlossen?", o: ["Es ist Sonntag.", "Es ist Samstag.", "Der Friseur ist krank."], a: 0,
      why: { 1: "Es heißt *pazar* (Sonntag), nicht *cumartesi*.", 2: "Von Krankheit ist keine Rede." },
      e: "*Bugün pazar, kapalıyız.* = „Heute ist Sonntag, wir haben zu.“" },
    { id: "tr-a1-h04.q3", t: "mc", q: "Wann öffnet der Laden am Montag?", o: ["Um 9 Uhr", "Um 6 Uhr", "Um 12 Uhr"], a: 0,
      why: { 1: "Um sechs Uhr abends schließt er (*akşam altıya kadar*).", 2: "Ein Mittagsbeginn wird nicht genannt." },
      e: "*sabah dokuzdan* = „ab neun Uhr morgens“; *akşam altıya kadar* = „bis sechs Uhr abends“." },
    { id: "tr-a1-h04.q4", t: "gap", q: "Saç kesimi ___ lira. (hundertfünfzig)", a: ["yüz elli"],
      wrong: { "elli": "*elli* ist nur 50. Hundertfünfzig heißt *yüz elli*.", "yüz": "*yüz* ist nur 100. Es kommt noch *elli* dazu." },
      e: "*yüz elli* = 100 + 50 = 150. Im Türkischen sagt man nicht *bir yüz*, sondern nur *yüz*." }
  ]
});

K.addText('tr-a1-h05', {
  level: 'A1', kind: 'listen', scene: 'kafe', genre: 'gespraech',
  title: "Kafede", sub: "Im Café", plays: 2,
  lines: [
    { s: 'Garson', g: 'm', t: "Merhaba, buyurun.", n: "Hallo, bitte schön." },
    { s: 'Can', g: 'm', t: "Bir çay ve bir kek lütfen.", n: "Einen Tee und ein Stück Kuchen, bitte." },
    { s: 'Garson', g: 'm', t: "Şeker istiyor musunuz?", n: "Möchten Sie Zucker?" },
    { s: 'Can', g: 'm', t: "Hayır, şekersiz lütfen. Hesap ne kadar?", n: "Nein, ohne Zucker bitte. Wie viel macht es?" },
    { s: 'Garson', g: 'm', t: "Çay on, kek yirmi beş. Hepsi otuz beş lira.", n: "Tee zehn, Kuchen fünfundzwanzig. Zusammen fünfunddreißig Lira." },
    { s: 'Can', g: 'm', t: "Buyurun, kırk lira.", n: "Bitte, vierzig Lira." }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-h05.q1", t: "mc", q: "Was bestellt Can?", o: ["Tee und Kuchen", "Kaffee und Kuchen", "Tee und Brot"], a: 0,
      why: { 1: "Kaffee (*kahve*) wird nicht bestellt.", 2: "Brot (*ekmek*) wird nicht bestellt." },
      e: "*bir çay ve bir kek* = „ein Tee und ein Kuchen“." },
    { id: "tr-a1-h05.q2", t: "mc", q: "Möchte Can Zucker?", o: ["Nein", "Ja", "Ja, zwei Stück"], a: 0,
      why: { 1: "Er sagt *Hayır* (nein).", 2: "Davon ist keine Rede." },
      e: "*şekersiz* = „ohne Zucker“. *-sIz* bedeutet „ohne“." },
    { id: "tr-a1-h05.q3", t: "gap", q: "Hepsi ___ lira. (fünfunddreißig)", a: ["otuz beş"],
      wrong: { "kırk": "*kırk* (40) ist das Geld, das Can gibt.", "yirmi beş": "*yirmi beş* (25) ist nur der Preis für den Kuchen." },
      e: "*otuz beş* = 30 + 5 = 35 (Tee 10 + Kuchen 25)." },
    { id: "tr-a1-h05.q4", t: "mc", q: "Wie viel gibt Can dem Kellner?", o: ["40 Lira", "35 Lira", "45 Lira"], a: 0,
      why: { 1: "35 Lira ist der Preis, nicht das, was er gibt.", 2: "*kırk beş* wäre 45; gehört wird nur *kırk*." },
      e: "*kırk* = 40." }
  ]
});

K.addText('tr-a1-h06', {
  level: 'A1', kind: 'listen', scene: 'sokak', genre: 'gespraech',
  title: "Yol tarifi", sub: "Eine Wegbeschreibung", plays: 2,
  lines: [
    { s: 'Turist', g: 'm', t: "Affedersiniz, banka nerede?", n: "Entschuldigung, wo ist die Bank?" },
    { s: 'Adam', g: 'm', t: "Düz gidin, sonra sağa dönün. Banka sağda, caminin yanında.", n: "Gehen Sie geradeaus, dann biegen Sie rechts ab. Die Bank ist rechts, neben der Moschee." },
    { s: 'Turist', g: 'm', t: "Uzak mı?", n: "Ist es weit?" },
    { s: 'Adam', g: 'm', t: "Hayır, yakın. Yürüyerek beş dakika. Köşede büyük bir cami var.", n: "Nein, nah. Zu Fuß fünf Minuten. An der Ecke steht eine große Moschee." },
    { s: 'Turist', g: 'm', t: "Teşekkür ederim.", n: "Danke." },
    { s: 'Adam', g: 'm', t: "Rica ederim.", n: "Gern geschehen." }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-h06.q1", t: "mc", q: "Was sucht der Tourist?", o: ["Eine Bank", "Eine Moschee", "Eine Haltestelle"], a: 0,
      why: { 1: "Die Moschee (*cami*) dient nur als Orientierung.", 2: "Eine Haltestelle (*durak*) wird nicht gesucht." },
      e: "*banka nerede?* = „wo ist die Bank?“" },
    { id: "tr-a1-h06.q2", t: "gap", q: "Önce düz gidin, sonra ___ dönün. (nach rechts)", a: ["sağa"],
      wrong: { "sağ": "Mit *dönmek* braucht man die Richtung: *sağa* (nach rechts).", "sola": "*sola* heißt „nach links“. Der Mann sagt *sağa*." },
      e: "*sağa dön-* = „rechts abbiegen“. *-a* zeigt die Richtung." },
    { id: "tr-a1-h06.q3", t: "mc", q: "Wie weit ist es?", o: ["Fünf Minuten zu Fuß", "Fünfzig Minuten zu Fuß", "Fünf Minuten mit dem Bus"], a: 0,
      why: { 1: "Es sind *beş* (5), nicht *elli* (50) Minuten.", 2: "*yürüyerek* heißt „zu Fuß“, nicht „mit dem Bus“." },
      e: "*Yürüyerek beş dakika.* = „Zu Fuß fünf Minuten.“" },
    { id: "tr-a1-h06.q4", t: "listen", say: "Düz gidin, sonra sağa dönün.", q: "Hör zu. Was bedeutet der Satz?", o: ["Gehen Sie geradeaus, dann rechts.", "Gehen Sie links, dann geradeaus.", "Bleiben Sie hier."], a: 0,
      why: { 1: "Die Reihenfolge und die Richtung sind andere: *düz* = geradeaus, *sağa* = nach rechts.", 2: "Von Bleiben ist keine Rede." },
      e: "*düz* = geradeaus; *sonra* = dann; *sağa dönün* = biegen Sie rechts ab (höfliche Form)." }
  ]
});

K.addText('tr-a1-h07', {
  level: 'A1', kind: 'listen', scene: 'ofis', genre: 'anrufbeantworter',
  title: "Toplantı mesajı", sub: "Eine Nachricht auf dem Anrufbeantworter", plays: 2,
  lines: [
    { s: 'Kerem', g: 'm', t: "Merhaba Selim, ben Kerem. Yarın saat üçte değil, dörtte toplantı var. Ofiste değil, okulda. Toplantı bir saat. Patron da geliyor. Telefonum açık. Beni ara, lütfen. Görüşürüz!", n: "Hallo Selim, hier ist Kerem. Morgen ist die Besprechung nicht um drei, sondern um vier. Nicht im Büro, sondern in der Schule. Die Besprechung dauert eine Stunde. Der Chef kommt auch. Mein Telefon ist an. Ruf mich bitte an. Bis bald!" }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-h07.q1", t: "mc", q: "Wann ist die Besprechung?", o: ["Morgen um vier Uhr", "Morgen um drei Uhr", "Heute um vier Uhr"], a: 0,
      why: { 1: "*saat üçte değil* heißt: nicht um drei.", 2: "Es heißt *yarın* (morgen), nicht *bugün*." },
      e: "*saat üçte değil, dörtte* = „nicht um drei, sondern um vier“." },
    { id: "tr-a1-h07.q2", t: "mc", q: "Wo findet sie statt?", o: ["In der Schule", "Im Büro", "Im Café"], a: 0,
      why: { 1: "*Ofiste değil* heißt: nicht im Büro.", 2: "Ein Café wird nicht genannt." },
      e: "*okulda* = „in der Schule“; *ofiste* = „im Büro“." },
    { id: "tr-a1-h07.q3", t: "mc", q: "Wie lange dauert die Besprechung?", o: ["Eine Stunde", "Eine Minute", "Zwei Stunden"], a: 0,
      why: { 1: "*dakika* = Minute; gehört wird *saat* (Stunde).", 2: "*iki* (zwei) wird nicht gesagt, sondern *bir* (eins)." },
      e: "*Toplantı bir saat.* = „Die Besprechung (dauert) eine Stunde.“ *saat* = Stunde und Uhr." },
    { id: "tr-a1-h07.q4", t: "gap", q: "Patron da ___ . (kommt)", a: ["geliyor"],
      wrong: { "gelir": "*gelir* ist der Aorist („kommt gewöhnlich/wohl“). Für einen festen Termin morgen sagt man *geliyor*.", "geldi": "*geldi* = ist gekommen (Vergangenheit)." },
      e: "*Patron da geliyor.* = „Der Chef kommt auch.“" }
  ]
});

K.addText('tr-a1-h08', {
  level: 'A1', kind: 'listen', scene: 'aile', genre: 'gespraech',
  title: "Ailem", sub: "Meine Familie", plays: 2,
  lines: [
    { s: 'Ali', g: 'm', t: "Bu kim?", n: "Wer ist das?" },
    { s: 'Kerem', g: 'm', t: "Bu benim ağabeyim. O mühendis, yirmi sekiz yaşında. Bu da kız kardeşim. O öğrenci.", n: "Das ist mein älterer Bruder. Er ist Ingenieur, achtundzwanzig Jahre alt. Und das ist meine Schwester. Sie ist Schülerin." },
    { s: 'Ali', g: 'm', t: "Annen ve baban nerede?", n: "Wo sind deine Eltern?" },
    { s: 'Kerem', g: 'm', t: "Onlar evde. Babam televizyon izliyor, annem yemek yapıyor.", n: "Sie sind zu Hause. Mein Vater sieht fern, meine Mutter kocht." }
  ],
  gloss: {},
  questions: [
    { id: "tr-a1-h08.q1", t: "mc", q: "Was ist Kerems Bruder von Beruf?", o: ["Ingenieur", "Lehrer", "Arzt"], a: 0,
      why: { 1: "Lehrer wäre *öğretmen*.", 2: "Arzt wäre *doktor*." },
      e: "*mühendis* = Ingenieur." },
    { id: "tr-a1-h08.q2", t: "mc", q: "Wie alt ist der Bruder?", o: ["28", "18", "38"], a: 0,
      why: { 1: "*on sekiz* wäre 18.", 2: "*otuz sekiz* wäre 38." },
      e: "*yirmi sekiz* = 20 + 8 = 28." },
    { id: "tr-a1-h08.q3", t: "mc", q: "Wo sind die Eltern?", o: ["Zu Hause", "Bei der Arbeit", "In der Schule"], a: 0,
      why: { 1: "Bei der Arbeit wäre *işte*.", 2: "Die Schule wird nicht genannt." },
      e: "*Onlar evde.* = „Sie sind zu Hause.“ *evde* = *ev* + *-de*." },
    { id: "tr-a1-h08.q4", t: "gap", q: "Bu benim ___ . (älterer Bruder)", a: ["ağabeyim", "abim"],
      wrong: { "kardeşim": "*kardeş* = Geschwister (meist jünger). Älterer Bruder heißt *ağabey*: *ağabeyim*.", "ağabey": "Hier fehlt das Besitz-Suffix: „mein Bruder“ = *ağabeyim*." },
      e: "*ağabeyim* = „mein älterer Bruder“ (*ağabey* + *-im* = mein)." }
  ]
});

K.addText('tr-a1-h09', {
  level: 'A1', kind: 'listen', scene: 'hava', genre: 'radio',
  title: "Radyoda hava durumu", sub: "Das Wetter im Radio", plays: 2,
  lines: [
    { s: 'Spiker', g: 'm', t: "Günaydın! Bugün hava güzel: güneşli ve sıcak, yirmi derece. Öğleden sonra rüzgâr var. Yarın yağmur var, hava serin: on iki derece. Pazar günü kar var, hava soğuk.", n: "Guten Morgen! Heute ist das Wetter schön: sonnig und warm, zwanzig Grad. Nachmittags gibt es Wind. Morgen gibt es Regen, es ist kühl: zwölf Grad. Am Sonntag gibt es Schnee, es ist kalt." }
  ],
  gloss: { "derece": "Grad" },
  questions: [
    { id: "tr-a1-h09.q1", t: "mc", q: "Wie ist das Wetter heute?", o: ["Sonnig und warm", "Regnerisch und kühl", "Schnee und kalt"], a: 0,
      why: { 1: "Regen und Kühle kommen morgen (*yarın*).", 2: "Schnee und Kälte kommen am Sonntag." },
      e: "*güneşli ve sıcak* = sonnig und warm." },
    { id: "tr-a1-h09.q2", t: "gap", q: "Yarın ___ var. (Regen)", a: ["yağmur"],
      wrong: { "kar": "*kar* (Schnee) kommt erst am Sonntag.", "rüzgâr": "*rüzgâr* (Wind) weht schon heute Nachmittag." },
      e: "*Yarın yağmur var.* = „Morgen gibt es Regen.“" },
    { id: "tr-a1-h09.q3", t: "mc", q: "Wann gibt es heute Wind?", o: ["Am Nachmittag", "Am Morgen", "Abends"], a: 0,
      why: { 1: "Am Morgen ist es sonnig.", 2: "Vom Abend ist nicht die Rede." },
      e: "*Öğleden sonra* = „nachmittags“ (*öğle* = Mittag, *sonra* = nach)." },
    { id: "tr-a1-h09.q4", t: "mc", q: "Was gibt es am Sonntag?", o: ["Schnee", "Sonne", "Regen"], a: 0,
      why: { 1: "Sonne gibt es heute (*bugün*).", 2: "Regen gibt es morgen (*yarın*)." },
      e: "*Pazar günü kar var.* = „Am Sonntag gibt es Schnee.“ *kar* = Schnee." }
  ]
});

K.addText('tr-a1-h10', {
  level: 'A1', kind: 'listen', scene: 'hastane', genre: 'gespraech',
  title: "Doktorda", sub: "Beim Arzt", plays: 2,
  lines: [
    { s: 'Doktor', g: 'm', t: "Merhaba, buyurun. Neyiniz var?", n: "Guten Tag, bitte. Was fehlt Ihnen?" },
    { s: 'Hasta', g: 'm', t: "Boğazım ağrıyor ve başım dönüyor. Ateşim de var.", n: "Mein Hals tut weh und mir ist schwindelig. Ich habe auch Fieber." },
    { s: 'Doktor', g: 'm', t: "Kaç gündür?", n: "Seit wie vielen Tagen?" },
    { s: 'Hasta', g: 'm', t: "İki gündür.", n: "Seit zwei Tagen." },
    { s: 'Doktor', g: 'm', t: "Bu ilaç sabah, öğle ve akşam. Çok su için. Geçmiş olsun!", n: "Dieses Medikament morgens, mittags und abends. Trinken Sie viel Wasser. Gute Besserung!" }
  ],
  gloss: { "boğaz": "Hals" },
  questions: [
    { id: "tr-a1-h10.q1", t: "mc", q: "Wo hat der Patient Schmerzen?", o: ["Im Hals", "Im Bauch", "Am Fuß"], a: 0,
      why: { 1: "Bauch wäre *karın*.", 2: "Fuß wäre *ayak*." },
      e: "*Boğazım ağrıyor.* = „Mein Hals tut weh.“" },
    { id: "tr-a1-h10.q2", t: "mc", q: "Seit wann ist der Patient krank?", o: ["Seit zwei Tagen", "Seit einer Woche", "Seit heute"], a: 0,
      why: { 1: "*hafta* = Woche, nicht *gün*.", 2: "*bugün* = heute; er sagt *iki gündür*." },
      e: "*iki gündür* = „seit zwei Tagen“. *-dIr* nach der Zeitangabe bedeutet „seit“." },
    { id: "tr-a1-h10.q3", t: "gap", q: "Ateşim de ___ . (Ich habe auch Fieber.)", a: ["var"],
      wrong: { "yok": "*yok* heißt „es gibt nicht“. Der Patient hat Fieber, also *var*." },
      e: "*Ateşim var.* = „Ich habe Fieber.“ Das Türkische sagt „mein Fieber ist da“." },
    { id: "tr-a1-h10.q4", t: "mc", q: "Wann soll er das Medikament nehmen?", o: ["Morgens, mittags und abends", "Nur abends", "Nur nach dem Essen"], a: 0,
      why: { 1: "Es sind drei Zeiten: *sabah, öğle ve akşam*.", 2: "Vom Essen ist nicht die Rede." },
      e: "*sabah, öğle ve akşam* = morgens, mittags und abends." }
  ]
});

})(window.KOPRU);
