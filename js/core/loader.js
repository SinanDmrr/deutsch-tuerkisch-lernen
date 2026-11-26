/* Inhalte je Kurs+Niveau nachladen (ADR-15) – rein, ohne DOM beim Laden der Datei, in Node testbar.
 * Ein „Paket“ = Kurs + Niveau, Schlüssel wie in K.vocab: 'de-a2'. Dateien je Paket stehen im Manifest (K.manifest).
 *
 *   levelKeyOf(id)                       'de-a2-03.5' | 'de-a2.w001' | 'de-a2-s01' → 'de-a2' (sonst null)
 *   usedLevels(profil, kurs)             Pakete des Kurses, zu denen das Profil Einträge hat (prog, srs, skip, place, writes)
 *   routeLevels(kurs, route, complete?)  Pakete, die eine Ansicht braucht (route = { page, a, b, lv } wie parseHash);
 *                                        complete = freigegebene Niveaus des Kurses (Einstufung lädt alle Stufen, ADR-17)
 *   neededLevels(profil, kurs, route, manifest, complete?)
 *   create({ manifest, inject, version, base, onLoad, timeout, setTimeout }) → { ensure(keys), isLoaded(key), markLoaded(datei), failed() }
 *
 * Grundsatz: Laden verändert NIE den gespeicherten Fortschritt – hier wird nur gelesen.
 * ensure lädt jede Datei höchstens einmal (K.addVocab hängt sonst Wörter doppelt an). Eine Datei, deren Laden
 * nur zu lange dauert (Zeitlimit), wird beim nächsten Versuch NICHT neu eingefügt, sondern weiter abgewartet –
 * nur ein echter Ladefehler (onerror) gibt sie für einen neuen Versuch frei.
 */
(function (DT) {
  'use strict';

  var LV = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  var KEY_RE = /^([a-z]{2})-(a1|a2|b1|b2|c1|c2)(?=$|[-.#])/;

  function levelKeyOf(id) { var m = KEY_RE.exec(String(id == null ? '' : id)); return m ? m[1] + '-' + m[2] : null; }
  function keyOf(cid, lv) { return cid + '-' + String(lv || '').toLowerCase(); }
  function levelOf(key) { return String(key || '').split('-')[1].toUpperCase(); }
  function rank(key) { return LV.indexOf(String(key).split('-')[1]); }
  function sortKeys(list) {
    var seen = {}, out = [];
    list.forEach(function (k) { if (k && !seen[k]) { seen[k] = 1; out.push(k); } });
    return out.sort(function (a, b) { return a.split('-')[0] === b.split('-')[0] ? rank(a) - rank(b) : (a < b ? -1 : 1); });
  }
  function isObj(x) { return !!x && typeof x === 'object' && !Array.isArray(x); }

  function usedLevels(p, cid) {
    var out = [];
    function scan(map) { if (isObj(map)) Object.keys(map).forEach(function (id) { var k = levelKeyOf(id); if (k && k.indexOf(cid + '-') === 0) out.push(k); }); }
    if (!isObj(p)) return out;
    ['prog', 'srs', 'skip', 'writes'].forEach(function (f) { if (isObj(p[f])) scan(p[f][cid]); });
    var pl = isObj(p.place) ? p.place[cid] : null;
    if (isObj(pl)) {
      if (pl.level) out.push(keyOf(cid, pl.level));
      (Array.isArray(pl.mastered) ? pl.mastered : []).forEach(function (id) { var k = levelKeyOf(id); if (k && k.indexOf(cid + '-') === 0) out.push(k); });
    }
    return sortKeys(out);
  }

  // Einstufung (ADR-17): alle freigegebenen Niveaus; ohne Angabe wie bisher A1+A2
  function placementLevels(complete) {
    var l = (Array.isArray(complete) ? complete : []).filter(function (x) { return LV.indexOf(String(x || '').toLowerCase()) >= 0; });
    return l.length ? l : ['A1', 'A2'];
  }

  function routeLevels(cid, r, complete) {
    r = r || {};
    var out = [], pre = cid + '-', isLv = function (x) { return LV.indexOf(String(x || '').toLowerCase()) >= 0; };
    function id(x) { var k = levelKeyOf(x); if (k && k.indexOf(pre) === 0) out.push(k); }
    switch (r.page) {
      case 'topic': case 'write': id(r.a); break;
      case 'lessons': case 'certificate': if (isLv(r.a)) out.push(keyOf(cid, r.a)); break;
      case 'words': if (isLv(r.lv)) out.push(keyOf(cid, r.lv)); break;
      case 'placement': placementLevels(complete).forEach(function (lv) { out.push(keyOf(cid, lv)); }); break;
    }
    return sortKeys(out);
  }

  // manifest optional: nur Pakete, die es gibt; ohne Einträge → erstes Paket des Kurses (neuer Nutzer)
  function neededLevels(p, cid, r, manifest, complete) {
    var out = usedLevels(p, cid).concat(routeLevels(cid, r, complete));
    if (manifest) out = out.filter(function (k) { return !!manifest[k]; });
    if (!out.length) {
      var first = manifest ? sortKeys(Object.keys(manifest).filter(function (k) { return k.indexOf(cid + '-') === 0; }))[0] : keyOf(cid, 'A1');
      if (first) out.push(first);
    }
    return sortKeys(out);
  }

  function create(o) {
    o = o || {};
    var files = {};   // Datei → { p: Promise des Einfügens, st: 'wait'|'ok'|'fail' }
    var keys = {};    // Paket → laufende/erfüllte Promise (bei Fehler wieder entfernt)
    var failedKeys = {};
    var base = o.base == null ? 'js/content/' : o.base;
    var later = o.setTimeout || (typeof setTimeout === 'function' ? setTimeout : null);
    var limit = o.timeout == null ? 15000 : o.timeout;
    function man() { return (typeof o.manifest === 'function' ? o.manifest() : o.manifest) || {}; }
    function filesOf(key) { var m = man()[key]; return (m && m.files) || []; }
    function markLoaded(f) { files[f] = { p: Promise.resolve(), st: 'ok' }; }
    function isLoaded(key) { var f = filesOf(key); return f.every(function (x) { return files[x] && files[x].st === 'ok'; }); }
    function file(f) {
      var e = files[f];
      if (!e || e.st === 'fail') {
        e = files[f] = { st: 'wait' };
        e.p = Promise.resolve().then(function () { return o.inject(base + f + (o.version ? '?v=' + o.version : '')); })
          .then(function () { e.st = 'ok'; }, function (err) { e.st = 'fail'; throw err || new Error('load ' + f); });
      }
      if (e.st === 'ok' || !later || !limit) return e.p;
      return new Promise(function (res, rej) {   // Zeitlimit nur für dieses Warten – das Einfügen selbst läuft weiter
        var t = later(function () { rej(new Error('timeout ' + f)); }, limit);
        e.p.then(function () { if (t && typeof clearTimeout === 'function') clearTimeout(t); res(); }, rej);
      });
    }
    function loadKey(k) {
      if (keys[k]) return keys[k];
      var p = keys[k] = Promise.all(filesOf(k).map(file)).then(function () {
        delete failedKeys[k];
        if (o.onLoad) o.onLoad(k);   // Aufrufer: EXI = DT.catalog.register(K), Caches leeren
        return k;
      }, function (err) {
        if (keys[k] === p) delete keys[k];   // „Erneut versuchen“ lädt wirklich neu
        failedKeys[k] = true;
        throw err;
      });
      return p;
    }
    // → Promise({ loaded:[neu geladene Pakete] }); bei Fehler reject({ failed:[…], loaded:[…], error })
    function ensure(list) {
      var m = man(), want = sortKeys(list || []).filter(function (k) { return !!m[k]; });
      // laufende/erledigte Pakete abwarten (onLoad muss gelaufen sein); fest eingebundene (markLoaded) überspringen
      var need = want.filter(function (k) { return keys[k] ? true : !isLoaded(k); });
      var res = { loaded: [], failed: [] }, firstErr = null;
      return Promise.all(need.map(function (k) {
        return loadKey(k).then(function () { res.loaded.push(k); }, function (e) { res.failed.push(k); firstErr = firstErr || e; });
      })).then(function () {
        res.loaded = sortKeys(res.loaded); res.failed = sortKeys(res.failed);
        if (res.failed.length) { res.error = firstErr; throw res; }
        return res;
      });
    }
    return {
      ensure: ensure, isLoaded: isLoaded, markLoaded: markLoaded,
      failed: function () { return sortKeys(Object.keys(failedKeys)); },
      filesOf: filesOf
    };
  }

  DT.loader = { LV: LV, levelKeyOf: levelKeyOf, keyOf: keyOf, levelOf: levelOf, sortKeys: sortKeys, usedLevels: usedLevels, routeLevels: routeLevels, neededLevels: neededLevels, create: create };
})(window.DT = window.DT || {});
