/* Deutsch B1 – Rollenspiel-Dialoge für Türkischsprechende (Erklärungen, Übersetzungen und Fragen auf Türkisch)
 * Format wie js/content/de-a2-dialogs.js: Wahlzeilen (me:true) mit je 3 Optionen, danach Verständnisfragen.
 * IDs: Dialog de-b1-dNN, Wahlzeilen <id>.c1…, Fragen <id>.1… – NIE ändern oder wiederverwenden.
 * Szenarien: d01 Vorstellungsgespräch · d02 Konflikt im Team/Schichttausch · d03 Reklamation (Rechnung) ·
 *            d04 Vertrag kündigen · d05 Hausverwaltung/Nachbarschaft
 */
(function (K) {

K.addDialog('de-b1-d01', {
  level: 'B1', scene: 'arbeit', title: 'Vorstellungsgespräch im Lager', sub: 'Depo işi için iş görüşmesi',
  role: 'Başvuran (Deniz Arslan)', roleG: 'm',
  lines: [
    { s: "Frau Koch", g: "f", t: "Guten Tag, Herr Arslan. Schön, dass Sie gekommen sind. Erzählen Sie uns bitte etwas über sich und Ihre Erfahrung.", n: "İyi günler, Arslan Bey. Geldiğiniz için sevindim. Lütfen bize kendinizden ve tecrübenizden biraz bahsedin." },
    { me: true, id: "de-b1-d01.c1",
      o: ["Guten Tag, Frau Koch. Ich habe drei Jahre als Lagerarbeiter gearbeitet, obwohl ich keine Erfahrung habe.", "Guten Tag, Frau Koch. Ich habe drei Jahre als Lagerarbeiter gearbeitet und viel Erfahrung mit Kunden gesammelt. Deshalb bewerbe ich mich um die Stelle.", "Guten Tag, Frau Koch. Ich bewerbe mich um die Stelle, weil ich habe viel Erfahrung."], a: 1,
      why: { 0: "„obwohl“ karşıtlık bildirir: üç yıl çalışmış biri için „tecrübem yok“ demek çelişir. Burada sebep ya da sonuç gerekir.", 2: "„weil“ yan cümle açar, çekimli fiil sona gider: „weil ich viel Erfahrung habe“. Türkçedeki fiil sonda düzeni burada işine yarar." },
      e: "Görüşmede önce kısaca ne iş yaptığını, sonra neden başvurduğunu söyle. „Deshalb“ ana cümle açar: „Deshalb bewerbe ich mich“ (fiil hemen gelir).", n: "İyi günler, Koch Hanım. Üç yıl depoda çalıştım ve müşterilerle çok tecrübe edindim. Bu yüzden bu pozisyona başvuruyorum." },
    { s: "Frau Koch", g: "f", t: "Das klingt gut. Was sind Ihre Stärken, und woran möchten Sie noch arbeiten?", n: "Kulağa iyi geliyor. Güçlü yönleriniz neler ve neyi daha geliştirmek istiyorsunuz?" },
    { me: true, id: "de-b1-d01.c2",
      o: ["Ich habe keine Schwächen. Ich mache nie Fehler.", "Ich bin zuverlässig und flexibel. Meine Schwäche ist, dass ich manchmal zu lange arbeite, obwohl ich schon müde bin. Daran arbeite ich.", "Ich bin zuverlässig. Meine Schwäche ist, dass ich bin manchmal zu spät."], a: 1,
      why: { 0: "Görüşmede „hiç zayıf yönüm yok“ demek dürüst durmaz ve kendini tanımadığını gösterir. Bir zayıf yönü, onu nasıl geliştirdiğinle birlikte söylemek daha iyidir.", 2: "„dass“ yan cümlesinde çekimli fiil sona gider: „dass ich manchmal zu spät bin“." },
      e: "„obwohl ich schon müde bin“ karşıtlığı gösterir (yorgun, yine de çalışıyor). Zayıf yönü her zaman bir çözümle bitir: „Daran arbeite ich.“", n: "Güvenilirim ve esnekim. Zayıf yönüm bazen yorgun olmama rağmen çok uzun çalışmam. Bunun üzerinde çalışıyorum." },
    { s: "Herr Lenz", g: "m", t: "Wir suchen jemanden, der auch am Wochenende arbeiten kann. Wäre das für Sie ein Problem?", n: "Hafta sonu da çalışabilecek birini arıyoruz. Bu sizin için bir sorun olur mu?" },
    { me: true, id: "de-b1-d01.c3",
      o: ["Nein, kein Problem. Falls es nötig ist, kann ich auch am Samstag arbeiten. Ich brauche nur rechtzeitig den Dienstplan.", "Nein, kein Problem. Falls ist es nötig, ich kann auch am Samstag arbeiten.", "Das geht leider nicht. Am Wochenende habe ich keine Lust zu arbeiten."], a: 0,
      why: { 1: "„falls“ yan cümle açar: fiil sona gider („falls es nötig ist“). Ardından gelen ana cümlede de fiil hemen gelir: „kann ich auch …“.", 2: "Doğrudan „keine Lust“ demek işe başvururken tutumunu kötü gösterir. Mümkün değilse nedenini kibarca açıkla." },
      e: "Esnek olduğunu söylemek bir artıdır. „Falls es nötig ist“ ile şart koyarsın; „rechtzeitig“ ile bilgi istemen de makul durur.", n: "Hayır, sorun değil. Gerekirse cumartesi de çalışabilirim. Sadece çalışma/vardiya çizelgesini zamanında bilmem gerekir." },
    { s: "Herr Lenz", g: "m", t: "Gut. Sie würden zunächst drei Monate auf Probe arbeiten. Das Gehalt wird nach Tarif bezahlt. Haben Sie noch Fragen?", n: "İyi. Önce üç ay deneme olarak çalışırdınız. Maaş tarifeye göre ödenir. Başka sorunuz var mı?" },
    { s: "Frau Koch", g: "f", t: "Wir melden uns bis nächsten Freitag bei Ihnen. Vielen Dank für das Gespräch.", n: "Gelecek cumaya kadar size dönüş yapacağız. Görüşme için çok teşekkür ederiz." }
  ],
  questions: [
    { id: "de-b1-d01.1", t: "mc", q: "Deniz neden bu kadroya başvuruyor?", o: ["Depoda üç yıl çalıştığı ve müşterilerle tecrübesi olduğu için.", "Hiç tecrübesi olmadığı için.", "Hafta sonu çalışmak istemediği için."], a: 0,
      why: { 1: "Deniz üç yıl depoda çalıştığını söylüyor.", 2: "Tam tersi: gerekirse cumartesi de çalışabileceğini söylüyor." },
      e: "Deniz: „Ich habe drei Jahre als Lagerarbeiter gearbeitet … Deshalb bewerbe ich mich um die Stelle.“" },
    { id: "de-b1-d01.2", t: "gap", q: "Er arbeitet manchmal zu lange, ___ er schon müde ist.", a: ["obwohl"],
      wrong: { "weil": "Yorgun olmak uzun çalışmanın sebebi olmaz; karşıtlık için **obwohl**.", "falls": "Yorgunluk bir gerçek; olasılık değil." },
      e: "**obwohl** = -e rağmen: yorgun, yine de çalışıyor." },
    { id: "de-b1-d01.3", t: "mc", q: "Deneme süresi ve maaş hakkında ne söyleniyor?", o: ["Üç ay deneme, maaş tarifeye göre ödenir.", "Deneme yok, maaş pazarlıkla belirlenir.", "Altı ay deneme, maaşsız."], a: 0,
      why: { 1: "Herr Lenz deneme süresinden söz ediyor.", 2: "Maaşsız denmiyor; maaş tarifeye göre ödenir." },
      e: "„drei Monate auf Probe“, „Das Gehalt wird nach Tarif bezahlt“ (Passiv Präsens)." },
    { id: "de-b1-d01.4", t: "order", q: "Cümleyi „Falls“ ile başlayarak sırala.", w: ["Falls", "es", "nötig", "ist", "kann", "ich", "auch", "am Samstag", "arbeiten"], a: ["Falls es nötig ist kann ich auch am Samstag arbeiten"],
      e: "Yan cümlede fiil sona gider (*es nötig ist*); ardından ana cümle fiille başlar: *kann ich …*." }
  ]
});

K.addDialog('de-b1-d02', {
  level: 'B1', scene: 'arbeit', title: 'Streit um den Dienstplan', sub: 'Vardiya çizelgesi yüzünden anlaşmazlık',
  role: 'Çalışan (Elif Aksoy)', roleG: 'f',
  lines: [
    { s: "Tim", g: "m", t: "Elif, kann ich kurz mit dir sprechen? Im Dienstplan wurde ich am Samstag eingetragen, obwohl wir etwas anderes besprochen hatten.", n: "Elif, seninle kısaca konuşabilir miyim? Çizelgede cumartesiye beni yazmışlar, oysa başka türlü konuşmuştuk." },
    { me: true, id: "de-b1-d02.c1",
      o: ["Das ist dein Problem. Ich habe den Plan nicht geschrieben.", "Es tut mir leid, dass ich das falsch verstanden habe. Das war ein Missverständnis. Falls du möchtest, klären wir das sofort mit Frau Roth.", "Es tut mir leid, dass ich habe das falsch verstanden."], a: 1,
      why: { 0: "Suçu karşıdakine atmak anlaşmazlığı büyütür; kendi payını kabul edip çözüm önermek daha yapıcıdır.", 2: "„dass“ yan cümlesinde çekimli fiil sona gider: „dass ich das falsch verstanden habe“." },
      e: "Özür + yanlış anlaşılma + çözüm önerisi sırası anlaşmazlıkta işe yarar. „falls du möchtest“ karşındakine seçenek bırakır.", n: "Yanlış anladığım için üzgünüm. Bu bir yanlış anlaşılmaydı. İstersen bunu hemen Roth Hanım’la çözelim." },
    { s: "Tim", g: "m", t: "Ich habe am Samstag einen Termin, der schon lange geplant ist. Ich kann deshalb nicht arbeiten.", n: "Cumartesi uzun zamandır planlanmış bir randevum var. Bu yüzden çalışamam." },
    { me: true, id: "de-b1-d02.c2",
      o: ["Du musst arbeiten, da der Plan schon fertig ist.", "Ich verstehe dich. Wie wäre es, wenn ich am Samstag arbeite und du dafür am Sonntag?", "Ich verstehe dich. Wie wäre es, wenn ich arbeite am Samstag und du am Sonntag?"], a: 1,
      why: { 0: "Gramer olarak doğru ama „Du musst“ emir gibi durur ve çözüm aramaz. Anlaşmazlıkta karşı tarafın durumunu önce kabul et.", 2: "„wenn“ yan cümlesinde fiil sona gider: „wenn ich am Samstag arbeite“." },
      e: "„Wie wäre es, wenn …?“ kibar bir öneri kalıbıdır. Önce anladığını söyle, sonra çözüm sun.", n: "Seni anlıyorum. Ben cumartesi çalışsam, sen de karşılığında pazar çalışsan nasıl olur?" },
    { s: "Tim", g: "m", t: "Sonntag ist okay, aber nur, wenn die Chefin zustimmt. Wollen wir sie gemeinsam fragen?", n: "Pazar olur ama sadece patron onaylarsa. Ona birlikte soralım mı?" },
    { me: true, id: "de-b1-d02.c3",
      o: ["Nein, ich frage sie allein und sage, dass du schuld bist.", "Gern. Gehen wir zusammen, damit sie hört beide Seiten.", "Gern. Wir gehen zusammen zu ihr, damit sie beide Seiten hört. Danach wird der Plan geändert."], a: 2,
      why: { 0: "Suçlayıcı ve uzlaşmaya aykırı; amacın sorunu çözmek.", 1: "„damit“ yan cümle açar, fiil sona gider: „damit sie beide Seiten hört“." },
      e: "„damit“ amaç bildirir: birlikte gidersiniz, patron iki tarafı da dinlesin diye. „wird geändert“ Passiv Präsens: çizelge değiştirilecek.", n: "Memnuniyetle. Birlikte ona gidelim, iki tarafı da dinlesin diye. Sonra çizelge değiştirilir." },
    { s: "Frau Roth", g: "f", t: "Ihr habt das gut gelöst. Der Plan wird noch heute geändert. Danke, dass ihr nicht gestritten habt.", n: "Bunu güzel çözmüşsünüz. Çizelge bugün değiştirilecek. Kavga etmediğiniz için teşekkürler." }
  ],
  questions: [
    { id: "de-b1-d02.1", t: "mc", q: "Tim’in sorunu nedir?", o: ["Cumartesiye yazılmış, ama o gün randevusu var.", "Maaşı geç yatmış.", "Pazar günü çalışmak istemiyor."], a: 0,
      why: { 1: "Maaştan söz edilmiyor.", 2: "Tim pazarı kabul ediyor, sadece patronun onayı şart." },
      e: "Tim: „Im Dienstplan wurde ich am Samstag eingetragen … Ich habe am Samstag einen Termin.“" },
    { id: "de-b1-d02.2", t: "gap", q: "Der Plan ___ noch heute geändert. (değiştirilecek)", a: ["wird"],
      wrong: { "wurde": "*wurde* geçmiş zamandır; Frau Roth bugün değiştirileceğini söylüyor.", "ist": "*ist geändert* durumu bildirir; işlem için *wird*." },
      e: "Präsens Passiv: **wird + Partizip II**." },
    { id: "de-b1-d02.3", t: "mc", q: "Elif ve Tim’in uzlaşması nedir?", o: ["Elif cumartesi, Tim pazar çalışacak.", "Tim iki gün de çalışacak.", "Kimse çalışmayacak."], a: 0,
      why: { 1: "Tim yalnızca pazarı kabul ediyor, cumartesi için Elif çalışıyor.", 2: "Biri mutlaka çalışacak; Elif cumartesi, Tim pazar." },
      e: "Elif: „Wie wäre es, wenn ich am Samstag arbeite und du dafür am Sonntag?“ Tim: „Sonntag ist okay …“" },
    { id: "de-b1-d02.4", t: "order", q: "Cümleyi „Wie“ ile başlayarak sırala.", w: ["Wie", "wäre", "es", "wenn", "ich", "am Samstag", "arbeite"], a: ["Wie wäre es wenn ich am Samstag arbeite"],
      e: "„wenn“ yan cümlesinde fiil sona gider: *wenn ich am Samstag arbeite*." }
  ]
});

K.addDialog('de-b1-d03', {
  level: 'B1', scene: 'laden', title: 'Falscher Betrag auf der Rechnung', sub: 'Faturada yanlış tutar',
  role: 'Müşteri (Selin Aydın)', roleG: 'f',
  lines: [
    { s: "Kundendienst", g: "m", t: "Kundendienst Mobilfunk Nordstern, guten Tag. Wie kann ich Ihnen helfen?", n: "Nordstern Mobil müşteri hizmetleri, iyi günler. Size nasıl yardımcı olabilirim?" },
    { me: true, id: "de-b1-d03.c1",
      o: ["Guten Tag, hier ist Selin Aydın. Ich möchte mich beschweren: Auf meiner Rechnung steht ein falscher Betrag, obwohl ich den günstigen Tarif gebucht habe.", "Guten Tag. Ihre Rechnung ist falsch. Sie müssen das sofort ändern!", "Guten Tag. Auf meiner Rechnung steht falscher Betrag, weil ich habe den günstigen Tarif gebucht."], a: 0,
      why: { 1: "Doğru olsa da emir kipi ve suçlayıcı dil çözümü zorlaştırır. Önce kim olduğunu ve sorunu sakin anlat.", 2: "„weil“ yan cümlesinde fiil sona gider: „weil ich den günstigen Tarif gebucht habe“. Ayrıca „einen falschen Betrag“ olmalı (Akkusativ, eril)." },
      e: "Telefonda şikâyet: adını söyle, sorunu tek cümlede özetle. „obwohl ich den günstigen Tarif gebucht habe“ beklenenin tersini gösterir.", n: "İyi günler, ben Selin Aydın. Şikâyette bulunmak istiyorum: Uygun tarifeyi seçmeme rağmen faturamda yanlış bir tutar yazıyor." },
    { s: "Kundendienst", g: "m", t: "Einen Moment, ich schaue nach. Wie viel wurde Ihnen berechnet?", n: "Bir dakika, bakıyorum. Size ne kadar yansıtıldı?" },
    { me: true, id: "de-b1-d03.c2",
      o: ["Ich habe vierzig Euro berechnet, aber der Tarif kostet nur zwanzig Euro.", "Es ist zu viel. Machen Sie es richtig.", "Mir wurden vierzig Euro berechnet, aber der Tarif kostet nur zwanzig Euro. Falls es dafür einen Grund gibt, möchte ich ihn wissen."], a: 2,
      why: { 0: "Aktif cümlede „Ich habe … berechnet“ senin fatura kestiğini söyler. Fatura sana yansıtıldığı için Passiv gerekir: „Mir wurden … berechnet“.", 1: "Rakam vermediğin için çalışan sorunu bulamaz. Somut bilgi (tutar) vermek gerekir." },
      e: "„Mir wurden vierzig Euro berechnet“: Passiv Präteritum; yapan kişi (şirket) belirtilmiyor. „Falls es dafür einen Grund gibt“ saldırgan olmadan açıklama ister.", n: "Bana kırk avro yansıtılmış, ama tarife sadece yirmi avro. Bunun bir nedeni varsa bilmek isterim." },
    { s: "Kundendienst", g: "m", t: "Ich sehe es: Es wurde eine Zusatzoption gebucht, die Sie nicht bestellt haben. Das tut mir leid. Der Betrag wird erstattet.", n: "Görüyorum: Sizin sipariş etmediğiniz bir ek seçenek eklenmiş. Üzgünüm. Tutar iade edilecek." },
    { me: true, id: "de-b1-d03.c3",
      o: ["Das reicht mir nicht. Ich kündige sofort.", "Danke. Schicken Sie mich die Bestätigung schriftlich.", "Vielen Dank. Bitte schicken Sie mir die Bestätigung schriftlich, damit ich sie für meine Unterlagen habe."], a: 2,
      why: { 0: "Çözüm sunulmuşken hemen feshe gitmek orantısız olur; önce yazılı onay iste.", 1: "„schicken“ Dativ ister: „schicken Sie mir“; „mich“ Akkusativ’dir. Ayrıca „Bitte“ eksik, ifade kuru." },
      e: "Sözlü söz yetmez; „schriftlich“ ile onay iste. „damit ich sie für meine Unterlagen habe“ amacı bildirir.", n: "Çok teşekkürler. Lütfen onayı yazılı olarak bana gönderin, belgelerimde dursun diye." },
    { s: "Kundendienst", g: "m", t: "Natürlich. Die Bestätigung wird heute noch per E-Mail verschickt. Gibt es noch etwas, wobei ich helfen kann?", n: "Tabii. Onay bugün e-postayla gönderilecek. Yardımcı olabileceğim başka bir şey var mı?" }
  ],
  questions: [
    { id: "de-b1-d03.1", t: "mc", q: "Selin ne için şikâyet ediyor?", o: ["Faturaya olması gerekenden fazla tutar yazılmış.", "Telefonu bozuk gelmiş.", "Tarifesi iptal edilmiş."], a: 0,
      why: { 1: "Telefondan söz edilmiyor.", 2: "İptalden söz edilmiyor." },
      e: "Selin: „Mir wurden vierzig Euro berechnet, aber der Tarif kostet nur zwanzig Euro.“" },
    { id: "de-b1-d03.2", t: "gap", q: "Der Betrag ___ erstattet. (iade edilecek)", a: ["wird"],
      wrong: { "wurde": "Henüz iade edilmedi; şimdi söz veriliyor: *wird*.", "ist": "*ist erstattet* durumu bildirir; işlem için *wird*." },
      e: "Präsens Passiv: **wird + Partizip II** = edilgen." },
    { id: "de-b1-d03.3", t: "mc", q: "Fazla tutarın nedeni nedir?", o: ["Sipariş edilmemiş bir ek seçenek eklenmiş.", "Selin faturayı geç ödemiş.", "Tarife zam görmüş."], a: 0,
      why: { 1: "Geç ödemeden söz edilmiyor.", 2: "Zam değil, ek seçenek var." },
      e: "„Es wurde eine Zusatzoption gebucht, die Sie nicht bestellt haben.“" },
    { id: "de-b1-d03.4", t: "order", q: "Cümleyi „Bitte“ ile başlayarak sırala.", w: ["Bitte", "schicken", "Sie", "mir", "die Bestätigung", "schriftlich"], a: ["Bitte schicken Sie mir die Bestätigung schriftlich"],
      e: "Rica: fiil 2. sırada (*schicken Sie*), kişi *mir* (Dativ), şey *die Bestätigung* (Akkusativ)." }
  ]
});

K.addDialog('de-b1-d04', {
  level: 'B1', scene: 'amt', title: 'Fitnessvertrag kündigen', sub: 'Spor salonu sözleşmesini feshetmek',
  role: 'Üye (Okan Polat)', roleG: 'm',
  lines: [
    { s: "Frau Schulte", g: "f", t: "Fit und Frisch, Schulte, guten Tag. Was kann ich für Sie tun?", n: "Fit und Frisch, Schulte, iyi günler. Sizin için ne yapabilirim?" },
    { me: true, id: "de-b1-d04.c1",
      o: ["Ich kündige. Fertig. Schicken Sie die Bestätigung.", "Guten Tag, hier ist Okan Polat. Ich möchte meinen Vertrag kündigen. Ich glaube, die Kündigungsfrist ist noch nicht vorbei.", "Guten Tag, ich will kündigen den Vertrag, weil ich habe keine Zeit."], a: 1,
      why: { 0: "Selam ve adın olmadan konuşmak sert durur; ayrıca hangi sözleşmeden söz ettiğin anlaşılmıyor.", 2: "„ich will“ fazla kesin; „möchte“ daha kibar. Ayrıca fiil yeri bozuk: „den Vertrag kündigen“ ve „weil ich keine Zeit habe“." },
      e: "Telefonda: selam, ad, istek. „Ich möchte … kündigen“ kibar ve açık. „Ich glaube“ ile emin olmadığın bilgiyi yumuşatırsın.", n: "İyi günler, ben Okan Polat. Sözleşmemi feshetmek istiyorum. Sanırım fesih süresi henüz dolmadı." },
    { s: "Frau Schulte", g: "f", t: "Die Frist endet leider heute. Die Kündigung muss schriftlich erfolgen. Haben Sie sie schon geschickt?", n: "Süre maalesef bugün bitiyor. Fesih yazılı yapılmalı. Gönderdiniz mi?" },
    { me: true, id: "de-b1-d04.c2",
      o: ["Noch nicht. Falls es genügt, kann ich sie sofort per E-Mail schicken. Wird eine E-Mail akzeptiert?", "Noch nicht. Die Frist ist nicht wichtig.", "Noch nicht. Ich schicke sie schnell, obwohl ist es heute die letzte Frist."], a: 0,
      why: { 1: "Fesih sürelerini önemsememek riskli; süre dolarsa sözleşme uzar.", 2: "„obwohl“ yan cümlesinde fiil sona gider: „obwohl es heute die letzte Frist ist“. Ayrıca burada karşıtlık yok; „weil“ ya da „da“ anlamlı olurdu." },
      e: "Soruyu doğrudan sor: „Wird eine E-Mail akzeptiert?“ (Passiv Präsens). „Falls es genügt“ ile koşulu belirtirsin.", n: "Henüz değil. Yeterliyse hemen e-postayla gönderebilirim. E-posta kabul ediliyor mu?" },
    { s: "Frau Schulte", g: "f", t: "Eine E-Mail wird akzeptiert, wenn sie bis Mitternacht eingeht. Wir bestätigen den Eingang dann schriftlich.", n: "E-posta, gece yarısına kadar ulaşırsa kabul edilir. Ardından ulaştığını yazılı olarak onaylarız." },
    { me: true, id: "de-b1-d04.c3",
      o: ["Gut. Ich schreibe jetzt, desto schneller ich schicke, je sicherer bin ich.", "Gut. Ich schreibe nichts. Die Bestätigung reicht mir nicht.", "Gut, ich schreibe gleich. Je schneller ich sie abschicke, desto sicherer bin ich. Ich bitte außerdem um eine Bestätigung."], a: 2,
      why: { 0: "„je … desto“ sırası ters: „je“ yan cümle başlatır (fiil sonda), „desto“ ana cümlede fiil hemen gelir.", 1: "Hiçbir şey yazmazsan fesih gerçekleşmez; süre dolar ve sözleşme uzar." },
      e: "„Je schneller ich sie abschicke, desto sicherer bin ich“: je-cümlesinde fiil sonda, desto-cümlesinde fiil hemen. „außerdem“ ile ek bir istek ekle.", n: "Güzel, hemen yazıyorum. Ne kadar hızlı gönderirsem o kadar güvende olurum. Ayrıca bir onay da rica ediyorum." },
    { s: "Frau Schulte", g: "f", t: "Gern. Sie bekommen die Bestätigung innerhalb von drei Tagen. Vielen Dank für Ihren Anruf.", n: "Memnuniyetle. Onayı üç gün içinde alacaksınız. Aradığınız için teşekkürler." }
  ],
  questions: [
    { id: "de-b1-d04.1", t: "mc", q: "Okan neden hemen harekete geçmeli?", o: ["Fesih süresi bugün bitiyor.", "Salon yarın kapanıyor.", "Üyeliği bedava uzatılıyor."], a: 0,
      why: { 1: "Kapanıştan söz edilmiyor.", 2: "Uzatma bedava değil; süre kaçırılırsa sözleşme uzar." },
      e: "Frau Schulte: „Die Frist endet leider heute.“" },
    { id: "de-b1-d04.2", t: "gap", q: "Die Kündigung muss ___ erfolgen. (yazılı olarak)", a: ["schriftlich"],
      wrong: { "mündlich": "*mündlich* sözlü demektir; Frau Schulte yazılı fesih istiyor.", "telefonisch": "Telefonla fesih kabul edilmiyor." },
      e: "*schriftlich* = yazılı (Textform: e-posta da olur)." },
    { id: "de-b1-d04.3", t: "mc", q: "E-posta ne zaman kabul edilir?", o: ["Gece yarısına kadar ulaşırsa.", "Sadece yarın sabah.", "Hiçbir zaman, sadece mektup geçerli."], a: 0,
      why: { 1: "Süre bugün bitiyor; yarın sabah geç kalır.", 2: "E-posta kabul ediliyor." },
      e: "„Eine E-Mail wird akzeptiert, wenn sie bis Mitternacht eingeht.“" },
    { id: "de-b1-d04.4", t: "order", q: "Cümleyi „Je“ ile başlayarak sırala.", w: ["Je", "schneller", "ich", "sie", "abschicke", "desto", "sicherer", "bin", "ich"], a: ["Je schneller ich sie abschicke desto sicherer bin ich"],
      e: "*Je schneller ich sie abschicke* (fiil sonda, *abschicke* tek parça), *desto sicherer bin ich* (fiil hemen)." }
  ]
});

K.addDialog('de-b1-d05', {
  level: 'B1', scene: 'wohnung', title: 'Der Aufzug ist defekt', sub: 'Asansör arızalı: bina yönetimiyle telefon',
  role: 'Kiracı (Leyla Öz)', roleG: 'f',
  lines: [
    { s: "Herr Berger", g: "m", t: "Hausverwaltung Berger, guten Tag.", n: "Berger bina yönetimi, iyi günler." },
    { me: true, id: "de-b1-d05.c1",
      o: ["Hallo, der Aufzug geht nicht. Machen Sie das!", "Guten Tag, hier ist Leyla Öz aus der Gartenstraße. Ich rufe an, weil der Aufzug seit drei Tagen defekt ist und im Haus auch ältere Menschen wohnen.", "Guten Tag, hier ist Leyla Öz. Ich rufe an, weil der Aufzug ist seit drei Tagen defekt."], a: 1,
      why: { 0: "Emir kipi ve selam eksikliği çözümü geciktirir. Kendini tanıt, sorunu açıkla.", 2: "„weil“ yan cümlesinde fiil sona gider: „weil der Aufzug seit drei Tagen defekt ist“." },
      e: "Bina yönetimine ilk telefonda: kim olduğunu, hangi adresten aradığını ve sorunun ne kadar süredir sürdüğünü söyle. „auch ältere Menschen“ sorunun ağırlığını gösterir.", n: "İyi günler, ben Gartenstraße’den Leyla Öz. Asansör üç gündür arızalı olduğu için arıyorum; üstelik binada yaşlı insanlar da oturuyor." },
    { s: "Herr Berger", g: "m", t: "Ja, wir wissen davon. Das Ersatzteil wurde bestellt, sodass der Aufzug ab nächster Woche wieder fährt. Haben Sie sonst noch ein Anliegen?", n: "Evet, haberimiz var. Yedek parça sipariş edildi, böylece asansör gelecek haftadan itibaren yeniden çalışacak. Başka bir isteğiniz var mı?" },
    { me: true, id: "de-b1-d05.c2",
      o: ["Ja. Alle Nachbarn sind unmöglich, tun Sie etwas.", "Ja. Im Treppenhaus stehen oft Schuhe, obwohl verbietet die Hausordnung das.", "Ja, im Treppenhaus stehen oft Schuhe und Fahrräder, obwohl die Hausordnung das verbietet. Könnten Sie die Nachbarn bitte daran erinnern?"], a: 2,
      why: { 0: "Tüm komşuları suçlamak abartılı; somut sorunu söylemek ve rica etmek daha etkilidir.", 1: "„obwohl“ yan cümlesinde fiil sona gider: „obwohl die Hausordnung das verbietet“." },
      e: "„Könnten Sie … erinnern?“ Konjunktiv II ile çok kibar rica. „obwohl“ beklenenin tersini gösterir (kural var, yine de ayakkabılar duruyor).", n: "Evet, merdiven boşluğunda bina kuralları yasaklamasına rağmen sık sık ayakkabılar ve bisikletler duruyor. Komşulara bunu hatırlatabilir misiniz?" },
    { s: "Herr Berger", g: "m", t: "Das ist ein Problem, ja. Die Hausordnung wird oft nicht eingehalten. Ich schreibe einen Aushang, falls Sie das möchten.", n: "Evet, bu bir sorun. Bina kurallarına sık sık uyulmuyor. İsterseniz bir duyuru yazarım." },
    { me: true, id: "de-b1-d05.c3",
      o: ["Ja, bitte, ein Aushang wäre gut. Falls es weitere Probleme gibt, melde ich mich noch einmal. Vielen Dank für Ihre Hilfe.", "Ein Aushang bringt nichts. Ich rede nicht mehr mit Ihnen.", "Ja, bitte. Falls es gibt weiter Probleme, ich melde mich wieder."], a: 0,
      why: { 1: "Öneriyi reddedip konuşmayı kesmek sorunu çözmez; olumlu bir adımı kabul etmek daha iyi.", 2: "„falls“ yan cümlesinde fiil sona gider: „falls es weitere Probleme gibt“; ana cümlede de fiil hemen gelir: „melde ich mich“." },
      e: "Öneriyi kabul et, teşekkür et ve sorun sürerse yine arayacağını söyle. „Falls …, melde ich mich“: yan cümle önce, ana cümlede fiil hemen.", n: "Evet, lütfen, bir duyuru iyi olur. Başka sorunlar olursa tekrar haber veririm. Yardımınız için çok teşekkürler." },
    { s: "Herr Berger", g: "m", t: "Gern. Der Aushang wird morgen aufgehängt. Danke für Ihren Anruf. Auf Wiederhören.", n: "Memnuniyetle. Duyuru yarın asılacak. Aradığınız için teşekkürler. Hoşça kalın." }
  ],
  questions: [
    { id: "de-b1-d05.1", t: "mc", q: "Asansör ne zaman yeniden çalışacak?", o: ["Gelecek haftadan itibaren.", "Yarın.", "Bu ay sonuna kadar belli değil."], a: 0,
      why: { 1: "Yedek parça henüz sipariş edildi; yarın değil.", 2: "Herr Berger gelecek haftadan söz ediyor." },
      e: "„Das Ersatzteil wurde bestellt, sodass der Aufzug ab nächster Woche wieder fährt.“" },
    { id: "de-b1-d05.2", t: "gap", q: "Im Treppenhaus stehen Schuhe, ___ die Hausordnung das verbietet. (yasaklamasına rağmen)", a: ["obwohl"],
      wrong: { "weil": "Kuralın yasaklaması ayakkabıların durmasının sebebi olmaz; karşıtlık için **obwohl**.", "falls": "Kural gerçek; olasılık değil." },
      e: "**obwohl** = -e rağmen." },
    { id: "de-b1-d05.3", t: "mc", q: "Herr Berger duyuru için ne söylüyor?", o: ["İsterse bir duyuru yazar, yarın asılır.", "Duyuru yazmak yasak.", "Duyuruyu Leyla yazmalı."], a: 0,
      why: { 1: "Yasak değil; Herr Berger teklif ediyor.", 2: "Duyuruyu Herr Berger yazıyor." },
      e: "„Ich schreibe einen Aushang, falls Sie das möchten.“ / „Der Aushang wird morgen aufgehängt.“" },
    { id: "de-b1-d05.4", t: "order", q: "Cümleyi „Falls“ ile başlayarak sırala.", w: ["Falls", "es", "weitere Probleme", "gibt", "melde", "ich", "mich", "noch einmal"], a: ["Falls es weitere Probleme gibt melde ich mich noch einmal"],
      e: "*falls* yan cümlesinde fiil sonda (*gibt*); ana cümlede fiil hemen: *melde ich mich*." }
  ]
});


K.addDialog('de-b1-d06', {
  level: 'B1', scene: 'arzt', title: 'Reha beantragen', sub: 'Rehabilitasyon için sağlık sigortasını aramak',
  role: 'Sigortalı (Meral Çelik)', roleG: 'f',
  lines: [
    { s: "Frau Winter", g: "f", t: "Krankenkasse Südwest, Winter, guten Tag. Wie kann ich Ihnen helfen?", n: "Südwest Sağlık Sigortası, Winter, iyi günler. Size nasıl yardımcı olabilirim?" },
    { me: true, id: "de-b1-d06.c1",
      o: ["Guten Tag. Ich will eine Reha. Schicken Sie mir die Papiere.", "Guten Tag, hier ist Meral Çelik. Mein Orthopäde hat mir eine Reha empfohlen. Ich hätte gern Informationen zum Antrag.", "Guten Tag, ich habe Reha empfohlen vom Arzt, und ich möchte Antrag stellen."], a: 1,
      why: { 0: "„ich will“ ve emir kipi sigorta çalışanına karşı fazla sert durur. Kibar istek için Konjunktiv II kullan: „Ich hätte gern …“.", 2: "Cümle bozuk: „Mein Arzt hat mir eine Reha empfohlen“ olmalı (özne, nesne ve Partizip II sonda). Ayrıca „einen Antrag stellen“ artikelli kalıptır." },
      e: "Telefonda önce adını söyle, sonra durumu kısaca anlat. „Ich hätte gern …“ kibar istektir (Konjunktiv II). „hat … empfohlen“ Perfekt: Partizip II sonda.", n: "İyi günler, ben Meral Çelik. Ortopedi doktorum bana bir rehabilitasyon önerdi. Başvuru hakkında bilgi almak isterdim." },
    { s: "Frau Winter", g: "f", t: "Gern. Den Antrag muss Ihr Arzt ausfüllen. Er wird dann an uns geschickt. Haben Sie schon eine ärztliche Verordnung?", n: "Memnuniyetle. Başvuruyu doktorunuzun doldurması gerekiyor. Sonra bize gönderilir. Doktorunuzun yazdığı bir rapor ya da öneri var mı?" },
    { me: true, id: "de-b1-d06.c2",
      o: ["Ja, die ärztliche Verordnung habe ich schon. Wenn alles klappt, könnte die Reha im Frühling beginnen. Wie lange dauert die Genehmigung?", "Ja. Wie lange dauert das? Ich habe keine Geduld.", "Ja, ich habe sie. Wenn ich hätte Glück, beginnt die Reha im Frühling."], a: 0,
      why: { 1: "Doğrudan ve sabırsız ton çalışanı rahatsız eder; ayrıca somut bilgi (doktor önerisinin olduğu) verilmiyor.", 2: "„wenn“ yan cümlesinde fiil sona gider: „wenn ich Glück hätte“; ana cümlede de Konjunktiv II gerekir: „würde … beginnen“." },
      e: "„Wenn alles klappt, könnte …“ = her şey yolunda giderse … -ebilir. Konjunktiv II temkinli beklentiyi anlatır.", n: "Evet, doktor önerim zaten var. Her şey yolunda giderse rehabilitasyon ilkbaharda başlayabilir. Onay ne kadar sürüyor?" },
    { s: "Frau Winter", g: "f", t: "Die Prüfung dauert meistens drei bis vier Wochen. Sie werden dann schriftlich informiert. Haben Sie noch Fragen?", n: "İnceleme çoğunlukla üç dört hafta sürüyor. Ardından size yazılı olarak bilgi verilir. Başka sorunuz var mı?" },
    { me: true, id: "de-b1-d06.c3",
      o: ["Nein, ich will nicht wissen, was das kostet.", "Ja, ich muss bezahlen Zuzahlung, wissen Sie das?", "Ja, noch eine Frage: Muss ich eine Zuzahlung bezahlen? Falls ja, möchte ich das gern vorher wissen."], a: 2,
      why: { 0: "Maliyeti bilmemek riskli; ek ödemeyi önceden öğrenmek mantıklıdır.", 1: "Cümle bozuk: „eine Zuzahlung“ (Akkusativ, dişil), fiil „bezahlen“ sonda ve soru olarak „Muss ich …?“ kurulur." },
      e: "„Falls ja, …“ = evetse, …. Kısa ve kibar bir ek soru. „Muss ich … bezahlen?“ modal fiil + Infinitiv.", n: "Evet, bir sorum daha var: Ek ödeme (Zuzahlung) yapmam gerekiyor mu? Gerekiyorsa bunu önceden bilmek isterim." },
    { s: "Frau Winter", g: "f", t: "Die Zuzahlung beträgt höchstens zehn Euro pro Tag, aber Sie können einen Antrag auf Befreiung stellen. Die Unterlagen werden Ihnen heute noch zugeschickt.", n: "Ek ödeme günde en fazla on avro; ama muafiyet için başvuru yapabilirsiniz. Belgeler bugün size gönderilecek." }
  ],
  questions: [
    { id: "de-b1-d06.1", t: "mc", q: "Meral neden arıyor?", o: ["Rehabilitasyon başvurusu hakkında bilgi almak için.", "Doktor randevusunu iptal etmek için.", "Faturaya itiraz etmek için."], a: 0,
      why: { 1: "Randevu iptalinden söz edilmiyor.", 2: "Fatura konusu yok." },
      e: "Meral: „Mein Orthopäde hat mir eine Reha empfohlen. Ich hätte gern Informationen zum Antrag.“" },
    { id: "de-b1-d06.2", t: "gap", q: "Der Antrag ___ an die Krankenkasse geschickt. (gönderilir)", a: ["wird"],
      wrong: { "wurde": "*wurde* geçmiş zaman; Frau Winter süreci anlatıyor: **wird**.", "ist": "*ist geschickt* durum bildirir; işlem için **wird**." },
      e: "Präsens Passiv: **wird + Partizip II**." },
    { id: "de-b1-d06.3", t: "mc", q: "Onay süresi ve ek ödeme hakkında ne söyleniyor?", o: ["İnceleme üç dört hafta sürer; ek ödeme günde en fazla on avrodur ama muafiyet için başvurulabilir.", "Onay bir gün sürer, her şey ücretsizdir.", "Onay altı ay sürer; ek ödeme yoktur."], a: 0,
      why: { 1: "Frau Winter üç dört haftadan ve ek ödemeden söz ediyor.", 2: "Süre altı ay değil; ek ödeme var." },
      e: "„Die Prüfung dauert meistens drei bis vier Wochen. Die Zuzahlung beträgt höchstens zehn Euro pro Tag …“" },
    { id: "de-b1-d06.4", t: "order", q: "Cümleyi „Ich“ ile başlayarak sırala.", w: ["Ich", "hätte", "gern", "Informationen", "zum Antrag"], a: ["Ich hätte gern Informationen zum Antrag"],
      e: "*hätte* 2. sırada; *gern* ve nesne arkadan gelir. Kibar istek: *Ich hätte gern …*." }
  ]
});

K.addDialog('de-b1-d07', {
  level: 'B1', scene: 'schule', title: 'Elterngespräch in der Schule', sub: 'Okulda veli görüşmesi',
  role: 'Veli (Murat Aksoy)', roleG: 'm',
  lines: [
    { s: "Frau Brandt", g: "f", t: "Guten Tag, Herr Aksoy. Danke, dass Sie gekommen sind. Wir möchten über die Leistungen Ihres Sohnes sprechen.", n: "İyi günler, Aksoy Bey. Geldiğiniz için teşekkürler. Oğlunuzun başarısı hakkında konuşmak istiyoruz." },
    { me: true, id: "de-b1-d07.c1",
      o: ["Guten Tag. Mein Sohn ist gut. Alle anderen Kinder sind das Problem.", "Guten Tag, Frau Brandt. Ich freue mich über das Gespräch, weil ich möchte alles wissen.", "Guten Tag, Frau Brandt. Ich freue mich über das Gespräch. Mein Sohn sagt, er habe Probleme in Deutsch. Wie sehen Sie das?"], a: 2,
      why: { 0: "Suçu başka çocuklara atmak görüşmeyi verimsiz yapar. Önce öğretmenin gözlemini dinlemek gerekir.", 1: "„weil“ yan cümlesinde fiil sona gider: „weil ich alles wissen möchte“. Ayrıca doğrudan soru sorarak başlamak daha yapıcıdır." },
      e: "„er habe Probleme“ Konjunktiv I: oğlunun sözünü aktarıyorsun. „Wie sehen Sie das?“ öğretmenin görüşünü sorar.", n: "İyi günler, Brandt Hanım. Bu görüşmeye sevindim. Oğlum Almancada sorun yaşadığını söylüyor. Siz bunu nasıl görüyorsunuz?" },
    { s: "Frau Brandt", g: "f", t: "In Mathe ist er sehr gut. In Deutsch hat er sich in den letzten Monaten verschlechtert. Er liest wenig, und seine Aufsätze sind kurz.", n: "Matematikte çok iyi. Almancada son aylarda geriledi. Az okuyor ve kompozisyonları kısa." },
    { me: true, id: "de-b1-d07.c2",
      o: ["Das ist Ihre Aufgabe als Lehrerin. Machen Sie etwas.", "Das überrascht mich. Wenn wir das früher gewusst hätten, hätten wir ihn schon eher unterstützt. Was können wir jetzt tun?", "Das überrascht mich. Wenn wir das früher gewusst hatten, wir hätten ihn schon eher unterstützt."], a: 1,
      why: { 0: "Suçlayıcı ve emir verici; birlikte çözüm aramak daha iyi sonuç verir.", 2: "Gerçek dışı geçmiş koşul: „wenn wir gewusst hätten“ (Partizip II + hätten, fiil sonda); ana cümle de fiille başlar: „hätten wir“." },
      e: "„Wenn wir das früher gewusst hätten, hätten wir ihn schon eher unterstützt“ = Bunu daha önce bilseydik ona çok daha erken destek olurduk. Konjunktiv II Vergangenheit.", n: "Bu beni şaşırttı. Bunu daha önce bilseydik ona çok daha erken destek olurduk. Şimdi ne yapabiliriz?" },
    { s: "Frau Brandt", g: "f", t: "Wir bieten Förderung in Deutsch an. Die Hausaufgabenhilfe findet zweimal pro Woche statt. Außerdem könnte er zu Hause jeden Tag zwanzig Minuten lesen.", n: "Almancada destek sunuyoruz. Ödev yardımı haftada iki kez yapılıyor. Ayrıca evde her gün yirmi dakika okuyabilir." },
    { me: true, id: "de-b1-d07.c3",
      o: ["Gut. Ich melde ihn nicht an, er braucht keine Hilfe.", "Gut. Ich möchte ihn anmelden, damit meine Frau liest sie auch.", "Das klingt gut. Ich würde ihn gern anmelden. Könnten Sie mir bitte die Unterlagen mitgeben, damit meine Frau sie auch lesen kann?"], a: 2,
      why: { 0: "Çelişkili: az önce yardımı kabul ediyor gibi başlayıp „yardıma ihtiyacı yok“ demek anlamsız.", 1: "„damit“ yan cümlesinde fiil sona gider: „damit meine Frau sie auch lesen kann“." },
      e: "„Ich würde ihn gern anmelden“ = Memnuniyetle kaydettirirdim (kibar ve temkinli). „damit“ amaç bildirir.", n: "Kulağa iyi geliyor. Onu memnuniyetle kaydettirirdim. Belgeleri bana verebilir misiniz, böylece eşim de okuyabilsin?" },
    { s: "Frau Brandt", g: "f", t: "Natürlich. In vier Wochen sprechen wir noch einmal. Dann sehen wir, ob die Förderung hilft.", n: "Tabii. Dört hafta sonra yeniden konuşuruz. O zaman desteğin işe yarayıp yaramadığını görürüz." }
  ],
  questions: [
    { id: "de-b1-d07.1", t: "mc", q: "Oğlunun hangi dersi kötüleşmiş?", o: ["Almanca", "Matematik", "Resim"], a: 0,
      why: { 1: "Matematikte çok iyi.", 2: "Resimden söz edilmiyor." },
      e: "„In Mathe ist er sehr gut. In Deutsch hat er sich … verschlechtert.“" },
    { id: "de-b1-d07.2", t: "gap", q: "Wenn wir das früher gewusst ___, hätten wir ihn schon eher unterstützt. (haben)", a: ["hätten"],
      wrong: { "haben": "*haben* gerçek durum bildirir; gerçek dışı geçmiş için **hätten**.", "wären": "*wissen* **haben** ile kurulur: *gewusst hätten*." },
      e: "Konjunktiv II Vergangenheit: *gewusst hätten … hätten unterstützt*." },
    { id: "de-b1-d07.3", t: "mc", q: "Okul hangi desteği sunuyor?", o: ["Almancada destek ve haftada iki kez ödev yardımı.", "Ücretli özel ders.", "Sadece evde okuma tavsiyesi."], a: 0,
      why: { 1: "Frau Brandt özel dersten değil, okulun kendi desteğinden söz ediyor.", 2: "Evde okuma ek bir öneri; okul ayrıca destek de sunuyor." },
      e: "„Wir bieten Förderung in Deutsch an. Die Hausaufgabenhilfe findet zweimal pro Woche statt.“" },
    { id: "de-b1-d07.4", t: "order", q: "Cümleyi „Könnten“ ile başlayarak sırala.", w: ["Könnten", "Sie", "mir", "bitte", "die Unterlagen", "mitgeben"], a: ["Könnten Sie mir bitte die Unterlagen mitgeben"],
      e: "*Könnten Sie …?* kibar rica; *mitgeben* ayrılabilen fiil (Infinitiv sonda)." }
  ]
});

K.addDialog('de-b1-d08', {
  level: 'B1', scene: 'wohnung', title: 'Mülltrennung im neuen Haus', sub: 'Yeni binada çöp ayrıştırma',
  role: 'Kiracı (Can Yurt)', roleG: 'm',
  lines: [
    { s: "Herr Fuchs", g: "m", t: "Guten Tag, Sie sind neu im Haus, oder? Ich bin Herr Fuchs. Ich wollte Ihnen kurz erklären, wie hier der Müll getrennt wird.", n: "İyi günler, evde yenisiniz, değil mi? Ben Fuchs. Burada çöpün nasıl ayrıştırıldığını kısaca anlatmak istedim." },
    { me: true, id: "de-b1-d08.c1",
      o: ["Ich brauche keine Erklärung, ich weiß alles.", "Guten Tag, Herr Fuchs, freut mich. Das wäre sehr nett. Ich bin noch unsicher, weil es bei uns früher weniger Tonnen gab.", "Guten Tag. Das ist nett, weil ich bin unsicher."], a: 1,
      why: { 0: "Yardım teklifini reddetmek komşuluk ilişkisine zarar verir; ayrıca yeni evde bilmediğin kurallar olabilir.", 2: "„weil“ yan cümlesinde fiil sona gider: „weil ich unsicher bin“." },
      e: "„Das wäre sehr nett“ Konjunktiv II ile kibar kabul. „weil es … gab“ yan cümle, fiil sonda.", n: "İyi günler, Fuchs Bey, memnun oldum. Çok nazik olurdu. Hâlâ emin değilim, çünkü eskiden bizde daha az kutu vardı." },
    { s: "Herr Fuchs", g: "m", t: "Die gelbe Tonne ist für Verpackungen, die blaue für Papier und die braune für Essensreste. Alles andere kommt in die schwarze Tonne. Flaschen mit Pfand gehören nicht in die Tonne. Glas wird im Container an der Straße gesammelt.", n: "Sarı kutu ambalajlar için, mavi kâğıt, kahverengi yemek artıkları içindir. Diğer her şey siyah kutuya gider. Depozitolu şişeler kutuya atılmaz. Cam sokaktaki konteynerde toplanır." },
    { me: true, id: "de-b1-d08.c2",
      o: ["Zu kompliziert. Ich werfe alles in die schwarze Tonne.", "Danke. Ist es richtig, dass Flaschen mit Pfand können in den Laden zurückbringen?", "Danke, das ist hilfreich. Ist es richtig, dass Flaschen mit Pfand in den Laden zurückgebracht werden können?"], a: 2,
      why: { 0: "Kuralları görmezden gelmek hem çevreye hem komşulara zarar verir.", 1: "„dass“ yan cümlesinde çekimli fiil sona gider ve Passiv gerekir: „zurückgebracht werden können“." },
      e: "Passiv + Modalverb: „zurückgebracht werden können“ = geri götürülebilir. „dass“ yan cümlesinde fiil grubu sonda.", n: "Teşekkürler, çok faydalı. Depozitolu şişelerin mağazaya geri götürülebileceği doğru mu?" },
    { s: "Herr Fuchs", g: "m", t: "Ja, genau. Das Pfand bekommt man dort zurück. Laut Hausordnung soll außerdem im Treppenhaus Energie gespart werden: Das Licht geht nach zwei Minuten aus.", n: "Evet, aynen. Depozito orada geri alınır. Ayrıca bina kurallarına göre merdiven boşluğunda enerji tasarrufu yapılmalı: Işık iki dakika sonra söner." },
    { me: true, id: "de-b1-d08.c3",
      o: ["Gut zu wissen. Ich habe wollte immer Strom sparen. Haben Sie einen Tipp?", "Das nervt. Warum muss ich Energie sparen?", "Gut zu wissen. Ich möchte ohnehin Strom sparen. Hätten Sie vielleicht einen Tipp für mich?"], a: 2,
      why: { 0: "„Ich habe wollte“ yanlış karışım: Präteritum „Ich wollte …“, Perfekt „Ich habe … sparen wollen“.", 1: "Kural karşısında şikâyetle başlamak yapıcı değil; ayrıca komşuya tavsiye sormak daha nazik." },
      e: "„Hätten Sie vielleicht einen Tipp?“ Konjunktiv II ile kibar rica. „ohnehin“ = zaten.", n: "Bilmek iyi. Zaten elektrik tasarrufu yapmak istiyorum. Belki bana bir ipucunuz olur mu?" },
    { s: "Herr Fuchs", g: "m", t: "Gern. An Ihrer Stelle würde ich Steckdosenleisten mit Schalter kaufen. So wird der Verbrauch im Standby gestoppt.", n: "Memnuniyetle. Yerinizde olsam anahtarlı çoklu priz alırdım. Böylece bekleme modundaki tüketim durdurulur." }
  ],
  questions: [
    { id: "de-b1-d08.1", t: "mc", q: "Kâğıt hangi kutuya atılır?", o: ["Mavi kutuya", "Sarı kutuya", "Kahverengi kutuya"], a: 0,
      why: { 1: "Sarı kutu ambalajlar içindir.", 2: "Kahverengi kutu yemek artıkları içindir." },
      e: "„die blaue für Papier“." },
    { id: "de-b1-d08.2", t: "gap", q: "Glas ___ im Container an der Straße gesammelt. (toplanır)", a: ["wird"],
      wrong: { "wurde": "*wurde* geçmiş zaman; genel kural: **wird**.", "ist": "*ist gesammelt* durum bildirir; işlem için **wird**." },
      e: "Präsens Passiv: **wird + Partizip II**." },
    { id: "de-b1-d08.3", t: "mc", q: "Herr Fuchs enerji tasarrufu için ne öneriyor?", o: ["Düğmeli uzatma kablosu almayı", "Işığı hiç yakmamayı", "Elektrikli süpürge kullanmayı"], a: 0,
      why: { 1: "Işığın hiç yakılmamasından söz edilmiyor.", 2: "Süpürgeden söz edilmiyor." },
      e: "„An Ihrer Stelle würde ich Steckdosenleisten mit Schalter kaufen.“" },
    { id: "de-b1-d08.4", t: "order", q: "Cümleyi „An“ ile başlayarak sırala.", w: ["An", "Ihrer Stelle", "würde", "ich", "Steckdosenleisten", "kaufen"], a: ["An Ihrer Stelle würde ich Steckdosenleisten kaufen"],
      e: "*An Ihrer Stelle* ilk sırayı doldurur; *würde* 2. sırada, *kaufen* sonda." }
  ]
});

K.addDialog('de-b1-d09', {
  level: 'B1', scene: 'arbeit', title: 'Stimmt das wirklich?', sub: 'Bu gerçekten doğru mu? Bir haberi tartışmak',
  role: 'Çalışan (Emre Sönmez)', roleG: 'm',
  lines: [
    { s: "Julia", g: "f", t: "Hast du schon gelesen? Der Bürgermeister soll zurückgetreten sein. Das stand heute früh in einem Forum.", n: "Okudun mu? Belediye başkanının istifa ettiği söyleniyor. Bu sabah bir forumda yazıyordu." },
    { me: true, id: "de-b1-d09.c1",
      o: ["Echt? Das glaube ich sofort. Foren haben immer recht.", "Nein, das habe ich noch nicht gesehen. Wer hat das geschrieben? In den offiziellen Nachrichten steht davon nichts.", "Nein. Wer das hat geschrieben? Offizielle Nachrichten sagen nichts."], a: 1,
      why: { 0: "Forumdaki her şeye inanmak güvenilir değildir; kaynak sorgulanmalı.", 2: "Soru cümlesinde fiil 2. sırada: „Wer hat das geschrieben?“. Ayrıca „stehen“ ile haberlerde bir şeyin yazmadığı anlatılır." },
      e: "„In den offiziellen Nachrichten“ = resmî haberlerde. „steht davon nichts“ = bundan söz edilmiyor. Eleştirel soru: „Wer hat das geschrieben?“", n: "Hayır, bunu henüz görmedim. Kim yazmış? Resmî haberlerde bundan hiç söz edilmiyor." },
    { s: "Julia", g: "f", t: "Ein Nutzer ohne Namen. Aber viele haben den Beitrag kommentiert und weitergeleitet.", n: "İsimsiz bir kullanıcı. Ama birçok kişi yazıya yorum yazdı ve paylaştı." },
    { me: true, id: "de-b1-d09.c2",
      o: ["Viele Kommentare sagen, dass es stimmt. Das reicht mir.", "Dann ich würde vorsichtig sein, es könnte sein Falschmeldung.", "Dann würde ich vorsichtig sein. Es könnte eine Falschmeldung sein, die sich schnell verbreitet. Wir sollten die Quelle prüfen, bevor wir etwas glauben."], a: 2,
      why: { 0: "Çok yorum olması doğruluk kanıtı değildir; kaynak yoksa dikkat etmek gerekir.", 1: "Cümle bozuk: „Dann würde ich vorsichtig sein“ (özne fiilden sonra) ve „eine Falschmeldung sein“ (artikel + Infinitiv sonda)." },
      e: "„Es könnte eine Falschmeldung sein“ = asılsız haber olabilir (olasılık). „bevor wir etwas glauben“ yan cümle, fiil sonda.", n: "O zaman dikkatli olurdum. Hızla yayılan asılsız bir haber olabilir. Bir şeye inanmadan önce kaynağı kontrol etmeliyiz." },
    { s: "Julia", g: "f", t: "Stimmt. Ich habe gerade die Zeitung geöffnet. Dort steht nichts davon. Die Redaktion sagt, es gebe keine Anzeichen dafür.", n: "Doğru. Az önce gazeteyi açtım. Orada bundan söz edilmiyor. Yazı işleri bunun işaretlerinin olmadığını söylüyor." },
    { me: true, id: "de-b1-d09.c3",
      o: ["Egal. Ich lese Foren weiter und glaube alles.", "Das wird wohl Gerücht sein. Man hätte nicht teilen den Beitrag sollen.", "Siehst du? Das wird wohl ein Gerücht gewesen sein. Man hätte den Beitrag gar nicht erst teilen sollen. Beim nächsten Mal prüfe ich vorher die Quelle."], a: 2,
      why: { 0: "„Alles glauben“ tam tersi bir sonuç: haberlerin doğruluğunu bilmeden yaymak zarar verir.", 1: "Dilbilgisi hataları: „ein Gerücht gewesen sein“ ve „hätte … teilen sollen“ (Infinitiv + sollen, sıra: den Beitrag teilen sollen)." },
      e: "„Das wird wohl ein Gerücht gewesen sein“ = herhalde bir söylentiydi. „Man hätte … teilen sollen“ geçmişte yapılmaması gereken: paylaşılmamalıydı.", n: "Gördün mü? Bu herhalde bir söylentiydi. Yazı hiç paylaşılmamalıydı. Bir dahaki sefere önce kaynağı kontrol ederim." },
    { s: "Julia", g: "f", t: "Genau. Danke fürs kritische Nachfragen.", n: "Aynen. Eleştirel sorular sorduğun için teşekkürler." }
  ],
  questions: [
    { id: "de-b1-d09.1", t: "mc", q: "Haber nerede çıktı?", o: ["Bir forumda, isimsiz bir kullanıcıdan", "Resmî bir gazetede", "Televizyonda"], a: 0,
      why: { 1: "Gazetede bundan söz edilmiyor.", 2: "Televizyondan söz edilmiyor." },
      e: "„Das stand heute früh in einem Forum.“ / „Ein Nutzer ohne Namen.“" },
    { id: "de-b1-d09.2", t: "gap", q: "Der Bürgermeister ___ schon zurückgetreten sein. (söylentiye göre)", a: ["soll"],
      wrong: { "muss": "*muss* “mecbur” ya da “kesin” demektir; söylenti için **soll**.", "will": "*will* kendi iddiasını aktarır." },
      e: "**sollen + Infinitiv** = söylenti." },
    { id: "de-b1-d09.3", t: "mc", q: "Gazetede ne yazıyor?", o: ["Bu konuda hiçbir şey yazmıyor.", "Belediye başkanı istifa etti.", "Belediye başkanı hastalandı."], a: 0,
      why: { 1: "Gazetede böyle bir bilgi yok.", 2: "Hastalıktan söz edilmiyor." },
      e: "„Dort steht nichts davon.“" },
    { id: "de-b1-d09.4", t: "order", q: "Cümleyi „Man“ ile başlayarak sırala.", w: ["Man", "hätte", "den Beitrag", "gar nicht erst", "teilen", "sollen"], a: ["Man hätte den Beitrag gar nicht erst teilen sollen"],
      e: "*hätte* 2. sırada; Infinitiv + *sollen* sonda: *teilen sollen*." }
  ]
});

K.addDialog('de-b1-d10', {
  level: 'B1', scene: 'fest', title: 'Helferin beim Straßenfest', sub: 'Sokak şenliğinde gönüllü olmak',
  role: 'Gönüllü (Zeynep Acar)', roleG: 'f',
  lines: [
    { s: "Herr Hartmann", g: "m", t: "Schön, dass Sie angerufen haben, Frau Acar. Sie möchten beim Straßenfest helfen?", n: "Aradığınız için sevindim, Acar Hanım. Sokak şenliğinde yardım etmek istiyorsunuz, değil mi?" },
    { me: true, id: "de-b1-d10.c1",
      o: ["Ja, aber nur, wenn ich Geld bekomme.", "Ja, sehr gern. Ich würde gern ehrenamtlich mitarbeiten, weil mir die Nachbarschaft wichtig ist. Was kann ich tun?", "Ja, ich möchte gern helfen, weil ich ist die Nachbarschaft wichtig."], a: 1,
      why: { 0: "Gönüllü bir görevde para istemek amaca uymaz; zaten „ehrenamtlich“ ücretsiz demektir.", 2: "„weil mir die Nachbarschaft wichtig ist“: „wichtig sein“ Dativ ister („mir“) ve fiil sonda." },
      e: "„ehrenamtlich mitarbeiten“ = gönüllü çalışmak. „mir ist … wichtig“ Dativ: benim için önemli.", n: "Evet, çok isterim. Komşuluk benim için önemli olduğu için gönüllü çalışmak isterdim. Ne yapabilirim?" },
    { s: "Herr Hartmann", g: "m", t: "Wir suchen Helfer für den Kuchenstand und für den Aufbau. Der Stand muss am Samstag um acht Uhr aufgebaut werden. Könnten Sie das schaffen?", n: "Pasta standı ve kurulum için gönüllü arıyoruz. Stand cumartesi saat sekizde kurulmalı. Bunu başarabilir misiniz?" },
    { me: true, id: "de-b1-d10.c2",
      o: ["Acht Uhr? Das kommt nicht in Frage. Ich schlafe lange.", "Acht Uhr ist früh, aber ich kann kommen, wenn ich hätte den Wecker.", "Acht Uhr ist früh, aber ich könnte kommen. Wenn der Aufbau etwas später beginnen würde, wäre es für mich leichter. Ich nehme aber auch Rücksicht auf die anderen Helfer."], a: 2,
      why: { 0: "Gönüllü olarak başvurup hemen reddetmek sert durur; alternatif sunmak daha iyidir.", 1: "Cümle bozuk: „wenn ich den Wecker hätte“ (fiil sonda) ve anlam eksik; gerçek dışı koşul için *hätte* sonda." },
      e: "„Wenn der Aufbau etwas später beginnen würde, wäre es für mich leichter“ = Kurulum biraz geç başlasa benim için daha kolay olurdu. „Rücksicht nehmen auf“ = başkalarını gözetmek.", n: "Sekiz erken ama gelebilirim. Kurulum biraz daha geç başlasa benim için daha kolay olurdu. Ama diğer gönüllüleri de gözetiyorum." },
    { s: "Herr Hartmann", g: "m", t: "Wir können den Beginn auf halb neun verschieben. Außerdem stellen wir Ihnen Schürze und Handschuhe zur Verfügung. Bitte geben Sie mir bis Mittwoch Bescheid.", n: "Başlangıcı sekiz buçuğa erteleyebiliriz. Ayrıca size önlük ve eldiven sağlıyoruz. Lütfen çarşambaya kadar bana haber verin." },
    { me: true, id: "de-b1-d10.c3",
      o: ["Ich antworte, wenn ich Lust habe.", "Halb neun ist perfekt. Ich geben Ihnen Bescheid am Mittwoch, dann ich bringe meinen Bruder mit.", "Halb neun ist perfekt, danke. Ich gebe Ihnen bis Mittwoch Bescheid, sobald ich mit meiner Familie gesprochen habe. Dürfte ich auch meinen Bruder mitbringen?"], a: 2,
      why: { 0: "Gönüllülük planlama gerektirir; keyfe göre cevap vermek ekibi zor durumda bırakır.", 1: "Dilbilgisi hataları: „Ich gebe“, süre „bis Mittwoch“ ve „dann“ sonrası fiil hemen: „dann bringe ich …“." },
      e: "„Dürfte ich …?“ çok kibar izin rica eder. „Bescheid geben“ = haber vermek. „sobald … gesprochen habe“ yan cümle, fiil sonda.", n: "Sekiz buçuk mükemmel, teşekkürler. Ailemle konuşur konuşmaz çarşambaya kadar size haber veririm. Kardeşimi de getirebilir miyim?" },
    { s: "Herr Hartmann", g: "m", t: "Sehr gerne. Je mehr Helfer wir sind, desto besser wird das Fest.", n: "Memnuniyetle. Ne kadar çok gönüllü olursak şenlik o kadar güzel olur." }
  ],
  questions: [
    { id: "de-b1-d10.1", t: "mc", q: "Zeynep ne için yardım etmek istiyor?", o: ["Sokak şenliği için pasta standı ve kurulum", "Okuldaki bir etkinlik için", "Bir sağlık merkezi için"], a: 0,
      why: { 1: "Okuldan söz edilmiyor.", 2: "Sağlık merkezinden söz edilmiyor." },
      e: "„Wir suchen Helfer für den Kuchenstand und für den Aufbau.“" },
    { id: "de-b1-d10.2", t: "gap", q: "Wir ___ Ihnen Schürze und Handschuhe zur Verfügung. (sağlıyoruz)", a: ["stellen"],
      wrong: { "geben": "*zur Verfügung geben* denmez; **zur Verfügung stellen**.", "machen": "*zur Verfügung machen* denmez; **stellen**." },
      e: "**zur Verfügung stellen** = kullanıma sunmak." },
    { id: "de-b1-d10.3", t: "mc", q: "Başlangıç saati için ne kararlaştırılıyor?", o: ["Sekiz buçuğa ertelenebilir.", "Saat altıya alınır.", "Hiç değişmez."], a: 0,
      why: { 1: "Daha erkene alınmaz; ertelenir.", 2: "Herr Hartmann başlangıcı kaydırabileceğini söylüyor." },
      e: "„Wir können den Beginn auf halb neun verschieben.“" },
    { id: "de-b1-d10.4", t: "order", q: "Cümleyi „Ich“ ile başlayarak sırala.", w: ["Ich", "gebe", "Ihnen", "bis Mittwoch", "Bescheid"], a: ["Ich gebe Ihnen bis Mittwoch Bescheid"],
      e: "*Bescheid geben* sabit kalıp: kişi *Ihnen* (Dativ), *Bescheid* sonda." }
  ]
});

})(window.KOPRU);
