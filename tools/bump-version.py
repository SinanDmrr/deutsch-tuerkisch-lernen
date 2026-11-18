"""Erhöht APP_VERSION in js/app.js und alle ?v=… in index.html (Cache-Busting).
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
app.write_text(s.replace(f"var APP_VERSION = '{old}';", f"var APP_VERSION = '{new}';"), encoding='utf-8')
idx = root / 'index.html'
h = re.sub(r'\?v=[0-9.\-]+', f'?v={new}', idx.read_text(encoding='utf-8'))
idx.write_text(h, encoding='utf-8')
print(old, '→', new)
