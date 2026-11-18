/* Deutsch ⇄ Türkçe – Tagesziel, Tageslog und Streak (ADR-4). Rein, ohne DOM/Speicher.
 * profil.daily = { goal: 10, log: { 'YYYY-MM-DD': [anzahl, zielAnDemTag, neueWörter] } }
 * Das Ziel wird pro Tag mitgespeichert: Ein späterer Zielwechsel wertet alte Tage nicht um.
 * Braucht DT.time (wird erst beim Aufruf gelesen, nicht beim Laden).
 */
(function (DT) {
  'use strict';
  var DEFAULT_GOAL = 10;
  var MAX_DAYS = 3650;                        // Streak höchstens 10 Jahre rückwärts prüfen
  var COUNT = 0, GOAL = 1, NEW = 2;

  function ensure(p) {
    if (!p.daily) p.daily = { goal: DEFAULT_GOAL, log: {} };
    if (!p.daily.goal) p.daily.goal = DEFAULT_GOAL;
    if (!p.daily.log) p.daily.log = {};
    return p.daily;
  }
  function reached(e) { return !!e && (e[COUNT] || 0) >= (e[GOAL] || DEFAULT_GOAL); }

  /** Eine beantwortete Einheit zählen (Lernkarten zählen nicht – das entscheidet der Aufrufer).
   *  newWord = true, wenn dabei ein neues Wort eingeführt wurde. Das heutige Ziel wird mitgeführt
   *  (heute ist noch offen, ein Zielwechsel gilt also ab sofort). Gibt den Log-Eintrag zurück. */
  function tick(p, todayKey, newWord) {
    var d = ensure(p), e = d.log[todayKey] || [0, d.goal, 0];
    e[COUNT] = (e[COUNT] || 0) + 1;
    e[GOAL] = d.goal;
    if (newWord) e[NEW] = (e[NEW] || 0) + 1;
    d.log[todayKey] = e;
    return e;
  }

  /** Stand heute: { done, goal, reached } – Ziel ist das aktuell eingestellte. */
  function progress(p, todayKey) {
    var d = (p && p.daily) || {}, goal = d.goal || DEFAULT_GOAL;
    var e = d.log && d.log[todayKey], done = e ? (e[COUNT] || 0) : 0;
    return { done: done, goal: goal, reached: done >= goal };
  }

  /** Streak nach ADR-4:
   *  - ein Tag zählt, wenn sein Tagesziel erreicht wurde; heute zählt mit, wenn erreicht, bricht aber nie;
   *  - 1 verpasster Tag pro Kalenderwoche (Mo–So) wird überbrückt und zählt nicht mit;
   *  - der zweite verpasste Tag derselben Woche beendet die Serie.
   *  pauseUsedThisWeek: In der aktuellen Woche wurde ein Pausentag überbrückt, der wirklich zwischen
   *  zwei Lerntagen der Serie liegt (verpasste Tage VOR Beginn der Serie verbrauchen keine Pause). */
  function streak(log, todayKey) {
    var T = DT.time, t = T.parseKey(todayKey), thisWeek = T.weekStart(t);
    log = log || {};
    var days = reached(log[todayKey]) ? 1 : 0, used = {}, pending = false, pauseUsed = false;
    for (var i = 1; i <= MAX_DAYS; i++) {
      var d = t - i;
      if (reached(log[T.keyOf(d)])) {
        days++;
        if (pending) { pauseUsed = true; pending = false; }  // Pause liegt innerhalb der Serie
        continue;
      }
      var ws = T.weekStart(d);
      if (used[ws]) break;                                   // zweiter verpasster Tag in dieser Woche
      used[ws] = true;
      if (ws === thisWeek) pending = true;
    }
    return { days: days, pauseUsedThisWeek: pauseUsed };
  }

  /** Neue Wörter pro Tag je nach Ziel: 5 → 3, 10 → 5, 20 → 8. */
  function newWordLimit(goal) {
    goal = goal || DEFAULT_GOAL;
    return goal <= 5 ? 3 : (goal <= 10 ? 5 : 8);
  }

  DT.daily = {
    DEFAULT_GOAL: DEFAULT_GOAL,
    GOALS: [5, 10, 20],
    tick: tick,
    progress: progress,
    streak: streak,
    reached: reached,
    newWordLimit: newWordLimit
  };
})(window.DT = window.DT || {});
