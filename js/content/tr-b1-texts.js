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

K.addText('tr-b1-r04', {
  level: 'B1', kind: 'read', scene: 'okul', genre: 'artikel',
  title: "Mahalle kütüphanesi yeniden açıldı", sub: "Die Stadtteilbibliothek ist wieder eröffnet",
  body: [
    "Şehrimizin en eski kütüphanesi, iki yıl süren yenileme çalışmasından sonra dün yeniden açıldı. Belediye başkanının açıklamasına göre, kütüphanede şimdi on bin kitap var ve bunların çoğunu mahalle sakinleri bağışladı.",
    "Açılışa katılan okuyucular, eski kütüphanede çalışan memurlarla uzun uzun sohbet etti. Kütüphane müdürü, çocuklar için haftada iki gün masal saati düzenleyeceğini söyledi. Sessizce çalışmak isteyenler için ayrı bir okuma salonu da var. Gençlerin kullanabileceği bilgisayarlar ve ücretsiz internet de hizmete girdi.",
    "Yaşlı bir okuyucu, çocukluğunda ilk kez bu kütüphaneden kitap aldığını anlattı. “O zaman burada okuduğum her kitap bana yeni bir dünya açardı” dedi.",
    "Kütüphane pazartesiden cumartesiye kadar sabah dokuzdan akşam altıya kadar açık olacak. Yeni üye olmak isteyenlerden kimliklerini getirmeleri rica ediliyor.",
    "Çocuk bölümünde yüzlerce resimli kitap bulunuyor. Okuldan çıkan çocukların öğleden sonra ödevlerini burada yapabilmesi için küçük masalar da kondu. Belediye, kütüphaneye gelen her çocuğa ilk gün ücretsiz bir kitap çantası verecek."
  ],
  gloss: { "bağışladı": "hat gespendet", "kimliklerini": "ihre Ausweise", "rica ediliyor": "es wird gebeten", "yenileme": "Renovierung", "sakinleri": "Bewohner", "çalışmasından": "aus der Arbeit", "açılışa": "zur Eröffnung", "açardı": "öffnete (immer)", "okuma salonu": "Lesesaal", "resimli": "bebildert", "kondu": "wurden hingestellt", "kitap çantası": "Büchertasche", "aldığını": "dass er (ein Buch) nahm", "ayrı": "separat", "açıldı": "wurde eröffnet", "bölümünde": "in der Abteilung", "etti": "führte (Gespräch)", "hizmete": "in Betrieb", "sohbet": "Plauderei", "çoğunu": "die meisten davon", "şehrimizin": "unserer Stadt" },
  questions: [
    { id: "tr-b1-r04.q1", t: "mc", q: "Was ist am Vortag passiert?", o: ["Die älteste Bibliothek der Stadt wurde nach zwei Jahren Renovierung wieder eröffnet.", "Eine neue Schule wurde gebaut.", "Die Bibliothek wurde geschlossen.", "Der Bürgermeister hat seine Bücher gespendet."], a: 0,
      why: { 1: "Von einer Schule ist nicht die Rede.", 2: "Sie wurde nicht geschlossen, sondern *yeniden açıldı* (wieder eröffnet).", 3: "Gespendet haben die Bewohner des Viertels." },
      e: "*… iki yıl süren yenileme çalışmasından sonra dün yeniden açıldı.* Das Partizip *süren* (-(y)An) ersetzt „die zwei Jahre dauerte“." },
    { id: "tr-b1-r04.q2", t: "mc", q: "Wer hat die meisten Bücher gestiftet?", o: ["Die Bewohner des Viertels", "Der Bürgermeister", "Die Schulen", "Ein Verlag"], a: 0,
      why: { 1: "Der Bürgermeister hat die Zahlen genannt (*açıkladı*), nicht gespendet.", 2: "Schulen werden nicht erwähnt.", 3: "Ein Verlag wird nicht erwähnt." },
      e: "*bunların çoğunu mahalle sakinleri bağışladı* = die meisten davon haben die Bewohner gespendet." },
    { id: "tr-b1-r04.q3", t: "gap", q: "Kütüphane müdürü masal saati ___ söyledi. (düzenlemek – Der Leiter sagte, dass er eine Märchenstunde veranstalten wird.)", a: ["düzenleyeceğini"],
      wrong: { "düzenlediğini": "Das hieße „er habe veranstaltet“ (Vergangenheit). Im Text geht es um die Zukunft.", "düzenleyeceğimi": "-imi = „ich“. Der Leiter spricht von sich: -ini.", "düzenleceğini": "*düzenle-* endet auf Vokal → Puffer-**y**: düzenle**y**eceğini." },
      e: "düzenle- + **y** + **eceğ** + **i** + **ni** = **düzenleyeceğini**. Indirekte Rede mit Zukunft: -(y)AcAğInI söylemek." },
    { id: "tr-b1-r04.q4", t: "mc", q: "Was erzählte der ältere Besucher?", o: ["Er hatte in seiner Kindheit zum ersten Mal hier ein Buch ausgeliehen.", "Er hat die Bibliothek gegründet.", "Er arbeitete dort als Bibliothekar.", "Er lernte hier lesen."], a: 0,
      why: { 1: "Davon steht nichts im Text.", 2: "Er war Leser, nicht Angestellter.", 3: "Er sagt nur, dass er hier zum ersten Mal ein Buch genommen hat." },
      e: "*çocukluğunda ilk kez bu kütüphaneden kitap aldığını anlattı* = er erzählte, dass er in seiner Kindheit zum ersten Mal ein Buch von hier mitnahm." },
    { id: "tr-b1-r04.q5", t: "mc", q: "Wann ist die Bibliothek geöffnet?", o: ["Montag bis Samstag, von neun bis achtzehn Uhr", "Täglich, von neun bis achtzehn Uhr", "Montag bis Freitag, von acht bis siebzehn Uhr", "Nur am Wochenende"], a: 0,
      why: { 1: "Sonntags bleibt sie geschlossen: *pazartesiden cumartesiye kadar*.", 2: "Sie öffnet um neun und schließt um sechs, und Samstag gehört dazu.", 3: "Am Wochenende ist nur Samstag offen; die Woche ist auch offen." },
      e: "*pazartesiden cumartesiye kadar sabah dokuzdan akşam altıya kadar* = Montag bis Samstag, von neun morgens bis sechs abends." }
  ]
});

K.addText('tr-b1-r05', {
  level: 'B1', kind: 'read', scene: 'ev', genre: 'nachricht',
  title: "Üst kattaki komşu", sub: "Der Nachbar von oben (Forumsbeitrag)",
  body: [
    "Merhaba arkadaşlar, bir konuda tavsiyenize ihtiyacım var. Üst katımda oturan komşu her gece geç saatlere kadar müzik dinliyor. Geçen hafta kapısını çaldım ve gürültüden rahatsız olduğumu söyledim. O da bunu bilmediğini, bundan sonra daha dikkatli olacağını söyledi.",
    "İlk iki gün sessizdi, ama sonra yine başladı. Dün akşam apartman yöneticisiyle konuştum. Yönetici, komşuya bir mektup yazacağını söyledi; ayrıca bütün daire sahiplerinin kurallara uymasını istediğini belirtti.",
    "Açıkçası bu durum beni yoruyor, çünkü sabah erken kalkmam gerekiyor. Dün gece saat ikide müzik hâlâ çalıyordu. Komşuma tekrar gitmek mi, yoksa yöneticinin cevabını beklemek mi daha doğru olur, bilemiyorum. Kimseyle de kavga etmek istemiyorum. Gürültüyü kaydetmemi öneren arkadaşlarım da var, ama bu bana biraz fazla geliyor. Yaşlı bir komşum, böyle durumlarda sabırlı olan insanların sonunda kazandığını söylüyor.",
    "Sizce ne yapmalıyım? Sizin yaşadığınız benzer bir olay var mı? Şimdiden teşekkürler!"
  ],
  gloss: { "rahatsız": "gestört, unwohl", "daire sahiplerinin": "der Wohnungseigentümer", "kaydetmemi": "dass ich aufnehme", "kavga": "Streit", "uymasını": "dass sie sich halten (an)", "kapısını": "seine Tür", "çaldım": "ich klopfte", "fazla": "zu viel" },
  questions: [
    { id: "tr-b1-r05.q1", t: "mc", q: "Was stört den Verfasser?", o: ["Der Nachbar von oben hört nachts laut Musik.", "Der Nachbar nebenan hat einen Hund.", "Im Treppenhaus ist es schmutzig.", "Der Hausverwalter schreibt zu viele Briefe."], a: 0,
      why: { 1: "Ein Hund wird nicht erwähnt.", 2: "Vom Treppenhaus steht nichts im Text.", 3: "Der Verwalter will helfen." },
      e: "*Üst katımda oturan komşu* = der Nachbar, der über mir wohnt (Partizip *oturan*). *geç saatlere kadar müzik dinliyor* = er hört bis spät in die Nacht Musik." },
    { id: "tr-b1-r05.q2", t: "mc", q: "Was hat der Nachbar beim Gespräch an der Tür gesagt?", o: ["Er habe nicht gewusst, dass es stört, und werde aufpassen.", "Er hat sich geweigert, leiser zu sein.", "Er hat sich bei der Polizei beschwert.", "Er zog am nächsten Tag aus."], a: 0,
      why: { 1: "Im Gegenteil: Er hat versprochen, dass er sich Mühe geben wird.", 2: "Von der Polizei ist nicht die Rede.", 3: "Er wohnt weiterhin dort." },
      e: "*bunu bilmediğini, daha dikkatli olacağını söyledi* = Er sagte, er habe es nicht gewusst und werde vorsichtiger sein." },
    { id: "tr-b1-r05.q3", t: "gap", q: "Yönetici, komşuya bir mektup ___ söyledi. (yazmak – Der Verwalter sagte, er werde dem Nachbarn einen Brief schreiben.)", a: ["yazacağını"],
      wrong: { "yazdığını": "Das hieße „er habe geschrieben“. Der Brief liegt noch in der Zukunft.", "yazacağımı": "-ımı = „ich“. Der Verwalter spricht über sich: -ını.", "yazacakını": "k wird vor Vokal zu **ğ**: yaza**cağ**ını." },
      e: "yaz- + **acağ** + **ı** + **nı** = **yazacağını**." },
    { id: "tr-b1-r05.q4", t: "mc", q: "Was wünscht sich der Verwalter von den Eigentümern?", o: ["Dass sie sich an die Regeln halten.", "Dass sie mehr Miete zahlen.", "Dass sie umziehen.", "Dass sie ihm schreiben."], a: 0,
      why: { 1: "Von Miete ist nicht die Rede.", 2: "Umzug wird nicht gefordert.", 3: "Er schreibt dem Nachbarn, nicht umgekehrt." },
      e: "*bütün daire sahiplerinin kurallara uymasını istediğini belirtti* = er betonte, dass er will, dass alle Eigentümer die Regeln befolgen." },
    { id: "tr-b1-r05.q5", t: "mc", q: "Was meint der/die ältere Nachbar(in)?", o: ["Geduldige Menschen gewinnen am Ende.", "Man soll sofort die Polizei rufen.", "Man soll selbst laute Musik hören.", "Man soll umziehen."], a: 0,
      why: { 1: "Davon sagt sie nichts.", 2: "Das würde den Streit nur verschärfen und wird nicht genannt.", 3: "Umziehen wird nicht vorgeschlagen." },
      e: "*sabırlı olan insanların sonunda kazandığını söylüyor* = sie sagt, dass die Geduldigen am Ende gewinnen." }
  ]
});

K.addText('tr-b1-r06', {
  level: 'B1', kind: 'read', scene: 'aile', genre: 'email',
  title: "Yeni şehirden mektup", sub: "Ein Brief aus der neuen Stadt",
  body: [
    "Sevgili Burak,",
    "Nasılsın? Yeni şehre taşınalı iki ay oldu, sonunda sana yazmaya zaman buldum. Burada tanıştığım insanlar çok sıcakkanlı. Komşum bana mahallenin en iyi fırınını gösterdi; her sabah oradan aldığım ekmek harika.",
    "İş yerindeki arkadaşlarımın söylediğine göre, kış aylarında kar çok yağıyormuş. O yüzden şimdiden kalın bir mont aldım. Geçen hafta bir arkadaşım beni dağa götürdü. Orada gördüğüm manzarayı hiç unutmayacağım!",
    "Annem aradığında burada çok mutlu olduğumu söyledim, ama itiraf edeyim, bazen seni ve eski arkadaşlarımı özlüyorum. Bana gelmeyi düşündüğünü söylemiştin; bir ara gelirsen seni gezdirmek isterim. Yaşadığım ev küçük ama çok aydınlık.",
    "Hafta sonları şehrin eski mahallelerinde yürüyüş yapmayı seviyorum. Orada gördüğüm tarihî evler çok etkileyici. Geçen cumartesi tanıştığım yaşlı bir hanım, bana bu mahalledeki herkesin birbirini tanıdığını anlattı. Bu yüzden kendimi hiç yalnız hissetmiyorum. Pazar günleri de pazara gidip taze sebze alıyorum.",
    "Cevabını bekliyorum.",
    "Sevgiler, Elif"
  ],
  gloss: { "sıcakkanlı": "herzlich, freundlich", "aydınlık": "hell", "taşınalı": "seit ich umgezogen bin", "yağıyormuş": "es schneit wohl", "itiraf edeyim": "ich gebe zu", "gezdirmek": "herumführen", "söylemiştin": "du hattest gesagt", "buldum": "ich fand", "gösterdi": "zeigte", "unutmayacağım": "ich werde nicht vergessen", "götürdü": "brachte (hin)", "orada": "dort", "aldığım": "das ich kaufe", "alıyorum": "ich kaufe", "aylarında": "in den Monaten", "gidip": "hingehen und", "oradan": "von dort", "şehre": "in die Stadt", "şehrin": "der Stadt" },
  questions: [
    { id: "tr-b1-r06.q1", t: "mc", q: "Seit wann wohnt Elif in der neuen Stadt?", o: ["Seit zwei Monaten", "Seit zwei Jahren", "Seit zwei Wochen", "Seit einem Jahr"], a: 0,
      why: { 1: "*iki yıl* wären zwei Jahre, im Text steht *iki ay*.", 2: "*iki hafta* wären zwei Wochen.", 3: "Ein Jahr wird nicht erwähnt." },
      e: "*Yeni şehre taşınalı iki ay oldu.* = Seit dem Umzug sind zwei Monate vergangen." },
    { id: "tr-b1-r06.q2", t: "mc", q: "Was hat der Nachbar ihr gezeigt?", o: ["Die beste Bäckerei des Viertels", "Den Weg zur Arbeit", "Das Rathaus", "Einen Park"], a: 0,
      why: { 1: "Den Weg zur Arbeit erwähnt der Brief nicht.", 2: "Das Rathaus wird nicht erwähnt.", 3: "Einen Park erwähnt der Brief nicht." },
      e: "*Komşum bana mahallenin en iyi fırınını gösterdi.* = „Mein Nachbar hat mir die beste Bäckerei des Viertels gezeigt.“" },
    { id: "tr-b1-r06.q3", t: "gap", q: "İş yerindeki arkadaşlarımın söylediğine ___ , kışın kar çok yağıyormuş. (Laut meinen Kollegen soll es im Winter viel schneien.)", a: ["göre"],
      wrong: { "rağmen": "*rağmen* heißt „trotz“. Für „laut“ brauchst du *göre*.", "için": "*için* heißt „für/weil“, nicht „laut“.", "kadar": "*kadar* heißt „bis/so viel wie“." },
      e: "*söylediğine göre* = laut dem, was sie sagten. *göre* verlangt den Dativ (-ine)." },
    { id: "tr-b1-r06.q4", t: "mc", q: "Was hat Elif ihrer Mutter am Telefon gesagt?", o: ["Dass sie hier sehr glücklich ist.", "Dass sie wieder zurückkommt.", "Dass sie ihren Job verloren hat.", "Dass sie krank ist."], a: 0,
      why: { 1: "Von Rückkehr ist nicht die Rede.", 2: "Von Jobverlust ist nicht die Rede.", 3: "Von Krankheit ist nicht die Rede." },
      e: "*burada çok mutlu olduğumu söyledim* = ich sagte, dass ich hier sehr glücklich bin. Possessiv -um = ich." },
    { id: "tr-b1-r06.q5", t: "mc", q: "Was möchte Elif von Burak?", o: ["Dass er sie besucht und sie ihm die Stadt zeigt.", "Dass er ihr Geld schickt.", "Dass er auch umzieht.", "Dass er ihre Mutter anruft."], a: 0,
      why: { 1: "Von Geld ist nicht die Rede.", 2: "Sie freut sich auf einen Besuch, nicht auf einen Umzug.", 3: "Sie erwähnt keinen Anruf bei der Mutter." },
      e: "*bir ara gelirsen seni gezdirmek isterim* = wenn du irgendwann kommst, würde ich dich gern herumführen." }
  ]
});

K.addText('tr-b1-h04', {
  level: 'B1', kind: 'listen', scene: 'hava', genre: 'radio',
  title: "Akşam haberleri", sub: "Radionachrichten am Abend", plays: 2,
  lines: [
    { s: 'Spiker', g: 'f', t: "Dinleyicilerimize iyi akşamlar. Meteoroloji yetkililerinin açıklamasına göre, yarın ülkenin kuzeyinde yoğun kar yağışı bekleniyor. Yetkililer, sürücülerin yola çıkmadan önce yol durumunu kontrol etmesini istedi. Kar nedeniyle bazı otobüs seferlerinin iptal edildiğini bildirdiler. Okulların tatil olup olmayacağına yarın sabah karar verilecek. Bu arada şehir merkezinde görev yapan belediye ekipleri, yolları açık tutmak için bütün gece çalışacak. Belediye başkanı, yolların açık kalması için yeterli tuz ve araç olduğunu söyledi. Hava durumunu bir sonraki haber bülteninde yeniden vereceğiz. Sevgili dinleyiciler, dışarı çıkacaksanız sıcak giyinin.", n: "Guten Abend, liebe Hörerinnen und Hörer. Laut Angaben der Meteorologen wird morgen im Norden des Landes starker Schneefall erwartet. Die Verantwortlichen baten die Autofahrer, vor der Abfahrt die Straßenlage zu prüfen. Sie gaben bekannt, dass wegen des Schnees einige Busverbindungen gestrichen wurden. Ob die Schulen frei haben, wird morgen früh entschieden. Währenddessen werden die städtischen Teams, die in der Innenstadt arbeiten, die ganze Nacht arbeiten, um die Straßen frei zu halten. Der Bürgermeister sagte, es gebe genug Salz und Fahrzeuge, damit die Straßen frei bleiben. Das Wetter geben wir in der nächsten Nachrichtensendung erneut durch. Liebe Hörer, wenn Sie nach draußen gehen, ziehen Sie sich warm an." }
  ],
  gloss: { "meteoroloji": "Wetterdienst", "yoğun": "stark, dicht", "kar yağışı": "Schneefall", "sürücülerin": "der Fahrer", "bülten": "Nachrichtensendung", "iptal edildiğini": "dass es gestrichen wurde", "seferlerinin": "ihrer Verbindungen", "karar verilecek": "es wird entschieden", "giyinin": "ziehen Sie sich an", "bülteninde": "in der Sendung", "dışarı": "nach draußen", "etmesini": "dass er tut", "kuzeyinde": "im Norden", "olmayacağına": "ob es nicht sein wird", "olup": "sein und", "ülkenin": "des Landes", "tuz": "Salz", "araç": "Fahrzeug", "yeterli": "genug" },
  questions: [
    { id: "tr-b1-h04.q1", t: "mc", q: "Was wird für morgen erwartet?", o: ["Starker Schneefall im Norden", "Regen im Süden", "Sonne im ganzen Land", "Sturm am Meer"], a: 0,
      why: { 1: "Es geht um den Norden und um Schnee, nicht um Regen.", 2: "Das Gegenteil ist der Fall.", 3: "Von Sturm ist nicht die Rede." },
      e: "*yarın ülkenin kuzeyinde yoğun kar yağışı bekleniyor* = morgen wird im Norden starker Schneefall erwartet." },
    { id: "tr-b1-h04.q2", t: "mc", q: "Worum bitten die Verantwortlichen die Fahrer?", o: ["Vor der Abfahrt die Straßenlage zu prüfen", "Zu Hause zu bleiben", "Langsamer zu fahren", "Eine Genehmigung zu holen"], a: 0,
      why: { 1: "Sie sagen nicht, dass man zu Hause bleiben muss.", 2: "Von langsamerem Fahren spricht die Meldung nicht.", 3: "Von einer Genehmigung ist nicht die Rede." },
      e: "*sürücülerin yola çıkmadan önce yol durumunu kontrol etmesini istedi* = Sie baten, dass die Fahrer vor der Abfahrt die Straßenlage kontrollieren." },
    { id: "tr-b1-h04.q3", t: "mc", q: "Was ist noch nicht entschieden?", o: ["Ob die Schulen frei haben", "Ob die Busse fahren", "Ob die Straßen geräumt werden", "Ob das Wetter schlecht wird"], a: 0,
      why: { 1: "Einige Busverbindungen wurden schon gestrichen.", 2: "Die Teams arbeiten die ganze Nacht.", 3: "Starker Schneefall wird erwartet." },
      e: "*Okulların tatil olup olmayacağına yarın sabah karar verilecek.* = Ob die Schulen frei haben, wird morgen früh entschieden." },
    { id: "tr-b1-h04.q4", t: "mc", q: "Was empfiehlt die Sprecherin zum Schluss?", o: ["Sich warm anzuziehen", "Zu Hause zu bleiben", "Das Auto stehen zu lassen", "Die Heizung anzumachen"], a: 0,
      why: { 1: "Das empfiehlt sie nicht.", 2: "Davon ist keine Rede.", 3: "Davon ist keine Rede." },
      e: "*dışarı çıkacaksanız sıcak giyinin* = wenn Sie hinausgehen, ziehen Sie sich warm an." }
  ]
});

K.addText('tr-b1-h05', {
  level: 'B1', kind: 'listen', scene: 'ofis', genre: 'gespraech',
  title: "Toplantı nasıl geçti?", sub: "Wie war die Besprechung?", plays: 2,
  lines: [
    { s: 'Ayşe', g: 'f', t: "Toplantı nasıl geçti? Müdür ne dedi?", n: "Wie war die Besprechung? Was hat der Chef gesagt?" },
    { s: 'Cem', g: 'm', t: "Gelecek ay yeni bir proje başlatacağımızı söyledi. Ekibin büyüyeceğini de belirtti.", n: "Er sagte, dass wir nächsten Monat ein neues Projekt starten. Er betonte auch, dass das Team größer wird." },
    { s: 'Ayşe', g: 'f', t: "Peki, bana bir şey sordu mu?", n: "Hat er mich etwas gefragt?" },
    { s: 'Cem', g: 'm', t: "Evet, senin raporu bitirip bitirmediğini sordu. Ben de yarın bitireceğini söyledim.", n: "Ja, er fragte, ob du den Bericht fertig hast. Ich habe gesagt, dass du ihn morgen fertig machst." },
    { s: 'Ayşe', g: 'f', t: "Teşekkürler! Aslında dün bitirmiştim, ama göndermeyi unutmuşum. Hemen gönderiyorum.", n: "Danke! Eigentlich hatte ich ihn gestern fertig gemacht, aber ich habe wohl vergessen, ihn zu schicken. Ich schicke ihn sofort." },
    { s: 'Cem', g: 'm', t: "Güzel. Bir de müdür herkesin cuma günü erken gelmesini istedi.", n: "Gut. Außerdem will der Chef, dass alle am Freitag früh kommen." },
    { s: 'Ayşe', g: 'f', t: "Peki. Başka bir şey var mı?", n: "Gut. Gibt es sonst noch etwas?" },
    { s: 'Cem', g: 'm', t: "Evet, yarın öğle yemeğini birlikte yiyeceğimizi söyledi. Ben saat on ikiyi öneriyorum, çünkü müdür öğleden sonra başka bir toplantıya gidecekmiş.", n: "Ja, er sagte, dass wir morgen zusammen zu Mittag essen werden. Ich schlage zwölf Uhr vor, denn der Chef soll nachmittags zu einer anderen Besprechung gehen." },
    { s: 'Ayşe', g: 'f', t: "Harika! Hemen restorana telefon edeyim.", n: "Prima! Ich rufe sofort im Restaurant an." }
  ],
  gloss: { "başlatacağımızı": "dass wir starten werden", "büyüyeceğini": "dass es größer wird", "bitirip": "fertig machen und", "göndermeyi": "das Schicken", "peki": "also gut", "edeyim": "ich rufe an", "gidecekmiş": "geht wohl/angeblich", "restorana": "ins Restaurant", "yiyeceğimizi": "dass wir essen werden", "gelmesini": "dass sie kommen" },
  questions: [
    { id: "tr-b1-h05.q1", t: "mc", q: "Was hat der Chef über den nächsten Monat gesagt?", o: ["Ein neues Projekt startet.", "Das Büro wird umziehen.", "Es gibt Urlaub für alle.", "Die Firma schließt."], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*Gelecek ay yeni bir proje başlatacağımızı söyledi.* = Er sagte, dass wir nächsten Monat ein neues Projekt starten. -(y)AcAğImIzI = „dass wir … werden“." },
    { id: "tr-b1-h05.q2", t: "mc", q: "Was fragte der Chef über Ayşe?", o: ["Ob sie den Bericht fertig hat", "Ob sie krank ist", "Ob sie umziehen will", "Ob sie am Freitag kommt"], a: 0,
      why: { 1: "Krankheit wurde nicht erwähnt.", 2: "Von Umzug ist nicht die Rede.", 3: "Das Kommen am Freitag war Teil einer anderen Aufforderung." },
      e: "*raporu bitirip bitirmediğini sordu* = er fragte, ob sie den Bericht fertig hat (-Ip -mAdIk)." },
    { id: "tr-b1-h05.q3", t: "mc", q: "Warum hat Ayşe den Bericht noch nicht geschickt?", o: ["Sie hat vergessen, ihn abzuschicken.", "Sie war krank.", "Er war noch nicht fertig.", "Sie hatte keine Zeit."], a: 0,
      why: { 1: "Krankheit wird nicht erwähnt.", 2: "Sie sagt, dass sie ihn gestern fertig hatte.", 3: "Davon sagt sie nichts." },
      e: "*dün bitirmiştim, ama göndermeyi unutmuşum* = gestern hatte ich ihn fertig, aber ich habe vergessen, ihn zu schicken." },
    { id: "tr-b1-h05.q4", t: "mc", q: "Was möchte der Chef am Freitag?", o: ["Dass alle früh kommen.", "Dass alle zu Hause arbeiten.", "Dass niemand kommt.", "Dass alle länger bleiben."], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Er will, dass alle kommen.", 3: "Gesagt wurde „früh kommen“, nicht „länger bleiben“." },
      e: "*herkesin cuma günü erken gelmesini istedi* = er wollte, dass alle am Freitag früh kommen (-mAsInI)." }
  ]
});

K.addText('tr-b1-h06', {
  level: 'B1', kind: 'listen', scene: 'sokak', genre: 'interview',
  title: "Gönüllü olmak", sub: "Ehrenamtlich arbeiten (Interview)", plays: 2,
  lines: [
    { s: 'Gazeteci', g: 'f', t: "Bu derneğin gönüllüsü olalı kaç yıl oldu?", n: "Wie viele Jahre sind Sie schon freiwillig in diesem Verein?" },
    { s: 'Bay Kemal', g: 'm', t: "Beş yıl oldu. Başlangıçta sadece hafta sonları gelirdim, şimdi hemen hemen her gün buradayım. Derneğimiz, ihtiyacı olan ailelere yemek ve giysi veriyor.", n: "Fünf Jahre. Am Anfang kam ich nur am Wochenende, jetzt bin ich fast jeden Tag hier. Unser Verein gibt bedürftigen Familien Essen und Kleidung." },
    { s: 'Gazeteci', g: 'f', t: "Sizi bu işe iten şey neydi?", n: "Was hat Sie zu dieser Arbeit gebracht?" },
    { s: 'Bay Kemal', g: 'm', t: "Çocukken komşularımız bize çok yardım etmişti. Büyüyünce bunun karşılığını vermek istedim. Yardım ettiğimiz insanların mutlu olduğunu görmek bana büyük güç veriyor. Herkesin bir şeyler yapabileceğine inanıyorum.", n: "Als Kind haben uns unsere Nachbarn viel geholfen. Als ich groß war, wollte ich etwas zurückgeben. Zu sehen, dass die Menschen, denen wir helfen, glücklich sind, gibt mir große Kraft. Ich glaube, dass jeder etwas tun kann." },
    { s: 'Gazeteci', g: 'f', t: "Gönüllü olmak isteyenlere ne söylersiniz?", n: "Was sagen Sie denen, die ehrenamtlich arbeiten wollen?" },
    { s: 'Bay Kemal', g: 'm', t: "Önce küçük başlasınlar derim. Bir saat bile olsa gelsinler, çünkü her yardım değerlidir.", n: "Ich sage, sie sollen klein anfangen. Selbst wenn es nur eine Stunde ist, sollen sie kommen, denn jede Hilfe ist wertvoll." }
  ],
  gloss: { "ihtiyacı olan": "bedürftig", "giysi": "Kleidung", "karşılığını": "die Gegenleistung", "iten": "(an)treibende(r)", "güç": "Kraft", "gönüllüsü olalı": "seit er Freiwilliger ist", "derim": "ich sage", "değerlidir": "ist wertvoll", "etmişti": "hatte getan", "ettiğimiz": "(denen) wir helfen", "işe": "zur Arbeit", "neydi": "was war", "olsa": "selbst wenn es ist" },
  questions: [
    { id: "tr-b1-h06.q1", t: "mc", q: "Wie lange arbeitet Herr Kemal schon ehrenamtlich?", o: ["Fünf Jahre", "Zwei Jahre", "Zehn Jahre", "Ein Jahr"], a: 0,
      why: { 1: "Zwei Jahre wäre *iki yıl*.", 2: "Zehn Jahre wäre *on yıl*.", 3: "Ein Jahr wäre *bir yıl*." },
      e: "*Beş yıl oldu.* = Es sind fünf Jahre." },
    { id: "tr-b1-h06.q2", t: "mc", q: "Wie hat sich seine Arbeit verändert?", o: ["Früher kam er nur am Wochenende, jetzt fast täglich.", "Früher kam er täglich, jetzt nur am Wochenende.", "Er arbeitet nur noch von zu Hause.", "Er ist inzwischen der Vorsitzende."], a: 0,
      why: { 1: "Es ist umgekehrt.", 2: "Er ist fast jeden Tag im Verein.", 3: "Von einem Vorsitz ist nicht die Rede." },
      e: "*Başlangıçta sadece hafta sonları gelirdim, şimdi hemen hemen her gün buradayım.* -(I)rdI = Gewohnheit früher." },
    { id: "tr-b1-h06.q3", t: "mc", q: "Warum hat er mit der Arbeit angefangen?", o: ["Weil ihm als Kind Nachbarn geholfen hatten und er etwas zurückgeben wollte.", "Weil er arbeitslos war.", "Weil seine Familie heute Hilfe braucht.", "Weil ein Freund ihn gefragt hat."], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Er spricht nur davon, dass ihm früher Nachbarn halfen; von heutiger Not seiner Familie sagt er nichts.", 3: "Davon ist nicht die Rede." },
      e: "*Çocukken komşularımız bize çok yardım etmişti. Büyüyünce bunun karşılığını vermek istedim.* -mIştI = Vorzeitigkeit." },
    { id: "tr-b1-h06.q4", t: "mc", q: "Was gibt ihm Kraft?", o: ["Zu sehen, dass die Menschen glücklich sind", "Das Gehalt", "Die Anerkennung der Presse", "Ein langer Urlaub"], a: 0,
      why: { 1: "Er arbeitet ehrenamtlich, bekommt also kein Gehalt.", 2: "Davon sagt er nichts.", 3: "Davon sagt er nichts." },
      e: "*Yardım ettiğimiz insanların mutlu olduğunu görmek bana büyük güç veriyor.* = Zu sehen, dass die Menschen, denen wir helfen, glücklich sind, gibt mir Kraft." }
  ]
});

K.addText('tr-b1-r07', {
  level: 'B1', kind: 'read', scene: 'okul', genre: 'artikel',
  title: "Yeni bir dil öğrenmek için ipuçları", sub: "Ratgeber: So lernt man eine Sprache",
  body: [
    "Yeni bir dil öğrenmek başlangıçta zor görünür, ama doğru yöntemle bu süreç çok daha kolay olur. Size birkaç ipucu vereyim.",
    "Önce her gün düzenli çalışın. Günde yarım saat bile olsa, sık sık tekrar etmek uzun süre ara vermekten daha verimlidir. Yeni kelimeleri yalnızca listeden ezberlemeyin; cümle içinde kullanın. Böylece kelimeler aklınızda daha kolay kalır.",
    "İkinci olarak, çok dinleyin ve konuşun. Film izleyerek ve şarkı dinleyerek dilin ritmine alışırsınız. Konuştukça özgüveniniz artar. Hata yapmaktan korkmadan konuşmaya çalışın, çünkü kimse sizden mükemmel olmanızı beklemiyor.",
    "Son olarak sabırlı olun. Bazen ilerleme hissetmezsiniz, ama zamanla her şey yerine oturur. Yürüyüş yaparken bile kulaklıkla bir podcast dinleyebilirsiniz. Sınav yaklaşırken telaşlanmayın; hazırlığınızı küçük aşamalara bölün. Bir an önce başlayın, çünkü başlangıç en zor kısımdır.",
    "Gün içinde küçük fırsatlar da yaratabilirsiniz. Markette alışveriş yaparken ürün adlarını Türkçe okuyun, otobüste duyduğunuz cümleleri içinizden tekrar edin. Böyle küçük denemeler zamanla büyük ilerleme getirir. Ayrıca arkadaşlarınızla Türkçe konuşmak için her hafta biraz vakit ayırın."
  ],
  gloss: { "aklınızda": "in Ihrem Kopf", "bölün": "teilen Sie", "böylece": "so, dadurch", "ezberlemeyin": "lernen Sie nicht auswendig", "hissetmezsiniz": "Sie spüren nicht",  "listeden": "aus der Liste", "mükemmel": "perfekt", "olmanızı": "dass Sie sind", "olsa": "auch wenn es ist", "podcast": "Podcast", "ritmine": "seinem Rhythmus" },
  questions: [
    { id: "tr-b1-r07.q1", t: "mc", q: "Was ist laut Text effizienter?", o: ["Oft zu wiederholen, auch wenn es nur eine halbe Stunde täglich ist", "Einmal pro Woche mehrere Stunden zu lernen", "Nur Wortlisten auswendig zu lernen", "Nur zu lesen und nicht zu sprechen"], a: 0,
      why: { 1: "Davon ist nicht die Rede; der Text empfiehlt tägliches, regelmäßiges Lernen.", 2: "Der Text rät ausdrücklich davon ab: Wörter soll man im Satz benutzen.", 3: "Der Text empfiehlt, viel zu hören und zu sprechen." },
      e: "*Günde yarım saat bile olsa, sık sık tekrar etmek uzun süre ara vermekten daha verimlidir.*" },
    { id: "tr-b1-r07.q2", t: "mc", q: "Wie soll man neue Wörter lernen?", o: ["Im Satz benutzen", "Nur aus der Liste auswendig lernen", "Nur schreiben, nie sprechen", "Erst nach der Prüfung wiederholen"], a: 0,
      why: { 1: "Genau das rät der Text ab: *yalnızca listeden ezberlemeyin*.", 2: "Davon sagt der Text nichts.", 3: "Davon sagt der Text nichts." },
      e: "*Cümle içinde kullanın.* Dann bleiben die Wörter leichter im Kopf." },
    { id: "tr-b1-r07.q3", t: "gap", q: "Çok konuş___ özgüveniniz artar. (Je mehr man spricht, desto mehr wächst das Selbstvertrauen.)", a: ["tukça"],
      wrong: { "tıkça": "Letzter Vokal von *konuş-* ist **u** → -tukça.", "dukça": "*konuş-* endet auf **ş** (stimmlos) → d wird **t**.", "unca": "-(y)IncA = „sobald“. Für „je mehr“ braucht man -DIkçA." },
      e: "konuş- + **tuk** + **ça** = **konuştukça** (je mehr man spricht)." },
    { id: "tr-b1-r07.q4", t: "mc", q: "Was rät der Text, wenn die Prüfung näher rückt?", o: ["Die Vorbereitung in kleine Schritte aufteilen", "Alles am letzten Tag lernen", "Nicht mehr lernen", "Nur noch Filme schauen"], a: 0,
      why: { 1: "Der Text rät, nicht in Hektik zu geraten.", 2: "Davon ist nicht die Rede.", 3: "Filme werden nur als Übung im Alltag genannt, nicht als Prüfungsvorbereitung." },
      e: "*Hazırlığınızı küçük aşamalara bölün.*" },
    { id: "tr-b1-r07.q5", t: "mc", q: "Was ist laut Text der schwierigste Teil?", o: ["Der Anfang", "Das Ende", "Die Prüfung", "Die Wiederholung"], a: 0,
      why: { 1: "Vom Ende ist nicht die Rede.", 2: "Die Prüfung wird nur kurz erwähnt.", 3: "Wiederholung wird als nützlich beschrieben." },
      e: "*Başlangıç en zor kısımdır.*" }
  ]
});

K.addText('tr-b1-r08', {
  level: 'B1', kind: 'read', scene: 'ev', genre: 'email',
  title: "Taşınma günü", sub: "E-Mail an eine Freundin: Der Umzugstag",
  body: [
    "Merhaba Deniz,",
    "Cumartesi günü taşınıyorum! Nakliyeciler sabah dokuzda gelecek, ama ben sen gelinceye kadar kimseyi içeri almak istemiyorum, çünkü önce kutuların yerini birlikte planlamak istiyorum. Mümkünse saat sekizde bana uğrar mısın?",
    "Eski evden çıkmadan önce bütün odaları bir kez daha kontrol edeceğim; geçen sefer anahtarı bile unutmuştum. Kapıyı kapatmadan önce elektriği de kapatacağım.",
    "Sen geldiğinde birlikte kahvaltı yaparız. Mutfakta artık çay bile kalmadı, ama fırından simit alırım. Taşınma günü zaman çok hızlı geçiyor, bu yüzden hazırlığımı erken bitirdim. Eşyaları sırayla arabaya taşıyacağız. Yorulduğumuzda mola verir, öğleden sonra pizza sipariş ederiz.",
    "Bu şehre geleli beş yıl oldu, ama yeni mahalleyi henüz tanımıyorum. Yerleştikçe kendimi daha rahat hissedeceğimi umuyorum. Yardım edersen çok sevinirim. Cevabını bekliyorum.",
    "Yeni evin anahtarını emlakçıdan öğleden önce alacağım. Akşama kadar her şeyi bitirirsek ilk geceyi rahat geçiririz. Komşularım da yardım etmek istedi, ama onlara fazla zahmet vermek istemiyorum.",
    "Sevgiler, Selin"
  ],
  gloss: { "alırım": "ich hole", "edeceğim": "ich werde tun", "hissedeceğimi": "dass ich mich fühlen werde", "içeri": "hinein", "kutuların": "der Kisten", "nakliyeciler": "Umzugshelfer", "pizza": "Pizza", "umuyorum": "ich hoffe", "yorulduğumuzda": "wenn wir müde werden", "şehre": "in die Stadt" },
  questions: [
    { id: "tr-b1-r08.q1", t: "mc", q: "Warum soll Deniz früh kommen?", o: ["Selin will niemanden hineinlassen, bevor die Freundin da ist, denn sie will zuerst gemeinsam planen, wo die Kisten hinkommen.", "Sie soll die Umzugsfirma bezahlen.", "Sie soll den Schlüssel abgeben.", "Sie soll das Auto fahren."], a: 0,
      why: { 1: "Von Bezahlung ist nicht die Rede.", 2: "Selin selbst hat den Schlüssel; er wird nur als Beispiel für das letzte Mal erwähnt.", 3: "Vom Autofahren ist nicht die Rede." },
      e: "*sen gelinceye kadar kimseyi içeri almak istemiyorum* = ich will niemanden hereinlassen, bis du kommst." },
    { id: "tr-b1-r08.q2", t: "mc", q: "Was will Selin vor dem Verlassen der alten Wohnung tun?", o: ["Alle Zimmer prüfen und den Strom ausschalten", "Die Wände streichen", "Die Nachbarn besuchen", "Den Schlüssel verstecken"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*bütün odaları kontrol edeceğim … elektriği de kapatacağım.*" },
    { id: "tr-b1-r08.q3", t: "gap", q: "Sen ___ birlikte kahvaltı yaparız. (gelmek – Wenn du kommst, frühstücken wir zusammen.)", a: ["geldiğinde", "geldiğin zaman", "gelince"],
      wrong: { "geldiğimde": "-im = „ich“. Hier kommt aber „du“ (*Sen*): -in.", "gelinceye": "Mit -yA kadar würde es „bis“ heißen.", "gelirken": "-ken = „während“, nicht „als/wenn“ nacheinander." },
      e: "gel- + **diğ** + **in** + **de** = **geldiğinde**. Auch *geldiğin zaman* und *gelince* sind möglich." },
    { id: "tr-b1-r08.q4", t: "mc", q: "Wie lange wohnt Selin schon in der Stadt?", o: ["Seit fünf Jahren", "Seit fünf Monaten", "Seit fünf Wochen", "Seit einem Jahr"], a: 0,
      why: { 1: "Monate wären *ay*.", 2: "Wochen wären *hafta*.", 3: "Ein Jahr wäre *bir yıl*." },
      e: "*Bu şehre geleli beş yıl oldu.* = Es sind fünf Jahre." },
    { id: "tr-b1-r08.q5", t: "mc", q: "Was hofft Selin?", o: ["Dass sie sich wohler fühlt, je mehr sie sich einlebt", "Dass sie bald wieder umziehen kann", "Dass die Nachbarn leise sind", "Dass Deniz bei ihr einzieht"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*Yerleştikçe kendimi daha rahat hissedeceğimi umuyorum.*" }
  ]
});

K.addText('tr-b1-r09', {
  level: 'B1', kind: 'read', scene: 'sokak', genre: 'artikel',
  title: "Bisikletle şehir turu", sub: "Blogbeitrag: Eine Stadtrundfahrt mit dem Fahrrad",
  body: [
    "Geçen ay bir bisiklet aldım, ama şehri ilk kez geçen hafta sonu bisikletle gezdim. Almadan önce uzun süre düşündüm, çünkü şehirde trafik çok yoğun. Ama sonunda karar verdim ve hiç pişman değilim.",
    "Sabah erkenden yola çıktım. Nehir boyunca yavaş yavaş pedal çevirerek eski mahalleye ulaştım. Pedal çevirdikçe yorgunluk unutuluyor ve insan giderek daha rahat nefes alıyor. Yolda sık sık durup fotoğraf çektim.",
    "Öğle vakti küçük bir kafede mola verdim. Garson bana yerel bir tatlı önerdi ve ben de ilk kez denedim. Yemek yedikten sonra yeniden yola çıktım.",
    "Bisiklet aldığımdan beri arabayı neredeyse hiç kullanmıyorum. Hem zaman kazanıyorum hem de şehri daha iyi tanıyorum. Yürüyerek ulaşamayacağınız yerlere kolayca gidebiliyorsunuz. Bir şeyi unutmayın: kaskı takmadan yola çıkmayın! Güvenlik her şeyden önemli.",
    "Akşama doğru eve dönerken biraz yorulmuştum, ama çok mutluydum. Gelecek ay arkadaşlarımla uzun bir hafta sonu turuna çıkmayı planlıyoruz. Siz de bir gün deneyin; belki bu işi çok seversiniz."
  ],
  gloss: { "pedal": "Pedal", "şehri": "die Stadt", "aldığımdan": "seit ich gekauft habe", "almadan": "ohne zu kaufen", "nefes alıyor": "atmet", "gidebiliyorsunuz": "Sie können hingehen", "kafede": "im Café", "takmadan": "ohne aufzusetzen", "vakti": "Zeit", "yoğun": "dicht", "çevirdikçe": "je mehr man dreht", "çevirerek": "drehend" },
  questions: [
    { id: "tr-b1-r09.q1", t: "mc", q: "Warum hat der Autor lange über den Kauf nachgedacht?", o: ["Weil der Verkehr in der Stadt sehr dicht ist", "Weil das Fahrrad zu teuer war", "Weil er nicht radeln konnte", "Weil es regnete"], a: 0,
      why: { 1: "Vom Preis ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Vom Regen ist nicht die Rede." },
      e: "*çünkü şehirde trafik çok yoğun*" },
    { id: "tr-b1-r09.q2", t: "mc", q: "Was passiert, je mehr er in die Pedale tritt?", o: ["Die Müdigkeit wird vergessen und er atmet leichter", "Er wird immer müder", "Er verliert den Weg", "Er hält an und isst"], a: 0,
      why: { 1: "Das Gegenteil wird beschrieben.", 2: "Davon ist nicht die Rede.", 3: "Die Pause kommt erst mittags." },
      e: "*Pedal çevirdikçe yorgunluk unutuluyor.*" },
    { id: "tr-b1-r09.q3", t: "gap", q: "Bisiklet aldığım___ beri arabayı neredeyse hiç kullanmıyorum. (Seit ich das Fahrrad gekauft habe, benutze ich kaum noch das Auto.)", a: ["dan"],
      wrong: { "da": "-DA heißt „als/wenn“. Für „seit“ braucht man den Ablativ -DAn.", "dan beri": "*beri* steht schon im Satz.", "den": "Letzter Vokal von *aldığım* ist **ı** → -dan." },
      e: "aldığım + **dan** + beri = **seit ich … gekauft habe**." },
    { id: "tr-b1-r09.q4", t: "mc", q: "Was tat der Autor nach dem Essen?", o: ["Er fuhr weiter", "Er fuhr nach Hause", "Er rief einen Freund an", "Er schlief"], a: 0,
      why: { 1: "Er fuhr erst abends nach Hause.", 2: "Davon ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*Yemek yedikten sonra yeniden yola çıktım.*" },
    { id: "tr-b1-r09.q5", t: "mc", q: "Welchen Rat gibt er am Ende?", o: ["Nicht ohne Helm losfahren", "Das Auto verkaufen", "Nur nachts fahren", "Immer zu zweit fahren"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*Kaskı takmadan yola çıkmayın!* -mAdAn = ohne zu." }
  ]
});

K.addText('tr-b1-h07', {
  level: 'B1', kind: 'listen', scene: 'ofis', genre: 'anrufbeantworter',
  title: "Araba henüz hazır değil", sub: "Nachricht auf dem Anrufbeantworter", plays: 2,
  lines: [
    { s: 'Emre', g: 'm', t: "Merhaba, ben Emre, oto servisten arıyorum. Arabanız henüz hazır değil, çünkü parça gelmeden tamir bitmiyor. Parçayı dün sipariş ettik, ama kargo henüz gelmedi.", n: "Hallo, hier ist Emre von der Werkstatt. Ihr Auto ist noch nicht fertig, denn ohne das Ersatzteil wird die Reparatur nicht fertig. Wir haben das Teil gestern bestellt, aber die Lieferung ist noch nicht da." },
    { s: 'Emre', g: 'm', t: "Parça gelince hemen işe başlayacağız. Araba en geç çarşambaya kadar hazır olur. Arabayı almaya gelmeden önce mutlaka beni arayın, çünkü akşamları dükkânı erken kapatıyoruz.", n: "Sobald das Teil da ist, fangen wir sofort an. Das Auto ist spätestens bis Mittwoch fertig. Rufen Sie mich unbedingt an, bevor Sie das Auto abholen, denn abends schließen wir den Laden früh." },
    { s: 'Emre', g: 'm', t: "Fiyat konusunda endişelenmeyin; size önceden söylediğim gibi olacak. Bıraktığınızda söylediğiniz fren sesi sorunu da çözüldü. Yalnızca küçük bir yağ değişikliği yapmamız gerekiyor, ama bunu sizin onayınızla yapacağız. Mesajı dinleyince bana kısa bir mesaj da gönderebilirsiniz, çünkü sizden haber bekliyorum. İyi günler, görüşürüz.", n: "Wegen des Preises machen Sie sich keine Sorgen; es bleibt, wie ich es Ihnen vorher gesagt habe. Das Bremsgeräusch, das Sie bei der Abgabe erwähnt haben, ist auch behoben. Wir müssen nur noch einen kleinen Ölwechsel machen, aber das tun wir mit Ihrer Zustimmung. Sie können mir nach dem Abhören auch eine kurze Nachricht schicken, denn ich warte auf Nachricht von Ihnen. Einen schönen Tag." }
  ],
  gloss: { "almaya": "abzuholen", "arıyorum": "ich rufe an", "dükkânı": "den Laden", "ettik": "wir haben getan", "işe": "an die Arbeit", "oto": "Auto-" },
  questions: [
    { id: "tr-b1-h07.q1", t: "mc", q: "Warum ist das Auto noch nicht fertig?", o: ["Ein Ersatzteil ist noch nicht angekommen", "Der Mechaniker ist krank", "Der Kunde hat den Preis nicht bezahlt", "Die Werkstatt ist geschlossen"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Vom Bezahlen ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*parça gelmeden tamir bitmiyor* = ohne das Teil wird die Reparatur nicht fertig." },
    { id: "tr-b1-h07.q2", t: "mc", q: "Bis wann ist das Auto spätestens fertig?", o: ["Bis Mittwoch", "Bis Montag", "Bis Freitag", "Bis zum Wochenende"], a: 0,
      why: { 1: "Montag wäre *pazartesi*.", 2: "Freitag wäre *cuma*.", 3: "Davon ist nicht die Rede." },
      e: "*en geç çarşambaya kadar* = spätestens bis Mittwoch." },
    { id: "tr-b1-h07.q3", t: "mc", q: "Was soll die Kundin/der Kunde vor dem Abholen tun?", o: ["Anrufen", "Eine E-Mail schreiben", "Das Teil kaufen", "Gar nichts"], a: 0,
      why: { 1: "Es wird um einen Anruf gebeten.", 2: "Die Werkstatt bestellt das Teil.", 3: "Er bittet ausdrücklich um einen Anruf." },
      e: "*gelmeden önce mutlaka beni arayın*" },
    { id: "tr-b1-h07.q4", t: "mc", q: "Warum soll man vorher anrufen?", o: ["Weil die Werkstatt abends früh schließt", "Weil das Auto weit weg steht", "Weil der Preis sich ändert", "Weil Emre im Urlaub ist"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Der Preis bleibt, wie er war.", 3: "Davon ist nicht die Rede." },
      e: "*akşamları dükkânı erken kapatıyoruz*" }
  ]
});

K.addText('tr-b1-h08', {
  level: 'B1', kind: 'listen', scene: 'sokak', genre: 'gespraech',
  title: "Yeni iş", sub: "Gespräch über die neue Arbeitsstelle", plays: 2,
  lines: [
    { s: 'Ayşe', g: 'f', t: "Cem, yeni işin nasıl? İşe başlayalı kaç hafta oldu?", n: "Cem, wie ist deine neue Arbeit? Wie viele Wochen ist es her, dass du angefangen hast?" },
    { s: 'Cem', g: 'm', t: "Üç hafta oldu. Yeni ofise geldiğimden beri her sabah işe yürüyerek gidiyorum. Yürürken müzik dinliyorum, böylece güne daha enerjik başlıyorum. Üstelik ofisteki arkadaşlar çok sıcakkanlı. Öğle arasında hep birlikte yemek yiyoruz ve ben yavaş yavaş herkesi tanıyorum.", n: "Drei Wochen. Seit ich im neuen Büro bin, gehe ich jeden Morgen zu Fuß zur Arbeit. Beim Gehen höre ich Musik, so beginne ich den Tag energiegeladener. Außerdem sind die Kollegen im Büro sehr herzlich. In der Mittagspause essen wir immer zusammen, und ich lerne nach und nach alle kennen." },
    { s: 'Ayşe', g: 'f', t: "Harika! Ben yeni işime alışana kadar çok yoruldum, hatta ilk haftalarda akşamları hemen uyuyordum. Ama çalıştıkça işler kolaylaşıyor.", n: "Toll! Ich war auch sehr müde, bis ich mich an meine neue Arbeit gewöhnt hatte, in den ersten Wochen schlief ich abends sofort ein. Aber je mehr man arbeitet, desto leichter wird es." },
    { s: 'Cem', g: 'm', t: "Aynen öyle. Geçen hafta ofisine uğradım, ama toplantıdaydın. Bir dahaki sefere haber vermeden gelmeyeceğim.", n: "Genau. Letzte Woche bin ich in deinem Büro vorbeigekommen, aber du warst in einer Besprechung. Beim nächsten Mal komme ich nicht, ohne Bescheid zu sagen." },
    { s: 'Ayşe', g: 'f', t: "Çıkmadan önce bana yaz, birlikte öğle yemeğine gideriz. Sen gelene kadar masamı toplarım.", n: "Schreib mir, bevor du losgehst, dann gehen wir zusammen zu Mittag essen. Ich räume meinen Tisch auf, bis du kommst." }
  ],
  gloss: { "işe": "zur Arbeit", "böylece": "so, dadurch", "gideriz": "wir gehen", "işime": "an meine Arbeit", "işin": "deine Arbeit", "yoruldum": "ich wurde müde", "öyle": "so" },
  questions: [
    { id: "tr-b1-h08.q1", t: "mc", q: "Wie lange arbeitet Cem schon im neuen Büro?", o: ["Drei Wochen", "Drei Monate", "Drei Tage", "Drei Jahre"], a: 0,
      why: { 1: "Monate wären *ay*.", 2: "Tage wären *gün*.", 3: "Jahre wären *yıl*." },
      e: "*Üç hafta oldu.* = Es sind drei Wochen." },
    { id: "tr-b1-h08.q2", t: "mc", q: "Wie kommt Cem zur Arbeit?", o: ["Zu Fuß", "Mit dem Bus", "Mit dem Fahrrad", "Mit dem Auto"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*işe yürüyerek gidiyorum* = ich gehe zu Fuß zur Arbeit." },
    { id: "tr-b1-h08.q3", t: "mc", q: "Was tut Cem beim Gehen?", o: ["Musik hören", "Telefonieren", "Zeitung lesen", "Frühstücken"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*Yürürken müzik dinliyorum.*" },
    { id: "tr-b1-h08.q4", t: "mc", q: "Was soll Cem tun, bevor er das nächste Mal kommt?", o: ["Ayşe schreiben", "Einen Termin ausmachen", "Blumen kaufen", "Nichts"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Ayşe bittet ihn ausdrücklich, ihr zu schreiben." },
      e: "*Çıkmadan önce bana yaz.*" }
  ]
});

K.addText('tr-b1-h09', {
  level: 'B1', kind: 'listen', scene: 'ev', genre: 'interview',
  title: "İyi uyumak için", sub: "Interview mit einem Schlafexperten", plays: 2,
  lines: [
    { s: 'Sunucu', g: 'f', t: "Bugün uyku uzmanı Doktor Kaya bizimle. İyi uyumak için ne yapmalıyız?", n: "Heute ist der Schlafexperte Doktor Kaya bei uns. Was sollen wir tun, um gut zu schlafen?" },
    { s: 'Uzman', g: 'm', t: "Önce her gün aynı saatte yatmalıyız. Yatmadan önce telefona bakmamak çok önemli, çünkü ekran ışığı uykuyu geciktirir. Akşam yemeğini de çok geç yemeyin. Öğleden sonra çay ve kahve içmemeye çalışın. Odanız sessiz ve serin olursa daha kolay uyursunuz.", n: "Zuerst sollten wir jeden Tag zur selben Uhrzeit ins Bett gehen. Vor dem Schlafen nicht aufs Handy zu schauen ist sehr wichtig, denn das Bildschirmlicht verzögert den Schlaf. Essen Sie auch nicht zu spät zu Abend. Versuchen Sie, nachmittags keinen Tee und Kaffee zu trinken. Wenn Ihr Zimmer ruhig und kühl ist, schlafen Sie leichter ein." },
    { s: 'Sunucu', g: 'f', t: "Spor yapmak yardımcı olur mu?", n: "Hilft Sport?" },
    { s: 'Uzman', g: 'm', t: "Evet. Gün boyunca yürüyerek ya da bisiklete binerek hareket ederseniz, geceleri daha rahat uyursunuz. Ama yatmadan hemen önce ağır spor yapmayın. Düzenli uyudukça gün içinde daha verimli çalışırsınız. Uykusuzluk sürekli devam ederse mutlaka doktora gidin; bu konuda utanmayın, çünkü pek çok insan aynı sorunu yaşıyor.", n: "Ja. Wenn Sie sich tagsüber zu Fuß oder mit dem Fahrrad bewegen, schlafen Sie nachts ruhiger. Aber machen Sie kurz vor dem Schlafen keinen schweren Sport. Je regelmäßiger Sie schlafen, desto effizienter arbeiten Sie am Tag. Wenn die Schlaflosigkeit ständig anhält, gehen Sie unbedingt zum Arzt; schämen Sie sich dafür nicht, denn viele Menschen haben dasselbe Problem." }
  ],
  gloss: { "yatmadan": "bevor man ins Bett geht", "geciktirir": "verzögert", "uykusuzluk": "Schlaflosigkeit", "yürüyerek": "zu Fuß gehend", "binerek": "fahrend", "uyudukça": "je regelmäßiger man schläft" },
  questions: [
    { id: "tr-b1-h09.q1", t: "mc", q: "Warum soll man vor dem Schlafen nicht aufs Handy schauen?", o: ["Das Bildschirmlicht verzögert den Schlaf", "Das Handy ist zu laut", "Man verbraucht zu viel Strom", "Das Handy macht müde"], a: 0,
      why: { 1: "Von Lärm ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Das Gegenteil: es hält wach." },
      e: "*ekran ışığı uykuyu geciktirir*" },
    { id: "tr-b1-h09.q2", t: "mc", q: "Wie hilft Bewegung am Tag?", o: ["Man schläft nachts ruhiger", "Man braucht weniger Schlaf", "Man wird hungriger", "Man träumt mehr"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Davon ist nicht die Rede." },
      e: "*geceleri daha rahat uyursunuz*" },
    { id: "tr-b1-h09.q3", t: "mc", q: "Wovor warnt der Experte?", o: ["Vor schwerem Sport kurz vor dem Schlafen", "Vor Sport am Morgen", "Vor Spaziergängen", "Vor Kaffee am Morgen"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Bewegung am Tag wird empfohlen.", 3: "Davon ist nicht die Rede." },
      e: "*yatmadan hemen önce ağır spor yapmayın*" },
    { id: "tr-b1-h09.q4", t: "mc", q: "Was soll man tun, wenn die Schlaflosigkeit ständig anhält?", o: ["Zum Arzt gehen", "Mehr Kaffee trinken", "Früher aufstehen", "Nichts tun"], a: 0,
      why: { 1: "Davon ist nicht die Rede.", 2: "Davon ist nicht die Rede.", 3: "Er rät dringend zum Arzt." },
      e: "*mutlaka doktora gidin*" }
  ]
});

})(window.KOPRU);
