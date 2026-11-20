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
  ok(r.from === 1 && r.to === 4 && r.changed && !r.newer && d.v === 4, 'from 1 → to 4');
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
  ok(r.from === 2 && d.v === 4, 'from 2');
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
test('storage: Daten von neuerer App (v:5) bleiben unverändert', () => {
  const d4 = { v: 5, app: '2027-01-01.1', profiles: { x: { id: 'x', prog: { de: { 'de-a1-01.1': { s: 'w', t: 1 } } }, zukunft: [1, 2] } }, neuesFeld: true };
  const before = canon(d4), r = storage.migrate(d4, T);
  ok(r.newer === true && r.changed === false, 'Flag newer');
  ok(r.data === d4 && canon(d4) === before, 'gleiches Objekt, unverändert');
});
test('storage: Randfälle der Migration', () => {
  eq(storage.migrate({ profiles: {} }, T).data, { profiles: {}, v: 4 }, 'keine Profile');
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
  ok(ex.app === 'deutsch-tuerkce' && ex.v === 2 && ex.schema === 4 && ex.appVersion === '2026-11-18.1', 'Kopf');
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
  eq(storage.importData(cur, { v: 2, schema: 5, profile: { prog: {} } }, T), { ok: false, error: 'newer' }, 'Schema 5');
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
  const d4 = { v: 5, profiles: {} };
  storage.save(fakeStorage(1e6), d4);
  ok(d4.v === 5, 'v wird nie gesenkt');
  const d2 = { v: 2, profiles: {} };
  storage.save(fakeStorage(1e6), d2);
  ok(d2.v === 4, 'v mindestens SCHEMA');
});

/* ================= Schema 4: eigene Texte der Schreibaufgaben (ADR-13, Tests 1–12) ================= */
const V3 = fixture('v3.json'), W4 = fixture('v4-writes.json'), WR = DT.writes;
test('ADR-13/1: Migration v3 → v4 – alte Felder tief gleich, writes angelegt', () => {
  const before = canon(V3), r = storage.migrate(V3, T, TODAY_KEY), d = r.data;
  ok(canon(V3) === before, 'Eingabe unverändert (rein)');
  ok(r.from === 3 && r.to === 4 && r.changed && !r.newer && d.v === 4, 'from 3 → to 4');
  Object.keys(V3).filter(k => k !== 'v' && k !== 'profiles').forEach(k => eq(d[k], V3[k], 'db.' + k + ' unverändert'));
  Object.keys(V3.profiles).forEach(pid => {
    const o = V3.profiles[pid], n = d.profiles[pid];
    Object.keys(o).forEach(f => eq(n[f], o[f], `${pid}.${f} tief gleich`));
    eq(Object.keys(n).filter(f => !(f in o)), ['writes'], `${pid}: nur writes neu`);
    eq(n.writes, { de: {}, tr: {} }, `${pid}: writes leer je Kurs`);
  });
  eq(d.profiles.u1v2w3.unbekanntesFeld, V3.profiles.u1v2w3.unbekanntesFeld, 'unbekanntes Feld bleibt');
});
test('ADR-13/2: zweimal migrieren = gleich', () => {
  const a = storage.migrate(V3, T, TODAY_KEY).data, b = storage.migrate(a, T, TODAY_KEY);
  ok(!b.changed, 'zweiter Lauf ändert nichts'); eq(b.data, a, 'gleich');
  eq(storage.migrateProfile(copy(a.profiles.u1v2w3), 3, T), a.profiles.u1v2w3, 'migrateProfile(…, 3) auf v4-Profil = gleich');
});
test('ADR-13/3: v von alter App auf 3 gesenkt → vorhandene writes unverändert', () => {
  const a = storage.migrate(V3, T, TODAY_KEY).data, down = copy(a);
  down.v = 3;
  down.profiles.u1v2w3.writes.de['de-a2-s01'] = { x: 'Mein Text', t: 5, n: 1, d: 'Entwurf', dt: 9 };
  down.profiles.a9b8c7.writes = { tr: { 'tr-a2-s01': { d: 'x', dt: 1 } } };   // de fehlt (z. B. von Hand)
  const r = storage.migrate(down, T + 3).data;
  eq(r.profiles.u1v2w3.writes.de['de-a2-s01'], { x: 'Mein Text', t: 5, n: 1, d: 'Entwurf', dt: 9 }, 'Text unverändert');
  eq(r.profiles.a9b8c7.writes, { tr: { 'tr-a2-s01': { d: 'x', dt: 1 } }, de: {} }, 'fehlender Kurs ergänzt, Rest bleibt');
  ['prog', 'srs', 'daily', 'skip', 'place', 'badges'].forEach(f => eq(r.profiles.u1v2w3[f], a.profiles.u1v2w3[f], 'gleich: ' + f));
});
test('ADR-13/4: v1/v2-Fixtures laufen bis v4', () => {
  [V1, V2].forEach((F, i) => {
    const d = storage.migrate(F, T, TODAY_KEY).data;
    ok(d.v === 4, `v${i + 1} → v4`);
    Object.values(d.profiles).forEach(p => eq(p.writes, { de: {}, tr: {} }, `v${i + 1}: ${p.id} writes`));
  });
});
test('ADR-13/5: Tests „neuere App“ laufen mit v:5 (siehe oben)', () => {
  ok(storage.SCHEMA === 4, 'SCHEMA = 4');
  ok(storage.migrate({ v: 5, profiles: {} }, T).newer === true, 'v:5 → newer');
  ok(storage.migrate({ v: 4, profiles: {} }, T).newer === false, 'v:4 → nicht newer');
});
test('ADR-13/6: mergeProfile – pickWrite (auch Entwurf gegen Abgabe), kein Text geht verloren', () => {
  const cur = W4.cur, inc = W4.inc, cb = canon(cur), ib = canon(inc);
  const m = storage.mergeProfile(cur, inc), w = m.writes.de;
  ok(canon(cur) === cb && canon(inc) === ib, 'Eingaben unverändert');
  eq(w['de-a2-s01'], { x: 'Fassung Laptop', t: 2500, n: 2, x0: 'Fassung Handy 1', t0: 1000, xk: 'Fassung Handy 2', tk: 2000 }, 's01: neuere Abgabe gewinnt, erste bleibt, Verlierer → xk');
  eq(w['de-a2-s02'], { x: 'Abgabe Laptop', t: 900, n: 1, xk: 'Entwurf Handy alt', tk: 500 }, 's02: Entwurf älter als Abgabe → kein Entwurf mehr, Text in xk gerettet');
  eq(w['de-a2-s03'], { x: 'Abgabe Handy', t: 3000, n: 1, d: 'Entwurf Handy neu', dt: 3500, xk: 'Entwurf Laptop alt', tk: 2000 }, 's03: neuerer Entwurf bleibt, älterer gerettet');
  eq(w['de-a2-s04'], cur.writes.de['de-a2-s04'], 's04: gleiche Fassung → keine Kopie');
  eq(w['de-a2-s05'], { d: 'nur Laptop', dt: 100 }, 's05: nur auf einer Seite → übernommen');
  eq(m.writes.tr, inc.writes.tr, 'tr ergänzt');
  // Vollständigkeit: jeder Text beider Seiten steht im Ergebnis
  const all = e => ['d', 'x', 'x0', 'xk'].flatMap(f => typeof e[f] === 'string' ? e[f].split(WR.SEP) : []);
  [cur, inc].forEach(P => Object.keys(P.writes.de).forEach(id => all(P.writes.de[id]).forEach(x => ok(all(w[id]).includes(x), `${id}: „${x.slice(0, 20)}“ erhalten`))));
  eq(storage.mergeProfile(m, m), m, 'Ergebnis mit sich selbst = unverändert');
  eq(storage.mergeProfile(m, inc), m, 'erneutes Zusammenführen ändert nichts (idempotent)');
  const twoK = WR.pick({ x: 'A', t: 5, xk: 'K1', tk: 3 }, { x: 'B', t: 9, xk: 'K2', tk: 4 });
  eq([twoK.x, twoK.x0, twoK.xk.split(WR.SEP).sort()], ['B', 'A', ['K1', 'K2']], 'zwei xk-Seiten + Verlierer: A = erste Fassung, K1/K2 gerettet');
  const three = WR.pick({ x: 'A2', t: 5, x0: 'A1', t0: 1, n: 2 }, { x: 'B', t: 9, n: 1 });
  eq([three.x, three.x0, three.xk], ['B', 'A1', 'A2'], 'Verlierer (nicht erste Fassung) → xk');
});
test('ADR-13/7: Export → Import gibt die Texte gleich zurück', () => {
  const src = storage.migrate(V3, T).data.profiles.u1v2w3;
  src.writes.de['de-a2-s01'] = { x: 'Liebe Ayla,\n„danke“ – çok güzel!', t: 1794000000000, t0: 1793000000000, x0: 'erste', n: 2, d: 'neu', dt: 1794100000000 };
  src.writes.tr['tr-a2-s02'] = { d: 'Merhaba, ğüşıöç İ', dt: 1794000000000 };
  const ex = storage.exportData(src, '2026-11-19.5', Date.UTC(2026, 10, 19));
  ok(ex.schema === 4, 'Export schema 4');
  const fresh = storage.migrateProfile({ id: 'neu', prog: { de: {}, tr: {} } }, 1, T);
  const r = storage.importData(fresh, JSON.stringify(ex), T, TODAY_KEY);
  ok(r.ok, 'Import ok'); eq(r.profile.writes, src.writes, 'writes gleich');
  eq(storage.importData(r.profile, ex, T, TODAY_KEY).profile, r.profile, 'zweiter Import ändert nichts');
});
test('ADR-13/8: Schema-3-Datei importieren – vorhandene writes bleiben', () => {
  const cur = storage.migrate(V3, T).data.profiles.u1v2w3;
  cur.writes.de['de-a2-s01'] = { x: 'mein Text', t: 7, t0: 7, n: 1 };
  const file = { app: 'deutsch-tuerkce', v: 2, schema: 3, profile: copy(V3.profiles.a9b8c7) };
  const r = storage.importData(cur, file, T, TODAY_KEY);
  ok(r.ok, 'Import ok'); eq(r.profile.writes, cur.writes, 'writes unverändert');
  eq(r.profile.prog.tr['tr-a1-02.4'], V3.profiles.a9b8c7.prog.tr['tr-a1-02.4'], 'Fortschritt der Datei übernommen');
  const noW = copy(cur); delete noW.writes;
  eq(storage.importData(noW, file, T, TODAY_KEY).profile.writes, { de: {}, tr: {} }, 'cur ohne writes (alt) → angelegt');
});
test('ADR-13/9: Datei mit schema 5 → newer', () => {
  eq(storage.importData({ prog: {} }, { v: 2, schema: 5, profile: { prog: {}, writes: {} } }, T), { ok: false, error: 'newer' }, 'schema 5');
});
test('ADR-13/10: sanitizeIncoming – kürzt, verwirft Nicht-Strings, kappt Zeitstempel', () => {
  const far = (T + 900) * 86400000, long = 'ä'.repeat(2000);
  const file = { v: 2, schema: 4, profile: { prog: {}, writes: {
    de: { 'de-a2-s01': { x: long, t: far, n: 2, d: 42, dt: 'x', x0: 'erste', t0: 5 }, 'de-a2-s02': { d: { boese: 1 } }, 'tr-a2-s01': { x: 'falscher Kurs' },
      'de-a2-x01': { x: 'falsche ID' }, '__proto__': { x: 'p' }, 'de-a2-s03': 'kein Objekt', 'de-b1-s01': { xk: 'k' + WR.SEP + long, tk: 1 } },
    tr: { 'tr-a2-s01': { d: 'ok', dt: 3 } }, en: { 'en-a2-s01': { x: 'x' } } } } };
  const r = storage.importData({ prog: {} }, file, T, TODAY_KEY), w = r.profile.writes;
  ok(r.ok, 'Import ok');
  eq(Object.keys(w.de).sort(), ['de-a2-s01', 'de-b1-s01'], 'nur gültige IDs/Einträge mit Text');
  eq(w.de['de-a2-s01'].x.length, 1500, 'Text auf 1 500 gekürzt');
  ok(!('d' in w.de['de-a2-s01']) && !('dt' in w.de['de-a2-s01']), 'Nicht-String/Nicht-Zahl verworfen');
  ok(w.de['de-a2-s01'].t <= (T + 2) * 86400000, 'Zeitstempel gekappt');
  eq(w.de['de-b1-s01'].xk.split(WR.SEP).map(x => x.length), [1, 1500], 'xk je Teil gekürzt');
  ok(!('en' in w), 'nur Kurse de/tr'); eq(w.tr, { 'tr-a2-s01': { d: 'ok', dt: 3 } }, 'tr gültig');
  ok(!Object.prototype.hasOwnProperty.call(w.de, '__proto__') && ({}).x === undefined, 'kein Prototyp verbogen');
});
test('ADR-13/11: Budget-Grenze in put/submit', () => {
  const p = { writes: { de: {}, tr: {} } };
  let r = WR.put(p, 'de', 'de-a2-s01', 'x'.repeat(1600), 10);
  ok(r.ok && r.changed && p.writes.de['de-a2-s01'].d.length === 1500, 'Feld auf 1 500 gekürzt');
  ok(!WR.put(p, 'de', 'de-a2-s01', 'x'.repeat(1600), 11).changed, 'gleicher Text → keine Änderung');
  for (let i = 2; i <= 67; i++) p.writes.tr['tr-a2-s' + String(i).padStart(2, '0')] = { x: 'y'.repeat(1500), t: 1 };
  ok(WR.size(p) === 1500 * 67, 'size zählt alle Felder');
  const before = canon(p);
  r = WR.put(p, 'de', 'de-a2-s02', 'z'.repeat(100), 12);
  ok(!r.ok && r.error === 'budget' && canon(p) === before, 'über 100 000 → nicht gespeichert, Profil unverändert');
  ok(WR.submit(p, 'de', 'de-a2-s02', 'z'.repeat(1000), 12).error === 'budget', 'submit prüft Budget auch');
  ok(WR.put(p, 'de', 'de-a2-s01', 'kurz', 13).ok, 'Verkleinern geht immer');
  ok(WR.put(p, 'de', 'de-a2-s01', '', 14).ok && !p.writes.de['de-a2-s01'], 'leerer Entwurf → Eintrag entfernt');
  // Abgabe: x0 genau einmal, n zählt, Entwurf weg
  const q = { writes: { de: {}, tr: {} } };
  WR.put(q, 'de', 'de-a2-s01', 'Entwurf', 1); WR.submit(q, 'de', 'de-a2-s01', 'erste', 2);
  eq(q.writes.de['de-a2-s01'], { x: 'erste', t: 2, t0: 2, n: 1 }, 'erste Abgabe: kein x0 (gleich x)');
  WR.submit(q, 'de', 'de-a2-s01', 'zweite', 3); WR.submit(q, 'de', 'de-a2-s01', 'dritte', 4);
  eq(q.writes.de['de-a2-s01'], { x: 'dritte', t: 4, t0: 2, x0: 'erste', n: 3 }, 'x0 bleibt die erste Fassung');
  WR.archiveCourse(q, 'de', 5);
  ok(WR.isArchived(q.writes.de['de-a2-s01']) && WR.status(q.writes.de['de-a2-s01'], null) === '', 'nach Zurücksetzen: Archiv');
  WR.submit(q, 'de', 'de-a2-s01', 'neu', 6);
  ok(q.writes.de['de-a2-s01'].xk === 'dritte' && WR.status(q.writes.de['de-a2-s01'], null) === 'submitted', 'Archiv-Text gerettet, neue Abgabe aktuell');
  eq(WR.countWords('Liebe Ayla, ich kann am 3. Mai leider nicht – sorry!'), 10, 'Wortzähler');
  eq(WR.missingPoints({ hint: [['danke'], ['weil', 'leider'], ['lust']] }, 'Danke! Leider …', DT.check.fold), [2], 'vergessener Punkt (gefaltet)');
});
test('ADR-13/12: Quota-Rücknahme mit fakeStorage', () => {
  const db = storage.migrate(V3, T).data, p = db.profiles.u1v2w3, base = JSON.stringify(db).length;
  let ls = fakeStorage(base + 400);
  let r = WR.commit(ls, db, '', p, 'de', 'de-a2-s01', () => WR.put(p, 'de', 'de-a2-s01', 'kurz', 1));
  ok(r.ok && JSON.parse(ls.m['dt-data']).profiles.u1v2w3.writes.de['de-a2-s01'].d === 'kurz', 'passt → gespeichert');
  const progBefore = canon(p.prog);
  r = WR.commit(ls, db, '', p, 'de', 'de-a2-s01', () => WR.put(p, 'de', 'de-a2-s01', 'x'.repeat(1200), 2));
  ok(!r.ok && r.error === 'rolledback', 'zu groß → zurückgenommen');
  eq(p.writes.de['de-a2-s01'].d, 'kurz', 'Objekt zurückgenommen');
  eq(JSON.parse(ls.m['dt-data']).profiles.u1v2w3.writes.de['de-a2-s01'].d, 'kurz', 'gespeicherter Stand = alter Text');
  ok(canon(p.prog) === progBefore && canon(JSON.parse(ls.m['dt-data']).profiles.u1v2w3.prog) === progBefore, 'Fortschritt unverändert gespeichert');
  ls = fakeStorage(50);
  r = WR.commit(ls, db, '', p, 'de', 'de-a2-s01', () => WR.put(p, 'de', 'de-a2-s01', 'neu', 3));
  ok(!r.ok && r.error === 'save' && p.writes.de['de-a2-s01'].d === 'kurz', 'auch Rücknahme scheitert → error save (Banner), Objekt zurück');
});

/* ---------- ADR-13 Review (Architekt): Nachbesserungen ---------- */
test('ADR-13/R1: Text-Speichern verdrängt dt-backup nie, Fortschritt schon', () => {
  const db = storage.migrate(V3, T).data, p = db.profiles.u1v2w3, len = JSON.stringify(db).length;
  const ls = fakeStorage(len * 2 + 300);
  ok(storage.save(ls, db), 'Ausgangsstand gespeichert');
  ls.setItem('dt-backup', 'b'.repeat(len - 200));
  const r = WR.commit(ls, db, '', p, 'de', 'de-a2-s01', () => WR.put(p, 'de', 'de-a2-s01', 'x'.repeat(1400), 1));
  ok(!r.ok && r.error === 'rolledback', 'Text passt nicht → zurückgenommen');
  ok(ls.getItem('dt-backup') !== null, 'dt-backup bleibt (Text darf Sicherung nicht verdrängen)');
  ok(!WR.get(p, 'de', 'de-a2-s01'), 'Objekt zurückgenommen');
  p.prog.de = p.prog.de || {}; p.prog.de['x.big'] = { s: 'c', t: 1, pad: 'p'.repeat(600) };
  ok(storage.save(ls, db) === true && ls.getItem('dt-backup') === null, 'Fortschritt: dt-backup darf weichen');
});
test('ADR-13/R4: einzelne Fassungen löschen (removePart) und ganzen Text (remove)', () => {
  const S = WR.SEP, mk = () => ({ writes: { de: { 'de-a2-s01': { x: 'neu', t: 9, x0: 'erst', t0: 1, xk: 'k1' + S + 'k2' + S + 'k3', tk: 5, n: 3 } }, tr: {} } });
  let p = mk(), r = WR.removePart(p, 'de', 'de-a2-s01', 'xk', 1);
  ok(r.ok && r.prev.xk.split(S).length === 3, 'ok + prev');
  eq(p.writes.de['de-a2-s01'].xk, 'k1' + S + 'k3', 'xk-Teil 2 weg, Rest bleibt');
  WR.removePart(p, 'de', 'de-a2-s01', 'xk', 0); WR.removePart(p, 'de', 'de-a2-s01', 'xk', 0);
  ok(!('xk' in p.writes.de['de-a2-s01']) && !('tk' in p.writes.de['de-a2-s01']), 'letzter xk-Teil → xk/tk weg');
  ok(!WR.removePart(p, 'de', 'de-a2-s01', 'xk', 0).ok, 'kein xk mehr → nicht ok');
  ok(WR.removePart(p, 'de', 'de-a2-s01', 'x0').ok && !('x0' in p.writes.de['de-a2-s01']) && p.writes.de['de-a2-s01'].x === 'neu', 'x0 weg, x bleibt');
  ok(!WR.removePart(p, 'de', 'de-a2-s01', 'x').ok && p.writes.de['de-a2-s01'].x === 'neu', 'aktuelle Abgabe nicht über removePart');
  p = mk(); WR.restore(p, 'de', 'de-a2-s01', r.prev); eq(p.writes.de['de-a2-s01'], mk().writes.de['de-a2-s01'], 'restore(prev) stellt her');
  p = { writes: { de: { 'de-a2-s02': { x: 'alt', t: 5, r: 7, n: 1 } }, tr: {} } };
  ok(WR.removePart(p, 'de', 'de-a2-s02', 'x').ok && !p.writes.de['de-a2-s02'], 'archivierte Abgabe gelöscht, leerer Eintrag verschwindet');
  p = mk(); ok(WR.remove(p, 'de', 'de-a2-s01') && !p.writes.de['de-a2-s01'], 'remove: ganzer Text weg');
  ok(!WR.removePart(p, 'de', 'de-a2-s09', 'x0').ok, 'unbekannte ID → nicht ok');
});
test('ADR-13/R5: r robust gegen Uhrabweichung, prog konsistent', () => {
  // Gerät B (Uhr 1 h vor) setzt den Kurs mit Texten zurück; Gerät A gibt danach (A-Zeit < r von B) neu ab
  const H = 3600000, b = { x: 'alt', t: 1000, n: 1 };
  WR.archiveCourse({ writes: { de: { 'de-a2-s01': b }, tr: {} } }, 'de', 5000 + H);
  ok(b.r === 5000 + H, 'archiveCourse setzt r');
  const fut = { writes: { de: { 'de-a2-s02': { x: 'zukunft', t: 9e9 } }, tr: {} } };
  WR.archiveCourse(fut, 'de', 5000);
  ok(WR.isArchived(fut.writes.de['de-a2-s02']), 'r >= t: Abgabe mit Zukunftszeit wird trotzdem archiviert');
  const a = { x: 'neu von A', t: 5000 + 60000, n: 2 };
  let m = WR.pick(a, b);
  ok(m.x === 'neu von A' && WR.hasCurrent(m) && !('r' in m), 'neue Abgabe von A bleibt aktuell (r von B gilt nicht)');
  ok(m.x0 === 'alt' && !('xk' in m), 'B-Fassung bleibt (als erste Fassung)');
  m = WR.pick(b, a); ok(WR.hasCurrent(m) && m.x === 'neu von A', 'Reihenfolge egal');
  m = WR.pick({ x: 'alt', t: 1000, n: 1 }, b);
  ok(WR.isArchived(m) && m.r === b.r, 'dieselbe Abgabe (x und t) → r übernommen');
  m = WR.pick(b, { x: 'alt', t: 1000, n: 1 }); ok(WR.isArchived(m), '… auch umgekehrt');
  // submit nach übernommenem r (fremde Uhr vor): neue Abgabe ist aktuell
  const p = { writes: { de: { 'de-a2-s01': copy(b) }, tr: {} } };
  WR.submit(p, 'de', 'de-a2-s01', 'neuer Text', 5000);
  const e = p.writes.de['de-a2-s01'];
  ok(WR.hasCurrent(e) && !('r' in e) && e.x0 === 'alt', 'submit löscht r, alte Abgabe bleibt als erste Fassung');
  // status: kein „geübt“ ohne aktuellen Text
  eq(WR.status(b, { s: 'c', t: 1 }), '', 'archiviert + prog c → nicht „geübt“');
  eq(WR.status(null, { s: 'c', t: 1 }), '', 'kein Text + prog c → nicht „geübt“');
  eq(WR.status(a, { s: 'c', t: 1 }), 'done', 'aktuell + prog c → geübt');
  // mergeProfile: A hatte „geübt“, B hat mit Texten zurückgesetzt → prog des archivierten Textes weg, Rest bleibt
  const pa = { prog: { de: { 'de-a2-s01': { s: 'c', t: 2000 }, 'de-a2-s03': { s: 'c', t: 2000 }, 'x.1': { s: 'c', t: 2000 } } },
    writes: { de: { 'de-a2-s01': { x: 'alt', t: 1000, n: 1 }, 'de-a2-s03': { x: 'drei', t: 1500, n: 1 } }, tr: {} } };
  const pb = { prog: { de: {} }, writes: { de: { 'de-a2-s01': copy(b) }, tr: {} } };
  const mp = storage.mergeProfile(pa, pb);
  ok(!('de-a2-s01' in mp.prog.de), 'prog des archivierten Textes entfernt');
  ok(mp.prog.de['de-a2-s03'] && mp.prog.de['x.1'], 'andere prog-Einträge bleiben');
  ok(WR.isArchived(mp.writes.de['de-a2-s01']), 'Text archiviert, nicht gelöscht');
  ok(!('de-a2-s01' in storage.mergeProfile(pb, pa).prog.de), 'auch umgekehrt');
});
test('ADR-13/R3: Import begrenzt xk-Teile (fremde Daten), leere/doppelte weg', () => {
  const S = WR.SEP, parts = Array.from({ length: 60 }, (_, i) => 'Teil ' + i);
  const out = WR.sanitize({ de: { 'de-a2-s01': { x: 'a', t: 1, xk: parts.concat(['Teil 0', ' ', '']).join(S) } } });
  const xk = out.de['de-a2-s01'].xk.split(S);
  ok(xk.length === WR.MAX_XK && xk[0] === 'Teil 0', 'höchstens MAX_XK Teile, neueste zuerst');
  ok(new Set(xk).size === xk.length, 'keine Doppelten');
  ok(!('xk' in WR.sanitize({ de: { 'de-a2-s01': { x: 'a', xk: S } } }).de['de-a2-s01']), 'nur leere Teile → xk weg');
  ok(storage.TR_MAX_RAW > 0, 'TR_MAX_RAW für Dateigröße exportiert');
});
test('ADR-13/R7: sehr alter Tab stuft zurück → writes aus Sicherung zusammenführen', () => {
  ok(storage.KEYS.schemaMax === 'dt-schema-max', 'Schlüssel dt-schema-max');
  const bk = storage.migrate(V3, T).data;
  bk.profiles.u1v2w3.writes.de['de-a2-s01'] = { x: 'gesichert', t: 5, n: 1 };
  bk.profiles.u1v2w3.writes.tr['tr-a2-s02'] = { d: 'Entwurf', dt: 6 };
  const down = copy(V3);                                  // alter Tab: v 3, ohne writes, neuerer Fortschritt
  down.profiles.u1v2w3.prog.de = Object.assign({}, down.profiles.u1v2w3.prog.de, { 'neu.1': { s: 'c', t: 99 } });
  const d = storage.migrate(down, T).data;
  d.profiles.u1v2w3.writes.de['de-a2-s03'] = { d: 'nur hier', dt: 7 };
  ok(storage.mergeWrites(d, bk) === Object.keys(bk.profiles).length, 'alle Profile der Sicherung');
  eq(d.profiles.u1v2w3.writes.de['de-a2-s01'], { x: 'gesichert', t: 5, n: 1 }, 'Text aus Sicherung zurück');
  eq(d.profiles.u1v2w3.writes.tr['tr-a2-s02'], { d: 'Entwurf', dt: 6 }, 'Entwurf aus Sicherung zurück');
  eq(d.profiles.u1v2w3.writes.de['de-a2-s03'], { d: 'nur hier', dt: 7 }, 'vorhandener Text bleibt');
  ok(d.profiles.u1v2w3.prog.de['neu.1'], 'neuerer Fortschritt des alten Tabs bleibt');
  const again = copy(d); storage.mergeWrites(again, bk); eq(again, d, 'idempotent');
  eq(storage.mergeWrites(d, null), 0, 'ohne Sicherung: nichts');
  const solo = { profiles: { zz: { prog: {} } } }; storage.mergeWrites(solo, bk); eq(solo, { profiles: { zz: { prog: {} } } }, 'unbekannte Profile werden nicht angelegt');
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
  const code = 'dt0.' + b64u(JSON.stringify({ v: 2, schema: 5, profile: { prog: {} } }));
  const u = await storage.unpackTransfer(code);
  eq(storage.importData(storage.migrate(V2, T).data.profiles.k4l5m6, u.data, T, TODAY_KEY), { ok: false, error: 'newer' }, 'Schema 5 → newer');
});

/* ================= check / catalog (ADR-12.9, Schritt 2) =================
 * Erwartungswerte stammen aus dem Ist-Zustand von js/app.js VOR der Verschiebung nach js/core/check.js. */
const tfx = k => 'T:' + k;
const CHECK_TABLE = [
  ["mc ok",{"t":"mc","o":["a","b","c"],"a":1,"why":{"0":"w0","2":"w2"}},{"sel":1},"de",{"ok":true,"given":"b","correct":"b"}],
  ["mc falsch+why",{"t":"mc","o":["a","b","c"],"a":1,"why":{"0":"w0","2":"w2"}},{"sel":2},"de",{"ok":false,"given":"c","correct":"b","hint":"w2"}],
  ["mc falsch ohne why",{"t":"mc","o":["a","b"],"a":1},{"sel":0},"tr",{"ok":false,"given":"a","correct":"b"}],
  ["listen ok",{"t":"listen","say":"x","o":["a","b"],"a":0,"why":{"1":"nein"}},{"sel":0},"tr",{"ok":true,"given":"a","correct":"a"}],
  ["listen falsch",{"t":"listen","say":"x","o":["a","b"],"a":0,"why":{"1":"nein"}},{"sel":1},"tr",{"ok":false,"given":"b","correct":"a","hint":"nein"}],
  ["gap ok",{"t":"gap","q":"___","a":["Haus"]},{"input":"Haus"},"de",{"ok":true,"given":"Haus","correct":"Haus","hint":null}],
  ["gap strikt: Nomen klein (geändert, früher ok)",{"t":"gap","q":"___","a":["Haus"]},{"input":"haus"},"de",{"ok":false,"given":"haus","correct":"Haus","hint":"T:caseHint"}],
  ["gap strikt: Groß+Satzzeichen (geändert, früher ok)",{"t":"gap","q":"___","a":["ich bin"]},{"input":"  Ich   bin! "},"de",{"ok":false,"given":"  Ich   bin! ","correct":"ich bin","hint":"T:casePunctHint"}],
  ["gap Leerraum toleriert",{"t":"gap","q":"___","a":["ich bin"]},{"input":"  ich   bin "},"de",{"ok":true,"given":"  ich   bin ","correct":"ich bin","hint":null}],
  ["gap alt zweite Antwort",{"t":"gap","q":"___","a":["a1","a2"]},{"input":"a2"},"de",{"ok":true,"given":"a2","correct":"a1","hint":null}],
  ["gap cs ok",{"t":"gap","q":"___","a":["Haus"],"cs":true},{"input":"Haus"},"de",{"ok":true,"given":"Haus","correct":"Haus","hint":null}],
  ["gap cs Hinweis",{"t":"gap","q":"___","a":["Haus"],"cs":true},{"input":"haus"},"de",{"ok":false,"given":"haus","correct":"Haus","hint":"T:caseHint"}],
  ["gap wrong-Treffer",{"t":"gap","q":"___","a":["gehe"],"wrong":{"gehst":"Du-Form"}},{"input":"Gehst!"},"de",{"ok":false,"given":"Gehst!","correct":"gehe","hint":"Du-Form"}],
  ["gap wrong vor cs",{"t":"gap","q":"___","a":["Haus"],"cs":true,"wrong":{"haus":"Nomen groß"}},{"input":"haus"},"de",{"ok":false,"given":"haus","correct":"Haus","hint":"Nomen groß"}],
  ["gap falsch ohne Hinweis",{"t":"gap","q":"___","a":["Haus"]},{"input":"Maus"},"de",{"ok":false,"given":"Maus","correct":"Haus","hint":null}],
  ["gap tr ç",{"t":"gap","q":"___","a":["çocuk"]},{"input":"cocuk"},"tr",{"ok":false,"given":"cocuk","correct":"çocuk","hint":"T:specialChars"}],
  ["gap tr ğ",{"t":"gap","q":"___","a":["dağ"]},{"input":"dag"},"tr",{"ok":false,"given":"dag","correct":"dağ","hint":"T:specialChars"}],
  ["gap tr ı",{"t":"gap","q":"___","a":["kız"]},{"input":"kiz"},"tr",{"ok":false,"given":"kiz","correct":"kız","hint":"T:specialChars"}],
  ["gap tr I/ı strikt (geändert, früher ok)",{"t":"gap","q":"___","a":["Işık"]},{"input":"ışık"},"tr",{"ok":false,"given":"ışık","correct":"Işık","hint":"T:caseHint"}],
  ["gap tr İ Großschreibung (geändert, früher ok)",{"t":"gap","q":"___","a":["İstanbul"]},{"input":"istanbul"},"tr",{"ok":false,"given":"istanbul","correct":"İstanbul","hint":"T:caseHint"}],
  ["gap tr I-Punkt",{"t":"gap","q":"___","a":["ıslak"]},{"input":"islak"},"tr",{"ok":false,"given":"islak","correct":"ıslak","hint":"T:specialChars"}],
  ["gap tr ö",{"t":"gap","q":"___","a":["göz"]},{"input":"goz"},"tr",{"ok":false,"given":"goz","correct":"göz","hint":"T:specialChars"}],
  ["gap tr ş",{"t":"gap","q":"___","a":["şeker"]},{"input":"seker"},"tr",{"ok":false,"given":"seker","correct":"şeker","hint":"T:specialChars"}],
  ["gap tr ü",{"t":"gap","q":"___","a":["gül"]},{"input":"gul"},"tr",{"ok":false,"given":"gul","correct":"gül","hint":"T:specialChars"}],
  ["gap de ä ß",{"t":"gap","q":"___","a":["Straße"]},{"input":"strasse"},"de",{"ok":false,"given":"strasse","correct":"Straße","hint":"T:specialChars"}],
  ["gap de ä",{"t":"gap","q":"___","a":["Mädchen"]},{"input":"madchen"},"de",{"ok":false,"given":"madchen","correct":"Mädchen","hint":"T:specialChars"}],
  ["gap Apostroph",{"t":"gap","q":"___","a":["Ankara'ya"]},{"input":"Ankara’ya"},"tr",{"ok":true,"given":"Ankara’ya","correct":"Ankara'ya","hint":null}],
  ["gap Apostroph fehlt",{"t":"gap","q":"___","a":["Ankara'ya"]},{"input":"Ankaraya"},"tr",{"ok":false,"given":"Ankaraya","correct":"Ankara'ya","hint":"T:specialChars"}],
  ["gap tr Satzzeichen (geändert, früher ok)",{"t":"gap","q":"___","a":["evet"]},{"input":"Evet."},"tr",{"ok":false,"given":"Evet.","correct":"evet","hint":"T:casePunctHint"}],
  ["dictation strikt (geändert, früher ok)",{"t":"dictation","say":"s","a":["Guten Tag"]},{"input":"guten tag!"},"de",{"ok":false,"given":"guten tag!","correct":"Guten Tag","hint":"T:casePunctHint"}],
  ["dictation Sonderzeichen",{"t":"dictation","say":"s","a":["Günaydın"]},{"input":"gunaydin"},"tr",{"ok":false,"given":"gunaydin","correct":"Günaydın","hint":"T:specialChars"}],
  ["dictation falsch",{"t":"dictation","say":"s","a":["Guten Tag"],"wrong":{"gute tag":"Endung"}},{"input":"Gute Tag"},"de",{"ok":false,"given":"Gute Tag","correct":"Guten Tag","hint":"Endung"}],
  ["speak selfOk",{"t":"speak","say":"Guten Tag"},{"selfOk":true},"de",{"ok":true,"given":"","correct":"Guten Tag"}],
  ["speak exakt",{"t":"speak","say":"Guten Tag"},{"heardAlts":["guten tag"],"heard":"guten tag"},"de",{"ok":true,"given":"guten tag","correct":"Guten Tag","hint":"T:speakAlmost"}],
  ["speak 0.8 Grenze (ok)",{"t":"speak","say":"abcde"},{"heardAlts":["abcdx"],"heard":"abcdx"},"de",{"ok":true,"given":"abcdx","correct":"abcde","hint":"T:speakAlmost"}],
  ["speak 0.6 Grenze (fast)",{"t":"speak","say":"abcde"},{"heardAlts":["abcxx"],"heard":"abcxx"},"de",{"ok":false,"given":"abcxx","correct":"abcde","hint":"T:speakAlmost"}],
  ["speak weit weg",{"t":"speak","say":"abcde"},{"heardAlts":["xyz"],"heard":"xyz"},"de",{"ok":false,"given":"xyz","correct":"abcde","hint":"T:speakRetry"}],
  ["speak alt",{"t":"speak","say":"halb acht","alt":["halb 8"]},{"heardAlts":["halb 8"],"heard":"halb 8"},"de",{"ok":true,"given":"halb 8","correct":"halb acht","hint":"T:speakAlmost"}],
  ["speak mehrere Hörvarianten",{"t":"speak","say":"Nasılsın"},{"heardAlts":["nasilsin","nasılsın"],"heard":"nasilsin"},"tr",{"ok":true,"given":"nasilsin","correct":"Nasılsın","hint":"T:speakAlmost"}],
  ["speak leer",{"t":"speak","say":"abc"},{"heardAlts":[""],"heard":""},"de",{"ok":false,"given":"","correct":"abc","hint":"T:speakRetry"}],
  ["speak keine Alts",{"t":"speak","say":"abc"},{"heard":""},"de",{"ok":false,"given":"","correct":"abc","hint":"T:speakRetry"}],
  ["order ok",{"t":"order","w":["ich","bin","da"],"a":["ich bin da"]},{"picked":[0,1,2]},"de",{"ok":true,"given":"ich bin da","correct":"ich bin da","hint":null}],
  ["order gleichwertig",{"t":"order","w":["heute","gehe","ich"],"a":["heute gehe ich","ich gehe heute"]},{"picked":[2,1,0]},"de",{"ok":true,"given":"ich gehe heute","correct":"heute gehe ich","hint":null}],
  ["order falsch",{"t":"order","w":["ich","bin","da"],"a":["ich bin da"]},{"picked":[1,0,2]},"de",{"ok":false,"given":"bin ich da","correct":"ich bin da","hint":null}],
  ["order Satzzeichen",{"t":"order","w":["Ben","geldim."],"a":["Ben geldim"]},{"picked":[0,1]},"tr",{"ok":true,"given":"Ben geldim.","correct":"Ben geldim","hint":null}],
  ["match ok",{"t":"match","p":[["a","1"],["b","2"]]},{"choice":["1","2"]},"de",{"ok":true,"given":"a = 1 · b = 2","correct":"a = 1 · b = 2","hint":null,"match":true}],
  ["match falsch",{"t":"match","p":[["a","1"],["b","2"]]},{"choice":["2","1"]},"de",{"ok":false,"given":"a = 2 · b = 1","correct":"a = 1 · b = 2","hint":null,"match":true}],
  ["match unvollständig",{"t":"match","p":[["a","1"],["b","2"]]},{"choice":["1",null]},"de",{"ok":false,"given":"a = 1 · b = –","correct":"a = 1 · b = 2","hint":null,"match":true}],
  ["unbekannter Typ",{"t":"zzz"},{},"de",{"ok":false}]
];
/* Strikte Schreibprüfung (gap, dictation): Groß-/Kleinschreibung und Satzzeichen zählen. [name, ex, input, lang, ok, hint] */
const G = a => ({ t: 'gap', q: '___', a: a }), D = a => ({ t: 'dictation', say: a[0], a: a });
const STRICT_TABLE = [
  ['DE Nomen groß ok', G(['Hund']), 'Hund', 'de', true, null],
  ['DE Nomen klein', G(['Hund']), 'hund', 'de', false, 'T:caseHint'],
  ['DE Verb großgeschrieben', G(['komme']), 'Komme', 'de', false, 'T:caseHint'],
  ['DE Satzanfang klein', G(['Wie']), 'wie', 'de', false, 'T:caseHint'],
  ['TR Satzanfang İ ok', G(['İki bin']), 'İki bin', 'tr', true, null],
  ['TR Satzanfang i statt İ', G(['İki bin']), 'iki bin', 'tr', false, 'T:caseHint'],
  ['TR İ als I+Punkt (NFD) ok', G(['İstanbul']), 'I\u0307stanbul', 'tr', true, null],
  ['TR I statt İ', G(['İstanbul']), 'Istanbul', 'tr', false, 'T:specialChars'],
  ['TR ı/i vertauscht', G(['kız']), 'kiz', 'tr', false, 'T:specialChars'],
  ['TR ç ğ ö ş ü ok', G(['çiğ köfte, şöyle güzel']), 'çiğ köfte, şöyle güzel', 'tr', true, null],
  ['TR ş fehlt', G(['şöyle']), 'soyle', 'tr', false, 'T:specialChars'],
  ['Apostroph typografisch ’', G(["Ankara'ya"]), 'Ankara’ya', 'tr', true, null],
  ['Apostroph typografisch ´ und `', G(["9'da"]), '9´da', 'tr', true, null],
  ['Apostroph in Lösung typografisch', G(['Ali’yle']), "Ali'yle", 'tr', true, null],
  ['Apostroph klein + Eigenname', G(["Ankara'ya"]), "ankara'ya", 'tr', false, 'T:caseHint'],
  ['Leerraum mehrfach/Rand', G(['hem de']), '  hem   de ', 'tr', true, null],
  ['Satzzeichen zu viel in Lücke', G(['gel']), 'gel!', 'tr', false, 'T:punctHint'],
  ['Bindestrich zählt', G(['E-Mail']), 'EMail', 'de', false, null],
  ['Diktat ok', D(['Ich glaube, dass er kommt.']), 'Ich glaube, dass er kommt.', 'de', true, null],
  ['Diktat Leerzeichen vor Satzzeichen', D(['Ich glaube, dass er kommt.']), 'Ich glaube , dass er kommt .', 'de', true, null],
  ['Diktat Punkt fehlt', D(['Ich glaube, dass er kommt.']), 'Ich glaube, dass er kommt', 'de', false, 'T:punctHint'],
  ['Diktat Komma fehlt', D(['Ich glaube, dass er kommt.']), 'Ich glaube dass er kommt.', 'de', false, 'T:punctHint'],
  ['Diktat Großschreibung', D(['Ich glaube, dass er kommt.']), 'ich glaube, dass er kommt.', 'de', false, 'T:caseHint'],
  ['Diktat beides', D(['Ich glaube, dass er kommt.']), 'ich glaube dass er kommt', 'de', false, 'T:casePunctHint'],
  ['Diktat Fragezeichen statt Punkt', D(['Neredeydin?']), 'Neredeydin.', 'tr', false, 'T:punctHint'],
  ['Diktat Anführungszeichen typografisch', D(['Er sagt: "Hallo".']), 'Er sagt: „Hallo“.', 'de', true, null],
  ['Diktat Auslassungspunkte …', D(['Na ja...']), 'Na ja…', 'de', true, null],
  ['wrong greift lenient (Satzzeichen/groß)', Object.assign(G(['gehe']), { wrong: { gehst: 'Du-Form' } }), 'Gehst.', 'de', false, 'Du-Form'],
  ['wrong vor caseHint', Object.assign(G(['Ihnen']), { wrong: { ihnen: 'Höflichkeitsform groß' } }), 'ihnen', 'de', false, 'Höflichkeitsform groß'],
  ['wrong für Diktat lenient', Object.assign(D(['Seid leise.']), { wrong: { 'seit leise': 'seid/seit' } }), 'Seit leise.', 'de', false, 'seid/seit'],
  ['cs:false Opt-out: klein ok', Object.assign(G(['Haus']), { cs: false }), 'haus', 'de', true, null],
  ['cs:false Opt-out: Satzzeichen ok', Object.assign(G(['ich bin']), { cs: false }), 'Ich bin!', 'de', true, null],
  ['cs:false Opt-out: Sonderzeichen weiter', Object.assign(G(['Straße']), { cs: false }), 'strasse', 'de', false, 'T:specialChars'],
  ['cs:true (alt) weiter strikt', Object.assign(G(['Haus']), { cs: true }), 'haus', 'de', false, 'T:caseHint']
];
test('check: strikte Schreibprüfung gap/dictation (Groß-/Kleinschreibung, Satzzeichen, Hinweise)', () => {
  STRICT_TABLE.forEach(([name, ex, input, lang, wantOk, wantHint]) => {
    const r = DT.check.evaluate(ex, { input: input }, lang, tfx);
    eq([r.ok, r.hint, r.correct], [wantOk, wantHint, ex.a[0]], name);
  });
});
test('check: order und speak bleiben nachsichtig', () => {
  const o = { t: 'order', w: ['ich', 'Komme', 'heute,', 'oder?'], a: ['Ich komme heute, oder?'] };
  eq(DT.check.evaluate(o, { picked: [0, 1, 2, 3] }, 'de', tfx).ok, true, 'order: Bausteine mit Satzzeichen/Großschreibung');
  eq(DT.check.evaluate({ t: 'speak', say: 'Guten Tag, Anna!' }, { heardAlts: ['guten tag anna'], heard: 'guten tag anna' }, 'de', tfx).ok, true, 'speak ohne Satzzeichen/Großschreibung');
});
test('check: strict (Leerraum, typografische Zeichen, NFC)', () => {
  [['  a ,  b . ', 'a, b.'], ['„x“ «y»', '"x" "y"'], ['a’b‘c`d´eʼf', "a'b'c'd'e'f"], ['I\u0307', 'İ'], ['Ja …', 'Ja...']].forEach(([a, r]) => eq(DT.check.strict(a), r, 'strict ' + a));
});
test('check: evaluate – Tabelle je Übungstyp (mc, listen, gap, dictation, speak, order, match)', () => {
  ok(DT.check && DT.catalog, 'DT.check und DT.catalog vorhanden');
  CHECK_TABLE.forEach(([name, ex, c, lang, want]) => eq(DT.check.evaluate(ex, copy(c), lang, tfx), want, name));
});
/* ---------- cloze und sort (ADR-12.4/12.5) ---------- */
const CL = { t: 'cloze', q: 'x', text: 'Gestern {1} ich im Kino {2}. Der Film {3} toll!', e: 'E',
  gaps: { 1: { a: ['bin'], o: ['bin', 'habe', 'war'], wrong: { habe: 'W-habe', war: 'W-war' } }, 2: { a: ['gewesen'], wrong: { gegangen: 'W-gegangen' } }, 3: { a: ['war'], o: ['war', 'hatte', 'ist'], wrong: { hatte: 'W-hatte', ist: 'W-ist' } } } };
const CLTR = { t: 'cloze', q: 'x', text: 'Ben okul{1} gidiyorum. Ankara’ya {2}.', e: 'E',
  gaps: { 1: { a: ['a'], o: ['a', 'e'], wrong: { e: 'W-e' } }, 2: { a: ['gittim'], wrong: { gittik: 'W-gittik' } } } };
const cev = (ex, gaps, lang) => DT.check.evaluate(ex, { gaps: gaps }, lang || 'de', tfx);
test('check: cloze – alle richtig / eine falsch / Teilergebnis / wrong-Treffer', () => {
  let r = cev(CL, { 1: 'bin', 2: 'gewesen', 3: 'war' });
  eq([r.ok, r.cloze, r.gaps.map(g => g.ok)], [true, true, [true, true, true]], 'alle richtig');
  eq(r.given, '{1} bin · {2} gewesen · {3} war', 'given');
  r = cev(CL, { 1: 'bin', 2: 'gewesen', 3: 'ist' });
  eq([r.ok, r.gaps.map(g => g.ok), r.gaps[2].hint], [false, [true, true, false], 'W-ist'], 'letzte Lücke falsch (Select) mit wrong');
  r = cev(CL, { 1: 'habe', 2: 'gegangen', 3: 'war' });
  eq([r.ok, r.gaps.map(g => g.ok), r.gaps[0].hint, r.gaps[1].hint], [false, [false, false, true], 'W-habe', 'W-gegangen'], 'zwei falsch, wrong je Lücke');
  eq(r.correct, '{1} bin · {2} gewesen · {3} war', 'correct');
  eq(cev(CL, {}).ok, false, 'leere Lücken ⇒ falsch (canCheck verhindert das vorher)');
});
test('check: cloze – streng (Groß/klein, Satzzeichen, Sonderzeichen, Leerraum)', () => {
  eq(cev(CL, { 1: 'Bin', 2: 'gewesen', 3: 'war' }).gaps[0].hint, 'T:caseHint', 'Groß/klein ⇒ caseHint (strikt falsch)');
  eq(cev(CL, { 1: 'bin', 2: 'gewesen.', 3: 'war' }).gaps[1].hint, 'T:punctHint', 'Satzzeichen ⇒ punctHint');
  eq(cev(CL, { 1: 'bin', 2: '  gewesen ', 3: 'war' }).ok, true, 'Leerraum am Rand wird toleriert');
  eq(cev(CLTR, { 1: 'a', 2: 'gıttım' }, 'tr').gaps[1].hint, 'T:specialChars', 'TR ı statt i ⇒ specialChars');
  eq(cev(CLTR, { 1: 'a', 2: 'GİTTİM' }, 'tr').gaps[1].hint, 'T:caseHint', 'TR Großschreibung ⇒ caseHint');
  eq(cev(CLTR, { 1: 'a', 2: 'gittim' }, 'tr').ok, true, 'TR richtig');
  eq(cev(Object.assign({}, CL, { cs: false }), { 1: 'BIN', 2: 'Gewesen', 3: 'war' }).ok, true, 'cs:false nachsichtig');
  eq(cev({ t: 'cloze', text: '{1} {2}', gaps: { 1: { a: ['der', 'die'] }, 2: { a: ['x'] } } }, { 1: 'die', 2: 'x' }).ok, true, 'mehrere gültige Antworten');
  eq(cev({ t: 'cloze', text: '{1} {2}', gaps: { 1: { a: ['Ankara’ya'] }, 2: { a: ['x'] } } }, { 1: "Ankara'ya", 2: 'x' }, 'tr').ok, true, 'typografischer Apostroph');
  eq(DT.check.clozeKeys(CL), ['1', '2', '3'], 'clozeKeys');
  const long = { t: 'cloze', text: '{1} {2}', gaps: { 1: { a: ['a'] }, 2: { a: ['b'] } } };
  eq(cev(long, { 1: 'x'.repeat(200), 2: 'y' }).given.length <= 120, true, 'given höchstens 120 Zeichen');
});
const SO = { t: 'sort', q: 'x', cats: ['haben', 'sein'], items: [['fahren', 1], ['kaufen', 0], ['aufstehen', 1], ['schlafen', 0]], why: { fahren: 'W1', kaufen: 'W2', aufstehen: 'W3', schlafen: 'W4' }, e: 'E' };
const sev = (assign) => DT.check.evaluate(SO, { assign: assign }, 'de', tfx);
test('check: sort – alles richtig / ein Fehler / unvollständig / why je Element', () => {
  let r = sev([1, 0, 1, 0]);
  eq([r.ok, r.sort, r.items.map(x => x.ok)], [true, true, [true, true, true, true]], 'alle richtig');
  r = sev([0, 0, 1, 0]);
  eq([r.ok, r.items.map(x => x.ok), r.items[0].given, r.items[0].correct, r.items[0].hint], [false, [false, true, true, true], 'haben', 'sein', 'W1'], 'ein Element falsch + why');
  eq(r.given, 'fahren → haben · kaufen → haben · aufstehen → sein · schlafen → haben', 'given');
  eq(r.correct, 'fahren → sein · kaufen → haben · aufstehen → sein · schlafen → haben', 'correct');
  r = sev([null, 0, 1, 0]);
  eq([r.ok, r.items[0].given], [false, null], 'nicht zugeordnet ⇒ falsch');
  eq(sev([0, 1, 0, 1]).items.every(x => !x.ok), true, 'alles vertauscht: alle falsch');
  eq(sev([]).ok, false, 'leere Zuordnung');
});
test('check: isCountable zählt cloze und sort (nur speak nicht)', () => {
  ['cloze', 'sort', 'gap', 'mc', 'order', 'match'].forEach(x => eq(DT.check.isCountable({ t: x }), true, x + ' zählbar'));
  eq(DT.check.isCountable({ t: 'speak' }), false, 'speak nicht');
});
test('check: lint – gültige Beispiele ohne Fehler', () => {
  eq(DT.check.lint(CL).errors, [], 'cloze gültig'); eq(DT.check.lint(SO), { errors: [], warnings: [] }, 'sort gültig');
  const stubK = { dialogs: {}, addDialog(id, d) { this.dialogs[id] = d; } };
  vm.runInContext(fs.readFileSync(path.join(__dirname, 'fixtures', 'cloze-sort-test.js'), 'utf8').replace('window.KOPRU', 'K'), Object.assign(vm.createContext({ K: stubK }), {}));
  const qs = [].concat(...Object.values(stubK.dialogs).map(d => d.questions));
  eq(qs.length, 5, 'Fixture: 5 Fragen'); eq(qs.map(q => DT.check.lint(q)).filter(r => r.errors.length || r.warnings.length).length, 0, 'Fixture: Validator ohne Fehler/Hinweise');
  ['de', 'tr'].forEach(c => eq(qs.filter(q => q.id.indexOf(c + '-') === 0).map(q => q.t).sort(), c === 'de' ? ['cloze', 'cloze', 'sort'] : ['cloze', 'sort'], 'Fixture ' + c));
});
test('catalog: Rollenspiel – Fixture, IDs, Reihenfolge, Kontext, Validator', () => {
  const CAT = DT.catalog, stubK = { dialogs: {}, addDialog(id, d) { this.dialogs[id] = d; } };
  vm.runInContext(fs.readFileSync(path.join(__dirname, 'fixtures', 'roleplay-test.js'), 'utf8').replace('window.KOPRU', 'K'), vm.createContext({ K: stubK }));
  const ids = Object.keys(stubK.dialogs); eq(ids, ['de-a2-d91', 'tr-a2-d91'], 'Fixture: 2 Dialoge');
  ids.forEach(id => {
    const d = stubK.dialogs[id], r = CAT.checkRoleplay(id, d), ex = CAT.roleExercises(d);
    eq(r, { errors: [], warnings: [] }, id + ': Validator ohne Fehler/Hinweise');
    eq(ex.map(q => q.id), [1, 2, 3].map(n => id + '.c' + n), id + ': IDs in Dialogreihenfolge');
    ok(ex.every(q => q.t === 'mc' && q.role === true && q.ans === q.o[q.a] && q.ansN && q.ctx.length >= 1 && q.ctx.length <= 3), id + ': Form der Aufgaben');
    ex.forEach(q => { q.o.forEach((_, j) => { if (j !== q.a) ok(String(q.why[j] || '').length > 0, q.id + ': why für ' + j); }); eq(DT.check.lint(q).errors, [], q.id + ': check.lint'); });
    eq(ex[1].ctx.map(x => x.s + '|' + x.me), [d.lines[0].s + '|false', d.role + '|true', d.lines[2].s + '|false'], id + ': Kontext c2 enthält die eigene Rollenzeile (richtige Antwort) und Gegenzeilen');
    eq(ex[2].ctx.length, 3, id + ': Kontext höchstens 3'); eq(ex[0].ctx.length, 1, id + ': c1 hat 1 Zeile Kontext');
    eq(CAT.dialogLines(d).filter(l => l.me).map(l => l.g), [d.roleG, d.roleG, d.roleG], id + ': roleG gilt für eigene Zeilen');
    const K = { dialogs: {}, content: {}, texts: {} }; K.dialogs[id] = d; CAT.register(K); CAT.register(K);
    eq(K.content[id].exercises.map(q => q.id), ex.map(q => q.id).concat(d.questions.map(q => q.id)), id + ': Wahlzeilen zuerst, dann Verständnisfragen (idempotent)');
  });
  eq(CAT.roleExercises({ lines: [{ s: 'A', g: 'f', t: 'x', n: 'y' }] }), [], 'ohne Wahlzeilen: keine Aufgaben');
  const D = () => copy(stubK.dialogs['de-a2-d91']), bad = (mut, frag) => { const d = D(); mut(d); const r = CAT.checkRoleplay('de-a2-d91', d); ok(r.errors.some(m => m[0].indexOf(frag) >= 0), 'Roleplay: ' + frag + ' → ' + JSON.stringify(r.errors)); };
  bad(d => { delete d.lines[1].why[1]; }, 'why fehlt');
  bad(d => { d.lines[1].id = 'de-a2-d92.c1'; }, 'ID muss');
  bad(d => { d.lines[3].id = d.lines[1].id; }, 'ID doppelt');
  bad(d => { d.lines[1].t = 'x'; }, 'kein t');
  bad(d => { d.lines[1].a = 5; }, 'a ist kein gültiger Index');
  bad(d => { d.lines[1].o = ['nur eine']; }, '2–4');
  bad(d => { delete d.lines[1].e; }, 'e (Erklärung)');
  bad(d => { delete d.lines[1].n; }, 'n (Übersetzung');
  bad(d => { delete d.role; }, 'role');
  bad(d => { d.roleG = 'x'; }, 'roleG');
  bad(d => { delete d.lines[0].g; }, 'braucht g');
  bad(d => { d.lines.splice(5, 1); }, '3–4 Wahlzeilen');
  const w = D(); w.lines.unshift(w.lines.splice(1, 1)[0]); ok(CAT.checkRoleplay('de-a2-d91', w).warnings.length >= 1, 'Wahlzeile ohne vorherige Zeile: Hinweis');
});
test('check: lint – Negativfälle cloze', () => {
  const bad = (mut, frag) => { const x = copy(CL); mut(x); const r = DT.check.lint(x); ok(r.errors.some(m => m[0].indexOf(frag) >= 0), 'cloze: ' + frag + ' → ' + JSON.stringify(r.errors)); };
  bad(x => { x.text = 'Nur {1} eine Lücke.'; delete x.gaps[2]; delete x.gaps[3]; }, 'mindestens 2');
  bad(x => { x.text = '{1} {2} {3} {4} {5} {6}'; x.gaps = { 1: { a: ['a'] }, 2: { a: ['a'] }, 3: { a: ['a'] }, 4: { a: ['a'] }, 5: { a: ['a'] }, 6: { a: ['a'] } }; }, 'mehr als 5');
  bad(x => { x.text = 'A {1} B {3}'; }, 'fortlaufend');
  bad(x => { x.text = 'A {1} B {1} C {2} {3}'; }, 'fortlaufend');
  bad(x => { delete x.gaps[3]; }, 'gaps-Schlüssel');
  bad(x => { x.gaps[2].a = []; }, 'a (nicht leere');
  bad(x => { delete x.gaps; }, 'ohne gaps');
  bad(x => { x.gaps[1].o = ['bin']; }, '2–4');
  bad(x => { x.gaps[1].o = ['a', 'b', 'c', 'd', 'e']; }, '2–4');
  bad(x => { x.gaps[1].o = ['habe', 'war']; }, 'Lösung steht nicht in o');
  bad(x => { delete x.gaps[1].wrong.war; }, 'wrong fehlt für falsche Option');
  bad(x => { x.gaps[2].wrong.gewesen = 'x'; }, 'wrong-Schlüssel ist eine richtige Lösung');
  bad(x => { x.gaps[1].o = ['bin', 'habe', 'habe', 'war']; }, 'doppelte Optionen');
  bad(x => { x.gaps[2].a = ['gewesen', 'gewesen']; }, 'doppelte Lösungen');
  const w = copy(CL); delete w.gaps[2].wrong; ok(DT.check.lint(w).errors.length === 0 && DT.check.lint(w).warnings.length === 1, 'freie Lücke ohne wrong nur Hinweis');
});
test('check: lint – Negativfälle sort', () => {
  const bad = (mut, frag) => { const x = copy(SO); mut(x); const r = DT.check.lint(x); ok(r.errors.some(m => m[0].indexOf(frag) >= 0), 'sort: ' + frag + ' → ' + JSON.stringify(r.errors)); };
  bad(x => { x.cats = ['haben']; }, 'cats braucht');
  bad(x => { x.cats = ['a', 'b', 'c', 'd']; }, 'cats braucht');
  bad(x => { x.cats = ['haben', 'haben']; }, 'nicht eindeutig');
  bad(x => { x.items.pop(); }, '4–8');
  bad(x => { x.items = x.items.concat([['a', 0], ['b', 0], ['c', 0], ['d', 0], ['e', 0]]); }, '4–8');
  bad(x => { x.items[0][1] = 2; }, 'Index gültig');
  bad(x => { x.items[0][1] = 0.5; }, 'Index gültig');
  bad(x => { x.items[1][0] = 'fahren'; }, 'Elemente nicht eindeutig');
  bad(x => { x.items.forEach(i => { i[1] = 0; }); }, 'Kategorie ohne Element');
  bad(x => { delete x.why.kaufen; }, 'why fehlt');
  bad(x => { x.why.kaufen = ' '; }, 'why fehlt');
  bad(x => { delete x.why; }, 'why fehlt');
  const w = copy(SO); w.why.extra = 'x'; eq(DT.check.lint(w).warnings.length, 1, 'why ohne Element ⇒ Hinweis');
});
test('texts: cloze ist als Fragetyp in Lese- und Hörtexten erlaubt, sort nicht', () => {
  ok(DT.texts.QTYPES.includes('cloze') && DT.texts.LISTEN_QTYPES.includes('cloze'), 'cloze erlaubt');
  ok(!DT.texts.QTYPES.includes('sort') && !DT.texts.LISTEN_QTYPES.includes('sort'), 'sort in Texten nicht vorgesehen');
});
test('check: evaluate ohne Textfunktion liefert den Schlüssel als Hinweis', () => {
  eq(DT.check.evaluate({ t: 'gap', a: ['Haus'], cs: true }, { input: 'haus' }, 'de').hint, 'caseHint', 'caseHint');
});
test('check: levRatio', () => {
  [["abc","abc",1],["","a",0],["kitten","sitting",0.5714285714285714],["ışık","isik",0.25],["a","b",0]].forEach(([a, b, r]) => eq(DT.check.levRatio(a, b), r, 'levRatio ' + a + '/' + b));
});
test('check: norm (türkisches İ/I, Satzzeichen, cs)', () => {
  [[["  Ça, Ğ! ","tr",false],"ça ğ"],[["İSTANBUL","tr",false],"istanbul"],[["I","tr",false],"ı"],[["I","de",false],"i"],[["Haus.","de",true],"Haus"],[["„Hi“","de",false],"hi"]].forEach(([a, r]) => eq(DT.check.norm(a[0], a[1], a[2]), r, 'norm ' + a[0]));
});
test('check: fold (ç ğ ı ö ş ü ä ß)', () => {
  [["ÇŞĞÜÖİI","csguoii"],["Straße","strasse"],["Ä̇","a"],["a'b","ab"]].forEach(([a, r]) => eq(DT.check.fold(a), r, 'fold ' + a));
});
test('check: isCountable – speak zählt nicht', () => {
  eq([DT.check.isCountable({ t: 'speak' }), DT.check.isCountable({ t: 'gap' }), !!DT.check.isCountable(null)], [false, true, false], 'isCountable');
});
test('catalog: register + topicsOf (Pseudo-Themen, Index, Idempotenz)', () => {
  const K = {
    courses: { de: { levels: { A1: [['de-a1-01', 'Titel TR', 'Titel DE']] } } },
    content: { 'de-a1-01': { exercises: [{ id: 'de-a1-01.1', t: 'mc' }, { t: 'mc' }] } },
    dialogs: { 'de-a1-d02': { level: 'A1', title: 'T', sub: 'S', questions: [{ id: 'de-a1-d02.q1', t: 'mc' }] }, 'de-a1-d01': { level: 'A1', title: 'T1', sub: 'S1' }, 'tr-a1-d01': { level: 'A1' } },
    texts: { 'de-a1-r01': { level: 'A1', title: 'RT', sub: 'RS', questions: [{ id: 'de-a1-r01.q1', t: 'mc' }] } }
  };
  const logs = [];
  const idx = DT.catalog.register(K, { warn: (...a) => logs.push(['w', ...a]), error: (...a) => logs.push(['e', ...a]) });
  eq(Object.keys(idx).sort(), ['de-a1-01#1', 'de-a1-01.1', 'de-a1-d02.q1', 'de-a1-r01.q1'].sort(), 'Index-IDs');
  eq(idx['de-a1-d02.q1'], { topicId: 'de-a1-d02', idx: 0, ex: K.dialogs['de-a1-d02'].questions[0] }, 'Dialogfrage im Index');
  eq(K.content['de-a1-r01'].kind, 'read', 'Lesetext als Pseudo-Thema');
  eq(logs.length, 1, 'eine Warnung für Aufgabe ohne ID');
  eq(K.content['de-a1-01'].exercises[1].id, 'de-a1-01#1', 'Ersatz-ID vergeben');
  const idx2 = DT.catalog.register(K, {});
  eq(Object.keys(idx2).sort(), Object.keys(idx).sort(), 'erneutes register ist idempotent');
  const list = DT.catalog.topicsOf(K, 'de');
  eq(list.map(x => [x.id, x.num, x.kind || '', x.avail, x.title, x.sub]), [
    ['de-a1-01', 1, '', true, 'Titel DE', 'Titel TR'],
    ['de-a1-d01', 'D1', 'dialog', true, 'S1', 'T1'],
    ['de-a1-d02', 'D2', 'dialog', true, 'S', 'T'],
    ['de-a1-r01', 'T1', 'text', true, 'RS', 'RT']
  ], 'topicsOf de (Dialoge/Texte sortiert, Titel je Kurs)');
});

/* ================= voices (ADR-14) + Hörtexte (ADR-12.3, Schritt 4) ================= */
test('voices.assign: Zuordnung Sprecher → Stimm-Platz', () => {
  const V = DT.voices; ok(!!V, 'DT.voices vorhanden');
  const L = (...a) => a.map(([s, g]) => ({ s, g, t: 'x' }));
  const de = ['female', 'male'], deFb = ['female', 'male'], tr = ['male', 'male2'], trFb = ['male2', 'male'];
  const slots = r => Object.fromEntries(Object.entries(r.map).map(([k, v]) => [k, v.slot + (v.fb ? '*' : '')]));
  eq(slots(V.assign(L(['Anna', 'f'], ['Ben', 'm'], ['Anna', 'f']), de, deFb, '')), { Anna: 'female', Ben: 'male' }, 'DE 1♀/1♂');
  eq(slots(V.assign(L(['A', 'f'], ['B', 'f']), de, deFb, '')), { A: 'female', B: 'female' }, 'DE zwei Frauen = gleiche Stimme');
  eq(V.assign(L(['B', 'm'], ['A', 'f']), de, deFb, '').speakers, ['B', 'A'], 'Reihenfolge des ersten Auftretens');
  eq(slots(V.assign(L(['Jonas', 'm'], ['Elif', 'f']), tr, trFb, '')), { Jonas: 'male', Elif: 'male2*' }, 'TR: Elif (♀) bekommt fettah, markiert fb');
  eq(slots(V.assign(L(['Elif', 'f'], ['Jonas', 'm']), tr, trFb, '')), { Elif: 'male2*', Jonas: 'male' }, 'TR: unabhängig von der Reihenfolge');
  eq(slots(V.assign(L(['A', 'm'], ['B', 'm']), tr, trFb, '')), { A: 'male', B: 'male2' }, 'TR 2♂ → zwei Stimmen');
  eq(slots(V.assign(L(['A', 'm'], ['B', 'm'], ['C', 'm']), tr, trFb, '')), { A: 'male', B: 'male2', C: 'male' }, 'TR 3 Sprecher: reihum');
  eq(slots(V.assign(L(['A', 'f'], ['B', 'f'], ['C', 'm']), tr, trFb, '')), { A: 'male2*', B: 'male2*', C: 'male' }, 'TR 2♀: beide Fallback (unbenutzt, dann erster)');
  eq(slots(V.assign(L(['A', 'm']), tr, trFb, '')), { A: 'male' }, 'TR 1 Sprecher');
  eq(slots(V.assign(L(['Ich', ''], ['Er', 'm']), de, deFb, 'f')), { Ich: 'female', Er: 'male' }, 'roleG gilt für Zeilen ohne g');
  const n = V.assign(L(['Ich', ''], ['Er', 'm']), de, deFb, '');
  eq(slots(n), { Ich: 'female', Er: 'male' }, 'neutral: erster unbenutzter Platz (Fallback-Reihenfolge), nicht als fb markiert');
  eq(V.assign(L(['A', 'm']), [], [], '').map.A.slot, null, 'ohne Plätze: slot null (Gerätestimme)');
  eq(slots(V.assign(L(['A', 'f']), ['male'], ['male', 'zzz'], '')), { A: 'male*' }, 'unbekannte Fallback-Plätze werden ignoriert');
  const a1 = canon(V.assign(L(['A', 'f'], ['B', 'm']), tr, trFb, '')), a2 = canon(V.assign(L(['A', 'f'], ['B', 'm']), tr, trFb, ''));
  ok(a1 === a2, 'deterministisch');
  eq(V.slotsOf({ male: 'k', female: 'j', male2: 'x', other: 'y' }), ['female', 'male', 'male2'], 'slotsOf: Reihenfolge female, male, Extra');
  eq(V.slotsOf({ female: [], male: ['a'] }), ['male'], 'slotsOf: leere Listen zählen nicht (tts-voices.json)');
  eq(V.slotsOf(undefined), [], 'slotsOf ohne Daten');
});
test('texts: Hörtexte prüfen und registrieren', () => {
  const tx = DT.texts, words = n => Array.from({ length: n }, (_, i) => 'wort' + i).join(' ');
  const q = (id, i) => ({ id: id + '.q' + i, t: 'mc', q: '?', o: ['a', 'b'], a: 0, why: { 1: 'x' }, e: 'y' });
  const mk = (id, lines) => ({ level: 'A2', kind: 'listen', genre: 'durchsage', title: 'T', sub: 'S', plays: 2, lines, questions: [q(id, 1), q(id, 2), q(id, 3)] });
  const ln = (s, g, n) => ({ s, g, t: words(n), n: 'Übersetzung' });
  eq(tx.check('de-a2-h01', mk('de-a2-h01', [ln('Anna', 'f', 20), ln('Ben', 'm', 20)])), { errors: [], warnings: [] }, 'gültiger Hörtext');
  ok(tx.check('de-a2-h01', Object.assign(mk('de-a2-h01', [ln('A', 'f', 40)]), { kind: 'read' })).errors.some(e => /kind/.test(e)), 'kind passt nicht zu h');
  ok(tx.check('de-a2-h01', mk('de-a2-h01', [ln('A', 'x', 40)])).errors.some(e => /\.g/.test(e)), 'g muss f/m sein');
  ok(tx.check('de-a2-h01', mk('de-a2-h01', [{ s: 'A', g: 'f', t: 'x' }])).errors.some(e => /braucht/.test(e)), 'Zeile ohne n');
  ok(tx.check('de-a2-h01', Object.assign(mk('de-a2-h01', [ln('A', 'f', 40)]), { genre: 'artikel' })).errors.some(e => /genre/.test(e)), 'Lese-Genre im Hörtext');
  ok(tx.check('de-a2-h01', Object.assign(mk('de-a2-h01', [ln('A', 'f', 40)]), { body: ['x'] })).errors.some(e => /lines/.test(e)), 'body im Hörtext');
  ok(tx.check('de-a2-r01', Object.assign(mk('de-a2-r01', [ln('A', 'f', 40)]), { kind: 'read', genre: 'hinweis' })).errors.length > 0, 'lines im Lesetext');
  ok(tx.check('de-a2-h01', mk('de-a2-h02', [ln('A', 'f', 40)])).errors.some(e => /\.q/.test(e)), 'Fragen-ID-Präfix');
  ok(tx.check('de-a2-h01', Object.assign(mk('de-a2-h01', [ln('A', 'f', 40)]), { plays: 9 })).errors.some(e => /plays/.test(e)), 'plays 1–5');
  ok(tx.check('de-a2-h01', mk('de-a2-h01', [ln('A', 'f', 5)])).warnings.some(w => /Länge/.test(w)), 'zu kurz → Hinweis');
  eq(tx.check('de-a2-h01', mk('de-a2-h01', [ln('A', 'f', 130)])).warnings.length, 1, 'zu lang → Hinweis (30–120)');
  eq(tx.check('tr-a2-h01', mk('tr-a2-h01', [ln('A', 'f', 20), ln('B', 'm', 20), ln('C', 'm', 20)])).warnings.length, 1, 'TR ab 3 Sprechern → Hinweis');
  eq(tx.check('de-a2-h01', mk('de-a2-h01', [ln('A', 'f', 20), ln('B', 'm', 20), ln('C', 'm', 20)])).warnings.length, 0, 'DE 3 Sprecher ohne Hinweis');
  eq(tx.speakers({ lines: [{ s: 'B' }, { s: 'A' }, { s: 'B' }] }), ['B', 'A'], 'speakers');
  // Registrierung + Katalog
  const K = { courses: { de: { levels: { A2: [] } } }, content: {}, dialogs: {}, texts: { 'de-a2-h01': mk('de-a2-h01', [ln('A', 'f', 40)]), 'de-a2-r01': Object.assign(mk('de-a2-r01', [ln('A', 'f', 40)]), { kind: 'read' }) } };
  K.texts['de-a2-h01'].id = 'de-a2-h01';
  const idx = DT.catalog.register(K, {});
  eq(K.content['de-a2-h01'].kind, 'listen', 'Hörtext als Pseudo-Thema kind listen');
  eq(idx['de-a2-h01.q2'].topicId, 'de-a2-h01', 'Hörtext-Frage im Index (Lücken/Review/Tagesmix wie Text-Fragen)');
  eq(DT.catalog.topicsOf(K, 'de').filter(x => x.kind === 'text').map(x => x.num), ['H1', 'T1'], 'Nummern H1/T1');
  ok(DT.catalog.isHeavy(K, 'de-a2-h01') && DT.catalog.isHeavy(K, 'de-a2-r01'), 'isHeavy: Lese- und Hörtext = schwer (nicht im Tagesmix)');
  ok(!DT.catalog.isHeavy({ content: { 'de-a1-01': { exercises: [] }, 'de-a1-d01': { kind: 'dialog' } } }, 'de-a1-d01') && !DT.catalog.isHeavy(K, 'x'), 'isHeavy: Dialog/Thema/unbekannt nicht schwer');
  const KK = ctx.window.KOPRU; if (KK) { KK.addText('tr-a2-h99', { level: 'A2' }); eq(KK.texts['tr-a2-h99'].kind, 'listen', 'addText: -h-ID ⇒ kind listen'); delete KK.texts['tr-a2-h99']; }
});

test('Wortschatz je Niveau (ADR-11.3)', () => {
  const cur = fs.readFileSync(path.join(root, 'js', 'curriculum.js'), 'utf8'), c2 = { window: {} }; vm.createContext(c2); vm.runInContext(cur, c2);
  const KK = c2.window.KOPRU, vc = vm.runInContext('(function(){return window})()', c2).DT;
  const ids = KK.wordfields.map(f => f[0]);
  eq(ids.length, new Set(ids).size, 'wordfields: IDs eindeutig');
  ['travel', 'media', 'feel', 'service'].forEach(f => ok(ids.includes(f), 'wordfield ' + f));
  ok(KK.wordfields.every(f => f.length === 3 && f[1] && f[2]), 'wordfields: [id, de, tr] vollständig');
  const V = DT.vocab;
  KK.addVocab('de-a1', [{ id: 'de-a1.w001', t: 'hallo', n: 'x', topic: 'greet' }]);
  KK.addVocab('de-a2', [{ id: 'de-a2.w001', t: 'verreisen', pos: 'v', n: 'y', topic: 'travel', pf: 'ist verreist' }]);
  eq(V.wordsOf(KK, 'de', 'A1').map(w => w.id), ['de-a1.w001'], 'wordsOf A1 enthält keine A2-Wörter');
  eq(V.wordsOf(KK, 'de', 'A2').map(w => w.id), ['de-a2.w001'], 'wordsOf A2 nur A2');
  eq(V.wordsOf(KK, 'de', 'A2', 'greet').length, 0, 'leeres Wortfeld ⇒ []');
  eq(V.wordsOf(KK, 'de').map(w => w.id), ['de-a1.w001', 'de-a2.w001'], 'ohne Niveau: aufsteigend');
  eq(V.index(KK)['de-a2.w001'].level, 'A2', 'index: Niveau A2');
});

/* ================= respond (ADR-12.8), Fertigkeiten, Zertifikat A2, A2-Abzeichen ================= */
test('respond: ungewertet, Bewertung, Format-Prüfung', () => {
  const C = DT.check, R = { id: 'de-a2-03.99', t: 'respond', say: 'Was hast du gemacht?', q: 'Antworte.', models: ['Ich habe gelesen.'], modelsN: ['Okudum.'], chunks: ['Ich habe …'], e: 'x' };
  ok(!C.isCountable(R) && !C.isCountable({ t: 'speak' }) && !C.isCountable({ t: 'write' }), 'respond/speak/write zählen nicht');
  ok(C.isCountable({ t: 'mc' }) && C.isCountable({ t: 'cloze' }) && C.isCountable({ t: 'listen' }), 'gewertete Typen zählen');
  ok(C.isCountable(null) === false, 'isCountable(null) = false');
  const r = C.evaluate(R, { heard: 'ich habe gelesen' }, 'de');
  ok(r.ok === true && r.respond === true && r.given === 'ich habe gelesen' && r.correct === 'Ich habe gelesen.', 'evaluate: immer „geübt“, erkannter Text nur angezeigt');
  eq(C.evaluate(R, {}, 'de').given, '', 'evaluate ohne Mikrofon: given leer');
  eq(C.lint(R).errors, [], 'gültige respond-Aufgabe: keine Fehler');
  eq(C.lint(R).warnings, [], 'gültige respond-Aufgabe: keine Hinweise');
  const bad = (patch) => C.lint(Object.assign({}, R, patch)).errors.map(x => x[0]);
  ok(bad({ q: '', say: undefined }).some(m => /Frage fehlt/.test(m)), 'ohne q und say → Fehler');
  ok(bad({ models: [] }).some(m => /models/.test(m)) && bad({ models: undefined, modelsN: undefined }).some(m => /models/.test(m)), 'ohne models → Fehler');
  ok(bad({ models: [''] }).some(m => /models/.test(m)), 'leere Musterantwort → Fehler');
  ok(bad({ modelsN: ['a', 'b'] }).some(m => /modelsN/.test(m)), 'modelsN-Länge ≠ models → Fehler');
  ok(bad({ chunks: 'x' }).some(m => /chunks/.test(m)), 'chunks keine Liste → Fehler');
  ok(bad({ e: '' }).some(m => /\be\b/.test(m)), 'ohne e → Fehler');
  ok(C.lint(Object.assign({}, R, { say: undefined })).warnings.some(m => /say/.test(m[0])), 'ohne say → Hinweis (nur q)');
  ok(C.lint(Object.assign({}, R, { say: 'Um 8 Uhr?' })).warnings.some(m => /Ziffern/.test(m[0])), 'Ziffern in say → Hinweis');
  eq(bad({ modelsN: undefined, chunks: undefined }), [], 'modelsN und chunks optional');
});

function skillFixture() {
  const K = { courses: { de: { levels: { A1: [['de-a1-01', 'Thema', 'Konu']], A2: [['de-a2-01', 'Perfekt', 'Perfekt']] } } }, content: {}, dialogs: {}, texts: {}, writes: {} };
  K.content['de-a1-01'] = { exercises: [{ id: 'de-a1-01.1', t: 'mc' }] };
  K.content['de-a2-01'] = { exercises: [
    { id: 'g1', t: 'mc' }, { id: 'g2', t: 'gap' }, { id: 'g3', t: 'listen' }, { id: 'g4', t: 'speak' }, { id: 'g5', t: 'respond' }] };
  K.dialogs['de-a2-d01'] = { level: 'A2', title: 'D', sub: 'D', lines: [], questions: [{ id: 'd1', t: 'mc' }, { id: 'd2', t: 'mc' }] };
  K.texts['de-a2-r01'] = { level: 'A2', kind: 'read', title: 'R', sub: 'R', questions: [{ id: 'r1', t: 'mc' }, { id: 'r2', t: 'gap' }] };
  K.texts['de-a2-h01'] = { level: 'A2', kind: 'listen', title: 'H', sub: 'H', questions: [{ id: 'h1', t: 'mc' }] };
  K.writes['de-a2-s01'] = { id: 'de-a2-s01', key: 'de-a2' }; K.writes['de-a2-s02'] = { id: 'de-a2-s02', key: 'de-a2' };
  DT.catalog.register(K, {});
  return K;
}
test('catalog: skillOf (Fertigkeiten je Niveau, nur berechnet)', () => {
  const K = skillFixture(), CAT = DT.catalog;
  const pr = { g1: { s: 'c' }, g2: { s: 'w' }, g3: { s: 'c' }, g4: { s: 'c' }, d1: { s: 'c' }, r1: { s: 'w' }, h1: { s: 'c' }, 'de-a2-s01': { s: 'c' }, 'de-a1-01.1': { s: 'c' } };
  const before = JSON.stringify(pr);
  const sk = CAT.skillOf(K, 'de', 'A2', pr);
  eq(sk.grammar, { n: 2, c: 1, w: 1 }, 'Grammatik: mc+gap im Thema');
  eq(sk.listen, { n: 2, c: 2, w: 0 }, 'Hören: listen im Thema + Hörtext-Frage');
  eq(sk.read, { n: 2, c: 0, w: 1 }, 'Lesen: Lesetext-Fragen');
  eq(sk.dialog, { n: 2, c: 1, w: 0 }, 'Dialoge');
  eq(sk.speak, { n: 2, done: 1 }, 'Sprechen: speak + respond, geübt');
  eq(sk.write, { n: 2, done: 1 }, 'Schreiben: Standard = prog richtig');
  eq(CAT.skillOf(K, 'de', 'A2', pr, { writeDone: () => false }).write.done, 0, 'writeDone von außen (Status mit Text)');
  eq(CAT.skillOf(K, 'de', 'A2', pr, { skip: { 'de-a2-01': true } }).grammar.n, 0, 'übersprungenes Thema fällt heraus');
  eq(CAT.skillOf(K, 'de', 'A1', pr).grammar, { n: 1, c: 1, w: 0 }, 'A1 getrennt von A2');
  eq(JSON.stringify(pr), before, 'prog unverändert (nichts gespeichert)');
  eq(CAT.skillOf(K, 'de', 'B1', {}).grammar.n, 0, 'leeres Niveau → 0');
});
test('catalog: certCheck A1 (Regression) und A2 (ADR-11.6)', () => {
  const CAT = DT.catalog, A1 = CAT.CERT_RULES.A1, A2 = CAT.CERT_RULES.A2;
  eq(A1, { ex: 0.8, words: 0.7 }, 'A1-Regel unverändert');
  ok(CAT.certCheck(A1, { c: 8, n: 10, wk: 7, wn: 10 }).ok, 'A1: 80 %/70 % genau auf der Grenze → ok');
  ok(!CAT.certCheck(A1, { c: 7, n: 10, wk: 10, wn: 10 }).ok, 'A1: 70 % Aufgaben → nein');
  ok(!CAT.certCheck(A1, { c: 0, n: 0, wk: 0, wn: 0 }).ok, 'A1: keine Aufgaben → nein');
  ok(CAT.certCheck(A1, { c: 9, n: 10, wk: 0, wn: 0 }).ok, 'A1: ohne Wörter zählt nur Aufgaben (wie bisher)');
  const sk = (g, r, l, d, wd, wn) => ({ grammar: { n: 10, c: g }, read: { n: 10, c: r }, listen: { n: 10, c: l }, dialog: { n: 10, c: d }, write: { n: wn, done: wd }, speak: { n: 5, done: 0 } });
  const base = { c: 85, n: 100, wk: 70, wn: 100 };
  ok(CAT.certCheck(A2, Object.assign({ skills: sk(6, 6, 6, 6, 6, 10) }, base)).ok, 'A2: alle Bereiche 60 %, 6/10 Schreiben, Sprechen egal → ok');
  const low = CAT.certCheck(A2, Object.assign({ skills: sk(10, 10, 5, 10, 10, 10) }, base));
  ok(!low.ok && !low.skills.listen.ok && low.skills.grammar.ok, 'A2: Hören 50 % → nein (nicht nur über Grammatik)');
  eq(low.skills.listen, { p: 50, n: 10, need: 60, ok: false }, 'A2: Bereichsdetails');
  ok(!CAT.certCheck(A2, Object.assign({ skills: sk(10, 10, 10, 10, 5, 10) }, base)).ok, 'A2: 5 Schreibaufgaben → nein');
  eq(CAT.certCheck(A2, Object.assign({ skills: sk(10, 10, 10, 10, 3, 3) }, base)).writes, { done: 3, n: 3, need: 3, ok: true }, 'A2: weniger als 6 Schreibaufgaben vorhanden → alle nötig');
  ok(!CAT.certCheck(A2, Object.assign({}, base, { c: 79, skills: sk(10, 10, 10, 10, 10, 10) })).ok, 'A2: 79 % gesamt → nein');
  const noRead = sk(10, 0, 10, 10, 10, 10); noRead.read = { n: 0, c: 0 };
  ok(CAT.certCheck(A2, Object.assign({ skills: noRead }, base)).ok, 'A2: Bereich ohne Aufgaben entfällt');
  ok(!CAT.certCheck(A2, Object.assign({}, base)).ok, 'A2: ohne Fertigkeitszahlen keine Freigabe (Schreiben fehlt)');
});
test('badges: A2-Abzeichen (neue IDs, alte unverändert, aus Fortschritt abgeleitet)', () => {
  const B = DT.badges, ids = B.LIST.map(b => b.id);
  eq(ids.slice(0, 14), ['first-step', 'first-topic', 'topics-5', 'fixer-10', 'dialog-1', 'dialogs-all', 'words-50', 'words-150', 'words-a1', 'streak-3', 'streak-7', 'streak-30', 'goal-10', 'cert-A1'], 'bestehende IDs unverändert und in Reihenfolge');
  eq(ids.length, new Set(ids).size, 'IDs eindeutig');
  ['a2-topic-1', 'a2-write-1', 'a2-listen-10', 'a2-speak-5', 'words-a2', 'cert-A2'].forEach(id => ok(ids.includes(id), 'neu: ' + id));
  ok(B.LIST.every(b => b.title.length === 2 && b.hint.length === 2 && b.title.every(Boolean) && b.hint.every(Boolean)), 'Titel/Hinweis DE+TR');
  const p = { badges: {} };
  eq(B.award(p, 'de', {}, 1).map(b => b.id), [], 'leerer Kontext (ohne a2) → nichts, keine Ausnahme');
  const ctx = { a2: { topicsDone: 1, writesDone: 1, listenOk: 10, speakDone: 5, wordsKnown: 600, wordsTotal: 600, complete: false }, cert: { A1: false, A2: false } };
  eq(B.award(p, 'de', ctx, 2).map(b => b.id), ['a2-topic-1', 'a2-write-1', 'a2-listen-10', 'a2-speak-5'], 'A2-Abzeichen; Wörter erst bei vollständigem A2');
  ctx.a2.complete = true; ctx.cert.A2 = true;
  eq(B.award(p, 'de', ctx, 3).map(b => b.id), ['words-a2', 'cert-A2'], 'nach Freigabe: alle Wörter + Zertifikat');
  eq(p.badges['de:a2-topic-1'], 2, 'Zeitstempel bleibt (nie entzogen/überschrieben)');
  eq(B.award(p, 'tr', { a2: { listenOk: 9 } }, 4).map(b => b.id), [], 'pro Kurs getrennt, Grenze 10');
});

/* ---------- ADR-15: Nachladen je Kurs+Niveau (js/core/loader.js) ---------- */
const LD = DT.loader;
const MFX = (() => { const c = { window: { KOPRU: { setManifest(m) { this.manifest = m; } } } }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(root, 'js', 'content', 'manifest.js'), 'utf8'), c); return c.window.KOPRU.manifest; })();
test('loader: levelKeyOf für alle ID-Formen', () => {
  eq(['de-a2-03.5', 'de-a2.w001', 'de-a2-r01.q1', 'de-a1-d01', 'de-a2-s01', 'tr-b1-03', 'de-a2-d01.c1', 'de-a1-01#2', 'de-a2', 'x', '', null, 'de-a22-01', 'dea2-01'].map(LD.levelKeyOf),
    ['de-a2', 'de-a2', 'de-a2', 'de-a1', 'de-a2', 'tr-b1', 'de-a2', 'de-a1', 'de-a2', null, null, null, null, null], 'Präfix → Paket');
});
test('loader: usedLevels/neededLevels (Fixtures v3, v4-writes)', () => {
  const p3 = Object.values(copy(V3).profiles)[0];
  eq(LD.usedLevels(p3, 'de'), ['de-a1', 'de-a2'], 'v3: prog/srs/place → A1+A2 (de)');
  eq(LD.usedLevels(p3, 'tr'), ['tr-a1'], 'v3: je Kurs getrennt');
  eq(LD.usedLevels(copy(W4.cur), 'de'), ['de-a2'], 'v4-writes: eigene Texte zählen (writes)');
  eq(LD.usedLevels(copy(W4.inc), 'tr'), ['tr-a2'], 'v4-writes inc: tr-Schreibtext');
  eq(LD.usedLevels({ skip: { de: { 'de-a2-04': true } } }, 'de'), ['de-a2'], 'skip zählt');
  eq(LD.usedLevels(null, 'de'), [], 'kein Profil');
  const fresh = { course: 'de', prog: { de: {}, tr: {} } };
  eq(LD.neededLevels(fresh, 'de', { page: 'dashboard' }, MFX), ['de-a1'], 'neuer Nutzer: nur A1');
  eq(LD.neededLevels(fresh, 'tr', { page: 'topic', a: 'tr-a2-03' }, MFX), ['tr-a2'], 'Deep-Link: Niveau der Route (ohne A1)');
  eq(LD.neededLevels(fresh, 'de', { page: 'topic', a: 'tr-a2-03' }, MFX), ['de-a1'], 'Route des anderen Kurses lädt nichts');
  eq(LD.neededLevels(fresh, 'de', { page: 'placement' }, MFX), ['de-a1', 'de-a2'], 'Einstufung: A1+A2');
  eq(LD.neededLevels(fresh, 'de', { page: 'words', lv: 'A2' }, MFX), ['de-a2'], 'Wortschatz-Filter A2');
  eq(LD.neededLevels(fresh, 'de', { page: 'lessons', a: 'C2' }, MFX), ['de-a1'], 'Niveau ohne Inhalt wird übersprungen');
  eq(LD.neededLevels(fresh, 'de', { page: 'write', a: 'de-a2-s03' }, MFX), ['de-a2'], 'Schreibaufgabe');
  eq(LD.neededLevels(p3, 'de', { page: 'dashboard' }, MFX), ['de-a1', 'de-a2'], 'v3-Nutzer: A1+A2');
  const before = JSON.stringify(p3); LD.neededLevels(p3, 'de', {}, MFX); LD.usedLevels(p3, 'de');
  ok(JSON.stringify(p3) === before, 'Profil bleibt unverändert');
});
// Volle Inhalte in eigener VM (wie der Validator): Manifest == Inhalt; ungeladen (lazy) == geladen ohne Fortschritt
function contentCtx(only) {
  const c = { window: {}, console }; vm.createContext(c);
  const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), c, { filename: f });
  run('js/curriculum.js'); run('js/content/manifest.js');
  const M = c.window.KOPRU.manifest;
  Object.keys(M).sort().filter(k => !only || only.indexOf(k) >= 0).forEach(k => M[k].files.forEach(f => run('js/content/' + f)));
  ['check.js', 'catalog.js', 'vocab.js'].forEach(f => run('js/core/' + f));
  c.window.DT.catalog.register(c.window.KOPRU);
  return c.window;
}
test('catalog.levelSummary: Manifest == geladener Inhalt (jedes Paket)', () => {
  const W = contentCtx(), Kc = W.KOPRU, C = W.DT.catalog;
  Object.keys(Kc.manifest).forEach(key => {
    const m = Object.assign({}, Kc.manifest[key]); delete m.files; delete m.bytes;
    eq(C.levelSummary(Kc, key), m, key + ': Summen aus Inhalt == Manifest');
  });
  ok(Object.keys(Kc.manifest).length >= 4, 'Manifest hat Pakete');
});
test('catalog: ungeladenes Niveau (lazy) zählt wie geladenes ohne Fortschritt', () => {
  const W = contentCtx(), Kc = W.KOPRU, C = W.DT.catalog, isC = W.DT.check.isCountable;
  ['de', 'tr'].forEach(cid => C.LEVELS.forEach(lv => {
    const key = C.levelKey(cid, lv); if (!Kc.manifest[key]) return;
    const full = C.topicsOf(Kc, cid).filter(x => x.level === lv);
    const skFull = C.skillOf(Kc, cid, lv, {}, {});
    Kc.loaded = {}; Object.keys(Kc.manifest).forEach(k => { if (k !== key) Kc.loaded[k] = true; });
    const lazy = C.topicsOf(Kc, cid).filter(x => x.level === lv);
    eq(lazy.map(x => [x.id, x.num, x.title, x.sub, x.kind || '']), full.map(x => [x.id, x.num, x.title, x.sub, x.kind || '']), key + ': gleiche Zeilen');
    eq(lazy.map(x => x.lazy ? x.n : 0), full.map(x => x.avail ? x.data.exercises.filter(isC).length : 0), key + ': n je Thema');
    ok(lazy.every(x => !x.avail && !x.data), key + ': lazy-Zeilen ohne Aufgaben (avail:false)');
    eq(C.skillOf(Kc, cid, lv, {}, {}), skFull, key + ': skillOf aus Manifest');
    eq(C.levelSummary(Kc, key).writes, Object.keys(Kc.writes).filter(id => id.indexOf(key + '-') === 0).sort(), key + ': Schreibaufgaben-IDs');
    delete Kc.loaded;
  }));
});
test('ADR-15 §3: nur de-a1 geladen – A2-Einträge nach Antwort, Tagesziel, Speichern, Export, Import byte-gleich', () => {
  const t = 1790000000000, db = { v: storage.SCHEMA, app: 'X', theme: 'system', active: 'u1', profiles: { u1: {
    id: 'u1', name: 'Test', course: 'de', created: t,
    prog: { de: { 'de-a1-02.1': { f: 'c', s: 'c', n: 1, t }, 'de-a2-03.5': { f: 'w', s: 'w', n: 2, w: 2, a: 'falsch', t }, 'de-a2-d01.c1': { f: 'c', s: 'c', n: 1, t } }, tr: {} },
    srs: { de: { 'de-a2.w010': { b: 2, d: T + 3, k: 'word', n: 3 }, 'de-a2-03.5': { b: 1, d: T + 1, k: 'ex', n: 1 } }, tr: {} },
    skip: { de: { 'de-a2-04': true }, tr: {} }, place: {}, badges: {}, daily: { goal: 10, log: {} },
    writes: { de: { 'de-a2-s01': { x: 'Liebe Anna, ich komme morgen.', t: t + 2, n: 1 } }, tr: {} } } } };
  const a2 = p => { const o = {}; ['prog', 'srs', 'writes', 'skip'].forEach(f => { const m = (p[f] || {}).de || {}; Object.keys(m).sort().forEach(k => { if (k.indexOf('de-a2') === 0) o[f + ':' + k] = JSON.stringify(m[k]); }); }); return o; };
  const p = db.profiles.u1, before = a2(p);
  ok(Object.keys(before).length === 6, 'Fixture hat 6 A2-Einträge');
  ok(JSON.stringify(LD.neededLevels(p, 'de', { page: 'dashboard' }, MFX)) === '["de-a1","de-a2"]', 'A2 gilt als benutzt (würde geladen)');
  srs.answer(p, 'de', 'de-a1-02.1', false, T, 'ex'); daily.tick(p, TODAY_KEY);   // Antwort + Tagesziel (nur A1)
  eq(a2(p), before, 'nach SRS-Antwort und Tagesziel');
  const ls = { data: {}, getItem(k) { return this.data[k] || null; }, setItem(k, v) { this.data[k] = String(v); }, removeItem(k) { delete this.data[k]; } };
  storage.save(ls, db, 'X');
  const saved = JSON.parse(ls.getItem('dt-data')).profiles.u1;
  eq(a2(saved), before, 'nach Speichern');
  const re = storage.migrate(JSON.parse(ls.getItem('dt-data')), T, TODAY_KEY).data.profiles.u1;
  eq(a2(re), before, 'nach erneutem Laden/Migration');
  const ex = storage.exportData(p, 'X', t + 9);
  eq(a2(ex.profile || ex), before, 'Export');
  const im = storage.importData(copy(p), JSON.stringify(ex), T, TODAY_KEY);
  ok(im.ok, 'Import ok'); eq(a2(im.profile), before, 'nach Import/Merge (gleicher Stand)');
});
const fakeMf = { 'de-a1': { files: ['de-a1.js', 'de-a1-vocab.js'] }, 'de-a2': { files: ['de-a2.js'] }, 'tr-a1': { files: ['tr-a1.js'] } };
function fakeLoader(opt) {
  const log = { inject: [], onLoad: [] }, pend = {};
  const L = LD.create(Object.assign({ manifest: () => fakeMf, version: 'V', timeout: 0,
    inject: src => { log.inject.push(src); const mode = (opt.mode || {})[src.split('?')[0].split('/').pop()];
      if (mode === 'fail') return Promise.reject(new Error('net'));
      if (mode === 'hang') return new Promise((res, rej) => { pend[src] = res; });
      return Promise.resolve(); },
    onLoad: k => log.onLoad.push(k) }, opt.extra || {}));
  return { L, log, pend };
}
atest('loader: ensure lädt jede Datei einmal, register nach jedem Paket', async () => {
  const { L, log } = fakeLoader({});
  const [a, b] = await Promise.all([L.ensure(['de-a1']), L.ensure(['de-a1', 'de-a2', 'xx-a9'])]);
  eq(log.inject, ['js/content/de-a1.js?v=V', 'js/content/de-a1-vocab.js?v=V', 'js/content/de-a2.js?v=V'], 'keine Datei doppelt (auch parallel), mit ?v=');
  eq(log.onLoad.slice().sort(), ['de-a1', 'de-a2'], 'onLoad je Paket genau einmal');
  eq(b.loaded, ['de-a1', 'de-a2'], 'unbekanntes Paket wird ignoriert');
  await L.ensure(['de-a1', 'de-a2']);
  eq(log.inject.length, 3, 'zweiter Aufruf lädt nichts');
  ok(L.isLoaded('de-a1') && !L.isLoaded('tr-a1'), 'isLoaded');
});
atest('loader: Fehler → reject, Retry lädt neu; Teilerfolg wird registriert', async () => {
  const mode = { 'de-a2.js': 'fail' }, { L, log } = fakeLoader({ mode });
  let err = null; try { await L.ensure(['de-a1', 'de-a2']); } catch (e) { err = e; }
  ok(err && err.failed && err.failed.join() === 'de-a2' && err.loaded.join() === 'de-a1', 'reject mit failed/loaded');
  eq(log.onLoad, ['de-a1'], 'A1 trotzdem registriert');
  eq(L.failed(), ['de-a2'], 'failed() nennt das Paket');
  delete mode['de-a2.js'];
  await L.ensure(['de-a2']);
  eq(log.inject.filter(s => s.indexOf('de-a2.js') >= 0).length, 2, 'Retry fügt die Datei neu ein');
  eq(log.onLoad, ['de-a1', 'de-a2'], 'danach registriert'); eq(L.failed(), [], 'kein Fehler mehr');
});
atest('loader: Zeitlimit – Retry fügt die hängende Datei NICHT erneut ein', async () => {
  const timers = [], { L, log, pend } = fakeLoader({ mode: { 'de-a2.js': 'hang' }, extra: { timeout: 15000, setTimeout: (fn) => { timers.push(fn); return 0; } } });
  const p = L.ensure(['de-a2']); await null; await null; await null;
  timers.forEach(fn => fn());
  let err = null; try { await p; } catch (e) { err = e; }
  ok(err && /timeout/.test(String(err.error && err.error.message)), 'Zeitlimit → reject');
  const p2 = L.ensure(['de-a2']); await null; await null;
  pend['js/content/de-a2.js?v=V']();
  await p2;
  eq(log.inject.filter(s => s.indexOf('de-a2.js') >= 0).length, 1, 'nur einmal eingefügt');
  eq(log.onLoad, ['de-a2'], 'einmal registriert');
});
atest('loader: markLoaded (fest eingebundene Dateien) wird nicht nachgeladen', async () => {
  const { L, log } = fakeLoader({});
  L.markLoaded('de-a1.js'); L.markLoaded('de-a1-vocab.js');
  await L.ensure(['de-a1']);
  eq(log.inject, [], 'nichts eingefügt'); eq(log.onLoad, [], 'kein erneutes Registrieren nötig');
});

/* ---------- A1-Aufrüstung Paket 0: Bestandsnutzer verlieren nichts, wenn A1 wächst (docs/a1-aufruesten.md §4) ----------
 * Echte Inhalte A1+A2 laden, Profile auf dem heutigen Stand bauen, dann tools/fixtures/a1-extended-test.js
 * (+300 Wörter, +4 Themen à 24 Aufgaben, ext:1) anwenden und vorher/nachher vergleichen. */
const A1X_SRC = fs.readFileSync(path.join(__dirname, 'fixtures', 'a1-extended-test.js'), 'utf8');
const LV_RE = /^[a-z]{2}-(a1|a2|b1|b2|c1|c2)(?=$|[-.#])/;
// „Vorher“-Zustand: echte Erweiterungswörter (ext:1) werden zurückgehalten und erst in a1Extend wieder eingefügt;
// ohne echte ext-Wörter simuliert die Fixture sie (nur Themen -91…-94 bleiben immer simuliert).
function a1World() {
  const W = contentCtx(['de-a1', 'de-a2', 'tr-a1', 'tr-a2']); W.__extWords = {};
  ['de', 'tr'].forEach(cid => { const k = cid + '-a1', v = W.KOPRU.vocab[k] || []; W.__extWords[k] = v.filter(w => w.ext); W.KOPRU.vocab[k] = v.filter(w => !w.ext); });
  return W;
}
function a1Extend(W) {
  Object.keys(W.__extWords || {}).forEach(k => { if (W.__extWords[k].length) W.KOPRU.addVocab(k, W.__extWords[k]); W.__extWords[k] = []; });
  vm.runInNewContext(A1X_SRC, { window: W });
}
// wie app.js focusRows()/focusOpts() – nur aus Inhalt + Profil berechnet
function a1Rows(W, cid, p) {
  const C = W.DT.catalog, isC = W.DT.check.isCountable, pr = (p.prog || {})[cid] || {}, sk = (p.skip || {})[cid] || {};
  return C.topicsOf(W.KOPRU, cid).filter(x => (x.avail || x.lazy) && !x.kind).map(x => {
    let n = 0, c = 0;
    if (x.avail) x.data.exercises.forEach(e => { if (!isC(e)) return; n++; if (pr[e.id] && pr[e.id].s === 'c') c++; }); else n = x.n || 0;
    return { id: x.id, level: x.level, n, c, skip: !!sk[x.id] };
  });
}
function a1Opts(W, cid, p) {
  const o = { cert: {}, answered: {} };
  W.DT.catalog.LEVELS.forEach(lv => { if (DT.badges.certAt(p, cid, lv)) o.cert[lv] = true; });
  Object.keys((p.prog || {})[cid] || {}).forEach(id => { const m = LV_RE.exec(id); if (m) o.answered[m[1].toUpperCase()] = true; });
  return o;
}
function oldFocus(rows) {   // Regel vor Paket 0 (Regressionsvergleich)
  for (const r of rows) if (r.c < r.n && !r.skip) return r.level;
  return rows.reduce((top, r) => (['A1', 'A2'].indexOf(r.level) > ['A1', 'A2'].indexOf(top) ? r.level : top), 'A1');
}
function a1Profile(W, cid, opt) {
  const C = W.DT.catalog, t0 = 1790000000000, p = { prog: { [cid]: {} }, srs: { [cid]: {} }, skip: { [cid]: {} }, badges: {} };
  const tps = C.topicsOf(W.KOPRU, cid).filter(x => x.avail && !x.kind);
  (opt.done || []).forEach(lv => C.topicsOf(W.KOPRU, cid).filter(x => x.avail).filter(x => x.level === lv).forEach(x => x.data.exercises.forEach(e => { if (W.DT.check.isCountable(e)) p.prog[cid][e.id] = { f: 'c', s: 'c', n: 1, t: t0 }; })));
  (opt.doneTopics || []).forEach(id => tps.filter(x => x.id === id).forEach(x => x.data.exercises.forEach(e => { if (W.DT.check.isCountable(e)) p.prog[cid][e.id] = { f: 'c', s: 'c', n: 1, t: t0 }; })));
  (opt.skipLv || []).forEach(lv => tps.filter(x => x.level === lv).forEach(x => { p.skip[cid][x.id] = true; }));
  W.DT.vocab.wordsOf(W.KOPRU, cid, 'A1').slice(0, opt.words || 0).forEach(w => { p.srs[cid][w.id] = [3, T + 5, T - 1, 3, 0]; });
  (opt.a2 || []).forEach(id => { p.prog[cid][id] = { f: 'c', s: 'c', n: 1, t: t0 }; });
  return p;
}
function a1Cert(W, cid, p) {   // wie app.js certStatus('A1') (ohne übersprungene Themen im Nenner)
  const C = W.DT.catalog, isC = W.DT.check.isCountable, pr = p.prog[cid], sk = p.skip[cid];
  let n = 0, c = 0;
  C.topicsOf(W.KOPRU, cid).forEach(x => { if (x.level !== 'A1' || !x.avail || sk[x.id]) return; x.data.exercises.forEach(e => { if (!isC(e)) return; n++; if (pr[e.id] && pr[e.id].s === 'c') c++; }); });
  const ws = W.DT.vocab.wordsOf(W.KOPRU, cid, 'A1').map(w => w.id), st = DT.srs.stats(p, cid, ws);
  const live = C.certCheck(C.CERT_RULES.A1, { c, n, wk: st.sicher, wn: ws.length }).ok, held = DT.badges.certAt(p, cid, 'A1');
  return { live, held, ok: live || !!held, c, n, wk: st.sicher, wn: ws.length };
}
test('A1-Aufrüstung: Fixture erweitert A1 auf ≈ 650 Wörter und 16 Themen (je Kurs)', () => {
  const W = a1World(), C = W.DT.catalog;
  const before = cid => [W.DT.vocab.wordsOf(W.KOPRU, cid, 'A1').length, C.topicsOf(W.KOPRU, cid).filter(x => x.level === 'A1' && !x.kind).length];
  const b = { de: before('de'), tr: before('tr') };
  a1Extend(W); a1Extend(W);   // zweimal: darf nur einmal wirken
  ['de', 'tr'].forEach(cid => {
    const a = before(cid);
    eq(a, [b[cid][0] + 300, b[cid][1] + 4], cid + ': +300 Wörter, +4 Themen (einmalig)');
    ok(a[0] >= 640 && a[0] <= 660 && a[1] === 16, cid + ': ≈ 650 Wörter / 16 Themen');
  });
  eq(C.CERT_RULES.A1, { ex: 0.8, words: 0.7 }, 'CERT_RULES.A1 unverändert (keine neuen Pflichten)');
});
test('A1-Aufrüstung: erworbenes Zertifikat bleibt gültig, Datum = Abzeichen', () => {
  ['de', 'tr'].forEach(cid => {
    const W = a1World(), at = 1791000000000;
    const p = a1Profile(W, cid, { done: ['A1'], words: 300 });
    const pre = a1Cert(W, cid, p);
    ok(pre.live && !pre.held, cid + ': heute live bestanden');
    const fresh = DT.badges.award(p, cid, { cert: { A1: pre.ok } }, at);
    ok(fresh.some(b => b.id === 'cert-A1') && p.badges[cid + ':cert-A1'] === at, cid + ': Abzeichen cert-A1 vergeben');
    a1Extend(W);
    const post = a1Cert(W, cid, p);
    ok(!post.live, cid + ': Live-Rechnung nach Erweiterung schlechter (' + post.c + '/' + post.n + ', ' + post.wk + '/' + post.wn + ')');
    ok(post.ok && post.held === at, cid + ': Zertifikat bleibt (held = Zeitstempel des Abzeichens)');
    const again = DT.badges.award(p, cid, { cert: { A1: post.ok } }, at + 999);
    ok(!again.some(b => b.id === 'cert-A1') && p.badges[cid + ':cert-A1'] === at, cid + ': kein neues Datum, Abzeichen unverändert');
    // ohne Abzeichen (z. B. vor dem Update nie das Dashboard geöffnet) zählt nur die Live-Rechnung
    const q = a1Profile(W, cid, { done: ['A1'], words: 300 });
    ok(!a1Cert(W, cid, q).ok, cid + ': ohne Abzeichen kein geschenktes Zertifikat');
  });
  const W = a1World();
  eq([DT.badges.certAt({ badges: { 'de:cert-A1': 5 } }, 'de', 'A1'), DT.badges.certAt({ badges: { 'de:cert-A1': 5 } }, 'tr', 'A1'),
    DT.badges.certAt({}, 'de', 'A1'), DT.badges.certAt(null, 'de', 'A1'), DT.badges.certAt({ badges: { 'de:cert-A2': true } }, 'de', 'A2')], [5, 0, 0, 0, 1], 'certAt: Kurs getrennt, fehlend = 0, true = 1');
});
test('A1-Aufrüstung: Fokus-Niveau – niemand wird nach A1 zurückgeworfen', () => {
  ['de', 'tr'].forEach(cid => {
    const W = a1World(), C = W.DT.catalog, a2one = cid + '-a2-01.1';
    const cases = {
      'A1 bestanden (Abzeichen)': a1Profile(W, cid, { done: ['A1'], words: 300 }),
      'A1 per Einstufung übersprungen': a1Profile(W, cid, { skipLv: ['A1'] }),
      'A2 aktiv': a1Profile(W, cid, { done: ['A1'], words: 200, a2: [a2one] }),
      'A2 aktiv, A1 nicht ganz fertig': a1Profile(W, cid, { doneTopics: [cid + '-a1-01', cid + '-a1-02'], a2: [a2one] }),
      'A1 Anfänger (3 Themen)': a1Profile(W, cid, { doneTopics: [cid + '-a1-01', cid + '-a1-02', cid + '-a1-03'] }),
      'neu': a1Profile(W, cid, {})
    };
    cases['A1 bestanden (Abzeichen)'].badges[cid + ':cert-A1'] = 1791000000000;
    const before = {}; Object.keys(cases).forEach(k => { before[k] = C.focusLevel(a1Rows(W, cid, cases[k]), a1Opts(W, cid, cases[k])); });
    eq(before, { 'A1 bestanden (Abzeichen)': 'A2', 'A1 per Einstufung übersprungen': 'A2', 'A2 aktiv': 'A2', 'A2 aktiv, A1 nicht ganz fertig': 'A2', 'A1 Anfänger (3 Themen)': 'A1', 'neu': 'A1' }, cid + ': Fokus heute');
    // Regel (b) ändert heute nur „A2 aktiv, A1 nicht ganz fertig“ (bisher A1) – alle anderen wie vorher
    ok(oldFocus(a1Rows(W, cid, cases['A2 aktiv'])) === 'A2' && oldFocus(a1Rows(W, cid, cases['A1 Anfänger (3 Themen)'])) === 'A1', cid + ': alte Regel stimmt heute überein');
    a1Extend(W);
    const after = {}; Object.keys(cases).forEach(k => { after[k] = C.focusLevel(a1Rows(W, cid, cases[k]), a1Opts(W, cid, cases[k])); });
    eq(after, before, cid + ': Fokus nach Erweiterung unverändert');
    eq(['A1 bestanden (Abzeichen)', 'A1 per Einstufung übersprungen', 'A2 aktiv'].map(k => oldFocus(a1Rows(W, cid, cases[k]))), ['A1', 'A1', 'A1'], cid + ': alte Regel hätte zurückgeworfen (Regressionsbeleg)');
    // Gründe einzeln
    eq(C.levelDone(a1Rows(W, cid, cases['A1 bestanden (Abzeichen)']), 'A1', a1Opts(W, cid, cases['A1 bestanden (Abzeichen)'])), 'cert', cid + ': Grund Zertifikat');
    eq(C.levelDone(a1Rows(W, cid, cases['A2 aktiv']), 'A1', a1Opts(W, cid, cases['A2 aktiv'])), 'next', cid + ': Grund Antwort in A2');
    eq(C.levelDone(a1Rows(W, cid, cases['A1 per Einstufung übersprungen']), 'A1', a1Opts(W, cid, cases['A1 per Einstufung übersprungen'])), 'share', cid + ': Grund 12/16 übersprungen = 75 %');
    eq(C.levelDone(a1Rows(W, cid, cases['A1 Anfänger (3 Themen)']), 'A1', {}), '', cid + ': Anfänger: A1 offen');
  });
  const C = DT.catalog, r = (lv, n, c, skip) => ({ level: lv, n, c, skip: !!skip });
  const rows = [r('A1', 10, 10), r('A1', 10, 10), r('A1', 10, 10), r('A1', 10, 0), r('A2', 10, 0)];
  eq(C.focusLevel(rows, {}), 'A2', 'Grenze: 3 von 4 Themen = 75 % → erledigt');
  eq(C.focusLevel(rows.slice(1).concat([r('A1', 10, 0)]), {}), 'A1', '2 von 4 = 50 % → A1 offen');
  eq(C.focusLevel([r('A1', 10, 10), r('A2', 10, 10)], {}), 'A2', 'alles erledigt → höchstes Niveau');
  eq(C.focusLevel([], {}), 'A1', 'leer → A1');
});
test('A1-Aufrüstung: Tagesmix – neue A1-Wörter abwechselnd mit dem Fokus-Niveau', () => {
  const V = DT.vocab;
  const a1 = Array.from({ length: 300 }, (_, i) => 'a1-' + i), a2 = Array.from({ length: 50 }, (_, i) => 'a2-' + i);
  eq(V.mixNew([a1, a2], 6), ['a2-0', 'a1-0', 'a2-1', 'a1-1', 'a2-2', 'a1-2'], 'Fokus A2: 1:1, Fokus zuerst');
  eq(V.mixNew([a1, a2], 5).filter(x => x.indexOf('a2') === 0).length, 3, 'ungerade Grenze: Fokus bekommt den Überhang');
  eq(V.mixNew([a1, []], 3), ['a1-0', 'a1-1', 'a1-2'], 'Fokus-Niveau leer → untere Wörter');
  eq(V.mixNew([[], a2], 3), ['a2-0', 'a2-1', 'a2-2'], 'unten nichts neu → nur Fokus (wie bisher)');
  eq(V.mixNew([a1], 3), ['a1-0', 'a1-1', 'a1-2'], 'Fokus A1 → aufsteigend wie bisher');
  eq(V.mixNew([['x'], ['y']], 10), ['y', 'x'], 'weniger als n vorhanden');
  eq(V.mixNew([['x'], ['y']]).length, 2, 'ohne n: alle');
  eq(V.mixNew([['b1'], ['b2'], ['f1', 'f2']], 4), ['f1', 'b1', 'f2', 'b2'], 'mehrere untere Niveaus aufsteigend');
  // echte Inhalte: A2-Lernende mit 200 sicheren A1-Wörtern bekommen nach der Erweiterung weiter A2-Wörter
  const W = a1World(); a1Extend(W);
  const p = a1Profile(W, 'de', { words: 350 }), fresh = l => W.DT.vocab.wordsOf(W.KOPRU, 'de', l).filter(w => !DT.srs.get(p, 'de', w.id));
  const mix = W.DT.vocab.mixNew([fresh('A1'), fresh('A2')], 8);
  eq(mix.map(w => w.id.slice(0, 5)), ['de-a2', 'de-a1', 'de-a2', 'de-a1', 'de-a2', 'de-a1', 'de-a2', 'de-a1'], 'echter Inhalt: A2/A1 im Wechsel');
  ok(mix.filter(w => w.id.indexOf('de-a1') === 0).every(w => w.ext === 1), 'die neuen A1-Wörter sind die Erweiterung (ext:1)');
});
test('A1-Aufrüstung: Grundstock/Erweiterung getrennt zählbar (ext:1, kein Speicherfeld)', () => {
  const W = a1World(), cid = 'de', p = a1Profile(W, cid, { done: ['A1'], words: 300 }), json = JSON.stringify(p);
  a1Extend(W);
  const ws = W.DT.vocab.wordsOf(W.KOPRU, cid, 'A1'), st = DT.srs.stats(p, cid, ws.map(w => w.id));
  const sp = W.DT.catalog.extSplit(ws.map(w => ({ ext: w.ext, done: !!DT.srs.get(p, cid, w.id) })));
  eq([sp.base.n, sp.base.d, sp.ext.n, sp.ext.d], [ws.length - 300, 300, 300, 0], 'Wörter: Grundstock 300/350, Erweiterung 0/300');
  ok(Math.round(st.sicher / ws.length * 100) < 50 && Math.round(sp.base.d / sp.base.n * 100) >= 85, 'Gesamt fällt unter 50 %, Grundstock bleibt ≥ 85 %');
  eq(JSON.stringify(p), json, 'Profil unverändert (nichts gespeichert)');
});

(async () => {
  for (const [name, fn] of asyncTests) {
    current = name;
    try { await fn(); } catch (e) { failed++; console.log(`  ✗ [${name}] Ausnahme: ${e && e.stack || e}`); }
  }
  console.log(`\nKern-Tests: ${passed} ok, ${failed} fehlgeschlagen`);
  process.exit(failed ? 1 : 0);
})();
