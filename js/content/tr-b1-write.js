/* Türkisch B1 – Schreibwerkstatt (ADR-13). Format: siehe js/content/tr-a2-write.js bzw. docs/adr-13-schreiben.md.
 * IDs tr-b1-s01 … s06 sind fest (nie ändern, nie neu vergeben). Erklärsprache: Deutsch.
 * Alle Aufgaben und Mustertexte sind selbst geschrieben. Szenarien: Bewerbung, Streit im Büro, Paket-Beschwerde, Mietvertrag, Nachbarschaft, Nachricht an eine Freundin. */
window.KOPRU.addWrites('tr-b1', [
  { id: 'tr-b1-s01', scene: 'ofis',
    title: 'Başvuru e-postası', sub: 'Bewerbung per E-Mail auf eine Stellenanzeige',
    task: 'In der Zeitung hast du eine Anzeige für eine Stelle als Büroassistent gesehen. Schreib eine formelle E-Mail: Nenne die Stelle, beschreibe kurz deine Erfahrung und den Grund für den Wechsel, bitte um ein Gespräch und bedanke dich.',
    points: ['Stelle nennen und Interesse zeigen', 'Erfahrung und Grund für den Wechsel', 'Bitte um ein Gespräch, Dank'],
    reg: 'siz',
    words: { min: 50, ziel: 70 },
    chunks: ['Gazetedeki … ilanınızı gördüm', 'bu pozisyona başvurmak istiyorum', '… bu nedenle …', 'Özgeçmişimi ekte gönderiyorum', 'Zaman ayırdığınız için teşekkür ederim', 'Saygılarımla'],
    hint: [['ilan', 'başvur'], ['çalış', 'için'], ['mülakat', 'teşekkür']],
    model: 'Sayın Yetkili,\nGazetedeki ofis asistanı ilanınızı gördüm ve bu pozisyona başvurmak istiyorum. İki yıldır bir muhasebe bürosunda çalışıyorum; bu nedenle belgeleri düzenlemeyi ve müşterilerle iletişim kurmayı iyi biliyorum. Daha büyük bir ekipte çalışmak istediğim için iş değiştirmeyi düşünüyorum. Özgeçmişimi ekte gönderiyorum. Sizinle bir mülakat yapabilirsek çok sevinirim. Önümüzdeki hafta her gün uygunum.\nZaman ayırdığınız için teşekkür ederim.\nSaygılarımla,\nEce Aydın',
    modeln: 'Sehr geehrte Damen und Herren,\nich habe Ihre Anzeige für die Stelle als Büroassistent in der Zeitung gesehen und möchte mich auf diese Stelle bewerben. Ich arbeite seit zwei Jahren in einem Buchhaltungsbüro; deshalb kann ich gut Unterlagen ordnen und mit Kunden kommunizieren. Weil ich in einem größeren Team arbeiten möchte, denke ich über einen Wechsel nach. Meinen Lebenslauf schicke ich im Anhang mit. Ich würde mich freuen, wenn wir ein Vorstellungsgespräch führen könnten. Nächste Woche bin ich jeden Tag verfügbar.\nVielen Dank für Ihre Zeit.\nMit freundlichen Grüßen\nEce Aydın',
    check: [
      { k: 'Sind alle drei Punkte drin (Stelle, Erfahrung und Grund, Bitte um Gespräch)?', e: 'Eine gute Bewerbung nennt zuerst die Stelle, dann kurz, warum du passt, und endet mit einem klaren Wunsch. Ohne den Wunsch nach einem Gespräch weiß die Leserin nicht, was du erwartest.' },
      { k: 'Hast du durchgehend „siz“ (Sie) benutzt?', e: 'Bei Unbekannten und in Bewerbungen schreibt man „siz“: „ilanınızı“ (Ihre Anzeige), „teşekkür ederim“. Ein Wechsel zu „sen“ („ilanını“) wirkt respektlos.' },
      { k: 'Hast du mindestens einen Grund mit „-DIğI için“ oder „bu nedenle“ genannt?', e: 'Mit „bu nedenle“ verbindest du zwei Sätze („deshalb“), mit „-DIğI için“ baust du einen Grund in einen Satz: „istediğim için“ (weil ich möchte). Das zeigt, dass du argumentieren kannst.' },
      { k: 'Steht die Grußformel („Saygılarımla“) und dein Name am Ende?', e: '„Saygılarımla“ ist die übliche formelle Schlussformel. Ohne Namen sieht die E-Mail unvollständig aus.' }
    ],
    mistakes: [
      { bad: 'Merhaba, ben iş istiyorum.', good: 'Bu pozisyona başvurmak istiyorum.', why: 'Das erste klingt wie eine Forderung und passt nicht in eine formelle E-Mail. „Başvurmak“ (sich bewerben) steht mit Dativ: pozisyona başvurmak.' },
      { bad: 'Ben çalışıyorum iki yıl muhasebe bürosu.', good: 'İki yıldır bir muhasebe bürosunda çalışıyorum.', why: 'Das Verb steht am Satzende, „seit zwei Jahren“ heißt „iki yıldır“, und der Ort braucht den Lokativ: „muhasebe bürosu“ (Nomen + Possessiv -su) bekommt vor -da ein -n: muhasebe büro-su-n-da.' },
      { bad: 'Teşekkür ederim zamanınız için.', good: 'Zaman ayırdığınız için teşekkür ederim.', why: '„için“ steht hinter dem Wort, auf das es sich bezieht: erst der Grund („Zaman ayırdığınız“ = dass Sie sich Zeit genommen haben), dann „için“, dann das Verb.' }
    ],
    e: 'Der Mustertext folgt einer typischen Bewerbung: Anlass und Stelle, Erfahrung mit Begründung („bu nedenle“), Grund für den Wechsel („istediğim için“), Bitte um ein Gespräch und höfliche Schlussformel.' },
  { id: 'tr-b1-s02', scene: 'ofis',
    title: 'Yöneticiye mektup', sub: 'Streit im Büro: Der Chefin das Problem schildern und eine Lösung vorschlagen',
    task: 'Du und ein Kollege streitet euch, wer einen Teil der Präsentation halten darf. Schreib deiner Chefin eine kurze, höfliche E-Mail: Beschreibe das Problem, sag, wie du dich fühlst, und schlage eine Lösung vor.',
    points: ['Problem sachlich schildern', 'Gefühl nennen', 'Lösung vorschlagen und Treffen anbieten'],
    reg: 'siz',
    words: { min: 50, ziel: 70 },
    chunks: ['… konusunda … bir anlaşmazlık yaşadık', 'ama … olduğu için …', 'Bence … olur', 'İsterseniz …', 'Anlayış gösterdiğiniz için teşekkür ederim'],
    hint: [['anlaşmazlık', 'sunum'], ['rahatsız', 'üzül'], ['bence', 'toplantı']],
    model: 'Sayın Yılmaz Hanım,\nSunumun hazırlığı konusunda iş arkadaşımla bir anlaşmazlık yaşadık. İkimiz de aynı bölümü sunmak istiyoruz, ama sunum süresi kısa olduğu için bu mümkün değil. Bu durum beni biraz rahatsız ediyor. Bence bölümleri paylaşırsak herkes memnun olur. İsterseniz yarın kısa bir toplantı yapabiliriz. Anlayış gösterdiğiniz için teşekkür ederim.\nSaygılarımla,\nMert Çelik',
    modeln: 'Sehr geehrte Frau Yılmaz,\nbei der Vorbereitung der Präsentation hatten mein Kollege und ich eine Meinungsverschiedenheit. Wir beide möchten denselben Teil vorstellen, aber weil die Präsentationszeit kurz ist, ist das nicht möglich. Diese Situation stört mich ein wenig. Ich denke, wenn wir die Teile aufteilen, sind alle zufrieden. Wenn Sie möchten, können wir morgen eine kurze Besprechung abhalten. Danke, dass Sie Verständnis zeigen.\nMit freundlichen Grüßen\nMert Çelik',
    check: [
      { k: 'Bleibt der Ton sachlich (keine Vorwürfe an den Kollegen)?', e: 'Eine gute Konflikt-E-Mail beschreibt die Lage, nicht den Menschen. „Ich fühle mich gestört“ ist besser als „Er ist unfair“, weil die Chefin so leichter helfen kann.' },
      { k: 'Hast du einen Vorschlag gemacht („Bence …“, „-sA“)?', e: 'Ein Vorschlag zeigt, dass du Lösungen suchst. „Bence“ leitet deine Meinung ein, und „-sA … olur“ drückt die Bedingung aus: „paylaşırsak herkes memnun olur“.' },
      { k: 'Hast du „siz“ verwendet und „Anlayış gösterdiğiniz için“ richtig gebaut?', e: 'Vor „için“ steht -DIğI + Possessiv: „gösterdiğiniz için“ (dass Sie zeigen). Die Endung -iniz passt zu „siz“.' },
      { k: 'Steht eine Verbindung wie „ama“ oder „bu yüzden“ im Text?', e: 'Konnektoren machen aus Einzelsätzen einen Text. „Ama“ zeigt den Gegensatz, „bu yüzden“ die Folge.' }
    ],
    mistakes: [
      { bad: 'Arkadaşım kötü, onu uyarın.', good: 'İş arkadaşımla bir anlaşmazlık yaşadık.', why: 'Das erste ist ein Vorwurf mit Befehl. Besser ist eine neutrale Schilderung: „yaşamak“ (erleben) plus Mitwirkung beider („yaşadık“).' },
      { bad: 'Bence bölümleri paylaşmalı olursa iyi.', good: 'Bence bölümleri paylaşırsak herkes memnun olur.', why: 'Die Bedingung braucht -sA direkt am Aorist (paylaş-ır-sak). „paylaşmalı olursa“ ist umständlich und fast nie so gesagt.' },
      { bad: 'Sizi konuşmak istiyorum.', good: 'Sizinle konuşmak istiyorum.', why: '„konuşmak“ verlangt die Endung „-(y)lA“ („mit“), nicht den Akkusativ.' }
    ],
    e: 'Der Mustertext ist in der Reihenfolge Problem – Gefühl – Vorschlag – Angebot aufgebaut. So bleibt der Ton höflich und sachlich.' },
  { id: 'tr-b1-s03', scene: 'market',
    title: 'Kargo şikâyeti', sub: 'Beschwerde per E-Mail: Ein Paket kam beschädigt an',
    task: 'Du hast online eine Vase bestellt, und sie kam kaputt an. Schreib dem Kundenservice: Was hast du bestellt? Was ist passiert? Was erwartest du (Rückgabe, Erstattung)?',
    points: ['Bestellung nennen', 'Schaden schildern', 'Rückgabe oder Erstattung verlangen'],
    reg: 'siz',
    words: { min: 50, ziel: 70 },
    chunks: ['… sipariş ettim', 'Paket hasarlı geldi, …', 'iade etmek … istiyorum', '… olmasına rağmen …', 'bu yüzden …', 'Lütfen … yazın'],
    hint: [['sipariş', 'internet'], ['hasarlı', 'kırık', 'fotoğraf'], ['iade', 'geri']],
    model: 'Sayın Müşteri Hizmetleri,\nİki hafta önce internet sitenizden bir vazo sipariş ettim. Paket hasarlı geldi, vazo kırıktı. Hasarın fotoğraflarını e-postaya ekledim. Siparişi iade etmek ve parayı geri almak istiyorum. Teslimat sürenizin uzun olmasına rağmen paketi sabırla bekledim, bu yüzden hızlı bir cevap bekliyorum. Lütfen bana iade kodunu ve iade adımlarını yazın.\nSaygılarımla,\nCan Demir',
    modeln: 'Sehr geehrter Kundenservice,\nvor zwei Wochen habe ich auf Ihrer Internetseite eine Vase bestellt. Das Paket kam beschädigt an, die Vase war zerbrochen. Fotos des Schadens habe ich der E-Mail angehängt. Ich möchte die Bestellung zurückgeben und das Geld zurückbekommen. Obwohl Ihre Lieferzeit lang war, habe ich geduldig auf das Paket gewartet, deshalb erwarte ich eine schnelle Antwort. Bitte schreiben Sie mir den Rückgabecode und die Schritte für die Rückgabe.\nMit freundlichen Grüßen\nCan Demir',
    check: [
      { k: 'Stehen Bestellung, Schaden und Wunsch (iade oder geri ödeme) im Text?', e: 'Der Kundenservice braucht alle drei Angaben, um schnell zu helfen. Fehlt der Wunsch, schreibt er vielleicht nur zurück „Was können wir tun?“ und alles dauert länger.' },
      { k: 'Hast du einen Grund mit „-DIğI için“ und einen Gegengrund mit „rağmen“ oder „halde“ verwendet?', e: '„Hasarlı geldiği için“ nennt die Ursache, „uzun olmasına rağmen“ räumt die lange Lieferzeit ein. Beides zusammen macht deine Beschwerde glaubwürdig und fair.' },
      { k: 'Steht überall „siz“ und endet der Text höflich („Lütfen … yazın“, „Saygılarımla“)?', e: '„Yazın“ ist die höfliche Aufforderung zu „siz“. Ohne „lütfen“ klingt die Bitte schnell wie ein Befehl.' },
      { k: 'Hast du Zahlen und Zeiten genannt (iki hafta önce)?', e: 'Konkrete Angaben (wann bestellt, was bestellt) helfen bei der Bearbeitung. „Önce“ steht nach der Zeitspanne: iki hafta önce = vor zwei Wochen.' }
    ],
    mistakes: [
      { bad: 'Paket hasarlı, para ver bana.', good: 'Siparişi iade etmek ve parayı geri almak istiyorum.', why: '„ver bana“ ist ein grober Befehl. Mit „… istiyorum“ nennst du deinen Wunsch höflich und klar.' },
      { bad: 'Teslimat süreniz uzun olmasına rağmen sabırlıyım.', good: 'Teslimat sürenizin uzun olmasına rağmen sabırla bekledim.', why: 'Vor „rağmen“ steht die Nominalisierung mit Genitiv: „sürenizin“ (Genitiv) + „olmasına“ (-mAsInA). „Sabırla bekledim“ sagt, was du getan hast.' },
      { bad: 'Hasarlı geldi için vazo kırık.', good: 'Paket hasarlı geldiği için vazo kırıktı.', why: 'Vor „için“ braucht das Verb -DIğI mit Possessiv: „geldiği için“, nicht „geldi için“.' }
    ],
    e: 'Der Mustertext ist zeitlich geordnet: Bestellung (vor zwei Wochen), Problem (hasarlı), Wunsch (iade, geri ödeme), und er zeigt Geduld („rağmen“) und Erwartung („bu yüzden“).' },
  { id: 'tr-b1-s04', scene: 'ev',
    title: 'Kira sözleşmesi hakkında', sub: 'E-Mail an den Vermieter: Fragen vor der Unterschrift',
    task: 'Du hast eine Wohnung angesehen und willst sie mieten. Schreib dem Vermieter: Sag, dass sie dir gefällt, frag nach der Kaution und bitte um die Reparatur des Wasserhahns. Frag außerdem nach der Kündigungsfrist.',
    points: ['Interesse an der Wohnung', 'Frage zur Kaution und Reparatur', 'Frage zur Kündigung'],
    reg: 'siz',
    words: { min: 50, ziel: 70 },
    chunks: ['Kiralamak istediğim daireyi …', '… imzalamadan önce …', 'Depozito ne kadar …', 'Eğer … yazarsak …', 'Cevabınızı bekliyorum'],
    hint: [['daire', 'beğen'], ['depozito', 'musluk', 'tamir'], ['fesih', 'önceden']],
    model: 'Sayın Ev Sahibi,\nKiralamak istediğim daireyi dün gördüm ve çok beğendim. Sözleşmeyi imzalamadan önce iki şeyi sormak istiyorum. Depozito ne kadar ve ne zaman geri ödenir? Mutfaktaki musluk bozuk olduğu için tamir edilmesini rica ediyorum. Eğer bunu sözleşmeye yazarsak, taşınırken sorun olmaz. Ayrıca sözleşmeyi ne kadar önceden feshedebileceğimi öğrenmek isterim. Cevabınızı bekliyorum.\nSaygılarımla,\nSelin Arslan',
    modeln: 'Sehr geehrter Vermieter,\ndie Wohnung, die ich mieten möchte, habe ich gestern gesehen, und sie gefällt mir sehr. Bevor ich den Vertrag unterschreibe, möchte ich zwei Dinge fragen. Wie hoch ist die Kaution, und wann wird sie zurückgezahlt? Weil der Wasserhahn in der Küche kaputt ist, bitte ich darum, dass er repariert wird. Wenn wir das in den Vertrag schreiben, gibt es beim Auszug kein Problem. Außerdem möchte ich wissen, wie lange vorher ich den Vertrag kündigen kann. Ich freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nSelin Arslan',
    check: [
      { k: 'Fragst du nach Kaution, Reparatur und Kündigungsfrist?', e: 'Das sind die drei Punkte, die im Mietalltag am meisten Ärger machen. Wer sie vor der Unterschrift klärt, spart sich später Streit.' },
      { k: 'Hast du „-mAdAn önce“ für „bevor“ benutzt?', e: '„İmzalamadan önce“ heißt „bevor ich unterschreibe“. Die Endung -mAdAn hat keine Person; sie folgt nur der kleinen Vokalharmonie (-madan / -meden).' },
      { k: 'Steht ein „Eğer … -sA“-Satz im Text?', e: 'Mit „eğer … yazarsak“ baust du eine echte Bedingung: Aorist + -sA + Person. „Eğer“ ist optional, macht den Satz aber klarer.' },
      { k: 'Bleibt der Ton höflich („rica ediyorum“, „isterim“)?', e: '„Rica etmek“ (bitten) und „-mAk isterim“ sind höflicher als „istiyorum“. Beim Vermieter lohnt sich ein freundlicher Ton.' }
    ],
    mistakes: [
      { bad: 'İmzalamak önce depozito söyle.', good: 'İmzalamadan önce depozito hakkında sormak istiyorum.', why: '„Bevor“ heißt „-mAdAn önce“, nicht „-mAk önce“. Außerdem braucht die Frage ein höfliches Verb („sormak istiyorum“) statt eines Imperativs.' },
      { bad: 'Eğer sözleşmeye yazarız, sorun olmaz.', good: 'Eğer sözleşmeye yazarsak, sorun olmaz.', why: 'Für „wenn“ braucht das Verb -sA: yaz-ar-sak. „Yazarız“ ist nur „wir schreiben“ und enthält keine Bedingung.' },
      { bad: 'Musluk bozuk için tamir edin.', good: 'Musluk bozuk olduğu için tamir edilmesini rica ediyorum.', why: 'Vor „için“ braucht man bei Adjektiven „olduğu“: „bozuk olduğu için“. Und „edin“ (Befehl) ist unhöflich; besser „rica ediyorum“.' }
    ],
    e: 'Der Mustertext beginnt mit dem Positiven (gefällt mir), stellt dann die Fragen („Sözleşmeyi imzalamadan önce …“) und nutzt einen Bedingungssatz, um die Reparatur festzuhalten.' },
  { id: 'tr-b1-s05', scene: 'ev',
    title: 'Komşuya not', sub: 'Freundliche Nachricht an den Nachbarn wegen nächtlicher Musik',
    task: 'Dein Nachbar hört abends oft laut Musik, und du schläfst schlecht. Schreib ihm einen kurzen, freundlichen Zettel (ihr duzt euch): Sag, wer du bist, schildere das Problem, nenne den Grund und mach einen Vorschlag.',
    points: ['Wer du bist, Problem nennen', 'Grund erklären', 'Vorschlag und Dank'],
    reg: 'sen',
    words: { min: 30, ziel: 50 },
    chunks: ['… duyduğum için …', 'çünkü …', '… kısarsan çok sevinirim', 'Bir sorun olursa …', 'Teşekkürler'],
    hint: [['komşu', 'müzik'], ['çünkü', 'uyu'], ['kıs', 'teşekkür']],
    model: 'Merhaba komşum,\nBen alt kattaki komşunum. Geceleri müzik sesini duyduğum için biraz zor uyuyorum. Bunu bilmeni isterim, çünkü sabah erken kalkıyorum. Saat on birden sonra sesi biraz kısarsan çok sevinirim. Bir sorun olursa benimle konuşabilirsin. Teşekkürler!\nSelam,\nAylin',
    modeln: 'Hallo Nachbar,\nich bin deine Nachbarin aus der Etage darunter. Weil ich nachts die Musik höre, kann ich nur schwer schlafen. Ich möchte, dass du das weißt, denn ich stehe morgens früh auf. Ich würde mich freuen, wenn du die Lautstärke nach elf Uhr etwas senken würdest. Wenn es ein Problem gibt, kannst du mit mir sprechen. Danke!\nLiebe Grüße\nAylin',
    check: [
      { k: 'Klingt der Zettel freundlich, nicht fordernd?', e: 'Eine freundliche Bitte öffnet Türen: „kısarsan çok sevinirim“ (ich würde mich freuen, wenn du …) ist besser als „Kıs sesi!“, weil niemand sich angegriffen fühlt.' },
      { k: 'Hast du „sen“ durchgehend benutzt (bilmeni, konuşabilirsin)?', e: 'Unter Nachbarn mit „Du“ bleibt die Form „sen“. Ein Wechsel zu „siz“ würde Distanz schaffen und den freundlichen Ton zerstören.' },
      { k: 'Steht „-DIğI için“ oder „çünkü“ für den Grund?', e: '„Çünkü“ leitet einen eigenen Satz ein; „-DIğI için“ baut den Grund in denselben Satz. Beides ist richtig; wichtig ist, dass der Grund erkennbar ist.' },
      { k: 'Gibt es einen konkreten Vorschlag (Zeitpunkt, Lautstärke)?', e: 'Ein konkreter Vorschlag („Saat on birden sonra“) lässt sich leichter umsetzen als ein vages „Sei leiser“.' }
    ],
    mistakes: [
      { bad: 'Çok gürültü yapıyorsun, dur!', good: 'Sesi biraz kısarsan çok sevinirim.', why: 'Der erste Satz ist ein Befehl und wirkt aggressiv. „-sA çok sevinirim“ ist die freundliche Bitte „ich würde mich freuen, wenn …“.' },
      { bad: 'Müziği duyduğum için uyumuyorum.', good: 'Müziği duyduğum için zor uyuyorum.', why: '„uyumuyorum“ heißt „ich schlafe gar nicht“ und ist übertrieben. „Zor uyuyorum“ = ich schlafe schwer und ist ehrlicher.' },
      { bad: 'Saat on birden sonra sesi kıs, çünkü yatıyorum.', good: 'Saat on birden sonra sesi kısarsan çok sevinirim; çünkü sabah erken kalkıyorum.', why: '„Çünkü yatıyorum“ klingt vorwurfsvoll. Als Grund wirkt „sabah erken kalkıyorum“ (ich stehe früh auf) sachlicher.' }
    ],
    e: 'Der Zettel ist kurz und warm: Vorstellung, Problem, Grund, Vorschlag, Dank. Mit „sen“ und „-sA … sevinirim“ klingt er freundlich statt fordernd.' },
  { id: 'tr-b1-s06', scene: 'sokak',
    title: 'Mülakat sonrası', sub: 'Nachricht an eine Freundin nach dem Vorstellungsgespräch',
    task: 'Du hattest gestern ein Vorstellungsgespräch. Schreib einer Freundin eine lockere Nachricht (ihr duzt euch): Wie lief es? Was bedauerst du? Was vermutest du, und wann erwartest du Antwort?',
    points: ['Wie das Gespräch lief', 'Bedauern und Vermutung', 'Warten und Treffen vorschlagen'],
    reg: 'sen',
    words: { min: 30, ziel: 50 },
    chunks: ['Galiba …', 'Keşke … hazırlansaydım', 'Herhalde …', '… gelene kadar …', 'Hafta sonu görüşelim mi?'],
    hint: [['mülakat', 'iyi'], ['keşke', 'herhalde'], ['bekle', 'görüş']],
    model: 'Selam Tolga,\nDün mülakatım vardı. Galiba iyi geçti, ama biraz heyecanlandım. Keşke daha çok hazırlansaydım! Herhalde bir hafta içinde haber verirler. Haber gelene kadar sabırla bekleyeceğim. Sen ne yapıyorsun? Hafta sonu görüşelim mi?\nKendine iyi bak!\nNur',
    modeln: 'Hallo Tolga,\ngestern hatte ich mein Vorstellungsgespräch. Ich glaube, es lief gut, aber ich war etwas aufgeregt. Hätte ich mich doch mehr vorbereitet! Wahrscheinlich geben sie innerhalb einer Woche Bescheid. Bis ich Bescheid bekomme, werde ich geduldig warten. Was machst du so? Sollen wir uns am Wochenende treffen?\nPass auf dich auf!\nNur',
    check: [
      { k: 'Hast du einen Wunsch oder ein Bedauern mit „keşke“ ausgedrückt?', e: 'Mit „keşke + -sAydI“ sagst du, was in der Vergangenheit anders hätte sein sollen: „hazırlansaydım“. Für Gegenwart und Zukunft genügt „keşke + -sA“.' },
      { k: 'Hast du etwas vermutet („galiba“, „herhalde“, „-DIr“)?', e: '„Galiba“ und „herhalde“ stehen meist vorn, sind aber beweglich, und zeigen: „Ich bin nicht sicher, aber ich denke so.“' },
      { k: 'Bleibt der Ton locker („sen“, „Selam“, „Kendine iyi bak“)?', e: 'Unter Freunden schreibt man „selam“ und „kendine iyi bak“. Formelle Wörter wie „Saygılarımla“ wären hier unpassend.' },
      { k: 'Hast du eine Zeitangabe mit „-(y)AnA kadar“ benutzt?', e: '„Haber gelene kadar“ heißt „bis die Nachricht kommt“. Vor „kadar“ steht der Dativ: gelen-e.' }
    ],
    mistakes: [
      { bad: 'Keşke daha çok hazırlanırsam.', good: 'Keşke daha çok hazırlansaydım!', why: 'Der Aorist mit -sA (hazırlanırsam) ist eine Bedingung („wenn ich mich vorbereite“), kein Bedauern. Für Vergangenes braucht man -sAydIm.' },
      { bad: 'Galiba iyi geçti ama.', good: 'Galiba iyi geçti, ama biraz heyecanlandım.', why: '„Ama“ verbindet zwei Aussagen und steht zwischen ihnen; am Ende allein hängt es in der Luft.' },
      { bad: 'Haber gelen kadar bekleyeceğim.', good: 'Haber gelene kadar bekleyeceğim.', why: '„kadar“ verlangt den Dativ: gele**n** + **e** = gelene. Ohne -e fehlt der Fall.' }
    ],
    e: 'Der Mustertext verbindet die drei B1-Bausteine Vermutung („galiba“, „herhalde“), Bedauern („keşke“) und Zeit („gelene kadar“) in einer lockeren Nachricht unter Freunden.' },
  { id: 'tr-b1-s07', scene: 'doktor',
    title: 'Sigortaya e-posta', sub: 'E-Mail an die Versicherung: Krankschreibung und Kostenübernahme',
    task: 'Du warst in einer privaten Klinik und hast eine Krankschreibung bekommen. Schreib der Versicherung eine höfliche E-Mail (Sie-Form): Was ist passiert? Frag nach der Kostenübernahme und der Zuzahlung. Bitte um eine Antwort.',
    points: ['Was in der Klinik passiert ist', 'Frage zu Kosten und Zuzahlung', 'Bitte um Antwort und Gruß'],
    reg: 'siz',
    words: { min: 40, ziel: 65 },
    chunks: ['Ancak …', '… karşılayıp karşılamadığını …', 'Ayrıca …', 'Saygılarımla'],
    hint: [['muayene', 'rapor'], ['karşıla', 'katılım payı'], ['belge', 'cevap']],
    model: 'Sayın Yetkili,\nGeçen hafta özel bir hastanede muayene oldum. Boğazımda enfeksiyon çıktı ve üç gün istirahat raporu aldım. Rapor işyerime gönderildi. Tedavi masraflarının sigorta kapsamında olduğunu düşünüyorum. Ancak masraflar hakkında henüz bilgi alamadım. Poliçemin tedaviyi karşılayıp karşılamadığını öğrenmek istiyorum. Ayrıca ödediğim katılım payının geri ödenip ödenmeyeceğini de sormak isterim. Belgelerimi ekte gönderiyorum. En kısa zamanda cevap verirseniz çok sevinirim.\nSaygılarımla,\nSelim Kaya',
    modeln: 'Sehr geehrte Damen und Herren,\nletzte Woche wurde ich in einer privaten Klinik untersucht. Man stellte bei mir eine Infektion im Hals fest, und ich bekam eine dreitägige Krankschreibung. Sie wurde an meinen Arbeitgeber gesendet. Ich gehe davon aus, dass die Behandlungskosten von der Versicherung gedeckt sind. Allerdings habe ich zu den Kosten noch keine Auskunft bekommen. Ich möchte wissen, ob meine Police die Behandlung übernimmt. Außerdem möchte ich fragen, ob die gezahlte Zuzahlung zurückerstattet wird. Meine Unterlagen sende ich im Anhang. Ich würde mich freuen, wenn Sie mir so bald wie möglich antworten.\nMit freundlichen Grüßen\nSelim Kaya',
    check: [
      { k: 'Hast du das Passiv richtig gebildet („gönderildi“, „ödenip ödenmeyeceğini“)?', e: 'Nach Konsonant im Stamm steht -Il (gönder-il-di), nach Vokal -n (öde-n-mek). Der Handelnde fehlt oft, weil er unwichtig ist.' },
      { k: 'Hast du die Frage als Nebensatz mit -DIK/-AcAK eingebaut?', e: '„Poliçemin … karşılayıp karşılamadığını öğrenmek istiyorum“ = „ob meine Police übernimmt“. Die Verbform wird mit -DIK + Akkusativ zum Objekt des Verbs.' },
      { k: 'Passt der Ton („Sayın“, „sormak isterim“, „Saygılarımla“)?', e: 'In einer Mail an eine Versicherung schreibst du in Sie-Form und beginnst mit „Sayın …“. „Sormak isterim“ ist höflicher als „soruyorum“.' },
      { k: 'Hast du mit „ancak“ einen echten Gegensatz und mit „ayrıca“ einen weiteren Punkt angeschlossen?', e: '„Ancak“ leitet einen Gegensatz ein („jedoch“: erwartet wird die Kostenübernahme, aber es fehlt die Auskunft), „ayrıca“ fügt etwas hinzu („außerdem“).' }
    ],
    mistakes: [
      { bad: 'Rapor işyerime gönderilti.', good: 'Rapor işyerime gönderildi.', why: 'Nach dem Passiv-Suffix -Il steht das stimmhafte -DI: gönder-il-**di**. „-ti“ steht nur nach stimmlosen Konsonanten.' },
      { bad: 'Poliçem tedaviyi karşılıyor mu öğrenmek istiyorum.', good: 'Poliçemin tedaviyi karşılayıp karşılamadığını öğrenmek istiyorum.', why: 'Als Nebensatz braucht man -DIK, das Subjekt steht im Genitiv: poliçe**min** … karşıla-dığ-ını. So bleibt der Satz höflich und eindeutig.' },
      { bad: 'Katılım payı geri ödenmesini sormak isterim.', good: 'Katılım payının geri ödenip ödenmeyeceğini sormak isterim.', why: 'Das Subjekt der Nominalisierung steht im Genitiv (katılım payı**nın**), und die Frage „ob“ wird mit „… ödenip ödenmeyeceğini“ ausgedrückt.' }
    ],
    e: 'Der Mustertext verbindet Passiv („gönderildi“, „ödenip ödenmeyeceğini“), eine Nebensatzfrage („karşılayıp karşılamadığını“) und die Konnektoren „ancak“ und „ayrıca“ in einer höflichen Mail.' },
  { id: 'tr-b1-s08', scene: 'ev',
    title: 'Veli toplantısından sonra', sub: 'Nachricht an eine befreundete Mutter nach dem Elternabend',
    task: 'Du warst beim Elternabend. Schreib einer befreundeten Mutter (ihr duzt euch): Was hat die Lehrerin gesagt? Was wirst du tun? Schlag vor, die Anmeldung der kleinen Schwester gemeinsam zu machen.',
    points: ['Was die Lehrerin gesagt hat', 'Was du tun wirst und warum', 'Vorschlag zur Anmeldung'],
    reg: 'sen',
    words: { min: 35, ziel: 60 },
    chunks: ['Ancak …', 'Dolayısıyla …', '… yaptıracağım', 'İstersen …'],
    hint: [['öğretmen', 'dikkat'], ['ödev', 'kontrol'], ['kayıt', 'cumartesi']],
    model: 'Selam Merve,\nBugün veli toplantısına gittim. Öğretmen oğlumun matematikte çok geliştiğini söyledi. Ancak son zamanlarda derste dikkati dağılıyormuş. Dolayısıyla ödevlerini her akşam birlikte kontrol edeceğim. Küçük kızım için de okul kaydı yaptıracağım. Evrakları bu hafta okula vermem gerekiyor. Sen de kızının kaydını yaptırdın mı? İstersen cumartesi birlikte gidelim.\nGörüşürüz!\nAyşe',
    modeln: 'Hallo Merve,\nheute war ich beim Elternabend. Die Lehrerin sagte, mein Sohn habe sich in Mathe sehr entwickelt. Allerdings sei er in letzter Zeit im Unterricht unaufmerksam. Deshalb werde ich jeden Abend gemeinsam mit ihm seine Hausaufgaben kontrollieren. Für meine kleine Tochter werde ich auch die Schulanmeldung machen lassen. Die Unterlagen muss ich diese Woche in der Schule abgeben. Hast du die Anmeldung deiner Tochter schon gemacht? Wenn du magst, gehen wir am Samstag zusammen hin.\nBis bald!\nAyşe',
    check: [
      { k: 'Hast du das Kausativ „yaptırmak“ benutzt, wenn jemand etwas für dich erledigt?', e: '„Kayıt yaptırmak“ heißt „anmelden lassen“. Ohne -DIr („kayıt yapmak“) würde es heißen, dass du selbst die Anmeldung ausführst.' },
      { k: 'Hast du „ancak“ und „dolayısıyla“ an der Satzspitze verwendet?', e: '„Ancak“ stellt einen Gegensatz her, „dolayısıyla“ nennt die Folge. Beide stehen meist am Anfang des Satzes.' },
      { k: 'Passen Akkusativ und Possessiv („kızının kaydını“)?', e: 'Das Besitzverhältnis (kızının kaydı) bekommt als bestimmtes Objekt zusätzlich den Akkusativ: kızının kaydı**nı**.' },
      { k: 'Bleibt der Ton locker („Selam“, „Görüşürüz“, „sen“)?', e: 'Unter Freunden duzt man sich, grüßt mit „Selam“ und verabschiedet sich mit „Görüşürüz“. Formelle Schlussformeln passen nicht.' }
    ],
    mistakes: [
      { bad: 'Küçük kızım için okula kayıt yaptım.', good: 'Küçük kızım için okul kaydı yaptıracağım.', why: '„Yaptım“ heißt „ich habe es gemacht“ (vorbei). Für „ich werde anmelden lassen“ braucht man Kausativ und Futur: yap-tır-acağım.' },
      { bad: 'Sen de kızın kaydını yaptırdın mı?', good: 'Sen de kızının kaydını yaptırdın mı?', why: 'kızının = kız + ın (dein) + ın (Genitiv); kızın allein ist „deine Tochter“ oder „des Mädchens“. Hier brauchst du den Genitiv des Mädchens: kızı**nın** kaydı.' },
      { bad: 'Ödevlerini her akşam birlikte kontrol edecek.', good: 'Ödevlerini her akşam birlikte kontrol edeceğim.', why: '„Edecek“ ist die 3. Person; du sprichst von dir selbst, also -im: edece**ğ**im (k wird zu ğ).' }
    ],
    e: 'Der Mustertext zeigt das Kausativ („yaptıracağım“), die Konnektoren „ancak“ und „dolayısıyla“ und lockeren Ton unter Freundinnen.' },
  { id: 'tr-b1-s09', scene: 'ev',
    title: 'Apartman ilanı', sub: 'Aushang im Haus: Wasser sparen und Erdbebenvorsorge',
    task: 'Du bist in der Hausverwaltung und schreibst einen Aushang für alle Bewohner (Sie-Form): Warum sollte man Wasser sparen? Was sollen alle tun? Lade zum Treffen am Samstag ein.',
    points: ['Problem und Folge', 'Was jeder tun soll (Passiv)', 'Fazit und Einladung'],
    reg: 'siz',
    words: { min: 40, ziel: 70 },
    chunks: ['Dolayısıyla …', '… kapatılmalı', 'Ayrıca …', 'Kısacası …', 'Saygılarımızla'],
    hint: [['kuraklık', 'tasarruf'], ['deprem çantası', 'toplanma'], ['cumartesi', 'katıl']],
    model: 'Sayın Komşularımız,\nBu yıl kuraklık çok ciddi. Barajlarda su seviyesi düştü, dolayısıyla hepimiz su tasarrufu yapmalıyız. Musluklar iyice kapatılmalı ve damlayan musluklar onartılmalı. Ayrıca her evde bir deprem çantası hazırlanması gerekiyor; çantada su, fener ve ilaç olmalı. Toplanma alanımız mahalle parkıdır. Kısacası biraz dikkatle büyük sorunlar önlenebilir. Cumartesi öğleden sonra saat üçte apartman girişinde toplanıyoruz. Katılırsanız çok seviniriz.\nSaygılarımızla,\nApartman Yönetimi',
    modeln: 'Liebe Nachbarinnen und Nachbarn,\ndieses Jahr ist die Dürre sehr ernst. Der Wasserstand in den Stauseen ist gesunken, daher müssen wir alle Wasser sparen. Wasserhähne sollten richtig zugedreht und tropfende Wasserhähne repariert werden. Außerdem sollte in jedem Haushalt ein Notfallrucksack vorbereitet werden; darin sollten Wasser, Taschenlampe und Medikamente sein. Unser Sammelplatz ist der Park des Viertels. Kurz gesagt: Mit etwas Aufmerksamkeit lassen sich große Probleme vermeiden. Am Samstagnachmittag um drei Uhr treffen wir uns am Hauseingang. Wir würden uns freuen, wenn Sie kommen.\nMit freundlichen Grüßen\nIhre Hausverwaltung',
    check: [
      { k: 'Hast du das Passiv für allgemeine Aufforderungen benutzt („kapatılmalı“, „hazırlanması gerekiyor“)?', e: 'Mit -Il/-In + -mAlI sagst du „es soll … werden“, ohne eine Person zu nennen. Das klingt in Aushängen offiziell und neutral.' },
      { k: 'Hast du Folge („dolayısıyla“), Zusatz („ayrıca“) und Fazit („kısacası“) eingebaut?', e: 'Die drei Konnektoren strukturieren den Text: Folge → Ergänzung → Zusammenfassung.' },
      { k: 'Passt die Anrede („Sayın“, „Saygılarımızla“)?', e: 'Bei einem Aushang im Namen der Verwaltung schreibt man im Plural: „Saygılarımızla“ (nicht „Saygılarımla“).' },
      { k: 'Hast du die Einladung höflich formuliert („Katılırsanız çok seviniriz“)?', e: '„-sAnIz çok seviniriz“ ist eine höfliche Einladung. „Gelin!“ wäre ein Befehl.' }
    ],
    mistakes: [
      { bad: 'Musluklar iyice kapatılır olmalı.', good: 'Musluklar iyice kapatılmalı.', why: 'Das Passiv und -mAlI verbindet man direkt: kapat-ıl-malı. „-ır olmalı“ ist keine übliche Form.' },
      { bad: 'Deprem çantası hazırlıyor gerekiyor.', good: 'Deprem çantasının hazırlanması gerekiyor.', why: '„Gerekmek“ verlangt ein Nomen mit -mA: hazırlan**ması**. Bei bestimmtem Subjekt steht es im Genitiv: çantası**nın**.' },
      { bad: 'Dolayısıyla ama su az.', good: 'Dolayısıyla hepimiz su tasarrufu yapmalıyız.', why: '„Dolayısıyla“ nennt die Folge und steht nicht zusammen mit „ama“. Nach „dolayısıyla“ folgt die Konsequenz.' }
    ],
    e: 'Der Mustertext verbindet das Passiv („kapatılmalı“, „onartılmalı“), die Konnektoren „dolayısıyla“, „ayrıca“, „kısacası“ und eine höfliche Einladung in einem Aushang.' },
  { id: 'tr-b1-s10', scene: 'aile',
    title: 'Bayram mesajı', sub: 'Nachricht an eine Freundin: Der Bayram-Besuch bei der älteren Nachbarin',
    task: 'Du hast am Bayram eine ältere Nachbarin (Ayşe Teyze) besucht, die kürzlich ihren Bruder verloren hat. Schreib einer Freundin (ihr duzt euch): Wie war der Besuch? Was hast du dort erlebt (Beileid, Verlobung ihrer Enkelin)? Schlag ein Treffen vor.',
    points: ['Wie der Besuch verlief', 'Beileid und Verlobung in der Familie', 'Treffen vorschlagen'],
    reg: 'sen',
    words: { min: 35, ziel: 65 },
    chunks: ['… bayramlaştık', '… elini öptüm', 'Öte yandan …', 'İstersen …', 'buluşalım mı?'],
    hint: [['bayram', 'teyze'], ['taziye', 'nişan'], ['hafta sonu', 'hediye']],
    model: 'Selam Zeynep,\nBayram nasıl geçti? Biz sabah akrabalarla bayramlaştık, sonra komşumuz Ayşe Teyze\'yi ziyaret ettik. Teyzenin elini öptüm. Kardeşini geçen ay kaybettiği için biraz üzgündü, ben de taziyede bulundum. Öte yandan güzel bir haber de aldık: torunu nişanlandı! Nişan gelecek ay olacak. İstersen birlikte bir hediye alalım. Hafta sonu buluşalım mı?\nSevgiler,\nDilara',
    modeln: 'Hallo Zeynep,\nwie war dein Bayram? Wir haben uns morgens mit den Verwandten zum Fest begrüßt, danach haben wir unsere Nachbarin Ayşe Teyze besucht. Ich habe ihr die Hand geküsst. Weil sie letzten Monat ihren Bruder verloren hat, war sie etwas traurig, und ich habe ihr kondoliert. Andererseits haben wir auch eine schöne Nachricht bekommen: Ihre Enkelin hat sich verlobt! Die Verlobungsfeier ist nächsten Monat. Wenn du magst, lass uns zusammen ein Geschenk kaufen. Sollen wir uns am Wochenende treffen?\nLiebe Grüße\nDilara',
    check: [
      { k: 'Hast du reziproke Verben mit -(I)ş verwendet („bayramlaştık“, „buluşalım“)?', e: 'Das Suffix -(I)ş zeigt „miteinander“: bayram-laş-mak, buluş-mak. Es steht hier nicht für ein Passiv.' },
      { k: 'Hast du „el öpmek“ richtig mit Akkusativ gebildet („elini öptüm“)?', e: '„Teyzenin elini öptüm“: Besitzer im Genitiv (teyzenin), Besitztum mit Possessiv und Akkusativ (eli + ni).' },
      { k: 'Hast du mit „öte yandan“ eine andere, neue Nachricht angeschlossen?', e: '„Öte yandan“ heißt „andererseits“ und leitet etwas Neues ein, hier den Kontrast zwischen Trauer und Freude.' },
      { k: 'Klingt der Ton locker („Selam“, „Sevgiler“, „İstersen“)?', e: 'Unter Freundinnen genügt „İstersen …“ für einen Vorschlag. Formelle Wendungen wie „Rica ederim“ wären hier unpassend.' }
    ],
    mistakes: [
      { bad: 'Teyzenin eli öptüm.', good: 'Teyzenin elini öptüm.', why: 'Das Objekt ist bestimmt (die Hand meiner Tante) und braucht den Akkusativ: eli + **ni**.' },
      { bad: 'Akrabalarla bayramlandık.', good: 'Akrabalarla bayramlaştık.', why: '-(I)n würde „sich selbst“ bedeuten. Für „gegenseitig“ nimmt man -(I)ş: bayramlaş-tık.' },
      { bad: 'Torunu nişanladı.', good: 'Torunu nişanlandı.', why: '„Nişanlanmak“ heißt „sich verloben“ und endet mit -lan. Ohne -n würde „nişanlamak“ „verloben (jemanden)“ bedeuten.' }
    ],
    e: 'Der Mustertext verbindet reziproke Verben („bayramlaştık“, „buluşalım“), „el öpmek“ mit Akkusativ und den Konnektor „öte yandan“ in einer lockeren Nachricht über Bayram, Beileid und Verlobung.' }
]);
