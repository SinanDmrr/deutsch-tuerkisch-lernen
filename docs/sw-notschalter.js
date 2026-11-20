/* NOTSCHALTER für den Service Worker (ADR-8)
 *
 * Wann? Wenn der ausgelieferte Service Worker Probleme macht (z. B. alte Version hängt fest,
 * Seite lädt nicht, falsche Antworten aus dem Cache).
 *
 * Wie?
 *   1. Inhalt von sw.js (Repo-Wurzel) komplett durch DIESE Datei ersetzen.
 *   2. node tools/validate.js (prüft weiterhin VERSION == APP_VERSION) → committen → veröffentlichen.
 *   3. Jeder Browser lädt beim nächsten Seitenaufruf die neue sw.js (Update-Prüfung umgeht den
 *      HTTP-Cache), installiert sie sofort, löscht alle „dt-assets-*“-Caches und meldet sich ab.
 *      Ohne fetch-Handler gehen alle Anfragen schon vorher direkt ins Netz.
 *   4. Später kann die normale sw.js zurückkommen – ein paar Wochen Notschalter genügen.
 *
 * Fremde Caches (andere Repos auf demselben Origin) werden NICHT angefasst.
 * „dt-audio-v1“ bleibt bestehen (nur fertige MP3s, versionslos – schadet nicht).
 */
'use strict';

const VERSION = '2026-11-20.3';   // muss weiter == APP_VERSION sein (tools/bump-version.py pflegt das)

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (name) {
          return name.indexOf('dt-assets-') === 0;
        }).map(function (name) { return caches.delete(name); }));
      })
      .catch(function () { /* weiter zum Abmelden */ })
      .then(function () { return self.registration.unregister(); })
  );
});
