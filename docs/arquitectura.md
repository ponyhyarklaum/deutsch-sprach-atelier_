# Arquitectura

## Principios
- **Sin dependencias en tiempo de ejecución.** HTML, CSS y JavaScript clásico; ningún framework ni CDN.
- **Una sola salida autónoma.** `tools/build.py` incrusta CSS, JS, fuentes e imágenes para que el
  archivo funcione sin conexión y dentro del iframe de Moodle.
- **Datos separados de la lógica.** Todo lo que está en `data/` son constantes puras que no dependen
  de nada; el build lo verificó evaluando cada bloque por separado.

## Capas
1. `css/base.css` — componentes y vistas originales.
2. `css/theme.css` — redefine tokens (`--bg`, `--card`, `--ink`, `--news`, `--fraktur`…) y superficies.
   Para cambiar la identidad visual, editar solo esta hoja.
3. `data/*.js` → `js/app.js` — contenido y aplicación.
4. `js/performance.js` — sustituye funciones costosas por versiones con caché, sin cambiar su resultado.
5. `modules/oesterreich.js` y `modules/schweiz.js` — cada uno se registra en `NAV`, `PAGES` y `SECS` y envuelve `goMode` y `homeFilas`.
6. `modules/conjugador.js` — motores de conjugación (DE desde `V`, EN por reglas + irregulares, FR por grupos,
   cambios ortográficos y familias de irregulares: `apprendre` hereda de `prendre`). Expone `window.CONJ`.
7. `modules/idiomas.js` — estado de lengua (`LANGAPI.get/set`), interruptor, barra lateral por lengua,
   vistas `x*` de inglés y francés (datos en `data/en.js` y `data/fr.js`), contrastiva, tiempos y pie de recursos.
   Envuelve `goDestino`, `goMode`, `sideNav`, `homeFilas`, `gramTheory` y `nvOpen`.
8. `modules/anuncios.js` — AdSense con consentimiento; inactivo sin `ADS.client`, fuera de http(s) o dentro de un LMS.
   El script lleva el atributo `data-web` y `tools/build.py` lo elimina del paquete SCORM.
9. `modules/practica.js`, `modules/linguistica.js` — páginas `p*` (sección `m-prac`) y `ln*` (sección `m-ling`).
   Publican `PRNAV(lengua)` y `LNNAV(lengua)`, que `idiomas.js` añade a la barra lateral según el enfoque.
10. `modules/cuenta.js` (`window.PROG`), `modules/interfaz.js` (traducción de la «cáscara» por nodos de texto) y
   `modules/bombillo.js`.
11. `js/scorm.js` — puente con el LMS; si no encuentra la API, no hace nada. Guarda también lengua y subestado.

## Añadir una sección nueva
Tomar `modules/oesterreich.js` como plantilla:
1. Registrar las páginas en `PAGES[clave] = [título, grupo, idSección]` y añadir `idSección` a `SECS`.
2. Insertar el grupo en `NAV` (barra lateral).
3. Añadir `<section id="m-idSección" class="hide"></section>` en `index.html`.
4. Envolver `goMode` para pintar la vista cuando se abra.
5. Incluir el script en `index.html` antes de `js/scorm.js`.

## Navegación interna
`goDestino(clave)` abre una sección; `goNivel(nivel, clave)` la abre filtrada por nivel.
El historial (atrás/adelante) y «Recientes» se alimentan de `histPush({go, niv, sub})`.

- Cada entrada guarda `go`, `niv`, `sub` (p. ej. `g:12` tema, `s:3` relato, `n:B1` nivel, `u:en-b1-2` unidad),
  `lang` y la posición `y` de desplazamiento.
- `goMode` registra por sí mismo cualquier cambio de página; las vistas internas (`gramTheory`, `stOpen`,
  `nvOpen`, `kStart`…) añaden su subestado. Las anotaciones hechas en la misma acción se funden en una.
- Para restaurar un subestado propio, un módulo registra `HSUB[página] = sub => { … }`.
- No hay botones de «volver» dentro de las vistas: las flechas de la cabecera (y Alt + ← / →) son el único control.

## Subpáginas
Un elemento de `NAV` con `sub` (p. ej. `{t:'Fonética', go:'lnarea', sub:'a:fonetica'}`) se dibuja con
`data-sub`; al pulsarlo se llama a `xGo(go, sub)`, que aplica `SUBSET[go](sub)`, anota el historial y abre la
página. Para restaurar desde el historial, el módulo registra `HSUB[go]`.
