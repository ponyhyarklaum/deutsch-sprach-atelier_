/* =========================================================================
   MODO LECTURA · panel tipo Kindle disponible en todas las páginas.
   Ajustes: fondo (Blanco, Crema, Sepia, Verde, Negro), tipo de letra,
   tamaño, interlineado, márgenes y alineación. «Por defecto» lo restablece.
   Se recuerda en el navegador y, dentro de Moodle, en el intento SCORM.
   ========================================================================= */
(function(){
  const DEF={paper:'blanco',font:'original',size:100,lh:'normal',margin:'normal',align:'left'};
  const FONTS={original:['Original',null],times:['Times','"Times New Roman",Tinos,Times,serif'],georgia:['Georgia','Georgia,"Times New Roman",serif'],
    palatino:['Palatino','"Palatino Linotype","Book Antiqua",Palatino,serif'],inter:['Sans',"'InterV',-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif"]};
  const LH={compacto:1.4,normal:1.62,amplio:1.95};
  const MARG={estrecho:'1320px',normal:'1120px',amplio:'860px'};
  const PAPER=[['blanco','Blanco','#ffffff','#0b0b0d'],['crema','Crema','#fbf7ee','#2b2620'],['sepia','Sepia','#f4ecd8','#5b4636'],
    ['verde','Verde','#dfeadb','#1f2b1e'],['negro','Negro','#000000','#f5f5f7']];
  const KEY='deutsch-atelier:lectura';
  let st={...DEF};
  try{ const g=JSON.parse(localStorage.getItem(KEY)||'null'); if(g) st={...DEF,...g}; if(!FONTS[st.font]) st.font='original'; }catch(e){}

  function apply(){
    const h=document.documentElement;
    if(st.paper==='negro'){ if(typeof ti!=='undefined'&&ti!==1){ ti=1; applyTheme(); } h.removeAttribute('data-paper'); }
    else { if(typeof ti!=='undefined'&&ti!==0){ ti=0; applyTheme(); }
      if(st.paper==='blanco') h.removeAttribute('data-paper'); else h.setAttribute('data-paper',st.paper); }
    const f=(FONTS[st.font]||FONTS.original)[1];
    /* «Original»: titulares en Times y la interfaz en Inter. Cualquier otra letra se aplica a todo:
       textos, títulos, menú y botones (el nombre «Deutsch» en Fraktur se conserva como logotipo). */
    if(f){ h.style.setProperty('--ui',f); h.style.setProperty('--news',f); h.style.setProperty('--rd-font',f); }
    else { h.style.removeProperty('--ui'); h.style.removeProperty('--news'); h.style.removeProperty('--rd-font'); }
    h.style.setProperty('--rd-lh',LH[st.lh]);
    h.style.setProperty('--rd-zoom',st.size/100);
    h.style.setProperty('--rd-width',MARG[st.margin]);
    if(st.align==='justify') h.setAttribute('data-align','justify'); else h.removeAttribute('data-align');
    try{ localStorage.setItem(KEY,JSON.stringify(st)); }catch(e){}
    paint();
  }
  window.rdGet=()=>({...st});
  window.rdSet=o=>{ st={...DEF,...(o||{})}; apply(); };

  /* el claro/oscuro ahora se elige en «Fondo»: el antiguo botón de tema se retira de la barra */
  const tb=document.getElementById('btnTheme'); if(tb) tb.hidden=true;

  /* botón «Aa» */
  const btn=document.createElement('button');
  btn.className='icobtn rd-btn'; btn.id='btnLectura'; btn.title='Opciones de lectura'; btn.setAttribute('aria-haspopup','dialog');
  btn.innerHTML='<b>A<small>a</small></b><span>Lectura</span>';
  const tools=document.querySelector('.toptools'); if(tools) tools.insertBefore(btn,tools.firstChild);

  const pan=document.createElement('div');
  pan.className='rd-panel'; pan.id='rdPanel'; pan.setAttribute('role','dialog'); pan.setAttribute('aria-label','Opciones de lectura');
  document.body.appendChild(pan);
  pan.addEventListener('click',e=>e.stopPropagation());

  const seg=(k,opts)=>'<div class="rd-seg'+(k==='font'?' rd-fonts':'')+'">'+opts.map(([v,l,sty])=>
     '<button data-k="'+k+'" data-v="'+v+'"'+(st[k]===v?' class="on"':'')+(sty?' style="'+sty.replace(/"/g,'&quot;')+'"':'')+'>'+l+'</button>').join('')+'</div>';
  function paint(){
    pan.innerHTML='<h4>Lectura</h4>'
     +'<div class="rd-row"><span>Fondo</span><div class="rd-paper">'+PAPER.map(([v,l,bg,fg])=>
        '<div><button data-k="paper" data-v="'+v+'"'+(st.paper===v?' class="on"':'')+' style="background:'+bg+';color:'+fg+'" title="'+l+'">Aa</button><small>'+l+'</small></div>').join('')+'</div></div>'
     +'<div class="rd-row"><span>Tipo de letra</span>'+seg('font',Object.entries(FONTS).map(([k,[l,f]])=>[k,l,f?'font-family:'+f:'']))+'</div>'
     +'<div class="rd-row"><span>Tamaño</span><div class="rd-size"><button data-step="-5" aria-label="Reducir">A−</button>'
       +'<input type="range" min="85" max="140" step="5" value="'+st.size+'" id="rdSize" aria-label="Tamaño del texto"><output>'+st.size+' %</output>'
       +'<button data-step="5" aria-label="Aumentar">A+</button></div></div>'
     +'<div class="rd-row"><span>Interlineado</span>'+seg('lh',[['compacto','Compacto'],['normal','Normal'],['amplio','Amplio']])+'</div>'
     +'<div class="rd-row"><span>Márgenes</span>'+seg('margin',[['estrecho','Estrechos'],['normal','Normales'],['amplio','Amplios']])+'</div>'
     +'<div class="rd-row"><span>Alineación</span>'+seg('align',[['left','Izquierda'],['justify','Justificada']])+'</div>'
     +'<div class="rd-foot"><em>Se aplica a todas las páginas</em><button id="rdReset">Por defecto</button></div>';
    pan.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{ st[b.dataset.k]=b.dataset.v; apply(); });
    pan.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{ st.size=Math.max(85,Math.min(140,st.size+ +b.dataset.step)); apply(); });
    const r=pan.querySelector('#rdSize'); r.oninput=()=>{ st.size=+r.value; apply(); };
    pan.querySelector('#rdReset').onclick=()=>{ st={...DEF}; apply(); };
    if(window.rdExtra) window.rdExtra(pan);
  }
  window.rdRepaint=paint;
  const open=v=>{ pan.classList.toggle('on',v); btn.setAttribute('aria-expanded',v); };
  btn.onclick=e=>{ e.stopPropagation(); open(!pan.classList.contains('on')); };
  document.addEventListener('click',()=>{ if(pan.classList.contains('on')) open(false); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') open(false); });
  apply();
})();
