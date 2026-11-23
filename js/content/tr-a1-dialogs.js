/* Türkisch A1 – Alltagsdialoge für Deutschsprechende (Fragen und Erklärungen auf Deutsch)
 * Feste IDs (tr-a1-d01 …, Fragen tr-a1-d01.q1 …): nie ändern, nie wiederverwenden.
 * Alle Dialoge sind selbst geschrieben.
 */
(function (K) {

K.addDialog('tr-a1-d01', {
  level: 'A1', title: 'Sich vorstellen', sub: 'Tanışma',
  role: "Jonas", roleG: 'm',
  lines: [
    { s: "Elif", g: "f", t: "Merhaba! Ben Elif. Senin adın ne?", n: "Hallo! Ich bin Elif. Wie heißt du?" },
    { me: true, id: "tr-a1-d01.c1",
      o: ["Merhaba Elif, sen Jonas. Memnun oldum.", "Merhaba Elif, ben Jonas. Memnun oldum.", "Merhaba Elif, ben Jonas. Hoş geldin."], a: 1,
      why: { 0: "„sen“ heißt „du“ – „sen Jonas“ wäre „du bist Jonas“. Du stellst dich aber selbst vor, also „ben Jonas“ (ich bin Jonas).", 2: "„Hoş geldin“ sagt ein Gastgeber, wenn jemand ankommt. Beim ersten Kennenlernen sagst du „Memnun oldum“ (Freut mich)." },
      e: "Beim Vorstellen: „Ben + Name“, dann „Memnun oldum“. Das Verb „sein“ fehlt im Türkischen hier ganz – „ben Jonas“ heißt schon „ich bin Jonas“.",
      n: "Hallo Elif, ich bin Jonas. Freut mich." },
    { s: "Elif", g: "f", t: "Ben de memnun oldum. Nerelisin?", n: "Freut mich auch. Woher kommst du?" },
    { me: true, id: "tr-a1-d01.c2",
      o: ["Almanyalısın, Hamburg'danım. Sen?", "Almanyalıyım, Hamburg'dayım. Sen?", "Almanyalıyım, Hamburg'danım. Sen?"], a: 2,
      why: { 0: "„Almanyalısın“ heißt „du bist Deutscher“. Von dir selbst sagst du „Almanyalıyım“ – die Endung -yım passt zu „ben“.", 1: "„Hamburg'dayım“ (-da = in) heißt „ich bin in Hamburg“. Willst du sagen, **woher** du kommst, brauchst du -dan: „Hamburg'danım“." },
      e: "Herkunft: Ortsname + **-dan/-den** + Personenendung (Hamburg'danım). Der Apostroph trennt die Endung vom Eigennamen.",
      n: "Ich komme aus Deutschland, aus Hamburg. Und du?" },
    { s: "Elif", g: "f", t: "Ben İzmirliyim ama İstanbul'da yaşıyorum. Türkçen çok iyi!", n: "Ich bin aus Izmir, wohne aber in Istanbul. Dein Türkisch ist sehr gut!" },
    { s: "Jonas", g: "m", t: "Sağ ol, ama daha yeni başladım.", n: "Danke, aber ich habe gerade erst angefangen." },
    { s: "Elif", g: "f", t: "Ne iş yapıyorsun?", n: "Was machst du beruflich?" },
    { me: true, id: "tr-a1-d01.c3",
      o: ["Mühendisim. Sen öğrenci misin?", "Mühendisim. Sen öğrenci mi?", "Mühendisim. Sen öğrenci misiniz?"], a: 0,
      why: { 1: "Hier fehlt die Personenendung. „öğrenci mi?“ fragt nach einer dritten Person („Ist er/sie Student?“). Zu „sen“ gehört „misin“.", 2: "„misiniz“ ist die höfliche Form (siz). Elif und Jonas duzen sich schon („Senin adın ne?“), also „misin“." },
      e: "Frage nach dem Zustand: Nomen + mi + Personenendung. „mi“ wird getrennt geschrieben und folgt dem Vokal davor (öğrenci → mi): „öğrenci misin?“.",
      n: "Ich bin Ingenieur. Bist du Studentin?" },
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
  role: "Kundin", roleG: 'f',
  lines: [
    { s: "Fırıncı", g: "m", t: "Günaydın! Buyurun, ne istersiniz?", n: "Guten Morgen! Was darf’s sein?" },
    { me: true, id: "tr-a1-d02.c1",
      o: ["Günaydın. İki ekmekler, lütfen. Ekmekler taze mi?", "Günaydın. İki ekmek, lütfen. Ekmekler taze mı?", "Günaydın. İki ekmek, lütfen. Ekmekler taze mi?"], a: 2,
      why: { 0: "Nach Zahlen steht kein Plural: „iki ekmek“, nicht „iki ekmekler“.", 1: "Die Fragepartikel richtet sich nach dem letzten Vokal davor: „taze“ endet auf e, also „mi“. „mı“ passt nur nach a, ı, o, u." },
      e: "Zahl + Singular: „iki ekmek“. Und „mi“ steht getrennt und folgt der Vokalharmonie (taze → mi).",
      n: "Guten Morgen. Zwei Brote, bitte. Ist das Brot frisch?" },
    { s: "Fırıncı", g: "m", t: "Tabii, daha yeni çıktı, sıcacık!", n: "Natürlich, gerade aus dem Ofen, noch ganz warm!" },
    { me: true, id: "tr-a1-d02.c2",
      o: ["Çok güzel. Simit da var mı?", "Çok güzel. Simit de var mı?", "Çok güzel. Simit de var mi?"], a: 1,
      why: { 0: "„de/da“ (auch) richtet sich nach dem letzten Vokal des Wortes davor: simit → i → „de“. „da“ passt nur nach a, ı, o, u.", 2: "In „var“ steckt ein a, also „mı“, nicht „mi“. Die Fragepartikel folgt dem letzten Vokal des Wortes davor." },
      e: "„de“ (auch) und „mı“ werden getrennt geschrieben und folgen beide der Vokalharmonie: simit **de**, var **mı**.",
      n: "Sehr schön. Gibt es auch Simit?" },
    { s: "Fırıncı", g: "m", t: "Var. Kaç tane istersiniz?", n: "Ja. Wie viele möchten Sie?" },
    { me: true, id: "tr-a1-d02.c3",
      o: ["Üç tane, lütfen. Hepsi ne kadar?", "Üç taneler, lütfen. Hepsi ne kadar?", "Üç tane, lütfen. Hepsi ne zaman?"], a: 0,
      why: { 1: "Nach einer Zahl steht kein Plural: „üç tane“, nicht „üç taneler“.", 2: "„ne zaman“ heißt „wann“. Nach dem Preis fragst du mit „ne kadar“ (wie viel)." },
      e: "Gesamtpreis: „Hepsi ne kadar?“ (hepsi = alles zusammen). Zahl + tane bleibt im Singular: „üç tane“.",
      n: "Drei Stück, bitte. Was macht das zusammen?" },
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
      e: "„Kolay gelsin“ (wörtlich „Möge es leicht gehen“) sagt man zu jemandem, der gerade arbeitet – Verkäufern, Handwerkern, Kollegen. Eine sehr typische, freundliche Floskel. Im Deutschen gibt es dafür keine feste Entsprechung – „Frohes Schaffen“ kommt dem am nächsten, klingt aber eher scherzhaft." },
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
  role: "Gast", roleG: 'f',
  lines: [
    { s: "Garson", g: "m", t: "Hoş geldiniz! Kaç kişisiniz?", n: "Herzlich willkommen! Für wie viele Personen?" },
    { me: true, id: "tr-a1-d03.c1",
      o: ["Hoş bulduk. İki kişiyiz.", "Hoş geldiniz. İki kişiyiz.", "Hoş bulduk. İki kişisiniz."], a: 0,
      why: { 1: "„Hoş geldiniz“ sagt der Gastgeber, hier der Kellner. Als Gast antwortest du „Hoş bulduk“.", 2: "„-siniz“ heißt „ihr seid / Sie sind“. Du sprichst von dir und deiner Begleitung: „-yiz“ (wir sind), also „iki kişiyiz“." },
      e: "„Hoş bulduk“ ist die feste Antwort auf „Hoş geldiniz“. „İki kişiyiz“: kişi + -yiz (wir sind); nach einem Vokal steht ein y als Puffer.",
      n: "Danke. Wir sind zu zweit." },
    { s: "Garson", g: "m", t: "Şu masaya buyurun. Menü burada.", n: "Bitte, an diesen Tisch. Hier ist die Speisekarte." },
    { s: "Lena", g: "f", t: "Teşekkürler. Günün çorbası ne?", n: "Danke. Was ist die Tagessuppe?" },
    { s: "Garson", g: "m", t: "Mercimek çorbası. Ana yemek olarak da tavuk şiş öneririm.", n: "Linsensuppe. Als Hauptgericht empfehle ich den Hähnchenspieß." },
    { me: true, id: "tr-a1-d03.c2",
      o: ["Tamam, iki mercimek çorbaları ve bir tavuk şiş alalım.", "Tamam, iki mercimek çorbası ve bir tavuk şiş alalım.", "Tamam, iki mercimek çorbası ve bir tavuk şiş alın."], a: 1,
      why: { 0: "Nach Zahlen steht kein Plural: „iki mercimek çorbası“, nicht „çorbaları“.", 2: "„alın“ ist eine Aufforderung („Nehmen Sie!“) – so würdest du dem Kellner etwas befehlen. Für „dann nehmen wir …“ passt „alalım“ (-(y)alım = wir wollen / lasst uns)." },
      e: "Beim Bestellen für mehrere: Verb + **-(y)elim/-(y)alım** („alalım“ = nehmen wir). Zahl + Singular: iki çorba.",
      n: "Gut, dann nehmen wir zwei Linsensuppen und einen Hähnchenspieß." },
    { s: "Garson", g: "m", t: "İçecek olarak ne alırsınız?", n: "Was möchten Sie trinken?" },
    { s: "Lena", g: "f", t: "Bir ayran ve bir şişe su, lütfen.", n: "Einen Ayran und eine Flasche Wasser, bitte." },
    { s: "Garson", g: "m", t: "Hemen geliyor. Afiyet olsun!", n: "Kommt sofort. Guten Appetit!" },
    { me: true, id: "tr-a1-d03.c3",
      o: ["Pardon, hesabı alabilir miyiz? Her şey çok lezzetliydi.", "Pardon, hesabı verebilir miyiz? Her şey çok lezzetliydi."], a: 0,
      why: { 1: "„vermek“ = geben – du willst die Rechnung bekommen, nicht geben." },
      e: "hesap → **hesabı** (p wird vor einem Vokal zu b; Akkusativ, weil die Rechnung bestimmt ist). „-(y)abilir miyiz?“ = Können wir …? Das brauchst du in jedem Lokal.",
      n: "Entschuldigung, können wir bitte zahlen? Es war alles sehr lecker." }
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
  role: "Touristin", roleG: 'f',
  lines: [
    { s: "Turist", g: "f", t: "Affedersiniz, Galata Kulesi'ne nasıl gidebilirim?", n: "Entschuldigen Sie, wie komme ich zum Galataturm?" },
    { s: "Hasan Bey", g: "m", t: "Galata Kulesi mi? Çok yakın, yürüyerek on dakika.", n: "Zum Galataturm? Ganz nah, zehn Minuten zu Fuß." },
    { me: true, id: "tr-a1-d04.c1",
      o: ["Harika! Peki, ne zaman?", "Harika! Peki, hangi yöne?", "Harika! Peki, ne kadar?"], a: 1,
      why: { 0: "„ne zaman“ heißt „wann“. Du willst aber wissen, in welche Richtung du gehen sollst: „hangi yöne?“.", 2: "„ne kadar“ heißt „wie viel“. Nach der Richtung fragst du mit „hangi yöne?“." },
      e: "hangi = welche(r), yön = Richtung, **-e** = wohin. „Hangi yöne?“ = In welche Richtung?",
      n: "Super! Und in welche Richtung?" },
    { s: "Hasan Bey", g: "m", t: "Bu caddeden düz gidin, sonra ikinci sokaktan sağa dönün.", n: "Gehen Sie diese Straße geradeaus und biegen Sie dann in die zweite Straße rechts ab." },
    { me: true, id: "tr-a1-d04.c2",
      o: ["İkinci sokaktan sola. Sonra?", "Birinci sokaktan sağa. Sonra?", "İkinci sokaktan sağa. Sonra?"], a: 2,
      why: { 0: "Der Mann hat „sağa“ gesagt, also nach **rechts**. „sola“ wäre links.", 1: "Er hat „ikinci“ gesagt – die **zweite** Straße. „birinci“ ist die erste." },
      e: "Zur Kontrolle wiederholen, was man verstanden hat, ist im Türkischen ganz normal: „İkinci sokaktan sağa.“ (Ordnungszahl + sokak + -dan).",
      n: "Die zweite Straße rechts. Und dann?" },
    { s: "Hasan Bey", g: "m", t: "Sonra yokuş yukarı çıkın. Kule tam karşınızda.", n: "Dann gehen Sie bergauf. Der Turm steht direkt vor Ihnen." },
    { me: true, id: "tr-a1-d04.c3",
      o: ["Çok teşekkür ederim!", "Çok rica ederim!", "Çok afiyet olsun!"], a: 0,
      why: { 1: "„Rica ederim“ ist die Antwort **auf** ein Dankeschön (Gern geschehen). Du bist hier diejenige, die sich bedankt: „teşekkür ederim“.", 2: "„Afiyet olsun“ wünscht man beim Essen (Guten Appetit) – hier passt es nicht." },
      e: "Danken: „Teşekkür ederim“, mit „çok“ verstärkt. Darauf antwortet man: „Rica ederim“.",
      n: "Vielen Dank!" },
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
  role: "Fahrgast", roleG: 'f',
  lines: [
    { s: "Yolcu", g: "f", t: "Merhaba, bu dolmuş Kadıköy'e gidiyor mu?", n: "Hallo, fährt dieser Dolmuş nach Kadıköy?" },
    { s: "Şoför", g: "m", t: "Gidiyor abla, buyurun.", n: "Ja, fährt er. Steigen Sie ein." },
    { me: true, id: "tr-a1-d05.c1",
      o: ["Ne zaman?", "Nerede?", "Ne kadar?"], a: 2,
      why: { 0: "„ne zaman“ heißt „wann“. Nach dem Fahrpreis fragst du „Ne kadar?“ (Wie viel?).", 1: "„nerede“ heißt „wo“. Du willst aber den Preis wissen." },
      e: "„Ne kadar?“ (Wie viel?) ist die kürzeste Frage nach dem Preis – im Dolmuş und auf dem Markt.",
      n: "Was kostet die Fahrt?" },
    { s: "Şoför", g: "m", t: "Otuz beş lira.", n: "Fünfunddreißig Lira." },
    { me: true, id: "tr-a1-d05.c2",
      o: ["Affedersiniz, parayı şoför uzatır mısınız?", "Affedersiniz, parayı şoföre uzatır mısınız?", "Affedersiniz, para şoföre uzatır mısınız?"], a: 1,
      why: { 0: "Ohne -e fehlt das „an wen?“: „şoföre“ = dem Fahrer. „şoför“ ohne Endung passt nicht in den Satz.", 2: "Das Geld ist hier bestimmt (das Fahrgeld in deiner Hand), also braucht es den Akkusativ: „parayı“." },
      e: "Dativ **-e** (an wen) + Akkusativ **-ı** (bestimmtes Objekt) + höfliche Bitte „-ır mısınız?“ – so bittest du Fremde freundlich.",
      n: "Entschuldigung, könnten Sie das Geld zum Fahrer nach vorne reichen?" },
    { s: "Yolcu 2", g: "m", t: "Tabii, verin.", n: "Klar, geben Sie her." },
    { me: true, id: "tr-a1-d05.c3",
      o: ["Teşekkürler. Müsait bir yerde binebilir miyim?", "Teşekkürler. Müsait bir yerde inebilir mıyım?", "Teşekkürler. Müsait bir yerde inebilir miyim?"], a: 2,
      why: { 0: "„binmek“ heißt einsteigen. Du sitzt schon im Dolmuş und willst aussteigen: „inmek“.", 1: "„inebilir“ endet auf i, also „miyim“. Mit „mıyım“ passt die Vokalharmonie nicht." },
      e: "inmek = aussteigen. „-(y)abilir miyim?“ = Kann/Darf ich …? Die Fragepartikel richtet sich nach dem Vokal davor.",
      n: "Danke. Kann ich an einer passenden Stelle aussteigen?" },
    { s: "Şoför", g: "m", t: "Tabii, köprüden sonra duruyorum. Para üstünüz de burada.", n: "Natürlich, nach der Brücke halte ich. Und hier ist Ihr Wechselgeld." },
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
  role: "Kundin", roleG: 'f',
  lines: [
    { s: "Satıcı", g: "m", t: "Gel abla, gel! Domatesler çok taze!", n: "Komm her, komm her! Die Tomaten sind ganz frisch!" },
    { me: true, id: "tr-a1-d06.c1",
      o: ["Domatesin kilo kaç lira?", "Domatesin kilosu kaç lira?", "Domatesin kilosu ne zaman?"], a: 1,
      why: { 0: "Hier fehlt die Possessivendung: „domatesin kilosu“ = das Kilo der Tomaten. Beide Wörter gehören zusammen (Genitiv + Possessiv).", 2: "„ne zaman“ heißt „wann“. Nach dem Preis fragst du mit „kaç lira“ (wie viele Lira)." },
      e: "„Domatesin kilosu“: Tomaten-**in** (Genitiv) + Kilo-**su** (Possessiv) = das Kilo (der) Tomaten. „kaç lira?“ = wie viele Lira?",
      n: "Was kostet das Kilo Tomaten?" },
    { s: "Satıcı", g: "m", t: "Kilosu altmış lira.", n: "Sechzig Lira das Kilo." },
    { me: true, id: "tr-a1-d06.c2",
      o: ["Çok ucuz! Elli olmaz mı?", "Çok pahalı! Elli olmaz mi?", "Çok pahalı! Elli olmaz mı?"], a: 2,
      why: { 0: "„ucuz“ heißt billig. Wer handeln will, sagt, dass etwas **teuer** (pahalı) ist.", 1: "„olmaz“ endet auf a, also „mı“. Die Fragepartikel folgt dem Vokal davor (a → mı)." },
      e: "„Olmaz mı?“ = Geht das nicht? – die freundliche Art zu handeln: erst den Wunschpreis nennen („Elli“), dann „olmaz mı?“.",
      n: "Das ist aber teuer! Geht es nicht für fünfzig?" },
    { s: "Satıcı", g: "m", t: "Senin için elli beş olsun.", n: "Für dich: fünfundfünfzig." },
    { me: true, id: "tr-a1-d06.c3",
      o: ["Tamam, iki kilo ver. Salatalık da istiyorum.", "Tamam, iki kilolar ver. Salatalık da istiyorum.", "Tamam, iki kilo ver. Salatalık de istiyorum."], a: 0,
      why: { 1: "Nach Zahlen steht kein Plural: „iki kilo“, nicht „iki kilolar“.", 2: "„salatalık“ endet auf ı – ein hinterer Vokal, also „da“. „de“ steht nur nach e, i, ö, ü." },
      e: "Zahl + Singular: „iki kilo“. „da/de“ (auch) wird getrennt geschrieben und folgt der Vokalharmonie: salatalık **da**.",
      n: "Okay, gib mir zwei Kilo. Und ich möchte noch Gurken." },
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
  role: "Patient", roleG: 'm',
  lines: [
    { s: "Doktor", g: "f", t: "Geçmiş olsun. Şikâyetiniz ne?", n: "Gute Besserung. Was fehlt Ihnen?" },
    { me: true, id: "tr-a1-d07.c1",
      o: ["Üç gündür baş ağrıyor ve ateş var.", "Üç gündür başım ağrıyorum ve ateşim var.", "Üç gündür başım ağrıyor ve ateşim var."], a: 2,
      why: { 0: "Ohne Possessivendung („başım“, „ateşim“) bleibt offen, **wessen** Kopf wehtut. Auf Türkisch gehört der Körperteil zu dir.", 1: "Bei „ağrımak“ ist der Kopf das Subjekt: „başım ağrıyor“ (mein Kopf schmerzt). „ağrıyorum“ hieße, dass **du selbst** wehtust." },
      e: "Beschwerden: Körperteil + Possessiv + „ağrıyor“ (başım ağrıyor) bzw. „… var“ (ateşim var). „üç gündür“ = seit drei Tagen.",
      n: "Ich habe seit drei Tagen Kopfschmerzen und Fieber." },
    { s: "Doktor", g: "f", t: "Öksürüğünüz var mı?", n: "Haben Sie Husten?" },
    { me: true, id: "tr-a1-d07.c2",
      o: ["Evet, biraz öksürüyorum. Boğazım da ağrıyor.", "Evet, biraz öksürüyorsun. Boğazım da ağrıyor.", "Evet, biraz öksürüyorum. Boğazım de ağrıyor."], a: 0,
      why: { 1: "„-sun“ gehört zu „sen“ (du hustest). Du sprichst von dir: „öksürüyorum“.", 2: "„boğazım“ endet auf ı – ein hinterer Vokal, also „da“. „de“ steht nur nach e, i, ö, ü." },
      e: "Ich-Form im Präsens: Stamm + -(i)yor + **-um** („öksürüyorum“). „da“ (auch) steht getrennt und folgt der Vokalharmonie.",
      n: "Ja, ich huste ein bisschen. Mein Hals tut auch weh." },
    { s: "Doktor", g: "f", t: "Ağzınızı açın, lütfen. Evet, grip olmuşsunuz.", n: "Machen Sie bitte den Mund auf. Ja, Sie haben eine Grippe." },
    { s: "Hasta", g: "m", t: "İlaç gerekli mi?", n: "Brauche ich Medikamente?" },
    { s: "Doktor", g: "f", t: "Size bir şurup yazıyorum. Günde üç kez için.", n: "Ich verschreibe Ihnen einen Hustensaft. Nehmen Sie ihn dreimal täglich." },
    { me: true, id: "tr-a1-d07.c3",
      o: ["İşi gidebilir miyim?", "İşe gidebilir miyim?", "İşe gidebilir mıyım?"], a: 1,
      why: { 0: "Bei „gitmek“ (gehen) fragst du „wohin?“ – dafür braucht es den Dativ -e: „işe“. Die Endung -i wäre der Akkusativ.", 2: "„gidebilir“ endet auf i, also „miyim“. Mit „mıyım“ passt die Vokalharmonie nicht." },
      e: "„işe gitmek“ = zur Arbeit gehen (Dativ -e für die Richtung). „-(y)abilir miyim?“ = Kann/Darf ich …? – eine Frage, die du beim Arzt oft brauchst.",
      n: "Kann ich zur Arbeit gehen?" },
    { s: "Doktor", g: "f", t: "Hayır, iki gün evde dinlenin. Bol su için.", n: "Nein, ruhen Sie sich zwei Tage zu Hause aus. Trinken Sie viel Wasser." },
    { s: "Hasta", g: "m", t: "Çok teşekkür ederim.", n: "Vielen Dank." }
  ],
  questions: [
    { id: "tr-a1-d07.q1", t: "mc", q: "Seit wann hat der Patient Kopfschmerzen?", o: ["seit drei Tagen", "seit drei Wochen", "seit gestern"], a: 0,
      why: { 1: "Er sagt „üç gündür“ – gün = Tag. Woche hieße „hafta“.", 2: "Gestern (dün) sagt er nicht – es sind schon drei Tage." },
      e: "„Üç gündür“ = seit drei Tagen. Das ist eine feste Wendung für „seit“ bei Zeiträumen (iki gündür, üç haftadır); als Anfänger lernst du sie am besten als Ganzes." },
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
  role: "Gast", roleG: 'm',
  lines: [
    { s: "Ayşe", g: "f", t: "Hoş geldin, buyur içeri!", n: "Willkommen, komm herein!" },
    { me: true, id: "tr-a1-d08.c1",
      o: ["Hoş geldin teyze. Bu çiçekler sizin için.", "Hoş bulduk teyze. Bu çiçekler senin için.", "Hoş bulduk teyze. Bu çiçekler sizin için."], a: 2,
      why: { 0: "„Hoş geldin“ hat Ayşe gerade zu dir gesagt. Als Gast antwortest du „Hoş bulduk“.", 1: "Eine ältere Frau wie Ayşe („teyze“) sprichst du mit „siz“ an: „sizin için“. „senin için“ wäre zu vertraut." },
      e: "Ältere Bekannte siezt man: „sizin için“ (für Sie). „için“ steht **hinter** dem Wort, auf das es sich bezieht.",
      n: "Danke. Diese Blumen sind für Sie." },
    { s: "Ayşe", g: "f", t: "Ay, çok naziksin, zahmet etmişsin!", n: "Oh, wie lieb von dir – das wäre doch nicht nötig gewesen!" },
    { me: true, id: "tr-a1-d08.c2",
      o: ["Ayakkabılarım çıkarayım mı?", "Ayakkabılarımı çıkarayım mı?", "Ayakkabılarımı çıkarayım mi?"], a: 1,
      why: { 0: "Die Schuhe sind ein bestimmtes Objekt (deine Schuhe), also Akkusativ: „ayakkabılarımı“. Ohne -ı fehlt die Endung.", 2: "„çıkarayım“ endet auf ı – ein hinterer Vokal, also „mı“." },
      e: "Angebot/Frage „Soll ich …?“: Verb + **-(y)ayım mı?** („çıkarayım mı?“). Typisch beim Besuch.",
      n: "Soll ich meine Schuhe ausziehen?" },
    { s: "Ayşe", g: "f", t: "Tabii, terlikler kapının yanında. Gel otur, çay içer misin?", n: "Ja, die Hausschuhe stehen neben der Tür. Komm, setz dich – trinkst du einen Tee?" },
    { s: "Mark", g: "m", t: "Seve seve!", n: "Sehr gern!" },
    { s: "Ayşe", g: "f", t: "Şekerli mi, şekersiz mi?", n: "Mit oder ohne Zucker?" },
    { s: "Mark", g: "m", t: "Şekersiz, lütfen.", n: "Ohne Zucker, bitte." },
    { s: "Ayşe", g: "f", t: "Buyur. Börekten de al!", n: "Bitte schön. Nimm dir auch vom Börek!" },
    { me: true, id: "tr-a1-d08.c3",
      o: ["Ellerinize sağlık, çok lezzetli olmuş!", "Ellerine sağlık, çok lezzetli olmuş!", "Geçmiş olsun, çok lezzetli olmuş!"], a: 0,
      why: { 1: "„Ellerine“ ist die Form für „sen“. Du hast Ayşe vorher gesiezt („sizin“), also bleibst du bei „siz“: Ellerinize sağlık.", 2: "„Geçmiş olsun“ ist ein Wunsch für Kranke (Gute Besserung). Für selbst gekochtes Essen sagt man „Ellerinize sağlık“." },
      e: "„Ellerinize sağlık“ (wörtlich: Gesundheit für Ihre Hände) dankt den Köchen. Wer siezt, bleibt in einem Gespräch bei „siz“.",
      n: "Danke fürs Kochen – der ist richtig lecker geworden!" }
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

K.addDialog('tr-a1-d09', {
  level: 'A1', title: 'Arzttermin am Telefon', sub: 'Doktordan randevu',
  role: "Patientin", roleG: 'f',
  lines: [
    { s: "Sekreter", g: "m", t: "Hastane, günaydın. Buyurun.", n: "Krankenhaus, guten Morgen. Bitte sehr." },
    { me: true, id: "tr-a1-d09.c1",
      o: ["Günaydın. İstiyorum doktordan randevu almak.", "Günaydın, doktordan randevu almak istiyorum.", "Günaydın, doktordan randevu almak istiyorsunuz."], a: 1,
      why: { 0: "Im Türkischen steht das Verb am Satzende: „randevu almak istiyorum“. Die deutsche Reihenfolge („Ich möchte … einen Termin nehmen“) darf man nicht übernehmen.", 2: "„istiyorsunuz“ heißt „Sie möchten“. Du bist es aber, die einen Termin möchte: „istiyorum“ (ich möchte)." },
      e: "„randevu almak“ = einen Termin nehmen, „doktordan“ = vom Arzt (-dan: den Termin bekommt man vom Arzt). „istiyorum“ – Wunsch in der Ich-Form – kommt als Verb ans Ende.",
      n: "Guten Morgen, ich möchte einen Termin beim Arzt vereinbaren." },
    { s: "Sekreter", g: "m", t: "Tabii. Şikâyetiniz ne?", n: "Natürlich. Was fehlt Ihnen?" },
    { me: true, id: "tr-a1-d09.c2",
      o: ["Karın ağrıyor.", "Karnım ağrıyorum.", "Karnım ağrıyor."], a: 2,
      why: { 0: "„karın“ ohne Endung heißt nur „Bauch“ – es fehlt, wessen Bauch. Es ist dein Bauch: „karnım“ (das ı fällt weg).", 1: "Bei „ağrımak“ ist der Bauch das Subjekt: „karnım ağrıyor“. Mit „ağrıyorum“ würdest du sagen, dass **du selbst** wehtust." },
      e: "Körperteil + Possessiv + „ağrıyor“: karnım ağrıyor. Bei „karın“ fällt vor der Endung das ı weg (karın → karnım).",
      n: "Mir tut der Bauch weh." },
    { s: "Sekreter", g: "m", t: "Anladım. Yarın saat on birde gelebilir misiniz?", n: "Verstanden. Können Sie morgen um elf Uhr kommen?" },
    { me: true, id: "tr-a1-d09.c3",
      o: ["Yarın işim yok. Perşembe sabah gelebilir miyim?", "Yarın işim var. Perşembe sabah gelebilir misiniz?", "Yarın işim var. Perşembe sabah gelebilir miyim?"], a: 2,
      why: { 0: "„işim yok“ heißt „ich habe keine Arbeit“. Dann könntest du ja morgen kommen – der Satz passt nicht zu deinem Wunsch nach einem anderen Tag.", 1: "„gelebilir misiniz?“ fragt „Können **Sie** kommen?“. Du fragst aber, ob **du** am Donnerstag kommen darfst: „gelebilir miyim?“." },
      e: "Grund: „işim var“ (ich habe Arbeit). Dann der Gegenvorschlag mit „-(y)abilir miyim?“ (Kann ich …?). Die Zeitangabe „Perşembe sabah“ steht vor dem Verb.",
      n: "Morgen habe ich Arbeit. Kann ich am Donnerstagmorgen kommen?" },
    { s: "Sekreter", g: "m", t: "Perşembe sabah saat dokuzda boş yer var. Adınız ne?", n: "Donnerstagmorgen um neun Uhr ist noch etwas frei. Wie ist Ihr Name?" },
    { s: "Hasta", g: "f", t: "Adım Selin Aydın. Teşekkür ederim.", n: "Mein Name ist Selin Aydın. Danke." },
    { s: "Sekreter", g: "m", t: "Rica ederim. Geçmiş olsun, perşembe görüşürüz.", n: "Gern geschehen. Gute Besserung, bis Donnerstag." }
  ],
  questions: [
    { id: "tr-a1-d09.q1", t: "mc", q: "Wann bekommt die Anruferin ihren Termin?", o: ["morgen um elf Uhr", "am Donnerstagmorgen um neun Uhr", "am Donnerstag um elf Uhr"], a: 1,
      why: { 0: "Morgen um elf („yarın saat on birde“) schlägt zuerst der Mitarbeiter vor, aber die Anruferin hat morgen Arbeit („Yarın işim var“).", 2: "Der Donnerstag stimmt, aber die Uhrzeit nicht: „saat dokuzda“ heißt um neun, „on bir“ ist elf." },
      e: "„Perşembe sabah saat dokuzda“ = Donnerstagmorgen um neun. Uhrzeit: „saat“ + Zahl + **-da/-de** (dokuz → dokuzda)." },
    { id: "tr-a1-d09.q2", t: "mc", q: "Was hat die Anruferin?", o: ["Bauchschmerzen", "Kopfschmerzen", "Fieber"], a: 0,
      why: { 1: "Kopf heißt „baş“ – gesagt wird aber „karnım ağrıyor“ (mein Bauch tut weh).", 2: "Fieber heißt „ateş“. Davon spricht die Anruferin nicht." },
      e: "„Karnım ağrıyor“ = Ich habe Bauchschmerzen. Bei Schmerzen steht der Körperteil mit Possessivendung vor „ağrıyor“." },
    { id: "tr-a1-d09.q3", t: "listen", say: "Yarın saat on birde gelebilir misiniz?", q: "Was hörst du?", o: ["Yarın saat on birde gelebilir misiniz?", "Yarın saat on birde gelebilir miyim?", "Yarın saat on ikide gelebilir misiniz?"], a: 0,
      why: { 1: "Fast! Du hast aber **misiniz** gehört (Können **Sie** kommen?). „miyim“ hieße „Kann **ich** kommen?“.", 2: "„on iki“ ist zwölf. Gehört hast du „on bir“ – elf." },
      e: "Der Mitarbeiter fragt höflich: „gelebilir misiniz?“ (Können Sie kommen?). Die Endung -siniz zeigt die höfliche Anrede." },
    { id: "tr-a1-d09.q4", t: "mc", q: "Warum schlägt die Anruferin einen anderen Tag vor?", o: ["Sie muss morgen arbeiten.", "Sie ist morgen verreist.", "Die Praxis ist morgen geschlossen."], a: 0,
      why: { 1: "Von einer Reise sagt sie nichts. Sie sagt „Yarın işim var“.", 2: "Davon ist keine Rede – der Mitarbeiter hat ja gerade einen Termin für morgen angeboten." },
      e: "„İşim var“ = Ich habe Arbeit (wörtlich: Meine Arbeit ist da). So erklärst du kurz, warum ein Termin nicht passt." }
  ]
});

K.addDialog('tr-a1-d10', {
  level: 'A1', title: 'Am Bahnhof: Fahrkarte kaufen', sub: 'İstasyonda bilet',
  role: "Reisender", roleG: 'm',
  lines: [
    { s: "Görevli", g: "f", t: "İyi günler, buyurun.", n: "Guten Tag, bitte sehr." },
    { me: true, id: "tr-a1-d10.c1",
      o: ["İyi günler. İstanbul'da iki bilet istiyorum, lütfen.", "İyi günler. İstanbul'a iki biletler istiyorum, lütfen.", "İyi günler. İstanbul'a iki bilet istiyorum, lütfen."], a: 2,
      why: { 0: "„İstanbul'da“ heißt „in Istanbul“. Du willst aber **nach** Istanbul fahren, und die Richtung braucht den Dativ: „İstanbul'a“.", 1: "Nach Zahlen steht kein Plural: „iki bilet“, nicht „iki biletler“." },
      e: "Ziel = Dativ **-a/-e** („İstanbul'a“, mit Apostroph). Zahl + Singular: „iki bilet“. „istiyorum“ = ich möchte, am Satzende.",
      n: "Guten Tag. Ich möchte zwei Fahrkarten nach Istanbul, bitte." },
    { s: "Görevli", g: "f", t: "Yarın sabah saat dokuzda bir tren var. Olur mu?", n: "Morgen früh um neun Uhr gibt es einen Zug. Passt das?" },
    { me: true, id: "tr-a1-d10.c2",
      o: ["Hayır, olmaz. Ne kadar?", "Evet, olur. Ne kadar?", "Evet, olur. Ne zaman?"], a: 1,
      why: { 0: "Wenn du ablehnst („olmaz“), fragst du nicht nach dem Preis. Die Frage nach dem Preis passt zu einer Zusage.", 2: "„ne zaman“ heißt „wann“. Die Zeit steht aber schon fest (neun Uhr). Du willst den Preis wissen: „Ne kadar?“." },
      e: "„Olur“ = Das geht / Das passt. Danach fragst du nach dem Preis mit „Ne kadar?“.",
      n: "Ja, das passt. Wie viel kostet es?" },
    { s: "Görevli", g: "f", t: "İki bilet beş yüz lira.", n: "Zwei Fahrkarten kosten fünfhundert Lira." },
    { s: "Yolcu", g: "m", t: "Kredi kartıyla ödeyebilir miyim?", n: "Kann ich mit Kreditkarte bezahlen?" },
    { s: "Görevli", g: "f", t: "Tabii. Buyurun biletler. Tren yarın sabah dokuzda kalkıyor.", n: "Natürlich. Hier sind die Fahrkarten. Der Zug fährt morgen früh um neun ab." },
    { me: true, id: "tr-a1-d10.c3",
      o: ["Teşekkür ederim. Affedersiniz, tuvalet nasıl?", "Teşekkür ederim. Affedersiniz, tuvalet ne zaman?", "Teşekkür ederim. Affedersiniz, tuvalet nerede?"], a: 2,
      why: { 0: "„nasıl“ heißt „wie“ („Wie ist die Toilette?“). Nach dem Ort fragst du mit „nerede“ (wo).", 1: "„ne zaman“ heißt „wann“. Nach dem Ort fragst du mit „nerede“ (wo)." },
      e: "„Nerede?“ = Wo? Mit „Affedersiniz“ sprichst du Fremde höflich an. Die Antwort nennt die Richtung: „düz“, „sağda“, „solda“.",
      n: "Danke. Entschuldigung, wo ist die Toilette?" },
    { s: "Görevli", g: "f", t: "Düz gidin, sağda.", n: "Gehen Sie geradeaus, auf der rechten Seite." },
    { s: "Yolcu", g: "m", t: "Sağ olun, iyi günler!", n: "Danke, einen schönen Tag noch!" }
  ],
  questions: [
    { id: "tr-a1-d10.q1", t: "mc", q: "Wann fährt der Zug?", o: ["heute Abend", "morgen früh um neun Uhr", "morgen früh um zehn Uhr"], a: 1,
      why: { 0: "Heute (bugün) und Abend (akşam) kommen nicht vor.", 2: "Um zehn wäre „saat onda“. Gesagt wird „saat dokuzda“ – um neun." },
      e: "„Yarın sabah saat dokuzda“ = morgen früh um neun. Zeit + Uhrzeit stehen vor dem Verb: „… kalkıyor“." },
    { id: "tr-a1-d10.q2", t: "mc", q: "Wie viel kosten die beiden Fahrkarten zusammen?", o: ["250 Lira", "500 Lira", "50 Lira"], a: 1,
      why: { 0: "250 wäre der Preis **pro Karte**. Genannt wird der Gesamtpreis für zwei: „beş yüz“ (500).", 2: "„elli“ ist 50 – hier heißt es „beş yüz“ (500)." },
      e: "„İki bilet beş yüz lira“ = zwei Karten für 500 Lira. Zahlen: iki yüz = 200, beş yüz = 500." },
    { id: "tr-a1-d10.q3", t: "listen", say: "Düz gidin, sağda.", q: "Was hörst du?", o: ["Düz gidin, sağda.", "Düz gidin, solda.", "Sağa dönün, düz gidin."], a: 0,
      why: { 1: "„solda“ heißt links. Gehört hast du „sağda“ – rechts.", 2: "Hier wird zuerst abgebogen („dönün“). Im Satz hieß es aber „Düz gidin“ (geradeaus) und dann „sağda“ (rechts)." },
      e: "**sağda** = rechts (auf der rechten Seite), **solda** = links. -da/-de zeigt den Ort: „wo“." },
    { id: "tr-a1-d10.q4", t: "mc", q: "Wie fragt man höflich, ob man mit Karte zahlen kann?", o: ["Kredi kartıyla ödeyebilir miyim?", "Kredi kartı ne kadar?", "Kredi kartı var mı?"], a: 0,
      why: { 1: "„Kredi kartı ne kadar?“ heißt „Wie viel kostet die Kreditkarte?“.", 2: "„Kredi kartı var mı?“ heißt „Gibt es eine Kreditkarte?“ – es fehlt das Bezahlen („ödemek“)." },
      e: "**kartıyla** = mit der Karte (-la/-le = mit, nach Vokal mit y). „ödeyebilir miyim?“ = Kann ich bezahlen? Das Verb steht am Ende." }
  ]
});

})(window.KOPRU);
