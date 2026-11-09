#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Compila Deutsch · Atelier en un único HTML autónomo y en un paquete SCORM 1.2.

Uso:
    python tools/build.py            # genera dist/
    python tools/build.py --check    # además valida el manifiesto y la sintaxis JS (requiere Node)

Solo usa la biblioteca estándar de Python 3.8+.
"""
import os, base64, mimetypes, re, sys, zipfile, shutil, subprocess
from pathlib import Path
from xml.dom import minidom

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
HTML_OUT = DIST / "deutsch-atelier.html"
SCORM_DIR = DIST / "scorm"
SCORM_ZIP = DIST / "deutsch-atelier-scorm12.zip"
MIME = {".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp"}

def data_uri(path: Path) -> str:
    mt = MIME.get(path.suffix) or mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    return "data:%s;base64,%s" % (mt, base64.b64encode(path.read_bytes()).decode())

def inline_css(rel: str) -> str:
    css_path = ROOT / rel
    css = css_path.read_text(encoding="utf-8")
    def repl(m):
        target = (css_path.parent / m.group(1)).resolve()
        return "url(%s)" % data_uri(target)
    return re.sub(r"url\((\.\./media/[^)]+)\)", repl, min_css(css))

# --- minificación opcional (terser para JS; CSS por expresiones seguras) ---
def _terser():
    import shutil as _sh
    for c in (os.environ.get("TERSER"), str(ROOT / "tools" / "node_modules" / ".bin" / "terser"), _sh.which("terser")):
        if c and Path(c).exists():
            return c
    return None
TERSER = None if "--no-min" in sys.argv else _terser()
_CACHE = {}
def min_js(code: str, name: str) -> str:
    if not TERSER:
        return code
    if name in _CACHE:
        return _CACHE[name]
    import subprocess
    r = subprocess.run([TERSER, "--compress", "passes=1", "--mangle", "--ecma", "2020", "--comments", "false"],
                       input=code.encode("utf-8"), capture_output=True)
    out = r.stdout.decode("utf-8") if r.returncode == 0 and r.stdout else code
    _CACHE[name] = out
    return out
def min_css(css: str) -> str:
    if "--no-min" in sys.argv:
        return css
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    css = re.sub(r"\n\s*", "\n", css)
    css = re.sub(r"\n+", "\n", css)
    return css.strip()

def inline_scripts(html: str) -> str:
    return re.sub(r'<script src="([^"]+)"( data-web)?></script>',
                  lambda m: "<script>\n%s\n</script>" % min_js((ROOT / m.group(1)).read_text(encoding="utf-8"), m.group(1)).replace("</script", "<\\/script"), html)

def build() -> None:
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    # hojas de estilo
    html = re.sub(r'<link rel="stylesheet" href="([^"]+)">',
                  lambda m: "<style>\n%s\n</style>" % inline_css(m.group(1)), html)
    # imágenes (src / href a media/)
    html = re.sub(r'(src|href)="(media/[^"]+)"', lambda m: '%s="%s"' % (m.group(1), data_uri(ROOT / m.group(2))), html)
    # el paquete SCORM no lleva los scripts marcados como data-web (publicidad)
    html_scorm = re.sub(r'<script src="[^"]+" data-web></script>\n?', "", html)
    html = inline_scripts(html)
    html_scorm = inline_scripts(html_scorm)
    for h in (html, html_scorm):
        leftovers = re.findall(r'(?:src|href)="(media/[^"]+|css/[^"]+|js/[^"]+|data/[^"]+|modules/[^"]+)"', h)
        if leftovers:
            sys.exit("Referencias locales sin incrustar: %s" % leftovers)
    if DIST.exists():
        shutil.rmtree(DIST)
    SCORM_DIR.mkdir(parents=True)
    HTML_OUT.write_text(html, encoding="utf-8")
    (SCORM_DIR / "index.html").write_text(html_scorm, encoding="utf-8")
    shutil.copy(ROOT / "scorm" / "imsmanifest.xml", SCORM_DIR / "imsmanifest.xml")
    with zipfile.ZipFile(SCORM_ZIP, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        # el manifiesto debe quedar en la raíz del zip
        z.write(SCORM_DIR / "imsmanifest.xml", "imsmanifest.xml")
        z.write(SCORM_DIR / "index.html", "index.html")
    print("✓ %s  (%.2f MB)%s" % (HTML_OUT.relative_to(ROOT), HTML_OUT.stat().st_size / 1e6, " · minificado" if TERSER else " · sin minificar (instale terser)"))
    print("✓ %s  (%.2f MB)" % (SCORM_ZIP.relative_to(ROOT), SCORM_ZIP.stat().st_size / 1e6))

def check() -> None:
    minidom.parse(str(ROOT / "scorm" / "imsmanifest.xml"))
    print("✓ imsmanifest.xml bien formado")
    if shutil.which("node"):
        files = sorted(ROOT.glob("data/*.js")) + [ROOT / "js/app.js", ROOT / "js/performance.js"] + sorted(ROOT.glob("modules/*.js")) + [ROOT / "js/scorm.js"]
        for f in files:
            subprocess.run(["node", "--check", str(f)], check=True)
        print("✓ sintaxis JS correcta (%d archivos)" % len(files))
    else:
        print("· Node no está instalado: se omite la comprobación de sintaxis")

if __name__ == "__main__":
    build()
    if "--check" in sys.argv:
        check()
