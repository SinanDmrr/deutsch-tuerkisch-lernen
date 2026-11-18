/* Deutsch A1 – für Türkischsprechende (Erklärungen auf Türkisch)
 * Übungstypen:
 *  mc    { q, o:[Optionen], a:Index, why:{Index:'warum falsch'}, e:'Erklärung' }
 *  gap   { q:'… ___ …', a:[richtige Antworten], wrong:{'falsche Antwort':'warum'}, cs:true (Groß/klein beachten), e }
 *  order { q, w:[Wörter], a:[richtige Sätze], e }
 *  match { q, p:[[links, rechts], …], e }
 *  speak { say:'Satz zum Nachsprechen (3–8 Wörter, keine Ziffern/Eigennamen)', alt:[optionale Schreibweisen], e:'Aussprache-Tipp' }
 * Jede Aufgabe hat eine feste ID (id: "thema.nummer"). Daran hängt der Lernfortschritt der Nutzer.
 * REGELN FÜR UPDATES (damit niemand Fortschritt verliert):
 *  - Eine vergebene ID NIE ändern und NIE für eine andere Aufgabe wiederverwenden.
 *  - Neue Aufgaben bekommen eine neue, noch nie benutzte ID (z. B. die nächste Nummer).
 *  - Reihenfolge ändern, Text verbessern, Aufgaben in ein anderes Thema verschieben: erlaubt, Fortschritt bleibt.
 *  - Aufgabe löschen: erlaubt; der alte Eintrag wird einfach nicht mehr gezählt.
 */
(function (K) {

K.add('de-a1-01', {
  lesson: [
    { p: "Almanca, Latin alfabesini kullanır: 26 harf + **ä, ö, ü** ve **ß**. Türkçeden en büyük farkı, bazı harf gruplarının birlikte farklı okunmasıdır. Almancada **ç, ş, ğ, ı** harfleri yoktur: ç ve ş sesleri harf gruplarıyla yazılır (**tsch**, **sch**), ğ sesi ise Almancada hiç yoktur." },
    { table: { head: ["Yazılış", "Okunuş (Türkçe)", "Örnek"], rows: [
      ["ei / ai", "ay", "mein (mayn), Mai"],
      ["ie", "uzun i", "Liebe (liibe)"],
      ["eu / äu", "oy", "heute (hoyte), Häuser"],
      ["sch", "ş", "Schule (şule)"],
      ["tsch", "ç", "Deutsch (doyç)"],
      ["ch (e, i, ä, ö, ü, ei, eu, l, n, r’den sonra)", "yumuşak h – dil damağa yaklaşır (“ç” değil!)", "ich, Milch, Küche"],
      ["ch (a, o, u, au’dan sonra)", "gırtlaktan gelen hırıltılı h", "Buch, acht, auch"],
      ["z", "ts", "Zeit (tsayt)"],
      ["v", "genelde f", "Vater (faater)"],
      ["w", "v", "Wasser (vasser)"],
      ["j", "y", "ja (ya)"],
      ["s + sesli harf", "z", "Sonne (zonne)"],
      ["sp / st (kelime başında)", "şp / şt", "Sport (şport), Straße (ştrase)"],
      ["ß", "ss", "Straße, heißen"],
      ["ä", "e (açık)", "Käse (keze)"],
      ["ö / ü", "Türkçedeki gibi", "schön, müde"]
    ] } },
    { tip: "**Önemli:** Almancada bütün isimler (Nomen) büyük harfle yazılır: *der Tisch, die Stadt, das Haus*." },
    { warn: "“h” bir sesli harften sonra gelirse okunmaz, sadece sesliyi uzatır: *Uhr* (uur), *gehen* (geen). **ei = ay** ve **ie = ii** – sıraya dikkat!" },
    { ex: [["Ich heiße Mehmet.", "Benim adım Mehmet."], ["Ich spreche ein bisschen Deutsch.", "Biraz Almanca konuşuyorum."], ["Die Straße ist schön.", "Sokak güzel."]] }
  ],
  exercises: [
    { id: "de-a1-01.1", t: "mc", q: "“Wein” (şarap) nasıl okunur?", o: ["veyn", "vayn", "vin", "feyn"], a: 1,
      why: { 0: "“ei” Almancada “ey” değil, **“ay”** okunur.", 2: "Uzun “i” sesi “ie” ile yazılır (Wien = viin). Burada “ei” var.", 3: "“W” Almancada “v” okunur, “f” değil. Tersine, “f” sesi bazen “v” harfiyle yazılır (Vater) – ama “w” asla f okunmaz." },
      e: "**ei = ay**, **w = v** → “vayn”." },
    { id: "de-a1-01.2", t: "mc", q: "“Schule” (okul) kelimesindeki “sch” hangi sese denk gelir?", o: ["s", "ş", "ç", "sk"], a: 1,
      why: { 0: "“sch” üç harf birlikte tek bir ses verir: ş.", 2: "“ç” sesi Almancada “tsch” yazılır (Deutsch).", 3: "Harf harf okunmaz; “sch” birlikte “ş” olur." },
      e: "**sch = ş** → “şule”." },
    { id: "de-a1-01.3", t: "mc", q: "“Zeit” (zaman) kelimesindeki “z” nasıl okunur?", o: ["z", "s", "ts", "ç"], a: 2,
      why: { 0: "Türkçedeki “z” sesi Almancada genelde sesli harften önceki “s” ile yazılır (Sonne).", 1: "“s” sesi “ß” veya “ss” ile yazılır.", 3: "“ç” sesi “tsch” ile yazılır." },
      e: "Almanca **z = ts** → “tsayt”." },
    { id: "de-a1-01.4", t: "mc", q: "“Vater” (baba) kelimesindeki “V” nasıl okunur?", o: ["v", "f", "w", "b"], a: 1,
      why: { 0: "Almanca kelimelerde “v” çoğunlukla **f** okunur. Türkçe “v” sesi Almancada “w” ile yazılır.", 2: "“w” bir harftir; Almancada zaten “v” okunur.", 3: "“b” ile ilgisi yok." },
      e: "Almanca kelimelerde **v = f**: Vater, viel, vier. (Yabancı kökenli kelimelerde istisna: Vase, Klavier → v.)" },
    { id: "de-a1-01.5", t: "mc", q: "“Liebe” (sevgi) kelimesindeki “ie” nasıl okunur?", o: ["i-e (ayrı ayrı)", "uzun i", "ay", "iy"], a: 1,
      why: { 0: "“ie” iki ses değil, tek bir uzun “i”dir.", 2: "“ay” sesi “ei” yazılır – sıraya dikkat!", 3: "Arada “y” sesi yoktur." },
      e: "**ie = uzun i** → “liibe”." },
    { id: "de-a1-01.6", t: "mc", q: "“heute” (bugün) nasıl okunur?", o: ["heute", "hoyte", "höte", "hayte"], a: 1,
      why: { 0: "“eu” harf harf okunmaz.", 2: "“ö” sesi “ö” ile yazılır; “eu” farklıdır.", 3: "“ay” sesi “ei” ile yazılır." },
      e: "**eu = oy** → “hoyte”. Aynı ses **äu** ile de yazılır: Häuser (hoyzer)." },
    { id: "de-a1-01.7", t: "mc", q: "Almancada hangi kelimeler HER ZAMAN büyük harfle başlar?", o: ["Sadece özel isimler (Ali, Berlin)", "Bütün isimler (Nomen)", "Bütün fiiller", "Hiçbiri, Türkçedeki gibi"], a: 1,
      why: { 0: "Türkçede böyle; ama Almancada **tüm** isimler büyük yazılır: der Tisch, die Liebe.", 2: "Fiiller küçük yazılır: gehen, lernen (cümle başı hariç).", 3: "Türkçeden farklı olarak Almancada isimler büyük harfle yazılır." },
      e: "Almancada **her isim** büyük harfle başlar: *der Hund, die Zeit, das Wasser*." },
    { id: "de-a1-01.8", t: "mc", q: "“Sport” kelimesinin başındaki “sp” nasıl okunur?", o: ["sp", "şp", "zp", "s-p ayrı"], a: 1,
      why: { 0: "Kelime başında “sp” ve “st” → “şp” ve “şt” okunur.", 2: "“s” sadece tek başına bir sesli harften önce “z” olur (Sonne).", 3: "Ayrı okunmaz." },
      e: "Kelime/hece başında **sp = şp**, **st = şt**: Sport (şport), Straße (ştrase), verstehen (ferştehen)." },
    { id: "de-a1-01.9", t: "gap", q: "“ß” yerine (ör. İsviçre’de) hangi iki harf yazılır? Stra___e", a: ["ss"],
      wrong: { "s": "Tek “s” yetmez – “ß” keskin, uzun bir s sesidir ve **ss** ile değiştirilir.", "sz": "Adı “Eszett” olsa da yerine **ss** yazılır." },
      e: "**ß = ss** → Strasse. Almanya’da “ß” uzun sesliden ve ei/au gibi çift seslilerden sonra (Straße, heißen), “ss” ise kısa sesliden sonra kullanılır (Wasser)." },
    { id: "de-a1-01.10", t: "speak", say: "Zwei Zitronen und viel Zucker, bitte.",
      e: "Almanca **z** her zaman **ts** okunur: “tsvay, tsitroonen, tsukker”. Türkçedeki gibi yumuşak “z” dersen Almanlar başka bir kelime duyar. **viel** = “fiil”: v burada f, ie uzun i. Vurgu: Zi-**TRO**-nen." },
    { id: "de-a1-01.11", t: "speak", say: "Ich mache das noch heute.",
      e: "Bu cümlede iki farklı **ch** var: **ich**’te dil damağa yaklaşır, yumuşak bir “h” çıkar – “iç” ya da “ik” deme! **mache** ve **noch**’ta ise ch gırtlaktan, hırıltılı gelir (a/o’dan sonra). **heute** = “hoyte” (eu = oy)." }
  ]
});

K.add('de-a1-02', {
  lesson: [
    { p: "Almancada selamlaşma günün saatine göre değişir. Ayrıca **du** (sen – samimi) ve **Sie** (siz – resmi) ayrımı çok önemlidir. Tanımadığın yetişkinlere, iş yerinde ve resmî dairelerde **Sie** kullanılır." },
    { table: { head: ["Almanca", "Türkçe", "Ne zaman?"], rows: [
      ["Hallo!", "Merhaba!", "her zaman, samimi"],
      ["Guten Morgen!", "Günaydın!", "sabah (~11’e kadar)"],
      ["Guten Tag!", "İyi günler! / Merhaba", "gündüz, resmi"],
      ["Guten Abend!", "İyi akşamlar!", "akşam selamlaşırken"],
      ["Gute Nacht!", "İyi geceler!", "sadece yatmadan önce vedalaşırken"],
      ["Tschüss!", "Hoşça kal! / Görüşürüz!", "samimi vedalaşma"],
      ["Auf Wiedersehen!", "Hoşça kalın!", "resmi vedalaşma"]
    ] } },
    { h: "Kendini tanıtmak" },
    { table: { head: ["Soru (du)", "Soru (Sie)", "Cevap"], rows: [
      ["Wie heißt du?", "Wie heißen Sie?", "Ich heiße … / Mein Name ist …"],
      ["Woher kommst du?", "Woher kommen Sie?", "Ich komme aus der Türkei."],
      ["Wo wohnst du?", "Wo wohnen Sie?", "Ich wohne in Köln."],
      ["Wie geht’s dir?", "Wie geht es Ihnen?", "Gut, danke! Und dir? / Und Ihnen?"]
    ] } },
    { warn: "**Türkei** kelimesi artikelle kullanılır (*die Türkei*). Bu yüzden: *Ich komme aus **der** Türkei.* Ama: *Ich komme aus Deutschland.* (artikelsiz)" },
    { ex: [["Guten Tag! Ich heiße Ayşe Yılmaz.", "İyi günler! Benim adım Ayşe Yılmaz."], ["Ich komme aus der Türkei und wohne in Bonn.", "Türkiye’denim ve Bonn’da oturuyorum."], ["Freut mich!", "Memnun oldum!"]] },
    { vocab: [["danke", "teşekkürler"], ["bitte", "lütfen / rica ederim"], ["ja", "evet"], ["nein", "hayır"], ["Entschuldigung", "affedersiniz / pardon"], ["Freut mich!", "memnun oldum!"]] }
  ],
  exercises: [
    { id: "de-a1-02.1", t: "mc", q: "Sabah saat 8’de ofise giriyorsun. Ne dersin?", o: ["Gute Nacht!", "Guten Abend!", "Guten Morgen!", "Tschüss!"], a: 2,
      why: { 0: "“Gute Nacht” sadece yatmadan önce vedalaşırken söylenir.", 1: "“Guten Abend” akşam selamıdır.", 3: "“Tschüss” vedalaşmadır, selamlaşma değil." },
      e: "Sabah selamı: **Guten Morgen!** (Günaydın)." },
    { id: "de-a1-02.2", t: "mc", q: "Doktoruna adını resmi şekilde soruyorsun:", o: ["Wie heißt du?", "Wie heißen Sie?", "Wie heiße Sie?", "Wer bist du?"], a: 1,
      why: { 0: "Bu samimi “du” formu. Doktorla **Sie** kullanılır.", 2: "“Sie” ile fiil **heißen** olur (-en), “heiße” değil.", 3: "Bu hem samimi hem de kaba sayılabilir (“Sen kimsin?”)." },
      e: "Resmi: **Wie heißen Sie?** – “Sie” ile fiil mastar gibi çekilir: heißen." },
    { id: "de-a1-02.3", t: "gap", q: "Ich ___ aus der Türkei. (kommen)", a: ["komme"],
      wrong: { "kommen": "“kommen” mastar hâlidir; “ich” ile fiil **-e** alır: komme.", "kommst": "“kommst” “du” içindir. ich → **komme**.", "kommt": "“kommt” er/sie/es veya ihr içindir. ich → **komme**." },
      e: "**ich komme** – “ich” ile fiil kökü + **-e**." },
    { id: "de-a1-02.4", t: "gap", q: "Ich komme aus ___ Türkei.", a: ["der"],
      wrong: { "die": "“die Türkei” doğru, ama **aus** edatından sonra Dativ gelir → die → **der**.", "dem": "“dem” eril/nötr Dativ’dir. Türkei dişil → **der**." },
      e: "“aus” her zaman Dativ ister. Dişil “die Türkei” → Dativ’de **der**: *aus der Türkei*." },
    { id: "de-a1-02.5", t: "order", q: "Cümleyi kur: “Nasılsınız?” (resmi)", w: ["geht", "Ihnen", "Wie", "es"], a: ["Wie geht es Ihnen"],
      e: "Soru kelimesi (Wie) + fiil (geht) + es + Ihnen → **Wie geht es Ihnen?**" },
    { id: "de-a1-02.6", t: "match", q: "Eşleştir:", p: [["Hallo", "Merhaba"], ["Tschüss", "Hoşça kal"], ["Danke", "Teşekkürler"], ["Entschuldigung", "Affedersiniz"], ["Gute Nacht", "İyi geceler"]],
      e: "Bu kalıplar günlük hayatta en sık kullanılanlardır." },
    { id: "de-a1-02.7", t: "mc", q: "Akşam 19:00’da bir restorana giriyorsun. Ne dersin?", o: ["Guten Abend!", "Gute Nacht!", "Guten Morgen!", "Auf Wiedersehen!"], a: 0,
      why: { 1: "“Gute Nacht” selamlaşma değil, yatmadan önce vedalaşmadır. Türkçede “İyi geceler” bazen selam olarak da kullanılır – Almancada **asla**!", 2: "Sabah selamıdır.", 3: "Vedalaşmadır." },
      e: "Akşam selamlaşma: **Guten Abend!**" },
    { id: "de-a1-02.8", t: "gap", cs: true, q: "Mein ___ ist Ayşe. (adım)", a: ["Name"],
      wrong: { "name": "Neredeyse! Almancada isimler **büyük harfle** yazılır: **Name**.", "Namen": "“Namen” çoğul/çekimli hâl. Burada: **Name**." },
      e: "**Mein Name ist …** = Benim adım … (Name büyük harfle, çünkü isim.)" },
    { id: "de-a1-02.9", t: "speak", say: "Guten Abend, wie geht es Ihnen?",
      e: "**geht** ve **Ihnen**’deki h okunmaz, sadece sesliyi uzatır: “geet”, “iinen”. **Guten**’daki u uzundur: “guuten”. **wie** = “vii” (w = v, ie = uzun i). Kibar bir soru olduğu için sesin sonda hafifçe yükselebilir." },
    { id: "de-a1-02.10", t: "speak", say: "Freut mich, Sie kennenzulernen.",
      e: "**Freut** = “froyt” (eu = oy). **mich**’teki ch yumuşaktır, “miç” değil. **Sie** = “zii”: kelime başında sesliden önce s, z okunur. Uzun kelimeyi parçalara böl: ken-nen-**tsu**-ler-nen (z = ts); vurgu ilk hecede: **KEN**-nen-zu-ler-nen." }
  ]
});

K.add('de-a1-03', {
  lesson: [
    { p: "Türkçede “öğrenciyim” derken **-im** ekini kullanırız. Almancada ise ayrı bir fiil vardır: **sein** (olmak). Bu fiil düzensizdir – ezberlenmelidir." },
    { table: { head: ["Zamir", "Türkçe", "sein"], rows: [
      ["ich", "ben", "**bin**"], ["du", "sen", "**bist**"], ["er / sie / es", "o (eril / dişil / nötr)", "**ist**"],
      ["wir", "biz", "**sind**"], ["ihr", "siz (samimi, çoğul)", "**seid**"], ["sie", "onlar", "**sind**"], ["Sie", "Siz (resmi)", "**sind**"]
    ] } },
    { tip: "Türkçede tek bir “o” var. Almancada üç tane: **er** (eril), **sie** (dişil), **es** (nötr). Eşyalar için de kullanılır: *Der Tisch ist groß → **Er** ist groß.*" },
    { warn: "**sie** üç anlama gelebilir: *sie ist* = o (kadın) … / *sie sind* = onlar … / *Sie sind* = Siz (resmi) … Fiile ve büyük harfe bak!" },
    { tip: "Meslekler artikelsiz söylenir: *Ich bin Lehrer.* (öğretmenim) – *Sie ist Ärztin.* (o doktordur)" },
    { ex: [["Ich bin Student.", "Ben öğrenciyim."], ["Bist du müde?", "Yorgun musun?"], ["Wir sind aus Ankara.", "Biz Ankaralıyız."], ["Sie ist Ärztin.", "O doktordur. (kadın)"]] }
  ],
  exercises: [
    { id: "de-a1-03.1", t: "gap", q: "Ich ___ Student. (sein)", a: ["bin"],
      wrong: { "ist": "“ist” üçüncü tekil şahıs (er/sie/es) içindir. ich → **bin**.", "bist": "“bist” du içindir. ich → **bin**.", "sind": "“sind” wir/sie/Sie içindir. ich → **bin**." },
      e: "**ich bin** – ben …-im." },
    { id: "de-a1-03.2", t: "gap", q: "Du ___ sehr nett. (sein)", a: ["bist"],
      wrong: { "bin": "“bin” ich içindir. du → **bist**.", "ist": "“ist” er/sie/es içindir. du → **bist**." },
      e: "**du bist** – sen …-sin." },
    { id: "de-a1-03.3", t: "gap", q: "Wir ___ aus Ankara. (sein)", a: ["sind"],
      wrong: { "seid": "“seid” ihr (siz) içindir. wir → **sind**.", "kommen": "“Wir kommen aus Ankara” de doğru bir cümle, ama burada **sein** fiili isteniyor → **sind**." },
      e: "**wir sind** – biz …-iz." },
    { id: "de-a1-03.4", t: "gap", q: "Ihr ___ heute aber fleißig! (sein)", a: ["seid"],
      wrong: { "sind": "“sind” wir/sie/Sie içindir. **ihr** (siz, samimi) → **seid**.", "seit": "Dikkat: “seit” (-den beri) bir edattır. “sein” fiili: ihr **seid** (d ile)." },
      e: "**ihr seid** – siz (arkadaş grubu) …-siniz." },
    { id: "de-a1-03.5", t: "mc", q: "Er ___ Lehrer.", o: ["bin", "bist", "ist", "sind"], a: 2,
      why: { 0: "“bin” ich içindir.", 1: "“bist” du içindir.", 3: "“sind” wir/sie/Sie içindir." },
      e: "**er ist** – o …-dir." },
    { id: "de-a1-03.6", t: "mc", q: "“Sind Sie Herr Yılmaz?” – Buradaki “Sie” ne demek?", o: ["onlar", "o (kadın)", "Siz (resmi)", "sen"], a: 2,
      why: { 0: "“onlar” anlamında olsaydı cümle ortasında küçük yazılırdı: sind sie …", 1: "“o (kadın)” olsaydı fiil **ist** olurdu.", 3: "“sen” = du." },
      e: "Cümle ortasında büyük **Sie** = resmi **Siz**. Fiil: **sind**." },
    { id: "de-a1-03.7", t: "mc", q: "“Sie ist Ärztin.” – Buradaki “Sie” ne demek?", o: ["Siz (resmi)", "o (kadın)", "onlar"], a: 1,
      why: { 0: "Resmi “Sie” ile fiil **sind** olur, “ist” değil.", 2: "“onlar” ile fiil **sind** olurdu." },
      e: "Fiil **ist** → tekil 3. şahıs → **sie = o (kadın)**. Cümle başında olduğu için büyük yazılmış." },
    { id: "de-a1-03.8", t: "order", q: "Cümleyi kur: “Ben yorgun değilim.”", w: ["nicht", "Ich", "müde", "bin"], a: ["Ich bin nicht müde"],
      e: "Özne + **bin** + nicht + sıfat → *Ich bin nicht müde.*" },
    { id: "de-a1-03.9", t: "speak", say: "Wir sind heute sehr müde.",
      e: "**sind**: baştaki s sesliden önce “z”, sondaki d ise “t” okunur → “zint”. Almancada kelime sonundaki b, d, g sertleşir (p, t, k). **müde**: ü uzun, sondaki e yutulmaz ama kısa ve belirsizdir: “müüde”. **sehr** = “zeea”, r neredeyse duyulmaz." },
    { id: "de-a1-03.10", t: "speak", say: "Bist du auch Student?",
      e: "**Student**: kelime başındaki st = **şt** → “ştudent”, vurgu son hecede: ştu-**DENT**. **auch**: au’dan sonra ch gırtlaktan gelir, “auh”. Evet/hayır sorusu olduğu için ses sonda yükselir – Türkçedeki “mi” ekinin yerini tonlama tutar." }
  ]
});

K.add('de-a1-04', {
  lesson: [
    { p: "Türkçede artikel (tanımlık) yoktur. Almancada her ismin bir **cinsiyeti** vardır ve bu, artikelden anlaşılır: **der** (eril), **die** (dişil), **das** (nötr). Çoğulda artikel her zaman **die**’dır." },
    { tip: "Altın kural: Kelimeyi **her zaman artikeliyle birlikte** ezberle! Sadece “Tisch” değil, “**der** Tisch”." },
    { table: { head: ["", "eril", "dişil", "nötr", "çoğul"], rows: [
      ["belirli", "**der** Mann", "**die** Frau", "**das** Kind", "**die** Kinder"],
      ["belirsiz (bir)", "**ein** Mann", "**eine** Frau", "**ein** Kind", "– Kinder"]
    ] } },
    { h: "Yardımcı kurallar" },
    { table: { head: ["Kural", "Artikel", "Örnek"], rows: [
      ["-ung, -heit, -keit, -schaft, -ion", "die", "die Zeitung, die Freiheit, die Nation"],
      ["-chen, -lein (küçültme)", "das", "das Mädchen, das Brötchen"],
      ["Günler, aylar, mevsimler", "der", "der Montag, der Mai, der Sommer"],
      ["-e ile biten isimlerin çoğu", "die (genelde)", "die Lampe, die Tasche"],
      ["Mastardan yapılan isimler", "das", "das Essen, das Leben"]
    ] } },
    { warn: "Cinsiyet her zaman mantıklı değildir: **das Mädchen** (kız) nötrdür, çünkü “-chen” ile biter!" },
    { vocab: [["der Vater", "baba"], ["die Mutter", "anne"], ["das Kind", "çocuk"], ["der Tisch", "masa"], ["die Lampe", "lamba"], ["das Buch", "kitap"], ["die Stadt", "şehir"], ["das Haus", "ev"]] }
  ],
  exercises: [
    { id: "de-a1-04.1", t: "mc", q: "___ Zeitung (gazete)", o: ["der", "die", "das"], a: 1,
      why: { 0: "-ung ile biten isimler eril değil, **dişildir**.", 2: "-ung ile biten isimler nötr değil, **dişildir**." },
      e: "**-ung** → her zaman **die**: die Zeitung, die Wohnung." },
    { id: "de-a1-04.2", t: "mc", q: "___ Mädchen (kız çocuğu)", o: ["der", "die", "das"], a: 2,
      why: { 0: "Kelimenin sonundaki **-chen** küçültme ekidir ve artikeli her zaman belirler: der olamaz → **das**.", 1: "Mantıken dişil gibi görünüyor ama dilbilgisi kuralı farklı: -chen → das!" },
      e: "**-chen** ile biten her isim **das** alır – doğal cinsiyet önemli değil." },
    { id: "de-a1-04.3", t: "mc", q: "___ Montag (pazartesi)", o: ["der", "die", "das"], a: 0,
      why: { 1: "Haftanın bütün günleri (Montag … Sonntag) **der** alır, die değil.", 2: "Haftanın bütün günleri **der** alır; das olmaz – “Tag” (gün) kelimesi de eril: der Tag." },
      e: "Günler, aylar ve mevsimler **der** alır." },
    { id: "de-a1-04.4", t: "mc", q: "___ Freiheit (özgürlük)", o: ["der", "die", "das"], a: 1,
      why: { 0: "-heit ile biten isimler dişildir.", 2: "-heit ile biten isimler dişildir." },
      e: "**-heit / -keit** → **die**." },
    { id: "de-a1-04.5", t: "gap", q: "Das ist ___ Tisch. (bir masa – der Tisch)", a: ["ein"],
      wrong: { "eine": "“eine” dişil isimler içindir. “der Tisch” eril → **ein**.", "einen": "“einen” Akkusativ’dir (nesne). “Das ist …” cümlesinde Nominativ kullanılır → **ein**.", "der": "Soru “bir masa” – yani belirsiz artikel: **ein**." },
      e: "Eril (der) ve nötr (das) → **ein**; dişil (die) → **eine**." },
    { id: "de-a1-04.6", t: "gap", q: "Das ist ___ Lampe. (bir lamba – die Lampe)", a: ["eine"],
      wrong: { "ein": "“die Lampe” dişil → **eine**.", "die": "Soru “bir lamba” – belirsiz artikel: **eine**." },
      e: "Dişil isimler → **eine**." },
    { id: "de-a1-04.7", t: "mc", q: "___ Kinder spielen im Park. (Çocuklar parkta oynuyor.)", o: ["Der", "Die", "Das"], a: 1,
      why: { 0: "Çoğulda “der” kullanılmaz.", 2: "“das Kind” tekildir; çoğulu “**die** Kinder”." },
      e: "Çoğulda artikel **her zaman die**." },
    { id: "de-a1-04.8", t: "match", q: "Eşleştir:", p: [["der Vater", "baba"], ["die Mutter", "anne"], ["das Kind", "çocuk"], ["das Haus", "ev"], ["die Stadt", "şehir"]],
      e: "Artikelleri kelimeyle birlikte öğren!" },
    { id: "de-a1-04.9", t: "speak", say: "Das Mädchen liest ein Buch.",
      e: "**Mädchen**: ä uzun açık e, ch yumuşak → “meedhen”; “meçen” deme. **liest**: ie uzun i → “liist”. **Buch**: u’dan sonra ch gırtlaktan → “buuh”. Artikeli yutma: **das** kısa ama net söylenir, çünkü cinsiyeti o gösterir." },
    { id: "de-a1-04.10", t: "speak", say: "Die Zeitung liegt auf dem Tisch.",
      e: "**Zeitung** = “tsaytuŋ”: z = ts, ei = ay; sondaki **-ung**’da g ayrı okunmaz, n ile birlikte genizden çıkar. **liegt**: kelime sonundaki g, k gibi okunur → “liikt”. **Tisch** = “tiş”." }
  ]
});

K.add('de-a1-05', {
  lesson: [
    { p: "Almancada **Präsens**, Türkçedeki hem şimdiki zamanı (*-yor*) hem de geniş zamanı (*-r*) karşılar: *Ich lerne* = öğreniyorum / öğrenirim. Fiil, **kök + şahıs eki** ile çekilir." },
    { table: { head: ["", "lernen (öğrenmek)", "haben (sahip olmak)"], rows: [
      ["ich", "lern**e**", "hab**e**"], ["du", "lern**st**", "ha**st**"], ["er/sie/es", "lern**t**", "ha**t**"],
      ["wir", "lern**en**", "hab**en**"], ["ihr", "lern**t**", "hab**t**"], ["sie/Sie", "lern**en**", "hab**en**"]
    ] } },
    { h: "Kökü değişen fiiller (du / er)" },
    { p: "Bazı fiillerde **du** ve **er/sie/es** formlarında kökteki sesli harf değişir:" },
    { table: { head: ["Mastar", "du", "er/sie/es"], rows: [
      ["fahren (araçla gitmek)", "f**ä**hrst", "f**ä**hrt"], ["schlafen (uyumak)", "schl**ä**fst", "schl**ä**ft"],
      ["sprechen (konuşmak)", "spr**i**chst", "spr**i**cht"], ["essen (yemek)", "**i**sst", "**i**sst"],
      ["lesen (okumak)", "l**ie**st", "l**ie**st"], ["sehen (görmek)", "s**ie**hst", "s**ie**ht"]
    ] } },
    { tip: "Kökü **-t** veya **-d** ile biten fiillerde araya **e** girer: arbeiten → du arbeit**e**st, er arbeit**e**t." },
    { ex: [["Ich lerne Deutsch.", "Almanca öğreniyorum."], ["Er fährt nach Berlin.", "O Berlin’e gidiyor."], ["Wir haben Zeit.", "Vaktimiz var."]] }
  ],
  exercises: [
    { id: "de-a1-05.1", t: "gap", q: "Ich ___ Deutsch. (lernen)", a: ["lerne"],
      wrong: { "lernen": "Mastar hâli. ich → kök + **-e**: lerne.", "lernst": "Bu du formu. ich → **lerne**." },
      e: "ich → kök + **-e**: lerne." },
    { id: "de-a1-05.2", t: "gap", q: "Du ___ in Berlin. (wohnen)", a: ["wohnst"],
      wrong: { "wohnt": "“wohnt” er/sie/es veya ihr içindir. du → **wohnst**.", "wohne": "“wohne” ich içindir. du → **wohnst**." },
      e: "du → kök + **-st**: wohnst." },
    { id: "de-a1-05.3", t: "gap", q: "Er ___ Kaffee. (trinken)", a: ["trinkt"],
      wrong: { "trinkst": "“trinkst” du içindir. er → **trinkt**.", "trinken": "Mastar hâli. er → kök + **-t**." },
      e: "er/sie/es → kök + **-t**: trinkt." },
    { id: "de-a1-05.4", t: "gap", q: "Wir ___ Fußball. (spielen)", a: ["spielen"],
      wrong: { "spielt": "“spielt” er/ihr içindir. wir → **spielen**." },
      e: "wir → mastar hâli: spielen." },
    { id: "de-a1-05.5", t: "gap", q: "Du ___ sehr gut Deutsch. (sprechen)", a: ["sprichst"],
      wrong: { "sprechst": "“sprechen” kökü değişen bir fiildir: e → i. du **sprichst**.", "spricht": "“spricht” er/sie/es formudur. du → **sprichst**." },
      e: "sprechen → du **sprichst**, er **spricht** (e → i)." },
    { id: "de-a1-05.6", t: "mc", q: "Er ___ morgen nach Hamburg. (fahren)", o: ["fahrt", "fährt", "fährst", "fahren"], a: 1,
      why: { 0: "“fahrt” ihr formudur. er ile kök değişir: a → ä.", 2: "“fährst” du içindir.", 3: "“fahren” wir/sie/Sie formudur." },
      e: "fahren → du **fährst**, er **fährt** (a → ä)." },
    { id: "de-a1-05.7", t: "gap", q: "Sie (o, kadın) ___ ein Auto. (haben)", a: ["hat"],
      wrong: { "habt": "“habt” ihr içindir. sie (o) → **hat**.", "haben": "“haben” sadece “onlar/Siz” anlamındaki sie/Sie ile kullanılır. Burada “o (kadın)” → **hat**.", "hast": "“hast” du içindir." },
      e: "haben düzensizdir: du **hast**, er/sie **hat**." },
    { id: "de-a1-05.8", t: "gap", q: "Ihr ___ heute lange. (arbeiten)", a: ["arbeitet"],
      wrong: { "arbeitt": "Kök -t ile bitiyorsa araya **e** girer: ihr arbeit**e**t.", "arbeiten": "Mastar/wir formu. ihr → **arbeitet**." },
      e: "arbeiten: kök “arbeit-” -t ile bittiği için: ihr arbeit**e**t." },
    { id: "de-a1-05.9", t: "mc", q: "“Ich lese ein Buch.” Türkçeye nasıl çevrilir?", o: ["Sadece “Bir kitap okuyorum.”", "Sadece “Bir kitap okurum.”", "Bağlama göre ikisi de olabilir", "“Bir kitap okudum.”"], a: 2,
      why: { 0: "Almanca Präsens hem -yor hem -r anlamına gelir.", 1: "Almanca Präsens hem -yor hem -r anlamına gelir.", 3: "Bu geçmiş zaman olurdu (Ich habe … gelesen)." },
      e: "Almancada ayrı bir “şimdiki zaman” yoktur. **Präsens** = şimdiki + geniş zaman (+ yakın gelecek)." },
    { id: "de-a1-05.10", t: "speak", say: "Er fährt jeden Tag nach Hause.",
      e: "**fährt**: ä uzun açık e, r neredeyse duyulmaz → “feeat”. **Tag**: sondaki g, k gibi okunur → “taak”. **nach**: a’dan sonra ch gırtlaktan → “naah”. **Hause**: au = “au”, s sesliden önce z → “hauze”." },
    { id: "de-a1-05.11", t: "speak", say: "Sprichst du schon gut Deutsch?",
      e: "**sprichst** = “şprihst”: sp = şp, ch yumuşak. Türkçe konuşanlar ünsüz yığınlarına “ı” ekler (“şıprihist”) – ekleme, ünsüzleri arka arkaya söyle. **schon** = “şoon”. **Deutsch** = “doyç”." }
  ]
});

K.add('de-a1-06', {
  lesson: [
    { p: "Türkçede fiil cümlenin **sonunda**dır: *Ben bugün okula gidiyorum.* Almancada çekimli fiil **her zaman 2. sırada**dır." },
    { table: { head: ["1. pozisyon", "2. pozisyon (fiil)", "geri kalan"], rows: [
      ["Ich", "**gehe**", "heute in die Schule."], ["Heute", "**gehe**", "ich in die Schule."], ["In die Schule", "**gehe**", "ich heute."]
    ] } },
    { tip: "1. pozisyona başka bir öğe gelirse (Heute …), özne fiilin **arkasına** geçer: *Heute gehe **ich** …*" },
    { h: "Soru kelimeleri (W-Fragen)" },
    { table: { head: ["Almanca", "Türkçe"], rows: [
      ["Wer?", "Kim?"], ["Was?", "Ne?"], ["Wo?", "Nerede?"], ["Woher?", "Nereden?"], ["Wohin?", "Nereye?"],
      ["Wann?", "Ne zaman?"], ["Wie?", "Nasıl?"], ["Warum?", "Neden?"], ["Wie viel?", "Ne kadar?"]
    ] } },
    { p: "W-sorusu: **soru kelimesi + fiil + özne**: *Wo wohnst du?*" },
    { h: "Evet/hayır soruları" },
    { p: "Türkçedeki “mı/mi” eki Almancada yoktur. Bunun yerine **fiil başa** gelir: *Du kommst.* → ***Kommst** du?*" },
    { ex: [["Heute gehe ich ins Kino.", "Bugün sinemaya gidiyorum."], ["Wo wohnst du?", "Nerede oturuyorsun?"], ["Kommst du mit?", "Sen de geliyor musun?"]] }
  ],
  exercises: [
    { id: "de-a1-06.1", t: "order", q: "Cümleyi kur: “Bugün sinemaya gidiyorum.” (“Heute” ile başla)", w: ["gehe", "ich", "Heute", "ins Kino"], a: ["Heute gehe ich ins Kino"],
      e: "Heute (1) – **gehe** (2) – ich – ins Kino. Fiil hep 2. sırada!" },
    { id: "de-a1-06.2", t: "mc", q: "___ wohnst du? – In Bonn.", o: ["Wer", "Wo", "Woher", "Wann"], a: 1,
      why: { 0: "Wer = kim.", 2: "Woher = nereden. Cevap “aus …” olurdu.", 3: "Wann = ne zaman." },
      e: "Yer sorusu: **Wo?** = Nerede?" },
    { id: "de-a1-06.3", t: "mc", q: "___ kommst du? – Aus Izmir.", o: ["Wo", "Wohin", "Woher", "Wie"], a: 2,
      why: { 0: "Wo = nerede (konum).", 1: "Wohin = nereye (yön).", 3: "Wie = nasıl." },
      e: "**Woher?** = Nereden? Cevap: *aus …*" },
    { id: "de-a1-06.4", t: "mc", q: "___ heißt du? – Ich heiße Can.", o: ["Was", "Wie", "Wer", "Wo"], a: 1,
      why: { 0: "Türkçede “Adın ne?” deriz, ama Almancada “Was heißt du?” yanlıştır.", 2: "“Wer bist du?” denebilir ama “Wer heißt du?” yanlıştır.", 3: "Wo = nerede." },
      e: "İsim sorarken: **Wie** heißt du? (kelimesi kelimesine: Nasıl adlandırılıyorsun?)" },
    { id: "de-a1-06.5", t: "mc", q: "Hangisi doğru bir evet/hayır sorusudur? (Bugün geliyor musun?)", o: ["Du kommst heute mı?", "Kommst du heute?", "Du heute kommst?", "Heute du kommst?"], a: 1,
      why: { 0: "Almancada soru eki yoktur.", 2: "Fiil sonda olamaz – bu Türkçe dizilimdir.", 3: "Fiil başa gelmeli." },
      e: "Evet/hayır sorusunda **fiil başa** gelir: ***Kommst** du heute?*" },
    { id: "de-a1-06.6", t: "order", q: "Cümleyi kur: “Yarın futbol oynuyorum.” (“Morgen” ile başla)", w: ["spiele", "Fußball", "Morgen", "ich"], a: ["Morgen spiele ich Fußball"],
      e: "Morgen (1) – **spiele** (2) – ich – Fußball." },
    { id: "de-a1-06.7", t: "gap", q: "___ alt bist du? – Ich bin 25.", a: ["Wie"],
      wrong: { "was": "Türkçede “Kaç yaşındasın?” deriz; Almancada **Wie alt** bist du? (Ne kadar yaşlısın?)", "wie viel": "Yaş için “wie viel” değil, **wie alt** kullanılır." },
      e: "Yaş sorarken: **Wie alt** bist du?" },
    { id: "de-a1-06.8", t: "mc", q: "___ lernst du Deutsch? – Weil ich in Deutschland arbeite.", o: ["Wann", "Warum", "Was", "Wohin"], a: 1,
      why: { 0: "Wann = ne zaman.", 2: "Was = ne.", 3: "Wohin = nereye." },
      e: "“Weil …” (çünkü) cevabı → soru: **Warum?** (Neden?)" },
    { id: "de-a1-06.9", t: "speak", say: "Wo wohnst du jetzt?",
      e: "**Wo** = “voo”, **wohnst** = “voonst” (w = v, h okunmaz, o uzun). **jetzt** = “yetst” (j = y). W-sorularında ses sonda **düşer**; evet/hayır sorusundaki gibi yükselmez." },
    { id: "de-a1-06.10", t: "speak", say: "Morgen gehe ich ins Kino.",
      e: "Fiil 2. sırada: Morgen – **gehe** – ich. **gehe** = “gee-e” (h okunmaz). **Kino** = “kiino”, i uzun. **Morgen**’deki r hafif, sondaki -en kısa: “morgın”e yakın. “gehe ich” birbirine bağlı, duraksamadan söylenir." }
  ]
});

K.add('de-a1-07', {
  lesson: [
    { p: "Akkusativ, Türkçedeki **-i hâline** (belirtme hâli) benzer: fiilin etkilediği nesnedir. Soru: **Wen? / Was?** (Kimi? / Neyi?)" },
    { table: { head: ["", "eril", "dişil", "nötr", "çoğul"], rows: [
      ["Nominativ (özne)", "der / ein", "die / eine", "das / ein", "die"],
      ["Akkusativ (nesne)", "**den / einen**", "die / eine", "das / ein", "die"]
    ] } },
    { tip: "Sevindirici haber: Akkusativ’de **sadece eril (der)** değişir! der → **den**, ein → **einen**, kein → **keinen**." },
    { warn: "Türkçede belirsiz nesne ek almaz (*bir elma yiyorum*). Almancada ise yine Akkusativ kullanılır: *Ich esse **einen** Apfel.*" },
    { p: "Akkusativ isteyen sık fiiller: *haben, brauchen, kaufen, sehen, essen, trinken, möchten, suchen, kennen, lieben*. Ayrıca: **es gibt** + Akkusativ (… var)." },
    { table: { head: ["Nominativ", "Akkusativ", "Türkçe"], rows: [
      ["ich", "**mich**", "beni"], ["du", "**dich**", "seni"], ["er", "**ihn**", "onu (eril)"], ["sie", "sie", "onu (dişil)"], ["es", "es", "onu (nötr)"],
      ["wir", "**uns**", "bizi"], ["ihr", "**euch**", "sizi"], ["sie / Sie", "sie / Sie", "onları / Sizi"]
    ] } },
    { ex: [["Ich kaufe den Tisch.", "Masayı satın alıyorum."], ["Ich brauche einen Stuhl.", "Bir sandalyeye ihtiyacım var."], ["Ich liebe dich.", "Seni seviyorum."]] }
  ],
  exercises: [
    { id: "de-a1-07.1", t: "gap", q: "Ich kaufe ___ Tisch. (der Tisch – belirli)", a: ["den"],
      wrong: { "der": "“der” Nominativ’dir (özne). Tisch burada nesne → Akkusativ → **den**.", "dem": "“dem” Dativ’dir. kaufen Akkusativ ister → **den**." },
      e: "Eril + Akkusativ: der → **den**." },
    { id: "de-a1-07.2", t: "gap", q: "Ich brauche ___ Stuhl. (bir sandalye – der Stuhl)", a: ["einen"],
      wrong: { "ein": "Eril bir isim nesne olunca “ein” → **einen** olur.", "eine": "Stuhl eril, dişil değil → **einen**." },
      e: "Eril + Akkusativ: ein → **einen**." },
    { id: "de-a1-07.3", t: "mc", q: "Sie trinkt ___ Milch. (die Milch – belirli)", o: ["den", "die", "der"], a: 1,
      why: { 0: "“den” sadece eril isimler içindir. Milch dişil.", 2: "“der” dişil Akkusativ değildir." },
      e: "Dişil isimler Akkusativ’de **değişmez**: die → die." },
    { id: "de-a1-07.4", t: "mc", q: "Wir sehen ___ Kind. (das Kind)", o: ["den", "das", "dem"], a: 1,
      why: { 0: "“den” sadece eril isimler içindir; Kind nötr.", 2: "“dem” Dativ’dir (mit dem Bus gibi). “sehen” Akkusativ ister → nötrde **das**." },
      e: "Nötr isimler Akkusativ’de değişmez: das → das." },
    { id: "de-a1-07.5", t: "gap", q: "Ich liebe ___. (seni)", a: ["dich"],
      wrong: { "du": "“du” özne hâlidir. Nesne (seni) → **dich**.", "dir": "“dir” Dativ’dir (sana). “lieben” Akkusativ ister → **dich**." },
      e: "du → Akkusativ **dich** (seni)." },
    { id: "de-a1-07.6", t: "mc", q: "Kennst du den Lehrer? – Ja, ich kenne ___.", o: ["er", "ihn", "ihm"], a: 1,
      why: { 0: "“er” özne hâlidir.", 2: "“ihm” Dativ’dir (ona)." },
      e: "er → Akkusativ **ihn** (onu)." },
    { id: "de-a1-07.7", t: "mc", q: "Hangisi doğru? (Bir erkek kardeşim var.)", o: ["Ich habe ein Bruder.", "Ich habe einen Bruder.", "Ich habe einem Bruder."], a: 1,
      why: { 0: "“haben” Akkusativ ister; der Bruder eril → **einen**.", 2: "“einem” Dativ’dir." },
      e: "haben + Akkusativ: *Ich habe **einen** Bruder.*" },
    { id: "de-a1-07.8", t: "gap", q: "Hier gibt es ___ Supermarkt. (bir – der Supermarkt)", a: ["einen"],
      wrong: { "ein": "“es gibt” her zaman Akkusativ ister → eril: **einen**." },
      e: "**es gibt** + Akkusativ: *Es gibt einen Supermarkt.*" },
    { id: "de-a1-07.9", t: "speak", say: "Ich kaufe heute einen Kühlschrank.",
      e: "**einen**: sondaki -en kısa ve belirsiz okunur (“aynın”e yakın) ama **n** mutlaka duyulmalı – Akkusativ’i bu n’den anlarız! **Kühlschrank** = “küül-şrank”: ü uzun, h okunmaz, sch = ş. Birleşik kelimede vurgu ilk parçadadır: **KÜHL**-schrank." },
    { id: "de-a1-07.10", t: "speak", say: "Kennst du ihn schon lange?",
      e: "**ihn** = “iin”: h okunmaz, i uzun. Sondaki **n**’yi net söyle; dudaklarını kapatırsan **ihm** (Dativ, “ona”) duyulur. **Kennst**: ünsüzler arka arkaya – araya “ı” ekleme (“kennıst” değil). **lange**: ng tek bir genizden ses, g ayrıca okunmaz → “laŋe”." }
  ]
});

K.add('de-a1-08', {
  lesson: [
    { p: "Almancada iki olumsuzluk kelimesi vardır: **kein** ve **nicht**." },
    { table: { head: ["kein", "nicht"], rows: [
      ["Belirsiz artikelli (ein) veya artikelsiz isimleri olumsuz yapar", "Fiilleri, sıfatları, belirli artikelli isimleri ve özel isimleri olumsuz yapar"],
      ["Ich habe **kein** Auto.", "Ich komme **nicht**."],
      ["Ich habe **keine** Zeit.", "Das ist **nicht** gut."],
      ["Das sind **keine** Kinder.", "Das ist **nicht** der Bus."]
    ] } },
    { p: "**kein**, “ein” gibi çekilir: kein (der/das), **keine** (die ve çoğul). Akkusativ’de eril: **keinen**." },
    { tip: "Kısa test: Olumlu cümlede **ein** varsa veya **artikel yoksa** → **kein**. Diğer her durumda → **nicht**." },
    { ex: [["Ich habe keine Zeit.", "Vaktim yok."], ["Das ist nicht mein Auto.", "Bu benim arabam değil."], ["Er kommt heute nicht.", "O bugün gelmiyor."]] }
  ],
  exercises: [
    { id: "de-a1-08.1", t: "mc", q: "Ich habe ___ Zeit. (die Zeit)", o: ["nicht", "kein", "keine"], a: 2,
      why: { 0: "“Zeit” artikelsiz bir isim → **kein-** kullanılır.", 1: "Zeit dişil → kein değil **keine**." },
      e: "Artikelsiz isim + dişil → **keine**: Ich habe keine Zeit." },
    { id: "de-a1-08.2", t: "mc", q: "Ich komme heute ___.", o: ["nicht", "kein", "keine"], a: 0,
      why: { 1: "Burada fiil olumsuz yapılıyor, isim değil → nicht.", 2: "Fiil olumsuz yapılıyor → nicht." },
      e: "Fiil → **nicht**." },
    { id: "de-a1-08.3", t: "mc", q: "Das ist ___ Problem. (das Problem)", o: ["nicht", "kein", "keine"], a: 1,
      why: { 0: "Olumlu cümle: “Das ist **ein** Problem” → ein varsa **kein**.", 2: "Problem nötr → **kein**." },
      e: "ein Problem → **kein** Problem." },
    { id: "de-a1-08.4", t: "mc", q: "Das Essen ist ___ gut.", o: ["nicht", "kein", "keine"], a: 0,
      why: { 1: "Sıfat (gut) olumsuz yapılıyor → nicht.", 2: "Sıfat → nicht." },
      e: "Sıfat → **nicht**." },
    { id: "de-a1-08.5", t: "gap", q: "Er hat ___ Kinder. (Hiç çocuğu yok.)", a: ["keine"],
      wrong: { "kein": "Çoğulda **keine** kullanılır.", "nicht": "“Kinder” artikelsiz bir isim → **keine**.", "keinen": "“keinen” sadece eril tekil Akkusativ içindir. Çoğul → **keine**." },
      e: "Çoğul → **keine**." },
    { id: "de-a1-08.6", t: "gap", q: "Ich trinke ___ Kaffee. (Kahve içmem. – der Kaffee)", a: ["keinen"],
      wrong: { "kein": "Kaffee eril ve burada nesne (Akkusativ) → **keinen**.", "keine": "Kaffee eril → **keinen**.", "nicht": "Artikelsiz isim → **kein-**; eril Akkusativ → **keinen**." },
      e: "Eril + Akkusativ: einen → **keinen**." },
    { id: "de-a1-08.7", t: "mc", q: "Ist das dein Auto? – Nein, das ist ___ mein Auto.", o: ["kein", "nicht", "keine"], a: 1,
      why: { 0: "“mein” bir iyelik kelimesidir; önünde “kein” kullanılmaz.", 2: "İyelik kelimesi var → **nicht**." },
      e: "İyelik (mein, dein …) veya belirli artikel varsa → **nicht**." },
    { id: "de-a1-08.8", t: "speak", say: "Ich habe heute keine Zeit.",
      e: "**keine** = “kayne” (ei = ay), **Zeit** = “tsayt” (z = ts). İki kelimede de “ey” deme, ağzını açıp **ay** de. Olumsuzluğu gösteren **keine** cümlede vurgulanır." },
    { id: "de-a1-08.9", t: "speak", say: "Nein, das ist nicht richtig.",
      e: "**nicht** = “niht”: ch yumuşak, “niçt” değil. **richtig**: iki ch de yumuşak; sondaki **-ig** standart telaffuzda “-ih” okunur → “rihtih” (Güney Almanya’da “rihtik” de duyarsın). **Nein** = “nayn”." }
  ]
});

K.add('de-a1-09', {
  lesson: [
    { p: "Almanca sayılardaki en büyük tuzak: 21–99 arası sayılar **tersten** söylenir – önce birler, sonra onlar! 21 = einundzwanzig (“bir-ve-yirmi”)." },
    { table: { head: ["Sayı", "Almanca", "Sayı", "Almanca"], rows: [
      ["0", "null", "13", "dreizehn"], ["1", "eins", "16", "**sechzehn**"], ["2", "zwei", "17", "**siebzehn**"],
      ["3", "drei", "20", "zwanzig"], ["4", "vier", "21", "einundzwanzig"], ["5", "fünf", "30", "**dreißig**"],
      ["6", "sechs", "40", "vierzig"], ["7", "sieben", "60", "**sechzig**"], ["8", "acht", "70", "**siebzig**"],
      ["9", "neun", "100", "hundert"], ["10", "zehn", "1000", "tausend"], ["11", "elf", "12", "zwölf"]
    ] } },
    { warn: "Dikkat: sech**zehn** (16) ve sech**zig** (60) – “s” düşer; sieb**zehn** (17) ve sieb**zig** (70) – “en” düşer; drei**ß**ig (30) – “z” değil “ß”!" },
    { h: "Saat" },
    { p: "Soru: *Wie spät ist es?* veya *Wie viel Uhr ist es?* – Cevap: *Es ist drei Uhr.*" },
    { table: { head: ["Saat", "Almanca (günlük)", "Türkçe"], rows: [
      ["3:00", "drei Uhr", "saat üç"], ["3:15", "Viertel nach drei", "üçü çeyrek geçiyor"], ["3:30", "**halb vier**", "üç buçuk"],
      ["3:45", "Viertel vor vier", "dörde çeyrek var"], ["3:10", "zehn nach drei", "üçü on geçiyor"], ["3:50", "zehn vor vier", "dörde on var"]
    ] } },
    { warn: "**halb vier = 3:30!** Almanlar “dördün yarısı” der, yani bir **sonraki** saate göre söylerler. Türkler için en sık hata!" }
  ],
  exercises: [
    { id: "de-a1-09.1", t: "mc", q: "21", o: ["zwanzigeins", "einundzwanzig", "zweiundzwanzig", "einszwanzig"], a: 1,
      why: { 0: "Almanca sayılar ters söylenir: önce birler, sonra onlar.", 2: "Bu 22.", 3: "“eins” birleşik sayılarda “ein” olur ve araya “und” gelir." },
      e: "21 = **ein-und-zwanzig** (bir-ve-yirmi)." },
    { id: "de-a1-09.2", t: "gap", q: "30 = ___", a: ["dreißig", "dreissig"],
      wrong: { "dreizig": "30 istisnadır: “z” değil **ß** ile yazılır: dreißig.", "dreizehn": "Bu 13. 30 = **dreißig**." },
      e: "30 = **dreißig** (diğer onlar -zig ile biter, 30 -ßig ile)." },
    { id: "de-a1-09.3", t: "mc", q: "67", o: ["sechsundsiebzig", "siebenundsechzig", "siebzigsechs", "siebenundsechszig"], a: 1,
      why: { 0: "Bu 76 – sıra ters!", 2: "Önce birler gelir ve araya “und” girer.", 3: "60 = sechzig (“s” olmadan)." },
      e: "67 = **sieben-und-sechzig**." },
    { id: "de-a1-09.4", t: "gap", q: "16 = ___", a: ["sechzehn"],
      wrong: { "sechszehn": "16’da “s” düşer: **sechzehn**.", "sechzig": "Bu 60. 16 = **sechzehn**." },
      e: "16 = **sechzehn** (sechs → sech)." },
    { id: "de-a1-09.5", t: "mc", q: "“Es ist halb acht.” Saat kaç?", o: ["8:30", "7:30", "7:50", "8:15"], a: 1,
      why: { 0: "En sık yapılan hata! “halb acht” = sekizin yarısı → **7:30**.", 2: "7:50 = zehn vor acht.", 3: "8:15 = Viertel nach acht." },
      e: "**halb + sonraki saat**: halb acht = **7:30**." },
    { id: "de-a1-09.6", t: "mc", q: "4:45", o: ["Viertel nach vier", "Viertel vor fünf", "halb fünf", "Viertel vor vier"], a: 1,
      why: { 0: "Bu 4:15.", 2: "Bu 4:30.", 3: "Bu 3:45." },
      e: "4:45 = beşe çeyrek var = **Viertel vor fünf**." },
    { id: "de-a1-09.7", t: "mc", q: "10:15", o: ["Viertel nach zehn", "Viertel vor zehn", "halb elf"], a: 0,
      why: { 1: "Bu 9:45.", 2: "Bu 10:30." },
      e: "10:15 = **Viertel nach zehn**." },
    { id: "de-a1-09.8", t: "gap", q: "17 = ___", a: ["siebzehn"],
      wrong: { "siebenzehn": "17’de “en” düşer: **siebzehn**.", "siebzig": "Bu 70. 17 = **siebzehn**." },
      e: "17 = **siebzehn** (sieben → sieb)." },
    { id: "de-a1-09.9", t: "speak", say: "Der Kurs beginnt um halb acht.", alt: ["Der Kurs beginnt um halb 8."],
      e: "Anlamı unutma: **halb acht = 7:30**, 8:30 değil! **acht** = “aht”: a’dan sonra ch gırtlaktan gelir. **beginnt**: vurgu ikinci hecede → be-**GINNT**. **halb**: sondaki b, p gibi okunur → “halp”." },
    { id: "de-a1-09.10", t: "speak", say: "Wir treffen uns um Viertel vor neun.", alt: ["Wir treffen uns um Viertel vor 9."],
      e: "**Viertel** = “firtıl”: v = f ve **i kısa** (oysa vier = “fiir”, i uzun). **neun** = “noyn” (eu = oy). **Viertel vor neun** = 8:45, yani dokuza çeyrek var." }
  ]
});

K.add('de-a1-10', {
  lesson: [
    { p: "Türkçede iyelik ekle yapılır (*ev-im*). Almancada ismin önüne bir kelime gelir: **mein** Haus (evim)." },
    { table: { head: ["Kişi", "Türkçe", "eril / nötr", "dişil / çoğul"], rows: [
      ["ich", "benim", "mein", "meine"], ["du", "senin", "dein", "deine"], ["er / es", "onun (erkek / nötr)", "sein", "seine"],
      ["sie", "onun (kadın)", "ihr", "ihre"], ["wir", "bizim", "unser", "unsere"], ["ihr", "sizin", "euer", "eure"],
      ["sie", "onların", "ihr", "ihre"], ["Sie", "Sizin (resmi)", "Ihr", "Ihre"]
    ] } },
    { tip: "Sonları “ein” gibi değişir: mein Vater (der), **meine** Mutter (die), mein Kind (das), **meine** Eltern (çoğul). Akkusativ eril: **meinen** Vater." },
    { warn: "“onun” derken **sahibin** cinsiyetine bak: Ali → **sein**, Ayşe → **ihr**. *Ayşe und ihr Mann* (Ayşe ve kocası)." },
    { ex: [["Das ist meine Mutter.", "Bu benim annem."], ["Wo ist dein Handy?", "Telefonun nerede?"], ["Ayşe und ihr Mann wohnen in Köln.", "Ayşe ve kocası Köln’de oturuyor."]] }
  ],
  exercises: [
    { id: "de-a1-10.1", t: "gap", q: "Das ist ___ Mutter. (benim)", a: ["meine"],
      wrong: { "mein": "“die Mutter” dişil → **meine**." },
      e: "Dişil → **meine**." },
    { id: "de-a1-10.2", t: "gap", q: "Das ist ___ Bruder. (benim)", a: ["mein"],
      wrong: { "meine": "“der Bruder” eril → **mein** (ek yok).", "meinen": "“meinen” Akkusativ’dir. “Das ist …” → Nominativ → **mein**." },
      e: "Eril (Nominativ) → **mein**." },
    { id: "de-a1-10.3", t: "mc", q: "Ayşe und ___ Mann (Ayşe ve kocası)", o: ["sein", "ihr", "ihre"], a: 1,
      why: { 0: "“sein” erkek sahip içindir. Sahip Ayşe (kadın) → **ihr**.", 2: "“Mann” eril → ek almaz: ihr." },
      e: "Sahip kadın → **ihr**; isim eril → ek yok: **ihr Mann**." },
    { id: "de-a1-10.4", t: "mc", q: "Ali und ___ Schwester (Ali ve kız kardeşi)", o: ["sein", "seine", "ihre"], a: 1,
      why: { 0: "“Schwester” dişil → **-e** eki gerekir: seine.", 2: "Sahip Ali (erkek) → **sein-**." },
      e: "Sahip erkek → **sein-**; isim dişil → **seine**." },
    { id: "de-a1-10.5", t: "gap", q: "Ich suche ___ Schlüssel. (benim – der Schlüssel, Akkusativ)", a: ["meinen"],
      wrong: { "mein": "Eril isim nesne (Akkusativ) olunca → **meinen**.", "meine": "Schlüssel eril → **meinen**." },
      e: "Eril + Akkusativ: **meinen**." },
    { id: "de-a1-10.6", t: "mc", q: "Kinder, wo ist ___ Lehrer? (sizin – çocuklara)", o: ["euer", "eure", "Ihr"], a: 0,
      why: { 1: "“Lehrer” eril → ek yok: **euer**.", 2: "“Ihr” resmi Siz içindir; çocuklarla konuşurken kullanılmaz." },
      e: "ihr (siz, samimi) → **euer** (eril)." },
    { id: "de-a1-10.7", t: "mc", q: "Herr Schmidt, ist das ___ Auto? (Sizin – resmi)", o: ["dein", "Ihr", "ihr"], a: 1,
      why: { 0: "“dein” samimidir (senin).", 2: "Küçük “ihr” = onun (kadın) / onların." },
      e: "Resmi “Sizin” → büyük **Ihr**." },
    { id: "de-a1-10.8", t: "speak", say: "Ist das deine Tasche oder meine?",
      e: "**deine** = “dayne”, **meine** = “mayne” (ei = ay). Sondaki **-e**’yi yutma: dişil isimde (die Tasche) iyelik kelimesinin sonunu o gösterir. **Tasche** = “taşe”. **oder**’in sonundaki r “a” gibi okunur → “ooda”." },
    { id: "de-a1-10.9", t: "speak", say: "Unser Sohn spielt gern Fußball.",
      e: "**unser**: sondaki -er “a”ya döner → “unza”; r’yi Türkçedeki gibi yuvarlama. **Sohn** = “zoon” (s sesliden önce z, h okunmaz, o uzun). **spielt** = “şpiilt”. **Fußball** = “fuusbal”: ß = ss, u uzun." }
  ]
});

K.add('de-a1-11', {
  lesson: [
    { p: "Modal fiiller başka bir fiille birlikte kullanılır. **Çekimli modal fiil 2. sırada**, asıl fiil **mastar hâlinde en sonda**dır (cümle parantezi – *Satzklammer*)." },
    { table: { head: ["", "können", "müssen", "wollen", "möchten", "dürfen", "sollen"], rows: [
      ["anlam", "-ebilmek", "zorunda olmak", "istemek", "istemek (kibar)", "izinli olmak", "-meli (başkası istiyor)"],
      ["ich", "kann", "muss", "will", "möchte", "darf", "soll"],
      ["du", "kannst", "musst", "willst", "möchtest", "darfst", "sollst"],
      ["er/sie/es", "kann", "muss", "will", "möchte", "darf", "soll"],
      ["wir", "können", "müssen", "wollen", "möchten", "dürfen", "sollen"],
      ["ihr", "könnt", "müsst", "wollt", "möchtet", "dürft", "sollt"],
      ["sie/Sie", "können", "müssen", "wollen", "möchten", "dürfen", "sollen"]
    ] } },
    { tip: "**ich** ve **er** formları aynıdır ve ek almaz: ich kann – er kann." },
    { warn: "**nicht müssen** = zorunda olmamak (yasak değil!). Yasak için **nicht dürfen** kullanılır." },
    { ex: [["Ich kann gut schwimmen.", "İyi yüzebilirim."], ["Wir müssen jetzt gehen.", "Şimdi gitmek zorundayız."], ["Hier darf man nicht rauchen.", "Burada sigara içmek yasak."]] }
  ],
  exercises: [
    { id: "de-a1-11.1", t: "gap", q: "Ich ___ gut kochen. (können)", a: ["kann"],
      wrong: { "kanne": "Modal fiillerde ich formu ek almaz: **kann**.", "könne": "ich → **kann** (ö değil a).", "können": "Mastar hâli. ich → **kann**." },
      e: "ich **kann**." },
    { id: "de-a1-11.2", t: "gap", q: "Er ___ heute arbeiten. (müssen)", a: ["muss"],
      wrong: { "müsst": "“müsst” ihr formudur. er → **muss**.", "musst": "“musst” du formudur. er → **muss**.", "müssen": "Mastar hâli. er → **muss**." },
      e: "er **muss**." },
    { id: "de-a1-11.3", t: "mc", q: "Du ___ hier nicht parken. (Burada park etmen yasak.)", o: ["darfst", "musst", "willst"], a: 0,
      why: { 1: "“nicht müssen” = zorunda değilsin. Yasak anlamı vermez!", 2: "“willst” = istiyorsun." },
      e: "Yasak = **nicht dürfen**: Du darfst hier nicht parken." },
    { id: "de-a1-11.4", t: "order", q: "Cümleyi kur: “Almanca öğrenmek istiyorum.”", w: ["lernen", "Ich", "Deutsch", "möchte"], a: ["Ich möchte Deutsch lernen"],
      e: "Modal fiil 2. sırada, mastar sonda: Ich **möchte** Deutsch **lernen**." },
    { id: "de-a1-11.5", t: "mc", q: "Hangisi doğru?", o: ["Ich kann sprechen gut Deutsch.", "Ich kann gut Deutsch sprechen.", "Ich gut Deutsch sprechen kann."], a: 1,
      why: { 0: "Mastar (sprechen) en sona gider.", 2: "Bu Türkçe dizilimdir; çekimli fiil 2. sırada olmalı." },
      e: "Cümle parantezi: **kann** … **sprechen**." },
    { id: "de-a1-11.6", t: "gap", q: "Wir ___ ins Kino gehen. (wollen)", a: ["wollen"],
      wrong: { "wollt": "“wollt” ihr formudur. wir → **wollen**.", "will": "“will” ich/er formudur. wir → **wollen**." },
      e: "wir **wollen** (mastar gibi)." },
    { id: "de-a1-11.7", t: "mc", q: "“Du musst nicht kommen.” ne demek?", o: ["Gelmek zorunda değilsin.", "Gelmemelisin / Gelmen yasak.", "Gelemezsin."], a: 0,
      why: { 1: "Yasak için “Du darfst nicht kommen” denir.", 2: "“Gelemezsin” = Du kannst nicht kommen." },
      e: "**nicht müssen** = zorunda olmamak." },
    { id: "de-a1-11.8", t: "speak", say: "Darf ich hier kurz parken?",
      e: "**Darf** ve **parken**’de a’dan sonraki r çok hafiftir, neredeyse uzun bir a gibi: “daaf”, “paaken”. Türkçedeki gibi r’yi titretme. **ich** = “ih” (yumuşak ch). Kibar izin sorusu: modal fiil başta, ses sonda yükselir." },
    { id: "de-a1-11.9", t: "speak", say: "Wir müssen jetzt leider gehen.",
      e: "**müssen**: ü kısa, ss sert s. Dikkat: tekilde **u** (ich muss), çoğulda **ü** (wir müssen) – “wir mussen” deme. **jetzt** = “yetst”. **leider** = “layda” (ei = ay, sondaki -er “a” gibi). Mastar **gehen** sonda." }
  ]
});

K.add('de-a1-12', {
  lesson: [
    { p: "Bazı fiillerin başında ayrılabilen bir ön ek vardır: **auf**stehen, **an**rufen, **ein**kaufen. Çekimli cümlede bu ön ek **cümlenin sonuna** gider." },
    { table: { head: ["Mastar", "Türkçe", "Cümle"], rows: [
      ["aufstehen", "kalkmak", "Ich **stehe** um 7 Uhr **auf**."],
      ["anrufen", "telefon etmek", "Ich **rufe** dich morgen **an**."],
      ["einkaufen", "alışveriş yapmak", "Wir **kaufen** im Supermarkt **ein**."],
      ["fernsehen", "televizyon izlemek", "Er **sieht** jeden Abend **fern**."],
      ["mitkommen", "birlikte gelmek", "**Kommst** du **mit**?"],
      ["ankommen", "varmak", "Der Zug **kommt** um 9 Uhr **an**."]
    ] } },
    { tip: "Sık kullanılan ön ekler: **an-, auf-, aus-, ein-, mit-, zu-, ab-, fern-, zurück-**." },
    { warn: "Modal fiille birlikte ön ek ayrılmaz, mastar birleşik kalır: *Ich muss früh **aufstehen**.*" }
  ],
  exercises: [
    { id: "de-a1-12.1", t: "order", q: "Cümleyi kur: “Saat 7’de kalkıyorum.”", w: ["auf", "Ich", "um 7 Uhr", "stehe"], a: ["Ich stehe um 7 Uhr auf"],
      e: "Fiil 2. sırada (**stehe**), ön ek sonda (**auf**)." },
    { id: "de-a1-12.2", t: "gap", q: "Ich rufe dich morgen ___. (anrufen)", a: ["an"],
      wrong: { "anrufen": "Fiil zaten çekimli (rufe); sona sadece ön ek gelir: **an**." },
      e: "anrufen → ich **rufe** … **an**." },
    { id: "de-a1-12.3", t: "mc", q: "Tren ne zaman varıyor? (ankommen)", o: ["Wann ankommt der Zug?", "Wann kommt der Zug an?", "Wann kommt an der Zug?"], a: 1,
      why: { 0: "Çekimli cümlede ön ek ayrılır ve sona gider.", 2: "Ön ek en sona, öznenin arkasına gider." },
      e: "Wann **kommt** der Zug **an**?" },
    { id: "de-a1-12.4", t: "gap", q: "Ich muss heute noch ___. (einkaufen)", a: ["einkaufen"],
      wrong: { "kaufe ein": "Modal fiil (muss) varsa ikinci fiil mastar hâlinde ve birleşik kalır: **einkaufen**.", "ein kaufen": "Birleşik yazılır: **einkaufen**." },
      e: "Modal fiil + mastar: birleşik → **einkaufen**." },
    { id: "de-a1-12.5", t: "mc", q: "Er ___ jeden Abend ___. (fernsehen)", o: ["sieht … fern", "fernsieht … –", "fern … sieht"], a: 0,
      why: { 1: "Ön ek ayrılmalı ve sona gitmeli.", 2: "Çekimli fiil 2. sırada, ön ek sonda." },
      e: "Er **sieht** jeden Abend **fern**." },
    { id: "de-a1-12.6", t: "order", q: "Cümleyi kur: “Sen de geliyor musun?”", w: ["mit", "Kommst", "du"], a: ["Kommst du mit"],
      e: "Evet/hayır sorusu: fiil başta (**Kommst**), ön ek sonda (**mit**)." },
    { id: "de-a1-12.7", t: "speak", say: "Wann stehst du morgen auf?",
      e: "Ayrılabilen fiillerde vurgu **ön ekte**dir: **AUF**stehen. Cümlede de sondaki **auf** vurgulu ve net söylenir. **stehst** = “şteest”: st = şt, h okunmaz. **Wann** = “van”, a kısa." },
    { id: "de-a1-12.8", t: "speak", say: "Ich rufe dich heute Abend an.",
      e: "Sondaki **an**’ı yutma ve vurgula – o olmadan anlam değişir: “Ich rufe dich” = sana sesleniyorum / seni çağırıyorum. **rufe** = “ruufe”, u uzun. **Abend** = “aabınt”: sondaki d, t gibi okunur. **dich** = “dih”, “diç” değil." }
  ]
});

})(window.KOPRU);
