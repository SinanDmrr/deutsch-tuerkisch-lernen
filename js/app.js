/* Deutsch ⇄ Türkçe – App-Logik (Vanilla JS, keine Abhängigkeiten).
 * Fortschritt wird pro Profil im localStorage gespeichert (Schlüssel „dt-data“, Format & Migration: js/core/storage.js).
 */
(function () {
  'use strict';
  var K = window.KOPRU;
  var STORE = 'dt-data';            // Hauptspeicher (eigener Präfix „dt-“, gleiche Domain wie andere GitHub-Pages-Seiten)
  var BACKUP = 'dt-backup';          // Kopie vor jedem App-Update / jeder Migration
  var LEGACY_KEYS = ['kopru.v1'];    // frühere Schlüssel, werden einmalig übernommen
  var DT = window.DT;
  var SCHEMA = DT.storage.SCHEMA;    // Version des Speicherformats (Migrationen nur in js/core/storage.js)
  var APP_VERSION = '2026-11-20.1';  // bei jedem Release erhöhen (auch in index.html ?v=…)
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var app = document.getElementById('app');

  /* ================= Texte der Oberfläche (de = deutsche UI, tr = türkische UI) ================= */
  var T = {
    dashboard: ['Dashboard', 'Ana sayfa'],
    lessons: ['Lektionen', 'Dersler'],
    gaps: ['Meine Lücken', 'Eksiklerim'],
    overview: ['Gesamtüberblick', 'Genel bakış'],
    settings: ['Einstellungen', 'Ayarlar'],
    hello: ['Hallo', 'Merhaba'],
    bannerRestored: ['Dein Speicherstand war beschädigt – wir haben deine letzte Sicherung geladen. Die beschädigte Kopie bleibt aufbewahrt.', 'Kayıtlı verin bozulmuştu – son yedeğini yükledik. Bozuk kopya saklanmaya devam ediyor.'],
    bannerCorrupt: ['Dein Speicherstand war beschädigt und es gab keine Sicherung. Eine Kopie bleibt aufbewahrt (dt-corrupt) – bitte melde dich über „Rechtliches“, dann helfen wir.', 'Kayıtlı verin bozulmuştu ve yedek yoktu. Bir kopyası saklanıyor (dt-corrupt) – lütfen “Yasal bilgiler” sayfasındaki bağlantıdan bize yaz, yardımcı olalım.'],
    micNoLang: ['Dein Browser erkennt diese Sprache leider nicht – sag den Satz einfach laut.', 'Tarayıcın bu dili maalesef tanımıyor – cümleyi sadece sesli söyle.'],
    back: ['Zurück', 'Geri'],
    certBuilding: ['{lv} ist noch im Aufbau – das Zertifikat gibt es, sobald alle Themen da sind. Dein Fortschritt zählt schon jetzt mit.', '{lv} henüz hazırlanıyor – tüm konular tamamlanınca sertifikayı alabilirsin. İlerlemen şimdiden sayılıyor.'],
    building: ['im Aufbau · {a}/{n} Themen', 'hazırlanıyor · {a}/{n} konu'],
    buildingHint: ['Neue Themen kommen nach und nach dazu. Dein Fortschritt bleibt erhalten; die Prozente beziehen sich auf die Themen, die es schon gibt.', 'Yeni konular adım adım ekleniyor. İlerlemen korunur; yüzdeler şu an mevcut olan konulara göre hesaplanır.'],
    charsLabel: ['Fehlt auf deiner Tastatur?', 'Klavyende yok mu?'],
    charInsert: ['„{c}“ einfügen', '“{c}” ekle'],
    tabHome: ['Start', 'Ana sayfa'],
    tabWords: ['Wörter', 'Kelimeler'],
    tabGaps: ['Lücken', 'Eksikler'],
    tabOverview: ['Überblick', 'Genel bakış'],
    navLabel: ['Hauptnavigation', 'Ana menü'],
    skipToContent: ['Zum Inhalt springen', 'İçeriğe geç'],
    srRight: ['richtige Lösung', 'doğru cevap'],
    srYours: ['deine Antwort', 'senin cevabın'],
    srDone: ['richtig gelöst', 'doğru çözüldü'],
    srNotYet: ['noch nicht richtig', 'henüz doğru değil'],
    speakOptional: ['Sprechübung (freiwillig)', 'Konuşma alıştırması (isteğe bağlı)'],
    exercisesShort: ['Üben', 'Alıştırma'],
    reviewShort: ['Wiederholen', 'Tekrar'],
    stillOpenTitle: ['Noch {n} Aufgaben offen', '{n} alıştırma seni bekliyor'],
    skippedSome: ['Du hast {n} übersprungen – kein Problem, sie warten auf dich.', '{n} tanesini atladın – sorun değil, seni bekliyorlar.'],
    solveOpen: ['Offene Aufgaben lösen', 'Kalanları çöz'],
    gapsEmptyNew: ['Hier sammeln wir Aufgaben, die dir noch schwerfallen – im Moment ist nichts offen.', 'Zorlandığın alıştırmalar burada toplanır – şu an açık bir şey yok.'],
    plannedLevels: ['in Vorbereitung', 'hazırlanıyor'],
    placeOfferLink: ['Schon Vorkenntnisse? Einstufungstest', 'Biraz biliyor musun? Seviye testi'],
    voiceShort: ['Fast alles hörst du mit den Aufnahmen der Seite. Für einzelne Texte ohne Aufnahme bleibt es still.', 'Neredeyse her şeyi sitenin kayıtlarıyla dinlersin. Kaydı olmayan birkaç metin sessiz kalır.'],
    courseSwitched: ['Kurs gewechselt: {c}', 'Kurs değişti: {c}'],
    dashIntro: ['Hier siehst du, wie weit du auf jedem Niveau bist.', 'Her seviyede ne kadar ilerlediğini burada görürsün.'],
    levelProgress: ['Fortschritt nach Niveau', 'Seviyelere göre ilerleme'],
    continueLearning: ['Weiterlernen', 'Devam et'],
    startHere: ['Hier geht es los', 'Buradan başla'],
    start: ['Starten', 'Başla'],
    allDone: ['Alle verfügbaren Themen sind erledigt – stark! Neue Inhalte folgen.', 'Mevcut tüm konular tamam – harika! Yeni içerikler geliyor.'],
    tasks: ['Aufgaben', 'alıştırma'],
    solved: ['richtig gelöst', 'doğru çözüldü'],
    accuracy: ['Trefferquote 1. Versuch', 'İlk denemede başarı'],
    openMistakes: ['Zum Wiederholen', 'Tekrar edilecekler'],
    correct: ['richtig', 'doğru'],
    wrong: ['falsch', 'yanlış'],
    open: ['offen', 'açık'],
    comingSoon: ['Inhalte folgen', 'İçerik yakında'],
    planned: ['in Vorbereitung', 'hazırlanıyor'],
    explanation: ['Erklärung', 'Konu anlatımı'],
    exercises: ['Übungen', 'Alıştırmalar'],
    review: ['Fehler wiederholen', 'Hataları tekrarla'],
    vocab: ['Wortschatz', 'Kelimeler'],
    examples: ['Beispiele', 'Örnekler'],
    toExercises: ['Zu den Übungen →', 'Alıştırmalara geç →'],
    check: ['Lösung prüfen', 'Cevabı kontrol et'],
    next: ['Weiter →', 'Devam →'],
    finish: ['Abschließen', 'Bitir'],
    skip: ['Überspringen', 'Atla'],
    yourAnswer: ['Deine Antwort', 'Senin cevabın'],
    rightAnswer: ['Richtige Lösung', 'Doğru cevap'],
    whyWrong: ['Warum ist deine Antwort falsch?', 'Cevabın neden yanlış?'],
    whyRight: ['Warum ist das die richtige Lösung?', 'Doğru cevap neden bu?'],
    great: ['Richtig! 🎉', 'Doğru! 🎉'],
    notQuite: ['Noch nicht ganz', 'Tam olmadı'],
    specialChars: ['Fast! Achte auf die türkischen Sonderzeichen (ı, ş, ç, ğ, ö, ü) und den Apostroph.', 'Neredeyse! Almancadaki özel harflere dikkat et (ä, ö, ü, ß).'],
    caseHint: ['Fast! Achte auf Groß- und Kleinschreibung – z. B. Satzanfang, Eigennamen und den Unterschied zwischen İ/i und I/ı.', 'Neredeyse! Büyük-küçük harfe dikkat et – Almancada isimler ve cümle başı büyük harfle yazılır.'],
    punctHint: ['Fast! Achte auf die Satzzeichen (Komma, Punkt, Fragezeichen, Apostroph).', 'Neredeyse! Noktalama işaretlerine dikkat et (virgül, nokta, soru işareti, kesme işareti).'],
    casePunctHint: ['Fast! Achte auf Groß- und Kleinschreibung und auf die Satzzeichen (Komma, Punkt, Fragezeichen, Apostroph).', 'Neredeyse! Hem büyük-küçük harfe hem de noktalama işaretlerine dikkat et (virgül, nokta, soru işareti).'],
    strictNote: ['Groß- und Kleinschreibung sowie Satzzeichen zählen.', 'Büyük-küçük harf ve noktalama işaretleri de önemli.'],
    genericWrong: ['Deine Antwort passt nicht zur Regel – lies die Erklärung darunter genau.', 'Cevabın kurala uymuyor – aşağıdaki açıklamayı dikkatlice oku.'],
    typeHere: ['Antwort …', 'Cevap …'],
    orderHint: ['Tippe die Wörter in der richtigen Reihenfolge an. Antippen im Feld entfernt ein Wort wieder.', 'Kelimelere doğru sırayla dokun. Kutudaki kelimeye dokunursan geri alınır.'],
    orderEmpty: ['Hier entsteht dein Satz …', 'Cümlen burada oluşacak …'],
    matchHint: ['Wähle zu jedem Begriff die passende Übersetzung.', 'Her kelime için doğru karşılığı seç.'],
    clozeHint: ['Fülle jede Lücke aus. Mit Enter springst du zur nächsten Lücke.', 'Her boşluğu doldur. Enter tuşuyla bir sonraki boşluğa geçersin.'],
    clozeGapLabel: ['Lücke {n} von {m}', '{n}. boşluk ({m} boşluktan)'],
    clozeResult: ['Lücke {n}', '{n}. boşluk'],
    sortHint: ['Ordne jedes Wort einer Gruppe zu. Tippe dazu auf die passende Gruppe.', 'Her kelimeyi bir gruba yerleştir. Doğru gruba dokunman yeterli.'],
    sortNot: ['nicht {c}', '{c} değil'],
    choose: ['– wählen –', '– seç –'],
    question: ['Aufgabe', 'Alıştırma'],
    of: ['von', '/'],
    summaryTitle: ['Kapitel abgeschlossen', 'Bölüm tamamlandı'],
    reviewDoneTitle: ['Wiederholung beendet', 'Tekrar tamamlandı'],
    summaryText: ['{c} von {n} Aufgaben sind richtig.', '{n} alıştırmadan {c} tanesi doğru.'],
    stillOpen: ['{n} Aufgaben möchten noch einmal geübt werden.', '{n} alıştırma bir kez daha çalışılmak istiyor.'],
    reviewNow: ['Fehler jetzt wiederholen', 'Hataları şimdi tekrarla'],
    redoAll: ['Alle Aufgaben nochmal', 'Hepsini tekrar çöz'],
    backToLessons: ['Zur Lektionsübersicht', 'Ders listesine dön'],
    nextTopic: ['Nächstes Thema →', 'Sonraki konu →'],
    noMistakes: ['Keine offenen Fehler – super! 💪', 'Açık hata yok – harika! 💪'],
    noMistakesTopic: ['In diesem Kapitel gibt es keine offenen Fehler.', 'Bu bölümde açık hata yok.'],
    gapsIntro: ['Hier landet jede Aufgabe, die du falsch beantwortet hast – mit deiner Antwort und der richtigen Lösung. Sobald du sie richtig löst, verschwindet sie.', 'Yanlış cevapladığın her alıştırma burada toplanır – senin cevabın ve doğru cevapla birlikte. Doğru çözdüğünde listeden kalkar.'],
    practiceAll: ['Alle Fehler üben', 'Tüm hataları çalış'],
    practiceTopic: ['Üben', 'Çalış'],
    problemAreas: ['Hier lohnt sich Wiederholen', 'Tekrar etmeye değer konular'],
    problemIntro: ['Themen, bei denen du beim ersten Versuch am häufigsten falsch lagst.', 'İlk denemede en çok hata yaptığın konular.'],
    errorRate: ['Fehlerquote', 'Hata oranı'],
    lastWrong: ['Zuletzt', 'Son cevabın'],
    solution: ['Lösung', 'Doğrusu'],
    times: ['× falsch', '× yanlış'],
    overviewIntro: ['Alle Themen auf einen Blick: wie viel davon ist richtig, falsch oder noch offen.', 'Tüm konular bir bakışta: ne kadarı doğru, yanlış ya da açık.'],
    topic: ['Thema', 'Konu'],
    total: ['Gesamt', 'Toplam'],
    totalProgress: ['Fortschritt {lv}', '{lv} ilerlemesi'],
    theme: ['Darstellung', 'Görünüm'],
    light: ['☀️ Hell', '☀️ Açık'],
    dark: ['🌙 Dunkel', '🌙 Koyu'],
    system: ['🖥️ System', '🖥️ Sistem'],
    course: ['Kurs', 'Kurs'],
    profiles: ['Profile auf diesem Gerät', 'Bu cihazdaki profiller'],
    profilesIntro: ['Jedes Profil hat seinen eigenen Fortschritt – praktisch, wenn mehrere Personen dasselbe Gerät nutzen.', 'Her profilin kendi ilerlemesi vardır – aynı cihazı birden fazla kişi kullanıyorsa pratik.'],
    newProfile: ['Neues Profil', 'Yeni profil'],
    namePh: ['Name', 'İsim'],
    create: ['Anlegen', 'Oluştur'],
    switchTo: ['Wechseln', 'Geç'],
    del: ['Löschen', 'Sil'],
    active: ['aktiv', 'aktif'],
    data: ['Daten & Sicherung', 'Veriler ve yedek'],
    storageNote: ['Dein Fortschritt wird nur lokal in diesem Browser gespeichert. Mit Export/Import kannst du ihn auf ein anderes Gerät mitnehmen.', 'İlerlemen sadece bu tarayıcıda saklanır. Dışa/içe aktar ile başka bir cihaza taşıyabilirsin.'],
    exportBtn: ['⬇️ Exportieren', '⬇️ Dışa aktar'],
    importBtn: ['⬆️ Importieren', '⬆️ İçe aktar'],
    resetCourse: ['Fortschritt dieses Kurses löschen', 'Bu kursun ilerlemesini sil'],
    confirmReset: ['Wirklich den gesamten Fortschritt dieses Kurses löschen?', 'Bu kurstaki tüm ilerleme silinsin mi?'],
    confirmDelete: ['Profil „{n}“ wirklich löschen?', '“{n}” profili silinsin mi?'],
    clickAgain: ['→ zum Bestätigen nochmal klicken', '→ onaylamak için tekrar tıkla'],
    imported: ['Fortschritt importiert ✔', 'İlerleme içe aktarıldı ✔'],
    transferTitle: ['Auf ein anderes Gerät übertragen', 'Başka bir cihaza aktar'],
    transferIntro: ['Dein Fortschritt liegt nur in diesem Browser. Mit einem Übertragungslink holst du ihn auf dein anderes Gerät – ohne Konto und ohne Server. Beim Einlesen wird zusammengeführt: pro Aufgabe gilt der neuere Stand, nichts wird gelöscht.', 'İlerlemen yalnızca bu tarayıcıda kayıtlıdır. Aktarım bağlantısıyla onu hesap ve sunucu olmadan diğer cihazına taşıyabilirsin. İçe aktarırken veriler birleştirilir: her görev için daha yeni olan durum geçerli olur, hiçbir şey silinmez.'],
    guideToPc: ['📱 → 💻 Vom Handy auf PC / Laptop', '📱 → 💻 Telefondan bilgisayara'],
    guideToPhone: ['💻 → 📱 Vom PC / Laptop auf Handy', '💻 → 📱 Bilgisayardan telefona'],
    guidePc1: ['Am Handy: Tippe unten auf „🔗 Übertragungslink erstellen“.', 'Telefonda: Aşağıdaki “🔗 Aktarım bağlantısı oluştur” düğmesine dokun.'],
    guidePc2: ['Tippe auf „📤 Teilen“ und schicke den Link an dich selbst – zum Beispiel per WhatsApp (Chat mit „Du“), Telegram („Gespeicherte Nachrichten“) oder E-Mail an dich.', '“📤 Paylaş”a dokun ve bağlantıyı kendine gönder – örneğin WhatsApp (“Siz” sohbeti), Telegram (“Kayıtlı Mesajlar”) ya da kendi e-posta adresine.'],
    guidePc3: ['Am PC / Laptop: Öffne dieselbe Nachricht (WhatsApp Web, Telegram Web oder dein E-Mail-Postfach im Browser) und klicke auf den Link.', 'Bilgisayarda: Aynı mesajı aç (WhatsApp Web, Telegram Web ya da tarayıcıdaki e-posta kutun) ve bağlantıya tıkla.'],
    guidePc4: ['Die Seite öffnet sich und zeigt, was gefunden wurde. Klicke auf „Zusammenführen“ – fertig.', 'Sayfa açılır ve nelerin bulunduğunu gösterir. “Birleştir”e tıkla – bu kadar.'],
    guideLap1: ['Am PC / Laptop: Klicke unten auf „🔗 Übertragungslink erstellen“.', 'Bilgisayarda: Aşağıdaki “🔗 Aktarım bağlantısı oluştur” düğmesine tıkla.'],
    guideLap2: ['Klicke auf „📋 Link kopieren“ oder „✉️ Per E-Mail an mich“. Füge den Link in einen Chat mit dir selbst ein (WhatsApp Web: Chat mit „Du“, Telegram: „Gespeicherte Nachrichten“).', '“📋 Bağlantıyı kopyala” ya da “✉️ Kendime e-postayla gönder”e tıkla. Bağlantıyı kendinle olan bir sohbete yapıştır (WhatsApp Web’de “Siz” sohbeti, Telegram’da “Kayıtlı Mesajlar”).'],
    guideLap3: ['Am Handy: Öffne die Nachricht und tippe auf den Link.', 'Telefonda: Mesajı aç ve bağlantıya dokun.'],
    guideLap4: ['Tippe auf „Zusammenführen“ – fertig.', '“Birleştir”e dokun – bu kadar.'],
    guideNote: ['Wichtig: Der Fortschritt gehört zum Browser. Öffnet sich der Link in einem anderen Browser als sonst (z. B. Samsung Internet statt Chrome), landet der Stand dort. Kopiere den Link dann und füge ihn in deinem gewohnten Browser bei „Link oder Code einfügen“ ein.', 'Önemli: İlerleme tarayıcıya bağlıdır. Bağlantı her zaman kullandığından farklı bir tarayıcıda açılırsa (örneğin Chrome yerine Samsung Internet), durum orada kaydedilir. O zaman bağlantıyı kopyala ve alışık olduğun tarayıcıda “Bağlantıyı ya da kodu yapıştır” alanına yapıştır.'],
    guideFile: ['Alternative ohne Link: „⬇️ Exportieren“ → Datei per LocalSend, AirDrop, Quick Share, Kabel oder E-Mail aufs andere Gerät → dort „⬆️ Importieren“.', 'Bağlantı olmadan: “⬇️ Dışa aktar” → dosyayı LocalSend, AirDrop, Quick Share, kablo ya da e-postayla diğer cihaza gönder → orada “⬆️ İçe aktar”.'],
    transferMake: ['🔗 Übertragungslink erstellen', '🔗 Aktarım bağlantısı oluştur'],
    transferShare: ['📤 Teilen', '📤 Paylaş'],
    transferCopy: ['📋 Link kopieren', '📋 Bağlantıyı kopyala'],
    transferMail: ['✉️ Per E-Mail an mich', '✉️ Kendime e-postayla gönder'],
    transferCopied: ['Link kopiert ✔', 'Bağlantı kopyalandı ✔'],
    transferMailLong: ['Der Link ist für eine E-Mail-Vorschau zu lang – nutze „Teilen“ oder „Link kopieren“.', 'Bağlantı e-posta için fazla uzun – “Paylaş” ya da “Bağlantıyı kopyala”yı kullan.'],
    transferMailSubject: ['Mein Lernstand – Deutsch ⇄ Türkçe', 'İlerlemem – Deutsch ⇄ Türkçe'],
    transferMailBody: ['Link zum Übertragen meines Lernstands (nur für mich):', 'İlerlememi aktarmak için bağlantı (sadece benim için):'],
    transferPrivacy: ['Der Link enthält deinen Lernstand, aber keinen Namen. Er steht hinter dem „#“ und wird deshalb nie an diese Seite oder an GitHub gesendet. Nur dein Chat- bzw. E-Mail-Dienst sieht ihn beim Verschicken. Schicke ihn nur dir selbst – wer ihn hat, kann deinen Lernstand sehen.', 'Bağlantı öğrenme durumunu içerir, ama adını içermez. “#” işaretinden sonra gelir, bu yüzden bu siteye ya da GitHub’a hiç gönderilmez. Sadece kullandığın sohbet ya da e-posta hizmeti, göndermen sırasında onu görür. Yalnızca kendine gönder – bağlantıya sahip olan herkes öğrenme durumunu görebilir.'],
    transferPaste: ['Link oder Code einfügen', 'Bağlantıyı ya da kodu yapıştır'],
    transferPastePh: ['Hier den Link oder Code einfügen …', 'Bağlantıyı ya da kodu buraya yapıştır …'],
    transferCheck: ['Prüfen', 'Kontrol et'],
    transferFound: ['Fortschritt von einem anderen Gerät gefunden: {n} Einträge, davon {c} neu oder aktueller als hier (Stand {d}).', 'Başka bir cihazdan ilerleme bulundu: {n} kayıt, bunların {c} tanesi burada yok ya da buradakinden daha yeni ({d} tarihli).'],
    transferOther: ['Außerdem werden Serie, Abzeichen oder Einstufung abgeglichen.', 'Ayrıca seri, rozetler ya da seviye tespiti de eşitlenir.'],
    transferNothing: ['Dein Stand hier ist bereits gleich oder neuer – es würde nichts geändert.', 'Buradaki durumun zaten aynı ya da daha yeni – hiçbir şey değişmeyecek.'],
    transferSafe: ['Vor dem Zusammenführen wird automatisch eine Sicherung angelegt. Dein Stand hier wird nicht gelöscht.', 'Birleştirmeden önce otomatik yedek alınır. Buradaki durumun silinmez.'],
    transferMerge: ['Zusammenführen', 'Birleştir'],
    transferCancel: ['Abbrechen', 'Vazgeç'],
    transferUnsupported: ['Dieser Browser kann den Link nicht entpacken – bitte aktualisiere ihn oder nutze Export/Import.', 'Bu tarayıcı bağlantıdaki verileri okuyamıyor – lütfen güncelle ya da dışa/içe aktarmayı kullan.'],
    transferFail: ['Link oder Code nicht erkannt. Kopiere ihn bitte vollständig.', 'Bağlantı ya da kod tanınmadı. Lütfen bağlantının tamamını kopyala.'],
    importFail: ['Datei konnte nicht gelesen werden.', 'Dosya okunamadı.'],
    noRecording: ['Für diesen Satz gibt es noch keine Aufnahme – sie kommt mit dem nächsten Update.', 'Bu cümlenin ses kaydı henüz yok – bir sonraki güncellemeyle gelecek.'],
    importNewer: ['Diese Datei stammt aus einer neueren Version – bitte Seite neu laden (Strg+F5) und erneut importieren.', 'Bu dosya daha yeni bir sürümden – lütfen sayfayı yenile (Ctrl+F5) ve tekrar içe aktar.'],
    switched: ['Kurs gewechselt', 'Kurs değiştirildi'],
    listen: ['Anhören', 'Dinle'],
    themeToggle: ['Hell/Dunkel umschalten', 'Açık/koyu tema'],
    courseToggle: ['Kurs wechseln', 'Kursu değiştir'],
    newBadge: ['neu', 'yeni'],
    doneBadge: ['fertig', 'bitti'],
    mistakesBadge: ['zum Wiederholen', 'tekrar'],
    rights: ['Alle Rechte vorbehalten', 'Tüm hakları saklıdır'],
    badges: ['Abzeichen', 'Rozetler'],
    badgeNew: ['Neues Abzeichen', 'Yeni rozet'],
    badgesNew: ['{n} neue Abzeichen!', '{n} yeni rozet!'],
    badgesAll: ['Alle ansehen', 'Hepsini gör'],
    badgesNone: ['Noch keine – dein erstes gibt es schon für die erste Antwort.', 'Henüz yok – ilkini daha ilk cevabında kazanırsın.'],
    badgeGot: ['erhalten am {d}', '{d} tarihinde kazanıldı'],
    certTitle: ['{lv}-Zertifikat', '{lv} sertifikası'],
    certCond: ['80 % der Aufgaben richtig und 70 % der Wörter sicher', 'Alıştırmaların %80’i doğru ve kelimelerin %70’i oturmuş olmalı'],
    certEx: ['Aufgaben: {p}\u00a0% (Ziel 80\u00a0%)', 'Alıştırmalar: %{p} (hedef %80)'],
    certWords: ['Wörter: {p}\u00a0% (Ziel 70\u00a0%)', 'Kelimeler: %{p} (hedef %70)'],
    certGet: ['Zertifikat holen', 'Sertifikanı al'],
    certNotYet: ['Noch nicht ganz – sobald du die Ziele erreichst, kannst du hier dein Zertifikat herunterladen.', 'Henüz değil – hedeflere ulaştığında sertifikanı buradan indirebilirsin.'],
    certIntro: ['Glückwunsch! Trag deinen Namen ein und lade dein Zertifikat als Bild herunter.', 'Tebrikler! Adını yaz ve sertifikanı resim olarak indir.'],
    certName: ['Name auf dem Zertifikat', 'Sertifikadaki isim'],
    certDownload: ['Als Bild herunterladen', 'Resim olarak indir'],
    certDisclaimer: ['Das ist ein Nachweis für dein Selbstlernen, kein offizielles Sprachzertifikat (z. B. Goethe, telc, Yunus Emre).', 'Bu, kendi kendine öğrenmenin bir belgesidir; resmî bir dil sertifikası değildir (ör. Goethe, telc, Yunus Emre).'],
    certFail: ['Bild konnte nicht erstellt werden.', 'Resim oluşturulamadı.'],
    micInfoTitle: ['Kurz vorab zum Mikrofon', 'Mikrofon hakkında kısa bir bilgi'],
    micInfoText: ['Die Spracherkennung macht dein Browser, nicht diese Seite. Je nach Browser wird die Aufnahme dafür an dessen Anbieter geschickt (z. B. Chrome an Google). Wir selbst empfangen und speichern nichts. Die Übung ist freiwillig – du kannst den Satz auch einfach laut sagen.', 'Konuşmayı bu site değil, tarayıcın tanır. Tarayıcına göre kayıt bunun için sağlayıcısına gönderilir (ör. Chrome’da Google’a). Biz hiçbir şey almıyor ve saklamıyoruz. Alıştırma isteğe bağlı – cümleyi sadece sesli söyleyebilirsin de.'],
    micInfoOk: ['Verstanden – Mikrofon starten', 'Anladım – mikrofonu başlat'],
    placeTitle: ['Einstufungstest', 'Seviye testi'],
    placeIntro: ['Du kannst schon etwas Türkisch? Dann finde in ein paar Minuten heraus, welche A1-Themen du überspringen kannst.', 'Biraz Almancan var mı? Birkaç dakikada hangi A1 konularını atlayabileceğini öğren.'],
    placeHow1: ['ca. 5 Minuten, höchstens 24 Fragen', 'yaklaşık 5 dakika, en fazla 24 soru'],
    placeHow2: ['pro Thema 1–2 Fragen – zwei richtig heißt: sitzt', 'her konudan 1–2 soru – ikisi de doğruysa konu tamam'],
    placeHow3: ['zählt nicht in deine Statistik und landet nicht in „Meine Lücken“', 'istatistiğine sayılmaz, “Eksiklerim”e de düşmez'],
    placePrev: ['Letzter Test am {d}: {n} Themen sicher.', 'Son test {d} tarihinde: {n} konu tamam.'],
    placeStart: ['Test starten', 'Teste başla'],
    placeSkipTest: ['Lieber von vorn anfangen', 'Baştan başlamayı tercih ederim'],
    placeProgress: ['Thema {i} von {n}', 'Konu {i} / {n}'],
    placeDone: ['Test geschafft!', 'Test bitti!'],
    placeScore: ['{m} von {n} geprüften Themen sitzen schon.', 'Sorulan {n} konudan {m} tanesi zaten oturmuş.'],
    placeStartAt: ['Starte am besten bei: {x}', 'En iyisi şuradan başla: {x}'],
    placeAllKnown: ['Alle A1-Themen sitzen – stark!', 'Tüm A1 konuları oturmuş – harika!'],
    placeSkipQ: ['Welche Themen möchtest du überspringen? Du kannst sie später jederzeit trotzdem üben.', 'Hangi konuları atlamak istersin? İstediğin zaman yine de çalışabilirsin.'],
    placeKnown: ['sitzt', 'tamam'],
    placeLearn: ['üben', 'çalış'],
    placeNotAsked: ['nicht gefragt', 'sorulmadı'],
    placeApply: ['Übernehmen', 'Kaydet'],
    placeNone: ['Nichts überspringen', 'Hiçbirini atlama'],
    placeSaved: ['Gespeichert – los geht’s!', 'Kaydedildi – haydi başlayalım!'],
    placeOfferTitle: ['Schon Vorkenntnisse?', 'Biraz Almancan var mı?'],
    placeOfferText: ['Mit dem Einstufungstest überspringst du, was du schon kannst – dauert etwa 5 Minuten.', 'Seviye testiyle bildiğin konuları atlarsın – yaklaşık 5 dakika sürer.'],
    skippedBadge: ['übersprungen', 'atlandı'],
    skippedPct: ['{p}\u00a0% übersprungen', '%{p} atlandı'],
    skippedInfo: ['Dieses Thema hast du nach dem Einstufungstest übersprungen. Üben kannst du es trotzdem jederzeit.', 'Bu konuyu seviye testinden sonra atladın. Yine de istediğin zaman çalışabilirsin.'],
    undoSkip: ['Nicht mehr überspringen', 'Artık atlama'],
    legal: ['Rechtliches & Datenschutz', 'Yasal bilgiler ve gizlilik'],
    legalIntro: ['Urheberrecht, verwendete Open-Source-Bestandteile mit Lizenzen und was mit deinen Daten passiert.', 'Telif hakkı, kullandığımız açık kaynak bileşenler ve lisansları, verilerine ne olduğu.'],
    legalOpen: ['Öffnen', 'Aç'],
    footer: ['Türkisch lernen · Dein Fortschritt bleibt in deinem Browser', 'Almanca Öğren · İlerlemen tarayıcında kalır'],
    fromAllTopics: ['Fehler aus allen Themen', 'Tüm konulardan hatalar'],
    mixedPractice: ['Fehlertraining', 'Hata çalışması'],
    goLessons: ['Zu den Lektionen', 'Derslere git'],
    // Deutsche Texte (Kurs „Türkisch lernen“) und türkische Texte (Kurs „Almanca Öğren“) – bewusst frei formuliert, nicht 1:1 übersetzt
    mascotNew: ['Hallo, ich bin Lingo! Schön, dass du da bist – lass uns mit der ersten Lektion starten. Türkisch, wir kommen!',
      'Merhaba, ben Lingo! Hoş geldin – hadi ilk dersle başlayalım. Almanca seni bekliyor!'],
    mascotToday: ['Du hast heute schon gelernt – klasse! Wenn du so weitermachst, sprichst du Türkisch im Handumdrehen. 👍',
      'Bugün de çalıştın, helal olsun! Böyle devam edersen Almancayı su gibi konuşacaksın. 👍'],
    mascotYesterday: ['Du hast gestern schon gelernt – super, dass du heute wieder da bist! Weiter so, dann kannst du Türkisch im Handumdrehen. 👍',
      'Dün de çalışmışsın, bugün yine buradasın – süpersin! Bu tempoyla Almancayı kısa sürede kaparsın. 👍'],
    mascotDays: ['Hi, schön, dich wieder hier zu sehen! Dein letztes Training ist {n} Tage her – super, dass du weiterlernen willst. Bleib dran, dann lernst du ganz schnell Türkisch.',
      'Selam, seni yeniden görmek ne güzel! Son çalışmanın üzerinden {n} gün geçti. Devam etmek istemen harika – azimle sürdür, Almancayı çok çabuk öğreneceksin.'],
    mascotSad: ['Oh … da bist du ja wieder. Dein letztes Training ist schon {n} Tage her – ich hab dich echt vermisst! 🥺 Lass uns heute wenigstens eine kleine Runde machen, sonst rostet dein Türkisch ein.',
      'Ah, sonunda geldin… Son çalışmanın üzerinden tam {n} gün geçmiş, seni çok özledim! 🥺 Hadi bugün küçük bir tur yapalım, yoksa Almancan paslanacak.'],
    lastLearned: ['Zuletzt gelernt', 'Son çalışma'],
    voiceTitle: ['Vorlesen', 'Sesli okuma'],
    voiceFor: ['Stimme für Türkisch', 'Almanca için ses'],
    voiceTip: ['★ = automatisch gewählt (die natürlichste gefundene Stimme). Am besten klingen „Natural/Online“-Stimmen in Microsoft Edge oder Google-Stimmen in Chrome.', '★ = otomatik seçilen (bulunan en doğal ses). En iyi sonucu Microsoft Edge’deki “Natural/Online” sesler veya Chrome’daki Google sesleri verir.'],
    voiceMissing: ['Keine türkische Stimme gefunden', 'Almanca ses bulunamadı'],
    noSpeech: ['Dieser Browser kann nicht vorlesen.', 'Bu tarayıcı sesli okuma desteklemiyor.'],
    test: ['Testen', 'Dene'],
    words: ['Wortschatz', 'Kelimeler'],
    wordsN: ['Wörter', 'kelime'],
    wordsIntro: ['Lerne die wichtigsten Wörter mit Karteikarten. Jedes Wort kommt genau dann wieder, wenn du es sonst vergessen würdest – erst morgen, dann nach 3 Tagen, einer Woche …', 'En önemli kelimeleri kartlarla öğren. Her kelime tam unutmak üzereyken tekrar karşına çıkar – önce yarın, sonra 3 gün, bir hafta sonra …'],
    wordsKnown: ['Wörter sicher', 'kelime oturdu'],
    known: ['sicher', 'oturdu'],
    learning: ['im Lernen', 'öğreniliyor'],
    newWordsN: ['neu', 'yeni'],
    learnNew: ['Neue Wörter lernen', 'Yeni kelimeler öğren'],
    learnNewN: ['{n} neue Wörter lernen', '{n} yeni kelime öğren'],
    learnMore: ['Weitere Wörter', 'Daha fazla kelime'],
    practiceField: ['Wörter üben', 'Kelimeleri çalış'],
    reviewDue: ['{n} Wiederholungen bereit', '{n} tekrar hazır'],
    reviewTitle: ['Wiederholen', 'Tekrar et'],
    reviewIntro: ['Diese Wörter und Aufgaben sind heute dran – so bleiben sie im Langzeitgedächtnis.', 'Bu kelimeler ve alıştırmalar bugün sırada – böylece uzun süreli hafızana yerleşir.'],
    nothingDue: ['Heute ist nichts fällig – super!', 'Bugün tekrar edilecek bir şey yok – süper!'],
    newWord: ['Neues Wort', 'Yeni kelime'],
    plural: ['Plural', 'Çoğul'],
    example: ['Beispiel', 'Örnek'],
    knowIt: ['Kenne ich schon', 'Bunu biliyorum'],
    vqPick: ['Was bedeutet **{w}**?', '**{w}** ne demek?'],
    vqListen: ['Was hörst du? Wähle die Bedeutung.', 'Ne duyuyorsun? Anlamını seç.'],
    vqRev: ['Wie heißt **{w}** auf Türkisch?', '**{w}** Almancada nasıl denir?'],
    vqType: ['Schreib auf Türkisch: **{w}**', 'Almanca yaz: **{w}**'],
    vqWrongIs: ['„{a}“ gehört zu „{b}“.', '“{a}”, “{b}” demektir.'],
    vqArticle: ['Fast! Lerne das Wort immer mit Artikel: **{w}**.', 'Neredeyse! Kelimeyi her zaman artikeliyle öğren: **{w}**.'],
    dailyMix: ['5-Minuten-Tagesmix', '5 dakikalık günlük karışım'],
    dailyIntro: ['Erst Wiederholungen, dann ein paar neue Wörter und Aufgaben aus deinen Themen.', 'Önce tekrarlar, sonra birkaç yeni kelime ve konularından alıştırmalar.'],
    mixEmpty: ['Starte zuerst ein Thema in den Lektionen – dann stelle ich dir hier jeden Tag einen Mix zusammen.', 'Önce derslerden bir konuya başla – sonra sana burada her gün bir karışım hazırlarım.'],
    todayGoal: ['Dein Tagesziel', 'Günlük hedefin'],
    goalReached: ['Tagesziel geschafft! 🎉', 'Günlük hedef tamam! 🎉'],
    goalReachedLong: ['Tagesziel für heute erreicht – stark! Alles Weitere ist Bonus.', 'Bugünkü hedefe ulaştın – harika! Gerisi bonus.'],
    goalProgress: ['Heute: {d} von {g} – fast geschafft!', 'Bugün: {g} hedefin {d} tanesi tamam – az kaldı!'],
    streakDays: ['{n} Tage in Folge', '{n} gün üst üste'],
    streakDay1: ['1 Tag – deine Serie startet', 'Serin başladı: 1 gün'],
    done: ['geschafft', 'tamam'],
    streakStart: ['Erreiche heute dein Ziel und starte eine Serie.', 'Bugün hedefine ulaş ve bir seri başlat.'],
    pauseFree: ['1 Pausentag diese Woche frei', 'bu hafta 1 mola günün var'],
    pauseUsed: ['Pausentag dieser Woche genutzt', 'bu haftanın mola günü kullanıldı'],
    dueN: ['{n} Wiederholungen', '{n} tekrar'],
    startMix: ['Tagesmix starten', 'Günlük karışımı başlat'],
    sessionDone: ['Runde geschafft', 'Tur tamam'],
    dailyGoal: ['Tagesziel', 'Günlük hedef'],
    dailyGoalIntro: ['Wie viele Antworten möchtest du pro Tag schaffen? Ein Tag zählt für deine Serie, wenn du das Ziel erreichst – ein Pausentag pro Woche ist erlaubt.', 'Günde kaç cevap vermek istiyorsun? Hedefe ulaştığın gün serine sayılır – haftada bir mola günü serbest.'],
    perDay: ['pro Tag', 'günde'],
    mascotGoal: ['Tagesziel geschafft – ich bin stolz auf dich! So wird Türkisch ganz schnell deins. 👍', 'Günlük hedefi tamamladın – seninle gurur duyuyorum! Böyle giderse Almanca çok yakında senin. 👍'],
    bannerSaveFail: ['Dein Fortschritt kann gerade nicht gespeichert werden (Speicher voll oder gesperrt). Bitte exportiere ihn zur Sicherheit.', 'İlerlemen şu an kaydedilemiyor (depolama dolu veya engelli). Lütfen güvenlik için dışa aktar.'],
    bannerReadOnly: ['Deine Daten konnten nicht aktualisiert werden. Sie sind unverändert gesichert – bitte exportiere sie und melde den Fehler.', 'Verilerin güncellenemedi. Değiştirilmeden saklanıyor – lütfen dışa aktar ve hatayı bildir.'],
    bannerNewer: ['Diese Daten stammen von einer neueren Version der Seite. Bitte neu laden.', 'Bu veriler sitenin daha yeni bir sürümüne ait. Lütfen sayfayı yenile.'],
    reload: ['Neu laden', 'Yenile'],
    audioMissing: ['Für diese Höraufgabe ist gerade kein Ton verfügbar (z. B. direkt nach einem Update). Überspring sie einfach – sie wird nicht gewertet.', 'Bu dinleme alıştırması için şu an ses yok (ör. bir güncellemeden hemen sonra). Atlayabilirsin – puanlanmaz.'],
    speakQ: ['Sprich den Satz laut nach.', 'Cümleyi yüksek sesle tekrarla.'],
    speakNow: ['Jetzt sprechen', 'Şimdi konuş'],
    listening: ['Ich höre zu …', 'Dinliyorum …'],
    recognized: ['Erkannt', 'Algılanan'],
    micDenied: ['Mikrofon nicht erlaubt – bitte im Browser freigeben.', 'Mikrofona izin verilmedi – lütfen tarayıcıdan izin ver.'],
    micNoSpeech: ['Nichts gehört – versuch es noch einmal, etwas lauter.', 'Bir şey duyamadım – biraz daha yüksek sesle tekrar dene.'],
    noMic: ['Dein Browser kann keine Sprache erkennen (z. B. Firefox). Sprich den Satz trotzdem laut nach und bestätige.', 'Tarayıcın konuşmayı algılayamıyor (ör. Firefox). Cümleyi yine de yüksek sesle söyle ve onayla.'],
    saidAloud: ['Ich habe es laut gesagt', 'Yüksek sesle söyledim'],
    speakAlmost: ['Fast! Hör dir die Aussprache noch einmal an und sprich langsam und deutlich.', 'Neredeyse! Telaffuzu bir kez daha dinle, yavaş ve net konuş.'],
    speakRetry: ['Das wurde noch nicht erkannt. Hör zuerst zu (🐢 hilft) und versuche es noch einmal.', 'Henüz algılanmadı. Önce dinle (🐢 yardımcı olur) ve tekrar dene.'],
    tryAgain: ['Nochmal sprechen', 'Tekrar konuş'],
    playDialog: ['Ganzen Dialog anhören', 'Tüm diyaloğu dinle'],
    translation: ['Übersetzung', 'Çeviri'],
    dialogTip: ['Tipp: Erst anhören und mitlesen, dann die Übersetzung einblenden. Mit 🔊 hörst du jede Zeile einzeln.', 'İpucu: Önce dinleyip takip et, sonra çeviriyi aç. 🔊 ile her satırı ayrı dinleyebilirsin.'],
    toQuestions: ['Zu den Fragen →', 'Sorulara geç →'],
    dialogsTitle: ['Alltagsdialoge', 'Günlük diyaloglar'],
    dialogTab: ['Dialog', 'Diyalog'],
    roleQ: ['Du spielst: {r}. Was sagst du?', 'Rolün: {r}. Ne dersin?'],
    roleCtx: ['Bisheriges Gespräch', 'Şimdiye kadarki konuşma'],
    roleTip: ['Rollenspiel: In den Aufgaben übernimmst du die Rolle „{r}“ und wählst jeweils die passende Antwort – auch auf Höflichkeit und Ton kommt es an.', 'Rol oyunu: Alıştırmalarda „{r}“ rolünü üstlenir, her seferinde uygun cevabı seçersin; nezaket ve üslup da önemlidir.'],
    roleYouSay: ['So passt es', 'Doğrusu şu'],
    textsTitle: ['Lesetexte', 'Okuma metinleri'],
    textTab: ['Text', 'Metin'],
    listenTab: ['Hören', 'Dinleme'],
    listenTip: ['Tipp: Hör zuerst nur zu, ohne mitzulesen. Danach beantwortest du die Fragen. Der Text bleibt verborgen, bis du „Text zeigen“ antippst.', 'İpucu: Önce metne bakmadan yalnızca dinle, sonra soruları cevapla. Metin, “Metni göster” düğmesine dokunana kadar gizli kalır.'],
    listenHint: ['Empfehlung: {n}-mal anhören.', 'Öneri: {n} kez dinle.'],
    listenCount: ['{n}. Mal gehört', '{n}. kez dinlendi'],
    listenNow: ['Es spricht: {s}', 'Konuşan: {s}'],
    listenStop: ['Stopp', 'Durdur'],
    listenNoAudio: ['Für diesen Hörtext gibt es auf diesem Gerät gerade keine Aufnahme. Du kannst die Fragen mit „Überspringen“ auslassen – sie zählen dann nicht.', 'Bu dinleme metni için bu cihazda şu an kayıt yok. Soruları “Atla” ile geçebilirsin; bunlar değerlendirmeye girmez.'],
    transcriptShow: ['Text zeigen', 'Metni göster'],
    transcriptHide: ['Text verbergen', 'Metni gizle'],
    textTip: ['Tipp: Lies den Text in Ruhe, auch mehrmals. Mit 🔊 hörst du jeden Absatz. Die Fragen findest du danach – der Text bleibt dabei sichtbar.', 'İpucu: Metni acele etmeden, gerekirse birkaç kez oku. 🔊 ile her paragrafı dinleyebilirsin. Sorular hemen ardından gelir; metin soruları cevaplarken de görünür kalır.'],
    glossTitle: ['Wörter zum Text', 'Metindeki kelimeler'],
    textShow: ['Text anzeigen', 'Metni göster'],
    textHide: ['Text ausblenden', 'Metni gizle'],
    textPanel: ['Text', 'Metin'],
    play: ['Anhören', 'Dinle'],
    slow: ['Langsam', 'Yavaş'],
    listenQ: ['Was hörst du?', 'Ne duyuyorsun?'],
    dictationQ: ['Hör zu und schreib, was du hörst.', 'Dinle ve duyduğunu yaz.'],
    typeWhatYouHear: ['Was hörst du?', 'Duyduğunu yaz …'],
    heard: ['Zu hören war', 'Okunan'],
    voiceAuto: ['Automatisch', 'Otomatik'],
    piperInfo: ['Beispiele, Vokabeln und Lösungen werden mit Open-Source-Stimmen (Piper) vorgelesen – auf jedem Gerät gleich:', 'Örnekler, kelimeler ve cevaplar açık kaynak seslerle (Piper) okunur – her cihazda aynı:'],
    piperMissing: ['Die Open-Source-Audiodateien werden gerade erzeugt oder sind nicht erreichbar – bis dahin wird die Gerätestimme genutzt.', 'Açık kaynak ses dosyaları şu an hazırlanıyor veya erişilemiyor – o zamana kadar cihaz sesi kullanılır.'],
    samples: ['Hörproben', 'Ses örnekleri'],
    deviceVoice: ['Gerätestimme (für alles andere)', 'Cihaz sesi (diğer her şey için)'],
    female: ['Weiblich', 'Kadın'],
    male: ['Männlich', 'Erkek'],
    notInstalled: ['Auf diesem Gerät nicht installiert', 'Bu cihazda yüklü değil'],
    genderMissing: ['Für dieses Geschlecht ist hier keine passende Stimme installiert – es wird die beste verfügbare genutzt.', 'Bu cinsiyet için uygun ses yüklü değil – mevcut en iyi ses kullanılıyor.'],
    // Schreibwerkstatt (ADR-13)
    writeTitle: ['Schreibwerkstatt', 'Yazma atölyesi'],
    wordsShort: ['Wörter', 'kelime'],
    writeTask: ['Deine Aufgabe', 'Görevin'],
    writeNoGrade: ['Selbstkontrolle, keine Note: Du vergleichst deinen Text selbst mit dem Mustertext.', 'Kendini kontrol et, not yok: Metnini örnek metinle kendin karşılaştırırsın.'],
    writeReg: ['Anrede', 'Hitap'],
    writeRegDu: ['du (vertraut)', 'du (samimi)'],
    writeRegSie: ['Sie (höflich)', 'Sie (resmî)'],
    writeRegSen: ['sen (vertraut)', 'sen (samimi)'],
    writeRegSiz: ['siz (höflich)', 'siz (resmî)'],
    writeWordsGoal: ['Ziel: etwa {z} Wörter (mindestens {m})', 'Hedef: yaklaşık {z} kelime (en az {m})'],
    writeChunks: ['Redemittel', 'Kalıplar'],
    writeChunksHint: ['Antippen fügt den Baustein an der Schreibmarke ein. „…“ ersetzt du durch eigene Wörter.', 'Dokununca kalıp imlecin olduğu yere eklenir. „…“ yerine kendi kelimelerini yaz.'],
    writeYourText: ['Dein Text', 'Senin metnin'],
    writeCount: ['{n} / Ziel {z} (min. {m})', '{n} / hedef {z} (en az {m})'],
    writeSaved: ['Entwurf gespeichert {t}', 'Taslak kaydedildi {t}'],
    writeSavedAt: ['Entwurf vom {t}', 'Taslak: {t}'],
    writeDone: ['Fertig', 'Bitti'],
    writeBelowMin: ['Noch unter {m} Wörtern – du kannst trotzdem abgeben.', 'Henüz {m} kelimenin altında – yine de teslim edebilirsin.'],
    writeCopy: ['Text kopieren', 'Metni kopyala'],
    writeCopied: ['Text kopiert', 'Metin kopyalandı'],
    writeHints: ['Hinweise', 'İpuçları'],
    writeHintShort: ['Dein Text hat {n} Wörter – gewünscht sind mindestens {m}. Vielleicht fehlt noch ein Gedanke?', 'Metnin {n} kelime – en az {m} kelime olmalı. Belki bir düşünce eksik kalmıştır?'],
    writeHintLong: ['Dein Text hat {n} Wörter – deutlich mehr als die {z} Wörter des Ziels. Kürzer ist hier oft klarer.', 'Metnin {n} kelime – hedefteki {z} kelimeden epey fazla. Burada kısa yazmak çoğu zaman daha anlaşılır.'],
    writeHintOk: ['Länge passt: {n} Wörter.', 'Uzunluk uygun: {n} kelime.'],
    writeMissing: ['Punkt „{p}“ vielleicht vergessen?', '„{p}“ maddesini unutmuş olabilir misin?'],
    writeYours: ['Dein Text', 'Senin metnin'],
    writeModel: ['Mustertext', 'Örnek metin'],
    writeShowTr: ['Übersetzung', 'Çeviri'],
    writeWhyModel: ['Warum so?', 'Neden böyle?'],
    writeChecklist: ['Checkliste', 'Kontrol listesi'],
    writeChecklistIntro: ['Lies deinen Text noch einmal und hake ab, was stimmt. Nicht sicher? Klapp die Erklärung auf.', 'Metnini bir kez daha oku ve doğru olanları işaretle. Emin değil misin? Açıklamayı aç.'],
    writeWhy: ['Erklärung', 'Açıklama'],
    writeMistakes: ['Typische Fehler', 'Sık yapılan hatalar'],
    writePracticedBtn: ['Geübt', 'Çalıştım'],
    writePracticed: ['Geübt', 'Çalışıldı'],
    writeTickAll: ['„Geübt“ geht, sobald alle Punkte der Checkliste abgehakt sind.', 'Kontrol listesindeki tüm maddeleri işaretleyince „Çalıştım“ açılır.'],
    writeRevise: ['Überarbeiten', 'Düzelt'],
    writePracticedToast: ['Gut gemacht – als geübt markiert.', 'Aferin – çalışıldı olarak işaretlendi.'],
    writeEarlier: ['Früher geschrieben am {d} – ansehen', '{d} tarihinde yazmıştın – göster'],
    writeFirst: ['Deine erste Fassung', 'İlk hâli'],
    writeRescued: ['Weitere Fassung (z. B. vom anderen Gerät)', 'Diğer hâli (ör. başka cihazdan)'],
    writeVersions: ['Frühere Fassungen ansehen', 'Önceki hâllerini göster'],
    writeDelVersion: ['Diese Fassung löschen', 'Metnin bu hâlini sil'],
    confirmVersionDelete: ['Diese Fassung endgültig löschen?', 'Metnin bu hâli tamamen silinsin mi?'],
    writeVersionDeleted: ['Fassung gelöscht (vorher gesichert).', 'Metnin bu hâli silindi (önce yedeklendi).'],
    writeDelEntry: ['Diesen Text löschen (alle Fassungen)', 'Bu metni sil (tüm hâlleriyle)'],
    confirmWriteDelete: ['Diesen Text mit allen Fassungen löschen?', 'Bu metin tüm hâlleriyle silinsin mi?'],
    writeEntryDeleted: ['Text gelöscht (vorher gesichert).', 'Metin silindi (önce yedeklendi).'],
    writeFull: ['Speicher für eigene Texte voll – Text kopieren, herunterladen oder alte Texte löschen. Dein Text bleibt hier im Feld.', 'Kendi metinlerin için yer doldu – metni kopyala, indir ya da eski metinleri sil. Metnin bu alanda duruyor.'],
    writeNotSaved: ['Text nicht gespeichert – bitte kopieren. Dein Lernfortschritt ist sicher.', 'Metin kaydedilmedi – lütfen kopyala. Öğrenme ilerlemen güvende.'],
    writeReadOnly: ['Gerade wird nichts gespeichert (siehe Hinweis oben) – bitte Text kopieren.', 'Şu an hiçbir şey kaydedilmiyor (yukarıdaki nota bak) – lütfen metni kopyala.'],
    writeNotFound: ['Diese Schreibaufgabe gibt es in diesem Kurs nicht.', 'Bu yazma görevi bu kursta yok.'],
    stDraft: ['Entwurf', 'Taslak'],
    stSubmitted: ['Checkliste offen', 'Kontrol listesi açık'],
    writeOpenTitle: ['Schreiben – offen', 'Yazma – yarım kalanlar'],
    writeOpenIntro: ['Entwürfe und abgegebene Texte, deren Checkliste noch offen ist. Keine Fehlerliste – nur zum Weitermachen.', 'Taslakların ve kontrol listesi henüz bitmemiş metinlerin. Bu bir hata listesi değil – kaldığın yerden devam etmen için.'],
    writeCounter: ['Schreiben: {d} von {n} geübt', 'Yazma: {n} görevden {d} tanesi çalışıldı'],
    writeCounterDraft1: ['1 Entwurf', '1 taslak'],
    writeCounterDrafts: ['{e} Entwürfe', '{e} taslak'],
    storageUse: ['Speicher: {x} KB von ca. 5 MB, davon eigene Texte {y} KB', 'Bellek: yaklaşık 5 MB’ın {x} KB’ı dolu, bunun {y} KB’ı kendi metinlerin'],
    myTextsDownload: ['Meine Texte herunterladen (.txt)', 'Metinlerimi indir (.txt)'],
    myTextsDelete: ['Meine Texte dieses Kurses löschen', 'Bu kurstaki metinlerimi sil'],
    confirmTextsDelete: ['Wirklich alle eigenen Texte dieses Kurses löschen?', 'Bu kurstaki tüm metinlerin silinsin mi?'],
    myTextsNone: ['Noch keine eigenen Texte.', 'Henüz kendi metnin yok.'],
    myTextsDeleted: ['Deine Texte dieses Kurses wurden gelöscht (vorher gesichert).', 'Bu kurstaki metinlerin silindi (önce yedeklendi).'],
    resetAlsoTexts: ['Auch meine Texte dieses Kurses löschen', 'Bu kurstaki metinlerimi de sil'],
    resetKeepsTexts: ['Deine eigenen Texte bleiben erhalten, wenn das Kästchen leer ist.', 'Kutu boş kalırsa kendi metinlerin silinmez.'],
    confirmResetTexts: ['Fortschritt UND alle eigenen Texte dieses Kurses löschen?', 'Bu kurstaki ilerleme VE tüm metinlerin silinsin mi?'],
    transferHasTexts: ['Der Code enthält auch deine eigenen Texte aus der Schreibwerkstatt.', 'Kod, yazma atölyesindeki kendi metinlerini de içerir.'],
    writeImportOver: ['Übernommen. Hinweis: Deine eigenen Texte brauchen jetzt mehr Platz als vorgesehen – lösche bei Gelegenheit alte Texte.', 'Aktarıldı. Not: Kendi metinlerin artık öngörülenden fazla yer kaplıyor – fırsat bulunca eski metinleri sil.'],
    testSentence: ['Merhaba! Her gün biraz Türkçe öğreniyorum.', 'Guten Tag! Ich lerne jeden Tag ein bisschen Deutsch.']
  };

  /* ================= Speicher ================= */
  /* ---------- Aufgaben-Index: feste ID → Thema/Aufgabe ---------- */
  // Dialoge/Lesetexte als Pseudo-Themen und Aufgaben-Index: js/core/catalog.js
  var EXI = DT.catalog.register(K, window.console);

  /* ---------- Laden, Migrieren, Sichern ----------
   * Grundsatz: Gespeicherter Fortschritt wird NIE gelöscht oder überschrieben, nur ergänzt bzw. umbenannt.
   * Einträge zu Aufgaben, die es (noch) nicht gibt, bleiben erhalten und werden nur nicht gezählt. */
  function rawGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function rawSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  var storageBroken = false, readOnly = false, newerData = false, saveFailed = false, restoredFromBackup = false;
  var db = load();
  // höchstes je von dieser App geschriebenes Schema merken (auch bei neuem/leerem Speicher) – siehe load(): „sehr alter Tab“
  if (!newerData && +(rawGet(DT.storage.KEYS.schemaMax) || 0) < SCHEMA) rawSet(DT.storage.KEYS.schemaMax, String(SCHEMA));
  function emptyDb() { return { v: SCHEMA, app: APP_VERSION, theme: 'system', active: null, profiles: {} }; }
  function load() {
    var raw = rawGet(STORE), d = null, migrated = false;
    if (raw) {
      try { d = JSON.parse(raw); } catch (e) {
        // Beschädigte Daten nie überschreiben, sondern EINMAL beiseitelegen (gleicher Inhalt → keine weitere Kopie)
        var known = rawGet('dt-corrupt');
        if (known !== raw) { if (known) rawSet('dt-corrupt-' + Date.now(), known); rawSet('dt-corrupt', raw); }
        storageBroken = true;
        // Letzte gültige Sicherung verwenden, wenn vorhanden
        var bk = null;
        try { bk = JSON.parse(rawGet(BACKUP) || 'null'); } catch (e2) { bk = null; }
        if (!bk || !bk.profiles) { try { bk = JSON.parse(rawGet(DT.storage.KEYS.backupS2) || 'null'); } catch (e3) { bk = null; } }
        if (bk && bk.profiles) { d = bk; restoredFromBackup = true; storageBroken = false; raw = null; }
      }
    }
    if (!d) {
      for (var i = 0; i < LEGACY_KEYS.length && !d; i++) {
        var old = rawGet(LEGACY_KEYS[i]);
        if (old) { try { d = JSON.parse(old); migrated = true; } catch (e) { /* ignore */ } }
      }
    }
    if (!d || !d.profiles) return emptyDb();
    if ((d.v || 1) > SCHEMA) { newerData = true; return d; }   // Daten einer neueren App-Version: nicht anfassen
    var src = raw || JSON.stringify(d);
    // Sehr alter Tab (ohne newerData-Schutz) hat zurückgestuft (v < höchstes je geschriebenes Schema): Sicherung NICHT
    // überschreiben – sie enthält evtl. die eigenen Texte, die der alte Tab nicht kannte; diese werden unten zurückgeholt.
    var smax = +(rawGet(DT.storage.KEYS.schemaMax) || 0), down = (d.v || 1) < smax, bkW = null;
    if (down) { try { bkW = JSON.parse(rawGet(BACKUP) || 'null'); } catch (eB) { bkW = null; } }
    else if ((d.v || 1) < SCHEMA || d.app !== APP_VERSION) rawSet(BACKUP, src);  // Sicherung vor Änderungen
    // Stand vor der Umstellung auf Schema 3 einmalig dauerhaft aufheben (wird nie überschrieben)
    if ((d.v || 1) < 3 && !rawGet(DT.storage.KEYS.backupS2)) rawSet(DT.storage.KEYS.backupS2, src);
    try { d = DT.storage.migrate(d, DT.time.dayNum(), DT.time.dayKey()).data; } catch (e) {
      // Migration fehlgeschlagen: Rohdaten NICHT überschreiben, App nur lesend
      readOnly = true; if (window.console) console.error('Migration fehlgeschlagen', e);
      try { return JSON.parse(raw || '{}').profiles ? JSON.parse(raw) : emptyDb(); } catch (e2) { return emptyDb(); }
    }
    if (down && bkW) { try { DT.storage.mergeWrites(d, DT.storage.migrate(bkW, DT.time.dayNum(), DT.time.dayKey()).data); } catch (eW) { /* Sicherung unbrauchbar */ } }
    d.app = APP_VERSION;
    if (migrated || raw !== JSON.stringify(d)) rawSet(STORE, JSON.stringify(d));
    return d;
  }
  // Speichern mit Rückmeldung (ADR-1): nie die Schema-Version zurückstufen, Fehler sichtbar machen
  function save() {
    if (readOnly || newerData) return false;
    if (storageBroken && !db.active) return false;
    var ok = false;
    try { ok = DT.storage.save(localStorage, db, APP_VERSION); } catch (e) { ok = false; }
    if (ok) { saveFailed = false; return true; }
    saveFailed = true;
    var b = document.getElementById('save-banner'); if (!b && app) render();
    return false;
  }
  function backupNow() { rawSet(BACKUP, JSON.stringify(db)); }
  // Mehrere Tabs: Änderungen aus einem anderen Tab übernehmen statt sie zu überschreiben
  window.addEventListener('storage', function (e) {
    if (e.key !== STORE || !e.newValue) return;
    try { var d = JSON.parse(e.newValue);
      if (d && d.profiles && (d.v || 1) > SCHEMA) { newerData = true; render(); return; }   // ADR-11/13: alter Tab darf neue Daten nie überschreiben
      if (d && d.profiles && (d.v || 1) <= SCHEMA) {
        // sehr alter Tab hat ohne writes zurückgestuft → eigene Texte aus dem Stand dieses Tabs behalten
        var down = (d.v || 1) < SCHEMA;
        d = DT.storage.migrate(d, DT.time.dayNum(), DT.time.dayKey()).data;
        if (down) DT.storage.mergeWrites(d, db);
        db = d; if (!db.profiles[db.active]) db.active = Object.keys(db.profiles)[0] || null;
        if (wst) wst.last = null;   // Entwurf beim nächsten Speichern erneut prüfen (der andere Tab kann ihn ersetzt haben)
        render(); } } catch (err) { /* ignore */ }
  });
  function askPersist() {
    try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* ignore */ }
  }
  function prof() { return db.profiles[db.active]; }
  function courseId() { return prof().course; }
  function course() {
    var p = prof();
    if (p && !K.courses[p.course]) p.course = 'de';   // unbekannter Kurs (z. B. aus einer fremden Datei) → sicherer Standard
    return K.courses[courseId()];
  }
  function uiLang() { return course().ui; }
  function prog() {
    var p = prof();
    if (!p.prog) p.prog = {};
    if (!p.prog[p.course]) p.prog[p.course] = {};
    return p.prog[p.course];
  }
  function t(key, vars) {
    var pair = T[key]; if (!pair) return key;
    var s = pair[uiLang() === 'de' ? 0 : 1];
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  }

  /* ================= Hilfsfunktionen ================= */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/_{3,}/g, '<span class="blank"></span>')
      .replace(/\n/g, '<br>');
  }
  function plain(s) { return String(s || '').replace(/\*\*|\*/g, ''); }
  function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }
  // Prozentangabe in der Schreibweise der Oberflächensprache: „42 %“ (de) bzw. „%42“ (tr)
  function fmtPct(n) { return uiLang() === 'tr' ? '%' + n : n + '\u00a0%'; }
  function levelHas(lv) { return sumStats(levelTopics(lv)).n > 0; }
  // ADR-11: Status je Niveau – complete (im Lehrplan freigegeben), building (hat schon Inhalt), planned (sonst)
  function levelComplete(lv) { return (course().complete || []).indexOf(lv) >= 0; }
  function levelBuilding(lv) { return levelHas(lv) && !levelComplete(lv); }
  function buildingBadge(lv) {
    if (!levelBuilding(lv)) return '';
    var l = levelTopics(lv).filter(function (x) { return !x.kind; }), done = l.filter(function (x) { return x.avail; }).length;
    return ' <span class="badge warn" title="' + esc(t('buildingHint')) + '">🚧 ' + esc(t('building', { a: done, n: l.length })) + '</span>';
  }
  function splitLevels() {
    var live = LEVELS.filter(levelHas), planned = LEVELS.filter(function (lv) { return !levelHas(lv); });
    return { live: live, planned: planned, label: planned.length ? planned[0] + (planned.length > 1 ? '–' + planned[planned.length - 1] : '') : '' };
  }
  var locale = DT.check.locale, isCountable = DT.check.isCountable;   // js/core/check.js
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  function shuffleNotIdentity(arr) {
    if (arr.length < 2) return arr.slice();
    var a, tries = 0;
    do { a = shuffle(arr); tries++; } while (tries < 10 && a.every(function (v, i) { return v === arr[i]; }));
    return a;
  }
  function toast(msg) {
    var el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); el.textContent = msg;
    document.body.appendChild(el); setTimeout(function () { el.remove(); }, 2200);
  }
  /* ---------- Vorlesen: echte deutsche/türkische Stimme wählen, nie eine fremde Stimme ---------- */
  var canSpeak = 'speechSynthesis' in window;
  var voicesCache = [];
  function loadVoices() { try { voicesCache = speechSynthesis.getVoices() || []; } catch (e) { voicesCache = []; } }
  if (canSpeak) {
    loadVoices();
    var onVoices = function () { loadVoices(); if (parseHash().page === 'settings' && db.active) render(); };
    if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', onVoices); else speechSynthesis.onvoiceschanged = onVoices;
  }
  function vLang(v) { return String(v.lang || '').replace('_', '-').toLowerCase(); }
  function voicesFor(lang) {
    var l = lang.toLowerCase(), pfx = l.slice(0, 2) + '-';
    return voicesCache.filter(function (v) { var x = vLang(v); return x === l || x.indexOf(pfx) === 0 || x === l.slice(0, 2); });
  }
  function voiceScore(v, lang) {
    var n = v.name || '', s = 0;
    if (vLang(v) === lang.toLowerCase()) s += 50;                       // genau tr-TR / de-DE
    if (/natural|neural|premium|enhanced|wavenet|hd/i.test(n)) s += 40; // neuronale, natürlich klingende Stimmen
    if (/google/i.test(n)) s += 25;
    if (/online/i.test(n)) s += 10;
    if (/multilingual/i.test(n)) s -= 30;                               // Mehrsprachige Stimmen haben oft Akzent
    if (/espeak|compact/i.test(n)) s -= 40;                             // roboterhaft
    return s;
  }
  // Geschlecht ist in der Web-Speech-API nicht angegeben → bekannte Stimmennamen (Windows/Edge, Apple, Google)
  var FEMALE = /\b(katja|hedda|amala|louisa|seraphina|elke|gisela|klarissa|maja|tanja|ingrid|anna|petra|helena|marlene|vicki|emel|seda|yelda|filiz|zeynep|aylin)\b/i;
  var MALE = /\b(conrad|stefan|killian|florian|bernd|christoph|kasper|klaus|ralf|markus|yannick|hans|reed|ahmet|tolga|cem|fettah|fahrettin|murat|emre)\b/i;
  function voiceGender(v) { var n = v.name || ''; return FEMALE.test(n) ? 'f' : (MALE.test(n) ? 'm' : ''); }
  function sortedVoices(lang) { return voicesFor(lang).sort(function (a, b) { return voiceScore(b, lang) - voiceScore(a, lang); }); }
  function bestVoice(lang) {
    var list = sortedVoices(lang), pref = db.voices && db.voices[lang], g = db.voiceGender || '';
    if (pref) { var f = list.filter(function (v) { return v.name === pref; })[0]; if (f) return f; }
    if (g) { var byG = list.filter(function (v) { return voiceGender(v) === g; })[0]; if (byG) return byG; }
    return list[0] || null;
  }
  /* ---------- Piper-Audio (Open Source, in GitHub Actions erzeugt: audio/manifest.json) ---------- */
  var AUDIO = null, curAudio = null;
  function loadAudioManifest() {
    if (!window.fetch) return;
    fetch('audio/manifest.json?v=' + APP_VERSION, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        AUDIO = j; var hp = parseHash(), hc = hp.page === 'topic' && K.content[hp.a];
        if (db.active && (['settings', 'legal'].indexOf(hp.page) >= 0 || (hc && isListen(hc) && hp.b !== 'exercises'))) render();
      })
      .catch(function () { /* offline oder lokal geöffnet → Gerätestimme */ });
  }
  function piperVoices(lang2) { return (AUDIO && AUDIO.voices && AUDIO.voices[lang2]) || {}; }
  /* Audio-Schicht (ADR-5): EIN wiederverwendetes <audio>-Element (nötig für Ketten auf iOS),
   * Optionen statt globaler Flags: speak(text, lang, { gender, rate, onEnd, voiceName, chain }) */
  var audioEl = null, seqToken = 0;
  function getAudioEl() { if (!audioEl) { audioEl = new Audio(); audioEl.preload = 'auto'; } return audioEl; }
  function stopAudio() {
    seqToken++;
    try { if (audioEl) { audioEl.onended = null; audioEl.pause(); } if (canSpeak) speechSynthesis.cancel(); } catch (e) { /* ignore */ }
  }
  function playUrl(url, o) {
    o = o || {};
    try {
      if (canSpeak) speechSynthesis.cancel();
      var el = getAudioEl();
      el.onended = null; el.pause();
      el.src = url;
      el.playbackRate = o.rate || 1;
      try { el.preservesPitch = true; } catch (e) { /* ältere Browser */ }
      el.onended = o.onEnd || null;
      var p = el.play();
      if (p && p.catch) p.catch(function () { if (o.onFail) o.onFail(); });
    } catch (e) { if (o.onFail) o.onFail(); }
  }
  // Piper-Datei suchen. Reihenfolge: Automatisch → ♀, ♂; Wunschgeschlecht zuerst – fehlt es bei Piper,
  // aber das Gerät hat es, lieber die Gerätestimme als das falsche Geschlecht.
  function piperUrl(text, lang, g) {
    if (!AUDIO) return null;
    var key = plain(text).trim(), pv = piperVoices(lang.slice(0, 2)), order = g === 'm' ? ['male', 'female'] : ['female', 'male'];
    var deviceHasG = g && canSpeak && sortedVoices(lang).some(function (v) { return voiceGender(v) === g; });
    for (var i = 0; i < order.length; i++) {
      if (i > 0 && deviceHasG) break;
      var vk = pv[order[i]], fid = vk && AUDIO.files && AUDIO.files[vk] && AUDIO.files[vk][key];
      if (fid) return 'audio/' + vk + '/' + fid + '.mp3';
    }
    return null;
  }
  // Kann dieser Text gerade vorgelesen werden? (Piper-Datei oder passende Gerätestimme)
  function canPlay(text, lang) {
    lang = lang || course().tts;
    if (piperUrl(text, lang, '')) return true;
    if (!canSpeak) return false;
    if (!voicesCache.length) loadVoices();
    return !voicesCache.length || sortedVoices(lang).length > 0;   // Stimmen noch nicht geladen → optimistisch
  }
  /* Stimme pro Sprecher (ADR-14): Platz → Datei. DT.voices.assign ist dasselbe wie im Werkzeug (tools/extract-texts.js). */
  function slotUrl(text, lang, slot) {
    if (!AUDIO || !slot) return null;
    var vk = piperVoices(lang.slice(0, 2))[slot], fid = vk && AUDIO.files && AUDIO.files[vk] && AUDIO.files[vk][plain(text).trim()];
    return fid ? 'audio/' + vk + '/' + fid + '.mp3' : null;
  }
  function voiceAssign(lines, roleG) {
    var lang2 = course().tts.slice(0, 2);
    return DT.voices.assign(lines, DT.voices.slotsOf(piperVoices(lang2)), (AUDIO && AUDIO.fallback && AUDIO.fallback[lang2]) || [], roleG || '');
  }
  function deviceHas(lang, g) { return !!(g && canSpeak && sortedVoices(lang).some(function (v) { return voiceGender(v) === g; })); }
  // Eine Zeile in der Stimme ihres Sprechers; Ersatzstimme (fb) nur, wenn das Gerät keine passende Stimme hat; fehlt die Datei → bisherige Geschlechter-Logik
  function speakLine(l, a, o) {
    o = o || {}; var m = (a && a.map[l.s]) || {}, lang = course().tts;
    var url = m.slot ? slotUrl(l.t, lang, m.slot) : null;
    if (url && m.fb && deviceHas(lang, l.g)) url = null;
    speak(l.t, lang, { gender: l.g || '', rate: o.rate, chain: o.chain, onEnd: o.onEnd, url: url, auto: o.auto });
  }
  function speak(text, lang, o) {
    o = o || {};
    if (!o.chain) seqToken++;
    var g = o.gender || db.voiceGender || '';
    if (!o.voiceName) {
      var url = o.url || piperUrl(text, lang, g);
      if (url) { playUrl(url, { rate: o.rate, onEnd: o.onEnd, onFail: function () { deviceSpeak(text, lang, o, g); } }); return; }
    }
    deviceSpeak(text, lang, o, g);
  }
  function deviceSpeak(text, lang, o, g, retried) {
    o = o || {};
    if (!canSpeak) { if (!o.auto) noRecording(); return; }
    if (!voicesCache.length) loadVoices();
    var v = o.voiceName ? voicesFor(lang).filter(function (x) { return x.name === o.voiceName; })[0] : null;
    if (!v && g) v = sortedVoices(lang).filter(function (x) { return voiceGender(x) === g; })[0] || null;
    if (!v) v = bestVoice(lang);
    if (!v) {
      if (!voicesCache.length && !retried) { setTimeout(function () { loadVoices(); deviceSpeak(text, lang, o, g, true); }, 700); return; }
      if (!o.auto) noRecording(); return;   // lieber gar nicht vorlesen als mit falscher (z. B. englischer) Stimme
    }
    try {
      if (audioEl) { audioEl.onended = null; audioEl.pause(); }
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(plain(text));
      u.voice = v; u.lang = v.lang || lang; u.rate = (o.rate && o.rate < 1) ? 0.65 : 0.92;
      if (o.onEnd) u.onend = o.onEnd;
      speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }
  function osName() {
    var ua = navigator.userAgent || '';
    if (/android/i.test(ua)) return 'android';
    if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && 'ontouchend' in document)) return 'ios';
    if (/windows/i.test(ua)) return 'windows';
    if (/macintosh|mac os/i.test(ua)) return 'mac';
    return 'other';
  }
  function voiceHelpHtml() {
    var os = osName(), de = uiLang() === 'de';
    var L = de ? 'Türkisch' : 'Almanca';
    var steps = {
      windows: de ? 'Am natürlichsten klingt es in <b>Microsoft Edge</b> (Online-Stimmen, z. B. „Emel“). Oder in Windows: <b>Einstellungen → Zeit und Sprache → Sprache & Region → Sprache hinzufügen → ' + L + '</b> und dabei „Sprachausgabe/Text-to-Speech“ anhaken.'
        : 'En doğal ses <b>Microsoft Edge</b> tarayıcısında (çevrim içi sesler, ör. “Katja”). Ya da Windows’ta: <b>Ayarlar → Saat ve dil → Dil ve bölge → Dil ekle → ' + L + '</b> ve “Metin okuma (Text-to-Speech)” seçeneğini işaretle.',
      android: de ? '<b>Einstellungen → Text-in-Sprache-Ausgabe → Google-Sprachdienste → Sprachdaten installieren → ' + L + '</b>.'
        : '<b>Ayarlar → Metin okuma çıkışı → Google konuşma hizmetleri → Ses verilerini yükle → ' + L + '</b>.',
      ios: de ? '<b>Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → ' + L + '</b> und eine Stimme (am besten „Premium“/„Erweitert“) laden.'
        : '<b>Ayarlar → Erişilebilirlik → Seslendirilen İçerik → Sesler → ' + L + '</b> ve bir ses indir (tercihen “Gelişmiş/Premium”).',
      mac: de ? '<b>Systemeinstellungen → Bedienungshilfen → Gesprochene Inhalte → Systemstimme → Stimmen verwalten → ' + L + '</b>.'
        : '<b>Sistem Ayarları → Erişilebilirlik → Seslendirilen İçerik → Sistem sesi → Sesleri yönet → ' + L + '</b>.',
      other: de ? 'Installiere eine ' + L + '-Stimme in den Sprach-/Vorlese-Einstellungen deines Geräts oder nutze Chrome bzw. Edge.'
        : 'Cihazının dil/sesli okuma ayarlarından bir ' + L + ' sesi yükle ya da Chrome veya Edge kullan.'
    };
    return '<p>' + (de ? 'Auf diesem Gerät ist keine <b>türkische</b> Vorlese-Stimme installiert. Damit die Aussprache stimmt, lese ich nicht mit einer fremden Stimme vor.'
      : 'Bu cihazda <b>Almanca</b> bir okuma sesi yüklü değil. Telaffuz yanlış olmasın diye yabancı bir sesle okumuyorum.') + '</p><p>' + steps[os] + '</p>';
  }
  // Kein Fenster, das aus dem Lernfluss reißt: nur ein kurzer Hinweis, der von selbst verschwindet
  var lastNoRec = 0;
  function noRecording() {
    if (Date.now() - lastNoRec < 5000) return;
    lastNoRec = Date.now(); toast('🔊 ' + t('noRecording'));
  }
  function prettyVoice(key) {   // „tr_TR-fahrettin-medium“ → „Fahrettin“
    var n = (key.split('-')[1] || key).replace(/_/g, ' ');
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
  function voiceSettingsHtml() {
    var lang = course().tts, lang2 = lang.slice(0, 2), list = canSpeak ? sortedVoices(lang) : [], cur = bestVoice(lang);
    var pv = piperVoices(lang2), g = db.voiceGender || '';
    var hasF = !!pv.female || list.some(function (v) { return voiceGender(v) === 'f'; });
    var hasM = !!pv.male || list.some(function (v) { return voiceGender(v) === 'm'; });
    var seg = '<div class="seg" style="margin:4px 0 10px">' + [['', t('voiceAuto')], ['f', '♀ ' + t('female')], ['m', '♂ ' + t('male')]].map(function (x) {
      var dis = (x[0] === 'f' && !hasF) || (x[0] === 'm' && !hasM);
      return '<button data-act="voice-gender" data-v="' + x[0] + '" class="' + (g === x[0] ? 'on' : '') + '"' + (dis ? ' disabled title="' + esc(t('notInstalled')) + '"' : '') + '>' + esc(x[1]) + '</button>';
    }).join('') + '</div>' + ((g === 'f' && !hasF) || (g === 'm' && !hasM) ? '<p class="muted small">' + esc(t('genderMissing')) + '</p>' : '');
    var piper = '';
    if (pv.female || pv.male) {
      var samples = (AUDIO.samples && AUDIO.samples[lang2]) || {};
      piper = '<p class="small" style="margin:6px 0 8px">' + esc(t('piperInfo')) + ' ' +
        ['female', 'male'].filter(function (x) { return pv[x]; }).map(function (x) { return (x === 'female' ? '♀ ' : '♂ ') + esc(prettyVoice(pv[x])); }).join(' · ') + '</p>' +
        (Object.keys(samples).length ? '<div class="btn-row" style="margin-bottom:12px"><span class="small muted">' + esc(t('samples')) + ':</span>' + Object.keys(samples).map(function (k) {
          return '<button class="btn small" data-act="play-sample" data-url="audio/' + esc(samples[k]) + '">▶ ' + esc(prettyVoice(k)) + '</button>';
        }).join('') + '</div>' : '');
    } else {
      piper = '<p class="muted small">' + esc(t('piperMissing')) + '</p>';
    }
    var device;
    if (!canSpeak) device = '<p class="muted small">' + esc(t('noSpeech')) + '</p>';
    else if (!list.length) device = '<p class="muted small">' + esc(t('voiceShort')) + '</p>';
    else device = '<div class="inline-form" style="margin-top:6px">' +
      '<select id="voice-sel" class="input" data-act="voice" style="max-width:420px">' + list.map(function (v, i) {
        var vg = voiceGender(v);
        return '<option value="' + esc(v.name) + '"' + (cur && cur.name === v.name ? ' selected' : '') + '>' + (vg === 'f' ? '♀ ' : vg === 'm' ? '♂ ' : '') + esc(v.name) + (i === 0 ? ' ★' : '') + '</option>';
      }).join('') + '</select><button class="btn" data-act="voice-test">▶ ' + esc(t('test')) + '</button></div>' +
      '<p class="muted small" style="margin-top:8px">' + esc(t('voiceTip')) + '</p>';
    return seg + piper + '<h3 style="margin:14px 0 4px;font-size:.95rem">' + esc(t('deviceVoice')) + '</h3>' + device;
  }
  /* ---------- Sprechen: Spracherkennung (Chrome, Edge, Safari) ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var recog = null;
  function startListening(onText, onError) {
    if (!SR) { onError('unsupported'); return; }
    try { if (recog) recog.abort(); } catch (e) { /* ignore */ }
    recog = new SR();
    recog.lang = course().tts; recog.interimResults = false; recog.maxAlternatives = 3;
    var got = false;
    recog.onresult = function (e) {
      got = true;
      var alts = []; for (var i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
      onText(alts);
    };
    var failed = false;
    recog.onerror = function (e) { if (!got) { failed = true; onError(e.error || 'error'); } };
    recog.onend = function () { if (!got && !failed) onError('no-speech'); };
    try { if (curAudio) curAudio.pause(); if (canSpeak) speechSynthesis.cancel(); recog.start(); } catch (e) { onError('error'); }
  }
  // Buchstaben, die auf vielen Tastaturen fehlen (z. B. ß/ä auf türkischen, ı/ş/ğ auf deutschen Tastaturen)
  function charBar() {
    return '<div class="charbar" role="group" aria-label="' + esc(t('charsLabel')) + '"><span class="charbar-label">' + esc(t('charsLabel')) + '</span>' +
      course().chars.map(function (ch) { return '<button type="button" data-act="char" data-ch="' + esc(ch) + '" tabindex="-1" aria-label="' + esc(t('charInsert', { c: ch })) + '">' + esc(ch) + '</button>'; }).join('') + '</div>';
  }
  function audioBar(say, secondary) {
    return '<div class="audio-bar"><button class="btn' + (secondary ? '' : ' primary') + ' audio-main" data-act="play-say" data-say="' + esc(say) + '">🔊 ' + esc(t('play')) + '</button>' +
      '<button class="btn" data-act="play-say" data-slow="1" data-say="' + esc(say) + '" title="' + esc(t('slow')) + '">🐢 ' + esc(t('slow')) + '</button></div>';
  }
  function speakBtn(text) {
    if (!canSpeak) return '';
    return '<button class="speak" data-speak="' + esc(plain(text)) + '" title="' + esc(t('listen')) + '" aria-label="' + esc(t('listen')) + '">🔊</button>';
  }
  var FLAGS = {
    de: '<svg class="flag-ico" viewBox="0 0 5 3" aria-hidden="true"><rect width="5" height="3" fill="#FFCE00"/><rect width="5" height="2" fill="#DD0000"/><rect width="5" height="1" fill="#000"/></svg>',
    tr: '<svg class="flag-ico" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#E30A17"/><circle cx="10.6" cy="10" r="5" fill="#fff"/><circle cx="11.9" cy="10" r="4" fill="#E30A17"/><polygon fill="#fff" points="13.80,10.00 15.55,9.38 15.60,7.53 16.72,9.00 18.50,8.47 17.45,10.00 18.50,11.53 16.72,11.00 15.60,12.47 15.55,10.62"/></svg>'
  };
  function flag(cid) { return FLAGS[cid] || ''; }
  var LOGO = '<svg class="logo" aria-hidden="true" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#3b5bdb"/><path d="M11 14h26a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H24l-7 6v-6h-6a5 5 0 0 1-5-5V19a5 5 0 0 1 5-5z" fill="#fff"/><path d="M53 26H30a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h12l7 6v-6h4a5 5 0 0 0 5-5V31a5 5 0 0 0-5-5z" fill="#fcc419"/><path d="M14 22h18M14 28h12" stroke="#3b5bdb" stroke-width="3" stroke-linecap="round"/><path d="M32 35h18M32 41h12" stroke="#3b5bdb" stroke-width="3" stroke-linecap="round"/></svg>';

  /* ================= Lehrplan-Zugriff ================= */
  function topicsOf(cid) { return DT.catalog.topicsOf(K, cid); }
  function allTopics() { return topicsOf(courseId()); }
  function topicById(id) { return allTopics().filter(function (x) { return x.id === id; })[0]; }
  function exId(topicId, i) { return K.content[topicId].exercises[i].id; }
  function exById(id) {
    var e = EXI[id]; if (!e) return null;
    var tp = topicById(e.topicId);
    if (!tp || !tp.avail) return null;
    return { topic: tp, ex: e.ex, idx: e.idx, id: id };
  }
  function topicStats(tp) {
    var s = { n: 0, c: 0, w: 0, o: 0, first: 0, firstW: 0, answered: 0 };
    if (!tp.avail) return s;
    var p = prog();
    tp.data.exercises.forEach(function (ex, i) {
      if (!isCountable(ex)) return;
      var r = p[exId(tp.id, i)]; s.n++;
      if (!r) { s.o++; return; }
      s.answered++;
      if (r.s === 'c') s.c++; else s.w++;
      if (r.f === 'c') s.first++; else s.firstW++;
    });
    return s;
  }
  function sumStats(list) {
    var s = { n: 0, c: 0, w: 0, o: 0, first: 0, firstW: 0, answered: 0, topics: 0, avail: 0 };
    list.forEach(function (tp) {
      var x = topicStats(tp); s.topics++; if (tp.avail) s.avail++;
      ['n', 'c', 'w', 'o', 'first', 'firstW', 'answered'].forEach(function (k) { s[k] += x[k]; });
    });
    return s;
  }
  function levelTopics(lv) { return allTopics().filter(function (x) { return x.level === lv; }); }
  function wrongIds(filterTopic) {
    var p = prog(), out = [];
    allTopics().forEach(function (tp) {
      if (!tp.avail || (filterTopic && tp.id !== filterTopic)) return;
      tp.data.exercises.forEach(function (ex, i) { var id = exId(tp.id, i); if (isCountable(ex) && p[id] && p[id].s === 'w') out.push(id); });
    });
    return out;
  }
  function nextTopic() {
    var list = allTopics().filter(function (x) { return x.avail; });
    for (var i = 0; i < list.length; i++) { var s = topicStats(list[i]); if (s.c < s.n && !isSkipped(list[i].id)) return list[i]; }
    return null;
  }
  function levelName(lv) { return K.levelNames[lv][uiLang()]; }

  /* ================= Fortschritt speichern ================= */
  function record(id, ok, given, noSave) {
    var it = EXI[id];
    if (it && !isCountable(it.ex) && !ok) return;   // misslungene Sprechversuche werden nicht gespeichert
    if (typeof given === 'string' && given.length > 120) given = given.slice(0, 120) + '…';   // Speicher schonen
    var p = prog(), r = p[id] || {};
    if (!r.f) r.f = ok ? 'c' : 'w';
    r.s = ok ? 'c' : 'w';
    r.n = (r.n || 0) + 1;
    if (!ok) { r.w = (r.w || 0) + 1; r.a = given; }
    r.t = Date.now();
    p[id] = r;
    var pr = prof(); pr.last = pr.last || {}; pr.last[courseId()] = r.t;   // letzter Lerntag je Kurs
    if (!noSave) save();
  }

  /* ================= Wiederholung (SRS), Tagesziel, Wortschatz ================= */
  var WI = DT.vocab.index(K);               // Wort-Index: { wordId: { w, key, course, level } }
  function today() { return DT.time.dayNum(); }
  function todayKey() { return DT.time.dayKey(); }
  function ensureProfile(p) {               // fehlende Bereiche anlegen (idempotent, löscht nie etwas)
    p.srs = p.srs || { de: {}, tr: {} }; p.srs.de = p.srs.de || {}; p.srs.tr = p.srs.tr || {};
    p.daily = p.daily || { goal: 10, log: {} }; p.daily.log = p.daily.log || {};
    p.skip = p.skip || { de: {}, tr: {} }; p.place = p.place || {}; p.badges = p.badges || {};
    DT.writes.ensure(p);                    // Schema 4: eigene Texte (ADR-13)
    return p;
  }
  var poolCache = {};
  function poolFor(wi) { var k = wi.course + '|' + wi.level; return poolCache[k] || (poolCache[k] = DT.vocab.wordsOf(K, wi.course, wi.level)); }
  function fieldName(id) { var f = (K.wordfields || []).filter(function (x) { return x[0] === id; })[0]; return f ? f[uiLang() === 'de' ? 1 : 2] : id; }
  function vocabLabels() {
    return { pickQ: t('vqPick'), listenQ: t('vqListen'), revQ: t('vqRev'), typeQ: t('vqType'), wrongIs: t('vqWrongIs'), example: t('example'), articleMissing: t('vqArticle') };
  }
  function hasAudioFor(text) { return !!piperUrl(text, course().tts, ''); }
  /* Eine Antwort speichern: Aufgabe → Fortschritt (+ SRS bei Fehlern), Wort → SRS; immer Tageszähler */
  function recordAnswer(item, ok, given) {
    var p = ensureProfile(prof()), cid = courseId(), d = today();
    if (item.kind === 'word') {
      DT.srs.answer(p, cid, item.word.id, ok, d, 'word');
      p.last = p.last || {}; p.last[cid] = Date.now();
    } else {
      if (!isCountable(item.ex) && !ok) return;
      record(item.id, ok, given, true);
      if (isCountable(item.ex) && (!ok || DT.srs.get(p, cid, item.id))) DT.srs.answer(p, cid, item.id, ok, d, 'ex');
    }
    DT.daily.tick(p, todayKey());
    save();
  }
  /* Abfragemodus eines Wortes je nach Fach */
  function wordQ(wordId) {
    var p = ensureProfile(prof()), e = DT.srs.get(p, courseId(), wordId), wi = WI[wordId];
    var mode = e ? DT.srs.wordMode(e, hasAudioFor(wi.w.t)) : 'pick';
    return 'w:' + wordId + ':' + mode;
  }
  function dueItems(limit) {
    var p = ensureProfile(prof()), cid = courseId();
    return DT.srs.due(p, cid, today(), limit || 30).filter(function (id) { return WI[id] ? WI[id].course === cid : !!exById(id); })
      .map(function (id) { return WI[id] ? wordQ(id) : id; });
  }
  /* ADR-11.2: Fokus-Niveau = Niveau des ersten offenen Grammatikthemas (nie gespeichert, immer berechnet) */
  function focusLevel() {
    var list = allTopics().filter(function (x) { return x.avail && !x.kind; });
    for (var i = 0; i < list.length; i++) { var s = topicStats(list[i]); if (s.c < s.n && !isSkipped(list[i].id)) return list[i].level; }
    var top = 'A1'; list.forEach(function (x) { if (LEVELS.indexOf(x.level) > LEVELS.indexOf(top)) top = x.level; });
    return top;
  }
  function wordLevels() { return LEVELS.filter(function (lv) { return DT.vocab.wordsOf(K, courseId(), lv).length > 0; }); }
  /* Standard-Niveau der Wortschatzseite: höchstes Niveau mit Wörtern bis zum Fokus-Niveau (sonst A1) */
  function defaultWordLevel() {
    var f = LEVELS.indexOf(focusLevel()), ok = wordLevels().filter(function (lv) { return LEVELS.indexOf(lv) <= f; });
    return ok.length ? ok[ok.length - 1] : 'A1';
  }
  /* lv angegeben: nur dieses Niveau. Ohne lv (Tagesmix): alle Niveaus ≤ Fokus, aufsteigend (ADR-11.4) */
  function newWords(field, n, lv) {
    var p = ensureProfile(prof()), cid = courseId(), f = LEVELS.indexOf(focusLevel()), out = [];
    (lv ? [lv] : wordLevels().filter(function (x) { return LEVELS.indexOf(x) <= f; })).forEach(function (l) {
      DT.vocab.wordsOf(K, cid, l, field).forEach(function (w) { if (!DT.srs.get(p, cid, w.id)) out.push(w); });
    });
    return out.slice(0, n);
  }
  /* Lern-Sitzung für neue Wörter: Karte → gleich danach eine leichte Abfrage, am Ende zweite Runde (hören/umgekehrt) */
  function learnQueue(words) {
    var q = [];
    words.forEach(function (w, i) { q.push('card:' + w.id); if (i > 0) q.push('w:' + words[i - 1].id + ':pick'); });
    if (words.length) q.push('w:' + words[words.length - 1].id + ':pick');
    DT.vocab.shuffle(words, DT.vocab.rng(todayKey())).forEach(function (w) { q.push('w:' + w.id + ':' + (hasAudioFor(w.t) ? 'listen' : 'rev')); });
    return q;
  }
  /* 5-Minuten-Tagesmix (ADR-4): fällige Wiederholungen → neue Wörter → offene Aufgaben aus begonnenen Themen */
  function buildMix() {
    var p = ensureProfile(prof()), cid = courseId(), goal = p.daily.goal || 10, q = [];
    var due = dueItems(30).filter(function (id) { return !(EXI[id] && DT.catalog.isHeavy(K, EXI[id].topicId)); }).slice(0, 8); q = q.concat(due);
    var backlog = DT.srs.due(p, cid, today(), 999).length;
    if (backlog <= 30) {
      var nw = newWords(null, DT.daily.newWordLimit(goal));
      nw.forEach(function (w) { q.push('card:' + w.id); q.push('w:' + w.id + ':pick'); });
    }
    var pr = prog(), target = Math.max(12, q.length);
    allTopics().forEach(function (tp) {
      if (q.length >= target || !tp.avail || isSkipped(tp.id) || DT.catalog.isHeavy(K, tp.id)) return;
      var s = topicStats(tp); if (!s.answered) return;                // nur begonnene Themen
      tp.data.exercises.forEach(function (ex) { if (q.length < target && isCountable(ex) && !pr[ex.id] && q.indexOf(ex.id) < 0) q.push(ex.id); });
    });
    return q;
  }
  function isSkipped(topicId) { var p = ensureProfile(prof()); return !!(p.skip[courseId()] || {})[topicId]; }
  function resolveItem(q) {
    if (!q) return null;
    if (q.indexOf('card:') === 0) {
      var wc = WI[q.slice(5)]; if (!wc) return null;
      return { kind: 'card', id: q, word: wc.w, ex: { t: 'card', id: q }, topic: { level: wc.level, title: fieldName(wc.w.topic) } };
    }
    if (q.indexOf('w:') === 0) {
      var parts = q.split(':'), wq = WI[parts[1]]; if (!wq) return null;
      player.gen = player.gen || {};
      var ex = player.gen[q] || (player.gen[q] = DT.vocab.makeQuestion(wq.w, parts[2], poolFor(wq), vocabLabels(), player.key));
      return { kind: 'word', id: q, ex: ex, word: wq.w, topic: { level: wq.level, title: fieldName(wq.w.topic) } };
    }
    var it = exById(q); if (it) it.kind = 'ex';
    return it;
  }

  /* ================= Theme ================= */
  function applyTheme() {
    var th = db.theme || 'system';
    if (th === 'system') th = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', th);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', th === 'dark' ? '#161b24' : '#ffffff');
  }
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onMq = function () { if ((db.theme || 'system') === 'system') { applyTheme(); render(); } };
    if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
  }
  function currentThemeIsDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }

  /* ================= Router ================= */
  function parseHash() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    var parts = h.split('/').filter(Boolean).map(function (x) { try { return decodeURIComponent(x); } catch (e) { return x; } });
    var r = { page: parts[0] || 'dashboard', a: parts[1], b: parts[2] };
    // ADR-11.3: #/words/<LV>[/feld[/learn|practice]]; alte Links #/words/<feld>[/…] gelten als A1
    if (r.page === 'words' && r.a && LEVELS.indexOf(r.a) >= 0) { r.lv = r.a; r.a = parts[2]; r.b = parts[3]; }
    return r;
  }
  function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
  window.addEventListener('hashchange', function () {
    stopAudio(); render();   // render() sichert vorher den Entwurf (flushDraft) window.scrollTo(0, 0);
    var h = document.querySelector('#main h1');   // Screenreader/Tastatur: neue Seite ansagen
    if (h) { h.setAttribute('tabindex', '-1'); try { h.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  });

  /* ================= Grundgerüst ================= */
  function shell(active, inner) {
    var c = course(), other = courseId() === 'de' ? K.courses.tr : K.courses.de;
    var wrongN = wrongIds().length;
    var tabs = [
      ['dashboard', '🏠', t('dashboard'), t('tabHome')],
      ['lessons', '📚', t('lessons'), t('lessons')],
      ['words', '📖', t('words'), t('tabWords')],
      ['gaps', '🎯', t('gaps'), t('tabGaps'), wrongN],
      ['overview', '📊', t('overview'), t('tabOverview')],
      ['settings', '⚙️', t('settings'), t('settings')]
    ];
    document.documentElement.lang = uiLang();
    document.title = c.label + ' · Deutsch ⇄ Türkçe';
    return '' +
      '<a class="skip-link" href="#main" data-act="skip-main">' + esc(t('skipToContent')) + '</a>' +
      '<header class="topbar"><div class="topbar-inner">' +
        '<div class="toprow">' +
          '<a class="brand" href="#/dashboard">' + LOGO + '<span>' + esc(c.label) + '<small>Deutsch ⇄ Türkçe</small></span></a>' +
          '<span class="spacer"></span>' +
          '<button class="pill-btn" data-act="toggle-course" title="' + esc(t('courseToggle')) + ' → ' + esc(other.label) + '">' +
            '<span aria-hidden="true">⇄</span>' + flag(other.id) + '<span class="pb-label">' + esc(other.label) + '</span></button>' +
          '<a class="icon-btn only-mobile" href="#/settings" aria-label="' + esc(t('settings')) + '"' + (active === 'settings' ? ' aria-current="page"' : '') + '>⚙️</a>' +
          '<button class="icon-btn" data-act="toggle-theme" title="' + esc(t('themeToggle')) + '" aria-label="' + esc(t('themeToggle')) + '">' + (currentThemeIsDark() ? '☀️' : '🌙') + '</button>' +
        '</div>' +
        '<nav class="tabs" aria-label="' + esc(t('navLabel')) + '">' + tabs.map(function (x) {
          return '<a class="tab tab-' + x[0] + (x[0] === active ? ' active' : '') + '" href="#/' + x[0] + '"' + (x[0] === active ? ' aria-current="page"' : '') + '><span aria-hidden="true">' + x[1] + '</span>' +
            '<span class="t-long">' + esc(x[2]) + '</span><span class="t-short">' + esc(x[3]) + '</span>' + (x[4] ? ' <span class="badge primary">' + x[4] + '</span>' : '') + '</a>';
        }).join('') + '</nav>' +
      '</div></header>' +
      (restoredFromBackup ? '<div class="save-banner info" role="status">🛟 ' + esc(t('bannerRestored')) + ' <button class="btn small" data-act="dismiss-restored">OK</button></div>' : '') +
      (storageBroken ? '<div class="save-banner" role="alert">⚠️ ' + esc(t('bannerCorrupt')) + '</div>' : '') +
      ((saveFailed || readOnly || newerData) ? '<div id="save-banner" class="save-banner" role="alert">⚠️ ' + esc(t(newerData ? 'bannerNewer' : (readOnly ? 'bannerReadOnly' : 'bannerSaveFail'))) +
        (newerData ? ' <button class="btn small" onclick="location.reload()">' + esc(t('reload')) + '</button>' : ' <button class="btn small" data-act="export">' + esc(t('exportBtn')) + '</button>') + '</div>' : '') +
      '<main id="main">' + inner + '</main>' +
      '<footer class="foot">' + esc(t('footer')) + '<br><span>© 2026 Sinan Demir · ' + esc(t('rights')) + ' · <a href="#/legal">' + esc(t('legal')) + '</a></span></footer>';
  }

  /* ================= Onboarding ================= */
  var obChoice = 'de', obName = '';
  function viewOnboarding() {
    var cards = ['de', 'tr'].map(function (cid) {
      var c = K.courses[cid];
      return '<button class="course-card' + (obChoice === cid ? ' selected' : '') + '" data-act="ob-choose" data-c="' + cid + '">' +
        '<span class="flag">' + flag(cid) + '</span><b>' + esc(cid === 'de' ? 'Almanca öğrenmek istiyorum' : 'Ich möchte Türkisch lernen') + '</b>' +
        '<span class="muted">' + esc(c.sublabel) + ' · A1 → C2</span></button>';
    }).join('');
    return (storageBroken ? '<div class="save-banner" role="alert">⚠️ Der gespeicherte Lernstand war beschädigt und es gab keine Sicherung. Eine Kopie bleibt aufbewahrt (dt-corrupt). · Kayıtlı ilerleme bozulmuştu ve yedek yoktu. Bir kopyası saklanıyor (dt-corrupt). <button class="btn small" data-act="export-corrupt">⬇ Kopie herunterladen · Kopyayı indir</button></div>' : '') +
      '<main><div class="onboard">' + LOGO +
      '<h1>Deutsch ⇄ Türkçe</h1><p class="muted">Willkommen! · Hoş geldin!</p>' +
      '<div class="course-cards">' + cards + '</div>' +
      '<div class="field"><label for="ob-name">Name / İsim <span class="muted">(optional / isteğe bağlı)</span></label>' +
      '<input id="ob-name" class="input" maxlength="30" autocomplete="nickname" value="' + esc(obName) + '"></div>' +
      '<button class="btn primary" data-act="ob-start">Los geht’s · Başlayalım →</button>' +
      '<p class="muted small" style="margin-top:18px">Dein Fortschritt bleibt in diesem Browser. · İlerlemen bu tarayıcıda saklanır.</p>' +
      '<p class="muted small"><a href="#/legal/de">Rechtliches & Datenschutz</a> · <a href="#/legal/tr">Yasal bilgiler ve gizlilik</a><br>© 2026 Sinan Demir</p>' +
      '</div></main>';
  }
  function createProfile(name, cid) {
    var id = 'p' + Date.now().toString(36);
    db.profiles[id] = { id: id, name: (name || '').trim(), course: cid, prog: { de: {}, tr: {} }, writes: { de: {}, tr: {} }, created: Date.now() };
    db.active = id; save(); askPersist();
  }

  /* ================= Maskottchen „Lingo“ ================= */
  function lastLearned() {
    var pr = prof(), ts = (pr.last && pr.last[courseId()]) || 0;
    if (!ts) { var p = prog(); Object.keys(p).forEach(function (k) { if (p[k] && p[k].t > ts) ts = p[k].t; }); }
    return ts || null;
  }
  function daysSince(ts) {
    var a = new Date(ts), b = new Date();
    var d0 = new Date(a.getFullYear(), a.getMonth(), a.getDate()), d1 = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.max(0, Math.round((d1 - d0) / 86400000));   // Kalendertage (sommerzeitfest)
  }
  function mascotSvg(mood) {
    var B = '#4263eb', eyes, mouth, extra = '', arm;
    if (mood === 'happy') {
      eyes = '<path d="M37 50q8-10 16 0M65 50q8-10 16 0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>';
      mouth = '<path d="M46 62q13 16 26 0z" fill="#fff"/><path d="M52 68q7 5 14 0" fill="#ff8fab"/>';
      extra = '<ellipse cx="34" cy="62" rx="6" ry="4" fill="#ff8fab" opacity=".6"/><ellipse cx="84" cy="62" rx="6" ry="4" fill="#ff8fab" opacity=".6"/>' +
        '<path d="M88 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fcc419"/><path d="M12 30l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" fill="#fcc419"/>';
      // Arm nach oben + gelbe Hand mit Daumen hoch 👍
      arm = '<path d="M98 66L110 52" stroke="' + B + '" stroke-width="10" stroke-linecap="round"/>' +
        '<g stroke="#d9480f" stroke-width="2" stroke-linejoin="round"><rect x="104" y="17" width="9" height="22" rx="4.5" fill="#fcc419"/>' +
        '<rect x="100" y="33" width="22" height="19" rx="6" fill="#fcc419"/></g>' +
        '<path d="M108 39.5h12M108 45.5h12" stroke="#d9480f" stroke-width="1.8" stroke-linecap="round"/>';
    } else if (mood === 'sad') {
      eyes = '<circle cx="45" cy="50" r="8" fill="#fff"/><circle cx="73" cy="50" r="8" fill="#fff"/><circle cx="45" cy="53" r="4" fill="#1b1f2a"/><circle cx="73" cy="53" r="4" fill="#1b1f2a"/>' +
        '<path d="M36 40l14-5M82 40l-14-5" stroke="#1b1f2a" stroke-width="3.5" stroke-linecap="round"/>';
      mouth = '<path d="M49 74q10-9 20 0" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/>';
      extra = '<path d="M80 58q5 8 0 11q-5-3 0-11z" fill="#74c0fc"/>';
      arm = '';   // ohne Arm
    } else {
      eyes = '<circle cx="45" cy="48" r="8" fill="#fff"/><circle cx="73" cy="48" r="8" fill="#fff"/><circle cx="46" cy="49" r="4" fill="#1b1f2a"/><circle cx="74" cy="49" r="4" fill="#1b1f2a"/>';
      mouth = '<path d="M50 67q9 4 18 0" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/>';
      arm = '';   // ohne Arm
    }
    return '<svg class="mascot ' + mood + '" viewBox="0 0 128 120" role="img" aria-label="Lingo">' +
      '<ellipse cx="60" cy="112" rx="34" ry="5" fill="currentColor" opacity=".12"/>' +
      '<g class="m-body">' + arm +
      '<path d="M34 84L27 104L52 86Z" fill="' + B + '"/><rect x="16" y="20" width="86" height="68" rx="24" fill="' + B + '"/>' +
      '<rect x="22" y="24" width="40" height="10" rx="5" fill="#fff" opacity=".18"/>' + eyes + mouth + extra + '</g></svg>';
  }
  function mascotCard() {
    var ts = lastLearned(), mood, msg;
    if (!ts) { mood = 'neutral'; msg = t('mascotNew'); }
    else {
      var d = daysSince(ts);
      if (d === 0) { mood = 'happy'; msg = DT.daily.progress(ensureProfile(prof()), todayKey()).reached ? t('mascotGoal') : t('mascotToday'); }
      else if (d === 1) { mood = 'happy'; msg = t('mascotYesterday'); }
      else if (d <= 5) { mood = 'neutral'; msg = t('mascotDays', { n: d }); }
      else { mood = 'sad'; msg = t('mascotSad', { n: d }); }
    }
    var when = ts ? '<span class="muted small">' + esc(t('lastLearned')) + ': ' + new Date(ts).toLocaleDateString(locale(uiLang()), { weekday: 'long', day: 'numeric', month: 'long' }) + '</span>' : '';
    return '<div class="card mascot-card">' + mascotSvg(mood) + '<div class="m-bubble"><b>' + esc(msg) + '</b>' + when + '</div></div>';
  }

  /* ================= Dashboard ================= */
  function levelRow(lv, linkBase) {
    var list = levelTopics(lv), s = sumStats(list);
    var has = s.n > 0, p = pct(s.c, s.n), sk = skippedOpenCount(list);
    return '<a class="level-row' + (has ? '' : ' disabled') + '" href="#/lessons/' + lv + '" style="color:inherit;text-decoration:none">' +
      '<span class="lvl lvl-' + lv + '">' + lv + '</span>' +
      '<div><div class="lr-title"><span>' + esc(levelName(lv)) + buildingBadge(lv) + '</span><span class="muted small">' +
        (has ? s.c + ' / ' + s.n + ' ' + esc(t('tasks')) + (sk ? ' · ' + esc(t('skippedPct', { p: pct(sk, s.n) })) : '') : esc(t('comingSoon'))) + '</span></div>' +
        '<div class="bar"><span class="fill-' + lv + '" style="width:' + p + '%"></span>' + (sk ? '<span class="skip" style="width:' + pct(sk, s.n) + '%"></span>' : '') + '</div></div>' +
      '<span class="pct">' + (has ? fmtPct(p) : '–') + '</span></a>';
  }
  function viewDashboard() {
    checkBadges();
    var p = prof(), all = allTopics(), s = sumStats(all), wrongN = wrongIds().length;
    var nt = nextTopic();
    var cont;
    if (nt) {
      var ns = topicStats(nt);
      cont = '<div class="card continue-card"><div><span class="lvl lvl-' + nt.level + '">' + nt.level + '</span> ' +
        '<span class="muted small">' + esc(ns.answered ? t('continueLearning') : t('startHere')) + '</span>' +
        '<h2>' + esc(nt.title) + '</h2><div class="muted">' + esc(nt.sub) + '</div></div>' +
        '<div class="cont-actions"><a class="btn primary" href="#/topic/' + nt.id + '/' + (ns.answered ? 'exercises' : 'learn') + '">' + esc(ns.answered ? t('continueLearning') : t('start')) + ' →</a>' +
        (!s.answered && !ensureProfile(p).place[courseId()] ? '<a class="text-link" href="#/placement">🧭 ' + esc(t('placeOfferLink')) + '</a>' : '') + '</div></div>';
    } else {
      cont = '<div class="card continue-card"><div><h2>🏆</h2><p>' + esc(t('allDone')) + '</p></div></div>';
    }
    var sld = splitLevels();
    var levels = sld.live.map(function (lv) { return levelRow(lv); }).join('') +
      (sld.planned.length ? '<a class="level-row disabled" href="#/lessons" style="color:inherit;text-decoration:none"><span class="lvl lvl-planned">' + esc(sld.label) + '</span><div><div class="lr-title"><span class="muted">' + esc(t('plannedLevels')) + '</span></div></div><span class="pct">–</span></a>' : '');

    // Problemstellen (Top 3)
    var probs = all.filter(function (x) { return x.avail; }).map(function (x) { var st = topicStats(x); return { tp: x, st: st, rate: st.answered ? st.firstW / st.answered : 0 }; })
      .filter(function (x) { return x.st.firstW > 0; }).sort(function (a, b) { return b.rate - a.rate; }).slice(0, 3);
    var probHtml = probs.length ? '<div class="card section"><div class="section-head"><h2>' + esc(t('problemAreas')) + '</h2><a href="#/gaps">' + esc(t('gaps')) + ' →</a></div>' +
      probs.map(function (x) {
        return '<div class="problem"><a href="#/topic/' + x.tp.id + '/review">' + esc(x.tp.title) + ' <span class="muted small">· ' + x.tp.level + '</span></a>' +
          '<div class="bar thin"><span class="fill" style="width:' + Math.round(x.rate * 100) + '%"></span></div><span class="small" style="text-align:right">' + fmtPct(Math.round(x.rate * 100)) + '</span></div>';
      }).join('') + '</div>' : '';

    return '<div class="hero"><div><h1>' + esc(t('hello')) + (p.name ? ', ' + esc(p.name) : '') + ' 👋</h1></div></div>' +
      '<div class="section">' + mascotCard() + '</div>' +
      '<div class="section">' + cont + '</div>' +
      '<div class="section">' + dailyCard(!!nt) + '</div>' +

      (!s.answered ? '' : '<div class="grid grid-3 section">' +
        '<div class="card stat"><span class="num">' + s.c + '<span class="muted" style="font-size:1rem"> / ' + s.n + '</span></span><span class="lbl">' + esc(t('tasks')) + ' ' + esc(t('solved')) + '</span></div>' +
        '<div class="card stat"><span class="num">' + (s.answered ? fmtPct(pct(s.first, s.answered)) + '' : '–') + '</span><span class="lbl">' + esc(t('accuracy')) + '</span></div>' +
        '<a class="card stat" href="#/gaps" style="color:inherit;text-decoration:none"><span class="num" style="color:' + (wrongN ? 'var(--primary)' : 'var(--ok)') + '">' + wrongN + '</span><span class="lbl">' + esc(t('openMistakes')) + ' →</span></a>' +
      '</div>') +
      badgesStrip() +
      '<div class="card section"><div class="section-head"><h2>' + esc(t('levelProgress')) + '</h2><span class="muted small">' + esc(t('totalProgress', { lv: sld.live.join(', ') })) + ': <b>' + fmtPct(pct(s.c, s.n)) + '</b></span></div>' + levels + '</div>' +
      writeCounterHtml() +
      probHtml;
  }

  /* ================= Lektionen ================= */
  function topicCard(tp) {
    var s = topicStats(tp);
    if (!tp.avail) {
      return '<div class="topic-card planned"><span class="tc-num">' + tp.level + ' · ' + tp.num + '</span><span class="tc-title">' + esc(tp.title) + '</span>' +
        '<span class="tc-sub">' + esc(tp.sub) + '</span><div class="tc-foot"><span class="badge">' + esc(t('planned')) + '</span></div></div>';
    }
    var badge = isSkipped(tp.id) && s.c < s.n ? '<span class="badge">⏭ ' + esc(t('skippedBadge')) + '</span>'
      : s.answered === 0 ? '<span class="badge primary">' + esc(t('newBadge')) + '</span>'
      : (s.c === s.n ? '<span class="badge ok">✓ ' + esc(t('doneBadge')) + '</span>'
      : (s.w ? '<span class="badge bad">' + s.w + ' ' + esc(t('mistakesBadge')) + '</span>' : ''));
    return '<a class="topic-card" href="#/topic/' + tp.id + '/' + (s.answered ? 'exercises' : 'learn') + '">' +
      '<span class="tc-num">' + tp.level + ' · ' + tp.num + '</span><span class="tc-title">' + esc(tp.title) + '</span>' +
      '<span class="tc-sub">' + esc(tp.sub) + '</span>' +
      '<div class="bar thin"><span class="ok" style="width:' + pct(s.c, s.n) + '%"></span><span class="bad" style="width:' + pct(s.w, s.n) + '%"></span></div>' +
      '<div class="tc-foot"><span>' + s.c + ' / ' + s.n + ' ' + esc(t('correct')) + '</span>' + badge + '</div></a>';
  }
  function viewLessons(focusLevel) {
    var sl = splitLevels();
    var section = function (lv) {
      var list = levelTopics(lv), s = sumStats(list);
      return '<section class="level-section" id="lv-' + lv + '"><div class="level-head"><span class="lvl lvl-' + lv + '">' + lv + '</span><h2>' + esc(levelName(lv)) + buildingBadge(lv) + '</h2>' +
        (s.n ? '<div class="bar"><span class="fill-' + lv + '" style="width:' + pct(s.c, s.n) + '%"></span>' + (skippedOpenCount(list) ? '<span class="skip" style="width:' + pct(skippedOpenCount(list), s.n) + '%"></span>' : '') + '</div><b>' + fmtPct(pct(s.c, s.n)) + '</b>' : '<span class="badge">' + esc(t('comingSoon')) + '</span>') +
        '</div><div class="topic-grid">' + list.filter(function (x) { return !x.kind; }).map(topicCard).join('') + '</div>' +
        (list.some(function (x) { return x.kind === 'dialog'; }) ? '<h3 class="sub-head">💬 ' + esc(t('dialogsTitle')) + '</h3><div class="topic-grid">' + list.filter(function (x) { return x.kind === 'dialog'; }).map(topicCard).join('') + '</div>' : '') +
        (list.some(function (x) { return x.kind === 'text'; }) ? '<h3 class="sub-head">📄 ' + esc(t('textsTitle')) + '</h3><div class="topic-grid">' + list.filter(function (x) { return x.kind === 'text'; }).map(topicCard).join('') + '</div>' : '') +
        writeSection(lv) +
        '</section>';
    };
    var html = sl.live.map(section).join('') + (sl.planned.length ? '<details class="planned-levels"' + (sl.planned.indexOf(focusLevel) >= 0 ? ' open' : '') + '><summary>' + esc(sl.label + ' · ' + t('plannedLevels')) + '</summary>' + sl.planned.map(section).join('') + '</details>' : '');
    setTimeout(function () { if (focusLevel) { var el = document.getElementById('lv-' + focusLevel); if (el) el.scrollIntoView({ block: 'start' }); } }, 0);
    return '<h1>' + esc(t('lessons')) + '</h1><p class="muted">' + flag(courseId()) + ' ' + esc(course().label) + ' · ' + esc(course().sublabel) +
      ' · <a href="#/placement">🧭 ' + esc(t('placeTitle')) + '</a></p>' + html;
  }

  /* ================= Thema: Erklärung ================= */
  function renderDialog(tp) {
    var d = tp.data.dialog, tgt = course().target, dls = DT.catalog.dialogLines(d), role = DT.catalog.hasRole(d), first = dls.length ? dls[0].s : '';
    var lines = dls.map(function (l, i) {
      return '<div class="dl-line ' + (l.me || l.s !== first ? 'dl-b' : 'dl-a') + (l.me ? ' dl-me' : '') + ' g-' + (l.g || 'x') + '" data-line="' + i + '">' +
        (role ? '<button class="speak" data-act="dl-line" data-line="' + i + '" aria-label="' + esc(t('listen')) + '">🔊</button>'   // Rollenspiel: Stimme pro Sprecher
          : '<button class="speak" data-act="play-say" data-say="' + esc(plain(l.t)) + '" data-g="' + (l.g || '') + '" aria-label="' + esc(t('listen')) + '">🔊</button>') +
        '<div class="dl-body"><span class="dl-who" lang="' + tgt + '">' + esc(l.s) + '</span><div class="tgt" lang="' + tgt + '">' + md(l.t) + '</div><div class="nat">' + md(l.n) + '</div></div></div>';
    }).join('');
    return '<div class="card dialog' + (dialogShowTr ? ' show-tr' : '') + '">' +
      '<div class="btn-row" style="margin-bottom:14px"><button class="btn primary" data-act="dl-play">▶ ' + esc(t('playDialog')) + '</button>' +
      '<button class="btn" data-act="dl-play" data-slow="1">🐢 ' + esc(t('slow')) + '</button>' +
      '<button class="btn" data-act="dl-tr" aria-pressed="' + dialogShowTr + '">🌐 ' + esc(t('translation')) + '</button></div>' +
      '<p class="muted small">' + esc(t('dialogTip')) + '</p>' + (role ? '<p class="muted small">🎭 ' + esc(t('roleTip', { r: d.role })) + '</p>' : '') +
      '<div class="dl-lines">' + lines + '</div>' +
      '<div class="btn-row" style="margin-top:18px"><a class="btn primary" href="#/topic/' + tp.id + '/exercises">' + esc(t('toQuestions')) + '</a></div></div>';
  }
  var dialogShowTr = false;
  function playDialog(tp, slow) {
    var d = tp.data.dialog, my = ++seqToken, i = 0, dls = DT.catalog.dialogLines(d), va = voiceAssign(dls, d.roleG);
    function step() {
      if (my !== seqToken) return;
      document.querySelectorAll('.dl-line.playing').forEach(function (x) { x.classList.remove('playing'); });
      if (i >= dls.length) return;
      var el = document.querySelector('.dl-line[data-line="' + i + '"]'); if (el) el.classList.add('playing');
      var l = dls[i++];
      speakLine(l, va, { rate: slow ? 0.72 : 1, chain: true, onEnd: function () { setTimeout(step, 350); } });
    }
    step();
  }
  /* ---------- Hörtexte (ADR-12.3): erst nur hören, Text erst nach Wunsch (oder wenn alle Fragen beantwortet sind) ---------- */
  var listenShown = {}, listenPlays = {};
  function isListen(data) { return !!data && data.kind === 'listen'; }
  function listenRevealed(x) {
    if (listenShown[x.id] != null) return listenShown[x.id];
    var tp = topicById(x.id), s = tp ? topicStats(tp) : null;
    return !!(s && s.n && s.answered >= s.n);
  }
  function listenCountText(x) {
    var n = listenPlays[x.id] || 0;
    return (x.plays ? t('listenHint', { n: x.plays }) + ' ' : '') + (n ? t('listenCount', { n: n }) : '');
  }
  function listenControls(x) {
    var noAudio = x.lines.some(function (l) { return !canPlay(l.t, course().tts); });
    return '<div class="ls-ctrl" data-tid="' + x.id + '"><div class="btn-row">' +
      '<button class="btn primary" data-act="ls-play" data-tid="' + x.id + '">▶ ' + esc(t('play')) + '</button>' +
      '<button class="btn" data-act="ls-play" data-slow="1" data-tid="' + x.id + '">🐢 ' + esc(t('slow')) + '</button>' +
      '<button class="btn" data-act="ls-stop" data-tid="' + x.id + '">⏹ ' + esc(t('listenStop')) + '</button></div>' +
      '<p class="ls-now small" aria-live="polite"></p><p class="muted small ls-count" aria-live="polite">' + esc(listenCountText(x)) + '</p>' +
      (noAudio ? '<div class="callout warn ls-noaudio">' + esc(t('listenNoAudio')) + '</div>' : '') + '</div>';
  }
  function listenToggle(x, shown) {
    return '<button class="btn small ls-toggle" data-act="ls-toggle" data-tid="' + x.id + '" aria-expanded="' + shown + '">📄 ' + esc(t(shown ? 'transcriptHide' : 'transcriptShow')) + '</button>';
  }
  function listenTranscript(x, shown) {
    var tgt = course().target, first = x.lines.length ? x.lines[0].s : '';
    return '<div class="dialog show-tr ls-transcript" data-tid="' + x.id + '"' + (shown ? '' : ' hidden') + '><div class="dl-lines">' + x.lines.map(function (l, i) {
      return '<div class="dl-line ' + (l.s === first ? 'dl-a' : 'dl-b') + ' g-' + (l.g || 'x') + '" data-line="' + i + '">' +
        '<button class="speak" data-act="ls-line" data-tid="' + x.id + '" data-line="' + i + '" aria-label="' + esc(t('listen')) + '">🔊</button>' +
        '<div class="dl-body"><span class="dl-who" lang="' + tgt + '">' + esc(l.s) + '</span><div class="tgt" lang="' + tgt + '">' + md(l.t) + '</div><div class="nat">' + md(l.n) + '</div></div></div>';
    }).join('') + '</div></div>';
  }
  function renderListen(tp) {
    var x = tp.data.text, shown = listenRevealed(x);
    return '<div class="card readtext listentext"><h2 class="rt-title" lang="' + course().target + '">' + esc(courseId() === 'de' ? x.title : x.sub) + '</h2>' +
      '<p class="muted small">' + esc(t('listenTip')) + '</p>' + listenControls(x) +
      '<div class="btn-row" style="margin:10px 0">' + listenToggle(x, shown) + '</div>' + listenTranscript(x, shown) +
      '<div class="btn-row" style="margin-top:18px"><a class="btn primary" href="#/topic/' + tp.id + '/exercises">' + esc(t('toQuestions')) + '</a></div></div>';
  }
  function setNow(txt) { document.querySelectorAll('.ls-now').forEach(function (e) { e.textContent = txt; }); }
  function playListen(tid, slow) {
    var c = K.content[tid], x = c && c.text; if (!x || !x.lines) return;
    var my = ++seqToken, i = 0, va = voiceAssign(x.lines);
    listenPlays[tid] = (listenPlays[tid] || 0) + 1;
    document.querySelectorAll('.ls-count').forEach(function (e) { e.textContent = listenCountText(x); });
    function step() {
      if (my !== seqToken) return;
      document.querySelectorAll('.dl-line.playing').forEach(function (e) { e.classList.remove('playing'); });
      if (i >= x.lines.length) { setNow(''); return; }
      var l = x.lines[i], el = document.querySelector('.ls-transcript .dl-line[data-line="' + i + '"]'); i++;
      if (el) el.classList.add('playing');
      setNow(t('listenNow', { s: l.s }));   // Sprechername auch bei verborgenem Text
      speakLine(l, va, { rate: slow ? 0.72 : 1, chain: true, onEnd: function () { setTimeout(step, 450); } });
    }
    step();
  }
  function stopListen() { stopAudio(); setNow(''); document.querySelectorAll('.dl-line.playing').forEach(function (e) { e.classList.remove('playing'); }); }
  /* ---------- Lesetexte (ADR-12.2) ---------- */
  function renderTextBody(x) {
    var tgt = course().target, tp = DT.texts.paragraphs(x), out = '';
    tp.forEach(function (p) {
      out += '<div class="rt-par">' + speakBtn(p.t) + (p.h ? '<span class="rt-h">' + esc(p.h) + '</span>' : '') + '<p class="rt-t" lang="' + tgt + '">' + md(p.t) + '</p></div>';
    });
    var gk = x.gloss ? Object.keys(x.gloss) : [];
    if (gk.length) out += '<div class="rt-gloss"><h4>' + esc(t('glossTitle')) + '</h4><ul>' + gk.map(function (w) {
      return '<li><b lang="' + tgt + '">' + esc(w) + '</b> – ' + esc(x.gloss[w]) + '</li>'; }).join('') + '</ul></div>';
    return out;
  }
  function renderText(tp) {
    var x = tp.data.text, cid = courseId();
    return '<div class="card readtext"><h2 class="rt-title" lang="' + course().target + '">' + esc(cid === 'de' ? x.title : x.sub) + '</h2>' +
      '<p class="muted small">' + esc(t('textTip')) + '</p>' + renderTextBody(x) +
      '<div class="btn-row" style="margin-top:18px"><a class="btn primary" href="#/topic/' + tp.id + '/exercises">' + esc(t('toQuestions')) + '</a></div></div>';
  }
  // Text-Panel über der Frage: Desktop offen, Handy zu; Zustand nur im Speicher
  var textPanelOpen = null;
  function textPanel(topicData) {
    if (isListen(topicData)) {
      var lx = topicData.text, shown = listenRevealed(lx);
      return '<div class="card text-panel listen-panel">' + listenControls(lx) + '<div class="btn-row" style="margin-top:8px">' + listenToggle(lx, shown) +
        '<span class="muted small tp-title" lang="' + course().target + '"> ' + esc(courseId() === 'de' ? lx.title : lx.sub) + '</span></div>' + listenTranscript(lx, shown) + '</div>';
    }
    if (!topicData || topicData.kind !== 'read') return '';
    var x = topicData.text, open = textPanelOpen === null ? !(window.matchMedia && window.matchMedia('(max-width: 640px)').matches) : textPanelOpen;
    return '<div class="card text-panel"><button class="btn small" data-act="text-toggle" aria-expanded="' + open + '" aria-controls="text-panel-body">📄 ' +
      esc(open ? t('textHide') : t('textShow')) + '</button><span class="muted small tp-title" lang="' + course().target + '"> ' + esc(courseId() === 'de' ? x.title : x.sub) + '</span>' +
      '<div id="text-panel-body" class="tp-body"' + (open ? '' : ' hidden') + '>' + renderTextBody(x) + '</div></div>';
  }
  function renderLesson(tp) {
    if (tp.data.kind === 'dialog') return renderDialog(tp);
    if (tp.data.kind === 'read') return renderText(tp);
    if (tp.data.kind === 'listen') return renderListen(tp);
    var tgt = course().tts, out = '';
    (tp.data.lesson || []).forEach(function (b) {
      if (b.h) out += '<h3>' + md(b.h) + '</h3>';
      if (b.p) out += '<p>' + md(b.p) + '</p>';
      if (b.tip) out += '<div class="callout tip">' + md(b.tip) + '</div>';
      if (b.warn) out += '<div class="callout warn">' + md(b.warn) + '</div>';
      if (b.table) {
        out += '<div class="tbl-wrap"><table><thead><tr>' + b.table.head.map(function (h) { return '<th>' + md(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.table.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      }
      if (b.ex) {
        out += '<h3>' + esc(t('examples')) + '</h3><div class="examples">' + b.ex.map(function (e) {
          return '<div class="example">' + speakBtn(e[0]) + '<div><div class="tgt" lang="' + tgt.slice(0, 2) + '">' + md(e[0]) + '</div><div class="nat">' + md(e[1]) + '</div></div></div>';
        }).join('') + '</div>';
      }
      if (b.vocab) {
        out += '<h3>' + esc(t('vocab')) + '</h3><div class="tbl-wrap"><table><tbody>' + b.vocab.map(function (v) {
          return '<tr><td style="width:44px">' + speakBtn(v[0]) + '</td><td lang="' + tgt.slice(0, 2) + '"><b>' + md(v[0]) + '</b></td><td class="muted">' + md(v[1]) + '</td></tr>';
        }).join('') + '</tbody></table></div>';
      }
    });
    return '<div class="card lesson">' + out + '<div class="btn-row" style="margin-top:18px"><a class="btn primary" href="#/topic/' + tp.id + '/exercises">' + esc(t('toExercises')) + '</a></div></div>';
  }

  /* ================= Übungs-Player ================= */
  var player = null;
  function newPlayer(key, mode, queue, topicId) {
    var p = prog(), start = 0;
    if (mode === 'all') {
      var firstOpen = queue.findIndex(function (id) { return !p[id] || p[id].s !== 'c'; });
      start = firstOpen < 0 ? 0 : firstOpen;
    }
    player = { key: key, mode: mode, queue: queue, idx: start, checked: false, cur: null, topicId: topicId, done: false, session: {}, gen: {}, requeued: {} };
    return player;
  }
  function curEx() { return resolveItem(player.queue[player.idx]); }
  function initCur(ex) {
    var c = { sel: null, input: '', picked: [], choice: [] };
    if ((ex.t === 'mc' || ex.t === 'listen') && ex.o) c.order = shuffleNotIdentity(ex.o.map(function (_, i) { return i; }));
    if (ex.t === 'order') c.pool = shuffleNotIdentity(ex.w.map(function (_, i) { return i; }));
    if (ex.t === 'cloze') c.gaps = {};
    if (ex.t === 'sort') { c.assign = ex.items.map(function () { return null; }); c.order = shuffleNotIdentity(ex.items.map(function (_, i) { return i; })); }
    if (ex.t === 'match') { c.right = shuffle(ex.p.map(function (x) { return x[1]; })); c.choice = ex.p.map(function () { return ''; }); }
    return c;
  }

  function playerDots() {
    if (player.mode === 'placement') {   // keine Sprünge im Test – nur Fortschritt
      return place ? '<div class="place-prog"><span class="muted small">' + esc(t('placeProgress', { i: Math.min(place.ti + 1, place.topics.length), n: place.topics.length })) + '</span>' +
        '<div class="bar thin"><span class="fill" style="width:' + pct(place.ti, place.topics.length) + '%"></span></div></div>' : '';
    }
    var p = prog();
    return '<div class="dots" role="list">' + player.queue.map(function (id, i) {
      var r = p[id], cls = r ? (r.s === 'c' ? ' c' : ' w') : '';
      if (player.mode !== 'all') cls = player.session[id] === true ? ' c' : (player.session[id] === false ? ' w' : '');
      if (id.indexOf('card:') === 0) cls += ' dot-new';
      var isSpeak = EXI[id] && EXI[id].ex.t === 'speak';
      if (isSpeak) cls += ' speak-dot';
      var sym = id.indexOf('card:') === 0 ? '★' : (/ c\b/.test(cls) ? '✓' : (/ w\b/.test(cls) ? '✗' : (isSpeak ? '🎤' : (i + 1))));
      var lab = esc(t('question')) + ' ' + (i + 1) + (/ c\b/.test(cls) ? ' – ' + esc(t('srDone')) : / w\b/.test(cls) ? ' – ' + esc(t('srNotYet')) : '');
      return '<button class="dot' + cls + (i === player.idx ? ' cur' : '') + '" data-act="jump" data-i="' + i + '" role="listitem" aria-label="' + lab + '"' + (i === player.idx ? ' aria-current="step"' : '') + '>' + sym + '</button>';
    }).join('') + '</div>';
  }
  function renderCard(item) {
    var w = item.word, tgt = course().target;
    return '<div class="card qcard word-card"><div class="qmeta"><span>✨ ' + esc(t('newWord')) + '</span><span>' + esc(item.topic.level + ' · ' + item.topic.title) + '</span></div>' +
      '<div class="wc-main"><button class="speak big" data-act="play-say" data-say="' + esc(plain(w.t)) + '" aria-label="' + esc(t('listen')) + '">🔊</button>' +
      '<div><div class="wc-word" lang="' + tgt + '">' + esc(w.t) + '</div>' + (w.pl ? '<div class="muted small" lang="' + tgt + '">' + esc(t('plural')) + ': ' + esc(w.pl) + '</div>' : '') +
      '<div class="wc-trans">' + esc(w.n) + '</div></div></div>' +
      (w.ex ? '<div class="example">' + speakBtn(w.ex) + '<div><div class="tgt" lang="' + tgt + '">' + esc(w.ex) + '</div><div class="nat">' + esc(w.exn || '') + '</div></div></div>' : '') +
      (w.note ? '<div class="callout tip">' + md(w.note) + '</div>' : '') +
      '<div class="qactions"><button class="btn" data-act="word-known">' + esc(t('knowIt')) + '</button><button class="btn primary" data-act="card-next" id="next-btn">' + esc(t('next')) + '</button></div></div>';
  }
  function clozeHasInput(ex) { return DT.check.clozeKeys(ex).some(function (n) { return !ex.gaps[n].o; }); }
  // Lückentext (ADR-12.4): Text mit Eingabefeldern bzw. Auswahllisten (natives <select>) an den Lücken; nach dem Prüfen ✓/✗ je Lücke
  function renderCloze(ex, c, res, target) {
    var keys = DT.check.clozeKeys(ex), parts = ex.text.split(/\{\d+\}/), out = md(parts[0]);
    keys.forEach(function (n, k) {
      var g = ex.gaps[n], val = c.gaps[n] == null ? '' : c.gaps[n], r = res ? res.gaps[k] : null;
      var cls = r ? (r.ok ? ' right' : ' wrong') : '';
      var lab = esc(t('clozeGapLabel', { n: n, m: keys.length }));
      if (g.o) {
        out += '<select class="cloze-select' + cls + '" id="cloze-' + n + '" data-act="cloze" data-i="' + n + '" aria-label="' + lab + '" lang="' + target + '"' + (res ? ' disabled' : '') + '><option value="">' + esc(t('choose')) + '</option>' +
          g.o.map(function (o) { return '<option value="' + esc(o) + '"' + (val === o ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>';
      } else {
        out += '<input class="gap-input cloze-input' + cls + '" id="cloze-' + n + '" data-gap="' + n + '" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="' + target + '" aria-label="' + lab + '" value="' + esc(val) + '"' + (res ? ' disabled' : '') +
          ' size="' + Math.max(6, (g.a[0] || '').length + 2) + '">';
      }
      if (r) out += '<span class="cloze-mark" aria-hidden="true" style="color:var(--' + (r.ok ? 'ok' : 'bad') + ')">' + (r.ok ? '✓' : '✗') + '</span><span class="sr-only"> – ' + esc(t(r.ok ? 'srRight' : 'srNotYet')) + '</span>';
      out += md(parts[k + 1] || '');
    });
    return '<div class="gapline cloze">' + out + '</div>';
  }
  /* Rollenspiel (ADR-12.6): Kontextzeilen (≤ 3) vor der Wahl; die Lernenden-Rolle bleibt bis zur Auswahl stumm */
  function roleDialog(item) { var dd = item && item.topic && item.topic.data; return dd && dd.dialog; }
  function roleName(item) { var d = roleDialog(item); return d && d.role || ''; }
  function roleContext(ex) {
    var tgt = course().target;
    return '<div class="role-ctx dialog" role="group" aria-label="' + esc(t('roleCtx')) + '"><div class="dl-lines">' + ex.ctx.map(function (l, i) {
      return '<div class="dl-line ' + (l.me ? 'dl-b dl-me' : 'dl-a') + '"><button class="speak" data-act="role-line" data-k="' + i + '" aria-label="' + esc(t('listen')) + '">🔊</button>' +
        '<div class="dl-body"><span class="dl-who" lang="' + tgt + '">' + esc(l.s) + '</span><div class="tgt" lang="' + tgt + '">' + md(l.t) + '</div></div></div>';
    }).join('') + '</div></div>';
  }
  // Zeile des Rollenspiels in der Stimme ihres Sprechers: k = Index im Kontext, 'ans' = die richtige Antwort der eigenen Rolle
  function playRoleLine(item, k, auto) {
    var d = roleDialog(item); if (!d || !item.ex.role) return;
    var l = k === 'ans' ? { s: d.role || '', g: d.roleG || '', t: item.ex.ans } : item.ex.ctx[+k]; if (!l) return;
    speakLine(l, voiceAssign(DT.catalog.dialogLines(d), d.roleG), { auto: auto });
  }
  function renderPlayer() {
    if (player.done || player.idx >= player.queue.length) return renderSummary();
    var item = curEx();
    if (!item) { player.idx++; return renderPlayer(); }
    var ex = item.ex, p = prog();
    if (item.kind === 'card') return playerDots() + renderCard(item);
    if (!player.cur) player.cur = initCur(ex);
    var c = player.cur, checked = player.checked, res = player.result;
    var dots = playerDots();

    var body = '', qtext = '', hint = '';
    var target = course().target;
    if (ex.t === 'mc' || ex.t === 'listen') {
      qtext = ex.role ? esc(t('roleQ', { r: roleName(item) })) : md(ex.q || t('listenQ'));
      var order = c.order || ex.o.map(function (_, i) { return i; });
      body = (ex.t === 'listen' ? audioBar(ex.say) : '') + (ex.role ? roleContext(ex) : '') + '<div class="options" role="radiogroup">' + order.map(function (i, pos) {
        var o = ex.o[i];
        var cls = '';
        if (checked) { if (i === ex.a) cls = ' right'; else if (i === c.sel) cls = ' wrong'; }
        else if (i === c.sel) cls = ' sel';
        return '<button class="opt' + cls + '" data-act="mc" data-i="' + i + '" role="radio" aria-checked="' + (i === c.sel) + '"' + (checked ? ' disabled' : '') + '>' +
          '<span class="key' + (cls === ' right' ? ' ok' : cls === ' wrong' ? ' bad' : '') + '" aria-hidden="true">' + (cls === ' right' ? '✓' : cls === ' wrong' ? '✗' : 'ABCDEFG'[pos]) + '</span><span>' + md(o) +
          (cls === ' right' ? '<span class="sr-only"> – ' + esc(t('srRight')) + '</span>' : cls === ' wrong' ? '<span class="sr-only"> – ' + esc(t('srYours')) + '</span>' : '') + '</span></button>';
      }).join('') + '</div>';
    } else if (ex.t === 'speak') {
      qtext = md(ex.q || t('speakQ'));
      var scls = checked ? (res.ok ? ' right' : ' wrong') : '';
      body = '<div class="say-box' + scls + '" lang="' + target + '">' + md(ex.say) + '</div>' + audioBar(ex.say, true);
      if (SR && c.micInfo && !checked) {   // einmaliger Datenschutz-Hinweis vor dem ersten Mikrofon-Einsatz (ADR-6)
        body += '<div class="callout tip mic-info"><b>🎤 ' + esc(t('micInfoTitle')) + '</b><br>' + esc(t('micInfoText')) +
          ' <a href="#/legal">' + esc(t('legal')) + '</a><div class="btn-row" style="margin-top:10px">' +
          '<button class="btn primary" data-act="mic-ok">' + esc(t('micInfoOk')) + '</button>' +
          '<button class="btn" data-act="self-ok">✓ ' + esc(t('saidAloud')) + '</button></div></div>';
      } else if (SR) {
        body += '<button class="btn primary mic-btn' + (c.listening ? ' on' : '') + '" data-act="mic"' + (checked ? ' disabled' : '') + '>🎤 ' + esc(c.listening ? t('listening') : t('speakNow')) + '</button>' +
          (c.heard && !checked ? '<p class="small" style="margin-top:10px">' + esc(t('recognized')) + ': <b>' + esc(c.heard) + '</b></p>' : '') +
          (c.micError ? '<p class="small" style="color:var(--bad);margin-top:10px">' + esc(t(c.micError === 'not-allowed' || c.micError === 'service-not-allowed' ? 'micDenied' : (c.micError === 'language-not-supported' ? 'micNoLang' : 'micNoSpeech'))) + '</p>' +
            (checked ? '' : '<button class="btn" data-act="self-ok" style="margin-top:8px">✓ ' + esc(t('saidAloud')) + '</button>') : '');
      } else {
        body += '<p class="muted small">' + esc(t('noMic')) + '</p>' +
          (checked ? '' : '<button class="btn" data-act="self-ok">✓ ' + esc(t('saidAloud')) + '</button>');
      }
    } else if (ex.t === 'dictation') {
      qtext = md(ex.q || t('dictationQ'));
      if (ex.cs !== false) hint = t('strictNote');
      var dcls = checked ? (res.ok ? ' right' : ' wrong') : '';
      body = audioBar(ex.say) + '<input class="gap-input dict-input' + dcls + '" id="gap-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="' + target + '" placeholder="' + esc(t('typeWhatYouHear')) + '" value="' + esc(c.input) + '"' + (checked ? ' disabled' : '') + '>';
      if (!checked) body += charBar();
    } else if (ex.t === 'gap') {
      if (ex.cs !== false) hint = t('strictNote');
      var parts = ex.q.split(/_{3,}/);
      var inputCls = checked ? (res.ok ? ' right' : ' wrong') : '';
      var input = '<input class="gap-input' + inputCls + '" id="gap-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="' + target + '" placeholder="' + esc(t('typeHere')) + '" value="' + esc(c.input) + '"' + (checked ? ' disabled' : '') + ' size="' + Math.max(8, (ex.a[0] || '').length + 2) + '">';
      if (parts.length > 1) body = '<div class="gapline">' + md(parts[0]) + input + md(parts.slice(1).join('___')) + '</div>';
      else body = '<div class="gapline">' + md(ex.q) + '<br>' + input + '</div>';
      if (!checked) body += charBar();
    } else if (ex.t === 'order') {
      qtext = md(ex.q);
      hint = t('orderHint');
      var tcls = checked ? (res.ok ? ' right' : ' wrong') : '';
      body = '<div class="order-target' + tcls + '">' + (c.picked.length ? c.picked.map(function (wi, k) {
        return '<button class="chip" data-act="unpick" data-k="' + k + '"' + (checked ? ' disabled' : '') + '>' + esc(ex.w[wi]) + '</button>';
      }).join('') : '<span class="placeholder">' + esc(t('orderEmpty')) + '</span>') + '</div>' +
        '<div class="order-pool">' + c.pool.map(function (wi) {
          var used = c.picked.indexOf(wi) >= 0;
          return '<button class="chip' + (used ? ' used' : '') + '" data-act="pick" data-w="' + wi + '"' + (checked || used ? ' disabled' : '') + '>' + esc(ex.w[wi]) + '</button>';
        }).join('') + '</div>';
    } else if (ex.t === 'cloze') {
      qtext = md(ex.q || '');
      hint = t('clozeHint') + (ex.cs !== false && clozeHasInput(ex) ? ' ' + t('strictNote') : '');
      body = renderCloze(ex, c, checked ? res : null, target);
      if (!checked && clozeHasInput(ex)) body += charBar();
    } else if (ex.t === 'sort') {
      qtext = md(ex.q || '');
      hint = t('sortHint');
      body = '<div class="sort-list">' + (c.order || []).map(function (i) {
        var it = ex.items[i], sel = c.assign[i], r = checked ? res.items[i] : null;
        return '<div class="sort-row' + (r ? (r.ok ? ' right' : ' wrong') : '') + '"><span class="sort-item" lang="' + target + '">' + md(it[0]) +
          (r ? ' <span aria-hidden="true" style="color:var(--' + (r.ok ? 'ok' : 'bad') + ')">' + (r.ok ? '✓' : '✗') + '</span><span class="sr-only"> – ' + esc(t(r.ok ? 'srRight' : 'srNotYet')) + '</span>' : '') + '</span>' +
          '<div class="sort-cats" role="radiogroup" aria-label="' + esc(plain(it[0])) + '">' + ex.cats.map(function (cat, ci) {
            return '<button type="button" class="sort-cat' + (sel === ci ? ' sel' : '') + '" data-act="sort" data-i="' + i + '" data-c="' + ci + '" role="radio" aria-checked="' + (sel === ci) + '"' + (checked ? ' disabled' : '') + '>' + esc(cat) + '</button>';
          }).join('') + '</div></div>';
      }).join('') + '</div>';
    } else if (ex.t === 'match') {
      qtext = md(ex.q);
      hint = t('matchHint');
      body = ex.p.map(function (pair, i) {
        var cls = checked ? (c.choice[i] === pair[1] ? ' right' : ' wrong') : '';
        return '<div class="match-row"><span class="left" lang="' + target + '">' + md(pair[0]) + (cls === 'right' ? ' <span aria-hidden="true" style="color:var(--ok)">✓</span>' : cls === 'wrong' ? ' <span aria-hidden="true" style="color:var(--bad)">✗</span>' : '') + '</span><select data-act="match" data-i="' + i + '" class="' + cls + '" aria-label="' + esc(plain(pair[0])) + '"' + (checked ? ' disabled' : '') + '>' +
          '<option value="">' + esc(t('choose')) + '</option>' + c.right.map(function (r) {
            return '<option value="' + esc(r) + '"' + (c.choice[i] === r ? ' selected' : '') + '>' + esc(r) + '</option>';
          }).join('') + '</select></div>';
      }).join('');
    }

    if ((ex.t === 'listen' || ex.t === 'dictation') && !checked && !canPlay(ex.say)) {
      body = '<div class="callout warn">' + esc(t('audioMissing')) + '</div>';
      c.noAudio = true;
    }
    var meta = '<div class="qmeta"><span>' + esc(t('question')) + ' ' + (player.idx + 1) + ' ' + esc(t('of')) + ' ' + player.queue.length + (ex.t === 'speak' ? ' · 🎤 ' + esc(t('speakOptional')) : '') + '</span>' +
      (player.mode !== 'all' && player.mode !== 'review' && item.topic ? '<span>' + esc(item.topic.level + ' · ' + item.topic.title) + '</span>' : '') + '</div>';
    var fb = checked ? feedbackHtml(ex, res) : '';
    var isLast = player.idx >= player.queue.length - 1;
    var actions = '<div class="qactions">' +
      (checked ? '<span></span><button class="btn primary" data-act="next" id="next-btn">' + esc(isLast ? t('finish') : t('next')) + '</button>'
        : '<button class="btn small" data-act="skip">' + esc(t('skip')) + '</button><button class="btn primary" data-act="check" id="check-btn"' + (canCheck(ex, c) ? '' : ' disabled') + '>' + esc(t('check')) + '</button>') +
      '</div>';

    return dots + textPanel(item.topic && item.topic.data) + '<div class="card qcard">' + meta + (qtext ? '<div class="qtext">' + qtext + '</div>' : '') +
      (hint ? '<p class="qhint">' + esc(hint) + '</p>' : '') + body + '<div aria-live="polite">' + fb + '</div>' + actions + '</div>';
  }
  function canCheck(ex, c) {
    if (c.noAudio) return false;
    if (ex.t === 'mc' || ex.t === 'listen') return c.sel !== null;
    if (ex.t === 'gap' || ex.t === 'dictation') return String(c.input).trim().length > 0;
    if (ex.t === 'speak') return !!c.heardAlts || !!c.selfOk;
    if (ex.t === 'order') return c.picked.length > 0;
    if (ex.t === 'match') return c.choice.every(function (x) { return x; });
    if (ex.t === 'cloze') return DT.check.clozeKeys(ex).every(function (n) { return String(c.gaps[n] == null ? '' : c.gaps[n]).trim().length > 0; });
    if (ex.t === 'sort') return c.assign.every(function (x) { return x !== null; });
    return false;
  }
  function evaluate(ex, c) { return DT.check.evaluate(ex, c, course().target, t); }
  function roleFeedback(ex, res, e) {
    var tgt = course().target, ans = '<div class="fb-row"><span class="k">' + esc(t(res.ok ? 'roleYouSay' : 'rightAnswer')) + ':</span><b lang="' + tgt + '">' + md(ex.ans) + '</b> ' +
      '<button class="speak" data-act="role-line" data-k="ans" aria-label="' + esc(t('listen')) + '">🔊</button></div>' + (ex.ansN ? '<p class="nat muted small" style="margin:0 0 6px">' + md(ex.ansN) + '</p>' : '');
    if (res.ok) return '<div class="fb ok"><div class="fb-title">' + esc(t('great')) + '</div>' + ans + (ex.e ? '<p style="margin:0">' + md(ex.e) + '</p>' : '') + '</div>';
    return '<div class="fb bad"><div class="fb-title">' + esc(t('notQuite')) + '</div>' +
      '<div class="fb-row"><span class="k">' + esc(t('yourAnswer')) + ':</span><s lang="' + tgt + '">' + md(res.given || '–') + '</s></div>' + ans +
      '<div class="fb-sec"><h4>' + esc(t('whyWrong')) + '</h4><p>' + md(res.hint || t('genericWrong')) + '</p></div>' + e + '</div>';
  }
  function feedbackHtml(ex, res) {
    var e = ex.e ? '<div class="fb-sec"><h4>' + esc(t('whyRight')) + '</h4><p>' + md(ex.e) + '</p></div>' : '';
    if (ex.role) return roleFeedback(ex, res, e);
    if (res.ok) {
      return '<div class="fb ok"><div class="fb-title">' + esc(t('great')) + '</div>' + (ex.say ? '<p style="margin:0 0 6px"><b lang="' + course().target + '">' + md(ex.say) + '</b> ' + speakBtn(ex.say) + '</p>' : '') + (ex.e ? '<p style="margin:0">' + md(ex.e) + '</p>' : '') + '</div>';
    }
    var correctHtml;
    if (res.match) {
      correctHtml = '<ul class="pairs">' + ex.p.map(function (x, i) {
        var mine = player.cur.choice[i];
        return '<li>' + (mine === x[1] ? '✅' : '❌') + ' <b>' + md(x[0]) + '</b> = ' + md(x[1]) + (mine !== x[1] ? ' <span class="muted">(' + esc(t('yourAnswer')) + ': <s>' + esc(mine || '–') + '</s>)</span>' : '') + '</li>';
      }).join('') + '</ul>';
      return '<div class="fb bad"><div class="fb-title">' + esc(t('notQuite')) + '</div>' + correctHtml + e + '</div>';
    }
    if (res.cloze || res.sort) {
      var rows = res.cloze ? res.gaps.map(function (g) {
        return '<li>' + (g.ok ? '✅' : '❌') + ' <b>' + esc(t('clozeResult', { n: g.n })) + ':</b> ' +
          (g.ok ? '<b>' + md(g.correct) + '</b>' : '<s>' + esc(g.given || '–') + '</s> → <b>' + md(g.correct) + '</b>' + (g.hint ? ' <span class="muted">– ' + md(g.hint) + '</span>' : '')) + '</li>';
      }) : res.items.map(function (x) {
        return '<li>' + (x.ok ? '✅' : '❌') + ' <b>' + md(x.text) + '</b> → <b>' + esc(x.correct) + '</b>' +
          (x.ok ? '' : ' <span class="muted">(' + esc(t('sortNot', { c: x.given || '–' })) + ')</span>') + (x.hint ? ' <span class="muted">– ' + md(x.hint) + '</span>' : '') + '</li>';
      });
      return '<div class="fb bad"><div class="fb-title">' + esc(t('notQuite')) + '</div><ul class="pairs">' + rows.join('') + '</ul>' + e + '</div>';
    }
    var why = res.hint || t('genericWrong');
    if (ex.t === 'speak') {
      return '<div class="fb bad"><div class="fb-title">' + esc(t('notQuite')) + '</div>' +
        '<div class="fb-row"><span class="k">' + esc(t('recognized')) + ':</span><s>' + esc(res.given || '–') + '</s></div>' +
        '<div class="fb-row"><span class="k">' + esc(t('rightAnswer')) + ':</span><b>' + md(ex.say) + '</b> ' + speakBtn(ex.say) + '</div>' +
        '<div class="fb-sec"><p>' + esc(why) + '</p></div>' + e +
        '<div class="btn-row" style="margin-top:10px"><button class="btn" data-act="retry">🎤 ' + esc(t('tryAgain')) + '</button></div></div>';
    }
    var heard = ex.say ? '<div class="fb-row"><span class="k">' + esc(t('heard')) + ':</span><b lang="' + course().target + '">' + md(ex.say) + '</b> ' + speakBtn(ex.say) + '</div>' : '';
    return '<div class="fb bad"><div class="fb-title">' + esc(t('notQuite')) + '</div>' + heard +
      '<div class="fb-row"><span class="k">' + esc(t('yourAnswer')) + ':</span><s>' + md(res.given || '–') + '</s></div>' +
      (ex.t === 'dictation' ? '' : '<div class="fb-row"><span class="k">' + esc(t('rightAnswer')) + ':</span><b>' + md(res.correct) + '</b> ' + ((ex.t === 'gap' || ex.t === 'order') ? speakBtn(res.correct) : '') + '</div>') +
      '<div class="fb-sec"><h4>' + esc(t('whyWrong')) + '</h4><p>' + md(why) + '</p></div>' + e + '</div>';
  }
  function renderSummary() {
    if (player.mode === 'placement' && place) return placementResult();
    if (!player.badgesChecked) { player.badgesChecked = true; checkBadges(); }
    if (['learn', 'wpractice', 'srs', 'daily'].indexOf(player.mode) >= 0) {
      var ids = player.queue.filter(function (q) { return q.indexOf('card:') !== 0; });
      var uniq = ids.filter(function (q, i) { return ids.indexOf(q) === i; });
      var okN = uniq.filter(function (q) { return player.session[q] === true; }).length;
      var pg = DT.daily.progress(ensureProfile(prof()), todayKey());
      var b2 = '<a class="btn primary" href="#/dashboard">' + esc(t('dashboard')) + '</a>';
      if (player.mode === 'learn' && player.field && newWords(player.field, 1, player.lv).length) b2 = '<a class="btn primary" href="#/words/' + (player.lv || 'A1') + '/' + player.field + '/learn" data-act="restart-review">✨ ' + esc(t('learnMore')) + '</a>' + b2.replace(' primary', '');
      if (player.mode !== 'srs' && dueItems(1).length) b2 += '<a class="btn" href="#/review" data-act="restart-review">🔁 ' + esc(t('review')) + '</a>';
      b2 += '<a class="btn" href="#/words">' + esc(t('words')) + '</a>';
      return '<div class="card summary"><div style="font-size:2.6rem">' + (pg.reached ? '🎉' : '💪') + '</div><h2>' + esc(t('sessionDone')) + '</h2>' +
        '<p>' + esc(t('summaryText', { c: okN, n: uniq.length })) + '</p>' +
        '<p class="muted">' + esc(pg.reached ? t('goalReachedLong') : t('goalProgress', { d: pg.done, g: pg.goal })) + '</p>' +
        '<div class="btn-row">' + b2 + '</div></div>';
    }
    var tp = player.topicId ? topicById(player.topicId) : null;
    var title, n, c, open, unanswered = 0;
    if (player.mode === 'all' && tp) {
      var s = topicStats(tp); n = s.n; c = s.c; open = s.w; unanswered = s.o;
      title = unanswered ? t('stillOpenTitle', { n: unanswered }) : t('summaryTitle');
    } else {
      var uq = player.queue.filter(function (id, i) { return player.queue.indexOf(id) === i; });
      n = uq.length;
      c = uq.filter(function (id) { return player.session[id] === true && !player.requeued[id]; }).length;
      open = player.topicId ? wrongIds(player.topicId).length : wrongIds().length;
      title = t('reviewDoneTitle');
    }
    var p = pct(c, n);
    var emoji = unanswered ? '📝' : (p === 100 ? '🏆' : (p >= 70 ? '💪' : '📘'));
    var btns = '';
    if (unanswered) btns += '<button class="btn primary" data-act="redo-open">' + esc(t('solveOpen')) + '</button>';
    if (open) btns += '<a class="btn' + (unanswered ? '' : ' primary') + '" href="' + (player.topicId ? '#/topic/' + player.topicId + '/review' : '#/practice') + '" data-act="restart-review">' + esc(t('reviewNow')) + ' (' + open + ')</a>';
    if (tp) btns += '<button class="btn" data-act="redo-all">' + esc(t('redoAll')) + '</button>';
    var nt = nextTopic();
    if (nt && (!tp || nt.id !== tp.id)) btns += '<a class="btn' + (open || unanswered ? '' : ' primary') + '" href="#/topic/' + nt.id + '/learn">' + esc(t('nextTopic')) + '</a>';
    btns += '<a class="btn" href="#/lessons">' + esc(t('backToLessons')) + '</a>';
    return '<div class="card summary"><div style="font-size:2.6rem">' + emoji + '</div><h2>' + esc(title) + '</h2>' +
      '<div class="big">' + fmtPct(p) + '</div><p>' + esc(t('summaryText', { c: c, n: n })) + '</p>' +
      (unanswered ? '<p class="muted">' + esc(t('skippedSome', { n: unanswered })) + '</p>' : '') +
      (open ? '<p class="muted">' + esc(t('stillOpen', { n: open })) + '</p>' : (c && !unanswered ? '<p class="muted">' + esc(t('noMistakes')) + '</p>' : '')) +
      '<div class="btn-row">' + btns + '</div></div>';
  }

  /* ================= Thema-Seite ================= */
  function viewTopic(id, tab) {
    var tp = topicById(id);
    if (!tp || !tp.avail) return '<div class="empty"><div class="big">🧭</div><p>' + esc(t('comingSoon')) + '</p><a class="btn" href="#/lessons">' + esc(t('backToLessons')) + '</a></div>';
    tab = tab || 'learn';
    var s = topicStats(tp), wN = wrongIds(tp.id).length, spN = tp.data.exercises.filter(function (e) { return e.t === 'speak'; }).length;
    var subtabs = [
      ['learn', tp.kind === 'dialog' ? '💬 ' + t('dialogTab') : tp.kind === 'text' ? (isListen(tp.data) ? '🎧 ' + t('listenTab') : '📄 ' + t('textTab')) : '📖 ' + t('explanation')],
      ['exercises', '✏️ ' + t('exercisesShort') + ' (' + s.c + '/' + s.n + (spN ? ' + ' + spN + ' 🎤' : '') + ')'],
      ['review', '🔁 ' + t('reviewShort') + (wN ? ' (' + wN + ')' : '')]
    ];
    var content;
    if (tab === 'learn') content = renderLesson(tp);
    else if (tab === 'exercises') {
      var key = tp.id + ':all';
      if (!player || player.key !== key) newPlayer(key, 'all', tp.data.exercises.map(function (_, i) { return exId(tp.id, i); }), tp.id);
      content = renderPlayer();
    } else {
      var rkey = tp.id + ':review';
      if (!player || player.key !== rkey) {
        var q = wrongIds(tp.id);
        if (!q.length) { player = null; content = '<div class="card empty"><div class="big">✅</div><p>' + esc(t('noMistakesTopic')) + '</p><a class="btn" href="#/topic/' + tp.id + '/exercises">' + esc(t('exercises')) + '</a></div>'; }
        else newPlayer(rkey, 'review', q, tp.id);
      }
      if (player && player.key === rkey) content = renderPlayer();
    }
    return '<div class="crumbs"><a href="#/lessons">' + esc(t('lessons')) + '</a> › <a href="#/lessons/' + tp.level + '">' + tp.level + ' · ' + esc(levelName(tp.level)) + '</a></div>' +
      '<div class="topic-header"><div><h1>' + esc(tp.title) + '</h1><div class="muted">' + esc(tp.sub) + '</div></div>' +
      '<span class="lvl lvl-' + tp.level + '">' + tp.level + '</span></div>' +
      (isSkipped(tp.id) ? '<div class="callout tip skip-note">' + esc(t('skippedInfo')) + ' <button class="btn small" data-act="unskip" data-id="' + tp.id + '">' + esc(t('undoSkip')) + '</button></div>' : '') +
      '<nav class="subtabs" aria-label="' + esc(tp.title) + '">' + subtabs.map(function (x) {
        return '<a class="subtab' + (x[0] === tab ? ' active' : '') + '" href="#/topic/' + tp.id + '/' + x[0] + '"' + (x[0] === tab ? ' aria-current="page"' : '') + '>' + esc(x[1]) + '</a>';
      }).join('') + '</nav>' + content;
  }

  /* ================= Wortschatz ================= */
  function srsBar(st, total) {
    return '<div class="bar"><span class="ok" style="width:' + pct(st.sicher, total) + '%"></span><span class="fill" style="width:' + pct(st.lernend, total) + '%"></span></div>';
  }
  function levelPicker(lv) {
    var ls = wordLevels(); if (ls.length < 2) return '';
    return '<div class="btn-row" role="group" aria-label="' + esc(t('words')) + '" style="margin:8px 0 14px">' + ls.map(function (l) {
      return '<a class="btn' + (l === lv ? ' primary' : '') + '" href="#/words/' + l + '"' + (l === lv ? ' aria-current="page"' : '') + '>' + l + '</a>';
    }).join('') + '</div>';
  }
  function viewWords(lv) {
    lv = lv || defaultWordLevel();
    var p = ensureProfile(prof()), cid = courseId(), all = DT.vocab.wordsOf(K, cid, lv);
    if (!all.length) return '<h1>' + esc(t('words')) + '</h1><div class="card empty"><p>' + esc(t('comingSoon')) + '</p></div>';
    var st = DT.srs.stats(p, cid, all.map(function (w) { return w.id; }));
    var dueN = DT.srs.due(p, cid, today(), 999).filter(function (id) { return WI[id]; }).length;
    var next = (K.wordfields || []).map(function (f) { return f[0]; }).filter(function (f) { return newWords(f, 1, lv).length; })[0];
    var fields = (K.wordfields || []).map(function (f) {
      var ws = all.filter(function (w) { return w.topic === f[0]; }); if (!ws.length) return '';
      var fs = DT.srs.stats(p, cid, ws.map(function (w) { return w.id; }));
      return '<a class="topic-card" href="#/words/' + lv + '/' + f[0] + '"><span class="tc-title">' + esc(fieldName(f[0])) + '</span>' +
        '<span class="tc-sub">' + ws.length + ' ' + esc(t('wordsN')) + '</span>' + srsBar(fs, ws.length) +
        '<div class="tc-foot"><span>' + fs.sicher + ' ' + esc(t('known')) + ' · ' + fs.lernend + ' ' + esc(t('learning')) + '</span>' + (fs.neu === ws.length ? '<span class="badge primary">' + esc(t('newBadge')) + '</span>' : '') + '</div></a>';
    }).join('');
    return '<h1>📖 ' + esc(t('words')) + ' <span class="lvl lvl-' + lv + '">' + lv + '</span>' + buildingBadge(lv) + '</h1><p class="muted">' + esc(t('wordsIntro')) + '</p>' + levelPicker(lv) +
      '<div class="card section"><div class="section-head"><b>' + st.sicher + ' / ' + all.length + ' ' + esc(t('wordsKnown')) + '</b><span class="muted small">' + st.lernend + ' ' + esc(t('learning')) + ' · ' + st.neu + ' ' + esc(t('newWordsN')) + '</span></div>' +
        srsBar(st, all.length) +
        '<div class="btn-row" style="margin-top:14px">' +
          (dueN ? '<a class="btn primary" href="#/review">🔁 ' + esc(t('reviewDue', { n: Math.min(dueN, 30) })) + '</a>' : '<span class="badge ok">✓ ' + esc(t('nothingDue')) + '</span>') +
          (next ? '<a class="btn' + (dueN ? '' : ' primary') + '" href="#/words/' + lv + '/' + next + '/learn">✨ ' + esc(t('learnNew')) + ' · ' + esc(fieldName(next)) + '</a>' : '') +
        '</div></div>' +
      '<div class="topic-grid section">' + fields + '</div>';
  }
  function viewField(field, lv) {
    lv = lv || 'A1';
    var p = ensureProfile(prof()), cid = courseId(), ws = DT.vocab.wordsOf(K, cid, lv, field), tgt = course().target;
    var nNew = ws.filter(function (w) { return !DT.srs.get(p, cid, w.id); }).length;
    var rows = ws.map(function (w) {
      var e = DT.srs.get(p, cid, w.id), box = e ? e[DT.srs.B] : -1;
      var chip = box < 0 ? '<span class="badge">' + esc(t('newBadge')) + '</span>' : (box >= 3 ? '<span class="badge ok">' + esc(t('known')) + '</span>' : '<span class="badge primary">' + esc(t('learning')) + '</span>');
      return '<tr><td style="width:44px">' + speakBtn(w.t) + '</td><td lang="' + tgt + '"><b>' + esc(w.t) + '</b>' + (w.pl ? '<div class="muted small">' + esc(w.pl) + '</div>' : '') + '</td><td>' + esc(w.n) +
        (w.ex ? '<div class="muted small" lang="' + tgt + '">' + esc(w.ex) + '</div>' : '') + '</td><td style="text-align:right">' + chip + '</td></tr>';
    }).join('');
    return '<div class="crumbs"><a href="#/words/' + lv + '">' + esc(t('words')) + ' ' + lv + '</a></div><h1>' + esc(fieldName(field)) + '</h1>' +
      '<div class="btn-row" style="margin:10px 0 16px">' +
        (nNew ? '<a class="btn primary" href="#/words/' + lv + '/' + field + '/learn">✨ ' + esc(t('learnNewN', { n: Math.min(5, nNew) })) + '</a>' : '') +
        (nNew < ws.length ? '<a class="btn" href="#/words/' + lv + '/' + field + '/practice">🔁 ' + esc(t('practiceField')) + '</a>' : '') + '</div>' +
      '<div class="card lesson"><div class="tbl-wrap"><table><tbody>' + rows + '</tbody></table></div></div>';
  }
  function viewWordSession(field, kind, lv) {
    lv = lv || 'A1';
    var key = 'words:' + lv + ':' + field + ':' + kind;
    if (!player || player.key !== key) {
      var p = ensureProfile(prof()), cid = courseId(), q;
      if (kind === 'learn') q = learnQueue(newWords(field, 5, lv));
      else q = DT.vocab.shuffle(DT.vocab.wordsOf(K, cid, lv, field).filter(function (w) { return DT.srs.get(p, cid, w.id); }), DT.vocab.rng(Date.now())).slice(0, 15).map(function (w) { return wordQ(w.id); });
      if (!q.length) return viewField(field, lv);
      newPlayer(key, kind === 'learn' ? 'learn' : 'wpractice', q, null);
      player.field = field; player.lv = lv;
    }
    return '<div class="crumbs"><a href="#/words/' + lv + '">' + esc(t('words')) + '</a> › <a href="#/words/' + lv + '/' + field + '">' + esc(fieldName(field)) + '</a></div>' +
      '<h1>' + esc(kind === 'learn' ? t('learnNew') : t('practiceField')) + '</h1>' + renderPlayer();
  }
  function viewReview() {
    if (!player || player.key !== 'srs') {
      var q = dueItems(30);
      if (!q.length) return '<h1>🔁 ' + esc(t('review')) + '</h1><div class="card empty"><div class="big">🌟</div><p>' + esc(t('nothingDue')) + '</p><a class="btn" href="#/words">' + esc(t('words')) + '</a></div>';
      newPlayer('srs', 'srs', q, null);
    }
    return '<h1>🔁 ' + esc(t('reviewTitle')) + '</h1><p class="muted">' + esc(t('reviewIntro')) + '</p>' + renderPlayer();
  }
  function viewDaily() {
    if (!player || player.key !== 'daily') {
      var q = buildMix();
      if (!q.length) return '<h1>☀️ ' + esc(t('dailyMix')) + '</h1><div class="card empty"><p>' + esc(t('mixEmpty')) + '</p><a class="btn primary" href="#/lessons">' + esc(t('goLessons')) + '</a></div>';
      newPlayer('daily', 'daily', q, null);
    }
    return '<h1>☀️ ' + esc(t('dailyMix')) + '</h1><p class="muted">' + esc(t('dailyIntro')) + '</p>' + renderPlayer();
  }
  function dailyCard(secondary) {
    var p = ensureProfile(prof()), pg = DT.daily.progress(p, todayKey()), sk = DT.daily.streak(p.daily.log, todayKey());
    var dueN = DT.srs.due(p, courseId(), today(), 999).length;
    var ring = '<div class="ring" style="--p:' + Math.min(100, pct(pg.done, pg.goal)) + '"><span>' + Math.min(pg.done, 999) + '<small>/' + pg.goal + '</small></span></div>';
    return '<div class="card daily-card">' + ring + '<div class="dc-text"><h2>' + esc(t('todayGoal')) + (pg.reached ? ' <span class="badge ok">✓ ' + esc(t('done')) + '</span>' : '') + '</h2>' +
      '<p class="muted small">' + (sk.days ? '🔥 ' + esc(t(sk.days === 1 ? 'streakDay1' : 'streakDays', { n: sk.days })) + (sk.pauseUsedThisWeek ? ' · ' + esc(t('pauseUsed')) : ' · ' + esc(t('pauseFree'))) : esc(t('streakStart'))) +
      (dueN ? ' · 🔁 ' + esc(t('dueN', { n: Math.min(dueN, 30) })) : '') + '</p></div>' +
      '<a class="btn' + (secondary ? '' : ' primary') + '" href="#/daily">▶ ' + esc(t('startMix')) + '</a></div>';
  }

  /* ================= Meine Lücken ================= */
  /* ================= Schreibwerkstatt (ADR-13) =================
   * Eigene Texte: profil.writes (js/core/writes.js). Keine Bewertung, keine Prozente; „geübt“ = prog[id].s === 'c'.
   * Mustertext steht erst nach „Fertig“ im DOM. Entwurf: 1,5 s nach der letzten Eingabe, bei blur, Seitenwechsel,
   * visibilitychange/pagehide und vor jedem Neu-Rendern. */
  var WR = DT.writes, wst = null, wTimer = null;   // wst = { id, mode:'edit'|'done', text, last, checks:{}, showTr, msg }
  function writeEntry(id) { var p = ensureProfile(prof()); return WR.get(p, courseId(), id); }
  function writeStatus(id) { return WR.status(writeEntry(id), prog()[id]); }
  function writeHasDraft(id) { var e = writeEntry(id); return !!(e && typeof e.d === 'string' && e.d.trim()); }   // auch Überarbeitung einer geübten Aufgabe
  function writeHead(w) { return uiLang() === 'de' ? w.title : w.sub; }      // title = Deutsch, sub = Türkisch (wie Dialoge)
  function writeSubline(w) { return uiLang() === 'de' ? w.sub : w.title; }
  function writeList(lv) { return DT.catalog.writesOf(K, courseId(), lv); }
  function writeCounts(list) {
    var c = { n: list.length, done: 0, draft: 0, open: 0 };
    list.forEach(function (w) { var s = writeStatus(w.id); if (s === 'done') c.done++; else if (s === 'submitted') c.open++; if (writeHasDraft(w.id)) c.draft++; });
    return c;
  }
  function fmtStamp(ts, withDate) {
    var d = new Date(ts || 0), loc = uiLang() === 'de' ? 'de-DE' : 'tr-TR';
    try { return (withDate ? d.toLocaleDateString(loc, { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' : '') + d.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; }
  }
  function regLabel(r) { return t({ du: 'writeRegDu', Sie: 'writeRegSie', sen: 'writeRegSen', siz: 'writeRegSiz' }[r] || 'writeReg'); }
  function writeBadge(st) {
    return st === 'done' ? '<span class="badge ok">✓ ' + esc(t('writePracticed')) + '</span>'
      : st === 'submitted' ? '<span class="badge primary">' + esc(t('stSubmitted')) + '</span>'
      : st === 'draft' ? '<span class="badge">✎ ' + esc(t('stDraft')) + '</span>'
      : '<span class="badge primary">' + esc(t('newBadge')) + '</span>';
  }
  function writeCard(w, i) {
    return '<a class="topic-card w-card" href="#/write/' + w.id + '"><span class="tc-num">' + DT.catalog.writeLevel(w) + ' · S' + (i + 1) + '</span>' +
      '<span class="tc-title">' + esc(writeHead(w)) + '</span><span class="tc-sub">' + esc(writeSubline(w)) + '</span>' +
      '<div class="tc-foot"><span>' + esc(w.reg) + ' · ' + w.words.min + '–' + w.words.ziel + ' ' + esc(t('wordsShort')) + '</span>' + writeBadge(writeStatus(w.id)) + '</div></a>';
  }
  function writeSection(lv) {
    var wl = writeList(lv);
    return wl.length ? '<h3 class="sub-head">✍️ ' + esc(t('writeTitle')) + '</h3><div class="topic-grid">' + wl.map(writeCard).join('') + '</div>' : '';
  }
  function writeCounterHtml() {
    var all = writeList(); if (!all.length) return '';
    var c = writeCounts(all), first = all.filter(function (w) { return writeStatus(w.id) !== 'done'; })[0] || all[0];
    var drafts = c.draft ? ' · ' + (c.draft === 1 ? t('writeCounterDraft1') : t('writeCounterDrafts', { e: c.draft })) : '';
    return '<a class="card section w-counter" href="#/write/' + first.id + '"><span aria-hidden="true">✍️</span><span><b>' + esc(t('writeCounter', { d: c.done, n: c.n })) + '</b>' + esc(drafts) + '</span><span class="muted">→</span></a>';
  }
  function writeOpenHtml() {
    var list = writeList().filter(function (w) { return writeHasDraft(w.id) || writeStatus(w.id) === 'submitted'; });
    if (!list.length) return '';
    return '<div class="card section w-open"><h2>✍️ ' + esc(t('writeOpenTitle')) + '</h2><p class="muted small">' + esc(t('writeOpenIntro')) + '</p>' +
      list.map(function (w) {
        var lv = DT.catalog.writeLevel(w);
        return '<a class="w-open-row" href="#/write/' + w.id + '"><span><span class="lvl lvl-' + lv + '">' + lv + '</span> <b>' + esc(writeHead(w)) + '</b></span>' + writeBadge(writeHasDraft(w.id) ? 'draft' : writeStatus(w.id)) + '</a>';
      }).join('') + '</div>';
  }
  function writeCountText(w, n) { return t('writeCount', { n: n, z: w.words.ziel, m: w.words.min }); }
  /** Speichern mit Rücknahme (ADR-13 §3): nie bei nur-lesend/neueren Daten; Fehler → Meldung statt Neu-Rendern */
  function writeCommit(id, fn) {
    if (readOnly || newerData || (storageBroken && !db.active)) return { ok: false, error: 'readonly' };
    var r;
    try { r = WR.commit(localStorage, db, APP_VERSION, ensureProfile(prof()), courseId(), id, fn); } catch (e) { r = { ok: false, error: 'save' }; }
    if (r.ok) saveFailed = false; else if (r.error === 'save') saveFailed = true;
    return r;
  }
  function writeErrMsg(r) { return r.error === 'budget' ? t('writeFull') : r.error === 'readonly' ? t('writeReadOnly') : t('writeNotSaved'); }
  function setWriteMsg(msg, alert) {
    if (wst) { wst.msg = msg; wst.msgAlert = !!alert; }
    var el = document.getElementById('w-saved'); if (!el) return;
    el.textContent = msg; el.classList.toggle('w-alert', !!alert);
  }
  function flushDraft() {
    clearTimeout(wTimer); wTimer = null;
    var ta = document.getElementById('w-text');
    if (!ta || !wst || wst.mode !== 'edit' || ta.getAttribute('data-id') !== wst.id) return;
    var id = wst.id, val = ta.value; wst.text = val;
    if (val === wst.last) return;
    var r = writeCommit(id, function () { return WR.put(prof(), courseId(), id, val, Date.now()); });
    if (r.ok) wst.last = val;   // nur bei Erfolg – sonst wird beim nächsten Anlass erneut gespeichert
    if (r.ok) { if (r.changed) setWriteMsg(val.trim() ? t('writeSaved', { t: fmtStamp(Date.now()) }) : '', false); }
    else setWriteMsg(writeErrMsg(r), true);
  }
  function writeVersionsHtml(e) {
    if (!e) return '';
    var parts = [];
    // [Überschrift, Text, archiviert?, Teil für WR.removePart, Index]
    if (WR.isArchived(e)) parts.push([t('writeEarlier', { d: fmtStamp(e.t, true) }), e.x, true, 'x', 0]);
    if (typeof e.x0 === 'string') parts.push([t('writeFirst') + (e.t0 ? ' · ' + fmtStamp(e.t0, true) : ''), e.x0, false, 'x0', 0]);
    if (typeof e.xk === 'string') e.xk.split(WR.SEP).forEach(function (x, i) { parts.push([t('writeRescued'), x, false, 'xk', i]); });
    if (!parts.length) return '';
    var tgt = course().target;
    return parts.map(function (x) {
      return '<details class="card section w-archive"><summary>' + esc(x[2] ? x[0] : t('writeVersions') + ': ' + x[0]) + '</summary><div class="w-text" lang="' + tgt + '">' + esc(x[1]) + '</div>' +
        '<div class="btn-row"><button type="button" class="btn small danger" data-act="w-del-part" data-part="' + x[3] + '" data-i="' + x[4] + '">🗑️ ' + esc(t('writeDelVersion')) + '</button></div></details>';
    }).join('');
  }
  function writeModelCol(w) {
    var tgt = course().target, sh = !!(wst && wst.showTr);
    return '<div class="card w-col w-model"><div class="w-col-head"><h3>' + esc(t('writeModel')) + '</h3><div class="btn-row">' +
      '<button class="btn small" data-act="play-say" data-say="' + esc(plain(w.model)) + '" aria-label="' + esc(t('listen') + ': ' + t('writeModel')) + '">🔊</button>' +
      '<button class="btn small" data-act="w-tr" aria-pressed="' + sh + '">' + esc(t('writeShowTr')) + '</button></div></div>' +
      '<div class="w-text" lang="' + tgt + '">' + esc(w.model) + '</div>' +
      '<div class="w-text w-trans" lang="' + uiLang() + '"' + (sh ? '' : ' hidden') + '>' + esc(w.modeln) + '</div>' +
      '<details class="w-why"><summary>' + esc(t('writeWhyModel')) + '</summary><p>' + md(w.e) + '</p></details></div>';
  }
  function viewWrite(id) {
    var w = K.writes && K.writes[id];
    if (!w || id.indexOf(courseId() + '-') !== 0) return '<h1>✍️ ' + esc(t('writeTitle')) + '</h1><div class="card empty"><p>' + esc(t('writeNotFound')) + '</p><a class="btn" href="#/lessons">' + esc(t('goLessons')) + '</a></div>';
    var e = writeEntry(id), st = writeStatus(id), tgt = course().target, cur = WR.hasCurrent(e);
    if (!wst || wst.id !== id) {
      var start = e && typeof e.d === 'string' ? e.d : (cur ? e.x : '');
      wst = { id: id, mode: (e && typeof e.d === 'string') || !cur ? 'edit' : 'done', text: start, last: start, checks: {}, showTr: false,
        msg: e && e.d && e.dt ? t('writeSavedAt', { t: fmtStamp(e.dt, true) }) : '' };
      if (st === 'done') w.check.forEach(function (_, i) { wst.checks[i] = true; });
    }
    var html = '<h1>✍️ ' + esc(writeHead(w)) + '</h1><p class="muted">' + esc(writeSubline(w)) + '</p>' +
      '<p class="w-note small">ℹ️ ' + esc(t('writeNoGrade')) + '</p>' +
      '<div class="card section w-task"><h2>' + esc(t('writeTask')) + '</h2><p>' + md(w.task) + '</p><ul class="w-points">' +
        w.points.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' +
        '<div class="w-meta"><span class="badge primary" title="' + esc(t('writeReg')) + '">' + esc(t('writeReg')) + ': ' + esc(regLabel(w.reg)) + '</span> <span class="muted small">' + esc(t('writeWordsGoal', { z: w.words.ziel, m: w.words.min })) + '</span></div></div>';
    if (wst.mode === 'edit') {
      var n = WR.countWords(wst.text);
      html += '<div class="card section w-editor">' +
        ((w.chunks || []).length ? '<h2>' + esc(t('writeChunks')) + '</h2><p class="muted small" id="w-chunks-hint">' + esc(t('writeChunksHint')) + '</p><div class="w-chunks" role="group" aria-describedby="w-chunks-hint">' +
          w.chunks.map(function (c, i) { return '<button type="button" class="chip" data-act="w-chunk" data-i="' + i + '" lang="' + tgt + '">' + esc(c) + '</button>'; }).join('') + '</div>' : '') +
        '<label for="w-text" class="w-label"><b>' + esc(t('writeYourText')) + '</b></label>' +
        '<textarea class="input w-area" id="w-text" data-id="' + id + '" rows="8" maxlength="' + WR.MAX_FIELD + '" lang="' + tgt + '" spellcheck="true" autocomplete="off" aria-describedby="w-count w-saved"></textarea>' +
        charBar() +
        '<div class="w-status"><span id="w-count" class="w-count">' + esc(writeCountText(w, n)) + '</span><span id="w-saved" class="small' + (wst.msgAlert ? ' w-alert' : ' muted') + '" role="status" aria-live="polite">' + esc(wst.msg || '') + '</span></div>' +
        '<p id="w-min" class="muted small"' + (n && n < w.words.min ? '' : ' hidden') + '>' + esc(t('writeBelowMin', { m: w.words.min })) + '</p>' +
        '<div class="btn-row"><button class="btn primary" id="w-done" data-act="w-done"' + (n ? '' : ' disabled') + '>✓ ' + esc(t('writeDone')) + '</button>' +
        '<button class="btn" data-act="w-copy">📋 ' + esc(t('writeCopy')) + '</button></div></div>';
      if (cur) html += '<div class="w-compare section">' + writeModelCol(w) + '</div>';   // nach „Überarbeiten“ bleibt der Mustertext sichtbar
    } else {
      var txt = e.x, cnt = WR.countWords(txt), miss = WR.missingPoints(w, txt, DT.check.fold);
      var wh = cnt < w.words.min ? t('writeHintShort', { n: cnt, m: w.words.min }) : cnt > w.words.ziel * 1.5 ? t('writeHintLong', { n: cnt, z: w.words.ziel }) : t('writeHintOk', { n: cnt });
      var all = w.check.every(function (_, i) { return wst.checks[i]; });
      html += '<div class="card section w-hints" id="w-hints"><h2>' + esc(t('writeHints')) + '</h2><ul><li>' + esc(wh) + '</li>' +
          miss.map(function (i) { return '<li>' + esc(t('writeMissing', { p: plain(w.points[i]) })) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="w-compare section"><div class="card w-col"><div class="w-col-head"><h3>' + esc(t('writeYours')) + '</h3><span class="muted small">' + esc(fmtStamp(e.t, true)) + '</span></div><div class="w-text" lang="' + tgt + '">' + esc(txt) + '</div></div>' + writeModelCol(w) + '</div>' +
        '<div class="card section w-check"><h2>' + esc(t('writeChecklist')) + '</h2><p class="muted small">' + esc(t('writeChecklistIntro')) + '</p>' +
          w.check.map(function (c, i) {
            return '<div class="w-ck"><label><input type="checkbox" data-act="w-ck" data-i="' + i + '"' + (wst.checks[i] ? ' checked' : '') + (st === 'done' ? ' disabled' : '') + '><span>' + md(c.k) + '</span></label>' +
              '<details><summary>' + esc(t('writeWhy')) + '</summary><p>' + md(c.e) + '</p></details></div>';
          }).join('') + '</div>' +
        '<div class="card section w-mist"><h2>' + esc(t('writeMistakes')) + '</h2>' +
          w.mistakes.map(function (m) { return '<div class="w-m"><div><s lang="' + tgt + '">' + esc(m.bad) + '</s> <span aria-hidden="true">→</span> <b lang="' + tgt + '">' + esc(m.good) + '</b></div><p class="small">' + md(m.why) + '</p></div>'; }).join('') + '</div>' +
        '<div class="btn-row section">' + (st === 'done' ? '<span class="badge ok w-done-badge">✓ ' + esc(t('writePracticed')) + '</span>'
          : '<button class="btn primary" id="w-ok" data-act="w-practiced" aria-describedby="w-ok-hint"' + (all ? '' : ' disabled') + '>✓ ' + esc(t('writePracticedBtn')) + '</button>') +
          '<button class="btn" data-act="w-revise">✏️ ' + esc(t('writeRevise')) + '</button><button class="btn" data-act="w-copy">📋 ' + esc(t('writeCopy')) + '</button></div>' +
        (st === 'done' ? '' : '<p class="muted small" id="w-ok-hint">' + esc(t('writeTickAll')) + '</p>');
    }
    return html + writeVersionsHtml(e) +
      (e ? '<div class="btn-row section"><button type="button" class="btn small danger" data-act="w-del-entry">🗑️ ' + esc(t('writeDelEntry')) + '</button></div>' : '');
  }
  function writeCopy() {
    var ta = document.getElementById('w-text'), e = wst && writeEntry(wst.id), txt = ta ? ta.value : (e && e.x) || '';
    if (!txt) return;
    var done = function () { toast(t('writeCopied')); };
    var fallback = function () {
      var tmp = document.createElement('textarea'); tmp.value = txt; tmp.setAttribute('readonly', ''); tmp.style.position = 'fixed'; tmp.style.opacity = '0';
      document.body.appendChild(tmp); tmp.select(); try { if (document.execCommand('copy')) done(); } catch (er) { /* Nutzer kopiert von Hand */ } tmp.remove();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
  }
  function writeInput(ta) {
    if (!wst) return;
    var w = K.writes[wst.id]; wst.text = ta.value;
    var n = WR.countWords(ta.value), c = document.getElementById('w-count'), b = document.getElementById('w-done'), m = document.getElementById('w-min');
    if (c) c.textContent = writeCountText(w, n);
    if (b) b.disabled = !n;
    if (m) { if (n && n < w.words.min) m.removeAttribute('hidden'); else m.setAttribute('hidden', ''); }
    clearTimeout(wTimer); wTimer = setTimeout(flushDraft, 1500);
  }
  function writeTextsTxt(p) {
    var out = [];
    ['de', 'tr'].forEach(function (c) {
      var m = (p.writes && p.writes[c]) || {};
      Object.keys(m).sort().forEach(function (id) {
        var e = m[id], w = K.writes[id], head = '=== ' + id + (w ? ' · ' + w.title + ' / ' + w.sub : '') + ' ===';
        var blk = [head];
        if (typeof e.x === 'string') blk.push('[' + fmtStamp(e.t, true) + ']\n' + e.x);
        if (typeof e.x0 === 'string') blk.push('[' + t('writeFirst') + (e.t0 ? ' · ' + fmtStamp(e.t0, true) : '') + ']\n' + e.x0);
        if (typeof e.xk === 'string') blk.push('[' + t('writeRescued') + ']\n' + e.xk);
        if (typeof e.d === 'string') blk.push('[' + t('stDraft') + (e.dt ? ' · ' + fmtStamp(e.dt, true) : '') + ']\n' + e.d);
        out.push(blk.join('\n\n'));
      });
    });
    return out.join('\n\n\n');
  }
  function storageUseHtml() {
    var tot = 0, wsz = 0;
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf('dt-') === 0) tot += (k.length + (localStorage.getItem(k) || '').length) * 2; } } catch (e) { /* ohne Zugriff: 0 */ }
    Object.keys(db.profiles || {}).forEach(function (pid) { wsz += WR.size(db.profiles[pid]) * 2; });
    var kb = function (b) { return Math.max(0, Math.round(b / 1024)).toLocaleString(uiLang() === 'de' ? 'de-DE' : 'tr-TR'); };
    return '<p class="small" id="storage-use">💾 ' + esc(t('storageUse', { x: kb(tot), y: kb(wsz) })) + '</p>';
  }

  function viewGaps() {
    var ids = wrongIds(), p = prog();
    var head = '<h1>🎯 ' + esc(t('gaps')) + '</h1><p class="muted">' + esc(t('gapsIntro')) + '</p>';
    var list;
    if (!ids.length) {
      list = '<div class="card empty"><div class="big">🌟</div><p>' + esc(sumStats(allTopics()).answered ? t('noMistakes') : t('gapsEmptyNew')) + '</p><a class="btn" href="#/lessons">' + esc(t('goLessons')) + '</a></div>';
    } else {
      var groups = {};
      ids.forEach(function (id) { var tid = EXI[id].topicId; (groups[tid] = groups[tid] || []).push(id); });
      list = '<div class="btn-row" style="margin:6px 0 18px"><a class="btn primary" href="#/practice">▶ ' + esc(t('practiceAll')) + ' (' + ids.length + ')</a></div>' +
        Object.keys(groups).map(function (tid) {
          var tp = topicById(tid);
          return '<div class="card gap-group"><div class="gap-group-head"><div><span class="lvl lvl-' + tp.level + '">' + tp.level + '</span> <b>' + esc(tp.title) + '</b> <span class="muted small">· ' + esc(tp.sub) + '</span></div>' +
            '<a class="btn small" href="#/topic/' + tid + '/review">' + esc(t('practiceTopic')) + ' (' + groups[tid].length + ')</a></div>' +
            groups[tid].map(function (id) {
              var it = exById(id), r = p[id]; if (!it) return ''; var ex = it.ex;
              var q = ex.role ? (ex.ctx.length ? '🎭 ' + ex.ctx[ex.ctx.length - 1].s + ': „' + plain(ex.ctx[ex.ctx.length - 1].t) + '“' : t('roleQ', { r: roleName({ topic: tp }) })) : ex.t === 'cloze' ? (ex.q || '') + ' ' + ex.text.replace(/\{\d+\}/g, '[…]') : ex.t === 'sort' ? (ex.q || '') + ' ' + ex.items.map(function (x) { return x[0]; }).join(', ')
                : ex.t === 'match' ? ex.q + ' ' + ex.p.map(function (x) { return x[0]; }).join(', ')
                : (ex.t === 'dictation' ? (ex.q || t('dictationQ')) + ' „' + ex.say + '“' : (ex.t === 'listen' ? (ex.q || t('listenQ')) + ' 🔊 „' + ex.say + '“' : ex.q));
              var sol = (ex.t === 'mc' || ex.t === 'listen') ? ex.o[ex.a] : (ex.t === 'cloze' || ex.t === 'sort') ? evaluate(ex, { gaps: {}, assign: [] }).correct : (ex.t === 'match' ? ex.p.map(function (x) { return x[0] + ' = ' + x[1]; }).join(' · ') : ex.a[0]);
              return '<div class="gap-item"><span class="gi-q">' + md(q) + '</span><span class="badge bad">' + (r.w || 1) + esc(t('times')) + '</span>' +
                '<div class="gi-meta"><span>' + esc(t('lastWrong')) + ': <s>' + md(r.a || '–') + '</s></span><span>' + esc(t('solution')) + ': <b>' + md(sol) + '</b></span></div></div>';
            }).join('') + '</div>';
        }).join('');
    }
    // Problemstellen
    var probs = allTopics().filter(function (x) { return x.avail; }).map(function (x) { var st = topicStats(x); return { tp: x, st: st, rate: st.answered ? st.firstW / st.answered : 0 }; })
      .filter(function (x) { return x.st.firstW > 0; }).sort(function (a, b) { return b.rate - a.rate; });
    var probHtml = probs.length ? '<div class="card section"><h2>' + esc(t('problemAreas')) + '</h2><p class="muted small">' + esc(t('problemIntro')) + '</p>' +
      probs.map(function (x) {
        return '<div class="problem"><a href="#/topic/' + x.tp.id + '/learn">' + esc(x.tp.title) + ' <span class="muted small">· ' + x.tp.level + '</span></a>' +
          '<div class="bar thin" title="' + esc(t('errorRate')) + '"><span class="fill" style="width:' + Math.round(x.rate * 100) + '%"></span></div><span class="small" style="text-align:right">' + fmtPct(Math.round(x.rate * 100)) + '</span></div>';
      }).join('') + '</div>' : '';
    return head + list + writeOpenHtml() + probHtml;
  }
  function viewPractice() {
    if (!player || player.key !== 'gaps') {
      var q = wrongIds();
      if (!q.length) return '<h1>' + esc(t('mixedPractice')) + '</h1><div class="card empty"><div class="big">🌟</div><p>' + esc(t('noMistakes')) + '</p></div>';
      newPlayer('gaps', 'gaps', shuffle(q), null);
    }
    return '<div class="crumbs"><a href="#/gaps">' + esc(t('gaps')) + '</a></div><h1>🔁 ' + esc(t('mixedPractice')) + '</h1><p class="muted">' + esc(t('fromAllTopics')) + '</p>' + renderPlayer();
  }

  /* ================= Gesamtüberblick ================= */
  function viewOverview() {
    var all = allTopics(), tot = sumStats(all);
    var legend = '<div class="legend"><span><i style="background:var(--ok)"></i>' + esc(t('correct')) + '</span><span><i style="background:var(--bad)"></i>' + esc(t('wrong')) + '</span><span><i style="background:var(--surface-3)"></i>' + esc(t('open')) + '</span></div>';
    var sl = splitLevels();
    var levelCard = function (lv) {
      var list = levelTopics(lv), s = sumStats(list);
      var rows = list.map(function (tp) {
        var x = topicStats(tp);
        if (!tp.avail) return '<div class="ov-row planned"><div><div class="t-title">' + esc(tp.title) + '</div><div class="t-sub">' + esc(tp.sub) + '</div></div><div class="ov-bar"><span class="badge">' + esc(t('planned')) + '</span></div><span class="num">–</span><span class="num">–</span><span class="num">–</span></div>';
        return '<div class="ov-row"><div><a class="t-title" href="#/topic/' + tp.id + '/' + (x.answered ? 'exercises' : 'learn') + '">' + esc(tp.title) + '</a><div class="t-sub">' + esc(tp.sub) + ' · ' + x.n + ' ' + esc(t('tasks')) + '</div></div>' +
          '<div class="ov-bar"><div class="bar"><span class="ok" style="width:' + pct(x.c, x.n) + '%"></span><span class="bad" style="width:' + pct(x.w, x.n) + '%"></span></div></div>' +
          '<span class="num ok">' + fmtPct(pct(x.c, x.n)) + '</span><span class="num bad">' + fmtPct(pct(x.w, x.n)) + '</span><span class="num">' + fmtPct(pct(x.o, x.n)) + '</span></div>';
      }).join('');
      return '<div class="card section"><div class="level-head"><span class="lvl lvl-' + lv + '">' + lv + '</span><h2>' + esc(levelName(lv)) + buildingBadge(lv) + '</h2>' +
        (s.n ? '<span class="muted small">' + esc(t('total')) + ': <b style="color:var(--ok)">' + fmtPct(pct(s.c, s.n)) + ' ' + esc(t('correct')) + '</b> · <b style="color:var(--bad)">' + fmtPct(pct(s.w, s.n)) + ' ' + esc(t('wrong')) + '</b> · ' + fmtPct(pct(s.o, s.n)) + ' ' + esc(t('open')) + '</span>' : '<span class="badge">' + esc(t('comingSoon')) + '</span>') + '</div>' +
        '<div class="ov-row head"><span>' + esc(t('topic')) + '</span><span class="ov-bar"></span><span class="num">✓</span><span class="num">✗</span><span class="num">○</span></div>' + rows + '</div>';
    };
    var html = sl.live.map(levelCard).join('') + (sl.planned.length ? '<details class="planned-levels"><summary>' + esc(sl.label + ' · ' + t('plannedLevels')) + '</summary>' + sl.planned.map(levelCard).join('') + '</details>' : '');
    return '<div class="section-head"><h1>📊 ' + esc(t('overview')) + '</h1>' + legend + '</div><p class="muted">' + esc(t('overviewIntro')) + '</p>' +
      '<div class="card"><div class="section-head"><b>' + esc(t('totalProgress', { lv: splitLevels().live.join(', ') })) + '</b><span><b style="color:var(--ok)">' + tot.c + '</b> ✓ · <b style="color:var(--bad)">' + tot.w + '</b> ✗ · ' + tot.o + ' ○ / ' + tot.n + '</span></div>' +
      '<div class="bar thick"><span class="ok" style="width:' + pct(tot.c, tot.n) + '%"></span><span class="bad" style="width:' + pct(tot.w, tot.n) + '%"></span></div></div>' + writeCounterHtml() + badgesCard() + html;
  }

  /* ================= Einstellungen ================= */
  function viewSettings() {
    var th = db.theme || 'system';
    var themeSeg = '<div class="seg">' + [['light', t('light')], ['dark', t('dark')], ['system', t('system')]].map(function (x) {
      return '<button data-act="set-theme" data-v="' + x[0] + '" class="' + (th === x[0] ? 'on' : '') + '" aria-pressed="' + (th === x[0]) + '">' + esc(x[1]) + '</button>';
    }).join('') + '</div>';
    var courseSeg = '<div class="seg seg-rows">' + ['de', 'tr'].map(function (cid) {
      var c = K.courses[cid];
      return '<button data-act="set-course" data-v="' + cid + '" class="' + (courseId() === cid ? 'on' : '') + '" aria-pressed="' + (courseId() === cid) + '">' + flag(cid) + ' ' + esc(c.label) + '</button>';
    }).join('') + '</div>';
    var profiles = Object.keys(db.profiles).map(function (id) {
      var p = db.profiles[id], isA = id === db.active;
      return '<div class="profile-row"><div><b>' + esc(p.name || '—') + '</b> ' + (isA ? '<span class="badge ok">' + esc(t('active')) + '</span>' : '') +
        ' <span class="muted small">' + flag(p.course) + ' ' + esc(K.courses[p.course].label) + '</span></div><div class="btn-row">' +
        (isA ? '' : '<button class="btn small" data-act="switch-profile" data-id="' + id + '">' + esc(t('switchTo')) + '</button>') +
        (Object.keys(db.profiles).length > 1 ? '<button class="btn small danger" data-act="delete-profile" data-id="' + id + '">' + esc(t('del')) + '</button>' : '') + '</div></div>';
    }).join('');
    return '<h1>⚙️ ' + esc(t('settings')) + '</h1>' + transferPendingHtml() +
      '<div class="card section"><h2>' + esc(t('theme')) + '</h2>' + themeSeg + '</div>' +
      '<div class="card section"><h2>' + esc(t('course')) + '</h2>' + courseSeg + '</div>' +
      '<div class="card section"><h2>🎯 ' + esc(t('dailyGoal')) + '</h2><p class="muted small">' + esc(t('dailyGoalIntro')) + '</p><div class="seg">' + [5, 10, 20].map(function (g) {
        var on = (ensureProfile(prof()).daily.goal || 10) === g;
        return '<button data-act="set-goal" data-v="' + g + '" class="' + (on ? 'on' : '') + '" aria-pressed="' + on + '">' + g + ' ' + esc(t('perDay')) + '</button>';
      }).join('') + '</div></div>' +
      '<div class="card section"><h2>' + esc(t('profiles')) + '</h2><p class="muted small">' + esc(t('profilesIntro')) + '</p>' + profiles +
        '<form class="inline-form" data-form="new-profile"><input class="input" name="name" maxlength="30" placeholder="' + esc(t('namePh')) + '" required><button class="btn" type="submit">+ ' + esc(t('newProfile')) + '</button></form></div>' +
      '<div class="card section"><h2>🔊 ' + esc(t('voiceTitle')) + '</h2>' + voiceSettingsHtml() + '</div>' +
      transferCardHtml() +
      '<div class="card section"><h2>' + esc(t('data')) + '</h2><p class="muted small">' + esc(t('storageNote')) + '</p>' + storageUseHtml() + '<div class="btn-row">' +
        '<button class="btn" data-act="export">' + esc(t('exportBtn')) + '</button>' +
        '<label class="btn" style="cursor:pointer">' + esc(t('importBtn')) + '<input type="file" accept="application/json,.json" data-act="import" hidden></label></div>' +
        '<h3>✍️ ' + esc(t('writeTitle')) + '</h3><div class="btn-row">' +
        '<button class="btn" data-act="w-download">' + esc(t('myTextsDownload')) + '</button>' +
        '<button class="btn danger" data-act="w-delete">' + esc(t('myTextsDelete')) + '</button></div>' +
        '<div class="reset-box"><label class="check-row"><input type="checkbox" id="reset-texts"> <span>' + esc(t('resetAlsoTexts')) + '</span></label>' +
        '<p class="muted small">' + esc(t('resetKeepsTexts')) + '</p>' +
        '<button class="btn danger" data-act="reset-course">' + esc(t('resetCourse')) + '</button></div></div>' +
      '<div class="card section"><h2>⚖️ ' + esc(t('legal')) + '</h2><p class="muted small">' + esc(t('legalIntro')) + '</p><a class="btn" href="#/legal">' + esc(t('legalOpen')) + '</a></div>';
  }

  /* ================= Abzeichen & Zertifikat (ADR-9) ================= */
  function certStatus(lv) {
    var cid = courseId(), pr = prog(), n = 0, c = 0;
    levelTopics(lv).forEach(function (tp) {
      if (!tp.avail || isSkipped(tp.id)) return;          // per Einstufung übersprungene Themen fallen aus dem Nenner
      tp.data.exercises.forEach(function (ex) { if (!isCountable(ex)) return; n++; if (pr[ex.id] && pr[ex.id].s === 'c') c++; });
    });
    var words = DT.vocab.wordsOf(K, cid, lv).map(function (w) { return w.id; });
    var ws = DT.srs.stats(ensureProfile(prof()), cid, words);
    var exOk = n > 0 && c / n >= 0.8, wOk = !words.length || ws.sicher / words.length >= 0.7;
    return { c: c, n: n, wk: ws.sicher, wn: words.length, exPct: pct(c, n), wPct: pct(ws.sicher, words.length), ok: exOk && wOk, exOk: exOk, wOk: wOk };
  }
  function badgeCtx() {
    var p = ensureProfile(prof()), cid = courseId(), pr = prog(), ctx = { answered: 0, topicsDone: 0, dialogsDone: 0, dialogsAll: 0, fixed: 0 };
    allTopics().forEach(function (tp) {
      if (!tp.avail) return;
      var s = topicStats(tp); ctx.answered += s.answered;
      if (tp.kind === 'dialog') ctx.dialogsAll++;
      if (s.n && s.c === s.n) { if (tp.kind === 'dialog') ctx.dialogsDone++; else if (!tp.kind) ctx.topicsDone++; }
    });
    Object.keys(pr).forEach(function (id) { if (EXI[id] && pr[id].f === 'w' && pr[id].s === 'c') ctx.fixed++; });
    var words = DT.vocab.wordsOf(K, cid, 'A1').map(function (w) { return w.id; });
    ctx.wordsKnown = DT.srs.stats(p, cid, words).sicher; ctx.wordsTotal = words.length;
    var log = (p.daily && p.daily.log) || {};
    ctx.streak = DT.daily.streak(log, todayKey()).days;
    ctx.goalDays = Object.keys(log).filter(function (k) { return DT.daily.reached(log[k]); }).length;
    ctx.cert = { A1: certStatus('A1').ok };
    return ctx;
  }
  function checkBadges(quiet) {   // am Sitzungsende und beim Dashboard (nicht bei jedem Render)
    var p = ensureProfile(prof()), fresh = DT.badges.award(p, courseId(), badgeCtx());
    if (fresh.length) {
      save();
      if (!quiet) setTimeout(function () {
        toast(fresh.length === 1 ? fresh[0].icon + ' ' + t('badgeNew') + ': ' + fresh[0].title[uiLang() === 'de' ? 0 : 1]
          : fresh.map(function (b) { return b.icon; }).join(' ') + ' ' + t('badgesNew', { n: fresh.length }));
      }, 400);
    }
    return fresh;
  }
  function certBox() {
    var cs = certStatus('A1');
    return '<div class="cert-box"><div><b>🎓 ' + esc(t('certTitle', { lv: 'A1' })) + '</b><div class="muted small">' + esc(t('certCond')) + '</div></div>' +
      '<div class="cert-bars"><div class="small">' + esc(t('certEx', { p: cs.exPct })) + '<div class="bar thin"><span class="' + (cs.exOk ? 'ok' : 'fill') + '" style="width:' + Math.min(100, Math.round(cs.exPct / 0.8)) + '%"></span></div></div>' +
        (cs.wn ? '<div class="small">' + esc(t('certWords', { p: cs.wPct })) + '<div class="bar thin"><span class="' + (cs.wOk ? 'ok' : 'fill') + '" style="width:' + Math.min(100, Math.round(cs.wPct / 0.7)) + '%"></span></div></div>' : '') + '</div>' +
      (cs.ok ? '<a class="btn primary" href="#/certificate/A1">🎓 ' + esc(t('certGet')) + '</a>' : '') + '</div>';
  }
  function badgesStrip() {   // kompakt fürs Dashboard
    var items = DT.badges.list(ensureProfile(prof()), courseId()), got = items.filter(function (x) { return x.at; });
    var ui = uiLang() === 'de' ? 0 : 1;
    return '<div class="card section"><div class="section-head"><h2>🏅 ' + esc(t('badges')) + ' <span class="muted small">' + got.length + ' / ' + items.length + '</span></h2><a href="#/overview">' + esc(t('badgesAll')) + ' →</a></div>' +
      (got.length ? '<div class="badge-strip">' + got.map(function (x) { return '<span class="bs" title="' + esc(x.def.title[ui]) + '">' + x.def.icon + '</span>'; }).join('') + '</div>'
        : '<p class="muted small">' + esc(t('badgesNone')) + '</p>') + certBox() + '</div>';
  }
  function badgesCard() {
    var ui = uiLang() === 'de' ? 0 : 1, items = DT.badges.list(ensureProfile(prof()), courseId());
    var got = items.filter(function (x) { return x.at; }).length;
    var cert = certBox();
    return '<div class="card section" id="badges"><div class="section-head"><h2>🏅 ' + esc(t('badges')) + '</h2><span class="muted small">' + got + ' / ' + items.length + '</span></div>' +
      '<div class="badge-grid">' + items.map(function (x) {
        var d = x.def, title = d.title[ui], tip = x.at ? t('badgeGot', { d: new Date(x.at).toLocaleDateString(locale(uiLang())) }) : d.hint[ui];
        return '<div class="bdg' + (x.at ? ' got' : '') + '" title="' + esc(tip) + '"><span class="bdg-ic" aria-hidden="true">' + d.icon + '</span><span class="bdg-t">' + esc(title) + '</span><span class="bdg-h">' + esc(tip) + '</span></div>';
      }).join('') + '</div>' + cert + '</div>';
  }

  /* Zertifikat als Bild (Canvas 1754 × 1240 = A4 quer bei 150 dpi; Logo mit Pfaden gezeichnet, keine fremden Bilder) */
  function roundRect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function drawCertificate(cv, d) {
    var g = cv.getContext('2d'), W = 1754, H = 1240, F = 'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans", Arial, sans-serif';
    cv.width = W; cv.height = H;
    g.fillStyle = '#fbfaf6'; g.fillRect(0, 0, W, H);
    g.strokeStyle = '#3b5bdb'; g.lineWidth = 10; roundRect(g, 40, 40, W - 80, H - 80, 28); g.stroke();
    g.strokeStyle = '#12b886'; g.lineWidth = 3; roundRect(g, 64, 64, W - 128, H - 128, 20); g.stroke();
    // Logo: zwei Sprechblasen
    g.save(); g.translate(W / 2 - 60, 110);
    g.fillStyle = '#3b5bdb'; roundRect(g, 0, 0, 92, 66, 16); g.fill(); g.beginPath(); g.moveTo(18, 62); g.lineTo(12, 86); g.lineTo(38, 64); g.fill();
    g.fillStyle = '#fab005'; roundRect(g, 40, 34, 82, 58, 14); g.fill(); g.beginPath(); g.moveTo(102, 88); g.lineTo(110, 108); g.lineTo(86, 90); g.fill();
    g.fillStyle = '#fff'; [[16, 22, 52], [16, 38, 36]].forEach(function (l) { roundRect(g, l[0], l[1], l[2], 8, 4); g.fill(); });
    g.fillStyle = '#7a5600'; [[56, 52, 50], [56, 68, 34]].forEach(function (l) { roundRect(g, l[0], l[1], l[2], 7, 3.5); g.fill(); });
    g.restore();
    g.textAlign = 'center'; g.fillStyle = '#1f2937';
    g.font = '600 34px ' + F; g.fillText('Deutsch ⇄ Türkçe', W / 2, 270);
    g.font = '800 92px ' + F; g.fillText(d.title, W / 2, 390);
    g.font = '400 36px ' + F; g.fillStyle = '#4b5563'; g.fillText(d.subtitle, W / 2, 445);
    g.font = '700 84px ' + F; g.fillStyle = '#111827'; g.fillText(d.name || '—', W / 2, 600);
    g.strokeStyle = '#d1d5db'; g.lineWidth = 2; g.beginPath(); g.moveTo(W / 2 - 420, 630); g.lineTo(W / 2 + 420, 630); g.stroke();
    g.font = '500 42px ' + F; g.fillStyle = '#1f2937'; g.fillText(d.line1, W / 2, 715);
    g.font = '400 36px ' + F; g.fillStyle = '#4b5563'; g.fillText(d.line2, W / 2, 770);
    g.fillStyle = d.color; roundRect(g, W / 2 - 90, 820, 180, 90, 20); g.fill();
    g.fillStyle = '#fff'; g.font = '800 58px ' + F; g.fillText(d.level, W / 2, 885);
    g.fillStyle = '#4b5563'; g.font = '400 30px ' + F; g.fillText(d.stats, W / 2, 975);
    g.fillText(d.date, W / 2, 1020);
    g.fillStyle = '#6b7280'; g.font = 'italic 26px ' + F; g.fillText(d.note1, W / 2, 1095); g.fillText(d.note2, W / 2, 1132);
  }
  function viewCertificate(lv) {
    lv = LEVELS.indexOf(lv) >= 0 ? lv : 'A1';
    if (!levelComplete(lv)) return '<h1>🎓 ' + esc(t('certTitle', { lv: lv })) + '</h1><div class="card empty"><p>' + esc(levelHas(lv) ? t('certBuilding', { lv: lv }) : t('comingSoon')) + '</p></div>';
    var cs = certStatus(lv), p = prof(), cid = courseId(), de = cid === 'de';
    var head = '<div class="crumbs"><a href="#/dashboard">' + esc(t('dashboard')) + '</a></div><h1>🎓 ' + esc(t('certTitle', { lv: lv })) + '</h1>';
    if (!cs.ok) return head + '<div class="card empty"><p>' + esc(t('certNotYet')) + '</p><p class="muted small">' + esc(t('certEx', { p: cs.exPct }) + ' · ' + t('certWords', { p: cs.wPct })) + '</p><a class="btn primary" href="#/dashboard">' + esc(t('continueLearning')) + ' →</a></div>';
    setTimeout(function () { renderCertCanvas(lv); }, 0);
    return head + '<p class="muted">' + esc(t('certIntro')) + '</p>' +
      '<div class="card section"><div class="field"><label for="cert-name">' + esc(t('certName')) + '</label><input id="cert-name" class="input" maxlength="40" value="' + esc(p.name || '') + '" data-act="cert-name"></div>' +
      '<canvas id="cert-canvas" class="cert-canvas" width="1754" height="1240" role="img" aria-label="' + esc(t('certTitle', { lv: lv })) + '"></canvas>' +
      '<div class="btn-row" style="margin-top:14px"><button class="btn primary" data-act="cert-download" data-lv="' + lv + '">⬇ ' + esc(t('certDownload')) + '</button></div>' +
      '<p class="muted small">' + esc(t('certDisclaimer')) + '</p></div>';
  }
  function renderCertCanvas(lv) {
    var cv = document.getElementById('cert-canvas'); if (!cv) return;
    var cs = certStatus(lv), cid = courseId(), nameEl = document.getElementById('cert-name');
    var lvName = K.levelNames[lv], de = cid === 'de';
    var d = new Date(), dateStr = d.toLocaleDateString('de-DE') + ' · ' + d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    drawCertificate(cv, {
      title: 'Zertifikat · Sertifika',
      subtitle: 'Selbstlern-Nachweis · Kendi kendine öğrenme belgesi',
      name: nameEl ? nameEl.value.trim() : (prof().name || ''),
      line1: de ? 'Almanca – ' + lv + ' (' + lvName.tr + ') seviyesini tamamladı' : 'hat Türkisch auf Niveau ' + lv + ' (' + lvName.de + ') abgeschlossen',
      line2: de ? 'hat Deutsch auf Niveau ' + lv + ' (' + lvName.de + ') abgeschlossen' : 'Türkçe – ' + lv + ' (' + lvName.tr + ') seviyesini tamamladı',
      level: lv, color: getComputedStyle(document.documentElement).getPropertyValue('--lvl-' + lv).trim() || '#12b886',
      stats: cs.c + ' / ' + cs.n + (de ? ' alıştırma · ' : ' Aufgaben · ') + cs.wk + (de ? ' kelime oturdu' : ' Wörter sicher'),
      date: dateStr,
      note1: 'Selbstlern-Nachweis – kein offizielles Sprachzertifikat (z. B. Goethe, telc, Yunus Emre).',
      note2: 'Kendi kendine öğrenme belgesidir – resmî bir dil sertifikası değildir (ör. Goethe, telc, Yunus Emre).'
    });
  }
  function downloadCertificate(lv) {
    var cv = document.getElementById('cert-canvas'); if (!cv) return;
    var name = 'zertifikat-sertifika-' + lv + '.png';
    function fallback() { try { var w = window.open(); if (w) w.document.write('<img src="' + cv.toDataURL('image/png') + '" style="max-width:100%">'); } catch (e) { toast(t('certFail')); } }
    try {
      cv.toBlob(function (blob) {
        if (!blob) { fallback(); return; }
        var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
        document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 800);
      }, 'image/png');
    } catch (e) { fallback(); }
  }

  /* ================= Einstufungstest (ADR-7) =================
   * Antworten werden NICHT in prog geschrieben (keine geschenkten Punkte, nichts landet in „Meine Lücken“).
   * Ergebnis: place[cid] und – nur wenn der Nutzer zustimmt – skip[cid][topicId]. */
  var place = null;
  function placementTopics() { return levelTopics('A1').filter(function (x) { return x.avail && !x.kind; }); }
  function placementPool(tp) {
    var all = tp.data.exercises, half = all.slice(Math.floor(all.length / 2)).map(function (e) { return e.id; });
    var ok = all.filter(function (e) { return e.t === 'mc' || e.t === 'gap' || (e.t === 'listen' && canPlay(e.say)); });
    var hard = ok.filter(function (e) { return half.indexOf(e.id) >= 0; });
    var pool = (hard.length >= 2 ? hard : ok).map(function (e) { return e.id; });
    return DT.vocab.shuffle(pool, DT.vocab.rng(DT.vocab.hash(tp.id + ':' + Date.now()))).slice(0, 2);
  }
  function startPlacement() {
    var topics = placementTopics();
    place = { topics: topics, ti: 0, step: 0, cur: placementPool(topics[0]), mastered: [], failed: [], streak: 0, asked: 0, finished: false, nextId: null };
    newPlayer('placement', 'placement', [place.cur[0]], null);
  }
  function placementAnswer(ok) {
    place.asked++;
    var tp = place.topics[place.ti];
    if (ok && place.step === 0 && place.cur.length > 1) { place.step = 1; place.nextId = place.cur[1]; return; }
    if (ok) { place.mastered.push(tp.id); place.streak = 0; } else { place.failed.push(tp.id); place.streak++; }
    place.ti++; place.step = 0;
    while (place.ti < place.topics.length) {           // Themen ohne passende Aufgaben überspringen
      place.cur = placementPool(place.topics[place.ti]);
      if (place.cur.length) break;
      place.ti++;
    }
    if (place.streak >= 3 || place.ti >= place.topics.length) { place.finished = true; place.nextId = null; }
    else place.nextId = place.cur[0];
  }
  function viewPlacement() {
    var head = '<div class="crumbs"><a href="#/lessons">' + esc(t('lessons')) + '</a></div><h1>🧭 ' + esc(t('placeTitle')) + '</h1>';
    if (player && player.key === 'placement' && place) return head + renderPlayer();
    var p = ensureProfile(prof()), prev = p.place[courseId()];
    return head + '<div class="card section"><p>' + md(t('placeIntro')) + '</p><ul class="plain-list">' +
      '<li>⏱️ ' + esc(t('placeHow1')) + '</li><li>🎯 ' + esc(t('placeHow2')) + '</li><li>🛡️ ' + esc(t('placeHow3')) + '</li></ul>' +
      (prev ? '<p class="muted small">' + esc(t('placePrev', { d: new Date(prev.t).toLocaleDateString(locale(uiLang())), n: (prev.mastered || []).length })) + '</p>' : '') +
      '<div class="btn-row"><button class="btn primary" data-act="place-start">' + esc(t('placeStart')) + ' →</button><a class="btn" href="#/lessons">' + esc(t('placeSkipTest')) + '</a></div></div>';
  }
  function placementResult() {
    var cid = courseId(), skip = ensureProfile(prof()).skip[cid] || {}, firstOpen = null;
    var rows = placementTopics().map(function (tp) {
      var m = place.mastered.indexOf(tp.id) >= 0, f = place.failed.indexOf(tp.id) >= 0;
      if (!m && !firstOpen) firstOpen = tp;
      var tag = m ? '<span class="badge ok">✓ ' + esc(t('placeKnown')) + '</span>' : (f ? '<span class="badge primary">' + esc(t('placeLearn')) + '</span>' : '<span class="badge">' + esc(t('placeNotAsked')) + '</span>');
      return '<label class="check-row"><input type="checkbox" name="skip" value="' + tp.id + '"' + (m || skip[tp.id] ? ' checked' : '') + '><span><b>' + esc(tp.num + '. ' + tp.title) + '</b> <span class="muted small">' + esc(tp.sub) + '</span></span>' + tag + '</label>';
    }).join('');
    return '<div class="card summary place-result"><div style="font-size:2.4rem">🧭</div><h2>' + esc(t('placeDone')) + '</h2>' +
      '<p>' + esc(t('placeScore', { m: place.mastered.length, n: place.mastered.length + place.failed.length })) + '</p>' +
      (firstOpen ? '<p><b>' + esc(t('placeStartAt', { x: firstOpen.num + '. ' + firstOpen.title })) + '</b></p>' : '<p><b>' + esc(t('placeAllKnown')) + '</b></p>') +
      '<p class="muted small" style="text-align:left">' + esc(t('placeSkipQ')) + '</p><div class="check-list">' + rows + '</div>' +
      '<div class="btn-row"><button class="btn primary" data-act="place-apply">' + esc(t('placeApply')) + '</button><button class="btn" data-act="place-apply" data-none="1">' + esc(t('placeNone')) + '</button></div></div>';
  }
  function skippedOpenCount(list) {   // offene (nicht richtig gelöste) Aufgaben in übersprungenen Themen
    var n = 0, p = prog();
    list.forEach(function (tp) {
      if (!tp.avail || !isSkipped(tp.id)) return;
      tp.data.exercises.forEach(function (ex) { if (isCountable(ex) && !(p[ex.id] && p[ex.id].s === 'c')) n++; });
    });
    return n;
  }

  /* ================= Rechtliches, Lizenzen & Datenschutz =================
   * Quelle der Angaben: eigene Recherche (Stand siehe LEGAL_DATE) + CREDITS.md im Repo.
   * Stimmen-Lizenzen kommen live aus audio/manifest.json (licenses), das die Audio-Erzeugung
   * bei jedem Durchlauf aus der offiziellen MODEL_CARD jeder Stimme liest. */
  var LEGAL_DATE = '2026-11-18';
  var REPO = 'https://github.com/SinanDmrr/deutsch-tuerkisch-lernen';
  var VOICE_FALLBACK = {   // nur bis das erste manifest mit „licenses“ da ist
    'de_DE-kerstin-low': { license: 'CC0', dataset: 'https://github.com/rhasspy/dataset-voice-kerstin', card: 'https://huggingface.co/rhasspy/piper-voices/blob/v1.0.0/de/de_DE/kerstin/low/MODEL_CARD' },
    'de_DE-thorsten-high': { license: 'CC0', dataset: 'https://github.com/thorstenMueller/Thorsten-Voice', card: 'https://huggingface.co/rhasspy/piper-voices/blob/v1.0.0/de/de_DE/thorsten/high/MODEL_CARD' },
    'tr_TR-fahrettin-medium': { license: 'CC0', dataset: 'https://github.com/NabuCasa/voice-datasets', card: 'https://huggingface.co/rhasspy/piper-voices/blob/v1.0.0/tr/tr_TR/fahrettin/medium/MODEL_CARD' },
    'tr_TR-fettah-medium': { license: 'CC0', dataset: 'https://github.com/NabuCasa/voice-datasets', card: 'https://huggingface.co/rhasspy/piper-voices/blob/6fb8245d6d27fef8988272e0c8e9f5018da1bbbf/tr/tr_TR/fettah/medium/MODEL_CARD' }
  };
  function datasetOwner(url) {
    if (/thorsten/i.test(url)) return 'Thorsten Müller · Thorsten-Voice';
    if (/kerstin/i.test(url)) return 'Rhasspy · Kerstin';
    if (/nabucasa|ohf-voice/i.test(url)) return 'Nabu Casa / Open Home Foundation';
    return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  }
  function ext(url, label) { return '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(label || url) + '</a>'; }
  function viewLegal(lang) {
    var de = (lang || uiLang()) === 'de';
    function L(a, b) { return de ? a : b; }
    var lic = (AUDIO && AUDIO.licenses && Object.keys(AUDIO.licenses).length) ? AUDIO.licenses : VOICE_FALLBACK;
    var live = lic !== VOICE_FALLBACK;
    var langName = { de_DE: L('Deutsch', 'Almanca'), tr_TR: L('Türkisch', 'Türkçe') };
    var voiceRows = Object.keys(lic).sort().map(function (k) {
      var v = lic[k], parts = k.split('-'), name = prettyVoice(k);
      var isSample = AUDIO && AUDIO.voices && !Object.keys(AUDIO.voices).some(function (l) { return Object.keys(AUDIO.voices[l]).some(function (g) { return AUDIO.voices[l][g] === k; }); });
      return '<tr><td><b>' + esc(name) + '</b> <span class="muted small">(' + esc(parts[2] || '') + ')</span>' + (isSample ? '<div class="muted small">' + esc(L('nur Hörprobe', 'yalnızca ses örneği')) + '</div>' : '') + '</td>' +
        '<td data-l="' + esc(L('Sprache', 'Dil')) + '">' + esc(langName[parts[0]] || parts[0]) + '</td>' +
        '<td data-l="' + esc(L('Aufnahmen von', 'Kayıtlar')) + '">' + (v.dataset ? ext(v.dataset, datasetOwner(v.dataset)) : '–') + '</td>' +
        '<td data-l="' + esc(L('Lizenz', 'Lisans')) + '"><span class="badge ok">' + esc(v.license || '?') + '</span></td>' +
        '<td data-l="' + esc(L('Nachweis', 'Kaynak')) + '">' + (v.card ? ext(v.card, 'MODEL_CARD') : '–') + (v.checked ? '<div class="muted small">' + esc(L('geprüft ', 'kontrol: ') + v.checked) + '</div>' : '') + '</td></tr>';
    }).join('');
    var tools = [
      ['Piper', 'https://github.com/OHF-Voice/piper1-gpl', L('Michael Hansen / Rhasspy, heute Open Home Foundation', 'Michael Hansen / Rhasspy, bugün Open Home Foundation'), L('GPL-3.0-or-later (früher MIT)', 'GPL-3.0-or-later (önceden MIT)'),
        L('Erzeugt auf den GitHub-Servern die Aufnahmen (MP3). Die Software wird nicht mit dieser Seite ausgeliefert. Laut ', 'Ses kayıtlarını (MP3) GitHub sunucularında üretir. Yazılımın kendisi bu siteyle birlikte dağıtılmaz. ') +
        ext('https://www.gnu.org/licenses/gpl-faq.html#GPLOutput', L('GNU-FAQ', 'GNU SSS')) + L(' fällt die Ausgabe eines GPL-Programms grundsätzlich nicht unter die GPL.', '’ye göre bir GPL programının ürettiği çıktı kural olarak GPL kapsamına girmez.')],
      ['eSpeak NG', 'https://github.com/espeak-ng/espeak-ng', L('eSpeak-NG-Projekt', 'eSpeak NG projesi'), 'GPL-3.0', L('Aussprache-Regeln innerhalb von Piper – nur zum Erzeugen, nicht ausgeliefert.', 'Piper içindeki telaffuz kuralları – yalnızca üretim için, dağıtılmaz.')],
      [L('Piper-Stimmmodelle', 'Piper ses modelleri'), 'https://huggingface.co/rhasspy/piper-voices', 'Michael Hansen / Rhasspy', L('MIT + Lizenz des jeweiligen Datensatzes (unten)', 'MIT + ilgili veri setinin lisansı (aşağıda)'),
        L('Werden nur auf den GitHub-Servern geladen. Ausgeliefert werden nur die damit erzeugten Aufnahmen.', 'Yalnızca GitHub sunucularında yüklenir. Siteye sadece bunlarla üretilen kayıtlar konur.')],
      ['FFmpeg', 'https://ffmpeg.org/legal.html', L('FFmpeg-Projekt', 'FFmpeg projesi'), 'LGPL-2.1+ / GPL', L('Wandelt auf den GitHub-Servern WAV in MP3 um – nicht ausgeliefert.', 'GitHub sunucularında WAV’ı MP3’e çevirir – dağıtılmaz.')]
    ].map(function (r) {
      return '<tr><td><b>' + ext(r[1], r[0]) + '</b><div class="muted small">' + esc(r[2]) + '</div></td><td data-l="' + esc(L('Lizenz', 'Lisans')) + '"><span class="badge">' + esc(r[3]) + '</span></td><td data-l="' + esc(L('Nutzung', 'Kullanım')) + '">' + r[4] + '</td></tr>';
    }).join('');
    function li(a) { return '<li>' + a + '</li>'; }
    return '<h1>⚖️ ' + esc(L('Rechtliches, Lizenzen & Datenschutz', 'Yasal bilgiler, lisanslar ve gizlilik')) + '</h1>' +
      '<p class="muted">' + esc(L('Kurz und ehrlich: was von uns ist, was wir von anderen nutzen – und was mit deinen Daten passiert.', 'Kısaca ve açıkça: neyin bize ait olduğu, başkalarından neyi kullandığımız ve verilerine ne olduğu.')) + '</p>' +

      '<div class="card lesson section"><h2>' + esc(L('Auf einen Blick', 'Bir bakışta')) + '</h2><ul>' +
        li(esc(L('Keine Werbung, kein Tracking, keine Cookies, kein Konto.', 'Reklam yok, takip yok, çerez yok, hesap yok.'))) +
        li(esc(L('Dein Fortschritt bleibt nur in deinem Browser auf deinem Gerät.', 'İlerlemen yalnızca kendi cihazındaki tarayıcıda kalır.'))) +
        li(esc(L('Alle Lerninhalte sind selbst erstellt – nichts ist aus anderen Apps oder Büchern kopiert.', 'Tüm öğrenme içeriklerini kendimiz hazırladık – başka uygulamalardan ya da kitaplardan hiçbir şey kopyalanmadı.'))) +
        li(esc(L('Alles Fremde ist Open Source bzw. frei lizenziert und unten mit Quelle und Lizenz genannt.', 'Başkasına ait her şey açık kaynak ya da serbest lisanslı; aşağıda kaynağı ve lisansıyla birlikte belirtildi.'))) +
      '</ul></div>' +

      '<div class="card lesson section"><h2>© ' + esc(L('Urheberrecht', 'Telif hakkı')) + '</h2><p>' +
        esc(L('Lehrplan, Erklärungen, Übungen, Wortlisten, Beispielsätze, Dialoge, Grafiken, das Maskottchen Lingo, Design und Code sind selbst erstellt: © 2026 Sinan Demir, alle Rechte vorbehalten. Der Code ist öffentlich einsehbar, damit die Seite über GitHub Pages laufen kann – das ist keine Erlaubnis, ihn oder die Inhalte zu übernehmen.',
          'Müfredat, açıklamalar, alıştırmalar, kelime listeleri, örnek cümleler, diyaloglar, görseller, maskotumuz Lingo, tasarım ve kod bize aittir: © 2026 Sinan Demir, tüm hakları saklıdır. Site GitHub Pages üzerinde çalışabilsin diye kod herkese açık; bu, kodun ya da içeriklerin alınıp kullanılabileceği anlamına gelmez.')) +
        ' ' + ext(REPO + '/blob/main/LICENSE', 'LICENSE') + '</p></div>' +

      '<div class="card lesson section"><h2>🙏 ' + esc(L('Danke an – verwendete Open-Source-Bestandteile', 'Teşekkürler – kullandığımız açık kaynak bileşenler')) + '</h2>' +
        '<p>' + esc(L('Die natürlichen Stimmen verdanken wir diesen Projekten und den Menschen, die ihre Stimme frei zur Verfügung gestellt haben.', 'Doğal seslerimizi bu projelere ve seslerini herkesin kullanımına açan insanlara borçluyuz.')) + '</p>' +
        '<div class="tbl-wrap"><table class="stack"><thead><tr><th>' + esc(L('Bestandteil', 'Bileşen')) + '</th><th>' + esc(L('Lizenz', 'Lisans')) + '</th><th>' + esc(L('Wie wir es nutzen', 'Nasıl kullanıyoruz')) + '</th></tr></thead><tbody>' + tools + '</tbody></table></div>' +
        '<h3>' + esc(L('Genutzte Stimmen', 'Kullanılan sesler')) + '</h3>' +
        '<div class="tbl-wrap"><table class="stack"><thead><tr><th>' + esc(L('Stimme', 'Ses')) + '</th><th>' + esc(L('Sprache', 'Dil')) + '</th><th>' + esc(L('Aufnahmen von', 'Kayıtlar')) + '</th><th>' + esc(L('Lizenz', 'Lisans')) + '</th><th>' + esc(L('Nachweis', 'Kaynak')) + '</th></tr></thead><tbody>' + voiceRows + '</tbody></table></div>' +
        '<div class="callout tip">' + esc(L('Die Lizenzen werden bei jeder Erzeugung der Aufnahmen automatisch aus der offiziellen Modellkarte jeder Stimme gelesen. Stimmen ohne freie Lizenz (z. B. „nur nicht kommerziell“) werden automatisch nicht verwendet. CC0 verlangt keine Namensnennung – wir nennen die Projekte trotzdem, weil sie die Arbeit gemacht haben.',
          'Lisanslar, kayıtlar her üretildiğinde her sesin resmî model kartından otomatik olarak okunur. Serbest lisansı olmayan sesler (ör. “yalnızca ticari olmayan kullanım”) otomatik olarak kullanılmaz. CC0 isim belirtmeyi zorunlu kılmaz – yine de emeği onların olduğu için projeleri anıyoruz.')) +
          (live ? '' : ' ' + esc(L('(Automatische Prüfung läuft gerade – bis dahin Stand der Recherche.)', '(Otomatik kontrol şu an yapılıyor – o zamana kadar araştırma sonucu gösteriliyor.)'))) + '</div>' +
        '<p class="small"><b>' + esc(L('Bewusst nicht genutzt:', 'Bilerek kullanmadıklarımız:')) + '</b> ' +
          esc(L('die türkische Stimme „dfki“ (Datensatz nur für nicht kommerzielle Zwecke, CC BY-NC-SA 4.0) sowie drei deutsche Stimmen mit eigener Datensatz-Lizenz (M-AILABS), die wir nicht brauchen.',
            'Türkçe “dfki” sesi (veri seti yalnızca ticari olmayan kullanım için, CC BY-NC-SA 4.0) ve kendi veri seti lisansı olan (M-AILABS), ihtiyaç duymadığımız üç Almanca ses.')) + '</p>' +
        '<p class="small"><b>' + esc(L('Offener Punkt, ehrlich gesagt:', 'Açık bir nokta, dürüst olmak gerekirse:')) + '</b> ' +
          esc(L('Laut Modellkarten wurden die Stimmen aus einer englischen Grundstimme weitertrainiert. Für deren Datensatz gilt eine Forschungslizenz; ob sie für weitertrainierte Stimmen gilt, ist in der Community umstritten. Für diese kostenlose, werbefreie Lernseite halten wir die Nutzung für vertretbar. Vor einer kommerziellen Nutzung prüfen wir das neu.',
            'Model kartlarına göre sesler, İngilizce bir temel sesten yola çıkılarak eğitildi. O temel sesin veri seti bir araştırma lisansına tabi; bunun türetilmiş sesler için de geçerli olup olmadığı toplulukta tartışmalı. Ücretsiz ve reklamsız bu öğrenme sitesi için kullanımı makul görüyoruz. Ticari bir kullanımdan önce bunu yeniden inceleyeceğiz.')) +
          ' ' + ext('https://github.com/rhasspy/piper/discussions/271', L('Diskussion', 'Tartışma')) + '</p>' +
      '</div>' +

      '<div class="card lesson section"><h2>💡 ' + esc(L('Ideen & Methoden, auf denen das Lernen aufbaut', 'Öğrenme yöntemimizin dayandığı fikirler')) + '</h2><p>' + esc(L('Die Umsetzung ist eigen, die Ideen stammen von anderen:', 'Uygulama bize ait, fikirler başkalarından:')) + '</p><ul>' +
        li(esc(L('Lernkartei mit Fächern – Sebastian Leitner („So lernt man lernen“, 1972)', 'Bölmeli kelime kartları – Sebastian Leitner („So lernt man lernen“, 1972)'))) +
        li(esc(L('Verteiltes Wiederholen und Vergessenskurve – Hermann Ebbinghaus („Über das Gedächtnis“, 1885) und die Forschung danach', 'Aralıklı tekrar ve unutma eğrisi – Hermann Ebbinghaus („Über das Gedächtnis“, 1885) ve sonraki araştırmalar'))) +
        li(esc(L('Niveaustufen A1–C2 – Gemeinsamer Europäischer Referenzrahmen für Sprachen (GER) des Europarats', 'A1–C2 seviyeleri – Avrupa Konseyi’nin Diller için Avrupa Ortak Başvuru Metni (AOBM/CEFR)'))) +
        li(esc(L('Tagesziel, Serie und Hörübungen kennt man aus vielen Lern-Apps – übernommen ist nur die Idee, keine Texte, Grafiken oder Designs.', 'Günlük hedef, seri ve dinleme alıştırmaları birçok öğrenme uygulamasından tanıdık – sadece fikir alındı; metin, görsel ya da tasarım alınmadı.'))) +
      '</ul></div>' +

      '<div class="card lesson section" id="privacy"><h2>🔒 ' + esc(L('Datenschutz', 'Gizlilik')) + '</h2>' +
        '<p><b>' + esc(L('Verantwortlich:', 'Sorumlu:')) + '</b> Sinan Demir · ' + esc(L('Kontakt über', 'İletişim:')) + ' ' + ext(REPO + '/issues', 'GitHub') + '</p>' +
        '<h3>' + esc(L('Was auf deinem Gerät gespeichert wird', 'Cihazında neler saklanır')) + '</h3><p>' +
          esc(L('Profilname, gewählter Kurs, deine Antworten und dein Fortschritt, der Wiederholungsplan, das Tagesziel und deine Einstellungen – im lokalen Speicher deines Browsers (localStorage, Einträge beginnen mit „dt-“). Diese Daten verlassen dein Gerät nicht; wir haben keinen Server, der sie empfängt. Löschen kannst du sie in den Einstellungen oder über die Browser-Einstellungen („Websitedaten löschen“). Eine Export-Datei entsteht nur, wenn du sie selbst herunterlädst.',
            'Profil adın, seçtiğin kurs, cevapların ve ilerlemen, tekrar planın, günlük hedefin ve ayarların – tarayıcının yerel belleğinde (localStorage, “dt-” ile başlayan kayıtlar). Bu veriler cihazından çıkmaz; bunları alan bir sunucumuz yok. Ayarlar’dan ya da tarayıcı ayarlarından (“site verilerini sil”) silebilirsin. Dışa aktarma dosyası yalnızca sen indirirsen oluşur.')) + '</p>' +
        '<h3>' + esc(L('Deine eigenen Texte (Schreibwerkstatt)', 'Kendi metinlerin (yazma atölyesi)')) + '</h3><p>' +
          esc(L('Was du in der Schreibwerkstatt schreibst, bleibt nur in diesem Browser (localStorage, unverschlüsselt). Es gibt keinen Upload und keine Auswertung. Deine Texte verlassen das Gerät nur, wenn du selbst etwas tust: Datei exportieren, Übertragungscode erzeugen (der Code steht hinter dem # im Link und wird nicht an einen Server gesendet, enthält aber deine Texte) oder Text kopieren. Gut zu wissen: Andere Seiten unter sinandmrr.github.io und andere Personen, die dasselbe Browserprofil nutzen, können technisch auf diesen Speicher zugreifen. Löschen kannst du deine Texte jederzeit in den Einstellungen.',
            'Yazma atölyesinde yazdıkların yalnızca bu tarayıcıda kalır (localStorage, şifrelenmemiş). Hiçbir yere yüklenmez, incelenmez. Metinlerin cihazından ancak sen bir şey yaptığında çıkar: dosyayı dışa aktarırsan, aktarma kodu oluşturursan (kod bağlantıda # işaretinden sonra durur ve sunucuya gönderilmez, ama metinlerini içerir) ya da metni kopyalarsan. Bilmende fayda var: sinandmrr.github.io altındaki başka sayfalar ve aynı tarayıcı profilini kullanan başka kişiler teknik olarak bu belleğe erişebilir. Metinlerini Ayarlar’dan istediğin zaman silebilirsin.')) + '</p>' +
        '<h3>' + esc(L('Hosting', 'Barındırma')) + '</h3><p>' +
          esc(L('Die Seite liegt bei GitHub Pages (GitHub, Inc., USA). Laut GitHub wird beim Aufruf die IP-Adresse aus Sicherheitsgründen protokolliert. Darauf haben wir keinen Einfluss und keinen Zugriff.',
            'Site GitHub Pages’te (GitHub, Inc., ABD) barındırılıyor. GitHub’a göre siteye girildiğinde IP adresi güvenlik amacıyla kaydedilir. Bunun üzerinde bir etkimiz ya da erişimimiz yok.')) +
          ' ' + ext('https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection', L('GitHub-Dokumentation', 'GitHub belgeleri')) + ' · ' +
          ext('https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement', L('Datenschutzerklärung von GitHub', 'GitHub gizlilik bildirimi')) + '</p>' +
        '<h3>' + esc(L('Sprachausgabe & Mikrofon', 'Sesli okuma ve mikrofon')) + '</h3><p>' +
          esc(L('Die Aufnahmen kommen als Dateien von derselben Seite. Fehlt eine Aufnahme, liest dein Gerät lokal mit seiner eigenen Stimme vor. Das Mikrofon wird nur benutzt, wenn du in der freiwilligen Übung „Sprechen“ darauf tippst und es erlaubst: Die Erkennung übernimmt dein Browser – je nach Browser wird die Aufnahme dafür an dessen Anbieter geschickt (z. B. Chrome an Google). Wir selbst empfangen und speichern keine Aufnahmen.',
            'Kayıtlar aynı siteden dosya olarak gelir. Bir kayıt eksikse cihazın kendi sesiyle, yerel olarak okur. Mikrofon yalnızca isteğe bağlı “Konuşma” alıştırmasında üzerine dokunup izin verirsen kullanılır: Tanıma işini tarayıcın yapar – tarayıcıya göre kayıt bunun için sağlayıcısına gönderilir (ör. Chrome’da Google’a). Biz hiçbir kayıt almıyor ve saklamıyoruz.')) + '</p>' +
        '<h3>' + esc(L('Was es hier nicht gibt', 'Burada olmayanlar')) + '</h3><p>' +
          esc(L('Keine Cookies, keine Analyse- oder Tracking-Dienste, keine Werbung, keine Anmeldung, keine externen Schriftarten oder Skripte von fremden Servern.',
            'Çerez yok, analiz ya da takip hizmeti yok, reklam yok, üyelik yok, başka sunuculardan yazı tipi ya da betik yüklenmiyor.')) + '</p>' +
        '<h3>' + esc(L('Deine Rechte', 'Hakların')) + '</h3><p>' +
          esc(L('Da wir selbst nichts auf Servern speichern, kannst du alle Daten jederzeit selbst einsehen (Export) und löschen. Für die Daten bei GitHub gilt deren Datenschutzerklärung. Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.',
            'Biz sunucuda hiçbir şey saklamadığımız için tüm verilerini istediğin zaman kendin görebilir (dışa aktarma) ve silebilirsin. GitHub’daki veriler için onların gizlilik bildirimi geçerlidir. Ayrıca bir veri koruma denetim makamına şikâyette bulunma hakkın var.')) + '</p>' +
      '</div>' +

      '<p class="muted small">' + esc(L('Stand: ', 'Güncelleme: ') + LEGAL_DATE + ' · ' + L('Sorgfältig recherchiert, aber keine Rechtsberatung. Fehler entdeckt? Schreib uns über GitHub.', 'Özenle araştırıldı ama hukuki danışmanlık değildir. Bir hata mı gördün? GitHub üzerinden yaz.')) +
        ' · ' + ext(REPO + '/blob/main/CREDITS.md', L('Alle Nachweise (CREDITS.md)', 'Tüm kaynaklar (CREDITS.md)')) + '</p>';
  }

  /* ================= Render ================= */
  function parentRoute(r) {
    if (r.page === 'topic') { var tp0 = topicById(r.a); return '#/lessons' + (tp0 ? '/' + tp0.level : ''); }
    if (r.page === 'words') return r.b ? '#/words/' + (r.lv || 'A1') + '/' + r.a : '#/words' + (r.lv ? '/' + r.lv : '');
    if (r.page === 'review') return '#/words';
    if (r.page === 'placement') return '#/lessons';
    if (r.page === 'write') { var w0 = K.writes && K.writes[r.a]; return '#/lessons' + (w0 ? '/' + DT.catalog.writeLevel(w0) : ''); }
    if (r.page === 'legal') return '#/settings';
    return '#/dashboard';   // daily, certificate, …
  }
  function backButton(r) {
    return '<div class="backrow"><a class="back-btn" href="' + parentRoute(r) + '">‹ ' + esc(t('back')) + '</a></div>';
  }
  function render() {
    flushDraft();   // Schreibwerkstatt: getippten Text vor jedem Neu-Rendern sichern (ADR-13)
    applyTheme();
    Object.keys(db.profiles || {}).forEach(function (id) { var pp = db.profiles[id]; if (pp && !K.courses[pp.course]) pp.course = 'de'; });
    if (!db.active || !db.profiles[db.active]) {
      var ids = Object.keys(db.profiles);
      if (ids.length) { db.active = ids[0]; save(); }
      else {
        document.title = 'Deutsch ⇄ Türkçe';
        var lr = parseHash();
        if (lr.page === 'legal') {   // vor dem Start lesbar, ohne Profil
          var ll = lr.a === 'tr' ? 'tr' : 'de'; document.documentElement.lang = ll;
          app.innerHTML = '<main id="main"><p><a href="#/">← Deutsch ⇄ Türkçe</a> · <a href="#/legal/' + (ll === 'de' ? 'tr">Türkçe' : 'de">Deutsch') + '</a></p>' + viewLegal(ll) + '</main>';
          return;
        }
        document.documentElement.lang = 'de'; app.innerHTML = viewOnboarding(); return;
      }
    }
    if (parseHash().page === 'transfer') {   // Link vom anderen Gerät: Code sofort aus der Adresszeile nehmen, dann prüfen lassen
      var tcode = parseHash().a || '';
      try { history.replaceState(null, '', transferBase() + '#/settings'); } catch (e) { location.hash = '#/settings'; }
      receiveTransfer(tcode).then(function (found) { if (found && parseHash().page === 'settings') { render(); window.scrollTo(0, 0); } });
    }
    var r = parseHash(), active = r.page, inner;
    // Player zurücksetzen, wenn man die Übungsansicht verlässt
    var inPlayer = (r.page === 'topic' && (r.b === 'exercises' || r.b === 'review')) || r.page === 'practice' || r.page === 'review' || r.page === 'daily' || (r.page === 'words' && r.b) || r.page === 'placement';
    if (!inPlayer) player = null;
    if (r.page !== 'write') wst = null;
    switch (r.page) {
      case 'lessons': inner = viewLessons(r.a); break;
      case 'topic': inner = viewTopic(r.a, r.b); active = 'lessons'; break;
      case 'write': inner = viewWrite(r.a); active = 'lessons'; break;
      case 'gaps': inner = viewGaps(); break;
      case 'words': inner = (!r.a || !(K.wordfields || []).some(function (f) { return f[0] === r.a; })) ? viewWords(r.lv) : (r.b === 'learn' || r.b === 'practice' ? viewWordSession(r.a, r.b, r.lv) : viewField(r.a, r.lv)); break;
      case 'review': inner = viewReview(); active = 'words'; break;
      case 'daily': inner = viewDaily(); active = 'dashboard'; break;
      case 'practice': inner = viewPractice(); active = 'gaps'; break;
      case 'overview': inner = viewOverview(); break;
      case 'settings': inner = viewSettings(); break;
      case 'certificate': inner = viewCertificate(r.a); active = 'dashboard'; break;
      case 'placement': inner = viewPlacement(); active = 'lessons'; break;
      case 'legal': inner = viewLegal(r.a === 'de' || r.a === 'tr' ? r.a : uiLang()); active = ''; break;
      default: inner = viewDashboard(); active = 'dashboard';
    }
    if (['topic', 'write', 'words', 'review', 'daily', 'placement', 'certificate', 'legal'].indexOf(r.page) >= 0 && !(r.page === 'words' && !r.a)) inner = backButton(r) + inner;
    app.innerHTML = shell(active, inner);
    afterRender();
  }
  function rerenderPlayerOnly() {
    // Rendert die Seite neu, behält aber Scrollposition und Fokus bei (Tastatur-Nutzer verlieren sonst ihren Platz)
    var y = window.scrollY, a = document.activeElement, sel = null;
    if (a && a.getAttribute && a.getAttribute('data-act')) {
      sel = '[data-act="' + a.getAttribute('data-act') + '"]';
      ['data-i', 'data-c', 'data-w', 'data-k', 'data-v'].forEach(function (k) { if (a.hasAttribute(k)) sel += '[' + k + '="' + a.getAttribute(k) + '"]'; });
    } else if (a && a.id) sel = '#' + a.id;
    render(); window.scrollTo(0, y);
    if (sel) {
      var el = document.querySelector(sel);
      if (!el || el.disabled) el = document.getElementById('next-btn') || document.getElementById('check-btn') || document.querySelector('.qcard button:not([disabled])');
      if (el) try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); }
    }
  }
  function afterRender() {
    var wta = document.getElementById('w-text');
    if (wta && wst && wta.getAttribute('data-id') === wst.id) wta.value = wst.text || '';   // per value, damit ein führender Zeilenumbruch bleibt
    if (player && !player.done && !player.checked) {
      var it = curEx();
      if (it && it.ex.say && (it.ex.t === 'listen' || it.ex.t === 'dictation') && player.autoKey !== it.id + '@' + player.idx) {
        player.autoKey = it.id + '@' + player.idx; setTimeout(function () { speak(it.ex.say, course().tts, { auto: true }); }, 250);
      }
      if (it && it.ex && it.ex.role && it.ex.ctx.length && player.autoKey !== it.id + '@' + player.idx) {   // letzte Kontextzeile spielt einmal automatisch
        player.autoKey = it.id + '@' + player.idx;
        if (!it.ex.ctx[it.ex.ctx.length - 1].me) setTimeout(function () { if (player && curEx() === it || player && curEx() && curEx().id === it.id) playRoleLine(curEx(), it.ex.ctx.length - 1, true); }, 250);
      }
      if (it && it.kind === 'card' && player.autoKey !== it.id + '@' + player.idx) {
        player.autoKey = it.id + '@' + player.idx; setTimeout(function () { speak(it.word.t, course().tts, { auto: true }); }, 250);
      }
    }
    var ci0 = document.querySelector('.cloze input.cloze-input:not(:disabled)');
    if (ci0) { var cf = [].slice.call(document.querySelectorAll('.cloze input.cloze-input:not(:disabled)')).filter(function (x) { return !x.value; })[0] || ci0; cf.focus({ preventScroll: true }); }
    var gi = document.getElementById('gap-input');
    if (gi && !gi.disabled) { gi.focus({ preventScroll: true }); var v = gi.value; gi.value = ''; gi.value = v; }
    var nb = document.getElementById('next-btn');
    if (nb) nb.focus({ preventScroll: true });
  }

  /* ================= Bildschirmtastatur (Handy) =================
   * Chrome/Firefox (Android): viewport „interactive-widget=resizes-content“ verkleinert die Seite → wir blenden die
   * feste Reiterleiste aus, damit sie nicht über der Tastatur das Feld verdeckt. Safari (iOS) kennt das nicht:
   * dort verkleinert sich nur der sichtbare Bereich (visualViewport) – wir schieben das Feld selbst in die Mitte. */
  function isTypingField(el) { return el && (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && !/^(button|checkbox|radio|file|submit|range|color)$/i.test(el.type))); }
  function keepFieldVisible() {
    var el = document.activeElement; if (!isTypingField(el)) return;
    var vv = window.visualViewport, top = vv ? vv.offsetTop : 0, h = vv ? vv.height : window.innerHeight;
    var r = el.getBoundingClientRect(), header = document.querySelector('.topbar'), hh = header && getComputedStyle(header).position !== 'static' ? header.getBoundingClientRect().height : 0;
    var visTop = top + hh + 12, visBottom = top + h - 16;
    // Feld + Sonderzeichen-Leiste darunter sollen sichtbar sein
    var bar = el.closest('.qcard') && el.closest('.qcard').querySelector('.charbar'), bottom = Math.max(r.bottom, bar ? Math.min(bar.getBoundingClientRect().bottom, r.bottom + 110) : 0);
    if (r.top < visTop || bottom > visBottom) window.scrollBy({ top: (r.top - visTop) - Math.max(0, ((visBottom - visTop) - (bottom - r.top)) / 3), behavior: 'smooth' });
  }
  var kbTimer = null;
  document.addEventListener('focusin', function (ev) {
    if (!isTypingField(ev.target)) return;
    if (ev.target.hasAttribute('data-gap') && player && player.cur) player.cur.lastGap = ev.target.getAttribute('data-gap');   // Sonderzeichen-Leiste schreibt in die zuletzt benutzte Lücke
    clearTimeout(kbTimer); document.body.classList.add('typing');
    setTimeout(keepFieldVisible, 320);   // nach dem Aufklappen der Tastatur
  });
  document.addEventListener('focusout', function (ev) {
    if (!isTypingField(ev.target)) return;
    if (ev.target.id === 'w-text') flushDraft();   // Entwurf beim Verlassen des Felds sichern
    kbTimer = setTimeout(function () { if (!isTypingField(document.activeElement)) document.body.classList.remove('typing'); }, 150);
  });
  if (window.visualViewport) window.visualViewport.addEventListener('resize', function () { if (document.body.classList.contains('typing')) keepFieldVisible(); });
  // Sonderzeichen antippen nimmt dem Feld nicht den Fokus (sonst klappt die Tastatur zu und die Seite springt)
  document.addEventListener('pointerdown', function (ev) { if (ev.target.closest && ev.target.closest('.charbar button, .w-chunks button')) ev.preventDefault(); });
  // Entwurf sichern, wenn die Seite in den Hintergrund geht oder geschlossen wird (ADR-13)
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flushDraft(); });
  window.addEventListener('pagehide', flushDraft);

  /* ================= Events ================= */
  app.addEventListener('click', function (ev) {
    var sp = ev.target.closest('[data-speak]');
    if (sp) { ev.preventDefault(); speak(sp.getAttribute('data-speak'), course().tts); return; }
    var el = ev.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act');
    switch (act) {
      case 'ob-choose': obName = (document.getElementById('ob-name') || {}).value || ''; obChoice = el.getAttribute('data-c'); app.innerHTML = viewOnboarding(); break;
      case 'ob-start': {
        var nm = (document.getElementById('ob-name') || {}).value || '';
        var want = /^#?\/?(legal(\/.*)?)?$/.test(location.hash) ? '#/dashboard' : location.hash;   // leere Adresse/Rechtliches → Start; sonst (z. B. Übertragungslink) dorthin
        createProfile(nm, obChoice); location.hash = want; render(); break;
      }
      case 'toggle-theme': db.theme = currentThemeIsDark() ? 'light' : 'dark'; save(); render(); break;
      case 'set-theme': db.theme = el.getAttribute('data-v'); save(); render(); break;
      case 'toggle-course': switchCourse(courseId() === 'de' ? 'tr' : 'de'); break;
      case 'set-course': switchCourse(el.getAttribute('data-v')); break;
      case 'mc': if (player && !player.checked) { player.cur.sel = +el.getAttribute('data-i'); rerenderPlayerOnly(); } break;
      case 'char': {
        var inp = document.getElementById('gap-input') || document.getElementById('w-text') || (player && player.cur && player.cur.lastGap && document.getElementById('cloze-' + player.cur.lastGap));
        if (!inp || inp.disabled || (inp.tagName !== 'INPUT' && inp.id !== 'w-text')) break;
        var ch = el.getAttribute('data-ch'), s0 = inp.selectionStart == null ? inp.value.length : inp.selectionStart, s1 = inp.selectionEnd == null ? inp.value.length : inp.selectionEnd;
        if (inp.maxLength > 0 && inp.value.length - (s1 - s0) + ch.length > inp.maxLength) break;
        inp.value = inp.value.slice(0, s0) + ch + inp.value.slice(s1);
        inp.focus(); inp.setSelectionRange(s0 + ch.length, s0 + ch.length);
        if (inp.id === 'w-text') { writeInput(inp); break; }
        if (inp.id === 'gap-input') player.cur.input = inp.value; else player.cur.gaps[inp.getAttribute('data-gap')] = inp.value;
        var cb = document.getElementById('check-btn'); if (cb && player) cb.disabled = !canCheck(curEx().ex, player.cur);
        break;
      }
      case 'sort': if (player && !player.checked) { player.cur.assign[+el.getAttribute('data-i')] = +el.getAttribute('data-c'); rerenderPlayerOnly(); } break;
      case 'pick': if (player && !player.checked) { player.cur.picked.push(+el.getAttribute('data-w')); rerenderPlayerOnly(); } break;
      case 'unpick': if (player && !player.checked) { player.cur.picked.splice(+el.getAttribute('data-k'), 1); rerenderPlayerOnly(); } break;
      case 'check': doCheck(); break;
      case 'card-next': case 'word-known': {
        var ci = player && curEx(); if (!ci || ci.kind !== 'card') break;
        var pp = ensureProfile(prof()), known = act === 'word-known';
        if (!DT.srs.get(pp, courseId(), ci.word.id)) {
          DT.srs.introduce(pp, courseId(), ci.word.id, today(), known);
          // Lernkarten zählen nicht fürs Tagesziel, aber als „neues Wort“ im Tageslog
          var lk = todayKey(), lg = pp.daily.log[lk] || [0, pp.daily.goal || 10, 0]; lg[2] = (lg[2] || 0) + 1; pp.daily.log[lk] = lg;
          save();
        }
        if (known) player.queue = player.queue.filter(function (q, i) { return i <= player.idx || q.indexOf('w:' + ci.word.id + ':') !== 0; });
        doNext(); break;
      }
      case 'cert-download': downloadCertificate(el.getAttribute('data-lv') || 'A1'); break;
      case 'place-start': startPlacement(); render(); break;
      case 'place-apply': {
        var pa = ensureProfile(prof()), pc = courseId(), now = Date.now();
        pa.place[pc] = { t: now, level: 'A1', mastered: place ? place.mastered.slice() : [], asked: place ? place.asked : 0 };
        pa.skip[pc] = pa.skip[pc] || {};
        if (el.getAttribute('data-none')) Object.keys(pa.skip[pc]).forEach(function (k) { if (pa.skip[pc][k] && pa.skip[pc][k].by === 'placement') delete pa.skip[pc][k]; });
        else document.querySelectorAll('input[name="skip"]').forEach(function (cb) {
          if (cb.checked) { if (!pa.skip[pc][cb.value]) pa.skip[pc][cb.value] = { t: now, by: 'placement' }; }
          else delete pa.skip[pc][cb.value];
        });
        save(); place = null; player = null; toast(t('placeSaved')); go('#/dashboard'); break;
      }
      case 'unskip': { var pu = ensureProfile(prof()); delete (pu.skip[courseId()] || {})[el.getAttribute('data-id')]; save(); render(); break; }
      case 'set-goal': { var pg = ensureProfile(prof()); pg.daily.goal = +el.getAttribute('data-v'); save(); render(); break; }
      case 'mic-ok': db.micInfoSeen = Date.now(); save(); if (player && player.cur) player.cur.micInfo = false;   // weiter wie 'mic'
      /* falls through */
      case 'mic': if (player && !player.checked) {
        if (!db.micInfoSeen) { player.cur.micInfo = true; rerenderPlayerOnly(); break; }
        var pc = player.cur; pc.listening = true; pc.micError = null; rerenderPlayerOnly();
        startListening(function (alts) { pc.listening = false; pc.heardAlts = alts; pc.heard = alts[0]; doCheck(); },
          function (err) { pc.listening = false; pc.micError = err; rerenderPlayerOnly(); });
      } break;
      case 'self-ok': if (player && !player.checked) { player.cur.selfOk = true; doCheck(); } break;
      case 'retry': if (player) { player.cur = null; player.checked = false; player.result = null; rerenderPlayerOnly(); } break;
      case 'next': doNext(); break;
      case 'skip': if (player && player.mode === 'placement' && place) { placementAnswer(false); doNext(); break; }
        if (player) { player.idx++; player.cur = null; player.checked = false; if (player.idx >= player.queue.length) player.done = true; rerenderPlayerOnly(); } break;
      case 'jump': if (player) { player.idx = +el.getAttribute('data-i'); player.cur = null; player.checked = false; player.done = false; rerenderPlayerOnly(); } break;
      case 'redo-all': if (player && player.topicId) { var tid = player.topicId; player = null; newPlayer(tid + ':all', 'all', topicById(tid).data.exercises.map(function (_, i) { return exId(tid, i); }), tid); player.idx = 0; rerenderPlayerOnly(); } break;
      case 'redo-open': if (player && player.topicId) {
        var pr2 = prog(), q2 = player.queue, first2 = -1;
        for (var k2 = 0; k2 < q2.length; k2++) { var e2 = EXI[q2[k2]]; if (e2 && isCountable(e2.ex) && !pr2[q2[k2]]) { first2 = k2; break; } }
        player.done = false; player.idx = first2 < 0 ? 0 : first2; player.cur = null; player.checked = false; player.result = null; rerenderPlayerOnly();
      } break;
      case 'export-corrupt': {
        var rawC = rawGet('dt-corrupt') || ''; if (!rawC) break;
        var aC = document.createElement('a'); aC.href = URL.createObjectURL(new Blob([rawC], { type: 'text/plain' })); aC.download = 'lernstand-beschaedigt-bozuk-kayit.txt';
        document.body.appendChild(aC); aC.click(); setTimeout(function () { URL.revokeObjectURL(aC.href); aC.remove(); }, 500); break;
      }
      case 'dismiss-restored': restoredFromBackup = false; render(); break;
      case 'skip-main': ev.preventDefault(); var mn = document.getElementById('main'); if (mn) { mn.setAttribute('tabindex', '-1'); mn.focus(); } break;
      case 'restart-review': ev.preventDefault(); player = null; go(el.getAttribute('href')); break;
      case 'switch-profile': db.active = el.getAttribute('data-id'); save(); player = null; render(); break;
      case 'delete-profile': {
        var pid = el.getAttribute('data-id'), pn = db.profiles[pid].name || '—';
        if (armed(el, t('confirmDelete', { n: pn }))) { backupNow(); delete db.profiles[pid]; if (db.active === pid) db.active = Object.keys(db.profiles)[0]; save(); render(); }
        break;
      }
      case 'export': doExport(); break;
      case 'transfer-make': makeTransfer(); break;
      case 'transfer-copy': copyTransfer(); break;
      case 'transfer-share': shareTransfer(); break;
      case 'transfer-check': checkPastedTransfer(); break;
      case 'transfer-merge': applyTransfer(); break;
      case 'transfer-cancel': pendingTransfer = null; render(); break;
      case 'voice-gender': if (!el.disabled) {
        db.voiceGender = el.getAttribute('data-v'); db.voices = db.voices || {}; delete db.voices[course().tts]; save(); render();
        var pvx = piperVoices(course().target), gk = db.voiceGender === 'm' ? pvx.male : (pvx.female || (db.voiceGender ? null : pvx.male));
        var smp = gk && AUDIO && AUDIO.samples && AUDIO.samples[course().target] && AUDIO.samples[course().target][gk];
        if (smp) playUrl('audio/' + smp); else deviceSpeak(t('testSentence'), course().tts, {}, db.voiceGender || '');
      } break;
      case 'play-sample': playUrl(el.getAttribute('data-url')); break;
      case 'text-toggle': {
        var tpb = document.getElementById('text-panel-body'); if (!tpb) break;
        textPanelOpen = tpb.hasAttribute('hidden'); if (textPanelOpen) tpb.removeAttribute('hidden'); else tpb.setAttribute('hidden', '');
        el.setAttribute('aria-expanded', textPanelOpen); el.textContent = '📄 ' + t(textPanelOpen ? 'textHide' : 'textShow'); break;
      }
      case 'role-line': { var rit = player && curEx(); if (rit) playRoleLine(rit, el.getAttribute('data-k')); break; }
      case 'dl-line': { var dtp = topicById(parseHash().a), dd = dtp && dtp.data.dialog, dls2 = dd && DT.catalog.dialogLines(dd), dli = dls2 && dls2[+el.getAttribute('data-line')]; if (dli) speakLine(dli, voiceAssign(dls2, dd.roleG), {}); break; }
      case 'ls-play': playListen(el.getAttribute('data-tid'), !!el.getAttribute('data-slow')); break;
      case 'ls-stop': stopListen(); break;
      case 'ls-line': { var lc = K.content[el.getAttribute('data-tid')], lx2 = lc && lc.text, li = lx2 && lx2.lines[+el.getAttribute('data-line')]; if (li) speakLine(li, voiceAssign(lx2.lines), {}); break; }
      case 'ls-toggle': {
        var ltid = el.getAttribute('data-tid'), lbox = document.querySelector('.ls-transcript[data-tid="' + ltid + '"]'); if (!lbox) break;
        var lshow = lbox.hasAttribute('hidden'); listenShown[ltid] = lshow;
        if (lshow) lbox.removeAttribute('hidden'); else lbox.setAttribute('hidden', '');
        el.setAttribute('aria-expanded', lshow); el.textContent = '📄 ' + t(lshow ? 'transcriptHide' : 'transcriptShow'); break;
      }
      case 'dl-play': { var tpd = topicById(parseHash().a); if (tpd) playDialog(tpd, !!el.getAttribute('data-slow')); break; }
      case 'dl-tr': { dialogShowTr = !dialogShowTr; var box = document.querySelector('.dialog'); if (box) box.classList.toggle('show-tr', dialogShowTr); el.setAttribute('aria-pressed', dialogShowTr); break; }
      case 'play-say': speak(el.getAttribute('data-say'), course().tts, { gender: el.getAttribute('data-g') || '', rate: el.getAttribute('data-slow') ? 0.72 : 1 }); break;
      case 'voice-test': { var sel = document.getElementById('voice-sel'); speak(t('testSentence'), course().tts, { voiceName: sel ? sel.value : null }); break; }
      case 'reset-course': {
        // ADR-13 §4: eigene Texte bleiben standardmäßig; nur mit Kästchen (und zweistufiger Bestätigung) mitlöschen
        var rtx = document.getElementById('reset-texts'), wipeT = !!(rtx && rtx.checked);
        // Kästchen nach dem ersten Klick geändert? → neu fragen (die Bestätigung gilt nur für das, was gefragt wurde)
        if (el.getAttribute('data-armed') === '1' && el.getAttribute('data-wipe') !== String(wipeT)) el.removeAttribute('data-armed');
        el.setAttribute('data-wipe', String(wipeT));
        if (armed(el, t(wipeT ? 'confirmResetTexts' : 'confirmReset'))) {
          backupNow(); var pr3 = ensureProfile(prof()), cr = courseId();
          pr3.prog[cr] = {}; if (pr3.srs) pr3.srs[cr] = {}; if (pr3.skip) pr3.skip[cr] = {}; if (pr3.place) delete pr3.place[cr];
          if (wipeT) DT.writes.removeCourse(pr3, cr); else DT.writes.archiveCourse(pr3, cr, Date.now());
          save(); player = null; wst = null; render();
        }
      } break;
      case 'w-chunk': {
        var wta = document.getElementById('w-text'), wk = wst && K.writes[wst.id], chunk = wk && (wk.chunks || [])[+el.getAttribute('data-i')];
        if (!wta || !chunk) break;
        var a0 = wta.selectionStart == null ? wta.value.length : wta.selectionStart, a1 = wta.selectionEnd == null ? a0 : wta.selectionEnd;
        var before = wta.value.slice(0, a0), ins = (before && !/\s$/.test(before) ? ' ' : '') + chunk;
        if (wta.value.length - (a1 - a0) + ins.length > wta.maxLength) break;
        wta.value = before + ins + wta.value.slice(a1);
        wta.focus();
        var dots = ins.indexOf('…');   // erstes „…“ markieren: Weiterschreiben ersetzt es
        if (dots >= 0) wta.setSelectionRange(a0 + dots, a0 + dots + 1); else wta.setSelectionRange(a0 + ins.length, a0 + ins.length);
        writeInput(wta); break;
      }
      case 'w-done': {
        var wtd = document.getElementById('w-text'); if (!wtd || !wst) break;
        var wid = wst.id, wv = wtd.value; if (!DT.writes.countWords(wv)) break;
        clearTimeout(wTimer);
        var wr = writeCommit(wid, function () { return DT.writes.submit(prof(), courseId(), wid, wv, Date.now()); });
        if (!wr.ok) { setWriteMsg(writeErrMsg(wr), true); toast(writeErrMsg(wr)); break; }
        wst.mode = 'done'; wst.checks = {}; wst.text = wv; wst.last = wv; wst.msg = ''; wst.msgAlert = false;
        render();
        var hh = document.getElementById('w-hints'); if (hh) { hh.scrollIntoView({ block: 'start', behavior: 'smooth' }); hh.setAttribute('tabindex', '-1'); try { hh.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
        break;
      }
      case 'w-revise': if (wst) {
        var we = writeEntry(wst.id); wst.mode = 'edit'; wst.text = we && typeof we.d === 'string' ? we.d : (we && we.x) || ''; wst.last = wst.text; wst.msg = ''; wst.msgAlert = false;
        render(); var wt2 = document.getElementById('w-text'); if (wt2) { wt2.focus(); wt2.setSelectionRange(wt2.value.length, wt2.value.length); }
      } break;
      case 'w-practiced': if (wst && K.writes[wst.id] && K.writes[wst.id].check.every(function (_, i) { return wst.checks[i]; })) {
        record(wst.id, true); toast(t('writePracticedToast')); rerenderPlayerOnly();
      } break;
      case 'w-tr': {
        if (!wst) break; wst.showTr = !wst.showTr; el.setAttribute('aria-pressed', wst.showTr);
        var wtr = document.querySelector('.w-trans'); if (wtr) { if (wst.showTr) wtr.removeAttribute('hidden'); else wtr.setAttribute('hidden', ''); }
        break;
      }
      case 'w-copy': writeCopy(); break;
      case 'w-del-part': {         // einzelne Fassung löschen (ADR-13 §4): zweistufig, vorher Sicherung
        if (!wst) break;
        if (!armed(el, t('confirmVersionDelete'))) break;
        flushDraft(); backupNow();
        var dpId = wst.id, dpPart = el.getAttribute('data-part'), dpI = +el.getAttribute('data-i');
        var dpR = writeCommit(dpId, function () { var x = WR.removePart(prof(), courseId(), dpId, dpPart, dpI); x.changed = x.ok; return x; });
        if (!dpR.ok) { toast(dpR.error ? writeErrMsg(dpR) : t('writeNotSaved')); render(); break; }
        toast(t('writeVersionDeleted')); render(); break;
      }
      case 'w-del-entry': {        // ganzen Text löschen: Eintrag und „geübt“ (sonst wäre eine neue Abgabe sofort „geübt“)
        if (!wst || !writeEntry(wst.id)) break;
        if (!armed(el, t('confirmWriteDelete'))) break;
        flushDraft(); backupNow();
        var deId = wst.id, deE = JSON.parse(JSON.stringify(writeEntry(deId)));
        var deR = writeCommit(deId, function () { var x = WR.remove(prof(), courseId(), deId); return { ok: x, changed: x, prev: deE }; });
        if (!deR.ok) { toast(writeErrMsg(deR)); render(); break; }
        if (prog()[deId]) { delete prog()[deId]; save(); }
        wst = null; toast(t('writeEntryDeleted')); render(); break;
      }
      case 'w-download': {
        var wtxt = writeTextsTxt(ensureProfile(prof())); if (!wtxt) { toast(t('myTextsNone')); break; }
        var aW = document.createElement('a'); aW.href = URL.createObjectURL(new Blob([wtxt], { type: 'text/plain;charset=utf-8' })); aW.download = 'meine-texte-metinlerim.txt';
        document.body.appendChild(aW); aW.click(); setTimeout(function () { URL.revokeObjectURL(aW.href); aW.remove(); }, 500); break;
      }
      case 'w-delete': {
        var pw = ensureProfile(prof()); if (!Object.keys(pw.writes[courseId()] || {}).length) { toast(t('myTextsNone')); break; }
        if (armed(el, t('confirmTextsDelete'))) {
          backupNow(); var pgW = prog();
          Object.keys(pw.writes[courseId()]).forEach(function (wid) { delete pgW[wid]; });   // kein „geübt“ ohne Text
          DT.writes.removeCourse(pw, courseId()); save(); wst = null; toast(t('myTextsDeleted')); render();
        }
        break;
      }
    }
  });
  app.addEventListener('input', function (ev) {
    if (ev.target.id === 'w-text') { writeInput(ev.target); return; }
    if (ev.target.id === 'cert-name') { var lvc = (parseHash().a || 'A1'); renderCertCanvas(lvc); return; }
    if (ev.target.getAttribute && ev.target.hasAttribute('data-gap') && player && player.cur) {
      player.cur.gaps[ev.target.getAttribute('data-gap')] = ev.target.value; player.cur.lastGap = ev.target.getAttribute('data-gap');
      var cb2 = document.getElementById('check-btn'); if (cb2) cb2.disabled = !canCheck(curEx().ex, player.cur);
    }
    if (ev.target.id === 'gap-input' && player) {
      player.cur.input = ev.target.value;
      var cb = document.getElementById('check-btn'); if (cb) cb.disabled = !ev.target.value.trim();
    }
  });
  app.addEventListener('change', function (ev) {
    var el = ev.target;
    if (el.matches('select[data-act="match"]') && player) {
      player.cur.choice[+el.getAttribute('data-i')] = el.value;
      var cb = document.getElementById('check-btn'); if (cb) cb.disabled = !canCheck(curEx().ex, player.cur);
    }
    if (el.matches('select[data-act="cloze"]') && player) {
      player.cur.gaps[el.getAttribute('data-i')] = el.value;
      var cb3 = document.getElementById('check-btn'); if (cb3) cb3.disabled = !canCheck(curEx().ex, player.cur);
    }
    if (el.matches('input[data-act="w-ck"]') && wst) {
      wst.checks[+el.getAttribute('data-i')] = el.checked;
      var wk2 = K.writes[wst.id], okb = document.getElementById('w-ok');
      if (okb && wk2) okb.disabled = !wk2.check.every(function (_, i) { return wst.checks[i]; });
    }
    if (el.matches('input[data-act="import"]')) doImport(el.files && el.files[0]);
    if (el.matches('select[data-act="voice"]')) { db.voices = db.voices || {}; db.voices[course().tts] = el.value; save(); speak(t('testSentence'), course().tts, { voiceName: el.value }); }
  });
  app.addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter' && ev.target.id === 'gap-input') { ev.preventDefault(); doCheck(); }
    if (ev.key === 'Enter' && ev.target.hasAttribute && ev.target.hasAttribute('data-gap')) {   // Lückentext: Enter → nächste Lücke, bei der letzten prüfen
      ev.preventDefault();
      var fields = [].slice.call(app.querySelectorAll('.cloze [id^="cloze-"]:not(:disabled)')), at = fields.indexOf(ev.target);
      if (at >= 0 && at < fields.length - 1) fields[at + 1].focus(); else doCheck();
    }
    if (ev.key === 'Enter' && ev.target.id === 'ob-name') { ev.preventDefault(); var b = app.querySelector('[data-act="ob-start"]'); if (b) b.click(); }
  });
  document.addEventListener('keydown', function (ev) {
    if (!player || ev.target.tagName === 'INPUT' || ev.target.tagName === 'SELECT' || ev.target.tagName === 'TEXTAREA' || ev.target.isContentEditable || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    var item = player.done ? null : curEx(); if (!item) return;
    if (!player.checked && (item.ex.t === 'mc' || item.ex.t === 'listen') && /^[1-7a-gA-G]$/.test(ev.key)) {
      var pos = /\d/.test(ev.key) ? +ev.key - 1 : 'abcdefg'.indexOf(ev.key.toLowerCase());
      var ord = player.cur.order || item.ex.o.map(function (_, k) { return k; });
      if (pos < ord.length) { player.cur.sel = ord[pos]; rerenderPlayerOnly(); }
    }
  });
  app.addEventListener('submit', function (ev) {
    var f = ev.target;
    if (f.getAttribute('data-form') === 'new-profile') {
      ev.preventDefault();
      var name = f.elements.name.value.trim(); if (!name) return;
      createProfile(name, courseId()); player = null; render();
    }
  });

  /* Zweistufige Bestätigung im Button selbst (confirm() ist in manchen Einbettungen blockiert) */
  function armed(el, question) {
    if (el.getAttribute('data-armed') === '1') return true;
    var old = el.hasAttribute('data-label') ? el.getAttribute('data-label') : el.innerHTML;   // ursprüngliche Beschriftung (auch bei erneutem Scharfschalten)
    el.setAttribute('data-armed', '1'); el.setAttribute('data-label', old);
    el.innerHTML = '⚠️ ' + esc(question) + ' ' + esc(t('clickAgain'));
    clearTimeout(el._armT);
    el._armT = setTimeout(function () { if (el.isConnected) { el.removeAttribute('data-armed'); el.removeAttribute('data-label'); el.innerHTML = old; } }, 4000);
    return false;
  }
  function switchCourse(cid) {
    if (cid === courseId()) return;
    prof().course = cid; save(); player = null;
    var r = parseHash();
    if (r.page === 'topic' || r.page === 'practice') location.hash = '#/dashboard';
    render(); toast(t('courseSwitched', { c: K.courses[cid].label }));
  }
  function doCheck() {
    if (!player || player.checked) return;
    var item = curEx(); if (!item) return;
    if (!canCheck(item.ex, player.cur)) return;
    var res = evaluate(item.ex, player.cur);
    player.result = res; player.checked = true;
    player.session[item.id] = res.ok;
    if (player.mode === 'placement') placementAnswer(res.ok); else recordAnswer(item, res.ok, res.given);
    if (item.ex.role) setTimeout(function () { playRoleLine(item, 'ans', true); }, 150);   // danach spricht die Stimme der eigenen Rolle die richtige Zeile
    if (item.kind === 'word' && res.ok && item.ex.mode !== 'listen') setTimeout(function () { speak(item.word.t, course().tts, { auto: true }); }, 150);
    // In Lern-/Wiederholungs-Sitzungen kommt ein Fehler am Ende noch einmal (höchstens einmal)
    if (!res.ok && player.mode !== 'all' && player.mode !== 'review' && player.mode !== 'placement' && !player.requeued[item.id] && item.kind !== 'card') {
      player.requeued[item.id] = true; player.queue.push(item.id);
    }
    rerenderPlayerOnly();
  }
  function doNext() {
    if (!player) return;
    if (player.mode === 'placement' && place && place.nextId && player.idx === player.queue.length - 1) { player.queue.push(place.nextId); place.nextId = null; }
    player.idx++; player.cur = null; player.checked = false; player.result = null;
    if (player.idx >= player.queue.length) player.done = true;
    rerenderPlayerOnly();
    var card = document.querySelector('.qcard, .summary');
    if (card && card.getBoundingClientRect().top < 70) card.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function doExport() {
    var p = prof();
    var data = DT.storage.exportData(p, APP_VERSION);
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'fortschritt-ilerleme-' + (p.name || 'profil').replace(/[^\wäöüßçğışı-]+/gi, '_') + '.json';
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  /** Ergebnis von importData übernehmen: erst Sicherung, dann zusammengeführtes Profil speichern. */
  function commitImport(r) {
    backupNow();
    var before = db.profiles[db.active];
    db.profiles[db.active] = ensureProfile(r.profile);
    if (!save()) {                       // passt nicht in den Speicher → vorherigen Stand behalten, nichts halb übernehmen
      db.profiles[db.active] = before; save(); toast(t('importFail')); render(); return false;
    }
    player = null; wst = null;
    toast(t(DT.writes.size(r.profile) > DT.writes.MAX_TOTAL ? 'writeImportOver' : 'imported')); render();   // Import kürzt nie (ADR-13)
    return true;
  }
  function doImport(file) {
    if (!file) return;
    if (file.size > DT.storage.TR_MAX_RAW) { toast(t('importFail')); return; }   // gleiche Grenze wie beim Übertragungscode
    var rd = new FileReader();
    rd.onload = function () {
      try {
        var r = DT.storage.importData(prof(), rd.result, today(), todayKey());
        if (!r.ok) { toast(t(r.error === 'newer' ? 'importNewer' : 'importFail')); return; }
        commitImport(r);
      } catch (e) { toast(t('importFail')); }
    };
    rd.readAsText(file);
  }

  /* ---------- Übertragung per Link/Code (ohne Konto, ohne Server) ---------- */
  var pendingTransfer = null;   // { data, n, d } – gefundener Stand wartet auf „Zusammenführen“
  function countEntries(profile) {
    var n = 0;
    ['prog', 'srs', 'writes'].forEach(function (f) {
      var m = profile && profile[f];
      if (m && typeof m === 'object') Object.keys(m).forEach(function (c) { n += (m[c] && typeof m[c] === 'object') ? Object.keys(m[c]).length : 1; });
    });
    return n;
  }
  function countChanged(cur, merged) {   // wie viele Einträge würden neu oder aktueller
    var n = 0;
    ['prog', 'srs', 'writes'].forEach(function (f) {
      var A = (cur && cur[f]) || {}, B = (merged && merged[f]) || {};
      Object.keys(B).forEach(function (c) {
        var bm = B[c] || {}, am = A[c] || {};
        Object.keys(bm).forEach(function (id) { if (JSON.stringify(bm[id]) !== JSON.stringify(am[id])) n++; });
      });
    });
    return n;
  }
  function otherChanged(cur, merged) {   // Serie, Abzeichen, Einstufung, Überspringen, zuletzt-benutzt
    return ['daily', 'badges', 'place', 'skip', 'last'].some(function (f) { return JSON.stringify((cur && cur[f]) || null) !== JSON.stringify((merged && merged[f]) || null); });
  }
  function receiveTransfer(input) {
    return DT.storage.unpackTransfer(input).then(function (u) {
      if (!u.ok) { toast(t(u.error === 'unsupported' ? 'transferUnsupported' : 'transferFail')); return false; }
      var r = DT.storage.importData(prof(), u.data, today(), todayKey());
      if (!r.ok) { toast(t(r.error === 'newer' ? 'importNewer' : 'importFail')); return false; }
      var d = '—';
      try { var dt = new Date(u.data.exported); if (u.data.exported && !isNaN(dt)) d = dt.toLocaleDateString(uiLang() === 'de' ? 'de-DE' : 'tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' }); } catch (e) { /* bleibt — */ }
      pendingTransfer = { data: u.data, n: countEntries(u.data.profile), d: d, pid: db.active };
      return true;
    }).catch(function () { toast(t('transferFail')); return false; });
  }
  function transferPendingHtml() {
    if (!pendingTransfer) return '';
    if (pendingTransfer.pid !== db.active) { pendingTransfer = null; return ''; }   // Profil gewechselt → nichts in ein anderes Profil schreiben
    var r = DT.storage.importData(prof(), pendingTransfer.data, today(), todayKey());
    if (!r.ok) { pendingTransfer = null; return ''; }
    var c = countChanged(prof(), r.profile), other = otherChanged(prof(), r.profile), any = c > 0 || other;
    return '<div class="card section" id="transfer-pending" role="region" aria-live="polite"><h2>🔄 ' + esc(t('transferTitle')) + '</h2>' +
      '<p>' + esc(t('transferFound', { n: pendingTransfer.n, c: c, d: pendingTransfer.d })) + '</p>' +
      (other ? '<p class="muted small">' + esc(t('transferOther')) + '</p>' : '') +
      (any ? '' : '<p class="muted small">' + esc(t('transferNothing')) + '</p>') +
      '<p class="muted small">' + esc(t('transferSafe')) + '</p><div class="btn-row">' +
      '<button class="btn primary" data-act="transfer-merge"' + (any ? '' : ' disabled') + '>' + esc(t('transferMerge')) + '</button>' +
      '<button class="btn" data-act="transfer-cancel">' + esc(t('transferCancel')) + '</button></div></div>';
  }
  function transferCardHtml() {
    function steps(pre) { var o = '<ol class="guide-steps">'; for (var i = 1; i <= 4; i++) o += '<li>' + esc(t(pre + i)) + '</li>'; return o + '</ol>'; }
    return '<div class="card section" id="transfer-card"><h2>🔄 ' + esc(t('transferTitle')) + '</h2><p class="muted small">' + esc(t('transferIntro')) + '</p>' +
      '<details class="guide"><summary class="btn">' + esc(t('guideToPc')) + '</summary>' + steps('guidePc') + '</details>' +
      '<details class="guide"><summary class="btn">' + esc(t('guideToPhone')) + '</summary>' + steps('guideLap') + '</details>' +
      '<p class="muted small">' + esc(t('guideNote')) + '</p><p class="muted small">' + esc(t('guideFile')) + '</p>' +
      (DT.writes.size(prof()) ? '<p class="small">✍️ ' + esc(t('transferHasTexts')) + '</p>' : '') +
      '<div class="btn-row"><button class="btn primary" data-act="transfer-make">' + esc(t('transferMake')) + '</button></div>' +
      '<div id="transfer-out" aria-live="polite"></div>' +
      '<h3>' + esc(t('transferPaste')) + '</h3>' +
      '<textarea class="input" id="transfer-in" rows="3" spellcheck="false" autocomplete="off" aria-label="' + esc(t('transferPaste')) + '" placeholder="' + esc(t('transferPastePh')) + '"></textarea>' +
      '<div class="btn-row"><button class="btn" data-act="transfer-check">' + esc(t('transferCheck')) + '</button></div>' +
      '<p class="muted small">' + esc(t('transferPrivacy')) + '</p></div>';
  }
  function transferBase() { return location.href.replace(/#.*$/, ''); }
  function makeTransfer() {
    var out = document.getElementById('transfer-out');
    DT.storage.packTransfer(prof(), APP_VERSION).then(function (code) {
      var link = transferBase() + '#/transfer/' + code, body = t('transferMailBody') + '\n\n' + link;
      var mail = 'mailto:?subject=' + encodeURIComponent(t('transferMailSubject')) + '&body=' + encodeURIComponent(body);
      if (!out || !out.isConnected) return;
      out.innerHTML = '<textarea class="input" id="transfer-link" rows="3" readonly aria-label="' + esc(t('transferMake')) + '"></textarea><div class="btn-row">' +
        (typeof navigator.share === 'function' ? '<button class="btn" data-act="transfer-share">' + esc(t('transferShare')) + '</button>' : '') +
        '<button class="btn" data-act="transfer-copy">' + esc(t('transferCopy')) + '</button>' +
        (mail.length <= 1900 ? '<a class="btn" href="' + esc(mail) + '">' + esc(t('transferMail')) + '</a>' : '') + '</div>' +
        (mail.length <= 1900 ? '' : '<p class="muted small">' + esc(t('transferMailLong')) + '</p>');
      var ta = out.querySelector('#transfer-link'); ta.value = link; ta.setAttribute('data-body', body);
    }, function () { toast(t('importFail')); });
  }
  function transferLinkBox() { return document.getElementById('transfer-link'); }
  function copyTransfer() {
    var box = transferLinkBox(); if (!box) return;
    var done = function () { toast(t('transferCopied')); };
    var fallback = function () { box.focus(); box.select(); try { if (document.execCommand('copy')) done(); } catch (e) { /* Nutzer kopiert von Hand */ } };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(box.value).then(done, fallback); else fallback();
  }
  function shareTransfer() {
    var box = transferLinkBox(); if (!box || typeof navigator.share !== 'function') return;
    navigator.share({ title: t('transferMailSubject'), text: box.getAttribute('data-body') || box.value }).catch(function () { /* abgebrochen */ });
  }
  function checkPastedTransfer() {
    var inp = document.getElementById('transfer-in');
    receiveTransfer(inp ? inp.value : '').then(function (found) { if (found) { render(); window.scrollTo(0, 0); } });
  }
  function applyTransfer() {
    if (!pendingTransfer) return;
    if (pendingTransfer.pid !== db.active) { pendingTransfer = null; render(); return; }
    var r = DT.storage.importData(prof(), pendingTransfer.data, today(), todayKey());
    pendingTransfer = null;
    if (!r.ok) { toast(t(r.error === 'newer' ? 'importNewer' : 'importFail')); render(); return; }
    commitImport(r);
  }

  loadAudioManifest();
  render();
})();
