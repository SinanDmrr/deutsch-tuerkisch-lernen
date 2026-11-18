/* Deutsch ⇄ Türkçe – Spaced Repetition nach Leitner (ADR-2). Rein, ohne DOM/Speicher.
 * Zustand pro ID in profil.srs[kurs][id] als Array [box, due, last, reps, lapses]:
 *   box    Fach 0–6
 *   due    fällig am (Tagesnummer, DT.time.dayNum); -1 = ausgeschieden (nur Aufgaben)
 *   last   zuletzt beantwortet bzw. eingeführt (Tagesnummer)
 *   reps   Anzahl Antworten
 *   lapses Anzahl falscher Antworten
 * NUR diese Datei greift über die Index-Konstanten auf das Array zu. Neue Felder nur hinten anhängen.
 * `today` (Tagesnummer) wird immer übergeben – so sind alle Funktionen testbar.
 */
(function (DT) {
  'use strict';
  var B = 0, DUE = 1, LAST = 2, REPS = 3, LAPSES = 4;
  var INTERVALS = [0, 1, 3, 7, 16, 35, 90];   // Tage je Fach
  var MAX_BOX = INTERVALS.length - 1;
  var EX_RETIRE_BOX = 4;                       // Aufgaben scheiden nach richtiger Antwort ab diesem Fach aus

  /* Kleiner, stabiler String-Hash (djb2, 32 Bit) – nur für die Streuung, nicht kryptografisch. */
  function hash(s) {
    var h = 5381;
    s = String(s);
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return h >>> 0;
  }
  /* Intervall für ein Fach; ab 7 Tagen ± 10 % (gerundet), deterministisch aus id + reps,
   * damit viele gleichzeitig gelernte Einträge nicht alle am selben Tag wiederkommen. */
  function interval(box, id, reps) {
    var base = INTERVALS[box];
    if (base < 7) return base;
    var spread = Math.round(base * 0.1);
    return base + (hash(id + '|' + reps) % (2 * spread + 1)) - spread;
  }

  function bucket(p, cid, create) {
    if (!p) return null;
    if (!p.srs) { if (!create) return null; p.srs = {}; }
    if (!p.srs[cid]) { if (!create) return null; p.srs[cid] = {}; }
    return p.srs[cid];
  }

  /** Eintrag oder null. */
  function get(p, cid, id) {
    var b = bucket(p, cid, false);
    return (b && b[id]) || null;
  }

  /** Neues Wort einführen: Fach 0, fällig heute. known = „kenne ich schon“: Fach 3, fällig in 7 Tagen
   *  (wird also später geprüft, nicht geschenkt). Vorhandene Einträge werden nie überschrieben. */
  function introduce(p, cid, wordId, today, known) {
    var b = bucket(p, cid, true);
    if (b[wordId]) return b[wordId];
    b[wordId] = known ? [3, today + INTERVALS[3], today, 0, 0] : [0, today, today, 0, 0];
    return b[wordId];
  }

  /** Antwort verbuchen. kind: 'word' | 'ex'. Gibt den Eintrag zurück (bzw. null, wenn nichts zu tun war).
   *  - richtig: Fach + 1 (max. 6), fällig heute + Intervall. Aufgaben ab Fach 4: due = -1 (ausgeschieden).
   *    Richtig, aber noch nicht fällig (freies Üben) oder ausgeschieden: Fach und Fälligkeit bleiben – kein „Hochpauken“.
   *  - falsch: Fach ≥ 4 → 2, Fach ≥ 1 → 1, sonst 0 (Aufgaben mindestens 1 = morgen), fällig heute + Intervall.
   *  - Aufgaben kommen nur über eine falsche Antwort ins SRS; Wörter ohne Eintrag werden eingeführt. */
  function answer(p, cid, id, ok, today, kind) {
    var isEx = kind === 'ex';
    var e = get(p, cid, id);
    if (!e) {
      if (isEx && ok) return null;
      e = isEx ? [1, today, today, 0, 0] : introduce(p, cid, id, today, false);
      bucket(p, cid, true)[id] = e;
    }
    var box = e[B];
    e[REPS] = (e[REPS] || 0) + 1;
    e[LAST] = today;
    if (ok) {
      if (e[DUE] > today || e[DUE] < 0) return e;            // noch nicht fällig bzw. ausgeschieden → kein Fachwechsel
      box = Math.min(box + 1, MAX_BOX);
      e[B] = box;
      e[DUE] = (isEx && box >= EX_RETIRE_BOX) ? -1 : today + interval(box, id, e[REPS]);
    } else {
      box = box >= 4 ? 2 : (box >= 1 ? 1 : 0);
      if (isEx && box < 1) box = 1;
      e[B] = box;
      e[LAPSES] = (e[LAPSES] || 0) + 1;
      e[DUE] = today + interval(box, id, e[REPS]);
    }
    return e;
  }

  /** Fällige IDs (0 ≤ due ≤ today), sortiert nach due, dann Fach, dann ID; limit optional. */
  function due(p, cid, today, limit) {
    var b = bucket(p, cid, false) || {}, list = [];
    Object.keys(b).forEach(function (id) {
      var e = b[id];
      if (e && e[DUE] >= 0 && e[DUE] <= today) list.push(id);
    });
    list.sort(function (x, y) {
      return (b[x][DUE] - b[y][DUE]) || (b[x][B] - b[y][B]) || (x < y ? -1 : x > y ? 1 : 0);
    });
    return limit > 0 ? list.slice(0, limit) : list;
  }

  /** Abfragemodus nach Fach (ADR-3): 0–1 pick · 2 listen (ohne Audio rev) · 3 rev · ≥ 4 type. */
  function wordMode(entry, hasAudio) {
    var box = entry ? entry[B] : 0;
    if (box <= 1) return 'pick';
    if (box === 2) return hasAudio ? 'listen' : 'rev';
    if (box === 3) return 'rev';
    return 'type';
  }

  /** Zählung für Fortschrittsbalken. ids optional (Standard: alle Einträge des Kurses).
   *  neu = kein Eintrag oder Fach 0 · lernend = Fach 1–2 · sicher = Fach ≥ 3 · gefestigt = Fach ≥ 5 (Teil von sicher).
   *  neu + lernend + sicher = Anzahl ids. */
  function stats(p, cid, ids) {
    var b = bucket(p, cid, false) || {}, r = { neu: 0, lernend: 0, sicher: 0, gefestigt: 0 };
    (ids || Object.keys(b)).forEach(function (id) {
      var e = b[id], box = e ? e[B] : 0;
      if (box <= 0) r.neu++;
      else if (box <= 2) r.lernend++;
      else { r.sicher++; if (box >= 5) r.gefestigt++; }
    });
    return r;
  }

  DT.srs = {
    INTERVALS: INTERVALS,
    B: B, DUE: DUE, LAST: LAST, REPS: REPS, LAPSES: LAPSES,
    hash: hash,
    interval: interval,
    get: get,
    introduce: introduce,
    answer: answer,
    due: due,
    wordMode: wordMode,
    stats: stats
  };
})(window.DT = window.DT || {});
