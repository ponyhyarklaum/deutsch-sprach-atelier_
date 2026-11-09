/* =====================================================================
   IDIOMAS · interruptor alemán / inglés / francés
   - Cambia la barra lateral, la portada, la marca y el pie de recursos.
   - Inglés y francés: portada, itinerario A1–C2 con horas y requisitos,
     unidades de gramática con teoría y cuestionario, recursos oficiales,
     vídeo y audio, exámenes con prueba de nivel y diccionarios.
   - Secciones comunes: Conjugador (modules/conjugador.js), Contrastiva
     (data/contraste.js) y Tiempos de aprendizaje (data/tiempos.js).
   - Alemán: añade a cada unidad y a cada nivel el tiempo estimado y los
     requisitos.
   ===================================================================== */
(function(){
const LS='da-lengua';
const DATA={en:typeof EN!=='undefined'?EN:null, fr:typeof FR!=='undefined'?FR:null, es:typeof ES!=='undefined'?ES:null};
const LKEY='da-modo'; let MODO='prac';
try{ if(localStorage.getItem(LKEY)==='ling') MODO='ling'; }catch(e){}
const SUBSET=window.SUBSET=window.SUBSET||{};
let LANG='de';
try{ const g=localStorage.getItem(LS); if(g==='en'||g==='fr'||g==='es') LANG=g; }catch(e){}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LV=['A1','A2','B1','B2','C1','C2'];
const col=k=>(NIV[NIVI[k]]||{}).c||'var(--brand)';
const host=u=>u.replace(/^https?:\/\/(www\.)?/,'').split('/')[0];
const D=()=>DATA[LANG];

/* ---------- iconos propios ---------- */
const XI={
 globe:'<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19M12 2.5a14.5 14.5 0 0 0 0 19"/>',
 scale:'<path d="M12 3v18M5 7h14M5 7l-3 7a4 4 0 0 0 6 0zM19 7l-3 7a4 4 0 0 0 6 0z"/>',
 clock:'<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3 2"/>',
 video:'<rect x="2.5" y="5" width="14" height="14" rx="2.5"/><path d="m16.5 10 5-3v10l-5-3"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="m8.5 13.9-1.5 7.6 5-3 5 3-1.5-7.6"/>',
 dict:'<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5A2.5 2.5 0 0 0 6.5 24H20"/><path d="M9 7h7M9 11h5"/>',
 conj:'<path d="M4 6h16M4 12h10M4 18h7"/><path d="M17 14l3 3-3 3"/>',
 ext:'<path d="M7 17 17 7M8 7h9v9"/>'
};
Object.assign(IC,{xglobe:XI.globe,xscale:XI.scale,xclock:XI.clock,xvideo:XI.video,xaward:XI.award,xdict:XI.dict,xconj:XI.conj});
const ic=k=>'<svg viewBox="0 0 24 24">'+XI[k]+'</svg>';

/* ---------- páginas ---------- */
Object.assign(PAGES,{
 xhome:['Inicio','xl','lang'], xnivel:['Itinerario','xl','lang'], xtemas:['Gramática','xl','lang'], xunit:['Unidad','xl','lang'],
 xrec:['Recursos oficiales','xl','lang'], xvid:['Vídeo y audio','xl','lang'], xexam:['Exámenes y nivel','xl','lang'], xdic:['Diccionarios','xl','lang'],
 tiempos:['Tiempo de aprendizaje','lenguas','lang'], conj:['Conjugador','lenguas','conj'], contr:['Gramática contrastiva','lenguas','contr']});
SECS.push('lang','conj','contr');
Object.assign(MINI,{conj:'xconj',contr:'xscale',tiempos:'xclock'});
Object.assign(COLOR,{conj:'#ff9fb0',contr:'#c9aefc',tiempos:'#f2c777'});
Object.assign(RECT,{conj:['Conjugador','Alemán, inglés y francés'],contr:['Contrastiva','ES · DE · EN · FR'],tiempos:['Tiempo de aprendizaje','Horas y requisitos']});

/* ---------- navegación lateral por lengua ---------- */
/* el alemán sigue la misma disposición que las otras lenguas, con sus páginas propias dentro de cada grupo */
const NAV_DE=[
 {t:'Inicio',go:'home',ic:'home'},
 {t:'Itinerario',ic:'steps',hijos:[{t:'Todos los cursos',go:'cursos'}].concat(NIV.map(n=>({t:n.k+' · '+n.n,go:'curso',sub:'c:'+n.k})))},
 {t:'Gramática',ic:'bulb',hijos:[{t:'Todas las unidades',go:'temas'},{t:'Theorie',go:'refer'},{t:'Satzbau',go:'satzbau'},{t:'Verbos irregulares',go:'stamm'},{t:'Conjugador',go:'conj'},{t:'Gramática contrastiva',go:'contr'},{t:'Grammatikbücher',go:'biblio'}]},
 {t:'Léxico y práctica',ic:'layers',hijos:[{t:'Wortschatz',go:'wortschatz'},{t:'Todo el léxico',go:'palabras'},{t:'Vocabulario interno',go:'kern'},{t:'Repertorio verbal',go:'verbos'},{t:'Modos de práctica',go:'hub'}]},
 {t:'Recursos oficiales',ic:'xvideo',hijos:[{t:'Vídeo e inmersión',go:'immers'},{t:'Exámenes y nivel',go:'examen'},{t:'Diccionario',go:'buscar'}]},
 {t:'Planificación',ic:'xclock',hijos:[{t:'Tiempo de aprendizaje',go:'tiempos'}]}
];
function navX(L){
  return [
   {t:'Inicio',go:'xhome',ic:'home'},
   {t:'Itinerario',ic:'steps',hijos:[{t:'Todos los cursos',go:'cursos'}].concat(LV.map(k=>({t:k+' · '+NIV[NIVI[k]].n,go:'curso',sub:'c:'+k})))},
   {t:'Gramática',ic:'bulb',hijos:[{t:'Todas las unidades',go:'xtemas'},{t:'Conjugador',go:'conj'},{t:'Gramática contrastiva',go:'contr'}]},
   {t:'Recursos oficiales',ic:'xvideo',hijos:[{t:'Directorio',go:'xrec'},{t:'Vídeo y audio',go:'xvid'},{t:'Exámenes y nivel',go:'xexam'},{t:'Diccionarios',go:'xdic'}]},
   {t:'Planificación',ic:'xclock',hijos:[{t:'Tiempo de aprendizaje',go:'tiempos'}]}
  ];
}
function aplicaNav(){
  let base=LANG==='de'?NAV_DE.slice():navX(D());
  if(MODO==='ling'&&window.LNNAV) base=LNNAV(LANG);
  else if(window.PRNAV) base=base.concat(PRNAV(LANG));
  NAV.splice(0,NAV.length,...base);
  const mb=document.getElementById('modoBtn'); if(mb) mb.classList.toggle('ling',MODO==='ling');
  document.documentElement.dataset.modo=MODO;
  Object.keys(NAVOPEN).forEach(k=>delete NAVOPEN[k]); NAVOPEN['1']=true;
  sideNav();
}
const _sideNav=sideNav;
sideNav=function(){ _sideNav();
  document.querySelectorAll('#snav [data-sub]').forEach(b=>{
    b.classList.toggle('on',navSel===b.dataset.go+':'+b.dataset.sub);
    b.onclick=()=>{ document.querySelector('.app').classList.remove('sideopen'); try{sfx.nav();}catch(e){} navSel=b.dataset.go+':'+b.dataset.sub; xGo(b.dataset.go,b.dataset.sub); sideNav(); };
  });
};
/* ---------- estado de las páginas x ---------- */
const XS={niv:'A1',unit:null,rcat:'',rniv:'',quiz:null,test:null,dq:'',cTema:'',fLang:'en',fq:null};
function xGo(p,sub){
  if(sub) aplicaSub(p,sub);
  if(sub&&SUBSET[p]) SUBSET[p](sub);
  navSel=sub?p+':'+sub:p;
  histPush({go:p,sub:sub||''});
  goMode(p); sideNav();
}
function aplicaSub(p,sub){
  if(p==='xnivel'&&/^n:/.test(sub)) XS.niv=sub.slice(2);
  if(p==='xunit'&&/^u:/.test(sub)){ XS.unit=sub.slice(2); XS.quiz=null; }
  if(p==='contr'&&/^c:/.test(sub)) XS.cTema=sub.slice(2);
}
['xnivel','xunit','contr'].forEach(p=>{ HSUB[p]=s=>{ aplicaSub(p,s); render(p); }; });

/* ---------- interruptor ---------- */
function setLang(l,silencioso){
  if(!['de','en','fr','es'].includes(l)||(l!=='de'&&!DATA[l])) return;
  LANG=l; try{ localStorage.setItem(LS,l); }catch(e){}
  const lt=document.querySelector('#lenguaBtn .lg-tag'); if(lt) lt.textContent=l.toUpperCase();
  document.documentElement.dataset.lengua=l;
  const bt=document.querySelector('.brand .bt');
  if(bt) bt.innerHTML=l==='de'?'Deutsch<span>im Allgemeinen Atelier</span>':esc(D().marca[0])+'<span>'+esc(D().marca[1])+'</span>';
  document.title=(l==='de'?'Deutsch':D().nombre)+' · Atelier';
  aplicaNav(); pieRecursos();
  if(!silencioso){
    const comun=['cursos','curso','conj','contr','tiempos','plect','ptrad','pcult','pcura','pprog','lnhome','lnbib','lnarea','lntool'];
    const dest=comun.includes(page)?page:(MODO==='ling'?'lnhome':(l==='de'?'home':'xhome'));
    navSel=dest; goDestino(dest); sideNav();
  }
}
LANGAPI.get=()=>LANG;
LANGAPI.set=(l,s)=>setLang(l,s);
/* lengua de estudio: botón flotante con un cerebro (icono «brain» de Lucide, licencia ISC), entre el bombillo y el gorro (único lugar donde se cambia) */
function montaSwitch(){
  if(document.getElementById('lenguaBtn')) return;
  const b=document.createElement('button'); b.className='fab lengua-fab'; b.id='lenguaBtn'; b.setAttribute('aria-haspopup','dialog'); b.title='Lengua de estudio';
  b.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg><i class="lg-tag"></i>';
  const p=document.createElement('div'); p.className='fab-pan lengua-pan'; p.setAttribute('role','dialog'); p.setAttribute('aria-label','Lengua de estudio');
  document.body.appendChild(b); document.body.appendChild(p);
  const OP=[['de','Alemán','Deutsch'],['en','Inglés','English'],['fr','Francés','Français'],['es','Español','Español']];
  function pinta(){ p.innerHTML='<div class="bp-h"><b>Lengua de estudio</b><button class="bp-x" aria-label="Cerrar">✕</button></div>'
    +'<div class="lg-ops">'+OP.map(([k,n,nat])=>'<button class="lg-op'+(LANG===k?' on':'')+'" data-l="'+k+'" role="radio" aria-checked="'+(LANG===k)+'"><span class="lg-k lg-'+k+'">'+k.toUpperCase()+'</span><span><b>'+n+'</b><small>'+nat+'</small></span></button>').join('')+'</div>';
    p.querySelector('.bp-x').onclick=()=>abre(false);
    p.querySelectorAll('[data-l]').forEach(x=>x.onclick=()=>{ if(x.dataset.l!==LANG){ try{sfx.tap();}catch(e){} setLang(x.dataset.l); } abre(false); }); }
  function abre(v){ if(v){ pinta(); if(window.BOMBILLO) BOMBILLO.abre(false); if(window.MODOBTN) MODOBTN.abre(false); }
    p.classList.toggle('on',v); b.classList.toggle('on',v); b.setAttribute('aria-expanded',v); }
  b.onclick=e=>{ e.stopPropagation(); abre(!p.classList.contains('on')); };
  p.addEventListener('click',e=>e.stopPropagation());
  document.addEventListener('click',()=>{ if(p.classList.contains('on')) abre(false); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') abre(false); });
  window.LENGUABTN={abre};
}

/* ---------- enrutado ---------- */
const _gd=goDestino;
goDestino=function(g){
  if(g==='home'&&MODO==='ling') g='lnhome';
  if(LANG!=='de'&&g==='home') g='xhome';
  if(LANG==='de'&&/^x/.test(g)) g='home';
  if(LANG==='de'&&g==='immers'){ try{ if(!immNiv) immNiv=nvCur||'A1'; }catch(e){} const r=_gd(g); try{ immRender(); }catch(e){} return r; }
  if(LANG==='de'&&g==='examen'){ const r=_gd(g); try{ exOpen(nvCur||'A1'); }catch(e){} return r; }
  return _gd(g);
};
const _gm=goMode;
goMode=function(p){
  if(p==='home'&&MODO==='ling') p='lnhome';
  if(LANG!=='de'&&p==='home') p='xhome';
  const modoP=/^ln/.test(p)?'ling':(['conj','contr','tiempos'].includes(p)?MODO:'prac');
  if(modoP!==MODO){ MODO=modoP; try{localStorage.setItem(LKEY,MODO);}catch(e){} aplicaNav(); }
  if(LANG==='de'&&/^x/.test(p)) p='home';
  _gm(p);
  if(['lang','conj','contr'].includes((PAGES[p]||[])[2])) render(p);

};
function render(p){
  if(p==='conj'){ if(window.CONJ){ CONJ.set(LANG); CONJ.render(); } return; }
  if(p==='contr'){ renderContr(); return; }
  const el=document.getElementById('m-lang'); if(!el) return;
  const f={xhome:vHome,xnivel:vNivel,xtemas:vTemas,xunit:vUnidad,xrec:vRec,xvid:vVid,xexam:vExam,xdic:vDic,tiempos:vTiempos}[p];
  if(!f) return;
  if(p!=='tiempos'&&!D()) return;
  el.innerHTML=f();
  wire(el,p);
  const t=document.getElementById('pageTitle'); if(t) t.textContent=PAGES[p][0];
}

/* ============================ VISTAS EN / FR ============================ */
function hero(kick,h1,date,p){
  return '<div class="oe-hero xl-hero"><div class="oe-top"><span class="xl-badge">'+LANG.toUpperCase()+'</span><span class="oe-kick">'+kick+'</span></div>'
   +'<h1>'+h1+'</h1>'+(date?'<p class="oe-dateline">'+date+'</p>':'')+(p?'<p>'+p+'</p>':'')+'</div>';
}
function fila(t,d,attrs,c,mini){
  return '<button class="row2" '+attrs+' style="--pc:'+c+'"><span class="rmini">'+svg(mini||'grid')+'</span>'
   +'<span class="rtxt"><b>'+t+'</b><span>'+d+'</span></span></button>';
}
function horas(k,L){
  const h=(L||D()).HORAS[k]; if(!h) return '';
  return h[0]+(h[1]?(h[1]!==h[0]?'–'+h[1]:''):'+')+' h'+(h[2]?' *':'');
}
function vHome(){
  const L=D(), U=L.U;
  let h='<h1 class="greet"><span class="de">'+L.saludo[0]+'</span><span>'+L.saludo[1]+'</span></h1>'
   +'<p class="greetsub">'+L.intro+'</p>';
  h+='<div class="rowttl"><h3>Niveles</h3><span>horas guiadas acumuladas</span></div><div class="rowgrid">'
   +LV.map(k=>fila(k+' · '+NIV[NIVI[k]].n,horas(k)+' · '+U.filter(u=>u.lvl===k).length+' unidades','data-xgo="curso" data-xsub="c:'+k+'"',col(k),'steps')).join('')+'</div>';
  h+='<div class="rowttl"><h3>Gramática</h3></div><div class="rowgrid">'
   +fila('Todas las unidades',U.length+' unidades con teoría y cuestionario','data-xgo="xtemas"','#f2c777','bulb')
   +fila('Conjugador','Todas las formas, resaltadas, con entrenamiento','data-xgo="conj"','#ff9fb0','xconj')
   +fila('Gramática contrastiva','Español · alemán · inglés · francés','data-xgo="contr"','#c9aefc','xscale')
   +fila('Tiempo de aprendizaje','Horas por tema y por nivel, con requisitos','data-xgo="tiempos"','#f2c777','xclock')+'</div>';
  h+='<div class="rowttl"><h3>Recursos oficiales</h3></div><div class="rowgrid">'
   +fila('Directorio',L.RES.length+' recursos gratuitos verificados','data-xgo="xrec"','#84dcc0','xglobe')
   +fila('Vídeo y audio','Canales y pódcasts oficiales por nivel','data-xgo="xvid"','#ffb3a7','xvideo')
   +fila('Exámenes y nivel','Prueba de nivel y certificados oficiales','data-xgo="xexam"','#f4a97f','xaward')
   +fila('Diccionarios','Búsqueda directa en diccionarios de referencia','data-xgo="xdic"','#8fc4ff','xdict')+'</div>';
  h+='<div class="numbers">'+[[U.length,'unidades'],[U.reduce((a,u)=>a+u.q.length,0),'preguntas'],[L.RES.length,'recursos'],[6,'niveles']].map(([x,l])=>'<div class="num"><b>'+x+'</b><span>'+l+'</span></div>').join('')+'</div>';
  return h;
}
function uCard(u){
  const st=window.PROG?PROG.get('quiz',u.id):null;
  return '<div class="topic" data-xu="'+u.id+'"><span class="lv">'+u.lvl+'</span><div class="sb2">'+esc(u.sub)+' · '+u.h+' h</div><h4>'+esc(u.t)+'</h4>'
   +'<div class="bar2"><i style="width:'+(st||0)+'%"></i></div><div class="st2">'+(st!=null?st+' % · mejor resultado':u.q.length+' preguntas · sin empezar')+'</div></div>';
}
function vTemas(){
  const L=D();
  return hero(L.nombre+' · Grammaire','Gramática','A1–C2 · '+L.U.length+' unidades','Secuencia acumulativa: cada unidad indica cuántas horas lleva dominarla y qué unidades conviene haber superado antes. Al final de cada explicación hay un cuestionario corregido al instante y enlaces a la página oficial que trata el mismo tema.')
   +LV.map(k=>{ const l=L.U.filter(u=>u.lvl===k); const hh=l.reduce((a,u)=>a+u.h,0);
     return '<div class="gsec" style="--sc:'+col(k)+'"><h3>'+k+' · '+NIV[NIVI[k]].n+'<span>'+l.length+' unidades · '+hh+' h de gramática</span></h3><div class="topicgrid">'+l.map(uCard).join('')+'</div></div>'; }).join('');
}
function unidad(id){ return D().U.find(u=>u.id===id); }
function preChips(u){
  if(!u.pre.length) return '<span class="xl-pre none">Ninguno: es un punto de partida.</span>';
  return u.pre.map(id=>{ const p=unidad(id); return p?'<button class="oe-chip xl-pre" data-xu="'+p.id+'"><b>'+p.lvl+'</b><span>'+esc(p.t)+'</span></button>':''; }).join('');
}
function vUnidad(){
  const L=D(), u=unidad(XS.unit)||L.U[0]; XS.unit=u.id;
  const i=L.U.indexOf(u), prev=L.U[i-1], next=L.U[i+1];
  return '<div class="theory"><div class="sb2" style="font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ink3);font-weight:800">'+esc(u.sub)+' · '+u.lvl+'</div>'
   +'<h2 style="font-family:var(--serif);font-size:1.9rem;margin:6px 0 14px;font-weight:600;letter-spacing:-.02em">'+esc(u.t)+'</h2>'
   +'<div class="xl-time"><div><span class="xl-k">Tiempo estimado</span><b>'+u.h+' h</b><small>explicación, práctica y repaso</small></div><div class="xl-req"><span class="xl-k">Requisitos</span>'+preChips(u)+'</div></div>'
   +u.teoria
   +'<div class="xl-refs"><span class="xl-k">Para ampliar en fuentes oficiales</span>'+u.ref.map(r=>'<a href="'+r[1]+'" target="_blank" rel="noopener">'+esc(r[0])+' <small>'+host(r[1])+'</small> ↗</a>').join('')+'</div>'
   +'<div class="oe-h">Cuestionario <small>'+u.q.length+' preguntas</small></div><div class="oe-card oe-quiz" id="xQuiz">'+quizHTML(u)+'</div>'
   +'<div class="stacts" style="margin-top:16px">'+btnPDF('xPdf')+'</div>'
   +'<div class="tnav">'+(prev?'<button class="tnv prev" data-xu="'+prev.id+'"><span>‹ Tema anterior</span><b>'+esc(prev.t)+'</b><em>'+prev.lvl+'</em></button>':'<span></span>')
   +(next?'<button class="tnv next" data-xu="'+next.id+'"><span>Tema siguiente ›</span><b>'+esc(next.t)+'</b><em>'+next.lvl+'</em></button>':'<span></span>')+'</div></div>';
}
function quizHTML(u){
  if(!XS.quiz||XS.quiz.id!==u.id) XS.quiz={id:u.id,i:0,ok:0,ans:null,ord:u.q.map((_,j)=>j).sort(()=>Math.random()-.5)};
  const Q=XS.quiz;
  if(Q.i>=u.q.length){
    const pct=Math.round(Q.ok/u.q.length*100);
    if(window.PROG) PROG.set('quiz',u.id,pct);
    return '<div class="hint">Resultado</div><div class="q">'+Q.ok+' / '+u.q.length+' · '+pct+' %</div>'
     +'<p style="color:var(--ink2);margin:6px 0 14px">'+(pct>=80?'Tema dominado. Puede pasar a la siguiente unidad.':pct>=60?'Superado. Repase los fallos antes de seguir.':'Vuelva a leer la explicación y repita el cuestionario.')+'</p>'
     +'<div class="stacts"><button class="btn" id="xAgain">Repetir</button>'+(function(){ const L=D(), k=L.U.indexOf(u), n=L.U[k+1]; return n?'<button class="btn pri" data-xu="'+n.id+'">Tema siguiente: '+esc(n.t)+' ›</button>':''; })()+'</div>';
  }
  const p=u.q[Q.ord[Q.i]].split('|'), ok=+p[5];
  return '<div class="hint">Pregunta '+(Q.i+1)+' de '+u.q.length+'</div><div class="q">'+esc(p[0])+'</div>'
   +'<div class="oe-opts">'+[1,2,3,4].map((n,j)=>{ let c=''; if(Q.ans!==null){ if(j===ok)c=' class="ok"'; else if(j===Q.ans)c=' class="no"'; }
     return '<button data-xop="'+j+'"'+c+(Q.ans!==null?' disabled':'')+'>'+esc(p[n])+'</button>'; }).join('')+'</div>'
   +(Q.ans!==null?'<p class="xl-exp">'+esc(p[6])+'</p>':'')
   +'<div class="oe-bar"><span>'+(Q.i+1)+' / '+u.q.length+'</span><div class="nvbar"><i style="width:'+(Q.i/u.q.length*100)+'%"></i></div><span>'+Q.ok+' aciertos</span>'
   +(Q.ans!==null?'<button class="btn" id="xNext">Siguiente</button>':'')+'</div>';
}
function quizWire(u){
  const box=document.getElementById('xQuiz'); if(!box) return;
  box.innerHTML=quizHTML(u);
  box.querySelectorAll('[data-xop]').forEach(b=>b.onclick=()=>{ const Q=XS.quiz, j=+b.dataset.xop, ok=+u.q[Q.ord[Q.i]].split('|')[5];
    Q.ans=j; if(j===ok){Q.ok++;try{sfx.ok()}catch(e){}} else {try{sfx.no()}catch(e){}} quizWire(u); });
  const n=document.getElementById('xNext'); if(n) n.onclick=()=>{ XS.quiz.i++; XS.quiz.ans=null; quizWire(u); };
  const a=document.getElementById('xAgain'); if(a) a.onclick=()=>{ XS.quiz=null; quizWire(u); };
  box.querySelectorAll('[data-xu]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} xGo('xunit','u:'+b.dataset.xu); window.scrollTo({top:0,behavior:'smooth'}); });
}
function resCard(r){
  return '<a class="oe-card oe-link" href="'+r[2]+'" target="_blank" rel="noopener"><div class="oe-ic">'+ic(r[0]==='video'?'video':r[0]==='test'?'award':r[0]==='dic'?'dict':'globe')+'</div><div><h3>'+esc(r[1])+'</h3><p>'+esc(r[3])+'</p><small>'+host(r[2])+' · '+r[4].split(' ').join(' ')+'</small></div><svg class="ext" viewBox="0 0 24 24">'+XI.ext+'</svg></a>';
}
const CATN={gram:'Gramática',video:'Vídeo y audio',skill:'Destrezas y léxico',test:'Pruebas y exámenes',dic:'Diccionarios'};
function vNivel(){
  const L=D(), k=XS.niv, n=NIV[NIVI[k]], ix=LV.indexOf(k);
  const U=L.U.filter(u=>u.lvl===k), hh=U.reduce((a,u)=>a+u.h,0);
  const h=L.HORAS[k], hp=ix>0?L.HORAS[LV[ix-1]]:[0,0];
  const delta=h&&hp?(h[0]-hp[0])+'–'+((h[1]||h[0])-(hp[1]||hp[0]))+' h':'';
  const R=L.RES.filter(r=>r[4].split(' ').includes(k));
  const ex=L.EXAM[k];
  return hero(L.nombre+' · '+k,k+' · '+n.n,horas(k)+' acumuladas desde cero · '+delta+' desde '+(ix>0?LV[ix-1]:'cero'),L.CAN[k])
   +'<div class="oe-seg">'+LV.map(x=>'<button data-xn="'+x+'"'+(x===k?' class="on"':'')+'>'+x+'</button>').join('')+'</div>'
   +'<div class="xl-time big"><div><span class="xl-k">Para llegar a '+k+'</span><b>'+horas(k)+'</b><small>horas guiadas acumuladas · <a href="'+L.FUENTE[1]+'" target="_blank" rel="noopener">'+esc(L.FUENTE[0])+'</a>'+(h&&h[2]?' · * cifra estimada':'')+'</small></div>'
   +'<div><span class="xl-k">Este nivel</span><b>'+delta+'</b><small>de las cuales '+hh+' h de gramática en esta app</small></div>'
   +'<div class="xl-req"><span class="xl-k">Requisitos</span><p>'+esc(HREQ[k])+'</p></div></div>'
   +'<div class="oe-h">1 · Gramática <small>'+U.length+' unidades · orden recomendado</small></div><div class="unitlist xl-ul">'
   +U.map((u,j)=>'<div class="unit" data-xu="'+u.id+'"><span class="un">'+(j+1)+'</span><div class="ut"><b>'+esc(u.t)+'</b><span>'+esc(u.sub)+' · '+u.h+' h'+(u.pre.length?' · requiere: '+u.pre.map(p=>{const x=unidad(p);return x?esc(x.t):''}).join(', '):'')+'</span></div></div>').join('')+'</div>'
   +['skill','video','test'].map((c,j)=>{ const l=R.filter(r=>r[0]===c); return l.length?'<div class="oe-h">'+(j+2)+' · '+CATN[c]+' <small>'+l.length+' recursos de nivel '+k+'</small></div><div class="oe-grid">'+l.map(resCard).join('')+'</div>':''; }).join('')
   +(ex?'<div class="oe-h">Certificado oficial</div><div class="oe-grid"><a class="oe-card oe-link" href="'+ex[1]+'" target="_blank" rel="noopener"><div class="oe-ic">'+ic('award')+'</div><div><h3>'+esc(ex[0])+'</h3><p>Información oficial del examen que acredita el nivel '+k+'.</p><small>'+host(ex[1])+'</small></div><svg class="ext" viewBox="0 0 24 24">'+XI.ext+'</svg></a></div>':'');
}
function vRec(){
  const L=D();
  const R=L.RES.filter(r=>(!XS.rcat||r[0]===XS.rcat)&&(!XS.rniv||r[4].split(' ').includes(XS.rniv)));
  return hero(L.nombre+' · Ressources','Recursos oficiales','Gratuitos · verificados en noviembre de 2026','Directorio de páginas de instituciones públicas, organismos certificadores y medios de servicio público. Cada enlace abre la fuente original en una pestaña nueva; esta app no reproduce su contenido.')
   +'<div class="oe-tools"><div class="oe-cat">'+[['','Todo']].concat(Object.entries(CATN)).map(([k,t])=>'<button data-rc="'+k+'"'+(XS.rcat===k?' class="on"':'')+'>'+t+'</button>').join('')+'</div>'
   +'<div class="oe-cat">'+['',...LV].map(k=>'<button data-rn="'+k+'"'+(XS.rniv===k?' class="on"':'')+'>'+(k||'Todos los niveles')+'</button>').join('')+'</div></div>'
   +Object.keys(CATN).filter(c=>!XS.rcat||c===XS.rcat).map(c=>{ const l=R.filter(r=>r[0]===c); return l.length?'<div class="oe-h">'+CATN[c]+' <small>'+l.length+'</small></div><div class="oe-grid">'+l.map(resCard).join('')+'</div>':''; }).join('')
   +'<p class="oe-note">Las marcas y nombres citados pertenecen a sus titulares y se mencionan solo para identificar la fuente; no hay relación comercial ni afiliación.</p>';
}
function vVid(){
  const L=D(), R=L.RES.filter(r=>r[0]==='video');
  return hero(L.nombre+' · Vidéo','Vídeo y audio','Canales, pódcasts y series oficiales','Material audiovisual auténtico y graduado de medios públicos y organismos culturales. Los vídeos se abren en su plataforma de origen, de modo que se respetan sus condiciones de uso y su publicidad propia.')
   +LV.map(k=>{ const l=R.filter(r=>r[4].split(' ').includes(k)); return '<div class="oe-h">'+k+' · '+NIV[NIVI[k]].n+' <small>'+l.length+'</small></div><div class="oe-grid">'+l.map(resCard).join('')+'</div>'; }).join('');
}
/* --- prueba de nivel: 4 preguntas por nivel, tomadas de las unidades --- */
function testNuevo(){
  const L=D(), items=[];
  LV.forEach(k=>{ const pool=[]; L.U.filter(u=>u.lvl===k).forEach(u=>u.q.forEach(q=>pool.push([k,q])));
    pool.sort(()=>Math.random()-.5).slice(0,4).forEach(x=>items.push(x)); });
  XS.test={items,i:0,ans:null,ok:{}};
}
function testHTML(){
  const T=XS.test;
  if(!T) return '<p>Veinticuatro preguntas, cuatro por nivel, de A1 a C2. Al terminar se indica el nivel cuyo cuestionario se supera con al menos tres aciertos de cuatro de forma continuada. Es una orientación gramatical, no un examen oficial.</p><button class="btn pri" id="xTest">Empezar la prueba</button>';
  if(T.i>=T.items.length){
    let niv='Pre-A1'; for(const k of LV){ if((T.ok[k]||0)>=3) niv=k; else break; }
    return '<div class="hint">Resultado orientativo</div><div class="q">'+niv+'</div>'
     +'<div class="xl-res">'+LV.map(k=>'<span style="--sc:'+col(k)+'"><b>'+k+'</b>'+(T.ok[k]||0)+' / 4</span>').join('')+'</div>'
     +'<p style="color:var(--ink2)">Contraste el resultado con una prueba oficial (enlaces abajo) y empiece por el itinerario del nivel siguiente.</p><button class="btn" id="xTest">Repetir</button>';
  }
  const [k,q]=T.items[T.i], p=q.split('|'), ok=+p[5];
  return '<div class="hint">'+(T.i+1)+' / '+T.items.length+' · nivel '+k+'</div><div class="q">'+esc(p[0])+'</div>'
   +'<div class="oe-opts">'+[1,2,3,4].map((n,j)=>{ let c=''; if(T.ans!==null){ if(j===ok)c=' class="ok"'; else if(j===T.ans)c=' class="no"'; } return '<button data-xt="'+j+'"'+c+(T.ans!==null?' disabled':'')+'>'+esc(p[n])+'</button>'; }).join('')+'</div>'
   +'<div class="oe-bar"><div class="nvbar"><i style="width:'+(T.i/T.items.length*100)+'%"></i></div>'+(T.ans!==null?'<button class="btn" id="xTnext">Siguiente</button>':'')+'</div>';
}
function vExam(){
  const L=D(), R=L.RES.filter(r=>r[0]==='test');
  return hero(L.nombre+' · Examens','Exámenes y nivel','Prueba orientativa propia · pruebas y certificados oficiales','')
   +'<div class="oe-h">Prueba de nivel de gramática</div><div class="oe-card oe-quiz" id="xTestBox">'+testHTML()+'</div>'
   +'<div class="oe-h">Certificados por nivel</div><div class="oe-tw"><table class="oe-table"><tr><th>Nivel</th><th>Examen oficial</th><th>Horas acumuladas</th></tr>'
   +LV.map(k=>{ const e=L.EXAM[k]; return '<tr><td>'+k+'</td><td><a href="'+e[1]+'" target="_blank" rel="noopener">'+esc(e[0])+'</a></td><td>'+horas(k)+'</td></tr>'; }).join('')+'</table></div>'
   +'<div class="oe-h">Pruebas y preparación oficiales</div><div class="oe-grid">'+R.map(resCard).join('')+'</div>';
}
function vDic(){
  const L=D(), R=L.RES.filter(r=>r[0]==='dic');
  const q=XS.dq.trim(), Q=encodeURIComponent(q);
  const busc=LANG==='en'?[['Cambridge','https://dictionary.cambridge.org/es/diccionario/ingles-espanol/'+Q],['Oxford Learner\'s','https://www.oxfordlearnersdictionaries.com/search/english/?q='+Q],['WordReference','https://www.wordreference.com/enes/'+Q]]
    :LANG==='es'?[['DLE (RAE)','https://dle.rae.es/'+Q],['WordReference','https://www.wordreference.com/esen/'+Q]]
    :[['Larousse','https://www.larousse.fr/dictionnaires/francais-espagnol/'+Q],['Larousse (FR)','https://www.larousse.fr/dictionnaires/francais/'+Q],['CNRTL','https://www.cnrtl.fr/definition/'+Q],['WordReference','https://www.wordreference.com/fres/'+Q]];
  return hero(L.nombre+' · Dictionnaires','Diccionarios','Búsqueda directa en obras de referencia','Escriba una palabra y ábrala en el diccionario que prefiera. La consulta se hace en el sitio del diccionario, no en esta app.')
   +'<div class="oe-tools"><input type="search" id="xDicQ" placeholder="'+({en:'Escriba una palabra en inglés…',fr:'Écrivez un mot en français…',es:'Escriba una palabra en español…'})[LANG]+'" value="'+esc(q)+'"></div>'
   +(q?'<div class="xl-busc">'+busc.map(([t,u])=>'<a class="btn" href="'+u+'" target="_blank" rel="noopener">'+t+': «'+esc(q)+'» ↗</a>').join('')+'</div>':'')
   +'<div class="oe-h">Diccionarios recomendados</div><div class="oe-grid">'+R.map(resCard).join('')+'</div>';
}
/* --- tiempo de aprendizaje: tabla comparativa --- */
function vTiempos(){
  const Ls=[['de','Alemán',{HORAS:Object.fromEntries(LV.map(k=>[k,HDE[k]])),FUENTE:HDE_FUENTE}],['en','Inglés',DATA.en],['fr','Francés',DATA.fr],['es','Español',DATA.es]].filter(x=>x[2]);
  const gh=(l,k)=>l==='de'?GRAM.filter(t=>t.lvl===k).reduce((a,t)=>a+((TDE[t.id]||[0])[0]),0):DATA[l].U.filter(u=>u.lvl===k).reduce((a,u)=>a+u.h,0);
  return hero('Planificación','Tiempo de aprendizaje','Horas por nivel y por tema · requisitos','Las instituciones certificadoras publican horas <b>guiadas</b> (con docente) necesarias para cada nivel desde cero; el trabajo autónomo suele duplicarlas. Las horas por tema son una estimación propia para un adulto hispanohablante que estudia con regularidad: explicación, práctica y repaso espaciado hasta usar la forma sin pensar.')
   +'<div class="oe-tw"><table class="oe-table xl-ht"><tr><th>Nivel</th>'+Ls.map(x=>'<th>'+x[1]+'<small>acumuladas</small></th>').join('')+'<th>Requisito para empezar</th></tr>'
   +LV.map(k=>'<tr><td><b>'+k+'</b></td>'+Ls.map(x=>'<td>'+horas(k,x[2])+'<small>gramática: '+gh(x[0],k)+' h</small></td>').join('')+'<td>'+esc(HREQ[k])+'</td></tr>').join('')+'</table></div>'
   +'<p class="oe-note">Fuentes: '+Ls.map(x=>'<a href="'+x[2].FUENTE[1]+'" target="_blank" rel="noopener">'+esc(x[2].FUENTE[0])+'</a>').join(' · ')+'. Son cifras orientativas que cada institución presenta como tales; las cifras con asterisco son estimaciones propias (A1 de inglés: la mitad de A2; C2 de español: el Instituto Cervantes no publica cursos de ese nivel en la fuente citada).</p>'
   +'<div class="oe-h">Por tema <small>horas y requisitos de cada unidad</small></div>'
   +'<div class="oe-seg">'+Ls.map(x=>'<button data-tl="'+x[0]+'"'+(XS.tl===x[0]||(!XS.tl&&x[0]===LANG)?' class="on"':'')+'>'+x[1]+'</button>').join('')+'</div>'
   +tablaTemas(XS.tl||LANG);
}
function tablaTemas(l){
  let rows;
  if(l==='de') rows=GRAM.map(t=>{ const x=TDE[t.id]||[4,[]]; return [t.lvl,t.t,x[0],x[1].map(id=>{const g=GRAM.find(y=>y.id===id);return g?g.t:id;}),'g:'+GRAM.indexOf(t)]; });
  else rows=DATA[l].U.map(u=>[u.lvl,u.t,u.h,u.pre.map(id=>(DATA[l].U.find(y=>y.id===id)||{}).t||id),'u:'+u.id]);
  return '<div class="oe-tw"><table class="oe-table xl-tt"><tr><th>Nivel</th><th>Tema</th><th>Horas</th><th>Requisitos</th></tr>'
   +rows.map(r=>'<tr><td>'+r[0]+'</td><td><button class="xl-lnk" data-tt="'+l+'|'+r[4]+'">'+esc(r[1])+'</button></td><td>'+r[2]+' h</td><td>'+(r[3].length?r[3].map(esc).join(' · '):'—')+'</td></tr>').join('')+'</table></div>';
}

/* ============================ CONTRASTIVA ============================ */
function renderContr(){
  const el=document.getElementById('m-contr'); if(!el||typeof CONTRA==='undefined') return;
  const tema=CONTRA.find(c=>c[0]===XS.cTema)||null;
  const fl=XS.fLang||'en';
  const cols=[['es','Español'],['de','Deutsch'],['en','English'],['fr','Français']];
  const bloque=c=>'<div class="oe-card ct-card" id="ct-'+c[0]+'"><div class="ct-hd"><span class="oe-kick">'+esc(c[2])+'</span><h3>'+esc(c[1])+'</h3></div><p>'+c[3]+'</p>'
   +'<div class="oe-tw"><table class="oe-table ct-t"><tr>'+cols.map(([k,t])=>'<th'+(k===LANG?' class="on"':'')+'>'+t+'</th>').join('')+'</tr>'
   +'<tr>'+cols.map(([k])=>'<td'+(k===LANG?' class="on"':'')+'>'+c[4][k]+'</td>').join('')+'</tr>'
   +c[5].map(e=>'<tr class="ct-ex">'+e.map((x,j)=>'<td'+(cols[j][0]===LANG?' class="on"':'')+'>'+esc(x)+'</td>').join('')+'</tr>').join('')+'</table></div>'
   +'<div class="xl-int"><b>Atención.</b> '+c[6]+'</div></div>';
  el.innerHTML='<div class="oe-hero ct-hero"><div class="oe-top"><span class="oe-kick">Análisis contrastivo</span></div><h1>Gramática contrastiva</h1>'
   +'<p class="oe-dateline">Español · Deutsch · English · Français</p><p>Las cuatro lenguas comparten la herencia indoeuropea, pero resuelven de forma distinta los mismos problemas. Cada ficha compara la regla, ofrece ejemplos paralelos y señala la interferencia típica del hispanohablante. La columna de la lengua activa aparece resaltada.</p></div>'
   +'<div class="oe-cat ct-idx">'+['',...CONTRA.map(c=>c[0])].map(k=>{ const c=CONTRA.find(x=>x[0]===k); return '<button data-ct="'+k+'"'+(XS.cTema===k?' class="on"':'')+'>'+(c?esc(c[1]):'Todas las fichas')+'</button>'; }).join('')+'</div>'
   +'<div class="oe-body">'+(tema?bloque(tema):CONTRA.map(bloque).join(''))
   +'<div class="oe-h" id="ct-falsos">Falsos amigos <small>palabras que engañan al hispanohablante</small></div>'
   +'<div class="oe-seg">'+[['en','English'],['fr','Français'],['de','Deutsch']].map(([k,t])=>'<button data-fl="'+k+'"'+(fl===k?' class="on"':'')+'>'+t+'</button>').join('')+'</div>'
   +'<div class="oe-tw"><table class="oe-table"><tr><th>Palabra</th><th>Significa</th><th>No significa</th></tr>'
   +FALSOS[fl].map(r=>'<tr><td><b>'+esc(r[0])+'</b></td><td>'+esc(r[1])+'</td><td style="color:var(--ink3)">'+esc(r[2])+'</td></tr>').join('')+'</table></div>'
   +'<div class="oe-h">Ponga a prueba su olfato <small>8 preguntas</small></div><div class="oe-card oe-quiz" id="ctQuiz"></div></div>';
  el.querySelectorAll('[data-ct]').forEach(b=>b.onclick=()=>{ const k=b.dataset.ct; histPush({go:'contr',sub:k?'c:'+k:''}); XS.cTema=k; renderContr(); window.scrollTo({top:0,behavior:'smooth'}); });
  el.querySelectorAll('[data-fl]').forEach(b=>b.onclick=()=>{ XS.fLang=b.dataset.fl; XS.fq=null; renderContr(); document.getElementById('ct-falsos').scrollIntoView({block:'start'}); });
  fqWire();
}
function fqWire(){
  const box=document.getElementById('ctQuiz'); if(!box) return;
  const L=FALSOS[XS.fLang||'en'];
  if(!XS.fq||XS.fq.l!==XS.fLang){ XS.fq={l:XS.fLang,items:L.slice().sort(()=>Math.random()-.5).slice(0,8),i:0,ok:0,ans:null}; }
  const Q=XS.fq;
  if(Q.i>=Q.items.length){ box.innerHTML='<div class="hint">Resultado</div><div class="q">'+Q.ok+' / '+Q.items.length+'</div><button class="btn" id="fqA">Otra ronda</button>';
    box.querySelector('#fqA').onclick=()=>{ XS.fq=null; fqWire(); }; return; }
  const it=Q.items[Q.i];
  if(!Q.opts){ const w=L.filter(x=>x!==it).sort(()=>Math.random()-.5).slice(0,2).map(x=>x[1]); Q.opts=[it[1],it[2].replace(/ \(=.*\)$/,''),...w].sort(()=>Math.random()-.5); }
  box.innerHTML='<div class="hint">¿Qué significa?</div><div class="q">'+esc(it[0])+'</div><div class="oe-opts">'
   +Q.opts.map((o,j)=>{ let c=''; if(Q.ans!==null){ if(o===it[1])c=' class="ok"'; else if(j===Q.ans)c=' class="no"'; } return '<button data-fo="'+j+'"'+c+(Q.ans!==null?' disabled':'')+'>'+esc(o)+'</button>'; }).join('')+'</div>'
   +'<div class="oe-bar"><span>'+(Q.i+1)+' / '+Q.items.length+'</span><div class="nvbar"><i style="width:'+(Q.i/Q.items.length*100)+'%"></i></div><span>'+Q.ok+' aciertos</span>'+(Q.ans!==null?'<button class="btn" id="fqN">Siguiente</button>':'')+'</div>';
  box.querySelectorAll('[data-fo]').forEach(b=>b.onclick=()=>{ const j=+b.dataset.fo; Q.ans=j; if(Q.opts[j]===it[1]){Q.ok++;try{sfx.ok()}catch(e){}} else {try{sfx.no()}catch(e){}} fqWire(); });
  const n=box.querySelector('#fqN'); if(n) n.onclick=()=>{ Q.i++; Q.ans=null; Q.opts=null; fqWire(); };
}

/* ============================ cableado ============================ */
function wire(el,p){
  el.querySelectorAll('[data-xgo]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} navSel=b.dataset.xgo; xGo(b.dataset.xgo,b.dataset.xsub||''); sideNav(); });
  el.querySelectorAll('[data-xu]').forEach(b=>b.onclick=e=>{ e.stopPropagation(); try{sfx.nav();}catch(_){} xGo('xunit','u:'+b.dataset.xu); });
  el.querySelectorAll('[data-xn]').forEach(b=>b.onclick=()=>xGo('xnivel','n:'+b.dataset.xn));
  el.querySelectorAll('[data-rc]').forEach(b=>b.onclick=()=>{ XS.rcat=b.dataset.rc; render('xrec'); });
  el.querySelectorAll('[data-rn]').forEach(b=>b.onclick=()=>{ XS.rniv=b.dataset.rn; render('xrec'); });
  el.querySelectorAll('[data-tl]').forEach(b=>b.onclick=()=>{ XS.tl=b.dataset.tl; const y=scrollY; render('tiempos'); scrollTo(0,y); });
  el.querySelectorAll('[data-tt]').forEach(b=>b.onclick=()=>{ const [l,s]=b.dataset.tt.split('|');
    if(l==='de'){ if(LANG!=='de') setLang('de',true); goMode('temas'); gramTheory(+s.slice(2)); }
    else { if(LANG!==l) setLang(l,true); xGo('xunit',s); } });
  if(p==='xunit'){ const u=unidad(XS.unit); quizWire(u);
    const pdf=document.getElementById('xPdf'); if(pdf) pdf.onclick=()=>imprimir('<div class="phead"><div class="pbrand">'+esc(D().nombre)+' · Atelier</div><h1>'+esc(u.t)+'</h1><p>'+esc(u.sub)+' · nivel '+u.lvl+' · '+u.h+' h</p></div>'
      +'<h2>Explicación</h2>'+u.teoria+'<div class="pbreak"></div><h2>Cuestionario</h2><ol>'+u.q.map(q=>{const x=q.split('|');return '<li>'+esc(x[0])+'<div class="popts">a) '+esc(x[1])+' &nbsp; b) '+esc(x[2])+' &nbsp; c) '+esc(x[3])+' &nbsp; d) '+esc(x[4])+'</div></li>';}).join('')+'</ol>'
      +'<h2>Soluciones</h2><ol>'+u.q.map(q=>{const x=q.split('|');return '<li><b>'+esc(x[+x[5]+1])+'</b> — '+esc(x[6])+'</li>';}).join('')+'</ol>');
  }
  if(p==='xexam'){
    const box=document.getElementById('xTestBox');
    const w=()=>{ box.innerHTML=testHTML();
      const s=box.querySelector('#xTest'); if(s) s.onclick=()=>{ testNuevo(); w(); };
      box.querySelectorAll('[data-xt]').forEach(b=>b.onclick=()=>{ const T=XS.test, j=+b.dataset.xt, [k,q]=T.items[T.i]; T.ans=j; if(j===+q.split('|')[5]){ T.ok[k]=(T.ok[k]||0)+1; try{sfx.ok()}catch(e){} } else { try{sfx.no()}catch(e){} } w(); });
      const n=box.querySelector('#xTnext'); if(n) n.onclick=()=>{ XS.test.i++; XS.test.ans=null; w(); }; };
    w();
  }
  if(p==='xdic'){ const i=document.getElementById('xDicQ'); let t=null;
    i.oninput=()=>{ clearTimeout(t); t=setTimeout(()=>{ XS.dq=i.value; const pos=i.selectionStart; render('xdic'); const j=document.getElementById('xDicQ'); j.focus(); j.setSelectionRange(pos,pos); },250); }; }
}

/* ============================ ALEMÁN: tiempos ============================ */
const _gt=gramTheory;
gramTheory=function(i){
  _gt(i);
  const t=GRAM[i], x=t&&TDE[t.id]; if(!x) return;
  const h2=document.querySelector('#gramOut .theory h2'); if(!h2) return;
  const pre=x[1].map(id=>{ const j=GRAM.findIndex(g=>g.id===id); return j<0?'':'<button class="oe-chip xl-pre" data-gt="'+j+'"><b>'+GRAM[j].lvl+'</b><span>'+esc(GRAM[j].t)+'</span></button>'; }).join('');
  h2.insertAdjacentHTML('afterend','<div class="xl-time"><div><span class="xl-k">Tiempo estimado</span><b>'+x[0]+' h</b><small>explicación, práctica y repaso</small></div><div class="xl-req"><span class="xl-k">Requisitos</span>'+(pre||'<span class="xl-pre none">Ninguno: es un punto de partida.</span>')+'</div></div>');
  document.querySelectorAll('#gramOut [data-gt]').forEach(b=>b.onclick=e=>{ e.stopPropagation(); try{sfx.nav();}catch(_){} gramTheory(+b.dataset.gt); });
};
const _nvo=nvOpen;
nvOpen=function(k){
  _nvo(k);
  const bar=document.querySelector('#nvOut .stbar'); if(!bar) return;
  const h=HDE[k], hh=GRAM.filter(t=>t.lvl===k).reduce((a,t)=>a+((TDE[t.id]||[0])[0]),0);
  if(!h) return;
  bar.insertAdjacentHTML('afterend','<div class="xl-time big"><div><span class="xl-k">Para llegar a '+k+'</span><b>'+h[0]+(h[1]?'–'+h[1]:'+')+' h</b><small>horas de clase acumuladas · <a href="'+HDE_FUENTE[1]+'" target="_blank" rel="noopener">'+esc(HDE_FUENTE[0])+'</a></small></div>'
   +'<div><span class="xl-k">Gramática de este nivel</span><b>'+hh+' h</b><small>suma de las unidades del itinerario</small></div>'
   +'<div class="xl-req"><span class="xl-k">Requisitos</span><p>'+esc(HREQ[k]||'')+'</p></div></div>');
};

/* ============================ pie: recursos ============================ */
const RES_DE=[
 ['gram','mein-deutschbuch.de · Gramática','https://mein-deutschbuch.de/'],['gram','grammis (IDS Mannheim)','https://grammis.ids-mannheim.de'],['gram','Deutsche Grammatik 2.0','https://deutschegrammatik20.de/'],
 ['video','DW · Nicos Weg','https://learngerman.dw.com/es/nicos-weg/c-47994059'],['video','DW · Deutsch lernen','https://learngerman.dw.com/de/deutsch-lernen/s-9095'],['video','nachrichtenleicht.de','https://www.nachrichtenleicht.de/'],['video','ORF · einfach','https://orf.at/einfach/'],['video','SRF','https://www.srf.ch'],
 ['test','Goethe-Institut · Exámenes','https://www.goethe.de/ins/co/es/spr/prf.html'],['test','TestDaF','https://www.testdaf.de/'],['test','Österreich Institut · ÖSD','https://www.oesterreichinstitut.com/at'],['test','fide (Suiza)','https://fide-service.ch/de'],
 ['dic','DWDS','https://www.dwds.de/'],['dic','Duden','https://www.duden.de/'],['dic','PONS','https://de.pons.com/'],['dic','WordReference DE–ES','https://www.wordreference.com/dees/']];
function pieRecursos(){
  const foot=document.querySelector('.content > footer'); if(!foot) return;
  let box=document.querySelector('.rf-foot');
  if(!box){ box=document.createElement('section'); box.className='rf-foot'; box.setAttribute('aria-label','Recursos oficiales'); foot.after(box); }
  const R=LANG==='de'?RES_DE:D().RES.map(r=>[r[0],r[1],r[2]]);
  const cats=[['gram','Gramática'],['video','Vídeo y audio'],['test','Exámenes y niveles'],['dic','Diccionarios']];
  box.innerHTML='<h2>Recursos oficiales y gratuitos <small>'+({de:'Alemán',en:'Inglés',fr:'Francés',es:'Español'})[LANG]+'</small></h2>'
   +'<div class="rf-cols">'+cats.map(([c,t])=>{ const l=R.filter(r=>r[0]===c); const vis=l.slice(0,8);
     return '<div><h3>'+t+'</h3><ul>'+vis.map(r=>'<li><a href="'+r[2]+'" target="_blank" rel="noopener">'+esc(r[1].replace(/^YouTube · /,'▶ '))+'</a></li>').join('')+'</ul></div>'; }).join('')+'</div>'
   +'<p class="rf-note">Enlaces a sitios de terceros, gratuitos y oficiales, verificados en noviembre de 2026. Sus contenidos, marcas y logotipos pertenecen a sus titulares; este proyecto no los reproduce ni tiene relación comercial con ellos.</p>';
}

/* ============================ arranque ============================ */
['lang','conj','contr'].forEach(id=>{ if(!document.getElementById('m-'+id)){ const s=document.createElement('section'); s.id='m-'+id; s.className='hide'; document.querySelector('.content').insertBefore(s,document.querySelector('.content > footer')); } });
montaSwitch();
const _hf=homeFilas;
homeFilas=function(){ return _hf()+'<div class="rowttl"><h3>Lenguas</h3></div><div class="rowgrid">'
  +fila('Conjugador','Alemán, inglés y francés, con entrenamiento','data-hgo="conj"','#ff9fb0','xconj')
  +fila('Gramática contrastiva','Español · alemán · inglés · francés','data-hgo="contr"','#c9aefc','xscale')
  +fila('Tiempo de aprendizaje','Horas por tema y por nivel','data-hgo="tiempos"','#f2c777','xclock')+'</div>'; };
function setModo(m,silencioso){
  if(m!=='prac'&&m!=='ling') return; MODO=m; try{localStorage.setItem(LKEY,m);}catch(e){}
  aplicaNav();
  if(!silencioso){ const d=m==='ling'?'lnhome':(LANG==='de'?'home':'xhome'); navSel=d; goDestino(d); sideNav(); }
}
/* enfoque: botón flotante con gorro de graduación (encima del bombillo) */
(function(){
  if(document.getElementById('modoBtn')) return;
  const b=document.createElement('button'); b.className='fab modo-fab'; b.id='modoBtn'; b.setAttribute('aria-haspopup','dialog'); b.title='Enfoque: Práctica o Lingüística';
  b.innerHTML='<svg viewBox="0 0 24 24"><path d="M2 9 12 4l10 5-10 5z"/><path d="M6 11v5c0 1.6 2.7 3 6 3s6-1.4 6-3v-5"/><path d="M22 9v6"/><circle cx="22" cy="16" r=".8"/></svg>';
  const p=document.createElement('div'); p.className='fab-pan modo-pan'; p.setAttribute('role','dialog'); p.setAttribute('aria-label','Enfoque');
  document.body.appendChild(b); document.body.appendChild(p);
  const OP=[['prac','Práctica','Comunicarse, leer, escribir y entender: cursos por nivel, gramática, lectura, cultura.'],['ling','Lingüística','Estudiar la lengua: fonética, morfología, sintaxis, léxico, dialectología, con plan de estudios.']];
  function pinta(){ p.innerHTML='<div class="bp-h"><b>Enfoque</b><button class="bp-x" aria-label="Cerrar">✕</button></div>'
    +OP.map(([k,t,d])=>'<button class="mo-op'+(MODO===k?' on':'')+'" data-m="'+k+'"><span class="mo-r"></span><span><b>'+t+'</b><small>'+d+'</small></span></button>').join('');
    p.querySelector('.bp-x').onclick=()=>abre(false);
    p.querySelectorAll('[data-m]').forEach(x=>x.onclick=()=>{ if(x.dataset.m!==MODO){ try{sfx.tap();}catch(e){} setModo(x.dataset.m); } abre(false); });
    b.classList.toggle('ling',MODO==='ling'); }
  function abre(v){ if(v) pinta(); p.classList.toggle('on',v); b.classList.toggle('on',v); b.setAttribute('aria-expanded',v); if(v&&window.BOMBILLO) BOMBILLO.abre(false); if(v&&window.LENGUABTN) LENGUABTN.abre(false); }
  b.onclick=e=>{ e.stopPropagation(); abre(!p.classList.contains('on')); };
  p.addEventListener('click',e=>e.stopPropagation());
  document.addEventListener('click',()=>{ if(p.classList.contains('on')) abre(false); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') abre(false); });
  window.MODOBTN={abre,pinta};
})();
window.xGo=xGo;
setLang(LANG,true);
if(LANG!=='de'||MODO==='ling'){ HIST.pila=[]; HIST.i=-1; goMode(MODO==='ling'?'lnhome':'xhome'); }
else if(page==='home') homeRender();
window.IDIOMAS={nav:aplicaNav,set:setLang,get:()=>LANG,render,modo:()=>MODO,setModo,data:l=>l==='de'?null:DATA[l]};
})();
