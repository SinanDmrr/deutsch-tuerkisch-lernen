# Deutsch ⇄ Türkçe – Projektregeln für das Team

Lernplattform: **Deutsch für Türkischsprechende** (Kurs `de`, Erklärungen/Oberfläche auf Türkisch) und **Türkisch für Deutschsprechende** (Kurs `tr`, Erklärungen/Oberfläche auf Deutsch). Ziel: von null bis C2. Reines HTML/CSS/JS ohne Build, gehostet auf GitHub Pages (`https://sinandmrr.github.io/deutsch-tuerkisch-lernen/`).

## Grundsätze
1. **Neutral:** Keine Sprache/Nation wird bevorzugt. Allgemeine Seiten heißen „Deutsch ⇄ Türkçe“; Kursseiten „Almanca Öğren“ bzw. „Türkisch lernen“.
2. **Das Beste für Lernende, nichts kopieren:** Bewährte Ideen anderer Apps (Spaced Repetition, Streaks, Hören, Sprechen …) dürfen umgesetzt werden – Texte, Sätze, Grafiken, Namen und Designs werden **immer selbst erstellt**, nie aus anderen Apps/Büchern übernommen.
3. **Erklären statt nur abfragen:** Jede Aufgabe erklärt, *warum* die Lösung richtig ist, und häufige falsche Antworten bekommen eine eigene Erklärung (`why` / `wrong`).
4. **Muttersprachlich formulieren:** Türkische Texte klingen wie von einem türkischen Muttersprachler, deutsche wie von einem deutschen – nie 1:1 übersetzt.
5. **Kein Druck:** Motivation ja (Lingo, Tagesziel, Streak), aber keine Ranglisten gegen Fremde, keine Schuldgefühle.
6. **Selbstkritisch:** Jede Änderung wird geprüft (Validator, Browser-Test, Review durch die passende Rolle), bevor sie als fertig gilt.

## Fortschritt der Nutzer darf NIE verloren gehen
- Gespeichert in `localStorage` unter `dt-data` (Präfix `dt-`; andere Seiten derselben Domain nutzen andere Präfixe).
- Jede Aufgabe, jedes Wort, jeder Dialog hat eine **feste ID**. IDs nie ändern, nie wiederverwenden. Neue Einträge → neue ID.
- Texte verbessern, umsortieren, verschieben, löschen ist erlaubt – der Fortschritt hängt an der ID.
- Änderungen am Speicherformat nur über einen neuen Schritt in `migrate()` (`js/app.js`); vorher wird automatisch `dt-backup` geschrieben.
- Bei jedem Release `python3 tools/bump-version.py` (erhöht `APP_VERSION` in `js/app.js` **und** alle `?v=` in `index.html`).

## Git
- Commits als `Sinan Demir <106678135+SinanDmrr@users.noreply.github.com>` direkt auf `main` (zählt für die Contributions des Besitzers).
- `github-actions[bot]` committet Audio („Audio aktualisiert (Piper TTS)“) → **vor jedem Push `git pull --rebase origin main`**.
- Kleine, thematische Commits mit deutscher Beschreibung.

## Prüfen vor jedem Commit
- `node tools/validate.js` – Inhaltsprüfung (IDs eindeutig, Antworten gültig, Erklärungen vorhanden). Läuft auch als GitHub Action.
- `node --check js/*.js js/content/*.js`
- Browser-Test (Playwright/Chrome) der geänderten Ansichten, hell und dunkel, Desktop und Handy-Breite.

## Dateien
| Pfad | Inhalt |
|---|---|
| `js/curriculum.js` | Lehrplan A1–C2 beider Kurse (Themenliste) |
| `js/content/<kurs>-<niveau>.js` | Grammatik-Themen: Erklärung + Übungen |
| `js/content/<kurs>-<niveau>-vocab.js` | Wortschatz eines Niveaus |
| `js/content/<kurs>-<niveau>-dialogs.js` | Alltagsdialoge mit Verständnisfragen |
| `js/app.js` | gesamte App-Logik |
| `css/style.css` | Design (hell/dunkel) |
| `tools/` | Validator, Text-Extraktion & Audio-Erzeugung (Piper TTS) |
| `audio/` | erzeugte MP3s – **nicht von Hand bearbeiten** |

## Inhaltsformate
Übungen (in `exercises`):
- `mc`: `{ id, t:"mc", q, o:[…], a:Index, why:{Index:"warum falsch"}, e:"Erklärung" }` – jede falsche Option braucht `why`.
- `gap`: `{ id, t:"gap", q:"… ___ …", a:[richtige Antworten], wrong:{"häufiger Fehler":"warum"}, cs:true?, e }`
- `order`: `{ id, t:"order", q, w:[Wörter/Bausteine], a:[richtige Sätze], e }`
- `match`: `{ id, t:"match", q, p:[[links, rechts], …], e }`
- `listen`: `{ id, t:"listen", say:"Zieltext (wird vorgelesen)", q, o:[…], a, why, e }` – hören und wählen
- `dictation`: `{ id, t:"dictation", say:"Zieltext", a:[Schreibweisen], wrong, e }` – hören und schreiben
- `speak`: `{ id, t:"speak", say:"Satz zum Nachsprechen", e }` – Spracherkennung, wo verfügbar

Wortschatz (`K.addVocab("de-a1", [...])`): `{ id:"de-a1.w001", t:"Zielwort (DE-Nomen mit Artikel)", pl:"Plural (nur DE-Nomen)", pos:"n|v|adj|adv|phr|x", n:"Übersetzung", ex:"eigener Beispielsatz", exn:"Übersetzung", topic:"Wortfeld-ID aus K.wordfields", note:"optional: typischer Fehler/Hinweis in der Erklärsprache" }`

Dialoge (`K.addDialog(id, {...})`): `{ level, title, sub, lines:[{ s:"Sprechername", g:"f|m", t:"Zielsprache", n:"Übersetzung" }], questions:[Übungen wie oben] }`

## Team (`.claude/agents/`)
`architekt`, `entwickler`, `ux-ui-designer`, `qa-tester`, `deutsch-lehrer`, `tuerkisch-lehrer`, `didaktik-produkt` – jede Rolle hat eigene Checklisten und passende Skills.
