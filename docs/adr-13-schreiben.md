# ADR-13 (Fassung 2): Schreibaufgaben `write` und Schema 4

**Stand:** 19.11.2026 · **Status:** Vorschlag (ersetzt Abschnitt ADR-13 und präzisiert ADR-12.7 in `docs/architektur-a2.md`; dort nur Verweis hierher eintragen)
**Ist-Zustand (geprüft):** `SCHEMA = 3` (`js/core/storage.js:12`). `write` ist **nirgends umgesetzt** (nur `texts.js:73` überspringt den Typ). Schritt 0 aus ADR-13 ist erledigt: `load()` und der `storage`-Handler setzen bei `v > SCHEMA` `newerData` (`js/app.js:404, 434`). `reset-course` (`app.js:2392`) leert `prog/srs/skip/place` des Kurses. `mergeProfile` übernimmt unbekannte Felder nur, wenn `cur` sie **nicht** hat (`storage.js:148`). Ohne eigene Regel würden Texte beim Import also verworfen, sobald beide Seiten `writes` haben.

---

## 1. Aufgabenformat `write`

**Ablage:** eigene Datei je Kurs und Niveau `js/content/<kurs>-<niv>-write.js`, Aufbau wie Wortschatz (Lehrkräfte kennen ihn schon):
```js
K.addWrites('de-a2', [
{ id: 'de-a2-s01', scene: 'feier',                        // ID-Muster <kurs>-<niv>-s<nn>, nie neu vergeben
  title: 'Absage an eine Kollegin', sub: 'İş arkadaşına davete hayır demek',
  task: 'Erklärsprache: Du kannst am Samstag nicht zur Feier … Schreib ihr eine Nachricht.',
  points: ['Dank für die Einladung', 'Grund', 'Vorschlag für ein anderes Treffen'],   // 2–4 Inhaltspunkte
  reg: 'du',                                              // du | Sie | sen | siz
  words: { min: 20, ziel: 35 },                           // Mindest- und Zielwortzahl (Zielsprache)
  chunks: ['Vielen Dank für …', 'Leider kann ich nicht …, weil …', 'Hast du Lust, …?'],  // Redemittel, antippen = einfügen
  hint: [['danke', 'dank'], ['weil', 'leider'], ['lust', 'treffen']],  // Leitwörter je Punkt (optional, Länge = points)
  model: 'Mustertext, selbst geschrieben, genau A2', modeln: 'Übersetzung',
  check: [                                                // Checkliste zur Selbstkontrolle (2–6 Punkte)
    { k: 'Alle 3 Punkte drin?', e: 'Warum das zählt …' },
    { k: 'Im weil-Satz steht das Verb am Ende?', e: 'Nebensatz → Verb ans Ende …' } ],
  mistakes: [                                             // typische Fehler (≥ 2), in der Erklärsprache erklärt
    { bad: 'weil ich habe keine Zeit', good: 'weil ich keine Zeit habe', why: '…' } ],
  e: 'Warum der Mustertext so aufgebaut ist' }
]);
```
- **Keine automatische Bewertung.** Nur Hinweise ohne Note: Wortzahl vs. `min/ziel`, „Punkt 2 vielleicht vergessen?“, wenn kein `hint`-Wort vorkommt (Teilstring, gefaltet mit `DT.check.fold`, Locale der Zielsprache).
- **Registrierung:** `DT.catalog.register` legt je Niveau ein Pseudo-Thema `<kurs>-<niv>-write` an („Schreibwerkstatt“, `kind:'write'`). Die Übungs-ID ist die Aufgaben-ID. `DT.check.isCountable` → `false` für `write` (eine Stelle, ADR-12).
- **Validator (Fehler):** ID-Muster, Präfix passt zur Datei, eindeutig. Pflicht sind task, points (2–4), reg, words (min < ziel), model, modeln, check (2–6, je `k`+`e`), mistakes (≥ 2, je bad/good/why), e. `hint.length === points.length`. **Hinweise:** Wortzahl von `model` < min oder > ziel × 1,5. Ein `chunks`-Eintrag kommt nicht im Mustertext vor.
- **Audio:** `model` (und `chunks`) gehen in `extract-texts.js`.
- **Umfang A2:** je Kurs 10 Aufgaben `s01…s10`, je Szenario eine (a2-konzept §5). Mischung: 5 informell (du/sen) mit 20–35 Wörtern, 5 halbformell (Sie/siz) mit 30–45 Wörtern.

## 2. Datenmodell in `dt-data` (Schema 4)
```js
Profil.writes = { de: { 'de-a2-s01': {
    d: 'Entwurf',  dt: ts,       // automatisch gespeicherter Entwurf (fehlt, wenn keiner offen ist)
    x: 'abgegeben', t: ts,       // letzte abgegebene Fassung („Fertig“)
    x0: 'erste',   t0: ts,       // erste abgegebene Fassung, wird genau einmal gesetzt, nie überschrieben
    xk: 'andere',  tk: ts,       // nur nach Zusammenführen: Fassung(en), die sonst verloren wären (Trennlinie SEP)
    r: ts,                       // „Kurs zurücksetzen“ mit Texten: Abgabe mit t <= r ist archiviert („früher geschrieben“)
    n: 2 } },                    // Zahl der Abgaben
  tr: {} }
```
- **Status:** *Entwurf* = nur `d` · *abgegeben* = aktuelles `x` (nicht archiviert) · *geübt* = `prog[id].s === 'c'` **und** aktuelles `x` (Checkliste komplett, `record(id, true)`). Der Status „geübt“ wird **nicht** doppelt in `writes` gespeichert; ohne aktuellen Text gibt es kein „geübt“.
- **`r` (Archiv):** `archiveCourse` setzt `r = max(jetzt, t)` (auch eine Abgabe mit Zukunftszeit wird archiviert). `submit` löscht `r` – eine neue Abgabe ist immer aktuell. Beim Zusammenführen bringt die Gewinnerseite ihr `r` mit; das `r` der anderen Seite zählt nur, wenn beide **dieselbe Abgabe** (`x` und `t` gleich) haben. So schiebt eine vorgehende Uhr des zurücksetzenden Geräts keine neuere Abgabe des anderen Geräts ins Archiv. Ist eine Abgabe nach dem Zusammenführen archiviert, entfernt `mergeProfile` den veralteten `prog`-Eintrag dieser Aufgabe.
- **Löschen einzeln:** `remove` (ganzer Text samt `prog`-Eintrag „geübt“) und `removePart` (`x0`, ein `xk`-Teil oder eine archivierte Abgabe), in der App zweistufig (`armed`) mit `backupNow()` vorher.
- Bei der Abgabe: Ist `x0` leer, wird `x0 = x0 || text` gesetzt. Dann `x = text`, `n++`, `d/dt` löschen. `x0` wird nur gespeichert, wenn es sich von `x` unterscheidet (spart Platz).
- **Budget** (reine Funktionen in `js/core/writes.js`: `put`, `submit`, `remove`, `size`):
  - pro Feld höchstens **1 500 Zeichen** (`maxlength` + Kürzung in `put`);
  - pro Profil höchstens **100 000 Zeichen** über alle Felder. Rechnung: `dt-data` und `dt-backup` liegen beide im Speicher, UTF-16 → ≤ 400 KB von ca. 5 MiB. A2 real: 10 Aufgaben × 2 Kurse × ~3 × 300 Zeichen ≈ 18 000.
  - Checklisten-Haken werden nicht gespeichert.

## 3. Migration, Tests, Merge/Export/Import, Quota
**Schritt 3→4** (`SCHEMA = 4`, Kommentar im Schema-Verlauf ergänzen):
```js
if (fromV < 4) {                       // idempotent, rein additiv
  p.writes = obj(p.writes) ? p.writes : {};
  COURSES.forEach(function (c) { if (!obj(p.writes[c])) p.writes[c] = {}; });
}
```
- Kein Dauerschnappschuss `dt-backup-s3`, weil nur ein leeres Feld dazukommt. Das normale `dt-backup` (`app.js:406`) reicht.
- `importData` ruft `migrateProfile(clone(cur), 2, t)` mit fester 2 auf (`storage.js:232`). Das wird durch `SCHEMA - 1` ersetzt (läuft weiter idempotent) und kommentiert.
- **Fixture** `tools/fixtures/v3.json`: echtes Schema-3-Profil mit prog, srs, skip, place, badges, daily und einem unbekannten Feld. Dazu `v4-writes.json` (zwei Profile mit Konflikt-Fassungen).
- **Tests** (`tools/test-core.js`):
  1. v3 → v4: alle alten Felder bleiben tief gleich, und `writes` ist da.
  2. Zweimal migrieren ergibt dasselbe.
  3. `v` von Hand auf 3 gesenkt (alte App) → erneute Migration lässt vorhandene `writes` unverändert.
  4. v1/v2-Fixtures laufen durch bis v4.
  5. Die Tests bei `test-core.js:327` und `:452` werden von `v:4` auf `v:5` umgestellt.
  6. `mergeProfile`: Regeln wie unten, auch Entwurf gegen Abgabe.
  7. Export → Import gibt die Texte gleich zurück.
  8. Eine Schema-3-Datei wird importiert und behält die vorhandenen `writes`.
  9. Eine Datei mit `schema: 5` → `newer`.
  10. `sanitizeIncoming` kürzt, verwirft Nicht-Strings und kappt Zeitstempel.
  11. Budget-Grenze in `put`.
  12. Quota-Rücknahme mit `fakeStorage`.
- **Zusammenführen** (`pickWrite`, je Kurs und ID): Das größere `t` liefert `x/t/n = max`. `x0` = die früheste Fassung beider Seiten. Die unterlegene Fassung kommt nach `xk/tk`, falls sie sich von `x` und `x0` unterscheidet. Sonst entfällt sie, denn sie ist dann identisch vorhanden. Entwürfe: das größere `dt` gewinnt. **Alte Entwürfe werden gerettet statt verworfen:** Ein Entwurf, der älter als `t` ist, ist kein offener Entwurf mehr, kommt aber (falls er sich unterscheidet) nach `xk` – ebenso der unterlegene Entwurf. `xk` sammelt mehrere Fassungen, getrennt durch `SEP`, neueste zuerst, ohne Doppelte. **Kein Text geht stillschweigend verloren.** Überschreitet das Ergebnis das Budget, wird trotzdem übernommen und ein Hinweis gezeigt (Import kürzt keine eigenen Texte).
- **sanitizeIncoming:** `writes` nur für de/tr. IDs passen auf `DT.writes.ID_RE` = `^(de|tr)-[abc][12]-s\d{2}$` (der Validator nutzt dieselbe Regel). Textfelder müssen Strings sein und werden auf 1 500 gekürzt. Bei **fremden** Daten werden `xk`-Teile einzeln gekürzt, leere und doppelte entfernt und auf `MAX_XK = 20` Teile begrenzt. Zeitstempel werden wie bei `prog` gekappt.
- **Import übernehmen:** Dateien über `TR_MAX_RAW` (2 MB) werden abgelehnt. Scheitert `save()` nach dem Zusammenführen, wird das vorherige Profil zurückgesetzt und „Datei konnte nicht gelesen werden“ gezeigt (nichts halb übernommen).
- **Export:** wie heute das ganze Profil, `schema: 4`. Eine alte App (Schema 3) meldet bei der Datei „neuer“ (`storage.js:224`). Beim **Übertragungscode** zeigt der Dialog „enthält deine eigenen Texte“. Die 2-MB-Grenze `TR_MAX_RAW` reicht.
- **Quota-Strategie** (Fortschritt hat Vorrang):
  1. `put` prüft das Budget **vorher**. Bei Überschreitung wird nicht gespeichert, Hinweis „Speicher für eigene Texte voll – Text kopieren / herunterladen / alte löschen“. Der Text bleibt im Editor.
  2. Scheitert das Speichern eines Textes (`WR.commit` → `storage.save(…, keepBackup = true)`): Textänderung im Objekt **zurücknehmen**, erneut speichern, Hinweis „Text nicht gespeichert – bitte kopieren“. **Eigene Texte verdrängen `dt-backup` nie** – nur das Speichern von Fortschritt darf die Sicherung entfernen. Der Entwurf gilt erst nach Erfolg als gespeichert (`wst.last`), sonst wird er beim nächsten Anlass erneut versucht.
  3. Erst wenn auch das scheitert: vorhandenes rotes Banner (ADR-1).
  4. Einstellungen: „Speicher: X KB von ca. 5 MB, davon eigene Texte Y KB“.

## 4. „Kurs zurücksetzen“
**Entscheidung: Texte behalten, die Löschung muss man ausdrücklich wählen.** Neben dem Knopf steht ein Kästchen „Auch meine Texte dieses Kurses löschen“ (nicht angehakt). Ist es angehakt, wird zweistufig bestätigt (`armed`), vorher `backupNow()`.
**Begründung:** Zurücksetzen will Prozente neu messen. Eigene Texte sind Arbeit, keine Messwerte, und lassen sich nicht wiederherstellen. Bei „immer fragen“ würde man schnell bestätigen (Fehlklick-Risiko), und die Standardantwort wäre unklar. Nach dem Zurücksetzen ist der Status „geübt“ weg (`prog`), die Aufgabe zeigt aber „Früher geschrieben am … – ansehen“ (eingeklappt), und der Editor startet leer. „Profil löschen“ entfernt wie heute alles, vorher Backup. Dazu kommt in den Einstellungen „Meine Texte herunterladen (.txt)“ / „Meine Texte löschen“.

## 5. UI-Skizze
```
[Aufgabe] task · Punkte (Liste) · Register-Badge „du“
[Redemittel] Chips (chunks) → Tippen fügt an der Cursorposition ein
[Textfeld] maxlength 1500, lang = Zielsprache, spellcheck an
 Wortzähler „23 / Ziel 35 (min. 20)“ – live im DOM, kein Neu-Rendern · Sonderzeichen-Leiste
 „Entwurf gespeichert 14:02“ (aria-live=polite)
[Fertig]  (aktiv ab 1 Wort; unter min: Hinweis, aber erlaubt)
— nach „Fertig“ —
 Hinweise ohne Note (Wortzahl, vergessene Punkte)
 Dein Text | Mustertext (Lautsprecher, Übersetzung umschaltbar) – nebeneinander, am Handy untereinander
 Checkliste (Haken + aufklappbare Erklärung e) · Typische Fehler (bad → good: why)
 [Geübt]  erst wenn alle Haken gesetzt  ·  [Überarbeiten]  ·  [Text kopieren]
```
- **Entwurf automatisch speichern:** 1,5 s nach der letzten Eingabe sowie bei `blur`, `visibilitychange:hidden`, `pagehide` und beim Verlassen der Route. Nur, wenn sich der Text geändert hat.
- **Mustertext erst nach „Fertig“.** Er steht nicht im DOM, solange nicht abgegeben ist. Nach „Überarbeiten“ bleibt er sichtbar (Vergleichen ist erwünscht).
- **Meine Lücken:** eigener Abschnitt „Schreiben – offen“ mit Entwürfen und mit Abgaben, deren Checkliste noch offen ist. Das ist eine Aufgabenliste, keine Fehlerliste, ohne SRS.
- **Dashboard/Übersicht:** Zähler „Schreiben: 3 von 10 geübt · 1 Entwurf“, **ohne Prozentbalken**. Die Prozente der Niveaus bleiben unverändert (nur zählbare Typen).

## 6. Datenschutz
Texte bleiben nur im Browser (`localStorage`, unverschlüsselt). Kein Upload, keine Analyse. Übertragen wird nur auf eine Handlung des Nutzers hin: Datei-Export, Übertragungscode (steht hinter `#`, geht nicht an den Server, mit Hinweis „enthält deine Texte“) oder Kopieren. Die Seite „Rechtliches“ bekommt diesen Text in beiden Sprachen. Hinweis darin: Andere Seiten unter `sinandmrr.github.io` und andere Nutzer desselben Browserprofils können technisch mitlesen. Löschen geht jederzeit.

## 7. Risiken, Reihenfolge, Aufwand
| Risiko | Gegenmaßnahme |
|---|---|
| Alter Tab/alte App überschreibt Schema-4-Daten | `newerData` ist schon online (Schritt 0). Sehr alte Tabs ohne diesen Schutz: Schlüssel `dt-schema-max` (höchstes je geschriebenes Schema). Ist `dt-data.v` kleiner, wird `dt-backup` **nicht** überschrieben und `writes` daraus per `storage.mergeWrites` zurückgeholt; der `storage`-Handler behält bei `v < SCHEMA` die Texte des eigenen Tabs. Restrisiko: Texte, die nach der letzten Sicherung entstanden und nur im alten Tab überschrieben wurden |
| Import verwirft Texte (`storage.js:148`) | explizites `pickWrite`, Test 6/8 |
| Speicher voll → Fortschritt nicht gespeichert | Budget vorher, Rücknahme, Banner (Abschnitt 3) |
| Datenverlust durch Tippen ohne Speichern | Entwurf automatisch, `pagehide` |
| Leistung beim Tippen | Zähler direkt im DOM, Speichern verzögert |
| Lernende halten Selbstkontrolle für Bewertung | Text „Selbstkontrolle, keine Note“, keine Prozente |
| Texte von Lehrkräften zu frei (Validator schwach) | Pflichtfelder + Gegenlesen über Kreuz (Opus) |

**Schritte für den Entwickler** (ein Release R5, Speicherteil mit `model: "opus"`):
1. `js/core/writes.js` (put/submit/remove/size/pickWrite), rein, mit Tests. **M**
2. `storage.js`: SCHEMA 4, Migrationsschritt, `mergeProfile` + `sanitizeIncoming` für `writes`, `importData` `SCHEMA - 1`. Dazu Fixtures und Tests 1–12. **M**
3. Validator + `K.addWrites` + `catalog.register` (Pseudo-Thema) + `isCountable` + extract-texts. **S**
4. Player: Editor, Autosave, Fertig/Checkliste/Geübt, Kopieren, Quota-Hinweise (`js/views/exercises.js`). **M**
5. Lücken-Abschnitt, Dashboard-Zähler, Reset-Kästchen, Einstellungen (Speicheranzeige, .txt, löschen), Rechtliches. **S–M**
6. Lehrkräfte: je 10 Aufgaben pro Kurs, gegengelesen. Danach Browser-Test (hell/dunkel, 390 px/Desktop, Speicher künstlich voll, Export → Import in zweitem Browser), `bump-version.py`, `git pull --rebase`.

**Gesamtaufwand Technik: L (ca. 4–5 Tage)**, Inhalte parallel.

| Alternative | Aufwand | Warum nicht |
|---|---|---|
| eigener Schlüssel `dt-writes-<pid>` | M | zwei Schlüssel konsistent halten; Backup, Export und Löschen doppelt |
| IndexedDB | L | asynchron, zweiter Speicherpfad nur für Texte |
| Texte nicht speichern | S | widerspricht dem Wunsch „eigene Texte lokal behalten“ |
| `write` als Frage in Lesetexten (ADR-12.2) | S | `texts.js:11` schließt das aus; zählt nicht in die Text-Prozente; Lehrkräfte fänden 10 Aufgaben verstreut |

Quelle: MDN, Storage quotas and eviction criteria – https://developer.mozilla.org/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
