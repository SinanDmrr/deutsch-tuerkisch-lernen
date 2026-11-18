# A2-Konzept „Deutsch ⇄ Türkçe“ – Phase 1: Recherche & Konzept

**Stand:** 18.11.2026 · **Rolle:** didaktik-produkt · **Status:** Vorschlag. Freigabe durch den Auftraggeber steht aus, ebenso die Durchsicht durch Architekt (Formate, Speicher), deutsch-lehrer und tuerkisch-lehrer (Themenliste).
**Regel:** Aus Prüfungen, Lehrwerken und Apps wurden nur **Formate, Anforderungen und Ideen** übernommen, keine Texte, Aufgaben, Namen oder Designs.

---

## 0. Kurzfassung (10 Zeilen)

1. A2 heißt laut GER „den Alltag bewältigen“: kurze zusammenhängende Texte verstehen, von Vergangenem erzählen, Routinegespräche führen, kurze Nachrichten schreiben. Einzelsätze reichen dafür nicht mehr.
2. Darum verlagert A2 den Schwerpunkt von der Einzelsatz-Abfrage (A1: 42 % MC, 0 Diktate, 0 Lesetexte, 0 Schreibaufgaben) auf Arbeit mit Texten und Situationen: Lese- und Hörtexte, Lückentexte, Rollenspiele und Schreiben mit Mustertext.
3. Grammatik bleibt der Kern und wird vollständiger. DE hat 16 Themen (6 neu: Perfekt II, Dativ-Verben, Zeitangaben, welch-/Pronomen, Hauptsatz-Konnektoren, indirekte Fragen). TR hat 17 Themen (7 neu: idi/vardı, Zeitangaben, -mAk-Konstruktionen, Possessiv + Fall, Wortbildung, Konnektoren, -mIş-Grundlagen).
4. Wortschatz: ca. 600 neue Einträge pro Kurs, davon ca. 150 feste Wendungen. Weniger Einzelwörter pauken, dafür mehr Redemittel, die direkt im Rollenspiel und beim Schreiben gebraucht werden.
5. Dazu kommen 4 neue Übungstypen (`cloze`, `sort`, Rollenspiel-Zeilen, `write`) und 2 neue Inhaltsarten (Lesetext, Hörtext). Alle bauen auf der vorhandenen Dialog-Technik auf. Freies Sprechen (`respond`) gibt es als ungewerteten Bonus.
6. Alles wird um 10 Alltagsszenarien je Kurs gebündelt (Arzt, Amt, Wohnung, Arbeit …). So wiederholen sich Wörter, Grammatik und Texte gegenseitig.
7. In die Prozente zählen nur Aufgaben, die sich automatisch prüfen lassen. Schreiben und freies Sprechen gelten nach dem Selbst-Check als „geübt“. Das ist ehrlich und keine Schein-Bewertung.
8. Das A2-Zertifikat verlangt erstmals Mindestwerte je Fertigkeit (Grammatik, Lesen, Hören, Dialoge) und erledigte Schreibaufgaben.
9. Vorbedingung im Code: Wortschatz, Tagesmix, Zertifikat, Abzeichen und Einstufung sind fest auf `'A1'` verdrahtet. Das muss zuerst gelöst werden.
10. Ehrlich gesagt: Unser A1 ist schlanker als Goethe-A1 (350 statt ca. 650 Wörter, kein Perfekt, kaum Hören). A2 fängt das teilweise auf. Echte Prüfungsreife (Goethe/telc A2) erreichen wir erst, wenn der Wortschatz aufgestockt ist (siehe offene Fragen).

---

## 1. Ist-Stand A1 (am 18.11.2026 mit Node gezählt, nicht geschätzt)

| je Kurs | DE (`Almanca Öğren`) | TR (`Türkisch lernen`) |
|---|---|---|
| Grammatikthemen | 12 | 12 |
| Themenaufgaben | 117 (mc 49, gap 35, speak 24, order 7, match 2) | 119 (mc 52, gap 39, speak 24, order 3, match 1) |
| Dialoge / Fragen | 8 / 32 (24 mc, 8 listen) | 8 / 32 (24 mc, 8 listen) |
| Dialoglänge | 45–77 Wörter | 39–58 Wörter |
| Wörter | 350 | 350 |
| `dictation` | **0** | **0** |
| Hören gesamt | **8** Aufgaben (nur in Dialogen) | **8** |
| Lesetexte > 80 Wörter, Schreibaufgaben | 0 | 0 |

- **Korrektur zur Auftragsangabe:** „236 Aufgaben“ sind **beide Kurse zusammen** (117 + 119). Pro Kurs sind es mit Dialogfragen 149 bzw. 151.
- **Inhaltliche Lücken, die A2 erbt:** In DE-A1 fehlen Perfekt, Imperativ und Dativ. Goethe-A1 enthält das Perfekt der Verben aus der Wortliste ([Goethe SD1/SD2 Testbeschreibung](https://goethe.de/resources/files/pdf29/Pruefungsziele_Testbeschreibung_A2_SD2.pdf)). In TR-A1 fehlt die Wortbildung -lI/-sIz/-lIk, die Gazi TÖMER schon in A1 ansetzt.
- **Technik:** In `js/app.js` steht `'A1'` fest im Code, und zwar im Tagesmix (Z. 812), in den Wortschatz-Ansichten (Z. 1442, 1464, 1483), bei den Abzeichen (Z. 1640/1645), in der Zertifikatsbox (Z. 1660), in der Einstufung (Z. 1761) und beim Übernehmen der Einstufung (Z. 2086). Die Inhalte von A1 umfassen für beide Kurse 300 KB JS, das Audio 25 MB.
- **Audio-Risiko TR:** `tools/tts-voices.json` enthält für Türkisch **nur männliche** Stimmen (fahrettin, fettah). Pro Geschlecht wird die erste genommen. Alle türkischen Sprecherinnen klingen also wie dieselbe Männerstimme. Bei A2-Hörtexten mit zwei oder drei Personen schadet das dem Verstehen. Vorschlag an den Architekten: Stimme **pro Sprecher** statt pro Geschlecht zuordnen (fahrettin/fettah abwechseln) und in den Hörtexten Sprechernamen anzeigen.

---

## 2. Was A2 verlangt – Recherche

### 2.1 GER/CEFR: Kann-Beschreibungen A2 (sinngemäß) und Folgen für uns

| Bereich | A1 (zum Vergleich) | A2 | Folge für unsere Plattform |
|---|---|---|---|
| Hören | vertraute Wörter, sehr einfache Sätze bei langsamer Sprache | häufige Wörter und Wendungen zu persönlich wichtigen Themen (Familie, Einkaufen, Umgebung, Arbeit), dazu das Wesentliche kurzer, klarer Durchsagen und Mitteilungen | Hörtexte: Durchsagen, Anrufbeantworter, Radio-Kurzmeldung, kurze Gespräche |
| Lesen | Namen, Wörter, sehr einfache Sätze (Schilder, Plakate) | sehr kurze, einfache Texte; gezielte Infos in Anzeigen, Prospekten, Speisekarten, Fahrplänen; kurze persönliche Briefe | Lesetexte nach Textsorten, Suchaufgaben (Zuordnung) |
| Interaktion | einfache Verständigung, wenn das Gegenüber hilft | Routinesituationen, direkter Austausch: verabreden, vorschlagen, zustimmen/ablehnen, einladen, sich entschuldigen | Rollenspiele mit Auswahl der eigenen Antwort |
| Produktion | Wohnort, Bekannte beschreiben | in Satzreihen Familie, Lebensumstände, Ausbildung und Arbeit beschreiben, von Erlebtem berichten, vergleichen | Vergangenheit, Komparativ, `respond` |
| Schreiben | einzelne Wendungen und Sätze | kurze Notizen und Mitteilungen, einfacher persönlicher Brief; Sätze mit „und“, „aber“, „weil“ verbinden | `write` mit Mustertext, Konnektoren-Themen |
| Online | kurze Posts, Grüße | einfach auf Beiträge reagieren, einfache Online-Bestellung mit Formular | Formular-Lückentext (`cloze`) |
| Mediation | einfache Infos von Schildern weitergeben | Hauptpunkte kurzer, einfacher Alltagstexte weitergeben | Sprachmittlungs-Fragen in der Erklärsprache (z. B. Elternbrief für ein Familienmitglied zusammenfassen) |

Quellen: [CEFR Self-assessment grid mit Online-Interaktion und Mediation (Europarat, Kopie TU Dortmund)](https://wb.zhb.tu-dortmund.de/storages/wb-zhb/r/Formulare/CEFR-Table-2-Self-assessment-grid-with-online-interaction-and-mediation.pdf), [CEFR Companion Volume](https://rm.coe.int/cefr-companion-volume-with-new-descriptors-2018/1680787989), [Goethe Testbeschreibung A2 Fit (Kann-Beschreibungen)](https://goethe.de/pro/relaunch/prf/de/Pruefungsziele_Testbeschreibung_A2_Fit2.pdf).

### 2.2 Prüfungen Deutsch (nur Formate)

| | Goethe-Zertifikat A2 | telc Deutsch A2 (Start Deutsch 2) | DTZ (A2–B1, Integrationskurs) |
|---|---|---|---|
| Lesen | 4 Teile, ca. 30 Min.: Zeitungsartikel, Info-Liste/Wegweiser, persönliche Nachricht/E-Mail, Anzeigen (Zuordnung). Je 3 Optionen | 3 Teile: Wegweiser (a/b/c), Text richtig/falsch, 8 Anzeigen zu 5 Situationen (eine ohne Lösung = x) | 5 Teile, 45 Min.: Kataloge, Anzeigen, Pressetexte, Broschüren, **Lückentexte in Briefen** |
| Hören | 4 Teile, ca. 30 Min.: Ansagen (2×), privates Gespräch mit Zuordnung (1×), kurze Alltagsgespräche (1×), Interview richtig/falsch (2×) | 3 Teile, ca. 20 Min.: **Telefonnotiz ausfüllen** (2×), Radio-Kurzmeldungen (1×), Gespräch mit Zuordnung (2×) | 4 Teile, 25 Min.: Durchsagen, Telefonnachrichten, Alltagsgespräche, Meinungen |
| Schreiben | 2 Teile, ca. 30 Min.: SMS informell (du), E-Mail halbformell (Sie), je 3 Inhaltspunkte. Laut Sekundärquelle 20–30 bzw. 30–40 Wörter | Formular (5 Lücken) + Antwort auf eine Einladung, **ca. 40 Wörter, 3 von 4 Punkten** | 1 Aufgabe, 30 Min.: halbformelle/formelle Mitteilung für Alltagssituationen |
| Sprechen | 3 Teile, 15 Min.: Fragen zur Person mit Stichwortkarten, vom eigenen Leben erzählen, gemeinsam etwas planen | ca. 15 Min.: vorstellen, Fragen/Antworten mit Karten, gemeinsam planen | ca. 16 Min.: vorstellen, Erfahrungen erzählen, gemeinsam planen |
| Sonst | 200–350 UE à 45 Min. bis A2; Wortliste ca. 1 300 lexikalische Einheiten | bestanden ab 60 % | schriftlich 100 Min. laut IntTestV § 3 |

**Was alle drei gemeinsam haben, ist unser Pflichtprogramm:**
(a) Hören von Durchsagen, Telefonnachrichten und Alltagsgesprächen;
(b) Lesen von Anzeigen (Zuordnung), Listen/Wegweisern, E-Mails/Briefen und kurzen Artikeln;
(c) Schreiben kurzer Nachrichten mit 3 Inhaltspunkten, informell **und** halbformell;
(d) Sprechen: sich vorstellen, erzählen, gemeinsam planen;
(e) Formulare ausfüllen.

Quellen: [Goethe A2 Übersicht](https://www.goethe.de/ins/sg/de/kur/prf/gzsd2/inf.html), [Goethe Tipps zu den Prüfungsaufgaben A2](https://www.goethe.de/resources/files/pdf136/tipps-und-tricks-fr-die-einzelnen-prfungsaufgaben_neu_4-seiten.pdf), [Goethe A2 Wortliste](https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf), [telc Deutsch A2 Übungstest (2024)](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a2_uebungstest_1-1_20241212_5090-b00-010107.pdf), [IntTestV § 3](https://www.gesetze-im-internet.de/inttestv/__3.html), [DTZ-Überblick (Sekundärquelle)](https://deutsch-pruefung.de/dtz), Wortzahlen Goethe-Schreiben: [Sekundärquelle zinglanguages](https://zinglanguages.com/languagetest/goethe-a2-exam). **Die Wortzahlen vor der Umsetzung im offiziellen Modellsatz prüfen.**

### 2.3 Türkisch: Prüfungen und Lehrpläne

- **TYS (Yunus Emre Enstitüsü)** ist ein Test über mehrere Niveaus, bescheinigt aber erst **ab B2**. Die Quellen widersprechen sich: [DPU-Ankündigung](https://birimler.dpu.edu.tr/app/views/panel/ckfinder/userfiles/183/files/Bilimsel_Akademik_Duyurular/Tuerkce_Yeterlik_S_nav__(TYS)(1).pdf) nennt B2/C1, [Türkiye Bursları](https://arsiv.turkiyeburslari.gov.tr/en/announcement/yunus-emre-institute-turkish-proficiency-exam-tys) nennt B2/C1/C2. Als A2-Maßstab taugt TYS also **nicht**.
- **MEB „Türkçe Dil Yeterlikleri Sınavı“** ([Kılavuz 2024](https://turkcedil.meb.gov.tr/tr/index/qc/uploads/2024/10/12111400_index_kilavuz.pdf)) bescheinigt **A1–C1**: Lesen 40 MC-Aufgaben in 60 Min., Hören 25 MC in 50 Min., Sprechen 3 Aufgaben in 20 Min., Schreiben 3 Aufgaben in 50 Min. Je eine Sprech- und eine Schreibaufgabe liegt auf A1–A2-Niveau (Bild beschreiben, Erlebtes berichten, informierender Text). Das ist der passende türkische Maßstab.
- **Türkiye Maarif Vakfı, Lehrplan 2020 (von MEB genehmigt)** ([PDF](https://turkoloji.turkiyemaarif.org/uploads/2024/11/16436c12901a55.pdf)): Für A2 gibt es 296 Lernziele, davon Hören 63, Interaktion 45, Produktion 48, Lesen 66 und **Schreiben 74**. Schreiben ist auf A2 also der größte Block.
- **Gazi TÖMER Programm 2025** ([PDF](https://webupload.gazi.edu.tr/upload/116/2025/11/10/796c7e15-fe0f-4369-9a10-32f0abfe2810-2025-gazI-tomer-program-nIhaI.pdf)): A2 umfasst mindestens 175 Stunden. Ziele: Hören (langsame Gespräche, kurze Nachrichten, Durchsagen, Wetter), Sprechen (Routinen, Vergangenes), Lesen (Nachrichten, Broschüren, Anzeigen, Briefe), Schreiben (Notizen, Nachrichten, chronologische Texte, Grund und Folge). Sprachmittel: Zeitdauer („beş yıldır“, „sabahtan beri“), Reihenfolge („ilk önce, sonra“), Grund/Zweck, „ve, ama, ancak, çünkü“.
- **Wortschatz:** Eine offizielle türkische A2-Wortliste habe ich nicht gefunden. Es gibt Forschung mit Ziel-Wortlisten aus Lehrwerken und Häufigkeitswörterbüchern ([Marmara-Arbeit A1–A2](https://openaccess.marmara.edu.tr/entities/publication/42e2fec8-b0b1-48b1-913e-696c0c4b45b0)).

---

## 3. Grammatik-Inventar A2 und Themenliste (final)

### 3.1 Abgleich Deutsch

| Struktur | A2 laut Quellen? | Entscheidung |
|---|---|---|
| Perfekt aller Verben, auch trennbare, untrennbare und -ieren | ja (Goethe SD2: Perfekt aller Wortlisten-Verben; DVV L5; telc „Einfach gut A2“) | **A2**, aufgeteilt in 2 Themen, weil unser A1 kein Perfekt hat |
| Präteritum war/hatte + Modalverben | ja (Goethe SD2: haben, sein, Modalverben; DVV L9) | **A2**, in einem Thema (de-a2-04 wird erweitert) |
| Dativ, Possessivartikel im Dativ, Verben mit Dativ, Dativ + Akkusativ | ja (DVV L8/L10, Einfach gut) | **A2**, 2 Themen |
| Wechselpräpositionen + liegen/legen, stehen/stellen | ja (DVV L3) | A2 (de-a2-02 wird erweitert) |
| Temporale Präpositionen (seit, vor, ab, von … bis, für), Datum | ja (Goethe SD2; DVV L5/L6) | **A2, neues Thema** |
| welch-, Demonstrativ dies-/der, Indefinitpronomen (man, jemand, niemand, etwas, nichts, einer/keiner/welche) | ja (Goethe SD2: welch-, jemand/niemand; DVV L1/L4/L7/L9) | **A2, neues Thema** |
| deshalb, trotzdem, denn, sondern; zuerst/dann/danach | ja (Goethe SD2: deshalb; DVV L2/L6/L12) | **A2, neues Thema** (Wortstellung im Hauptsatz, getrennt von Nebensätzen) |
| weil, dass, wenn | ja | A2 (vorhanden) |
| indirekte Fragen (ob, W-Wort) | ja (Einfach gut A2: indirekte Fragen) | **A2, neues Thema** (wichtig für höfliche Fragen auf Ämtern) |
| Konjunktiv II: hätte gern, könnte, würde, **sollte** (Rat) | ja (Goethe SD2: hätte/könnte; DVV L7/L8) | A2 (de-a2-09 wird um Ratschläge erweitert) |
| Reflexive Verben, auch mit fester Präposition als Chunk (sich freuen auf) | ja (DVV L6) | A2. Das System „Verben mit Präpositionen“ bleibt B1 (de-b1-10) |
| Genitiv | nur bei Namen (Goethe SD2) | Nur als Hinweis in de-a2-14, kein eigenes Thema; Genitiv bleibt B1 |
| Relativsätze, Passiv Präsens | in Integrationskurs-Lehrwerken am Ende von A2 (DVV L11, Einfach gut); Passiv steht im Goethe-SD2-Inventar bei A2 | **Bleiben B1** (de-b1-03/04). In A2-Lesetexten dürfen einfache Relativsätze vorkommen (nur verstehen, mit Glosse). **Offene Frage 2** |
| damit | DVV L10 | B1 (bei der B1-Planung zu de-b1-05 nehmen) |

### 3.2 Themenliste DE A2 (Reihenfolge = Position im Array; IDs fest)

| Pos | ID | Titel (DE) | Titel (TR) | Lernziel (1 Zeile) | Status |
|---|---|---|---|---|---|
| 1 | de-a2-03 | Perfekt I: haben/sein, ge-…-t/-en | Geçmiş zaman I (Perfekt) | Über gestern und letzte Woche in einfachen Sätzen erzählen | Titel präzisiert |
| 2 | de-a2-11 | Perfekt II: trennbare, untrennbare & -ieren-Verben | Geçmiş zaman II | Perfekt auch von „aufstehen, bezahlen, telefonieren“ sicher bilden | **neu** |
| 3 | de-a2-04 | Präteritum: war, hatte, es gab, Modalverben | Hikâye geçmiş: war, hatte, konnte … | „Ich musste arbeiten, ich konnte nicht kommen“ – Gründe und Zustände in der Vergangenheit | erweitert |
| 4 | de-a2-10 | Imperativ | Emir kipi | Bitten und Anweisungen geben und verstehen (du/ihr/Sie, mit „bitte“ und „mal“) | vorgezogen |
| 5 | de-a2-01 | Dativ: Artikel, Pronomen, Präpositionen | Yönelme hâli (Dativ) | mit/bei/nach/von/zu/aus/seit + Dativ, mir/dir/ihm, meinem/meiner | vorhanden |
| 6 | de-a2-12 | Verben mit Dativ & zwei Objekten | Dativ alan fiiller | helfen, gefallen, gehören, schmecken; „Ich gebe dir das Buch“ | **neu** |
| 7 | de-a2-02 | Wechselpräpositionen: wo? / wohin? | Değişken edatlar | Akk./Dat. nach in, an, auf …; liegen/legen, stehen/stellen, hängen | erweitert |
| 8 | de-a2-13 | Zeitangaben: am, um, im, seit, vor, ab, von … bis; Datum | Zaman ifadeleri ve tarih | Termine, Dauer und Daten sagen und verstehen (Ordinalzahlen) | **neu** |
| 9 | de-a2-07 | Reflexive Verben | Dönüşlü fiiller | sich waschen / sich die Hände waschen; sich freuen auf/über als feste Wendung | erweitert |
| 10 | de-a2-06 | Komparativ & Superlativ | Karşılaştırma | vergleichen mit „als“, „so … wie“, „am …sten“, Vorlieben (lieber, am liebsten) | vorhanden |
| 11 | de-a2-14 | Fragen & Pronomen: welch-, was für ein, dies-, einer/keiner, man, jemand | Soru ve zamirler | gezielt nachfragen und auf Dinge zeigen; „Hast du welche?“ | **neu** |
| 12 | de-a2-08 | Adjektivdeklination | Sıfat çekimi | Endungen nach der/ein/kein/mein im Nom./Akk. sicher, im Dativ: immer -en | vorhanden, eingegrenzt |
| 13 | de-a2-15 | Sätze verbinden: denn, deshalb, trotzdem, sondern | Cümle bağlama | Gründe und Folgen nennen, ohne die Wortstellung zu verlieren (Position 1 zählt) | **neu** |
| 14 | de-a2-05 | Nebensätze: weil, dass, wenn | Yan cümleler | Verb ans Ende; Unterschied zwischen weil und denn | vorhanden |
| 15 | de-a2-16 | Indirekte Fragen: ob, wo, wann … | Dolaylı sorular | „Können Sie mir sagen, wann …?“ – höflich fragen auf Amt und am Telefon | **neu** |
| 16 | de-a2-09 | Konjunktiv II: höflich bitten & Rat geben | Kibar rica ve tavsiye | hätte gern, könnte, würde gern, **sollte** | erweitert |

**Begründung der Reihenfolge:** Erzählen in der Vergangenheit ist die zentrale A2-Kann-Beschreibung und in allen Sprechprüfungen gefragt („vom eigenen Leben erzählen“). Darum kommt es zuerst. Der Imperativ ist leicht und wird sofort für Arzt- und Amtssituationen gebraucht. Danach folgen die Fallblöcke (Dativ vor Wechselpräpositionen). Zuletzt kommt der Satzbau (erst Hauptsatz-Konnektoren, dann Nebensatz, dann indirekte Frage), weil er auf allem davor aufbaut.

### 3.3 Abgleich Türkisch

| Struktur | A2 laut Quellen? | Entscheidung |
|---|---|---|
| -DI (görülen geçmiş) | ja (Maarif A2.1 T1) | A2 (vorhanden) |
| -(y)DI am Nomen: evdeydim, vardı/yoktu | ja (Maarif A2.1 T1: „ek fiil, görülen geçmiş“) | **A2, neues Thema** |
| -AcAk, Aorist, -Abil, -mAlI/lazım/gerek, **-mAk zorunda** | ja (Maarif A2.1 T2–T8) | A2 (vorhanden; „zorunda“ ergänzen) |
| Imperativ, -AlIm | ja (Maarif A2.1 T2/T4/T8) | A2 (vorhanden) |
| -DAn önce / -mAdAn önce / -DIktAn sonra; beri / -DIr; Datum | ja (Maarif A2.1 T1/T3; Gazi A2: „beş yıldır, sabahtan beri“; A1–A2-Grammatik Kap. 5) | **A2, neues Thema** |
| -mAk istemek, -mAyI sevmek, -mAk için | ja (Maarif A2.1 T4/T5/T7/T8; A2.2 T4/T5). Verbalnomen liegen in Yedi İklim, Türkçeye Yolculuk und Altın Köprü auf A2 | **A2, neues Thema**. -mA/-Iş vertieft bleiben B1 (tr-b1-07) |
| ama/fakat, çünkü, bu yüzden, hem … hem, ne … ne, ya … ya | ja (Maarif A2.1 T4/T5; A2.2 T4/T9; Gazi A2) | **A2, neues Thema** |
| Vergleich daha/en + gibi, kadar | ja (Maarif A2.2 T3/T10) | A2 (tr-a2-07 wird um gibi/kadar erweitert) |
| Possessiv + Fall (evimde, arabasına, kitabını; Puffer -n-), Verben mit festem Fall (-A binmek, -DAn korkmak) | Grundlage für alle A2-Texte; tr-a2-04 deckt nur die Genitivverbindung ab | **A2, neues Thema** |
| Wortbildung -lI, -sIz, -lIk, -CI | bei Gazi TÖMER schon A1, in unserem A1 fehlt sie | **A2, neues Thema** (vervielfacht den Wortschatz) |
| -mIş (duyulan geçmiş) | ja: Maarif A2.1 T10 und A2.2 T8, Anadolu A2 Unit 4, A1–A2-Grammatik Kap. 10 | **A2 als Grundlage (vor allem verstehen), neue ID**. tr-b1-01 bekommt den Titel „-mIş vertieft“; B1 hat noch keine Inhalte, es geht also kein Fortschritt verloren |
| -Ip | im A1–A2-Grammatikbuch Kap. 12, bei Maarif nicht | A2 am Ende (vorhanden), Fokus auf häufige Paare (gidip gelmek, oturup konuşmak) |
| -sA | Maarif A2.2 T7 (Grundform), Anadolu B1 | **Bleibt B1** (tr-b1-04). Auf A2 nur Chunks: istersen, mümkünse |
| -ken, -IncA, -DIğI zaman, -An, -DIk | in keiner A2-Quelle | **Bleiben B1** (tr-b1-08/09/02/03) |
| -ArAk / -mAdAn („ohne“) | im A1–A2-Grammatikbuch Kap. 12 | Nicht auf A2. **Hinweis für die B1-Planung:** tr-b2-01 liegt vermutlich zu spät und sollte nach B1 |

### 3.4 Themenliste TR A2 (Reihenfolge = Position im Array; IDs fest)

| Pos | ID | Titel (DE) | Titel (TR) | Lernziel (1 Zeile) | Status |
|---|---|---|---|---|---|
| 1 | tr-a2-01 | Vergangenheit -dI | Görülen geçmiş zaman | Erzählen, was man gestern gemacht hat (bejaht, verneint, Frage) | vorhanden |
| 2 | tr-a2-11 | „war/hatte“: -(y)dI, vardı, yoktu | Ek-fiilin geçmişi | „Evdeydim, çok yorgundum, param yoktu“ – Zustände in der Vergangenheit | **neu** |
| 3 | tr-a2-04 | Genitiv & Possessiv-Konstruktion | İsim tamlaması | „Ahmet’in arabası, okul müdürü“ – Besitz und feste Verbindungen | vorhanden |
| 4 | tr-a2-17 | Possessiv + Fall & Verben mit festem Fall | İyelik + hâl ekleri, fiillerin istediği hâller | „arabasına, evimizde, kitabını“; „otobüse binmek, köpekten korkmak“ | **neu** |
| 5 | tr-a2-12 | Vorher, nachher, seit: -mAdAn önce, -DIktAn sonra, beri, -DIr; Datum | Zaman ifadeleri | Abläufe und Dauer ausdrücken, Termine und Daten nennen | **neu** |
| 6 | tr-a2-02 | Futur -(y)AcAk | Gelecek zaman | Pläne und Versprechen | vorhanden |
| 7 | tr-a2-03 | Aorist -(I)r | Geniş zaman | Gewohnheiten, Angebote und höfliche Bitten („… verir misiniz?“), Verneinung -mAz | vorhanden; **18.11.2026 vor tr-a2-09 gestellt** (die höfliche Bitte „… misiniz?“ in tr-a2-09 setzt den Aorist voraus; Opus-Gegenlesen) |
| 8 | tr-a2-09 | Imperativ & Wunschform | Emir ve istek kipi | Bitten, Anweisungen, Vorschläge („gidelim mi?“) | vorgezogen |
| 9 | tr-a2-13 | Wollen, mögen, um zu: -mAk istemek, -mAyI sevmek, -mAk için | -mAk ile kurulan yapılar | Wünsche, Vorlieben und Zwecke ausdrücken | **neu** |
| 10 | tr-a2-05 | Können: -(y)Abil | Yeterlilik | Fähigkeit, Erlaubnis, Möglichkeit; Verneinung -(y)AmA | vorhanden |
| 11 | tr-a2-06 | Müssen: -mAlI, lazım, gerek, zorunda | Gereklilik | Pflicht, Rat und Notwendigkeit unterscheiden | erweitert |
| 12 | tr-a2-07 | Vergleich: daha, en, gibi, kadar | Karşılaştırma | vergleichen und gleichsetzen („senin kadar“, „bir çocuk gibi“) | erweitert |
| 13 | tr-a2-08 | Mit: ile / -(y)lA | Vasıta ve birliktelik | Begleitung und Mittel („otobüsle, annemle“) | vorhanden |
| 14 | tr-a2-16 | Wortbildung: -lI, -sIz, -lIk, -CI | Yapım ekleri | aus einem Wort vier machen (tuzlu, tuzsuz, tuzluk, …) | **neu** |
| 15 | tr-a2-14 | Sätze verbinden: çünkü, bu yüzden, hem … hem, ne … ne, ya … ya | Bağlaçlar | Gründe, Folgen und Aufzählungen in kurzen Texten | **neu** |
| 16 | tr-a2-10 | Konverb -(y)Ip | Zarf-fiil -ip | zwei Handlungen verbinden („gidip geldim“) | vorhanden |
| 17 | tr-a2-15 | Gehörtes & Erzähltes: -mIş (Grundlagen) | Duyulan geçmiş zaman (temel) | Nachrichten und Erzählungen mit -mIş verstehen, einfache Sätze selbst bilden | **neu** |

Der Lehrplan ändert sich nur in `js/curriculum.js`: neue Zeilen anhängen bzw. umstellen. tr-b1-01 bekommt den neuen Titel „-mIş vertieft (-mIştI, Überraschung)“. Fortschritt ist davon nicht betroffen, weil es für A2/B1 noch keine Aufgaben gibt.

---

## 4. Übungstypen und Inhaltsarten

**Leitlinie:** Vorhandenes wiederverwenden (`mc, gap, order, match, listen, dictation, speak`, Dialog-Ansicht). Neu kommt nur hinzu, was A2 wirklich braucht. Jede neue Aufgabe bekommt `e`, und jeder typische Fehler bekommt `why`/`wrong` (Grundsatz 3).

### 4.1 Neue Inhaltsart „Lesetext“ (`K.addText`, kind `read`)
```js
K.addText('de-a2-r01', {
  level: 'A2', kind: 'read', scene: 'wohnung',          // Szenario-Bündel (Abschnitt 5)
  genre: 'anzeige' | 'email' | 'hinweis' | 'artikel' | 'programm' | 'formular' | 'nachricht',
  title: 'Titel DE', sub: 'Titel TR',
  body: ['Absatz 1 …', 'Absatz 2 …'],                    // ODER bei Anzeigen/Listen:
  items: [{ h: 'A', t: 'kurzer Anzeigentext' }, …],
  gloss: { 'Kaution': 'depozito' },                     // Wörter außerhalb A1+A2, max. 5 % des Textes
  questions: [ /* mc, gap, match, cloze, write – IDs '<textId>.q<n>' */ ]
});
```
- **Warum:** Lesen hat in allen Prüfungen 3–5 Teile mit echten Textsorten. Duolingos „Stories“ (Lesen und Hören auf Textebene) waren laut Duolingo-Bericht die meistgenutzte Zusatzfunktion. Auf A2 fehlt uns genau das.
- **Länge:** 60–180 Wörter. **Mindestens 95 % der Wörter** stammen aus der A1- und A2-Liste des Kurses, der Rest steht in `gloss`. Begründung: Das Textverständnis steigt mit dem Anteil bekannter Wörter linear. Für bequemes Lesen gelten 98 % als sinnvolles Ziel, 95 % als frühere Untergrenze (Schmitt et al. 2011). Der **Validator kann die Abdeckung messen**: Wörter des Textes gegen Wortschatz plus Glosse (Aufwand M, lohnt sich bis C2).
- **Bewertung:** Die Fragen zählen in die Prozente (außer `write`).
- **Aufwand Entwicklung: S–M.** `renderDialog` lässt sich wiederverwenden. Der Text bleibt beim Antworten sichtbar, am Handy einklappbar.

### 4.2 Neue Inhaltsart „Hörtext“ (kind `listen`)
```js
K.addText('de-a2-h01', {
  level: 'A2', kind: 'listen', scene: 'bahn', genre: 'durchsage' | 'anrufbeantworter' | 'radio' | 'gespraech' | 'interview',
  title, sub, plays: 2,                                  // Hinweis „zweimal hören“ wie in der Prüfung (nicht erzwungen)
  lines: [{ s: 'Sprecherin', g: 'f', t: 'Zielsprache', n: 'Übersetzung' }],
  hide: true,                                            // Text + Übersetzung erst nach den Fragen oder per „Text zeigen“
  questions: [ /* mc, listen, gap (Telefonnotiz!), match */ ]
});
```
- **Warum:** Durchsagen, Telefonnachrichten und Gespräche sind in jeder A2-Prüfung Pflicht. Bei uns gibt es auf A1 nur 8 Höraufgaben pro Kurs. Im Duolingo-Bericht lag Hören durchweg unter Lesen, das ist die schwächere Fertigkeit.
- **Länge:** 30–120 Wörter, Durchsagen kurz, Gespräche länger. Typ „Telefonnotiz“ = `gap`/`cloze` mit Name, Uhrzeit und Nummer (Zahlen sind hier erwünscht, aber **nicht** in `speak`).
- **Bewertung:** zählt. Fehlt das Audio, gilt ADR-5: ohne Wertung überspringen.
- **Aufwand: S.** Dialog-Ansicht + `hide`-Schalter; `playSeq` gibt es schon. Voraussetzung: Stimmen pro Sprecher (siehe Abschnitt 1).

### 4.3 `cloze` – Lückentext mit mehreren Lücken
```js
{ id: "de-a2-03.14", t: "cloze", q: "Ergänze die Nachricht.",
  text: "Hallo Mehmet, gestern {1} ich mit Ayla im Kino {2}. Der Film {3} toll!",
  gaps: { "1": { a: ["bin"], o: ["bin", "habe", "war"], wrong: { "habe": "gehen = Bewegung → Perfekt mit **sein**" } },
          "2": { a: ["gewesen"], wrong: { "gegangen": "„im Kino“ = wo? → gewesen; „ins Kino gegangen“ wäre auch richtig, dann aber mit Akkusativ" } },
          "3": { a: ["war"], o: ["war", "hatte", "ist"] } },
  cs: false, e: "Erklärung zum ganzen Text" }
```
- Mit `o` erscheint eine Auswahlliste (am Handy angenehm), ohne `o` ein Eingabefeld (nutzt `fold()` wie bei `gap`). **Höchstens 5 Lücken.**
- **Warum:** Grammatik im Textzusammenhang statt im Einzelsatz. Formate wie DTZ „Lückentext im Brief“ und telc/Goethe-Formulare. Formulare ausfüllen ist zugleich Online-Interaktion auf A2.
- **Bewertung:** zählt als **eine** Aufgabe und ist nur richtig, wenn alle Lücken stimmen. Rückmeldung gibt es aber pro Lücke. Der Eintrag in „Meine Lücken“ hängt an der Aufgaben-ID (Speicherformat bleibt gleich).
- **Aufwand: M** (Eingaben im Text, Handy-Tastatur, Rückmeldung pro Lücke).

### 4.4 `sort` – in Gruppen einordnen
```js
{ id: "de-a2-03.6", t: "sort", q: "Perfekt mit haben oder sein?",
  cats: ["haben", "sein"], items: [["fahren", 1], ["kaufen", 0], ["aufstehen", 1], ["schlafen", 0]],
  why: { "fahren": "Ortswechsel → sein", "schlafen": "kein Ortswechsel → haben" }, e: "…" }
```
- **Warum:** Viele A2-Regeln sind Entscheidungen zwischen 2–3 Klassen: haben/sein, Akk./Dat. bei Wechselpräpositionen, Dativ- und Akkusativverben, im TR welche Endung nach Vokalharmonie oder welcher Fall bei welchem Verb. Ein `sort` ersetzt 4–6 MC-Fragen und trainiert die Regel statt Einzelfälle.
- **Bewertung:** zählt, richtig nur wenn alles stimmt. Falsch einsortierte Elemente bekommen ihr `why`.
- **Aufwand: S–M** (Antippen und Zuordnen wie bei `match`, kein Drag & Drop nötig).

### 4.5 Rollenspiel: Dialog mit eigener Rolle (Erweiterung von `addDialog`)
```js
K.addDialog('de-a2-d03', { level: 'A2', scene: 'arzt', role: 'Patient/in', title, sub,
  lines: [
    { s: "Praxis", g: "f", t: "Praxis Dr. …, guten Tag.", n: "…" },
    { me: true, id: "de-a2-d03.c1",
      o: ["Guten Tag, ich möchte meinen Termin verschieben.", "Hallo, Termin weg.", "Guten Tag, ich verschiebe Sie."],
      a: 0, why: { 1: "verständlich, aber zu knapp und unhöflich für ein Telefonat mit der Praxis", 2: "„Sie verschieben“ heißt: die Person verschieben – gemeint ist der Termin" },
      e: "Am Telefon: Gruß + Anliegen in einem Satz, mit „möchte“." , n: "…" },
    …
  ],
  questions: [ /* wie bisher */ ] });
```
- Nach der Wahl wird die richtige Zeile vorgelesen, dann läuft der Dialog weiter. Optional: Knopf „laut sagen“ (`speak`-Bonus).
- **Ablenker sind nicht nur Grammatikfehler, sondern auch pragmatische Fehler:** zu unhöflich, du statt Sie, passt nicht zur Frage. So lernt man Register (Sie/du, siz/sen), was auf A2 entscheidend ist.
- **Warum:** Interaktion ist eine zentrale A2-Fertigkeit. Alle drei DE-Prüfungen haben „gemeinsam planen“ oder ein Rollenspiel. Die Auswahl funktioniert ohne Mikrofon und lässt sich auf jedem Gerät gleich bewerten.
- **Bewertung:** Jede Wahlzeile zählt wie `mc` (ID `<dialogId>.c<n>`, Präfixprüfung im Validator).
- **Aufwand: M.**

### 4.6 `write` – Schreiben mit Mustertext und Selbst-Check
```js
{ id: "de-a2-r04.q5", t: "write",
  task: "Erklärsprache: Du kannst am Samstag nicht zur Feier deiner Kollegin kommen. Schreib ihr eine Nachricht.",
  points: ["Dank für die Einladung", "Grund, warum du nicht kommst", "Vorschlag für ein anderes Treffen"],
  reg: "du",                        // du | Sie | sen | siz
  words: [20, 40],
  chunks: ["Vielen Dank für …", "Leider kann ich nicht …, weil …", "Hast du Lust, …?"],
  model: "Mustertext in der Zielsprache (selbst geschrieben, genau A2)", modeln: "Übersetzung",
  check: ["Alle 3 Punkte drin?", "Anrede und Gruß passen zu „du“?", "Im weil-Satz steht das Verb am Ende?", "Mindestens ein Perfekt-Satz richtig gebildet?"],
  hint: [["danke", "dank"], ["weil", "leider"], ["lust", "treffen", "vielleicht"]],   // optional: Stichwörter je Punkt → nur Hinweis
  e: "Warum der Mustertext so aufgebaut ist" }
```
- **Ablauf:** Aufgabe lesen → schreiben (Wortzähler, Sonderzeichen-Leiste) → „Fertig“. Dann erscheint der Mustertext neben dem eigenen Text, dazu die Checkliste zum Abhaken. Automatisch gibt es **nur Hinweise, keine Note**: Wortzahl, Anrede/Gruß gefunden, Stichwörter je Inhaltspunkt („Hast du Punkt 2 vergessen?“).
- **Warum:** Schreiben steckt in jeder Prüfung (Goethe 2 Teile, telc Antwort auf Einladung, DTZ Brief). Im Maarif-Lehrplan ist Schreiben der größte A2-Block (74 Lernziele). Forschung zu Mustertexten als Feedback: Lernende bemerken vor allem **Wortschatz und Chunks** und übernehmen sie in die Überarbeitung. **Geführtes Vergleichen** (z. B. mit Notizen, bei uns mit Checkliste) bringt die größten und dauerhaftesten Gewinne. Schwächere Lernende profitieren weniger, wenn der Mustertext nicht an ihr Niveau angepasst ist. Deshalb werden Mustertexte **genau auf A2** geschrieben (Übersicht in Wu, Qie & Wang 2023).
- **Bewertung:** zählt **nicht** in die Prozente. Mit abgehakter Checkliste gilt die Aufgabe als „geübt“. Es entsteht kein Eintrag in „Meine Lücken“.
- **Ehrliche Grenze:** Ohne Server und KI gibt es keine Korrektur freier Texte. Busuu löst das mit Korrekturen durch Muttersprachler aus der Community. Das können wir nicht, deshalb der Knopf **„Text kopieren“**, um ihn bei Bedarf einer Lehrkraft oder einem Lernpartner zu schicken. Es wird nichts automatisch versendet.
- **Speichern des eigenen Textes:** wünschenswert (max. 600 Zeichen), braucht aber ein neues optionales Feld im Profil inkl. Export/Merge. **Entscheidung beim Architekten** (ADR, ggf. `migrateProfile`-Schritt), siehe offene Frage 4.
- **Aufwand: M**, mit Speichern und Hinweisen **L**.

### 4.7 `respond` – freies Sprechen (Bonus)
```js
{ id: "de-a2-03.15", t: "respond", say: "Was hast du am Wochenende gemacht?", q: "Antworte in 2–3 Sätzen.",
  models: ["Am Samstag habe ich lange geschlafen. Am Nachmittag bin ich mit meiner Schwester spazieren gegangen."],
  chunks: ["Am Samstag …", "Danach …"], e: "…" }
```
- Antwort laut sprechen. Optional nimmt das Gerät **lokal** auf (MediaRecorder, nur im Arbeitsspeicher, nie hochgeladen, beim Verlassen gelöscht), danach eigene Aufnahme und Musterantwort hören.
- **Warum:** Goethe Sprechen Teil 1/2 (Fragen zur Person, vom Leben erzählen). In der Duolingo-Studie von Smith, Jiang & Peters (2024) wünschten sich Lernende mehr Sprech- und Ausspracheübung. Laut einer systematischen Übersicht zu Shadowing (Whitworth 2024) kann Nachsprechen Verständlichkeit und Flüssigkeit verbessern. Deshalb zusätzlich eine Option „im Schatten nachsprechen“ bei Dialogzeilen (nutzt `speak`).
- **Bewertung:** ungewertet (wie ADR-6). **Aufwand: M** (MediaRecorder auf iOS prüfen).

### 4.8 Vorhandene Typen anders gewichten (Zielmischung pro A2-Grammatikthema)
| Typ | A1 heute | A2-Ziel |
|---|---|---|
| mc | 42–44 % | **≤ 30 %** |
| gap | 30–33 % | ≥ 20 % |
| cloze | – | ≥ 10 % |
| order (Satzklammer, Nebensatz, TR-Verbendstellung mit Konverb) | 3–6 % | **≥ 15 %** |
| sort / match | 1–2 % | ≥ 10 % |
| listen / dictation in Themen | 0 % | **≥ 10 %** |
| speak | 2 pro Thema | 2 pro Thema + 1 `respond` |

Begründung: Selbst etwas abrufen und bilden (Tippen, Bauen) ist anspruchsvoller und aussagekräftiger als Wiedererkennen. Die Forschungsübersicht von Lei & Reynolds (2022) zu Wortkarten weist darauf hin, dass rezeptive MC-Tests praktisch, aber weniger aussagekräftig sind als produktive Tests. Wörter mit `pos:"phr"` ab 3 Wörtern werden ab Fach 4 nicht getippt, sondern als `order` aus Bausteinen gebaut (Entwicklung S).

### 4.9 Sprachmittlung (kein neuer Typ)
1–2 Fragen pro Lesetext in der **Erklärsprache**, z. B. „Deine Mutter versteht den Brief der Schule nicht. Was muss sie bis Freitag mitbringen?“. Das entspricht der CEFR-A2-Mediation („Hauptpunkte kurzer Alltagstexte weitergeben“) und passt genau zur Zielgruppe zweisprachiger Familien.

---

## 5. Szenarien: 10 Bündel je Kurs

Jedes Szenario besteht aus **1 Rollenspiel-Dialog + 1 Lese- oder Hörtext + 1 Schreibaufgabe** und einem passenden Wortfeld. Insgesamt sind es 12 Lese- und 10 Hörtexte, weil 2 Szenarien beides bekommen. Szenarien sind kein eigener Reiter, sondern ein Filter bzw. eine Gruppierung (`scene`) im Reiter „Lektionen“.

| # | DE: Leben im deutschsprachigen Raum | TR: Türkei-Alltag (Urlaub, Familie, Leben/Arbeiten in der Türkei) |
|---|---|---|
| 1 | Arzt & Apotheke: Termin verschieben, Krankmeldung | Hastane & eczane: Randevu, reçete |
| 2 | Bürgeramt: Anmeldung, Formular, Wartenummer-Durchsage | Otel & tatil: Rezervasyon, şikâyet |
| 3 | Wohnung: Vermieter, Reparatur, Hausordnung lesen | Ev kiralamak & komşular: aidat, tamirci |
| 4 | Arbeit: Schichtplan, Krankmeldung, Kollegen | Otogar & havalimanı: anonslar, rötar |
| 5 | Schule/Kita: Elternbrief (Sprachmittlung) | Bayram & misafirlik: bayramlaşma, kutlama mesajı |
| 6 | Bahn & Verkehr: Durchsagen, Verspätung | Alışveriş, pazarlık & iade |
| 7 | Einkaufen & Umtausch | Banka, kargo, telefon hattı |
| 8 | Bank, Post & Paket | İş yerinde: toplantı, e-posta |
| 9 | Feste & Einladungen: zusagen, absagen | Düğün & davet: davete cevap |
| 10 | Urlaub & Reisen: Hotel, Wetter | Aileyle telefonda: haber vermek („geçmiş olsun“, „kolay gelsin“) |

Die Szenarien sind in jeder Sprache **eigenständig gedacht**, keine Übersetzungen voneinander (Grundsatz 4). Situationen aus A1 (Bäcker, Weg fragen) werden nicht wiederholt, sondern vertieft (z. B. Arzt: Termin *verschieben* statt nur vereinbaren).

---

## 6. Wortschatz A2

**Richtwerte aus Quellen:**
- Goethe: A1 umfasst „circa 650 Wörter“, davon sollte etwa die Hälfte aktiv verfügbar sein. Das Prüfungsvokabular für A2 umfasst **ca. 1 300 lexikalische Einheiten** (mindestens rezeptiv, kumuliert).
- Die Wortliste für A2 Fit nennt ca. 1 250 Einträge, aktiv soll etwa die Hälfte genutzt werden.
- Milton & Alexiou (Wortschatzgrößen-Tests): A2 entspricht etwa **1 500–2 500** (Englisch), **1 650** (Französisch) bzw. **2 237** (Griechisch) bekannten Wörtern. Diese Tests messen aber alles Bekannte, nicht nur einen Lehrplan.
- Türkisch: Eine offizielle Liste gibt es nicht. Wegen der Agglutination zählen Wortbildungs-Suffixe mehr als Lemma-Zahlen, deshalb das neue Thema tr-a2-16.

**Bewertung des Ist-Stands:** Unser A1 mit 350 Wörtern entspricht nur ca. 54 % der Goethe-A1-Liste.

**Vorschlag: 600 neue Einträge je Kurs**
- **450 Einzelwörter + 150 Wendungen/Chunks** (`pos:"phr"`, ca. 25 %). Kumuliert ergibt das 950 Wörter + 150 Chunks, also ca. **1 100 Einheiten**, rund 85 % des Goethe-A2-Umfangs. Die **ehrliche Lücke** von ca. 200 Einheiten muss B1 schließen, oder es gibt einen A1-Nachtrag (offene Frage 3).
- **Warum 25 % Chunks:** Schätzungen zum Anteil formelhafter Sequenzen reichen von 52–59 % des Textes (Erman & Warren 2000) bis zu deutlich weniger, wenn nur Sequenzen zählen, die über viele Texte verteilt sind (Zweiwortverbindungen 14–32 %, Dreiwortverbindungen 3–13 %). Chunks sind also wichtig, machen aber nicht die Mehrheit aus. Den Rest liefern die Redemittel (`chunks`) in Rollenspiel und Schreiben.
- **Zusatzfelder (optional, nur Inhaltsformat, kein Speicherformat):** DE-Verben `pf:"hat gekauft"`, `rek:"+ Dat."`; TR-Verben `ao:"gelir"` (unregelmäßiger Aorist), `rek:"-A"` / `"-DAn"`. Validator anpassen (S).
- **Neue Wortfelder** (additiv, ohne Fortschritt dran): `travel` (Reisen & Urlaub / Seyahat ve tatil), `media` (Medien & Kommunikation / Medya ve iletişim), `feel` (Gefühle & Meinungen / Duygular ve görüşler), `service` (Dienstleistungen & Behörden / Hizmetler ve resmî işler). `work` wird zu „Arbeit & Ausbildung“ umbenannt.
- **Grobe Verteilung der 600:** service 60, work 50, body 45, home 45, travel 50, media 35, feel 50, free 40, shop 35, city 35, people 30, food 25, verbs 60 (A2-Kernverben), small/Konnektoren 40.
- **Regel „kein Wort ohne Zusammenhang“:** Jedes A2-Wort kommt in mindestens einem A2-Text, -Dialog oder einer A2-Übung vor. Der Validator gibt die Liste der Wörter ohne Zusammenhang aus (M).

---

## 7. Mengengerüst je Kurs

| | A1 (Ist) | **A2 DE** | **A2 TR** |
|---|---|---|---|
| Grammatikthemen | 12 | 16 | 17 |
| Aufgaben pro Thema | ca. 10 (inkl. 2 speak) | 12 (10 gewertet + 2 speak) + 1 respond | gleich |
| Themenaufgaben gesamt | 117 / 119 | 192 + 16 respond (160 gewertet) | 204 + 17 respond (170 gewertet) |
| Rollenspiel-Dialoge | 8 (32 Fragen) | 10 × (4 Fragen + 3 Wahlzeilen) = 70 | 70 |
| Lesetexte | 0 | 12 × 5 Fragen = 60 (davon 12 Sprachmittlung) | 60 |
| Hörtexte | 0 | 10 × 4 Fragen = 40 | 40 |
| Schreibaufgaben | 0 | 10 (+ 2 Formular-`cloze`) | 10 (+ 2) |
| Neue Wörter | 350 | 600 (450 + 150 Chunks) | 600 |
| **Gewertete Aufgaben** | ca. 125 | **ca. 330** | **ca. 340** |
| Neue Audiotexte (geschätzt) | ca. 1 100 | ca. 1 600 | ca. 1 600 |

**Ehrlich:** Das ist das **2,5-Fache** des A1-Aufwands, vor allem beim Schreiben und Gegenlesen durch die Lehrkräfte. Ohne die Szenarien wäre A2 schneller fertig, aber didaktisch eben „A1 mit mehr Vokabeln“, also genau das, was der Auftraggeber nicht will. Bei der Dateigröße kommen ca. 400–500 KB JS hinzu (A1: 300 KB). Die ADR-10-Schwelle von 1,5 MB wird also spätestens mit B1 erreicht. Nachladen je Niveau sollte schon bei A2 vorbereitet werden.

---

## 8. Fortschritt, Zertifikat, Einstufungstest

**Fortschritt:** Die Niveau-Prozente bleiben wie bisher (nur zählbare Aufgaben). **Neu** sind Fertigkeits-Balken je Niveau: Grammatik · Lesen · Hören · Dialoge (gewertet) sowie Schreiben (geübt x/10) und Sprechen (geübt, Bonus). Das macht ehrlich sichtbar, wo man steht, und setzt nicht unter Druck: keine Ranglisten, keine Warnungen.

**Zertifikat A2:**
1. ≥ 80 % aller gewerteten A2-Aufgaben richtig. Per Einstufung übersprungene Themen fallen aus dem Nenner.
2. **In jedem Bereich mindestens 60 %:** Grammatik, Lesen, Hören, Dialoge/Rollenspiel. *Warum:* So kann man das Zertifikat nicht allein über Grammatik erreichen. Auch in den echten Prüfungen müssen alle Teile bestanden werden.
3. ≥ 70 % der A2-Wörter in Fach ≥ 3.
4. ≥ 6 von 10 Schreibaufgaben mit abgeschlossener Checkliste.
5. Sprechen ist **keine** Bedingung (browserabhängig, ADR-6).
- Das A1-Zertifikat ist keine Voraussetzung.
- **Das Zertifikat wird erst freigeschaltet, wenn A2 vollständig ausgeliefert ist.** Alles andere wäre Schönfärberei.
- Die Pflichtzeile „Selbstlern-Nachweis – kein offizielles Sprachzertifikat“ bleibt. Für TR wird „Yunus Emre“ durch „TYS/MEB“ ersetzt oder ergänzt.

**Einstufungstest: ja, A2 einbeziehen, aber erst wenn alle A2-Grammatikthemen fertig sind.**
- Stufe 1 = der heutige A1-Test. Sind ≥ 75 % der A1-Themen beherrscht, folgt Stufe 2 (A2): pro A2-Grammatikthema 1 Frage aus der zweiten Hälfte (`mc`, `gap`, `cloze` mit `o`, `listen`) und bei richtiger Antwort 1 Bestätigungsfrage. Nach 3 nicht beherrschten Themen in Folge wird abgebrochen.
- Am Ende stehen 1 kurzer Lesetext und 1 kurzer Hörtext mit je 3 Fragen. Das ergibt nur eine **Empfehlung** („Lesen gut / Hören noch üben“). Texte werden nicht übersprungen, weil sie Übung sind und keine neue Grammatik.
- Insgesamt höchstens ca. 35 Fragen, mit **„Später fortsetzen“** (Zwischenstand speichern).
- Die ADR-7-Regel „Einstufung schreibt nichts in `prog`“ bleibt.
- Verworfen: ADR-7-Idee „3 zufällige Themen pro Niveau“. Bei 16/17 Themen ist das zu grob und führt zu falschem Überspringen.

---

## 9. Reihenfolge der Umsetzung (damit Lernende früh profitieren)

| Phase | Inhalt | Wer | Aufwand |
|---|---|---|---|
| **0 – Technik-Vorbedingung** | `'A1'` aus Tagesmix, Wortschatz, Abzeichen, Zertifikat und Einstufung lösen; Niveau-Seite A2 mit Status „in Aufbau (x von 16)“; Validator: `addText`, ID-Präfixe `-r`, `-h`, `.c`, `.q`; Stimmen pro Sprecher (TR); Nachladen je Niveau vorbereiten | Architekt, Entwickler | S–M |
| **1 – „Erzählen, was war“** | DE: Perfekt I, Perfekt II, Präteritum. TR: -dI, -(y)dI/vardı, Zeitangaben. Je 150 Wörter (Zeit, Arbeit, Gesundheit, Gefühle); 3 Lese- und 3 Hörtexte (`addText`, kaum neue Technik) | Lehrkräfte | Inhalt M, Technik S |
| **2 – Kontext-Grammatik** | `cloze` + `sort` bauen; nächste 6 Themen (DE Dativ-Block, Imperativ, Zeitangaben; TR Possessiv + Fall, Futur, Imperativ); +200 Wörter; 4 weitere Texte | Entwickler, dann Lehrkräfte | M |
| **3 – Szenarien** | Rollenspiel-Zeilen + `write` bauen; 10 Szenarien je Kurs mit Dialog, Text und Schreiben | Entwickler, Lehrkräfte, UX | M–L |
| **4 – Rest** | übrige Themen, letzte 250 Wörter, `respond` (Bonus), Shadowing-Option | alle | M |
| **5 – Abschluss** | Einstufung A2, Zertifikat A2, sanfte Abzeichen (z. B. „Erste E-Mail geschrieben“, „10 Durchsagen verstanden“), Abnahme | Entwickler, QA, didaktik-produkt | M |

Jede Phase wird einzeln ausgeliefert und durchläuft Validator, `test-core`, Browsertest (hell/dunkel, Handy) und **Gegenlesen durch beide Lehrkräfte** (wie bei A1).

---

## 10. Abnahme-Checkliste A2 (je Kurs, messbar)

- [ ] **Umfang:** 16 (DE) / 17 (TR) Themen mit je ≥ 10 gewerteten Aufgaben; 10 Rollenspiele; 12 Lese- und 10 Hörtexte; 10 Schreibaufgaben; 600 Wörter, davon ≥ 120 Chunks.
- [ ] **Mischung:** mc ≤ 30 %; jedes Thema hat ≥ 1 `order` oder `sort` und ≥ 1 `listen`/`dictation`.
- [ ] **Fertigkeiten:** Lesen ≥ 60, Hören ≥ 40, Schreiben 10, Sprechen 24 `speak` + ≥ 16 `respond` (Zahlen = gewertete Fragen bzw. Aufgaben).
- [ ] **Textsorten abgedeckt:** Anzeige, E-Mail/Nachricht, Hinweis/Aushang, Programm/Liste, kurzer Artikel, Formular; Hören: Durchsage, Anrufbeantworter, Radio, Gespräch.
- [ ] **Register:** ≥ 4 Schreibaufgaben informell und ≥ 4 halbformell (du/Sie, sen/siz); Rollenspiel-Ablenker enthalten Registerfehler mit Erklärung.
- [ ] **Fehlererklärungen:** jede falsche Option hat `why`; jede `cloze`-Lücke hat ≥ 1 `wrong`; jede `write`-Aufgabe hat Mustertext + `e`.
- [ ] **Abdeckung:** jeder Lesetext ≥ 95 % bekannte Wörter (Validator); jedes neue Wort steht in einem Zusammenhang.
- [ ] **Wiederholung:** A2-Wörter und falsche A2-Aufgaben landen im SRS; Tagesmix nutzt A2 nur aus begonnenen Themen.
- [ ] **Motivation:** Fertigkeits-Balken, A2-Abzeichen ohne Druck, Zertifikat erst bei vollständigem Inhalt.
- [ ] **Datensicherheit:** alle IDs neu und eindeutig; keine Änderung am Speicherformat ohne `migrateProfile` + Fixture + Test; Export/Import enthält neue Felder (z. B. Schreibtexte); Aufnahmen nie gespeichert oder hochgeladen.
- [ ] **Audio:** alle neuen Texte haben Piper-Aufnahmen; Hörtexte mit Stimme pro Sprecher.
- [ ] **Muttersprachlich:** jeder Zieltext von der Lehrkraft der Zielsprache, jede Erklärung von der Lehrkraft der Erklärsprache gegengelesen.
- [ ] **Nichts kopiert:** Stichprobe aller Texte gegen Prüfungs-Modellsätze (keine Übernahme von Situationen 1:1, Namen, Sätzen).

---

## 11. Risiken und ehrliche Grenzen

1. **Schreiben ohne Korrektur.** Mustertext + Checkliste ist das Beste ohne Server, aber kein Ersatz für eine Lehrkraft. So muss es den Lernenden auch gesagt werden.
2. **Türkische Stimmen:** Es gibt nur männliche Stimmen. Hörtexte mit Frauenrollen klingen unnatürlich. Mindestens Stimme pro Sprecher, langfristig eine frei lizenzierte weibliche Stimme beobachten.
3. **Autorenkapazität:** ca. 330–340 gewertete Aufgaben + 600 Wörter + 22 Texte pro Kurs. Ohne Phasen kommt erst nach Monaten etwas bei den Lernenden an.
4. **TR-Inventar ist eine begründete Synthese** (Maarif, Gazi, Lehrwerksstudien), keine amtliche Liste. Die Lehrkraft für Türkisch sollte das prüfen.
5. **Wortzahlen beim Goethe-Schreiben** stammen aus einer Sekundärquelle. Vor der Umsetzung im offiziellen Modellsatz prüfen (nur das Format).
6. **Speicher:** Werden Schreibtexte gespeichert, wächst `dt-data` (10 × 600 Zeichen ≈ 6 KB pro Kurs, unkritisch). Das Feld muss aber sauber in Export/Merge.

---

## 12. Offene Fragen an den Auftraggeber

1. **Zielgruppe und Szenarien:** Soll der DE-Kurs klar auf das Leben in Deutschland ausgerichtet sein (Behörden, Arbeit, DTZ-nah)? Und der TR-Kurs auf Urlaub, Familie und Partnerschaft oder auch auf Leben und Arbeiten in der Türkei? Davon hängen die 10 Szenarien ab.
2. **Relativsätze und Passiv:** Integrationskurs-Lehrwerke nehmen sie ans Ende von A2. Wir schlagen B1 vor (A2 nur zum Verstehen). Einverstanden? Und im TR-Kurs: **-mIş-Grundlagen nach A2 vorziehen** (wie Maarif/Anadolu)?
3. **Wortschatzmenge:** 600 neue Einträge je Kurs (kumuliert ca. 1 100 statt Goethe ca. 1 300)? Oder zusätzlich ein **A1-Nachtrag** von ca. 150 Wörtern, damit A1 näher an die 650 von Goethe-A1 kommt?
4. **Schreibtexte speichern:** Sollen eigene Texte lokal gespeichert werden (Rückblick „So habe ich vor 3 Monaten geschrieben“, braucht Schema-Erweiterung) oder nur während der Sitzung existieren?
5. **Lokale Sprachaufnahme** für `respond` (bleibt nur auf dem Gerät, wird nicht gespeichert): in Ordnung?
6. **Veröffentlichen in Etappen:** A2 schon zeigen, wenn Phase 1 fertig ist (Kennzeichnung „in Aufbau“), oder erst alles zusammen?
7. **Prüfungstraining:** Soll es später einen eigenen Modus „wie in der Prüfung“ geben (Zeitlimit, Formate wie Goethe/telc/DTZ bzw. MEB-Test, ohne fremde Inhalte)? Das ist nicht Teil dieses Konzepts.
8. **A1-Nachrüstung Hören:** A1 hat 0 Diktate und nur 8 Höraufgaben. Sollen wir in Phase 2 nebenbei 2 `dictation` pro A1-Thema ergänzen (neue IDs, kein Fortschritt geht verloren)?

---

## 13. Quellen

**GER/CEFR**
- Europarat: CEFR Companion Volume – https://rm.coe.int/cefr-companion-volume-with-new-descriptors-2018/1680787989
- CEFR Self-assessment grid mit Online-Interaktion & Mediation (Kopie TU Dortmund) – https://wb.zhb.tu-dortmund.de/storages/wb-zhb/r/Formulare/CEFR-Table-2-Self-assessment-grid-with-online-interaction-and-mediation.pdf
- Europarat: CEFR descriptors search – https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors-search

**Deutsch – Prüfungen und Inventare**
- Goethe-Zertifikat A2, Weitere Informationen – https://www.goethe.de/ins/sg/de/kur/prf/gzsd2/inf.html
- Goethe: Tipps und Tricks zu den Prüfungsaufgaben A2 – https://www.goethe.de/resources/files/pdf136/tipps-und-tricks-fr-die-einzelnen-prfungsaufgaben_neu_4-seiten.pdf
- Goethe: Übungsmaterialien A2 – https://www.goethe.de/de/spr/prf/ueb/pa2.html
- Goethe-Zertifikat A2 Wortliste – https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf
- Goethe A1 Wortliste (ca. 650 Wörter) – https://www.goethe.de/pro/relaunch/prf/ca/A1_SD1_Wortliste_02.pdf
- Goethe: Prüfungsziele/Testbeschreibung Start Deutsch 1/2 (inkl. Grammatikinventar) – https://goethe.de/resources/files/pdf29/Pruefungsziele_Testbeschreibung_A2_SD2.pdf
- Goethe: Prüfungsziele/Testbeschreibung A2 Fit in Deutsch – https://goethe.de/pro/relaunch/prf/de/Pruefungsziele_Testbeschreibung_A2_Fit2.pdf
- telc Deutsch A2 Übungstest (2024) – https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a2_uebungstest_1-1_20241212_5090-b00-010107.pdf
- IntTestV § 3 (DTZ) – https://www.gesetze-im-internet.de/inttestv/__3.html
- DTZ-Überblick (Sekundärquelle) – https://deutsch-pruefung.de/dtz
- Goethe A2 Format mit Wortzahlen (Sekundärquelle) – https://zinglanguages.com/languagetest/goethe-a2-exam
- DVV Grammatiklisten A2 (vhs-Lernportal) – https://deutsch.vhs-lernportal.de/wws/bin/4007530-4015506-2-dvv_grammatiklisten_a2.pdf
- telc „Einfach gut“ A2 Grammatikübersicht – https://www.telc.net/ebook/demo/einfach-gut-digital/a2/documents/pdf/Grammatik_Grammatik_A2.pdf
- ÖSD: Profile deutsch – https://osd.at/en/objectives-and-components-of-profile-deutsch/

**Türkisch – Prüfungen und Lehrpläne**
- MEB: Türkçe Dil Yeterlikleri Sınavı, Kılavuz (2024) – https://turkcedil.meb.gov.tr/tr/index/qc/uploads/2024/10/12111400_index_kilavuz.pdf
- TYS (DPU-Ankündigung) – https://birimler.dpu.edu.tr/app/views/panel/ckfinder/userfiles/183/files/Bilimsel_Akademik_Duyurular/Tuerkce_Yeterlik_S_nav__(TYS)(1).pdf
- TYS (Türkiye Bursları) – https://arsiv.turkiyeburslari.gov.tr/en/announcement/yunus-emre-institute-turkish-proficiency-exam-tys
- Türkiye Maarif Vakfı: Türkçenin Yabancı Dil Olarak Öğretimi Programı (2020) – https://turkoloji.turkiyemaarif.org/uploads/2024/11/16436c12901a55.pdf
- Gazi TÖMER Programm 2025 – https://webupload.gazi.edu.tr/upload/116/2025/11/10/796c7e15-fe0f-4369-9a10-32f0abfe2810-2025-gazI-tomer-program-nIhaI.pdf
- Anadolu Üniversitesi: Öğrenme kazanımları – https://turkish.anadolu.edu.tr/pluginfile.php/464084/mod_page/content/16/o%CC%88grenme_kazanimlari.pdf
- DergiPark: Grammatikreihenfolge (TMV-Liste, Lehrwerke) – https://dergipark.org.tr/en/download/article-file/1932936
- DergiPark: Verbalnomen in A2-Lehrwerken (Yedi İklim, Türkçeye Yolculuk, Altın Köprü) – https://dergipark.org.tr/tr/download/article-file/3700013
- A1–A2-Grammatikbuch (Akademisyen) – https://books.akademisyen.net/index.php/akya/catalog/download/2491/2681/65402?inline=1
- Marmara: Ziel-Wortschatz A1–A2 Türkisch – https://openaccess.marmara.edu.tr/entities/publication/42e2fec8-b0b1-48b1-913e-696c0c4b45b0

**Wortschatz und Didaktik**
- Milton & Alexiou: Vocabulary size and the CEFR – https://www.enl.auth.gr/gala/14th/Papers/English%20papers/Milton&Alexiou.pdf
- Schmitt, Jiang & Grabe (2011): The Percentage of Words Known in a Text and Reading Comprehension – https://experts.nau.edu/en/publications/the-percentage-of-words-known-in-a-text-and-reading-comprehension/
- „How Chunky is Language?“ (Anteil formelhafter Sequenzen) – https://www.academia.edu/34357207/How_Chunky_is_Language_pdf
- Wu, Qie & Wang (2023): Model texts as written feedback (Frontiers in Psychology) – https://www.frontiersin.org/articles/10.3389/fpsyg.2023.1156553/pdf
- Lei & Reynolds (2022): Learning vocabulary from word cards – https://frontiersin.org/articles/10.3389/fpsyg.2022.984211/pdf
- Whitworth (2024): Shadowing for pronunciation – a systematic review – https://ora.ox.ac.uk/objects/uuid:3104cae1-3a6b-400a-b173-de44384238d2

**Apps (nur Ideen)**
- Jiang et al. (2021), Duolingo Research Report: Lese- und Hörergebnisse, Stories – https://duolingo-papers.s3.amazonaws.com/reports/Duolingo_whitepaper_language_read_listen_2021.pdf
- Smith, Jiang & Peters (2024): Effectiveness of Duolingo (receptive & productive) – https://rebrand.avantassessment.com/wp-content/uploads/The-effectiveness-of-Duolingo-in-developing-receptive-and-productive-language-knowledge-and-proficiency.pdf
- Tabssam et al. (2025): Sentiment analysis of Duolingo & Babbel reviews – https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1569058/pdf
- Busuu Methodology (Community-Korrekturen) – https://www.busuu.com/en/it-works/busuu-methodology
