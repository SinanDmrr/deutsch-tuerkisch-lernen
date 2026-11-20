/* Almanca A2 – Schreibwerkstatt / Yazma atölyesi (ADR-13). Format: CLAUDE.md bzw. docs/adr-13-schreiben.md.
 * IDs de-a2-s01 … s10 sind fest (nie ändern, nie neu vergeben). Erklärsprache: Türkisch. */
window.KOPRU.addWrites('de-a2', [
  { id: 'de-a2-s01', scene: 'feier',
    title: 'Absage an eine Kollegin', sub: 'İş arkadaşının davetine kibarca hayır demek',
    task: 'İş arkadaşın Jana seni cumartesi akşamı doğum günü partisine davet etti, ama o akşam gelemiyorsun. Ona kısa bir mesaj yaz: Davet için teşekkür et, neden gelemediğini söyle ve başka bir gün buluşmayı öner.',
    points: ['Davet için teşekkür', 'Neden gelemediğin („weil“ ile)', 'Başka bir buluşma önerisi'],
    reg: 'du',
    words: { min: 20, ziel: 40 },
    chunks: ['Vielen Dank für die Einladung!', 'Leider kann ich … nicht kommen, weil …', 'Das tut mir wirklich leid.', 'Hast du Lust, …?', 'Viele Grüße'],
    hint: [['dank'], ['weil', 'leider'], ['lust', 'treffen', 'nächste', 'vielleicht']],
    model: 'Hallo Jana,\nvielen Dank für die Einladung! Leider kann ich am Samstag nicht kommen, weil meine Eltern zu Besuch sind. Das tut mir wirklich leid. Hast du Lust, nächste Woche mit mir einen Kaffee zu trinken? Ich lade dich ein!\nViele Grüße\nDerya',
    modeln: 'Merhaba Jana,\ndavetin için çok teşekkür ederim! Maalesef cumartesi gelemiyorum, çünkü annemle babam bizde misafir. Gerçekten çok üzgünüm. Gelecek hafta benimle bir kahve içmeye ne dersin? Benden!\nSevgiler\nDerya',
    check: [
      { k: 'Üç nokta da mesajda var mı? (teşekkür, sebep, öneri)', e: 'Kibar bir ret mesajında bu üçü bir arada olunca karşı taraf kırılmaz: Teşekkür ilgini, sebep dürüstlüğünü, yeni öneri de arkadaşlığın sürdüğünü gösterir.' },
      { k: '„weil“ cümlesinde çekimli fiil en sonda mı?', e: '„weil“ bir yan cümle başlatır. Yan cümlede çekimli fiil en sona gider: „…, weil ich arbeiten **muss**.“ Yani „weil ich muss arbeiten“ yanlış olur.' },
      { k: 'Baştan sona hep „du“ mu kullandın?', e: 'Jana iş arkadaşın ve birbirinize zaten „du“ diyorsunuz. Aynı mesajda „du“ ile „Sie“yi karıştırma: „Hast du Lust …?“, „Ich lade dich ein.“' },
      { k: 'Selamlama ve kapanış var mı?', e: 'Kısa mesajlarda bile „Hallo Jana,“ ile başlayıp „Viele Grüße“ ya da „Liebe Grüße“ ile bitirmek Almancada kibar sayılır. Selamlamadan sonra virgül gelir ve alt satır küçük harfle başlar.' }
    ],
    mistakes: [
      { bad: 'Leider ich kann nicht kommen.', good: 'Leider kann ich nicht kommen.', why: '„Leider“ cümlenin başındaysa birinci sırayı o alır. Çekimli fiil („kann“) hep ikinci sırada kalır, özne („ich“) fiilden sonra gelir.' },
      { bad: '…, weil ich habe keine Zeit.', good: '…, weil ich keine Zeit habe.', why: '„weil“den sonra çekimli fiil sona gider. Türkçedeki gibi düşünebilirsin: Fiil cümlenin en sonunda.' },
      { bad: 'Danke für die Einladen.', good: 'Danke für die Einladung.', why: '„einladen“ fiildir (davet etmek), ismi „die Einladung“dur (davet). „für“dan sonra isim gelir.' }
    ],
    e: 'Örnek metin üç adımda ilerliyor: Önce teşekkür, sonra „Leider … weil …“ ile sebep, en sonda da „Hast du Lust …?“ ile yeni bir teklif. Böylece ret mesajı soğuk değil, sıcak olur. „Das tut mir wirklich leid“ üzüntünü gösterir; resmî değil, arkadaşça bir ifadedir.' },

  { id: 'de-a2-s02', scene: 'feier',
    title: 'Einladung zur Einweihungsparty', sub: 'Yeni taşındığın eve arkadaşını davet etmek',
    task: 'Geçen hafta yeni bir eve taşındın. Arkadaşın Mehmet’i cumartesi akşamı küçük bir ev açılışı partisine davet et. Mesajında nedenini, saati ve adresi yaz; gelip gelemeyeceğini sor ve ne getirmesi gerektiğini söyle.',
    points: ['Davetin nedeni (taşınma)', 'Gün, saat ve adres', 'Gelip gelemeyeceğini sorma ve ne getirmesi gerektiği'],
    reg: 'du',
    words: { min: 25, ziel: 40 },
    chunks: ['Ich lade dich herzlich zu … ein', 'Die Party ist am Samstag ab … Uhr', 'Kannst du kommen?', 'Bring bitte … mit', 'Ich freue mich auf dich!', 'Liebe Grüße'],
    hint: [['umgezogen', 'lade', 'party', 'einladung'], ['samstag', 'uhr', 'straße', 'adresse'], ['kannst', 'kommen', 'mit']],
    model: 'Hallo Mehmet,\nich bin letzte Woche umgezogen. Ich lade dich herzlich zu meiner Einweihungsparty ein. Die Party ist am Samstag ab 18 Uhr in der Lindenstraße 5. Kannst du kommen? Bring bitte nur gute Laune mit. Essen und Getränke kaufe ich. Ich freue mich auf dich!\nLiebe Grüße\nAyşe',
    modeln: 'Merhaba Mehmet,\ngeçen hafta taşındım. Seni ev açılışı partime içtenlikle davet ediyorum. Parti cumartesi akşamı saat 18’den itibaren, Lindenstraße 5’te. Gelebilir misin? Yanında sadece neşe getir. Sen sadece gel, yiyecek içecek benden. Seni görmek için sabırsızlanıyorum!\nSevgiler\nAyşe',
    check: [
      { k: 'Üç noktayı da yazdın mı? (neden, gün/saat/adres, soru)', e: 'Bir davette karşı tarafın bilmesi gereken şeyler: Ne için, ne zaman, nerede. Bunlardan biri eksikse arkadaşın size tekrar yazmak zorunda kalır.' },
      { k: '„einladen“ fiilini ayırdın mı? („Ich lade dich … ein.“)', e: '„einladen“ ayrılabilen bir fiildir. Çekimli kısım ikinci sıraya, „ein“ ise cümlenin sonuna gider: „Ich lade dich zu meiner Party ein.“ Türkçedeki gibi fiil tek parça durmaz.' },
      { k: '„zu“dan sonra Dativ kullandın mı?', e: '„zu“ her zaman Dativ ister. „die Party“ dişil olduğu için „zu meiner Party“ olur; „zu meine Party“ yanlıştır.' },
      { k: 'Samimi bir dil kullandın mı? (du, „Liebe Grüße“)', e: 'Arkadaşa „du“ diyorsun. „Liebe Grüße“ de arkadaşlar arası sıcak bir kapanış. „Mit freundlichen Grüßen“ burada fazla resmî kalırdı.' }
    ],
    mistakes: [
      { bad: 'Ich lade dich zu meine Party ein.', good: 'Ich lade dich zu meiner Party ein.', why: '„zu“dan sonra Dativ gelir. „die Party“ dişil, Dativ’de „meiner Party“ olur. Türkçede hâl eki sadece sonda değişir, Almancada ise „mein-“in kendisi de değişir.' },
      { bad: 'Ich einlade dich.', good: 'Ich lade dich ein.', why: '„einladen“ ayrılabilen fiil: „ein“ cümlenin sonuna gider. Çekimli kısım („lade“) ise ikinci sırada durur.' },
      { bad: 'Ich freue mich für dich!', good: 'Ich freue mich auf dich!', why: '„sich freuen auf“ gelecekteki bir şeye sevinmek demektir (seni görmek için sabırsızlanıyorum). „sich freuen für“ ise „senin adına sevinmek“ olur ve burada anlamı bozar.' }
    ],
    e: 'Örnek metin kısa ve net: Önce neden (taşınma), sonra gün-saat-adres, en sonda soru ve küçük bir istek. „Die Party ist am Samstag ab 18 Uhr …“ cümlesinde „ab“ başlangıç saatini gösterir (saat 18’den itibaren). „Essen und Getränke kaufe ich“ cümlesinde yiyecek ve içecek vurgulandığı için başa alınmış; fiil yine ikinci sırada, özne ondan sonra gelir.' },

  { id: 'de-a2-s03', scene: 'wohnung',
    title: 'E-Mail an die Hausverwaltung', sub: 'Bozuk kaloriferi site yönetimine bildirmek',
    task: 'Üç gündür evindeki kalorifer çalışmıyor ve çok soğuk. Site yönetimine resmî bir e-posta yaz: Kim olduğunu ve nerede oturduğunu belirt, sorunu anlat ve bir tamirci göndermelerini rica et; ne zaman evde olduğunu da yaz.',
    points: ['Kim olduğun ve nerede oturduğun', 'Sorun (kalorifer çalışmıyor)', 'Rica ve evde olduğun saat'],
    reg: 'Sie',
    words: { min: 35, ziel: 50 },
    chunks: ['Sehr geehrte Damen und Herren,', 'Ich wohne in …', 'Seit … Tagen funktioniert … nicht mehr', 'Könnten Sie bitte … schicken?', 'Ich bin ab … Uhr zu Hause.', 'Mit freundlichen Grüßen'],
    hint: [['wohne', 'stock', 'straße'], ['heizung', 'funktioniert', 'kalt', 'seit'], ['könnten', 'bitte', 'handwerker', 'uhr']],
    model: 'Sehr geehrte Damen und Herren,\nich wohne in der Lindenstraße 5, zweiter Stock links. Seit drei Tagen funktioniert die Heizung in meiner Wohnung nicht mehr, und es ist sehr kalt. Könnten Sie bitte so schnell wie möglich einen Handwerker schicken? Ich bin ab 16 Uhr zu Hause. Vielen Dank im Voraus.\nMit freundlichen Grüßen\nElif Kaya',
    modeln: 'Sayın yetkililer,\nLindenstraße 5’te, ikinci katta solda oturuyorum. Üç gündür evimdeki kalorifer çalışmıyor ve hava çok soğuk. Mümkün olan en kısa sürede bir tamirci gönderebilir misiniz? Saat 16’dan sonra evdeyim. Şimdiden teşekkür ederim.\nSaygılarımla\nElif Kaya',
    check: [
      { k: 'Resmî bir selamlama ve kapanış kullandın mı?', e: 'Hausverwaltung’a yazarken „Sehr geehrte Damen und Herren,“ ile başlayıp „Mit freundlichen Grüßen“ ile bitirirsin. „Hallo“ ya da „Liebe Grüße“ burada uygun olmaz.' },
      { k: 'Evinin yerini (kat, sol/sağ) yazdın mı?', e: 'Site yönetimi yüzlerce daire yönetir. Adres, kat ve yön („zweiter Stock links“) yazılırsa tamirci evi kolay bulur.' },
      { k: '„Sie“ ve „Ihnen“ büyük harfle mi?', e: 'Resmî hitapta „Sie, Ihnen, Ihr“ her zaman büyük yazılır. Küçük „sie“ ise „o / onlar“ demektir; anlam değişir.' },
      { k: '„Könnten Sie bitte … schicken?“ cümlesinde fiil sonda mı?', e: 'Kip fiili çekimli kısımdır, asıl fiil mastar hâlinde en sonda durur (çerçeve). Evet/hayır sorusunda kip fiili başa gelir: „Könnten Sie bitte einen Handwerker schicken?“' }
    ],
    mistakes: [
      { bad: 'Könnten Sie schicken bitte einen Handwerker?', good: 'Könnten Sie bitte einen Handwerker schicken?', why: 'Kip fiili „könnten“ ile asıl fiil „schicken“ cümlenin iki ucunda durur (çerçeve). Asıl fiil mastar olarak en sona gider; tıpkı Türkçede fiilin sonda olması gibi.' },
      { bad: 'Mit freundliche Grüße', good: 'Mit freundlichen Grüßen', why: '„mit“ Dativ ister. „die Grüße“ çoğul olduğu için Dativ’de hem sıfat „freundlichen“ hem isim „Grüßen“ -n alır. Bu kalıbı olduğu gibi ezberle.' },
      { bad: 'Sehr geehrte Damen und Herren,\nIch wohne in der Lindenstraße 5.', good: 'Sehr geehrte Damen und Herren,\nich wohne in der Lindenstraße 5.', why: 'Selamlamadan sonra virgül gelir ve satır sanki aynı cümleymiş gibi küçük harfle devam eder. Türkçedeki „Sayın yetkililer,“ sonrası büyük harfe alışkanlığı burada yanıltır.' }
    ],
    e: 'Resmî e-postada kısa ve kibar olmak yeterlidir: Önce kimsin, sonra sorun, sonra rica. „Seit drei Tagen“ süreyi gösterir ve fiil cümlenin ortasında kalır („funktioniert … nicht mehr“). Rica için „Könnten Sie bitte …?“ (Konjunktiv II) „Können Sie …?“ kalıbından çok daha kibardır; A2’de bu kalıbı olduğu gibi kullanmak yeterli.' },

  { id: 'de-a2-s04', scene: 'arzt',
    title: 'Einen Termin verschieben', sub: 'Doktor randevusunu başka güne almak',
    task: 'Salı günü saat 9’da Dr. Weber’de randevun var ama işin yüzünden gidemiyorsun. Muayenehaneye resmî bir e-posta yaz: Adını ve randevunu söyle, neden gelemediğini açıkla ve perşembe gününe almayı öner; geri aranmak istediğini belirt.',
    points: ['Adın ve mevcut randevu', 'Neden gelemediğin („weil“ ile)', 'Yeni gün önerisi ve geri dönüş ricası'],
    reg: 'Sie',
    words: { min: 35, ziel: 50 },
    chunks: ['Guten Tag,', 'Mein Name ist …', 'Ich habe am … um … Uhr einen Termin bei …', 'Leider kann ich nicht kommen, weil …', 'Könnte ich den Termin auf … verschieben?', 'Bitte rufen Sie mich zurück', 'Meine Telefonnummer ist …', 'Freundliche Grüße'],
    hint: [['name', 'termin', 'dienstag'], ['weil', 'leider', 'arbeiten'], ['donnerstag', 'verschieben', 'zurück', 'antwort']],
    model: 'Guten Tag,\nmein Name ist Can Yılmaz. Ich habe am Dienstag um 9 Uhr einen Termin bei Frau Dr. Weber, aber leider kann ich nicht kommen, weil ich arbeiten muss. Könnte ich den Termin auf Donnerstag verschieben? Vormittags habe ich Zeit. Bitte rufen Sie mich zurück oder schreiben Sie mir kurz eine E-Mail. Meine Telefonnummer ist 0151 234567.\nFreundliche Grüße\nCan Yılmaz',
    modeln: 'İyi günler,\nadım Can Yılmaz. Salı günü saat 9’da Dr. Weber’de randevum var ama maalesef çalışmam gerektiği için gelemiyorum. Randevuyu perşembeye alabilir miyim? Öğleden önce müsaitim. Lütfen beni geri arayın ya da kısa bir e-posta yazın. Telefon numaram 0151 234567.\nSaygılarımla\nCan Yılmaz',
    check: [
      { k: 'Randevunun gününü ve saatini doğru yazdın mı? („am Dienstag um 9 Uhr“)', e: 'Gün için „am“ (am Dienstag), saat için „um“ (um 9 Uhr) kullanılır. Türkçede „salı günü saat 9’da“ tek ekle çözülür, Almancada ise iki ayrı edat gerekir.' },
      { k: '„weil“ cümlesinde çekimli fiil en sonda mı?', e: '„… weil ich arbeiten muss.“ Yan cümlede çekimli fiil („muss“) en sona gider. „weil ich muss arbeiten“ yanlıştır.' },
      { k: 'Rica cümlesinde („Bitte rufen Sie mich zurück.“) („bitte“ sayılmaz) fiil „Sie“den önce mi?', e: 'Sie’li emir ve rica cümlelerinde fiil başa gelir, hemen ardından „Sie“. „zurückrufen“ ayrılabilen fiildir: „zurück“ sonda kalır.' },
      { k: 'Selamlama ve kapanış resmî mi?', e: 'Muayenehaneye „Guten Tag,“ ile başlayıp „Freundliche Grüße“ ya da „Mit freundlichen Grüßen“ ile bitirebilirsin. Her ikisi de resmî ve doğrudur.' }
    ],
    mistakes: [
      { bad: 'Ich habe ein Termin bei Frau Dr. Weber.', good: 'Ich habe einen Termin bei Frau Dr. Weber.', why: '„haben“den sonra nesne Akkusativ’dedir. „der Termin“ eril olduğu için „einen Termin“ olur. Türkçede cinsiyet ve hâl yoktur, bu yüzden „ein“ unutulur.' },
      { bad: 'Bitte Sie rufen mich zurück.', good: 'Bitte rufen Sie mich zurück.', why: 'Resmî rica ve emirde fiil „Sie“den önce gelir: Fiil + Sie. „zurück“ ise ayrılan parçadır ve en sona gider.' },
      { bad: 'Ich habe in Dienstag einen Termin.', good: 'Ich habe am Dienstag einen Termin.', why: 'Haftanın günlerinde „am“ kullanılır (an + dem). Türkçedeki „-da / günü“ karşılığı „in“ değil „am“dır.' }
    ],
    e: 'Örnekte önce kim olduğun ve hangi randevu, sonra „aber leider … weil …“ ile engel, sonra somut bir öneri var. „Vormittags habe ich Zeit“ cümlesinde zaman başta olduğu için fiil yine ikinci sırada kalır ve özne fiilin arkasına geçer. Yeni gün önermek, karşı tarafın işini kolaylaştırır; bu yüzden resmî yazışmalarda çok işe yarar.' },

  { id: 'de-a2-s05', scene: 'stadt',
    title: 'Den Weg beschreiben', sub: 'Arkadaşına evinin yolunu tarif etmek',
    task: 'Arkadaşın Lara yarın seni ziyarete gelecek ve tren istasyonundan yürüyecek. Ona kısa bir mesajla yolu tarif et: İstasyondan başla, 3 adımda yürüyeceği yolu anlat ve evini nasıl tanıyacağını yaz.',
    points: ['Başlangıç (istasyon)', 'Yol tarifi (en az üç adım)', 'Evin nasıl tanınacağı ve yardım teklifi'],
    reg: 'du',
    words: { min: 30, ziel: 45 },
    chunks: ['Vom Bahnhof gehst du geradeaus bis …', 'Dort biegst du links ab.', 'Du gehst an … vorbei.', 'Mein Haus ist das gelbe neben …', 'Ruf mich einfach an!'],
    hint: [['bahnhof'], ['geradeaus', 'links', 'rechts', 'ampel', 'vorbei'], ['haus', 'neben', 'stock', 'anruf', 'anrufen']],
    model: 'Hi Lara,\nich freue mich auf morgen! Vom Bahnhof gehst du geradeaus bis zur Ampel. Dort biegst du links ab. Du gehst an der Bäckerei vorbei. Mein Haus ist das gelbe neben der Apotheke. Ich wohne im dritten Stock. Wenn du dich verläufst, ruf mich einfach an!\nBis morgen\nTarık',
    modeln: 'Selam Lara,\nYarın görüşeceğiz, çok sevindim! İstasyondan trafik ışığına kadar düz gidiyorsun. Orada sola dönüyorsun. Fırının önünden geçiyorsun. Evim eczanenin yanındaki sarı ev. Üçüncü katta oturuyorum. Kaybolursan bir telefon etmen yeter!\nYarın görüşürüz\nTarık',
    check: [
      { k: 'Her cümlede çekimli fiil ikinci sırada mı?', e: 'Cümleye „Vom Bahnhof“ veya „Dort“ ile başlarsan, fiil hemen arkasından gelir ve özne fiilin arkasına geçer: „Dort biegst du links ab.“ Türkçedeki gibi „Orada sen … dönersin“ sırası Almancada yanlıştır.' },
      { k: '„abbiegen“ ve „anrufen“ gibi ayrılabilen fiilleri doğru böldün mü?', e: 'Ayrılabilen fiillerde ön ek sonda kalır: „du biegst … ab“, „ruf mich … an“. Fiili bütün hâlde bırakmak sık yapılan bir hatadır.' },
      { k: '„an … vorbei“ ve „bis zu“ kalıplarında Dativ var mı?', e: '„an … vorbei“ sabit bir kalıptır ve hep Dativ ister; „bis zur“ da „zu“ yüzünden Dativ’dir.' },
      { k: 'İsimler büyük harfle başlıyor mu? („Bahnhof, Ampel, Bäckerei, Apotheke“)', e: 'Almancada her isim büyük yazılır. Sıfatlar ise küçük yazılır: „das gelbe Haus“ (sarı ev). Selamlama sonrası ilk kelime de küçük harfle başlar.' }
    ],
    mistakes: [
      { bad: 'Dort du biegst links ab.', good: 'Dort biegst du links ab.', why: 'Cümleye bir yer ya da zaman ifadesiyle başlarsan, çekimli fiil ikinci sırada kalır. Özne („du“) fiilden sonra gelir. Türkçede özne başta kalır, o yüzden bu hata çok yapılır.' },
      { bad: 'Du abbiegst links.', good: 'Du biegst links ab.', why: '„abbiegen“ ayrılabilen fiildir. Çekimli kısım („biegst“) ikinci sırada, „ab“ ise cümlenin sonunda durur.' },
      { bad: 'Du gehst an die Bäckerei vorbei.', good: 'Du gehst an der Bäckerei vorbei.', why: '„an … vorbei“ sabit bir kalıptır ve hep Dativ ister: „an der Bäckerei vorbei“. „bis zur“ da „zu“ yüzünden Dativ’dir.' }
    ],
    e: 'Yol tarifinde sıra önemlidir: Başlangıç noktası, sonra adım adım („geradeaus, links, vorbei“), en sonda hedefin özellikleri. Cümleler kısa ve emir tonunda değil, „du gehst …“ biçiminde arkadaşça anlatılır. Son cümle („ruf mich einfach an“) hem samimi hem pratik bir yardım teklifi.' },

  { id: 'de-a2-s06', scene: 'urlaub',
    title: 'Eine Urlaubskarte schreiben', sub: 'Tatilden arkadaşına kart yazmak',
    task: 'Hamburg’da tatildesin. Arkadaşın Nesrin’e bir kartpostal yaz: Nerede olduğunu ve havayı anlat, dün ve bugün neler yaptığını (Perfekt ile) yaz ve yarın ne yapmak istediğini söyle.',
    points: ['Nerede olduğun ve hava', 'Dün/bugün yaptıkların (Perfekt)', 'Yarın için planın'],
    reg: 'du',
    words: { min: 30, ziel: 45 },
    chunks: ['Viele Grüße aus …!', 'Wir sind gestern angekommen', '… und haben schon … besucht', 'Das Wetter ist …', 'Morgen möchten wir …', 'Schade, dass du nicht hier bist!'],
    hint: [['grüße', 'wetter', 'hamburg'], ['gestern', 'heute', 'haben', 'sind'], ['morgen', 'möchten', 'wollen']],
    model: 'Liebe Nesrin,\nviele Grüße aus Hamburg! Wir sind gestern angekommen und haben schon den Hafen besucht. Das Wetter ist super, und das Essen schmeckt wunderbar. Heute sind wir mit dem Schiff gefahren. Morgen möchten wir ins Museum gehen. Schade, dass du nicht hier bist!\nBis bald\nDeine Ayla',
    modeln: 'Sevgili Nesrin,\nHamburg’dan sevgiler! Dün geldik ve limanı gezdik bile. Hava harika, yemekler de çok lezzetli. Bugün gemiyle gezdik. Yarın müzeye gitmek istiyoruz. Keşke sen de burada olsaydın!\nYakında görüşürüz\nAyla',
    check: [
      { k: 'Geçmişi anlatırken Perfekt kullandın mı? („haben/sein“ + Partizip)', e: 'Konuşma dilinde ve kartpostalda geçmiş çoğunlukla Perfekt ile anlatılır: „Wir haben … besucht“, „Wir sind … gefahren“.' },
      { k: 'Hareket fiillerinde „sein“ kullandın mı? („gefahren, angekommen“)', e: 'Bir yerden bir yere giden ya da durum değiştiren fiiller („fahren, ankommen, gehen“) Perfekt’te „sein“ alır. „haben“ ise çoğu diğer fiille kullanılır.' },
      { k: 'Ayrılabilen fiilin Partizip’inde „ge“ ortada mı? („an-ge-kommen“)', e: 'Ayrılabilen fiillerde „ge“ ön ek ile fiil arasına girer: „ankommen → angekommen“, „aufräumen → aufgeräumt“.' },
      { k: 'Eril isimde Akkusativ’i doğru yazdın mı? („den Hafen“)', e: '„besuchen“ fiilinin nesnesi Akkusativ’dedir. „der Hafen“ eril olduğundan „den Hafen“ olur. Dişil ve nötr isimler değişmez.' }
    ],
    mistakes: [
      { bad: 'Wir sind gestern ankommen.', good: 'Wir sind gestern angekommen.', why: 'Perfekt’te Partizip II gerekir: „angekommen“. „ankommen“ ile „angekommen“ kulağa çok benzer; „-ge-“ ortada kolayca unutulur.' },
      { bad: 'Wir haben das Hafen besucht.', good: 'Wir haben den Hafen besucht.', why: '„der Hafen“ eril bir isim. Nesne olduğu için Akkusativ’de „den Hafen“ olur. Türkçede „-ı“ eki her isme aynı gelir, Almancada ise artikel değişir.' },
      { bad: 'Ich habe nach Hamburg gefahren.', good: 'Ich bin nach Hamburg gefahren.', why: '„fahren“ bir yere gitmeyi anlatır; Perfekt’te „sein“ alır. „haben“ ile kurulursa Almanlar bunu yanlış bulur.' }
    ],
    e: 'Kart kısa olsun: Selamlama + nerede + ne yaptık (Perfekt) + ne yapacağız. „Das Wetter ist super“ ve „das Essen schmeckt wunderbar“ şimdiki zamandır, çünkü şu an olanı anlatıyor. Son cümle olan „Schade, dass du nicht hier bist!“ yan cümledir; „dass“ sonrasında fiil sona gider.' },

  { id: 'de-a2-s07', scene: 'einkauf',
    title: 'Beschwerde über eine Bestellung', sub: 'Hasarlı gelen siparişi şikâyet etmek',
    task: 'İnternetten bir lamba sipariş ettin. Paket dün geldi ama lamba kırık. Firmaya resmî bir şikâyet e-postası yaz: Ne sipariş ettiğini, sorunu ve ne istediğini (iade ve para iadesi) açıkça yaz; sipariş numaran 4711.',
    points: ['Ne sipariş ettiğin, ne zaman ve sipariş numarası', 'Sorun (ürün kırık)', 'Ne istediğin (iade ve para iadesi)'],
    reg: 'Sie',
    words: { min: 35, ziel: 50 },
    chunks: ['Sehr geehrte Damen und Herren,', 'Am … habe ich bei Ihnen … bestellt', 'Das Paket ist gestern angekommen, aber …', 'Ich möchte … zurückschicken', 'Bitte schreiben Sie mir …', 'mit der Bestellnummer …', 'Mit freundlichen Grüßen'],
    hint: [['bestellt', 'bestellung'], ['kaputt', 'riss', 'angekommen'], ['zurückschicken', 'geld', 'bestellnummer', 'bitte']],
    model: 'Sehr geehrte Damen und Herren,\nam 3. März habe ich bei Ihnen eine Lampe mit der Bestellnummer 4711 bestellt. Das Paket ist gestern angekommen, aber die Lampe ist kaputt. Das Glas hat einen Riss. Ich möchte die Lampe zurückschicken und mein Geld zurückbekommen. Bitte schreiben Sie mir, wie ich das machen kann.\nMit freundlichen Grüßen\nSelim Aydın',
    modeln: 'Sayın yetkililer,\n3 Mart’ta sizden 4711 numaralı siparişle bir lamba sipariş ettim. Paket dün geldi ama lamba kırık. Camında çatlak var. Lambayı iade etmek ve paramı geri almak istiyorum. Lütfen bunu nasıl yapabileceğimi bana yazın.\nSaygılarımla\nSelim Aydın',
    check: [
      { k: 'Sorunu nesnel ve sakin yazdın mı?', e: 'Resmî şikâyette kızgın cümleler yerine kısa bir olgu yazmak daha etkilidir: Ne zaman sipariş edildi, ne bozuk, ne istiyorsun.' },
      { k: '„bei Ihnen“ biçimini doğru kullandın mı?', e: '„bei“ Dativ ister. „Sie“nin Dativ’i „Ihnen“dir (büyük harfle). „bei Sie“ yanlıştır.' },
      { k: '„Ich möchte … zurückschicken“ cümlesinde fiil sonda mı?', e: '„möchte“ ikinci sırada, asıl fiil mastar hâlinde en sonda durur. „zurückschicken“ bu hâlde bütün kalır, çünkü mastardır.' },
      { k: 'İsimleri ve resmî hitabı büyük yazdın mı? („Lampe, Paket, Ihnen“)', e: 'Almancada tüm isimler büyük başlar. Resmî „Sie / Ihnen / Ihr“ da büyük yazılır. Selamlamadan sonraki ilk kelime ise küçük harfle başlar.' }
    ],
    mistakes: [
      { bad: 'Ich habe bei Sie eine Lampe bestellt.', good: 'Ich habe bei Ihnen eine Lampe bestellt.', why: '„bei“ Dativ ister, „Sie“nin Dativ hâli „Ihnen“dir. Türkçede „sizden“ tek ekle olur; Almancada hem edat hem zamir hâli değişir.' },
      { bad: 'Die Lampe ist kaputt, deshalb ich möchte mein Geld zurückhaben.', good: 'Die Lampe ist kaputt, deshalb möchte ich mein Geld zurückhaben.', why: '„deshalb“ cümlenin ilk yerini kaplar, çekimli fiil ise hemen ardından ikinci sırada gelir. Özne fiilden sonraya geçer.' },
      { bad: 'Ich möchte schicken die Lampe zurück.', good: 'Ich möchte die Lampe zurückschicken.', why: 'Kip fiili „möchte“ ile asıl fiil cümlenin iki ucunda durur. Asıl fiil mastar olarak sona gider; „zurückschicken“ bu durumda ayrılmaz.' }
    ],
    e: 'Şikâyet mektubunun sırası: Ne sipariş ettin, ne oldu, ne istiyorsun. „aber“ iki zıt olguyu bağlar (paket geldi ama lamba kırık). Sipariş numarasını ilk cümlede ver; gerçek bir e-postada ayrıca konu satırına (Betreff) da yazılır. Bu şirketin işini hızlandırır. „Bitte schreiben Sie mir, wie ich das machen kann“ cümlesindeki „wie“ yan cümle başlatır ve fiil sona gider.' },

  { id: 'de-a2-s08', scene: 'schule',
    title: 'Krankmeldung an den Kursleiter', sub: 'Hastalık yüzünden kursa gelememeyi bildirmek',
    task: 'Dün hasta olduğun için Almanca kursuna gidemedin. Hocan Herr Braun’a resmî bir e-posta yaz: Özür dile ve nedeni açıkla, ödevi yaptığını söyle ve neleri telafi etmen gerektiğini sor.',
    points: ['Özür ve neden (weil)', 'Yaptığın (ödev)', 'Rica (neleri telafi etmeli)'],
    reg: 'Sie',
    words: { min: 35, ziel: 50 },
    chunks: ['Sehr geehrter Herr …,', 'Leider konnte ich gestern nicht … kommen, weil …', 'Das tut mir sehr leid.', 'Ich habe die Hausaufgaben schon gemacht.', 'Könnten Sie mir bitte sagen, …?', 'Vielen Dank für Ihr Verständnis.', 'Mit freundlichen Grüßen'],
    hint: [['leider', 'weil', 'krank', 'leid'], ['hausaufgaben', 'gemacht'], ['könnten', 'bitte', 'nachholen', 'sagen']],
    model: 'Sehr geehrter Herr Braun,\nleider konnte ich gestern nicht zum Deutschkurs kommen, weil ich krank war. Ich hatte Fieber und musste im Bett bleiben. Das tut mir sehr leid. Ich habe die Hausaufgaben schon gemacht. Könnten Sie mir bitte sagen, was ich nachholen muss? Vielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen\nZeynep Arslan',
    modeln: 'Sayın Braun,\nmaalesef dün hasta olduğum için Almanca kursuna gelemedim. Ateşim vardı ve yatakta kalmak zorunda kaldım. Çok üzgünüm. Ödevleri yaptım bile. Neleri telafi etmem gerektiğini söyler misiniz? Anlayışınız için çok teşekkür ederim.\nSaygılarımla\nZeynep Arslan',
    check: [
      { k: '„Herr“ için doğru selamlama kullandın mı? („Sehr geehrter Herr Braun,“)', e: 'Erkeklere „Sehr geehrter Herr …“, kadınlara „Sehr geehrte Frau …“ yazılır. „Herr“ eril olduğu için sıfat „-er“ ile biter. Türkçede „Sayın“ değişmez, o yüzden unutulur.' },
      { k: '„weil“ cümlesinde fiil en sonda mı? („weil ich krank war“)', e: 'Yan cümlede çekimli fiil sona gider: „weil ich krank war.“ „weil ich war krank“ yanlıştır.' },
      { k: 'Geçmişi doğru anlattın mı? (war, hatte, konnte, musste)', e: 'Yazılı resmî dilde „sein, haben“ ve kip fiilleri çoğunlukla Präteritum’da kullanılır: „war, hatte, konnte, musste“. Perfekt’li „bin gewesen“ burada gereksizdir.' },
      { k: '„Das tut mir leid“ kalıbını doğru yazdın mı?', e: '„leidtun“ Dativ ile kullanılır: „Es tut mir leid.“ „mir“ yerine „mich“ yazmak sık yapılan bir hatadır.' }
    ],
    mistakes: [
      { bad: 'Leider konnte ich gestern nicht kommen, weil ich war krank.', good: 'Leider konnte ich gestern nicht kommen, weil ich krank war.', why: '„weil“den sonra çekimli fiil („war“) cümlenin sonuna gider. Ana cümlede ise fiil ikinci sırada kalır.' },
      { bad: 'Sehr geehrte Herr Braun,', good: 'Sehr geehrter Herr Braun,', why: '„Herr“ eril. Eril isimden önce sıfat „-er“ alır: „Sehr geehrter Herr“. Kadın için „Sehr geehrte Frau“ yazılır.' },
      { bad: 'Das tut mich sehr leid.', good: 'Das tut mir sehr leid.', why: '„leidtun“ Dativ ister: „mir“. Türkçedeki „üzgünüm“ cümlesi Dativ düşünmeyi öğretmez, o yüzden „mich“ yazılır.' }
    ],
    e: 'Örnek metin önce özür ve nedeni verir, sonra sorumluluğunu gösterir (ödev) ve en sonda rica eder. „Leider konnte ich … nicht kommen“ cümlesinde „leider“ başta olduğu için fiil ikinci sırada, özne ondan sonra gelir. Kursa mail atarken resmî bir dil seçmek saygı gösterir; „Vielen Dank für Ihr Verständnis“ da kibar bir kapanış cümlesidir.' },

  { id: 'de-a2-s09', scene: 'arbeit',
    title: 'Bewerbung um einen Nebenjob', sub: 'Yarı zamanlı işe kısa bir başvuru e-postası',
    task: 'Bir kafede yarı zamanlı iş ilanı gördün. Kafenin müdürü Frau Neumann’a kısa bir başvuru e-postası yaz: Neden yazdığını belirt, kendini tanıt (yaş, okul/meslek), becerilerini ve ne zaman çalışabileceğini yaz.',
    points: ['Neden yazıyorsun (ilan)', 'Kısa tanıtım (yaş, okul/meslek)', 'Beceriler ve müsait günler'],
    reg: 'Sie',
    words: { min: 40, ziel: 55 },
    chunks: ['Sehr geehrte Frau …,', 'Ich habe Ihre Anzeige … gelesen und möchte mich bewerben.', 'Ich bin … Jahre alt und …', 'Ich arbeite gern mit …', 'Ich kann … arbeiten.', 'Über eine Antwort freue ich mich sehr.', 'Mit freundlichen Grüßen'],
    hint: [['anzeige', 'bewerben'], ['jahre', 'alt', 'studiere', 'student'], ['arbeite', 'kann', 'dienstags', 'samstags']],
    model: 'Sehr geehrte Frau Neumann,\nich habe Ihre Anzeige für den Nebenjob im Café gelesen und möchte mich bewerben. Ich bin 24 Jahre alt und studiere Informatik. Ich arbeite gern mit Menschen und spreche Türkisch, Deutsch und ein bisschen Englisch. Ich kann dienstags und samstags arbeiten. Über eine Antwort freue ich mich sehr.\nMit freundlichen Grüßen\nBurak Özdemir',
    modeln: 'Sayın Neumann,\nkafedeki yarı zamanlı iş ilanınızı okudum ve başvurmak istiyorum. 24 yaşındayım ve bilgisayar bilimleri okuyorum. İnsanlarla çalışmayı severim; Türkçe, Almanca ve biraz da İngilizce konuşuyorum. Salı ve cumartesi günleri çalışabilirim. Dönüşünüzü bekliyorum.\nSaygılarımla\nBurak Özdemir',
    check: [
      { k: 'Yaşını doğru söyledin mi? („Ich bin … Jahre alt.“)', e: 'Yaş „sein … alt“ ile söylenir: „Ich bin 24 Jahre alt.“' },
      { k: '„sich bewerben“ yansımalı fiilini kullandın mı? („mich bewerben“)', e: '„bewerben“ yalnız kullanılmaz, „sich“ ile birlikte gelir: „Ich möchte mich bewerben.“ „mich“ unutulursa cümle eksik kalır.' },
      { k: 'Günler için „-s“ ekini kullandın mı? („dienstags, samstags“)', e: '„dienstags“ „her salı“ demektir. Türkçedeki „salı günleri“ ile aynı mantıktadır ve küçük harfle yazılır.' },
      { k: 'Başvurunu kısa ve düzenli yazdın mı?', e: 'İş başvurusunda uzun hikâyeler yerine kısa, net cümleler istenir: Neden, ben kimim, ne yapabilirim, ne zaman müsaitim.' }
    ],
    mistakes: [
      { bad: 'Ich spreche Türkisch, Deutsch und bisschen Englisch.', good: 'Ich spreche Türkisch, Deutsch und ein bisschen Englisch.', why: '„bisschen“ yalnız kullanılmaz, „ein bisschen“ sabit kalıptır; Türkçedeki „biraz“ tek kelime olduğu için „ein“ unutulur.' },
      { bad: 'Ich möchte bewerben.', good: 'Ich möchte mich bewerben.', why: '„sich bewerben“ yansımalı fiildir. „mich“ olmadan cümle tamam değildir. „möchte“ ile birlikte „mich“ fiilden önce gelir, mastar ise sonda kalır.' },
      { bad: 'Ich arbeite gern mit Mensch.', good: 'Ich arbeite gern mit Menschen.', why: '„Menschen“ çoğuldur ve „mit“ Dativ ister. Çoğul isim burada genel anlamdadır („insanlarla“), bu yüzden artikel gerekmez. Tekil „Mensch“ yazılırsa anlam bozulur.' }
    ],
    e: 'Başvuru e-postasında amaç, karşı tarafa kısa sürede kim olduğunu ve neden uygun olduğunu göstermektir. Örnek metin önce nedenini söylüyor (Anzeige), sonra kendini tanıtıyor, sonra yeteneklerini ve zamanını veriyor. „Über eine Antwort freue ich mich sehr“ cümlesinde vurgu için „Über“ başa alınır; fiil yine ikinci sırada kalır.' },

  { id: 'de-a2-s10', scene: 'freizeit',
    title: 'Vom Wochenende erzählen', sub: 'Arkadaşına hafta sonunu anlatmak',
    task: 'Arkadaşın Selin’e hafta sonunu anlatan bir mesaj yaz: Kiminle nerede olduğunu, cumartesi ve pazar günü neler yaptığını (Perfekt ile) yaz ve ona hafta sonunu sor.',
    points: ['Nerede ve kiminle', 'Cumartesi ve pazar (Perfekt)', 'Arkadaşına soru'],
    reg: 'du',
    words: { min: 30, ziel: 55 },
    chunks: ['Am Wochenende war ich …', 'Am Samstag sind wir … gelaufen', 'Am Sonntag habe ich … geschlafen', 'Und du? Was hast du gemacht?', 'Schreib mir bald!'],
    hint: [['wochenende', 'schwester', 'köln', 'war'], ['samstag', 'sonntag', 'haben', 'sind'], ['und du', 'was hast du']],
    model: 'Hallo Selin,\nam Wochenende war ich mit meiner Schwester in Köln. Am Samstag sind wir durch die Altstadt gelaufen und haben Eis gegessen. Abends waren wir im Kino, aber der Film war leider langweilig. Am Sonntag habe ich lange geschlafen und danach die Wohnung aufgeräumt. Und du? Was hast du gemacht? Schreib mir bald!\nLiebe Grüße\nDeniz',
    modeln: 'Merhaba Selin,\nhafta sonu kız kardeşimle Köln’deydim. Cumartesi eski şehirde dolaştık ve dondurma yedik. Akşam sinemaya gittik ama film maalesef sıkıcıydı. Pazar günü uzun uyudum, sonra evi topladım. Ya sen? Sen ne yaptın? Haberini bekliyorum!\nSevgiler\nDeniz',
    check: [
      { k: 'Geçmişte yaptıklarını Perfekt ile yazdın mı?', e: 'Arkadaşa yazarken geçmiş çoğunlukla Perfekt ile anlatılır: „Ich habe geschlafen“, „Wir sind gelaufen“. Hareket fiilleri „sein“, diğerleri çoğunlukla „haben“ alır.' },
      { k: 'Zaman ifadesiyle başlayan cümlelerde fiil ikinci sırada mı?', e: '„Am Sonntag habe ich lange geschlafen.“ „Am Sonntag“ ilk sıradadır, „habe“ ikinci sıradadır ve özne ondan sonra gelir. Türkçedeki gibi özneyi başa koymak yanlış olur.' },
      { k: 'Ayrılabilen fiilin Partizip’inde „ge“ ortada mı? („aufgeräumt“)', e: '„aufräumen“ fiilinin Partizip’i „aufgeräumt“ olur, „ge“ ön ek ile fiil arasına girer. „aufräumt“ yanlıştır.' },
      { k: 'Arkadaşına soru sordun mu? („Und du?“)', e: 'Mesaja karşı tarafı da katmak arkadaşça bir davranıştır. „Und du?“ kısa ve doğal bir kalıptır. Cevap beklediğin zaman „Schreib mir bald!“ gibi bir cümle de ekleyebilirsin.' }
    ],
    mistakes: [
      { bad: 'Am Sonntag ich habe lange geschlafen.', good: 'Am Sonntag habe ich lange geschlafen.', why: 'Zaman ifadesi ilk sırayı aldığında çekimli fiil ikinci sırada gelir ve özne onun arkasına geçer. Türkçede özne başta kalabildiği için Almancaya bu hata taşınır.' },
      { bad: 'Ich habe die Wohnung aufräumt.', good: 'Ich habe die Wohnung aufgeräumt.', why: '„aufräumen“ ayrılabilen fiildir. Partizip’inde „ge“ ayrılan parçadan sonra gelir: auf + ge + räumt = aufgeräumt.' },
      { bad: 'Ich war in Köln mit meine Schwester.', good: 'Ich war mit meiner Schwester in Köln.', why: '„mit“ Dativ ister. „die Schwester“ dişil olduğu için „meiner Schwester“ olur. Ayrıca „mit“ grubu genellikle yer bilgisinden önce gelir.' }
    ],
    e: 'Örnek metin kronolojik ilerliyor: Önce nerede ve kiminle, sonra cumartesi, sonra pazar. Zaman ifadeleri her cümlenin başında durduğu için fiil sürekli ikinci sırada kalıyor; bu, A2 için iyi bir alıştırmadır. „Und du? Was hast du gemacht?“ ile mesaj tek yönlü olmaktan çıkar ve sohbet hâline gelir.' }
]);
