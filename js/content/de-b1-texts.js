/* Deutsch B1 – Lesetexte und Hörtexte (Erklärungen/Fragen auf Türkisch)
 * Paket 1 „Erzählen im Text“: Lesetexte de-b1-r01–r03, Hörtexte de-b1-h01–h03.
 * Fragen-IDs '<textId>.q<n>' sind fest und werden nie wiederverwendet.
 */
(function (K) {

K.addText('de-b1-r01', {
  level: 'B1', kind: 'read', genre: 'email',
  title: 'Bewerbung um eine Stelle', sub: 'Bir işe başvuru',
  body: [
    'Sehr geehrte Damen und Herren,',
    'mit großem Interesse habe ich Ihre Anzeige gelesen. Ich möchte mich um die Stelle in Ihrer Abteilung bewerben und erzähle Ihnen kurz etwas über mich.',
    'Ich wurde in Izmir geboren und wuchs in einem kleinen Dorf auf. Als ich zwölf war, zogen wir nach Deutschland. Nachdem ich die Schule abgeschlossen hatte, machte ich eine Ausbildung bei einer Bank. Während der Ausbildung arbeitete ich in drei Abteilungen und sammelte viele Erfahrungen. Danach wechselte ich in eine größere Firma. Seitdem arbeite ich dort und besuche abends einen Kurs.',
    'Über eine Einladung zum Vorstellungsgespräch würde ich mich sehr freuen.',
    'Mit freundlichen Grüßen',
    'Elif Kaya'
  ],
  gloss: { 'Anzeige': 'ilan', 'Stelle': 'iş, kadro', 'Abteilung': 'bölüm', 'wuchs': 'büyüdü (aufwachsen)', 'Ausbildung': 'meslek eğitimi', 'Erfahrungen': 'deneyimler', 'wechselte': 'geçti, değiştirdi (wechseln)', 'Einladung': 'davet', 'Vorstellungsgespräch': 'iş görüşmesi' },
  questions: [
    { id: 'de-b1-r01.q1', t: 'mc', q: 'Elif’in ailesi Almanya’ya ne zaman taşındı?', o: ['Elif on iki yaşındayken', 'Elif okulu bitirdikten sonra', 'Elif eğitimini bitirdikten sonra', 'Elif doğduğunda'], a: 0,
      why: { 1: 'Okulu bitirmek Almanya’ya taşındıktan **sonra** oldu (*Nachdem ich die Schule abgeschlossen hatte …*).', 2: 'Eğitim, taşınmadan çok sonra, okulun ardından geldi.', 3: 'Elif İzmir’de doğdu (*Ich wurde in Izmir geboren*); Almanya’ya sonradan taşındı.' },
      e: '*Als ich zwölf war, zogen wir nach Deutschland.* → **als** + geçmişte tek bir olay: on iki yaşındayken taşındılar.' },
    { id: 'de-b1-r01.q2', t: 'mc', q: 'Okulu bitirdikten sonra Elif ne yaptı?', o: ['Bir bankada meslek eğitimine başladı.', 'Üniversiteye gitti.', 'Hemen büyük bir şirkette işe başladı.', 'Dil kursuna yazıldı.'], a: 0,
      why: { 1: 'Metinde üniversiteden söz edilmiyor.', 2: 'Büyük şirkete **eğitimden sonra** geçti (*Danach wechselte ich …*).', 3: 'Kurs **şu anda** akşamları devam ediyor (*besuche abends einen Kurs*), okuldan hemen sonra değil.' },
      e: '*Nachdem ich die Schule abgeschlossen hatte, machte ich eine Ausbildung bei einer Bank.* – nachdem + Plusquamperfekt (önce olan), ana cümle Präteritum.' },
    { id: 'de-b1-r01.q3', t: 'gap', q: 'Nachdem sie die Schule ___ hatte, machte sie eine Ausbildung. (abschließen)', a: ['abgeschlossen'],
      wrong: { 'abschloss': '*hatte* ile **Partizip II** gerekir, Präteritum değil: hatte **abgeschlossen**.', 'geschlossen': 'Ön ek **ab** eksik: *ab***ge***schlossen*.', 'abschließen': 'Bu mastar. *hatte* ile Partizip II gerekir: abgeschlossen.' },
      e: 'abschließen → **abgeschlossen** (ayrılabilen fiil: ab-ge-schlossen). *Nachdem sie die Schule abgeschlossen hatte, …* – yan cümlede yardımcı fiil sonda.' },
    { id: 'de-b1-r01.q4', t: 'mc', q: 'Elif şu anda ne yapıyor?', o: ['Büyük bir şirkette çalışıyor ve akşamları bir kursa gidiyor.', 'Bankada meslek eğitimi görüyor.', 'Yeni bir iş arıyor ve çalışmıyor.', 'Köyde yaşıyor ve okula gidiyor.'], a: 0,
      why: { 1: 'Eğitimi çoktan bitti; sonra şirket değiştirdi (*Danach wechselte ich …*).', 2: 'Çalışıyor (*Seitdem arbeite ich dort*), sadece yeni bir kadroya başvuruyor.', 3: 'Köyde büyüdü ama on iki yaşından beri Almanya’da.' },
      e: '*Seitdem arbeite ich dort und besuche abends einen Kurs.* – *seitdem* + Präsens: o zamandan beri hâlâ devam ediyor.' },
    { id: 'de-b1-r01.q5', t: 'match', q: 'Zaman ifadesini olayla eşleştir:', p: [['Als sie zwölf war', 'zog die Familie nach Deutschland'], ['Nachdem sie die Schule abgeschlossen hatte', 'machte sie eine Ausbildung'], ['Während der Ausbildung', 'arbeitete sie in drei Abteilungen'], ['Seitdem', 'arbeitet sie in einer größeren Firma']],
      e: '**als** = geçmişte tek sefer, **nachdem** = sonra, **während** = aynı anda, **seitdem** = o zamandan beri (hâlâ sürüyor).' }
  ]
});

K.addText('de-b1-r02', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Eine Wanderung mit Hindernissen', sub: 'Aksiliklerle dolu bir doğa yürüyüşü',
  body: [
    'Letzten Sommer machten wir eine Wanderung in den Bergen. Wir standen früh auf und fuhren mit dem Auto zum Parkplatz. Zuerst schien die Sonne, und wir gingen fröhlich los.',
    'Nach zwei Stunden kam plötzlich ein Gewitter. Wir hatten keine Regenjacken dabei und waren bald nass. Als es endlich aufhörte, entdeckten wir einen kleinen Weg zu einer Hütte. Dort tranken wir heißen Tee, bis die Sonne wieder schien.',
    'Am Nachmittag erreichten wir den Gipfel. Die Aussicht war wunderbar, und wir waren sehr stolz. Auf dem Rückweg verliefen wir uns fast, aber zum Glück fanden wir den Weg wieder. Am Abend waren wir erschöpft und glücklich.'
  ],
  gloss: { 'fröhlich': 'neşeli, keyifli', 'dabei': 'yanımızda', 'Wanderung': 'doğa yürüyüşü', 'schien': 'parlıyordu (scheinen)', 'Regenjacken': 'yağmurluklar', 'Hütte': 'dağ evi, kulübe', 'Gipfel': 'zirve', 'Aussicht': 'manzara', 'Rückweg': 'dönüş yolu', 'verliefen': 'yolumuzu şaşırdık (sich verlaufen)', 'entdeckten': 'keşfettik (entdecken)', 'erschöpft': 'bitkin' },
  questions: [
    { id: 'de-b1-r02.q1', t: 'mc', q: 'Yürüyüşe nasıl başladılar?', o: ['Güneş vardı ve neşeyle yola çıktılar.', 'Yağmur yağıyordu ve yola çıkmadılar.', 'Önce bir dağ evine gittiler.', 'Geç kalktılar ve acele ettiler.'], a: 0,
      why: { 1: 'Yağmur **sonra** başladı (*Nach zwei Stunden kam ein Gewitter*).', 2: 'Dağ evine fırtınadan **sonra** gittiler.', 3: '*Wir standen früh auf* – erken kalktılar, geç değil.' },
      e: '*Zuerst schien die Sonne, und wir gingen fröhlich los.* – *schien* (scheinen) ve *gingen … los* (losgehen) Präteritum’dur.' },
    { id: 'de-b1-r02.q2', t: 'gap', q: 'Nach zwei Stunden kam plötzlich ein ___.', a: ['Gewitter'],
      wrong: { 'Sturm': '*Sturm* = fırtına; metinde “gök gürültülü sağanak” anlamında **Gewitter** geçiyor.', 'Regen': 'Metinde *ein Gewitter* (şimşekli sağanak) yazıyor, sadece *Regen* değil.' },
      e: '*Nach zwei Stunden kam plötzlich ein **Gewitter**.* – Nomen büyük harfle yazılır: das Gewitter, die Gewitter.' },
    { id: 'de-b1-r02.q3', t: 'mc', q: 'Yağmur dindikten sonra ne yaptılar?', o: ['Bir dağ evinde çay içtiler ve güneşi beklediler.', 'Hemen eve döndüler.', 'Arabaya binip şehre gittiler.', 'Zirveye çıkmadan yürüyüşü bıraktılar.'], a: 0,
      why: { 1: 'Eve dönmediler; öğleden sonra zirveye ulaştılar.', 2: 'Arabadan söz edilmiyor; yürüyüşe devam ettiler.', 3: 'Zirveye **ulaştılar** (*erreichten den Gipfel*).' },
      e: '*Dort tranken wir heißen Tee, bis die Sonne wieder schien.* – **bis** = -e kadar; yan cümlede fiil sonda.' },
    { id: 'de-b1-r02.q4', t: 'cloze', q: 'Cümleleri tamamla:', text: 'Sie tranken Tee, {1} die Sonne wieder schien. Am Nachmittag {2} sie den Gipfel.',
      gaps: {
        '1': { a: ['bis'], o: ['bis', 'bevor', 'während'], wrong: { 'bevor': '*bevor* = -meden önce; “güneş yeniden parlayana kadar” için **bis**.', 'während': '*während* = aynı anda; ama çay içmek, güneşin tekrar çıkmasına kadar sürdü → bis.' } },
        '2': { a: ['erreichten'], wrong: { 'erreichte': '*sie* (çoğul) → **erreichten**; *erreichte* ich/er içindir.', 'erreicht': 'Bu Partizip II’dir. Präteritum: erreichten.' } }
      },
      e: '**bis** = -e kadar. *erreichen* düzenli bir fiildir: kök + -te + -n (sie erreichten)' },
    { id: 'de-b1-r02.q5', t: 'match', q: 'Zamanı olayla eşleştir:', p: [['Früh am Morgen', 'standen sie auf'], ['Nach zwei Stunden', 'kam ein Gewitter'], ['Bis die Sonne wieder schien', 'tranken sie Tee'], ['Am Abend', 'waren sie erschöpft und glücklich']],
      e: 'Olayların sırası: erken kalktılar, iki saat sonra fırtına, sonra çay, öğleden sonra zirve, akşam yorgunluk.' }
  ]
});

K.addText('de-b1-r03', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Baum stürzt auf Auto', sub: 'Ağaç arabanın üzerine devrildi',
  body: [
    'Am Mittwochabend ereignete sich in der Innenstadt ein Unfall. Bei einem starken Sturm stürzte gegen 19 Uhr ein großer Baum auf ein geparktes Auto. Viele Menschen blieben stehen und schauten zu.',
    'Zum Glück verletzte sich niemand, denn die Fahrerin war kurz vorher ausgestiegen. Sie wollte nur schnell ein Paket zur Post bringen.',
    'Die Feuerwehr kam nach wenigen Minuten. Nachdem die Männer den Baum weggeräumt hatten, konnte der Verkehr wieder fließen. Die Straße war fast eine Stunde gesperrt. Der Schaden am Auto ist groß. Die Polizei sucht jetzt Zeugen.'
  ],
  gloss: { 'stürzte': 'devrildi (stürzen)', 'geparktes': 'park edilmiş', 'ausgestiegen': 'inmişti (aussteigen)', 'weggeräumt': 'kaldırmıştı (wegräumen)', 'gesperrt': 'kapalıydı (trafiğe)', 'Verkehr': 'trafik', 'Fahrerin': 'kadın sürücü' },
  questions: [
    { id: 'de-b1-r03.q1', t: 'mc', q: 'Olay nerede ve ne zaman oldu?', o: ['Çarşamba akşamı şehir merkezinde', 'Çarşamba sabahı evin önünde', 'Cuma akşamı otoyolda', 'Çarşamba akşamı köyde'], a: 0,
      why: { 1: 'Olay sabah değil, **akşam** oldu (*Mittwochabend*, 19 civarı).', 2: 'Metinde “otoyol” yok; *Innenstadt* (şehir merkezi) yazıyor.', 3: 'Köy değil, **şehir merkezi** (*Innenstadt*).' },
      e: '*Am Mittwochabend ereignete sich in der Innenstadt ein Unfall.* – *sich ereignen* = meydana gelmek (haber dili, Präteritum).' },
    { id: 'de-b1-r03.q2', t: 'mc', q: 'Neden kimse yaralanmadı?', o: ['Sürücü kısa süre önce arabadan inmişti.', 'Sürücü arabadaydı ama şanslıydı.', 'İtfaiye ağacı önceden kaldırmıştı.', 'Polis herkesi uzaklaştırmıştı.'], a: 0,
      why: { 1: 'Sürücü arabada değildi; ağaç devrilmeden **kısa süre önce** inmişti (*war ausgestiegen*).', 2: 'İtfaiye ağaç **devrildikten sonra** geldi.', 3: 'Polis sadece tanık arıyor, kimseyi uzaklaştırmadı.' },
      e: '*… denn die Fahrerin war kurz vorher ausgestiegen.* – Plusquamperfekt: inmek, ağacın devrilmesinden **önce** oldu.' },
    { id: 'de-b1-r03.q3', t: 'gap', q: 'Die Fahrerin ___ kurz vorher ausgestiegen.', a: ['war'],
      wrong: { 'hatte': '*aussteigen* hareket fiilidir → **sein**: war ausgestiegen.', 'ist': '*ist ausgestiegen* Perfekt’tir. Metin Präteritum’da anlatıldığı için daha önce olan şey Plusquamperfekt: **war** ausgestiegen.' },
      e: 'aussteigen → *war ausgestiegen*. *kurz vorher* = kısa süre önce; Plusquamperfekt’in sinyalidir.' },
    { id: 'de-b1-r03.q4', t: 'mc', q: 'Trafik ne zaman yeniden akabildi?', o: ['Adamlar ağacı kaldırdıktan sonra', 'Polis tanıkları bulduktan sonra', 'Sürücü geri geldikten sonra', 'Ağaç devrilmeden önce'], a: 0,
      why: { 1: 'Polis hâlâ tanık **arıyor** (*sucht jetzt Zeugen*); trafik bununla ilgisiz.', 2: 'Sürücünün dönmesinden söz edilmiyor.', 3: 'Ağaç yola devrildi ve yolu kapattı; sonra trafik durdu.' },
      e: '*Nachdem die Männer den Baum weggeräumt hatten, konnte der Verkehr wieder fließen.* – nachdem + Plusquamperfekt, ana cümle Präteritum (*konnte*).' },
    { id: 'de-b1-r03.q5', t: 'match', q: 'Kim ne yaptı?', p: [['Die Polizei', 'sucht Zeugen'], ['Die Feuerwehr', 'kam nach wenigen Minuten'], ['Die Fahrerin', 'war kurz vorher ausgestiegen'], ['Der Baum', 'stürzte auf ein geparktes Auto']],
      e: 'Haber dilinde Präteritum (*kam, stürzte*) ve Plusquamperfekt (*war ausgestiegen*) birlikte kullanılır; polisin *sucht* fiili ise şimdiki zamandır (hâlâ arıyor).' }
  ]
});

K.addText('de-b1-h01', {
  level: 'B1', kind: 'listen', genre: 'gespraech', plays: 2,
  title: 'Nach dem Vorstellungsgespräch', sub: 'İş görüşmesinden sonra',
  lines: [
    { s: 'Anna', g: 'f', t: 'Wie war dein Vorstellungsgespräch gestern?', n: 'Dünkü iş görüşmen nasıldı?' },
    { s: 'Can', g: 'm', t: 'Ziemlich aufregend. Als ich ankam, warteten schon drei andere Bewerber.', n: 'Oldukça heyecan vericiydi. Ben geldiğimde üç aday daha bekliyordu.' },
    { s: 'Anna', g: 'f', t: 'Und hattest du dich gut vorbereitet?', n: 'Peki iyi hazırlanmış mıydın?' },
    { s: 'Can', g: 'm', t: 'Ja, ich hatte die ganze Woche geübt. Nachdem ich von meinen Erfahrungen erzählt hatte, stellte der Chef viele Fragen. Er sagte, dass er sich bis Freitag meldet. Jetzt warte ich nervös.', n: 'Evet, bütün hafta çalışmıştım. Deneyimlerimden söz ettikten sonra patron çok soru sordu. Cuma gününe kadar haber vereceğini söyledi. Şimdi heyecanla bekliyorum.' }
  ],
  gloss: { 'aufregend': 'heyecan verici', 'Bewerber': 'aday', 'vorbereitet': 'hazırlanmış', 'geübt': 'çalışmıştım, pratik yapmıştım (üben)', 'Erfahrungen': 'deneyimler' },
  questions: [
    { id: 'de-b1-h01.q1', t: 'mc', q: 'Can vardığında ne vardı?', o: ['Üç başka aday bekliyordu.', 'Kimse yoktu.', 'Patron onu bekliyordu.', 'Görüşme çoktan bitmişti.'], a: 0,
      why: { 1: '*warteten schon drei andere Bewerber* – başka adaylar vardı.', 2: 'Patron sadece görüşme sırasında konuştu; girişte onu bekleyen yoktu.', 3: 'Görüşme **henüz başlamamıştı**; Can görüşmeye girdi.' },
      e: '*Als ich ankam, warteten schon drei andere Bewerber.* – **als** + tek seferlik geçmiş olay; *schon* = zaten.' },
    { id: 'de-b1-h01.q2', t: 'mc', q: 'Can görüşmeye nasıl hazırlanmıştı?', o: ['Bütün hafta çalışmıştı.', 'Hiç hazırlanmamıştı.', 'Sadece bir gün çalışmıştı.', 'Anna ile prova yapmıştı.'], a: 0,
      why: { 1: '*hatte … geübt* – hazırlanmıştı.', 2: '*die ganze Woche* = bütün hafta.', 3: 'Anna’yla prova yapmaktan söz edilmiyor.' },
      e: '*Ich hatte die ganze Woche geübt.* – Plusquamperfekt: görüşmeden önce yapılan hazırlık (*hatte geübt*).' },
    { id: 'de-b1-h01.q3', t: 'listen', say: 'Nachdem ich von meinen Erfahrungen erzählt hatte, stellte der Chef viele Fragen.', q: 'Cümleyi dinle. Hangisi duyuldu?', o: ['Nachdem ich von meinen Erfahrungen erzählt hatte, stellte der Chef viele Fragen.', 'Nachdem ich von meinen Erfahrungen erzähle, stellt der Chef viele Fragen.', 'Bevor ich von meinen Erfahrungen erzählte, stellte der Chef viele Fragen.', 'Während ich von meinen Erfahrungen erzählte, stellte der Chef viele Fragen.'], a: 0,
      why: { 1: 'Bu Präsens; konuşma geçmişten söz ediyor (*hatte … erzählt*, *stellte*).', 2: '*bevor* = -meden önce; cümlede **nachdem** (-dikten sonra) vardı.', 3: '*während* = aynı anda; duyduğun **nachdem** (sonra).' },
      e: '*nachdem* + Plusquamperfekt (*erzählt hatte*), ana cümle Präteritum (*stellte*). Yardımcı fiil yan cümlenin **sonunda**.' },
    { id: 'de-b1-h01.q4', t: 'cloze', q: 'Cümleleri tamamla:', text: 'Als er {1}, warteten schon drei andere Bewerber. Er hatte die ganze Woche {2} (üben).',
      gaps: {
        '1': { a: ['ankam'], o: ['ankam', 'ankommt', 'angekommen'], wrong: { 'ankommt': 'Bu Präsens. Geçmişte tek olay: Präteritum **ankam**.', 'angekommen': 'Bu Partizip II’dir; yan cümlede *ankam* gerekir.' } },
        '2': { a: ['geübt'], wrong: { 'üben': 'Bu mastar. *hatte* ile Partizip II gerekir: **geübt**.', 'geübet': '*üb-* kökü -t/-d ile bitmiyor; araya -e- girmez: geüb**t**.' } }
      },
      e: '*ankommen* düzensiz: **kam … an** (yan cümlede *ankam*). *üben* düzenli: Partizip II **geübt** (ge + üb + t).' }
  ]
});

K.addText('de-b1-h02', {
  level: 'B1', kind: 'listen', genre: 'radio', plays: 2,
  title: 'Rückblick auf das Sommerfest', sub: 'Yaz şenliğine bakış',
  lines: [
    { s: 'Moderatorin', g: 'f', t: 'Guten Morgen, liebe Hörerinnen und Hörer! Gestern fand im Stadtpark das große Sommerfest statt. Hören wir unseren Reporter.', n: 'Günaydın sevgili dinleyiciler! Dün şehir parkında büyük yaz şenliği yapıldı. Muhabirimizi dinleyelim.' },
    { s: 'Reporter', g: 'm', t: 'Schon am Vormittag kamen viele Familien. Während die Kinder spielten, hörten die Eltern Musik. Als das Konzert am Abend begann, war der Park voll. Nachdem es dunkel geworden war, gab es ein schönes Feuerwerk. So viele Besucher hatte das Fest noch nie gehabt.', n: 'Daha öğleden önce birçok aile geldi. Çocuklar oynarken ebeveynler müzik dinledi. Akşam konser başladığında park doluydu. Hava karardıktan sonra güzel bir havai fişek gösterisi yapıldı. Şenliğe şimdiye kadar hiç bu kadar çok ziyaretçi gelmemişti.' }
  ],
  gloss: { 'Feuerwerk': 'havai fişek', 'Besucher': 'ziyaretçiler', 'Hörerinnen': 'kadın dinleyiciler', 'Reporter': 'muhabir', 'Vormittag': 'öğleden önce' },
  questions: [
    { id: 'de-b1-h02.q1', t: 'mc', q: 'Şenlik nerede yapıldı?', o: ['Şehir parkında', 'Okulun bahçesinde', 'Şehir meydanında', 'Nehir kenarında'], a: 0,
      why: { 1: 'Okuldan söz edilmiyor.', 2: 'Meydan değil, **park** (*Stadtpark*).', 3: 'Nehir söz konusu değil; park geçiyor.' },
      e: '*Gestern fand im Stadtpark das große Sommerfest statt.* – *stattfinden* = yapılmak; Präteritum: *fand … statt*.' },
    { id: 'de-b1-h02.q2', t: 'mc', q: 'Çocuklar oynarken ebeveynler ne yaptı?', o: ['Müzik dinlediler.', 'Yemek pişirdiler.', 'Havai fişek izlediler.', 'Çocuklarla oynadılar.'], a: 0,
      why: { 1: 'Yemek pişirmekten söz edilmiyor.', 2: 'Havai fişek, hava **karardıktan sonra** oldu.', 3: 'Çocuklar oynadı, ebeveynler müzik dinledi (*hörten Musik*).' },
      e: '*Während die Kinder spielten, hörten die Eltern Musik.* – **während** = aynı anda.' },
    { id: 'de-b1-h02.q3', t: 'gap', q: 'Nachdem es dunkel ___ war, gab es ein Feuerwerk.', a: ['geworden'],
      wrong: { 'wurde': '*war* ile Partizip II gerekir: war **geworden**.', 'werden': 'Bu mastar. Yardımcı fiil *war* ile **Partizip II** gerekir: geworden.', 'gewurden': 'werden’in Partizip’i **geworden**, *gewurden* değil.' },
      e: 'werden → *ist geworden*; Plusquamperfekt: *war geworden*. *Nachdem es dunkel geworden war, …* – yan cümlede yardımcı fiil sonda.' },
    { id: 'de-b1-h02.q4', t: 'mc', q: 'Reporter ziyaretçi sayısı hakkında ne söylüyor?', o: ['Şimdiye kadar hiç bu kadar çok ziyaretçi gelmemişti.', 'Bu yıl geçen yıldan daha az ziyaretçi geldi.', 'Ziyaretçi sayısı bilinmiyor.', 'Sadece aileler geldi, gençler gelmedi.'], a: 0,
      why: { 1: '*So viele Besucher hatte das Fest noch nie gehabt* = ilk kez bu kadar çok.', 2: 'Sayı verilmedi ama “hiç bu kadar çok olmamıştı” söyleniyor.', 3: 'Gençlerden söz edilmiyor; “viele Familien” geçiyor.' },
      e: '*So viele Besucher hatte das Fest noch nie gehabt.* – Plusquamperfekt: şenliğin geçmiş tüm yıllarına göre (*noch nie* = daha önce hiç).' }
  ]
});

K.addText('de-b1-h03', {
  level: 'B1', kind: 'listen', genre: 'interview', plays: 2,
  title: 'Seit vielen Jahren in Deutschland', sub: 'Uzun yıllardır Almanya’da',
  lines: [
    { s: 'Reporter', g: 'm', t: 'Frau Aksoy, wann sind Sie nach Deutschland gekommen?', n: 'Sayın Aksoy, Almanya’ya ne zaman geldiniz?' },
    { s: 'Frau Aksoy', g: 'f', t: 'Das war vor vielen Jahren. Als ich ankam, sprach ich fast kein Deutsch. Ich hatte nur einen kleinen Koffer dabei.', n: 'Uzun yıllar önceydi. Geldiğimde neredeyse hiç Almanca konuşmuyordum. Yanımda sadece küçük bir bavul vardı.' },
    { s: 'Reporter', g: 'm', t: 'Und wie ging es weiter?', n: 'Peki sonra nasıl devam etti?' },
    { s: 'Frau Aksoy', g: 'f', t: 'Zuerst arbeitete ich in einer Bäckerei. Abends besuchte ich einen Sprachkurs. Seitdem ich Deutsch spreche, fühle ich mich hier zu Hause.', n: 'Önce bir fırında çalıştım. Akşamları dil kursuna gittim. Almanca konuşmaya başladığımdan beri kendimi burada evimde hissediyorum.' }
  ],
  gloss: { 'Koffer': 'bavul', 'Bäckerei': 'fırın', 'Sprachkurs': 'dil kursu', 'dabei': 'yanında' },
  questions: [
    { id: 'de-b1-h03.q1', t: 'mc', q: 'Frau Aksoy Almanya’ya geldiğinde Almanca konuşabiliyor muydu?', o: ['Neredeyse hiç konuşamıyordu.', 'Çok iyi konuşuyordu.', 'Sadece okuyabiliyordu.', 'Bunun hakkında bir şey söylemiyor.'], a: 0,
      why: { 1: '*sprach fast kein Deutsch* – neredeyse hiç Almanca konuşmuyordu.', 2: 'Okumaktan söz edilmiyor.', 3: 'Söylüyor: *fast kein Deutsch*.' },
      e: '*Als ich ankam, sprach ich fast kein Deutsch.* – **als** + Präteritum (*ankam, sprach*): geçmişte tek bir an.' },
    { id: 'de-b1-h03.q2', t: 'mc', q: 'Yanında ne vardı?', o: ['Küçük bir bavul', 'Büyük bir sandık', 'Hiçbir şey', 'İki çanta'], a: 0,
      why: { 1: '*einen kleinen Koffer* = küçük bir bavul; sandık değil.', 2: '*Ich hatte nur einen kleinen Koffer dabei* – bir bavul vardı.', 3: 'Bir bavul var, iki çanta değil.' },
      e: '*Ich hatte nur einen kleinen Koffer dabei.* – *dabeihaben* = yanında olmak.' },
    { id: 'de-b1-h03.q3', t: 'mc', q: 'Akşamları ne yapıyordu?', o: ['Bir dil kursuna gidiyordu.', 'Fırında çalışıyordu.', 'Arkadaşlarını ziyaret ediyordu.', 'Evde Almanca TV izliyordu.'], a: 0,
      why: { 1: 'Fırında **önce / gündüz** çalıştı; akşamları kursa gitti.', 2: 'Arkadaş ziyaretinden söz edilmiyor.', 3: 'Televizyondan söz edilmiyor.' },
      e: '*Abends besuchte ich einen Sprachkurs.* – *besuchen* + Akkusativ: *einen Sprachkurs* (kursa gitmek).' },
    { id: 'de-b1-h03.q4', t: 'gap', q: 'Seitdem ich Deutsch ___, fühle ich mich hier zu Hause. (sprechen)', a: ['spreche'],
      wrong: { 'sprach': '*seitdem* ile hâlâ süren durum anlatılır: fiil **Präsens**’te kalır: spreche.', 'spricht': '*ich* ile **spreche**; *spricht* er/sie/es içindir.', 'gesprochen': 'Yan cümlede Partizip II tek başına durmaz; *seitdem ich … spreche*.' },
      e: '*Seitdem ich Deutsch spreche, …* – seitdem + Präsens: o zamandan beri hâlâ devam ediyor; fiil yan cümlede sonda.' }
  ]
});

})(window.KOPRU);
