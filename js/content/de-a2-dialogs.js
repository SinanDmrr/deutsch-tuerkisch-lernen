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

})(window.KOPRU);
