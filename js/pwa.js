/* Deutsch ⇄ Türkçe – Service-Worker-Anmeldung (ADR-8).
 * Wird als letztes Skript geladen (nach app.js) und fasst weder DOM-Inhalte noch Nutzerdaten an.
 *
 *  - Registrierung nur über https: oder localhost/127.0.0.1 (Browser verlangen einen sicheren Kontext).
 *  - ?nosw in der Adresse: alle Worker dieses Scopes abmelden, „dt-assets-*“-Caches löschen und ohne
 *    ?nosw neu laden (QA/Playwright, Support). Für den Rest der Sitzung dieses Tabs wird kein Worker
 *    mehr registriert (sessionStorage „dt-nosw“) – sonst wäre er nach dem Neuladen sofort wieder da.
 *  - Sichtbar werden (visibilitychange) → höchstens einmal pro Stunde nach einer neuen sw.js fragen
 *    (eine installierte App bleibt oft tagelang offen).
 */
(function () {
  'use strict';
  var NOSW_FLAG = 'dt-nosw';
  var UPDATE_EVERY = 60 * 60 * 1000;   // 1 Stunde

  var sw = 'serviceWorker' in navigator ? navigator.serviceWorker : null;
  var loc = window.location;

  function noop() {}
  function hasNoswParam() { return /(^|[?&])nosw(=|&|$)/.test(loc.search.slice(1)); }
  function urlWithoutNosw() {
    var q = loc.search.slice(1).split('&').filter(function (p) {
      return p && p !== 'nosw' && p.indexOf('nosw=') !== 0;
    }).join('&');
    return loc.pathname + (q ? '?' + q : '') + loc.hash;
  }
  function sessionFlag(set) {
    try {
      if (set) window.sessionStorage.setItem(NOSW_FLAG, '1');
      return window.sessionStorage.getItem(NOSW_FLAG) === '1';
    } catch (e) { return !!set; }
  }

  /* ---------- Hilfen ---------- */
  var dropCaches = function () {
    if (!window.caches || !caches.keys) return Promise.resolve();
    return caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) {
        return k.indexOf('dt-assets-') === 0;   // NUR eigene Caches (geteilter Origin!)
      }).map(function (k) { return caches.delete(k); }));
    }).catch(noop);
  };
  var afterLoad = function (fn) {
    if (document.readyState === 'complete') fn();
    else window.addEventListener('load', fn);
  };

  /* ---------- ?nosw: abmelden, eigene Caches löschen, neu laden ---------- */
  if (hasNoswParam()) {
    sessionFlag(true);
    var reload = function () { loc.replace(urlWithoutNosw()); };
    var unregister = function () {
      if (!sw || !sw.getRegistrations) return Promise.resolve();
      return sw.getRegistrations().then(function (regs) {
        // getRegistrations() liefert nur Worker dieses Origins; davon nur die, deren Scope diese Seite umfasst
        return Promise.all(regs.filter(function (r) {
          return loc.href.indexOf(r.scope) === 0;
        }).map(function (r) { return r.unregister(); }));
      }).catch(noop);
    };
    // Erst nach „load“ (keine Anfrage dieser Seite mehr unterwegs, die der alte Worker noch cachen
    // könnte), erst abmelden, DANN Caches löschen – sonst legt ein laufender Abruf den Cache neu an.
    afterLoad(function () {
      if (!window.Promise) return reload();
      unregister().then(dropCaches).then(reload, reload);
    });
    return;
  }

  /* ---------- Sitzung nach ?nosw: ohne Worker; Caches nochmals leeren ---------- */
  // (ein abgemeldeter Worker kann mit einem letzten, noch laufenden Abruf dt-assets-* neu angelegt haben)
  if (sessionFlag(false)) {
    if (window.Promise) afterLoad(function () { dropCaches(); });
    return;
  }

  /* ---------- Registrierung ---------- */
  if (!sw || !sw.register) return;
  var host = loc.hostname;
  var secure = loc.protocol === 'https:' || host === 'localhost' || host === '127.0.0.1' || host === '[::1]';
  if (!secure) return;

  var reg = null, lastCheck = 0;

  function register() {
    try {
      sw.register('sw.js').then(function (r) {
        reg = r;
        lastCheck = Date.now();
      }).catch(noop);   // z. B. privater Modus/Firefox mit deaktiviertem SW → App läuft normal weiter
    } catch (e) { /* ignorieren */ }
  }

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'visible' || !reg) return;
    var now = Date.now();
    if (now - lastCheck < UPDATE_EVERY) return;
    lastCheck = now;
    try { reg.update().catch(noop); } catch (e) { /* ignorieren */ }
  });

  // erst nach dem Laden, damit die erste Darstellung nicht um Bandbreite konkurriert
  if (document.readyState === 'complete') register();
  else window.addEventListener('load', register);
})();
