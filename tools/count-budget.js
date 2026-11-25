/* Umfangs-Budget je Kurs und Niveau (docs/umfangs-budget.md): node tools/count-budget.js [a1|a2|b1 ...]
 * Zählt Themen, gewertete Aufgaben, mc-Anteil, Wörter (phr), Dialoge/Wahlzeilen, Lese-/Hörtexte, Schreiben, Typen. Nur Lesen, Exit 0. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console }; vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
run('js/curriculum.js'); run('js/content/manifest.js');
const MF = ctx.window.KOPRU.manifest;
Object.keys(MF).sort().forEach(k => (MF[k].files || []).forEach(f => fs.existsSync(path.join(root, 'js/content', f)) && run('js/content/' + f)));
['check.js', 'catalog.js'].forEach(f => run('js/core/' + f));
const K = ctx.window.KOPRU, DT = ctx.window.DT, isC = DT.check.isCountable, CAT = DT.catalog;
const BUD = { a1: { topics: 16, perTopic: 24, mc: 30, words: 650, phr: 20, dialogs: 10, reads: 12, listens: 10, writes: 10 },
  b1: { topics: 17, topicsMax: 18, perTopic: 24, mc: 30, words: 710, phr: 20, dialogs: 10, reads: 12, listens: 10, writes: 10 } };   // B1: docs/b1-konzept.md + Umfangsbudget-Kürzung (DE 17 Themen); Lesetexte je 5 Fragen, Hörtexte je 4
const levels = process.argv.slice(2).map(x => x.toLowerCase()); if (!levels.length) levels.push('a1', 'a2');
const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
const flag = (v, t, tol) => Math.abs(v - t) <= t * tol ? 'ok' : (v < t ? 'ZU WENIG' : 'ZU VIEL');
const rows = [];
for (const lv of levels) for (const c of ['de', 'tr']) {
  const pre = c + '-' + lv + '-', L = lv.toUpperCase(), B = BUD[lv] || BUD.a1;
  const topics = ((K.courses[c].levels || {})[L] || []).map(x => x[0]);
  const ty = {}, per = [], lack = []; let cnt = 0, mcAll = 0, tot = 0, mcMax = 0;
  topics.forEach(id => {
    const ex = (K.content[id] || {}).exercises || []; let n = 0, mc = 0; per.push(ex.length); tot += ex.length;
    ex.forEach(e => { ty[e.t] = (ty[e.t] || 0) + 1; if (isC(e)) { n++; if (e.t === 'mc') mc++; } });
    cnt += n; mcAll += mc; if (n && pct(mc, n) > mcMax) mcMax = pct(mc, n);
    if (n && pct(mc, n) > 30) lack.push(id + ' mc ' + pct(mc, n) + '%');
  });
  const voc = K.vocab[c + '-' + lv] || [], phr = voc.filter(w => w.pos === 'phr').length;
  const dias = Object.keys(K.dialogs || {}).filter(i => i.startsWith(pre));
  let choice = 0; dias.forEach(i => { choice += ((K.dialogs[i].lines || []).filter(l => l.me)).length; });
  const tx = Object.keys(K.texts || {}).filter(i => i.startsWith(pre));
  const hr = tx.filter(i => K.texts[i].kind === 'listen').length, rd = tx.length - hr;
  const wr = Object.keys(K.writes || {}).filter(i => i.startsWith(pre)).length;
  const avg = topics.length ? tot / topics.length : 0;
  rows.push([c + '-' + lv, 'Themen', topics.length, B.topics, B.topicsMax ? (topics.length >= B.topics && topics.length <= B.topicsMax ? 'ok' : (topics.length < B.topics ? 'ZU WENIG' : 'ZU VIEL')) : flag(topics.length, B.topics, .1)]);
  rows.push(['', 'Aufgaben/Thema Ø (min-max)', avg.toFixed(1) + ' (' + (per.length ? Math.min.apply(null, per) + '-' + Math.max.apply(null, per) : '-') + ')', B.perTopic, flag(avg, B.perTopic, .1)]);
  rows.push(['', 'gewertet gesamt', cnt, '', '']);
  rows.push(['', 'mc-Anteil gesamt / max je Thema', pct(mcAll, cnt) + '% / ' + mcMax + '%', '<=' + B.mc + '%', pct(mcAll, cnt) <= B.mc && mcMax <= B.mc ? 'ok' : 'ZU VIEL']);
  rows.push(['', 'Wörter', voc.length, B.words, flag(voc.length, B.words, .1)]);
  rows.push(['', 'phr-Anteil', pct(phr, voc.length) + '% (' + phr + ')', '~' + B.phr + '%', flag(pct(phr, voc.length), B.phr, .5)]);
  rows.push(['', 'Dialoge / Wahlzeilen', dias.length + ' / ' + choice, B.dialogs, flag(dias.length, B.dialogs, .1)]);
  rows.push(['', 'Lesetexte', rd, B.reads, flag(rd, B.reads, .1)]);
  rows.push(['', 'Hörtexte', hr, B.listens, flag(hr, B.listens, .1)]);
  rows.push(['', 'Schreibaufgaben', wr, B.writes, flag(wr, B.writes, .1)]);
  rows.push(['', 'Typen', Object.keys(ty).sort().map(t => t + ':' + ty[t]).join(' '), '', '']);
  if (lack.length) rows.push(['', 'mc > 30 % in', lack.join(', '), '', '']);
}
const w = [8, 32, 0, 8, 9]; console.log(['Kurs'.padEnd(8), 'Kennzahl'.padEnd(32), 'Ist'.padEnd(22), 'Budget'.padEnd(8), 'Status'].join(' '));
rows.forEach(r => console.log([String(r[0]).padEnd(8), String(r[1]).padEnd(32), String(r[2]).padEnd(22), String(r[3]).padEnd(8), r[4]].join(' ')));
console.log('Budget gilt für A1 und B1 (±10 %); A2 vergleicht gegen A1-Werte.');
