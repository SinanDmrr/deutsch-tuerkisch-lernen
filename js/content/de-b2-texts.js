/* Deutsch B2 – Lesetexte und Hörtexte (Erklärungen/Fragen auf Türkisch)
 * Paket P1 „Abwägen & argumentieren“: Lesetexte de-b2-r01–r03 (200–320 Wörter), Hörtexte de-b2-h01–h03 (120–200 Wörter; h01 = Diskussion mit drei Sprechern).
 * Fragen-IDs '<textId>.q<n>' sind fest und werden nie wiederverwendet. Je Text eine Sprachmittlungsfrage (letzte Frage).
 */
(function (K) {

K.addText('de-b2-r01', {
  level: 'B2', kind: 'read', genre: 'artikel',
  title: 'Homeoffice: Fluch oder Segen?', sub: 'Evden çalışma: lanet mi, nimet mi?',
  body: [
    "Seit die Arbeit von zu Hause für viele Beschäftigte zum Alltag gehört, streiten Arbeitgeber und Mitarbeiter darüber, wie viel Homeoffice sinnvoll ist. Beide Seiten haben gute Argumente.",
    "Die Befürworter verweisen zunächst auf die Zeit, die man spart. Wer nicht pendeln muss, gewinnt oft mehr als eine Stunde pro Tag und kann Beruf und Familie besser vereinbaren. Viele Beschäftigte sind davon überzeugt, zu Hause konzentrierter zu arbeiten, weil das Telefon seltener klingelt und niemand spontan ins Zimmer kommt. Die Unternehmen sparen dadurch teure Büroflächen, sofern sie ihre Arbeitsplätze wirklich teilen.",
    "Die Skeptiker bezweifeln allerdings, dass diese Vorteile für alle gelten. Zwar lassen sich einzelne Aufgaben zu Hause ruhiger erledigen, aber ein Team lebt vom Austausch. Neue Kollegen haben bislang vieles vor allem im Gespräch auf dem Flur gelernt. Wer hingegen nur noch Videokonferenzen sieht, fühlt sich schnell isoliert. Außerdem verschwimmt die Grenze zwischen Arbeit und Freizeit: Mancher beantwortet abends noch E-Mails, obwohl der Feierabend längst begonnen hat.",
    "Eine Studie, die ein Beratungsunternehmen im vergangenen Jahr vorgestellt hat, zeigt ein gemischtes Bild. Während die Leistung bei klar umrissenen Aufgaben meist stieg, sank die Zufriedenheit der Beschäftigten, die zu Hause keinen eigenen Arbeitsplatz hatten. Das Ergebnis ist folglich weniger eindeutig, als beide Lager gern behaupten.",
    "Viele Betriebe setzen inzwischen auf ein Mischmodell: zwei oder drei Tage im Büro, den Rest zu Hause. Voraussetzung ist, dass die Regeln klar sind und niemand benachteiligt wird, der häufiger ins Büro kommt. Wer Verantwortung für ein Team trägt, sollte außerdem prüfen, ob sich Besprechungen auch digital sinnvoll führen lassen. Dennoch bleibt das Büro für Gespräche, die Vertrauen schaffen, ein wichtiger Ort. Anstelle von starren Vorgaben brauchen die meisten Teams vor allem Absprachen, die sich bewähren.",
    "Fazit: Homeoffice ist weder ein Allheilmittel noch ein Risiko an sich. Entscheidend ist, wie ein Betrieb es organisiert."
  ],
  gloss: { 'Beschäftigte': 'çalışanlar', 'Arbeitgeber': 'işveren', 'Befürworter': 'savunanlar, destekleyenler', 'pendeln': 'ev ile iş yeri arasında gidip gelmek', 'vereinbaren': 'bağdaştırmak, uyumlu hâle getirmek', 'Büroflächen': 'ofis alanları', 'Skeptiker': 'kuşkucular', 'bezweifeln': 'şüphe etmek', 'bislang': 'şimdiye kadar', 'isoliert': 'yalnızlaşmış, tecrit olmuş', 'verschwimmt': 'bulanıklaşır (verschwimmen)', 'Feierabend': 'iş çıkışı, mesai sonrası', 'Beratungsunternehmen': 'danışmanlık şirketi', 'umrissenen': 'sınırları belli (umreißen)', 'Zufriedenheit': 'memnuniyet', 'folglich': 'dolayısıyla', 'Lager': 'kamp, taraf', 'Mischmodell': 'karma model', 'benachteiligt': 'dezavantajlı kılınmış (benachteiligen)', 'starren': 'katı', 'Absprachen': 'anlaşmalar, ön görüşmeler', 'bewähren': 'denenip işe yaradığı görülmek', 'Allheilmittel': 'her derde deva' },
  questions: [
    { id: 'de-b2-r01.q1', t: 'mc', q: 'Metne göre evden çalışmanın lehindeki argümanlardan biri hangisidir?', o: ['Yolda zaman kazanılır ve iş ile aile daha iyi bağdaştırılır.', 'Çalışanlar daha az maaş alır.', 'Takım toplantıları hiç gerekmez.', 'Şirketler daha çok ofis kiralar.'], a: 0,
      why: { 1: 'Maaştan söz edilmiyor.', 2: 'Metin tersine toplantıların dijital de iyi yürütülüp yürütülemeyeceğini sorguluyor; “hiç gerekmez” denmiyor.', 3: 'Tam tersi: şirketler pahalı ofis alanından **tasarruf eder** (*sparen teure Büroflächen*).' },
      e: '*Wer nicht pendeln muss, gewinnt oft mehr als eine Stunde pro Tag und kann Beruf und Familie besser vereinbaren.* – Yolda kazanılan zaman, savunanların ilk argümanıdır.' },
    { id: 'de-b2-r01.q2', t: 'match', q: 'Tarafı ya da kaynağı, metindeki ifadeyle eşleştir:', p: [['Die Befürworter', 'Zeit sparen, Beruf und Familie besser vereinbaren'], ['Die Skeptiker', 'Gefahr der Isolation und fehlender Austausch'], ['Die Studie', 'Leistung stieg bei klaren Aufgaben, Zufriedenheit sank ohne eigenen Arbeitsplatz'], ['Das Mischmodell', 'zwei oder drei Tage im Büro, der Rest zu Hause']],
      e: 'Metin dört bakış açısını sırayla anlatır: savunanlar (zaman), kuşkucular (izolasyon), araştırma (karışık sonuç) ve karma model. *Hingegen* ve *während* bu karşıtlıkları bağlar.' },
    { id: 'de-b2-r01.q3', t: 'mc', q: 'Araştırmanın sonucu metinde nasıl özetleniyor?', o: ['Sonuç düşünüldüğünden daha az nettir.', 'Evden çalışma herkesi daha mutlu etmiştir.', 'Evden çalışanların verimi hep düşmüştür.', 'Araştırma ofis çalışanlarını incelememiştir.'], a: 0,
      why: { 1: 'Hayır: evde kendi çalışma alanı olmayanların memnuniyeti **düştü**.', 2: 'Net kalıp yok: açık görevlerde verim çoğunlukla **arttı**.', 3: 'Metinde araştırmanın kimleri incelediği ayrıntılı verilmiyor; bu seçenek metne dayanmıyor. Soru araştırmanın **sonucu** ile ilgili.' },
      e: '*Das Ergebnis ist folglich weniger eindeutig, als beide Lager gern behaupten.* – iki yanlı sonuç: bir yerde verim arttı, bir yerde memnuniyet düştü.' },
    { id: 'de-b2-r01.q4', t: 'gap', q: 'Das Ergebnis ist ___ weniger eindeutig, als beide Lager behaupten. (dolayısıyla, bu nedenle)', a: ['folglich', 'somit', 'daher', 'deshalb', 'infolgedessen', 'demnach', 'also', 'deswegen', 'darum'],
      wrong: { 'obwohl': '„obwohl“ bir yan cümle açar; burada ise ana cümlenin içinde bir **sonuç zarfı** gerekir.', 'trotzdem': '„trotzdem“ karşıtlık bildirir; burada ise önceki araştırmadan çıkan **sonuç** anlatılıyor.', 'während': '„während“ karşıtlık ya da eşzamanlılık bildirir; sonuç için değil.' },
      e: '*folglich* = dolayısıyla: önceki cümlelerden çıkan sonucu bildirir. Metinde *ist folglich weniger eindeutig* – zarf özneden sonra, ortada da durabilir.' },
    { id: 'de-b2-r01.q5', t: 'mc', q: 'Türkçe konuşan bir arkadaşın makalenin ne anlattığını soruyor. Hangi özet doğru?', o: ['Evden çalışmanın hem avantajları hem riskleri var; birçok şirket karma model deniyor, başarı ise kuralların nasıl düzenlendiğine bağlı.', 'Makale evden çalışmayı kesin olarak yasaklamayı öneriyor.', 'Makale ofiste çalışmanın artık gereksiz olduğunu savunuyor.', 'Makale yalnızca yeni bir ofis binasının açılışını duyuruyor.'], a: 0,
      why: { 1: 'Makale hiçbir yasak önermiyor; iki tarafı dengeli anlatıyor.', 2: 'Tam tersi: ofis, güven yaratan konuşmalar için hâlâ önemli bir yer olarak anılıyor.', 3: 'Bina açılışından söz edilmiyor.' },
      e: 'Sprachmittlung: Ana fikri kendi sözlerinle aktarırsın. Metin şunu söyler: iki tarafın da haklı noktaları var, karma model yaygınlaşıyor, kararı belirleyen **organizasyon**.' }
  ]
});

K.addText('de-b2-r02', {
  level: 'B2', kind: 'read', genre: 'email',
  title: 'Testphase für ein neues Arbeitszeitmodell', sub: 'Yeni bir çalışma süresi modeli için deneme dönemi',
  body: [
    "Betreff: Testphase für ein neues Arbeitszeitmodell",
    "Liebe Kolleginnen und Kollegen",
    "Wie in der Betriebsversammlung angekündigt, testen wir ab dem ersten März ein neues Arbeitszeitmodell. Die Wochenarbeitszeit bleibt gleich, sie verteilt sich aber auf vier statt auf fünf Tage. Wer teilnimmt, arbeitet also an vier Tagen etwas länger und hat dafür jede Woche ein langes Wochenende.",
    "Die Testphase dauert sechs Monate. Der Betriebsrat hat zugestimmt, sodass für Ihren Vertrag keine Nachteile entstehen. Die Kernzeit, in der alle erreichbar sein müssen, ist so kurz gewählt, dass auch Teilzeitkräfte teilnehmen können. Sie gilt nur von zehn bis vierzehn Uhr.",
    "Voraussetzung ist, dass Ihre Abteilung zustimmt. Sofern Kundentermine betroffen sind, sprechen Sie bitte vorher mit Ihrer Teamleitung. Termine am freien Tag müssen verschoben werden, es sei denn, ein Kollege übernimmt sie. Gibt es in Ihrem Team dafür keine Lösung, melden Sie sich bei mir, dann suchen wir gemeinsam eine Lösung.",
    "Bitte füllen Sie das beigefügte Formular aus und schicken Sie es bis Mitte Februar unterschrieben an die Personalabteilung zurück. Ohne Ihre Unterschrift können wir Ihre Teilnahme leider nicht berücksichtigen. Wer sich nicht anmeldet, arbeitet wie bisher an fünf Tagen.",
    "Nach der Testphase werten wir die Ergebnisse gemeinsam aus. Sollte sich zeigen, dass die Qualität unserer Arbeit leidet, beenden wir den Test früher. Mittlerweile haben mehrere Betriebe in der Region gute Erfahrungen damit gemacht, wir sind daher zuversichtlich.",
    "Bei Fragen erreichen Sie mich jederzeit.",
    "Mit freundlichen Grüßen",
    "Katrin Maurer",
    "Geschäftsführung"
  ],
  gloss: { 'Arbeitszeitmodell': 'çalışma süresi modeli', 'Betriebsversammlung': 'işyeri toplantısı', 'Wochenarbeitszeit': 'haftalık çalışma süresi', 'Betriebsrat': 'işyeri çalışan temsilciliği', 'Nachteile': 'dezavantajlar', 'Kernzeit': 'zorunlu çalışma saatleri (herkesin ulaşılabilir olduğu süre)', 'Teilzeitkräfte': 'yarı zamanlı çalışanlar', 'Voraussetzung': 'ön koşul', 'Teamleitung': 'ekip yönetimi', 'beigefügte': 'ekli (beifügen)', 'Personalabteilung': 'insan kaynakları bölümü', 'Unterschrift': 'imza', 'berücksichtigen': 'dikkate almak', 'werten': 'değerlendirmek (auswerten)', 'zuversichtlich': 'umutlu, iyimser' },
  questions: [
    { id: 'de-b2-r02.q1', t: 'mc', q: 'Yeni modelde ne değişiyor?', o: ['Haftalık çalışma süresi aynı kalır ama dört güne yayılır.', 'Haftalık çalışma süresi kısalır ve beş güne yayılır.', 'Herkes evden çalışmak zorundadır.', 'Maaşlar dört güne göre ödenir.'], a: 0,
      why: { 1: 'Süre kısalmıyor: *Die Wochenarbeitszeit bleibt gleich*.', 2: 'Evden çalışmaktan söz edilmiyor; konu çalışma günlerinin dağılımı.', 3: 'Maaştan söz edilmiyor; yalnızca “sözleşmede dezavantaj yok” deniyor.' },
      e: '*Die Wochenarbeitszeit bleibt gleich, sie verteilt sich aber auf vier statt auf fünf Tage.* – aynı süre, daha az gün, günler biraz daha uzun.' },
    { id: 'de-b2-r02.q2', t: 'mc', q: 'Çekirdek saat (Kernzeit) neden bu kadar kısa belirlenmiş?', o: ['Yarı zamanlı çalışanlar da katılabilsin diye.', 'Müşterilerin yalnızca öğleden sonra aranabilmesi için.', 'Yönetim daha az toplantı yapmak istediği için.', 'Çalışanlar akşam fazla mesai yapabilsin diye.'], a: 0,
      why: { 1: 'Müşteri aramalarından söz edilmiyor.', 2: 'Toplantı sayısı konu değil.', 3: 'Fazla mesai bu bağlamda geçmiyor.' },
      e: '*Die Kernzeit … ist so kurz gewählt, dass auch Teilzeitkräfte teilnehmen können.* – *so … dass* ile sonuç: kısa olduğu için herkes katılabilir.' },
    { id: 'de-b2-r02.q3', t: 'gap', q: 'Termine am freien Tag müssen verschoben werden, ___ ein Kollege übernimmt sie.', a: ['es sei denn'],
      wrong: { 'weil': '„weil“ sebep bildirir; burada **istisna** gerekir: randevu ertelenir, bir meslektaş devralmadıkça.', 'sodass': '„sodass“ sonuç bildirir; istisna için değil.', 'falls': '„falls“ + yan cümle olurdu (fiil sonda): *falls ein Kollege sie übernimmt*. Cümlede fiil ana cümle sırasında olduğu için **es sei denn** doğru.' },
      e: '*es sei denn, …* = “… olmadıkça”. Ardından ana cümle sırasıyla fiil ikinci sırada gelir: *es sei denn, ein Kollege übernimmt sie.*' },
    { id: 'de-b2-r02.q4', t: 'mc', q: 'Katılmak isteyen ne yapmalı?', o: ['Formu doldurup imzalayarak şubat ortasına kadar insan kaynaklarına geri göndermeli.', 'Yalnızca ekip lideriyle sözlü konuşmalı.', 'Mart ayında yazılı itiraz etmeli.', 'Hiçbir şey yapmasına gerek yok; herkes otomatik katılır.'], a: 0,
      why: { 1: 'Ekip lideriyle konuşmak yalnızca müşteri randevuları söz konusuysa gerekir; kayıt için form gerekli.', 2: 'İtiraz değil, **başvuru** isteniyor ve süre şubat ortası.', 3: 'Tersine: katılmayan eskisi gibi beş gün çalışır; katılmak için form gerekir.' },
      e: '*Bitte füllen Sie das beigefügte Formular aus und schicken Sie es bis Mitte Februar unterschrieben an die Personalabteilung zurück.* – formu doldur, imzala, geri gönder.' },
    { id: 'de-b2-r02.q5', t: 'mc', q: 'Bir meslektaşın, e-postanın ne hakkında olduğunu Türkçe soruyor. Hangi özet doğru?', o: ['Yönetim altı aylık bir deneme olarak dört günlük hafta öneriyor; katılmak isteyenlerin formu imzalayıp şubat ortasına kadar geri göndermesi gerekiyor.', 'Yönetim tüm çalışanları mart ayından itibaren işten çıkarıyor.', 'Yönetim maaşları dört güne göre düşürüyor.', 'Yönetim ofisi taşıyor ve yeni adres bildiriyor.'], a: 0,
      why: { 1: 'İşten çıkarmadan söz edilmiyor.', 2: 'Maaş düşürme yok; yalnızca sözleşmede dezavantaj olmadığı belirtiliyor.', 3: 'Ofis taşıma konusu geçmiyor.' },
      e: 'Sprachmittlung: Konu (dört günlük hafta), süre (altı ay), koşul (bölüm onayı) ve yapılacak (form, imza, son tarih) birlikte söylenir.' }
  ]
});

K.addText('de-b2-r03', {
  level: 'B2', kind: 'read', genre: 'email',
  title: 'Stellungnahme zu Ihrer Beschwerde', sub: 'Şikâyetinize açıklama',
  body: [
    "Betreff: Ihre Beschwerde vom Montag, Bestellung Waschmaschine",
    "Sehr geehrter Herr Brandt",
    "Vielen Dank für Ihre Nachricht. Wir bedauern sehr, dass die bestellte Waschmaschine nicht wie vereinbart bei Ihnen angekommen ist, und bitten Sie um Entschuldigung für die Unannehmlichkeiten.",
    "Wir haben den Vorgang intern genau geprüft und auch mit dem Lieferdienst gesprochen. Der Lieferdienst wollte die Maschine zwar am vereinbarten Tag zustellen, hat Sie aber nicht angetroffen. Ein Anruf, wie er vorgeschrieben ist, wurde leider nicht dokumentiert. Dieser Fehler liegt bei uns, und wir übernehmen dafür die Verantwortung.",
    "Wir bieten Ihnen folgende Lösung an: Die Maschine wird kostenlos am Freitag zwischen acht und zwölf Uhr geliefert, sodass Sie nicht den ganzen Tag warten müssen. Außerdem schreiben wir Ihnen fünf Prozent des Kaufpreises gut. Sofern Sie am Freitag nicht zu Hause sein können, nennen Sie uns bitte bis Mittwoch einen neuen Termin. Andernfalls verschiebt sich die Lieferung um mindestens eine Woche.",
    "Wir verstehen, dass Sie verärgert sind. Dennoch bitten wir Sie um Verständnis, dass wir die Ware nicht früher liefern können, es sei denn, Sie holen sie persönlich im Lager ab. Dann wäre sie sofort verfügbar. Allerdings müssten Sie die Maschine dann selbst transportieren.",
    "Für weitere Fragen stehen wir Ihnen jederzeit zur Verfügung.",
    "Mit freundlichen Grüßen",
    "Nadine Albers",
    "Kundenservice"
  ],
  gloss: { 'Beschwerde': 'şikâyet', 'bedauern': 'üzüntü duymak, esef etmek', 'Unannehmlichkeiten': 'rahatsızlık, sıkıntı', 'Vorgang': 'olay, işlem dosyası', 'zustellen': 'teslim etmek', 'angetroffen': 'bulunmuş (antreffen)', 'dokumentiert': 'belgelenmiş, kayda geçirilmiş', 'Verantwortung': 'sorumluluk', 'gut': 'hesaba alacak yazmak (gutschreiben)', 'Kaufpreises': 'satış fiyatının', 'verärgert': 'öfkeli, sinirli', 'Verständnis': 'anlayış', 'Lager': 'depo', 'verfügbar': 'mevcut, hazır' },
  questions: [
    { id: 'de-b2-r03.q1', t: 'mc', q: 'Teslimat neden gerçekleşmedi?', o: ['Teslimatçı müşteriyi bulamadı ve gerekli arama kaydedilmedi.', 'Makine depoda yoktu.', 'Müşteri siparişi iptal etmişti.', 'Teslimatçı yanlış makine getirdi.'], a: 0,
      why: { 1: 'Metinde makine stoğundan söz edilmiyor.', 2: 'İptal söz konusu değil; müşteri şikâyet ediyor.', 3: 'Yanlış ürün değil, **teslim edilemeyen** ürün söz konusu.' },
      e: '*Der Lieferdienst wollte die Maschine zwar am vereinbarten Tag zustellen, hat Sie aber nicht angetroffen. Ein Anruf … wurde leider nicht dokumentiert.* – *zwar … aber* ile iki tarafı birlikte söyler.' },
    { id: 'de-b2-r03.q2', t: 'mc', q: 'Şirket hatanın kime ait olduğunu söylüyor?', o: ['Hata şirkete ait; sorumluluğu üstleniyor.', 'Hata müşteriye ait.', 'Hata nakliye şirketine ait; şirket sorumlu değil.', 'Hatanın kime ait olduğu belirsiz.'], a: 0,
      why: { 1: 'Müşteri suçlanmıyor; şirket özür diliyor.', 2: 'Metin açıkça *Dieser Fehler liegt bei uns* diyor.', 3: 'Belirsizlik yok: şirket sorumluluğu kabul ediyor.' },
      e: '*Dieser Fehler liegt bei uns, und wir übernehmen dafür die Verantwortung.* – resmî bir özürde sorumluluğu açıkça üstlenmek güven verir.' },
    { id: 'de-b2-r03.q3', t: 'gap', q: '___ Sie am Freitag nicht zu Hause sein können, nennen Sie uns bitte bis Mittwoch einen neuen Termin.', a: ['Sofern', 'Falls', 'Wenn'],
      wrong: { 'Obwohl': '„obwohl“ karşıtlık bildirir; burada **koşul** gerekir: cuma günü evde olamazsanız.', 'Weil': '„weil“ sebep bildirir; olasılık değil.', 'Dennoch': '„dennoch“ bir zarftır, yan cümle açmaz; yan cümlede fiil sona gitmeliydi.' },
      e: '*Sofern Sie … nicht zu Hause sein können, …* resmî yazıda koşul bildirir (“… olduğu takdirde”). Yan cümle önde ise ana cümle fiille başlar: *nennen Sie uns …*' },
    { id: 'de-b2-r03.q4', t: 'mc', q: 'Müşteri yeni bir randevu bildirmezse ne olur?', o: ['Teslimat en az bir hafta ertelenir.', 'Sipariş iptal edilir.', 'Makine ertesi gün gönderilir.', 'Müşteri ücret öder.'], a: 0,
      why: { 1: 'İptalden söz edilmiyor.', 2: 'Tersine: teslimat gecikecek.', 3: 'Ek ücretten söz edilmiyor; teslimat ücretsiz.' },
      e: '*Andernfalls verschiebt sich die Lieferung um mindestens eine Woche.* – *andernfalls* = aksi takdirde; cümle başında zarf olduğu için fiil hemen ardından gelir.' },
    { id: 'de-b2-r03.q5', t: 'mc', q: 'Bir arkadaşın bu e-postayı Türkçe özetlemeni istiyor. Hangi özet doğru?', o: ['Şirket teslimat hatası için özür diliyor, hatayı üstleniyor, ücretsiz yeni teslimat ve yüzde beş tutarında alacak kaydı (iade) öneriyor; müşteri cuma günü evde değilse çarşambaya kadar haber vermeli.', 'Şirket şikâyeti reddediyor ve müşteriye parayı geri ödemeyeceğini bildiriyor.', 'Şirket makineyi geri çağırıyor ve müşteriden depoya getirmesini istiyor.', 'Şirket müşteriden bir ek form doldurmasını istiyor.'], a: 0,
      why: { 1: 'Şikâyet reddedilmiyor; hata kabul ediliyor ve çözüm sunuluyor.', 2: 'Müşteri makineyi ancak isterse depodan alabilir; zorunlu değil.', 3: 'Form doldurmaktan söz edilmiyor.' },
      e: 'Sprachmittlung: Özür, sorumluluğun kabulü, çözüm (teslimat ve indirim) ve müşterinin yapması gereken (çarşambaya kadar yeni randevu) kısa söylenir.' }
  ]
});

K.addText('de-b2-h01', {
  level: 'B2', kind: 'listen', genre: 'radio', plays: 2,
  title: 'Vier-Tage-Woche: Lösung oder Luxus?', sub: 'Dört günlük hafta: çözüm mü lüks mü? (radyo tartışması)',
  lines: [
    { s: 'Hanna Weber', g: 'f', t: 'Willkommen bei „Arbeitswelt aktuell“. Heute fragen wir: Ist die Vier-Tage-Woche eine Lösung oder ein Luxus? Bei mir sind Petra Lindner, Personalleiterin eines Maschinenbauers, und Jonas Köhler, der für mittelständische Betriebe spricht. Frau Lindner, Sie haben das Modell getestet. Wie lief es?', n: 'Hoş geldiniz, “Arbeitswelt aktuell” programındayız. Bugün soruyoruz: Dört günlük hafta bir çözüm mü, yoksa lüks mü? Yanımda bir makine üreticisinin insan kaynakları müdürü Petra Lindner ile orta ölçekli işletmeler adına konuşan Jonas Köhler var. Bayan Lindner, modeli denediniz. Nasıl geçti?' },
    { s: 'Petra Lindner', g: 'f', t: 'Besser, als wir dachten. Die Beschäftigten sind ausgeruhter, und die Krankmeldungen sind zurückgegangen. Wir hatten zwar anfangs Sorge, dass Kunden uns nicht erreichen, aber wir haben die Telefonzeiten geschickt verteilt.', n: 'Düşündüğümüzden iyi geçti. Çalışanlar daha dinlenmiş ve hastalık bildirimleri azaldı. Başta müşterilerin bize ulaşamayacağından endişe etmiştik gerçi, ama telefon saatlerini akıllıca dağıttık.' },
    { s: 'Hanna Weber', g: 'f', t: 'Herr Köhler, Sie sind skeptisch?', n: 'Bay Köhler, siz kuşkucusunuz, değil mi?' },
    { s: 'Jonas Köhler', g: 'm', t: 'Ich bin nicht dagegen, Frau Weber, aber nicht jeder Betrieb kann das. In einer Werkstatt mit fünf Leuten fehlt sofort ein Fünftel, wenn jemand frei hat. Große Betriebe können Schichten tauschen, kleine hingegen kaum. Folglich wären kleine Firmen benachteiligt, es sei denn, der Staat hilft bei den Kosten.', n: 'Karşı değilim, Bayan Weber, ama her işletme bunu yapamaz. Beş kişilik bir atölyede biri izinliyse hemen beşte bir eksik kalır. Büyük işletmeler vardiya değiştirebilir, küçükler ise pek zor. Dolayısıyla devlet maliyete yardım etmedikçe küçük firmalar dezavantajlı olur.' },
    { s: 'Petra Lindner', g: 'f', t: 'Herr Köhler, das sehe ich anders: Auch kleine Betriebe finden dadurch leichter Personal. Wer weniger Tage arbeiten muss, bewirbt sich eher. Allerdings gebe ich zu, dass es nicht für alle Berufe passt.', n: 'Bay Köhler, ben buna farklı bakıyorum: Küçük işletmeler de bu sayede daha kolay personel buluyor. Daha az gün çalışması gereken biri daha kolay başvurur. Yine de her meslek için uygun olmadığını kabul ediyorum.' },
    { s: 'Jonas Köhler', g: 'm', t: 'Da sind wir uns einig, Frau Lindner. Mein Vorschlag: Jeder Betrieb entscheidet selbst, sofern die Beschäftigten zustimmen.', n: 'Bu noktada hemfikiriz, Bayan Lindner. Önerim: Çalışanlar onay verdiği sürece her işletme kendisi karar versin.' },
    { s: 'Hanna Weber', g: 'f', t: 'Das klingt nach einem Kompromiss. Vielen Dank Ihnen beiden.', n: 'Bu bir uzlaşmaya benziyor. İkinize de çok teşekkürler.' }
  ],
  gloss: { 'Luxus': 'lüks', 'Personalleiterin': 'insan kaynakları müdürü (kadın)', 'Maschinenbauers': 'makine imalatçısının', 'mittelständische': 'orta ölçekli', 'Krankmeldungen': 'hastalık bildirimleri', 'skeptisch': 'kuşkulu', 'Werkstatt': 'atölye', 'Schichten': 'vardiyalar', 'benachteiligt': 'dezavantajlı', 'Kompromiss': 'uzlaşma' },
  questions: [
    { id: 'de-b2-h01.q1', t: 'mc', q: 'Petra Lindner dört günlük haftayı denediğinde ne oldu?', o: ['Çalışanlar daha dinlenmiş oldu ve hastalık bildirimleri azaldı.', 'Çalışanlar daha çok hastalandı.', 'Müşteri sayısı düştü.', 'Şirket denemeyi hemen bıraktı.'], a: 0,
      why: { 1: 'Tersine: *die Krankmeldungen sind zurückgegangen*.', 2: 'Müşteri sayısından söz edilmiyor; yalnızca ulaşılabilirlik için telefon saatleri dağıtıldı.', 3: 'Şirket vazgeçmedi; olumlu bir tablo çiziyor.' },
      e: '*Die Beschäftigten sind ausgeruhter, und die Krankmeldungen sind zurückgegangen.* – olumlu sonuç; *zwar … aber* ile başlangıç endişesi ve çözümü anlatılıyor.' },
    { id: 'de-b2-h01.q2', t: 'match', q: 'Kim söylüyor? İfadeyi kişiyle eşleştir:', p: [['Hastalık bildirimleri azaldı', 'Petra Lindner'], ['Küçük işletmeler vardiyayı pek değiştiremez', 'Jonas Köhler'], ['Bu bir uzlaşmaya benziyor', 'Hanna Weber']],
      e: 'Programı Hanna Weber yönetir ve sonda özetler. Petra Lindner kendi deneyiminden konuşur. Jonas Köhler küçük işletmelerin sorunlarını anlatır.' },
    { id: 'de-b2-h01.q3', t: 'gap', q: 'Jeder Betrieb entscheidet selbst, ___ die Beschäftigten zustimmen.', a: ['sofern', 'falls', 'wenn', 'solange'],
      wrong: { 'obwohl': '„obwohl“ karşıtlık bildirir; burada **koşul** var.', 'weil': '„weil“ sebep bildirir; çalışanların onayı karar için sebep değil, **ön koşul**.', 'sodass': '„sodass“ sonuç bildirir; koşul için değil.' },
      e: '*sofern* = “… olduğu takdirde, … sürece”: bir koşul. Yan cümle: fiil (zustimmen) sonda.' },
    { id: 'de-b2-h01.q4', t: 'mc', q: 'Bir arkadaşın tartışmanın özetini soruyor. Hangisi doğru?', o: ['İki konuk dört günlük haftayı farklı değerlendiriyor; sonunda her işletmenin, çalışanların onayıyla kendisi karar vermesi önerisinde buluşuyorlar.', 'İki konuk dört günlük haftayı tamamen reddediyor.', 'İki konuk hükümetin dört günlük haftayı zorunlu yapmasını istiyor.', 'İki konuk yalnızca maaşlar hakkında tartışıyor.'], a: 0,
      why: { 1: 'Lindner olumlu, Köhler çekinceli; ikisi de reddetmiyor.', 2: 'Zorunluluk önerilmiyor; Köhler’in önerisi tam tersi: her işletme kendisi karar versin.', 3: 'Maaş konusu geçmiyor.' },
      e: 'Sprachmittlung: Pozisyonları (Lindner: olumlu deney; Köhler: küçük işletmeler için risk) ve ortak sonucu (işletme karar verir, çalışanlar onaylarsa) aktarırsın.' }
  ]
});

K.addText('de-b2-h02', {
  level: 'B2', kind: 'listen', genre: 'interview', plays: 2,
  title: 'Ohne Stechuhr arbeiten', sub: 'Mesai kartı olmadan çalışmak (röportaj)',
  lines: [
    { s: 'Sandra Krüger', g: 'f', t: 'Herr Roth, Ihre Firma hat die Stechuhr abgeschafft. Was bedeutet das genau?', n: 'Bay Roth, firmanız mesai kartı sistemini kaldırdı. Bu tam olarak ne anlama geliyor?' },
    { s: 'Herr Roth', g: 'm', t: 'Seit dem vergangenen Jahr gilt bei uns Vertrauensarbeitszeit. Wir erfassen nicht mehr, wann jemand kommt oder geht. Entscheidend ist, dass die Aufgaben erledigt werden. Früher gab es Gleitzeit mit fester Kernzeit, mittlerweile haben wir nur noch verbindliche Termine.', n: 'Geçen yıldan beri bizde güvene dayalı çalışma süresi geçerli. Birinin ne zaman gelip gittiğini artık kaydetmiyoruz. Önemli olan görevlerin tamamlanması. Eskiden sabit çekirdek saatli esnek mesai vardı; şimdilerde yalnızca bağlayıcı randevularımız var.' },
    { s: 'Sandra Krüger', g: 'f', t: 'Führt das nicht dazu, dass manche zu viel arbeiten?', n: 'Bu, bazılarının fazla çalışmasına yol açmıyor mu?' },
    { s: 'Herr Roth', g: 'm', t: 'Die Gefahr besteht, ja. Deswegen reden wir regelmäßig darüber. Beispielsweise muss jeder zweimal im Jahr mit der Teamleitung besprechen, ob die Belastung zu hoch ist. Überstunden werden ausgeglichen, solange man sie vorher anmeldet. Während die Jüngeren die Freiheit schätzen, wünschen sich manche Ältere feste Zeiten. Einige waren zuerst dagegen, mittlerweile sind fast alle zufrieden.', n: 'Tehlike var, evet. Bu yüzden düzenli olarak bu konuyu konuşuyoruz. Örneğin herkes yılda iki kez ekip lideriyle iş yükünün çok yüksek olup olmadığını görüşmek zorunda. Fazla mesailer önceden bildirildiği sürece denkleştiriliyor. Gençler özgürlüğü takdir ederken bazı yaşça büyük çalışanlar sabit saatler istiyor. Bazıları başta karşıydı; şimdilerde neredeyse herkes memnun.' },
    { s: 'Sandra Krüger', g: 'f', t: 'Und der Erfolg?', n: 'Peki ya başarı?' },
    { s: 'Herr Roth', g: 'm', t: 'Die Zufriedenheit ist so stark gestiegen, dass wir kaum noch Kündigungen haben. Wir wollen deshalb nicht zur alten Regelung zurück, es sei denn, die Zahlen werden schlechter.', n: 'Memnuniyet o kadar arttı ki neredeyse hiç işten ayrılma yok. Bu yüzden rakamlar kötüleşmedikçe eski düzene dönmek istemiyoruz.' }
  ],
  gloss: { 'Stechuhr': 'mesai kartı saati', 'abgeschafft': 'kaldırılmış (abschaffen)', 'Vertrauensarbeitszeit': 'güvene dayalı çalışma süresi (saat kaydı tutulmaz)', 'erfassen': 'kaydetmek', 'Gleitzeit': 'esnek mesai', 'verbindlich': 'bağlayıcı', 'Belastung': 'iş yükü, yük', 'ausgeglichen': 'denkleştirilir (ausgleichen)', 'anmeldet': 'bildirir, kaydettirir (anmelden)', 'Kündigungen': 'iş akdi feshi, istifa' },
  questions: [
    { id: 'de-b2-h02.q1', t: 'mc', q: 'Güvene dayalı çalışma süresinde ne kaydedilmiyor?', o: ['Birinin ne zaman gelip gittiği.', 'Hangi görevlerin tamamlandığı.', 'Fazla mesai saatlerinin hepsi.', 'Müşteri randevuları.'], a: 0,
      why: { 1: 'Tersine: önemli olan görevlerin tamamlanmasıdır.', 2: 'Fazla mesailer önceden bildirilir ve denkleştirilir; kaydedilmeleri gerekir.', 3: 'Randevular bağlayıcıdır; yani onlar kayıtlı kalır.' },
      e: '*Wir erfassen nicht mehr, wann jemand kommt oder geht.* – *erfassen* = kaydetmek.' },
    { id: 'de-b2-h02.q2', t: 'mc', q: 'Aşırı çalışma tehlikesine karşı şirket ne yapıyor?', o: ['Herkes yılda iki kez ekip lideriyle iş yükünü görüşüyor.', 'Hiçbir önlem almıyor.', 'Fazla mesai yasaklanmış.', 'Herkes sabit saatlerde çalışmak zorunda.'], a: 0,
      why: { 1: 'Önlem var: düzenli görüşmeler.', 2: 'Yasak yok; önceden bildirilirse fazla mesai denkleştirilir.', 3: 'Sabit saatler kaldırıldı; yalnızca bağlayıcı randevular var.' },
      e: '*Beispielsweise muss jeder zweimal im Jahr mit der Teamleitung besprechen, ob die Belastung zu hoch ist.*' },
    { id: 'de-b2-h02.q3', t: 'gap', q: 'Die Zufriedenheit ist so stark gestiegen, ___ wir kaum noch Kündigungen haben.', a: ['dass'],
      wrong: { 'weil': '„weil“ sebep bildirir; burada derece ve sonuç var: *so … dass*.', 'sodass': 'Öncesinde „so“ zaten var (*so stark*); bu durumda **dass** ayrı yazılır: *so … dass*.', 'ob': '„ob“ dolaylı soru cümlesi açar; sonuç için değil.' },
      e: '*so stark gestiegen, dass …* = o kadar arttı ki … Öncesinde sıfat/zarf varsa *so … dass* kullanılır.' },
    { id: 'de-b2-h02.q4', t: 'mc', q: 'Bir meslektaşın röportajı Türkçe özetlemeni istiyor. Hangisi doğru?', o: ['Firma saat kaydını kaldırdı; önemli olan görevlerin yapılması. Memnuniyet arttı; rakamlar kötüleşmedikçe eski düzene dönmeyecekler.', 'Firma mesai saatlerini uzattı ve çalışanlar şikâyetçi.', 'Firma yalnızca gençler için esnek mesai getirdi.', 'Firma çalışanları işten çıkardı.'], a: 0,
      why: { 1: 'Çalışma süresi uzatılmadı; sadece kayıt sistemi kalktı.', 2: 'Düzenleme herkes için geçerli; yaşlıların bir kısmı sabit saatleri tercih ediyor, ama kural herkese aynı.', 3: 'Tam tersi: işten ayrılma neredeyse hiç yok.' },
      e: 'Sprachmittlung: Değişiklik (saat kaydı yok), güvence (görüşmeler), sonuç (memnuniyet, az istifa) ve koşul (rakamlar kötüleşmedikçe) aktarılır.' }
  ]
});

K.addText('de-b2-h03', {
  level: 'B2', kind: 'listen', genre: 'anrufbeantworter', plays: 2,
  title: 'Besprechung abgesagt – Entschuldigung', sub: 'Toplantı iptal edildi – özür (telesekreter)',
  lines: [
    { s: 'Christina Falk', g: 'f', t: 'Guten Tag, Herr Sommer, hier spricht Christina Falk aus der Abteilungsleitung. Ich muss mich bei Ihnen entschuldigen: Die Teambesprechung am Dienstag musste ich leider kurzfristig absagen, weil mein Zug ausgefallen ist. Ich weiß, dass das ärgerlich ist, zumal Sie den Termin vielleicht schon mit dem Stundenplan Ihrer Kinder abgestimmt hatten.', n: 'İyi günler, Bay Sommer, ben bölüm yönetiminden Christina Falk. Sizden özür dilemem gerekiyor: Salı günkü ekip toplantısını maalesef son anda iptal etmek zorunda kaldım, çünkü trenim iptal oldu. Bunun can sıkıcı olduğunu biliyorum; hele ki siz randevuyu belki de çocuklarınızın ders programıyla çoktan ayarlamıştınız.' },
    { s: 'Christina Falk', g: 'f', t: 'Wir holen die Besprechung am Donnerstag um elf Uhr nach. Allerdings ist das Sitzungszimmer vorher belegt, wir beginnen also eine Stunde später als sonst. Bitte bringen Sie die neuen Zahlen mit. Sofern Sie an dem Tag nicht können, rufen Sie mich bitte bis morgen Mittag zurück. Andernfalls gehe ich davon aus, dass der Termin für Sie passt. Die Einladung verschicke ich noch heute. Das übernehme ich. Vielen Dank für Ihr Verständnis, und bis Donnerstag.', n: 'Toplantıyı perşembe günü saat on birde yapacağız. Ancak toplantı odası ondan önce dolu, yani her zamankinden bir saat geç başlıyoruz. Lütfen yeni rakamları getirin. O gün gelemezseniz, lütfen yarın öğlene kadar beni geri arayın. Aksi takdirde randevunun size uygun olduğunu varsayarım. Daveti bugün göndereceğim. Bunu ben üstlenirim. Anlayışınız için çok teşekkürler, perşembe görüşürüz.' }
  ],
  gloss: { 'Abteilungsleitung': 'bölüm yönetimi', 'kurzfristig': 'kısa sürede, son anda', 'absagen': 'iptal etmek', 'ausgefallen': 'iptal olmuş (ausfallen)', 'zumal': 'hele ki, özellikle', 'abgestimmt': 'ayarlanmış, uyumlaştırılmış (abstimmen)', 'holen': 'telafi etmek (nachholen)', 'belegt': 'dolu, tutulmuş', 'Sitzungszimmer': 'toplantı odası', 'Verständnis': 'anlayış' },
  questions: [
    { id: 'de-b2-h03.q1', t: 'mc', q: 'Christina Falk toplantıyı neden iptal etti?', o: ['Treni iptal olduğu için.', 'Hastalandığı için.', 'Toplantı odası dolu olduğu için.', 'Rakamlar henüz hazır olmadığı için.'], a: 0,
      why: { 1: 'Hastalıktan söz edilmiyor.', 2: 'Oda dolu olması **yeni** toplantının neden geç başladığını açıklıyor, iptali değil.', 3: 'Rakamlardan söz ediliyor ama iptal nedeni bu değil.' },
      e: '*… musste ich leider kurzfristig absagen, weil mein Zug ausgefallen ist.*' },
    { id: 'de-b2-h03.q2', t: 'mc', q: 'Yeni toplantı ne zaman başlıyor ve katılımcılar ne getirmeli?', o: ['Perşembe saat on birde; yeni rakamları.', 'Perşembe saat ondan; davetiyeyi.', 'Salı saat on birde; toplantı notlarını.', 'Cuma sabahı; yeni rakamları.'], a: 0,
      why: { 1: 'Saat on değil, on bir; oda ondan önce dolu.', 2: 'Salı günkü toplantı iptal edildi; yenisi perşembe.', 3: 'Gün cuma değil, perşembe.' },
      e: '*Wir holen die Besprechung am Donnerstag um elf Uhr nach. … Bitte bringen Sie die neuen Zahlen mit.*' },
    { id: 'de-b2-h03.q3', t: 'gap', q: 'Andernfalls gehe ich davon aus, ___ der Termin für Sie passt.', a: ['dass'],
      wrong: { 'ob': '„ob“ soru bildirir; burada söylenen bir **varsayım**: „… olduğunu varsayarım“.', 'weil': '„weil“ sebep bildirir; „davon ausgehen“ ile içerik cümlesi **dass** ile gelir.', 'wenn': '„wenn“ koşul bildirir; „davon ausgehen“ bir varsayımın içeriğini „dass“ ile bağlar.' },
      e: '*davon ausgehen, dass …* = varsaymak, … olduğunu düşünmek. *davon* (da + von) bir sonraki *dass*-cümlesine işaret eder. *andernfalls* = aksi takdirde.' },
    { id: 'de-b2-h03.q4', t: 'mc', q: 'Bir meslektaşın mesajı Türkçe özetlemeni istiyor. Hangisi doğru?', o: ['Salı günkü toplantı iptal edildi; yeni toplantı perşembe saat on birde. O gün gelemeyenler yarın öğlene kadar geri aramalı, aksi hâlde randevu uygun sayılacak.', 'Toplantı iptal edildi ve yeni tarih belli değil.', 'Toplantı salı günü, bir saat geç yapılacak.', 'Toplantı herkes için zorunlu değil; gelmek isteyen gelebilir.'], a: 0,
      why: { 1: 'Yeni tarih belli: perşembe saat on bir.', 2: 'Salı değil, perşembe; toplantı da ancak bir saat geç başlar çünkü oda ondan önce dolu.', 3: 'Zorunlu olmadığı söylenmiyor; gelemeyenlerin haber vermesi isteniyor.' },
      e: 'Sprachmittlung: Neden (tren), yeni zaman (perşembe saat on bir), istenen (rakamlar) ve haber verme koşulu (yarın öğlene kadar) birlikte aktarılır.' }
  ]
});


/* ===== Paket P2 „Schriftsprache verdichten“: r04–r06, h04–h05 ===== */

K.addText('de-b2-r04', {
  level: 'B2', kind: 'read', genre: 'artikel',
  title: 'Berufsabschluss anerkennen lassen', sub: 'Yurt dışı meslek diplomasının tanınması',
  body: [
    "Wer im Ausland eine Ausbildung oder ein Studium abgeschlossen hat, möchte in Deutschland meist im gleichen Beruf arbeiten. Dafür braucht man in vielen Fällen die Anerkennung des Abschlusses. Weil es sehr viele Berufe gibt, ist das Verfahren allerdings nicht überall gleich.",
    "Zunächst muss man klären, ob der Beruf reglementiert ist. Ärzte, Lehrer und Ingenieure dürfen ihren Titel nur nach einer Anerkennung führen. Bei nicht reglementierten Berufen, beispielsweise im Handel oder in der Verwaltung, ist die Anerkennung keine Pflicht, sie verbessert aber die Chancen auf dem Arbeitsmarkt. Die zuständige Stelle prüft anhand der eingereichten Unterlagen, ob der ausländische Abschluss mit dem deutschen vergleichbar ist.",
    "Für den Antrag benötigt man das Zeugnis, eine Übersetzung durch einen vereidigten Übersetzer und einen Nachweis der Deutschkenntnisse. Innerhalb von vier Wochen nach Eingang des Antrags erhält man eine Bestätigung, ob die Unterlagen vollständig sind. Die eigentliche Prüfung dauert in der Regel drei bis vier Monate. Viele Antragsteller unterschätzen die Kosten, denn die Gebühren betragen je nach Beruf mehrere hundert Euro. Außerdem unterscheiden sich die Verfahren von Bundesland zu Bundesland.",
    "Viele Betroffene stoßen auf Hindernisse, weil Unterlagen fehlen oder nicht beglaubigt sind. Es ist deshalb ratsam, Beratung in Anspruch zu nehmen. Wird nur ein Teil des Abschlusses anerkannt, muss man häufig an einer Anpassungsqualifizierung teilnehmen. Die dafür vorgesehenen Kurse dauern meist wenige Monate. Beratungsstellen unterstützen die Betroffenen kostenlos, und mittlerweile gibt es auch Informationen in mehreren Sprachen. Mit einem Termin muss man in der Regel nicht lange warten.",
    "Trotz des Aufwands lohnt sich der Antrag. Wer anerkannt wird, verdient oft deutlich mehr als zuvor in einer Hilfstätigkeit, und viele Betriebe suchen dringend nach qualifizierten Fachkräften."
  ],
  gloss: { 'Anerkennung': 'tanınma, denklik', 'Abschluss': 'diploma, bitirme', 'Verfahren': 'prosedür, işlem', 'reglementiert': 'yasal olarak düzenlenmiş (meslek)', 'zuständig': 'yetkili', 'eingereicht': 'sunulmuş (einreichen)', 'vergleichbar': 'karşılaştırılabilir, denk', 'beglaubigt': 'noter onaylı, onaylı', 'vereidigten': 'yeminli (çevirmen)', 'Nachweis': 'belge, kanıt', 'Antragsteller': 'başvuran kişi', 'unterschätzen': 'hafife almak', 'Gebühren': 'harçlar', 'Anpassungsqualifizierung': 'uyum eğitimi (eksik yeterlilikleri tamamlama)', 'Betroffene': 'ilgili kişiler', 'Hilfstätigkeit': 'yardımcı iş, vasıfsız iş', 'Fachkräfte': 'nitelikli çalışanlar', 'Hindernisse': 'engeller', 'ratsam': 'tavsiye edilir' },
  questions: [
    { id: 'de-b2-r04.q1', t: 'mc', q: 'Hangi meslekler için diplomanın tanınması **zorunludur**?', o: ['Ticaret ve idari işlerdeki tüm meslekler.', 'Doktorlar, öğretmenler ve mühendisler gibi düzenlenmiş meslekler.', 'Yalnızca yabancı dil öğretmenleri.', 'Hiçbir meslek için zorunlu değildir.'], a: 1,
      why: { 0: 'Ticaret ve idarede tanınma zorunlu değil, yalnızca şansı artırıyor.', 2: 'Böyle bir kısıtlama metinde yok.', 3: 'Düzenlenmiş meslekler için zorunlu: unvanı ancak tanınma sonrası kullanabilirsin.' },
      e: '*Ärzte, Lehrer und Ingenieure dürfen ihren Titel nur nach einer Anerkennung führen.* – *reglementiert* = yasal olarak düzenlenmiş.' },
    { id: 'de-b2-r04.q2', t: 'mc', q: 'Yetkili kurum başvuruyu neye bakarak değerlendirir?', o: ['Başvuranın Almanca konuşma becerisine.', 'Sunulan belgelere bakarak diplomanın Almanya’dakiyle denk olup olmadığına.', 'Başvuranın iş tecrübesinin yılına.', 'İşverenin tavsiye mektubuna.'], a: 1,
      why: { 0: 'Almanca bilgisi için ayrıca bir belge gerekiyor, ama değerlendirme ölçütü bu değil.', 2: 'Tecrübe yılından söz edilmiyor.', 3: 'Tavsiye mektubu metinde yok.' },
      e: '*Die zuständige Stelle prüft anhand der eingereichten Unterlagen, ob der ausländische Abschluss … vergleichbar ist.*' },
    { id: 'de-b2-r04.q3', t: 'gap', q: 'Innerhalb von ___ Wochen nach Eingang des Antrags erhält man eine Bestätigung.', a: ['vier', '4'],
      wrong: { 'drei': 'Üç–dört ay asıl inceleme süresidir; bir hafta sayısı ise *vier*.', 'zwei': 'Metinde *vier Wochen* geçiyor.' },
      e: '*Innerhalb von vier Wochen* – belgelerin tam olup olmadığı bildirilir. Asıl inceleme üç–dört ay sürer.' },
    { id: 'de-b2-r04.q4', t: 'mc', q: 'Diplomanın yalnızca bir kısmı tanınırsa ne yapılır?', o: ['Başvuru reddedilir ve yeniden yapılamaz.', 'Çoğu zaman bir uyum eğitimine katılınır.', 'Doğrudan işe başlanabilir.', 'Üniversiteye yeniden kayıt gerekir.'], a: 1,
      why: { 0: 'Reddedilmiyor; eksik kısım tamamlanıyor.', 2: 'Eksik kısım varsa çalışmak için önce tamamlama gerekir.', 3: 'Tam bir yeniden kayıt gerekmiyor; kısa kurslar var.' },
      e: '*Wird nur ein Teil des Abschlusses anerkannt, muss man häufig an einer Anpassungsqualifizierung teilnehmen.*' },
    { id: 'de-b2-r04.q5', t: 'mc', q: 'Bir arkadaşın metni Türkçe özetlemeni istiyor. Hangisi doğru?', o: ['Diploma tanınması hiçbir meslekte gerekli değildir; belgeler iş başvurusu için tek başına yeterli sayılır ve süreç ücretsizdir.', 'Diplomalar otomatik tanınır; başvuru yapmak gerekmez, harç ödenmez ve işlem bir hafta içinde biter.', 'Doktor, öğretmen, mühendis gibi mesleklerde tanınma şart; belgeler incelenir, aylar sürer, harç ödenir.', 'Yalnızca Almanca bilenler başvurabilir; süreç bir haftada biter ve eksik kalan bir şey olursa hiçbir ek kurs verilmez.'], a: 2,
      why: { 0: 'Düzenlenmiş meslekler için tanınma zorunlu, süreç de ücretsiz değil.', 1: 'Otomatik değil; belge incelemesi ve harç var, süreç aylar sürüyor.', 3: 'Süreç bir haftada bitmez ve eksikler için uyum kursu var.' },
      e: 'Sprachmittlung: Tanınmanın zorunlu olduğu meslekler, belge incelemesi, süre ve maliyet, uyum kursları ve ücretsiz danışma kısaca söylenir.' }
  ]
});

K.addText('de-b2-r05', {
  level: 'B2', kind: 'read', genre: 'artikel',
  title: 'Vorsorge und Zweitmeinung', sub: 'Koruyucu sağlık ve ikinci görüş',
  body: [
    "Angesichts steigender Kosten im Gesundheitswesen wird die Vorsorge immer wichtiger. Wer regelmäßig zu Untersuchungen geht, erkennt Krankheiten früher und muss seltener lange behandelt werden. Die gesetzlichen Krankenkassen bezahlen deshalb bestimmte Untersuchungen, zum Beispiel einen Gesundheits-Check, der Erwachsenen ab fünfunddreißig Jahren alle drei Jahre zusteht.",
    "Hinsichtlich der Terminvergabe klagen viele Patienten über lange Wartezeiten. Fachärzte sind häufig erst nach mehreren Wochen verfügbar. Deshalb lohnt es sich, Termine frühzeitig zu vereinbaren und bei Bedarf mehrere Praxen anzufragen. Wer schnell einen Termin möchte, muss oft längere Anfahrtswege in Kauf nehmen. Wer dringend Hilfe braucht, kann den ärztlichen Bereitschaftsdienst anrufen; bei einem Notfall gilt weiterhin die Notrufnummer.",
    "Wer eine schwerwiegende Diagnose erhält, kann sich ebenfalls eine zweite Meinung einholen. Bei bestimmten planbaren Operationen haben gesetzlich Versicherte außerdem das Recht auf eine ärztliche Zweitmeinung; viele Kassen bieten sogar mehr an. Eine zweite Ärztin prüft anhand der Befunde, ob der Eingriff wirklich notwendig ist. Viele Ärzte legen großen Wert auf ein ausführliches Gespräch mit ihren Patienten. Dabei geht es nicht um Misstrauen, sondern um eine gut begründete Entscheidung. Man sollte allerdings alle Unterlagen vollständig mitbringen, sonst verzögert sich die Beurteilung.",
    "Bezüglich der Medikamente müssen Patienten meist einen Teil der Kosten selbst tragen. Dafür gilt eine Belastungsgrenze: Wer innerhalb eines Kalenderjahres mehr als zwei Prozent seines Bruttoeinkommens zuzahlt, kann sich auf Antrag für den Rest des Jahres befreien lassen; bei chronisch Kranken liegt die Grenze bei einem Prozent. Die Zuzahlungen fallen bei einzelnen Rezepten kaum ins Gewicht, summieren sich aber über das Jahr.",
    "Ein weiterer Punkt ist die Eigenverantwortung. Bewegung, ausgewogene Ernährung und ausreichender Schlaf beugen vielen Erkrankungen vor. Das senkt nicht nur das persönliche Risiko, sondern auch die Kosten für die Allgemeinheit."
  ],
  gloss: { 'Gesundheitswesen': 'sağlık sistemi', 'Vorsorge': 'koruyucu sağlık, önlem', 'behandelt': 'tedavi edilmiş (behandeln)', 'zusteht': 'hak edilir (zustehen)', 'Terminvergabe': 'randevu verme', 'Fachärzte': 'uzman doktorlar', 'Bereitschaftsdienst': 'nöbetçi hizmeti', 'schwerwiegende': 'ağır, ciddi', 'Zweitmeinung': 'ikinci görüş', 'Befund': 'bulgu, tahlil sonucu', 'Eingriff': 'müdahale, ameliyat', 'Misstrauen': 'güvensizlik', 'Beurteilung': 'değerlendirme', 'Belastungsgrenze': 'yük sınırı (zorunlu ek ödeme üst sınırı)', 'zuzahlt': 'ek ödeme yapar (zuzahlen)', 'befreien': 'muaf tutmak (sich befreien lassen)', 'Eigenverantwortung': 'kişisel sorumluluk', 'beugen': 'önler (vorbeugen: beugen … vor)', 'Allgemeinheit': 'toplum, kamu', 'Anfahrtswege': 'gidiş yolları, mesafe', 'summieren': 'birikir (sich summieren)' },
  questions: [
    { id: 'de-b2-r05.q1', t: 'mc', q: 'Metne göre koruyucu sağlık neden giderek önem kazanıyor?', o: ['Doktorlar eskisine göre daha az çalıştığı ve muayene sürelerini kısalttığı için.', 'Sigorta şirketleri kuralları değiştirdiği ve ek ödemeleri artırdığı için.', 'Maliyetler arttığı için; hastalık erken fark edilirse tedavi kısa sürer.', 'Hastalar artık ilaç kullanmak istemediği ve doğal yöntemleri tercih ettiği için.'], a: 2,
      why: { 0: 'Doktorların çalışma saatlerinden söz edilmiyor.', 1: 'Kural değişikliğinden söz edilmiyor.', 3: 'İlaç kullanımının reddinden söz edilmiyor.' },
      e: '*Angesichts steigender Kosten … wird die Vorsorge immer wichtiger. Wer regelmäßig zu Untersuchungen geht, erkennt Krankheiten früher …*' },
    { id: 'de-b2-r05.q2', t: 'gap', q: 'Hinsichtlich ___ Terminvergabe klagen viele Patienten über lange Wartezeiten.', a: ['der'],
      wrong: { 'die': '*hinsichtlich* Genitiv ister; dişil Genitiv artikeli *der*.', 'dem': '*dem* Dativ’dir; *hinsichtlich* Genitiv ister.' },
      e: '*hinsichtlich der Terminvergabe* = randevu verme açısından. Genitiv dişil: *der*.' },
    { id: 'de-b2-r05.q3', t: 'mc', q: 'İkinci görüş hakkı metne göre hangi durumlarda söz konusudur?', o: ['Her küçük şikâyette ve her rutin muayenede, hiçbir koşul aranmadan.', 'Belirli planlı ameliyatlarda; bazı sigortalar bunun ötesinde de sunar.', 'Yalnızca acil durumlarda, yani ambulans çağrıldığında ya da hastaneye yatışta.', 'Yalnızca özel sigortalılar için, hangi ameliyat olursa olsun.'], a: 1,
      why: { 0: 'Her şikâyet için değil; belirli planlı müdahaleler için.', 2: 'Acil durumlarda zaman olmaz; ikinci görüş planlı müdahaleler içindir.', 3: 'Metin yasal sigortalılardan söz ediyor, özel sigortalılardan değil.' },
      e: '*Bei bestimmten planbaren Operationen haben gesetzlich Versicherte außerdem das Recht auf eine ärztliche Zweitmeinung; viele Kassen bieten sogar mehr an.*' },
    { id: 'de-b2-r05.q4', t: 'mc', q: 'Zorunlu ek ödemelerde (Belastungsgrenze) ne söyleniyor?', o: ['Ek ödeme sınırsızdır ve yıl sonunda iade edilir.', 'Brüt gelirin yüzde ikisini aşınca başvuruyla yıl sonuna kadar muafiyet alınabilir; kronik hastalarda sınır yüzde birdir.', 'Yalnızca ilaçlar için sınır vardır, ameliyatlar için yoktur ve kimse muaf olamaz.', 'Bir yıl içinde hiçbir şey ödenmez, çünkü kasa her şeyi karşılar.'], a: 1,
      why: { 0: 'Sınır var: yüzde iki (kronik hastalarda yüzde bir).', 2: 'Metin yalnızca ilaç maliyetlerini örnek veriyor; muafiyet mümkün.', 3: 'Önce ek ödeme yapılır, sınır aşılınca (başvuruyla) muafiyet başlar.' },
      e: '*Wer innerhalb eines Kalenderjahres mehr als zwei Prozent seines Bruttoeinkommens zuzahlt, kann sich auf Antrag für den Rest des Jahres befreien lassen; bei chronisch Kranken liegt die Grenze bei einem Prozent.*' },
    { id: 'de-b2-r05.q5', t: 'mc', q: 'Annenin “Doktor ameliyat önerdi, emin değilim” demesi üzerine ona metne göre ne söylersin?', o: ['Ameliyatı hemen yaptırmalı; ikinci görüş mümkün değil.', 'Planlı bir ameliyatsa yasal sigortalı olarak ikinci görüş hakkı olabilir; belgeleri eksiksiz götürmeli, yoksa değerlendirme gecikir.', 'Sigorta yalnızca ilk doktora güvenir; ikinci doktor her durumda ücretlidir ve ayrıca randevu da verilmez.', 'Hemen acil servise gitmeli ve orada ameliyat kararını beklemeden başka bir doktora başvurmamalı.'], a: 1,
      why: { 0: 'Metin tam tersini söylüyor: belirli planlı ameliyatlarda ikinci görüş hakkı var.', 2: 'Ücretle ilgili böyle bir kısıtlama metinde yok.', 3: 'Acil servis acil durumlar içindir; planlı ameliyat için değil.' },
      e: 'Sprachmittlung: Hak (ikinci görüş), koşul (belirli planlı ameliyat) ve pratik ipucu (belgeleri tam götür) kısaca aktarılır.' }
  ]
});

K.addText('de-b2-r06', {
  level: 'B2', kind: 'read', genre: 'email',
  title: 'Einladung zur Mieterversammlung', sub: 'Kiracılar toplantısına davet',
  body: [
    "Betreff: Einladung zur Mieterversammlung am Donnerstag",
    "Sehr geehrte Mieterinnen und Mieter",
    "Hiermit laden wir Sie herzlich zur Mieterversammlung ein. Sie findet am Donnerstag um neunzehn Uhr im Gemeinschaftsraum statt. Bitte planen Sie etwa zwei Stunden ein; für Getränke sorgen wir.",
    "Angesichts der geplanten Sanierung möchten wir Sie frühzeitig informieren und Ihre Fragen beantworten. Die Eigentümer haben beschlossen, innerhalb der nächsten zwei Jahre die Fenster zu erneuern und die Fassade zu dämmen. Dadurch sinkt der Energieverbrauch deutlich. Bis zum Abschluss der Arbeiten ist allerdings mit Lärm und Staub zu rechnen. Die Eigentümer ziehen außerdem eine Solaranlage auf dem Dach in Betracht.",
    "Außerdem sprechen wir über eine mögliche Mieterhöhung nach der Sanierung. Sie ist gesetzlich nur in bestimmten Grenzen erlaubt, und wir erläutern die Berechnung anhand konkreter Zahlen. Wer nicht teilnehmen kann, schickt seine Fragen bis Mittwoch schriftlich an die Hausverwaltung; sie werden dann in der Versammlung beantwortet.",
    "Zudem bitten wir um Ihre Meinung zur Nutzung des Innenhofs. Mehrere Mieter wünschen sich einen abschließbaren Fahrradstellplatz, andere bezweifeln, dass dafür genug Platz vorhanden ist. Wir möchten die Lösung gemeinsam mit Ihnen entwickeln. Ihre Anregungen nehmen wir gern auch schon vorab per E-Mail entgegen.",
    "Eine Kinderbetreuung während der Versammlung ist leider nicht möglich. Das Protokoll erhalten alle Haushalte innerhalb einer Woche. Über den Fortschritt der Arbeiten halten wir Sie auf dem Laufenden. Wer ein Anliegen zur Sprache bringen möchte, meldet sich bitte vorab.",
    "Mit freundlichen Grüßen",
    "Yvonne Hoffmann",
    "Hausverwaltung Rheinblick"
  ],
  gloss: { 'Mieterversammlung': 'kiracılar toplantısı', 'Gemeinschaftsraum': 'ortak kullanım salonu', 'Sanierung': 'yenileme, onarım', 'Eigentümer': 'ev sahipleri, mal sahipleri', 'dämmen': 'yalıtmak', 'Fassade': 'cephe', 'Energieverbrauch': 'enerji tüketimi', 'Mieterhöhung': 'kira artışı', 'erläutern': 'açıklamak', 'Hausverwaltung': 'site/bina yönetimi', 'Innenhof': 'iç avlu', 'abschließbar': 'kilitlenebilir', 'Fahrradstellplatz': 'bisiklet park yeri', 'bezweifeln': 'şüphe etmek', 'Haushalte': 'haneler', 'Solaranlage': 'güneş enerjisi sistemi' },
  questions: [
    { id: 'de-b2-r06.q1', t: 'mc', q: 'Toplantının asıl konusu nedir?', o: ['Çatının tamiri.', 'Planlanan yenileme (pencere ve cephe) hakkında bilgi vermek.', 'Binadaki bir komşuluk sorunu.', 'Yeni bir kiracının tanıtımı.'], a: 1,
      why: { 0: 'Çatıdan söz edilmiyor.', 2: 'Komşuluk sorunu tek başına gündem değil.', 3: 'Böyle bir madde yok.' },
      e: '*Angesichts der geplanten Sanierung möchten wir Sie frühzeitig informieren … Fenster zu erneuern und die Fassade zu dämmen.*' },
    { id: 'de-b2-r06.q2', t: 'mc', q: 'Toplantıya katılamayan kiracı ne yapmalı?', o: ['Hiçbir şey; toplantı zorunludur.', 'Sorularını çarşambaya kadar yazılı olarak yönetime göndermeli.', 'Perşembe günü yönetimi aramalı.', 'Başka bir kiracıyı vekil olarak göndermeli.'], a: 1,
      why: { 0: 'Katılamayanlar için bir yol var.', 2: 'Arama değil, yazılı gönderim isteniyor.', 3: 'Vekilden söz edilmiyor.' },
      e: '*Wer nicht teilnehmen kann, schickt seine Fragen bis Mittwoch schriftlich an die Hausverwaltung.*' },
    { id: 'de-b2-r06.q3', t: 'gap', q: 'Das Protokoll erhalten alle Haushalte innerhalb ___ Woche.', a: ['einer'],
      wrong: { 'eine': '*innerhalb* Genitiv ister; dişil Genitiv *einer*.', 'einem': '*einem* eril/nötr Dativ’dir; *Woche* dişildir.' },
      e: '*innerhalb einer Woche* – Genitiv dişil.' },
    { id: 'de-b2-r06.q4', t: 'mc', q: 'İç avlu hakkında ne tartışılacak?', o: ['İç avlunun kapatılması.', 'Kilitlenebilir bir bisiklet park yerinin kurulup kurulmayacağı; bazıları yeterli yer olduğundan şüphe ediyor.', 'Çocuk oyun alanı yapılması.', 'Avluda park yasağı.'], a: 1,
      why: { 0: 'Kapatmadan söz edilmiyor.', 2: 'Oyun alanı anılmıyor.', 3: 'Park yasağı anılmıyor.' },
      e: '*Mehrere Mieter wünschen sich einen abschließbaren Fahrradstellplatz, andere bezweifeln, dass dafür genug Platz vorhanden ist.*' },
    { id: 'de-b2-r06.q5', t: 'mc', q: 'Komşuna bu mektubu Türkçe özetlemek istiyorsun. Hangisi doğru?', o: ['Yönetim kira artışını kesinleştirdi; kiracılar yalnızca sonucu öğrenecek ve toplantıda söz hakkı olmayacak.', 'Bina satılıyor, bütün kiracılar iki yıl içinde taşınmak zorunda ve bu toplantıda tazminat konuşulacak.', 'Perşembe akşamı toplantı var: yenileme, olası kira artışı ve avlu konuşulacak; katılamayanlar çarşambaya kadar yazılı soru gönderebilir.', 'Toplantı zorunlu ve katılmayan kiracılara para cezası kesilecek; çocuk bakımı da toplantıda sağlanıyor.'], a: 2,
      why: { 0: 'Henüz kesin bir artış yok; yalnızca olası artış açıklanacak ve sorular sorulabilecek.', 1: 'Satıştan ya da tazminattan söz edilmiyor.', 3: 'Zorunluluk ya da cezadan söz edilmiyor; çocuk bakımı ise yok.' },
      e: 'Sprachmittlung: Zaman, gündem maddeleri, katılamayanlar için yol ve çocuk bakımı olmadığı kısaca aktarılır.' }
  ]
});

K.addText('de-b2-h04', {
  level: 'B2', kind: 'listen', genre: 'interview', plays: 2,
  title: 'Wohnraum in der Stadt', sub: 'Şehirde konut (radyo röportajı)',
  lines: [
    { s: 'Katrin Wolf', g: 'f', t: 'Willkommen zum Stadtmagazin. Heute spreche ich mit dem Stadtplaner Jens Albrecht über steigende Mieten. Herr Albrecht, warum wird Wohnraum in unserer Stadt immer knapper?', n: 'Şehir dergisine hoş geldiniz. Bugün şehir plancısı Jens Albrecht ile artan kiralar üzerine konuşuyorum. Bay Albrecht, şehrimizde konut neden giderek azalıyor?' },
    { s: 'Jens Albrecht', g: 'm', t: 'Aufgrund des Zuzugs wächst die Stadt seit Jahren, aber gebaut wurde bislang zu wenig. Inzwischen fehlen mehrere tausend Wohnungen. Was die Lage zusätzlich verschärft, sind die steigenden Baukosten.', n: 'Göç nedeniyle şehir yıllardır büyüyor, ama şimdiye kadar çok az inşaat yapıldı. Artık binlerce konut eksik. Durumu ayrıca ağırlaştıran şey, artan inşaat maliyetleri.' },
    { s: 'Katrin Wolf', g: 'f', t: 'Was plant die Stadt dagegen, Herr Albrecht?', n: 'Şehir buna karşı ne planlıyor, Bay Albrecht?' },
    { s: 'Jens Albrecht', g: 'm', t: 'Wir wollen innerhalb der nächsten fünf Jahre auf freien Flächen und über Supermärkten neue Wohnungen schaffen. Die Stadt nimmt dafür viel Geld in die Hand. Wer in der Nähe von Haltestellen baut, darf höher bauen, damit weniger Menschen auf das Auto angewiesen sind. Allerdings gibt es auch Widerstand: Anwohner befürchten mehr Verkehr und weniger Grün.', n: 'Önümüzdeki beş yıl içinde boş arazilerde ve süpermarketlerin üzerinde yeni konutlar yapmak istiyoruz. Şehir bunun için çok para ayırıyor. Durakların yakınında inşa eden daha yüksek bina yapabilir; böylece daha az insan arabaya muhtaç olur. Ancak direnç de var: Mahalle sakinleri daha fazla trafik ve daha az yeşillik olacağından endişe ediyor.' },
    { s: 'Katrin Wolf', g: 'f', t: 'Verstehen Sie die Sorgen, Herr Albrecht?', n: 'Bu endişeleri anlıyor musunuz, Bay Albrecht?' },
    { s: 'Jens Albrecht', g: 'm', t: 'Durchaus. Deshalb laden wir vor jedem größeren Projekt zu einer Bürgerversammlung ein. Was dort gesagt wird, fließt in die Planung ein, auch wenn man sich nicht immer einigt.', n: 'Kesinlikle. Bu yüzden her büyük projeden önce bir vatandaş toplantısına davet ediyoruz. Orada söylenenler plana yansıyor, her zaman anlaşılamasa bile.' },
    { s: 'Katrin Wolf', g: 'f', t: 'Vielen Dank für das Gespräch.', n: 'Söyleşi için çok teşekkürler.' }
  ],
  gloss: { 'Stadtplaner': 'şehir plancısı', 'Wohnraum': 'konut, yaşam alanı', 'knapp': 'kıt, az', 'Zuzug': 'göç, şehre akın', 'verschärft': 'ağırlaştırır (verschärfen)', 'Flächen': 'araziler, alanlar', 'angewiesen': 'muhtaç, bağımlı', 'Widerstand': 'direnç', 'Anwohner': 'mahalle sakinleri', 'befürchten': 'korkmak, endişe etmek', 'Bürgerversammlung': 'vatandaş toplantısı', 'einigt': 'anlaşır (sich einigen)' },
  questions: [
    { id: 'de-b2-h04.q1', t: 'mc', q: 'Albrecht’e göre konut neden azalıyor?', o: ['Şehir küçülüyor.', 'Şehir göçle büyüyor ama yeterince inşaat yapılmadı.', 'Evler çok pahalı satılıyor.', 'Kiracılar taşınmıyor.'], a: 1,
      why: { 0: 'Şehir büyüyor, küçülmüyor.', 2: 'Satış fiyatlarından söz edilmiyor.', 3: 'Böyle bir neden söylenmiyor.' },
      e: '*Aufgrund des Zuzugs wächst die Stadt seit Jahren, aber gebaut wurde bislang zu wenig.*' },
    { id: 'de-b2-h04.q2', t: 'mc', q: 'Şehrin planı nedir?', o: ['Beş yıl içinde boş arazilere ve süpermarketlerin üzerine konut yapmak.', 'Eski binaları yıkmak.', 'Kiraları dondurmak.', 'Yeni bir otoyol açmak.'], a: 0,
      why: { 1: 'Yıkımdan söz edilmiyor.', 2: 'Kira dondurmadan söz edilmiyor.', 3: 'Aksine arabaya bağımlılık azaltılmak isteniyor.' },
      e: '*Wir wollen innerhalb der nächsten fünf Jahre auf freien Flächen und über Supermärkten neue Wohnungen schaffen.*' },
    { id: 'de-b2-h04.q3', t: 'mc', q: 'Mahalle sakinlerinin endişesi nedir?', o: ['Daha az komşu ve daha fazla gürültü.', 'Daha fazla trafik ve daha az yeşillik.', 'Daha yüksek kira ve daha az otopark.', 'Daha fazla suç.'], a: 1,
      why: { 0: 'Komşu sayısından söz edilmiyor.', 2: 'Kira ve otoparktan söz edilmiyor.', 3: 'Suçtan söz edilmiyor.' },
      e: '*Anwohner befürchten mehr Verkehr und weniger Grün.*' },
    { id: 'de-b2-h04.q4', t: 'mc', q: 'Bir meslektaşın röportajı Türkçe özetlemeni istiyor. Hangisi doğru?', o: ['Şehir yeni konutları yalnızca merkezde yapıyor ve sakinlerin fikrini sormuyor; inşaat da hemen başlayacak.', 'Şehir göçle büyüyor, konut açığı var; beş yıl içinde boş alanlara ve süpermarketlerin üstüne konut yapılacak, vatandaşlara da danışılıyor.', 'Kiralar düşecek çünkü konut sayısı yeterli; şehir bu yüzden inşaat izinlerini kısıtlıyor.', 'Şehir konut yapımını tamamen durdurdu ve bütün çabasını otomobil yollarına yöneltiyor.'], a: 1,
      why: { 0: 'Vatandaşlara danışılıyor ve alanlar farklı.', 2: 'Konut açığı var ve kiralar artıyor.', 3: 'Tam tersine inşaat planlanıyor ve arabaya bağımlılık azaltılmak isteniyor.' },
      e: 'Sprachmittlung: Sorun (konut açığı), çözüm (yeni konut, yoğunlaştırma) ve itiraz/katılım (vatandaş toplantısı) kısaca aktarılır.' }
  ]
});

K.addText('de-b2-h05', {
  level: 'B2', kind: 'listen', genre: 'anrufbeantworter', plays: 2,
  title: 'Termin für die Zweitmeinung verschoben', sub: 'İkinci görüş randevusu kaydırıldı (telesekreter)',
  lines: [
    { s: 'Tina Brandt', g: 'f', t: 'Guten Tag, Frau Winter, hier spricht Tina Brandt aus der Praxis von Doktor Seidel. Ich rufe an, weil sich Ihr Termin für die Zweitmeinung verschiebt. Aufgrund einer Erkrankung im Team beginnen wir am Donnerstag nicht um neun, sondern erst um elf Uhr. Bitte kommen Sie trotzdem etwas früher, damit wir in Ruhe die Formulare ausfüllen können.', n: 'İyi günler Bayan Winter, ben Doktor Seidel’in muayenehanesinden Tina Brandt. İkinci görüş randevunuz kaydığı için arıyorum. Ekipteki bir hastalık nedeniyle perşembe günü dokuzda değil, ancak on birde başlıyoruz. Yine de lütfen biraz erken gelin, formları rahatça doldurabilelim.' },
    { s: 'Tina Brandt', g: 'f', t: 'Denken Sie bitte daran, alle Befunde und die Röntgenbilder mitzubringen. Ohne diese Unterlagen kann die Ärztin den Eingriff nicht beurteilen. Falls zusätzlich Blut abgenommen wird, sollten Sie nüchtern sein. Wenn Ihnen der neue Zeitpunkt nicht passt, melden Sie sich bitte bis morgen Mittag unter der Nummer auf Ihrer Terminkarte. Wir finden dann gemeinsam eine Lösung. Falls Sie mit dem Auto kommen, planen Sie wegen der Baustelle vor der Praxis etwas mehr Zeit ein. Vielen Dank und bis Donnerstag.', n: 'Lütfen tüm tahlil sonuçlarını ve röntgenleri getirmeyi unutmayın. Bu belgeler olmadan doktor müdahaleyi değerlendiremez. Ek olarak kan alınacaksa aç karnına olmalısınız. Yeni saat size uymuyorsa lütfen yarın öğlene kadar randevu kartınızdaki numaradan bize ulaşın. Birlikte bir çözüm buluruz. Arabayla geliyorsanız muayenehanenin önündeki inşaat nedeniyle biraz daha fazla zaman ayırın. Çok teşekkürler, perşembeye kadar.' }
  ],
  gloss: { 'Praxis': 'muayenehane', 'Zweitmeinung': 'ikinci görüş', 'verschiebt': 'kayar, ertelenir (sich verschieben)', 'Erkrankung': 'hastalık', 'Befunde': 'tahlil/muayene sonuçları', 'Röntgenbilder': 'röntgen filmleri', 'Eingriff': 'müdahale, ameliyat', 'beurteilen': 'değerlendirmek', 'nüchtern': 'aç karnına', 'Terminkarte': 'randevu kartı', 'Baustelle': 'inşaat alanı, şantiye' },
  questions: [
    { id: 'de-b2-h05.q1', t: 'mc', q: 'Randevu neden kaydırıldı?', o: ['Doktor tatile çıktı.', 'Ekipteki bir hastalık nedeniyle.', 'Muayenehane taşınıyor.', 'Hasta randevuyu iptal etti.'], a: 1,
      why: { 0: 'Tatilden söz edilmiyor.', 2: 'Taşınmadan söz edilmiyor.', 3: 'Hasta iptal etmedi; muayenehane saati kaydırdı.' },
      e: '*Aufgrund einer Erkrankung im Team beginnen wir am Donnerstag nicht um neun, sondern erst um elf Uhr.*' },
    { id: 'de-b2-h05.q2', t: 'mc', q: 'Bayan Winter randevuya ne getirmeli?', o: ['Yalnızca sigorta kartını.', 'Tüm tahlil sonuçlarını ve röntgenleri.', 'Bir önceki doktorun faturasını.', 'Bir refakatçi.'], a: 1,
      why: { 0: 'Sigorta kartı anılmıyor.', 2: 'Fatura anılmıyor.', 3: 'Refakatçiden söz edilmiyor.' },
      e: '*Denken Sie bitte daran, alle Befunde und die Röntgenbilder mitzubringen.*' },
    { id: 'de-b2-h05.q3', t: 'gap', q: 'Wenn Ihnen der neue Zeitpunkt nicht passt, melden Sie sich bitte bis morgen ___.', a: ['Mittag'],
      wrong: { 'Abend': 'Telesekreterde *Mittag* (öğle) geçiyor.', 'früh': 'Telesekreterde “yarın öğlene kadar” söyleniyor.' },
      e: '*bis morgen Mittag* = yarın öğlene kadar. Hasta muayenehaneyi kendisi arar ve birlikte bir çözüm bulunur.' },
    { id: 'de-b2-h05.q4', t: 'mc', q: 'Bu mesajı annene Türkçe özetlemek istiyorsun. Hangisi doğru?', o: ['Randevu iptal edildi; yenisi için muayenehane yeniden arayacak ve belge gerekmeyecek.', 'Randevu saat dokuzda kalıyor, ek bir belge gerekmiyor ve yalnızca kan tahlili yapılacak.', 'Perşembe dokuz yerine on bir; biraz erken gelip form doldur, tahlil ve röntgenleri getir, gerekirse aç karnına ol; saat uymazsa yarın öğlene kadar ara.', 'Sadece röntgen çekilecek, diğer belgeler gerekmiyor ve randevu saatinde bir değişiklik yok.'], a: 2,
      why: { 0: 'İptal yok; yalnızca saat değişiyor.', 1: 'Saat değişti ve belgeler gerekli.', 3: 'Tüm tahlil sonuçları da isteniyor ve saat değişti.' },
      e: 'Sprachmittlung: Yeni saat, neden, getirilecek belgeler, aç karnına ve geri arama süresi sırayla aktarılır.' }
  ]
});

})(window.KOPRU);
