/* Türkisch A1 – Schreibwerkstatt (ADR-13). Format: siehe js/content/tr-a2-write.js bzw. docs/adr-13-schreiben.md.
 * IDs tr-a1-s01 … s10 sind fest (nie ändern, nie neu vergeben). Erklärsprache: Deutsch.
 * Alle Aufgaben und Mustertexte sind selbst geschrieben; Mustertexte nutzen nur A1-Wortschatz und A1-Grammatik. */
window.KOPRU.addWrites('tr-a1', [
  { id: 'tr-a1-s01', scene: 'tanisma',
    title: 'Kendimi tanıtıyorum', sub: 'Sich vorstellen: Name, Alter, Herkunft',
    task: 'Du hast online einen Brieffreund aus der Türkei gefunden, er heißt Deniz. Stell dich ihm in einer ersten Nachricht vor: Name und Alter, Herkunft und Wohnort, Beruf oder Hobby. Stell ihm am Ende eine Frage.',
    points: ['Name und Alter', 'Herkunft und Wohnort', 'Beruf oder Hobby'],
    reg: 'sen',
    words: { min: 15, ziel: 25 },
    chunks: ['Benim adım …', '… yaşındayım.', 'Almanyalıyım', '… yaşıyorum.', 'Sen nerelisin?'],
    hint: [['adım', 'yaşında'], ['almanya', 'yaşıyorum'], ['öğretmen', 'öğrenci', 'seviyorum', 'mühendis']],
    model: 'Merhaba Deniz,\nBenim adım Lena. Yirmi altı yaşındayım. Almanyalıyım, Köln’de yaşıyorum. Öğretmenim ve Türkçe öğreniyorum. Müziği çok seviyorum. Sen nerelisin?\nSevgiler,\nLena',
    modeln: 'Hallo Deniz,\nmein Name ist Lena. Ich bin 26 Jahre alt. Ich bin Deutsche und wohne in Köln. Ich bin Lehrerin und lerne Türkisch. Ich mag Musik sehr. Woher kommst du?\nLiebe Grüße,\nLena',
    check: [
      { k: 'Sind alle drei Punkte drin (Name und Alter, Herkunft und Wohnort, Beruf oder Hobby)?', e: 'Eine erste Nachricht wirkt vollständig, wenn sie diese drei Dinge verrät. Ohne Frage am Ende bekommt Deniz außerdem keinen Anlass zu antworten – „Sen nerelisin?“ lädt ihn dazu ein.' },
      { k: 'Steht zwischen Ortsname und Endung ein Apostroph (Köln’de)?', e: 'Eigennamen werden nach TDK von der Endung durch einen Apostroph getrennt: Köln’de, Berlin’de, Almanya’dan. Gewöhnliche Wörter bekommen keinen: „evde“, „okulda“.' },
      { k: 'Passen die Personalendungen („Öğretmenim“, „yaşıyorum“, „yaşındayım“, „Almanyalıyım“)?', e: 'Zu „ben“ gehört die Endung -im/-ım/-um/-üm bzw. -yim/-yım, im Präsens „-iyorum“. Das Verb „sein“ gibt es dabei nicht als eigenes Wort: „Öğretmenim“ heißt schon „Ich bin Lehrerin“.' },
      { k: 'Steht das Verb am Satzende und hast du „sen“ benutzt?', e: 'Im Türkischen steht das Verb am Ende: „Köln’de yaşıyorum“. Unter Gleichaltrigen und Online-Bekannten duzt man sich: „Sen nerelisin?“, nicht „Siz nerelisiniz?“.' }
    ],
    mistakes: [
      { bad: 'Ben yaşıyorum Köln’de.', good: 'Köln’de yaşıyorum.', why: 'Das Verb steht ganz am Ende, anders als im deutschen Satz „Ich wohne in Köln“. „Ben“ kann wegfallen, weil die Endung „-um“ die Person schon zeigt.' },
      { bad: 'Ben bin Lena.', good: 'Benim adım Lena. / Ben Lena’yım.', why: 'Es gibt kein eigenes Wort für „bin“. Entweder sagst du „Benim adım Lena“ (mein Name ist Lena) oder „Ben Lena’yım“ mit Personalendung – nach Vokal mit y und Apostroph.' },
      { bad: 'Köln yaşıyorum.', good: 'Köln’de yaşıyorum.', why: 'Für „in Köln“ braucht das Türkische die Endung -de/-da (Ortsfall). Ohne sie fehlt dem Satz das „in“.' }
    ],
    e: 'Der Mustertext geht von außen nach innen: Gruß, Name, Alter, dann Herkunft und Wohnort, zuletzt Beruf und Hobby. Das ist die typische Reihenfolge, wenn man sich schriftlich vorstellt. Am Schluss steht eine Frage an den Briefpartner und ein herzlicher Gruß („Sevgiler“).' },

  { id: 'tr-a1-s02', scene: 'tatil',
    title: 'Antalya’dan selam', sub: 'Postkarte aus dem Urlaub',
    task: 'Du machst Urlaub am Meer in Antalya. Schreib deinem Freund Emre eine Postkarte: Wo bist du, wie ist das Wetter, was machst du gerade? Frag ihn, wie es ihm geht, und verabschiede dich.',
    points: ['Ort', 'Wetter', 'Was ich gerade mache und Gruß'],
    reg: 'sen',
    words: { min: 15, ziel: 28 },
    chunks: ['Antalya’dayım.', 'Hava çok güzel', 'Şimdi … okuyorum.', 'Sen nasılsın?', 'Görüşürüz!'],
    hint: [['antalya', 'dayım'], ['hava', 'sıcak', 'güneş'], ['şimdi', 'yor']],
    model: 'Merhaba Emre,\nAntalya’dayım. Hava çok güzel, güneş var ve deniz çok sıcak. Şimdi balkonda kitap okuyorum. Otel büyük ve yemekler çok lezzetli. Sen nasılsın?\nGörüşürüz!\nJan',
    modeln: 'Hallo Emre,\nich bin in Antalya. Das Wetter ist sehr schön, die Sonne scheint und das Meer ist sehr warm. Jetzt lese ich auf dem Balkon ein Buch. Das Hotel ist groß und das Essen ist sehr lecker. Wie geht es dir?\nBis bald!\nJan',
    check: [
      { k: 'Sind alle drei Punkte drin (Ort, Wetter, was du gerade machst)?', e: 'Eine Postkarte lebt davon, dass der Empfänger sich den Ort vorstellen kann. Mit Ort, Wetter und einer Tätigkeit „im Moment“ ist das erreicht.' },
      { k: 'Steht zwischen „Antalya“ und der Endung ein Apostroph?', e: 'Eigennamen trennt man von Endungen durch einen Apostroph: „Antalya’dayım“ (ich bin in Antalya). Das Wort „denizde“ (im Meer) braucht keinen, weil „deniz“ kein Eigenname ist.' },
      { k: 'Steht „çok“ vor dem Adjektiv („çok güzel“, „çok sıcak“)?', e: 'Wie im Deutschen („sehr schön“) steht „çok“ vor dem Adjektiv, nie dahinter.' },
      { k: 'Steht das Präsens auf -iyor („okuyorum“) für das, was du gerade tust?', e: 'Für „jetzt gerade“ nimmst du die -iyor-Form mit „şimdi“: „Şimdi kitap okuyorum.“ Sie passt zugleich zu Dingen, die ohnehin gerade andauern.' }
    ],
    mistakes: [
      { bad: 'Antalyadayım.', good: 'Antalya’dayım.', why: 'Nach TDK steht bei Eigennamen vor jeder Endung ein Apostroph: Antalya’da, Antalya’dan, Antalya’ya.' },
      { bad: 'Hava güzel çok.', good: 'Hava çok güzel.', why: 'Nachgestellt („güzel çok“) ist es falsch.' },
      { bad: 'Şimdi kitabı okuyorum.', good: 'Şimdi kitap okuyorum.', why: 'Den Akkusativ (-ı) bekommt nur ein bestimmtes Objekt. „Kitap okuyorum“ heißt „Ich lese (gerade) ein Buch“; „kitabı“ wäre ein ganz bestimmtes Buch, das beide kennen.' }
    ],
    e: 'Eine Postkarte ist kurz: Ort, Wetter, eine Tätigkeit, eine Frage, ein Gruß. Der Mustertext hält sich daran und benutzt nur das Präsens und Sätze wie „Hava çok güzel“ oder „Otel büyük“, bei denen im Türkischen gar kein Verb nötig ist. „Görüşürüz!“ ist der übliche lockere Gruß unter Freunden.' },

  { id: 'tr-a1-s03', scene: 'alisveris',
    title: 'Alışveriş listesi', sub: 'Einkaufsliste in ganzen Sätzen, für die Nachbarin',
    task: 'Deine Nachbarin, Aksoy Hanım, geht heute zum Markt und fragt, ob sie dir etwas mitbringen soll. Schreib ihr (siz): Bedank dich, nenne mindestens drei Dinge mit Mengen und frag nach dem Preis.',
    points: ['Dank', 'Was und wie viel (mindestens drei Dinge)', 'Frage nach dem Preis'],
    reg: 'siz',
    words: { min: 18, ziel: 30 },
    chunks: ['Çok teşekkür ederim.', '… istiyorum.', 'Hepsi ne kadar?', 'Sağ olun!'],
    hint: [['teşekkür', 'sağ ol'], ['kilo', 'istiyorum', 'ekmek'], ['ne kadar', 'kaç', 'lira']],
    model: 'Merhaba Aksoy Hanım,\nÇok teşekkür ederim. İki kilo domates, bir kilo patates ve yarım kilo peynir istiyorum. Bir de iki ekmek lütfen. Hepsi ne kadar? Sağ olun!\nAnna',
    modeln: 'Hallo Frau Aksoy,\nvielen Dank. Ich möchte zwei Kilo Tomaten, ein Kilo Kartoffeln und ein halbes Kilo Käse. Und bitte noch zwei Brote. Was kostet alles zusammen? Danke!\nAnna',
    check: [
      { k: 'Hast du Aksoy Hanım gesiezt („Sağ olun“)?', e: 'Aksoy Hanım ist deine Nachbarin, vielleicht älter – also „siz“. „Sağ ol“ wäre die Duzform; zu ihr passt „Sağ olun“. Mit „Hanım“ nach dem Nachnamen sprichst du sie höflich an.' },
      { k: 'Steht nach Zahlen und Mengen der Singular („iki kilo“, „iki ekmek“)?', e: 'Nach einer Zahl steht kein Plural: „iki kilo domates“, „iki ekmek“. Die Zahl zeigt die Menge schon – „iki kilolar“ oder „iki ekmekler“ sind falsch.' },
      { k: 'Hast du „yarım kilo“ (ein halbes Kilo) oder eine andere Menge richtig gesagt?', e: '„yarım“ (halb) steht vor dem Maß: „yarım kilo peynir“. Das Wort „bir“ fällt dabei weg – anders als im Deutschen („ein halbes Kilo“).' },
      { k: 'Fragst du mit „Hepsi ne kadar?“ nach dem Gesamtpreis?', e: '„Hepsi“ heißt „alles zusammen“, „ne kadar“ heißt „wie viel“. So fragst du in Geschäften, auf dem Markt und im Dolmuş nach der Summe.' }
    ],
    mistakes: [
      { bad: 'İki kilolar domates istiyorum.', good: 'İki kilo domates istiyorum.', why: 'Nach Zahlen kein Plural – weder beim Maß („kilo“) noch bei der Ware. Auch „domatesler“ wäre hier falsch.' },
      { bad: 'Sağ ol!', good: 'Sağ olun!', why: 'Zu einer Nachbarin, die du mit „Hanım“ ansprichst, gehört „siz“: Sağ olun. „Sağ ol“ ist für Freunde und Kinder.' },
      { bad: 'Hepsi ne kadardır?', good: 'Hepsi ne kadar?', why: 'Im Alltag sagt man einfach „Hepsi ne kadar?“. Die Endung -dır klingt gestelzt und kommt in dieser Frage nicht vor.' }
    ],
    e: 'Eine Einkaufsliste in Sätzen folgt immer dem Muster „Menge + Ware (Singular) + istiyorum“. Der Mustertext zeigt es dreimal hintereinander und verbindet die Dinge mit „ve“ (und). Mit „Bir de …“ (und noch …) hängst du etwas an. Die Frage nach dem Preis und der Dank zum Schluss machen die Nachricht höflich.' },

  { id: 'tr-a1-s04', scene: 'gun',
    title: 'Benim günüm', sub: 'Tagesablauf mit Uhrzeiten',
    task: 'Dein türkischer Brieffreund Kerem möchte wissen, wie dein Tag aussieht. Beschreib ihm in vier bis fünf Sätzen deinen Tag mit Uhrzeiten: Aufstehen, Frühstück, Arbeit oder Schule, Abendessen und Schlafen. Frag ihn, wann er aufsteht.',
    points: ['Morgens: Aufstehen und Frühstück', 'Tagsüber: Arbeit oder Schule', 'Abends und Frage an Kerem'],
    reg: 'sen',
    words: { min: 20, ziel: 32 },
    chunks: ['Sabah saat … kalkıyorum.', '… işe gidiyorum.', 'Sen kaçta kalkıyorsun?'],
    hint: [['kalkıyorum', 'sabah'], ['işe', 'okula', 'çalışıyorum'], ['akşam', 'uyuyorum', 'kaçta']],
    model: 'Merhaba Kerem,\nSabah saat yedide kalkıyorum. Saat sekizde kahvaltı yapıyorum ve dokuzda işe gidiyorum. Akşam saat yedide yemek yiyorum. Saat on birde uyuyorum. Sen kaçta kalkıyorsun?\nPaul',
    modeln: 'Hallo Kerem,\nmorgens um sieben Uhr stehe ich auf. Um acht frühstücke ich und um neun gehe ich zur Arbeit. Abends um sieben esse ich. Um elf Uhr schlafe ich. Um wie viel Uhr stehst du auf?\nPaul',
    check: [
      { k: 'Haben alle Uhrzeiten die Endung -de/-da/-te („yedide“, „dokuzda“)?', e: 'Auf die Frage „wann?“ steht die Uhrzeit mit der Ortsendung: „saat yedide“ (um sieben), „dokuzda“ (um neun). Die Endung richtet sich nach dem letzten Vokal: yedi → -de, dokuz → -da.' },
      { k: 'Steht nach hartem Konsonanten (ç, f, h, k, p, s, ş, t) -te/-ta („üçte“, „beşte“)?', e: 'Nach harten Konsonanten wird -da/-de zu -ta/-te: „beşte“ (um fünf), „üçte“ (um drei), „altıda“ bleibt aber bei -da, weil „altı“ auf Vokal endet.' },
      { k: 'Heißt es „işe gidiyorum“ (Dativ) für „zur Arbeit gehen“?', e: 'Bei Richtungen steht der Dativ -e/-a: „işe“, „okula“, „eve“. „İşi gidiyorum“ wäre der Akkusativ und falsch.' },
      { k: 'Steht das Verb jeweils am Satzende?', e: '„Sabah saat yedide kalkıyorum.“ – erst Zeit, dann Verb. Deutschsprachige setzen die Zeit gern hinter das Verb („Ich stehe um sieben auf“); im Türkischen kommt das Verb zuletzt.' }
    ],
    mistakes: [
      { bad: 'Saat yedi kalkıyorum.', good: 'Saat yedide kalkıyorum.', why: 'Die Uhrzeit braucht die Ortsendung -de/-da („um sieben“). Ohne sie hieße es nur „Sieben Uhr, ich stehe auf“.' },
      { bad: 'İşi gidiyorum.', good: 'İşe gidiyorum.', why: 'Bei „gitmek“ fragst du „wohin?“ – dafür steht der Dativ -e/-a. Die Endung -i (Akkusativ) bezeichnet das Objekt, nicht die Richtung.' },
      { bad: 'Sabah kalkıyorum saat yedide.', good: 'Sabah saat yedide kalkıyorum.', why: 'Das Verb steht am Satzende. Zeitangaben kommen davor, nicht dahinter.' }
    ],
    e: 'Der Mustertext ordnet den Tag chronologisch und nennt zu jeder Handlung die Uhrzeit mit „saat + Zahl + -de“. Verben wie „kalkıyorum“, „yapıyorum“, „gidiyorum“ stehen im Präsens auf -iyor – das gilt im Türkischen auch für tägliche Gewohnheiten. Die Frage „Sen kaçta kalkıyorsun?“ beendet die Nachricht freundlich.' },

  { id: 'tr-a1-s05', scene: 'aile',
    title: 'Ailem', sub: 'Meine Familie vorstellen',
    task: 'Deine türkische Brieffreundin Ceren fragt nach deiner Familie. Schreib ihr, wer zu deiner Familie gehört, wo sie wohnt und was die Familienmitglieder machen. Frag zum Schluss nach ihrer Familie.',
    points: ['Wer gehört zur Familie', 'Namen und Alter', 'Beruf oder Wohnort eines Familienmitglieds'],
    reg: 'sen',
    words: { min: 22, ziel: 35 },
    chunks: ['Benim ailem …', 'Bir kız kardeşim var', '… yaşında', 'Senin ailen büyük mü?'],
    hint: [['ailem', 'annem', 'babam'], ['yaşında', 'adı'], ['öğretmen', 'avukat', 'öğrenci', 'yaşıyor']],
    model: 'Merhaba Ceren,\nBenim ailem küçük. Ailem Münih’te yaşıyor. Babam avukat, annem öğretmen. Bir kız kardeşim var, adı Mia. Mia yirmi bir yaşında ve öğrenci. Senin ailen büyük mü?\nTim',
    modeln: 'Hallo Ceren,\nmeine Familie ist klein. Meine Familie lebt in München. Mein Vater ist Anwalt, meine Mutter ist Lehrerin. Ich habe eine Schwester, sie heißt Mia. Mia ist einundzwanzig Jahre alt und Studentin. Ist deine Familie groß?\nTim',
    check: [
      { k: 'Hast du Possessivendungen benutzt („ailem“, „annem“, „babam“, „kız kardeşim“)?', e: 'Das deutsche „mein/meine“ wird im Türkischen an das Wort gehängt: aile → ailem, anne → annem, baba → babam. „Benim“ davor ist möglich, aber nicht nötig.' },
      { k: 'Sagst du „haben“ mit „… var“ („Bir kız kardeşim var“)?', e: 'Das Türkische hat kein Wort für „haben“. Du sagst: „Meine Schwester ist da“ – Possessiv + var: „Bir kız kardeşim var.“ Verneint: „yok“.' },
      { k: 'Steht ein Apostroph in „Münih’te“?', e: 'Orts- und Personennamen werden von Endungen durch einen Apostroph getrennt. h ist selbst ein harter (stimmloser) Konsonant, daher -te: Münih’te.' },
      { k: 'Ist die Fragepartikel getrennt geschrieben und passt zum Vokal („büyük mü“)?', e: '„mi/mı/mu/mü“ steht getrennt vom Wort davor. „büyük“ endet auf ü – ein runder, vorderer Vokal –, also „mü“.' }
    ],
    mistakes: [
      { bad: 'Benim bir kız kardeşim.', good: 'Bir kız kardeşim var.', why: 'Ohne „var“ fehlt die Aussage „ich habe“. „Bir kız kardeşim“ allein ist nur „eine meine Schwester“, kein Satz.' },
      { bad: 'Senin ailen büyük mu?', good: 'Senin ailen büyük mü?', why: 'Die Fragepartikel richtet sich nach dem letzten Vokal des Wortes davor: ü → mü. „mu“ passt nur nach a, ı, o, u.' },
      { bad: 'Münihte yaşıyor.', good: 'Münih’te yaşıyor.', why: 'Bei Eigennamen steht vor der Endung ein Apostroph.' }
    ],
    e: 'Eine Familienbeschreibung besteht fast nur aus Possessivendungen („annem“, „babam“) und dem Muster „… var“. Verben sind selten nötig: „Babam avukat, annem öğretmen“ kommt ohne „ist“ aus, weil das Verb „sein“ in der 3. Person wegfällt. Mit „Senin ailen büyük mü?“ gibst du das Gespräch an Ceren zurück.' },

  { id: 'tr-a1-s06', scene: 'ev',
    title: 'Daire sormak', sub: 'Anfrage zu einer Wohnung an die Vermieterin',
    task: 'Du hast eine Wohnung gefunden, die dir gefällt. Schreib der Vermieterin, Kaya Hanım (siz): Sag, dass dir die Wohnung gefällt, frag nach Zimmern, Balkon und Miete und schlage vor, am nächsten Tag zu einer bestimmten Uhrzeit zu kommen.',
    points: ['Interesse an der Wohnung', 'Fragen zu Zimmern, Balkon und Miete', 'Vorschlag für den Besichtigungstermin'],
    reg: 'siz',
    words: { min: 20, ziel: 32 },
    chunks: ['Daire için yazıyorum.', 'Daire çok güzel.', 'Kaç oda var?', 'Kira ne kadar?', 'Yarın saat … geliyorum, olur mu?'],
    hint: [['daire', 'yazıyorum'], ['oda', 'kira', 'balkon'], ['geliyorum', 'yarın', 'saat']],
    model: 'Merhaba Kaya Hanım,\nDaire için yazıyorum. Daire çok güzel. Kaç oda var? Balkon var mı? Kira ne kadar? Yarın saat altıda geliyorum, olur mu?\nTeşekkür ederim.\nAnna Weber',
    modeln: 'Guten Tag, Frau Kaya,\nich schreibe wegen der Wohnung. Die Wohnung ist sehr schön. Wie viele Zimmer gibt es? Gibt es einen Balkon? Wie hoch ist die Miete? Ich komme morgen um sechs Uhr, ist das in Ordnung?\nVielen Dank.\nAnna Weber',
    check: [
      { k: 'Hast du die Vermieterin mit „Kaya Hanım“ angesprochen und höflich geschrieben („Teşekkür ederim“)?', e: 'Eine Vermieterin sprichst du mit Nachnamen und „Hanım“ an („Kaya Hanım“) und bedankst dich höflich mit „Teşekkür ederim“. „Sağ ol“ wäre unter Freunden in Ordnung, hier zu locker.' },
      { k: 'Steht „Daire çok güzel“ ohne „ist“?', e: 'In der 3. Person fällt „sein“ weg: „Daire güzel“ = Die Wohnung ist schön. „çok“ (sehr) steht davor.' },
      { k: 'Ist „mı/mu“ getrennt geschrieben und passt zum Vokal („Balkon var mı?“, „olur mu?“)?', e: 'Die Fragepartikel steht getrennt und richtet sich nach dem letzten Vokal davor: „var“ → a → mı, „olur“ → u → mu.' },
      { k: 'Steht die Uhrzeit mit Ortsendung („saat altıda“)?', e: 'Auf „wann?“ antwortet die Uhrzeit mit -da/-de: „saat altıda“. Das Wort „saat“ davor ist üblich, aber nicht Pflicht.' }
    ],
    mistakes: [
      { bad: 'Kira ne kadar var?', good: 'Kira ne kadar?', why: '„ne kadar?“ (wie viel?) fragt schon nach dem Betrag. „var“ gehört nur zu „Gibt es …?“-Fragen: „Balkon var mı?“.' },
      { bad: 'Balkon varmı?', good: 'Balkon var mı?', why: 'Die Fragepartikel wird immer getrennt geschrieben.' },
      { bad: 'Geliyorum yarın saat altıda, olur mu?', good: 'Yarın saat altıda geliyorum, olur mu?', why: 'Das Verb steht am Ende des Satzteils. Zeitangaben kommen davor, nicht dahinter.' }
    ],
    e: 'Der Mustertext hat den Aufbau einer höflichen Anfrage: Anlass, Urteil, drei kurze Fragen und ein Terminvorschlag. Die Fragen sind in sich klar: „kaç oda var?“ (wie viele Zimmer?), „Balkon var mı?“ (gibt es einen Balkon?), „Kira ne kadar?“ (wie hoch ist die Miete?). Mit „olur mu?“ (Passt das?) bittest du höflich um Zustimmung zum Termin.' },

  { id: 'tr-a1-s07', scene: 'davet',
    title: 'Çay daveti', sub: 'Einladung per SMS an den Lehrer',
    task: 'Du möchtest deinen Türkischlehrer, Mehmet Bey, am Samstag zu Tee und Kuchen einladen. Schreib ihm eine SMS (siz): Nenne den Tag und die Uhrzeit, die Adresse, und frag, ob er kommen kann.',
    points: ['Tag, Uhrzeit und Anlass (Tee und Kuchen)', 'Adresse', 'Frage: Kommen Sie?'],
    reg: 'siz',
    words: { min: 18, ziel: 30 },
    chunks: ['Cumartesi saat beşte', 'bize gelir misiniz?', 'Çay ve pasta var.', 'Sizi bekliyoruz!'],
    hint: [['cumartesi', 'saat'], ['adres', 'sokağı', 'kat'], ['gelir', 'bekliyoruz']],
    model: 'Merhaba Mehmet Bey,\nCumartesi saat beşte bize gelir misiniz? Çay ve pasta var. Adresimiz: Gül Sokağı 12, ikinci kat. Sizi bekliyoruz!\nİyi günler,\nAnna',
    modeln: 'Guten Tag, Mehmet Bey,\nkönnen Sie am Samstag um fünf Uhr zu uns kommen? Es gibt Tee und Kuchen. Unsere Adresse: Gül Sokağı 12, zweiter Stock. Wir erwarten Sie!\nSchönen Tag,\nAnna',
    check: [
      { k: 'Hast du deinen Lehrer gesiezt („gelir misiniz?“, „Sizi“)?', e: 'Lehrer, Ältere und Fremde siezt man: „gelir misiniz?“, „sizi“. Mit „Mehmet Bey“ sprichst du ihn höflich an – „Bey“ steht nach dem Vornamen.' },
      { k: 'Hat die Uhrzeit die richtige Endung („beşte“)?', e: 'Nach hartem Konsonanten (hier ş) wird -de zu -te: „saat beşte“ (um fünf). Nach Vokal oder weichem Konsonanten bleibt es -de/-da: „yedide“, „dokuzda“.' },
      { k: 'Ist der Eigenname der Straße großgeschrieben („Gül Sokağı“)?', e: 'Straßennamen sind Eigennamen und werden großgeschrieben, auch „Sokağı“ als Teil des Namens. Das ğ in „Sokağı“ entsteht aus sokak + -ı.' },
      { k: 'Steht „bize“ für „zu uns“?', e: '„biz“ (wir) + Dativ -e = „bize“ (zu uns). Bei „gelmek“ fragst du „wohin?“, deshalb der Dativ. So lädt man auf Türkisch zu sich nach Hause ein.' }
    ],
    mistakes: [
      { bad: 'Cumartesi saat beş bize gelir misiniz?', good: 'Cumartesi saat beşte bize gelir misiniz?', why: 'Die Uhrzeit braucht die Endung. Nach ş heißt sie -te (nicht -de): beş → beşte.' },
      { bad: 'Siz de gelir misin?', good: 'Siz de gelir misiniz?', why: '„misin“ gehört zu „sen“. Zu „siz“ passt die Personalendung -iniz: „misiniz“. Beides gemischt klingt falsch.' },
      { bad: 'Gül sokağı 12.', good: 'Gül Sokağı 12.', why: 'Straßennamen sind Eigennamen: Beide Teile werden großgeschrieben.' }
    ],
    e: 'Eine Einladung braucht Tag, Uhrzeit, Ort und eine Frage – genau das steht im Mustertext. „Çay ve pasta var“ heißt wörtlich „Es gibt Tee und Kuchen“; „var“ erfüllt hier die Rolle von „es gibt“. „Sizi bekliyoruz!“ (Wir erwarten Sie) ist die übliche warme Schlussformel.' },

  { id: 'tr-a1-s08', scene: 'kafe',
    title: 'Kafede sipariş', sub: 'Bestellung im Café auf einem Zettel',
    task: 'Du sitzt mit einem Freund im Café, der Kellner hat viel zu tun. Schreib die Bestellung auf einen Zettel (an den Kellner: siz): zwei Tee ohne Zucker, einen Kaffee mit Milch, frag nach Schokoladenkuchen und nach dem Gesamtpreis.',
    points: ['Höfliche Ansprache', 'Getränke mit Wunsch (ohne Zucker, mit Milch)', 'Kuchen und Frage nach dem Preis'],
    reg: 'siz',
    words: { min: 15, ziel: 28 },
    chunks: ['Affedersiniz', 'iki çay', 'şekersiz', 'pasta var mı?', 'Hepsi ne kadar?'],
    hint: [['affedersiniz', 'lütfen'], ['çay', 'kahve', 'şekersiz', 'sütlü'], ['pasta', 'kek', 'ne kadar']],
    model: 'Affedersiniz, iki çay ve bir sütlü kahve istiyoruz. Çaylar şekersiz, lütfen. Çikolatalı pasta var mı? Hepsi ne kadar? Teşekkür ederiz.',
    modeln: 'Entschuldigung, wir möchten zwei Tee und einen Kaffee mit Milch. Die Tees bitte ohne Zucker. Gibt es Schokoladenkuchen? Was kostet alles zusammen? Vielen Dank.',
    check: [
      { k: 'Hast du den Kellner höflich angesprochen („Affedersiniz“, „lütfen“)?', e: '„Affedersiniz“ (Entschuldigen Sie) ist der übliche Einstieg bei Kellnern und Fremden. Mit „lütfen“ wird jede Bestellung höflich. Die Duzform „Affedersin“ wäre hier unpassend.' },
      { k: 'Steht nach Zahlen der Singular („iki çay“)?', e: 'Nach Zahlen kein Plural: „iki çay“, „bir kahve“. „Çaylar“ steht nur, wenn kein Zahlwort davorsteht („Çaylar şekersiz“ = die Tees sind ohne Zucker).' },
      { k: 'Passen -li und -siz („sütlü“, „şekersiz“, „çikolatalı“)?', e: '-li/-lı/-lu/-lü heißt „mit“, -siz/-sız/-suz/-süz „ohne“. Beide richten sich nach dem letzten Vokal: süt → sütlü, şeker → şekersiz, çikolata → çikolatalı.' },
      { k: 'Ist „mı“ getrennt geschrieben und passt zum Vokal („pasta var mı?“)?', e: 'Die Fragepartikel schreibt man immer getrennt. Nach „var“ (a) steht „mı“, nach einem Wort mit e/i dagegen „mi“.' }
    ],
    mistakes: [
      { bad: 'İki çaylar istiyoruz.', good: 'İki çay istiyoruz.', why: 'Nach Zahlen steht kein Plural. „Çaylar“ wäre nur ohne Zahlwort richtig.' },
      { bad: 'Çikolatalı pasta var mi?', good: 'Çikolatalı pasta var mı?', why: 'Die Fragepartikel folgt dem letzten Vokal davor: „var“ → a → mı, nicht mi.' },
      { bad: 'Affedersin, iki çay istiyoruz.', good: 'Affedersiniz, iki çay istiyoruz.', why: '„Affedersin“ ist die Duzform. Einem Kellner gegenüber sagst du „Affedersiniz“.' }
    ],
    e: 'Auf einem Zettel gilt dasselbe wie am Tisch: höflich einsteigen, klar bestellen („… istiyoruz“), mit „lütfen“ Wünsche ergänzen und nach dem Preis fragen. Der Mustertext zeigt außerdem drei häufige Endungen: -li (mit), -siz (ohne) und den Plural -ler/-lar, der erst ohne Zahl erlaubt ist. „Teşekkür ederiz“ (wir danken) passt, weil ihr zu zweit seid.' },

  { id: 'tr-a1-s09', scene: 'form',
    title: 'Kayıt formu', sub: 'Anmeldeformular einer Sprachschule als Text',
    task: 'Du meldest dich per Nachricht in einer Sprachschule an, weil du einen Türkischkurs suchst. Schreib dem Sekretariat (siz) in ganzen Sätzen: Name und Alter, Herkunft und Wohnort, Telefonnummer und die Frage nach einem Kurs.',
    points: ['Name und Alter', 'Herkunft und Wohnort', 'Telefonnummer und Anliegen'],
    reg: 'siz',
    words: { min: 18, ziel: 30 },
    chunks: ['Adım …', '… yaşındayım.', 'Almanyalıyım', '… yaşıyorum.', 'Kurs var mı?'],
    hint: [['adım', 'yaşında'], ['almanya', 'yaşıyorum'], ['telefon', 'kurs']],
    model: 'Merhaba,\nAdım Lena Fischer, otuz yaşındayım. Almanyalıyım ve Bonn’da yaşıyorum. Telefon numaram: 0170 1234567. Türkçe öğreniyorum. Kurs var mı? Teşekkür ederim.',
    modeln: 'Guten Tag,\nmein Name ist Lena Fischer, ich bin 30 Jahre alt. Ich bin Deutsche und wohne in Bonn. Meine Telefonnummer: 0170 1234567. Ich lerne Türkisch. Gibt es einen Kurs? Vielen Dank.',
    check: [
      { k: 'Hast du freundlich begonnen („Merhaba“) und höflich geschlossen („Teşekkür ederim“)?', e: 'In einer Nachricht an ein Sekretariat sind „Merhaba“ am Anfang und „Teşekkür ederim“ am Ende der höfliche Rahmen.' },
      { k: 'Ist „Bonn’da“ mit Apostroph und der richtigen Endung geschrieben?', e: 'Eigennamen bekommen einen Apostroph vor der Endung. Nach n (weicher Konsonant) steht -da: Bonn’da. Nach hartem Konsonanten wäre es -ta, z. B. „Münih’te“.' },
      { k: 'Steht „Adım …“ ohne „ben“ und ohne „ist“?', e: '„Adım Lena“ heißt „Mein Name (ist) Lena“. Die Endung -ım ersetzt „mein“, und „ist“ fällt weg. „Benim adım …“ ist ebenfalls richtig.' },
      { k: 'Hast du „Telefon numaram“ geschrieben und Sprachnamen großgeschrieben („Türkçe“)?', e: 'Sprachnamen schreibt man groß (TDK): Türkçe, Almanca. „Telefon numaram“ = meine Telefonnummer; die Nummer selbst schreibst du in Ziffern.' }
    ],
    mistakes: [
      { bad: 'Ben adım Lena.', good: 'Adım Lena. / Benim adım Lena.', why: 'Mit „ben“ allein fehlt die Possessivendung. Entweder sagst du „Adım Lena“ oder „Benim adım Lena“, nicht „Ben adım“.' },
      { bad: 'Bonnda yaşıyorum.', good: 'Bonn’da yaşıyorum.', why: 'Der Apostroph vor der Endung ist bei Eigennamen Pflicht (TDK).' },
      { bad: 'Kurs var mi?', good: 'Kurs var mı?', why: 'Nach „var“ (letzter Vokal a) steht „mı“, nicht „mi“.' }
    ],
    e: 'Ein Formular wird im Text zur Liste in ganzen Sätzen: „Adım …“, „… yaşındayım“, „… yaşıyorum“. Das sind genau die Sätze, die du auch am Telefon brauchst. Der Mustertext nennt Name, Alter und Wohnort, dann die Telefonnummer, stellt die Frage „Kurs var mı?“ und schließt mit einem Dank – so wirkt eine Anmeldung höflich und vollständig.' },

  { id: 'tr-a1-s10', scene: 'eposta',
    title: 'Hasta arkadaşa e-posta', sub: 'Kurze E-Mail an einen kranken Freund',
    task: 'Dein Freund Burak ist krank. Schreib ihm eine kurze E-Mail: Wünsch ihm gute Besserung, frag, wie es ihm geht, und sag, dass du am Samstag um drei Uhr zu ihm kommst. Frag, ob er etwas möchte.',
    points: ['Gute Besserung und Frage nach dem Befinden', 'Besuch am Samstag mit Uhrzeit', 'Frage: Möchtest du etwas? Gruß'],
    reg: 'sen',
    words: { min: 15, ziel: 25 },
    chunks: ['Geçmiş olsun!', 'Nasılsın?', 'Ateşin var mı?', 'Cumartesi saat … geliyorum.'],
    hint: [['geçmiş olsun', 'nasılsın', 'ateş'], ['cumartesi', 'üçte', 'saat'], ['istiyor', 'görüşürüz']],
    model: 'Merhaba Burak,\nGeçmiş olsun! Nasılsın? Ateşin var mı? Cumartesi saat üçte sana geliyorum. Bir şey istiyor musun?\nGörüşürüz!\nSara',
    modeln: 'Hallo Burak,\ngute Besserung! Wie geht es dir? Hast du Fieber? Am Samstag um drei Uhr komme ich zu dir. Möchtest du etwas?\nBis bald!\nSara',
    check: [
      { k: 'Sind alle drei Punkte drin (Besserung wünschen und fragen, Besuch mit Uhrzeit, Frage nach einem Wunsch)?', e: 'Bei einem kranken Freund zählt zuerst der Zuspruch („Geçmiş olsun!“), dann die Frage nach dem Befinden. Erst danach folgt dein Besuchsvorschlag mit Zeit – das wirkt fürsorglich, nicht aufdringlich.' },
      { k: 'Hast du durchgehend „sen“ benutzt („Nasılsın?“, „Ateşin var mı?“, „istiyor musun?“)?', e: 'Burak ist ein Freund, also „sen“. Das zeigt sich an -sın/-sin (nasılsın), -in/-ın (ateşin = dein Fieber) und „musun“ (nicht „musunuz“).' },
      { k: 'Steht „sana“ (nicht „sene“ oder „sen’e“) für „zu dir“?', e: 'Das Personalpronomen „sen“ bildet den Dativ unregelmäßig: sen → sana (zu dir), ben → bana (zu mir). Das musst du als Ausnahme lernen.' },
      { k: 'Ist „mı/musun“ getrennt geschrieben und passt zum Vokal?', e: 'Die Fragepartikel schreibt man getrennt: „var mı?“ (a → mı), „istiyor musun?“ (o → mu). Sie richtet sich nach dem letzten Vokal des Wortes davor.' }
    ],
    mistakes: [
      { bad: 'Ateşin var mi?', good: 'Ateşin var mı?', why: 'Nach „var“ (letzter Vokal a) steht „mı“, nicht „mi“.' },
      { bad: 'Seni geliyorum.', good: 'Sana geliyorum.', why: '„gelmek“ (kommen) fragt nach dem Ziel: „zu wem?“ – also Dativ („sana“). „seni“ ist der Akkusativ („dich“) und würde ein Objekt markieren, das man sieht oder trifft.' },
      { bad: 'Cumartesi sana geliyorum saat üçte.', good: 'Cumartesi saat üçte sana geliyorum.', why: 'Das Verb steht am Satzende, die Zeitangabe davor. Und nach ç steht -te: üç → üçte.' }
    ],
    e: 'Die E-Mail ist kurz, weil Burak krank ist: ein Zuspruch, zwei Fragen, ein Besuchsvorschlag. „Geçmiş olsun“ (wörtlich: möge es vorbeigehen) ist die feste Wendung für Kranke. Die Präsensform „geliyorum“ drückt hier aus, dass der Besuch schon geplant ist, ganz wie im Deutschen „Ich komme am Samstag“.' }
]);
