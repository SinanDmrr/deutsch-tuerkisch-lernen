/* Deutsch A2 – Lesetexte (Erklärungen/Fragen auf Türkisch)
 * Lesetexte r01–r12, Hörtexte h01–h10. Paket 3: de-a2-r01 (Hausordnung, Szenario „wohnung“), de-a2-r02 (Praxis-E-Mail, Szenario „arzt“)
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

K.addText('de-a2-r03', {
  level: 'A2', kind: 'read', scene: 'arbeit', genre: 'nachricht',
  title: 'Schichttausch', sub: 'Vardiya değişimi',
  body: [
    'Hallo Emre,',
    'ich bin seit gestern krank und habe Fieber. Der Arzt sagt: Ich muss bis Montag zu Hause bleiben. Deshalb kann ich am Samstag, dem 21. November, nicht arbeiten.',
    'Kannst du bitte meine Frühschicht übernehmen? Sie ist von 6 bis 14 Uhr. Dafür übernehme ich am Mittwoch, dem 25. November, deine Spätschicht. Sie ist länger als die Frühschicht: von 14 bis 23 Uhr.',
    'Ist das für dich in Ordnung? Bitte antworte mir bis heute Abend. Die Krankmeldung schicke ich morgen an den Chef. Vielen Dank!',
    'Jonas'
  ],
  gloss: { 'Fieber': 'ateş (hastalık)', 'Schicht': 'vardiya', 'Frühschicht': 'sabah vardiyası', 'Spätschicht': 'akşam vardiyası', 'übernehmen': 'devralmak', 'Krankmeldung': 'hastalık bildirimi, rapor', 'Deshalb': 'bu yüzden', 'in Ordnung': 'uygun, tamam', 'Dafür': 'karşılığında' },
  questions: [
    { id: 'de-a2-r03.q1', t: 'mc', q: 'Jonas cumartesi günü neden çalışamıyor?', o: ['Hasta, ateşi var.', 'İzinli.', 'Doktor randevusu var.', 'Patronla görüşmesi var.'], a: 0,
      why: { 1: 'İzinden söz edilmiyor; sebep hastalık: *Ich bin krank und habe Fieber.*', 2: 'Doktor yalnızca “pazartesiye kadar evde kal” diyor; randevudan söz yok.', 3: 'Patron yalnızca raporu alacak; görüşme yok.' },
      e: '*Ich bin seit gestern krank … Deshalb kann ich … nicht arbeiten.* → *deshalb* = bu yüzden.' },
    { id: 'de-a2-r03.q2', t: 'gap', q: 'Die Spätschicht ist ___ als die Frühschicht. (lang)', a: ['länger'],
      wrong: { 'langer': '*lang* Umlaut alır: *lang → **lä**nger*.', 'mehr lang': 'Almancada “daha” için sıfatın sonuna **-er** eklenir: *länger*.' },
      e: '**lang → länger → am längsten**. *länger **als** …* = -den daha uzun.' },
    { id: 'de-a2-r03.q3', t: 'gap', q: 'Ich muss ___ Montag zu Hause bleiben. (pazartesiye kadar)', a: ['bis'],
      wrong: { 'ab': '*ab Montag* = pazartesiden **itibaren**. Doktor pazartesiye **kadar** diyor: bis.', 'seit': '*seit* geçmişten beri süren bir şeyi anlatır (*seit gestern*). Burada gelecekteki bitiş: **bis**.' },
      e: '**bis** + gün = -e kadar: *bis Montag*.' },
    { id: 'de-a2-r03.q4', t: 'mc', q: 'Sen Emre’sin. Eşin Almanca bilmiyor. Mesajı ona nasıl özetlersin?', o: ['Jonas hasta. Cumartesi 6–14 sabah vardiyasını ben devralayım istiyor. Karşılığında 25 Kasım Çarşamba günü benim 14–23 akşam vardiyamı o alacak. Bu akşama kadar cevap bekliyor.', 'Jonas hasta. Cumartesi benim yerime çalışacak; perşembe günü ben onun vardiyasına geçeyim istiyor.', 'Jonas iyileşti. Pazartesiden itibaren çalışabilir; raporu bana göndereceğini söylüyor.', 'Jonas hasta. Cumartesi 14–23 akşam vardiyasını ben alayım istiyor; cevabı yarına kadar bekliyor.'], a: 0,
      why: { 1: 'Tersi: Jonas **hasta**, cumartesi çalışamaz. Karşılık günü **çarşamba**, perşembe değil.', 2: 'Jonas **hâlâ hasta** (pazartesiye kadar evde); raporu **patrona** gönderecek, Emre’ye değil.', 3: 'Cumartesi **sabah** vardiyası (6–14). 14–23 akşam vardiyası **Çarşamba** günü Emre’nin; onu Jonas alacak. Cevap **bu akşama** kadar.' },
      e: 'Sprachmittlung: kim hasta, hangi vardiya (6–14), karşılık (Çarşamba, 14–23) ve cevap süresi (**bis heute Abend**) aktarılır.' },
    { id: 'de-a2-r03.q5', t: 'match', q: 'Eşleştir:', p: [['Samstag, 21. November', 'Frühschicht von 6 bis 14 Uhr'], ['Mittwoch, 25. November', 'Spätschicht von 14 bis 23 Uhr'], ['bis Montag', 'zu Hause bleiben'], ['bis heute Abend', 'Jonas antworten'], ['morgen', 'Krankmeldung an den Chef']],
      e: '*am* + gün/tarih, *bis* = -e kadar, *morgen* = yarın. Her zaman ifadesi metinde ayrı bir göreve bağlı.' }
  ]
});

K.addText('de-a2-r04', {
  level: 'A2', kind: 'read', scene: 'schule', genre: 'email',
  title: 'Ausflug in den Wald', sub: 'Ormana gezi',
  body: [
    'Liebe Eltern,',
    'am Donnerstag, dem 10. Dezember, macht unsere Klasse einen Ausflug in den Wald. Wir fahren um 8.30 Uhr mit dem Bus und sind um 13 Uhr wieder an der Schule. Bitte geben Sie Ihrem Kind warme Kleidung, feste Schuhe und eine Trinkflasche mit. Das Frühstück bringt jedes Kind selbst mit. Der Bus kostet 4 Euro. Geben Sie das Geld bitte bis Freitag, den 27. November, bei mir ab.',
    'Möchten Sie mitfahren? Dann schreiben Sie uns bitte auch bis zum 27. November. Am Dienstag, dem 1. Dezember, ist um 19 Uhr Elternabend im Klassenzimmer. Dort erklären wir alles noch einmal.',
    'Mit freundlichen Grüßen',
    'Frau Roth, Klassenlehrerin'
  ],
  gloss: { 'Ausflug': 'gezi', 'Wald': 'orman', 'Klasse': 'sınıf', 'Klassenzimmer': 'sınıf odası', 'Klassenlehrerin': 'sınıf öğretmeni (kadın)', 'Trinkflasche': 'su matarası', 'fest': 'sağlam', 'selbst': 'kendisi', 'mitfahren': 'birlikte gelmek (araçla)', 'Elternabend': 'veli toplantısı', 'bei mir ab': 'bana teslim edin (abgeben = teslim etmek)' },
  questions: [
    { id: 'de-a2-r04.q1', t: 'mc', q: 'Sınıf gezisi ne zaman?', o: ['10 Aralık Perşembe', '1 Aralık Salı', '27 Kasım Cuma', '10 Aralık Pazartesi'], a: 0,
      why: { 1: '1 Aralık Salı günü **veli toplantısı** (*Elternabend*) var, gezi değil.', 2: '27 Kasım Cuma **son tarih**: para ve cevap o güne kadar verilmeli.', 3: 'Metinde gün **Perşembe**: *am Donnerstag, dem 10. Dezember*.' },
      e: '*Am Donnerstag, dem 10. Dezember, macht unsere Klasse einen Ausflug.* Gün: **am**, tarih: *dem 10.*' },
    { id: 'de-a2-r04.q2', t: 'gap', q: 'Wir fahren ___ dem Bus in den Wald.', a: ['mit'],
      wrong: { 'in': '*in dem Bus* otobüsün **içinde** demektir (yer). Taşıt aracı için **mit** + Dativ: *mit dem Bus*.', 'zu': '*zu* + Dativ gidilen yeri belirtir (*zur Schule*). Taşıt için **mit**.' },
      e: '“Otobüsle” = **mit dem Bus**: **mit** her zaman **Dativ** ister.' },
    { id: 'de-a2-r04.q3', t: 'gap', q: 'Der Elternabend ist ___ Dienstag um 19 Uhr.', a: ['am'],
      wrong: { 'um': '*um* saat içindir (*um 19 Uhr*). Gün için **am**.', 'im': '*im* ay ve mevsim içindir (*im Dezember*). Gün için **am**.' },
      e: 'Gün → **am** (*am Dienstag*), saat → **um** (*um 19 Uhr*).' },
    { id: 'de-a2-r04.q4', t: 'mc', q: 'Eşin Almanca bilmiyor. Okulun mektubunu ona nasıl anlatırsın?', o: ['Sınıf 10 Aralık Perşembe günü ormana gidiyor. Çocuğa sıcak giysi, sağlam ayakkabı ve su matarası vermeliyiz; kahvaltıyı çocuk kendisi getiriyor. Otobüs 4 euro; parayı 27 Kasım’a kadar öğretmene vermeliyiz. 1 Aralık Salı akşamı saat 19’da veli toplantısı var.', 'Sınıf 1 Aralık Salı günü ormana gidiyor. Otobüs ücretsiz; okul kahvaltıyı veriyor. Veli toplantısı 10 Aralık Perşembe günü.', 'Gezi 10 Aralık’ta. Parayı gezi gününde otobüste vermeliyiz; veli toplantısı yok, sadece mektubu imzalamalıyız.', 'Sınıf 10 Aralık Perşembe günü ormana gidiyor. Çocuk her şeyi okuldan alacak; biz sadece 27 Kasım’da öğretmeni aramalıyız.'], a: 0,
      why: { 1: 'Tarihler karışmış: gezi **10 Aralık**, veli toplantısı **1 Aralık**. Otobüs **4 euro**, kahvaltıyı çocuk **getiriyor**.', 2: 'Para **27 Kasım’a kadar** öğretmene verilir; veli toplantısı **var** (1 Aralık, 19:00). İmza istenmiyor.', 3: 'Çocuk her şeyi okuldan almıyor: giysi, ayakkabı ve matarayı **biz** veriyoruz, kahvaltıyı çocuk **kendisi** getiriyor. 27 Kasım’a kadar öğretmeni aramak değil, **4 euroyu vermek** gerekiyor; geziye katılmak istersek **yazılı** haber veriyoruz.' },
      e: 'Sprachmittlung: tarih (10.12.), getirilecekler (Kleidung, Schuhe, Trinkflasche, Frühstück), para (4 Euro, **bis 27. November**) ve Elternabend (1.12., 19 Uhr) aktarılır.' },
    { id: 'de-a2-r04.q5', t: 'match', q: 'Eşleştir:', p: [['Donnerstag, 10. Dezember', 'Ausflug in den Wald'], ['Dienstag, 1. Dezember', 'Elternabend um 19 Uhr'], ['bis 27. November', 'Geld abgeben und antworten'], ['4 Euro', 'Kosten für den Bus'], ['8.30 Uhr', 'Abfahrt mit dem Bus']],
      e: 'Tarih ve saatleri metindeki göreviyle eşleştir: *am* + gün, *bis* = -e kadar, *um* + saat.' }
  ]
});

K.addText('de-a2-r05', {
  level: 'A2', kind: 'read', scene: 'bahn', genre: 'hinweis',
  title: 'Information für Fahrgäste', sub: 'Yolcular için bilgilendirme',
  body: [
    'Liebe Fahrgäste,',
    'am Samstag, dem 28. November, fährt der Regionalzug nach Köln nicht von Gleis 4, sondern von Gleis 7 ab. Der Zug hat 20 Minuten Verspätung, weil auf der Strecke gebaut wird. Deshalb fährt er nicht um 9.15 Uhr, sondern erst um 9.35 Uhr ab. Der Aufzug zu Gleis 7 ist leider kaputt. Bitte benutzen Sie die Treppe.',
    'Der Zug hat Verspätung. Trotzdem bekommen Sie in Köln Ihren Anschlusszug, denn dieser wartet auf Sie. Wenn Sie Fragen haben, hilft Ihnen der Schalter im Bahnhof. Er ist von 6 bis 20 Uhr geöffnet. Ihre Fahrkarte gilt auch für den späteren Zug.',
    'Vielen Dank für Ihr Verständnis!',
    'Ihre Bahn'
  ],
  gloss: { 'Fahrgäste': 'yolcular', 'Regionalzug': 'bölgesel tren', 'Gleis': 'peron (ray)', 'Verspätung': 'gecikme, rötar', 'Strecke': 'hat, güzergâh', 'gebaut wird': 'inşaat / yol çalışması yapılıyor', 'Aufzug': 'asansör', 'benutzen': 'kullanmak', 'Treppe': 'merdiven', 'erst': 'ancak, daha … değil', 'Anschlusszug': 'aktarma treni', 'Schalter': 'gişe', 'gilt': 'geçerlidir (gelten)', 'Verständnis': 'anlayış' },
  questions: [
    { id: 'de-a2-r05.q1', t: 'mc', q: 'Köln treni 28 Kasım Cumartesi günü hangi perondan kalkıyor?', o: ['7. peron', '4. peron', 'Peron değişmiyor', 'Peron belli değil, gişeye sormak gerekiyor'], a: 0,
      why: { 1: '4. peron **olağan** peron; bu gün tren oradan **kalkmıyor**: *nicht von Gleis 4, sondern von Gleis 7*.', 2: 'Peron **değişiyor**: *nicht … sondern …*.', 3: 'Peron belli: **Gleis 7**. Gişe yalnızca sorular için.' },
      e: '*nicht von Gleis 4, **sondern** von Gleis 7* = 4. peron değil, 7. peron. **sondern** düzeltme bildirir.' },
    { id: 'de-a2-r05.q2', t: 'gap', q: 'Der Zug hat Verspätung. ___ fährt er erst um 9.35 Uhr ab.', a: ['Deshalb', 'Darum', 'Daher'],
      wrong: { 'Trotzdem': '*trotzdem* = yine de. Gecikme kalkış saatinin **sebebidir**; beklenenin tersi değil. → **Deshalb**.', 'Denn': '*denn* sebebi ekler ve fiili öne almaz. Burada **sonuç** var ve *fährt er* (fiil önde): **Deshalb**.', 'Weil': '*weil* yan cümle kurar; fiil sona giderdi. Burada fiil 2. sırada: **Deshalb**.' },
      e: 'Gecikme → bu yüzden geç kalkıyor: sonuç → **deshalb** + fiil + özne: *Deshalb fährt er … ab*.' },
    { id: 'de-a2-r05.q3', t: 'gap', q: 'Der Zug hat 20 Minuten Verspätung, ___ auf der Strecke gebaut wird.', a: ['weil'],
      wrong: { 'denn': '*denn* ile fiil yerinde kalır (*denn auf der Strecke wird gebaut*). Metinde fiil **sonda** (*gebaut wird*): **weil**.', 'deshalb': '*deshalb* sonucu bildirir; burada **sebep** var ve fiil sonda: **weil**.' },
      e: '**weil** yan cümle kurar: çekimli fiil (*wird*) **en sonda**: *weil auf der Strecke gebaut **wird***.' },
    { id: 'de-a2-r05.q4', t: 'mc', q: 'Annen Almanca bilmiyor ve “Ne yazıyor?” diye soruyor. Ona ne anlatırsın?', o: ['Köln treni cumartesi 4. peron yerine 7. perondan kalkıyor. Tren 20 dakika gecikmeli: 9.15 yerine 9.35’te. 7. peronun asansörü bozuk, merdiveni kullanmalıyız. Köln’de aktarma treni bizi bekliyor, bilet yeni trende de geçerli. Sorumuz olursa gişe 6–20 arası açık.', 'Köln treni 7. perondan 9.15’te kalkıyor. Aktarma treni beklemeyecek, yeni bilet almamız gerekiyor. Gişe 9.35’e kadar açık.', 'Köln treni 4. perondan 9.35’te kalkıyor. Aktarma treni bekliyor, bilet geçerli. Asansör çalışıyor.', 'Köln treni bu cumartesi hiç kalkmıyor. Gişeye gidip parayı geri almalıyız.'], a: 0,
      why: { 1: 'Saat **9.35**’e kaymış, 9.15 değil; aktarma treni **bekliyor** ve bilet **geçerli**. Gişe **6–20** arası açık.', 2: 'Tren **7. perondan** kalkıyor, 4. değil. Asansör **bozuk**, bu yüzden **merdiven** öneriliyor; ayrıca tren 9.15’te değil 9.35’te kalkıyor.', 3: 'Tren **kalkıyor**, sadece 20 dakika geç. İade istenmiyor, bilet geçerli.' },
      e: 'Sprachmittlung: peron (**Gleis 7**), saat (**9.35** yerine 9.15), aktarma treni **bekliyor**, bilet **geçerli**, gişe **6–20**.' },
    { id: 'de-a2-r05.q5', t: 'match', q: 'Eşleştir:', p: [['Gleis 7', 'hier fährt der Zug ab'], ['20 Minuten', 'so viel Verspätung'], ['9.35 Uhr', 'neue Abfahrtszeit'], ['6 bis 20 Uhr', 'Schalter ist geöffnet'], ['Anschlusszug', 'wartet in Köln']],
      e: 'Metindeki her bilgi bir göreve bağlı: peron, gecikme süresi, yeni kalkış saati, gişe saatleri ve bekleyen aktarma treni.' }
  ]
});

K.addText('de-a2-r06', {
  level: 'A2', kind: 'read', scene: 'amt', genre: 'email',
  title: 'Anfrage an das Bürgeramt', sub: 'Bürgeramt’a bir soru',
  body: [
    'Sehr geehrte Damen und Herren,',
    'ich ziehe am 30. November nach Bonn um und habe am Montag, dem 7. Dezember, um 10.30 Uhr einen Termin zur Anmeldung. Könnten Sie mir bitte sagen, welche Unterlagen ich mitbringen muss? Ich habe meinen Pass und den Mietvertrag. Brauche ich auch eine Wohnungsgeberbestätigung?',
    'Ich möchte auch meine Frau anmelden. Wissen Sie, ob sie mitkommen muss? Sie hat am Montag leider keine Zeit. Ich kann nur am Vormittag kommen, denn ich arbeite am Nachmittag. Ich wäre Ihnen für eine kurze Antwort dankbar. Vielen Dank im Voraus!',
    'Mit freundlichen Grüßen',
    'Murat Kaya'
  ],
  gloss: { 'Sehr geehrte Damen und Herren': 'Sayın yetkililer (resmî hitap)', 'Anmeldung': 'ikametgâh kaydı', 'Unterlagen': 'belgeler', 'Mietvertrag': 'kira sözleşmesi', 'Wohnungsgeberbestätigung': 'konut verenin (ev sahibi/kiraya veren) taşınmayı onaylayan belgesi', 'mitbringen': 'yanında getirmek', 'mitkommen': 'birlikte gelmek', 'Vormittag': 'öğleden önce', 'dankbar': 'minnettar', 'im Voraus': 'şimdiden' },
  questions: [
    { id: 'de-a2-r06.q1', t: 'mc', q: 'Murat Bey neden yazıyor?', o: ['Anmeldung randevusu için hangi belgelerin gerektiğini ve eşinin gelip gelmeyeceğini soruyor.', 'Randevusunu başka bir güne ertelemek istiyor.', 'Pasaportunu kaybetmiş ve yenisini istiyor.', 'Kira sözleşmesini Bürgeramt’a göndermek istiyor.'], a: 0,
      why: { 1: 'Erteleme isteği yok; randevu **7 Aralık Pazartesi 10.30**’da duruyor.', 2: 'Pasaportu **var**: *Ich habe meinen Pass*.', 3: 'Sözleşmeyi göndermeyi önermiyor; **belge gerekli mi** diye soruyor.' },
      e: 'İki soru var: **Unterlagen** (belgeler) ve **ob sie mitkommen muss** (eşinin gelip gelmeyeceği).' },
    { id: 'de-a2-r06.q2', t: 'gap', q: 'Wissen Sie, ___ sie mitkommen muss?', a: ['ob'],
      wrong: { 'wenn': '*wenn* = eğer. “Gelmesi gerekip gerekmediği” evet/hayır sorusudur: **ob**.', 'dass': '*dass* bildirim içeriğini bağlar. Burada soru var: **ob**.', 'wann': '*wann* = ne zaman. Burada ne zaman değil, “**gerekip gerekmediği**” soruluyor: **ob**.' },
      e: 'Evet/hayır sorusu dolaylıya dönünce **ob** gelir; çekimli fiil (*muss*) en sonda: *ob sie mitkommen **muss***.' },
    { id: 'de-a2-r06.q3', t: 'gap', q: 'Könnten Sie mir bitte sagen, welche Unterlagen ich mitbringen ___?', a: ['muss'],
      wrong: { 'müssen': 'Özne *ich* → ich **muss**. *müssen* wir/sie içindir.', 'musst': '*musst* du içindir; *ich* ile **muss**.' },
      e: 'Dolaylı soruda modal fiil **sonda**: *welche Unterlagen ich mitbringen **muss***. *Könnten Sie …?* nazik rica kalıbıdır.' },
    { id: 'de-a2-r06.q4', t: 'mc', q: 'Murat’ın babası Almanca bilmiyor. Oğlunun e-postasını gösterip “Ne yazmış?” diye soruyor. Ona ne anlatırsın?', o: ['Murat 30 Kasım’da Bonn’a taşınıyor. 7 Aralık Pazartesi saat 10.30’da kayıt randevusu var. Hangi belgeleri getirmesi gerektiğini soruyor: pasaportu ve kira sözleşmesi hazır, ev sahibi onay belgesi lazım mı diye soruyor. Eşi de gelmeli mi diye soruyor; eşinin pazartesi günü vakti yok. Kısa bir cevap bekliyor.', 'Murat 7 Aralık’ta Bonn’a taşınıyor. 30 Kasım Pazartesi kayıt randevusu var. Pasaportu ve kira sözleşmesi yok; yenilerini istiyor. Eşi mutlaka gelmeli.', 'Murat randevusunu iptal etmek istiyor, çünkü eşinin pazartesi günü vakti yok. Belgeleri postayla gönderecek.', 'Murat 30 Kasım’da Bonn’a taşınıyor. Randevu 10.30’da, belgeleri tamam. Sadece eşinin gelip gelmeyeceğini soruyor; başka sorusu yok.'], a: 0,
      why: { 1: 'Tarihler ters: taşınma **30 Kasım**, randevu **7 Aralık**. Pasaport ve sözleşme **var**.', 2: 'İptal yok; randevu **duruyor**. Eşinin vakti yok, bu yüzden **gelmesi gerekip gerekmediğini** soruyor.', 3: 'Belgeler tam değil: **Wohnungsgeberbestätigung** gerekip gerekmediğini de soruyor. Yani **iki** sorusu var.' },
      e: 'Sprachmittlung: taşınma (**30.11.**), randevu (**Mo, 7.12., 10.30**), iki soru (**Unterlagen**, **ob sie mitkommen muss**) ve kısa cevap isteği.' },
    { id: 'de-a2-r06.q5', t: 'match', q: 'Eşleştir:', p: [['Sehr geehrte Damen und Herren', 'Anrede am Anfang'], ['Mit freundlichen Grüßen', 'Schluss der E-Mail'], ['Montag, 7. Dezember', 'Termin im Bürgeramt'], ['Pass und Mietvertrag', 'Unterlagen, die er hat'], ['Wohnungsgeberbestätigung', 'Frage zu einem Dokument']],
      e: 'E-postanın yapısı: resmî hitap, konu, sorular, nazik kapanış. Her ifade bu yapıda bir göreve bağlı.' }
  ]
});

K.addText('de-a2-r07', {
  level: 'A2', kind: 'read', scene: 'markt', genre: 'anzeige',
  title: 'Kinderfahrrad zu verkaufen', sub: 'Satılık çocuk bisikleti',
  body: [
    'Verkaufe Kinderfahrrad, blau, für Kinder von sechs bis acht Jahren. Es ist zwei Jahre alt und noch sehr gut. Mein Sohn ist leider zu groß dafür.',
    'Der Preis ist 45 Euro. Ein Helm und ein Schloss sind auch dabei. Sie können das Fahrrad gern ansehen und ausprobieren.',
    'Ich wohne in der Gartenstraße 12, im dritten Stock. Bitte rufen Sie nur nach 18 Uhr an, denn ich arbeite tagsüber. Das Fahrrad kann man nur am Wochenende abholen.'
  ],
  gloss: { 'Schloss': 'kilit', 'Helm': 'kask', 'ausprobieren': 'denemek', 'abholen': 'gidip almak', 'tagsüber': 'gündüzleri' },
  questions: [
    { id: 'de-a2-r07.q1', t: 'mc', q: 'Satıcı bisikleti neden satıyor?', o: ['Oğlu bisiklet için artık çok büyük.', 'Bisiklet bozuk.', 'Başka bir şehre taşınıyor.', 'Yeni bir bisiklet almak istiyor.'], a: 0,
      why: { 1: 'Metinde bisiklet *noch sehr gut* (hâlâ çok iyi); bozuk değil.', 2: 'Taşınmaktan söz edilmiyor. Sebep: *Mein Sohn ist zu groß dafür.*', 3: 'Yeni bisikletten söz edilmiyor; sebep oğlunun büyümesi.' },
      e: '*zu groß dafür* = bunun için çok büyük. *zu* + sıfat = “fazla, çok”: *zu groß, zu klein, zu teuer*.' },
    { id: 'de-a2-r07.q2', t: 'gap', q: 'Bitte rufen Sie nur ___ 18 Uhr an.', a: ['nach', 'ab'],
      wrong: { 'um': '*um 18 Uhr* tam o saati bildirir. Satıcı gündüz çalışıyor, yani 18’den **sonra** aranmalı: nach (ya da ab).', 'vor': '*vor 18 Uhr* = 18’den önce. Satıcı o saatte çalışıyor, tersi doğru.' },
      e: '*nach 18 Uhr* = saat 18’den sonra; *ab 18 Uhr* = 18’den itibaren de aynı anlamı verir. *anrufen* ayrılabilen fiildir: *Rufen Sie … an.*' },
    { id: 'de-a2-r07.q3', t: 'gap', q: 'Das Fahrrad ist zwei Jahre ___ und noch sehr gut.', a: ['alt'],
      wrong: { 'alte': 'Yüklemde (*ist … alt*) sıfat çekimlenmez. *ein altes Fahrrad* ama *das Fahrrad ist alt*.', 'neu': 'Almancada “zwei Jahre neu” diye bir kalıp yok; yaş her zaman *… Jahre alt* ile söylenir.' },
      e: '“İki yaşında” = *zwei Jahre alt*. Yaş ve yüklem sıfatı çekimsiz kalır.' },
    { id: 'de-a2-r07.q4', t: 'mc', q: 'Arkadaşın Almanca bilmiyor, çocuğu için ucuz bir bisiklet arıyor. İlanı ona nasıl anlatırsın?', o: ['Mavi, iki yaşında bir çocuk bisikleti, 45 euro. Kask ve kilit de veriliyor. Akşam 18’den sonra aranmalı; bisiklet sadece hafta sonu alınabilir.', 'Mavi bir çocuk bisikleti 45 euro. Kask ve kilit yok. Gün boyunca aranabilir; her gün alınabilir.', 'Bisiklet yeni ve 20 euro. Telefon etmek gerekmiyor, hafta içi alınabilir.', 'Bisiklet 45 euro, kilit var ama kask yok. Gartenstraße’de ikinci katta; 18’den önce aranmalı.'], a: 0,
      why: { 1: '*Ein Helm und ein Schloss sind dabei* → kask ve kilit **var**. Ayrıca satıcı gündüz çalışıyor, gün boyu aranmaz.', 2: 'Bisiklet **iki yaşında** ve fiyat **45 euro**. Telefon zorunlu ve alma günü hafta sonu.', 3: 'Kask da **var**; kat **üçüncü** (*im dritten Stock*) ve arama **18’den sonra**.' },
      e: 'Sprachmittlung: fiyat, ne dahil, arama saati ve alma günü ayrı ayrı doğru aktarılır. *dabei sein* = yanında/dahil olmak.' },
    { id: 'de-a2-r07.q5', t: 'match', q: 'Eşleştir:', p: [['das Schloss', 'kilit'], ['der Helm', 'kask'], ['abholen', 'gidip almak'], ['das Wochenende', 'cumartesi ve pazar']],
      e: '*der Helm, -e* ve *das Schloss, ¨-er* nesne adlarıdır; *abholen* ayrılabilen fiildir: *Ich hole das Fahrrad ab.*' }
  ]
});

K.addText('de-a2-r08', {
  level: 'A2', kind: 'read', scene: 'freizeit', genre: 'programm',
  title: 'Wochenende in der Stadt', sub: 'Şehirde hafta sonu',
  items: [
    { h: 'Samstag, 10 Uhr', t: 'Flohmarkt auf dem Marktplatz. Hier können Sie Bücher, Spielzeug und Kleidung kaufen.' },
    { h: 'Samstag, 15 Uhr', t: 'Kindertheater im Park. Der Eintritt ist frei.' },
    { h: 'Samstag, 20 Uhr', t: 'Konzert der Musikschule vor dem Rathaus. Karten kosten 6 Euro. Kinder unter zwölf Jahren zahlen nichts.' },
    { h: 'Sonntag, 11 Uhr', t: 'Fahrradtour durch den Wald. Treffpunkt ist der Bahnhof. Bitte bringen Sie etwas zu trinken mit. Bei Regen fällt die Tour aus.' },
    { h: 'Sonntag, 14 Uhr', t: 'Kuchenbuffet im Café am Markt. Jeder darf einen Kuchen mitbringen.' }
  ],
  gloss: { 'Flohmarkt': 'bit pazarı', 'Spielzeug': 'oyuncak', 'Eintritt': 'giriş (ücreti)', 'Treffpunkt': 'buluşma yeri', 'fällt': 'iptal olur (ausfallen)', 'Kuchenbuffet': 'pasta büfesi', 'Tour': 'tur, gezi', 'Musikschule': 'müzik okulu' },
  questions: [
    { id: 'de-a2-r08.q1', t: 'mc', q: 'Hangi etkinlik için bilet almak gerekir?', o: ['Cumartesi akşamı konser', 'Çocuk tiyatrosu', 'Pazar günü bisiklet turu', 'Bit pazarı'], a: 0,
      why: { 1: 'Çocuk tiyatrosunda *Der Eintritt ist frei* yazıyor; giriş ücretsiz.', 2: 'Bisiklet turu için bilet yok; sadece içecek getirmek isteniyor.', 3: 'Bit pazarında yalnızca alışveriş yapılır, giriş bileti yok.' },
      e: '*Karten kosten 6 Euro* = biletler 6 euro. *frei* = ücretsiz; *Eintritt frei* girişin bedava olduğunu gösterir.' },
    { id: 'de-a2-r08.q2', t: 'gap', q: 'Bei Regen ___ die Fahrradtour aus.', a: ['fällt'],
      wrong: { 'fallt': '*fallen* düzensiz fiildir: *er/sie/es* ile **a → ä**: *fällt*.', 'fällen': '*fällen* (ağaç kesmek) başka bir fiildir; burada *fallen* → *es fällt* gerekir.' },
      e: '*ausfallen* (iptal olmak) ayrılabilen fiildir: *Die Tour fällt aus.* Ek, cümle sonunda kalır.' },
    { id: 'de-a2-r08.q3', t: 'gap', q: 'Bitte bringen Sie etwas zu trinken ___.', a: ['mit'],
      wrong: { 'an': '*anbringen* başka bir fiildir. “Yanında getirmek” = *mitbringen*.', 'zu': '*zu* mastar için kullanılır; burada ayrılan ek **mit**.' },
      e: '*mitbringen* ayrılabilen fiildir: *Bringen Sie etwas mit.* *etwas zu trinken* = içecek bir şey.' },
    { id: 'de-a2-r08.q4', t: 'mc', q: 'Annen pazar günü bisiklet turuna katılmak istiyor. Ona ne anlatırsın?', o: ['Saat 11’de istasyonda buluşuluyor; yanına içecek almalısın. Yağmur yağarsa tur iptal.', 'Saat 14’te istasyonda buluşuluyor, yağmurda da tur yapılır.', 'Saat 11’de belediye binasının önünde buluşuluyor; içecek orada veriliyor.', 'Cumartesi saat 10’da pazar yerinde buluşuluyor; yanına kek almalısın.'], a: 0,
      why: { 1: 'Saat **11**; **14.00**’te pasta büfesi var. Yağmurda tur **iptal** (*fällt aus*).', 2: 'Buluşma yeri **istasyon** (*Bahnhof*), belediye değil; içecek **getirilir**, verilmez.', 3: 'Bu bit pazarı (cumartesi 10.00). Tur **pazar** günüdür.' },
      e: 'Sprachmittlung: gün/saat (**Sonntag, 11 Uhr**), yer (**Bahnhof**), ne getirilmeli (**etwas zu trinken**), hava (**bei Regen … aus**).' },
    { id: 'de-a2-r08.q5', t: 'match', q: 'Zamanı etkinlikle eşleştir:', p: [['Samstag, 10 Uhr', 'Flohmarkt'], ['Samstag, 20 Uhr', 'Konzert'], ['Sonntag, 11 Uhr', 'Fahrradtour'], ['Sonntag, 14 Uhr', 'Kuchenbuffet']],
      e: 'Programda gün ve saat başlıkta yazar. Önce *Samstag/Sonntag*, sonra saate bak.' }
  ]
});

K.addText('de-a2-r09', {
  level: 'A2', kind: 'read', scene: 'stadt', genre: 'artikel',
  title: 'Die neue Stadtbibliothek', sub: 'Yeni şehir kütüphanesi',
  body: [
    'Seit letzter Woche hat unsere Stadt eine neue Bibliothek. Sie steht direkt neben dem Bahnhof und ist größer als die alte. Hier gibt es nicht nur Bücher, sondern auch Zeitungen, Filme und Computer.',
    'Die Bibliothek ist von Dienstag bis Samstag geöffnet. Am Montag und am Sonntag bleibt sie geschlossen. Kinder und Schüler zahlen nichts. Erwachsene bezahlen 12 Euro im Jahr für den Ausweis. Mit dem Ausweis kann man bis zu zehn Bücher oder Filme für vier Wochen ausleihen.',
    'Besonders beliebt ist der Lesesaal im ersten Stock. Dort ist es ruhig, und man darf auch eigene Bücher mitbringen. Am Mittwochnachmittag gibt es Geschichten für Kinder.'
  ],
  gloss: { 'Ausweis': 'kart, kimlik', 'ausleihen': 'ödünç almak', 'Lesesaal': 'okuma salonu', 'beliebt': 'sevilen', 'eigene': 'kendi', 'Erwachsene': 'yetişkinler', 'Stock': 'kat', 'gibt': 'var (es gibt)', 'steht': 'durur, bulunur', 'Geschichten': 'hikâyeler' },
  questions: [
    { id: 'de-a2-r09.q1', t: 'mc', q: 'Yeni kütüphane nerede?', o: ['İstasyonun hemen yanında', 'Eski kütüphanenin içinde', 'Okulun karşısında', 'Parkın arkasında'], a: 0,
      why: { 1: 'Yeni bina eskisinden **büyük** ve ayrı; eski kütüphanenin içinde değil.', 2: 'Okuldan söz edilmiyor; *neben dem Bahnhof* yazıyor.', 3: 'Park metinde geçmiyor.' },
      e: '*Sie steht direkt neben dem Bahnhof.* *neben* + Dativ = yanında. *direkt* = hemen, doğrudan.' },
    { id: 'de-a2-r09.q2', t: 'gap', q: 'Die Bibliothek ist ___ Dienstag bis Samstag geöffnet.', a: ['von'],
      wrong: { 'ab': '*ab* tek bir başlangıç noktası için: *ab Dienstag*. “… den … e kadar” aralık için **von … bis**.', 'seit': '*seit* geçmişten beri süren durum içindir; burada açılış günleri aralığı var.' },
      e: 'Aralık: *von … bis …* = … den … e kadar. *Von Dienstag bis Samstag.*' },
    { id: 'de-a2-r09.q3', t: 'mc', q: 'Bir yetişkin kütüphane kartı için ne kadar öder?', o: ['Yılda 12 euro', 'Ayda 12 euro', 'Hiçbir şey', 'Dört haftada 4 euro'], a: 0,
      why: { 1: '*im Jahr* = yılda; *im Monat* (ayda) değil.', 2: 'Sadece **çocuklar ve öğrenciler** ödemez (*zahlen nichts*). Yetişkinler öder.', 3: '“Dört hafta” ödünç alma süresidir, kart ücreti değil.' },
      e: '*Erwachsene bezahlen 12 Euro im Jahr.* *Kinder und Schüler zahlen nichts.* Önce **kim**, sonra **ne kadar** diye oku.' },
    { id: 'de-a2-r09.q4', t: 'gap', q: 'Man kann Bücher und Filme für vier Wochen ___.', a: ['ausleihen', 'leihen'],
      wrong: { 'ausleiht': 'Modal fiil (*kann*) varsa asıl fiil **mastar** olur: *kann … ausleihen*.', 'leihen aus': 'Modal cümlede ayrılabilen fiil ayrılmaz, mastar hâlinde sonda durur: *ausleihen*.' },
      e: 'Modal fiil 2. sırada, mastar **cümle sonunda**: *Man kann … ausleihen.* (*leihen* de doğrudur; metinde *ausleihen* geçer.)' },
    { id: 'de-a2-r09.q5', t: 'mc', q: 'Annen soruyor: “Pazartesi kütüphaneye gidebilir miyiz?” Ne dersin?', o: ['Hayır, pazartesi ve pazar kapalı. Salıdan cumartesiye kadar açık.', 'Evet, pazartesi açık ama cumartesi kapalı.', 'Evet, her gün açık.', 'Hayır, kütüphane sadece çarşamba öğleden sonra açık.'], a: 0,
      why: { 1: 'Tersi doğru: **pazartesi kapalı**, cumartesi açık.', 2: 'Hayır: *Am Montag und am Sonntag bleibt sie geschlossen.*', 3: 'Çarşamba öğleden sonra sadece **çocuklara hikâye** var; kütüphane salıdan cumartesiye açık.' },
      e: '*geschlossen* = kapalı, *geöffnet* = açık. *von … bis* günleri açık, *am Montag und am Sonntag* kapalı günleri verir.' }
  ]
});

K.addText('de-a2-r10', {
  level: 'A2', kind: 'read', scene: 'sport', genre: 'formular',
  title: 'Anmeldung zum Schwimmkurs', sub: 'Yüzme kursu kayıt formu',
  items: [
    { h: 'Kurs', t: 'Schwimmkurs für Anfänger. Der Kurs beginnt am Dienstag, dem ersten Dezember, und findet jeden Dienstag um achtzehn Uhr statt. Er dauert eine Stunde. Zehn Termine.' },
    { h: 'Teilnehmerin', t: 'Selin Aydin, vierunddreißig Jahre alt.' },
    { h: 'Adresse', t: 'Lindenweg fünf in Bonn.' },
    { h: 'Bemerkung', t: 'Ich kann noch nicht gut schwimmen und habe Angst vor tiefem Wasser. Ich möchte gern in einer kleinen Gruppe lernen.' },
    { h: 'Kosten', t: 'Achtzig Euro für zehn Termine. Bitte überweisen Sie das Geld bis zum ersten Kurstag.' },
    { h: 'Mitbringen', t: 'Ein großes Handtuch und eine Badekappe. Vor dem Schwimmen muss man duschen.' }
  ],
  gloss: { 'Anfänger': 'yeni başlayanlar', 'überweisen': 'havale etmek', 'Badekappe': 'bone', 'Handtuch': 'havlu', 'tiefem Wasser': 'derin su', 'Termine': 'randevular, dersler', 'statt': 'yer alır (stattfinden)' },
  questions: [
    { id: 'de-a2-r10.q1', t: 'mc', q: 'Selin neden küçük bir grupta öğrenmek istiyor?', o: ['Henüz iyi yüzemiyor ve derin sudan korkuyor.', 'Çok iyi yüzüyor ve ders vermek istiyor.', 'Kurs ücretsiz.', 'Havuz evine yakın.'], a: 0,
      why: { 1: 'Tersi: *Ich kann noch nicht gut schwimmen.* Kurs yeni başlayanlar içindir.', 2: 'Kurs ücretsiz değil: 80 euro.', 3: 'Metinde havuzun konumu yok; sebep **korku** ve yetersiz yüzme.' },
      e: '*Angst haben vor* + Dativ = …den korkmak: *Angst vor tiefem Wasser.* *noch nicht* = henüz değil.' },
    { id: 'de-a2-r10.q2', t: 'gap', q: 'Der Kurs beginnt jeden Dienstag ___ 18 Uhr.', a: ['um'],
      wrong: { 'am': '*am* gün içindir (*am Dienstag*). Saat için **um**: *um 18 Uhr*.', 'im': '*im* ay/mevsim için (*im Dezember*); saat için kullanılmaz.', 'ab': '*beginnen* zaten başlangıcı söyler; yanına *ab* eklemek gereksizdir. Tek bir başlangıç saati için **um**.' },
      e: 'Saat → **um**. Gün → **am**. *jeden Dienstag* = her salı.' },
    { id: 'de-a2-r10.q3', t: 'mc', q: 'Ücret ne zamana kadar ödenmeli?', o: ['İlk kurs gününe kadar', 'Son kurs gününden sonra', 'Her derste nakit', 'Kayıttan bir yıl sonra'], a: 0,
      why: { 1: '*bis zum ersten Kurstag* = ilk kurs gününe **kadar**, sonra değil.', 2: 'Metinde 80 euro **tek seferde** havale edilir (*überweisen*), her derste nakit yok.', 3: 'Böyle bir süre yok; son gün ilk kurs günü.' },
      e: '*bis zum* + Dativ = …e kadar: *bis zum ersten Kurstag.* *überweisen* = banka havalesi yapmak.' },
    { id: 'de-a2-r10.q4', t: 'gap', q: 'Selin hat ___ vor tiefem Wasser.', a: ['Angst'],
      wrong: { 'angst': 'Almancada tüm isimler **büyük** yazılır: *die Angst*.', 'Ängste': '*Angst haben* kalıbında tekil kullanılır; çoğul *Ängste* burada uymaz.' },
      e: '*Angst haben vor* + Dativ. Nomen büyük yazılır. *vor tiefem Wasser* (Dativ).' },
    { id: 'de-a2-r10.q5', t: 'mc', q: 'Kuzenin kursa gidecek. Ona ne söylersin? Yanında ne getirmeli?', o: ['Büyük bir havlu ve bone; yüzmeden önce duş almalı.', 'Sadece mayo; duş almak gerekmiyor.', 'Havlu getirmesin, kursta veriliyor.', 'Bone ve gözlük; duş sonra alınır.'], a: 0,
      why: { 1: '*Vor dem Schwimmen muss man duschen* → duş **zorunlu**.', 2: 'Havlu ve bone **getirilmeli** (*Mitbringen*).', 3: 'Gözlükten söz edilmiyor ve duş **önce** alınır.' },
      e: '*mitbringen* = yanında getirmek. *Vor dem Schwimmen* = yüzmeden önce. *man muss* = (genel olarak) -meli.' }
  ]
});

K.addText('de-a2-r11', {
  level: 'A2', kind: 'read', scene: 'freizeit', genre: 'nachricht',
  title: 'Einladung zum Geburtstag', sub: 'Doğum günü daveti',
  body: [
    'Hallo Jana,',
    'ich habe am Samstag, dem fünften Dezember, Geburtstag und möchte mit dir feiern. Die Feier beginnt um achtzehn Uhr bei mir zu Hause. Wir essen zusammen und hören Musik. Kannst du kommen?',
    'Du musst nichts kaufen. Aber wenn du möchtest, kannst du einen Salat mitbringen. Mein Freund Tom holt dich vom Bahnhof ab, wenn du mit dem Zug kommst.',
    'Bitte schreib mir bis Mittwoch, ob du kommst. Dann weiß ich, wie viel Essen ich kaufen muss.',
    'Viele Grüße',
    'Leyla'
  ],
  gloss: { 'feiern': 'kutlamak', 'holt': 'alır (abholen: gidip almak)' },
  questions: [
    { id: 'de-a2-r11.q1', t: 'mc', q: 'Leyla Jana’ya neden yazıyor?', o: ['Onu doğum günü partisine davet ediyor.', 'Yeni bir eve taşınıyor.', 'Jana’dan ödünç eşya istiyor.', 'Bir toplantıyı iptal ediyor.'], a: 0,
      why: { 1: 'Taşınmaktan söz yok; *Geburtstag* ve *feiern* var.', 2: 'Hiçbir şey ödünç istemiyor; Jana sadece isterse salata getirebilir.', 3: 'İptal yok; Leyla **davet** ediyor.' },
      e: '*Ich habe Geburtstag und möchte mit dir feiern.* = Doğum günüm var, seninle kutlamak istiyorum.' },
    { id: 'de-a2-r11.q2', t: 'gap', q: 'Die Feier beginnt ___ 18 Uhr.', a: ['um'],
      wrong: { 'am': '*am Samstag* gün içindir; saat için **um**.', 'ab': '*ab 18 Uhr* “18’den itibaren”; burada başlangıç saati tek bir an: *um 18 Uhr*.' },
      e: '*um* + saat: *um 18 Uhr*. *am* + gün: *am Samstag*.' },
    { id: 'de-a2-r11.q3', t: 'gap', q: 'Tom holt dich vom Bahnhof ___.', a: ['ab'],
      wrong: { 'an': '*ankommen* (varmak) ayrı bir fiildir. “Gidip almak” = *abholen*.', 'auf': '*aufholen* = telafi etmek; burada **ab**holen.' },
      e: '*abholen* ayrılabilen fiildir: *Er holt dich ab.* *vom Bahnhof* = istasyondan.' },
    { id: 'de-a2-r11.q4', t: 'mc', q: 'Jana Almanca bilmeyen annesine mesajı anlatıyor. Ne söyler?', o: ['Leyla cumartesi akşamı 18’de doğum günü yapıyor. Jana isterse salata getirebilir. Çarşambaya kadar cevap vermeli.', 'Leyla çarşamba günü parti yapıyor. Jana mutlaka salata getirmeli.', 'Leyla cumartesi saat 8’de kahvaltı veriyor. Jana hediye almalı.', 'Leyla parti yapmıyor; Tom Jana’yı tren istasyonuna götürecek.'], a: 0,
      why: { 1: 'Parti **cumartesi**; çarşamba cevap son günü. Salata **zorunlu değil** (*wenn du möchtest*).', 2: 'Saat **18.00** ve akşam yemeği; hediye şartı yok (*Du musst nichts kaufen*).', 3: 'Parti **var**; Tom Jana’yı istasyondan **alacak**, oraya götürmeyecek.' },
      e: 'Sprachmittlung: zaman (**Samstag, 18 Uhr**), isteğe bağlı şey (**einen Salat mitbringen**) ve son tarih (**bis Mittwoch**) ayrı ayrı aktarılır.' },
    { id: 'de-a2-r11.q5', t: 'match', q: 'Eşleştir:', p: [['am Samstag', 'Geburtstag'], ['um 18 Uhr', 'Beginn der Feier'], ['bis Mittwoch', 'Antwort schreiben'], ['einen Salat', 'mitbringen, wenn man möchte']],
      e: 'Zaman ifadeleri: *am* (gün), *um* (saat), *bis* (son tarih). *mitbringen* ayrılabilen fiildir.' }
  ]
});

K.addText('de-a2-r12', {
  level: 'A2', kind: 'read', scene: 'einkauf', genre: 'hinweis',
  title: 'Neue Öffnungszeiten', sub: 'Yeni çalışma saatleri',
  body: [
    'Liebe Kundinnen und Kunden,',
    'ab dem ersten Dezember hat unser Supermarkt länger geöffnet: von Montag bis Samstag von sieben bis einundzwanzig Uhr. Bisher war um zwanzig Uhr Schluss. Am Sonntag bleibt der Laden wie immer geschlossen.',
    'Am vierundzwanzigsten Dezember schließen wir schon um dreizehn Uhr. Am fünfundzwanzigsten und sechsundzwanzigsten Dezember ist der Supermarkt zu.',
    'Leere Flaschen können Sie bis eine halbe Stunde vor Ladenschluss zurückgeben. Sie können bei uns mit Karte oder bar bezahlen. Wir wünschen Ihnen eine schöne Weihnachtszeit!'
  ],
  gloss: { 'Ladenschluss': 'dükkânın kapanışı', 'Flaschen': 'şişeler', 'zurückgeben': 'geri vermek', 'bisher': 'şimdiye kadar', 'Kundinnen': 'müşteriler (kadın)' },
  questions: [
    { id: 'de-a2-r12.q1', t: 'mc', q: 'Pazartesi–cumartesi market artık ne zamana kadar açık?', o: ['21.00’e kadar', '20.00’ye kadar', '13.00’e kadar', '7.00’ye kadar'], a: 0,
      why: { 1: '20.00 **eski** kapanış saati (*bisher*).', 2: '13.00 sadece **24 Aralık** içindir.', 3: '7.00 **açılış** saati, kapanış değil.' },
      e: '*Von sieben bis einundzwanzig Uhr* = 7’den 21’e kadar. *bisher* = şimdiye kadar; yani önceki saat 20.00.' },
    { id: 'de-a2-r12.q2', t: 'gap', q: 'Am Sonntag bleibt der Laden wie immer ___.', a: ['geschlossen', 'zu'],
      wrong: { 'geöffnet': '*geöffnet* = açık. Pazar günü market zaten kapalı.', 'zu machen': 'Mastar değil, durum bildiren **Partizip II** ya da *zu* (kapalı) gerekir: *bleibt … geschlossen*.' },
      e: '*bleiben* + Partizip II/sıfat: *Der Laden bleibt geschlossen* (ya da *bleibt zu*). Metinde *geschlossen* geçer.' },
    { id: 'de-a2-r12.q3', t: 'gap', q: 'Am 24. Dezember schließen wir schon ___ 13 Uhr.', a: ['um'],
      wrong: { 'am': '*am 24. Dezember* tarih içindir; saat için **um**.', 'bis': '*bis 13 Uhr* = 13’e kadar açık; burada “13.00’te kapatıyoruz” anlamı var.' },
      e: '*um 13 Uhr* tek bir saat. *schließen* = kapatmak.' },
    { id: 'de-a2-r12.q4', t: 'mc', q: 'Komşun 25 Aralık’ta alışveriş yapmak istiyor. Ona ne söylersin?', o: ['25 ve 26 Aralık’ta market kapalı; 24 Aralık’ta sadece 13.00’e kadar açık.', '25 Aralık’ta saat 13.00’e kadar açık.', 'Pazar günleri hariç her gün açık, 25 Aralık da.', '25 Aralık’ta sadece boş şişeler geri alınıyor.'], a: 0,
      why: { 1: '13.00’e kadar sadece **24 Aralık**; 25’inde market kapalı.', 2: 'Tatil günleri ayrıca belirtiliyor: **fünfundzwanzigsten und sechsundzwanzigsten Dezember ist der Supermarkt zu.**', 3: 'Şişe iadesi sadece normal açık günlerde, kapanıştan yarım saat öncesine kadar.' },
      e: '*zu sein* = kapalı olmak. Sprachmittlung: özel günler (**24., 25., 26.**) normal saatlerden ayrı aktarılır.' },
    { id: 'de-a2-r12.q5', t: 'mc', q: 'Boş şişeleri saat 20.40’ta (cumartesi) geri verebilir misin?', o: ['Hayır, kapanıştan en geç yarım saat önce (20.30’a kadar) verilmeli.', 'Evet, kapanışa kadar verilebilir.', 'Evet, ama sadece kartla.', 'Hayır, şişe iadesi yalnızca pazar günü olur.'], a: 0,
      why: { 1: '*bis eine halbe Stunde vor Ladenschluss* → kapanıştan **yarım saat önce** bitiyor (kapanış 21.00 → 20.30).', 2: 'Ödeme biçimi iade ile ilgisiz.', 3: 'Pazar günü market **kapalı**.' },
      e: '*eine halbe Stunde vor* + Dativ = yarım saat önce. Kapanış 21 Uhr → son iade 20.30 Uhr.' }
  ]
});

/* ---------- Hörtexte (ADR-12.3) ---------- */

K.addText('de-a2-h01', {
  level: 'A2', kind: 'listen', scene: 'bahn', genre: 'durchsage', plays: 2,
  title: 'Verspätung am Bahnhof', sub: 'İstasyonda gecikme',
  lines: [
    { s: 'Bahnhof', g: 'f', t: 'Achtung, eine Durchsage für alle Reisenden nach Köln. Der Regionalzug auf Gleis drei hat heute zwanzig Minuten Verspätung. Er fährt nicht um vierzehn Uhr zehn, sondern erst um vierzehn Uhr dreißig ab. Der Zug hält heute am Anfang des Bahnsteigs. Wir entschuldigen uns für die Verspätung.', n: 'Dikkat, Köln’e gidecek tüm yolcular için bir anons. Üç numaralı perondaki bölge treni bugün yirmi dakika gecikmeli. 14.10’da değil, ancak 14.30’da kalkacak. Tren bugün peronun başında duruyor. Gecikme için özür dileriz.' }
  ],
  gloss: { 'Bahnsteigs': 'peronun', 'Durchsage': 'anons', 'erst': 'ancak, daha ... da', 'Verspätung': 'gecikme', 'hält': 'durur (halten)' },
  questions: [
    { id: 'de-a2-h01.q1', t: 'mc', q: 'Tren kaç dakika gecikmeli?', o: ['On dakika', 'Yirmi dakika', 'Otuz dakika'], a: 1,
      why: { 0: '*zehn* (on) asıl kalkış saatindedir (14.**10**), gecikme süresi değil.', 2: '*dreißig* (otuz) yeni kalkış saatidir (14.**30**), gecikme süresi değil.' },
      e: 'Anonsta *zwanzig Minuten Verspätung* geçer (yirmi dakika). *zehn* ve *dreißig* saat bildirir; sayının neyi anlattığına dikkat et.' },
    { id: 'de-a2-h01.q2', t: 'cloze', q: 'Anonsu tamamla:', text: 'Der Zug fährt von Gleis {1} und hat {2} Minuten Verspätung.',
      gaps: {
        1: { a: ['drei'], o: ['zwei', 'drei', 'vier'], wrong: { 'zwei': 'İki numaralı peron anonsta geçmiyor.', 'vier': 'Dört numaralı peron anonsta geçmiyor.' } },
        2: { a: ['zwanzig'], o: ['zehn', 'zwanzig', 'dreißig'], wrong: { 'zehn': '*zehn* sadece asıl kalkış saatinde geçiyor, gecikme süresi değil.', 'dreißig': '*dreißig* sadece yeni kalkış saatinde geçiyor, gecikme süresi değil.' } }
      },
      e: 'Anons: *Gleis drei* (üç numaralı peron) ve *zwanzig Minuten Verspätung* (yirmi dakika gecikme).' },
    { id: 'de-a2-h01.q3', t: 'listen', say: 'Er fährt erst um vierzehn Uhr dreißig ab.', q: 'Cümleyi dinle. Anonsta hangi cümle var?', o: ['Er fährt erst um vierzehn Uhr dreißig ab.', 'Er fährt erst um vierzehn Uhr dreizehn ab.', 'Er hat vierzig Minuten Verspätung.'], a: 0,
      why: { 1: '*dreizehn* (13) ile *dreißig* (30) kulağa benzer gelir. Fark sonda: -zehn [tseːn], uzun e, ts sesi; -ßig [sɪç], kısa i, ç benzeri ses. Vurgu ikisinde de ilk hecede.', 2: '*vierzig* (40) ile *vierzehn* (14) karıştırılır. Anonsta gecikme *zwanzig* (20) dakikadır, kırk değil.' },
      e: 'Fark sonda: -zehn [tseːn], uzun e, ts sesi; -ßig [sɪç], kısa i, ç benzeri ses. Vurgu ikisinde de ilk hecede. Türkçedeki “on üç” ile “otuz” farkına benzer: sondaki sese dikkat.' },
    { id: 'de-a2-h01.q4', t: 'mc', q: 'Tren bugün nerede duruyor?', o: ['Peronun başında', 'Gar salonunda', 'Çıkışın yanında'], a: 0,
      why: { 1: 'Gar salonundan (*Bahnhofshalle*) söz edilmiyor.', 2: 'Çıkıştan (*Ausgang*) söz edilmiyor.' },
      e: '*Der Zug hält heute am Anfang des Bahnsteigs.* *der Bahnsteig, -e* = peron; *am Anfang* = başında.' }
  ]
});

K.addText('de-a2-h02', {
  level: 'A2', kind: 'listen', scene: 'einkauf', genre: 'durchsage', plays: 2,
  title: 'Angebot im Supermarkt', sub: 'Süpermarkette indirim',
  lines: [
    { s: 'Supermarkt', g: 'm', t: 'Liebe Kunden, heute gibt es bei uns ein besonderes Angebot: Alle Äpfel und Birnen kosten nur ein Euro neunzig das Kilo. Das Angebot gilt bis achtzehn Uhr. Außerdem sucht eine Kundin ihre Handtasche. Sie ist braun und liegt vielleicht an der Kasse zwei. Bitte melden Sie sich an der Information, wenn Sie die Tasche gesehen haben.', n: 'Sevgili müşterilerimiz, bugün özel bir kampanyamız var: Tüm elmalar ve armutlar kilosu sadece bir euro doksan. Kampanya saat on sekize kadar geçerli. Ayrıca bir müşterimiz el çantasını arıyor. Çanta kahverengi ve belki iki numaralı kasadadır. Çantayı gördüyseniz lütfen danışmaya başvurun.' }
  ],
  gloss: { 'besonderes': 'özel', 'braun': 'kahverengi', 'gesehen': 'gördünüz (sehen)', 'gibt': 'var (es gibt)', 'gilt': 'geçerlidir', 'Information': 'danışma', 'liegt': 'duruyor, bulunuyor' },
  questions: [
    { id: 'de-a2-h02.q1', t: 'mc', q: 'Bugün hangi ürünler indirimde?', o: ['Elma ve armut', 'Ekmek ve peynir', 'Süt ve yumurta'], a: 0,
      why: { 1: 'Ekmek ve peynir anonsta geçmiyor.', 2: 'Süt ve yumurta anonsta geçmiyor.' },
      e: '*Alle Äpfel und Birnen kosten nur … das Kilo.* *der Apfel, ¨-* (elma) / *die Birne, -n* (armut).' },
    { id: 'de-a2-h02.q2', t: 'gap', q: 'Das Angebot gilt bis ___ Uhr.', a: ['achtzehn', '18'],
      wrong: { 'acht': 'Duyduğun sayı *achtzehn* (18); *acht* (8) değil. Süpermarket akşam saatinde kampanyayı bitirir.', 'achtzig': '*achtzig* = 80, saat olamaz; doğrusu *achtzehn* (18).' },
      e: '*achtzehn* = 18 (acht + zehn), Türkçe “on sekiz”. *acht* (sekiz) ve *achtzig* (seksen) ile karıştırma.' },
    { id: 'de-a2-h02.q3', t: 'mc', q: 'Müşteri neyi arıyor?', o: ['El çantasını', 'Anahtarını', 'Cep telefonunu'], a: 0,
      why: { 1: 'Anahtardan söz edilmiyor.', 2: 'Cep telefonundan söz edilmiyor.' },
      e: '*die Handtasche, -n* = el çantası. Çanta *braun* (kahverengi) ve belki *an der Kasse zwei*.' },
    { id: 'de-a2-h02.q4', t: 'match', q: 'Eşleştir:', p: [['die Äpfel', 'ein Euro neunzig das Kilo'], ['die Handtasche', 'braun'], ['das Angebot', 'gilt bis achtzehn Uhr'], ['die Information', 'hier meldet man sich']],
      e: 'Anonsta her bilgi ayrı verilir: fiyat, renk, süre ve başvuru yeri.' }
  ]
});

K.addText('de-a2-h03', {
  level: 'A2', kind: 'listen', scene: 'arzt', genre: 'anrufbeantworter', plays: 2,
  title: 'Praxis: Sprechzeiten', sub: 'Muayenehane: görüşme saatleri',
  lines: [
    { s: 'Praxis', g: 'f', t: 'Guten Tag, hier ist die Praxis von Doktor Weber. Im Moment ist leider niemand am Telefon. Unsere Sprechzeiten sind Montag bis Donnerstag von acht bis zwölf Uhr und von vierzehn bis siebzehn Uhr. Am Freitag sind wir nur am Vormittag da. Für einen Termin rufen Sie bitte während der Sprechzeiten wieder an oder schreiben Sie uns eine E-Mail. Bei einem Notfall gehen Sie bitte direkt ins Krankenhaus.', n: 'İyi günler, burası Doktor Weber’in muayenehanesi. Şu anda maalesef telefonda kimse yok. Görüşme saatlerimiz pazartesiden perşembeye sabah sekizden on ikiye ve öğleden sonra on dörtten on yediye kadar. Cuma günü sadece öğleden önce buradayız. Randevu için lütfen görüşme saatlerinde tekrar arayın ya da bize e-posta yazın. Acil durumda lütfen doğrudan hastaneye gidin.' }
  ],
  gloss: { 'Sprechzeiten': 'görüşme saatleri', 'Notfall': 'acil durum', 'niemand': 'hiç kimse', 'Doktor': 'doktor', 'Moment': 'an', 'Telefon': 'telefon' },
  questions: [
    { id: 'de-a2-h03.q1', t: 'mc', q: 'Muayenehane cuma günü ne zaman açık?', o: ['Sadece öğleden önce', 'Bütün gün', 'Hiç açık değil'], a: 0,
      why: { 1: 'Bütün gün (öğle arasıyla) sadece pazartesiden perşembeye açık.', 2: 'Cuma günü muayenehane çalışıyor, ama sadece öğleden önce.' },
      e: '*Am Freitag sind wir nur am Vormittag da.* *der Vormittag* = öğleden önce. *nur* = sadece.' },
    { id: 'de-a2-h03.q2', t: 'cloze', q: 'Mesajı tamamla:', text: 'Die Praxis ist von Montag bis {1} den ganzen Tag da. Am {2} nur am Vormittag.',
      gaps: {
        1: { a: ['Donnerstag'], wrong: { 'donnerstag': 'Haftanın günleri isimdir: Almancada **büyük** yazılır.', 'Freitag': 'Cuma günü sadece öğleden önce açıktır.' } },
        2: { a: ['Freitag'], wrong: { 'freitag': 'Haftanın günleri isimdir: Almancada **büyük** yazılır.', 'Samstag': 'Cumartesiden söz edilmiyor; cuma günü kısa çalışılıyor.' } }
      },
      e: 'Haftanın günleri büyük yazılır: *Donnerstag, Freitag*. Mesaj: pzt–per bütün gün (öğle arasıyla), cuma sadece öğleden önce.' },
    { id: 'de-a2-h03.q3', t: 'mc', q: 'Randevu için ne yapılmalı?', o: ['Görüşme saatlerinde tekrar aramalı ya da e-posta yazmalı', 'Hemen hastaneye gitmeli', 'Bu akşam muayenehaneye uğramalı'], a: 0,
      why: { 1: 'Hastaneye sadece **acil durumda** (*Notfall*) gidilir.', 2: 'Uğramaktan söz edilmiyor; telefon ya da e-posta öneriliyor.' },
      e: '*Für einen Termin rufen Sie bitte während der Sprechzeiten wieder an.* *während* + Genitiv = …-ken, … sırasında. *wieder anrufen* = tekrar aramak.' },
    { id: 'de-a2-h03.q4', t: 'listen', say: 'Bei einem Notfall gehen Sie bitte direkt ins Krankenhaus.', q: 'Cümleyi dinle. Mesajda hangi cümle var?', o: ['Bei einem Notfall gehen Sie bitte direkt ins Krankenhaus.', 'Bei einem Termin gehen Sie bitte direkt ins Krankenhaus.', 'Bei einem Notfall rufen Sie bitte morgen wieder an.'], a: 0,
      why: { 1: '*Termin* (randevu) ile *Notfall* (acil durum) farklı kelimeler; hastaneye acil durumda gidilir.', 2: 'Acil durumda yarını beklemezsin; mesaj “doğrudan hastaneye git” diyor.' },
      e: '*der Notfall, ¨-e* = acil durum. *direkt* = doğrudan.' }
  ]
});

K.addText('de-a2-h04', {
  level: 'A2', kind: 'listen', scene: 'freizeit', genre: 'anrufbeantworter', plays: 3,
  title: 'Nachricht von Paul', sub: 'Paul’dan mesaj',
  lines: [
    { s: 'Paul', g: 'm', t: 'Hallo Nina, hier ist Paul. Ich rufe an, weil ich morgen nicht zum Sport kommen kann. Mein Chef hat gesagt, ich muss länger arbeiten. Aber am Samstag habe ich Zeit. Wollen wir dann um zehn Uhr zusammen im Park laufen? Danach können wir frühstücken. Ruf mich bitte heute Abend an. Bis bald!', n: 'Merhaba Nina, ben Paul. Yarın spora gelemeyeceğim için arıyorum. Patronum daha uzun çalışmam gerektiğini söyledi. Ama cumartesi günü vaktim var. O zaman saat onda birlikte parkta koşalım mı? Sonra kahvaltı yapabiliriz. Lütfen bu akşam beni ara. Görüşürüz!' }
  ],
  questions: [
    { id: 'de-a2-h04.q1', t: 'mc', q: 'Paul yarın spora neden gelemiyor?', o: ['Daha uzun çalışmak zorunda.', 'Hasta.', 'Canı istemiyor.'], a: 0,
      why: { 1: 'Paul hastalıktan söz etmiyor.', 2: 'Paul canının istemediğini söylemiyor; patronu daha uzun çalışmasını istemiş.' },
      e: '*weil ich … nicht … kommen kann* = çünkü … gelemiyorum. *Mein Chef hat gesagt, ich muss länger arbeiten.*' },
    { id: 'de-a2-h04.q2', t: 'gap', q: 'Paul muss morgen länger ___.', a: ['arbeiten'],
      wrong: { 'arbeitet': '*muss* gibi modal fiilden sonra fiil **mastar** olur ve cümle sonunda durur: *muss … arbeiten*.', 'Arbeiten': 'Fiil burada küçük yazılır; sadece isim (*die Arbeit*) büyük yazılır.' },
      e: 'Modal fiil + mastar (sonda): *Ich muss länger arbeiten.* Türkçe: “Daha uzun çalışmam gerek.”' },
    { id: 'de-a2-h04.q3', t: 'listen', say: 'Wollen wir am Samstag um zehn Uhr im Park laufen?', q: 'Cümleyi dinle. Paul ne öneriyor?', o: ['Wollen wir am Samstag um zehn Uhr im Park laufen?', 'Wollen wir am Sonntag um zehn Uhr im Park laufen?', 'Wollen wir am Samstag um zwölf Uhr im Park laufen?'], a: 0,
      why: { 1: '*Sonntag* (pazar) ile *Samstag* (cumartesi) kulağa benzer; Paul **Samstag** diyor.', 2: '*zwölf* (12) ile *zehn* (10) farklı sayılardır; Paul **zehn** diyor, yani saat on.' },
      e: '*Wollen wir …?* = “…-elim mi?” (öneri). Gün *am Samstag*, saat *um zehn Uhr*.' },
    { id: 'de-a2-h04.q4', t: 'match', q: 'Eşleştir:', p: [['morgen', 'Paul kann nicht kommen'], ['am Samstag', 'Paul hat Zeit'], ['um zehn Uhr', 'Laufen im Park'], ['danach', 'Frühstück']],
      e: 'Zaman sözcükleri mesajı düzenler: *morgen* (iptal), *am Samstag* (yeni gün), *um zehn Uhr* (saat), *danach* (sonra).' }
  ]
});

K.addText('de-a2-h05', {
  level: 'A2', kind: 'listen', scene: 'wetter', genre: 'radio', plays: 2,
  title: 'Das Wetter', sub: 'Hava durumu',
  lines: [
    { s: 'Radio', g: 'f', t: 'Und jetzt das Wetter für unsere Region. Heute Morgen ist es noch neblig, aber gegen Mittag kommt die Sonne heraus. Die Temperaturen steigen auf zwölf Grad. Am Abend wird es windig, und in der Nacht gibt es Regen. Morgen wird es kühl und nass, nur sieben Grad. Am Wochenende wird es besser: Am Samstag scheint wieder die Sonne, und am Sonntag wird es sogar warm, bis fünfzehn Grad. Packen Sie also für morgen den Regenschirm ein.', n: 'Şimdi bölgemiz için hava durumu. Bu sabah hava hâlâ sisli, ama öğleye doğru güneş açıyor. Sıcaklık on iki dereceye çıkıyor. Akşam rüzgârlı olacak, gece yağmur var. Yarın hava serin ve ıslak olacak, sadece yedi derece. Hafta sonu daha iyi: cumartesi yine güneş var, pazar günü hatta on beş dereceye kadar ılık olacak. Yarın için şemsiyenizi çantanıza koyun.' }
  ],
  gloss: { 'neblig': 'sisli', 'windig': 'rüzgârlı', 'Regenschirm': 'şemsiye', 'Packen': 'koyun, paketleyin', 'also': 'o hâlde', 'gibt': 'var (es gibt)', 'heraus': 'dışarı', 'kühl': 'serin', 'scheint': 'parlıyor', 'steigen': 'yükselmek', 'gegen': 'doğru, civarında' },
  questions: [
    { id: 'de-a2-h05.q1', t: 'mc', q: 'Bugün öğle saatlerinde hava nasıl?', o: ['Güneş açıyor.', 'Yağmur yağıyor.', 'Hava sisli.'], a: 0,
      why: { 1: 'Yağmur ancak **gece** yağıyor.', 2: 'Sis sadece **sabah** var.' },
      e: '*Heute Morgen neblig, gegen Mittag kommt die Sonne heraus.* *gegen Mittag* = öğleye doğru, öğle civarında.' },
    { id: 'de-a2-h05.q2', t: 'gap', q: 'Morgen sind es nur ___ Grad.', a: ['sieben', '7'],
      wrong: { 'sechzehn': '*sechzehn* (16) ile *sieben* (7) farklı; radyoda **sieben** (yedi) söylenir.', 'siebzehn': '*siebzehn* (17) sonda -zehn alır; söylenen sadece *sieben* (7).' },
      e: '*sieben* = yedi. Yarın: *kühl und nass, nur sieben Grad.* *das Grad* çoğulda değişmez: *sieben Grad*.' },
    { id: 'de-a2-h05.q3', t: 'match', q: 'Eşleştir:', p: [['heute Mittag', 'Sonne'], ['heute Nacht', 'Regen'], ['morgen', 'kühl und nass'], ['am Sonntag', 'warm']],
      e: 'Hava raporu gün gün ilerler: bugün (sabah, öğle, akşam, gece), yarın, hafta sonu.' },
    { id: 'de-a2-h05.q4', t: 'mc', q: 'Yarın yanına ne almalı?', o: ['Şemsiye', 'Güneş gözlüğü', 'Atkı'], a: 0,
      why: { 1: 'Güneş gözlüğü **cumartesi** için; yarın ıslak ve serin.', 2: 'Atkıdan söz edilmiyor.' },
      e: '*Packen Sie für morgen den Regenschirm ein.* *einpacken* ayrılabilen fiildir (çantaya koymak).' }
  ]
});

K.addText('de-a2-h06', {
  level: 'A2', kind: 'listen', scene: 'verkehr', genre: 'radio', plays: 2,
  title: 'Verkehrsmeldungen', sub: 'Trafik haberleri',
  lines: [
    { s: 'Radio', g: 'm', t: 'Verkehrsmeldungen für den Nachmittag. Auf der Autobahn zwischen Köln und Bonn gibt es einen Unfall. Dort gibt es fünf Kilometer Stau. Sie brauchen etwa dreißig Minuten länger. Die Bundesstraße bei Siegburg ist wegen einer Baustelle gesperrt. Bitte nehmen Sie einen anderen Weg. Die Straßenbahnen fahren ohne Probleme.', n: 'Öğleden sonrası için trafik haberleri. Köln ile Bonn arasındaki otoyolda bir kaza var. Orada beş kilometrelik kuyruk var. Yaklaşık otuz dakika daha uzun sürüyor. Siegburg yakınındaki devlet yolu bir şantiye yüzünden kapalı. Lütfen başka bir yol kullanın. Tramvaylar sorunsuz çalışıyor.' }
  ],
  gloss: { 'Stau': 'trafik sıkışıklığı', 'Baustelle': 'şantiye', 'gesperrt': 'kapalı (yol)', 'Unfall': 'kaza', 'Bundesstraße': 'devlet yolu', 'etwa': 'yaklaşık', 'gibt': 'var (es gibt)', 'länger': 'daha uzun', 'Probleme': 'sorunlar', 'Weg': 'yol' },
  questions: [
    { id: 'de-a2-h06.q1', t: 'mc', q: 'Köln ile Bonn arasındaki otoyolda ne var?', o: ['Bir kaza var.', 'Bir şantiye var.', 'Yol tamamen boş.'], a: 0,
      why: { 1: 'Şantiye **Siegburg** yakınındaki yolda, Köln–Bonn otoyolunda değil.', 2: 'Bu otoyolda kuyruk (*Stau*) var, yol boş değil.' },
      e: '*Auf der Autobahn zwischen Köln und Bonn gibt es einen Unfall.* *der Unfall, ¨-e* = kaza.' },
    { id: 'de-a2-h06.q2', t: 'cloze', q: 'Haberi tamamla:', text: 'Es gibt {1} Kilometer Stau. Sie brauchen etwa {2} Minuten länger.',
      gaps: {
        1: { a: ['fünf'], o: ['drei', 'fünf', 'zehn'], wrong: { 'drei': 'Üç kilometre anonsta geçmiyor.', 'zehn': 'On kilometre anonsta geçmiyor.' } },
        2: { a: ['dreißig'], o: ['zwanzig', 'dreißig', 'vierzig'], wrong: { 'zwanzig': 'Yirmi dakika anonsta geçmiyor.', 'vierzig': 'Kırk dakika anonsta geçmiyor.' } }
      },
      e: '*fünf Kilometer Stau* (5 km kuyruk) ve *dreißig Minuten länger* (30 dakika daha uzun). Sayıları dikkatle dinle!' },
    { id: 'de-a2-h06.q3', t: 'mc', q: 'Siegburg yakınındaki yol neden kapalı?', o: ['Şantiye yüzünden', 'Kaza yüzünden', 'Kar yüzünden'], a: 0,
      why: { 1: 'Kaza **otoyolda**, Siegburg yolunda değil.', 2: 'Kardan söz edilmiyor.' },
      e: '*wegen* + Genitiv = …den dolayı: *wegen einer Baustelle* (konuşma dilinde çoğu zaman Dativ da duyulur).' },
    { id: 'de-a2-h06.q4', t: 'listen', say: 'Die Straßenbahnen fahren ohne Probleme.', q: 'Cümleyi dinle. Hangisi doğru?', o: ['Die Straßenbahnen fahren ohne Probleme.', 'Die Straßenbahnen fahren nicht.', 'Die Straßenbahnen haben Verspätung.'], a: 0,
      why: { 1: 'Tam tersi: tramvaylar **çalışıyor**.', 2: 'Tramvayların gecikmesinden söz edilmiyor; **sorunsuz** çalışıyorlar.' },
      e: '*ohne* = -siz (*ohne Probleme* = sorunsuz). *die Straßenbahn, -en* = tramvay.' }
  ]
});

K.addText('de-a2-h07', {
  level: 'A2', kind: 'listen', scene: 'cafe', genre: 'gespraech', plays: 2,
  title: 'Im Café', sub: 'Kafede',
  lines: [
    { s: 'Kellner', g: 'm', t: 'Guten Morgen! Was möchten Sie trinken?', n: 'Günaydın! Ne içmek istersiniz?' },
    { s: 'Mia', g: 'f', t: 'Einen Kaffee mit Milch und ein Brötchen mit Käse, bitte.', n: 'Sütlü bir kahve ve peynirli bir küçük ekmek (Brötchen) lütfen.' },
    { s: 'Kellner', g: 'm', t: 'Leider haben wir heute kein Käsebrötchen mehr. Aber ich kann Ihnen ein Brötchen mit Schinken oder mit Marmelade bringen.', n: 'Maalesef bugün peynirli küçük ekmeğimiz (Käsebrötchen) kalmadı. Ama size jambonlu ya da reçelli bir küçük ekmek getirebilirim.' },
    { s: 'Mia', g: 'f', t: 'Dann nehme ich das mit Marmelade. Und ich möchte später auch ein Glas Wasser.', n: 'O zaman reçelliyi alayım. Ve sonra bir bardak su da istiyorum.' },
    { s: 'Kellner', g: 'm', t: 'Natürlich. Zusammen macht das vier Euro fünfzig.', n: 'Tabii. Hepsi birlikte dört euro elli.' },
    { s: 'Mia', g: 'f', t: 'Hier sind fünf Euro. Der Rest ist für Sie.', n: 'Buyurun beş euro. Üstü sizin.' }
  ],
  gloss: { 'Marmelade': 'reçel', 'Glas': 'bardak', 'natürlich': 'tabii', 'Rest': 'üstü, kalan', 'Schinken': 'jambon', 'Käsebrötchen': 'peynirli küçük ekmek' },
  questions: [
    { id: 'de-a2-h07.q1', t: 'mc', q: 'Bugün artık hangisi yok?', o: ['Peynirli küçük ekmek', 'Kahve', 'Su'], a: 0,
      why: { 1: 'Mia sütlü kahvesini alıyor.', 2: 'Mia suyu daha sonra alabilir.' },
      e: '*kein … mehr* = artık … yok: *Leider haben wir kein Käsebrötchen mehr.*' },
    { id: 'de-a2-h07.q2', t: 'cloze', q: 'Siparişi tamamla:', text: 'Mia nimmt einen Kaffee mit {1} und ein Brötchen mit {2}.',
      gaps: {
        1: { a: ['Milch'], wrong: { 'Zucker': 'Şekerden söz edilmiyor.', 'milch': 'İsimler **büyük** yazılır: *die Milch*.' } },
        2: { a: ['Marmelade'], wrong: { 'Schinken': 'Mia jambonlu olanı almıyor.', 'Käse': 'Peynirli küçük ekmek bitmiş.' } }
      },
      e: 'Mia *Kaffee mit Milch* sipariş eder, sonra *Brötchen mit Marmelade* alır (peynirli bitti).' },
    { id: 'de-a2-h07.q3', t: 'mc', q: 'Hepsi birlikte ne kadar tutuyor?', o: ['Dört euro elli', 'Beş euro', 'On dört euro'], a: 0,
      why: { 1: 'Beş euroyu Mia garsona verir; hesap 4,50’dir.', 2: '*vierzehn* (14) ile *vier* (4) kulağa benzer, ama söylenen *vier Euro fünfzig*.' },
      e: '*Zusammen macht das vier Euro fünfzig.* Mia beş euro verir: *Der Rest ist für Sie* = üstü kalsın.' },
    { id: 'de-a2-h07.q4', t: 'match', q: 'Eşleştir:', p: [['der Kaffee', 'mit Milch'], ['das Brötchen', 'mit Marmelade'], ['das Glas Wasser', 'später'], ['der Rest', 'für den Kellner']],
      e: '*mit* + Dativ: *mit Milch, mit Marmelade*. *später* = daha sonra.' }
  ]
});

K.addText('de-a2-h08', {
  level: 'A2', kind: 'listen', scene: 'nachbarn', genre: 'gespraech', plays: 2,
  title: 'Ein Paket für die Nachbarin', sub: 'Komşuya gelen paket',
  lines: [
    { s: 'Herr Weiß', g: 'm', t: 'Guten Abend, Frau Lenz. Ich habe heute ein Paket für Sie angenommen. Der Postbote war um zwei Uhr da.', n: 'İyi akşamlar Lenz Hanım. Bugün sizin için bir paket teslim aldım. Postacı saat ikide geldi.' },
    { s: 'Frau Lenz', g: 'f', t: 'Oh, wie nett! Vielen Dank. Wann kann ich es abholen?', n: 'Ah, ne kadar naziksiniz! Çok teşekkürler. Ne zaman alabilirim?' },
    { s: 'Herr Weiß', g: 'm', t: 'Ich bin heute bis acht Uhr zu Hause. Sie können gern klingeln.', n: 'Bugün saat sekize kadar evdeyim. Zili çalabilirsiniz.' },
    { s: 'Frau Lenz', g: 'f', t: 'Gut, ich komme gleich. Haben Sie am Samstag Zeit? Ich mache eine kleine Feier und möchte Sie einladen.', n: 'Tamam, hemen geliyorum. Cumartesi vaktiniz var mı? Küçük bir kutlama yapıyorum ve sizi davet etmek istiyorum.' },
    { s: 'Herr Weiß', g: 'm', t: 'Das ist nett, aber am Samstag bin ich leider bei meiner Tochter in Hamburg.', n: 'Çok nazik, ama cumartesi maalesef Hamburg’da kızımın yanındayım.' },
    { s: 'Frau Lenz', g: 'f', t: 'Schade. Vielleicht ein anderes Mal.', n: 'Yazık. Belki başka sefere.' }
  ],
  gloss: { 'angenommen': 'teslim aldım (annehmen)', 'Feier': 'kutlama, parti', 'gleich': 'hemen', 'klingeln': 'zili çalmak', 'Oh': 'ah', 'Postbote': 'postacı' },
  questions: [
    { id: 'de-a2-h08.q1', t: 'mc', q: 'Herr Weiß, Frau Lenz için ne yaptı?', o: ['Bir paket teslim aldı.', 'Bir paket gönderdi.', 'Pasta yaptı.'], a: 0,
      why: { 1: 'Bir şey göndermiyor; postacıdan paketi **teslim almış** (*angenommen*).', 2: 'Pastadan söz edilmiyor.' },
      e: '*annehmen* = (paketi) teslim almak. *Ich habe ein Paket für Sie angenommen.* (Perfekt: *angenommen*.)' },
    { id: 'de-a2-h08.q2', t: 'gap', q: 'Der Postbote war um ___ Uhr da.', a: ['zwei', '2'],
      wrong: { 'zwölf': '*zwölf* (12) kulağa *zwei* (2) gibi gelebilir, ama Herr Weiß **zwei** diyor.', 'drei': 'Üç söylenmiyor; postacı saat ikide geldi.' },
      e: '*um zwei Uhr* = saat ikide. Saat için *um* kullanılır.' },
    { id: 'de-a2-h08.q3', t: 'mc', q: 'Herr Weiß cumartesi günü partiye neden gelemiyor?', o: ['Hamburg’da kızını ziyaret edecek.', 'Çalışması gerek.', 'Hasta.'], a: 0,
      why: { 1: 'Herr Weiß işten söz etmiyor.', 2: 'Hastalıktan söz etmiyor.' },
      e: '*bei meiner Tochter* = kızımın yanında (*bei* + Dativ, *die Tochter, ¨-*).' },
    { id: 'de-a2-h08.q4', t: 'match', q: 'Eşleştir:', p: [['Herr Weiß', 'hat das Paket angenommen'], ['Frau Lenz', 'macht eine kleine Feier'], ['bis acht Uhr', 'Herr Weiß ist zu Hause'], ['am Samstag', 'Herr Weiß ist in Hamburg']],
      e: 'Diyalogda her konuşmacı ayrı bilgi verir; **kim** ne söylüyor diye dikkat et.' }
  ]
});

K.addText('de-a2-h09', {
  level: 'A2', kind: 'listen', scene: 'freizeit', genre: 'interview', plays: 3,
  title: 'Umfrage: Freizeit', sub: 'Anket: boş zaman',
  lines: [
    { s: 'Reporterin', g: 'f', t: 'Entschuldigung, wir machen eine Umfrage. Was machen Sie in Ihrer Freizeit am liebsten?', n: 'Affedersiniz, bir anket yapıyoruz. Boş zamanınızda en çok ne yapmayı seversiniz?' },
    { s: 'Herr Brandt', g: 'm', t: 'Ich gehe viel spazieren, besonders mit meinem Hund. Jeden Tag eine Stunde, auch bei schlechtem Wetter.', n: 'Çok yürüyüşe çıkarım, özellikle köpeğimle. Her gün bir saat, kötü havada bile.' },
    { s: 'Reporterin', g: 'f', t: 'Und am Wochenende?', n: 'Peki hafta sonu?' },
    { s: 'Herr Brandt', g: 'm', t: 'Da treffe ich meine Freunde. Wir spielen Fußball im Park oder gehen zusammen essen.', n: 'O zaman arkadaşlarımla buluşurum. Parkta futbol oynarız ya da birlikte yemeğe gideriz.' },
    { s: 'Reporterin', g: 'f', t: 'Sehen Sie auch viel fern?', n: 'Çok televizyon da izler misiniz?' },
    { s: 'Herr Brandt', g: 'm', t: 'Nein, kaum. Nur am Sonntagabend einen Film. Ich lese lieber ein Buch.', n: 'Hayır, neredeyse hiç. Sadece pazar akşamı bir film. Daha çok kitap okumayı severim.' }
  ],
  gloss: { 'fern': 'uzak (fernsehen: tv izlemek)', 'Hund': 'köpek', 'kaum': 'neredeyse hiç', 'Umfrage': 'anket' },
  questions: [
    { id: 'de-a2-h09.q1', t: 'mc', q: 'Herr Brandt her gün ne yapıyor?', o: ['Köpeğiyle bir saat yürüyüşe çıkıyor.', 'Bir saat futbol oynuyor.', 'Bir saat kitap okuyor.'], a: 0,
      why: { 1: 'Futbolu sadece **hafta sonu** arkadaşlarıyla oynuyor.', 2: 'Okumayı seviyor, ama “her gün bir saat” yürüyüş için söyleniyor.' },
      e: '*Jeden Tag eine Stunde* = her gün bir saat (zaman için Akkusativ). *spazieren gehen* = yürüyüşe çıkmak.' },
    { id: 'de-a2-h09.q2', t: 'gap', q: 'Er geht jeden Tag eine ___ spazieren.', a: ['Stunde'],
      wrong: { 'stunde': 'İsimler **büyük** yazılır: *die Stunde*.', 'Minute': 'Herr Brandt *eine Stunde* (bir saat) der, bir dakika değil.' },
      e: '*eine Stunde* = bir saat (*die Stunde, -n*). İsim büyük yazılır.' },
    { id: 'de-a2-h09.q3', t: 'match', q: 'Eşleştir:', p: [['jeden Tag', 'spazieren gehen'], ['am Wochenende', 'Freunde treffen'], ['am Sonntagabend', 'einen Film sehen'], ['lieber', 'ein Buch lesen']],
      e: 'Zaman ifadeleri (*jeden Tag, am Wochenende, am Sonntagabend*) neyin ne zaman olduğunu gösterir.' },
    { id: 'de-a2-h09.q4', t: 'listen', say: 'Nein, kaum. Nur am Sonntagabend einen Film.', q: 'Cümleyi dinle. Herr Brandt ne zaman televizyon izliyor?', o: ['Sadece pazar akşamı', 'Her akşam', 'Hiç'], a: 0,
      why: { 1: '*kaum* “neredeyse hiç” demektir, “her akşam” değil.', 2: '*kaum* ile *nie* aynı değil: haftada bir film izliyor.' },
      e: '*kaum* = neredeyse hiç; *nur* = sadece. İkisi birlikte: çok nadiren.' }
  ]
});

K.addText('de-a2-h10', {
  level: 'A2', kind: 'listen', scene: 'arbeit', genre: 'interview', plays: 3,
  title: 'Interview mit einer Bäckerin', sub: 'Bir fırıncıyla röportaj',
  lines: [
    { s: 'Moderator', g: 'm', t: 'Heute spreche ich mit Frau Kaya. Sie ist Bäckerin. Frau Kaya, wann beginnt Ihr Arbeitstag?', n: 'Bugün Kaya Hanım ile konuşuyorum. O bir fırıncı. Kaya Hanım, iş gününüz ne zaman başlıyor?' },
    { s: 'Frau Kaya', g: 'f', t: 'Sehr früh, schon um drei Uhr nachts. Dann mache ich Brot und Brötchen. Um sechs Uhr öffnet der Laden.', n: 'Çok erken, gece saat üçte. Sonra ekmek ve küçük ekmekler (Brötchen) yaparım. Saat altıda dükkân açılır.' },
    { s: 'Moderator', g: 'm', t: 'Das ist wirklich früh! Wann haben Sie Feierabend?', n: 'Bu gerçekten erken! Ne zaman paydos edersiniz?' },
    { s: 'Frau Kaya', g: 'f', t: 'Um elf Uhr. Dann schlafe ich ein paar Stunden. Am Nachmittag habe ich Zeit für meine Kinder.', n: 'Saat on birde. Sonra birkaç saat uyurum. Öğleden sonra çocuklarım için vaktim olur.' },
    { s: 'Moderator', g: 'm', t: 'Und was gefällt Ihnen an der Arbeit?', n: 'Peki işinizde neyi beğeniyorsunuz?' },
    { s: 'Frau Kaya', g: 'f', t: 'Ich mag den Geruch von frischem Brot, und die Kunden sind meistens nett. Am Wochenende arbeite ich nicht gern, denn dann hat meine Familie frei.', n: 'Taze ekmeğin kokusunu seviyorum, müşteriler de çoğunlukla nazik. Hafta sonu çalışmayı pek sevmiyorum, çünkü o zaman ailem evde.' }
  ],
  gloss: { 'Feierabend': 'iş çıkışı, paydos', 'Geruch': 'koku', 'frischem': 'taze' },
  questions: [
    { id: 'de-a2-h10.q1', t: 'mc', q: 'Kaya Hanım’ın iş günü ne zaman başlıyor?', o: ['Gece saat üçte', 'Sabah saat altıda', 'Saat on birde'], a: 0,
      why: { 1: 'Saat altıda **dükkân** açılır; çalışma daha erken başlar.', 2: 'Saat on birde **paydos** eder.' },
      e: '*Schon um drei Uhr nachts.* *schon* erken olduğunu vurgular. *der Feierabend* = iş bitişi.' },
    { id: 'de-a2-h10.q2', t: 'gap', q: 'Der Laden öffnet um ___ Uhr.', a: ['sechs', '6'],
      wrong: { 'sieben': '*sieben* (7) ile *sechs* (6) farklı; Kaya Hanım **sechs** der.', 'sechzehn': '*sechzehn* (16) sabah açılan fırın için olmaz; söylenen *sechs* (6).' },
      e: '*um sechs Uhr* = saat altıda. *öffnen* = açmak, *der Laden* = dükkân.' },
    { id: 'de-a2-h10.q3', t: 'cloze', q: 'Tamamla:', text: 'Frau Kaya hat um {1} Uhr Feierabend. Am {2} hat sie Zeit für ihre Kinder.',
      gaps: {
        1: { a: ['elf'], o: ['elf', 'zwölf', 'sechs'], wrong: { 'zwölf': '*zwölf* (12) kulağa *elf* (11) gibi gelebilir, ama Kaya Hanım **elf** der.', 'sechs': 'Saat altıda dükkân açılır; paydos daha sonradır.' } },
        2: { a: ['Nachmittag'], o: ['Morgen', 'Nachmittag', 'Abend'], wrong: { 'Morgen': 'Sabah zaten çok erken çalışıyor.', 'Abend': 'Akşamdan söz etmiyor.' } }
      },
      e: '*Um elf Uhr* paydos, *am Nachmittag* çocuklara vakit. Ezberle: *am Morgen, am Nachmittag, am Abend* (gün bölümleri *am* ile).' },
    { id: 'de-a2-h10.q4', t: 'mc', q: 'Kaya Hanım işinde neyi seviyor?', o: ['Taze ekmeğin kokusunu ve nazik müşterileri', 'Hafta sonu çalışmayı', 'Erken başlamayı'], a: 0,
      why: { 1: 'Hafta sonu çalışmayı **sevmiyor** (*nicht gern*), çünkü ailesi evde.', 2: 'Erken başlamayı avantaj olarak söylemiyor; sunucu da “gerçekten erken” diyor.' },
      e: '*Ich mag den Geruch von frischem Brot* = taze ekmeğin kokusunu seviyorum. *gern* / *nicht gern* neyi sevip sevmediğini anlatır.' }
  ]
});

})(window.KOPRU);
