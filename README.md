# Deutsch ⇄ Türkçe

Lernplattform für **Türkischsprechende, die Deutsch lernen** (Erklärungen auf Türkisch) und **Deutschsprechende, die Türkisch lernen** (Erklärungen auf Deutsch) – Ziel: von null bis C2.

- Reiter: **Dashboard**, **Lektionen**, **Meine Lücken**, **Gesamtüberblick**, **Einstellungen**
- Jedes Thema: Erklärung → Übungen (Multiple Choice, Lückentext, Satzbau, Zuordnen) → „Lösung prüfen“ mit Erklärung, *warum* die eigene Antwort falsch und die Lösung richtig ist
- Fehler werden pro Profil im `localStorage` gespeichert und lassen sich am Kapitelende oder gesammelt wiederholen
- Fortschritt pro Niveau (A1–C2) in Prozent, Light/Dark-Mode, mehrere Profile pro Gerät, Export/Import, Vorlesefunktion (Browser-Sprachausgabe)
- Keine Abhängigkeiten, kein Build – reines HTML/CSS/JS

## Auf GitHub Pages veröffentlichen

1. Repository: https://github.com/SinanDmrr/deutsch-tuerkisch-lernen
2. *Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.*
3. Seite: https://sinandmrr.github.io/deutsch-tuerkisch-lernen/

## Inhalte erweitern

- Lehrplan (alle Themen A1–C2): `js/curriculum.js`
- Inhalte je Niveau: `js/content/de-a1.js`, `js/content/tr-a1.js` – neue Dateien (z. B. `de-a2.js`) in `index.html` einbinden.
- Bei jedem Release `APP_VERSION` in `js/app.js` und die `?v=…`-Angaben in `index.html` erhöhen (damit Browser keine alten Dateien aus dem Cache nehmen).

## Updates ohne Datenverlust für die Nutzer

Der Fortschritt liegt im Browser der Nutzer (`localStorage`, Schlüssel `dt-data`) und hängt an der **festen ID jeder Aufgabe** (`id: "tr-a1-09.3"`), nicht an ihrer Position.

- Eine vergebene ID **nie ändern** und **nie wiederverwenden**.
- Neue Aufgaben → neue ID (nächste freie Nummer im Thema). Sie erscheinen für alle als „offen“, der Rest bleibt erhalten.
- Text verbessern, Reihenfolge ändern, Aufgabe in ein anderes Thema verschieben → Fortschritt bleibt.
- Aufgabe löschen → ihr Eintrag wird nur nicht mehr gezählt (nichts wird gelöscht).
- Ändert sich das Speicherformat, kommt in `migrate()` (`js/app.js`) ein neuer Schritt dazu; vorher wird automatisch eine Sicherung unter `dt-backup` abgelegt.
- Nutzer können ihren Stand in den Einstellungen exportieren/importieren (z. B. für ein neues Gerät).

## Sprachausgabe (Piper TTS, Open Source)

- Beispiele, Vokabeln und Lösungen (Lückentext/Satzbau) werden mit **Piper**-Stimmen vorgelesen, die **GitHub Actions** automatisch erzeugt (`.github/workflows/tts.yml`).
- Bei jedem Push mit geänderten Inhalten: `tools/extract-texts.js` sammelt die Texte → `tools/gen_audio.py` erzeugt nur **neue** MP3s → Commit „Audio aktualisiert (Piper TTS)“ durch `github-actions[bot]`.
- Stimmen (weiblich/männlich je Sprache) und Hörproben: `tools/tts-voices.json`. Lizenz der Stimmen siehe jeweilige MODEL_CARD auf https://huggingface.co/rhasspy/piper-voices.
- Fehlt eine Audiodatei (z. B. direkt nach einem Update, bevor die Action fertig ist), nutzt die Seite eine **passende Gerätestimme** – nie eine fremdsprachige.
- Manuell neu erzeugen: Repo → *Actions* → „Sprachausgabe (Piper TTS)“ → *Run workflow*.
