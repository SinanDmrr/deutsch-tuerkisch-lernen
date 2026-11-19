/* Deutsch A2 – Rollenspiel-Dialoge für Türkischsprechende (Erklärungen, Übersetzungen und Fragen auf Türkisch)
 * Format: siehe js/content/de-a1-dialogs.js und Wahlzeilen (me:true) wie in tools/fixtures/roleplay-test.js.
 * IDs: Dialog de-a2-dNN, Wahlzeilen <id>.c1…, Fragen <id>.1… – NIE ändern oder wiederverwenden.
 */
(function (K) {

K.addDialog('de-a2-d01', {
  level: 'A2', scene: 'arzt', title: 'Arzttermin verschieben', sub: 'Doktor randevusunu telefonla ertelemek',
  role: 'Hasta (Aylin Kara)', roleG: 'f',
  lines: [
    { s: "Praxis", g: "f", t: "Praxis Dr. Brandt, guten Tag.", n: "Dr. Brandt muayenehanesi, iyi günler." },
    { me: true, id: "de-a2-d01.c1",
      o: ["Hallo, ich will einen anderen Termin.", "Guten Tag, hier ist Aylin Kara. Ich habe am Freitag einen Termin, aber ich muss ihn leider verschieben.", "Guten Tag, hier ist Aylin Kara. Sie müssen meinen Termin leider verschieben."], a: 1,
      why: { 0: "Telefonda adını söylemeden „ich will“ demek fazla sert ve belirsiz; hangi randevudan söz ettiğin de anlaşılmıyor.", 2: "„Sie müssen“ karşındaki kişiye emir verir: „Siz ertelemek zorundasınız.“ Ertelemesi gereken sensin; kendi durumunu „ich muss … verschieben“ ile söylersin." },
      e: "Telefonda düzen şu: selam, adın, sonra derdin. „Ich habe einen Termin, aber ich muss ihn leider verschieben“ cümlesinde „ihn“ der Termin'e geri döner (Akkusativ). „leider“ cümleyi yumuşatır.", n: "İyi günler, ben Aylin Kara. Cuma günü bir randevum var ama maalesef ertelemem gerekiyor." },
    { s: "Praxis", g: "f", t: "Kein Problem. Sie haben am Freitag um halb zehn einen Termin, stimmt das? Und warum möchten Sie ihn verschieben?", n: "Sorun değil. Cuma günü saat dokuz buçukta randevunuz var, doğru mu? Peki neden ertelemek istiyorsunuz?" },
    { me: true, id: "de-a2-d01.c2",
      o: ["Ja, genau. Ich muss am Freitag arbeiten, weil mein Kollege krank geworden ist.", "Ja, genau. Ich muss am Freitag arbeiten, weil mein Kollege ist krank geworden.", "Ja. Arbeit. Freitag geht nicht."], a: 0,
      why: { 1: "„weil“ ile kurulan yan cümlede çekimli fiil sona gider: „weil mein Kollege krank geworden ist“. Türkçedeki gibi fiili sonda tutmak burada senin lehine; Almanca ana cümle gibi dizmek hata olur.", 2: "Anlaşılır ama telefonda bir yetkiliyle konuşurken fazla kısa ve kuru. Tam cümle ve „weil“ ile sebep söylemek daha kibar durur." },
      e: "Sebep söylerken „weil“ kullan, çekimli fiil (ist) en sona gider. „krank geworden ist“: Perfekt'te yardımcı fiil sonda.", n: "Evet, doğru. Cuma günü çalışmam gerekiyor, çünkü iş arkadaşım hastalandı." },
    { s: "Praxis", g: "f", t: "Das verstehe ich. Wir hätten am Montag um elf Uhr oder am Dienstag um Viertel nach drei noch etwas frei. Was passt Ihnen besser?", n: "Anlıyorum. Pazartesi saat on birde ya da salı günü üçü çeyrek geçe boş yerimiz var. Hangisi size daha uygun?" },
    { me: true, id: "de-a2-d01.c3",
      o: ["Montag um elf Uhr passt mich besser. Können Sie mich dafür eintragen?", "Montag elf Uhr. Tragen Sie mich ein!", "Montag um elf Uhr passt mir besser. Können Sie mich dafür eintragen?"], a: 2,
      why: { 0: "„passen“ Dativ ister: „Das passt mir“, „mich“ (Akkusativ) değil. Türkçede „bana uyar“ dediğin için aslında Dativ'i hissedebilirsin: mir = bana.", 1: "Dilbilgisi olarak doğru ama „Tragen Sie mich ein!“ emir gibi durur. Kibarca rica etmek için „Können Sie mich … eintragen?“ de." },
      e: "„passen + Dativ“: Das passt mir / Ihnen / uns. Rica için „Können Sie …?“ (Konjunktiv II ile „Könnten Sie …?“ daha da nazik).", n: "Pazartesi saat on bir bana daha uygun. Beni o saate yazabilir misiniz?" },
    { s: "Praxis", g: "f", t: "Gern, das trage ich ein. Bringen Sie bitte Ihre Versichertenkarte mit. Sonst noch etwas?", n: "Memnuniyetle, yazıyorum. Lütfen sigorta kartınızı da getirin. Başka bir şey var mı?" },
    { me: true, id: "de-a2-d01.c4",
      o: ["Nein, danke. Ich bringe die Karte mit. Vielen Dank für deine Hilfe. Tschüss!", "Nein, danke. Ich bringe die Karte mit. Vielen Dank für Ihrer Hilfe. Auf Wiederhören!", "Nein, danke. Ich bringe die Karte mit. Vielen Dank für Ihre Hilfe. Auf Wiederhören!"], a: 2,
      why: { 0: "Muayenehane çalışanıyla „Sie“ ile konuşuyorsun; „deine“ ve „Tschüss“ arkadaş dilidir, burada yersiz kalır.", 1: "„für“ her zaman Akkusativ ister. „Hilfe“ dişil olduğu için „für Ihre Hilfe“ olur; „Ihrer“ Dativ/Genitiv şeklidir." },
      e: "Resmî telefon kapanışı: „Vielen Dank für Ihre Hilfe. Auf Wiederhören!“ (für + Akkusativ).", n: "Hayır, teşekkürler. Kartı getireceğim. Yardımınız için çok teşekkür ederim. Hoşça kalın!" }
  ],
  questions: [
    { id: "de-a2-d01.1", t: "mc", q: "Aylin randevusunu neden ertelemek istiyor?", o: ["Hasta olduğu için.", "Cuma günü çalışması gerektiği için.", "Doktoru değiştirmek istediği için."], a: 1,
      why: { 0: "Hasta olan Aylin değil, iş arkadaşı: „mein Kollege krank geworden ist“.", 2: "Doktoru değiştirmekten söz edilmiyor; sadece başka bir gün isteniyor." },
      e: "Aylin: „Ich muss am Freitag arbeiten, weil mein Kollege krank geworden ist.“ Hastalanan iş arkadaşı, o yüzden Aylin çalışmak zorunda." },
    { id: "de-a2-d01.2", t: "gap", q: "Der alte Termin ist am Freitag um halb ___.", a: ["zehn", "10"],
      wrong: { "neun": "„halb neun“ = 8.30. Almancada „halb“ bir sonraki saate bakar: halb zehn = dokuz buçuk (9.30).", "elf": "„halb elf“ = 10.30. Dokuz buçuk için sonraki saat olan „zehn“ gerekir." },
      e: "Almancada „halb zehn“ dokuz buçuktur: yarım saat, ona doğru. Türkçedeki „dokuz buçuk“ gibi düşünürsen yanılırsın; „halb“'tan sonra bir sonraki saati söyle." },
    { id: "de-a2-d01.3", t: "match", q: "Almanca cümleleri Türkçe karşılıklarıyla eşleştir.",
      p: [["Was passt Ihnen besser?", "Hangisi size daha uygun?"], ["Ich muss den Termin verschieben.", "Randevuyu ertelemem gerekiyor."], ["Bringen Sie bitte Ihre Karte mit.", "Lütfen kartınızı getirin."], ["Das trage ich ein.", "Onu deftere yazıyorum."]],
      e: "„verschieben“ = ertelemek, „mitbringen“ = yanında getirmek (ayrılabilen fiil: Bringen Sie … mit), „eintragen“ = deftere/listeye yazmak." },
    { id: "de-a2-d01.4", t: "order", q: "Cümleyi „Ich“ ile başlayarak sırala.", w: ["Ich", "muss", "am", "Freitag", "arbeiten,", "weil", "mein", "Kollege", "krank", "geworden", "ist."],
      a: ["Ich muss am Freitag arbeiten, weil mein Kollege krank geworden ist."],
      e: "Ana cümlede fiil ikinci sırada (Ich muss … arbeiten); „weil“ yan cümlesinde çekimli fiil (ist) en sona gider." }
  ]
});

K.addDialog('de-a2-d02', {
  level: 'A2', scene: 'amt', title: 'Anmeldung im Bürgeramt', sub: 'Belediyede adres kaydı (Anmeldung)',
  role: 'Başvuran (Emre Aksoy)', roleG: 'm',
  lines: [
    { s: "Frau Lehmann", g: "f", t: "Guten Morgen. Haben Sie eine Wartenummer?", n: "Günaydın. Sıra numaranız var mı?" },
    { me: true, id: "de-a2-d02.c1",
      o: ["Morgen. Nummer siebenundvierzig. Hier.", "Guten Morgen. Ja, ich habe die Nummer siebenundvierzig.", "Guten Morgen. Ja, Sie haben die Nummer siebenundvierzig."], a: 1,
      why: { 0: "Anlaşılır ama memura tek kelimelerle ve „hier“ diye cevap vermek fazla kuru kalır. Resmî yerde selam ve tam cümle daha kibar durur.", 2: "„Sie haben“ = siz sahipsiniz. Numara sende: „ich habe“. „Sie“ hitap olarak karşındakini gösterir, kendini değil." },
      e: "Resmî dairede selamla başla, tam cümleyle cevap ver: „Ja, ich habe die Nummer …“. Memura hitap „Sie“, kendin için „ich“.", n: "Günaydın. Evet, kırk yedi numaram var." },
    { s: "Frau Lehmann", g: "f", t: "Bitte nehmen Sie Platz. Was kann ich für Sie tun?", n: "Buyurun, oturun. Sizin için ne yapabilirim?" },
    { me: true, id: "de-a2-d02.c2",
      o: ["Ich habe vor zwei Wochen nach Köln gezogen und möchte mich anmelden.", "Ich will Anmeldung. Sofort.", "Ich bin vor zwei Wochen nach Köln gezogen und möchte mich anmelden."], a: 2,
      why: { 0: "„ziehen“ (taşınmak) bir yer değiştirme fiilidir; Perfekt'i „sein“ ile kurulur: „ich bin gezogen“, „habe“ ile değil.", 1: "Fiilsiz, emir gibi bir istek: „Sofort“ (hemen) memura baskı yapar. „Ich möchte mich anmelden“ hem doğru hem kibar." },
      e: "Taşınmayı Perfekt ile anlat: „Ich bin gezogen“ (sein, çünkü yer değiştirme). Kayıt için „mich anmelden“ (dönüşlü fiil), isteği „möchte“ ile nazik söyle.", n: "İki hafta önce Köln'e taşındım ve adresimi kaydettirmek istiyorum." },
    { s: "Frau Lehmann", g: "f", t: "Dann brauche ich Ihren Pass, das Anmeldeformular und die Bestätigung von Ihrem Vermieter. Haben Sie die Unterlagen dabei?", n: "O zaman pasaportunuz, adres kayıt formu ve ev sahibinizden bir onay belgesi gerekiyor. Belgeler yanınızda mı?" },
    { me: true, id: "de-a2-d02.c3",
      o: ["Hier sind mein Pass und das Formular. Die Bestätigung vom Vermieter habe ich leider zu Hause vergessen.", "Hier sind mein Pass und das Formular. Die Bestätigung vom Vermieter ich habe leider zu Hause vergessen.", "Hier sind mein Pass und das Formular. Die Bestätigung vom Vermieter bin ich leider zu Hause vergessen."], a: 0,
      why: { 1: "Çekimli fiil ana cümlede her zaman ikinci sırada durur. Cümleye „Die Bestätigung“ ile başladığın için ikinci sıra fiile ait: „… habe ich leider …“. Türkçedeki gibi özneyi öne almak burada hata olur.", 2: "„vergessen“ Perfekt'te „haben“ ile kurulur: „ich habe vergessen“. „sein“ ile sadece yer değiştirme ve durum değişikliği fiilleri kurulur." },
      e: "Perfekt: „habe … vergessen“. Vurgulamak için nesneyi başa alırsan (Die Bestätigung …) fiil yine ikinci sırada kalır, özne ondan sonra gelir: „habe ich“.", n: "İşte pasaportum ve form. Ev sahibinin onay belgesini maalesef evde unutmuşum." },
    { s: "Frau Lehmann", g: "f", t: "Oh, das ist ein Problem. Ohne die Bestätigung kann ich Sie leider nicht anmelden. Können Sie Ihren Vermieter anrufen? Er kann sie Ihnen vielleicht per E-Mail schicken.", n: "Hay aksi, bu bir sorun. Onay belgesi olmadan sizi maalesef kaydedemem. Ev sahibinizi arayabilir misiniz? Belki onu size e-postayla gönderebilir." },
    { me: true, id: "de-a2-d02.c4",
      o: ["Ja, ich rufe ihm sofort an. Kann ich danach wieder zu Ihnen kommen?", "Ja, ich rufe ihn sofort an. Kann ich danach wieder zu Ihnen kommen?", "Ja, ich rufe ihn sofort an. Kann ich danach wieder zu dir kommen?"], a: 1,
      why: { 0: "„anrufen“ Almancada Akkusativ ister: „ich rufe ihn an“. Türkçede „ona telefon ederim“ (yönelme hâli) dediğin için „ihm“ demek kolay; Almancada kişi doğrudan nesnedir.", 2: "Memurla „Sie“ ile konuşuyorsun; „zu dir“ arkadaş dilidir. Doğrusu „zu Ihnen“." },
      e: "„anrufen“ + Akkusativ: jemanden anrufen. Ayrılabilen fiil: „Ich rufe ihn an“. Dairede kişiye „Sie / Ihnen“ de.", n: "Evet, hemen arıyorum. Sonra tekrar size gelebilir miyim?" },
    { s: "Frau Lehmann", g: "f", t: "Kommen Sie gleich wieder zu mir. Ich lege Ihre Unterlagen so lange zur Seite. Eine neue Nummer brauchen Sie dann nicht.", n: "Hemen bana tekrar gelin. Belgelerinizi o zamana kadar kenara koyuyorum. O zaman yeni bir numaraya gerek yok." }
  ],
  questions: [
    { id: "de-a2-d02.1", t: "mc", q: "Emre neden hemen kaydolamıyor?", o: ["Pasaportunu unuttuğu için.", "Ev sahibinin onay belgesi yanında olmadığı için.", "Sıra numarası olmadığı için."], a: 1,
      why: { 0: "Pasaportu yanında: „Hier sind mein Pass und das Formular.“", 2: "Sıra numarası var: „Ja, ich habe die Nummer …“" },
      e: "Emre pasaportu ve formu getirmiş, ama „die Bestätigung vom Vermieter“ (ev sahibinin onayı) evde kalmış. O olmadan kayıt yapılamaz." },
    { id: "de-a2-d02.2", t: "gap", q: "Emre ___ vor zwei Wochen nach Köln gezogen.", a: ["ist"],
      wrong: { "hat": "„ziehen“ bir yer değiştirme fiilidir, Perfekt'i „sein“ ile kurulur: er ist gezogen." },
      e: "Yer değiştirme (gehen, fahren, ziehen, kommen) bildiren fiiller Perfekt'te „sein“ alır: „er ist … gezogen“." },
    { id: "de-a2-d02.3", t: "mc", q: "Emre'nin babası Almanca bilmiyor ve yanında duruyor. Memur şunu söylüyor: „Ohne die Bestätigung kann ich Sie leider nicht anmelden. Können Sie Ihren Vermieter anrufen?“ Baba soruyor: „Ne dedi?“ Emre'nin babasına vereceği doğru cevap hangisi?", o: ["Kaydı yapamıyor, çünkü onay belgesi eksik; ev sahibini aramamı istiyor.", "Kaydın yapıldığını, ev sahibini aramama gerek olmadığını söylüyor.", "Pasaportumun geçerli olmadığını ve yenisini almamı söylüyor."], a: 0,
      why: { 1: "Tam tersi: „kann ich Sie leider nicht anmelden“ = sizi kaydedemem.", 2: "Pasaporttan söz edilmiyor; eksik olan ev sahibinin onayı („Bestätigung“)." },
      e: "Aktarırken anlamı kısaca ve doğru ver: „ohne … nicht“ = olmadan olmaz, „anrufen“ = aramak. Kelimesi kelimesine çevirmek şart değil; önemli olan bilgi: sebep ve yapılacak iş." },
    { id: "de-a2-d02.4", t: "order", q: "Cümleyi „Ich“ ile başlayarak sırala.", w: ["Ich", "rufe", "ihn", "sofort", "an."], a: ["Ich rufe ihn sofort an."],
      e: "„anrufen“ ayrılabilen fiildir: çekimli kısım (rufe) ikinci sırada, „an“ cümlenin sonunda." }
  ]
});

K.addDialog('de-a2-d03', {
  level: 'A2', scene: 'wohnung', title: 'Der Wasserhahn tropft', sub: 'Bina görevlisine arızayı bildirmek',
  role: 'Kiracı (Selin Acar)', roleG: 'f',
  lines: [
    { s: "Herr Winkler", g: "m", t: "Hausmeister Winkler, guten Tag.", n: "Bina görevlisi Winkler, iyi günler." },
    { me: true, id: "de-a2-d03.c1",
      o: ["Hallo Winkler! Ich bin Selin aus dem dritten Stock. Meine Küche ist kaputt.", "Guten Tag, Herr Winkler. Hier ist Selin Acar aus dem dritten Stock. Ich habe ein Problem bei die Küche.", "Guten Tag, Herr Winkler. Hier ist Selin Acar aus dem dritten Stock. Ich habe ein Problem in der Küche."], a: 2,
      why: { 0: "Soyadıyla „Herr“ olmadan hitap etmek ve „Hallo Winkler!“ demek bir görevliye karşı fazla laubali durur. Ayrıca „Küche ist kaputt“ çok genel: asıl sorunun ne olduğu anlaşılmıyor.", 1: "„in der Küche“ mutfakta demektir ve „wo?“ (nerede?) sorusuna cevap verdiği için Dativ ister: dişil „die Küche“ → „der Küche“. „bei die Küche“ hem edat hem artikel olarak yanlış." },
      e: "Telefonda: selam + „Herr/Frau“ + soyadı, sonra kim olduğunu ve nerede oturduğunu söyle. Yer bildiren „in“ + Dativ: in der Küche, im Bad (in dem), in der Wohnung.", n: "İyi günler Bay Winkler. Ben üçüncü kattan Selin Acar. Mutfakta bir sorunum var." },
    { s: "Herr Winkler", g: "m", t: "Ach, Frau Acar. Was ist denn los?", n: "Ah, Bayan Acar. Hayırdır, ne oldu?" },
    { me: true, id: "de-a2-d03.c2",
      o: ["Der Wasserhahn in der Küche kaputt. Sonntag. Kommen Sie!", "Der Wasserhahn in der Küche tropft seit Sonntag. Ich habe ihn schon fester zugedreht, aber es hat nichts geholfen.", "Der Wasserhahn in der Küche tropft seit Sonntag. Ich habe ihn schon fester zugedreht, aber es ist nichts geholfen."], a: 1,
      why: { 0: "Fiilsiz ve emir gibi: „Kommen Sie!“ görevliyi sorunu öğrenmeden çağırmak olur. Tam cümleyle ne olduğunu anlatmak hem daha kibar hem daha anlaşılır.", 2: "„helfen“ Perfekt'te „haben“ alır: „es hat nichts geholfen“. „sein“ sadece yer/durum değişikliği bildiren fiillerle kullanılır." },
      e: "Süren durum: seit + Präsens (tropft seit Sonntag). Denediğin şeyi Perfekt'le anlat: „Ich habe ihn zugedreht“, „es hat nichts geholfen“ (helfen Perfekt'te „haben“ alır).", n: "Mutfaktaki musluk pazardan beri damlıyor. Daha sıkı kapatmayı denedim ama hiçbir işe yaramadı." },
    { s: "Herr Winkler", g: "m", t: "Das klingt nicht gut. Hatten Sie vorher schon Probleme mit dem Wasser?", n: "Hiç hoş değil. Daha önce de suyla ilgili bir sorun yaşadınız mı?" },
    { me: true, id: "de-a2-d03.c3",
      o: ["Nein, bis Sonntag hatte ich keine Probleme. Vorher war alles in Ordnung.", "Nein, bis Sonntag war ich keine Probleme. Vorher war alles in Ordnung.", "Nein, bis Sonntag hatte ich keine Probleme. Vorher waren alles in Ordnung."], a: 0,
      why: { 1: "Türkçede „sorunum yoktu“ dersin; Almancada „sein“ değil „haben“ kullanılır: „ich hatte keine Probleme“. „ich war keine Probleme“ anlamsız olur.", 2: "„alles“ (her şey) tekil sayılır, fiil de tekil olur: „war alles in Ordnung“." },
      e: "Geçmişte „sahip olmak“ için „hatte“, „olmak“ için „war“ kullanılır; ikisi de günlük dilde Präteritum'dur. „Alles war in Ordnung“ = her şey yolundaydı.", n: "Hayır, pazara kadar hiçbir sorunum yoktu. Öncesinde her şey yolundaydı." },
    { s: "Herr Winkler", g: "m", t: "Gut. Ich komme morgen Vormittag vorbei. Sind Sie dann zu Hause, oder kann ich irgendwo einen Schlüssel abholen?", n: "Peki. Yarın öğleden önce uğrarım. O saatte evde misiniz, yoksa anahtarı bir yerden alabilir miyim?" },
    { me: true, id: "de-a2-d03.c4",
      o: ["Morgen Vormittag bin ich leider bei der Arbeit. Aber meine Nachbarin hat einen Schlüssel. Könnten Sie ihn bei sie abholen?", "Morgen Vormittag bin ich leider bei der Arbeit. Aber meine Nachbarin hat einen Schlüssel. Könnten Sie ihn bei ihr abholen?", "Morgen Vormittag bin ich leider bei der Arbeit. Holen Sie den Schlüssel bei meiner Nachbarin ab!"], a: 1,
      why: { 0: "„bei“ her zaman Dativ ister. „sie“ Akkusativ'dir; Dativ'i „ihr“ (ona/onun yanında) olur: „bei ihr“.", 2: "„bitte“ olmadan ünlemle söylenen „Holen Sie … ab!“ emir gibi durur. „Könnten Sie …?“ rica eder ve yumuşatır." },
      e: "Kibar rica: „Könnten Sie …?“. „bei“ + Dativ: bei ihr (onun yanında), beim Nachbarn. Ayrılabilen fiil: modal fiille mastar bitişik ve sonda kalır („Könnten Sie ihn abholen?“), emir/Präsens'te ayrılır („Holen Sie ihn ab“).", n: "Yarın öğleden önce maalesef işteyim. Ama komşumda bir anahtar var. Anahtarı ondan alabilir misiniz?" },
    { s: "Herr Winkler", g: "m", t: "Das geht in Ordnung. Dann spreche ich mit Ihrer Nachbarin und komme morgen gegen zehn. Ich bringe gleich ein neues Teil mit.", n: "Olur, tamamdır. O zaman komşunuzla konuşurum ve yarın saat ona doğru gelirim. Yeni bir parçayı da yanımda getiririm." }
  ],
  questions: [
    { id: "de-a2-d03.1", t: "mc", q: "Selin'in evinde sorun nerede?", o: ["Banyoda, duşta.", "Mutfakta, musluk.", "Oturma odasında, kaloriferde."], a: 1,
      why: { 0: "Banyodan söz edilmiyor; sorun „in der Küche“.", 2: "Kalorifer (Heizung) konuşulmuyor; „Wasserhahn“ (musluk) damlıyor." },
      e: "Selin: „Der Wasserhahn in der Küche tropft seit Sonntag.“ Yani mutfaktaki musluk." },
    { id: "de-a2-d03.2", t: "gap", q: "Bis Sonntag ___ Selin keine Probleme.", a: ["hatte"],
      wrong: { "war": "„Sorunu yoktu“ derken Almancada „sein“ değil „haben“ kullanılır: Selin hatte keine Probleme.", "hat": "„hat“ şimdiki zamandır; „bis Sonntag“ geçmişi gösterdiği için Präteritum gerekir: hatte." },
      e: "„haben“ fiilinin Präteritum'u: ich hatte, er/sie hatte. Geçmişte sahip olma / olmama için günlük dilde de „hatte“ kullanılır." },
    { id: "de-a2-d03.3", t: "match", q: "Cümleleri Türkçe karşılıklarıyla eşleştir.",
      p: [["Der Wasserhahn tropft seit Sonntag.", "Musluk pazardan beri damlıyor."], ["Das hat nichts geholfen.", "Bunun hiçbir faydası olmadı."], ["Ich bin bei der Arbeit.", "İşteyim."], ["Er kommt morgen vorbei.", "Yarın uğrayacak."]],
      e: "„seit“ + Präsens süren durumu anlatır; „nichts geholfen“ Perfekt'tir; „bei der Arbeit sein“ = işte olmak; „vorbeikommen“ = uğramak." },
    { id: "de-a2-d03.4", t: "order", q: "Cümleyi „Meine“ ile başlayarak sırala.", w: ["Meine", "Nachbarin", "hat", "einen", "Schlüssel."], a: ["Meine Nachbarin hat einen Schlüssel."],
      e: "Özne (Meine Nachbarin) başta, çekimli fiil (hat) ikinci sırada, nesne (einen Schlüssel, Akkusativ) sonda." }
  ]
});

K.addDialog('de-a2-d04', {
  level: 'A2', scene: 'arbeit', title: 'Schicht tauschen', sub: 'İş arkadaşıyla vardiya değiştirmek (sen diye konuşuyorsunuz)',
  role: 'Çalışan (Deniz)', roleG: 'm',
  lines: [
    { s: "Jana", g: "f", t: "Hey Deniz, du siehst müde aus. Alles okay?", n: "Selam Deniz, yorgun görünüyorsun. Her şey yolunda mı?" },
    { me: true, id: "de-a2-d04.c1",
      o: ["Geht so. Ich habe schlecht geschlafen und morgen ich habe auch noch einen Arzttermin.", "Geht so. Ich habe schlecht geschlafen, und morgen habe ich auch noch einen Arzttermin.", "Es geht mir nicht gut, Frau Jana. Haben Sie gut geschlafen? Ich habe schlecht geschlafen."], a: 1,
      why: { 0: "Cümleye „morgen“ ile başlayınca çekimli fiil ikinci sıraya geçer: „morgen habe ich“. „morgen ich habe“ Türkçe sıralamasını Almancaya taşır; ama Almancada fiil ana cümlede ikinci sırada kalır.", 2: "Bir iş arkadaşına „Frau Jana“ ve „Sie“ ile konuşmak fazla resmî ve soğuk kaçar. Aynı vardiyada çalışan, birbirine „du“ diyen kişiler samimi konuşur." },
      e: "İş arkadaşıyla „du“: „Geht so“ günlük dilde hâl hatır cevabıdır. Zaman ifadesi başa gelince (morgen) fiil ikinci sıraya geçer: „morgen habe ich …“. Perfekt: „habe geschlafen“.", n: "İdare eder. Kötü uyudum, üstelik yarın bir de doktor randevum var." },
    { s: "Jana", g: "f", t: "Oje. Was ist denn los?", n: "Hay Allah. Neyin var ki?" },
    { me: true, id: "de-a2-d04.c2",
      o: ["Ich habe seit Tagen Rückenschmerzen und muss morgen früh zum Arzt. Du musst morgen meine Frühschicht übernehmen.", "Ich habe seit Tagen Rückenschmerzen und muss morgen früh zum Arzt. Kannst du morgen mein Frühschicht übernehmen?", "Ich habe seit Tagen Rückenschmerzen und muss morgen früh zum Arzt. Kannst du morgen meine Frühschicht übernehmen?"], a: 2,
      why: { 0: "Arkadaşa da olsa „Du musst …“ bir yardım isteğini emre çevirir. Rica ederken „Kannst du …?“ veya „Könntest du …?“ de.", 1: "„Schicht“ dişil (die Schicht). Sahiplik eki de dişil olmalı: „meine Frühschicht“, „mein“ değil. Türkçede cinsiyet olmadığı için bu hata çok yapılır." },
      e: "Arkadaşa rica: „Kannst du …?“ (daha nazik: „Könntest du …?“). Akkusativ nesne: „die Frühschicht“ dişil → „meine Frühschicht“. „seit Tagen“ + Präsens: günlerdir devam eden durum.", n: "Günlerdir sırtım ağrıyor ve yarın sabah erkenden doktora gitmem gerekiyor. Yarın benim yerime sabah vardiyasına girebilir misin?" },
    { s: "Jana", g: "f", t: "Frühschicht? Eigentlich wollte ich ausschlafen. Na gut. Kannst du dafür am Samstag meine Spätschicht machen?", n: "Sabah vardiyası mı? Aslında yarın geç saate kadar uyuyacaktım. Peki, tamam. Karşılığında cumartesi benim akşam vardiyamı yapabilir misin?" },
    { me: true, id: "de-a2-d04.c3",
      o: ["Ja, klar, das mache ich. Vielen Dank, das ist wirklich nett von Ihnen!", "Ja, klar, das mache ich. Vielen Dank, das ist wirklich nett von dir!", "Ja, klar, das mache ich. Vielen Dank, das ist wirklich nett von dich!"], a: 1,
      why: { 0: "Jana ile „du“ ile konuşuyorsun; „von Ihnen“ resmî hitaptır ve burada yersiz kalır.", 2: "„von“ her zaman Dativ ister: „von dir“, „von dich“ değil. „dich“ Akkusativ'dir." },
      e: "Teşekkürde: „Das ist nett von dir.“ (von + Dativ). „du“ → Dativ „dir“, Akkusativ „dich“. İş arkadaşına „du“ ile hitap edildiği sürece „Sie“ kullanma.", n: "Evet tabii, yaparım. Çok sağ ol, gerçekten çok naziksin!" },
    { s: "Jana", g: "f", t: "Super. Sag aber bitte auch Herrn Maier, dass wir getauscht haben. Er macht ja den Dienstplan.", n: "Süper. Ama lütfen Bay Maier'e de söyle, vardiya değiştirdik diye. Çünkü çalışma çizelgesini o hazırlıyor." },
    { me: true, id: "de-a2-d04.c4",
      o: ["Gute Idee. Ich schreibe ihm gleich eine Nachricht und sage, dass wir die Schichten getauscht haben.", "Gute Idee. Ich schreibe ihm gleich eine Nachricht und sage, dass wir haben die Schichten getauscht.", "Gute Idee. Ich schreibe ihm gleich eine Nachricht und sage, dass wir die Schichten getauschen haben."], a: 0,
      why: { 1: "„dass“ ile başlayan yan cümlede çekimli fiil (haben) en sona gider: „dass wir die Schichten getauscht haben“.", 2: "„tauschen“ fiilinin Partizip II'si „getauscht“tır; sonuna „-en“ gelmez (düzenli fiil: ge- + kök + -t)." },
      e: "„dass“-Satz: çekimli fiil sonda: „… dass wir die Schichten getauscht haben.“ Düzenli fiil Perfekt'i: tauschen → hat getauscht. „schreiben“ Dativ'li: ihm = ona.", n: "İyi fikir. Hemen ona bir mesaj yazıp vardiyaları değiştirdiğimizi söylerim." },
    { s: "Jana", g: "f", t: "Prima, dann ist alles geklärt. Gute Besserung für deinen Rücken!", n: "Tamamdır, o zaman her şey halloldu. Sırtına geçmiş olsun!" }
  ],
  questions: [
    { id: "de-a2-d04.1", t: "mc", q: "Deniz vardiyayı neden değiştirmek istiyor?", o: ["Yarın sabah sırt ağrısı yüzünden doktora gitmesi gerektiği için.", "Cumartesi tatile çıkmak istediği için.", "Jana'yla tartıştığı için."], a: 0,
      why: { 1: "Cumartesi Deniz zaten Jana'nın akşam vardiyasını yapacak; tatilden söz edilmiyor.", 2: "Tartışmadan söz yok; Jana yardım etmeyi kabul ediyor." },
      e: "Deniz: „Ich habe seit Tagen Rückenschmerzen und muss morgen früh zum Arzt.“" },
    { id: "de-a2-d04.2", t: "gap", q: "Am Samstag übernimmt Deniz Janas ___.", a: ["Spätschicht"],
      wrong: { "Frühschicht": "Frühschicht (sabah vardiyası) yarın Jana'nın yapacağı iş; cumartesi Deniz Jana'nın akşam vardiyasını, yani „Spätschicht“'i yapacak.", "spätschicht": "Almancada isimler büyük harfle yazılır: Spätschicht." },
      e: "Takas: yarın Jana Deniz'in „Frühschicht“'ini yapar, cumartesi Deniz Jana'nın „Spätschicht“'ini. „früh“ = erken, „spät“ = geç." },
    { id: "de-a2-d04.3", t: "match", q: "Resmî cümleyi (Sie) samimi karşılığıyla (du) eşleştir.",
      p: [["Haben Sie gut geschlafen?", "Hast du gut geschlafen?"], ["Können Sie mir helfen?", "Kannst du mir helfen?"], ["Vielen Dank für Ihre Hilfe.", "Vielen Dank für deine Hilfe."], ["Wie geht es Ihnen?", "Wie geht es dir?"]],
      e: "„Sie“ → „du“, „Ihnen“ → „dir“ (Dativ), „Ihre“ → „deine“. Fiil de değişir: haben Sie → hast du, können Sie → kannst du." },
    { id: "de-a2-d04.4", t: "order", q: "Cümleyi „Ich“ ile başlayarak sırala.", w: ["Ich", "schreibe", "ihm", "gleich", "eine", "Nachricht."], a: ["Ich schreibe ihm gleich eine Nachricht."],
      e: "Fiil ikinci sırada (schreibe). Dativ kişi (ihm) Akkusativ nesneden (eine Nachricht) önce gelir; „gleich“ zaman bildirir." }
  ]
});

K.addDialog('de-a2-d05', {
  level: 'A2', scene: 'schule', title: 'Gespräch in der Kita', sub: 'Kreş öğretmeniyle görüşme: gezi ve veli toplantısı',
  role: 'Veli (Murat Çelik)', roleG: 'm',
  lines: [
    { s: "Frau Schröder", g: "f", t: "Guten Tag, Herr Çelik. Ich wollte Sie noch kurz sprechen. Es geht um den Ausflug nächste Woche.", n: "İyi günler Bay Çelik. Sizinle kısaca görüşmek istiyordum. Gelecek haftaki gezi hakkında." },
    { me: true, id: "de-a2-d05.c1",
      o: ["Guten Tag, Frau Schröder. Ja, gern. Meine Tochter hat schon davon erzählt.", "Hallo, Schröder. Ja, was gibt's?", "Guten Tag, Frau Schröder. Ja, gern. Mein Tochter hat schon davon erzählt."], a: 0,
      why: { 1: "Kreş öğretmenine soyadıyla, „Frau“ olmadan ve „Hallo, was gibt's?“ diyerek hitap etmek fazla laubali ve saygısız kaçar. Okul ve kreşte öğretmenle „Sie“ ve „Frau/Herr“ kullanılır.", 2: "„Tochter“ dişil (die Tochter). Sahiplik eki de dişil olmalı: „meine Tochter“. Türkçede cinsiyet olmadığı için „mein/meine“ karışır." },
      e: "Öğretmene saygılı hitap: „Guten Tag, Frau Schröder.“ „erzählen“ Perfekt: „hat erzählt“; „davon“ = ondan (geziden). Dişil isim → meine Tochter, meine Frau, meine Mutter.", n: "İyi günler Bayan Schröder. Evet, buyurun. Kızım zaten geziden bahsetti." },
    { s: "Frau Schröder", g: "f", t: "Wir fahren am Donnerstag in den Zoo. Die Kinder müssen um halb neun hier sein. Bitte geben Sie Ihrer Tochter feste Schuhe, etwas zu trinken und ein Frühstück mit.", n: "Perşembe günü hayvanat bahçesine gidiyoruz. Çocukların sekiz buçukta burada olması gerekiyor. Lütfen kızınıza sağlam ayakkabı, bir içecek ve bir kahvaltılık verin." },
    { me: true, id: "de-a2-d05.c2",
      o: ["Das ist kein Problem. Ich bringe ihn um Viertel nach acht, weil ich danach zur Arbeit muss. Muss ich noch etwas unterschreiben?", "Das ist kein Problem. Ich bringe sie um Viertel nach acht, weil ich muss danach zur Arbeit. Muss ich noch etwas unterschreiben?", "Das ist kein Problem. Ich bringe sie um Viertel nach acht, weil ich danach zur Arbeit muss. Muss ich noch etwas unterschreiben?"], a: 2,
      why: { 0: "Türkçede „o“ cinsiyetsizdir, Almancada ise değil. „Tochter“ dişil olduğu için Akkusativ'de „sie“ olur; „ihn“ eril isimler içindir (der Sohn → ihn).", 1: "„weil“ yan cümleyi başlatır ve çekimli fiil (muss) en sona gider: „weil ich danach zur Arbeit muss“. „weil ich muss danach …“ ana cümle sıralamasıdır, hatalı." },
      e: "„sie“ = o (dişil), „ihn“ = o (eril). „weil“ → fiil sonda: „weil ich danach zur Arbeit muss“. „Viertel nach acht“ = sekizi çeyrek geçe (8.15); „halb neun“ = 8.30.", n: "Sorun değil. Onu sekizi çeyrek geçe getiririm, çünkü ondan sonra işe gitmem gerekiyor. Başka bir şey imzalamam gerekiyor mu?" },
    { s: "Frau Schröder", g: "f", t: "Ja, hier ist ein Zettel. Bitte unterschreiben Sie ihn bis Mittwoch. Und noch etwas: Am Montag ist Elternabend, um achtzehn Uhr. Können Sie kommen?", n: "Evet, işte bir form. Lütfen çarşambaya kadar imzalayın. Bir şey daha: Pazartesi saat 18.00'de veli toplantısı var. Gelebilir misiniz?" },
    { me: true, id: "de-a2-d05.c3",
      o: ["Nein, Montag geht nicht. Meine Frau kommt, nicht ich.", "Leider nicht, ich arbeite am Montag bis neunzehn Uhr. Könnte meine Frau vielleicht allein kommen?", "Leider nicht, ich arbeitete am Montag bis neunzehn Uhr. Könnte meine Frau vielleicht allein kommen?"], a: 1,
      why: { 0: "Anlaşılır ama fazla keskin: sebep söylemiyor, „geht nicht“ ve „nicht ich“ ile adeta emrivaki yapıyor. Öğretmene karşı „Leider …“ ile başlamak ve rica etmek daha kibardır.", 2: "Pazartesi gelecekte; gelecek için Präsens kullanılır: „ich arbeite am Montag“. „arbeitete“ Präteritum'dur ve geçmişi anlatır." },
      e: "Gelecekteki planı Präsens + zaman ifadesiyle söylersin: „Am Montag arbeite ich bis …“. Kibar ret: „Leider nicht, …“ + sebep + „Könnte … vielleicht …?“ ile bir çözüm öner.", n: "Maalesef hayır, pazartesi akşam yediye kadar çalışıyorum. Eşim tek başına gelse olur mu?" },
    { s: "Frau Schröder", g: "f", t: "Natürlich, das geht. Ihre Frau kann gern allein kommen. Ich schreibe sie auf die Liste. Haben Sie sonst noch Fragen?", n: "Tabii, olur. Eşiniz tek başına gelebilir. Onu listeye yazıyorum. Başka sorunuz var mı?" },
    { me: true, id: "de-a2-d05.c4",
      o: ["Nein, vielen Dank. Ich gebe Ihnen den Zettel am Mittwoch unterschrieben zurück. Einen schönen Tag noch!", "Nein, danke. Ich gebe dir den Zettel am Mittwoch zurück. Schönen Tag noch!", "Nein, vielen Dank. Ich gebe Sie den Zettel am Mittwoch zurück. Einen schönen Tag noch!"], a: 0,
      why: { 1: "Öğretmenle „Sie“ ile konuşuyorsun; „dir“ arkadaş dilidir. Doğrusu: „Ihnen“.", 2: "„geben“ iki nesne alır: kişi Dativ (Ihnen), şey Akkusativ (den Zettel). „Sie“ Akkusativ'dir; „jemandem etwas geben“ kalıbında kişi Dativ'de olmalı." },
      e: "„Ich gebe Ihnen den Zettel zurück.“ = Size formu geri veririm (jemandem etwas zurückgeben: kişi Dativ, şey Akkusativ). Veda: „Einen schönen Tag noch!“ nazik ve yaygın.", n: "Hayır, çok teşekkürler. Formu çarşamba günü imzalı olarak size geri veririm. İyi günler dilerim!" },
    { s: "Frau Schröder", g: "f", t: "Danke, Ihnen auch! Bis Mittwoch, Herr Çelik.", n: "Teşekkürler, size de! Çarşambaya kadar, Bay Çelik." }
  ],
  questions: [
    { id: "de-a2-d05.1", t: "mc", q: "Gezi günü çocuklar saat kaçta kreşte olmalı?", o: ["8.15", "8.30", "9.30"], a: 1,
      why: { 0: "Saat 8.15 (Viertel nach acht), Murat'ın kızını getireceği saattir; çocukların orada olması gereken saat değil.", 2: "„halb zehn“ 9.30 olurdu. „halb neun“ sekiz buçuktur." },
      e: "Frau Schröder: „Die Kinder müssen um halb neun hier sein.“ „halb neun“ = 8.30: Almancada „halb“ bir sonraki saate göre yarım saat öncesidir." },
    { id: "de-a2-d05.2", t: "gap", q: "Am Montag um achtzehn Uhr ist der ___.", a: ["Elternabend"],
      wrong: { "elternabend": "Almancada isimler büyük harfle yazılır: Elternabend." },
      e: "„Eltern“ (ebeveynler) + „Abend“ (akşam) = veli toplantısı. Birleşik isimde sonuncu kelime artikeli belirler: der Abend → der Elternabend." },
    { id: "de-a2-d05.3", t: "mc", q: "Murat'ın annesi Almanca bilmiyor ve yanında duruyor. Öğretmen şöyle diyor: „Bitte geben Sie Ihrer Tochter feste Schuhe, etwas zu trinken und ein Frühstück mit.“ Annesi soruyor: „Torunuma ne vermeniz gerekiyormuş?“ Doğru aktarım hangisi?", o: ["Sağlam ayakkabı, bir içecek ve bir kahvaltılık.", "Sadece sağlam ayakkabı ve para.", "Yağmurluk ve bir oyuncak."], a: 0,
      why: { 1: "Para söz konusu değil; içecek ve kahvaltılık da var.", 2: "Yağmurluk ve oyuncaktan söz edilmiyor: „feste Schuhe, etwas zu trinken, ein Frühstück“." },
      e: "Aktarırken listeyi eksiksiz ver: feste Schuhe = sağlam ayakkabı, etwas zu trinken = içecek bir şey, Frühstück = kahvaltılık. Kelimesi kelimesine çevirmen gerekmez, bilgi eksiksiz olsun." },
    { id: "de-a2-d05.4", t: "order", q: "Cümleyi „Könnte“ ile başlayarak sırala.", w: ["Könnte", "meine", "Frau", "vielleicht", "allein", "kommen?"], a: ["Könnte meine Frau vielleicht allein kommen?", "Könnte vielleicht meine Frau allein kommen?"],
      e: "Konjunktiv II ile kibar soru: fiil (Könnte) başta, özne (meine Frau) fiilden sonra gelir, „kommen“ (mastar) en sonda. „vielleicht“ özneden önce de olabilir; cümleyi yumuşatır." }
  ]
});

K.addDialog('de-a2-d06', {
  level: 'A2', scene: 'bahn', title: 'Verspätung am Bahnhof', sub: 'Tren rötarı, peron değişikliği ve bilet',
  role: 'Yolcu (Emre Aydın)', roleG: 'm',
  lines: [
    { s: "Bahnmitarbeiterin", g: "f", t: "Guten Tag, wie kann ich Ihnen helfen?", n: "İyi günler, size nasıl yardımcı olabilirim?" },
    { me: true, id: "de-a2-d06.c1",
      o: ["Guten Tag. Mein Zug nach Hannover hat Verspätung. Erreiche ich dort noch meinen Anschluss nach Hamburg?", "Guten Tag. Mein Zug nach Hannover ist Verspätung. Erreiche ich dort noch meinen Anschluss nach Hamburg?", "Guten Tag. Mein Zug hat Verspätung, deshalb ich erreiche meinen Anschluss nicht."], a: 0,
      why: { 1: "„Verspätung“ bir isimdir; „sein“ ile kullanılmaz. Türkçedeki „gecikmesi var“ gibi „haben“ gerekir: „Der Zug hat Verspätung.“", 2: "„deshalb“ cümlenin başında durunca fiil hemen arkasından gelir: „deshalb kann ich …“. „deshalb ich erreiche“ diye sıralamak hatalıdır; ayrıca soru sormak yerine bilgi vermiş oluyorsun." },
      e: "„Der Zug hat Verspätung“ (haben + Verspätung). „Erreiche ich … noch meinen Anschluss?“ evet/hayır sorusudur, fiil başta gelir. „erreichen“ = yetişmek, ulaşmak.", n: "İyi günler. Hannover'e giden trenim rötarlı. Orada Hamburg aktarmama yetişebilir miyim?" },
    { s: "Bahnmitarbeiterin", g: "f", t: "Ihr Zug fährt mit fünfundzwanzig Minuten Verspätung ab. Den Anschluss in Hannover erreichen Sie wahrscheinlich nicht mehr. Haben Sie schon eine Fahrkarte?", n: "Trenin yirmi beş dakika rötarla kalkacak. Hannover'deki aktarmaya büyük ihtimalle yetişemezsiniz. Biletiniz var mı?" },
    { me: true, id: "de-a2-d06.c2",
      o: ["Ja, ich habe eine Fahrkarte nach Hamburg. Darf ich wegen der Verspätung einen anderen Zug nehmen?", "Ja, ich habe eine Fahrkarte nach Hamburg. Darf ich wegen die Verspätung einen anderen Zug nehmen?", "Ja, ich habe eine Fahrkarte nach Hamburg. Darf ich wegen der Verspätung mit einen anderen Zug fahren?"], a: 0,
      why: { 1: "„wegen“ ardından Genitiv ister: „wegen der Verspätung“. „die Verspätung“ Nominativ/Akkusativ şeklidir ve burada yanlış.", 2: "„mit“ her zaman Dativ ister: „mit einem anderen Zug“. „einen“ Akkusativ'dir." },
      e: "„wegen“ + Genitiv: wegen der Verspätung = rötar yüzünden. „einen Zug nehmen“ (Akkusativ) veya „mit einem Zug fahren“ (Dativ): iki kalıp da doğru, ama karıştırma.", n: "Evet, Hamburg'a bir biletim var. Rötar yüzünden başka bir trene binebilir miyim?" },
    { s: "Bahnmitarbeiterin", g: "f", t: "Ja, das dürfen Sie. Ab zwanzig Minuten Verspätung am Ziel gilt Ihre Fahrkarte auch für andere Züge. Der nächste Zug nach Hannover fährt um vierzehn Uhr dreißig, aber nicht von Gleis fünf, sondern von Gleis neun.", n: "Evet, olur. Varışta yirmi dakika ve üzeri rötarda biletiniz başka trenler için de geçerli. Hannover'e bir sonraki tren saat on dört otuzda kalkıyor, ama beşinci perondan değil, dokuzuncu perondan." },
    { me: true, id: "de-a2-d06.c3",
      o: ["Also fährt der Zug um halb drei von Gleis neun ab?", "Also fährt der Zug um halb zwei von Gleis neun ab?"], a: 0,
      why: { 1: "Türkçedeki „iki buçuk“tan yola çıkıp „halb zwei“ dersen 13.30 olur. Almancada „halb“ bir sonraki saate bakar: 14.30 = halb drei." },
      e: "14.30 = vierzehn Uhr dreißig = „halb drei“ = üçe yarım saat kala, yani iki buçuk. Ayrılabilen fiil: „abfahren“ → „Der Zug fährt um … ab.“", n: "Yani tren saat iki buçukta 9 numaralı perondan mı kalkıyor?" },
    { s: "Bahnmitarbeiterin", g: "f", t: "Genau. Gleis neun erreichen Sie über die Unterführung. Brauchen Sie sonst noch etwas?", n: "Aynen. Dokuzuncu perona alt geçitten ulaşırsınız. Başka bir şeye ihtiyacınız var mı?" },
    { me: true, id: "de-a2-d06.c4",
      o: ["Ja, bitte. Könnten Sie mir eine Bestätigung für die Verspätung geben? Mein Chef möchte sie sehen.", "Ja, bitte. Könnten Sie mich eine Bestätigung für die Verspätung geben? Mein Chef möchte sie sehen.", "Ja, bitte. Könnten Sie geben mir eine Bestätigung für die Verspätung? Mein Chef möchte sie sehen."], a: 0,
      why: { 1: "„geben“ ile kişi Dativ'de olur: „mir“ = bana. „mich“ Akkusativ'dir; „jemandem etwas geben“ kalıbına uymaz.", 2: "Modal fiilli (könnten) cümlede asıl fiil mastar halinde en sona gider: „Könnten Sie mir … geben?“. Fiili ortaya almak hatalıdır." },
      e: "„Könnten Sie mir … geben?“: nazik rica. Kişi Dativ (mir), şey Akkusativ (eine Bestätigung), mastar en sonda. „sie“ = die Bestätigung.", n: "Evet, lütfen. Bana rötar için bir belge verebilir misiniz? Patronum görmek istiyor." },
    { s: "Bahnmitarbeiterin", g: "f", t: "Gern, hier ist sie. Gute Fahrt!", n: "Memnuniyetle, işte. İyi yolculuklar!" }
  ],
  questions: [
    { id: "de-a2-d06.1", t: "mc", q: "Emre'nin treni kaç dakika rötarlı?", o: ["Yirmi dakika", "Yirmi beş dakika", "Otuz dakika"], a: 1,
      why: { 0: "Yirmi dakika, biletin başka trenlerde geçerli olduğu sınırdır („ab zwanzig Minuten“), trenin gerçek rötarı değil.", 2: "Metinde otuz dakika geçmiyor; „dreißig“ sadece 14.30'daki kalkış saatinde var." },
      e: "Çalışan: „Ihr Zug fährt mit fünfundzwanzig Minuten Verspätung ab.“ Yani 25 dakika. „ab zwanzig Minuten“ ise bilet kuralıdır." },
    { id: "de-a2-d06.2", t: "gap", q: "Der Zug fährt nicht von Gleis fünf, ___ von Gleis neun.", a: ["sondern"],
      wrong: { "aber": "„aber“ karşıtlık bildirir ama olumsuzdan sonra düzeltme yapmaz. „nicht A, sondern B“ kalıbı „A değil, B“ demektir.", "denn": "„denn“ sebep bildirir (çünkü). Burada sebep değil, düzeltme var." },
      e: "„nicht … , sondern …“ = …değil, … . Olumsuz bir ifadeyi düzeltirken „sondern“ kullanılır; Türkçesi „-değil, -dir“ yapısına yakındır." },
    { id: "de-a2-d06.3", t: "match", q: "Almanca cümleleri Türkçe karşılıklarıyla eşleştir.",
      p: [["Der Zug hat Verspätung.", "Tren rötarlı."], ["Ihre Fahrkarte gilt auch für andere Züge.", "Biletiniz başka trenler için de geçerli."], ["Sie erreichen Gleis neun über die Unterführung.", "Dokuzuncu perona alt geçitten ulaşırsınız."], ["Ich brauche eine Bestätigung.", "Bir belgeye ihtiyacım var."]],
      e: "„die Verspätung“ = rötar, „die Fahrkarte“ = bilet, „gelten“ = geçerli olmak, „die Unterführung“ = alt geçit, „die Bestätigung“ = onay belgesi." },
    { id: "de-a2-d06.4", t: "order", q: "Cümleyi „Darf“ ile başlayarak sırala.", w: ["Darf", "ich", "wegen", "der", "Verspätung", "einen", "anderen", "Zug", "nehmen?"], a: ["Darf ich wegen der Verspätung einen anderen Zug nehmen?", "Darf ich einen anderen Zug wegen der Verspätung nehmen?"],
      e: "Evet/hayır sorusunda fiil başta gelir (Darf), sonra özne (ich). „nehmen“ mastar olarak en sonda durur. „wegen der Verspätung“ cümlenin ortasında yer alır." }
  ]
});

K.addDialog('de-a2-d07', {
  level: 'A2', scene: 'laden', title: 'Die Jacke ist kaputt', sub: 'Mağazada kusurlu ürünü değiştirmek (fişle)',
  role: 'Müşteri (Defne Yıldız)', roleG: 'f',
  lines: [
    { s: "Herr Wolf", g: "m", t: "Guten Tag, kann ich Ihnen helfen?", n: "İyi günler, size yardımcı olabilir miyim?" },
    { me: true, id: "de-a2-d07.c1",
      o: ["Guten Tag. Ich habe diese Jacke vor drei Tagen gekauft, aber der Reißverschluss ist kaputt.", "Guten Tag. Ich habe diese Jacke vor drei Tagen kaufen, aber der Reißverschluss ist kaputt.", "Guten Tag. Ich habe diese Jacke seit drei Tagen gekauft, aber der Reißverschluss ist kaputt."], a: 0,
      why: { 1: "Perfekt'te „haben“ + Partizip II gerekir: „gekauft“. „kaufen“ mastardır; Perfekt'te yeri yoktur.", 2: "„seit“ hâlâ süren bir durumu anlatır (üç gündür). Geçmişte tek seferlik alışveriş için „vor drei Tagen“ (üç gün önce) kullanılır." },
      e: "„vor drei Tagen“ = üç gün önce (vor + Dativ). Perfekt: „Ich habe … gekauft“. „der Reißverschluss“ = fermuar; „kaputt“ = bozuk.", n: "İyi günler. Bu ceketi üç gün önce aldım ama fermuarı bozuk." },
    { s: "Herr Wolf", g: "m", t: "Oh, das tut mir leid. Haben Sie den Kassenbon dabei?", n: "Kusura bakmayın. Yanınızda kasa fişi var mı?" },
    { me: true, id: "de-a2-d07.c2",
      o: ["Ja, hier ist er. Ich habe ihn aufgehoben, weil man ihn bei einer Reklamation braucht.", "Ja, hier ist sie. Ich habe sie aufgehoben, weil man sie bei einer Reklamation braucht.", "Ja, hier ist er. Ich habe ihn aufgehoben, weil man braucht ihn bei einer Reklamation."], a: 0,
      why: { 1: "„der Kassenbon“ eril olduğu için Nominativ'de „er“, Akkusativ'de „ihn“ gelir. „sie“ dişil isimler (die Quittung) içindir; Türkçede „o“ tek olduğu için bu hata sık yapılır.", 2: "„weil“ yan cümle başlatır, çekimli fiil sona gider: „weil man ihn … braucht“. „weil man braucht ihn“ ana cümle sırasıdır ve yanlıştır." },
      e: "„der Kassenbon → er / ihn“. „aufheben“ (saklamak) ayrılabilen fiildir; Perfekt: „aufgehoben“. „weil“ → fiil sonda.", n: "Evet, işte. Sakladım, çünkü değişim/iade için fiş gerekiyor." },
    { s: "Herr Wolf", g: "m", t: "Danke. Das ist wirklich ein Defekt. Möchten Sie die Jacke umtauschen oder lieber Ihr Geld zurückbekommen?", n: "Teşekkürler. Gerçekten bir kusur var. Ceketi değiştirmek mi istersiniz, yoksa paranızı geri mi almak?" },
    { me: true, id: "de-a2-d07.c3",
      o: ["Ich möchte sie umtauschen. Haben Sie dieselbe Jacke noch in Größe M?", "Ich möchte es umtauschen. Haben Sie dieselbe Jacke noch in Größe M?", "Ich möchte sie tauschen um. Haben Sie dieselbe Jacke noch in Größe M?"], a: 0,
      why: { 1: "„die Jacke“ dişildir, bu yüzden „sie“ gerekir. „es“ yalnızca nötr isimler (das Hemd gibi) için kullanılır.", 2: "Modal fiille (möchte) ayrılabilen fiil mastar halinde ayrılmaz: „umtauschen“ bir bütün olarak sona gider. „tauschen um“ yanlıştır." },
      e: "„die Jacke → sie“. „umtauschen“ (değiştirmek): „Ich möchte sie umtauschen.“ Modal fiille mastar birleşik kalır; ayrılma sadece düz cümlede olur: „Ich tausche sie um.“", n: "Değiştirmek istiyorum. Aynı ceketin M bedeni hâlâ var mı?" },
    { s: "Herr Wolf", g: "m", t: "Moment, ich schaue nach. Ja, wir haben noch eine in Größe M. Soll ich sie holen?", n: "Bir dakika, bakıyorum. Evet, M bedende hâlâ bir tane var. Getireyim mi?" },
    { me: true, id: "de-a2-d07.c4",
      o: ["Ja, bitte. Aber ich probiere sie vorher an. Wo ist die Umkleidekabine?", "Ja, bitte. Aber ich anprobiere sie vorher. Wo ist die Umkleidekabine?", "Ja, bitte. Aber ich probiere sie vorher an. Wo ist der Umkleidekabine?"], a: 0,
      why: { 1: "„anprobieren“ ayrılabilen bir fiildir. Düz cümlede ön ek sona gider: „ich probiere sie an“. „ich anprobiere“ yanlıştır.", 2: "Bileşik isimlerde artikeli son kelime belirler: die Kabine → die Umkleidekabine." },
      e: "„anprobieren“ = denemek (giysi): „Ich probiere die Jacke an.“ „die Umkleidekabine“ = soyunma kabini. „Wo ist …?“ ile yer sorulur.", n: "Evet, lütfen. Ama önce deneyeceğim. Deneme kabini nerede?" },
    { s: "Herr Wolf", g: "m", t: "Dort hinten links. Und keine Sorge: Der Umtausch kostet nichts. Den neuen Kassenbon bekommen Sie an der Kasse.", n: "Şurada arkada solda. Endişelenmeyin: Değişim ücretsiz. Yeni fişi kasadan alırsınız." }
  ],
  questions: [
    { id: "de-a2-d07.1", t: "mc", q: "Defne'nin ceketinde ne bozuk?", o: ["Fermuar", "Cep", "Düğme"], a: 0,
      why: { 1: "Cepten söz edilmiyor; Defne „der Reißverschluss ist kaputt“ diyor.", 2: "Düğmeden söz edilmiyor; bozuk olan fermuardır („Reißverschluss“)." },
      e: "Defne: „Der Reißverschluss ist kaputt.“ „der Reißverschluss“ = fermuar (cep: die Tasche, düğme: der Knopf)." },
    { id: "de-a2-d07.2", t: "gap", q: "Ich habe die Jacke vor drei Tagen ___.", a: ["gekauft"],
      wrong: { "kaufen": "Perfekt'te mastar kullanılmaz; „haben“ + Partizip II gerekir: gekauft.", "gekaufen": "„kaufen“ düzenli (zayıf) bir fiildir: ge- + kauf + -t = gekauft. „-en“ ile biten Partizip düzensiz fiillerde olur." },
      e: "„kaufen“ → „gekauft“ (düzenli fiil: ge + gövde + t). Perfekt: Ich habe die Jacke gekauft." },
    { id: "de-a2-d07.3", t: "match", q: "Almanca cümleleri Türkçe karşılıklarıyla eşleştir.",
      p: [["Haben Sie den Kassenbon dabei?", "Yanınızda fiş var mı?"], ["Ich möchte die Jacke umtauschen.", "Ceketi değiştirmek istiyorum."], ["Der Umtausch kostet nichts.", "Değişim ücretsiz."], ["Der Reißverschluss ist kaputt.", "Fermuar bozuk."]],
      e: "„der Kassenbon“ = kasa fişi, „umtauschen“ = değiştirmek, „kosten“ = ücreti olmak, „kaputt“ = bozuk." },
    { id: "de-a2-d07.4", t: "order", q: "Cümleyi „Ich“ ile başlayarak sırala.", w: ["Ich", "habe", "die", "Jacke", "vor", "drei", "Tagen", "gekauft."], a: ["Ich habe die Jacke vor drei Tagen gekauft.", "Ich habe vor drei Tagen die Jacke gekauft."],
      e: "Perfekt'te çekimli yardımcı fiil (habe) ikinci sırada, Partizip II (gekauft) en sonda durur. Zaman ifadesi „vor drei Tagen“ nesneden önce de sonra da gelebilir." }
  ]
});

K.addDialog('de-a2-d08', {
  level: 'A2', scene: 'post', title: 'Abholschein und Paket', sub: 'Postanede paket almak ve Türkiye\'ye göndermek',
  role: 'Müşteri (Kemal Arslan)', roleG: 'm',
  lines: [
    { s: "Postmitarbeiterin", g: "f", t: "Guten Tag, was kann ich für Sie tun?", n: "İyi günler, sizin için ne yapabilirim?" },
    { me: true, id: "de-a2-d08.c1",
      o: ["Guten Tag. Ich habe einen Abholschein im Briefkasten gefunden. Ich möchte mein Paket abholen.", "Guten Tag. Ich habe einen Abholschein im Briefkasten gefunden. Ich möchte mein Paket abholt.", "Guten Tag. Ich habe einen Abholschein in den Briefkasten gefunden. Ich möchte mein Paket abholen."], a: 0,
      why: { 1: "„möchte“ gibi modal fiilden sonra asıl fiil mastar olur: „abholen“. „abholt“ çekimli bir şekildir (yan cümlede: …, dass er es abholt). Modal fiilden sonra mastar gerekir: abholen.", 2: "„Wo?“ (nerede?) sorusunda „in“ Dativ alır: „im Briefkasten“ (in dem). „in den“ Akkusativ'dir ve hareketi (nereye?) anlatır. Türkçede „-de“ ile „-e“ ayrımını burada hatırla." },
      e: "Yer sorusu (Wo?) → Dativ: „im Briefkasten gefunden“. „abholen“ = gidip almak. Modal fiille mastar sonda: „Ich möchte mein Paket abholen.“", n: "İyi günler. Posta kutusunda bir teslim alma bildirimi buldum. Paketimi almak istiyorum." },
    { s: "Postmitarbeiterin", g: "f", t: "Gern. Bitte zeigen Sie mir den Abholschein und Ihren Ausweis.", n: "Tabii. Lütfen teslim alma bildirimini ve kimliğinizi gösterin." },
    { me: true, id: "de-a2-d08.c2",
      o: ["Hier ist der Abholschein, und hier ist mein Ausweis.", "Hier ist der Abholschein, und hier ist meine Ausweis.", "Hier ist den Abholschein, und hier ist mein Ausweis."], a: 0,
      why: { 1: "„der Ausweis“ eriltir; sahiplik eki „mein“ olur. „meine“ dişil isimler içindir (meine Karte). İyelik sözcüğü (Possessivartikel) ismin cinsiyetine göre değişir.", 2: "„sein“ fiilinden sonra Nominativ gelir: „hier ist der Abholschein“. „den“ Akkusativ'dir; „zeigen“ cümlesindeki Akkusativ'le karıştırılmış." },
      e: "„sein“ (ist) + Nominativ: der Abholschein, mein Ausweis. Akkusativ ise eylemden gelen nesnede olur: „Zeigen Sie mir den Abholschein.“ „der Ausweis“ = kimlik.", n: "İşte teslim alma bildirimi, işte kimliğim." },
    { s: "Postmitarbeiterin", g: "f", t: "Danke. Einen Moment, ich hole Ihr Paket. So, bitte unterschreiben Sie hier. Füllen Sie bitte noch die Zollinhaltserklärung aus. Möchten Sie noch etwas aufgeben?", n: "Teşekkürler. Bir dakika, paketinizi getiriyorum. Şimdi lütfen buraya imzalayın. Gümrük içerik beyanını da doldurun lütfen. Başka bir şey göndermek ister misiniz?" },
    { me: true, id: "de-a2-d08.c3",
      o: ["Ja, ich möchte ein Paket in die Türkei schicken. Wie lange dauert das, und was kostet es?", "Ja, ich möchte ein Paket an die Türkei schicken. Wie lange dauert das, und was kostet es?", "Ja, ich möchte ein Paket in der Türkei schicken. Wie lange dauert das, und was kostet es?"], a: 0,
      why: { 1: "„an die Türkei“ ülkeyi alıcı gibi gösterir. Hedef ülke için „in die Türkei“ (Akkusativ) denir; „nach“ yalnızca artikelsiz ülkelerde kullanılır (nach Frankreich).", 2: "„schicken“ hareket içerir (nereye?), bu yüzden „in“ Akkusativ ister: „in die Türkei“. „in der Türkei“ (Dativ) bulunulan yeri anlatır." },
      e: "„die Türkei“ artikelli bir ülke adıdır: nereye? → „in die Türkei“ (Akkusativ). Artikelsiz ülkelerde „nach“ kullanılır: nach Deutschland. „aufgeben“ = (postaya) vermek, göndermek.", n: "Evet, Türkiye'ye bir paket göndermek istiyorum. Ne kadar sürüyor ve ne kadar tutuyor?" },
    { s: "Postmitarbeiterin", g: "f", t: "Legen Sie das Paket bitte auf die Waage. Es wiegt vier Kilo. Mit dem Standardversand dauert es etwa eine Woche und kostet neununddreißig Euro. Der Expressversand dauert nur drei Tage, kostet aber neunundsechzig Euro.", n: "Lütfen paketi teraziye koyun. Dört kilo geliyor. Standart gönderimle yaklaşık bir hafta sürer ve otuz dokuz euro tutar. Ekspres gönderim sadece üç gün sürer ama altmış dokuz euro tutar." },
    { me: true, id: "de-a2-d08.c4",
      o: ["Der Expressversand ist mir zu teuer. Ich nehme den normalen Versand. Kann ich bar zahlen? Meine neue Bankkarte kommt erst nächste Woche.", "Der Expressversand ist mich zu teuer. Ich nehme den normalen Versand. Kann ich bar zahlen? Meine neue Bankkarte kommt erst nächste Woche.", "Der Expressversand ist mir zu teuer. Ich nehme der normale Versand. Kann ich bar zahlen? Meine neue Bankkarte kommt erst nächste Woche."], a: 0,
      why: { 1: "„zu teuer sein“ ile kişi Dativ'de söylenir: „mir zu teuer“ = bana çok pahalı. „mich“ Akkusativ'dir.", 2: "„nehmen“ Akkusativ ister: „den normalen Versand“ (der Versand eril). „der normale“ Nominativ'dir ve burada yanlış." },
      e: "„Das ist mir zu teuer.“ (Dativ). „Ich nehme den normalen Versand.“ (Akkusativ, eril: der → den, sıfat sonu -en). „bar zahlen“ = nakit ödemek; „die Bankkarte“ = banka kartı.", n: "Ekspres gönderim bana çok pahalı. Normal gönderimi seçiyorum. Nakit ödeyebilir miyim? Yeni banka kartım ancak gelecek hafta gelecek." },
    { s: "Postmitarbeiterin", g: "f", t: "Natürlich, bar geht auch. Das macht neununddreißig Euro. Hier ist Ihre Quittung. Das Paket kommt in etwa einer Woche an. Schönen Tag noch!", n: "Tabii, nakit de olur. Toplam otuz dokuz euro. İşte makbuzunuz. Paket yaklaşık bir hafta içinde varır. İyi günler!" }
  ],
  questions: [
    { id: "de-a2-d08.1", t: "mc", q: "Kemal paketini almak için neye ihtiyaç duyuyor?", o: ["Yalnızca teslim alma bildirimine", "Teslim alma bildirimine ve kimliğe", "Kasa fişine ve banka kartına"], a: 1,
      why: { 0: "Çalışan iki şey istiyor: „den Abholschein und Ihren Ausweis“. Yalnızca bildirim yetmez.", 2: "Kasa fişi ve banka kartı istenmiyor; Kemal zaten nakit ödeyecek." },
      e: "Çalışan: „Bitte zeigen Sie mir den Abholschein und Ihren Ausweis.“ Paketi teslim almak için bildirim ve kimlik gerekir." },
    { id: "de-a2-d08.2", t: "gap", q: "Kemal schickt das Paket in die ___.", a: ["Türkei"],
      wrong: { "Türkiye": "„Türkiye“ Türkçe yazımdır. Almancada ülkenin adı „die Türkei“.", "türkei": "Almancada özel adlar ve isimler büyük harfle başlar: Türkei." },
      e: "„die Türkei“ dişildir ve artikelle kullanılır: „in die Türkei“ (nereye? → Akkusativ). Yazımda „ü“ ve „ei“ dikkat: Tür-kei." },
    { id: "de-a2-d08.3", t: "match", q: "Almanca cümleleri Türkçe karşılıklarıyla eşleştir.",
      p: [["Ich habe einen Abholschein bekommen.", "Bir teslim alma bildirimi aldım."], ["Bitte unterschreiben Sie hier.", "Lütfen buraya imzalayın."], ["Ich zahle bar.", "Nakit ödüyorum."], ["Der Versand dauert eine Woche.", "Gönderim bir hafta sürüyor."]],
      e: "„der Abholschein“ = teslim alma bildirimi, „unterschreiben“ = imzalamak, „bar zahlen“ = nakit ödemek, „der Versand“ = gönderim." },
    { id: "de-a2-d08.4", t: "order", q: "Cümleyi „Ich“ ile başlayarak sırala.", w: ["Ich", "möchte", "heute", "mein", "Paket", "abholen."], a: ["Ich möchte heute mein Paket abholen.", "Ich möchte mein Paket heute abholen."],
      e: "Modal fiil (möchte) ikinci sırada, asıl fiil mastar (abholen) en sonda. „heute“ zaman bilgisi olduğu için nesneden önce de sonra da gelebilir." }
  ]
});

K.addDialog('de-a2-d09', {
  level: 'A2', scene: 'fest', title: 'Einladung zum Geburtstag', sub: 'Doğum günü daveti: kabul etmek, ne getireceğini sormak (birbirinize „sen“ diye hitap ediyorsunuz)',
  role: 'Konuk (Burak Şahin)', roleG: 'm',
  lines: [
    { s: "Anna", g: "f", t: "Hallo Burak, ich werde am Samstag dreißig und feiere bei mir zu Hause. Hast du Lust zu kommen?", n: "Merhaba Burak, cumartesi günü otuz yaşına giriyorum ve evimde kutlayacağım. Gelmek ister misin?" },
    { me: true, id: "de-a2-d09.c1",
      o: ["Oh, das freut mich! Vielen Dank für die Einladung. Ich komme sehr gern.", "Oh, das freut mich! Vielen Dank für die Einladung. Ich kommen sehr gern.", "Oh, das freut mich! Vielen Dank für der Einladung. Ich komme sehr gern."], a: 0,
      why: { 1: "Özne „ich“ ile fiil „komme“ olur. „kommen“ mastardır ve çekimlenmemiştir. Türkçede kişi eki fiile eklenir; Almancada da fiili özneye göre çekimlemelisin.", 2: "„für“ her zaman Akkusativ ister. „die Einladung“ dişildir; „der“ Dativ/Genitiv şeklidir ve burada yanlıştır." },
      e: "Daveti kabul ederken: „Vielen Dank für die Einladung. Ich komme gern.“ (für + Akkusativ, ich komme). „Das freut mich“ = sevindim.", n: "Ah, çok sevindim! Davet için çok teşekkürler. Çok memnuniyetle gelirim." },
    { s: "Anna", g: "f", t: "Super! Wir fangen um sieben an. Möchtest du etwas zu essen oder zu trinken mitbringen? Das ist aber nicht nötig.", n: "Harika! Yedide başlıyoruz. Yiyecek ya da içecek bir şey getirmek ister misin? Ama şart değil." },
    { me: true, id: "de-a2-d09.c2",
      o: ["Gern. Ich backe einen Kuchen und bringe ihn mit. Ist das okay?", "Gern. Ich backe einen Kuchen und bringe mit ihn. Ist das okay?", "Gern. Ich backe einen Kuchen und bringe sie mit. Ist das okay?"], a: 0,
      why: { 1: "„mitbringen“ ayrılabilen fiildir; „mit“ en sona gider, ama nesne (ihn) ondan önce gelir: „bringe ihn mit“. „bringe mit ihn“ diye sıralamak hatalıdır.", 2: "„der Kuchen“ eril olduğu için Akkusativ'de „ihn“ gerekir. „sie“ dişil veya çoğul isimler içindir." },
      e: "„mitbringen“ (yanında getirmek): „Ich bringe einen Kuchen mit.“ Nesne zamiri araya girer: „Ich bringe ihn mit.“ „der Kuchen → ihn“.", n: "Memnuniyetle. Bir pasta yapıp getireceğim. Olur mu?" },
    { s: "Anna", g: "f", t: "Das wäre toll! Kannst du bis zum Ende bleiben? Wir feiern bestimmt lange.", n: "Harika olur! Sonuna kadar kalabilir misin? Eminim uzun kutlarız." },
    { me: true, id: "de-a2-d09.c3",
      o: ["Leider kann ich nicht bis zum Ende bleiben, weil ich am Sonntag früh aufstehen muss. Ich gehe gegen zehn Uhr.", "Leider kann ich nicht bis zum Ende bleiben, weil ich muss am Sonntag früh aufstehen. Ich gehe gegen zehn Uhr.", "Leider ich kann nicht bis zum Ende bleiben, weil ich am Sonntag früh aufstehen muss. Ich gehe gegen zehn Uhr."], a: 0,
      why: { 1: "„weil“ yan cümlede çekimli fiil sona gider: „weil ich … aufstehen muss“. „weil ich muss …“ ana cümle sırasıdır.", 2: "Cümle „Leider“ ile başladığında fiil ikinci sırada gelir: „Leider kann ich …“. „Leider ich kann“ hatalıdır; Türkçede fiil sonda olduğu için bu hata sık görülür." },
      e: "Nazik ret: „Leider kann ich nicht …, weil …“. İlk yerde „Leider“ varsa fiil hemen arkasından gelir; „weil“ yan cümlesinde fiil sondadır. „gegen zehn Uhr“ = saat on civarı.", n: "Maalesef sonuna kadar kalamam, çünkü pazar günü erken kalkmam gerekiyor. Saat on civarı çıkarım." },
    { s: "Anna", g: "f", t: "Schade, aber das ist kein Problem. Du kommst also um sieben und gehst gegen zehn. Hast du noch meine Adresse? Ich wohne in der Lindenstraße.", n: "Yazık, ama sorun değil. Yani yedide geliyorsun ve on civarı çıkıyorsun. Adresim hâlâ sende mi? Lindenstraße'de oturuyorum." },
    { me: true, id: "de-a2-d09.c4",
      o: ["Ja, ich habe sie noch. Ich freue mich schon auf Samstag. Bis dann!", "Ja, ich habe sie noch. Ich freue mich schon für Samstag. Bis dann!", "Ja, ich habe sie noch. Ich freue mir schon auf Samstag. Bis dann!"], a: 0,
      why: { 1: "Gelecekteki bir şeye sevinmek için „sich freuen auf + Akkusativ“ kullanılır. „für“ burada yanlıştır.", 2: "„sich freuen“ yansıtmalı fiildir ve zamiri Akkusativ'dir: „ich freue mich“. „mir“ (Dativ) yanlıştır." },
      e: "„sich freuen auf“ + Akkusativ = (gelecekteki) bir şeyi dört gözle beklemek: „Ich freue mich auf Samstag.“ „über“ ise yaşanan/olan bir şeye sevinmek içindir.", n: "Evet, hâlâ bende. Cumartesi için şimdiden çok heyecanlıyım. Görüşürüz!" },
    { s: "Anna", g: "f", t: "Prima, dann bis Samstag! Tschüss!", n: "Süper, o zaman cumartesiye kadar! Hoşça kal!" }
  ],
  questions: [
    { id: "de-a2-d09.1", t: "mc", q: "Anna'nın kutlaması saat kaçta başlıyor?", o: ["Altıda", "Yedide", "Onda"], a: 1,
      why: { 0: "Altı demiyor; Anna: „Wir fangen um sieben an.“", 2: "Saat on, Burak'ın evden ayrılmak istediği zamandır („gegen zehn“)." },
      e: "Anna: „Wir fangen um sieben an.“ „anfangen“ ayrılabilen fiildir: „Wir fangen … an“. Başlangıç saat yedi." },
    { id: "de-a2-d09.2", t: "gap", q: "Ich freue mich ___ Samstag.", a: ["auf"],
      wrong: { "für": "„für“ amaç veya fayda bildirir. Gelecekteki bir şeyi beklerken „sich freuen auf“ kullanılır.", "über": "„sich freuen über“ olmuş/bugün yaşanan bir şeye sevinmek içindir (örn. bir hediye). Cumartesi henüz gelmedi, bu yüzden „auf“." },
      e: "„sich freuen auf + Akkusativ“ = gelecekteki bir şeyi sabırsızlıkla beklemek. „sich freuen über + Akkusativ“ = şu an olan/olmuş bir şeye sevinmek." },
    { id: "de-a2-d09.3", t: "match", q: "Almanca cümleleri Türkçe karşılıklarıyla eşleştir.",
      p: [["Hast du Lust zu kommen?", "Gelmek ister misin?"], ["Vielen Dank für die Einladung.", "Davet için çok teşekkürler."], ["Ich kann leider nicht bis zum Ende bleiben.", "Maalesef sonuna kadar kalamam."], ["Ich bringe einen Kuchen mit.", "Bir pasta getiriyorum."]],
      e: "„Lust haben“ = canı istemek, „die Einladung“ = davet, „das Ende“ = son, „mitbringen“ = yanında getirmek." },
    { id: "de-a2-d09.4", t: "order", q: "Cümleyi „Leider“ ile başlayarak sırala.", w: ["Leider", "kann", "ich", "nicht", "bis", "zum", "Ende", "bleiben."], a: ["Leider kann ich nicht bis zum Ende bleiben."],
      e: "Cümle „Leider“ ile başlıyorsa fiil (kann) ikinci sıraya gelir, özne (ich) fiilden sonra durur. Mastar „bleiben“ en sonda yer alır." }
  ]
});

K.addDialog('de-a2-d10', {
  level: 'A2', scene: 'urlaub', title: 'Hotel buchen und Ausflug planen', sub: 'Telefonla otel odası ayırtmak ve gezi önerisi almak',
  role: 'Tatilci (Nilay Korkmaz)', roleG: 'f',
  lines: [
    { s: "Rezeption", g: "f", t: "Hotel Seeblick, guten Tag. Wie kann ich Ihnen helfen?", n: "Hotel Seeblick, iyi günler. Size nasıl yardımcı olabilirim?" },
    { me: true, id: "de-a2-d10.c1",
      o: ["Guten Tag. Ich möchte ein Doppelzimmer für drei Nächte buchen, vom zwölften bis zum fünfzehnten Juli.", "Guten Tag. Ich möchte ein Doppelzimmer für drei Nächte buchen, vom zwölf bis zum fünfzehn Juli.", "Guten Tag. Ich möchte ein Doppelzimmer für drei Nacht buchen, vom zwölften bis zum fünfzehnten Juli."], a: 0,
      why: { 1: "Tarihlerde sıra sayıları (Ordinalzahlen) kullanılır: „der zwölfte“, „vom zwölften“. „zwölf“ asıl sayıdır ve tarih için yanlıştır.", 2: "birden büyük sayılardan sonra isim çoğul olur: „die Nacht → die Nächte“. „drei Nacht“ yanlıştır. Türkçede sayıdan sonra isim tekil kalır, Almancada kalmaz." },
      e: "Tarih: „vom zwölften bis zum fünfzehnten Juli“ (vom/zum + Dativ, sıra sayısı + -en). „die Nacht, die Nächte“: sayıdan sonra çoğul.", n: "İyi günler. 12–15 Temmuz arası, üç gece için çift kişilik bir oda ayırtmak istiyorum." },
    { s: "Rezeption", g: "f", t: "Gern. In dieser Zeit haben wir noch zwei Zimmer frei: eins mit Seeblick für neunzig Euro pro Nacht und eins mit Blick auf die Stadt für siebzig Euro. Welches möchten Sie?", n: "Tabii. O tarihlerde iki odamız boş: biri göl manzaralı, gecesi doksan euro; diğeri şehir manzaralı, gecesi yetmiş euro. Hangisini istersiniz?" },
    { me: true, id: "de-a2-d10.c2",
      o: ["Ich nehme das Zimmer mit Seeblick. Ist das Frühstück im Preis inbegriffen?", "Ich nehme den Zimmer mit Seeblick. Ist das Frühstück im Preis inbegriffen?", "Ich nehme das Zimmer mit Seeblick, weil es ist schöner. Ist das Frühstück im Preis inbegriffen?"], a: 0,
      why: { 1: "„das Zimmer“ nötrdür (Almancada „oda“ der değil, das). Akkusativ'de nötr artikel değişmez: „das Zimmer“.", 2: "„weil“ yan cümlesinde fiil sona gider: „weil es schöner ist“. „weil es ist schöner“ yanlıştır." },
      e: "„das Zimmer“ nötr → Akkusativ'de de „das“. „im Preis inbegriffen“ = fiyata dahil. „weil es schöner ist“ yazsaydın fiil sonda olurdu.", n: "Göl manzaralı odayı alıyorum. Kahvaltı fiyata dahil mi?" },
    { s: "Rezeption", g: "f", t: "Ja, das Frühstück ist im Preis inbegriffen. Soll ich das Zimmer für Sie reservieren?", n: "Evet, kahvaltı fiyata dahil. Odayı sizin için ayırtayım mı?" },
    { me: true, id: "de-a2-d10.c3",
      o: ["Ja, bitte reservieren Sie es. Mein Name ist Korkmaz. Wir kommen am Freitag gegen fünf Uhr an.", "Ja, bitte reservieren Sie es. Mein Name ist Korkmaz. Wir ankommen am Freitag gegen fünf Uhr.", "Ja, bitte reservieren Sie ihn. Mein Name ist Korkmaz. Wir kommen am Freitag gegen fünf Uhr an."], a: 0,
      why: { 1: "„ankommen“ ayrılabilen fiildir: düz cümlede „wir kommen … an“. „wir ankommen“ yanlıştır.", 2: "„das Zimmer“ nötr olduğu için „es“ gerekir. „ihn“ eril isimler içindir (der Platz → ihn)." },
      e: "„ankommen“ (varmak): „Wir kommen am Freitag an.“ „das Zimmer → es“. „gegen fünf Uhr“ = saat beş civarı.", n: "Evet, lütfen ayırtın. Adım Korkmaz. Cuma günü saat beş civarı varıyoruz." },
    { s: "Rezeption", g: "f", t: "Gut, ich habe Sie eingetragen, Frau Korkmaz. Brauchen Sie sonst noch Informationen?", n: "Tamam, sizi kaydettim Bayan Korkmaz. Başka bilgiye ihtiyacınız var mı?" },
    { me: true, id: "de-a2-d10.c4",
      o: ["Ja. Wir möchten am Samstag einen Ausflug machen. Was können Sie uns empfehlen?", "Ja. Wir möchten am Samstag einen Ausflug machen. Was können Sie wir empfehlen?", "Ja. Wir möchten am Samstag ein Ausflug machen. Was können Sie uns empfehlen?"], a: 0,
      why: { 1: "„empfehlen“ ile kişi Dativ'de olur: „uns“ = bize. „wir“ Nominativ'dir ve burada yanlıştır.", 2: "„der Ausflug“ eril olduğu için Akkusativ'de „einen Ausflug“ gerekir. „ein“ Nominativ'dir." },
      e: "„einen Ausflug machen“ = gezi yapmak (der Ausflug → einen). „jemandem etwas empfehlen“: kişi Dativ (uns), şey Akkusativ.", n: "Evet. Cumartesi günü bir gezi yapmak istiyoruz. Bize ne önerebilirsiniz?" },
    { s: "Rezeption", g: "f", t: "Wenn das Wetter schön ist, können Sie mit dem Schiff über den See fahren. Es fährt um zehn Uhr am Hafen ab, und die Fahrt dauert zwei Stunden. Wenn es regnet, ist das Museum in der Stadt eine gute Idee. Wir freuen uns auf Sie!", n: "Hava güzelse gemiyle göl turu yapabilirsiniz. Gemi saat onda limandan kalkıyor ve yolculuk iki saat sürüyor. Yağmur yağarsa şehirdeki müze iyi bir fikir. Sizi bekliyoruz!" }
  ],
  questions: [
    { id: "de-a2-d10.1", t: "mc", q: "Nilay hangi odayı seçiyor?", o: ["Göl manzaralı oda", "Şehir manzaralı oda", "Tek kişilik oda"], a: 0,
      why: { 1: "Şehir manzaralı oda daha ucuz ama Nilay onu seçmiyor: „Ich nehme das Zimmer mit Seeblick.“", 2: "Nilay baştan bir çift kişilik oda („Doppelzimmer“) istiyor, tek kişilik değil." },
      e: "Nilay: „Ich nehme das Zimmer mit Seeblick.“ „der Seeblick“ = göl manzarası; „Doppelzimmer“ = çift kişilik oda." },
    { id: "de-a2-d10.2", t: "gap", q: "Die Fahrt mit dem Schiff dauert zwei ___.", a: ["Stunden"],
      wrong: { "Stunde": "„zwei“ ile birden çok olduğu için isim çoğul olur: die Stunde → die Stunden.", "stunden": "Almancada isimler büyük harfle yazılır: Stunden." },
      e: "„die Stunde, die Stunden“ (dişil isimlerde çoğul genelde -n/-en). İki saat: „zwei Stunden“. Türkçede sayıdan sonra çoğul eki gelmediği için bu hata sık yapılır." },
    { id: "de-a2-d10.3", t: "match", q: "Almanca cümleleri Türkçe karşılıklarıyla eşleştir.",
      p: [["Ich möchte ein Zimmer buchen.", "Bir oda ayırtmak istiyorum."], ["Das Frühstück ist im Preis inbegriffen.", "Kahvaltı fiyata dahil."], ["Wir kommen gegen fünf Uhr an.", "Saat beş civarı varıyoruz."], ["Was können Sie uns empfehlen?", "Bize ne önerebilirsiniz?"]],
      e: "„buchen“ = (yer) ayırtmak/rezervasyon yapmak, „inbegriffen“ = dahil, „ankommen“ = varmak, „empfehlen“ = önermek." },
    { id: "de-a2-d10.4", t: "order", q: "Cümleyi „Wir“ ile başlayarak sırala.", w: ["Wir", "möchten", "am", "Samstag", "einen", "Ausflug", "machen."], a: ["Wir möchten am Samstag einen Ausflug machen.", "Wir möchten einen Ausflug am Samstag machen."],
      e: "Modal fiil (möchten) ikinci sırada, asıl fiil mastar (machen) en sonda. Zaman bilgisi („am Samstag“) nesneden önce gelir; nesneden sonra da mümkündür ama daha az doğaldır." }
  ]
});

})(window.KOPRU);
