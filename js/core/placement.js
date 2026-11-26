/* Einstufungstest in Stufen (ADR-17) – rein, ohne DOM und ohne Speicherzugriff, in Node testbar.
 *
 * Stufen = die im Lehrplan freigegebenen Niveaus (course.complete) in Reihenfolge A1 → C2.
 * Je Stufe: pro Thema 1–2 Fragen (zwei richtig = Thema sitzt), höchstens MAX_Q Fragen, Stufen-Ende nach
 * 3 nicht beherrschten Themen in Folge. Nächste Stufe nur bei ≥ PASS beherrschten Themen der Stufe
 * (Themen ohne geeignete Aufgaben zählen nicht mit – sie stehen gar nicht erst in run.tops).
 *
 *   stages(complete)                  ['A2','A1','x'] → ['A1','A2'] (nur bekannte Niveaus, sortiert, eindeutig)
 *   create(o, ctx)                    o = { pid, cid, stages, now } → Lauf (steht schon auf der ersten Frage)
 *   answer(run, ok, ctx, now)         → { next: Aufgaben-ID|null, stageDone, nextStage, finished }  (verändert run)
 *   current(run)                      aktuelle Aufgaben-ID oder null
 *   stageRatio(run, si)               Anteil beherrschter Themen der Stufe si (0..1) oder null (Stufe leer)
 *   recommend(run)                    → { level, topicId|null } – erstes nicht beherrschtes Thema der niedrigsten Stufe < PASS
 *   result(run, now)                  → { t, level, mastered, asked } – Format von profile.place[cid] (unverändert seit ADR-7)
 *   serialize(run) / parse(json, chk) Zwischenstand für localStorage['dt-place-run']; parse gibt bei jedem Problem null
 *
 * ctx (von der Oberfläche): { topics(lv) → [Themen-IDs in Lehrplan-Reihenfolge], pool(themaId) → [1–2 Aufgaben-IDs] }
 * chk (parse):              { pid, cid, stages, now, hasTopic(id), hasEx(id) }
 *
 * Der Lauf enthält nur IDs (keine Texte) und ist KEIN Fortschritt: nicht in dt-data, nicht im Export.
 */
(function (DT) {
  'use strict';

  var LV = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var V = 1;
  var PASS = 0.75, MAX_Q = 40, STREAK = 3, TTL = 14 * 864e5;

  function isArr(x) { return Array.isArray(x); }
  function isStrArr(x) { return isArr(x) && x.every(function (s) { return typeof s === 'string' && s.length > 0; }); }
  function isInt(x, min, max) { return typeof x === 'number' && x % 1 === 0 && x >= min && x <= max; }

  function stages(complete) {
    var set = {};
    (isArr(complete) ? complete : []).forEach(function (l) { l = String(l || '').toUpperCase(); if (LV.indexOf(l) >= 0) set[l] = 1; });
    return LV.filter(function (l) { return set[l]; });
  }

  // nächstes Thema mit Aufgaben suchen, das noch in den Fragen-Deckel passt; false = Stufe zu Ende
  function nextTopic(run, ctx) {
    var tops = run.tops[run.si];
    while (run.ti < tops.length) {
      var cur = (ctx.pool(tops[run.ti]) || []).slice(0, 2);
      if (cur.length && run.sAsked + cur.length <= MAX_Q) { run.cur = cur; run.step = 0; return true; }
      if (cur.length) return false;          // Deckel erreicht
      run.ti++;                              // (sollte nicht vorkommen: tops enthält nur Themen mit Aufgaben)
    }
    return false;
  }
  // Stufe si betreten; false = Stufe ohne prüfbare Themen
  function enterStage(run, si, ctx) {
    run.si = si; run.ti = 0; run.step = 0; run.cur = []; run.streak = 0; run.sAsked = 0;
    run.tops[si] = (ctx.topics(run.stages[si]) || []).filter(function (id) { return (ctx.pool(id) || []).length > 0; });
    return nextTopic(run, ctx);
  }
  // ab Stufe si die nächste prüfbare Stufe betreten; false = keine mehr → fertig
  function enterFrom(run, si, ctx) {
    for (var i = si; i < run.stages.length; i++) { if (enterStage(run, i, ctx)) return true; }
    run.finished = true; run.cur = []; run.step = 0;
    return false;
  }

  function create(o, ctx) {
    o = o || {};
    var now = o.now || Date.now();
    var run = { v: V, pid: String(o.pid || ''), cid: String(o.cid || ''), t: now, u: now, stages: stages(o.stages),
      si: 0, ti: 0, step: 0, cur: [], tops: [], mastered: [], failed: [], streak: 0, asked: 0, sAsked: 0, askedIds: [], finished: false };
    enterFrom(run, 0, ctx);
    return run;
  }

  function current(run) { return run && !run.finished ? (run.cur[run.step] || null) : null; }

  function stageRatio(run, si) {
    var tops = (run.tops || [])[si];
    if (!tops || !tops.length) return null;
    var m = tops.filter(function (id) { return run.mastered.indexOf(id) >= 0; }).length;
    return m / tops.length;
  }

  function answer(run, ok, ctx, now) {
    var res = { next: null, stageDone: false, nextStage: false, finished: false };
    if (!run || run.finished) { res.finished = true; return res; }
    var exId = current(run);
    run.asked++; run.sAsked++; run.u = now || Date.now();
    if (exId) run.askedIds.push(exId);
    var tid = run.tops[run.si][run.ti];
    if (ok && run.step === 0 && run.cur.length > 1) { run.step = 1; res.next = run.cur[1]; return res; }
    if (ok) { run.mastered.push(tid); run.streak = 0; } else { run.failed.push(tid); run.streak++; }
    run.ti++; run.step = 0;
    if (run.streak < STREAK && nextTopic(run, ctx)) { res.next = run.cur[0]; return res; }
    // Stufe zu Ende
    res.stageDone = true;
    var r = stageRatio(run, run.si);
    if (r != null && r >= PASS && run.si + 1 < run.stages.length && enterFrom(run, run.si + 1, ctx)) {
      res.nextStage = true; res.next = run.cur[0]; return res;
    }
    run.finished = true; run.cur = []; run.step = 0; res.finished = true;
    return res;
  }

  function recommend(run) {
    var n = (run.tops || []).length, last = null;
    for (var si = 0; si < n; si++) {
      var r = stageRatio(run, si);
      if (r == null) continue;
      last = si;
      if (r < PASS) {
        var open = run.tops[si].filter(function (id) { return run.mastered.indexOf(id) < 0; })[0] || null;
        return { level: run.stages[si], topicId: open };
      }
    }
    if (last == null) return { level: run.stages[0] || 'A1', topicId: null };
    var open2 = run.tops[last].filter(function (id) { return run.mastered.indexOf(id) < 0; })[0] || null;
    return { level: run.stages[last], topicId: open2 };
  }

  // höchstes geprüftes Niveau = letzte betretene Stufe mit Themen
  function result(run, now) {
    var lv = run.stages[0] || 'A1';
    (run.tops || []).forEach(function (t, i) { if (t && t.length) lv = run.stages[i]; });
    return { t: now || Date.now(), level: lv, mastered: run.mastered.slice(), asked: run.asked };
  }

  var FIELDS = ['v', 'pid', 'cid', 't', 'u', 'stages', 'si', 'ti', 'step', 'cur', 'tops', 'mastered', 'failed', 'streak', 'asked', 'sAsked', 'askedIds', 'finished'];
  function serialize(run) {
    var o = {};
    FIELDS.forEach(function (f) { o[f] = run[f]; });
    return JSON.stringify(o);
  }

  function parse(json, chk) {
    chk = chk || {};
    var r;
    if (typeof json !== 'string' || !json) return null;
    try { r = JSON.parse(json); } catch (e) { return null; }
    if (!r || typeof r !== 'object' || isArr(r)) return null;
    if (r.v !== V || r.pid !== chk.pid || r.cid !== chk.cid) return null;
    var now = chk.now || Date.now();
    if (typeof r.u !== 'number' || typeof r.t !== 'number' || now - r.u > TTL || r.u - now > 864e5) return null;
    if (!isStrArr(r.stages) || r.stages.join() !== stages(chk.stages).join() || r.stages.join() !== stages(r.stages).join()) return null;
    if (!isArr(r.tops) || !r.tops.every(isStrArr) || !r.tops.length || r.tops.length > r.stages.length) return null;
    if (!isInt(r.si, 0, r.tops.length - 1) || r.tops.length !== r.si + 1) return null;
    if (!isStrArr(r.mastered) || !isStrArr(r.failed) || !isStrArr(r.askedIds) || !isArr(r.cur) || !isStrArr(r.cur)) return null;
    if (!isInt(r.streak, 0, STREAK) || !isInt(r.asked, 0, MAX_Q * LV.length) || !isInt(r.sAsked, 0, MAX_Q) || typeof r.finished !== 'boolean') return null;
    if (!r.finished && (!isInt(r.ti, 0, r.tops[r.si].length - 1) || !isInt(r.step, 0, r.cur.length - 1) || !r.cur.length || r.cur.length > 2)) return null;
    var hasT = typeof chk.hasTopic === 'function' ? chk.hasTopic : function () { return true; };
    var hasE = typeof chk.hasEx === 'function' ? chk.hasEx : function () { return true; };
    var topicsOk = r.tops.every(function (t) { return t.every(hasT); }) && r.mastered.every(hasT) && r.failed.every(hasT);
    if (!topicsOk || !r.cur.every(hasE)) return null;
    var out = {};
    FIELDS.forEach(function (f) { out[f] = r[f]; });
    return out;
  }

  DT.placement = { V: V, PASS: PASS, MAX_Q: MAX_Q, STREAK: STREAK, TTL: TTL, KEY: 'dt-place-run',
    stages: stages, create: create, answer: answer, current: current, stageRatio: stageRatio,
    recommend: recommend, result: result, serialize: serialize, parse: parse };
})(window.DT = window.DT || {});
