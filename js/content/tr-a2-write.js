/* Türkisch A2 – Schreibwerkstatt (ADR-13). Format: CLAUDE.md bzw. docs/adr-13-schreiben.md.
 * IDs tr-a2-s01 … s10 sind fest (nie ändern, nie neu vergeben). Erklärsprache: Deutsch. */
window.KOPRU.addWrites('tr-a2', [
  { id: 'tr-a2-s01', scene: 'davet',
    title: 'Kına gecesine evet', sub: 'Zusage zum Henna-Abend einer Freundin',
    task: 'Deine Freundin Elif heiratet bald und lädt dich per Nachricht zu ihrem Henna-Abend (kına gecesi) am Freitag ein. Schreib ihr zurück: Bedank dich und gratuliere, sag zu und frag, was du anziehen oder mitbringen sollst.',
    points: ['Dank und Glückwunsch', 'Zusage (wann, mit wem)', 'Frage: Was anziehen oder mitbringen?'],
    reg: 'sen',
    words: { min: 20, ziel: 35 },
    chunks: ['Davetin için çok teşekkür ederim!', 'Çok sevindim, tebrik ederim!', 'Tabii ki … geleceğim.', 'Ne giyeyim?', '… getireyim mi?', 'Görüşmek üzere!'],
    hint: [['teşekkür', 'sağ ol', 'tebrik', 'sevindim'], ['gel'], ['getir', 'giy']],
    model: 'Merhaba Elif,\nDavetin için çok teşekkür ederim! Çok sevindim, tebrik ederim! Tabii ki cuma akşamı geleceğim. Kız kardeşim de benimle gelebilir mi? Bir de şunu sormak istiyorum: Ne giyeyim? Bir şey getireyim mi?\nGörüşmek üzere!\nAnna',
    modeln: 'Hallo Elif,\nvielen Dank für die Einladung! Ich freue mich sehr für dich – herzlichen Glückwunsch! Natürlich komme ich am Freitagabend. Darf meine Schwester auch mitkommen? Und noch eine Frage: Was soll ich anziehen? Soll ich etwas mitbringen?\nBis bald!\nAnna',
    check: [
      { k: 'Sind alle drei Punkte drin (Dank und Glückwunsch, Zusage, Frage)?', e: 'Bei einer Zusage zu Hochzeit oder Henna-Abend gehört im Türkischen fast immer ein Glückwunsch dazu – der Anlass ist ein Grund zur Freude. Ohne deine Frage fehlt dir außerdem eine wichtige Information für den Abend.' },
      { k: 'Steht die Fragepartikel mi/mı/mu/mü getrennt und passt sie zum Vokal davor?', e: 'Die Fragepartikel wird immer getrennt geschrieben, folgt aber der Vokalharmonie des Wortes davor: „getireyim mi?“, „gelebilir mi?“, „var mı?“. Zusammengeschrieben („getireyimmi“) ist falsch.' },
      { k: 'Hast du durchgehend „sen“ benutzt?', e: 'Elif ist deine Freundin, also „sen“: „davetin“ (deine Einladung), nicht „davetiniz“. Ein Wechsel zwischen „sen“ und „siz“ im selben Text wirkt seltsam.' },
      { k: 'Steht die Zusage im Futur („geleceğim“)?', e: 'Für ein festes Versprechen passt das Futur auf -ecek/-acak: „Geleceğim.“ Das Präsens „Geliyorum“ geht auch (wie im Deutschen „Ich komme“), klingt aber spontaner.' }
    ],
    mistakes: [
      { bad: 'Ben geleceğim cuma.', good: 'Cuma geleceğim.', why: 'Im Türkischen steht das Verb am Satzende, die Zeitangabe davor. „Ben“ kann wegfallen, weil die Endung „-im“ die Person schon zeigt.' },
      { bad: 'Ne getireyimmi?', good: 'Ne getireyim?', why: 'Zwei Fehler: „mi“ wird getrennt geschrieben. Und in einer Frage mit „ne“ steht gar kein „mi“ – das Fragewort reicht. Ohne Fragewort: „Bir şey getireyim mi?“' },
      { bad: 'İçin davetin teşekkür ederim.', good: 'Davetin için teşekkür ederim.', why: '„için“ ist eine Postposition: Sie steht hinter dem Wort, auf das sie sich bezieht („davetin için“ = für deine Einladung), anders als das deutsche „für“.' }
    ],
    e: 'Der Mustertext folgt einer typischen Reihenfolge: zuerst Dank und Freude („Çok sevindim, tebrik ederim!“), dann die klare Zusage im Futur und zum Schluss die Fragen. „Görüşmek üzere!“ ist ein freundlicher Abschluss unter Bekannten, etwa wie „Bis bald!“.' },
  { id: 'tr-a2-s02', scene: 'bulusma',
    title: 'Sinema akşamı önerisi', sub: 'Einen Kinoabend mit Uhrzeit und Treffpunkt vorschlagen',
    task: 'Du möchtest am Samstagabend mit deinem Freund Can ins Kino gehen. Schreib ihm eine Nachricht: Mach einen Vorschlag, nenne Uhrzeit und Treffpunkt und bitte ihn um eine Rückmeldung.',
    points: ['Vorschlag: Kino am Samstagabend', 'Uhrzeit und Treffpunkt', 'Bitte um Rückmeldung'],
    reg: 'sen',
    words: { min: 25, ziel: 40 },
    chunks: ['Bu cumartesi akşamı boş musun?', '… gidelim mi?', '… buluşabiliriz', 'Ne dersin?', 'Bana haber verir misin?'],
    hint: [['sinema', 'gidelim'], ['saat', 'buluş'], ['haber', 'dersin']],
    model: 'Selam Can,\nBu cumartesi akşamı boş musun? Yeni bir komedi filmi var, çok iyi yorumlar almış. Birlikte sinemaya gidelim mi? Film saat sekizde başlıyor. Önce saat altıda sinemanın önünde buluşabiliriz, sonra bir şeyler yeriz. Ne dersin? Bana haber verir misin?\nSevgiler,\nLena',
    modeln: 'Hallo Can,\nhast du diesen Samstagabend Zeit? Es läuft ein neuer Comedy-Film, der sehr gute Kritiken bekommen hat. Wollen wir zusammen ins Kino gehen? Der Film beginnt um acht. Wir können uns vorher um sechs vor dem Kino treffen, dann essen wir etwas. Was meinst du? Sagst du mir Bescheid?\nLiebe Grüße,\nLena',
    check: [
      { k: 'Sind alle drei Punkte drin (Vorschlag, Uhrzeit und Treffpunkt, Bitte um Rückmeldung)?', e: 'Ein Vorschlag ohne Zeit und Ort ist für den Freund noch keine Verabredung. Und ohne Bitte um Antwort weiß Can nicht, dass du auf eine Rückmeldung wartest.' },
      { k: 'Verwendest du für „Wollen wir …?“ die Form auf -elim/-alım mit getrenntem mi?', e: 'Vorschläge an eine Gruppe, zu der du selbst gehörst, bildet man mit -(y)elim / -(y)alım: „gidelim mi?“, „yiyelim mi?“. Das mi steht getrennt und richtet sich nach dem letzten Vokal davor (gidelim → mi, alalım → mı).' },
      { k: 'Steht die Uhrzeit mit „saat“ und der Endung -de/-da?', e: 'Uhrzeiten bekommen den Lokativ: „saat sekizde“ (um acht), „saat altıda“ (um sechs). Das Wort „saat“ davor ist üblich und macht klar, dass es um die Uhrzeit geht.' },
      { k: 'Steht das Verb jeweils am Satzende und hast du durchgehend „sen“ benutzt?', e: 'Das Verb kommt im Türkischen ans Ende: „Film saat sekizde başlıyor.“ Unter Freunden gilt „sen“: „boş musun“, „haber verir misin“ – nicht „misiniz“.' }
    ],
    mistakes: [
      { bad: 'Sinemaya gidiyoruz mu?', good: 'Sinemaya gidelim mi?', why: '„gidiyoruz mu?“ fragt nur, ob ihr gerade ins Kino geht. Für den deutschen Vorschlag „Wollen wir ins Kino gehen?“ braucht das Türkische die Wunschform auf -elim. Außerdem steht die Personalendung bei -iyor hinter der Partikel: „gidiyor muyuz?“' },
      { bad: 'Film başlıyor saat sekizde.', good: 'Film saat sekizde başlıyor.', why: 'Das Verb steht am Satzende. Deutschsprechende setzen die Zeitangabe wie im deutschen Hauptsatz hinter das Verb („Der Film beginnt um acht“).' },
      { bad: 'Boşmusun? / gidelim mı?', good: 'Boş musun? / gidelim mi?', why: 'Die Fragepartikel wird getrennt geschrieben. Sie folgt der Vokalharmonie des letzten Wortes: nach „gidelim“ (e/i) steht „mi“, nicht „mı“.' }
    ],
    e: 'Der Mustertext beginnt mit der direkten Frage nach der Zeit, nennt dann den Anlass (Film), macht den Vorschlag mit „gidelim mi?“ und endet mit dem Wunsch nach Antwort. So wirkt die Nachricht locker, aber klar. „Ne dersin?“ ist die übliche Art, den Freund zu fragen, was er davon hält.' },

  { id: 'tr-a2-s03', scene: 'davet',
    title: 'Ev partisi daveti', sub: 'Einladung zur Einweihungsparty mit Anlass, Uhrzeit und Adresse',
    task: 'Du bist umgezogen und gibst am Samstag eine kleine Party. Lade deine Freundin Selin per Nachricht ein: Nenne den Anlass, Uhrzeit und Adresse und frag, ob sie kommen kann und etwas mitbringen möchte.',
    points: ['Anlass und Einladung', 'Uhrzeit und Adresse', 'Frage: Kommst du? Etwas mitbringen?'],
    reg: 'sen',
    words: { min: 25, ziel: 40 },
    chunks: ['… davet etmek istiyorum.', 'Parti saat … başlayacak.', 'Gelebilir misin?', 'İstersen … getirebilirsin.', 'Cevabını bekliyorum!'],
    hint: [['taşın', 'parti', 'davet'], ['saat', 'adres'], ['gelebilir', 'getir']],
    model: "Merhaba Selin,\nYeni eve taşındım, o yüzden cumartesi küçük bir parti veriyorum. Seni de davet etmek istiyorum. Parti saat yedide başlayacak. Adresim: Gül Sokağı 12, üçüncü kat. Gelebilir misin? Yemeği ben yapacağım, istersen tatlı getirebilirsin. Cevabını bekliyorum!\nSevgiler,\nMert",
    modeln: 'Hallo Selin,\nich bin in eine neue Wohnung gezogen und gebe deshalb am Samstag eine kleine Party. Ich möchte dich auch einladen. Die Party beginnt um sieben. Meine Adresse: Gül Sokağı 12, dritter Stock. Kannst du kommen? Das Essen mache ich; wenn du magst, kannst du einen Nachtisch mitbringen. Ich warte auf deine Antwort!\nLiebe Grüße,\nMert',
    check: [
      { k: 'Sind Anlass, Uhrzeit, Adresse und deine Frage enthalten?', e: 'Eine gute Einladung beantwortet vorab alles Wichtige: warum, wann, wo. Die Frage „Gelebilir misin?“ macht daraus eine echte Einladung, auf die man antworten kann.' },
      { k: 'Sind Wochentage kleingeschrieben und ohne Apostroph?', e: 'Nach TDK sind Wochentage keine Eigennamen: „cumartesi“, „pazartesi“. Ein Apostroph kommt nur bei Eigennamen vor, etwa „Selin’i“. Ein „cumartesi’de“ ist daher falsch; man sagt einfach „cumartesi“ oder „cumartesi günü“.' },
      { k: 'Steht „seni“ (Akkusativ) bei „davet etmek“?', e: 'Du lädst eine bestimmte Person ein, also steht das Objekt im Akkusativ: „seni davet ediyorum“. Bei Namen mit Apostroph: „Selin’i davet ediyorum“.' },
      { k: 'Ist die Endung bei „yedide“ und „yapacağım“ nach Vokalharmonie richtig?', e: 'Nach „yedi“ (e/i) steht -de, nach „sekiz“ ebenfalls -de, aber nach „altı“ steht -da: „altıda“. Beim Futur gilt dasselbe: „yapacağım“ (a-Reihe), aber „getireceğim“ (e-Reihe).' }
    ],
    mistakes: [
      { bad: 'Seni davet etmek istiyorum cumartesi günü.', good: 'Cumartesi günü seni partiye davet etmek istiyorum.', why: 'Das Verb (hier „istiyorum“) bleibt am Ende des Satzes. Zeitangaben stehen davor, nicht dahinter.' },
      { bad: "Cumartesi’de parti veriyorum.", good: 'Cumartesi parti veriyorum.', why: 'Tage sind im Türkischen ohne Endung adverbial: „cumartesi“. Außerdem bekommen Wochentage keinen Apostroph, denn sie sind keine Eigennamen.' },
      { bad: 'Selini davet ediyorum.', good: "Selin’i davet ediyorum.", why: 'Eigennamen bekommen vor Kasus- und Possessivendungen (Flexionsendungen) einen Apostroph. Und das Objekt ist bestimmt (eine bestimmte Person), deshalb braucht es den Akkusativ -i.' }
    ],
    e: 'Der Mustertext nennt zuerst den Grund („Yeni eve taşındım“) und lädt dann ein. Danach folgen die praktischen Angaben und am Ende die Frage mit dem Angebot, etwas mitzubringen („istersen …“). „Cevabını bekliyorum!“ ist ein freundlicher Abschluss unter Freunden, vergleichbar mit „Ich warte auf deine Antwort!“.' },

  { id: 'tr-a2-s04', scene: 'davet',
    title: 'Hastalık yüzünden özür', sub: 'Wegen Krankheit absagen und ein Treffen vorschlagen',
    task: 'Deine Freundin Deniz hat heute Geburtstag, aber du hast Fieber und kannst nicht zur Feier kommen. Schreib ihr: Entschuldige dich, nenne den Grund, gratuliere und schlage ein späteres Treffen vor.',
    points: ['Entschuldigung und Absage', 'Grund (krank, Fieber)', 'Glückwunsch und Vorschlag für später'],
    reg: 'sen',
    words: { min: 25, ziel: 40 },
    chunks: ['Çok üzgünüm ama … gelemeyeceğim.', 'Özür dilerim!', 'Doğum günün kutlu olsun!', 'Haftaya … içelim mi?', 'Beni anladığın için teşekkürler.'],
    hint: [['üzgün', 'özür', 'gelemeyeceğim'], ['hasta', 'ateş'], ['kutlu', 'haftaya']],
    model: 'Merhaba Deniz,\nÇok üzgünüm ama bu akşam doğum gününe gelemeyeceğim. Dün geceden beri hastayım, ateşim var ve doktor evde dinlenmemi söyledi. Özür dilerim! Doğum günün kutlu olsun! Haftaya birlikte kahve içelim mi? Beni anladığın için teşekkürler.\nSevgiler,\nAyşe',
    modeln: 'Hallo Deniz,\nes tut mir sehr leid, aber ich kann heute Abend nicht zu deinem Geburtstag kommen. Ich bin seit gestern Nacht krank, habe Fieber, und der Arzt hat gesagt, ich soll zu Hause bleiben und mich ausruhen. Entschuldige bitte! Alles Gute zum Geburtstag! Wollen wir nächste Woche zusammen Kaffee trinken? Danke für dein Verständnis.\nLiebe Grüße,\nAyşe',
    check: [
      { k: 'Sind Entschuldigung, Grund und Glückwunsch samt Vorschlag enthalten?', e: 'Eine Absage wirkt freundlicher, wenn du dich entschuldigst, kurz den Grund nennst und trotzdem Anteil nimmst. Der Glückwunsch und der Vorschlag für später zeigen, dass dir die Freundschaft wichtig ist.' },
      { k: 'Lautet die negative Futurform „gelemeyeceğim“?', e: '„gel-e-me-yeceğim“: Möglichkeit „-e-“ + Verneinung „-me-“ + Futur. Nach „-me“ steht ein y: „gelemeyeceğim“, nicht „gelemiyeceğim“. Das Futur-Suffix bleibt bei e-Vokalen immer -ecek.' },
      { k: 'Sind „doğum günü“ getrennt geschrieben und die Endungen richtig gesetzt?', e: 'Nach TDK schreibt man „doğum günü“ getrennt. Mit Dativ wird daraus „doğum gününe“ (nicht „günüye“), mit deinem Besitzer „doğum günün“ (dein Geburtstag).' },
      { k: 'Hast du für den Grund „…, bu yüzden …“ oder „… olduğum için“ benutzt statt „weil ich bin …“?', e: 'Einen „weil“-Nebensatz mit Verb am Ende gibt es nicht. Du sagst „çünkü“ + Hauptsatz, „…, bu yüzden …“ oder „hasta olduğum için“.' }
    ],
    mistakes: [
      { bad: 'Gelemiyeceğim.', good: 'Gelemeyeceğim.', why: 'Nach der Verneinung -me/-ma steht vor dem Futur-Suffix ein y: „gelemeyeceğim“. Das Verneinungssuffix wird nicht zu „-mi“. Gesprochen klingt es oft wie „gelemiyeceğim“, geschrieben bleibt -me-.' },
      { bad: 'Hastayım için gelemeyeceğim.', good: 'Hasta olduğum için gelemeyeceğim.', why: 'Das Wort „için“ braucht ein Nomen oder eine nominalisierte Verbform (-dığım için). Der deutsche „weil“-Satz lässt sich nicht Wort für Wort übertragen. Alternativ: „Hastayım, bu yüzden gelemeyeceğim.“' },
      { bad: 'Doğumgünün kutlu olsun!', good: 'Doğum günün kutlu olsun!', why: 'Im Türkischen heißt es getrennt „doğum günü“. Deutschsprechende neigen wegen des Kompositums „Geburtstag“ zur Zusammenschreibung.' }
    ],
    e: 'Der Mustertext hält die Reihenfolge ein: erst die Entschuldigung samt Absage, dann der Grund, dann Glückwunsch und Vorschlag. Der Satz „Beni anladığın için teşekkürler“ klingt unter Freunden natürlich und beendet die Nachricht warm. Wichtig ist die richtige Verneinung im Futur: „gelemeyeceğim“.' },

  { id: 'tr-a2-s05', scene: 'ev',
    title: 'Yönetime arıza bildirimi', sub: 'E-Mail an die Hausverwaltung: Heizung defekt',
    task: 'In deiner Wohnung funktioniert seit zwei Tagen die Heizung im Wohnzimmer nicht. Schreib eine höfliche E-Mail an die Hausverwaltung: Sag, wer du bist und wo du wohnst, beschreibe das Problem und bitte um einen Handwerker.',
    points: ['Wer bin ich, wo wohne ich?', 'Problem und seit wann', 'Bitte um Reparatur und Erreichbarkeit'],
    reg: 'siz',
    words: { min: 30, ziel: 45 },
    chunks: ['Sayın Yetkili,', '… iki gündür çalışmıyor', 'Lütfen … gönderir misiniz?', 'Yardımınız için şimdiden teşekkür ederim', 'Saygılarımla,'],
    hint: [['oturuyorum', 'sokağı'], ['kalorifer', 'çalışmıyor', 'gündür'], ['usta', 'lütfen', 'evdeyim']],
    model: "Sayın Yetkili,\nBen Tom Weber, Gül Sokağı 12’de üçüncü katta oturuyorum. Salondaki kalorifer iki gündür çalışmıyor ve evim çok soğuk. Lütfen en kısa zamanda bir usta gönderir misiniz? Hafta içi saat altıdan sonra evdeyim. Yardımınız için şimdiden teşekkür ederim.\nSaygılarımla,\nTom Weber",
    modeln: 'Sehr geehrte Damen und Herren,\nich bin Tom Weber und wohne in der Gül Sokağı 12, im dritten Stock. Die Heizung im Wohnzimmer funktioniert seit zwei Tagen nicht, und meine Wohnung ist sehr kalt. Könnten Sie bitte so schnell wie möglich einen Handwerker schicken? Unter der Woche bin ich ab sechs Uhr zu Hause. Vielen Dank im Voraus.\nMit freundlichen Grüßen\nTom Weber',
    check: [
      { k: 'Hast du durchgehend „siz“ benutzt (-iniz, misiniz)?', e: 'Bei Behörden, Verwaltungen und Fremden gilt die höfliche Form: „gönderir misiniz“, „anlayışınız“. Ein „gönderir misin“ wäre zu vertraulich und wirkt unhöflich.' },
      { k: 'Beginnt die Mail mit „Sayın …“ und endet mit „Saygılarımla“?', e: '„Sayın“ ist die formelle Anrede (etwa „Sehr geehrte/r“). Der Schluss „Saygılarımla“ entspricht „Mit freundlichen Grüßen“ und passt zu jeder formellen Mail.' },
      { k: 'Steht die Hausnummer mit Apostroph vor der Endung (12’de)?', e: 'Nach Zahlen, die als Ziffern geschrieben sind, steht vor der Endung ein Apostroph: „12’de“, „3’üncü“. Bei ausgeschriebenen Zahlen („on ikide“) entfällt er.' },
      { k: 'Steht die Zeitangabe „iki gündür“ vor dem Verb?', e: 'Das Verb bleibt am Ende: „Kalorifer iki gündür çalışmıyor.“ Die Dauer „seit zwei Tagen“ wird mit -dir/-dır/-dür/-dur ausgedrückt: gün → gündür.' }
    ],
    mistakes: [
      { bad: 'Kalorifer çalışmıyor iki gündür.', good: 'Kalorifer iki gündür çalışmıyor.', why: 'Das Verb steht am Satzende, die Zeitangabe davor. Im Deutschen steht „seit zwei Tagen“ hinter dem Verb („funktioniert seit zwei Tagen nicht“), im Türkischen davor.' },
      { bad: 'Lütfen bir usta gönderir misin?', good: 'Lütfen bir usta gönderir misiniz?', why: 'Die Hausverwaltung ist eine offizielle Stelle. Deshalb braucht das Verb die Endung der Höflichkeitsform „siz“: „misiniz“.' },
      { bad: 'Gül Sokağı 12de oturuyorum.', good: "Gül Sokağı 12’de oturuyorum.", why: 'Zwischen Ziffern und Endung steht ein Apostroph. Zusätzlich folgt die Endung dem Klang der Zahl: „on iki“ endet auf i, daher -de.' }
    ],
    e: 'Der Mustertext ist kurz und höflich: zuerst die Angabe, wer schreibt, dann das Problem mit Dauer, dann die konkrete Bitte und die Erreichbarkeit. „Lütfen … gönderir misiniz?“ ist die höfliche Standardbitte. Der Dank im Voraus und „Saygılarımla“ schließen die Mail ab.' },

  { id: 'tr-a2-s06', scene: 'alisveris',
    title: 'Yanlış ürün şikâyeti', sub: 'Höfliche Beschwerde über eine falsch gelieferte Bestellung',
    task: 'Du hast online einen schwarzen Pullover bestellt, aber ein blauer ist angekommen. Schreib eine höfliche Beschwerde an den Kundenservice: Nenne die Bestellung, beschreibe den Fehler und bitte um das richtige Produkt oder dein Geld zurück.',
    points: ['Was habe ich bestellt?', 'Was ist angekommen (Fehler)?', 'Bitte um richtigen Pullover oder Geld zurück'],
    reg: 'siz',
    words: { min: 30, ziel: 45 },
    chunks: ['Geçen hafta … sipariş ettim.', '… ama içinden … çıktı.', 'Lütfen … gönderir misiniz?', 'Sipariş numaram …', 'Cevap verirseniz çok sevinirim.'],
    hint: [['sipariş', 'siyah'], ['mavi', 'çıktı', 'geldi'], ['gönder', 'geri', 'iade']],
    model: 'Sayın Müşteri Hizmetleri,\nGeçen hafta internetten siyah bir kazak sipariş ettim. Paket dün geldi ama içinden mavi bir kazak çıktı. Ben mavi kazak istemedim. Lütfen bana doğru kazağı gönderir misiniz? Siyah kazak stokta yoksa lütfen paramı iade edin. Sipariş numaram 4711. En kısa zamanda cevap verirseniz çok sevinirim.\nSaygılarımla,\nAnna Keller',
    modeln: 'Sehr geehrtes Kundenservice-Team,\nich habe letzte Woche im Internet einen schwarzen Pullover bestellt. Das Paket ist gestern angekommen, aber es war ein blauer Pullover darin. Einen blauen Pullover habe ich nicht bestellt. Könnten Sie mir bitte den richtigen Pullover schicken? Wenn der schwarze Pullover nicht auf Lager ist, erstatten Sie mir bitte mein Geld. Meine Bestellnummer ist 4711. Ich würde mich freuen, wenn Sie mir bald antworten.\nMit freundlichen Grüßen\nAnna Keller',
    check: [
      { k: 'Stehen Adjektiv und „bir“ in der richtigen Reihenfolge („siyah bir kazak“)?', e: '„Siyah bir kazak“ ist die neutrale, natürliche Form (Adjektiv vor „bir“). „Bir siyah kazak“ betont die Anzahl („ein einziger schwarzer Pullover“) und passt hier nicht.' },
      { k: 'Bleibst du bei „siz“ und höflichen Bitten („gönderir misiniz“, „iade edin lütfen“)?', e: 'Die Beschwerde soll deutlich, aber höflich sein. Mit der Höflichkeitsform und „lütfen“ erreichst du eher, dass man dir hilft.' },
      { k: 'Ist „Sipariş numaram“ richtig gebildet (ohne doppelte Possessivendung)?', e: '„Sipariş numarası“ heißt „die Bestellnummer“. Für „meine Bestellnummer“ ersetzt -m das -sı: „sipariş numaram“. Zwei Possessivendungen gleichzeitig gibt es nicht.' },
      { k: 'Steht ein klarer Wunsch am Ende (richtiges Produkt oder Erstattung)?', e: 'Eine Beschwerde ohne konkreten Wunsch bleibt folgenlos. Der Kundenservice kann nur handeln, wenn er weiß, ob du Ersatz oder dein Geld zurück möchtest.' }
    ],
    mistakes: [
      { bad: 'Bir siyah kazak sipariş ettim.', good: 'Siyah bir kazak sipariş ettim.', why: '„Siyah bir kazak“ ist die neutrale, natürliche Form; „bir siyah kazak“ betont die Anzahl. Deutschsprechende übertragen „ein schwarzer Pullover“ gern Wort für Wort und setzen „bir“ nach vorn.' },
      { bad: 'Lütfen bana doğru kazağı gönderir misin?', good: 'Lütfen bana doğru kazağı gönderir misiniz?', why: 'Gegenüber dem Kundenservice braucht es die Höflichkeitsform „siz“. „misin“ ist die vertraute Form für Freunde.' },
      { bad: 'Sipariş numarasım 4711.', good: 'Sipariş numaram 4711.', why: 'Ein Nomen-Nomen-Kompositum hat die Endung -sı/-si. Beim Besitzer „ich“ fällt sie weg: „numaram“. Zwei Endungen übereinander (-sı-m) sind nicht möglich.' }
    ],
    e: 'Der Mustertext erklärt erst, was bestellt wurde, schildert dann den Fehler („ama içinden … çıktı“) und stellt zum Schluss zwei höfliche Optionen: richtiges Produkt oder Geld zurück. Die Beschwerde bleibt sachlich und freundlich, das ist im Türkischen wichtig. „Cevap verirseniz çok sevinirim“ ist eine höfliche Schlussformel.' },

  { id: 'tr-a2-s07', scene: 'doktor',
    title: 'Randevuyu erteleme', sub: 'Zahnarzttermin freundlich verschieben',
    task: 'Du hast am Donnerstag einen Zahnarzttermin, aber an diesem Tag musst du arbeiten. Schreib eine kurze, höfliche Nachricht an die Praxis: Nenne deinen Namen und den Termin, bitte um einen neuen Termin (nächste Woche) und bitte um Rückmeldung.',
    points: ['Name und bestehender Termin', 'Wunsch nach Verschiebung und Grund', 'Neue Zeiten und Bitte um Rückmeldung'],
    reg: 'siz',
    words: { min: 30, ziel: 45 },
    chunks: ['… randevum var', 'Randevumu … alabilir miyiz?', '… uygun olur.', 'Bana … haber verir misiniz?', 'Teşekkür ederim, iyi çalışmalar dilerim.'],
    hint: [['randevum', 'perşembe'], ['alabilir', 'işim'], ['uygun', 'haber']],
    model: 'İyi günler,\nBen Ali Demir. Perşembe günü saat üçte diş hekimi randevum var, ama maalesef gelemeyeceğim, çünkü o gün işim var. Randevumu başka bir güne alabilir miyiz? Gelecek hafta salı veya çarşamba sabahı uygun olur. Bana telefonla haber verir misiniz?\nTeşekkür ederim, iyi çalışmalar dilerim.\nAli Demir',
    modeln: 'Guten Tag,\nich bin Ali Demir. Ich habe am Donnerstag um drei Uhr einen Zahnarzttermin, kann aber leider nicht kommen, weil ich an dem Tag arbeiten muss. Können wir meinen Termin auf einen anderen Tag verlegen? Nächste Woche würde mir Dienstag oder Mittwoch am Vormittag passen. Würden Sie mir bitte telefonisch Bescheid geben?\nVielen Dank und noch einen schönen Arbeitstag!\nAli Demir',
    check: [
      { k: 'Sind Name, bestehender Termin, Verschiebungswunsch und Alternativen enthalten?', e: 'Die Praxis muss dich zuordnen können und wissen, was du willst. Nenne deshalb deinen Namen, den alten Termin und mindestens ein bis zwei neue Zeiten, damit schnell ein Termin gefunden wird.' },
      { k: 'Ist „Randevumu“ mit u geschrieben und „alabilir miyiz“ mit getrenntem mi?', e: 'Nach „randevum“ (u) steht der Akkusativ mit -u: „randevumu“. Die Fragepartikel steht getrennt und passt sich an: „alabilir miyiz“, nicht „alabilirmiyiz“.' },
      { k: 'Stehen Wochentage ohne Apostroph und ohne Lokativ („perşembe günü“)?', e: 'Für „am Donnerstag“ sagt man „perşembe günü“ oder einfach „perşembe“. Ein „perşembe’de“ gibt es nicht, denn Tage sind keine Eigennamen und brauchen keinen Apostroph. Tageszeiten wie „sabah“ stehen ebenfalls ohne Endung.' },
      { k: 'Hast du „siz“ und einen höflichen Abschluss benutzt?', e: 'Bei Arztpraxen und Ämtern ist „siz“ Standard. „İyi günler“ am Anfang und „iyi çalışmalar“ am Ende sind übliche Floskeln gegenüber Angestellten.' }
    ],
    mistakes: [
      { bad: 'Randevumı başka güne alabilir miyiz?', good: 'Randevumu başka bir güne alabilir miyiz?', why: 'Die Endung folgt dem letzten Vokal: „randevu“ endet auf u, also -u. „Randevumı“ mit ı ist falsch. Deutschsprechende verwechseln ı/u/ü gern.' },
      { bad: "Perşembe’de randevum var.", good: 'Perşembe günü randevum var.', why: 'Wochentage sind keine Eigennamen und bekommen keinen Apostroph. „Am Donnerstag“ heißt „perşembe günü“ oder nur „perşembe“, ohne Lokativ.' },
      { bad: 'Bana telefonla haber verirmisiniz?', good: 'Bana telefonla haber verir misiniz?', why: 'Die Fragepartikel mi/mı/mu/mü wird immer getrennt geschrieben, auch in höflichen Bitten.' }
    ],
    e: 'Der Mustertext gliedert sich in drei Schritte: wer ich bin und welcher Termin besteht, was ich möchte und warum, und welche neuen Zeiten passen. Die Frage „alabilir miyiz?“ mit „wir“ klingt höflicher und kooperativer als „alabilir miyim?“. „İyi çalışmalar“ ist eine übliche, freundliche Verabschiedung an Menschen bei der Arbeit.' },

  { id: 'tr-a2-s08', scene: 'yol',
    title: 'Teknisyene yol tarifi', sub: 'Wegbeschreibung ab Bushaltestelle, höflich',
    task: 'Morgen kommt Herr Yılmaz, ein Techniker deines Internetanbieters, zum ersten Mal zu dir und fährt mit dem Bus. Schreib ihm eine höfliche Nachricht: Nenne die Haltestelle und die Abbiegungen, einen Orientierungspunkt und was er tun soll, wenn er den Weg nicht findet.',
    points: ['Haltestelle und erste Wegstrecke', 'Orientierungspunkt und dein Haus', 'Klingeln oder anrufen, wenn er sich verläuft'],
    reg: 'siz',
    words: { min: 30, ziel: 45 },
    chunks: ['Otobüsten … inin', 'Düz gidin', 'ikinci sokaktan sola dönün', 'Eczanenin yanındaki …', 'Zili çalın', 'Yolu bulamazsanız beni arayın'],
    hint: [['durağ', 'otobüs', 'inin'], ['eczane', 'yanındaki', 'bina'], ['zil', 'arayın']],
    model: "Sayın Yılmaz,\nYarın bize geliyorsunuz. Size yolu tarif etmek istiyorum. Otobüsten Çınar Durağı’nda inin. Durağın karşısındaki sokağa girin, düz gidin ve ikinci sokaktan sola dönün. Sağda büyük bir eczane göreceksiniz. Eczanenin yanındaki gri binada oturuyorum. Zili çalın, ben kapıyı açarım. Yolu bulamazsanız beni arayın lütfen.\nSaygılarımla,\nJulia Braun",
    modeln: 'Sehr geehrter Herr Yılmaz,\nSie kommen morgen zu uns. Ich möchte Ihnen den Weg beschreiben. Steigen Sie an der Haltestelle Çınar aus dem Bus. Biegen Sie in die Straße gegenüber der Haltestelle ein, gehen Sie geradeaus und biegen Sie an der zweiten Straße links ab. Rechts sehen Sie eine große Apotheke. Ich wohne in dem grauen Gebäude neben der Apotheke. Klingeln Sie, dann mache ich auf. Wenn Sie den Weg nicht finden, rufen Sie mich bitte an.\nMit freundlichen Grüßen\nJulia Braun',
    check: [
      { k: 'Stehen alle Befehle in der Höflichkeitsform auf -(y)in/-(y)ın (inin, gidin, dönün, çalın, arayın)?', e: 'Gegenüber einem Fremden gilt „siz“, auch im Imperativ: Verbstamm + -(y)in nach der Vokalharmonie. „Dön“ oder „git“ allein wären die vertrauten „sen“-Formen. Beachte „git → gidin“: das t wird vor dem Vokal zu d.' },
      { k: 'Stimmen die Kasus: „Otobüsten“ (aussteigen aus), „sokağa“ (hinein in), „Durağı’nda“ (an der Haltestelle)?', e: 'Aussteigen verlangt den Ablativ -den (otobüsten inmek), die Richtung „wohin“ den Dativ -a/-e (sokağa girmek), der Ort „wo“ den Lokativ. Der Name „Çınar Durağı“ ist ein Eigenname, deshalb steht vor der Endung ein Apostroph, und nach dem Possessiv -ı kommt ein n: „Durağı’nda“.' },
      { k: 'Hast du -ki richtig benutzt („eczanenin yanındaki gri bina“)?', e: 'Mit -ki wird eine Ortsangabe zum Attribut vor einem Nomen: „durağın karşısındaki sokak“, „eczanenin yanındaki bina“. Es wird direkt an das Wort angehängt und nicht abgetrennt.' },
      { k: 'Folgen die Schritte in der Reihenfolge, in der der Techniker sie geht, mit „Sayın …“ und „Saygılarımla“?', e: 'Wegbeschreibungen werden Schritt für Schritt gelesen: Haltestelle, Abbiegungen, Erkennungszeichen, Haus. „Sayın Yılmaz“ und „Saygılarımla“ passen zu einer höflichen Nachricht an eine Person, die du nicht kennst.' }
    ],
    mistakes: [
      { bad: 'Düz git ve sola dön.', good: 'Düz gidin ve sola dönün.', why: '„git“ und „dön“ sind die Formen für Freunde („sen“). Einem Fremden schreibst du die Höflichkeitsform auf -(y)in. Aus „git“ wird dabei „gidin“, weil das t vor einem Vokal weich wird.' },
      { bad: 'Otobüse inin.', good: 'Otobüsten inin.', why: 'Im Türkischen steigt man „aus dem Bus“ aus (Ablativ: otobüsten inmek) und „in den Bus“ ein (Dativ: otobüse binmek). Deutschsprechende denken bei „einsteigen“ und „aussteigen“ leicht an die falsche Endung.' },
      { bad: 'Çınar Durağında inin.', good: "Çınar Durağı’nda inin.", why: 'Der Name einer Haltestelle ist ein Eigenname und bekommt vor Kasusendungen einen Apostroph. Dazu kommt wegen des Possessivs „-ı“ ein Pufferlaut n: Durağı + n + da.' }
    ],
    e: 'Der Mustertext beschreibt den Weg in der Reihenfolge, in der Herr Yılmaz ihn geht. Kurze Imperativsätze in der höflichen Form sind klar und natürlich. Ein auffälliger Orientierungspunkt wie die Apotheke hilft mehr als ein Straßenname. Zum Schluss gibt „beni arayın“ Sicherheit.' },

  { id: 'tr-a2-s09', scene: 'tatil',
    title: 'Antalya’dan tatil kartı', sub: 'Urlaubskarte mit Ort, Wetter und einem Erlebnis',
    task: 'Du machst Urlaub in Antalya. Schreib deinem Freund Hakan eine Urlaubskarte: Beschreibe Ort und Wetter, erzähle, was ihr gestern gemacht habt, und sag, wann du zurückkommst.',
    points: ['Ort und Wetter', 'Was ich gestern gemacht habe', 'Rückkehr und Gruß'],
    reg: 'sen',
    words: { min: 25, ziel: 40 },
    chunks: ["Antalya’dan sevgiler!", 'Hava çok güzel', 'Dün … gittik', 'Çok eğlendim.', 'Haftaya … dönüyorum.'],
    hint: [['antalya', 'hava'], ['dün', 'gittik', 'eğlen'], ['haftaya', 'dönüyorum']],
    model: "Selam Hakan,\nAntalya’dan sevgiler! Hava çok güzel, her gün denize giriyoruz. Otel büyük ve yemekler çok lezzetli. Dün tekneyle gezmeye gittik, çok eğlendim. Hepinizi çok özledim. Haftaya Almanya’ya dönüyorum. Görüşürüz!\nMelanie",
    modeln: 'Hallo Hakan,\nliebe Grüße aus Antalya! Das Wetter ist wunderschön, wir gehen jeden Tag im Meer schwimmen. Das Hotel ist groß und das Essen ist sehr lecker. Gestern sind wir mit dem Boot auf einen Ausflug gefahren, ich hatte viel Spaß. Ich vermisse euch alle sehr. Nächste Woche fliege ich zurück nach Deutschland. Bis bald!\nMelanie',
    check: [
      { k: 'Steht ein Apostroph zwischen Eigenname und Endung (Antalya’dan, Almanya’ya)?', e: 'Orts- und Personennamen trennt man von Kasusendungen durch einen Apostroph: „Antalya’dan“, „Almanya’ya“. Ohne Apostroph wäre es nach TDK falsch.' },
      { k: 'Steht die gestrige Handlung in der Vergangenheit („gittik“, „eğlendim“)?', e: 'Mit „dün“ (gestern) verwendest du die Vergangenheit auf -di: „gittik“, „girdik“, „eğlendim“. Das Präsens „gidiyoruz“ passt nur, wenn etwas jetzt oder regelmäßig geschieht, wie „her gün denize giriyoruz“.' },
      { k: 'Ist „tekneyle“ richtig gebildet (ile als Endung)?', e: 'Das Wort „ile“ (mit) wird an das Nomen angehängt, nach Vokal mit y („tekneyle“, „arabayla“), nach Konsonant ohne („otobüsle“, „trenle“). Es folgt der Vokalharmonie: -le / -la.' },
      { k: 'Beschreibst du Ort, Wetter und ein konkretes Erlebnis?', e: 'Eine gute Urlaubskarte ist kurz, aber persönlich. Ein konkretes Erlebnis (Bootsausflug) macht sie lebendig und lässt den Empfänger am Urlaub teilhaben.' }
    ],
    mistakes: [
      { bad: 'Antalyadan sevgiler!', good: "Antalya’dan sevgiler!", why: 'Eigennamen bekommen vor der Endung einen Apostroph. Deutschsprechende lassen ihn leicht weg, weil es im Deutschen keine Entsprechung gibt.' },
      { bad: 'Dün denize giriyoruz.', good: 'Dün denize girdik.', why: 'Mit „dün“ steht die Vergangenheit auf -di. Das Präsens „giriyoruz“ beschreibt etwas, das gerade geschieht oder regelmäßig passiert.' },
      { bad: 'Dün tekneyla gezmeye gittik.', good: 'Dün tekneyle gezmeye gittik.', why: '„ile“ richtet sich nach dem Vokal des Wortes: „tekne“ (e) → -yle. Das a-Gegenstück -yla gibt es nur nach a/ı/o/u, etwa „arabayla“.' }
    ],
    e: 'Der Mustertext folgt dem Aufbau einer echten Karte: Gruß vom Ort, Wetter, dann ein Erlebnis (Vergangenheit), dann Gefühl und Rückkehr. Das Präsens („giriyoruz“) beschreibt die aktuelle Urlaubssituation, die Vergangenheit („gittik“) das gestrige Erlebnis. „Görüşürüz“ schließt locker ab.' },

  { id: 'tr-a2-s10', scene: 'is',
    title: 'Yarı zamanlı iş başvurusu', sub: 'Bewerbung als Aushilfe in einem Café',
    task: 'Ein Café sucht eine Aushilfe als Kellner oder Kellnerin für die Wochenenden. Schreib eine kurze, höfliche Bewerbungs-E-Mail: Stell dich vor und nenne die Stelle, beschreibe deine Erfahrung und wann du arbeiten kannst, und bitte um ein Gespräch.',
    points: ['Wer bin ich, auf welche Stelle bewerbe ich mich?', 'Erfahrung und Arbeitszeiten', 'Bitte um ein Gespräch'],
    reg: 'siz',
    words: { min: 35, ziel: 50 },
    chunks: ['… ilanını gördüm', 'başvurmak istiyorum', 'garson olarak çalıştım', 'Hafta sonları … çalışabilirim', 'Sizinle görüşebilir miyim?', 'Cevabınızı sabırsızlıkla bekliyorum'],
    hint: [['ilan', 'başvur', 'yaşında'], ['çalıştım', 'hafta sonu', 'çalışabilirim'], ['görüş', 'cevap']],
    model: "Sayın Yetkili,\nKafenizin garson ilanını gördüm ve bu işe başvurmak istiyorum. Ben Lukas Meyer, 22 yaşındayım ve üniversitede okuyorum. İki yıl bir restoranda garson olarak çalıştım. Türkçem henüz çok iyi değil ama her gün öğreniyorum. Hafta sonları tüm gün çalışabilirim. Sizinle görüşebilir miyim? Cevabınızı sabırsızlıkla bekliyorum.\nSaygılarımla,\nLukas Meyer",
    modeln: 'Sehr geehrte Damen und Herren,\nich habe Ihre Stellenanzeige für Kellner gesehen und möchte mich auf diese Stelle bewerben. Ich bin Lukas Meyer, 22 Jahre alt und studiere an der Universität. Zwei Jahre lang habe ich als Kellner in einem Restaurant gearbeitet. Mein Türkisch ist noch nicht sehr gut, aber ich lerne jeden Tag. An den Wochenenden kann ich ganztägig arbeiten. Könnte ich mich mit Ihnen zu einem Gespräch treffen? Ich freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nLukas Meyer',
    check: [
      { k: 'Sind alle drei Punkte drin (Vorstellung mit Stelle, Erfahrung und Zeiten, Bitte um Gespräch)?', e: 'Ein Café möchte schnell wissen, wer du bist, ob du Erfahrung hast und wann du Zeit hast. Die Bitte um ein Gespräch am Ende zeigt, dass du aktiv den nächsten Schritt wünschst.' },
      { k: 'Hast du durchgehend „siz“ benutzt (Kafeniz, sizinle, cevabınızı)?', e: 'Gegenüber einem Arbeitgeber gilt „siz“. Auch Besitzformen richten sich danach: „kafe“ → „kafeniz“ (euer/Ihr Café), „kafenizin ilanı“ = die Anzeige Ihres Cafés. Wenn du über dich selbst sprichst, bleibt „ich“ („görüşebilir miyim“).' },
      { k: 'Steht die frühere Erfahrung in der Vergangenheit („çalıştım“) und „als“ als „olarak“?', e: 'Etwas Abgeschlossenes, das du selbst erlebt hast, steht auf -dı/-di/-du/-dü, nach stimmlosem Konsonanten -tı/-ti/-tu/-tü: „çalıştım“ (nach ş das t). „Als Kellner“ heißt am klarsten „garson olarak“.' },
      { k: 'Stehen mi/mı und Verb richtig (getrennt geschrieben, Verb am Satzende)?', e: 'Die Fragepartikel wird getrennt geschrieben und folgt dem letzten Vokal davor: „görüşebilir miyim?“. Das Verb bleibt am Ende: „Cevabınızı sabırsızlıkla bekliyorum.“' }
    ],
    mistakes: [
      { bad: 'İki yıl için bir restoranda çalıştım.', good: 'İki yıl bir restoranda çalıştım.', why: 'Eine Dauer in der Vergangenheit steht ohne „için“. Das deutsche „für zwei Jahre“ wird nicht wörtlich übertragen; „iki yıl“ allein genügt.' },
      { bad: 'Sizinle görüşebilirmiyim?', good: 'Sizinle görüşebilir miyim?', why: 'Die Fragepartikel mi/mı/mu/mü wird immer getrennt geschrieben. Nach „görüşebilir“ steht „mi“, und bei „ich“ lautet die Personalendung „-yim“.' },
      { bad: 'Kafenizin ilanı gördüm.', good: 'Kafenizin ilanını gördüm.', why: 'Die Anzeige ist ein bestimmtes Objekt, deshalb steht der Akkusativ: „ilanı“ + „-nı“ nach dem Possessiv, also „ilanını“. Deutschsprechende lassen den Akkusativ leicht weg, weil das Deutsche ihn bei „die Anzeige“ nicht sichtbar macht.' }
    ],
    e: 'Der Mustertext nennt zuerst die Stelle und den Wunsch, sich zu bewerben, stellt dann die Person kurz vor und bringt Erfahrung und Zeiten. Der ehrliche Satz zum Türkisch („henüz çok iyi değil ama her gün öğreniyorum“) wirkt sympathisch. Die Bitte um ein Gespräch und „Saygılarımla“ schließen höflich ab.' }
]);
