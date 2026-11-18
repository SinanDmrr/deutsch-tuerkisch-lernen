/* Deutsch A2 – für Türkischsprechende (Erklärungen auf Türkisch)
 * Paket 1 „Erzählen, was war“: de-a2-03 (Perfekt I), de-a2-11 (Perfekt II), de-a2-04 (Präteritum)
 * Übungstypen wie in de-a1.js:
 *  mc        { q, o:[Optionen], a:Index, why:{Index:'warum falsch'}, e:'Erklärung' }
 *  gap       { q:'… ___ …', a:[richtige Antworten], wrong:{'falsche Antwort':'warum'}, cs:true (Groß/klein beachten), e }
 *  order     { q, w:[Wörter/Bausteine], a:[richtige Sätze], e }
 *  match     { q, p:[[links, rechts], …], e }
 *  listen    { say:'Zieltext (wird vorgelesen)', q, o, a, why, e }
 *  dictation { say:'Zieltext', a:[Schreibweisen], wrong, e }
 *  speak     { say:'Satz zum Nachsprechen (keine Ziffern/Eigennamen)', alt:[optionale Schreibweisen], e:'Aussprache-Tipp' }
 * Jede Aufgabe hat eine feste ID (id: "thema.nummer"). Daran hängt der Lernfortschritt der Nutzer.
 * REGELN FÜR UPDATES (damit niemand Fortschritt verliert):
 *  - Eine vergebene ID NIE ändern und NIE für eine andere Aufgabe wiederverwenden.
 *  - Neue Aufgaben bekommen eine neue, noch nie benutzte ID (z. B. die nächste Nummer).
 *  - Reihenfolge ändern, Text verbessern, Aufgaben in ein anderes Thema verschieben: erlaubt, Fortschritt bleibt.
 *  - Aufgabe löschen: erlaubt; der alte Eintrag wird einfach nicht mehr gezählt.
 */
(function (K) {

/* ---------- Perfekt I: haben/sein, ge-…-t/-en ---------- */
K.add('de-a2-03', {
  lesson: [
    { p: "Almanca konuşurken geçmişte olan bir şeyi anlatmak için çoğunlukla **Perfekt** kullanılır. Türkçedeki *dün geldim*, *hafta sonu çalıştım* gibi cümlelerin günlük konuşmadaki karşılığı budur. Perfekt iki parçadan oluşur: **haben** ya da **sein** (çekimli, 2. sırada) + fiilin **Partizip II** hâli (cümlenin en sonunda)." },
    { table: { head: ["1. sıra", "2. sıra: haben / sein", "orta kısım", "son: Partizip II"], rows: [
      ["Ich", "**habe**", "gestern lange", "**gearbeitet**."],
      ["Gestern", "**bin**", "ich zum Arzt", "**gegangen**."],
      ["Was", "**hast**", "du am Wochenende", "**gemacht**?"],
      ["Meine Eltern", "**sind**", "zu Hause", "**geblieben**."]
    ] } },
    { tip: "Bu yapıyı modal fiillerden tanıyorsun: *Ich **muss** heute **arbeiten**.* Perfekt’te de aynı **cümle parantezi** (Satzklammer) var: yardımcı fiil 2. sırada, Partizip en sonda. Türkçede fiil hep sonda olduğu için insan kolayca *Ich habe gearbeitet gestern* der – ✗. Zaman, yer, nesne … hepsi parantezin **içine** girer: *Ich habe **gestern** gearbeitet.*" },
    { h: "Partizip II nasıl yapılır?" },
    { p: "**Düzenli fiillerde** kalıp hep aynıdır: **ge- + kök + -t**. **Düzensiz fiillerde** Partizip **-en** ile biter ve kökteki sesli harf çoğu zaman değişir – bunlar artikel gibi ezberlenir." },
    { table: { head: ["Grup", "Kalıp", "Örnekler"], rows: [
      ["düzenli", "ge + kök + **t**", "machen → **gemacht**, kaufen → **gekauft**, kochen → **gekocht**, wohnen → **gewohnt**, spielen → **gespielt**"],
      ["kökü -t / -d ile biten", "ge + kök + **et**", "arbeiten → **gearbeitet**, warten → **gewartet**, baden → **gebadet**"],
      ["düzensiz (sesli harf değişir)", "ge + yeni kök + **en**", "trinken → **getrunken**, schreiben → **geschrieben**, nehmen → **genommen**, helfen → **geholfen**, finden → **gefunden**, sprechen → **gesprochen**, gehen → **gegangen**, bleiben → **geblieben**, stehen → **gestanden**"],
      ["düzensiz (sesli harf aynı)", "ge + kök + **en**", "essen → **gegessen**, schlafen → **geschlafen**, sehen → **gesehen**, lesen → **gelesen**, fahren → **gefahren**, kommen → **gekommen**"],
      ["karışık", "ge + yeni kök + **t**", "bringen → **gebracht**, denken → **gedacht**, kennen → **gekannt**, wissen → **gewusst**"],
      ["ezberle", "", "sein → **gewesen**, haben → **gehabt**, werden → **geworden**"]
    ] } },
    { tip: "Yeni bir fiil öğrenirken onu hemen **Perfekt hâliyle** ezberle: *essen → hat gegessen*, *gehen → ist gegangen*. Sözlüklerde düzensiz fiillerin yanında bu biçim yazar." },
    { h: "haben mi, sein mı?" },
    { p: "Fiillerin büyük çoğunluğu **haben** ile kurulur. **sein** alan grup küçüktür ama çok sık kullanılır:" },
    { table: { head: ["sein alanlar", "Neden?", "Örnek"], rows: [
      ["gehen, kommen, fahren, fliegen, laufen, reisen", "bir yerden **başka bir yere** hareket", "Ich **bin** nach Hause **gegangen**."],
      ["werden, sterben (aufwachen, einschlafen → Perfekt II)", "**durum değişimi**", "Er **ist** Vater **geworden**."],
      ["sein, bleiben", "istisna – ezberle", "Wir **sind** zu Hause **geblieben**."]
    ] } },
    { p: "Geri kalan her şey **haben** alır: nesne alan fiiller (*kaufen, essen, sehen*), yer değiştirmeyen fiiller (*schlafen, arbeiten, wohnen, warten*) ve *haben* fiilinin kendisi (*ich habe … gehabt*)." },
    { warn: "Türkçede geçmiş zamanda yardımcı fiil yok (*yemek yedim*). Bu yüzden bazıları **sein**’ı “olmak” diye düşünüp *Ich bin gegessen* der – ✗. Bu cümle kulağa “Ben yenmiş durumdayım”, yani “biri beni yemiş” gibi gelir! Yemek, içmek, uyumak, çalışmak, beklemek → hep **haben**: *Ich **habe** gegessen.*" },
    { tip: "**fahren** iki türlü kullanılır: *Ich **bin** nach Bonn **gefahren**.* (bir yere gittim → sein) ama *Ich **habe** das neue Auto **gefahren**.* (arabayı sürdüm – nesne var → haben). Akkusativ nesne varsa → **haben**." },
    { p: "Not: Güney Almanya’da, Avusturya’da ve İsviçre’de *ich **bin** gesessen / gestanden / gelegen* de denir ve oralarda doğrudur. Almanya’nın büyük kısmında ise *ich **habe** gesessen / gestanden / gelegen* denir. İkisini de duyarsan şaşırma; kendin **haben** kullanman yeterli." },
    { h: "Türkçeyle karşılaştırma: -dı mı, -mış mı?" },
    { warn: "**Perfekt, Türkçedeki -mış’ın karşılığı değildir!** Okulda “-miş’li geçmiş” diye öğrenmiş olabilirsin, ama günlük konuşmada Perfekt **-dı**’nın karşılığıdır: *Ich habe gegessen* = yedim, *Ich bin gekommen* = geldim." },
    { p: "Türkçede *-mış* iki ayrı şey anlatır: **çıkarım** (izlerden anlıyorum) ve **duyum** (başkasından duydum). Almancada fiil zamanı aynı kalır – ikisi de Perfekt’tir. Farkı **ek kelimelerle** gösterirsin:" },
    { table: { head: ["Türkçe", "Ne demek?", "Almanca"], rows: [
      ["Ali eve gitti.", "kendim gördüm / biliyorum", "Ali ist nach Hause gegangen."],
      ["Ayakkabıları yok, Ali eve gitmiş.", "**çıkarım**: izlerden anlıyorum", "Ali ist **anscheinend** nach Hause gegangen. (anlaşılan)"],
      ["Ali eve gitmiş. (Komşu söyledi.)", "**duyum**: başkasından duydum", "**Der Nachbar sagt**, Ali ist nach Hause gegangen. / **Ich habe gehört**, Ali ist nach Hause gegangen."]
    ] } },
    { tip: "Duyduğuna pek inanmıyorsan **angeblich** (güya) dersin: *Ali ist **angeblich** krank gewesen.* (Güya hastaymış.)" },
    { tip: "Konuşmada Perfekt neredeyse her fiil için kullanılır. Yazıda (haber, hikâye) daha çok **Präteritum** görürsün. *sein, haben* ve modal fiillerde ise konuşmada da Präteritum tercih edilir: *Ich **war** müde.* → bkz. “Präteritum” konusu." },
    { ex: [
      ["Am Samstag habe ich lange geschlafen.", "Cumartesi uzun uzun uyudum."],
      ["Meine Schwester ist mit dem Bus zur Arbeit gefahren.", "Kız kardeşim işe otobüsle gitti."],
      ["Wir haben beim Arzt eine Stunde gewartet.", "Doktorda bir saat bekledik."],
      ["Was hast du am Wochenende gemacht?", "Hafta sonu ne yaptın?"],
      ["Ist dein Sohn gestern zu Hause geblieben?", "Oğlun dün evde kaldı mı?"]
    ] }
  ],
  exercises: [
    { id: "de-a2-03.1", t: "match", q: "Mastar ile Partizip II’yi eşleştir:", p: [["machen", "gemacht"], ["arbeiten", "gearbeitet"], ["trinken", "getrunken"], ["lesen", "gelesen"], ["bringen", "gebracht"]],
      e: "Düzenli: ge…**t** (gemacht). Kök -t ile bitiyorsa ge…**et** (gearbeitet). Düzensiz: ge…**en**, sesli harf çoğu zaman değişir (getrunken) ya da aynı kalır (gelesen). Karışık: değişen kök + **-t** (gebracht)." },
    { id: "de-a2-03.2", t: "gap", q: "Ich habe beim Bürgeramt eine Stunde ___. (warten)", a: ["gewartet"],
      wrong: { "gewartt": "Kök **wart-** zaten -t ile bitiyor; iki t yan yana söylenemez, araya **-e-** girer: gewart**et**.", "gewarten": "warten düzenli bir fiildir, Partizip’i **-t** ile biter: gewartet. -en sonu düzensiz fiiller içindir.", "wartet": "**ge-** eksik: **ge**wartet.", "warten": "Bu mastar. *habe* ile birlikte Partizip II gerekir: **gewartet**." },
      e: "warten → **gewartet**: ge + wart + **et**. Kökü -t ya da -d ile biten düzenli fiiller araya -e- alır: arbeiten → gearbeitet." },
    { id: "de-a2-03.3", t: "gap", q: "Wir haben an der Kasse lange ___. (stehen)", a: ["gestanden"],
      wrong: { "gestehen": "Dikkat: **gestehen** ayrı bir fiil ve “itiraf etmek” demek! stehen’in Partizip’i düzensizdir: **gestanden**.", "gesteht": "stehen düzensiz bir fiil; -t ile bitmez ve kökü değişir: **gestanden**.", "gestand": "*gestand* “itiraf etti” demek (gestehen’in Präteritum’u). stehen → **gestanden**.", "stehen": "Bu mastar. *haben* ile birlikte Partizip II gerekir: **gestanden**." },
      e: "stehen → **gestanden** (steh → stand, sonuna -en). Güneyde *Wir sind lange gestanden* de duyarsın; ikisi de doğru." },
    { id: "de-a2-03.4", t: "mc", q: "Perfekt’i **sein** ile kurulan fiil hangisi?", o: ["kaufen", "schlafen", "fahren", "essen"], a: 2,
      why: { 0: "kaufen nesne alır (*etwas kaufen*) → **hat** gekauft.", 1: "Uyurken yer değiştirmezsin → **hat** geschlafen.", 3: "essen nesne alır → **hat** gegessen. *Ich bin gegessen* Türkçe konuşanların en sık yaptığı hatalardandır!" },
      e: "**fahren** = bir yerden başka bir yere gitmek → *Ich **bin** nach Köln **gefahren**.* Hareket ve yer değişimi → **sein**." },
    { id: "de-a2-03.5", t: "gap", q: "Am Sonntag ___ wir lange geschlafen. (haben / sein)", a: ["haben"],
      wrong: { "sind": "Uyurken ne yer değiştiriyorsun ne de durumun değişiyor → **haben**.", "habe": "Özne **wir** → **haben** (*habe* ich içindir).", "hatten": "*hatten … geschlafen* başka bir zaman: “uyumuştuk” (Plusquamperfekt). Perfekt için: **haben**." },
      e: "schlafen → **hat geschlafen**. wir → *haben*: *Wir **haben** lange **geschlafen**.*" },
    { id: "de-a2-03.6", t: "gap", q: "Mein Vater ___ letzte Woche nach Izmir geflogen. (haben / sein)", a: ["ist"],
      wrong: { "hat": "fliegen = uçakla bir yerden başka bir yere gitmek → **sein**.", "sind": "Özne *mein Vater* = er → **ist**.", "war": "*war … geflogen* = “uçmuştu” (Plusquamperfekt). Perfekt için: **ist**.", "bin": "*bin* ich içindir. mein Vater = er → **ist**." },
      e: "Hareket, yer değişimi → **sein**: *Mein Vater **ist** nach Izmir **geflogen**.*" },
    { id: "de-a2-03.7", t: "gap", q: "Mein Kollege ___ im Mai Vater geworden. (haben / sein)", a: ["ist"],
      wrong: { "hat": "werden bir durum değişimidir (baba **oldu**) → **sein**: ist geworden.", "wurde": "*wurde* de “oldu” demek (Präteritum), ama cümlede zaten *geworden* var. İkisi birlikte olmaz → **ist** … geworden.", "war": "*war … geworden* = “olmuştu” (Plusquamperfekt). Burada Perfekt: **ist**." },
      e: "werden → **ist geworden**. Durum değişimi (biri baba oluyor, hasta oluyor, yaşlanıyor) → **sein**." },
    { id: "de-a2-03.8", t: "mc", q: "“Dün akşam pizza yedim.” Hangisi doğru?", o: ["Ich bin gestern Abend Pizza gegessen.", "Ich habe gestern Abend Pizza gegessen.", "Ich habe gestern Abend Pizza gegesst.", "Ich habe gegessen gestern Abend Pizza."], a: 1,
      why: { 0: "**essen** yer değişimi değil → **haben**. *Ich bin gegessen* “yenmiş durumdayım” (biri beni yemiş) gibi anlaşılır!", 2: "essen düzensiz bir fiil: *gegesst* diye bir şey yok → **gegessen**.", 3: "Partizip II en sona gider: … Pizza **gegessen**. Zaman ve nesne parantezin içine girer." },
      e: "*Ich **habe** gestern Abend Pizza **gegessen**.* – haben 2. sırada, Partizip en sonda." },
    { id: "de-a2-03.9", t: "match", q: "Eşleştir:", p: [["eve gittim", "ich bin nach Hause gegangen"], ["evde kaldım", "ich bin zu Hause geblieben"], ["uzun uyudum", "ich habe lange geschlafen"], ["çok çalıştım", "ich habe viel gearbeitet"], ["hasta oldum", "ich bin krank geworden"]],
      e: "Hareket (gegangen), kalmak (geblieben) ve durum değişimi (geworden) → **sein**. Uyumak ve çalışmak → **haben**. Dikkat: **nach Hause** = eve (nereye?), **zu Hause** = evde (nerede?)." },
    { id: "de-a2-03.10", t: "mc", q: "“Dün neredeydin?” Perfekt ile hangisi doğru?", o: ["Wo bist du gestern gewesen?", "Wo hast du gestern gewesen?", "Wo bist du gestern gewest?", "Wo warst du gestern gewesen?"], a: 0,
      why: { 1: "**sein** fiilinin Perfekt’i de **sein** ile kurulur: *ich bin gewesen*.", 2: "sein’ın Partizip’i düzensizdir: **gewesen**.", 3: "*warst … gewesen* “olmuştun” anlamında başka bir zamandır (Plusquamperfekt). Basitçe sormak için *Wo **bist** du gestern **gewesen**?* ya da daha kısa: *Wo **warst** du gestern?*" },
      e: "sein → **ist gewesen**. Günlük konuşmada Almanlar burada çoğunlukla Präteritum kullanır: *Wo warst du gestern?* (bkz. Präteritum konusu)." },
    { id: "de-a2-03.11", t: "mc", q: "Ali’nin ayakkabıları kapıda yok. “Ali eve gitmiş.” demek istiyorsun. Hangi cümle doğru?", o: ["Ali ist nach Hause gegangen.", "Ali hat nach Hause gegangen.", "Ali ist nach Hause gehen.", "Ali gegangen nach Hause."], a: 0,
      why: { 1: "gehen hareket bildirir → **sein**: ist gegangen.", 2: "Perfekt’te mastar değil **Partizip II** gerekir: gegangen.", 3: "Yardımcı fiil eksik ve sıra yanlış: *ist* 2. sırada, *gegangen* sonda." },
      e: "Almancada -dı / -mış ayrımı fiil zamanıyla yapılmaz: *Ali ist nach Hause gegangen* hem “gitti” hem “gitmiş” olabilir. Burada izlerden bir **çıkarım** yapıyorsun; bunu göstermek istersen **anscheinend** (anlaşılan) eklersin: *Ali ist anscheinend nach Hause gegangen.* Biri sana anlattıysa (**duyum**) başka türlü söylersin: *Der Nachbar sagt, Ali ist nach Hause gegangen.*" },
    { id: "de-a2-03.12", t: "order", q: "Cümleyi kur: “Hafta sonu ne yaptın?”", w: ["gemacht", "du", "Was", "am Wochenende", "hast"], a: ["Was hast du am Wochenende gemacht"],
      e: "Soru kelimesi (**Was**) 1. sırada, **hast** 2. sırada, Partizip **gemacht** en sonda. Zaman (*am Wochenende*) parantezin içine girer." },
    { id: "de-a2-03.13", t: "order", q: "Cümleyi kur – **Gestern** ile başla: “Dün kız kardeşim bize geldi.”", w: ["ist", "Gestern", "gekommen", "meine Schwester", "zu uns"], a: ["Gestern ist meine Schwester zu uns gekommen"],
      e: "1. sırada *Gestern* varsa özne fiilin **arkasına** geçer: Gestern **ist meine Schwester** … Fiil 2. sırada kalır, Partizip yine sonda. ✗ *Gestern meine Schwester ist …* – Türkçe sıralama burada işlemez." },
    { id: "de-a2-03.14", t: "order", q: "Cümleyi kur – **Ich** ile başla: “Dün akşam okula bir e-posta yazdım.”", w: ["eine E-Mail", "habe", "an die Schule", "Ich", "geschrieben", "gestern Abend"], a: ["Ich habe gestern Abend eine E-Mail an die Schule geschrieben", "Ich habe gestern Abend an die Schule eine E-Mail geschrieben"],
      e: "Ne kadar çok bilgi olursa olsun hepsi **habe** ile **geschrieben** arasına girer. Genelde önce zaman (*gestern Abend*) gelir. schreiben → **geschrieben** (düzensiz)." },
    { id: "de-a2-03.15", t: "listen", say: "Wir sind am Samstag zu Hause geblieben.", q: "Dinle. Ne anlama geliyor?", o: ["Cumartesi evde kaldık.", "Cumartesi eve gittik.", "Cumartesi evde kalacağız.", "Cumartesi evi temizledik."], a: 0,
      why: { 1: "“Eve gittik” = *Wir sind nach Hause gegangen.* Duyduğun **zu Hause** (evde) ve **geblieben** (kaldık) idi.", 2: "*sind … geblieben* geçmiştir. Gelecek olsaydı *Wir bleiben am Samstag zu Hause* duyardın.", 3: "Temizlemek *putzen* olurdu: *Wir haben geputzt.* Duyduğun fiil **geblieben** (bleiben)." },
      e: "bleiben → **ist geblieben**. bleiben’de yer değişmez ama yine de **sein** alır – ezberlenecek bir istisna." },
    { id: "de-a2-03.16", t: "dictation", say: "Ich habe heute lange gearbeitet.", a: ["Ich habe heute lange gearbeitet.", "Ich hab heute lange gearbeitet."],
      wrong: { "Ich habe heute lange gearbeit": "Kök **arbeit-** -t ile bitiyor, sonuna **-et** gelir: gearbeit**et**.", "Ich habe heute lange arbeitet": "**ge-** eksik: **ge**arbeitet.", "Ich habe heute lange gearbeiten": "arbeiten düzenli bir fiil; Partizip -en ile değil **-et** ile biter: gearbeitet.", "Ich bin heute lange gearbeitet": "Çalışırken yer değiştirmiyorsun → **haben**: *Ich habe … gearbeitet.*" },
      e: "arbeiten → **gearbeitet**: kök -t ile bittiği için araya -e- girer. Hece hece: ge-ar-bei-tet. *Ich hab …* yazdıysan o da kabul: konuşmada **hab** çok yaygındır, resmî yazıda ise **habe** yaz." },
    { id: "de-a2-03.17", t: "speak", say: "Wir sind am Wochenende ans Meer gefahren.",
      e: "**gefahren**: ge- kısa ve vurgusuz, vurgu ortada: ge-**FAA**-ren; h okunmaz, sadece a’yı uzatır. **Wochenende**: o’dan sonra ch gırtlaktan gelir – “ç” deme. **Meer** = “meea”: e uzun, sondaki r neredeyse duyulmaz. **sind** = “zint”." },
    { id: "de-a2-03.18", t: "speak", say: "Hast du schon etwas gegessen?",
      e: "**gegessen**: iki g de Türkçedeki **g** gibi okunur (ğ gibi değil); vurgu ortada: ge-**GES**-sen. **Hast**: baştaki h nefes gibi net duyulur. **etwas** = “etvas” (w = v). Evet/hayır sorusu → ses sonda yükselir." }
  ]
});

/* ---------- Perfekt II: trennbare, untrennbare & -ieren-Verben ---------- */
K.add('de-a2-11', {
  lesson: [
    { p: "Perfekt I’de temel kalıbı öğrendin: **ge-** + kök + **-t / -en**. Ama Almancada çok sık kullanılan fiillerin bir kısmının başında bir ön ek vardır. Ön ekin türüne göre **ge-** ya ortaya girer ya da hiç gelmez. Bir de **-ieren** ile biten fiiller var – onlar da ge- almaz." },
    { table: { head: ["Fiil türü", "Kural", "Örnekler"], rows: [
      ["**ayrılabilen** (trennbar): an-, auf-, aus-, ein-, mit-, ab-, zu-, um-, fern-, zurück- …", "ön ek + **ge** + kök + t / en", "einkaufen → ein**ge**kauft, abholen → ab**ge**holt, aufräumen → auf**ge**räumt, anrufen → an**ge**rufen, aufstehen → auf**ge**standen, mitbringen → mit**ge**bracht, fernsehen → fern**ge**sehen"],
      ["**ayrılamayan** (untrennbar): be-, ver-, er-, ent-, emp-, ge-, zer-", "**ge- yok**: kök + t / en", "bezahlen → bezahlt, besuchen → besucht, erklären → erklärt, erzählen → erzählt, verstehen → verstanden, verlieren → verloren, vergessen → vergessen, bekommen → bekommen"],
      ["**-ieren** ile bitenler", "**ge- yok**: kök + **t**", "telefonieren → telefoniert, reparieren → repariert, studieren → studiert, fotografieren → fotografiert, passieren → passiert"]
    ] } },
    { tip: "Kulak ipucu – **vurgu**: Vurgu kelimenin başındaysa ge- vardır (**MA**chen → gemacht, **AUF**stehen → aufgestanden). Vurgu başta değilse ge- yoktur (be**ZAH**len → bezahlt, telefo**NIE**ren → telefoniert). Fiili yüksek sesle söyle, kulağın sana yolu gösterir." },
    { warn: "Türkçe konuşanların en sık hataları: ✗ *geaufstanden* → ✓ **aufgestanden** · ✗ *aufgestehen* → ✓ **aufgestanden** · ✗ *gebezahlt* → ✓ **bezahlt** · ✗ *getelefoniert* → ✓ **telefoniert**. Bir de: *vergessen, bekommen* gibi fiillerin Partizip’i mastarla **aynıdır** – yanlış yazmadın, doğrusu bu." },
    { h: "haben mi, sein mı? – Kural değişmiyor" },
    { p: "Ön ek kuralı değiştirmez: hareket ve durum değişimi → **sein**, geri kalan → **haben**." },
    { table: { head: ["sein", "haben"], rows: [
      ["*ankommen* – Der Zug **ist** angekommen. (tren geldi)", "*einkaufen* – Ich **habe** eingekauft. (alışveriş yaptım)"],
      ["*aufstehen* – Ich **bin** früh aufgestanden. (erken kalktım)", "*anrufen* – Sie **hat** mich angerufen. (beni aradı)"],
      ["*einschlafen* – Das Kind **ist** eingeschlafen. (çocuk uyudu, uykuya daldı)", "*bezahlen* – Wir **haben** bezahlt. (ödedik)"],
      ["*umziehen* – Wir **sind** umgezogen. (taşındık)", "*telefonieren* – Er **hat** telefoniert. (telefonda konuştu)"],
      ["*passieren* – Was **ist** passiert? (ne oldu?)", "*verstehen* – Ich **habe** das nicht verstanden. (anlamadım)"]
    ] } },
    { tip: "**einschlafen** (uykuya dalmak) durum değişimidir → sein; **schlafen** (uyumak) ise → haben: *Ich **bin** um elf **eingeschlafen** und **habe** acht Stunden **geschlafen**.*" },
    { h: "Cümledeki yeri" },
    { p: "Şimdiki zamanda ayrılabilen ön ek ayrılıp sona gider: *Ich **rufe** dich **an**.* Perfekt’te ise ön ek Partizip’e yapışır ve onunla birlikte sona gider: *Ich **habe** dich **angerufen**.*" },
    { table: { head: ["Zaman", "1.", "2. sıra", "orta kısım", "son"], rows: [
      ["Präsens", "Ich", "**kaufe**", "heute im Supermarkt", "**ein**."],
      ["Perfekt", "Ich", "**habe**", "heute im Supermarkt", "**eingekauft**."],
      ["Präsens", "Wir", "**bezahlen**", "die Rechnung morgen.", "–"],
      ["Perfekt", "Wir", "**haben**", "die Rechnung noch nicht", "**bezahlt**."]
    ] } },
    { warn: "**nicht** Partizip’in önüne gelir: *Ich habe den Brief **nicht verstanden**.* ✗ *Ich habe nicht den Brief verstanden* – bu “mektubu değil (başka bir şeyi) anladım” gibi anlaşılır." },
    { ex: [
      ["Der Zug ist pünktlich angekommen.", "Tren zamanında geldi."],
      ["Ich habe meinen Schlüssel verloren.", "Anahtarımı kaybettim."],
      ["Wir sind im Sommer nach Köln umgezogen.", "Yazın Köln’e taşındık."],
      ["Hast du schon mit dem Vermieter telefoniert?", "Ev sahibiyle telefonda konuştun mu?"],
      ["Was ist passiert?", "Ne oldu?"]
    ] }
  ],
  exercises: [
    { id: "de-a2-11.1", t: "mc", q: "Hangi fiilin Partizip II’sinde **ge-** yoktur?", o: ["einkaufen", "reparieren", "abholen", "aufräumen"], a: 1,
      why: { 0: "einkaufen ayrılabilen bir fiil: ge- ön ek ile kökün arasına girer → ein**ge**kauft.", 2: "abholen ayrılabilir → ab**ge**holt.", 3: "aufräumen ayrılabilir → auf**ge**räumt." },
      e: "**-ieren** ile biten fiiller hiçbir zaman ge- almaz: *Der Mechaniker hat das Auto **repariert**.*" },
    { id: "de-a2-11.2", t: "gap", q: "Mein Sohn ist heute zu spät ___. (aufstehen)", a: ["aufgestanden"],
      wrong: { "geaufstanden": "ge- en başa gelmez; ön ek (auf) ile kökün **arasına** girer: auf-**ge**-standen.", "aufgestehen": "stehen düzensizdir: steh → **stand**, sonu -en → auf**gestanden**. (*gestehen* ise “itiraf etmek” demek!)", "aufgesteht": "stehen düzensiz bir fiil; -t ile bitmez: auf**gestanden**.", "aufstehen": "Bu mastar. *ist* ile birlikte Partizip II gerekir: **aufgestanden**.", "aufgestandet": "Düzensiz Partizip -en ile biter, sonuna -t eklenmez: **aufgestanden**." },
      e: "**auf** + **ge** + **standen** = aufgestanden. Yataktan kalkmak bir durum değişimidir → **sein**: *ist aufgestanden*." },
    { id: "de-a2-11.3", t: "gap", q: "Hast du die Arztpraxis schon ___? (anrufen)", a: ["angerufen"],
      wrong: { "geanrufen": "ge- başa değil, ortaya girer: an-**ge**-rufen.", "angeruft": "rufen düzensiz bir fiildir: gerufen → an**gerufen**.", "anrufen": "Bu mastar. *hast* ile birlikte Partizip II gerekir: **angerufen**.", "angerufet": "rufen düzensizdir, Partizip -en ile biter: **angerufen**." },
      e: "anrufen → **hat angerufen**: an + ge + rufen. Telefonla aramak bir hareket değildir → haben." },
    { id: "de-a2-11.4", t: "gap", q: "Wir haben die Miete schon ___. (bezahlen)", a: ["bezahlt"],
      wrong: { "gebezahlt": "**be-** ayrılamayan bir ön ektir; bu fiiller **ge-** almaz: bezahlt.", "bezahlen": "Bu mastar; burada Partizip II gerekir: **bezahlt**.", "bezahlet": "Kök -t / -d ile bitmiyor, araya -e- girmez: **bezahlt**.", "begezahlt": "Ayrılamayan ön ekte ge- ortaya da girmez: **bezahlt**." },
      e: "be-, ver-, er-, ent-, emp-, ge-, zer- ile başlayan fiiller ge- almaz: bezahlen → **bezahlt**. Vurgu ikinci hecede: be**ZAH**len." },
    { id: "de-a2-11.5", t: "gap", q: "Ich habe gestern eine Stunde mit meiner Tante ___. (telefonieren)", a: ["telefoniert"],
      wrong: { "getelefoniert": "-ieren ile biten fiiller **ge-** almaz: **telefoniert**.", "telefonieren": "Bu mastar; Partizip II: **telefoniert**.", "telefonierte": "*telefonierte* Präteritum’dur (yazı dili). *habe* ile birlikte Partizip gerekir: **telefoniert**." },
      e: "Vurgu **-NIE-** hecesinde: telefo**NIERT**. Başta vurgu yok → ge- de yok. Yardımcı fiil: **haben**." },
    { id: "de-a2-11.6", t: "gap", q: "Entschuldigung, ich habe den Termin ___. (vergessen)", a: ["vergessen"],
      wrong: { "gevergessen": "**ver-** ayrılamaz → ge- yok.", "vergesst": "vergessen düzensiz bir fiil; Partizip -en ile biter: **vergessen**.", "vergaß": "*vergaß* Präteritum’dur (yazı dili). *habe* ile Partizip gerekir: **vergessen**.", "vergass": "*vergass / vergaß* Präteritum’dur. *habe* ile Partizip gerekir: **vergessen**." },
      e: "vergessen → **vergessen**: Partizip mastarla aynı görünür! bekommen → bekommen de öyle. Yani doğru cevap mastarla aynı – şaşırma." },
    { id: "de-a2-11.7", t: "gap", q: "Die Ärztin hat mir alles gut ___. (erklären)", a: ["erklärt"],
      wrong: { "geerklärt": "**er-** ayrılamaz → ge- yok: **erklärt**.", "erklären": "Bu mastar; Partizip II: **erklärt**.", "erkläret": "Kök -t / -d ile bitmiyor, araya -e- girmez: **erklärt**." },
      e: "erklären → **hat erklärt**. Vurgu ikinci hecede: er**KLÄ**ren → ge- yok." },
    { id: "de-a2-11.8", t: "match", q: "Mastar ile Partizip II’yi eşleştir:", p: [["einkaufen", "eingekauft"], ["besuchen", "besucht"], ["studieren", "studiert"], ["umziehen", "umgezogen"], ["verlieren", "verloren"]],
      e: "Ayrılabilen: ein**ge**kauft, um**ge**zogen – ge- ortada. Ayrılamayan: besucht, verloren – ge- yok. -ieren: studiert – ge- yok." },
    { id: "de-a2-11.9", t: "mc", q: "“Tren gecikmeli geldi.” Hangisi doğru?", o: ["Der Zug ist mit Verspätung angekommen.", "Der Zug hat mit Verspätung angekommen.", "Der Zug ist mit Verspätung geankommen.", "Der Zug ist mit Verspätung ankommen."], a: 0,
      why: { 1: "ankommen = bir yere varmak (hareket) → **sein**.", 2: "ge- başa değil ortaya girer: an**ge**kommen.", 3: "Perfekt’te mastar değil Partizip II gerekir: **angekommen**." },
      e: "*Der Zug **ist** mit Verspätung **angekommen**.* Varmak = hareket → sein; ayrılabilen fiil → an-**ge**-kommen." },
    { id: "de-a2-11.10", t: "mc", q: "“Ne oldu?” Almancada nasıl sorulur?", o: ["Was ist passiert?", "Was hat passiert?", "Was ist gepassiert?", "Was hat gepassiert?"], a: 0,
      why: { 1: "passieren (olmak, meydana gelmek) bir olaydır, durumu değiştirir → **sein**: ist passiert.", 2: "-ieren ile biten fiiller ge- almaz: **passiert**.", 3: "İki hata: passieren **sein** alır ve -ieren fiilleri ge- almaz." },
      e: "**Was ist passiert?** – kaza, kavga, bir sorun … günlük hayatın en sık sorularından. -ieren fiillerinin çoğu haben alır (*hat telefoniert*); passieren istisnadır: **ist passiert**." },
    { id: "de-a2-11.11", t: "match", q: "Cümleleri tamamla:", p: [["Ich habe meine Mutter", "angerufen."], ["Der Bus ist zehn Minuten zu spät", "angekommen."], ["Wir haben die Stromrechnung", "bezahlt."], ["Mein Bruder hat in Berlin Medizin", "studiert."], ["Das Baby ist sofort", "eingeschlafen."]],
      e: "Her cümlede yardımcı fiil 2. sırada, Partizip en sonda. *ist* alanlar hareket (angekommen) ve durum değişimi (eingeschlafen); diğerleri *haben*." },
    { id: "de-a2-11.12", t: "order", q: "Cümleyi kur: “Bugün saat altıda kalktım.”", w: ["aufgestanden", "heute", "Ich", "um sechs Uhr", "bin"], a: ["Ich bin heute um sechs Uhr aufgestanden", "Heute bin ich um sechs Uhr aufgestanden", "Um sechs Uhr bin ich heute aufgestanden"],
      e: "Şimdiki zamanda ön ek sona gider (*Ich stehe um sechs Uhr auf*). Perfekt’te ön ek Partizip’e yapışır ve onunla sona gider: **aufgestanden**. Kalkmak durum değişimi → **bin**." },
    { id: "de-a2-11.13", t: "order", q: "Cümleyi kur: “Dün akşam babanı ziyaret ettin mi?”", w: ["deinen Vater", "besucht", "Hast", "gestern Abend", "du"], a: ["Hast du gestern Abend deinen Vater besucht", "Hast du deinen Vater gestern Abend besucht"],
      e: "Evet/hayır sorusunda yardımcı fiil başa geçer (**Hast**), Partizip yine sonda (**besucht**). besuchen → be- ayrılamaz → ge- yok: **besucht**, *gebesucht* değil." },
    { id: "de-a2-11.14", t: "order", q: "Cümleyi kur: “Resmî daireden gelen mektubu anlamadım.”", w: ["nicht", "Ich", "verstanden", "den Brief vom Amt", "habe"], a: ["Ich habe den Brief vom Amt nicht verstanden", "Den Brief vom Amt habe ich nicht verstanden"],
      e: "**nicht** Partizip’in hemen önüne gelir: … nicht **verstanden**. verstehen → ver- ayrılamaz, stehen düzensiz → **verstanden**." },
    { id: "de-a2-11.15", t: "listen", say: "Wir sind letzten Monat umgezogen.", q: "Dinle. Ne anlama geliyor?", o: ["Geçen ay taşındık.", "Geçen ay üstümüzü değiştirdik.", "Gelecek ay taşınacağız.", "Geçen ay evi topladık."], a: 0,
      why: { 1: "“Üstümüzü değiştirdik” = *Wir haben uns umgezogen* (sich umziehen: **haben** + **uns**). Duyduğun **sind** … umgezogen idi → taşınmak.", 2: "**sind … umgezogen** geçmiştir; **letzten Monat** = geçen ay. Gelecek ay = *nächsten Monat*.", 3: "Toplamak, düzenlemek = *aufräumen*: *Wir haben aufgeräumt.*" },
      e: "**umziehen** (taşınmak) → *ist umgezogen*. Aynı fiil **sich umziehen** (üstünü değiştirmek) olunca *haben* alır: *Ich habe mich umgezogen.*" },
    { id: "de-a2-11.16", t: "dictation", say: "Ich habe gestern mit dem Vermieter telefoniert.", a: ["Ich habe gestern mit dem Vermieter telefoniert."],
      wrong: { "Ich habe gestern mit dem Vermieter getelefoniert": "-ieren ile biten fiiller ge- almaz: **telefoniert**.", "Ich habe gestern mit den Vermieter telefoniert": "**mit** her zaman Dativ ister: mit **dem** Vermieter.", "Ich habe gestern mit dem Fermieter telefoniert": "“fer” diye okunur ama ön ek **ver-** hep **v** ile yazılır: **Vermieter**.", "Ich bin gestern mit dem Vermieter telefoniert": "Telefonda konuşmak hareket değil → **haben**." },
      e: "telefonieren → **telefoniert** (ge- yok). **mit** + Dativ → mit **dem** Vermieter (ev sahibi)." },
    { id: "de-a2-11.17", t: "speak", say: "Der Zug ist pünktlich angekommen.",
      e: "**angekommen**: vurgu ön ekte: **AN**-ge-kom-men. **Zug** = “tsuuk”: z = ts, u uzun, sondaki g k gibi okunur. **pünktlich**: ü kısa, sondaki ch yumuşak – “pünktlih”, “pünktliç” değil." },
    { id: "de-a2-11.18", t: "speak", say: "Ich habe meinen Schlüssel verloren.",
      e: "**verloren**: ver- = “fer”, vurgu ortada: fer-**LOO**-ren. Başta vurgu yok → ge- de yok. **Schlüssel** = “şlüssel”: sch = ş, ü kısa. **meinen** = “maynen” (ei = ay)." }
  ]
});

/* ---------- Präteritum: war, hatte, es gab, Modalverben ---------- */
K.add('de-a2-04', {
  lesson: [
    { p: "Konuşmada geçmiş zaman için çoğunlukla Perfekt kullanılır. Ama birkaç çok sık fiilde Almanlar konuşurken de **Präteritum** kullanır: **sein → war**, **haben → hatte**, **es gibt → es gab** ve modal fiiller (**konnte, musste, wollte, durfte, sollte**). *Ich bin müde gewesen* ya da *Ich habe keine Zeit gehabt* yanlış değil ama kulağa ağır gelir; *Ich war müde*, *Ich hatte keine Zeit* çok daha doğaldır." },
    { table: { head: ["Kişi", "sein → war", "haben → hatte"], rows: [
      ["ich", "**war**", "**hatte**"],
      ["du", "warst", "hattest"],
      ["er / sie / es", "**war**", "**hatte**"],
      ["wir", "waren", "hatten"],
      ["ihr", "wart", "hattet"],
      ["sie / Sie", "waren", "hatten"]
    ] } },
    { tip: "**ich** ve **er/sie/es** biçimleri aynıdır ve ek almaz – modal fiillerin şimdiki zamanındaki gibi (*ich kann – er kann*): *ich war – er war*, *ich hatte – sie hatte*." },
    { h: "Modal fiiller" },
    { table: { head: ["Mastar", "ich / er / sie / es", "wir / sie / Sie", "Türkçe"], rows: [
      ["können", "**konnte**", "konnten", "-ebildim / -emedim"],
      ["müssen", "**musste**", "mussten", "-mak zorunda kaldım"],
      ["wollen", "**wollte**", "wollten", "istedim / -acaktım"],
      ["dürfen", "**durfte**", "durften", "-mam(a) izin vardı / yoktu (ör. *dışarı çıkmama izin yoktu*)"],
      ["sollen", "**sollte**", "sollten", "-mam gerekiyordu (başkası istedi)"],
      ["möchten", "**wollte** (!)", "wollten", "istedim"]
    ] } },
    { p: "Diğer kişiler: du konnte**st**, ihr konnte**t**. Cümle yapısı şimdiki zamanla aynı: modal fiil 2. sırada, mastar en sonda: *Ich **musste** gestern lange **arbeiten**.*" },
    { warn: "Präteritum’da **umlaut düşer**: können → **konnte**, müssen → **musste**, dürfen → **durfte**. *Ich **könnte*** (ö ile) bambaşka bir anlamdır: “-ebilirdim” (kibar rica, Konjunktiv II). *Ich konnte nicht kommen* = gelemedim · *Ich könnte morgen kommen* = yarın gelebilirim. Aynısı: hatte / **hätte**, war / **wäre**, musste / **müsste**." },
    { warn: "**möchten**’in geçmiş zamanı yoktur → **wollte**: *Ich wollte dich anrufen.* (Seni arayacaktım / aramak istedim.) *möchtete* diye bir kelime yok." },
    { h: "Ek fiilin geçmişi -(y)dı ve “vardı / yoktu”" },
    { p: "Türkçede iki ayrı “-dı” var. **Fiile** gelen -dı (*geldim, çalıştım*) Almancada **Perfekt**’tir (bkz. Perfekt I). **İsme, sıfata, yer bildiren kelimeye** gelen -(y)dı ise ek fiilin geçmiş zamanıdır: yorgun-**dum**, evde-**y**-**dim** → Almancada **war**." },
    { p: "*Vardı / yoktu* ise iki farklı şekilde çevrilir: birinin bir şeyi varsa (sahiplik) **hatte**, genel olarak bir şey varsa **es gab** (+ Akkusativ)." },
    { table: { head: ["Türkçe", "Almanca", "Neden?"], rows: [
      ["Yorgundum.", "Ich **war** müde.", "sıfat + ek fiil -(y)dı → sein"],
      ["Evdeydik.", "Wir **waren** zu Hause.", "yer + ek fiil -(y)dı → sein"],
      ["Arabam vardı.", "Ich **hatte** ein Auto.", "sahiplik → haben"],
      ["Vaktim yoktu.", "Ich **hatte** keine Zeit.", "sahiplik → haben + kein"],
      ["Çok insan vardı.", "Es **gab** viele Leute. / Es **waren** viele Leute da.", "genel varlık → es gibt"],
      ["Randevu kalmamıştı.", "Es **gab** keine Termine mehr.", "genel varlık + kein … mehr"]
    ] } },
    { warn: "✗ *Ich hatte krank* – “hastaydım” bir durumdur, sahiplik değil → ✓ **Ich war krank.** Ama: *Ich hatte Fieber.* (Ateşim vardı – ateş “sahip olunan” bir şey gibi.) ✗ *Es hatte viel Verkehr* → ✓ **Es gab viel Verkehr.** (*Es hat* İsviçre’de ve güneyde duyulur, standart değildir.)" },
    { tip: "Mazeret bildirirken (iş, kurs, doktor) en doğal kalıp: **Entschuldigung, ich konnte nicht kommen. Ich war krank.** Modal fiillerin Perfekt’i de var (*ich habe nicht kommen können*) ama konuşmada çok ağır kaçar – Präteritum kullan." },
    { tip: "Yazıda (haber, hikâye, mektup) Präteritum her fiilde yaygındır: *ging, kam, sagte* … Bunları şimdilik okurken tanıman yeterli; konuşurken diğer fiillerde Perfekt kullan." },
    { ex: [
      ["Gestern war ich beim Arzt.", "Dün doktordaydım."],
      ["Ich hatte leider keine Zeit.", "Maalesef vaktim yoktu."],
      ["Im Bürgeramt gab es keine Termine mehr.", "Bürgeramt’ta hiç randevu kalmamıştı."],
      ["Ich musste am Samstag arbeiten.", "Cumartesi çalışmak zorundaydım."],
      ["Als Kind wollte ich Pilot werden.", "Çocukken pilot olmak istiyordum."]
    ] }
  ],
  exercises: [
    { id: "de-a2-04.1", t: "match", q: "Şimdiki zaman → Präteritum:", p: [["ich bin", "ich war"], ["wir haben", "wir hatten"], ["es gibt", "es gab"], ["du kannst", "du konntest"], ["er muss", "er musste"], ["sie darf", "sie durfte"]],
      e: "Modal fiillerde Präteritum’da **umlaut düşer**: können → konnte, müssen → musste, dürfen → durfte. ich ve er/sie/es biçimleri ek almaz." },
    { id: "de-a2-04.2", t: "gap", q: "Letzte Woche ___ ich krank. (sein)", a: ["war"],
      wrong: { "bin": "*bin* şimdiki zamandır (hastayım). *Letzte Woche* → **war**.", "wurde": "*wurde* **werden**’in geçmişidir: *ich wurde krank* = hastalandım. İstenen fiil **sein**: war (hastaydım).", "waren": "*waren* wir/sie/Sie içindir; ich → **war**.", "hatte": "Türkçe “hastaydım” bir durumdur, sahiplik değil → **sein**: war.", "wäre": "*wäre* (ä ile) Konjunktiv II’dir: “olsaydım”. Geçmiş zaman: **war**." },
      e: "*Letzte Woche **war** ich krank.* – sıfat + ek fiil -(y)dı (hasta-**y**-**dım**) → sein → **war**. *Letzte Woche* 1. sırada, bu yüzden fiil 2. sırada, özne arkasında." },
    { id: "de-a2-04.3", t: "gap", q: "Wir ___ am Wochenende leider keine Zeit. (haben – geçmiş zaman)", a: ["hatten"],
      wrong: { "haben": "Bu şimdiki zaman. Geçmiş: **hatten**.", "hatte": "*hatte* ich ve er/sie/es içindir. wir → **hatten**.", "hätten": "*hätten* (ä ile) Konjunktiv II’dir: “olsaydı / olurdu”. Geçmiş zaman için **a**: hatten.", "waren": "Türkçe “vaktimiz yoktu” → sahiplik = **haben**: hatten. sein değil." },
      e: "wir → **hatten**. *Zeit haben* = vakti olmak → *keine Zeit haben* = vakti olmamak." },
    { id: "de-a2-04.4", t: "gap", q: "Im Supermarkt ___ es keine Milch mehr. (es gibt – geçmiş zaman)", a: ["gab"],
      wrong: { "gibt": "Bu şimdiki zaman. Geçmiş: es **gab**.", "hatte": "Türkçede **var/yok** hem sahiplik (*param yoktu*) hem genel varlık (*süt yoktu*) için kullanılır. Almancada ikisi ayrılır: sahiplik → *hatte* (*Ich hatte keine Milch*), genel varlık → **es gab**.", "war": "*war* ile cümlenin sonunda *da* gerekirdi: *Es war keine Milch mehr da.* Bu cümlede kalıp **es gab**.", "gabt": "*gab* ek almaz: es **gab**." },
      e: "**es gibt → es gab** + Akkusativ: *Es gab keine Milch mehr.* = Süt kalmamıştı." },
    { id: "de-a2-04.5", t: "gap", q: "Ich ___ gestern nicht zum Deutschkurs kommen. Mein Kind war krank. (können)", a: ["konnte"],
      wrong: { "könnte": "**ö** ile *könnte* Konjunktiv II’dir: “gelebilirdim”. Geçmişte yapamadığını söylerken umlaut yok: **konnte**.", "kann": "Bu şimdiki zaman. *gestern* → **konnte**.", "konnten": "*konnten* wir/sie/Sie içindir; ich → **konnte**.", "konntet": "*konntet* ihr içindir; ich → **konnte**.", "konnt": "ich biçimi **-e** ile biter: konnt**e**." },
      e: "können → ich **konnte** (o, umlaut yok). Mastar (*kommen*) yine en sonda." },
    { id: "de-a2-04.6", t: "gap", q: "Meine Schwester ___ gestern lange im Büro bleiben. (müssen)", a: ["musste"],
      wrong: { "müsste": "**ü** ile *müsste* Konjunktiv II’dir (“kalması gerekirdi”). Geçmiş zaman: **musste** (umlaut yok).", "muss": "Bu şimdiki zaman; *gestern* → **musste**.", "mußte": "Eski yazım (1996 öncesi). Bugün kısa u’dan sonra **ss** yazılır: musste.", "mussten": "*mussten* çoğul içindir (wir/sie). meine Schwester = sie (tekil) → **musste**." },
      e: "müssen → sie **musste**. Modal fiil 2. sırada, mastar *bleiben* en sonda." },
    { id: "de-a2-04.7", t: "mc", q: "“Gelemedim, hastaydım.” Hangisi doğru ve doğal?", o: ["Ich konnte nicht kommen, ich war krank.", "Ich könnte nicht kommen, ich war krank.", "Ich konnte nicht kommen, ich hatte krank.", "Ich habe nicht kommen gekonnt, ich war krank."], a: 0,
      why: { 1: "*könnte* (ö) = “gelebilirdim”. Burada geçmiş: **konnte**.", 2: "Türkçe “hastaydım” → sein: **ich war krank**. *Ich hatte krank* olmaz (ama: *Ich hatte Fieber* = ateşim vardı).", 3: "Modal fiilin Perfekt’i *habe … kommen können* olur, *gekonnt* değil – ve konuşmada çok ağır kaçar. Doğal olan: **Ich konnte nicht kommen.**" },
      e: "Mazeret söylemenin en doğal yolu: **Ich konnte nicht kommen, ich war krank.** İşte, kursta, doktorda çok işine yarar." },
    { id: "de-a2-04.8", t: "mc", q: "“Dün çok trafik vardı.” Hangisi doğru?", o: ["Gestern gab es viel Verkehr.", "Gestern hatte es viel Verkehr.", "Gestern gibt es viel Verkehr.", "Gestern es gab viel Verkehr."], a: 0,
      why: { 1: "Standart Almancada genel varlık **es gibt / es gab** ile söylenir. *Es hat* İsviçre’de ve güneyde duyulur ama standart değil.", 2: "*gibt* şimdiki zaman; *gestern* → **gab**.", 3: "*Gestern es gab* Türkçedeki sıralamaya benziyor; Almancada fiil 2. sırada: Gestern **gab** es …" },
      e: "**es gibt → es gab**: *Gestern gab es viel Verkehr.* Aynı anlamda *Gestern war viel Verkehr.* da çok yaygındır." },
    { id: "de-a2-04.9", t: "mc", q: "“Seni aramak istedim ama vaktim olmadı.” → Ich ___ dich anrufen, aber ich hatte keine Zeit.", o: ["wollte", "möchtete", "möchte", "will"], a: 0,
      why: { 1: "möchten’in geçmiş zamanı yoktur; *möchtete* diye bir kelime yok. Geçmişte istek → **wollte**.", 2: "*möchte* şimdiki zamandır (istiyorum). Cümlenin ikinci yarısı geçmişte (*hatte*) → **wollte**.", 3: "*will* şimdiki zamandır. Geçmiş: **wollte**." },
      e: "**möchten / wollen → wollte**. *Ich wollte dich anrufen* Türkçedeki “seni arayacaktım” (planladım ama olmadı) anlamını da verir." },
    { id: "de-a2-04.10", t: "match", q: "Eşleştir:", p: [["evdeydim", "ich war zu Hause"], ["param yoktu", "ich hatte kein Geld"], ["hiç randevu yoktu", "es gab keinen Termin"], ["gitmek zorundaydım", "ich musste gehen"], ["gelmek istedim", "ich wollte kommen"]],
      e: "Türkçedeki “vardı / yoktu” iki şekilde çevrilir: birinin bir şeyi varsa **hatte** (param yoktu), genel olarak bir şey varsa **es gab** (randevu yoktu). İsim/yer + ek fiil -(y)dı (evde-**y**-**dim**) → **war**. Fiildeki -dı (*geldim*) ise Perfekt olur." },
    { id: "de-a2-04.11", t: "order", q: "Cümleyi kur: “Cumartesi çalışmak zorundaydım.”", w: ["arbeiten", "am Samstag", "musste", "Ich"], a: ["Ich musste am Samstag arbeiten", "Am Samstag musste ich arbeiten"],
      e: "Şimdiki zamandaki gibi: modal fiil (**musste**) 2. sırada, mastar (**arbeiten**) en sonda. Sadece modal fiil geçmişe geçer." },
    { id: "de-a2-04.12", t: "order", q: "Cümleyi kur – **Leider** ile başla: “Maalesef dün gelemedim.”", w: ["kommen", "ich", "Leider", "nicht", "konnte", "gestern"], a: ["Leider konnte ich gestern nicht kommen"],
      e: "*Leider* 1. sırada → fiil 2. sırada (**konnte**), özne arkasında (**ich**). **nicht** mastarın önünde, mastar en sonda." },
    { id: "de-a2-04.13", t: "order", q: "Cümleyi kur: “Dün doktorda mıydın?”", w: ["beim Arzt", "du", "gestern", "Warst"], a: ["Warst du gestern beim Arzt"],
      e: "Evet/hayır sorusu: fiil başta. du → **warst** (-st). “Doktorda” = **beim Arzt** (bei + dem)." },
    { id: "de-a2-04.14", t: "listen", say: "Wir konnten leider nicht kommen.", q: "Ne duydun?", o: ["Wir konnten leider nicht kommen.", "Wir könnten leider nicht kommen.", "Wir können leider nicht kommen.", "Wir kommen leider nicht."], a: 0,
      why: { 1: "*könnten*’de **ö** sesi var (dudaklar yuvarlak). Duyduğun açık bir **o** idi: konnten. Anlam da farklı: könnten = gelebilirdik.", 2: "*können* şimdiki zamandır: ö sesi var ve ortada **-t-** yok. Duyduğun **konnten**.", 3: "Cümlede modal fiil var: **konnten** … kommen." },
      e: "**konnten** = -ebildik / -emedik (geçmiş). **könnten** = -ebilirdik (kibar ya da varsayım). Tek fark o ↔ ö – söylerken dudaklarına dikkat et." },
    { id: "de-a2-04.15", t: "listen", say: "Am Montag hatte ich einen Termin beim Zahnarzt.", q: "Dinle. Ne anlama geliyor?", o: ["Pazartesi diş hekiminde randevum vardı.", "Pazartesi diş hekiminde randevum var.", "Pazartesi diş hekimine gitmek istedim.", "Pazartesi diş hekiminde randevum yoktu."], a: 0,
      why: { 1: "**hatte** geçmiştir (vardı). Şimdiki zaman olsaydı *habe* duyardın.", 2: "İstemek = *wollte*. Duyduğun **hatte** … einen Termin idi.", 3: "Olumsuz olsaydı *keinen Termin* duyardın; duyduğun **einen Termin**." },
      e: "**hatte** = vardı (sahiplik). *einen Termin haben* = randevusu olmak. **Zahnarzt** = diş hekimi (z = ts: “tsaan-artst”)." },
    { id: "de-a2-04.16", t: "dictation", say: "Wir waren am Wochenende bei meinen Eltern.", a: ["Wir waren am Wochenende bei meinen Eltern."],
      wrong: { "Wir waren am Wochenende bei meine Eltern": "**bei** her zaman Dativ ister; çoğulda Dativ **-n** alır: bei mein**en** Eltern.", "Wir waren am Wochenende bei meinem Eltern": "*meinem* tekil (eril/nötr) Dativ’dir. Eltern çoğul → **meinen**.", "Wir wahren am Wochenende bei meinen Eltern": "sein’ın geçmişi **waren** h’siz yazılır. *wahren* başka bir fiildir (korumak).", "Wir wären am Wochenende bei meinen Eltern": "*wären* (ä) Konjunktiv II’dir: “olurduk”. Duyduğun açık **a**: waren." },
      e: "wir → **waren**. **bei** + Dativ → çoğulda **meinen Eltern**. *am Wochenende* = hafta sonu." },
    { id: "de-a2-04.17", t: "speak", say: "Ich hatte gestern leider keine Zeit.",
      e: "**hatte**: h net duyulur, a kısa, tt sert. Dikkat: **hätte** (ä) başka anlamdır (“olsaydı”). **leider** = “layda”, **keine** = “kayne” (ei = ay). **Zeit** = “tsayt”: z her zaman ts okunur." },
    { id: "de-a2-04.18", t: "speak", say: "Wir mussten lange warten.",
      e: "**mussten**: u kısa, ss sert s. **ü** ile söylersen (*müssten*) anlam değişir: “beklememiz gerekirdi”. **warten** = “vaatın”: w = v, a’dan sonraki r çok hafif. **lange**: ng genizden gelen tek bir sestir, g ayrıca okunmaz." }
  ]
});

/* ---------- Paket 2: Imperativ, Dativ, Verben mit Dativ ---------- */

/* ---------- Imperativ: du / ihr / Sie ---------- */
K.add('de-a2-10', {
  lesson: [
    { p: "**Imperativ** (emir kipi), birine bir şey yapmasını söylediğin kalıptır: *Gel!*, *Bekleyin!*, *Oturun lütfen.* Almancada **üç muhatap** olduğu için **üç biçim** vardır: **du** (tek kişi, samimi), **ihr** (birkaç kişi, samimi) ve **Sie** (nezaket, tek ya da çok kişi). Cümle hep **fiille başlar**." },
    { table: { head: ["Mastar", "du", "ihr", "Sie"], rows: [
      ["machen", "**Mach** das!", "**Macht** das!", "**Machen Sie** das!"],
      ["warten", "**Warte** kurz!", "**Wartet** kurz!", "**Warten Sie** kurz!"],
      ["kommen", "**Komm** her!", "**Kommt** her!", "**Kommen Sie** her!"],
      ["fahren", "**Fahr** vorsichtig!", "**Fahrt** vorsichtig!", "**Fahren Sie** vorsichtig!"],
      ["nehmen", "**Nimm** die Tabletten!", "**Nehmt** die Tabletten!", "**Nehmen Sie** die Tabletten!"],
      ["lesen", "**Lies** den Brief!", "**Lest** den Brief!", "**Lesen Sie** den Brief!"],
      ["helfen", "**Hilf** mir!", "**Helft** mir!", "**Helfen Sie** mir!"],
      ["sein", "**Sei** leise!", "**Seid** leise!", "**Seien Sie** leise!"]
    ] } },
    { h: "Biçimler nasıl yapılır?" },
    { p: "**ihr**: Şimdiki zamandaki *ihr* biçimiyle aynıdır, sadece *ihr* kelimesi düşer: *ihr kommt* → **Kommt!** **Sie**: Mastar + **Sie**; fiil başta, *Sie* hemen arkasında: *Kommen **Sie**!* **du**: Kök, çoğu zaman **-e** olmadan: *komm*, *mach*, *geh*. Kök **-t, -d** ya da **-n/-m** ile biten ünsüz kümesine varıyorsa **-e** eklenir: *Warte!*, *Arbeite!*, *Öffne!*, *Atme!*" },
    { p: "Kökte **e → i / ie** olan fiiller *du*-Imperativ’de de değişir: *nehmen → **Nimm***, *sprechen → **Sprich***, *helfen → **Hilf***, *lesen → **Lies***, *geben → **Gib***. **a → ä** olan fiiller değişmez: *fahren → **Fahr***, *schlafen → **Schlaf*** (✗ *Fähr!*)." },
    { tip: "Nezaket için Almancada Türkçedeki *-(y)iniz / buyurun* gibi ekler yoktur. Bunun yerine **Sie**-biçimi ve **bitte** kullanırsın: *Setzen Sie sich bitte.* (Oturun lütfen.) Tanımadığın biri, doktor, memur, patron → hep **Sie**." },
    { h: "Ayrılabilen fiiller" },
    { p: "Ayrılabilen fiillerde **ön ek** (an-, auf-, aus-, mit-, zu- …) cümlenin **en sonuna** gider; fiil kökü başta kalır:" },
    { table: { head: ["Mastar", "du", "ihr", "Sie"], rows: [
      ["aufstehen", "**Steh** um sieben **auf**!", "**Steht** um sieben **auf**!", "**Stehen Sie** um sieben **auf**!"],
      ["anrufen", "**Ruf** mich **an**!", "**Ruft** mich **an**!", "**Rufen Sie** mich **an**!"],
      ["ausfüllen", "**Füll** das Formular **aus**!", "**Füllt** das Formular **aus**!", "**Füllen Sie** das Formular **aus**!"],
      ["mitkommen", "**Komm** doch **mit**!", "**Kommt** doch **mit**!", "**Kommen Sie** doch **mit**!"]
    ] } },
    { h: "sein, nicht, bitte, mal, doch" },
    { p: "**sein** düzensizdir – ezberle: **Sei!** (du), **Seid!** (ihr), **Seien Sie!** (Sie). *Bist du leise!* ✗ – *Sei leise!* ✓. Olumsuz emirde **nicht** genelde sona gider: *Vergiss den Schlüssel **nicht**!* *Rauchen Sie hier **nicht**!*" },
    { p: "Emir tek başına sert gelebilir. Üç küçük kelime tonu yumuşatır:" },
    { table: { head: ["Kelime", "Etkisi", "Örnek"], rows: [
      ["**bitte**", "nazik, “lütfen”", "Warten Sie **bitte** einen Moment."],
      ["**mal**", "“bir…”, rahat, hafif", "Komm **mal** her. (Bir gel.)"],
      ["**doch**", "ısrar / cesaretlendirme: “hadi, gel de…”", "Komm **doch** mit! (Hadi sen de gel!)"]
    ] } },
    { tip: "Birlikte bir şey yapmayı önermek için (Türkçedeki *-elim / -alım* gibi) **wir**-biçimini kullanırsın: *Gehen wir!* (Gidelim!), *Fangen wir an!* (Başlayalım!) ya da *Lass uns gehen!*" },
    { warn: "Türkçede emir kipi ekle yapılır (*gel, gelin*) ve özne yoktur. Almancada da **du/ihr’de özne yazılmaz** (*Komm!*), ama **Sie’de yazılır** ve fiilden **sonra** gelir (*Kommen **Sie**!*). Sık yapılan hatalar: ✗ *Du komm!* – ✗ *Sie kommen!* (emir değil, düz cümle: “Siz geliyorsunuz”) – ✗ *Nehm!* (doğrusu **Nimm!**) – ✗ *Aufsteh!* (ön ek sona gider: *Steh … auf!*). Bir de: emirde **ihr** kullanman gereken yerde (birkaç arkadaşa/çocuğa) *Sei!* demek – ✗. Çoğul → **Seid!**" },
    { ex: [
      ["Nehmen Sie bitte Platz.", "Lütfen oturun."],
      ["Füll bitte das Formular aus.", "Lütfen formu doldur."],
      ["Seid bitte leise, das Baby schläft.", "Lütfen sessiz olun, bebek uyuyor."],
      ["Ruf mich später mal an.", "Beni sonra bir ara."],
      ["Vergiss den Termin nicht!", "Randevuyu unutma!"]
    ] }
  ],
  exercises: [
    { id: "de-a2-10.1", t: "match", q: "Mastar ile **du**-Imperativ’i eşleştir:", p: [["nehmen", "Nimm!"], ["lesen", "Lies!"], ["fahren", "Fahr!"], ["warten", "Warte!"], ["sein", "Sei!"]],
      e: "**e → i / ie** olanlar değişir (nimm, lies). **a → ä** olan *fahren* değişmez: Fahr! Kök -t ile biten *warten* **-e** alır: Warte! **sein** düzensizdir: Sei!" },
    { id: "de-a2-10.2", t: "gap", q: "Herr Weber, ___ Sie bitte hier Ihren Namen! (schreiben)", a: ["schreiben"],
      wrong: { "schreibt": "*schreibt* **ihr**-biçimidir (birkaç arkadaşa). Herr Weber’e **Sie** ile hitap edersin: Schreib**en** Sie.", "schreib": "*schreib* **du**-biçimidir. **Sie** ile mastar gerekir: schreiben Sie.", "schreibe": "*schreibe* “ben yazıyorum” demektir. Emirde **Sie** + mastar: schreiben Sie." },
      e: "Sie-Imperativ = **mastar + Sie**: *Schreiben Sie bitte hier Ihren Namen!* Fiil başta, *Sie* hemen arkasında." },
    { id: "de-a2-10.3", t: "gap", q: "Langsam, Tim! ___ nicht so schnell! (fahren, du)", a: ["Fahr", "Fahre"],
      wrong: { "Fähr": "**a → ä** değişimi sadece *du fährst* şimdiki zaman çekiminde olur; Imperativ’de **ä yok**: Fahr!", "Fährst": "-st eki Imperativ’de düşer; *du fährst* düz cümledir. Emirde: Fahr!", "Fahren": "*Fahren* mastar ya da *Sie*-biçiminin başı (Fahren Sie!). Tim’e **du** ile: Fahr!" },
      e: "*fahren* → **Fahr!** (kök, ä yok). *Fahre!* de doğrudur ama konuşmada **Fahr!** çok daha yaygındır." },
    { id: "de-a2-10.4", t: "gap", q: "___ mir bitte mit den Koffern! (helfen, du)", a: ["Hilf"],
      wrong: { "Helf": "*helfen* kökte **e → i** yapar: *du hilfst* → **Hilf!**", "Helfe": "e → i değişimi Imperativ’de de geçerli: **Hilf!** Sonuna -e de gelmez.", "Hilfe": "*die Hilfe* “yardım” (isim) demektir. Emir: **Hilf!** (sonda -e yok).", "Hilfst": "-st eki Imperativ’de düşer: **Hilf!**" },
      e: "helfen → **Hilf!** Aynı değişim: nehmen → Nimm, sprechen → Sprich, lesen → Lies." },
    { id: "de-a2-10.5", t: "gap", q: "Kinder, ___ bitte um sieben auf! (aufstehen)", a: ["steht"],
      wrong: { "stehen": "*stehen* mastar ya da Sie-biçimi için (Stehen Sie auf!). Çocuklara (**ihr**) -t ile: steht.", "steh": "*steh* **du**-biçimidir. “Kinder” çoğul → **ihr**: steht.", "aufsteht": "Ayrılabilen fiilde ön ek **sona** gider; kök başta kalır: **steht** … **auf**." },
      e: "ihr-Imperativ = *ihr*’siz şimdiki zaman: *ihr steht auf* → **Steht** um sieben **auf**! Ön ek (*auf*) en sonda." },
    { id: "de-a2-10.6", t: "gap", q: "Kinder, ___ bitte leise! Der Opa schläft. (sein)", a: ["seid"],
      wrong: { "sei": "*sei* **du** içindir. Birkaç çocuğa **ihr**: seid.", "seien": "*seien* sadece **Sie**-biçimidir (Seien Sie leise!). Çocuklara: seid.", "seit": "*seit* (“-den beri”) başka bir kelimedir. Fiil **d** ile yazılır: seid.", "bist": "*bist* “sensin” demektir (du bist). Emirde: Seid leise!" },
      e: "sein → **Sei!** (du) – **Seid!** (ihr) – **Seien Sie!** (Sie). Üçünü de ezberle." },
    { id: "de-a2-10.7", t: "gap", q: "Ruf mich später bitte ___! (anrufen)", a: ["an"],
      wrong: { "anrufen": "Mastarı olduğu gibi yazma: ayrılabilen fiilde kök başta (*Ruf*), ön ek sonda: **an**.", "auf": "*aufrufen* başka bir fiildir (seslenmek). “Aramak” = **an**rufen." },
      e: "anrufen → **Ruf** mich **an**! Ön ek **an** cümlenin sonuna gider." },
    { id: "de-a2-10.8", t: "mc", q: "Postanede memur sana formu doldurmanı söylüyor. Hangi cümle **Sie**-Imperativ’dir?", o: ["Füllen Sie bitte das Formular aus.", "Sie füllen bitte das Formular aus.", "Füllen Sie bitte aus das Formular.", "Füll bitte das Formular aus."], a: 0,
      why: { 1: "Fiil 2. sırada → bu bir **düz cümle** (“Siz formu dolduruyorsunuz”). Emirde fiil **başta** olur.", 2: "Ön ek **aus** cümlenin sonuna gider, nesnenin önüne değil.", 3: "*Füll* **du**-biçimidir. Memura **Sie** ile hitap edersin." },
      e: "*Füllen Sie bitte das Formular aus.* – fiil başta, Sie arkasında, ön ek (*aus*) sonda." },
    { id: "de-a2-10.9", t: "mc", q: "Oğluna “Işığı kapat!” diyeceksin (**du**). Hangisi doğru?", o: ["Mach das Licht aus!", "Mach aus das Licht!", "Ausmach das Licht!", "Machst das Licht aus!"], a: 0,
      why: { 1: "Ön ek **aus** cümlenin en sonuna gider: Mach das Licht **aus**.", 2: "Ayrılabilen fiilde ön ek fiilin önünde durmaz; sonda: Mach … **aus**.", 3: "*machst* düz cümle çekimidir (du machst). Emirde **-st** düşer: Mach!" },
      e: "ausmachen → **Mach** das Licht **aus**! Kök başta, ön ek sonda." },
    { id: "de-a2-10.10", t: "mc", q: "Müdürün odasında bekleyen bir ziyaretçiye “Lütfen sakin olun.” diyeceksin. Hangisi doğru?", o: ["Sind Sie bitte ruhig!", "Seien Sie bitte ruhig!", "Sei Sie bitte ruhig!", "Seid Sie bitte ruhig!"], a: 1,
      why: { 0: "*Sind Sie …?* “Siz … misiniz?” diye **soru**dur, emir değil.", 2: "*Sei* **du** içindir; *Sie* ile yan yana gelmez.", 3: "*Seid* **ihr** içindir; *Sie* ile yan yana gelmez." },
      e: "Sie-Imperativ’de **sein** düzensizdir: **Seien Sie** … Sie-Imperativ’de *sind* değil **seien** kullanılır: *Seien Sie …*; *Sind Sie …?* ise soru olur." },
    { id: "de-a2-10.11", t: "mc", q: "Arkadaşını davet ediyorsun: “Hadi sen de gel!” Hangisi en doğal olanı?", o: ["Komm doch mit!", "Kommen Sie mit!", "Du kommst mit!", "Mit komm!"], a: 0,
      why: { 1: "Bu **Sie**-biçimi – arkadaşa değil, tanımadığın ya da saygı duyduğun birine söylenir.", 2: "*Du kommst mit.* “Sen geliyorsun” demektir; emir gibi, davet gibi değil, daha çok bir **karar** bildirir.", 3: "Ön ek **mit** sona gider ve cümle başında fiil olur: Komm … **mit**." },
      e: "**doch** daveti sıcak yapar: *Komm doch mit!* (Hadi gel!). Ayrılabilen fiil *mitkommen*: **Komm** … **mit**." },
    { id: "de-a2-10.12", t: "order", q: "Cümleyi kur: “Lütfen yarın bir daha arayın.” (Sie)", w: ["an", "Rufen", "Sie", "morgen", "bitte", "noch einmal"], a: ["Rufen Sie bitte morgen noch einmal an", "Rufen Sie morgen bitte noch einmal an"],
      e: "Fiil (**Rufen**) başta, **Sie** hemen arkasında, ön ek **an** en sonda. *bitte* ve zaman bilgisi ortada yer değiştirebilir." },
    { id: "de-a2-10.13", t: "order", q: "Cümleyi kur: “Lütfen odanı topla.” (du)", w: ["auf", "Räum", "dein Zimmer", "bitte"], a: ["Räum bitte dein Zimmer auf", "Räum dein Zimmer bitte auf"],
      e: "aufräumen → **Räum** … **auf**. *du*-Imperativ’de kök (*räum*) başta, *auf* sonda. Imperativ’de ön ek fiilin hemen yanında kalmaz, sona gider." },
    { id: "de-a2-10.14", t: "order", q: "Cümleyi kur: “Anahtarı unutma!” (du)", w: ["nicht", "Vergiss", "den Schlüssel"], a: ["Vergiss den Schlüssel nicht", "Vergiss nicht den Schlüssel"],
      e: "vergessen → **Vergiss!** (e → i). Olumsuz emirde **nicht** genelde en sona gider: Vergiss den Schlüssel **nicht**!" },
    { id: "de-a2-10.15", t: "listen", say: "Nehmen Sie die Tabletten dreimal am Tag.", q: "Dinle. Ne anlama geliyor?", o: ["Hapları günde üç kez alın.", "Hapları günde üç kez aldım.", "Hapları günde bir kez alın.", "Hapları almayın."], a: 0,
      why: { 1: "Geçmiş zaman olsaydı *Ich habe … genommen* duyardın. Fiil başta ve *Sie* arkasında → emir.", 2: "**dreimal** = üç kez. *einmal* bir kez olurdu.", 3: "Olumsuz olsaydı **nicht** duyardın: *Nehmen Sie die Tabletten nicht.*" },
      e: "**dreimal am Tag** = günde üç kez. Doktor ya da eczacıda en sık duyacağın emir kalıplarından: *Nehmen Sie …*" },
    { id: "de-a2-10.16", t: "dictation", say: "Seid bitte leise, die Nachbarn schlafen.", a: ["Seid bitte leise, die Nachbarn schlafen.", "Seid bitte leise die Nachbarn schlafen."],
      wrong: { "Seit bitte leise, die Nachbarn schlafen.": "*seit* (“-den beri”) başka bir kelimedir. sein’ın **ihr**-biçimi **d** ile yazılır: Seid.", "Sei bitte leise, die Nachbarn schlafen.": "*Sei* tek kişiye (**du**). Duyduğun cümlede **Seid** (birkaç kişi).", "Seien bitte leise, die Nachbarn schlafen.": "*Seien* ancak *Sie* ile birlikte olur: Seien Sie … Duyduğun: **Seid**." },
      e: "**Seid** [zayt]: sondaki d ünsüz t gibi okunur ama yazılışı **d**. **die Nachbarn** = komşular (çoğul); **schlafen** = uyumak." },
    { id: "de-a2-10.17", t: "speak", say: "Rufen Sie mich bitte morgen an.",
      e: "**Rufen** [RUU-fen]: u uzun. **Sie** = “zi” (s sesli z gibi); **bitte** = “bitte”, tt sert; **morgen** = “mor-gen”, r hafif. Ön ek **an** cümlenin sonunda net duyulsun." },
    { id: "de-a2-10.18", t: "speak", say: "Mach bitte die Tür zu.",
      e: "**Mach**: ch a’dan sonra gırtlaktan gelir – “maç” deme! **Tür** = ü uzun: dudaklarını “u” gibi yuvarlak tut, “i” de. **zu** = “tsu” (z = ts)." }
  ]
});

/* ---------- Dativ: Artikel, Pronomen, Präpositionen ---------- */
K.add('de-a2-01', {
  lesson: [
    { p: "Almancada isimler **4 hâlde** (Kasus) durur. A1’de **Nominativ** (kim?) ve **Akkusativ** (kimi? neyi?) öğrendin. **Dativ**, “**kime? / kimde? / kimden?**” sorusunu cevaplar: *Wem?* Türkçedeki **-e** hâlinin (kime? / nereye?) işlevini büyük ölçüde üstlenir; **-de / -den** hâlleri ise Almancada çoğunlukla **edatlarla** (*bei, aus, von*) karşılanır – bire bir değildir. Almancada hâl, ekle değil **artikelle** gösterilir." },
    { table: { head: ["", "der (eril)", "das (nötr)", "die (dişil)", "die (çoğul)"], rows: [
      ["Nominativ", "der Mann", "das Kind", "die Frau", "die Kinder"],
      ["Akkusativ", "den Mann", "das Kind", "die Frau", "die Kinder"],
      ["**Dativ**", "**dem** Mann", "**dem** Kind", "**der** Frau", "**den** Kinder**n**"],
      ["Dativ (ein-)", "**einem** Mann", "**einem** Kind", "**einer** Frau", "– Kinder**n**"],
      ["Dativ (mein-)", "**meinem** Bruder", "**meinem** Auto", "**meiner** Mutter", "**meinen** Eltern"]
    ] } },
    { tip: "Dativ’de **çoğul isme -n** eklenir: *den Kinder**n***, *mit meinen Freunde**n***. Zaten -n ile bitiyorsa (*Eltern*) ya da -s ile çoğul yapıyorsa (*die Autos*) ek gelmez." },
    { h: "Dativ zamirleri" },
    { table: { head: ["Nominativ", "Akkusativ", "**Dativ**", "Örnek"], rows: [
      ["ich", "mich", "**mir**", "Der Arzt hilft **mir**."],
      ["du", "dich", "**dir**", "Ich schreibe **dir** morgen."],
      ["er / es", "ihn / es", "**ihm**", "Ich arbeite gern mit **ihm**."],
      ["sie (tekil)", "sie", "**ihr**", "Ich gebe **ihr** den Schlüssel."],
      ["wir", "uns", "**uns**", "Das Amt schickt **uns** einen Brief."],
      ["ihr", "euch", "**euch**", "Ich danke **euch**."],
      ["sie (çoğul)", "sie", "**ihnen**", "Ich telefoniere mit **ihnen**."],
      ["Sie (nezaket)", "Sie", "**Ihnen**", "Kann ich **Ihnen** helfen?"]
    ] } },
    { h: "Dativ isteyen edatlar" },
    { p: "Bazı edatlardan sonra **her zaman Dativ** gelir. Bunları bir ezber dizisi gibi öğren: **aus – bei – mit – nach – seit – von – zu**." },
    { table: { head: ["Edat", "Anlamı", "Örnek"], rows: [
      ["**aus**", "-den (içinden), menşe", "Ich komme **aus der** Türkei."],
      ["**bei**", "-de (yanında, evinde, işyerinde)", "Er wohnt **bei seinen** Eltern. / **beim** Arzt"],
      ["**mit**", "ile; araçla", "Ich fahre **mit dem** Bus."],
      ["**nach**", "sonra; şehir/ülke/eve yönü", "**Nach dem** Kurs gehe ich **nach** Hause."],
      ["**seit**", "-den beri, -dir", "Ich wohne **seit einem** Jahr hier."],
      ["**von**", "-den, -in", "Das ist ein Brief **von der** Bank."],
      ["**zu**", "-e (kişiye/yere doğru)", "Ich gehe **zu meiner** Ärztin."]
    ] } },
    { p: "Bazı edatlar artikelle **birleşir**: **zu + dem = zum**, **zu + der = zur**, **bei + dem = beim**, **von + dem = vom**. Konuşmada neredeyse hep birleşik hâli duyarsın: *zum Arzt*, *zur Arbeit*, *beim Bäcker*, *vom Amt*." },
    { tip: "**nach** ve **zu** ikisi de “-e” demektir ama farklı kullanılır: **nach** → şehir, ülke ve *nach Hause* (eve): *nach Berlin, nach Deutschland*. **zu** → kişi ve yer: *zum Arzt, zur Schule, zu meiner Tante*. Ayrıca: *nach Hause* (eve doğru) – **zu Hause** (evde)." },
    { warn: "Türkçe ekleri (-e, -de, -den) Almanca edatlara **tek tek eşleştirme**. Örneğin Türkçe “doktora gidiyorum” (-e) = *zum Arzt*, “doktordayım” (-de) = *beim Arzt*, “doktordan geliyorum” (-den) = *vom Arzt* – üçü de Dativ’dir ama **üç ayrı edatla**. Türkçe düşünen biri sık sık şunları yapar: ✗ *Ich fahre mit **den** Bus* (Akkusativ) – doğrusu *mit **dem** Bus*. ✗ *Ich gehe **zu Hause*** – doğrusu *nach Hause*. ✗ *Ich wohne bei **meine** Eltern* – doğrusu *bei **meinen** Eltern*. ✗ *seit **zwei Jahre*** – doğrusu *seit zwei Jahre**n***." },
    { tip: "Soru: *Mit **wem** gehst du?* (Kiminle?) – *Mit **meiner** Schwester.* Kişiye sorarken **Wem?** de Dativ sorusudur: *Wem gehört das?* (Bu kimin?)" },
    { ex: [
      ["Ich fahre jeden Tag mit dem Bus zur Arbeit.", "Her gün işe otobüsle gidiyorum."],
      ["Meine Oma wohnt bei ihrer Tochter.", "Büyükannem kızının yanında oturuyor."],
      ["Nach dem Termin gehe ich nach Hause.", "Randevudan sonra eve gidiyorum."],
      ["Wir warten seit einer Stunde beim Arzt.", "Bir saattir doktorda bekliyoruz."],
      ["Ich komme gerade vom Amt.", "Şu an resmî daireden geliyorum."]
    ] }
  ],
  exercises: [
    { id: "de-a2-01.1", t: "match", q: "Nominativ ile Dativ’i eşleştir:", p: [["der Mann", "dem Mann"], ["die Frau", "der Frau"], ["das Kind", "dem Kind"], ["die Kinder", "den Kindern"], ["mein Bruder", "meinem Bruder"]],
      e: "Eril ve nötr → **dem** (*meinem*). Dişil → **der** (*meiner*). Çoğul → **den** + isme **-n**." },
    { id: "de-a2-01.2", t: "gap", q: "Ich fahre jeden Tag mit ___ Bus zur Arbeit.", a: ["dem"],
      wrong: { "den": "*den* Akkusativ (eril) ya da Dativ **çoğul** içindir. *mit* **Dativ** ister, *der Bus* eril → **dem**.", "der": "*der* dişil Dativ içindir. *der Bus* eril → **dem**.", "das": "*das* nötr Nominativ/Akkusativ’dir. *mit* Dativ ister ve *Bus* eril: **dem**." },
      e: "**mit** + Dativ: *mit **dem** Bus*. Türkçedeki “otobüs**le**” (-le) burada **mit**." },
    { id: "de-a2-01.3", t: "gap", q: "Morgen gehe ich ___ Arzt. (zu + dem)", a: ["zum", "zu dem"],
      wrong: { "zu": "Artikel eksik: **zu dem → zum**.", "zur": "*zur* = zu + **der** (dişil: zur Schule). *Arzt* eril → **zum**.", "nach": "**nach** şehir/ülke ve *nach Hause* içindir. Kişiye doğru: **zu**." },
      e: "**zum Arzt** (= zu dem Arzt). Kişilere ve kurumlara “-e” = **zu**: *zum Arzt, zur Bank, zur Ärztin*." },
    { id: "de-a2-01.4", t: "gap", q: "Mein Vater kommt gerade ___ Arzt. (von + dem)", a: ["vom", "von dem"],
      wrong: { "von": "Artikel eksik: **von dem → vom**.", "zum": "*zum* “doktora (gidiyor)” demektir; burada “doktordan (geliyor)” lazım: **vom**.", "beim": "*beim* “doktorda” (şu an orada). “-den geliyor” için **von**: vom." },
      e: "**vom Arzt** = doktordan. Ayrılma/geliş (-den) → **von** ya da **aus** (içinden)." },
    { id: "de-a2-01.5", t: "gap", q: "Mein Chef ist nett. Ich arbeite gern mit ___. (er)", a: ["ihm"],
      wrong: { "ihn": "*ihn* Akkusativ’dir. **mit** Dativ ister: **ihm**.", "er": "*er* Nominativ’dir, edattan sonra gelmez: **ihm**.", "ihr": "*ihr* dişil Dativ ya da “siz”dir. Patron eril (er) → **ihm**." },
      e: "er / es → Dativ **ihm**. *mit ihm* = onunla." },
    { id: "de-a2-01.6", t: "gap", q: "Meine Eltern wohnen weit weg. Ich telefoniere oft mit ___. (sie, çoğul)", a: ["ihnen"],
      wrong: { "sie": "*sie* Nominativ/Akkusativ’dir. **mit** Dativ ister: **ihnen**.", "ihr": "*ihr* tekil dişil Dativ’dir (onunla – bir kadın). Çoğul → **ihnen**.", "ihm": "*ihm* tekil eril (onunla – bir erkek). Ebeveynler çoğul → **ihnen**." },
      e: "sie (çoğul) → Dativ **ihnen**: *mit ihnen* = onlarla. Nezaket **Ihnen** büyük yazılır." },
    { id: "de-a2-01.7", t: "gap", q: "Wir wohnen seit zwei ___ in dieser Wohnung. (Jahr)", a: ["Jahren"],
      cs: true,
      wrong: { "Jahre": "**seit** Dativ ister; **çoğul isme -n**: Jahre → Jahre**n**.", "Jahr": "Sayıdan sonra çoğul gerekir: zwei **Jahre**, Dativ’de **Jahren**." },
      e: "*seit zwei Jahren* = iki yıldır. **seit** + Dativ; çoğul Dativ’de **-n**." },
    { id: "de-a2-01.8", t: "mc", q: "Hangi cümle doğru?", o: ["Ich fahre mit meinem Bruder nach Köln.", "Ich fahre mit mein Bruder nach Köln.", "Ich fahre mit meinen Bruder nach Köln.", "Ich fahre mit meiner Bruder nach Köln."], a: 0,
      why: { 1: "**mit** Dativ ister; eril → *meinem*, *mein* Nominativ biçimidir.", 2: "*meinen* Akkusativ (eril) biçimidir. Dativ: *meinem*.", 3: "*meiner* dişil Dativ içindir; *Bruder* eril." },
      e: "**mit** + Dativ → *mit meinem Bruder* (kardeşimle). **nach** + şehir: *nach Köln*." },
    { id: "de-a2-01.9", t: "mc", q: "“Eve gidiyorum.” Almancası hangisi?", o: ["Ich gehe nach Hause.", "Ich gehe zu Hause.", "Ich gehe zum Hause.", "Ich gehe nach dem Haus."], a: 0,
      why: { 1: "**zu Hause** = evde (nerede?). “Eve” (nereye?) için **nach Hause**.", 2: "*zum Hause* eski ve kalıp dışı. Sabit ifade: **nach Hause** (eve), **zu Hause** (evde).", 3: "*nach dem Haus* “evden sonra” gibi anlaşılır. Sabit kalıp: **nach Hause**." },
      e: "**nach Hause** (eve doğru) – **zu Hause** (evde). İkisi de sabit ifadedir; artikel almaz." },
    { id: "de-a2-01.10", t: "mc", q: "Telefonda: “Şu an doktordayım.” Hangisi doğru?", o: ["Ich bin gerade beim Arzt.", "Ich bin gerade zum Arzt.", "Ich bin gerade vom Arzt.", "Ich bin gerade mit Arzt."], a: 0,
      why: { 1: "*zum Arzt* yön bildirir (doktora doğru). Orada bulunmak: **bei**.", 2: "*vom Arzt* “doktordan” demek (ayrılış). Orada olmak: **beim**.", 3: "**mit** “ile” demektir ve artikel gerekir. Burada “-de” = **bei**." },
      e: "**bei** = -de (bir kişinin yanında/yerinde): *beim Arzt, beim Bäcker, bei meiner Tante*. Burada **bei + dem = beim**." },
    { id: "de-a2-01.11", t: "mc", q: "“Komşularla konuşuyorum.” (çoğul) Hangisi doğru?", o: ["Ich spreche mit den Nachbarn.", "Ich spreche mit die Nachbarn.", "Ich spreche mit den Nachbar.", "Ich spreche mit dem Nachbarn."], a: 0,
      why: { 1: "*die* Nominativ/Akkusativ çoğuldur. **mit** → Dativ çoğul: **den**.", 2: "Çoğul *die Nachbarn*’dır; Dativ çoğulda da **Nachbarn** kalır, tekil *Nachbar* olmaz.", 3: "*dem Nachbarn* **tekil** (komşuyla). Soru çoğul → *den Nachbarn*." },
      e: "Dativ çoğul: **den** + isim**n**. (*Nachbar* zayıf bir isim; tekil Dativ’de de -n alır: *dem Nachbarn*.)" },
    { id: "de-a2-01.12", t: "order", q: "Cümleyi kur: “Bir yıldır anne babamın yanında oturuyorum.”", w: ["seit einem Jahr", "Ich", "bei meinen Eltern", "wohne"], a: ["Ich wohne seit einem Jahr bei meinen Eltern", "Ich wohne bei meinen Eltern seit einem Jahr", "Seit einem Jahr wohne ich bei meinen Eltern"],
      e: "Fiil 2. sırada (*wohne*); **seit einem Jahr** (zaman) önce, **bei meinen Eltern** (yer) sonra gelir. İki edat da Dativ ister." },
    { id: "de-a2-01.13", t: "order", q: "Cümleyi kur: “Kurstan sonra otobüsle işe gidiyorum.”", w: ["fahre", "Nach dem Kurs", "ich", "mit dem Bus", "zur Arbeit"], a: ["Nach dem Kurs fahre ich mit dem Bus zur Arbeit", "Nach dem Kurs fahre ich zur Arbeit mit dem Bus", "Ich fahre nach dem Kurs mit dem Bus zur Arbeit", "Ich fahre nach dem Kurs zur Arbeit mit dem Bus"],
      e: "Cümle *Nach dem Kurs* ile başlarsa fiil 2., özne 3. sırada: **fahre ich**. *mit dem Bus* ve *zur Arbeit* yer değiştirebilir. Üç edat da Dativ: **nach dem, mit dem, zur**." },
    { id: "de-a2-01.14", t: "order", q: "Soruyu kur: “Ne zaman dişçiye gidiyorsun?”", w: ["Wann", "du", "zum Zahnarzt", "gehst"], a: ["Wann gehst du zum Zahnarzt"],
      e: "Soru kelimesi (**Wann**) 1., fiil (**gehst**) 2. sırada. **zum Zahnarzt** = zu + dem Zahnarzt: kişiye/kuruma yön → **zu**." },
    { id: "de-a2-01.15", t: "listen", say: "Meine Oma wohnt bei ihrer Tochter.", q: "Dinle. Ne anlama geliyor?", o: ["Büyükannem kızının yanında oturuyor.", "Büyükannem kızına gidiyor.", "Büyükannem kızıyla konuşuyor.", "Büyükannem kızından geliyor."], a: 0,
      why: { 1: "“Kızına gidiyor” = *Sie geht zu ihrer Tochter.* Duyduğun **bei** (yanında).", 2: "“Kızıyla konuşuyor” = *Sie spricht mit ihrer Tochter.* Duyduğun **bei** (yanında).", 3: "“Kızından geliyor” = *Sie kommt von ihrer Tochter.* Duyduğun **bei**." },
      e: "**bei ihrer Tochter**: dişil Dativ **ihrer**. **wohnen bei** = birinin yanında/evinde oturmak." },
    { id: "de-a2-01.16", t: "dictation", say: "Ich komme gerade vom Arzt.", a: ["Ich komme gerade vom Arzt.", "Ich komme gerade von dem Arzt."],
      wrong: { "Ich komme gerade von Arzt.": "Artikel eksik: *von dem Arzt* → **vom Arzt**.", "Ich komme gerade zum Arzt.": "*zum Arzt* “doktora (gidiyorum)” demektir. Duyduğun **vom** (doktordan).", "Ich komme gerade beim Arzt.": "*beim* “doktorda” demektir. Duyduğun: **vom** (-den)." },
      e: "**vom** = von + dem. *kommen* + **von** = nereden/kimden geldiğini söyler: *vom Arzt, vom Amt, von der Arbeit*." },
    { id: "de-a2-01.17", t: "speak", say: "Ich fahre mit dem Bus zur Arbeit.",
      e: "**mit dem** akıcı söylenir: “mit-dem”. **Bus** = “bus” (u kısa). **zur** = “tsuur”: z = ts, r çok hafif. **Arbeit** = “AR-bayt”: ei = ay." },
    { id: "de-a2-01.18", t: "speak", say: "Ich warte seit einer Stunde beim Arzt.",
      e: "**warte**: w = v (“varte”). **seit** = “zayt”: s sesli z gibi, ei = ay. **Stunde**: st- “şt” gibi okunur (“ŞTUN-de”). **beim** = “baym”." }
  ]
});

/* ---------- Verben mit Dativ & zwei Objekten ---------- */
K.add('de-a2-12', {
  lesson: [
    { p: "Bazı Almanca fiiller **sadece Dativ** ister: *Ich helfe **dir**.* Bazıları ise **iki nesne** alır: biri kişi (**Dativ**), biri şey (**Akkusativ**): *Ich gebe **dir** einen Schlüssel.* Bu konuda Türkçe seni kolayca yanlış yöne çekebilir; o yüzden fiilleri **Wem?** (kime?) sorusuyla birlikte öğren." },
    { h: "1) Sadece Dativ isteyen fiiller" },
    { table: { head: ["Fiil", "Anlamı", "Örnek"], rows: [
      ["**helfen**", "yardım etmek", "Ich helfe **meiner Mutter** im Haushalt."],
      ["**danken**", "teşekkür etmek", "Ich danke **Ihnen** für die Hilfe."],
      ["**gefallen**", "hoşuna gitmek", "Die Wohnung gefällt **uns**."],
      ["**gehören**", "ait olmak, birinin olmak", "Das Auto gehört **meinem Onkel**."],
      ["**schmecken**", "tadı hoşuna gitmek", "Die Suppe schmeckt **mir**."],
      ["**passen**", "uymak, oturmak (beden/uygunluk)", "Die Jacke passt **mir** nicht."],
      ["**fehlen**", "eksik olmak, özlenmek", "Du fehlst **mir**."],
      ["**gratulieren**", "tebrik etmek", "Ich gratuliere **dir** zum Geburtstag."]
    ] } },
    { warn: "Türkçede *yardım etmek*, *teşekkür etmek* **-e** ister (“ona yardım ettim”), ama *beğenmek* nesneyi **-i** ile alır (“bunu beğendim”). Almancada **gefallen**’de durum **tam tersi**: beğenilen şey **özne**, beğenen kişi **Dativ**’dir! *Das Kleid gefällt **mir**.* = “Elbise **bana** hoş geliyor.” ✗ *Ich gefalle das Kleid* / ✗ *Das Kleid gefällt mich.* Aynı mantık **schmecken** (*Die Suppe schmeckt mir*) ve **fehlen** için de geçerli (**passen** Türkçedeki “bana uyuyor” gibi zaten -e ister): *Du fehlst mir* = “Seni özlüyorum” (özne **sen**sin, ben Dativ’im)." },
    { tip: "Ezber yöntemi: Bu fiillerde **kişi hep Dativ**. Hata yapmamak için cümleyi **Dativ zamiriyle** ezberle: *Ich helfe **ihm**.* (✗ *ihn*), *Das gefällt **mir**.* (✗ *mich*), *Das gehört **ihr**.*" },
    { p: "**Soru:** *Wem helfen Sie?* (Kime yardım ediyorsunuz?) – *Wem gehört das Fahrrad?* (Bisiklet kimin?) – *Wie gefällt dir die Stadt?* (Şehri nasıl buldun?)" },
    { h: "2) İki nesneli fiiller: Dativ + Akkusativ" },
    { p: "**geben, schenken, zeigen, schicken, bringen, erklären, empfehlen, kaufen, leihen** gibi fiiller **hem kişiye hem şeye** yönelir: **kime?** → Dativ, **neyi?** → Akkusativ." },
    { table: { head: ["Özne", "Fiil", "Wem? (Dativ)", "Was? (Akkusativ)"], rows: [
      ["Der Arzt", "gibt", "**der Patientin**", "ein Rezept."],
      ["Ich", "schenke", "**meinem Vater**", "eine Uhr."],
      ["Die Chefin", "zeigt", "**dem Kollegen**", "den Plan."],
      ["Wir", "schicken", "**der Bank**", "einen Brief."]
    ] } },
    { p: "**Sıra kuralı:** İkisi de **isim** ise genelde **önce Dativ, sonra Akkusativ** (Türkçedeki sıraya benzer: *çocuğa topu verdim*). **Zamir** varsa zamir isimden **önce** gelir. İkisi de zamirse **önce Akkusativ, sonra Dativ**:" },
    { table: { head: ["Durum", "Sıra", "Örnek"], rows: [
      ["isim + isim", "Dativ → Akkusativ", "Ich gebe **dem Kind einen Ball**."],
      ["Dativ zamir + Akkusativ isim", "Dativ → Akkusativ", "Ich gebe **ihm einen Ball**."],
      ["Dativ isim + Akkusativ zamir", "**Akkusativ → Dativ**", "Ich gebe **ihn dem Kind**."],
      ["zamir + zamir", "**Akkusativ → Dativ**", "Ich gebe **ihn ihm**. / Ich gebe **es dir**."]
    ] } },
    { tip: "Türkçede *topu ona verdim* ya da *ona topu verdim* – ikisi de olur. Almancada ise **zamirli** cümlede sıra sabittir: *Ich gebe **es dir**.* (✗ *Ich gebe dir es.*) Bu, A2’de en çok karıştırılan noktalardan biridir. Kısaca: **kısa kelime (zamir) önce**, iki zamir varsa **Akkusativ önce**." },
    { warn: "Sık hatalar: ✗ *Ich helfe dich* (doğrusu **dir**) – ✗ *Das Buch gehört ich* (doğrusu **mir**) – ✗ *Ich gebe das Kind einen Apfel* (doğrusu **dem Kind**) – ✗ *Ich schenke ihr es* (doğrusu *Ich schenke es ihr*)." },
    { ex: [
      ["Kann ich Ihnen helfen?", "Size yardımcı olabilir miyim?"],
      ["Die Jacke passt mir leider nicht.", "Ceket maalesef bana olmuyor."],
      ["Meine Kollegin zeigt mir den Weg.", "İş arkadaşım bana yolu gösteriyor."],
      ["Ich schicke es dir morgen.", "Onu sana yarın gönderirim."],
      ["Er schenkt seiner Frau Blumen.", "O, karısına çiçek hediye ediyor."]
    ] }
  ],
  exercises: [
    { id: "de-a2-12.1", t: "match", q: "Türkçe cümleyi Almancasıyla eşleştir:", p: [["Çorba hoşuma gidiyor.", "Die Suppe schmeckt mir."], ["Bu kitap benim.", "Das Buch gehört mir."], ["Sana teşekkür ederim.", "Ich danke dir."], ["Ceket bana uyuyor.", "Die Jacke passt mir."], ["Ona yardım ediyorum.", "Ich helfe ihm."]],
      e: "Hepsinde kişi **Dativ**’dedir: *mir, dir, ihm*. Dikkat: Türkçede “çorbayı beğeniyorum” (-i) dersin; Almancada **çorba özne**, sen **Dativ**’sin." },
    { id: "de-a2-12.2", t: "gap", q: "Mein Nachbar ist alt. Ich helfe ___ oft beim Einkaufen. (er)", a: ["ihm"],
      wrong: { "ihn": "*ihn* Akkusativ’dir. **helfen** sadece Dativ ister: **ihm**.", "er": "*er* Nominativ’dir; burada nesne gerekir: **ihm**.", "ihr": "*ihr* dişil Dativ’dir. Komşu eril → **ihm**." },
      e: "**helfen + Dativ**: *Ich helfe **ihm**.* Türkçedeki “ona yardım ediyorum” (-e) mantığı burada işe yarar." },
    { id: "de-a2-12.3", t: "gap", q: "Das Zimmer gefällt ___ gut. (ich)", a: ["mir"],
      wrong: { "mich": "*mich* Akkusativ’dir. **gefallen** Dativ ister: **mir**.", "ich": "Özne *das Zimmer*’dir; “ben” burada Dativ’dedir: **mir**.", "mein": "*mein* iyelik sıfatıdır, zamir değil: **mir**." },
      e: "*Das Zimmer gefällt **mir**.* = “Oda bana hoş geliyor.” Özne **oda**, kişi **Dativ**. Türkçe *beğenmek* gibi “ben beğeniyorum” diye kurma." },
    { id: "de-a2-12.4", t: "gap", q: "Der Schlüssel gehört ___ Kollegin. (die)", a: ["der"],
      wrong: { "die": "*die* Nominativ/Akkusativ’dir. **gehören** Dativ ister: dişil → **der**.", "dem": "*dem* eril/nötr Dativ’dir. *die Kollegin* dişil → **der**.", "den": "*den* Akkusativ (eril) ya da Dativ **çoğul**. Burada tekil dişil Dativ: **der**." },
      e: "**gehören + Dativ**: *Der Schlüssel gehört **der** Kollegin.* (Anahtar iş arkadaşımın.)" },
    { id: "de-a2-12.5", t: "gap", q: "Vielen Dank! Ich danke ___ für Ihre Hilfe. (Sie, nezaket)", a: ["Ihnen"],
      cs: true,
      wrong: { "Sie": "*Sie* Nominativ/Akkusativ’dir. **danken** Dativ ister: **Ihnen**.", "Ihr": "*Ihr* iyelik sıfatıdır (sizin …). Zamir: **Ihnen**.", "ihnen": "Nezaket biçimi **büyük** yazılır: **Ihnen**. Küçük *ihnen* “onlara” demektir." },
      e: "**danken + Dativ**: *Ich danke **Ihnen**.* (Size teşekkür ederim.)" },
    { id: "de-a2-12.6", t: "gap", q: "Der Arzt gibt der Patientin ein Rezept. → Der Arzt gibt ___ ein Rezept. (die Patientin)", a: ["ihr"],
      wrong: { "sie": "*sie* Akkusativ’dir. **geben** ile “kime?” → Dativ: **ihr**.", "ihm": "*ihm* eril/nötr Dativ’dir. *die Patientin* dişil → **ihr**.", "ihnen": "*ihnen* çoğul Dativ’dir. Tek bir hasta (dişil) → **ihr**." },
      e: "dişil Dativ zamiri: **ihr**. *Der Arzt gibt **ihr** ein Rezept.*" },
    { id: "de-a2-12.7", t: "gap", q: "Ich schenke meinem Vater die Uhr. → Ich schenke ___ meinem Vater. (die Uhr)", a: ["sie"],
      wrong: { "ihr": "*ihr* Dativ’dir. Hediye (*die Uhr*) **Akkusativ**’dir → **sie**.", "ihm": "*ihm* kişiye aittir (Dativ). Saat Akkusativ’dedir: **sie**.", "es": "*es* nötr içindir. *die Uhr* dişil → **sie**." },
      e: "Akkusativ zamiri isimden **önce** gelir: *Ich schenke **sie** meinem Vater.* (Onu babama hediye ediyorum.)" },
    { id: "de-a2-12.8", t: "mc", q: "“Ona yardım ediyorum.” Hangi cümle doğru?", o: ["Ich helfe ihm.", "Ich helfe ihn.", "Ich helfe er.", "Ich helfe sein."], a: 0,
      why: { 1: "*ihn* Akkusativ’dir. **helfen** Dativ ister.", 2: "*er* Nominativ’dir; fiilin nesnesi olamaz.", 3: "*sein* iyelik sıfatıdır (onun …) ve yalnız başına zamir değildir." },
      e: "**helfen + Dativ**: *Ich helfe **ihm**.* Kişi her zaman Dativ’de." },
    { id: "de-a2-12.9", t: "mc", q: "“Çorbayı beğeniyorum / çorba hoşuma gidiyor.” Hangisi doğru?", o: ["Die Suppe schmeckt mir.", "Die Suppe schmeckt mich.", "Ich schmecke die Suppe.", "Ich schmecke der Suppe."], a: 0,
      why: { 1: "**schmecken** Dativ ister: *mir*, *mich* değil.", 2: "*Ich schmecke die Suppe* = “Çorbanın tadını alıyorum / seziyorum” (yemeğin içindeki bir tadı fark etmek). “Beğeniyorum” anlamı için özne **çorba** olmalı.", 3: "Hem özne yanlış hem *der Suppe* Dativ olarak kullanılmış – anlam çıkmaz." },
      e: "**schmecken** (tadı güzel olmak): özne yiyecek, kişi **Dativ**: *Die Suppe schmeckt **mir**.* Türkçe “beğenmek” (-i) gibi kurma." },
    { id: "de-a2-12.10", t: "mc", q: "Dativ ve Akkusativ’i ikisi de **zamir** olarak kullan: “Ben bunu (der Brief) ona (der Kollege) gösteriyorum.”", o: ["Ich zeige ihn ihm.", "Ich zeige ihm ihn.", "Ich zeige ihn er.", "Ich zeige ihm es."], a: 0,
      why: { 1: "İki zamirde sıra **Akkusativ → Dativ** olur: *ihn ihm*, *ihm ihn* değil.", 2: "*er* Nominativ’dir; Dativ zamiri **ihm**.", 3: "*es* nötr içindir; *der Brief* eril → **ihn**." },
      e: "İki zamir: **Akkusativ önce, Dativ sonra**: *Ich zeige **ihn ihm**.* Aynı kural: *Ich gebe **es dir**.*" },
    { id: "de-a2-12.11", t: "mc", q: "“Çocuğa bir elma veriyorum.” Hangisi doğru?", o: ["Ich gebe dem Kind einen Apfel.", "Ich gebe das Kind einen Apfel.", "Ich gebe dem Kind einem Apfel.", "Ich gebe den Kind einen Apfel."], a: 0,
      why: { 1: "*das Kind* Akkusativ’dir; “kime?” sorusu **Dativ** gerektirir: dem Kind.", 2: "*Apfel* “neyi?” (Akkusativ): **einen** Apfel; *einem* Dativ’dir.", 3: "*den Kind* hem yanlış artikel hem hâl: tekil nötr Dativ = **dem**." },
      e: "**geben**: kişi Dativ (**dem Kind**), şey Akkusativ (**einen Apfel**). Sırayla: önce kime, sonra neyi." },
    { id: "de-a2-12.12", t: "order", q: "Cümleyi kur: “Ceket maalesef bana olmuyor.”", w: ["passt", "Die Jacke", "mir", "leider nicht"], a: ["Die Jacke passt mir leider nicht"],
      e: "Özne (*Die Jacke*), fiil (**passt**), Dativ zamir (**mir**), sonra *leider nicht*. Dativ zamir kısa kelime olduğu için fiilin hemen arkasına gelir." },
    { id: "de-a2-12.13", t: "order", q: "Cümleyi kur: “Yarın patronuma bir e-posta gönderiyorum.”", w: ["Ich", "schicke", "meiner Chefin", "morgen", "eine E-Mail"], a: ["Ich schicke meiner Chefin morgen eine E-Mail", "Ich schicke morgen meiner Chefin eine E-Mail", "Morgen schicke ich meiner Chefin eine E-Mail"],
      e: "İki isim: önce **Dativ** (*meiner Chefin*), sonra **Akkusativ** (*eine E-Mail*). *morgen* kelimesi ikisinin önünde ya da arasında olabilir." },
    { id: "de-a2-12.14", t: "order", q: "Cümleyi kur (iki zamir): “Onu sana yarın veririm.”", w: ["Ich", "gebe", "es", "dir", "morgen"], a: ["Ich gebe es dir morgen", "Morgen gebe ich es dir"],
      e: "İki zamirde sıra sabit: önce **Akkusativ** (*es*), sonra **Dativ** (*dir*). ✗ *Ich gebe dir es morgen.*" },
    { id: "de-a2-12.15", t: "listen", say: "Das Buch gehört meiner Schwester.", q: "Dinle. Ne anlama geliyor?", o: ["Kitap kız kardeşime ait.", "Kitabı kız kardeşime verdim.", "Kız kardeşim kitabı okuyor.", "Kitap kız kardeşimden geliyor."], a: 0,
      why: { 1: "“Verdim” = *Ich habe ihr das Buch gegeben.* Duyduğun fiil **gehört** (ait olmak).", 2: "“Okuyor” = *liest*. Duyduğun **gehört**; ve *meiner Schwester* Dativ, özne değil.", 3: "“-den geliyor” = *kommt von …*. Duyduğun **gehört … meiner Schwester**." },
      e: "**gehören + Dativ**: *meiner Schwester* (dişil Dativ). Soru: *Wem gehört das Buch?*" },
    { id: "de-a2-12.16", t: "dictation", say: "Die Suppe schmeckt mir sehr gut.", a: ["Die Suppe schmeckt mir sehr gut."],
      wrong: { "Die Suppe schmeckt mich sehr gut.": "**schmecken** Dativ ister: *mir*, *mich* değil.", "Die Suppe schmeckt dir sehr gut.": "*dir* = sana. Duyduğun **mir** (bana).", "Die Suppe schmekt mir sehr gut.": "Yazılışta **-ck-** kalır: schme**ck**t." },
      e: "**mir** [miia]: r sondaki ses çok hafif. **schmeckt** = “şmekt”: sch = ş. *sehr gut* = çok iyi." },
    { id: "de-a2-12.17", t: "speak", say: "Kannst du mir bitte helfen?",
      e: "**Kannst** = “kanst”, a kısa. **mir** = “miia”, sondaki r hafif. **helfen**: e açık, lf birlikte; vurgu ilk hecede: HEL-fen. Soru → ses sonda yükselir." },
    { id: "de-a2-12.18", t: "speak", say: "Ich schenke meiner Mutter Blumen.",
      e: "**Ich** = Türkçe “ç” değil, dilin ortasından yumuşak bir ses (“ih” gibi). **schenke** = “şenke”. **meiner** = “mayna”. **Blumen** = “BLUU-men”: u uzun." }
  ]
});


/* ---------- Paket 3: Wechselpräpositionen, Zeitangaben, Reflexive Verben ---------- */

/* ---------- Wechselpräpositionen: wo? / wohin? ---------- */
K.add('de-a2-02', {
  lesson: [
    { p: "Dokuz edatın (**in, auf, an, über, unter, vor, hinter, neben, zwischen**) özel bir durumu var: **iki farklı hâl** alabilirler. Hangisini alacağını edat değil, **soru** belirler: **Wo?** (nerede? – durum) → **Dativ**; **Wohin?** (nereye? – hareket, yön) → **Akkusativ**." },
    { table: { head: ["Edat", "Anlamı", "Wo? (Dativ)", "Wohin? (Akkusativ)"], rows: [
      ["in", "içinde / içine", "Ich bin **in der** Küche.", "Ich gehe **in die** Küche."],
      ["auf", "üstünde / üstüne", "Das Buch liegt **auf dem** Tisch.", "Ich lege das Buch **auf den** Tisch."],
      ["an", "kenarında, yanında / duvara", "Das Bild hängt **an der** Wand.", "Ich hänge das Bild **an die** Wand."],
      ["über", "(havada) üstünde", "Die Lampe hängt **über dem** Tisch.", "Ich hänge die Lampe **über den** Tisch."],
      ["unter", "altında / altına", "Die Katze schläft **unter dem** Bett.", "Die Katze läuft **unter das** Bett."],
      ["vor", "önünde / önüne", "Das Auto steht **vor dem** Haus.", "Ich fahre das Auto **vor das** Haus."],
      ["hinter", "arkasında / arkasına", "Der Garten ist **hinter dem** Haus.", "Der Ball fliegt **hinter das** Haus."],
      ["neben", "yanında / yanına", "Ich sitze **neben dir**.", "Ich setze mich **neben dich**."],
      ["zwischen", "arasında / arasına", "Das Kind steht **zwischen den** Eltern.", "Das Kind geht **zwischen die** Eltern."]
    ] } },
    { p: "**Türkçe ile fark:** Türkçede *evde* (-DA, bulunma hâli) ve *eve* (-(y)A, yönelme hâli) **ekle** ayrılır. Almancada ek yoktur; fark **artikelde** görünür: *in **dem** Haus* (evde) ↔ *in **das** Haus* (eve). Bu yüzden iki hata çok yapılır: (1) **artikeli değiştirmemek** (*Ich gehe in der Küche* ✗), (2) *in / auf / an* karıştırmak, çünkü Türkçede hepsi aynı “-de” ya da “-e” olur." },
    { h: "Artikel: Dativ ve Akkusativ yan yana" },
    { table: { head: ["", "der (eril)", "das (nötr)", "die (dişil)", "die (çoğul)"], rows: [
      ["Wo? **Dativ**", "**dem** Tisch", "**dem** Bett", "**der** Wand", "**den** Stühlen"],
      ["Wohin? **Akkusativ**", "**den** Tisch", "**das** Bett", "**die** Wand", "**die** Stühle"]
    ] } },
    { tip: "Dikkat: **eril** artikelde fark en çok göze çarpar (*dem Tisch* ↔ *den Tisch*). Dişilde **der ↔ die**, nötrde **dem ↔ das** değişir; çoğulda **den (+n) ↔ die**. Kısa kural: **Dativ = bir yerde duruyor/oluyor**, **Akkusativ = bir yere gidiyor/konuyor**." },
    { h: "Verschmelzungen (kaynaşmalar)" },
    { p: "Konuşmada edat + artikel çoğu zaman kaynaşır: **in dem → im**, **in das → ins**, **an dem → am**, **an das → ans**. Örnekler: *Ich bin **im** Park.* (Wo?) – *Wir gehen **ins** Kino.* (Wohin?) – *Er steht **am** Fenster.* – *Wir fahren **ans** Meer.* **auf das → aufs** de vardır (*aufs Land*), ama burada gerek yok." },
    { h: "stehen – stellen, liegen – legen, sitzen – setzen, hängen" },
    { p: "Almancada nesnenin **nasıl** durduğunu da söylersin. İki grup vardır: **durum** fiilleri (*Wo?* → Dativ, düzensiz) ve **hareket** fiilleri (*Wohin?* → Akkusativ, düzenli)." },
    { table: { head: ["Wo? → Dativ (durum)", "Wohin? → Akkusativ (koymak)", "Türkçe"], rows: [
      ["**stehen** (gestanden)", "**stellen** (gestellt)", "dik durmak / dik koymak"],
      ["**liegen** (gelegen)", "**legen** (gelegt)", "yatık durmak / yatırarak koymak"],
      ["**sitzen** (gesessen)", "**setzen** (gesetzt)", "oturmak / oturtmak"],
      ["**hängen** (gehangen)", "**hängen** (gehängt)", "asılı durmak / asmak"]
    ] } },
    { tip: "Bu fiillerde Türkçe ettirgen ekini (**-t- / -DIr-**) hatırla: *otur-* → *otur-t-* ; Almanca *sitzen → setzen*. Şişe için **stehen/stellen**, kitap ve telefon için **liegen/legen**, tablo ve ceket için **hängen** kullan. *sich setzen* (oturmak, hareket) dönüşlüdır → bkz. “Reflexive Verben”." },
    { ex: [
      ["Die Schlüssel liegen auf dem Sofa.", "Anahtarlar kanepenin üstünde duruyor."],
      ["Ich lege die Schlüssel auf den Tisch.", "Anahtarları masanın üstüne koyuyorum."],
      ["Mein Bruder steht hinter der Tür.", "Erkek kardeşim kapının arkasında duruyor."],
      ["Wir gehen heute Abend ins Kino.", "Bu akşam sinemaya gidiyoruz."],
      ["Die Kinder sitzen im Garten unter dem Baum.", "Çocuklar bahçede ağacın altında oturuyor."]
    ] }
  ],
  exercises: [
    { id: "de-a2-02.1", t: "mc", q: "Das Buch liegt ___ Tisch. (Kitap masanın üstünde duruyor.)", o: ["auf den", "auf dem", "auf der", "auf das"], a: 1,
      why: { 0: "**den** Akkusativ’dir (wohin?). Kitap zaten masada duruyor, hareket yok: *Wo?* → Dativ.", 2: "**der** dişil Dativ’dir; *Tisch* ise eril (der Tisch) → **dem**.", 3: "**das** Akkusativ ve nötr; *Tisch* nötr değil, eril." },
      e: "*liegen* durum bildirir → *Wo?* → **Dativ**. *der Tisch* → Dativ’de **dem Tisch**." },
    { id: "de-a2-02.2", t: "gap", q: "Ich stelle die Flasche auf ___ Tisch. (der / den / dem)", a: ["den"],
      wrong: { "dem": "**dem** Dativ’dir (wo?). *stellen* bir hareket: şişe bir yere konuyor, *wohin?* → Akkusativ **den**.", "der": "*Tisch* eril, **der** Nominativ’dir. Akkusativ’de **den Tisch**." },
      e: "*stellen* = dik koymak → *wohin?* → **Akkusativ**: der Tisch → **den** Tisch." },
    { id: "de-a2-02.3", t: "gap", q: "Die Lampe hängt über ___ Tisch. (der / dem / den)", a: ["dem"],
      wrong: { "den": "*hängen* (asılı durmak) durum bildirir: lamba zaten orada asılı → *wo?* → Dativ **dem**.", "der": "*Tisch* eril; **der** Nominativ’dir. Dativ: **dem Tisch**." },
      e: "Lamba masanın üstünde asılı duruyor: *Wo?* → **Dativ** → **dem** Tisch." },
    { id: "de-a2-02.4", t: "mc", q: "Ich gehe heute Abend ___ Kino. (Bu akşam sinemaya gidiyorum.)", o: ["im", "ins", "in", "am"], a: 1,
      why: { 0: "**im** = in dem → Dativ (sinemada). *gehen* bir hareket: *nereye?* → Akkusativ.", 2: "Tek başına **in** yetmez: artikel eksik. *in das* → kaynaşmış hâli **ins**.", 3: "**am** = an dem. Sinemaya *in* ile gidilir, *an* ile değil." },
      e: "*gehen* → wohin? → **Akkusativ**: in + das Kino = **ins** Kino. Türkçe “sinemaya” = -(y)A eki → Almancada **artikel değişir**." },
    { id: "de-a2-02.5", t: "match", q: "Türkçe cümleyi Almancasıyla eşleştir:", p: [["Kitabı masaya (yatırarak) koyuyorum.", "Ich lege das Buch auf den Tisch."], ["Kitap masanın üstünde duruyor.", "Das Buch liegt auf dem Tisch."], ["Şişeyi masaya (dik) koyuyorum.", "Ich stelle die Flasche auf den Tisch."], ["Şişe masanın üstünde duruyor.", "Die Flasche steht auf dem Tisch."], ["Tabloyu duvara asıyorum.", "Ich hänge das Bild an die Wand."]],
      e: "**Koymak** (hareket) → *legen / stellen / hängen* + **Akkusativ**. **Durmak** (durum) → *liegen / stehen / hängen* + **Dativ**. Yatık → liegen/legen, dik → stehen/stellen." },
    { id: "de-a2-02.6", t: "gap", q: "Das Kind sitzt auf ___ Sofa. (das / dem)", a: ["dem"],
      wrong: { "das": "**das** Akkusativ’dir. *sitzen* durum: çocuk zaten kanepede oturuyor → Dativ **dem**." },
      e: "*sitzen* → wo? → **Dativ**: das Sofa → **auf dem** Sofa. (Hareket olsaydı: *Das Kind setzt sich auf das Sofa.*)" },
    { id: "de-a2-02.7", t: "gap", q: "Ich setze das Kind auf ___ Stuhl. (der / den / dem)", a: ["den"],
      wrong: { "dem": "**dem** Dativ’dir. *setzen* hareket: çocuğu sandalyeye oturtuyorsun → Akkusativ **den**.", "der": "**der** Nominativ’dir; burada nesne olduğu için Akkusativ gerekir: **den Stuhl**." },
      e: "*setzen* = oturtmak (hareket) → *wohin?* → **Akkusativ**: der Stuhl → **auf den** Stuhl." },
    { id: "de-a2-02.8", t: "mc", q: "“Çanta sandalyenin altında.” Hangisi doğru?", o: ["Die Tasche liegt unter dem Stuhl.", "Die Tasche liegt unter den Stuhl.", "Die Tasche liegt unter der Stuhl.", "Die Tasche liegt unter das Stuhl."], a: 0,
      why: { 1: "**den** Akkusativ’dir; çanta hareket etmiyor, *liegt* → Dativ.", 2: "**der** dişil artikeldir. *Stuhl* eril → Dativ’de **dem**.", 3: "*Stuhl* nötr değil; **das** hem cins hem hâl olarak yanlış." },
      e: "*liegen* → wo? → **Dativ**; der Stuhl → **unter dem** Stuhl." },
    { id: "de-a2-02.9", t: "order", q: "Cümleyi kur: “Telefonu masanın üstüne koyuyorum.”", w: ["auf den Tisch", "das Handy", "lege", "Ich"], a: ["Ich lege das Handy auf den Tisch", "Auf den Tisch lege ich das Handy"],
      e: "Fiil 2. sırada: *Ich **lege***. Hareket → **auf den** Tisch (Akkusativ). Yer bildiren kısım (auf den Tisch) cümle sonuna gider." },
    { id: "de-a2-02.10", t: "order", q: "Cümleyi kur: “Arabam evin önünde duruyor.”", w: ["vor dem Haus", "steht", "Mein Auto"], a: ["Mein Auto steht vor dem Haus", "Vor dem Haus steht mein Auto"],
      e: "*stehen* durum → **vor dem** Haus (Dativ). Fiil Türkçedeki gibi sona değil, **2. sıraya** gelir." },
    { id: "de-a2-02.11", t: "gap", q: "Meine Mutter steht ___ Fenster. (an + dem)", a: ["am", "an dem"],
      wrong: { "ans": "**ans** = an das (Akkusativ, nötr + hareket). Burada annem zaten pencerenin yanında duruyor → Dativ, **am**.", "im": "**im** = in dem “içinde” demektir. Pencerenin *yanında* durulur → **an**." },
      e: "*stehen* → wo? → Dativ: an + dem Fenster = **am** Fenster." },
    { id: "de-a2-02.12", t: "mc", q: "“Çocuklar okulda.” Hangisi doğru?", o: ["Die Kinder sind in die Schule.", "Die Kinder sind in der Schule.", "Die Kinder sind in den Schule.", "Die Kinder sind in Schule."], a: 1,
      why: { 0: "**in die** Akkusativ’dir (okula). *sein* durum bildirir; “okulda” → Dativ.", 2: "**den** çoğul/eril artikeldir; *Schule* dişil (die Schule).", 3: "Artikel eksik. Türkçede artikel yok, Almancada isimle birlikte gerekir: **in der** Schule." },
      e: "*sein* → wo? → **Dativ**: die Schule → **in der** Schule. Türkçe “okulda / okula” farkı Almancada artikelle gösterilir." },
    { id: "de-a2-02.13", t: "gap", q: "Der Hund läuft in ___ Garten. (der / den / dem) (Köpek bahçeye koşuyor.)", a: ["den"],
      wrong: { "dem": "*laufen* burada bir yere gitmeyi anlatır: köpek bahçenin **içine** koşuyor → Akkusativ **den**.", "der": "**der** Nominativ’dir. Akkusativ eril: **den Garten**." },
      e: "Hareket (*wohin?*) → **Akkusativ**: der Garten → in **den** Garten." },
    { id: "de-a2-02.14", t: "order", q: "Soruyu kur: “Resmi nereye asıyorsun?”", w: ["das Bild", "hängst", "Wohin", "du"], a: ["Wohin hängst du das Bild"],
      e: "Soru sözcüğü 1., fiil 2. sırada: **Wohin hängst du …?** *wohin* = nereye → cevap Akkusativ olur: *an die Wand*." },
    { id: "de-a2-02.15", t: "match", q: "Soruyu cevabıyla eşleştir:", p: [["Wo ist die Katze?", "Sie sitzt auf dem Sofa."], ["Wohin springt die Katze?", "Sie springt auf das Sofa."], ["Wo liegt das Handy?", "Es liegt unter dem Bett."], ["Wohin legst du das Handy?", "Ich lege es unter das Bett."]],
      e: "**Wo?** → Dativ (*auf dem, unter dem*). **Wohin?** → Akkusativ (*auf das, unter das*). Soru sözcüğüne bak, hâl kendiliğinden gelir." },
    { id: "de-a2-02.16", t: "mc", q: "Die Flaschen ___ im Kühlschrank. (Şişeler buzdolabında duruyor.)", o: ["stehen", "stellen", "setzen", "legen"], a: 0,
      why: { 1: "*stellen* “koymak” (hareket) demektir ve Akkusativ nesne ister; *im Kühlschrank* (Dativ) durumu gösteriyor.", 2: "*setzen* “oturtmak” demektir, şişeler için uygun değil.", 3: "*legen* yatırarak koymaktır (hareket). Burada şişeler dik duruyor → **stehen**." },
      e: "Şişeler dik ve yerinde duruyor: **stehen** + Dativ (*im* Kühlschrank = in dem)." },
    { id: "de-a2-02.17", t: "gap", q: "Das Bild hängt ___ Wand. (an der / an die)", a: ["an der"],
      wrong: { "an die": "**an die** Akkusativ’dir (hareket). Resim zaten asılı → *wo?* → Dativ, dişil: **an der** Wand." },
      e: "*hängen* (durum) → Dativ: die Wand → **an der** Wand." },
    { id: "de-a2-02.18", t: "gap", q: "Am Wochenende fahren wir ___ Meer. (an + das)", a: ["ans", "an das"],
      wrong: { "am": "**am** = an dem (Dativ, “denizde”). *fahren* hareket → “denize” → Akkusativ: an das → **ans**.", "im": "*im Meer* = denizin **içinde**. Kıyıya/denize gitmek için **an das Meer** → ans." },
      e: "*fahren* → wohin? → Akkusativ: an + das Meer = **ans** Meer." }
  ]
});

/* ---------- Zeitangaben & Datum ---------- */
K.add('de-a2-13', {
  lesson: [
    { p: "Türkçede zaman çoğunlukla **-de/-da/-te** ile söylenir: *saat sekiz**de**, temmuz**da**, 2025’**te***; ama *pazartesi günü*, *yazın*, *akşam* gibi biçimler de var. Almancada ise **zamanın türüne göre farklı edat** gerekir. Bu yüzden *in Montag* ✗ ya da *am 8 Uhr* ✗ gibi hatalar çok yapılır. Önce **ana tablo**:" },
    { table: { head: ["Edat", "Ne için?", "Örnek"], rows: [
      ["**am**", "gün, tarih, günün bölümü", "**am** Montag, **am** 3. Mai, **am** Morgen, **am** Abend, **am** Wochenende"],
      ["**um**", "saat", "**um** 8 Uhr, **um** halb neun, **um** Mitternacht"],
      ["**im**", "ay, mevsim, yıl", "**im** Juli, **im** Sommer, **im** Jahr 2025"],
      ["**in der**", "gece", "**in der** Nacht (ama: *am Abend*, *am Morgen*)"]
    ] } },
    { tip: "Gün adları **am** alır (*am Dienstag*), ama saatler **um** (*um 8 Uhr*). Yan yana: *Am Dienstag um 8 Uhr.* Türkçeyi kelimesi kelimesine çevirirsen *Dienstag’da saat 8’de* → ✗. Almancada **her zaman ayrı edat** gerekir. Yıl: **2025** (edatsız) ya da *im Jahr 2025*; *in 2025* ✗." },
    { h: "seit – vor – ab – von … bis – in" },
    { table: { head: ["Edat", "Anlamı", "Zaman yönü", "Örnek"], rows: [
      ["**seit** + Dativ", "-DIr / -den beri", "geçmişte başladı, **hâlâ sürüyor** (fiil Präsens)", "Ich wohne **seit zwei Jahren** hier."],
      ["**vor** + Dativ", "… önce", "geçmişte **bitmiş** bir an (fiil çoğu zaman Perfekt/Präteritum)", "Ich war **vor einer Woche** beim Arzt."],
      ["**in** + Dativ", "… sonra (gelecekte)", "bugünden itibaren gelecek", "Der Bus kommt **in zehn Minuten**."],
      ["**ab** + Dativ", "-den itibaren", "başlangıç noktası", "**Ab Montag** arbeite ich in Bonn."],
      ["**von … bis**", "-den -e kadar", "başlangıç ve bitiş", "Ich arbeite **von Montag bis Freitag**."]
    ] } },
    { p: "**Tuzak:** Türkçede *iki yıl**dır*** (seit zwei Jahren) ile *iki yıl **önce*** (vor zwei Jahren) çok farklıdır, ama öğrenenler ikisini de “**vor**” ya da “**seit**” yapar. Kural: **hâlâ devam ediyorsa seit**, **bitmişse vor**. Ayrıca *seit / vor* sonrasında hep **Dativ**: *seit einem Jahr, vor einer Woche, seit zwei Tagen* (çoğul +n)." },
    { h: "Tarih ve sıra sayıları" },
    { p: "Tarihte **sıra sayısı** kullanılır: *der erste Mai*, *am ersten Mai*. Yazıda nokta yazılır: **1. Mai**, **3. Mai**. Soru: ***Der Wievielte ist heute?*** (Bugün ayın kaçı?) – *Heute ist der 3. Mai.* ; ***Wann*** *hast du Geburtstag?* – *Am 7. Juni.*" },
    { table: { head: ["Sayı", "Sıra sayısı", "Dativ (am …)"], rows: [
      ["1.", "erste", "am **ersten**"],
      ["2.", "zweite", "am **zweiten**"],
      ["3.", "dritte", "am **dritten**"],
      ["4.–6.", "vierte, fünfte, sechste", "am **vierten**, **fünften**, **sechsten**"],
      ["7.", "siebte", "am **siebten**"],
      ["8.", "achte", "am **achten**"],
      ["9.–19.", "neunte … neunzehnte (+ -te)", "am **zehnten**, **zwölften**, **neunzehnten**"],
      ["20.–31.", "zwanzigste … (+ -ste)", "am **zwanzigsten**, **einunddreißigsten**"]
    ] } },
    { tip: "1–19 arası **-te**, 20’den sonra **-ste**. Düzensizler: **erste, dritte, siebte, achte**. *am* ile Dativ olduğu için sonuna **-n** gelir: *am dritte**n** Mai*. Konuşmada *am Dritten* demek de mümkündür; yazıda genelde “am 3. Mai” yazılır." },
    { ex: [
      ["Der Deutschkurs beginnt am Montag um neun Uhr.", "Almanca kursu pazartesi günü saat dokuzda başlıyor."],
      ["Im Sommer fahren wir ans Meer.", "Yazın denize gidiyoruz."],
      ["Ich arbeite seit drei Monaten bei dieser Firma.", "Üç aydır bu firmada çalışıyorum."],
      ["Vor einer Woche war ich krank.", "Bir hafta önce hastaydım."],
      ["Mein Geburtstag ist am zwanzigsten Februar.", "Doğum günüm 20 Şubat’ta."]
    ] }
  ],
  exercises: [
    { id: "de-a2-13.1", t: "mc", q: "“Pazartesi günü doktora gidiyorum.” Hangisi doğru?", o: ["Ich gehe in Montag zum Arzt.", "Ich gehe am Montag zum Arzt.", "Ich gehe um Montag zum Arzt.", "Ich gehe im Montag zum Arzt."], a: 1,
      why: { 0: "**in** gün adlarıyla kullanılmaz. Türkçedeki “-da” alışkanlığıyla yapılan en sık hata budur.", 2: "**um** sadece saat içindir (*um 8 Uhr*), gün için değil.", 3: "**im** ay ve mevsim içindir (*im Mai, im Winter*), gün için değil." },
      e: "Gün adı → **am**: am Montag, am Freitag. (Saat → **um**, ay → **im**.)" },
    { id: "de-a2-13.2", t: "gap", q: "Der Kurs beginnt ___ 8 Uhr.", a: ["um"],
      wrong: { "am": "**am** gün/tarih içindir (*am Montag*). Saat için **um** gerekir.", "im": "**im** ay ve mevsim için; saat için değil.", "in": "*in* gelecekteki süre içindir (*in zehn Minuten* = on dakika sonra), saat için değil." },
      e: "Saat → **um**: *um 8 Uhr, um halb neun*. “am 8 Uhr” Almancada yoktur." },
    { id: "de-a2-13.3", t: "gap", q: "Wir haben ___ Juli Urlaub. (Temmuzda tatildeyiz.)", a: ["im"],
      wrong: { "am": "**am** gün ve tarih içindir (*am 3. Juli*). “Temmuzda” (ay) → **im**.", "in": "*in Juli* değil: ay adlarında kaynaşmış hâl **im** (in dem) kullanılır." },
      e: "Ay ve mevsim → **im**: im Juli, im Sommer, im Winter." },
    { id: "de-a2-13.4", t: "mc", q: "Ich wohne ___ drei Jahren in Köln. (Üç yıldır Köln’de oturuyorum.)", o: ["vor", "seit", "ab", "von"], a: 1,
      why: { 0: "**vor drei Jahren** = üç yıl **önce** (bitmiş). Sen hâlâ Köln’de oturuyorsun.", 2: "**ab** başlangıç noktası içindir (*ab Montag*), süre için değil.", 3: "**von** *von … bis* ile birlikte kullanılır, tek başına süre bildirmez." },
      e: "Hâlâ devam eden süre → **seit** + Dativ: *seit drei Jahren* (Präsens: *ich wohne*)." },
    { id: "de-a2-13.5", t: "mc", q: "“İki hafta önce doktordaydım.” Hangisi doğru?", o: ["Ich war seit zwei Wochen beim Arzt.", "Ich war vor zwei Wochen beim Arzt.", "Ich war ab zwei Wochen beim Arzt.", "Ich war in zwei Wochen beim Arzt."], a: 1,
      why: { 0: "**seit** hâlâ süren bir durum için; “beim Arzt war ich” bitmiş bir olay.", 2: "**ab** “-den itibaren”, geçmişteki bir an için kullanılmaz.", 3: "**in zwei Wochen** = iki hafta **sonra** (gelecek)." },
      e: "Geçmişte bir an, “… önce” → **vor** + Dativ: *vor zwei Wochen*. Gelecek için *in*, geçmiş için *vor*." },
    { id: "de-a2-13.6", t: "gap", q: "Ich lerne Deutsch ___ einem Jahr. (bir yıldır)", a: ["seit"],
      wrong: { "vor": "**vor einem Jahr** = bir yıl önce (bitmiş). Burada “bir yıldır öğreniyorum” (hâlâ devam) → **seit**.", "ab": "**ab** bir başlangıç noktasıdır (*ab Montag*), “bir yıldır” anlamı vermez." },
      e: "“-DIr” (bir yıldır) = **seit einem Jahr**, fiil Präsens’te kalır: *ich lerne*." },
    { id: "de-a2-13.7", t: "gap", q: "Der Laden ist von 8 ___ 20 Uhr geöffnet.", a: ["bis"],
      wrong: { "zu": "Türkçe “-e kadar” kalıbının çevirisi gibi görünür ama doğru edat **bis**: *von 8 bis 20 Uhr*.", "nach": "**nach** “-den sonra”, sınır bildirmez." },
      e: "*von … bis …* = “-den … -e kadar”. Saatten önce *um* gelmez: *von 8 bis 20 Uhr*." },
    { id: "de-a2-13.8", t: "gap", q: "___ morgen arbeite ich in Bonn. (yarından itibaren)", a: ["ab"],
      wrong: { "seit": "**seit** geçmişte başlayan şey içindir. Yarın gelecekte → **ab** morgen.", "von": "*von* tek başına “yarından” anlamı vermez; **ab** kullan." },
      e: "Bir noktadan itibaren (gelecek): **ab** morgen, **ab** Montag, **ab** nächster Woche." },
    { id: "de-a2-13.9", t: "order", q: "Cümleyi kur – **Am Freitag** ile başla: “Cuma günü doktorda randevum var.”", w: ["einen Termin", "Am Freitag", "habe", "ich", "beim Arzt"], a: ["Am Freitag habe ich einen Termin beim Arzt"],
      e: "Zaman ilk sıradaysa fiil yine **2. sıraya** gelir, özne fiilin arkasına geçer: *Am Freitag **habe ich** …* (Inversion)." },
    { id: "de-a2-13.10", t: "order", q: "Cümleyi kur: “Saat yedide kalkıyorum.”", w: ["auf", "stehe", "um sieben Uhr", "Ich"], a: ["Ich stehe um sieben Uhr auf", "Um sieben Uhr stehe ich auf"],
      e: "*aufstehen* ayrılabilir fiildir: **stehe … auf**. Saat bilgisi (*um sieben Uhr*) ikisinin arasına girer." },
    { id: "de-a2-13.11", t: "mc", q: "“3 Mayıs’ta” – Hangisi doğru?", o: ["am drei Mai", "am dritten Mai", "im dritten Mai", "am dreiten Mai"], a: 1,
      why: { 0: "Tarihte **sıra sayısı** gerekir (dritten), temel sayı (drei) değil.", 2: "Tarih = gün → **am**. *im* sadece ay adı tek başına geldiğinde: *im Mai*.", 3: "3. sıra sayısı düzensizdir: dri**tte**, “dreite” diye bir şey yok." },
      e: "Tarih → **am** + sıra sayısı + **-n**: *am dritten Mai*. Yazıda: *am 3. Mai*." },
    { id: "de-a2-13.12", t: "gap", q: "Mein Geburtstag ist am ___ Juni. (7.)", a: ["siebten", "siebenten"],
      wrong: { "siebte": "*am* → Dativ → **-n**: am siebte**n**.", "sieben": "Tarihte **sıra sayısı** gerekir: 7. = siebte → *am siebten*.", "siebter": "*am* sonrası Dativ’dir ve sıra sayısı **-n** ile biter: am sieb**ten** Juni. **-r** (siebter) Nominativ eril biçimdir."},
      e: "7. = **siebte** (siebente’nin kısa biçimi, “-en-” düşer). Dativ: am sieb**ten**. Düzensizler: erste, dritte, siebte, achte." },
    { id: "de-a2-13.13", t: "gap", q: "Der Kurs endet am ___ Dezember. (20.)", a: ["zwanzigsten"],
      wrong: { "zwanzigten": "20’den itibaren sıra sayısı **-ste** ile yapılır: zwanzig**ste**. (1–19 arası -te.)", "zwanzigste": "*am* → Dativ → **-n**: am zwanzigste**n**.", "zwanzig": "Temel sayı değil, **sıra sayısı** gerekir: zwanzig**sten**." },
      e: "20.–31. → **-ste**: am zwanzig**sten**, am einunddreißig**sten**." },
    { id: "de-a2-13.14", t: "match", q: "Türkçe zaman ifadesini Almancasıyla eşleştir:", p: [["yazın", "im Sommer"], ["pazar günü", "am Sonntag"], ["saat dokuzda", "um neun Uhr"], ["ekimde", "im Oktober"], ["akşam", "am Abend"]],
      e: "Türkçede farklı biçimler (-DA, -In, ekesiz), Almancada: mevsim/ay → **im**, gün/günün bölümü → **am**, saat → **um**." },
    { id: "de-a2-13.15", t: "match", q: "Eşleştir:", p: [["seit zwei Jahren", "iki yıldır"], ["vor zwei Jahren", "iki yıl önce"], ["in zwei Jahren", "iki yıl sonra"], ["ab Montag", "pazartesiden itibaren"], ["von Montag bis Freitag", "pazartesiden cumaya kadar"]],
      e: "**seit** = devam eden süre, **vor** = geçmişte “önce”, **in** = gelecekte “sonra”, **ab** = başlangıç noktası, **von … bis** = aralık." },
    { id: "de-a2-13.16", t: "mc", q: "“Tren sekizde geliyor.” Hangisi doğru?", o: ["Der Zug kommt am 8 Uhr an.", "Der Zug kommt um 8 Uhr an.", "Der Zug kommt im 8 Uhr an.", "Der Zug kommt in 8 Uhr an."], a: 1,
      why: { 0: "*am* gün/tarih için; saat için kullanılmaz. Sık yapılan hata!", 2: "*im* ay ve mevsim içindir.", 3: "*in 8 Uhr* diye bir ifade yoktur. *in* süre içindir: *in acht Minuten* (8 dakika sonra)." },
      e: "Saat → **um**: *um 8 Uhr*. (*ankommen* de ayrılabilir: kommt … **an**.)" },
    { id: "de-a2-13.17", t: "gap", q: "Ich arbeite ___ Wochenende nicht.", a: ["am"],
      wrong: { "im": "*im Wochenende* diye kullanılmaz; *Wochenende* için sabit kalıp **am Wochenende** (hafta sonu günleri gibi).", "in": "*in dem Wochenende* demezsin. Doğrusu **am Wochenende**." },
      e: "Hafta sonu, günün bölümleri → **am**: am Wochenende, am Morgen, am Abend." },
    { id: "de-a2-13.18", t: "gap", q: "Der Bus kommt ___ zehn Minuten. (on dakika sonra)", a: ["in"],
      wrong: { "vor": "**vor zehn Minuten** = on dakika **önce**. Otobüs henüz gelmedi → gelecek → **in**.", "nach": "**nach** “-den sonra” gibi görünür, ama bugünden itibaren gelecekte süre için **in** kullanılır.", "seit": "**seit** hâlâ süren bir durum içindir, otobüs gelecekte gelecek." },
      e: "Bugünden itibaren gelecekte süre → **in** + Dativ: *in zehn Minuten, in einer Woche*." }
  ]
});

/* ---------- Reflexive Verben ---------- */
K.add('de-a2-07', {
  lesson: [
    { p: "Türkçede *yıka**n**mak*, *giyi**n**mek* gibi fiillerde **-(I)n-** eki (dönüşlü: eylem kişinin kendi üzerine döner), *bulu**ş**mak* gibilerde **-(I)ş-** eki (işteş: karşılıklı eylem) vardır. Almancada bu ekler yoktur: onun yerine **dönüşlülük zamiri** (Reflexivpronomen) konur: *sich waschen*, *sich anziehen*, *sich freuen*, *sich treffen*." },
    { table: { head: ["Özne", "Zamir (Akkusativ)", "Örnek: sich waschen"], rows: [
      ["ich", "**mich**", "Ich wasche **mich**."],
      ["du", "**dich**", "Du wäschst **dich**."],
      ["er / sie / es", "**sich**", "Er wäscht **sich**."],
      ["wir", "**uns**", "Wir waschen **uns**."],
      ["ihr", "**euch**", "Ihr wascht **euch**."],
      ["sie (çoğul) / Sie", "**sich**", "Sie waschen **sich**."]
    ] } },
    { tip: "Zamirler *mich, dich, uns, euch* tanıdık (Akkusativ). Yeni olan tek şey **sich**: er, sie, es, sie (çoğul) ve nezaket *Sie* için **hep sich**. Büyük hata: Türkçede ek olduğu için zamiri **hiç söylememek**: *Ich wasche jeden Morgen.* ✗ → *Ich wasche **mich** jeden Morgen.* ✓" },
    { h: "Önemli dönüşlü fiiller" },
    { table: { head: ["Fiil", "Türkçe", "Örnek"], rows: [
      ["sich waschen / duschen", "yıkanmak / duş almak (*duschen* zamirsiz de olur)", "Nach dem Sport dusche ich mich."],
      ["sich anziehen", "giyinmek", "Die Kinder ziehen sich an."],
      ["sich setzen", "oturmak (hareket)", "Setz dich bitte!"],
      ["sich beeilen", "acele etmek", "Wir müssen uns beeilen."],
      ["sich treffen (mit)", "buluşmak", "Ich treffe mich mit Julia."],
      ["sich freuen (auf / über)", "sevinmek", "Ich freue mich auf das Wochenende."],
      ["sich interessieren (für)", "ilgilenmek", "Er interessiert sich für Musik."],
      ["sich erinnern (an)", "hatırlamak", "Ich erinnere mich an den Urlaub."],
      ["sich entschuldigen", "özür dilemek", "Entschuldigen Sie sich bei ihm!"],
      ["sich ärgern (über)", "kızmak", "Warum ärgerst du dich?"],
      ["sich fühlen", "kendini hissetmek", "Ich fühle mich nicht gut."]
    ] } },
    { p: "**sich freuen** iki edatla gelir: **auf** + Akk = *gelecekteki* şeye sevinmek (*Ich freue mich **auf** den Urlaub.* – tatili dört gözle bekliyorum), **über** + Akk = *olmuş / şu anki* şeye sevinmek (*Ich freue mich **über** das Geschenk.* – hediyeye sevindim)." },
    { h: "Dikkat: Türkçede dönüşlü, Almancada değil" },
    { p: "Her “-n-” fiili Almancada dönüşlü değildir. *evle**n**mek* → **heiraten** (zamir yok), *uyan**mak* → **aufwachen** (zamir yok). Ters yönde de olur: *dinlenmek* → **sich ausruhen** (Türkçede -n- yok, Almancada **sich** var), *acele etmek* → **sich beeilen**. Bu yüzden fiili **zamirle birlikte** öğren." },
    { h: "Cümlede yer ve Perfekt" },
    { p: "Zamir fiilden hemen **sonra** gelir: *Ich ziehe **mich** schnell an.* Perfekt’te *haben* kullanılır, zamir yine hemen arkasından gelir: *Wir haben **uns** gestern getroffen.* Özne fiilin arkasındaysa zamir özneden sonra durur: *Warum ärgerst du **dich**?*" },
    { h: "Kısa not: sich die Hände waschen" },
    { p: "Cümlede **başka bir nesne** varsa (vücut parçası, giysi) zamir **Dativ** olur: *Ich wasche **mir** die Hände.* (ellerimi yıkıyorum), *Du putzt **dir** die Zähne.* Dativ zamirler: **mir, dir, sich, uns, euch, sich** – yalnızca *ich* ve *du*’da *mich/dich* yerine *mir/dir* olur." },
    { ex: [
      ["Ich stehe um sieben Uhr auf und dusche mich.", "Saat yedide kalkıp duş alıyorum."],
      ["Danach ziehe ich mich an und frühstücke.", "Sonra giyinip kahvaltı ediyorum."],
      ["Meine Kinder freuen sich auf die Ferien.", "Çocuklarım tatili dört gözle bekliyor."],
      ["Wir treffen uns um halb acht am Bahnhof.", "Saat yedi buçukta istasyonda buluşuyoruz."],
      ["Ich wasche mir vor dem Essen die Hände.", "Yemekten önce ellerimi yıkıyorum."]
    ] }
  ],
  exercises: [
    { id: "de-a2-07.1", t: "mc", q: "“Her sabah yıkanırım.” Hangisi doğru?", o: ["Ich wasche jeden Morgen.", "Ich wasche mich jeden Morgen.", "Ich wasche dich jeden Morgen.", "Ich wasche sich jeden Morgen."], a: 1,
      why: { 0: "Zamir eksik: **waschen** tek başına “bir şeyi yıkamak” demektir (*die Wäsche waschen*). Kendini yıkamak için **mich** gerekir.", 2: "**dich** “seni” demektir; özne *ich* → **mich**.", 3: "**sich** er/sie/es içindir; *ich* ile **mich** kullanılır." },
      e: "Türkçede -n- eki işi yapar; Almancada **mich/dich/sich…** zamiri gerekir. ich → **mich**." },
    { id: "de-a2-07.2", t: "gap", q: "Er duscht ___ am Abend. (mich / sich / ihn) (Akşamları duş alıyor.)", a: ["sich"],
      wrong: { "ihn": "**ihn** “onu” (başka biri) demektir. Kendisi duş alıyor → **sich**.", "mich": "**mich** sadece *ich* ile kullanılır; özne *er* → **sich**." },
      e: "er / sie / es → hep **sich**: *Er duscht **sich**.*" },
    { id: "de-a2-07.3", t: "gap", q: "Wir treffen ___ um sieben Uhr. (uns / sich / wir)", a: ["uns"],
      wrong: { "sich": "**sich** er/sie/es/sie (çoğul) içindir. Özne *wir* → **uns**.", "wir": "**wir** özne zamiridir (Nominativ); dönüşlülük zamiri olarak **uns** gerekir." },
      e: "wir → **uns**: *Wir treffen **uns** …* (buluşuyoruz – “birbirimizle” anlamı da içinde)." },
    { id: "de-a2-07.4", t: "gap", q: "Du musst ___ beeilen. (mich / dich / sich)", a: ["dich"],
      wrong: { "sich": "Özne *du* → **dich**. *sich* üçüncü kişiler içindir.", "mich": "**mich** *ich* içindir; burada özne *du*." },
      e: "du → **dich**. *sich beeilen* = acele etmek; modal fiille mastar sonda: *Du musst **dich** beeilen.*" },
    { id: "de-a2-07.5", t: "gap", q: "Ihr freut ___ auf das Wochenende. (euch / sich / uns)", a: ["euch"],
      wrong: { "sich": "Özne *ihr* → **euch**; *sich* er/sie/es/sie (çoğul) içindir.", "uns": "**uns** *wir* içindir; burada özne *ihr*." },
      e: "ihr → **euch**. *sich freuen auf* + Akkusativ = gelecekteki bir şeye sevinmek." },
    { id: "de-a2-07.6", t: "mc", q: "Hangi cümle **yanlış**?", o: ["Meine Kinder freuen sich auf die Ferien.", "Meine Kinder freuen sie auf die Ferien.", "Ich freue mich auf den Urlaub.", "Wir freuen uns auf die Party."], a: 1,
      why: { 0: "Doğru: *Kinder* = sie (çoğul) → **sich**.", 2: "Doğru: *ich* → **mich**.", 3: "Doğru: *wir* → **uns**." },
      e: "**sie** (onları) dönüşlülük zamiri değildir. Özne çoğul 3. kişi ise **sich** gerekir: *Meine Kinder freuen **sich**.*" },
    { id: "de-a2-07.7", t: "mc", q: "Ich freue mich ___ dein Geschenk. (Hediyene sevindim.)", o: ["auf", "über", "an", "für"], a: 1,
      why: { 0: "**auf** gelecekteki bir şeyi bekleyerek sevinmektir (*auf den Urlaub*). Hediye zaten geldi.", 2: "*sich freuen an* diye bir kullanım A2’de gerekmez; doğru olan **über**.", 3: "*sich freuen für* + kişi = biri adına sevinmek (*Ich freue mich für dich*). Bir şeye sevinmek: **über**." },
      e: "Olmuş / şu anki şey → **sich freuen über** + Akkusativ. Gelecek → **auf**." },
    { id: "de-a2-07.8", t: "mc", q: "Hangi fiil Almancada dönüşlü **değildir**?", o: ["sich waschen", "sich anziehen", "heiraten", "sich freuen"], a: 2,
      why: { 0: "Türkçe *yıka**n**mak* gibi Almancada da dönüşlü: **sich** waschen.", 1: "*giyi**n**mek* = **sich** anziehen, dönüşlü.", 3: "*sevi**n**mek* = **sich** freuen, dönüşlü." },
      e: "Türkçe *evle**n**mek* -n- içerir, ama Almanca **heiraten** zamirsiz kullanılır: *Sie heiraten im Mai.* Her -n- fiili dönüşlü değildir." },
    { id: "de-a2-07.9", t: "gap", q: "Ich interessiere mich ___ Fußball.", a: ["für"],
      wrong: { "an": "*an* bu fiille kullanılmaz; sabit kalıp **sich interessieren für**.", "auf": "*auf* **sich freuen auf** ile kullanılır; *interessieren* ile **für**.", "über": "*über* **sich freuen / ärgern über** ile gelir; “ilgilenmek” için **für**." },
      e: "**sich interessieren für** + Akkusativ: *für Fußball, für Musik, für Kunst*. Fiil + edat birlikte öğrenilir." },
    { id: "de-a2-07.10", t: "gap", q: "Sie erinnert sich ___ ihre Kindheit.", a: ["an"],
      wrong: { "für": "**für** *interessieren* ile kullanılır. *Erinnern* ile **an**.", "auf": "**auf** *freuen auf* içindir; hatırlamak için **an**." },
      e: "**sich erinnern an** + Akkusativ: *an den Urlaub, an die Kindheit*." },
    { id: "de-a2-07.11", t: "order", q: "Cümleyi kur: “Çabucak giyiniyorum.”", w: ["an", "ziehe", "mich", "schnell", "Ich"], a: ["Ich ziehe mich schnell an", "Schnell ziehe ich mich an"],
      e: "*sich anziehen* ayrılabilir: **ziehe … an**. Zamir fiilin hemen arkasında: *ziehe **mich***." },
    { id: "de-a2-07.12", t: "order", q: "Cümleyi kur – **Wir** ile başla: “Dün kafede buluştuk.”", w: ["getroffen", "haben", "uns", "Wir", "gestern", "im Café"], a: ["Wir haben uns gestern im Café getroffen"],
      e: "Perfekt: *haben* 2. sırada, zamir hemen arkasından, **Partizip II sonda** (*getroffen*). *sich treffen* Perfekt’te *haben* alır." },
    { id: "de-a2-07.13", t: "order", q: "Soruyu kur: “Neden kızıyorsun?”", w: ["dich", "du", "ärgerst", "Warum"], a: ["Warum ärgerst du dich"],
      e: "Soru sözcüğü 1., fiil 2.; özne **du**’dan sonra zamir **dich** gelir." },
    { id: "de-a2-07.14", t: "match", q: "Özne zamirini dönüşlülük zamiriyle eşleştir:", p: [["ich", "mich"], ["du", "dich"], ["wir", "uns"], ["ihr", "euch"], ["sie (çoğul)", "sich"]],
      e: "Bunlar Akkusativ zamirleriyle aynı; tek yenilik **sich** (er, sie, es, sie çoğul, Sie)." },
    { id: "de-a2-07.15", t: "match", q: "Türkçe fiili Almancasıyla eşleştir:", p: [["yıkanmak", "sich waschen"], ["giyinmek", "sich anziehen"], ["sevinmek", "sich freuen"], ["buluşmak", "sich treffen"], ["özür dilemek", "sich entschuldigen"], ["acele etmek", "sich beeilen"]],
      e: "Hepsinde **sich** hazır tutulur ve çekimde kişiye göre değişir (mich, dich, uns…). Fiili hep zamirle birlikte ezberle." },
    { id: "de-a2-07.16", t: "gap", q: "Ich wasche ___ die Hände. (mich / mir)", a: ["mir"],
      wrong: { "mich": "Bu yapıda (vücut parçası/giysi nesne olunca) zamir **Dativ** olur: **mir**." },
      e: "Yıkanan şey vücut parçası/giysiyse: *Ich wasche **mir** die Hände.* (Kendimi değil, **ellerimi** yıkıyorum.)" },
    { id: "de-a2-07.17", t: "mc", q: "“Sabah yedide kalkarım.” Hangisi doğru?", o: ["Ich stehe um sieben Uhr mich auf.", "Ich stehe um sieben Uhr auf.", "Ich stehe mich um sieben Uhr auf.", "Ich stehe um sieben Uhr sich auf."], a: 1,
      why: { 0: "**aufstehen** dönüşlü değildir; zamir hiç gerekmez.", 2: "*aufstehen* dönüşlü değil; *mich* fazladır.", 3: "*sich* hem fazladır hem de *ich* ile uyumsuzdur." },
      e: "**aufstehen** = kalkmak, zamirsiz. Her “günlük rutin” fiili dönüşlü değildir: *aufstehen, frühstücken, arbeiten* zamirsiz; *sich waschen, sich anziehen* zamirli." },
    { id: "de-a2-07.18", t: "gap", q: "Meine Mutter fühlt ___ heute nicht gut. (mich / mir / sich)", a: ["sich"],
      wrong: { "mich": "**mich** *ich* içindir; özne *meine Mutter* = sie → **sich**.", "mir": "**mir** Dativ zamiridir; *sich fühlen* Akkusativ dönüşlü zamir ister, üçüncü kişi için **sich**." },
      e: "**sich fühlen** + sıfat/zarf: *Sie fühlt **sich** nicht gut.* er/sie/es → **sich**." }
  ]
});

})(window.KOPRU);
