# Changelog

## [6.4.0] — 2026-11-09
### Añadido
- **«Al azar» en las cuatro lenguas** (`modules/azar.js`): en inglés, francés y español abre una ficha de palabra
  con pronunciación, significado, fuente (glosario de lectura, variación por país, falso amigo o léxico comparado)
  y enlaces a diccionarios; «Otra palabra» encadena fichas. En alemán se mantiene la ficha de verbo o de léxico.
- El botón «Al azar» también aparece en el móvil (solo el icono).

## [6.3.0] — 2026-11-09
### Añadido
- **Tema anterior / siguiente** al final de cada tema de gramática (alemán, en orden del currículo A1 → C2), también
  tras el cuestionario; en las unidades de inglés, francés y español (y «Tema siguiente» en el resultado del
  cuestionario), en los relatos alemanes y en las lecturas críticas.
### Eliminado
- Recuadros «Modalidad 100 % autónoma» y «Preparación para certificación» de las páginas de curso.

## [6.2.0] — 2026-11-09
### Añadido
- **Semántica** como noveno curso del plan de estudios lingüístico (sentido y referencia, composicionalidad y
  ambigüedad, semántica formal, cognitiva y pragmática), con aplicación y datos para las cuatro lenguas.
- **Botón del cerebro** (entre el bombillo y el gorro): único lugar para cambiar la lengua de estudio; muestra la
  lengua activa. Se retiran el interruptor DE · EN · FR · ES de la barra superior y la fila del panel «Aa».
- Banderas con los colores oficiales en el selector de lengua (se añade la del Reino Unido para el inglés).
### Rendimiento
- `tools/build.py` minifica el JavaScript con terser (si está en `tools/node_modules`, `npm install --prefix tools`)
  y limpia el CSS; `--no-min` lo desactiva.

## [6.1.0] — 2026-11-09
### Cambiado
- **Alemán con la misma disposición** que las otras lenguas: Inicio · Itinerario · Gramática · Léxico y práctica ·
  Recursos oficiales · Planificación · Lectura y cultura. Grundlagen, Werkzeuge, Österreich y Schweiz se reparten
  dentro de esos grupos.
- **Enfoque (Práctica / Lingüística)** en un botón flotante con gorro de graduación, encima del bombillo; se retira
  de la barra lateral y del panel «Aa».
- Etiqueta de las portadas (p. ej. «DE · LINGUISTIK») alineada a la izquierda.
- **Lingüística como plan de estudios**: portada con repaso breve, ocho cursos (uno por ámbito) con ficha técnica,
  tres módulos con lección teórica, objetivos, conceptos clave, aplicación a la lengua, comparación con las otras
  tres lenguas, lectura complementaria y hitos (`data/lingcurso.js`).
### Añadido
- **¿Sabías que…? por país**: cada país es seleccionable y muestra su vocabulario propio y los aspectos que
  cambian (pronunciación, gramática, ortografía, contacto) en las cuatro lenguas (`data/paises.js`).
### Rendimiento y animación
- La lista de 184 verbos se dibuja al abrirla por primera vez (≈4 600 nodos menos al cargar).
- La traducción de la interfaz no observa el DOM mientras está en español.
- Sin desenfoque de fondo en tarjetas (solo en la ficha lateral); `content-visibility` en bloques largos.
- Acordeones, paneles flotantes y cambios de subpágina con transiciones suaves; respeta «reducir movimiento».

## [6.0.0] — 2026-11-09
### Añadido
- **Cursos**: catálogo por lengua y una página de presentación por nivel (24 en total), con miga de pan,
  ficha lateral fija (progreso, botón «Empezar / Continuar», horas, semanas, unidades, certificado) y
  programa en acordeón por módulos.
- **Ficha técnica académica** en cada curso: requisitos previos, dedicación (horas del nivel y semanas a
  3, 6 y 10 h semanales), temario, **criterios de evaluación del examen oficial** (Goethe-Zertifikat,
  Cambridge English, DELF/DALF, DELE) con enlace a la normativa, e **hitos para completar y aprobar el
  nivel** con progreso real y autoevaluación.
- `css/curso.css`: acabado acrílico con bisel sutil, aplicado también a tarjetas y portadas existentes.
### Cambiado
- Barra lateral más ligera: el Itinerario lista seis cursos en lugar de 42 entradas (7 destinos × 6 niveles);
  los destinos de cada nivel están ahora en el programa del curso.
- Los niveles de la portada abren la página del curso en las cuatro lenguas.

## [5.0.0] — 2026-11-08
### Añadido
- **Español** como cuarta lengua (ELE): 36 unidades A1–C2, recursos oficiales (Instituto Cervantes, CVC, RAE,
  FundéuRAE, DELE, SIELE, RTVE…), horas por nivel y **conjugador español** con voseo, cambios vocálicos,
  ortografía, irregulares por familias, pronominales e imperativo con enclíticos.
- **Dos enfoques**: Práctica (comunicación) y **Lingüística** (fonética, fonología, morfología, sintaxis,
  tiempo-aspecto-modo, léxico, ortografía, dialectología y sociolingüística), con progresión I-II-III,
  datos, ejercicios y lecturas de acceso abierto para las cuatro lenguas.
- Herramientas lingüísticas: árbol sintáctico, inventario AFI con audio, segmentador morfológico,
  concordancias KWIC sobre los textos de la app y léxico comparado.
- **Lectura crítica** (24 obras de dominio público, una por nivel y lengua), **traducción sistemática**
  (noticias de práctica y fragmentos de novela, con términos clave), **«¿Sabías que…?»** con países,
  variedades, historia y noticieros oficiales por dialecto, y **libros y consejos** por lengua.
- **El Bombillo**: ayuda rápida «¿Qué quieres mejorar?» con estrategias respaldadas por la investigación y
  referencias bibliográficas.
- **Mi progreso**: avance guardado en el navegador, exportar / importar, y cuenta de Google opcional (Firebase).
- **Idioma de la interfaz** (español, Deutsch, English, Français), lengua de estudio y enfoque dentro del panel «Aa».
- **Tipografía de rótulo por lengua**: Fraktur (alemán), IM Fell English, Cormorant Garamond y Ibarra Real Nova.
### Cambiado
- La navegación lateral admite subpáginas con historial propio (niveles, ámbitos, herramientas, lecturas).
- Textos legales: cuatro lenguas, obras de dominio público y datos de la cuenta de Google.

## [4.0.0] — 2026-11-08
### Añadido
- **Interruptor DE · EN · FR** en la barra superior: cambia barra lateral, portada, marca y pie de recursos; la
  lengua elegida se recuerda en el navegador y en el progreso SCORM.
- **Inglés** y **francés** de A1 a C2: 36 unidades por lengua (6 por nivel) con teoría propia, tablas, ejemplos,
  interferencias del español, 8 preguntas corregidas al instante, PDF y enlaces a la página oficial del mismo tema.
  Itinerario por nivel con descriptores, horas, requisitos, recursos de destrezas, vídeo y certificado oficial.
  Directorio de recursos oficiales (99 enlaces; verificación en docs/enlaces.md), vídeo y audio, exámenes con prueba de nivel
  orientativa (24 preguntas) y diccionarios con búsqueda directa.
- **Conjugador** (alemán, inglés y francés): todas las formas, terminaciones resaltadas, irregularidades
  señaladas, notas ortográficas, afirmativa / negativa / interrogativa, pronominales franceses y entrenamiento.
- **Gramática contrastiva** español–alemán–inglés–francés: 18 fichas con regla, ejemplos paralelos e
  interferencias, y falsos amigos con cuestionario.
- **Tiempo de aprendizaje**: horas y requisitos para cada unidad de las tres lenguas y horas por nivel
  (Goethe-Institut, Cambridge English, Alliance Française), visibles también en cada tema y nivel de alemán.
- **Pie de recursos oficiales** por lengua.
- **Publicidad opcional** (`modules/anuncios.js`): Google AdSense desactivado por defecto, con aviso de
  consentimiento previo, Consent Mode v2, opción de CMP certificada de Google, «Preferencias de cookies» y
  `ads.txt.example`. Nunca se incluye en el paquete SCORM. Guía en docs/derechos-y-anuncios.md.
### Cambiado
- **Historial atrás / adelante** reescrito: guarda subestado (tema, relato, nivel, lengua) y posición de
  desplazamiento; agrupa las anotaciones de una misma acción; registra también las páginas abiertas sin
  pasar por el menú; responde a Alt + ← / →, botones laterales del ratón y gesto táctil; los botones muestran
  el destino al pasar el ratón.
- Textos legales actualizados para tres lenguas, publicidad y avisos de infracción.
### Eliminado
- Botones de retroceso duplicados dentro de las vistas: «‹ Todos los temas», «‹ Todas las historias» y
  «‹ Todos los niveles». Sus funciones las cubren ahora las flechas de la cabecera.

## [3.0.0] — 2026-11-08
### Cambiado
- El proyecto pasa a ser personal e independiente: se retiran todas las referencias y vínculos institucionales
  (catálogo de biblioteca, sedes, identificador del paquete SCORM, textos de portada y README).
  La bibliografía se presenta agrupada por nivel, sin depender de ninguna biblioteca concreta.
- Historial de Git reiniciado para que no conserve referencias anteriores.
### Añadido
- Pie de página con © y enlaces a **Aviso legal**, **Derechos de autor** y **Política de privacidad y cookies**
  (`modules/legal.js`), redactados según lo que la app hace realmente: sin datos personales, sin cookies propias,
  preferencias en el navegador, progreso solo en la plataforma SCORM, YouTube solo al pulsar «Reproducir aquí».

## [2.5.0] — 2026-11-08
Revisión contrastada con *Grammatik aktiv* (A1–B1, B1+, B2–C1), las *Übungsgrammatiken* de Hueber
(Grundstufe, Mittelstufe, Oberstufe), la *Gramática sucinta* de Ruppert y listas de verbos irregulares. Detalle en docs/contraste.md.
### Añadido
- 14 unidades de gramática A1–B1 (de 45 a 59), integradas en el itinerario y con cuestionario.
- «Para profundizar» con capítulos equivalentes en cada unidad.
- Herramienta *Unregelmäßige Verben* (170 verbos, data/irregulares.js).
- Vocabulario: «En el hospital» (A2) y «Más animales» (A1).
- Bibliografía: Übungsgrammatik Grundstufe, Mittelstufe y Oberstufe – aktuell; Grammatik aktiv B1+ y B2–C1.
### Corregido
- Enlaces «Repaso del tema» a mein-deutschbuch.de (el sitio pasó de `.html` a carpetas): 41 enlaces rotos (55 tras añadir las unidades nuevas).
- Ruppert: aviso de ortografía y terminología anteriores a 1996.
### Verificado
- 91 verbos contrastados con dos listas externas: sin discrepancias.

## [2.4.0] — 2026-11-08
### Añadido
- **Grammatikbücher** (Grundlagen): bibliografía de gramática filtrable por nivel.
  - 9 gramáticas de base (Klipp und Klar, Grammatik Plus A1/A2, Grammatik Intensivtrainer, Grammatik aktiv,
    Grammatik & Konversation, Übungsbuch Grammatik A2–B2, Eggelte «Gramática alemana», Ruppert).
  - 5 obras de referencia (Reimann, Dreyer/Schmitt, Hall/Scheiner, Helbig/Buscha, Duden 4).
  - 8 gramáticas gratuitas en línea (grammis del IDS, Deutsche Grammatik 2.0, mein-deutschbuch, Variantengrammatik).
- «Para profundizar» al final de cada una de las 45 unidades de gramática, con las obras de su nivel y el diccionario temático de grammis.

## [2.3.2] — 2026-11-08
### Corregido
- Menú ☰ en pantallas estrechas (móvil y Moodle/SCORM en marco angosto): si la barra lateral se había contraído en
  escritorio, al abrir el menú solo aparecía el velo gris. Ahora el cajón siempre se muestra, el botón ☰ no tapa el logotipo
  y se cierra con el velo, con ‹, con Escape o al elegir una sección; al ensanchar la ventana se cierra solo.

## [2.3.1] — 2026-11-08
### Cambiado
- Barra superior flotante con esquinas redondeadas, a juego con la barra lateral; el botón de menú queda dentro de ella.
- Barra lateral y barra superior del mismo color que el fondo (sin textura acrílica ni franja gris), en todos los fondos de lectura.

## [2.3.0] — 2026-11-08
### Añadido
- Sección **Schweiz**: diglosia Hochdeutsch/Mundart, ortografía sin ß, pronunciación y gramática; 28 Helvetismen con audio y
  cuestionario; saludos (Grüezi, Merci vielmal, En Guete…), carta típica y diálogo A2 en la estación; fide-Test; 17 recursos gratuitos
  (SWI swissinfo.ch en alemán y español, SRF school/Play/News/Audio, fide, Schweizerisches Idiotikon).
- Österreich › Lernen online: ORF Einfache Sprache, news.ORF.at, ostarrichi.org.
- Recursos comunes a ambas secciones: Variantengrammatik (IDS) y Atlas zur deutschen Alltagssprache.

## [2.2.0] — 2026-11-08
### Cambiado
- El botón «Tema claro / oscuro» desaparece de la barra superior: el tema se elige en **Lectura › Fondo** (Blanco … Negro).
- El tipo de letra del modo lectura se aplica a toda la página (textos, títulos, menú y botones).
  Nueva opción **Original** (titulares Times + interfaz Inter), que es la predeterminada.

## [2.1.0] — 2026-11-08
### Añadido
- **Modo lectura** tipo Kindle en todas las páginas (botón «Aa»): fondo Blanco, Crema, Sepia, Verde o Negro;
  letra Times, Georgia, Palatino o Sans; tamaño 85–140 %; interlineado; márgenes; texto justificado; «Por defecto».
  Se recuerda en el navegador y en el intento SCORM.

### Cambiado
- «Empezar el cuestionario» y demás botones principales ya no se aclaran al pasar el cursor: mantienen el color y muestran un anillo sutil.
- Página de inicio sin líneas divisorias.

## [2.0.0] — 2026-11-08
### Añadido
- Sección **Österreich**: panorama del alemán austríaco, 30 Austriazismen con audio y cuestionario,
  saludos y Kaffeehaus con diálogo A2, exámenes ÖSD y 20 recursos oficiales (Sprachportal, Österreich Institut, ÖIF).
- Empaquetado **SCORM 1.2** con estado de finalización, tiempo de sesión y progreso guardado (`cmi.suspend_data`).
- Herramientas `tools/build.py` y `tools/check_links.py`.

### Cambiado
- Identidad visual: fondo blanco/negro puro con acabado acrílico, tipografía de periódico
  (Times New Roman / Tinos, cabeceras en Fraktur), iconos de trazo fino.
- Código separado en `css/`, `data/`, `js/` y `modules/` (antes: un único HTML de 2,2 MB).
- Grupo de navegación «Allgemeine» renombrado a «Grundlagen».

### Corregido
- Langenscheidt: la plantilla de búsqueda llevaba a la portada; ahora abre la entrada alemán–español.
- WordReference: buscaba en alemán–inglés; ahora alemán–español.
- Vídeos de YouTube incrustados dentro de Moodle (`referrerpolicy`).

### Rendimiento
- Wortschatz: de ~2,6 s a ~0,75 s en el primer acceso (CPU limitada ×4) y casi instantáneo después.
- Cambio de sección ~45 % más rápido; desplazamiento más estable (sin desenfoque en vivo sobre el contenido).
- Animaciones solo con `transform`/`opacity`; respeta `prefers-reduced-motion`.
