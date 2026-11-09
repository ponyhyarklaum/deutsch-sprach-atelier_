/* =====================================================================
   CURSOS · catálogo y página de presentación de cada nivel (estilo
   plataforma de cursos: miga de pan, ficha lateral fija, programa en
   acordeón) con FICHA TÉCNICA ACADÉMICA:
     · requisitos previos y dedicación de tiempo
     · temario detallado
     · criterios de evaluación del examen oficial de certificación
     · hitos para dar el nivel por completado y aprobado (con progreso real)
   Vale para las cuatro lenguas. Páginas: cursos · curso (sub 'c:A1').
   Los criterios de examen son un resumen orientativo de la normativa
   publicada por cada institución; la normativa vigente prevalece.
   ===================================================================== */
(function(){
const SUBSET=window.SUBSET=window.SUBSET||{};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LV=['A1','A2','B1','B2','C1','C2'];
const L=()=>(window.IDIOMAS?IDIOMAS.get():'de');
const NOM={de:'Alemán',en:'Inglés',fr:'Francés',es:'Español'};
const NAT={de:'Deutsch',en:'English',fr:'Français',es:'Español'};
const col=k=>NIV[NIVI[k]].c;
const CS={niv:'A1',abierto:{gram:true}};
Object.assign(PAGES,{cursos:['Cursos','cu','curso'],curso:['Curso','cu','curso']});
SECS.push('curso');
Object.assign(IC,{cursos:'<path d="M3 6.5 12 3l9 3.5-9 3.5z"/><path d="M7 8.5v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5"/><path d="M21 6.5V12"/>'});
Object.assign(MINI,{cursos:'cursos',curso:'cursos'});
SUBSET.curso=s=>{ CS.niv=s.slice(2); };
HSUB.curso=s=>{ SUBSET.curso(s); render('curso'); };

/* ---------- certificación oficial: estructura y criterios ---------- */
const GOE='https://www.goethe.de/ins/co/es/spr/prf/';
const CAMB='https://www.cambridgeenglish.org/exams-and-tests/qualifications/';
const FEI='https://www.france-education-international.fr/diplome/';
const DELE='https://examenes.cervantes.es/';
const CERT={
 de:{inst:'Goethe-Institut',
  A1:{n:'Goethe-Zertifikat A1: Start Deutsch 1',u:GOE+'gzsd1.cfm',p:[['Lesen','comprensión de lectura'],['Hören','comprensión auditiva'],['Schreiben','formularios y mensajes breves'],['Sprechen','presentarse, preguntar y pedir, en grupo']],a:'Se aprueba con 60 de 100 puntos en el conjunto del examen, habiendo realizado la parte escrita y la oral.'},
  A2:{n:'Goethe-Zertifikat A2',u:GOE+'gzsd2.cfm',p:[['Lesen',''],['Hören',''],['Schreiben','mensajes y correos breves'],['Sprechen','preguntas, relato breve y planificación conjunta']],a:'Se aprueba con 60 de 100 puntos en el conjunto del examen, habiendo realizado la parte escrita y la oral.'},
  B1:{n:'Goethe-Zertifikat B1',u:GOE+'gzb1.cfm',p:[['Lesen','30 ítems'],['Hören','30 ítems'],['Schreiben','100 puntos, dos correctores'],['Sprechen','100 puntos, dos examinadores']],a:'Examen modular: cada módulo se aprueba con al menos 60 puntos (60 %) y puede presentarse por separado o junto con los demás.',f:['Goethe-Institut · Durchführungsbestimmungen B1','https://www.goethe.de/resources/files/pdf315/durchfuehrungsbestimmungen-goethe-zertifikat-b1-erwachsene-und-jugendliche-v2.pdf']},
  B2:{n:'Goethe-Zertifikat B2',u:GOE+'gzb2.cfm',p:[['Lesen',''],['Hören',''],['Schreiben','opinión y correo formal'],['Sprechen','presentación y discusión']],a:'Examen modular: cada módulo se aprueba con al menos el 60 % y puede presentarse por separado.'},
  C1:{n:'Goethe-Zertifikat C1',u:GOE+'gzc1.cfm',p:[['Lesen',''],['Hören',''],['Schreiben','texto argumentativo y texto formal'],['Sprechen','exposición y discusión']],a:'Examen modular: cada módulo se aprueba con al menos el 60 % y puede presentarse por separado.'},
  C2:{n:'Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom',u:GOE+'gzc2.cfm',p:[['Lesen',''],['Hören',''],['Schreiben','textos complejos y reformulación'],['Sprechen','exposición y debate']],a:'Examen modular: cada módulo se aprueba con al menos el 60 % y puede presentarse por separado.'}},
 en:{inst:'Cambridge English',
  A1:{n:'Sin examen general de A1 para adultos',u:CAMB+'key/',p:[['A2 Key','certifica el nivel A1 con 100–119 puntos en la Cambridge English Scale'],['Test your English','prueba de nivel gratuita en línea']],a:'Para acreditar A1, el A2 Key emite certificado de nivel A1 si la puntuación global está entre 100 y 119.'},
  A2:{n:'A2 Key',u:CAMB+'key/',p:[['Reading & Writing','50 %'],['Listening','25 %'],['Speaking','25 %, en parejas']],a:'Resultado en la Cambridge English Scale: 120–139 certifica A2 (desde 120); 140 o más, B1; 100–119, A1.'},
  B1:{n:'B1 Preliminary',u:CAMB+'preliminary/',p:[['Reading','25 %'],['Writing','25 %'],['Listening','25 %'],['Speaking','25 %, en parejas']],a:'Aprobado con 140 o más en la Cambridge English Scale (grado C, 140–152); 160 o más certifica B2.'},
  B2:{n:'B2 First',u:CAMB+'first/',p:[['Reading & Use of English','dos destrezas, 40 %'],['Writing','20 %'],['Listening','20 %'],['Speaking','20 %, en parejas']],a:'Aprobado con 160 o más en la Cambridge English Scale; 180 o más certifica C1.'},
  C1:{n:'C1 Advanced',u:CAMB+'advanced/',p:[['Reading & Use of English','dos destrezas, 40 %'],['Writing','20 %'],['Listening','20 %'],['Speaking','20 %, en parejas']],a:'Aprobado con 180 o más en la Cambridge English Scale; 200 o más certifica C2.'},
  C2:{n:'C2 Proficiency',u:CAMB+'proficiency/',p:[['Reading & Use of English','dos destrezas, 40 %'],['Writing','20 %'],['Listening','20 %'],['Speaking','20 %, en parejas']],a:'Aprobado con 200 o más en la Cambridge English Scale.'}},
 fr:{inst:'France Éducation international',
  A1:{n:'DELF A1',u:FEI+'delf-tout-public/niveau-a1',p:[['Compréhension de l\'oral','25 puntos'],['Compréhension des écrits','25 puntos'],['Production écrite','25 puntos'],['Production orale','25 puntos']],a:'Aprobado con 50/100, con un mínimo de 5/25 en cada prueba. El diploma no caduca.'},
  A2:{n:'DELF A2',u:FEI+'delf-tout-public/niveau-a2',p:[['Compréhension de l\'oral','25 puntos'],['Compréhension des écrits','25 puntos'],['Production écrite','25 puntos'],['Production orale','25 puntos']],a:'Aprobado con 50/100, con un mínimo de 5/25 en cada prueba.'},
  B1:{n:'DELF B1',u:FEI+'delf-tout-public/niveau-b1',p:[['Compréhension de l\'oral','25 min · 25 puntos'],['Compréhension des écrits','45 min · 25 puntos'],['Production écrite','45 min · 25 puntos'],['Production orale','10 min de preparación + 15 min · 25 puntos']],a:'Aprobado con 50/100, con un mínimo de 5/25 en cada prueba.',f:['Ficha de presentación DELF B1 (DAFPIC Nancy-Metz)','https://dafpic.ac-nancy-metz.fr/dafpic/site_cel/wp-content/uploads/2023/03/Fiche-presentation-DELF-B1-29.03.23.pdf']},
  B2:{n:'DELF B2',u:FEI+'delf-tout-public/niveau-b2',p:[['Compréhension de l\'oral','25 puntos'],['Compréhension des écrits','25 puntos'],['Production écrite','texto argumentativo · 25 puntos'],['Production orale','defensa de un punto de vista · 25 puntos']],a:'Aprobado con 50/100, con un mínimo de 5/25 en cada prueba.'},
  C1:{n:'DALF C1',u:FEI+'dalf',p:[['Compréhension de l\'oral','25 puntos'],['Compréhension des écrits','25 puntos'],['Production écrite','síntesis y ensayo · 25 puntos'],['Production orale','exposición y debate · 25 puntos']],a:'Aprobado con 50/100, con un mínimo de 5/25 en cada prueba.'},
  C2:{n:'DALF C2',u:FEI+'dalf',p:[['Compréhension et production orales','50 puntos'],['Compréhension et production écrites','50 puntos']],a:'Aprobado con 50/100, con un mínimo de 10/50 en cada una de las dos pruebas.'}},
 es:{inst:'Instituto Cervantes',
  A1:{n:'DELE A1',u:DELE,p:[['Comprensión de lectura','25 puntos · grupo 1'],['Expresión e interacción escritas','25 puntos · grupo 1'],['Comprensión auditiva','25 puntos · grupo 2'],['Expresión e interacción orales','25 puntos · grupo 2']],a:'Apto con al menos 30 de 50 puntos en cada uno de los dos grupos de pruebas; un total alto no compensa un grupo por debajo de 30.',f:['Instituto Cervantes · Guía del examen DELE A1','https://agenda.cervantes.es/sites/default/files/DELE_A1_v2020_Gu%C3%ADa%20de%20examen.pdf']},
  A2:{n:'DELE A2',u:DELE,p:[['Comprensión de lectura','25 · grupo 1'],['Expresión e interacción escritas','25 · grupo 1'],['Comprensión auditiva','25 · grupo 2'],['Expresión e interacción orales','25 · grupo 2']],a:'Apto con al menos 30 de 50 puntos en cada grupo de pruebas.'},
  B1:{n:'DELE B1',u:DELE,p:[['Comprensión de lectura','25 · grupo 1'],['Expresión e interacción escritas','25 · grupo 1'],['Comprensión auditiva','25 · grupo 2'],['Expresión e interacción orales','25 · grupo 2']],a:'Apto con al menos 30 de 50 puntos en cada grupo de pruebas.'},
  B2:{n:'DELE B2',u:DELE,p:[['Comprensión de lectura','25 · grupo 1'],['Expresión e interacción escritas','25 · grupo 1'],['Comprensión auditiva','25 · grupo 2'],['Expresión e interacción orales','25 · grupo 2']],a:'Apto con al menos 30 de 50 puntos en cada grupo de pruebas.'},
  C1:{n:'DELE C1',u:DELE,p:[['Comprensión de lectura y uso de la lengua',''],['Comprensión auditiva y uso de la lengua',''],['Destrezas integradas: comprensión auditiva y expresión escrita',''],['Destrezas integradas: comprensión de lectura y expresión oral','']],a:'Las pruebas se agrupan en dos bloques y se exige el 60 % en cada uno (consulte la guía de examen vigente).'},
  C2:{n:'DELE C2',u:DELE,p:[['Uso de la lengua, comprensión de lectura y auditiva',''],['Destrezas integradas: expresión e interacción escritas',''],['Destrezas integradas: expresión e interacción orales','']],a:'Se exige el 60 % en cada grupo de pruebas (consulte la guía de examen vigente).'}}
};
const QUIEN={
 A1:['Personas que empiezan desde cero','Viajeros que necesitan desenvolverse en situaciones básicas','Estudiantes que preparan su primer certificado oficial'],
 A2:['Quien ha terminado A1 o tiene conocimientos sueltos que quiere ordenar','Estudiantes de programas que exigen A2 (visados, intercambios, primeros cursos universitarios)'],
 B1:['Quien quiere ser autónomo en viajes, estudios y trabajo','Candidatos a becas, prácticas o programas que exigen B1','Profesores y estudiantes de lenguas que consolidan el nivel umbral'],
 B2:['Futuros estudiantes universitarios en el extranjero (B2 es el requisito habitual)','Profesionales que trabajan en la lengua','Quien prepara un examen de certificación de nivel avanzado'],
 C1:['Estudiantes de posgrado y profesionales en entornos académicos','Traductores, intérpretes y docentes en formación','Quien quiere expresarse con precisión y matiz'],
 C2:['Docentes de lengua, traductores y lingüistas','Quien busca un dominio próximo al de un hablante culto','Investigadores que leen y escriben textos especializados']
};
const PROX={A1:'A2',A2:'B1',B1:'B2',B2:'C1',C1:'C2',C2:null};
const ANT={A1:null,A2:'A1',B1:'A2',B2:'B1',C1:'B2',C2:'C1'};

/* ---------- datos por lengua ---------- */
function horasNivel(l,k){
  if(l==='de') return HDE[k]||[0,0];
  const D=IDIOMAS.data(l); return D?D.HORAS[k]:[0,0];
}
const fh=h=>h?(h[0]+(h[1]?(h[1]!==h[0]?'–'+h[1]:''):'+')+' h'+(h[2]?'*':'')):'';
function delta(l,k){ const a=horasNivel(l,k), p=ANT[k]?horasNivel(l,ANT[k]):[0,0];
  const lo=Math.max(0,a[0]-p[0]), hi=Math.max(lo,(a[1]||Math.round(a[0]*1.2))-(p[1]||p[0])); return [lo,hi]; }
const fd=d=>d[0]===d[1]?d[0]+' h':d[0]+'–'+d[1]+' h';
const fs=(d,x)=>{ const a=Math.max(1,Math.round(d[0]/x)), b=Math.max(1,Math.round(d[1]/x)); return (a===b?a:a+'–'+b)+' semanas'; };
function unidades(l,k){
  if(l==='de') return (CURR[k]?CURR[k].gram:[]).map(id=>{ const t=GRAM.find(g=>g.id===id); return t?{id,t:t.t,sub:t.sub,h:(typeof TDE!=='undefined'&&TDE[id]?TDE[id][0]:null),q:(GSTAT[id]||{}).best}:null; }).filter(Boolean);
  const D=IDIOMAS.data(l); return D.U.filter(u=>u.lvl===k).map(u=>({id:u.id,t:u.t,sub:u.sub,h:u.h,q:PROG.get('quiz',u.id)}));
}
const can=(l,k)=>l==='de'?NIV[NIVI[k]].d:(IDIOMAS.data(l).CAN[k]||NIV[NIVI[k]].d);
const fuente=l=>l==='de'?HDE_FUENTE:IDIOMAS.data(l).FUENTE;
function hitos(l,k){
  const U=unidades(l,k), ok=U.filter(u=>(u.q||0)>=60).length;
  const lec=(LECT[l]||[]).filter(r=>r.lvl===k), tr=(TRAD[l]||[]).filter(t=>t.lvl===k);
  const H=[['Gramática','Superar con 60 % o más el cuestionario de las '+U.length+' unidades',ok,U.length]];
  if(lec.length) H.push(['Lectura crítica','Comprensión de «'+lec[0].obra+'» con 60 % o más',lec.filter(r=>(PROG.get('lect',r.id)||0)>=60).length,lec.length]);
  if(tr.length) H.push(['Traducción','Cubrir el 60 % de los términos clave',tr.filter(t=>(PROG.get('trad',t.id)||0)>=60).length,tr.length]);
  if(l==='de'){ const st=storiesNivel(k); if(st.length) H.push(['Relatos','Leer y escuchar los relatos del nivel',st.filter(([s])=>nvHecho('story',s.id)).length,st.length]);
    H.push(['Simulacro','Realizar el simulacro de examen del nivel',nvHecho('pruef',k)?1:0,1]); }
  H.push(['Autoevaluación','Me siento capaz de lo que describe el nivel (marcar a mano)',PROG.get('hito',l+'-'+k)?1:0,1,'manual']);
  return H;
}
function avance(l,k){ const H=hitos(l,k); const t=H.reduce((a,h)=>a+h[3],0), d=H.reduce((a,h)=>a+Math.min(h[2],h[3]),0); return {pct:t?Math.round(d/t*100):0,todos:H.every(h=>h[2]>=h[3])}; }
const nombreNivel=k=>NIV[NIVI[k]].n;

/* ---------- vistas ---------- */
const ico={
 reloj:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',libro:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
 ritmo:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',lupa:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
 cert:'<circle cx="12" cy="9" r="6"/><path d="m9 14-2 7 5-3 5 3-2-7"/>',monitor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="m10 8 4 2-4 2z"/>',
 ok:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',pluma:'<path d="M4 20 14 10M14 10l4-6 2 2-6 4M4 20l3-1"/>'};
const svg=k=>'<svg viewBox="0 0 24 24">'+ico[k]+'</svg>';
function miga(items){ return '<nav class="cu-crumb" aria-label="Ruta">'+items.map((x,i)=>i<items.length-1?'<button data-cgo="'+x[1]+'">'+esc(x[0])+'</button><span>›</span>':'<b>'+esc(x[0])+'</b>').join('')+'</nav>'; }

function vCursos(){
  const l=L();
  return '<div class="cu-wrap">'+miga([[NOM[l],'home'],['Cursos','']])
   +'<header class="cu-head"><h1 class="cu-h1">Cursos de '+NOM[l].toLowerCase()+'</h1>'
   +'<p class="cu-lead">Seis cursos en progresión lineal, del primer contacto con la lengua al dominio. Cada curso tiene su ficha técnica: requisitos y horas, temario, criterios del examen oficial y condiciones para darlo por aprobado.</p></header>'
   +'<div class="cu-cat">'+LV.map(k=>{ const a=avance(l,k), U=unidades(l,k), c=CERT[l][k];
     return '<button class="cu-card" data-cn="'+k+'" style="--sc:'+col(k)+'"><div class="cu-band"><span class="cu-k">'+k+'</span>'+(a.todos?'<span class="cu-done">Completado</span>':'')+'</div>'
      +'<div class="cu-body"><b>'+NOM[l]+' '+k+' · '+nombreNivel(k)+'</b><p>'+esc(can(l,k))+'</p>'
      +'<ul class="cu-meta"><li>'+svg('reloj')+fh(horasNivel(l,k))+' acumuladas</li><li>'+svg('libro')+U.length+' unidades</li><li>'+svg('cert')+esc(c.n)+'</li></ul>'
      +'<div class="cu-prog"><i style="width:'+a.pct+'%"></i></div><span class="cu-pct">'+a.pct+' % completado</span></div></button>'; }).join('')+'</div>'
   +'<p class="oe-note">Horas acumuladas desde cero según '+'<a href="'+fuente(l)[1]+'" target="_blank" rel="noopener">'+esc(fuente(l)[0])+'</a>; son orientativas.</p></div>';
}
function vCurso(){
  const l=L(), k=CS.niv, n=NIV[NIVI[k]], U=unidades(l,k), c=CERT[l][k], H=hitos(l,k), a=avance(l,k);
  const d=delta(l,k), sig=U.find(u=>(u.q||0)<60), gh=U.reduce((s,u)=>s+(u.h||0),0);
  const lec=(LECT[l]||[]).filter(r=>r.lvl===k), tr=(TRAD[l]||[]).filter(t=>t.lvl===k);
  const prereq=HREQ[k];
  /* programa */
  const mod=(id,t,n2,items)=>'<div class="cu-mod'+(CS.abierto[id]?' open':'')+'"><button class="cu-modh" data-mod="'+id+'"><span><b>'+t+'</b></span><em>'+n2+'</em><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button><div class="cu-modb"><div>'+items+'</div></div></div>';
  const it=(attr,t,s,done)=>'<button class="cu-it'+(done?' ok':'')+'" '+attr+'><span class="cu-dot">'+(done?svg('ok'):'')+'</span><span>'+esc(t)+'</span><small>'+esc(s||'')+'</small></button>';
  let prog=mod('gram','Módulo 1 · Gramática',U.length+' unidades · '+gh+' h',U.map(u=>it('data-cu="'+u.id+'"',u.t,(u.h?u.h+' h · ':'')+(u.q!=null?u.q+' %':'sin empezar'),(u.q||0)>=60)).join(''));
  let m=2;
  if(lec.length) prog+=mod('lect','Módulo '+(m++)+' · Lectura crítica',lec.length+' texto',lec.map(r=>it('data-cl="'+r.id+'"',r.obra,r.aut+' · '+r.tipo,(PROG.get('lect',r.id)||0)>=60)).join(''));
  if(tr.length) prog+=mod('trad','Módulo '+(m++)+' · Traducción',tr.length+' ejercicio',tr.map(t=>it('data-ct="'+t.id+'"',t.tit,t.tipo,(PROG.get('trad',t.id)||0)>=60)).join(''));
  if(l==='de'){
    const st=storiesNivel(k);
    prog+=mod('lex','Módulo '+(m++)+' · Léxico, relatos e inmersión',catsNivel(k).length+' campos · '+st.length+' relatos',
      it('data-cd="nivel"','Recorrido completo del nivel','estructuras, léxico y temas',false)
      +it('data-cd="palabras"','Léxico del nivel',catsNivel(k).length+' campos semánticos',false)
      +st.map(([s,i])=>it('data-cs="'+i+'"',s.t,'relato con audio',nvHecho('story',s.id))).join('')
      +it('data-cd="immers"','Inmersión audiovisual','Nicos Weg, DW, Nachrichtenleicht',false));
    prog+=mod('eval','Módulo '+(m++)+' · Evaluación','simulacro',it('data-cd="examen"','Simulacro de examen '+k,'formato '+c.n,nvHecho('pruef',k)));
  } else {
    prog+=mod('rec','Módulo '+(m++)+' · Recursos y evaluación','oficiales',it('data-cx="xnivel"','Itinerario detallado del nivel','destrezas, recursos y certificado',false)+it('data-cx="xexam"','Prueba de nivel orientativa','24 preguntas',false)+it('data-cx="xvid"','Vídeo y audio oficiales','por nivel',false));
  }
  const side='<aside class="cu-side"><div class="cu-sc">'
   +'<div class="cu-badge" style="--sc:'+col(k)+'"><span>'+k+'</span><em>'+NAT[l]+'</em></div>'
   +'<div class="cu-ring" style="--p:'+a.pct+'"><b>'+a.pct+' %</b><span>'+(a.todos?'nivel aprobado':'completado')+'</span></div>'
   +'<button class="btn pri cu-cta" id="cuGo">'+(a.pct?'Continuar':'Empezar el curso')+'</button>'
   +(sig?'<p class="cu-next">Siguiente: <b>'+esc(sig.t)+'</b></p>':'')
   +'<ul class="cu-facts">'
   +'<li>'+svg('reloj')+'<div><b>'+fd(d)+'</b><span>de estudio para este nivel</span></div></li>'
   +'<li>'+svg('ritmo')+'<div><b>'+fs(d,6)+'</b><span>a 6 h por semana</span></div></li>'
   +'<li>'+svg('libro')+'<div><b>'+U.length+' unidades</b><span>teoría y cuestionario</span></div></li>'
   +((lec.length||tr.length)?'<li>'+svg('pluma')+'<div><b>Proyecto práctico</b><span>lectura crítica y traducción</span></div></li>':'')
   +'<li>'+svg('cert')+'<div><b>'+esc(c.n)+'</b><span>'+esc(CERT[l].inst)+'</span></div></li></ul></div>'
   +'<div class="cu-otros"><span class="xl-k">Otros cursos</span>'+LV.filter(x=>x!==k).map(x=>'<button data-cn="'+x+'" style="--sc:'+col(x)+'"><i>'+x+'</i>'+nombreNivel(x)+'</button>').join('')+'</div></aside>';
  return '<div class="cu-wrap">'+miga([[NOM[l],'home'],['Cursos','cursos'],[k+' · '+n.n,'']])
   +'<div class="cu-grid"><div class="cu-main">'
   +'<header class="cu-head"><h1 class="cu-h1">'+NOM[l]+' '+k+' · '+n.n+'</h1><p class="cu-lead">'+esc(can(l,k))+'</p>'
   +'<div class="cu-chips"><span>'+svg('reloj')+fh(horasNivel(l,k))+' acumuladas desde cero</span><span>'+svg('libro')+U.length+' unidades</span><span>'+svg('cert')+esc(c.n)+'</span></div></header>'
   /* ficha técnica */
   +'<section class="cu-sec"><h2>Ficha técnica</h2><div class="cu-ficha">'
   +'<div class="cu-fb"><span class="cu-fk">1 · Requisitos previos</span><p>'+esc(prereq)+'</p>'+(ANT[k]?'<button class="cu-lnk" data-cn="'+ANT[k]+'">Ver el curso '+ANT[k]+' ›</button>':'')+'</div>'
   +'<div class="cu-fb"><span class="cu-fk">2 · Dedicación</span><p><b>'+fd(d).replace(' h',' horas')+'</b> de estudio guiado para pasar de '+(ANT[k]||'cero')+' a '+k+' ('+fh(horasNivel(l,k))+' acumuladas). De ellas, unas <b>'+gh+' h</b> son de gramática en esta app; el resto es lectura, escucha, escritura y conversación.</p>'
   +'<table class="cu-rit"><tr><th>Ritmo</th><th>Duración aproximada</th></tr>'+[3,6,10].map(x=>'<tr><td>'+x+' h / semana</td><td>'+fs(d,x)+'</td></tr>').join('')+'</table></div>'
   +'<div class="cu-fb wide"><span class="cu-fk">3 · Qué aprenderá</span><p>'+esc(can(l,k))+'</p><ul class="cu-ul">'+U.slice(0,8).map(u=>'<li>'+esc(u.t)+'</li>').join('')+'</ul></div>'
   +'<div class="cu-fb wide"><span class="cu-fk">4 · Evaluación para la certificación · '+esc(c.n)+'</span>'
   +'<table class="oe-table cu-ev"><tr><th>Prueba</th><th>Detalle</th></tr>'+c.p.map(p=>'<tr><td>'+esc(p[0])+'</td><td>'+esc(p[1]||'—')+'</td></tr>').join('')+'</table>'
   +'<p class="cu-apr"><b>Criterio de aprobación.</b> '+esc(c.a)+'</p>'
   +'<p class="oe-note">Resumen orientativo; prevalece la normativa vigente de '+esc(CERT[l].inst)+'. <a href="'+c.u+'" target="_blank" rel="noopener">Página oficial del examen ↗</a>'+(c.f?' · <a href="'+c.f[1]+'" target="_blank" rel="noopener">'+esc(c.f[0])+' ↗</a>':'')+'</p></div>'
   +'<div class="cu-fb wide"><span class="cu-fk">5 · Hitos para completar y aprobar el nivel</span>'
   +'<div class="cu-hitos">'+H.map((h,i)=>{ const ok=h[2]>=h[3];
      return '<div class="cu-hito'+(ok?' ok':'')+'"><span class="cu-dot">'+(ok?svg('ok'):(i+1))+'</span><div><b>'+h[0]+'</b><span>'+esc(h[1])+'</span></div>'
       +(h[4]==='manual'?'<label class="cu-chk"><input type="checkbox" data-hito="1"'+(ok?' checked':'')+'> hecho</label>':'<em>'+Math.min(h[2],h[3])+' / '+h[3]+'</em>')+'</div>'; }).join('')+'</div>'
   +'<p class="cu-apr">'+(a.todos?'<b>Nivel completado y aprobado en la app.</b> Está preparado para presentarse al '+esc(c.n)+(PROX[k]?' o continuar con el curso '+PROX[k]:'')+'.':'El nivel se considera <b>aprobado en la app</b> cuando se cumplen todos los hitos. El aprobado oficial solo lo concede el examen de certificación.')+'</p></div>'
   +'</div></section>'
   +'<section class="cu-sec"><h2>Programa del curso</h2>'+prog+'</section>'
   +'<section class="cu-sec"><h2>A quién está dirigido</h2><ul class="cu-ul">'+QUIEN[k].map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>'
   +'<p>'+(ANT[k]?'Se recomienda haber completado el curso '+ANT[k]+'.':'No se requieren conocimientos previos: el programa guía paso a paso.')+'</p></section>'
   +'</div>'+side+'</div></div>';
}

/* ---------- render y cableado ---------- */
function abreUnidad(l,id){
  if(l==='de'){ const i=gramIdx(id); if(i<0) return; goMode('temas'); gramTheory(i); return; }
  xGo('xunit','u:'+id);
}
function render(p){
  const el=document.getElementById('m-curso'); if(!el) return;
  const l=L();
  el.innerHTML=p==='curso'?vCurso():vCursos(); reanima(el);
  el.querySelectorAll('[data-cn]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} xGo('curso','c:'+b.dataset.cn); window.scrollTo(0,0); });
  el.querySelectorAll('[data-cgo]').forEach(b=>b.onclick=()=>{ const g=b.dataset.cgo; if(g==='cursos') goDestino('cursos'); else goDestino('home'); });
  el.querySelectorAll('[data-mod]').forEach(b=>b.onclick=()=>{ const id=b.dataset.mod; CS.abierto[id]=!CS.abierto[id]; b.parentNode.classList.toggle('open',CS.abierto[id]); });
  el.querySelectorAll('[data-cu]').forEach(b=>b.onclick=()=>abreUnidad(l,b.dataset.cu));
  el.querySelectorAll('[data-cl]').forEach(b=>b.onclick=()=>xGo('plect','r:'+b.dataset.cl));
  el.querySelectorAll('[data-ct]').forEach(b=>b.onclick=()=>xGo('ptrad','t:'+b.dataset.ct));
  el.querySelectorAll('[data-cs]').forEach(b=>b.onclick=()=>{ goNivel(CS.niv,'lectura'); stOpen(+b.dataset.cs); });
  el.querySelectorAll('[data-cd]').forEach(b=>b.onclick=()=>goNivel(CS.niv,b.dataset.cd));
  el.querySelectorAll('[data-cx]').forEach(b=>b.onclick=()=>{ const g=b.dataset.cx; if(g==='xnivel') xGo('xnivel','n:'+CS.niv); else goDestino(g); });
  el.querySelectorAll('[data-hito]').forEach(c=>c.onchange=()=>{ if(c.checked) PROG.set('hito',l+'-'+CS.niv,1); else PROG.quita('hito',l+'-'+CS.niv); render('curso'); });
  const go=el.querySelector('#cuGo'); if(go) go.onclick=()=>{ const U=unidades(l,CS.niv); const s=U.find(u=>(u.q||0)<60)||U[0]; if(s) abreUnidad(l,s.id); };
  const t=document.getElementById('pageTitle'); if(t) t.textContent=p==='curso'?CS.niv+' · '+nombreNivel(CS.niv):'Cursos';
}
const _gm=goMode; goMode=function(p){ _gm(p); if(page==='curso'||page==='cursos') render(page); };
window.CURSO={render,cert:CERT,avance};
})();
