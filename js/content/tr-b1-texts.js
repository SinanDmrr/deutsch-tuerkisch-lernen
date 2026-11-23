/* Türkisch B1 – Lese- und Hörtexte für Deutschsprechende (Erklärungen auf Deutsch)
 * Format: K.addText('tr-b1-rNN' | 'tr-b1-hNN', { level, kind:'read'|'listen', scene, genre, title (TR), sub (DE), body | lines, gloss, questions }).
 * Fragen-IDs '<textId>.qN' sind fest und werden nie geändert oder wiederverwendet.
 * Alle Texte sind selbst geschrieben.
 * Paket 1 „Erzählen im Text“: r01 Çocukluk yazları (Artikel), r02 Kaçırmadığım tren (E-Mail), r03 Eski mahalle (Artikel); h01 Ses mesajı (Anrufbeantworter), h02 Çocukken (Gespräch), h03 Şehir nasıldı? (Interview).
 */
(function (K) {

/* ================= LESETEXTE ================= */

K.addText('tr-b1-r01', {
  level: 'B1', kind: 'read', scene: 'aile', genre: 'artikel',
  title: "Çocukluk yazları", sub: "Sommer meiner Kindheit",
  body: [
    "Çocukken her yaz babaannemlerin köyüne giderdik. Annem bizi otogara kadar götürürdü, otobüs sabah erkenden kalkardı. Köye varınca babaannem bizi kapıda bekliyordu, elinde hep sıcak ekmek olurdu.",
    "Gündüzleri kuzenlerimle gölde yüzerdik, akşamları bahçede oturup babaannemin masallarını dinlerdik. Babaannem bize her akşam sıcak çay ve tatlı getirirdi. Her masala “Bir varmış, bir yokmuş” diye başlardı. Elektrikler sık sık kesilirdi, ama biz hiç sıkılmazdık.",
    "Yıllar sonra köye tekrar gittim. Komşular beni görünce çok sevindi. Ev hâlâ yerindeydi, ama babaannem yoktu artık. Bahçedeki ceviz ağacı çok büyümüştü. Gözlerim doldu. O yazları hâlâ çok özlüyorum."
  ],
  gloss: { "ceviz": "Walnuss", "kesilirdi": "wurde unterbrochen (der Strom fiel aus)" },
  questions: [
    { id: "tr-b1-r01.q1", t: "mc", q: "Wohin fuhr die Familie jeden Sommer?", o: ["In das Dorf der Großmutter", "Ans Meer", "In eine Großstadt", "In die Berge"], a: 0,
      why: { 1: "Zum Baden ging man in den See (*gölde*), nicht ans Meer.", 2: "Der Text erwähnt nur das Dorf (*köy*).", 3: "Von Bergen ist keine Rede." },
      e: "*Çocukken her yaz babaannemlerin köyüne giderdik.* = „Als Kind fuhren wir jeden Sommer in das Dorf meiner Großmutter.“ -(I)rdI zeigt die Gewohnheit." },
    { id: "tr-b1-r01.q2", t: "mc", q: "Womit begann die Großmutter jedes Märchen?", o: ["Mit „Bir varmış, bir yokmuş“", "Mit einem Lied", "Mit einer Frage an die Kinder", "Mit „Günaydın“"], a: 0,
      why: { 1: "Im Text steht ausdrücklich der andere Einstieg.", 2: "Eine Frage wird nicht erwähnt.", 3: "Ein Gruß ist kein Märchenanfang." },
      e: "*Her masala “Bir varmış, bir yokmuş” diye başlardı.* -mIş markiert Überliefertes: „Es war einmal …“." },
    { id: "tr-b1-r01.q3", t: "gap", q: "Çocukken her yaz köye ___ . (gitmek, biz – Als Kinder fuhren wir jeden Sommer ins Dorf.)", a: ["giderdik", "gidiyorduk"],
      wrong: { "giderdim": "-m = ich. Der Text sagt „wir“ → **-k**.", "gittik": "-DI wäre ein einmaliges Ereignis, hier geht es um jedes Jahr.", "giderdık": "Letzter Vokal ist **e** → -d**i**k." },
      e: "git → gid-er + **di** + **k** = **giderdik**. Konsonantenwechsel t → d vor Vokal. Auch *gidiyorduk* ist möglich (-Iyordu mit „jeden Sommer“); -(I)rdI ist die typischere Form für Gewohnheiten." },
    { id: "tr-b1-r01.q4", t: "mc", q: "Was hatte sich verändert, als die Erzählerin Jahre später zurückkam?", o: ["Die Großmutter war nicht mehr da und der Walnussbaum war größer.", "Das Haus war abgerissen worden.", "Das Dorf war leer.", "Der See war ausgetrocknet."], a: 0,
      why: { 1: "*Ev hâlâ yerindeydi* – das Haus stand noch.", 2: "Von Leere des Dorfes steht nichts im Text.", 3: "Vom See ist nach dem Wiedersehen nicht die Rede." },
      e: "*babaannem yoktu artık* = Oma war nicht mehr da. *ceviz ağacı çok büyümüştü* = der Walnussbaum war sehr groß geworden (-mIştI: Vorzeitigkeit)." },
    { id: "tr-b1-r01.q5", t: "mc", q: "Welche Aussage stimmt zum Text?", o: ["Abends hörten die Kinder im Garten Märchen.", "Abends gingen alle ins Kino.", "Tagsüber arbeiteten die Kinder auf dem Feld.", "Es gab im Dorf immer Strom."], a: 0,
      why: { 1: "Vom Kino ist nicht die Rede; man blieb im Garten.", 2: "Tagsüber schwamm man mit den Cousins im See.", 3: "*Elektrikler sık sık kesilirdi* = der Strom fiel oft aus." },
      e: "*akşamları bahçede oturup babaannemin masallarını dinlerdik* = abends saßen wir im Garten und hörten Omas Märchen." }
  ]
});

K.addText('tr-b1-r02', {
  level: 'B1', kind: 'read', scene: 'istasyon', genre: 'email',
  title: "Kaçırmadığım tren", sub: "Der Zug, den ich nicht verpasst habe",
  body: [
    "Merhaba Deniz,",
    "Geçen hafta Ankara’ya gidecektim. Tren dokuzda kalkacaktı. Sekiz buçukta evden çıktım, ama yolda yağmur yağıyordu ve trafik çok yoğundu. Gara vardım, saat dokuzu on geçiyordu. “Artık kaçırdım” diye düşündüm ve çok sinirlendim. Kendi kendime “Keşke daha erken çıksaydım!” diyordum.",
    "Sonra bir anons duydum: Ankara treni yirmi dakika rötarlıymış! Meğer tren hâlâ peronda bekliyormuş. Koşarak bindim ve yerime oturdum. Yanımdaki yolcu gülümsedi: “Ben de sizin gibi geç kalmıştım” dedi.",
    "Böylece yolculuk güzel başladı. Seni çok özledim, yakında görüşelim!",
    "Sevgiler, Melis"
  ],
  gloss: { "rötarlı": "mit Verspätung", "anons": "Durchsage", "kendi kendime": "zu mir selbst", "çıksaydım": "hätte ich doch verlassen/wäre ich doch losgegangen", "böylece": "so, auf diese Weise", "diye": "(leitet wörtliche Rede ein)", "diyordum": "ich sagte (immer wieder)", "gara": "zum Bahnhof", "gidecektim": "ich wollte fahren", "yoğundu": "war dicht" },
  questions: [
    { id: "tr-b1-r02.q1", t: "mc", q: "Wann sollte der Zug eigentlich abfahren?", o: ["Um neun", "Um halb neun", "Um zehn nach neun", "Um zehn"], a: 0,
      why: { 1: "Um halb neun ist die Erzählerin **von zu Hause losgegangen**.", 2: "Zehn nach neun war es, als sie am Bahnhof ankam.", 3: "Eine Abfahrt um zehn wird nicht erwähnt." },
      e: "*Tren dokuzda kalkacaktı.* -AcAktI: Der Plan der Vergangenheit – der Zug sollte um neun fahren." },
    { id: "tr-b1-r02.q2", t: "mc", q: "Wie war der Weg zum Bahnhof?", o: ["Es regnete und viel Verkehr war auf der Straße.", "Die Sonne schien, und die Straße war leer.", "Sie ging zu Fuß und es war ruhig.", "Der Bus hatte eine Panne."], a: 0,
      why: { 1: "Im Text steht: *yağmur yağıyordu*.", 2: "Von Zufußgehen ist nicht die Rede.", 3: "Eine Panne wird nicht erwähnt." },
      e: "*yağmur yağıyordu ve trafik çok yoğundu* = Kulisse der Szene (-Iyordu, -(y)DI)." },
    { id: "tr-b1-r02.q3", t: "mc", q: "Was erfuhr die Erzählerin durch die Durchsage?", o: ["Der Zug hatte Verspätung und stand noch am Bahnsteig.", "Der Zug war schon abgefahren.", "Der Zug fiel aus.", "Der Zug fuhr von einem anderen Gleis."], a: 0,
      why: { 1: "Das dachte sie – bis zur Durchsage.", 2: "Von Ausfall ist keine Rede.", 3: "Das Gleis wird nicht erwähnt." },
      e: "*Ankara treni yirmi dakika rötarlıymış* – -(y)mIş am Nomen: Das hat sie gerade erst erfahren." },
    { id: "tr-b1-r02.q4", t: "gap", q: "Gara vardım, saat dokuzu on ___ . (geçmek – Es war schon zehn nach neun.)", a: ["geçiyordu"],
      wrong: { "geçti": "-DI wäre ein Ereignis („die Zeit verging“). Die Uhrzeit ist Kulisse: -Iyordu.", "geçiyor": "Das ist Präsens, die Szene liegt in der Vergangenheit.", "geçerdi": "Das wäre Gewohnheit.", "geçecekti": "Das hieße „es sollte vergehen“." },
      e: "geç + **iyor** + **du** = **geçiyordu**. „Saat dokuzu on geçiyordu“ = es war zehn nach neun (wörtlich „die Uhr passierte neun um zehn“)." },
    { id: "tr-b1-r02.q5", t: "mc", q: "Was sagte der Fahrgast neben ihr?", o: ["Er sei auch zu spät gekommen.", "Er habe den Zug verpasst.", "Er sei zum ersten Mal in Ankara.", "Er habe ihr den Platz gegeben."], a: 0,
      why: { 1: "Er sitzt ja im Zug.", 2: "Davon sagt er nichts.", 3: "Davon steht im Text nichts." },
      e: "*Ben de sizin gibi geç kalmıştım* = „Ich war auch (wie Sie) zu spät dran.“ -mIştI = Vorzeitigkeit." }
  ]
});

K.addText('tr-b1-r03', {
  level: 'B1', kind: 'read', scene: 'sokak', genre: 'artikel',
  title: "Eski mahalle", sub: "Das alte Viertel",
  body: [
    "Bugün çocukluğumun mahallesine gittim. Her şey değişmiş! Çocukken her sabah bu sokaktan okula yürürdüm. Bakkal amca bana hep bir şeker verirdi. Sokağın başındaki bakkal kapanmış, yerinde büyük bir market açılmış. Eski sinema kafe olmuş. Bir zamanlar top oynadığımız boş arsada yeni bir apartman var.",
    "Eski komşumuzun kapısını çaldım, ama kapıyı yabancı biri açtı. Meğer komşumuz yıllar önce başka bir şehre taşınmış. Çok üzüldüm.",
    "Neyse ki park hâlâ yerindeydi. Bankta oturup çocukluğumu düşündüm. Bir an kendimi yine çocuk gibi hissettim. Birçok şey değişmiş, ama anılarım hâlâ yerinde."
  ],
  gloss: { "bakkal": "Krämerladen", "arsada": "auf der Brachfläche", "yerinde": "an seiner Stelle", "açtı": "öffnete", "açılmış": "ist eröffnet worden", "kafe": "Café", "top": "Ball", "şehre": "in eine Stadt" },
  questions: [
    { id: "tr-b1-r03.q1", t: "mc", q: "Was geschah mit dem Krämerladen?", o: ["Er wurde geschlossen und durch einen Supermarkt ersetzt.", "Er wurde größer.", "Er ist heute ein Café.", "Er ist umgezogen."], a: 0,
      why: { 1: "Er hat zugemacht (*kapanmış*).", 2: "Ein Café ist der frühere Kinosaal.", 3: "Vom Umzug des Ladens ist nicht die Rede." },
      e: "*bakkal kapanmış, yerinde büyük bir market açılmış* – Überraschung: Das Ergebnis siehst du jetzt, den Vorgang hast du nicht gesehen: -mIş." },
    { id: "tr-b1-r03.q2", t: "mc", q: "Was ist aus dem alten Kino geworden?", o: ["Ein Café", "Ein Hotel", "Ein Supermarkt", "Ein Wohnhaus"], a: 0,
      why: { 1: "Ein Hotel wird nicht erwähnt.", 2: "Der Supermarkt steht an der Stelle des Krämers.", 3: "Ein Apartmenthaus steht auf der früheren Brachfläche." },
      e: "*Eski sinema kafe olmuş.* = Das alte Kino ist ein Café geworden." },
    { id: "tr-b1-r03.q3", t: "gap", q: "Meğer komşumuz yıllar önce taşın___ . (… ist längst umgezogen, wie sich herausstellt.)", a: ["mış", "mıştı"],
      wrong: { "dı": "-DI würde sagen, dass die Erzählerin den Umzug selbst erlebt hat. Sie entdeckt ihn aber neu: -mIş.", "miş": "Letzter Vokal von *taşın-* ist **ı** → -m**ı**ş.", "ıyor": "Das ist Präsens, der Umzug war längst." },
      e: "taşın + **mış**. *Meğer* kündigt an: Das habe ich gerade erst erfahren. Auch *taşınmıştı* ist möglich und betont, dass der Umzug schon lange vorher geschehen war." },
    { id: "tr-b1-r03.q4", t: "mc", q: "Was war unverändert geblieben?", o: ["Der Park", "Die Bank vor dem Haus", "Die Straße", "Das Haus des Nachbarn"], a: 0,
      why: { 1: "Sie setzt sich auf eine Bank – aber die Bank ist im Park.", 2: "Die Straße wird nicht beschrieben.", 3: "Dort wohnt jetzt ein Fremder." },
      e: "*Neyse ki park hâlâ yerindeydi.* = „Zum Glück war der Park noch an seinem Platz.“" },
    { id: "tr-b1-r03.q5", t: "mc", q: "Wie fühlt sich die Erzählerin am Ende?", o: ["Etwas traurig, aber mit schönen Erinnerungen", "Sehr glücklich und aufgeregt", "Wütend auf die Stadtverwaltung", "Gelangweilt"], a: 0,
      why: { 1: "Sie war „sehr traurig“ (*çok üzüldüm*), nicht aufgeregt.", 2: "Von Wut steht nichts im Text.", 3: "Sie denkt in Ruhe an ihre Kindheit." },
      e: "*Birçok şey değişmiş, ama anılarım hâlâ yerinde.* = Vieles hat sich verändert, aber die Erinnerungen sind noch da." }
  ]
});

/* ================= HÖRTEXTE ================= */

K.addText('tr-b1-h01', {
  level: 'B1', kind: 'listen', scene: 'ev', genre: 'anrufbeantworter',
  title: "Sesli mesaj", sub: "Eine Sprachnachricht", plays: 2,
  lines: [
    { s: 'Cem', g: 'm', t: "Merhaba, ben Cem. Seni dün akşam üç kez aradım, ama açmadın. Sinemaya gidecektik, unuttun mu? Ben biletleri almıştım ve yarım saat kapıda bekledim. Hava çok soğuktu, ama sen gelmedin. Endişelendim, bir şey mi oldu diye düşündüm. Sonra Ece aradı, senin telefonunun şarjı bitmiş. Neyse, film çok kötüymüş, bir şey kaçırmadık. Yarın birlikte kahve içelim mi? Beni ara, tamam mı?", n: "Hallo, ich bin Cem. Ich habe dich gestern Abend dreimal angerufen, aber du bist nicht rangegangen. Wir wollten ins Kino gehen, hast du es vergessen? Ich hatte die Karten gekauft und eine halbe Stunde vor der Tür gewartet. Es war sehr kalt, aber du bist nicht gekommen. Ich machte mir Sorgen und fragte mich, ob etwas passiert sei. Dann hat Ece angerufen: Der Akku deines Handys ist wohl leer gewesen. Egal, der Film soll sehr schlecht sein, wir haben nichts verpasst. Wollen wir morgen zusammen Kaffee trinken? Ruf mich an, ja?" }
  ],
  gloss: { "şarj": "Akku, Ladung", "bitmiş": "(ist) zu Ende, leer", "almıştım": "ich hatte gekauft", "açmadın": "du hast nicht abgenommen", "gidecektik": "wir wollten gehen", "içelim": "lass uns trinken" },
  questions: [
    { id: "tr-b1-h01.q1", t: "mc", q: "Wie oft hat Cem angerufen?", o: ["Dreimal", "Zweimal", "Einmal", "Gar nicht"], a: 0,
      why: { 1: "*üç kez* heißt dreimal.", 2: "Einmal wäre *bir kez*.", 3: "Er hat ja angerufen (*aradım*)." },
      e: "*Seni dün akşam üç kez aradım.* = „Ich habe dich gestern Abend dreimal angerufen.“ *kez* steht nach der Zahl im Singular." },
    { id: "tr-b1-h01.q2", t: "mc", q: "Was hatten die beiden vorgehabt?", o: ["Ins Kino zu gehen", "Zusammen zu essen", "Einen Ausflug zu machen", "Ein Konzert zu besuchen"], a: 0,
      why: { 1: "Vom Essen ist erst morgen die Rede (Kaffee).", 2: "Ein Ausflug wird nicht erwähnt.", 3: "Es war ein Kinobesuch (*sinemaya*)." },
      e: "*Sinemaya gidecektik* = „Wir wollten ins Kino gehen.“ -(y)AcAktI: Plan der Vergangenheit." },
    { id: "tr-b1-h01.q3", t: "mc", q: "Warum hat der Freund nicht abgehoben?", o: ["Der Akku seines Telefons war leer.", "Er war im Kino.", "Er hat geschlafen.", "Er war krank."], a: 0,
      why: { 1: "Cem war im Kino – nicht der Freund.", 2: "Von Schlafen sagt Cem nichts.", 3: "Von Krankheit ist nicht die Rede." },
      e: "*telefonunun şarjı bitmiş* = der Akku war offenbar leer. -mIş: Cem erfuhr es von Ece und war nicht dabei." },
    { id: "tr-b1-h01.q4", t: "mc", q: "Was schlägt Cem für morgen vor?", o: ["Zusammen Kaffee trinken", "Wieder ins Kino gehen", "Zusammen einkaufen", "Einen Spaziergang machen"], a: 0,
      why: { 1: "Das Kino ist für Cem erledigt: Der Film soll schlecht sein.", 2: "Vom Einkaufen steht nichts da.", 3: "Er spricht von Kaffee, nicht vom Spazierengehen." },
      e: "*Yarın birlikte kahve içelim mi?* = „Wollen wir morgen zusammen Kaffee trinken?“" }
  ]
});

K.addText('tr-b1-h02', {
  level: 'B1', kind: 'listen', scene: 'aile', genre: 'gespraech',
  title: "Çocukken", sub: "Als wir Kinder waren", plays: 2,
  lines: [
    { s: 'Ayşe', g: 'f', t: "Çocukken yazları ne yapardın, Murat?", n: "Was hast du als Kind im Sommer gemacht, Murat?" },
    { s: 'Murat', g: 'm', t: "Dedemlerin köyünde kalırdık. Sabah erkenden kalkardık, öğleden sonra gölde yüzerdik. Akşamları da dedem bize eski hikâyeler anlatırdı.", n: "Wir blieben im Dorf meiner Großeltern. Wir standen früh auf, nachmittags schwammen wir im See. Abends erzählte uns mein Opa alte Geschichten." },
    { s: 'Ayşe', g: 'f', t: "Peki, hiç sıkılmadın mı?", n: "Und, hast du dich nie gelangweilt?" },
    { s: 'Murat', g: 'm', t: "Hiç sıkılmazdık. Bazen bahçede çalışırdık, bazen oyun oynardık.", n: "Nie. Mal arbeiteten wir im Garten, mal spielten wir." },
    { s: 'Ayşe', g: 'f', t: "Ne güzel! Ben hep şehirdeydim. Yazın çok sıkılırdım, çünkü arkadaşlarım tatile giderdi.", n: "Wie schön! Ich war immer in der Stadt. Im Sommer habe ich mich sehr gelangweilt, denn meine Freunde fuhren in den Urlaub." },
    { s: 'Murat', g: 'm', t: "O zaman bu yaz bizimle köye gel. Dedem çok sevinir.", n: "Dann komm diesen Sommer mit uns ins Dorf. Mein Opa freut sich sehr." }
  ],
  gloss: { "sevinir": "freut sich" },
  questions: [
    { id: "tr-b1-h02.q1", t: "mc", q: "Wo verbrachte Murat die Sommer als Kind?", o: ["Im Dorf seiner Großeltern", "In der Stadt", "Am Meer", "In den Bergen"], a: 0,
      why: { 1: "Die Stadt war Ayşes Sommer.", 2: "Er schwamm im See, nicht im Meer.", 3: "Von Bergen ist nicht die Rede." },
      e: "*Dedemlerin köyünde kalırdık.* = „Wir blieben im Dorf meiner Großeltern.“ -(I)rdI: Gewohnheit." },
    { id: "tr-b1-h02.q2", t: "mc", q: "Was machte Murat abends?", o: ["Er hörte die Geschichten seines Opas.", "Er spielte Fußball.", "Er schaute fern.", "Er ging mit Freunden aus."], a: 0,
      why: { 1: "Fußball wird nicht erwähnt.", 2: "Im Dorf war das nicht Teil der Geschichte.", 3: "Er blieb bei Opa." },
      e: "*Akşamları da dedem bize eski hikâyeler anlatırdı.* = abends erzählte Opa alte Geschichten." },
    { id: "tr-b1-h02.q3", t: "mc", q: "Warum langweilte sich Ayşe im Sommer?", o: ["Ihre Freunde fuhren in den Urlaub.", "Sie musste arbeiten.", "Sie war krank.", "Es regnete immer."], a: 0,
      why: { 1: "Von Arbeit ist nicht die Rede.", 2: "Krankheit wird nicht erwähnt.", 3: "Vom Wetter spricht sie nicht." },
      e: "*arkadaşlarım tatile giderdi* = Gewohnheit in der Vergangenheit: Jeden Sommer fuhren die Freunde weg." },
    { id: "tr-b1-h02.q4", t: "mc", q: "Was schlägt Murat vor?", o: ["Dass Ayşe diesen Sommer ins Dorf mitkommt.", "Dass sie in die Stadt zurückfahren.", "Dass Ayşe ihm ein Märchen erzählt.", "Dass sie zusammen ins Kino gehen."], a: 0,
      why: { 1: "Sie sind schon in der Stadt.", 2: "Der Opa erzählt, nicht Ayşe.", 3: "Vom Kino ist nicht die Rede." },
      e: "*Bu yaz bizimle köye gel.* = „Komm diesen Sommer mit uns ins Dorf.“" }
  ]
});

K.addText('tr-b1-h03', {
  level: 'B1', kind: 'listen', scene: 'sokak', genre: 'interview',
  title: "Şehir nasıldı?", sub: "Wie war die Stadt damals?", plays: 2,
  lines: [
    { s: 'Gazeteci', g: 'f', t: "Gençliğinizde bu şehir nasıldı?", n: "Wie war diese Stadt in Ihrer Jugend?" },
    { s: 'Bay Kemal', g: 'm', t: "Çok farklıydı. O zamanlar tek bir otobüs hattı vardı, herkes yürüyerek giderdi. Ben bu şehre yirmi yaşında taşınmıştım. Tek bir arkadaşım yoktu. Ama komşular çok iyiydi, bana her gün yemek getirirlerdi. Akşam olunca sokaklar çok sessiz olurdu. Sonra evlendim, çocuklarımız burada büyüdü. İyi ki taşınmışım. Şimdi her yer arabalarla dolu.", n: "Sehr anders. Damals gab es nur eine Buslinie, alle gingen zu Fuß. Ich war mit zwanzig in diese Stadt gezogen. Ich hatte keinen einzigen Freund. Aber die Nachbarn waren sehr nett, sie brachten mir jeden Tag Essen. Wenn es Abend wurde, waren die Straßen sehr still. Dann habe ich geheiratet, unsere Kinder sind hier aufgewachsen. Zum Glück bin ich umgezogen. Heute ist alles voller Autos." }
  ],
  gloss: { "hattı": "Linie", "giderdi": "ging (immer)", "şehre": "in die Stadt" },
  questions: [
    { id: "tr-b1-h03.q1", t: "mc", q: "Wie kamen die Leute damals meistens voran?", o: ["Zu Fuß", "Mit dem Auto", "Mit der Straßenbahn", "Mit dem Fahrrad"], a: 0,
      why: { 1: "Autos werden nicht erwähnt.", 2: "Eine Straßenbahn wird nicht erwähnt.", 3: "Fahrräder werden nicht erwähnt." },
      e: "*herkes yürüyerek giderdi* = alle gingen zu Fuß (Gewohnheit, -(I)rdI)." },
    { id: "tr-b1-h03.q2", t: "mc", q: "Wie alt war Herr Kemal, als er in die Stadt zog?", o: ["Zwanzig", "Dreißig", "Zehn", "Fünfzig"], a: 0,
      why: { 1: "*otuz* = dreißig; er sagt *yirmi*.", 2: "Zehn wäre *on*.", 3: "Fünfzig wäre *elli*." },
      e: "*Ben bu şehre yirmi yaşında taşınmıştım.* -mIştI: Der Umzug lag vor allem, was er danach erzählt." },
    { id: "tr-b1-h03.q3", t: "mc", q: "Was taten die Nachbarn für ihn?", o: ["Sie brachten ihm jeden Tag Essen.", "Sie halfen ihm beim Umzug.", "Sie liehen ihm Geld.", "Sie luden ihn zur Hochzeit ein."], a: 0,
      why: { 1: "Vom Umzug selbst sagt er nichts.", 2: "Von Geld ist nicht die Rede.", 3: "Die Hochzeit war später, und Nachbarn werden dort nicht erwähnt." },
      e: "*bana her gün yemek getirirlerdi* = sie brachten mir täglich Essen. Gewohnheit: -(I)rdI." },
    { id: "tr-b1-h03.q4", t: "mc", q: "Was sagt er über den Umzug?", o: ["Er ist froh, dass er umgezogen ist.", "Er bereut es.", "Er will zurückziehen.", "Er will noch einmal umziehen."], a: 0,
      why: { 1: "*İyi ki* heißt „zum Glück, gut dass“.", 2: "Von Rückkehr sagt er nichts.", 3: "Von neuem Umzug sagt er nichts." },
      e: "*İyi ki taşınmışım.* = „Gut, dass ich umgezogen bin.“ -mIş mit -(I)m: Eine Bilanz, die er erst im Rückblick zieht." }
  ]
});

})(window.KOPRU);
