/* Türkisch A2 – Lesetexte für Deutschsprechende (Erklärungen auf Deutsch)
 * Format: K.addText('tr-a2-rNN', { level, kind:'read', scene, genre, title (TR), sub (DE), body, gloss, questions }).
 * Fragen-IDs '<textId>.qN' sind fest und werden nie geändert oder wiederverwendet.
 * Paket 3: tr-a2-r01 (hastane), tr-a2-r02 (bayram). Paket 4: tr-a2-r03 (otel), tr-a2-r04 (ev). Paket 5: tr-a2-r05 (kargo), tr-a2-r06 (ofis). Paket 6: tr-a2-r07 bis r12 (Lesetexte), tr-a2-h01 bis h10 (Hörtexte).
 */
(function (K) {

K.addText('tr-a2-r01', {
  level: 'A2', kind: 'read', scene: 'hastane', genre: 'hinweis',
  title: "Eczaneden bir not", sub: "Ein Zettel aus der Apotheke",
  body: [
    "Sayın Ayşe Hanım,",
    "doktorunuz size iki ilaç yazdı. Beyaz ilacı günde üç kez alın: sabah, öğle ve akşam, yemekten sonra. Sarı ilacı sadece akşam alın. Bol su için ve sıcak çorba yiyin. Kahve ve çay içmeyin. Yemekten önce ilaç almayın. Akşam erken yatın.",
    "Sarı ilaç sizi uykulu yapar, araba kullanmayın. İki gün evde dinlenin, işe gitmeyin. Üç gün sonra tekrar doktora gidin. Sorunuz var mı? Bizi arayın, her gün çalışırız. Eczane sabah dokuzdan akşam altıya kadar açık.",
    "Geçmiş olsun!",
    "Güneş Eczanesi"
  ],
  gloss: { "kez": "Mal", "uykulu": "schläfrig", "kullanmayın": "fahren / benutzen", "dinlenin": "ruhen Sie sich aus", "yatın": "gehen Sie ins Bett", "tekrar": "wieder", "sadece": "nur", "öğle": "Mittag", "alın": "nehmen Sie", "almayın": "nehmen Sie nicht", "erken": "früh", "gidin": "gehen Sie", "içmeyin": "trinken Sie nicht", "işe": "zur Arbeit", "yiyin": "essen Sie" },
  questions: [
    { id: "tr-a2-r01.q1", t: "mc", q: "Wie soll Frau Ayşe die weiße Tablette nehmen?", o: ["Einmal am Tag, abends", "Dreimal am Tag nach dem Essen", "Dreimal am Tag vor dem Essen", "Nur bei Schmerzen"], a: 1,
      why: { 0: "Nur die **gelbe** (*sarı*) Tablette nimmt sie abends: *Sarı ilacı sadece akşam alın.*", 2: "*yemekten sonra* heißt „nach dem Essen“, nicht „vor“.", 3: "Davon steht nichts im Text. Die Tablette nimmt sie **regelmäßig**: *günde üç kez*." },
      e: "*Beyaz ilacı günde üç kez alın … yemekten sonra.* = „Die weiße Tablette dreimal am Tag nehmen … nach dem Essen.“ *alın* ist der höfliche Befehl (Sie) von *almak*." },
    { id: "tr-a2-r01.q2", t: "gap", q: "Frau Ayşe soll nicht arbeiten gehen: „İşe ___ .“ (gitmek – Verbot, Sie)", a: ["gitmeyin", "gitmeyiniz"],
      wrong: { "gitme": "*gitme* ist die du-Form. Der Zettel spricht Frau Ayşe mit „Sie“ an → **-yin**.", "gitmek": "Infinitiv – kein Verbot. Stamm + -me + **-yin**.", "gitmeyen": "Die Endung heißt -yIn (Befehl), nicht -yAn." },
      e: "Verbot (Sie) = Stamm + **-mA** + **-yIn**: git-**me**-**yin**. Wie im Text: *Kahve ve çay içmeyin.*" },
    { id: "tr-a2-r01.q3", t: "match", q: "Ordne die Anweisung aus dem Text der Bedeutung zu:", p: [["Bol su için.", "Viel Wasser trinken."], ["Kahve içmeyin.", "Keinen Kaffee trinken."], ["Evde dinlenin.", "Zu Hause ausruhen."], ["Doktora tekrar gidin.", "Wieder zum Arzt gehen."]],
      e: "Alle Anweisungen sind Befehle an „Sie“ auf **-(y)In**. Die verneinte Form hat **-mA-**: *içmeyin*." },
    { id: "tr-a2-r01.q4", t: "mc", q: "Warum soll Frau Ayşe nicht Auto fahren?", o: ["Das gelbe Medikament macht müde.", "Sie hat Fieber.", "Die Apotheke ist geschlossen.", "Der Arzt hat es nicht erlaubt, ohne Grund."], a: 0,
      why: { 1: "Fieber wird im Text nicht erwähnt.", 2: "Die Apotheke arbeitet *her gün* („jeden Tag“).", 3: "Der Text nennt einen Grund: *Sarı ilaç sizi uykulu yapar.*" },
      e: "*Sarı ilaç sizi uykulu yapar, araba kullanmayın.* = „Das gelbe Medikament macht Sie schläfrig, fahren Sie nicht Auto.“ *yapar* ist der Aorist (allgemein gültig)." },
    { id: "tr-a2-r01.q5", t: "mc", q: "Sprachmittlung: Frau Ayşes Mann Thomas versteht kein Türkisch und fragt dich, was auf dem Zettel steht. Was sagst du ihm?", o: ["Beide Tabletten einmal am Tag, viel Kaffee trinken, sofort wieder arbeiten.", "Weiße Tablette dreimal täglich nach dem Essen, gelbe nur abends; viel Wasser, keinen Kaffee oder Tee, zwei Tage zu Hause ausruhen, nicht Auto fahren.", "Gelbe Tablette dreimal täglich, weiße nur abends; Kaffee ist erlaubt; nach einer Woche zum Arzt.", "Nur Wasser trinken und warten; die Tabletten braucht sie nicht, wenn sie Suppe isst."], a: 1,
      why: { 0: "Kaffee ist **verboten** (*Kahve ve çay içmeyin*), und sie soll **ruhen**, nicht arbeiten.", 2: "Die Farben sind vertauscht: **weiß** dreimal, **gelb** nur abends. Kaffee ist verboten; zum Arzt erst nach drei Tagen.", 3: "Suppe ersetzt die Tabletten nicht: Sie soll beides tun." },
      e: "Du gibst die Hauptpunkte in einfachen deutschen Sätzen weiter: Dosierung (Farben!), Trinken, Ruhe, Auto fahren, Arzt in drei Tagen." }
  ]
});

K.addText('tr-a2-r02', {
  level: 'A2', kind: 'read', scene: 'bayram', genre: 'nachricht',
  title: "Bayram daveti", sub: "Einladung zum Bayram",
  body: [
    "Merhaba Selin,",
    "Bayramda bize gelir misiniz? Annem büyük bir sofra hazırlıyor ve sizi görmek istiyor. Dedem ve babaannem de sizi çok bekliyor. Pazar sabahı saat dokuzda dedemde buluşalım, sonra hep birlikte bize gidelim. Öğle yemeğini bizde yeriz. Saat birde sofraya otururuz.",
    "Sizinle konuşmak için biraz erken gelin. Tatlı yapmayın, ben baklava alıyorum. Çocukları da getirin, kuzenleriyle oynamayı çok seviyorlar.",
    "Hep birlikte güzel bir bayram geçiririz. Cevabını bekliyorum. Akşam telefonda konuşalım. Bayramın kutlu olsun!",
    "Sevgiler, Elif"
  ],
  gloss: { "sofra": "gedeckter Tisch", "kuzenleriyle": "mit ihren Cousins/Cousinen", "Bayramın kutlu olsun": "Frohes Fest", "baklava": "Baklava (Blätterteiggebäck)", "babaannem": "meine Oma (väterlicherseits)", "buluşalım": "lass uns treffen", "getirin": "bringt mit", "tatlı": "Nachtisch", "hazırlıyor": "bereitet vor", "hep": "alle / zusammen", "alıyorum": "ich kaufe", "erken": "früh", "gidelim": "lass uns gehen", "öğle": "Mittag" },
  questions: [
    { id: "tr-a2-r02.q1", t: "mc", q: "Wo trifft man sich am Sonntagmorgen um neun Uhr?", o: ["Bei Selin zu Hause", "Beim Opa", "Im Restaurant", "Bei Elif zu Hause"], a: 1,
      why: { 0: "Selin ist die **Empfängerin** der Nachricht und wird eingeladen. Elif ist die Absenderin.", 2: "Von einem Restaurant steht nichts im Text.", 3: "Zu ihr geht man erst **danach**: *sonra hep birlikte bize gidelim*." },
      e: "*Pazar sabahı saat dokuzda dedemde buluşalım* = „Treffen wir uns Sonntagmorgen um neun bei meinem Opa.“ *dedemde* = bei meinem Opa (Lokativ). *-elim* ist die Wunschform „lass uns“." },
    { id: "tr-a2-r02.q2", t: "gap", q: "Annem sizi ___ istiyor. (görmek – Meine Mutter möchte euch sehen.)", a: ["görmek"],
      wrong: { "görmeyi": "Nach *istemek* bleibt der Infinitiv ohne Akkusativ: *görmek istiyor*.", "görme": "Ohne -k ist es kein Infinitiv: *görmek*.", "görüyor": "Nur *istemek* wird konjugiert (*istiyor*). *görmek* bleibt Infinitiv." },
      e: "**Infinitiv + istemek**: *sizi görmek istiyor*. Der Infinitiv bleibt unverändert." },
    { id: "tr-a2-r02.q3", t: "match", q: "Ordne die Form der Bedeutung zu:", p: [["gidelim", "lass uns gehen"], ["buluşalım", "lass uns treffen"], ["konuşalım", "lass uns sprechen"], ["gelin", "kommt"], ["getirin", "bringt mit"]],
      e: "**-(y)Alım / -(y)Elim** = „wir wollen / lass uns“. **-(y)In** = „kommt / bringt“ (an mehrere oder höflich)." },
    { id: "tr-a2-r02.q4", t: "mc", q: "Warum sollen die Gäste etwas früher kommen?", o: ["Um beim Kochen zu helfen.", "Um in Ruhe miteinander zu sprechen.", "Um Baklava mitzubringen.", "Weil das Essen schon um zehn beginnt."], a: 1,
      why: { 0: "Davon steht nichts im Text. Die Mutter bereitet alles vor.", 2: "Baklava bringt **Elif** (die Absenderin) mit: *ben baklava alıyorum*.", 3: "Das Mittagessen (*öğle yemeği*) ist mittags, nicht um zehn." },
      e: "*Sizinle konuşmak için biraz erken gelin.* = „Kommt etwas früher, um mit euch zu sprechen.“ *-mAk için* nennt den Zweck." },
    { id: "tr-a2-r02.q5", t: "mc", q: "Sprachmittlung: Selins Mann Jonas versteht kein Türkisch und fragt dich, was in der Nachricht steht. Was sagst du ihm?", o: ["Ihr trefft euch am Sonntag um neun beim Opa der Absenderin; danach gehen alle zur Familie der Absenderin zum Mittagessen. Ihr sollt keinen Nachtisch machen, die Kinder dürfen mitkommen, und man telefoniert am Abend.", "Ihr sollt am Sonntag um neun zu Elif kommen und einen Nachtisch selbst backen. Die Kinder bleiben zu Hause.", "Ihr sollt am Sonntag um zwölf zum Opa kommen und das Mittagessen mitbringen. Danach telefoniert man.", "Die Einladung gilt nur für Erwachsene; das Treffen ist am Abend im Restaurant."], a: 0,
      why: { 1: "Der Nachtisch wird **nicht** gebacken (*Tatlı yapmayın*), und die Kinder sollen mitkommen (*Çocukları da getirin*).", 2: "Das Treffen ist um **neun** Uhr, und das Essen übernimmt die Gastgeberin, nicht der Gast.", 3: "Die Kinder sind ausdrücklich eingeladen, und es gibt kein Restaurant." },
      e: "Du gibst die Hauptinformationen weiter: Zeit und Ort, Ablauf, Nachtisch, Kinder, Telefonat am Abend." }
  ]
});

K.addText('tr-a2-r03', {
  level: 'A2', kind: 'read', scene: 'otel', genre: 'email',
  title: "Otele e-posta", sub: "Eine E-Mail an das Hotel",
  body: [
    "Konu: Rezervasyon hakkında",
    "Sayın Yetkili,",
    "Ben Anna Weber. 12 Temmuz’dan 19 Temmuz’a kadar otelinizde iki kişilik bir oda için rezervasyon yaptım. Rezervasyonumu onaylar mısınız? Mümkünse deniz manzaralı bir oda istiyoruz. Kahvaltı fiyata dâhil mi?",
    "Uçağımız akşam yedide İzmir’e iniyor. Otele en geç dokuzda geliriz. Geç gelmemiz sorun olur mu? Havalimanından otele servis var mı, yoksa taksiyle mi gelmeliyiz?",
    "Geçen yıl sizde kaldık. Oda çok güzeldi ama klima bozuktu ve kahvaltıda kahve yoktu, sadece çay vardı. Umarım bu yıl daha iyi olur.",
    "Cevabınızı bekliyorum.",
    "Saygılarımla,",
    "Anna Weber"
  ],
  gloss: { "Konu": "Betreff", "hakkında": "über", "Sayın Yetkili": "Sehr geehrte Damen und Herren", "Temmuz": "Juli", "rezervasyon": "Reservierung", "onaylar mısınız": "bestätigen Sie", "Mümkünse": "wenn möglich", "manzaralı": "mit Aussicht", "dâhil": "inbegriffen", "iniyor": "landet", "servis": "Shuttle", "yoksa": "oder", "sizde": "bei Ihnen", "klima": "Klimaanlage", "bozuk": "kaputt", "sadece": "nur", "Umarım": "hoffentlich", "Saygılarımla": "Mit freundlichen Grüßen", "Cevabınızı": "Ihre Antwort", "sorun": "Problem", "iki kişilik": "für zwei Personen (Doppelzimmer)", "deniz manzaralı": "mit Meerblick", "en geç": "spätestens", "havalimanı": "Flughafen", "fiyat": "Preis" },
  questions: [
    { id: "tr-a2-r03.q1", t: "mc", q: "Warum schreibt Anna dem Hotel?", o: ["Sie möchte ihre Buchung bestätigt bekommen und hat Fragen zur Anreise und zum Frühstück.", "Sie will ihre Buchung stornieren.", "Sie möchte sich nur über das Frühstück vom letzten Jahr beschweren.", "Sie sucht eine Arbeit im Hotel."], a: 0,
      why: { 1: "Anna hat gebucht (*rezervasyon yaptım*) und will kommen. Von Stornieren steht nichts im Text.", 2: "Die Beschwerde ist nur ein Nebensatz; Hauptsache sind Bestätigung und Fragen.", 3: "Davon steht nichts im Text." },
      e: "*Rezervasyonumu onaylar mısınız?* = „Bestätigen Sie meine Reservierung?“ Dazu kommen Fragen zu Kahvaltı, Ankunft und Servis." },
    { id: "tr-a2-r03.q2", t: "gap", q: "Anna otele en geç saat ___ geliyor. (Anna kommt spätestens um neun Uhr im Hotel an.)", a: ["dokuzda", "9’da"],
      wrong: { "dokuz": "Bei Uhrzeiten („um neun“) brauchst du den Lokativ **-dA**: dokuz**da**.", "yedide": "Um sieben landet das Flugzeug; im Hotel sind sie spätestens um **neun**.", "dokuza": "-A ist der Dativ („bis neun / auf neun zu“). Uhrzeit = Lokativ -dA." },
      e: "*Otele en geç dokuzda geliriz.* Uhrzeit = Zahl + **-dA**: dokuz**da**; *en geç* = „spätestens“." },
    { id: "tr-a2-r03.q3", t: "match", q: "Was war letztes Jahr im Hotel? Ordne zu:", p: [["Oda", "çok güzeldi."], ["Klima", "bozuktu."], ["Kahvaltıda", "kahve yoktu, sadece çay vardı."]],
      e: "Alle drei Sätze stehen in der Vergangenheit auf **-(y)dI**: *güzeldi, bozuktu, yoktu/vardı*. Das Zimmer war schön, die Klimaanlage kaputt und beim Frühstück gab es keinen Kaffee, nur Tee." },
    { id: "tr-a2-r03.q4", t: "mc", q: "Was fragt Anna zur Anreise?", o: ["Ob es einen Shuttle vom Flughafen gibt oder ob sie ein Taxi nehmen müssen.", "Ob sie ein Auto mieten kann.", "Ob der Zug Verspätung hat.", "Ob das Hotel am Flughafen liegt."], a: 0,
      why: { 1: "Von einem Mietwagen steht nichts im Text.", 2: "Anna reist mit dem Flugzeug (*uçağımız*), nicht mit dem Zug.", 3: "Sie fragt nach dem Weg **vom** Flughafen **zum** Hotel; das Hotel liegt nicht am Flughafen." },
      e: "*Havalimanından otele servis var mı, yoksa taksiyle mi gelmeliyiz?* = „Gibt es einen Shuttle, oder sollen wir mit dem Taxi kommen?“ *gelmeliyiz* = Rat/Pflicht (-mAlI)." },
    { id: "tr-a2-r03.q5", t: "mc", q: "Sprachmittlung: Annas Mutter versteht kein Türkisch und fragt dich, was in Annas E-Mail an das Hotel steht. Was sagst du ihr?", o: ["Anna bittet um Bestätigung ihrer Buchung für ein Doppelzimmer vom 12. bis 19. Juli, möglichst mit Meerblick, und fragt, ob das Frühstück im Preis ist. Sie landen abends um sieben und kommen spätestens um neun; sie fragt nach Shuttle oder Taxi. Letztes Jahr war die Klimaanlage kaputt, und es gab beim Frühstück keinen Kaffee, nur Tee.", "Anna storniert die Buchung vom 12. bis 19. Juli, weil die Klimaanlage kaputt war und es beim Frühstück nur Tee gab.", "Anna bucht ein Einzelzimmer ohne Frühstück ab dem 12. Juli; sie kommt mit dem Zug um sieben und holt den Schlüssel morgens ab.", "Anna bittet das Hotel, sie vom Flughafen abzuholen, und beschwert sich über zu hohe Preise."], a: 0,
      why: { 1: "Anna storniert nicht; sie bittet im Gegenteil um Bestätigung und will wiederkommen. Die kaputte Klimaanlage war letztes Jahr.", 2: "Es ist ein **Doppelzimmer** (*iki kişilik*), sie fragt nach dem Frühstück, und sie kommt mit dem **Flugzeug** am Abend.", 3: "Sie fragt **ob** es einen Shuttle gibt (oder ein Taxi nötig ist); über Preise schreibt sie nichts." },
      e: "Du gibst die Hauptpunkte weiter: Bestätigung, Zimmer, Frühstück, Ankunft, Shuttle oder Taxi, und die Erfahrung vom letzten Jahr." }
  ]
});

K.addText('tr-a2-r04', {
  level: 'A2', kind: 'read', scene: 'ev', genre: 'anzeige',
  title: "Kiralık daire", sub: "Wohnungsanzeige",
  body: [
    "Kiralık daire – Bahçelievler",
    "Metroya yürüyerek beş dakika: üçüncü katta, iki odalı, balkonlu güzel bir daire. Asansör var, mutfakta ocak ve buzdolabı var. Ev eşyalı değil.",
    "Kira ayda on sekiz bin lira. Aidat bin iki yüz lira; su ve ısınma aidata dâhil. Depozito bir aylık kira kadar, yani on sekiz bin lira.",
    "Komşular sakin ve yardımsever. Evde köpek ya da kedi olmaz. Gece on birden sonra gürültü yapmayın.",
    "Daireyi görmek için hafta içi akşam altıdan sonra ev sahibi Ayşe Hanım’ı arayın."
  ],
  gloss: { "Kiralık": "zu vermieten", "yürüyerek": "zu Fuß", "kat": "Stockwerk", "odalı": "mit … Zimmern", "balkonlu": "mit Balkon", "Asansör": "Aufzug", "ocak": "Herd", "eşyalı": "möbliert", "aidat": "Hausgeld / Nebenkosten", "ısınma": "Heizung", "dâhil": "inbegriffen", "Depozito": "Kaution", "yani": "das heißt", "sakin": "ruhig", "yardımsever": "hilfsbereit", "köpek": "Hund", "kedi": "Katze", "olmaz": "ist nicht erlaubt", "gürültü": "Lärm", "hafta içi": "werktags", "ev sahibi": "Vermieter/in", "Hanım": "Frau (nach dem Vornamen)", "Kira": "Miete", "ayda": "pro Monat", "bir aylık kira": "eine Monatsmiete" },
  questions: [
    { id: "tr-a2-r04.q1", t: "mc", q: "Was ist in der Aidat (1.200 Lira) enthalten?", o: ["Wasser und Heizung", "Die Miete", "Die Kaution", "Strom und Internet"], a: 0,
      why: { 1: "Die Miete (*kira*) ist ein eigener Betrag: 18.000 Lira.", 2: "Die Kaution (*depozito*) wird extra gezahlt.", 3: "Davon steht nichts im Text." },
      e: "*Aidat bin iki yüz lira; su ve ısınma aidata dâhil.* = „Das Hausgeld beträgt 1.200 Lira; Wasser und Heizung sind enthalten.“" },
    { id: "tr-a2-r04.q2", t: "gap", q: "Depozito bir aylık kira ___ , yani on sekiz bin lira. (Die Kaution entspricht einer Monatsmiete.)", a: ["kadar"],
      wrong: { "gibi": "*gibi* heißt „wie/ähnlich wie“. Hier geht es um das **gleiche Maß**: *kadar*.", "daha": "*daha* heißt „mehr als“; die Kaution ist gleich hoch wie die Miete.", "kadarı": "Nach der Monatsmiete steht *kadar* ohne weitere Endung." },
      e: "*bir aylık kira **kadar*** = „so viel wie eine Monatsmiete“. **kadar** drückt das gleiche Maß aus." },
    { id: "tr-a2-r04.q3", t: "match", q: "Ordne den Satz aus der Anzeige der Bedeutung zu:", p: [["Ev eşyalı değil.", "Die Wohnung ist unmöbliert."], ["Evde köpek ya da kedi olmaz.", "Haustiere sind nicht erlaubt."], ["Gece on birden sonra gürültü yapmayın.", "Nach 23 Uhr keinen Lärm machen."], ["Asansör var.", "Es gibt einen Aufzug."]],
      e: "*değil* verneint die Eigenschaft (*eşyalı değil*), *yok/var* sagen, ob etwas vorhanden ist (*asansör var*). *olmaz* = „geht nicht, ist nicht erlaubt“." },
    { id: "tr-a2-r04.q4", t: "mc", q: "Wen soll man anrufen, um die Wohnung zu besichtigen, und wann?", o: ["Die Vermieterin, Ayşe Hanım, werktags nach 18 Uhr", "Die Nachbarn, jeden Tag morgens", "Die Hausverwaltung, am Wochenende", "Ayşe Hanım, nur nach 23 Uhr"], a: 0,
      why: { 1: "Die Nachbarn werden nur beschrieben (*sakin ve yardımsever*), nicht angerufen.", 2: "Von einer Hausverwaltung steht nichts im Text; und *hafta içi* heißt „werktags“, nicht Wochenende.", 3: "Nach 23 Uhr gilt Nachtruhe (*gece on birden sonra gürültü yapmayın*); angerufen wird nach 18 Uhr." },
      e: "*Hafta içi akşam altıdan sonra ev sahibi Ayşe Hanım’ı arayın.* = „Rufen Sie werktags nach 18 Uhr die Vermieterin Ayşe Hanım an.“" },
    { id: "tr-a2-r04.q5", t: "mc", q: "Sprachmittlung: Dein Freund Tom sucht eine Wohnung. Er versteht kein Türkisch, hat einen Hund und möchte wissen, was in der Anzeige steht. Was sagst du ihm?", o: ["Zweizimmerwohnung im dritten Stock mit Balkon und Aufzug, unmöbliert; Miete 18.000 Lira plus 1.200 Lira Hausgeld (Wasser und Heizung inklusive), Kaution eine Monatsmiete. Haustiere sind nicht erlaubt, nachts ab 23 Uhr ist Ruhe. Besichtigung: werktags nach 18 Uhr bei der Vermieterin Ayşe Hanım.", "Möblierte Wohnung im Erdgeschoss ohne Aufzug; Miete 1.200 Lira, Kaution zwei Monatsmieten. Hunde sind erlaubt; Besichtigung am Wochenende.", "Zweizimmerwohnung im dritten Stock; Miete 18.000 Lira inklusive aller Nebenkosten. Haustiere sind erwünscht, abends ist Musik erlaubt. Besichtigung jederzeit.", "Zweizimmerwohnung mit Balkon, unmöbliert; Miete 12.000 Lira, Kaution drei Monatsmieten. Hunde sind erlaubt, wenn sie ruhig sind; Besichtigung nur sonntags."], a: 0,
      why: { 1: "Die Wohnung ist **unmöbliert** (*eşyalı değil*), im dritten Stock **mit Aufzug**, die Miete beträgt 18.000 Lira, und Haustiere sind **nicht** erlaubt (*köpek ya da kedi olmaz*).", 2: "Das Hausgeld ist **extra** (1.200 Lira), Haustiere sind nicht erlaubt, ab 23 Uhr darf kein Lärm gemacht werden, und Besichtigung nur werktags nach 18 Uhr.", 3: "Miete (18.000 Lira) und Kaution (eine Monatsmiete) stimmen nicht; Hunde sind nicht erlaubt, und die Besichtigung ist werktags." },
      e: "Für Tom (mit Hund) ist wichtig: Haustiere sind nicht erlaubt. Dazu Zimmer, Kosten (Miete, Hausgeld, Kaution), Hausregeln und Besichtigungstermin." }
  ]
});

K.addText('tr-a2-r05', {
  level: 'A2', kind: 'read', scene: 'kargo', genre: 'nachricht',
  title: "Kargo mesajı", sub: "Eine Paketnachricht",
  body: [
    "Sayın Mehmet Bey,",
    "Paketiniz bugün sabah on bir buçukta adresinize geldi. Kapıyı çaldık ama kimse açmadı. Bu yüzden paketi şubemize götürdük. Şubemiz metro durağının yanında.",
    "Paketinizi cumartesi gününe kadar şubeden alabilirsiniz. Şubemiz hafta içi sabah dokuzdan akşam altıya kadar açık. Cumartesi günü sadece öğleye kadar çalışıyoruz, pazar günü kapalıyız.",
    "Şubeye gelirken kimliğinizi getirin. Paketi başka biri mi alacak? O zaman onun kimliği ve sizin yazılı izniniz gerekir. Sorunuz varsa bizi telefonla arayabilirsiniz.",
    "Hızlı Kargo"
  ],
  gloss: { "Kargo": "Paketdienst", "çaldık": "wir haben geklingelt", "açmadı": "hat nicht geöffnet", "durağının": "der Haltestelle", "yanında": "neben", "arayabilirsiniz": "Sie können anrufen", "adresinize": "zu Ihrer Adresse", "şubemize": "zu unserer Filiale", "götürdük": "wir haben gebracht", "şubeden": "aus der Filiale", "alabilirsiniz": "Sie können abholen", "hafta içi": "werktags", "açık": "geöffnet", "öğleye": "Mittag", "kapalıyız": "wir haben geschlossen", "kimliğinizi": "Ihren Ausweis", "getirin": "bringen Sie mit", "yazılı": "schriftlich", "izniniz": "Ihre Erlaubnis", "gerekir": "ist nötig", "Sayın": "Sehr geehrter", "çalışıyoruz": "wir haben geöffnet / arbeiten" },
  questions: [
    { id: "tr-a2-r05.q1", t: "mc", q: "Warum hat Herr Mehmet sein Paket nicht bekommen?", o: ["Niemand hat die Tür geöffnet.", "Die Adresse war falsch.", "Das Paket war beschädigt.", "Die Filiale war geschlossen."], a: 0,
      why: { 1: "Das Paket kam *adresinize*, also zur richtigen Adresse. Es hat nur niemand geöffnet.", 2: "Von einem Schaden steht nichts im Text.", 3: "Die Filiale ist der Ort, wo das Paket **jetzt** liegt; sie war nicht der Grund." },
      e: "*Kimse açmadı* = Niemand hat geöffnet. *Bu yüzden* (deshalb) leitet die Folge ein: Das Paket kam in die Filiale." },
    { id: "tr-a2-r05.q2", t: "gap", q: "Şube hafta içi sabah dokuzdan akşam altıya ___ açık. (bis)", a: ["kadar"],
      wrong: { "sonra": "*sonra* heißt „nach“. Hier endet die Öffnungszeit **bis** achtzehn Uhr.", "önce": "*önce* heißt „vor“. Gemeint ist „bis“.", "için": "*için* heißt „für / um zu“, nicht „bis“.", "gibi": "*gibi* heißt „wie“." },
      e: "**… -dAn … -(y)A kadar** = „von … bis …“: *dokuzdan altıya kadar*. Vor *kadar* steht der Dativ." },
    { id: "tr-a2-r05.q3", t: "match", q: "Ordne die Zeitangabe aus der Nachricht zu:", p: [["pazar günü", "kapalıyız."], ["Cumartesi günü", "sadece öğleye kadar çalışıyoruz."], ["Hafta içi", "sabah dokuzdan akşam altıya kadar açık."], ["Şubeye gelirken", "kimliğinizi getirin."]],
      e: "Sonntag: geschlossen. Samstag: nur bis mittags. Werktags: von neun bis achtzehn Uhr. *gelirken* = „beim Kommen“." },
    { id: "tr-a2-r05.q4", t: "mc", q: "Bis wann kann Herr Mehmet das Paket spätestens abholen?", o: ["Bis Samstag", "Bis Sonntag", "Nur heute", "Bis Freitag um achtzehn Uhr"], a: 0,
      why: { 1: "Am Sonntag ist die Filiale geschlossen (*pazar günü kapalıyız*).", 2: "*Bugün* ist der Tag, an dem das Paket nicht zugestellt werden konnte. Abholen kann er bis Samstag.", 3: "Freitag ist ein Werktag; aber die Frist reicht bis **Samstag** (*cumartesi gününe kadar*)." },
      e: "*cumartesi gününe kadar şubeden alabilirsiniz* = „Sie können es bis Samstag in der Filiale abholen.“" },
    { id: "tr-a2-r05.q5", t: "mc", q: "Sprachmittlung: Mehmets Frau Julia versteht kein Türkisch und fragt dich, was in der Nachricht vom Paketdienst steht. Was sagst du ihr?", o: ["Das Paket konnte heute Vormittag nicht zugestellt werden, weil niemand die Tür geöffnet hat, und liegt jetzt in der Filiale. Man kann es bis Samstag abholen: werktags von neun bis achtzehn Uhr, samstags nur bis mittags, sonntags ist geschlossen. Man muss den Ausweis mitbringen; wenn jemand anderes abholt, braucht er seinen Ausweis und eine schriftliche Erlaubnis.", "Das Paket wird morgen noch einmal zugestellt, man muss nur zu Hause sein. Die Filiale ist immer geöffnet, auch sonntags.", "Das Paket ist verloren gegangen. Man soll die Filiale anrufen und einen Ausweis mitschicken.", "Das Paket liegt in der Filiale und kann nur am Sonntag abgeholt werden, ganz ohne Ausweis."], a: 0,
      why: { 1: "Von einer erneuten Zustellung steht nichts im Text, und sonntags ist die Filiale **geschlossen**.", 2: "Das Paket ist nicht verloren; es liegt in der Filiale. Ein Ausweis wird **mitgebracht**, nicht geschickt.", 3: "Sonntags ist geschlossen, und ohne Ausweis gibt es das Paket nicht." },
      e: "Du gibst die Hauptpunkte weiter: warum das Paket in der Filiale liegt, die Frist (bis Samstag), die Öffnungszeiten, Ausweis und die Regel für eine andere abholende Person." }
  ]
});

K.addText('tr-a2-r06', {
  level: 'A2', kind: 'read', scene: 'ofis', genre: 'email',
  title: "Toplantı için e-posta", sub: "Eine E-Mail zur Besprechung",
  body: [
    "Konu: Pazartesi toplantısı",
    "Sayın Murat Bey,",
    "Pazartesi günü saat onda toplantımız var. Toplantı ikinci kattaki büyük odada olacak. Toplantıda geçen ayın satış rakamlarını konuşacağız.",
    "Sizden bir ricam var: Satış raporunu hazırlayıp bana bugün akşama kadar gönderebilir misiniz? Raporu okuyup toplantıdan önce notlarımı yazmak istiyorum. Yarın ofiste olmayacağım, çünkü doktora gidiyorum. Bu yüzden raporu bugün istiyorum.",
    "Toplantıda hem rapor hem de sunum gerekiyor. Sunumu da hazırlayıp pazartesi sabahı bana getirebilir misiniz? Rapor kısa olsun, iki sayfa yeterli. Bir sorunuz olursa bugün öğleden sonra beni arayın. Şimdiden teşekkür ederim.",
    "Saygılarımla,",
    "Elif Yıldız"
  ],
  gloss: { "Konu": "Betreff", "Sayın": "Sehr geehrter", "rakamlarını": "die Zahlen", "konuşacağız": "wir werden besprechen", "yeterli": "genug", "teşekkür": "Dank", "toplantı": "Besprechung, Meeting", "kattaki": "im Stockwerk", "ricam": "meine Bitte", "Satış": "Verkauf", "raporunu": "den Bericht", "hazırlayıp": "vorbereitet und", "gönderebilir": "schicken können", "okuyup": "gelesen und", "notlarımı": "meine Notizen", "ofiste": "im Büro", "olmayacağım": "ich werde nicht da sein", "sunum": "Präsentation", "gerekiyor": "ist nötig", "getirebilir": "mitbringen können", "Saygılarımla": "Mit freundlichen Grüßen" },
  questions: [
    { id: "tr-a2-r06.q1", t: "mc", q: "Was möchte Elif Yıldız von Murat Bey?", o: ["Er soll den Verkaufsbericht vorbereiten und ihr noch heute schicken.", "Er soll das Meeting am Montag absagen.", "Er soll morgen ins Büro kommen und sie vertreten.", "Er soll einen Arzttermin für sie machen."], a: 0,
      why: { 1: "Das Meeting findet statt (*toplantımız var*); er soll nur Unterlagen vorbereiten.", 2: "*Yarın ofiste olmayacağım* – das sagt **sie**. Von einer Vertretung steht nichts im Text.", 3: "Sie geht selbst zum Arzt (*doktora gidiyorum*); er soll nichts für sie vereinbaren." },
      e: "*Satış raporunu hazırlayıp bana bugün akşama kadar gönderebilir misiniz?* = „Können Sie den Verkaufsbericht vorbereiten und mir bis heute Abend schicken?“" },
    { id: "tr-a2-r06.q2", t: "gap", q: "Satış raporunu ___ bana gönderebilir misiniz? (hazırlamak – Können Sie den Verkaufsbericht vorbereiten und mir schicken?)", a: ["hazırlayıp"],
      wrong: { "hazırlıp": "*hazırla-* endet auf einen Vokal (a) → es braucht ein **y**: hazırla-**y**-ıp.", "hazırlayip": "Der letzte Vokal ist **a** → **-ıp** (ı ohne Punkt).", "hazırladım": "*hazırladım* hat eigene Zeit und Person. Mit -(y)Ip trägt nur das **letzte** Verb (*gönderebilir misiniz*) die Endung.", "hazırlayacak": "Das ist Futur. -(y)Ip zeigt selbst keine Zeit an." },
      e: "hazırla + **y** + **-ıp** = **hazırlayıp**. Zwei Handlungen, ein Subjekt: Zeit und Person trägt nur das letzte Verb." },
    { id: "tr-a2-r06.q3", t: "match", q: "Ordne die Satzhälften aus der E-Mail zu:", p: [["Yarın ofiste olmayacağım,", "çünkü doktora gidiyorum."], ["Yarın ofiste olmayacağım. Bu yüzden", "raporu bugün istiyorum."], ["Toplantıda hem rapor", "hem de sunum gerekiyor."], ["Raporu hazırlayıp", "bana gönderebilir misiniz?"]],
      e: "*çünkü* = Grund, *bu yüzden* = Folge, *hem … hem de* = sowohl … als auch, *-(y)Ip* = zwei Handlungen nacheinander." },
    { id: "tr-a2-r06.q4", t: "mc", q: "Wann kann Murat Bey Frau Yıldız bei Fragen anrufen?", o: ["Heute Nachmittag", "Morgen früh", "Am Montag nach dem Meeting", "Am Wochenende"], a: 0,
      why: { 1: "Morgen ist sie **nicht im Büro** (*yarın ofiste olmayacağım*).", 2: "Montag ist das Meeting; das Telefonat soll **vorher** stattfinden, am heutigen Nachmittag.", 3: "Vom Wochenende steht nichts im Text." },
      e: "*Bir sorunuz olursa bugün öğleden sonra beni arayın.* = „Wenn Sie eine Frage haben, rufen Sie mich heute Nachmittag an.“" },
    { id: "tr-a2-r06.q5", t: "mc", q: "Sprachmittlung: Murats Kollegin Anna versteht kein Türkisch und fragt dich, was Frau Yıldız ihm schreibt. Was sagst du ihr?", o: ["Am Montag um zehn Uhr ist ein Meeting im zweiten Stock. Murat soll den Verkaufsbericht heute bis zum Abend schicken, weil Frau Yıldız morgen wegen eines Arztbesuchs nicht im Büro ist. Außerdem soll er die Präsentation vorbereiten und am Montagmorgen mitbringen. Bei Fragen soll er heute Nachmittag anrufen.", "Das Meeting ist morgen um zehn Uhr im Erdgeschoss. Murat soll den Bericht am Montag schicken und die Präsentation absagen. Fragen soll er am Wochenende stellen.", "Frau Yıldız ist krank und sagt das Meeting am Montag ab. Murat soll den Bericht nicht mehr schicken und sie auch nicht anrufen.", "Das Meeting ist am Montag um zehn Uhr. Murat soll nur die Präsentation vorbereiten; der Bericht ist nicht nötig. Er soll sie am Freitag besuchen."], a: 0,
      why: { 1: "Das Meeting ist am **Montag** im **zweiten Stock**; der Bericht wird **heute** erwartet, und die Präsentation wird nicht abgesagt.", 2: "Frau Yıldız sagt das Meeting **nicht** ab; sie geht nur morgen zum Arzt. Murat soll den Bericht **doch** schicken.", 3: "Sowohl Bericht **als auch** Präsentation werden gebraucht (*hem rapor hem de sunum*), und von einem Besuch am Freitag steht nichts im Text." },
      e: "Du gibst die Hauptpunkte weiter: Termin und Ort, die Bitte um den Bericht und die Frist, den Grund, die Präsentation und das Angebot zum Telefonat." }
  ]
});

K.addText('tr-a2-r07', {
  level: 'A2', kind: 'read', scene: 'reise', genre: 'programm',
  title: "Cumartesi gezisi", sub: "Ein Ausflugsprogramm",
  body: [
    "Cumartesi gezisi: Bursa",
    "Sabah yedi buçukta otogarın önünde buluşuyoruz. Otobüs sekizde kalkıyor, Bursa’ya on bire doğru varıyoruz.",
    "İlk olarak Ulu Camii’ni geziyoruz. Sonra çarşıda serbest zamanınız var: isterseniz alışveriş yapabilir, isterseniz çay içebilirsiniz. Öğle yemeğini saat birde bir lokantada yiyoruz. Yemek fiyata dâhil, içecekler dâhil değil.",
    "Öğleden sonra teleferikle dağa çıkıyoruz. Orada hava soğuk olabilir, kalın bir ceket getirin. Akşam altıda otobüse biniyoruz ve gece on bir gibi İstanbul’a dönüyoruz.",
    "Fiyat kişi başı iki bin lira. Çocuklar yarı fiyat. Kayıt için cuma gününe kadar ofisimizi arayın."
  ],
  gloss: { "Bursa": "Stadt Bursa", "İlk": "erste(r)", "içebilirsiniz": "Sie können trinken", "orada": "dort", "teleferikle": "mit der Seilbahn", "yiyoruz": "wir essen", "önünde": "vor", "öğle": "Mittag", "öğleden": "nachmittags", "buluşuyoruz": "wir treffen uns", "doğru": "gegen", "varıyoruz": "wir kommen an", "çarşı": "Basar / Marktviertel", "serbest": "frei", "lokanta": "Restaurant", "içecekler": "Getränke", "dâhil": "inbegriffen", "teleferik": "Seilbahn", "kalın": "dick, warm", "biniyoruz": "wir steigen ein", "dönüyoruz": "wir kehren zurück", "kişi başı": "pro Person", "yarı": "halb", "kayıt": "Anmeldung", "geziyoruz": "wir besichtigen", "ofis": "Büro" },
  questions: [
    { id: "tr-a2-r07.q1", t: "mc", q: "Wann fährt der Bus ab?", o: ["Um halb acht", "Um acht", "Um elf", "Um achtzehn Uhr"], a: 1,
      why: { 0: "Um **halb acht** treffen sich die Gäste (*yedi buçukta buluşuyoruz*); abgefahren wird später.", 2: "Gegen elf kommt der Bus in Bursa **an** (*on bire doğru varıyoruz*).", 3: "Um sechs Uhr abends steigen alle für die **Rückfahrt** ein." },
      e: "*Otobüs sekizde kalkıyor.* = „Der Bus fährt um acht ab.“ Uhrzeit = Zahl + Lokativ **-dA**; *buçuk* = „halb nach“: *yedi buçuk* = halb acht." },
    { id: "tr-a2-r07.q2", t: "gap", q: "Sabah yedi buçukta otogarın önünde ___ . (buluşmak – wir treffen uns)", a: ["buluşuyoruz"],
      wrong: { "buluşuyorum": "*-um* heißt „ich“. Das Programm spricht von **wir**: -**uz**.", "buluşalım": "*buluşalım* ist ein Vorschlag („lass uns treffen“). Ein Programm nennt feste Pläne: Präsens *-(I)yor*.", "buluşmak": "Infinitiv – ein Satz im Türkischen braucht am Ende ein konjugiertes Verb." },
      e: "Stamm *buluş-* + **-uyor** (Präsens, nach u/ı/o/ö/ü-Harmonie) + **-uz** (wir): buluş-**uyor**-**uz**." },
    { id: "tr-a2-r07.q3", t: "match", q: "Ordne die Zeit dem Programmpunkt zu:", p: [["Sabah yedi buçukta", "Treffen am Busbahnhof"], ["Saat birde", "Mittagessen"], ["Öğleden sonra", "Fahrt mit der Seilbahn"], ["Akşam altıda", "Rückfahrt mit dem Bus"]],
      e: "*Saat birde* = „um ein Uhr“, *öğleden sonra* = „nachmittags“, *akşam altıda* = „abends um sechs“." },
    { id: "tr-a2-r07.q4", t: "mc", q: "Was ist im Preis NICHT enthalten?", o: ["Das Mittagessen", "Die Getränke", "Die Busfahrt", "Der Eintritt in die Moschee"], a: 1,
      why: { 0: "Das Essen ist im Preis: *Yemek fiyata dâhil*.", 2: "Der Text nennt nur die Getränke als nicht inbegriffen (*dâhil değil*).", 3: "Der Text nennt nur die Getränke als nicht inbegriffen (*dâhil değil*)." },
      e: "*İçecekler dâhil değil.* = „Getränke sind nicht inbegriffen.“ *dâhil* = inbegriffen, *değil* verneint." },
    { id: "tr-a2-r07.q5", t: "mc", q: "Sprachmittlung: Dein Freund Paul versteht kein Türkisch. Er fragt, was er mitbringen soll und was der Ausflug kostet. Was sagst du ihm?", o: ["Eine warme Jacke, weil es auf dem Berg kalt sein kann. Der Preis ist 2.000 Lira pro Person, Kinder zahlen die Hälfte.", "Nichts, es wird warm. Der Preis ist 2.000 Lira für die ganze Familie.", "Eine Badehose. Der Preis ist 150 Lira, Getränke sind inklusive.", "Einen Regenschirm. Der Ausflug ist kostenlos, man muss sich nur bis Freitag anmelden."], a: 0,
      why: { 1: "Es kann auf dem Berg **kalt** sein (*kalın bir ceket getirin*), und der Preis gilt **pro Person**.", 2: "Von Schwimmen steht nichts im Text; Getränke sind **nicht** inbegriffen.", 3: "Der Ausflug kostet 2.000 Lira pro Person. Die Anmeldung (bis Freitag) ist nur ein weiterer Punkt." },
      e: "Du gibst das Wichtige weiter: warme Kleidung und den Preis (*kişi başı*, Kinder *yarı fiyat*)." },
    { id: "tr-a2-r07.q6", t: "gap", q: "Akşam altıda ___ biniyoruz. (otobüs – in den Bus)", a: ["otobüse"],
      wrong: { "otobüsü": "Akkusativ. *binmek* verlangt aber den **Dativ** (-A): man steigt „in etwas hinein“.", "otobüste": "Lokativ (-DA) = „im Bus“ (wo man schon ist). Hier geht es um die Richtung: *otobüs**e***.", "otobüs": "Ohne Endung fehlt der Dativ, den *binmek* verlangt." },
      e: "*binmek* + Dativ: *otobüs**e** binmek*, *trene binmek*, *uçağa binmek* – im Deutschen „in den Bus einsteigen“. Vor Vokal bleibt *otobüs* stabil: otobüs + **e**." }
  ]
});

K.addText('tr-a2-r08', {
  level: 'A2', kind: 'read', scene: 'saglik', genre: 'artikel',
  title: "Sabah yürüyüşü", sub: "Ein Artikel über Spaziergänge am Morgen",
  body: [
    "Sabah yürüyüşü neden iyi?",
    "Her sabah yarım saat yürümek sağlık için çok iyidir. Yürüyüşten sonra kendinizi daha enerjik hissedersiniz, akşam da daha rahat uyursunuz. Çok para harcamazsınız, çünkü sadece rahat bir ayakkabı yeterlidir.",
    "Nasıl başlamalı? Önce yavaş yürüyün, her hafta on dakika ekleyin. Arkadaşınızla ya da köpeğinizle yürürseniz daha eğlenceli olur. Hava yağmurluysa alışveriş merkezinde de yürüyebilirsiniz.",
    "Yürürken telefonunuza bakmayın, çevrenizi izleyin. Yanınıza su alın. En önemlisi: Her gün aynı saatte çıkın. Böylece yürüyüş çok kısa sürede bir alışkanlık hâline gelir."
  ],
  gloss: { "enerjik": "voller Energie", "hissedersiniz": "Sie fühlen sich", "rahat": "bequem / entspannt", "uyursunuz": "Sie schlafen", "harcamazsınız": "Sie geben nicht aus", "yeterlidir": "ist genug", "ekleyin": "fügen Sie hinzu", "eğlenceli": "unterhaltsam", "yağmurluysa": "wenn es regnerisch ist", "alışveriş merkezi": "Einkaufszentrum", "çevre": "Umgebung", "izleyin": "beobachten Sie", "alışkanlık": "Gewohnheit", "hâline gelir": "wird zu", "böylece": "so, dadurch", "kısa sürede": "in kurzer Zeit", "yavaş": "langsam", "başlamalı": "soll man anfangen", "sağlık": "Gesundheit" },
  questions: [
    { id: "tr-a2-r08.q1", t: "mc", q: "Was braucht man laut Text für den Morgenspaziergang?", o: ["Teure Sportkleidung", "Bequeme Schuhe", "Ein Fitnessstudio", "Einen Trainer"], a: 1,
      why: { 0: "Gerade das ist nicht nötig: Man gibt **nicht viel Geld** aus (*çok para harcamazsınız*).", 2: "Draußen oder im Einkaufszentrum genügt es zu gehen; ein Studio wird nicht erwähnt.", 3: "Von einem Trainer steht nichts im Text." },
      e: "*Sadece rahat bir ayakkabı yeterlidir.* = „Nur bequeme Schuhe genügen.“ *sadece* = nur, *yeterli* = ausreichend." },
    { id: "tr-a2-r08.q2", t: "gap", q: "Önce yavaş ___ . (yürümek – Aufforderung, Sie)", a: ["yürüyün", "yürüyünüz"],
      wrong: { "yürü": "Das ist die du-Form. Der Artikel spricht die Leser mit „Sie“ an → **-yIn**.", "yürümeyin": "Das ist das **Verbot** („gehen Sie nicht“). Gemeint ist der Befehl ohne -mA-.", "yürüyen": "*-yAn* ist ein Partizip („der Gehende“), kein Befehl." },
      e: "Befehl (Sie): Stamm auf Vokal + **y** + **-In**: yürü-**y**-**ün** (Vokalharmonie ü → ün)." },
    { id: "tr-a2-r08.q3", t: "match", q: "Ordne den Rat aus dem Text der Bedeutung zu:", p: [["Yanınıza su alın.", "Nehmen Sie Wasser mit."], ["Telefonunuza bakmayın.", "Schauen Sie nicht aufs Handy."], ["Her hafta on dakika ekleyin.", "Fügen Sie jede Woche zehn Minuten hinzu."], ["Önce yavaş yürüyün.", "Gehen Sie zuerst langsam."]],
      e: "Alle Ratschläge sind Befehle an „Sie“. Die verneinte Form hat **-mA-**: *bakmayın*." },
    { id: "tr-a2-r08.q4", t: "mc", q: "Was kann man tun, wenn das Wetter schlecht ist?", o: ["Zu Hause bleiben und nicht gehen", "Im Einkaufszentrum spazieren", "Im Regen laufen", "Mit dem Bus zum Park fahren"], a: 1,
      why: { 0: "Der Text gibt eine **Alternative** an; man muss nicht zu Hause bleiben.", 2: "Bei Regen rät der Text zum Einkaufszentrum.", 3: "Vom Bus steht nichts im Text." },
      e: "*Hava yağmurluysa alışveriş merkezinde de yürüyebilirsiniz.* = „Wenn es regnerisch ist, können Sie auch im Einkaufszentrum laufen.“" },
    { id: "tr-a2-r08.q5", t: "mc", q: "Welchen Rat gibt der Text, damit der Spaziergang zur Gewohnheit wird?", o: ["Jeden Tag zur selben Zeit losgehen", "Nur bei schönem Wetter gehen", "Immer allein gehen", "Jeden Tag eine andere Strecke wählen"], a: 0,
      why: { 1: "Bei schlechtem Wetter rät der Text sogar zum Einkaufszentrum; man geht also trotzdem.", 2: "Im Gegenteil: Mit Freund oder Hund macht es mehr Spaß (*daha eğlenceli*).", 3: "Von wechselnden Strecken steht nichts im Text; wichtig ist die feste Uhrzeit." },
      e: "*Her gün aynı saatte çıkın. Böylece yürüyüş … bir alışkanlık hâline gelir.* = „Gehen Sie jeden Tag zur selben Zeit los. So wird der Spaziergang … zur Gewohnheit.“ *aynı* = derselbe, *böylece* = dadurch." }
  ]
});

K.addText('tr-a2-r09', {
  level: 'A2', kind: 'read', scene: 'alisveris', genre: 'anzeige',
  title: "Satılık bisiklet", sub: "Eine Kleinanzeige",
  body: [
    "Satılık bisiklet",
    "Mavi bir dağ bisikleti satıyorum. İki yıl önce yeni aldım ama çok az kullandım. Vitesleri sorunsuz çalışıyor, lastikler yeni. Kask ve kilit de var, ikisini de bisikletle birlikte veriyorum.",
    "Fiyatı on beş bin lira, ama pazarlık payı var. Yenisi otuz bin lira, yani bu çok uygun. Almanya’ya taşınıyorum, bu yüzden hızlı satmak istiyorum.",
    "Bisikleti Kadıköy’de görebilirsiniz. Hafta içi akşam yediden sonra, hafta sonu bütün gün evdeyim. Lütfen telefonla aramayın, sadece mesaj yazın. Numaram ilanın altında."
  ],
  gloss: { "ilanın": "der Anzeige", "içi": "innerhalb", "lastikler": "Reifen", "vitesleri": "seine Gänge", "dağ bisikleti": "Mountainbike", "vites": "Gang, Schaltung", "sorunsuz": "ohne Probleme", "lastik": "Reifen", "kask": "Helm", "kilit": "Schloss", "pazarlık payı": "Verhandlungsspielraum", "uygun": "günstig", "taşınıyorum": "ich ziehe um", "ilan": "Anzeige", "hızlı": "schnell", "bütün gün": "den ganzen Tag", "kullandım": "ich habe benutzt", "satıyorum": "ich verkaufe" },
  questions: [
    { id: "tr-a2-r09.q1", t: "mc", q: "Was kostet das Fahrrad?", o: ["Fünfzehntausend Lira", "Dreißigtausend Lira", "Zweitausend Lira", "Fünfzehnhundert Lira"], a: 0,
      why: { 1: "30.000 Lira kostet ein **neues** Fahrrad (*yenisi otuz bin lira*).", 2: "*İki* kommt nur bei „vor zwei Jahren“ vor.", 3: "*Bin* = tausend: 15.000 heißt *on beş bin*, nicht 1.500." },
      e: "*Fiyatı on beş bin lira.* = „Der Preis ist 15.000 Lira.“ *pazarlık payı var* = ein Verhandeln ist möglich." },
    { id: "tr-a2-r09.q2", t: "gap", q: "Bisikleti iki yıl önce yeni ___ . (almak – ich habe gekauft)", a: ["aldım"],
      wrong: { "aldı": "*-ı* heißt „er/sie/es“. Der Verkäufer spricht von sich: **-m** (ich).", "alıyorum": "Das ist Präsens („ich kaufe gerade“). *iki yıl önce* verlangt die Vergangenheit.", "alırım": "Aorist („ich kaufe (immer)“) – für ein einmaliges Ereignis in der Vergangenheit nimmst du *-dI*." },
      e: "Vergangenheit: Stamm + **-dI** + Personenendung: al-**dı**-**m** („ich habe gekauft“)." },
    { id: "tr-a2-r09.q3", t: "mc", q: "Warum verkauft die Person das Fahrrad schnell?", o: ["Es ist kaputt.", "Sie zieht nach Deutschland um.", "Sie braucht Geld für ein Auto.", "Es ist ihr zu klein."], a: 1,
      why: { 0: "Im Gegenteil: Gänge laufen **ohne Probleme**, die Reifen sind neu.", 2: "Von einem Auto steht nichts im Text.", 3: "Von der Größe ist keine Rede." },
      e: "*Almanya’ya taşınıyorum, bu yüzden hızlı satmak istiyorum.* = „Ich ziehe nach Deutschland um, deshalb will ich schnell verkaufen.“" },
    { id: "tr-a2-r09.q4", t: "match", q: "Ordne zu:", p: [["Kask ve kilit", "werden mitgegeben"], ["Lastikler", "sind neu"], ["Akşam yediden sonra", "ist die Person zu Hause (werktags)"], ["Telefonla aramayın", "nur Nachrichten schreiben"]],
      e: "*Hafta içi* = werktags; *-dAn sonra* = nach; *-mAyIn* = Verbot (Sie)." },
    { id: "tr-a2-r09.q5", t: "mc", q: "Wie soll man die Person kontaktieren?", o: ["Anrufen", "Eine Nachricht schreiben", "Persönlich ohne Termin kommen", "Eine E-Mail an den Händler senden"], a: 1,
      why: { 0: "Das ist ausdrücklich **verboten**: *telefonla aramayın*.", 2: "Man soll zuerst schreiben; Hausbesuche ohne Absprache sind nicht erwähnt.", 3: "Von E-Mail oder Händler steht nichts im Text." },
      e: "*Lütfen telefonla aramayın, sadece mesaj yazın.* = „Bitte nicht anrufen, nur eine Nachricht schreiben.“" }
  ]
});

K.addText('tr-a2-r10', {
  level: 'A2', kind: 'read', scene: 'tatil', genre: 'nachricht',
  title: "Tatilden selam", sub: "Eine Nachricht aus dem Urlaub",
  body: [
    "Selam Deniz,",
    "Nasılsın? Biz Antalya’ya geldik, hava çok güzel! Otelimiz denize yakın, kahvaltıdan sonra hemen plaja gidiyoruz. Dün tekneyle küçük bir ada gezisi yaptık. Çocuklar çok eğlendi, akşam yorgunluktan hemen uyudular.",
    "Yemekler harika ama biraz pahalı. Bugün öğleden sonra yağmur yağıyor, o yüzden otelde dinleniyoruz. Yarın eski şehri gezeceğiz, sonra alışveriş yapacağız.",
    "Sizi çok özledik. Gelecek hafta pazartesi dönüyoruz, salı günü seni ararım. Kedimize baktın, çok teşekkür ederim!",
    "Sevgiler, Merve"
  ],
  gloss: { "plaj": "Strand", "tekne": "Boot", "ada": "Insel", "gezi": "Ausflug", "eğlendi": "hatten Spaß", "yorgunluktan": "vor Müdigkeit", "yorgun": "müde", "uyudular": "sie haben geschlafen", "harika": "wunderbar", "pahalı": "teuer", "yağmur yağıyor": "es regnet", "dinleniyoruz": "wir ruhen uns aus", "gezeceğiz": "wir werden besichtigen", "özledik": "wir haben vermisst", "dönüyoruz": "wir kommen zurück", "Selam": "Hallo", "kedimize": "unsere Katze", "baktın": "du hast aufgepasst", "ararım": "ich rufe an" },
  questions: [
    { id: "tr-a2-r10.q1", t: "mc", q: "Warum bleiben Merve und ihre Familie heute im Hotel?", o: ["Weil es regnet.", "Weil die Kinder krank sind.", "Weil das Essen zu teuer ist.", "Weil der Strand geschlossen ist."], a: 0,
      why: { 1: "Die Kinder waren gestern **müde**, nicht krank.", 2: "Das Essen ist teuer, aber das ist nicht der Grund fürs Bleiben.", 3: "Vom Strand ist keine Rede." },
      e: "*Bugün öğleden sonra yağmur yağıyor, o yüzden otelde dinleniyoruz.* = „Heute Nachmittag regnet es, deshalb ruhen wir uns im Hotel aus.“" },
    { id: "tr-a2-r10.q2", t: "gap", q: "Dün tekneyle küçük bir ada gezisi ___ . (yapmak – wir haben gemacht)", a: ["yaptık"],
      wrong: { "yaparız": "Aorist/Gewohnheit. *Dün* („gestern“) verlangt die Vergangenheit.", "yapacağız": "Futur („wir werden machen“). Der Ausflug war schon.", "yaptım": "*-m* = ich. Merve schreibt von der ganzen Familie: **-k** (wir)." },
      e: "Vergangenheit: *yap-* + **-tI** (nach p stimmlos t) + **-k**: yap-**tı**-**k**." },
    { id: "tr-a2-r10.q3", t: "match", q: "Wann passiert was?", p: [["Dün", "kleiner Ausflug mit dem Boot"], ["Bugün öğleden sonra", "Regen, Ausruhen im Hotel"], ["Yarın", "Altstadt und Einkaufen"], ["Salı günü", "Merve ruft Deniz an"]],
      e: "Vergangenheit *-dI* (dün), Präsens (bugün), Futur *-(y)AcAk* (yarın: *gezeceğiz*)." },
    { id: "tr-a2-r10.q4", t: "mc", q: "Wofür bedankt sich Merve bei Deniz?", o: ["Dafür, dass er/sie auf die Katze aufgepasst hat", "Für eine Einladung", "Für ein Geschenk", "Für die Hotelbuchung"], a: 0,
      why: { 1: "Von einer Einladung steht nichts im Text.", 2: "Ein Geschenk wird nicht erwähnt.", 3: "Von der Hotelbuchung ist im Dank keine Rede." },
      e: "*Kedimize baktın, çok teşekkür ederim.* = „Du hast dich um unsere Katze gekümmert, vielen Dank.“" }
  ]
});

K.addText('tr-a2-r11', {
  level: 'A2', kind: 'read', scene: 'kutuphane', genre: 'hinweis',
  title: "Kütüphane kuralları", sub: "Regeln in der Bibliothek",
  body: [
    "Kütüphane kuralları",
    "Kütüphanemiz hafta içi sabah dokuzdan akşam yediye kadar açıktır. Cumartesi günleri sabah dokuzdan öğleden sonra ikiye kadar açıktır, pazar günleri kapalıdır.",
    "Her üye aynı anda en fazla beş kitap alabilir. Kitapları on beş gün ödünç alabilirsiniz. Süre bitince kitabı geri getirin ya da internetten uzatın. Geç getirirseniz her gün için bir lira ödersiniz.",
    "Okuma salonunda sessiz olun. Telefonla konuşmayın, telefonunuzu sessize alın. Yiyecek getirmeyin, ama su içebilirsiniz. Kitapların sayfalarını katlamayın, kalemle yazmayın.",
    "Sorularınız için danışmaya gelin. İyi okumalar dileriz!"
  ],
  gloss: { "alabilir": "kann nehmen", "danışmaya": "zur Auskunft", "dileriz": "wir wünschen", "içebilirsiniz": "Sie können trinken", "olun": "seien Sie", "sayfalarını": "die Seiten", "öğleden": "nachmittags", "içi": "innerhalb", "üye": "Mitglied", "ödünç alabilirsiniz": "Sie können ausleihen", "aynı anda": "gleichzeitig", "en fazla": "höchstens", "süre": "Frist", "uzatın": "verlängern Sie", "sessiz": "leise", "sessize alın": "stellen Sie stumm", "yiyecek": "Essen", "sayfa": "Seite", "katlamayın": "falten Sie nicht", "kalem": "Stift", "danışma": "Auskunft", "okuma salonu": "Lesesaal", "kapalıdır": "ist geschlossen", "açıktır": "ist geöffnet", "ödersiniz": "Sie zahlen" },
  questions: [
    { id: "tr-a2-r11.q1", t: "mc", q: "Wie viele Bücher darf ein Mitglied gleichzeitig ausleihen?", o: ["Höchstens fünf", "Mindestens fünf", "Fünfzehn", "Nur eins"], a: 0,
      why: { 1: "*en fazla* heißt „höchstens“, nicht „mindestens“.", 2: "Fünfzehn **Tage** ist die Leihfrist (*on beş gün*), nicht die Anzahl.", 3: "Es dürfen mehrere Bücher sein." },
      e: "*Her üye aynı anda en fazla beş kitap alabilir.* = „Jedes Mitglied kann höchstens fünf Bücher gleichzeitig ausleihen.“" },
    { id: "tr-a2-r11.q2", t: "gap", q: "Okuma salonunda telefonla ___ . (konuşmak – Verbot, Sie)", a: ["konuşmayın", "konuşmayınız"],
      wrong: { "konuşma": "Das ist die du-Form des Verbots. Das Schild nutzt „Sie“ → **-yIn**.", "konuşun": "*konuşun* wäre die Aufforderung („sprechen Sie“) – ohne die Verneinung -mA-.", "konuşmak": "Infinitiv – drückt kein Verbot aus." },
      e: "Verbot (Sie): Stamm + **-mA** + **-yIn**: konuş-**ma**-**yın**." },
    { id: "tr-a2-r11.q3", t: "mc", q: "Was passiert, wenn man ein Buch zu spät zurückgibt?", o: ["Man zahlt pro Tag eine Lira.", "Man bekommt eine Verwarnung.", "Man darf nie wieder ausleihen.", "Nichts"], a: 0,
      why: { 1: "Von einer Verwarnung steht nichts im Text; es gibt eine Gebühr.", 2: "So eine Strafe wird nicht genannt.", 3: "Es gibt eine Gebühr: *her gün için bir lira*." },
      e: "*Geç getirirseniz her gün için bir lira ödersiniz.* = „Wenn Sie es zu spät bringen, zahlen Sie für jeden Tag eine Lira.“" },
    { id: "tr-a2-r11.q4", t: "match", q: "Ordne zu:", p: [["Pazar günleri", "kapalıdır."], ["Cumartesi günleri", "öğleden sonra ikiye kadar açıktır."], ["Yiyecek", "getirmeyin."], ["Su", "içebilirsiniz."]],
      e: "**-DIr** (-dır/-dir/-dur/-dür/-tır/-tir …) macht Aussagen auf Schildern und in Bekanntmachungen förmlich und allgemeingültig: açık-**tır**, kapalı-**dır**." },
    { id: "tr-a2-r11.q5", t: "mc", q: "Sprachmittlung: Dein Freund Tom möchte Bücher ausleihen. Was sagst du ihm?", o: ["Bis zu fünf Bücher für 15 Tage; man kann online verlängern. Im Lesesaal leise sein, nichts essen, Wasser ist erlaubt. Sonntags geschlossen.", "Beliebig viele Bücher für einen Monat. Essen ist im Lesesaal erlaubt. Die Bibliothek ist täglich geöffnet.", "Nur ein Buch pro Woche, Wasser ist verboten. Die Bibliothek ist am Samstag geschlossen.", "Fünf Bücher für 50 Tage. Telefonieren im Lesesaal ist erlaubt, Markierungen mit Stift sind erwünscht."], a: 0,
      why: { 1: "Es gibt eine **Höchstzahl** (fünf) und eine Leihfrist von 15 Tagen; Essen ist verboten, sonntags ist geschlossen.", 2: "Man darf bis zu **fünf** Bücher mitnehmen, und Wasser ist erlaubt; samstags ist bis 14 Uhr geöffnet.", 3: "Die Frist beträgt 15 Tage; Telefonieren und Schreiben im Buch sind verboten." },
      e: "Du gibst die Hauptpunkte weiter: Anzahl, Frist, Verlängerung, Verhalten im Lesesaal, Öffnungszeiten." }
  ]
});

K.addText('tr-a2-r12', {
  level: 'A2', kind: 'read', scene: 'spor', genre: 'formular',
  title: "Üyelik formu", sub: "Ein ausgefülltes Anmeldeformular",
  body: [
    "Spor salonu üyelik formu",
    "Adı soyadı: Can Aydın",
    "Üyelik türü: Aylık, haftada üç gün, sabah saatleri.",
    "Hedefim: Kilo vermek ve daha sağlıklı olmak. Haftada üç gün spor yapmak istiyorum. Daha önce hiç spor salonuna gitmedim, bu yüzden bir antrenör istiyorum.",
    "Sağlık durumu: Sırtım ağrıyor, bu yüzden ağır şeyler kaldıramıyorum. Alerjim yok, düzenli ilaç da kullanmıyorum.",
    "Ödeme: Her ay kredi kartıyla. Aylık ücret iki bin lira.",
    "Başlangıç tarihi: Gelecek pazartesi.",
    "Not: İlk ay deneme olsun, beğenmezsem iptal etmek istiyorum."
  ],
  gloss: { "aylık": "monatlich", "adı": "Vorname", "hedefim": "mein Ziel", "İlk": "erste(r)", "soyadı": "Nachname", "tarihi": "Datum", "türü": "Art", "şeyler": "Dinge", "üyelik": "Mitgliedschaft", "tür": "Art, Typ", "hedef": "Ziel", "kilo vermek": "abnehmen", "sağlıklı": "gesund", "antrenör": "Trainer", "sağlık durumu": "Gesundheitszustand", "sırt": "Rücken", "ağrıyor": "tut weh", "kaldıramıyorum": "ich kann nicht heben", "alerji": "Allergie", "düzenli": "regelmäßig", "ilaç": "Medikament", "ödeme": "Zahlung", "ücret": "Gebühr", "başlangıç": "Beginn", "tarih": "Datum", "deneme": "Probe", "beğenmezsem": "wenn es mir nicht gefällt", "iptal": "Kündigung", "kredi kartı": "Kreditkarte", "ağır": "schwer" },
  questions: [
    { id: "tr-a2-r12.q1", t: "mc", q: "Wie oft pro Woche möchte Can trainieren?", o: ["Einmal", "Dreimal", "Fünfmal", "Jeden Tag"], a: 1,
      why: { 0: "Einmal wäre *haftada bir gün*; Can nennt **drei** Tage.", 2: "Fünf Tage kommen im Text nicht vor.", 3: "*Her gün* steht nicht im Formular." },
      e: "*Haftada üç gün spor yapmak istiyorum.* = „Ich möchte drei Tage pro Woche Sport machen.“" },
    { id: "tr-a2-r12.q2", t: "gap", q: "Haftada üç gün spor ___ istiyorum. (yapmak – Infinitiv)", a: ["yapmak", "yapmayı"],
      wrong: { "yapıyorum": "Nur *istemek* wird konjugiert (*istiyorum*).", "yap": "Ohne **-mAk** ist es kein Infinitiv." },
      e: "**Infinitiv + istemek**: *yapmak istiyorum* („ich möchte machen“). *-mAk istemek* ist üblicher, *-mAyI istemek* (*yapmayı istiyorum*) geht auch." },
    { id: "tr-a2-r12.q3", t: "mc", q: "Warum möchte Can einen Trainer?", o: ["Er war noch nie in einem Fitnessstudio.", "Er hat Rückenschmerzen und kann nicht trainieren.", "Er möchte Profisportler werden.", "Er hat eine Allergie."], a: 0,
      why: { 1: "Die Rückenschmerzen erklären nur, warum er nicht schwer heben kann; der Grund für den Trainer ist etwas anderes.", 2: "Davon steht nichts im Text.", 3: "Im Gegenteil: *Alerjim yok.*" },
      e: "*Daha önce hiç spor salonuna gitmedim, bu yüzden bir antrenör istiyorum.* = „Ich war noch nie im Studio, deshalb möchte ich einen Trainer.“" },
    { id: "tr-a2-r12.q4", t: "match", q: "Ordne den Satz aus dem Formular zu:", p: [["Alerjim yok.", "Ich habe keine Allergie."], ["Sırtım ağrıyor.", "Mein Rücken tut weh."], ["Ödeme kredi kartıyla.", "Bezahlung per Kreditkarte."], ["Gelecek pazartesi.", "Nächsten Montag."]],
      e: "*yok* = es gibt nicht / habe nicht; *-ım/-im* = mein (Besitz): *sırtım*, *alerjim*." },
    { id: "tr-a2-r12.q5", t: "mc", q: "Sprachmittlung: Cans Vater versteht kein Türkisch. Was sagst du ihm über das Formular?", o: ["Can meldet sich für einen Monat an, dreimal pro Woche morgens. Er möchte abnehmen, wünscht einen Trainer und hat Rückenprobleme. Er zahlt 2.000 Lira pro Monat mit Karte, beginnt nächsten Montag und möchte im ersten Monat testen.", "Can meldet sich für ein Jahr an, täglich abends, und zahlt bar 50 Lira.", "Can hat eine Allergie und nimmt täglich Medikamente. Er will den Vertrag nicht testen.", "Can möchte ab sofort jeden Tag trainieren und zahlt nichts im ersten Jahr."], a: 0,
      why: { 1: "Die Mitgliedschaft ist **monatlich**, morgens, und die Zahlung läuft per **Kreditkarte**.", 2: "Er hat keine Allergie (*Alerjim yok*) und nimmt keine Medikamente; der erste Monat ist eine Probezeit.", 3: "Er beginnt nächsten Montag, trainiert dreimal pro Woche und zahlt monatlich 2.000 Lira." },
      e: "Du gibst die Kerndaten weiter: Dauer, Häufigkeit, Ziel, Gesundheit, Preis, Zahlung, Beginn, Probemonat." }
  ]
});

/* Hörtexte (kind 'listen', IDs …-hNN): Sprecher s, g; Übersetzung n = Deutsch. Fragen-IDs '<textId>.qN' fest. */

K.addText('tr-a2-h01', {
  level: 'A2', kind: 'listen', scene: 'otogar', genre: 'durchsage',
  title: "Otogarda anons", sub: "Durchsage am Busbahnhof", plays: 2,
  lines: [
    { s: 'Anons', g: 'f', t: "Sayın yolcularımız, dikkat lütfen. Ankara’ya giden otobüs yirmi dakika gecikmeli. Yeni kalkış saati üç buçuk. Yolcularımız lütfen altı numaralı peronda beklesin. Çanta ve bavullarınızı yanınızdan ayırmayın. Gecikme için özür dileriz.", n: "Sehr geehrte Fahrgäste, bitte aufgepasst. Der Bus nach Ankara hat zwanzig Minuten Verspätung. Die neue Abfahrtszeit ist halb vier. Unsere Fahrgäste warten bitte an Bussteig sechs. Lassen Sie Taschen und Koffer nicht unbeaufsichtigt. Wir bitten um Entschuldigung für die Verspätung." }
  ],
  gloss: { "gecikmeli": "mit Verspätung", "kalkış": "Abfahrt", "peron": "Bussteig", "bavul": "Koffer", "ayırmayın": "trennen Sie nicht", "özür dileriz": "wir bitten um Entschuldigung" },
  questions: [
    { id: "tr-a2-h01.q1", t: "mc", q: "Wie viel Verspätung hat der Bus?", o: ["Zehn Minuten", "Zwanzig Minuten", "Dreißig Minuten"], a: 1,
      why: { 0: "Es heißt *yirmi* (20), nicht *on* (10).", 2: "*Üç buçuk* (halb vier) ist die neue **Uhrzeit**, nicht die Verspätung." },
      e: "*yirmi dakika gecikmeli* = „zwanzig Minuten verspätet“. Achte auf *on* (10) und *yirmi* (20)." },
    { id: "tr-a2-h01.q2", t: "gap", q: "Yeni kalkış saati üç ___ . (halb vier)", a: ["buçuk", "otuz"],
      wrong: { "yarım": "*yarım* = „halb“ als Menge (*yarım ekmek*). Bei Uhrzeiten sagt man *buçuk*.", "buçukta": "*-ta* = „um“. Hier steht der Satz mit *saati* ohne „um“." },
      e: "*üç buçuk* = „drei Uhr dreißig“ (halb vier). *buçuk* steht **nach** der Stundenzahl; auch *üç otuz* ist als Uhrzeit möglich, in der Durchsage hörst du aber *buçuk*." },
    { id: "tr-a2-h01.q3", t: "listen", say: "Yolcularımız lütfen altı numaralı peronda beklesin.", q: "Hör zu. Wo sollen die Fahrgäste warten?", o: ["Am Bussteig sechs", "Am Ausgang", "Im Café"], a: 0,
      why: { 1: "Von einem Ausgang ist keine Rede.", 2: "Davon ist keine Rede." },
      e: "*altı numaralı peron* = „Bussteig Nummer sechs“; *beklesin* = „sollen warten“." },
    { id: "tr-a2-h01.q4", t: "mc", q: "Was sollen die Fahrgäste mit ihrem Gepäck tun?", o: ["Es nicht allein lassen", "Es abgeben", "Es zum Bus tragen"], a: 0,
      why: { 1: "Von einer Gepäckabgabe wird nichts gesagt.", 2: "Davon ist keine Rede." },
      e: "*Çanta ve bavullarınızı yanınızdan ayırmayın.* = „Trennen Sie Ihre Taschen und Koffer nicht von sich.“" }
  ]
});

K.addText('tr-a2-h02', {
  level: 'A2', kind: 'listen', scene: 'hastane', genre: 'anrufbeantworter',
  title: "Muayenehane mesajı", sub: "Anrufbeantworter einer Arztpraxis", plays: 2,
  lines: [
    { s: 'Sekreter', g: 'f', t: "Merhaba, burası Doktor Kaya’nın kliniği. Şu anda telefona bakamıyoruz. Kliniğimiz hafta içi sabah dokuzdan akşam beşe kadar açık. Randevu için lütfen bir mesaj bırakın, adınızı ve telefon numaranızı söyleyin. Acil durumda yüz on iki numarayı arayın. Teşekkür ederiz, iyi günler.", n: "Hallo, hier ist die Praxis von Doktor Kaya. Im Moment können wir nicht ans Telefon gehen. Unsere Praxis ist werktags von neun Uhr morgens bis fünf Uhr abends geöffnet. Bitte hinterlassen Sie für einen Termin eine Nachricht, nennen Sie Ihren Namen und Ihre Telefonnummer. Im Notfall rufen Sie die 112 an. Vielen Dank, einen schönen Tag." }
  ],
  gloss: { "adınızı": "Ihren Namen", "anda": "Moment", "burası": "hier", "ederiz": "wir danken", "içi": "innerhalb", "kliniği": "Praxis/Klinik", "Kliniğimiz": "unsere Praxis", "randevu": "Termin", "bırakın": "hinterlassen Sie", "acil durum": "Notfall", "numara": "Nummer", "bakamıyoruz": "wir können nicht (ans Telefon) gehen" },
  questions: [
    { id: "tr-a2-h02.q1", t: "cloze", q: "Ergänze die Öffnungszeiten.", text: "Kliniğimiz hafta içi sabah {1} akşam {2} kadar açık.", gaps: { 1: { a: ["dokuzdan"], o: ["dokuzdan", "dokuzda", "dokuza"], wrong: { "dokuzda": "*-dA* heißt „um/bei“. Für „ab/von … an“ brauchst du den Ablativ **-dAn**.", "dokuza": "*-A* ist der Dativ (Richtung); „von“ verlangt *-dAn*." } }, 2: { a: ["beşe"], o: ["beşe", "beşte", "beşten"], wrong: { "beşte": "*-tA* = „um“. Vor *kadar* („bis“) steht der Dativ.", "beşten": "*-dAn* heißt „von … an“; „bis“ verlangt vor *kadar* den Dativ." } } },
      e: "**… -dAn … -(y)A kadar** = „von … bis …“: *dokuzdan beşe kadar*." },
    { id: "tr-a2-h02.q2", t: "mc", q: "Was soll man hinterlassen, wenn man einen Termin möchte?", o: ["Namen und Telefonnummer", "Nur den Namen", "Eine E-Mail-Adresse"], a: 0,
      why: { 1: "Es werden **zwei** Angaben verlangt: Name **und** Telefonnummer.", 2: "Von einer E-Mail-Adresse ist keine Rede." },
      e: "*adınızı ve telefon numaranızı söyleyin* = „nennen Sie Ihren Namen und Ihre Telefonnummer“." },
    { id: "tr-a2-h02.q3", t: "match", q: "Ordne zu:", p: [["Randevu için", "eine Nachricht hinterlassen"], ["Acil durumda", "die 112 anrufen"], ["Hafta içi", "von neun bis siebzehn Uhr"]],
      e: "*için* = für / um zu; *-dA* in *durumda* = „im Fall“." }
  ]
});

K.addText('tr-a2-h03', {
  level: 'A2', kind: 'listen', scene: 'hava', genre: 'radio',
  title: "Hava durumu", sub: "Der Wetterbericht im Radio", plays: 2,
  lines: [
    { s: 'Spiker', g: 'm', t: "Günaydın sevgili dinleyiciler, hava durumuna geçiyoruz. Bugün İstanbul’da hava parçalı bulutlu, sıcaklık on sekiz derece. Öğleden sonra yağmur başlayacak ve akşama kadar sürecek. Yarın hava daha güzel: güneşli ve yirmi derece. Hafta sonu ise hava yeniden soğuyor, sıcaklık on dereceye düşecek. Yanınıza şemsiye almayı unutmayın!", n: "Guten Morgen, liebe Hörerinnen und Hörer, wir kommen zum Wetter. Heute ist es in Istanbul teilweise bewölkt, die Temperatur beträgt achtzehn Grad. Am Nachmittag beginnt Regen und dauert bis zum Abend. Morgen wird das Wetter schöner: sonnig und zwanzig Grad. Am Wochenende wird es dagegen wieder kalt, die Temperatur sinkt auf zehn Grad. Vergessen Sie nicht, einen Regenschirm mitzunehmen!" }
  ],
  gloss: { "almayı": "mitzunehmen", "dereceye": "auf … Grad", "soğuyor": "es wird kalt", "öğleden": "nachmittags", "parçalı bulutlu": "teilweise bewölkt", "sıcaklık": "Temperatur", "derece": "Grad", "sürecek": "wird dauern", "güneşli": "sonnig", "düşecek": "wird sinken", "şemsiye": "Regenschirm", "unutmayın": "vergessen Sie nicht", "dinleyiciler": "Hörer" },
  questions: [
    { id: "tr-a2-h03.q1", t: "mc", q: "Wie warm ist es heute in Istanbul?", o: ["Achtzehn Grad", "Zwanzig Grad", "Zehn Grad"], a: 0,
      why: { 1: "Zwanzig Grad werden **morgen** erwartet.", 2: "Zehn Grad sind für das **Wochenende** angesagt." },
      e: "*Bugün … sıcaklık on sekiz derece.* *Yarın … yirmi derece.* *Hafta sonu … on derece.*" },
    { id: "tr-a2-h03.q2", t: "gap", q: "Öğleden sonra yağmur ___ . (başlamak – Futur)", a: ["başlayacak"],
      wrong: { "başlıyor": "Präsens. Der Regen kommt erst am Nachmittag: Futur *-(y)AcAk*.", "başladı": "Vergangenheit – der Regen hat noch nicht begonnen.", "başlar": "Aorist drückt Allgemeines aus; für eine Vorhersage nimmst du das Futur." },
      e: "*başla-* + **y** + **-acak**: başla-**y**-**acak** („wird beginnen“)." },
    { id: "tr-a2-h03.q3", t: "match", q: "Ordne die Zeit dem Wetter zu:", p: [["Bugün", "teilweise bewölkt"], ["Öğleden sonra", "Regen"], ["Yarın", "sonnig"], ["Hafta sonu", "wieder kalt"]],
      e: "*bugün* = heute, *yarın* = morgen, *hafta sonu* = Wochenende." },
    { id: "tr-a2-h03.q4", t: "mc", q: "Was rät der Sprecher?", o: ["Einen Regenschirm mitnehmen", "Zu Hause bleiben", "Eine Sonnenbrille tragen"], a: 0,
      why: { 1: "Davon ist keine Rede.", 2: "Sonne gibt es erst **morgen**, und eine Brille wird nicht erwähnt." },
      e: "*Yanınıza şemsiye almayı unutmayın!* = „Vergessen Sie nicht, einen Regenschirm mitzunehmen!“" }
  ]
});

K.addText('tr-a2-h04', {
  level: 'A2', kind: 'listen', scene: 'kafe', genre: 'gespraech',
  title: "Kafede", sub: "Im Café", plays: 2,
  lines: [
    { s: 'Garson', g: 'm', t: "Hoş geldiniz, buyurun. Ne alırsınız?", n: "Willkommen, bitte schön. Was nehmen Sie?" },
    { s: 'Selin', g: 'f', t: "İki çay ve bir dilim kek istiyorum. Kekler bugün taze mi?", n: "Ich möchte zwei Tee und ein Stück Kuchen. Sind die Kuchen heute frisch?" },
    { s: 'Garson', g: 'm', t: "Evet, sabah yaptık. Çikolatalı kek ve limonlu kek var.", n: "Ja, wir haben sie heute früh gemacht. Es gibt Schokoladenkuchen und Zitronenkuchen." },
    { s: 'Selin', g: 'f', t: "Limonlu kek alayım. Toplam ne kadar?", n: "Ich nehme den Zitronenkuchen. Wie viel macht es zusammen?" },
    { s: 'Garson', g: 'm', t: "İki çay kırk lira, kek altmış lira, toplam yüz lira.", n: "Zwei Tee vierzig Lira, Kuchen sechzig Lira, zusammen hundert Lira." },
    { s: 'Selin', g: 'f', t: "Kartla ödeyebilir miyim?", n: "Kann ich mit Karte zahlen?" },
    { s: 'Garson', g: 'm', t: "Maalesef, sadece nakit alıyoruz.", n: "Leider nehmen wir nur Bargeld." },
    { s: 'Selin', g: 'f', t: "O zaman nakit ödeyeyim. Buyurun yüz lira.", n: "Dann zahle ich bar. Bitte, hundert Lira." }
  ],
  gloss: { "kek": "Kuchen", "alırsınız": "Sie nehmen", "alıyoruz": "wir nehmen", "kekler": "die Kuchen", "buyurun": "bitte (schön)", "dilim": "Stück/Scheibe", "taze": "frisch", "limonlu": "mit Zitrone", "çikolatalı": "mit Schokolade", "toplam": "insgesamt", "maalesef": "leider", "nakit": "Bargeld", "alayım": "ich nehme", "ödeyeyim": "ich zahle" },
  questions: [
    { id: "tr-a2-h04.q1", t: "mc", q: "Welchen Kuchen nimmt Selin?", o: ["Zitronenkuchen", "Schokoladenkuchen", "Keinen"], a: 0,
      why: { 1: "Schokolade (*çikolatalı*) wird nur genannt, nicht gewählt.", 2: "Sie bestellt ein Stück Kuchen." },
      e: "*Limonlu kek alayım.* = „Ich nehme den Zitronenkuchen.“ *-lI* = „mit“: *limonlu*." },
    { id: "tr-a2-h04.q2", t: "mc", q: "Wie viel zahlt Selin insgesamt?", o: ["Sechzig Lira", "Hundert Lira", "Vierzig Lira"], a: 1,
      why: { 0: "Sechzig Lira kostet nur der **Kuchen**.", 2: "Vierzig Lira kosten nur die **zwei Tee**." },
      e: "*İki çay kırk lira, kek altmış lira, toplam yüz lira.* 40 + 60 = 100." },
    { id: "tr-a2-h04.q3", t: "cloze", q: "Ergänze, wie Selin bezahlen möchte und was das Café annimmt.", text: "Selin {1} ödemek istiyor, ama kafe sadece {2} alıyor.", gaps: { 1: { a: ["kartla"], o: ["kartla", "nakit"], wrong: { "nakit": "Das ist das Gegenteil: Sie **fragt** nach der Karte." } }, 2: { a: ["nakit"], o: ["kartla", "nakit"], wrong: { "kartla": "Das Café nimmt keine Kartenzahlung." } } },
      e: "*Kartla ödeyebilir miyim?* – *Sadece nakit alıyoruz.* *-lA* = „mit“: *kartla*." },
    { id: "tr-a2-h04.q4", t: "match", q: "Ordne zu:", p: [["Sabah yaptık.", "Wir haben es heute früh gemacht."], ["Maalesef", "leider"], ["Toplam yüz lira.", "Zusammen hundert Lira."]],
      e: "*yaptık* = Vergangenheit auf -dI, 1. Person Plural." }
  ]
});

K.addText('tr-a2-h05', {
  level: 'A2', kind: 'listen', scene: 'is', genre: 'interview',
  title: "Fırıncıyla röportaj", sub: "Interview mit einem Bäcker", plays: 3,
  lines: [
    { s: 'Sunucu', g: 'f', t: "Mehmet Bey, günaydın. Gününüz kaçta başlıyor?", n: "Mehmet Bey, guten Morgen. Wann beginnt Ihr Tag?" },
    { s: 'Mehmet', g: 'm', t: "Ben her gün sabah dörtte kalkıyorum, beşte fırındayım. Ekmekler altıda hazır oluyor.", n: "Ich stehe jeden Tag um vier auf, um fünf bin ich in der Bäckerei. Um sechs ist das Brot fertig." },
    { s: 'Sunucu', g: 'f', t: "Çok erken! Hafta sonu da çalışıyor musunuz?", n: "Sehr früh! Arbeiten Sie auch am Wochenende?" },
    { s: 'Mehmet', g: 'm', t: "Evet, pazar günü de çalışıyoruz. Sadece pazartesi kapalıyız.", n: "Ja, auch sonntags arbeiten wir. Nur montags haben wir geschlossen." },
    { s: 'Sunucu', g: 'f', t: "En çok ne satıyorsunuz?", n: "Was verkaufen Sie am meisten?" },
    { s: 'Mehmet', g: 'm', t: "Simit! Her sabah iki yüz simit yapıyoruz ve öğleye kadar hepsi bitiyor.", n: "Simit! Jeden Morgen machen wir zweihundert Simit, und bis Mittag sind alle weg." },
    { s: 'Sunucu', g: 'f', t: "İşinizi seviyor musunuz?", n: "Mögen Sie Ihre Arbeit?" },
    { s: 'Mehmet', g: 'm', t: "Çok seviyorum. Yorucu ama müşterilerim taze ekmeği çok seviyor.", n: "Sehr. Sie ist anstrengend, aber meine Kunden lieben frisches Brot." }
  ],
  gloss: { "musunuz": "(Fragepartikel, Sie)", "erken": "früh", "İşinizi": "Ihre Arbeit", "taze": "frisch", "öğleye": "Mittag", "fırın": "Bäckerei, Backofen", "simit": "Sesamring", "yorucu": "anstrengend", "müşteri": "Kunde", "hepsi": "alle", "bitiyor": "sind aus", "hazır": "fertig" },
  questions: [
    { id: "tr-a2-h05.q1", t: "mc", q: "Wann steht Mehmet auf?", o: ["Um vier", "Um fünf", "Um sechs"], a: 0,
      why: { 1: "Um **fünf** ist er in der Bäckerei, nicht aufgestanden.", 2: "Um **sechs** ist das Brot fertig." },
      e: "*sabah dörtte kalkıyorum* = „ich stehe um vier auf“." },
    { id: "tr-a2-h05.q2", t: "gap", q: "Ben her gün sabah dörtte ___ . (kalkmak – ich stehe auf)", a: ["kalkıyorum", "kalkarım"],
      wrong: { "kalkıyoruz": "*-uz* = „wir“. Mehmet spricht von sich: **-um**.", "kalktım": "Vergangenheit; Mehmet beschreibt seinen **täglichen** Ablauf." },
      e: "*kalk-* + **-ıyor** + **-um**: kalk-**ıyor**-**um**. Auch der Aorist *kalkarım* („ich stehe (gewöhnlich) auf“) passt für Gewohnheiten; im Interview hörst du *kalkıyorum*." },
    { id: "tr-a2-h05.q3", t: "mc", q: "An welchem Tag ist die Bäckerei geschlossen?", o: ["Montag", "Sonntag", "Samstag"], a: 0,
      why: { 1: "Sonntags arbeiten sie (*pazar günü de çalışıyoruz*).", 2: "Am Samstag ist geöffnet." },
      e: "*Sadece pazartesi kapalıyız.* = „Nur montags haben wir geschlossen.“" },
    { id: "tr-a2-h05.q4", t: "match", q: "Ordne zu:", p: [["Beşte", "Mehmet ist in der Bäckerei"], ["Altıda", "das Brot ist fertig"], ["Öğleye kadar", "alle Simit sind weg"], ["Pazartesi", "geschlossen"]],
      e: "Uhrzeit = Lokativ *-dA*; *-(y)A kadar* = bis." }
  ]
});

K.addText('tr-a2-h06', {
  level: 'A2', kind: 'listen', scene: 'market', genre: 'durchsage',
  title: "Markette indirim", sub: "Supermarkt-Durchsage", plays: 2,
  lines: [
    { s: 'Anons', g: 'f', t: "Değerli müşterilerimiz, dikkat lütfen. Bugün marketimizde büyük indirim var. Süt ve yoğurt yüzde otuz indirimli. Taze meyve ve sebzeler ikinci koridorda. Üç kilo elma alırsanız, bir kilo portakal hediye! Bugün kasalarda uzun sıra olabilir, anlayışınız için teşekkür ederiz.", n: "Liebe Kunden, bitte aufgepasst. Heute gibt es in unserem Markt große Rabatte. Milch und Joghurt sind um dreißig Prozent reduziert. Frisches Obst und Gemüse finden Sie im zweiten Gang. Wenn Sie drei Kilo Äpfel kaufen, schenken wir Ihnen ein Kilo Orangen! Heute kann es an den Kassen lange Schlangen geben, danke für Ihr Verständnis." }
  ],
  gloss: { "alırsanız": "wenn Sie kaufen", "değerli": "geschätzt", "ederiz": "wir danken", "koridorda": "im Gang", "portakal": "Orange", "anlayışınız": "Ihr Verständnis", "taze": "frisch", "indirim": "Rabatt", "indirimli": "reduziert", "yüzde": "Prozent", "koridor": "Gang", "hediye": "Geschenk", "kasa": "Kasse", "sıra": "Schlange", "yoğurt": "Joghurt", "sebze": "Gemüse" },
  questions: [
    { id: "tr-a2-h06.q1", t: "cloze", q: "Ergänze die Rabattdurchsage.", text: "{1} ve yoğurt yüzde {2} indirimli.", gaps: { 1: { a: ["Süt"], o: ["Süt", "Meyve", "Ekmek"], wrong: { "Meyve": "Obst wird nur mit seinem Ort genannt; reduziert sind Milch und Joghurt.", "Ekmek": "Brot kommt in der Durchsage nicht vor." } }, 2: { a: ["otuz"], o: ["on", "yirmi", "otuz"], wrong: { "on": "*on* = 10. Gesagt wird *otuz* (30).", "yirmi": "*yirmi* = 20. Gesagt wird *otuz* (30)." } } },
      e: "*Süt ve yoğurt yüzde otuz indirimli.* = „Milch und Joghurt sind um dreißig Prozent reduziert.“" },
    { id: "tr-a2-h06.q2", t: "mc", q: "Wo findet man frisches Obst und Gemüse?", o: ["Im zweiten Gang", "An der Kasse", "Am Eingang"], a: 0,
      why: { 1: "An der Kasse bezahlt man, dort gibt es eventuell eine Schlange.", 2: "Davon ist keine Rede." },
      e: "*ikinci koridorda* = „im zweiten Gang“ (Ordnungszahl *ikinci* + Lokativ)." },
    { id: "tr-a2-h06.q3", t: "mc", q: "Wann bekommt man ein Kilo Orangen geschenkt?", o: ["Beim Kauf von drei Kilo Äpfeln", "Beim Kauf von Milch", "Ab hundert Lira Einkauf"], a: 0,
      why: { 1: "Milch ist reduziert, aber ohne Geschenk.", 2: "Von einem Mindestbetrag ist keine Rede." },
      e: "*Üç kilo elma alırsanız, bir kilo portakal hediye!* *-(y)sAnIz* = „wenn Sie …“." },
    { id: "tr-a2-h06.q4", t: "match", q: "Ordne zu:", p: [["Bugün kasalarda uzun sıra olabilir", "Heute kann es an den Kassen lange Schlangen geben."], ["anlayışınız için teşekkür ederiz", "Danke für Ihr Verständnis."], ["Taze meyve ve sebzeler ikinci koridorda.", "Frisches Obst und Gemüse ist im zweiten Gang."]],
      e: "*olabilir* = es kann sein/geben; *için* = für; *ikinci koridorda* = im zweiten Gang." }
  ]
});

K.addText('tr-a2-h07', {
  level: 'A2', kind: 'listen', scene: 'lokanta', genre: 'anrufbeantworter',
  title: "Lokantadan mesaj", sub: "Nachricht auf dem Anrufbeantworter", plays: 3,
  lines: [
    { s: 'Zeynep', g: 'f', t: "Merhaba Ahmet Bey, Lezzet Lokantasından arıyorum. Cumartesi akşamı dört kişilik masa için rezervasyon yaptınız. Maalesef saat sekizde bütün masalarımız dolu. Saat yedide ya da dokuz buçukta boş masamız var. Pazar akşamı sekizde de masamız var. Lütfen bugün bizi geri arayın, yoksa rezervasyonunuz iptal olur.", n: "Hallo Ahmet Bey, ich rufe vom Restaurant Lezzet an. Sie haben für Samstagabend einen Tisch für vier Personen reserviert. Leider sind um acht alle unsere Tische besetzt. Um sieben oder um halb zehn haben wir einen freien Tisch. Auch am Sonntagabend um acht haben wir einen Tisch. Bitte rufen Sie uns heute zurück, sonst wird Ihre Reservierung storniert." }
  ],
  gloss: { "arıyorum": "ich rufe an", "maalesef": "leider", "Lokantasından": "vom Restaurant", "dolu": "besetzt, voll", "rezervasyon": "Reservierung", "iptal olur": "wird storniert", "masa": "Tisch", "bütün": "alle", "boş": "frei", "geri arayın": "rufen Sie zurück", "yoksa": "sonst" },
  questions: [
    { id: "tr-a2-h07.q1", t: "mc", q: "Warum ruft das Restaurant an?", o: ["Der gewünschte Tisch um acht ist nicht frei.", "Es möchte den Preis ändern.", "Es hat eine Brieftasche gefunden."], a: 0,
      why: { 1: "Vom Preis ist keine Rede.", 2: "Davon ist keine Rede." },
      e: "*Maalesef saat sekizde bütün masalarımız dolu.* = „Leider sind um acht alle unsere Tische besetzt.“" },
    { id: "tr-a2-h07.q2", t: "mc", q: "Welche Alternativzeit wird NICHT genannt?", o: ["Samstag um halb zehn", "Sonntag um acht", "Freitag um sieben"], a: 2,
      why: { 0: "Doch: *dokuz buçukta*.", 1: "Doch: *Pazar akşamı sekizde*." },
      e: "Genannt werden Samstag um sieben, Samstag um halb zehn und Sonntag um acht." },
    { id: "tr-a2-h07.q3", t: "gap", q: "Cumartesi akşamı dört ___ masa için rezervasyon yaptınız. (Tisch für vier Personen)", a: ["kişilik"],
      wrong: { "kişi": "*dört kişi* = „vier Personen“; vor *masa* braucht man **-lIk**.", "kişiye": "Dativ passt hier nicht; der Zusatz *-lIk* macht „für … Personen“." },
      e: "Zahl + *kişilik* + Nomen: *iki kişilik oda*, *dört kişilik masa*." },
    { id: "tr-a2-h07.q4", t: "mc", q: "Was passiert, wenn der Gast heute nicht zurückruft?", o: ["Die Reservierung wird storniert.", "Der Tisch wird teurer.", "Das Restaurant ruft erneut an."], a: 0,
      why: { 1: "Davon ist keine Rede.", 2: "Davon ist keine Rede." },
      e: "*Lütfen bugün bizi geri arayın, yoksa rezervasyonunuz iptal olur.* *yoksa* = „sonst“." }
  ]
});

K.addText('tr-a2-h08', {
  level: 'A2', kind: 'listen', scene: 'etkinlik', genre: 'radio',
  title: "Hafta sonu önerileri", sub: "Veranstaltungstipps im Radio", plays: 2,
  lines: [
    { s: 'Spiker', g: 'f', t: "Hafta sonu için güzel haberlerimiz var. Cumartesi günü şehir parkında çocuk festivali başlıyor. Gün boyunca müzik, dans ve resim atölyeleri olacak. Giriş ücretsiz. Pazar akşamı ise sinemada eski bir Türk filmi var, bilet iki yüz lira. Hava güzel olursa festival iki gün sürecek. Kısacası hem çocuklar hem büyükler için eğlenceli bir hafta sonu sizi bekliyor.", n: "Wir haben gute Neuigkeiten fürs Wochenende. Am Samstag beginnt im Stadtpark ein Kinderfest. Den ganzen Tag gibt es Musik, Tanz und Malwerkstätten. Der Eintritt ist frei. Am Sonntagabend läuft im Kino ein alter türkischer Film, das Ticket kostet zweihundert Lira. Wenn das Wetter schön ist, dauert das Fest zwei Tage. Kurz gesagt erwartet Sie ein unterhaltsames Wochenende für Kinder und Erwachsene." }
  ],
  gloss: { "festival": "Fest/Festival", "atölye": "Workshop", "giriş": "Eintritt", "ücretsiz": "kostenlos", "sürecek": "wird dauern", "büyükler": "Erwachsene", "eğlenceli": "unterhaltsam", "resim": "Malerei, Bild", "gün boyunca": "den ganzen Tag" },
  questions: [
    { id: "tr-a2-h08.q1", t: "mc", q: "Was kostet der Eintritt zum Kinderfest?", o: ["Nichts", "Zweihundert Lira", "Zwanzig Lira"], a: 0,
      why: { 1: "Zweihundert Lira kostet das **Kinoticket**.", 2: "Dieser Preis wird nicht genannt." },
      e: "*Giriş ücretsiz.* = „Der Eintritt ist kostenlos.“ (*-sIz* = ohne)" },
    { id: "tr-a2-h08.q2", t: "cloze", q: "Ergänze:", text: "Pazar akşamı sinemada {1} bir Türk filmi var. Bilet {2} lira.", gaps: { 1: { a: ["eski"], o: ["eski", "yeni"], wrong: { "yeni": "Es ist ein **alter** Film." } }, 2: { a: ["iki yüz"], o: ["on", "elli", "iki yüz"], wrong: { "on": "*on* = 10; der Preis ist *iki yüz* (200).", "elli": "*elli* = 50; der Preis ist *iki yüz* (200)." } } },
      e: "*eski* = alt, *yeni* = neu; *iki yüz* = 200." },
    { id: "tr-a2-h08.q3", t: "gap", q: "Cumartesi günü şehir parkında çocuk festivali ___ . (başlamak – Präsens)", a: ["başlıyor"],
      wrong: { "başlayor": "Endet der Stamm auf *a*, fällt es vor *-Iyor* weg und wird zu **ı**: *başla-* → *başlıyor*.", "başladı": "Vergangenheit – die Ansage kündigt das Fest für das kommende Wochenende an.", "başlamak": "Infinitiv – am Satzende steht ein konjugiertes Verb." },
      e: "*başla-* + **-Iyor**: Das auslautende *a* wird zu **ı**: *başlıyor*. Das Präsens kann auch einen festen Plan der nahen Zukunft nennen." },
    { id: "tr-a2-h08.q4", t: "match", q: "Ordne zu:", p: [["Gün boyunca", "den ganzen Tag"], ["Giriş ücretsiz", "Eintritt frei"], ["Resim atölyeleri", "Malworkshops"]],
      e: "*boyunca* = während (… hindurch)." },
    { id: "tr-a2-h08.q5", t: "mc", q: "Was passiert laut Ansage, wenn das Wetter schön ist?", o: ["Das Kinderfest dauert zwei Tage.", "Der Eintritt zum Kinderfest ist dann kostenlos.", "Der Film läuft draußen im Park."], a: 0,
      why: { 1: "Der Eintritt ist **immer** frei (*Giriş ücretsiz*), unabhängig vom Wetter.", 2: "Vom Wetter hängt nur die Dauer des Festes ab; der Film läuft im Kino." },
      e: "*Hava güzel olursa festival iki gün sürecek.* = „Wenn das Wetter schön ist, dauert das Fest zwei Tage.“ *-sA* (olursa) = wenn/falls." }
  ]
});

K.addText('tr-a2-h09', {
  level: 'A2', kind: 'listen', scene: 'sokak', genre: 'gespraech',
  title: "Postane nerede?", sub: "Nach dem Weg fragen", plays: 2,
  lines: [
    { s: 'Anna', g: 'f', t: "Affedersiniz, postane buralarda mı?", n: "Entschuldigung, ist die Post hier in der Nähe?" },
    { s: 'Yoldan geçen', g: 'm', t: "Evet, çok yakın. Bu caddeden düz gidin, ikinci sokaktan sağa dönün.", n: "Ja, ganz nah. Gehen Sie diese Straße geradeaus und biegen Sie in der zweiten Straße rechts ab." },
    { s: 'Anna', g: 'f', t: "İkinci sokak mı? Eczanenin yanındaki sokak mı?", n: "Die zweite Straße? Die Straße neben der Apotheke?" },
    { s: 'Yoldan geçen', g: 'm', t: "Evet, doğru. Postane solda olacak, bankanın karşısında.", n: "Ja, genau. Die Post ist dann links, gegenüber der Bank." },
    { s: 'Anna', g: 'f', t: "Yürüyerek kaç dakika sürer?", n: "Wie viele Minuten dauert es zu Fuß?" },
    { s: 'Yoldan geçen', g: 'm', t: "Yaklaşık beş dakika. Ama pazar günü kapalı.", n: "Ungefähr fünf Minuten. Aber sonntags ist sie geschlossen." },
    { s: 'Anna', g: 'f', t: "Bugün cumartesi, sorun yok. Çok teşekkürler!", n: "Heute ist Samstag, kein Problem. Vielen Dank!" }
  ],
  gloss: { "postane": "Post(amt)", "buralarda": "hier in der Gegend", "cadde": "Hauptstraße", "düz": "geradeaus", "sokak": "Gasse, Straße", "dönün": "biegen Sie ab", "karşısında": "gegenüber", "yaklaşık": "ungefähr", "Affedersiniz": "Entschuldigung", "eczane": "Apotheke" },
  questions: [
    { id: "tr-a2-h09.q1", t: "gap", q: "İkinci sokaktan ___ dönün. (nach rechts)", a: ["sağa"],
      wrong: { "sağda": "*-dA* = „rechts (wo)“. Beim Abbiegen fragst du „wohin?“ → Dativ **-A**.", "sağ": "Ohne Endung fehlt die Richtung: *sağa* = nach rechts.", "sağdan": "*-dAn* = „von rechts“." },
      e: "*sağa dön-* = rechts abbiegen. Richtung (wohin?) = Dativ **-(y)A**." },
    { id: "tr-a2-h09.q2", t: "mc", q: "Wo liegt die Post?", o: ["Links, gegenüber der Bank", "Rechts, neben der Apotheke", "Geradeaus am Ende der Straße"], a: 0,
      why: { 1: "Die **Abbiegestraße** liegt neben der Apotheke, nicht die Post.", 2: "Man biegt in der zweiten Straße ab." },
      e: "*Postane solda olacak, bankanın karşısında.* = „Die Post ist links, gegenüber der Bank.“" },
    { id: "tr-a2-h09.q3", t: "mc", q: "Wie lange dauert der Weg zu Fuß?", o: ["Etwa fünf Minuten", "Etwa fünfzehn Minuten", "Etwa eine Stunde"], a: 0,
      why: { 1: "*beş* ist 5, nicht 15 (*on beş*).", 2: "Von einer Stunde ist keine Rede." },
      e: "*Yaklaşık beş dakika.*" },
    { id: "tr-a2-h09.q4", t: "match", q: "Ordne zu:", p: [["düz gidin", "gehen Sie geradeaus"], ["sağa dönün", "biegen Sie rechts ab"], ["bankanın karşısında", "gegenüber der Bank"]],
      e: "*karşısında* = gegenüber (mit Besitzer-Endung: *bankanın karşısında*)." }
  ]
});

K.addText('tr-a2-h10', {
  level: 'A2', kind: 'listen', scene: 'is', genre: 'interview',
  title: "Doktorla röportaj", sub: "Interview mit einer Ärztin", plays: 3,
  lines: [
    { s: 'Sunucu', g: 'm', t: "Hoş geldiniz, Elif Hanım. Gününüz nasıl geçiyor?", n: "Willkommen, Elif Hanım. Wie verläuft Ihr Tag?" },
    { s: 'Elif', g: 'f', t: "Sabah sekizde hastaneye gidiyorum. Önce hastalarımı görüyorum, öğleye kadar çok yoğun oluyor. Öğle arasında yirmi dakika yemek yiyorum.", n: "Um acht gehe ich ins Krankenhaus. Zuerst sehe ich meine Patienten, bis mittags ist es sehr voll. In der Mittagspause esse ich zwanzig Minuten." },
    { s: 'Sunucu', g: 'm', t: "Boş zamanınız var mı?", n: "Haben Sie Freizeit?" },
    { s: 'Elif', g: 'f', t: "Az ama var. Akşamları koşuya çıkıyorum, hafta sonu arkadaşlarımla futbol oynuyorum. Yatmadan önce de her gün yarım saat kitap okuyorum.", n: "Wenig, aber ja. Abends gehe ich joggen, am Wochenende spiele ich mit Freunden Fußball. Vor dem Schlafen lese ich außerdem jeden Tag eine halbe Stunde." },
    { s: 'Sunucu', g: 'm', t: "Gelecek hafta tatile çıkıyorsunuz, değil mi?", n: "Nächste Woche fahren Sie in den Urlaub, nicht wahr?" },
    { s: 'Elif', g: 'f', t: "Evet, annemle birlikte İzmir’e gidiyoruz. Bir hafta sadece dinlenmek istiyorum.", n: "Ja, mit meiner Mutter fahren wir nach Izmir. Eine Woche möchte ich nur ausruhen." }
  ],
  gloss: { "gidiyorum": "ich gehe", "gidiyoruz": "wir fahren", "yiyorum": "ich esse", "öğleye": "Mittag", "hasta": "Patient/in", "yoğun": "voll, stressig", "öğle arası": "Mittagspause", "boş zaman": "Freizeit", "koşu": "Joggen", "yatmadan önce": "vor dem Schlafengehen", "tatil": "Urlaub", "geçiyor": "verläuft", "arkadaşlarımla": "mit meinen Freunden", "annemle": "mit meiner Mutter" },
  questions: [
    { id: "tr-a2-h10.q1", t: "mc", q: "Wann geht Elif ins Krankenhaus?", o: ["Um acht", "Um neun", "Um zwölf"], a: 0,
      why: { 1: "*dokuz* wird nicht genannt.", 2: "Mittags hat sie ihre Pause." },
      e: "*Sabah sekizde hastaneye gidiyorum.*" },
    { id: "tr-a2-h10.q2", t: "mc", q: "Was macht Elif am Wochenende?", o: ["Fußball spielen mit Freunden", "Arbeiten", "Reisen"], a: 0,
      why: { 1: "Sie arbeitet unter der Woche im Krankenhaus.", 2: "Die Reise ist erst **nächste Woche**." },
      e: "*Hafta sonu arkadaşlarımla futbol oynuyorum.* *-(y)lA* = mit: *arkadaşlarımla*." },
    { id: "tr-a2-h10.q3", t: "gap", q: "Evet, annemle birlikte İzmir’e ___ . (gitmek – wir fahren)", a: ["gidiyoruz"],
      wrong: { "gidiyorum": "*-um* = ich; Elif fährt **mit** ihrer Mutter → **-uz** (wir).", "gittik": "Vergangenheit – sie fahren erst nächste Woche.", "gideriz": "Aorist; hier ist ein fester Plan (Präsens)." },
      e: "*gid-* (t→d vor Vokal) + **-iyor** + **-uz**: gid-**iyor**-**uz**." },
    { id: "tr-a2-h10.q4", t: "match", q: "Ordne zu:", p: [["Akşamları", "Joggen"], ["Yatmadan önce", "Lesen"], ["Öğle arasında", "zwanzig Minuten essen"], ["Gelecek hafta", "Urlaub in Izmir"]],
      e: "*-mAdAn önce* = bevor man …; *akşamları* = abends (regelmäßig)." }
  ]
});

})(window.KOPRU);
