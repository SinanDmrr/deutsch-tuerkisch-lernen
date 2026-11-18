/* Türkisch A1 – Alltagsdialoge für Deutschsprechende (Fragen und Erklärungen auf Deutsch)
 * Feste IDs (tr-a1-d01 …, Fragen tr-a1-d01.q1 …): nie ändern, nie wiederverwenden.
 * Alle Dialoge sind selbst geschrieben.
 */
(function (K) {

K.addDialog('tr-a1-d01', {
  level: 'A1', title: 'Sich vorstellen', sub: 'Tanışma',
  lines: [
    { s: "Elif", g: "f", t: "Merhaba! Ben Elif. Senin adın ne?", n: "Hallo! Ich bin Elif. Wie heißt du?" },
    { s: "Jonas", g: "m", t: "Merhaba Elif, ben Jonas. Memnun oldum.", n: "Hallo Elif, ich bin Jonas. Freut mich." },
    { s: "Elif", g: "f", t: "Ben de memnun oldum. Nerelisin?", n: "Freut mich auch. Woher kommst du?" },
    { s: "Jonas", g: "m", t: "Almanyalıyım, Hamburg'danım. Sen?", n: "Ich komme aus Deutschland, aus Hamburg. Und du?" },
    { s: "Elif", g: "f", t: "Ben İzmirliyim ama İstanbul'da yaşıyorum. Türkçen çok iyi!", n: "Ich bin aus Izmir, wohne aber in Istanbul. Dein Türkisch ist sehr gut!" },
    { s: "Jonas", g: "m", t: "Sağ ol, ama daha yeni başladım.", n: "Danke, aber ich habe gerade erst angefangen." },
    { s: "Elif", g: "f", t: "Ne iş yapıyorsun?", n: "Was machst du beruflich?" },
    { s: "Jonas", g: "m", t: "Mühendisim. Sen öğrenci misin?", n: "Ich bin Ingenieur. Bist du Studentin?" },
    { s: "Elif", g: "f", t: "Evet, tıp okuyorum.", n: "Ja, ich studiere Medizin." },
    { s: "Jonas", g: "m", t: "Harika! Görüşmek üzere, Elif.", n: "Super! Bis bald, Elif." }
  ],
  questions: [
    { id: "tr-a1-d01.q1", t: "mc", q: "Woher stammt Elif?", o: ["aus Istanbul", "aus Izmir", "aus Hamburg"], a: 1,
      why: { 0: "In Istanbul **wohnt** sie nur („İstanbul'da yaşıyorum“). Sie sagt aber „İzmirliyim“ – sie stammt aus Izmir.", 2: "Aus Hamburg kommt Jonas („Hamburg'danım“)." },
      e: "„İzmirliyim“ = Ich bin aus Izmir. Mit **-li/-lı/-lu/-lü** sagt man, woher jemand stammt: İzmirli, Almanyalı, Berlinli." },
    { id: "tr-a1-d01.q2", t: "mc", q: "Wie antwortest du auf „Memnun oldum“?", o: ["Ben de memnun oldum.", "Güle güle.", "Afiyet olsun."], a: 0,
      why: { 1: "„Güle güle“ sagt man zu jemandem, der weggeht – nicht beim Kennenlernen.", 2: "„Afiyet olsun“ heißt „Guten Appetit“." },
      e: "„Ben de memnun oldum“ = Freut mich auch. **de** (auch) wird getrennt geschrieben." },
    { id: "tr-a1-d01.q3", t: "listen", say: "Ne iş yapıyorsun?", q: "Was hörst du?", o: ["Ne yapıyorsun?", "Ne iş yapıyorsun?", "Ne zaman yapıyorsun?"], a: 1,
      why: { 0: "Hier fehlt das Wort „iş“. „Ne yapıyorsun?“ heißt nur „Was machst du (gerade)?“.", 2: "„ne zaman“ heißt „wann“ – das kam im Satz nicht vor." },
      e: "„Ne iş yapıyorsun?“ – wörtlich „Welche Arbeit machst du?“ – ist die typische Frage nach dem Beruf." },
    { id: "tr-a1-d01.q4", t: "mc", q: "Was macht Elif?", o: ["Sie ist Ingenieurin.", "Sie studiert Medizin.", "Sie ist Lehrerin."], a: 1,
      why: { 0: "Ingenieur (mühendis) ist Jonas.", 2: "Von einer Lehrerin (öğretmen) ist keine Rede." },
      e: "„Tıp okuyorum“ – **okumak** heißt nicht nur „lesen“, sondern auch „studieren“." }
  ]
});

K.addDialog('tr-a1-d02', {
  level: 'A1', title: 'Beim Bäcker', sub: 'Fırında',
  lines: [
    { s: "Fırıncı", g: "m", t: "Günaydın! Buyurun, ne istersiniz?", n: "Guten Morgen! Bitte, was möchten Sie?" },
    { s: "Müşteri", g: "f", t: "Günaydın. İki ekmek, lütfen. Ekmekler taze mi?", n: "Guten Morgen. Zwei Brote, bitte. Ist das Brot frisch?" },
    { s: "Fırıncı", g: "m", t: "Tabii, daha yeni çıktı, sıcacık!", n: "Natürlich, gerade aus dem Ofen, noch ganz warm!" },
    { s: "Müşteri", g: "f", t: "Çok güzel. Simit de var mı?", n: "Sehr schön. Gibt es auch Simit?" },
    { s: "Fırıncı", g: "m", t: "Var. Kaç tane istersiniz?", n: "Ja. Wie viele möchten Sie?" },
    { s: "Müşteri", g: "f", t: "Üç tane, lütfen. Hepsi ne kadar?", n: "Drei Stück, bitte. Was macht das zusammen?" },
    { s: "Fırıncı", g: "m", t: "Toplam yüz on lira.", n: "Zusammen hundertzehn Lira." },
    { s: "Müşteri", g: "f", t: "Buyurun. Kolay gelsin!", n: "Bitte schön. Frohes Schaffen!" },
    { s: "Fırıncı", g: "m", t: "Sağ olun, iyi günler!", n: "Danke, einen schönen Tag noch!" }
  ],
  questions: [
    { id: "tr-a1-d02.q1", t: "mc", q: "Was kauft die Kundin?", o: ["ein Brot und zwei Simit", "zwei Brote und drei Simit", "drei Brote und zwei Simit"], a: 1,
      why: { 0: "Sie sagt „İki ekmek“ – also zwei Brote, nicht eins.", 2: "Genau umgekehrt: iki ekmek (zwei Brote) und üç tane (drei Simit)." },
      e: "**iki ekmek** = zwei Brote, **üç tane** (simit) = drei Stück. Nach Zahlen steht kein Plural: iki ekmek, nicht „iki ekmekler“." },
    { id: "tr-a1-d02.q2", t: "mc", q: "Was bedeutet „Kolay gelsin!“?", o: ["Guten Appetit!", "Frohes Schaffen! (Gutes Gelingen bei der Arbeit)", "Kommen Sie bald wieder!"], a: 1,
      why: { 0: "„Guten Appetit“ heißt „Afiyet olsun“.", 2: "Das wäre z. B. „Yine bekleriz“ – und das sagt eher der Verkäufer." },
      e: "„Kolay gelsin“ (wörtlich „Möge es leicht gehen“) sagt man zu jemandem, der gerade arbeitet – Verkäufern, Handwerkern, Kollegen. Eine sehr typische, freundliche Floskel." },
    { id: "tr-a1-d02.q3", t: "listen", say: "Üç tane, lütfen.", q: "Was hörst du?", o: ["Üç tane, lütfen.", "İki tane, lütfen.", "Üç tabak, lütfen."], a: 0,
      why: { 1: "„iki“ heißt zwei. Gehört hast du „üç“ (drei) – achte auf das ü am Anfang.", 2: "„tabak“ heißt Teller. Gemeint ist „tane“ (Stück)." },
      e: "**tane** = Stück. Beim Einkaufen sagt man Zahl + tane: bir tane, üç tane." },
    { id: "tr-a1-d02.q4", t: "mc", q: "Wie fragt die Kundin nach dem Gesamtpreis?", o: ["Hepsi ne kadar?", "Hepsi ne zaman?", "Hepsi nerede?"], a: 0,
      why: { 1: "„ne zaman“ heißt „wann“.", 2: "„nerede“ heißt „wo“." },
      e: "**ne kadar** = wie viel; **hepsi** = alles (zusammen). „Hepsi ne kadar?“ = Was macht das zusammen?" }
  ]
});

K.addDialog('tr-a1-d03', {
  level: 'A1', title: 'Im Restaurant bestellen', sub: 'Lokantada',
  lines: [
    { s: "Garson", g: "m", t: "Hoş geldiniz! Kaç kişisiniz?", n: "Willkommen! Wie viele Personen sind Sie?" },
    { s: "Lena", g: "f", t: "Hoş bulduk. İki kişiyiz.", n: "Danke. Wir sind zu zweit." },
    { s: "Garson", g: "m", t: "Şu masaya buyurun. Menü burada.", n: "Bitte, an diesen Tisch. Hier ist die Speisekarte." },
    { s: "Lena", g: "f", t: "Teşekkürler. Günün çorbası ne?", n: "Danke. Was ist die Tagessuppe?" },
    { s: "Garson", g: "m", t: "Mercimek çorbası. Ana yemek olarak da tavuk şiş öneririm.", n: "Linsensuppe. Als Hauptgericht empfehle ich Hähnchenspieß." },
    { s: "Lena", g: "f", t: "Tamam, iki mercimek çorbası ve bir tavuk şiş alalım.", n: "Gut, dann nehmen wir zwei Linsensuppen und einen Hähnchenspieß." },
    { s: "Garson", g: "m", t: "İçecek olarak ne alırsınız?", n: "Was möchten Sie trinken?" },
    { s: "Lena", g: "f", t: "Bir ayran ve bir şişe su, lütfen.", n: "Einen Ayran und eine Flasche Wasser, bitte." },
    { s: "Garson", g: "m", t: "Hemen geliyor. Afiyet olsun!", n: "Kommt sofort. Guten Appetit!" },
    { s: "Lena", g: "f", t: "Pardon, hesabı alabilir miyiz?", n: "Entschuldigung, können wir bitte zahlen?" }
  ],
  questions: [
    { id: "tr-a1-d03.q1", t: "mc", q: "Wie viele Personen sind am Tisch?", o: ["eine", "zwei", "drei"], a: 1,
      why: { 0: "Lena sagt „İki kişiyiz“ – iki = zwei.", 2: "Drei (üç) kommt nicht vor – Lena sagt „İki kişiyiz“." },
      e: "„İki kişiyiz“ = Wir sind zwei Personen. kişi (Person) + -yiz (wir sind)." },
    { id: "tr-a1-d03.q2", t: "mc", q: "Was antwortet man als Gast auf „Hoş geldiniz!“?", o: ["Hoş bulduk.", "Hoş geldiniz.", "Güle güle."], a: 0,
      why: { 1: "„Hoş geldiniz“ sagt nur der Gastgeber – man gibt es nicht einfach zurück.", 2: "„Güle güle“ sagt man beim Abschied zu jemandem, der geht." },
      e: "Die feste Antwort ist **„Hoş bulduk“** (wörtlich: „Wir haben es angenehm vorgefunden“). Im Deutschen sagt man einfach „Danke“." },
    { id: "tr-a1-d03.q3", t: "listen", say: "Hesabı alabilir miyiz?", q: "Was hörst du?", o: ["Hesabı alabilir miyiz?", "Hesabı alabilir miyim?", "Kebabı alabilir miyiz?"], a: 0,
      why: { 1: "Fast! Aber du hast **miyiz** gehört (können **wir**). „miyim“ hieße „kann **ich**“.", 2: "„Kebabı“ klingt ähnlich, aber Lena möchte die Rechnung (hesap), keinen Kebab." },
      e: "hesap → **hesabı**: Vor einem Vokal wird p zu b. „Hesabı alabilir miyiz?“ = Können wir bitte zahlen?" },
    { id: "tr-a1-d03.q4", t: "mc", q: "Was trinkt Lena?", o: ["Tee und Wasser", "Ayran und Wasser", "Ayran und Saft"], a: 1,
      why: { 0: "Tee (çay) bestellt sie nicht.", 2: "Ayran stimmt, aber statt Saft nimmt sie „bir şişe su“ – eine Flasche Wasser." },
      e: "„Bir ayran ve bir şişe su“ = einen Ayran und eine Flasche Wasser. Ayran ist ein salziges Joghurtgetränk." }
  ]
});

K.addDialog('tr-a1-d04', {
  level: 'A1', title: 'Nach dem Weg fragen', sub: 'Yol sormak',
  lines: [
    { s: "Turist", g: "f", t: "Affedersiniz, Galata Kulesi'ne nasıl gidebilirim?", n: "Entschuldigen Sie, wie komme ich zum Galataturm?" },
    { s: "Hasan Bey", g: "m", t: "Galata Kulesi mi? Çok yakın, yürüyerek on dakika.", n: "Zum Galataturm? Ganz nah, zehn Minuten zu Fuß." },
    { s: "Turist", g: "f", t: "Harika! Peki, hangi yöne?", n: "Super! Und in welche Richtung?" },
    { s: "Hasan Bey", g: "m", t: "Bu caddeden düz gidin, sonra ikinci sokaktan sağa dönün.", n: "Gehen Sie diese Straße geradeaus und biegen Sie dann in die zweite Straße rechts ab." },
    { s: "Turist", g: "f", t: "İkinci sokaktan sağa. Sonra?", n: "Die zweite Straße rechts. Und dann?" },
    { s: "Hasan Bey", g: "m", t: "Sonra yokuş yukarı çıkın. Kule tam karşınızda.", n: "Dann gehen Sie bergauf. Der Turm steht direkt vor Ihnen." },
    { s: "Turist", g: "f", t: "Çok teşekkür ederim!", n: "Vielen Dank!" },
    { s: "Hasan Bey", g: "m", t: "Rica ederim. İyi geziler!", n: "Gern geschehen. Viel Spaß beim Besichtigen!" }
  ],
  questions: [
    { id: "tr-a1-d04.q1", t: "mc", q: "Wie weit ist es bis zum Turm?", o: ["zehn Minuten zu Fuß", "zehn Minuten mit dem Bus", "eine Stunde zu Fuß"], a: 0,
      why: { 1: "Von einem Bus ist keine Rede. „yürüyerek“ heißt „zu Fuß“.", 2: "Er sagt „on dakika“ – zehn Minuten, keine Stunde (saat)." },
      e: "„Yürüyerek on dakika“ = zehn Minuten zu Fuß. yürümek = (zu Fuß) gehen." },
    { id: "tr-a1-d04.q2", t: "mc", q: "Wo soll die Touristin abbiegen?", o: ["in die erste Straße links", "in die zweite Straße rechts", "in die zweite Straße links"], a: 1,
      why: { 0: "Er sagt „ikinci“ (zweite), nicht „birinci“ (erste) – und „sağa“ (nach rechts).", 2: "Die zweite Straße stimmt, aber „sağa“ heißt nach **rechts**. Links wäre „sola“." },
      e: "„İkinci sokaktan sağa dönün“ = Biegen Sie in die zweite Straße rechts ab. Ordnungszahlen: birinci, ikinci, üçüncü …" },
    { id: "tr-a1-d04.q3", t: "listen", say: "Sonra sola dönün.", q: "Was hörst du?", o: ["Sonra sola dönün.", "Sonra sağa dönün.", "Sonra düz gidin."], a: 0,
      why: { 1: "„sağa“ heißt nach rechts. Gehört hast du „sola“ – nach links.", 2: "„düz gidin“ heißt „gehen Sie geradeaus“ – das Verb war aber „dönün“ (biegen Sie ab)." },
      e: "**sola** = nach links, **sağa** = nach rechts. Die Endung -a zeigt die Richtung (Dativ)." },
    { id: "tr-a1-d04.q4", t: "mc", q: "Was bedeutet „Rica ederim“ in diesem Dialog?", o: ["Bitte (ich bitte Sie um etwas)", "Gern geschehen", "Entschuldigung"], a: 1,
      why: { 0: "Wer um etwas bittet, sagt „lütfen“.", 2: "Entschuldigung heißt „Affedersiniz“ oder „Özür dilerim“." },
      e: "„Rica ederim“ ist die Antwort auf „Teşekkür ederim“ – wie unser „Gern geschehen“ oder „Bitte“." }
  ]
});

K.addDialog('tr-a1-d05', {
  level: 'A1', title: 'Mit dem Dolmuş fahren', sub: 'Dolmuşta',
  lines: [
    { s: "Yolcu", g: "f", t: "Merhaba, bu dolmuş Kadıköy'e gidiyor mu?", n: "Hallo, fährt dieser Dolmuş nach Kadıköy?" },
    { s: "Şoför", g: "m", t: "Gidiyor abla, buyurun.", n: "Ja, fährt er. Steigen Sie ein." },
    { s: "Yolcu", g: "f", t: "Ne kadar?", n: "Was kostet die Fahrt?" },
    { s: "Şoför", g: "m", t: "Otuz beş lira.", n: "Fünfunddreißig Lira." },
    { s: "Yolcu", g: "f", t: "Affedersiniz, parayı şoföre uzatır mısınız?", n: "Entschuldigung, könnten Sie das Geld zum Fahrer nach vorne reichen?" },
    { s: "Yolcu 2", g: "m", t: "Tabii, verin.", n: "Klar, geben Sie her." },
    { s: "Yolcu", g: "f", t: "Teşekkürler. Müsait bir yerde inebilir miyim?", n: "Danke. Kann ich bei der nächsten Gelegenheit aussteigen?" },
    { s: "Şoför", g: "m", t: "Tabii, köprüden sonra duruyorum. Para üstünüz de burada.", n: "Natürlich, nach der Brücke halte ich. Ihr Wechselgeld ist auch hier." },
    { s: "Yolcu", g: "f", t: "Sağ olun, iyi günler!", n: "Danke, schönen Tag noch!" }
  ],
  questions: [
    { id: "tr-a1-d05.q1", t: "mc", q: "Wohin möchte die Frau fahren?", o: ["nach Kadıköy", "nach Taksim", "zum Flughafen"], a: 0,
      why: { 1: "Taksim wird im Dialog nicht genannt.", 2: "Vom Flughafen (havalimanı) ist keine Rede." },
      e: "„Kadıköy'e“ = nach Kadıköy. Bei Eigennamen trennt ein Apostroph die Endung ab." },
    { id: "tr-a1-d05.q2", t: "mc", q: "Worum bittet sie den anderen Fahrgast?", o: ["ihr den Weg zu zeigen", "das Geld zum Fahrer nach vorne zu reichen", "ihr seinen Platz zu überlassen"], a: 1,
      why: { 0: "Nach dem Weg fragt sie nicht – sie sagt „parayı şoföre uzatır mısınız?“.", 2: "Von einem Sitzplatz (yer, koltuk) ist keine Rede." },
      e: "Im Dolmuş reicht man das Geld von hinten nach vorne durch: **parayı uzatmak** = das Geld (hin)reichen." },
    { id: "tr-a1-d05.q3", t: "listen", say: "Müsait bir yerde inebilir miyim?", q: "Was hörst du?", o: ["Müsait bir yerde inebilir miyim?", "Müsait bir yerde binebilir miyim?", "Müsait misiniz?"], a: 0,
      why: { 1: "„binmek“ heißt einsteigen. Sie will aber aus**steigen**: inebilir (von inmek).", 2: "„Müsait misiniz?“ heißt „Haben Sie Zeit?“ – eine ganz andere, viel kürzere Frage." },
      e: "„Müsait bir yerde!“ ist die typische Bitte im Dolmuş, an der nächsten passenden Stelle anzuhalten. müsait = passend, frei." },
    { id: "tr-a1-d05.q4", t: "mc", q: "Was ist „para üstü“?", o: ["das Wechselgeld", "der Fahrpreis", "das Trinkgeld"], a: 0,
      why: { 1: "Der Fahrpreis heißt „ücret“ – oder man fragt einfach „Ne kadar?“.", 2: "Trinkgeld heißt „bahşiş“." },
      e: "**para üstü** (wörtlich: „das Geld obendrauf“) = das Wechselgeld." }
  ]
});

K.addDialog('tr-a1-d06', {
  level: 'A1', title: 'Auf dem Markt', sub: 'Pazarda',
  lines: [
    { s: "Satıcı", g: "m", t: "Gel abla, gel! Domatesler çok taze!", n: "Komm her, komm her! Die Tomaten sind ganz frisch!" },
    { s: "Müşteri", g: "f", t: "Domatesin kilosu kaç lira?", n: "Was kostet das Kilo Tomaten?" },
    { s: "Satıcı", g: "m", t: "Kilosu altmış lira.", n: "Sechzig Lira das Kilo." },
    { s: "Müşteri", g: "f", t: "Çok pahalı! Elli olmaz mı?", n: "Das ist aber teuer! Geht es nicht für fünfzig?" },
    { s: "Satıcı", g: "m", t: "Senin için elli beş olsun.", n: "Für dich: fünfundfünfzig." },
    { s: "Müşteri", g: "f", t: "Tamam, iki kilo ver. Salatalık da istiyorum.", n: "Okay, gib mir zwei Kilo. Und ich möchte noch Gurken." },
    { s: "Satıcı", g: "m", t: "Salatalık da var. Kaç tane?", n: "Gurken haben wir auch. Wie viele?" },
    { s: "Müşteri", g: "f", t: "Beş tane yeter.", n: "Fünf reichen." },
    { s: "Satıcı", g: "m", t: "Hepsi yüz otuz lira. Afiyet olsun abla!", n: "Alles zusammen hundertdreißig Lira. Lass es dir schmecken!" },
    { s: "Müşteri", g: "f", t: "Sağ ol, hayırlı işler!", n: "Danke, gute Geschäfte!" }
  ],
  questions: [
    { id: "tr-a1-d06.q1", t: "mc", q: "Wie viel kostet das Kilo Tomaten am Ende?", o: ["50 Lira", "55 Lira", "60 Lira"], a: 1,
      why: { 0: "50 (elli) wollte die Kundin – der Verkäufer geht aber nur auf 55 runter.", 2: "60 (altmış) war nur der erste Preis." },
      e: "„Senin için elli beş olsun“ = Für dich soll es fünfundfünfzig sein. Auf dem Markt ist leichtes Handeln ganz normal." },
    { id: "tr-a1-d06.q2", t: "mc", q: "Wie fragt man auf dem Markt nach dem Kilopreis?", o: ["Kilosu kaç lira?", "Kaç kilo?", "Kilo nerede?"], a: 0,
      why: { 1: "„Kaç kilo?“ heißt „Wie viele Kilo?“ – das fragt eher der Verkäufer.", 2: "„nerede“ heißt „wo“ – „Kilo nerede?“ ergibt hier keinen Sinn." },
      e: "**Kilosu kaç lira?** – wörtlich „Sein Kilo kostet wie viel Lira?“. kilo + -su (Possessiv): domatesin kilosu = das Kilo Tomaten." },
    { id: "tr-a1-d06.q3", t: "listen", say: "Beş tane yeter.", q: "Was hörst du?", o: ["Beş tane yeter.", "Beş tane ver.", "Bir tane yeter."], a: 0,
      why: { 1: "„ver“ heißt „gib“. Gehört hast du „yeter“ (reicht) – mit y und zwei Silben.", 2: "„bir“ heißt eins. Gehört hast du „beş“ (fünf) – achte auf das sch am Ende." },
      e: "**yeter** = (das) reicht, genug. „Beş tane yeter“ = Fünf Stück reichen." },
    { id: "tr-a1-d06.q4", t: "mc", q: "Warum sagt der Verkäufer „abla“ zu einer fremden Frau?", o: ["Sie ist seine Schwester.", "Es ist eine freundliche, vertraute Anrede.", "Es ist eine unhöfliche Anrede."], a: 1,
      why: { 0: "abla heißt zwar „ältere Schwester“, wird aber auch für fremde Frauen benutzt.", 2: "Die Anrede klingt warm und respektvoll, überhaupt nicht unhöflich." },
      e: "Familienwörter sind im Türkischen übliche Anreden für Fremde: **abla** (für Frauen), **abi** (für Männer), **teyze** und **amca** (für Ältere)." }
  ]
});

K.addDialog('tr-a1-d07', {
  level: 'A1', title: 'Beim Arzt', sub: 'Doktorda',
  lines: [
    { s: "Doktor", g: "f", t: "Geçmiş olsun. Şikâyetiniz ne?", n: "Gute Besserung. Was fehlt Ihnen?" },
    { s: "Hasta", g: "m", t: "Üç gündür başım ağrıyor ve ateşim var.", n: "Ich habe seit drei Tagen Kopfschmerzen und Fieber." },
    { s: "Doktor", g: "f", t: "Öksürüğünüz var mı?", n: "Haben Sie Husten?" },
    { s: "Hasta", g: "m", t: "Evet, biraz öksürüyorum. Boğazım da ağrıyor.", n: "Ja, ich huste ein bisschen. Mein Hals tut auch weh." },
    { s: "Doktor", g: "f", t: "Ağzınızı açın, lütfen. Evet, grip olmuşsunuz.", n: "Machen Sie bitte den Mund auf. Ja, Sie haben eine Grippe." },
    { s: "Hasta", g: "m", t: "İlaç gerekli mi?", n: "Brauche ich Medikamente?" },
    { s: "Doktor", g: "f", t: "Size bir şurup yazıyorum. Günde üç kez için.", n: "Ich verschreibe Ihnen einen Saft. Nehmen Sie ihn dreimal täglich." },
    { s: "Hasta", g: "m", t: "İşe gidebilir miyim?", n: "Kann ich zur Arbeit gehen?" },
    { s: "Doktor", g: "f", t: "Hayır, iki gün evde dinlenin. Bol su için.", n: "Nein, ruhen Sie sich zwei Tage zu Hause aus. Trinken Sie viel Wasser." },
    { s: "Hasta", g: "m", t: "Çok teşekkür ederim.", n: "Vielen Dank." }
  ],
  questions: [
    { id: "tr-a1-d07.q1", t: "mc", q: "Seit wann hat der Patient Kopfschmerzen?", o: ["seit drei Tagen", "seit drei Wochen", "seit gestern"], a: 0,
      why: { 1: "Er sagt „üç gündür“ – gün = Tag. Woche hieße „hafta“.", 2: "Gestern (dün) sagt er nicht – es sind schon drei Tage." },
      e: "„Üç gündür“ = seit drei Tagen. Die Endung **-dür/-dir** drückt hier „seit“ aus." },
    { id: "tr-a1-d07.q2", t: "mc", q: "Was bedeutet „Geçmiş olsun“?", o: ["Gute Besserung!", "Herzlich willkommen!", "Viel Erfolg!"], a: 0,
      why: { 1: "Willkommen heißt „Hoş geldiniz“.", 2: "Viel Erfolg heißt „Başarılar“. Zu jemandem, der gerade arbeitet, sagt man „Kolay gelsin“." },
      e: "„Geçmiş olsun“ – wörtlich „Möge es vorbei sein“ – sagt man Kranken, aber auch nach einem Unfall oder Ärger. Sogar die Ärztin sagt es zur Begrüßung." },
    { id: "tr-a1-d07.q3", t: "listen", say: "Başım ağrıyor.", q: "Was hörst du?", o: ["Başım ağrıyor.", "Karnım ağrıyor.", "Dişim ağrıyor."], a: 0,
      why: { 1: "„karın“ ist der Bauch. Gehört hast du „başım“ (mein Kopf).", 2: "„diş“ ist der Zahn. Gehört hast du „başım“ – mit a, nicht mit i." },
      e: "Schmerzen: Körperteil + Possessiv + **ağrıyor**. Başım ağrıyor = Mein Kopf tut weh / Ich habe Kopfschmerzen." },
    { id: "tr-a1-d07.q4", t: "mc", q: "„Günde üç kez için.“ – Was bedeutet hier „için“?", o: ["für", "Trinken Sie! (Befehlsform von içmek)", "warum"], a: 1,
      why: { 0: "„için“ heißt zwar oft „für“ – hier ist es aber iç- (trinken) + -in (höfliche Befehlsform).", 2: "„warum“ heißt „neden“ oder „niçin“." },
      e: "**iç + -in = için** → „Trinken Sie!“. Gleiche Schreibung, andere Bedeutung: Der Satzzusammenhang zeigt, was gemeint ist." }
  ]
});

K.addDialog('tr-a1-d08', {
  level: 'A1', title: 'Zu Besuch bei Freunden', sub: 'Misafirlikte',
  lines: [
    { s: "Ayşe", g: "f", t: "Hoş geldin, buyur içeri!", n: "Willkommen, komm herein!" },
    { s: "Mark", g: "m", t: "Hoş bulduk teyze. Bu çiçekler sizin için.", n: "Danke. Diese Blumen sind für Sie." },
    { s: "Ayşe", g: "f", t: "Ay, çok naziksin, zahmet etmişsin!", n: "Oh, wie lieb von dir – das wäre doch nicht nötig gewesen!" },
    { s: "Mark", g: "m", t: "Ayakkabılarımı çıkarayım mı?", n: "Soll ich meine Schuhe ausziehen?" },
    { s: "Ayşe", g: "f", t: "Tabii, terlikler kapının yanında. Gel otur, çay içer misin?", n: "Ja, die Hausschuhe stehen neben der Tür. Komm, setz dich – trinkst du einen Tee?" },
    { s: "Mark", g: "m", t: "Seve seve!", n: "Sehr gern!" },
    { s: "Ayşe", g: "f", t: "Şekerli mi, şekersiz mi?", n: "Mit oder ohne Zucker?" },
    { s: "Mark", g: "m", t: "Şekersiz, lütfen.", n: "Ohne Zucker, bitte." },
    { s: "Ayşe", g: "f", t: "Buyur. Börekten de al!", n: "Bitte schön. Nimm dir auch vom Börek!" },
    { s: "Mark", g: "m", t: "Ellerinize sağlık, çok lezzetli olmuş!", n: "Danke fürs Kochen – der ist richtig lecker geworden!" }
  ],
  questions: [
    { id: "tr-a1-d08.q1", t: "mc", q: "Was bringt Mark mit?", o: ["Blumen", "Börek", "Tee"], a: 0,
      why: { 1: "Den Börek hat Ayşe gemacht – Mark bekommt ihn angeboten.", 2: "Den Tee bietet Ayşe an." },
      e: "„Bu çiçekler sizin için“ = Diese Blumen sind für Sie. Ein kleines Mitbringsel ist bei Besuchen üblich." },
    { id: "tr-a1-d08.q2", t: "mc", q: "Womit bedankt man sich für ein selbst gekochtes Essen?", o: ["Ellerinize sağlık!", "Geçmiş olsun!", "Hoş bulduk!"], a: 0,
      why: { 1: "„Geçmiş olsun“ heißt „Gute Besserung“.", 2: "„Hoş bulduk“ ist die Antwort auf „Hoş geldin(iz)“ bei der Ankunft." },
      e: "**Ellerinize sağlık** – wörtlich „Gesundheit für Ihre Hände“ – dankt der Person, die gekocht oder etwas mit den Händen gemacht hat. Zu jemandem, den man duzt: „Ellerine sağlık“." },
    { id: "tr-a1-d08.q3", t: "listen", say: "Şekersiz, lütfen.", q: "Was hörst du?", o: ["Şekersiz, lütfen.", "Şekerli, lütfen.", "Şeker yok, lütfen."], a: 0,
      why: { 1: "„-li“ heißt „mit“. Gehört hast du „-siz“ – ohne Zucker.", 2: "„Şeker yok“ hieße „Es gibt keinen Zucker“ – das passt hier nicht und war nicht zu hören." },
      e: "**-li** = mit, **-siz** = ohne: şekerli (mit Zucker), şekersiz (ohne Zucker). Beide folgen der Vokalharmonie." },
    { id: "tr-a1-d08.q4", t: "mc", q: "Warum fragt Mark „Ayakkabılarımı çıkarayım mı?“?", o: ["Seine Schuhe sind nass.", "In türkischen Wohnungen zieht man meist die Schuhe aus.", "Er möchte schon wieder gehen."], a: 1,
      why: { 0: "Davon ist im Dialog keine Rede.", 2: "Er ist gerade erst angekommen." },
      e: "In der Türkei zieht man in der Wohnung fast immer die Schuhe aus; Gäste bekommen oft Hausschuhe (**terlik**). Mark zeigt mit der Frage Höflichkeit." }
  ]
});

})(window.KOPRU);
