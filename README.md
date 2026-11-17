# Köprü – Deutsch ⇄ Türkçe

Lernplattform für **Türkischsprechende, die Deutsch lernen** (Erklärungen auf Türkisch) und **Deutschsprechende, die Türkisch lernen** (Erklärungen auf Deutsch) – Ziel: von null bis C1.

- Reiter: **Dashboard**, **Lektionen**, **Meine Lücken**, **Gesamtüberblick**, **Einstellungen**
- Jedes Thema: Erklärung → Übungen (Multiple Choice, Lückentext, Satzbau, Zuordnen) → „Lösung prüfen“ mit Erklärung, *warum* die eigene Antwort falsch und die Lösung richtig ist
- Fehler werden pro Profil im `localStorage` gespeichert und lassen sich am Kapitelende oder gesammelt wiederholen
- Fortschritt pro Niveau (A1–C1) in Prozent, Light/Dark-Mode, mehrere Profile pro Gerät, Export/Import, Vorlesefunktion (Browser-Sprachausgabe)
- Keine Abhängigkeiten, kein Build – reines HTML/CSS/JS

## Auf GitHub Pages veröffentlichen

1. Auf GitHub ein neues, **öffentliches** Repository anlegen (z. B. `koepru`).
2. Den Inhalt dieses Ordners hochladen (*Add file → Upload files*, Ordner per Drag & Drop) und committen.
3. *Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.*
4. Nach 1–2 Minuten ist die Seite unter `https://<dein-name>.github.io/koepru/` erreichbar.

## Inhalte erweitern

- Lehrplan (alle Themen A1–C1): `js/curriculum.js`
- Inhalte je Niveau: `js/content/de-a1.js`, `js/content/tr-a1.js` – neue Dateien (z. B. `de-a2.js`) in `index.html` einbinden.
- Übungsformat steht oben in `js/content/de-a1.js`. **Neue Aufgaben nur hinten anhängen** – die Position ist die ID, unter der der Fortschritt gespeichert wird.
