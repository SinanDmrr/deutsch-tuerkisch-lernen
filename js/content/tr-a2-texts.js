/* Türkisch A2 – Lesetexte für Deutschsprechende (Erklärungen auf Deutsch)
 * Format: K.addText('tr-a2-rNN', { level, kind:'read', scene, genre, title (TR), sub (DE), body, gloss, questions }).
 * Fragen-IDs '<textId>.qN' sind fest und werden nie geändert oder wiederverwendet.
 * Paket 3: tr-a2-r01 (hastane), tr-a2-r02 (bayram).
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

})(window.KOPRU);
