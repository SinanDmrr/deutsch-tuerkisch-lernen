/* Türkisch A2 – für Deutschsprechende (Erklärungen auf Deutsch)
 * Format und Regeln für Updates (feste IDs!) siehe js/content/de-a1.js und CLAUDE.md.
 * Paket 1 „Erzählen, was war“: tr-a2-01, tr-a2-11, tr-a2-12.
 */
(function (K) {

K.add('tr-a2-01', {
  lesson: [
    { p: "Mit **-DI** erzählst du, was passiert ist – vor allem, was du **selbst erlebt** hast: *Dün sinemaya gittim.* Im Deutschen sagst du dafür „Gestern bin ich ins Kino gegangen“ (Perfekt) oder „Gestern ging ich ins Kino“ (Präteritum). Türkisch hat für beides **eine einzige Form** – du musst weder zwischen Perfekt und Präteritum wählen noch zwischen „haben“ und „sein“." },
    { h: "Aufbau: Verbstamm + -DI + Personalendung" },
    { p: "-DI hat **acht Formen**. Der Vokal folgt der großen Vokalharmonie (ı/i/u/ü). Endet der Stamm auf **f, s, t, k, ç, ş, h, p** (FıSTıKÇı ŞaHaP), wird **d → t** – genau wie beim Lokativ (*parkta*)." },
    { table: { head: ["letzter Vokal", "nach Vokal oder anderem Konsonant", "nach f, s, t, k, ç, ş, h, p"], rows: [
      ["a, ı", "al**dı** (nahm), anla**dı** (verstand)", "yap**tı** (machte), bak**tı** (schaute)"],
      ["e, i", "gel**di** (kam), bekle**di** (wartete)", "git**ti** (ging), iç**ti** (trank)"],
      ["o, u", "ol**du** (wurde), oku**du** (las)", "konuş**tu** (sprach), koş**tu** (rannte)"],
      ["ö, ü", "gör**dü** (sah), yürü**dü** (lief)", "öp**tü** (küsste), düş**tü** (fiel)"]
    ] } },
    { h: "Die Personalendungen sind kurz" },
    { table: { head: ["Person", "gelmek", "yapmak", "okumak", "görmek"], rows: [
      ["ben", "geldi**m**", "yaptı**m**", "okudu**m**", "gördü**m**"],
      ["sen", "geldi**n**", "yaptı**n**", "okudu**n**", "gördü**n**"],
      ["o", "geldi", "yaptı", "okudu", "gördü"],
      ["biz", "geldi**k**", "yaptı**k**", "okudu**k**", "gördü**k**"],
      ["siz", "geldi**niz**", "yaptı**nız**", "okudu**nuz**", "gördü**nüz**"],
      ["onlar", "geldi**ler**", "yaptı**lar**", "okudu**lar**", "gördü**ler**"]
    ] } },
    { warn: "Nach -DI heißen die Endungen **-m, -n, -k** – nicht -(y)Im, -sIn, -(y)Iz wie im Präsens! Also *geldim* (nicht „geldiyim“), *geldin* (nicht „geldisin“), *geldik* (nicht „geldiyiz“)." },
    { tip: "Anders als bei -Iyor bleibt der Stamm **unverändert**: *bekliyorum*, aber *bekle**dim***; *arıyorum*, aber *ara**dım***. Und bei *gitmek* und *etmek* wird t nur **vor einem Vokal** zu d (*gidiyorum*). -DI beginnt mit einem Konsonanten, also folgt auf das t kein Vokal – es bleibt t, und -DI wird zu -ti: *git**t**im, et**t**im* – mit doppeltem t." },
    { h: "Verneinung: -mA- direkt hinter den Stamm" },
    { p: "*gel**me**dim* (ich bin nicht gekommen), *yap**ma**dık* (wir haben es nicht gemacht), *git**me**diler* (sie sind nicht gegangen). Nach -mA- steht immer ein Vokal, deshalb heißt es danach **immer d**: *iç**me**din*, nie „içmetin“. Die Betonung liegt auf der Silbe **vor** -mA-: *GEL-me-dim*." },
    { warn: "Verben werden **nie mit değil** verneint. „Ich habe nicht geschlafen“ = *uyu**ma**dım*, nicht „uyudum değil“. *değil* gehört zu Nomen und Adjektiven." },
    { h: "Frage: mI kommt ganz ans Ende" },
    { p: "Bei -DI hängt die Personalendung schon **am Verb**. Die Fragepartikel **mI** steht getrennt dahinter und bekommt **keine** Endung mehr." },
    { table: { head: ["Zeit", "„Kommst du? / Bist du gekommen?“", "Wo hängt die Personalendung?"], rows: [
      ["Präsens -Iyor (A1)", "Geliyor **musun**?", "an **mI**"],
      ["Vergangenheit -DI", "Geldi**n** **mi**?", "am **Verb** – mI bleibt nackt"]
    ] } },
    { warn: "Typischer Fehler: *„Geldi misin?“* – das ist das Muster aus dem Präsens. Bei -DI richtig: **Geldin mi?** Ebenso: *Yediniz mi?* (Habt ihr gegessen?), *Gördüler mi?* (Haben sie es gesehen?)." },
    { tip: "mI kann auch hinter dem Wort stehen, nach dem du eigentlich fragst: *Dün **mü** geldin?* (Bist du **gestern** gekommen?) – *Bavulu **sen mi** hazırladın?* (Hast **du** den Koffer gepackt?)." },
    { tip: "„Ich habe schon gegessen“ heißt einfach *Yemek yedim.* – auch Dinge, die bis jetzt wirken, stehen im Türkischen mit -DI. Für Dinge, die du **nur gehört** hast („er soll angekommen sein“), gibt es später -mIş." },
    { ex: [
      ["Geçen yaz ailemle Antalya’ya gittik.", "Letzten Sommer bin ich mit meiner Familie nach Antalya gefahren. (Türkisch zählt dich mit: *ailemle gittik* = „wir“.)"],
      ["Dün işten geç çıktım.", "Gestern bin ich erst spät von der Arbeit weggekommen."],
      ["Otobüsü kaçırdım, taksiye bindim.", "Ich habe den Bus verpasst und ein Taxi genommen."],
      ["Kahvaltı yaptınız mı?", "Habt ihr gefrühstückt?"],
      ["Hayır, daha yapmadık.", "Nein, noch nicht."]
    ] }
  ],
  exercises: [
    { id: "tr-a2-01.1", t: "gap", q: "Dün akşam çok güzel bir film ___ . (izlemek – Gestern Abend habe ich einen sehr schönen Film gesehen.)", a: ["izledim"],
      wrong: { "izledım": "Letzter Vokal von *izle-* ist **e** → -d**i**m (mit Punkt).", "izletim": "*izle-* endet auf einen Vokal → **d** bleibt: izle**d**im.", "izliyorum": "Das ist Präsens. „gestern Abend“ → Vergangenheit: **izledim**.", "izledi": "*izledi* = er/sie hat gesehen. „ich“ → **izledim**.", "izlediyim": "Nach -DI ist die ich-Endung nur **-m**: izledi**m**." },
      e: "izle- + **di** (Vokal e, nach Vokal d) + **m** (ich) = **izledim**. Das Deutsche hat hier Perfekt – Türkisch einfach -DI." },
    { id: "tr-a2-01.2", t: "gap", q: "Geçen hafta İzmir’de güzel bir otelde ___ . (kalmak – Letzte Woche haben wir in Izmir in einem schönen Hotel übernachtet.)", a: ["kaldık"],
      wrong: { "kaldıyız": "Nach -DI ist die wir-Endung nur **-k**: kaldı**k**.", "kaldız": "Nach -DI ist die wir-Endung **-k**, nicht -z: kaldı**k**.", "kaltık": "*l* ist stimmhaft → d bleibt: kal**d**ık.", "kaldılar": "*kaldılar* = sie sind geblieben. „wir“ → **kaldık**.", "kalıyoruz": "Das ist Präsens. „letzte Woche“ → **kaldık**." },
      e: "kal- + **dı** (Vokal a → ı) + **k** (wir) = **kaldık**. *kalmak* heißt „bleiben“ und auch „übernachten, wohnen“ (im Hotel)." },
    { id: "tr-a2-01.3", t: "gap", q: "Sabah üç bardak çay ___ . (içmek – Heute Morgen habe ich drei Gläser Tee getrunken.)", a: ["içtim"],
      wrong: { "içdim": "*iç-* endet auf **ç** (FıSTıKÇı ŞaHaP) → d wird **t**: iç**t**im.", "içtım": "Letzter Vokal **i** → -t**i**m (mit Punkt).", "içtiyim": "Nach -DI ist die ich-Endung nur **-m**: içti**m**.", "içiyorum": "Das ist Präsens. Heute Morgen ist vorbei → **içtim**." },
      e: "iç- endet auf ç → **-ti-** + m = **içtim**. Übrigens: nach *üç* steht kein Plural – *üç bardak*." },
    { id: "tr-a2-01.4", t: "gap", q: "Cumartesi annemle pazara ___ . (gitmek – Am Samstag bin ich mit meiner Mutter auf den Markt gegangen.)", a: ["gittim"],
      wrong: { "gidtim": "t → d gilt nur **vor einem Vokal** (gidiyorum). Vor -ti bleibt t: **gittim**.", "gitdim": "*git-* endet auf **t** → -DI wird **-ti**: git**t**im (doppeltes t).", "gidim": "Hier fehlt die Vergangenheit: git + **ti** + m = **gittim**.", "gitim": "Hier fehlt ein t: git + **ti** + m = **gittim**.", "gittım": "Letzter Vokal **i** → -t**i**m." },
      e: "git- + **ti** (nach t wird d → t) + **m** = **gittim**, mit doppeltem t. Kein Wechsel zu d, weil kein Vokal folgt." },
    { id: "tr-a2-01.5", t: "gap", q: "Bize kartpostal gönderdin ___ ? (Hast du uns eine Postkarte geschickt?)", a: ["mi"],
      wrong: { "misin": "Bei -DI steckt „du“ schon im Verb (gönderdi**n**). mi bekommt **keine** Endung.", "mı": "Letzter Vokal von *gönderdin* ist **i** → **mi** (mit Punkt).", "mu": "Letzter Vokal **i** → **mi**." },
      e: "Bei -DI: erst das ganze Verb mit Person (**gönderdin**), dann nur noch **mi**. Ganz anders als im Präsens (*gönderiyor musun?*)." },
    { id: "tr-a2-01.6", t: "mc", q: "Welcher Satz passt zu „geçen yıl“ (letztes Jahr)?", o: ["Geçen yıl Kapadokya’ya gittik.", "Geçen yıl Kapadokya’ya gidiyoruz.", "Geçen yıl Kapadokya’ya gittiyiz."], a: 0,
      why: { 1: "-Iyor ist Gegenwart. Für Vergangenes mit *geçen yıl* brauchst du **-DI**.", 2: "Nach -DI ist die wir-Endung nur **-k**: gitti**k**. -(y)Iz gehört zum Präsens." },
      e: "**gittik** = wir sind gefahren (git + ti + k)." },
    { id: "tr-a2-01.7", t: "mc", q: "O bütün gün ___ . (çalışmak – Er/Sie hat den ganzen Tag gearbeitet.)", o: ["çalıştı", "çalışdı", "çalıştu", "çalıştı mı"], a: 0,
      why: { 1: "*çalış-* endet auf **ş** (FıSTıKÇı ŞaHaP) → d wird **t**.", 2: "Letzter Vokal **ı** → -t**ı**, nicht -tu.", 3: "Mit *mı* wäre es eine Frage („Hat er gearbeitet?“)." },
      e: "çalış + **tı** = **çalıştı**. Für „er/sie“ gibt es keine Personalendung." },
    { id: "tr-a2-01.8", t: "mc", q: "„Wir haben das Museum nicht gefunden.“", o: ["Müzeyi bulmadık.", "Müzeyi bulduk değil.", "Müzeyi bulmedik.", "Müzeyi bulmatık."], a: 0,
      why: { 1: "*değil* verneint Nomen und Adjektive. Verben verneint man mit **-mA-** direkt am Stamm.", 2: "*bul-* hat den Vokal u → kleine Harmonie: -m**a**-.", 3: "Nach -ma- folgt ein Vokal → immer **d**: bulma**d**ık." },
      e: "bul + **ma** + dı + k = **bulmadık**. *Müzeyi* steht im Akkusativ, weil es ein bestimmtes Museum ist." },
    { id: "tr-a2-01.9", t: "mc", q: "„Habt ihr den Bus verpasst?“ (kaçırmak)", o: ["Otobüsü kaçırdınız mı?", "Otobüsü kaçırdınız mi?", "Otobüsü kaçırdı mısınız?", "Otobüsü kaçırdınızmı?"], a: 0,
      why: { 1: "Letzter Vokal von *kaçırdınız* ist **ı** → **mı** (ohne Punkt).", 2: "Das ist das Präsens-Muster. Bei -DI hängt die Person am Verb (kaçırdı**nız**), mı bleibt nackt.", 3: "mI wird immer **getrennt** geschrieben." },
      e: "kaçır + dı + **nız** (ihr) + **mı** → **Otobüsü kaçırdınız mı?**" },
    { id: "tr-a2-01.10", t: "order", q: "Bilde den Satz: „Gestern haben wir am Strand gefrühstückt.“", w: ["kahvaltı", "Dün", "sahilde", "yaptık"], a: ["Dün sahilde kahvaltı yaptık", "Sahilde dün kahvaltı yaptık"],
      e: "Zeit – Ort – **Verb am Ende**. *kahvaltı yapmak* (frühstücken) bleibt als Einheit zusammen direkt vor dem Verb." },
    { id: "tr-a2-01.11", t: "order", q: "Bilde die Frage: „Hast du deine Mutter und deinen Vater angerufen?“", w: ["mı", "aradın", "babanı", "ve", "Anneni"], a: ["Anneni ve babanı aradın mı", "Babanı ve anneni aradın mı"],
      e: "Objekt – Verb – **mı** ganz am Ende. Die Person (-n = du) steckt schon in *aradın*. *aramak* (anrufen) braucht den Akkusativ: anne**ni**, baba**nı**." },
    { id: "tr-a2-01.12", t: "order", q: "Bilde den Satz: „Im Urlaub habe ich keine einzige E-Mail gelesen.“", w: ["hiç", "Tatilde", "e-posta", "okumadım"], a: ["Tatilde hiç e-posta okumadım", "Tatilde e-posta hiç okumadım"],
      e: "Verneintes Verb (**oku-ma-dım**) am Ende. *hiç* + Verneinung = „überhaupt kein/nicht“." },
    { id: "tr-a2-01.13", t: "match", q: "Ordne die ich-Form der Vergangenheit zu:", p: [["almak", "aldım"], ["beklemek", "bekledim"], ["konuşmak", "konuştum"], ["gitmek", "gittim"], ["yürümek", "yürüdüm"]],
      e: "Vokalharmonie plus d/t: al**dım**, bekle**dim** (Stamm bleibt!), konuş**tum** (ş → t), git**tim** (nach t: d → t), yürü**düm**." },
    { id: "tr-a2-01.14", t: "match", q: "Wer hat es gemacht? Ordne zu:", p: [["yaptım", "ich"], ["yaptın", "du"], ["yaptık", "wir"], ["yaptınız", "ihr / Sie"], ["yaptılar", "sie (mehrere)"]],
      e: "Die kurzen Endungen nach -DI: -m (ich), -n (du), -k (wir), -nIz (ihr/Sie), -lAr (sie)." },
    { id: "tr-a2-01.15", t: "listen", say: "Dün akşam arkadaşlarımla dışarı çıktım ama erken döndüm.", q: "Hör zu: Was ist passiert?",
      o: ["Die Person ist ausgegangen, aber früh zurückgekommen.", "Die Person ist zu Hause geblieben.", "Die Person geht heute Abend aus.", "Die Person ist spät nach Hause gekommen."], a: 0,
      why: { 1: "*dışarı çıktım* = ich bin ausgegangen – also nicht zu Hause geblieben.", 2: "*çıktım* ist Vergangenheit (-tı-), und *dün akşam* heißt „gestern Abend“.", 3: "*erken* = früh. „spät“ wäre *geç*." },
      e: "„Gestern Abend bin ich mit meinen Freunden ausgegangen, aber früh zurückgekommen.“ Zwei -DI-Formen: çık**tım** (nach k wird d → t) und dön**düm** (nach n bleibt d)." },
    { id: "tr-a2-01.16", t: "dictation", say: "Bu sabah otobüsü kaçırdım ve işe geç kaldım.", a: ["Bu sabah otobüsü kaçırdım ve işe geç kaldım."],
      wrong: { "Bu sabah otobüsü kaçırtım ve işe geç kaldım.": "*r* ist stimmhaft → **d**: kaçır**d**ım.", "Bu sabah otobüsü kaçırdım ve işe geç kaltım.": "*l* ist stimmhaft → **d**: kal**d**ım.", "Bu sabah otobüs kaçırdım ve işe geç kaldım.": "„den Bus“ – ein bestimmter Bus → Akkusativ: otobüs**ü**.", "Bu sabah otobüsü kaçırdım ve işe geç kaldim.": "Letzter Vokal **a** → kald**ı**m ohne Punkt." },
      e: "„Heute Morgen habe ich den Bus verpasst und bin zu spät zur Arbeit gekommen.“ *geç kalmak* = sich verspäten (wörtlich „spät bleiben“)." },
    { id: "tr-a2-01.17", t: "speak", say: "Geçen yaz ailemle denize gittik.",
      e: "„Letzten Sommer bin ich mit meiner Familie ans Meer gefahren.“ Türkisch zählt dich mit: *ailemle gittik* (wörtlich „wir sind mit meiner Familie gefahren“). In *gittik* das doppelte t kurz halten: „git-tik“. *ailemle* spricht man a-i-lem-le – a und i getrennt, **kein** deutsches „ei“. *geçen* ≈ „ge-tschen“. Typischer Fehler: „eilemle“ wie im deutschen *Eile*." },
    { id: "tr-a2-01.18", t: "speak", say: "Kahvaltı yaptın mı?",
      e: "„Hast du gefrühstückt?“ mı ist unbetont, der Ton steigt auf der Silbe davor: *yap-TIN mı*. Alle ı sind dumpf. *kahvaltı*: das h ist hörbar, v wie w – „kah-wal-tı“. Typischer Fehler: „yaptı mısın“ – bei -DI steht die Person am Verb, nicht an mı." }
  ]
});

K.add('tr-a2-11', {
  lesson: [
    { p: "Im Präsens hängst du einfach die Personalendung an: *Yorgunum.* (Ich bin müde.) Für **„war“** kommt **-(y)DI** dazwischen: *Yorgun**dum**.* (Ich war müde.) Das ist die Vergangenheit von „sein“ – auf Türkisch *ek fiil* (Hilfsverb als Endung)." },
    { table: { head: ["Person", "Präsens (A1)", "Vergangenheit"], rows: [
      ["ben", "yorgun**um**", "yorgun**dum**"],
      ["sen", "yorgun**sun**", "yorgun**dun**"],
      ["o", "yorgun", "yorgun**du**"],
      ["biz", "yorgun**uz**", "yorgun**duk**"],
      ["siz", "yorgun**sunuz**", "yorgun**dunuz**"],
      ["onlar", "yorgun(**lar**)", "yorgun**dular**"]
    ] } },
    { p: "Nach -(y)DI kommen dieselben **kurzen Endungen** wie bei der Verb-Vergangenheit: **-m, -n, –, -k, -nIz, -lAr**." },
    { h: "Drei Regeln für die Form" },
    { table: { head: ["Regel", "Beispiele"], rows: [
      ["große Vokalharmonie (ı/i/u/ü)", "pahalı → pahalı**ydı**, güzel → güzel**di**, mutlu → mutlu**ydu**, üzgün → üzgün**dü**"],
      ["nach Vokal: Puffer-**y**", "hasta**y**dım, evde**y**dik, Ankara’da**y**dı"],
      ["nach f, s, t, k, ç, ş, h, p: d → **t**", "çocuk**tum** (ich war ein Kind), genç**tik** (wir waren jung), yok**tu**"]
    ] } },
    { tip: "Besonders oft mit **Ortsangaben**: *evde* → *evde**ydim*** (ich war zu Hause), *işte* → *işte**ydim*** (ich war auf der Arbeit), *Nerede**ydin**?* (Wo warst du?)." },
    { h: "vardı / yoktu – „es gab“ und „ich hatte“" },
    { p: "*var* und *yok* bekommen ebenfalls die Endung: **vardı** (es gab, war da), **yoktu** (es gab kein…, war nicht da). Mit Possessivsuffix bedeutet das **„hatte“**: *Param yoktu.* (Ich hatte kein Geld.) *Bir köpeğimiz vardı.* (Wir hatten einen Hund.)" },
    { warn: "**„Ich hatte“ ist nicht „vardım“!** Die Person steckt im Possessivsuffix am Nomen, *vardı* bleibt immer gleich: *zaman**ım** vardı* (ich hatte Zeit), *zaman**ın** vardı* (du hattest Zeit). *Vardım* ist ein ganz anderes Verb: „ich bin angekommen“ (von *varmak*)." },
    { h: "Verneinung und Frage" },
    { table: { head: ["", "Beispiel", "Deutsch"], rows: [
      ["verneint (Nomen/Adjektiv)", "Evde **değildim**.", "Ich war nicht zu Hause."],
      ["verneint (var)", "Otelde havuz **yoktu**.", "Im Hotel gab es keinen Pool."],
      ["Frage", "Hasta **mıydın**?", "Warst du krank?"],
      ["Frage", "Kahvaltı dâhil **miydi**?", "War das Frühstück inklusive?"],
      ["Frage (var)", "Odada klima **var mıydı**?", "Gab es im Zimmer eine Klimaanlage?"]
    ] } },
    { warn: "**Achtung bei der Frage!** Bei „war“ steht **mI zuerst**, die Personalendung hängt hinten an mI: *Hasta **mıydın**?* Bei der Verb-Vergangenheit ist es umgekehrt: *Gel**din** **mi**?* Merke: **Nomen/Adjektiv → mıydın**, **Verb → -dın mı**." },
    { h: "-DI oder -(y)DI?" },
    { table: { head: ["", "Verb-Vergangenheit -DI", "„war“ -(y)DI"], rows: [
      ["hängt an …", "einem **Verbstamm**: *çalış-*", "einem **Nomen, Adjektiv, Ort**: *çalışkan*, *evde*"],
      ["Beispiel", "Çalış**tım**. (Ich habe gearbeitet.)", "Çalışkan**dım**. (Ich war fleißig.)"],
      ["Frage", "Çalıştın **mı**?", "Çalışkan **mıydın**?"]
    ] } },
    { tip: "„Ich war krank“ = *Hasta**ydım**.* (Zustand). *Hasta oldum* heißt dagegen „ich bin krank geworden“ – genau wie im Deutschen (sein ↔ werden). Die Falle: *olmak* heißt sowohl „sein“ als auch „werden“. Wer „ich war krank“ mit *oldum* bildet, sagt also „ich bin krank geworden“. Für den **Zustand** „war“ nimmt man -(y)DI: *hastaydım*." },
    { tip: "Man darf *idi* auch **getrennt** schreiben: *hasta idim* = *hastaydım*. Das ist korrekt, klingt aber förmlich oder altmodisch. Im Alltag sagt und schreibt man die Endung." },
    { ex: [
      ["Geçen hafta İstanbul’daydık.", "Letzte Woche waren wir in Istanbul."],
      ["Hava çok sıcaktı ama deniz soğuktu.", "Es war sehr heiß, aber das Meer war kalt."],
      ["Eskiden bir kedimiz vardı.", "Früher hatten wir eine Katze."],
      ["Dün neredeydin? – İşteydim.", "Wo warst du gestern? – Ich war auf der Arbeit."],
      ["Nakit param yoktu, kartla ödedim.", "Ich hatte kein Bargeld, ich habe mit Karte bezahlt."]
    ] }
  ],
  exercises: [
    { id: "tr-a2-11.1", t: "gap", q: "Dün bütün gün ___ . (ev – Gestern war ich den ganzen Tag zu Hause.)", a: ["evdeydim"],
      wrong: { "evdeyim": "Das ist Präsens („ich bin zu Hause“). Für „war“ → -(y)DI: evde**ydim**.", "evdedim": "*evde* endet auf einen Vokal → Puffer-**y**: evde**y**dim.", "evdeydım": "Letzter Vokal **e** → -ydi**m** mit Punkt: evdeydim.", "evdeytim": "Nach dem Puffer-y steht immer **d**: evdey**d**im.", "evdim": "*evdim* hieße „ich war ein Haus“. Es fehlt der Ort (-de = zu Hause): ev**de**ydim." },
      e: "ev + **de** (wo?) + **y** (Puffer nach Vokal) + **di** + **m** (ich) = **evdeydim**." },
    { id: "tr-a2-11.2", t: "gap", q: "Tatil çok güzeldi ama otel biraz ___ . (pahalı – Der Urlaub war sehr schön, aber das Hotel war etwas teuer.)", a: ["pahalıydı"],
      wrong: { "pahalıdı": "*pahalı* endet auf einen Vokal → Puffer-**y**: pahalı**y**dı.", "pahalıydi": "Letzter Vokal **ı** → -ydı ohne Punkt.", "pahalı": "Ohne Endung wäre es Präsens („ist teuer“). Für „war“ → **pahalıydı**.", "pahalıdır": "*-dır* ist Präsens (förmlich „ist“). Für „war“ → **pahalıydı**." },
      e: "pahalı + **y** + **dı** = **pahalıydı**. Bei „er/sie/es“ keine Personalendung." },
    { id: "tr-a2-11.3", t: "gap", q: "O zaman ben küçük bir ___ . (çocuk – Damals war ich ein kleines Kind.)", a: ["çocuktum"],
      wrong: { "çocukdum": "*çocuk* endet auf **k** (FıSTıKÇı ŞaHaP) → d wird **t**: çocuk**t**um.", "çocuğum": "k → ğ passiert nur vor einem **Vokal**. Hier folgt ein Konsonant – und *çocuğum* hieße „mein Kind“.", "çocuğdum": "Keine Erweichung: Es folgt kein Vokal. Und nach k wird d → t: **çocuktum**.", "çocuktım": "Letzter Vokal **u** → -t**u**m.", "çocuğuydum": "Das hieße „ich war sein Kind“. Gemeint ist: **çocuktum**." },
      e: "çocuk + **tu** (k → t, Vokal u) + **m** = **çocuktum**. Typisch deutscher Fehler: hier die Erweichung k → ğ anwenden – die gibt es nur vor Vokal." },
    { id: "tr-a2-11.4", t: "gap", q: "Otelde havuz ___ ama deniz çok yakındı. (Im Hotel gab es keinen Pool, aber das Meer war ganz nah.)", a: ["yoktu"],
      wrong: { "yokdu": "*yok* endet auf **k** → d wird **t**: yok**t**u.", "değildi": "*değil* verneint Nomen („war nicht“). „es gab keinen …“ → **yoktu**.", "yok": "Ohne -tu wäre es Gegenwart („gibt es nicht“). Der Urlaub ist vorbei → **yoktu**.", "yoktı": "Letzter Vokal **o** → -t**u**.", "yoğdu": "Keine Erweichung vor Konsonant. Und nach k → t: **yoktu**." },
      e: "yok + **tu** = **yoktu** (es gab keinen …, war nicht da). Das Gegenstück ist **vardı** – auch in *yakındı* (war nah) steckt -(y)DI." },
    { id: "tr-a2-11.5", t: "gap", q: "Dün ___ ? (hasta + Frage – Warst du gestern krank?)", a: ["hasta mıydın"],
      wrong: { "hastaydın mı": "So fragt man bei Verben (geldin mi). Bei „war“ mit Nomen/Adjektiv steht mI standardsprachlich **vor** der Endung: hasta **mıydın**. Umgangssprachlich hört man „hastaydın mı“ manchmal – schreib es aber so nicht.", "hasta mıdın": "Nach *mı* (Vokal) braucht es den Puffer-**y**: mı**y**dın.", "hastamıydın": "mI wird **getrennt** geschrieben: hasta mıydın.", "hasta mısın": "Das ist Präsens („Bist du krank?“). Für gestern → **mıydın**.", "hasta miydin": "Letzter Vokal von hast**a** ist a → **mıydın** ohne Punkte." },
      e: "hasta + **mı** (getrennt) + **y** + **dı** + **n** (du) = **hasta mıydın**. Die Person hängt am Ende von mI." },
    { id: "tr-a2-11.6", t: "mc", q: "„Ich hatte ein Auto.“", o: ["Bir arabam vardı.", "Bir araba vardım.", "Bir arabaydım.", "Bir arabam vardım."], a: 0,
      why: { 1: "*vardım* heißt „ich bin angekommen“ (varmak)! Die Person gehört ans Nomen: araba**m** vardı.", 2: "*arabaydım* hieße „ich war ein Auto“.", 3: "Doppelt: Die Person steht schon in araba**m**. *vardı* bleibt ohne Endung." },
      e: "„haben“ = Possessivsuffix + var; „hatte“ = Possessivsuffix + **vardı**: *Bir araba**m** vardı.*" },
    { id: "tr-a2-11.7", t: "mc", q: "„Warst du zu Hause?“", o: ["Evde miydin?", "Evdeydin mi?", "Evde mıydın?", "Evdemiydin?"], a: 0,
      why: { 1: "So fragt man bei **Verben** (geldin mi). Bei „war“ steht mI standardsprachlich **vor** der Endung: evde **miydin**. Im lockeren Gespräch hört man „evdeydin mi“ manchmal, korrekt geschrieben ist es nicht.", 2: "Letzter Vokal von ev**de** ist e → **mi** mit Punkt.", 3: "mI wird immer **getrennt** geschrieben." },
      e: "evde + **mi** + y + di + **n** → **Evde miydin?**" },
    { id: "tr-a2-11.8", t: "mc", q: "„Ich war fleißig.“", o: ["Çalışkandım.", "Çalıştım.", "Çalışkanım."], a: 0,
      why: { 1: "*Çalıştım* = „ich habe gearbeitet“ – Verb *çalışmak* + -DI.", 2: "*Çalışkanım* = „ich bin fleißig“ (Präsens)." },
      e: "Adjektiv *çalışkan* + **dı** + **m** = **çalışkandım**. -(y)DI hängt an Nomen und Adjektive, -DI an Verben." },
    { id: "tr-a2-11.9", t: "mc", q: "„Odada balkon vardı.“ bedeutet …", o: ["Das Zimmer hatte einen Balkon.", "Im Zimmer ist ein Balkon.", "Das Zimmer hatte keinen Balkon.", "Ich bin im Zimmer mit Balkon angekommen."], a: 0,
      why: { 1: "*vardı* ist Vergangenheit (-dı): „es gab / war vorhanden“.", 2: "„keinen“ wäre *yoktu*.", 3: "Hier ist *var* (vorhanden) gemeint, nicht *varmak* (ankommen) – und der Satz nennt keine Person." },
      e: "**vardı** = es gab, war vorhanden. Wörtlich: „Im Zimmer war ein Balkon vorhanden.“" },
    { id: "tr-a2-11.10", t: "order", q: "Bilde den Satz: „Letztes Jahr hatten wir keine Zeit.“", w: ["yoktu", "Geçen", "zamanımız", "yıl"], a: ["Geçen yıl zamanımız yoktu"],
      e: "Zeit – Nomen mit Possessiv (zaman**ımız** = unsere Zeit) – **yoktu** am Ende." },
    { id: "tr-a2-11.11", t: "order", q: "Bilde die Frage: „Wo warst du gestern Abend um neun Uhr?“", w: ["neredeydin", "saat", "dokuzda", "Dün", "akşam"], a: ["Dün akşam saat dokuzda neredeydin"],
      e: "Zeitangaben vom Großen zum Kleinen (gestern → Abend → neun Uhr), das Fragewort mit -(y)DI am Ende: nerede + y + di + n = **neredeydin**." },
    { id: "tr-a2-11.12", t: "order", q: "Bilde die Frage: „War das Frühstück im Preis inbegriffen?“", w: ["fiyata", "Kahvaltı", "dâhil", "miydi"], a: ["Kahvaltı fiyata dâhil miydi"],
      e: "*dâhil* (inbegriffen) + **miydi** (war … ?). TDK schreibt *dâhil* mit Zirkumflex; im Alltag sieht man oft *dahil*." },
    { id: "tr-a2-11.13", t: "match", q: "Ordne zu:", p: [["evdeydim", "ich war zu Hause"], ["evde değildim", "ich war nicht zu Hause"], ["evde miydin", "warst du zu Hause?"], ["evdeydik", "wir waren zu Hause"], ["evdeydiniz", "ihr wart / Sie waren zu Hause"]],
      e: "Verneint mit **değil** + -(y)DI, gefragt mit **mi** + -(y)DI + Person." },
    { id: "tr-a2-11.14", t: "match", q: "Ordne zu – „hatte“:", p: [["Param vardı.", "Ich hatte Geld."], ["Paran var mıydı?", "Hattest du Geld?"], ["Paramız yoktu.", "Wir hatten kein Geld."], ["Parası vardı.", "Er/Sie hatte Geld."]],
      e: "Die Person steckt im Possessivsuffix (para**m**, para**n**, para**mız**, para**sı**); *vardı/yoktu* ändern sich nie." },
    { id: "tr-a2-11.15", t: "listen", say: "Otel denize yakındı ama odamız çok küçüktü ve klima yoktu.", q: "Hör zu: Was war das Problem?",
      o: ["Das Zimmer war klein und hatte keine Klimaanlage.", "Das Hotel war weit vom Meer entfernt.", "Das Zimmer war groß, aber laut.", "Es gab keinen Strand."], a: 0,
      why: { 1: "*denize yakındı* = es war **nah** am Meer.", 2: "*küçüktü* = war klein; von Lärm ist keine Rede.", 3: "Vom Strand sagt der Satz nichts; *yoktu* bezieht sich auf die *klima*." },
      e: "„Das Hotel war nah am Meer, aber unser Zimmer war sehr klein und es gab keine Klimaanlage.“ yakın**dı**, küçük**tü** (k → t), yok**tu**." },
    { id: "tr-a2-11.16", t: "dictation", say: "Dün akşam neredeydin? Seni aradım ama evde yoktun.", a: ["Dün akşam neredeydin? Seni aradım ama evde yoktun."],
      wrong: { "Dün akşam neredeydin? Seni aradım ama evde yokdun.": "*yok* endet auf **k** → d wird **t**: yok**t**un.", "Dün akşam nerdeydin? Seni aradım ama evde yoktun.": "Gesprochen hört man oft „nerdeydin“, geschrieben wird **neredeydin** (nerede + y + di + n).", "Dün akşam nerede ydin? Seni aradım ama evde yoktun.": "Die Endung wird angehängt: **neredeydin** in einem Wort.", "Dün akşam neredeydin? Seni aradım ama evde yoğdun.": "Keine Erweichung vor Konsonant: **yoktun**." },
      e: "„Wo warst du gestern Abend? Ich habe dich angerufen, aber du warst nicht zu Hause.“ *evde yoktun* (du warst nicht da) ist im Alltag sehr häufig; *evde değildin* ist ebenfalls richtig." },
    { id: "tr-a2-11.17", t: "speak", say: "Dün çok yorgundum, erken yattım.",
      e: "„Gestern war ich sehr müde und bin früh schlafen gegangen.“ Beide Vergangenheiten nebeneinander: *yorgun-dum* (war – am Adjektiv) und *yat-tım* (ging schlafen – am Verb). Die Endung -dum ist unbetont: *yor-GUN-dum*. Typischer Fehler: die Endung stark betonen („yorgun-DUM“)." },
    { id: "tr-a2-11.18", t: "speak", say: "Eskiden bahçeli bir evimiz vardı.",
      e: "„Früher hatten wir ein Haus mit Garten.“ „hatten wir“ = ev**imiz** + **vardı**. *bahçeli* ≈ „bach-tsche-li“ (h hörbar, ç = tsch). *vardı* mit Zungen-r und dumpfem ı: „war-dı“. Typischer Fehler: „wardi“ mit hellem i." }
  ]
});

K.add('tr-a2-12', {
  lesson: [
    { p: "Mit diesen Mustern erzählst du Abläufe („bevor wir losgefahren sind …“, „nachdem wir angekommen waren …“) und Dauer („seit drei Jahren“). Türkisch braucht dafür keine Nebensätze mit „bevor“ oder „nachdem“, sondern **Endungen am Verb** – und das Hauptverb steht wie immer **am Satzende**." },
    { h: "Vor und nach etwas: -DAn önce / -DAn sonra" },
    { table: { head: ["Türkisch", "Deutsch"], rows: [
      ["yemek**ten** önce", "vor dem Essen"],
      ["iş**ten** sonra", "nach der Arbeit"],
      ["tatil**den** önce", "vor dem Urlaub"],
      ["öğle**den** sonra", "am Nachmittag (wörtlich: nach dem Mittag)"]
    ] } },
    { p: "**önce** (vor) und **sonra** (nach) stehen **hinter** dem Wort und verlangen den **Ablativ** (-DAn, der „woher“-Fall)." },
    { h: "Bevor / nachdem: Endungen am Verb" },
    { table: { head: ["Bedeutung", "Bildung", "Beispiel"], rows: [
      ["**bevor** …", "Verbstamm + **-mAdAn önce**", "Yola çık**madan önce** kahve içtik. (Bevor wir losgefahren sind, haben wir Kaffee getrunken.)"],
      ["**nachdem** …", "Verbstamm + **-DIktAn sonra**", "Otele var**dıktan sonra** denize girdik. (Nachdem wir im Hotel angekommen waren, gingen wir im Meer schwimmen.)"]
    ] } },
    { table: { head: ["Verb", "bevor …", "nachdem …"], rows: [
      ["gelmek", "gel**meden** önce", "gel**dikten** sonra"],
      ["yapmak", "yap**madan** önce", "yap**tıktan** sonra"],
      ["okumak", "oku**madan** önce", "oku**duktan** sonra"],
      ["görmek", "gör**meden** önce", "gör**dükten** sonra"],
      ["gitmek", "git**meden** önce", "git**tikten** sonra"]
    ] } },
    { tip: "-DIktAn hat zweimal Vokalharmonie (erst ı/i/u/ü, dann a/e) und den d/t-Wechsel wie -DI: *yap-**tık-tan***, *gel-**dik-ten***, *gör-**dük-ten***." },
    { warn: "In *-mAdAn önce* steckt die Silbe -mA-, die sonst verneint – hier ist sie **nicht** negativ! *gitmeden önce* = „bevor ich gehe / du gehst / …“. Häufige Fehler: *„gittikten önce“* oder *„gitmekten önce“*. Merke: **-mAdAn → önce**, **-DIktAn → sonra**." },
    { p: "-mAdAn und -DIktAn bekommen **keine Personalendung** und **keine Zeit**. Beides zeigt nur das Hauptverb am Ende: *İşe başla**madan önce** kahvaltı yap**ıyorum**.* (Bevor ich mit der Arbeit anfange, frühstücke ich.) Handelt jemand anderes, steht er davor: *Misafirler gel**meden önce** evi temizle**dik**.* (Bevor die Gäste kamen, haben wir das Haus geputzt.)" },
    { tip: "Im Deutschen hängt die Zeit nach „nachdem“ vom Hauptsatz ab: *nachdem wir angekommen **waren**, schliefen wir* – *nachdem wir angekommen **sind**, schlafen wir*. Türkisch kennt diese Zeitenfolge nicht: *vardıktan sonra* bleibt gleich, egal ob danach *uyuduk* (wir schliefen) oder *uyuyoruz* (wir schlafen) kommt." },
    { h: "Vor drei Tagen / drei Tage später" },
    { p: "Bei einer **Zeitspanne** steht **kein** Ablativ: *üç gün önce* (vor drei Tagen), *iki hafta sonra* (zwei Wochen später), *bir saat sonra* (eine Stunde später). *sonra* steht auch für „**in** …“ von heute aus: *İki hafta sonra tatile gidiyoruz.* (In zwei Wochen fahren wir in den Urlaub.) – Deutsch unterscheidet „in zwei Wochen“ und „zwei Wochen später“, Türkisch nicht." },
    { warn: "Das deutsche „vor“ hat zwei Bedeutungen: *vor dem Essen* → **yemekten önce** (mit Ablativ), aber *vor drei Jahren* → **üç yıl önce** (ohne Endung). „üç yıldan önce“ bedeutet etwas anderes („bevor drei Jahre um sind“)." },
    { h: "seit: -DAn beri und -DIr" },
    { table: { head: ["Frage", "Muster", "Beispiele"], rows: [
      ["Seit **wann**? (Zeitpunkt) – *Ne zamandan beri?*", "Ablativ + **beri**", "2020’**den beri**, sabah**tan beri**, geçen yaz**dan beri**"],
      ["**Wie lange** schon? (Dauer) – *Ne zamandır? Kaç yıldır?*", "Dauer + **-DIr**", "üç yıl**dır**, iki ay**dır**, beş gün**dür**, uzun zaman**dır**"]
    ] } },
    { p: "Wie im Deutschen steht danach das **Präsens** (-Iyor): *Üç yıldır İzmir’de yaşıyorum.* (Ich wohne seit drei Jahren in Izmir.) *Sabahtan beri yağmur yağıyor.* (Seit heute Morgen regnet es.)" },
    { warn: "*beri* allein reicht nicht – davor steht immer der **Ablativ**: *2019’dan beri*, nicht „2019 beri“. Und -DIr folgt Vokalharmonie und d/t-Wechsel: yıl**dır**, gün**dür**, hafta**dır** – *saat* ist eine Ausnahme mit hellem Vokal: saat**tir**. Nach Zahlen kein Plural: *üç yıldır*, nicht „üç yıllardır“." },
    { tip: "Bei einer Dauer hört man auch *üç yıldan beri*. Das ist ebenfalls richtig; *üç yıldır* ist kürzer und häufiger." },
    { h: "Datum" },
    { table: { head: ["Monat", "", "Monat", ""], rows: [
      ["ocak", "Januar", "temmuz", "Juli"],
      ["şubat", "Februar", "ağustos", "August"],
      ["mart", "März", "eylül", "September"],
      ["nisan", "April", "ekim", "Oktober"],
      ["mayıs", "Mai", "kasım", "November"],
      ["haziran", "Juni", "aralık", "Dezember"]
    ] } },
    { p: "Das Datum sagt man mit **Grundzahlen**, nicht mit Ordnungszahlen wie im Deutschen („der Fünfzehnte“, „am 15. Mai“): *15 Mayıs* = „on beş mayıs“ – ohne Punkt hinter der 15. Jahreszahlen liest man als ganze Zahl: 1998 = *bin dokuz yüz doksan sekiz*, 2026 = *iki bin yirmi altı*." },
    { table: { head: ["Türkisch", "Deutsch"], rows: [
      ["Bugün ayın kaçı? – Ayın on sekizi.", "Der Wievielte ist heute? – Der Achtzehnte."],
      ["Ayın yirmisinde dönüyoruz.", "Am Zwanzigsten fahren wir zurück."],
      ["Tatil 1 Temmuz’da başlıyor.", "Der Urlaub beginnt am 1. Juli."],
      ["Ne zaman doğdun? – 3 Mart 1995’te.", "Wann bist du geboren? – Am 3. März 1995."]
    ] } },
    { tip: "Rechtschreibung nach TDK: In einem **bestimmten Datum** schreibt man den Monat groß und trennt die Endung mit **Apostroph** ab: *25 Haziran’da*, *1998’de*. Ohne Datum klein und ohne Apostroph: *haziranda* (im Juni)." },
    { warn: "Die Endung an einer Ziffer richtet sich nach der **gesprochenen** Zahl: 2019’**dan** (dokuz → a), 2020’**den** (yirmi → e), 3’**te** (üç → e, ç → t). Typischer Fehler: „2019’den“, weil man nur auf die Ziffer schaut." }
  ],
  exercises: [
    { id: "tr-a2-12.1", t: "gap", q: "Yola ___ önce benzin aldık. (çıkmak – Bevor wir losgefahren sind, haben wir getankt.)", a: ["çıkmadan"],
      wrong: { "çıkmeden": "Letzter Vokal von *çık-* ist **ı** → kleine Harmonie: -m**a**d**a**n.", "çıktıktan": "-DIktAn gehört zu **sonra** (nachdem). Vor *önce* steht **-mAdAn**: çıkmadan.", "çıkmaktan": "Vor *önce* steht bei Verben **-mAdAn**: çıkmadan önce.", "çıkmadık": "*çıkmadık* = wir sind nicht losgefahren. „bevor“ → **çıkmadan** önce.", "çıkmatan": "Nach -ma- folgt ein Vokal → **d**: çıkma**d**an." },
      e: "çık + **ma** + **dan** + önce = „bevor (wir) losfahren“. Keine Verneinung, keine Person – die steckt in *aldık*. *yola çıkmak* = losfahren, *benzin almak* = tanken." },
    { id: "tr-a2-12.2", t: "gap", q: "Kahvaltı ___ sonra plaja gittik. (yapmak – Nachdem wir gefrühstückt hatten, gingen wir zum Strand.)", a: ["yaptıktan"],
      wrong: { "yapdıktan": "*yap-* endet auf **p** → d wird **t**: yap**t**ıktan.", "yaptıkten": "Letzter Vokal ı → -t**a**n: yaptıkt**a**n.", "yaptıkdan": "Nach k wird -dan zu **-tan**: yaptık**t**an.", "yapmadan": "-mAdAn gehört zu **önce** (bevor). „nachdem“ → **-DIktAn sonra**.", "yaptık": "*yaptık* = wir haben gemacht. Vor *sonra* braucht es **-DIktAn**: yaptıktan." },
      e: "yap + **tık** (p → t) + **tan** (k → t) + sonra = **yaptıktan sonra**. Kein Plusquamperfekt wie im Deutschen nötig." },
    { id: "tr-a2-12.3", t: "gap", q: "Üç ___ Türkiye’de yaşıyorum. (yıl – Ich lebe seit drei Jahren in der Türkei.)", a: ["yıldır", "yıldan beri"],
      wrong: { "yıl önce": "*üç yıl önce* = „vor drei Jahren“ – ein Zeitpunkt. „seit“ → **yıldır**.", "yıldan": "Mit -dan braucht es noch **beri**: yıldan beri – kürzer: **yıldır**.", "yıltır": "*l* ist stimmhaft → d bleibt: yıl**d**ır.", "yıllardır": "Nach einer Zahl steht kein Plural: üç **yıldır**. (*yıllardır* allein heißt „seit Jahren“.)", "yıl beri": "*beri* braucht den Ablativ: yıl**dan** beri – oder einfach **yıldır**." },
      e: "Dauer + **-DIr** = seit: **üç yıldır**. Auch *üç yıldan beri* ist richtig. Danach Präsens wie im Deutschen: *yaşıyorum*." },
    { id: "tr-a2-12.4", t: "gap", q: "___ beri yağmur yağıyor. (sabah – Seit heute Morgen regnet es.)", a: ["Sabahtan"],
      wrong: { "Sabah": "*beri* braucht davor den **Ablativ**: sabah**tan** beri.", "Sabahdan": "*sabah* endet auf **h** (FıSTıKÇı ŞaHaP) → **-tan**.", "Sabahtır": "-DIr steht bei einer **Dauer** (üç saattir). Ein Zeitpunkt wie „der Morgen“ braucht **-DAn beri**.", "Sabahten": "Letzter Vokal **a** → -t**a**n." },
      e: "Zeitpunkt + Ablativ + **beri**: **sabahtan beri** (h → t)." },
    { id: "tr-a2-12.5", t: "gap", q: "___ beri Antalya’da çalışıyorum. (2019 – Seit 2019 arbeite ich in Antalya. Schreib die Zahl als Ziffer mit Endung.)", a: ["2019'dan", "iki bin on dokuzdan"],
      wrong: { "2019'den": "Die Endung richtet sich nach der **gesprochenen** Zahl: on dok**u**z → -d**a**n: 2019’dan.", "2019dan": "Endungen an Ziffern trennt man mit **Apostroph** ab: 2019’dan.", "2019'tan": "*dokuz* endet auf **z** (stimmhaft) → d bleibt: 2019’**d**an.", "2019": "*beri* braucht den Ablativ: 2019’**dan** beri.", "2019'da": "-da heißt „in/im“. Für „seit“ braucht *beri* den Ablativ: 2019’**dan**." },
      e: "Gesprochen „iki bin on dokuz**dan**“ → geschrieben **2019’dan** (TDK: Endung an Ziffern mit Apostroph)." },
    { id: "tr-a2-12.6", t: "mc", q: "„vor drei Tagen“", o: ["üç gün önce", "üç günden önce", "üç gündür", "önce üç gün"], a: 0,
      why: { 1: "Bei einer Zeitspanne („vor drei Tagen“) **kein** Ablativ. Ablativ + önce nur bei Ereignissen: *yemekten önce*.", 2: "*üç gündür* = „seit drei Tagen“.", 3: "*önce* steht **hinter** der Zeitangabe – Türkisch hat Postpositionen." },
      e: "Zeitspanne + **önce** = vor …: **üç gün önce**." },
    { id: "tr-a2-12.7", t: "mc", q: "„Ich warte seit zwei Stunden.“", o: ["İki saattir bekliyorum.", "İki saattır bekliyorum.", "İki saat önce bekliyorum.", "İki saattir bekledim."], a: 0,
      why: { 1: "*saat* ist eine Ausnahme der Vokalharmonie (wie *saatler*) → **saattir**.", 2: "*iki saat önce* = „vor zwei Stunden“ – das passt nicht zu „seit“.", 3: "Das Warten dauert noch an → wie im Deutschen **Präsens**: bekli**yorum**." },
      e: "Dauer + **-DIr** + Präsens: **İki saattir bekliyorum.**" },
    { id: "tr-a2-12.8", t: "mc", q: "„Bevor du gehst, ruf mich an.“", o: ["Gitmeden önce beni ara.", "Gitmedin önce beni ara.", "Gittikten önce beni ara.", "Gitmeden sonra beni ara."], a: 0,
      why: { 1: "-mAdAn bekommt **keine** Personalendung; *gitmedin* hieße „du bist nicht gegangen“.", 2: "-DIktAn passt nur zu **sonra** (nachdem).", 3: "-mAdAn passt nur zu **önce**. „nachdem du gegangen bist“ wäre *gittikten sonra*." },
      e: "**gitmeden önce** = bevor (du) gehst. Die Person steckt im Hauptverb: *ara* (ruf an)." },
    { id: "tr-a2-12.9", t: "mc", q: "Wie schreibt man „am 15. Mai“ (bestimmtes Datum)?", o: ["15 Mayıs’ta", "15. Mayıs’ta", "15 Mayısta", "15’inci Mayıs’ta"], a: 0,
      why: { 1: "Im türkischen Datum steht hinter der Tageszahl **kein Punkt** – man liest eine Grundzahl (on beş).", 2: "Bei einem bestimmten Datum trennt man die Endung am Monat mit **Apostroph** ab (TDK): Mayıs’ta.", 3: "Daten sagt man mit **Grundzahlen**, nicht mit Ordnungszahlen wie im Deutschen." },
      e: "**15 Mayıs’ta** (gesprochen „on beş mayısta“). *Mayıs* endet auf s → -**t**a." },
    { id: "tr-a2-12.10", t: "order", q: "Bilde den Satz: „Nachdem wir im Hotel angekommen waren, schliefen wir.“", w: ["sonra", "Otele", "vardıktan", "uyuduk"], a: ["Otele vardıktan sonra uyuduk"],
      e: "Erst der „nachdem“-Teil (**vardıktan sonra**), dann das Hauptverb mit Zeit und Person am Ende (**uyuduk**). *varmak* (ankommen) braucht den Dativ: otel**e**." },
    { id: "tr-a2-12.11", t: "order", q: "Bilde den Satz: „Bevor ich zur Arbeit gehe, trinke ich einen Tee.“", w: ["İşe", "önce", "bir", "gitmeden", "çay", "içiyorum"], a: ["İşe gitmeden önce bir çay içiyorum"],
      e: "„bevor“-Teil zuerst (*işe gitmeden önce*), Hauptverb am Ende. Anders als im Deutschen gibt es keinen Nebensatz mit Komma und Verbstellungswechsel." },
    { id: "tr-a2-12.12", t: "order", q: "Bilde die Frage: „Seit wann lebst du in Deutschland?“", w: ["beri", "Almanya’da", "zamandan", "Ne", "yaşıyorsun"], a: ["Ne zamandan beri Almanya’da yaşıyorsun", "Almanya’da ne zamandan beri yaşıyorsun"],
      e: "*ne zaman* + Ablativ + **beri** = seit wann. Das Verb steht am Ende, im Präsens wie im Deutschen." },
    { id: "tr-a2-12.13", t: "match", q: "Ordne zu:", p: [["yemekten önce", "vor dem Essen"], ["yedikten sonra", "nachdem man gegessen hat"], ["yemeden önce", "bevor man isst"], ["iki gün önce", "vor zwei Tagen"], ["iki gündür", "seit zwei Tagen"]],
      e: "Nomen + -DAn önce/sonra; Verb + -mAdAn önce / -DIktAn sonra; Zeitspanne + önce (ohne Endung); Dauer + -DIr = seit." },
    { id: "tr-a2-12.14", t: "match", q: "Ordne die Monate zu:", p: [["ocak", "Januar"], ["nisan", "April"], ["ağustos", "August"], ["ekim", "Oktober"], ["aralık", "Dezember"]],
      e: "Ohne bestimmtes Datum schreibt man Monate klein (*ağustosta*), im Datum groß (*5 Ağustos’ta*)." },
    { id: "tr-a2-12.15", t: "listen", say: "Bin dokuz yüz doksan sekizde doğdum.", q: "Hör zu: In welchem Jahr ist die Person geboren?",
      o: ["1998", "1989", "1898", "2008"], a: 0,
      why: { 1: "1989 wäre *bin dokuz yüz seksen dokuz*. Gehört hast du *doksan sekiz* = 98.", 2: "1898 wäre *bin sekiz yüz doksan sekiz* – gehört hast du *dokuz yüz* (900).", 3: "2008 wäre *iki bin sekiz*." },
      e: "*bin* (1000) + *dokuz yüz* (900) + *doksan sekiz* (98) = **1998**. Jahreszahlen liest man als ganze Zahl („tausendneunhundertachtundneunzig“), nicht wie im Deutschen in Hunderten („neunzehnhundertachtundneunzig“)." },
    { id: "tr-a2-12.16", t: "dictation", say: "Ayın on beşinde tatile çıkıyoruz.", a: ["Ayın on beşinde tatile çıkıyoruz.", "Ayın 15'inde tatile çıkıyoruz."],
      wrong: { "Ayın onbeşinde tatile çıkıyoruz.": "Zahlen aus mehreren Wörtern schreibt man **getrennt**: on beş.", "Ayın 15inde tatile çıkıyoruz.": "Endungen an Ziffern trennt man mit **Apostroph** ab: 15’inde.", "Ay on beşinde tatile çıkıyoruz.": "„am Fünfzehnten (des Monats)“ = **ayın** on beşinde – *ay* steht im Genitiv." },
      e: "„Am Fünfzehnten fahren wir in den Urlaub.“ ayın (des Monats) + on beş**i** (sein Fünfzehnter) + **nde** (am). Mit Ziffer: *ayın 15’inde*." },
    { id: "tr-a2-12.17", t: "speak", say: "Üç yıldır Türkçe öğreniyorum.", alt: ["3 yıldır Türkçe öğreniyorum"],
      e: "„Ich lerne seit drei Jahren Türkisch.“ *yıldır* = seit (Dauer), danach Präsens wie im Deutschen. Beide ı in *yıldır* sind dumpf: „jıl-dır“. Typischer Fehler: „üç yıl önce“ sagen – das hieße „vor drei Jahren“." },
    { id: "tr-a2-12.18", t: "speak", say: "Yatmadan önce dişlerimi fırçalıyorum.",
      e: "„Bevor ich schlafen gehe, putze ich mir die Zähne.“ *önce* ≈ „ön-dsche“ (c = dsch), *dişlerimi* ≈ „disch-le-ri-mi“ (ş = sch), *fırçalıyorum* ≈ „fır-tscha-lı-jo-rum“ mit dumpfem ı. Typischer Fehler: *önce* mit „ts“ wie im deutschen *Konzert* sprechen." }
  ]
});

})(window.KOPRU);
