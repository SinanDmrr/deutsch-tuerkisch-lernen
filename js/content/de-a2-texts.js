/* Deutsch A2 – Lesetexte (Erklärungen/Fragen auf Türkisch)
 * Paket 3: de-a2-r01 (Hausordnung, Szenario „wohnung“), de-a2-r02 (Praxis-E-Mail, Szenario „arzt“)
 * Fragen-IDs '<textId>.q<n>' sind fest und werden nie wiederverwendet.
 */
(function (K) {

K.addText('de-a2-r01', {
  level: 'A2', kind: 'read', scene: 'wohnung', genre: 'hinweis',
  title: 'Hausordnung', sub: 'Apartman kuralları',
  body: [
    'Liebe Nachbarn,',
    'bitte stellen Sie Fahrräder in den Keller. Im Treppenhaus dürfen keine Schuhe stehen. Die Mülltonnen stehen hinter dem Haus. Bitte werfen Sie den Müll nur bis 20 Uhr in die Tonnen.',
    'Von 13 bis 15 Uhr und ab 22 Uhr ist Ruhezeit. Am Sonntag bitte keine laute Musik. Die Waschmaschinen im Keller kann man von Montag bis Samstag benutzen, von 8 bis 20 Uhr.',
    'Am 17. März kommt der Hausmeister in jede Wohnung und prüft die Heizung. Bitte seien Sie um 9 Uhr zu Hause. Vielen Dank!'
  ],
  gloss: { 'Keller': 'bodrum katı', 'Müll': 'çöp', 'werfen': 'atmak', 'Waschmaschinen': 'çamaşır makineleri', 'prüft': 'kontrol eder (prüfen)', 'Treppenhaus': 'merdiven boşluğu', 'Mülltonnen': 'çöp konteynerleri', 'Ruhezeit': 'sessizlik saati', 'Hausmeister': 'bina görevlisi', 'Heizung': 'kalorifer' },
  questions: [
    { id: 'de-a2-r01.q1', t: 'mc', q: 'Bisikletler nereye konmalı?', o: ['Merdiven boşluğuna', 'Bodrum katına', 'Evin arkasındaki çöp konteynerlerinin yanına', 'Daireye'], a: 1,
      why: { 0: 'Metinde merdiven boşluğunda (*Treppenhaus*) **ayakkabıların** durmaması isteniyor, bisikletlerden değil.', 2: '*hinter dem Haus* çöp konteynerlerinin yeridir, bisikletlerin değil.', 3: 'Metinde “Wohnung” bisiklet için geçmez; *in den Keller* denmiş.' },
      e: '*Bitte stellen Sie Fahrräder **in den Keller**.* → *der Keller* = bodrum. *in den* + Akkusativ: nereye? (wohin?)' },
    { id: 'de-a2-r01.q2', t: 'gap', q: 'Die Mülltonnen stehen ___ dem Haus.', a: ['hinter'],
      wrong: { 'vor': 'Metinde *hinter dem Haus* (evin **arkasında**) yazıyor; *vor* “önünde” demektir.', 'in': '*in dem Haus* = evin içinde. Konteynerler dışarıda, evin arkasında: **hinter**.' },
      e: '*stehen* → wo? → Dativ: *hinter dem Haus* = evin arkasında.' },
    { id: 'de-a2-r01.q3', t: 'gap', q: 'Es ist ruhig: von 13 bis 15 Uhr und ___ 22 Uhr.', a: ['ab', 'nach'],
      wrong: { 'um': '*um 22 Uhr* tek bir saat bildirir; “22’den itibaren” (süre) için **ab**.', 'seit': '*seit* geçmişten beri devam eden süre içindir. Sessizlik saati her akşam 22’den **itibaren** başlıyor: ab.' },
      e: '*ab 22 Uhr* = saat 22’den itibaren (metinde böyle; *nach 22 Uhr* = 22’den sonra da anlam olarak uyar). Metinde: *ab 22 Uhr ist Ruhezeit.*' },
    { id: 'de-a2-r01.q4', t: 'mc', q: 'Annen ilanı anlamıyor. Ona ne söylersin? Görevli ne zaman gelecek ve ne yapacak?', o: ['17 Mart’ta saat 9’da evde olmalı; görevli her daireye gelip kaloriferi kontrol edecek.', '17 Mart’ta saat 9’a kadar çöpü konteynere atmalı.', 'Pazar günü saat 9’da görevli gelecek ve çamaşır makinesini kontrol edecek.', 'Her gün saat 9’da görevli gelip bodrumu temizleyecek.'], a: 0,
      why: { 1: 'Çöp için saat sınırı **20:00**’dir; 17 Mart ve saat 9 görevlinin ziyareti içindir.', 2: 'Pazar günü sadece **gürültü yasağı** var; görevli **17 Mart**’ta geliyor ve kaloriferi kontrol ediyor.', 3: 'Görevli bir kez geliyor (**am 17. März**), her gün değil; amaç temizlik değil, *Heizung*.' },
      e: '*Am 17. März kommt der Hausmeister in jede Wohnung und prüft die Heizung. Bitte seien Sie um 9 Uhr zu Hause.* Sprachmittlung: tarih, saat, yapılacak iş ve “evde ol” rica ayrı ayrı aktarılır.' },
    { id: 'de-a2-r01.q5', t: 'match', q: 'Zamanı anlamıyla eşleştir:', p: [['bis 20 Uhr', 'Müll in die Tonnen werfen'], ['von 8 bis 20 Uhr', 'Waschmaschinen im Keller benutzen'], ['am Sonntag', 'keine laute Musik'], ['um 9 Uhr', 'zu Hause sein']],
      e: '*bis* = -e kadar, *von … bis* = aralık, *am* + gün, *um* + saat. Her zaman ifadesi metinde farklı bir kurala bağlı.' }
  ]
});

K.addText('de-a2-r02', {
  level: 'A2', kind: 'read', scene: 'arzt', genre: 'email',
  title: 'Ihr Termin am Dienstag', sub: 'Salı günkü randevunuz',
  body: [
    'Sehr geehrte Frau Kaya,',
    'Dr. Berger ist seit gestern krank. Deshalb müssen wir Ihren Termin am Dienstag, dem 24. November, um 10 Uhr leider absagen. Wir entschuldigen uns bei Ihnen.',
    'Sie können am Donnerstag, dem 26. November, um 8.30 Uhr kommen oder am Freitag, dem 27. November, um 11 Uhr. Bitte melden Sie sich bis Mittwoch telefonisch. Sie erreichen uns von 8 bis 12 Uhr.',
    'Mit freundlichen Grüßen',
    'Praxis Dr. Berger'
  ],
  gloss: { 'absagen': 'iptal etmek', 'melden': 'haber vermek', 'telefonisch': 'telefonla', 'erreichen': 'ulaşmak' },
  questions: [
    { id: 'de-a2-r02.q1', t: 'mc', q: 'Frau Kaya randevusunu neden değiştirmek zorunda?', o: ['Doktor Berger hasta.', 'Frau Kaya hasta.', 'Muayenehane tatilde.', 'Doktor Berger’in başka randevusu var.'], a: 0,
      why: { 1: 'Metinde hasta olan **doktor**: *Dr. Berger ist krank*, Frau Kaya değil.', 2: 'Tatilden söz edilmiyor; sebep doktorun hastalığı.', 3: 'Başka randevudan söz edilmiyor; sebep: *krank*.' },
      e: '*Dr. Berger ist seit gestern krank. Deshalb …* → *deshalb* = bu yüzden.' },
    { id: 'de-a2-r02.q2', t: 'gap', q: 'Der alte Termin ist am Dienstag, ___ 10 Uhr.', a: ['um'],
      wrong: { 'am': '*am* gün/tarih içindir (*am Dienstag*). Saat için **um**.', 'im': '*im* ay ve mevsim içindir.', 'in': '*in zehn Minuten* = on dakika sonra; saat için **um** kullanılır.' },
      e: 'Saat → **um**: *um 10 Uhr*. Gün → **am**: *am Dienstag*.' },
    { id: 'de-a2-r02.q3', t: 'gap', q: 'Dr. Berger ist ___ gestern krank.', a: ['seit'],
      wrong: { 'vor': '*vorgestern* = önceki gün (bitmiş bir an). hastalık hâlâ sürüyor → **seit** gestern.', 'ab': '*ab gestern* geçmiş için kullanılmaz; “dünden beri” = **seit** gestern.' },
      e: '“Dünden beri hasta” = hâlâ süren durum → **seit** + Präsens (*ist … krank*).' },
    { id: 'de-a2-r02.q4', t: 'mc', q: 'Annen e-postayı anlamıyor. Ona ne yapması gerektiğini nasıl anlatırsın?', o: ['Salı günkü randevu olmuyor. Perşembe 26 Kasım’da 8.30’da veya Cuma 27 Kasım’da 11’de gelebilir; Çarşamba gününe kadar telefonla haber vermeli.', 'Salı günü saat 10’da yine gelmeli; haber vermesi gerekmiyor.', 'Perşembe 26 Kasım’a kadar muayenehaneyi aramalı, yeni randevu Cuma 11’de.', 'Doktor iyileşti; Salı 24 Kasım’da saat 8.30’da gelebilir.'], a: 0,
      why: { 1: 'Salı randevusu **iptal**: *absagen*. Ayrıca arayıp haber vermek isteniyor.', 2: 'Arama süresi **Çarşamba**’ya kadar (*bis Mittwoch*), Perşembe’ye değil; iki yeni seçenek var, tek değil.', 3: 'Doktor *seit gestern krank*, iyileşmedi; yeni saatler Perşembe ve Cuma.' },
      e: 'Sprachmittlung: eski randevu iptal, **iki** yeni seçenek (Do 8.30, Fr 11) ve **bis Mittwoch** telefon etme isteği. *sich melden* = haber vermek.' },
    { id: 'de-a2-r02.q5', t: 'match', q: 'Eşleştir:', p: [['Dienstag, 24. November', 'alter Termin um 10 Uhr'], ['Donnerstag, 26. November', 'neuer Termin um 8.30 Uhr'], ['Freitag, 27. November', 'neuer Termin um 11 Uhr'], ['bis Mittwoch', 'in der Praxis anrufen']],
      e: 'Tarih → *am* + gün, saat → *um*, “… e kadar” → *bis*. Doğru eşleştirme için metindeki sıraya bak.' }
  ]
});

})(window.KOPRU);
