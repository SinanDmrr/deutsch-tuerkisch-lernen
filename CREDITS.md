# Nachweise & Lizenzen fremder Bestandteile

Stand: 18.11.2026 · Diese Datei listet alles, was **nicht** von uns selbst stammt, wofür wir es nutzen und unter welcher Lizenz.
Dieselben Angaben stehen für Nutzer auf der Seite **„Rechtliches“** der Webseite (`#/legal`).
Die Lizenzen der Stimmen werden bei jeder Audio-Erzeugung automatisch aus der offiziellen Modellkarte gelesen
(`tools/gen_audio.py`, Ergebnis in `audio/manifest.json` → `licenses`); Stimmen ohne freie Lizenz werden automatisch abgelehnt.

> Hinweis: Das ist eine sorgfältige Recherche, aber keine Rechtsberatung.

## Eigene Inhalte

Lehrplan, Erklärungen, Übungen, Wortlisten, Beispielsätze, Dialoge, Texte, Grafiken, das Maskottchen „Lingo“, das Design und der Code
sind selbst erstellt – © 2026 Sinan Demir, alle Rechte vorbehalten (siehe [LICENSE](LICENSE)).
Es wurden keine Texte, Übungen oder Grafiken aus anderen Apps, Kursen oder Büchern übernommen.

## Sprachausgabe

| Bestandteil | Von | Lizenz | Wie wir es nutzen |
|---|---|---|---|
| [Piper](https://github.com/OHF-Voice/piper1-gpl) (Text-zu-Sprache) | Michael Hansen / Rhasspy, heute Open Home Foundation | GPL-3.0-or-later (früheres Repo [rhasspy/piper](https://github.com/rhasspy/piper): MIT) | Läuft nur auf den GitHub-Servern (GitHub Actions), um MP3-Dateien zu erzeugen. Die Software selbst wird **nicht** mit der Webseite ausgeliefert. Laut [GNU-FAQ](https://www.gnu.org/licenses/gpl-faq.html#GPLOutput) fällt die Ausgabe eines GPL-Programms grundsätzlich nicht unter die GPL. |
| [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (Aussprache-Regeln, in Piper enthalten) | eSpeak-NG-Projekt | GPL-3.0 | wie Piper: nur zur Erzeugung, nicht ausgeliefert |
| [Piper-Stimmmodelle](https://huggingface.co/rhasspy/piper-voices) | Michael Hansen / Rhasspy | Repository: MIT; je Stimme gilt zusätzlich die Lizenz ihres Datensatzes (unten) | Modelle werden nur auf GitHub-Servern geladen, nicht ausgeliefert. Ausgeliefert werden die erzeugten MP3-Aufnahmen. |
| [FFmpeg](https://ffmpeg.org/legal.html) | FFmpeg-Projekt | LGPL-2.1+/GPL (je nach Build) | nur auf GitHub-Servern zur Umwandlung WAV → MP3, nicht ausgeliefert |

### Genutzte Stimmen

| Stimme | Sprache | Datensatz (Sprecheraufnahmen) | Lizenz des Datensatzes | Modellkarte |
|---|---|---|---|---|
| kerstin (low) | Deutsch ♀ | [rhasspy/dataset-voice-kerstin](https://github.com/rhasspy/dataset-voice-kerstin) | CC0 | [MODEL_CARD](https://huggingface.co/rhasspy/piper-voices/blob/v1.0.0/de/de_DE/kerstin/low/MODEL_CARD) |
| thorsten (high) | Deutsch ♂ | [Thorsten-Voice](https://github.com/thorstenMueller/Thorsten-Voice) von Thorsten Müller | CC0 | [MODEL_CARD](https://huggingface.co/rhasspy/piper-voices/blob/v1.0.0/de/de_DE/thorsten/high/MODEL_CARD) |
| fahrettin (medium) | Türkisch ♂ | [Nabu Casa / OHF Voice Datasets](https://github.com/OHF-Voice/voice-datasets) | CC0 | MODEL_CARD im Repo rhasspy/piper-voices (`tr/tr_TR/fahrettin/medium`) |
| fettah (medium, nur Hörprobe) | Türkisch | [Nabu Casa / OHF Voice Datasets](https://github.com/OHF-Voice/voice-datasets) | CC0 | [MODEL_CARD](https://huggingface.co/rhasspy/piper-voices/blob/6fb8245d6d27fef8988272e0c8e9f5018da1bbbf/tr/tr_TR/fettah/medium/MODEL_CARD) |

CC0 verlangt keine Namensnennung – wir nennen die Sprecherinnen, Sprecher und Projekte trotzdem, weil sie die Arbeit gemacht haben.
Die Nabu-Casa-Datensätze bitten ausdrücklich darum, das Repository zu nennen.

**Bewusst nicht (mehr) genutzt** (18.11.2026 entfernt):
- `tr_TR-dfki-medium` – Datensatz unter CC BY-NC-SA 4.0 (*nicht kommerziell*)
- `de_DE-ramona-low`, `de_DE-eva_k-x_low`, `de_DE-karlsson-low` – M-AILABS-Lizenz; wurden nicht gebraucht

**Offener Punkt (transparent):** Laut Modellkarten wurden die Stimmen aus einer englischen Grundstimme weitertrainiert
(„Finetuned from U.S. English lessac/ryan voice“). Für den Lessac-Datensatz gilt eine Forschungslizenz; ob sie sich auf
weitertrainierte Stimmen erstreckt, ist in der Community umstritten ([Diskussion](https://github.com/rhasspy/piper/discussions/271)).
Für die jetzige kostenlose, werbefreie Nutzung sehen wir das als vertretbar an. **Vor einer kommerziellen Nutzung** (z. B. Bezahlversion)
muss das neu geprüft werden – notfalls mit selbst trainierten Stimmen auf rein freien Datensätzen.

## Geräte- und Browserfunktionen

- **Gerätestimmen** (nur Ausweichlösung, wenn eine Aufnahme fehlt): Web Speech API des Browsers, läuft lokal auf dem Gerät.
- **Spracherkennung** (Übung „Sprechen“, nur nach Tippen aufs Mikrofon): Web Speech API des Browsers. Je nach Browser
  wird die Aufnahme an dessen Anbieter geschickt (z. B. Chrome → Google). Wir selbst empfangen und speichern nichts.

## Hosting

- **GitHub Pages / GitHub Actions** (GitHub, Inc.) – Hosting der Webseite und automatische Erzeugung der Aufnahmen.
  Laut [GitHub-Dokumentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)
  wird die IP-Adresse von Besuchern aus Sicherheitsgründen protokolliert.
- **Hugging Face** – Bezugsquelle der Stimmmodelle (nur durch GitHub Actions, nicht durch Besucher).

## Ideen & Methoden, auf denen das Lernen aufbaut

Die Umsetzung ist eigen, die Ideen stammen von anderen – danke:
- **Lernkartei mit Fächern** – Sebastian Leitner („So lernt man lernen“, 1972)
- **Verteiltes Wiederholen / Vergessenskurve** – Hermann Ebbinghaus („Über das Gedächtnis“, 1885) und die darauf aufbauende Forschung
- **Niveaustufen A1–C2** – Gemeinsamer Europäischer Referenzrahmen für Sprachen (GER/CEFR) des Europarats
- **Allgemeine Ideen aus Lern-Apps** (Tagesziel, Serie, Hörübungen) – nur die Idee, keine Texte, Grafiken oder Designs

## Keine weiteren Fremdbestandteile

Keine externen Schriftarten, keine CDNs, keine Analyse-/Tracking-Dienste, keine Werbung, keine Cookies.
Schrift = Systemschrift des Geräts, Emojis = Systemschrift des Geräts, Icons, Flaggen und Maskottchen = selbst gezeichnet.
