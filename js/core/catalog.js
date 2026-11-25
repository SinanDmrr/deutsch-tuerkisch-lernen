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
    // Schreibaufgaben (ADR-13): je Kurs+Niveau ein Pseudo-Thema „<kurs>-<niv>-write“ (Schreibwerkstatt). Übungs-ID = Aufgaben-ID.
    // Bewusst NICHT in topicsOf (keine Prozente, kein Themen-Fortschritt); Liste über writesOf.
    Object.keys(K.writes || {}).sort().forEach(function (id) {
      var w = K.writes[id], tid = w.key + '-write', c = K.content[tid];
      if (!c || c.kind !== 'write') c = K.content[tid] = { kind: 'write', exercises: [] };
      if (c.exercises.indexOf(w) < 0) c.exercises.push(w);
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

  /* ADR-15: Pakete (Kurs+Niveau, 'de-a2') können ungeladen sein. K.loaded = { 'de-a1': true, … } setzt die App;
   * fehlt K.loaded (Node, Validator, Werkzeuge), gilt alles als geladen. */
  function levelKey(cid, lv) { return cid + '-' + String(lv).toLowerCase(); }
  function levelLoaded(K, key) { return !K.loaded || !!K.loaded[key]; }
  // Zählbare Aufgaben (n, wie topicStats) und alle Aufgaben je Fertigkeit (sk, wie skillOf) einer Aufgabenliste
  function countEx(list, kind) {
    var isC = DT.check && DT.check.isCountable, n = 0, sk = {};
    (list || []).forEach(function (ex) {
      if (isC ? isC(ex) : true) n++;
      var k = skillKind(ex, kind);
      if (k && k !== 'write') sk[k] = (sk[k] || 0) + 1;
    });
    return { n: n, sk: sk };
  }
  function summaryFromContent(K, key) {
    var pre = key + '-', out = { topics: {}, dialogs: [], texts: [], writes: [], words: 0, wordsByField: {} };
    Object.keys(K.content).sort().forEach(function (id) {
      var c = K.content[id];
      if (id.indexOf(pre) !== 0 || (K.dialogs || {})[id] || (K.texts || {})[id] || !c || c.kind === 'write' || !(c.exercises && c.exercises.length)) return;
      var x = countEx(c.exercises, c.kind); out.topics[id] = { n: x.n, sk: x.sk };
    });
    Object.keys(K.dialogs || {}).sort().forEach(function (id) {
      if (id.indexOf(pre) !== 0) return;
      var d = K.dialogs[id], c = K.content[id], x = countEx(c ? c.exercises : (d.questions || []), 'dialog');
      out.dialogs.push({ id: id, level: d.level, title: d.title, sub: d.sub, n: x.n, sk: x.sk });
    });
    Object.keys(K.texts || {}).sort().forEach(function (id) {
      if (id.indexOf(pre) !== 0) return;
      var t = K.texts[id], kind = t.kind === 'listen' ? 'listen' : 'read', x = countEx(t.questions, kind);
      out.texts.push({ id: id, level: t.level, kind: t.kind, title: t.title, sub: t.sub, n: x.n, sk: x.sk });
    });
    out.writes = Object.keys(K.writes || {}).filter(function (id) { return id.indexOf(pre) === 0; }).sort();
    out.opinion = out.writes.filter(function (id) { return K.writes[id].opinion === 1; }).length;   // Meinungstexte (B1) – für ungeladene Niveaus
    (K.vocab[key] || []).forEach(function (w) { out.words++; if (w.topic) out.wordsByField[w.topic] = (out.wordsByField[w.topic] || 0) + 1; });
    return out;
  }
  /* Eine Quelle für Zahlen eines Pakets: aus geladenem Inhalt oder – ungeladen – aus dem Manifest.
   * → { topics:{ id:{ n, sk } }, dialogs:[{ id, level, title, sub, n, sk }], texts:[…, kind], writes:[ids], words, wordsByField } | null */
  function levelSummary(K, key) {
    if (levelLoaded(K, key)) return summaryFromContent(K, key);
    var m = K.manifest && K.manifest[key];
    return m ? { topics: m.topics || {}, dialogs: m.dialogs || [], texts: m.texts || [], writes: m.writes || [], opinion: m.opinion || 0, words: m.words || 0, wordsByField: m.wordsByField || {} } : null;
  }

  // Ungeladene Niveaus: Zeilen aus Lehrplan + Manifest mit lazy:true (avail:false, data:null, n = zählbare Aufgaben, sk).
  // Wer Aufgaben braucht, prüft weiter avail; Zähler/Listen dürfen lazy-Zeilen als „hat Inhalt“ werten (Laden beim Öffnen).
  function topicsOf(K, cid) {
    var c = K.courses[cid], list = [];
    LEVELS.forEach(function (lv) {
      var key = levelKey(cid, lv), sm = levelLoaded(K, key) ? null : levelSummary(K, key);
      if (sm) {
        (c.levels[lv] || []).forEach(function (row, i) {
          var m = sm.topics[row[0]];
          list.push({ id: row[0], level: lv, num: i + 1, title: cid === 'de' ? row[2] : row[1], sub: cid === 'de' ? row[1] : row[2], data: null, avail: false, lazy: !!m, n: m ? m.n : 0, sk: m ? m.sk : {} });
        });
        sm.dialogs.filter(function (d) { return d.level === lv; }).forEach(function (d, i) {
          list.push({ id: d.id, level: lv, num: 'D' + (i + 1), title: cid === 'de' ? d.sub : d.title, sub: cid === 'de' ? d.title : d.sub, kind: 'dialog', data: null, avail: false, lazy: true, n: d.n, sk: d.sk });
        });
        var mR = 0, mL = 0;
        sm.texts.filter(function (x) { return x.level === lv; }).forEach(function (x) {
          var lis = x.kind === 'listen';
          list.push({ id: x.id, level: lv, num: lis ? 'H' + (++mL) : 'T' + (++mR), title: cid === 'de' ? x.sub : x.title, sub: cid === 'de' ? x.title : x.sub, kind: 'text', data: null, avail: false, lazy: true, n: x.n, sk: x.sk });
        });
        return;
      }
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

  // Schreibaufgaben eines Kurses (optional nur ein Niveau), sortiert nach ID
  function writesOf(K, cid, lv) {
    return Object.keys(K.writes || {}).filter(function (id) {
      return id.indexOf(cid + '-') === 0 && (!lv || id.split('-')[1] === lv.toLowerCase());
    }).sort().map(function (id) { return K.writes[id]; });
  }
  function writeLevel(w) { return String(w && w.id || '').split('-')[1].toUpperCase(); }

  // „Schwer“ (ADR-12.1): Fragen zu Lese-/Hörtexten gehören nicht in den 5-Minuten-Tagesmix
  function isHeavy(K, topicId) { var c = K.content && K.content[topicId]; return !!c && (c.kind === 'read' || c.kind === 'listen'); }

  /* Fertigkeiten je Niveau (ADR-12.9 skillOf, A2-Konzept §8) – nur aus vorhandenem Fortschritt berechnet, nichts wird gespeichert.
   * Zuordnung einer Aufgabe: speak/respond → speak (geübt, Bonus); listen/dictation oder Hörtext → listen; Lesetext → read;
   * Dialog/Rollenspiel → dialog; sonst grammar. Schreibaufgaben (K.writes) → write (geübt).
   * pr = prog[kurs]; o.skip = { themenId: true } (per Einstufung übersprungen → fällt aus dem Nenner, wie beim Zertifikat);
   * o.writeDone(id) → true, wenn die Schreibaufgabe „geübt“ ist (Standard: prog-Eintrag richtig).
   * Ergebnis: { grammar|read|listen|dialog: { n, c, w }, speak|write: { n, done } } */
  var SKILLS = ['grammar', 'read', 'listen', 'dialog', 'speak', 'write'];
  function skillKind(ex, kind) {
    if (!ex) return null;
    if (ex.t === 'speak' || ex.t === 'respond') return 'speak';
    if (ex.t === 'write') return 'write';
    if (kind === 'listen' || ex.t === 'listen' || ex.t === 'dictation') return 'listen';
    if (kind === 'read') return 'read';
    if (kind === 'dialog') return 'dialog';
    return 'grammar';
  }
  function skillOf(K, cid, lv, pr, o) {
    o = o || {}; pr = pr || {};
    var out = { grammar: { n: 0, c: 0, w: 0 }, read: { n: 0, c: 0, w: 0 }, listen: { n: 0, c: 0, w: 0 }, dialog: { n: 0, c: 0, w: 0 }, speak: { n: 0, done: 0 }, write: { n: 0, done: 0 } };
    var key = levelKey(cid, lv);
    if (!levelLoaded(K, key)) {   // ADR-15: ungeladen → nur Summen aus dem Manifest (ungeladene Niveaus haben keinen Fortschritt)
      topicsOf(K, cid).forEach(function (tp) {
        if (tp.level !== lv || !tp.lazy || (o.skip && o.skip[tp.id])) return;
        Object.keys(tp.sk || {}).forEach(function (k) { if (out[k]) out[k].n += tp.sk[k]; });
      });
      var sm = levelSummary(K, key); out.write.n = sm ? sm.writes.length : 0;
      if (sm && sm.opinion) { out.write.op = sm.opinion; out.write.opDone = 0; }
      return out;
    }
    topicsOf(K, cid).forEach(function (tp) {
      if (tp.level !== lv || !tp.avail || (o.skip && o.skip[tp.id])) return;
      var kind = tp.data && tp.data.kind;
      (tp.data.exercises || []).forEach(function (ex) {
        var k = skillKind(ex, kind), r = pr[ex.id];
        if (!k || k === 'write') return;
        if (k === 'speak') { out.speak.n++; if (r && r.s === 'c') out.speak.done++; return; }
        out[k].n++;
        if (r) { if (r.s === 'c') out[k].c++; else out[k].w++; }
      });
    });
    writesOf(K, cid, lv).forEach(function (w) {
      var wd = o.writeDone ? o.writeDone(w.id) : !!(pr[w.id] && pr[w.id].s === 'c');
      out.write.n++; if (wd) out.write.done++;
      if (w.opinion === 1) { out.write.op = (out.write.op || 0) + 1; out.write.opDone = out.write.opDone || 0; if (wd) out.write.opDone++; }   // Meinungstext (B1)
    });
    return out;
  }

  /* Zertifikatsregeln je Niveau (A2-Konzept §8, Punkt 11.6 der Abnahme):
   *   ex = Anteil richtiger gewerteter Aufgaben, words = Anteil Wörter im Fach „sicher“,
   *   skill = Mindestanteil je Bereich (Bereiche ohne Aufgaben entfallen), writes = Mindestzahl geübter Schreibaufgaben (höchstens alle).
   * Sprechen ist bewusst keine Bedingung (browserabhängig, ADR-6). Freigabe nur für vollständige Niveaus (complete im Lehrplan, prüft der Aufrufer). */
  var CERT_RULES = {
    A1: { ex: 0.8, words: 0.7 },
    A2: { ex: 0.8, words: 0.7, skill: { grammar: 0.6, read: 0.6, listen: 0.6, dialog: 0.6 }, writes: 6 },
    B1: { ex: 0.8, words: 0.7, skill: { grammar: 0.6, read: 0.6, listen: 0.6, dialog: 0.6 }, writes: 8, opinion: 2 }   // B1: ≥ 8 Schreibaufgaben, davon ≥ 2 Meinungstexte
  };
  // rule = CERT_RULES[lv]; st = { c, n, wk, wn, skills: skillOf(…) } → { ok, exOk, wOk, skills: { bereich: { p, n, need, ok } }, writes: { done, n, need, ok } | null, opinion: { … } | null }
  function certCheck(rule, st) {
    rule = rule || CERT_RULES.A1; st = st || {};
    var sk = st.skills || {};
    var res = { exOk: st.n > 0 && st.c / st.n >= rule.ex, wOk: !st.wn || st.wk / st.wn >= rule.words, skills: {}, writes: null };
    var ok = res.exOk && res.wOk && !((rule.skill || rule.writes || rule.opinion) && !st.skills);   // Regel mit Bereichen braucht Fertigkeitszahlen
    Object.keys(rule.skill || {}).forEach(function (k) {
      var x = sk[k] || { n: 0, c: 0 }, need = rule.skill[k], good = !x.n || x.c / x.n >= need;
      res.skills[k] = { p: x.n ? Math.round(x.c / x.n * 100) : 0, n: x.n, need: Math.round(need * 100), ok: good };
      if (!good) ok = false;
    });
    if (rule.writes) {
      var wn = (sk.write && sk.write.n) || 0, wd = (sk.write && sk.write.done) || 0, wneed = Math.min(rule.writes, wn);
      res.writes = { done: wd, n: wn, need: wneed, ok: wd >= wneed };
      if (!res.writes.ok) ok = false;
    }
    res.opinion = null;
    if (rule.opinion) {
      var on = (sk.write && sk.write.op) || 0, od = (sk.write && sk.write.opDone) || 0, oneed = Math.min(rule.opinion, on);
      res.opinion = { done: od, n: on, need: oneed, ok: od >= oneed };
      if (!res.opinion.ok) ok = false;
    }
    res.ok = ok;
    return res;
  }

  /* Fokus-Niveau (ADR-11.2, A1-Aufrüstung Paket 0) – nichts gespeichert, alles aus dem Fortschritt berechnet.
   * rows: Grammatikthemen mit Inhalt in Lernreihenfolge [{ level, n, c, skip }]
   * o: { cert: { A1: Zeitstempel|true }, answered: { A2: true } }  (Zertifikats-Abzeichen; Niveaus mit mindestens einer Antwort)
   * Ein Niveau gilt als erledigt, wenn (a) sein Zertifikats-Abzeichen da ist, (b) im nächsthöheren Niveau schon geantwortet
   * wurde oder (c) ≥ 75 % seiner Themen erledigt oder übersprungen sind. So werfen neue Themen/Aufgaben in einem
   * erweiterten Niveau niemanden zurück, der schon weiter ist. Ergebnis: 'cert' | 'next' | 'share' | '' */
  var FOCUS_SHARE = 0.75;
  function levelDone(rows, lv, o) {
    o = o || {};
    if (o.cert && o.cert[lv]) return 'cert';
    var nx = LEVELS[LEVELS.indexOf(lv) + 1];
    if (nx && o.answered && o.answered[nx]) return 'next';
    var n = 0, closed = 0;
    (rows || []).forEach(function (r) { if (r.level !== lv) return; n++; if (r.skip || r.c >= r.n) closed++; });
    return n && closed / n >= FOCUS_SHARE ? 'share' : '';
  }
  function focusLevel(rows, o) {
    rows = rows || [];
    var memo = {};
    function done(lv) { if (!(lv in memo)) memo[lv] = levelDone(rows, lv, o); return memo[lv]; }
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (r.c < r.n && !r.skip && !done(r.level)) return r.level;
    }
    var top = 'A1'; rows.forEach(function (r) { if (LEVELS.indexOf(r.level) > LEVELS.indexOf(top)) top = r.level; });
    return top;
  }
  /* Grundstock/Erweiterung (Inhaltsfeld ext:1 an neuen Wörtern, Aufgaben oder ganzen Themen – kein Speicherfeld).
   * items: [{ ext, done }] → { base: { n, d }, ext: { n, d } } */
  function extSplit(items) {
    var out = { base: { n: 0, d: 0 }, ext: { n: 0, d: 0 } };
    (items || []).forEach(function (x) { var b = x.ext ? out.ext : out.base; b.n++; if (x.done) b.d++; });
    return out;
  }

  DT.catalog = { levelDone: levelDone, focusLevel: focusLevel, FOCUS_SHARE: FOCUS_SHARE, extSplit: extSplit, SKILLS: SKILLS, skillKind: skillKind, skillOf: skillOf, CERT_RULES: CERT_RULES, certCheck: certCheck, hasRole: hasRole, dialogLines: dialogLines, roleExercises: roleExercises, checkRoleplay: checkRoleplay, isHeavy: isHeavy, writesOf: writesOf, writeLevel: writeLevel, LEVELS: LEVELS, register: register, topicsOf: topicsOf, levelKey: levelKey, levelLoaded: levelLoaded, levelSummary: levelSummary };
})(window.DT = window.DT || {});
