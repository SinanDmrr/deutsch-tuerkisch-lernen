/* Deutsch B2 – Rollenspiel-Dialoge für Türkischsprechende (Erklärungen, Übersetzungen und Fragen auf Türkisch)
 * Format wie js/content/de-b1-dialogs.js: Wahlzeilen (me:true) mit je 3 Optionen, danach Verständnisfragen.
 * IDs: Dialog de-b2-dNN, Wahlzeilen <id>.c1…, Fragen <id>.1… – NIE ändern oder wiederverwenden.
 * Paket P1 „Abwägen & argumentieren“: d01 Teambesprechung zu Homeoffice-Regeln · d02 Fehler im Bericht: Stellungnahme beim Vorgesetzten ·
 *            d03 Antrag auf die Vier-Tage-Woche bei der Personalabteilung
 */
(function (K) {

K.addDialog('de-b2-d01', {
  level: 'B2', scene: 'arbeit', title: 'Teambesprechung: neue Homeoffice-Regeln', sub: 'Ekip toplantısı: evden çalışma kuralları',
  role: 'Çalışan (Jan Berger)', roleG: 'm',
  lines: [
    { s: "Frau Krämer", g: "f", t: "Ich möchte heute mit Ihnen über die neuen Homeoffice-Regeln sprechen. Die Geschäftsführung schlägt vor, dass jeder höchstens zwei Tage pro Woche zu Hause arbeitet. Wie sehen Sie das, Herr Berger?", n: "Bugün sizinle yeni evden çalışma kuralları hakkında konuşmak istiyorum. Yönetim, herkesin haftada en fazla iki gün evden çalışmasını öneriyor. Siz bunu nasıl görüyorsunuz, Bay Berger?" },
    { me: true, id: "de-b2-d01.c1",
      o: ["Ich verstehe den Gedanken dahinter. Zwar arbeite ich zu Hause konzentrierter, allerdings brauche ich im Büro den Austausch. Zwei Tage halte ich deshalb für vernünftig.", "Ich verstehe den Gedanken dahinter, aber zwar arbeite ich zu Hause konzentrierter, ich brauche im Büro den Austausch.", "Ich bin dagegen. Obwohl ich zu Hause besser arbeite, aber zwei Tage sind zu wenig."], a: 0,
      why: { 1: "„zwar“ ve „aber“ birbirini tamamlar ama aynı cümlede yan yana dizilmez: „zwar … aber“ tek bir yapıdır. Ayrıca iki cümle bağlaçsız art arda gelmiş. Doğrusu: „Zwar arbeite ich … konzentrierter, aber ich brauche …“.", 2: "„obwohl“ bir yan cümle açar; ardından gelen ana cümle doğrudan fiille başlar. „aber“ ile birlikte kullanılmaz: ✗ Obwohl …, aber …  ✓ Obwohl ich zu Hause besser arbeite, sind zwei Tage zu wenig." },
      e: "Bir görüşü kısmen kabul edip karşı noktayı vurgulamak için „zwar … allerdings/aber“ idealdir. „allerdings“ bir zarftır: Vorfeld’de ise fiil hemen arkasından gelir, ortada ise özneden sonra durabilir. Sonunda net bir sonuç söylemek tartışmada dengeli durur.", n: "Arkasındaki düşünceyi anlıyorum. Evde gerçi daha konsantre çalışıyorum, ancak ofiste fikir alışverişine ihtiyacım var. Bu yüzden iki günü makul buluyorum." },
    { s: "Herr Voss", g: "m", t: "Bei mir sieht es anders aus. Ich fahre über eine Stunde ins Büro, während Frau Lorenz nur zehn Minuten braucht. Folglich spare ich zu Hause viel mehr Zeit als sie.", n: "Bende durum farklı. Ofise bir saatten fazla yolculuk ediyorum, Bayan Lorenz ise sadece on dakikada geliyor. Dolayısıyla evde ondan çok daha fazla zaman kazanıyorum." },
    { me: true, id: "de-b2-d01.c2",
      o: ["Das verstehe ich. Trotzdem die Regeln sollten für alle gleich sein, damit sich niemand benachteiligt fühlt.", "Das verstehe ich. Deshalb sollten die Regeln für alle gleich sein, obwohl Ihr Weg länger ist als meiner.", "Das verstehe ich. Dennoch sollten die Regeln für alle gleich sein, sofern nichts dagegenspricht."], a: 2,
      why: { 0: "„trotzdem“ cümle başında zarf olarak 1. sırada durur; çekimli fiil hemen 2. sırada gelir: ✗ Trotzdem die Regeln sollten … ✓ Trotzdem sollten die Regeln …", 1: "„deshalb“ bir sonuç bildirir: „bu yüzden“. Ama Bay Voss’un uzun yolu, kuralların herkes için eşit olması için bir neden değil, tam tersine bir istisna nedeni. Mantık çelişiyor; karşıtlık için „dennoch/trotzdem“ gerekir." },
      e: "„Dennoch“ ve „trotzdem“ önceki cümleye karşı çıkar ve fiili hemen arkasına alır. „sofern“ bir yan cümle açar (fiil sonda; burada „nichts dagegenspricht“) ve resmî dilde „falls“ gibidir: koşulu nazikçe sınırlar.", n: "Anlıyorum. Yine de karşı bir gerekçe yoksa kurallar herkes için aynı olmalı." },
    { s: "Frau Krämer", g: "f", t: "Ein Vorschlag: Wer mehr als vierzig Minuten pendelt, darf einen dritten Tag zu Hause bleiben, sofern in der Abteilung genug Kollegen anwesend sind. Das müssten wir allerdings schriftlich festhalten. Wer schreibt das Protokoll?", n: "Bir öneri: Kırk dakikadan fazla yol yapan, bölümde yeterli kişi olduğu sürece üçüncü bir gün evde kalabilir. Ancak bunu yazılı olarak kayda geçirmemiz gerekir. Tutanağı kim yazıyor?" },
    { me: true, id: "de-b2-d01.c3",
      o: ["Das übernehme ich. Ich fasse alles so zusammen, dass auch Kollegen, die heute fehlen, es gut verstehen können.", "Das übernehme ich. Ich fasse alles so zusammen, dass auch Kollegen, die heute fehlen, können es gut verstehen.", "Das übernehme ich. Ich fasse alles so zusammen, auch Kollegen, die heute fehlen, es gut verstehen können."], a: 0,
      why: { 1: "„dass“ yan cümle açar: çekimli fiil (können) cümlenin sonuna gider: „… dass auch Kollegen … es gut verstehen können“. Türkçede fiil sonda olduğu için bunu yapabilirsin, ama Almancada ana cümle sırasını burada kullanma.", 2: "Türkçedeki „öyle … ki“ yapısında olduğu gibi Almancada da sonucu bağlayan bir söz gerekir: „so … dass“. „dass“ eksik kaldığı için ikinci kısım cümleye bağlanmıyor." },
      e: "„so … dass“ ile bir sonuç veya derece anlatırsın: *so zusammenfassen, dass …* Önce „so“ ana cümlede durur, sonra virgül ve „dass“ ile yan cümle gelir; fiil sonda.", n: "Bunu ben üstlenirim. Her şeyi, bugün gelmeyen meslektaşlar da iyi anlayabilecek şekilde özetlerim." },
    { s: "Frau Krämer", g: "f", t: "Dann halten wir fest: zwei feste Tage im Büro, ein dritter Tag bei langem Arbeitsweg, und Herr Berger schreibt das Protokoll. Vielen Dank.", n: "O hâlde şunu kayda geçiriyoruz: ofiste iki sabit gün, uzun iş yolunda üçüncü bir gün ve tutanağı Bay Berger yazıyor. Teşekkürler." }
  ],
  questions: [
    { id: "de-b2-d01.1", t: "mc", q: "Bayan Krämer, iki günlük kuralın istisnasını kimler için mümkün görüyor?", o: ["Evde kalan çocuğu olanlar için.", "Ekipte yeni olanlar için.", "Yirmi dakikadan fazla yol gidenler için, her koşulda.", "İşe kırk dakikadan fazla yol gidenler için, bölümde yeterli kişi varsa."], a: 3,
      why: { 0: "Çocuklardan söz edilmiyor; ölçüt işe gidiş süresi.", 1: "Yeni çalışanlardan söz edilmiyor.", 2: "Sınır yirmi değil, kırk dakika; bir de bölümün dolu olması koşulu var." },
      e: "„Wer mehr als vierzig Minuten pendelt, darf einen dritten Tag zu Hause bleiben, sofern in der Abteilung genug Kollegen anwesend sind.“ Yani kırk dakikadan fazla yol gidenlere üçüncü gün tanınıyor, bir koşulla: bu bir „Ausnahme von der Zwei-Tage-Regel“ (iki günlük kuraldan istisna)." },
    { id: "de-b2-d01.2", t: "gap", q: "Herr Voss fährt über eine Stunde, ___ Frau Lorenz nur zehn Minuten braucht.", a: ["während", "wohingegen"],
      wrong: { "weil": "„weil“ sebep bildirir; burada iki yol süresi **karşılaştırılıyor**, biri diğerinin sebebi değil.", "bevor": "„bevor“ zamansal sıra bildirir (önce–sonra); burada karşıtlık var.", "obwohl": "„obwohl“ beklenmeyen bir durum bildirir; iki kişinin yolculuğu arasındaki karşıtlık için „während“ veya „wohingegen“ gerekir." },
      e: "„während“ (ve daha resmî „wohingegen“) burada **zaman değil, karşıtlık** bildirir: biri bir saat, öteki on dakika. Yan cümle: fiil (braucht) sonda." },
    { id: "de-b2-d01.3", t: "mc", q: "Üçüncü gün evde çalışmak için hangi koşullar gerekli?", o: ["Her istediğinde.", "Yalnızca bütün meslektaşlar onaylarsa.", "Uzun yol gitmek ve bölümde yeterli kişinin bulunması.", "Yalnızca havanın kötü olduğu günlerde."], a: 2,
      why: { 0: "Öyle değil: iki koşul var, istemek yetmez.", 1: "Bütün meslektaşların onayı istenmiyor.", 3: "Hava durumundan söz edilmiyor." },
      e: "„sofern in der Abteilung genug Kollegen anwesend sind“, uzun işe gidiş süresinin yanındaki ikinci koşuldur." },
    { id: "de-b2-d01.4", t: "mc", q: "Toplantı tutanağını kim yazacak?", o: ["Bayan Krämer.", "Bay Voss.", "Bay Berger.", "Bayan Lorenz."], a: 2,
      why: { 0: "Bayan Krämer toplantıyı yönetiyor; yalnızca tutanağı kimin yazacağını soruyor.", 1: "Bay Voss yalnızca uzun yolundan söz ediyor.", 3: "Bayan Lorenz konuşmaya hiç katılmıyor, sadece karşılaştırma için anılıyor." },
      e: "Bay Berger „Das übernehme ich.“ diyor; Bayan Krämer sonunda onaylıyor: „Herr Berger schreibt das Protokoll.“" }
  ]
});

K.addDialog('de-b2-d02', {
  level: 'B2', scene: 'arbeit', title: 'Fehler im Quartalsbericht', sub: 'Üç aylık raporda hata: amire açıklama',
  role: 'Çalışan (Mia Kern)', roleG: 'f',
  lines: [
    { s: "Herr Hartmann", g: "m", t: "Frau Kern, im Quartalsbericht, den Sie gestern verschickt haben, steht eine falsche Zahl. Der Kunde hat sich schon beschwert. Wie erklären Sie das?", n: "Bayan Kern, dün gönderdiğiniz üç aylık raporda yanlış bir rakam var. Müşteri şimdiden şikâyet etti. Bunu nasıl açıklıyorsunuz?" },
    { me: true, id: "de-b2-d02.c1",
      o: ["Das war nicht mein Fehler. Die Tabelle war schlecht, deshalb ich habe eine falsche Zahl genommen.", "Es tut mir leid. Ich habe die Zahl aus einer älteren Tabelle übernommen, ohne dass ich sie noch einmal zu prüfen.", "Ich bedauere den Fehler sehr. Ich habe die Zahl aus einer älteren Tabelle übernommen, ohne sie noch einmal zu prüfen."], a: 2,
      why: { 0: "Önce hatayı başkasına yüklemek, amirle konuşurken zayıf bir izlenim bırakır. Dil açısından da yanlış: „deshalb“ zarf olarak 1. sırada, fiil hemen arkasında gelir: „deshalb habe ich eine falsche Zahl genommen“.", 1: "„ohne“ iki biçimde kurulur: „ohne … zu + Infinitiv“ (özne aynıysa) ya da „ohne dass + yan cümle“. İkisini karıştıramazsın: ✗ ohne dass ich … zu prüfen. Özne aynı olduğu için „ohne sie … zu prüfen“ daha doğaldır." },
      e: "Resmî bir hata açıklamasında kısa bir üzüntü ifadesi (*Ich bedauere …*), ne olduğunun açık anlatımı ve kendi payını kabul eden bir cümle iyidir. „ohne … zu + Infinitiv“ özne aynıyken kullanılır; bu yapı B1’deki „um … zu“ gibidir.", n: "Hatadan dolayı çok üzgünüm. Rakamı eski bir tablodan aldım, bir kez daha kontrol etmeden." },
    { s: "Herr Hartmann", g: "m", t: "Das kommt vor. Allerdings erwarte ich, dass wir solche Fehler künftig vermeiden. Wie wollen Sie das verhindern?", n: "Olabiliyor. Yine de bu tür hatalardan gelecekte kaçınmamızı bekliyorum. Bunu nasıl önleyeceksiniz?" },
    { me: true, id: "de-b2-d02.c2",
      o: ["Ich gebe zu, dass ich habe die Zahlen nicht geprüft. Künftig lasse ich jeden Bericht von einer Kollegin gegenlesen, bevor ich ihn verschicke.", "Ich gebe zu, die Zahlen nicht prüfen zu haben. Künftig lasse ich jeden Bericht von einer Kollegin gegenlesen, bevor ich ihn verschicke.", "Ich gebe zu, die Zahlen nicht geprüft zu haben. Künftig lasse ich jeden Bericht gegenlesen."], a: 2,
      why: { 0: "„dass“ yan cümlesinde çekimli fiil sona gider: „dass ich die Zahlen nicht geprüft habe“. Ayrıca özne her iki cümlede aynı olduğundan „zu + Infinitiv“ de mümkündür.", 1: "Geçmişte olan bir şey için (rakamları kontrol etmemiş olmak) **önceden olmuş mastar** gerekir: Partizip II + „zu haben“: „geprüft zu haben“. „prüfen zu haben“ diye bir yapı yoktur." },
      e: "Fiil geçmişi anlatıyorsa ve özne aynıysa mastar yapısı: *Ich gebe zu, die Zahlen nicht geprüft zu haben.* (= dass ich … nicht geprüft habe). Türkçedeki „kontrol etmediğimi kabul ediyorum“ (-DIğInI) yerine Almancada fiilin Partizip II’si + „zu haben“ gelir.", n: "Rakamları kontrol etmediğimi kabul ediyorum. Bundan sonra her raporu okutacağım." },
    { s: "Herr Hartmann", g: "m", t: "Gut. Dann schreiben Sie dem Kunden bitte eine Stellungnahme. Der Brief muss heute noch raus. Schaffen Sie das?", n: "İyi. O hâlde müşteriye lütfen bir açıklama yazın. Mektubun bugün çıkması gerekiyor. Yetiştirebilir misiniz?" },
    { me: true, id: "de-b2-d02.c3",
      o: ["Ja, das schaffe ich. Ich entschuldige mich darin für den Fehler und nenne die richtige Zahl, sodass der Kunde sofort weiterarbeiten kann.", "Ja, das schaffe ich. Ich entschuldige mich für den Fehler. Folglich der Kunde kann sofort weiterarbeiten.", "Ja, das schaffe ich. Ich entschuldige mich darin für den Fehler und nenne die richtige Zahl, sodass der Kunde kann sofort weiterarbeiten."], a: 0,
      why: { 1: "„folglich“ bir sonuç zarfıdır: 1. sırada durur ve çekimli fiil hemen ardından gelir („Folglich kann der Kunde …“). Mantık da yanlış: müşteri özür dilendiği için değil, **doğru rakam** verildiği için çalışmaya devam edebilir; sebep ile sonuç uyuşmuyor.", 2: "„sodass“ yan cümle açar ve fiil sona gider: „… sodass der Kunde sofort weiterarbeiten kann“." },
      e: "Resmî bir açıklama mektubunda sonucu „sodass“ ile bağlayabilirsin (fiil sonda). „darin“ burada „bu mektupta“ demektir.", n: "Evet, yetiştiririm. Mektupta hata için özür dilerim ve doğru rakamı yazarım; böylece müşteri hemen çalışmaya devam edebilir." },
    { s: "Herr Hartmann", g: "m", t: "Das reicht mir. Schicken Sie mir den Entwurf vorher, dann lese ich ihn kurz gegen.", n: "Bu bana yeter. Taslağı önceden bana gönderin, ben de kısaca gözden geçireyim." }
  ],
  questions: [
    { id: "de-b2-d02.1", t: "mc", q: "Üç aylık raporda ne ters gitti?", o: ["Rapor müşteriye çok geç ulaştı.", "Bir rakam yanlıştı; eski bir tablodan alınmıştı.", "Rapor çok uzundu.", "Müşteri raporu hiç almadı."], a: 1,
      why: { 0: "Rapor dün gönderilmiş; gecikme sorun değil.", 2: "Uzunluk konu edilmiyor.", 3: "Müşteri raporu almış ve şikâyet etmiş." },
      e: "„steht eine falsche Zahl“; cevapta da: „Ich habe die Zahl aus einer älteren Tabelle übernommen.“" },
    { id: "de-b2-d02.2", t: "gap", q: "Frau Kern gibt zu, die Zahlen nicht ___ zu haben. (prüfen)", a: ["geprüft"],
      wrong: { "prüfen": "Geçmişte olan bir şey için mastarın **önceden olmuş** biçimi gerekir: Partizip II + zu haben.", "geprüfen": "Partizip II’de -en yoktur: prüfen → ge**prüft** (düzenli fiil).", "prüft": "Partizip II’de ge- ön eki gelir: **geprüft**." },
      e: "Önceden olmuş mastar: Partizip II + *zu haben* (haben alan fiiller): *geprüft zu haben*, *gemacht zu haben*." },
    { id: "de-b2-d02.3", t: "mc", q: "Bayan Kern bundan sonra neyi farklı yapmak istiyor?", o: ["Artık rapor yazmak istemiyor.", "Raporları yalnızca pazartesi göndermek.", "Her raporu göndermeden önce bir meslektaşına okutmak.", "Her rakamı müşteriye telefonla onaylatmak."], a: 2,
      why: { 0: "Öyle bir şey söylemiyor; amacı işleyişi düzeltmek.", 1: "Sabit bir gün belirtilmiyor.", 3: "Telefonla onaydan söz edilmiyor." },
      e: "„Künftig lasse ich jeden Bericht von einer Kollegin gegenlesen, bevor ich ihn verschicke.“" },
    { id: "de-b2-d02.4", t: "mc", q: "Bugün müşteriye mutlaka ne gitmeli?", o: ["Bir indirim çeki.", "Yeni bir sözleşme.", "Bir fatura.", "Doğru rakamın yazılı olduğu bir açıklama mektubu."], a: 3,
      why: { 0: "İndirim çekinden söz edilmiyor.", 1: "Sözleşme anılmıyor.", 2: "Fatura konu değil." },
      e: "Bay Hartmann: „Dann schreiben Sie dem Kunden bitte eine Stellungnahme. Der Brief muss heute noch raus.“" }
  ]
});

K.addDialog('de-b2-d03', {
  level: 'B2', scene: 'arbeit', title: 'Antrag auf die Vier-Tage-Woche', sub: 'Dört günlük çalışma haftası için başvuru',
  role: 'Çalışan (Tom Faber)', roleG: 'm',
  lines: [
    { s: "Frau Neumann", g: "f", t: "Guten Tag, Herr Faber. Sie möchten an der Vier-Tage-Woche teilnehmen? Warum ist Ihnen das wichtig?", n: "İyi günler, Bay Faber. Dört günlük çalışma haftasına katılmak istiyorsunuz, değil mi? Bu sizin için neden önemli?" },
    { me: true, id: "de-b2-d03.c1",
      o: ["Guten Tag, Frau Neumann. Ich bin überzeugt von dass ich mit einem freien Tag produktiver bin. Außerdem möchte ich mehr Zeit für meine Weiterbildung haben.", "Guten Tag, Frau Neumann. Ich bin davon überzeugt, dass ich mit einem freien Tag produktiver zu sein. Außerdem möchte ich mehr Zeit für meine Weiterbildung haben.", "Guten Tag, Frau Neumann. Ich bin davon überzeugt, dass ich mit einem freien Tag produktiver bin. Außerdem möchte ich mehr Zeit für meine Weiterbildung haben."], a: 2,
      why: { 0: "„überzeugt von“ kalıbında dass-cümlesinden önce **da(r)-** gerekir: „davon überzeugt, dass …“. „von dass“ diye bir birleşim olmaz; edat ile „dass“ doğrudan yan yana gelmez.", 1: "„dass“ yan cümle açar ve kendi öznesi ve çekimli fiili vardır: „… dass ich … produktiver **bin**“. „zu sein“ mastarını bu yan cümlede kullanamazsın." },
      e: "İsim ve sıfat + edat yapılarında Türkçedeki „-DIğInDAn eminim“ yerine Almancada **da(r) + edat + dass**: *Ich bin davon überzeugt, dass …* „davon“ cümlenin içeriğine işaret eder, „dass“ yan cümlesi onu açar.", n: "İyi günler, Neumann Hanım. Bir boş günle daha verimli olacağıma ikna olmuş durumdayım. Ayrıca ek eğitimime daha fazla zaman ayırmak istiyorum." },
    { s: "Frau Neumann", g: "f", t: "Verständlich. Allerdings müssen wir prüfen, ob Ihre Kunden darunter leiden. Wie wollen Sie sicherstellen, dass niemand warten muss?", n: "Anlaşılır. Ancak müşterilerinizin bundan zarar görüp görmediğini incelememiz gerekiyor. Kimsenin beklemek zorunda kalmamasını nasıl sağlayacaksınız?" },
    { me: true, id: "de-b2-d03.c2",
      o: ["Ich bin dafür bereit, meine Termine so zu legen, dass immer jemand erreichbar ist. Mein Kollege hat sich außerdem bereit erklärt, mich zu vertreten.", "Ich bin bereit, meine Termine so zu legen, dass immer jemand ist erreichbar. Mein Kollege hat sich außerdem bereit erklärt, mich zu vertreten.", "Ich bin dazu bereit, meine Termine so zu legen, dass immer jemand erreichbar ist. Mein Kollege würde mich vertreten."], a: 2,
      why: { 0: "„bereit zu“ kalıbında da(r)- şekli **dazu** olur, „dafür“ değil: „Ich bin dazu bereit, … zu legen“. Edat „zu“ olur, „für“ değil.", 1: "„dass“ yan cümlesinde çekimli fiil sona gider: „dass immer jemand erreichbar **ist**“." },
      e: "„bereit zu“: *Ich bin (dazu) bereit, … zu + Infinitiv.* Zu-mastarından önce „dazu“ konabilir; çoğu zaman bu yapı „bereit sein, etwas zu tun“ diye kısaca kurulur. Edat zu’dur: dazu.", n: "Randevularımı, her zaman ulaşılabilir biri olacak şekilde ayarlamaya hazırım. Meslektaşım da bana vekâlet etmeyi kabul etti." },
    { s: "Frau Neumann", g: "f", t: "Gut. Bitte füllen Sie das Formular aus und lassen Sie es von Ihrer Teamleitung unterschreiben. Ohne Unterschrift können wir den Antrag nicht bearbeiten.", n: "İyi. Lütfen formu doldurun ve ekip liderinize imzalatın. İmza olmadan başvuruyu işleme alamayız." },
    { me: true, id: "de-b2-d03.c3",
      o: ["Das mache ich noch heute. Wie lange dauert das, sofern sind alle Unterlagen vollständig?", "Das mache ich noch heute. Wie lange dauert das, es sei denn, alle Unterlagen vollständig sind?", "Das mache ich noch heute. Wie lange dauert das, sofern alle Unterlagen vollständig sind?"], a: 2,
      why: { 0: "„sofern“ yan cümle açar ve çekimli fiil sona gider: „sofern alle Unterlagen vollständig **sind**“. Fiili öne almak yanlış olur.", 1: "„es sei denn“ bir **istisna** bildirir (-madıkça): „Es dauert zwei Wochen, es sei denn, …“. Burada ise bir koşul soruluyor; üstelik fiil sonda değil. „sofern“ burada doğru." },
      e: "„sofern“ resmî yazı ve konuşmada „falls“ yerine kullanılır: *sofern alle Unterlagen vollständig sind*. Yan cümle virgülle ayrılır, fiil sondadır.", n: "Bunu bugün yaparım. Tüm belgeler tam olduğu takdirde bu ne kadar sürer?" },
    { s: "Frau Neumann", g: "f", t: "Etwa zwei Wochen. Sofern Ihre Teamleitung zustimmt, bekommen Sie danach eine schriftliche Bestätigung. Meistens geht es schneller, als man denkt.", n: "Yaklaşık iki hafta. Ekip liderinizin onayı varsa ardından yazılı bir onay alırsınız. Çoğu zaman sanıldığından daha hızlı olur." }
  ],
  questions: [
    { id: "de-b2-d03.1", t: "mc", q: "Bay Faber neden haftada bir gün fazladan izin istiyor?", o: ["Maaşından memnun değil.", "Ekip değiştirmek istiyor.", "Daha fazla yıllık izin kullanmak istiyor.", "Böylece daha verimli olacağını düşünüyor ve eğitimine daha çok zaman ayırmak istiyor."], a: 3,
      why: { 0: "Maaştan söz edilmiyor.", 1: "Ekip değişikliği anılmıyor.", 2: "Mesele haftada bir boş gün; yıllık izin değil." },
      e: "„Ich bin davon überzeugt, dass ich mit einem freien Tag produktiver bin. Außerdem möchte ich mehr Zeit für meine Weiterbildung haben.“" },
    { id: "de-b2-d03.2", t: "gap", q: "Ohne ___ kann der Antrag nicht bearbeitet werden.", a: ["Unterschrift"],
      wrong: { "Unterschrieb": "Bu fiilin geçmiş zaman biçimidir (unterschreiben → unterschrieb). İsim: die **Unterschrift**.", "Unterschreiben": "Bu fiil (imzalamak). İsim olarak „ohne“ edatından sonra **Unterschrift** gerekir." },
      e: "die Unterschrift, -en = imza. „ohne“ ile isim kullanılır; bir fiil gerekirse „ohne … zu + Infinitiv“ olurdu." },
    { id: "de-b2-d03.3", t: "mc", q: "Ekip yönetimi onaylarsa Bay Faber işlemden sonra ne alır?", o: ["Hemen bir izin günü.", "Maaş zammı.", "Yazılı bir onay.", "Görüşmeye bir davet."], a: 2,
      why: { 0: "Hemen izin günü verileceği söylenmiyor; önce işlem yapılıyor.", 1: "Maaş zammından söz edilmiyor.", 3: "Davetten söz edilmiyor." },
      e: "„Sofern Ihre Teamleitung zustimmt, bekommen Sie danach eine schriftliche Bestätigung.“" },
    { id: "de-b2-d03.4", t: "gap", q: "Wie lange dauert die Bearbeitung ungefähr? Etwa ___ Wochen.", a: ["zwei", "2"],
      wrong: { "drei": "Bayan Neumann „etwa zwei Wochen“ diyor.", "eine": "Bu cümlede çoğul gereklidir; ayrıca süre **iki** hafta: zwei Wochen." },
      e: "„Etwa zwei Wochen.“ Bayan Neumann süreyi cevabının başında söylüyor." }
  ]
});


/* ===== Paket P2: d04 Beratung zur Anerkennung · d05 Mieterversammlung ===== */

K.addDialog('de-b2-d04', {
  level: 'B2', scene: 'schule', title: 'Beratung zur Anerkennung des Abschlusses', sub: 'Diploma denkliği danışmanlığı',
  role: 'Ratsuchende (Elif Kaya)', roleG: 'f',
  lines: [
    { s: "Herr Bauer", g: "m", t: "Guten Tag, Frau Kaya. Sie möchten Ihren Abschluss als Bauingenieurin anerkennen lassen? Erzählen Sie mir bitte kurz, was Sie bislang unternommen haben.", n: "İyi günler Bayan Kaya. İnşaat mühendisliği diplomanızın denkliğini almak istiyorsunuz, değil mi? Lütfen kısaca şimdiye kadar neler yaptığınızı anlatın." },
    { me: true, id: "de-b2-d04.c1",
      o: ["Bislang habe ich nur meine Unterlagen gesammelt. Aufgrund die langen Wartezeiten wollte ich mich zuerst beraten lassen.", "Bislang habe ich nur meine Unterlagen gesammelt. Aufgrund der langen Wartezeiten wollte ich mich zuerst beraten lassen.", "Bisher ich habe nur meine Unterlagen gesammelt. Aufgrund der langen Wartezeiten wollte ich mich zuerst beraten lassen."], a: 1,
      why: { 0: "„aufgrund“ Genitiv ister: „der langen Wartezeiten“. „die langen“ Nominativ/Akkusativ biçimidir; yazı dilinde yanlış sayılır.", 2: "„bisher“ zarf olarak cümle başında 1. sırayı doldurur; çekimli fiil hemen 2. sırada gelir: ✗ Bisher ich habe … ✓ Bisher habe ich …" },
      e: "„bislang“ ve „bisher“ şimdiye kadarki durumu anlatır; cümle başında fiil 2. sıradadır. „aufgrund + Genitiv“ sebebi bildirir: Türkçede „uzun bekleme süreleri nedeniyle“.", n: "Şimdiye kadar yalnızca belgelerimi topladım. Uzun bekleme süreleri nedeniyle önce danışmanlık almak istedim." },
    { s: "Herr Bauer", g: "m", t: "Das war klug. Wir prüfen zunächst anhand Ihres Zeugnisses, ob Ihr Beruf reglementiert ist. Haben Sie das Zeugnis schon übersetzen lassen?", n: "Akıllıca olmuş. Önce diplomanıza bakarak mesleğinizin düzenlenmiş meslekler arasında olup olmadığını inceliyoruz. Diplomanızı çevirttiniz mi?" },
    { me: true, id: "de-b2-d04.c2",
      o: ["Noch nicht. Innerhalb von zwei Wochen kann ich einen vereidigten Übersetzer finden. Wie teuer ist das ungefähr?", "Noch nicht. Innerhalb zwei Wochen kann ich einen vereidigten Übersetzer finden. Wie teuer wäre das ungefähr?", "Noch nicht. Seit zwei Wochen kann ich einen vereidigten Übersetzer finden. Wie teuer wäre das ungefähr?"], a: 0,
      why: { 1: "Sayıdan önce artikel yoksa „innerhalb“ sonrası **von + Dativ** gerekir: „innerhalb von zwei Wochen“.", 2: "„seit“ geçmişten beri süren bir durumu bildirir (-den beri). “İki hafta içinde” gelecek için „innerhalb von“ ya da „binnen“ gerekir." },
      e: "Süre sınırı için „innerhalb von + sayı“ ya da artikelli Genitiv: „innerhalb der nächsten zwei Wochen“. *vereidigter Übersetzer* = yeminli tercüman; *beglaubigte Übersetzung* = onaylı çeviri.", n: "Henüz değil. İki hafta içinde yeminli bir çevirmen bulabilirim. Bu yaklaşık ne kadara mal olur?" },
    { s: "Herr Bauer", g: "m", t: "Rechnen Sie mit mehreren hundert Euro. Falls Ihnen nach der Prüfung Kenntnisse fehlen, besuchen Sie eine Anpassungsqualifizierung, die teilweise gefördert wird. Wer das Angebot nutzt, muss meist nicht lange warten.", n: "Birkaç yüz avro hesaplayın. İncelemeden sonra bazı bilgileriniz eksik çıkarsa kısmen desteklenen bir uyum eğitimine katılırsınız. Bu imkânı kullananlar çoğu zaman uzun beklemez." },
    { me: true, id: "de-b2-d04.c3",
      o: ["Vielen Dank. Das ist alles, das ich im Moment wissen wollte. Wo kann ich den Antrag stellen?", "Vielen Dank. Das ist alles, wer ich im Moment wissen wollte. Wo kann ich den Antrag stellen?", "Vielen Dank. Das ist alles, was ich im Moment wissen wollte. Wo kann ich den Antrag stellen?"], a: 2,
      why: { 0: "„alles“ gibi belirsiz sözcüklerden sonra Relativpronomen **was** gelir; „das“ yanlıştır.", 1: "„wer“ kişi için kullanılır; burada „her şey“ (alles) var, bu yüzden „was“." },
      e: "„alles, nichts, etwas, das Beste“ + **was**: *Das ist alles, was ich wissen wollte.* Türkçede: “bilmek istediğim her şey bu”.", n: "Çok teşekkürler. Şu an bilmek istediğim her şey bu kadar. Başvuruyu nerede yapabilirim?" },
    { s: "Herr Bauer", g: "m", t: "Bei der zuständigen Stelle Ihrer Stadt. Einen Termin bekommen Sie meist innerhalb weniger Tage. Wer alle Unterlagen vollständig mitbringt, spart viel Zeit. Die Liste schicke ich Ihnen per E-Mail.", n: "Şehrinizdeki yetkili kurumda. Randevuyu çoğu zaman birkaç gün içinde alırsınız. Bütün belgeleri eksiksiz getiren çok zaman kazanır. Listeyi size e-postayla gönderirim." }
  ],
  questions: [
    { id: "de-b2-d04.1", t: "mc", q: "Bayan Kaya şimdiye kadar ne yaptı?", o: ["Başvuruyu çoktan yaptı.", "Diplomasını çevirtti.", "Yalnızca belgelerini topladı.", "Bir uyum eğitimine katıldı."], a: 2,
      why: { 0: "Başvuru henüz yapılmadı; nerede yapılacağını soruyor.", 1: "Çeviri daha yapılmadı: „Noch nicht.“", 3: "Eğitime katılması için önce incelemenin bitmesi gerekir." },
      e: "„Bislang habe ich nur meine Unterlagen gesammelt.“ – şimdiye kadar yalnızca belge topladı." },
    { id: "de-b2-d04.2", t: "mc", q: "Bay Bauer önce neye bakacaklarını söylüyor?", o: ["Mesleğin düzenlenmiş meslekler arasında olup olmadığına.", "Bayan Kaya’nın Almanca seviyesine.", "Bayan Kaya’nın iş tecrübesine.", "Bayan Kaya’nın bir iş teklifi olup olmadığına."], a: 0,
      why: { 1: "Almanca seviyesi bu aşamada söz konusu değil.", 2: "İş tecrübesinden söz edilmiyor.", 3: "İş teklifinden söz edilmiyor." },
      e: "„Wir prüfen zunächst anhand Ihres Zeugnisses, ob Ihr Beruf reglementiert ist.“" },
    { id: "de-b2-d04.3", t: "gap", q: "Einen Termin bekommen Sie meist ___ weniger Tage.", a: ["innerhalb", "binnen"],
      wrong: { "seit": "*seit* süren bir durumu bildirir (-den beri); burada süre sınırı var.", "vor": "*vor* geçmişte bir noktayı bildirir; burada gelecekte süre içinde randevu alınacak." },
      e: "*innerhalb + Genitiv* (ya da *binnen + Dativ*): *innerhalb weniger Tage* (birkaç gün içinde). Sayı olmadan *weniger Tage* de Genitiv’dir." },
    { id: "de-b2-d04.4", t: "mc", q: "Uyum eğitimi için ne söyleniyor?", o: ["Ücretsizdir ve zorunludur.", "Çok pahalıdır ve desteklenmez.", "Yalnızca mühendisler katılabilir.", "Kısmen desteklenir; bilgi eksikse katılınır."], a: 3,
      why: { 0: "Zorunluluk söylenmiyor; eksik bilgi varsa bir seçenek.", 1: "Kısmen destekleniyor.", 2: "Meslek kısıtlaması yok." },
      e: "„Falls Ihnen … Kenntnisse fehlen, besuchen Sie eine Anpassungsqualifizierung, die teilweise gefördert wird.“" }
  ]
});

K.addDialog('de-b2-d05', {
  level: 'B2', scene: 'wohnung', title: 'Mieterversammlung: Sanierung des Hauses', sub: 'Kiracılar toplantısı: binanın yenilenmesi',
  role: 'Mieterin (Nina Keller)', roleG: 'f',
  lines: [
    { s: "Frau Hoffmann", g: "f", t: "Guten Abend zusammen. Die Fenster werden innerhalb von zwei Jahren erneuert. Frau Keller, Sie hatten sich bezüglich der Lärmbelastung gemeldet?", n: "Herkese iyi akşamlar. Pencereler iki yıl içinde yenilenecek. Bayan Keller, gürültü yükü konusunda bize yazmıştınız, değil mi?" },
    { me: true, id: "de-b2-d05.c1",
      o: ["Ja. Angesichts die lange Bauzeit möchte ich wissen, ob die Arbeiten nur werktags stattfinden.", "Ja. Angesichts der langen Bauzeit möchte ich wissen, ob die Arbeiten nur werktags stattfinden und ob sinkt die Miete währenddessen.", "Ja. Angesichts der langen Bauzeit möchte ich wissen, ob die Arbeiten nur werktags stattfinden und ob die Miete währenddessen sinkt."], a: 2,
      why: { 0: "„angesichts“ Genitiv ister: „der langen Bauzeit“. „die lange Bauzeit“ Nominativ/Akkusativ’dir; yazı ve resmî konuşmada yanlış.", 1: "„ob“ bir yan cümle açar; çekimli fiil sonda durur: „ob die Miete währenddessen sinkt“, „ob sinkt die Miete“ değil." },
      e: "„angesichts + Genitiv“ = karşısında / göz önüne alındığında. „ob“ ile dolaylı soru: fiil sonda.", n: "Evet. Uzun inşaat süresi göz önüne alındığında, çalışmaların yalnızca hafta içi yapılıp yapılmayacağını ve bu sürede kiranın düşüp düşmeyeceğini öğrenmek istiyorum." },
    { s: "Frau Hoffmann", g: "f", t: "Gearbeitet wird nur werktags von sieben bis siebzehn Uhr. Ob die Miete sinkt, hängt von der Dauer und der Art der Beeinträchtigung ab. Wer sich dazu beraten lassen möchte, kann sich an den Mieterverein wenden.", n: "Çalışma yalnızca iş günlerinde (pazartesi–cumartesi) yedi ile on yedi arasında yapılacak. Kiranın düşüp düşmeyeceği, rahatsızlığın süresine ve türüne bağlı. Bu konuda danışmak isteyen kiracı derneğine başvurabilir." },
    { me: true, id: "de-b2-d05.c2",
      o: ["Angesichts der steigende Heizkosten begrüße ich die Sanierung. Wird die Miete danach erhöht?", "Angesichts der steigenden Heizkosten begrüße ich die Sanierung. Wird die Miete danach erhöht?", "Angesichts der gestiegenden Heizkosten begrüße ich die Sanierung. Wird die Miete danach erhöht?"], a: 1,
      why: { 0: "*angesichts* Genitiv ister; çoğul Genitiv’de artikel *der*, Partizip I sıfatı **-en** alır: *der steigenden Heizkosten*.", 2: "„gestiegenden“ diye bir biçim yok: Partizip I = steigend-, Partizip II = gestiegen-. İkisini karıştırma." },
      e: "*angesichts + Genitiv*; Partizip I (*steigend*) artan bir gelişmeyi anlatır: *der steigenden Heizkosten*.", n: "Artan ısınma giderleri karşısında yenilemeyi olumlu karşılıyorum. Yenilemeden sonra kira artırılacak mı?" },
    { s: "Frau Hoffmann", g: "f", t: "Eine Erhöhung ist möglich, aber nur in gesetzlichen Grenzen. Genaue Zahlen nennen wir, sobald die Kosten feststehen. Haben Sie noch einen Wunsch für die Versammlung?", n: "Artış mümkün, ama yalnızca yasal sınırlar içinde. Kesin rakamları maliyetler belli olur olmaz açıklarız. Toplantı için başka bir isteğiniz var mı?" },
    { me: true, id: "de-b2-d05.c3",
      o: ["Ja. Ich bitte um die Zusendung der Berechnung vor der Abstimmung, damit wir sie in Ruhe prüfen können.", "Ja. Ich bitte um die Zusendung die Berechnung vor der Abstimmung, damit wir sie in Ruhe prüfen können.", "Ja. Ich bitte um die Zusendung der Berechnung vor der Abstimmung, damit wir sie in Ruhe zu prüfen."], a: 0,
      why: { 1: "„die Zusendung“ isminden sonra nesne **Genitiv** olur: „der Berechnung“. „die Berechnung“ doğrudan eklenemez.", 2: "„damit“ yan cümle açar ve çekimli fiil gerekir: „damit wir sie prüfen können“. „zu prüfen“ mastarı burada yanlıştır." },
      e: "Nominalisierung: *zusenden → die Zusendung*; nesne Genitiv ile bağlanır. *damit* amaç cümlesidir (…-mek için); fiil sonda.", n: "Evet. Oylamadan önce hesabın bize gönderilmesini rica ediyorum; böylece rahatça inceleyebiliriz." },
    { s: "Frau Hoffmann", g: "f", t: "Gut, das nehmen wir ins Protokoll auf. Das Protokoll bekommen alle Haushalte im Laufe der nächsten Woche. Vielen Dank für Ihre Mitarbeit.", n: "Güzel, bunu tutanağa alıyoruz. Tutanağı bütün haneler önümüzdeki hafta içinde alacak. Katkınız için teşekkürler." }
  ],
  questions: [
    { id: "de-b2-d05.1", t: "mc", q: "Yenileme çalışmaları ne zaman yapılacak?", o: ["Her gün ve gece boyunca.", "Yalnızca pazar günleri.", "İş günlerinde (pazartesi–cumartesi) yedi ile on yedi arasında.", "Yalnızca yazın."], a: 2,
      why: { 0: "Gece çalışmasından söz edilmiyor.", 1: "*werktags* pazartesi–cumartesi demektir; pazar günü çalışılmıyor.", 3: "Mevsim kısıtlaması yok; pencereler iki yıl içinde yenilenecek." },
      e: "„Gearbeitet wird nur werktags von sieben bis siebzehn Uhr.“ – *werktags* = iş günlerinde (pazartesi–cumartesi); pazar ve resmî tatiller hariç." },
    { id: "de-b2-d05.2", t: "mc", q: "Kira indirimi (Mietminderung) neye bağlı?", o: ["Kiracının gelirine.", "Ev sahibinin kararına.", "Binanın yaşına.", "Rahatsızlığın süresine ve türüne."], a: 3,
      why: { 0: "Gelirden söz edilmiyor.", 1: "Bir karardan değil, objektif ölçütlerden söz ediliyor.", 2: "Binanın yaşı anılmıyor." },
      e: "„Ob die Miete sinkt, hängt von der Dauer und der Art der Beeinträchtigung ab.“" },
    { id: "de-b2-d05.3", t: "gap", q: "Wer sich beraten lassen möchte, kann sich an den ___ wenden.", a: ["Mieterverein"],
      wrong: { "Vermieter": "*Vermieter* kiralayandır, yani karşı taraf; bağımsız danışmanlık için *Mieterverein* (kiracı derneği).", "Mietverein": "Doğru birleşik isim *Mieterverein*: *Mieter* (kiracılar) + *Verein* (dernek)." },
      e: "*der Mieterverein* = kiracı derneği; kiracılara danışmanlık verir. *sich wenden an + Akkusativ*." },
    { id: "de-b2-d05.4", t: "mc", q: "Bayan Keller oylamadan önce ne istiyor?", o: ["Toplantının ertelenmesini.", "Hesabın önceden kendilerine gönderilmesini.", "Kiranın hemen düşürülmesini.", "Pencerelerin değiştirilmemesini."], a: 1,
      why: { 0: "Erteleme istemiyor.", 2: "Kira indirimi isteği yok; rakamları görmek istiyor.", 3: "Pencerelere itiraz etmiyor." },
      e: "„Ich bitte um die Zusendung der Berechnung vor der Abstimmung, damit wir sie in Ruhe prüfen können.“" }
  ]
});

})(window.KOPRU);
