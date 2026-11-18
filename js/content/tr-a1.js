/* Türkisch A1 – für Deutschsprechende (Erklärungen auf Deutsch)
 * Format und Regeln für Updates (feste IDs!) siehe js/content/de-a1.js.
 */
(function (K) {

K.add('tr-a1-01', {
  lesson: [
    { p: "Das türkische Alphabet hat **29 Buchstaben**. Gute Nachricht: Türkisch wird fast **genau so gesprochen, wie es geschrieben wird**. Es gibt kein q, w und x – dafür einige Sonderzeichen." },
    { table: { head: ["Buchstabe", "Aussprache", "Beispiel"], rows: [
      ["c", "**dsch** wie in *Dschungel*", "cami (Moschee)"],
      ["ç", "**tsch** wie in *deutsch*", "çay (Tee)"],
      ["ş", "**sch** wie in *Schule*", "şeker (Zucker)"],
      ["ğ", "stumm – dehnt den Vokal davor", "dağ (Berg) ≈ „daa“"],
      ["ı (ohne Punkt)", "dumpfes i, ähnlich dem e in *bitte*", "ılık (lauwarm)"],
      ["i / İ", "i wie in *Kino*; groß: **İ**", "İstanbul"],
      ["ö, ü", "wie im Deutschen", "göz (Auge), üç (drei)"],
      ["s", "immer stimmlos (wie in *Haus*)", "su (Wasser)"],
      ["z", "stimmhaftes s (wie in *Sonne*)", "zaman (Zeit)"],
      ["v", "wie deutsches **w**", "ev (Haus)"],
      ["y", "wie deutsches **j**", "yok (gibt es nicht)"],
      ["j", "wie in *Journal*", "jeton"],
      ["h", "wird immer gesprochen", "hayır (nein)"],
      ["e", "offen, ähnlich wie ä", "ev"]
    ] } },
    { warn: "**I/ı und İ/i sind zwei verschiedene Buchstaben!** Großes i mit Punkt = **İ**, großes ı ohne Punkt = **I**. *ılık* (lauwarm) ≠ *ilik* (Knochenmark)." },
    { tip: "Die Betonung liegt meistens auf der **letzten Silbe**: *ki-TAP*, *o-KUL*." },
    { ex: [["Merhaba!", "Hallo!"], ["Çay ister misin?", "Möchtest du Tee?"], ["Şeker yok.", "Es gibt keinen Zucker."]] }
  ],
  exercises: [
    { id: "tr-a1-01.1", t: "mc", q: "Wie spricht man „çay“ (Tee) aus?", o: ["kai", "tschai", "sai", "dschai"], a: 1,
      why: { 0: "Das ç ist kein k.", 2: "Das ç ist kein s – das Häkchen macht daraus **tsch**.", 3: "„dsch“ ist das türkische **c** (ohne Häkchen)." },
      e: "**ç = tsch** → „tschai“." },
    { id: "tr-a1-01.2", t: "mc", q: "Wie spricht man das c in „cami“ (Moschee) aus?", o: ["k", "ts", "dsch", "tsch"], a: 2,
      why: { 0: "Im Türkischen ist c nie k.", 1: "Das ist das deutsche z – im Türkischen gibt es diesen Laut so nicht.", 3: "„tsch“ wäre ç (mit Häkchen)." },
      e: "**c = dsch** → „dschami“." },
    { id: "tr-a1-01.3", t: "mc", q: "Was macht das ğ in „dağ“ (Berg)?", o: ["Es wird wie g gesprochen.", "Es ist stumm und dehnt den Vokal davor.", "Es wird wie ch gesprochen."], a: 1,
      why: { 0: "Das „yumuşak g“ (weiches g) wird nie wie ein g gesprochen.", 2: "Das ğ klingt nie wie das deutsche ch – es ist stumm." },
      e: "**ğ** ist stumm und verlängert den Vokal: dağ ≈ „daa“." },
    { id: "tr-a1-01.4", t: "mc", q: "Wie schreibt man „i“ als Großbuchstaben (z. B. in İstanbul)?", o: ["I", "İ"], a: 1,
      why: { 0: "„I“ ist der Großbuchstabe von **ı** (ohne Punkt) – ein anderer Buchstabe!" },
      e: "i → **İ** (mit Punkt), ı → **I** (ohne Punkt)." },
    { id: "tr-a1-01.5", t: "mc", q: "Wie spricht man „şeker“ (Zucker) aus?", o: ["seker", "scheker", "tscheker"], a: 1,
      why: { 0: "Das Häkchen macht aus s ein **sch**.", 2: "„tsch“ wäre ç." },
      e: "**ş = sch** → „scheker“." },
    { id: "tr-a1-01.6", t: "mc", q: "Wie spricht man das y in „yok“ aus?", o: ["wie ü", "wie j", "wie i"], a: 1,
      why: { 0: "Das türkische y ist ein Konsonant, kein ü.", 2: "Es ist ein Konsonant, kein Vokal." },
      e: "**y = j** → „jok“." },
    { id: "tr-a1-01.7", t: "mc", q: "Welche Buchstaben gibt es im Türkischen NICHT?", o: ["q, w, x", "ç, ş, ğ", "ö, ü, ı", "c, j, v"], a: 0,
      why: { 1: "Das sind typisch türkische Buchstaben.", 2: "Die gibt es alle im Türkischen.", 3: "Gibt es auch: cami, jeton, ev." },
      e: "Türkisch hat **kein q, w, x** (und auch kein ä oder ß)." },
    { id: "tr-a1-01.8", t: "mc", q: "Wie spricht man das v in „ev“ (Haus) aus?", o: ["wie deutsches f", "wie deutsches w"], a: 1,
      why: { 0: "Im Deutschen ist v oft f (Vater) – im Türkischen nie." },
      e: "Türkisches **v = w** → „ew“." },
    { id: "tr-a1-01.9", t: "speak", say: "Kışın sıcak çay içeriz.",
      e: "„Im Winter trinken wir heißen Tee.“ Das **ı** in *kışın* und *sıcak* ist ein dumpfes i: Lippen breit, Zunge weiter hinten – etwa wie das e in *bitte*. Achte auf drei verschiedene Laute: **ş** = sch (*kışın* ≈ „kı-schın“), **c** = dsch (*sıcak* ≈ „sı-dschak“), **ç** = tsch (*çay* ≈ „tschai“, *içeriz* ≈ „i-tsche-ris“ mit stimmhaftem s). Typischer Fehler: ı wie ein helles i sprechen („kischin“) – dann klingt es fremd." },
    { id: "tr-a1-01.10", t: "speak", say: "Dağda yağmur yağıyor.",
      e: "„In den Bergen regnet es.“ Das **ğ** wird nicht gesprochen, es dehnt nur den Vokal davor: „daa-da jaa-mur jaa-ı-jor“. **y** = deutsches j. Typischer Fehler: ğ wie g oder ch aussprechen („dagda“, „jachmur“)." }
  ]
});

K.add('tr-a1-02', {
  lesson: [
    { p: "Türken grüßen herzlich – und beim Abschied gibt es unterschiedliche Formeln für den, der **geht**, und den, der **bleibt**!" },
    { table: { head: ["Türkisch", "Deutsch", "Wann?"], rows: [
      ["Merhaba!", "Hallo!", "immer"], ["Selam!", "Hi!", "locker, unter Freunden"], ["Günaydın!", "Guten Morgen!", "morgens"],
      ["İyi günler!", "Guten Tag! / Schönen Tag!", "tagsüber, auch beim Abschied"], ["İyi akşamlar!", "Guten Abend!", "abends"],
      ["İyi geceler!", "Gute Nacht!", "vor dem Schlafen"], ["Hoşça kal!", "Tschüss! (sagt, wer **geht**)", "Abschied"],
      ["Güle güle!", "Tschüss! (sagt, wer **bleibt**)", "Abschied"], ["Görüşürüz!", "Bis dann!", "Abschied"]
    ] } },
    { h: "Sich vorstellen" },
    { table: { head: ["Frage (du)", "Frage (Sie)", "Antwort"], rows: [
      ["Adın ne?", "Adınız ne?", "Benim adım … / Ben …"],
      ["Nasılsın?", "Nasılsınız?", "İyiyim, teşekkürler. Sen? / Siz?"],
      ["Nerelisin?", "Nerelisiniz?", "Almanyalıyım. / Almanım."],
      ["Nerede oturuyorsun?", "Nerede oturuyorsunuz?", "Berlin’de oturuyorum."]
    ] } },
    { tip: "Wie im Deutschen gibt es **sen** (du) und **siz** (Sie – höflich, und auch Plural „ihr“)." },
    { vocab: [["Teşekkürler / Teşekkür ederim", "Danke"], ["Lütfen", "Bitte (wenn man um etwas bittet)"], ["Rica ederim", "Bitte (gern geschehen)"], ["Evet", "Ja"], ["Hayır", "Nein"], ["Memnun oldum", "Freut mich"], ["Özür dilerim", "Entschuldigung / Es tut mir leid"]] }
  ],
  exercises: [
    { id: "tr-a1-02.1", t: "mc", q: "Du verlässt die Wohnung eines Freundes. Was sagst DU?", o: ["Hoşça kal!", "Güle güle!", "Günaydın!"], a: 0,
      why: { 1: "„Güle güle“ sagt die Person, die **bleibt** – also dein Freund.", 2: "Das ist „Guten Morgen“." },
      e: "Wer geht, sagt **Hoşça kal**; wer bleibt, antwortet **Güle güle**." },
    { id: "tr-a1-02.2", t: "mc", q: "Dein Freund geht, du bleibst zu Hause. Was sagst du?", o: ["Hoşça kal!", "Güle güle!", "İyi akşamlar!"], a: 1,
      why: { 0: "„Hoşça kal“ sagt der, der **geht**.", 2: "„Guten Abend“ ist eine Begrüßung." },
      e: "Wer bleibt: **Güle güle!** (wörtlich „lachend, lachend“ – geh mit einem Lächeln)." },
    { id: "tr-a1-02.3", t: "mc", q: "Morgens um 8 im Büro:", o: ["İyi geceler!", "Günaydın!", "İyi akşamlar!"], a: 1,
      why: { 0: "„İyi geceler“ heißt „Gute Nacht“ – das sagt man nur vor dem Schlafengehen.", 2: "„İyi akşamlar“ heißt „Guten Abend“ – das passt nicht um 8 Uhr morgens." },
      e: "**Günaydın** = Guten Morgen." },
    { id: "tr-a1-02.4", t: "gap", q: "Benim ___ Ali. (Mein Name ist Ali.)", a: ["adım", "ismim"],
      wrong: { "adim": "Fast! Achte auf das **ı** ohne Punkt: adım.", "ad": "„ad“ = Name. „mein Name“ braucht das Possessivsuffix: **adım**.", "adı": "„adı“ = sein/ihr Name. Mein Name → **adım**.", "isimim": "Bei *isim* fällt vor einer Vokalendung das zweite i weg: **ismim**." },
      e: "ad (Name) + -ım (mein) = **adım**. Ebenso richtig: **ismim** (von *isim* = Name)." },
    { id: "tr-a1-02.5", t: "mc", q: "Höflich: „Wie geht es Ihnen?“", o: ["Nasılsın?", "Nasılsınız?", "Ne haber?"], a: 1,
      why: { 0: "Das ist die du-Form.", 2: "„Was geht?“ – sehr locker." },
      e: "Höflich/Plural: **Nasılsınız?**" },
    { id: "tr-a1-02.6", t: "match", q: "Ordne zu:", p: [["Merhaba", "Hallo"], ["Teşekkürler", "Danke"], ["Lütfen", "Bitte (Bitte um etwas)"], ["Evet", "Ja"], ["Hayır", "Nein"]],
      e: "Die wichtigsten Grundwörter für den Alltag." },
    { id: "tr-a1-02.7", t: "gap", q: "Memnun ___ . (Freut mich.)", a: ["oldum"],
      wrong: { "olduk": "„olduk“ = wir. Ich → **oldum**." },
      e: "**Memnun oldum** = Freut mich (wörtlich: „Ich bin erfreut geworden“)." },
    { id: "tr-a1-02.8", t: "order", q: "Bilde den Satz: „Wie ist Ihr Name?“", w: ["ne", "Sizin", "adınız"], a: ["Sizin adınız ne"],
      e: "Im Türkischen steht das Fragewort oft am Ende: Sizin adınız **ne**?" },
    { id: "tr-a1-02.9", t: "speak", say: "Günaydın, bugün nasılsınız?",
      e: "„Guten Morgen, wie geht es Ihnen heute?“ Die Betonung liegt meist auf der letzten Silbe: *gü-nay-DIN*, *bu-GÜN*. Aber Fragewörter sind eine Ausnahme: **NA**-sıl-sı-nız (betont vorne). Alle drei ı in *nasılsınız* sind dumpf. Typischer Fehler: „nasilsiniz“ mit hellem i." },
    { id: "tr-a1-02.10", t: "speak", say: "Hoşça kalın, yarın görüşürüz!",
      e: "„Macht’s gut, bis morgen!“ (so sagt es, wer geht – zu mehreren oder höflich). *hoşça* ≈ „hosch-tscha“: erst **ş** (sch), dann **ç** (tsch). In *görüşürüz* bleiben die Lippen die ganze Zeit gerundet (ö, ü, ü, ü). Typischer Fehler: das s in „hoşça“ als einfaches s sprechen." }
  ]
});

K.add('tr-a1-03', {
  lesson: [
    { p: "Die **Vokalharmonie** ist das wichtigste Prinzip des Türkischen. Endungen passen ihren Vokal an den **letzten Vokal des Wortes** an. Wer das versteht, versteht fast alle Endungen." },
    { table: { head: ["", "ungerundet", "gerundet"], rows: [["hintere Vokale", "a, ı", "o, u"], ["vordere Vokale", "e, i", "ö, ü"]] } },
    { h: "Kleine Vokalharmonie (2 Formen: a / e)" },
    { p: "Letzter Vokal **a, ı, o, u** → Endung mit **a**. Letzter Vokal **e, i, ö, ü** → Endung mit **e**. Beispiel Plural: kitap-**lar**, ev-**ler**." },
    { h: "Große Vokalharmonie (4 Formen: ı / i / u / ü)" },
    { table: { head: ["letzter Vokal", "Endung", "Beispiel (Frage mI)"], rows: [
      ["a, ı", "**ı**", "kız **mı**?"], ["e, i", "**i**", "güzel **mi**?"], ["o, u", "**u**", "okul **mu**?"], ["ö, ü", "**ü**", "Türk **mü**?"]
    ] } },
    { tip: "In Grammatiken schreibt man **A** für die kleine (a/e) und **I** für die große Harmonie (ı/i/u/ü): -lAr, mI, -DA." },
    { warn: "Ausnahmen: einige Lehnwörter, z. B. *saat → saatler*, *kalp → kalpler* (nicht „-lar“)." }
  ],
  exercises: [
    { id: "tr-a1-03.1", t: "mc", q: "Plural von „kitap“ (Buch):", o: ["kitapler", "kitaplar"], a: 1,
      why: { 0: "Letzter Vokal ist **a** → Endung mit a." },
      e: "kit**a**p → -l**a**r: **kitaplar**." },
    { id: "tr-a1-03.2", t: "mc", q: "Plural von „ev“ (Haus):", o: ["evlar", "evler"], a: 1,
      why: { 0: "Letzter Vokal ist **e** → -ler." },
      e: "**evler**." },
    { id: "tr-a1-03.3", t: "mc", q: "Plural von „göz“ (Auge):", o: ["gözlar", "gözler"], a: 1,
      why: { 0: "ö ist ein **vorderer** Vokal → -ler." },
      e: "ö → -ler: **gözler**." },
    { id: "tr-a1-03.4", t: "mc", q: "Okul ___? (Ist das die Schule?)", o: ["mı", "mi", "mu", "mü"], a: 2,
      why: { 0: "mı steht nach a/ı.", 1: "mi steht nach e/i.", 3: "mü steht nach ö/ü." },
      e: "Letzter Vokal **u** → **mu**." },
    { id: "tr-a1-03.5", t: "mc", q: "Güzel ___? (Ist es schön?)", o: ["mı", "mi", "mu", "mü"], a: 1,
      why: { 0: "mı steht nach a/ı.", 2: "mu steht nach o/u.", 3: "mü steht nach ö/ü." },
      e: "Letzter Vokal **e** → **mi**." },
    { id: "tr-a1-03.6", t: "mc", q: "Türk ___? (Ist er Türke?)", o: ["mı", "mi", "mu", "mü"], a: 3,
      why: { 0: "mı steht nach a/ı.", 1: "mi steht nach e/i.", 2: "mu steht nach o/u." },
      e: "Letzter Vokal **ü** → **mü**." },
    { id: "tr-a1-03.7", t: "mc", q: "Kız ___? (Ist es ein Mädchen?)", o: ["mı", "mi", "mu", "mü"], a: 0,
      why: { 1: "Achtung: kız hat ein **ı** ohne Punkt → mı.", 2: "mu steht nach o/u.", 3: "mü steht nach ö/ü." },
      e: "Letzter Vokal **ı** → **mı**." },
    { id: "tr-a1-03.8", t: "gap", q: "Plural von „kalem“ (Stift): ___", a: ["kalemler"],
      wrong: { "kalemlar": "Letzter Vokal ist **e** (kal-**e**-m) → -ler." },
      e: "Entscheidend ist der **letzte** Vokal: kal**e**m → **kalemler**." },
    { id: "tr-a1-03.9", t: "mc", q: "Plural von „saat“ (Uhr/Stunde):", o: ["saatlar", "saatler"], a: 1,
      why: { 0: "Regulär wäre es -lar – aber saat ist eine **Ausnahme** (arabisches Lehnwort)." },
      e: "Ausnahme: **saatler**." },
    { id: "tr-a1-03.10", t: "speak", say: "Kitaplar ve defterler masada.",
      e: "„Die Bücher und die Hefte liegen auf dem Tisch.“ Hör den Unterschied: kitap-**lar** (dunkles a) – defter-**ler** (offenes e, fast wie ä) – masa-**da**. Typischer Fehler deutscher Sprecher: das **r** am Wortende verschlucken wie in „Lehrer“ („deftela“). Im Türkischen wird jedes r deutlich gesprochen, mit der Zungenspitze." },
    { id: "tr-a1-03.11", t: "speak", say: "Bebek kız mı, erkek mi?",
      e: "„Ist das Baby ein Mädchen oder ein Junge?“ – eine ganz typische Frage. Die Fragepartikel folgt dem Vokal davor: k**ı**z → **mı**, erk**e**k → **mi**. mI ist **unbetont**, die Betonung liegt auf der Silbe davor: *KIZ mı, er-KEK mi*. Typischer Fehler: beide Male „mi“ sagen." }
  ]
});

K.add('tr-a1-04', {
  lesson: [
    { p: "Der Plural wird mit **-lAr** (-lar / -ler) gebildet. Es gibt **keine Artikel**: *ev* = Haus / das Haus. Für „ein(e)“ benutzt man **bir**." },
    { table: { head: ["Singular", "Plural", "Deutsch"], rows: [
      ["araba", "araba**lar**", "Auto(s)"], ["öğrenci", "öğrenci**ler**", "Schüler / Student(en)"], ["masa", "masa**lar**", "Tisch(e)"], ["gün", "gün**ler**", "Tag(e)"]
    ] } },
    { warn: "**Nach Zahlen und Mengenwörtern steht KEIN Plural!** *iki kitap* (zwei Bücher), *çok insan* (viele Menschen), *birkaç gün* (ein paar Tage)." },
    { tip: "**bir** steht vor dem Nomen: *bir ev* (ein Haus). Mit Adjektiv meist dazwischen: *güzel bir ev* (ein schönes Haus)." }
  ],
  exercises: [
    { id: "tr-a1-04.1", t: "gap", q: "araba → Plural: ___", a: ["arabalar"],
      wrong: { "arabaler": "Letzter Vokal **a** → -l**a**r." },
      e: "Letzter Vokal a → **-lar**." },
    { id: "tr-a1-04.2", t: "gap", q: "öğrenci → Plural: ___", a: ["öğrenciler"],
      wrong: { "öğrencilar": "Letzter Vokal **i** → -l**e**r." },
      e: "Letzter Vokal i → **-ler**." },
    { id: "tr-a1-04.3", t: "mc", q: "„drei Bücher“", o: ["üç kitap", "üç kitaplar"], a: 0,
      why: { 1: "Nach Zahlen steht im Türkischen **kein** Plural." },
      e: "Zahl + Singular: **üç kitap**." },
    { id: "tr-a1-04.4", t: "mc", q: "„viele Menschen“", o: ["çok insan", "çok insanlar"], a: 0,
      why: { 1: "Nach „çok“ (viel) steht kein Plural." },
      e: "**çok insan**." },
    { id: "tr-a1-04.5", t: "gap", q: "gün → Plural: ___", a: ["günler"],
      wrong: { "günlar": "ü ist ein vorderer Vokal → -l**e**r." },
      e: "Letzter Vokal ü → **-ler**." },
    { id: "tr-a1-04.6", t: "mc", q: "„ein Haus“", o: ["bir ev", "ev bir", "bir evler"], a: 0,
      why: { 1: "bir steht **vor** dem Nomen.", 2: "Nach bir steht kein Plural." },
      e: "**bir ev**." },
    { id: "tr-a1-04.7", t: "gap", q: "masa → Plural: ___", a: ["masalar"],
      wrong: { "masaler": "Letzter Vokal **a** → -l**a**r." },
      e: "Letzter Vokal a → **-lar**." },
    { id: "tr-a1-04.8", t: "speak", say: "Bahçede iki büyük ağaç var.",
      e: "„Im Garten stehen zwei große Bäume.“ Nach *iki* steht **kein Plural**: iki ağaç (nicht „ağaçlar“). Aussprache: *bahçe* ≈ „bach-tsche“ (h hörbar), *ağaç* ≈ „aa-atsch“ – das ğ ist stumm. Typischer Fehler: ğ als g sprechen („agatsch“)." },
    { id: "tr-a1-04.9", t: "speak", say: "Çocuklar parkta oynuyor.",
      e: "„Die Kinder spielen im Park.“ *çocuk* hat zwei verschiedene Laute: **ç** = tsch und **c** = dsch → „tscho-dschuk-lar“. Hier steht ein Plural, weil keine Zahl davor kommt. Typischer Fehler: c wie k oder z sprechen („tschokuk“)." }
  ]
});

K.add('tr-a1-05', {
  lesson: [
    { p: "Türkisch hat kein eigenes Verb „sein“ im Präsens. Stattdessen hängt man **Personalendungen** an Nomen oder Adjektive: *öğretmen* (Lehrer) → *öğretmen**im*** (ich bin Lehrer)." },
    { table: { head: ["Person", "Endung", "öğretmen", "hasta (krank)", "yorgun (müde)"], rows: [
      ["ben", "-(y)Im", "öğretmen**im**", "hasta**yım**", "yorgun**um**"],
      ["sen", "-sIn", "öğretmen**sin**", "hasta**sın**", "yorgun**sun**"],
      ["o", "– (-dIr)", "öğretmen", "hasta", "yorgun"],
      ["biz", "-(y)Iz", "öğretmen**iz**", "hasta**yız**", "yorgun**uz**"],
      ["siz", "-sInIz", "öğretmen**siniz**", "hasta**sınız**", "yorgun**sunuz**"],
      ["onlar", "(-lAr)", "öğretmen(**ler**)", "hasta(**lar**)", "yorgun(**lar**)"]
    ] } },
    { tip: "Endet das Wort auf einen **Vokal**, kommt bei ben/biz ein Puffer-**y** dazu: hasta**y**ım, öğrenci**y**im." },
    { p: "**Verneinung** mit *değil* + Endung: *Ben hasta **değilim**.* (Ich bin nicht krank.)" },
    { p: "Personalpronomen fallen meist weg, die Endung zeigt die Person: *Yorgunum.* = Ich bin müde." },
    { ex: [["Ben öğrenciyim.", "Ich bin Student."], ["Yorgun musun?", "Bist du müde?"], ["Biz Almanız.", "Wir sind Deutsche."], ["Hasta değilim.", "Ich bin nicht krank."]] }
  ],
  exercises: [
    { id: "tr-a1-05.1", t: "gap", q: "Ben ___ . (öğrenci – Ich bin Student.)", a: ["öğrenciyim"],
      wrong: { "öğrenciim": "Das Wort endet auf einen Vokal → Puffer-**y**: öğrenci**y**im.", "öğrenciym": "Die Endung ist -(y)**i**m: öğrenciyim.", "öğrenciyım": "Letzter Vokal **i** → -y**i**m (mit Punkt)." },
      e: "öğrenci + **y** + **im** = **öğrenciyim**." },
    { id: "tr-a1-05.2", t: "gap", q: "Sen ___ . (yorgun – Du bist müde.)", a: ["yorgunsun"],
      wrong: { "yorgunsin": "Letzter Vokal **u** → große Harmonie → -s**u**n.", "yorgunsın": "Letzter Vokal **u** → -s**u**n." },
      e: "yorg**u**n → -s**u**n: **yorgunsun**." },
    { id: "tr-a1-05.3", t: "gap", q: "Biz ___ . (Alman – Wir sind Deutsche.)", a: ["Almanız"],
      wrong: { "almaniz": "Achte auf **ı** ohne Punkt: Almanız.", "almanyız": "Kein Puffer-y nötig – Alman endet auf Konsonant: Alman**ız**." },
      e: "Alm**a**n → -**ı**z: **Almanız**." },
    { id: "tr-a1-05.4", t: "gap", q: "Siz ___ . (doktor – Sie sind Arzt.)", a: ["doktorsunuz"],
      wrong: { "doktorsınız": "Letzter Vokal **o** → -s**u**n**u**z.", "doktorsiniz": "Letzter Vokal **o** → -s**u**n**u**z." },
      e: "dokt**o**r → **-sunuz**." },
    { id: "tr-a1-05.5", t: "mc", q: "„Ich bin nicht krank.“", o: ["Ben hasta değilim.", "Ben değil hastayım.", "Ben hastayım değil."], a: 0,
      why: { 1: "değil steht **nach** dem Adjektiv.", 2: "Die Personalendung hängt an **değil**, nicht an hasta." },
      e: "Adjektiv + **değil** + Endung: *hasta değilim*." },
    { id: "tr-a1-05.6", t: "mc", q: "Ben ___ . (Türk – Ich bin Türke.)", o: ["Türküm", "Türkim", "Türkum"], a: 0,
      why: { 1: "Letzter Vokal **ü** → -üm, nicht -im.", 2: "ü ist ein vorderer Vokal → -üm." },
      e: "T**ü**rk → **-üm**: **Türküm**." },
    { id: "tr-a1-05.7", t: "gap", q: "O çok ___ . (güzel – Sie ist sehr schön.)", a: ["güzel", "güzeldir"],
      wrong: { "güzelsin": "„güzelsin“ = du bist schön. 3. Person → meist **ohne** Endung." },
      e: "3. Person Singular: meist **ohne Endung**: *O çok güzel.* (-dir klingt förmlich, ist aber auch richtig.)" },
    { id: "tr-a1-05.8", t: "gap", q: "Ben ___ . (hasta – Ich bin krank.)", a: ["hastayım"],
      wrong: { "hastaım": "Das Wort endet auf einen Vokal → Puffer-**y**: hasta**y**ım.", "hastayim": "Letzter Vokal **a** → -y**ı**m (ohne Punkt)." },
      e: "hasta + y + ım = **hastayım**." },
    { id: "tr-a1-05.9", t: "speak", say: "Bugün çok yorgunum.",
      e: "„Heute bin ich sehr müde.“ Die Personalendung (-um = ich bin) ist **unbetont**: *yor-GU-num*, nicht *yor-gu-NUM*. *çok* beginnt mit tsch, *yorgun* mit j. Typischer Fehler: die Endung stark betonen, weil man sie als neue Silbe hört." },
    { id: "tr-a1-05.10", t: "speak", say: "Ben öğretmen değilim, öğrenciyim.",
      e: "„Ich bin kein Lehrer, ich bin Student.“ Das **ğ** ist stumm: *öğretmen* ≈ „öö-ret-men“, *değilim* ≈ „de-i-lim“ (zwischen e und i klingt es wie ein leichtes j). Die Endungen -im/-yim bleiben unbetont: *de-Ğİ-lim*, *öğ-ren-Cİ-yim*. Typischer Fehler: „deg-ilim“ mit hartem g." }
  ]
});

K.add('tr-a1-06', {
  lesson: [
    { p: "Ja/Nein-Fragen bildet man mit der Partikel **mI** (mı/mi/mu/mü). Sie wird **getrennt geschrieben**, folgt der großen Vokalharmonie – und die **Personalendung hängt an mI**." },
    { table: { head: ["Person", "Beispiel", "Deutsch"], rows: [
      ["ben", "Hasta **mıyım**?", "Bin ich krank?"], ["sen", "Öğrenci **misin**?", "Bist du Student?"], ["o", "Türk **mü**?", "Ist er Türke?"],
      ["biz", "Geç **miyiz**?", "Sind wir spät dran?"], ["siz", "Yorgun **musunuz**?", "Sind Sie müde?"], ["onlar", "Evdeler **mi**?", "Sind sie zu Hause?"]
    ] } },
    { h: "Fragewörter" },
    { table: { head: ["Türkisch", "Deutsch"], rows: [
      ["ne?", "was?"], ["kim?", "wer?"], ["nerede?", "wo?"], ["nereye?", "wohin?"], ["nereden?", "woher?"],
      ["ne zaman?", "wann?"], ["nasıl?", "wie?"], ["neden? / niye?", "warum?"], ["kaç?", "wie viel(e)?"], ["hangi?", "welche(r/s)?"]
    ] } },
    { tip: "Satzbau: **Subjekt – Objekt – Verb** (Verb am Ende). Das Fragewort steht dort, wo die Antwort stehen würde: *Sen **nerede** oturuyorsun?* – *Ben **Bonn’da** oturuyorum.*" }
  ],
  exercises: [
    { id: "tr-a1-06.1", t: "mc", q: "„Bist du Student?“", o: ["Öğrenci misin?", "Öğrencimi sin?", "Öğrenci sin mi?", "Mi öğrenci sin?"], a: 0,
      why: { 1: "mI wird **getrennt** geschrieben.", 2: "Die Personalendung hängt **an mi**: misin.", 3: "mI steht **nach** dem Wort." },
      e: "Wort + **mi** + Endung: *Öğrenci **misin**?*" },
    { id: "tr-a1-06.2", t: "mc", q: "„Sind Sie müde?“", o: ["Yorgun musunuz?", "Yorgun mısınız?", "Yorgunmusunuz?"], a: 0,
      why: { 1: "Letzter Vokal **u** → mu, nicht mı.", 2: "mI wird getrennt geschrieben." },
      e: "yorg**u**n → **mu** + sunuz." },
    { id: "tr-a1-06.3", t: "gap", q: "Türk ___ ? (Bist du Türke?)", a: ["müsün"],
      wrong: { "misin": "Letzter Vokal **ü** (Türk) → **mü**sün.", "musun": "ü ist ein vorderer Vokal → **müsün**.", "mü": "„Türk mü?“ = Ist er Türke? Für „du“ braucht mü die Endung: **müsün**." },
      e: "T**ü**rk → **müsün**." },
    { id: "tr-a1-06.4", t: "mc", q: "___ yaşındasın? (Wie alt bist du?)", o: ["Kaç", "Ne", "Nasıl"], a: 0,
      why: { 1: "„ne“ = was.", 2: "„nasıl“ = wie (Art und Weise)." },
      e: "Alter/Anzahl → **Kaç**: *Kaç yaşındasın?*" },
    { id: "tr-a1-06.5", t: "mc", q: "Adın ___ ? (Wie heißt du?)", o: ["kim", "ne", "nasıl"], a: 1,
      why: { 0: "kim = wer.", 2: "Im Deutschen sagt man „wie“, im Türkischen fragt man „Dein Name – was?“" },
      e: "**Adın ne?** = Was ist dein Name?" },
    { id: "tr-a1-06.6", t: "mc", q: "___ oturuyorsun? (Wo wohnst du?)", o: ["Nerede", "Nereye", "Nereden"], a: 0,
      why: { 1: "nereye = wohin.", 2: "nereden = woher." },
      e: "**Nerede** = wo?" },
    { id: "tr-a1-06.7", t: "mc", q: "___ gidiyorsun? (Wohin gehst du?)", o: ["Nerede", "Nereye", "Nereden"], a: 1,
      why: { 0: "nerede = wo.", 2: "nereden = woher." },
      e: "**Nereye** = wohin? (Dativ -e)" },
    { id: "tr-a1-06.8", t: "gap", q: "Bu kahve ___ ? (Ist das Kaffee?)", a: ["mi"],
      wrong: { "mı": "Letzter Vokal von kahv**e** ist e → **mi** (mit Punkt).", "mu": "Letzter Vokal e → **mi**." },
      e: "kahv**e** → **mi**." },
    { id: "tr-a1-06.9", t: "speak", say: "Siz nerede oturuyorsunuz?",
      e: "„Wo wohnen Sie?“ Fragewörter tragen die Betonung vorne: **NE**-re-de – eine Ausnahme von der Endbetonung. Das lange Verb in Silben sprechen: o-tu-ru-**YOR**-su-nuz. Typischer Fehler: *nerede* auf der letzten Silbe betonen („nere-DE“)." },
    { id: "tr-a1-06.10", t: "speak", say: "Yorgun musun, aç mısın?",
      e: "„Bist du müde oder hungrig?“ mI wird getrennt geschrieben, ist **unbetont** und folgt dem Vokal davor: yorg**u**n → **mu**sun, **a**ç → **mı**sın. Betonung: *yor-GUN mu-sun, AÇ mı-sın*. Typischer Fehler: erst ganz am Satzende mit der Stimme hochgehen wie im Deutschen – im Türkischen steigt der Ton schon auf der Silbe vor mI." }
  ]
});

K.add('tr-a1-07', {
  lesson: [
    { p: "„Mein“, „dein“ usw. werden als **Endung** ans Nomen gehängt. Das Pronomen (benim, senin …) kann davor stehen, ist aber oft optional." },
    { table: { head: ["Person", "nach Konsonant", "nach Vokal", "Beispiel"], rows: [
      ["benim (mein)", "-Im", "-m", "ev**im**, araba**m**"], ["senin (dein)", "-In", "-n", "ev**in**, araba**n**"],
      ["onun (sein/ihr)", "-I", "-sI", "ev**i**, araba**sı**"], ["bizim (unser)", "-ImIz", "-mIz", "ev**imiz**, araba**mız**"],
      ["sizin (euer/Ihr)", "-InIz", "-nIz", "ev**iniz**, araba**nız**"], ["onların (ihr)", "-lArI", "-lArI", "ev**leri**, araba**ları**"]
    ] } },
    { warn: "**Konsonantenerweichung**: Endet ein Wort auf **p, ç, t, k** und folgt ein Vokal, wird es oft weich: kitap → kita**b**ım, ağaç → ağa**c**ım, çocuk → çocu**ğ**um." },
    { ex: [["Bu benim evim.", "Das ist mein Haus."], ["Araban nerede?", "Wo ist dein Auto?"], ["Kitabım masada.", "Mein Buch ist auf dem Tisch."]] }
  ],
  exercises: [
    { id: "tr-a1-07.1", t: "gap", q: "benim ___ (ev – mein Haus)", a: ["evim"],
      wrong: { "evım": "Letzter Vokal **e** → -**i**m (mit Punkt).", "evm": "Nach Konsonant braucht es einen Vokal: ev**im**." },
      e: "Konsonant + **-im** (Vokal e → i): **evim**." },
    { id: "tr-a1-07.2", t: "gap", q: "senin ___ (araba – dein Auto)", a: ["araban"],
      wrong: { "arabaın": "Nach Vokal nur **-n**: araba**n**.", "arabanız": "„arabanız“ = euer/Ihr Auto. Dein → **araban**." },
      e: "Endet auf Vokal → nur **-n**: **araban**." },
    { id: "tr-a1-07.3", t: "gap", q: "onun ___ (araba – sein/ihr Auto)", a: ["arabası"],
      wrong: { "arabasi": "Achte auf **ı** ohne Punkt: arabası.", "arabaı": "Nach Vokal kommt ein **s** dazu: araba**sı**." },
      e: "Nach Vokal: **-sI** → **arabası**." },
    { id: "tr-a1-07.4", t: "gap", q: "bizim ___ (okul – unsere Schule)", a: ["okulumuz"],
      wrong: { "okulimiz": "Letzter Vokal **u** → große Harmonie: -**u**m**u**z.", "okulımız": "Letzter Vokal **u** → -**u**m**u**z." },
      e: "ok**u**l → **-umuz**: **okulumuz**." },
    { id: "tr-a1-07.5", t: "gap", q: "benim ___ (kitap – mein Buch)", a: ["kitabım"],
      wrong: { "kitapım": "Konsonantenerweichung: p → **b** vor Vokal: kita**b**ım.", "kitabim": "Letzter Vokal **a** → -**ı**m (ohne Punkt)." },
      e: "kitap + ım → p wird **b**: **kitabım**." },
    { id: "tr-a1-07.6", t: "mc", q: "sizin ___ (anne – Ihre Mutter)", o: ["anneniz", "annesiniz", "anneleriniz"], a: 0,
      why: { 1: "„annesiniz“ heißt „Sie sind Mutter“ – das ist die Personalendung!", 2: "Das wäre „Ihre Mütter“ (Plural)." },
      e: "anne + **niz** = **anneniz**." },
    { id: "tr-a1-07.7", t: "mc", q: "benim ___ (çocuk – mein Kind)", o: ["çocuğum", "çocukum", "çocukim"], a: 0,
      why: { 1: "k wird vor Vokal zu **ğ**.", 2: "k → ğ, und Vokalharmonie u → -um." },
      e: "çocuk → **çocuğum** (k → ğ)." },
    { id: "tr-a1-07.8", t: "gap", q: "onun ___ (kedi – seine/ihre Katze)", a: ["kedisi"],
      wrong: { "kedii": "Nach Vokal kommt ein **s** dazu: kedi**si**.", "kedisı": "Letzter Vokal **i** → -s**i**." },
      e: "Nach Vokal: **-sI** → **kedisi**." },
    { id: "tr-a1-07.9", t: "speak", say: "Kitabım ve kalemim çantamda.",
      e: "„Mein Buch und mein Stift sind in meiner Tasche.“ Sprich in *kitabım* ein deutliches **b** (kitap → kitabım) und ein dumpfes ı am Ende. *çantamda* beginnt mit **tsch**. Typischer Fehler: „kitapım“ – die Erweichung p → b wird beim Sprechen vergessen." },
    { id: "tr-a1-07.10", t: "speak", say: "Senin çocuğun kaç yaşında?",
      e: "„Wie alt ist dein Kind?“ In *çocuğun* ist das **ğ** stumm und verbindet nur die beiden u: „tscho-dschu-un“. *kaç* endet auf tsch, *yaşında* ≈ „ja-schın-da“. Typischer Fehler: ğ als g sprechen („tschodschugun“)." }
  ]
});

K.add('tr-a1-08', {
  lesson: [
    { p: "**var** = es gibt / vorhanden, **yok** = es gibt nicht / nicht vorhanden. Damit drückt man auch **„haben“** aus: Possessivsuffix + var/yok." },
    { table: { head: ["Türkisch", "Deutsch"], rows: [
      ["Burada bir market **var**.", "Hier gibt es einen Supermarkt."], ["Evde süt **yok**.", "Zu Hause gibt es keine Milch."],
      ["Bir kedi**m** **var**.", "Ich habe eine Katze."], ["Zaman**ım** **yok**.", "Ich habe keine Zeit."], ["Araba**n** **var mı**?", "Hast du ein Auto?"]
    ] } },
    { tip: "Kurze Antworten: *Evet, var.* / *Hayır, yok.*" },
    { warn: "**değil** verneint Nominalsätze („ist nicht“), **yok** verneint das Vorhandensein („gibt es nicht / habe nicht“). *Paran var mı? – Hayır, yok.* (nicht: değil)" }
  ],
  exercises: [
    { id: "tr-a1-08.1", t: "mc", q: "„Ich habe eine Katze.“", o: ["Bir kedim var.", "Ben bir kedi var.", "Bir kedi benim."], a: 0,
      why: { 1: "„haben“ braucht das Possessivsuffix: kedi**m** var.", 2: "Das hieße etwa „Eine Katze gehört mir.“ – „haben“ drückt man aber mit Possessivsuffix + var aus." },
      e: "Possessiv + var: *Bir kedi**m** var.*" },
    { id: "tr-a1-08.2", t: "gap", q: "Zamanım ___ . (Ich habe keine Zeit.)", a: ["yok"],
      wrong: { "değil": "„değil“ verneint „sein“. Für „nicht haben / gibt es nicht“ → **yok**.", "var": "„var“ = vorhanden. Gesucht ist das Gegenteil: **yok**." },
      e: "**yok** = nicht vorhanden." },
    { id: "tr-a1-08.3", t: "mc", q: "„Gibt es hier eine Apotheke?“", o: ["Burada eczane var mı?", "Burada eczane var mi?", "Burada var eczane mı?"], a: 0,
      why: { 1: "v**a**r → letzter Vokal a → **mı** (ohne Punkt).", 2: "var steht am Ende, mI danach." },
      e: "**var mı?** = gibt es?" },
    { id: "tr-a1-08.4", t: "gap", q: "Araban var ___ ? (Hast du ein Auto?)", a: ["mı"],
      wrong: { "mi": "Letzter Vokal von v**a**r ist a → **mı** (ohne Punkt).", "mu": "Letzter Vokal a → **mı**." },
      e: "var → **mı**." },
    { id: "tr-a1-08.5", t: "mc", q: "„Paran var mı?“ – Negative Antwort:", o: ["Hayır, yok.", "Hayır, değil.", "Hayır, var değil."], a: 0,
      why: { 1: "var wird nicht mit değil verneint – das Gegenteil von var ist das eigene Wort **yok**.", 2: "Das Gegenteil von var ist **yok**." },
      e: "Gegenteil von var: **yok**." },
    { id: "tr-a1-08.6", t: "gap", q: "Evde süt ___ . (Zu Hause gibt es keine Milch.)", a: ["yok"],
      wrong: { "değil": "„gibt es nicht“ → **yok**, nicht değil." },
      e: "**yok**." },
    { id: "tr-a1-08.7", t: "order", q: "Bilde den Satz: „Ich habe zwei Kinder.“", w: ["var", "çocuğum", "İki"], a: ["İki çocuğum var"],
      e: "Zahl + Nomen mit Possessiv (im Singular!) + var: *İki çocuğum var.*" },
    { id: "tr-a1-08.8", t: "speak", say: "Bugün hiç zamanım yok.",
      e: "„Heute habe ich gar keine Zeit.“ Das türkische **z** ist ein weiches, summendes s wie in *Sonne* – kein „ts“ wie im deutschen *Zeit*! Also „sa-ma-nım“, nicht „tsa-ma-nım“. *hiç* ≈ „hitsch“ mit hörbarem h, *yok* ≈ „jok“." },
    { id: "tr-a1-08.9", t: "speak", say: "Evde ekmek var mı?",
      e: "„Ist zu Hause Brot da?“ *ev* ≈ „ew“ (v = w). mı ist unbetont: **VAR** mı. Sprich das **r** in *var* deutlich mit der Zungenspitze aus. Typischer Fehler: „wa mı“ – das r wie im Deutschen verschlucken." }
  ]
});

K.add('tr-a1-09', {
  lesson: [
    { p: "Türkisch drückt „in, nach, aus“ mit **Endungen** aus, nicht mit Präpositionen." },
    { table: { head: ["Fall", "Frage", "Endung", "Beispiele"], rows: [
      ["Lokativ", "Wo? – nerede?", "-dA / -tA", "ev**de** (zu Hause), okul**da** (in der Schule), park**ta**"],
      ["Dativ", "Wohin? – nereye?", "-(y)A", "ev**e** (nach Hause), okul**a**, Almanya’**ya**"],
      ["Ablativ", "Woher? – nereden?", "-dAn / -tAn", "ev**den**, okul**dan**, park**tan**"]
    ] } },
    { tip: "Nach **f, s, t, k, ç, ş, h, p** wird **d → t**. Merksatz: **„FıSTıKÇı ŞaHaP“** (Pistazienverkäufer Şahap): park**ta**, sokak**tan**." },
    { warn: "Bei **Eigennamen** steht ein **Apostroph**: *İstanbul’da, Berlin’e, Türkiye’den*. Nach Vokal im Dativ ein Puffer-y: *Almanya’**y**a*." },
    { ex: [["Kitap masada.", "Das Buch ist auf dem Tisch."], ["Okula gidiyorum.", "Ich gehe zur Schule."], ["Almanya’dan geliyorum.", "Ich komme aus Deutschland."]] }
  ],
  exercises: [
    { id: "tr-a1-09.1", t: "gap", q: "Kitap ___ . (masa – Das Buch ist auf dem Tisch.)", a: ["masada"],
      wrong: { "masaya": "-ya = wohin (Dativ). Gesucht ist **wo** → Lokativ: **masada**.", "masade": "Letzter Vokal **a** → -d**a**." },
      e: "Lokativ (wo?): masa + **da** = **masada**." },
    { id: "tr-a1-09.2", t: "gap", q: "___ gidiyorum. (okul – Ich gehe zur Schule.)", a: ["okula"],
      wrong: { "okulda": "-da = wo (Lokativ). „zur Schule“ = wohin → Dativ: **okula**.", "okule": "Letzter Vokal **u** → kleine Harmonie: -**a**." },
      e: "Dativ (wohin?): **okula**." },
    { id: "tr-a1-09.3", t: "gap", q: "___ geliyorum. (Almanya – Ich komme aus Deutschland.)", a: ["Almanya'dan"],
      wrong: { "almanyadan": "Fast! Bei Eigennamen steht ein **Apostroph**: Almanya’dan.", "almanya'den": "Letzter Vokal **a** → -d**a**n.", "almanya'da": "-da = in (wo). „aus“ = woher → **-dan**." },
      e: "Ablativ (woher?): **Almanya’dan**." },
    { id: "tr-a1-09.4", t: "mc", q: "„im Park“", o: ["parkda", "parkta"], a: 1,
      why: { 0: "park endet auf **k** (FıSTıKÇı ŞaHaP) → d wird **t**." },
      e: "**parkta**." },
    { id: "tr-a1-09.5", t: "mc", q: "„nach Istanbul“", o: ["İstanbul’a", "İstanbul’ya", "İstanbul’e"], a: 0,
      why: { 1: "Das Puffer-y kommt nur nach Vokal – İstanbul endet auf Konsonant.", 2: "Letzter Vokal **u** → -a." },
      e: "Dativ: **İstanbul’a**." },
    { id: "tr-a1-09.6", t: "mc", q: "„aus dem Büro“ (ofis)", o: ["ofisten", "ofisden", "ofistan"], a: 0,
      why: { 1: "ofis endet auf **s** → d wird **t**.", 2: "Letzter Vokal **i** → -t**e**n." },
      e: "**ofisten**." },
    { id: "tr-a1-09.7", t: "gap", q: "Annem ___ . (mutfak – Meine Mutter ist in der Küche.)", a: ["mutfakta"],
      wrong: { "mutfakda": "mutfak endet auf **k** → -**t**a.", "mutfağa": "Das wäre „in die Küche“ (wohin). Wo? → **mutfakta**." },
      e: "**mutfakta**." },
    { id: "tr-a1-09.8", t: "mc", q: "Welche Frage passt zu „Ankara’ya gidiyorum.“?", o: ["Nereye gidiyorsun?", "Nerede gidiyorsun?", "Nereden gidiyorsun?"], a: 0,
      why: { 1: "Nerede = wo (Lokativ).", 2: "Nereden = woher." },
      e: "-ya = Dativ → **Nereye?**" },
    { id: "tr-a1-09.10", t: "speak", say: "Annem şimdi mutfakta.",
      e: "„Meine Mutter ist gerade in der Küche.“ *mutfakta*: nach k wird -da zu **-ta**, das hört man auch. *şimdi* ist eine Ausnahme bei der Betonung: **ŞİM**-di (vorne). Das doppelte n in *annem* etwas länger halten: „an-nem“. Typischer Fehler: *şimdi* mit s statt sch." },
    { id: "tr-a1-09.11", t: "speak", say: "Akşam işten eve dönüyorum.",
      e: "„Abends komme ich von der Arbeit nach Hause.“ Zwei Fälle in einem Satz: iş-**ten** (woher, nach ş wird d → t), ev-**e** (wohin). *akşam* ≈ „ak-scham“, *dönüyorum* mit gerundeten Lippen bei ö und ü. Typischer Fehler: „işden“ – nach ş klingt die Endung mit **t**." }
  ]
});

K.add('tr-a1-10', {
  lesson: [
    { p: "Die **-(I)yor**-Zeit entspricht dem deutschen Präsens: was gerade passiert, aber auch nahe Zukunft. Aufbau: **Verbstamm + (I)yor + Personalendung**." },
    { p: "Verbstamm = Infinitiv ohne -mak/-mek: gel**mek** → gel-, oku**mak** → oku-." },
    { table: { head: ["Person", "gelmek (kommen)", "yapmak (machen)", "okumak (lesen)"], rows: [
      ["ben", "gel**iyorum**", "yap**ıyorum**", "oku**yorum**"], ["sen", "gel**iyorsun**", "yap**ıyorsun**", "oku**yorsun**"],
      ["o", "gel**iyor**", "yap**ıyor**", "oku**yor**"], ["biz", "gel**iyoruz**", "yap**ıyoruz**", "oku**yoruz**"],
      ["siz", "gel**iyorsunuz**", "yap**ıyorsunuz**", "oku**yorsunuz**"], ["onlar", "gel**iyorlar**", "yap**ıyorlar**", "oku**yorlar**"]
    ] } },
    { tip: "Stamm auf **-a / -e**: dieser Vokal wird zu ı/i/u/ü: bekle-mek → bekl**i**yorum, ara-mak → ar**ı**yorum." },
    { warn: "Bei **gitmek** (gehen) und **etmek** (machen) wird t **vor einem Vokal** zu **d**: gi**d**iyorum, e**d**iyorum – aber: gitmiyorum, gitti." },
    { p: "**Verneinung**: -m(I)- vor -yor: gel**mi**yorum (ich komme nicht). **Frage**: gel**iyor musun**? (Kommst du?)" }
  ],
  exercises: [
    { id: "tr-a1-10.1", t: "gap", q: "Ben ___ . (gelmek – Ich komme.)", a: ["geliyorum"],
      wrong: { "gelyorum": "Nach Konsonant braucht es einen Vokal: gel-**i**-yorum.", "geliyor": "Das ist „er/sie kommt“. Ich → **geliyorum**." },
      e: "gel + **iyor** + **um** = **geliyorum**." },
    { id: "tr-a1-10.2", t: "gap", q: "Sen ne ___ ? (yapmak – Was machst du?)", a: ["yapıyorsun"],
      wrong: { "yapiyorsun": "Achte auf **ı** ohne Punkt: yap**ı**yorsun (letzter Vokal a).", "yapıyorsın": "Nach -yor kommt immer **u**: -yors**u**n." },
      e: "y**a**p → -**ı**yor: **yapıyorsun**." },
    { id: "tr-a1-10.3", t: "gap", q: "O kitap ___ . (okumak – Er liest ein Buch.)", a: ["okuyor"],
      wrong: { "okuiyor": "Stamm endet auf Vokal → nur **-yor**: okuyor." },
      e: "Stamm auf Vokal → nur **-yor**: **okuyor**." },
    { id: "tr-a1-10.4", t: "gap", q: "Biz Türkçe ___ . (öğrenmek – Wir lernen Türkisch.)", a: ["öğreniyoruz"],
      wrong: { "öğreniyorüz": "Nach -yor kommt immer **u**: -yor**u**z." },
      e: "öğren + iyor + uz = **öğreniyoruz**." },
    { id: "tr-a1-10.5", t: "mc", q: "„Ich warte.“ (beklemek)", o: ["bekliyorum", "bekleyorum", "beklüyorum"], a: 0,
      why: { 1: "Das e des Stammes wird vor -yor zu **i**.", 2: "Vokalharmonie: e → **i** (nicht ü)." },
      e: "bekle- → bekl**i**yorum." },
    { id: "tr-a1-10.6", t: "mc", q: "„Ich komme nicht.“", o: ["gelmiyorum", "gelmeyorum", "gelmiyor değilim"], a: 0,
      why: { 1: "Die Verneinung -me- wird vor -yor zu -mi-.", 2: "-yor-Verben verneint man nicht mit değil." },
      e: "gel + **mi** + yorum = **gelmiyorum**." },
    { id: "tr-a1-10.7", t: "mc", q: "„Gehst du (jetzt)?“ (gitmek)", o: ["Gidiyor musun?", "Gitiyor musun?", "Gidiyorsun mu?"], a: 0,
      why: { 1: "Bei gitmek wird t → **d** vor Vokal.", 2: "Die Personalendung hängt an **mu**: gidiyor musun." },
      e: "**Gidiyor musun?**" },
    { id: "tr-a1-10.8", t: "gap", q: "Onlar ___ . (çalışmak – Sie arbeiten.)", a: ["çalışıyorlar", "çalışıyor"],
      wrong: { "çalışıyorler": "-yor ist unveränderlich (immer mit o) – deshalb danach immer -l**a**r: çalışıyorlar.", "çalışiyorlar": "Letzter Vokal **ı** in çalış → -**ı**yor (ohne Punkt): çalışıyorlar." },
      e: "çalış + ıyor + lar = **çalışıyorlar**. Steht *onlar* schon da, darf -lar auch wegfallen: *Onlar çalışıyor.* ist ebenfalls richtig." },
    { id: "tr-a1-10.9", t: "order", q: "Bilde den Satz: „Ich lerne Türkisch.“", w: ["öğreniyorum", "Türkçe", "Ben"], a: ["Ben Türkçe öğreniyorum"],
      e: "Subjekt – Objekt – **Verb am Ende**." },
    { id: "tr-a1-10.10", t: "speak", say: "Şu anda ne yapıyorsun?",
      e: "„Was machst du gerade?“ Die Silbe **-yor** trägt die Betonung: *ya-pı-YOR-sun*. Das ı in *yapıyorsun* ist dumpf (ohne Punkt). Typischer Fehler: „japijorsun“ mit hellem i – oder die Betonung auf den Anfang legen wie im Deutschen." },
    { id: "tr-a1-10.11", t: "speak", say: "Türkçe öğreniyorum, çok zevkli.",
      e: "„Ich lerne Türkisch, es macht viel Spaß.“ *Türkçe* ≈ „türk-tsche“, *öğreniyorum* ≈ „öö-re-ni-jo-rum“ (ğ stumm), *zevkli* ≈ „sew-kli“ mit weichem, summendem **z** und v wie w. Typischer Fehler: z als „ts“ sprechen („tsewkli“)." }
  ]
});

K.add('tr-a1-11', {
  lesson: [
    { table: { head: ["Zahl", "Türkisch", "Zahl", "Türkisch"], rows: [
      ["0", "sıfır", "10", "on"], ["1", "bir", "20", "yirmi"], ["2", "iki", "30", "otuz"], ["3", "üç", "40", "kırk"],
      ["4", "dört", "50", "elli"], ["5", "beş", "60", "altmış"], ["6", "altı", "70", "yetmiş"], ["7", "yedi", "80", "seksen"],
      ["8", "sekiz", "90", "doksan"], ["9", "dokuz", "100", "yüz"], ["", "", "1000", "bin"]
    ] } },
    { p: "Zahlen werden **logisch von groß nach klein** gebildet – anders als im Deutschen: 21 = **yirmi bir** (zwanzig eins), 345 = üç yüz kırk beş." },
    { tip: "100 = **yüz** und 1000 = **bin** – ohne „bir“ davor. Aber: 200 = iki yüz, 2000 = iki bin." },
    { h: "Uhrzeit" },
    { p: "Frage: *Saat kaç?* (Wie spät ist es?)" },
    { table: { head: ["Uhrzeit", "Türkisch"], rows: [
      ["3:00", "Saat üç."], ["3:30", "Saat üç **buçuk**."], ["12:30", "Saat **yarım**."], ["4:15", "Saat dördü çeyrek geçiyor."],
      ["4:45", "Saat beşe çeyrek var."], ["4:10", "Saat dördü on geçiyor."], ["4:50", "Saat beşe on var."]
    ] } },
    { warn: "Im Deutschen „halb vier“ = 3:30. Im Türkischen sagt man „**üç buçuk**“ (drei-einhalb) – also umgekehrt denken!" }
  ],
  exercises: [
    { id: "tr-a1-11.1", t: "mc", q: "21", o: ["yirmi bir", "bir yirmi", "bir ve yirmi"], a: 0,
      why: { 1: "Im Türkischen: erst Zehner, dann Einer.", 2: "Kein „und“ wie im Deutschen." },
      e: "**yirmi bir**." },
    { id: "tr-a1-11.2", t: "gap", q: "50 = ___", a: ["elli"],
      wrong: { "beşon": "Zehner haben eigene Namen: 50 = **elli**." },
      e: "50 = **elli**." },
    { id: "tr-a1-11.3", t: "mc", q: "100", o: ["yüz", "bir yüz"], a: 0,
      why: { 1: "Vor yüz (100) und bin (1000) steht kein „bir“." },
      e: "100 = **yüz**." },
    { id: "tr-a1-11.4", t: "gap", q: "40 = ___", a: ["kırk"],
      wrong: { "kirk": "Achte auf **ı** ohne Punkt: kırk." },
      e: "40 = **kırk**." },
    { id: "tr-a1-11.5", t: "mc", q: "3:30", o: ["Saat üç buçuk.", "Saat dört buçuk.", "Saat yarım dört."], a: 0,
      why: { 1: "Das wäre 4:30 – die deutsche Falle „halb vier“!", 2: "„yarım“ steht nur allein (Saat yarım = 12:30) oder vor einem Nomen (yarım kilo). Nach einer Zahl heißt „einhalb“ immer **buçuk**: üç buçuk." },
      e: "3:30 = **üç buçuk** (drei-einhalb)." },
    { id: "tr-a1-11.6", t: "mc", q: "4:45", o: ["Saat beşe çeyrek var.", "Saat dörde çeyrek var.", "Saat dördü çeyrek geçiyor."], a: 0,
      why: { 1: "Das wäre 3:45.", 2: "Das wäre 4:15." },
      e: "„Bis fünf fehlt ein Viertel“ → **beşe çeyrek var**." },
    { id: "tr-a1-11.7", t: "gap", q: "1000 = ___", a: ["bin"],
      wrong: { "bir bin": "Vor bin steht kein „bir“: **bin**." },
      e: "1000 = **bin**." },
    { id: "tr-a1-11.8", t: "mc", q: "75", o: ["yetmiş beş", "yedi beş", "beş yetmiş"], a: 0,
      why: { 1: "70 = yetmiş, nicht yedi (7).", 2: "Erst Zehner, dann Einer." },
      e: "**yetmiş beş**." },
    { id: "tr-a1-11.9", t: "speak", say: "Saat üç buçuk.", alt: ["Saat 3 buçuk", "Saat 3.30", "Saat 3:30", "Saat 15:30", "Saat 15.30"],
      e: "„Es ist halb vier.“ (wörtlich: drei-einhalb) *buçuk* ≈ „bu-tschuk“, *üç* ≈ „ütsch“ mit kurzem ü. Typischer Fehler deutscher Muttersprachler: an „halb **vier**“ denken und „dört buçuk“ sagen – das wäre halb fünf!" },
    { id: "tr-a1-11.10", t: "speak", say: "Bu elbise yüz elli lira.", alt: ["Bu elbise 150 lira", "Bu elbise 150 TL"],
      e: "„Dieses Kleid kostet hundertfünfzig Lira.“ Zahlen von groß nach klein: yüz (100) + elli (50). Doppelkonsonanten werden im Türkischen **länger** gesprochen: *el-li* – das l etwas länger halten. Das z in *yüz* ist weich und summend. Typischer Fehler: „eli“ (= seine Hand) statt „elli“." }
  ]
});

K.add('tr-a1-12', {
  lesson: [
    { p: "Der Akkusativ **-(y)I** markiert ein **bestimmtes** direktes Objekt (deutsch: *das* Buch, *den* Mann). Unbestimmte Objekte bekommen **keine** Endung." },
    { table: { head: ["unbestimmt", "bestimmt (Akkusativ)"], rows: [
      ["Kitap okuyorum. (Ich lese gerade / Ich lese ein Buch.)", "Kitab**ı** okuyorum. (Ich lese das Buch.)"],
      ["Çay içiyorum. (Ich trinke Tee.)", "Çay**ı** içiyorum. (Ich trinke den Tee.)"],
      ["Bir elma yiyorum. (Ich esse einen Apfel.)", "Elma**yı** yiyorum. (Ich esse den Apfel.)"]
    ] } },
    { p: "Große Vokalharmonie: ev**i**, okul**u**, göz**ü**, kız**ı** – nach Vokal mit **y**: kapı**yı**, araba**yı**. Eigennamen: Ali’**yi**, Ayşe’**yi**." },
    { table: { head: ["Pronomen", "Akkusativ"], rows: [
      ["ben", "**beni** (mich)"], ["sen", "**seni** (dich)"], ["o", "**onu** (ihn/sie/es)"], ["biz", "**bizi** (uns)"], ["siz", "**sizi** (euch/Sie)"], ["onlar", "**onları** (sie)"]
    ] } }
  ],
  exercises: [
    { id: "tr-a1-12.1", t: "mc", q: "„Ich lese das Buch.“", o: ["Kitabı okuyorum.", "Kitap okuyorum."], a: 0,
      why: { 1: "Ohne Endung = unbestimmt („ich lese (ein) Buch / bin am Lesen“)." },
      e: "Bestimmt → Akkusativ: **kitabı** (p → b)." },
    { id: "tr-a1-12.2", t: "mc", q: "„Ich trinke Tee.“ (allgemein)", o: ["Çay içiyorum.", "Çayı içiyorum."], a: 0,
      why: { 1: "Çayı = **den** Tee (einen bestimmten)." },
      e: "Unbestimmt → **keine Endung**." },
    { id: "tr-a1-12.3", t: "gap", q: "___ seviyorum. (dich – Ich liebe dich.)", a: ["Seni"],
      wrong: { "sen": "„sen“ = du (Subjekt). Objekt „dich“ → **seni**.", "sana": "„sana“ = dir (Dativ). sevmek braucht den Akkusativ → **seni**." },
      e: "sen → Akkusativ **seni**." },
    { id: "tr-a1-12.4", t: "gap", q: "___ görüyorum. (ev – Ich sehe das Haus.)", a: ["Evi"],
      wrong: { "ev": "„das Haus“ ist bestimmt → Akkusativ: ev**i**.", "evı": "Letzter Vokal **e** → -**i** (mit Punkt)." },
      e: "ev + **i** = **evi**." },
    { id: "tr-a1-12.5", t: "gap", q: "___ tanıyor musun? (Ali – Kennst du Ali?)", a: ["Ali'yi"],
      wrong: { "aliyi": "Eigennamen bekommen einen **Apostroph**: Ali’yi.", "ali'i": "Nach Vokal braucht es ein Puffer-**y**: Ali’**y**i." },
      e: "Ali + ’ + y + i = **Ali’yi**." },
    { id: "tr-a1-12.6", t: "mc", q: "„Ich öffne die Tür.“ (kapı)", o: ["Kapıyı açıyorum.", "Kapıı açıyorum.", "Kapıyi açıyorum."], a: 0,
      why: { 1: "Nach Vokal braucht man ein Puffer-**y**.", 2: "Letzter Vokal **ı** → -yı (ohne Punkt)." },
      e: "kapı + y + ı = **kapıyı**." },
    { id: "tr-a1-12.7", t: "mc", q: "„Ich esse (irgend)einen Apfel.“", o: ["Bir elma yiyorum.", "Bir elmayı yiyorum."], a: 0,
      why: { 1: "Für „irgendeinen Apfel“ keine Endung. „Bir elmayı“ hieße „einen bestimmten von den Äpfeln“ (z. B. einen, über den wir gerade gesprochen haben)." },
      e: "Unbestimmt → **bir elma** ohne Endung." },
    { id: "tr-a1-12.8", t: "speak", say: "Seni çok seviyorum.",
      e: "„Ich liebe dich sehr.“ *seni* ist der Akkusativ von *sen* (dich) – nicht „sen seviyorum“. **v** = w: „se-wi-jo-rum“, Betonung auf **-yor**: *se-vi-YO-rum*. Typischer Fehler: das s am Anfang stimmhaft wie im deutschen „Sonne“ sprechen – das türkische **s** ist immer scharf (wie in *Haus*)." },
    { id: "tr-a1-12.9", t: "speak", say: "Kapıyı açar mısın, lütfen?",
      e: "„Machst du bitte die Tür auf?“ – eine typische höfliche Bitte (diese Verbform lernst du später). *kapıyı* = die Tür (bestimmt → Akkusativ, nach Vokal mit y): „ka-pı-jı“ mit drei dumpfen ı. *açar* beginnt mit **tsch**: „a-tschar“. Typischer Fehler: „kapiyi“ mit hellem i." }
  ]
});

})(window.KOPRU);
