/* Almanca A1 – Schreibwerkstatt / Yazma atölyesi (ADR-13). Format: siehe js/content/de-a2-write.js und docs/adr-13-schreiben.md.
 * IDs de-a1-s01 … s10 sind fest (nie ändern, nie neu vergeben). Erklärsprache: Türkisch. Nur A1-Wortschatz und A1-Grammatik (Präsens, keine Nebensätze). */
window.KOPRU.addWrites('de-a1', [
  { id: 'de-a1-s01', scene: 'kurs',
    title: 'Sich vorstellen', sub: 'Kurs hocasına kendini tanıtmak',
    task: 'Almanca kursuna yeni başladın. Kurs hocan Frau Weber’e kısa ve resmî bir e-posta yaz: Adını, yaşını, nereden geldiğini, nerede oturduğunu, hangi dilleri konuştuğunu ve bir hobini söyle.',
    points: ['Ad ve yaş', 'Nereden geliyorsun, nerede oturuyorsun', 'Konuştuğun diller ve bir hobi'],
    reg: 'Sie',
    words: { min: 25, ziel: 40 },
    chunks: ['Sehr geehrte Frau Weber,', 'Mein Name ist …', 'Ich bin … Jahre alt', 'Ich komme aus …', 'Ich wohne jetzt in …', 'Mein Hobby ist …', 'Mit freundlichen Grüßen'],
    hint: [['name', 'jahre', 'alt'], ['komme', 'wohne', 'aus'], ['spreche', 'hobby', 'deutsch']],
    model: 'Sehr geehrte Frau Weber,\nmein Name ist Ali Demir. Ich bin 25 Jahre alt. Ich komme aus der Türkei, aus Izmir. Ich wohne jetzt in Köln. Ich spreche Türkisch und ein bisschen Deutsch. Mein Hobby ist Fußball.\nMit freundlichen Grüßen\nAli Demir',
    modeln: 'Sayın Weber Hanım,\nadım Ali Demir. 25 yaşındayım. Türkiye’denim, İzmir’den, şimdi Köln’de oturuyorum. Türkçe ve biraz Almanca konuşuyorum. Hobim futbol.\nSaygılarımla\nAli Demir',
    check: [
      { k: 'Üç noktayı da yazdın mı? (ad ve yaş, yer, diller ve hobi)', e: 'Kendini tanıtırken karşı taraf önce kim olduğunu, sonra nereden geldiğini, en sonda da seni biraz tanımak ister. Üç bilgi bir arada olunca metin tam bir tanıtım olur.' },
      { k: 'Çekimli fiil her cümlede ikinci sırada mı?', e: 'Almanca düz cümlede çekimli fiil hep ikinci öğedir: „Ich komme aus …“, „Jetzt wohne ich in Köln.“ Türkçedeki gibi fiili sona koyma.' },
      { k: 'Hitapta „du“ değil „Sie“ kullandın mı?', e: 'Kurs hocasına resmî yazıyorsun. Bu metinde çoğunlukla „ich“ kullanırsın; hitap gerekirse „Sie“ ve „Ihr-“ olur, „du“ değil.' },
      { k: 'Selamlama ve kapanış resmî mi?', e: 'Hocana resmî e-postada „Sehr geehrte Frau Weber,“ ile başlar, „Mit freundlichen Grüßen“ ile bitirirsin. Selamlamadan sonra virgül gelir, ilk cümle küçük harfle başlar.' }
    ],
    mistakes: [
      { bad: 'Ich bin 25 Jahre.', good: 'Ich bin 25 Jahre alt.', why: 'Türkçede „25 yaşındayım“ dersin ve „yaş“ kelimesi içinde kalır. Almancada „alt“ eksik olursa cümle tamamlanmaz: „Ich bin 25 Jahre alt.“' },
      { bad: 'Ich bin aus Türkei.', good: 'Ich komme aus der Türkei.', why: 'Nereden geldiğini „kommen aus“ ile söylersin. „die Türkei“ dişildir ve „aus“dan sonra Dativ gelir: „aus der Türkei“. „Ich bin aus …“ ile de kurulabilir ama „der“ gene gerekir.' },
      { bad: 'Ich Türkisch spreche.', good: 'Ich spreche Türkisch.', why: 'Çekimli fiil ikinci sırada durur: önce özne, sonra „spreche“, sonra dil. Türkçedeki „Türkçe konuşuyorum“ sırasını aynen aktarma.' }
    ],
    e: 'Örnek metin sade ve düzenli: Önce ad ve yaş, sonra yer, sonra diller ve hobi. Her cümle kısa ve fiil ikinci sırada. „Aus der Türkei, aus Izmir“ gibi ülke ve şehir birlikte söylenirse karşı taraf seni daha iyi tanır. Hobi cümlesinde „Mein Hobby ist …“ yeterli; fiil „ist“ ikinci sırada.' },

  { id: 'de-a1-s02', scene: 'urlaub',
    title: 'Eine Postkarte aus dem Urlaub', sub: 'Tatilden bir arkadaşa kartpostal',
    task: 'Antalya’da tatildesin. Arkadaşın Anna’ya bir kartpostal yaz: Nerede olduğunu, havanın nasıl olduğunu, otel ve yemek hakkında ne düşündüğünü ve yarın ne yapacağını söyle.',
    points: ['Nerede olduğun ve hava', 'Otel ve yemek', 'Yarınki plan'],
    reg: 'du',
    words: { min: 25, ziel: 40 },
    chunks: ['Liebe Anna,', 'Ich bin in …', 'Das Wetter ist …', 'Das Hotel ist …', 'Morgen gehe ich …', 'Viele Grüße'],
    hint: [['bin', 'wetter', 'sonne'], ['hotel', 'essen', 'schön', 'lecker'], ['morgen', 'gehe']],
    model: 'Liebe Anna,\nich bin in Antalya. Das Wetter ist super: Die Sonne scheint und das Meer ist warm. Das Hotel ist schön und das Essen ist lecker. Morgen gehe ich schwimmen. Wie ist das Wetter in Köln?\nViele Grüße\nSelin',
    modeln: 'Sevgili Anna,\nAntalya’dayım. Hava süper: Güneş parlıyor ve deniz sıcak. Otel güzel ve yemekler lezzetli. Yarın yüzmeye gidiyorum. Köln’de hava nasıl?\nSevgiler\nSelin',
    check: [
      { k: 'Nerede olduğunu ve havayı yazdın mı?', e: 'Kartpostalın asıl işi budur: „Ich bin in Antalya“ ve „Das Wetter ist …“. Üç dört kısa cümle yeter.' },
      { k: '„sein“ fiilini doğru çekimledin mi? (ich bin, das Hotel ist)', e: '„ich bin“, „du bist“, „das Hotel ist“. Türkçede „-dır/-dir“ eki sıfata eklenirken Almancada ayrı bir fiil olan „sein“ gerekir.' },
      { k: '„Morgen“ ile başlayan cümlede fiil ikinci sırada mı?', e: '„Morgen gehe ich schwimmen.“ Zaman ifadesi başa gelince çekimli fiil hemen arkasından gelir, özne fiilden sonraya geçer. „Morgen ich gehe“ yanlıştır.' },
      { k: 'Arkadaşa „du“ ile yazdın mı? („Liebe Anna“, „Viele Grüße“)', e: 'Arkadaşa kartpostalda „Liebe …,“ ile başlar, „Viele Grüße“ ya da „Liebe Grüße“ ile bitirirsin. „Sehr geehrte“ burada fazla resmî olurdu.' }
    ],
    mistakes: [
      { bad: 'Ich in Antalya bin.', good: 'Ich bin in Antalya.', why: 'Çekimli fiil ikinci sırada kalır. Türkçede fiil sonda olduğu için „bin“ sona atılır; Almancada özne ve fiil yan yana durur.' },
      { bad: 'Das Essen ist lecker und das Hotel sind schön.', good: 'Das Essen ist lecker und das Hotel ist schön.', why: '„das Hotel“ tekildir, fiil de tekil olur: „ist“. „sind“ yalnızca çoğul özneyle ya da „wir/sie/Sie“ ile gelir.' },
      { bad: 'Morgen ich gehe schwimmen.', good: 'Morgen gehe ich schwimmen.', why: '„Morgen“ cümlenin ilk öğesidir. Çekimli fiil ikinci sırada „gehe“, özne „ich“ ise onun arkasında durur. „schwimmen“ mastar olarak sonda kalır.' }
    ],
    e: 'Kartpostal kısa olmak zorunda; bu yüzden her cümlede tek bir bilgi var: yer, hava, otel, yemek, plan. „Die Sonne scheint“ ve „Das Meer ist warm“ gibi basit cümleler yeter. Sonda küçük bir soru („Wie ist das Wetter in Köln?“) kartı karşılıklı bir sohbete çevirir. „Morgen gehe ich schwimmen“ cümlesinde zaman başta olduğu için özne fiilden sonra gelir.' },

  { id: 'de-a1-s03', scene: 'einkauf',
    title: 'Eine Nachricht mit Einkaufsliste', sub: 'Ev arkadaşına alışveriş listesi yazmak',
    task: 'Ev arkadaşın Tom bugün alışverişe gidecek. Ona kısa bir mesaj yaz: Alışveriş yapıp yapamayacağını nazikçe sor, neye ihtiyacınız olduğunu say (en az üç şey) ve bir şeyin bittiğini söyle.',
    points: ['Alışveriş rica etmek', 'Neye ihtiyacınız var', 'Bir şey bitti'],
    reg: 'du',
    words: { min: 20, ziel: 35 },
    chunks: ['Hallo Tom,', 'Kannst du bitte … einkaufen?', 'Wir brauchen …', 'Wir haben keinen … mehr', 'Danke!'],
    hint: [['kannst', 'bitte', 'einkaufen'], ['brauchen', 'milch', 'brot'], ['keinen', 'keine', 'kein', 'mehr']],
    model: 'Hallo Tom,\nkannst du bitte heute einkaufen? Wir brauchen Milch, Brot und ein Kilo Äpfel. Wir haben keinen Reis mehr. Der Supermarkt ist nicht weit. Danke!\nLara',
    modeln: 'Merhaba Tom,\nbugün lütfen alışverişe gidebilir misin? Süt, ekmek ve bir kilo elma lazım. Pirincimiz kalmadı. Süpermarket uzak değil. Teşekkürler!\nLara',
    check: [
      { k: 'Soru cümlesinde fiil başta mı? („Kannst du … einkaufen?“)', e: 'Evet/hayır sorusunda çekimli fiil ilk sıraya gelir: „Kannst du …?“ Türkçedeki „-mi“ eki yoktur. „einkaufen“ mastar olarak sonda kalır.' },
      { k: 'En az üç şeyi, artikelsiz ve doğru yazdın mı? („Milch, Brot, Äpfel“)', e: 'Madde isimleri ve ölçü sözcükleriyle („ein Kilo“) artikel gerekmez: „Wir brauchen Milch und Brot.“ „brauchen“ nesneyle kullanılır.' },
      { k: '„kein“ olumsuzluğunu doğru çektin mi? („keinen Reis“)', e: '„Reis“ (der Reis) eril ve burada nesne olduğu için Akkusativ gerekir: „keinen Reis“. Dişil isimde „keine Milch“, nötrde „kein Brot“ olur.' },
      { k: 'Nezaket kelimeleri var mı? („bitte“, „Danke“)', e: 'Almancada rica mesajında „bitte“ ve sonunda „Danke“ yazmak çok yaygın ve doğaldır. Mesaj kısa kalsa bile sert durmaz.' }
    ],
    mistakes: [
      { bad: 'Wir haben kein Reis mehr.', good: 'Wir haben keinen Reis mehr.', why: '„der Reis“ eril; „haben“den sonra Akkusativ’de „keinen“ gelir. „kein“ nötr ve eril Nominativ’de olur. Türkçede hâl farkı olmadığı için unutulabilir.' },
      { bad: 'Kannst du bitte einkaufen Milch?', good: 'Kannst du bitte Milch einkaufen?', why: 'Mastar (einkaufen) cümlenin sonuna gider. Nesne („Milch“) ondan önce durur: „Milch einkaufen“.' },
      { bad: 'Wir brauchen eine Brot.', good: 'Wir brauchen Brot.', why: '„das Brot“ nötrdür ve genel anlamda kullanılırsa artikelsiz kalır: „Wir brauchen Brot.“ Belirli bir sayı istiyorsan „ein Brot“ (nötr) olur, „eine“ değil.' }
    ],
    e: 'Mesaj kısa ve görev odaklı: önce rica, sonra liste, sonra eksik olan şey. „brauchen“ fiili ihtiyacı söyler, „haben … keinen … mehr“ ise bir şeyin bittiğini. „Der Supermarkt ist nicht weit“ cümlesi ev arkadaşını daha rahat ikna eder. Sondaki „Danke!“ mesajı nazik tutar.' },

  { id: 'de-a1-s04', scene: 'alltag',
    title: 'Mein Tag', sub: 'Bir günümü anlatmak',
    task: 'Almanya’dan bir mektup arkadaşın var, adı Nora. Ona bir günün nasıl geçtiğini yaz: Saat kaçta kalktığını, kahvaltıyı, işe ya da okula nasıl gittiğini ve akşam ne yaptığını anlat.',
    points: ['Kalkma ve kahvaltı saati', 'İşe ya da okula gitmek', 'Akşam ve uyku saati'],
    reg: 'du',
    words: { min: 30, ziel: 45 },
    chunks: ['Liebe Nora,', 'Ich stehe um … Uhr auf', 'Dann frühstücke ich', 'Ich fahre mit dem Bus', 'Am Abend …', 'Liebe Grüße'],
    hint: [['stehe', 'auf', 'uhr', 'frühstücke'], ['fahre', 'bus', 'arbeit', 'schule'], ['abend', 'ins bett', 'gehe']],
    model: 'Liebe Nora,\nmein Tag ist lang. Ich stehe um sechs Uhr auf. Dann frühstücke ich und trinke einen Tee. Ich fahre mit dem Bus zur Arbeit. Von acht bis vier arbeite ich. Am Abend koche ich und sehe fern. Um elf Uhr gehe ich ins Bett.\nLiebe Grüße\nDeniz',
    modeln: 'Sevgili Nora,\ngünüm uzun geçiyor. Saat altıda kalkıyorum. Sonra kahvaltı yapıyorum ve bir çay içiyorum. Otobüsle işe gidiyorum. Sekizden dörde kadar çalışıyorum. Akşam yemek yapıyorum ve televizyon izliyorum. Saat on birde yatıyorum.\nSevgiler\nDeniz',
    check: [
      { k: 'Günü sırayla anlattın mı? (sabah, gün içi, akşam)', e: 'Tagesablauf metni zaman sırasını izler. „Dann“, „Am Abend“, „Um elf Uhr“ gibi bağlayıcılar okuyucunun seni kolay takip etmesini sağlar.' },
      { k: 'Ayrılabilen fiillerin ön eki sonda mı? („aufstehen“, „fernsehen“)', e: '„Ich stehe um sechs Uhr auf.“ Çekimli kısım ikinci sırada, „auf“ ise cümlenin sonunda durur. „fernsehen“ de aynı: „Ich sehe fern.“' },
      { k: 'Saatleri doğru yazdın mı? („um sechs Uhr“, „von acht bis vier“)', e: 'Saat için „um“ (um sechs Uhr), süre için „von … bis …“ kullanılır. „halb sieben“ 6.30 demektir: sonraki saate bakılır.' },
      { k: 'Zaman ifadesiyle başlayan cümlede fiil ikinci sırada mı?', e: '„Am Abend koche ich …“ ve „Dann frühstücke ich …“ doğrudur. „Dann ich frühstücke“ Türkçe sıradır ve yanlıştır.' }
    ],
    mistakes: [
      { bad: 'Ich aufstehe um sechs Uhr.', good: 'Ich stehe um sechs Uhr auf.', why: '„aufstehen“ ayrılabilen fiildir. Çekimli kısım („stehe“) ikinci sırada, ön ek („auf“) cümlenin sonundadır.' },
      { bad: 'Dann ich frühstücke.', good: 'Dann frühstücke ich.', why: '„Dann“ cümlenin ilk öğesidir; fiil hemen ardından gelir ve özne onun arkasına geçer. Türkçede özne başta kalır, Almancada ise fiil yer değiştirmez.' },
      { bad: 'Ich fahre mit der Bus zur Arbeit.', good: 'Ich fahre mit dem Bus zur Arbeit.', why: '„mit“ Dativ ister. „der Bus“ eril olduğu için Dativ’de „dem Bus“ olur. „zur“ = zu + der (die Arbeit dişil).' }
    ],
    e: 'Örnek metin gün içinde ilerliyor: Önce kalkış ve kahvaltı, sonra iş, sonra akşam. Çoğu cümle zaman ifadesiyle ya da özneyle başlıyor; ama çekimli fiil her zaman ikinci sırada. „aufstehen“ ve „fernsehen“ gibi ayrılabilen fiiller A1’de çok sık çıkar, bu yüzden ön eki sonda kontrol et. „mit dem Bus“ ve „zur Arbeit“ ifadeleri Dativ’le gelir.' },

  { id: 'de-a1-s05', scene: 'familie',
    title: 'Meine Familie', sub: 'Kurs hocasına ailemi tanıtmak',
    task: 'Frau Weber derste „Meine Familie“ konusunu işlemek istiyor ve herkesten kısa bir e-posta bekliyor. Ona ailen hakkında yaz: Kaç kişisiniz, eşinin ya da kardeşinin adı ve mesleği, çocukların ya da ebeveynlerin ve nerede oturdukları.',
    points: ['Kaç kişi ve eş ya da kardeş', 'Çocuklar ya da ebeveynler', 'Nerede oturdukları'],
    reg: 'Sie',
    words: { min: 30, ziel: 45 },
    chunks: ['Guten Tag Frau Weber,', 'Wir sind … Personen', 'Mein Mann heißt', 'Wir haben … Kinder', 'Meine Eltern wohnen in', 'Mit freundlichen Grüßen'],
    hint: [['personen', 'mann', 'frau', 'bruder', 'schwester'], ['kinder', 'sohn', 'tochter', 'jahre'], ['wohnen', 'eltern', 'türkei', 'köln']],
    model: 'Guten Tag Frau Weber,\nich schreibe über meine Familie. Wir sind vier Personen. Mein Mann heißt Murat und ist Koch. Wir haben zwei Kinder, einen Sohn und eine Tochter. Mein Sohn ist acht Jahre alt und meine Tochter ist fünf. Meine Eltern wohnen in der Türkei.\nMit freundlichen Grüßen\nDerya Koç',
    modeln: 'İyi günler Weber Hanım,\naileme dair yazıyorum. Dört kişiyiz. Eşimin adı Murat ve aşçı. İki çocuğumuz var, bir oğlumuz ve bir kızımız. Oğlum sekiz yaşında, kızım beş. Annemle babam Türkiye’de oturuyor.\nSaygılarımla\nDerya Koç',
    check: [
      { k: 'Üç noktayı da yazdın mı? (kaç kişi, çocuklar ya da ebeveynler, yer)', e: 'Aile tanıtımı sayı, kişi ve yerle tamamlanır. Aksi hâlde okuyan „Peki kim nerede?“ diye sorar.' },
      { k: '„haben + Akkusativ“ ile çocukları doğru yazdın mı? („einen Sohn“, „eine Tochter“)', e: '„der Sohn“ eril, Akkusativ’de „einen Sohn“; „die Tochter“ dişil, Akkusativ’de „eine Tochter“. „Wir haben zwei Kinder.“ çoğulda artikel yoktur.' },
      { k: 'Sahiplik sözcüklerini doğru kullandın mı? („mein Mann“, „meine Eltern“)', e: '„mein“ eril ve nötrde, „meine“ dişil ve çoğulda gelir: mein Mann, meine Frau, meine Eltern. Türkçedeki „-im“ eki gibi tek biçim yoktur.' },
      { k: 'Resmî selamlama ve kapanış var mı?', e: 'Hocana „Guten Tag Frau Weber,“ ile başlayıp „Mit freundlichen Grüßen“ ile bitirirsin. „Hallo“ ve „Tschüss“ burada fazla gündelik kalırdı.' }
    ],
    mistakes: [
      { bad: 'Wir haben ein Sohn und ein Tochter.', good: 'Wir haben einen Sohn und eine Tochter.', why: '„haben“den sonra nesne Akkusativ’dedir. „der Sohn“ eril olduğu için „einen“, „die Tochter“ dişil olduğu için „eine“ gerekir.' },
      { bad: 'Meine Mann heißt Murat.', good: 'Mein Mann heißt Murat.', why: '„der Mann“ eril; sahiplik sözcüğü „mein“ olur. „meine“ dişil ve çoğul isimler içindir. Türkçede böyle bir ayrım olmadığı için karışır.' },
      { bad: 'Meine Eltern wohnt in der Türkei.', good: 'Meine Eltern wohnen in der Türkei.', why: '„Meine Eltern“ çoğuldur, bu yüzden fiil de çoğul olur: „wohnen“. „wohnt“ tekil özne içindir (er wohnt).' }
    ],
    e: 'Örnek metin üç parçadan oluşuyor: kaç kişi ve eş, çocuklar, ebeveynler. Her parça kısa. „Wir haben … Kinder, einen Sohn und eine Tochter“ cümlesi Akkusativ’i gösteriyor; çoğulda artikel yok. „meine Eltern“ çoğul olduğu için fiil „wohnen“ olur. Hoca için resmî dili koruyoruz: „Guten Tag Frau Weber“ ve „Mit freundlichen Grüßen“.' },

  { id: 'de-a1-s06', scene: 'wohnung',
    title: 'Eine E-Mail wegen der Wohnung', sub: 'Daire ilanı için ev sahibine e-posta',
    task: 'Gazetede iki odalı bir daire ilanı gördün. Ev sahibi Herr Schröder’e resmî bir e-posta yaz: Daire için yazdığını söyle, dairenin hâlâ boş olup olmadığını, kiranın ne kadar olduğunu sor ve cumartesi günü dairenin görülüp görülemeyeceğini sor.',
    points: ['Neden yazdığın', 'Daire boş mu, kira ne kadar', 'Cumartesi görmek istemek'],
    reg: 'Sie',
    words: { min: 25, ziel: 40 },
    chunks: ['Sehr geehrter Herr Schröder,', 'Ich schreibe wegen der Wohnung', 'Ist die Wohnung noch frei?', 'Wie hoch ist die Miete?', 'Kann ich die Wohnung am Samstag ansehen?', 'Mit freundlichen Grüßen'],
    hint: [['schreibe', 'wohnung', 'wegen'], ['frei', 'miete', 'hoch'], ['samstag', 'ansehen', 'uhr']],
    model: 'Sehr geehrter Herr Schröder,\nich schreibe wegen der Wohnung in der Gartenstraße. Ist die Wohnung noch frei? Wie hoch ist die Miete? Kann ich die Wohnung am Samstag ansehen? Ich habe um zehn Uhr Zeit.\nMit freundlichen Grüßen\nDerya Koç',
    modeln: 'Sayın Schröder Bey,\nGartenstraße’deki daire için yazıyorum. Daire hâlâ boş mu? Kira ne kadar? Daireyi cumartesi günü görebilir miyim? Saat onda vaktim var.\nSaygılarımla\nDerya Koç',
    check: [
      { k: 'Resmî hitap kullandın mı? („Sehr geehrter Herr Schröder,“)', e: 'Erkek muhatap için „Sehr geehrter Herr …,“, kadın için „Sehr geehrte Frau …,“ yazılır. Hitap virgülle biter ve alt satır küçük harfle başlar.' },
      { k: 'Evet/hayır sorularında fiil başta mı? („Ist die Wohnung …?“, „Kann ich …?“)', e: 'Almancada soru cümlesinde çekimli fiil başa gelir: „Ist die Wohnung frei?“ Türkçedeki „-mi“ eki yerine fiil yer değiştirir.' },
      { k: '„ansehen“ ayrılabilen fiilini doğru kullandın mı?', e: '„Kann ich die Wohnung ansehen?“ Modal fiil olduğu için „ansehen“ mastar olarak cümlenin sonunda durur ve ayrılmaz.' },
      { k: 'Gün ve saat için doğru edatları kullandın mı? („am Samstag“, „um zehn Uhr“)', e: 'Gün için „am“, saat için „um“. Türkçede „cumartesi günü saat onda“ ekle çözülür; Almancada iki ayrı edat gerekir.' }
    ],
    mistakes: [
      { bad: 'Ich schreibe für die Wohnung.', good: 'Ich schreibe wegen der Wohnung.', why: 'Bir şey yüzünden ya da bir konuyla ilgili yazarken „wegen“ kullanılır. „für“ amaç ya da kişi için gelir ve burada anlamı bozar. „wegen“den sonra „der Wohnung“ gelir.' },
      { bad: 'Wie viel ist die Miete?', good: 'Wie hoch ist die Miete?', why: 'Kira gibi tutarlar için „Wie hoch ist …?“ sorulur. „Wie viel“ sayı ya da miktar için kullanılır ve bu cümlede tuhaf durur.' },
      { bad: 'Kann ich die Wohnung sehen an Samstag?', good: 'Kann ich die Wohnung am Samstag ansehen?', why: 'Günlerde „am“ kullanılır (an + dem). Zaman ifadesi mastardan önce gelir; „ansehen“ cümlenin sonunda durur.' }
    ],
    e: 'Resmî bir e-postada önce neden yazdığını, sonra soruları, en sonda randevu isteğini yaz. Sorular kısa ve net: „Ist die Wohnung noch frei?“ ve „Wie hoch ist die Miete?“. „Kann ich … ansehen?“ cümlesinde modal fiil ikinci sırada, mastar sonda. Sonda „Ich habe um zehn Uhr Zeit.“ ev sahibinin işini kolaylaştırır.' },

  { id: 'de-a1-s07', scene: 'feier',
    title: 'Einladung per SMS', sub: 'Doğum günü partisi için SMS davetiyesi',
    task: 'Cumartesi günü doğum günün. Arkadaşın Mia’yı SMS ile davet et: Saati ve adresi yaz, gelip gelemeyeceğini sor ve kısaca cevap vermesini iste.',
    points: ['Davet ve doğum günü', 'Saat ve adres', 'Gelip gelemeyeceğini sorma'],
    reg: 'du',
    words: { min: 20, ziel: 30 },
    chunks: ['Hallo Mia,', 'Ich habe am Samstag Geburtstag', 'Ich lade dich ein', 'Die Party ist um … Uhr', 'Hast du Zeit?', 'Bis bald!'],
    hint: [['geburtstag', 'einladung', 'lade'], ['uhr', 'straße', 'bei mir'], ['zeit', 'kommen', 'antworte']],
    model: 'Hallo Mia,\nich habe am Samstag Geburtstag. Ich lade dich ein! Die Party ist um 18 Uhr bei mir, Gartenstraße 8. Hast du Zeit? Bitte antworte kurz.\nBis bald!\nAli',
    modeln: 'Merhaba Mia,\ncumartesi doğum günüm. Seni davet ediyorum! Parti saat 18’de bende, Gartenstraße 8. Vaktin var mı? Lütfen kısaca cevap ver.\nGörüşürüz!\nAli',
    check: [
      { k: 'Gün, saat ve adres yazılı mı?', e: 'Davet mesajında üç şey mutlaka olmalı: ne zaman, nerede, ne için. Biri eksik olursa Mia sana tekrar yazmak zorunda kalır.' },
      { k: '„einladen“ ayrılabilen fiilini doğru yazdın mı? („Ich lade dich ein.“)', e: 'Çekimli kısım („lade“) ikinci sırada, „ein“ ise cümlenin sonunda durur. „dich“ Akkusativ’dir (seni).' },
      { k: 'Saat ve gün için doğru edatları kullandın mı? („am Samstag“, „um 18 Uhr“)', e: 'Gün için „am“, saat için „um“ kullanılır. „bei mir“ = bende (evimde).' },
      { k: 'Arkadaşça bir dil mi? („Hallo“, „du“, „Bis bald!“)', e: 'SMS’te kısa ve samimi yazarsın: „Hallo Mia,“, „du“, „Bis bald!“. „Mit freundlichen Grüßen“ burada fazla resmî olurdu.' }
    ],
    mistakes: [
      { bad: 'Ich einlade dich.', good: 'Ich lade dich ein.', why: '„einladen“ ayrılabilen fiil: „ein“ cümlenin sonuna gider. Çekimli kısım „lade“ ise ikinci sırada kalır.' },
      { bad: 'Ich habe Geburtstag am Samstag.', good: 'Ich habe am Samstag Geburtstag.', why: 'İlk cümle de doğru anlaşılır ama Almancada zaman bilgisi genellikle öne alınır. Fiil ikinci sırada kaldığı sürece „Am Samstag habe ich Geburtstag.“ da doğrudur.' },
      { bad: 'Hast du Zeit kommen?', good: 'Hast du Zeit? Kannst du kommen?', why: 'İki ayrı soruyu iki cümleyle sormak A1’de en güvenlisi: „Hast du Zeit?“ ve „Kannst du kommen?“. Tek cümlede birleştirmek için A2’de öğreneceğin yapı gerekir.' }
    ],
    e: 'SMS davetinde her cümle kısa ve tek bir bilgi verir: doğum günü, davet, saat ve adres, soru. „Ich lade dich ein“ A1’in en önemli ayrılabilen fiillerinden biridir. Sonda „Bis bald!“ mesajı sıcak bitirir.' },

  { id: 'de-a1-s08', scene: 'cafe',
    title: 'Eine Bestellung für das Café', sub: 'Kafeye mesajla sipariş vermek',
    task: 'Bir kafeye mesajla sipariş vereceksin ve siparişi saat 15’te alacaksın. Kibarca selam ver, iki çay, bir kahve ve bir dilim pasta söyle ve saati yaz. Fiyatı sor.',
    points: ['Selam ve sipariş', 'Almak için saat', 'Fiyatı sormak'],
    reg: 'Sie',
    words: { min: 20, ziel: 35 },
    chunks: ['Guten Tag,', 'Ich möchte bestellen', 'Ich hole die Bestellung um … Uhr ab', 'Was kostet das zusammen?', 'Mit freundlichen Grüßen'],
    hint: [['möchte', 'bestellen', 'tee', 'kaffee'], ['hole', 'uhr', 'ab'], ['kostet', 'preis']],
    model: 'Guten Tag,\nich möchte bestellen: zwei Tee mit Zucker, einen Kaffee mit Milch und ein Stück Apfelkuchen. Ich hole die Bestellung um 15 Uhr ab. Was kostet das zusammen?\nMit freundlichen Grüßen\nLena Kaya',
    modeln: 'İyi günler,\nsipariş vermek istiyorum: iki şekerli çay, bir sütlü kahve ve bir dilim elmalı turta. Siparişi saat 15’te alacağım. Hepsi toplam ne kadar?\nSaygılarımla\nLena Kaya',
    check: [
      { k: 'Siparişi kibar kalıpla verdin mi? („Ich möchte …“)', e: '„Ich möchte …“ kibar bir isteme biçimidir. „Ich will …“ fazla sert durur. Garsona ya da satıcıya hep „möchte“ ya da „Ich hätte gern …“ kullan.' },
      { k: 'Sipariş ettiğin şeylerde Akkusativ var mı? („einen Kaffee“, „ein Stück“)', e: '„der Kaffee“ eril, Akkusativ’de „einen Kaffee“. „das Stück“ nötr: „ein Stück“. Siparişte „zwei Tee“ (iki bardak) denir; normal çoğul „die Tees“.' },
      { k: '„abholen“ ayrılabilen fiilini doğru yazdın mı? („Ich hole … ab.“)', e: 'Çekimli kısım („hole“) ikinci sırada, „ab“ ise cümlenin sonunda durur. „Ich hole die Bestellung um 15 Uhr ab.“' },
      { k: 'Resmî hitap ve kapanış var mı?', e: 'Kafeye mesaj yazarken „Guten Tag,“ ile başlayıp „Mit freundlichen Grüßen“ ile bitirirsin. Kısa ve kibar yazman yeterli.' }
    ],
    mistakes: [
      { bad: 'Ich will zwei Tee und ein Kaffee.', good: 'Ich möchte zwei Tee und einen Kaffee.', why: '„will“ Türkçedeki „istiyorum“un sert hâli gibi durur; „möchte“ kibar olandır. Ayrıca „der Kaffee“ eril olduğu için Akkusativ’de „einen Kaffee“ gerekir.' },
      { bad: 'Ich abhole die Bestellung um 15 Uhr.', good: 'Ich hole die Bestellung um 15 Uhr ab.', why: '„abholen“ ayrılır: „hole“ ikinci sırada, „ab“ sonda. Türkçedeki gibi fiilin tek parça sonda durması burada geçerli değildir.' },
      { bad: 'Was kosten das zusammen?', good: 'Was kostet das zusammen?', why: '„das“ tekildir, fiil de tekil olur: kostet.' }
    ],
    e: 'Sipariş mesajı kısa, düzenli ve kibar: Selam, sipariş, saat, fiyat sorusu. İçeceklerde „mit Zucker“ ve „mit Milch“ gibi „mit“ ifadeleri kullanılıyor; „mit Zucker“, „mit Milch“ gibi madde isimlerinde artikel kullanılmaz. „Ich hole … ab“ ayrılabilen fiili A1’de sık çıkar.' },

  { id: 'de-a1-s09', scene: 'amt',
    title: 'Anmeldung für den Deutschkurs', sub: 'Almanca kursu kayıt formunu cümlelerle yazmak',
    task: 'Bir dil okuluna kurs kaydı için e-posta yazıyorsun. Form yerine cümlelerle yaz: Adın ve doğum tarihin, adresin ve telefon numaran, hangi kursa katılmak istediğin.',
    points: ['Ad ve doğum tarihi', 'Adres ve telefon numarası', 'İstediğin kurs'],
    reg: 'Sie',
    words: { min: 25, ziel: 40 },
    chunks: ['Sehr geehrte Damen und Herren,', 'Mein Name ist …', 'Ich bin am … geboren', 'Ich wohne in …', 'Meine Telefonnummer ist …', 'Ich möchte den Deutschkurs', 'Mit freundlichen Grüßen'],
    hint: [['name', 'geboren'], ['wohne', 'straße', 'telefon', 'nummer'], ['möchte', 'kurs', 'abend', 'morgen']],
    model: 'Sehr geehrte Damen und Herren,\nmein Name ist Can Yılmaz. Ich bin am 5. Mai 1998 geboren. Ich wohne in der Lindenstraße 5 in Köln. Meine Telefonnummer ist 0151 234567. Ich möchte den Deutschkurs am Abend besuchen.\nMit freundlichen Grüßen\nCan Yılmaz',
    modeln: 'Sayın yetkililer,\nadım Can Yılmaz. 5 Mayıs 1998’de doğdum. Köln’de Lindenstraße 5’te oturuyorum. Telefon numaram 0151 234567. Akşam Almanca kursuna katılmak istiyorum.\nSaygılarımla\nCan Yılmaz',
    check: [
      { k: 'Formdaki üç bilgiyi de cümleyle yazdın mı?', e: 'Formda sadece „Name: …“ yazar; sen ise cümle kurarsın: „Mein Name ist …“. Böylece hem anlam netleşir hem de dil pratiği yaparsın.' },
      { k: 'Doğum tarihini ve adresi doğru yazdın mı? („Ich bin am 5. Mai … geboren“, „in der Lindenstraße“)', e: 'Tarih için „am“ + sıra sayısı kullanılır: am 5. Mai; „geboren“ en sonda durur. Sokak için „in der Lindenstraße“ (die Straße dişil, Dativ).' },
      { k: 'Telefon numarasını cümleyle yazdın mı? („Meine Telefonnummer ist …“)', e: '„die Telefonnummer“ dişil; sahiplik „meine“ olur: meine Telefonnummer. Rakamlar sayılar gibi ayrı ayrı okunabilir.' },
      { k: 'Resmî selamlama ve kapanış var mı?', e: 'Bir kuruma yazarken „Sehr geehrte Damen und Herren,“ ile başlar, „Mit freundlichen Grüßen“ ile bitirirsin. Karşındaki kişiyi tanımıyorsan bu hitap en güvenlisidir.' }
    ],
    mistakes: [
      { bad: 'Meine Name ist Can Yılmaz.', good: 'Mein Name ist Can Yılmaz.', why: '„der Name“ eril; sahiplik sözcüğü „mein“ olur. „meine“ dişil ve çoğul isimlerle kullanılır.' },
      { bad: 'Ich wohne in Lindenstraße 5.', good: 'Ich wohne in der Lindenstraße 5.', why: 'Sokak adlarında „in der“ kullanılır (die Straße dişil, Dativ). Şehir adlarında ise artikel yoktur: „in Köln“.' },
      { bad: 'Ich möchte besuchen den Deutschkurs.', good: 'Ich möchte den Deutschkurs besuchen.', why: '„möchte“ gibi modal fiilden sonra ikinci fiil mastar olarak sona gider. „den Deutschkurs“ nesnedir ve mastardan önce durur.' }
    ],
    e: 'Formu cümlelere çevirmek A1’de iyi bir alıştırmadır: „Name“, „Adresse“ ve „Telefonnummer“ gibi sözcükleri „mein/meine“ ile, doğum tarihini ise „Ich bin am … geboren“ ile yazarsın. Her bilgi ayrı bir cümlede; çekimli fiil ikinci sırada. Son cümlede „möchte … besuchen“ modal fiil yapısıdır: mastar sonda.' },

  { id: 'de-a1-s10', scene: 'freizeit',
    title: 'Eine kurze E-Mail an einen Freund', sub: 'Bir arkadaşa kısa e-posta',
    task: 'Arkadaşın Max’a e-posta yaz: Nasıl olduğunu sor ve kendi durumunu söyle, yeni işini anlat (nerede, saat kaçta başlıyor) ve hafta sonu buluşmak isteyip istemediğini sor.',
    points: ['Hâl hatır', 'Yeni iş', 'Hafta sonu için soru'],
    reg: 'du',
    words: { min: 25, ziel: 40 },
    chunks: ['Hallo Max,', 'Wie geht es dir?', 'Mir geht es gut', 'Ich habe jetzt eine neue Arbeit', 'Die Arbeit beginnt um … Uhr', 'Hast du am Wochenende Zeit?', 'Dein Ali'],
    hint: [['geht', 'gut', 'dir'], ['arbeit', 'café', 'beginnt', 'uhr'], ['wochenende', 'zeit', 'kino', 'treffen']],
    model: 'Hallo Max,\nwie geht es dir? Mir geht es gut. Ich habe jetzt eine neue Arbeit in einem Café. Die Arbeit beginnt um acht Uhr. Am Wochenende habe ich frei. Hast du am Wochenende Zeit? Wir können ins Kino gehen.\nDein Ali',
    modeln: 'Merhaba Max,\nnasılsın? Ben iyiyim. Artık bir kafede yeni bir işim var. İş sekizde başlıyor. Hafta sonu izinliyim. Hafta sonu vaktin var mı? Sinemaya gidebiliriz.\nSevgiler\nAli',
    check: [
      { k: '„Wie geht es dir?“ sorusunu ve cevabını yazdın mı?', e: '„Wie geht es dir?“ = Nasılsın? Cevap: „Mir geht es gut.“ Kalıp olduğu için aynen öğren: „dir“ ve „mir“ Dativ’dir, „du“ ve „ich“ değil.' },
      { k: '„eine neue Arbeit“ gibi dişil Akkusativ’i doğru yazdın mı?', e: '„die Arbeit“ dişil; Akkusativ’de „eine neue Arbeit“. Sıfat „neu“ artikelin arkasından ek alır.' },
      { k: 'Hafta sonu sorusunda fiil başta mı? („Hast du … Zeit?“)', e: 'Evet/hayır sorusu fiille başlar: „Hast du Zeit?“ Zaman ifadesi araya girer: „Hast du am Wochenende Zeit?“' },
      { k: 'Arkadaşça selamlama ve kapanış var mı?', e: 'Arkadaşa „Hallo Max,“ ile başlar, „Dein Ali“ ya da „Viele Grüße“ ile bitirirsin. „Dein/Deine“ yazmak çok yaygın ve sıcaktır.' }
    ],
    mistakes: [
      { bad: 'Wie geht es du?', good: 'Wie geht es dir?', why: '„gehen“ burada kişiye Dativ ile bağlanır: „Wie geht es dir?“ „du“ Nominativ’dir ve bu kalıpta yer almaz.' },
      { bad: 'Ich habe jetzt ein neue Arbeit.', good: 'Ich habe jetzt eine neue Arbeit.', why: '„die Arbeit“ dişildir; Akkusativ’de „eine“ gerekir. „ein“ eril ve nötr isimlerde kullanılır.' },
      { bad: 'Die Arbeit anfängt um acht Uhr.', good: 'Die Arbeit fängt um acht Uhr an.', why: '„anfangen“ ayrılabilen fiildir; „an“ cümlenin sonuna gider. „beginnen“ ise ayrılmaz: „Die Arbeit beginnt um acht Uhr.“' }
    ],
    e: 'Kısa bir arkadaş e-postası dört parçadan oluşur: hâl hatır, haber, plan, soru. „Wie geht es dir?“ ve „Mir geht es gut.“ A1’de ezberlenecek kalıplardır. „Wir können ins Kino gehen“ cümlesi modal fiil yapısıdır: „können“ ikinci sırada, „gehen“ sonda. Sondaki „Dein Ali“ mesajı samimi bitirir.' }
]);
