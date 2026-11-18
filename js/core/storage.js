/* Deutsch ⇄ Türkçe – Speicherformat, Migration, Zusammenführen, Export/Import (ADR-1). Rein, ohne DOM.
 * localStorage wird nie direkt angefasst, sondern (wo nötig) als Objekt übergeben → in Node testbar.
 * Grundsatz: Gespeicherter Fortschritt wird NIE gelöscht oder überschrieben, nur ergänzt bzw. umbenannt.
 * Braucht DT.time (wird erst beim Aufruf gelesen, nicht beim Laden).
 *
 * Schema-Verlauf:
 *   1 → 2  Fortschritt hing an der Position („thema#3“), jetzt an der festen Aufgaben-ID („thema.4“)
 *   2 → 3  pro Profil: srs, skip, place, badges, daily (Startwert aus Zeitstempeln), offene Fehler → SRS
 */
(function (DT) {
  'use strict';
  var SCHEMA = 3;
  var COURSES = ['de', 'tr'];
  var KEYS = { data: 'dt-data', backup: 'dt-backup', backupS2: 'dt-backup-s2' };
  var EXPORT_APP = 'deutsch-tuerkce';
  var LOG_GOAL = 10;                                      // Ziel für aus Zeitstempeln rekonstruierte Tage

  function clone(x) { return x === undefined ? undefined : JSON.parse(JSON.stringify(x)); }
  function obj(x) { return x && typeof x === 'object' && !Array.isArray(x); }
  function each(o, fn) { if (obj(o)) Object.keys(o).forEach(function (k) { fn(k, o[k]); }); }
  function todayNum(today, todayKey) {
    if (typeof today === 'number') return today;
    if (todayKey) return DT.time.parseKey(todayKey);
    return DT.time.dayNum();
  }

  /* v1 → v2: Schlüssel „thema#i“ (Position, ab 0) → „thema.(i+1)“. Die IDs wurden beim Umstieg genau so
   * vergeben – die Zuordnung ist also fest und hängt NICHT von der aktuellen Reihenfolge ab.
   * (1:1 aus migrate() in js/app.js übernommen.) */
  function mapV1Keys(pr) {
    Object.keys(pr || {}).forEach(function (cid) {
      var src = pr[cid] || {}, dst = {};
      Object.keys(src).forEach(function (key) {
        var m = /^([a-z]{2}-[a-z0-9]{2}-\d{2})#(\d+)$/.exec(key);
        dst[m ? m[1] + '.' + (+m[2] + 1) : key] = src[key];
      });
      pr[cid] = dst;
    });
  }

  /** Ein Profil von Schema fromV auf SCHEMA heben. VERÄNDERT p und gibt es zurück.
   *  Idempotent: legt nur an, was fehlt – überschreibt nie (wichtig, falls eine ältere App v wieder senkt). */
  function migrateProfile(p, fromV, today) {
    if (!obj(p)) return p;
    fromV = fromV || 1;
    today = todayNum(today);
    if (fromV < 2) mapV1Keys(p.prog);
    if (fromV < 3) {
      p.prog = obj(p.prog) ? p.prog : {};
      p.srs = obj(p.srs) ? p.srs : {};
      p.skip = obj(p.skip) ? p.skip : {};
      COURSES.forEach(function (c) {
        if (!obj(p.srs[c])) p.srs[c] = {};
        if (!obj(p.skip[c])) p.skip[c] = {};
      });
      if (!obj(p.place)) p.place = {};
      if (!obj(p.badges)) p.badges = {};
      if (!obj(p.daily)) {
        // Startwert aus vorhandenen Zeitstempeln (Untergrenze: je Aufgabe ist nur die letzte Antwort bekannt)
        p.daily = { goal: LOG_GOAL, log: {} };
        COURSES.forEach(function (c) {
          each(p.prog[c], function (id, r) {
            if (r && r.t) {
              var k = DT.time.dayKey(r.t), e = p.daily.log[k] || [0, LOG_GOAL, 0];
              e[0]++; p.daily.log[k] = e;
            }
          });
        });
      }
      // Offene Fehler → SRS (Fach 1, fällig heute), nur wenn es noch keinen Eintrag gibt
      Object.keys(p.prog).forEach(function (c) {
        if (!obj(p.srs[c])) p.srs[c] = {};
        each(p.prog[c], function (id, r) {
          if (r && r.s === 'w' && !p.srs[c][id]) p.srs[c][id] = [1, today, today, 0, 1];
        });
      });
    }
    return p;
  }

  /** Gesamten Speicherstand migrieren. Rein: die Eingabe wird nicht verändert (Kopie), damit bei einem
   *  Fehler die Rohdaten unangetastet bleiben.
   *  Rückgabe: { data, from, to, changed, newer }
   *   newer = true: Daten stammen von einer NEUEREN App (v > SCHEMA) → unverändert zurück, nicht speichern
   *   ohne Rückfrage, Hinweis „Bitte neu laden“ zeigen. */
  function migrate(d, today, todayKey) {
    var from = (d && d.v) || 1;
    if (!obj(d)) return { data: d, from: from, to: from, changed: false, newer: false };
    if (from > SCHEMA) return { data: d, from: from, to: from, changed: false, newer: true };
    var out = clone(d);
    if (from < SCHEMA) {
      var t = todayNum(today, todayKey);
      each(out.profiles, function (pid, p) { migrateProfile(p, from, t); });
    }
    out.v = SCHEMA;
    return { data: out, from: from, to: SCHEMA, changed: from !== SCHEMA, newer: false };
  }

  /* ---------- Zusammenführen (Import, später ggf. Mehr-Tab) ---------- */
  function mergeMap(cur, inc, pick) {
    var out = clone(cur) || {};
    each(inc, function (k, v) { out[k] = (k in out) ? pick(out[k], v) : clone(v); });
    return out;
  }
  function byCourse(cur, inc, mergeOne) {
    var out = clone(cur) || {};
    each(inc, function (c, m) { out[c] = obj(out[c]) ? mergeOne(out[c], m) : clone(m); });
    return out;
  }
  var pickProg = function (a, b) { return ((b && b.t) || 0) > ((a && a.t) || 0) ? clone(b) : a; };
  var pickSrs = function (a, b) {
    if (!a) return clone(b); if (!b) return a;
    if (b[2] !== a[2]) return b[2] > a[2] ? clone(b) : a;  // größeres last gewinnt
    return (b[3] || 0) > (a[3] || 0) ? clone(b) : a;        // Gleichstand: mehr reps
  };
  var pickLog = function (a, b) {
    if (!a) return clone(b); if (!b) return a;
    return [Math.max(a[0] || 0, b[0] || 0), a[1] || b[1], Math.max(a[2] || 0, b[2] || 0)];
  };
  var pickEarlier = function (a, b) {
    var ta = obj(a) ? a.t : a, tb = obj(b) ? b.t : b;
    return (tb || Infinity) < (ta || Infinity) ? clone(b) : a;
  };
  var pickLater = function (a, b) {
    var ta = obj(a) ? a.t : a, tb = obj(b) ? b.t : b;
    return (tb || 0) > (ta || 0) ? clone(b) : a;
  };

  /** Zwei Profile zusammenführen (ADR-1). Rein, gibt ein neues Profil zurück. Beide sollten Schema 3 haben.
   *  prog: neueres t gewinnt · srs: größeres last, bei Gleichstand mehr reps · daily.log: je Tag Maximum
   *  (Ziel des Tages aus cur) · daily.goal bleibt · skip/badges: Vereinigung, früherer Zeitstempel ·
   *  place: neueres t · last: Maximum je Kurs · id/name/course/created bleiben · unbekannte Felder aus inc
   *  werden übernommen, wenn cur sie nicht hat (nichts geht verloren). */
  function mergeProfile(cur, inc) {
    var out = clone(cur) || {};
    if (!obj(inc)) return out;
    out.prog = byCourse(out.prog, inc.prog, function (a, b) { return mergeMap(a, b, pickProg); });
    out.srs = byCourse(out.srs, inc.srs, function (a, b) { return mergeMap(a, b, pickSrs); });
    out.skip = byCourse(out.skip, inc.skip, function (a, b) { return mergeMap(a, b, pickEarlier); });
    out.badges = mergeMap(out.badges, inc.badges, pickEarlier);
    out.place = mergeMap(out.place, inc.place, pickLater);
    out.last = mergeMap(out.last, inc.last, function (a, b) { return Math.max(a || 0, b || 0); });
    if (obj(inc.daily) || obj(out.daily)) {
      var d = obj(out.daily) ? out.daily : {}, di = obj(inc.daily) ? inc.daily : {};
      out.daily = { goal: d.goal || di.goal || LOG_GOAL, log: mergeMap(d.log, di.log, pickLog) };
      each(d, function (k, v) { if (k !== 'goal' && k !== 'log') out.daily[k] = v; });
    }
    each(inc, function (k, v) { if (!(k in out)) out[k] = clone(v); });
    return out;
  }

  /* ---------- Export / Import ---------- */
  /** Exportdatei (Format v2) als Objekt; der Aufrufer macht JSON.stringify + Download. */
  function exportData(profile, appVersion, now) {
    return {
      app: EXPORT_APP, v: 2, schema: SCHEMA, appVersion: appVersion,
      exported: new Date(now || Date.now()).toISOString(),
      profile: clone(profile)
    };
  }

  /** Exportdatei (v1 oder v2, als Text oder Objekt) in das Profil cur übernehmen. Rein.
   *  Rückgabe: { ok: true, profile: <neues Profil>, from: 1|2 } oder { ok: false, error: 'format'|'newer' }.
   *  v1 (nur prog, evtl. noch mit „thema#i“) und v2 (ganzes Profil) werden erst migriert, dann zusammengeführt. */
  function importData(cur, json, today, todayKey) {
    var d = json;
    if (typeof d === 'string') { try { d = JSON.parse(d); } catch (e) { return { ok: false, error: 'format' }; } }
    if (!obj(d) || !obj(d.profile) || !obj(d.profile.prog)) return { ok: false, error: 'format' };
    var fileV = d.v || 1;
    if (fileV > 2 || (d.schema || 0) > SCHEMA) return { ok: false, error: 'newer' };
    var t = todayNum(today, todayKey), inc;
    if (fileV < 2) {
      inc = migrateProfile({ prog: clone(d.profile.prog) }, 1, t);
    } else {
      inc = migrateProfile(clone(d.profile), d.schema || SCHEMA, t);
    }
    // cur auf Schema 3 sicherstellen (idempotent; ändert ein bereits migriertes Profil nicht)
    var base = migrateProfile(clone(cur) || {}, 2, t);
    return { ok: true, profile: mergeProfile(base, inc), from: fileV };
  }

  /* ---------- Schreiben mit Fehlererkennung ---------- */
  /** Wert schreiben; true/false statt Ausnahme (z. B. QuotaExceededError). */
  function trySet(ls, key, value) {
    try { ls.setItem(key, value); return true; } catch (e) { return false; }
  }
  /** Speicherstand schreiben (ADR-1): v nie senken, rev + 1. Schlägt das fehl, wird dt-backup (nicht
   *  dt-backup-s2) entfernt und erneut versucht. Gibt true/false zurück – der Aufrufer zeigt bei false
   *  das Banner „Fortschritt wird nicht gespeichert“. */
  function save(ls, db, appVersion) {
    db.v = Math.max(db.v || 0, SCHEMA);
    if (appVersion) db.app = appVersion;
    db.rev = (db.rev || 0) + 1;
    var s = JSON.stringify(db);
    if (trySet(ls, KEYS.data, s)) return true;
    try { ls.removeItem(KEYS.backup); } catch (e) { /* ignorieren */ }
    return trySet(ls, KEYS.data, s);
  }

  DT.storage = {
    SCHEMA: SCHEMA,
    KEYS: KEYS,
    migrate: migrate,
    migrateProfile: migrateProfile,
    mergeProfile: mergeProfile,
    exportData: exportData,
    importData: importData,
    trySet: trySet,
    save: save
  };
})(window.DT = window.DT || {});
