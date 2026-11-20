# Architektur-Entscheidungen: A1-Ausbau (Wortschatz, SRS, Tagesziel, Einstufung, Sprechen, PWA)

**Status:** Vorgeschlagen (Architekt) · **Datum:** 2026-11-18 · **Freigabe:** Teamlead/Entwickler, Didaktik-Produkt (Intervalle, Ziele), QA (Testplan)
**Gilt für:** Kurs `de` und `tr`, zunächst A1. Alle Entscheidungen sind so gebaut, dass A2–C2 ohne neues Speicherformat dazukommen.

---

## 0. Ist-Zustand (geprüft am 18.11.2026, 09:10 – `js/app.js` ≈ 1380 Zeilen)

Der Entwickler hat parallel schon gebaut (Commits `195b7b0`, `74e3401` + offene Änderungen):

| Bereich | Stand im Code | Bewertung |
|---|---|---|
| Übungstypen `listen`, `dictation`, `speak` | im Player vorhanden, Langsam-Taste, Mikrofon (`startListening`, `levRatio` ≥ 0,8) | gut; Korrekturen siehe ADR-5/6 |
| Dialoge | `K.dialogs` werden in `K.content` als Pseudo-Themen (`kind:'dialog'`) eingehängt, zählen in Niveau-% und „Lücken“ | gut, so beibehalten |
| `tools/extract-texts.js` | sammelt `say`, Wortschatz (`t`, `ex`), Dialogzeilen | erledigt; Stimmenplan fehlt (ADR-5) |
| `tools/bump-version.py` | erhöht `APP_VERSION` + alle `?v=` | gut; muss künftig auch `sw.js` pflegen |
| Speicher | `dt-data`, Schema 2, `migrate()`, `dt-backup` bei Versionswechsel | Grundidee gut, **Lücken siehe unten** |
| Wortschatz-Dateien | leer (`K.addVocab` noch ohne Einträge) | — |

**Gefundene Risiken im bestehenden Code (vor den neuen Features beheben):**

1. **Stilles Speicher-Versagen:** `rawSet()` schluckt `QuotaExceededError`, `save()` prüft das Ergebnis nicht → Nutzer lernt weiter, nichts wird gespeichert. Mit SRS wächst der Speicher → wird real.
2. **Mehrere Tabs überschreiben sich:** Kein `storage`-Event-Handler. Tab A (alter Stand im Speicher) überschreibt bei jedem `save()` alles, was Tab B gelernt hat. Mit SRS/Tageslog deutlich gefährlicher als heute.
3. **Export ist unvollständig:** `doExport()` exportiert nur `prog`. Alles Neue (SRS, Tageslog, Abzeichen) ginge beim Gerätewechsel verloren. `doImport()` migriert alte Exportdateien nicht.
4. **Zurücksetzen/Profil löschen ohne Sicherung:** `reset-course` und `delete-profile` sind unumkehrbar, es wird kein `dt-backup` geschrieben.
5. **Downgrade-Falle:** `save()` setzt `db.v = SCHEMA` hart. Öffnet eine ältere App-Version (anderer Tab, später: Service-Worker-Cache offline) Daten von Schema 3, schreibt sie `v:2` zurück → die neue App führt die v3-Migration erneut aus. ⇒ **Migrationen müssen idempotent sein**, und ab Schema 3 gilt `db.v = Math.max(db.v, SCHEMA)`.
6. **Absturz in `migrate()` = weiße Seite:** Kein `try/catch` um die Migration.
7. **Gemeinsamer Origin:** `sinandmrr.github.io` teilt localStorage **und Cache Storage** mit allen anderen GitHub-Pages-Repos des Besitzers (z. B. die Klarinetten-Lernseite). Quota (~5 MiB localStorage) wird geteilt; ein Service Worker darf **nie** fremde Caches löschen.
8. **Safari löscht Daten:** Bei aktivem Tracking-Schutz löscht Safari skriptgeschriebene Daten eines Origins, wenn dort in den letzten 7 Tagen Browsernutzung keine Interaktion stattfand (MDN, „Storage quotas and eviction criteria“). `navigator.storage.persist()` wird in Safari per Heuristik entschieden (Home-Bildschirm-App begünstigt, WebKit-Blog „Updates to Storage Policy“). → Export-Erinnerung und „Zum Home-Bildschirm“-Hinweis für iOS sind Datenschutz für Lernstände, nicht Kosmetik.
9. **Audio-Ketten auf iOS:** `playUrl()` erzeugt pro Zeile `new Audio()`. iOS erlaubt `play()` ohne Nutzergeste nur auf einem bereits „entsperrten“ Element → „Ganzen Dialog anhören“ fällt ab Zeile 2 auf die Gerätestimme zurück (Stimmenmix) oder stoppt.
10. **`slowNext` per globalem Flag + `setTimeout(50)`:** Fällt Piper asynchron (> 50 ms) auf die Gerätestimme zurück, ist „langsam“ verloren. → Optionen-Objekt statt globaler Flags.
11. **`speak`-Aufgaben verfälschen Statistik:** Erkennungsfehler (Akzent, Mikro, Browser) landen als „falsch“ in „Meine Lücken“; ohne Spracherkennung zählt „✓ laut gesagt“ als richtig. Fortschritt-% hängt damit vom Browser ab.

---

## ADR-1: Speicherformat Schema 3 und Datensicherheit

### Kontext
Neue Zustände pro Profil: SRS, Tageslog/Ziel, übersprungene Themen, Einstufungsergebnis, Abzeichen. localStorage ist synchron, ~5 MiB pro Origin (geteilt, s. o.), `dt-backup` verdoppelt den Bedarf.

### Entscheidung
**Weiter localStorage, ein Schlüssel `dt-data`, Schema 3, rein additive Migration.**

```js
db = {
  v: 3, app: '2026-11-xx.n', rev: 17,          // rev: +1 bei jedem save() (Mehr-Tab-Erkennung)
  theme, active, voices, voiceGender, micInfoSeen,
  profiles: { [pid]: Profil }
}
Profil = {
  id, name, course, created,
  prog:  { de: { [aufgabenId]: { f, s, n, w?, a?, t } }, tr: {…} },   // UNVERÄNDERT
  last:  { de: ts, tr: ts },                                         // UNVERÄNDERT
  srs:   { de: { [itemId]: [box, due, last, reps, lapses] }, tr: {} },// ADR-2
  daily: { goal: 10, log: { 'YYYY-MM-DD': [anzahl, zielAnDemTag, neueWörter] } }, // ADR-4
  skip:  { de: { [topicId]: { t: ts, by: 'placement' | 'user' } }, tr: {} },     // ADR-7
  place: { de: { t, level: 'A1', mastered: [topicIds], asked: 18 } | undefined, tr: … },
  badges:{ [badgeId]: ts }                                            // ADR-9
}
```

Zeitformate (zentral in `js/core/time.js`, nur dort berechnet):
- `dayNum(date?)` → ganze Zahl = `Math.floor(Date.UTC(y, m, d) / 864e5)` aus dem **lokalen** Kalenderdatum (sommerzeitfest, rechenbar, 5 Ziffern). Für SRS `due`/`last`.
- `dayKey(date?)` → `'YYYY-MM-DD'` lokal. Nur für das lesbare Tageslog.

**Migration v2 → v3** (`migrateProfile(p, fromV, today)` – pro Profil, damit Import sie wiederverwenden kann):
```js
if (v < 3) {
  // idempotent: nur anlegen, was fehlt – nie überschreiben
  p.srs   = p.srs   || { de: {}, tr: {} };
  p.skip  = p.skip  || { de: {}, tr: {} };
  p.place = p.place || {};
  p.badges= p.badges|| {};
  if (!p.daily) {
    p.daily = { goal: 10, log: {} };
    // Startwert aus vorhandenen Zeitstempeln (Untergrenze: nur letzte Antwort je Aufgabe ist bekannt)
    ['de','tr'].forEach(c => Object.values(p.prog[c] || {}).forEach(r => {
      if (r && r.t) { var k = dayKey(r.t), e = p.daily.log[k] || [0, 10, 0]; e[0]++; p.daily.log[k] = e; }
    }));
  }
  // offene Fehler → SRS (fällig heute), nur falls noch kein Eintrag
  ['de','tr'].forEach(c => Object.keys(p.prog[c] || {}).forEach(id => {
    var r = p.prog[c][id];
    if (r && r.s === 'w' && !p.srs[c][id]) p.srs[c][id] = [1, today, today, 0, 1];
  }));
}
```

**Schutzregeln (neu, alle in `js/core/storage.js`):**
| Regel | Umsetzung |
|---|---|
| Migrationen nur additiv | Nie Felder löschen/umbenennen ohne Kopie. Alte Daten stecken unverändert im neuen Format. |
| Einmaliger Schema-Schnappschuss | Vor dem ersten Lauf von v<3: `dt-backup-s2` schreiben, **nie überschreiben**. `dt-backup` bleibt „Stand vor letztem Update“. |
| Migration abgesichert | `try { d = migrate(d) } catch (e) { readOnly = true; rohdaten nicht anfassen; Banner + „Rohdaten exportieren“ }` |
| Kein Downgrade | `save(): db.v = Math.max(db.v || 0, SCHEMA)`. Lädt die App Daten mit `v > SCHEMA` (alte App, neue Daten): nicht migrieren, alle unbekannten Felder unverändert mitspeichern, Hinweis „Bitte neu laden“. |
| Speicherfehler sichtbar | `save()` gibt `true/false` zurück. Bei Fehler: 1) `dt-backup` (nicht `-s2`) entfernen, erneut versuchen; 2) sonst `state.saveFailed = true` → dauerhaftes rotes Banner „Fortschritt wird nicht gespeichert – bitte exportieren“ mit Export-Knopf. |
| Mehrere Tabs | `window.addEventListener('storage', e => { if (e.key === STORE && e.newValue) { db = migrateSafe(JSON.parse(e.newValue)); render(); } })`. Player-Zustand (im Speicher) bleibt, weil er nur IDs hält. Restrisiko: zwei Antworten in derselben Sekunde in zwei Tabs → eine geht verloren (akzeptiert). |
| Destruktive Aktionen | Vor `reset-course`, `delete-profile`, `import`: `rawSet(BACKUP, …)`. Reset löscht `prog`, `srs`, `skip`, `place` **des Kurses**; `daily` und `badges` bleiben (Verlauf). |
| Größe begrenzen | `r.a` (letzte falsche Antwort) auf 120 Zeichen kürzen. In Einstellungen: „Speicher: 312 KB“ (Summe aller `dt-*`-Schlüssel), Warnung ab 2,5 Mio. Zeichen. |
| Export komplett | Format v2: `{ app:'deutsch-tuerkce', v:2, schema:3, appVersion, exported, profile:<ganzes Profil> }`. Import: v1 → wie heute (nur `prog`); v2 → `migrateProfile()`, dann `mergeProfile(cur, inc)`: `prog` neuere `t` gewinnt · `srs` größeres `last`, bei Gleichstand mehr `reps` · `daily.log` je Tag Maximum · `skip`/`badges` Vereinigung (früherer Zeitstempel) · `goal` bleibt. |
| Sicherung anstoßen | Sanfte Export-Erinnerung alle 30 Tage (Datum in `db.lastExport`), auf iOS zusätzlich Hinweis „Zum Home-Bildschirm hinzufügen“. `askPersist()` zusätzlich nach dem 3. Lerntag aufrufen. |

**Speicherbudget (gemessen mit Node, JSON-Länge je Eintrag):**

| Eintrag | Zeichen |
|---|---|
| `prog` richtig | ~55 |
| `prog` falsch mit `a` | ~70–190 (daher Kürzung) |
| SRS als Array `[3,20412,20405,5,1]` | **~32** |
| SRS als Objekt kurz `{b,d,r,x,l}` | ~52 |
| SRS wie vorgeschlagen `{box,due:'YYYY-MM-DD',reps,lapses,last}` | ~81 |

Hochrechnung pro Kurs, A1–C2 voll (≈ 6 000 Wörter, ≈ 2 200 Aufgaben): SRS-Array 6 000 × 32 ≈ **190 KB**, `prog` ≈ 130 KB, Log ≈ 10 KB/Jahr → **≈ 330 KB je Kurs und Profil**. Ein Profil in beiden Kursen ≈ 660 KB, mit `dt-backup` ≈ 1,3 MB. Drei Vielnutzer-Profile auf einem Gerät ≈ 4 MB → am Limit. Für A1 (2 × 350 Wörter) nur ≈ 25 KB SRS – unkritisch. `JSON.stringify` von 6 000 SRS-Einträgen: ≈ 2 ms (Node, Desktop) → auf Mittelklasse-Handys ≈ 10 ms pro Antwort, vertretbar; kein Debounce (Datenverlust beim Schließen wäre schlimmer).

### Alternativen
| Option | Aufwand | Pro | Contra |
|---|---|---|---|
| **A: localStorage, Schema 3 (gewählt)** | gering | synchron, bestehender Code, einfache Migration | ~5 MiB geteilt; ab C1/C2 mit vielen Profilen knapp |
| B: IndexedDB | hoch | großes Kontingent | asynchron → ganzer Code muss umgebaut werden; Migration von localStorage = neues Risiko |
| C: SRS in eigenem Schlüssel `dt-srs-<pid>` | mittel | `dt-data` bleibt klein, `save()` schneller | zwei Schlüssel atomar konsistent halten, Export/Backup komplizierter |

**Auslöser zum Neubewerten:** Summe `dt-*` > 2,5 Mio. Zeichen bei echten Nutzern oder `saveFailed` gemeldet → Option C (geringerer Umbau als B).

### Folgen/Risiken
- `migrate()` und `mergeProfile()` werden reine Funktionen ohne DOM → per Node testbar (ADR-10). Pflicht: Fixture-Tests mit echten v1-/v2-Exporten.
- Das SRS-Array ist unlesbarer als ein Objekt → **nur `js/core/srs.js`** darf darauf zugreifen (Index-Konstanten `B=0, DUE=1, LAST=2, REPS=3, LAPSES=4`). Neue Felder nur hinten anhängen.

---

## ADR-2: Spaced Repetition – Leitner mit 7 Fächern

### Kontext
Alle Antworten werden automatisch bewertet (richtig/falsch) – es gibt keine Selbsteinschätzung „schwer/gut/leicht“. Das Team muss das Verfahren erklären und warten können; Lernende sollen verstehen, warum ein Wort wiederkommt.

### Entscheidung
**Leitner-System, Fächer 0–6, feste Intervalle mit leichter Streuung.**

```js
DT.srs.INTERVALS = [0, 1, 3, 7, 16, 35, 90];   // Tage je Fach
// Fach 0 = heute neu/falsch (kommt in derselben Sitzung noch einmal), 6 = Langzeit
```
| Ereignis | Neues Fach | Fällig |
|---|---|---|
| Neues Wort eingeführt | 0 | heute |
| „Kenne ich schon“ beim ersten Zeigen | 3 | heute + 7 (wird also geprüft, nicht geschenkt) |
| richtig | `min(fach + 1, 6)` | heute + Intervall (± 10 % ab 7 Tagen, deterministisch aus `hash(id + reps)`) |
| falsch | Fach ≥ 4 → 2, sonst Fach ≥ 1 → 1, sonst 0 | heute + Intervall; **zusätzlich einmal ans Sitzungsende** |

**Grammatik-Aufgaben im SRS:** Sie kommen bei einer **falschen** Antwort ins SRS (Fach 1, fällig morgen) – **zusätzlich** zu „offene Fehler“, nicht statt dessen. „Meine Lücken“ (Projektanforderung: Fehler merken, am Kapitelende wiederholen) bleibt unverändert und hängt weiter an `prog[id].s === 'w'`. Grund: Eine konkrete Aufgabe merkt man sich auswendig; Intervalle > 1 Monat bringen dort nichts. Deshalb: Aufgaben scheiden nach richtiger Antwort in Fach 4 aus (`due = -1`, Eintrag bleibt für Statistik).

**API (`js/core/srs.js`, reine Funktionen, `today` wird übergeben):**
```js
srs.get(p, cid, id)                         // → Array oder null
srs.introduce(p, cid, wordId, today, known) // Fach 0 bzw. 3
srs.answer(p, cid, id, ok, today, kind)     // kind: 'word' | 'ex'; gibt Eintrag zurück
srs.due(p, cid, today, limit)               // fällige IDs: due ≤ today && due ≥ 0, sortiert nach due, dann Fach
srs.wordMode(entry, hasAudio)               // 'pick' | 'listen' | 'rev' | 'type' (ADR-3)
srs.stats(p, cid, ids)                      // { neu, lernend (1–2), sicher (≥3), gefestigt (≥5) }
```
**Rückstau ohne Druck:** Pro Tagesmix höchstens 8 Wiederholungen, pro „Wiederholen“-Sitzung höchstens 30. Angezeigt wird nie „287 fällig“, sondern „Heute: 30 Wiederholungen bereit“. Ab > 30 fälligen Einträgen werden keine neuen Wörter vorgeschlagen („erst festigen“).

### Alternativen
| Option | Aufwand | Pro | Contra |
|---|---|---|---|
| **Leitner (gewählt)** | gering | erklärbar („Fach 3 = 7 Tage“), binär bewertbar, kleiner Zustand | ~10–20 % mehr Wiederholungen als optimal |
| SM-2 (Anki-Klassiker) | mittel | bekannt | braucht Qualitätsnote 0–5 (gibt es bei Auto-Bewertung nicht); „Ease Hell“ (schwere Karten kommen nie wieder hoch) |
| FSRS (light) | hoch | effizienteste Planung | Mathematik (Vergessenskurve, 17+ Parameter) schwer zu erklären/testen; Vorteile vor allem mit Notenskala und großen Logs |

**Weg nach vorn:** `reps`, `lapses`, `last` werden mitgespeichert – damit lässt sich später ein FSRS-Startwert (Stabilität ≈ aktuelles Intervall) per Migration ableiten, ohne Daten zu verlieren.

### Folgen/Risiken
- Didaktik-Produkt bestätigt die Intervalle; sie sind eine Konstante und ohne Migration änderbar (gilt dann ab der nächsten Antwort).
- Tests: Fachwechsel, Streuung deterministisch, Rückstau-Begrenzung, Aufgaben scheiden nach Fach 4 aus.

---

## ADR-3: Wortschatz-Reiter und verallgemeinerter Übungs-Player

### Kontext
Der Player arbeitet mit einer Warteschlange von Aufgaben-IDs (`player.queue`, `exById()` über `EXI`). Wortabfragen haben keine fertigen Aufgaben – sie werden aus dem Wortschatz erzeugt. `render()` baut bei **jedem** Klick die ganze Seite neu.

### Entscheidung
1. **Index beim Start** (neben `EXI`): `WI = { [wordId]: { w, key:'de-a1', course:'de', level:'A1' } }`. Validator erzwingt Präfixe: Aufgabe `<topicId>.<n>`, Wort `<kurs>-<niveau>.w<nnn>`, Dialog `<kurs>-<niveau>-d<nn>`, Dialogfrage `<dialogId>.<n>`. So sind Art und Kurs an der ID erkennbar und Kollisionen ausgeschlossen.
2. **Warteschlangen-Einträge bleiben Strings:** Aufgabe = `'de-a1-03.12'`, Lernkarte = `'card:de-a1.w001'`, Wortabfrage = `'w:de-a1.w001:pick'`. Auflösung über `resolveItem(q)` → `{ kind: 'ex' | 'card' | 'word', srsId, ex }`.
3. **Erzeugte Aufgaben werden pro Sitzung gecacht:** `player.gen[q]`. Sonst würfelt jedes Neu-Rendern andere Ablenker – Fehler, der sonst sicher passiert.
4. **Abfragemodus nach Fach** (`srs.wordMode`): Fach 0–1 `pick` (Zielwort → Übersetzung wählen) · Fach 2 `listen` (hören → Übersetzung; ohne Audio → `rev`) · Fach 3 `rev` (Übersetzung → Zielwort wählen) · Fach ≥ 4 `type` (Übersetzung → Zielwort tippen). Ein SRS-Zustand pro Wort, Schwierigkeit steigt mit dem Fach.
5. **Ablenker:** gleiche Wortart (`pos`), gleiches Kurs-Niveau, bevorzugt gleiches Wortfeld; nie gleiche Übersetzung `n` oder gleiches `t`; 3 Ablenker.
6. **Erklärung bei Fehlern wird erzeugt** (Grundsatz 3): „**der Stuhl** heißt *sandalye* – gesucht war **der Tisch** (*masa*)“ + Beispielsatz `ex`/`exn` + `note`. Tippen: Artikel fehlt → falsch mit eigenem Hinweis; nur Sonderzeichen falsch → `fold()`-Hinweis wie beim Lückentext (gleiche Logik wiederverwenden, nicht kopieren).
7. **Eine Speicherfunktion für alles:** `recordAnswer(item, ok, given)` → Aufgabe: bisheriges `record()` + bei falsch/vorhandenem Eintrag `srs.answer(…,'ex')`; Wort: nur `srs.answer(…,'word')`; immer `daily.tick()`.
8. **Ansichten/Routen:** `#/words` (Wortfelder mit Fortschritt neu/lernend/sicher) · `#/words/<feld>` (Liste, max. ~50 Zeilen) · `#/words/<feld>/learn` (5 neue Wörter: Karte → Hören → Abfrage) · `#/review` (fällige Wiederholungen). „Meine Lücken“ bekommt einen Abschnitt „Schwierige Wörter“ (`lapses ≥ 2`).
9. **Niveau-Fortschritt:** Wortschatz wird **nicht** in die bestehenden Niveau-% eingerechnet (350 neue Einheiten würden jeden bisherigen Prozentwert halbieren). Eigener Balken „Wortschatz A1: 120 / 350 sicher“. Zusammenführen später als Didaktik-Entscheidung.
10. **Statistik-Cache:** `stats.invalidate()` in `recordAnswer()`; `wrongIds()`, `topicStats()`, Fälligkeitszahl werden einmal pro Änderung berechnet statt bei jedem Render (heute ruft `shell()` bei jedem Klick `wrongIds()` über alle Themen auf).

### Alternativen
- Wortabfragen als feste Übungen im Inhalt (Lehrer schreiben MC je Wort): bessere Ablenker, aber 4× Inhaltsaufwand und nicht skalierbar bis C2. Verworfen; Lehrer können per `note` gezielt Hinweise geben.
- Ein SRS-Zustand je Wort **und** Richtung: genauer, aber doppelter Speicher und doppelte Wiederholungen. Verworfen zugunsten „Modus nach Fach“.

### Folgen/Risiken
- `player` braucht `gen` und eine Wiederholungsliste (`player.requeued`, jedes Element höchstens einmal).
- UX: 6. Hauptreiter „Wortschatz“ – Handybreite prüfen (UX-Designer); Dialoge bleiben im Reiter „Lektionen“ (wie bereits gebaut).

---

## ADR-4: Tagesziel, Streak, 5-Minuten-Tagesmix

### Kontext
Motivation ohne Druck (Grundsatz 5). Lingo reagiert heute nur auf „zuletzt gelernt“.

### Entscheidung
- **Ziel = Anzahl beantworteter Einheiten pro Tag**, wählbar 5 / 10 / 20 (Standard 10). Kein XP-System (wäre eine zweite Währung ohne Mehrwert). Lernkarten zählen nicht, nur Antworten.
- **Log:** `daily.log['2026-11-18'] = [anzahl, zielAnDemTag, neueWörter]`. Das Ziel wird pro Tag mitgespeichert, damit ein späterer Zielwechsel alte Tage nicht umwertet. ~25 Zeichen pro Tag ≈ 9 KB pro Jahr, kein Aufräumen nötig.
- **Streak** (`daily.streak(log, todayKey)`, reine Funktion):
  - Ein Tag zählt, wenn das Tagesziel erreicht wurde.
  - **Heute bricht nie** (der Tag ist noch offen).
  - **1 Pausentag pro Kalenderwoche (Mo–So)** wird automatisch überbrückt; er zählt nicht mit, bricht aber nicht. Zwei verpasste Tage in derselben Woche beenden die Serie.
  - Schleife rückwärts ab gestern, höchstens 3 650 Tage.
  - Anzeige freundlich: „🔥 12 Tage · diese Woche 1 Pausentag frei“. Kein Countdown, keine Warnungen.
- **Tagesmix** (`daily.buildMix(p, cid, today)`, Route `#/daily`, ~12 Einheiten):
  1. fällige SRS-Einträge (Wörter + Aufgaben), höchstens 8, älteste/niedrigste Fächer zuerst;
  2. neue Wörter in Lehrplan-Reihenfolge, Tageslimit nach Ziel (5 → 3, 10 → 5, 20 → 8), jeweils `card:` direkt gefolgt von der Abfrage; entfällt bei Rückstau > 30;
  3. auffüllen mit offenen Aufgaben **nur aus bereits begonnenen, nicht übersprungenen Themen** (nie Grammatik abfragen, die noch nicht erklärt wurde);
  4. mischen, sodass nicht zwei neue Wörter direkt hintereinander abgefragt werden.
- **Lingo** nutzt `daily`: Ziel erreicht → fröhlich; teilweise → aufmunternd; nichts heute → bisherige Logik.
- **Tages-Erinnerung** als `.ics`-Download (ADR-8).

### Alternativen
- Streak „mindestens 1 Aufgabe“: zu beliebig, Ziel verliert Sinn. Streak „Freeze“ kaufen/sammeln: Spielmechanik mit Druck – verworfen.
- Rollierendes 7-Tage-Fenster statt Kalenderwoche: fairer, aber schwerer zu erklären. Kalenderwoche gewählt.

### Folgen/Risiken
- Lokale Kalendertage: Wer über Zeitzonen reist, kann einen Tag „verlieren/gewinnen“ – akzeptiert.
- Tests: Pausentag am Sonntag + Montag (zwei Wochen) → überbrückt; zwei Lücken in einer Woche → Bruch; Zielwechsel.

---

## ADR-5: Hören und Dialoge – Audio-Schicht und Audio-Volumen

### Kontext
Gebaut sind `listen`, `dictation`, Dialog-Abspielen. Probleme siehe Ist-Zustand Nr. 9 und 10. Audio liegt im Repo (MP3, ~5–8 KB pro kurzem Text, Satz eher 10–15 KB).

### Entscheidung
1. **`js/core/audio.js` mit Optionen statt Positionsparametern:**
   ```js
   DT.audio.speak(text, { lang, gender, rate: 1 | 0.72, onEnd, voiceName })
   DT.audio.playSeq(items /* [{text, gender}] */, { rate, onLine })   // gibt stop() zurück
   DT.audio.canPlay(text, lang)  // Piper-Datei im Manifest ODER passende Gerätestimme → true
   DT.audio.stop()               // bei hashchange immer aufrufen
   ```
2. **Ein wiederverwendetes `<audio>`-Element** (`DT.audio.el`), beim ersten Klick entsperrt; für jede Zeile nur `el.src` wechseln. Behebt Dialogketten auf iOS.
3. **Nicht lösbare Höraufgaben werden nicht gewertet:** Liefert `canPlay()` `false` (keine Datei, keine Stimme – z. B. direkt nach einem Update, bevor der Audio-Bot fertig ist), zeigt der Player „Audio gerade nicht verfügbar“ + „Ohne Wertung überspringen“; es wird **nichts** gespeichert.
4. **Stimmenplan in der Text-Extraktion:** `texts.json` bekommt zusätzlich `only: { de: { "<Dialogzeile>": "female" } }`. `gen_audio.py` erzeugt Dialogzeilen nur in der Stimme des Sprechergeschlechts (falls es sie gibt, sonst in der vorhandenen). Alles andere wie bisher in allen Stimmen. Der Client braucht dafür keine Änderung (sucht bereits erst gewünschte, dann andere Stimme).
5. **Größenkontrolle:** TTS-Workflow gibt `du -sh audio` aus und warnt ab 300 MB. Schätzung A1: ≈ 1 100 Texte je Kurs → DE (2 Stimmen) ≈ 15 MB, TR (1 Stimme) ≈ 7 MB. A1–C2 grob 200–300 MB; GitHub Pages erlaubt höchstens 1 GB veröffentlichte Seite, und die Git-Historie behält jede gelöschte/neu erzeugte Datei. **Auslöser** bei > 300 MB: Wörter/Beispiele nur in einer Stimme und/oder 32 kbit/s statt 48 kbit/s für neue Dateien.
6. **Manifest:** bleibt vorerst `files[stimme][text] = id` (A1 ≈ 200 KB, gzip ≈ 80 KB, wird per ETag revalidiert). **Auslöser** > 500 KB: aufteilen je Kurs-Niveau oder SHA-1 (16 Hex) im Client berechnen, dann nur noch ID-Listen.

### Folgen/Risiken
- `slowNext`/`seqToken` als globale Flags entfallen.
- QA: Dialog „alle abspielen“ auf echtem iPhone (Safari und Home-Bildschirm-App) testen.

---

## ADR-6: Sprechen (`speak`)

### Kontext
Spracherkennung ist browserabhängig: laut web-features-Explorer in Chrome/Edge 139 und neu Firefox 160 (Desktop) vorhanden, Safari/iOS gilt dort nicht als unterstützt (Safari bietet nur das Präfix `webkitSpeechRecognition` mit Einschränkungen). Viele Browser schicken die Aufnahme an Server des Herstellers. Erkennung bei Lernenden (Akzent!) ist unzuverlässig.

### Entscheidung
- **`speak` ist Bonus, keine Prüfung:** `isCountable(ex) = ex.t !== 'speak'`. `topicStats()`, `wrongIds()`, Niveau-%, SRS und Abzeichen ignorieren `speak`. Gespeichert wird nur „geübt“ (`prog` mit `s:'c'` bei Erfolg; bei Misserfolg **kein** `w`-Eintrag). Damit ist der Fortschritt auf allen Geräten gleich.
- **Erkennung nur nach Feature-Check und Laufzeitprüfung:** `SR` vorhanden **und** kein Fehler `service-not-allowed`/`language-not-supported` in dieser Sitzung; sonst Mikro ausblenden und „✓ laut gesagt“ (ungewertet) zeigen.
- **Einmaliger Datenschutz-Hinweis** vor dem ersten Mikrofon-Einsatz („Die Aufnahme wird von deinem Browser ggf. an Google/Apple/Microsoft gesendet“), Haken in `db.micInfoSeen`. Chrome arbeitet an Erkennung auf dem Gerät (`processLocally`) – nutzen, sobald stabil und per Feature-Check verfügbar.
- **Toleranz:** bestehendes `levRatio ≥ 0,8` über alle Alternativen behalten; Inhaltsformat bekommt optional `alt:[…]` (z. B. Zahl als Ziffer „3“ statt „drei“). Lehrer vermeiden Zahlen/Eigennamen in `say`.

### Alternativen
- Eigene Erkennung im Browser (Whisper/WASM): Datenschutz top, aber 40–150 MB Modell – für Handys und GitHub Pages ungeeignet. Verworfen.

---

## ADR-7: Einstufungstest

### Kontext
Es gibt nur A1-Inhalte. Ein „adaptiver Test über alle Niveaus“ hätte nichts zu testen.

### Entscheidung
**Jetzt: A1-Schnelltest pro Thema, später dieselbe Logik niveauweise.**
- Pool je A1-Thema (ohne Dialoge): Aufgaben der Typen `mc`, `gap`, `listen` aus der **zweiten Hälfte** der Themen-Übungen (schwerer). `order`, `match`, `speak`, `dictation` nicht (zu lang bzw. unzuverlässig).
- Ablauf je Thema in Lehrplan-Reihenfolge: Frage 1; nur wenn richtig → Frage 2. **Beherrscht = 2/2.**
- Abbruch: 3 Themen in Folge nicht beherrscht → Ende („Starte am besten bei Thema X“). Typisch 15–20 Fragen, max. 24.
- **Antworten werden nicht in `prog` geschrieben** – weder richtig (keine geschenkten Punkte) noch falsch (sonst landet Ungelerntes in „Meine Lücken“, Gegenteil von „kein Druck“).
- Ergebnis: `place[cid] = { t, level:'A1', mastered:[…], asked }`. Danach Auswahlliste „Diese Themen überspringen?“ (vorausgewählt = beherrscht) → `skip[cid][topicId] = { t, by:'placement' }`.
- Übersprungen heißt: `nextTopic()` und Tagesmix überspringen das Thema; Karte zeigt „übersprungen · trotzdem üben“; Niveau-Balken zeigt einen **eigenen schraffierten Anteil** („42 % gelöst · 25 % übersprungen“), nie als „richtig“. Rückgängig auf der Themenseite.
- Später (A2+): pro Niveau 3 zufällige Themen; Niveau gilt als erreicht bei ≥ 2/3 beherrscht, sonst Stopp.

### Alternativen
- Echte IRT/CAT-Adaption: braucht kalibrierte Aufgabenschwierigkeiten (Daten haben wir nicht, kein Server). Verworfen.

---

## ADR-8: PWA – Service Worker und Erinnerung

### Kontext
GitHub Pages unter `/deutsch-tuerkisch-lernen/`, gleicher Origin wie andere Repos des Besitzers. Hauptangst: „alte Version bleibt hängen“. Chrome umgeht seit Version 68 beim Update-Check der SW-Datei standardmäßig den HTTP-Cache (`updateViaCache: 'imports'`); geprüft wird bei Navigation im Scope oder per `registration.update()` (Chrome-Blog „Fresher service workers, by default“).

### Entscheidung
**`sw.js` in der Repo-Wurzel, Strategie nach Dateiart, nie fremde Caches anfassen.**

```js
// sw.js – Scope ergibt sich aus dem Pfad: /deutsch-tuerkisch-lernen/
const VERSION = '2026-11-18.1';            // pflegt tools/bump-version.py
const ASSETS = 'dt-assets-' + VERSION;     // Präfix dt- ist Pflicht (geteilter Origin!)
const AUDIO  = 'dt-audio-v1';              // versionslos: Dateinamen = Hash des Textes
```
| Anfrage | Strategie |
|---|---|
| Navigation (`index.html`, `./`) | **Network-first** mit `fetch(req, { cache: 'no-cache' })` (ETag-Revalidierung, umgeht GitHubs `max-age=600`), Timeout 3 s → Cache-Fallback. **Deshalb kann keine alte Version hängen bleiben:** online kommt immer das aktuelle HTML mit neuen `?v=`-Adressen. |
| URLs mit `?v=` (JS/CSS) | Cache-first in `ASSETS`, zur Laufzeit befüllt (keine Precache-Liste, die gepflegt werden müsste). Offline nach einem vollständigen Online-Besuch. |
| `audio/manifest.json` | Network-first, Fallback Cache. |
| `audio/**/*.mp3` | Cache-first in `AUDIO`, **Range-Anfragen** (Safari/iOS fragt Audio mit `Range` an) aus dem gecachten Blob als `206` beantworten – sonst spielt Safari aus dem Cache nichts ab. Begrenzung: max. 2 500 Einträge (älteste löschen). |
| alles andere / fremde Origins / Nicht-GET | nicht anfassen |

- `install`: `skipWaiting()`, nur `./`, `manifest.webmanifest`, Icons vorab laden.
- `activate`: `clients.claim()`; löschen **nur** Caches mit `name.startsWith('dt-assets-') && name !== ASSETS`.
- Seite: Registrierung nur bei `https:` oder `localhost`; `?nosw` in der URL meldet alle Worker dieses Scopes ab und lädt neu (für QA/Playwright und Support). Bei `visibilitychange` höchstens 1×/Stunde `reg.update()` (installierte App bleibt tagelang offen).
- **Notschalter vorbereiten** (`docs/` oder Kommentar in `sw.js`): Ersatz-`sw.js`, die sich selbst abmeldet (`self.registration.unregister()`) und alle `dt-assets-*` löscht – eine Auslieferung genügt, um jeden kaputten Worker loszuwerden.
- `bump-version.py` ersetzt auch `VERSION` in `sw.js`; der Validator prüft: alle `?v=` in `index.html` == `APP_VERSION` == `sw.js`-`VERSION`.
- **Tages-Erinnerung (.ics):** `buildIcs({ hh, mm, lang, url })` erzeugt `VCALENDAR` mit `CRLF`, `UID:dt-reminder-<pid>@sinandmrr.github.io`, `DTSTART` als **schwebende Ortszeit** (ohne `TZID`/`Z`), `RRULE:FREQ=DAILY`, `VALARM` (`TRIGGER:PT0M`), Titel/Text in der Oberflächensprache, Link zur App. Download als Blob `text/calendar`. Hinweis: Zeit ändern = altes Ereignis im Kalender löschen.

### Umsetzung (18.11.2026) – Abweichungen/Ergänzungen
- Vorab geladene Dateien (`manifest.webmanifest`, Icons ohne `?v=`): network-first, offline aus dem Cache.
- `audio/manifest.json` liegt in `dt-audio-v1` (ohne `?v=` gespeichert) und übersteht damit Updates zusammen mit den MP3s; die 2 500er-Grenze zählt nur MP3s.
- Nach jeder Navigation werden zusätzlich **nachweislich ältere** `dt-assets-*`-Caches gelöscht (Versionsvergleich JJJJ-MM-TT.n numerisch) – verhindert, dass ein abgelöster Worker seinen alten Cache wieder anlegt.
- `?nosw`: Navigation geht am Worker vorbei; `js/pwa.js` meldet ab, löscht `dt-assets-*`, lädt ohne `?nosw` neu und merkt sich das per `sessionStorage['dt-nosw']` bis der Tab geschlossen wird.
- Notschalter `docs/sw-notschalter.js` löscht nur `dt-assets-*` (Audio bleibt).
- **Kein `"id": "./"` im Manifest** – Chrome löst das gegen den Origin auf (Kollision mit anderen Repos auf sinandmrr.github.io).

### Alternativen
| Option | Pro | Contra |
|---|---|---|
| **Network-first HTML + versionierte Assets (gewählt)** | kein Hängenbleiben, kaum Pflege | erster Start offline nur nach einem vollständigen Online-Besuch |
| Alles precachen + Update-Banner „Neu laden“ | vollständig offline ab Installation | Precache-Liste pflegen; klassische „alte Version“-Falle, wenn Nutzer das Banner ignoriert |
| Workbox | erprobt (inkl. Range-Plugin) | externe Abhängigkeit/Build oder CDN – widerspricht „ohne Build, keine Abhängigkeiten“ |
| Kein Service Worker | null Risiko | kein Offline, Audio nicht vorgeladen |

### Folgen/Risiken
- Service Worker **als letztes** Feature ausliefern (schwerste Rückabwicklung).
- Alte App aus dem Cache + neue Daten ist offline möglich → genau dafür die Downgrade-Regel aus ADR-1.

---

## ADR-9: Abzeichen und Niveau-Zertifikat

### Entscheidung
- **Abzeichen** als Liste in `js/core/badges.js`: `{ id: 'first-topic', test: ctx => … , title:[de,tr], icon }`. IDs sind fest wie Inhalts-IDs. Geprüft am Sitzungsende und beim Dashboard-Aufbau (nicht bei jedem Render). Verliehen = `badges[id] = ts`, **nie entzogen** (auch wenn neue Inhalte die Prozente senken).
- **Zertifikat** `#/certificate/<level>`: Bedingung (Didaktik bestätigt): ≥ 80 % der zählbaren Aufgaben des Niveaus richtig (per Einstufung beherrschte Themen fallen aus dem Nenner) **und** ≥ 70 % der Wörter Fach ≥ 3. Canvas 1754 × 1240 (A4 quer, 150 dpi), Logo **mit Canvas-Pfaden gezeichnet** (kein SVG-Bild → keine Tainted-Canvas-/iOS-Probleme), Schrift `system-ui`. Pflichtzeile in beiden Sprachen: „Selbstlern-Nachweis – kein offizielles Sprachzertifikat (z. B. Goethe, telc, Yunus Emre)“. Ausgabe `canvas.toBlob` → `a[download]`; Fallback: Bild in neuem Tab (lange drücken zum Sichern).

---

## ADR-10: Code-Struktur – Aufteilung ohne Build

### Kontext
`js/app.js` wächst mit diesen Features auf geschätzt 2 500+ Zeilen. Die Tools (`validate.js`, `extract-texts.js`) laden **alle** `<script>` aus `index.html` außer `app.js` in eine Node-VM – jede neue Datei mit DOM-/`localStorage`-Zugriff beim Laden lässt den Validator (und damit die GitHub Action) abstürzen.

### Entscheidung
**Klassische Skripte mit globalem Namensraum `window.DT`, aufgeteilt in Kern (rein, testbar) und Ansichten.**

```
js/core/config.js     DT.APP_VERSION, DT.SCHEMA, Schlüsselnamen
js/core/util.js       esc, md, plain, norm, fold, shuffle, levRatio
js/core/time.js       dayNum, dayKey, daysSince, isoWeek
js/i18n.js            Texttabelle T (Lehrer können Oberflächentexte ändern, ohne Logik anzufassen)
js/core/storage.js    load, migrate, migrateProfile, save, backup, mergeProfile, exportData  (localStorage wird übergeben → in Node testbar)
js/core/srs.js        ADR-2
js/core/daily.js      Ziel, Log, Streak, buildMix
js/core/audio.js      Piper/Gerätestimme, playSeq, Spracherkennung
js/core/index.js      EXI, WI, resolveItem, isCountable, Statistik-Cache
js/core/badges.js
js/views/*.js         words.js, daily.js, placement.js, certificate.js … (neue Ansichten direkt hier)
js/app.js             Router, Shell, Player, bestehende Ansichten, Ereignis-Verteiler – zuletzt geladen
sw.js                 ADR-8
```
Jede Datei: `(function (DT) { 'use strict'; … })(window.DT = window.DT || {});` Ansichten registrieren sich (`DT.views.words = function (route) {…}`), Aktionen ebenso (`DT.actions['word-known'] = function (el, ev) {…}`) – der große `switch` in `app.js` ruft am Ende `DT.actions[act]` auf. **Kern-Dateien dürfen beim Laden weder `document` noch `localStorage` anfassen.**

**Reihenfolge (jeder Schritt einzeln auslieferbar, Nutzerdaten nie im Risiko):**
1. **Werkzeuge absichern (kein App-Code):** Tools laden nur noch `js/curriculum.js` + `js/content/*` (Regex statt „alles außer app.js“). Validator prüft Versionsgleichheit (`?v=`, `APP_VERSION`, später `sw.js`) und ID-Präfixe. Neu `tools/test-core.js` (Node, ohne Abhängigkeiten) + Workflow-Schritt.
2. **`config.js`, `util.js`, `time.js`, `storage.js` herauslösen – reine Verschiebung, kein Verhalten ändern.** Test: Fixtures `tools/fixtures/v1.json`, `v2.json` (echte, anonymisierte Exporte) → `migrate()` → jede alte `prog`-Information ist noch da. Browsertest mit echtem v2-Stand.
3. **Speicher härten** (Ist-Zustand Nr. 1–6): Rückgabewert von `save()`, Banner, `storage`-Event, Backup vor destruktiven Aktionen, `Math.max`-Version, `try/catch` um Migration, Export v2/Import-Merge. Noch Schema 2.
4. **`audio.js`** mit Optionen-API, ein `<audio>`-Element, `canPlay`, `speak` aus der Statistik nehmen (Nr. 9–11).
5. **`srs.js`, `daily.js` (rein, mit Tests) + Migration v2 → v3** in **einem** Release (inkl. `dt-backup-s2`).
6. **Wortschatz-Ansichten** (sobald die Lehrer A1-Wörter liefern), dann **Tagesmix/Streak/Lingo**.
7. **Einstufungstest**, dann **Abzeichen/Zertifikat**.
8. **Service Worker + .ics** zuletzt, mit vorbereitetem Notschalter.
9. Bestehende Ansichten aus `app.js` nach `js/views/` nur verschieben, wenn sie ohnehin geändert werden (kein Umbau auf Vorrat).

### Alternativen
| Option | Aufwand | Pro | Contra |
|---|---|---|---|
| **Klassische Skripte + `window.DT` (gewählt)** | gering | wie bisher, `file://`/lokal öffnen funktioniert, Node-VM-Tests einfach | Ladereihenfolge in `index.html` von Hand; viele `?v=` (übernimmt `bump-version.py`) |
| ES-Module (`type="module"`) | mittel | echte Imports, keine Globals | `file://` geht nicht (CORS); Cache-Busting der Importe braucht Import-Map; Tools müssten ESM laden |
| Alles in `app.js` lassen | null | kein Risiko jetzt | 2 500+ Zeilen, Migration/SRS nicht isoliert testbar, Merge-Konflikte im Team |
| Build-Tool (esbuild/Vite) | mittel–hoch | Bündeln, Minify | widerspricht Projektregel „ohne Build“, GitHub Action für Deploy nötig |

### Folgen/Risiken
- `index.html` bekommt ~12 Skript-Tags; Ladeleistung über HTTP/2 unkritisch. Bei A1–C2 werden die Inhaltsdateien (geschätzt 2–3 MB JS) das eigentliche Gewicht – **Auslöser** > 1,5 MB: Inhalte je Niveau nachladen (dafür braucht der Lehrplan dann Aufgabenzahlen als Metadaten, erzeugt per Tool).
  → **Umgesetzt in ADR-15** (`docs/adr-15-nachladen.md`): Pakete je Kurs+Niveau über `js/core/loader.js`, Aufgabenzahlen im erzeugten `js/content/manifest.js` (`node tools/build-manifest.js`); Inhaltsdateien stehen nicht mehr in `index.html`.
- CLAUDE.md-Tabelle „Dateien“ und README nach Schritt 2 anpassen (Entwickler).

---

## Testplan (Pflicht vor Auslieferung von Schema 3)

1. `node tools/test-core.js`: Migration v1→v3 und v2→v3 (Fixture), Migration zweimal hintereinander = gleiches Ergebnis (idempotent), Daten mit `v:4` bleiben unverändert, `mergeProfile` (Konfliktfälle), SRS-Fachwechsel, Streak-Fälle aus ADR-4, Speicher-Quota-Simulation (Fake-Storage wirft `QuotaExceededError` → `save()` liefert `false`).
2. Browser (Playwright): zwei Tabs gleichzeitig lernen → kein Verlust; Export → neues Profil/Browser → Import → identischer Stand; Reset → `dt-backup` vorhanden.
3. Echtgeräte: iPhone Safari + Home-Bildschirm-App (Dialogkette, Audio aus SW-Cache mit Range, Mikrofon), Android Chrome, Desktop Firefox/Edge.
4. Service Worker: Version A ausliefern → Version B ausliefern → Seite neu öffnen zeigt B ohne Cache leeren; Offline-Start; `?nosw`; Notschalter einmal auf einer Test-Kopie ausprobieren.

## Quellen
- MDN: Storage quotas and eviction criteria – https://developer.mozilla.org/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
- WebKit: Updates to Storage Policy (Safari 17) – https://webkit.org/?p=14403
- web-features Explorer: Speech recognition – https://web-platform-dx.github.io/web-features-explorer/features/speech-recognition
- Chrome for Developers: Fresher service workers, by default – https://developer.chrome.com/blog/fresher-sw
