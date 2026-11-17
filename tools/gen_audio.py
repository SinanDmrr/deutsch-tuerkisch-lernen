"""Erzeugt MP3-Dateien mit Piper TTS für alle vorgelesenen Texte (läuft in GitHub Actions).

Aufruf: python tools/gen_audio.py texts.json
- Bereits vorhandene Dateien werden wiederverwendet (nur neue Texte werden erzeugt).
- Dateien, die kein Text mehr braucht, werden gelöscht.
- Schreibt audio/manifest.json, das die Webseite liest.
"""
import hashlib, json, os, subprocess, sys, tempfile, urllib.request, wave
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIO = ROOT / 'audio'
MODELS = ROOT / '.piper-voices'
HF = 'https://huggingface.co/rhasspy/piper-voices/resolve/main/'

from piper import PiperVoice  # pip install piper-tts


def voice_url(key):
    region, name, quality = key.split('-', 2)
    return f"{HF}{region.split('_')[0]}/{region}/{name}/{quality}/{key}"


def fetch_voice(key):
    MODELS.mkdir(exist_ok=True)
    onnx, cfg = MODELS / f'{key}.onnx', MODELS / f'{key}.onnx.json'
    try:
        for p, ext in ((onnx, '.onnx'), (cfg, '.onnx.json')):
            if not p.exists() or p.stat().st_size == 0:
                print('  lade', key + ext, flush=True)
                urllib.request.urlretrieve(voice_url(key) + ext, p)
        return PiperVoice.load(str(onnx), config_path=str(cfg))
    except Exception as e:  # Stimme existiert nicht / Download fehlgeschlagen
        print(f'  ! Stimme {key} nicht verfügbar: {e}', flush=True)
        for p in (onnx, cfg):
            if p.exists() and p.stat().st_size < 1000:
                p.unlink()
        return None


def synth_mp3(voice, text, target):
    target.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tmp:
        wav_path = tmp.name
    with wave.open(wav_path, 'wb') as wf:
        if hasattr(voice, 'synthesize_wav'):
            voice.synthesize_wav(text, wf)      # piper-tts >= 1.3
        else:
            voice.synthesize(text, wf)          # ältere Versionen
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', wav_path, '-ac', '1', '-b:a', '48k', str(target)], check=True)
    os.unlink(wav_path)


def file_id(text):
    return hashlib.sha1(text.encode('utf-8')).hexdigest()[:16]


def main():
    texts = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
    cfg = json.loads((ROOT / 'tools' / 'tts-voices.json').read_text(encoding='utf-8'))
    manifest = {'voices': {}, 'files': {}, 'samples': {}}
    loaded = {}

    def get(key):
        if key not in loaded:
            loaded[key] = fetch_voice(key)
        return loaded[key]

    used_dirs = set()
    for lang, genders in cfg['voices'].items():
        manifest['voices'][lang] = {}
        for gender, candidates in genders.items():
            key = next((k for k in candidates if get(k)), None)
            if not key:
                continue
            manifest['voices'][lang][gender] = key
            voice, files, made = get(key), {}, 0
            vdir = AUDIO / key
            used_dirs.add(vdir.name)
            for text in texts.get(lang, []):
                fid = file_id(text)
                target = vdir / f'{fid}.mp3'
                if not target.exists():
                    synth_mp3(voice, text, target)
                    made += 1
                files[text] = fid
            # nicht mehr benötigte Dateien entfernen
            keep = {f'{fid}.mp3' for fid in files.values()}
            for f in vdir.glob('*.mp3'):
                if f.name not in keep:
                    f.unlink()
            manifest['files'][key] = files
            print(f'{lang}/{gender}: {key} – {len(files)} Texte, {made} neu erzeugt', flush=True)

    # Hörproben
    for lang, keys in cfg.get('samples', {}).items():
        for key in keys:
            v = get(key)
            if not v:
                continue
            target = AUDIO / 'samples' / f'{key}.mp3'
            if not target.exists():
                synth_mp3(v, cfg['sampleText'][lang], target)
            manifest['samples'].setdefault(lang, {})[key] = f'samples/{key}.mp3'
    used_dirs.add('samples')

    # Ordner von Stimmen löschen, die nicht mehr genutzt werden
    for d in AUDIO.iterdir() if AUDIO.exists() else []:
        if d.is_dir() and d.name not in used_dirs:
            for f in d.glob('*'):
                f.unlink()
            d.rmdir()

    AUDIO.mkdir(exist_ok=True)
    (AUDIO / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=1, sort_keys=True), encoding='utf-8')
    print('manifest.json geschrieben', flush=True)


if __name__ == '__main__':
    main()
