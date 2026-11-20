/* Erzeugt js/content/manifest.js (ADR-15) – NIE von Hand bearbeiten.
 * Aufruf: node tools/build-manifest.js            → schreibt die Datei
 *         require('./build-manifest').build(root) → { manifest, text } (Validator vergleicht damit)
 * Ein „Paket“ = Kurs + Niveau (de-a2). Dateien: js/content/<kurs>-<niv>[-teil].js (Zuordnung nur über den Dateinamen).
 * Jedes Paket wird für sich in eine eigene VM geladen (Lehrplan + Paketdateien + reine Kern-Dateien),
 * daraus die Zahlen, die die App für NICHT geladene Niveaus braucht (DT.catalog.levelSummary).
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const FILE_RE = /^([a-z]{2})-(a1|a2|b1|b2|c1|c2)(?:-[a-z0-9]+)*\.js$/;

function packagesOf(dir) {
  const pk = {};
  fs.readdirSync(dir).filter(f => FILE_RE.test(f)).sort().forEach(f => {
    const m = FILE_RE.exec(f), key = m[1] + '-' + m[2];
    (pk[key] = pk[key] || []).push(f);
  });
  return pk;
}

function summarize(root, key, files) {
  const ctx = { window: {}, console };
  vm.createContext(ctx);
  const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
  run('js/curriculum.js');
  files.forEach(f => run('js/content/' + f));
  run('js/core/check.js'); run('js/core/catalog.js');
  const K = ctx.window.KOPRU, CAT = ctx.window.DT.catalog;
  const grammarIds = Object.keys(K.content).sort();   // vor register: nur echte Themen (K.add)
  CAT.register(K);
  // Zahlen aus derselben Funktion, die die App für geladene Pakete nutzt (DT.catalog.levelSummary)
  const pk = Object.assign({ files, bytes: 0 }, CAT.levelSummary(K, key));
  files.forEach(f => { pk.bytes += fs.statSync(path.join(root, 'js', 'content', f)).size; });
  // Fremde Schlüssel in einem Paket (z. B. de-a2-Wörter in tr-a1-Datei) verwirren den Loader → melden
  const foreign = [].concat(grammarIds, Object.keys(K.dialogs), Object.keys(K.texts), Object.keys(K.writes), Object.keys(K.vocab))
    .filter(id => id !== key && id.indexOf(key + '-') !== 0 && id.indexOf(key + '.') !== 0);
  return { pk, foreign };
}

// Stabile, sortierte JSON-Ausgabe (gleicher Inhalt → gleiche Datei)
function stable(v) {
  if (Array.isArray(v)) return '[' + v.map(stable).join(',') + ']';
  if (v && typeof v === 'object') return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + stable(v[k])).join(',') + '}';
  return JSON.stringify(v);
}

function build(root) {
  root = root || path.join(__dirname, '..');
  const pks = packagesOf(path.join(root, 'js', 'content')), manifest = {}, problems = [];
  Object.keys(pks).sort().forEach(key => {
    const r = summarize(root, key, pks[key]);
    manifest[key] = r.pk;
    r.foreign.forEach(id => problems.push(key + ': Eintrag gehört nicht zu diesem Paket – ' + id));
  });
  const body = Object.keys(manifest).sort().map(k => '  ' + JSON.stringify(k) + ': ' + stable(manifest[k])).join(',\n');
  const text = '/* ERZEUGT von tools/build-manifest.js (ADR-15) – nicht von Hand bearbeiten.\n' +
    ' * Neue Inhaltsdatei js/content/<kurs>-<niv>[-teil].js anlegen, dann: node tools/build-manifest.js */\n' +
    'window.KOPRU.setManifest({\n' + body + '\n});\n';
  return { manifest, text, problems };
}

module.exports = { build, packagesOf, FILE_RE };

if (require.main === module) {
  const root = path.join(__dirname, '..'), r = build(root);
  r.problems.forEach(p => console.log('FEHLER:', p));
  if (r.problems.length) process.exit(1);
  const out = path.join(root, 'js', 'content', 'manifest.js');
  const old = fs.existsSync(out) ? fs.readFileSync(out, 'utf8') : '';
  if (old !== r.text) fs.writeFileSync(out, r.text, 'utf8');
  console.log((old === r.text ? 'unverändert: ' : 'geschrieben: ') + 'js/content/manifest.js · ' + Object.keys(r.manifest).length + ' Pakete · ' + Math.round(r.text.length / 102.4) / 10 + ' KB');
}
