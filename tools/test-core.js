/* Tests für die reinen Kernmodule js/core/*.js (ADR-10, Testplan).
 * Aufruf: node tools/test-core.js   – keine Abhängigkeiten, Exit-Code 1 bei Fehlern.
 * Läuft in Zeitzone Europe/Berlin, damit Sommerzeit-Fälle (29.03./25.10.2026) echt geprüft werden.
 */
process.env.TZ = 'Europe/Berlin';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');

/* ---------- Mini-Testrahmen ---------- */
let passed = 0, failed = 0, current = '';
// Objekte aus der VM haben andere Prototypen → Vergleich über kanonisches JSON (sortierte Schlüssel)
const canon = x => JSON.stringify(x, (k, v) => (v && typeof v === 'object' && !Array.isArray(v))
  ? Object.keys(v).sort().reduce((o, key) => { o[key] = v[key]; return o; }, {}) : v);
function ok(cond, msg) {
  if (cond) passed++;
  else { failed++; console.log(`  ✗ [${current}] ${msg}`); }
}
function eq(a, b, msg) {
  const A = canon(a), B = canon(b);
  if (A === B) passed++;
  else { failed++; console.log(`  ✗ [${current}] ${msg}\n      ist:  ${A}\n      soll: ${B}`); }
}
function test(name, fn) {
  current = name;
  try { fn(); } catch (e) { failed++; console.log(`  ✗ [${name}] Ausnahme: ${e && e.stack || e}`); }
}
const copy = x => JSON.parse(JSON.stringify(x));
const asyncTests = [];   // Tests mit Promise (Übertragungscode); laufen am Ende nacheinander
function atest(name, fn) { asyncTests.push([name, fn]); }

/* ---------- Kern-Dateien laden (ohne document/localStorage – Zugriff beim Laden würde hier scheitern) ---------- */
const ctx = { window: {}, console, btoa, atob, TextEncoder, TextDecoder, Blob, CompressionStream, DecompressionStream };
vm.createContext(ctx);
const coreDir = path.join(root, 'js', 'core');
const first = ['config.js', 'util.js', 'time.js'];
const files = fs.readdirSync(coreDir).filter(f => f.endsWith('.js'))
  .sort((a, b) => ((first.indexOf(a) + 1 || 99) - (first.indexOf(b) + 1 || 99)) || (a < b ? -1 : 1));
test('Kern-Dateien laden', () => {
  files.forEach(f => vm.runInContext(fs.readFileSync(path.join(coreDir, f), 'utf8'), ctx, { filename: 'js/core/' + f }));
  ['time', 'srs', 'daily', 'storage'].forEach(m => ok(ctx.window.DT && ctx.window.DT[m], 'DT.' + m + ' vorhanden'));
});
const DT = ctx.window.DT || {};
const { time, srs, daily, storage } = DT;
if (!time || !srs || !daily || !storage) { console.log(`\n${passed} ok, ${failed + 1} fehlgeschlagen`); process.exit(1); }

const TODAY_KEY = '2026-11-18';                 // Mittwoch
const T = time.parseKey(TODAY_KEY);
const fixture = n => JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', n), 'utf8'));
const V1 = fixture('v1.json'), V2 = fixture('v2.json');
const mapKey = k => { const m = /^([a-z]{2}-[a-z0-9]{2}-\d{2})#(\d+)$/.exec(k); return m ? m[1] + '.' + (+m[2] + 1) : k; };

/* ================= time ================= */
test('time: Sommerzeit-Umstellung 29.03.2026', () => {
  const a = new Date(2026, 2, 29, 0, 30), b = new Date(2026, 2, 29, 23, 30), c = new Date(2026, 2, 30, 0, 0);
  ok((new Date(2026, 2, 30) - new Date(2026, 2, 29)) / 36e5 === 23, 'Testumgebung: 29.03. hat 23 Stunden (TZ wirkt)');
  ok(time.dayNum(a) === time.dayNum(b), '00:30 und 23:30 sind derselbe Tag');
  ok(time.daysBetween(new Date(2026, 2, 29), c) === 1, '29.03. → 30.03. = 1 Tag');
  ok(time.dayKey(b) === '2026-03-29', 'dayKey 23:30 lokal');
});
test('time: Winterzeit-Umstellung 25.10.2026', () => {
  ok((new Date(2026, 9, 26) - new Date(2026, 9, 25)) / 36e5 === 25, 'Testumgebung: 25.10. hat 25 Stunden');
  ok(time.dayNum(new Date(2026, 9, 25, 23, 59)) === time.dayNum(new Date(2026, 9, 25, 0, 0)), 'ganzer 25.10. = ein Tag');
  ok(time.daysBetween(new Date(2026, 9, 25, 23, 59), new Date(2026, 9, 26, 0, 1)) === 1, '25.10. 23:59 → 26.10. 00:01 = 1 Tag');
  ok(time.dayKey(new Date(2026, 9, 25, 23, 59)) === '2026-10-25', 'dayKey 25.10. 23:59');
});
test('time: dayNum/dayKey/keyOf/parseKey/fromDayNum konsistent über 2 Jahre', () => {
  let bad = 0;
  for (let i = 0; i < 730; i++) {
    for (const h of [0, 1, 12, 23]) {
      const d = new Date(2026, 0, 1 + i, h, 30), n = time.dayNum(d), k = time.dayKey(d);
      if (time.keyOf(n) !== k || time.parseKey(k) !== n) bad++;
      const f = time.fromDayNum(n);
      if (f.getHours() !== 0 || time.dayKey(f) !== k) bad++;
    }
    if (i && time.dayNum(new Date(2026, 0, 1 + i)) - time.dayNum(new Date(2026, 0, i)) !== 1) bad++;
  }
  ok(bad === 0, `${bad} Abweichungen`);
  ok(time.dayNum(new Date(1970, 0, 1, 12)) === 0, 'Tag 0 = 1970-01-01');
  ok(Number.isNaN(time.parseKey('18.11.2026')), 'ungültiger Schlüssel → NaN');
});
test('time: daysBetween und weekStart', () => {
  ok(time.daysBetween('2026-11-01', '2026-11-18') === 17, 'Schlüssel');
  ok(time.daysBetween(T - 5, T) === 5, 'Tagesnummern');
  ok(time.daysBetween(new Date(2026, 10, 17, 23).getTime(), new Date(2026, 10, 18, 1).getTime()) === 1, 'Zeitstempel');
  ok(time.keyOf(time.weekStart(T)) === '2026-11-16', 'Mi 18.11. → Mo 16.11.');
  ok(time.weekStart(time.parseKey('2026-11-16')) === time.parseKey('2026-11-16'), 'Montag → sich selbst');
  ok(time.keyOf(time.weekStart(time.parseKey('2026-11-22'))) === '2026-11-16', 'So 22.11. → Mo 16.11.');
  ok(time.keyOf(time.weekStart(time.parseKey('2026-11-15'))) === '2026-11-09', 'So 15.11. → Mo 09.11.');
});

/* ================= srs ================= */
const P = () => ({ srs: { de: {}, tr: {} } });
test('srs: Konstanten und introduce', () => {
  eq(srs.INTERVALS, [0, 1, 3, 7, 16, 35, 90], 'INTERVALS');
  const p = {};
  eq(srs.introduce(p, 'de', 'de-a1.w001', T, false), [0, T, T, 0, 0], 'neu → Fach 0, heute');
  eq(srs.introduce(p, 'de', 'de-a1.w002', T, true), [3, T + 7, T, 0, 0], 'kenne ich → Fach 3, +7');
  p.srs.de['de-a1.w001'][0] = 4;
  eq(srs.introduce(p, 'de', 'de-a1.w001', T + 3, true)[0], 4, 'vorhandener Eintrag wird nicht überschrieben');
  ok(srs.get(p, 'tr', 'x') === null && srs.get({}, 'de', 'x') === null, 'get ohne Eintrag → null');
});
test('srs: Wort steigt richtig durch alle Fächer', () => {
  const p = P(), id = 'de-a1.w010';
  let day = T;
  srs.introduce(p, 'de', id, day, false);
  const boxes = [];
  for (let i = 0; i < 8; i++) {
    const e = srs.answer(p, 'de', id, true, day, 'word');
    boxes.push(e[0]);
    const want = srs.INTERVALS[e[0]];
    const iv = e[1] - day;
    if (want < 7) ok(iv === want, `Fach ${e[0]}: Intervall ${iv} = ${want}`);
    else ok(Math.abs(iv - want) <= Math.round(want * 0.1), `Fach ${e[0]}: Intervall ${iv} ≈ ${want} ± 10 %`);
    day = e[1];
  }
  eq(boxes, [1, 2, 3, 4, 5, 6, 6, 6], 'Fachfolge, Maximum 6');
  const e = srs.get(p, 'de', id);
  ok(e[3] === 8 && e[4] === 0 && e[2] === boxes.length && true || e[3] === 8, 'reps = 8');
  ok(e[4] === 0, 'lapses = 0');
});
test('srs: richtig vor Fälligkeit ändert Fach nicht', () => {
  const p = P(); p.srs.de.w = [3, T + 5, T - 2, 4, 0];
  const e = srs.answer(p, 'de', 'w', true, T, 'word');
  eq(e, [3, T + 5, T, 5, 0], 'Fach/due bleiben, last/reps aktualisiert');
});
test('srs: falsch – Fachrückfall', () => {
  const cases = [[6, 2], [5, 2], [4, 2], [3, 1], [2, 1], [1, 1], [0, 0]];
  cases.forEach(([from, to]) => {
    const p = P(); p.srs.de.w = [from, T, T - 3, 5, 1];
    const e = srs.answer(p, 'de', 'w', false, T, 'word');
    ok(e[0] === to, `Fach ${from} falsch → ${to} (ist ${e[0]})`);
    ok(e[1] === T + srs.INTERVALS[to], `fällig heute + ${srs.INTERVALS[to]}`);
    ok(e[4] === 2 && e[3] === 6 && e[2] === T, 'lapses/reps/last');
  });
  const p = P();
  eq(srs.answer(p, 'de', 'de-a1.w099', false, T, 'word'), [0, T, T, 1, 1], 'unbekanntes Wort falsch → eingeführt, Fach 0');
});
test('srs: Aufgaben – Eintritt nur bei Fehler, Ausscheiden ab Fach 4', () => {
  const p = P(), id = 'de-a1-03.2';
  ok(srs.answer(p, 'de', id, true, T, 'ex') === null, 'richtig ohne Eintrag → null');
  ok(!(id in p.srs.de), 'kein Eintrag angelegt');
  eq(srs.answer(p, 'de', id, false, T, 'ex'), [1, T + 1, T, 1, 1], 'falsch → Fach 1, morgen');
  let e = srs.answer(p, 'de', id, true, T + 1, 'ex'); ok(e[0] === 2 && e[1] === T + 4, 'Fach 2, +3');
  e = srs.answer(p, 'de', id, true, T + 4, 'ex'); ok(e[0] === 3 && e[1] >= T + 10 && e[1] <= T + 12, 'Fach 3, +7±1');
  const d3 = e[1];
  e = srs.answer(p, 'de', id, true, d3, 'ex'); ok(e[0] === 4 && e[1] === -1, 'Fach 4 → ausgeschieden (due -1)');
  ok(srs.due(p, 'de', T + 1000).indexOf(id) < 0, 'ausgeschiedene Aufgabe nie fällig');
  e = srs.answer(p, 'de', id, true, T + 1000, 'ex'); ok(e[0] === 4 && e[1] === -1, 'richtig nach Ausscheiden: bleibt draußen');
  e = srs.answer(p, 'de', id, false, T + 1000, 'ex'); ok(e[0] === 2 && e[1] === T + 1003, 'falsch nach Ausscheiden → Fach 2, wieder fällig');
  const q = P(); q.srs.de.x = [0, T, T, 0, 0];
  ok(srs.answer(q, 'de', 'x', false, T, 'ex')[0] === 1, 'Aufgabe falsch: mindestens Fach 1');
});
test('srs: Streuung deterministisch und begrenzt', () => {
  ok(srs.interval(5, 'de-a1.w001', 3) === srs.interval(5, 'de-a1.w001', 3), 'gleiche Eingabe → gleiches Ergebnis');
  ok(srs.hash('abc') === srs.hash('abc') && srs.hash('abc') !== srs.hash('abd'), 'hash stabil');
  [0, 1, 2].forEach(b => ok(srs.interval(b, 'x', 1) === srs.INTERVALS[b], `Fach ${b}: keine Streuung`));
  [3, 4, 5, 6].forEach(b => {
    const base = srs.INTERVALS[b], s = Math.round(base * 0.1), seen = new Set();
    for (let i = 0; i < 300; i++) {
      const v = srs.interval(b, 'de-a1.w' + i, i % 7);
      ok(v >= base - s && v <= base + s, `Fach ${b}: ${v} in [${base - s}, ${base + s}]`);
      seen.add(v);
    }
    ok(seen.size > 1, `Fach ${b}: Streuung vorhanden (${[...seen].sort((a, c) => a - c).join(',')})`);
  });
  const p1 = P(), p2 = P();
  [p1, p2].forEach(p => { p.srs.de.w = [4, T, T - 16, 6, 0]; srs.answer(p, 'de', 'w', true, T, 'word'); });
  eq(p1.srs.de.w, p2.srs.de.w, 'zwei Profile, gleiche Antwort → gleiches Datum');
});
test('srs: due – Auswahl, Sortierung, limit', () => {
  const p = P();
  p.srs.de = {
    a: [2, T, T - 3, 3, 0], b: [0, T, T, 0, 0], c: [5, T - 10, T - 45, 9, 1], d: [1, T + 1, T, 1, 0],
    e: [4, -1, T - 5, 5, 1], f: [1, T - 10, T - 11, 2, 1], g: [3, T - 2, T - 9, 4, 0]
  };
  eq(srs.due(p, 'de', T), ['f', 'c', 'g', 'b', 'a'], 'nach due, dann Fach (ohne zukünftige und -1)');
  eq(srs.due(p, 'de', T, 2), ['f', 'c'], 'limit 2');
  eq(srs.due(p, 'tr', T), [], 'leerer Kurs');
  eq(srs.due({}, 'de', T), [], 'Profil ohne srs');
});
test('srs: wordMode und stats', () => {
  ok(srs.wordMode(null, true) === 'pick', 'kein Eintrag → pick');
  ok(srs.wordMode([0], true) === 'pick' && srs.wordMode([1], false) === 'pick', 'Fach 0–1 → pick');
  ok(srs.wordMode([2], true) === 'listen', 'Fach 2 mit Audio → listen');
  ok(srs.wordMode([2], false) === 'rev', 'Fach 2 ohne Audio → rev');
  ok(srs.wordMode([3], true) === 'rev', 'Fach 3 → rev');
  ok(srs.wordMode([4], true) === 'type' && srs.wordMode([6], false) === 'type', 'Fach ≥ 4 → type');
  const p = P();
  p.srs.de = { a: [0, T, T, 0, 0], b: [1, T, T, 1, 0], c: [2, T, T, 1, 0], d: [3, T, T, 1, 0], e: [5, T, T, 1, 0], f: [6, T, T, 1, 0] };
  eq(srs.stats(p, 'de'), { neu: 1, lernend: 2, sicher: 3, gefestigt: 2 }, 'alle Einträge');
  eq(srs.stats(p, 'de', ['a', 'd', 'x', 'y']), { neu: 3, lernend: 0, sicher: 1, gefestigt: 0 }, 'mit ID-Liste (unbekannte = neu)');
});

/* ================= daily ================= */
const K = n => time.keyOf(T + n);                 // Schlüssel relativ zu heute
const logOf = (from, to, skip, val) => {          // Tage from..to (relativ) mit erreichtem Ziel, außer skip
  const log = {};
  for (let i = from; i <= to; i++) if (!skip.includes(i)) log[K(i)] = val ? val.slice() : [10, 10, 0];
  return log;
};
test('daily: tick und progress', () => {
  const p = {};
  eq(daily.tick(p, TODAY_KEY), [1, 10, 0], 'erster tick legt daily an');
  eq(p.daily.goal, 10, 'Standardziel 10');
  eq(daily.tick(p, TODAY_KEY, true), [2, 10, 1], 'neues Wort');
  eq(daily.progress(p, TODAY_KEY), { done: 2, goal: 10, reached: false }, 'progress');
  for (let i = 0; i < 8; i++) daily.tick(p, TODAY_KEY);
  ok(daily.progress(p, TODAY_KEY).reached, 'nach 10 erreicht');
  eq(daily.progress({}, TODAY_KEY), { done: 0, goal: 10, reached: false }, 'ohne daily');
});
test('daily: Zielwechsel ändert alte Tage nicht', () => {
  const p = { daily: { goal: 5, log: { [K(-1)]: [6, 5, 0] } } };
  p.daily.goal = 20;
  daily.tick(p, TODAY_KEY);
  eq(p.daily.log[K(-1)], [6, 5, 0], 'gestern unverändert');
  eq(p.daily.log[TODAY_KEY], [1, 20, 0], 'heute mit neuem Ziel');
  ok(daily.streak(p.daily.log, TODAY_KEY).days === 1, 'gestern zählt weiter (6/5)');
});
test('daily: Streak – heute offen bricht nicht', () => {
  const log = logOf(-3, -1, []);
  eq(daily.streak(log, TODAY_KEY), { days: 3, pauseUsedThisWeek: false }, 'heute nichts');
  log[TODAY_KEY] = [4, 10, 0];
  ok(daily.streak(log, TODAY_KEY).days === 3, 'heute angefangen, nicht erreicht');
  log[TODAY_KEY] = [10, 10, 0];
  ok(daily.streak(log, TODAY_KEY).days === 4, 'heute erreicht zählt mit');
  eq(daily.streak({}, TODAY_KEY), { days: 0, pauseUsedThisWeek: false }, 'leeres Log');
  eq(daily.streak(undefined, TODAY_KEY).days, 0, 'kein Log');
});
test('daily: Streak – Pausentag Sonntag + Montag (zwei Wochen) wird überbrückt', () => {
  // So 15.11. (Woche ab 09.11.) und Mo 16.11. (Woche ab 16.11.) verpasst
  const log = logOf(-16, -1, [-3, -2]);           // 02.11.–17.11.
  ok(K(-3) === '2026-11-15' && K(-2) === '2026-11-16', 'Testdaten: So/Mo');
  eq(daily.streak(log, TODAY_KEY), { days: 14, pauseUsedThisWeek: true }, '16 Tage − 2 Pausentage');
});
test('daily: Streak – zwei Lücken in einer Woche beenden die Serie', () => {
  const log = logOf(-16, -1, [-8, -6]);           // Di 10.11. und Do 12.11. verpasst
  eq(daily.streak(log, TODAY_KEY), { days: 6, pauseUsedThisWeek: false }, 'nur 11.11.–17.11. ohne 12.11.');
  const log2 = logOf(-16, -1, [-1, -2]);          // Mo + Di dieser Woche verpasst
  eq(daily.streak(log2, TODAY_KEY), { days: 0, pauseUsedThisWeek: false }, 'zwei Lücken diese Woche → 0');
});
test('daily: Streak – Pausentag vor Beginn der Serie verbraucht keine Pause', () => {
  const log = logOf(-1, -1, []);                  // nur Di 17.11.; Mo 16.11. verpasst (vor Beginn)
  eq(daily.streak(log, TODAY_KEY), { days: 1, pauseUsedThisWeek: false }, 'Serie 1, Pause frei');
  const log2 = logOf(-4, -2, []); // Sa–Mo erreicht, Di 17.11. verpasst
  eq(daily.streak(log2, TODAY_KEY), { days: 3, pauseUsedThisWeek: true }, 'Di überbrückt');
});
test('daily: Streak – Obergrenze 3650 Tage, nicht erreichte Tage zählen nicht', () => {
  const log = logOf(-4000, -1, []);
  ok(daily.streak(log, TODAY_KEY).days === 3650, 'max. 3650');
  const log2 = logOf(-5, -1, [], [3, 10, 0]);
  ok(daily.streak(log2, TODAY_KEY).days === 0, 'Ziel nie erreicht → 0');
});
test('daily: newWordLimit', () => {
  eq([5, 10, 20].map(daily.newWordLimit), [3, 5, 8], '5→3, 10→5, 20→8');
  ok(daily.newWordLimit(undefined) === 5, 'Standard');
});

/* ================= storage: Migration ================= */
function checkProgKept(oldDb, newDb, mapper) {
  let n = 0;
  Object.keys(oldDb.profiles).forEach(pid => {
    const op = oldDb.profiles[pid].prog || {}, np = newDb.profiles[pid].prog || {};
    Object.keys(op).forEach(cid => Object.keys(op[cid]).forEach(k => {
      n++; eq(np[cid] && np[cid][mapper(k)], op[cid][k], `prog ${pid}/${cid}/${k} erhalten`);
    }));
    ['name', 'course', 'created', 'id', 'last'].forEach(f => eq(newDb.profiles[pid][f], oldDb.profiles[pid][f], `${pid}.${f} erhalten`));
  });
  return n;
}
function checkV3Shape(db) {
  Object.values(db.profiles).forEach(p => {
    ['de', 'tr'].forEach(c => { ok(p.srs && typeof p.srs[c] === 'object', `${p.id}: srs.${c}`); ok(p.skip && typeof p.skip[c] === 'object', `${p.id}: skip.${c}`); });
    ok(p.place && p.badges && p.daily && p.daily.goal === 10 && p.daily.log, `${p.id}: place/badges/daily`);
  });
}
test('storage: Migration v1 → v3 (Fixture)', () => {
  const before = canon(V1);
  const r = storage.migrate(V1, T, TODAY_KEY), d = r.data;
  ok(canon(V1) === before, 'Eingabe unverändert (rein)');
  ok(r.from === 1 && r.to === 3 && r.changed && !r.newer && d.v === 3, 'from 1 → to 3');
  ok(checkProgKept(V1, d, mapKey) === 12, 'alle 12 prog-Einträge geprüft');
  ok('de-a1-02.4' in d.profiles.p1a2b3.prog.de && !('de-a1-02#3' in d.profiles.p1a2b3.prog.de), '„de-a1-02#3“ → „de-a1-02.4“');
  ok('manuell-ohne-raute' in d.profiles.q9z8y7.prog.tr, 'Schlüssel ohne # bleibt');
  ok('de-a1-99.3' in d.profiles.p1a2b3.prog.de, 'Eintrag zu unbekannter Aufgabe bleibt');
  eq(d.theme, 'dark', 'theme'); eq(d.active, 'p1a2b3', 'active');
  checkV3Shape(d);
  eq(d.profiles.p1a2b3.srs, {
    de: { 'de-a1-02.4': [1, T, T, 0, 1], 'de-a1-04.1': [1, T, T, 0, 1] },
    tr: { 'tr-a1-03.5': [1, T, T, 0, 1] }
  }, 'offene Fehler → SRS (nicht: früher falsch, jetzt richtig)');
  eq(d.profiles.q9z8y7.srs, { de: {}, tr: { 'tr-a1-02.4': [1, T, T, 0, 1] } }, 'Profil 2: SRS');
  eq(d.profiles.p1a2b3.daily.log, {
    '2026-10-01': [2, 10, 0], '2026-10-02': [2, 10, 0], '2026-10-03': [2, 10, 0], '2026-10-04': [2, 10, 0]
  }, 'Tageslog aus Zeitstempeln (lokaler Tag: 03.10. 00:45 zählt zum 03.10.)');
});
test('storage: Migration v2 → v3 (Fixture)', () => {
  const r = storage.migrate(V2, T, TODAY_KEY), d = r.data;
  ok(r.from === 2 && d.v === 3, 'from 2');
  ok(checkProgKept(V2, d, k => k) === 11, 'alle 11 prog-Einträge erhalten');
  ['app', 'theme', 'active', 'voices', 'voiceGender', 'micInfoSeen'].forEach(f => eq(d[f], V2[f], 'db.' + f + ' erhalten'));
  checkV3Shape(d);
  eq(d.profiles.k4l5m6.srs.de, { 'de-a1-03.2': [1, T, T, 0, 1], 'de-a1-07.1': [1, T, T, 0, 1] }, 'Leyla de');
  eq(d.profiles.k4l5m6.srs.tr, { 'tr-a1-04.2': [1, T, T, 0, 1] }, 'Leyla tr');
  eq(d.profiles.k4l5m6.daily.log['2026-11-17'], [3, 10, 0], 'Leyla 17.11.: 3 Antworten');
  eq(d.profiles.n7o8p9.daily.log['2026-11-18'], [2, 10, 0], 'Jonas heute: 2');
  eq(d.profiles.r1s2t3.daily, { goal: 10, log: {} }, 'leeres Profil');
});
test('storage: Migration idempotent', () => {
  [V1, V2].forEach((F, i) => {
    const a = storage.migrate(F, T, TODAY_KEY).data;
    const b = storage.migrate(a, T, TODAY_KEY);
    ok(!b.changed, `v${i + 1}: zweiter Lauf ändert nichts`);
    eq(b.data, a, `v${i + 1}: zweimal migrieren = gleich`);
    // Downgrade-Fall: alte App schreibt v:2 zurück → erneute Migration darf nichts überschreiben/verdoppeln
    const down = copy(a); down.v = 2;
    eq(storage.migrate(down, T + 5, time.keyOf(T + 5)).data, a, `v${i + 1}: v auf 2 gesenkt → gleiches Ergebnis`);
  });
  const a = storage.migrate(V2, T, TODAY_KEY).data, down = copy(a);
  down.v = 2;
  down.profiles.k4l5m6.prog.de['de-a1-08.1'] = { f: 'w', s: 'w', n: 1, w: 1, a: 'nein', t: Date.now() };
  down.profiles.k4l5m6.srs.de['de-a1-03.2'] = [3, T + 7, T, 4, 1];
  const r = storage.migrate(down, T + 1).data.profiles.k4l5m6;
  eq(r.srs.de['de-a1-08.1'], [1, T + 1, T + 1, 0, 1], 'neuer Fehler der alten App → SRS');
  eq(r.srs.de['de-a1-03.2'], [3, T + 7, T, 4, 1], 'vorhandener SRS-Eintrag nicht überschrieben');
  eq(r.daily, a.profiles.k4l5m6.daily, 'daily nicht neu berechnet');
});
test('storage: Daten von neuerer App (v:4) bleiben unverändert', () => {
  const d4 = { v: 4, app: '2027-01-01.1', profiles: { x: { id: 'x', prog: { de: { 'de-a1-01.1': { s: 'w', t: 1 } } }, zukunft: [1, 2] } }, neuesFeld: true };
  const before = canon(d4), r = storage.migrate(d4, T);
  ok(r.newer === true && r.changed === false, 'Flag newer');
  ok(r.data === d4 && canon(d4) === before, 'gleiches Objekt, unverändert');
});
test('storage: Randfälle der Migration', () => {
  eq(storage.migrate({ profiles: {} }, T).data, { profiles: {}, v: 3 }, 'keine Profile');
  ok(storage.migrate(null, T).data === null, 'null bleibt null');
  const r = storage.migrate({ v: 2, profiles: { a: { id: 'a', name: 'A', course: 'de' } } }, T).data.profiles.a;
  ok(r.prog && r.srs.de && r.daily.log, 'Profil ohne prog bekommt Struktur');
  const keep = storage.migrate({ v: 2, profiles: { a: { id: 'a', prog: { de: {} }, daily: { goal: 20, log: { '2026-01-01': [3, 20, 1] } } } } }, T).data.profiles.a;
  eq(keep.daily, { goal: 20, log: { '2026-01-01': [3, 20, 1] } }, 'vorhandenes daily bleibt');
});

/* ================= storage: Zusammenführen ================= */
test('storage: mergeProfile – Konflikte', () => {
  const cur = {
    id: 'a', name: 'Cur', course: 'de', created: 100,
    prog: { de: { x: { s: 'c', t: 200 }, y: { s: 'w', t: 500 }, z: { s: 'c', t: 300 } }, tr: {} },
    last: { de: 500 },
    srs: { de: { w1: [3, T + 5, T - 2, 4, 0], w2: [1, T, T - 1, 2, 1], w3: [2, T, T - 1, 3, 0] }, tr: {} },
    daily: { goal: 20, log: { '2026-11-16': [12, 20, 2], '2026-11-17': [3, 20, 0] } },
    skip: { de: { 'de-a1-01': { t: 50, by: 'user' } }, tr: {} },
    place: { de: { t: 10, level: 'A1', mastered: ['de-a1-01'], asked: 6 } },
    badges: { first: 900 }
  };
  const inc = {
    id: 'b', name: 'Inc', course: 'tr', created: 50,
    prog: { de: { x: { s: 'w', t: 400 }, y: { s: 'c', t: 100 }, z: { s: 'w', t: 300 }, n: { s: 'c', t: 1 } }, tr: { t1: { s: 'c', t: 9 } } },
    last: { de: 400, tr: 9 },
    srs: { de: { w1: [5, T + 30, T - 1, 9, 0], w2: [4, T + 9, T - 5, 9, 0], w3: [0, T, T - 1, 5, 2], w4: [0, T, T, 0, 0] } },
    daily: { goal: 5, log: { '2026-11-16': [7, 5, 4], '2026-11-15': [5, 5, 1] } },
    skip: { de: { 'de-a1-01': { t: 40, by: 'placement' }, 'de-a1-02': { t: 60, by: 'placement' } } },
    place: { de: { t: 20, level: 'A1', mastered: [], asked: 3 }, tr: { t: 5, level: 'A1', mastered: [], asked: 2 } },
    badges: { first: 800, streak7: 1000 },
    zukunft: { a: 1 }
  };
  const cb = canon(cur), ib = canon(inc);
  const m = storage.mergeProfile(cur, inc);
  ok(canon(cur) === cb && canon(inc) === ib, 'Eingaben unverändert');
  eq([m.id, m.name, m.course, m.created], ['a', 'Cur', 'de', 100], 'Stammdaten von cur');
  eq(m.prog.de, { x: { s: 'w', t: 400 }, y: { s: 'w', t: 500 }, z: { s: 'c', t: 300 }, n: { s: 'c', t: 1 } }, 'prog: neueres t gewinnt, Gleichstand cur');
  eq(m.prog.tr, { t1: { s: 'c', t: 9 } }, 'prog tr ergänzt');
  eq(m.last, { de: 500, tr: 9 }, 'last: Maximum');
  eq(m.srs.de, { w1: [5, T + 30, T - 1, 9, 0], w2: [1, T, T - 1, 2, 1], w3: [0, T, T - 1, 5, 2], w4: [0, T, T, 0, 0] }, 'srs: größeres last, dann mehr reps');
  eq(m.daily, { goal: 20, log: { '2026-11-16': [12, 20, 4], '2026-11-17': [3, 20, 0], '2026-11-15': [5, 5, 1] } }, 'daily: Ziel bleibt, je Tag Maximum');
  eq(m.skip.de, { 'de-a1-01': { t: 40, by: 'placement' }, 'de-a1-02': { t: 60, by: 'placement' } }, 'skip: Vereinigung, früherer Zeitstempel');
  eq(m.badges, { first: 800, streak7: 1000 }, 'badges: Vereinigung, früherer Zeitstempel');
  eq(m.place.de.t, 20, 'place: neueres Ergebnis'); eq(m.place.tr.t, 5, 'place tr ergänzt');
  eq(m.zukunft, { a: 1 }, 'unbekanntes Feld übernommen');
  m.prog.tr.t1.s = 'w'; ok(inc.prog.tr.t1.s === 'c', 'Ergebnis teilt keine Objekte mit inc');
  eq(storage.mergeProfile(cur, cur), cur, 'mit sich selbst = unverändert');
});

/* ================= storage: Export / Import ================= */
test('storage: Export v2 → Import = gleicher Stand', () => {
  const src = storage.migrate(V2, T).data.profiles.k4l5m6;
  const ex = storage.exportData(src, '2026-11-18.1', Date.UTC(2026, 10, 18, 12));
  ok(ex.app === 'deutsch-tuerkce' && ex.v === 2 && ex.schema === 3 && ex.appVersion === '2026-11-18.1', 'Kopf');
  ok(ex.exported === '2026-11-18T12:00:00.000Z', 'exported ISO');
  ex.profile.name = 'geändert'; ok(src.name === 'Leyla', 'Export ist eine Kopie');
  ex.profile.name = 'Leyla';
  const fresh = storage.migrateProfile({ id: 'neu', name: 'Neu', course: 'de', prog: { de: {}, tr: {} } }, 2, T);
  const r = storage.importData(fresh, JSON.stringify(ex), T, TODAY_KEY);
  ok(r.ok && r.from === 2, 'Import ok');
  ['prog', 'srs', 'daily', 'last', 'skip', 'badges', 'place'].forEach(f => eq(r.profile[f], src[f], 'gleich: ' + f));
  eq([r.profile.id, r.profile.name], ['neu', 'Neu'], 'Name/ID des Zielprofils bleiben');
  const again = storage.importData(r.profile, ex, T, TODAY_KEY);
  eq(again.profile, r.profile, 'zweiter Import ändert nichts');
});
test('storage: Import v1-Datei (nur prog, mit „thema#i“)', () => {
  const file = { app: 'deutsch-tuerkce', v: 1, exported: '2026-10-05T10:00:00.000Z', profile: { name: 'Ayşe', course: 'de', prog: V1.profiles.p1a2b3.prog } };
  const cur = storage.migrate(V2, T).data.profiles.k4l5m6;
  const r = storage.importData(cur, JSON.stringify(file), T, TODAY_KEY);
  ok(r.ok && r.from === 1, 'Import ok');
  // je ID gewinnt der neuere Zeitstempel; nichts aus beiden Quellen geht verloren
  const newer = (a, b) => (!a ? b : !b ? a : (b.t > a.t ? b : a));
  Object.keys(file.profile.prog).forEach(c => Object.keys(file.profile.prog[c]).forEach(k =>
    eq(r.profile.prog[c][mapKey(k)], newer(cur.prog[c] && cur.prog[c][mapKey(k)], file.profile.prog[c][k]), 'importiert: ' + k)));
  Object.keys(cur.prog).forEach(c => Object.keys(cur.prog[c]).forEach(k => ok(r.profile.prog[c][k], 'behalten: ' + k)));
  eq(r.profile.prog.de['de-a1-01.1'], cur.prog.de['de-a1-01.1'], 'Konflikt: neuerer lokaler Stand bleibt');
  eq(r.profile.prog.de['de-a1-02.4'], file.profile.prog.de['de-a1-02#3'], 'nur in Datei vorhanden → übernommen');
  eq(r.profile.srs.de['de-a1-02.4'], [1, T, T, 0, 1], 'importierter offener Fehler → SRS');
  eq(r.profile.daily.goal, cur.daily.goal, 'Ziel bleibt');
  ok(r.profile.daily.log['2026-10-02'] && r.profile.daily.log['2026-11-17'], 'Tageslog aus beiden Quellen');
});
test('storage: Import ungültig / zu neu', () => {
  const cur = { prog: { de: {}, tr: {} } };
  eq(storage.importData(cur, '{kaputt', T), { ok: false, error: 'format' }, 'kein JSON');
  eq(storage.importData(cur, { v: 2, profile: {} }, T), { ok: false, error: 'format' }, 'ohne prog');
  eq(storage.importData(cur, { v: 3, profile: { prog: {} } }, T), { ok: false, error: 'newer' }, 'Exportformat v3');
  eq(storage.importData(cur, { v: 2, schema: 4, profile: { prog: {} } }, T), { ok: false, error: 'newer' }, 'Schema 4');
});

/* ================= storage: Speichern / Quota ================= */
function fakeStorage(limit) {
  const m = {};
  const size = () => Object.keys(m).reduce((s, k) => s + k.length + m[k].length, 0);
  return {
    m,
    getItem: k => (k in m ? m[k] : null),
    setItem(k, v) {
      const old = k in m ? m[k] : null; v = String(v);
      if (size() - (old === null ? 0 : k.length + old.length) + k.length + v.length > limit) {
        const e = new Error('quota'); e.name = 'QuotaExceededError'; throw e;
      }
      m[k] = v;
    },
    removeItem: k => { delete m[k]; }
  };
}
test('storage: save – Quota-Simulation', () => {
  const db = storage.migrate(V2, T).data, len = JSON.stringify(db).length;
  let ls = fakeStorage(1e6);
  ok(storage.save(ls, db, '2026-11-18.1') === true, 'normal → true');
  ok(db.rev === 1 && JSON.parse(ls.m['dt-data']).rev === 1, 'rev + 1');
  ok(storage.save(ls, db) === true && db.rev === 2, 'rev zählt weiter');
  ls = fakeStorage(len * 2 + 200);
  ls.setItem('dt-backup', 'x'.repeat(len));
  ls.setItem('dt-backup-s2', 'y'.repeat(len - 50));
  ok(storage.save(ls, db) === true, 'voll → dt-backup entfernt → true');
  ok(ls.getItem('dt-backup') === null && ls.getItem('dt-backup-s2') !== null, 'nur dt-backup entfernt, dt-backup-s2 bleibt');
  ls = fakeStorage(100);
  ok(storage.save(ls, db) === false, 'zu klein → false (keine Ausnahme)');
  const d4 = { v: 4, profiles: {} };
  storage.save(fakeStorage(1e6), d4);
  ok(d4.v === 4, 'v wird nie gesenkt');
  const d2 = { v: 2, profiles: {} };
  storage.save(fakeStorage(1e6), d2);
  ok(d2.v === 3, 'v mindestens SCHEMA');
});

test('„Kenne ich schon“ zählt erst nach einer echten Abfrage als sicher (QA M3)', () => {
  const p = {}, T = 20000;
  srs.introduce(p, 'de', 'k1', T, true);
  eq(srs.stats(p, 'de', ['k1']), { neu: 0, lernend: 1, sicher: 0, gefestigt: 0 }, 'nur markiert → lernend');
  srs.answer(p, 'de', 'k1', true, T + 7, 'word');
  eq(srs.stats(p, 'de', ['k1']).sicher, 1, 'nach richtiger Wiederholung → sicher');
});

/* ================= texts (Lesetexte, ADR-12.2) ================= */
test('texts: Prüfung von Lesetexten', () => {
  const tx = DT.texts; ok(!!tx, 'DT.texts vorhanden');
  const words = n => Array.from({ length: n }, (_, i) => 'wort' + i).join(' ');
  const q = i => ({ id: 'de-a2-r01.q' + i, t: 'mc', q: '?', o: ['a', 'b'], a: 0, why: { 1: 'x' }, e: 'y' });
  const good = { level: 'A2', kind: 'read', genre: 'hinweis', title: 'Hausordnung', sub: 'Kurallar', body: [words(40), words(40)], gloss: { wort3: 'x' }, questions: [q(1), q(2), q(3)] };
  eq(tx.check('de-a2-r01', good), { errors: [], warnings: [] }, 'gültiger Text');
  ok(tx.check('de-a2-d01', good).errors.length > 0, 'falsches ID-Muster');
  ok(tx.check('de-a1-r01', good).errors.some(e => /level/.test(e)), 'level passt nicht zur ID');
  ok(tx.check('de-a2-r01', Object.assign({}, good, { genre: 'x' })).errors.some(e => /genre/.test(e)), 'genre ungültig');
  ok(tx.check('de-a2-r01', Object.assign({}, good, { items: [{ h: 'A', t: 'x' }] })).errors.some(e => /genau eines/.test(e)), 'body UND items');
  ok(tx.check('de-a2-r01', Object.assign({}, good, { questions: [q(1)] })).errors.some(e => /3 gewertete/.test(e)), 'zu wenige Fragen');
  ok(tx.check('de-a2-r01', Object.assign({}, good, { questions: [q(1), q(2), { id: 'de-a2-r01.q3', t: 'speak', say: 'x' }] })).errors.some(e => /nicht erlaubt/.test(e)), 'Typ speak nicht erlaubt');
  ok(tx.check('de-a2-r01', Object.assign({}, good, { questions: [q(1), q(2), Object.assign(q(3), { id: 'de-a2-d01.q3' })] })).errors.some(e => /\.q/.test(e)), 'Fragen-ID-Präfix');
  const it = Object.assign({}, good, { body: undefined, items: [{ h: 'A', t: words(35) }, { h: 'A', t: words(35) }] });
  ok(tx.check('de-a2-r01', it).errors.some(e => /doppelt/.test(e)), 'items[*].h doppelt');
  const short = tx.check('de-a2-r01', Object.assign({}, good, { body: ['kurz'], gloss: { fehlt: 'x' } }));
  eq(short.errors, [], 'kurz ist nur Hinweis'); eq(short.warnings.length, 2, 'Länge + gloss-Hinweis');
  eq(tx.paragraphs(it).map(p => p.h), ['A', 'A'], 'paragraphs für items');
  eq(tx.wordCount({ body: ['Eins **zwei** drei'] }), 3, 'wordCount ohne Markdown');
});

/* ================= storage: Übertragungscode (Link/Text) ================= */
const b64u = buf => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
atest('storage: Übertragungscode → Roundtrip, ohne Namen, URL-sicher', async () => {
  const src = storage.migrate(V2, T).data.profiles.k4l5m6;
  const code = await storage.packTransfer(src, '2026-11-18.1', Date.UTC(2026, 10, 18, 12));
  ok(/^dt1\.[A-Za-z0-9_-]+$/.test(code), 'Präfix dt1 + nur URL-sichere Zeichen');
  console.log(`      (Info) Übertragungscode für Beispielprofil: ${code.length} Zeichen`);
  ok(code.length < 4000, 'Beispielcode unter 4000 Zeichen');
  const u = await storage.unpackTransfer(code);
  ok(u.ok && u.data.profile && !('name' in u.data.profile), 'entpackt, ohne Name');
  ok(src.name === 'Leyla', 'Quellprofil bleibt unverändert');
  const fresh = storage.migrateProfile({ id: 'neu', name: 'Neu', course: 'de', prog: { de: {}, tr: {} } }, 2, T);
  const r = storage.importData(fresh, u.data, T, TODAY_KEY);
  ok(r.ok, 'Import ok');
  ['prog', 'srs', 'daily', 'last', 'skip', 'badges', 'place'].forEach(f => eq(r.profile[f], src[f], 'gleich: ' + f));
  eq([r.profile.id, r.profile.name], ['neu', 'Neu'], 'Name/ID des Zielprofils bleiben');
  const again = storage.importData(r.profile, (await storage.unpackTransfer(code)).data, T, TODAY_KEY);
  eq(again.profile, r.profile, 'zweiter Import ändert nichts');
});
atest('storage: Übertragungscode – Link, Zeilenumbrüche, URL-Kodierung', async () => {
  const src = storage.migrate(V2, T).data.profiles.k4l5m6;
  const code = await storage.packTransfer(src, 'x', 1);
  const base = (await storage.unpackTransfer(code)).data;
  for (const form of [
    'https://sinandmrr.github.io/deutsch-tuerkisch-lernen/#/transfer/' + code,
    '  ' + code.slice(0, 20) + '\n' + code.slice(20) + '  ',
    'Hier mein Stand: https://x.de/#/transfer/' + code + ' viel Spaß',
    'https://x.de/#/transfer/' + encodeURIComponent(code)
  ]) { const u = await storage.unpackTransfer(form); ok(u.ok, 'Form erkannt'); eq(u.data, base, 'gleicher Inhalt'); }
});
atest('storage: Übertragungscode – kaputte Eingaben', async () => {
  for (const bad of ['', '   ', 'hallo', 'dt2.abc', 'dt1.', 'dt1.!!!', 'dt1.' + b64u('kein deflate'), 'dt0.' + b64u('kein json'),
    'dt0.' + b64u('[1,2]'), 'dt1.' + 'A'.repeat(700000), null, undefined])
    eq(await storage.unpackTransfer(bad), { ok: false, error: 'format' }, 'format: ' + String(bad).slice(0, 20));
});
atest('storage: Übertragungscode – unkomprimierte Variante dt0 (Browser ohne CompressionStream)', async () => {
  const src = storage.migrate(V2, T).data.profiles.k4l5m6;
  const file = storage.exportData(src, 'x', 1);
  const u = await storage.unpackTransfer('dt0.' + b64u(JSON.stringify(file)));
  ok(u.ok, 'dt0 entpackt'); eq(storage.importData(src, u.data, T, TODAY_KEY).profile, src, 'Import = unverändert (gleicher Stand)');
});
atest('storage: Übertragungscode – Zip-Bombe und __proto__ werden abgewehrt', async () => {
  const bomb = 'dt1.' + b64u(require('zlib').deflateSync(Buffer.alloc(20 * 1024 * 1024)));
  ok(bomb.length < 100000, 'Bombe ist klein verpackt (' + bomb.length + ' Zeichen)');
  eq(await storage.unpackTransfer(bomb), { ok: false, error: 'format' }, 'über 8 MB entpackt → abgelehnt');
  const evil = '{"app":"deutsch-tuerkce","v":2,"schema":3,"profile":{"prog":{"de":{}},"__proto__":{"polluted":1},"x":{"__proto__":{"polluted":2}}}}';
  const u = await storage.unpackTransfer('dt0.' + b64u(evil));
  ok(u.ok && !Object.prototype.hasOwnProperty.call(u.data.profile, '__proto__') && !('polluted' in u.data.profile), '__proto__ entfernt');
  const cur = storage.migrate(V2, T).data.profiles.k4l5m6;
  const r = storage.importData(cur, u.data, T, TODAY_KEY);
  ok(r.ok && !('polluted' in r.profile) && !('polluted' in {}), 'nichts verbogen');
});
test('storage: Import stutzt fremde Daten zurecht (Typen, Kurse, Zukunft, __proto__)', () => {
  const cur = storage.migrate(V2, T).data.profiles.k4l5m6;
  const FUT = Date.UTC(2099, 0, 1), id0 = Object.keys(cur.prog.de)[0];
  const evil = {
    app: 'deutsch-tuerkce', v: 2, schema: 3,
    profile: JSON.parse(`{"prog":{"de":{"${id0}":{"f":"c","s":"c","n":1,"t":${FUT}},"x.1":5,"x.2":null,"x.3":{"s":"c","t":"abc"}},"xx":{"a.1":{"t":1}},"__proto__":{"polluted":1}},
      "srs":{"de":{"a":null,"b":"abc","c":[1,5],"d":[1,${T + 9999},${T + 9999},0,1],"ok":[1,${T},${T - 1},2,1]},"fr":{"z":[1,1,1]}},
      "place":{"de":{"t":${FUT},"level":"C2"},"tr":"kaputt"},"badges":{"b1":{"t":${FUT}},"b2":"text","b3":${FUT}},
      "last":{"de":${FUT},"tr":"x"},"daily":{"goal":99999,"log":{"2099-01-01":[500,10,1],"2026-11-18":[1e9,10,"a"],"kein-datum":[1]}}}`)
  };
  const r = storage.importData(cur, JSON.stringify(evil), T, TODAY_KEY);
  ok(r.ok, 'Import ok');
  const p = r.profile, maxMs = (T + 2) * 86400000;
  ok(!('polluted' in p) && !('polluted' in p.prog) && !('polluted' in {}), 'kein __proto__ (Datei-Import)');
  ok(!('xx' in p.prog) && !('fr' in p.srs), 'unbekannte Kurse verworfen');
  ok(p.prog.de[id0].t <= maxMs, 'prog.t in der Zukunft begrenzt');
  ok(!('x.1' in p.prog.de) && !('x.2' in p.prog.de), 'prog-Einträge mit falschem Typ verworfen');
  ok(p.prog.de['x.3'] && !('t' in p.prog.de['x.3']), 'ungültiges t entfernt');
  ok(!('a' in p.srs.de) && !('b' in p.srs.de) && !('c' in p.srs.de), 'srs-Einträge mit falschem Typ verworfen');
  ok(p.srs.de.d[2] <= T + 1 && p.srs.de.d[1] <= T + 3650, 'srs last/due begrenzt');
  ok(p.srs.de.ok[2] === T - 1 || p.srs.de.ok[2] >= T - 1, 'normaler srs-Eintrag bleibt');
  ok(p.place.de.t <= maxMs && !('tr' in p.place && typeof p.place.tr === 'string'), 'place begrenzt/geprüft');
  ok(p.badges.b1.t <= maxMs && p.badges.b3 <= maxMs && !('b2' in p.badges), 'badges begrenzt/geprüft');
  ok(p.last.de <= maxMs && !(typeof p.last.tr === 'string'), 'last begrenzt/geprüft');
  ok(!('2099-01-01' in p.daily.log) && !('kein-datum' in p.daily.log), 'Tage in der Zukunft/ohne Datum verworfen');
  ok(p.daily.log['2026-11-18'][0] <= 10000 && p.daily.log['2026-11-18'][2] === 0, 'log-Werte begrenzt');
  ok(p.daily.goal !== 99999, 'unsinniges Tagesziel verworfen');
});
test('storage: eigener gültiger Stand bleibt beim Import unverändert (Sanitizer ist harmlos)', () => {
  const src = storage.migrate(V2, T).data.profiles.k4l5m6;
  const r = storage.importData(src, storage.exportData(src, 'x', 1), T, TODAY_KEY);
  eq(r.profile, src, 'Selbst-Import = identisch');
});
test('storage: transferCode erkennt Link mit Satzzeichen dahinter', () => {
  eq(storage.transferCode('(siehe https://x.de/#/transfer/dt1.AbC-_9).'), 'dt1.AbC-_9', 'Klammer+Punkt');
  eq(storage.transferCode('dt1.AbC\n-_9 '), 'dt1.AbC-_9', 'Umbruch im Code');
});
atest('storage: Übertragungscode von neuerer App wird abgelehnt (wie Datei)', async () => {
  const code = 'dt0.' + b64u(JSON.stringify({ v: 2, schema: 4, profile: { prog: {} } }));
  const u = await storage.unpackTransfer(code);
  eq(storage.importData(storage.migrate(V2, T).data.profiles.k4l5m6, u.data, T, TODAY_KEY), { ok: false, error: 'newer' }, 'Schema 4 → newer');
});

(async () => {
  for (const [name, fn] of asyncTests) {
    current = name;
    try { await fn(); } catch (e) { failed++; console.log(`  ✗ [${name}] Ausnahme: ${e && e.stack || e}`); }
  }
  console.log(`\nKern-Tests: ${passed} ok, ${failed} fehlgeschlagen`);
  process.exit(failed ? 1 : 0);
})();
