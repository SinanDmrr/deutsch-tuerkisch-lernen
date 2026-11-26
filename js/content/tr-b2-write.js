/* Türkisch B2 – Schreibwerkstatt (ADR-13). Format: siehe js/content/tr-b1-write.js bzw. docs/adr-13-schreiben.md.
 * IDs tr-b2-s01 … sNN sind fest (nie ändern, nie neu vergeben). Erklärsprache: Deutsch. Schreibziel 90–120 Wörter; Meinungstexte (opinion: 1): s01, s02; formell: s03.
 * Paket P1: s01 Forumsbeitrag Homeoffice, s02 Leserbrief Arbeitszeiten, s03 formelle E-Mail an die Gemeinde.
 * Paket P2: s04 formelle E-Mail (Einspruch gegen Mieterhöhung), s05 schriftliche Sprachmittlung (Arztbrief).
 * Alle Aufgaben und Mustertexte sind selbst geschrieben. Jede Aufgabe verlangt Konnektoren (Meinung: mindestens drei bis vier). */
window.KOPRU.addWrites('tr-b2', [
  {
    "id": "tr-b2-s01",
    "scene": "ofis",
    "title": "Evden çalışma bir hak mı?",
    "sub": "Forumsbeitrag: Soll Homeoffice ein Recht für alle sein?",
    "task": "In einem Forum fragt jemand: „Sollte Arbeit im Homeoffice ein Recht für alle sein, bei denen die Tätigkeit es erlaubt?“ Schreibe einen Beitrag (siz-Form, öffentlich): Standpunkt, zwei Gründe mit einem Beispiel, ein Zugeständnis an die Gegenseite (her ne kadar … -sA da), ein Einwand (ne var ki oder oysaki) und ein Fazit. Beide Seiten haben gute Argumente; du darfst dich für eine entscheiden. Verwende mindestens vier Konnektoren (z. B. bence, birincisi, ayrıca, her ne kadar … da, ne var ki, sonuç olarak).",
    "points": [
      "Standpunkt klar nennen",
      "Zwei Gründe mit einem Beispiel",
      "Zugeständnis an die Gegenseite, Einwand und Fazit"
    ],
    "reg": "siz",
    "words": {
      "min": 90,
      "ziel": 110
    },
    "opinion": 1,
    "chunks": [
      "Bence …",
      "Birincisi, … Ayrıca …",
      "Her ne kadar … olsa da …",
      "Ne var ki …",
      "Sonuç olarak …"
    ],
    "hint": [
      [
        "bence",
        "hak"
      ],
      [
        "birincisi",
        "ayrıca",
        "örneğin"
      ],
      [
        "her ne kadar",
        "ne var ki",
        "sonuç olarak"
      ]
    ],
    "model": "Bence işin türü uygunsa evden çalışmak çalışanlara bir hak olarak tanınmalı. Birincisi, yolda harcanan zaman ve para ciddi bir yük; bu zamanı hem işe hem aileye ayırmak mümkün. Ayrıca birçok işte önemli olan sonuçtur, çalışanın nerede oturduğu değil. Örneğin ben haftada üç gün evden çalışıyorum ve daha verimli olduğumu fark ettim. Şirketler de ofis giderlerinden tasarruf eder; yani hem çalışan hem şirket kazanır. Her ne kadar ekip ruhu ofiste daha güçlü olsa da düzenli çevrimiçi toplantılarla bu eksik kapatılabilir. Ne var ki yeni başlayanların ilk aylarda ofiste olması daha doğru olur. Sonuç olarak uygun işlerde evden çalışma bir hak olmalı; yeni başlayanlar için ise ofis desteği ayrıca düzenlenmelidir.",
    "modeln": "Meiner Meinung nach sollte Arbeit im Homeoffice als Recht anerkannt werden, wenn es die Tätigkeit erlaubt. Erstens sind Zeit und Geld für den Weg eine ernsthafte Last; diese Zeit lässt sich für Arbeit und Familie nutzen. Außerdem zählt in vielen Berufen das Ergebnis, nicht der Ort, an dem man sitzt. Ich arbeite zum Beispiel drei Tage pro Woche zu Hause und habe gemerkt, dass ich produktiver bin. Auch die Firmen sparen Bürokosten; es gewinnen also Beschäftigte und Firma. Zwar ist der Teamgeist im Büro stärker, aber mit regelmäßigen Online-Besprechungen lässt sich dieser Mangel ausgleichen. Allerdings ist es für Neue in den ersten Monaten besser, im Büro zu sein. Insgesamt sollte Homeoffice bei geeigneten Tätigkeiten ein Recht sein; für Neue sollte die Unterstützung im Büro eigens geregelt werden.",
    "check": [
      {
        "k": "Steht dein Standpunkt gleich im ersten Satz („Bence …“)?",
        "e": "Im Meinungstext sollen Leserinnen und Leser sofort wissen, wo du stehst. „Bence“ am Anfang macht die Position klar."
      },
      {
        "k": "Hast du zwei Gründe genannt („birincisi … ayrıca …“)?",
        "e": "Eine Meinung braucht Gründe. Mit „birincisi“ und „ayrıca“ ordnest du sie und lässt den Text nicht in einer Aufzählung zerfließen."
      },
      {
        "k": "Hast du die Gegenseite mit „her ne kadar … olsa da“ ernst genommen?",
        "e": "Mit „her ne kadar … olsa da“ gibst du zu, dass ein Gegenargument stimmt. Das wirkt fair und glaubwürdig."
      },
      {
        "k": "Setzt du mit „ne var ki“ oder „oysaki“ einen Einwand und schließt du mit „sonuç olarak“?",
        "e": "„Ne var ki“ schränkt ein, „sonuç olarak“ fasst zusammen. So endet der Text nicht in der Luft."
      },
      {
        "k": "Hast du mindestens vier Konnektoren benutzt?",
        "e": "Konnektoren machen die Struktur sichtbar: Sie zeigen Meinung, Gründe, Zugeständnis, Einwand und Fazit. Prüfe, ob jeder dieser Schritte einen eigenen Konnektor hat."
      }
    ],
    "mistakes": [
      {
        "bad": "Her ne kadar evde çalışmak rahat, ofis daha iyi.",
        "good": "Her ne kadar evde çalışmak rahat olsa da ofis daha iyi.",
        "why": "Nach *her ne kadar* braucht das Verb die Form -sA und danach *da*. Mit einem bloßen Adjektiv fehlt die Einräumung."
      },
      {
        "bad": "Oysaki ben evden çalışmayı seviyorum, çünkü rahat.",
        "good": "Ben evden çalışmayı seviyorum, çünkü rahat.",
        "why": "*Oysaki* setzt einen Widerspruch zum vorigen Satz voraus („dabei“). Ohne diesen Bezug wirkt es fehl am Platz; einfach beginnen genügt."
      },
      {
        "bad": "Ben düşünüyorum ki evden çalışmak bir hak olmalı.",
        "good": "Bence evden çalışmak bir hak olmalı.",
        "why": "Das deutsche „Ich denke, dass …“ wird nicht mit *ki* nachgebaut. *Bence* trägt die Meinung allein."
      }
    ],
    "e": "Ein guter Meinungstext hat Standpunkt, Gründe, Beispiel, Zugeständnis, Einwand und Fazit. B2-Konnektoren wie *her ne kadar … -sA da* und *ne var ki* zeigen, dass du abwägst."
  },
  {
    "id": "tr-b2-s02",
    "scene": "ofis",
    "title": "Mesai saatleri serbest olmalı mı?",
    "sub": "Leserbrief: Sollen Arbeitszeiten ganz frei wählbar sein?",
    "task": "Eine Zeitung fragt ihre Leserschaft: „Sollten Arbeitszeiten ganz frei wählbar sein?“ Schreibe einen Leserbrief (siz-Form) mit Standpunkt, zwei Gründen, einem Gegenargument und einem Fazit. Beide Positionen haben gute Gründe; entscheide dich für eine. Verwende mindestens drei Konnektoren, darunter *mademki*, *hatta* oder *nitekim*, und einmal *-sIn diye* oder *-mAk amacıyla*.",
    "points": [
      "Standpunkt nennen",
      "Zwei Gründe mit einem Beispiel",
      "Gegenargument und Fazit"
    ],
    "reg": "siz",
    "words": {
      "min": 90,
      "ziel": 110
    },
    "opinion": 1,
    "chunks": [
      "Bence …",
      "Birincisi, … Ayrıca …",
      "… diye …",
      "Nitekim …",
      "Mademki …",
      "Sonuç olarak …"
    ],
    "hint": [
      [
        "bence",
        "ortak"
      ],
      [
        "birincisi",
        "ayrıca",
        "nitekim"
      ],
      [
        "mademki",
        "sonuç olarak"
      ]
    ],
    "model": "Bence mesai saatleri tamamen serbest olmamalı, ortak saatler gerekli. Birincisi, ekipte herkes aynı anda ulaşılabilir olmazsa işler yavaşlar. Müşteriler beklemesin diye en az birkaç saat herkesin masasında olması şart. Örneğin ben müşteri hizmetlerinde çalışıyorum ve ortak saatler işimizi çok kolaylaştırıyor. Ayrıca sınırsız esneklik insanları akşama kadar çalışmaya itebilir; nitekim birçok çalışan bildirimleri geceleri de takip ediyor. Mademki işyerinde herkes aynı hedef için çalışıyor, bazı kuralları birlikte belirlemek adil olur. Ancak sabah erken kalkamayanlar için sabit bir başlangıç saati zorlayıcı olabilir. Bunun yanında çalışanların dinlenme saatleri de korunmalı. Bu denge, hem şirketin hem çalışanın yararınadır. Sonuç olarak ortak saatlerle esnekliği birleştiren bir düzen en iyisidir.",
    "modeln": "Meiner Meinung nach sollten die Arbeitszeiten nicht völlig frei sein; gemeinsame Zeiten sind nötig. Erstens verlangsamt sich die Arbeit, wenn nicht alle im Team gleichzeitig erreichbar sind. Damit Kunden nicht warten, müssen mindestens ein paar Stunden alle an ihrem Platz sein. Ich arbeite zum Beispiel im Kundenservice, und gemeinsame Zeiten erleichtern uns die Arbeit sehr. Außerdem kann grenzenlose Flexibilität Menschen dazu bringen, bis abends zu arbeiten; tatsächlich verfolgen viele Beschäftigte die Benachrichtigungen auch nachts. Da im Betrieb ja alle für dasselbe Ziel arbeiten, ist es fair, einige Regeln gemeinsam festzulegen. Allerdings kann eine feste Anfangszeit für Menschen, die morgens schwer aufstehen, belastend sein. Daneben sollten auch die Ruhezeiten der Beschäftigten geschützt werden. Dieses Gleichgewicht nützt der Firma wie den Beschäftigten. Insgesamt ist eine Regelung am besten, die gemeinsame Zeiten und Flexibilität verbindet.",
    "check": [
      {
        "k": "Steht dein Standpunkt gleich im ersten Satz („Bence …“)?",
        "e": "So wissen Leserinnen und Leser sofort, wofür oder wogegen du bist."
      },
      {
        "k": "Hast du einen Zweck mit „-sIn diye“ oder „-mAk amacıyla“ ausgedrückt?",
        "e": "„Damit niemand wartet“ ist ein typischer Zweck im Arbeitskontext. Mit eigenem Subjekt nimmst du -sIn diye, bei gleichem Subjekt -mAk için oder -mAk amacıyla."
      },
      {
        "k": "Hast du mit „mademki“ am Satzanfang eine Voraussetzung genannt?",
        "e": "„Mademki“ steht vorne und nennt eine Tatsache, aus der du folgerst („da ja …“). Hinten angehängt trägt es nicht."
      },
      {
        "k": "Gibst du dem Gegenargument Raum („ancak …“) und schließt du mit „sonuç olarak“?",
        "e": "Ein Gegenargument zeigt, dass du abwägst. Das Fazit fasst deine Position zusammen."
      }
    ],
    "mistakes": [
      {
        "bad": "Müşteriler beklemesin için herkes masasında olmalı.",
        "good": "Müşteriler beklemesin diye herkes masasında olmalı.",
        "why": "Mit der Befehlsform -sIn steht *diye*. *için* verlangt -mAk oder -mAsI (beklememeleri için)."
      },
      {
        "bad": "Esnek mesai iyidir; mademki bazı insanlar akşam çalışır.",
        "good": "Mademki bazı insanlar akşamları daha verimli çalışıyor, esnek mesai de mümkün olmalı.",
        "why": "*Mademki* steht am Anfang und nennt die Voraussetzung, aus der du folgerst. Am Ende angehängt ist es nicht verständlich."
      },
      {
        "bad": "Ancak, ben düşünüyorum ki mesai serbest olmamalı.",
        "good": "Bence mesai serbest olmamalı.",
        "why": "„Ich denke, dass“ wird nicht mit *ki* nachgebaut; *bence* genügt."
      }
    ],
    "e": "Im Leserbrief zählt eine klare Linie: Standpunkt, zwei Gründe, ein Einwand, Fazit. *-sIn diye* für den Zweck mit anderem Subjekt und *mademki* für die Voraussetzung zeigen B2-Niveau."
  },
  {
    "id": "tr-b2-s03",
    "scene": "ofis",
    "title": "Çöp konteynerleri hakkında",
    "sub": "Formelle E-Mail an die Gemeinde: Überfüllte Müllcontainer",
    "task": "Die Müllcontainer vor deinem Haus quellen seit Wochen über. Schreibe eine formelle E-Mail an die Gemeinde (siz-Form): Nenne das Problem und den Ort, sage, was sich ändern soll, nenne einen Einwand, den die Verwaltung haben könnte, und bitte höflich um eine Antwort. Verwende mindestens drei Konnektoren (z. B. bu nedenle, ne var ki, bununla birlikte, oysaki) und einmal -mAk amacıyla.",
    "points": [
      "Problem und Ort nennen",
      "Anliegen und Begründung",
      "Höfliche Bitte um Antwort"
    ],
    "reg": "siz",
    "words": {
      "min": 90,
      "ziel": 110
    },
    "chunks": [
      "… oturuyorum",
      "… bu nedenle …",
      "… amacıyla …",
      "Ne var ki …",
      "Bununla birlikte …",
      "Saygılarımı sunarım"
    ],
    "hint": [
      [
        "oturuyorum",
        "konteyner"
      ],
      [
        "amacıyla",
        "rica ediyorum"
      ],
      [
        "ne var ki",
        "bununla birlikte",
        "saygılarımı"
      ]
    ],
    "model": "Sayın Yetkili,\nAtatürk Caddesi’nde oturuyorum. Evimizin önündeki çöp konteynerleri haftalardır taşıyor ve çevreye kötü koku yayılıyor. Çöpler haftada yalnızca iki gün toplandığı için sokağa poşetler bırakılıyor; bu nedenle hem sağlık hem görüntü açısından sorun var. Konteynerlerin yanında çocuklar oynadığı için durum daha da endişe verici. Çevreyi temiz tutmak amacıyla konteyner sayısının artırılmasını ya da toplama günlerinin çoğaltılmasını rica ediyorum. Bunun bütçeye yük getireceğini biliyorum; ne var ki sorun sürerse daha büyük sıkıntılarla karşılaşabilirsiniz. Yalnızca ben değil, komşularım da şikâyetçi; isterseniz imzalı bir dilekçe gönderebiliriz. Bununla birlikte geçici bir çözüm de çok yardımcı olur. Konuyla ilgilenmenizi rica eder, yanıtınızı bekler, saygılarımı sunarım.\nEce Demir",
    "modeln": "Sehr geehrte Damen und Herren,\nich wohne in der Atatürk-Straße. Die Müllcontainer vor unserem Haus quellen seit Wochen über, und es breitet sich ein schlechter Geruch aus. Weil der Müll nur zweimal pro Woche abgeholt wird, werden Säcke auf der Straße abgestellt; deshalb gibt es sowohl ein gesundheitliches als auch ein optisches Problem. Da neben den Containern Kinder spielen, ist die Lage noch bedenklicher. Um die Umgebung sauber zu halten, bitte ich darum, die Zahl der Container zu erhöhen oder die Abholtage zu vermehren. Ich weiß, dass das den Haushalt belastet; allerdings können Sie bei anhaltendem Problem vor noch größeren Schwierigkeiten stehen. Nicht nur ich beschwere mich, auch meine Nachbarn tun es; wenn Sie möchten, können wir einen unterschriebenen Antrag schicken. Daneben wäre auch eine vorübergehende Lösung sehr hilfreich. Ich bitte Sie, sich der Sache anzunehmen, erwarte Ihre Antwort und verbleibe mit freundlichen Grüßen.\nEce Demir",
    "check": [
      {
        "k": "Sind Problem, Ort und Dauer genannt?",
        "e": "Ein guter formeller Brief sagt sofort, worum es geht, wo und seit wann. So kann die Gemeinde das Anliegen zuordnen."
      },
      {
        "k": "Hast du durchgehend „siz“ und höfliche Wendungen benutzt („rica ediyorum“)?",
        "e": "Behörden schreibt man mit „siz“ und Bitten wie „rica ediyorum“. Ein Wechsel zu „sen“ oder direkte Befehle wirken unhöflich."
      },
      {
        "k": "Hast du den Zweck mit „-mAk amacıyla“ ausgedrückt?",
        "e": "In formellen Schreiben passt „-mAk amacıyla“ besser als „-mAk için“, weil es sachlicher klingt."
      },
      {
        "k": "Hast du einen Einwand oder eine Ergänzung mit „ne var ki“ oder „bununla birlikte“ eingeleitet?",
        "e": "Diese Konnektoren schränken ein oder ergänzen förmlich. Sie zeigen, dass du die Verwaltung mitdenkst."
      },
      {
        "k": "Endet der Brief mit einer Grußformel („Saygılarımı sunarım“) und deinem Namen?",
        "e": "Die Schlussformel gehört zum formellen Brief. Ohne sie wirkt der Text unvollständig."
      }
    ],
    "mistakes": [
      {
        "bad": "Çevreyi temiz tutmak diye konteyner sayısının artırılmasını rica ediyorum.",
        "good": "Çevreyi temiz tutmak amacıyla konteyner sayısının artırılmasını rica ediyorum.",
        "why": "*diye* braucht die Befehlsform auf -sIn. Für den formellen Zweck mit gleichem Subjekt nimmst du -mAk amacıyla (oder -mAk için)."
      },
      {
        "bad": "Sen konteyner sayısını artırır mısın?",
        "good": "Konteyner sayısının artırılmasını rica ediyorum.",
        "why": "An eine Behörde schreibst du in der siz-Form und bittest höflich (*rica ediyorum*). „sen“ und eine direkte Frage wirken unhöflich."
      },
      {
        "bad": "Atatürk Caddesinde oturuyorum.",
        "good": "Atatürk Caddesi’nde oturuyorum.",
        "why": "Bei Eigennamen steht vor Endungen ein Apostroph (TDK): Caddesi’nde."
      }
    ],
    "e": "Ein formeller Brief nennt Problem, Ort, Wunsch und Grund, räumt einen Einwand ein und endet höflich. *-mAk amacıyla*, *ne var ki* und *bununla birlikte* geben dem Text den passenden Ton."
  },
  {
    "id": "tr-b2-s04",
    "scene": "ev",
    "title": "Kira artışına itiraz",
    "sub": "Formelle E-Mail an den Vermieter: Einspruch gegen eine Mieterhöhung",
    "task": "Dein Vermieter (oder die Verwaltungsfirma) hat dir schriftlich mitgeteilt, dass deine Miete ab dem nächsten Monat um 40 Prozent steigen soll. Das liegt über der gesetzlichen Grenze: Die Erhöhung darf den Durchschnitt der Verbraucherpreise (TÜFE) der letzten zwölf Monate nicht überschreiten. Schreibe eine formelle E-Mail (siz-Form): Nenne den Bezug (das Schreiben der Verwaltung), begründe deinen Einwand, mache einen Gegenvorschlag, sage, was passiert, wenn er nicht angenommen wird, und bitte höflich um eine schriftliche Antwort. Verwende mindestens drei der Formen -e göre, -e karşın, -e ilişkin/dair, açısından, nedeniyle, -DIğI takdirde oder -mAsI halinde.",
    "points": [
      "Bezug und Einwand nennen",
      "Gegenvorschlag und Folge",
      "Höfliche Bitte um schriftliche Antwort"
    ],
    "reg": "siz",
    "words": {
      "min": 90,
      "ziel": 110
    },
    "chunks": [
      "Sayın Ev Sahibim,",
      "… yazıya göre …",
      "… açısından …",
      "… karşın …",
      "… halinde …",
      "… takdirde …",
      "Saygılarımla"
    ],
    "hint": [
      [
        "yazıya göre",
        "itiraz"
      ],
      [
        "açısından",
        "karşın",
        "halinde"
      ],
      [
        "takdirde",
        "yanıt",
        "saygılarımla"
      ]
    ],
    "model": "Sayın Ev Sahibim,\nGüneşli Sitesi’nde oturan bir kiracıyım. Gönderdiğiniz yazıya göre kira bedeli gelecek aydan itibaren yüzde kırk artırılacak. Bu oran, kira artışının on iki aylık TÜFE ortalamasını aşamayacağını belirten yasal sınırın çok üzerinde. Ayrıca bütçem açısından karşılanması çok zor bir yük getiriyor. Giderlerin yükselmesine karşın bu artışı makul bulmuyorum. Bu nedenle artışın yasal sınıra göre yeniden hesaplanmasını rica ediyorum. Önerimin kabul edilmesi halinde sözleşmeyi uzatmaya hazırım. Aksi takdirde başka bir konut aramak zorunda kalacağım. Yıllardır kiramı düzenli ödediğimi de hatırlatmak isterim. Artışa ilişkin hesapları yazılı olarak göndermenizi ve bana en kısa sürede yanıt vermenizi rica ederim. Bu konuda sizinle yüz yüze görüşmeye de hazırım; uygun olduğunuz günü bildirirseniz toplantıya katılırım.\nSaygılarımla,\nMurat Kaya",
    "modeln": "Sehr geehrter Herr Vermieter,\nich bin Mieter in der Siedlung Güneşli. Laut Ihrem Schreiben soll die Miete ab nächstem Monat um vierzig Prozent steigen. Dieser Satz liegt weit über der gesetzlichen Grenze, nach der die Erhöhung den Durchschnitt der Verbraucherpreise der letzten zwölf Monate nicht überschreiten darf. Außerdem bedeutet er für mein Budget eine kaum zu tragende Last. Trotz der gestiegenen Kosten halte ich diese Erhöhung nicht für angemessen. Deshalb bitte ich darum, sie nach der gesetzlichen Grenze neu zu berechnen. Falls mein Vorschlag angenommen wird, bin ich bereit, den Vertrag zu verlängern. Andernfalls werde ich mir eine andere Wohnung suchen müssen. Ich möchte auch daran erinnern, dass ich meine Miete seit Jahren regelmäßig zahle. Ich bitte Sie, mir die Berechnungen zur Erhöhung schriftlich zu schicken und mir so bald wie möglich zu antworten. Ich bin auch bereit, mich persönlich mit Ihnen zu treffen; wenn Sie mir einen passenden Tag nennen, komme ich zu dem Gespräch.\nMit freundlichen Grüßen,\nMurat Kaya",
    "check": [
      {
        "k": "Nennst du am Anfang den Bezug („yazınıza göre“) und die Anrede („Sayın Ev Sahibim“)?",
        "e": "Ein formelles Schreiben beginnt mit Anrede und Bezug. So weiß die Verwaltung sofort, worauf du antwortest."
      },
      {
        "k": "Hast du deinen Einwand mit „açısından“ oder „nedeniyle“ begründet?",
        "e": "Ein Einwand wirkt nur mit einem Grund. Mit „bütçem açısından“ oder „artış nedeniyle“ bleibst du sachlich."
      },
      {
        "k": "Hast du eine Einräumung mit „-e karşın“ eingebaut?",
        "e": "Mit „-e karşın“ gibst du zu, dass die Verwaltung Argumente hat, und bleibst doch bei deiner Position. Das klingt fair."
      },
      {
        "k": "Hast du mit „halinde“ oder „takdirde“ eine Bedingung und eine Folge genannt?",
        "e": "„Önerimin kabul edilmesi halinde …“ und „aksi takdirde …“ zeigen, was du bietest und was sonst geschieht, ohne Drohung."
      },
      {
        "k": "Endest du höflich mit „rica ederim“, „saygılarımla“ und deinem Namen?",
        "e": "Die Schlussformel gehört zum formellen Brief. Ohne sie wirkt der Text abrupt."
      }
    ],
    "mistakes": [
      {
        "bad": "Gönderdiğiniz yazıya göre kira artırılacağa karşın itiraz ediyorum.",
        "good": "Gönderdiğiniz yazıya göre kira artırılacak; bu nedenle itiraz ediyorum.",
        "why": "*karşın* nennt einen Gegensatz („trotz“). Hier folgt der Einwand aus der Ankündigung; „deshalb“ ist *bu nedenle*."
      },
      {
        "bad": "Artışa ilişkin hesapları yazılı gönder.",
        "good": "Artışa ilişkin hesapları yazılı olarak göndermenizi rica ederim.",
        "why": "An eine Verwaltung schreibst du in der siz-Form und bittest höflich (*rica ederim*). Ein Befehl in der *sen*-Form wirkt grob."
      },
      {
        "bad": "Kabul edilirse takdirde sözleşmeyi uzatırım.",
        "good": "Kabul edildiği takdirde sözleşmeyi uzatırım.",
        "why": "Doppelfehler: -sA und *takdirde* dürfen nicht zusammen stehen; *takdirde* verlangt -DIğI. Richtig ist entweder *kabul edilirse* (neutral) oder *kabul edildiği takdirde* (formell)."
      }
    ],
    "e": "Ein formeller Einspruch nennt Bezug, Grund, Vorschlag, Folge und Bitte. Postpositionen der Schriftsprache (*-e göre, açısından, -e karşın*) und Bedingungsformen (*halinde, takdirde*) geben dem Text den richtigen Ton."
  },
  {
    "id": "tr-b2-s05",
    "scene": "hastane",
    "title": "Randevu mektubunu anlatmak",
    "sub": "Schriftliche Sprachmittlung: Einen deutschen Brief der Arztpraxis auf Türkisch zusammenfassen",
    "task": "Deine Mutter spricht kaum Deutsch und hat diesen Brief der Praxis bekommen: „Ihr Termin zur Vorsorgeuntersuchung ist am Donnerstag um 9.30 Uhr. Bitte kommen Sie nüchtern und bringen Sie Versichertenkarte und Medikamentenliste mit. Wenn Sie nicht kommen können, sagen Sie bitte mindestens 24 Stunden vorher ab, sonst berechnen wir 25 Euro. Die Praxis ist montags bis freitags von 8 bis 16 Uhr besetzt.“ Schreibe ihr eine Nachricht auf Türkisch (sen-Form): Termin, was mitbringen, nüchtern kommen, Absage-Frist mit Gebühr und Öffnungszeiten. Übersetze nicht Wort für Wort, sondern gib den Inhalt in eigenen Worten wieder.",
    "points": [
      "Termin und Mitbringen nennen",
      "Nüchtern kommen und Absage-Frist",
      "Öffnungszeiten und Hilfsangebot"
    ],
    "reg": "sen",
    "words": {
      "min": 90,
      "ziel": 110
    },
    "chunks": [
      "Anne, …",
      "Randevun … günü …",
      "… yanına almalısın",
      "… haber vermen lazım",
      "aksi takdirde",
      "Ben seni … götürürüm"
    ],
    "hint": [
      [
        "randevun",
        "perşembe"
      ],
      [
        "aç karnına",
        "haber vermen",
        "aksi takdirde"
      ],
      [
        "hafta içi",
        "götürürüm"
      ]
    ],
    "model": "Anne, doktordan randevu mektubu geldi, önemli noktaları sana yazıyorum. Randevun perşembe günü saat dokuz buçukta. Sabah aç karnına gitmen gerekiyor. Sigorta kartını ve kullandığın ilaçların listesini yanına almalısın. Randevuya gelemeyeceksen en az bir gün önce haber vermen lazım; aksi takdirde yirmi beş euro ödemen gerekecek. Muayenehane hafta içi her gün sabah sekizden akşam dörde kadar açık. Ben seni arabayla götürürüm, endişelenme. Konuştuğumuz gibi, çıkmadan önce ilaçlarını bir kez daha birlikte kontrol edelim. Merak etme, her şey yolunda gidecek. Muayeneden sonra birlikte bir şeyler yeriz. Çarşamba akşamı seni arayıp her şeyi bir daha konuşuruz. Bir sorun olursa hemen beni ara, tamam mı? Seni çok seviyorum, görüşürüz.",
    "modeln": "Mama, vom Arzt ist ein Terminbrief gekommen, ich schreibe dir die wichtigen Punkte. Dein Termin ist am Donnerstag um halb zehn. Du musst morgens nüchtern hingehen, also nichts essen und trinken. Du musst deine Versichertenkarte und die Liste deiner Medikamente mitnehmen. Wenn du nicht kommen kannst, musst du mindestens einen Tag vorher Bescheid sagen; sonst musst du fünfundzwanzig Euro zahlen. Die Praxis ist werktags von acht bis vier Uhr geöffnet. Ich fahre dich im Auto hin, mach dir keine Sorgen. Wie besprochen, überprüfen wir vor dem Losgehen noch einmal gemeinsam deine Medikamente. Mach dir keine Sorgen, es wird alles gut gehen. Nach der Untersuchung essen wir zusammen etwas. Am Mittwochabend rufe ich dich an, und wir besprechen alles noch einmal. Wenn etwas ist, ruf mich sofort an, ja? Ich hab dich lieb, bis bald.",
    "check": [
      {
        "k": "Sind Termin (Tag und Uhrzeit), Mitbringen und nüchtern Kommen genannt?",
        "e": "Das sind die Hauptinformationen des Briefs. Wer sie vergisst, schickt die Mutter unvorbereitet zur Praxis."
      },
      {
        "k": "Ist die Absage-Frist mit der Gebühr klar wiedergegeben?",
        "e": "Die Frist und die 25 Euro sind eine praktische Folge. In der Sprachmittlung gibst du solche Zahlen genau weiter."
      },
      {
        "k": "Hast du die sen-Form und einen persönlichen Ton benutzt („Anne, …“)?",
        "e": "Die Nachricht geht an die Mutter, nicht an eine Behörde. Ein vertrauter Ton passt; ein Amtston wäre unnatürlich."
      },
      {
        "k": "Hast du den Inhalt in eigenen Worten wiedergegeben statt wörtlich übersetzt?",
        "e": "Sprachmittlung heißt, die Information verständlich weiterzugeben. Ein Satz, der nach Übersetzung klingt, ist auf Türkisch oft holprig."
      },
      {
        "k": "Hast du mit „aksi takdirde“ oder einer anderen Wendung die Folge genannt?",
        "e": "Die Folge der verpassten Absage gehört zur Information. „Aksi takdirde“ ist die kompakte Form für „sonst“."
      }
    ],
    "mistakes": [
      {
        "bad": "Sigorta kartını ve ilaçlarının listesini al.",
        "good": "Sigorta kartını ve ilaçlarının listesini yanına al.",
        "why": "Der Imperativ ist an sich nicht falsch; es fehlt aber *yanına* („mit“): *yanına al* = nimm mit. Mit *-mAlIsIn* (*yanına almalısın*) klingt es als Rat etwas weicher."
      },
      {
        "bad": "Randevuya gelemeyeceksen bir gün önce haber vermek.",
        "good": "Randevuya gelemeyeceksen en az bir gün önce haber vermen lazım.",
        "why": "Der Infinitiv *haber vermek* ist kein vollständiger Satz. Mit *vermen lazım* nennst du die Person und die Pflicht."
      },
      {
        "bad": "Muayenehane hafta içi sekiz dört açık.",
        "good": "Muayenehane hafta içi sabah sekizden akşam dörde kadar açık.",
        "why": "Für „von … bis …“ brauchst du *-DAn … -(y)A kadar*: sekiz**den** dör**de kadar**."
      }
    ],
    "e": "Bei der Sprachmittlung wählst du aus: Termin, Mitbringen, nüchtern, Absage-Frist, Öffnungszeiten. Du gibst sie in einem Ton weiter, der zum Empfänger passt."
  }
]);
