/* Antwort-Bewertung (ADR-12.9) – rein, ohne DOM/localStorage, in Node testbar.
 * Aus js/app.js herausgelöst (reine Verschiebung, Verhalten unverändert):
 *   norm/strict/fold/levRatio = Text-Vergleich, evaluate = Bewertung je Übungstyp (mc, listen, gap, dictation, speak, order, match, cloze, sort).
 * Texte für Hinweise kommen über die Funktion tf(key) von außen (app.js übergibt t), damit hier keine Oberfläche steckt.
 *
 * Schreibaufgaben (gap, dictation) werden STRIKT verglichen: Groß-/Kleinschreibung und Satzzeichen zählen.
 * Toleriert werden nur Leerraum (mehrfach, am Rand, vor Satzzeichen) und typografische Varianten von Apostroph,
 * Anführungszeichen und Auslassungspunkten. Opt-out pro Aufgabe: cs:false (dann wie früher: ohne Groß-/Kleinschreibung
 * und Satzzeichen). order (vorgegebene Bausteine) und speak (Spracherkennung) bleiben bewusst nachsichtig (norm).
 */
(function (DT) {
  'use strict';

  // Sprechübungen sind Bonus (ADR-6): zählen nicht in Prozente, Lücken und Wiederholung
  function isCountable(ex) { return ex && ex.t !== 'speak'; }

  function locale(l) { return l === 'tr' ? 'tr-TR' : 'de-DE'; }
  function norm(s, lang, cs) {
    s = String(s || '').replace(/[’‘`´ʼ]/g, "'").replace(/[.,!?;:¿¡"«»„“”]/g, ' ').replace(/\s+/g, ' ').trim();
    return cs ? s : s.toLocaleLowerCase(locale(lang));
  }
  // Strikter Vergleich: nur Leerraum und typografische Varianten werden vereinheitlicht – kein Kleinschreiben
  function strict(s) {
    s = String(s || '');
    if (s.normalize) s = s.normalize('NFC');   // „İ“ als I + Punkt (U+0307) = „İ“
    return s.replace(/[’‘`´ʼ]/g, "'").replace(/[„“”«»]/g, '"').replace(/…/g, '...')
      .replace(/\s+/g, ' ').replace(/ ([.,!?;:])/g, '$1').trim();
  }
  function fold(s) {
    return String(s).toLocaleLowerCase('tr-TR').replace(/'/g, '')
      .replace(/̇/g, '').replace(/[çć]/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's')
      .replace(/ü/g, 'u').replace(/ä/g, 'a').replace(/ß/g, 'ss');
  }
  function levRatio(a, b) {
    if (a === b) return 1;
    var m = a.length, n = b.length, prev = [], cur, i, j;
    if (!m || !n) return 0;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur = [i];
      for (j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return 1 - prev[n] / Math.max(m, n);
  }

  // Eine Lücke (gap, dictation und jede Lücke eines cloze): d = { a:[Lösungen], wrong?, cs? } → { ok, hint }
  function checkGap(d, val, lang, tf) {
    var lenient = d.cs === false;
    var ok = d.a.some(function (a) { return lenient ? norm(a, lang) === norm(val, lang) : strict(a) === strict(val); });
    var hint = null;
    if (!ok) {
      var nvl = norm(val, lang, false), lc = function (x) { return strict(x).toLocaleLowerCase(locale(lang)); };
      // vorhandene wrong-Hinweise greifen weiter nachsichtig (Schlüssel ohne Satzzeichen/Großschreibung)
      if (d.wrong) Object.keys(d.wrong).forEach(function (k) { if (!hint && norm(k, lang, false) === nvl) hint = d.wrong[k]; });
      // Nur Schreibweise falsch: Groß-/Kleinschreibung, Satzzeichen oder beides?
      if (!hint) d.a.forEach(function (a) {
        if (hint || norm(a, lang, false) !== nvl) return;
        if (lc(a) === lc(val)) hint = tf('caseHint');
        else if (norm(a, lang, true) === norm(val, lang, true)) hint = tf('punctHint');
        else hint = tf('casePunctHint');
      });
      if (!hint && d.a.some(function (a) { return fold(norm(a, lang)) === fold(nvl); })) hint = tf('specialChars');
    }
    return { ok: ok, hint: hint };
  }

  // cloze (ADR-12.4): ex.text mit {1}…{n}, ex.gaps[n] = { a, o?, wrong? }, ex.cs für alle Lücken. c.gaps[n] = Eingabe bzw. gewählte Option.
  // Richtig nur, wenn alle Lücken richtig sind; die Lücken-Ergebnisse stehen in res.gaps (Reihenfolge {1}, {2}, …).
  function clozeKeys(ex) {
    var out = [], re = /\{(\d+)\}/g, m;
    while ((m = re.exec(ex.text || ''))) out.push(m[1]);
    return out;
  }
  function evalCloze(ex, c, lang, tf) {
    var vals = c.gaps || {}, all = true, gaps = clozeKeys(ex).map(function (n) {
      var g = ex.gaps[n], val = vals[n] == null ? '' : String(vals[n]);
      var r = checkGap({ a: g.a, wrong: g.wrong, cs: ex.cs }, val, lang, tf);
      if (!r.ok) all = false;
      return { n: n, ok: r.ok, given: val, correct: g.a[0], hint: r.hint };
    });
    var given = gaps.map(function (g) { return '{' + g.n + '} ' + (g.given || '–'); }).join(' · ');
    if (given.length > 120) given = given.slice(0, 119) + '…';
    return { ok: all, given: given, correct: gaps.map(function (g) { return '{' + g.n + '} ' + g.correct; }).join(' · '), hint: null, cloze: true, gaps: gaps };
  }
  // sort (ADR-12.5): ex.cats, ex.items [[Text, Kategorie-Index]], ex.why[Text]. c.assign[i] = Kategorie-Index des Elements i (oder null).
  function evalSort(ex, c) {
    var as = c.assign || [], all = true, items = ex.items.map(function (it, i) {
      var good = as[i] === it[1];
      if (!good) all = false;
      return { text: it[0], ok: good, given: as[i] == null ? null : ex.cats[as[i]], correct: ex.cats[it[1]], hint: ex.why && ex.why[it[0]] };
    });
    return {
      ok: all, sort: true, items: items, hint: null,
      given: items.map(function (x) { return x.text + ' → ' + (x.given || '–'); }).join(' · '),
      correct: items.map(function (x) { return x.text + ' → ' + x.correct; }).join(' · ')
    };
  }

  // Format-Prüfung für cloze und sort (ADR-12.4/12.5) → { errors:[[Text, Detail?]], warnings:[…] }; vom Validator als Fehler/Hinweise ausgegeben
  function lint(e) {
    var errors = [], warnings = [];
    function err(m, d) { errors.push([m, d]); }
    function warn(m, d) { warnings.push([m, d]); }
    var strictOf = strict;
    if (e.t === 'cloze') {
      var text = String(e.text || ''), nums = (text.match(/\{(\d+)\}/g) || []).map(function (x) { return +x.slice(1, -1); });
      if (!text) { err('cloze ohne text'); return { errors: errors, warnings: warnings }; }
      if (nums.length < 2) err('cloze braucht mindestens 2 Lücken ({1}, {2} …; bei einer Lücke gap nehmen)');
      if (nums.length > 5) err('cloze hat mehr als 5 Lücken');
      if (nums.some(function (n, i) { return n !== i + 1; })) err('cloze: Platzhalter müssen fortlaufend {1}…{n} sein, jeder genau einmal', nums.join(','));
      if (!e.gaps || typeof e.gaps !== 'object') { err('cloze ohne gaps'); return { errors: errors, warnings: warnings }; }
      var keys = Object.keys(e.gaps).sort(), want = nums.map(String).sort();
      if (keys.join() !== want.join()) err('cloze: gaps-Schlüssel passen nicht zu den Platzhaltern', keys.join(','));
      var same = function (x, y) { return e.cs === false ? x.toLowerCase() === y.toLowerCase() : strictOf(x) === strictOf(y); };
      keys.forEach(function (k) {
        var g = e.gaps[k] || {}, lab = '{' + k + '}';
        if (!Array.isArray(g.a) || !g.a.length || g.a.some(function (x) { return typeof x !== 'string' || !x.trim(); })) { err('cloze: a (nicht leere Liste von Texten) fehlt', lab); return; }
        if (g.a.some(function (x, i) { return g.a.some(function (y, j) { return i < j && same(x, y); }); })) err('cloze: a enthält doppelte Lösungen', lab);
        if (g.wrong) Object.keys(g.wrong).forEach(function (w) {
          if (g.a.some(function (a) { return same(a, w); })) err('cloze: wrong-Schlüssel ist eine richtige Lösung', lab + ' ' + w);
          if (!String(g.wrong[w] || '').trim()) err('cloze: wrong-Text leer', lab + ' ' + w);
        });
        if (g.o != null) {
          if (!Array.isArray(g.o) || g.o.length < 2 || g.o.length > 4) { err('cloze: o braucht 2–4 Optionen', lab); return; }
          if (g.o.some(function (x, i) { return g.o.some(function (y, j) { return i < j && strictOf(x) === strictOf(y); }); })) err('cloze: o enthält doppelte Optionen', lab);
          g.a.forEach(function (a) { if (g.o.indexOf(a) < 0) err('cloze: Lösung steht nicht in o', lab + ' ' + a); });
          g.o.forEach(function (o) { if (g.a.indexOf(o) < 0 && !(g.wrong && g.wrong[o])) err('cloze: wrong fehlt für falsche Option', lab + ' ' + o); });
        } else if (!g.wrong || !Object.keys(g.wrong).length) warn('cloze: freie Lücke ohne wrong (häufigen Fehler erklären)', lab);
      });
      if (e.cs === true) warn('cs:true ist jetzt Standard und kann entfallen');
    } else if (e.t === 'sort') {
      if (!Array.isArray(e.cats) || e.cats.length < 2 || e.cats.length > 3 || e.cats.some(function (c) { return typeof c !== 'string' || !c.trim(); })) { err('sort: cats braucht 2–3 Kategorien (Texte)'); return { errors: errors, warnings: warnings }; }
      if (e.cats.some(function (c, i) { return e.cats.indexOf(c) !== i; })) err('sort: cats nicht eindeutig');
      if (!Array.isArray(e.items) || e.items.length < 4 || e.items.length > 8) { err('sort: items braucht 4–8 Elemente'); return { errors: errors, warnings: warnings }; }
      if (e.items.some(function (x) { return !Array.isArray(x) || typeof x[0] !== 'string' || !x[0].trim() || typeof x[1] !== 'number' || x[1] % 1 !== 0 || x[1] < 0 || x[1] >= e.cats.length; })) { err('sort: items müssen [Text, Kategorie-Index] sein (Index gültig)'); return { errors: errors, warnings: warnings }; }
      var texts = e.items.map(function (x) { return x[0]; });
      if (texts.some(function (x, i) { return texts.indexOf(x) !== i; })) err('sort: Elemente nicht eindeutig');
      e.cats.forEach(function (c, i) { if (!e.items.some(function (x) { return x[1] === i; })) err('sort: Kategorie ohne Element', c); });
      texts.forEach(function (x) { if (!e.why || !String(e.why[x] || '').trim()) err('sort: why fehlt für Element', x); });
      Object.keys(e.why || {}).forEach(function (k) { if (texts.indexOf(k) < 0) warn('sort: why-Schlüssel ohne Element', k); });
    }
    return { errors: errors, warnings: warnings };
  }

  // ex: Aufgabe, c: Zustand der Aufgabe (sel/input/heardAlts/heard/selfOk/picked/choice), lang: Zielsprache ('de'|'tr'),
  // tf: Textfunktion (key → Text) für caseHint, punctHint, casePunctHint, specialChars, speakAlmost, speakRetry
  function evaluate(ex, c, lang, tf) {
    tf = tf || function (k) { return k; };
    if (ex.t === 'mc' || ex.t === 'listen') {
      return { ok: c.sel === ex.a, given: ex.o[c.sel], correct: ex.o[ex.a], hint: ex.why && ex.why[c.sel] };
    }
    if (ex.t === 'gap' || ex.t === 'dictation') {
      var g = checkGap(ex, c.input, lang, tf);
      return { ok: g.ok, given: c.input, correct: ex.a[0], hint: g.hint };
    }
    if (ex.t === 'cloze') return evalCloze(ex, c, lang, tf);
    if (ex.t === 'sort') return evalSort(ex, c);
    if (ex.t === 'speak') {
      if (c.selfOk) return { ok: true, given: '', correct: ex.say };
      // Ziel und gleichwertige Schreibweisen (alt, z. B. „halb 8“ statt „halb acht“) – die beste Übereinstimmung zählt
      var targets = [ex.say].concat(ex.alt || []).map(function (x) { return norm(x, lang); }), best = 0;
      (c.heardAlts || []).forEach(function (h) { var nh = norm(h, lang); targets.forEach(function (tg) { best = Math.max(best, levRatio(nh, tg)); }); });
      return { ok: best >= 0.8, given: c.heard, correct: ex.say, hint: best >= 0.6 ? tf('speakAlmost') : tf('speakRetry') };
    }
    if (ex.t === 'order') {
      var sent = c.picked.map(function (i) { return ex.w[i]; }).join(' ');
      var ok2 = ex.a.some(function (a) { return norm(a, lang) === norm(sent, lang); });
      return { ok: ok2, given: sent, correct: ex.a[0], hint: null };
    }
    if (ex.t === 'match') {
      var ok3 = ex.p.every(function (pair, i) { return c.choice[i] === pair[1]; });
      var given = ex.p.map(function (pair, i) { return pair[0] + ' = ' + (c.choice[i] || '–'); }).join(' · ');
      return { ok: ok3, given: given, correct: ex.p.map(function (x) { return x[0] + ' = ' + x[1]; }).join(' · '), hint: null, match: true };
    }
    return { ok: false };
  }

  DT.check = { lint: lint, checkGap: checkGap, clozeKeys: clozeKeys, isCountable: isCountable, locale: locale, norm: norm, strict: strict, fold: fold, levRatio: levRatio, evaluate: evaluate };
})(window.DT = window.DT || {});
