#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Extrae los enlaces externos del código y comprueba que respondan.

Uso:  python tools/check_links.py [--timeout 15]
Notas:
  · Las plantillas de diccionario se prueban con la palabra «Haus».
  · goethe.de bloquea peticiones automáticas (403): se marcan como «revisar a mano».
"""
import re, sys, urllib.request, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FILES = list(ROOT.glob("js/*.js")) + list(ROOT.glob("modules/*.js")) + list(ROOT.glob("data/*.js"))
TIMEOUT = float(sys.argv[sys.argv.index("--timeout") + 1]) if "--timeout" in sys.argv else 15
MANUAL = ("goethe.de",)

def urls():
    found = set()
    for f in FILES:
        txt = f.read_text(encoding="utf-8")
        for u in re.findall(r"https?://[^\s'\"<>)\\]+", txt):
            u = u.rstrip(".,;")
            if u.endswith(("=", "/")) and "?" in u:
                u += "Haus"
            found.add(u)
    return sorted(u for u in found if "youtube-nocookie.com/embed" not in u and "i.ytimg.com" not in u)

def probe(u):
    req = urllib.request.Request(u, method="GET", headers={"User-Agent": "Mozilla/5.0 (link-check; Deutsch-Atelier)"})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            return r.status, r.geturl()
    except urllib.error.HTTPError as e:
        return e.code, u
    except Exception as e:  # red, DNS, TLS
        return type(e).__name__, u

def main():
    bad = 0
    for u in urls():
        if any(m in u for m in MANUAL):
            print("REVISAR  ", u); continue
        code, final = probe(u)
        ok = isinstance(code, int) and code < 400
        bad += not ok
        print("OK  %s" % code if ok else "FALLA %s" % code, u, ("→ " + final) if final != u else "")
    sys.exit(1 if bad else 0)

if __name__ == "__main__":
    main()
