/* Almanca B2 – Schreibwerkstatt / Yazma atölyesi (ADR-13). Format: CLAUDE.md bzw. docs/adr-13-schreiben.md.
 * IDs de-b2-s01 … s03 (Paket P1 „Abwägen & argumentieren“) sind fest (nie ändern, nie neu vergeben). Erklärsprache: Türkisch.
 * Bezug zu den Themen de-b2-08/09/11/12 und zu den Szenarien (Dialoge de-b2-d01…d03).
 * s01, s02 = Meinungstexte (opinion: 1), s03 = formelle Beschwerde. Formelle Anrede ohne Komma. */
window.KOPRU.addWrites('de-b2', [
  { id: 'de-b2-s01', scene: 'arbeit',
    title: 'Meinung im Forum: Vier-Tage-Woche', sub: 'Forumda görüş: dört günlük hafta',
    task: 'Bir forumda „Dört günlük hafta: ilerleme mi, aşırı yük mü?“ sorusuna cevap yaz (du). Kendi görüşünü belirt, bir avantaj ve bir dezavantajı karşılaştır, bir koşul koy ve bir sonuçla bitir. En az üç bağlaç kullan: örneğin „zwar … aber“, „hingegen“, „dennoch“, „sofern“, „so … dass“, „es sei denn“. Görüşün her iki tarafı da adil ele alınmalı.',
    points: ['Kendi görüşün', 'Avantaj ve dezavantaj (karşıtlık)', 'Bir koşul ve genel sonuç'],
    reg: 'du',
    words: { min: 90, ziel: 110 }, opinion: 1,
    chunks: ['Ich halte … für …', 'Zwar …, aber …', 'Ich bin davon überzeugt, dass …', '… hingegen …', 'Dennoch …', 'Insgesamt …'],
    hint: [['halte', 'meinung', 'finde', 'idee'], ['zwar', 'hingegen', 'dennoch', 'allerdings'], ['sofern', 'es sei denn', 'insgesamt', 'überwiegen']],
    model: 'Hallo zusammen,\nich halte die Vier-Tage-Woche für eine gute Idee, sofern die Arbeit gerecht verteilt wird. Zwar arbeitet man an vier Tagen länger, aber ein freier Tag mehr bedeutet Erholung. Ich bin davon überzeugt, dass ausgeruhte Beschäftigte konzentrierter arbeiten. Kleine Betriebe hingegen können freie Tage schwer ersetzen und brauchen deshalb mehr Unterstützung. Dennoch glaube ich, dass sich der Aufwand lohnt: Die Krankmeldungen sinken, und die Firma findet leichter neue Mitarbeiter. Wer das Modell einführt, sollte es zuerst testen, es sei denn, der Betrieb ist so klein, dass jeder Ausfall sofort auffällt. Insgesamt überwiegen für mich die Vorteile.\nViele Grüße\nJana',
    modeln: 'Herkese merhaba,\nİş yükü adil dağıtıldığı takdirde dört günlük haftayı iyi bir fikir olarak görüyorum. Dört gün daha uzun çalışılıyor gerçi, ama fazladan bir boş gün dinlenme demek. Dinlenmiş çalışanların daha odaklı çalıştığına ikna olmuş durumdayım. Küçük işletmeler ise boş günleri zor telafi edebilir ve bu yüzden daha fazla desteğe ihtiyaç duyar. Yine de emeğin karşılığını vereceğine inanıyorum: hastalık bildirimleri azalıyor ve şirket yeni çalışanı daha kolay buluyor. Modeli uygulayacak işletme önce denemeli; yalnızca her eksikliğin hemen göze çarptığı kadar küçük bir işletme bunun dışında kalır. Genel olarak bana göre avantajlar ağır basıyor.\nSelamlar\nJana',
    check: [
      { k: 'Görüşünü ilk cümlelerde açıkça söyledin mi? („Ich halte … für …“, „Meiner Meinung nach …“)', e: 'Forum yazısında okuyucu ilk cümlede senin tarafını anlamalı. Ardından gerekçe ve karşıt görüş gelir.' },
      { k: '„zwar … aber“ ya da „hingegen“ ile en az bir karşıtlık kurdun mu?', e: '„Zwar … , aber …“ ile bir noktayı kabul edip asıl vurguyu karşı noktaya koyarsın. „hingegen“ iki öğeyi karşılaştırır; ana cümlede fiil ikinci sıradadır.' },
      { k: 'Bir koşul ya da istisna kurdun mu? („sofern“, „es sei denn“)', e: '„sofern“ yan cümle açar (fiil sonda). „es sei denn, …“ ardından ana cümle sırasıyla gelir (fiil 2. sırada) ya da „dass“ ile yan cümle.' },
      { k: 'Her iki tarafı da adil anlattın mı ve bir genel sonuçla bitirdin mi? („Insgesamt …“, „Fazit: …“)', e: 'B2 yazılarında yalnızca kendi tarafını yazmak yetmez: karşı görüşü kısaca ele alıp sonra sonuca varırsın.' }
    ],
    mistakes: [
      { bad: 'Obwohl man länger arbeitet, aber ein freier Tag ist wichtig.', good: 'Obwohl man länger arbeitet, ist ein freier Tag wichtig.', why: '„obwohl“ ve „aber“ birlikte kullanılmaz. „obwohl“ yan cümleden sonra ana cümle fiille başlar: „ist ein freier Tag wichtig“. Türkçedeki „-sA da … ama“ gibi iki bağ koyma.' },
      { bad: 'Zwar man arbeitet länger, aber ich finde es gut.', good: 'Zwar arbeitet man länger, aber ich finde es gut.', why: '„zwar“ cümle başına geçerse çekimli fiil hemen arkasından gelir (2. sıra): „Zwar arbeitet man länger“.' },
      { bad: 'Dennoch ich glaube, dass sich der Aufwand lohnt.', good: 'Dennoch glaube ich, dass sich der Aufwand lohnt.', why: '„dennoch“ 1. sırayı doldurur; çekimli fiil 2. sırada gelir ve özne arkasına geçer: „Dennoch glaube ich“.' }
    ],
    e: 'Örnek metin: (1) görüş ve koşul, (2) kabul edilen dezavantaj (zwar … aber), (3) karşıt örnek (hingegen), (4) yine de gerekçe (dennoch), (5) istisna ve sonuç. Bu yapı B2 forum yazılarının kalıbıdır: önce taraf tut, sonra karşı tarafı kısaca kabul et ve sonuca bağla.' },

  { id: 'de-b2-s02', scene: 'arbeit',
    title: 'Leserbrief: Erreichbarkeit nach Feierabend', sub: 'Okur mektubu: mesai sonrası ulaşılabilirlik',
    task: 'Bir gazetenin „Mesai sonrası ulaşılabilirlik“ konulu yazısına okur mektubu yaz (Sie). Her iki tarafı da göz önüne al: işverenin beklentisi ve çalışanın dinlenme hakkı. Kendi görüşünü belirt ve bir çözüm öner. En az üç bağlaç kullan: „einerseits … andererseits“, „folglich“, „obwohl“, „es sei denn“, „allerdings“.',
    points: ['Konuya giriş (yazıya atıf)', 'İki taraf: işverenin beklentisi ve dinlenme ihtiyacı', 'Kendi görüşün ve çözüm önerisi'],
    reg: 'Sie',
    words: { min: 90, ziel: 110 }, opinion: 1,
    chunks: ['Sehr geehrte Redaktion', 'Einerseits …', 'Andererseits …', 'folglich …', 'es sei denn, …', 'Allerdings …', 'Mit freundlichen Grüßen'],
    hint: [['artikel', 'meinung', 'äußern', 'redaktion'], ['einerseits', 'andererseits', 'obwohl', 'folglich'], ['schlage', 'vor', 'es sei denn', 'allerdings']],
    model: 'Sehr geehrte Redaktion\nZu Ihrem Artikel über die ständige Erreichbarkeit möchte ich meine Meinung äußern. Einerseits verstehe ich, dass Vorgesetzte in dringenden Fällen jemanden erreichen müssen. Andererseits braucht jeder nach Feierabend Ruhe, folglich sollte man abends nicht regelmäßig E-Mails beantworten müssen. Obwohl dringende Fälle selten sind, erwarten manche Vorgesetzte sofortige Antworten. Ich schlage deshalb vor, dass Antworten nach Feierabend freiwillig bleiben, es sei denn, es handelt sich um einen echten Notfall. Allerdings sollten Betriebe klare Regeln aufstellen, damit niemand Nachteile fürchtet. Dann profitieren am Ende beide Seiten: Die Beschäftigten bleiben gesund, und die Firma behält ihre Mitarbeiter.\nMit freundlichen Grüßen\nPaul Steiner',
    modeln: 'Sayın Yayın Kurulu\nMesai sonrası sürekli ulaşılabilirlik konulu yazınız hakkında görüşümü belirtmek istiyorum. Bir yandan amirlerin acil durumlarda birine ulaşabilmesi gerektiğini anlıyorum. Öte yandan herkes mesai sonrasında dinlenmeye ihtiyaç duyar; dolayısıyla akşamları düzenli olarak e-postalara cevap vermek zorunda kalınmamalı. Acil durumlar nadir olmasına rağmen bazı amirler hemen cevap bekliyor. Bu yüzden, gerçek bir acil durum söz konusu olmadıkça mesai sonrası cevapların isteğe bağlı kalmasını öneriyorum. Ancak işletmeler, kimsenin dezavantajdan korkmaması için net kurallar koymalı. Böylece sonunda iki taraf da kazanır: Çalışanlar sağlıklı kalır, şirket de çalışanlarını elinde tutar.\nSaygılarımla\nPaul Steiner',
    check: [
      { k: 'Resmî hitap ve kapanış var mı? („Sehr geehrte Redaktion“ … „Mit freundlichen Grüßen“)', e: 'Hitaptan sonra virgül konmaz ve ilk cümle büyük harfle başlar. „Mit freundlichen Grüßen“ kapanışından sonra da virgül yoktur; ad alt satıra yazılır.' },
      { k: 'İki tarafı „einerseits … andererseits“ ile dengeli anlattın mı?', e: 'İkinci kısımda „andererseits“ cümlenin başına geçebilir; fiil hemen arkasında 2. sırada kalır: „Andererseits braucht jeder …“.' },
      { k: '„folglich“ ya da bir sonuç zarfı kullandın mı ve fiilin yerini doğru koydun mu?', e: '„folglich“ bir zarftır: başa geçerse fiil hemen ardından gelir: „Folglich sollte man …“. Cümle ortasında ise özneden sonra durabilir.' },
      { k: 'Bir istisna ya da karşıt bağlaç kullandın mı? („es sei denn“, „obwohl“, „allerdings“)', e: '„obwohl“ yan cümle açar (fiil sonda); „allerdings“ zarftır. „es sei denn, …“ istisna bildirir: „… müsait değilse“ anlamında -madıkça.' }
    ],
    mistakes: [
      { bad: 'Folglich man sollte abends keine E-Mails beantworten.', good: 'Folglich sollte man abends keine E-Mails beantworten.', why: '„folglich“ zarf olarak 1. sırada durur; çekimli fiil hemen 2. sırada gelir ve özne arkasına geçer.' },
      { bad: 'Mit freundlichen Grüßen, Paul Steiner', good: 'Mit freundlichen Grüßen\nPaul Steiner', why: '„Mit freundlichen Grüßen“ kapanışından sonra virgül konmaz; ad alt satıra yazılır.' },
      { bad: 'Es sei denn, es ein Notfall ist.', good: 'Es sei denn, es handelt sich um einen Notfall.', why: '„es sei denn“ ifadesinden sonra çoğunlukla bir ana cümle (fiil 2. sırada) gelir: „es sei denn, es handelt sich um einen Notfall“. Fiili sona atarsan „es sei denn, dass es ein Notfall ist“ demelisin.' }
    ],
    e: 'Okur mektubunda önce yazıya atıf yapar, sonra iki tarafı dengeli anlatır, ardından kendi görüşünü ve çözümünü yazarsın. Resmî dilde „folglich“, „allerdings“, „es sei denn“ gibi zarflar ve bağlaçlar B1 bağlaçlarından daha ağırbaşlı durur.' },

  { id: 'de-b2-s03', scene: 'arbeit',
    title: 'Beschwerde an einen Online-Händler', sub: 'Bir online satıcıya şikâyet',
    task: 'Çevrimiçi bir mağazadan yanlış ürün geldi: Bir masa sipariş ettin, ama bir raf teslim edildi. Mağazanın müşteri hizmetlerine resmî bir şikâyet e-postası yaz (Sie): Ne olduğunu açıkla, ne istediğini söyle (doğru ürün ya da ücret iadesi) ve bir süre koy. En az üç bağlaç kullan: „zwar … allerdings“, „sofern“, „andernfalls“, „dennoch“, „sodass“.',
    points: ['Sipariş ve sorun', 'Talep (doğru ürün veya iade) ve süre', 'Sonuç / olası adım'],
    reg: 'Sie',
    words: { min: 90, ziel: 110 },
    chunks: ['Sehr geehrte Damen und Herren', 'Zwar …, allerdings …', 'Ich bitte Sie daher, …', 'Sofern …', 'Andernfalls …', 'Mit freundlichen Grüßen'],
    hint: [['bestellt', 'geliefert', 'montag', 'schreibtisch'], ['bitte', 'daher', 'liefern', 'erstatten', 'freitag'], ['sofern', 'andernfalls', 'vertrag', 'widerrufen']],
    model: 'Sehr geehrte Damen und Herren\nAm Montag habe ich bei Ihnen einen Schreibtisch bestellt, geliefert wurde jedoch ein Regal. Ich habe sofort Ihren Kundenservice angerufen. Zwar war man dort freundlich, allerdings wurde mir keine Lösung genannt. Ich bitte Sie daher, mir den richtigen Schreibtisch bis nächsten Freitag zu liefern. Sofern er nicht mehr lieferbar ist, erstatten Sie mir bitte bis zum selben Tag den Kaufpreis. Andernfalls sehe ich mich gezwungen, den Vertrag zu widerrufen. Das falsche Regal können Sie gern abholen lassen. Ich bin unter der Nummer auf der Rechnung erreichbar und danke Ihnen für eine schnelle Antwort.\nMit freundlichen Grüßen\nLena Hofmann',
    modeln: 'Sayın Yetkili\nPazartesi günü sizden bir masa sipariş ettim, ancak teslim edilen bir raf oldu. Hemen müşteri hizmetlerinizi aradım. Orada gerçi nazik davranıldı, ancak bana bir çözüm sunulmadı. Bu nedenle doğru masayı gelecek cumaya kadar bana teslim etmenizi rica ediyorum. Masa artık temin edilemiyorsa lütfen satış bedelini aynı güne kadar iade edin. Aksi takdirde sözleşmeden cayma hakkımı kullanmak zorunda kalacağım. Yanlış rafı isterseniz aldırabilirsiniz. Faturadaki numaradan bana ulaşabilirsiniz ve hızlı bir cevap için teşekkür ederim.\nSaygılarımla\nLena Hofmann',
    check: [
      { k: 'Resmî hitap ve kapanış var mı, hitaptan sonra virgül koymadın mı?', e: '„Sehr geehrte Damen und Herren“ (virgülsüz) → ilk cümle büyük harfle başlar. Kapanışta „Mit freundlichen Grüßen“ ve alt satırda adın.' },
      { k: 'Sorunu ve talebini somut yazdın mı? (ne sipariş, ne geldi, ne istiyorsun, hangi süreye kadar)', e: 'Şikâyette tarih, ürün ve talep açık yazılmalı; süre koymak karşı tarafa net bir ölçü verir.' },
      { k: '„zwar … allerdings“ ile adil bir karşıtlık kurdun mu?', e: '„Zwar war man freundlich, allerdings …“ – gerçi nazik davranıldı, ama çözüm yok. İki parça da ana cümledir; „allerdings“ 1. sırada, çekimli fiil 2. sırada durur: „allerdings wurde mir keine Lösung genannt“.' },
      { k: '„sofern“ ve „andernfalls“ ile bir koşul ve sonuç yazdın mı?', e: '„sofern“ yan cümle açar (fiil sonda); „andernfalls“ zarftır ve 1. sırada olursa fiil hemen ardından gelir: „Andernfalls sehe ich mich gezwungen …“.' }
    ],
    mistakes: [
      { bad: 'Sofern das nicht ist möglich, erstatten Sie mir den Kaufpreis.', good: 'Sofern das nicht möglich ist, erstatten Sie mir bitte den Kaufpreis.', why: '„sofern“ yan cümle açar; çekimli fiil (ist) sona gider. Ardından gelen ana cümle fiille başlar: „erstatten Sie …“.' },
      { bad: 'Andernfalls ich werde den Vertrag widerrufen.', good: 'Andernfalls widerrufe ich den Vertrag.', why: '„andernfalls“ 1. sırayı doldurur; fiil 2. sırada gelir ve özne arkasına geçer. Gelecek için „werde“ kullanmak da zorunlu değildir; resmî yazıda Präsens yeterlidir.' },
      { bad: 'Ich bitte Sie daher, mir den Schreibtisch bis Freitag liefern.', good: 'Ich bitte Sie daher, mir den Schreibtisch bis Freitag zu liefern.', why: '„bitten“ ile bağlanan mastar cümlesinde „zu“ gerekir: „… zu liefern“. Türkçede „-mesini rica ediyorum“ tek bir ek taşır; Almancada „zu“ ayrı bir sözcüktür ve fiilin önüne gelir.' }
    ],
    e: 'Resmî şikâyet e-postasında sırayı koru: (1) ne oldu, (2) ne denendi, (3) ne istiyorsun ve ne zamana kadar, (4) olmazsa ne yapacaksın. „zwar … allerdings“ karşı tarafı küçük düşürmeden durumu açıklar; „sofern“ ve „andernfalls“ talebi netleştirir.' }
  ,
  { id: 'de-b2-s04', scene: 'schule',
    title: 'Anfrage zur Anerkennung des Abschlusses', sub: 'Diploma denkliği hakkında bilgi talebi',
    task: 'Türkiye’de inşaat mühendisliği okudun ve diplomanın Almanya’da denkliğini almak (tanınmasını sağlamak) istiyorsun. Yetkili kuruma resmî bir e-posta yaz (Sie): Kendini ve durumunu kısaca anlat, hangi belgelerin gerektiğini ve sürecin ne kadar süreceğini sor, bir danışma randevusu iste. En az üç Genitiv’li edat ya da zaman zarfı kullan: örneğin „bezüglich“, „aufgrund“, „anhand“, „innerhalb“, „mittlerweile“.',
    points: ['Kendini tanıt (diploma, meslek)', 'Belgeler ve süre hakkında sorular', 'Randevu talebi ve kapanış'],
    reg: 'Sie',
    words: { min: 90, ziel: 110 },
    chunks: ['Sehr geehrte Damen und Herren', 'Bezüglich …', 'Aufgrund …', 'Könnten Sie mir bitte mitteilen, …', 'Innerhalb der nächsten …', 'Mit freundlichen Grüßen'],
    hint: [['studium', 'abschluss', 'bauingenieur', 'türkei'], ['unterlagen', 'anhand', 'bezüglich', 'dauer'], ['innerhalb', 'termin', 'vielen dank', 'unterstützung']],
    model: 'Sehr geehrte Damen und Herren\nIch habe in der Türkei ein Studium des Bauingenieurwesens abgeschlossen und möchte bezüglich der Anerkennung meines Abschlusses einige Fragen stellen. Aufgrund meiner Berufserfahrung von fünf Jahren hoffe ich, dass mein Abschluss als gleichwertig gilt. Könnten Sie mir bitte mitteilen, welche Unterlagen ich einreichen muss? Anhand Ihrer Liste bereite ich sie dann vor. Außerdem möchte ich wissen, wie lange die Prüfung dauert und ob die Übersetzungen beglaubigt sein müssen. Innerhalb der nächsten zwei Wochen würde ich gern einen Beratungstermin vereinbaren. Ich bin per E-Mail oder unter der unten genannten Nummer erreichbar. Vielen Dank im Voraus für Ihre Unterstützung.\nMit freundlichen Grüßen\nCem Arslan',
    modeln: 'Sayın Yetkili\nTürkiye’de inşaat mühendisliği okudum ve diplomamın tanınması konusunda birkaç soru sormak istiyorum. Beş yıllık mesleki tecrübem nedeniyle diplomamın denk sayılacağını umuyorum. Hangi belgeleri sunmam gerektiğini lütfen bildirir misiniz? Listenize bakarak hepsini hazırlarım. Ayrıca incelemenin ne kadar sürdüğünü ve çevirilerin yeminli olması gerekip gerekmediğini öğrenmek istiyorum. Önümüzdeki iki hafta içinde bir danışma randevusu almak isterim. E-postayla ya da aşağıdaki numaradan bana ulaşabilirsiniz. Desteğiniz için şimdiden teşekkür ederim.\nSaygılarımla\nCem Arslan',
    check: [
      { k: 'Resmî hitap ve kapanış var mı, hitaptan sonra virgül koymadın mı?', e: '„Sehr geehrte Damen und Herren“ (virgülsüz) → ilk cümle büyük harfle başlar. Kapanışta „Mit freundlichen Grüßen“ ve alt satırda adın.' },
      { k: 'Genitiv’li edat kullandın mı ve artikeli doğru seçtin mi? („bezüglich der Anerkennung“, „aufgrund meiner Erfahrung“)', e: '„bezüglich“, „aufgrund“, „anhand“ Genitiv ister: dişil *der*, eril/nötr *des* + isimde -(e)s: *bezüglich der Anerkennung*, *anhand des Zeugnisses*.' },
      { k: 'Süreyi doğru yazdın mı? („innerhalb von zwei Wochen“ ya da „innerhalb der nächsten zwei Wochen“)', e: 'Sayıdan önce artikel yoksa „innerhalb von + Dativ“, artikel varsa Genitiv: „innerhalb der nächsten zwei Wochen“.' },
      { k: 'Soruları nazikçe sordun mu? („Könnten Sie mir bitte mitteilen, …“)', e: 'Resmî yazıda „Könnten Sie …“ ve „bitte“ ile kibar bir ton kurarsın. Yan cümlede fiil sonda: *welche Unterlagen ich einreichen muss*.' }
    ],
    mistakes: [
      { bad: 'Bezüglich die Anerkennung habe ich eine Frage.', good: 'Bezüglich der Anerkennung habe ich eine Frage.', why: '„bezüglich“ Genitiv ister: dişil isimde *der Anerkennung*. *die* Nominativ/Akkusativ biçimidir ve yazı dilinde yanlıştır.' },
      { bad: 'Innerhalb zwei Wochen möchte ich einen Termin.', good: 'Innerhalb von zwei Wochen möchte ich einen Termin.', why: 'Artikelsiz sayıdan önce „von“ gerekir: *innerhalb von zwei Wochen*. Artikel kullanırsan Genitiv: *innerhalb der nächsten zwei Wochen*.' },
      { bad: 'Ich möchte wissen, welche Unterlagen muss ich einreichen.', good: 'Ich möchte wissen, welche Unterlagen ich einreichen muss.', why: '„welche …“ dolaylı soru olarak yan cümle kurar; çekimli fiil (*muss*) sonda durur.' }
    ],
    e: 'Resmî bir bilgi talebinde sırayı koru: (1) kendini ve durumunu tanıt, (2) açık sorular sor, (3) randevu ya da süre iste, (4) teşekkür et ve kapat. Genitiv’li edatlar (*bezüglich, aufgrund, anhand, innerhalb*) metni yazı diline uygun yapar; unutma: hepsi Genitiv ister.' },

  { id: 'de-b2-s05', scene: 'arzt',
    title: 'Nachricht an die Praxis (Sprachmittlung)', sub: 'Muayenehaneye mesaj (Sprachmittlung)',
    task: 'Annenin sana Türkçe bir mesajı geldi:\n„Kızım, ikinci görüş randevusu perşembe saat on birde. Ama sen o gün işte olacaksın, ben de Almancam yetmediği için tek başıma gitmek istemiyorum. Cuma sabahı olsa olur. Tahlil sonuçlarım ve röntgenlerim bende. Muayenehaneye sen yaz, lütfen; iki gün içinde cevap versinler. Olmazsa gelecek hafta başka bir gün de olur.“\nBu bilgilere göre muayenehaneye annen adına resmî bir mesaj yaz (Sie): Randevuyu ve nedenini söyle, cuma sabahı iste, getirilecek belgeleri belirt, cevap için süre koy ve bir alternatif sun. En az üç yapı kullan: „aufgrund“, „innerhalb von“, „falls“, „sodass“.',
    points: ['Randevu ve neden (annen adına)', 'Yeni gün isteği ve belgeler', 'Cevap süresi ve alternatif'],
    reg: 'Sie',
    words: { min: 90, ziel: 110 },
    chunks: ['Ich schreibe Ihnen im Namen …', 'Aufgrund …', 'Bitte teilen Sie uns innerhalb von … mit', 'Falls …', 'Vielen Dank für Ihre Mühe'],
    hint: [['namen', 'mutter', 'zweitmeinung', 'donnerstag'], ['freitag', 'vormittag', 'befunde', 'röntgenbilder'], ['innerhalb', 'falls', 'alternativ', 'nächste woche']],
    model: 'Sehr geehrte Damen und Herren\nIch schreibe Ihnen im Namen meiner Mutter, Frau Demir. Sie hat am Donnerstag um elf Uhr einen Termin für eine Zweitmeinung. Leider arbeite ich an diesem Tag und kann sie nicht begleiten. Am Freitagvormittag habe ich frei, damit ich sie begleiten kann. Aufgrund ihrer geringen Deutschkenntnisse möchte sie nicht allein kommen. Deshalb bitte ich um einen Termin an diesem Vormittag. Sie bringt alle Befunde und die Röntgenbilder mit. Bitte teilen Sie uns innerhalb von zwei Tagen mit, ob der Termin möglich ist. Falls nicht, nennen Sie uns bitte einen anderen Tag in der nächsten Woche. Vielen Dank für Ihre Mühe.\nMit freundlichen Grüßen\nLena Demir',
    modeln: 'Sayın Yetkili\nAnnem Bayan Demir adına yazıyorum. Perşembe günü saat on birde ikinci görüş için randevusu var. Ne yazık ki o gün çalışıyorum ve ona eşlik edemem. Cuma sabahı iznim var, o zaman ona eşlik edebilirim. Almanca bilgisi yetersiz olduğu için tek başına gelmek istemiyor. Bu yüzden o sabah için bir randevu rica ediyorum. Tüm tahlil sonuçlarını ve röntgenleri yanında getirecek. Lütfen iki gün içinde randevunun mümkün olup olmadığını bildirin. Olmazsa lütfen gelecek haftadan başka bir gün önerin. Zahmetiniz için teşekkür ederim.\nSaygılarımla\nLena Demir',
    check: [
      { k: 'Mesajda kimin adına yazdığını belirttin mi? („Ich schreibe Ihnen im Namen meiner Mutter …“)', e: 'Sprachmittlung’de önce kimin adına konuştuğunu söylersin; „im Namen + Genitiv“ resmî bir kalıptır.' },
      { k: 'Mesajdaki bilgiler (gün, saat, belgeler, cevap süresi) eksiksiz aktarıldı mı?', e: 'Sprachmittlung’de kelime kelime çeviri istenmez; asıl bilgiler eksiksiz ve doğru gelmeli: perşembe on bir, cuma sabahı, tahlil ve röntgen, iki gün, alternatif.' },
      { k: 'Resmî hitap ve kapanış var mı, hitaptan sonra virgül koymadın mı?', e: '„Sehr geehrte Damen und Herren“ (virgülsüz) → ilk cümle büyük harfle başlar. Kapanışta „Mit freundlichen Grüßen“ ve alt satırda adın.' },
      { k: '„aufgrund“, „innerhalb von“ ve „falls“ cümlelerini doğru kurdun mu?', e: '„aufgrund + Genitiv“, „innerhalb von + Dativ“; „falls“ yan cümle açar (fiil sonda): *Falls das nicht möglich ist, …*' }
    ],
    mistakes: [
      { bad: 'Aufgrund ihre geringe Deutschkenntnisse kommt sie nicht allein.', good: 'Aufgrund ihrer geringen Deutschkenntnisse kommt sie nicht allein.', why: '„aufgrund“ Genitiv ister; çoğul Genitiv’de iyelik sözcüğü *ihrer*, sıfat *-en* alır: *ihrer geringen Deutschkenntnisse*.' },
      { bad: 'Falls ist der Termin nicht möglich, rufen Sie mich an.', good: 'Falls der Termin nicht möglich ist, rufen Sie mich an.', why: '„falls“ yan cümle açar; çekimli fiil (*ist*) sonda durur. Ardından ana cümle fiille başlar: *rufen Sie …*' },
      { bad: 'Bitte teilen Sie uns innerhalb zwei Tage mit.', good: 'Bitte teilen Sie uns innerhalb von zwei Tagen mit.', why: 'Artikelsiz sayıdan önce *von* gerekir ve isim Dativ’dedir: *von zwei Tagen*. *mitteilen* ayrılabilen fiildir: *teilen … mit*.' }
    ],
    e: 'Sprachmittlung’de önce metnin amacını anlarsın (randevuyu kaydırmak), sonra karşı tarafın ihtiyaç duyduğu bilgileri sırayla yazarsın: kimin adına, ne istiyorsun, hangi belgeler, ne zamana kadar cevap. Türkçedeki duygusal ayrıntıları (örneğin “Almancam yetmez”) kısa ve kibar bir gerekçeye dönüştürürsün.' }
]);
