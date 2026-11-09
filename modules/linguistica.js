/* =====================================================================
   ENFOQUE ANALÍTICO · sección Lingüística (DE · EN · FR · ES)
   lnhome  Portada lingüística de la lengua activa
   lnarea  Ámbito (fonética … dialectología) con progresión I-II-III
   lntool  Herramientas: árbol sintáctico, inventario AFI, segmentador
           morfológico, concordancias (KWIC) y léxico comparado
   lnbib   Biblioteca de acceso abierto
   ===================================================================== */
(function(){
const SUBSET=window.SUBSET=window.SUBSET||{};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const L=()=>(window.IDIOMAS?IDIOMAS.get():'de');
const NOMBRE={de:'Deutsch',en:'English',fr:'Français',es:'Español'};
const VOZ={de:'de-DE',en:'en-GB',fr:'fr-FR',es:'es-ES'};
const LS={mod:null,area:'fonetica',tool:'arbol',arbol:'',seg:'',kw:'',q:{}};
Object.assign(PAGES,{lnhome:['Lingüística','ln','ling'],lnarea:['Ámbito lingüístico','ln','ling'],lntool:['Herramientas lingüísticas','ln','ling'],lnbib:['Biblioteca abierta','ln','ling']});
SECS.push('ling');
Object.assign(IC,{lnling:'<path d="M4 19V5M4 12h7M11 5v14M15 9a3 3 0 1 1 0 6M15 9h5M20 9v10"/>',lntool:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',lnbib:'<path d="M4 4h5v16H4zM10 4h5v16h-5zM16 5l4-1 2 15-4 1z"/>'});
Object.assign(MINI,{lnhome:'lnling',lnarea:'lnling',lntool:'lntool',lnbib:'lnbib'});
const TOOLS=[['arbol','Árbol sintáctico','Dibuje la estructura de constituyentes a partir de corchetes etiquetados.'],['afi','Inventario fonológico (AFI)','Sonidos de la lengua con ejemplos que se pueden escuchar.'],['seg','Segmentador morfológico','Separa prefijos, raíz y sufijos frecuentes de una palabra.'],['kwic','Concordancias (KWIC)','Busca una forma en los textos de la app y la muestra en contexto.'],['swadesh','Léxico comparado','Lista básica en cuatro lenguas con notas etimológicas.']];
window.LNNAV=function(l){
  return [{t:'Inicio lingüístico',go:'lnhome',ic:'home'},
   {t:'Plan de estudios',ic:'lnling',hijos:LING.areas.map(([k,t])=>({t,go:'lnarea',sub:'a:'+k}))},
   {t:'Herramientas',ic:'lntool',hijos:TOOLS.map(([k,t])=>({t,go:'lntool',sub:'t:'+k}))},
   {t:'Biblioteca',ic:'lnbib',hijos:[{t:'Acceso abierto',go:'lnbib'},{t:'Gramática contrastiva',go:'contr'},{t:'Conjugador',go:'conj'}]}];
};
SUBSET.lnarea=s=>{ const p=s.slice(2).split(':'); LS.area=p[0]; LS.mod=p[1]!=null?+p[1]:null; }; SUBSET.lntool=s=>{ LS.tool=s.slice(2); };
HSUB.lnarea=s=>{ SUBSET.lnarea(s); render('lnarea'); }; HSUB.lntool=s=>{ SUBSET.lntool(s); render('lntool'); };
function hero(kick,h1,date,p){
  return '<div class="oe-hero xl-hero ln-hero"><div class="oe-top"><span class="xl-badge">'+L().toUpperCase()+'</span><span class="oe-kick">'+kick+'</span></div><h1>'+h1+'</h1>'
   +(date?'<p class="oe-dateline">'+date+'</p>':'')+(p?'<p>'+p+'</p>':'')+'</div>';
}
function hablar(t){ try{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(t); u.lang=VOZ[L()]; u.rate=.85; speechSynthesis.speak(u); }catch(e){} }

/* ---------------- portada ---------------- */
const NOMES={de:'alemán',en:'inglés',fr:'francés',es:'español'};
const AREA=k=>LING.areas.find(a=>a[0]===k);
const modOK=(l,k,i)=>!!(window.PROG&&PROG.get('lnmod',l+'-'+k+'-'+i));
function avArea(l,k){ const n=LCUR[k].m.length; let d=0; for(let i=0;i<n;i++) if(modOK(l,k,i)) d++; const q=window.PROG?PROG.get('quiz','ln-'+l+k):null; return {d,n,q,pct:Math.round(((d+((q||0)>=60?1:0))/(n+1))*100)}; }
const hTot=k=>LCUR[k].h.reduce((a,b)=>a+b,0);
const svgI=d=>'<svg viewBox="0 0 24 24">'+d+'</svg>';
const I_RELOJ='<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', I_LIB='<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>', I_OK='<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>';
function miga(items){ return '<nav class="cu-crumb" aria-label="Ruta">'+items.map((x,i)=>i<items.length-1?'<button data-lgo="'+x[1]+'">'+esc(x[0])+'</button><span>›</span>':'<b>'+esc(x[0])+'</b>').join('')+'</nav>'; }
function vHome(){
  const l=L();
  return '<div class="cu-wrap">'+miga([[NOMBRE[l],'home'],['Lingüística','']])
   +'<header class="cu-head"><h1 class="cu-h1">Sección lingüística</h1><p class="cu-lead">El '+NOMES[l]+' como objeto de estudio, para políglotas, lingüistas y filósofos del lenguaje. Nueve cursos, uno por ámbito, cada uno con tres módulos (fundamentos, análisis e investigación), lecciones teóricas, aplicación al '+NOMES[l]+', comparación con las otras lenguas de la app y lecturas de acceso abierto.</p></header>'
   +'<section class="cu-sec"><h2>Repaso lingüístico</h2><div class="ln-rep">'+LREPASO.map(([k,t,d],i)=>'<div><span>'+(i+1)+' · '+k+'</span><b>'+t+'</b><p>'+d+'</p></div>').join('')+'</div>'
   +'<p class="oe-note">El orden de los cursos sigue ese recorrido: del sonido a la sociedad. Cada curso puede estudiarse por separado si se cumplen sus requisitos.</p></section>'
   +'<section class="cu-sec"><h2>Plan de estudios</h2><div class="cu-cat">'+LING.areas.map(([k,t,d],i)=>{ const a=avArea(l,k);
     return '<button class="cu-card ln-cc" data-ar="'+k+'" style="--sc:hsl('+(i*40)+' 55% 72%)"><div class="cu-band"><span class="cu-k">'+(i+1)+'</span>'+(a.pct===100?'<span class="cu-done">Completado</span>':'')+'</div>'
      +'<div class="cu-body"><b>'+t+'</b><p>'+d+'</p><ul class="cu-meta"><li>'+svgI(I_RELOJ)+hTot(k)+' h · 3 módulos</li><li>'+svgI(I_LIB)+esc(LCUR[k].m.map(m=>m.t).join(' · '))+'</li></ul>'
      +'<div class="cu-prog"><i style="width:'+a.pct+'%"></i></div><span class="cu-pct">'+a.pct+' % completado</span></div></button>'; }).join('')+'</div></section>'
   +'<section class="cu-sec"><h2>Herramientas</h2><div class="ln-grid tools">'+TOOLS.map(([k,t,d])=>'<button class="ln-card" data-tl="'+k+'"><b>'+t+'</b><span>'+d+'</span></button>').join('')+'</div></section>'
   +'<section class="cu-sec"><h2>Lecturas complementarias</h2><div class="oe-grid">'+[OA.wals,OA.lsp,OA.glossa,LING[l].sintaxis.lect[0],LING[l].dialecto.lect[0],OA.ipachart].filter((x,i,A)=>A.findIndex(y=>y[1]===x[1])===i).map(([n,u])=>'<a class="oe-card oe-link" href="'+u+'" target="_blank" rel="noopener"><div><h3>'+esc(n)+'</h3><small>'+u.replace(/^https?:\/\/(www\.)?/,'').split('/')[0]+'</small></div></a>').join('')+'</div>'
   +'<p><button class="btn" data-lb="1">Ver la biblioteca completa ›</button></p></section></div>';
}
/* ---------------- curso de un ámbito ---------------- */
function vArea(){
  const l=L(), k=LS.area, A=AREA(k)||LING.areas[0], C=LCUR[k], d=LING[l][k], ix=LING.areas.indexOf(A), av=avArea(l,k);
  if(LS.mod!=null) return vModulo();
  const mod=(m,i)=>'<button class="cu-it'+(modOK(l,k,i)?' ok':'')+'" data-md="'+i+'"><span class="cu-dot">'+(modOK(l,k,i)?svgI(I_OK):(i+1))+'</span><span><b>Módulo '+['I','II','III'][i]+' · '+esc(m.t)+'</b><br><small class="ln-ob">'+esc(m.o.join(' · '))+'</small></span><small>'+C.h[i]+' h</small></button>';
  const side='<aside class="cu-side"><div class="cu-sc"><div class="cu-badge ln-badge"><span>'+(ix+1)+'</span><em>'+esc(A[1])+'</em></div>'
   +'<div class="cu-ring" style="--p:'+av.pct+'"><b>'+av.pct+' %</b><span>completado</span></div>'
   +'<button class="btn pri cu-cta" data-md="'+Math.min(av.d,2)+'">'+(av.d?'Continuar':'Empezar el curso')+'</button>'
   +'<ul class="cu-facts"><li>'+svgI(I_RELOJ)+'<div><b>'+hTot(k)+' h</b><span>de estudio (3 módulos)</span></div></li><li>'+svgI(I_LIB)+'<div><b>3 lecciones</b><span>con aplicación y comparación</span></div></li></ul></div>'
   +'<div class="cu-otros"><span class="xl-k">Otros ámbitos</span>'+LING.areas.filter(x=>x[0]!==k).map((x)=>'<button data-ar="'+x[0]+'" style="--sc:var(--bg2)"><i>'+(LING.areas.indexOf(x)+1)+'</i>'+x[1]+'</button>').join('')+'</div></aside>';
  let h='<div class="cu-wrap">'+miga([[NOMBRE[l],'home'],['Lingüística','lnhome'],[A[1],'']])
   +'<div class="cu-grid"><div class="cu-main"><header class="cu-head"><h1 class="cu-h1">'+A[1]+'</h1><p class="cu-lead">'+esc(A[2])+' '+esc(d.r)+'</p></header>'
   +'<section class="cu-sec"><h2>Ficha técnica</h2><div class="cu-ficha">'
   +'<div class="cu-fb"><span class="cu-fk">1 · Requisitos previos</span><p>'+esc(C.req)+'</p></div>'
   +'<div class="cu-fb"><span class="cu-fk">2 · Dedicación</span><p><b>'+hTot(k)+' horas</b>: '+C.h.map((x,i)=>'módulo '+['I','II','III'][i]+' '+x+' h').join(', ')+'. Incluye lectura de la lección, aplicación a la lengua y lectura complementaria.</p></div>'
   +'<div class="cu-fb wide"><span class="cu-fk">3 · Temario</span><ul class="cu-ul">'+C.m.map((m,i)=>'<li><b>'+['I','II','III'][i]+'.</b> '+esc(m.t)+'</li>').join('')+'</ul></div>'
   +'<div class="cu-fb wide"><span class="cu-fk">4 · Evaluación</span><p>'+esc(C.eval)+'</p><p>Además, un ejercicio de autocorrección sobre el '+NOMES[l]+' al final de esta página (60 % para superarlo).</p></div>'
   +'<div class="cu-fb wide"><span class="cu-fk">5 · Hitos para completar el curso</span><div class="cu-hitos">'
   +C.m.map((m,i)=>'<div class="cu-hito'+(modOK(l,k,i)?' ok':'')+'"><span class="cu-dot">'+(modOK(l,k,i)?svgI(I_OK):i+1)+'</span><div><b>Módulo '+['I','II','III'][i]+'</b><span>'+esc(m.t)+'</span></div><em>'+(modOK(l,k,i)?'estudiado':'pendiente')+'</em></div>').join('')
   +'<div class="cu-hito'+((av.q||0)>=60?' ok':'')+'"><span class="cu-dot">'+((av.q||0)>=60?svgI(I_OK):4)+'</span><div><b>Ejercicio</b><span>60 % o más sobre el '+NOMES[l]+'</span></div><em>'+(av.q!=null?av.q+' %':'pendiente')+'</em></div></div></div>'
   +'</div></section>'
   +'<section class="cu-sec"><h2>Programa del curso</h2><div class="cu-mod open"><div class="cu-modb" style="display:block;padding-top:8px">'+C.m.map(mod).join('')+'</div></div></section>'
   +'<section class="cu-sec"><h2>Datos del '+NOMES[l]+'</h2><div class="oe-tw">'+d.t+'</div></section>'
   +'<section class="cu-sec"><h2>Ejercicio</h2><div class="oe-card oe-quiz" id="lnQ"></div></section>';
  if(k==='dialecto'&&typeof CULT!=='undefined'&&CULT[l]){
    const Cu=CULT[l];
    h+='<section class="cu-sec"><h2>Escuchar las variedades</h2><div class="oe-grid">'+Cu.news.map(([n,v,u])=>'<a class="oe-card oe-link" href="'+u+'" target="_blank" rel="noopener"><div><h3>'+esc(n)+'</h3><p>'+esc(v)+'</p></div></a>').join('')+'</div><p><button class="btn" data-pgo="pcult">Variación por país en «¿Sabías que…?» ›</button></p></section>';
  }
  h+='<section class="cu-sec"><h2>Lecturas complementarias</h2><div class="oe-grid">'+d.lect.map(([t,u])=>'<a class="oe-card oe-link" href="'+u+'" target="_blank" rel="noopener"><div><h3>'+esc(t)+'</h3><small>'+u.replace(/^https?:\/\/(www\.)?/,'').split('/')[0]+'</small></div></a>').join('')+'</div></section>'
   +'</div>'+side+'</div></div>';
  return h;
}
function vModulo(){
  const l=L(), k=LS.area, A=AREA(k), C=LCUR[k], i=LS.mod, m=C.m[i], d=LING[l][k];
  const otras=['de','en','fr','es'].filter(x=>x!==l);
  return '<div class="cu-wrap ln-lec">'+miga([[NOMBRE[l],'home'],['Lingüística','lnhome'],[A[1],'area'],['Módulo '+['I','II','III'][i],'']])
   +'<header class="cu-head"><span class="cu-fk">'+esc(A[1])+' · módulo '+['I','II','III'][i]+' de 3 · '+C.h[i]+' h</span><h1 class="cu-h1">'+esc(m.t)+'</h1>'
   +'<ul class="ln-obj">'+m.o.map(o=>'<li>'+esc(o)+'</li>').join('')+'</ul></header>'
   +'<section class="cu-sec"><h2>Lección</h2><div class="ln-txt">'+m.x+'</div><div class="ln-con"><span class="cu-fk">Conceptos clave</span>'+m.c.map(c=>'<span>'+esc(c)+'</span>').join('')+'</div></section>'
   +'<section class="cu-sec"><h2>Aplicación al '+NOMES[l]+'</h2><div class="ln-ap"><span class="xl-k">'+esc(d.n[i][0])+'</span><p>'+d.n[i][1]+'</p></div>'+(i===0?'<div class="oe-tw" style="margin-top:12px">'+d.t+'</div>':'')+'</section>'
   +'<section class="cu-sec"><h2>Relacionar con las otras lenguas</h2>'+otras.map(o=>'<details class="ln-cmp"><summary><b>'+NOMBRE[o]+'</b> · '+esc(LING[o][k].n[i][0])+'</summary><p>'+LING[o][k].n[i][1]+'</p></details>').join('')+'</section>'
   +'<section class="cu-sec"><h2>Lectura complementaria</h2><div class="oe-grid">'+m.l.map(([t,u])=>'<a class="oe-card oe-link" href="'+u+'" target="_blank" rel="noopener"><div><h3>'+esc(t)+'</h3><small>'+u.replace(/^https?:\/\/(www\.)?/,'').split('/')[0]+'</small></div></a>').join('')+'</div></section>'
   +'<div class="stacts ln-fin"><button class="btn'+(modOK(l,k,i)?'':' pri')+'" id="lnHecho">'+(modOK(l,k,i)?'✓ Módulo estudiado':'Marcar como estudiado')+'</button>'
   +(i>0?'<button class="btn" data-md="'+(i-1)+'">‹ Módulo '+['I','II','III'][i-1]+'</button>':'')
   +(i<2?'<button class="btn" data-md="'+(i+1)+'">Módulo '+['I','II','III'][i+1]+' ›</button>':'<button class="btn" data-ar="'+k+'">Volver al curso y hacer el ejercicio ›</button>')+'</div></div>';
}
function quizArea(){
  const box=document.getElementById('lnQ'); if(!box) return;
  const l=L(), d=LING[l][LS.area]; const k=l+LS.area;
  if(!LS.qq||LS.qq.k!==k) LS.qq={k,i:0,ok:0,ans:null};
  const Q=LS.qq;
  if(Q.i>=d.q.length){ LS.q[k]=Q.ok+'/'+d.q.length; if(window.PROG) PROG.set('quiz','ln-'+k,Math.round(Q.ok/d.q.length*100));
    box.innerHTML='<div class="hint">Resultado</div><div class="q">'+Q.ok+' / '+d.q.length+'</div><button class="btn" id="lnA">Repetir</button>';
    box.querySelector('#lnA').onclick=()=>{ LS.qq=null; quizArea(); }; return; }
  const p=d.q[Q.i].split('|'), ok=+p[5];
  box.innerHTML='<div class="hint">'+(Q.i+1)+' / '+d.q.length+'</div><div class="q lc-qq">'+esc(p[0])+'</div><div class="oe-opts">'+[1,2,3,4].map((n,j)=>{ let c=''; if(Q.ans!==null){ if(j===ok)c=' class="ok"'; else if(j===Q.ans)c=' class="no"'; } return '<button data-o="'+j+'"'+c+(Q.ans!==null?' disabled':'')+'>'+esc(p[n])+'</button>'; }).join('')+'</div>'
   +(Q.ans!==null?'<p class="xl-exp">'+esc(p[6])+'</p><button class="btn" id="lnN">Siguiente</button>':'');
  box.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{ Q.ans=+b.dataset.o; if(Q.ans===ok){Q.ok++;try{sfx.ok()}catch(e){}} else {try{sfx.no()}catch(e){}} quizArea(); });
  const n=box.querySelector('#lnN'); if(n) n.onclick=()=>{ Q.i++; Q.ans=null; quizArea(); };
}
/* ---------------- herramientas ---------------- */
const EJ_ARBOL={de:'[S [NP [D Der] [N Hund]] [VP [V bellt] [AdvP laut]]]',en:'[S [NP [D The] [N dog]] [VP [V chased] [NP [D the] [N cat]]]]',fr:'[S [NP [D Le] [N chat]] [VP [Cl le] [V regarde]]]',es:'[O [SN [D El] [N niño]] [SV [V lee] [SN [D un] [N libro]]]]'};
function parseArbol(s){
  let i=0; const t=s.replace(/\s+/g,' ').trim();
  function nodo(){
    while(t[i]===' ') i++;
    if(t[i]!=='['){ let w=''; while(i<t.length&&t[i]!==' '&&t[i]!==']'&&t[i]!=='[') w+=t[i++]; return {l:w,h:[]}; }
    i++; let lab=''; while(i<t.length&&t[i]!==' '&&t[i]!=='['&&t[i]!==']') lab+=t[i++];
    const n={l:lab,h:[]};
    while(i<t.length){ while(t[i]===' ') i++; if(t[i]===']'){ i++; break; } if(i>=t.length) break; n.h.push(nodo()); }
    return n;
  }
  const r=nodo(); return r;
}
function svgArbol(r){
  let x=0; const W=90, H=62, P=[];
  (function pos(n,d){ n.d=d; if(!n.h.length){ n.x=x++*W+W/2; } else { n.h.forEach(c=>pos(c,d+1)); n.x=(n.h[0].x+n.h[n.h.length-1].x)/2; } })(r,0);
  let maxd=0; (function md(n){ maxd=Math.max(maxd,n.d); n.h.forEach(md); })(r);
  /* las hojas se alinean abajo */
  (function hoja(n){ if(!n.h.length) n.d=maxd; n.h.forEach(hoja); })(r);
  let s='';
  (function dib(n){ n.h.forEach(c=>{ s+='<line x1="'+n.x+'" y1="'+(n.d*H+30)+'" x2="'+c.x+'" y2="'+(c.d*H+12)+'"/>'; dib(c); });
    s+='<text x="'+n.x+'" y="'+(n.d*H+24)+'" class="'+(n.h.length?'lab':'hoja')+'">'+esc(n.l)+'</text>'; })(r);
  const w=Math.max(x*W,200), h=(maxd+1)*H+10;
  return '<svg class="ln-tree" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" role="img" aria-label="Árbol sintáctico">'+s+'</svg>';
}
const AFI={
 de:{v:[['iː','Biene'],['ɪ','bitte'],['yː','Tür'],['ʏ','Glück'],['eː','See'],['ɛ','Bett'],['øː','schön'],['œ','können'],['aː','Tag'],['a','Mann'],['oː','Boot'],['ɔ','Sonne'],['uː','Hut'],['ʊ','Mutter'],['ə','bitte'],['aɪ̯','Wein'],['aʊ̯','Haus'],['ɔʏ̯','heute']],
  c:[['p','Post'],['b','Bus'],['t','Tag'],['d','Dach'],['k','Kind'],['g','gut'],['f','Fisch'],['v','Wasser'],['s','Haus'],['z','Sonne'],['ʃ','Schule'],['ʒ','Garage'],['ç','ich'],['x','Buch'],['h','Haus'],['m','Mann'],['n','Nase'],['ŋ','Ring'],['l','Land'],['ʁ','rot'],['j','ja'],['pf','Apfel'],['ts','Zeit'],['tʃ','deutsch']]},
 en:{v:[['iː','see'],['ɪ','sit'],['e','bed'],['æ','cat'],['ʌ','cup'],['ɑː','father'],['ɒ','hot'],['ɔː','law'],['ʊ','put'],['uː','food'],['ɜː','bird'],['ə','about'],['eɪ','day'],['aɪ','my'],['ɔɪ','boy'],['əʊ','go'],['aʊ','now'],['ɪə','near']],
  c:[['p','pen'],['b','bad'],['t','tea'],['d','did'],['k','cat'],['g','go'],['f','fall'],['v','van'],['θ','think'],['ð','this'],['s','see'],['z','zoo'],['ʃ','she'],['ʒ','vision'],['h','hat'],['tʃ','church'],['dʒ','judge'],['m','man'],['n','no'],['ŋ','sing'],['l','leg'],['ɹ','red'],['j','yes'],['w','wet']]},
 fr:{v:[['i','si'],['e','été'],['ɛ','mère'],['a','patte'],['ɑ','pâte'],['ɔ','porte'],['o','eau'],['u','fou'],['y','tu'],['ø','peu'],['œ','peur'],['ə','le'],['ɛ̃','vin'],['ɑ̃','sans'],['ɔ̃','bon'],['œ̃','brun'],['j','fille'],['ɥ','huit'],['w','oui']],
  c:[['p','pain'],['b','bon'],['t','tout'],['d','doux'],['k','cou'],['g','goût'],['f','fou'],['v','vous'],['s','sou'],['z','zéro'],['ʃ','chou'],['ʒ','joue'],['m','mou'],['n','nous'],['ɲ','agneau'],['ŋ','parking'],['l','loup'],['ʁ','roue']]},
 es:{v:[['a','casa'],['e','mesa'],['i','vino'],['o','todo'],['u','luna']],
  c:[['p','padre'],['b','barco'],['β','lobo'],['t','tomate'],['d','dedo'],['ð','cada'],['k','casa'],['g','gato'],['ɣ','lago'],['f','fuego'],['θ','zapato (centro-norte de España)'],['s','sol'],['ʝ','mayo'],['x','jamón'],['tʃ','chico'],['m','madre'],['n','nada'],['ɲ','año'],['l','luna'],['ʎ','calle (zonas no yeístas)'],['ɾ','pero'],['r','perro']]}
};
const AFIJOS={
 de:{pre:['un','ver','ent','zer','er','be','ge','miss','ab','an','auf','aus','ein','mit','nach','vor','zu','über','unter','wieder'],suf:['ungen','ung','heit','keit','schaft','lich','isch','ig','bar','sam','los','chen','lein','er','in','nis','tum','en','e','s','t','st']},
 en:{pre:['un','re','dis','mis','pre','over','under','non','in','im','anti','inter','sub','super'],suf:['ization','ation','ness','ment','ity','able','ible','less','ful','ous','ive','ise','ize','ing','ed','er','est','ly','s']},
 fr:{pre:['in','im','dé','dés','re','ré','pré','anti','sur','sous','mé','contre','entre'],suf:['issement','ement','ation','ité','eur','euse','isme','iste','able','ible','eux','euse','ique','ment','ette','er','ir','é','s']},
 es:{pre:['des','in','im','re','pre','sub','sobre','anti','contra','entre','ex','co'],suf:['amiento','imiento','ación','ición','idad','mente','ismo','ista','ble','dor','dora','ito','ita','illo','ón','oso','osa','ero','era','ar','er','ir','s']}
};
function segmenta(w,l){
  const A=AFIJOS[l]; let r=w.toLowerCase(), pre=[], suf=[];
  for(let k=0;k<3;k++){ const p=A.pre.filter(x=>r.startsWith(x)&&r.length-x.length>=3).sort((a,b)=>b.length-a.length)[0]; if(!p) break; pre.push(p); r=r.slice(p.length); }
  for(let k=0;k<3;k++){ const s=A.suf.filter(x=>r.endsWith(x)&&r.length-x.length>=3).sort((a,b)=>b.length-a.length)[0]; if(!s) break; suf.unshift(s); r=r.slice(0,-s.length); }
  return {pre,raiz:r,suf};
}
const EJ_SEG={de:['Unabhängigkeit','Freundschaft','unglaublich','Verkäuferin','Zerstörung'],en:['unbelievable','misunderstanding','carelessness','reorganization','nonviolent'],fr:['désagréable','incroyablement','réorganisation','inoubliable','sûrement'],es:['desafortunadamente','imposibilidad','reorganización','librerito','contradictorio']};
function corpus(l){
  const T=[];
  (LECT[l]||[]).forEach(r=>T.push([r.obra+' ('+r.aut+')',r.txt.join(' ').replace(/<br>/g,' / ')]));
  if(l==='de'&&typeof ST!=='undefined') ST.forEach(s=>T.push([s.t+' (Geschichten)',s.txt.join(' ')]));
  if(l!=='de'&&window.IDIOMAS&&IDIOMAS.data(l)) IDIOMAS.data(l).U.forEach(u=>T.push([u.t+' (unidad)',u.teoria.replace(/<[^>]+>/g,' ')]));
  return T;
}
const sinT=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
function vTool(){
  const l=L(), t=TOOLS.find(x=>x[0]===LS.tool)||TOOLS[0];
  let h=hero(NOMBRE[l]+' · '+({de:'Werkzeug',en:'Tool',fr:'Outil',es:'Herramienta'})[l],t[1],'Herramienta '+(TOOLS.indexOf(t)+1)+' de '+TOOLS.length,t[2])
   +'<div class="oe-seg">'+TOOLS.map(([k,n])=>'<button data-tl="'+k+'"'+(k===t[0]?' class="on"':'')+'>'+n+'</button>').join('')+'</div>';
  if(t[0]==='arbol'){ const v=LS.arbol||EJ_ARBOL[l];
    h+='<p>Escriba la estructura con corchetes: <code>[Etiqueta hijo hijo]</code>. Las hojas son palabras.</p><textarea id="arIn" rows="3" class="ln-in">'+esc(v)+'</textarea>'
     +'<div class="stacts"><button class="btn" data-arej="1">Ejemplo de '+NOMBRE[l]+'</button></div><div class="oe-card ln-treebox" id="arOut">'+svgArbol(parseArbol(v))+'</div>'
     +'<p class="oe-note">Etiquetas habituales: O/S (oración), SN/NP, SV/VP, SP/PP, D, N, V, A, Adv, C (complementante), Cl (clítico). En alemán puede representar los campos topológicos: [S [VF Gestern] [LK hat] [MF Anna das Buch] [RK gelesen]].</p>'; }
  if(t[0]==='afi'){ const A=AFI[l];
    h+='<p>Pulse un símbolo para escuchar la palabra de ejemplo con la voz '+VOZ[l]+' del dispositivo.</p><div class="oe-h">Vocales y diptongos</div><div class="afi-grid">'+A.v.map(([s,w])=>'<button class="afi" data-say="'+esc(w.split(' ')[0])+'"><b>['+s+']</b><span>'+esc(w)+'</span></button>').join('')+'</div>'
     +'<div class="oe-h">Consonantes</div><div class="afi-grid">'+A.c.map(([s,w])=>'<button class="afi" data-say="'+esc(w.split(' ')[0])+'"><b>['+s+']</b><span>'+esc(w)+'</span></button>').join('')+'</div>'
     +'<p class="oe-note">La síntesis de voz del dispositivo es una aproximación. Para la referencia articulatoria completa, consulte la tabla interactiva de la IPA en la biblioteca.</p>'; }
  if(t[0]==='seg'){ const w=LS.seg||EJ_SEG[l][0], S=segmenta(w,l);
    h+='<div class="oe-tools"><input type="search" id="sgIn" value="'+esc(w)+'" placeholder="Escriba una palabra…"></div><div class="cj-ej">Ejemplos: '+EJ_SEG[l].map(x=>'<button data-sg="'+esc(x)+'">'+esc(x)+'</button>').join('')+'</div>'
     +'<div class="oe-card sg-out">'+S.pre.map(p=>'<span class="sg pre">'+esc(p)+'<i>prefijo</i></span>').join('')+'<span class="sg raiz">'+esc(S.raiz)+'<i>base</i></span>'+S.suf.map(p=>'<span class="sg suf">'+esc(p)+'<i>sufijo / desinencia</i></span>').join('')+'</div>'
     +'<p class="oe-note">Segmentación heurística a partir de una lista de afijos frecuentes: no conoce la etimología ni los alomorfos (p. ej. elementos de unión alemanes). Úsela como hipótesis y compruébela en un diccionario etimológico.</p>'; }
  if(t[0]==='kwic'){ const q=LS.kw||({de:'nicht',en:'the',fr:'que',es:'que'})[l]; const C=corpus(l); const rows=[];
    if(q.length>=2){ const Q=sinT(q); C.forEach(([src,txt])=>{ const T=sinT(txt); let i=T.indexOf(Q); while(i>=0&&rows.length<200){ rows.push([txt.slice(Math.max(0,i-45),i),txt.slice(i,i+q.length),txt.slice(i+q.length,i+q.length+45),src]); i=T.indexOf(Q,i+Q.length); } }); }
    h+='<div class="oe-tools"><input type="search" id="kwIn" value="'+esc(q)+'" placeholder="Forma que buscar…"></div><p>'+rows.length+(rows.length>=200?'+':'')+' apariciones en '+C.length+' textos de la app.</p>'
     +'<div class="oe-tw"><table class="oe-table kwic">'+rows.slice(0,120).map(r=>'<tr><td class="kl">'+esc(r[0])+'</td><td class="kk">'+esc(r[1])+'</td><td>'+esc(r[2])+'</td><td class="ks">'+esc(r[3])+'</td></tr>').join('')+'</table></div>'; }
  if(t[0]==='swadesh'){ const cols=[['es','Español'],['de','Deutsch'],['en','English'],['fr','Français']];
    h+='<p>Lista léxica básica inspirada en la de Morris Swadesh. Compare las correspondencias regulares entre las lenguas germánicas (alemán, inglés) y las romances (español, francés).</p><div class="oe-tw"><table class="oe-table sw">'
     +'<tr>'+cols.map(([k,n])=>'<th'+(k===l?' class="on"':'')+'>'+n+'</th>').join('')+'<th>Nota</th></tr>'
     +SWADESH.map(r=>'<tr>'+[0,1,2,3].map(j=>'<td'+(cols[j][0]===l?' class="on"':'')+'>'+esc(r[j])+'</td>').join('')+'<td class="ks">'+esc(r[4])+'</td></tr>').join('')+'</table></div>'
     +'<p class="oe-note">Ley de Grimm: las oclusivas sordas indoeuropeas se hicieron fricativas en germánico (pater → father / Vater; tres → three; cor- → heart / Herz). La segunda mutación separó además el alto alemán (zwei, Wasser) del inglés (two, water).</p>'; }
  return h;
}
/* ---------------- biblioteca ---------------- */
function vBib(){
  const G=[['Tipología y lingüística general',[OA.wals,OA.glotto,OA.glossa,OA.lsp]],['Fonética y fonología',[OA.ipa,OA.ipachart,OA.pfc,OA.atlasent,OA.idea]],
   ['Gramática y léxico',[OA.grammis,OA.dwds,OA.cnrtl,OA.rae,OA.cvc,OA.oqlf]],['Corpus y archivos de textos',[OA.dta,OA.corpes,OA.gut,OA.gallica,OA.ws,OA.bvmc]],
   ['Dialectología y sociolingüística',[OA.rede,OA.ada,OA.vg,OA.ewave,OA.idea]],['Revistas de acceso abierto',[OA.glossa,OA.lo,OA.corela]]];
  return hero('Open Access','Biblioteca de acceso abierto','Revistas, atlas, corpus y libros gratuitos','Recursos académicos de libre acceso, seleccionados por ámbito. Los enlaces llevan a la fuente original; cite siempre la obra y la fecha de consulta.')
   +G.map(([t,l])=>'<div class="oe-h">'+t+'</div><div class="oe-grid">'+l.map(([n,u])=>'<a class="oe-card oe-link" href="'+u+'" target="_blank" rel="noopener"><div><h3>'+esc(n)+'</h3><small>'+u.replace(/^https?:\/\/(www\.)?/,'').split('/')[0]+'</small></div></a>').join('')+'</div>').join('')
   +'<p class="oe-note">Language Science Press y Glossa publican libros y artículos revisados por pares con licencia Creative Commons; WALS y Glottolog son bases de datos del Instituto Max Planck. Comprobados en noviembre de 2026.</p>';
}
/* ---------------- render ---------------- */
function render(p){
  const el=document.getElementById('m-ling'); if(!el) return;
  el.innerHTML=({lnhome:vHome,lnarea:vArea,lntool:vTool,lnbib:vBib}[p]||vHome)(); if(window.reanima) reanima(el);
  el.querySelectorAll('[data-ar]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} navSel='lnarea:a:'+b.dataset.ar; xGo('lnarea','a:'+b.dataset.ar); sideNav(); });
  el.querySelectorAll('[data-tl]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} navSel='lntool:t:'+b.dataset.tl; xGo('lntool','t:'+b.dataset.tl); sideNav(); });
  el.querySelectorAll('[data-lb]').forEach(b=>b.onclick=()=>{ goDestino('lnbib'); });
  el.querySelectorAll('[data-md]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} xGo('lnarea','a:'+LS.area+':'+b.dataset.md); window.scrollTo(0,0); });
  el.querySelectorAll('[data-lgo]').forEach(b=>b.onclick=()=>{ const g=b.dataset.lgo; if(g==='area') xGo('lnarea','a:'+LS.area); else goDestino(g); });
  el.querySelectorAll('[data-pgo]').forEach(b=>b.onclick=()=>goDestino(b.dataset.pgo));
  const lh=el.querySelector('#lnHecho'); if(lh) lh.onclick=()=>{ const id=L()+'-'+LS.area+'-'+LS.mod; if(PROG.get('lnmod',id)) PROG.quita('lnmod',id); else PROG.set('lnmod',id,1); render('lnarea'); };
  if(p==='lnarea'&&LS.mod==null) quizArea();
  if(p==='lntool'){
    const ar=el.querySelector('#arIn'); if(ar) ar.oninput=()=>{ LS.arbol=ar.value; try{ el.querySelector('#arOut').innerHTML=svgArbol(parseArbol(ar.value)); }catch(e){} };
    el.querySelectorAll('[data-arej]').forEach(b=>b.onclick=()=>{ LS.arbol=''; render('lntool'); });
    el.querySelectorAll('[data-say]').forEach(b=>b.onclick=()=>hablar(b.dataset.say));
    const sg=el.querySelector('#sgIn'); if(sg) sg.onchange=sg.onsearch=()=>{ LS.seg=sg.value.trim(); render('lntool'); };
    el.querySelectorAll('[data-sg]').forEach(b=>b.onclick=()=>{ LS.seg=b.dataset.sg; render('lntool'); });
    const kw=el.querySelector('#kwIn'); if(kw){ let tm=null; kw.oninput=()=>{ clearTimeout(tm); tm=setTimeout(()=>{ LS.kw=kw.value.trim(); const pos=kw.selectionStart; render('lntool'); const k=document.getElementById('kwIn'); k.focus(); k.setSelectionRange(pos,pos); },300); }; }
  }
  const t=document.getElementById('pageTitle'); if(t&&PAGES[p]) t.textContent=PAGES[p][0];
}
const _gm=goMode; goMode=function(p){ _gm(p); if(PAGES[page]&&PAGES[page][2]==='ling') render(page); };
window.LINGUISTICA={render};
})();
