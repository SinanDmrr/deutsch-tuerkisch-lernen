/* Deutsch A1 – Alltagsdialoge für Türkischsprechende (Übersetzungen, Fragen und Erklärungen auf Türkisch)
 * Format: K.addDialog(id, { level, title, sub, lines:[{ s, g:'f'|'m', t, n }], questions:[Übungen] })
 * IDs (Dialog und Fragen) NIE ändern oder wiederverwenden – daran hängt der Lernfortschritt.
 */
(function (K) {

K.addDialog('de-a1-d01', {
  level: 'A1', title: 'Sich im Kurs vorstellen', sub: 'Kursta tanışma',
  lines: [
    { s: "Lena", g: "f", t: "Hallo! Bist du auch neu im Kurs?", n: "Selam! Sen de mi kursta yenisin?" },
    { s: "Kerem", g: "m", t: "Ja, heute ist mein erster Tag. Ich heiße Kerem.", n: "Evet, bugün ilk günüm. Benim adım Kerem." },
    { s: "Lena", g: "f", t: "Freut mich, Kerem. Ich bin Lena. Woher kommst du?", n: "Memnun oldum Kerem. Ben Lena. Nerelisin?" },
    { s: "Kerem", g: "m", t: "Ich komme aus der Türkei, aus Bursa. Und du?", n: "Türkiye'denim, Bursa'dan. Ya sen?" },
    { s: "Lena", g: "f", t: "Ich komme aus Polen. Ich wohne jetzt in Köln.", n: "Ben Polonyalıyım. Şimdi Köln'de oturuyorum." },
    { s: "Kerem", g: "m", t: "Ich auch! Seit wann bist du in Deutschland?", n: "Ben de! Ne zamandan beri Almanya'dasın?" },
    { s: "Lena", g: "f", t: "Seit sechs Monaten. Und du?", n: "Altı aydır. Ya sen?" },
    { s: "Kerem", g: "m", t: "Erst seit drei Wochen. Mein Deutsch ist noch nicht so gut.", n: "Daha üç haftadır. Almancam henüz pek iyi değil." },
    { s: "Lena", g: "f", t: "Doch, du sprichst schon gut! Wir können zusammen lernen.", n: "Yok canım, şimdiden iyi konuşuyorsun! Birlikte çalışabiliriz." }
  ],
  questions: [
    { id: "de-a1-d01.q1", t: "mc", q: "Kerem nereli?", o: ["Aus Polen", "Aus der Türkei", "Aus Köln"], a: 1,
      why: { 0: "Polonyalı olan Lena: „Ich komme aus Polen.“", 2: "Köln'de ikisi de oturuyor ama Kerem „Ich komme aus der Türkei“ diyor." },
      e: "Kerem: „Ich komme aus der Türkei, aus Bursa.“ Ülke adlarının çoğu artikelsizdir (aus Polen), ama „die Türkei“ artikel alır: aus der Türkei." },
    { id: "de-a1-d01.q2", t: "mc", q: "Lena ne zamandır Almanya'da?", o: ["Seit drei Wochen", "Seit sechs Monaten", "Seit sechs Jahren"], a: 1,
      why: { 0: "Üç hafta Kerem'in süresi.", 2: "Lena „Monaten“ (ay) diyor, „Jahren“ (yıl) değil." },
      e: "„Seit sechs Monaten“ = altı aydır. „seit“ ile Türkçedeki „-dır/-dir“ süresini anlatırsın. „seit“ Dativ ister; bu yüzden çoğul isim sonuna -n alır: die Monate → seit sechs Monate**n**." },
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
  lines: [
    { s: "Verkäuferin", g: "f", t: "Guten Morgen! Was darf es sein?", n: "Günaydın! Ne arzu edersiniz?" },
    { s: "Kunde", g: "m", t: "Guten Morgen! Vier Brötchen, bitte.", n: "Günaydın! Dört tane küçük ekmek lütfen." },
    { s: "Verkäuferin", g: "f", t: "Gern. Normale Brötchen oder Körnerbrötchen?", n: "Tabii. Sade mi olsun, tahıllı mı?" },
    { s: "Kunde", g: "m", t: "Zwei normale und zwei mit Körnern, bitte.", n: "İki sade, iki de tahıllı lütfen." },
    { s: "Verkäuferin", g: "f", t: "Sonst noch etwas?", n: "Başka bir şey?" },
    { s: "Kunde", g: "m", t: "Ja, ein Stück Apfelkuchen.", n: "Evet, bir dilim elmalı kek." },
    { s: "Verkäuferin", g: "f", t: "Das macht zusammen fünf Euro vierzig.", n: "Hepsi beş avro kırk sent ediyor." },
    { s: "Kunde", g: "m", t: "Kann ich mit Karte zahlen?", n: "Kartla ödeyebilir miyim?" },
    { s: "Verkäuferin", g: "f", t: "Ja, natürlich. Halten Sie die Karte bitte hier dran.", n: "Tabii ki. Kartı lütfen buraya yaklaştırın." },
    { s: "Kunde", g: "m", t: "Danke schön. Schönen Tag noch!", n: "Çok teşekkürler. İyi günler!" }
  ],
  questions: [
    { id: "de-a1-d02.q1", t: "mc", q: "Müşteri kaç tane küçük ekmek (Brötchen) alıyor?", o: ["Zwei", "Vier", "Sechs"], a: 1,
      why: { 0: "İkisi sade, ikisi tahıllı – toplam dört.", 2: "Altı denmiyor; müşteri „Vier Brötchen, bitte“ diyor." },
      e: "„Vier Brötchen“ – ikisi sade (normal), ikisi tahıllı (mit Körnern)." },
    { id: "de-a1-d02.q2", t: "mc", q: "Müşteri başka ne alıyor?", o: ["Ein Stück Apfelkuchen", "Einen Apfelsaft", "Ein Brot"], a: 0,
      why: { 1: "„Apfel“ kelimesini duydun ama içecek değil, kek: „Apfelkuchen“.", 2: "Büyük ekmek (Brot) almıyor, sadece Brötchen." },
      e: "„ein Stück Apfelkuchen“ = bir dilim elmalı kek. „das Stück“ = parça, dilim." },
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
  lines: [
    { s: "Kellner", g: "m", t: "Hallo! Was möchten Sie trinken?", n: "Merhaba! Ne içmek istersiniz?" },
    { s: "Ayşe", g: "f", t: "Ich hätte gern einen Tee.", n: "Bir çay alabilir miyim?" },
    { s: "Kellner", g: "m", t: "Schwarzen Tee oder Pfefferminztee?", n: "Siyah çay mı, nane çayı mı?" },
    { s: "Ayşe", g: "f", t: "Schwarzen Tee, bitte. Mit Zucker.", n: "Siyah çay lütfen. Şekerli." },
    { s: "Kellner", g: "m", t: "Gern. Möchten Sie auch etwas essen?", n: "Tabii. Bir şey de yemek ister misiniz?" },
    { s: "Ayşe", g: "f", t: "Ja. Haben Sie Käsekuchen?", n: "Evet. Cheesecake'iniz var mı?" },
    { s: "Kellner", g: "m", t: "Leider nicht mehr. Aber wir haben noch Schokoladenkuchen.", n: "Maalesef kalmadı. Ama çikolatalı kekimiz var." },
    { s: "Ayşe", g: "f", t: "Okay, dann nehme ich den Schokoladenkuchen.", n: "Tamam, o zaman çikolatalı keki alayım." },
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
  lines: [
    { s: "Mehmet", g: "m", t: "Entschuldigung, wie komme ich zum Bahnhof?", n: "Affedersiniz, gara nasıl giderim?" },
    { s: "Passantin", g: "f", t: "Zum Bahnhof? Das ist nicht weit. Gehen Sie hier geradeaus.", n: "Gara mı? Uzak değil. Buradan dümdüz gidin." },
    { s: "Mehmet", g: "m", t: "Geradeaus, okay.", n: "Dümdüz, tamam." },
    { s: "Passantin", g: "f", t: "Dann an der Ampel links und die zweite Straße rechts.", n: "Sonra trafik ışığından sola, ikinci sokaktan da sağa dönün." },
    { s: "Mehmet", g: "m", t: "An der Ampel links, dann die zweite Straße rechts?", n: "Trafik ışığından sola, sonra ikinci sokaktan sağa, öyle mi?" },
    { s: "Passantin", g: "f", t: "Genau. Dann sehen Sie den Bahnhof schon.", n: "Aynen. Ondan sonra garı görürsünüz." },
    { s: "Mehmet", g: "m", t: "Wie lange brauche ich zu Fuß?", n: "Yürüyerek ne kadar sürer?" },
    { s: "Passantin", g: "f", t: "Ungefähr zehn Minuten.", n: "Yaklaşık on dakika." },
    { s: "Mehmet", g: "m", t: "Vielen Dank!", n: "Çok teşekkürler!" },
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
  lines: [
    { s: "Frau Krüger", g: "f", t: "Praxis Dr. Neumann, guten Tag.", n: "Dr. Neumann muayenehanesi, iyi günler." },
    { s: "Herr Aydın", g: "m", t: "Guten Tag, hier ist Aydın. Ich brauche bitte einen Termin.", n: "İyi günler, ben Aydın. Bir randevu almak istiyorum." },
    { s: "Frau Krüger", g: "f", t: "Was haben Sie denn?", n: "Şikâyetiniz nedir?" },
    { s: "Herr Aydın", g: "m", t: "Ich habe seit zwei Tagen Fieber und Halsschmerzen.", n: "İki gündür ateşim ve boğaz ağrım var." },
    { s: "Frau Krüger", g: "f", t: "Oh, das tut mir leid. Können Sie heute um elf Uhr kommen?", n: "Ah, geçmiş olsun. Bugün saat on birde gelebilir misiniz?" },
    { s: "Herr Aydın", g: "m", t: "Um elf kann ich leider nicht. Geht es auch am Nachmittag?", n: "On birde maalesef gelemem. Öğleden sonra da olur mu?" },
    { s: "Frau Krüger", g: "f", t: "Ja, um halb vier. Passt das?", n: "Evet, üç buçukta. Uyar mı?" },
    { s: "Herr Aydın", g: "m", t: "Ja, das passt gut. Vielen Dank!", n: "Evet, gayet uygun. Çok teşekkürler!" },
    { s: "Frau Krüger", g: "f", t: "Bitte bringen Sie Ihre Gesundheitskarte mit.", n: "Lütfen sağlık kartınızı yanınızda getirin." },
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
  lines: [
    { s: "Herr Schröder", g: "m", t: "Schröder, guten Tag.", n: "Schröder, iyi günler." },
    { s: "Derya", g: "f", t: "Guten Tag, mein Name ist Derya Koç. Ich rufe wegen der Wohnung an.", n: "İyi günler, adım Derya Koç. Daire için arıyorum." },
    { s: "Herr Schröder", g: "m", t: "Ah ja, die Zweizimmerwohnung in der Lindenstraße.", n: "Ah evet, Lindenstraße'deki iki odalı daire." },
    { s: "Derya", g: "f", t: "Genau. Ist die Wohnung noch frei?", n: "Aynen öyle. Daire hâlâ boş mu?" },
    { s: "Herr Schröder", g: "m", t: "Ja. Sie hat 55 Quadratmeter und einen Balkon.", n: "Evet. 55 metrekare ve balkonlu." },
    { s: "Derya", g: "f", t: "Wie hoch ist die Miete?", n: "Kira ne kadar?" },
    { s: "Herr Schröder", g: "m", t: "650 Euro warm.", n: "Isınma ve yan giderler dahil 650 avro." },
    { s: "Derya", g: "f", t: "Kann ich die Wohnung ansehen?", n: "Daireyi görebilir miyim?" },
    { s: "Herr Schröder", g: "m", t: "Ja, gern. Am Samstag um zehn Uhr?", n: "Tabii. Cumartesi saat onda olur mu?" },
    { s: "Derya", g: "f", t: "Sehr gut, dann bis Samstag!", n: "Çok iyi, o zaman cumartesi görüşürüz!" }
  ],
  questions: [
    { id: "de-a1-d06.q1", t: "mc", q: "Dairenin kaç odası var?", o: ["Zwei Zimmer", "Drei Zimmer", "Fünf Zimmer"], a: 0,
      why: { 1: "Üç oda denmiyor; „Zweizimmerwohnung“ = iki odalı daire.", 2: "„55 Quadratmeter“ içinde „fünf“ geçiyor ama bu oda sayısı değil, metrekare." },
      e: "„die Zweizimmerwohnung“ = iki odalı daire. Almanya'da oda sayısına salon da dahildir; mutfak ve banyo sayılmaz. Yani Türkiye'deki „1+1“e denk gelir." },
    { id: "de-a1-d06.q2", t: "mc", q: "„650 Euro warm“ ne demek?", o: ["Isınma ve yan giderler dahil 650 avro", "Sadece kış ayları için 650 avro", "Kira 650 avro, ısınma ayrıca ödenir"], a: 0,
      why: { 1: "„warm“ burada mevsimle ilgili değil; ısınma giderlerinin dahil olduğunu gösterir.", 2: "Bu „kalt“ olurdu (Kaltmiete): ısınma ve yan giderler hariç kira." },
      e: "„Warmmiete“ = ısınma ve yan giderler (die Nebenkosten) dahil kira. „Kaltmiete“ = bunlar hariç kira. İlanlarda ikisine de dikkat et." },
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
  lines: [
    { s: "Kundin", g: "f", t: "Entschuldigung, wo finde ich Reis?", n: "Affedersiniz, pirinci nerede bulabilirim?" },
    { s: "Mitarbeiter", g: "m", t: "Der Reis ist in Gang drei, neben den Nudeln.", n: "Pirinç üçüncü reyonda, makarnaların yanında." },
    { s: "Kundin", g: "f", t: "Danke. Und was kosten die Tomaten hier?", n: "Teşekkürler. Peki buradaki domatesler ne kadar?" },
    { s: "Mitarbeiter", g: "m", t: "Ein Kilo kostet zwei Euro neunundneunzig.", n: "Kilosu 2,99 avro." },
    { s: "Kundin", g: "f", t: "Das ist teuer! Gibt es auch billige Tomaten?", n: "Pahalıymış! Ucuz domates de var mı?" },
    { s: "Mitarbeiter", g: "m", t: "Ja, die Tomaten da hinten sind im Angebot. Die kosten nur einen Euro neunundvierzig.", n: "Evet, arkadaki domatesler indirimde. Onlar sadece 1,49 avro." },
    { s: "Kundin", g: "f", t: "Super, dann nehme ich die. Haben Sie auch Tüten?", n: "Süper, o zaman onları alayım. Poşetiniz de var mı?" },
    { s: "Mitarbeiter", g: "m", t: "Ja, an der Kasse. Eine Tüte kostet zwanzig Cent.", n: "Evet, kasada. Bir poşet yirmi sent." },
    { s: "Kundin", g: "f", t: "Okay, vielen Dank für Ihre Hilfe!", n: "Tamam, yardımınız için çok teşekkürler!" },
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
  lines: [
    { s: "Jonas", g: "m", t: "Hey Elif! Hast du am Freitag Zeit?", n: "Selam Elif! Cuma günü vaktin var mı?" },
    { s: "Elif", g: "f", t: "Am Freitag? Am Abend schon. Warum?", n: "Cuma mı? Akşam müsaitim. Neden?" },
    { s: "Jonas", g: "m", t: "Wir gehen ins Kino. Kommst du mit?", n: "Sinemaya gidiyoruz. Sen de gelir misin?" },
    { s: "Elif", g: "f", t: "Gern! Welcher Film läuft denn?", n: "Seve seve! Hangi film oynuyor?" },
    { s: "Jonas", g: "m", t: "Eine Komödie. Sie beginnt um acht.", n: "Bir komedi. Saat sekizde başlıyor." },
    { s: "Elif", g: "f", t: "Super. Wann und wo treffen wir uns?", n: "Süper. Ne zaman ve nerede buluşuyoruz?" },
    { s: "Jonas", g: "m", t: "Um Viertel nach sieben vor dem Kino?", n: "Yediyi çeyrek geçe sinemanın önünde olur mu?" },
    { s: "Elif", g: "f", t: "Lieber um halb acht. Ich arbeite bis sieben.", n: "Yedi buçuk daha iyi olur. Yediye kadar çalışıyorum." },
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

})(window.KOPRU);
