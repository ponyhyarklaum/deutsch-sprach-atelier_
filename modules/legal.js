/* =====================================================================
   PIE DE PÁGINA LEGAL · Aviso legal · Derechos de autor · Privacidad y cookies
   Los datos del titular se editan en LEGAL (abajo). Los textos describen lo
   que la app hace realmente: no recoge datos personales, no usa cookies
   propias ni analítica, guarda preferencias en el navegador y, dentro de
   un LMS, envía el progreso a esa plataforma mediante SCORM. Si se activa
   la publicidad (modules/anuncios.js), el texto de privacidad añade la
   sección de Google AdSense automáticamente.
   Revisar con un profesional o con un generador especializado (p. ej. iubenda)
   antes de una publicación comercial.
   ===================================================================== */
(function(){
const LEGAL={
  titular:'Juan Fernando Martínez Cristancho',
  proyecto:'Deutsch · Atelier',
  pais:'Colombia',
  contacto:'',              /* correo o formulario de contacto del titular; si queda vacío se remite al repositorio */
  repositorio:'https://github.com/ponyhyarklaum/deutsch-sprach-atelier_',           /* URL pública del repositorio, si existe */
  anio:2026,
  actualizado:'8 de noviembre de 2026'
};
const contacto=()=>LEGAL.contacto
  ? '<a href="'+(/^https?:/.test(LEGAL.contacto)?LEGAL.contacto:'mailto:'+LEGAL.contacto)+'">'+LEGAL.contacto+'</a>'
  : (LEGAL.repositorio?'el repositorio del proyecto (<a href="'+LEGAL.repositorio+'" target="_blank" rel="noopener">'+LEGAL.repositorio+'</a>)':'los canales de contacto publicados junto al proyecto');
const COPY='© '+LEGAL.anio+' '+LEGAL.titular+'. Todos los derechos reservados.';
const anuncios=()=>!!(window.ADS&&window.ADS.activo);
const cuenta=()=>!!(window.CUENTA&&window.CUENTA.fb()&&window.PROG&&PROG.activa());

const TEXT={
 aviso:{t:'Aviso legal',h:()=>`
<h3>1. Titular</h3>
<p><b>${LEGAL.proyecto}</b> es un proyecto educativo personal e independiente de <b>${LEGAL.titular}</b> (${LEGAL.pais}). No pertenece a ninguna institución educativa ni está vinculado a ella. Contacto: ${contacto()}.</p>
<h3>2. Objeto</h3>
<p>La página ofrece materiales gratuitos para aprender <b>alemán, inglés, francés y español</b> de A1 a C2, con un enfoque práctico (gramática, léxico, ejercicios, lectura crítica de obras de dominio público, traducción, conjugador) y otro lingüístico (fonética, morfología, sintaxis, léxico, ortografía, dialectología), además de enlaces a recursos públicos y oficiales. Su uso no requiere registro ni pago.${anuncios()?' La versión web se financia con publicidad (véase «Privacidad y cookies»).':''}</p>
<h3>3. Condiciones de uso</h3>
<p>Al usar la página, la persona usuaria se compromete a hacerlo de forma lícita y con fines personales o educativos, y a no alterar, copiar en bloque ni redistribuir sus contenidos sin autorización (véase «Derechos de autor»).</p>
<h3>4. Responsabilidad</h3>
<p>Los contenidos se elaboran con cuidado y se revisan con obras de referencia, pero pueden contener errores; no sustituyen la orientación de un docente ni garantizan la aprobación de ningún examen oficial. El titular no responde del contenido, la disponibilidad ni las políticas de los sitios externos enlazados (DW, Goethe-Institut, ORF, SRF, Sprachportal, British Council, BBC, Cambridge English, Test-English, VOA, TV5MONDE, RFI, France Éducation international, Le Point du FLE, Larousse, Académie française, entre otros), que se abren en una pestaña nueva y pertenecen a sus responsables. Los tiempos de aprendizaje son orientativos.</p>
<h3>5. Marcas y obras citadas</h3>
<p>Los nombres de medios, instituciones, exámenes y obras citadas (Goethe-Zertifikat, ÖSD, fide, Cambridge English Qualifications, DELF, DALF, TCF, títulos de gramáticas y editoriales) pertenecen a sus titulares y se mencionan solo para identificar la fuente (uso nominativo), sin relación comercial, patrocinio ni afiliación. No se usan sus logotipos.</p>
<h3>6. Legislación</h3>
<p>Este aviso se rige por la legislación de ${LEGAL.pais}. Última actualización: ${LEGAL.actualizado}.</p>`},
 copy:{t:'Derechos de autor',h:()=>`
<p class="lg-big">${COPY}</p>
<h3>Qué está protegido</h3>
<p>Los textos explicativos, ejercicios, cuestionarios, relatos, selección y organización de los contenidos, el diseño y el código de <b>${LEGAL.proyecto}</b> son obra de ${LEGAL.titular} y están protegidos por la normativa de derechos de autor${LEGAL.pais==='Colombia'?' (Ley 23 de 1982 y Decisión Andina 351 de 1993)':''} y los tratados internacionales.</p>
<h3>Qué se permite</h3>
<p>Consultar y usar la página de forma libre y gratuita para aprender o enseñar; proyectarla en clase; enlazarla; citar fragmentos breves indicando la fuente («${LEGAL.proyecto}, ${LEGAL.titular}»).</p>
<h3>Qué requiere autorización</h3>
<p>Reproducir, distribuir, vender, adaptar o publicar en otro sitio el conjunto o partes sustanciales de los contenidos o del código.</p>
<h3>Material de terceros</h3>
<p>Las tipografías Inter, Tinos y UnifrakturMaguntia se usan bajo la SIL Open Font License. Los vídeos, pódcasts, noticias y páginas enlazados pertenecen a sus autores: la app solo los enlaza o, en el caso de YouTube, usa el reproductor oficial que los titulares permiten insertar; no descarga ni aloja copias. Las gramáticas citadas en «Grammatikbücher» y en «Para profundizar» se mencionan como referencia bibliográfica; no se reproduce su contenido. Las explicaciones, ejemplos y ejercicios de inglés, francés y español son de redacción propia y no copian los de las páginas enlazadas. En «Lectura crítica», los textos de A1 a B2 son adaptaciones propias de obras de dominio público y los de C1 y C2 son fragmentos breves de obras de dominio público (Kafka, Goethe, Austen, Dickens, La Fontaine, Proust, Cervantes, Bécquer). Las «noticias de práctica» de la sección de traducción son textos de redacción propia, no noticias reales.</p>
<h3>Avisos de infracción</h3>
<p>Si usted es titular de derechos y considera que algún contenido o enlace los vulnera, escriba a ${contacto()} indicando la obra y la ubicación; se retirará o corregirá con prontitud.</p>`},
 priv:{t:'Política de privacidad y cookies',h:()=>`
<h3>Resumen</h3>
<p><b>${LEGAL.proyecto} no recoge datos personales</b>: no hay registro, formularios, analítica ni cookies propias.${anuncios()?' La versión web muestra publicidad de Google AdSense <b>solo si usted lo acepta</b> (véase abajo).':' Esta copia no muestra publicidad.'}</p>
<h3>Responsable</h3>
<p>${LEGAL.titular} (${LEGAL.pais}). Contacto: ${contacto()}.</p>
<h3>Qué se guarda y dónde</h3>
<table class="endtable"><tr><th>Dato</th><th>Dónde</th><th>Para qué</th></tr>
<tr><td>Ajustes de lectura (fondo, letra, tamaño, interlineado) y lengua de estudio elegida</td><td>Solo en tu navegador (<code>localStorage</code>)</td><td>Recordar tus preferencias. Puedes borrarlos desde la configuración del navegador o con «Por defecto».</td></tr>
<tr><td>Progreso (cuestionarios, lecturas, traducciones)</td><td>En tu navegador (<code>localStorage</code>)${cuenta()?' y, si inicias sesión con Google, en tu cuenta (Google Firebase)':''}</td><td>Recuperar tu avance. Puedes exportarlo, importarlo o borrarlo en «Mi progreso».</td></tr>
${cuenta()?'<tr><td>Si inicias sesión: nombre, correo e identificador de tu cuenta de Google</td><td>Google Firebase Authentication</td><td>Identificarte para sincronizar el progreso. No se usan con otros fines ni se ceden a terceros.</td></tr>':''}
${anuncios()?'<tr><td>Tu decisión sobre la publicidad (aceptada o rechazada) y la fecha</td><td>Solo en tu navegador (<code>localStorage</code>)</td><td>No volver a preguntarte en cada visita.</td></tr>':''}
<tr><td>Progreso (cuestionarios superados, última página)</td><td>Si usas la app dentro de una plataforma educativa (Moodle u otra) como paquete SCORM, la guarda <b>esa plataforma</b>; fuera de ella, no se guarda</td><td>Continuar donde lo dejaste. Su tratamiento corresponde a la entidad que administra la plataforma.</td></tr>
<tr><td>Voz de lectura</td><td>Motor de voz de tu dispositivo</td><td>Leer palabras y textos en alto; no se envía nada al titular.</td></tr></table>
<h3>Cookies y servicios de terceros</h3>
<p>La app no instala cookies propias. Algunos servicios externos solo se cargan si tú lo decides:</p>
<p><b>YouTube</b> (Google): los vídeos se insertan desde el dominio de privacidad reforzada <code>youtube-nocookie.com</code> y únicamente cuando pulsas «Reproducir aquí»; a partir de ese momento se aplica la política de privacidad de Google. <b>Enlaces externos</b>: al abrirlos sales de la app y rigen las políticas de cada sitio.</p>
${anuncios()?`<h3>Publicidad (Google AdSense)</h3>
<p>La versión web muestra anuncios servidos por Google Ireland Ltd. / Google LLC. Antes de cargar nada, un aviso te pide el consentimiento; si rechazas, no se carga el código de Google ni se instala ninguna cookie publicitaria. Si aceptas, Google y sus socios pueden usar cookies e identificadores para mostrar anuncios (personalizados o no), limitar su frecuencia y medir su rendimiento. Más información en <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">Cómo utiliza Google la información de los sitios que usan sus servicios</a> y en <a href="https://adssettings.google.com" target="_blank" rel="noopener">Configuración de anuncios de Google</a>. Puedes retirar o cambiar tu consentimiento en cualquier momento con «Preferencias de cookies», al pie de la página.</p>
<p>La publicidad nunca aparece en el paquete SCORM ni dentro de plataformas educativas, ni junto a los vídeos insertados o los botones de respuesta.</p>`:''}
<h3>Tus derechos</h3>
<p>Como la app no recopila datos personales, el titular no conserva información sobre ti. Si consideras que se ha tratado algún dato tuyo, puedes ejercer tus derechos de acceso, rectificación, supresión y oposición${LEGAL.pais==='Colombia'?' (Ley 1581 de 2012 de protección de datos personales)':''} escribiendo a ${contacto()}.</p>
<p>Última actualización: ${LEGAL.actualizado}.</p>`}
};

/* --- pie de página --- */
const foot=document.querySelector('.content > footer, .main footer');
const bar=document.createElement('div');
bar.className='lg-foot';
bar.innerHTML='<span class="lg-copy">'+COPY+'</span>'
  +'<nav class="lg-links" aria-label="Información legal">'
  +'<button data-lg="aviso">Aviso legal</button><button data-lg="copy">Derechos de autor</button><button data-lg="priv">Privacidad y cookies</button></nav>';
if(foot) foot.after(bar); else (document.querySelector('.content')||document.body).appendChild(bar);

/* --- ventana con el texto --- */
const dlg=document.createElement('dialog');
dlg.className='lg-dlg'; dlg.setAttribute('aria-labelledby','lgTitle');
document.body.appendChild(dlg);
function open(k){
  const x=TEXT[k];
  dlg.innerHTML='<div class="lg-head"><h2 id="lgTitle">'+x.t+'</h2><button class="lg-x" aria-label="Cerrar">✕</button></div>'
   +'<div class="lg-tabs">'+Object.entries(TEXT).map(([kk,v])=>'<button data-lg="'+kk+'"'+(kk===k?' class="on"':'')+'>'+v.t+'</button>').join('')+'</div>'
   +'<div class="lg-body">'+x.h()+'</div>';
  dlg.querySelector('.lg-x').onclick=()=>dlg.close();
  dlg.querySelectorAll('[data-lg]').forEach(b=>b.onclick=()=>open(b.dataset.lg));
  if(!dlg.open) dlg.showModal();
  dlg.querySelector('.lg-body').scrollTop=0;
}
dlg.addEventListener('click',e=>{ if(e.target===dlg) dlg.close(); });
bar.querySelectorAll('[data-lg]').forEach(b=>b.onclick=()=>open(b.dataset.lg));
window.legalOpen=open;
})();
