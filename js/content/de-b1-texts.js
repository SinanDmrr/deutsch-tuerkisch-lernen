/* Deutsch B1 – Lesetexte und Hörtexte (Erklärungen/Fragen auf Türkisch)
 * Paket 1 „Erzählen im Text“: Lesetexte de-b1-r01–r03, Hörtexte de-b1-h01–h03.
 * Fragen-IDs '<textId>.q<n>' sind fest und werden nie wiederverwendet.
 */
(function (K) {

K.addText('de-b1-r01', {
  level: 'B1', kind: 'read', genre: 'email',
  title: 'Bewerbung um eine Stelle', sub: 'Bir işe başvuru',
  body: [
    "Sehr geehrte Damen und Herren,",
    "mit großem Interesse habe ich Ihre Anzeige gelesen. Ich möchte mich um die Stelle in Ihrer Abteilung bewerben und erzähle Ihnen kurz etwas über mich.",
    "Ich wurde in Izmir geboren und wuchs in einem kleinen Dorf auf. Als ich zwölf war, zogen wir nach Deutschland. Nachdem ich die Schule abgeschlossen hatte, machte ich eine Ausbildung bei einer Bank. Während der Ausbildung arbeitete ich in drei Abteilungen und sammelte viele Erfahrungen. Danach wechselte ich in eine größere Firma. Seitdem arbeite ich dort und besuche abends einen Kurs.",
    "Schon während der Ausbildung habe ich ein Praktikum in der Personalabteilung gemacht. Dort habe ich gelernt, dass ein guter Abschluss wichtig ist, dass man aber ohne Berufserfahrung und Verantwortung nicht weit kommt.",
    "In meiner jetzigen Firma arbeite ich in Teilzeit, denn abends besuche ich eine Weiterbildung. Wenn viel zu tun ist, mache ich auch Überstunden. Besprechungen mit dem Team finde ich nützlich, und in der Kantine tauschen wir oft Ideen aus. Trotzdem möchte ich eine neue Chance nutzen, weil meine Qualifikation inzwischen besser ist als meine Aufgaben.",
    "Meine Eltern waren früher einmal arbeitslos, deshalb weiß ich, wie wichtig ein sicherer Arbeitgeber ist. Mein Bruder ist dagegen selbstständig, aber das wäre nichts für mich, denn ich arbeite lieber im Team. Ich erfülle Ihre Anforderungen. Ich stehe Ihnen jederzeit gern für ein Gespräch zur Verfügung. Im Anhang finden Sie meinen Lebenslauf und eine Kopie meines Zeugnisses.",
    "Über eine Einladung zum Vorstellungsgespräch würde ich mich sehr freuen.",
    "Mit freundlichen Grüßen",
    "Elif Kaya"
  ],
  gloss: { 'Anzeige': 'ilan', 'Stelle': 'iş, kadro', 'Abteilung': 'bölüm', 'wuchs': 'büyüdü (aufwachsen)', 'Ausbildung': 'meslek eğitimi', 'Erfahrungen': 'deneyimler', 'wechselte': 'geçti, değiştirdi (wechseln)', 'Einladung': 'davet', 'Vorstellungsgespräch': 'iş görüşmesi', "Praktikum": "staj", "Personalabteilung": "personel bölümü", "Abschluss": "diploma, bitirme belgesi", "Berufserfahrung": "iş deneyimi", "Verantwortung": "sorumluluk", "Teilzeit": "yarı zamanlı", "Weiterbildung": "ek eğitim", "Überstunden": "fazla mesai", "Besprechungen": "toplantılar", "Kantine": "yemekhane", "Chance": "şans", "Qualifikation": "nitelik", "arbeitslos": "işsiz", "Arbeitgeber": "işveren", "selbstständig": "serbest, kendi işini yapan", "Anforderungen": "aranan şartlar", "Anhang": "ek (dosya)", "Kopie": "fotokopi", "Zeugnisses": "karne, belge", "nützlich": "faydalı" },
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
      e: '**als** = geçmişte tek sefer, **nachdem** = sonra, **während** = aynı anda, **seitdem** = o zamandan beri (hâlâ sürüyor).' },
    {"id": "de-b1-r01.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın bu e-postanın ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Elif işinden ayrılmak istiyor ve patronuna veda ediyor.", "Elif bir kursa kayıt olmak için bilgi istiyor.", "Elif bir iş ilanına başvuruyor; kendini, eğitimini ve şimdiki işini anlatıp mülakata davet edilmek istiyor.", "Elif işsiz kaldığını bildiriyor ve yardım istiyor."], "a": 2, "why": {"0": "Elif zaten çalışıyor ama istifa etmiyor; yeni bir işe **başvuruyor**.", "1": "Kurs sadece akşamları devam ettiği bir ayrıntı; e-postanın amacı kurs değil, iş başvurusu.", "3": "Eskiden ailesi işsiz kalmıştı (*arbeitslos*), Elif ise çalışıyor ve yeni bir kadro arıyor."}, "e": "Sprachmittlung: Ana fikri kendi sözlerinle aktarırsın, her ayrıntıyı değil. *Ich möchte mich um die Stelle bewerben* = başvuruyorum; sonunda *Einladung zum Vorstellungsgespräch* = mülakat daveti."}
  ]
});

K.addText('de-b1-r02', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Eine Wanderung mit Hindernissen', sub: 'Aksiliklerle dolu bir doğa yürüyüşü',
  body: [
    "Letzten Sommer machten wir eine Wanderung in den Bergen. Wir standen früh auf und fuhren mit dem Auto zum Parkplatz. Zuerst schien die Sonne, und wir gingen fröhlich los.",
    "Am Abend vorher hatte ich die Wettervorhersage gelesen: sonnig, nur am Nachmittag ein paar Wolken. Deshalb hielten wir das Wetter für sicher. Die Landschaft war wunderschön, mit grünen Wiesen, einem kleinen Bach und vielen Tieren. Plötzlich begegnete uns ein Reh auf dem Weg. Wir erschraken beide, aber das Tier lief sofort weg.",
    "Nach zwei Stunden kam plötzlich ein Gewitter. Wir hatten keine Regenjacken dabei und waren bald nass. Als es endlich aufhörte, entdeckten wir einen kleinen Weg zu einer Hütte. Dort tranken wir heißen Tee, bis die Sonne wieder schien.",
    "Am Nachmittag erreichten wir den Gipfel. Die Aussicht war wunderbar, und wir waren sehr stolz. Auf dem Rückweg verliefen wir uns fast, aber zum Glück fanden wir den Weg wieder.",
    "Kurz vor dem Parkplatz rutschte meine Freundin ausgerechnet an einer nassen Stelle aus. Ihr Knie tat sehr weh, und auch die Schulter schmerzte. Glücklicherweise hatte ich ein Pflaster und eine Salbe in der Tasche. Weil ihr ein bisschen schwindlig war, machten wir eine lange Pause. Allmählich wurde sie ruhiger, und ich war erleichtert, dass die Verletzung nicht schlimm war. Am Abend waren wir erschöpft, aber glücklich.",
    "Am nächsten Tag hatte ich eine Erkältung mit Husten, Schnupfen und Halsschmerzen, denn wir waren im Gewitter nass geworden. Trotzdem war es ein schönes Erlebnis, und mittlerweile lachen wir darüber. Beinahe hätte ich vergessen zu erzählen: Zufällig trafen wir in der Hütte einen Bekannten wieder, der uns anschließend zum Spaziergang am See einlud. Diese Erinnerung bleibt uns sicher noch lange."
  ],
  gloss: { 'fröhlich': 'neşeli, keyifli', 'dabei': 'yanımızda', 'Wanderung': 'doğa yürüyüşü', 'schien': 'parlıyordu (scheinen)', 'Regenjacken': 'yağmurluklar', 'Hütte': 'dağ evi, kulübe', 'Gipfel': 'zirve', 'Aussicht': 'manzara', 'Rückweg': 'dönüş yolu', 'verliefen': 'yolumuzu şaşırdık (sich verlaufen)', 'entdeckten': 'keşfettik (entdecken)', 'erschöpft': 'bitkin', "Wettervorhersage": "hava durumu tahmini", "sonnig": "güneşli", "Wolken": "bulutlar", "Landschaft": "manzara", "Tieren": "hayvanlar", "begegnete": "rastladı (begegnen)", "erschraken": "korktuk (erschrecken)", "Reh": "karaca", "ausgerechnet": "tam da", "Knie": "diz", "Schulter": "omuz", "Glücklicherweise": "neyse ki", "Pflaster": "yara bandı", "Salbe": "merhem", "schwindlig": "başı dönen", "Allmählich": "yavaş yavaş", "erleichtert": "rahatlamış", "Verletzung": "yaralanma", "Erkältung": "soğuk algınlığı", "Husten": "öksürük", "Schnupfen": "nezle", "Halsschmerzen": "boğaz ağrısı", "Erlebnis": "yaşanmış olay", "mittlerweile": "şimdi artık", "Beinahe": "neredeyse", "Zufällig": "tesadüfen", "anschließend": "ardından", "Spaziergang": "gezinti", "Erinnerung": "anı", "rutschte": "kaydı (ausrutschen)", "schmerzte": "ağrıdı" },
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
      e: 'Olayların sırası: erken kalktılar, iki saat sonra fırtına, sonra çay, öğleden sonra zirve, akşam yorgunluk.' },
    {"id": "de-b1-r02.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın yazının ne anlattığını soruyor. Hangi özet doğru?", "o": ["Yazar dağda bir kaza geçirip hastaneye kaldırılıyor ve yürüyüşü hiç sevmediğini anlatıyor.", "Yazar ve arkadaşı güzel bir dağ yürüyüşüne çıkıyor; fırtına, bir kayma ve nezle gibi aksiliklere rağmen yürüyüş güzel bir anı olarak kalıyor.", "Yazar bir hava durumu raporunu eleştiriyor ve yürüyüşü iptal ediyor.", "Yazar yürüyüşte kaybolup günlerce dağ evinde kalıyor."], "a": 1, "why": {"0": "Hastaneden söz edilmiyor; yazı ve sonu olumlu: *schönes Erlebnis*.", "2": "Yürüyüş iptal edilmedi; tam tersine zirveye ulaştılar.", "3": "Kaybolmaya ramak kaldı (*verliefen uns fast*) ama yolu buldular; dağ evinde sadece kısa süre çay içtiler."}, "e": "Sprachmittlung: Önemli olayları sıralayıp genel tonu söylersin. Yürüyüş güzel başladı, aksilikler oldu (*Gewitter, Ausrutschen, Erkältung*), sonuç olumlu (*schönes Erlebnis, Erinnerung*)."}
  ]
});

K.addText('de-b1-r03', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Baum stürzt auf Auto', sub: 'Ağaç arabanın üzerine devrildi',
  body: [
    "Am Mittwochabend ereignete sich in der Innenstadt ein Unfall. Bei einem starken Sturm stürzte gegen 19 Uhr ein großer Baum auf ein geparktes Auto. Viele Menschen blieben stehen und schauten zu.",
    "Zum Glück verletzte sich niemand, denn die Fahrerin war kurz vorher ausgestiegen. Sie wollte nur schnell ein Paket zur Post bringen.",
    "Ein Passant stand kurz vorher an der Ecke gegenüber der Kirche. Er erschrak so sehr, dass ihm schwindlig wurde. Ein Krankenwagen brachte ihn zur Notaufnahme, wo ihn ein Arzt untersuchte. Nach einer Stunde durfte er wieder nach Hause. Verletzt wurde aber niemand.",
    "Die Feuerwehr kam nach wenigen Minuten. Nachdem die Männer den Baum weggeräumt hatten, konnte der Verkehr wieder fließen. Die Straße war fast eine Stunde gesperrt. Der Schaden am Auto ist groß. Die Polizei sucht jetzt Zeugen.",
    "Die Straße führt Richtung Brücke, deshalb gab es lange Staus. Viele Fahrgäste mussten andere Verkehrsmittel nehmen, weil die Busse eine andere Strecke fuhren. Eine Tankstelle in der Nähe schloss für kurze Zeit. Die Wettervorhersage hatte zwar vor Wolken und starkem Wind gewarnt, aber nicht vor einem so schweren Sturm.",
    "Auf Fotos im Internet sieht man, wie groß der Baum war. Viele Leser schrieben in den Kommentaren, wie schnell eine Katastrophe geschehen kann. Ein Experte sagte, dass der Unfall kein Zufall war, denn der Baum war alt und die Wurzeln waren schwach. Die Stadt will jetzt alle Bäume in der Fußgängerzone und am Spielplatz prüfen."
  ],
  gloss: { 'stürzte': 'devrildi (stürzen)', 'geparktes': 'park edilmiş', 'ausgestiegen': 'inmişti (aussteigen)', 'weggeräumt': 'kaldırmıştı (wegräumen)', 'gesperrt': 'kapalıydı (trafiğe)', 'Verkehr': 'trafik', 'Fahrerin': 'kadın sürücü', "Passant": "yoldan geçen", "Ecke": "köşe", "gegenüber": "karşısında", "Kirche": "kilise", "erschrak": "korktu (erschrecken)", "schwindlig": "başı dönen", "Krankenwagen": "ambulans", "Notaufnahme": "acil servis", "untersuchte": "muayene etti", "Richtung": "yön", "Brücke": "köprü", "Fahrgäste": "yolcular", "Verkehrsmittel": "ulaşım araçları", "Tankstelle": "benzin istasyonu", "Wettervorhersage": "hava tahmini", "Wolken": "bulutlar", "Leser": "okuyucular", "Katastrophe": "felaket", "Zufall": "tesadüf", "Wurzeln": "kökler", "Fußgängerzone": "yaya bölgesi", "Spielplatz": "oyun parkı", "Staus": "trafik sıkışıklığı", "Experte": "uzman" },
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
      e: 'Haber dilinde Präteritum (*kam, stürzte*) ve Plusquamperfekt (*war ausgestiegen*) birlikte kullanılır; polisin *sucht* fiili ise şimdiki zamandır (hâlâ arıyor).' },
    {"id": "de-b1-r03.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın haberin ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Şehir merkezinde fırtınada bir ağaç arabaya devrildi; kimse yaralanmadı, itfaiye yolu açtı ve şehir ağaçları kontrol edecek.", "Bir araba kazası oldu ve sürücü ağır yaralanarak hastaneye kaldırıldı.", "Şehir yeni bir köprü yapacağını açıkladı.", "İtfaiye bir evdeki yangını söndürdü ve ağaçlar zarar gördü."], "a": 0, "why": {"1": "Sürücü kazadan önce arabadan inmişti ve kimse yaralanmadı.", "2": "Köprü sadece yol tarifinde geçiyor; haber yeni bir köprü hakkında değil.", "3": "Yangından söz edilmiyor; itfaiye ağacı kaldırdı."}, "e": "Sprachmittlung: Haberde *Was? Wo? Wann? Folgen?* sorularını kısaca cevaplarsın: fırtına, ağaç, araba, kimse yaralanmadı, yol kapandı, şehir önlem alacak."}
  ]
});

K.addText('de-b1-h01', {
  level: 'B1', kind: 'listen', genre: 'gespraech', plays: 2,
  title: 'Nach dem Vorstellungsgespräch', sub: 'İş görüşmesinden sonra',
  lines: [
    {"s": "Anna", "g": "f", "t": "Wie war dein Vorstellungsgespräch gestern?", "n": "Dünkü iş görüşmen nasıldı?"},
    {"s": "Can", "g": "m", "t": "Ziemlich aufregend. Als ich ankam, warteten schon drei andere Bewerber.", "n": "Oldukça heyecan vericiydi. Ben geldiğimde üç aday daha bekliyordu."},
    {"s": "Anna", "g": "f", "t": "Und hattest du dich gut vorbereitet?", "n": "Peki iyi hazırlanmış mıydın?"},
    {"s": "Can", "g": "m", "t": "Ja, ich hatte die ganze Woche geübt. Nachdem ich von meinen Erfahrungen erzählt hatte, stellte der Chef viele Fragen. Er sagte, dass er sich bis Freitag meldet. Jetzt warte ich nervös.", "n": "Evet, bütün hafta çalışmıştım. Deneyimlerimden söz ettikten sonra patron çok soru sordu. Cuma gününe kadar haber vereceğini söyledi. Şimdi heyecanla bekliyorum."},
    {"s": "Anna", "g": "f", "t": "Hat der Chef über das Gehalt gesprochen?", "n": "Patron maaştan söz etti mi?"},
    {"s": "Can", "g": "m", "t": "Ja, wir haben kurz verhandelt. Die Bedingungen sind gut: sechs Monate Probezeit, danach ein Vertrag mit einer Laufzeit von zwei Jahren. Seine Erwartungen sind hoch, aber ich bin ehrgeizig.", "n": "Evet, kısaca pazarlık ettik. Koşullar iyi: altı ay deneme süresi, ardından iki yıllık bir sözleşme. Beklentileri yüksek ama ben hırslıyım."},
    {"s": "Anna", "g": "f", "t": "Und hast du auch deinen künftigen Vorgesetzten getroffen?", "n": "Peki gelecekteki amirini de gördün mü?"},
    {"s": "Can", "g": "m", "t": "Nein, er war krank. Seine Vertretung, eine freundliche Frau, hat mich gelobt, weil ich mich so gut vorbereitet hatte. Nur eine kleine Kritik gab es: Meine Berufserfahrung ist noch gering.", "n": "Hayır, hastaydı. Vekili, güler yüzlü bir kadın, bu kadar iyi hazırlandığım için beni övdü. Sadece küçük bir eleştiri vardı: İş deneyimim henüz az."},
    {"s": "Anna", "g": "f", "t": "Und was hast du darauf gesagt?", "n": "Sen buna ne dedin?"},
    {"s": "Can", "g": "m", "t": "Ich habe versprochen, eine Weiterbildung zu machen. Das hat sie überzeugt.", "n": "Bir ek eğitim yapacağıma söz verdim. Bu onu ikna etti."}
  ],
  gloss: { "Probezeit": "deneme süresi", 'aufregend': 'heyecan verici', 'Bewerber': 'aday', 'vorbereitet': 'hazırlanmış', 'geübt': 'çalışmıştım, pratik yapmıştım (üben)', 'Erfahrungen': 'deneyimler', "verhandelt": "pazarlık ettik (verhandeln)", "Bedingungen": "koşullar", "Laufzeit": "süre", "Erwartungen": "beklentiler", "ehrgeizig": "hırslı", "Vorgesetzten": "amir", "Vertretung": "vekil", "gelobt": "övdü (loben)", "Kritik": "eleştiri", "Berufserfahrung": "iş deneyimi", "versprochen": "söz verdim (versprechen)", "Weiterbildung": "ek eğitim", "überzeugt": "ikna etti (überzeugen)", "Gehalt": "maaş" },
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
      e: '*ankommen* düzensiz: **kam … an** (yan cümlede *ankam*). *üben* düzenli: Partizip II **geübt** (ge + üb + t).' },
    {"id": "de-b1-h01.q5", "t": "mc", "q": "Türkçe konuşan bir arkadaşın konuşmanın ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Can iş görüşmesinden sonra Anna’ya nasıl geçtiğini anlatıyor: heyecanlıydı, koşullar iyi, küçük bir eleştiri aldı ve sonucu bekliyor.", "Can işten ayrılıyor ve Anna’dan tavsiye istiyor.", "Can ve Anna bir toplantı planlıyor.", "Can işe kabul edildiğini ve hemen başladığını anlatıyor."], "a": 0, "why": {"1": "Can işten ayrılmıyor; yeni bir kadro için görüşmeye girdi.", "2": "Toplantı planı yok; Can görüşmesini anlatıyor.", "3": "Can henüz cevap almadı, bekliyor: *Jetzt warte ich nervös*."}, "e": "Sprachmittlung: Olayların sırası (görüşme, soru, koşullar, eleştiri, bekleme) ve sonuç (henüz cevap yok) özetlenir."}
  ]
});

K.addText('de-b1-h02', {
  level: 'B1', kind: 'listen', genre: 'radio', plays: 2,
  title: 'Rückblick auf das Sommerfest', sub: 'Yaz şenliğine bakış',
  lines: [
    {"s": "Moderatorin", "g": "f", "t": "Guten Morgen, liebe Hörerinnen und Hörer! Gestern fand im Stadtpark das große Sommerfest statt. Hören wir unseren Reporter.", "n": "Günaydın sevgili dinleyiciler! Dün şehir parkında büyük yaz şenliği yapıldı. Muhabirimizi dinleyelim."},
    {"s": "Reporter", "g": "m", "t": "Schon am Vormittag kamen viele Familien. Während die Kinder spielten, hörten die Eltern Musik. Als das Konzert am Abend begann, war der Park voll. Nachdem es dunkel geworden war, gab es ein schönes Feuerwerk. So viele Besucher hatte das Fest noch nie gehabt.", "n": "Daha öğleden önce birçok aile geldi. Çocuklar oynarken ebeveynler müzik dinledi. Akşam konser başladığında park doluydu. Hava karardıktan sonra güzel bir havai fişek gösterisi yapıldı. Şenliğe şimdiye kadar hiç bu kadar çok ziyaretçi gelmemişti."},
    {"s": "Moderatorin", "g": "f", "t": "Und was gab es zu essen?", "n": "Peki yemek olarak ne vardı?"},
    {"s": "Reporter", "g": "m", "t": "Viele leckere Gerichte aus aller Welt: scharfe Nudeln mit Zwiebeln, Salate und Kuchen. Auf dem Tisch lagen Teller, Löffel, Gabeln und Messer, und die Schlange war lang. Auch das Programm war bunt. Eine Gruppe hat getanzt und gesungen, und die Mannschaft des Sportvereins zeigte ihr Training.", "n": "Dünyanın dört bir yanından lezzetli yemekler vardı: soğanlı acılı makarna, salatalar ve kek. Masada tabaklar, kaşıklar, çatallar ve bıçaklar duruyordu, sıra uzundu. Program da renkliydi. Bir grup dans edip şarkı söyledi, spor kulübünün takımı da antrenmanını gösterdi."},
    {"s": "Moderatorin", "g": "f", "t": "Frau Lehmann, Sie haben die Veranstaltung organisiert. Wie zufrieden sind Sie?", "n": "Bayan Lehmann, etkinliği siz düzenlediniz. Ne kadar memnunsunuz?"},
    {"s": "Frau Lehmann", "g": "f", "t": "Sehr zufrieden. Der Eintritt war frei, aber viele Gäste haben etwas gespendet. Damit unterstützt der Verein ein Theater für Kinder. Und nächstes Jahr feiern wir ein Jubiläum. Ich bin schon gespannt, welche Überraschung wir dann planen.", "n": "Çok memnunum. Giriş ücretsizdi ama birçok konuk bağış yaptı. Dernek bununla çocuklar için bir tiyatroyu destekliyor. Gelecek yıl da bir yıldönümü kutlayacağız. O zaman hangi sürprizi planlayacağımızı şimdiden merak ediyorum."}
  ],
  gloss: { 'Feuerwerk': 'havai fişek', 'Besucher': 'ziyaretçiler', 'Hörerinnen': 'kadın dinleyiciler', 'Reporter': 'muhabir', 'Vormittag': 'öğleden önce', "Gerichte": "yemekler", "scharfe": "acı", "Nudeln": "makarna", "Zwiebeln": "soğanlar", "Teller": "tabaklar", "Löffel": "kaşıklar", "Gabeln": "çatallar", "Messer": "bıçaklar", "getanzt": "dans etti (tanzen)", "gesungen": "şarkı söyledi (singen)", "Mannschaft": "takım", "Sportvereins": "spor kulübünün", "Training": "antrenman", "Veranstaltung": "etkinlik", "Eintritt": "giriş", "gespendet": "bağış yaptı (spenden)", "Theater": "tiyatro", "Jubiläum": "yıldönümü", "gespannt": "meraklı", "Überraschung": "sürpriz", "leckere": "lezzetli" },
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
    {"s": "Reporter", "g": "m", "t": "Frau Aksoy, wann sind Sie nach Deutschland gekommen?", "n": "Sayın Aksoy, Almanya’ya ne zaman geldiniz?"},
    {"s": "Frau Aksoy", "g": "f", "t": "Das war vor vielen Jahren. Als ich ankam, sprach ich fast kein Deutsch. Ich hatte nur einen kleinen Koffer dabei.", "n": "Uzun yıllar önceydi. Geldiğimde neredeyse hiç Almanca konuşmuyordum. Yanımda sadece küçük bir bavul vardı."},
    {"s": "Reporter", "g": "m", "t": "Und wie ging es weiter?", "n": "Peki sonra nasıl devam etti?"},
    {"s": "Frau Aksoy", "g": "f", "t": "Zuerst arbeitete ich in einer Bäckerei. Abends besuchte ich einen Sprachkurs. Seitdem ich Deutsch spreche, fühle ich mich hier zu Hause.", "n": "Önce bir fırında çalıştım. Akşamları dil kursuna gittim. Almanca konuşmaya başladığımdan beri kendimi burada evimde hissediyorum."},
    {"s": "Reporter", "g": "m", "t": "Was war am Anfang am schwersten?", "n": "Başta en zor olan neydi?"},
    {"s": "Frau Aksoy", "g": "f", "t": "Ich war oft einsam und traurig. Ich vermisste meine Familie, und es dauerte lange, bis ich mich eingelebt hatte. Ich musste mich an das Wetter, das Essen und die vielen Regeln gewöhnen.", "n": "Çoğu zaman yalnızdım ve üzgündüm. Ailemi özlüyordum ve alışmam uzun sürdü. Havaya, yemeğe ve birçok kurala alışmam gerekiyordu."},
    {"s": "Reporter", "g": "m", "t": "Sie haben dann Ihren Mann kennengelernt?", "n": "Sonra eşinizle tanıştınız, değil mi?"},
    {"s": "Frau Aksoy", "g": "f", "t": "Ja, in der Bäckerei. Wir haben uns ineinander verliebt. Mein Geburtsort ist ein kleines Dorf, mein Wohnort ist schon seit Jahrzehnten eine Großstadt. Vor zwei Jahren habe ich die deutsche Staatsangehörigkeit beantragt. Meine Tochter macht jetzt ein Studium.", "n": "Evet, fırında. Birbirimize âşık olduk. Doğum yerim küçük bir köy, yaşadığım yer ise onlarca yıldır büyük bir şehir. İki yıl önce Alman vatandaşlığına başvurdum. Kızım şimdi üniversitede okuyor."},
    {"s": "Reporter", "g": "m", "t": "Haben Sie einen Wunsch für die Zukunft?", "n": "Gelecek için bir dileğiniz var mı?"},
    {"s": "Frau Aksoy", "g": "f", "t": "Ja, dass die Gesellschaft offener wird und dass viele Menschen eine schöne Begegnung erleben, so wie ich damals.", "n": "Evet, toplumun daha açık olması ve birçok insanın benim o zaman yaşadığım gibi güzel bir karşılaşma yaşaması."}
  ],
  gloss: { 'Koffer': 'bavul', 'Bäckerei': 'fırın', 'Sprachkurs': 'dil kursu', 'dabei': 'yanında', "einsam": "yalnız", "traurig": "üzgün", "vermisste": "özlüyordum (vermissen)", "eingelebt": "alışmış (sich einleben)", "gewöhnen": "alışmak", "Regeln": "kurallar", "verliebt": "âşık oldu (sich verlieben)", "Geburtsort": "doğum yeri", "Wohnort": "yaşanılan yer", "Jahrzehnten": "on yıllardır", "Großstadt": "büyük şehir", "Staatsangehörigkeit": "vatandaşlık", "beantragt": "başvurdum (beantragen)", "Studium": "üniversite eğitimi", "Wunsch": "dilek", "Gesellschaft": "toplum", "Begegnung": "karşılaşma", "erleben": "yaşamak" },
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
      e: '*Seitdem ich Deutsch spreche, …* – seitdem + Präsens: o zamandan beri hâlâ devam ediyor; fiil yan cümlede sonda.' },
    {"id": "de-b1-h03.q5", "t": "mc", "q": "Türkçe konuşan bir arkadaşın röportajın ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Bir kadın Almanya’ya geldiği günleri anlatıyor: başta yalnızdı ve Almanca bilmiyordu, çalışıp kurs gördü, sonra kendini evinde hissetti.", "Bir kadın Türkiye’ye geri dönmek istediğini anlatıyor.", "Bir kadın üniversitede okuduğunu ve dil öğretmeni olmak istediğini söylüyor.", "Bir kadın Almanya’da hiçbir sorun yaşamadığını söylüyor."], "a": 0, "why": {"1": "Geri dönmekten değil, Almanya’da kendini evinde hissetmekten söz ediyor.", "2": "Üniversitede okuyan kızı; kendisi fırında çalıştı.", "3": "Zorluklar yaşadı: yalnızlık, üzüntü, alışma süreci."}, "e": "Sprachmittlung: Geldiğinde yaşadığı zorluklar, çalışma ve kurs, sonuçta aidiyet duygusu."}
  ]
});

K.addText('de-b1-r04', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Neue Regelung für den Müll', sub: 'Çöp için yeni düzenleme',
  body: [
    "Die Stadt hat eine neue Regelung für den Müll beschlossen. Sie gilt ab dem ersten Januar. Wegen der hohen Kosten müssen die Bewohner großer Häuser ihren Müll künftig besser trennen.",
    "Die Mehrheit der Bürger ist dafür. Die Mieter, denen die Hausverwaltung bisher keine Tonnen gegeben hat, bekommen jetzt kostenlose Behälter. Innerhalb von zwei Wochen verteilen Mitarbeiter der Stadt die Tonnen an diese Haushalte.",
    "Nicht alle sind zufrieden. Ein Mieter, den wir vor dem Rathaus trafen, sagte: „Trotz der guten Idee ist die Regelung zu kompliziert.“ Auch der Vermieter eines großen Hauses ärgert sich. Er verlangt von den Mietern höhere Nebenkosten, weil die Abholung des Mülls teurer wird.",
    "Die Stadt will die Entwicklung genau beobachten, denn sie hofft auf weniger Müll und saubere Straßen. Im Laufe des Jahres berichtet sie über die Ergebnisse.",
    "Leserbriefe zur neuen Regelung:",
    "Frau Demir (Eigentümerin): „Ich besitze ein Haus mit zwölf Wohnungen und bin für die Regelung. Das Gesetz schreibt vor, dass wir den Müll trennen, und es ist unsere Pflicht, die Umwelt zu schützen. Ich habe schon neue Tonnen bestellt.“",
    "Herr Lang (Student): „Die Idee finde ich gut, aber die Stadt sollte besser informieren. In unserer Wohngemeinschaft weiß niemand genau, was in welche Tonne kommt. Ein Heft mit Bildern wäre eine große Hilfe.“",
    "Frau Öztürk (Verbraucherin): „Am meisten ärgere ich mich über die Verpackungen. Im Geschäft bekommt man Obst in Tüten, im Kaufhaus ist alles doppelt eingepackt, und im Restaurant gibt es Portionen in Plastik. Die Regelung ist ein Anfang, aber auch die Hersteller müssen Verantwortung übernehmen.“"
  ],
  gloss: { 'trotz': 'rağmen', 'kompliziert': 'karmaşık', 'trafen': 'karşılaştık (treffen)', 'gilt': 'geçerlidir (gelten)', 'höhere': 'daha yüksek', 'Regelung': 'düzenleme', 'künftig': 'bundan sonra, gelecekte', 'Tonnen': 'çöp kovaları, konteynerler', 'Behälter': 'kap, kutu', 'Haushalte': 'haneler', 'Rathaus': 'belediye binası', 'Abholung': 'toplama (çöp)', 'hofft': 'umut ediyor (hoffen)', 'beobachten': 'gözlemlemek', 'Mehrheit': 'çoğunluk', 'beschlossen': 'karar verdi (beschließen)', 'Bürger': 'vatandaşlar', "Leserbriefe": "okuyucu mektupları", "Eigentümerin": "mal sahibi (kadın)", "besitze": "sahibim (besitzen)", "Gesetz": "yasa", "Pflicht": "görev, yükümlülük", "Umwelt": "çevre", "Wohngemeinschaft": "ev paylaşımı (WG)", "Verbraucherin": "tüketici (kadın)", "Verpackungen": "ambalajlar", "Geschäft": "dükkân, mağaza", "Tüten": "poşetler", "Kaufhaus": "büyük mağaza", "Portionen": "porsiyonlar", "Hersteller": "üreticiler", "Verantwortung": "sorumluluk", "eingepackt": "paketlenmiş", "schreibt vor": "zorunlu kılar (vorschreiben)", "Student": "öğrenci" },
  questions: [
    { id: 'de-b1-r04.q1', t: 'mc', q: 'Yeni düzenleme ne zaman geçerli oluyor?', o: ['1 Ocak’tan itibaren', 'Bu hafta başından itibaren', '1 Şubat’tan itibaren', 'İki hafta sonra'], a: 0,
      why: { 1: 'Metinde “bu hafta” geçmiyor; *ab dem ersten Januar* yazıyor.', 2: 'Şubat geçmiyor; tarih **1 Ocak**.', 3: '*Innerhalb von zwei Wochen* = iki hafta içinde, çöp kaplarının dağıtılması için; düzenlemenin başlangıcı için değil.' },
      e: '*Sie gilt ab dem ersten Januar.* – *ab* + Dativ: başlangıç tarihi. *gelten* = geçerli olmak.' },
    { id: 'de-b1-r04.q2', t: 'mc', q: 'Kimler ücretsiz çöp kabı alıyor?', o: ['Apartman yönetiminin şimdiye kadar kap vermediği kiracılar', 'Bütün vatandaşlar', 'Sadece belediye çalışanları', 'Sadece ev sahipleri'], a: 0,
      why: { 1: 'Sadece daha önce kap verilmeyen kiracılar alıyor (*denen die Hausverwaltung bisher keine Tonnen gegeben hat*).', 2: 'Belediye çalışanları kapları **dağıtıyor**, kendileri almıyor.', 3: 'Ev sahipleri değil, **kiracılar** (*Mieter*).' },
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
      e: 'Metindeki dört kişi ya da kurum: şehir karar verdi, kiracılar kap alıyor, çalışanlar dağıtıyor, ev sahibi daha yüksek yan gider istiyor.' },
    {"id": "de-b1-r04.q6", "t": "match", "q": "Wer sagt was? Kim hangi görüşü savunuyor?", "p": [["Frau Demir", "Es ist unsere Pflicht, die Umwelt zu schützen."], ["Herr Lang", "Die Stadt sollte besser informieren."], ["Frau Öztürk", "Auch die Hersteller müssen Verantwortung übernehmen."]], "e": "Okuyucu mektuplarında her yazar kendi konumunu söyler: Demir yasa ve görev (*Pflicht*), Lang bilgilendirme (*informieren*), Öztürk ambalaj ve üretici sorumluluğu."},
    {"id": "de-b1-r04.q7", "t": "mc", "q": "Türkçe konuşan bir arkadaşın haberin ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Şehir çöp ayrıştırma için yeni bir kural getiriyor; kiracılar ücretsiz kap alıyor, okuyuculardan bazıları kuralı destekliyor, bazıları ise daha iyi bilgilendirme ve daha az ambalaj istiyor.", "Şehir çöp toplama ücretini kaldırıyor ve tüm kiracılar para alıyor.", "Şehir çöp kutularını kaldırıp herkesin çöpünü kendisinin götürmesini istiyor.", "Şehir ağaçlık alanlarda çöp toplamayı yasaklıyor."], "a": 0, "why": {"1": "Ücretin kalkmasından söz edilmiyor; kap ücretsiz verilir, ama ev sahipleri ek gider isteyebilir.", "2": "Tam tersi: Her haneye yeni kaplar dağıtılıyor.", "3": "Ağaçlıklardan söz edilmiyor; konu apartman çöpünün ayrıştırılması."}, "e": "Sprachmittlung: Haberin ana fikri (yeni kural, ne zaman, kimler için) ve tepkiler (Leserbriefe) iki cümlede verilir."}
  ]
});

K.addText('de-b1-r05', {
  level: 'B1', kind: 'read', genre: 'nachricht',
  title: 'Ärger mit dem Nachbarn', sub: 'Komşuyla sorun',
  body: [
    "Hallo zusammen,",
    "ich brauche einen Rat. Ich wohne seit drei Jahren in einer gemütlichen Wohnung im zweiten Stock. Der Nachbar, der über mir wohnt, spielt fast jeden Abend laut Musik. Wegen des Lärms kann ich oft nicht schlafen. Das Haus ist sehr hellhörig, deshalb höre ich jedes Geräusch. Gestern habe ich dem Nachbarn einen netten Brief geschrieben, aber er hat nicht geantwortet. Was soll ich tun? Soll ich die Hausverwaltung informieren?",
    "Danke und viele Grüße, Selin",
    "Antwort von Marco:",
    "Hallo Selin, ich hatte ein ähnliches Problem. Ich habe zuerst persönlich mit dem Nachbarn gesprochen. Das war besser als ein Brief. Er hat sich entschuldigt, und seitdem ist es ruhig. Falls es nicht hilft, kannst du dich bei der Hausverwaltung beschweren. Sie ist für solche Probleme verantwortlich. Bleib freundlich, denn ein gutes Verhältnis zu den Nachbarn ist wichtig.",
    "Antwort von Lena:\nHallo Selin, ich kenne das Gefühl: Man ist wütend und enttäuscht, aber ein Streit ist einem auch peinlich. Vielleicht ist dein Nachbar nur schüchtern oder hat den Brief nicht gelesen. Schreib ihm noch einmal und lade ihn zu einem Tee ein. Sei neugierig: Vielleicht feiert er gerade eine Hochzeit.",
    "Antwort von Ben:\nIch sehe das anders. Du hast schon einen netten Brief geschrieben, und er hat nicht reagiert. Notiere ab jetzt Datum und Uhrzeit des Lärms. Das ist ein Nachweis für deine Beschwerde, und die Hausordnung gilt für alle.",
    "Nachtrag von Selin:\nDanke euch allen! Ich habe den Nachbarn gestern besucht. Er hatte den Brief nie bekommen, und seine Musik war ihm nicht bewusst. Wir haben uns geeinigt: Ab 22 Uhr bleibt es still. Jetzt schlafe ich wieder gut."
  ],
  gloss: { 'Rat': 'tavsiye', 'Stock': 'kat', 'hellhörig': 'sesi geçiren', 'Lärm': 'gürültü', 'ähnliches': 'benzer', 'entschuldigt': 'özür diledi (sich entschuldigen)', 'Geräusch': 'ses', "wütend": "öfkeli", "enttäuscht": "hayal kırıklığına uğramış", "peinlich": "utanç verici", "schüchtern": "utangaç", "neugierig": "meraklı", "Hochzeit": "düğün", "Nachweis": "kanıt", "Beschwerde": "şikâyet", "Hausordnung": "bina kuralları", "Nachtrag": "ek, güncelleme", "reagiert": "tepki verdi (reagieren)", "bewusst": "farkında", "Antwort": "cevap", "Tee": "çay" },
  questions: [
    { id: 'de-b1-r05.q1', t: 'mc', q: 'Selin’in sorunu nedir?', o: ['Üst kattaki komşu her akşam yüksek sesle müzik dinliyor.', 'Ev sahibi kirayı artırdı.', 'Komşusu ona kızgın.', 'Dairesi çok küçük.'], a: 0,
      why: { 1: 'Kira artışından söz edilmiyor.', 2: 'Komşunun ona kızgın olduğu söylenmiyor; sorun **gürültü**.', 3: 'Dairesi *gemütlich* (sıcak) olarak tarif ediliyor, küçük diye şikâyet yok.' },
      e: '*Der Nachbar, der über mir wohnt, spielt fast jeden Abend laut Musik.* – Relativsatz: Nominativ eril → **der**; fiil sonda.' },
    { id: 'de-b1-r05.q2', t: 'gap', q: 'Wegen des ___ kann Selin oft nicht schlafen.', a: ['Lärms', 'Lärmes'],
      wrong: { 'Lärm': '*wegen* + Genitiv: eril isimde **-s**: des Lärm**s**.' },
      e: '*wegen des Lärms*: eril Genitiv = des + isim-s.' },
    { id: 'de-b1-r05.q3', t: 'mc', q: 'Selin komşusuyla **ilk olarak** nasıl iletişim kurdu?', o: ['Ona kibar bir mektup yazdı ama cevap alamadı.', 'Yüz yüze konuştu.', 'Polisi aradı.', 'Hiçbir şey yapmadı.'], a: 0,
      why: { 1: 'Selin’in ilk adımı mektuptu; yüz yüze konuşmayı sonradan **Marco** önerdi.', 2: 'Polisten söz edilmiyor.', 3: 'Bir mektup yazdı (*habe … einen netten Brief geschrieben*).' },
      e: '*Ich habe dem Nachbarn einen netten Brief geschrieben.* – *schreiben* + Dativ (kişi) + Akkusativ (mektup); *netten* → Akkusativ eril, belirsiz artikel → **-en**.' },
    { id: 'de-b1-r05.q4', t: 'mc', q: 'Marco ne öneriyor?', o: ['Önce yüz yüze konuşmak, işe yaramazsa apartman yönetimine şikâyet etmek.', 'Hemen apartman yönetimine şikâyet etmek.', 'Komşuya bir mektup daha yazmak.', 'Başka bir eve taşınmak.'], a: 0,
      why: { 1: 'Marco’ya göre yönetim **ikinci adım**; önce konuşmak gerekiyor.', 2: 'Marco mektuptan çok kişisel konuşmanın daha iyi olduğunu söylüyor.', 3: 'Taşınmaktan söz edilmiyor.' },
      e: '*Ich habe zuerst persönlich mit dem Nachbarn gesprochen. … Falls es nicht hilft, kannst du dich bei der Hausverwaltung beschweren.*' },
    { id: 'de-b1-r05.q5', t: 'match', q: 'Eşleştir:', p: [['Der Nachbar, der über Selin wohnt', 'spielt laut Musik'], ['Das Haus', 'ist sehr hellhörig'], ['Marco', 'hat persönlich mit dem Nachbarn gesprochen'], ['Die Hausverwaltung', 'ist für solche Probleme verantwortlich']],
      e: '*Der Nachbar, der über Selin wohnt* (Relativsatz, Nominativ eril) – *Das Haus ist hellhörig*: duvarlar ince, her ses duyuluyor.' },
    {"id": "de-b1-r05.q6", "t": "match", "q": "Wer sagt was? Kim ne öneriyor?", "p": [["Marco", "Zuerst persönlich mit dem Nachbarn sprechen."], ["Lena", "Den Nachbarn zu einem Tee einladen."], ["Ben", "Datum und Uhrzeit des Lärms notieren."]], "e": "Üç forum cevabı: Marco yüz yüze konuşmayı, Lena anlayışı ve daveti, Ben kanıt toplayıp şikâyet etmeyi öneriyor."},
    {"id": "de-b1-r05.q7", "t": "mc", "q": "Türkçe konuşan bir arkadaşın forumda ne konuşulduğunu soruyor. Hangi özet doğru?", "o": ["Selin üst kattaki komşusunun gürültüsünden şikâyetçi; forumdakiler önce konuşmayı, anlayışlı olmayı ya da kanıt toplamayı öneriyor; sonunda Selin komşusuyla anlaşıyor.", "Selin yeni bir daire arıyor ve forumdan ev ilanı istiyor.", "Selin komşusunu polise şikâyet ediyor ve forumdakiler onu destekliyor.", "Selin düğün için müzik önerisi soruyor."], "a": 0, "why": {"1": "Selin taşınmak istemiyor; sorunu çözmeye çalışıyor.", "2": "Polisten söz edilmiyor; en fazla ev yönetimine başvurulması öneriliyor.", "3": "Düğün sadece Lena’nın tahmini; konu gürültü."}, "e": "Sprachmittlung: Forum konusu (gürültü), farklı tavsiyeler ve sonuç (anlaşma) kısaca verilir."}
  ]
});

K.addText('de-b1-r06', {
  level: 'B1', kind: 'read', genre: 'email',
  title: 'Brief an die Vermieterin', sub: 'Ev sahibine mektup',
  body: [
    "Sehr geehrte Frau Winter,",
    "ich wende mich an Sie wegen der defekten Heizung in meiner Wohnung. Ich bin seit drei Jahren Mieterin in Ihrem Haus und habe bisher nie ein Problem gemeldet. Seit zwei Wochen ist es im Wohnzimmer sehr kalt. Der Handwerker, den die Hausverwaltung letzte Woche geschickt hat, konnte den Mangel nicht beheben. Er sagte, dass ein neues Teil bestellt werden muss.",
    "Ich wohne in der vierten Etage. Als ich vor drei Jahren einzog, habe ich eine Kaution bezahlt, und die Wohnung war nicht möbliert. Ich habe selbst Regale, einen Teppich und Vorhänge gekauft und alles gründlich eingerichtet. Deshalb ist mir wichtig, dass die Wohnung in einem guten Zustand bleibt. Auch im Flur im Erdgeschoss ist seit Wochen eine Glühbirne kaputt, aber niemand hat sie ausgewechselt.",
    "Außerdem gibt es im Bad einen feuchten Fleck, der immer größer wird. Wahrscheinlich ist das die Folge eines kleinen Wasserschadens in der Wohnung über mir. Dieser Zustand ist für mich und meine Familie nicht mehr akzeptabel.",
    "Bitte kümmern Sie sich so schnell wie möglich um die Reparatur. Ich bitte Sie, die Heizung innerhalb von zwei Wochen reparieren zu lassen. Wenn Sie den Mangel nicht beheben, möchte ich die Miete mindern. Ich bitte um Rückmeldung bis zum Ende des Monats.",
    "Falls das Problem bleibt, müsste ich über einen Auszug nachdenken. Das möchte ich vermeiden, denn ich fühle mich in der Wohnung wohl. Die Mängel habe ich schriftlich festgehalten und kann Fotos als Nachweis schicken. Über einen Termin spreche ich gern, eine schnelle Absprache ist mir dringend wichtig.",
    "Mit freundlichen Grüßen",
    "Aylin Kaya"
  ],
  gloss: { 'Fleck': 'leke', 'feuchten': 'nemli', 'akzeptabel': 'kabul edilebilir', 'mindern': 'düşürmek, azaltmak', 'bestellt': 'sipariş edilmiş (bestellen)', 'Wasserschaden': 'su hasarı', 'Teil': 'parça', "Etage": "kat", "einzog": "taşındı (einziehen)", "Kaution": "depozito", "möbliert": "eşyalı", "Regale": "raflar", "Teppich": "halı", "Vorhänge": "perdeler", "gründlich": "titizlikle", "eingerichtet": "döşedim (einrichten)", "Zustand": "durum", "Erdgeschoss": "zemin kat", "Glühbirne": "ampul", "ausgewechselt": "değiştirilmiş (auswechseln)", "Auszug": "taşınma (çıkış)", "Nachweis": "kanıt", "Absprache": "anlaşma, görüşme", "dringend": "acil", "festgehalten": "kaydettim (festhalten)", "Mängel": "kusurlar" },
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
      e: '*seit* = o zamandan beri, *innerhalb von* = içinde (süre), *bis zum Ende des Monats* = ayın sonuna kadar (Genitiv: des Monats).' },
    {"id": "de-b1-r06.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın mektubun ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Kiracı ev sahibine kirayı artırmayı teklif ediyor ve evi satın almak istiyor.", "Kiracı evdeki arızalı kalorifer ve nemli lekeler yüzünden şikâyet ediyor, iki hafta içinde tamir istiyor; olmazsa kirayı düşürmek istiyor.", "Kiracı evi hemen terk edeceğini bildiriyor ve depozitosunu istiyor.", "Kiracı yeni bir ev arıyor ve ev sahibinden referans istiyor."], "a": 1, "why": {"0": "Kira artırmaktan ya da satın almaktan söz edilmiyor; konu şikâyet.", "2": "Taşınmak istemiyor; tamirat için süre veriyor (*innerhalb von zwei Wochen*).", "3": "Referans değil, tamirat isteniyor."}, "e": "Sprachmittlung: Resmî mektubun amacı (*Mangel anzeigen*), isteği (*Reparatur innerhalb von zwei Wochen*) ve sonucu (*Miete mindern*) kısaca aktarılır."}
  ]
});

K.addText('de-b1-h04', {
  level: 'B1', kind: 'listen', genre: 'anrufbeantworter', plays: 2,
  title: "Nachricht aus der Arztpraxis", sub: "Muayenehaneden mesaj",
  lines: [
    {"s": "Praxis", "g": "f", "t": "Guten Tag, hier ist die Praxis von Frau Doktor Keller, Fachärztin für Orthopädie. Wir erinnern Sie an Ihren Termin am Mittwoch um zehn Uhr. Ihr Hausarzt hat Sie zu uns überwiesen, weil Ihnen der Finger seit Wochen wehtut. Bitte bringen Sie die Versichertenkarte Ihrer Krankenversicherung, die Überweisung und den Befund Ihres Hausarztes mit.", "n": "İyi günler, burası Dr. Keller’in muayenehanesi, ortopedi uzmanı. Çarşamba günü saat onda randevunuzu hatırlatıyoruz. Aile doktorunuz sizi bize yönlendirdi, çünkü parmağınız haftalardır ağrıyor. Lütfen sağlık sigortası kartınızı, sevk kâğıdını ve aile doktorunuzun bulgularını getirin."},
    {"s": "Praxis", "g": "f", "t": "Die Ärztin wird Sie zuerst untersuchen und danach die Behandlung besprechen. Falls sie ein Medikament verschreibt, müssen Sie es nach Plan einnehmen. Mögliche Nebenwirkungen erklärt sie Ihnen genau. Wenn Sie eine Allergie haben oder gegen etwas allergisch sind, sagen Sie uns das bitte vorher. Bringen Sie auch alte Röntgenbilder mit, damit wir sie vergleichen können.", "n": "Doktor sizi önce muayene edecek, sonra tedaviyi görüşecek. İlaç yazarsa, planına göre kullanmalısınız. Olası yan etkileri size ayrıntılı açıklar. Alerjiniz varsa ya da bir şeye karşı alerjikseniz, lütfen önceden söyleyin. Eski röntgen filmlerinizi de getirin, böylece karşılaştırabiliriz."},
    {"s": "Praxis", "g": "f", "t": "Eine Krankschreibung können wir nur nach der Untersuchung ausstellen. Den Eigenanteil für Medikamente bezahlen Sie in der Apotheke. Wenn Sie den Termin nicht wahrnehmen können, rufen Sie uns bitte spätestens am Dienstag an. Auf Wiederhören.", "n": "İstirahat raporunu ancak muayeneden sonra verebiliriz. İlaçlar için kendi payınızı eczanede ödersiniz. Randevuya gelemezseniz lütfen en geç salı günü bizi arayın. Hoşça kalın."}
  ],
  gloss: { "Fachärztin": "uzman doktor (kadın)", "Orthopädie": "ortopedi", "Röntgenbilder": "röntgen filmleri", "erinnern": "hatırlatmak", "Hausarzt": "aile doktoru", "überwiesen": "sevk etti (überweisen)", "Finger": "parmak", "wehtut": "ağrıyor (wehtun)", "Versichertenkarte": "sigorta kartı", "Krankenversicherung": "sağlık sigortası", "Überweisung": "sevk kâğıdı", "Befund": "bulgu, sonuç", "untersuchen": "muayene etmek", "Behandlung": "tedavi", "Medikament": "ilaç", "verschreibt": "reçete yazar (verschreiben)", "einnehmen": "(ilaç) almak", "Nebenwirkungen": "yan etkiler", "Allergie": "alerji", "allergisch": "alerjik", "Krankschreibung": "istirahat raporu", "Eigenanteil": "kendi payı", "Apotheke": "eczane", "wahrnehmen": "(randevuyu) kullanmak" },
  questions: [
    {"id": "de-b1-h04.q1", "t": "mc", "q": "Mesaj neden bırakılmış?", "o": ["Bir uzman doktor randevusunu hatırlatmak için.", "Bir ameliyatı iptal etmek için.", "Bir faturanın ödenmesini istemek için.", "Bir reçeteyi eczaneye göndermek için."], "a": 0, "why": {"1": "Ameliyattan söz edilmiyor.", "2": "Fatura konusu yok.", "3": "Reçete randevudan sonra yazılabilir; mesaj randevuyu hatırlatıyor."}, "e": "*Wir erinnern Sie an Ihren Termin am Mittwoch um zehn Uhr.*"},
    {"id": "de-b1-h04.q2", "t": "mc", "q": "Randevu ne zaman?", "o": ["Çarşamba günü saat onda", "Salı günü sabah", "Çarşamba öğleden sonra", "Perşembe saat on"], "a": 0, "why": {"1": "Salı sadece iptal için son arama günü.", "2": "Saat on, öğleden sonra değil.", "3": "Perşembe değil, çarşamba."}, "e": "*am Mittwoch um zehn Uhr.*"},
    {"id": "de-b1-h04.q3", "t": "gap", "q": "Die Ärztin ___ Sie zuerst untersuchen. (gelecek: werden)", "a": ["wird"], "wrong": {"werden": "Özne tekil (*die Ärztin*): **wird**.", "wurde": "*wurde* geçmiş (Passiv) olurdu; burada gelecek plan: **wird … untersuchen**."}, "e": "Futur I: **werden + Infinitiv** (*wird … untersuchen*)."},
    {"id": "de-b1-h04.q4", "t": "mc", "q": "Randevuya gelemeyen ne yapmalı?", "o": ["En geç salı günü aramalı.", "Hiçbir şey yapmaz.", "Çarşamba günü öğleden sonra gelmeli.", "Eczaneden randevu almalı."], "a": 0, "why": {"1": "Mesaj arama istiyor: *rufen Sie uns bitte spätestens am Dienstag an*.", "2": "Yeni bir gün önerilmiyor.", "3": "Randevuyu muayenehane verir, eczane değil."}, "e": "*spätestens am Dienstag* = en geç salı günü."}
  ]
});

K.addText('de-b1-h05', {
  level: 'B1', kind: 'listen', genre: 'gespraech', plays: 2,
  title: 'Die neue Wohnung', sub: 'Yeni daire',
  lines: [
    {"s": "Lena", "g": "f", "t": "Hast du schon eine neue Wohnung gefunden?", "n": "Yeni bir daire buldun mu?"},
    {"s": "Tim", "g": "m", "t": "Ja! Ich habe eine helle Wohnung mit einem kleinen Balkon gesehen.", "n": "Evet! Aydınlık, küçük balkonlu bir daire gördüm."},
    {"s": "Lena", "g": "f", "t": "Das klingt gut. Wo liegt sie?", "n": "Kulağa güzel geliyor. Nerede?"},
    {"s": "Tim", "g": "m", "t": "In einer ruhigen Straße, nur zehn Minuten vom Bahnhof.", "n": "Sakin bir sokakta, istasyona sadece on dakika."},
    {"s": "Lena", "g": "f", "t": "Und wie ist die Miete?", "n": "Peki kira nasıl?"},
    {"s": "Tim", "g": "m", "t": "Wegen der guten Lage ist sie etwas teuer. Aber der Vermieter, den ich heute getroffen habe, ist sehr freundlich. Er hat mir den Vertrag gezeigt. Die Nebenkosten sind im Preis nicht enthalten.", "n": "İyi konum nedeniyle biraz pahalı. Ama bugün tanıştığım ev sahibi çok nazik. Bana sözleşmeyi gösterdi. Yan giderler fiyata dahil değil."},
    {"s": "Lena", "g": "f", "t": "Hast du schon unterschrieben?", "n": "Çoktan imzaladın mı?"},
    {"s": "Tim", "g": "m", "t": "Noch nicht. Ich möchte erst mit einem Experten über den Vertrag sprechen.", "n": "Henüz değil. Önce sözleşme hakkında bir uzmanla konuşmak istiyorum."},
    {"s": "Lena", "g": "f", "t": "Wie groß ist die Wohnung?", "n": "Daire ne kadar büyük?"},
    {"s": "Tim", "g": "m", "t": "Die Wohnfläche beträgt sechzig Quadratmeter, also ziemlich geräumig. Es gibt ein Wohnzimmer, ein Schlafzimmer und eine kleine Küche.", "n": "Oturma alanı altmış metrekare, yani oldukça geniş. Bir oturma odası, bir yatak odası ve küçük bir mutfak var."},
    {"s": "Lena", "g": "f", "t": "Und die Möbel? Hast du schon alles?", "n": "Peki mobilyalar? Hepsi tamam mı?"},
    {"s": "Tim", "g": "m", "t": "Nein, ich brauche noch einen Schrank. Die Vorhänge hängen zum Glück schon. Beim Einzug lesen wir gemeinsam die Zähler ab.", "n": "Hayır, bir dolaba daha ihtiyacım var. Perdeler neyse ki asılı. Taşınırken sayaçları birlikte okuyacağız."},
    {"s": "Lena", "g": "f", "t": "Wann ziehst du aus deiner alten Wohnung aus?", "n": "Eski evinden ne zaman çıkıyorsun?"},
    {"s": "Tim", "g": "m", "t": "Ende des Monats. Der Eigentümer wollte das Gebäude umbauen und hat die Miete stark erhöht. Diese Mieterhöhung war mir zu kostspielig. Er hat sie mit den hohen Baukosten begründet, aber das konnte mich nicht überzeugen.", "n": "Ayın sonunda. Ev sahibi binayı yeniden yapmak istedi ve kirayı çok artırdı. Bu kira artışı benim için fazla pahalıydı. Bunu yüksek inşaat maliyetleriyle gerekçelendirdi ama beni ikna edemedi."}
  ],
  gloss: { 'unterschrieben': 'imzaladın (unterschreiben)', 'Lage': 'konum', 'enthalten': 'dahil', 'Vertrag': 'sözleşme', "Wohnfläche": "kullanım alanı", "geräumig": "geniş", "Möbel": "mobilya", "Vorhänge": "perdeler", "Einzug": "taşınma", "Zähler": "sayaç", "ablesen": "okumak", "ausziehen": "taşınmak, çıkmak", "Eigentümer": "mal sahibi", "Gebäude": "bina", "umbauen": "yeniden inşa etmek", "erhöht": "artırdı", "Mieterhöhung": "kira artışı", "kostspielig": "masraflı", "begründet": "gerekçelendirdi (begründen)", "Baukosten": "inşaat maliyetleri", "überzeugen": "ikna etmek" },
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
      e: 'Akkusativ dişil: *eine helle Wohnung*; Dativ eril: *mit einem kleinen Balkon*.' },
    {"id": "de-b1-h05.q5", "t": "mc", "q": "Türkçe konuşan bir arkadaşın konuşmanın ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Tim yeni bir daire buldu: aydınlık, geniş, sakin bir sokakta; kira biraz pahalı, sözleşmeyi önce bir uzmana göstermek istiyor ve eski evden kira artışı yüzünden taşınıyor.", "Tim evini satıyor ve alıcı arıyor.", "Tim eski dairesinde kalmak istiyor ve sözleşmeyi yeniliyor.", "Tim ev sahibiyle kavga ediyor ve mahkemeye gidiyor."], "a": 0, "why": {"1": "Evini satmıyor; kiracı olarak taşınıyor.", "2": "Eski evden **çıkıyor**; kira artışı yüzünden.", "3": "Mahkemeden söz edilmiyor; sözleşmeyi bir uzmana göstermek istiyor."}, "e": "Sprachmittlung: Yeni daire (konum, boyut, kira) ve taşınma nedeni (kira artışı) kısaca verilir."}
  ]
});

K.addText('de-b1-h06', {
  level: 'B1', kind: 'listen', genre: 'interview', plays: 2,
  title: 'Ein Verein für die Kinder des Viertels', sub: 'Mahalle çocukları için bir dernek',
  lines: [
    {"s": "Reporter", "g": "m", "t": "Frau Becker, Sie leiten den Verein, der im Stadtteil Kinder unterstützt. Wie hat alles angefangen?", "n": "Becker Hanım, semtte çocuklara destek veren derneği yönetiyorsunuz. Her şey nasıl başladı?"},
    {"s": "Frau Becker", "g": "f", "t": "Vor fünf Jahren haben einige Nachbarn, die in unserer Straße wohnen, ein Fest für die Kinder des Viertels gemacht. Wegen des großen Erfolgs haben wir danach einen Verein gegründet.", "n": "Beş yıl önce sokağımızda oturan birkaç komşu, mahalle çocukları için bir şenlik yaptı. Büyük başarı nedeniyle ardından bir dernek kurduk."},
    {"s": "Reporter", "g": "m", "t": "Was macht der Verein heute?", "n": "Dernek bugün ne yapıyor?"},
    {"s": "Frau Becker", "g": "f", "t": "Wir bieten Hausaufgabenhilfe an. Die Studenten, die uns freiwillig helfen, kommen zweimal pro Woche. Trotz der vielen Arbeit macht es uns große Freude. Im Sommer machen wir sogar einen Ausflug mit allen Kindern.", "n": "Ödev yardımı sunuyoruz. Bize gönüllü yardım eden öğrenciler haftada iki kez geliyor. Çok işe rağmen bize büyük keyif veriyor. Yazın bütün çocuklarla bir gezi bile yapıyoruz."},
    {"s": "Reporter", "g": "m", "t": "Wie finanziert sich der Verein?", "n": "Dernek nasıl finanse ediliyor?"},
    {"s": "Frau Becker", "g": "f", "t": "Der Mitgliedsbeitrag ist niedrig, deshalb sind wir auf Spenden angewiesen. Wir sind gemeinnützig, das heißt, wir verdienen kein Geld mit unserer Arbeit. Der Vorstand besteht aus fünf Personen, und einmal im Jahr gibt es eine Mitgliederversammlung, bei der alle mitbestimmen.", "n": "Üyelik aidatı düşük, bu yüzden bağışlara bağımlıyız. Kâr amacı gütmüyoruz, yani çalışmamızdan para kazanmıyoruz. Yönetim kurulu beş kişiden oluşuyor, yılda bir kez de herkesin söz sahibi olduğu bir üyeler toplantısı yapılıyor."},
    {"s": "Reporter", "g": "m", "t": "Gibt es auch Sport?", "n": "Spor da var mı?"},
    {"s": "Frau Becker", "g": "f", "t": "Ja, ein Trainer aus dem Sportverein trainiert mit den Kindern. Die Mannschaft spielt am Samstag. Wer mitmachen möchte, kann beitreten. Man muss sich nur engagieren und regelmäßig zum Training kommen.", "n": "Evet, spor kulübünden bir antrenör çocuklarla çalışıyor. Takım cumartesi maç yapıyor. Katılmak isteyen üye olabilir. Sadece çaba göstermek ve antrenmanlara düzenli gelmek gerekiyor."}
  ],
  gloss: { 'Verein': 'dernek', 'Erfolgs': 'başarının', 'leiten': 'yönetmek', 'bieten': 'sunmak (anbieten)', 'trotz': 'rağmen', 'Stadtteil': 'semt', 'Viertel': 'mahalle', 'unterstützt': 'destekler (unterstützen)', 'gegründet': 'kurduk (gründen)', 'Hausaufgabenhilfe': 'ödev yardımı', 'Erfolg': 'başarı', 'angefangen': 'başladı (anfangen)', "Mitgliedsbeitrag": "üyelik aidatı", "Spenden": "bağışlar", "angewiesen": "bağımlı", "gemeinnützig": "kâr amacı gütmeyen", "verdienen": "kazanmak", "Vorstand": "yönetim kurulu", "Mitgliederversammlung": "üyeler toplantısı", "mitbestimmen": "söz sahibi olmak", "Trainer": "antrenör", "Sportverein": "spor kulübü", "Mannschaft": "takım", "beitreten": "üye olmak", "engagieren": "çaba göstermek, üstlenmek", "Training": "antrenman" },
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


K.addText('de-b1-r07', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Besser lernen: vier Tipps für Ihren Alltag', sub: 'Daha iyi öğrenmek: günlük hayat için dört ipucu',
  body: [
    "Wer eine Sprache lernen möchte, braucht vor allem Geduld. Viele Menschen hoffen darauf, schnell Erfolg zu haben, und geben nach wenigen Wochen auf. Dabei hängt der Fortschritt weniger vom Talent ab als von der Gewohnheit.",
    "Der erste Tipp: Üben Sie jeden Tag zehn Minuten, anstatt einmal pro Woche zwei Stunden zu lernen. Kurze Einheiten kann man leichter planen, und das Gehirn behält mehr.",
    "Der zweite Tipp: Verbessern Sie Ihren Wortschatz, indem Sie Wörter nicht einzeln, sondern in ganzen Sätzen lernen. So merken Sie sich gleich, mit welcher Präposition ein Verb verwendet wird, zum Beispiel „sich auf etwas freuen“ oder „an einem Kurs teilnehmen“.",
    "Der dritte Tipp: Sprechen Sie, ohne Angst vor Fehlern zu haben. Fehler gehören dazu. Wer nur still lernt, um keine Fehler zu machen, lernt langsamer.",
    "Der letzte Tipp: Suchen Sie sich ein Ziel, auf das Sie sich freuen können, etwa eine Reise oder ein Gespräch mit Freunden. Ein klares Ziel hilft Ihnen, nicht aufzugeben."
  ],
  gloss: { 'Tipp': 'ipucu', 'anstatt': '-mek yerine', 'indem': '-erek', 'merken': 'aklında tutmak', 'Gespräch': 'sohbet', 'letzte': 'son', 'etwa': 'örneğin', 'allem': 'her şey (vor allem: özellikle)', 'pro': 'başına', 'Einheiten': 'birimler, dersler', 'Gehirn': 'beyin', 'behält': 'aklında tutar (behalten)', 'Talent': 'yetenek', 'Gewohnheit': 'alışkanlık', 'aufzugeben': 'pes etmek (aufgeben)', 'Geduld': 'sabır' },
  questions: [
    { id: 'de-b1-r07.q1', t: 'mc', q: 'Metne göre ilerleme neye bağlı?', o: ['Alışkanlığa', 'Yeteneğe', 'Yaşa', 'Paraya'], a: 0,
      why: { 1: 'Metne göre ilerleme yetenekten çok alışkanlığa bağlı (*weniger … als …*).', 2: 'Yaştan söz edilmiyor.', 3: 'Paradan söz edilmiyor.' },
      e: '*Der Fortschritt hängt weniger vom Talent ab als von der Gewohnheit.* – *abhängen von + Dat.*: *vom* = von dem.' },
    { id: 'de-b1-r07.q2', t: 'gap', q: 'Verbessern Sie Ihren Wortschatz, ___ Sie Wörter in ganzen Sätzen lernen.', a: ['indem'],
      wrong: { 'damit': '*damit* amaç bildirir; burada yöntem anlatılıyor (-erek): **indem**.', 'dass': '*dass* “ki” bağlacıdır; yöntem için **indem**.', 'um': '*um* ile *zu-Infinitiv* gelir; burada özne + fiil olan yan cümle var.' },
      e: '**indem** = yöntem (-erek, -mekle): *indem Sie … lernen* – fiil yan cümlede sonda.' },
    { id: 'de-b1-r07.q3', t: 'mc', q: 'Kelimeleri neden bütün cümleler içinde öğrenmeli?', o: ['Fiilin hangi edatla kullanıldığını hemen öğrenmek için.', 'Cümleler daha kısa olduğu için.', 'Sınavda cümle sorulduğu için.', 'Sözlük kullanmamak için.'], a: 0,
      why: { 1: 'Cümlelerin kısa olduğundan söz edilmiyor.', 2: 'Sınavdan söz edilmiyor.', 3: 'Sözlükten söz edilmiyor.' },
      e: '*So merken Sie sich gleich, mit welcher Präposition ein Verb verwendet wird.* – *sich freuen auf*, *teilnehmen an*.' },
    { id: 'de-b1-r07.q4', t: 'match', q: 'İpucunu içeriğiyle eşleştir:', p: [['Erster Tipp', 'jeden Tag zehn Minuten üben'], ['Zweiter Tipp', 'Wörter in ganzen Sätzen lernen'], ['Dritter Tipp', 'ohne Angst sprechen'], ['Letzter Tipp', 'sich ein Ziel suchen']],
      e: 'Dört ipucu sırayla: kısa ve düzenli çalışmak, cümle içinde kelime öğrenmek, hatadan korkmadan konuşmak, hedef belirlemek.' },
    { id: 'de-b1-r07.q5', t: 'cloze', q: 'Cümleleri tamamla:', text: 'Wer nur still lernt, {1} keine Fehler zu machen, lernt langsamer. Üben Sie täglich, {2} einmal pro Woche lange zu lernen.',
      gaps: {
        '1': { a: ['um'], o: ['um', 'ohne', 'damit'], wrong: { 'ohne': '*ohne … zu* “-meden” demektir; hatasız kalmak **amaç**, o yüzden *um … zu*.', 'damit': '*damit* yan cümle ister; burada *zu-Infinitiv* var → **um … zu**.' } },
        '2': { a: ['anstatt'], o: ['anstatt', 'ohne', 'um'], wrong: { 'ohne': '*ohne … zu* “-meden”; burada “-mek yerine” anlamı var → **anstatt**.', 'um': '*um … zu* amaç içindir; burada “haftada bir kez uzun çalışmak yerine” anlamı var → **anstatt**.' } }
      },
      e: '*um … zu* = amaç (aynı özne). *(an)statt … zu* = -mek yerine.' },
    {"id": "de-b1-r07.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın bu yazının ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Yazı, günlük yaşamda dil öğrenmeyi kolaylaştıran dört pratik ipucu veriyor.", "Yazı, bir dil kursunun fiyatlarını karşılaştırıyor.", "Yazı, çocuklara okulda nasıl davranacaklarını anlatıyor.", "Yazı, hiçbir şey yapmadan öğrenmenin mümkün olduğunu söylüyor."], "a": 0, "why": {"1": "Fiyat karşılaştırması yok; konu öğrenme yöntemleri.", "2": "Okul davranışları değil, yetişkinler için öğrenme ipuçları.", "3": "Yazı tam tersini söyler: düzenli ve küçük adımlarla çalışmak gerekir."}, "e": "Sprachmittlung: Başlıktaki *vier Tipps für Ihren Alltag* ana fikri verir: günlük hayata uyan dört öğrenme ipucu."}
  ]
});

K.addText('de-b1-r08', {
  level: 'B1', kind: 'read', genre: 'email',
  title: 'Anfrage zum Abendkurs', sub: 'Akşam kursu hakkında bilgi talebi',
  body: [
    "Betreff: Anfrage zum Abendkurs Deutsch B1",
    "Sehr geehrte Damen und Herren,",
    "ich interessiere mich für Ihren Abendkurs Deutsch B1, der im Oktober beginnt. Ich arbeite tagsüber in einem Supermarkt und habe vor, meine Sprachkenntnisse zu verbessern, um später eine Ausbildung zu machen. Deshalb habe ich einige Fragen.",
    "Mein Dienstplan bei der Arbeit ändert sich jede Woche, deshalb brauche ich möglichst früh den Kursplan. Später möchte ich vielleicht ein Studium beginnen, doch dafür benötige ich ein gutes Zertifikat. Ich bin ehrgeizig und geduldig, und ich habe keine Angst vor Übungen: Wiederholung hilft mir beim Lernen. Außerdem möchte ich wissen, wie oft es Tests gibt und ob die Lehrkraft die Hausaufgaben korrigiert. Meine Absicht ist, einen Kurs mit einer kleinen Gruppe zu finden, denn in großen Gruppen komme ich nicht gut zurecht.",
    "Zuerst möchte ich wissen, an welchen Tagen der Kurs stattfindet. Außerdem frage ich mich, ob ich zu Beginn einen Einstufungstest machen muss. Ich habe zwei Jahre lang einen Kurs besucht, kann aber kein Zertifikat vorlegen. Gibt es die Möglichkeit, den Kurs zunächst einmal als Gast zu besuchen, ohne sofort die gesamte Gebühr zu bezahlen?",
    "Ich würde mich freuen, wenn Sie mir bis nächste Woche antworten könnten, damit ich mich rechtzeitig anmelden kann. Vielen Dank im Voraus für Ihre Mühe.",
    "Mit freundlichen Grüßen",
    "Lena Brandt"
  ],
  gloss: { 'Einstufungstest': 'seviye tespit sınavı', 'Zertifikat': 'sertifika', 'vorlegen': 'ibraz etmek', 'Gebühr': 'ücret', 'stattfindet': 'gerçekleşir (stattfinden)', 'Sprachkenntnisse': 'dil becerileri, dil seviyesi', 'Gast': 'misafir, dinleyici', 'tagsüber': 'gündüzleri', "Kursplan": "kurs programı", "Studium": "üniversite eğitimi", "benötige": "ihtiyaç duyuyorum (benötigen)", "ehrgeizig": "hırslı", "geduldig": "sabırlı", "Übungen": "alıştırmalar", "Wiederholung": "tekrar", "Klassenarbeiten": "sınavlar", "Lehrkraft": "öğretmen", "Absicht": "niyet" },
  questions: [
    { id: 'de-b1-r08.q1', t: 'mc', q: 'Lena bu e-postayı neden yazıyor?', o: ['Akşam kursu hakkında bilgi almak için.', 'Kurs ücretini geri istemek için.', 'Bir kurs öğretmeninden şikâyet etmek için.', 'İş başvurusu yapmak için.'], a: 0,
      why: { 1: 'Henüz kayıtlı değil; ücret iadesinden söz edilmiyor.', 2: 'Şikâyet yok; kibar bir bilgi talebi.', 3: 'İş başvurusu değil, kurs hakkında soru soruyor.' },
      e: '*Ich interessiere mich für Ihren Abendkurs … Deshalb habe ich einige Fragen.* – resmî bilgi talebi.' },
    { id: 'de-b1-r08.q2', t: 'mc', q: 'Lena şu anda ne iş yapıyor?', o: ['Gündüzleri bir süpermarkette çalışıyor.', 'Bir dil okulunda öğretmenlik yapıyor.', 'Üniversitede okuyor.', 'Bir işi yok.'], a: 0,
      why: { 1: 'Öğretmen değil; kurs katılımcısı olmak istiyor.', 2: 'Üniversiteden söz edilmiyor.', 3: '*Ich arbeite tagsüber in einem Supermarkt* – çalışıyor.' },
      e: '*tagsüber* = gündüzleri. *Ich arbeite tagsüber in einem Supermarkt.*' },
    { id: 'de-b1-r08.q3', t: 'gap', q: 'Sie lernt Deutsch, ___ später eine Ausbildung zu machen.', a: ['um'],
      wrong: { 'damit': '*damit* yan cümle ister; *zu machen* ile **um … zu**.', 'ohne': '*ohne … zu* “-meden” demektir; burada amaç var.', 'statt': '*statt … zu* “-mek yerine”; burada amaç var.' },
      e: 'Aynı özne + amaç → **um … zu**: *um später eine Ausbildung zu machen.*' },
    { id: 'de-b1-r08.q4', t: 'gap', q: 'Lena interessiert sich ___ den Abendkurs.', a: ['für'],
      wrong: { 'auf': '*auf* ile *warten, sich freuen* kullanılır.', 'an': '*Interesse an* isimdir; fiilde (*sich interessieren*) **für**.', 'über': '*über* ile *sprechen, diskutieren* kullanılır.' },
      e: '*sich interessieren **für** + Akk.*: *für den Abendkurs*.' },
    { id: 'de-b1-r08.q5', t: 'mc', q: 'Hangi soruyu **sormuyor**?', o: ['Kurs hangi binada yapılıyor?', 'Kurs hangi günlerde yapılıyor?', 'Başta seviye tespit sınavı gerekiyor mu?', 'Kursa önce misafir olarak katılabilir mi?'], a: 0,
      why: { 1: 'Bunu soruyor: *an welchen Tagen der Kurs stattfindet*.', 2: 'Bunu soruyor: *ob ich … einen Einstufungstest machen muss*.', 3: 'Bunu soruyor: *den Kurs zunächst als Gast zu besuchen*.' },
      e: 'Üç soru metinde var (günler, seviye sınavı, misafir olarak katılmak); kursun nerede yapılacağını sormuyor.' },
    {"id": "de-b1-r08.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın e-postanın ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Lena bir akşam kursu hakkında bilgi istiyor: günler, seviye testi, deneme olanağı ve ücret hakkında soru soruyor.", "Lena kursa kayıt olmak yerine iptal etmek istiyor.", "Lena bir üniversite programına başvuruyor ve burs istiyor.", "Lena yeni bir iş buluyor ve kurstan ayrılıyor."], "a": 0, "why": {"1": "İptal değil, bilgi isteği: *Anfrage*.", "2": "Üniversiteden sadece gelecekte olası bir plan olarak söz ediyor.", "3": "İş değişikliğinden söz edilmiyor; supermarkette çalışmaya devam ediyor."}, "e": "Sprachmittlung: *Anfrage* = bilgi talebi; sorulan konular (günler, *Einstufungstest*, *Gast*, *Gebühr*) kısaca sıralanır."}
  ]
});

K.addText('de-b1-r09', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Mein Monat ohne Handy am Abend', sub: 'Akşamları telefonsuz bir ayım',
  body: [
    "Seit einem Monat lege ich mein Handy nach zwanzig Uhr weg. Ich habe damit angefangen, weil ich mich über meine Müdigkeit geärgert habe. Abends habe ich oft stundenlang im Internet gelesen, ohne etwas Wichtiges zu finden. Statt zu schlafen, habe ich Videos angesehen.",
    "Am Anfang war es schwierig. Es fiel mir schwer, das Handy nicht zu nehmen. Ich habe mir Mühe gegeben, mich abzulenken, indem ich ein Buch gelesen oder mit meiner Mitbewohnerin gespielt habe. Heute freue ich mich schon auf die Abende ohne Bildschirm.",
    "Natürlich ist nicht alles leicht. Mein Smartphone lade ich jetzt im Flur auf, das Ladegerät liegt dort. Das WLAN schalte ich um 22 Uhr aus, und der Fernseher bleibt ebenfalls aus. Am Anfang hatte ich Angst, nicht mehr erreichbar zu sein. Heute weiß ich: Fast alles kann bis morgen warten. Wenn ich abends online etwas suchen will, zum Beispiel eine Webseite mit einem Rezept, schreibe ich es auf einen Zettel. Wichtige Anhänge aus E-Mails lade ich tagsüber herunter und drucke sie aus, damit ich abends nicht mehr online nachsehen muss. Ich fotografiere weiterhin gern, schicke die Bilder aber erst am nächsten Tag.",
    "Das Ergebnis: Ich schlafe besser und bin morgens nicht mehr so müde. Meine Mitbewohnerin, deren Handy früher auch immer auf dem Tisch lag, macht inzwischen mit. Alles, was ich vermisse, sind die Nachrichten von Freunden. Deshalb habe ich ihnen gesagt, dass sie mich anrufen sollen, wenn es wichtig ist.",
    "Mein Tipp: Fangen Sie klein an. Versuchen Sie es eine Woche lang, und entscheiden Sie dann, ob sich der Aufwand lohnt.",
    "Ein Verzicht muss keine Belastung sein. Meine Konzentration ist besser, und die ständige Ablenkung durch Werbung und Schlagzeilen fehlt mir nicht. Ich denke auch mehr über Datenschutz nach: Welche Daten sammeln die Apps? Der Einfluss des Handys auf meinen Alltag war größer, als ich dachte."
  ],
  gloss: { 'indem': '-erek', 'fiel': 'geldi (schwerfallen)', 'lag': 'duruyordu (liegen)', 'lege': 'kenara bırakıyorum (weglegen)', 'Tipp': 'ipucu', 'Müdigkeit': 'yorgunluk', 'Mitbewohnerin': 'ev arkadaşı (kadın)', 'Bildschirm': 'ekran', 'abzulenken': 'oyalanmak (sich ablenken)', 'vermisse': 'özlüyorum (vermissen)', 'Aufwand': 'emek, çaba', 'geärgert': 'sinirlendim (sich ärgern)', 'inzwischen': 'bu arada, şimdilerde', "Smartphone": "akıllı telefon", "Ladegerät": "şarj aleti", "WLAN": "kablosuz internet", "Fernseher": "televizyon", "erreichbar": "ulaşılabilir", "online": "çevrimiçi", "Webseite": "web sitesi", "Rezept": "tarif", "Zettel": "not kâğıdı", "Anhänge": "ekler", "herunter": "indirmek (herunterladen)", "Drucker": "yazıcı", "drucke": "yazdırıyorum (ausdrucken)", "Passwort": "şifre", "fotografiere": "fotoğraf çekiyorum (fotografieren)", "Verzicht": "vazgeçme", "Belastung": "yük", "Konzentration": "odaklanma", "Ablenkung": "dikkat dağınıklığı", "Werbung": "reklam", "Schlagzeilen": "manşetler", "Datenschutz": "veri koruma", "Einfluss": "etki", "sammeln": "toplamak" },
  questions: [
    { id: 'de-b1-r09.q1', t: 'mc', q: 'Yazar akşamları neden telefonu bırakmaya karar verdi?', o: ['Yorgunluğuna sinirlendiği için.', 'Telefonu bozulduğu için.', 'Ev arkadaşı istediği için.', 'İşi yüzünden.'], a: 0,
      why: { 1: 'Telefonun bozulmasından söz edilmiyor.', 2: 'Ev arkadaşı sonradan katıldı; başlatan yazar.', 3: 'İşten söz edilmiyor.' },
      e: '*Ich habe mich über meine Müdigkeit geärgert.* – *sich ärgern über + Akk.*' },
    { id: 'de-b1-r09.q2', t: 'gap', q: 'Ich habe mich ___ meine Müdigkeit geärgert.', a: ['über'],
      wrong: { 'auf': '*auf* ile *warten, sich freuen* kullanılır; *sich ärgern* için **über**.', 'für': '*für* ile *sich interessieren* kullanılır.', 'vor': '*vor* ile *Angst haben* kullanılır.' },
      e: '*sich ärgern **über** + Akk.*: *über meine Müdigkeit*.' },
    { id: 'de-b1-r09.q3', t: 'cloze', q: 'Cümleleri tamamla:', text: 'Ich lenke mich ab, {1} ich ein Buch lese. Ich freue mich schon {2} die nächsten Abende ohne Bildschirm.',
      gaps: {
        '1': { a: ['indem'], o: ['indem', 'damit', 'ohne'], wrong: { 'damit': '*damit* amaç bildirir; burada yöntem: kitap okuyarak → **indem**.', 'ohne': '*ohne* “-meden”; burada “okuyarak” anlamı var.' } },
        '2': { a: ['auf'], o: ['auf', 'über', 'für'], wrong: { 'über': '*über* olmuş şeyler içindir; henüz gelmemiş akşamlar için **auf**.', 'für': '*für* kişi içindir (*sich freuen für dich*); henüz gelmemiş akşamlar için **auf**.' } }
      },
      e: '*indem* = yöntem. *sich freuen auf* = gelecekteki şeye sevinmek.' },
    { id: 'de-b1-r09.q4', t: 'mc', q: 'Ev arkadaşı ne yapıyor?', o: ['Kendisi de telefonu akşamları bırakıyor.', 'Yazara telefonunu geri vermesini söylüyor.', 'Ona kitap hediye ediyor.', 'Yeni bir daireye taşınıyor.'], a: 0,
      why: { 1: 'Böyle bir şey yazmıyor; ev arkadaşı **katılıyor**.', 2: 'Kitap hediyesinden söz edilmiyor.', 3: 'Taşınmaktan söz edilmiyor.' },
      e: '*Meine Mitbewohnerin, deren Handy früher auch immer auf dem Tisch lag, macht inzwischen mit.* – *deren*: dişil sahip.' },
    { id: 'de-b1-r09.q5', t: 'gap', q: 'Alles, ___ ich vermisse, sind die Nachrichten von Freunden.', a: ['was'],
      wrong: { 'das': '*alles* sonrası **was** gelir.', 'dass': '*dass* “ki” bağlacıdır; relatif zamir **was**.', 'wo': '*wo* yer içindir.' },
      e: '*alles, nichts, etwas, das Beste* + **was**: *Alles, was ich vermisse, …*' },
    {"id": "de-b1-r09.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın yazının ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Yazar bir aydır akşam yirmiden sonra telefonunu bırakıyor; daha iyi uyuyor, ev arkadaşı da katılıyor ve başkalarına küçük başlamasını öneriyor.", "Yazar telefonunu tamamen çöpe atıyor ve internetsiz yaşıyor.", "Yazar yeni bir telefon almak istiyor ve tavsiye soruyor.", "Yazar işinin gereği akşamları daha çok telefonda kalıyor."], "a": 0, "why": {"1": "Telefonu atmıyor; sadece akşamları belirli saatten sonra kenara koyuyor.", "2": "Yeni telefondan söz edilmiyor; konu akşam alışkanlığı.", "3": "Tam tersi: akşamları telefondan uzak duruyor."}, "e": "Sprachmittlung: Yaşanan değişimi (akşamları telefonsuz), sonucu (daha iyi uyku) ve tavsiyeyi (*klein anfangen*) kısaca söylersin."}
  ]
});

K.addText('de-b1-h07', {
  level: 'B1', kind: 'listen', genre: 'radio', plays: 2,
  title: 'Alltag leicht gemacht: Zeit sparen', sub: 'Günlük hayat kolay: zaman kazanmak',
  lines: [
    { s: 'Moderator', g: 'm', t: 'Willkommen bei „Alltag leicht gemacht“. Heute geht es um das Thema Zeit. Frau Lorenz, wie kann man im Alltag Zeit sparen?', n: '„Günlük hayat kolay“a hoş geldiniz. Bugün konumuz zaman. Lorenz Hanım, gündelik hayatta nasıl zaman kazanılır?' },
    { s: 'Frau Lorenz', g: 'f', t: 'Ich empfehle, am Abend eine Liste zu schreiben, damit man am Morgen nicht lange überlegen muss. Außerdem lohnt es sich, Wege zusammenzulegen. Statt dreimal in die Stadt zu fahren, erledigt man alles an einem Tag.', n: 'Akşamdan bir liste yazmanızı öneririm; böylece sabah uzun uzun düşünmek zorunda kalmazsınız. Ayrıca yolları birleştirmek işe yarar. Şehre üç kez gitmek yerine her şey tek günde halledilir.' },
    { s: 'Moderator', g: 'm', t: 'Und was ist mit dem Handy?', n: 'Peki ya telefon?' },
    { s: 'Frau Lorenz', g: 'f', t: 'Viele Menschen ärgern sich über verlorene Zeit, ohne etwas dagegen zu tun. Schalten Sie Benachrichtigungen aus, um sich besser zu konzentrieren. Und nehmen Sie sich bewusst Zeit für Pausen.', n: 'Birçok insan kaybedilen zamana sinirleniyor ama buna karşı bir şey yapmıyor. Daha iyi odaklanmak için bildirimleri kapatın. Ve molalar için bilinçli olarak zaman ayırın.' }
  ],
  gloss: { 'Alltag': 'günlük hayat', 'Thema': 'konu', 'statt': '-mek yerine', 'Benachrichtigungen': 'bildirimler', 'erledigt': 'halleder (erledigen)', 'Wege': 'yollar, işler', 'zusammenzulegen': 'birleştirmek (zusammenlegen)', 'Liste': 'liste', 'empfehle': 'öneririm (empfehlen)', 'konzentrieren': 'odaklanmak' },
  questions: [
    { id: 'de-b1-h07.q1', t: 'mc', q: 'Frau Lorenz akşam ne yapmayı öneriyor?', o: ['Bir liste yazmayı', 'Erken yatmayı', 'Telefonu kapatmayı', 'Alışveriş yapmayı'], a: 0,
      why: { 1: 'Erken yatmaktan söz edilmiyor.', 2: 'Telefon sonra geliyor; akşam için değil, bildirimler için.', 3: 'Alışveriş önerilmiyor.' },
      e: '*Ich empfehle, am Abend eine Liste zu schreiben, damit man am Morgen nicht lange überlegen muss.* – *damit* amaç.' },
    { id: 'de-b1-h07.q2', t: 'mc', q: 'Yolları birleştirmek ne demek?', o: ['Şehre üç kez gitmek yerine her şeyi tek günde halletmek', 'Şehirde yürümek', 'Her gün aynı yolu kullanmak', 'Toplu taşımaya binmek'], a: 0,
      why: { 1: 'Yürümekten söz edilmiyor.', 2: 'Her gün aynı yoldan söz edilmiyor.', 3: 'Toplu taşımadan söz edilmiyor.' },
      e: '*Statt dreimal in die Stadt zu fahren, erledigt man alles an einem Tag.* – *statt … zu* = -mek yerine.' },
    { id: 'de-b1-h07.q3', t: 'listen', say: 'Schalten Sie Benachrichtigungen aus, um sich besser zu konzentrieren.', q: 'Cümleyi dinle. Ne anlama geliyor?', o: ['Daha iyi odaklanmak için bildirimleri kapatın.', 'Odaklandığınız için bildirimleri kapatın.', 'Bildirimleri kapatmadan odaklanın.', 'Bildirimleri açın ki odaklanabilesiniz.'], a: 0,
      why: { 1: 'Sebep değil **amaç**: *um … zu*.', 2: '*ohne … zu* olurdu; duyduğun *um … zu*.', 3: '*ausschalten* = kapatmak; açmak değil.' },
      e: '*um sich besser zu konzentrieren* = daha iyi odaklanmak için (amaç). *zu* Infinitiv’in önünde.' },
    { id: 'de-b1-h07.q4', t: 'gap', q: 'Viele Menschen ärgern sich ___ verlorene Zeit.', a: ['über'],
      wrong: { 'auf': '*auf* ile *warten, sich freuen* kullanılır.', 'für': '*für* ile *sich interessieren* kullanılır.' },
      e: '*sich ärgern über + Akk.*: *über verlorene Zeit*.' },
    {"id": "de-b1-h07.q5", "t": "mc", "q": "Türkçe konuşan bir arkadaşın radyo bölümünün ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Günlük işlerde zaman kazanmak için pratik ipuçları veriliyor.", "Yeni bir restoranın açılışı duyuruluyor.", "Hava durumu bildiriliyor.", "Bir futbol maçının sonucu aktarılıyor."], "a": 0, "why": {"1": "Restorandan söz edilmiyor.", "2": "Hava durumu yok.", "3": "Spor haberi değil; konu zaman yönetimi."}, "e": "Sprachmittlung: Başlık *Alltag leicht gemacht: Zeit sparen* = günlük hayatta zaman kazanma."}
  ]
});

K.addText('de-b1-h08', {
  level: 'B1', kind: 'listen', genre: 'gespraech', plays: 2,
  title: 'Eine Wanderung am Samstag', sub: 'Cumartesi bir yürüyüş',
  lines: [
    { s: 'Tom', g: 'm', t: 'Hast du Lust, am Samstag mit mir zu wandern? Ich habe vor, den Weg zu gehen, von dem ich dir erzählt habe.', n: 'Cumartesi benimle yürüyüşe çıkmak ister misin? Sana anlattığım yolu yürümeyi planlıyorum.' },
    { s: 'Nora', g: 'f', t: 'Gern. Aber es hängt vom Wetter ab. Ich habe keine Lust, im Regen zu laufen.', n: 'Memnuniyetle. Ama hava durumuna bağlı. Yağmurda yürümek hiç istemem.' },
    { s: 'Tom', g: 'm', t: 'Laut Wetterbericht bleibt es trocken. Die Freunde, mit denen ich letztes Jahr dort war, kommen auch mit. Wir treffen uns um acht am Bahnhof.', n: 'Hava durumuna göre kuru kalacak. Geçen yıl orada birlikte olduğum arkadaşlar da geliyor. Sekizde istasyonda buluşuyoruz.' },
    { s: 'Nora', g: 'f', t: 'Um acht? Es fällt mir schwer, am Wochenende so früh aufzustehen. Aber ich freue mich darauf. Ich nehme Brote mit, damit wir unterwegs nicht hungrig sind.', n: 'Sekizde mi? Hafta sonu bu kadar erken kalkmak bana zor geliyor. Ama şimdiden dört gözle bekliyorum. Yolda aç kalmayalım diye ekmek getiriyorum.' },
    { s: 'Tom', g: 'm', t: 'Super, du brauchst nicht viel mitzubringen. Ich kümmere mich um die Getränke.', n: 'Süper, çok şey getirmene gerek yok. İçeceklerle ben ilgilenirim.' }
  ],
  gloss: { 'wandern': 'yürüyüş yapmak', 'Wetterbericht': 'hava durumu raporu', 'unterwegs': 'yolda', 'Brote': 'ekmekler, sandviçler', 'hungrig': 'aç', 'mitzubringen': 'getirmek (mitbringen)', 'trocken': 'kuru' },
  questions: [
    { id: 'de-b1-h08.q1', t: 'mc', q: 'Nora’nın kararı neye bağlı?', o: ['Havaya', 'Tom’un işine', 'Arkadaşların gelmesine', 'Tren saatine'], a: 0,
      why: { 1: 'Tom’un işinden söz edilmiyor.', 2: 'Arkadaşlar zaten geliyor; Nora’nın şartı hava.', 3: 'Tren saatinden söz edilmiyor.' },
      e: '*Es hängt vom Wetter ab.* – *abhängen von + Dat.*: *vom* = von dem.' },
    { id: 'de-b1-h08.q2', t: 'mc', q: 'Nerede ve ne zaman buluşuyorlar?', o: ['Sekizde istasyonda', 'Sekizde parkta', 'Dokuzda istasyonda', 'Yedide Nora’nın evinde'], a: 0,
      why: { 1: 'Park değil, istasyon: *am Bahnhof*.', 2: 'Dokuz değil, sekiz: *um acht*.', 3: 'Nora’nın evinden söz edilmiyor.' },
      e: '*Wir treffen uns um acht am Bahnhof.*' },
    { id: 'de-b1-h08.q3', t: 'listen', say: 'Ich nehme Brote mit, damit wir unterwegs nicht hungrig sind.', q: 'Cümleyi dinle. Nora neden ekmek getiriyor?', o: ['Yolda aç kalmasınlar diye.', 'Tom ekmek getirmediği için.', 'Akşam yemeği için.', 'Arkadaşlara hediye etmek için.'], a: 0,
      why: { 1: 'Tom’un getirmediğinden söz edilmiyor; Tom içecekleri getiriyor.', 2: 'Akşam yemeğinden söz edilmiyor.', 3: 'Hediyeden söz edilmiyor.' },
      e: '*damit wir unterwegs nicht hungrig sind* – amaç cümlesi; fiil sonda.' },
    { id: 'de-b1-h08.q4', t: 'gap', q: 'Nora freut sich ___, dass sie am Samstag wandern gehen. (henüz gelecekte)', a: ['darauf'],
      wrong: { 'darüber': '*sich freuen über* olmuş şey içindir; yürüyüş henüz gelecekte → **darauf**.', 'dafür': '*dafür* ← für; *sich freuen* için auf → darauf.', 'davon': '*davon* ← von; *sich freuen* için auf → darauf.' },
      e: '*sich freuen auf* → **darauf** + *dass*-cümlesi.' }
  ]
});

K.addText('de-b1-h09', {
  level: 'B1', kind: 'listen', genre: 'interview', plays: 2,
  title: 'Mit dem Fahrrad zur Arbeit', sub: 'İşe bisikletle',
  lines: [
    { s: 'Reporterin', g: 'f', t: 'Herr Kramer, Sie fahren seit zehn Jahren jeden Tag mit dem Fahrrad zur Arbeit. Warum?', n: 'Kramer Bey, on yıldır her gün işe bisikletle gidiyorsunuz. Neden?' },
    { s: 'Herr Kramer', g: 'm', t: 'Ich wollte Geld sparen, und ich habe schnell gemerkt, dass ich mich besser fühle. Statt im Stau zu stehen, bin ich in zwanzig Minuten im Büro.', n: 'Tasarruf etmek istedim ve kendimi daha iyi hissettiğimi çabuk fark ettim. Trafikte beklemek yerine yirmi dakikada ofisteyim.' },
    { s: 'Reporterin', g: 'f', t: 'Haben Sie keine Angst vor dem Verkehr?', n: 'Trafikten korkmuyor musunuz?' },
    { s: 'Herr Kramer', g: 'm', t: 'Doch, anfangs schon. Man muss aufpassen und auf die Autos achten. Ich fahre nur auf Straßen, auf denen es einen Radweg gibt. Außerdem trage ich immer einen Helm, um mich zu schützen.', n: 'Evet, başta korkuyordum. Dikkat etmek ve arabalara dikkat etmek gerekiyor. Sadece bisiklet yolu olan caddelerde sürüyorum. Ayrıca kendimi korumak için hep kask takıyorum.' },
    { s: 'Reporterin', g: 'f', t: 'Was raten Sie Anfängern?', n: 'Yeni başlayanlara ne tavsiye edersiniz?' },
    { s: 'Herr Kramer', g: 'm', t: 'Fangen Sie langsam an, indem Sie zuerst am Wochenende fahren. Und vergessen Sie nicht, das Licht zu prüfen, bevor Sie losfahren.', n: 'Önce hafta sonları sürerek yavaş başlayın. Ve yola çıkmadan önce ışığı kontrol etmeyi unutmayın.' }
  ],
  gloss: { 'bevor': '-meden önce', 'indem': '-erek', 'statt': '-mek yerine', 'raten': 'tavsiye etmek', 'gemerkt': 'fark ettim (merken)', 'Stau': 'trafik sıkışıklığı', 'Radweg': 'bisiklet yolu', 'Helm': 'kask', 'schützen': 'korumak', 'Anfängern': 'yeni başlayanlara (Anfänger)', 'prüfen': 'kontrol etmek', 'anfangs': 'başlangıçta', 'losfahren': 'yola çıkmak', 'Verkehr': 'trafik' },
  questions: [
    { id: 'de-b1-h09.q1', t: 'mc', q: 'Herr Kramer neden bisikletle işe gitmeye başladı?', o: ['Tasarruf etmek istedi.', 'Arabası bozuldu.', 'Doktoru önerdi.', 'Şirket zorunlu tuttu.'], a: 0,
      why: { 1: 'Arabadan söz edilmiyor.', 2: 'Doktordan söz edilmiyor.', 3: 'Şirketten söz edilmiyor.' },
      e: '*Ich wollte Geld sparen, und ich habe schnell gemerkt, dass ich mich besser fühle.*' },
    { id: 'de-b1-h09.q2', t: 'mc', q: 'Bisikletle ofise ne kadar sürede varıyor?', o: ['Yirmi dakikada', 'On dakikada', 'Yarım saatte', 'Bir saatte'], a: 0,
      why: { 1: 'On değil, yirmi dakika.', 2: 'Yarım saat söylenmiyor.', 3: 'Bir saat söylenmiyor.' },
      e: '*Statt im Stau zu stehen, bin ich in zwanzig Minuten im Büro.* – *statt … zu* = -mek yerine.' },
    { id: 'de-b1-h09.q3', t: 'gap', q: 'Ich fahre nur auf Straßen, auf ___ es einen Radweg gibt.', a: ['denen'],
      wrong: { 'die': '*auf* + çoğul Dativ (nerede?) → **denen**; *die* değil.', 'den': 'Relatif zamirde Dativ çoğul **denen** olur (*den* artikel).', 'dem': '*dem* tekil; *Straßen* çoğul.' },
      e: '*Straßen, auf denen es einen Radweg gibt* – *auf* + Dativ çoğul → **denen**.' },
    { id: 'de-b1-h09.q4', t: 'listen', say: 'Ich trage immer einen Helm, um mich zu schützen.', q: 'Cümleyi dinle. Ne anlama geliyor?', o: ['Kendimi korumak için hep kask takıyorum.', 'Kask takmadan sürüyorum.', 'Kask takmak yerine yavaş sürüyorum.', 'Kaskı beni koruduğu için seviyorum.'], a: 0,
      why: { 1: '*ohne … zu* olurdu; duyduğun *um … zu*.', 2: '*statt … zu* olurdu; duyduğun *um … zu*.', 3: 'Cümlede sevmekten söz edilmiyor; amaç var.' },
      e: '*um mich zu schützen* = kendimi korumak için (amaç). Dönüşlü zamir *mich* *zu*’dan önce.' },
    {"id": "de-b1-h09.q5", "t": "mc", "q": "Türkçe konuşan bir arkadaşın röportajın ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Biri işe bisikletle gitmenin nedenlerini ve deneyimlerini anlatıyor.", "Biri yeni bir araba aldığını anlatıyor.", "Biri bisiklet fiyatlarının arttığından şikâyet ediyor.", "Biri otobüs seferlerinin iptal edildiğini bildiriyor."], "a": 0, "why": {"1": "Araba değil, bisiklet konusu.", "2": "Fiyattan şikâyet yok.", "3": "Otobüs iptali yok; konu bisiklet."}, "e": "Sprachmittlung: Başlık *Mit dem Fahrrad zur Arbeit* ana fikri verir."}
  ]
});


K.addText('de-b1-r10', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'So gelingt das Vorstellungsgespräch', sub: 'İş görüşmesi nasıl başarılı olur',
  body: [
    "Ein Vorstellungsgespräch macht fast jeden nervös, obwohl man sich gut vorbereitet hat. Das ist normal. Wer ein paar Dinge beachtet, wirkt aber sicherer.",
    "Zuerst sollten Sie die Firma kennen. Informieren Sie sich im Internet, damit Sie im Gespräch gezielte Fragen stellen können. Da die Personalchefin Ihren Lebenslauf schon gelesen hat, müssen Sie ihn nicht noch einmal erzählen. Sprechen Sie lieber über Ihre Stärken und über Beispiele aus Ihrer Erfahrung. Viele Bewerber reden zu lange über ihr Leben, sodass die Zeit für Fragen fehlt.",
    "Auch nach Schwächen wird oft gefragt. Seien Sie ehrlich, aber nicht zu negativ. Sagen Sie zum Beispiel, woran Sie arbeiten, um besser zu werden.",
    "Kommen Sie zehn Minuten früher. Falls Sie sich verspäten, rufen Sie rechtzeitig an. Je besser Sie vorbereitet sind, desto ruhiger werden Sie sein. Und denken Sie daran: Ein Vorstellungsgespräch ist nicht nur eine Prüfung. Sowohl die Firma als auch Sie selbst wollen herausfinden, ob es passt."
  ],
  gloss: { 'obwohl': '-e rağmen', 'sodass': 'öyle ki', 'je': 'ne kadar', 'reden': 'konuşmak', 'negativ': 'olumsuz', 'normal': 'normal', 'fehlt': 'eksik (fehlen)', 'gelesen': 'okumuş (lesen)', 'gefragt': 'sorulur (fragen)', 'gezielte': 'hedefli, yerinde', 'Personalchefin': 'insan kaynakları müdiresi', 'Bewerber': 'başvuru sahipleri', 'beachtet': 'dikkate alır (beachten)', 'wirkt': 'etki bırakır, görünür (wirken)', 'Stärken': 'güçlü yönler', 'Schwächen': 'zayıf yönler', 'Lebenslauf': 'özgeçmiş', 'Vorstellungsgespräch': 'iş görüşmesi' },
  questions: [
    { id: 'de-b1-r10.q1', t: 'mc', q: 'Schwächen hakkında sorulursa metne göre ne yapılmalı?', o: ['Dürüst olmalı, ama çok olumsuz konuşmamalı.', 'Zayıf yön olmadığını söylemeli.', 'Soruyu cevaplamamalı.', 'Başka birinin zayıf yönlerini anlatmalı.'], a: 0,
      why: { 1: 'Metin dürüst olmayı öneriyor; “zayıf yönüm yok” dürüst olmaz.', 2: 'Cevap vermeden geçmek önerilmiyor.', 3: 'Başkasından söz edilmiyor.' },
      e: '*Seien Sie ehrlich, aber nicht zu negativ.* – *aber* karşıtlık bildirir.' },
    { id: 'de-b1-r10.q2', t: 'mc', q: 'Özgeçmişi neden yeniden anlatmak gerekmiyor?', o: ['İnsan kaynakları müdiresi onu zaten okumuş olduğu için.', 'Özgeçmiş yazılı olduğu için.', 'Görüşme çok kısa olduğu için.', 'Şirket özgeçmiş istemediği için.'], a: 0,
      why: { 1: 'Metin bunu sebep olarak vermiyor.', 2: 'Görüşmenin kısa olduğundan söz edilmiyor.', 3: 'Şirketin özgeçmiş istemediği yazmıyor.' },
      e: '*Da die Personalchefin Ihren Lebenslauf schon gelesen hat, …* – *da* bilinen sebebi bildirir.' },
    { id: 'de-b1-r10.q3', t: 'gap', q: '___ Sie sich verspäten, rufen Sie rechtzeitig an.', a: ['Falls', 'Wenn'],
      wrong: { 'Obwohl': '*obwohl* karşıtlık bildirir; burada olasılık var.', 'Sodass': '*sodass* sonuç bildirir ve cümle başında durmaz.' },
      e: '*Falls* ya da *wenn* = olasılık. Yan cümlede fiil sonda: *Sie sich verspäten*.' },
    { id: 'de-b1-r10.q4', t: 'match', q: 'Tavsiyeyi içeriğiyle eşleştir:', p: [['Vorbereitung', 'die Firma im Internet kennenlernen'], ['im Gespräch', 'über Stärken und Beispiele sprechen'], ['Fragen nach Schwächen', 'ehrlich, aber nicht zu negativ antworten'], ['am Tag des Gesprächs', 'zehn Minuten früher kommen']],
      e: 'Metnin dört tavsiyesi: hazırlık (şirketi tanımak), görüşmede güçlü yönleri anlatmak, zayıf yönler için dürüst olmak, erken gelmek.' },
    { id: 'de-b1-r10.q5', t: 'cloze', q: 'Cümleleri tamamla:', text: 'Man ist nervös, {1} man sich gut vorbereitet hat. Je besser man vorbereitet ist, {2} ruhiger ist man.',
      gaps: {
        '1': { a: ['obwohl'], o: ['obwohl', 'weil', 'falls'], wrong: { 'weil': 'Hazırlıklı olmak gerginliğin sebebi değildir; karşıtlık için **obwohl**.', 'falls': 'Hazırlık yapıldığı bir gerçek; olasılık değil.' } },
        '2': { a: ['desto', 'umso'], o: ['desto', 'umso', 'je'], wrong: { 'je': '*je* ilk parçada durur; ikinci parça **desto / umso**.' } }
      },
      e: '*obwohl* = -e rağmen. *je … desto* = ne kadar … o kadar; *desto*’dan sonra fiil hemen gelir.' },
    {"id": "de-b1-r10.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın bu yazının ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Yazı, bir iş görüşmesine nasıl hazırlanılacağı ve görüşmede nasıl davranılacağı hakkında ipuçları veriyor.", "Yazı, işten nasıl çıkarılacağını anlatıyor.", "Yazı, maaş pazarlığı için gizli hileler öğretiyor.", "Yazı, bir şirketin yıllık raporunu özetliyor."], "a": 0, "why": {"1": "İşten çıkarma değil; işe girme görüşmesi konu.", "2": "Hile değil, dürüst ve hazırlıklı olma önerilir.", "3": "Şirket raporu yok; yazı bireysel hazırlık tavsiyesi."}, "e": "Sprachmittlung: Başlık *So gelingt das Vorstellungsgespräch* = mülakat nasıl başarılır; yazı hazırlık ve tutum ipuçları verir."}
  ]
});

K.addText('de-b1-r11', {
  level: 'B1', kind: 'read', genre: 'email',
  title: 'Reklamation einer Bestellung', sub: 'Bir siparişe itiraz',
  body: [
    "Betreff: Reklamation meiner Bestellung",
    "Sehr geehrte Damen und Herren,",
    "vor zwei Wochen habe ich auf Ihrer Internetseite ein Handy und eine Schutzhülle bestellt. Die Lieferung kam zwar pünktlich, aber das Paket war beschädigt. Das Handy hat einen Riss im Bildschirm, sodass ich es nicht benutzen kann. Die Schutzhülle wurde gar nicht geliefert, obwohl sie auf der Rechnung steht.",
    "Die Zahlung habe ich per Kreditkarte gemacht, und der Betrag wurde sofort von meinem Konto abgebucht. Als Empfängerin habe ich das Paket am Montag angenommen. Auf der Verpackung stand zwar der Name des Absenders, aber keine Rückgabeadresse. Auf der Rechnung steht außerdem ein Rabatt für das Sonderangebot, den ich nicht bekommen habe.",
    "Ich bitte Sie deshalb, mir ein neues Gerät zu schicken oder den Betrag zu erstatten. Falls Sie ein Foto des Schadens brauchen, schicke ich es Ihnen gern. Da die Garantie noch gilt, erwarte ich eine schnelle Lösung. Ich bitte um eine Antwort innerhalb von zehn Tagen.",
    "Ich habe auch mit dem Verkäufer telefoniert. Er behauptete zuerst, ich hätte das Paket selbst beschädigt. Das finde ich unverschämt, denn ich kann es mit Fotos als Nachweis belegen. Schließlich sagte er zu, mir ein neues Gerät zu schicken. Ich verlange nichts Besonderes, nur das, was ich bezahlt habe. Ich erwarte, dass Sie diese Absprache einhalten; falls das nicht möglich ist, erstatten Sie bitte den Betrag per Überweisung auf mein Konto. Ich bin sicher, dass Sie die Sache fair lösen.",
    "Mit freundlichen Grüßen",
    "Sara Lindner"
  ],
  gloss: { 'obwohl': '-e rağmen', 'sodass': 'öyle ki', 'zwar': 'doğru ama', 'gar': 'hiç (gar nicht)', 'gilt': 'geçerlidir (gelten)', 'kam': 'geldi (kommen)', 'Reklamation': 'şikâyet, itiraz', 'Schutzhülle': 'koruyucu kılıf', 'beschädigt': 'hasarlı', 'Riss': 'çatlak', 'erstatten': 'iade etmek', 'Betreff': 'konu', 'Garantie': 'garanti', 'Bildschirm': 'ekran', 'innerhalb': 'içinde', "Kreditkarte": "kredi kartı", "abgebucht": "hesaptan çekildi (abbuchen)", "Konto": "hesap", "Empfängerin": "alıcı (kadın)", "Absenders": "göndericinin", "Rückgabeadresse": "iade adresi", "Farbe": "renk", "reduziert": "indirimli", "Sonderangebot": "kampanya", "Verkäufer": "satıcı", "behauptete": "iddia etti (behaupten)", "unverschämt": "küstah, yüzsüz", "Nachweis": "kanıt", "Absprache": "anlaşma", "einhalten": "uymak", "Überweisung": "havale", "fair": "adil", "Zahlung": "ödeme", "verlange": "talep ediyorum (verlangen)", "belegen": "belgelemek", "angenommen": "teslim aldım (annehmen)" },
  questions: [
    { id: 'de-b1-r11.q1', t: 'mc', q: 'Sara ne için şikâyet ediyor?', o: ['Telefon hasarlı geldi ve kılıf teslim edilmedi.', 'Telefon çok geç geldi.', 'Fatura yanlış düzenlendi.', 'Telefon yanlış renkte geldi.'], a: 0,
      why: { 1: 'Teslimat zamanında geldi (*pünktlich*).', 2: 'Faturanın yanlışlığından değil, kılıfın eksikliğinden söz ediyor.', 3: 'Renkten söz edilmiyor.' },
      e: '*Die Lieferung kam zwar pünktlich, aber das Paket war beschädigt.* – *zwar … aber*.' },
    { id: 'de-b1-r11.q2', t: 'gap', q: 'Das Handy hat einen Riss im Bildschirm, ___ ich es nicht benutzen kann.', a: ['sodass', 'so dass'],
      wrong: { 'obwohl': '*obwohl* “-e rağmen” demektir; burada çatlağın sonucu anlatılıyor.', 'damit': '*damit* amaç bildirir; kullanamamak amaç olamaz.', 'weil': '*weil* sebep bildirir; çatlak kullanamamanın sebebi, ama cümlede sonuç var.' },
      e: '**sodass** = öyle ki, böylece (sonuç). Yan cümlede fiil sonda: *benutzen kann*.' },
    { id: 'de-b1-r11.q3', t: 'gap', q: 'Die Schutzhülle wurde nicht geliefert, ___ sie auf der Rechnung steht.', a: ['obwohl'],
      wrong: { 'weil': '*weil* sebep bildirir; faturada yazması teslim edilmemesinin sebebi olmaz.', 'falls': '*falls* olasılık bildirir; burada kılıf zaten faturada.' },
      e: '**obwohl** = beklenenin tersi: faturada yazıyor ama teslim edilmedi.' },
    { id: 'de-b1-r11.q4', t: 'mc', q: 'Sara ne talep ediyor?', o: ['Yeni bir cihaz ya da tutarın iadesi.', 'Sadece bir özür.', 'Kılıfın ücretsiz gönderilmesi.', 'Telefonun tamir edilmesi.'], a: 0,
      why: { 1: 'Özür istemiyor, çözüm istiyor.', 2: 'Kılıf da eksik ama asıl talebi cihaz ya da iade.', 3: 'Tamirden söz etmiyor; yeni cihaz ya da iade istiyor.' },
      e: '*ein neues Gerät zu schicken oder den Betrag zu erstatten* – *zu*-Infinitiv + *oder*.' },
    { id: 'de-b1-r11.q5', t: 'mc', q: 'Garanti hakkında ne yazıyor?', o: ['Garanti hâlâ geçerli olduğu için hızlı bir çözüm bekliyor.', 'Garanti sona erdiği için ödeme yapacak.', 'Garantiyi uzatmak istiyor.', 'Garanti hakkında bir şey yazmıyor.'], a: 0,
      why: { 1: 'Garanti geçerli; ödeme yapmayı düşünmüyor.', 2: 'Uzatmaktan söz edilmiyor.', 3: 'Yazıyor: *Da die Garantie noch gilt, …*' },
      e: '*Da die Garantie noch gilt, erwarte ich eine schnelle Lösung.* – *da* = madem, -diği için.' },
    {"id": "de-b1-r11.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın e-postanın ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Sara yeni bir telefon sipariş ediyor ve kampanyalı ürünleri soruyor.", "Sara siparişinin hasarlı geldiğini, kılıfın eksik olduğunu bildirip yeni ürün ya da para iadesi istiyor.", "Sara satıcıya telefon için teşekkür ediyor ve garantiyi uzatmak istiyor.", "Sara hesabını kapatmak ve kredi kartını iptal etmek istiyor."], "a": 1, "why": {"0": "Yeni sipariş yok; mevcut siparişle ilgili şikâyet var.", "2": "Teşekkür değil, itiraz (*Reklamation*); garanti zaten geçerli.", "3": "Hesap ya da kart iptalinden söz edilmiyor; istediği iade veya yeni cihaz."}, "e": "Sprachmittlung: Şikâyetin sebebi (hasarlı paket, eksik ürün) ve talep (yeni cihaz / iade) iki cümlede özetlenir."}
  ]
});

K.addText('de-b1-r12', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Einen Vertrag richtig kündigen', sub: 'Bir sözleşme doğru nasıl feshedilir',
  body: [
    "Viele Menschen ärgern sich über Verträge, die sich automatisch verlängern. Handyverträge oder Verträge für das Fitnessstudio laufen oft zwei Jahre. Wenn man nicht rechtzeitig kündigt, verlängert sich der Vertrag. Ältere Verträge laufen oft ein weiteres Jahr weiter; neuere kann man danach monatlich kündigen. Deshalb sollten Sie die Kündigungsfrist im Kalender notieren.",
    "Die Kündigung muss schriftlich erfolgen, entweder per Brief oder per E-Mail. Schreiben Sie darin Ihren Namen, die Kundennummer und das Datum, zu dem der Vertrag enden soll. Bitten Sie außerdem um eine Bestätigung. Falls Sie keine Antwort bekommen, rufen Sie nach einer Woche an.",
    "Auch bei Arbeitsverträgen gibt es Fristen. Als Arbeitnehmer müssen Sie die Kündigung ebenfalls schriftlich einreichen, sonst ist sie nicht gültig. Welche Frist gilt, steht im Vertrag oder im Gesetz. In der Probezeit ist die Frist meist kürzer, und es gibt Ausnahmen für besondere Fälle. Der Arbeitgeber muss Ihnen auf Wunsch ein Arbeitszeugnis ausstellen. Gibt es einen Betriebsrat, kann er bei Fragen helfen.",
    "Ein Tipp: Je früher Sie kündigen, desto weniger Stress haben Sie. Dann wissen sowohl die Firma als auch Sie, woran man ist. Und wenn die Frist schon vorbei ist, gibt es oft trotzdem eine Lösung: Fragen Sie nach einem günstigeren Tarif. Viele Anbieter sind kulant, weil sie ihre Kunden behalten möchten.",
    "Auch bei einem Sportverein ist die Mitgliedschaft ein Vertrag. Der Mitgliedsbeitrag wird oft jährlich bezahlt, und die Kündigung geht an den Vorstand. Wer beim Training nicht mehr mitmachen möchte, sollte das früh mitteilen. Eine mündliche Absprache ist keine verbindliche Vereinbarung. Deshalb gilt: Schriftlich ist sicher. Wer die Bedingungen genau liest, vermeidet unangenehme Überraschungen."
  ],
  gloss: { "Probezeit": "deneme süresi", 'entweder': 'ya', 'sowohl': 'hem', 'je': 'ne kadar', 'Tipp': 'ipucu', 'Stress': 'stres', 'per': 'ile (per E-Mail)', 'erfolgen': 'yapılmak, gerçekleşmek', 'darin': 'içinde', 'woran': 'neye (woran Sie sind: durumunuzun ne olduğu)', 'Kündigungsfrist': 'fesih süresi', 'Bestätigung': 'onay', 'Kundennummer': 'müşteri numarası', 'automatisch': 'otomatik', 'Fitnessstudio': 'spor salonu', 'Anbieter': 'sağlayıcı', 'kulant': 'esnek, anlayışlı', 'Tarif': 'tarife', 'verlängert': 'uzar (sich verlängern)', "Arbeitsverträgen": "iş sözleşmeleri", "einreichen": "sunmak, iletmek", "Arbeitnehmer": "çalışan (işçi)", "gültig": "geçerli", "Ausnahmen": "istisnalar", "Arbeitgeber": "işveren", "Arbeitszeugnis": "iş referans belgesi", "Betriebsrat": "iş yeri temsilciliği", "Sportverein": "spor kulübü", "Mitgliedschaft": "üyelik", "Mitgliedsbeitrag": "üyelik aidatı", "Vorstand": "yönetim kurulu", "Training": "antrenman", "mitteilen": "bildirmek", "mündliche": "sözlü", "Absprache": "anlaşma, sözlü mutabakat", "verbindliche": "bağlayıcı", "Vereinbarung": "anlaşma", "Bedingungen": "koşullar", "Überraschungen": "sürprizler", "Gesetz": "yasa" },
  questions: [
    { id: 'de-b1-r12.q1', t: 'mc', q: 'Zamanında fesih yapılmazsa ne olur?', o: ['Sözleşme uzar (eski sözleşmelerde çoğunlukla bir yıl, yenilerinde aylık fesih mümkün).', 'Sözleşme hemen biter.', 'Müşteri ceza öder.', 'Firma sözleşmeyi feshetmek zorunda kalır.'], a: 0,
      why: { 1: 'Tam tersi: sözleşme kendiliğinden bitmez, uzar.', 2: 'Cezadan söz edilmiyor.', 3: 'Firmanın feshinden söz edilmiyor.' },
      e: '*Wenn man nicht rechtzeitig kündigt, verlängert sich der Vertrag.* – Eski sözleşmeler çoğunlukla bir yıl daha sürer, yenilerini sonra aylık feshedebilirsiniz.' },
    { id: 'de-b1-r12.q2', t: 'gap', q: 'Die Kündigung muss ___ erfolgen. (yazılı olarak)', a: ['schriftlich'],
      wrong: { 'mündlich': '*mündlich* sözlü demektir; metin yazılı fesih istiyor.', 'telefonisch': 'Telefonla fesih metinde önerilmiyor.' },
      e: '*schriftlich* = yazılı: mektup ya da e-posta.' },
    { id: 'de-b1-r12.q3', t: 'mc', q: 'Fesih yazısında hangisi yer almalı?', o: ['Ad, müşteri numarası ve sözleşmenin biteceği tarih', 'Sadece ad ve adres', 'Bir şikâyet nedeni', 'Maaş bilgisi'], a: 0,
      why: { 1: 'Metin müşteri numarası ve tarihi de istiyor.', 2: 'Şikâyet nedeni istenmiyor.', 3: 'Maaşla ilgisi yok.' },
      e: '*Schreiben Sie darin Ihren Namen, die Kundennummer und das Datum …*' },
    { id: 'de-b1-r12.q4', t: 'cloze', q: 'Cümleyi tamamla:', text: 'Je früher Sie kündigen, {1} weniger Stress haben Sie. {2} Sie keine Antwort bekommen, rufen Sie nach einer Woche an.',
      gaps: {
        '1': { a: ['desto', 'umso'], o: ['desto', 'umso', 'je'], wrong: { 'je': '*je* ilk parçada durur; ikinci parça **desto / umso**.' } },
        '2': { a: ['Falls', 'Wenn'], o: ['Falls', 'Wenn', 'Obwohl'], wrong: { 'Obwohl': '*obwohl* karşıtlık bildirir; burada olasılık var.' } }
      },
      e: '*je … desto* ve olasılık için *falls / wenn*.' },
    { id: 'de-b1-r12.q5', t: 'mc', q: 'Süre geçmişse metin ne öneriyor?', o: ['Daha uygun bir tarife sormayı', 'Hemen avukata gitmeyi', 'Faturayı ödememeyi', 'Yeni bir sözleşme yapmamayı'], a: 0,
      why: { 1: 'Avukattan söz edilmiyor.', 2: 'Ödememek önerilmiyor.', 3: 'Böyle bir tavsiye yok.' },
      e: '*Fragen Sie nach einem günstigeren Tarif. Viele Anbieter sind kulant …*' },
    {"id": "de-b1-r12.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın yazının ne anlattığını soruyor. Hangi özet doğru?", "o": ["Sözleşmeler hiçbir zaman feshedilemez ve süre sonunda otomatik olarak yenilenir.", "Sözleşmeleri zamanında ve yazılı olarak feshetmek gerekir; iş sözleşmeleri ve kulüp üyelikleri için de süreler vardır; geç kalınırsa daha iyi bir tarife sorulabilir.", "Sözleşme feshi için noterden belge gerekir ve yalnızca avukatlar fesih yapabilir.", "Fesih ancak telefonda yapılabilir ve mutlaka telefon numarası verilmelidir."], "a": 1, "why": {"0": "Fesih mümkün; ama süreyi kaçırırsan sözleşme uzar.", "2": "Noter ya da avukat şart değil; e-posta ya da mektup yeterlidir.", "3": "Fesih **yazılı** (mektup ya da e-posta) olmalıdır; telefon yeterli değil."}, "e": "Sprachmittlung: Ana mesaj: *rechtzeitig, schriftlich, Bestätigung* – zamanında, yazılı ve onay isteyerek fesih."}
  ]
});

K.addText('de-b1-r13', {
  level: 'B1', kind: 'read', genre: 'artikel',
  title: 'Streit im Treppenhaus', sub: 'Merdiven boşluğunda kavga',
  body: [
    "Letzte Woche gab es in unserem Haus Streit. Eine Nachbarin hat sich über den Lärm beschwert, weil im Treppenhaus oft Kinder spielen. Der Vater der Kinder war verärgert, obwohl er sonst sehr freundlich ist. Beide hatten ein bisschen recht: Kinder sollen spielen dürfen, aber ältere Menschen brauchen auch Ruhe.",
    "Die Hausverwaltung hat dann ein Treffen organisiert. Zuerst wurde jeder angehört, sodass alle ihre Meinung sagen konnten. Danach wurde ein Kompromiss gefunden: Von Montag bis Freitag gilt nachmittags zwischen zwei und vier Uhr Ruhezeit: Dann soll es im Treppenhaus still sein. Im Hof dürfen die Kinder dagegen jederzeit spielen. Die Hausordnung wurde entsprechend geändert.",
    "Zum Treffen kamen fast alle Bewohner. Neben den Eltern waren auch die Großeltern der Zwillinge da, außerdem das Ehepaar aus dem Erdgeschoss. Eine Bekannte der Nachbarin hörte neugierig zu. Der Vater war zuerst schüchtern, doch dann erklärte er, dass die Kinder im Winter nach dem Kindergarten keinen Spielplatz in der Nähe haben und deshalb im Treppenhaus spielen.",
    "Heute sind alle zufrieden. Je offener man miteinander spricht, desto schneller findet man eine Lösung. Weder die Nachbarin noch der Vater wollten einen langen Streit. Falls es wieder Probleme gibt, wollen wir sofort miteinander reden.",
    "Die Nachbarin gab zu, dass sie in der letzten Zeit müde und gereizt war. Ein Vorwurf hilft niemandem, sagte der Hausmeister. Er hatte alles fleißig notiert, damit am Ende niemand benachteiligt wird. Man sollte nicht faul abwarten, bis der Konflikt größer wird, sondern früh nach dem Standpunkt des anderen fragen. Der Unterschied zwischen einem Streit und einem Gespräch ist oft nur der Ton.",
    "Im Sommer wollen wir sogar gemeinsam eine Hochzeit im Hof feiern: Der Sohn der Familie aus dem Erdgeschoss heiratet. „Herzlichen Glückwunsch!“, rief die Nachbarin als Erste. Das zeigt, dass ein Konflikt eine gute Beziehung nicht zerstören muss."
  ],
  gloss: { 'obwohl': '-e rağmen', 'sodass': 'öyle ki', 'je': 'ne kadar', 'Hof': 'avlu', 'reden': 'konuşmak', 'gab': 'vardı (geben)', 'gefunden': 'bulundu (finden)', 'geändert': 'değiştirildi (ändern)', 'letzte': 'geçen', 'Treppenhaus': 'merdiven boşluğu', 'Hausverwaltung': 'bina yönetimi', 'Kompromiss': 'uzlaşma', 'Ruhezeit': 'sessizlik saati', 'verärgert': 'kızgın', 'organisiert': 'organize etti (organisieren)', 'Hausordnung': 'bina kuralları', 'entsprechend': 'buna uygun olarak', 'gilt': 'geçerlidir (gelten)', "Zwillinge": "ikizler", "Großeltern": "büyükanne ve büyükbaba", "Ehemann": "koca", "Ehefrau": "eş (kadın)", "Erdgeschoss": "zemin kat", "Bekannte": "tanıdık", "neugierig": "meraklı", "schüchtern": "utangaç", "Kindergarten": "anaokulu", "Spielplatz": "oyun parkı", "gereizt": "sinirli", "Vorwurf": "suçlama", "fleißig": "çalışkan, özenle", "benachteiligt": "mağdur edilmiş", "faul": "tembel", "Konflikt": "çatışma", "Standpunkt": "bakış açısı", "Unterschied": "fark", "Hochzeit": "düğün", "Herzlichen Glückwunsch": "tebrikler", "Beziehung": "ilişki", "zerstören": "bozmak, yıkmak" },
  questions: [
    { id: 'de-b1-r13.q1', t: 'mc', q: 'Anlaşmazlığın nedeni neydi?', o: ['Merdiven boşluğunda oynayan çocukların gürültüsü', 'Yanlış park edilmiş bir araba', 'Kira artışı', 'Çöpün yanlış atılması'], a: 0,
      why: { 1: 'Arabadan söz edilmiyor.', 2: 'Kiradan söz edilmiyor.', 3: 'Çöpten söz edilmiyor.' },
      e: '*Eine Nachbarin hat sich über den Lärm beschwert, weil im Treppenhaus oft Kinder spielen.*' },
    { id: 'de-b1-r13.q2', t: 'mc', q: 'Bina yönetimi ne yaptı?', o: ['Bir toplantı düzenledi ve herkesi dinledi.', 'Ailelerden birini binadan çıkardı.', 'Kirayı düşürdü.', 'Hiçbir şey yapmadı.'], a: 0,
      why: { 1: 'Böyle bir şey yazmıyor.', 2: 'Kiradan söz edilmiyor.', 3: 'Metin tam tersini söylüyor: toplantı düzenledi.' },
      e: '*Die Hausverwaltung hat dann ein Treffen organisiert. Zuerst wurde jeder gehört …* – Passiv Präteritum.' },
    { id: 'de-b1-r13.q3', t: 'gap', q: 'Die Hausordnung wurde entsprechend ___. (ändern)', a: ['geändert'],
      wrong: { 'ändern': 'Passiv’de mastar değil Partizip II gerekir: *geändert*.', 'änderte': 'Bu Präteritum’dur; Passiv’de *wurde + Partizip II*.' },
      e: 'Präteritum Passiv: **wurde + Partizip II** – *wurde geändert*.' },
    { id: 'de-b1-r13.q4', t: 'mc', q: 'Uzlaşmaya göre çocuklar nerede ve ne zaman oynayabilir?', o: ['Avluda her zaman; hafta içi 14–16 arası merdiven boşluğunda sessizlik olmalı.', 'Yalnızca hafta sonları.', 'Sadece sabahları.', 'Hiçbir yerde.'], a: 0,
      why: { 1: 'Hafta sonuyla sınırlı bir kural yok; avluda her zaman oynayabilirler.', 2: 'Sabahlar için ayrı bir kural yazılmıyor.', 3: 'Çocuklar avluda oynayabilir; sessizlik saati sadece merdiven boşluğu için.' },
      e: '*Im Hof dürfen die Kinder dagegen jederzeit spielen.*' },
    { id: 'de-b1-r13.q5', t: 'cloze', q: 'Cümleleri tamamla:', text: '{1} die Nachbarin noch der Vater wollten einen langen Streit. Je offener man spricht, {2} schneller findet man eine Lösung.',
      gaps: {
        '1': { a: ['Weder'], o: ['Weder', 'Entweder', 'Sowohl'], wrong: { 'Entweder': '*entweder … oder* seçenek bildirir; burada iki kişi de kavga istemiyor.', 'Sowohl': '*sowohl … als auch* olumlu bir “hem … hem de”dir.' } },
        '2': { a: ['desto', 'umso'], o: ['desto', 'umso', 'je'], wrong: { 'je': '*je* ilk parçada durur; ikinci parça **desto / umso**.' } }
      },
      e: '*weder … noch* = ne … ne de. *je … desto* = ne kadar … o kadar.' },
    {"id": "de-b1-r13.q6", "t": "mc", "q": "Türkçe konuşan bir arkadaşın yazının ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Bir apartmanda komşular avluyu tamamen çocuklara yasaklıyor ve yönetim hiçbir şey yapmıyor.", "Bir apartmanda merdiven gürültüsü yüzünden kavga çıkıyor; toplantıda herkes dinleniyor, sessizlik saatleri belirlenerek uzlaşma sağlanıyor.", "Bir komşu apartmandan taşınıyor çünkü çocuklar çok gürültü yapıyor.", "Bina yönetimi kirayı artırıyor ve komşular itiraz ediyor."], "a": 1, "why": {"0": "Çocuklar avluda **her zaman** oynayabilir; yasak sadece merdiven boşluğu için belirli saatlerde.", "2": "Kimse taşınmıyor; sonunda herkes memnun.", "3": "Kira artışından söz edilmiyor; konu gürültü ve ev kuralları."}, "e": "Sprachmittlung: Sorun (gürültü), çözüm (toplantı, *Ruhezeit*) ve sonuç (herkes memnun) üç cümlede özetlenir."}
  ]
});

K.addText('de-b1-h10', {
  level: 'B1', kind: 'listen', genre: 'gespraech', plays: 2,
  title: 'Schichttausch im Team', sub: 'Ekipte vardiya değişimi',
  lines: [
    {"s": "Anna", "g": "f", "t": "Jan, hast du kurz Zeit? Es geht um die Schichten nächste Woche. Ich muss am Mittwoch zum Arzt. Kannst du meine Spätschicht übernehmen?", "n": "Jan, kısa bir süren var mı? Gelecek haftaki vardiyalar hakkında. Çarşamba doktora gitmem gerekiyor. Akşam vardiyamı üstlenebilir misin?"},
    {"s": "Jan", "g": "m", "t": "Mittwoch geht leider nicht, da ich meinem Bruder beim Umzug helfe. Aber ich kann am Freitag für dich arbeiten, falls dir das hilft.", "n": "Çarşamba maalesef olmaz, çünkü kardeşime taşınmada yardım ediyorum. Ama sana yardımı olacaksa cuma günü yerine çalışabilirim."},
    {"s": "Anna", "g": "f", "t": "Freitag brauche ich nicht, aber danke. Ich habe lange nach einem anderen Tag gesucht, aber es geht nur Mittwoch.", "n": "Cuma bana gerekmiyor ama teşekkürler. Başka bir gün için uzun uzun baktım ama sadece çarşamba olabiliyor."},
    {"s": "Jan", "g": "m", "t": "Frag doch Lea. Sie hat mittwochs frei, und sie sucht zusätzliche Stunden.", "n": "Lea’ya sorsana. Çarşambaları izinli ve ekstra saat arıyor."},
    {"s": "Anna", "g": "f", "t": "Gute Idee. Ich frage sie gleich. Danke, dass du mir helfen wolltest, obwohl du selbst viel zu tun hast.", "n": "İyi fikir. Hemen soruyorum. Kendi işin çok olmasına rağmen bana yardım etmek istediğin için sağ ol."},
    {"s": "Jan", "g": "m", "t": "Kein Problem. Dafür übernimmst du nächstes Mal meine Schicht, damit ich ausschlafen kann.", "n": "Sorun değil. Karşılığında bir dahaki sefere sen benim vardiyamı üstlenirsin, ben de uzun uzun uyuyabileyim diye."},
    {"s": "Anna", "g": "f", "t": "Hoffentlich sagt unser Vorgesetzter ja. In der letzten Besprechung hat er gesagt, dass jeder Tausch eine Vertretung braucht.", "n": "Umarım amirimiz evet der. Son toplantıda her değişimin bir vekil gerektirdiğini söyledi."},
    {"s": "Jan", "g": "m", "t": "Stimmt, das steht in der Vereinbarung mit dem Betriebsrat. Ich bedauere, dass es so kompliziert ist.", "n": "Doğru, bu iş yeri temsilciliğiyle yapılan anlaşmada yazıyor. Bu kadar karmaşık olmasına üzülüyorum."},
    {"s": "Anna", "g": "f", "t": "Ich verspreche, dass ich mich heute noch melde. Machst du später Pause? Ich habe heute zwei Überstunden gemacht und brauche etwas zu essen.", "n": "Bugün mutlaka haber vereceğime söz veriyorum. Sonra mola veriyor musun? Bugün iki saat fazla mesai yaptım ve yemek yemem lazım."},
    {"s": "Jan", "g": "m", "t": "Ja, wir treffen uns in der Kantine.", "n": "Evet, yemekhanede buluşuruz."}
  ],
  gloss: { 'obwohl': '-e rağmen', 'damit': 'diye, -sin diye', 'gesucht': 'aradım (suchen)', 'Schicht': 'vardiya', 'Spätschicht': 'akşam vardiyası', 'Umzug': 'taşınma', 'übernehmen': 'üstlenmek', 'zusätzliche': 'ek, ekstra', 'ausschlafen': 'doyasıya uyumak', 'Stunden': 'saatler', "Vorgesetzter": "amir", "Besprechung": "toplantı", "Tausch": "değişim", "Vertretung": "vekil", "Vereinbarung": "anlaşma", "Betriebsrat": "iş yeri temsilciliği", "bedauere": "üzülüyorum (bedauern)", "verspreche": "söz veriyorum (versprechen)", "Überstunden": "fazla mesai", "Kantine": "yemekhane" },
  questions: [
    { id: 'de-b1-h10.q1', t: 'mc', q: 'Jan neden çarşamba günü yardım edemiyor?', o: ['Kardeşine taşınmada yardım ediyor.', 'Kendisi doktora gidiyor.', 'Çarşamba izinli değil.', 'Hasta.'], a: 0,
      why: { 1: 'Doktora giden Anna.', 2: 'İzinli olup olmadığı söylenmiyor.', 3: 'Hasta olduğundan söz edilmiyor.' },
      e: '*Mittwoch geht leider nicht, da ich meinem Bruder beim Umzug helfe.* – *da* = -diği için.' },
    { id: 'de-b1-h10.q2', t: 'mc', q: 'Anna kime soracak?', o: ['Lea’ya', 'Amire', 'Jan’ın kardeşine', 'Kimseye'], a: 0,
      why: { 1: 'Amirden söz edilmiyor.', 2: 'Kardeş taşınıyor, çalışmıyor.', 3: 'Soracağını söylüyor.' },
      e: '*Frag doch Lea. Sie hat mittwochs frei.*' },
    { id: 'de-b1-h10.q3', t: 'listen', say: 'Mittwoch geht leider nicht, da ich meinem Bruder beim Umzug helfe.', q: 'Cümleyi dinle. Ne anlama geliyor?', o: ['Çarşamba maalesef olmaz, çünkü kardeşime taşınmada yardım ediyorum.', 'Çarşamba olur, kardeşime sonra yardım ederim.', 'Çarşamba kardeşim bana yardım ediyor.', 'Kardeşime yardım etmek istemiyorum.'], a: 0,
      why: { 1: '*geht leider nicht* = olmaz.', 2: 'Yardım eden Jan; kardeşi değil.', 3: 'İsteksizlikten söz edilmiyor; sebep bildirilir.' },
      e: '*da* sebep bildirir; yan cümlede fiil sonda: *helfe*.' },
    { id: 'de-b1-h10.q4', t: 'gap', q: 'Anna übernimmt nächstes Mal Jans Schicht, ___ er ausschlafen kann. (uyuyabilsin diye)', a: ['damit', 'sodass'],
      wrong: { 'obwohl': '*obwohl* “-e rağmen” demektir; burada amaç ya da sonuç var.', 'falls': '*falls* olasılık bildirir; burada olasılık yok.' },
      e: '**damit** = amaç (uyuyabilsin diye); *sodass* da sonuç olarak anlaşılabilir. Yan cümlede fiil sonda.' }
  ]
});

K.addText('de-b1-h11', {
  level: 'B1', kind: 'listen', genre: 'radio', plays: 2,
  title: "Fliegen oder Bahn fahren?", sub: "Uçmak mı, trene binmek mi? Radyo tartışması",
  lines: [
    {"s": "Moderatorin", "g": "f", "t": "Heute diskutieren wir die Frage: Fliegen oder Bahn fahren? Bei mir sind Herr Kern, der ein Reisebüro leitet, und Frau Aydın vom Umweltschutzverein. Herr Kern, Sie fangen an.", "n": "Bugün şu soruyu tartışıyoruz: Uçmak mı, trene binmek mi? Yanımda bir seyahat acentesini yöneten Bay Kern ve çevre koruma derneğinden Bayan Aydın var. Bay Kern, siz başlayın."},
    {"s": "Herr Kern", "g": "m", "t": "Viele Kunden wollen weit weg, an einen Strand oder zu einer berühmten Sehenswürdigkeit. Ein Flug ist bei großer Entfernung schnell, und schon nach wenigen Stunden liegt man am Strand. Mit der Bahn muss man oft umsteigen, und die Ankunft ist unsicher.", "n": "Birçok müşteri uzağa gitmek istiyor, bir plaja ya da ünlü bir gezilecek yere. Uzak mesafelerde uçuş hızlıdır ve birkaç saat sonra insan plajdadır. Trenle sık sık aktarma yapılır ve varış zamanı belirsizdir."},
    {"s": "Frau Aydın", "g": "f", "t": "Das stimmt teilweise. Aber ein Flugzeug verursacht viel mehr Abgase als ein Zug. Der Klimawandel ist ein ernstes Problem, und es ist nicht nachhaltig, jeden Urlaub weit weg zu machen. Wer in den Zug einsteigt, spart Energie. Ein guter Fahrplan und eine Reservierung machen die Reise bequem. Immer mehr Fahrgäste entdecken das.", "n": "Kısmen doğru. Ama bir uçak, trenden çok daha fazla egzoz gazı çıkarır. İklim değişikliği ciddi bir sorun ve her tatili uzakta yapmak sürdürülebilir değil. Trene binen enerji tasarrufu yapar. İyi bir tarife ve rezervasyon yolculuğu rahat yapar. Giderek daha fazla yolcu bunu keşfediyor."},
    {"s": "Herr Kern", "g": "m", "t": "Ich bin einverstanden, dass man den Umweltschutz ernst nehmen muss. Aber viele können sich lange Bahnfahrten nicht leisten, weil sie oft teurer sind als ein Billigflug.", "n": "Çevre korumanın ciddiye alınması gerektiğine katılıyorum. Ama birçok kişi uzun tren yolculuklarını karşılayamaz, çünkü bunlar çoğu zaman ucuz bir uçuştan daha pahalıdır."},
    {"s": "Frau Aydın", "g": "f", "t": "Genau da muss die Politik handeln. Und bei kürzeren Strecken kann jeder öffentliche Verkehrsmittel nutzen.", "n": "Politikanın tam burada harekete geçmesi gerekiyor. Kısa mesafelerde de herkes toplu taşımayı kullanabilir."},
    {"s": "Moderatorin", "g": "f", "t": "Danke Ihnen beiden. Nach der Musik hören wir Ihre Anrufe.", "n": "İkinize de teşekkürler. Müzikten sonra sizin aramalarınızı dinleyeceğiz."}
  ],
  gloss: { "diskutieren": "tartışmak", "Reisebüro": "seyahat acentesi", "Umweltschutzverein": "çevre koruma derneği", "Strand": "plaj", "Sehenswürdigkeit": "gezilecek yer", "Flug": "uçuş", "Entfernung": "mesafe", "Gepäck": "bagaj", "übernachtet": "konaklıyor (übernachten)", "umsteigen": "aktarma yapmak", "Ankunft": "varış", "Flugzeug": "uçak", "Abgase": "egzoz gazları", "Klimawandel": "iklim değişikliği", "nachhaltig": "sürdürülebilir", "einsteigt": "biner (einsteigen)", "Fahrplan": "tarife", "Reservierung": "rezervasyon", "Fahrgäste": "yolcular", "einverstanden": "hemfikir", "Umweltschutz": "çevre koruma", "Billigflug": "ucuz uçuş", "handeln": "harekete geçmek", "Strecken": "mesafeler", "öffentliche": "toplu" },
  questions: [
    {"id": "de-b1-h11.q1", "t": "mc", "q": "Tartışmanın konusu nedir?", "o": ["Uçak mı yoksa tren mi kullanılmalı?", "Hangi otelde kalınmalı?", "Bilet fiyatlarının nasıl hesaplanacağı", "Hangi şehirde tatil yapılmalı?"], "a": 0, "why": {"1": "Otel sadece örnek olarak geçer.", "2": "Fiyatlar yalnızca bir argüman.", "3": "Belirli bir şehir önerilmiyor."}, "e": "*Fliegen oder Bahn fahren?*"},
    {"id": "de-b1-h11.q2", "t": "mc", "q": "Frau Aydın uçağı neden eleştiriyor?", "o": ["Trenden çok daha fazla egzoz gazı çıkardığı ve iklim için zararlı olduğu için.", "Uçaklar çok yavaş olduğu için.", "Bagaj için ek ücret aldığı için.", "Pilotlar yetersiz olduğu için."], "a": 0, "why": {"1": "Hızdan söz etmiyor; Bay Kern uçuşun hızlı olduğunu söylüyor.", "2": "Bagaj ücreti konuşulmuyor.", "3": "Pilotlardan söz edilmiyor."}, "e": "*Ein Flugzeug verursacht viel mehr Abgase als ein Zug.*"},
    {"id": "de-b1-h11.q3", "t": "gap", "q": "Wer in den Zug ___, spart Energie. (binmek)", "a": ["einsteigt"], "wrong": {"einsteigen": "Özne *wer* tekil: **einsteigt**.", "steigt ein": "Yan cümlede ayrılabilen fiil birleşir ve sonda durur: **einsteigt**."}, "e": "Yan cümlede ayrılabilen fiilin ön eki fiille birleşir: *einsteigt*."},
    {"id": "de-b1-h11.q4", "t": "listen", "say": "Ein guter Fahrplan und eine Reservierung machen die Reise bequem.", "q": "Cümleyi dinle. Ne anlama geliyor?", "o": ["İyi bir tarife ve rezervasyon yolculuğu rahat yapar.", "Rezervasyon yolculuğu pahalı yapar.", "Tarife yolculuğu karmaşık yapar.", "Yolculuk bu yüzden iptal edilir."], "a": 0, "why": {"1": "Cümlede fiyattan söz edilmiyor; *bequem* = rahat.", "2": "Tarife yolculuğu kolaylaştırır, karmaşık yapmaz.", "3": "İptalden söz edilmiyor."}, "e": "*bequem* = rahat; *machen … bequem* = rahat yapar."},
    {"id": "de-b1-h11.q5", "t": "mc", "q": "Türkçe konuşan bir arkadaşın tartışmanın ne hakkında olduğunu soruyor. Hangi özet doğru?", "o": ["Radyoda uçak ve tren karşılaştırılıyor: Bay Kern uçuşu hızlı buluyor, Bayan Aydın iklim için trenin daha iyi olduğunu söylüyor; ikisi de çevre korumanın ciddiye alınması gerektiğini kabul ediyor.", "Radyoda yalnızca yeni bir uçak modeli tanıtılıyor.", "Radyoda trenlerin tamamen kaldırılması isteniyor.", "Radyoda iki kişi aynı fikirde ve hiç tartışma yok."], "a": 0, "why": {"1": "Model tanıtımı yok; konu uçak mı tren mi.", "2": "Tam tersi: Bayan Aydın tren yolculuğunu öneriyor.", "3": "Farklı görüşler var (hız ve iklim); ancak ortak payda var: ikisi de çevre korumayı ciddiye almak gerektiğini söylüyor."}, "e": "Sprachmittlung: Tartışmada iki görüş (hız / iklim) ve ortak nokta (çevre korumayı ciddiye almak) özetlenir."}
  ]
});

K.addText('de-b1-h12', {
  level: 'B1', kind: 'listen', genre: 'radio', plays: 2,
  title: 'Brauche ich diese Versicherung?', sub: 'Bu sigortaya ihtiyacım var mı?',
  lines: [
    { s: 'Moderatorin', g: 'f', t: 'Heute geht es um Versicherungen. Herr Weiß, welche braucht man wirklich?', n: 'Bugünkü konumuz sigortalar. Weiß Bey, gerçekten hangilerine ihtiyaç var?' },
    { s: 'Herr Weiß', g: 'm', t: 'Nicht jede Versicherung und nicht jeder Tarif ist sinnvoll. Aber eine private Haftpflichtversicherung ist sehr wichtig. Wenn man aus Versehen einen Schaden verursacht, zahlt die Versicherung, sodass man nicht selbst viel Geld bezahlen muss.', n: 'Her sigorta ve her tarife mantıklı değil. Ama özel bir sorumluluk sigortası çok önemli. Biri yanlışlıkla bir hasara neden olursa sigorta öder, böylece kişi kendisi çok para ödemek zorunda kalmaz.' },
    { s: 'Moderatorin', g: 'f', t: 'Und teure Tarife sind immer besser?', n: 'Peki pahalı tarifeler her zaman daha mı iyi?' },
    { s: 'Herr Weiß', g: 'm', t: 'Nein, ein teurer Tarif ist nicht automatisch besser. Vergleichen Sie mehrere Anbieter, und lesen Sie den Vertrag in Ruhe, bevor Sie ihn abschließen. Falls Sie etwas nicht verstehen, fragen Sie nach.', n: 'Hayır, pahalı bir tarife otomatik olarak daha iyi değildir. Birkaç sağlayıcıyı karşılaştırın ve sözleşmeyi yapmadan önce sakin sakin okuyun. Bir şeyi anlamazsanız tekrar sorun.' }
  ],
  gloss: { 'bevor': '-meden önce', 'sodass': 'öyle ki', 'teurer': 'daha pahalı (teuer)', 'Haftpflichtversicherung': 'sorumluluk sigortası', 'Versehen': 'yanlışlık, dikkatsizlik', 'verursacht': 'neden olur (verursachen)', 'vergleichen': 'karşılaştırmak', 'abschließen': 'yapmak (sözleşme)', 'Anbieter': 'sağlayıcı', 'sinnvoll': 'mantıklı, anlamlı', 'automatisch': 'otomatik' },
  questions: [
    { id: 'de-b1-h12.q1', t: 'mc', q: 'Herr Weiß’a göre hangi sigorta çok önemli?', o: ['Özel sorumluluk sigortası', 'Her sigorta', 'Telefon sigortası', 'Hiçbiri'], a: 0,
      why: { 1: 'Tam tersi: her sigorta mantıklı değil (*nicht jede …*).', 2: 'Telefon sigortasından söz edilmiyor.', 3: 'Bir sigorta çok önemli diyor.' },
      e: '*Nicht jede Versicherung und nicht jeder Tarif ist sinnvoll. Aber eine private Haftpflichtversicherung ist sehr wichtig.*' },
    { id: 'de-b1-h12.q2', t: 'mc', q: 'Pahalı tarifeler için ne söylüyor?', o: ['Otomatik olarak daha iyi değildir.', 'Her zaman daha iyidir.', 'Hiç değerli değildir.', 'Sadece gençler için uygundur.'], a: 0,
      why: { 1: 'Tersini söylüyor.', 2: 'Pahalı olan değersiz demiyor; sadece otomatik olarak iyi değil diyor.', 3: 'Gençlerden söz edilmiyor.' },
      e: '*ein teurer Tarif ist nicht automatisch besser.*' },
    { id: 'de-b1-h12.q3', t: 'listen', say: 'Falls Sie etwas nicht verstehen, fragen Sie nach.', q: 'Cümleyi dinle. Ne anlama geliyor?', o: ['Bir şeyi anlamazsanız tekrar sorun.', 'Her şeyi anlamanız gerekiyor.', 'Hiçbir şey sormayın.', 'Anlamadıysanız sözleşmeyi imzalayın.'], a: 0,
      why: { 1: 'Cümle zorunluluk değil, tavsiye veriyor.', 2: '*fragen Sie nach* = sorun.', 3: 'İmzalamaktan söz edilmiyor.' },
      e: '*Falls* = olasılık. *nachfragen* ayrılabilen fiil: *fragen Sie … nach*.' },
    { id: 'de-b1-h12.q4', t: 'gap', q: 'Die Versicherung übernimmt den Schaden, ___ man nicht selbst viel Geld zahlen muss. (böylece / diye)', a: ['damit', 'sodass', 'so dass'],
      wrong: { 'obwohl': '*obwohl* “-e rağmen” demektir; burada amaç ya da sonuç var.', 'falls': '*falls* olasılık bildirir; burada gerçekleşen bir durum anlatılıyor.' },
      e: '**damit** (amaç) ya da *sodass* (sonuç): sigorta öder, böylece kişi kendisi çok para ödemek zorunda kalmaz.' }
  ]
});

})(window.KOPRU);
