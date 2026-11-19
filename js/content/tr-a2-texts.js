/* Türkisch A2 – Lesetexte für Deutschsprechende (Erklärungen auf Deutsch)
 * Format: K.addText('tr-a2-rNN', { level, kind:'read', scene, genre, title (TR), sub (DE), body, gloss, questions }).
 * Fragen-IDs '<textId>.qN' sind fest und werden nie geändert oder wiederverwendet.
 * Paket 3: tr-a2-r01 (hastane), tr-a2-r02 (bayram). Paket 4: tr-a2-r03 (otel), tr-a2-r04 (ev).
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
    { id: "tr-a2-r03.q2", t: "gap", q: "Anna otele en geç saat ___ geliyor. (Anna kommt spätestens um neun Uhr im Hotel an.)", a: ["dokuzda", "9’da", "9'da"],
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

})(window.KOPRU);
