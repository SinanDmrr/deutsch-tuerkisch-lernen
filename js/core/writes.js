/* Eigene Texte der Schreibaufgaben `write` (ADR-13, Schema 4) – rein, ohne DOM, in Node testbar.
 * Ablage im Profil: p.writes = { de: { '<id>': Eintrag }, tr: { … } }, Eintrag:
 *   d/dt   Entwurf (automatisch gespeichert) · x/t  letzte abgegebene Fassung („Fertig“) · n  Zahl der Abgaben
 *   x0/t0  erste abgegebene Fassung (x0 nur, wenn sie sich von x unterscheidet; t0 = Zeit der ersten Abgabe)
 *   xk/tk  nur nach Zusammenführen: Fassung(en) des anderen Geräts, die sonst verloren wären
 *   r      „Kurs zurückgesetzt“ mit Texten behalten: Abgaben mit t <= r gelten als „früher geschrieben“ (Archiv).
 *          r gilt nur für die Abgabe, die beim Zurücksetzen da war: archiveCourse setzt r >= t, submit löscht r,
 *          pick übernimmt r der unterlegenen Seite nur, wenn beide dieselbe Abgabe (x und t) haben (Uhrabweichung).
 * Grundsatz: Kein Text geht stillschweigend verloren. Gekürzt wird nur beim Tippen/Speichern (put/submit, 1 500 Zeichen),
 * nie beim Zusammenführen.
 */
(function (DT) {
  'use strict';
  var MAX_FIELD = 1500, MAX_TOTAL = 100000;
  var COURSES = ['de', 'tr'];
  var TEXT = ['d', 'x', 'x0', 'xk'];
  var ID_RE = /^(de|tr)-[abc][12]-s\d{2}$/;
  var SEP = '\n\n———\n\n';     // trennt mehrere gerettete Fassungen in xk
  var MAX_XK = 20;                // höchstens so viele xk-Teile aus FREMDEN Daten (Import/Übertragung)

  function obj(x) { return x && typeof x === 'object' && !Array.isArray(x); }
  function clone(x) { return x === undefined ? undefined : JSON.parse(JSON.stringify(x)); }
  function str(x) { return typeof x === 'string'; }
  function cut(s) { s = String(s == null ? '' : s); return s.length > MAX_FIELD ? s.slice(0, MAX_FIELD) : s; }

  /** p.writes (und je Kurs ein Objekt) anlegen; idempotent, überschreibt nichts. */
  function ensure(p) {
    if (!obj(p)) return {};
    if (!obj(p.writes)) p.writes = {};
    COURSES.forEach(function (c) { if (!obj(p.writes[c])) p.writes[c] = {}; });
    return p.writes;
  }
  function get(p, c, id) { return (obj(p) && obj(p.writes) && obj(p.writes[c]) && p.writes[c][id]) || null; }
  function entrySize(e) { var n = 0; if (obj(e)) TEXT.forEach(function (f) { if (str(e[f])) n += e[f].length; }); return n; }
  /** Zeichen aller eigenen Texte eines Profils (beide Kurse). */
  function size(p) {
    var n = 0;
    if (obj(p) && obj(p.writes)) Object.keys(p.writes).forEach(function (c) {
      var m = p.writes[c]; if (obj(m)) Object.keys(m).forEach(function (id) { n += entrySize(m[id]); });
    });
    return n;
  }
  function fits(p, oldE, newE) { var after = size(p) - entrySize(oldE) + entrySize(newE); return after <= MAX_TOTAL || entrySize(newE) <= entrySize(oldE); }
  function setEntry(p, c, id, e) { ensure(p); if (e) p.writes[c][id] = e; else delete p.writes[c][id]; }

  /** Entwurf speichern. → { ok, changed, error?:'budget', prev } (prev = vorheriger Eintrag für restore).
   *  Leerer Text entfernt den Entwurf. Ein Entwurf, der der Abgabe gleicht, wird nicht gespeichert. */
  function put(p, c, id, text, now) {
    var old = get(p, c, id), prev = clone(old) || null, e = clone(old) || {};
    text = cut(text);
    if (!text.trim() || (!str(e.d) && text === e.x && hasCurrent(e))) { delete e.d; delete e.dt; }
    else { e.d = text; e.dt = now || Date.now(); }
    if ((old ? old.d : undefined) === e.d) return { ok: true, changed: false, prev: prev };
    if (!fits(p, old, e)) return { ok: false, changed: false, error: 'budget', prev: prev };
    setEntry(p, c, id, Object.keys(e).length ? e : null);
    return { ok: true, changed: true, prev: prev };
  }
  /** Abgabe („Fertig“). x0 = erste Fassung (einmal gesetzt, nie überschrieben), x = text, n++, Entwurf weg. */
  function submit(p, c, id, text, now) {
    now = now || Date.now();
    var old = get(p, c, id), prev = clone(old) || null, e = clone(old) || {};
    text = cut(text);
    if (!text.trim()) return { ok: false, changed: false, error: 'empty', prev: prev };
    var first = str(e.x0) ? e.x0 : (str(e.x) ? e.x : text);
    if (!e.t0) e.t0 = str(e.x) ? (e.t || now) : now;
    // Archivierte Abgabe (nach „Kurs zurücksetzen“) wird nicht überschrieben, sondern nach xk gerettet
    if (isArchived(e) && e.x !== first && e.x !== text && (!str(e.xk) || e.xk.split(SEP).indexOf(e.x) < 0)) {
      e.xk = str(e.xk) && e.xk ? e.x + SEP + e.xk : e.x; e.tk = e.t || now;
    }
    e.x = text; e.t = now; e.n = (e.n || 0) + 1;
    delete e.r;                   // neue Abgabe ist immer aktuell – auch wenn ein anderes Gerät mit vorgehender Uhr r gesetzt hat
    if (first !== text) e.x0 = first; else delete e.x0;
    delete e.d; delete e.dt;
    if (!fits(p, old, e)) return { ok: false, changed: false, error: 'budget', prev: prev };
    setEntry(p, c, id, e);
    return { ok: true, changed: true, prev: prev };
  }
  /** Vorherigen Stand wiederherstellen (Rücknahme bei Speicherfehler). */
  function restore(p, c, id, prev) { setEntry(p, c, id, prev ? clone(prev) : null); }
  function remove(p, c, id) { var e = get(p, c, id); if (e) delete p.writes[c][id]; return !!e; }
  /** Eine einzelne Fassung löschen: part = 'x0' (erste Fassung), 'xk' (mit idx = Teil-Nr.) oder 'x' (nur eine
   *  archivierte Abgabe; die aktuelle Abgabe löscht man mit remove). Bleibt kein Text übrig, verschwindet der Eintrag.
   *  → { ok, prev } (prev für restore). */
  function removePart(p, c, id, part, idx) {
    var old = get(p, c, id), prev = clone(old) || null, e = clone(old);
    if (!e) return { ok: false, prev: prev };
    if (part === 'x0' && str(e.x0)) delete e.x0;
    else if (part === 'xk' && str(e.xk)) {
      var parts = e.xk.split(SEP);
      if (!(idx >= 0 && idx < parts.length)) return { ok: false, prev: prev };
      parts.splice(idx, 1);
      if (parts.length) e.xk = parts.join(SEP); else { delete e.xk; delete e.tk; }
    } else if (part === 'x' && isArchived(e)) { delete e.x; delete e.t; delete e.r; }
    else return { ok: false, prev: prev };
    var any = TEXT.some(function (f) { return str(e[f]); });
    setEntry(p, c, id, any ? e : null);
    return { ok: true, prev: prev };
  }
  function removeCourse(p, c) { ensure(p); var n = Object.keys(p.writes[c]).length; p.writes[c] = {}; return n; }
  /** „Kurs zurücksetzen“ mit Texten: Abgaben archivieren (Entwürfe bleiben im Editor). */
  function archiveCourse(p, c, now) {
    ensure(p); var m = p.writes[c], n = 0;
    now = now || Date.now();
    // r >= t: auch eine Abgabe mit „Zukunftszeit“ (anderes Gerät, Uhr vorgehend) wird sicher archiviert
    Object.keys(m).forEach(function (id) { if (str(m[id].x)) { m[id].r = Math.max(now, m[id].t || 0); n++; } });
    return n;
  }

  /** Status: 'draft' (nur Entwurf) · 'submitted' (abgegeben, Checkliste offen) · 'done' (geübt) · '' (nichts/Archiv).
   *  „geübt“ steht nur in prog (record), nicht doppelt in writes. */
  function isArchived(e) { return !!(e && str(e.x) && e.r && (e.t || 0) <= e.r); }
  function hasCurrent(e) { return !!(e && str(e.x) && !isArchived(e)); }
  function status(e, progRec) {
    if (progRec && progRec.s === 'c' && hasCurrent(e)) return 'done';   // kein „geübt“ ohne aktuellen Text
    if (hasCurrent(e)) return 'submitted';
    if (e && str(e.d) && e.d.trim()) return 'draft';
    return '';
  }

  /** Wörter zählen (Zielsprache; Zahlen zählen mit). */
  function countWords(s) {   // Leerraum trennt; „Wort“ = enthält Buchstabe/Ziffer (lateinisch inkl. ä ö ü ß ç ğ ı ş)
    return String(s || '').split(/[\s\/–—]+/).filter(function (w) { return /[0-9A-Za-zÀ-ɏ]/.test(w); }).length;
  }
  /** Inhaltspunkte, zu denen kein Leitwort im Text vorkommt (Index-Liste). fold = DT.check.fold. */
  function missingPoints(task, text, fold) {
    var hint = (task && task.hint) || [], f = fold || function (x) { return String(x).toLowerCase(); }, body = f(String(text || ''));
    var out = [];
    hint.forEach(function (words, i) { if (Array.isArray(words) && words.length && !words.some(function (w) { return body.indexOf(f(w)) >= 0; })) out.push(i); });
    return out;
  }

  /* ---------- Zusammenführen (Import/Übertragung): je Kurs und ID ---------- */
  function pick(a, b) {
    if (!obj(a)) return clone(b); if (!obj(b)) return a;
    var out = {}, ta = a.t || 0, tb = b.t || 0;
    var win = str(b.x) && (!str(a.x) || tb > ta) ? b : a, lose = win === a ? b : a;
    if (str(win.x)) { out.x = win.x; out.t = win.t; }
    var n = Math.max(a.n || 0, b.n || 0); if (n) out.n = n;
    // erste Fassung = früheste beider Seiten
    function firstOf(e) { return str(e.x0) ? { x: e.x0, t: e.t0 || e.t || 0 } : (str(e.x) ? { x: e.x, t: e.t0 || e.t || 0 } : null); }
    var fa = firstOf(a), fb = firstOf(b), f0 = fa && fb ? (fb.t < fa.t ? fb : fa) : (fa || fb);
    if (f0) { if (f0.x !== out.x) out.x0 = f0.x; if (out.x0 || a.t0 || b.t0) out.t0 = f0.t; }
    // Entwürfe: größeres dt gewinnt. Ein Entwurf, der älter als die Abgabe ist, ist kein offener Entwurf mehr –
    // er wird aber nicht weggeworfen, sondern (falls anders) unten nach xk gerettet (kein Text geht verloren).
    var da = str(a.d) ? { x: a.d, t: a.dt || 0 } : null, db = str(b.d) ? { x: b.d, t: b.dt || 0 } : null;
    var dWin = da && db ? (db.t > da.t ? db : da) : (da || db), dLose = dWin === da ? db : da, dOld = null;
    if (dWin && dWin.t >= (out.t || 0)) { out.d = dWin.x; out.dt = dWin.t; } else { dOld = dWin; dWin = null; }
    // Alles, was sonst verloren wäre, nach xk (mehrere Fassungen mit Trennlinie)
    var keep = [], seen = {};
    [out.x, out.x0, out.d].forEach(function (s) { if (str(s)) seen[s] = 1; });
    function add(s, t) {
      if (!str(s) || !s.trim()) return;
      String(s).split(SEP).forEach(function (part) { if (part && !seen[part]) { seen[part] = 1; keep.push({ x: part, t: t || 0 }); } });
    }
    if (lose !== win) add(lose.x, lose.t);
    add(a.x0, a.t0); add(b.x0, b.t0); add(a.xk, a.tk); add(b.xk, b.tk);
    if (dLose) add(dLose.x, dLose.t);
    if (dOld) add(dOld.x, dOld.t);
    if (keep.length) {
      keep.sort(function (p1, p2) { return p2.t - p1.t; });
      out.xk = keep.map(function (k) { return k.x; }).join(SEP); out.tk = keep[0].t;
    }
    // r (Archiv nach „Kurs zurücksetzen“) gilt nur für die Abgabe, die die zurücksetzende Seite hatte. Die Seite des
    // Gewinners bringt ihr r mit; das r der anderen Seite nur, wenn sie dieselbe Abgabe (x und t) archiviert hat.
    // Sonst würde eine Uhrabweichung eine neuere Abgabe des anderen Geräts fälschlich ins Archiv schieben.
    var r = win.r || 0;
    if (lose !== win && lose.r && str(lose.x) && lose.x === win.x && (lose.t || 0) === (win.t || 0)) r = Math.max(r, lose.r);
    if (r && str(out.x)) out.r = r;
    return out;
  }

  /** Fremde writes zurechtstutzen (sanitizeIncoming): nur de/tr, IDs nach Muster, Texte = Strings (≤ 1 500),
   *  Zeitstempel/Zähler = Zahlen (Zeitstempel gekappt mit cap). */
  function sanitize(m, cap) {
    if (!obj(m)) return {};
    var out = {};
    COURSES.forEach(function (c) {
      if (!obj(m[c])) return;
      var o = {};
      Object.keys(m[c]).forEach(function (id) {
        var e = m[c][id]; if (!ID_RE.test(id) || id.indexOf(c + '-') !== 0 || !obj(e)) return;
        var r = {};
        TEXT.forEach(function (f) { if (str(e[f])) r[f] = f === 'xk' ? e[f] : cut(e[f]); });
        if (str(r.xk)) {                         // fremde Daten: Teile kürzen, leere/doppelte weg, Anzahl begrenzen
          var seen = {}, parts = r.xk.split(SEP).map(cut).filter(function (x) { if (!x.trim() || seen[x]) return false; seen[x] = 1; return true; });
          if (parts.length) r.xk = parts.slice(0, MAX_XK).join(SEP); else delete r.xk;
        }
        ['dt', 't', 't0', 'tk', 'r'].forEach(function (f) { if (typeof e[f] === 'number' && isFinite(e[f]) && e[f] >= 0) r[f] = cap ? cap(e[f]) : e[f]; });
        if (typeof e.n === 'number' && isFinite(e.n) && e.n >= 0) r.n = Math.min(Math.floor(e.n), 100000);
        if (TEXT.some(function (f) { return str(r[f]); })) o[id] = r;
      });
      out[c] = o;
    });
    return out;
  }

  /** Speichern mit Rücknahme (ADR-13 §3, Quota-Strategie Schritt 2/3). fn() ändert den Eintrag (put/submit) und
   *  liefert { ok, changed, prev }. Scheitert das Speichern, wird der Eintrag zurückgenommen und erneut gespeichert.
   *  Eigene Texte dürfen die Sicherung dt-backup NIE verdrängen (keepBackup) – das darf nur Fortschritt (storage.save).
   *  → { ok:true } · { ok:false, error:'budget'|'empty' } · { ok:false, error:'rolledback' } · { ok:false, error:'save' } */
  function commit(ls, db, appVersion, p, c, id, fn) {
    var r = fn();
    if (!r.ok) return r;
    if (!r.changed) return { ok: true, changed: false };
    if (DT.storage.save(ls, db, appVersion, true)) return { ok: true, changed: true };
    restore(p, c, id, r.prev);
    return { ok: false, error: DT.storage.save(ls, db, appVersion, true) ? 'rolledback' : 'save' };
  }

  DT.writes = {
    MAX_FIELD: MAX_FIELD, MAX_TOTAL: MAX_TOTAL, MAX_XK: MAX_XK, ID_RE: ID_RE, SEP: SEP,
    ensure: ensure, get: get, size: size, put: put, submit: submit, restore: restore, remove: remove, removePart: removePart,
    removeCourse: removeCourse, archiveCourse: archiveCourse, isArchived: isArchived, hasCurrent: hasCurrent,
    status: status, countWords: countWords, missingPoints: missingPoints, pick: pick, sanitize: sanitize, commit: commit
  };
})(window.DT = window.DT || {});
