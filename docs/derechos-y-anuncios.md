# Derechos de autor y publicidad

Guía para publicar la versión web con Google AdSense sin infringir derechos ni políticas.
No es asesoría jurídica: ante una publicación comercial conviene revisarla con un profesional
o con un generador especializado de textos legales.

## 1. Qué contenido es propio y qué es de terceros

| Contenido | Autoría | Cómo se usa |
|---|---|---|
| Explicaciones, ejemplos, tablas, cuestionarios, relatos, conjugador, fichas contrastivas, tiempos | Propia | Se publica con © del titular |
| Gramáticas impresas (Grammatik aktiv, Hueber, Ruppert…) | Editoriales | Solo cita bibliográfica y números de capítulo; **no** se reproduce texto ni ejercicios. Los PDF no forman parte del repositorio |
| British Council, BBC, Cambridge, Test-English, VOA, TV5MONDE, RFI, France Éducation international, Le Point du FLE, Larousse, Académie française, DW, Goethe, ORF, SRF… | Sus titulares | **Enlace** a la página original (se abre en pestaña nueva). No se copian textos, audios, imágenes ni ejercicios |
| Vídeos de YouTube | Sus titulares | Enlace al canal o reproductor oficial insertado (`youtube-nocookie.com`) solo al pulsar «Reproducir aquí»; el titular decide si permite la inserción. No se descargan ni se alojan copias |
| Criterios de examen en las fichas de curso | Sus titulares | Resumen propio de la normativa pública, con enlace a la fuente oficial y aviso de que prevalece la normativa vigente |
| Nombres y marcas (Cambridge English Qualifications, DELF, DALF, Goethe-Zertifikat, ÖSD…) | Sus titulares | Uso nominativo: solo para identificar la fuente, sin logotipos y con aviso de no afiliación |
| Tipografías Inter, Tinos, UnifrakturMaguntia | SIL OFL | Incrustadas según la licencia |

| Lectura crítica | Dominio público | A1–B2: adaptaciones propias; C1–C2: fragmentos breves del original de autores fallecidos hace más de 70 años (Kafka †1924, Goethe, Austen, Dickens, La Fontaine, Proust †1922, Cervantes, Bécquer) |
| Noticias de práctica (traducción) | Propia | Textos de estilo periodístico redactados para el ejercicio; no son noticias reales |

Las explicaciones de inglés, francés y español se redactaron desde cero: tratan los mismos temas que las páginas
enlazadas (la gramática no tiene dueño), pero no siguen su texto, su orden de ejemplos ni sus ejercicios.

**Enlazar** a una página pública es lícito en general; lo que no se debe hacer es presentar el contenido ajeno
como propio, incrustarlo en marcos (iframe) cuando el sitio no lo permite o saltarse muros de pago.

## 2. Requisitos de Google AdSense que afectan a esta web

1. **Contenido propio y suficiente.** AdSense rechaza sitios que solo agregan enlaces. La web aporta
   unidades, cuestionarios, conjugador y fichas propias; el directorio de enlaces es un complemento.
2. **Ubicación de los anuncios.** Un único bloque al final del contenido, rotulado «Publicidad», lejos de
   los botones de respuesta, las flechas de navegación y los vídeos, para evitar clics accidentales.
   No se colocan anuncios en ventanas emergentes ni en el aviso de cookies.
3. **Política de privacidad** que mencione a Google como tercero y el uso de cookies publicitarias, con enlace a
   «Cómo utiliza Google la información de los sitios que usan sus servicios». `modules/legal.js` la añade
   automáticamente cuando la publicidad está activa.
4. **Consentimiento.** Para visitantes del EEE, Reino Unido y Suiza, Google exige una plataforma de gestión de
   consentimiento (CMP) **certificada por Google e integrada en el IAB TCF**. Opciones:
   - usar la CMP gratuita de Google («Privacidad y mensajes» en AdSense) y poner `ADS.cmpGoogle = true`;
   - o una CMP certificada de terceros (p. ej. iubenda, Cookiebot) y `ADS.cmpGoogle = true`.
   El aviso propio de `modules/anuncios.js` (aceptar / rechazar, Consent Mode v2, nada se carga sin
   consentimiento) es suficiente para tráfico de otras regiones, como Colombia, donde rige la Ley 1581 de 2012.
5. **ads.txt** en la raíz del dominio (plantilla: `ads.txt.example`).
6. **Contacto del titular** visible: rellene `LEGAL.contacto` en `modules/legal.js` con un formulario o un correo
   creado para el proyecto (no el personal) y `LEGAL.repositorio` si el código es público.
7. **Audiencia infantil.** Si la web se dirige a menores de 13 años, hay que marcarla como tal en AdSense
   (anuncios no personalizados).

## 3. Activar la publicidad

1. Publique `dist/deutsch-atelier.html` como `index.html` en un dominio propio con HTTPS.
2. Solicite AdSense y espere la aprobación del sitio.
3. En `modules/anuncios.js`: `client: 'ca-pub-…'`, `slot: '…'` (bloque adaptable) y, si procede, `cmpGoogle: true`.
4. Rellene `LEGAL.contacto` y revise la fecha `LEGAL.actualizado` en `modules/legal.js`.
5. `python tools/build.py --check` y suba de nuevo el HTML.
6. Suba `ads.txt` a la raíz.

El paquete SCORM nunca lleva publicidad: el build elimina el script, y además el módulo no se ejecuta si detecta
una API de LMS o si el archivo se abre desde el disco.

## 4. Cuenta de Google (progreso)
Si se activa `FIREBASE` en `modules/cuenta.js`, la política de privacidad añade automáticamente qué datos se
guardan (nombre, correo e identificador de Google; progreso) y dónde (Google Firebase). Cada usuario solo puede
leer y escribir su propio documento con las reglas de Firestore indicadas en el archivo. En Europa, el
consentimiento de cookies no cubre el inicio de sesión: es una función solicitada por el usuario.

## 5. Avisos de infracción

El apartado «Derechos de autor» del pie incluye un procedimiento: quien considere que un contenido o enlace vulnera
sus derechos puede escribir al contacto del titular, que lo retirará o corregirá con prontitud.
