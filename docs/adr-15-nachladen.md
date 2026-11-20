# ADR-15: Inhalte je Kurs und Niveau nachladen

> Nummer 15, weil ADR-14 („Stimmen pro Sprecher“, `docs/architektur-a2.md`) schon vergeben ist.
> Status: **vorgeschlagen** (Architekt, 2026-11-20). Voraussetzung für B1-Paket 1 (`docs/b1-konzept.md` §0 Nr. 8, §7 Nr. 1, Paket 0b).

## 1. Kontext

**Messung (Stand `?v=2026-11-20.2`, `wc -c`, `gzip -9`):**

| Teil | roh | gzip |
|---|---|---|
| `js/content/*.js` (16 Dateien) | 1 562 KB | 461 KB |
| davon de-a1 / tr-a1 | 154 / 147 KB | 46 / 43 KB |
| davon de-a2 / tr-a2 | 605 / 657 KB | 176 / 198 KB |
| App + Kern (`js/*.js`, `js/core/*.js`, davon `app.js` 261 KB) | 372 KB | 115 KB |
| **Summe beim Start heute** | **1 934 KB** | **576 KB** |

Alle 16 Inhaltsdateien stehen als `<script>` in `index.html` und werden bei jedem Start geparst – auch der Kurs, den der Nutzer gar nicht lernt. ADR-10 hat als Auslöser „> 1,5 MB Inhalte“ festgelegt; das ist überschritten. Mit B1 (≈ +650 KB roh je Kurs) wären es ≈ 3,2 MB, bis C2 ein Vielfaches. Übertragen wird komprimiert (≈ 0,6 MB), teuer am Handy ist vor allem das Parsen/Ausführen von 1,9 MB JS.

**Ist-Zustand, der die Lösung bestimmt:**
- Inhaltsdateien registrieren sich nur (`K.add`, `K.addVocab`, `K.addDialog`, `K.addText`, `K.addWrites` in `js/curriculum.js`). Reihenfolge der Dateien untereinander ist egal; nur `curriculum.js` muss vorher da sein und `DT.catalog.register(K)` danach laufen.
- `DT.catalog.register(K)` (`js/core/catalog.js`) baut den Aufgaben-Index `EXI` komplett neu und ist idempotent (Schreibaufgaben per `indexOf` geschützt). `app.js` hält `var EXI` (Zeile ~465).
- **Alle IDs tragen Kurs und Niveau im Präfix:** `de-a2-03.5`, `de-a2.w001`, `de-a2-r01.q1`, `de-a1-d01`, `de-a2-s01` → `de-a2`. Daraus lässt sich ohne Inhalt ablesen, welche Niveaus ein Profil schon benutzt.
- Fortschritt zu Aufgaben, die (noch) nicht geladen sind, bleibt erhalten und wird nur nicht gezählt (Grundsatz in `app.js` beim Laden). Kein Codepfad löscht `prog`/`srs`-Einträge, weil Inhalt fehlt (geprüft: Löschungen nur bei Nutzeraktionen und archivierten Schreibtexten).
- Service Worker: URLs mit `?v=` werden zur Laufzeit cache-first in `dt-assets-<VERSION>` abgelegt; jede neue Version löscht den alten Cache. Vorab gecacht werden nur Startseite, Web-Manifest, Icons.
- `tools/validate.js` und `tools/extract-texts.js` lesen die Dateiliste aus den `<script>`-Tags von `index.html`; der Validator verlangt, dass jede Inhaltsdatei dort steht.

## 2. Entscheidung

**Klassisches dynamisches Script-Laden je Kurs+Niveau („Paket“ `de-a2`) mit einem erzeugten Manifest. Kein ES-Modul, kein Build, kein Formatwechsel für Lehrer.**

### 2.1 Manifest `js/content/manifest.js` (erzeugt, nie von Hand)
- Erzeugt von `tools/build-manifest.js` (Node, liest alle `js/content/<kurs>-<niv>*.js` per Dateiname, lädt sie wie der Validator in eine VM).
- Wird **synchron** direkt nach `js/curriculum.js` geladen und ruft `K.setManifest({...})` auf. Inhalt je Paket:
  `{ files:[…], bytes, topics:{ <id>:{ n:<zählbare Aufgaben>, skill } }, dialogs:[{id,title,sub,n}], texts:[{id,kind,title,sub,n}], writes:<Anzahl>, words:<Anzahl>, wordsByField:{…} }`
- Geschätzt 5–10 KB für A1–C2 beider Kurse. Neue Inhaltsdatei = Datei anlegen + `node tools/build-manifest.js`; `index.html` muss nicht mehr angefasst werden (vorher Pflicht).
- **Eine Quelle für Zahlen:** `DT.catalog.levelSummary(K, key)` liefert dieselbe Form aus geladenem Inhalt *oder* aus dem Manifest. Dashboard-Balken, `levelHas`, „im Aufbau x von n“, Wortschatzzähler, Zertifikats-Voraussetzungen für **nicht geladene** Niveaus lesen nur diese Funktion. Nicht geladene Niveaus haben laut Regel 2.2 keinen Fortschritt → 0 %, nur Summen nötig.

### 2.2 Welche Pakete geladen werden (`DT.loader`, neu `js/core/loader.js`, rein)
`neededLevels(profil, kurs, route)` =
1. Niveaus des **aktiven Kurses**, zu denen das Profil Einträge hat (Präfix-Scan über `prog`, `srs`, `skip`, `place`, `writes`) – nötig für Tagesmix, Wiederholung, „Meine Lücken“, Zertifikat;
2. Niveau der aktuellen Route (`#/topic/de-b1-03` → `de-b1`);
3. für neue Nutzer: das erste Niveau mit Inhalt (A1).

Der andere Kurs wird nie mitgeladen. Weitere Pakete lädt die Ansicht bei Bedarf: Lektionsliste eines Niveaus, Wortschatz-Filter nach Niveau, Einstufungstest (A1+A2), Kurswechsel, Profilwechsel.

`DT.loader.ensure(keys) → Promise`: fügt je Datei `<script src="js/content/<f>?v=<APP_VERSION>">` ein (funktioniert auch unter `file://`), merkt sich jede Datei als Promise (**nie doppelt laden** – `addVocab` hängt sonst Wörter doppelt an, `addWrites` meldet Duplikate), ruft danach `EXI = DT.catalog.register(K)` und invalidiert Kern-Caches (Statistik, Wortindex). Die DOM-Funktion wird injiziert → in Node mit `vm` testbar; beim Laden der Datei kein DOM-Zugriff (ADR-10).

### 2.3 Start, Ladezustand, Fehlerfall
- Start: Shell (Kopf, Reiter) sofort zeichnen, im Inhaltsbereich „Lädt …“ / „Yükleniyor …“; nach `ensure(neededLevels)` normales `render()`. `render()` bleibt synchron; nur Router, Kurs-/Profilwechsel und die genannten Ansichten warten auf `ensure`.
- Fehler (Skript-`onerror` oder 15 s Zeitlimit): Karte in der Oberflächensprache, z. B. „Dieses Niveau ist auf dem Gerät noch nicht gespeichert und du bist offline. Verbinde dich und tippe auf ‚Erneut versuchen‘.“ (bei `navigator.onLine === false`) bzw. „Konnte nicht geladen werden“ + Knopf `retry-load`. Kein Hilfe-Fenster. Fehlgeschlagene Promise wird verworfen, damit „Erneut versuchen“ wirklich neu lädt.
- Teilausfall beim Start (ein benutztes Niveau fehlt): App läuft, Hinweisleiste „Einige Inhalte fehlen gerade – Zahlen sind unvollständig“. Fortschritt wird dabei nicht verändert (siehe §3).

### 2.4 Service Worker / Offline
- **Keine Änderung an der Cache-Logik nötig:** nachgeladene Dateien haben `?v=` → landen cache-first in `dt-assets-<VERSION>`. Versionierung bleibt bei `tools/bump-version.py` (Loader nimmt `APP_VERSION`; Manifest-Tag in `index.html` hat `?v=` und wird mit erhöht). `bump-version.py` ruft zusätzlich `node tools/build-manifest.js` auf (ein Befehl pro Release).
- **Offline vorgehalten:** alles, was seit dem letzten Update geladen wurde (= alle benutzten Niveaus des aktiven Kurses), plus **das nächste Niveau** des aktiven Kurses: nach dem ersten Zeichnen per `requestIdleCallback` vorab holen, nicht bei `navigator.connection.saveData` oder 2G. Den ganzen Kurs vorab laden ist verworfen (würde die Ersparnis bei Datenvolumen aufheben).
- Update: neue Version → neuer Cache, alter wird gelöscht; der erste Start online lädt die benötigten Pakete neu (wie heute alles). Folge: Ein Niveau, das nur im alten Cache lag und nicht benutzt wird, ist nach einem Update erst nach erneutem Öffnen offline da – akzeptiert.
- Alter offener Tab nach Update (`skipWaiting` + `clients.claim`): lädt er ein Paket mit altem `?v=`, liefert GitHub die **neue** Datei. IDs sind stabil, also kein Datenrisiko; unbekannte Aufgabentypen muss der Player überspringen (prüfen). Zusätzlich: Ladefehler oder `controllerchange` → Hinweis „Neue Version – bitte neu laden“.

## 3. Folgen für den Fortschritt
- **Kein Schema-Wechsel, keine Migration, keine neuen Schlüssel in `dt-data`.** IDs unverändert. `dt-backup`/`dt-backup-s2` unberührt.
- Pflicht-Test: Profil mit A1+A2-Einträgen, nur `de-a1` geladen, alle Kernfunktionen mit Speichern (SRS-Antwort, Tagesziel, Import/Merge, Export) → A2-Einträge byte-gleich. Export/Import darf nie von geladenem Inhalt abhängen.
- Code-Review-Regel: Kein neuer Codepfad darf `prog`/`srs`-Einträge löschen oder umschreiben, weil `EXI[id]` bzw. ein Wort fehlt.

## 4. Tests und Werkzeuge
- `tools/validate.js`, `tools/extract-texts.js`: Dateiliste aus dem Manifest statt aus `index.html`; Validator prüft (a) jede Datei in `js/content/` ↔ Manifest, (b) Manifest ist aktuell (im Speicher neu erzeugen und vergleichen; Fehlertext nennt den Befehl), (c) gibt die größte Startlast je Kurs aus (alle Pakete eines Kurses + Kern) und **warnt ab 1,5 MB** (Auslöser Stufe 2). Lädt weiterhin **alle** Inhalte.
- `tools/test-core.js` (ohne DOM): `levelKeyOf`, `neededLevels` mit Fixtures `v4-writes.json` usw.; `ensure` mit Fake-Injektor (kein Doppelladen, Fehler → Reject → Retry lädt neu, `register` nach jedem Paket); `levelSummary` aus Manifest == aus Inhalt für jedes Paket; Fortschritts-Test aus §3.
- Browser (Playwright, hell/dunkel, 390 px/Desktop): neuer DE-Nutzer lädt nur `de-a1` (Netzwerk-Log); A2-Nutzer; Kurswechsel; Deep-Link `#/topic/tr-a2-03`; Einstufung; offline + nicht gecachtes Niveau → Fehlerkarte + Retry; `?nosw`.

## 5. Ersparnis (real, aus §1)

| Fall | heute roh / gzip | danach roh / gzip |
|---|---|---|
| Neuer Nutzer DE (nur A1) | 1 934 / 576 KB | ≈ 535 / 165 KB (**−72 %**) |
| DE-Nutzer in A2 | 1 934 / 576 KB | ≈ 1 135 / 340 KB (−41 %) |
| TR-Nutzer in A2 | 1 934 / 576 KB | ≈ 1 180 / 360 KB (−39 %) |
| mit B1: DE-Nutzer in B1 | ≈ 3 200 KB | ≈ 1 790 KB |
| mit B1: neuer Nutzer | ≈ 3 200 KB | ≈ 535 KB |

Ehrliche Grenze: Wer viele Niveaus durchlaufen hat, lädt seinen ganzen Kurs (Wiederholung braucht alte Wörter/Aufgaben). Ab B1-Lernenden liegt die Startlast wieder > 1,5 MB roh.
**Stufe 2 (eigene Entscheidung, Auslöser: Validator-Warnung):** Manifest um zählbare Aufgaben-IDs je Thema (als Bereiche kodiert) erweitern → Dashboard ganz ohne Inhalt; beim Start nur das aktuelle Niveau, ältere Niveaus erst beim Öffnen von Tagesmix/Wiederholung/„Meine Lücken“. Aufwand M, betrifft `topicStats`/`skillOf`.

## 6. Alternativen

| Option | Aufwand | Risiko | Bewertung |
|---|---|---|---|
| **Script-Laden je Kurs+Niveau + Manifest (gewählt)** | M–L | mittel (asynchroner Start) | große Ersparnis für Einsteiger, Lehrerformat bleibt |
| Nur je Kurs laden, ohne Manifest | S | gering | spart heute ≈ 50 %, Einsteiger laden trotzdem A2/B1 mit; **Rückfalloption**, falls die Zeit drängt |
| `import()` / ES-Module | M | mittel | `file://` geht nicht, Tools müssten ESM können, Cache-Busting per Import-Map (ADR-10 verworfen) |
| Inhalte als JSON + `fetch` | L | hoch | Lehrer müssten strenges JSON schreiben (keine Kommentare, Anführungszeichen), `file://` geht nicht |
| Build/Bündeln | M–H | – | verstößt gegen „ohne Build“ |
| Nichts tun | 0 | hoch | ab B1 ≈ 3,2 MB beim Start |

## 7. Umsetzungsschritte (Entwickler, je einzeln auslieferbar)

| # | Schritt | Prüfung | Aufwand |
|---|---|---|---|
| 1 | `tools/build-manifest.js` + `js/content/manifest.js` (synchron eingebunden, **alle Inhalts-Tags bleiben**); Validator/extract-texts auf Manifest-Liste, Aktualitäts- und Größenprüfung; `bump-version.py` ruft Generator | `validate`, Textliste von `extract-texts` vorher/nachher identisch | S |
| 2 | `js/core/loader.js` (`levelKeyOf`, `neededLevels`, `ensure` mit injiziertem Laden), noch nicht verdrahtet | `test-core` | S |
| 3 | `DT.catalog.levelSummary`; `levelHas`, Balken, Badge, Wortzähler, Zertifikats-Ansicht lesen darüber | `test-core` (Manifest == Inhalt), Screenshots vorher/nachher identisch | M |
| 4 | Inhalts-Tags aus `index.html` entfernen; Start/Router/Kurs- und Profilwechsel/Einstufung/Wortschatz über `ensure`; Lade- und Fehlerkarte, Teilausfall-Hinweis (Texte DE+TR, UX-Review) | volle Browser-Matrix inkl. offline, Fortschritts-Test §3 | M–L |
| 5 | Nächstes Niveau im Leerlauf vorladen (Save-Data beachten), Update-Hinweis bei `controllerchange` | Playwright offline nach Vorladen | S |
| 6 | `CLAUDE.md` (Dateitabelle, „neue Inhaltsdatei → `build-manifest.js`“), ADR-10-Verweis | Review | S |

**Gesamt:** ≈ 3–4 Entwicklertage + 1 Tag QA. Schritte 1–3 ändern kein sichtbares Verhalten; das Risiko liegt in Schritt 4 (Notschalter `docs/sw-notschalter.js` bleibt unverändert nutzbar; Rücknahme = Tags wieder in `index.html`).

## 8. Risiken
1. **Asynchroner Start** – Ansichten, die `EXI`/`K.vocab` vor `ensure` lesen, zeigen zu wenig. Gegenmittel: alle Einstiege über eine Funktion `go(route)` = `ensure` → `render`.
2. **Doppeltes Laden** verdoppelt Wörter (`addVocab` hängt an) → Promise-Cache je Datei, Test.
3. **Manifest veraltet** → falsche Prozente für nicht geladene Niveaus. Validator bricht ab (GitHub Action blockiert Veröffentlichung).
4. **Offline-Lücke** nach Update für nie geöffnete Niveaus → klare Fehlerkarte, nächstes Niveau vorgeladen.
5. **Alter Tab + neue Inhalte** (siehe 2.4) → Update-Hinweis; Player muss unbekannte Typen überspringen.
6. **Stufe 2 nötig ab B1-Lernenden** – bewusst vertagt, Auslöser messbar.
