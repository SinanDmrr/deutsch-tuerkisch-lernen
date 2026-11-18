---
name: sparsam-arbeiten
description: Regeln, um im Projekt Deutsch ⇄ Türkçe mit wenig Tokens zu arbeiten – welche Rolle welches Modell nutzt, wie man große Dateien gezielt liest und Tests knapp hält. Vor jeder Aufgabe im Repo anwenden.
---

# Sparsam arbeiten

Das Projekt ist groß (`js/app.js` ≈ 180 KB ≈ 50 000 Tokens, Inhaltsdateien je 30–80 KB, Doku ≈ 130 KB).
Wer eine Datei ganz liest, verbraucht schnell mehr als die eigentliche Arbeit.

## Modell pro Rolle (steht im Frontmatter von `.claude/agents/*.md`)
| Rolle | Modell | Warum |
|---|---|---|
| `architekt`, `didaktik-produkt` | opus | Recherche, Planung, Risiken für Nutzerdaten – selten, aber folgenreich |
| `deutsch-lehrer`, `tuerkisch-lehrer` | sonnet | viel Text nach festem Format; Qualität sichert das Gegenlesen über Kreuz |
| `entwickler`, `qa-tester`, `ux-ui-designer` | sonnet | Umsetzung und Prüfung nach klaren Vorgaben |

Haupt-Chat: läuft meist auf **Sonnet** (wählt der Nutzer). Er steuert, prüft und committet. Wo Qualität entscheidet, gibt er die Arbeit an einen Agenten mit **`model: "opus"`** im Agent-Aufruf ab (überschreibt das Frontmatter).

### Wann Opus (Pflicht, auch wenn der Haupt-Chat Sonnet ist)
| Aufgabe | Wie |
|---|---|
| **Gegenlesen** neuer Inhalte (Muttersprachlichkeit, Fachfehler, falsch gewertete richtige Antworten) | jeweils andere Lehrkraft mit `model:"opus"` – Schreiben auf Sonnet, Prüfen auf Opus |
| Neues **Niveau planen** / Lehrplan, Didaktik-Recherche, **Abnahme** eines Niveaus | `didaktik-produkt` (opus) |
| **Speicherformat, Migration, Schema-Wechsel**, alles was Nutzerfortschritt gefährden kann | `architekt` (opus) plant; Umsetzung `entwickler` mit `model:"opus"` |
| Fehler, die nach **2 Versuchen** auf Sonnet nicht gelöst sind | gleiche Rolle erneut mit `model:"opus"` |
| Rechtliches/Lizenzen (neue Stimme, neue Fremdressource) | Recherche mit `model:"opus"` |

### Sonnet reicht
Inhalte nach festem Format schreiben, Features nach fertigem Plan, Bugfixes mit klarer Ursache, Browser-Tests, UX-Reviews, Commits, Statusberichte.

### Haupt-Chat auf Sonnet – Selbstkontrolle
- Agentenberichte nicht blind übernehmen: Validator, `test-core`, Browser-Smoke-Test selbst laufen lassen.
- Unsicher, ob eine Entscheidung wichtig ist? → lieber Opus-Agent fragen (kurzer Auftrag, kurze Antwort) als raten.

## Lesen
- **Nie ganze große Dateien lesen.** Erst die Stelle finden, dann nur den Bereich lesen:
  - Funktionen in app.js: `grep -n "^  function \|^function " js/app.js`
  - Übersetzungen: `grep -n "schlüssel:" js/app.js`
  - Doku-Abschnitte: `grep -n "^#" docs/architektur-a2.md` → nur den passenden Abschnitt mit `Read offset/limit`
- Inhaltsformate stehen in `CLAUDE.md` – nicht zusätzlich in alten Inhaltsdateien nachschlagen. Für den Stil **ein** vorhandenes Thema lesen (z. B. das erste in `de-a2.js`), nicht die ganze Datei.
- Wer eine Aufgabe vergibt, nennt Dateien und Zeilenbereiche gleich mit.

## Ausgaben
- Befehle mit langer Ausgabe kürzen: `| tail -20`, `| head`, `grep -c`.
- `node tools/test-core.js | tail -3` statt aller 1 500 Zeilen.
- Validator: `node tools/validate.js 2>&1 | tail -15`.

## Browser-Tests
- Nur die geänderten Ansichten prüfen; Konsolenfehler und DOM-Prüfungen per Skript statt Screenshots.
- Screenshots nur, wenn das Aussehen selbst geprüft wird (UX-Review), dann klein (390 px) und wenige.

## Berichte an den Hauptstrang
- Kurz: was geändert (Dateien, IDs), Prüfergebnis, offene Punkte – höchstens ~25 Zeilen. Keine Dateiinhalte zurückgeben.

## Gegenlesen
- Gegenlesende lesen nur die neuen Themen (per ID suchen), nicht die ganze Datei, und liefern eine knappe Liste: ID · Problem · Vorschlag.
