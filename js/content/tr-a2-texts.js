/* Türkisch A2 – Lesetexte für Deutschsprechende (Erklärungen auf Deutsch)
 * Format: K.addText('tr-a2-rNN', { level, kind:'read', scene, genre, title (TR), sub (DE), body, gloss, questions }).
 * Fragen-IDs '<textId>.qN' sind fest und werden nie geändert oder wiederverwendet.
 * Paket 3: tr-a2-r01 (hastane), tr-a2-r02 (bayram). Paket 4: tr-a2-r03 (otel), tr-a2-r04 (ev). Paket 5: tr-a2-r05 (kargo), tr-a2-r06 (ofis).
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
  gloss: { "kez": "Mal", "uykulu": "schläfrig", "kullanmayın": "fahren / benutzen", "dinlenin": "ruhen Sie sich aus", "yatın": "gehen Sie ins Bett", "tekrar": "wieder", "sadece": "nur", "öğle": "Mittag" },
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
  gloss: { "sofra": "gedeckter Tisch", "kuzenleriyle": "mit ihren Cousins/Cousinen", "Bayramın kutlu olsun": "Frohes Fest", "baklava": "Baklava (Blätterteiggebäck)", "babaannem": "meine Oma (väterlicherseits)", "buluşalım": "lass uns treffen", "getirin": "bringt mit", "tatlı": "Nachtisch", "hazırlıyor": "bereitet vor", "hep": "alle / zusammen" },
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

})(window.KOPRU);
