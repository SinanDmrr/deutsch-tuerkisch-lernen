/* Deutsch ⇄ Türkçe – Service Worker (ADR-8, docs/architektur.md)
 *
 * Scope ergibt sich aus dem Pfad: /deutsch-tuerkisch-lernen/ (gleicher Origin wie andere Repos
 * des Besitzers → hier werden NUR Caches mit Präfix „dt-“ angelegt und nur „dt-assets-*“ gelöscht).
 *
 * Strategie nach Dateiart:
 *   Navigation (./, index.html)  network-first (cache: 'no-cache'), nach 3 s Cache-Fallback
 *   audio/manifest.json          network-first, Fallback Cache (dt-audio-v1)
 *   audio/<stimme>/<hash>.mp3    cache-first in dt-audio-v1, Range → 206 aus dem Blob, max. 2500 Dateien
 *   URLs mit ?v=…                cache-first in dt-assets-<VERSION>, zur Laufzeit befüllt
 *   vorab geladene Dateien        (manifest.webmanifest, Icons) network-first, Fallback Cache
 *   alles andere                 nicht anfassen (fremde Origins, Nicht-GET, außerhalb des Scopes)
 *
 * ── NOTSCHALTER ──────────────────────────────────────────────────────────────────────────────
 * Macht dieser Worker Ärger, den Inhalt von sw.js durch docs/sw-notschalter.js ersetzen und
 * veröffentlichen (eine Auslieferung genügt). Kurzfassung:
 *
 *   (die VERSION-Zeile bleibt, damit tools/validate.js zufrieden ist)
 *   self.addEventListener('install', function () { self.skipWaiting(); });
 *   self.addEventListener('activate', function (event) {
 *     event.waitUntil(caches.keys()
 *       .then(function (keys) { return Promise.all(keys.filter(function (k) { return k.indexOf('dt-assets-') === 0; })
 *         .map(function (k) { return caches.delete(k); })); })
 *       .then(function () { return self.registration.unregister(); }));
 *   });
 *
 * Ohne fetch-Handler gehen alle Anfragen sofort wieder direkt ins Netz; nach dem nächsten
 * Seitenaufruf ist kein Worker mehr registriert. Danach kann sw.js normal zurückkommen.
 * ─────────────────────────────────────────────────────────────────────────────────────────────
 */
'use strict';

const VERSION = '2026-11-18.16';            // pflegt tools/bump-version.py (== APP_VERSION, prüft tools/validate.js)
const ASSETS = 'dt-assets-' + VERSION;     // Präfix dt- ist Pflicht (geteilter Origin!)
const AUDIO = 'dt-audio-v1';               // versionslos: Dateinamen = Hash des Textes

var NAV_TIMEOUT = 3000;                    // ms, danach Cache-Fallback (Netz läuft im Hintergrund weiter)
var AUDIO_MAX = 2500;                      // max. MP3-Einträge in AUDIO (älteste werden gelöscht)

var SCOPE = new URL(self.registration.scope);           // …/deutsch-tuerkisch-lernen/
var SCOPE_PATH = SCOPE.pathname;
var ROOT_URL = SCOPE.href;                              // Schlüssel für die Startseite
var MANIFEST_URL = new URL('audio/manifest.json', SCOPE).href;
var AUDIO_PREFIX = SCOPE_PATH + 'audio/';

// Vorab laden: nur Startseite, Web-App-Manifest und die Icons aus manifest.webmanifest
var PRECACHE = [
  './',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-512-maskable.png'
].map(function (p) { return new URL(p, SCOPE).href; });

/* ---------- Lebenszyklus ---------- */
self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(caches.open(ASSETS).then(function (cache) {
    // einzeln und fehlertolerant: eine fehlende Datei darf die Installation nicht blockieren
    return Promise.all(PRECACHE.map(function (url) {
      return fetch(new Request(url, { cache: 'no-cache' })).then(function (res) {
        if (cacheable(res)) return cache.put(url, res);
      }).catch(function () { /* offline/404 → wird zur Laufzeit nachgeholt */ });
    }));
  }));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(deleteOldAssets().then(function () { return self.clients.claim(); }));
});

// onlyOlder: nur Caches mit nachweislich ÄLTERER Version löschen (für das Aufräumen während des
// Betriebs – ein gerade abgelöster Worker darf so nie den Cache seines Nachfolgers löschen).
function deleteOldAssets(onlyOlder) {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (name) {
      if (!name.startsWith('dt-assets-') || name === ASSETS) return false;   // NUR eigene Caches
      return onlyOlder !== true || isOlder(name.slice('dt-assets-'.length), VERSION);
    }).map(function (name) { return caches.delete(name); }));
  }).catch(function () {});
}
// Versionen aus tools/bump-version.py: JJJJ-MM-TT.n (n numerisch vergleichen: .10 > .9)
function isOlder(a, b) {
  var x = /^(\d{4}-\d{2}-\d{2})\.(\d+)$/.exec(a), y = /^(\d{4}-\d{2}-\d{2})\.(\d+)$/.exec(b);
  if (!x || !y) return false;
  return x[1] < y[1] || (x[1] === y[1] && parseInt(x[2], 10) < parseInt(y[2], 10));
}

/* ---------- Verteiler ---------- */
self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== SCOPE.origin || url.pathname.indexOf(SCOPE_PATH) !== 0) return;

  if (req.mode === 'navigate') {
    if (url.searchParams.has('nosw')) return;   // js/pwa.js meldet gleich ab – nichts mehr cachen
    return event.respondWith(navigation(event));
  }
  if (url.href.split('?')[0] === MANIFEST_URL) return event.respondWith(audioManifest(event));
  if (url.pathname.indexOf(AUDIO_PREFIX) === 0 && /\.mp3$/i.test(url.pathname)) return event.respondWith(audioFile(event));
  if (url.searchParams.has('v')) return event.respondWith(versioned(event));
  if (!url.search && PRECACHE.indexOf(url.href) >= 0) return event.respondWith(precached(event));
  // alles andere: Browser regelt es selbst
});

/* ---------- Hilfen ---------- */
function cacheable(res) {
  return res && res.status === 200 && res.type === 'basic' && !res.redirected;
}
function stripSearch(href) { return href.split('#')[0].split('?')[0]; }

/* Navigation: immer zuerst das Netz (ETag-Revalidierung umgeht GitHubs max-age=600) –
 * so kann keine alte Version hängen bleiben. Nach 3 s ohne Antwort: Cache, falls vorhanden. */
function navigation(event) {
  var req = event.request;
  var key = stripSearch(req.url);
  var net = fetch(req, { cache: 'no-cache' });
  // Antwort im Hintergrund ablegen – auch wenn sie erst nach dem Timeout kommt.
  // Danach nochmals veraltete dt-assets-* löschen: ein abgelöster Worker kann mit einem noch
  // laufenden Abruf seinen alten Cache nach unserem activate wieder angelegt haben.
  event.waitUntil(net.then(function (res) {
    if (!cacheable(res)) return;
    var copy = res.clone();
    return caches.open(ASSETS).then(function (c) { return c.put(key, copy); })
      .then(function () { return deleteOldAssets(true); });
  }).catch(function () {}));

  function fromCache() {
    return caches.open(ASSETS).then(function (c) {
      return c.match(key).then(function (hit) {
        if (hit) return hit;
        // index.html, ./?irgendwas … → Startseite
        var p = new URL(key).pathname;
        if (p === SCOPE_PATH || p === SCOPE_PATH + 'index.html') return c.match(ROOT_URL);
        return undefined;
      });
    });
  }

  return new Promise(function (resolve, reject) {
    var done = false;
    function finish(res) { if (!done) { done = true; resolve(res); } }
    var timer = setTimeout(function () {
      fromCache().then(function (hit) { if (hit) finish(hit); });   // ohne Treffer weiter aufs Netz warten
    }, NAV_TIMEOUT);
    net.then(function (res) { clearTimeout(timer); finish(res); }, function (err) {
      clearTimeout(timer);
      fromCache().then(function (hit) {
        if (hit) finish(hit);
        else if (!done) { done = true; reject(err); }
      }, function () { if (!done) { done = true; reject(err); } });
    });
  });
}

/* JS/CSS/Icons mit ?v=…: die Adresse ändert sich bei jeder Version → cache-first ist sicher. */
function versioned(event) {
  var req = event.request;
  return caches.open(ASSETS).then(function (c) {
    return c.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (cacheable(res)) {
          var copy = res.clone();
          event.waitUntil(c.put(req, copy).catch(function () {}));
        }
        return res;
      });
    });
  });
}

/* Vorab geladene Dateien ohne ?v= (manifest.webmanifest, Icons): Netz zuerst, offline Cache. */
function precached(event) {
  var req = event.request;
  return fetch(req).then(function (res) {
    if (cacheable(res)) {
      var copy = res.clone();
      event.waitUntil(caches.open(ASSETS).then(function (c) { return c.put(req.url, copy); }).catch(function () {}));
    }
    return res;
  }).catch(function (err) {
    return caches.open(ASSETS).then(function (c) { return c.match(req.url); }).then(function (hit) {
      if (hit) return hit;
      throw err;
    });
  });
}

/* audio/manifest.json (wird mit ?v=… angefragt): Netz zuerst, offline der zuletzt geladene Stand.
 * Liegt im versionslosen AUDIO-Cache, damit er zusammen mit den MP3s ein Update überlebt. */
function audioManifest(event) {
  var req = event.request;
  return fetch(req).then(function (res) {
    if (cacheable(res)) {
      var copy = res.clone();
      event.waitUntil(caches.open(AUDIO).then(function (c) { return c.put(MANIFEST_URL, copy); }).catch(function () {}));
    }
    return res;
  }).catch(function (err) {
    return caches.open(AUDIO).then(function (c) { return c.match(MANIFEST_URL); }).then(function (hit) {
      if (hit) return hit;
      throw err;
    });
  });
}

/* MP3: cache-first. Der Cache speichert immer die GANZE Datei (200); Range-Anfragen
 * (Safari/iOS, Chrome-Medien) werden daraus als 206 beantwortet. */
function audioFile(event) {
  var req = event.request;
  var key = stripSearch(req.url);
  var range = req.headers.get('range');
  return caches.open(AUDIO).then(function (c) {
    return c.match(key).then(function (hit) {
      if (hit) return range ? partial(hit, range) : hit;
      // ohne Range-Header laden: 206-Antworten lassen sich nicht cachen
      return fetch(key, { credentials: 'same-origin' }).then(function (res) {
        if (!cacheable(res)) return res;
        var copy = res.clone();
        event.waitUntil(c.put(key, copy).then(trimAudioSoon).catch(function () {}));
        return range ? partial(res, range) : res;
      });
    });
  });
}

function partial(res, header) {
  return res.blob().then(function (blob) {
    var size = blob.size;
    var type = res.headers.get('content-type') || 'audio/mpeg';
    var m = /^bytes=(\d*)-(\d*)$/.exec(String(header).trim());
    if (!m || (m[1] === '' && m[2] === '')) {
      // mehrere Bereiche o. Ä. → ganze Datei (Server dürfen Range ignorieren)
      return new Response(blob, { status: 200, headers: { 'Content-Type': type, 'Content-Length': String(size), 'Accept-Ranges': 'bytes' } });
    }
    var start, end;
    if (m[1] === '') {                       // bytes=-500 → letzte 500 Bytes
      start = Math.max(0, size - parseInt(m[2], 10));
      end = size - 1;
    } else {
      start = parseInt(m[1], 10);
      end = m[2] === '' ? size - 1 : Math.min(parseInt(m[2], 10), size - 1);
    }
    if (start >= size || start > end) {
      return new Response('', { status: 416, statusText: 'Range Not Satisfiable', headers: { 'Content-Range': 'bytes */' + size } });
    }
    return new Response(blob.slice(start, end + 1, type), {
      status: 206,
      statusText: 'Partial Content',
      headers: {
        'Content-Type': type,
        'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
        'Content-Length': String(end - start + 1),
        'Accept-Ranges': 'bytes'
      }
    });
  });
}

/* Begrenzung: nacheinander (nie parallel) die ältesten MP3s löschen; manifest.json bleibt. */
var trimChain = Promise.resolve();
function trimAudioSoon() {
  trimChain = trimChain.then(trimAudio, trimAudio);
  return trimChain;
}
function trimAudio() {
  return caches.open(AUDIO).then(function (c) {
    return c.keys().then(function (keys) {
      var mp3 = keys.filter(function (r) { return /\.mp3$/i.test(new URL(r.url).pathname); });
      var extra = mp3.length - AUDIO_MAX;
      if (extra <= 0) return;
      return Promise.all(mp3.slice(0, extra).map(function (r) { return c.delete(r); }));   // keys() = Einfügereihenfolge
    });
  }).catch(function () {});
}
