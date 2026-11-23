/* Deutsch A1 – Lese- und Hörtexte (Erklärungen/Fragen auf Türkisch)
 * Lesetexte r01–r12, Hörtexte h01–h10. Alle Texte selbst geschrieben, Wortschatz aus de-a1-vocab.js.
 * Fragen-IDs '<textId>.q<n>' sind fest und werden nie wiederverwendet.
 */
(function (K) {

/* ================= LESETEXTE ================= */

K.addText('de-a1-r01', {
  level: 'A1', kind: 'read', scene: 'cafe', genre: 'hinweis',
  title: 'Schild im Café', sub: 'Kafedeki tabela',
  body: [
    'Café Sonne',
    'Wir haben Kaffee, Tee, Kuchen und Brötchen. Von Montag bis Freitag sind wir von 8 bis 18 Uhr hier. Am Samstag sind wir von 9 bis 13 Uhr hier. Am Sonntag ist das Café zu.',
    'Heute: Apfelkuchen, 2 Euro.'
  ],
  gloss: { 'zu': 'kapalı' },
  questions: [
    { id: 'de-a1-r01.q1', t: 'mc', q: 'Pazar günü kafe nasıl?', o: ['Sabah 9’dan öğleden sonra 1’e kadar açık', 'Kapalı', 'Sabah 8’den akşam 6’ya kadar açık'], a: 1,
      why: { 0: '9–13 saatleri **cumartesi** (*Samstag*) içindir.', 2: '8–18 saatleri **hafta içi** (*Montag bis Freitag*) içindir.' },
      e: '*Am Sonntag ist das Café zu.* → *zu* burada “kapalı” demektir. *am* + gün adı: “…günü”.' },
    { id: 'de-a1-r01.q2', t: 'gap', q: 'Am Samstag sind wir von ___ bis 13 Uhr hier.', a: ['9', 'neun'],
      wrong: { '8': '8 hafta içi açılış saatidir. Cumartesi **9** (neun) yazıyor.', 'acht': '*acht* (8) hafta içi açılış saatidir. Cumartesi *neun* (9).' },
      e: 'Cumartesi: *von 9 bis 13 Uhr* = saat 9’dan 13’e kadar.' },
    { id: 'de-a1-r01.q3', t: 'mc', q: 'Bugünün özel teklifi ne? (*Heute*)', o: ['Elmalı pasta, 2 euro', 'Çay, 2 euro', 'Kahve ve küçük ekmek'], a: 0,
      why: { 1: '*Tee* her gün var; “*Heute*” satırında fiyat elmalı pasta için yazılmış.', 2: 'Bu, her günkü genel sunum; “*Heute*” (bugün) satırı başka bir şey söylüyor.' },
      e: '*Heute: Apfelkuchen, 2 Euro.* → *der Kuchen, -* = pasta/kek.' },
    { id: 'de-a1-r01.q4', t: 'mc', q: 'Annen tabelayı anlamıyor. Ona ne dersin?', o: ['Hafta içi 8–18, cumartesi 9–13 açık; pazar kapalı.', 'Her gün 8–18 açık.', 'Cumartesi ve pazar kapalı.', 'Pazar 9–13 açık.'], a: 0,
      why: { 1: 'Cumartesi daha kısa (9–13) ve pazar kapalı; “her gün” yanlış.', 2: 'Cumartesi açık (9–13). Sadece pazar kapalı.', 3: 'Pazar günü kafe kapalı (*zu*).' },
      e: 'Sprachmittlung: üç ayrı bilgi aktarılır: *Montag bis Freitag* 8–18, *Samstag* 9–13, *Sonntag* kapalı.' },
    { id: 'de-a1-r01.q5', t: 'match', q: 'Eşleştir:', p: [['Montag bis Freitag', '8 bis 18 Uhr'], ['Samstag', '9 bis 13 Uhr'], ['Sonntag', 'zu'], ['heute', 'Apfelkuchen']],
      e: '*von … bis* = aralık, *am* + gün. Her gün için farklı bir bilgi var.' }
  ]
});

K.addText('de-a1-r02', {
  level: 'A1', kind: 'read', scene: 'wohnung', genre: 'nachricht',
  title: 'Notiz an die Mutter', sub: 'Anneye not',
  body: [
    'Hallo Mama,',
    'ich bin in der Schule. Ich komme um drei Uhr nach Hause. Das Mittagessen ist im Kühlschrank: Reis und Hähnchen. Kannst du bitte Brot und Milch kaufen? Danke!',
    'Tschüss, Ayşe'
  ],
  questions: [
    { id: 'de-a1-r02.q1', t: 'mc', q: 'Ayşe şimdi nerede?', o: ['Evde', 'Okulda', 'Markette'], a: 1,
      why: { 0: 'Eve saat üçte *gelecek* (*nach Hause*); şimdi evde değil.', 2: 'Marketten söz yok; Ayşe annesinden alışveriş **istiyor**.' },
      e: '*Ich bin in der Schule.* → *in der Schule* = okulda.' },
    { id: 'de-a1-r02.q2', t: 'gap', q: 'Ayşe kommt um ___ Uhr nach Hause.', a: ['drei', '3'],
      wrong: { 'zwei': '*zwei* = 2. Notta *drei* (3) yazıyor.', 'vier': '*vier* = 4. Notta *drei* (3) yazıyor.' },
      e: '*um drei Uhr* = saat üçte. *um* + saat.' },
    { id: 'de-a1-r02.q3', t: 'mc', q: 'Öğle yemeği nerede?', o: ['Fırında', 'Buzdolabında', 'Masanın üstünde'], a: 1,
      why: { 0: '*Ofen* (fırın) metinde geçmiyor.', 2: '*Tisch* (masa) metinde geçmiyor.' },
      e: '*Das Mittagessen ist im Kühlschrank.* → *der Kühlschrank, -̈e* = buzdolabı; *im* = *in dem*.' },
    { id: 'de-a1-r02.q4', t: 'mc', q: 'Babana notu aktarıyorsun. Ayşe annesinden ne istiyor?', o: ['Ekmek ve süt almasını', 'Pirinç ve tavuk pişirmesini', 'Onu okuldan almasını', 'Doktora gitmesini'], a: 0,
      why: { 1: 'Pirinç ve tavuk zaten buzdolabında; pişirmesi istenmiyor.', 2: 'Böyle bir istek yok; Ayşe kendisi eve geliyor.', 3: 'Doktordan söz edilmiyor.' },
      e: '*Kannst du bitte Brot und Milch kaufen?* = “Ekmek ve süt alabilir misin lütfen?” Rica *Kannst du …?* ile yapılır, fiil sonda (*kaufen*).' },
    { id: 'de-a1-r02.q5', t: 'gap', q: 'Im Kühlschrank sind Reis und ___.', a: ['Hähnchen'],
      wrong: { 'Fisch': 'Balık değil, tavuk (*Hähnchen*) yazıyor.' },
      e: '*Reis und Hähnchen* = pirinç ve tavuk.' }
  ]
});

K.addText('de-a1-r03', {
  level: 'A1', kind: 'read', scene: 'einkauf', genre: 'hinweis',
  title: 'Einkaufszettel', sub: 'Alışveriş listesi',
  body: [
    'Einkaufen für das Wochenende:',
    '1 Kilo Äpfel – 2 Liter Milch – Brot – 6 Eier – Käse – 1 Flasche Wasser – 1 Kilo Reis – 2 Tomaten',
    'Nicht vergessen: Zucker!',
    'Bitte heute noch einkaufen. Der Supermarkt ist ja in der Nähe. Danke!'
  ],
  gloss: { 'Einkaufen': 'alışveriş', 'Wochenende': 'hafta sonu', 'in der Nähe': 'yakında', 'Äpfel': 'elmalar (Apfel)', 'Eier': 'yumurtalar (Ei)' },
  questions: [
    { id: 'de-a1-r03.q1', t: 'mc', q: 'Kaç litre süt gerekiyor?', o: ['1 litre', '2 litre', '6 litre'], a: 1,
      why: { 0: '1 *Kilo* elma içindir, süt için değil.', 2: '6 sayısı yumurta (*Eier*) içindir.' },
      e: '*2 Liter Milch* = 2 litre süt. *Liter*, *Kilo*, *Euro* sayıdan sonra çoğul almaz: *2 Liter*. Ama dişil birimler alır: *2 Flaschen*.' },
    { id: 'de-a1-r03.q2', t: 'gap', q: 'Wir brauchen sechs ___.', a: ['Eier'],
      wrong: { 'Ei': 'Altı tane var, yani **çoğul**: *die Eier*; tekil *das Ei*.' },
      e: '*das Ei, die Eier* – 6 yumurta: *6 Eier*.' },
    { id: 'de-a1-r03.q3', t: 'mc', q: 'Neyi unutmamak gerekiyor?', o: ['Peyniri', 'Şekeri', 'Suyu'], a: 1,
      why: { 0: '*Käse* listede var ama “unutma” satırında değil.', 2: '*Wasser* listede var ama “unutma” satırında değil.' },
      e: '*Nicht vergessen: Zucker!* = Şekeri unutma! *vergessen* = unutmak.' },
    { id: 'de-a1-r03.q4', t: 'mc', q: 'Eşin markete gidiyor. Ona ne söylersin?', o: ['1 kilo elma, 2 litre süt, ekmek, 6 yumurta, peynir, 1 şişe su, 1 kilo pirinç, 2 domates ve şeker.', '2 kilo elma, 1 litre süt ve ekmek.', '6 elma, 2 şişe süt ve peynir.', 'Sadece ekmek ve su.'], a: 0,
      why: { 1: 'Miktarlar yanlış: 1 kilo elma, 2 litre süt; yumurta ve şeker de eksik.', 2: '6 sayısı yumurtadır, elma değil; süt “2 litre”, “2 şişe” değil.', 3: 'Liste çok daha uzun.' },
      e: 'Sprachmittlung: sayıyı doğru ürüne bağla: *1 Kilo Äpfel*, *2 Liter Milch*, *6 Eier*, *1 Flasche Wasser*.' },
    { id: 'de-a1-r03.q5', t: 'match', q: 'Miktar ve ürünü eşleştir:', p: [['1 Kilo', 'Äpfel'], ['2 Liter', 'Milch'], ['6', 'Eier'], ['1 Flasche', 'Wasser']],
      e: 'Ölçü + ürün: *ein Kilo Äpfel*, *zwei Liter Milch*, *eine Flasche Wasser*.' },
    { id: 'de-a1-r03.q6', t: 'mc', q: 'Alışveriş ne zaman yapılmalı?', o: ['Bugün', 'Yarın', 'Pazartesi'], a: 0,
      why: { 1: 'Metinde *morgen* (yarın) yok; *heute* (bugün) var.', 2: 'Pazartesiden söz edilmiyor.' },
      e: '*Bitte heute noch einkaufen.* → *heute* = bugün, *noch* = “bugün içinde”. Liste hafta sonu için, ama alışveriş bugün.' }
  ]
});

K.addText('de-a1-r04', {
  level: 'A1', kind: 'read', scene: 'freizeit', genre: 'nachricht',
  title: 'SMS von Lisa', sub: 'Lisa’dan mesaj',
  body: [
    'Hallo Tom, hast du heute Abend Zeit? Ich gehe ins Kino. Der Film beginnt um acht Uhr. Kommst du mit? Ich warte um sieben Uhr an der Haltestelle. Bis später, Lisa'
  ],
  gloss: { 'Film': 'film', 'Kommst du mit': 'sen de gelir misin' },
  questions: [
    { id: 'de-a1-r04.q1', t: 'mc', q: 'Lisa nereye gidiyor?', o: ['Sinemaya', 'Parka', 'Okula'], a: 0,
      why: { 1: '*Park* metinde geçmiyor.', 2: '*Schule* metinde geçmiyor.' },
      e: '*Ich gehe ins Kino.* = Sinemaya gidiyorum. *ins* = *in das*: nereye?' },
    { id: 'de-a1-r04.q2', t: 'gap', q: 'Der Film beginnt um ___ Uhr.', a: ['acht', '8'],
      wrong: { 'neun': '*neun* = 9. Filmin saati *acht* (8).', 'sieben': '*sieben* = 7. Filmin saati *acht* (8).' },
      e: '*um acht Uhr* = saat sekizde.' },
    { id: 'de-a1-r04.q3', t: 'mc', q: 'Lisa ne zaman gidiyor?', o: ['Yarın sabah', 'Bu akşam', 'Dün akşam'], a: 1,
      why: { 0: '*morgen* = yarın. Metinde *heute Abend* var.', 2: '*gestern* = dün. Metinde *heute* (bugün) var.' },
      e: '*heute Abend* = bu akşam.' },
    { id: 'de-a1-r04.q4', t: 'mc', q: 'Arkadaşın Almanca bilmiyor. Lisa Tom’a ne yazıyor?', o: ['Bu akşam vaktin var mı? Sinemaya gidiyorum, film saat 8’de; gelir misin?', 'Yarın akşam sinemaya gidiyorum, film saat 9’da.', 'Bu akşam evdeyim, gelir misin?', 'Dün sinemaya gittim, çok güzeldi.'], a: 0,
      why: { 1: 'Zaman ve saat yanlış: *heute Abend* ve *acht Uhr*.', 2: 'Lisa evde değil, sinemaya gidiyor.', 3: 'Geçmişten söz edilmiyor; *Ich gehe* şimdiki/yakın zaman.' },
      e: 'Sprachmittlung: soru (*Hast du Zeit?*), plan (*Kino*), saat (*acht*) ve davet (*Kommst du mit?*) aktarılır.' },
    { id: 'de-a1-r04.q5', t: 'gap', q: 'Lisa fragt: Hast du heute Abend ___?', a: ['Zeit'],
      wrong: { 'Uhr': '*Uhr* saat demektir; “vaktin var mı” için *Zeit* kullanılır.' },
      e: '*Hast du Zeit?* = Vaktin var mı?' }
  ]
});

K.addText('de-a1-r05', {
  level: 'A1', kind: 'read', scene: 'cafe', genre: 'programm',
  title: 'Speisekarte', sub: 'Menü',
  body: [
    'Frühstück: Brötchen mit Butter und Marmelade – 3 Euro',
    'Suppe – 4 Euro',
    'Pizza – 7 Euro',
    'Kaffee – 2 Euro, Tee – 2 Euro',
    'Limonade – 3 Euro, Eis – 3 Euro'
  ],
  questions: [
    { id: 'de-a1-r05.q1', t: 'mc', q: 'Pizza kaç euro?', o: ['3 euro', '4 euro', '7 euro'], a: 2,
      why: { 0: '3 euro kahvaltı, limonata ve dondurma içindir.', 1: '4 euro çorba (*Suppe*) içindir.' },
      e: '*Pizza – 7 Euro.* → *sieben* = 7.' },
    { id: 'de-a1-r05.q2', t: 'gap', q: 'Der Tee kostet ___ Euro.', a: ['2', 'zwei'],
      wrong: { '3': '3 euro limonata ve dondurma. Çay *2* euro.', 'drei': '*drei* (3) limonata ve dondurma. Çay *zwei* (2).' },
      e: '*kosten* = (fiyatı) …olmak: *Der Tee kostet 2 Euro.*' },
    { id: 'de-a1-r05.q3', t: 'mc', q: 'En pahalı şey hangisi?', o: ['Çorba', 'Pizza', 'Dondurma'], a: 1,
      why: { 0: 'Çorba 4 euro; pizza (7) daha pahalı.', 2: 'Dondurma 3 euro; pizza daha pahalı.' },
      e: '*teuer* = pahalı, *billig* = ucuz. Pizza 7 euro ile en pahalıdır.' },
    { id: 'de-a1-r05.q4', t: 'mc', q: 'Arkadaşın soruyor: “Kahvaltıda ne var, kaç euro?” Ona ne dersin?', o: ['Tereyağlı ve reçelli küçük ekmek, 3 euro.', 'Peynirli küçük ekmek, 4 euro.', 'Reçelli pasta, 3 euro.', 'Yumurta ve çay, 2 euro.'], a: 0,
      why: { 1: 'Peynirden söz yok, fiyat da 3 euro.', 2: '*Kuchen* menüde yok; *Brötchen* küçük ekmektir.', 3: 'Yumurta menüde yok; 2 euro sadece kahve ve çay.' },
      e: '*Frühstück: Brötchen mit Butter und Marmelade – 3 Euro.* *mit* = ile (burada: sürülmüş).' },
    { id: 'de-a1-r05.q5', t: 'match', q: 'Eşleştir:', p: [['Frühstück', '3 Euro'], ['Suppe', '4 Euro'], ['Pizza', '7 Euro'], ['Kaffee', '2 Euro']],
      e: 'Fiyat sayıdan sonra *Euro* ile yazılır; “euros” gibi çoğul eki almaz.' }
  ]
});

K.addText('de-a1-r06', {
  level: 'A1', kind: 'read', scene: 'freizeit', genre: 'nachricht',
  title: 'Einladung zum Geburtstag', sub: 'Doğum günü daveti',
  body: [
    'Liebe Anna,',
    'ich habe am Samstag Geburtstag! Kommst du um 18 Uhr zu mir? Wir essen Pizza und Kuchen und wir hören Musik. Meine Adresse: Rosenweg 5. Die Haltestelle ist in der Nähe.',
    'Bis bald, Marco'
  ],
  gloss: { 'Rosenweg': 'Gül Yolu (sokak adı)' },
  questions: [
    { id: 'de-a1-r06.q1', t: 'mc', q: 'Parti ne zaman?', o: ['Cumartesi akşamı saat 18’de', 'Pazar sabahı', 'Cuma günü saat 8’de'], a: 0,
      why: { 1: '*Sonntag* metinde geçmiyor.', 2: '*Freitag* metinde geçmiyor; saat 18 (*achtzehn*), 8 değil.' },
      e: '*am Samstag … um 18 Uhr* = cumartesi günü saat 18’de.' },
    { id: 'de-a1-r06.q2', t: 'gap', q: 'Marco hat am Samstag ___.', a: ['Geburtstag'],
      wrong: { 'Hunger': '*Hunger* = açlık. Doğum günü *Geburtstag*.' },
      e: '*Ich habe Geburtstag.* = Benim doğum günüm. Türkçedeki “doğum günüm var” gibi *haben* kullanılır.' },
    { id: 'de-a1-r06.q3', t: 'mc', q: 'Ne yiyecekler?', o: ['Çorba ve pilav', 'Pizza ve pasta', 'Balık ve patates'], a: 1,
      why: { 0: 'Çorba ve pilav metinde yok.', 2: 'Balık ve patates metinde yok.' },
      e: '*Wir essen Pizza und Kuchen.* → *essen* = yemek.' },
    { id: 'de-a1-r06.q4', t: 'mc', q: 'Arkadaşın Almanca okuyamıyor. Marco ne yazıyor?', o: ['Cumartesi doğum günüm var. Saat 18’de bana gelir misin? Pizza ve pasta yiyeceğiz. Adresim Rosenweg 5.', 'Pazar günü bize gel, çay içeceğiz.', 'Cumartesi sinemaya gidiyoruz, saat 6’da.', 'Doğum günümü kutladığın için teşekkürler.'], a: 0,
      why: { 1: 'Gün ve içecek yanlış; metinde Pazar ve çay yok.', 2: 'Sinemadan söz yok; davet Marco’nun evine.', 3: 'Henüz kutlama olmadı; bu bir davet.' },
      e: 'Sprachmittlung: tarih, saat, yemek ve adres birlikte aktarılır. *Kommst du …?* = “Gelir misin?”' },
    { id: 'de-a1-r06.q5', t: 'gap', q: 'Marco wohnt im ___ 5.', a: ['Rosenweg'],
      wrong: { 'Rosenstraße': 'Metinde *Rosenweg* yazıyor, *Rosenstraße* değil.' },
      e: 'Adres: sokak adı + numara: *Rosenweg 5*. Almancada numara sokak adından **sonra** gelir.' }
  ]
});

K.addText('de-a1-r07', {
  level: 'A1', kind: 'read', scene: 'schule', genre: 'programm',
  title: 'Stundenplan', sub: 'Ders programı',
  body: [
    'Montag: 8 Uhr Deutsch, 9 Uhr Sport',
    'Dienstag: 8 Uhr Musik, 9 Uhr Mathe',
    'Mittwoch: 8 Uhr Deutsch, 9 Uhr Englisch',
    'Donnerstag: kein Unterricht',
    'Freitag: 8 Uhr Sport, 9 Uhr Mathe'
  ],
  gloss: { 'Mathe': 'matematik', 'Englisch': 'İngilizce' },
  questions: [
    { id: 'de-a1-r07.q1', t: 'mc', q: 'Müzik dersi ne zaman?', o: ['Salı günü saat 8’de', 'Salı günü saat 9’da', 'Pazartesi günü saat 8’de'], a: 0,
      why: { 1: 'Saat 9’da salı günü *Mathe* var.', 2: 'Pazartesi saat 8’de *Deutsch* var.' },
      e: '*Dienstag: 8 Uhr Musik.* Salı = *der Dienstag*.' },
    { id: 'de-a1-r07.q2', t: 'gap', q: 'Am ___ ist kein Unterricht.', a: ['Donnerstag'],
      wrong: { 'Mittwoch': 'Çarşamba günü ders var: Almanca ve İngilizce.' },
      e: '*kein Unterricht* = ders yok. *kein* + isim: olumsuzluk (*nicht* değil).' },
    { id: 'de-a1-r07.q3', t: 'mc', q: 'Spor dersi hangi günler?', o: ['Pazartesi ve cuma', 'Salı ve çarşamba', 'Sadece pazartesi'], a: 0,
      why: { 1: 'Salı günü müzik ve matematik, çarşamba günü Almanca ve İngilizce var.', 2: 'Cuma günü de spor (*Sport*) var.' },
      e: '*Sport* iki yerde geçer: *Montag 9 Uhr* ve *Freitag 8 Uhr*.' },
    { id: 'de-a1-r07.q4', t: 'mc', q: 'Kızın soruyor: “Pazartesi ne dersim var?” Ona ne dersin?', o: ['Saat 8’de Almanca, saat 9’da spor.', 'Saat 8’de müzik, saat 9’da matematik.', 'Saat 8’de spor, saat 9’da Almanca.', 'Pazartesi ders yok.'], a: 0,
      why: { 1: 'Bu salı günü programı.', 2: 'Sıra ters: önce *Deutsch* (8), sonra *Sport* (9).', 3: 'Ders olmayan gün perşembe.' },
      e: '*Montag: 8 Uhr Deutsch, 9 Uhr Sport.* Sprachmittlung: gün + saat + ders sırasıyla aktarılır.' },
    { id: 'de-a1-r07.q5', t: 'match', q: 'Gün ve dersi eşleştir:', p: [['Montag 8 Uhr', 'Deutsch'], ['Dienstag 9 Uhr', 'Mathe'], ['Mittwoch 9 Uhr', 'Englisch'], ['Freitag 8 Uhr', 'Sport']],
      e: 'Gün adları büyük yazılır: *der Montag, der Dienstag …*; *um 8 Uhr* = saat 8’de.' }
  ]
});

K.addText('de-a1-r08', {
  level: 'A1', kind: 'read', scene: 'wohnung', genre: 'anzeige',
  title: 'Wohnung', sub: 'Daire ilanı',
  body: [
    'Wohnung: zwei Zimmer, Küche, Bad und Balkon. Die Wohnung ist neu und schön. Die Miete ist 650 Euro. Die Haltestelle ist in der Nähe. Ein Supermarkt ist auch in der Nähe. Telefon: 0221 555 123. Frau Yılmaz'
  ],
  questions: [
    { id: 'de-a1-r08.q1', t: 'mc', q: 'Dairede kaç oda var?', o: ['Bir', 'İki', 'Üç'], a: 1,
      why: { 0: '*ein Zimmer* değil; metinde *zwei Zimmer* var.', 2: '*drei* metinde geçmiyor.' },
      e: '*zwei Zimmer* = iki oda. Mutfak (*Küche*) ve banyo (*Bad*) ayrıca sayılır.' },
    { id: 'de-a1-r08.q2', t: 'gap', q: 'Die Miete ist ___ Euro.', a: ['650'],
      wrong: { '560': 'Sayıları karıştırma: ilanda **650** yazıyor.', '150': 'İlanda 650 yazıyor, 150 değil.' },
      e: '*die Miete* = kira. Fiyat: *650 Euro*.' },
    { id: 'de-a1-r08.q3', t: 'mc', q: 'Yakında ne var?', o: ['Durak', 'Hastane', 'Okul'], a: 0,
      why: { 1: '*Krankenhaus* metinde geçmiyor.', 2: '*Schule* metinde geçmiyor.' },
      e: '*Die Haltestelle ist in der Nähe.* → *in der Nähe* = yakında.' },
    { id: 'de-a1-r08.q4', t: 'mc', q: 'Arkadaşın ev arıyor. İlanı ona nasıl anlatırsın?', o: ['İki odalı, mutfak, banyo ve balkonlu; kira 650 euro; yakında durak var.', 'Üç odalı, bahçeli; kira 560 euro.', 'Tek odalı, balkonsuz; kira 650 euro.', 'İki odalı, ama durak çok uzak.'], a: 0,
      why: { 1: 'Oda sayısı ve kira yanlış; bahçe (*Garten*) yok.', 2: 'Oda iki, balkon da var.', 3: '*in der Nähe* = yakın; *weit* = uzak.' },
      e: 'Sprachmittlung: oda, olanaklar, kira ve konum ayrı ayrı aktarılır.' },
    { id: 'de-a1-r08.q5', t: 'mc', q: 'İlan sahibi kim?', o: ['Frau Yılmaz', 'Herr Yılmaz', 'Doktor Yılmaz'], a: 0,
      why: { 1: '*Herr* = bay; ilanda *Frau* (hanım) yazıyor.', 2: 'Metinde meslek belirtilmemiş.' },
      e: '*Frau* = hanım (evli ya da değil, resmî hitap), *Herr* = bay.' }
  ]
});

K.addText('de-a1-r09', {
  level: 'A1', kind: 'read', scene: 'arbeit', genre: 'formular',
  title: 'Visitenkarte', sub: 'Kartvizit',
  body: [
    'Anna Berg – Ärztin',
    'Praxis: Rosenweg 12, Bonn',
    'Telefon: 0228 123456',
    'Montag bis Freitag: 8 bis 12 Uhr',
    'Termin: bitte anrufen! Samstag und Sonntag: zu.',
    'Wir sprechen Deutsch und Türkisch.',
    'Wir sind gern für Sie da.'
  ],
  gloss: { 'Praxis': 'muayenehane', 'zu': 'kapalı', 'Rosenweg': 'Gül Yolu (sokak adı)', 'Telefon': 'telefon' },
  questions: [
    { id: 'de-a1-r09.q1', t: 'mc', q: 'Anna Berg’in mesleği ne?', o: ['Öğretmen', 'Doktor', 'Aşçı'], a: 1,
      why: { 0: '*Lehrerin* = kadın öğretmen. Kartta *Ärztin* yazıyor.', 2: '*Köchin* = kadın aşçı. Kartta *Ärztin* yazıyor.' },
      e: '*die Ärztin* = kadın doktor, *der Arzt* = erkek doktor. Kadın meslek adı çoğunlukla **-in** ile biter.' },
    { id: 'de-a1-r09.q2', t: 'gap', q: 'Die Praxis ist in ___.', a: ['Bonn'],
      wrong: { 'Berg': '*Berg* soyadıdır, şehir değil.' },
      e: '*in Bonn* = Bonn’da. Şehir adından önce *in* kullanılır.' },
    { id: 'de-a1-r09.q3', t: 'mc', q: 'Muayenehane hangi saatlerde açık?', o: ['Pazartesi–cuma 8–12', 'Her gün 8–12', 'Pazartesi–cuma 12–18'], a: 0,
      why: { 1: 'Cumartesi ve pazar kapalı (*Samstag und Sonntag: zu*).', 2: 'Saatler 8–12, öğleden sonra değil.' },
      e: '*Montag bis Freitag: 8 bis 12 Uhr.* = hafta içi sabah.' },
    { id: 'de-a1-r09.q4', t: 'mc', q: 'Annen doktor randevusu almak istiyor. Karttan ne söylersin?', o: ['Doktor Anna Berg; hafta içi 8–12 arası telefon: 0228 123456.', 'Doktor Anna Berg; cumartesi 8–12 arası gelebilirsin.', 'Doktor Berg erkek; muayenehane Köln’de.', 'Doktor her gün öğleden sonra açık.'], a: 0,
      why: { 1: 'Cumartesi muayenehane kapalı (*zu*).', 2: 'Kartta *Ärztin* (kadın) ve *Bonn* var.', 3: 'Saatler sabah (8–12).' },
      e: 'Sprachmittlung: ad, saat ve telefon numarası aktarılır; numarayı olduğu gibi söyle.' },
    { id: 'de-a1-r09.q5', t: 'match', q: 'Bilgiyi eşleştir:', p: [['Beruf', 'Ärztin'], ['Stadt', 'Bonn'], ['Straße', 'Rosenweg 12'], ['Telefon', '0228 123456']],
      e: '*der Beruf* = meslek, *die Stadt* = şehir, *die Straße* = sokak, *das Telefon* = telefon.' },
    { id: 'de-a1-r09.q6', t: 'mc', q: 'Muayenehanede hangi diller konuşuluyor?', o: ['Almanca ve Türkçe', 'Almanca ve İngilizce', 'Sadece Almanca'], a: 0,
      why: { 1: 'İngilizce metinde geçmiyor; *Türkisch* yazıyor.', 2: '*Deutsch und Türkisch* = iki dil; sadece Almanca değil.' },
      e: '*Wir sprechen Deutsch und Türkisch.* → *und* = ve; *sprechen* = konuşmak (burada “biz”).' }
  ]
});

K.addText('de-a1-r10', {
  level: 'A1', kind: 'read', scene: 'wetter', genre: 'artikel',
  title: 'Das Wetter', sub: 'Hava durumu',
  body: [
    'In Hamburg regnet es heute. Es ist kalt, nur 8 Grad. In München scheint die Sonne. Es ist warm, 15 Grad. Am Wochenende ist es in Berlin sehr kalt: minus 2 Grad. Dort liegt Schnee.'
  ],
  gloss: { 'minus': 'eksi', 'Hamburg': 'şehir adı', 'München': 'Münih', 'Berlin': 'şehir adı' },
  questions: [
    { id: 'de-a1-r10.q1', t: 'mc', q: 'Hamburg’da hava nasıl?', o: ['Güneşli', 'Yağmurlu ve soğuk', 'Karlı'], a: 1,
      why: { 0: 'Güneş Münih’te (*München*).', 2: 'Kar Berlin’de, hafta sonu.' },
      e: '*In Hamburg regnet es.* → *der Regen* / *regnen* = yağmur / yağmur yağmak.' },
    { id: 'de-a1-r10.q2', t: 'gap', q: 'In München scheint die ___.', a: ['Sonne'],
      wrong: { 'Mond': '*der Mond* = ay (gökyüzünde). Metinde güneş var.' },
      e: '*die Sonne scheint* = güneş parlıyor / güneşli.' },
    { id: 'de-a1-r10.q3', t: 'mc', q: 'Hangi şehir bugün sıcak (15 derece)?', o: ['Hamburg', 'München', 'Berlin'], a: 1,
      why: { 0: 'Hamburg’da sadece 8 derece, soğuk.', 2: 'Berlin’de hafta sonu eksi 2 derece.' },
      e: '*In München … Es ist warm, 15 Grad.* *warm* ↔ *kalt*.' },
    { id: 'de-a1-r10.q4', t: 'mc', q: 'Arkadaşın hafta sonu Berlin’e gidiyor. Ona ne dersin?', o: ['Çok soğuk, eksi 2 derece ve kar var.', 'Güneşli ve sıcak, 15 derece.', 'Yağmur yağıyor ama hava ılık.', 'Hava 8 derece, yağmurlu.'], a: 0,
      why: { 1: 'Bu Münih’in havası.', 2: 'Berlin’den söz ederken yağmur yok; kar var.', 3: 'Bu bugünkü Hamburg havası.' },
      e: '*Am Wochenende … in Berlin sehr kalt … Dort liegt Schnee.* *der Schnee* = kar.' },
    { id: 'de-a1-r10.q5', t: 'match', q: 'Şehir ve havayı eşleştir:', p: [['Hamburg', 'Regen'], ['München', 'Sonne'], ['Berlin', 'Schnee']],
      e: '*Regen, Sonne, Schnee* – hava durumunda sık geçen üç isim; üçü de büyük harfle yazılır.' }
  ]
});

K.addText('de-a1-r11', {
  level: 'A1', kind: 'read', scene: 'amt', genre: 'email',
  title: 'E-Mail vom Amt', sub: 'Resmî daireden e-posta',
  body: [
    'Guten Tag Frau Kaya,',
    'Ihr Termin: Montag, 3. März, um 10 Uhr. Bitte bringen Sie Ihren Pass mit. Bitte kommen Sie in Zimmer 12. Bitte kommen Sie nicht zu spät.',
    'Haben Sie eine Frage? Dann rufen Sie uns an.',
    'Freundliche Grüße',
    'Thomas Braun'
  ],
  gloss: { 'Freundliche Grüße': 'saygılarımla' },
  questions: [
    { id: 'de-a1-r11.q1', t: 'mc', q: 'Randevu ne zaman?', o: ['Pazartesi, 3 Mart, saat 10’da', 'Salı, 3 Mart, saat 12’de', 'Pazartesi, 10 Mart, saat 3’te'], a: 0,
      why: { 1: 'Gün *Montag* (pazartesi) ve saat 10; 12 oda numarasıdır.', 2: 'Tarih *3. März*, saat *10 Uhr*; sayıları karıştırma.' },
      e: '*Montag, 3. März, um 10 Uhr.* Tarihte sıra sayısından sonra nokta yazılır: *3.* = üçüncü.' },
    { id: 'de-a1-r11.q2', t: 'gap', q: 'Bitte bringen Sie den ___ mit.', a: ['Pass'],
      wrong: { 'Termin': '*Termin* randevudur; getirilecek şey *Pass* (pasaport).' },
      e: '*mitbringen* = beraberinde getirmek: *Bitte bringen Sie Ihren Pass mit.* *mit* cümle sonuna gider.' },
    { id: 'de-a1-r11.q3', t: 'mc', q: 'Hangi odaya gidilecek?', o: ['10 numaralı odada', '12 numaralı odada', '3 numaralı odada'], a: 1,
      why: { 0: '10 randevu saatidir.', 2: '3 tarihtir (3. Mart).' },
      e: '*Bitte kommen Sie in Zimmer 12.* Oda numarası, saat ve tarih aynı cümlede olabilir; hangisinin ne olduğunu anla.' },
    { id: 'de-a1-r11.q4', t: 'mc', q: 'Annen e-postayı anlamıyor. Ona ne dersin?', o: ['Pazartesi, 3 Mart, saat 10’da randevun var. Pasaportunu getir. 12 numaralı odaya git. Geç kalma.', 'Pazartesi saat 12’de ofise git; pasaport gerekmiyor.', '3 Mart’ta doktora gideceksin.', 'Herr Braun seni arayacak.'], a: 0,
      why: { 1: 'Saat 10, 12 değil; pasaport gerekiyor.', 2: 'Doktordan söz yok; bu bir resmî daire (*Amt*) randevusu.', 3: 'Seni o aramayacak: metinde *Dann rufen Sie uns an* var. Sorun olursa sen onları ararsın.' },
      e: 'Sprachmittlung: zaman, getirilecek belge ve yer – üç bilgi.' },
    { id: 'de-a1-r11.q5', t: 'mc', q: 'E-postayı kim yazıyor?', o: ['Frau Kaya', 'Thomas Braun', 'Frau Braun'], a: 1,
      why: { 0: 'Frau Kaya e-postanın **alıcısı** (Guten Tag Frau Kaya).', 2: 'İmzada *Thomas Braun* yazıyor; Frau Braun değil.' },
      e: 'Başta alıcı, sonda gönderen yazılır: *Frau Kaya* (alıcı), *Thomas Braun* (gönderen, *Freundliche Grüße*’den sonra ayrı satırda).' },
    { id: 'de-a1-r11.q6', t: 'gap', q: 'Bitte kommen Sie nicht zu ___.', a: ['spät'],
      wrong: { 'früh': '*früh* = erken. Metinde “geç kalmayın” deniyor: *nicht zu spät*.', 'spat': 'Ä’yı unutma: *spät* (ä ile yazılır).' },
      e: '*nicht zu spät* = çok geç değil / geç kalmayın. *zu* + sıfat = “fazla …”.' }
  ]
});

K.addText('de-a1-r12', {
  level: 'A1', kind: 'read', scene: 'bahn', genre: 'programm',
  title: 'Fahrplan', sub: 'Otobüs tarifesi',
  body: [
    'Bus 12 nach Bonn – Haltestelle Marktplatz',
    'Montag bis Freitag: 7:15 – 7:45 – 8:15 – 8:45',
    'Samstag: 8:00 – 9:00 – 10:00',
    'Sonntag: kein Bus',
    'Fahrzeit: 20 Minuten',
    'Die Fahrkarte kaufen Sie im Bus.',
    'Am Sonntag fahren Sie bitte mit dem Zug.'
  ],
  gloss: { 'Marktplatz': 'pazar yeri meydanı', 'Fahrzeit': 'yolculuk süresi', 'Fahrkarte': 'bilet' },
  questions: [
    { id: 'de-a1-r12.q1', t: 'mc', q: 'Pazar günü otobüs var mı?', o: ['Evet, saat 8’de', 'Hayır, yok', 'Evet, her saat başı'], a: 1,
      why: { 0: 'Saat 8:00 cumartesi içindir.', 2: 'Her saat başı sadece cumartesi (8, 9, 10).' },
      e: '*Sonntag: kein Bus.* → *kein* + isim = “…yok”.' },
    { id: 'de-a1-r12.q2', t: 'gap', q: 'Am Samstag fährt der erste Bus um ___ Uhr.', a: ['8', 'acht'],
      wrong: { '7': '7:15 hafta içi ilk otobüs. Cumartesi **8**.', 'neun': '*neun* (9) ikinci otobüs. İlk otobüs *acht* (8).' },
      e: '*Samstag: 8:00* = cumartesi ilk otobüs saat 8’de.' },
    { id: 'de-a1-r12.q3', t: 'mc', q: 'Pazartesi ilk otobüs kaçta?', o: ['7:15', '8:15', '8:00'], a: 0,
      why: { 1: '8:15 üçüncü otobüs.', 2: '8:00 sadece cumartesi.' },
      e: '*Montag bis Freitag: 7:15 …* Saat yazılışı: 7:15 = *sieben Uhr fünfzehn* ya da *Viertel nach sieben*.' },
    { id: 'de-a1-r12.q4', t: 'mc', q: 'Arkadaşın cuma sabahı otobüs saatlerini soruyor. Ne dersin?', o: ['Cuma günü otobüs 7:15, 7:45, 8:15 ve 8:45’te kalkıyor.', 'Cuma günü otobüs yok.', 'Cuma günü otobüs sadece 9:00’da kalkıyor.', 'Otobüs her saat başı 8, 9 ve 10’da kalkıyor.'], a: 0,
      why: { 1: 'Cuma hafta içidir (*Montag bis Freitag*); otobüs var.', 2: '9:00 sadece cumartesi saatleri arasında.', 3: '8, 9 ve 10 cumartesi tarifesidir.' },
      e: 'Sprachmittlung: *Montag bis Freitag* cuma dahil: 7:15, 7:45, 8:15, 8:45.' },
    { id: 'de-a1-r12.q5', t: 'match', q: 'Eşleştir:', p: [['Montag bis Freitag', '7:15 – 7:45 – 8:15 – 8:45'], ['Samstag', '8:00 – 9:00 – 10:00'], ['Sonntag', 'kein Bus']],
      e: '*von … bis* ve gün adı: üç farklı sefer düzeni.' },
    { id: 'de-a1-r12.q6', t: 'mc', q: 'Bileti nereden alırsın?', o: ['Otobüste', 'Durakta', 'Postanede'], a: 0,
      why: { 1: 'Durak (*Haltestelle*) bilet yeri olarak geçmiyor.', 2: 'Postaneden söz edilmiyor.' },
      e: '*Die Fahrkarte kaufen Sie im Bus.* → *im Bus* = otobüste; *die Fahrkarte* = bilet.' }
  ]
});

/* ================= HÖRTEXTE ================= */

K.addText('de-a1-h01', {
  level: 'A1', kind: 'listen', scene: 'freizeit', genre: 'gespraech', plays: 2,
  title: 'Guten Morgen', sub: 'Günaydın',
  lines: [
    { s: 'Frau Weber', g: 'f', t: 'Guten Morgen, Herr Kaya! Wie geht es Ihnen?', n: 'Günaydın Kaya Bey! Nasılsınız?' },
    { s: 'Herr Kaya', g: 'm', t: 'Guten Morgen, Frau Weber. Danke, gut. Und Sie?', n: 'Günaydın Weber Hanım. Teşekkürler, iyiyim. Ya siz?' },
    { s: 'Frau Weber', g: 'f', t: 'Auch gut, danke. Das ist meine Tochter Mia.', n: 'Ben de iyiyim, teşekkürler. Bu kızım Mia.' },
    { s: 'Herr Kaya', g: 'm', t: 'Freut mich, Mia!', n: 'Memnun oldum Mia!' }
  ],
  questions: [
    { id: 'de-a1-h01.q1', t: 'mc', q: 'Kaya Bey nasıl?', o: ['İyi', 'Kötü', 'Yorgun'], a: 0,
      why: { 1: '*schlecht* (kötü) geçmiyor.', 2: '*müde* (yorgun) geçmiyor.' },
      e: '*Danke, gut.* = Teşekkürler, iyiyim.' },
    { id: 'de-a1-h01.q2', t: 'gap', q: 'Das ist meine ___ Mia.', a: ['Tochter'],
      wrong: { 'Schwester': 'Kız kardeş değil; kız çocuğu: *Tochter*.', 'Mutter': 'Mia’nın annesi Frau Weber; Mia **kızı**.' },
      e: '*die Tochter* = kız evlat. *meine* (benim) dişil isimle: *meine Tochter*.' },
    { id: 'de-a1-h01.q3', t: 'listen', say: 'Freut mich, Mia!', q: 'Dinle. Hangi cümleyi duydun?', o: ['Freut mich, Mia!', 'Gute Nacht, Mia!', 'Wie geht es Ihnen, Mia?'], a: 0,
      why: { 1: '*Gute Nacht* = iyi geceler, tanışırken söylenmez.', 2: '*Wie geht es Ihnen?* ilk cümlede geçti, bu cümle değil.' },
      e: '*Freut mich!* = memnun oldum (tanışırken). *freuen*: “sevindirmek”: “beni sevindiriyor”.' },
    { id: 'de-a1-h01.q4', t: 'mc', q: 'Mia kim?', o: ['Frau Weber’in kızı', 'Herr Kaya’nın kızı', 'Frau Weber’in kız kardeşi'], a: 0,
      why: { 1: '*meine Tochter* diyen Frau Weber.', 2: '*Schwester* geçmiyor; *Tochter* diyor.' },
      e: '*Das ist meine Tochter Mia.* Frau Weber kendi kızını tanıştırıyor.' }
  ]
});

K.addText('de-a1-h02', {
  level: 'A1', kind: 'listen', scene: 'einkauf', genre: 'durchsage', plays: 2,
  title: 'Durchsage im Supermarkt', sub: 'Süpermarkette anons',
  lines: [
    { s: 'Supermarkt', g: 'f', t: 'Guten Tag! Heute im Supermarkt: Bananen, ein Euro das Kilo. Käse, zwei Euro. Brot, ein Euro fünfzig. Die Kasse zwei ist jetzt auf. Wir schließen um zwanzig Uhr.', n: 'İyi günler! Bugün süpermarkette: muz kilosu bir euro. Peynir iki euro. Ekmek bir euro elli. İki numaralı kasa şimdi açık. Saat yirmide kapatıyoruz.' }
  ],
  gloss: { 'auf': 'açık', 'schließen': 'kapatmak' },
  questions: [
    { id: 'de-a1-h02.q1', t: 'mc', q: 'Muzun kilosu kaç euro?', o: ['Bir euro', 'İki euro', 'Bir euro elli'], a: 0,
      why: { 1: 'İki euro peynirin fiyatı.', 2: '1,50 euro ekmeğin fiyatı.' },
      e: '*Bananen, ein Euro das Kilo.* Peynir *zwei Euro*, ekmek *ein Euro fünfzig*.' },
    { id: 'de-a1-h02.q2', t: 'cloze', q: 'Anonsu tamamla:', text: 'Die Kasse {1} ist jetzt auf. Wir schließen um {2} Uhr.',
      gaps: { 1: { a: ['zwei'], o: ['eins', 'zwei', 'drei'], wrong: { 'eins': '1 numaralı kasa değil, 2 numaralı.', 'drei': '3 numaralı kasa söylenmedi.' } },
              2: { a: ['zwanzig'], o: ['zwölf', 'zwanzig', 'zehn'], wrong: { 'zwölf': '*zwölf* (12) ile *zwanzig* (20) karışır. *zwölf* kısa, ağzı yuvarlak; *zwanzig* [tsvantsih] (sonda “hiç” deki “h” gibi yumuşak hışırtı, “ç” değil).', 'zehn': '*zehn* (10) söylenmedi.' } } },
      e: '*Kasse zwei*, *um zwanzig Uhr* = akşam 8 (20:00).' },
    { id: 'de-a1-h02.q3', t: 'listen', say: 'Wir schließen um zwanzig Uhr.', q: 'Hangi cümleyi duydun?', o: ['Wir schließen um zwanzig Uhr.', 'Wir schließen um zwölf Uhr.', 'Wir öffnen um zwanzig Uhr.'], a: 0,
      why: { 1: '*zwölf* (12) ile *zwanzig* (20) farklı sayılar.', 2: '*öffnen* = açmak; anonsta *schließen* (kapatmak).' },
      e: '*schließen* = kapatmak. “Sch” sesi Türkçedeki “ş” gibi.' },
    { id: 'de-a1-h02.q4', t: 'mc', q: 'Peynir kaç euro?', o: ['İki euro', 'Bir euro', 'Yirmi euro'], a: 0,
      why: { 1: 'Bir euro muzun kilosu.', 2: '*zwanzig* (20) kapanış saatidir, fiyat değil.' },
      e: '*Käse, zwei Euro.* Sayıya dikkat: *zwei* (2) ≠ *zwanzig* (20).' }
  ]
});

K.addText('de-a1-h03', {
  level: 'A1', kind: 'listen', scene: 'arzt', genre: 'anrufbeantworter', plays: 3,
  title: 'Anrufbeantworter', sub: 'Telesekreter',
  lines: [
    { s: 'Praxis', g: 'f', t: 'Hier ist die Praxis von Doktor Berg. Wir sind heute nicht da. Rufen Sie bitte am Montag wieder an. Die Telefonnummer ist null zwei zwei acht, eins zwei drei vier fünf. Auf Wiedersehen!', n: 'Burası Doktor Berg’in muayenehanesi. Bugün yokuz. Lütfen pazartesi tekrar arayın. Telefon numarası sıfır iki iki sekiz, bir iki üç dört beş. Hoşça kalın!' }
  ],
  gloss: { 'Praxis': 'muayenehane', 'wieder': 'tekrar' },
  questions: [
    { id: 'de-a1-h03.q1', t: 'mc', q: 'Muayenehane bugün nasıl?', o: ['Açık', 'Kapalı, kimse yok', 'Sadece sabah açık'], a: 1,
      why: { 0: '*Wir sind heute nicht da* = bugün burada değiliz.', 2: 'Sabahtan söz edilmiyor.' },
      e: '*Wir sind heute nicht da.* = Bugün burada değiliz.' },
    { id: 'de-a1-h03.q2', t: 'mc', q: 'Ne zaman tekrar aramak gerekiyor?', o: ['Pazartesi', 'Salı', 'Cuma'], a: 0,
      why: { 1: '*Dienstag* geçmiyor.', 2: '*Freitag* geçmiyor.' },
      e: '*Rufen Sie bitte am Montag wieder an.* *anrufen* ayrılabilir fiil: *Rufen Sie … an.*' },
    { id: 'de-a1-h03.q3', t: 'listen', say: 'Null zwei zwei acht, eins zwei drei vier fünf.', q: 'Telefon numarasını dinle. Hangisi?', o: ['Null zwei zwei acht, eins zwei drei vier fünf.', 'Null zwei zwei acht, eins zwei drei vier sechs.', 'Null zwei zwei neun, eins zwei drei vier fünf.'], a: 0,
      why: { 1: 'Son rakam *fünf* (5), *sechs* (6) değil.', 2: '4. rakam *acht* (8), *neun* (9) değil.' },
      e: 'Telefon numaraları rakam rakam okunur. *sechs* “zeks”, *sieben* “zi-bın”.' },
    { id: 'de-a1-h03.q4', t: 'gap', q: 'Hier ist die Praxis von ___ Berg.', a: ['Doktor'],
      wrong: { 'Herr': '*Herr* = bay; anonsta *Doktor* var.', 'Lehrer': 'Öğretmen değil, doktor.' },
      e: '*Praxis von Doktor Berg* = Doktor Berg’in muayenehanesi.' }
  ]
});

K.addText('de-a1-h04', {
  level: 'A1', kind: 'listen', scene: 'cafe', genre: 'gespraech', plays: 2,
  title: 'Im Café', sub: 'Kafede',
  lines: [
    { s: 'Kellner', g: 'm', t: 'Guten Tag! Was möchten Sie trinken?', n: 'İyi günler! Ne içmek istersiniz?' },
    { s: 'Mia', g: 'f', t: 'Ich möchte einen Tee, bitte. Mit Zucker.', n: 'Bir çay istiyorum lütfen. Şekerli.' },
    { s: 'Kellner', g: 'm', t: 'Gern. Möchten Sie auch ein Stück Kuchen?', n: 'Memnuniyetle. Bir dilim pasta da ister misiniz?' },
    { s: 'Mia', g: 'f', t: 'Ja, gern. Was kostet das?', n: 'Evet, olur. Kaç para?' },
    { s: 'Kellner', g: 'm', t: 'Zusammen vier Euro.', n: 'Hepsi birlikte dört euro.' }
  ],
  gloss: { 'Zusammen': 'hep birlikte' },
  questions: [
    { id: 'de-a1-h04.q1', t: 'mc', q: 'Mia ne içiyor?', o: ['Kahve', 'Çay', 'Süt'], a: 1,
      why: { 0: '*Kaffee* geçmiyor.', 2: '*Milch* geçmiyor; çay şekerli.' },
      e: '*Ich möchte einen Tee* = bir çay istiyorum. *möchte* + Akkusativ: *einen Tee* (der Tee).' },
    { id: 'de-a1-h04.q2', t: 'mc', q: 'Çayla ne alıyor?', o: ['Küçük ekmek', 'Bir dilim pasta', 'Dondurma'], a: 1,
      why: { 0: '*Brötchen* geçmiyor.', 2: '*Eis* geçmiyor.' },
      e: '*ein Stück Kuchen* = bir dilim pasta. *das Stück* = parça.' },
    { id: 'de-a1-h04.q3', t: 'gap', q: 'Zusammen ___ Euro.', a: ['vier', '4'],
      wrong: { 'Viertel': '*Viertel* = çeyrek (saatte); fiyat değil.', 'vierzig': '*vierzig* = 40. Garson *vier* (4) diyor.' },
      e: '*vier* = 4; *vierzig* = 40; *vierzehn* = 14 – ses sonu farklı.' },
    { id: 'de-a1-h04.q4', t: 'listen', say: 'Ich möchte einen Tee, bitte.', q: 'Mia’nın hangi cümlesini duydun?', o: ['Ich möchte einen Tee, bitte.', 'Ich möchte einen Kaffee, bitte.', 'Ich habe Durst, bitte.'], a: 0,
      why: { 1: '*Kaffee* geçmedi; çay (*Tee*).', 2: '*Ich habe Durst* “susadım” demektir; sipariş değil.' },
      e: '*möchte* [ˈmœçtə]: “ö” dudaklar yuvarlak; *ch*, “hiç” deki “h” gibi yumuşak hışırtı, “ç” değil: [möhte].' }
  ]
});

K.addText('de-a1-h05', {
  level: 'A1', kind: 'listen', scene: 'stadt', genre: 'gespraech', plays: 2,
  title: 'Wo ist der Bahnhof?', sub: 'Gar nerede?',
  lines: [
    { s: 'Tom', g: 'm', t: 'Entschuldigung, wo ist der Bahnhof? Ich bin neu hier.', n: 'Pardon, gar nerede? Burada yeniyim.' },
    { s: 'Frau Braun', g: 'f', t: 'Gehen Sie geradeaus. Dann an der Ampel links. Der Bahnhof ist nicht weit. Zu Fuß zehn Minuten.', n: 'Düz gidin. Sonra trafik ışığında sola. Gar uzak değil. Yürüyerek on dakika.' },
    { s: 'Tom', g: 'm', t: 'Vielen Dank! Auf Wiedersehen!', n: 'Çok teşekkürler! Hoşça kalın!' }
  ],
  gloss: { 'Ampel': 'trafik ışığı' },
  questions: [
    { id: 'de-a1-h05.q1', t: 'mc', q: 'Önce nereye gidilir?', o: ['Sola', 'Sağa', 'Düz'], a: 2,
      why: { 0: 'Sola, ışıkta, **sonra** (*dann*).', 1: '*rechts* geçmiyor.' },
      e: '*Gehen Sie geradeaus.* *geradeaus* = düz. *dann* = sonra, sıra bildirir.' },
    { id: 'de-a1-h05.q2', t: 'gap', q: 'Dann an der Ampel ___.', a: ['links'],
      wrong: { 'rechts': '*rechts* = sağa; kadın *links* diyor.', 'geradeaus': '*geradeaus* = düz; ışıkta sola dönülüyor.' },
      e: '*links* = sol, *rechts* = sağ. *Ampel*’de dönüş.' },
    { id: 'de-a1-h05.q3', t: 'listen', say: 'Der Bahnhof ist nicht weit.', q: 'Hangi cümleyi duydun?', o: ['Der Bahnhof ist nicht weit.', 'Der Bahnhof ist sehr weit.', 'Die Post ist nicht weit.'], a: 0,
      why: { 1: '*sehr weit* = çok uzak; kadın “uzak değil” diyor.', 2: '*die Post* (postane) geçmiyor; gar (*Bahnhof*) var.' },
      e: '*nicht weit* = uzak değil. *nicht* sıfatın önüne gelir.' },
    { id: 'de-a1-h05.q4', t: 'mc', q: 'Gar uzak mı?', o: ['Evet, çok uzak', 'Hayır, uzak değil', 'Bilmiyor'], a: 1,
      why: { 0: '*nicht weit* = uzak değil.', 2: 'Frau Braun yolu biliyor ve anlatıyor.' },
      e: '*Der Bahnhof ist nicht weit.* = Gar uzak değil.' }
  ]
});

K.addText('de-a1-h06', {
  level: 'A1', kind: 'listen', scene: 'arbeit', genre: 'anrufbeantworter', plays: 3,
  title: 'Ihr Termin', sub: 'Randevunuz',
  lines: [
    { s: 'Herr Braun', g: 'm', t: 'Guten Tag, Frau Kaya. Hier spricht Braun. Ihr Termin ist am Dienstag um halb drei. Bitte kommen Sie um Viertel nach zwei. Dann haben Sie Zeit für das Formular. Auf Wiederhören!', n: 'İyi günler Kaya Hanım. Ben Braun. Randevunuz salı günü iki buçukta. Lütfen ikiyi çeyrek geçe gelin. O zaman form için vaktiniz olur. İyi günler.' }
  ],
  questions: [
    { id: 'de-a1-h06.q1', t: 'mc', q: 'Randevu hangi gün?', o: ['Salı', 'Cuma', 'Pazartesi'], a: 0,
      why: { 1: '*Freitag* geçmiyor.', 2: '*Montag* geçmiyor.' },
      e: '*am Dienstag* = salı günü.' },
    { id: 'de-a1-h06.q2', t: 'mc', q: 'Randevu saat kaçta? (“halb drei”)', o: ['2:30', '3:30', '3:00'], a: 0,
      why: { 1: 'Türkçedeki “üç buçuk” gibi düşünme: Almancada *halb drei* kelimesi kelimesine “üçün yarısı”: 3’e yarım saat var = 2:30.', 2: '3:00 *drei Uhr*’dur.' },
      e: '*halb drei* = 2:30. Almanca bir sonraki saate bakar; kelimesi kelimesine “üçün yarısı”, yani 3’e yarım saat var: 2:30. Türkçe “iki buçuk” der.' },
    { id: 'de-a1-h06.q3', t: 'mc', q: 'Kaçta gelinmesi isteniyor?', o: ['2:15', '2:45', '3:15'], a: 0,
      why: { 1: '*Viertel vor drei* = 2:45; metinde geçmiyor.', 2: '*Viertel nach drei* = 3:15; doğru saat *Viertel nach zwei*.' },
      e: '*Viertel nach zwei* = 2:15 (ikiyi çeyrek geçe); *Viertel vor drei* = 2:45 (üçe çeyrek var).' },
    { id: 'de-a1-h06.q4', t: 'listen', say: 'Ihr Termin ist am Dienstag um halb drei.', q: 'Hangi cümleyi duydun?', o: ['Ihr Termin ist am Dienstag um halb drei.', 'Ihr Termin ist am Dienstag um drei Uhr.', 'Ihr Termin ist am Donnerstag um halb drei.'], a: 0,
      why: { 1: '*halb* var; tam saat değil.', 2: '*Dienstag* ile *Donnerstag* karışır: *Dienstag* “dins-tak”, *Donnerstag* “donırs-tak”.' },
      e: '*Dienstag* (salı) ve *Donnerstag* (perşembe) – ilk hecelere dikkat.' }
  ]
});

K.addText('de-a1-h07', {
  level: 'A1', kind: 'listen', scene: 'wohnung', genre: 'interview', plays: 2,
  title: 'Meine Familie', sub: 'Ailem',
  lines: [
    { s: 'Elif', g: 'f', t: 'Das ist meine Familie. Mein Vater heißt Murat und meine Mutter heißt Selma. Ich habe einen Bruder und zwei Schwestern. Mein Bruder ist sechzehn. Meine Oma wohnt auch hier.', n: 'Bu benim ailem. Babamın adı Murat, annemin adı Selma. Bir erkek, iki kız kardeşim var. Erkek kardeşim on altı yaşında. Anneannem de burada yaşıyor.' }
  ],
  questions: [
    { id: 'de-a1-h07.q1', t: 'mc', q: 'Elif’in kaç kardeşi var?', o: ['İki', 'Üç', 'Bir'], a: 1,
      why: { 0: 'İki sadece kız kardeşlerin sayısı; bir erkek kardeş de var.', 2: 'Bir sadece erkek kardeşlerin sayısı.' },
      e: '*einen Bruder und zwei Schwestern* = 1 + 2 = 3 kardeş. *die Geschwister* = kardeşler.' },
    { id: 'de-a1-h07.q2', t: 'cloze', q: 'Tamamla:', text: 'Mein Vater heißt {1} und meine Mutter heißt {2}.',
      gaps: { 1: { a: ['Murat'], o: ['Murat', 'Selma', 'Elif'], wrong: { 'Selma': 'Selma annenin adı.', 'Elif': 'Elif konuşan kişi.' } },
              2: { a: ['Selma'], o: ['Murat', 'Selma', 'Elif'], wrong: { 'Murat': 'Murat babanın adı.', 'Elif': 'Elif konuşan kişi.' } } },
      e: '*heißen* = adı … olmak. *mein Vater* (eril), *meine Mutter* (dişil).' },
    { id: 'de-a1-h07.q3', t: 'listen', say: 'Mein Bruder ist sechzehn.', q: 'Hangi cümleyi duydun?', o: ['Mein Bruder ist sechzehn.', 'Mein Bruder ist sechzig.', 'Mein Bruder ist siebzehn.'], a: 0,
      why: { 1: '*sechzig* (60) ile *sechzehn* (16) karışır: *-zehn* “tsen”, *-zig* [tsih] (sonda “hiç” deki “h” gibi yumuşak hışırtı, “ç” değil).', 2: '*siebzehn* = 17; metinde *sechzehn* = 16.' },
      e: '*sechzehn* = 16, *sechzig* = 60. 13–19 arası sayılar *-zehn* ile biter, 20, 30 … *-zig* ile.' },
    { id: 'de-a1-h07.q4', t: 'mc', q: 'Büyükanne nerede yaşıyor?', o: ['Başka şehirde', 'Onlarla (burada)', 'Okulda'], a: 1,
      why: { 0: 'Başka şehirden söz edilmiyor; *hier* = burada.', 2: 'Okuldan söz edilmiyor.' },
      e: '*Meine Oma wohnt auch hier.* = Anneannem de burada oturuyor.' }
  ]
});

K.addText('de-a1-h08', {
  level: 'A1', kind: 'listen', scene: 'wetter', genre: 'radio', plays: 2,
  title: 'Das Wetter heute', sub: 'Bugünün havası',
  lines: [
    { s: 'Radio', g: 'm', t: 'Das Wetter heute: Am Morgen regnet es. Am Mittag scheint die Sonne. Am Abend ist es kalt, nur fünf Grad. Morgen ist es warm. Das ist schön!', n: 'Bugünkü hava durumu: Sabah yağmur yağıyor. Öğlen güneş açıyor. Akşam hava soğuk, sadece beş derece. Yarın hava ılık. Ne güzel!' }
  ],
  questions: [
    { id: 'de-a1-h08.q1', t: 'mc', q: 'Sabah hava nasıl?', o: ['Yağmurlu', 'Güneşli', 'Karlı'], a: 0,
      why: { 1: 'Güneşli olan öğle.', 2: '*Schnee* geçmiyor.' },
      e: '*Am Morgen regnet es.* *am Morgen* = sabahleyin.' },
    { id: 'de-a1-h08.q2', t: 'cloze', q: 'Tamamla:', text: 'Am Mittag scheint die {1}. Am Abend ist es {2}.',
      gaps: { 1: { a: ['Sonne'], o: ['Sonne', 'Regen', 'Mond'], wrong: { 'Regen': 'Yağmur sabah.', 'Mond': 'Ay akşama ait olurdu; metinde güneş.' } },
              2: { a: ['kalt'], o: ['kalt', 'warm', 'neu'], wrong: { 'warm': 'Ilık olan yarın.', 'neu': 'Anlamsız: hava “yeni” olmaz.' } } },
      e: '*Mittag* → *Sonne*, *Abend* → *kalt*.' },
    { id: 'de-a1-h08.q3', t: 'listen', say: 'Am Abend ist es kalt.', q: 'Hangi cümleyi duydun?', o: ['Am Abend ist es kalt.', 'Am Morgen ist es kalt.', 'Am Abend ist es warm.'], a: 0,
      why: { 1: 'Sabah yağmur var; soğuk akşam.', 2: '*warm* = sıcak/ılık; yarın için.' },
      e: '*kalt* [kalt] ↔ *warm* [varm]. “w” Almancada “v” gibi okunur.' },
    { id: 'de-a1-h08.q4', t: 'mc', q: 'Yarın hava nasıl?', o: ['Soğuk', 'Ilık', 'Karlı'], a: 1,
      why: { 0: 'Soğuk olan bu akşam.', 2: 'Kardan söz edilmiyor.' },
      e: '*Morgen ist es warm.* *morgen* = yarın (ama *der Morgen* = sabah).' }
  ]
});

K.addText('de-a1-h09', {
  level: 'A1', kind: 'listen', scene: 'einkauf', genre: 'gespraech', plays: 2,
  title: 'Eine Jacke kaufen', sub: 'Mont almak',
  lines: [
    { s: 'Mia', g: 'f', t: 'Guten Tag. Ich suche eine Jacke in Blau.', n: 'İyi günler. Mavi bir mont arıyorum.' },
    { s: 'Verkäufer', g: 'm', t: 'Hier, bitte. Die Jacke ist neu und schön. Sie kostet sechzig Euro.', n: 'Buyurun. Mont yeni ve güzel. Altmış euro.' },
    { s: 'Mia', g: 'f', t: 'Das ist zu teuer. Danke, tschüss!', n: 'Bu çok pahalı. Teşekkürler, hoşça kalın!' }
  ],
  questions: [
    { id: 'de-a1-h09.q1', t: 'mc', q: 'Mia hangi renk mont arıyor?', o: ['Kırmızı', 'Mavi', 'Siyah'], a: 1,
      why: { 0: '*Rot* geçmiyor.', 2: '*Schwarz* geçmiyor.' },
      e: '*in Blau*: renk burada isim, o yüzden büyük yazılır. Sıfat olarak küçük: *eine blaue Jacke*.' },
    { id: 'de-a1-h09.q2', t: 'gap', q: 'Die Jacke kostet ___ Euro.', a: ['sechzig', '60'],
      wrong: { 'sechzehn': '*sechzehn* = 16; fiyat 60.', 'siebzig': '*siebzig* = 70; fiyat 60.' },
      e: '*sechzig* = 60.' },
    { id: 'de-a1-h09.q3', t: 'mc', q: 'Mia montu alıyor mu?', o: ['Evet', 'Hayır, çok pahalı buluyor', 'Hayır, rengi yanlış'], a: 1,
      why: { 0: '“Hoşça kalın” diyerek ayrılıyor.', 2: 'Renkten şikayet etmiyor; fiyattan.' },
      e: '*Das ist zu teuer.* = Bu çok pahalı. *zu* + sıfat = “fazla, çok”.' },
    { id: 'de-a1-h09.q4', t: 'listen', say: 'Das ist zu teuer.', q: 'Hangi cümleyi duydun?', o: ['Das ist zu teuer.', 'Das ist sehr schön.', 'Das ist zu klein.'], a: 0,
      why: { 1: '*schön* = güzel; Mia beğenmiyor değil, pahalı buluyor.', 2: '*klein* = küçük; beden değil, fiyat sorunu.' },
      e: '*teuer* [toyır]: “eu” = “oy” gibi okunur. *zu* = “çok” (olumsuz anlamda).' }
  ]
});

K.addText('de-a1-h10', {
  level: 'A1', kind: 'listen', scene: 'arzt', genre: 'gespraech', plays: 2,
  title: 'Beim Arzt', sub: 'Doktorda',
  lines: [
    { s: 'Ärztin', g: 'f', t: 'Guten Tag, Herr Demir. Was haben Sie?', n: 'İyi günler Demir Bey. Neyiniz var?' },
    { s: 'Herr Demir', g: 'm', t: 'Ich habe Bauchschmerzen und bin müde.', n: 'Karnım ağrıyor ve yorgunum.' },
    { s: 'Ärztin', g: 'f', t: 'Das ist nicht schlimm. Nehmen Sie diese Medizin. Trinken Sie viel Wasser. Kommen Sie am Freitag wieder.', n: 'Ciddi değil. Bu ilacı alın. Çok su için. Cuma günü tekrar gelin.' }
  ],
  gloss: { 'Medizin': 'ilaç', 'wieder': 'tekrar', 'schlimm': 'kötü, ciddi' },
  questions: [
    { id: 'de-a1-h10.q1', t: 'mc', q: 'Bay Demir’in şikayeti ne?', o: ['Diş ağrısı', 'Karın ağrısı ve yorgunluk', 'Baş ağrısı'], a: 1,
      why: { 0: '*Zahnschmerzen* geçmiyor; karın (*Bauch*) ağrıyor.', 2: '*Kopf* geçmiyor.' },
      e: '*die Bauchschmerzen* = karın ağrısı (*der Bauch* + *der Schmerz*). *müde* = yorgun.' },
    { id: 'de-a1-h10.q2', t: 'cloze', q: 'Doktorun tavsiyesi:', text: 'Trinken Sie viel {1}. Kommen Sie am {2} wieder.',
      gaps: { 1: { a: ['Wasser'], o: ['Wasser', 'Kaffee', 'Milch'], wrong: { 'Kaffee': 'Kahve önerilmiyor; su.', 'Milch': 'Süt değil, su.' } },
              2: { a: ['Freitag'], o: ['Freitag', 'Samstag', 'Montag'], wrong: { 'Samstag': 'Cumartesi değil, cuma.', 'Montag': 'Pazartesi değil, cuma.' } } },
      e: '*Wasser trinken*, *am Freitag wiederkommen*.' },
    { id: 'de-a1-h10.q3', t: 'listen', say: 'Das ist nicht schlimm.', q: 'Hangi cümleyi duydun?', o: ['Das ist nicht schlimm.', 'Das ist sehr schlimm.', 'Das ist nicht schön.'], a: 0,
      why: { 1: '*sehr schlimm* = çok kötü; doktor rahatlatıyor.', 2: '*schön* = güzel; burada söylenen *schlimm*.' },
      e: '*nicht schlimm* = ciddi değil, önemli değil. *schl-* “şl” gibi okunur.' },
    { id: 'de-a1-h10.q4', t: 'mc', q: 'Doktor ne veriyor?', o: ['Medizin (ilaç)', 'Bir pasaport', 'Bir randevu kartı'], a: 0,
      why: { 1: '*Pass* geçmiyor.', 2: 'Randevu kartı geçmiyor; sadece cumayı söylüyor.' },
      e: '*Nehmen Sie diese Medizin.* = Bu ilacı alın. *die Medizin* = ilaç; *nehmen* = almak.' }
  ]
});

})(window.KOPRU);
