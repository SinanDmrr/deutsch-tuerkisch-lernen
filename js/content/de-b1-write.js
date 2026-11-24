/* Almanca B1 – Schreibwerkstatt / Yazma atölyesi (ADR-13). Format: CLAUDE.md bzw. docs/adr-13-schreiben.md.
 * IDs de-b1-s01 … s06 sind fest (nie ändern, nie neu vergeben). Erklärsprache: Türkisch.
 * Bezug zu den Szenarien (Dialoge de-b1-d01…d05) und zu den Konnektoren (de-b1-07, de-b1-16). */
window.KOPRU.addWrites('de-b1', [
  { id: 'de-b1-s01', scene: 'arbeit',
    title: 'Bewerbung per E-Mail', sub: 'E-postayla iş başvurusu',
    task: 'Bir süpermarkette „Kassierer / Kassiererin“ ilanı gördün. Şirkete resmî bir e-posta yaz (Sie): Hangi ilana başvurduğunu, hangi tecrüben olduğunu söyle ve bir görüşme randevusu iste. En az iki bağlaç kullan (örneğin „obwohl“, „da“, „falls“, „sodass“).',
    points: ['Hangi kadroya başvurduğun', 'Tecrüben ve güçlü yönün', 'Görüşme randevusu ricası'],
    reg: 'Sie',
    words: { min: 60, ziel: 90 },
    chunks: ['Sehr geehrte Damen und Herren,', 'ich bewerbe mich um die Stelle als …', 'Da ich …, …', 'Falls Sie …, …', 'Mit freundlichen Grüßen'],
    hint: [['stelle', 'bewerbe', 'kassierer'], ['erfahrung', 'jahre', 'zuverlässig', 'da '], ['gespräch', 'termin', 'falls']],
    model: 'Sehr geehrte Damen und Herren,\nich bewerbe mich um die Stelle als Kassierer in Ihrem Supermarkt, die ich auf Ihrer Internetseite gefunden habe. Da ich drei Jahre in einem Laden gearbeitet habe, kenne ich die Arbeit an der Kasse gut. Ich bin zuverlässig. Obwohl ich nebenbei einen Deutschkurs besuche, kann ich flexibel arbeiten. Falls Sie weitere Unterlagen brauchen, schicke ich sie Ihnen sofort. Ich würde mich über ein Vorstellungsgespräch sehr freuen und bin am Vormittag und am Wochenende erreichbar.\nMit freundlichen Grüßen\nDeniz Arslan',
    modeln: 'Sayın Yetkili,\nİnternet sayfanızda bulduğum süpermarketinizdeki kasiyer kadrosuna başvuruyorum. Bir markette üç yıl çalıştığım için kasada çalışmayı iyi biliyorum. Güvenilirim. Bir yandan Almanca kursuna gitmeme rağmen esnek çalışabilirim. Başka belgelere ihtiyacınız olursa hemen gönderirim. Bir iş görüşmesi için çok sevinirim; öğleden önce ve hafta sonları ulaşılabilirim.\nSaygılarımla\nDeniz Arslan',
    check: [
      { k: 'Resmî hitap ve kapanış var mı? („Sehr geehrte Damen und Herren,“ … „Mit freundlichen Grüßen“)', e: 'Resmî e-postada hitap virgülle biter ve ilk cümle küçük harfle başlar. „Mit freundlichen Grüßen“dan sonra virgül konmaz; alt satıra adın gelir.' },
      { k: 'En az iki bağlaç kullandın mı ve fiil yan cümlede sonda mı? (da, obwohl, falls, sodass)', e: '„Da ich drei Jahre gearbeitet habe“, „Falls Sie weitere Unterlagen brauchen“: yan cümlede çekimli fiil en sondadır. Yan cümle başta ise ana cümle fiille başlar: „Da ich …, kenne ich …“.' },
      { k: 'Baştan sona „Sie“ mi kullandın? („Ihr“, „Ihnen“ büyük harfle)', e: 'Resmî metinde hitap zamirleri büyük yazılır: „Sie“, „Ihnen“, „Ihre“. „du“ ile karıştırma.' },
      { k: 'Randevu ricasını kibar yazdın mı? („Ich würde mich freuen …“)', e: 'Doğrudan „Ich will einen Termin“ yerine Konjunktiv II ile „Ich würde mich über ein Gespräch freuen“ daha kibardır.' }
    ],
    mistakes: [
      { bad: 'Da ich habe drei Jahre gearbeitet, kenne ich die Kasse.', good: 'Da ich drei Jahre gearbeitet habe, kenne ich die Kasse.', why: '„da“ yan cümle açar; çekimli fiil sona gider: „Da ich … gearbeitet habe“. Ardından gelen ana cümlede fiil hemen gelir: „kenne ich“.' },
      { bad: 'Obwohl ich nebenbei einen Deutschkurs besuche, aber ich kann flexibel arbeiten.', good: 'Obwohl ich nebenbei einen Deutschkurs besuche, kann ich flexibel arbeiten.', why: '„obwohl“ ile „aber“ birlikte kullanılmaz. Yan cümleden sonra ana cümle fiille başlar: „kann ich“.' },
      { bad: 'Mit freundlichen Grüßen, Deniz Arslan', good: 'Mit freundlichen Grüßen\nDeniz Arslan', why: '„Mit freundlichen Grüßen“dan sonra virgül konmaz; ad alt satıra yazılır.' }
    ],
    e: 'Örnek metin üç adımda ilerliyor: Önce kadro ve kaynak, sonra tecrübe (da-cümlesi) ve güçlü yön (obwohl-cümlesi), en sonda belge ve görüşme ricası (falls-cümlesi). Her bağlaçta fiil yan cümlenin sonuna gider; bu, Türkçedeki fiil sonda düzenine çok benzediği için sana kolay gelecektir.' },

  { id: 'de-b1-s02', scene: 'arbeit',
    title: 'Schichttausch mit einem Kollegen', sub: 'İş arkadaşıyla vardiya değişimi',
    task: 'İş arkadaşın Tim’e kısa bir mesaj yaz (du): Cumartesi çalışamadığını, Tim’in cumartesi vardiyanı üstlenip üstlenemeyeceğini sor ve karşılığında ne yapabileceğini söyle. Mesajda „sodass“ ya da „je … desto“ kullan.',
    points: ['Neden cumartesi çalışamadığın', 'Cumartesi vardiyası için ricaların', 'Karşılığında önerin'],
    reg: 'du',
    words: { min: 45, ziel: 75 },
    chunks: ['Hast du kurz Zeit?', 'Ich kann am Samstag leider nicht arbeiten, weil …', 'Könntest du …?', 'Dafür übernehme ich …', 'Je früher …, desto …'],
    hint: [['samstag', 'nicht arbeiten', 'weil'], ['schicht', 'könntest', 'übernehmen'], ['dafür', 'übernehme', 'je ']],
    model: 'Hallo Tim,\nhast du kurz Zeit? Ich kann am Samstag leider nicht arbeiten, weil ich einen Arzttermin habe, der schon lange feststeht. Könntest du am Samstag meine Schicht übernehmen? Dafür übernehme ich deine Schicht am Sonntag, sodass jeder von uns einen Tag frei hat. Je früher wir es mit Frau Roth besprechen, desto besser. Was meinst du?\nDanke dir und viele Grüße\nElif',
    modeln: 'Merhaba Tim,\nkısa bir süren var mı? Cumartesi maalesef çalışamıyorum, çünkü çoktan belli olan bir doktor randevum var. Cumartesi benim vardiyamı üstlenebilir misin? Karşılığında pazar günkü vardiyanı ben alırım, böylece her birimizin bir günü boş olur. Roth Hanım’la ne kadar erken konuşursak o kadar iyi. Sen ne dersin?\nTeşekkürler, sevgiler\nElif',
    check: [
      { k: '„weil“ cümlesinde fiil en sonda mı?', e: '„weil ich einen Arzttermin habe“: çekimli fiil sona gider. „weil ich habe einen Arzttermin“ yanlıştır.' },
      { k: '„sodass“ ya da „je … desto“ doğru kurulmuş mu?', e: '„sodass jeder von uns einen Tag frei hat“: yan cümle, fiil sonda. „Je früher wir es besprechen, desto besser“: je-cümlesinde fiil sonda, desto-kısmı kısa olabilir.' },
      { k: 'Rica kibar mı? („Könntest du …?“)', e: 'Arkadaşa da „Kannst du …?“ denir; „Könntest du …?“ ise daha yumuşaktır ve vardiya gibi bir ricada hoş durur.' },
      { k: 'Baştan sona „du“ mu kullandın? („dir“, „deine“)', e: 'İş arkadaşına birbirinize „du“ diyorsanız tüm mesajda „du“ kullan: „Hast du …?“, „deine Schicht“.' }
    ],
    mistakes: [
      { bad: 'Ich kann nicht arbeiten, weil ich habe einen Arzttermin.', good: 'Ich kann nicht arbeiten, weil ich einen Arzttermin habe.', why: '„weil“ yan cümlede çekimli fiili sona atar: „… einen Arzttermin habe“.' },
      { bad: 'Je früher wir sprechen, desto besser wir sind.', good: 'Je früher wir sprechen, desto besser ist es.', why: '„desto“dan sonra çekimli fiil hemen gelir ve cümle bir anlam taşımalıdır: „desto besser ist es“.' },
      { bad: 'Kannst du meine Schicht übernimmst?', good: 'Kannst du meine Schicht übernehmen?', why: '„Kannst du …?“ gibi bir modal fiilden sonra fiil mastar halinde sona gider: „übernehmen“.' }
    ],
    e: 'Örnek mesaj kısa ama eksiksiz: Önce neden çalışamadığını söylüyor („weil“), sonra rica ediyor („Könntest du …?“), ardından karşılık öneriyor („Dafür übernehme ich …“). Bağlaçlar mesajı sertleştirmek yerine açık ve kibar yapıyor.' },

  { id: 'de-b1-s03', scene: 'laden',
    title: 'Reklamation: kaputte Lieferung', sub: 'Hasarlı teslimat için şikâyet',
    task: 'İnternetten bir kulaklık sipariş ettin; paket hasarlı geldi ve fatura yanlış. Mağazaya resmî bir e-posta yaz (Sie): Ne sipariş ettiğini, ne sorunlar olduğunu anlat ve ne istediğini (değişim ya da iade) söyle. „obwohl“, „falls“ ve bir Passiv cümlesi kullan.',
    points: ['Sipariş ve teslimat', 'Sorunlar (hasar, fatura)', 'İstediğin çözüm ve süre'],
    reg: 'Sie',
    words: { min: 60, ziel: 90 },
    chunks: ['Sehr geehrte Damen und Herren,', 'Das Paket wurde …', 'obwohl …', 'Ich bitte Sie, …', 'Falls …', 'Mit freundlichen Grüßen'],
    hint: [['bestellt', 'kopfhörer', 'lieferung'], ['kaputt', 'rechnung', 'betrag', 'obwohl'], ['bitte', 'erstatten', 'ersetzen', 'falls', 'tage']],
    model: 'Sehr geehrte Damen und Herren,\nvor einer Woche habe ich bei Ihnen Kopfhörer bestellt. Das Paket wurde pünktlich geliefert, aber die Kopfhörer sind kaputt. Außerdem steht auf der Rechnung ein falscher Betrag, obwohl im Angebot ein niedrigerer Preis stand. Ich bitte Sie, mir neue Kopfhörer zu schicken oder den Betrag zu erstatten. Falls Sie ein Foto brauchen, schicke ich es Ihnen gern. Ich erwarte Ihre Antwort innerhalb von zehn Tagen.\nMit freundlichen Grüßen\nSelin Aydın',
    modeln: 'Sayın Yetkili,\nbir hafta önce sizden bir kulaklık sipariş ettim. Paket zamanında teslim edildi ama kulaklık bozuk. Ayrıca tekliflerde daha düşük bir fiyat yazmasına rağmen faturada yanlış bir tutar yazıyor. Bana yeni bir kulaklık göndermenizi ya da tutarı iade etmenizi rica ediyorum. Fotoğrafa ihtiyacınız olursa memnuniyetle gönderirim. Cevabınızı on gün içinde bekliyorum.\nSaygılarımla\nSelin Aydın',
    check: [
      { k: 'En az bir Passiv cümlesi var mı? („wurde geliefert“)', e: 'Teslimat gibi süreçlerde kimin yaptığı önemli olmadığı için Passiv doğaldır: „Das Paket wurde geliefert.“ Präteritum: wurde + Partizip II.' },
      { k: '„obwohl“ cümlesinde fiil sonda mı ve karşıtlık gerçekten var mı?', e: '„… steht ein falscher Betrag, obwohl im Angebot ein niedrigerer Preis stand“: iki bilgi birbirine ters. Fiil yan cümlenin sonunda: „stand“ (Präteritum, tek fiil).' },
      { k: 'Talebini kibar ve net yazdın mı? („Ich bitte Sie, … zu …“)', e: 'Resmî rica: „Ich bitte Sie, mir neue Kopfhörer zu schicken.“ *zu* + Infinitiv grubu sonda gelir.' },
      { k: 'Bir süre (Frist) verdin mi?', e: '„innerhalb von zehn Tagen“ gibi bir süre cevabı hızlandırır ve profesyonel durur. Süreyi cümleye kısaca ekle.' }
    ],
    mistakes: [
      { bad: 'Das Paket hat geliefert.', good: 'Das Paket wurde geliefert.', why: '„liefern“ burada edilgendir; paketi kimin getirdiği önemli değil. Aktif „hat geliefert“ öznenin işi yaptığını söyler (Der Fahrer hat das Paket geliefert).' },
      { bad: 'Ich bitte Sie, schicken Sie mir neue Kopfhörer.', good: 'Ich bitte Sie, mir neue Kopfhörer zu schicken.', why: '„bitten“ ile **zu**-Infinitiv grubu kurulur; ikinci bir ana cümle değil. „zu“ Infinitiv’in hemen önünde durur.' },
      { bad: 'Falls Sie brauchen ein Foto, ich schicke es.', good: 'Falls Sie ein Foto brauchen, schicke ich es Ihnen.', why: '„falls“ yan cümle açar: fiil sonda („brauchen“). Sonra ana cümle fiille başlar: „schicke ich“.' }
    ],
    e: 'Örnek e-posta resmî şikâyetin klasik sırasını izliyor: Ne sipariş edildi → ne bozuk → ne isteniyor → hangi sürede. Passiv („wurde geliefert“) olayı nesnel anlatır; „obwohl“ fatura hatasının tutarsızlığını vurgular; „falls“ ile iş birliği teklif edersin.' },

  { id: 'de-b1-s04', scene: 'amt',
    title: 'Kündigung eines Vertrags', sub: 'Bir sözleşmeyi feshetmek için mektup',
    task: 'Bir spor salonuyla yaptığın sözleşmeyi feshetmek istiyorsun. Resmî bir mektup yaz (Sie): Adını ve müşteri numaranı, sözleşmenin ne zaman bitmesini istediğini ve yazılı onay istediğini yaz. „da“, „falls“ ve „damit“ ya da „um … zu“ kullan.',
    points: ['Sözleşme ve müşteri numarası', 'Fesih tarihi ve nedeni', 'Yazılı onay ricası'],
    reg: 'Sie',
    words: { min: 55, ziel: 85 },
    chunks: ['Betreff: Kündigung', 'hiermit kündige ich …', 'Da …', 'Bitte bestätigen Sie mir …', 'Falls …', 'Mit freundlichen Grüßen'],
    hint: [['vertrag', 'kundennummer'], ['kündige', 'zum', 'da '], ['bestätigen', 'schriftlich', 'falls']],
    model: 'Betreff: Kündigung meines Vertrags, Kundennummer 4711\nSehr geehrte Damen und Herren,\nhiermit kündige ich meinen Vertrag zum Ende des Monats. Da ich im Sommer umziehe, kann ich das Studio nicht mehr besuchen. Bitte bestätigen Sie mir die Kündigung schriftlich, damit ich sie für meine Unterlagen habe. Falls Sie noch Fragen haben, erreichen Sie mich per E-Mail.\nMit freundlichen Grüßen\nOkan Polat',
    modeln: 'Konu: Sözleşmemin feshi, müşteri numarası 4711\nSayın Yetkili,\nişbu mektupla sözleşmemi ay sonu itibarıyla feshediyorum. Yazın taşınacağım için salona artık gelemem. Lütfen feshi bana yazılı olarak onaylayın, belgelerim arasında bulunsun diye. Başka sorularınız olursa bana e-postayla ulaşabilirsiniz.\nSaygılarımla\nOkan Polat',
    check: [
      { k: 'Konu satırı ve müşteri numarası var mı?', e: 'Resmî fesih mektubunda şirketin dosyayı hemen bulması için müşteri numarası ve konu satırı (Betreff) gerekir.' },
      { k: '„hiermit kündige ich …“ ile açık bir fesih ifadesi yazdın mı?', e: '„hiermit“ resmî dilde „işbu mektupla“ demektir. Fesih cümlesi belirsiz kalmamalı: „… kündige ich meinen Vertrag zum …“.' },
      { k: 'Bağlaçlarda fiil sonda mı? („da“, „damit“, „falls“)', e: '„Da ich im Sommer umziehe“, „damit ich sie für meine Unterlagen habe“, „Falls Sie noch Fragen haben“ – hepsinde çekimli fiil yan cümlenin sonunda.' },
      { k: 'Yazılı onay istedin mi? („Bitte bestätigen Sie mir …“)', e: 'Sadece sözlü onay yeterli olmaz; „schriftlich“ ile yazılı onay istemek sonradan kanıt sağlar.' }
    ],
    mistakes: [
      { bad: 'Ich kündige den Vertrag, da ich ziehe um.', good: 'Ich kündige den Vertrag, da ich umziehe.', why: '„umziehen“ ayrılabilen fiildir; ama yan cümlede ön ek ve kök bir arada, sonda yazılır: „da ich umziehe“.' },
      { bad: 'Bitte bestätigen Sie mich die Kündigung.', good: 'Bitte bestätigen Sie mir die Kündigung.', why: '„bestätigen“ burada kişiye (Dativ) onay verir: „mir“; şey (die Kündigung) Akkusativ.' },
      { bad: 'Damit ich sie habe für meine Unterlagen.', good: 'Damit ich sie für meine Unterlagen habe.', why: '„damit“ yan cümle açar: çekimli fiil en sona gider: „… für meine Unterlagen habe“.' }
    ],
    e: 'Fesih mektubu kısa ama kesin olmalı. Örnek metin: konu satırı, açık fesih cümlesi, bir sebep („da“), yazılı onay ricası („damit“) ve iletişim önerisi („falls“). Bağlaçlarda fiil sona gider; mektubun düzgün görünmesi için hitap virgülle, kapanış virgülsüz yazılır.' },

  { id: 'de-b1-s05', scene: 'wohnung',
    title: 'Zettel an die Nachbarn', sub: 'Komşulara not',
    task: 'Komşuların akşam geç saatlerde gürültü yapıyor ve merdiven boşluğunda ayakkabılar duruyor. Onlara kibar bir not yaz (du): Sorunu söyle, anlayış göster ve bir çözüm öner. „obwohl“, „weder … noch“ ya da „je … desto“ kullan.',
    points: ['Sorun ve sebebi', 'Anlayış göstermen', 'Çözüm önerin'],
    reg: 'du',
    words: { min: 45, ziel: 75 },
    chunks: ['Liebe Nachbarn,', 'Ich möchte euch bitten, …', 'Ich verstehe, dass …, obwohl …', 'Wie wäre es, wenn …?', 'Danke für euer Verständnis!'],
    hint: [['lärm', 'abends', 'schuhe', 'treppenhaus'], ['verstehe', 'obwohl'], ['wie wäre', 'danke']],
    model: 'Liebe Nachbarn,\nich möchte euch bitten, abends nach zehn Uhr etwas leiser zu sein. Ich verstehe, dass man auch mal Besuch hat, obwohl ich am nächsten Morgen früh aufstehen muss. Weder ich noch meine Familie wollen Streit. Wie wäre es, wenn wir eine feste Ruhezeit vereinbaren? Außerdem stehen oft Schuhe im Treppenhaus. Je sauberer es dort ist, desto angenehmer ist es für alle. Danke für euer Verständnis!\nViele Grüße\nLeyla aus dem zweiten Stock',
    modeln: 'Sevgili komşular,\nsizden akşamları saat ondan sonra biraz daha sessiz olmanızı rica ediyorum. Ertesi sabah erken kalkmam gerekmesine rağmen arada misafiriniz olabileceğini anlıyorum. Ne ben ne de ailem kavga istiyor. Sabit bir sessizlik saati kararlaştırsak nasıl olur? Ayrıca merdiven boşluğunda sık sık ayakkabılar duruyor. Orası ne kadar temiz olursa herkes için o kadar hoş olur. Anlayışınız için teşekkürler!\nSevgiler\nİkinci kattan Leyla',
    check: [
      { k: 'Sorunu suçlamadan anlattın mı?', e: 'Komşuya yazarken „Ihr seid zu laut!“ gibi suçlayıcı cümle yerine „Ich möchte euch bitten, … zu sein“ gibi kibar rica dili daha etkili olur.' },
      { k: '„obwohl“ cümlesinde karşıtlık gerçekten var mı ve fiil sonda mı?', e: '„Ich verstehe, dass man Besuch hat, obwohl ich … früh aufstehen muss“: iki bilgi karşıt. „obwohl“dan sonra „aber“ kullanılmaz.' },
      { k: '„weder … noch“ ya da „je … desto“ kullandın mı?', e: '„Weder ich noch meine Familie wollen Streit“: „nicht“ yok; fiil iki özneye uyduğu için çoğul (wollen). „Je sauberer es ist, desto angenehmer ist es“.' },
      { k: 'Bir çözüm önerdin mi? („Wie wäre es, wenn …?“)', e: 'Sadece sorunu söylemek değil, çözüm önermek notu yapıcı yapar. „wenn“ yan cümlesinde fiil sonda: „wenn wir eine Ruhezeit vereinbaren“.' }
    ],
    mistakes: [
      { bad: 'Weder ich noch meine Familie wollen keinen Streit.', good: 'Weder ich noch meine Familie wollen Streit.', why: '„weder … noch“ zaten olumsuzdur; „keinen“ eklemek çifte olumsuzluk yapar.' },
      { bad: 'Je sauberer es ist, desto angenehmer es ist.', good: 'Je sauberer es ist, desto angenehmer ist es.', why: '„desto“dan sonra fiil hemen gelir: „desto angenehmer ist es“. Yan cümle gibi fiili sona koyma.' },
      { bad: 'Wie wäre es, wenn wir vereinbaren eine Ruhezeit?', good: 'Wie wäre es, wenn wir eine Ruhezeit vereinbaren?', why: '„wenn“ yan cümle açar: çekimli fiil sona gider: „… eine Ruhezeit vereinbaren“.' }
    ],
    e: 'Örnek not nazik bir ton kuruyor: Önce rica („Ich möchte euch bitten“), sonra anlayış („Ich verstehe, dass …, obwohl …“), sonra çözüm („Wie wäre es, wenn …?“). „weder … noch“ ve „je … desto“ notu daha akıcı yapar.' },

  { id: 'de-b1-s06', scene: 'freizeit',
    title: 'Meinung im Forum: Homeoffice oder Büro?', sub: 'Forumda görüş yazmak: ev ofis mi, ofis mi?',
    task: 'Bir forumda „Ev ofis mi, ofis mi?“ sorusuna cevap yaz (du): Kendi görüşünü söyle, bir avantaj ve bir dezavantajı belirt ve görüşünü gerekçelendir. „einerseits … andererseits“, „sowohl … als auch“ ya da „zwar … aber“ kullan.',
    points: ['Kendi görüşün', 'Avantaj ve dezavantaj', 'Gerekçen'],
    reg: 'du',
    words: { min: 55, ziel: 85 },
    chunks: ['Meiner Meinung nach …', 'Einerseits …', 'Andererseits …', 'Sowohl … als auch …', 'Deshalb …'],
    hint: [['meinung', 'finde', 'homeoffice'], ['einerseits', 'andererseits', 'zwar'], ['deshalb', 'weil', 'da ']],
    model: 'Hallo zusammen,\nmeiner Meinung nach ist eine Mischung am besten. Einerseits spart man im Homeoffice viel Zeit, weil man nicht zur Arbeit fahren muss. Andererseits fehlt der Kontakt zu den Kollegen. Zwar ist es zu Hause ruhiger, aber bei Problemen kann man nicht schnell nachfragen. Sowohl die Firma als auch die Mitarbeiter haben Vorteile, wenn man zwei Tage zu Hause und drei Tage im Büro arbeitet. Deshalb würde ich diese Lösung empfehlen.\nViele Grüße',
    modeln: 'Herkese merhaba,\nbence en iyisi karma bir düzen. Bir yandan ev ofiste işe gitmek zorunda olmadığımız için çok zaman kazanıyoruz. Öbür yandan iş arkadaşlarıyla temas eksik kalıyor. Evde daha sessiz olsa da sorun çıkınca hızlıca sormak mümkün değil. İki gün evde, üç gün ofiste çalışırsak hem şirketin hem de çalışanların avantajı olur. Bu yüzden bu çözümü öneririm.\nSevgiler',
    check: [
      { k: 'Görüşünü açık söyledin mi? („Meiner Meinung nach …“)', e: '„Meiner Meinung nach“ görüşü başlatan kalıptır. Hemen ardından fiil gelir: „… ist eine Mischung am besten.“' },
      { k: 'İki yanı dengeli gösterdin mi? („einerseits … andererseits“)', e: '„Einerseits …, andererseits …“ iki zıt tarafı adil biçimde yan yana koyar. Her ikisinde de fiil 2. sırada kalır.' },
      { k: '„zwar … aber“ ya da „sowohl … als auch“ doğru mu?', e: '„Zwar ist es ruhiger, aber …“: *zwar* cümle başında ya da fiilden sonra durabilir (*Es ist zwar ruhiger, aber …*); *aber* karşıt bilgiyi başlatır. „sowohl A als auch B“ iki isim ya da özneyi bağlar.' },
      { k: 'Gerekçeni bağlaçla verdin mi? („weil“, „da“, „deshalb“)', e: '„Deshalb würde ich … empfehlen“: *deshalb* ana cümle açar, fiil hemen arkasından gelir.' }
    ],
    mistakes: [
      { bad: 'Einerseits man spart Zeit, andererseits fehlt der Kontakt.', good: 'Einerseits spart man Zeit, andererseits fehlt der Kontakt.', why: '„Einerseits“ cümlenin 1. sırasını doldurur; çekimli fiil hemen gelir: „spart man“.' },
      { bad: 'Zwar ist es ruhiger, sondern es ist nicht sozial.', good: 'Zwar ist es ruhiger, aber es ist nicht sozial.', why: '„zwar“ ile **aber** kullanılır. „sondern“ olumsuzdan sonra “değil, tersine” anlamı verir; burada ödün + karşıtlık var.' },
      { bad: 'Sowohl die Firma und die Mitarbeiter haben Vorteile.', good: 'Sowohl die Firma als auch die Mitarbeiter haben Vorteile.', why: '„sowohl“ ile **als auch** kullanılır; „und“ değil.' }
    ],
    e: 'Forum yazısı görüşü gerekçelendirmenin klasik örneğidir: Önce kendi fikrin, sonra „einerseits … andererseits“ ile iki yan, „zwar … aber“ ile bir ödün, sonra „sowohl … als auch“ ile ortak fayda ve en sonda „deshalb“ ile sonuç. Böylece hem net hem adil bir görüş yazmış olursun.' },
  { id: 'de-b1-s07', scene: 'arzt', title: 'Eine Reha beantragen', sub: 'Rehabilitasyon başvurusu: Krankenkasse oder Rentenversicherung',
    task: 'Sağlık sigortana resmî bir e-posta yaz. Doktorun sana rehabilitasyon önerdi. Kendini tanıt, rehabilitasyon başvurusu için bilgi iste, ne zaman başlamak istediğini belirt ve bir koşul cümlesi kur („Wenn …, könnte …“ ya da „Ich würde … , wenn …“).',
    points: ['Kendini tanıt ve nedenini söyle', 'Bilgi ve başvuru belgeleri iste', 'Zamanı ve koşulu belirt'],
    reg: 'Sie',
    words: { min: 60, ziel: 90 },
    chunks: ['Sehr geehrte Damen und Herren,', 'Mein Arzt hat mir … empfohlen.', 'Ich hätte gern …', 'Wenn …, könnte …', 'Mit freundlichen Grüßen'],
    hint: [['empfohlen', 'arzt', 'reha'], ['informationen', 'antrag', 'unterlagen', 'hätte'], ['wenn', 'könnte', 'würde']],
    model: 'Sehr geehrte Damen und Herren,\nmein Name ist Meral Çelik, meine Versichertennummer lautet ... Mein Orthopäde hat mir eine Reha empfohlen, weil ich seit Monaten starke Rückenschmerzen habe. Ich hätte gern Informationen zum Antrag und zu den nötigen Unterlagen. Außerdem würde ich gern wissen, wie lange die Prüfung dauert. Wenn alles gut läuft, könnte die Reha im Frühling beginnen. Könnten Sie mir bitte die Formulare zuschicken?\nVielen Dank im Voraus.\nMit freundlichen Grüßen\nMeral Çelik',
    modeln: 'Sayın Yetkili,\nAdım Meral Çelik, sigorta numaram … Ortopedi doktorum bana rehabilitasyon önerdi, çünkü aylardır şiddetli sırt ağrım var. Başvuru ve gerekli belgeler hakkında bilgi almak isterdim. Ayrıca incelemenin ne kadar sürdüğünü de öğrenmek isterim. Her şey yolunda giderse rehabilitasyon ilkbaharda başlayabilir. Formları bana gönderebilir misiniz?\nŞimdiden teşekkürler.\nSaygılarımla\nMeral Çelik',
    check: [
      { k: 'Resmî hitap ve veda kullandın mı?', e: '„Sehr geehrte Damen und Herren,“ ile başla, „Mit freundlichen Grüßen“ ile bitir; veda sonrasında virgül konmaz.' },
      { k: '„Ich hätte gern …“ ya da „Könnten Sie …?“ ile kibar rica ettin mi?', e: 'Konjunktiv II resmî yazışmada kibarlık sağlar. „Ich will …“ ya da emir kipi fazla sert durur.' },
      { k: 'Koşul cümlesi doğru mu? („Wenn alles gut läuft, könnte …“)', e: '„wenn“ yan cümlesinde fiil sonda; ardından ana cümle fiille başlar: „Wenn alles gut läuft, könnte die Reha …“.' },
      { k: '„weil“ ile neden verdin mi?', e: '„weil ich … habe“: fiil yan cümlenin sonunda.' }
    ],
    mistakes: [
      { bad: 'Ich will eine Reha. Schicken Sie die Formulare.', good: 'Ich hätte gern Informationen zur Reha. Könnten Sie mir die Formulare schicken?', why: 'Resmî yazışmada „will“ ve emir kipi sert durur; kibar rica için Konjunktiv II kullanılır.' },
      { bad: 'Wenn alles gut läuft, die Reha könnte im Frühling beginnen.', good: 'Wenn alles gut läuft, könnte die Reha im Frühling beginnen.', why: '„wenn“ yan cümlesinden sonra ana cümle fiille başlar (fiil 1. sırada).' },
      { bad: 'Mit freundlichen Grüßen,', good: 'Mit freundlichen Grüßen', why: 'Veda formülünden sonra virgül konmaz.' }
    ],
    e: 'Kuruma yazılan bir başvuru önce kim olduğunu, sonra ne istediğini ve en sonda zamanı bildirir. Kibarlık Konjunktiv II ile sağlanır: „hätte gern“, „könnten Sie“. Koşul cümlesi planın belirsiz olduğunu gösterir ve doğal durur.' },
  { id: 'de-b1-s08', scene: 'schule', title: 'Nachricht an die Lehrerin', sub: 'Öğretmene mesaj: görüşme sonrası teşekkür ve plan',
    task: 'Oğlunun öğretmenine kısa ve kibar bir mesaj yaz (Sie). Görüşme için teşekkür et, evde ne yapacağınızı söyle ve ek bir destek hakkında soru sor. Bir tane geçmiş irreal cümle kur („Wenn ich das früher gewusst hätte, hätte ich …“).',
    points: ['Görüşme için teşekkür et', 'Evde ne yapacağınızı anlat', 'Ek soru sor ve geçmiş irreal cümle kur'],
    reg: 'Sie',
    words: { min: 55, ziel: 85 },
    chunks: ['Sehr geehrte Frau Brandt,', 'vielen Dank für …', 'Wenn ich das früher gewusst hätte, …', 'Könnten Sie …?', 'Mit freundlichen Grüßen'],
    hint: [['danke', 'gespräch'], ['lesen', 'zu hause', 'jeden tag'], ['hätte', 'könnten']],
    model: 'Sehr geehrte Frau Brandt,\nvielen Dank für das Gespräch gestern. Wenn ich das früher gewusst hätte, hätte ich meinem Sohn mehr geholfen. Zu Hause lesen wir jetzt jeden Tag zwanzig Minuten, damit er besser schreiben kann. Außerdem möchte ich ihn für die Hausaufgabenhilfe anmelden. Könnten Sie mir bitte sagen, bis wann die Anmeldung möglich ist?\nVielen Dank für Ihre Unterstützung.\nMit freundlichen Grüßen\nMurat Aksoy',
    modeln: 'Sayın Brandt Hanım,\nDünkü görüşme için çok teşekkür ederim. Bunu daha önce bilseydim oğluma daha çok yardım ederdim. Evde şimdi her gün yirmi dakika okuyoruz, böylece daha iyi yazabilsin. Ayrıca onu ödev yardımına kaydettirmek istiyorum. Kaydın ne zamana kadar mümkün olduğunu söyleyebilir misiniz?\nDesteğiniz için teşekkürler.\nSaygılarımla\nMurat Aksoy',
    check: [
      { k: 'Konjunktiv II Vergangenheit doğru mu? („gewusst hätte, hätte ich … geholfen“)', e: 'Yan cümlede: Partizip II + hätte (sonda). Ana cümlede: hätte ich + … + Partizip II (sonda).' },
      { k: '„damit“ ile amaç belirttin mi?', e: '„damit er besser schreiben kann“: yan cümle, fiil sonda; özne farklı olduğu için „damit“ gerekir (aynı özne ise „um … zu“).' },
      { k: 'Soruyu kibar sordun mu? („Könnten Sie …?“)', e: '„Könnten Sie mir sagen, …“ ardından yan cümle, fiil sonda: „bis wann die Anmeldung möglich ist“.' },
      { k: 'Resmî hitap ve veda var mı?', e: 'Öğretmenle Sie kullanılır: „Sehr geehrte Frau Brandt,“ … „Mit freundlichen Grüßen“.' }
    ],
    mistakes: [
      { bad: 'Wenn ich das früher gewusst hatte, hätte ich geholfen.', good: 'Wenn ich das früher gewusst hätte, hätte ich geholfen.', why: 'Gerçek dışı geçmiş için „hätte“ gerekir; „hatte“ düz Plusquamperfekt olur.' },
      { bad: 'Wir lesen jeden Tag, damit er besser schreiben kann er.', good: 'Wir lesen jeden Tag, damit er besser schreiben kann.', why: '„damit“ yan cümlesinde çekimli fiil sonda: „schreiben kann“.' },
      { bad: 'Können Sie mir sagen, bis wann ist die Anmeldung möglich?', good: 'Könnten Sie mir sagen, bis wann die Anmeldung möglich ist?', why: 'Dolaylı soru yan cümledir: fiil sonda. „Könnten“ daha kibardır.' }
    ],
    e: 'Veli mesajı kısa, saygılı ve net olmalı: teşekkür, plan, soru. Geçmiş irreal cümle pişmanlık ve iyi niyeti birlikte gösterir. Dolaylı sorularda fiilin sonda olması sık yapılan hatadır.' },
  { id: 'de-b1-s09', scene: 'wohnung', title: 'Tipps zum Energiesparen', sub: 'Arkadaşına enerji tasarrufu tavsiyeleri (mesaj)',
    task: 'Arkadaşına (du) bir mesaj yaz. Yeni dairesinde enerji ve çöp konusunda sorun yaşıyor. İki somut tavsiye ver, bir tanesini Konjunktiv II ile söyle („An deiner Stelle würde ich …“) ve bir Passiv cümlesi kullan.',
    points: ['Mesajı sıcak başlat', 'İki somut tavsiye ver', 'Passiv ve „An deiner Stelle“ kullan'],
    reg: 'du',
    words: { min: 50, ziel: 80 },
    chunks: ['Hallo …,', 'An deiner Stelle würde ich …', 'werden … getrennt', 'Außerdem …', 'Liebe Grüße'],
    hint: [['hallo', 'schön', 'danke'], ['würde', 'steckdosenleiste', 'licht', 'sparen'], ['wird', 'werden', 'getrennt']],
    model: 'Hallo Deniz,\nschön, dass du in die neue Wohnung eingezogen bist! An deiner Stelle würde ich eine Steckdosenleiste mit Schalter kaufen. So wird der Verbrauch im Standby gestoppt. Außerdem wird bei dir im Haus der Müll in vier Tonnen getrennt: gelb, blau, braun und schwarz. Wenn du Fragen hast, melde dich einfach. Wir könnten am Samstag zusammen einkaufen gehen.\nLiebe Grüße\nCan',
    modeln: 'Merhaba Deniz,\nYeni daireye taşınmana sevindim! Senin yerinde olsam anahtarlı bir çoklu priz alırdım. Böylece bekleme modundaki tüketim durdurulur. Ayrıca senin binanda çöp dört kutuda ayrıştırılıyor: sarı, mavi, kahverengi ve siyah. Sorun olursa hemen haber ver. Cumartesi birlikte alışverişe gidebiliriz.\nSevgiler\nCan',
    check: [
      { k: '„An deiner Stelle würde ich …“ doğru mu?', e: 'Yerine koyma kalıbı: *würde* 2. sırada, fiil Infinitiv olarak sonda. Du ile yazıldığı için „deiner“.' },
      { k: 'Passiv cümlesi doğru mu? („wird … gestoppt“, „wird … getrennt“)', e: 'Passiv = werden + Partizip II (sonda). Çoğul özne için „werden“, tekil için „wird“.' },
      { k: 'Samimi dil ve veda kullandın mı?', e: 'Arkadaşa „Hallo …,“ ve „Liebe Grüße“ yeterli; du formunu sürdür.' },
      { k: 'İki tavsiye var mı?', e: '„Außerdem …“ ile ikinci tavsiyeyi ekle; fiil 2. sırada kalır.' }
    ],
    mistakes: [
      { bad: 'An deiner Stelle ich würde eine Steckdosenleiste kaufen.', good: 'An deiner Stelle würde ich eine Steckdosenleiste kaufen.', why: '„An deiner Stelle“ 1. sırayı doldurur; fiil hemen gelir: „würde ich“.' },
      { bad: 'Der Müll wird in vier Tonnen getrennen.', good: 'Der Müll wird in vier Tonnen getrennt.', why: 'Passiv Partizip II ister: „getrennt“, Infinitiv „trennen“ değil.' },
      { bad: 'Der Müll werden getrennt.', good: 'Der Müll wird getrennt.', why: 'Özne tekil (der Müll): „wird“. Çoğul özne varsa „werden“.' }
    ],
    e: 'Tavsiye mesajı kısa ve sıcak olmalı. „An deiner Stelle würde ich …“ yumuşak bir öneri sunar, Passiv ise kuralları nesnel anlatır. İkisini birleştirmek doğal ve anlaşılır bir metin sağlar.' },
  { id: 'de-b1-s10', scene: 'fest', title: 'Einladung zum Straßenfest', sub: 'Sokak şenliği için davet ve gönüllü çağrısı',
    task: 'Komşularına (Sie) bir duyuru yaz. Sokak şenliğini ve zamanını duyur, gönüllü ara ve bir bağlaç yapısı kur („Je mehr Helfer …, desto …“ ya da „damit …“). Kibar bir rica cümlesi ekle („Könnten Sie …?“ / „Dürfte ich …?“).',
    points: ['Şenliği ve zamanı duyur', 'Gönüllü ara', 'Kibar rica ve bağlaç cümlesi ekle'],
    reg: 'Sie',
    words: { min: 55, ziel: 90 },
    chunks: ['Liebe Nachbarinnen und Nachbarn,', 'Wir suchen …', 'Je mehr …, desto …', 'Könnten Sie …?', 'Viele Grüße'],
    hint: [['fest', 'straße', 'samstag', 'uhr'], ['suchen', 'helfer', 'kuchen'], ['je mehr', 'desto', 'könnten', 'damit']],
    model: 'Liebe Nachbarinnen und Nachbarn,\nam Samstag findet unser Straßenfest statt. Es beginnt um 14 Uhr. Wir suchen noch Helfer für den Kuchenstand und für den Aufbau. Je mehr Helfer wir sind, desto besser wird das Fest. Könnten Sie bitte bis Mittwoch Bescheid geben, damit wir alles planen können? Schürzen und Handschuhe werden zur Verfügung gestellt.\nWir freuen uns auf Sie!\nViele Grüße\nIhr Organisationsteam',
    modeln: 'Sevgili komşular,\ncumartesi günü sokak şenliğimiz yapılıyor. Saat 14.00’te başlıyor. Pasta standı ve kurulum için hâlâ gönüllü arıyoruz. Ne kadar çok gönüllü olursak şenlik o kadar güzel olur. Planlayabilmemiz için lütfen çarşambaya kadar haber verebilir misiniz? Önlük ve eldiven sağlanacak.\nSizi görmekten mutluluk duyarız!\nSevgilerle\nOrganizasyon ekibiniz',
    check: [
      { k: 'Resmî komşu hitabı ve veda var mı?', e: '„Liebe Nachbarinnen und Nachbarn,“ sıcak ama saygılı; veda „Viele Grüße“ (komşulara samimi ama düzgün).' },
      { k: '„Je mehr …, desto …“ doğru mu?', e: '„Je mehr Helfer wir sind“ yan cümledir, fiil sonda. Ana cümlede „desto besser“ 1. sırayı doldurur, fiil hemen gelir: „desto besser wird das Fest“.' },
      { k: '„damit“ yan cümlesinde fiil sonda mı?', e: '„damit wir alles planen können“: çekimli fiil sonda.' },
      { k: 'Zaman ve yer açık mı?', e: 'Tarih ve saat net verilmelidir: „am Samstag“, „um 14 Uhr“.' }
    ],
    mistakes: [
      { bad: 'Je mehr Helfer wir sind, desto das Fest wird besser.', good: 'Je mehr Helfer wir sind, desto besser wird das Fest.', why: '„desto“ + sıfat 1. sırayı doldurur; çekimli fiil hemen arkasından gelir.' },
      { bad: 'Geben Sie bis Mittwoch Bescheid, damit wir können alles planen.', good: 'Könnten Sie bis Mittwoch Bescheid geben, damit wir alles planen können?', why: '„damit“ yan cümlesinde fiil sonda; emir yerine kibar rica daha uygundur.' },
      { bad: 'Das Fest beginnt am 14 Uhr.', good: 'Das Fest beginnt um 14 Uhr.', why: 'Saat için „um“, gün için „am“ kullanılır: „am Samstag, um 14 Uhr“.' }
    ],
    e: 'Bir duyuru zaman, yer ve ihtiyacı net söyler. „Je mehr …, desto …“ davetkâr bir ton katar, „damit“ ise isteğin amacını gösterir. Kibar rica biçimi komşuluk ilişkisini korur.' }
]);
