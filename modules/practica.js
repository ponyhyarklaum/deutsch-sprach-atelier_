/* =====================================================================
   ENFOQUE PRÁCTICO · páginas comunes a las cuatro lenguas
   plect  Lectura crítica (textos de dominio público por nivel)
   ptrad  Traducción sistemática (noticias de práctica y fragmentos de novela)
   pcult  Inmersión cultural («¿Sabías que…?», países, variedades, noticieros)
   pcura  Curaduría: libros de gramática y literatura, consejos de estudio
   pprog  Mi progreso (cuenta de Google opcional, exportar / importar)
   ===================================================================== */
window.reanima=window.reanima||function(el){ if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches) return; el.style.animation='none'; void el.offsetWidth; el.style.animation=''; };
(function(){
const SUBSET=window.SUBSET=window.SUBSET||{};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LV=['A1','A2','B1','B2','C1','C2'];
const L=()=>(window.IDIOMAS?IDIOMAS.get():'de');
const NOMBRE={de:'Deutsch',en:'English',fr:'Français',es:'Español'};
const VOZ={de:'de-DE',en:'en-GB',fr:'fr-FR',es:'es-ES'};
const col=k=>(NIV[NIVI[k]]||{}).c||'var(--brand)';
const KI={lect:{de:'Lesen',en:'Reading',fr:'Lecture',es:'Lectura'},trad:{de:'Übersetzen',en:'Translation',fr:'Traduction',es:'Traducción'},cult:{de:'Kultur',en:'Culture',fr:'Culture',es:'Cultura'},cura:{de:'Bibliothek',en:'Library',fr:'Bibliothèque',es:'Biblioteca'}};
const K=k=>KI[k][L()];
const PS={pais:null,lect:null,trad:null,q:null,ans:{},sab:0};
Object.assign(PAGES,{plect:['Lectura crítica','pr','prac'],ptrad:['Traducción sistemática','pr','prac'],pcult:['¿Sabías que…?','pr','prac'],pcura:['Libros y consejos','pr','prac'],pprog:['Mi progreso','pr','prac']});
SECS.push('prac');
Object.assign(IC,{plect:'<path d="M3 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/><path d="M6 9h3M6 12h3M15 9h3"/>',
 ptrad:'<path d="M4 5h8M8 3v2M5 13c2-2 4-5 5-8M6 9c1 2 3 3.5 6 4.5"/><path d="m13 21 4-9 4 9M14.5 18h5"/>',
 pcult:'<circle cx="12" cy="12" r="9.5"/><path d="M12 2.5c3 3 3 16 0 19M12 2.5c-3 3-3 16 0 19M3 9h18M3 15h18"/>',
 pcura:'<path d="M5 4h4v16H5zM10 4h4v16h-4z"/><path d="m15.5 5 3.8-1 3 15.5-3.8 1z"/>',
 pprog:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'});
Object.assign(MINI,{plect:'plect',ptrad:'ptrad',pcult:'pcult',pcura:'pcura',pprog:'pprog'});
Object.assign(COLOR,{plect:'#f5a9a9',ptrad:'#8fc4ff',pcult:'#84dcc0',pcura:'#c9aefc',pprog:'#f2c777'});
Object.assign(RECT,{plect:['Lectura crítica','Textos de dominio público'],ptrad:['Traducción','Noticias y novelas'],pcult:['¿Sabías que…?','Cultura e historia'],pcura:['Libros y consejos','Curaduría'],pprog:['Mi progreso','Avance guardado']});
window.PRNAV=function(l){
  const H=[{t:'Lectura crítica',go:'plect'},{t:'Traducción sistemática',go:'ptrad'},{t:'¿Sabías que…?',go:'pcult'},{t:'Libros y consejos',go:'pcura'},{t:'Mi progreso',go:'pprog'}];
  if(l==='de') H.splice(0,0,{t:'Geschichten',go:'lectura'}), H.splice(4,0,{t:'Österreich',go:'oest'},{t:'Schweiz',go:'schw'});
  return [{t:'Lectura y cultura',ic:'plect',hijos:H}];
};
SUBSET.plect=s=>{ PS.lect=s.slice(2); PS.q=null; PS.ans={}; };
SUBSET.ptrad=s=>{ PS.trad=s.slice(2); };
HSUB.plect=s=>{ SUBSET.plect(s); render('plect'); };
HSUB.ptrad=s=>{ SUBSET.ptrad(s); render('ptrad'); };

function hero(kick,h1,date,p){
  return '<div class="oe-hero xl-hero"><div class="oe-top"><span class="xl-badge">'+L().toUpperCase()+'</span><span class="oe-kick">'+kick+'</span></div><h1>'+h1+'</h1>'
   +(date?'<p class="oe-dateline">'+date+'</p>':'')+(p?'<p>'+p+'</p>':'')+'</div>';
}
function hablar(t){ try{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(t.replace(/<[^>]+>/g,' ')); u.lang=VOZ[L()]; u.rate=.92; speechSynthesis.speak(u); }catch(e){} }

/* ---------------- Lectura crítica ---------------- */
function lista(){ return (LECT[L()]||[]); }
function vLect(){
  const T=lista(), r=T.find(x=>x.id===PS.lect);
  if(!r) return hero(NOMBRE[L()]+' · '+K('lect'),'Lectura crítica','Obras de dominio público · A1–C2','Una obra por nivel, en progresión lineal. De A1 a B2, adaptaciones propias que respetan el argumento; en C1 y C2, fragmentos breves del original. Cada texto trae glosario, audio, comprensión y preguntas de lectura crítica para pensar, no solo para responder.')
   +'<div class="lc-grid">'+T.map(x=>{ const p=PROG.get('lect',x.id);
     return '<button class="lc-card" data-lc="'+x.id+'" style="--sc:'+col(x.lvl)+'"><span class="lv">'+x.lvl+'</span><b>'+esc(x.obra)+'</b><span>'+esc(x.aut)+(x.anio>0?' · '+x.anio:'')+'</span><em>'+esc(x.tipo)+'</em>'
      +'<i class="lc-bar"><i style="width:'+(p||0)+'%"></i></i></button>'; }).join('')+'</div>'
   +'<p class="oe-note">Las adaptaciones son de redacción propia y no reproducen el texto original; los fragmentos originales pertenecen al dominio público (autores fallecidos hace más de setenta años o más de ochenta en España para autores anteriores a 1987).</p>';
  const ix=T.indexOf(r);
  return '<div class="theory lc-read"><div class="sb2 lc-meta">'+r.lvl+' · '+esc(r.tipo)+'</div><h2 class="lc-t">'+esc(r.obra)+'</h2><p class="lc-a">'+esc(r.aut)+(r.anio>0?' ('+r.anio+')':'')+' · <a href="'+r.fuente[1]+'" target="_blank" rel="noopener">'+esc(r.fuente[0])+' ↗</a></p>'
   +'<div class="stacts"><button class="btn" id="lcOir">▶ Escuchar</button><button class="btn" id="lcPara">■ Detener</button></div>'
   +'<div class="lc-txt">'+r.txt.map(p=>'<p>'+p+'</p>').join('')+'</div>'
   +'<div class="lc-glos"><h4>Glosario</h4>'+r.glos.map(([a,b])=>'<span><b>'+esc(a)+'</b> '+esc(b)+'</span>').join('')+'</div>'
   +'<div class="oe-h">1 · Comprensión <small>'+r.q.length+' preguntas</small></div><div class="oe-card oe-quiz" id="lcQ"></div>'
   +'<div class="oe-h">2 · Lectura crítica <small>escriba su respuesta y compárela con la pista</small></div>'
   +r.critica.map((c,j)=>'<div class="oe-card lc-crit"><b>'+esc(c[0])+'</b><textarea data-cr="'+j+'" rows="3" placeholder="Su respuesta…">'+esc(PS.ans[r.id+j]||'')+'</textarea><details><summary>Pista para el análisis</summary><p>'+esc(c[1])+'</p></details></div>').join('')
   +'<div class="tnav">'+(T[ix-1]?'<button class="tnv prev" data-lc="'+T[ix-1].id+'"><span>‹ Lectura anterior</span><b>'+esc(T[ix-1].obra)+'</b><em>'+T[ix-1].lvl+'</em></button>':'<span></span>')
   +(T[ix+1]?'<button class="tnv next" data-lc="'+T[ix+1].id+'"><span>Lectura siguiente ›</span><b>'+esc(T[ix+1].obra)+'</b><em>'+T[ix+1].lvl+'</em></button>':'<span></span>')+'</div></div>';
}
function lcQuiz(r){
  const box=document.getElementById('lcQ'); if(!box) return;
  if(!PS.q||PS.q.id!==r.id) PS.q={id:r.id,i:0,ok:0,ans:null};
  const Q=PS.q;
  if(Q.i>=r.q.length){ const pct=Math.round(Q.ok/r.q.length*100); PROG.set('lect',r.id,pct);
    box.innerHTML='<div class="hint">Resultado</div><div class="q">'+Q.ok+' / '+r.q.length+'</div><button class="btn" id="lcAg">Repetir</button>';
    box.querySelector('#lcAg').onclick=()=>{ PS.q=null; lcQuiz(r); }; return; }
  const p=r.q[Q.i].split('|'), ok=+p[5];
  box.innerHTML='<div class="hint">'+(Q.i+1)+' / '+r.q.length+'</div><div class="q lc-qq">'+esc(p[0])+'</div><div class="oe-opts">'
   +[1,2,3,4].map((n,j)=>{ let c=''; if(Q.ans!==null){ if(j===ok)c=' class="ok"'; else if(j===Q.ans)c=' class="no"'; } return '<button data-o="'+j+'"'+c+(Q.ans!==null?' disabled':'')+'>'+esc(p[n])+'</button>'; }).join('')+'</div>'
   +(Q.ans!==null?'<p class="xl-exp">'+esc(p[6])+'</p><button class="btn" id="lcN">Siguiente</button>':'');
  box.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{ Q.ans=+b.dataset.o; if(Q.ans===ok){Q.ok++;try{sfx.ok()}catch(e){}} else {try{sfx.no()}catch(e){}} lcQuiz(r); });
  const n=box.querySelector('#lcN'); if(n) n.onclick=()=>{ Q.i++; Q.ans=null; lcQuiz(r); };
}

/* ---------------- Traducción ---------------- */
const NOTICIAS={de:[['nachrichtenleicht.de','https://www.nachrichtenleicht.de/'],['ORF · einfach','https://orf.at/einfach/'],['tagesschau','https://www.youtube.com/@tagesschau']],
 en:[['VOA Learning English','https://learningenglish.voanews.com/'],['BBC Learning English','https://www.bbc.co.uk/learningenglish/english/'],['BBC News','https://www.youtube.com/@BBCNews']],
 fr:[['RFI · Journal en français facile','https://francaisfacile.rfi.fr/fr/podcasts/journal-en-fran%C3%A7ais-facile/'],['TV5MONDE · Apprendre','https://apprendre.tv5monde.com/fr'],['FRANCE 24','https://www.youtube.com/@FRANCE24']],
 es:[['RTVE','https://www.rtve.es/'],['DW Español','https://www.youtube.com/@dwespanol'],['BBC News Mundo','https://www.youtube.com/@BBCMundo']]};
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^\w\s]/g,' ').replace(/\s+/g,' ');
function vTrad(){
  const T=TRAD[L()]||[], t=T.find(x=>x.id===PS.trad), dir=L()==='es'?'español → inglés':NOMBRE[L()]+' → español';
  if(!t) return hero(NOMBRE[L()]+' · '+K('trad'),'Traducción sistemática',dir+' · noticias de práctica y fragmentos de novela','Traducir obliga a decidir sobre cada palabra, cada tiempo verbal y cada matiz. El método: traduzca, compare con la versión de referencia y revise los términos clave que faltan. Después, aplique lo aprendido a noticias reales de las fuentes oficiales enlazadas abajo.')
   +'<div class="lc-grid">'+T.map(x=>{ const p=PROG.get('trad',x.id); return '<button class="lc-card" data-tr="'+x.id+'" style="--sc:'+col(x.lvl)+'"><span class="lv">'+x.lvl+'</span><b>'+esc(x.tit)+'</b><em>'+esc(x.tipo)+'</em><i class="lc-bar"><i style="width:'+(p||0)+'%"></i></i></button>'; }).join('')+'</div>'
   +'<div class="oe-h">Noticias reales para traducir <small>fuentes oficiales</small></div><div class="oe-grid">'+(NOTICIAS[L()]||[]).map(([n,u])=>'<a class="oe-card oe-link" href="'+u+'" target="_blank" rel="noopener"><div><h3>'+esc(n)+'</h3><p>Elija una noticia breve, tradúzcala por párrafos y después retradúzcala a la lengua original sin mirar (traducción bidireccional).</p><small>'+u.replace(/^https?:\/\/(www\.)?/,'').split('/')[0]+'</small></div></a>').join('')+'</div>'
   +'<p class="oe-note">Las «noticias de práctica» son textos de redacción propia con estilo periodístico, no noticias reales. Los textos de las fuentes enlazadas pertenecen a sus medios: tradúzcalos para su estudio personal, sin publicarlos.</p>';
  return '<div class="theory"><div class="sb2 lc-meta">'+t.lvl+' · '+esc(t.tipo)+'</div><h2 class="lc-t">'+esc(t.tit)+'</h2>'
   +'<div class="tr-src"><p>'+esc(t.src)+'</p><button class="btn" id="trOir">▶ Escuchar</button></div>'
   +'<textarea id="trIn" rows="5" placeholder="Su traducción…">'+esc(PS.ans['t'+t.id]||'')+'</textarea>'
   +'<div class="stacts"><button class="btn pri" id="trOk">Comparar</button></div><div id="trRes"></div></div>';
}
function trCheck(t){
  const v=document.getElementById('trIn').value; PS.ans['t'+t.id]=v; const n=norm(v);
  const ok=t.claves.filter(([k,alts])=>alts.split('|').some(a=>n.includes(norm(a).trim())));
  const pct=Math.round(ok.length/t.claves.length*100); PROG.set('trad',t.id,pct);
  document.getElementById('trRes').innerHTML='<div class="oe-card"><div class="hint">Términos clave cubiertos: '+ok.length+' de '+t.claves.length+' · '+pct+' %</div>'
   +'<div class="tr-keys">'+t.claves.map(([k,a])=>'<span class="'+(ok.some(o=>o[0]===k)?'ok':'no')+'" title="Aceptado: '+esc(a.split('|').join(', '))+'">'+esc(k)+'</span>').join('')+'</div>'
   +'<p><b>Versión de referencia:</b> '+esc(t.ref)+'</p><p class="oe-note">La comparación busca los términos clave, no la frase exacta: una buena traducción puede ser distinta de la referencia.</p></div>';
}

/* ---------------- Cultura ---------------- */
function vCult(){
  const C=CULT[L()]; if(!C) return '';
  if(PS.paisL!==L()){ PS.pais=null; PS.paisL=L(); }
  const S=C.sabias, i=PS.sab%S.length;
  return hero(NOMBRE[L()]+' · '+K('cult'),'¿Sabías que…?','Países, variedades, historia y noticieros','La lengua no es solo gramática: se habla en países distintos, con acentos, palabras y culturas propias. Escuche los noticieros de cada variedad y compare.')
   +'<div class="sb-box"><span class="xl-k">¿Sabías que…?</span><p id="sbTxt">'+esc(S[i])+'</p><div class="sb-nav"><button class="btn" id="sbPrev">‹</button><span>'+(i+1)+' / '+S.length+'</span><button class="btn" id="sbNext">›</button></div></div>'
   +'<div class="oe-h">Dónde se habla <small>pulse un país para ver su vocabulario y sus rasgos</small></div><div class="oe-chips pa-chips" role="tablist">'+C.paises.map(([p,n])=>'<button role="tab" class="oe-chip pa-chip'+(PS.pais===p?' on':'')+'" data-pa="'+esc(p)+'" aria-selected="'+(PS.pais===p)+'"><b>'+esc(p)+'</b><span>'+esc(n)+'</span></button>').join('')+'</div>'
   +'<div id="paBox">'+paisBox(C)+'</div>'
   +'<div class="oe-h">Una misma lengua, palabras distintas</div><div class="oe-tw"><table class="oe-table"><tr>'+C.voc.cab.map(c=>'<th>'+esc(c)+'</th>').join('')+'</tr>'+C.voc.filas.map(f=>'<tr>'+f.map(x=>'<td>'+esc(x)+'</td>').join('')+'</tr>').join('')+'</table></div>'
   +'<div class="oe-h">Noticieros por variedad <small>canales oficiales de servicio público o internacionales</small></div><div class="oe-grid">'+C.news.map(([n,v,u])=>'<a class="oe-card oe-link" href="'+u+'" target="_blank" rel="noopener"><div><h3>'+esc(n)+'</h3><p>'+esc(v)+'</p><small>'+u.replace(/^https?:\/\/(www\.)?/,'').split('/')[0]+'</small></div></a>').join('')+'</div>'
   +'<div class="oe-h">Un poco de historia</div><div class="theory">'+C.hist.map(p=>'<p>'+esc(p)+'</p>').join('')+'</div>'
   +'<p class="oe-note">En la sección Lingüística, «Dialectología y sociolingüística» desarrolla estos temas con la teoría correspondiente.</p>';
}
function paisBox(C){
  const P=(typeof PAIS!=='undefined'&&PAIS[L()])||{}, k=PS.pais&&P[PS.pais]?PS.pais:null;
  if(!k) return '';
  const d=P[k], tres=d.voc.some(r=>r.length>2);
  return '<div class="pa-box"><div class="pa-hd"><b>'+esc(k)+'</b><button class="pa-x" data-pa="" aria-label="Cerrar">✕</button></div>'
   +'<div class="pa-cols"><div><span class="xl-k">Vocabulario</span><div class="oe-tw"><table class="oe-table"><tr>'+d.cab.concat(tres?[L()==='es'?'Significado':'Español']:[]).map(c=>'<th>'+esc(c)+'</th>').join('')+'</tr>'
   +d.voc.map(r=>'<tr>'+r.map((x,i)=>'<td'+(i===0?' class="pa-loc"':'')+'>'+esc(x)+'</td>').join('')+'</tr>').join('')+'</table></div></div>'
   +'<div><span class="xl-k">Aspectos que cambian</span><ul class="pa-ras">'+d.ras.map(r=>'<li>'+esc(r)+'</li>').join('')+'</ul>'
   +(d.ir?'<button class="btn" data-pgo="'+d.ir[0]+'">'+esc(d.ir[1])+' ›</button>':'')+'</div></div></div>';
}
/* ---------------- Curaduría ---------------- */
function vCura(){
  const C=CURA[L()]; if(!C) return '';
  return hero(NOMBRE[L()]+' · '+K('cura'),'Libros y consejos','Curaduría de gramáticas, literatura y hábitos de estudio','Selección orientativa sin relación comercial con las editoriales. Las obras se citan como referencia bibliográfica; ninguna se reproduce en esta web.')
   +'<div class="oe-h">Gramáticas recomendadas</div><div class="oe-tw"><table class="oe-table"><tr><th>Autor</th><th>Obra</th><th>Editorial</th><th>Nivel</th></tr>'+C.gram.map(g=>'<tr><td>'+esc(g[0])+'</td><td><i>'+esc(g[1])+'</i></td><td>'+esc(g[2])+'</td><td>'+esc(g[3])+'</td></tr>').join('')+'</table></div>'
   +(L()==='de'?'<p><button class="btn" data-pgo="biblio">Ver la bibliografía completa de Grammatikbücher ›</button></p>':'')
   +'<div class="oe-h">Literatura por nivel</div><div class="oe-tw"><table class="oe-table"><tr><th>Autor</th><th>Obra</th><th>Nivel</th></tr>'+C.lit.map(g=>'<tr><td>'+esc(g[0])+'</td><td><i>'+esc(g[1])+'</i></td><td>'+esc(g[2])+'</td></tr>').join('')+'</table></div>'
   +'<div class="oe-h">Consejos para la inmersión</div><ol class="cu-tips">'+C.tips.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ol>'
   +'<p class="oe-note">¿Atascado en algo concreto? Pulse el bombillo de la esquina inferior: propone estrategias basadas en la investigación sobre el aprendizaje.</p>';
}
/* ---------------- Progreso ---------------- */
function vProg(){
  const D=PROG.todo(), aprob=ids=>ids.filter(id=>(D.quiz[id]||0)>=60).length;
  const fila=(n,tot,hecho)=>'<div class="pg-bar"><span>'+n+'</span><i><i style="width:'+(tot?Math.round(hecho/tot*100):0)+'%"></i></i><b>'+hecho+' / '+tot+'</b></div>';
  const lenguas=[['de','Alemán',GRAM.map(t=>t.id)]].concat(['en','fr','es'].filter(l=>IDIOMAS.data(l)).map(l=>[l,{en:'Inglés',fr:'Francés',es:'Español'}[l],IDIOMAS.data(l).U.map(u=>u.id)]));
  return hero('Progreso','Mi progreso',D.act?'Última actividad: '+D.act.slice(0,10):'Aún sin actividad','Unidades superadas (60 % o más en el cuestionario), lecturas, traducciones y entrenamiento del conjugador.')
   +(window.CUENTA?CUENTA.html():'')
   +'<div class="pg-grid">'+lenguas.map(([l,n,ids])=>'<div class="oe-card"><h3>'+n+'</h3>'
     +fila('Gramática',ids.length,aprob(ids))
     +fila('Lecturas',(LECT[l]||[]).length,(LECT[l]||[]).filter(r=>D.lect[r.id]!=null).length)
     +fila('Traducciones',(TRAD[l]||[]).length,(TRAD[l]||[]).filter(r=>D.trad[r.id]!=null).length)+'</div>').join('')+'</div>'
   +'<p>Conjugador: <b>'+D.conj.ok+'</b> aciertos de <b>'+D.conj.tot+'</b> intentos.</p>'
   +'<div class="stacts"><button class="btn" id="pgExp">Exportar progreso (JSON)</button><label class="btn">Importar<input type="file" id="pgImp" accept="application/json" hidden></label><button class="btn" id="pgDel">Borrar progreso de este navegador</button></div>';
}

/* ---------------- render y cableado ---------------- */
function render(p){
  const el=document.getElementById('m-prac'); if(!el) return;
  el.innerHTML=({plect:vLect,ptrad:vTrad,pcult:vCult,pcura:vCura,pprog:vProg}[p]||vLect)(); reanima(el);
  el.querySelectorAll('[data-lc]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} xGo('plect','r:'+b.dataset.lc); });
  el.querySelectorAll('[data-tr]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} xGo('ptrad','t:'+b.dataset.tr); });
  el.querySelectorAll('[data-pgo]').forEach(b=>b.onclick=()=>{ goDestino(b.dataset.pgo); });
  if(p==='plect'){ const r=lista().find(x=>x.id===PS.lect); if(r){ lcQuiz(r);
    el.querySelector('#lcOir').onclick=()=>hablar(r.txt.join(' ')); el.querySelector('#lcPara').onclick=()=>{ try{speechSynthesis.cancel();}catch(e){} };
    el.querySelectorAll('[data-cr]').forEach(t=>t.oninput=()=>{ PS.ans[r.id+t.dataset.cr]=t.value; }); } }
  if(p==='ptrad'){ const t=(TRAD[L()]||[]).find(x=>x.id===PS.trad); if(t){ el.querySelector('#trOk').onclick=()=>trCheck(t); el.querySelector('#trOir').onclick=()=>hablar(t.src); } }
  if(p==='pcult'){ const C=CULT[L()];
    const wire=()=>{ el.querySelectorAll('[data-pa]').forEach(b=>b.onclick=()=>{ const v=b.dataset.pa; PS.pais=(PS.pais===v||!v)?null:v; try{sfx.tap();}catch(e){}
      el.querySelectorAll('.pa-chip').forEach(c=>{ const on=c.dataset.pa===PS.pais; c.classList.toggle('on',on); c.setAttribute('aria-selected',on); });
      const box=el.querySelector('#paBox'); box.innerHTML=paisBox(C); box.querySelectorAll('[data-pgo]').forEach(x=>x.onclick=()=>goDestino(x.dataset.pgo)); wire2(box); }); };
    const wire2=box=>box.querySelectorAll('.pa-x').forEach(b=>b.onclick=()=>{ PS.pais=null; el.querySelectorAll('.pa-chip').forEach(c=>c.classList.remove('on')); box.innerHTML=''; });
    wire(); const up=d=>{ PS.sab=(PS.sab+d+C.sabias.length)%C.sabias.length; render('pcult'); };
    el.querySelector('#sbPrev').onclick=()=>up(-1); el.querySelector('#sbNext').onclick=()=>up(1);
    clearInterval(PS.tm); PS.tm=setInterval(()=>{ if(page!=='pcult'){ clearInterval(PS.tm); return; } PS.sab++; const t=document.getElementById('sbTxt'); if(t){ t.textContent=C.sabias[PS.sab%C.sabias.length]; t.nextElementSibling.querySelector('span').textContent=(PS.sab%C.sabias.length+1)+' / '+C.sabias.length; } },9000); }
  if(p==='pprog'){ if(window.CUENTA) CUENTA.wire(el);
    el.querySelector('#pgExp').onclick=()=>{ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(PROG.todo(),null,1)],{type:'application/json'})); a.download='atelier-progreso.json'; a.click(); };
    el.querySelector('#pgImp').onchange=e=>{ const f=e.target.files[0]; if(!f) return; f.text().then(t=>{ try{ PROG.importa(JSON.parse(t)); render('pprog'); }catch(_){} }); };
    el.querySelector('#pgDel').onclick=()=>{ if(el.querySelector('#pgDel').dataset.c){ PROG.borra(); render('pprog'); } else { el.querySelector('#pgDel').dataset.c=1; el.querySelector('#pgDel').textContent='Pulse otra vez para confirmar'; } };
  }
  const t=document.getElementById('pageTitle'); if(t&&PAGES[p]) t.textContent=PAGES[p][0];
}
const _gm=goMode; goMode=function(p){ _gm(p); if(PAGES[page]&&PAGES[page][2]==='prac') render(page); };
window.PRACTICA={render};
})();
