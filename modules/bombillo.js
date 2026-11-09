/* =====================================================================
   EL BOMBILLO · ayuda rápida «¿Qué quieres mejorar?»
   Estrategias respaldadas por la investigación en psicología cognitiva y
   adquisición de segundas lenguas, más métodos difundidos por políglotas
   conocidos (parafraseados, no citados literalmente). Cada problema enlaza
   con la herramienta de la app que mejor lo trabaja.
   ===================================================================== */
(function(){
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const REF={
 cepeda:'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380. doi:10.1037/0033-2909.132.3.354',
 roediger:'Roediger, H. L. y Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249–255. doi:10.1111/j.1467-9280.2006.01693.x',
 dunlosky:'Dunlosky, J. et al. (2013). Improving students\' learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4–58. doi:10.1177/1529100612453266',
 krashen:'Krashen, S. (1982). Principles and Practice in Second Language Acquisition. Pergamon.',
 swain:'Swain, M. (1985). Communicative competence: some roles of comprehensible input and comprehensible output. En Gass y Madden (eds.), Input in Second Language Acquisition. Newbury House.',
 schmidt:'Schmidt, R. (1990). The role of consciousness in second language learning. Applied Linguistics, 11(2), 129–158.',
 nation:'Nation, I. S. P. (2013). Learning Vocabulary in Another Language (2.ª ed.). Cambridge University Press.',
 hu:'Hu, M. y Nation, I. S. P. (2000). Unknown vocabulary density and reading comprehension. Reading in a Foreign Language, 13(1), 403–430.',
 logan:'Logan, J. S., Lively, S. E. y Pisoni, D. B. (1991). Training Japanese listeners to identify English /r/ and /l/. JASA, 89(2), 874–886.',
 gollwitzer:'Gollwitzer, P. M. (1999). Implementation intentions. American Psychologist, 54(7), 493–503.',
 rohrer:'Rohrer, D. y Taylor, K. (2007). The shuffling of mathematics problems improves learning. Instructional Science, 35, 481–498.',
 deci:'Deci, E. L. y Ryan, R. M. (2000). The "what" and "why" of goal pursuits. Psychological Inquiry, 11(4), 227–268.',
 paivio:'Paivio, A. (1986). Mental Representations: A Dual Coding Approach. Oxford University Press.'
};
const AYUDA=[
 ['vocab','Olvido el vocabulario',[
   ['Repetición espaciada','Repase cada palabra justo antes de olvidarla: al día siguiente, a los 3 días, a la semana, al mes. Espaciar las sesiones mejora mucho el recuerdo frente a estudiarlo todo de una vez.','cepeda'],
   ['Práctica de recuperación','No relea la lista: tápela e intente recordar. Recordar activamente consolida más que volver a estudiar.','roediger'],
   ['Palabras en contexto y en bloques','Aprenda colocaciones completas («tomar una decisión», «eine Entscheidung treffen») y frases de ejemplo, no palabras sueltas.','nation']],
  'Kató Lomb, intérprete en dieciséis lenguas, aconsejaba aprender el vocabulario leyendo libros que de verdad interesen, porque la memoria retiene lo que tiene sentido.',[['tarjetas','Tarjetas (alemán)'],['palabras','Léxico por campos']]],
 ['gram','La gramática no se me queda',[
   ['Práctica intercalada','Mezcle tipos de ejercicios (pasado, futuro, subjuntivo) en lugar de hacer veinte del mismo: obliga a decidir qué regla aplicar.','rohrer'],
   ['Notar la forma','Antes de memorizar la regla, subraye la estructura en textos reales: lo que se percibe conscientemente se aprende mejor.','schmidt'],
   ['Explicárselo a uno mismo','Pregúntese «¿por qué aquí va imperfecto?»: la interrogación elaborativa y la autoexplicación son técnicas de eficacia moderada a alta.','dunlosky']],
  'Muchos políglotas recomiendan aprender la gramática a partir de frases modelo que se saben de memoria y se van variando, en lugar de tablas aisladas.',[['temas','Gramática'],['conj','Conjugador']]],
 ['oir','No entiendo cuando escucho',[
   ['Entrada comprensible','Escuche material que entienda casi del todo, un poco por encima de su nivel: es la base de la adquisición.','krashen'],
   ['Escucha con transcripción','Primero sin texto, luego con transcripción, y otra vez sin ella. Así conecta sonido y forma escrita.','schmidt'],
   ['Escucha extensiva diaria','Mucho volumen de audio fácil (pódcasts graduados, noticias lentas) y algo de escucha intensiva frase a frase.','nation']],
  'Alexander Argüelles popularizó el «shadowing»: repetir en voz alta, caminando, lo que se escucha con un leve retraso.',[['xvid','Vídeo y audio'],['pcult','Noticieros por variedad']]],
 ['hablar','Me bloqueo al hablar',[
   ['Producir para aprender','Hablar obliga a notar lo que no sabe decir; ese hueco dirige el aprendizaje.','swain'],
   ['Repetición de la tarea','Cuente la misma historia tres veces con menos tiempo cada vez (4, 3 y 2 minutos): gana fluidez sin cambiar de contenido.','nation'],
   ['Hablar solo','Describa en voz alta lo que hace durante el día: es práctica sin presión.','swain']],
  'Benny Lewis defiende hablar desde el primer día, aceptando errores, con frases preparadas sobre uno mismo.',[['pcura','Consejos de inmersión'],['plect','Lectura en voz alta']]],
 ['pron','Mi pronunciación',[
   ['Pares mínimos con muchas voces','Escuchar contrastes difíciles (ship / sheep, Hütte / Hüte) pronunciados por voces distintas mejora la percepción y la producción.','logan'],
   ['Escuchar antes de hablar','Si no oye la diferencia, difícilmente la producirá: entrene primero el oído.','logan'],
   ['Grabarse','Grábese leyendo un párrafo y compárelo con el audio original.','dunlosky']],
  'Una práctica habitual entre políglotas es imitar frases completas, con su entonación, antes que sonidos aislados.',[['lntool','Inventario AFI'],['plect','Lecturas con audio']]],
 ['escribir','Escribir bien',[
   ['Modelo, imitación, variación','Lea un texto modelo, imite su estructura con su propio contenido y luego cámbielo.','nation'],
   ['Corrección con retroalimentación','Escriba poco y a menudo, y pida corrección (docente, intercambio o herramientas como Write & Improve).','swain'],
   ['Traducción inversa','Traduzca un párrafo a su lengua y, días después, de vuelta a la lengua meta sin mirar; compare.','roediger']],
  'Luca Lampariello difundió la «traducción bidireccional» como método para interiorizar estructuras.',[['ptrad','Traducción sistemática'],['xrec','Recursos oficiales']]],
 ['leer','Leer me cuesta',[
   ['Lectura extensiva a su nivel','Para leer con placer hace falta conocer alrededor del 95–98 % de las palabras del texto; elija lecturas graduadas.','hu'],
   ['Pocas búsquedas','Busque solo las palabras que se repiten o impiden entender; las demás, deduzca.','nation'],
   ['Leer y escuchar a la vez','Combinar audio y texto refuerza la comprensión y la pronunciación.','paivio']],
  'Kató Lomb recomendaba empezar a leer novelas sencillas muy pronto, con un diccionario solo para lo imprescindible.',[['plect','Lectura crítica'],['pcura','Libros por nivel']]],
 ['motiv','Me falta constancia',[
   ['Intenciones de implementación','Formule el plan como «si es X, entonces hago Y»: «Si termino de cenar, repaso 10 tarjetas». Aumenta notablemente la probabilidad de cumplirlo.','gollwitzer'],
   ['Autonomía y sentido','La motivación dura más cuando elige usted el material y ve progreso real.','deci'],
   ['Metas pequeñas y visibles','Una unidad por semana, una lectura por nivel: registre el avance en «Mi progreso».','gollwitzer']],
  'Steve Kaufmann insiste en que la constancia nace del placer: escuchar y leer contenidos que de verdad le interesen.',[['pprog','Mi progreso'],['tiempos','Tiempo de aprendizaje']]],
 ['tiempo','No tengo tiempo',[
   ['Sesiones cortas y repartidas','Diez minutos diarios rinden más que una hora a la semana.','cepeda'],
   ['Aprovechar los tiempos muertos','Audio en desplazamientos; tarjetas en las esperas.','cepeda'],
   ['Doble codificación','Asocie palabra, imagen y sonido: se recuerda más con menos repeticiones.','paivio']],
  'Muchos políglotas planifican su estudio en bloques breves repartidos en el día en lugar de sesiones largas.',[['tiempos','Tiempo de aprendizaje'],['conj','Entrenamiento del conjugador']]]
];
const IR={tarjetas:'tarjetas',palabras:'palabras',temas:'temas',conj:'conj',xvid:'xvid',pcult:'pcult',pcura:'pcura',plect:'plect',lntool:'lntool',ptrad:'ptrad',xrec:'xrec',pprog:'pprog',tiempos:'tiempos'};
const b=document.createElement('button'); b.className='bulb'; b.id='bulbBtn'; b.title='¿Qué quieres mejorar?'; b.setAttribute('aria-haspopup','dialog');
b.innerHTML='<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.3 1 2.2h5.2c0-.9.4-1.7 1-2.2A6 6 0 0 0 12 3z"/></svg>';
const p=document.createElement('div'); p.className='bulb-pan'; p.setAttribute('role','dialog'); p.setAttribute('aria-label','Ayuda rápida');
document.body.appendChild(b); document.body.appendChild(p);
let sel=null;
function pinta(){
  if(!sel){ p.innerHTML='<div class="bp-h"><b>¿Qué quieres mejorar?</b><button class="bp-x" aria-label="Cerrar">✕</button></div><p class="bp-s">Elija la dificultad: le propondré estrategias con respaldo científico y consejos de políglotas.</p>'
    +'<div class="bp-ops">'+AYUDA.map(([k,t])=>'<button data-a="'+k+'">'+t+'</button>').join('')+'</div>'; }
  else { const A=AYUDA.find(x=>x[0]===sel);
    p.innerHTML='<div class="bp-h"><button class="bp-v" aria-label="Volver">‹</button><b>'+A[1]+'</b><button class="bp-x" aria-label="Cerrar">✕</button></div>'
     +A[2].map(([t,x,r])=>'<div class="bp-e"><b>'+t+'</b><p>'+x+'</p><small title="'+esc(REF[r])+'">'+esc(REF[r].split('.')[0]+'.'+(REF[r].match(/\((\d{4})\)/)||['',''])[0])+'</small></div>').join('')
     +'<div class="bp-p"><span>Consejo de políglota</span><p>'+A[3]+'</p></div>'
     +'<div class="bp-go">'+A[4].map(([k,t])=>'<button data-g="'+k+'">'+t+' ›</button>').join('')+'</div>'
     +'<details class="bp-ref"><summary>Referencias</summary><ul>'+[...new Set(A[2].map(e=>e[2]))].map(r=>'<li>'+esc(REF[r])+'</li>').join('')+'</ul></details>'; }
  p.querySelectorAll('[data-a]').forEach(x=>x.onclick=()=>{ sel=x.dataset.a; pinta(); });
  const v=p.querySelector('.bp-v'); if(v) v.onclick=()=>{ sel=null; pinta(); };
  p.querySelector('.bp-x').onclick=()=>abre(false);
  p.querySelectorAll('[data-g]').forEach(x=>x.onclick=()=>{ abre(false); const g=IR[x.dataset.g];
    const L=window.IDIOMAS?IDIOMAS.get():'de';
    if(g==='lntool'){ if(window.xGo) xGo('lntool','t:afi'); return; }
    if(L!=='de'&&g==='temas') return goDestino('xtemas');
    if(L!=='de'&&(g==='tarjetas'||g==='palabras')) return goDestino('xrec');
    if(L==='de'&&/^x/.test(g)) return goDestino('lectura');
    goDestino(g); });
}
function abre(v){ if(v&&window.MODOBTN) MODOBTN.abre(false); if(v&&window.LENGUABTN) LENGUABTN.abre(false); p.classList.toggle('on',v); b.classList.toggle('on',v); b.setAttribute('aria-expanded',v); if(v) pinta(); }
b.onclick=e=>{ e.stopPropagation(); abre(!p.classList.contains('on')); };
p.addEventListener('click',e=>e.stopPropagation());
document.addEventListener('click',()=>{ if(p.classList.contains('on')) abre(false); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') abre(false); });
window.BOMBILLO={abre};
})();
