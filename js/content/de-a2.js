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

})(window.KOPRU);
