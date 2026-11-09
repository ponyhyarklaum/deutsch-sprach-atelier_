/* =====================================================================
   PALABRA AL AZAR · inglés, francés y español
   (El alemán conserva su comportamiento: ficha de verbo o de léxico.)
   Reúne el vocabulario que ya existe en la app para cada lengua:
   glosarios de las lecturas críticas, variación por país, tabla de
   variedades, falsos amigos y la lista léxica comparada (Swadesh).
   Ficha con pronunciación (voz del dispositivo), significado, fuente,
   diccionarios y «Otra palabra».
   ===================================================================== */
(function(){
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const VOZ={en:'en-GB',fr:'fr-FR',es:'es-ES'};
const NOM={en:'English',fr:'Français',es:'Español'};
const COL={de:1,en:2,fr:3};
const CACHE={};
function pool(l){
  if(CACHE[l]) return CACHE[l];
  const P=[], visto=new Set();
  const add=(w,sig,tipo,nota)=>{ w=String(w||'').trim(); if(!w||w.length>40) return; const k=w.toLowerCase(); if(visto.has(k)) return; visto.add(k); P.push({w,sig,tipo,nota}); };
  const trad=l==='es'?'inglés':'español';
  try{ (LECT[l]||[]).forEach(r=>(r.glos||[]).forEach(([w,t])=>add(w,t,'Glosario · '+r.obra,'En '+trad+': '+t+' · nivel '+r.lvl))); }catch(e){}
  try{ (FALSOS[l]||[]).forEach(([w,si,no])=>add(w,si,'Falso amigo','Cuidado: no significa «'+no+'».')); }catch(e){}
  try{ Object.entries(PAIS[l]||{}).forEach(([pais,d])=>d.voc.forEach(r=>{ if(r.length>2) add(r[0],r[2],'Variación · '+pais,(d.cab[1]?d.cab[1]+': '+r[1]:'')); })); }catch(e){}
  try{ (SWADESH||[]).forEach(r=>{ if(l==='es') add(r[0],'de: '+r[1]+' · en: '+r[2]+' · fr: '+r[3],'Léxico básico comparado',r[4]); else add(r[COL[l]],r[0],'Léxico básico comparado','de: '+r[1]+' · en: '+r[2]+' · fr: '+r[3]+(r[4]?' · '+r[4]:'')); }); }catch(e){}
  return CACHE[l]=P;
}
function dics(l,w){ const Q=encodeURIComponent(w.replace(/^(the|to|le|la|les|l'|el|los|las|un|une)\s+/i,''));
  return l==='en'?[['Cambridge','https://dictionary.cambridge.org/es/diccionario/ingles-espanol/'+Q],['WordReference','https://www.wordreference.com/enes/'+Q]]
   :l==='fr'?[['Larousse','https://www.larousse.fr/dictionnaires/francais-espagnol/'+Q],['WordReference','https://www.wordreference.com/fres/'+Q]]
   :[['DLE (RAE)','https://dle.rae.es/'+Q],['WordReference','https://www.wordreference.com/esen/'+Q]]; }
let dlg=null, ult=-1;
function monta(){
  dlg=document.createElement('dialog'); dlg.className='az-dlg'; dlg.setAttribute('aria-label','Palabra al azar');
  document.body.appendChild(dlg);
  dlg.addEventListener('click',e=>{ if(e.target===dlg) dlg.close(); });
}
function hablar(l,t){ try{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(t); u.lang=VOZ[l]; u.rate=.9; speechSynthesis.speak(u); }catch(e){} }
function abre(){
  const l=IDIOMAS.get(), P=pool(l); if(!P.length) return;
  if(!dlg) monta();
  let i; do{ i=Math.floor(Math.random()*P.length); }while(P.length>1&&i===ult); ult=i;
  const x=P[i];
  dlg.innerHTML='<div class="az-card"><div class="az-top"><span class="xl-badge">'+l.toUpperCase()+'</span><span class="az-tipo">'+esc(x.tipo)+'</span><button class="az-x" aria-label="Cerrar">✕</button></div>'
   +'<h2 class="az-w">'+esc(x.w)+'</h2>'
   +'<button class="btn az-oir">▶ Escuchar</button>'
   +'<p class="az-sig">'+esc(x.sig)+'</p>'+(x.nota?'<p class="az-nota">'+esc(x.nota)+'</p>':'')
   +'<div class="az-dic">'+dics(l,x.w).map(([n,u])=>'<a href="'+u+'" target="_blank" rel="noopener">'+n+' ↗</a>').join('')+'</div>'
   +'<div class="az-pie"><span>'+(i+1)+' de '+P.length+' palabras · '+NOM[l]+'</span><button class="btn pri az-otra">Otra palabra</button></div></div>';
  dlg.querySelector('.az-x').onclick=()=>dlg.close();
  dlg.querySelector('.az-oir').onclick=()=>hablar(l,x.w);
  dlg.querySelector('.az-otra').onclick=()=>{ try{sfx.tap();}catch(e){} abre(); };
  if(!dlg.open) dlg.showModal();
  else { const c=dlg.querySelector('.az-card'); if(window.reanima) reanima(c); }
}
const b=document.getElementById('btnRandom');
if(b){
  const prev=b.onclick;
  b.onclick=e=>{ if(window.IDIOMAS&&IDIOMAS.get()!=='de'){ try{sfx.tap();}catch(_){} abre(); } else if(prev) prev.call(b,e); };
  b.title='Palabra al azar';
}
window.AZAR={abre,pool};
})();
