/* Deutsch A1 – Alltagsdialoge für Türkischsprechende (Übersetzungen, Fragen und Erklärungen auf Türkisch)
 * Format: K.addDialog(id, { level, title, sub, lines:[{ s, g:'f'|'m', t, n }], questions:[Übungen] })
 * IDs (Dialog und Fragen) NIE ändern oder wiederverwenden – daran hängt der Lernfortschritt.
 */
(function (K) {

K.addDialog('de-a1-d01', {
  level: 'A1', title: 'Sich im Kurs vorstellen', sub: 'Kursta tanışma',
  role: 'Kerem (kursa yeni gelen)', roleG: 'm',
  lines: [
    { s: "Lena", g: "f", t: "Hallo! Bist du auch neu im Kurs?", n: "Selam! Sen de kursta yeni misin?" },
    { me: true, id: "de-a1-d01.c1",
      o: ["Ja, heute ist meine erste Tag. Ich heiße Kerem.", "Ja, heute ist mein erster Tag. Ich heiße Kerem.", "Ja, heute ist mein erster Tag. Ich bin heiße Kerem."], a: 1,
      why: { 0: "„der Tag“ eril olduğu için „mein erster Tag“ denir. Türkçede cinsiyet olmadığından „meine erste“ gibi dişil bir biçim kolay kaçar; her isimle artikelini birlikte öğren.", 2: "„heißen“ zaten „adı … olmak“ demektir ve çekimlenir: „Ich heiße Kerem.“ Araya „bin“ koyamazsın; „bin“ ve „heiße“ aynı cümlede iki fiil olur." },
      e: "„Ich heiße …“ = Benim adım … Bu kalıpta „bin“ yoktur. „der Tag“ eril: mein erster Tag. Fiil cümlede ikinci sırada kalır: „heute ist mein erster Tag“.", n: "Evet, bugün ilk günüm. Benim adım Kerem." },
    { s: "Lena", g: "f", t: "Freut mich, Kerem. Ich bin Lena. Woher kommst du?", n: "Memnun oldum Kerem. Ben Lena. Nerelisin?" },
    { me: true, id: "de-a1-d01.c2",
      o: ["Ich komme aus der Türkei, aus Bursa. Und du?", "Ich komme in der Türkei, aus Bursa. Und du?", "Ich komme aus die Türkei, aus Bursa. Und du?"], a: 0,
      why: { 1: "„Woher?“ (nereden?) sorusuna „aus“ ile cevap verilir. „in“ yer bildirir (Türkiye'de), geldiğin yeri değil.", 2: "„aus“ her zaman Dativ ister. „die Türkei“ dişil olduğu için Dativ'de „der Türkei“ olur." },
      e: "„aus + Dativ“ nereden geldiğini söyler: aus der Türkei. Kısa ve doğal bir devam sorusu: „Und du?“ (Ya sen?).", n: "Türkiye'denim, Bursa'dan. Ya sen?" },
    { s: "Lena", g: "f", t: "Ich komme aus Polen. Ich wohne jetzt in Köln.", n: "Ben Polonyalıyım. Şimdi Köln'de oturuyorum." },
    { s: "Kerem", g: "m", t: "Ich auch! Seit wann bist du in Deutschland?", n: "Ben de! Ne zamandan beri Almanya'dasın?" },
    { s: "Lena", g: "f", t: "Seit sechs Monaten. Und du?", n: "Altı aydır. Ya sen?" },
    { me: true, id: "de-a1-d01.c3",
      o: ["Erst seit drei Woche. Mein Deutsch ist noch nicht so gut.", "Erst seit drei Wochen. Mein Deutsch ist noch nicht gut so.", "Erst seit drei Wochen. Mein Deutsch ist noch nicht so gut."], a: 2,
      why: { 0: "Sayıdan sonra çoğul gelir (Türkçede ‚üç hafta‘ tekildir): die Woche → die Wochen.", 1: "Burada „so“ sıfattan önce gelir: „nicht so gut“." },
      e: "„seit drei Wochen“ = üç haftadır. „noch nicht so gut“: olumsuzluk „nicht“ sıfatın önüne gelir, „so“ onunla birlikte durur.", n: "Daha üç haftadır. Almancam henüz pek iyi değil." },
    { s: "Lena", g: "f", t: "Doch, du sprichst schon gut! Wir können zusammen lernen.", n: "Yok canım, şimdiden iyi konuşuyorsun! Birlikte çalışabiliriz." }
  ],
  questions: [
    { id: "de-a1-d01.q1", t: "mc", q: "Kerem nereli?", o: ["Aus Polen", "Aus der Türkei", "Aus Köln"], a: 1,
      why: { 0: "Polonyalı olan Lena: „Ich komme aus Polen.“", 2: "Köln'de ikisi de oturuyor ama Kerem „Ich komme aus der Türkei“ diyor." },
      e: "Kerem: „Ich komme aus der Türkei, aus Bursa.“ Ülke adlarının çoğu artikelsizdir (aus Polen), ama „die Türkei“ artikel alır: aus der Türkei." },
    { id: "de-a1-d01.q2", t: "mc", q: "Lena ne zamandır Almanya'da?", o: ["Seit drei Wochen", "Seit sechs Monaten", "Seit sechs Jahren"], a: 1,
      why: { 0: "Üç hafta Kerem'in süresi.", 2: "Lena „Monaten“ (ay) diyor, „Jahren“ (yıl) değil." },
      e: "„Seit sechs Monaten“ = altı aydır. „seit“, Türkçedeki „-dır/-dir“ (altı aydır) ya da „-den beri“ anlamını verir. „seit“ Dativ ister; bu yüzden çoğul isim sonuna -n alır: die Monate → seit sechs Monate**n**." },
    { id: "de-a1-d01.q3", t: "listen", say: "Ich heiße Kerem.", q: "Ne duydun?", o: ["Ich heiße Kerem.", "Ich hieß Kerem.", "Ich weiß, Kerem."], a: 0,
      why: { 1: "„hieß“ geçmiş zamandır (adım … idi) ve „hiis“ diye okunur; duyduğun „hayse“ idi.", 2: "„weiß“ (biliyorum) „vays“ diye okunur, „h“ ile başlamaz." },
      e: "„Ich heiße …“ = Benim adım … – kendini tanıtmanın en yaygın yolu." },
    { id: "de-a1-d01.q4", t: "mc", q: "„Ich auch!“ ne demek?", o: ["Ben de!", "Ben değilim!", "Sen de mi?"], a: 0,
      why: { 1: "Olumsuz olsaydı „Ich nicht!“ denirdi.", 2: "Soru olsaydı „Du auch?“ denirdi." },
      e: "„auch“ = de/da. „Ich auch!“ = Ben de! Kerem de Köln'de oturuyor." }
  ]
});

K.addDialog('de-a1-d02', {
  level: 'A1', title: 'Beim Bäcker', sub: 'Fırında',
  role: 'Müşteri (fırında)', roleG: 'm',
  lines: [
    { s: "Verkäuferin", g: "f", t: "Guten Morgen! Was darf es sein?", n: "Günaydın! Ne arzu edersiniz?" },
    { me: true, id: "de-a1-d02.c1",
      o: ["Gute Nacht! Vier Brötchen, bitte.", "Guten Morgen! Ich will vier Brötchen.", "Guten Morgen! Vier Brötchen, bitte."], a: 2,
      why: { 0: "„Gute Nacht“ sadece yatarken denir; sabah fırında „Guten Morgen“ dersin.", 1: "„Ich will“ Türkçedeki „istiyorum“un sert hâli gibi durur. Satıcıya nazik bir siparişte „…, bitte“ ya da „Ich hätte gern …“ kullan." },
      e: "Fırında kısa ve kibar sipariş: miktar + isim + „bitte“. Almancada „bitte“ siparişi yumuşatan en önemli kelimedir.", n: "Günaydın! Dört tane küçük ekmek lütfen." },
    { s: "Verkäuferin", g: "f", t: "Gern. Normale Brötchen oder Körnerbrötchen?", n: "Tabii. Sade mi olsun, tahıllı mı?" },
    { s: "Kunde", g: "m", t: "Zwei normale und zwei mit Körnern, bitte.", n: "İki sade, iki de tahıllı lütfen." },
    { s: "Verkäuferin", g: "f", t: "Sonst noch etwas?", n: "Başka bir şey?" },
    { me: true, id: "de-a1-d02.c2",
      o: ["Ja, ein Stück Apfelkuchen.", "Ja, ein Apfelkuchen Stück.", "Ja, eine Stück Apfelkuchen."], a: 0,
      why: { 1: "Almancada da Türkçedeki gibi ölçü önce gelir: bir dilim elmalı turta → ein Stück Apfelkuchen.", 2: "„das Stück“ nötr olduğu için „ein Stück“ olur, „eine“ değil." },
      e: "Ölçü + madde: „ein Stück Kuchen“, „ein Kilo Äpfel“. Ölçü kelimesi önce gelir. „das Stück“ nötr: ein Stück.", n: "Evet, bir dilim elmalı turta." },
    { s: "Verkäuferin", g: "f", t: "Das macht zusammen fünf Euro vierzig.", n: "Hepsi beş avro kırk sent ediyor." },
    { me: true, id: "de-a1-d02.c3",
      o: ["Kann ich mit Karte zu zahlen?", "Kann ich mit Karte zahlen?", "Kann ich mit Karte zahle?"], a: 1,
      why: { 0: "Modal fiilden sonra „zu“ gelmez; mastar yalın kalır: zahlen.", 2: "„können“ ile birlikte ikinci fiil çekimlenmez, mastar (zahlen) olarak cümlenin sonuna gider." },
      e: "Modal fiilli soru: „Kann ich …?“ + mastar en sonda: „Kann ich mit Karte zahlen?“ „mit + Dativ“ burada artikelsiz kullanılır.", n: "Kartla ödeyebilir miyim?" },
    { s: "Verkäuferin", g: "f", t: "Ja, natürlich. Halten Sie die Karte bitte hier dran.", n: "Tabii ki. Kartı lütfen buraya yaklaştırın." },
    { s: "Kunde", g: "m", t: "Danke schön. Schönen Tag noch!", n: "Çok teşekkürler. İyi günler!" }
  ],
  questions: [
    { id: "de-a1-d02.q1", t: "mc", q: "Müşteri kaç tane küçük ekmek (Brötchen) alıyor?", o: ["Zwei", "Vier", "Sechs"], a: 1,
      why: { 0: "İkisi sade, ikisi tahıllı – toplam dört.", 2: "Altı denmiyor; müşteri „Vier Brötchen, bitte“ diyor." },
      e: "„Vier Brötchen“ – ikisi sade (normal), ikisi tahıllı (mit Körnern)." },
    { id: "de-a1-d02.q2", t: "mc", q: "Müşteri başka ne alıyor?", o: ["Ein Stück Apfelkuchen", "Einen Apfelsaft", "Ein Brot"], a: 0,
      why: { 1: "„Apfel“ kelimesini duydun ama içecek değil, turta: „Apfelkuchen“.", 2: "Büyük ekmek (Brot) almıyor, sadece Brötchen." },
      e: "„ein Stück Apfelkuchen“ = bir dilim elmalı turta. „das Stück“ = parça, dilim." },
    { id: "de-a1-d02.q3", t: "listen", say: "Das macht zusammen fünf Euro vierzig.", q: "Ne duydun? Toplam ne kadar?", o: ["5,40 €", "4,50 €", "5,14 €"], a: 0,
      why: { 1: "Önce „fünf Euro“ (5 avro), sonra „vierzig“ (40 sent) geliyor.", 2: "„vierzig“ = 40. 14 olsaydı „vierzehn“ denirdi." },
      e: "Almancada fiyat söylenirken önce avro, sonra sent gelir: „fünf Euro vierzig“ = 5,40 €. „Das macht …“ = … ediyor/tutuyor." },
    { id: "de-a1-d02.q4", t: "mc", q: "„Sonst noch etwas?“ ne demek?", o: ["Başka bir şey?", "Hepsi ne kadar ediyor?", "Kartla mı ödüyorsunuz?"], a: 0,
      why: { 1: "Fiyat sorulmuyor; fiyatı satıcı „Das macht …“ diye söylüyor.", 2: "Ödeme şekli sorulmuyor; bu „Zahlen Sie mit Karte?“ olurdu." },
      e: "„Sonst noch etwas?“ satıcıların çok sık sorduğu bir sorudur. Cevap: „Nein, danke. Das ist alles.“ (Hayır, teşekkürler. Bu kadar.)" }
  ]
});

K.addDialog('de-a1-d03', {
  level: 'A1', title: 'Im Café', sub: 'Kafede sipariş',
  role: 'Ayşe (kafede müşteri)', roleG: 'f',
  lines: [
    { s: "Kellner", g: "m", t: "Hallo! Was möchten Sie trinken?", n: "Merhaba! Ne içmek istersiniz?" },
    { me: true, id: "de-a1-d03.c1",
      o: ["Ich hätte gern ein Tee.", "Ich habe gern einen Tee.", "Ich hätte gern einen Tee."], a: 2,
      why: { 0: "Eril isimde ‚ein‘ yalnızca Nominativ'de olur; Akkusativ'de ‚einen‘.", 1: "„Ich habe gern einen Tee“ = Çayı severim, genelde içerim. Sipariş için „Ich hätte gern …“ (bir … alabilir miyim) gerekir." },
      e: "„Ich hätte gern …“ = … alabilir miyim, kibar sipariş kalıbı. Eril isimde Akkusativ: der Tee → einen Tee.", n: "Bir çay alabilir miyim?" },
    { s: "Kellner", g: "m", t: "Schwarzen Tee oder Pfefferminztee?", n: "Siyah çay mı, nane çayı mı?" },
    { s: "Ayşe", g: "f", t: "Schwarzen Tee, bitte. Mit Zucker.", n: "Siyah çay lütfen. Şekerli." },
    { s: "Kellner", g: "m", t: "Gern. Möchten Sie auch etwas essen?", n: "Tabii. Bir şey de yemek ister misiniz?" },
    { me: true, id: "de-a1-d03.c2",
      o: ["Ja. Haben Sie Käsekuchen?", "Ja. Hast du Käsekuchen?", "Ja. Hat Sie Käsekuchen?"], a: 0,
      why: { 1: "Garsonla „Sie“ ile konuşursun. „du“ arkadaş ve aile içindir; kafede tanımadığın birine „Hast du …?“ demek yersiz kalır.", 2: "Kibar „Sie“ ile fiil çoğul biçimdedir: haben. „hat“ er/sie/es içindir." },
      e: "Tanımadığın biriyle konuşurken „Sie“ ve fiilin „Sie“ biçimi: „Haben Sie …?“ Soru fiille başlar.", n: "Evet. Cheesecake'iniz var mı?" },
    { s: "Kellner", g: "m", t: "Leider nicht mehr. Aber wir haben noch Schokoladenkuchen.", n: "Maalesef kalmadı. Ama çikolatalı kekimiz var." },
    { me: true, id: "de-a1-d03.c3",
      o: ["Okay, dann nehme ich der Schokoladenkuchen.", "Okay, dann nehme ich den Schokoladenkuchen.", "Okay, dann ich nehme den Schokoladenkuchen."], a: 1,
      why: { 0: "„nehmen“ Akkusativ ister: „der Kuchen“ → „den Kuchen“. „der“ yalnızca özne (Nominativ) için kullanılır.", 2: "Cümleye „dann“ ile başlarsan çekimli fiil hemen ondan sonra gelir: „dann nehme ich“. Özne fiilin arkasına geçer." },
      e: "„dann“ cümlenin ilk öğesidir, fiil ikinci sırada kalır: „Dann nehme ich …“. Nesne eril olduğu için „den“: den Schokoladenkuchen.", n: "Tamam, o zaman çikolatalı keki alayım." },
    { s: "Kellner", g: "m", t: "Kommt sofort!", n: "Hemen geliyor!" }
  ],
  questions: [
    { id: "de-a1-d03.q1", t: "mc", q: "Ayşe ne içiyor?", o: ["Pfefferminztee", "Schwarzen Tee mit Zucker", "Kaffee mit Milch"], a: 1,
      why: { 0: "Garson nane çayını soruyor ama Ayşe siyah çayı seçiyor.", 2: "Kahveden hiç bahsedilmiyor." },
      e: "„Schwarzen Tee, bitte. Mit Zucker.“ – Akkusativ'de „der Tee“ → „den/einen Tee“ olur; önündeki sıfat da -en alır: schwarzen Tee." },
    { id: "de-a1-d03.q2", t: "mc", q: "Ayşe neden cheesecake (Käsekuchen) yemiyor?", o: ["Er ist zu teuer.", "Es gibt keinen Käsekuchen mehr.", "Sie mag keinen Käse."], a: 1,
      why: { 0: "Fiyattan hiç bahsedilmiyor.", 2: "Ayşe bunu söylemiyor; zaten Käsekuchen istiyor. Garson „Leider nicht mehr“ diyor." },
      e: "„Leider nicht mehr.“ = Maalesef artık yok / kalmadı." },
    { id: "de-a1-d03.q3", t: "listen", say: "Ich hätte gern einen Tee.", q: "Ne duydun?", o: ["Ich hätte gern einen Tee.", "Ich hatte gestern einen Tee.", "Ich habe gern einen Tee."], a: 0,
      why: { 1: "„gestern“ (dün) kelimesi geçmiyor; duyduğun kısa „gern“ idi.", 2: "„habe“ değil, „hätte“ duydun: „ä“ açık bir e sesidir ve sonunda „-tte“ var." },
      e: "„Ich hätte gern …“ = … alabilir miyim? Sipariş verirken kullanılan en kibar kalıplardan biridir." },
    { id: "de-a1-d03.q4", t: "mc", q: "Garson „Kommt sofort!“ derken ne demek istiyor?", o: ["Hemen geliyor!", "Hemen gelin!", "Yarın gelin!"], a: 0,
      why: { 1: "Bir emir değil; özne siparişin kendisi: (Sipariş) hemen geliyor.", 2: "„sofort“ = hemen. Yarın „morgen“ olurdu." },
      e: "„Kommt sofort!“ = (Siparişiniz) hemen geliyor! Garsonların sık kullandığı kısa bir kalıp." }
  ]
});

K.addDialog('de-a1-d04', {
  level: 'A1', title: 'Nach dem Weg fragen', sub: 'Yol sormak',
  role: 'Mehmet (yol soran)', roleG: 'm',
  lines: [
    { s: "Mehmet", g: "m", t: "Entschuldigung, wie komme ich zum Bahnhof?", n: "Affedersiniz, gara nasıl giderim?" },
    { s: "Passantin", g: "f", t: "Zum Bahnhof? Das ist nicht weit. Gehen Sie hier geradeaus.", n: "Gara mı? Uzak değil. Buradan dümdüz gidin." },
    { s: "Mehmet", g: "m", t: "Geradeaus, okay.", n: "Dümdüz, tamam." },
    { s: "Passantin", g: "f", t: "Dann an der Ampel links und die zweite Straße rechts.", n: "Sonra trafik ışığından sola, ikinci sokaktan da sağa dönün." },
    { me: true, id: "de-a1-d04.c1",
      o: ["An der Ampel Linke, dann die zweite Straße Rechte?", "An der Ampel links, dann die zweite Straße rechts?", "An der Ampel links, dann der zweite Straße rechts?"], a: 1,
      why: { 0: "„links“ ve „rechts“ yön zarfıdır, değişmez: „nach links“ ya da yalnızca „links“. „Linke“ başka bir kelimedir.", 2: "„die Straße“ dişil; „zweite Straße“ de „die“ ile gelir. „der“ burada yanlış olur." },
      e: "Yol tarif ederken kısa tekrar yaparak doğrulayabilirsin. „links / rechts / geradeaus“ değişmez; „die Straße“ dişildir.", n: "Trafik ışığından sola, sonra ikinci sokaktan sağa, öyle mi?" },
    { s: "Passantin", g: "f", t: "Genau. Dann sehen Sie den Bahnhof schon.", n: "Aynen. Ondan sonra garı görürsünüz." },
    { me: true, id: "de-a1-d04.c2",
      o: ["Wie lang ich brauche zu Fuß?", "Wie viel brauche ich zu Fuß?", "Wie lange brauche ich zu Fuß?"], a: 2,
      why: { 0: "Soru kelimesinden sonra çekimli fiil ikinci sırada gelir: „Wie lange brauche ich …?“ Özneyi öne alırsan Türkçe sıra çıkar.", 1: "„Wie viel“ miktar sorar (ne kadar para/şey). Süre için „Wie lange“ kullanılır." },
      e: "„Wie lange?“ = ne kadar süre? „zu Fuß“ = yürüyerek. „brauchen“ süre için de kullanılır: Ich brauche zehn Minuten.", n: "Yürüyerek ne kadar sürer?" },
    { s: "Passantin", g: "f", t: "Ungefähr zehn Minuten.", n: "Yaklaşık on dakika." },
    { me: true, id: "de-a1-d04.c3",
      o: ["Vielen Dank!", "Bitte schön!", "Entschuldigung!"], a: 0,
      why: { 1: "„Bitte schön“ karşı tarafın sana söylediği „rica ederim“ cevabıdır. Teşekkür etmek için „Danke“ ya da „Vielen Dank“ dersin.", 2: "„Entschuldigung“ özür dilemek ya da dikkat çekmek içindir; teşekkür yerine geçmez." },
      e: "„Vielen Dank!“ = çok teşekkürler. Cevabı: „Gern geschehen!“ ya da „Bitte schön!“", n: "Çok teşekkürler!" },
    { s: "Passantin", g: "f", t: "Gern geschehen!", n: "Rica ederim!" }
  ],
  questions: [
    { id: "de-a1-d04.q1", t: "mc", q: "Mehmet nereye gitmek istiyor?", o: ["Zum Bahnhof", "Zur Bank", "Zum Flughafen"], a: 0,
      why: { 1: "Bankadan bahsedilmiyor.", 2: "Havalimanından bahsedilmiyor; Mehmet „zum Bahnhof“ diyor." },
      e: "„Wie komme ich zum Bahnhof?“ = Gara nasıl giderim? (zu + dem = zum)" },
    { id: "de-a1-d04.q2", t: "mc", q: "Trafik ışığında hangi yöne dönmeli?", o: ["Rechts", "Links", "Geradeaus"], a: 1,
      why: { 0: "Sağa ancak ikinci sokakta dönülüyor.", 2: "Trafik ışığına kadar dümdüz gidiliyor; ışıkta sola dönülüyor." },
      e: "„an der Ampel links“ = trafik ışığından sola." },
    { id: "de-a1-d04.q3", t: "listen", say: "Die zweite Straße rechts.", q: "Ne duydun?", o: ["Die zweite Straße rechts.", "Die dritte Straße rechts.", "Die zweite Straße links."], a: 0,
      why: { 1: "„dritte“ (üçüncü) değil, „zweite“ (ikinci) duydun – „tsvayte“.", 2: "Sonda „rechts“ (sağ) var; „links“ sol olurdu." },
      e: "„die zweite Straße rechts“ = ikinci sokaktan sağa. Sıra sayıları: erste, zweite, dritte." },
    { id: "de-a1-d04.q4", t: "mc", q: "Gara yürüyerek ne kadar sürüyor?", o: ["Etwa zehn Minuten", "Etwa zwei Minuten", "Etwa eine Stunde"], a: 0,
      why: { 1: "„zwei“ ikinci sokak için geçiyor; süre „zehn Minuten“.", 2: "Bir saat değil: „ungefähr zehn Minuten“." },
      e: "„ungefähr“ = yaklaşık. „zu Fuß“ = yürüyerek." }
  ]
});

K.addDialog('de-a1-d05', {
  level: 'A1', title: 'Einen Termin beim Arzt machen', sub: 'Doktordan randevu almak',
  role: 'Bay Aydın (hasta)', roleG: 'm',
  lines: [
    { s: "Frau Krüger", g: "f", t: "Praxis Dr. Neumann, guten Tag.", n: "Dr. Neumann muayenehanesi, iyi günler." },
    { me: true, id: "de-a1-d05.c1",
      o: ["Guten Tag, ich bin Aydın. Ich brauche bitte einen Termin.", "Guten Tag, hier ist Aydın. Ich brauche bitte einen Termin.", "Guten Tag, hier ist Aydın. Ich brauche bitte ein Termin."], a: 1,
      why: { 0: "Telefonda genelde ‚Hier ist …‘ ya da ‚Mein Name ist …‘ denir.", 2: "„der Termin“ eril; „brauchen“ Akkusativ ister: „einen Termin“." },
      e: "Telefon düzeni: „Hier ist + ad“. „brauchen + Akkusativ“: einen Termin (der Termin).", n: "İyi günler, ben Aydın. Bir randevu almak istiyorum." },
    { s: "Frau Krüger", g: "f", t: "Was haben Sie denn?", n: "Şikâyetiniz nedir?" },
    { me: true, id: "de-a1-d05.c2",
      o: ["Ich habe seit zwei Tagen Fieber und Halsschmerzen.", "Ich bin Fieber und Halsschmerzen seit zwei Tagen.", "Ich habe seit zwei Tage Fieber und Halsschmerzen."], a: 0,
      why: { 1: "Türkçedeki „ateşim var“ Almancada „Ich habe Fieber“ olur, „bin“ ile kurulmaz.", 2: "„seit“ Dativ ister; çoğul Dativ'de isim -n alır: „zwei Tagen“." },
      e: "Şikâyeti „Ich habe + isim“ ile söyle. „seit + Dativ“ süreyi verir: seit zwei Tagen (iki gündür).", n: "İki gündür ateşim ve boğaz ağrım var." },
    { s: "Frau Krüger", g: "f", t: "Oh, das tut mir leid. Können Sie heute um elf Uhr kommen?", n: "Ah, geçmiş olsun. Bugün saat on birde gelebilir misiniz?" },
    { me: true, id: "de-a1-d05.c3",
      o: ["Um elf ich kann leider nicht. Geht es auch am Nachmittag?", "Um elf kann ich leider nicht. Geht es auch im Nachmittag?", "Um elf kann ich leider nicht. Geht es auch am Nachmittag?"], a: 2,
      why: { 0: "Cümle zaman ifadesiyle başlayınca çekimli fiil yine ikinci sırada kalır: „Um elf kann ich …“.", 1: "Günün bölümlerinde „am“ kullanılır: am Morgen, am Nachmittag, am Abend. „im“ aylar ve mevsimler içindir." },
      e: "„leider“ red cümlesini yumuşatır. „am Nachmittag“ = öğleden sonra (Dativ: an dem). Soru ise fiille başlar: „Geht es …?“", n: "On birde maalesef gelemem. Öğleden sonra da olur mu?" },
    { s: "Frau Krüger", g: "f", t: "Ja, um halb vier. Passt das?", n: "Evet, üç buçukta. Uyar mı?" },
    { s: "Herr Aydın", g: "m", t: "Ja, das passt gut. Vielen Dank!", n: "Evet, gayet uygun. Çok teşekkürler!" },
    { s: "Frau Krüger", g: "f", t: "Bitte bringen Sie Ihre Gesundheitskarte mit.", n: "Lütfen sağlık kartınızı da getirin." },
    { s: "Herr Aydın", g: "m", t: "Mache ich. Auf Wiederhören!", n: "Tamam, getiririm. Hoşça kalın!" }
  ],
  questions: [
    { id: "de-a1-d05.q1", t: "mc", q: "Aydın Bey'in nesi var?", o: ["Fieber und Halsschmerzen", "Kopfschmerzen und Bauchschmerzen", "Rückenschmerzen"], a: 0,
      why: { 1: "Baş ya da karın ağrısından bahsetmiyor.", 2: "Sırt ağrısından bahsetmiyor." },
      e: "„Ich habe Fieber und Halsschmerzen.“ – Hastalık ve ağrılar Almancada „haben“ ile söylenir: Ich habe Fieber = Ateşim var." },
    { id: "de-a1-d05.q2", t: "mc", q: "Randevu saat kaçta?", o: ["Um 11:00 Uhr", "Um 15:30 Uhr", "Um 16:30 Uhr"], a: 1,
      why: { 0: "Saat on bir önerildi ama Aydın Bey o saatte gelemiyor.", 2: "Klasik hata! „halb vier“ 4:30 değil, 3:30 (öğleden sonra 15:30) demektir." },
      e: "„um halb vier“ = 3:30 / 15:30. Almanca yarım saati bir sonraki saate göre söyler: dörde yarım saat var." },
    { id: "de-a1-d05.q3", t: "listen", say: "Geht es auch am Nachmittag?", q: "Ne duydun?", o: ["Geht es auch am Nachmittag?", "Geht es auch am Vormittag?", "Geht es auch am Mittwoch?"], a: 0,
      why: { 1: "„Vormittag“ = öğleden önce. Duyduğun kelime „Nach-“ ile başlıyordu.", 2: "„Mittwoch“ (çarşamba) bir gün adıdır; duyduğun „Nachmittag“ (öğleden sonra)." },
      e: "„Geht es auch …?“ = … da olur mu? Randevu ayarlarken çok işe yarayan bir soru." },
    { id: "de-a1-d05.q4", t: "mc", q: "Konuşmanın sonunda neden „Auf Wiederhören!“ deniyor?", o: ["Telefonda „Auf Wiedersehen“ yerine kullanılır.", "Doktorun adı budur.", "„Tekrar dinleyin!“ demektir."], a: 0,
      why: { 1: "Doktorun adı Dr. Neumann.", 2: "İçinde „hören“ (duymak) var ama bu bir veda kalıbıdır, talimat değil." },
      e: "Telefonda birbirimizi görmediğimiz için „Auf Wiedersehen“ (tekrar görüşmek üzere) yerine „Auf Wiederhören“ (tekrar duyuşmak üzere) denir." }
  ]
});

K.addDialog('de-a1-d06', {
  level: 'A1', title: 'Eine Wohnung am Telefon', sub: 'Telefonda ev sormak',
  role: 'Derya (daire arayan)', roleG: 'f',
  lines: [
    { s: "Herr Schröder", g: "m", t: "Schröder, guten Tag.", n: "Schröder, iyi günler." },
    { me: true, id: "de-a1-d06.c1",
      o: ["Guten Tag, mein Name ist Derya Koç. Ich rufe wegen der Wohnung an.", "Guten Tag, mein Name ist Derya Koç. Ich anrufe wegen der Wohnung.", "Guten Tag, mein Name ist Derya Koç. Ich rufe an für die Wohnung."], a: 0,
      why: { 1: "„anrufen“ ayrılabilen fiildir: çekimli kısım „rufe“ ikinci sırada, „an“ cümlenin sonunda durur.", 2: "„für“ amaç bildirir; arama sebebini „wegen + Genitiv/Dativ“ ile söylersin: „wegen der Wohnung“ (daire yüzünden/daire için)." },
      e: "„anrufen“ = aramak, ayrılır: „Ich rufe … an“. Sebep: „wegen der Wohnung“.", n: "İyi günler, adım Derya Koç. Daire için arıyorum." },
    { s: "Herr Schröder", g: "m", t: "Ah ja, die Zweizimmerwohnung in der Lindenstraße.", n: "Ah evet, Lindenstraße'deki iki odalı daire." },
    { s: "Derya", g: "f", t: "Genau. Ist die Wohnung noch frei?", n: "Aynen öyle. Daire hâlâ boş mu?" },
    { s: "Herr Schröder", g: "m", t: "Ja. Sie hat 55 Quadratmeter und einen Balkon.", n: "Evet. 55 metrekare ve balkonlu." },
    { me: true, id: "de-a1-d06.c2",
      o: ["Wie viele ist die Miete?", "Wie hoch ist die Miete?", "Wie ist die Miete hoch?"], a: 1,
      why: { 0: "Kira gibi tutarlar için „Wie hoch?“ (ne kadar yüksek) sorulur. „Wie viele“ sayılabilen çoğul şeyler içindir.", 2: "„Wie hoch“ birlikte durur: soru kelimesi ve sıfat başa gelir, sonra fiil: „Wie hoch ist …?“" },
      e: "Fiyat/kira için „Wie hoch ist die Miete?“ ya da „Was kostet die Wohnung?“. „wie + sıfat“ bir blok olarak başta durur.", n: "Kira ne kadar?" },
    { s: "Herr Schröder", g: "m", t: "650 Euro warm.", n: "Isınma ve yan giderler dâhil 650 avro." },
    { me: true, id: "de-a1-d06.c3",
      o: ["Kann ich die Wohnung ansehe?", "Kann ich ansehen die Wohnung?", "Kann ich die Wohnung ansehen?"], a: 2,
      why: { 0: "„können“dan sonra ikinci fiil mastar olur: „ansehen“, „ansehe“ değil.", 1: "Modal fiilli cümlede mastar cümlenin en sonuna gider: „… die Wohnung ansehen“. Türkçedeki gibi fiil sonda dursun." },
      e: "Modal fiil ikinci sırada, mastar en sonda: „Kann ich die Wohnung ansehen?“ (Daireyi görebilir miyim?).", n: "Daireyi görebilir miyim?" },
    { s: "Herr Schröder", g: "m", t: "Ja, gern. Am Samstag um zehn Uhr?", n: "Tabii. Cumartesi saat onda olur mu?" },
    { s: "Derya", g: "f", t: "Sehr gut, dann bis Samstag!", n: "Çok iyi, o zaman cumartesi görüşürüz!" }
  ],
  questions: [
    { id: "de-a1-d06.q1", t: "mc", q: "Dairenin kaç odası var?", o: ["Zwei Zimmer", "Drei Zimmer", "Fünf Zimmer"], a: 0,
      why: { 1: "Üç oda denmiyor; „Zweizimmerwohnung“ = iki odalı daire.", 2: "„55 Quadratmeter“ içinde „fünf“ geçiyor ama bu oda sayısı değil, metrekare." },
      e: "„die Zweizimmerwohnung“ = iki odalı daire. Almanya'da oda sayısına salon da dâhildir; mutfak ve banyo sayılmaz. Yani Türkiye'deki „1+1“e denk gelir." },
    { id: "de-a1-d06.q2", t: "mc", q: "„650 Euro warm“ ne demek?", o: ["Isınma ve yan giderler dâhil 650 avro", "Sadece kış ayları için 650 avro", "Kira 650 avro, ısınma ayrıca ödenir"], a: 0,
      why: { 1: "„warm“ burada mevsimle ilgili değil; ısınma giderlerinin dâhil olduğunu gösterir.", 2: "Bu „kalt“ olurdu (Kaltmiete): ısınma ve yan giderler hariç kira." },
      e: "„Warmmiete“ = ısınma ve yan giderler (die Nebenkosten) dâhil kira. „Kaltmiete“ = bunlar hariç kira. İlanlarda ikisine de dikkat et." },
    { id: "de-a1-d06.q3", t: "listen", say: "Ist die Wohnung noch frei?", q: "Ne duydun?", o: ["Ist die Wohnung noch frei?", "Ist die Wohnung noch neu?", "Ist die Wohnung auch frei?"], a: 0,
      why: { 1: "„neu“ (yeni) değil, „frei“ (boş) duydun – „fray“.", 2: "„auch“ (de/da) değil, „noch“ (hâlâ) duydun." },
      e: "„noch frei“ = hâlâ boş / müsait. Ev ararken ilk sorulan sorulardan biridir." },
    { id: "de-a1-d06.q4", t: "mc", q: "Derya daireyi ne zaman görecek?", o: ["Am Samstag um zehn Uhr", "Am Sonntag um zehn Uhr", "Am Samstag um zwei Uhr"], a: 0,
      why: { 1: "Pazar değil, „Samstag“ (cumartesi).", 2: "Saat iki değil, „zehn“ (on)." },
      e: "„Am Samstag um zehn Uhr“ – gün için „am“, saat için „um“ kullanılır." }
  ]
});

K.addDialog('de-a1-d07', {
  level: 'A1', title: 'Im Supermarkt', sub: 'Süpermarkette',
  role: 'Müşteri (süpermarkette)', roleG: 'f',
  lines: [
    { s: "Kundin", g: "f", t: "Entschuldigung, wo finde ich Reis?", n: "Affedersiniz, pirinci nerede bulabilirim?" },
    { s: "Mitarbeiter", g: "m", t: "Der Reis ist in Gang drei, neben den Nudeln.", n: "Pirinç üçüncü reyonda, makarnaların yanında." },
    { me: true, id: "de-a1-d07.c1",
      o: ["Danke. Und was kostet die Tomaten hier?", "Danke. Und was kosten die Tomaten hier?", "Danke. Und wo kosten die Tomaten hier?"], a: 1,
      why: { 0: "„die Tomaten“ çoğuldur; fiil de çoğul olmalı: „kosten“. „kostet“ tekil için kullanılır.", 2: "Fiyat „was“ ile sorulur: „Was kosten …?“ „wo“ nerede demektir." },
      e: "Fiyat sorusu: „Was kostet …?“ (tekil) / „Was kosten …?“ (çoğul). Fiil, isme uyar.", n: "Teşekkürler. Peki buradaki domatesler ne kadar?" },
    { s: "Mitarbeiter", g: "m", t: "Ein Kilo kostet zwei Euro neunundneunzig.", n: "Kilosu 2,99 avro." },
    { me: true, id: "de-a1-d07.c2",
      o: ["Das ist teuer! Gibt es auch billige Tomaten?", "Das ist teuer! Hat es auch billige Tomaten?", "Das ist teuer! Gibt es auch billig Tomaten?"], a: 0,
      why: { 1: "„Var mı?“ Almancada „Gibt es …?“ ile sorulur. „Hat es“ burada kullanılmaz.", 2: "İsmin önündeki sıfat çekim eki alır: „billige Tomaten“. „billig“ yalnızca „Die Tomaten sind billig“ gibi cümlelerde eksiz kalır." },
      e: "„Es gibt …“ = … var. İsmin önündeki sıfat çekimlenir: billige Tomaten.", n: "Pahalıymış! Ucuz domates de var mı?" },
    { s: "Mitarbeiter", g: "m", t: "Ja, die Tomaten da hinten sind im Angebot. Die kosten nur einen Euro neunundvierzig.", n: "Evet, arkadaki domatesler indirimde. Onlar sadece 1,49 avro." },
    { s: "Kundin", g: "f", t: "Super, dann nehme ich die. Haben Sie auch Tüten?", n: "Süper, o zaman onları alayım. Poşetiniz de var mı?" },
    { s: "Mitarbeiter", g: "m", t: "Ja, an der Kasse. Eine Tüte kostet zwanzig Cent.", n: "Evet, kasada. Bir poşet yirmi sent." },
    { me: true, id: "de-a1-d07.c3",
      o: ["Okay, vielen Dank für deine Hilfe!", "Okay, vielen Dank für Ihr Hilfe!", "Okay, vielen Dank für Ihre Hilfe!"], a: 2,
      why: { 0: "Mağaza çalışanına „Sie“ ile hitap edersin; „deine“ arkadaşlara özgüdür.", 1: "Akkusativ'de eksiz ‚Ihr‘ yalnızca nötr isimlerde durur (Ihr Auto); dişil: Ihre." },
      e: "„für + Akkusativ“: für Ihre Hilfe. Resmî ortamda sahiplik eki „Ihr-“ ve isme göre -e/-en: Ihre Hilfe.", n: "Tamam, yardımınız için çok teşekkürler!" },
    { s: "Mitarbeiter", g: "m", t: "Gern. Schönen Tag noch!", n: "Rica ederim. İyi günler!" }
  ],
  questions: [
    { id: "de-a1-d07.q1", t: "mc", q: "Pirinç nerede?", o: ["In Gang drei, neben den Nudeln", "An der Kasse", "Da hinten, im Angebot"], a: 0,
      why: { 1: "Kasada poşet var, pirinç değil.", 2: "Arkada indirimli domatesler var, pirinç değil." },
      e: "„in Gang drei“ = üçüncü reyonda, „neben den Nudeln“ = makarnaların yanında." },
    { id: "de-a1-d07.q2", t: "mc", q: "Müşteri hangi domatesleri alıyor?", o: ["Die Tomaten für 2,99 Euro", "Die Tomaten im Angebot für 1,49 Euro", "Keine Tomaten"], a: 1,
      why: { 0: "Onları pahalı buluyor: „Das ist teuer!“", 2: "Alıyor: „dann nehme ich die“ (o zaman onları alayım)." },
      e: "„im Angebot“ = indirimde, kampanyada. „Dann nehme ich die.“ = O zaman onları alayım." },
    { id: "de-a1-d07.q3", t: "listen", say: "Eine Tüte kostet zwanzig Cent.", q: "Ne duydun?", o: ["Eine Tüte kostet zwanzig Cent.", "Eine Tüte kostet zwölf Cent.", "Eine Tüte kostet zehn Cent."], a: 0,
      why: { 1: "„zwölf“ (12) „tsvölf“ diye okunur; duyduğun „tsvantsih“ idi.", 2: "„zehn“ (10) tek heceli kısa bir kelime; duyduğun „zwanzig“ (20) iki heceli." },
      e: "„zwanzig“ = 20. Sonu „-zig“ ile biten sayılar onluklardır: zwanzig, vierzig, fünfzig (istisna: dreißig)." },
    { id: "de-a1-d07.q4", t: "mc", q: "„Das ist teuer!“ ne demek?", o: ["Pahalıymış!", "Ucuzmuş!", "Tazeymiş!"], a: 0,
      why: { 1: "Ucuz = billig ya da günstig.", 2: "Taze = frisch." },
      e: "„teuer“ = pahalı; zıttı „billig“ ya da „günstig“." }
  ]
});

K.addDialog('de-a1-d08', {
  level: 'A1', title: 'Verabredung am Freitag', sub: 'Cuma için buluşma ayarlamak',
  role: 'Elif (arkadaşı Jonas ile)', roleG: 'f',
  lines: [
    { s: "Jonas", g: "m", t: "Hey Elif! Hast du am Freitag Zeit?", n: "Selam Elif! Cuma günü vaktin var mı?" },
    { s: "Elif", g: "f", t: "Am Freitag? Am Abend schon. Warum?", n: "Cuma mı? Akşam müsaitim. Neden?" },
    { s: "Jonas", g: "m", t: "Wir gehen ins Kino. Kommst du mit?", n: "Sinemaya gidiyoruz. Sen de gelir misin?" },
    { me: true, id: "de-a1-d08.c1",
      o: ["Gern! Welcher Film läuft denn?", "Gern! Welche Film läuft denn?", "Gern! Wie Film läuft denn?"], a: 0,
      why: { 1: "„der Film“ eril; soru kelimesi de ona uyar: „welcher Film“. „welche“ dişil ve çoğul içindir.", 2: "„Wie“ nasıl demektir. Türkçedeki „hangi“ Almancada „welcher/welche/welches“ olur." },
      e: "„welcher + eril isim“ = hangi …? Çekimli fiil ikinci sırada kalır: „Welcher Film läuft?“", n: "Seve seve! Hangi film oynuyor?" },
    { s: "Jonas", g: "m", t: "Eine Komödie. Sie beginnt um acht.", n: "Bir komedi. Saat sekizde başlıyor." },
    { me: true, id: "de-a1-d08.c2",
      o: ["Super. Wann und wo wir treffen uns?", "Super. Wann und wo treffen wir uns?", "Super. Wann und wo treffen wir?"], a: 1,
      why: { 0: "Soru kelimelerinden sonra fiil ikinci sırada gelir: „treffen wir“. Özne fiilden önce gelirse Türkçe sıra olur.", 2: "„sich treffen“ dönüşlü fiildir: „wir treffen uns“. „uns“ eksik kalırsa cümle tamamlanmamış gibi durur." },
      e: "„Wann und wo treffen wir uns?“ – iki soru kelimesi tek başlıkta; ardından fiil, özne, „uns“.", n: "Süper. Ne zaman ve nerede buluşuyoruz?" },
    { s: "Jonas", g: "m", t: "Um Viertel nach sieben vor dem Kino?", n: "Yediyi çeyrek geçe sinemanın önünde olur mu?" },
    { me: true, id: "de-a1-d08.c3",
      o: ["Lieber um halb sieben. Ich arbeite bis sieben.", "Lieber um halb acht. Ich arbeite ab sieben.", "Lieber um halb acht. Ich arbeite bis sieben."], a: 2,
      why: { 0: "„halb sieben“ 6:30 demektir ve zaten yediye kadar çalışıyor; 6:30'da yetişemez. Yedi buçuk için „halb acht“ denir.", 1: "„ab“ = -den itibaren. „yediye kadar“ için „bis sieben“ kullanılır." },
      e: "„halb acht“ = 7:30 (sekize yarım saat var). „bis“ = -e kadar. „Lieber …“ ile kibarca başka bir teklifte bulunursun.", n: "Yedi buçuk daha iyi olur. Yediye kadar çalışıyorum." },
    { s: "Jonas", g: "m", t: "Kein Problem. Dann bis Freitag!", n: "Sorun değil. O zaman cuma görüşürüz!" },
    { s: "Elif", g: "f", t: "Bis Freitag! Ich freue mich.", n: "Cuma görüşürüz! Dört gözle bekliyorum." }
  ],
  questions: [
    { id: "de-a1-d08.q1", t: "mc", q: "Cuma günü ne yapacaklar?", o: ["Ins Kino gehen", "Fußball spielen", "Zusammen essen"], a: 0,
      why: { 1: "Futboldan bahsedilmiyor.", 2: "Yemekten bahsedilmiyor." },
      e: "„Wir gehen ins Kino.“ – ins = in das. Sinemaya gitmek: ins Kino gehen." },
    { id: "de-a1-d08.q2", t: "mc", q: "Saat kaçta buluşuyorlar?", o: ["Um 7:15 Uhr", "Um 7:30 Uhr", "Um 8:30 Uhr"], a: 1,
      why: { 0: "Jonas 7:15'i (Viertel nach sieben) öneriyor ama Elif „halb acht“ istiyor ve Jonas kabul ediyor.", 2: "Dikkat: „halb acht“ 8:30 değil, 7:30!" },
      e: "„halb acht“ = 7:30 (sekize yarım saat var). Film ise sekizde başlıyor." },
    { id: "de-a1-d08.q3", t: "listen", say: "Ich arbeite bis sieben.", q: "Ne duydun?", o: ["Ich arbeite bis sieben.", "Ich arbeite bis siebzehn.", "Ich arbeite ab sieben."], a: 0,
      why: { 1: "„siebzehn“ (17) daha uzun: „ziip-tseen“. Duyduğun sadece „sieben“ idi.", 2: "„ab“ = -den itibaren; duyduğun „bis“ (-e kadar)." },
      e: "„bis sieben“ = yediye kadar. „ab sieben“ olsaydı „yediden itibaren“ demek olurdu." },
    { id: "de-a1-d08.q4", t: "mc", q: "„Kommst du mit?“ ne demek?", o: ["Sen de gelir misin?", "Nerelisin?", "Ne zaman geliyorsun?"], a: 0,
      why: { 1: "Bu „Woher kommst du?“ olurdu.", 2: "Bu „Wann kommst du?“ olurdu." },
      e: "„mitkommen“ = birlikte gelmek, katılmak. Ayrılabilen fiildir: „mit“ cümlenin sonuna gider – Kommst du mit?" }
  ]
});

K.addDialog('de-a1-d09', {
  level: 'A1', scene: 'arzt', title: 'Telefonisch einen Arzttermin vereinbaren', sub: 'Telefonla doktor randevusu almak',
  role: 'Selin Arslan (hasta)', roleG: 'f',
  lines: [
    { s: "Praxis", g: "f", t: "Praxis Dr. Lehmann, guten Tag.", n: "Dr. Lehmann muayenehanesi, iyi günler." },
    { me: true, id: "de-a1-d09.c1",
      o: ["Guten Tag, hier ist Selin Arslan. Ich möchte einen Termin, bitte.", "Guten Tag, ich bin Selin Arslan. Ich will Termin.", "Guten Tag, hier ist Selin Arslan. Ich möchte eine Termin, bitte."], a: 0,
      why: { 1: "Telefonda genelde ‚Hier ist …‘ ya da ‚Mein Name ist …‘ denir. „Ich will Termin“ da hem sert hem de artikelsizdir: „einen Termin“ gerekir.", 2: "„der Termin“ eril olduğu için Akkusativ'de „einen Termin“ olur; „eine“ dişil isimlerin artikelidir." },
      e: "Telefonda önce kendini tanıt: „Hier ist + ad“. Sonra kibarca iste: „Ich möchte einen Termin, bitte.“ (der Termin → Akkusativ: einen).", n: "İyi günler, ben Selin Arslan. Bir randevu almak istiyorum." },
    { s: "Praxis", g: "f", t: "Gern. Was haben Sie denn?", n: "Tabii. Şikâyetiniz nedir?" },
    { me: true, id: "de-a1-d09.c2",
      o: ["Mein Kopf hat seit Montag Schmerzen.", "Ich bin seit Montag Kopfschmerzen.", "Ich habe seit Montag Kopfschmerzen."], a: 2,
      why: { 0: "Anlaşılır ama Almanca doğal söyleyiş „Ich habe Kopfschmerzen“ ya da „Mein Kopf tut weh“dir; „Kopf hat Schmerzen“ Türkçe „başımın ağrısı var“dan çevrilmiş gibi durur.", 1: "Türkçede „başım ağrıyor“ derken fiil „olmak“ gibi hissedilebilir, ama Almanca „Ich habe Kopfschmerzen“ denir. „sein“ ile kurulmaz." },
      e: "Ağrıyı „haben + isim“ ile söylersin: Ich habe seit Montag Kopfschmerzen. „seit + Dativ“ ne zamandan beri olduğunu verir: seit Montag (pazartesiden beri).", n: "Pazartesiden beri başım ağrıyor." },
    { s: "Praxis", g: "f", t: "Das tut mir leid. Können Sie morgen um neun Uhr kommen?", n: "Geçmiş olsun. Yarın saat dokuzda gelebilir misiniz?" },
    { me: true, id: "de-a1-d09.c3",
      o: ["Morgen ich kann nicht. Geht es auch am Mittwoch um vier Uhr?", "Morgen kann ich nicht. Geht es auch an Mittwoch um vier Uhr?", "Morgen kann ich nicht. Geht es auch am Mittwoch um vier Uhr?"], a: 2,
      why: { 0: "Cümle „Morgen“ ile başlıyorsa çekimli fiil hemen ondan sonra gelir: „Morgen kann ich …“. Özne fiilden önce gelirse Türkçe sıra olur.", 1: "Günlerle „am“ kullanılır (an dem): am Mittwoch, am Montag. „an Mittwoch“ diye bir kalıp yoktur." },
      e: "„Morgen“ ilk öğe, fiil ikinci sırada: „Morgen kann ich nicht.“ Gün için „am“, saat için „um“: am Mittwoch um vier Uhr.", n: "Yarın gelemem. Çarşamba günü saat dörtte olur mu?" },
    { s: "Praxis", g: "f", t: "Ja, Mittwoch um vier Uhr geht. Haben Sie eine Gesundheitskarte?", n: "Evet, çarşamba saat dört olur. Sağlık kartınız var mı?" },
    { s: "Selin", g: "f", t: "Ja, ich habe eine Karte. Ich bringe sie mit.", n: "Evet, kartım var. Getiririm." },
    { s: "Praxis", g: "f", t: "Gut. Dann bis Mittwoch, Frau Arslan.", n: "Güzel. O zaman çarşamba görüşürüz, Bayan Arslan." },
    { s: "Selin", g: "f", t: "Vielen Dank. Auf Wiederhören!", n: "Çok teşekkürler. Hoşça kalın!" }
  ],
  questions: [
    { id: "de-a1-d09.q1", t: "mc", q: "Selin'in şikâyeti ne?", o: ["Kopfschmerzen", "Bauchschmerzen", "Halsschmerzen"], a: 0,
      why: { 1: "Karın ağrısından söz edilmiyor.", 2: "Boğaz ağrısından söz edilmiyor." },
      e: "Selin: „Ich habe seit Montag Kopfschmerzen.“ „der Kopf“ = baş, „die Schmerzen“ (çoğul) = ağrı; birleşince Kopfschmerzen (baş ağrısı)." },
    { id: "de-a1-d09.q2", t: "mc", q: "Randevu ne zaman?", o: ["Yarın saat dokuzda", "Çarşamba günü saat dörtte", "Pazartesi saat dörtte"], a: 1,
      why: { 0: "Yarın saat dokuz önerildi ama Selin „Morgen kann ich nicht“ diyerek reddetti.", 2: "Pazartesi sadece ağrının başladığı gün: „seit Montag“." },
      e: "Selin yarını kabul etmiyor, „am Mittwoch um vier Uhr“ öneriyor ve muayenehane „geht“ diyor. „am“ gün, „um“ saat içindir." },
    { id: "de-a1-d09.q3", t: "listen", say: "Haben Sie eine Gesundheitskarte?", q: "Ne duydun?", o: ["Haben Sie eine Gesundheitskarte?", "Haben Sie eine Geburtstagskarte?", "Haben Sie keine Gesundheitskarte?"], a: 0,
      why: { 1: "„Geburtstagskarte“ doğum günü kartıdır; „Gesundheit“ (sağlık) ile başlıyordu.", 2: "„eine“ duydun; „keine“ olsaydı soru „sağlık kartınız yok mu?“ olurdu." },
      e: "„die Gesundheitskarte“ = sağlık kartı (sigorta kartı). Doktorda sık duyulur: „Haben Sie … ?“ = … var mı?" },
    { id: "de-a1-d09.q4", t: "mc", q: "„Was haben Sie denn?“ ne demek?", o: ["Şikâyetiniz nedir?", "Ne istersiniz?", "Kaç yaşındasınız?"], a: 0,
      why: { 1: "Bu „Was möchten Sie?“ olurdu.", 2: "Yaşı sormak için „Wie alt sind Sie?“ denir." },
      e: "Doktorda „Was haben Sie?“ = Neyiniz var? „denn“ soruyu yumuşatır, ilgili bir ton verir." }
  ]
});

K.addDialog('de-a1-d10', {
  level: 'A1', scene: 'bahn', title: 'Fahrkarte kaufen und den Weg fragen', sub: 'Bilet almak ve yol sormak',
  role: 'Murat (yolcu)', roleG: 'm',
  lines: [
    { s: "Verkäuferin", g: "f", t: "Guten Tag! Was kann ich für Sie tun?", n: "İyi günler! Size nasıl yardımcı olabilirim?" },
    { me: true, id: "de-a1-d10.c1",
      o: ["Guten Tag! Ich will Fahrkarte Bonn.", "Guten Tag! Eine Fahrkarte nach Bonn, bitte.", "Guten Tag! Eine Fahrkarte zu Bonn, bitte."], a: 1,
      why: { 0: "Artikel ve edat (nach) eksik.", 2: "Şehirlere gidişte „nach“ kullanılır: nach Bonn, nach Berlin. „zu“ kişilere ve kurumlara gider: zum Arzt." },
      e: "Bilet isterken: „Eine Fahrkarte nach + şehir, bitte.“ „die Fahrkarte“ dişil, Akkusativ'de „eine“ kalır. Şehir adlarında artikel yoktur: nach Bonn.", n: "İyi günler! Bonn'a bir bilet lütfen." },
    { s: "Verkäuferin", g: "f", t: "Einfach oder hin und zurück?", n: "Tek yön mü, gidiş-dönüş mü?" },
    { me: true, id: "de-a1-d10.c2",
      o: ["Hin und zurück, bitte. Was kosten das?", "Hin und zurück, bitte. Was kostet das?", "Hin und zurück, bitte. Wo kostet das?"], a: 1,
      why: { 0: "„das“ tekildir; fiil de tekil olmalı: „kostet“. „kosten“ çoğul özneyle kullanılır (die Tomaten kosten).", 2: "Fiyat „was“ ile sorulur. „Wo“ nerede demektir." },
      e: "„Hin und zurück“ = gidiş-dönüş, „einfach“ = tek yön. Fiyat: „Was kostet das?“ – tekil özne, tekil fiil.", n: "Gidiş-dönüş lütfen. Ne kadar tutuyor?" },
    { s: "Verkäuferin", g: "f", t: "Das macht zwölf Euro fünfzig. Der Zug fährt auf Gleis drei ab.", n: "Toplam on iki avro elli sent. Tren üç numaralı perondan kalkıyor." },
    { me: true, id: "de-a1-d10.c3",
      o: ["Hier ist fünfzehn Euro. Wo ist Gleis drei, bitte?", "Hier sind fünfzehn Euro. Wo Gleis drei ist, bitte?", "Hier sind fünfzehn Euro. Wo ist Gleis drei, bitte?"], a: 2,
      why: { 0: "„fünfzehn Euro“ çoğuldur, bu yüzden „Hier sind …“ denir. Türkçede „on beş avro burada“ tekil gibi hissedilir, Almancada fiil çoğula uyar.", 1: "Soru kelimesinden sonra çekimli fiil ikinci sırada gelir: „Wo ist Gleis drei?“ Fiili sona atmak Türkçe sıradır." },
      e: "Para uzatırken: „Hier sind … Euro.“ Yer sorusu: „Wo ist + isim?“, fiil ikinci sırada. „das Gleis“ = peron, „Gleis drei“ artikelsiz söylenir.", n: "Buyurun on beş avro. Üç numaralı peron nerede lütfen?" },
    { s: "Verkäuferin", g: "f", t: "Gehen Sie hier geradeaus, dann links. Das ist nicht weit.", n: "Buradan dümdüz gidin, sonra sola. Uzak değil." },
    { s: "Murat", g: "m", t: "Danke. Wann fährt der Zug?", n: "Teşekkürler. Tren ne zaman kalkıyor?" },
    { s: "Verkäuferin", g: "f", t: "Um Viertel nach zehn. Sie haben noch zehn Minuten.", n: "Onu çeyrek geçe. Daha on dakikanız var." },
    { s: "Murat", g: "m", t: "Super, vielen Dank!", n: "Süper, çok teşekkürler!" },
    { s: "Verkäuferin", g: "f", t: "Gern. Gute Fahrt!", n: "Rica ederim. İyi yolculuklar!" }
  ],
  questions: [
    { id: "de-a1-d10.q1", t: "mc", q: "Murat nereye bilet alıyor?", o: ["Nach Köln", "Nach Bonn", "Nach Berlin"], a: 1,
      why: { 0: "Köln'den söz edilmiyor.", 2: "Berlin'den söz edilmiyor." },
      e: "Murat: „Eine Fahrkarte nach Bonn, bitte.“ Şehir adlarından önce „nach“ kullanılır ve artikel yoktur." },
    { id: "de-a1-d10.q2", t: "mc", q: "Bilet kaç avro?", o: ["12,50 €", "15 €", "10,50 €"], a: 0,
      why: { 1: "On beş avro Murat'ın verdiği para, biletin fiyatı değil.", 2: "On buçuk değil: „zwölf Euro fünfzig“ = 12,50 €." },
      e: "„Das macht zwölf Euro fünfzig.“ = 12,50 €. Önce avro, sonra sent söylenir." },
    { id: "de-a1-d10.q3", t: "listen", say: "Gehen Sie hier geradeaus, dann links.", q: "Ne duydun?", o: ["Gehen Sie hier geradeaus, dann links.", "Gehen Sie hier geradeaus, dann rechts.", "Gehen Sie hier links, dann geradeaus."], a: 0,
      why: { 1: "Sona doğru „links“ (sol) duydun, „rechts“ (sağ) değil.", 2: "Sıra ters: önce „geradeaus“ (dümdüz), sonra „links“." },
      e: "Yol tarifinde sıra önemlidir: önce dümdüz („geradeaus“), sonra sola („links“). „Gehen Sie …“ = (siz) gidin, kibar emir." },
    { id: "de-a1-d10.q4", t: "mc", q: "„Hin und zurück“ ne demek?", o: ["Gidiş-dönüş", "Tek yön", "Aktarmalı"], a: 0,
      why: { 1: "Tek yön için „einfach“ denir.", 2: "Aktarma ayrı bir kavram (umsteigen); bu kalıpta geçmiyor." },
      e: "„hin“ = oraya, „zurück“ = geri. Bilet alırken seçenek: „einfach“ (tek yön) ya da „hin und zurück“ (gidiş-dönüş)." }
  ]
});

})(window.KOPRU);
