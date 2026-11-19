/* Aufgaben-Katalog (ADR-12.9) – rein, ohne DOM/localStorage, in Node testbar.
 * Aus js/app.js herausgelöst (reine Verschiebung, Verhalten unverändert):
 *   register(K) = Dialoge und Lesetexte als Pseudo-Themen in K.content eintragen und den Aufgaben-Index (EXI) bauen,
 *   topicsOf(K, cid) = Themenliste eines Kurses (Lehrplan + Dialoge + Lesetexte je Niveau).
 * Der Index selbst gehört dem Aufrufer (app.js hält EXI); hier wird nichts gespeichert.
 */
(function (DT) {
  'use strict';

  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  // Alltagsdialoge werden wie Themen behandelt (eigene Statistik, Fehlerwiederholung, Überblick);
  // Lesetexte (ADR-12.2) genauso: Fragen laufen über Fortschritt, Lücken und Wiederholung.
  // Liefert den Index { Aufgaben-ID: { topicId, idx, ex } }. Idempotent, kann nach Nachladen erneut aufgerufen werden.
  function register(K, log) {
    log = log || {};
    Object.keys(K.dialogs || {}).forEach(function (id) {
      var d = K.dialogs[id];
      K.content[id] = { kind: 'dialog', dialog: d, exercises: d.questions || [] };
    });
    Object.keys(K.texts || {}).forEach(function (id) {
      var x = K.texts[id];
      K.content[id] = { kind: x.kind === 'listen' ? 'listen' : 'read', text: x, exercises: x.questions || [] };
    });
    var EXI = {};
    Object.keys(K.content).forEach(function (tid) {
      (K.content[tid].exercises || []).forEach(function (ex, i) {
        if (!ex.id) { ex.id = tid + '#' + i; if (log.warn) log.warn('Aufgabe ohne feste ID:', tid, i); }
        if (EXI[ex.id] && log.error) log.error('Doppelte Aufgaben-ID:', ex.id);
        EXI[ex.id] = { topicId: tid, idx: i, ex: ex };
      });
    });
    return EXI;
  }

  function topicsOf(K, cid) {
    var c = K.courses[cid], list = [];
    LEVELS.forEach(function (lv) {
      (c.levels[lv] || []).forEach(function (row, i) {
        var data = K.content[row[0]];
        list.push({ id: row[0], level: lv, num: i + 1, title: cid === 'de' ? row[2] : row[1], sub: cid === 'de' ? row[1] : row[2], data: data, avail: !!(data && data.exercises && data.exercises.length) });
      });
      Object.keys(K.dialogs || {}).filter(function (id) { return id.indexOf(cid + '-') === 0 && K.dialogs[id].level === lv; }).sort()
        .forEach(function (id, i) {
          var d = K.dialogs[id];
          list.push({ id: id, level: lv, num: 'D' + (i + 1), title: cid === 'de' ? d.sub : d.title, sub: cid === 'de' ? d.title : d.sub, kind: 'dialog', data: K.content[id], avail: true });
        });
      var nR = 0, nL = 0;
      Object.keys(K.texts || {}).filter(function (id) { return id.indexOf(cid + '-') === 0 && K.texts[id].level === lv; }).sort()
        .forEach(function (id) {
          var x = K.texts[id], lis = x.kind === 'listen';
          list.push({ id: id, level: lv, num: lis ? 'H' + (++nL) : 'T' + (++nR), title: cid === 'de' ? x.sub : x.title, sub: cid === 'de' ? x.title : x.sub, kind: 'text', data: K.content[id], avail: true });
        });
    });
    return list;
  }

  // „Schwer“ (ADR-12.1): Fragen zu Lese-/Hörtexten gehören nicht in den 5-Minuten-Tagesmix
  function isHeavy(K, topicId) { var c = K.content && K.content[topicId]; return !!c && (c.kind === 'read' || c.kind === 'listen'); }

  DT.catalog = { isHeavy: isHeavy, LEVELS: LEVELS, register: register, topicsOf: topicsOf };
})(window.DT = window.DT || {});
