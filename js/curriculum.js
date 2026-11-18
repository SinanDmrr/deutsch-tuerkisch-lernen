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
    ['small', 'Kleine Wörter', 'Küçük kelimeler']
  ],
  dialogs: {},   // Alltagsdialoge, z. B. dialogs['de-a1-d01'] = { level, title, lines, questions }
  addDialog: function (id, d) { d.id = id; this.dialogs[id] = d; },

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
      chars: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'],
      levels: {
        A1: [
          ['de-a1-01', 'Alphabet & Aussprache', 'Alfabe ve telaffuz'],
          ['de-a1-02', 'Begrüßung & Vorstellung', 'Selamlaşma ve tanışma'],
          ['de-a1-03', 'Personalpronomen & „sein“', 'Şahıs zamirleri ve “sein”'],
          ['de-a1-04', 'Artikel: der, die, das', 'Artikeller'],
          ['de-a1-05', 'Verben im Präsens', 'Fiil çekimi (Präsens)'],
          ['de-a1-06', 'Satzbau & Fragen', 'Cümle yapısı ve sorular'],
          ['de-a1-07', 'Akkusativ', 'Belirtme hâli (-i hâli)'],
          ['de-a1-08', 'Verneinung: nicht & kein', 'Olumsuzluk'],
          ['de-a1-09', 'Zahlen & Uhrzeit', 'Sayılar ve saat'],
          ['de-a1-10', 'Possessivartikel', 'İyelik: mein, dein …'],
          ['de-a1-11', 'Modalverben', 'Modal fiiller'],
          ['de-a1-12', 'Trennbare Verben', 'Ayrılabilen fiiller']
        ],
        A2: [
          ['de-a2-01', 'Dativ', 'Yönelme hâli (-e hâli)'],
          ['de-a2-02', 'Wechselpräpositionen', 'Değişken edatlar (in, auf, an …)'],
          ['de-a2-03', 'Perfekt', 'Geçmiş zaman (Perfekt)'],
          ['de-a2-04', 'Präteritum: war & hatte', 'sein ve haben geçmiş'],
          ['de-a2-05', 'Nebensätze: weil, dass, wenn', 'Yan cümleler'],
          ['de-a2-06', 'Komparativ & Superlativ', 'Karşılaştırma'],
          ['de-a2-07', 'Reflexive Verben', 'Dönüşlü fiiller'],
          ['de-a2-08', 'Adjektivdeklination', 'Sıfat çekimi'],
          ['de-a2-09', 'Konjunktiv II (höflich)', 'Kibar rica: würde, könnte'],
          ['de-a2-10', 'Imperativ', 'Emir kipi']
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
          ['tr-a1-09', 'Ortsfälle: -da, -a, -dan', 'Bulunma, yönelme, ayrılma hâli'],
          ['tr-a1-10', 'Präsens -iyor', 'Şimdiki zaman'],
          ['tr-a1-11', 'Zahlen & Uhrzeit', 'Sayılar ve saat'],
          ['tr-a1-12', 'Akkusativ -(y)I', 'Belirtme hâli']
        ],
        A2: [
          ['tr-a2-01', 'Vergangenheit -dI', 'Görülen geçmiş zaman'],
          ['tr-a2-02', 'Futur -(y)AcAk', 'Gelecek zaman'],
          ['tr-a2-03', 'Aorist -(I)r', 'Geniş zaman'],
          ['tr-a2-04', 'Genitiv & Possessiv-Konstruktion', 'İsim tamlaması'],
          ['tr-a2-05', 'Können: -(y)Abil', 'Yeterlilik'],
          ['tr-a2-06', 'Müssen: -mAlI, lazım, gerek', 'Gereklilik'],
          ['tr-a2-07', 'Vergleich: daha, en', 'Karşılaştırma'],
          ['tr-a2-08', 'Mit: ile / -(y)lA', 'Vasıta ve birliktelik'],
          ['tr-a2-09', 'Imperativ & Wunschform', 'Emir ve istek kipi'],
          ['tr-a2-10', 'Konverb -(y)Ip', 'Zarf-fiil -ip']
        ],
        B1: [
          ['tr-b1-01', 'Hörensagen -mIş', 'Duyulan geçmiş zaman'],
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
