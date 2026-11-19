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

})(window.KOPRU);
