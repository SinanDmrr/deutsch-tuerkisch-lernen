"""Erhöht APP_VERSION in js/app.js, alle ?v=… in index.html und VERSION in sw.js (Cache-Busting).
Aufruf: python3 tools/bump-version.py   → Version = heutiges Datum + laufende Nummer
"""
import datetime, re
from pathlib import Path
root = Path(__file__).resolve().parent.parent
app = root / 'js' / 'app.js'
s = app.read_text(encoding='utf-8')
old = re.search(r"var APP_VERSION = '([^']+)';", s).group(1)
today = datetime.date.today().isoformat()
n = int(old.split('.')[-1]) + 1 if old.startswith(today) else 1
new = f'{today}.{n}'

# erst alles berechnen, dann schreiben – bei einem Fehler bleibt keine halbe Versionserhöhung zurück
out = {app: s.replace(f"var APP_VERSION = '{old}';", f"var APP_VERSION = '{new}';")}
idx = root / 'index.html'
out[idx] = re.sub(r'\?v=[0-9.\-]+', f'?v={new}', idx.read_text(encoding='utf-8'))
# Service Worker (ADR-8) und seine Notschalter-Vorlage: gleiche Version → neuer Cache „dt-assets-<VERSION>“
for sw in (root / 'sw.js', root / 'docs' / 'sw-notschalter.js'):
    if sw.exists():
        t, k = re.subn(r"^const VERSION = '[^']*';", f"const VERSION = '{new}';", sw.read_text(encoding='utf-8'), count=1, flags=re.M)
        if not k:
            raise SystemExit(f"{sw.relative_to(root)}: „const VERSION = '…';“ nicht gefunden – nichts geändert")
        out[sw] = t
for path, text in out.items():
    path.write_text(text, encoding='utf-8')
print(old, '→', new)
