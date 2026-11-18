/* Deutsch ⇄ Türkçe – Kalendertage (ADR-1). Rein, ohne DOM/Speicher.
 * Alle Tagesrechnungen laufen über das LOKALE Kalenderdatum, umgerechnet mit Date.UTC(y, m, d).
 * Damit ist ein Tag immer genau 1 – auch an Tagen mit Zeitumstellung (23 bzw. 25 Stunden).
 *   dayNum  = ganze Zahl (Tage seit 1970-01-01), für SRS due/last und alle Differenzen
 *   dayKey  = 'YYYY-MM-DD', nur für das lesbare Tageslog
 */
(function (DT) {
  'use strict';
  var DAY = 864e5;

  function toDate(x) {
    if (x === undefined || x === null) return new Date();
    if (x instanceof Date) return x;
    return new Date(x);                       // Zeitstempel in ms
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /** Lokales Kalenderdatum → Tagesnummer. Ohne Argument: heute. */
  function dayNum(dateOrTs) {
    var d = toDate(dateOrTs);
    return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY);
  }
  /** Lokales Kalenderdatum → 'YYYY-MM-DD'. Ohne Argument: heute. */
  function dayKey(dateOrTs) {
    var d = toDate(dateOrTs);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  /** Tagesnummer → Date (lokale Mitternacht dieses Kalendertags). */
  function fromDayNum(n) {
    var u = new Date(n * DAY);
    return new Date(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate());
  }
  /** Tagesnummer → 'YYYY-MM-DD' (rein rechnerisch, zeitzonenunabhängig). */
  function keyOf(n) {
    var u = new Date(n * DAY);
    return u.getUTCFullYear() + '-' + pad(u.getUTCMonth() + 1) + '-' + pad(u.getUTCDate());
  }
  /** 'YYYY-MM-DD' → Tagesnummer (NaN bei ungültigem Format). */
  function parseKey(key) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(key));
    return m ? Math.floor(Date.UTC(+m[1], +m[2] - 1, +m[3]) / DAY) : NaN;
  }
  /* Tagesnummer, Tagesschlüssel, Date oder Zeitstempel → Tagesnummer.
   * Zahlen mit Betrag < 1e8 gelten als Tagesnummer (heute ≈ 20 400), größere als Zeitstempel in ms. */
  function asDayNum(x) {
    if (typeof x === 'string') return parseKey(x);
    if (typeof x === 'number' && Math.abs(x) < 1e8) return Math.floor(x);
    return dayNum(x);
  }
  /** Ganze Kalendertage von a bis b (b − a); akzeptiert Tagesnummern, 'YYYY-MM-DD', Date, Zeitstempel. */
  function daysBetween(a, b) { return asDayNum(b) - asDayNum(a); }
  /** Wochentag 0 = Montag … 6 = Sonntag (1970-01-01, Tag 0, war ein Donnerstag). */
  function weekday(n) { return ((n + 3) % 7 + 7) % 7; }
  /** Tagesnummer des Montags derselben Kalenderwoche (Mo–So). */
  function weekStart(n) { return n - weekday(n); }

  DT.time = {
    dayNum: dayNum,
    dayKey: dayKey,
    fromDayNum: fromDayNum,
    keyOf: keyOf,
    parseKey: parseKey,
    daysBetween: daysBetween,
    weekday: weekday,
    weekStart: weekStart
  };
})(window.DT = window.DT || {});
