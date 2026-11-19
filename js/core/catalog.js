/* Aufgaben-Katalog (ADR-12.9) – rein, ohne DOM/localStorage, in Node testbar.
 * Aus js/app.js herausgelöst (reine Verschiebung, Verhalten unverändert):
 *   register(K) = Dialoge und Lesetexte als Pseudo-Themen in K.content eintragen und den Aufgaben-Index (EXI) bauen,
 *   topicsOf(K, cid) = Themenliste eines Kurses (Lehrplan + Dialoge + Lesetexte je Niveau).
 * Der Index selbst gehört dem Aufrufer (app.js hält EXI); hier wird nichts gespeichert.
 */
(function (DT) {
  'use strict';

  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  /* Rollenspiel (ADR-12.6): Dialogzeilen mit me:true sind Wahlzeilen der eigenen Rolle:
   *   { me:true, id:'<dialogId>.c<n>', o:[…2–4 Optionen], a:Index, why:{ Index: warum falsch }, e:'Erklärung', n:'Übersetzung der richtigen Zeile' }
   * Dialog-Felder: role (Name der Rolle in der Erklärsprache, Pflicht), roleG ('f'|'m', optional: Stimme der eigenen Zeilen).
   * dialogLines(d) = Zeilen mit Sprecher/Text für Anzeige und Vorlesen (Wahlzeile → richtige Antwort in der Rolle); ohne Wahlzeilen: dieselbe Liste. */
  function hasRole(d) { return !!d && (d.lines || []).some(function (l) { return l && l.me; }); }
  function dialogLines(d) {
    if (!hasRole(d)) return (d && d.lines) || [];
    return d.lines.map(function (l) {
      return l.me ? { me: true, id: l.id, s: d.role || '', g: d.roleG || '', t: l.o[l.a], n: l.n } : l;
    });
  }
  // Aus den Wahlzeilen abgeleitete Aufgaben in Dialogreihenfolge: { id, t:'mc', role:true, ctx:[≤3 vorherige Zeilen], o, a, why, e, ans, ansN }
  function roleExercises(d) {
    if (!hasRole(d)) return [];
    var all = dialogLines(d), out = [];
    d.lines.forEach(function (l, i) {
      if (!l.me) return;
      out.push({
        id: l.id, t: 'mc', role: true,
        ctx: all.slice(Math.max(0, i - 3), i).map(function (x) { return { s: x.s, g: x.g || '', t: x.t, n: x.n, me: !!x.me }; }),
        o: l.o, a: l.a, why: l.why, e: l.e, ans: l.o[l.a], ansN: l.n
      });
    });
    return out;
  }
  // Format-Prüfung (Validator): → { errors:[[Text, Detail?]], warnings:[…] }; nur für Dialoge mit Wahlzeilen aussagekräftig
  function checkRoleplay(id, d) {
    var errors = [], warnings = [];
    function err(m, x) { errors.push([m, x]); }
    function warn(m, x) { warnings.push([m, x]); }
    if (!hasRole(d)) return { errors: errors, warnings: warnings };
    if (!String(d.role || '').trim()) err('Rollenspiel: role (Name der Rolle in der Erklärsprache) fehlt');
    if (d.roleG != null && d.roleG !== 'f' && d.roleG !== 'm') err('Rollenspiel: roleG muss f oder m sein', d.roleG);
    var n = 0, seen = {}, re = new RegExp('^' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\.c\\d+$');
    d.lines.forEach(function (l, i) {
      if (!l.me) {
        if (!l.s || !l.t || !l.n) err('Rollenspiel: Dialogzeile unvollständig (s, t, n)', i);
        else if (l.g !== 'f' && l.g !== 'm') err('Rollenspiel: Zeile braucht g (f|m) für die Stimme', i);
        return;
      }
      n++;
      var w = 'Wahlzeile ' + (l.id || '#' + i);
      if (!l.id || !re.test(l.id)) err('Wahlzeile: ID muss <dialogId>.c<n> sein (z. B. ' + id + '.c1)', l.id);
      else if (seen[l.id]) err('Wahlzeile: ID doppelt', l.id); else seen[l.id] = 1;
      if (l.t != null) err(w + ': kein t (gesprochen wird o[a])');
      if (!Array.isArray(l.o) || l.o.length < 2 || l.o.length > 4 || l.o.some(function (x) { return typeof x !== 'string' || !x.trim(); })) { err(w + ': o braucht 2–4 Optionen (Texte)'); return; }
      if (l.o.some(function (x, j) { return l.o.indexOf(x) !== j; })) err(w + ': Optionen nicht eindeutig');
      if (typeof l.a !== 'number' || l.a % 1 !== 0 || l.a < 0 || l.a >= l.o.length) { err(w + ': a ist kein gültiger Index'); return; }
      l.o.forEach(function (_, j) { if (j !== l.a && !(l.why && String(l.why[j] || '').trim())) err(w + ': why fehlt für falsche Option', j); });
      Object.keys(l.why || {}).forEach(function (k) { if (+k === l.a || !(k in l.o)) warn(w + ': why-Schlüssel ist die richtige oder keine Option', k); });
      if (!String(l.e || '').trim()) err(w + ': e (Erklärung) fehlt');
      if (!String(l.n || '').trim()) err(w + ': n (Übersetzung der richtigen Zeile) fehlt');
      if (i === 0 || d.lines[i - 1].me) warn(w + ': davor steht keine normale Zeile (kein Kontext)');
    });
    if (n < 3 || n > 4) err('Rollenspiel braucht 3–4 Wahlzeilen', n);
    return { errors: errors, warnings: warnings };
  }

  // Alltagsdialoge werden wie Themen behandelt (eigene Statistik, Fehlerwiederholung, Überblick);
  // Lesetexte (ADR-12.2) genauso: Fragen laufen über Fortschritt, Lücken und Wiederholung.
  // Liefert den Index { Aufgaben-ID: { topicId, idx, ex } }. Idempotent, kann nach Nachladen erneut aufgerufen werden.
  function register(K, log) {
    log = log || {};
    Object.keys(K.dialogs || {}).forEach(function (id) {
      var d = K.dialogs[id];
      // Wahlzeilen (Rollenspiel) zuerst, dann die Verständnisfragen; ohne Wahlzeilen unverändert
      K.content[id] = { kind: 'dialog', dialog: d, exercises: hasRole(d) ? roleExercises(d).concat(d.questions || []) : (d.questions || []) };
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

  DT.catalog = { hasRole: hasRole, dialogLines: dialogLines, roleExercises: roleExercises, checkRoleplay: checkRoleplay, isHeavy: isHeavy, LEVELS: LEVELS, register: register, topicsOf: topicsOf };
})(window.DT = window.DT || {});
