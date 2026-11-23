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

K.addText('de-b1-r04', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Neue Regelung für den Müll', sub: 'Çöp için yeni düzenleme',
  body: [
    'Die Stadt hat eine neue Regelung für den Müll beschlossen. Sie gilt ab dem ersten Januar. Wegen der hohen Kosten müssen die Bewohner großer Häuser ihren Müll künftig besser trennen.',
    'Die Mehrheit der Bürger ist dafür. Die Mieter, denen die Hausverwaltung bisher keine Tonnen gegeben hat, bekommen jetzt kostenlose Behälter. Innerhalb von zwei Wochen verteilen Mitarbeiter der Stadt die Tonnen an alle Haushalte.',
    'Nicht alle sind zufrieden. Ein Mieter, den wir vor dem Rathaus trafen, sagte: „Trotz der guten Idee ist die Regelung zu kompliziert.“ Auch der Vermieter eines großen Hauses ärgert sich. Er verlangt von den Mietern höhere Nebenkosten, weil die Abholung des Mülls teurer wird.',
    'Die Stadt will die Entwicklung genau beobachten, denn sie hofft auf weniger Müll und saubere Straßen. Im Laufe des Jahres berichtet sie über die Ergebnisse.'
  ],
  gloss: { 'trotz': 'rağmen', 'kompliziert': 'karmaşık', 'trafen': 'karşılaştık (treffen)', 'gilt': 'geçerlidir (gelten)', 'höhere': 'daha yüksek', 'Regelung': 'düzenleme', 'künftig': 'bundan sonra, gelecekte', 'Tonnen': 'çöp kovaları, konteynerler', 'Behälter': 'kap, kutu', 'Haushalte': 'haneler', 'Rathaus': 'belediye binası', 'Abholung': 'toplama (çöp)', 'hofft': 'umut ediyor (hoffen)', 'beobachten': 'gözlemlemek', 'Mehrheit': 'çoğunluk', 'beschlossen': 'karar verdi (beschließen)', 'Bürger': 'vatandaşlar' },
  questions: [
    { id: 'de-b1-r04.q1', t: 'mc', q: 'Yeni düzenleme ne zaman geçerli oluyor?', o: ['1 Ocak’tan itibaren', 'Bu hafta başından itibaren', '1 Şubat’tan itibaren', 'İki hafta sonra'], a: 0,
      why: { 1: 'Metinde “bu hafta” geçmiyor; *ab dem ersten Januar* yazıyor.', 2: 'Şubat geçmiyor; tarih **1 Ocak**.', 3: '*Innerhalb von zwei Wochen* = iki hafta içinde, çöp kaplarının dağıtılması için; düzenlemenin başlangıcı için değil.' },
      e: '*Sie gilt ab dem ersten Januar.* – *ab* + Dativ: başlangıç tarihi. *gelten* = geçerli olmak.' },
    { id: 'de-b1-r04.q2', t: 'mc', q: 'Kimler ücretsiz çöp kabı alıyor?', o: ['Apartman yönetiminin şimdiye kadar kap vermediği kiracılar', 'Bütün vatandaşlar', 'Sadece belediye çalışanları', 'Sadece ev sahipleri'], a: 0,
      why: { 1: 'Sadece daha önce kap verilmeyen kiracılar alıyor (*denen die Hausverwaltung bisher keine Tonnen gegeben hatte*).', 2: 'Belediye çalışanları kapları **dağıtıyor**, kendileri almıyor.', 3: 'Ev sahipleri değil, **kiracılar** (*Mieter*).' },
      e: '*Die Mieter, denen die Hausverwaltung bisher keine Tonnen gegeben hat, …* – Relativsatz: *geben* + Dativ → **denen** (Dativ çoğul).' },
    { id: 'de-b1-r04.q3', t: 'gap', q: 'Die Mehrheit ___ Bürger ist dafür.', a: ['der'],
      wrong: { 'des': '*Bürger* çoğul; çoğul Genitiv artikeli **der**.', 'die': '*die Mehrheit die Bürger* denmez; ait olan şey + **Genitiv**: der Bürger.', 'den': '*den* Dativ çoğul; Genitiv çoğul **der**.' },
      e: '*die Mehrheit der Bürger*: Genitiv çoğul = **der** + isim. İsim değişmez.' },
    { id: 'de-b1-r04.q4', t: 'cloze', q: 'Metinden cümleleri tamamla:', text: '{1} der guten Idee ist die Regelung zu kompliziert. Der Vermieter verlangt höhere Nebenkosten, {2} die Abholung des Mülls teurer wird.',
      gaps: {
        '1': { a: ['Trotz'], o: ['Trotz', 'Wegen', 'Statt'], wrong: { 'Wegen': '*wegen* = -den dolayı; iyi fikre **rağmen** karmaşık → trotz.', 'Statt': '*statt* = yerine; burada karşıtlık var.' } },
        '2': { a: ['weil'], o: ['weil', 'dass', 'wenn'], wrong: { 'dass': '*dass* neden bildirmez.', 'wenn': '*wenn* = eğer / her -dığında; burada neden: **weil**.' } }
      },
      e: '**trotz** + Genitiv (*der guten Idee*), **weil** = çünkü (yan cümlede fiil sonda: *teurer wird*).' },
    { id: 'de-b1-r04.q5', t: 'match', q: 'Kim ne yapıyor?', p: [['Die Stadt', 'hat eine neue Regelung beschlossen'], ['Die Mieter', 'bekommen kostenlose Behälter'], ['Mitarbeiter der Stadt', 'verteilen die Tonnen'], ['Der Vermieter', 'verlangt höhere Nebenkosten']],
      e: 'Metindeki dört kişi ya da kurum: şehir karar verdi, kiracılar kap alıyor, çalışanlar dağıtıyor, ev sahibi daha yüksek yan gider istiyor.' }
  ]
});

K.addText('de-b1-r05', {
  level: 'B1', kind: 'read', genre: 'nachricht',
  title: 'Ärger mit dem Nachbarn', sub: 'Komşuyla sorun',
  body: [
    'Hallo zusammen,',
    'ich brauche einen Rat. Ich wohne seit drei Jahren in einer gemütlichen Wohnung im zweiten Stock. Der Nachbar, der über mir wohnt, spielt fast jeden Abend laut Musik. Wegen des Lärms kann ich oft nicht schlafen. Das Haus ist sehr hellhörig, deshalb höre ich jedes Geräusch. Gestern habe ich dem Nachbarn einen netten Brief geschrieben, aber er hat nicht geantwortet. Was soll ich tun? Soll ich die Hausverwaltung informieren?',
    'Danke und viele Grüße, Selin',
    'Antwort von Marco:',
    'Hallo Selin, ich hatte ein ähnliches Problem. Ich habe zuerst persönlich mit dem Nachbarn gesprochen. Das war besser als ein Brief. Er hat sich entschuldigt, und seitdem ist es ruhig. Falls es nicht hilft, kannst du dich bei der Hausverwaltung beschweren. Sie ist für solche Probleme verantwortlich. Bleib freundlich, denn ein gutes Verhältnis zu den Nachbarn ist wichtig.'
  ],
  gloss: { 'Rat': 'tavsiye', 'Stock': 'kat', 'hellhörig': 'sesi geçiren', 'Lärm': 'gürültü', 'ähnliches': 'benzer', 'entschuldigt': 'özür diledi (sich entschuldigen)', 'Geräusch': 'ses' },
  questions: [
    { id: 'de-b1-r05.q1', t: 'mc', q: 'Selin’in sorunu nedir?', o: ['Üst kattaki komşu her akşam yüksek sesle müzik dinliyor.', 'Ev sahibi kirayı artırdı.', 'Komşusu ona kızgın.', 'Dairesi çok küçük.'], a: 0,
      why: { 1: 'Kira artışından söz edilmiyor.', 2: 'Komşunun ona kızgın olduğu söylenmiyor; sorun **gürültü**.', 3: 'Dairesi *gemütlich* (sıcak) olarak tarif ediliyor, küçük diye şikâyet yok.' },
      e: '*Der Nachbar, der über mir wohnt, spielt fast jeden Abend laut Musik.* – Relativsatz: Nominativ eril → **der**; fiil sonda.' },
    { id: 'de-b1-r05.q2', t: 'gap', q: 'Wegen des ___ kann Selin oft nicht schlafen.', a: ['Lärms', 'Lärmes'],
      wrong: { 'Lärm': '*wegen* + Genitiv: eril isimde **-s**: des Lärm**s**.' },
      e: '*wegen des Lärms*: eril Genitiv = des + isim-s.' },
    { id: 'de-b1-r05.q3', t: 'mc', q: 'Selin komşusuyla nasıl iletişim kurdu?', o: ['Ona kibar bir mektup yazdı ama cevap alamadı.', 'Yüz yüze konuştu.', 'Polisi aradı.', 'Hiçbir şey yapmadı.'], a: 0,
      why: { 1: 'Yüz yüze konuşan **Marco** oldu.', 2: 'Polisten söz edilmiyor.', 3: 'Bir mektup yazdı (*habe … einen netten Brief geschrieben*).' },
      e: '*Ich habe dem Nachbarn einen netten Brief geschrieben.* – *schreiben* + Dativ (kişi) + Akkusativ (mektup); *netten* → Akkusativ eril, belirsiz artikel → **-en**.' },
    { id: 'de-b1-r05.q4', t: 'mc', q: 'Marco ne öneriyor?', o: ['Önce yüz yüze konuşmak, işe yaramazsa apartman yönetimine şikâyet etmek.', 'Hemen apartman yönetimine şikâyet etmek.', 'Komşuya bir mektup daha yazmak.', 'Başka bir eve taşınmak.'], a: 0,
      why: { 1: 'Marco’ya göre yönetim **ikinci adım**; önce konuşmak gerekiyor.', 2: 'Marco mektuptan çok kişisel konuşmanın daha iyi olduğunu söylüyor.', 3: 'Taşınmaktan söz edilmiyor.' },
      e: '*Ich habe zuerst persönlich mit dem Nachbarn gesprochen. … Falls es nicht hilft, kannst du dich bei der Hausverwaltung beschweren.*' },
    { id: 'de-b1-r05.q5', t: 'match', q: 'Eşleştir:', p: [['Der Nachbar, der über Selin wohnt', 'spielt laut Musik'], ['Das Haus', 'ist sehr hellhörig'], ['Marco', 'hat persönlich mit dem Nachbarn gesprochen'], ['Die Hausverwaltung', 'ist für solche Probleme verantwortlich']],
      e: '*Der Nachbar, der über Selin wohnt* (Relativsatz, Nominativ eril) – *Das Haus ist hellhörig*: duvarlar ince, her ses duyuluyor.' }
  ]
});

K.addText('de-b1-r06', {
  level: 'B1', kind: 'read', genre: 'email',
  title: 'Brief an die Vermieterin', sub: 'Ev sahibine mektup',
  body: [
    'Sehr geehrte Frau Winter,',
    'ich wende mich an Sie wegen der defekten Heizung in meiner Wohnung. Ich bin seit drei Jahren Mieterin in Ihrem Haus und habe bisher nie ein Problem gemeldet. Seit zwei Wochen ist es im Wohnzimmer sehr kalt. Der Handwerker, den die Hausverwaltung letzte Woche geschickt hat, konnte den Mangel nicht beheben. Er sagte, dass ein neues Teil bestellt werden muss.',
    'Außerdem gibt es im Bad einen feuchten Fleck, der immer größer wird. Wahrscheinlich ist das die Folge eines kleinen Wasserschadens in der Wohnung über mir. Dieser Zustand ist für mich und meine Familie nicht mehr akzeptabel.',
    'Bitte kümmern Sie sich so schnell wie möglich um die Reparatur. Ich bitte Sie, die Heizung innerhalb von zwei Wochen reparieren zu lassen. Wenn Sie den Mangel nicht beheben, möchte ich die Miete mindern. Ich bitte um Rückmeldung bis zum Ende des Monats.',
    'Mit freundlichen Grüßen',
    'Aylin Kaya'
  ],
  gloss: { 'Fleck': 'leke', 'feuchten': 'nemli', 'akzeptabel': 'kabul edilebilir', 'mindern': 'düşürmek, azaltmak', 'bestellt': 'sipariş edilmiş (bestellen)', 'Wasserschaden': 'su hasarı', 'Teil': 'parça' },
  questions: [
    { id: 'de-b1-r06.q1', t: 'mc', q: 'Aylin ev sahibine neden yazıyor?', o: ['Dairedeki arızalı kalorifer yüzünden.', 'Kira artışını reddetmek için.', 'Daireden çıkmak istediği için.', 'Komşusundan şikâyet etmek için.'], a: 0,
      why: { 1: 'Kira artışından söz edilmiyor.', 2: 'Taşınmak istediğini yazmıyor; tamir istiyor.', 3: 'Komşudan değil, kaloriferden şikâyet ediyor.' },
      e: '*Ich wende mich an Sie wegen der defekten Heizung.* – *wegen* + Genitiv dişil: *der defekten Heizung*.' },
    { id: 'de-b1-r06.q2', t: 'mc', q: 'Usta ne söyledi?', o: ['Yeni bir parça sipariş edilmesi gerektiğini.', 'Kalorifer artık çalışıyor.', 'Bütün kaloriferin değişmesi gerektiğini.', 'Aylin’in kaloriferi bozduğunu.'], a: 0,
      why: { 1: 'Usta arızayı **gideremedi** (*konnte … nicht beheben*).', 2: 'Bütün kalorifer değil, **yeni bir parça** (*ein neues Teil*).', 3: 'Suçlama yok; arıza sebebi parça.' },
      e: '*Er sagte, dass ein neues Teil bestellt werden muss.* – *dass*-Satz: fiil sonda.' },
    { id: 'de-b1-r06.q3', t: 'gap', q: 'Der Handwerker, ___ die Hausverwaltung geschickt hat, konnte den Mangel nicht beheben.', a: ['den'],
      wrong: { 'der': '*der* Nominativ; ama Hausverwaltung ustayı gönderdi → usta **nesne** → Akkusativ den.', 'dem': 'Dativ; *schicken* burada Akkusativ nesne alıyor.', 'dessen': '*dessen* Genitiv; bu konu ileride. Burada Akkusativ **den**.' },
      e: '*Die Hausverwaltung hat den Handwerker geschickt* → Akkusativ eril → **den**.' },
    { id: 'de-b1-r06.q4', t: 'mc', q: 'Banyoda ne var?', o: ['Giderek büyüyen nemli bir leke', 'Bozuk bir musluk', 'Kırık bir pencere', 'Çatıdan sızan su'], a: 0,
      why: { 1: 'Musluktan söz edilmiyor.', 2: 'Pencereden söz edilmiyor.', 3: 'Üstteki dairede küçük bir su hasarı **olabilir** (*wahrscheinlich*) ama çatıdan söz edilmiyor.' },
      e: '*einen feuchten Fleck, der immer größer wird* – *feucht* sıfatı Akkusativ eril, belirsiz artikel → **-en**; Relativsatz: *der … wird* (Nominativ eril).' },
    { id: 'de-b1-r06.q5', t: 'match', q: 'Zaman ifadesini eşleştir:', p: [['Seit zwei Wochen', 'ist es im Wohnzimmer kalt'], ['Letzte Woche', 'kam ein Handwerker'], ['Innerhalb von zwei Wochen', 'soll die Heizung in Ordnung sein'], ['Bis zum Ende des Monats', 'bittet sie um Rückmeldung']],
      e: '*seit* = o zamandan beri, *innerhalb von* = içinde (süre), *bis zum Ende des Monats* = ayın sonuna kadar (Genitiv: des Monats).' }
  ]
});

K.addText('de-b1-h04', {
  level: 'B1', kind: 'listen', genre: 'anrufbeantworter', plays: 2,
  title: 'Nachricht von der Hausverwaltung', sub: 'Apartman yönetiminden mesaj',
  lines: [
    { s: 'Hausverwaltung', g: 'f', t: 'Guten Tag, hier spricht die Hausverwaltung Berger. Wir rufen Sie an wegen der defekten Heizung in Ihrer Wohnung. Der Handwerker, den wir beauftragt haben, kommt am Dienstag zwischen acht und zwölf Uhr. Er bringt ein neues Teil mit. Die Reparatur dauert ungefähr zwei Stunden. Bitte seien Sie zu Hause oder geben Sie einem Nachbarn den Schlüssel. Falls der Termin nicht passt, rufen Sie uns innerhalb von zwei Tagen zurück. Die Nummer finden Sie auf dem Brief, den wir Ihnen letzte Woche geschickt haben. Vielen Dank und auf Wiederhören.', n: 'İyi günler, Berger Apartman Yönetimi’nden arıyoruz. Sizi dairenizdeki arızalı kalorifer nedeniyle arıyoruz. Görevlendirdiğimiz usta salı günü sekiz ile on iki arasında gelecek. Yeni bir parça getirecek. Tamir yaklaşık iki saat sürecek. Lütfen evde olun ya da anahtarı bir komşuya verin. Randevu uymazsa iki gün içinde bizi geri arayın. Numarayı geçen hafta size gönderdiğimiz mektupta bulabilirsiniz. Çok teşekkürler, hoşça kalın.' }
  ],
  gloss: { 'Wiederhören': 'tekrar duymak (telefonda vedalaşma)', 'passt': 'uyar (passen)', 'beauftragt': 'görevlendirdik (beauftragen)' },
  questions: [
    { id: 'de-b1-h04.q1', t: 'mc', q: 'Mesaj neden bırakılmış?', o: ['Evdeki arızalı kalorifer için usta gelecek.', 'Kira artırılacak.', 'Apartman toplantısı yapılacak.', 'Bir su hasarı bildirilecek.'], a: 0,
      why: { 1: 'Kira artışından söz edilmiyor.', 2: 'Toplantıdan söz edilmiyor.', 3: 'Su hasarı geçmiyor; konu **kalorifer** (*Heizung*).' },
      e: '*Wir rufen Sie an wegen der defekten Heizung …* – *wegen* + Genitiv dişil: der defekten Heizung.' },
    { id: 'de-b1-h04.q2', t: 'mc', q: 'Usta ne zaman gelecek?', o: ['Salı günü sekiz ile on iki arasında', 'Pazartesi öğleden sonra', 'Salı günü akşam', 'Perşembe sabahı'], a: 0,
      why: { 1: 'Pazartesi geçmiyor; *Dienstag* (salı).', 2: 'Salı günü ama **sabah** (*zwischen acht und zwölf Uhr*).', 3: 'Perşembe geçmiyor.' },
      e: '*kommt am Dienstag zwischen acht und zwölf Uhr.* – *zwischen … und …* = arasında.' },
    { id: 'de-b1-h04.q3', t: 'gap', q: 'Bitte geben Sie einem ___ den Schlüssel.', a: ['Nachbarn'],
      wrong: { 'Nachbar': 'n-Deklination: Dativ’de **-n**: einem Nachbar**n**.', 'Nachbarns': 'n-Deklination’da *-ns* yok; Dativ **-n**.' },
      e: '*geben* + Dativ + Akkusativ: *einem Nachbarn* (n-Deklination) *den Schlüssel*.' },
    { id: 'de-b1-h04.q4', t: 'mc', q: 'Randevu uymazsa ne yapılmalı?', o: ['İki gün içinde yönetimi geri aramalı.', 'Ustaya doğrudan telefon etmeli.', 'Mektup yazmalı.', 'Hiçbir şey yapmamalı.'], a: 0,
      why: { 1: 'Usta için bir numara verilmiyor; **yönetime** dönülüyor.', 2: 'Mektup yerine telefon isteniyor.', 3: 'Yönetim geri dönüş bekliyor.' },
      e: '*Falls der Termin nicht passt, rufen Sie uns innerhalb von zwei Tagen zurück.* – *innerhalb von* + Dativ (zwei Tagen).' }
  ]
});

K.addText('de-b1-h05', {
  level: 'B1', kind: 'listen', genre: 'gespraech', plays: 2,
  title: 'Die neue Wohnung', sub: 'Yeni daire',
  lines: [
    { s: 'Lena', g: 'f', t: 'Hast du schon eine neue Wohnung gefunden?', n: 'Yeni bir daire buldun mu?' },
    { s: 'Tim', g: 'm', t: 'Ja! Ich habe eine helle Wohnung mit einem kleinen Balkon gesehen.', n: 'Evet! Aydınlık, küçük balkonlu bir daire gördüm.' },
    { s: 'Lena', g: 'f', t: 'Das klingt gut. Wo liegt sie?', n: 'Kulağa güzel geliyor. Nerede?' },
    { s: 'Tim', g: 'm', t: 'In einer ruhigen Straße, nur zehn Minuten vom Bahnhof.', n: 'Sakin bir sokakta, istasyona sadece on dakika.' },
    { s: 'Lena', g: 'f', t: 'Und wie ist die Miete?', n: 'Peki kira nasıl?' },
    { s: 'Tim', g: 'm', t: 'Wegen der guten Lage ist sie etwas teuer. Aber der Vermieter, den ich heute getroffen habe, ist sehr freundlich. Er hat mir den Vertrag gezeigt. Die Nebenkosten sind im Preis nicht enthalten.', n: 'İyi konum nedeniyle biraz pahalı. Ama bugün tanıştığım ev sahibi çok nazik. Bana sözleşmeyi gösterdi. Yan giderler fiyata dahil değil.' },
    { s: 'Lena', g: 'f', t: 'Hast du schon unterschrieben?', n: 'Çoktan imzaladın mı?' },
    { s: 'Tim', g: 'm', t: 'Noch nicht. Ich möchte erst mit einem Experten über den Vertrag sprechen.', n: 'Henüz değil. Önce sözleşme hakkında bir uzmanla konuşmak istiyorum.' }
  ],
  gloss: { 'unterschrieben': 'imzaladın (unterschreiben)', 'Lage': 'konum', 'enthalten': 'dahil', 'Vertrag': 'sözleşme' },
  questions: [
    { id: 'de-b1-h05.q1', t: 'mc', q: 'Tim nasıl bir daire gördü?', o: ['Aydınlık, küçük balkonlu bir daire', 'Karanlık, geniş bir daire', 'Eşyalı büyük bir daire', 'Bahçeli bir ev'], a: 0,
      why: { 1: '*hell* = aydınlık; karanlık değil.', 2: 'Eşyalıdan söz edilmiyor.', 3: 'Bahçeden söz edilmiyor; küçük bir balkon var.' },
      e: '*eine helle Wohnung mit einem kleinen Balkon*: Akkusativ dişil, belirsiz artikel → **-e**; *mit einem* Dativ eril → **-en**.' },
    { id: 'de-b1-h05.q2', t: 'mc', q: 'Kira neden biraz pahalı?', o: ['Konum iyi olduğu için', 'Daire çok büyük olduğu için', 'Yeni yenilendiği için', 'Ev sahibi çok para istediği için'], a: 0,
      why: { 1: 'Büyüklükten söz edilmiyor.', 2: 'Yenilemeden söz edilmiyor.', 3: 'Ev sahibi nazik; nedeni **konum** (*wegen der guten Lage*).' },
      e: '*Wegen der guten Lage ist sie etwas teuer.* – *wegen* + Genitiv dişil: der guten Lage.' },
    { id: 'de-b1-h05.q3', t: 'listen', say: 'Der Vermieter, den ich heute getroffen habe, ist sehr freundlich.', q: 'Cümleyi dinle. Hangisi duyuldu?', o: ['Der Vermieter, den ich heute getroffen habe, ist sehr freundlich.', 'Der Vermieter, der heute gekommen ist, ist sehr freundlich.', 'Der Vermieter, dem ich geholfen habe, ist sehr freundlich.', 'Die Vermieterin, die ich heute getroffen habe, ist sehr freundlich.'], a: 0,
      why: { 1: 'Cümlede *den ich … getroffen habe* vardı (nesne, Akkusativ), *der … gekommen ist* değil.', 2: '*dem ich geholfen habe* Dativ’dir; duyduğun Akkusativ **den**.', 3: '*Vermieterin* dişil olurdu; ev sahibi **erkek** (*der Vermieter*).' },
      e: '*den ich getroffen habe*: Akkusativ eril → **den**; fiil grubu sonda.' },
    { id: 'de-b1-h05.q4', t: 'cloze', q: 'Cümleyi tamamla:', text: 'Tim hat eine {1} Wohnung mit einem {2} Balkon gesehen. (hell, klein)',
      gaps: {
        '1': { a: ['helle'], wrong: { 'hell': 'İsmin önünde sıfat çekilir: hell**e**.', 'hellen': '*eine* Akkusativ dişil → **-e**.' } },
        '2': { a: ['kleinen'], wrong: { 'kleine': '*mit einem* Dativ → **-en**.', 'kleiner': '*-er* sadece Nominativ erildedir.' } }
      },
      e: 'Akkusativ dişil: *eine helle Wohnung*; Dativ eril: *mit einem kleinen Balkon*.' }
  ]
});

K.addText('de-b1-h06', {
  level: 'B1', kind: 'listen', genre: 'interview', plays: 2,
  title: 'Ein Verein für die Kinder des Viertels', sub: 'Mahalle çocukları için bir dernek',
  lines: [
    { s: 'Reporter', g: 'm', t: 'Frau Becker, Sie leiten den Verein, der im Stadtteil Kinder unterstützt. Wie hat alles angefangen?', n: 'Becker Hanım, semtte çocuklara destek veren derneği yönetiyorsunuz. Her şey nasıl başladı?' },
    { s: 'Frau Becker', g: 'f', t: 'Vor fünf Jahren haben einige Nachbarn, die in unserer Straße wohnen, ein Fest für die Kinder des Viertels gemacht. Wegen des großen Erfolgs haben wir danach einen Verein gegründet.', n: 'Beş yıl önce sokağımızda oturan birkaç komşu, mahalle çocukları için bir şenlik yaptı. Büyük başarı nedeniyle ardından bir dernek kurduk.' },
    { s: 'Reporter', g: 'm', t: 'Was macht der Verein heute?', n: 'Dernek bugün ne yapıyor?' },
    { s: 'Frau Becker', g: 'f', t: 'Wir bieten Hausaufgabenhilfe an. Die Studenten, die uns freiwillig helfen, kommen zweimal pro Woche. Trotz der vielen Arbeit macht es uns große Freude. Im Sommer machen wir sogar einen Ausflug mit allen Kindern.', n: 'Ödev yardımı sunuyoruz. Bize gönüllü yardım eden öğrenciler haftada iki kez geliyor. Çok işe rağmen bize büyük keyif veriyor. Yazın bütün çocuklarla bir gezi bile yapıyoruz.' }
  ],
  gloss: { 'Verein': 'dernek', 'Erfolgs': 'başarının', 'leiten': 'yönetmek', 'bieten': 'sunmak (anbieten)', 'trotz': 'rağmen', 'Stadtteil': 'semt', 'Viertel': 'mahalle', 'unterstützt': 'destekler (unterstützen)', 'gegründet': 'kurduk (gründen)', 'Hausaufgabenhilfe': 'ödev yardımı', 'Erfolg': 'başarı', 'angefangen': 'başladı (anfangen)' },
  questions: [
    { id: 'de-b1-h06.q1', t: 'mc', q: 'Dernek nasıl ortaya çıktı?', o: ['Komşular çocuklar için bir şenlik yaptı ve ardından dernek kuruldu.', 'Belediye bir dernek kurdu.', 'Bir okulun öğretmenleri bir araya geldi.', 'Öğrenciler ödev yardımıyla başladı.'], a: 0,
      why: { 1: 'Belediyeden söz edilmiyor; **komşular** başlattı.', 2: 'Öğretmenlerden söz edilmiyor.', 3: 'Ödev yardımı **sonradan** geldi.' },
      e: '*einige Nachbarn, die in unserer Straße wohnen* – Relativsatz: Nominativ çoğul → **die**; fiil sonda.' },
    { id: 'de-b1-h06.q2', t: 'mc', q: 'Dernek neden kuruldu?', o: ['Şenliğin büyük başarısı nedeniyle', 'Para toplamak için', 'Belediyenin isteği üzerine', 'Okulların kapanması nedeniyle'], a: 0,
      why: { 1: 'Para toplamaktan söz edilmiyor.', 2: 'Belediyeden söz edilmiyor.', 3: 'Okulların kapanmasından söz edilmiyor.' },
      e: '*Wegen des großen Erfolgs haben wir einen Verein gegründet.* – *wegen* + Genitiv eril: des großen Erfolgs.' },
    { id: 'de-b1-h06.q3', t: 'mc', q: 'Derneğe kimler yardım ediyor?', o: ['Gönüllü öğrenciler', 'Öğretmenler', 'Ebeveynler', 'Belediye çalışanları'], a: 0,
      why: { 1: 'Öğretmenlerden söz edilmiyor.', 2: 'Ebeveynlerden söz edilmiyor.', 3: 'Belediye çalışanlarından söz edilmiyor.' },
      e: '*Die Studenten, die uns freiwillig helfen …* – *freiwillig* = gönüllü; Relativsatz: Nominativ çoğul → **die**.' },
    { id: 'de-b1-h06.q4', t: 'listen', say: 'Trotz der vielen Arbeit macht es uns große Freude.', q: 'Cümleyi dinle. Ne anlama geliyor?', o: ['Çok işe rağmen bize büyük keyif veriyor.', 'Çok iş olduğu için keyif almıyoruz.', 'İş bitince keyif alacağız.', 'Az iş olduğu için keyif alıyoruz.'], a: 0,
      why: { 1: '*trotz* = -e rağmen; *wegen* olsaydı “yüzünden” olurdu.', 2: 'Cümle şimdiki zamanda: *macht … Freude*.', 3: '*der vielen Arbeit* = çok iş; az değil.' },
      e: '*trotz* + Genitiv: *die viele Arbeit* (dişil tekil) → Genitiv: **der vielen Arbeit**.' }
  ]
});

})(window.KOPRU);
