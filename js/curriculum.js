/* Deutsch ⇄ Türkçe – Lehrplan (A1–C2) für beide Kurse.
 * Jedes Thema bekommt seine Inhalte über KOPRU.add(id, {...}) aus den Dateien in js/content/.
 * Themen ohne Inhalte erscheinen als „in Vorbereitung“.
 */
window.KOPRU = {
  content: {},
  add: function (id, data) { this.content[id] = data; },
  vocab: {},     // Wortschatz je Kurs+Niveau, z. B. vocab['de-a1'] = [ {id, t, n, …}, … ]
  addVocab: function (key, list) { this.vocab[key] = (this.vocab[key] || []).concat(list); },
  // Wortfelder für den Wortschatz (gleich für beide Kurse): [id, Deutsch, Türkisch]
  wordfields: [
    ['greet', 'Begrüßung & Höflichkeit', 'Selamlaşma ve nezaket'],
    ['people', 'Personen & Familie', 'Kişiler ve aile'],
    ['numbers', 'Zahlen, Zeit & Kalender', 'Sayılar, zaman ve takvim'],
    ['food', 'Essen & Trinken', 'Yiyecek ve içecek'],
    ['home', 'Wohnen & Haushalt', 'Ev ve ev işleri'],
    ['city', 'Stadt, Wege & Verkehr', 'Şehir, yol ve ulaşım'],
    ['shop', 'Einkaufen & Kleidung', 'Alışveriş ve giyim'],
    ['work', 'Arbeit, Schule & Ämter', 'İş, okul ve resmî daireler'],
    ['body', 'Körper & Gesundheit', 'Vücut ve sağlık'],
    ['free', 'Freizeit, Wetter & Natur', 'Boş zaman, hava ve doğa'],
    ['verbs', 'Wichtige Verben', 'Önemli fiiller'],
    ['adj', 'Eigenschaften', 'Sıfatlar'],
    ['small', 'Kleine Wörter', 'Küçük kelimeler'],
    // ab A2 (nur anhängen, nie umsortieren oder umbenennen der IDs)
    ['travel', 'Reisen & Urlaub', 'Seyahat ve tatil'],
    ['media', 'Medien & Kommunikation', 'Medya ve iletişim'],
    ['feel', 'Gefühle & Meinungen', 'Duygular ve görüşler'],
    ['service', 'Dienstleistungen & Behörden', 'Hizmetler ve resmî işler']
  ],
  dialogs: {},   // Alltagsdialoge, z. B. dialogs['de-a1-d01'] = { level, title, lines, questions }
  addDialog: function (id, d) { d.id = id; this.dialogs[id] = d; },
  texts: {},     // Lesetexte (ADR-12.2), z. B. texts['de-a2-r01'] = { level, kind:'read', genre, title, sub, body|items, gloss?, questions }
  addText: function (id, d) { d.id = id; if (!d.kind) d.kind = /-h\d+$/.test(id) ? 'listen' : 'read'; this.texts[id] = d; },
  writes: {},    // Schreibaufgaben (ADR-13), z. B. writes['de-a2-s01'] = { scene, title, sub, task, points, reg, words, chunks, hint, model, modeln, check, mistakes, e }
  addWrites: function (key, list) { var self = this; list.forEach(function (w) { if (self.writes[w.id]) (self.writeDups = self.writeDups || []).push(w.id); w.key = key; w.t = 'write'; self.writes[w.id] = w; }); },
  // ADR-15: Übersicht aller Pakete (Kurs+Niveau) aus js/content/manifest.js – erzeugt von tools/build-manifest.js
  manifest: null,
  setManifest: function (m) { this.manifest = m; },

  levelNames: {
    A1: { de: 'Anfänger', tr: 'Başlangıç' },
    A2: { de: 'Grundlagen', tr: 'Temel' },
    B1: { de: 'Mittelstufe', tr: 'Orta' },
    B2: { de: 'Gute Mittelstufe', tr: 'İyi orta' },
    C1: { de: 'Fortgeschritten', tr: 'İleri' },
    C2: { de: 'Nahezu muttersprachlich', tr: 'Ana dile yakın' }
  },

  courses: {
    /* Deutsch lernen – für Türkischsprechende (Erklärungen auf Türkisch) */
    de: {
      id: 'de', ui: 'tr', target: 'de', tts: 'de-DE',
      label: 'Almanca Öğren', sublabel: 'Açıklamalar Türkçe',
      complete: ['A1', 'A2'],   // ADR-11: freigegebene Niveaus (Zertifikat, Einstufung); alles andere mit Inhalt gilt als „im Aufbau“
      chars: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'],
      levels: {
        A1: [
          ['de-a1-01', 'Alphabet & Aussprache', 'Alfabe ve telaffuz'],
          ['de-a1-02', 'Begrüßung & Vorstellung', 'Selamlaşma ve tanışma'],
          ['de-a1-03', 'Personalpronomen & „sein“', 'Şahıs zamirleri ve “sein”'],
          ['de-a1-04', 'Artikel: der, die, das', 'Artikeller'],
          ['de-a1-13', 'Plural der Nomen', 'İsimlerde çoğul'],
          ['de-a1-05', 'Verben im Präsens', 'Fiil çekimi (Präsens)'],
          ['de-a1-06', 'Satzbau & Fragen', 'Cümle yapısı ve sorular'],
          ['de-a1-07', 'Akkusativ', 'Belirtme hâli (-i hâli)'],
          ['de-a1-14', 'Woher, wo, wohin: feste Wendungen', 'Nereden, nerede, nereye: kalıplar'],
          ['de-a1-08', 'Verneinung: nicht & kein', 'Olumsuzluk'],
          ['de-a1-09', 'Zahlen & Uhrzeit', 'Sayılar ve saat'],
          ['de-a1-10', 'Possessivartikel', 'İyelik: mein, dein …'],
          ['de-a1-16', 'Adjektive, Farben, sehr & zu', 'Sıfatlar, renkler, sehr ve zu'],
          ['de-a1-11', 'Modalverben', 'Modal fiiller'],
          ['de-a1-12', 'Trennbare Verben', 'Ayrılabilen fiiller'],
          ['de-a1-15', 'Vorlieben: gern, mögen, möchten', 'Sevmek: gern, mögen, möchten']
        ],
        A2: [   // Reihenfolge = Lernreihenfolge (docs/a2-konzept.md); IDs sind fest und unabhängig von der Position
          ['de-a2-03', 'Perfekt I: haben/sein, ge-…-t/-en', 'Geçmiş zaman I (Perfekt)'],
          ['de-a2-11', 'Perfekt II: trennbare, untrennbare & -ieren-Verben', 'Geçmiş zaman II (ayrılabilen fiiller vb.)'],
          ['de-a2-04', 'Präteritum: war, hatte, es gab, Modalverben', 'Hikâye geçmiş: war, hatte, konnte …'],
          ['de-a2-10', 'Imperativ', 'Emir kipi'],
          ['de-a2-01', 'Dativ: Artikel, Pronomen, Präpositionen', 'Yönelme hâli (Dativ)'],
          ['de-a2-12', 'Verben mit Dativ & zwei Objekten', 'Dativ alan fiiller'],
          ['de-a2-02', 'Wechselpräpositionen: wo? / wohin?', 'Değişken edatlar (in, auf, an …)'],
          ['de-a2-13', 'Zeitangaben & Datum: am, um, im, seit, vor, ab', 'Zaman ifadeleri ve tarih'],
          ['de-a2-07', 'Reflexive Verben', 'Dönüşlü fiiller'],
          ['de-a2-06', 'Komparativ & Superlativ', 'Karşılaştırma'],
          ['de-a2-14', 'Fragen & Pronomen: welch-, was für ein, dies-, man, jemand', 'Soru sözcükleri ve zamirler'],
          ['de-a2-08', 'Adjektivdeklination', 'Sıfat çekimi'],
          ['de-a2-15', 'Sätze verbinden: denn, deshalb, trotzdem, sondern', 'Cümle bağlama'],
          ['de-a2-05', 'Nebensätze: weil, dass, wenn', 'Yan cümleler'],
          ['de-a2-16', 'Indirekte Fragen: ob, wo, wann …', 'Dolaylı sorular'],
          ['de-a2-09', 'Konjunktiv II: höflich bitten & Rat geben', 'Kibar rica ve tavsiye: hätte, könnte, sollte']
        ],
        B1: [
          ['de-b1-01', 'Präteritum', 'Hikâye geçmiş zaman'],
          ['de-b1-02', 'Plusquamperfekt', 'Miş’li geçmişin geçmişi'],
          ['de-b1-03', 'Relativsätze', 'İlgi cümleleri'],
          ['de-b1-04', 'Passiv (Präsens & Präteritum)', 'Edilgen çatı'],
          ['de-b1-05', 'Infinitiv mit „zu“', '“zu” ile mastar'],
          ['de-b1-06', 'Genitiv', 'Tamlayan hâli'],
          ['de-b1-07', 'Konnektoren: obwohl, trotzdem, deshalb', 'Bağlaçlar'],
          ['de-b1-08', 'Konjunktiv II der Vergangenheit', 'Gerçekleşmemiş geçmiş'],
          ['de-b1-09', 'n-Deklination', 'n-çekimi'],
          ['de-b1-10', 'Verben mit Präpositionen', 'Edatlı fiiller']
        ],
        B2: [
          ['de-b2-01', 'Passiv mit Modalverben', 'Modal fiilli edilgen'],
          ['de-b2-02', 'Partizip I & II als Adjektiv', 'Sıfat-fiiller'],
          ['de-b2-03', 'Indirekte Rede (Konjunktiv I)', 'Dolaylı anlatım'],
          ['de-b2-04', 'Zweiteilige Konnektoren', 'sowohl … als auch, weder … noch'],
          ['de-b2-05', 'Nominalisierung', 'İsimleştirme'],
          ['de-b2-06', 'Futur I & II', 'Gelecek zaman'],
          ['de-b2-07', 'Modalpartikeln', 'doch, mal, ja, eben']
        ],
        C1: [
          ['de-c1-01', 'Nominalstil vs. Verbalstil', 'İsim üslubu – fiil üslubu'],
          ['de-c1-02', 'Erweiterte Partizipialattribute', 'Genişletilmiş sıfat-fiil yapıları'],
          ['de-c1-03', 'Funktionsverbgefüge', 'Kalıplaşmış fiil yapıları'],
          ['de-c1-04', 'Subjektive Modalverben', 'Tahmin bildiren modal fiiller'],
          ['de-c1-05', 'Konjunktiv I & II vertieft', 'Dilek kipleri – ileri'],
          ['de-c1-06', 'Textkohärenz & Konnektoren', 'Metin bütünlüğü'],
          ['de-c1-07', 'Redewendungen & Idiomatik', 'Deyimler']
        ],
        C2: [
          ['de-c2-01', 'Stil & Register meistern', 'Üslup incelikleri ve dil düzeyleri'],
          ['de-c2-02', 'Fach- & Wissenschaftssprache', 'Akademik ve bilimsel Almanca'],
          ['de-c2-03', 'Wortbildung: Präfixe, Suffixe, Komposita', 'Kelime türetme ve birleşik kelimeler'],
          ['de-c2-04', 'Literarische Texte & Stilmittel', 'Edebî metinler ve söz sanatları'],
          ['de-c2-05', 'Ironie, Andeutungen & Zwischentöne', 'İroni, ima ve satır arası anlam'],
          ['de-c2-06', 'Redewendungen & Sprichwörter vertieft', 'Deyimler ve atasözleri (ileri)'],
          ['de-c2-07', 'Regionale Varietäten: Österreich, Schweiz, Dialekte', 'Bölgesel farklılıklar ve lehçeler']
        ]
      }
    },

    /* Türkisch lernen – für Deutschsprechende (Erklärungen auf Deutsch) */
    tr: {
      id: 'tr', ui: 'de', target: 'tr', tts: 'tr-TR',
      label: 'Türkisch lernen', sublabel: 'Erklärungen auf Deutsch',
      complete: ['A1', 'A2'],   // ADR-11: freigegebene Niveaus (Zertifikat, Einstufung); alles andere mit Inhalt gilt als „im Aufbau“
      chars: ['ç', 'ğ', 'ı', 'İ', 'ö', 'ş', 'ü', "'"],
      levels: {
        A1: [
          ['tr-a1-01', 'Alphabet & Aussprache', 'Alfabe ve telaffuz'],
          ['tr-a1-02', 'Begrüßung & Vorstellung', 'Selamlaşma ve tanışma'],
          ['tr-a1-03', 'Vokalharmonie', 'Ünlü uyumu'],
          ['tr-a1-04', 'Plural & „bir“', 'Çoğul eki'],
          ['tr-a1-05', '„sein“: Personalendungen', 'Ek-fiil (öğrenciyim)'],
          ['tr-a1-06', 'Fragen: mI & Fragewörter', 'Soru eki ve soru kelimeleri'],
          ['tr-a1-07', 'Possessivsuffixe', 'İyelik ekleri'],
          ['tr-a1-08', 'var & yok', 'Var / yok'],
          ['tr-a1-13', 'bu, şu, o & burada, şurada, orada', 'İşaret sözcükleri'],
          ['tr-a1-09', 'Ortsfälle: -da, -a, -dan', 'Bulunma, yönelme, ayrılma hâli'],
          ['tr-a1-10', 'Präsens -iyor', 'Şimdiki zaman'],
          ['tr-a1-11', 'Zahlen & Uhrzeit', 'Sayılar ve saat'],
          ['tr-a1-14', 'Tageszeiten, Wochentage & Alltag', 'Günün bölümleri ve haftanın günleri'],
          ['tr-a1-15', 'Fragen: kaç, ne kadar, hangi', 'Kaç, ne kadar, hangi'],
          ['tr-a1-12', 'Akkusativ -(y)I', 'Belirtme hâli'],
          ['tr-a1-16', 'Verneinung im Überblick: değil, yok, -mI-', 'Olumsuzluk: değil, yok, -mA-']
        ],
        A2: [   // Reihenfolge = Lernreihenfolge (docs/a2-konzept.md); IDs sind fest und unabhängig von der Position
          ['tr-a2-01', 'Vergangenheit -dI', 'Görülen geçmiş zaman'],
          ['tr-a2-11', '„war/hatte“: -(y)dI, vardı, yoktu', 'Ek fiilin geçmişi'],
          ['tr-a2-04', 'Genitiv & Possessiv-Konstruktion', 'İsim tamlaması'],
          ['tr-a2-17', 'Possessiv + Fall & Verben mit festem Fall', 'İyelik + hâl ekleri'],
          ['tr-a2-12', 'Vorher, nachher, seit: -mAdAn önce, -DIktAn sonra, beri; Datum', 'Zaman ifadeleri'],
          ['tr-a2-02', 'Futur -(y)AcAk', 'Gelecek zaman'],
          ['tr-a2-03', 'Aorist -(I)r', 'Geniş zaman'],
          ['tr-a2-09', 'Imperativ & Wunschform', 'Emir ve istek kipi'],
          ['tr-a2-13', 'Wollen, mögen, um zu: -mAk istemek, -mAyI sevmek, -mAk için', '-mAk ile kurulan yapılar'],
          ['tr-a2-05', 'Können: -(y)Abil', 'Yeterlilik'],
          ['tr-a2-06', 'Müssen: -mAlI, lazım, gerek, zorunda', 'Gereklilik'],
          ['tr-a2-07', 'Vergleich: daha, en, gibi, kadar', 'Karşılaştırma'],
          ['tr-a2-08', 'Mit: ile / -(y)lA', 'Vasıta ve birliktelik'],
          ['tr-a2-16', 'Wortbildung: -lI, -sIz, -lIk, -CI', 'Yapım ekleri'],
          ['tr-a2-14', 'Sätze verbinden: çünkü, bu yüzden, hem … hem', 'Bağlaçlar'],
          ['tr-a2-10', 'Konverb -(y)Ip', 'Zarf-fiil -ip'],
          ['tr-a2-15', 'Gehörtes & Erzähltes: -mIş (Grundlagen)', 'Duyulan geçmiş zaman (temel)']
        ],
        B1: [
          ['tr-b1-01', '-mIş vertieft (-mIştI, Überraschung)', 'Duyulan geçmiş zaman (ileri)'],
          ['tr-b1-02', 'Partizip -(y)An', 'Sıfat-fiil -en'],
          ['tr-b1-03', 'Partizipien -DIk & -(y)AcAk', 'Sıfat-fiil -dik / -ecek'],
          ['tr-b1-04', 'Konditional -sA', 'Şart kipi'],
          ['tr-b1-05', 'Passiv', 'Edilgen çatı'],
          ['tr-b1-06', 'Kausativ', 'Ettirgen çatı'],
          ['tr-b1-07', 'Verbalnomen -mAk, -mA, -(y)Iş', 'İsim-fiiller'],
          ['tr-b1-08', 'Gleichzeitigkeit -(y)ken', 'Zarf-fiil -ken'],
          ['tr-b1-09', 'Temporalsätze -DIğIndA, -(y)IncA', 'Zaman bildiren yapılar'],
          ['tr-b1-10', 'Indirekte Rede -DIğInI', 'Dolaylı anlatım']
        ],
        B2: [
          ['tr-b2-01', '-(y)ArAk & -mAdAn', 'Zarf-fiiller'],
          ['tr-b2-02', '-DIkçA & -(y)AlI', 'Zarf-fiiller 2'],
          ['tr-b2-03', 'Irrealis -sAydI', 'Gerçek dışı şart'],
          ['tr-b2-04', 'Zusammengesetzte Zeiten', 'Birleşik zamanlar (-mıştı, -acaktı)'],
          ['tr-b2-05', 'Partikeln: ya, ki, bile, da', 'Pekiştirme edatları'],
          ['tr-b2-06', 'Postpositionen: göre, rağmen, dolayı', 'Edatlar']
        ],
        C1: [
          ['tr-c1-01', 'Formelle & Schriftsprache', 'Resmî yazı dili'],
          ['tr-c1-02', '-mIşçAsInA & -cAsInA', 'Benzetme yapıları'],
          ['tr-c1-03', 'Arabisch-persische Lehnwörter', 'Alıntı kelimeler ve türetme'],
          ['tr-c1-04', 'Stil & Register', 'Üslup'],
          ['tr-c1-05', 'Redewendungen & Sprichwörter', 'Deyimler ve atasözleri'],
          ['tr-c1-06', 'Komplexe Satzgefüge', 'Karmaşık cümleler']
        ],
        C2: [
          ['tr-c2-01', 'Bedeutungsnuancen der Suffixe', 'Eklerin anlam incelikleri'],
          ['tr-c2-02', 'Fach- & Wissenschaftssprache', 'Akademik ve bilimsel Türkçe'],
          ['tr-c2-03', 'Osmanische & gehobene Wendungen', 'Osmanlıca kökenli ve yüksek üslup ifadeler'],
          ['tr-c2-04', 'Literarische Texte & Stilmittel', 'Edebî metinler ve söz sanatları'],
          ['tr-c2-05', 'Ironie, Höflichkeit & Andeutungen', 'İroni, nezaket ve ima'],
          ['tr-c2-06', 'Redewendungen & Sprichwörter vertieft', 'Deyimler ve atasözleri (ileri)'],
          ['tr-c2-07', 'Regionale Varianten (ağızlar)', 'Yöresel ağızlar']
        ]
      }
    }
  }
};
