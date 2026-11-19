/* Antwort-Bewertung (ADR-12.9) – rein, ohne DOM/localStorage, in Node testbar.
 * Aus js/app.js herausgelöst (reine Verschiebung, Verhalten unverändert):
 *   norm/fold/levRatio = Text-Vergleich, evaluate = Bewertung je Übungstyp (mc, listen, gap, dictation, speak, order, match).
 * Texte für Hinweise kommen über die Funktion tf(key) von außen (app.js übergibt t), damit hier keine Oberfläche steckt.
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

  // ex: Aufgabe, c: Zustand der Aufgabe (sel/input/heardAlts/heard/selfOk/picked/choice), lang: Zielsprache ('de'|'tr'),
  // tf: Textfunktion (key → Text) für caseHint, specialChars, speakAlmost, speakRetry
  function evaluate(ex, c, lang, tf) {
    tf = tf || function (k) { return k; };
    if (ex.t === 'mc' || ex.t === 'listen') {
      return { ok: c.sel === ex.a, given: ex.o[c.sel], correct: ex.o[ex.a], hint: ex.why && ex.why[c.sel] };
    }
    if (ex.t === 'gap' || ex.t === 'dictation') {
      var val = c.input, nv = norm(val, lang, ex.cs);
      var ok = ex.a.some(function (a) { return norm(a, lang, ex.cs) === nv; });
      var hint = null;
      if (!ok) {
        var nvl = norm(val, lang, false);
        if (ex.wrong) Object.keys(ex.wrong).forEach(function (k) { if (!hint && norm(k, lang, false) === nvl) hint = ex.wrong[k]; });
        if (!hint && ex.cs && ex.a.some(function (a) { return norm(a, lang, false) === nvl; })) hint = tf('caseHint');
        if (!hint && ex.a.some(function (a) { return fold(norm(a, lang)) === fold(nvl); })) hint = tf('specialChars');
      }
      return { ok: ok, given: val, correct: ex.a[0], hint: hint };
    }
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

  DT.check = { isCountable: isCountable, locale: locale, norm: norm, fold: fold, levRatio: levRatio, evaluate: evaluate };
})(window.DT = window.DT || {});
