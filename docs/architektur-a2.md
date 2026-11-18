# Architektur-Entscheidungen A2: ADR-11 bis ADR-14 (Entwurf)

**Status:** Vorgeschlagen (Architekt) · **Datum:** 2026-11-18 · **Freigabe:** Auftraggeber, Entwickler, Didaktik-Produkt, QA
**Grundlage:** `docs/a2-konzept.md` (Abschnitte 1, 4, 5, 7, 8, 9, 11), ADR-1…10, Code-Stand `fe0ed8a` (Arbeitsbaum sauber).
**Entscheidungen des Auftraggebers (gesetzt):** Szenarien breit · A2 geht Stück für Stück mit „im Aufbau“ online · A1-Nachrüstung (+~150 Wörter, 2 Diktate pro Thema, neue IDs) · eigene Schreibtexte nur lokal (Export ja, Upload nie) · `respond` ohne gespeicherte Aufnahme · Relativsätze/Passiv B1, TR -mIş-Grundlagen A2.

---

## 0. Ist-Zustand (mit grep geprüft)

**„A1“ fest im Code:**

| Stelle | Zweck | Wird zu |
|---|---|---|
| `js/app.js` 812 `newWords()` `lv = 'A1'` | neue Wörter für Tagesmix/Lernen | Fokus-Niveau (ADR-11.2) |
| 1442, 1454, 1464, 1483 `viewWords/viewField/viewWordSession` | Wortschatz nur A1, Überschrift „A1“ | Niveau aus Route (ADR-11.3) |
| 1640, 1645 `badgeCtx()` | Wörter-Zahlen und `cert.A1` | Werte je Niveau (ADR-11.6) |
| 1660–1664 `certBox()` | Zertifikat-Box nur A1 | Box je abgeschlossenem Niveau |
| 1714, 2082, 2151 | Rückfall auf `'A1'` bei Zertifikat-Route, Download, Namensfeld | geprüftes Niveau aus der Route |
| 1761 `placementTopics()` | Einstufung nur A1 | abgeschlossene Niveaus (ADR-11.7) |
| 2086 `place-apply` `level: 'A1'` | Einstufungs-Ergebnis | höchstes geprüftes Niveau |
| 169, 180 (`T.placeIntro`, `T.placeAllKnown`), 155 (`certCond` 80/70 fest) | Texte | Platzhalter `{lv}`, Bedingungen aus Regeln |
| `js/core/badges.js` 27, 36 (`words-a1`, `cert-A1`) | Abzeichen-Tests | lesen `c.words.A1`, `c.cert.A1` |

Schon niveau-unabhängig: `topicsOf()`, `nextTopic()`, `levelHas()/splitLevels()` (A2 wird „live“, sobald eine zählbare Aufgabe existiert), `dueItems()`, Tagesmix Teil 3, `DT.vocab.index/wordsOf` (Niveau aus Schlüssel `de-a2`).

**Gefundene Risiken (vor bzw. mit A2 beheben):**
1. **Mehr-Tab-Datenverlust beim Schema-Wechsel:** Der `storage`-Handler (app.js 377–380) **ignoriert** Daten mit `v > SCHEMA`. Ein alter Tab (Schema 3) behält dann seinen veralteten Stand im Speicher und überschreibt beim nächsten `save()` alles, was ein neuer Tab (Schema 4) gespeichert hat – inklusive eigener Texte. → Muss **mindestens ein Release vor Schema 4** behoben sein (Schritt 0).
2. **A2-Inhalt ohne ADR-11 = falscher Zustand:** Sobald die Lehrkräfte das erste A2-Thema liefern, wird A2 automatisch „live“, ohne „im Aufbau“. `#/certificate/A2` würde dann schon nach 3 Themen ein Zertifikat ausstellen (nur per URL erreichbar, aber falsch). → Schritt 1 muss **vor oder mit** dem ersten A2-Paket online gehen.
3. `topicsOf()` wird bei jedem `topicById()`/`exById()` neu gebaut (O(Themen) pro Aufruf, in Schleifen O(n²)). Mit A2 (~3× so viele Aufgaben) spürbar auf Handys. → einmal pro Kurs zwischenspeichern (Inhalte ändern sich zur Laufzeit nicht).
4. Der Stimmenplan aus ADR-5.4 (`only`) wurde nie umgesetzt: Jeder Text wird in jeder Stimme erzeugt. Für A2 bewusst so lassen (siehe ADR-14).
5. Kleinere Punkte: Die globale Tastenkürzel-Abfrage (app.js 2171) schließt `TEXTAREA` nicht aus. Die Aktion `char` schreibt fest in `#gap-input`. Der Test „Daten v:4 bleiben unverändert“ (test-core 325) muss mit Schema 4 auf `v:5` umgestellt werden.

---

## ADR-11: Niveaus ohne festes „A1“ und Status „im Aufbau“

### Kontext
A2 kommt in Paketen. Lernende sollen A2-Inhalte sofort nutzen können, ohne dass Prozente, Zertifikat oder Einstufung so tun, als wäre A2 fertig. Gleichzeitig wächst A1 (neue Diktate und Wörter), ohne dass Fortschritt verloren geht.

### Entscheidung

**11.1 Niveau-Status steht explizit im Lehrplan** (`js/curriculum.js`, pro Kurs):
```js
de: { id: 'de', …, complete: ['A1'], levels: { … } }
tr: { id: 'tr', …, complete: ['A1'], levels: { … } }
```
Der Status wird abgeleitet (rein, `DT.catalog.levelState(K, cid, lv)`):
- `complete`: Niveau steht in `complete`.
- `building`: Mindestens ein Thema, Dialog oder Text des Niveaus hat Aufgaben, **oder** es gibt Wortschatz `<kurs>-<niveau>`.
- `planned`: sonst.

Validator: Ein Niveau in `complete` muss für **jedes** Grammatikthema Inhalt haben (sonst Fehler). Unter 10 gewerteten Aufgaben gibt es einen Hinweis. Das Flag setzt Didaktik-Produkt bei der Abnahme (Konzept §10), als eine Zeile in einem eigenen Commit.

**11.2 Fokus-Niveau** (`focusLevel()` in app.js, Kernregel in `DT.catalog` testbar): Niveau des ersten verfügbaren, **nicht übersprungenen, nicht vollständig gelösten Grammatikthemas** (Dialoge und Texte zählen dafür nicht). Gibt es keins, gilt das höchste Niveau mit Status ≠ `planned`. Ohne jeden Fortschritt gilt A1. Das Fokus-Niveau wird **nie gespeichert**, sondern immer aus `prog`/`skip` berechnet. Damit braucht es kein neues Speicherfeld.

**11.3 Wortschatz mit mehreren Niveaus**
- Routen: `#/words` (Fokus-Niveau, bzw. das nächstniedrigere Niveau mit Wörtern) · `#/words/<LV>` · `#/words/<LV>/<feld>` · `#/words/<LV>/<feld>/learn|practice`. **Alte Links** `#/words/<feld>[/…]` werden als A1 gelesen (bisher gab es nur A1). `parseHash()` liefert dafür zusätzlich `c`.
- Oben in der Ansicht steht eine Niveau-Auswahl (nur Niveaus mit Wörtern). Ein Niveau im Aufbau trägt ein Badge „im Aufbau“. Der Balken „Wortschatz A2: x / y sicher“ zählt je Niveau.
- `#/review` (fällige Wiederholungen) bleibt **niveau-übergreifend**.
- Spieler-Schlüssel: `words:<LV>:<feld>:<art>`.

**11.4 Tagesmix / neue Wörter:** `newWords(field, n, lv?)` nimmt Kandidaten aus **allen Niveaus ≤ Fokus-Niveau, aufsteigend** (zuerst noch nicht eingeführte A1-Wörter, also auch die 150 nachgerüsteten, dann A2), in Lehrplan-Reihenfolge. A2-Wörter kommen erst, wenn der Lernende bei A2-Grammatik angekommen ist. Wer per Einstufung A1 übersprungen hat, bekommt zuerst A1-Wörter und kann sie mit „Kenne ich schon“ (Fach 3, Prüfung nach 7 Tagen) schnell abhaken. Fällige Wiederholungen und Teil 3 (offene Aufgaben aus begonnenen Themen) bleiben unverändert, siehe aber ADR-12.1 „leicht/schwer“.

**11.5 Anzeige und Prozente bei `building`**
- Niveau-Kopf und Dashboard-Zeile: Badge **„im Aufbau · 3 von 16 Themen“** (Grammatikthemen mit Inhalt / Grammatikthemen im Lehrplan).
- Themen ohne Inhalt bleiben als Karte „folgt“ sichtbar (die vorhandene `planned`-Karte, nur anderer Text).
- **Prozent = gelöste / verfügbare gewertete Aufgaben** (wie heute), darunter der Satz „bezogen auf die bisher verfügbaren Aufgaben“. **Keine Hochrechnung** auf geplante Aufgaben: Es gibt keine verlässlichen Sollzahlen, und eine geschätzte Zahl wäre Schein-Genauigkeit.
- Der Gesamtfortschritt enthält Niveaus im Aufbau (ehrlich: „es gibt mehr zu tun“). Sind alle verfügbaren Themen erledigt, aber ein Niveau ist im Aufbau, heißt es nicht mehr „alles erledigt“, sondern „Alles Verfügbare geschafft – A2 wächst: 3 von 16 Themen online“ (UX-Text, ohne Druck).

**11.6 Zertifikat und Abzeichen**
- Bedingungen als Daten (`DT.catalog.CERT_RULES`), geprüft von der reinen Funktion `certCheck(rule, zahlen)`:
  ```js
  A1: { ex: 0.8, words: 0.7 },
  A2: { ex: 0.8, words: 0.7, skill: { grammar: 0.6, read: 0.6, listen: 0.6, dialog: 0.6 }, writes: 6 }
  ```
  Ein Zertifikat gibt es nur, wenn das Niveau `complete` ist **und** eine Regel existiert. `#/certificate/<LV>` prüft beides. Bei `building` steht dort „Das A2-Zertifikat gibt es, sobald A2 vollständig ist.“
- `certBox(lv)` gibt es je `complete`-Niveau. Für ein `building`-Niveau zeigt das Dashboard nur eine graue Zeile ohne Balken.
- `badgeCtx()` liefert `words: { A1: {known, total}, A2: … }`, `wordsKnown` (Summe aller Niveaus, für `words-50/150`), `cert: { A1, A2 }`. `words-a1` testet `c.words.A1`. `dialogs-all` zählt **nur A1-Dialoge** (Hinweistext anpassen: „alle A1-Alltagsdialoge“), damit das Abzeichen nicht durch neue A2-Dialoge plötzlich schwerer wird. Neue A2-Abzeichen bekommen neue IDs (Phase 5). Abzeichen werden weiterhin nie entzogen (ADR-9).
- Folge der A1-Nachrüstung: Neue A1-Aufgaben senken die A1-Prozente (z. B. von 100 % auf ca. 84 %). Abzeichen bleiben, ein schon heruntergeladenes Zertifikat ebenso. Die Zertifikats-Seite rechnet aber neu. UX-Hinweis: „In A1 sind neue Aufgaben dazugekommen“.

**11.7 Einstufung:** Geprüft werden nur **`complete`-Niveaus** in Reihenfolge. Bis A2 fertig ist, verhält sich der Test also genau wie heute (nur A1). Stufe n+1 folgt nur, wenn ≥ 75 % der Themen von Stufe n beherrscht sind (Konzept §8). `place[cid].level` = höchstes geprüftes Niveau (gleiches Format, Text statt fest `'A1'`). Die Stufen-Logik wandert als reine Funktion nach `DT.catalog`, damit sie testbar ist. „Später fortsetzen“ siehe ADR-13 (`place[cid].resume`).

### Alternativen
| Option | Aufwand | Pro | Contra |
|---|---|---|---|
| **A: explizites `complete` + Status ableiten (gewählt)** | S | eindeutig, prüfbar, 1 Zeile pro Freigabe | Flag kann vergessen werden (Validator fängt nur das Gegenteil) |
| B: Sollzahlen je Thema im Lehrplan, Status/Prozente daraus | M | „echte“ Hochrechnung | Lehrkräfte müssen Zahlen pflegen; Abweichungen verfälschen Prozente |
| C: Nutzer wählt sein Niveau (gespeichert) | M | volle Kontrolle | neues Speicherfeld + Migration; doppelte Wahrheit neben `skip`/`place` |
| D: Wörter aller Niveaus sofort im Tagesmix | S | einfach | A1-Lernende bekommen A2-Wörter zu früh |

### Folgen
- Kein neues Speicherfeld. Alle Prozente bleiben aus `prog` berechenbar. Bestehender Fortschritt bleibt unberührt.
- **Reihenfolge:** Schritt 1 muss vor dem ersten A2-Paket ausgeliefert werden. Bis dahin A2-Inhalte nicht auf `main` mergen (oder gemeinsam mit Schritt 1).

---

## ADR-12: Neue Inhaltsarten und Übungstypen

### Kontext
A2 braucht Textarbeit (Lesen, Hören), Grammatik im Zusammenhang, Rollenspiel, Schreiben und freies Sprechen. Dabei muss alles weiter über **feste IDs** in `prog`/`srs` laufen (ADR-1). Lehrkräfte schreiben die Formate von Hand. Der Player liegt in einer 2 252-Zeilen-Datei.

### 12.1 Gemeinsame Regeln

**IDs (Validator erzwingt):**
| Art | ID-Muster | Beispiel |
|---|---|---|
| Lesetext / Hörtext | `<kurs>-<niv>-r<nn>` / `<kurs>-<niv>-h<nn>` | `de-a2-r01`, `tr-a2-h03` |
| Frage zu Text | `<textId>.q<n>` | `de-a2-r01.q4` |
| Wahlzeile im Rollenspiel | `<dialogId>.c<n>` | `de-a2-d03.c2` |
| Aufgabe im Thema (alle Typen, auch cloze/sort/write/respond) | `<themaId>.<n>` | `de-a2-03.14` |
Teilfragen und Wahlzeilen haben eigene, feste IDs. Nie neu nummerieren. Gelöschte Nummern nie wieder vergeben (wie bisher). Neue Dateien: `js/content/<kurs>-<niv>-texts.js` (Lesen + Hören). Szenarien kommen als Liste je Kurs in den Lehrplan, `scenes: [[id, 'Deutsch', 'Türkçe'], …]`. `scene` in Dialogen und Texten muss darin vorkommen (Validator).

**Typ-Tabelle (eine Quelle: `DT.check.TYPES`, genutzt von App **und** Validator):**

| Typ | gewertet (`isCountable`) | „Meine Lücken“ + SRS | Tagesmix | Einstufung | Audio-Felder (extract-texts) |
|---|---|---|---|---|---|
| mc, gap, order, match, listen, dictation | ja (wie bisher) | ja | ja | mc/gap/listen | wie bisher |
| speak | nein (geübt) | nein | nein | nein | `say` |
| **cloze** | ja | ja | ja | A2-Stufe nur, wenn alle Lücken `o` haben | **gelöster Text** |
| **sort** | ja | ja | ja | nein | `items[*][0]` |
| **Wahlzeile** (aus Rollenspiel abgeleitet, `t:'mc'`) | ja | ja (mit Kontext) | ja | nein | `o[a]` in der Stimme der eigenen Rolle |
| **write** | nein (geübt nach Checkliste) | nein | nein | nein | `model` |
| **respond** | nein (geübt) | nein | nein | nein | `say`, `models[*]` |
| Fragen zu **Lese-/Hörtext** | je nach Typ | ja, **mit Text-Panel** | **nein** („schwer“) | Phase 5: eigener Teil, nur Empfehlung | Text: `body[*]` bzw. `items[*].t`; Hören: `lines[*].t` |

- **Ungewertet = „geübt“:** wie `speak` heute. `record(id, true)` legt `prog[id] = {s:'c', …}` an. Das zählt nicht in Prozente, Lücken, SRS. Es gilt aber für das Tagesziel (`daily.tick`) und für die Zertifikatsbedingung „6 Schreibaufgaben“. **Kein neues Format.**
- **Keine Teilpunkte.** `prog` und Leitner sind binär, Teilpunkte bräuchten ein neues Format. Rückmeldung gibt es trotzdem pro Lücke/Element. Lehrkräfte-Regel: cloze ≤ 5 Lücken (empfohlen 3–4), sort 4–8 Elemente.
- **„Schwer“** = Frage zu einem Lese- oder Hörtext (Kontext > 1 Bildschirm). Der Tagesmix (5 Minuten) lässt sie weg, auch fällige SRS-Einträge. `#/review` und `#/practice` zeigen sie mit eingeklapptem Text-Panel.
- **Zusammenfassung für „Meine Lücken“:** `DT.check.summary(ex)` → `{ q, sol }` je Typ (cloze: Text mit `___` / gelöster Text · sort: „haben: … · sein: …“ · Wahlzeile: letzte Kontextzeile → `o[a]`). Das ersetzt die Typ-Kaskade in `viewGaps()` (app.js 1534–1536).

### 12.2 Lesetext (`K.addText`, kind `read`)
```js
K.addText('de-a2-r01', {
  level: 'A2', kind: 'read', scene: 'wohnung', genre: 'hinweis',  // genre: anzeige|email|nachricht|hinweis|artikel|programm|formular
  title: 'Hausordnung', sub: 'Apartman kuralları',               // wie Dialoge: title = Deutsch, sub = Türkisch (beide Kurse)
  body: ['Absatz 1 …', 'Absatz 2 …'],                             // ENTWEDER body …
  // items: [{ h: 'A', t: 'kurzer Anzeigentext' }, …],           // … ODER items (Anzeigen, Listen)
  gloss: { 'Kaution': 'depozito' },                               // optional
  questions: [ { id: 'de-a2-r01.q1', t: 'mc', … }, … ]            // ≥ 3 gewertete
});
```
- **Pflicht:** level (passt zur ID), kind (passt zum Buchstaben r/h), genre (aus Liste), title, sub, genau eins von body/items, questions. **Optional:** scene, gloss.
- **Validator:** Erlaubte Fragetypen sind mc, gap, match, cloze, sort, write. Hinweis, wenn die Länge außerhalb von 60–180 Wörtern liegt. Hinweis, wenn ein `gloss`-Wort nicht im Text vorkommt. `items[*].h` eindeutig. **Später (M):** Abdeckung ≥ 95 % bekannter Wörter, nur als Hinweis. Ehrlich: Im Türkischen geht das wegen der Suffixe nur näherungsweise (Präfix-Abgleich gegen Lemmata ≥ 4 Zeichen).
- **Player:** Pseudo-Thema wie Dialoge (`K.content[id] = { kind:'read', text, exercises: questions }`). Reiter „📄 Text“ mit 🔊 pro Absatz und der Glosse **als Liste unter dem Text**. Kein Inline-Abgleich: Im Türkischen trifft „depozitoyu“ den Schlüssel „depozito“ nicht. Während der Fragen steht der Text in einem **einklappbaren Panel** über der Frage (Desktop offen, Handy zu; Zustand nur im Speicher).

### 12.3 Hörtext (kind `listen`)
```js
K.addText('tr-a2-h01', {
  level: 'A2', kind: 'listen', scene: 'otogar', genre: 'durchsage',   // durchsage|anrufbeantworter|radio|gespraech|interview
  title: 'Durchsage am Busbahnhof', sub: 'Otogar anonsu', plays: 2,    // plays: nur Hinweis „zweimal hören“
  lines: [{ s: 'Anons', g: 'f', t: 'Sayın yolcularımız …', n: 'Liebe Fahrgäste …' }],
  questions: [ … ]                                                     // mc, listen, gap, cloze, match
});
```
- **Pflicht:** wie 12.2, dazu `lines` (je `s`, `g` ∈ f/m, `t`, `n`). **Optional:** scene, plays. Das Konzept-Feld `hide` **entfällt**: Ein Hörtext ist immer verborgen, bis man „Text zeigen“ antippt oder alle Fragen beantwortet hat.
- **Validator:** Hinweis, wenn die Länge außerhalb von 30–120 Wörtern liegt. In TR ein Hinweis ab 3 verschiedenen Sprechern (siehe ADR-14).
- **Player:** „▶ Abspielen“ spielt die Zeilen nacheinander in den Sprecherstimmen (ADR-14), dazu 🐢 und eine Zählung „1. / 2. Mal“ (nicht erzwungen). **Während des Abspielens wird der Sprechername angezeigt**, auch wenn der Text verborgen ist. Liefert `canPlay()` für eine Zeile `false`: Hinweis und „ohne Wertung überspringen“ für alle Fragen dieses Textes (ADR-5). Es wird nichts gespeichert.

### 12.4 `cloze`
```js
{ id: 'de-a2-03.14', t: 'cloze', q: 'Ergänze die Nachricht.',
  text: 'Gestern {1} ich mit Ayla im Kino {2}. Der Film {3} toll!',
  gaps: {
    1: { a: ['bin'], o: ['bin', 'habe', 'war'], wrong: { habe: '…', war: '…' } },
    2: { a: ['gewesen'], wrong: { gegangen: '…' } },
    3: { a: ['war'], o: ['war', 'hatte', 'ist'], wrong: { hatte: '…', ist: '…' } } },
  cs: false, e: 'Erklärung zum ganzen Text' }
```
- **Validator (Fehler):** Platzhalter `{1}…{n}` mit n ≤ 5, fortlaufend, jeder genau einmal, Schlüssel in `gaps` passend. `a` nicht leer. Mit `o`: 2–4 Optionen, alle `a` stehen in `o`, **jede falsche Option hat `wrong`** (Grundsatz 3; im Konzeptbeispiel fehlt das noch für „war“). Kein `wrong`-Schlüssel darf gleich einer Antwort sein. **Hinweis:** Freie Lücke ohne `wrong`.
- **Player:** Lücke mit `o` → natives `<select>` (Handy, Screenreader). Ohne `o` → Eingabefeld im Text (Klasse `gap-input`, IDs `cloze-1…`). Enter springt zur nächsten Lücke und prüft bei der letzten. Die Sonderzeichen-Leiste schreibt ins zuletzt fokussierte Feld. Prüfen geht, wenn alle Lücken gefüllt sind. **Jede Lücke wird genau wie `gap` geprüft** (gemeinsame Funktion `checkGap`: `norm`, `cs`, `wrong`, Groß/klein-Hinweis, Sonderzeichen-Hinweis). Richtig = alle Lücken richtig. Rückmeldung: Text mit ✓/✗ an jeder Lücke, dazu für falsche Lücken „deine Antwort / richtig / warum“, dann `e`. `given` (für `prog.a`) = „{1} habe · {2} gegangen“, gekürzt auf 120 Zeichen.

### 12.5 `sort`
```js
{ id: 'de-a2-03.6', t: 'sort', q: 'Perfekt mit haben oder sein?', cats: ['haben', 'sein'],
  items: [['fahren', 1], ['kaufen', 0], ['aufstehen', 1], ['schlafen', 0]],
  why: { fahren: 'Ortswechsel → sein', kaufen: '…', aufstehen: '…', schlafen: '…' }, e: '…' }
```
- **Validator (Fehler):** cats 2–3 und eindeutig. items 4–8 mit eindeutigem Text und gültigem Index. Jede Kategorie hat mindestens ein Element. **`why` für jedes Element**, denn jedes kann falsch einsortiert werden.
- **Player:** Elemente gemischt, je Element eine Zeile mit 2–3 Kategorie-Knöpfen (Radiogruppe, kein Drag & Drop). Prüfen geht, wenn alles zugeordnet ist. Richtig = alle richtig. Falsche Elemente zeigen „fahren → **sein** (nicht haben): why“, dann `e`.

### 12.6 Rollenspiel (Erweiterung von `K.addDialog`)
```js
K.addDialog('de-a2-d03', { level: 'A2', scene: 'arzt', title: 'Termin verschieben', sub: 'Randevuyu ertelemek',
  role: 'Hasta', roleG: 'f',                    // role in der Erklärsprache; roleG optional (Stimme der eigenen Zeilen)
  lines: [
    { s: 'Praxis', g: 'f', t: '…', n: '…' },
    { me: true, id: 'de-a2-d03.c1', o: ['…', '…', '…'], a: 0,
      why: { 1: 'zu knapp und unhöflich am Telefon', 2: '„Sie verschieben“ = die Person verschieben' },
      e: '…', n: 'Übersetzung der richtigen Zeile' },
    … ],
  questions: [ … ] });
```
- **Validator:** Wahlzeile mit ID-Präfix `<dialogId>.c`, 2–4 Optionen, `a` gültig, `why` je falscher Option, `e` und `n` Pflicht, **kein `t`** (gesprochen wird `o[a]`). 1–4 Wahlzeilen pro Dialog. Hinweis, wenn vor einer Wahlzeile keine normale Zeile steht.
- **Abgeleitete Aufgabe** (reine Funktion `DT.catalog.roleExercises(dialog)`): `{ id, t:'mc', role:true, ctx:[bis zu 3 vorherige Zeilen], o, a, why, e, ans:o[a], ansN:n }`. Die Übungen des Pseudo-Themas sind zuerst die Wahlzeilen in Dialogreihenfolge, dann die Verständnisfragen. So läuft **das Rollenspiel im vorhandenen Player** (keine zweite Dialog-Engine), und Wiederholung, Lücken und SRS funktionieren mit Kontext.
- **Player:** Kontextzeilen (Sprecher, Text, 🔊; letzte Zeile spielt automatisch einmal) → Optionen → nach dem Prüfen spricht die Stimme der eigenen Rolle die richtige Zeile, dazu `why`/`e`/`ansN`. In der Dialogansicht erscheinen Wahlzeilen als „Du: o[a]“. Ob das Rollenspiel vor dem Lesen des ganzen Dialogs kommt, entscheidet UX.

### 12.7 `write` (ungewertet)
```js
{ id: 'de-a2-r04.q5', t: 'write', task: 'Erklärsprache: …', points: ['…', '…', '…'], reg: 'du',   // du|Sie|sen|siz
  words: [20, 40], chunks: ['Vielen Dank für …'], model: '…', modeln: '…',
  check: ['Alle 3 Punkte drin?', '…'], hint: [['danke', 'dank'], ['weil', 'leider'], ['lust', 'treffen']], e: '…' }
```
- **Pflicht:** task, points (2–4), reg, words `[min, max]` mit min < max, model, modeln, check (≥ 2), e. **Optional:** chunks, hint (Länge = `points`).
- **Validator:** Hinweis, wenn die Wortzahl von `model` außerhalb von `words` liegt. Fehler, wenn `hint.length ≠ points.length`.
- **Player:** Aufgabe + Punkte + Redemittel → Textfeld (max. 1 500 Zeichen, Wortzähler wird direkt im DOM aktualisiert, **kein** Neu-Rendern beim Tippen), Sonderzeichen-Leiste → **„Fertig“** (speichert den Text, ADR-13) → eigener Text neben Mustertext (🔊, Übersetzung umschaltbar). Automatische **Hinweise ohne Note**: Wortzahl im Vergleich zu `words`, sowie „Punkt 2 vielleicht vergessen?“, wenn kein `hint`-Stichwort im Text vorkommt (gefaltet, kleingeschrieben mit Locale der Zielsprache, Teilstring). Darunter die Checkliste. **„Geübt ✓“** geht erst, wenn alles abgehakt ist → `record(id, true)`. „Überarbeiten“ führt zurück ins Textfeld. „📋 Text kopieren“ (Clipboard, sonst markieren). Haken werden nicht gespeichert.

### 12.8 `respond` (ungewertet, ohne Aufnahme)
```js
{ id: 'de-a2-03.15', t: 'respond', say: 'Was hast du am Wochenende gemacht?', q: 'Antworte in 2–3 Sätzen.',
  models: ['…'], modelsN: ['…'], chunks: ['Am Samstag …'], e: '…' }
```
- **Pflicht:** q, models (≥ 1), e. **Optional:** say (empfohlen, wird vorgelesen), modelsN, chunks.
- **Player:** Frage hören → laut antworten. Optional 🎤 mit der vorhandenen Spracherkennung (gleiche Einwilligung wie `speak`, ADR-6): Der erkannte Text wird **nur angezeigt**, nicht bewertet. Danach „Musterantwort“ (🔊) und „Ich habe geantwortet ✓“ → `record(id, true)`. **Kein MediaRecorder, nichts wird aufgenommen oder gespeichert** (Entscheidung des Auftraggebers; nebenbei entfällt das iOS-Risiko).

### 12.9 Code-Struktur: neue Typen in eigene Dateien, Bestand bleibt
```
js/core/check.js      NEU rein: TYPES, isCountable, norm, fold, levRatio (aus app.js verschoben),
                      checkGap, evaluate(ex, state, lang) für ALLE Typen, summary(ex)
js/core/catalog.js    NEU rein: register(K) (Dialoge/Texte → Pseudo-Themen, idempotent, später nach
                      Nachladen erneut aufrufbar), roleExercises, exerciseIndex (EXI), levelState,
                      focusLevel-Regel, skillOf, CERT_RULES/certCheck, Einstufungs-Stufenlogik
js/core/voices.js     NEU rein: assign(lines, slots, fallback) – auch von tools/extract-texts.js geladen
js/core/writes.js     NEU rein: put/remove/size für Profil.writes (Format + Migration bleiben in storage.js)
js/views/exercises.js NEU: Renderer für cloze, sort, write, respond + Kontext-Panels (Text, Hörtext, Rollen-Kontext)
                      DT.views.ex[typ] = { init(ex), render(ex, cur, state, U), canCheck(ex, cur) }
                      DT.actions['cloze-sel'] = function (el, ev, U) {…}
js/app.js             nur Haken: renderPlayer/canCheck → DT.views.ex[typ], evaluate → DT.check,
                      click-switch default → DT.actions[act], input-Handler für [data-in]
```
- `U` = Hilfsobjekt, das app.js beim Aufruf übergibt (`esc, md, t, speakBtn, charBar, audioBar, course, player`). Dadurch gibt es keine Globals aus app.js und keine Ladereihenfolge-Abhängigkeit.
- Name `catalog.js` statt `content.js`, damit es nicht mit `js/content/` verwechselt wird. Der Validator-Regex ist davon nicht betroffen.
- **Vorhandene Typen werden nicht umgebaut** (ADR-10 Schritt 9). Nur ihre Bewertung zieht als **reine Verschiebung** nach `check.js`, mit Tabellentests vorher/nachher. So gibt es `norm`/`fold` nur einmal für gap **und** cloze.
- `tools/test-core.js` lädt `js/core/*.js` schon automatisch. Neue Kern-Dateien dürfen beim Laden kein DOM und keinen Speicher anfassen. `tools/validate.js` lädt zusätzlich `js/core/check.js` (TYPES) und `catalog.js` (roleExercises, ID-Regeln). `extract-texts.js` lädt zusätzlich `voices.js`.

### Alternativen
| Option | Aufwand | Pro | Contra |
|---|---|---|---|
| **A: neue Typen in `js/views/exercises.js` + reine Bewertung in `js/core/check.js` (gewählt)** | M | Bewertung testbar, app.js wächst kaum, kein Umbau des Bestands | Hilfsobjekt `U` als Schnittstelle pflegen |
| B: alles in app.js | S | kein Strukturrisiko | app.js → ~3 000 Zeilen, Bewertung nicht testbar, Merge-Konflikte |
| C: ganzen Player jetzt auslagern | L | sauberste Struktur | großer Umbau ohne Nutzen für Lernende, hohes Regressionsrisiko |
| Rollenspiel als eigene interaktive Dialog-Engine | M–L | „echteres“ Gefühl | zweite Bewertungs-/Speicherlogik; Lücken/SRS bräuchten Sonderfälle |
| `cloze` mit Teilpunkten | M | fairer bei 5 Lücken | neues `prog`-Format → Migration; Leitner binär |

### Folgen
- Kein neues Speicherformat für Aufgaben. Alle neuen gewerteten Typen laufen über `prog`/`srs` wie bisher.
- `index.html` bekommt 5 Skript-Tags mehr (`bump-version.py` pflegt sie mit).
- Die Typ-Tabelle ist die einzige Quelle für „was zählt“. App, Validator und Statistik können nicht mehr auseinanderlaufen.

---

## ADR-13: Schema 4 – eigene Schreibtexte (nur lokal)

### Kontext
Der Auftraggeber will eigene Texte **lokal** speichern (Rückblick, Export, nie Upload). localStorage hat 5 MiB pro Origin (MDN) und wird mit allen Seiten unter `sinandmrr.github.io` geteilt (ADR-1, Nr. 7). Texte dürfen **nie** dazu führen, dass Lernfortschritt nicht gespeichert wird.

### Entscheidung
**Neues Profilfeld, SCHEMA = 4, rein additiv:**
```js
Profil.writes = { de: { [writeAufgabenId]: { x: 'letzte Fassung', t: ts, x0: 'erste Fassung', t0: ts0 } }, tr: {} }
// x0/t0 werden genau einmal gesetzt (bei der ersten Speicherung mit anderem Text) und nie überschrieben.
Profil.place[cid].resume = { lv, ti, step, mastered: [], failed: [], asked, t }   // optional, für „Einstufung später fortsetzen“ (Phase 5)
```
Der „Geübt“-Status bleibt in `prog` (kein Duplikat). Checklisten-Haken und `respond` speichern nichts.

**Migration** (`migrateProfile`, idempotent):
```js
if (fromV < 4) {
  p.writes = obj(p.writes) ? p.writes : {};
  COURSES.forEach(function (c) { if (!obj(p.writes[c])) p.writes[c] = {}; });
}
```
Kein dauerhafter Schnappschuss `dt-backup-s3`: Die Änderung legt nur ein leeres Objekt an. Das normale `dt-backup` beim Versionswechsel reicht. Ein zweiter Dauerschnappschuss würde den geteilten Speicher unnötig verdoppeln.

**Zusammenführen** (`mergeProfile`): `writes` je Kurs und ID mit `pickWrite`: Der neuere `t` liefert `x/t`. Als `x0/t0` gilt die **früheste** vorhandene Fassung, die sich von `x` unterscheidet (aus `a.x0`, `b.x0` oder dem älteren `x`). So geht beim Import keine der beiden Fassungen verloren. **Export:** ganzes Profil (wie heute), `schema: 4`. **Import:** Eine Schema-3-Datei wird migriert (bekommt `writes`). Eine alte App lehnt Schema-4-Dateien mit „neuer“ ab (schon vorhanden).

**Größe und volle Quota:**
- Pro Fassung höchstens **1 500 Zeichen** (`maxlength` + Kürzung in `writes.put`). Pro Profil ein Budget von **60 000 Zeichen** über alle Texte. Hochrechnung: A2 = 10–12 Aufgaben × 2 Fassungen × ~300 Zeichen ≈ 7 KB pro Kurs, A1–C2 bleibt unter dem Budget.
- `writes.put()` prüft das Budget **vorher**. Bei Überschreitung wird nicht gespeichert. Dann kommt der Hinweis „Speicher für eigene Texte voll – kopieren/herunterladen oder alte Texte löschen“. „Geübt“ wird trotzdem gespeichert.
- Scheitert `save()` nach einem neuen Text (`QuotaExceededError`): **Textänderung im Speicherobjekt zurücknehmen, erneut speichern**, Hinweis „Text nicht gespeichert – bitte kopieren“. Fortschritt hat Vorrang. Erst wenn auch das scheitert, greift das vorhandene rote Banner (ADR-1).
- Einstellungen: „Speicher: 312 KB von ca. 5 MB, davon eigene Texte 8 KB“ (Summe aller `dt-*`-Schlüssel; war in ADR-1 schon vorgesehen, ist aber noch nicht gebaut). Dazu „Meine Texte herunterladen (.txt)“ und „Meine Texte löschen“ (zweistufig bestätigen, vorher `dt-backup`).
- Speichern bei „Fertig“ und beim Verlassen der Aufgabe mit ungespeicherter Änderung, **nicht** bei jedem Tastendruck.

**Lebenszyklus:** „Kurs zurücksetzen“ **behält** Texte, weil sie kein Fortschritt, sondern eigene Arbeit sind. Löschen geht separat. „Profil löschen“ entfernt alles (Backup vorher, wie heute).

**Pflicht-Vorarbeit (Schritt 0):** Im `storage`-Handler setzen Daten mit `v > SCHEMA` künftig `newerData = true` (nur lesen + Banner „Bitte neu laden“), statt sie zu ignorieren. Das muss **≥ 1 Release vor Schema 4** online sein. Restrisiko: Tabs, die seit vor diesem Release offen sind (akzeptiert; selten, und der Service Worker liefert online immer das neue HTML).

**Datenschutz-Text** (Seite Rechtliches, beide Sprachen): Texte liegen unverschlüsselt im Browser. Technisch können andere Seiten unter `sinandmrr.github.io` (desselben Betreibers) und andere Nutzer desselben Browserprofils sie lesen. Nichts wird übertragen. Löschen ist jederzeit möglich.

### Alternativen
| Option | Aufwand | Pro | Contra |
|---|---|---|---|
| **A: Feld im Profil, Schema 4, Budget (gewählt)** | M | Export/Merge/Backup automatisch mit, ein Schlüssel | `dt-data` wächst (begrenzt) |
| B: eigener Schlüssel `dt-writes-<pid>` | M | `dt-data` bleibt klein | zwei Schlüssel konsistent halten, Export/Backup/Löschen doppelt (wie ADR-1 C) |
| C: nur in der Sitzung, nichts speichern | S | kein Schema-Wechsel | widerspricht der Entscheidung des Auftraggebers |
| D: IndexedDB | L | großes Kontingent | asynchron, neuer Speicherpfad nur für Texte |
| alle Fassungen speichern | S | voller Verlauf | wächst unbegrenzt; 2 Fassungen decken „vorher/nachher“ ab |

### Folgen
- Tests: Fixture `tools/fixtures/v3.json` (echtes Schema-3-Profil mit srs/daily/skip/place/badges). Prüfen: v3→v4 lässt alle Felder unverändert, Migration zweimal = gleich, `v` auf 3 gesenkt → erneute Migration erhält `writes`, `v:5` bleibt unangetastet (alten v:4-Test umstellen), `mergeProfile` mit Fassungs-Konflikten, Export→Import mit Texten, Budget, Quota-Rücknahme (Fake-Storage mit Grenze).

---

## ADR-14: Stimmen pro Sprecher

### Kontext
Pro Sprache und Geschlecht wird heute die erste lizenzierte Piper-Stimme genommen. Vorhanden sind DE ♀ kerstin, DE ♂ thorsten, TR ♂ fahrettin. **TR ♂ fettah** ist lizenziert (CC0 laut `audio/manifest.json`), wird aber nur als Hörprobe genutzt. Eine freie türkische Frauenstimme für Piper gibt es weiterhin nicht. Schon die A1-TR-Dialoge haben 38 Frauenzeilen. Sie kommen aus fahrettin oder, falls das Gerät eine türkische Frauenstimme hat, aus der Gerätestimme (app.js 524–526). A2-Hörtexte mit 2–3 Personen werden damit schwer unterscheidbar.

### Entscheidung
1. **Inhaltsformat unverändert:** Jede Zeile hat `s` und `g` (für Dialoge und Hörtexte ab A2 Pflicht, Validator). **Kein** Stimmen-Index im Inhalt: Lehrkräfte sollen keine Stimmnamen kennen müssen. Wahlzeilen nehmen `roleG` des Dialogs, sonst „neutral“.
2. **Stimm-Plätze:** `tools/tts-voices.json` bekommt einen zusätzlichen Abschnitt, der vorhandene bleibt unverändert:
   ```json
   "extra":    { "tr": { "male2": ["tr_TR-fettah-medium"] } },
   "fallback": { "tr": ["male2", "male"], "de": ["female", "male"] }
   ```
   Plätze eines Geschlechts = Schlüssel, die mit `female`/`male` beginnen. `fallback` = Reihenfolge für Sprecher, deren Geschlecht keine Stimme hat. fettah ist laut Team-Messung (~195 Hz) die höhere Stimme und kommt deshalb zuerst.
3. **Zuordnung** `DT.voices.assign(lines, slots, fallback, roleG)`, rein und deterministisch, **identisch in Werkzeug und App**, pro Dialog/Text:
   - Durchgang 1: Sprecher in Reihenfolge des ersten Auftretens, deren Geschlecht Plätze hat → erster unbenutzter Platz des eigenen Geschlechts, sonst reihum im eigenen Geschlecht (DE: zwei Frauen = beide kerstin).
   - Durchgang 2: Sprecher ohne eigene Stimme (TR ♀) → erster unbenutzter Platz aus `fallback`, sonst `fallback[0]`. Markierung `fb: true`.
   - Neutral (eigene Rolle ohne `roleG`) → erster unbenutzter Platz, sonst `fallback[0]`.
   - Beispiel TR: Elif ♀ + Jonas ♂ → Jonas = fahrettin, Elif = fettah.
4. **Werkzeug:** `extract-texts.js` gibt zusätzlich `extra: { tr: { male2: [Texte] } }` aus. `gen_audio.py` erzeugt diese Texte zusätzlich in der Extra-Stimme und schreibt `manifest.voices.tr.male2` (ein String; alte Clients lesen nur `female`/`male`, die Seite Rechtliches zählt fettah dann korrekt als genutzte Stimme) sowie `manifest.fallback`. **Primärstimmen behalten alle Texte**, es wird nichts gelöscht (rein additiv). Fehlt die Extra-Stimme (Lizenz/Download), fällt die App automatisch auf die Geschlechter-Logik zurück.
5. **App:** Eine Dialog- oder Hörtextzeile spielt `files[voices[lang][platz]][text]`. Fehlt sie → bisheriges `piperUrl(text, lang, g)` → Gerätestimme. Bei `fb: true` **und** vorhandener Gerätestimme des richtigen Geschlechts nimmt die App die Gerätestimme (heutiges Verhalten bleibt). Sprechernamen sind immer sichtbar, auch beim verborgenen Hörtext.
6. **Audio-Volumen:** TR wächst nur um die `male2`-Zeilen (geschätzt ~400 Texte, ~5 MB). Gesamt mit A2 ≈ 90 MB, deutlich unter der Schwelle von 300 MB (ADR-5). Das Manifest wächst von 120 KB auf ca. 350–400 KB, unter der Schwelle von 500 KB. **Spätestens mit B1** wird es pro Kurs aufgeteilt (`manifest-de.json`/`-tr.json`).

**Ehrlich, was mit 2 Männerstimmen in TR geht:** Zwei Personen sind unterscheidbar, aber eine Frau klingt wie ein (höherer) Mann. Ab 3 Personen wiederholen sich Stimmen. **Regel für die Lehrkräfte:** TR-Hörtexte mit höchstens 2 Sprechern, Durchsagen mit 1 Sprecher. Wenn 3 Personen nötig sind, die Namen im Text nennen („Ayşe Hanım, …“). Der Validator gibt dazu einen Hinweis.

### Alternativen
| Option | Aufwand | Pro | Contra |
|---|---|---|---|
| **A: Plätze + deterministische Zuordnung, additiv (gewählt)** | M | sofort 2 unterscheidbare TR-Stimmen, nichts wird gelöscht | Frauenrollen bleiben Männerstimmen |
| B: Stimmen-Index `v` im Inhalt | S | volle Kontrolle | Lehrkräfte müssen Technik kennen; Fehlerquelle |
| C: Tonhöhe von fahrettin/fettah per ffmpeg verschieben („Frauenstimme“) | S | klingt anders | unnatürlich (Micky-Maus-Effekt), kann als Karikatur wirken – verworfen |
| D: neuere türkische Modelle (F5-TTS, Orpheus; MIT/Apache-Code) | L | evtl. Frauenstimmen | Lizenz der Trainings-/Referenzstimmen unklar, schwere Erzeugung im CI – **beobachten** |
| E: nur Dialogzeilen nur in der eigenen Stimme erzeugen (ADR-5 `only`) | S | spart ~10–15 % Audio | löscht Dateien, Risiko für ältere Clients; erst bei > 300 MB |

### Folgen
- Tests (`test-core`): `assign` für DE 1♀/1♂, TR 0♀/2♂, 3 Sprecher, Rolle neutral/mit `roleG`, Reihenfolge-Stabilität.
- `extract-texts.js` lädt zusätzlich `js/core/voices.js` (rein). ADR-10 erlaubt das: keine DOM-Zugriffe.
- Langfristig weiter nach einer frei lizenzierten türkischen Frauenstimme suchen (die Lizenzprüfung in `gen_audio.py` greift automatisch). DE hat ebenfalls nur je eine Stimme pro Geschlecht.

---

## Umsetzungsreihenfolge (jeder Schritt einzeln auslieferbar)

Aufwand: **S** ≤ ½ Tag · **M** 1–2 Tage · **L** ≥ 3 Tage (Entwickler, inkl. Tests).

| # | Schritt | Aufwand | Muss fertig sein vor | test-core | Browser (Playwright, hell/dunkel, 390 px + Desktop) |
|---|---|---|---|---|---|
| **0** | Vorab-Fixes: storage-Handler „neuere Daten → nur lesen“, `topicsOf`-Cache je Kurs, Tastatur-Guard `TEXTAREA` | S | Schema 4 (≥ 1 Release Abstand) | – (DOM) | Zwei Tabs: Tab B schreibt `v:4` in `dt-data` → Tab A zeigt Banner und speichert nicht mehr |
| **1** | ADR-11: `complete`, `levelState`, Fokus-Niveau, Wortschatz-Routen je Niveau (alte Links → A1), `newWords` ≤ Fokus, „im Aufbau“-Anzeige, `CERT_RULES` (A1-Regel = bisheriges Ergebnis), `badgeCtx` je Niveau, Einstufung nur `complete`, Texte mit `{lv}`, Validator-Regel für `complete` | M | **erstes A2-Paket** (Lehrkräfte arbeiten gerade daran) | levelState, Fokus-Regel, certCheck-Regression A1, `words-a1` nur A1, Einstufungs-Stufenlogik | Lokal Test-Inhalt (1 A2-Thema + 10 A2-Wörter): Badge „im Aufbau 1 von 16“, `#/certificate/A2` gesperrt, Einstufung nur A1, `#/words/food` geht weiter, Tagesmix ohne A2-Wörter bis A2 begonnen |
| **2** | `js/core/check.js` + `js/core/catalog.js` herauslösen (reine Verschiebung von norm/fold/levRatio/evaluate, Pseudo-Themen, EXI) | M | 3–8 | Tabellentests je vorhandenem Typ (gap: cs, wrong, Sonderzeichen; order; match; speak-levRatio), Ergebnis identisch | Smoke-Test je Typ + Dialog |
| **3** | Lesetext (`K.addText` read): Registrierung, Validator, Text-Panel, Glosse, „schwer“ im Tagesmix, Audio-Felder | S–M | Lesetexte Phase 1 | Pseudo-Themen/EXI/Präfixe, `isHeavy`, `summary` | Text + Fragen, Panel am Handy, Lücken/Review mit Text |
| **4** | Hörtext + Stimmen pro Sprecher (`voices.js`, `tts-voices.json` extra/fallback, extract/gen_audio, Wiedergabe mit Sprechernamen) | M | Hörtexte Phase 1 | `assign`-Fälle; Validator-Lauf prüft `extra`-Ausgabe | Kette auf iPhone (Safari + Home-Bildschirm) und Android; Audio fehlt → ohne Wertung |
| **5** | `cloze` + `sort` (Bewertung in `check.js`, Renderer in `js/views/exercises.js`) | M | Phase 2 | cloze: alle richtig / eine falsch / Groß-klein / Sonderzeichen / `wrong`-Treffer; sort mit `why`; Validator-Negativfälle | Handy-Tastatur, Select, Tab-Reihenfolge, Screenreader-Labels |
| **6** | Rollenspiel-Wahlzeilen (`roleExercises`, Kontext, Stimme der Rolle) | M | Phase 3 | IDs, Reihenfolge, Kontext ≤ 3, Validator | Rollenspiel, Wiederholung/Lücken mit Kontext |
| **7** | **Schema 4** + `write` (Migration, Merge, Budget, Quota-Rücknahme, Speicheranzeige, Texte herunterladen/löschen, Datenschutz-Text) | L | Phase 3 | Fixture v3, idempotent, Downgrade, `v:5`, Merge-Fassungen, Export/Import, Budget, Quota | Schreiben → Fertig → Checkliste → Geübt; Kopieren; Speicher voll (localStorage künstlich füllen); Export → Import in anderem Browser |
| **8** | `respond` | S–M | Phase 4 | ungewertet, nichts in `prog` bei Abbruch | Mikro erlaubt/verweigert/ohne Spracherkennung (Firefox, Safari) |
| **9** | Phase 5: A2-Zertifikat (Regel aus 11.6), Fertigkeitsbalken (`skillOf` = Art des Containers), Einstufung Stufe 2 + `resume`, A2-Abzeichen (neue IDs), dann `complete: ['A1','A2']` | M–L | Abnahme A2 | certCheck A2, skillOf, Stufen-/Fortsetzen-Logik | kompletter A2-Durchlauf beider Kurse |
| parallel | Validator: Textabdeckung 95 %, „Wort ohne Zusammenhang“ (nur Hinweise) | M | Phase 2–3 | – | – |
| parallel | A1-Nachrüstung (reiner Inhalt: neue IDs w351…, `dictation` vorhanden) | – | – | Validator | Hinweis „neue Aufgaben in A1“ |

**Releases:** R1 = 0 + 1 (sofort, vor A2-Paket 1) · R2 = 2 + 3 + 4 · R3 = 5 · R4 = 6 · R5 = 7 (Schema 4, frühestens ein Release nach R1) · R6 = 8 · R7 = 9. Pro Release gilt: `node --check`, `validate.js`, `test-core.js`, Browser-Test, `bump-version.py`, `git pull --rebase origin main` vor dem Push.

## Offene Punkte (Entscheidung durch andere Rollen bzw. den Auftraggeber)
1. „Kurs zurücksetzen“ behält eigene Texte (mein Vorschlag). Einverstanden?
2. UX: Reiter-Reihenfolge bei Rollenspiel-Dialogen (Rollenspiel vor Transkript?) und Gruppierung der Lektionen nach `scene`.
3. Didaktik: Zertifikats-Hinweis im TR-Kurs „TYS/MEB“ statt „Yunus Emre“ (nur Text in `renderCertCanvas`).
4. Lehrkräfte: Wahlzeilen und cloze-Optionen brauchen `wrong`/`why` für **jede** falsche Option. Das Konzeptbeispiel muss ergänzt werden.

## Quellen
- MDN, Storage quotas and eviction criteria (localStorage 5 MiB pro Origin, `QuotaExceededError`): https://developer.mozilla.org/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
- Piper-Stimme fettah, MODEL_CARD: https://huggingface.co/rhasspy/piper-voices/blob/v1.0.0/tr/tr_TR/fettah/medium/MODEL_CARD (Lizenz CC0 laut automatischer Prüfung in `audio/manifest.json`)
- Übersicht offener türkischer TTS-Modelle (2026, ohne Angabe des Sprechergeschlechts; mehrere Lizenzangaben widersprüchlich): https://danielquillanroxas.github.io/turkish-tts-survey
