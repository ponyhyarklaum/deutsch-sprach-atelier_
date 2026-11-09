/* Deutsch · Atelier — núcleo de la aplicación (navegación, vistas, prácticas).
   Depende de los archivos de data/ cargados antes. */
const P = ['ich','du','er/sie','wir','ihr','sie/Sie'];
const HAB = ['habe','hast','hat','haben','habt','haben'];
const SEI = ['bin','bist','ist','sind','seid','sind'];
const KIND = {reg:'Regular',str:'Irregular',mix:'Mixto',mod:'Modal',aux:'Auxiliar'};
const KINDL = {reg:'Regulares',str:'Irregulares',mix:'Mixtos',mod:'Modales',aux:'Auxiliares'};
const TN = ['Präsens','Präteritum','Perfekt','Plusquamperfekt','Futur I','Konjunktiv II','Imperativ'];
const TES = ['Presente','Pretérito','Pretérito perfecto','Pluscuamperfecto','Futuro simple','Condicional · Subjuntivo II','Imperativo'];

const perf=(v,i)=>(v.a==='h'?HAB[i]:SEI[i])+' … '+v.pp;
const HATTE=['hatte','hattest','hatte','hatten','hattet','hatten'];
const WAREN=['war','warst','war','waren','wart','waren'];
const WERD=['werde','wirst','wird','werden','werdet','werden'];
const WUERD=['würde','würdest','würde','würden','würdet','würden'];
const K2IRR={sein:['wäre','wärst','wäre','wären','wärt','wären'],haben:['hätte','hättest','hätte','hätten','hättet','hätten'],
 werden:['würde','würdest','würde','würden','würdet','würden'],können:['könnte','könntest','könnte','könnten','könntet','könnten'],
 müssen:['müsste','müsstest','müsste','müssten','müsstet','müssten'],dürfen:['dürfte','dürftest','dürfte','dürften','dürftet','dürften'],
 sollen:['sollte','solltest','sollte','sollten','solltet','sollten'],wollen:['wollte','wolltest','wollte','wollten','wolltet','wollten'],
 mögen:['möchte','möchtest','möchte','möchten','möchtet','möchten'],wissen:['wüsste','wüsstest','wüsste','wüssten','wüsstet','wüssten'],
 gehen:['ginge','gingest','ginge','gingen','ginget','gingen'],kommen:['käme','kämest','käme','kämen','kämet','kämen'],
 geben:['gäbe','gäbest','gäbe','gäben','gäbet','gäben'],finden:['fände','fändest','fände','fänden','fändet','fänden']};
const plusq=(v,i)=>(v.a==='h'?HATTE:WAREN)[i]+' … '+v.pp;
const futur=(v,i)=>WERD[i]+' … '+v.i;
const k2=(v,i)=>K2IRR[v.i]?K2IRR[v.i][i]:WUERD[i]+' … '+v.i;
const IMPIRR={sein:['sei','seid','seien Sie'],haben:['hab','habt','haben Sie'],werden:['werde','werdet','werden Sie'],wissen:['wisse','wisst','wissen Sie']};
function imper(v){
  if(v.k==='mod') return null;
  if(IMPIRR[v.i]) return IMPIRR[v.i];
  const p=particula(v), stem=raiz(v), c=analiza(v,0)[1];
  let du=c.R+(c.end==='est'?'e':'');
  if(du!==stem&&umlautar(stem)===du) du=stem;
  const ihr=v.PR[4], sie=v.PR[5].split(' ');
  return [du+(p?' '+p:''), ihr, sie[0].charAt(0).toUpperCase()+sie[0].slice(1)+' Sie'+(sie[1]?' '+sie[1]:'')];
}
const perfPlain=(v,i)=>(v.a==='h'?HAB[i]:SEI[i])+' '+v.pp;
const raizDe=v=>v.PR[3].split(' ')[0].replace(/en$/,'');
const irregPres=v=>v.k==='mod'||!v.PR[1].split(' ')[0].startsWith(raizDe(v))||!v.PR[2].split(' ')[0].startsWith(raizDe(v));
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

/* ---------- tema ---------- */
const THEMES=['light','dark'], TLBL={light:'Tema claro',dark:'Tema oscuro'};
let ti=0;
function applyTheme(){
  const t=THEMES[ti];
  const eff = t;
  document.documentElement.dataset.theme=eff;
  $('#themeLbl').textContent=TLBL[t];
}
$('#btnTheme').onclick=()=>{ti=(ti+1)%2;applyTheme();};
applyTheme();

/* ---------- helpers ---------- */
function tagsHTML(v){
  let s='<span class="tag k-'+v.k+'">'+KIND[v.k]+'</span>';
  if(v.sep) s+='<span class="tag sep">Separable</span>';
  s+='<span class="tag aux">'+(v.a==='h'?'haben':'sein')+'</span>';
  return s;
}
function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
function hl(text,forms){
  const parts=[...new Set(forms.flatMap(f=>f.split(' ')))].filter(w=>w.length>1).sort((a,b)=>b.length-a.length);
  if(!parts.length) return text;
  const re=new RegExp('(^|[^A-Za-zÄÖÜäöüß])('+parts.map(esc).join('|')+')(?![A-Za-zÄÖÜäöüß])','gi');
  return text.replace(re,(m,a,b)=>a+'<mark>'+b+'</mark>');
}
function formsFor(v,t){
  if(t===0) return v.PR;
  if(t===1) return v.PT;
  const aux=v.a==='h'?HAB:SEI;
  return [...aux,v.pp].concat(v.k==='mod'?[v.i]:[]);
}

/* ---------- MORFOLOGÍA: segmentación raíz / cambio / terminación ---------- */
const PERS=P;
const ENDP={0:['e',''],1:['est','st','t'],2:['et','t',''],3:['en','n'],4:['et','t'],5:['en','n']};
const ENDT={0:['ete','te','e',''],1:['etest','test','est','st'],2:['ete','te','e',''],3:['eten','ten','en'],4:['etet','tet','et','t'],5:['eten','ten','en']};
const ENDPP=['en','et','t',''];
function particula(v){ if(!v.sep) return ''; const w=v.PR[0].split(' '); return w[1]||''; }
function raiz(v){ let inf=v.i; const p=particula(v); if(p&&v.i.startsWith(p)) inf=v.i.slice(p.length); return inf.replace(/e?n$/,''); }
function lcs(a,b){
  const n=a.length,m=b.length,dp=[];
  for(let i=0;i<=n;i++)dp.push(new Int16Array(m+1));
  for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)
    dp[i][j]= a[i]===b[j] ? dp[i+1][j+1]+1 : Math.max(dp[i+1][j],dp[i][j+1]);
  return dp;
}
function simil(a,b){ if(!a.length||!b.length) return 0; return 2*lcs(a,b)[0][0]/(a.length+b.length); }
function corte(core,cands,stem,ref){
  let best=null;
  for(const e of cands){
    if(e&&!core.endsWith(e)) continue;
    const R=e?core.slice(0,core.length-e.length):core;
    if(!R) continue;
    const s=simil(R,stem), sc=s+(e?0.2+0.001*e.length:0)+(ref&&R===ref?0.35:0);
    if(!best||sc>best.sc) best={end:e,R,sc,s};
  }
  if(best&&best.s<0.45&&best.R!==ref){   // raíz irregular: aísla igualmente la terminación canónica
    for(const e of cands){
      if(!e||!core.endsWith(e)) continue;
      const R=core.slice(0,core.length-e.length);
      if(!R) continue;
      best={end:e,R,sc:best.sc,s:simil(R,stem)}; break;
    }
  }
  return best||{end:'',R:core,s:1};
}
const _an=new Map();
function analiza(v,t){                    // segmenta las 6 personas de forma coherente entre sí
  const k=v.id+'|'+t; if(_an.has(k)) return _an.get(k);
  const stem=raiz(v), cands=t===0?ENDP:ENDT;
  const cores=(t===0?v.PR:v.PT).map(f=>f.split(' ')[0]);
  const p1=cores.map((c,i)=>corte(c,cands[i],stem));
  const fr=new Map(); p1.forEach(c=>fr.set(c.R,(fr.get(c.R)||0)+1));
  let ref=null,n0=-1;
  for(const [R,n] of fr) if(n>n0||(n===n0&&simil(R,stem)>simil(ref,stem))){ref=R;n0=n;}
  const res=cores.map((c,i)=>corte(c,cands[i],stem,ref));
  _an.set(k,res); return res;
}
function segRaiz(R,stem){
  const s=simil(R,stem);
  if(s<0.45||(R.length<=2&&s<=0.5)) return [['x',R]];
  const dp=lcs(R,stem); const out=[]; let i=0,j=0,cur='',cm=null;
  const push=(m,ch)=>{ if(m!==cm){ if(cur)out.push([cm?'r':'',cur]); cur=''; cm=m; } cur+=ch; };
  while(i<R.length){
    if(j<stem.length&&R[i]===stem[j]){push(false,R[i]);i++;j++;}
    else if(j<stem.length&&dp[i+1][j]>=dp[i][j+1]){push(true,R[i]);i++;}
    else if(j<stem.length){j++;}
    else {push(true,R[i]);i++;}
  }
  if(cur)out.push([cm?'r':'',cur]);
  if(R!==stem&&!out.some(x=>x[0]==='r')) return [['r',R]];   // cambio por pérdida de letras
  return out;
}
function segPart(v){
  const stem=raiz(v), p=particula(v); let pp=v.pp, out=[];
  if(p&&pp.startsWith(p)){out.push(['p',p]);pp=pp.slice(p.length);}
  if(pp.startsWith('ge')&&pp.length>3){out.push(['p','ge']);pp=pp.slice(2);}
  const c=corte(pp,ENDPP,stem);
  out.push(...segRaiz(c.R,stem));
  if(c.end)out.push(['e',c.end]);
  return out;
}
function segInf(v){
  const stem=raiz(v), p=particula(v), out=[];
  if(p) out.push(['p',p]);
  out.push(...segRaiz(stem,stem));
  const fin=v.i.slice((p?p.length:0)+stem.length);
  if(fin) out.push(['e',fin]);
  return out;
}
function segForm(v,t,i,sep){
  const stem=raiz(v);
  if(t===2) return [['a',(v.a==='h'?HAB:SEI)[i]],['',sep||' … '],...segPart(v)];
  if(t===3) return [['a',(v.a==='h'?HATTE:WAREN)[i]],['',sep||' … '],...segPart(v)];
  if(t===4) return [['a',WERD[i]],['',sep||' … '],...segInf(v)];
  if(t===5) return K2IRR[v.i]?[['x',K2IRR[v.i][i]]]:[['a',WUERD[i]],['',sep||' … '],...segInf(v)];
  if(t===6){ const im=imper(v); if(!im) return [['','—']];
    const f=im[i]||im[0]; const w=f.split(' ');
    return [['r',w[0]]].concat(w.slice(1).map(x=>[/^Sie$/.test(x)?'':'p',' '+x]).map(([c,s2])=>[c,s2])); }
  const w=(t===0?v.PR:v.PT)[i].split(' ');
  const c=analiza(v,t)[i];
  const out=segRaiz(c.R,stem);
  if(c.end)out.push(['e',c.end]);
  if(w[1])out.push(['',' '],['p',w[1]]);
  return out;
}
const segHTML=segs=>'<span class="sg">'+segs.map(([c,s])=>c?'<em class="'+c+'">'+s+'</em>':s).join('')+'</span>';
const LEYENDA='<div class="legend">'
 +'<span class="t">raíz</span>'
 +'<span><i style="border-color:var(--sg-e)"></i>terminación</span>'
 +'<span><i style="border-color:var(--sg-r)"></i>cambio en la raíz</span>'
 +'<span><i style="border-color:var(--sg-x);border-bottom-style:dashed"></i>raíz totalmente nueva</span>'
 +'<span><i style="border-color:var(--sg-p)"></i>prefijo / partícula</span>'
 +'<span><i style="border-color:var(--sg-a)"></i>auxiliar</span></div>';
const G=(a,b)=>a.length===b.length&&a.every((x,k)=>x===b[k]);
function reglas(v,t){
  const stem=raiz(v), p=particula(v), rows=[];
  if(t<2){
    const cs=analiza(v,t);
    const ends=cs.map(c=>c.end?'-'+c.end:'∅');
    rows.push(['Terminaciones','<em class="e">'+ends.join('</em> · <em class="e">')+'</em>']);
    const gr=new Map(); cs.forEach((c,i)=>{const k=c.R;(gr.get(k)||gr.set(k,[]).get(k)).push(PERS[i]);});
    if(gr.size===1) rows.push(['Raíz','<b>'+[...gr.keys()][0]+'</b> — invariable en las seis personas']);
    else rows.push(['Raíz',[...gr].map(([k,ps])=>'<em class="'+(simil(k,stem)<0.45?'x':k===stem?'':'r')+'">'+k+'</em> <span style="font-family:var(--sans)">('+ps.join(', ')+')</span>').join(' · ')]);
    if(p) rows.push(['Partícula','<em class="p">'+p+'</em> se separa y va al final de la frase']);
  } else if(t===3){
    rows.push(['Auxiliar','<em class="a">'+(v.a==='h'?'hatte':'war')+'</em> — el auxiliar en <b>Präteritum</b>']);
    rows.push(['Participio',segHTML(segPart(v)).replace(/^<span class="sg">|<\/span>$/g,'')]);
    rows.push(['Uso','acción anterior a otra acción pasada']);
  } else if(t===4){
    rows.push(['Auxiliar','<em class="a">werden</em> conjugado en presente']);
    rows.push(['Infinitivo',segHTML(segInf(v)).replace(/^<span class="sg">|<\/span>$/g,'')]);
    rows.push(['Orden','werden en 2.ª posición · infinitivo al final']);
  } else if(t===5){
    rows.push(['Forma',K2IRR[v.i]?'sintética propia: <em class="x">'+K2IRR[v.i][0]+'</em>':'perífrasis <em class="a">würde</em> + infinitivo']);
    rows.push(['Infinitivo',segHTML(segInf(v)).replace(/^<span class="sg">|<\/span>$/g,'')]);
    rows.push(['Uso','cortesía, deseo, condición irreal']);
  } else if(t===6){
    const im=imper(v);
    rows.push(['Formas',im?'<em class="r">'+im[0]+'!</em> · '+im[1]+'! · '+im[2]+'!':'—']);
    rows.push(['Sujeto','du e ihr pierden el pronombre; con Sie se mantiene detrás del verbo']);
  } else {
    rows.push(['Auxiliar','<em class="a">'+(v.a==='h'?'haben':'sein')+'</em> conjugado en presente, igual para las seis personas']);
    rows.push(['Participio',segHTML(segPart(v)).replace(/^<span class="sg">|<\/span>$/g,'')]);
    rows.push(['Orden','auxiliar en 2.ª posición · participio al final']);
  }
  return '<div class="rule">'+rows.map(([k,val])=>'<div class="row"><div class="k">'+k+'</div><div class="v">'+val+'</div></div>').join('')+'<div class="say">'+explica(v,t)+'</div></div>';
}
function explica(v,t){
  const stem=raiz(v), p=particula(v);
  if(t===0){
    const cs=analiza(v,0);
    const dif=[1,2].filter(i=>cs[i].R!==cs[0].R&&cs[i].R!==stem);
    if(v.k==='mod') return 'Modal: en singular pierde el Umlaut y las formas de <b>ich</b> y <b>er/sie</b> son idénticas y sin terminación; el plural recupera la raíz del infinitivo.';
    if(dif.length===2&&cs[1].R===cs[2].R) return 'Solo <b>du</b> y <b>er/sie</b> cambian la vocal de la raíz (<b>'+stem+' → '+cs[1].R+'</b>). Las demás personas usan la raíz del infinitivo y añaden únicamente la terminación.';
    if(dif.length) return 'Algunas personas alteran la raíz; el resto conserva la del infinitivo y solo añade terminación.';
    return 'La raíz del infinitivo se mantiene intacta en las seis personas: basta con añadir la terminación'+(p?', y colocar la partícula al final de la frase.':'.');
  }
  if(t===1){
    const c0=analiza(v,1)[0];
    const debil=c0.end.endsWith('te');
    if(v.k==='mod') return 'Se forma sobre la raíz sin Umlaut más la marca <b>-te-</b>; es la forma que se usa también al hablar.';
    if(debil&&c0.R===stem) return 'Regular: se parte de la misma raíz del infinitivo, se inserta la marca <b>-te-</b> y se añaden las terminaciones. Ninguna persona cambia la raíz.';
    if(debil) return 'Mixto: la raíz cambia (<b>'+stem+' → '+c0.R+'</b>) pero conserva la marca <b>-te-</b> de los regulares.';
    return 'Irregular: hay una raíz de pretérito propia (<b>'+stem+' → '+c0.R+'</b>) que se mantiene igual en las seis personas; <b>ich</b> y <b>er/sie</b> no llevan terminación.';
  }
  if(t===3) return 'Se forma como el Perfekt, pero con el auxiliar en pretérito: <b>'+(v.a==='h'?'hatte':'war')+' + participio</b>. Sitúa una acción antes de otra ya pasada: <i>Ich hatte schon gegessen, als er kam</i>.';
  if(t===4) return 'Perífrasis con <b>werden</b> + infinitivo al final. Para planes con marca temporal el alemán prefiere el presente; el futuro se reserva a predicciones, promesas y suposiciones.';
  if(t===5) return K2IRR[v.i]
    ? 'Este verbo conserva forma sintética propia (<b>'+K2IRR[v.i][0]+'</b>), que es la habitual; la perífrasis con würde suena redundante.'
    : 'En la lengua actual se construye con <b>würde + infinitivo</b>. Solo un grupo reducido de verbos muy frecuentes mantiene forma propia (wäre, hätte, könnte, käme, ginge).';
  if(t===6){ const im=imper(v); return im
    ? 'Se parte de la forma de <b>du</b> sin la terminación -st (<b>'+im[0].split(' ')[0]+'</b>). El cambio e→i se conserva, pero el Umlaut desaparece. La forma de <b>ihr</b> coincide con el presente y la de cortesía invierte el orden: <i>'+im[2]+'!</i>'
    : 'Los verbos modales carecen de imperativo: se sustituyen por otras construcciones.'; }
  const pp=segPart(v), tipo=pp[pp.length-1][0]==='e'&&pp[pp.length-1][1]==='en'?'-en':'-t';
  const camb=pp.some(s=>s[0]==='r'||s[0]==='x');
  return 'El participio no cambia nunca: '+(p?'partícula <b>'+p+'</b> + ':'')+(v.pp.startsWith(p+'ge')||v.pp.startsWith('ge')?'<b>ge-</b> + ':'sin <b>ge-</b> (prefijo inseparable) + ')+'raíz'+(camb?' modificada':'')+' + <b>'+tipo+'</b>. Lo único que se conjuga es el auxiliar.';
}

/* ---------- LISTA ---------- */
const FILTERS=[['all','Todos'],['reg','Regulares'],['str','Irregulares'],['mix','Mixtos'],['mod','Modales'],['sep','Separables'],['fav','Favoritos']];
let filt='all', group=false;
const counts=k=>V.filter(v=>k==='all'?1:k==='sep'?v.sep:k==='fav'?v.fav:v.k===k).length;
function drawChips(){
  $('#chips').innerHTML=FILTERS.map(([k,l])=>'<button class="chip'+(filt===k?' on':'')+'" data-f="'+k+'">'+l+'<span class="b">'+counts(k)+'</span></button>').join('');
}
function pass(v,q){
  const nv=$('#qniv')?$('#qniv').value:'';
  if(nv&&v.lv!==nv) return false;
  if(filt==='sep'){if(!v.sep)return false;}
  else if(filt==='fav'){if(!v.fav)return false;}
  else if(filt!=='all'&&v.k!==filt) return false;
  if(!q) return true;
  q=q.toLowerCase();
  return (v.i+' '+v.t+' '+v.pp+' '+v.pt+' '+v.pr).toLowerCase().includes(q);
}
function cardHTML(v,n){
  return '<article class="card k-'+v.k+'" data-v="'+v.id+'" style="animation-delay:'+Math.min(n*14,340)+'ms">'
   +'<div class="top"><div><div class="inf">'+v.i+'<span class="nivtag n-'+v.lv+'">'+v.lv+'</span></div><div class="tr">'+v.t+'</div></div>'
   +'<button class="star'+(v.fav?' on':'')+'" data-fav="'+v.id+'" title="Marcar como favorito"><svg viewBox="0 0 24 24"><path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9z"/></svg></button></div>'
   +'<div class="pp"><div><div class="l">Pretérito</div><div class="f">'+segHTML(segForm(v,1,0))+'</div></div>'
   +'<div><div class="l">Participio</div><div class="f">'+(v.a==='h'?'hat ':'ist ')+segHTML(segPart(v))+'</div></div></div>'
   +'<div class="tags">'+tagsHTML(v)+'</div></article>';
}
let visible=[];
function render(){
  const q=$('#q').value.trim();
  visible=V.filter(v=>pass(v,q));
  const out=$('#listOut');
  if(!visible.length){out.innerHTML='<div class="empty"><b>Sin resultados</b>Pruebe con otro término o cambie el filtro.</div>';}
  else if(group){
    const ord=['aux','reg','str','mix','mod'];
    out.innerHTML=ord.filter(k=>visible.some(v=>v.k===k)).map(k=>{
      const l=visible.filter(v=>v.k===k);
      return '<div class="groupttl">'+KINDL[k]+' · '+l.length+'</div><div class="grid">'+l.map(cardHTML).join('')+'</div>';
    }).join('');
  } else {
    out.innerHTML='<div class="grid">'+visible.map(cardHTML).join('')+'</div>';
  }
  $('#cnt').textContent=visible.length+' de '+V.length+' verbos';
  drawChips(); drawStats();
}
$('#q').addEventListener('input',render);
$('#qniv').addEventListener('input',()=>{drawChips();render();});
$('#tgGroup').addEventListener('change',e=>{group=e.target.checked;render();});
$('#chips').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;filt=b.dataset.f;render();});
$('#listOut').addEventListener('click',e=>{
  const s=e.target.closest('.star');
  if(s){e.stopPropagation();const v=V[+s.dataset.fav];v.fav=!v.fav;s.classList.toggle('on',v.fav);drawChips();if(filt==='fav')render();return;}
  const c=e.target.closest('.card'); if(c) openV(+c.dataset.v);
});
function drawStats(){
  const d=[['all','Verbos'],['reg','Regulares'],['str','Irregulares'],['mix','Mixtos'],['mod','Modales'],['sep','Separables']];
  $('#stats').innerHTML=d.map(([k,l])=>'<button class="stat'+(filt===k?' on':'')+'" data-k="'+k+'"><span class="n">'+counts(k)+'</span><span class="l">'+l+'</span></button>').join('');
}
$('#stats').addEventListener('click',e=>{const b=e.target.closest('.stat');if(!b)return;filt=b.dataset.k;$('#q').value='';render();window.scrollTo({top:$('#m-lista').offsetTop-90,behavior:'smooth'});});

/* ---------- FICHA ---------- */
const dlg=$('#dlg'); let curId=0;
$('#dClose').onclick=()=>dlg.close();
$('#dPrev').onclick=()=>step(-1); $('#dNext').onclick=()=>step(1);
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});
function step(d){
  const pool=visible.length?visible:V;
  let i=pool.findIndex(v=>v.id===curId);
  if(i<0)i=0;
  openV(pool[(i+d+pool.length)%pool.length].id);
}
function tenseBox(t,v){
  const mark=t===0&&irregPres(v);
  if(t===6){
    const im=imper(v);
    const filas=im?['du','ihr','Sie'].map((pr,i)=>'<tr><td class="p">'+pr+'</td><td class="f">'+segHTML(segForm(v,6,i))+'</td></tr>').join('')
      :'<tr><td colspan="2" style="color:var(--ink3);font-size:.82rem;padding:8px 0">Los verbos modales no tienen imperativo.</td></tr>';
    return '<div class="tense k-'+v.k+'"><h3>'+TN[6]+'</h3><div class="sp">'+TES[6]+'</div><table class="conj">'+filas+'</table>'+reglas(v,6)+'</div>';
  }
  return '<div class="tense k-'+v.k+'"><h3>'+TN[t]+'</h3><div class="sp">'+TES[t]+'</div><table class="conj">'
   +P.map((pr,i)=>'<tr class="'+(mark&&(i===1||i===2)?'hi':'')+'"><td class="p">'+pr+'</td><td class="f">'+segHTML(segForm(v,t,i))+'</td></tr>').join('')
   +'</table>'+reglas(v,t)+'</div>';
}
function openV(id){
  curId=id; const v=V[id];
  $('#dh').className='dh k-'+v.k;
  $('#dKick').innerHTML=tagsHTML(v);
  $('#dInf').innerHTML=v.i+spkBtn(v.i,'big');
  $('#dTr').textContent=v.t;
  let h=LEYENDA+'<div class="tenses">'+[0,1,2,3,4,5,6].map(t=>tenseBox(t,v)).join('')+'</div>';
  h+='<div class="ex k-'+v.k+'"><h3>En el día a día</h3>'+v.e.map((s,i)=>
      '<div class="exr"><div class="n">'+(i+1)+'</div><div><div class="lbl">'+TES[i]+'</div><div class="de">'+hl(s,formsFor(v,i))+spkBtn(s)+'</div><div class="es">'+v.s[i]+'</div></div></div>').join('')+'</div>';
  if(v.n) h+='<div class="note"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.1"/></svg><div>'+v.n+'</div></div>';
  h+='<div class="dfoot"><button class="btn pri" id="bPract"><svg viewBox="0 0 24 24"><path d="m5 3 14 9-14 9z"/></svg>Practicar este verbo</button>'
    +'<button class="btn" id="bFav">'+(v.fav?'Quitar de favoritos':'Añadir a favoritos')+'</button></div>';
  h+='<div class="box" style="margin-bottom:16px"><h4>Consultar fuera</h4><div class="dicmini">'+dicLinks(v.i,true)+'</div></div>';
  $('#dBody').innerHTML=h;
  $('#dBody').scrollTop=0;
  $('#bFav').onclick=()=>{v.fav=!v.fav;render();openV(id);};
  $('#bPract').onclick=()=>{dlg.close();goMode('conjugar');forced=v;nextQ();};
  if(!dlg.open) dlg.showModal();
}

/* ---------- PRÁCTICA ---------- */
let cur=null,curT=0,curP=0,ok=0,tot=0,streak=0,best=0,answered=false,forced=null,hinted=0;
let tsel=[0,1,2], ksel='all';
const norm=s=>s.toLowerCase().trim().replace(/…/g,'').replace(/\s+/g,' ')
  .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').trim();
$('#pTenses').addEventListener('click',e=>{
  const b=e.target.closest('.pill');if(!b)return;
  const t=+b.dataset.t;
  if(tsel.includes(t)){ if(tsel.length===1)return; tsel=tsel.filter(x=>x!==t);} else tsel.push(t);
  b.classList.toggle('on',tsel.includes(t)); nextQ();
});
$('#pKinds').addEventListener('click',e=>{
  const b=e.target.closest('.pill');if(!b)return;
  if(b.dataset.k==='fav'&&!V.some(v=>v.fav)){flash('Aún no ha marcado ningún verbo como favorito.');return;}
  ksel=b.dataset.k;$$('#pKinds .pill').forEach(p=>p.classList.toggle('on',p===b));nextQ();
});
function pool(){
  return V.filter(v=>ksel==='all'?1:ksel==='fav'?v.fav:ksel==='str'?(v.k==='str'||v.k==='mix'||v.k==='aux'):v.k===ksel);
}
function nextQ(){
  answered=false;hinted=0;
  const pl=forced?[forced]:pool();
  cur=pl[Math.floor(Math.random()*pl.length)]||V[0];
  curT=tsel[Math.floor(Math.random()*tsel.length)];
  if(curT===6&&!imper(cur)){ const alt=tsel.filter(x=>x!==6); curT=alt.length?alt[Math.floor(Math.random()*alt.length)]:0; }
  curP=curT===6?[1,4,5][Math.floor(Math.random()*3)]:Math.floor(Math.random()*6);
  const c=$('#qcard'); c.className='qcard k-'+cur.k;
  $('#qKick').innerHTML=tagsHTML(cur);
  $('#qInf').textContent=cur.i;
  $('#qTr').textContent=cur.t;
  $('#qAsk').innerHTML='<span class="t">'+TN[curT]+'</span> &nbsp;<span class="pr">'+(curT===6?['','du','','','ihr','Sie'][curP]:P[curP])+' …</span>';
  $('#qIn').value='';$('#fb').className='fb';$('#qBtn').textContent='Comprobar';
  $('#qIn').focus();
}
function answer(){
  if(curT===0) return cur.PR[curP];
  if(curT===1) return cur.PT[curP];
  if(curT===2) return perfPlain(cur,curP);
  if(curT===3) return plusq(cur,curP).replace(' … ',' ');
  if(curT===4) return futur(cur,curP).replace(' … ',' ');
  if(curT===5) return k2(cur,curP).replace(' … ',' ');
  const im=imper(cur); return im[{1:0,4:1,5:2}[curP]];
}
function accept(g){
  const a=answer();
  const pn=P[curP].split('/')[0];
  return [a,pn+' '+a,P[curP]+' '+a].some(x=>norm(x)===norm(g));
}
function score(){
  $('#sAcc').textContent=tot?Math.round(ok/tot*100)+'%':'—';
  $('#sStreak').textContent=streak;
  $('#sTot').textContent=tot;
  $('#bar').style.width=(tot?Math.min(100,ok/tot*100):0)+'%';
}
$('#qForm').addEventListener('submit',e=>{
  e.preventDefault();
  if(answered){nextQ();return;}
  const g=$('#qIn').value.trim(); if(!g)return;
  const a=answer(), good=accept(g), c=$('#qcard'), fb=$('#fb');
  tot++;
  if(good){sfx.ok();ok++;streak++;best=Math.max(best,streak);c.classList.add('good');
    fb.className='fb ok on';
    fb.innerHTML='<svg viewBox="0 0 24 24"><path d="m4 12 5.5 5.5L20 7"/></svg><div><b>Correcto</b><code>'+(curT===6?['','du','','','ihr','Sie'][curP]:P[curP])+' </code>'+segHTML(segForm(cur,curT,curT===6?({1:0,4:1,5:2})[curP]:curP,' '))+'<span class="mini">'+explica(cur,curT)+'</span>'+(curT<3?'<span class="ex2">'+hl(cur.e[curT],formsFor(cur,curT))+'</span>':'')+'</div>';
  } else {sfx.no();streak=0;c.classList.add('shake');
    fb.className='fb no on';
    fb.innerHTML='<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg><div><b>La forma correcta es</b><code>'+(curT===6?['','du','','','ihr','Sie'][curP]:P[curP])+' </code>'+segHTML(segForm(cur,curT,curT===6?({1:0,4:1,5:2})[curP]:curP,' '))+'<span class="mini">'+explica(cur,curT)+'</span>'+(curT<3?'<span class="ex2">'+hl(cur.e[curT],formsFor(cur,curT))+'</span>':'')+'</div>';
  }
  if(hinted) {}
  answered=true;$('#qBtn').textContent='Siguiente';score();
  setTimeout(()=>{c.classList.remove('good','shake');},560);
  $('#qIn').focus();
});
$('#btnHint').onclick=()=>{
  if(answered)return;
  const a=answer();hinted++;
  const n=Math.min(hinted+1,a.length-1);
  $('#qIn').value=a.slice(0,n);$('#qIn').focus();
  const fb=$('#fb');fb.className='fb no on';
  fb.innerHTML='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.1"/></svg><div><b>Pista</b>Empieza por <code>'+a.slice(0,n)+'…</code> y tiene '+a.replace(/ /g,'').length+' letras.</div>';
};
$('#btnSkip').onclick=()=>{if(forced)forced=null;nextQ();};
$('#btnReset').onclick=()=>{ok=tot=streak=0;forced=null;score();nextQ();};
function flash(msg){const fb=$('#fb');fb.className='fb no on';fb.innerHTML='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.1"/></svg><div>'+msg+'</div>';}

/* ---------- navegación ---------- */
function goMode(m){
  $$('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.mode===m));
  $('#stats').classList.toggle('hide',m!=='lista');
  document.querySelector('.hero').style.paddingBottom = m==='lista'?'':'8px';
  ['lista','practica','vocab','gramatica'].forEach(x=>$('#m-'+x).classList.toggle('hide',x!==m));
  if(m==='vocab'&&typeof vGo==='function'&&!vView) vGo('explorar');
  if(m==='practica'&&!cur)nextQ();
  window.scrollTo({top:0,behavior:'smooth'});
}
$('#btnRandom').onclick=()=>{
  if(!$('#m-vocab').classList.contains('hide')) vFicha(W[Math.floor(Math.random()*W.length)].id);
  else openV(V[Math.floor(Math.random()*V.length)].id);
};
document.addEventListener('keydown',e=>{
  if(e.key==='/'&&document.activeElement.tagName!=='INPUT'){e.preventDefault();
    if(!$('#m-vocab').classList.contains('hide')){vGo('explorar');$('#vq').focus();} else {goMode('verbos');$('#q').focus();}}
  if(dlg.open&&e.key==='ArrowRight')step(1);
  if(dlg.open&&e.key==='ArrowLeft')step(-1);
});
function marcaEj(w,fr){
  if(!fr) return '';
  const b=w.base.replace(/^sich\s+/,''), cand=[b];
  if(w.cls==='s'&&w.pl&&w.pl!=='-') cand.push(w.pl);
  if(typeof umlautar==='function') cand.push(umlautar(b));
  if(b.length>4) cand.push(b.replace(/e?n$/,''));
  if(w.cls==='v'){ const pre=['zurück','wieder','zusammen','statt','durch','unter','über','fern','teil','nach','vor','auf','aus','ein','mit','ab','an','zu','um','hin','her','weg','los'];
    for(const px of pre){ if(b.startsWith(px)&&b.length-px.length>=4){ cand.push(b.slice(px.length).replace(/e?n$/,'')); break; } } }
  const uniq=[...new Set(cand)].filter(x=>x&&x.length>=2).sort((a,b2)=>b2.length-a.length);
  if(!uniq.length) return fr;
  const esc2=x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const corta=b.length<=4;
  const re=new RegExp(corta?'(^|[^A-Za-zÄÖÜäöüß])('+uniq.map(esc2).join('|')+')(?![A-Za-zÄÖÜäöüß])'
                            :'(^|[^A-Za-zÄÖÜäöüß])([A-Za-zÄÖÜäöüß]*(?:'+uniq.map(esc2).join('|')+')[A-Za-zÄÖÜäöüß]*)','gi');
  return fr.replace(re,(m,a,x)=>a+'<mark>'+x+'</mark>');
}
const ejDe=w=>EJ[w.de]?EJ[w.de][0]:'';
const ejEs=w=>EJ[w.de]?EJ[w.de][1]:'';

/* ===================== VOCABULARIO ===================== */
const ART={m:'der',f:'die',n:'das',p:'die'};
const ARTI={m:'ein',f:'eine',n:'ein',p:''};

/* ---------- léxico ampliado por niveles ---------- */
/* Vocabulario A1 */
const VNIV={};
const VOCAB=(function(){
  const out={};
  const fuentes=[['',VOCAB0],['A1',VOC_A1],['A2',VOC_A2],['B1',VOC_B1],['B2',VOC_B2],['C1',VOC_C1],['C2',VOC_C2]];
  for(const [lv,S] of fuentes)
    for(const c in S) for(const sb in S[c]){
      if(!out[c]) out[c]={};
      if(!out[c][sb]) out[c][sb]=[];
      for(const l of S[c][sb]){
        const de=l.split('|')[0];
        if(VNIV[de]) continue;
        VNIV[de]=lv||LVLMAP[de]||'A2';
        out[c][sb].push(l);
      }
    }
  return out;
})();
const NIVORD={A1:0,A2:1,B1:2,B2:3,C1:4,C2:5};
const NIV=[
 {k:'A1',n:'Acceso',c:'#8fc4ff',d:'Comprender y emplear expresiones cotidianas y frases muy sencillas destinadas a satisfacer necesidades inmediatas. Presentarse, preguntar y dar datos personales.'},
 {k:'A2',n:'Plataforma',c:'#84dcc0',d:'Comprender frases y expresiones de uso frecuente relacionadas con áreas de experiencia inmediata. Describir el pasado, el entorno y las necesidades inmediatas.'},
 {k:'B1',n:'Umbral',c:'#f2c777',d:'Producir textos sencillos y coherentes sobre temas conocidos, narrar experiencias, justificar opiniones y desenvolverse en la mayor parte de las situaciones de viaje.'},
 {k:'B2',n:'Avanzado',c:'#f4a97f',d:'Comprender las ideas principales de textos complejos, argumentar con matiz, defender un punto de vista y relacionarse con hablantes nativos sin esfuerzo por ninguna de las partes.'},
 {k:'C1',n:'Dominio operativo',c:'#c9aefc',d:'Comprender textos extensos y exigentes, reconocer sentidos implícitos, expresarse con fluidez sin buscar la expresión y usar la lengua con flexibilidad en el ámbito académico y profesional.'},
 {k:'C2',n:'Maestría',c:'#ff9fb0',d:'Comprender sin esfuerzo prácticamente todo lo que oye o lee, reconstruir la información argumentando de manera coherente y expresarse espontáneamente con precisión y matiz estilístico.'}
];
const NIVI={}; NIV.forEach((n,i)=>NIVI[n.k]=i);
/* Categorización visible: tres niveles de base y un grupo B1+ que reúne lo avanzado.
   El grupo se despliega solo cuando se pide, o cuando ya se está dentro de él.      */
const NIVBASE=['A1','A2','B1'], NIVPLUS=['B2','C1','C2'];
const esPlus=k=>NIVPLUS.includes(k);
let plusOpen=false;
/* Fases de curso dentro de un nivel largo (uso editorial: B2.1 / B2.2). */
const FASES={B2:[['B2.1',5],['B2.2',4]],C1:[['C1.1',3],['C1.2',3]]};
const faseDe=(k,i)=>{const f=FASES[k]; if(!f) return ''; let a=0;
  for(const [n2,c2] of f){ if(i<a+c2) return n2; a+=c2; } return f[f.length-1][0];};
function nivSel(actual,attr){
  const abierto=plusOpen||esPlus(actual);
  const bt=k=>{const n=NIV[NIVI[k]];
    return '<button class="nvtab'+(k===actual?' on':'')+'" '+attr+'="'+k+'" style="--sc:'+n.c+'">'+k+'</button>';};
  return '<div class="nivtabs">'+NIVBASE.map(bt).join('')
   +'<button class="nvtab plus'+(abierto?' open':'')+(esPlus(actual)?' on':'')+'" data-plus="1" '
     +'style="--sc:'+NIV[NIVI['B2']].c+'" title="Niveles avanzados">'+(abierto?'−':'+')+'</button>'
   +(abierto?'<span class="nvplus">'+NIVPLUS.map(bt).join('')+'</span>':'')+'</div>';
}
function nivSelWire(host,cb){
  $$(host+' [data-plus]').forEach(b=>b.onclick=()=>{sfx.tap();plusOpen=!plusOpen;cb(null);});
}
const CLS={s:'Sustantivo',v:'Verbo',a:'Adjetivo',d:'Adverbio',p:'Palabra de función',f:'Frase',z:'Número'};
const GNAME={m:'masculino',f:'femenino',n:'neutro',p:'solo plural'};
const W=[];
(function(){let id=0;
 for(const [cat,subs] of Object.entries(VOCAB))
  for(const [sub,arr] of Object.entries(subs))
   for(const l of arr){
     const p=l.split('|'), w={id:id++,de:p[0],es:p[1],cls:p[2],cat,sub,def:p[6]||'',fav:false,lvl:VNIV[p[0]]||'A2'};
     if(w.cls==='s'){ w.g=p[3]; w.pl=p[4]||'-'; w.mark=p[5]||''; w.base=w.de.replace(/^(der|die|das)\s+/,''); w.art=ART[w.g]; }
     else { w.base=w.de; if(w.cls==='v'){w.aux=p[3];w.sep=p[4]==='s';const t=(p[5]||'').split('·');w.prat=t[0]||'';w.part=t[1]||'';}
            if(w.cls==='a'){const t=(p[5]||'').split('·');w.komp=t[0]||'';w.sup=t[1]||'';} }
     W.push(w);
   }})();
const wById=id=>W[id];

/* ---- reglas de género ---- */
const GRULES=[
 [/ung$/,'f','-ung'],[/heit$/,'f','-heit'],[/keit$/,'f','-keit'],[/schaft$/,'f','-schaft'],
 [/(t|s)ion$/,'f','-ion'],[/tät$/,'f','-tät'],[/ik$/,'f','-ik'],[/ur$/,'f','-ur'],[/enz$/,'f','-enz'],
 [/ei$/,'f','-ei'],[/ie$/,'f','-ie'],[/in$/,'f','-in'],
 [/chen$/,'n','-chen'],[/lein$/,'n','-lein'],[/ment$/,'n','-ment'],[/um$/,'n','-um'],[/tum$/,'n','-tum'],
 [/nis$/,'n','-nis'],[/^Ge.*e?$/,'n','Ge-'],
 [/ling$/,'m','-ling'],[/ismus$/,'m','-ismus'],[/ent$/,'m','-ent'],[/ant$/,'m','-ant'],
 [/ist$/,'m','-ist'],[/eur$/,'m','-eur'],[/or$/,'m','-or'],[/er$/,'m','-er'],
];
/* Terminación portadora de género: azul masculino, rojo femenino, verde neutro.
   Solo se marca cuando una regla morfológica la explica; si el género no es
   deducible, la palabra queda sin marca y se señala con subrayado punteado.  */
function terminacionGen(base){
  for(const [re,g,l] of GRULES){
    const m=base.match(re);
    if(m) return {suf:m[0],g,l};
  }
  return null;
}
const GCLASE={m:'e-m',f:'e-f',n:'e-n',p:'e-f'};
function marcaGen(base,g,suave){
  const t=terminacionGen(base);
  if(!t||t.g!==g){
    return suave?base:'<span class="gennd" title="Género no deducible de la terminación">'+base+'</span>';
  }
  const i=base.length-t.suf.length;
  return base.slice(0,i)+'<u class="genend '+GCLASE[g]+'" title="'+t.l+' → '+GNAME[g]+'">'+base.slice(i)+'</u>';
}
function generoRegla(base){ for(const [re,g,l] of GRULES) if(re.test(base)) return {g,l}; return null; }

/* ---- plural ---- */
const UML={a:'ä',o:'ö',u:'ü',A:'Ä',O:'Ö',U:'Ü'};
function umlautar(s){
  for(let i=s.length-1;i>=0;i--){
    const c=s[i];
    if((c==='u'||c==='U')&&i>0&&(s[i-1]==='a'||s[i-1]==='A')) return s.slice(0,i-1)+(s[i-1]==='a'?'äu':'Äu')+s.slice(i+1);
    if(UML[c]) return s.slice(0,i)+UML[c]+s.slice(i+1);
  }
  return s;
}
function clasePlural(w){
  if(w.g==='p') return {t:'solo plural',d:'Este sustantivo únicamente existe en plural.'};
  if(!w.pl||w.pl==='-') return {t:'sin plural',d:'Incontable: no se usa en plural.'};
  const s=w.base, u=umlautar(s);
  if(w.pl===s) return {t:'∅ sin cambio',d:'El plural es idéntico al singular; solo el artículo lo distingue: die '+w.pl+'.'};
  if(w.pl===u) return {t:'¨ solo Umlaut',d:'El plural se marca únicamente con Umlaut en la vocal de la raíz.'};
  if(w.pl.startsWith(s)) return {t:'+ -'+w.pl.slice(s.length),d:'Se añade la terminación -'+w.pl.slice(s.length)+' sin modificar la vocal.'};
  if(w.pl.startsWith(u)) return {t:'¨ + -'+w.pl.slice(u.length),d:'Se añade -'+w.pl.slice(u.length)+' y además la vocal recibe Umlaut.'};
  return {t:'irregular',d:'Plural irregular: conviene memorizarlo con la palabra.'};
}
function silabas(s){ return (s.toLowerCase().match(/[aeiouäöüy]+/g)||[]).length; }
function genitivo(w){
  if(w.g==='f'||w.g==='p') return {f:w.base,n:'Los femeninos no añaden nada en genitivo.'};
  if(w.mark==='n') return {f:w.base+(/e$/.test(w.base)?'n':'en'),n:'Declinación débil: añade -(e)n en todos los casos salvo el nominativo.'};
  if(w.mark&&w.mark[0]==='=') return {f:w.mark.slice(1),n:'Forma de genitivo irregular.'};
  if(/(s|ß|x|z|sch)$/.test(w.base)) return {f:w.base+'es',n:'Tras -s, -ß, -x, -z el genitivo exige -es.'};
  if(silabas(w.base)<=1) return {f:w.base+'(e)s',n:'En monosílabos se admiten -es y -s; -es es lo más frecuente.'};
  return {f:w.base+'s',n:'Los masculinos y neutros polisílabos añaden -s.'};
}
function dativoPl(w){ if(!w.pl||w.pl==='-') return null; return /[ns]$/.test(w.pl)?w.pl:w.pl+'n'; }
function declinacion(w){
  const g=w.g, gen=genitivo(w), dp=dativoPl(w), pl=(w.pl&&w.pl!=='-')?w.pl:null;
  const nDek=w.mark==='n', nEnd=nDek?(/e$/.test(w.base)?w.base+'n':w.base+'en'):w.base;
  const D={m:['der','den','dem','des'],f:['die','die','der','der'],n:['das','das','dem','des'],p:['die','die','den','der']}[g];
  const I={m:['ein','einen','einem','eines'],f:['eine','eine','einer','einer'],n:['ein','ein','einem','eines'],p:['—','—','—','—']}[g];
  const S=[w.base, g==='m'?nEnd:w.base, g==='m'?nEnd:w.base, gen.f];
  const PL=pl?[pl,pl,dp,pl]:null;
  return {D,I,S,PL,gen,nDek};
}

/* ---- dificultad ---- */
function lev(a,b){
  const m=a.length,n=b.length; if(Math.abs(m-n)>3) return 9;
  let prev=Array.from({length:n+1},(_,j)=>j),cur=new Array(n+1);
  for(let i=1;i<=m;i++){cur[0]=i;
    for(let j=1;j<=n;j++) cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
    [prev,cur]=[cur,prev];}
  return prev[n];
}
function similares(w){
  const a=w.base.toLowerCase(), out=[];
  for(const o of W){ if(o.id===w.id||o.base.length<3) continue;
    const d=lev(a,o.base.toLowerCase());
    if(d<=2&&Math.abs(a.length-o.base.length)<=2) out.push({w:o,d});
  }
  return out.sort((x,y)=>x.d-y.d).slice(0,6);
}
function compuesta(w){
  const b=w.base;
  if(b.length<9) return null;
  for(const o of W){
    if(o.cls!=='s'||o.base.length<4||o.base.length>=b.length) continue;
    if(b.endsWith(o.base)){
      const head=b.slice(0,b.length-o.base.length).replace(/(s|n|en|es)$/,'');
      if(head.length>=3) return {head:b.slice(0,b.length-o.base.length),tail:o.base,tailW:o};
    }
  }
  return null;
}
function dificultad(w){
  const f=[];
  if(w.base.length>=12) f.push({t:'Palabra muy larga · '+w.base.length+' letras',k:1});
  else if(w.base.length>=9) f.push({t:'Palabra larga · '+w.base.length+' letras',k:1});
  const c=compuesta(w);
  if(c) f.push({t:'Compuesta: '+c.head+' + '+c.tail,k:1,tip:'El género y el plural los da siempre el <b>último</b> elemento ('+c.tail+' → '+ART[c.tailW.g]+').'});
  if(/[äöüßÄÖÜ]/.test(w.base)) f.push({t:'Lleva Umlaut o ß',k:1});
  if(/(sch|tsch|pf|chs|zw|str|pfl)/.test(w.base.toLowerCase())) f.push({t:'Grupo consonántico difícil',k:1});
  const sim=similares(w);
  if(sim.length) f.push({t:'Se parece a '+sim.slice(0,3).map(s=>s.w.de).join(', '),k:2});
  if(w.cls==='s'){
    const r=generoRegla(w.base);
    if(!r) f.push({t:'Género no deducible: memorizar con artículo',k:2});
    else if(r.g!==w.g) f.push({t:'Excepción: '+r.l+' suele ser '+GNAME[r.g]+', pero es '+GNAME[w.g],k:3});
    const cp=clasePlural(w);
    if(/Umlaut|irregular/.test(cp.t)) f.push({t:'Plural con cambio de vocal',k:2});
    if(cp.t==='∅ sin cambio') f.push({t:'Plural idéntico al singular',k:1});
    if(w.mark==='n') f.push({t:'Declinación débil (-n en todos los casos)',k:2});
    if(w.pl==='-') f.push({t:'Sin plural (incontable)',k:1});
  }
  if(w.cls==='v'){
    if(w.prat) f.push({t:'Verbo irregular',k:2});
    if(w.sep) f.push({t:'Verbo separable',k:2});
    if(w.aux==='s') f.push({t:'Perfecto con sein',k:1});
  }
  return f;
}
const nivelDif=w=>Math.min(5,dificultad(w).reduce((a,x)=>a+x.k,0));

/* ---- estado ---- */
const vStat=new Map();               // id -> {a:intentos, c:aciertos, box:0..4}
const st=id=>{ if(!vStat.has(id)) vStat.set(id,{a:0,c:0,box:0}); return vStat.get(id); };
let vView='explorar', vCat=null, vSub=null, vCur=0, vNiv='';

/* ---- explorar ---- */
const vq=()=>$('#vq').value.trim().toLowerCase();
function vFiltra(){
  const q=vq(), cls=$('#vcls').value, g=$('#vgen').value, ord=$('#vord').value;
  vNiv=$('#vniv').value;
  let l=W.filter(w=>{
    if(vNiv&&w.lvl!==vNiv) return false;
    if(vCat&&w.cat!==vCat) return false;
    if(vSub&&w.sub!==vSub) return false;
    if(cls&&w.cls!==cls) return false;
    if(g&&w.g!==g) return false;
    if(q&&!(w.de+' '+w.es+' '+w.def).toLowerCase().includes(q)) return false;
    return true;
  });
  if(ord==='az') l.sort((a,b)=>a.base.localeCompare(b.base,'de'));
  if(ord==='len') l.sort((a,b)=>b.base.length-a.base.length);
  if(ord==='dif') l.sort((a,b)=>nivelDif(b)-nivelDif(a));
  if(ord==='niv') l.sort((a,b)=>(NIVORD[a.lvl]-NIVORD[b.lvl])||a.base.localeCompare(b.base,'de'));
  return l;
}
function wrowHTML(w){
  const n=nivelDif(w);
  return '<div class="wrow gen-'+(w.cls==='s'?(w.g==='p'?'f':w.g):'x')+'" data-w="'+w.id+'">'
   +'<span class="art">'+(w.cls==='s'?w.art:CLS[w.cls].slice(0,3).toLowerCase()+'.')+'</span>'
   +'<span class="mid"><span class="de">'+(w.cls==='s'?marcaGen(w.base,w.g,true):w.base)+'</span><br><span class="es">'+w.es+'</span></span>'
   +'<span class="nivtag n-'+w.lvl+'">'+w.lvl+'</span>'
   +'<span class="lvl">'+[1,2,3,4,5].map(i=>'<i class="'+(i<=n?'on':'')+'"></i>').join('')+'</span></div>';
}
function vRender(){
  const out=$('#vout'), q=vq();
  const filtrando=q||$('#vcls').value||$('#vgen').value||$('#vniv').value;
  if(!vCat&&!filtrando){
    const pill=k2=>{const n2=NIV[NIVI[k2]], c2=W.filter(w=>w.lvl===k2).length;
       return '<button class="nivpill" data-nivp="'+k2+'" style="--sc:'+n2.c+'"><b>'+k2+'</b><span>'+c2+'</span></button>';};
    out.innerHTML='<div class="nivresumen">'+NIVBASE.map(pill).join('')
     +'<button class="nivpill plus'+(plusOpen?' on':'')+'" data-vplus="1" style="--sc:'+NIV[NIVI['B2']].c+'"><b>'+(plusOpen?'−':'+')+'</b><span>'
     +W.filter(w=>esPlus(w.lvl)).length+'</span></button>'
     +(plusOpen?NIVPLUS.map(pill).join(''):'')+'</div>'
     +'<div class="catgrid">'+Object.keys(VOCAB).map((c,i)=>{
      const n=W.filter(w=>w.cat===c).length, subs=Object.keys(VOCAB[c]);
      return '<div class="catcard" data-cat="'+c+'" style="animation-delay:'+Math.min(i*12,300)+'ms"><h4>'+c+'</h4>'
       +'<div class="n">'+n+' palabras</div><div class="subs">'+subs.join(' · ')+'</div></div>';
    }).join('')+'</div>';
    $('#vcnt').textContent=W.length+' palabras en '+Object.keys(VOCAB).length+' campos';
    return;
  }
  const l=vFiltra();
  let h='<div class="crumb"><button data-crumb="0">Todos los campos</button>';
  if(vCat) h+='<span>›</span><button data-crumb="1">'+vCat+'</button>';
  if(vSub) h+='<span>›</span><span>'+vSub+'</span>';
  h+='</div>';
  if(vCat&&!vSub) h+='<div class="chips" style="margin-bottom:14px">'+Object.keys(VOCAB[vCat]).map(s=>
      '<button class="chip" data-sub="'+s+'">'+s+'<span class="b">'+VOCAB[vCat][s].length+'</span></button>').join('')+'</div>';
  h+= l.length?'<div class="wlist">'+l.map(wrowHTML).join('')+'</div>'
    :'<div class="empty"><b>Sin resultados</b>Pruebe con otro término.</div>';
  out.innerHTML=h;
  $('#vcnt').textContent=l.length+' de '+W.length+' palabras';
}
$('#vout').addEventListener('click',e=>{
  const vp=e.target.closest('[data-vplus]'); if(vp){ sfx.tap(); plusOpen=!plusOpen; vRender(); return; }
  const np=e.target.closest('[data-nivp]'); if(np){ $('#vniv').value=np.dataset.nivp; vCat=null; vSub=null; vRender(); return; }
  const c=e.target.closest('.catcard'); if(c){vCat=c.dataset.cat;vSub=null;vRender();return;}
  const s=e.target.closest('[data-sub]'); if(s){vSub=s.dataset.sub;vRender();return;}
  const b=e.target.closest('[data-crumb]'); if(b){ if(b.dataset.crumb==='0'){vCat=null;vSub=null;} else vSub=null; vRender(); return;}
  const w=e.target.closest('.wrow'); if(w) vFicha(+w.dataset.w);
});
['#vq','#vcls','#vgen','#vord','#vniv'].forEach(s=>$(s).addEventListener('input',vRender));

/* ---- ficha ---- */
const vdlg=$('#vdlg');
$('#vClose').onclick=()=>vdlg.close();
vdlg.addEventListener('click',e=>{if(e.target===vdlg)vdlg.close();});
$('#vPrev').onclick=()=>vStep(-1); $('#vNext').onclick=()=>vStep(1);
function vStep(d){ const l=vFiltra().length?vFiltra():W; let i=l.findIndex(x=>x.id===vCur); if(i<0)i=0; vFicha(l[(i+d+l.length)%l.length].id); }
function vFicha(id){
  vCur=id; const w=wById(id), gc=w.cls==='s'?(w.g==='p'?'f':w.g):'x';
  $('#vdh').className='dh gen-'+gc; vdlg.className='vficha gen-'+gc;
  $('#vKick').innerHTML='<span class="tag k-mod">'+CLS[w.cls]+'</span>'
    +(w.cls==='s'?'<span class="tag" style="background:var(--gbg);color:var(--gc)">'+GNAME[w.g]+'</span>':'')
    +'<span class="tag aux">'+w.cat+' · '+w.sub+'</span>'
    +'<span class="tag nivtag n-'+w.lvl+'">'+w.lvl+'</span>';
  $('#vTitle').innerHTML=(w.cls==='s'?'<span class="a">'+w.art+'</span> '+marcaGen(w.base,w.g):w.base)+spkBtn((w.cls==='s'?w.art+' ':'')+w.base,'big');
  $('#vTr').textContent=w.es;
  let h='<p style="margin:0 0 14px;font-size:.95rem;color:var(--ink2)"><b>Definición.</b> '+w.def+'</p>';
  if(ejDe(w)) h+='<div class="box ejbox"><h4>Ejemplo de uso</h4><div class="ejde">'+marcaEj(w,ejDe(w))+spkBtn(ejDe(w))+'</div><div class="ejes">'+ejEs(w)+'</div></div>';
  h+='<div class="grid2">';
  if(w.cls==='s'){
    const cp=clasePlural(w), gen=genitivo(w), dk=declinacion(w), r=generoRegla(w.base);
    h+='<div class="box"><h4>Formas principales</h4>'
      +'<div class="kv"><span>Nominativo sg.</span><b>'+w.art+' '+w.base+'</b></div>'
      +'<div class="kv"><span>Genitivo sg.</span><b>'+(w.g==='f'||w.g==='p'?'der '+gen.f:'des '+gen.f)+'</b></div>'
      +'<div class="kv"><span>Plural</span><b>'+(w.pl==='-'?'—':'die '+w.pl)+'</b></div>'
      +'<div class="kv"><span>Dativo pl.</span><b>'+(dativoPl(w)?'den '+dativoPl(w):'—')+'</b></div>'
      +'<div class="kv"><span>Clase de plural</span><b>'+cp.t+'</b></div></div>';
    h+='<div class="box"><h4>Por qué es así</h4>'
      +'<p style="font-size:.83rem;color:var(--ink2);margin:0 0 7px">'+(r&&r.g===w.g
         ? 'La terminación <b>'+r.l+'</b> anuncia el género <b>'+GNAME[w.g]+'</b>: es previsible.'
         : r ? 'Cuidado: la terminación <b>'+r.l+'</b> suele dar '+GNAME[r.g]+', pero esta palabra es <b>'+GNAME[w.g]+'</b>.'
             : 'Ninguna terminación permite deducir el género: hay que aprenderlo junto al artículo.')+'</p>'
      +'<p style="font-size:.83rem;color:var(--ink2);margin:0 0 7px">'+cp.d+'</p>'
      +'<p style="font-size:.83rem;color:var(--ink2);margin:0">'+gen.n+'</p></div>';
    h+='</div>';
    const C=['Nominativo','Acusativo','Dativo','Genitivo'];
    h+='<div class="box" style="margin-bottom:18px"><h4>Declinación</h4><table class="dekl">'
      +'<tr><th></th><th>Determinado</th><th>Indeterminado</th><th>Plural determinado</th></tr>'
      +C.map((c,i)=>'<tr><td class="c">'+c+'</td>'
        +'<td><span class="art">'+dk.D[i]+'</span> '+marcaFin(dk.S[i],w.base)+'</td>'
        +'<td>'+(dk.I[i]==='—'?'<span style="color:var(--ink3)">—</span>':'<span class="art">'+dk.I[i]+'</span> '+marcaFin(dk.S[i],w.base))+'</td>'
        +'<td>'+(dk.PL?'<span class="art">'+{0:'die',1:'die',2:'den',3:'der'}[i]+'</span> '+marcaFin(dk.PL[i],w.base):'<span style="color:var(--ink3)">—</span>')+'</td></tr>').join('')
      +'</table><p style="font-size:.75rem;color:var(--ink3);margin:9px 0 0">En rosa, lo que se añade al sustantivo. '
      +(dk.nDek?'Esta palabra sigue la <b>declinación débil</b>: lleva -(e)n en todos los casos menos el nominativo singular.'
               :'Salvo el genitivo singular y la -n del dativo plural, el sustantivo no cambia: el caso lo marca el artículo.')+'</p></div>';
  } else {
    h+='<div class="box"><h4>Datos</h4>';
    if(w.cls==='v'){
      const vb=V.find(x=>x.i===w.base.replace(/^sich\s+/,''));
      h+='<div class="kv"><span>Infinitivo</span><b>'+w.base+'</b></div>'
       +'<div class="kv"><span>Auxiliar</span><b>'+(w.aux==='h'?'haben':'sein')+'</b></div>'
       +'<div class="kv"><span>Tipo</span><b>'+(w.prat?'irregular':'regular')+(w.sep?' · separable':'')+'</b></div>'
       +(w.prat?'<div class="kv"><span>Pretérito</span><b>'+w.prat+'</b></div><div class="kv"><span>Participio</span><b>'+w.part+'</b></div>':'')
       +'</div>';
      if(vb) h+='<div class="box"><h4>Conjugación</h4><p style="font-size:.84rem;color:var(--ink2);margin:0 0 10px">Este verbo está en el repertorio conjugado.</p><button class="btn pri" id="vConj" data-vb="'+vb.id+'">Ver las tres tablas</button></div>';
      else h+='<div class="box"><h4>Conjugación</h4><p style="font-size:.84rem;color:var(--ink2);margin:0">Sigue el modelo '+(w.prat?'fuerte':'débil')+': consulte en la pestaña <b>Verbos</b> un verbo del mismo tipo.</p></div>';
    } else if(w.cls==='a'){
      h+='<div class="kv"><span>Positivo</span><b>'+w.base+'</b></div>'
       +'<div class="kv"><span>Comparativo</span><b>'+(w.komp||w.base+'er')+'</b></div>'
       +'<div class="kv"><span>Superlativo</span><b>am '+(w.sup||w.base+'st')+'en</b></div></div>'
       +'</div>';
    } else {
      h+='<div class="kv"><span>Clase</span><b>'+CLS[w.cls]+'</b></div>'
       +'<div class="kv"><span>Campo</span><b>'+w.cat+'</b></div></div>';
    }
    h+='</div>';
  }
  if(w.cls==='a') h+=adjBox(w);
  const dif=dificultad(w), sim=similares(w);
  h+='<div class="box" style="margin-bottom:16px"><h4>Por qué cuesta · nivel '+nivelDif(w)+'/5</h4><div class="diffs">'
    +(dif.length?dif.map(d=>'<span class="dchip">'+d.t+'</span>').join(''):'<span class="dchip ok">Sin dificultades destacables</span>')+'</div>';
  const tip=dif.find(d=>d.tip);
  if(tip) h+='<p style="font-size:.8rem;color:var(--ink2);margin:10px 0 0">'+tip.tip+'</p>';
  h+='</div>';
  if(sim.length) h+='<div class="box" style="margin-bottom:16px"><h4>No confundir con</h4>'
    +sim.map(s=>'<span class="simw" data-go="'+s.w.id+'">'+s.w.de+' <span style="color:var(--ink3)">'+s.w.es+'</span></span>').join('')+'</div>';
  h+='<div class="box" style="margin-bottom:16px"><h4>Consultar fuera</h4><div class="dicmini">'+dicLinks(w.base,true)+'</div></div>';
  const s0=st(w.id);
  h+='<div class="dfoot"><button class="btn pri" id="vPract">Practicar esta palabra</button>'
    +'<button class="btn" id="vFav">'+(w.fav?'Quitar de favoritas':'Añadir a favoritas')+'</button>'
    +'<span style="font-size:.78rem;color:var(--ink3);align-self:center;margin-left:auto">'+(s0.a?s0.c+' aciertos de '+s0.a+' intentos':'Aún sin practicar')+'</span></div>';
  $('#vBody').innerHTML=h; $('#vBody').scrollTop=0;
  $('#vBody').querySelectorAll('.simw').forEach(el=>el.onclick=()=>vFicha(+el.dataset.go));
  const cj=$('#vConj'); if(cj) cj.onclick=()=>{vdlg.close();goMode('verbos');openV(+cj.dataset.vb);};
  $('#vFav').onclick=()=>{w.fav=!w.fav;vFicha(id);};
  $('#vPract').onclick=()=>{vdlg.close();wrForced=w;vGo('escribir');};
  if(!vdlg.open) vdlg.showModal();
}
function marcaFin(forma,base){
  if(forma===base) return forma;
  if(forma.startsWith(base)) return base+'<span class="fx">'+forma.slice(base.length)+'</span>';
  const u=umlautar(base);
  if(forma.startsWith(u)) return '<span class="fx">'+u+'</span>'+(forma.length>u.length?'<span class="fx">'+forma.slice(u.length)+'</span>':'');
  return '<span class="fx">'+forma+'</span>';
}

/* ---- ámbitos de práctica ---- */
const SCOPES=[['all','Todo el vocabulario'],['cat','Campo actual'],['s','Solo sustantivos'],['dif','Las más difíciles'],['fail','Las que fallo'],['fav','Favoritas']];
function vPool(scope){
  let l=(typeof ambAplica==='function')?ambAplica(W):W;
  const base=l;
  if(scope==='cat'&&vCat) l=base.filter(w=>w.cat===vCat);
  if(scope==='s') l=base.filter(w=>w.cls==='s');
  if(scope==='dif') l=[...base].sort((a,b)=>nivelDif(b)-nivelDif(a)).slice(0,120);
  if(scope==='fail') l=base.filter(w=>{const s=vStat.get(w.id);return s&&s.a>s.c;});
  if(scope==='fav') l=base.filter(w=>w.fav);
  return l.length?l:(base.length?base:W);
}
function scopePills(host,cur,cb){
  $(host).innerHTML=SCOPES.map(([k,l])=>'<button class="pill'+(k===cur?' on':'')+'" data-s="'+k+'">'+l+(k==='cat'&&vCat?': '+vCat:'')+'</button>').join('');
  $(host).onclick=e=>{const b=e.target.closest('.pill');if(!b)return;cb(b.dataset.s);};
}

/* ---- tarjetas ---- */
let fcScope='all', fcDir='es', fcQ=[], fcCur=null, fcSeen=0, fcKnown=0;
function fcInit(){
  scopePills('#fcScope',fcScope,s=>{fcScope=s;fcInit();});
  fcQ=[...vPool(fcScope)].sort(()=>0.5-Math.random()); fcSeen=0;fcKnown=0;fcNext();
}
function fcNext(){
  $('#fc').classList.remove('flip');
  if(!fcQ.length){ $('#fcFront').innerHTML='<div class="fchint">Ronda terminada</div><div class="big">¡Listo!</div><div class="sm">Ha repasado todas las tarjetas del ámbito seleccionado.</div>'; $('#fcBack').innerHTML=''; fcCur=null; fcScore(); return; }
  fcCur=fcQ[0]; const w=fcCur, gc=w.cls==='s'?(w.g==='p'?'f':w.g):'x';
  $('#fc').className='fc gen-'+gc;
  const de='<div class="big">'+(w.cls==='s'?'<span class="a">'+w.art+'</span> '+marcaGen(w.base,w.g):w.base)+spkBtn((w.cls==='s'?w.art+' ':'')+w.base,'big gh')+'</div>';
  const es='<div class="big" style="font-size:1.9rem">'+w.es+'</div>';
  $('#fcFront').innerHTML='<div class="fchint">'+(fcDir==='es'?'Español':'Alemán')+'</div>'+(fcDir==='es'?es:de)
    +'<div class="sm">'+CLS[w.cls]+' · '+w.cat+'</div>';
  $('#fcBack').innerHTML='<div class="fchint">'+(fcDir==='es'?'Alemán':'Español')+'</div>'+(fcDir==='es'?de:es)
    +(w.cls==='s'&&w.pl!=='-'?'<div class="sm">plural: die '+w.pl+'</div>':'')
    +'<div class="df">'+w.def+'</div>'
    +(ejDe(w)?'<div class="fcej">'+marcaEj(w,ejDe(w))+'<span>'+ejEs(w)+'</span></div>':'');
  fcScore();
}
function fcScore(){ $('#fcSeen').textContent=fcSeen; $('#fcKnown').textContent=fcKnown; $('#fcLeft').textContent=fcQ.length; }
$('#fc').onclick=()=>{sfx.flip();$('#fc').classList.toggle('flip');};
document.querySelector('.fcbtns').onclick=e=>{
  const b=e.target.closest('button'); if(!b||!fcCur) return;
  const q=+b.dataset.q, w=fcQ.shift(); fcSeen++;
  const s=st(w.id); s.a++; if(q===2){s.c++;s.box=Math.min(4,s.box+1);fcKnown++;} else s.box=0;
  if(q===0) fcQ.splice(Math.min(3,fcQ.length),0,w);
  else if(q===1) fcQ.splice(Math.min(9,fcQ.length),0,w);
  fcNext();
};
$('#fcDir').onclick=()=>{fcDir='es';$('#fcDir').classList.add('on');$('#fcDir2').classList.remove('on');fcNext();};
$('#fcDir2').onclick=()=>{fcDir='de';$('#fcDir2').classList.add('on');$('#fcDir').classList.remove('on');fcNext();};

/* ---- escribir (vocabulario activo) ---- */
let wrScope='all', wrCur=null, wrForced=null, wrArtSel='', wrDone=false, wrHinted=0;
let wrA=0,wrC=0,wrStreak=0;
const UMLB=['ä','ö','ü','ß','Ä','Ö','Ü'];
function wrInit(){
  scopePills('#wrScope',wrScope,s=>{wrScope=s;wrInit();});
  $('#wrUml').innerHTML=UMLB.map(u=>'<button type="button" data-u="'+u+'">'+u+'</button>').join('');
  wrNext();
}
function wrNext(){
  wrDone=false;wrHinted=0;wrArtSel='';
  let l=wrForced?[wrForced]:vPool(wrScope).filter(w=>!/\s/.test(w.base)); wrForced=null;
  if(!l.length) l=W.filter(w=>!/\s/.test(w.base));
  wrCur=l[Math.floor(Math.random()*l.length)];
  const w=wrCur, gc=w.cls==='s'?(w.g==='p'?'f':w.g):'x';
  $('#wrCard').className='qcard gen-'+gc;
  $('#wrKick').innerHTML='<span class="tag k-mod">'+CLS[w.cls]+'</span><span class="tag aux">'+w.cat+'</span>';
  $('#wrEs').textContent=w.es;
  $('#wrDef').textContent=w.def;
  $('#wrArt').innerHTML=w.cls==='s'?['der','die','das'].map(a=>'<button data-a="'+a+'">'+a+'</button>').join(''):'';
  $('#wrIn').value=''; $('#wrFb').className='fb';
  wrBoxes(); $('#wrIn').focus();
}
function wrBoxes(res){
  const w=wrCur, tgt=w.base, val=$('#wrIn').value;
  let h='';
  for(let i=0;i<tgt.length;i++){
    if(tgt[i]===' '||tgt[i]==='-'){h+='<b class="gap">'+(tgt[i]==='-'?'-':'')+'</b>';continue;}
    let cl='', ch=val[i]||'';
    if(res) cl=(val[i]||'').toLowerCase()===tgt[i].toLowerCase()?'ok':'no';
    else if(i===val.length) cl='cur';
    if(res&&!ch) {ch=tgt[i];cl='no';}
    h+='<b class="'+cl+'">'+(ch||'')+'</b>';
  }
  $('#wrBoxes').innerHTML=h;
}
$('#wrBoxes').onclick=()=>$('#wrIn').focus();
$('#wrIn').addEventListener('input',()=>{ if(wrDone)return; const t=wrCur.base;
  if($('#wrIn').value.length>t.length) $('#wrIn').value=$('#wrIn').value.slice(0,t.length);
  wrBoxes(); });
$('#wrIn').addEventListener('keydown',e=>{ if(e.key==='Enter'){e.preventDefault();wrDone?wrNext():wrCheck();} });
$('#wrUml').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  const t=wrCur.base; if($('#wrIn').value.length<t.length)$('#wrIn').value+=b.dataset.u; wrBoxes(); $('#wrIn').focus();};
$('#wrArt').onclick=e=>{const b=e.target.closest('button');if(!b||wrDone)return;
  wrArtSel=b.dataset.a; [...$('#wrArt').children].forEach(x=>x.classList.toggle('on',x===b)); $('#wrIn').focus();};
$('#wrCheck').onclick=()=>wrDone?wrNext():wrCheck();
$('#wrSkip').onclick=()=>wrNext();
$('#wrFicha').onclick=()=>vFicha(wrCur.id);
$('#wrHint').onclick=()=>{ if(wrDone)return; wrHinted++;
  $('#wrIn').value=wrCur.base.slice(0,Math.min(wrHinted+1,wrCur.base.length-1)); wrBoxes();
  $('#wrIn').focus(); };
function wrCheck(){
  const w=wrCur, val=$('#wrIn').value.trim(), okW=val.toLowerCase()===w.base.toLowerCase();
  const okA=w.cls!=='s'||wrArtSel===w.art, ok=okW&&okA;
  const s=st(w.id); s.a++; wrA++;
  if(ok){s.c++;s.box=Math.min(4,s.box+1);wrC++;wrStreak++;} else {s.box=0;wrStreak=0;}
  wrDone=true; wrBoxes(true); (ok?sfx.ok:sfx.no)();
  if(w.cls==='s') [...$('#wrArt').children].forEach(x=>{const c=x.dataset.a===w.art?'ok':(x.dataset.a===wrArtSel?'no':'');if(c)x.classList.add(c);});
  const fb=$('#wrFb');
  const mayus=w.cls==='s'&&okW&&val[0]!==val[0].toUpperCase();
  fb.className='fb '+(ok?'ok':'no')+' on';
  fb.innerHTML=(ok?'<svg viewBox="0 0 24 24"><path d="m4 12 5.5 5.5L20 7"/></svg>':'<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>')
   +'<div><b>'+(ok?'Correcto':'La palabra es')+'</b><code>'+w.de+'</code>'
   +(w.cls==='s'&&w.pl!=='-'?'<span class="mini">Plural: <b>die '+w.pl+'</b> · Genitivo: <b>des '+genitivo(w).f+'</b></span>':'')
   +(!okA?'<span class="mini">El artículo es <b>'+w.art+'</b>. '+(generoRegla(w.base)&&generoRegla(w.base).g===w.g?'Regla: la terminación '+generoRegla(w.base).l+' pide '+GNAME[w.g]+'.':'No hay regla: es de los que se memorizan.')+'</span>':'')
   +(mayus?'<span class="mini">Recuerde que en alemán todos los sustantivos se escriben con mayúscula inicial.</span>':'')
   +(ejDe(w)?'<span class="ex2">'+marcaEj(w,ejDe(w))+'</span><span class="mini">'+ejEs(w)+'</span>':'')
   +'</div>';
  $('#wrCheck').textContent='Siguiente';
  wrScore();
}
function wrScore(){
  $('#wrAcc').textContent=wrA?Math.round(wrC/wrA*100)+'%':'—';
  $('#wrStreak').textContent=wrStreak; $('#wrTot').textContent=wrA;
  $('#wrLearn').textContent=[...vStat.values()].filter(s=>s.box>=3).length;
  $('#wrCheck').textContent=wrDone?'Siguiente':'Controlar';
}

/* ---- género ---- */
let gCur=null,gA=0,gC=0,gS=0,gDone=false;
function gNext(){
  gDone=false;
  const l=ambAplica(W).filter(w=>w.cls==='s'&&w.g!=='p');
  gCur=l[Math.floor(Math.random()*l.length)];
  $('#gCard').className='qcard';
  $('#gKick').innerHTML='<span class="tag aux">'+gCur.cat+' · '+gCur.sub+'</span>';
  $('#gWord').textContent=gCur.base; $('#gEs').textContent=gCur.es;
  [...$('#gArt').children].forEach(b=>b.className='');
  $('#gFb').className='fb';
}
$('#gArt').onclick=e=>{
  const b=e.target.closest('button'); if(!b||gDone) return;
  gDone=true; const ok=b.dataset.g===gCur.g; gA++; if(ok){gC++;gS++;} else gS=0; (ok?sfx.ok:sfx.no)();
  const s=st(gCur.id); s.a++; if(ok)s.c++;
  [...$('#gArt').children].forEach(x=>{const c=x.dataset.g===gCur.g?'ok':(x===b?'no':'');if(c)x.classList.add(c);});
  const r=generoRegla(gCur.base), cp=clasePlural(gCur);
  $('#gFb').className='fb '+(ok?'ok':'no')+' on';
  $('#gFb').innerHTML=(ok?'<svg viewBox="0 0 24 24"><path d="m4 12 5.5 5.5L20 7"/></svg>':'<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>')
   +'<div><b>'+gCur.art+' '+gCur.base+'</b><code>'+GNAME[gCur.g]+' · plural: '+(gCur.pl==='-'?'—':'die '+gCur.pl)+'</code>'
   +'<span class="mini">'+(r&&r.g===gCur.g?'Se deduce de la terminación <b>'+r.l+'</b>, que da siempre '+GNAME[r.g]+'.'
       :r?'Atención: <b>'+r.l+'</b> suele dar '+GNAME[r.g]+', pero esta palabra es una excepción.'
         :'No hay regla formal: pertenece al grupo que hay que memorizar con el artículo.')+' '+cp.d+'</span></div>';
  $('#gAcc').textContent=Math.round(gC/gA*100)+'%'; $('#gStreak').textContent=gS; $('#gTot').textContent=gA;
};
$('#gNext').onclick=gNext;

/* ---- guía ---- */
function ejemplos(pred,n){ return W.filter(w=>w.cls==='s'&&pred(w)).slice(0,n); }
function guia(){
  const porRegla={};
  GRULES.forEach(([re,g,l])=>{const ej=W.filter(w=>w.cls==='s'&&re.test(w.base)&&w.g===g).slice(0,3);
    if(ej.length) porRegla[l]={g,ej};});
  const clases=[['+ -e','Mayoritaria en masculinos'],['¨ + -e','Masculinos con Umlaut'],['+ -en','Femeninos y débiles'],['+ -n','Femeninos en -e'],['+ -er','Neutros cortos'],['¨ + -er','Neutros y algún masculino'],['∅ sin cambio','Masculinos y neutros en -er, -en, -el'],['¨ solo Umlaut','Pocos, muy frecuentes'],['+ -s','Extranjerismos y abreviaturas']];
  const porClase=clases.map(([t,d])=>({t,d,ej:W.filter(w=>w.cls==='s'&&clasePlural(w).t===t).slice(0,4)})).filter(c=>c.ej.length);
  const nDek=W.filter(w=>w.mark==='n');
  const excep=W.filter(w=>{const r=generoRegla(w.base);return w.cls==='s'&&r&&r.g!==w.g;}).slice(0,8);
  return `
<div class="gcard" style="--c:var(--g-m)">
  <h2><span class="dot"></span>El género: por qué es imprescindible</h2>
  <p>En alemán el artículo no acompaña al sustantivo: <b>forma parte de él</b>. De él dependen la declinación, el pronombre que lo sustituye y la terminación de cualquier adjetivo que lo preceda. Aprender <i>Tisch</i> sin <i>der</i> equivale a no haber aprendido la palabra.</p>
  <table class="endtable"><tr><th>Género</th><th>Artículo det.</th><th>Artículo indet.</th><th>Pronombre</th></tr>
  <tr class="m"><td>masculino</td><td>der</td><td>ein</td><td>er</td></tr>
  <tr class="f"><td>femenino</td><td>die</td><td>eine</td><td>sie</td></tr>
  <tr class="n"><td>neutro</td><td>das</td><td>ein</td><td>es</td></tr>
  <tr><td>plural</td><td>die</td><td>— (keine)</td><td>sie</td></tr></table>
  <p>Aproximadamente el <b>40 %</b> del léxico deja ver su género en la terminación. Lo que sigue son las terminaciones fiables, ilustradas con palabras de este mismo repertorio.</p>
</div>

<div class="gcard" style="--c:var(--g-f)">
  <h2><span class="dot"></span>Terminaciones que delatan el género</h2>
  <h3>Siempre femeninas</h3>
  <table class="endtable"><tr><th>Terminación</th><th>Ejemplos del repertorio</th></tr>
  ${['-ung','-heit','-keit','-schaft','-ion','-tät','-ik','-ur','-ei','-ie','-in'].filter(l=>porRegla[l]).map(l=>
    `<tr class="f"><td>${l}</td><td>${porRegla[l].ej.map(w=>w.de).join(' · ')}</td></tr>`).join('')}
  </table>
  <p style="font-size:.85rem">Sin excepciones prácticas en el nivel A1. A ellas se añade la regla de que casi todos los sustantivos terminados en <b>-e</b> que designan cosas son femeninos (<i>die Lampe, die Blume, die Tasse</i>), con la salvedad de los de declinación débil que designan personas (<i>der Junge, der Kunde</i>).</p>
  <h3>Siempre neutras</h3>
  <table class="endtable"><tr><th>Terminación</th><th>Ejemplos del repertorio</th></tr>
  ${['-chen','-lein','-ment','-um','-nis','Ge-'].filter(l=>porRegla[l]).map(l=>
    `<tr class="n"><td>${l}</td><td>${porRegla[l].ej.map(w=>w.de).join(' · ')}</td></tr>`).join('')}
  </table>
  <p style="font-size:.85rem"><b>-chen</b> y <b>-lein</b> son diminutivos y neutralizan cualquier género previo: por eso <i>das Mädchen</i> (la chica) es neutro pese a designar a una mujer, y el pronombre correcto es <i>es</i>.</p>
  <h3>Tendencia masculina</h3>
  <table class="endtable"><tr><th>Terminación</th><th>Ejemplos del repertorio</th></tr>
  ${['-er','-ling','-ismus','-ent','-ant','-ist','-or','-eur'].filter(l=>porRegla[l]).map(l=>
    `<tr class="m"><td>${l}</td><td>${porRegla[l].ej.map(w=>w.de).join(' · ')}</td></tr>`).join('')}
  </table>
  <p style="font-size:.85rem"><b>-er</b> es fiable solo cuando designa al agente o al instrumento de un verbo (<i>lehren → der Lehrer</i>, <i>drucken → der Drucker</i>). Fuera de ese caso hay excepciones frecuentes: ${excep.map(w=>'<code>'+w.de+'</code>').join(' ')}.</p>
</div>

<div class="gcard" style="--c:var(--g-n)">
  <h2><span class="dot"></span>El género por el significado</h2>
  <div class="tips">
    <div class="tip" style="--c:var(--g-m)"><b>der</b><span>Días, meses y estaciones (<i>der Montag, der Sommer</i>) · puntos cardinales y fenómenos atmosféricos (<i>der Wind, der Regen</i>) · bebidas alcohólicas (<i>der Wein</i>) · marcas de coche · varones y oficios masculinos.</span></div>
    <div class="tip" style="--c:var(--g-f)"><b>die</b><span>Números como sustantivo (<i>die Eins</i>) · árboles y flores (<i>die Blume</i>) · la mayoría de las palabras en -e que designan cosas · mujeres y oficios en -in.</span></div>
    <div class="tip" style="--c:var(--g-n)"><b>das</b><span>Infinitivos sustantivados (<i>das Essen, das Schwimmen</i>) · colores y letras como sustantivo (<i>das Rot</i>) · metales · diminutivos · la mayoría de los nombres de países y ciudades.</span></div>
  </div>
  <p style="font-size:.85rem;margin-top:12px">Regla de oro de los compuestos: <b>el género y el plural los fija siempre el último elemento</b>. <i>die Hand + das Tuch → das Handtuch</i>; <i>krank + das Haus → das Krankenhaus</i>, plural <i>die Krankenhäuser</i>.</p>
</div>

<div class="gcard" style="--c:var(--brand)">
  <h2><span class="dot"></span>Los cinco caminos del plural</h2>
  <p>El alemán no tiene una marca única de plural. Hay cinco clases, y la elección depende sobre todo del género y del número de sílabas. En el artículo, en cambio, no hay ambigüedad: el plural es siempre <b>die</b>.</p>
  <table class="endtable"><tr><th>Clase</th><th>Cuándo aparece</th><th>Ejemplos del repertorio</th></tr>
  ${porClase.map(c=>`<tr><td>${c.t}</td><td>${c.d}</td><td>${c.ej.map(w=>w.base+' → '+w.pl).join(' · ')}</td></tr>`).join('')}
  </table>
  <h3>Cómo decidir</h3>
  <p><b>Femeninos:</b> más del 90 % hacen el plural en <b>-n</b> o <b>-en</b> y nunca reciben Umlaut cuando terminan en -e (<i>die Blume → die Blumen</i>). Los monosílabos femeninos son la excepción y toman <b>¨ + -e</b>: <i>die Hand → die Hände</i>.</p>
  <p><b>Masculinos y neutros terminados en -er, -en, -el:</b> plural invariable, con o sin Umlaut (<i>der Lehrer → die Lehrer</i>, <i>der Vater → die Väter</i>). Solo el artículo distingue el número.</p>
  <p><b>Neutros monosílabos:</b> tienden a <b>¨ + -er</b> (<i>das Haus → die Häuser</i>, <i>das Buch → die Bücher</i>).</p>
  <p><b>Extranjerismos y palabras recientes:</b> plural en <b>-s</b> (<i>das Auto → die Autos</i>, <i>das Handy → die Handys</i>), la única clase que no admite Umlaut.</p>
  <h3>La -n del dativo plural</h3>
  <p>Fuera de los plurales en -s, el dativo plural añade una <b>-n</b> si el plural no la tiene ya: <i>die Kinder → mit den Kinder<b>n</b></i>, <i>die Häuser → in den Häuser<b>n</b></i>. Es la única desinencia de caso que el sustantivo alemán conserva en plural.</p>
</div>

<div class="gcard" style="--c:var(--c-mix)">
  <h2><span class="dot"></span>El genitivo y la declinación débil</h2>
  <p>El sustantivo alemán apenas se declina: el caso lo marca el artículo. Solo hay dos terminaciones vivas.</p>
  <table class="endtable"><tr><th>Caso</th><th>Marca en el sustantivo</th><th>Ejemplo</th></tr>
  <tr><td>Genitivo sg. m/n</td><td>-s (polisílabos) · -es (monosílabos y tras -s, -ß, -x, -z)</td><td>des Lehrers · des Hauses</td></tr>
  <tr><td>Genitivo sg. f</td><td>sin marca</td><td>der Frau</td></tr>
  <tr><td>Dativo pl.</td><td>-n si el plural no acaba en -n ni en -s</td><td>den Kindern</td></tr></table>
  <h3>Declinación débil (n-Deklination)</h3>
  <p>Un grupo cerrado de <b>masculinos</b>, casi todos referidos a personas o animales, añade <b>-(e)n</b> en acusativo, dativo y genitivo del singular, no solo en genitivo. En este repertorio: ${nDek.map(w=>'<code>'+w.de+'</code>').join(' ')}.</p>
  <p>Pertenecen a este grupo los masculinos terminados en <b>-e</b> que designan personas (<i>der Junge, der Kunde, der Kollege</i>), los internacionalismos en <b>-ent, -ant, -ist, -oge, -at</b> (<i>der Student, der Polizist</i>) y un puñado de irregulares (<i>der Herr, der Mensch, der Nachbar</i>). <i>Der Name</i> y <i>das Herz</i> son mixtos: añaden -n y además -s en genitivo (<i>des Namens</i>, <i>des Herzens</i>).</p>
</div>

<div class="gcard" style="--c:var(--c-aux)">
  <h2><span class="dot"></span>Cómo memorizar sin sufrir</h2>
  <div class="tips">
    <div class="tip"><b>Nunca la palabra sola</b><span>Almacene siempre el trío <i>artículo + palabra + plural</i>: «das Buch, die Bücher». Es el formato que usan todas las fichas de este documento.</span></div>
    <div class="tip"><b>Color y espacio</b><span>Asocie un color a cada género (aquí azul, rosa y verde) y manténgalo. La memoria visual del género es más rápida que la verbal.</span></div>
    <div class="tip"><b>Ataque los grupos</b><span>Estudie juntas las palabras de una misma terminación: veinte palabras en -ung se aprenden de una vez porque comparten género y plural.</span></div>
    <div class="tip"><b>Compuestos gratis</b><span>Si sabe <i>das Haus</i>, ya sabe <i>das Krankenhaus</i>, <i>das Rathaus</i> y <i>das Hochhaus</i>. Descomponer multiplica el vocabulario.</span></div>
  </div>
</div>`;
}

/* ---- navegación del módulo ---- */
function vGo(v){
  vView=v;
  ['explorar','tarjetas','escribir','genero'].forEach(x=>$('#v-'+x).classList.toggle('hide',x!==v));
  if(v==='tarjetas'&&!fcCur) fcInit();
  if(v==='tarjetas') scopePills('#fcScope',fcScope,s=>{fcScope=s;fcInit();});
  if(v==='escribir'){ if(!wrCur||wrForced) wrInit(); else scopePills('#wrScope',wrScope,s=>{wrScope=s;wrInit();}); wrScore(); setTimeout(()=>$('#wrIn').focus(),60); }
  if(v==='genero'&&!gCur) gNext();
  goModeScroll();
}
function goModeScroll(){ window.scrollTo({top:0,behavior:'smooth'}); }

document.addEventListener('keydown',e=>{
  if(vdlg.open&&e.key==='ArrowRight')vStep(1);
  if(vdlg.open&&e.key==='ArrowLeft')vStep(-1);
  if(!vdlg.open&&!dlg.open&&e.code==='Space'&&vView==='tarjetas'&&!$('#m-vocab').classList.contains('hide')&&document.activeElement.tagName!=='INPUT'){
    e.preventDefault();$('#fc').classList.toggle('flip');}
});
vRender();

$('#legendDoc').innerHTML=LEYENDA;
score(); /* la lista de verbos (184 fichas) se dibuja la primera vez que se abre: carga más rápida */
let listaHecha=false;

/* TEORÍA + QUIZ · bloque 1
   q: "enunciado|op0|op1|op2|op3|índice correcto|explicación"                       */
const PREF={
 sep:[
  ['ab-','separación, alejamiento, interrupción',[['abfahren','salir (un vehículo)'],['abholen','recoger a alguien'],['abnehmen','adelgazar; descolgar'],['absagen','anular una cita']]],
  ['an-','contacto, inicio, dirección hacia',[['anrufen','llamar por teléfono'],['anfangen','empezar'],['ankommen','llegar'],['anziehen','ponerse la ropa']]],
  ['auf-','apertura, hacia arriba, comienzo',[['aufstehen','levantarse'],['aufmachen','abrir'],['aufräumen','ordenar'],['aufhören','dejar de hacer algo']]],
  ['aus-','salida, hacia fuera, apagar',[['aussteigen','bajarse de un vehículo'],['ausgehen','salir de fiesta'],['ausmachen','apagar'],['ausfüllen','rellenar un formulario']]],
  ['ein-','entrada, hacia dentro',[['einkaufen','hacer la compra'],['einsteigen','subir a un vehículo'],['einladen','invitar'],['einschlafen','quedarse dormido']]],
  ['mit-','compañía, participación',[['mitkommen','acompañar'],['mitbringen','traer consigo'],['mitmachen','participar'],['mitnehmen','llevarse']]],
  ['nach-','posterioridad, repetición, imitación',[['nachdenken','reflexionar'],['nachfragen','preguntar de nuevo'],['nachschlagen','consultar en un libro']]],
  ['vor-','anterioridad, delante, presentación',[['vorstellen','presentar; imaginarse'],['vorbereiten','preparar'],['vorschlagen','proponer'],['vorhaben','tener previsto']]],
  ['zu-','cierre, acercamiento',[['zumachen','cerrar'],['zuhören','escuchar con atención'],['zusehen','mirar sin intervenir']]],
  ['zurück-','regreso, retroceso',[['zurückkommen','regresar'],['zurückgeben','devolver'],['zurückrufen','devolver la llamada']]],
  ['weg-','alejamiento, desaparición',[['weggehen','marcharse'],['wegfahren','irse en vehículo'],['wegwerfen','tirar a la basura']]],
  ['los-','arranque, desprendimiento',[['losfahren','ponerse en marcha'],['losgehen','echar a andar; empezar']]],
  ['fern-','a distancia',[['fernsehen','ver la televisión']]],
  ['teil-','participación',[['teilnehmen','participar en algo']]],
  ['statt-','realización',[['stattfinden','tener lugar, celebrarse']]],
  ['hin- / her-','alejamiento y acercamiento respecto del hablante',[['hingehen','ir hacia allí'],['herkommen','venir hacia aquí'],['hinfahren','desplazarse allí']]]
 ],
 insep:[
  ['be-','convierte un verbo en transitivo',[['besuchen','visitar'],['bezahlen','pagar'],['bekommen','recibir (¡no llegar a ser!)'],['beginnen','comenzar']]],
  ['ent-','alejamiento, privación, origen',[['entscheiden','decidir'],['entschuldigen','disculpar'],['entstehen','surgir']]],
  ['emp-','recepción, percepción',[['empfehlen','recomendar'],['empfangen','recibir'],['empfinden','sentir']]],
  ['er-','logro, consecución, inicio de un proceso',[['erklären','explicar'],['erzählen','contar, narrar'],['erkennen','reconocer'],['erreichen','alcanzar']]],
  ['ge-','sin valor propio en la lengua actual',[['gehören','pertenecer'],['gefallen','gustar'],['gewinnen','ganar']]],
  ['miss-','valor negativo, fracaso',[['missverstehen','malinterpretar'],['misslingen','salir mal']]],
  ['ver-','cambio de estado, error, consumo',[['verstehen','entender'],['vergessen','olvidar'],['verkaufen','vender'],['verlieren','perder']]],
  ['zer-','destrucción, fragmentación',[['zerstören','destruir'],['zerbrechen','romperse en pedazos']]]
 ],
 dual:[
  ['durch-','separable: atravesar físicamente · inseparable: sentido figurado',[['durchfahren','atravesar sin parar (sep.)'],['durchsuchen','registrar, cachear (insep.)']]],
  ['über-','separable: pasar por encima · inseparable: superar, traducir',[['überlaufen','desbordarse (sep.)'],['übersetzen','traducir (insep.)'],['überlegen','reflexionar (insep.)']]],
  ['um-','separable: cambio de posición · inseparable: rodear',[['umziehen','mudarse (sep.)'],['umsteigen','hacer transbordo (sep.)'],['umarmen','abrazar (insep.)']]],
  ['unter-','separable: meter debajo · inseparable: someter, interrumpir',[['unterkommen','encontrar alojamiento (sep.)'],['unterschreiben','firmar (insep.)'],['unterbrechen','interrumpir (insep.)']]],
  ['wieder-','separable: repetición material · inseparable: solo en wiederholen',[['wiedersehen','volver a ver (sep.)'],['wiederholen','repetir (insep.)']]]
 ]
};

/* ============ ADVERBIOS · TEKAMOLO ============ */
const TEKA={
 te:{n:'Temporal',pr:'wann? · wie lange? · wie oft?',c:'#6fd3ac',
     l:[['heute','hoy'],['gestern','ayer'],['morgen','mañana'],['jetzt','ahora'],['später','más tarde'],['früh','temprano'],['spät','tarde'],['immer','siempre'],['meistens','casi siempre'],['oft','a menudo'],['manchmal','a veces'],['selten','raramente'],['nie','nunca'],['zuerst','primero'],['danach','después'],['bald','pronto'],['gerade','justo ahora'],['schon','ya'],['noch','todavía'],['wieder','otra vez'],['am Montag','el lunes'],['seit zwei Jahren','desde hace dos años'],['jeden Tag','todos los días'],['um acht Uhr','a las ocho']]},
 ka:{n:'Causal',pr:'warum? · weshalb? · wozu?',c:'#f0c46a',
     l:[['deshalb','por eso'],['deswegen','por ese motivo'],['darum','por eso'],['trotzdem','a pesar de ello'],['wegen des Wetters','a causa del tiempo'],['aus Angst','por miedo'],['aus diesem Grund','por esta razón'],['dank deiner Hilfe','gracias a tu ayuda']]},
 mo:{n:'Modal',pr:'wie? · womit? · mit wem?',c:'#8fb4ff',
     l:[['gern','con gusto'],['schnell','rápido'],['langsam','despacio'],['gut','bien'],['schlecht','mal'],['laut','en voz alta'],['leise','en voz baja'],['allein','solo'],['zusammen','juntos'],['sehr','muy'],['ziemlich','bastante'],['mit dem Bus','en autobús'],['zu Fuß','a pie'],['mit meiner Schwester','con mi hermana'],['ohne Probleme','sin problemas']]},
 lo:{n:'Local',pr:'wo? · wohin? · woher?',c:'#c3a3f7',
     l:[['hier','aquí'],['dort','allí'],['da','ahí'],['oben','arriba'],['unten','abajo'],['links','a la izquierda'],['rechts','a la derecha'],['geradeaus','todo recto'],['draußen','fuera'],['drinnen','dentro'],['überall','en todas partes'],['nach Hause','a casa (dirección)'],['zu Hause','en casa (posición)'],['im Büro','en la oficina'],['nach Berlin','a Berlín'],['aus Kolumbien','de Colombia']]}
};

/* ============ ROMPECABEZAS DE ORACIONES ============ */
/* f: nom · v · akk · dat · gen · tk (con sub TE/KA/MO/LO) · pp · v2 */
/* Rompecabezas · bloque 2 */
/* f: nom · v · akk · dat · gen · tk (con sub TE/KA/MO/LO) · pp · v2 */
const PUZ=[].concat(PUZ2,[
 {n:1,tr:'La niña compra fruta.',p:[['Das Mädchen','nom'],['kauft','v'],['Obst','akk']]},
 {n:1,tr:'El hombre lee el periódico.',p:[['Der Mann','nom'],['liest','v'],['die Zeitung','akk']]},
 {n:1,tr:'Los niños juegan en el jardín.',p:[['Die Kinder','nom'],['spielen','v'],['im Garten','tk','LO']]},
 {n:2,tr:'Yo le doy una manzana al niño.',p:[['Ich','nom'],['gebe','v'],['dem Kind','dat'],['einen Apfel','akk']]},
 {n:2,tr:'Mi hermana me regala un libro.',p:[['Meine Schwester','nom'],['schenkt','v'],['mir','dat'],['ein Buch','akk']]},
 {n:2,tr:'El profesor explica la regla a los alumnos.',p:[['Der Lehrer','nom'],['erklärt','v'],['den Schülern','dat'],['die Regel','akk']]},
 {n:2,tr:'Bebo un café todas las mañanas.',p:[['Ich','nom'],['trinke','v'],['jeden Morgen','tk','TE'],['einen Kaffee','akk']]},
 {n:2,tr:'El libro pertenece a mi hermano.',p:[['Das Buch','nom'],['gehört','v'],['meinem Bruder','dat']]},
 {n:3,tr:'Mañana voy en tren a Berlín.',p:[['Ich','nom'],['fahre','v'],['morgen','tk','TE'],['mit dem Zug','tk','MO'],['nach Berlin','tk','LO']]},
 {n:3,tr:'Voy a Hamburgo por el trabajo.',p:[['Ich','nom'],['fahre','v'],['wegen der Arbeit','tk','KA'],['nach Hamburg','tk','LO']]},
 {n:3,tr:'Ella vive en Colonia desde hace dos años.',p:[['Sie','nom'],['wohnt','v'],['seit zwei Jahren','tk','TE'],['in Köln','tk','LO']]},
 {n:3,tr:'Él espera el autobús.',p:[['Er','nom'],['wartet','v'],['auf den Bus','pp']]},
 {n:3,tr:'Nos alegramos de las vacaciones.',p:[['Wir','nom'],['freuen uns','v'],['auf die Ferien','pp']]},
 {n:4,tr:'El coche de mi padre está delante de la casa.',p:[['Das Auto meines Vaters','gen'],['steht','v'],['vor dem Haus','tk','LO']],nota:'El grupo con genitivo funciona aquí como sujeto: se pregunta wessen Auto? El genitivo complementa al sustantivo, no al verbo.'},
 {n:4,tr:'El perro del vecino ladra fuerte.',p:[['Der Hund des Nachbarn','gen'],['bellt','v'],['laut','tk','MO']]},
 {n:5,tr:'Ayer vi una película.',p:[['Ich','nom'],['habe','v'],['gestern','tk','TE'],['einen Film','akk'],['gesehen','v2']]},
 {n:5,tr:'Ayer trabajamos hasta tarde.',p:[['Wir','nom'],['haben','v'],['gestern','tk','TE'],['lange','tk','MO'],['gearbeitet','v2']]},
 {n:5,tr:'Tengo que levantarme a las seis.',p:[['Ich','nom'],['muss','v'],['um sechs Uhr','tk','TE'],['aufstehen','v2']]},
 {n:5,tr:'Querría beber un café.',p:[['Ich','nom'],['möchte','v'],['einen Kaffee','akk'],['trinken','v2']]},
 {n:5,tr:'Te ayudaré mañana.',p:[['Ich','nom'],['werde','v'],['dir','dat'],['morgen','tk','TE'],['helfen','v2']]},
 {n:6,tr:'El lunes ella va al cine.',p:[['Am Montag','tk','TE'],['geht','v'],['sie','nom'],['ins Kino','tk','LO']],nota:'El complemento temporal ocupa la posición 1, así que el sujeto pasa detrás del verbo.'},
 {n:6,tr:'Después del trabajo voy al gimnasio.',p:[['Nach der Arbeit','tk','TE'],['gehe','v'],['ich','nom'],['ins Fitnessstudio','tk','LO']],nota:'Inversión: verbo en segunda posición, sujeto inmediatamente después.'},
 {n:6,tr:'Hoy no puedo ir con vosotros.',p:[['Heute','tk','TE'],['kann','v'],['ich','nom'],['nicht','tk','MO'],['mitkommen','v2']]},
 {n:6,tr:'Por la noche mi padre cocina para nosotros.',p:[['Am Abend','tk','TE'],['kocht','v'],['mein Vater','nom'],['für uns','pp']]}
]);
const PFUN={
 nom:{n:'Nominativo',ab:'NOM',c:'#2f6fd0',bg:'#dceafb',q:'wer? / was?'},
 v:{n:'Verbo conjugado',ab:'V',c:'#d33b3b',bg:'#fce3e3',q:'posición 2'},
 akk:{n:'Acusativo',ab:'AKK',c:'#e8883a',bg:'#fdeddc',q:'wen? / was?'},
 dat:{n:'Dativo',ab:'DAT',c:'#c25a12',bg:'#fbe3d0',q:'wem?'},
 gen:{n:'Genitivo',ab:'GEN',c:'#b8a02a',bg:'#f8f3d5',q:'wessen?'},
 tk:{n:'Circunstancial (TEKAMOLO)',ab:'TEKAMOLO',c:'#2f9e6a',bg:'#dcf3e8',q:'wann? warum? wie? wo?'},
 pp:{n:'Complemento preposicional',ab:'PREP',c:'#12a0a8',bg:'#d8f2f4',q:'ligado al verbo'},
 v2:{n:'Verbo 2 (final)',ab:'V2',c:'#8b4fd6',bg:'#eee3fb',q:'infinitivo o participio'}
};


/* ===================== APLICACIÓN · NAVEGACIÓN Y MÓDULOS ===================== */
/* TEORÍA + QUIZ · bloque 0
   q: "enunciado|op0|op1|op2|op3|índice correcto|explicación"                       */
const GORDEN=[
 ['aussprache','A1'],['rechtschreibung','A1'],['satzbau0','A1'],['praesens','A1'],['artikel','A1'],['plural','A1'],
 ['nominativ','A1'],['akkusativ','A1'],['pronomen','A1'],['wortstellung','A1'],['negation','A1'],['modalverben','A1'],
 ['trennbar','A1'],['imperativ','A1'],['perfekt','A1'],['dativ','A2'],['dativverben','A2'],['praepakkdat','A2'],
 ['praeptemp','A2'],['praeteritum','A2'],['wechsel','A2'],['praeplokal','A2'],['positionsverben','A2'],['adverbien','A2'],
 ['adjektive','A2'],['welcher','A2'],['futur','A2'],['genitiv','B1'],['ndekl','B1'],['nebensatz','B1'],
 ['konnektoren','B1'],['doppelkonn','B1'],['temporal','B1'],['plusquam','B1'],['relativ','B1'],['praepverb','B1'],
 ['reflexiv','B1'],['infinitivzu','B1'],['lassen','B1'],['passiv1','B1'],['konjunktiv2a','B1'],['passiv2','B2'],
 ['konjunktiv2b','B2'],['subjektiv','B2'],['relativ2','B2'],['konnektoren2','B2'],['partizip','B2'],['nomstil','B2'],
 ['genitivpraep','B2'],['modalpartikel','B2'],['konjunktiv1','C1'],['funktionsverb','C1'],['valenz','C1'],['konzessiv','C1'],
 ['wortbildung','C1'],['textkohaesion','C1'],['syntaxkomplex','C2'],['stil','C2'],['phraseologie','C2']];
const GRAM=(function(){
  const bruto=[].concat(GRAM0,GRAM1,GRAM2,GRAM3,GRAM4,GRAM5,GRAM6,GRAM7);
  const idx={}; bruto.forEach(t=>idx[t.id]=t);
  const out=[];
  GORDEN.forEach(([id,lv])=>{ const t=idx[id]; if(t){ t.lvl=lv; t.n=out.length+1; out.push(t); delete idx[id]; } });
  Object.values(idx).forEach(t=>{ t.n=out.length+1; out.push(t); });
  return out;
})();
const PAGES={
 home:['Inicio','home','home'],
 nivel:['Itinerario','niveles','nivel'], immers:['Inmersión','niveles','immers'], examen:['Prueba de nivel','niveles','examen'],
 palabras:['Palabras','lexico','vocab','explorar'], verbos:['Verbos','lexico','lista'], buscar:['Buscar','lexico','dic'],
 temas:['Temas','gramatica','gram'], refer:['Referencia','gramatica','refer'],
 lectura:['Geschichten','lectura','stories'],
 hub:['Todos los modos','practica','hub'], wortschatz:['Wortschatz','allgemein','wort'],
 satzbau:['Satzbau','allgemein','satz'], kern:['Vocabulario interno','allgemein','kern'], conjugar:['Conjugar','practica','practica'], escribir:['Escribir','practica','vocab','escribir'],
 tarjetas:['Tarjetas','practica','vocab','tarjetas'], genero:['Género','practica','vocab','genero'],
 puzzle:['Rompecabezas','practica','puzzle']};
const SUB={
 home:[], lectura:[],
 niveles:[['nivel','Itinerario'],['immers','Inmersión'],['examen','Prueba de nivel']],
 lexico:[['palabras','Palabras'],['verbos','Verbos'],['buscar','Buscar']],
 gramatica:[['temas','Temas'],['refer','Referencia']],
 allgemein:[['wortschatz','Wortschatz'],['refer','Theorie'],['satzbau','Satzbau'],['kern','Vocabulario interno']],
  practica:[['hub','Todos los modos'],['conjugar','Conjugar'],['escribir','Escribir'],['tarjetas','Tarjetas'],['genero','Género'],['puzzle','Rompecabezas']]};
const SECS=['home','nivel','immers','examen','vocab','lista','dic','gram','refer','stories','hub','practica','puzzle','wort','satz','kern'];
/* Árbol de la barra lateral: grupo → destinos. Un grupo con un solo destino
   se dibuja como una fila única, sin rótulo redundante.                     */
const NAVTREE=[
 [null,[['home','Inicio']]],
 ['Niveles',[['nivel','Itinerario'],['immers','Inmersión'],['examen','Prueba de nivel']]],
 ['Léxico',[['palabras','Palabras'],['verbos','Verbos'],['buscar','Buscar']]],
 ['Gramática',[['temas','Temas'],['refer','Referencia']]],
 [null,[['lectura','Lectura']]],
 ['Práctica',[['hub','Todos los modos'],['conjugar','Conjugación'],['escribir','Vocabulario activo'],
   ['tarjetas','Tarjetas'],['genero','Género'],['puzzle','Rompecabezas']]]
];
const NAVDEST=[['nivel','Recorrido'],['palabras','Léxico'],['temas','Gramática'],
 ['lectura','Lectura'],['hub','Práctica'],['immers','Inmersión'],['examen','Prueba de nivel']];
const NAV=[
 {t:'Inicio', go:'home', ic:'home'},
 {t:'Itinerario', ic:'steps', hijos: [{t:'Todos los cursos', go:'cursos'}].concat(NIV.map(n=>({t:n.k+' · '+n.n, go:'curso', sub:'c:'+n.k})))},
 {t:'Grundlagen', ic:'layers', hijos:[
   {t:'Wortschatz', go:'wortschatz'}, {t:'Theorie', go:'refer'},
   {t:'Satzbau', go:'satzbau'}, {t:'Vocabulario interno', go:'kern'}]},
 {t:'Werkzeuge', ic:'tool', hijos:[
   {t:'Buscar', go:'buscar'}, {t:'Repertorio verbal', go:'verbos'},
   {t:'Todo el léxico', go:'palabras'}, {t:'Todos los temas', go:'temas'},
   {t:'Geschichten', go:'lectura'}, {t:'Modos de práctica', go:'hub'}]}
];
const NAVOPEN={'1':true};
let navSel='home';
const CHEV='<svg class="chv" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>';
function sideNav(){
  let h='';
  NAV.forEach((n,i)=>{
    if(n.go){ h+='<button class="solo'+(navSel===n.go?' on':'')+'" data-sel="'+n.go+'" data-go="'+n.go+'">'+nvi(n.go,n.ic)+n.t+'</button>'; return; }
    const p=''+i, ab=!!NAVOPEN[p];
    h+='<div class="navsec'+(ab?' open':'')+'">'
      +'<button class="navgrp" data-op="'+p+'"><svg class="gi" viewBox="0 0 24 24">'+(IC[n.ic]||IC.grid)+'</svg>'+n.t+'<span class="cnt2">'+n.hijos.length+'</span>'+CHEV+'</button>'
      +'<div class="navsub">';
    n.hijos.forEach((x,j)=>{
      if(x.go&&!x.hijos){
        const id=x.nivel?x.nivel+':'+x.go:(x.sub?x.go+':'+x.sub:x.go);
        h+='<button'+(navSel===id?' class="on"':'')+' data-sel="'+id+'" data-go="'+x.go+'"'+(x.nivel?' data-niv="'+x.nivel+'"':'')+(x.sub?' data-sub="'+x.sub+'"':'')+'>'+nvi(x.go,x.ic)+x.t+'</button>';
        return;
      }
      const p2=i+'.'+j, ab2=!!NAVOPEN[p2], col=x.nivel?NIV[NIVI[x.nivel]].c:'var(--brand)';
      h+='<div class="navsec lv'+(ab2?' open':'')+'" style="--sc:'+col+'">'
        +'<button class="navlv" data-op="'+p2+'"><svg class="lvi" viewBox="0 0 24 24">'+IC.steps+'</svg><b>'+x.t+'</b><em>'+(x.sub||'')+'</em>'+CHEV+'</button>'
        +'<div class="navsub">'
        + x.hijos.map(y=>{const id=y.nivel+':'+y.go;
            return '<button'+(navSel===id?' class="on"':'')+' data-sel="'+id+'" data-go="'+y.go+'" data-niv="'+y.nivel+'">'+nvi(y.go)+y.t+'</button>';}).join('')
        +'</div></div>';
    });
    h+='</div></div>';
  });
  $('#snav').innerHTML=h;
  $$('#snav [data-op]').forEach(b=>b.onclick=()=>{
    const p=b.dataset.op, abierto=!!NAVOPEN[p];
    /* los nodos de nivel son excluyentes: solo uno abierto a la vez */
    if(p.indexOf('.')>0){ const pad=p.split('.')[0];
      Object.keys(NAVOPEN).forEach(k=>{ if(k.indexOf(pad+'.')===0) NAVOPEN[k]=false; }); }
    NAVOPEN[p]=!abierto; sfx.tap(); sideNav();
  });
  $$('#snav [data-go]').forEach(b=>b.onclick=()=>{
    navSel=b.dataset.sel;
    document.querySelector('.app').classList.remove('sideopen');
    if(b.dataset.niv) goNivel(b.dataset.niv,b.dataset.go); else goDestino(b.dataset.go);
    sideNav();
  });
}
function goDestino(g){
  sfx.nav(); histPush({go:g,niv:''});
  if(g==='lectura'){stStop();stNiv='';stList();}
  if(g==='nivel'){stStop();nvList();}
  if(g==='temas'){gFiltroNiv='';}
  if(g==='palabras'){AMB.cls='';AMB.niv='';vNiv='';const sv=$('#vniv');if(sv)sv.value='';vCat=null;vSub=null;}
  if(g==='hub'){AMB.cls='';AMB.niv='';}
  goMode(g);
  if(g==='home') homeRender();
  if(g==='palabras') vRender();
  if(g==='temas') gramList();
  if(g==='hub') hubRender();
}
/* Un destino con nivel: fija el ámbito y abre la sección ya filtrada. */
function goNivel(k,destino){
  sfx.nav(); nvCur=k; histPush({go:destino,niv:k});
  const idx=NIV.findIndex(n=>n.k===k);
  if(idx>=0){ Object.keys(NAVOPEN).forEach(x=>{ if(x.indexOf('1.')===0) NAVOPEN[x]=false; });
    NAVOPEN['1']=true; NAVOPEN['1.'+idx]=true; }
  if(destino==='curso'){ if(window.xGo) xGo('curso','c:'+k); return; }
  if(destino==='nivel'){ stStop(); goMode('nivel'); nvOpen(k); return; }
  if(destino==='palabras'){ AMB.cls=''; AMB.niv=k; vNiv=k; vCat=null; vSub=null;
    goMode('palabras'); const sv=$('#vniv'); if(sv) sv.value=k; vRender(); return; }
  if(destino==='temas'){ gFiltroNiv=k; gVista='nivel'; goMode('temas'); gramList(); return; }
  if(destino==='lectura'){ stStop(); stNiv=k; goMode('lectura'); stList(); return; }
  if(destino==='hub'){ AMB.cls=''; AMB.niv=k; goMode('hub'); hubRender(); return; }
  if(destino==='immers'){ immNiv=k; goMode('immers'); immRender(); return; }
  if(destino==='examen'){ goMode('examen'); exOpen(k); return; }
}
let page='home';

function goMode(p){
  if(!PAGES[p]) p='home';
  if(!HIST.bloq){ const a=HIST.pila[HIST.i]; if(!a||a.go!==p||a.lang!==LANGAPI.get()) histPush({go:p}); }
  const [ttl,grp,sec,sub]=PAGES[p];
  if(sec!=='stories') stStop();
  page=p;
  if(sec==='lista'&&!listaHecha){ listaHecha=true; render(); }
  SECS.forEach(x=>{const el=$('#m-'+x); if(el) el.classList.toggle('hide',x!==sec);});
  $('#pageTitle').textContent=ttl;
  const tt=$('#topTitle');
  if(tt){ const g=(SUB[grp]||[]).length?grp.charAt(0).toUpperCase()+grp.slice(1):'';
    tt.innerHTML=(g&&g!==ttl?'<span>'+g+'</span>':'')+ttl; }
  const menu=SUB[grp]||[];
  $('#subnav').innerHTML=menu.map(([k,l])=>'<button data-go="'+k+'"'+(k===p?' class="on"':'')+'>'+l+'</button>').join('');
  document.querySelector('.app').classList.remove('sideopen');
  if(sub) vGo(sub);
  if(sec==='hub'&&!$('#hubOut').innerHTML) hubRender();
  if(sec==='wort') wsRender();
  if(sec==='satz') sbRender();
  if(sec==='kern') knRender();
  if(sec==='practica'&&!cur) nextQ();
  if(sec==='gram'&&!$('#gramOut').innerHTML) gramList();
  if(sec==='refer'&&!refIni) refGo(refView);
  if(sec==='puzzle'&&!pz) pzLoad(0);
  if(sec==='stories'&&!$('#stOut').innerHTML) stList();
  if(sec==='nivel'&&!$('#nvOut').innerHTML) nvList();
  if(sec==='immers'&&!$('#immOut').innerHTML) immRender();
  if(sec==='examen'&&!$('#exOut').innerHTML) exOpen(nvCur||'A1');
  if(sec==='dic'){ if(!dicInit){dicInit=true;dicRender();} setTimeout(()=>$('#dicQ').focus(),80); }
  if(!HIST.bloq) window.scrollTo({top:0,behavior:'smooth'});
}
/* ---------- referencia unificada ---------- */
let refView='sust', refIni=false;
function refGo(r){
  refView=r; refIni=true;
  $$('#refTabs button').forEach(b=>b.classList.toggle('on',b.dataset.r===r));
  ['sust','verbo','pref','teka'].forEach(x=>$('#r-'+x).classList.toggle('hide',x!==r));
  if(r==='sust'&&!$('#guiaOut').innerHTML) $('#guiaOut').innerHTML=guia();
  if(r==='pref'){ if(!$('#prefOut').innerHTML) prefRender(); thRender(); }
  if(r==='teka'&&!$('#tekaOut').innerHTML) tekaRender();
  window.scrollTo({top:0,behavior:'smooth'});
}
$('#refTabs').onclick=e=>{const b=e.target.closest('button');if(b){sfx.nav();refGo(b.dataset.r);}};

$('#brandBtn').onclick=()=>{navSel='home';goDestino('home');sideNav();};
/* Repliegue y despliegue de la barra lateral.
   El galón acompaña el gesto antes de que el panel se vaya; al volver, las
   secciones entran escalonadas y la clase auxiliar se retira para que la
   animación no se repita en cada repintado del árbol de navegación.         */
let SIDET=null;
function sideRepliega(ocultar){
  const app=document.querySelector('.app');
  const quieto=matchMedia('(prefers-reduced-motion: reduce)').matches;
  clearTimeout(SIDET);
  if(ocultar){
    sfx.nav();
    const c=$('#sideCollapse');
    if(c&&!quieto){ c.classList.remove('go'); void c.offsetWidth; c.classList.add('go');
      setTimeout(()=>c.classList.remove('go'),420); }
    app.classList.remove('sideback');
    app.classList.add('sidehide');
  }else{
    sfx.nav();
    app.classList.remove('sidehide');
    if(!quieto){ app.classList.add('sideback');
      SIDET=setTimeout(()=>app.classList.remove('sideback'),700); }
  }
}
/* Pantalla estrecha (móvil o Moodle/SCORM en un marco angosto): la barra es un cajón.
   Al abrirlo se anula el estado «contraída» heredado del escritorio, que la dejaba
   invisible bajo el velo; al cerrarlo, con el velo, Escape o el botón ‹. */
const MOVIL=matchMedia('(max-width:1000px)');
function cajon(abrir){
  const app=document.querySelector('.app');
  if(abrir){ app.classList.remove('sidehide','sideback'); }
  app.classList.toggle('sideopen',abrir);
}
$('#sideToggle').onclick=()=>{
  const app=document.querySelector('.app');
  if(MOVIL.matches){ sfx.tap(); cajon(!app.classList.contains('sideopen')); return; }
  sideRepliega(!app.classList.contains('sidehide'));
};
$('#scrim').onclick=()=>cajon(false);
document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&document.querySelector('.app.sideopen')) cajon(false); });
/* al pasar de estrecho a ancho (girar el móvil, ampliar el marco) no queda el cajón abierto */
(MOVIL.addEventListener?MOVIL.addEventListener('change',()=>cajon(false)):MOVIL.addListener(()=>cajon(false)));
$('#subnav').onclick=e=>{const b=e.target.closest('button[data-go]');if(b)goMode(b.dataset.go);};

/* ---------- INICIO ---------- */
const IC={
 book:'<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
 bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
 play:'<circle cx="12" cy="12" r="9.5"/><path d="m10 8.5 5.5 3.5-5.5 3.5z"/>',
 chat:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
 puzzle:'<path d="M9 4h6v3a2 2 0 1 0 4 0h1v6h-3a2 2 0 1 0 0 4h3v3H9v-3a2 2 0 1 1-4 0H4V8h1a2 2 0 1 0 4 0z"/>',
 cards:'<rect x="3" y="7" width="13" height="14" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0 1 21 5.5V16"/>',
 pen:'<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z"/>',
 target:'<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 arrows:'<path d="M7 7h10v10M17 7 7 17"/>',
 home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
 steps:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16"/>',
 layers:'<path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
 tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
 head:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4-4"/>',
 read:'<path d="M12 6c-2-1.5-4.4-2.1-7-1.9v13c2.6-.2 5 .4 7 1.9 2-1.5 4.4-2.1 7-1.9v-13c-2.6-.2-5 .4-7 1.9z"/><path d="M12 6v13"/>',
 sigma:'<path d="M18 5H6l6 7-6 7h12"/>',
 flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/>',
 quill:'<path d="M12.7 19a2 2 0 0 0 1.4-.6l6.2-6.2a6 6 0 0 0-8.5-8.5L5.6 9.9A2 2 0 0 0 5 11.3V18a1 1 0 0 0 1 1z"/><path d="M16 8 2 22M17.5 15H9"/>'
};
const svg=k=>'<svg viewBox="0 0 24 24">'+IC[k]+'</svg>';
/* icono de una hoja de la barra lateral: se deduce del destino */
const nvi=(go,ic)=>'<svg class="li" viewBox="0 0 24 24">'+(IC[MINI[go]||ic||'grid']||IC.grid)+'</svg>';
function saludo(){ return ['Willkommen','Bienvenido']; }
const SECIDX=[
 ['Niveles',[['nivel','Itinerario','Secuencia lineal de A1 a C2'],['immers','Inmersión','Nicos Weg, DW y Nachrichtenleicht'],['examen','Prueba de nivel','Simulacro Goethe y TestDaF']]],
 ['Léxico',[['palabras','Palabras',W.length+' entradas por campo y nivel'],['verbos','Verbos','184 verbos con morfología segmentada'],['buscar','Buscar','Búsqueda interna y salida a DWDS']]],
 ['Gramática',[['temas','Temas','59 unidades con teoría y cuestionario'],['refer','Referencia','Sustantivo, verbo, prefijos y TEKAMOLO']]],
 ['Lectura',[['lectura','Geschichten','14 relatos con audio y ejercicios']]],
 ['Práctica',[['hub','Todos los modos','Índice de los seis entrenamientos'],['conjugar','Conjugación','Siete tiempos y modos'],['escribir','Vocabulario activo','Escritura letra a letra'],['tarjetas','Tarjetas','Repetición espaciada'],['genero','Género','der, die, das con la regla'],['puzzle','Rompecabezas','Orden y función sintáctica']]]
];
function homeNiv(){
  const bt=k=>{const n=NIV[NIVI[k]], p=nvProgreso(k);
    return '<button class="hnv" data-hn="'+k+'" style="--sc:'+n.c+'">'
     +'<b>'+k+'</b><span>'+n.n+'</span>'
     +(FASES[k]?'<em>'+FASES[k].map(f=>f[0]).join(' · ')+'</em>':'')
     +'<div class="nvbar"><i style="width:'+p.pct+'%"></i></div></button>';};
  $('#homeNiv').innerHTML='<div class="hnvrow">'+NIVBASE.map(bt).join('')
   +'<button class="hnv plus'+(plusOpen?' on':'')+'" id="hnPlus" style="--sc:'+NIV[NIVI['B2']].c+'">'
     +'<b>'+(plusOpen?'−':'+')+'</b><span>Avanzado</span><em>B2.1 · B2.2 · C1 · C2</em></button>'
   +'</div>'+(plusOpen?'<div class="hnvrow av">'+NIVPLUS.map(bt).join('')+'</div>':'');
  $('#hnPlus').onclick=()=>{sfx.tap();plusOpen=!plusOpen;homeNiv();};
  $$('#homeNiv [data-hn]').forEach(b=>b.onclick=()=>{sfx.nav();goMode('nivel');nvOpen(b.dataset.hn);});
}
function homeRender(){
  const [de,es]=saludo();
  $('#greetDe').textContent=de; $('#greetEs').textContent=es;
  $('#footStats').textContent=V.length+' verbos · '+W.length+' palabras · '+Object.keys(VOCAB).length+' campos semánticos · '
    +GRAM.length+' unidades de gramática · '+ST.length+' relatos · 6 niveles. Formas conforme a la norma del alemán estándar y la ortografía vigente.';
  const k=nvCur||'A1', n=NIV[NIVI[k]], p=nvProgreso(k);
  const sig=(CURR[k].gram.find(id=>!nvHecho('gram',id))||'');
  const sigT=sig?(GRAM.find(t=>t.id===sig)||{}).t:'';
  $('#cont').innerHTML='<button class="contcard" id="contBtn" style="--sc:'+n.c+'">'
   +'<div><span class="cl">Continuar</span><b>Itinerario '+k+' · '+n.n+'</b>'
   +'<div class="nvbar"><i style="width:'+p.pct+'%"></i></div>'
   +'<em>'+p.hechos+' de '+p.total+' unidades'+(sigT?' · siguiente: '+sigT:'')+'</em></div>'
   +'<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></button>';
  $('#contBtn').onclick=()=>{sfx.nav();goMode('nivel');nvOpen(k);};
  $('#homeRows').innerHTML=homeFilas();
  $$('#homeRows [data-hgo]').forEach(b=>b.onclick=()=>{
    const g=b.dataset.hgo, nv=b.dataset.hniv;
    navSel=nv?nv+':'+g:g;
    if(nv) goNivel(nv,g); else goDestino(g);
    sideNav();
  });
  const mas=$('#homeMas'); if(mas) mas.onclick=()=>{sfx.tap();plusOpen=!plusOpen;homeRender();};
  $('#nums').innerHTML=[[V.length,'verbos'],[W.length,'palabras'],[GRAM.length,'unidades'],[ST.length,'relatos'],[6,'niveles'],[PRUEF.length,'simulacros']]
    .map(([x,l])=>'<div class="num"><b>'+x+'</b><span>'+l+'</span></div>').join('');
}
$('#m-home').addEventListener('click',e=>{const c=e.target.closest('[data-go]');if(c)goMode(c.dataset.go);});

/* ---------- TODOS LOS MODOS DE PRÁCTICA ---------- */
const MODOS=[
 ['conjugar','chat','#ff9fb0','Conjugación','Escriba la forma pedida de cualquiera de los '+'184'+' verbos en siete tiempos y modos: Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I, Konjunktiv II e Imperativo.'],
 ['escribir','pen','#8fc4ff','Vocabulario activo','Traduzca al alemán letra a letra, con artículo obligatorio en los sustantivos y teclado de Umlaut.'],
 ['tarjetas','cards','#ffa3c8','Tarjetas','Repaso con volteo y cola de repetición espaciada, en ambas direcciones.'],
 ['genero','target','#84dcc0','Género','Entrenador de der, die, das con la regla aplicable y la clase de plural en cada respuesta.'],
 ['puzzle','puzzle','#7fd8c6','Rompecabezas de oraciones','Ordene las piezas y ancle después cada una a su función sintáctica, con código de color por caso.'],
 ['temas','bulb','#f2c777','Cuestionarios de gramática','Diez preguntas por tema en las 59 unidades, con puntuación por rapidez, racha y revisión de errores.']
];
function hubRender(){
  $('#hubOut').innerHTML='<p class="dicintro">Seis modos de entrenamiento independientes. Ninguno depende de otro: puede entrar por donde le convenga y todos registran su propio progreso.</p>'
   +'<div class="pickgrid">'+MODOS.map(([go,ic,c,t,d])=>
     '<div class="pick" data-go="'+go+'" style="--pc:'+c+'"><div class="pico">'+svg(ic)+'</div><h3>'+t+'</h3><p>'+d+'</p></div>').join('')+'</div>';
  $('#hubOut').onclick=e=>{const c=e.target.closest('[data-go]');if(c){sfx.nav();goMode(c.dataset.go);}};
}

/* ---------- GRAMÁTICA: TEMAS, TEORÍA Y QUIZ ---------- */
const GSTAT={};
let gVista='nivel', gAmb='', gFiltroNiv='';
function gramList(){
  histPush({go:'temas',niv:gFiltroNiv});
  const ambitos=[...new Set(GRAM.map(t=>t.sub))];
  const cab='<p style="color:var(--ink2);max-width:78ch;margin:0 0 16px">La secuencia es <b>lineal y acumulativa</b>: abre por la fonética y la ortografía, sigue por la morfología y cierra por la sintaxis compleja. Ningún tema introduce una forma que no se haya preparado antes. Al final de cada explicación hay un cuestionario de diez preguntas.</p>'
   +'<div class="gtabs" style="justify-content:flex-start;margin-bottom:14px">'
   +'<button class="chip'+(gVista==='nivel'?' on':'')+'" data-vis="nivel">Por nivel</button>'
   +'<button class="chip'+(gVista==='ambito'?' on':'')+'" data-vis="ambito">Por ámbito gramatical</button>'
   +(gFiltroNiv?'<button class="chip on" data-vis="todo">Solo '+gFiltroNiv+' ✕</button>':'')
   +'</div>';
  const tarjeta=t=>{
    const st=GSTAT[t.id], i=GRAM.indexOf(t);
    return '<div class="topic" data-t="'+i+'"><span class="lv">'+t.lvl+'</span><div class="sb2">'+t.n+' · '+t.sub+'</div><h4>'+t.t+'</h4>'
     +'<div class="bar2"><i style="width:'+(st?st.best:0)+'%"></i></div>'
     +'<div class="st2">'+(st?st.best+' % · mejor resultado':'10 preguntas · sin empezar')+'</div></div>';
  };
  let cuerpo='';
  if(gVista==='nivel'){
    cuerpo=NIV.filter(n=>!gFiltroNiv||n.k===gFiltroNiv).map(n=>{
      const l=GRAM.filter(t=>t.lvl===n.k);
      if(!l.length) return '';
      const hechos=l.filter(t=>GSTAT[t.id]&&GSTAT[t.id].best>=60).length;
      return '<div class="gsec" style="--sc:'+n.c+'"><h3>'+n.k+' · '+n.n+'<span>'+hechos+' de '+l.length+' superados</span></h3>'
       +'<div class="topicgrid">'+l.map(tarjeta).join('')+'</div></div>';
    }).join('');
  } else {
    cuerpo=ambitos.map(a=>{
      const l=GRAM.filter(t=>t.sub===a);
      return '<div class="gsec" style="--sc:var(--brand)"><h3>'+a+'<span>'+l.length+' temas</span></h3>'
       +'<div class="topicgrid">'+l.map(tarjeta).join('')+'</div></div>';
    }).join('');
  }
  $('#gramOut').innerHTML=cab+cuerpo;
  $$('[data-vis]').forEach(b=>b.onclick=()=>{sfx.nav();
    if(b.dataset.vis==='todo'){gFiltroNiv='';} else gVista=b.dataset.vis;
    gramList();});
  $('#gramOut').onclick=e=>{const c=e.target.closest('[data-t]');if(c)gramTheory(+c.dataset.t);};
}
/* orden de estudio de los temas: el del currículo (A1 → C2) y después los que no figuran en él */
let ORDEN_G=null;
function ordenG(){ if(ORDEN_G) return ORDEN_G; const seen=new Set(), o=[];
  try{ ['A1','A2','B1','B2','C1','C2'].forEach(k=>(CURR[k]?CURR[k].gram:[]).forEach(id=>{ const i=gramIdx(id); if(i>=0&&!seen.has(i)){ seen.add(i); o.push(i); } })); }catch(e){}
  GRAM.forEach((_,i)=>{ if(!seen.has(i)) o.push(i); }); return ORDEN_G=o; }
function vecinosG(i){ const o=ordenG(), p=o.indexOf(i); return [p>0?o[p-1]:null, p>=0&&p<o.length-1?o[p+1]:null]; }
function navTemas(i,id){ const [a,s]=vecinosG(i);
  return '<div class="tnav" id="'+id+'">'+(a!=null?'<button class="tnv prev" data-gi="'+a+'"><span>‹ Tema anterior</span><b>'+GRAM[a].t+'</b><em>'+GRAM[a].lvl+'</em></button>':'<span></span>')
   +(s!=null?'<button class="tnv next" data-gi="'+s+'"><span>Tema siguiente ›</span><b>'+GRAM[s].t+'</b><em>'+GRAM[s].lvl+'</em></button>':'<span></span>')+'</div>'; }
function wireTemas(id){ const el=document.getElementById(id); if(el) el.querySelectorAll('[data-gi]').forEach(b=>b.onclick=()=>{ clearInterval(kInt); try{sfx.nav();}catch(e){} gramTheory(+b.dataset.gi); window.scrollTo({top:0,behavior:'smooth'}); }); }
function gramTheory(i){
  const t=GRAM[i];
  histPush({go:'temas',sub:'g:'+i});
  $('#gramOut').innerHTML='<div class="theory"><div class="sb2" style="font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ink3);font-weight:800">'+t.sub+' · '+t.lvl+'</div>'
   +'<h2 style="font-family:var(--serif);font-size:1.9rem;margin:6px 0 14px;font-weight:600;letter-spacing:-.02em">'+t.t+'</h2>'
   +t.teoria
   +'<div class="startquiz"><div><b>¿Lo ha entendido?</b><p>Diez preguntas sobre este tema. Veinte segundos cada una: cuanto antes responda, más puntos.</p></div>'
   +'<button class="btn pri" id="gStart">Empezar el cuestionario</button></div>'
   +'<div class="stacts" style="margin-top:16px">'
   +(MDB.tema[t.id]?mdbBtn(MDB.base+MDB.tema[t.id],'Repaso del tema'):'')
   +btnPDF('gPdf')+'</div>'+navTemas(i,'gNav')+'</div>';
  $('#gStart').onclick=()=>kStart(i);
  wireTemas('gNav');
  $('#gPdf').onclick=()=>gramPDF(t);
}
function gramPDF(t){
  imprimir(pHead(t.t,t.sub+' · nivel '+t.lvl)
   +'<h2>Explicación</h2>'+t.teoria
   +'<div class="pbreak"></div><h2>Cuestionario</h2><ol>'+t.q.map(q=>{const p=q.split('|');
      return '<li>'+p[0]+'<div class="popts">a) '+p[1]+' &nbsp; b) '+p[2]+' &nbsp; c) '+p[3]+' &nbsp; d) '+p[4]+'</div></li>';}).join('')+'</ol>'
   +'<h2>Soluciones</h2><ol>'+t.q.map(q=>{const p=q.split('|');return '<li><b>'+p[+p[5]+1]+'</b> — '+p[6]+'</li>';}).join('')+'</ol>');
}
/* --- Kahoot --- */
let kT=null,kI=0,kPts=0,kOk=0,kStreak=0,kTime=20,kInt=null,kLock=false,kWrong=[];
/* Las opciones se identifican por letra, no por figura geométrica: la letra es
   inequívoca al dictarla en voz alta y permite remitir a una respuesta concreta
   en la corrección. El orden cromático es azul, rojo, verde y amarillo.       */
const LETRAS=['A','B','C','D','E','F'];
function kStart(i){ histPush({go:'temas',sub:'k:'+i}); kT=i;kI=0;kPts=0;kOk=0;kStreak=0;kWrong=[];kQ(); }
function kQ(){
  clearInterval(kInt); kLock=false; kTime=20;
  const t=GRAM[kT], q=t.q[kI].split('|');
  $('#gramOut').innerHTML='<div class="kw">'
   +'<div class="kbar"><span class="pill2">'+t.t+'</span><span class="pill2">Pregunta '+(kI+1)+' de '+t.q.length+'</span>'
   +'<span class="pill2">'+kPts+' puntos</span><span class="pill2">Racha '+kStreak+'</span>'
   +'<button class="btn" id="kQuit">Salir</button></div>'
   +'<div class="kprog"><i style="width:'+(kI/t.q.length*100)+'%"></i></div>'
   +'<div class="kq"><h3>'+q[0]+'</h3></div>'
   +'<div class="kmid"><div class="ktimer" id="kTimer">20</div><div class="kcount"><b id="kPtsB">'+kPts+'</b><span>puntos</span></div></div>'
   +'<div class="kgrid">'+[1,2,3,4].map((n,j)=>'<button class="kopt k'+(j%4)+'" data-a="'+j+'"><span class="sh">'+LETRAS[j%6]+'</span>'+q[n]+'</button>').join('')+'</div>'
   +'<div class="kfb" id="kFb"></div></div>';
  $('#kQuit').onclick=()=>{clearInterval(kInt);gramList();};
  $('.kgrid').onclick=e=>{const b=e.target.closest('[data-a]');if(b)kAnswer(+b.dataset.a);};
  kInt=setInterval(()=>{
    kTime--; const el=$('#kTimer'); if(!el){clearInterval(kInt);return;}
    el.textContent=kTime; el.classList.toggle('warn',kTime<=5);
    if(kTime<=0) kAnswer(-1);
  },1000);
}
function kAnswer(a){
  if(kLock) return; kLock=true; clearInterval(kInt);
  const t=GRAM[kT], q=t.q[kI], p=q.split('|'), ok=+p[5];
  const good=a===ok; (good?sfx.ok:sfx.no)();
  if(good){ kOk++; kStreak++; kPts+=Math.round(600+400*(kTime/20))+kStreak*20; }
  else { kStreak=0; kWrong.push({q:p[0],c:p[ok+1],e:p[6],mine:a>=0?p[a+1]:'sin responder'}); }
  $$('.kopt').forEach(b=>{const j=+b.dataset.a;
    if(j===ok) b.classList.add('win'); else b.classList.add('dim');});
  const fb=$('#kFb');
  fb.className='kfb '+(good?'ok':'no')+' on';
  fb.innerHTML=(good?'<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:none;stroke:var(--ok);stroke-width:2.4;stroke-linecap:round"><path d="m4 12 5.5 5.5L20 7"/></svg>'
                    :'<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:none;stroke:var(--no);stroke-width:2.4;stroke-linecap:round"><path d="M18 6 6 18M6 6l12 12"/></svg>')
   +'<div><b>'+(good?'Correcto · +'+(Math.round(600+400*(kTime/20))+kStreak*20)+' puntos':(a<0?'Se acabó el tiempo':'Incorrecto')+' · la respuesta es '+p[ok+1])+'</b>'+p[6]
   +'<div style="margin-top:12px"><button class="btn pri" id="kNext">'+(kI+1<t.q.length?'Siguiente pregunta':'Ver resultados')+'</button></div></div>';
  $('#kNext').onclick=()=>{kI++; if(kI<t.q.length) kQ(); else kEnd();};
}
function kEnd(){
  const t=GRAM[kT], pct=Math.round(kOk/t.q.length*100);
  const col=pct>=80?'var(--ok)':pct>=50?'var(--c-mix)':'var(--no)';
  if(!GSTAT[t.id]||GSTAT[t.id].best<pct) GSTAT[t.id]={best:pct};
  const msg=pct===100?'Impecable. Este tema está dominado.':pct>=80?'Muy buen resultado: solo quedan detalles.':pct>=50?'Va por buen camino, pero conviene releer la teoría.':'Vuelva a la explicación y repita el cuestionario.';
  $('#gramOut').innerHTML='<div class="kw"><div class="kres">'
   +'<div class="ring" style="background:conic-gradient('+col+' '+pct*3.6+'deg, var(--line) 0)"><div style="width:120px;height:120px;border-radius:50%;background:var(--card);display:grid;place-items:center"><b>'+pct+'%</b></div></div>'
   +'<h3>'+kOk+' de '+t.q.length+' correctas</h3><p>'+msg+' Puntuación final: <b>'+kPts+'</b> puntos.</p>'
   +'<div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap"><button class="btn pri" id="kAgain">Repetir</button>'
   +'<button class="btn" id="kTheory">Volver a la teoría</button><button class="btn" id="kList">Otros temas</button>'
   +btnPDF('kPdf')+(MDB.tema[t.id]?mdbBtn(MDB.base+MDB.tema[t.id],'Repaso del tema'):'')+'</div>'
   +(kWrong.length?'<div class="krev"><h4>Repaso de los fallos</h4>'+kWrong.map(w=>
      '<div class="it"><b>'+w.q+'</b><span>Su respuesta: '+w.mine+' · Correcta: <code>'+w.c+'</code></span><div style="margin-top:5px;color:var(--ink2)">'+w.e+'</div></div>').join('')+'</div>':'')
   +navTemas(kT,'kNav')+'</div></div>';
  wireTemas('kNav');
  if(pct>=80) sfx.win();
  $('#kPdf').onclick=()=>imprimir(pHead('Cuestionario · '+t.t,'Nivel '+t.lvl+' · resultado: '+kOk+' de '+t.q.length+' ('+pct+' %) · '+kPts+' puntos')
   +'<h2>Preguntas falladas</h2>'+(kWrong.length?'<ol>'+kWrong.map(w=>'<li><b>'+w.q+'</b><br>Respuesta dada: '+w.mine+' · Correcta: '+w.c+'<br><i>'+w.e+'</i></li>').join('')+'</ol>':'<p>Ninguna: el cuestionario se ha resuelto sin errores.</p>')
   +'<div class="pbreak"></div><h2>Cuestionario completo</h2><ol>'+t.q.map(q=>{const p=q.split('|');
      return '<li>'+p[0]+'<div class="popts">a) '+p[1]+' &nbsp; b) '+p[2]+' &nbsp; c) '+p[3]+' &nbsp; d) '+p[4]+'</div></li>';}).join('')+'</ol>');
  $('#kAgain').onclick=()=>kStart(kT);
  $('#kTheory').onclick=()=>gramTheory(kT);
  $('#kList').onclick=gramList;
}

/* ---------- PREFIJOS ---------- */
function prefRender(){
  const blk=(tit,arr,color,intro)=>'<h3 style="font-family:var(--serif);font-size:1.35rem;margin:26px 0 6px;font-weight:600">'+tit+'</h3>'
   +'<p style="color:var(--ink2);font-size:.9rem;margin:0 0 14px;max-width:75ch">'+intro+'</p>'
   +'<div class="prefgrid">'+arr.map(([p,s,ej])=>'<div class="prefc" style="--pc:'+color+'"><h4>'+p+'</h4><div class="sn">'+s+'</div><ul>'
     +ej.map(([a,b])=>'<li><b>'+a+'</b><span>'+b+'</span></li>').join('')+'</ul></div>').join('')+'</div>';
  $('#prefOut').innerHTML=
   '<div class="gcard" style="--c:var(--brand);max-width:900px"><h2><span class="dot"></span>El acento lo decide todo</h2>'
   +'<p>Un prefijo <b>tónico</b> se despega del verbo y cierra la oración; un prefijo <b>átono</b> queda soldado a la raíz. De esa diferencia dependen la posición en la frase, el participio y la colocación de <i>zu</i>.</p>'
   +'<table class="gtable"><tr><th></th><th>Separable · AUFstehen</th><th>Inseparable · verSTEhen</th></tr>'
   +'<tr><td>Presente</td><td>Ich stehe um sechs <b>auf</b>.</td><td>Ich verstehe alles.</td></tr>'
   +'<tr><td>Participio</td><td>auf<b>ge</b>standen</td><td>verstanden, sin ge-</td></tr>'
   +'<tr><td>Con zu</td><td>auf<b>zu</b>stehen</td><td>zu verstehen</td></tr>'
   +'<tr><td>Con modal</td><td>Ich muss <b>aufstehen</b>.</td><td>Ich muss verstehen.</td></tr></table>'
   +'<p style="font-size:.86rem">Los verbos terminados en <b>-ieren</b> tampoco se separan y nunca llevan <i>ge-</i>: <i>studiert, telefoniert, organisiert</i>.</p></div>'
   +blk('Prefijos separables',PREF.sep, '#f4b183','Siempre tónicos. En la oración principal el prefijo se va al final; en el participio, el <i>ge-</i> se cuela entre el prefijo y la raíz.')
   +blk('Prefijos inseparables',PREF.insep,'#c9aefc','Siempre átonos. Nunca se separan y su participio no lleva <i>ge-</i>.')
   +blk('Prefijos de doble comportamiento',PREF.dual,'#f2c777','Separables cuando el sentido es literal y espacial; inseparables cuando es figurado. El significado cambia con el acento.');
}

/* ---------- TEKAMOLO ---------- */
function tekaRender(){
  const K=['te','ka','mo','lo'];
  $('#tekaOut').innerHTML=
   '<div class="gcard" style="--c:var(--brand);max-width:900px"><h2><span class="dot"></span>TEKAMOLO</h2>'
   +'<p>Cuando en el centro de la oración coinciden varios complementos circunstanciales, el alemán los ordena por su tipo. La regla mnemotécnica reúne las cuatro iniciales:</p>'
   +'<div class="formula">'+K.map((k,i)=>'<span style="background:'+TEKA[k].c+'">'+k.toUpperCase()+' · '+TEKA[k].n+'</span>'+(i<3?'<i>→</i>':'')).join('')+'</div>'
   +'<p style="text-align:center;font-family:var(--serif);font-size:1.15rem;margin-top:16px">Ich fahre <b style="color:'+TEKA.te.c+'">morgen</b> <b style="color:'+TEKA.ka.c+'">wegen der Arbeit</b> <b style="color:'+TEKA.mo.c+'">mit dem Zug</b> <b style="color:'+TEKA.lo.c+'">nach Berlin</b>.</p>'
   +'<p style="font-size:.87rem">No es una jaula: cualquiera de los cuatro puede adelantarse a la primera posición para destacarlo, y entonces el sujeto pasa detrás del verbo. El resto conserva el orden relativo.</p></div>'
   +'<div class="tkgrid">'+K.map(k=>{const g=TEKA[k];
      return '<div class="tkc" style="--pc:'+g.c+'"><h4>'+k.toUpperCase()+' · '+g.n+'</h4><div class="qq">'+g.pr+'</div>'
       +g.l.map(([a,b])=>'<div class="it2"><b>'+a+'</b><span>'+b+'</span></div>').join('')+'</div>';}).join('')+'</div>'
   +'<div class="gcard" style="--c:var(--c-mix);max-width:900px;margin-top:16px"><h2><span class="dot"></span>La posición de nicht</h2>'
   +'<p><b>nicht</b> cierra la oración cuando niega toda la frase (<i>Ich kenne ihn nicht</i>), pero se coloca <b>delante</b> del elemento negado en la negación parcial: delante del adjetivo (<i>nicht teuer</i>), del complemento local (<i>nicht nach Berlin</i>) y siempre delante del participio o del infinitivo final (<i>Ich habe nicht gearbeitet</i>).</p></div>';
}

/* ---------- ROMPECABEZAS EN DOS PASOS ---------- */
let pzMark=null,pz=null,pzIdx=0,pzPl=[],pzTr=[],pzSel=-1,pzOk=0,pzStep=1,pzPass1=false,pzFn=[],pzChips=[],pzChipSel=-1,pzEnd=false;
const shuffle=a=>{for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]];}return a;};
function pzLoad(i){
  pzIdx=((i%PUZ.length)+PUZ.length)%PUZ.length; pz=PUZ[pzIdx];
  pzPl=[]; pzSel=-1; pzPass1=false; pzEnd=false; pzStep=1;
  pzFn=pz.p.map(()=>null); pzChipSel=-1;
  pzChips=shuffle(pz.p.map((p,k)=>({f:p[1],id:k,used:false})));
  pzTr=shuffle(pz.p.map((p,k)=>k));
  $('#pzEs').textContent=pz.tr;
  $('#pzNum').textContent=(pzIdx+1)+' / '+PUZ.length;
  $('#pzScore').textContent=pzOk+' resueltas';
  $('#pzFb').className='pzfb';
  pzStepUI(); pzDraw1(); pzDraw2();
}
function pzStepUI(){
  $('#pzHint').textContent = pzStep===1
    ? 'Paso 1: coloque las piezas en el orden correcto. Aquí no hay que pensar todavía en la función.'
    : 'Paso 2: arrastre cada etiqueta de función bajo la pieza que le corresponde.';
  $$('#pzSteps button').forEach(b=>{
    const s=+b.dataset.s;
    b.classList.toggle('on',s===pzStep);
    b.classList.toggle('done',s===1&&pzPass1);
    if(s===2) b.disabled=!pzPass1;
  });
  $('#pzS1').classList.toggle('hide',pzStep!==1);
  $('#pzS2').classList.toggle('hide',pzStep!==2);
}
$('#pzSteps').onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
  pzStep=+b.dataset.s; $('#pzFb').className='pzfb'; pzStepUI();};

/* --- paso 1: ordenar --- */
function pzDraw1(){
  const line=$('#pzLine'), tray=$('#pzTray');
  line.innerHTML=pzPl.length?pzPl.map((o,i)=>
    '<div class="pzp'+(o.mark||'')+'" data-p="'+i+'" style="z-index:'+(60-i)+';--pcol:var(--bg2)">'+pz.p[o.i][0]+'<span class="rm">×</span></div>').join('')
   :'<span class="pzslot">Toque las piezas de abajo para construir la oración alemana.</span>';
  tray.innerHTML=pzTr.length?pzTr.map(k=>'<div class="pzp" data-t="'+k+'" style="--pcol:var(--card)">'+pz.p[k][0]+'</div>').join('')
   :'<span class="pzslot">Todas las piezas están colocadas.</span>';
}
$('#pzTray').onclick=e=>{const d=e.target.closest('[data-t]');if(!d||pzEnd)return;
  const k=+d.dataset.t; pzTr=pzTr.filter(x=>x!==k); pzPl.push({i:k,f:null}); pzDraw1();};
$('#pzLine').onclick=e=>{
  const d=e.target.closest('[data-p]'); if(!d||pzEnd) return;
  const i=+d.dataset.p; pzTr.push(pzPl[i].i); pzPl.splice(i,1); pzDraw1();
};
$('#pzCheck1').onclick=()=>{
  if(pzPl.length!==pz.p.length){ pzFb('no','Faltan piezas','Coloque todas las piezas antes de comprobar el orden.'); return; }
  let ok=true;
  pzPl.forEach((o,i)=>{ const bien=o.i===i; o.mark=bien?' ok2':' no2'; if(!bien) ok=false; });
  pzDraw1();
  if(ok){
    pzPass1=true; pzStep=2; pzStepUI(); pzDraw2();
    pzFb('ok','Orden correcto','<div class="pzsol">'+pz.p.map(p=>p[0]).join(' ')+'</div>'
      +'<div style="margin-top:8px;color:var(--ink2);font-size:.86rem">Ahora ancle bajo cada pieza la función que desempeña en la oración.</div>');
  } else {
    pzFb('no','El orden todavía no es correcto','<div style="color:var(--ink2);font-size:.87rem">Recuerde: el verbo conjugado ocupa siempre la <b>segunda</b> posición, el segundo elemento verbal cierra la frase y los circunstanciales siguen el orden <b>TE · KA · MO · LO</b>. Las piezas en verde ya están en su sitio.</div>');
  }
};
$('#pzClear').onclick=()=>{ pzTr=shuffle(pzPl.map(o=>o.i).concat(pzTr)); pzPl=[]; $('#pzFb').className='pzfb'; pzDraw1(); };
$('#pzSol1').onclick=()=>{
  pzPl=pz.p.map((p,i)=>({i,f:null,mark:''})); pzTr=[]; pzPass1=true;
  pzDraw1(); pzStep=2; pzStepUI(); pzDraw2();
  pzFb('ok','Este es el orden correcto','<div class="pzsol">'+pz.p.map(p=>p[0]).join(' ')+'</div>'
   +(pz.nota?'<div style="margin-top:8px;color:var(--ink2);font-size:.86rem">'+pz.nota+'</div>':''));
};

/* --- paso 2: anclar funciones --- */
function pzDraw2(){
  const board=$('#pzBoard');
  board.innerHTML=pz.p.map((p,i)=>{
    const f=pzFn[i]?PFUN[pzFn[i]]:null;
    return '<div class="pzcol" style="z-index:'+(60-i)+'">'
     +'<div class="pzp" style="--pcol:var(--bg2)">'+p[0]+'</div>'
     +'<div class="pzslot2'+(f?' full':'')+(pzSel===i?' sel':'')+(pzMark&&pzMark[i]||'')+'" data-s2="'+i+'"'
     +(f?' style="--fc:'+f.c+';--fbg:'+f.bg+'"':'')+'>'+(f?f.ab:'función')+'</div></div>';
  }).join('');
  const chips=$('#pzChips');
  const libres=pzChips.filter(c=>!c.used);
  chips.innerHTML=libres.length?libres.map(c=>{const f=PFUN[c.f];
    return '<div class="pzchip'+(pzChipSel===c.id?' sel':'')+'" data-c="'+c.id+'" style="--fc:'+f.c+';--fbg:'+f.bg+'">'+f.n+'<small>'+f.q+'</small></div>';
  }).join(''):'<span class="pzslot">Todas las etiquetas están ancladas.</span>';
}
$('#pzChips').onclick=e=>{const d=e.target.closest('[data-c]');if(!d||pzEnd)return;
  const id=+d.dataset.c;
  if(pzSel>=0){ pzPoner(id,pzSel); pzSel=-1; }
  else pzChipSel=(pzChipSel===id?-1:id);
  pzDraw2();};
$('#pzBoard').onclick=e=>{const d=e.target.closest('[data-s2]');if(!d||pzEnd)return;
  const i=+d.dataset.s2;
  if(pzFn[i]){ const c=pzChips.find(c=>c.used&&c.slot===i); if(c){c.used=false;c.slot=null;} pzFn[i]=null; pzSel=i; }
  else if(pzChipSel>=0){ pzPoner(pzChipSel,i); pzChipSel=-1; }
  else pzSel=(pzSel===i?-1:i);
  pzDraw2();};
function pzPoner(id,i){
  const c=pzChips.find(c=>c.id===id); if(!c||c.used) return;
  if(pzFn[i]){ const old=pzChips.find(x=>x.used&&x.slot===i); if(old){old.used=false;old.slot=null;} }
  c.used=true; c.slot=i; pzFn[i]=c.f; pzChipSel=-1; sfx.place();
}
$('#pzCheck2').onclick=()=>{
  if(pzFn.some(f=>!f)){ pzFb('no','Faltan etiquetas','Ancle una función bajo cada pieza de la oración.'); return; }
  let ok=true; pzMark=pz.p.map((p,i)=>{const bien=pzFn[i]===p[1]; if(!bien)ok=false; return bien?' ok2':' no2';});
  pzDraw2();
  const sol='<div class="pzsol">'+pz.p.map(p=>'<span style="color:'+PFUN[p[1]].c+';font-weight:700">'+p[0]+'</span>').join(' ')+'</div>'
   +'<div class="pzleg" style="margin-top:8px">'+pz.p.map(p=>'<span><i style="background:'+PFUN[p[1]].c+'"></i>'+p[0]+' · '+PFUN[p[1]].n+(p[2]?' ('+p[2]+')':'')+'</span>').join('')+'</div>';
  if(ok){
    pzOk++; pzEnd=true; $('#pzScore').textContent=pzOk+' resueltas';
    $$('#pzSteps button').forEach(b=>b.classList.add('done'));
    pzFb('ok','Oración resuelta por completo',sol+(pz.nota?'<div style="margin-top:6px;color:var(--ink2);font-size:.86rem">'+pz.nota+'</div>':'')
     +'<div style="margin-top:12px"><button class="btn pri" id="pzNext">Siguiente oración</button></div>');
  } else {
    pzFb('no','Alguna función no encaja','<div style="color:var(--ink2);font-size:.87rem">Las etiquetas marcadas en rojo están mal ancladas. Recuerde las preguntas: <b>wer/was</b> para el nominativo, <b>wen/was</b> para el acusativo, <b>wem</b> para el dativo y <b>wessen</b> para el genitivo.</div>'
     +'<div style="margin-top:10px"><button class="btn" id="pzRetry">Quitar las mal puestas</button> <button class="btn" id="pzShow">Ver la solución</button></div>');
  }
  const r=$('#pzRetry'); if(r) r.onclick=()=>{
    pz.p.forEach((p,i)=>{ if(pzFn[i]!==p[1]){ const c=pzChips.find(c=>c.used&&c.slot===i); if(c){c.used=false;c.slot=null;} pzFn[i]=null; } });
    pzMark=null; $('#pzFb').className='pzfb'; pzDraw2();
  };
  const sh=$('#pzShow'); if(sh) sh.onclick=()=>$('#pzSol2').click();
  const n=$('#pzNext'); if(n) n.onclick=()=>pzLoad(pzIdx+1);
};
$('#pzClear2').onclick=()=>{ pzFn=pz.p.map(()=>null); pzChips.forEach(c=>{c.used=false;c.slot=null;}); pzMark=null; pzSel=-1; pzChipSel=-1; $('#pzFb').className='pzfb'; pzDraw2(); };
$('#pzSol2').onclick=()=>{
  pzFn=pz.p.map(p=>p[1]); pzChips.forEach((c,k)=>{c.used=true;}); pzMark=null; pzEnd=true; pzDraw2();
  const sol='<div class="pzsol">'+pz.p.map(p=>'<span style="color:'+PFUN[p[1]].c+';font-weight:700">'+p[0]+'</span>').join(' ')+'</div>'
   +'<div class="pzleg" style="margin-top:8px">'+pz.p.map(p=>'<span><i style="background:'+PFUN[p[1]].c+'"></i>'+p[0]+' · '+PFUN[p[1]].n+(p[2]?' ('+p[2]+')':'')+'</span>').join('')+'</div>';
  pzFb('ok','Solución completa',sol+(pz.nota?'<div style="margin-top:6px;color:var(--ink2);font-size:.86rem">'+pz.nota+'</div>':'')
   +'<div style="margin-top:12px"><button class="btn pri" id="pzNext">Siguiente oración</button></div>');
  $('#pzNext').onclick=()=>pzLoad(pzIdx+1);
};
$('#pzSkip').onclick=()=>pzLoad(pzIdx+1);
function pzFb(cls,tit,txt){ (cls==='ok'?sfx.win:sfx.no)(); const fb=$('#pzFb'); fb.className='pzfb on '+cls; fb.innerHTML='<div><b>'+tit+'</b>'+txt+'</div>'; }

/* ---------- DECLINACIÓN DEL ADJETIVO ---------- */
const ADJE={
 schwach:[['e','e','e','en'],['en','e','e','en'],['en','en','en','en'],['en','en','en','en']],
 gemischt:[['er','e','es','en'],['en','e','es','en'],['en','en','en','en'],['en','en','en','en']],
 stark:[['er','e','es','e'],['en','e','es','e'],['em','er','em','en'],['en','er','en','er']]
};
const ADJART={
 schwach:[['der','die','das','die'],['den','die','das','die'],['dem','der','dem','den'],['des','der','des','der']],
 gemischt:[['ein','eine','ein','keine'],['einen','eine','ein','keine'],['einem','einer','einem','keinen'],['eines','einer','eines','keiner']],
 stark:[['','','',''],['','','',''],['','','',''],['','','','']]
};
function adjRaiz(b,end){
  if(b==='hoch') b='hoh';
  if(/e$/.test(b)&&end[0]==='e') return b+end.slice(1);
  if(/[eu]er$|el$/.test(b)&&end[0]==='e') return b.slice(0,-2)+b.slice(-1)+end;
  return b+end;
}
function adjBox(w){
  const C=['Nominativo','Acusativo','Dativo','Genitivo'], G=['masculino','femenino','neutro','plural'];
  const tab=t=>'<table class="adj"><tr><th></th>'+G.map(g=>'<th>'+g+'</th>').join('')+'</tr>'
   +C.map((c,i)=>'<tr><td class="c2">'+c+'</td>'+[0,1,2,3].map(j=>{
      const art=ADJART[t][i][j], e=ADJE[t][i][j];
      return '<td>'+(art?'<span class="art2">'+art+'</span> ':'')+adjRaiz(w.base,e).slice(0,adjRaiz(w.base,e).length-e.length)+'<em>'+e+'</em></td>';
    }).join('')+'</tr>').join('')+'</table>';
  return '<div class="box" style="margin-bottom:16px"><h4>Declinación de '+w.base+'</h4>'
   +'<div class="adjtabs" id="adjTabs"><button data-a="schwach" class="on">Tras der/die/das</button><button data-a="gemischt">Tras ein/kein/mein</button><button data-a="stark">Sin artículo</button></div>'
   +'<div id="adjTable">'+tab('schwach')+'</div>'
   +'<p style="font-size:.78rem;color:var(--ink3);margin:10px 0 0">En rosa, la terminación que se añade. Detrás del artículo determinado el adjetivo solo distingue <b>-e</b> y <b>-en</b>; sin artículo asume las marcas del propio artículo. En posición predicativa (<i>Das Haus ist '+w.base+'</i>) no se declina nunca.</p></div>'
   ;
}
document.addEventListener('click',e=>{
  const b=e.target.closest('#adjTabs button'); if(!b) return;
  const w=wById(vCur); if(!w||w.cls!=='a') return;
  $$('#adjTabs button').forEach(x=>x.classList.toggle('on',x===b));
  const C=['Nominativo','Acusativo','Dativo','Genitivo'], G=['masculino','femenino','neutro','plural'], t=b.dataset.a;
  $('#adjTable').innerHTML='<table class="adj"><tr><th></th>'+G.map(g=>'<th>'+g+'</th>').join('')+'</tr>'
   +C.map((c,i)=>'<tr><td class="c2">'+c+'</td>'+[0,1,2,3].map(j=>{
      const art=ADJART[t][i][j], e=ADJE[t][i][j], full=adjRaiz(w.base,e);
      return '<td>'+(art?'<span class="art2">'+art+'</span> ':'')+full.slice(0,full.length-e.length)+'<em>'+e+'</em></td>';
    }).join('')+'</tr>').join('')+'</table>';
});

let dicInit=false;
/* ===================== DICCIONARIO ===================== */
const DICS=[
 {n:'LEO',dm:'dict.leo.org',b:'https://dict.leo.org/spanisch-deutsch/',u:t=>'https://dict.leo.org/spanisch-deutsch/'+encodeURIComponent(t),
  d:'Diccionario español–alemán con foros de traducción y ejemplos de uso.',c:'#5a7fd0'},
 {n:'Langenscheidt',dm:'de.langenscheidt.com',b:'https://de.langenscheidt.com/deutsch-spanisch/',u:t=>'https://de.langenscheidt.com/deutsch-spanisch/'+encodeURIComponent(t.toLowerCase()),
  d:'Diccionario editorial alemán–español con transcripción y registro.',c:'#c08a3e'},
 {n:'Netzverb · verbformen',dm:'verbformen.es',b:'https://www.verbformen.es/',u:t=>'https://www.verbformen.es/?w='+encodeURIComponent(t),
  d:'Conjugación completa, declinación y análisis morfológico del alemán.',c:'#3f9d86'},
 {n:'WordReference',dm:'wordreference.com',b:'https://www.wordreference.com/dees/',u:t=>'https://www.wordreference.com/dees/'+encodeURIComponent(t),
  d:'Diccionario alemán–español con foros sobre matices de uso.',c:'#8a6fd0'},
 {n:'PONS Wörterbuch',dm:'de.pons.com',b:'https://de.pons.com/%C3%BCbersetzung/deutsch-spanisch',u:t=>'https://de.pons.com/%C3%BCbersetzung/deutsch-spanisch/'+encodeURIComponent(t),
  d:'Diccionario alemán–español de PONS, con ejemplos, pronunciación y frases hechas.',c:'#cf6a86'},
 {n:'DWDS',dm:'dwds.de',b:'https://www.dwds.de/',u:t=>'https://www.dwds.de/wb/'+encodeURIComponent(t),
  d:'Diccionario monolingüe académico con corpus y curvas de frecuencia.',c:'#cf7f5a'},
 {n:'Duden',dm:'duden.de',b:'https://www.duden.de/',u:t=>'https://www.duden.de/rechtschreibung/'+encodeURIComponent(t),
  d:'Norma ortográfica, separación silábica y gramática de referencia.',c:'#5a7fd0'},
 {n:'Reverso Context',dm:'context.reverso.net',b:'https://context.reverso.net/traduccion/aleman-espanol/',u:t=>'https://context.reverso.net/traduccion/aleman-espanol/'+encodeURIComponent(t),
  d:'Traducciones en contexto extraídas de corpus paralelos.',c:'#3f9d86'}
];
const DICMINI=['DWDS','LEO','PONS','Netzverb'];
const dicCorto=n=>n.split(' ')[0];
const dicLinks=(t,compact)=>compact
  ? DICMINI.map(k=>DICS.find(d=>dicCorto(d.n)===k)).filter(Boolean)
      .map(d=>'<a class="diclink mini" style="--dc:'+d.c+'" href="'+d.u(t)+'" target="_blank" rel="noopener">'+dicCorto(d.n)+'</a>').join('')
  : DICS.map(d=>'<a class="diccard" style="--dc:'+d.c+'" href="'+d.u(t)+'" target="_blank" rel="noopener">'
      +'<b>'+d.n+'</b><small>'+d.d+'</small><span class="dm">'+d.dm+'</span></a>').join('');
const dicBases=()=>'<div class="dicgrid">'+DICS.map(d=>'<a class="diccard" style="--dc:'+d.c+'" href="'+d.b+'" target="_blank" rel="noopener">'
      +'<b>'+d.n+'</b><small>'+d.d+'</small><span class="dm">'+d.dm+'</span></a>').join('')+'</div>';

function dicRender(){
  $('#dicOut').innerHTML='';
  $('#dicExt').innerHTML='';
  $('#dicHead').innerHTML='<p class="dicintro">Busque cualquier palabra: primero se consulta el material de esta aplicación —'
   +W.length+' entradas de vocabulario, '+V.length+' verbos conjugados, prefijos, adverbios y temas de gramática— y debajo quedan '
   +'los enlaces directos a los diccionarios externos con el término ya escrito.</p>';
  dicSearch();
}
function dicNorm(s){return s.toLowerCase().replace(/^(der|die|das)\s+/,'').replace(/[áàä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i').replace(/[óòö]/g,'o').replace(/[úùü]/g,'u').replace(/ß/g,'ss').trim();}

/* Clase cerrada y léxico de alta frecuencia · [forma, lema, clase, definición, ejemplo DE, ejemplo ES] */
let FUNKI=null;
function funkIdx(){ if(FUNKI) return FUNKI; FUNKI=new Map();
  FUNK.forEach(r=>{ const k=dicNorm(r[0]); if(k&&!FUNKI.has(k)) FUNKI.set(k,{f:r[0],l:r[1],c:r[2],d:r[3],e:r[4],s:r[5]}); });
  return FUNKI; }

/* ---- resolución léxica para las lecturas ----
   El panel del relato ha de dar definición y ejemplo de cualquier palabra del
   texto, no solo de las que coinciden literalmente con una entrada. Se indexan
   todas las formas registradas —plural, pretérito, participio, comparativo,
   presente de los verbos del repertorio— y después se prueba una cascada
   morfológica: desinencia flexiva, participio en ge- y, por último, el núcleo
   derecho del compuesto, que en alemán es el que fija género y clase.
   dicNorm ya neutraliza la diéresis, de modo que Bücher alcanza Buch y Männer
   alcanza Mann sin reglas de Umlaut adicionales.                              */
let DICIDX=null, VIDX=null;
function dicIndice(){
  if(DICIDX) return;
  DICIDX=new Map(); VIDX=new Map();
  const add=(k,v)=>{ if(!k||k==='-') return; const n=dicNorm(k); if(n&&!DICIDX.has(n)) DICIDX.set(n,v); };
  W.forEach(w=>{
    add(w.de,w); add(w.base,w);
    if(w.cls==='s'&&w.pl&&w.pl!=='-'){ add(w.pl,w); add(w.pl+'n',w); }
    if(w.cls==='v'){ add(w.prat,w); add(w.part,w); add(w.base.replace(/^sich\s+/,''),w); }
    if(w.cls==='a'){ add(w.komp,w); add(w.sup,w); }
  });
  const addv=(k,v)=>{ if(!k) return; const n=dicNorm(k); if(n&&!VIDX.has(n)) VIDX.set(n,v); };
  V.forEach(v=>{ addv(v.i,v); addv(v.pp,v); (v.PR||[]).forEach(f=>addv(f,v)); (v.PT||[]).forEach(f=>addv(f,v)); });
}
const DESIN=['esten','etest','ester','etes','eten','este','est','ete','end','em','en','er','es','st','te','n','e','s','t'];
/* Sufijos derivativos: el alemán forma palabra nueva sobre base registrada.
   Cada regla indica qué se añade al radical para reconstruir el lema y con qué
   nombre se le explica al lector la operación morfológica.                    */
const DERIV=[
 [/erinnen$/,['er'],'moción femenina en -in, plural'],
 [/erin$/,['er'],'moción femenina en -in'],
 [/innen$/,['','e','er'],'moción femenina en -in, plural'],
 [/in$/,['','e'],'moción femenina en -in'],
 [/chen$/,['','e'],'diminutivo en -chen'],
 [/lein$/,['','e'],'diminutivo en -lein'],
 [/ungen$/,['en'],'nominalización deverbal en -ung'],
 [/ung$/,['en'],'nominalización deverbal en -ung'],
 [/heiten$/,['','ig'],'nominalización deadjetival en -heit'],
 [/heit$/,['','ig'],'nominalización deadjetival en -heit'],
 [/keiten$/,['ig','lich'],'nominalización deadjetival en -keit'],
 [/keit$/,['ig','lich'],'nominalización deadjetival en -keit'],
 [/schaften$/,[''],'nominalización en -schaft'],
 [/schaft$/,[''],'nominalización en -schaft'],
 [/lich(e|en|er|es|em|sten)?$/,['','en'],'adjetivo derivado en -lich'],
 [/isch(e|en|er|es|em)?$/,[''],'adjetivo derivado en -isch'],
 [/bar(e|en|er|es|em)?$/,['en'],'adjetivo derivado en -bar'],
 [/los(e|en|er|es|em)?$/,[''],'adjetivo derivado en -los'],
 [/sam(e|en|er|es|em)?$/,['en',''],'adjetivo derivado en -sam'],
 [/haft(e|en|er|es|em)?$/,[''],'adjetivo derivado en -haft'],
 [/voll(e|en|er|es|em)?$/,[''],'adjetivo derivado en -voll'],
 [/ern$/,['en'],'nombre de agente en -er'],
 [/er$/,['en'],'nombre de agente en -er']
];
const PREFV=['zurueck','zusammen','gegenueber','herunter','herauf','heraus','herein','hinaus','hinein',
 'entlang','vorbei','wieder','durch','unter','ueber','statt','fern','teil','nach','vor','auf','aus',
 'ein','mit','ab','an','zu','um','hin','her','weg','los','fest','frei','hoch','wahr'];
function dicRaices(q){
  const out=[];
  DESIN.forEach(d=>{ if(q.length>d.length+2&&q.endsWith(d)){
    const r=q.slice(0,-d.length); out.push(r,r+'e',r+'en',r+'n'); } });
  const m=q.match(/^ge(.{2,})(t|en)$/);
  if(m) out.push(m[1]+'en',m[1]+'n',m[1]+'e',m[1]);
  for(const px of PREFV){ if(q.length>px.length+3&&q.indexOf(px)===0){ out.push(q.slice(px.length)); break; } }
  return [...new Set(out)].filter(x=>x.length>=2);
}
function dicDeriva(q){
  const out=[];
  for(const [re,adds,lab] of DERIV){
    if(!re.test(q)) continue;
    const base=q.replace(re,'');
    if(base.length<3) continue;
    adds.forEach(a=>out.push([base+a,lab]));
  }
  return out;
}
function dicResuelve(tok){
  dicIndice();
  const q=dicNorm(tok); if(!q) return null;
  const fk=funkIdx().get(q)||null;
  let w=DICIDX.get(q), v=VIDX.get(q);
  if(w||v||fk) return {w:w||null,v:v||null,fk:fk,via:''};
  for(const r of dicRaices(q)){
    w=DICIDX.get(r); v=VIDX.get(r);
    if(w||v) return {w:w||null,v:v||null,fk:funkIdx().get(r)||null,via:'forma flexionada'};
  }
  for(const [r,lab] of dicDeriva(q)){
    w=DICIDX.get(r); v=VIDX.get(r);
    if(w||v) return {w:w||null,v:v||null,fk:null,via:lab,der:r};
  }
  /* último recurso: en el compuesto alemán el núcleo está a la derecha y es
     el que fija género y clase; el elemento izquierdo solo determina.        */
  if(q.length>=8){
    for(let i=1;i<=q.length-4;i++){
      const cola=q.slice(i), h=DICIDX.get(cola);
      if(h&&(h.cls==='s'||h.cls==='v'||h.cls==='a')&&cola.length>=4)
        return {w:h,v:VIDX.get(cola)||null,fk:null,via:'compuesto'};
    }
    /* el núcleo puede estar además derivado: Mitbewohnerin sobre wohnen */
    for(let i=1;i<=q.length-5;i++){
      for(const [r,lab] of dicDeriva(q.slice(i))){
        const h=DICIDX.get(r);
        if(h) return {w:h,v:VIDX.get(r)||null,fk:null,via:'compuesto · '+lab,der:r};
      }
    }
  }
  const rf=dicRaices(q);
  for(const r of rf){ const h=funkIdx().get(r); if(h) return {w:null,v:null,fk:h,via:'forma flexionada'}; }
  const gc=(typeof glosCorpus==='function')?glosCorpus(tok):null;
  if(gc) return {w:null,v:null,fk:null,gl:gc,via:'glosario del corpus'};
  return null;
}
/* ---- corpus de ejemplos atestiguados ----
   Toda palabra que aparece en un relato aparece, por definición, en alguna
   frase del corpus. El índice invertido garantiza que ninguna consulta quede
   sin uso documentado, aunque la palabra no figure en el léxico.             */
let EJIDX=null, GLOSIDX=null, PROPIO=null;
const DETS=new Set(['der','die','das','den','dem','des','ein','eine','einen','einem','einer','eines',
 'kein','keine','keinen','keinem','keiner','mein','meine','meinen','dein','sein','seine','seinen','seinem',
 'ihr','ihre','ihren','ihrem','unser','unsere','euer','dieser','diese','dieses','diesen','diesem',
 'jener','jene','jenes','jeder','jede','jedes','jeden','jedem','alle','allen','viele','einige','manche',
 'welche','welcher','welches','solche','solchen','beide','beiden','andere','anderen','mehrere','samtliche']);
function ejIndice(){
  if(EJIDX) return;
  EJIDX=new Map(); GLOSIDX=new Map(); PROPIO=new Set();
  /* glosario acumulado de los 129 relatos: unas setecientas voces exigentes ya
     traducidas por el autor de cada texto */
  try{ if(typeof ST!=='undefined') ST.forEach(x=>(x.glos||[]).forEach(g=>{
    const n=dicNorm(g[0]); if(n&&!GLOSIDX.has(n)) GLOSIDX.set(n,g);
    const p2=n.split(/\s+/); if(p2.length>1){ const u=p2[p2.length-1]; if(u.length>2&&!GLOSIDX.has(u)) GLOSIDX.set(u,g); }
  })); }catch(e){}
  /* nombres propios por prueba distribucional: un sustantivo común aparece
     tarde o temprano con determinante; un nombre propio no lo hace nunca */
  const cnt=new Map(), det=new Map();
  const mete=fr=>{
    const vistos=new Set();
    fr.split(/[^A-Za-zÄÖÜäöüß]+/).forEach(t=>{
      if(t.length<2) return;
      const n=dicNorm(t);
      if(!n||vistos.has(n)) return; vistos.add(n);
      const l=EJIDX.get(n);
      if(!l) EJIDX.set(n,[fr]); else if(l.length<3) l.push(fr);
    });
  };
  try{
    if(typeof ST!=='undefined') ST.forEach(x=>x.txt.forEach(par=>{
      (par.match(/[^.!?…]+[.!?…]?/g)||[]).forEach(f=>{ const t=f.trim();
        if(t.length>=10&&t.length<=340) mete(t); });
      const pal=par.split(/[^A-Za-zÄÖÜäöüß]+/).filter(t=>t.length>1);
      pal.forEach((t,i)=>{
        if(!/^[A-ZÄÖÜ]/.test(t)) return;
        const n=dicNorm(t); cnt.set(n,(cnt.get(n)||0)+1);
        const ant=i>0?dicNorm(pal[i-1]):'';
        if(ant&&DETS.has(ant)) det.set(n,(det.get(n)||0)+1);
      });
    }));
    if(typeof KERN!=='undefined') Object.keys(KERN).forEach(k=>
      KERN[k].forEach(x=>{ if(x&&x.s) mete(x.s); }));
  }catch(e){}
  cnt.forEach((c,n)=>{ if(c>=2&&!det.get(n)) PROPIO.add(n); });
}
function esPropio(tok){ ejIndice(); return PROPIO.has(dicNorm(tok)); }
function glosCorpus(tok){ ejIndice(); return GLOSIDX.get(dicNorm(tok))||null; }
function ejCorpus(tok,evitar){
  ejIndice();
  const l=EJIDX.get(dicNorm(tok));
  const n=evitar?dicNorm(evitar):'';
  if(l&&l.length){ for(const f of l){ if(!n||dicNorm(f)!==n) return f; } return l[0]; }
  /* rastreo directo: ninguna palabra del corpus puede quedarse sin frase */
  try{
    const esc=String(tok).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const re=new RegExp('(^|[^A-Za-zÄÖÜäöüß])'+esc+'(?![A-Za-zÄÖÜäöüß])');
    for(const x of ST) for(const par of x.txt){
      if(!re.test(par)) continue;
      const fr=par.match(/[^.!?…]+[.!?…]?/g)||[par];
      for(const f of fr){ if(re.test(f)) return f.trim(); }
      return par.trim();
    }
  }catch(e){}
  return '';
}
function ejMarca(fr,tok){
  if(!fr) return '';
  const esc=String(tok).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return fr.replace(new RegExp('(^|[^A-Za-zÄÖÜäöüß])('+esc+'\\w*)','i'),(m,a,x)=>a+'<mark>'+x+'</mark>');
}
function dicSearch(){
  const raw=$('#dicQ').value.trim(), q=dicNorm(raw);
  const ext=$('#dicExt'), out=$('#dicOut');
  if(!raw){ ext.innerHTML='<div class="sec-h" style="margin-bottom:10px">Bases de consulta disponibles</div>'+dicBases();
    out.innerHTML='<div class="dicempty" style="margin-top:22px"><b>Escriba una palabra</b>El buscador acepta alemán o español y no distingue mayúsculas ni acentos. Al escribir, cada base se abrirá con el término ya insertado.</div>'; return; }
  ext.innerHTML='<div class="sec-h" style="margin-bottom:10px">Consultar «'+raw+'» en diccionarios externos</div><div class="dicgrid">'+dicLinks(raw)+'</div>';
  const res=[];
  W.forEach(w=>{
    const a=dicNorm(w.de), b=w.es.toLowerCase();
    let s=-1;
    if(a===q||b===q) s=0; else if(a.startsWith(q)||b.startsWith(q)) s=1;
    else if(a.includes(q)||b.includes(q)) s=2; else if((w.def||'').toLowerCase().includes(q)) s=3;
    if(s>=0) res.push({s,tipo:CLS[w.cls],cat:w.cat+' · '+w.sub,de:(w.cls==='s'?w.art+' ':'')+w.base,es:w.es,go:'w'+w.id,c:w.cls==='s'?(w.g==='p'?'f':w.g):'x'});
  });
  V.forEach(v=>{
    const a=dicNorm(v.i), b=v.t.toLowerCase();
    let s=-1;
    if(a===q||b===q) s=0; else if(a.startsWith(q)||b.startsWith(q)) s=1; else if(a.includes(q)||b.includes(q)) s=2;
    if(s>=0) res.push({s:s-0.1,tipo:'Verbo conjugado',cat:'Repertorio verbal · '+v.PT[0]+' · '+v.pp,de:v.i,es:v.t,go:'v'+v.id,c:'x'});
  });
  ['sep','insep','dual'].forEach(g=>PREF[g].forEach(([p,sn,ej])=>{
    ej.forEach(([a,b])=>{ if(dicNorm(a).includes(q)||b.toLowerCase().includes(q))
      res.push({s:2.5,tipo:'Verbo con prefijo '+p,cat:g==='sep'?'Prefijo separable':g==='insep'?'Prefijo inseparable':'Prefijo de doble uso',de:a,es:b,go:'p',c:'x'}); });
  }));
  Object.entries(TEKA).forEach(([k,g])=>g.l.forEach(([a,b])=>{
    if(dicNorm(a).includes(q)||b.toLowerCase().includes(q))
      res.push({s:2.6,tipo:'Adverbio '+g.n.toLowerCase(),cat:'TEKAMOLO · '+k.toUpperCase(),de:a,es:b,go:'t',c:'x'});
  }));
  GRAM.forEach((t,i)=>{ if(t.t.toLowerCase().includes(raw.toLowerCase())||t.sub.toLowerCase().includes(raw.toLowerCase()))
    res.push({s:2.8,tipo:'Tema de gramática',cat:t.sub+' · '+t.lvl,de:t.t,es:'Teoría y cuestionario',go:'g'+i,c:'x'}); });
  res.sort((a,b)=>a.s-b.s||a.de.localeCompare(b.de,'de'));
  const lista=res.slice(0,60);
  out.innerHTML='<div class="sec-h" style="margin:22px 0 10px">'+(res.length?'En este material · '+res.length+' coincidencia'+(res.length>1?'s':''):'Sin coincidencias en el material propio')+'</div>'
   +(lista.length?'<div class="dicres">'+lista.map(r=>
      '<div class="dicrow gen-'+r.c+'" data-go="'+r.go+'"><div class="dr1"><b>'+r.de+'</b><span>'+r.es+'</span></div>'
      +spkBtn(r.de.replace(/^(der|die|das) /,''))+'<div class="dr2"><span class="tag k-mod">'+r.tipo+'</span><span class="drc">'+r.cat+'</span></div></div>').join('')+'</div>'
    :'<div class="dicempty"><b>No está en el material</b>Use los enlaces de arriba para consultarlo en LEO, Langenscheidt, Netzverb o WordReference.</div>');
}
$('#dicQ').addEventListener('input',dicSearch);
$('#dicOut').addEventListener('click',e=>{
  const r=e.target.closest('[data-go]'); if(!r) return;
  const g=r.dataset.go, k=g[0], id=+g.slice(1);
  if(k==='w'){ goMode('palabras'); vFicha(id); }
  else if(k==='v'){ goMode('verbos'); openV(id); }
  else if(k==='p') goMode('refer');
  else if(k==='t') goMode('refer');
  else if(k==='g'){ goMode('temas'); gramTheory(id); }
});

/* Geschichten · bloque 1 (A1–B1)
   q:    "pregunta|op0|op1|op2|índice correcto|explicación"
   korr: "frase con ~forma incorrecta~|forma correcta|explicación"                 */
const SPK={v:null,rate:.95,vol:1,volPrev:.85,pausa:false,ready:('speechSynthesis' in window)};
function pickVoice(){
  if(!SPK.ready) return;
  const vs=speechSynthesis.getVoices()||[];
  SPK.v=vs.find(v=>/^de[-_]/i.test(v.lang)&&/google|natural|premium/i.test(v.name))
      ||vs.find(v=>/^de[-_]/i.test(v.lang))||null;
}
if(SPK.ready){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
/* Chrome interrumpe cualquier enunciado que pase de unos quince segundos y
   deja de hablar sin avisar. La lectura se parte en unidades sintácticas de
   menos de 180 caracteres, se encolan una a una y un vigía llama a resume()
   para evitar la suspensión silenciosa del motor.                            */
function partirTexto(t){
  const bruto=String(t).replace(/\s+/g,' ').trim();
  const frases=bruto.match(/[^.!?…:;]+[.!?…:;]*\s*/g)||[bruto];
  const out=[]; let buf='', off=0, pos=0;
  const empuja=()=>{ if(buf.trim()){ out.push({t:buf.trim(),o:off}); } buf=''; };
  for(const f of frases){
    if(!buf) off=pos;
    if((buf+f).length>180&&buf){ empuja(); off=pos; }
    if(f.length>180){
      const trozos=f.match(/.{1,170}(\s|$)/g)||[f];
      let p2=pos;
      trozos.forEach(x=>{ if(buf){empuja();} out.push({t:x.trim(),o:p2}); p2+=x.length; });
      off=pos+f.length;
    } else buf+=f;
    pos+=f.length;
  }
  empuja();
  return out.filter(x=>x.t);
}
let SAYQ=null, SAYWD=null;
function sayStop(){
  SAYQ=null; clearInterval(SAYWD); SAYWD=null; SPK.pausa=false;
  if(SPK.ready){ try{speechSynthesis.cancel();}catch(e){} }
}
function say(t,rate,cb,onWord){
  if(!SPK.ready||!t) return null;
  sayStop();
  const trozos=partirTexto(t);
  if(!trozos.length) return null;
  const est={i:0,cancel:false,congelado:false,salto:false,rate:rate||SPK.rate,trozos:trozos};
  SAYQ=est; SPK.pausa=false;
  /* el vigía no debe reanimar el motor mientras el usuario lo tiene en pausa */
  SAYWD=setInterval(()=>{ try{ if(!SPK.pausa&&!est.congelado&&speechSynthesis.speaking&&!speechSynthesis.paused) speechSynthesis.resume(); }catch(e){} },4000);
  const siguiente=()=>{
    if(est.cancel||est.congelado||SAYQ!==est){ return; }
    /* la pausa puede caer en el hueco entre dos fragmentos, cuando no hay nada
       que suspender: entonces se congela la cola y se reanuda desde aquí */
    if(SPK.pausa){ est.congelado=true; return; }
    if(est.i>=trozos.length){ clearInterval(SAYWD); SAYWD=null; SAYQ=null; SPK.pausa=false; if(cb) cb(); return; }
    const tr=trozos[est.i++];
    const u=new SpeechSynthesisUtterance(tr.t);
    u.lang='de-DE'; if(SPK.v) u.voice=SPK.v; u.rate=est.rate; u.pitch=1; u.volume=SPK.vol;
    if(onWord) u.onboundary=ev=>{ if(ev.charIndex!=null) onWord(tr.o+ev.charIndex); };
    /* end y error pueden dispararse los dos: un cerrojo evita saltarse un fragmento */
    let hecho=false;
    const paso=()=>{ if(hecho) return; hecho=true; est.salto=false; setTimeout(siguiente,10); };
    u.onend=paso; u.onerror=paso;
    try{ speechSynthesis.speak(u); }catch(e){ setTimeout(siguiente,10); }
  };
  est.next=siguiente;
  /* algunos navegadores tardan en poblar las voces: se reintenta una vez */
  if(!SPK.v){ pickVoice(); }
  siguiente();
  return est;
}
const stopSay=()=>sayStop();

/* ---- pausa, reanudación y volumen ----
   La Web Speech API no admite cambiar el volumen de un enunciado ya emitido ni
   garantiza pause() con voces remotas. La estrategia es doble: el volumen se
   aplica al siguiente fragmento y, si hay lectura en curso, se repite el
   fragmento actual para que el cambio se oiga de inmediato; la pausa intenta
   primero pause() y, si el motor la ignora, congela la cola y detiene el
   fragmento, que se reanuda desde su comienzo.                                */
function sayActivo(){ return !!SAYQ; }
function sayPausado(){ return !!(SAYQ&&SPK.pausa); }
function sayRepite(){
  const e=SAYQ; if(!SPK.ready||!e) return false;
  e.i=Math.max(0,e.i-1); e.congelado=false; e.salto=true; SPK.pausa=false;
  try{speechSynthesis.cancel();}catch(x){}
  setTimeout(()=>{ if(SAYQ===e&&e.salto){ e.salto=false; e.next(); } },140);
  return true;
}
function sayPause(){
  const e=SAYQ; if(!SPK.ready||!e||SPK.pausa) return false;
  SPK.pausa=true;
  try{speechSynthesis.pause();}catch(x){}
  setTimeout(()=>{
    if(!SPK.pausa||SAYQ!==e) return;
    let p=false; try{ p=speechSynthesis.paused; }catch(x){}
    if(!p){ e.congelado=true; e.i=Math.max(0,e.i-1);
      try{speechSynthesis.cancel();}catch(x){} }
  },300);
  return true;
}
function sayResume(){
  const e=SAYQ; if(!SPK.ready||!e||!SPK.pausa) return false;
  SPK.pausa=false;
  if(e.congelado){ e.congelado=false; e.salto=false;
    setTimeout(()=>{ if(SAYQ===e) e.next(); },20); return true; }
  try{speechSynthesis.resume();}catch(x){}
  return true;
}
/* ---- mando de volumen compartido por todos los reproductores ---- */
const ICPLAY='<svg viewBox="0 0 24 24"><path d="m6 3 14 9-14 9z"/></svg>';
const ICPAUSA='<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
const ICSTOP='<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>';
const VOLIC=v=>'<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"/>'
 +(v<=0?'<path d="m16.5 9.5 5 5M21.5 9.5l-5 5"/>'
   :v<.5?'<path d="M16.5 8.8a5 5 0 0 1 0 6.4"/>'
        :'<path d="M16.5 8.8a5 5 0 0 1 0 6.4"/><path d="M19.2 6.2a8.5 8.5 0 0 1 0 11.6"/>')+'</svg>';
function volUI(){
  return '<div class="volc'+(SPK.vol<=0?' mute':'')+'" data-vol>'
   +'<button class="vbtn" type="button" title="Silenciar" aria-label="Silenciar">'+VOLIC(SPK.vol)+'</button>'
   +'<input class="vsl" type="range" min="0" max="100" step="1" value="'+Math.round(SPK.vol*100)+'" aria-label="Volumen">'
   +'</div>';
}
function volPinta(){
  document.querySelectorAll('[data-vol]').forEach(c=>{
    const b=c.querySelector('.vbtn'), sl=c.querySelector('.vsl'), pc=Math.round(SPK.vol*100);
    if(b) b.innerHTML=VOLIC(SPK.vol);
    if(sl){ sl.value=pc; sl.style.setProperty('--vp',pc+'%'); }
    c.classList.toggle('mute',SPK.vol<=0);
    c.title='Volumen '+pc+' %';
  });
}
function volWire(){
  document.querySelectorAll('[data-vol]').forEach(c=>{
    if(c.dataset.wired) return; c.dataset.wired='1';
    const b=c.querySelector('.vbtn'), sl=c.querySelector('.vsl');
    sl.oninput=()=>{ SPK.vol=Math.min(1,Math.max(0,+sl.value/100)); if(SPK.vol>0) SPK.volPrev=SPK.vol; volPinta(); };
    sl.onchange=()=>{ sayRepite(); };
    sl.onkeyup=()=>{ sayRepite(); };
    b.onclick=()=>{ sfx.tick(); SPK.vol=SPK.vol>0?0:(SPK.volPrev||.85); volPinta(); sayRepite(); };
  });
  volPinta();
}
/* diagnóstico para la interfaz */
function vozEstado(){
  if(!SPK.ready) return 'Este navegador no dispone de síntesis de voz.';
  const vs=(speechSynthesis.getVoices()||[]).filter(v=>/^de/i.test(v.lang));
  if(!vs.length) return 'No hay ninguna voz alemana instalada en el sistema. Use el audio anclado.';
  return '';
}
const spkBtn=(t,cls)=>'<button class="spk'+(cls?' '+cls:'')+'" data-say="'+String(t).replace(/"/g,'&quot;')+'" title="Escuchar">'
  +'<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg></button>';
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-say]'); if(!b) return;
  e.preventDefault(); e.stopPropagation();
  sfx.tap();
  document.querySelectorAll('.spk.hab').forEach(x=>x.classList.remove('hab'));
  b.classList.add('hab');
  say(b.dataset.say,null,()=>b.classList.remove('hab'));
},true);
/* ondas al pulsar: retroalimentación táctil en los elementos accionables */
const RIPSEL='.btn,.row2,.pick,.clstab,.nvcard,.topic,.hnv,.stcard';
document.addEventListener('pointerdown',e=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const el=e.target.closest(RIPSEL); if(!el||el.disabled) return;
  const r=el.getBoundingClientRect(), d=Math.max(r.width,r.height);
  const s2=document.createElement('span');
  s2.className='rip';
  s2.style.width=s2.style.height=d+'px';
  s2.style.left=(e.clientX-r.left-d/2)+'px';
  s2.style.top=(e.clientY-r.top-d/2)+'px';
  el.appendChild(s2);
  setTimeout(()=>s2.remove(),600);
},true);

/* sonido genérico de interfaz (captura, antes que los manejadores propios) */
document.addEventListener('click',e=>{
  const t=e.target;
  if(t.closest('[data-say]')) return;
  if(t.closest('.kopt,.exopt,.artsel button,.fcbtns button,.pzp')) return;
  if(t.closest('.gnav button,.subnav button,.pick,.qcard2,.stcard,.topic,#tabs button')) { sfx.nav(); return; }
  if(t.closest('button,.wrow,.catcard,.simw,.dicrow')) sfx.tap();
},true);

/* --- efectos suaves --- */
let AC=null; const SFX={on:true};
function ac(){ try{ if(!AC) AC=new (window.AudioContext||window.webkitAudioContext)(); if(AC.state==='suspended') AC.resume(); return AC; }catch(e){ return null; } }
function tone(f,t0,dur,vol,type){
  const c=ac(); if(!c||!SFX.on) return;
  const o=c.createOscillator(), g=c.createGain();
  o.type=type||'sine'; o.frequency.value=f;
  const t=c.currentTime+t0;
  g.gain.setValueAtTime(0.0001,t);
  g.gain.exponentialRampToValueAtTime(vol,t+0.015);
  g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g); g.connect(c.destination); o.start(t); o.stop(t+dur+0.05);
}
const sfx={
  tap:()=>tone(520,0,.09,.035),
  nav:()=>{tone(440,0,.10,.030);tone(660,.05,.12,.022);},
  ok:()=>{tone(659,0,.12,.045);tone(880,.08,.18,.035);},
  no:()=>{tone(233,0,.16,.040,'triangle');tone(196,.09,.20,.030,'triangle');},
  flip:()=>{tone(392,0,.08,.028);tone(523,.04,.10,.022);},
  place:()=>tone(587,0,.08,.030),
  win:()=>{[523,659,784,1047].forEach((f,i)=>tone(f,i*.09,.22,.038));},
  tick:()=>tone(880,0,.05,.018)
};

/* ===================== GESCHICHTEN ===================== */
/* Geschichten · bloque 3 (A2–C2)
   q:    "pregunta|op0|op1|op2|índice correcto|explicación"
   korr: "frase con ~forma incorrecta~|forma correcta|explicación"                 */
const ST=[].concat(ST1,ST2,ST3,ST_X00,ST_X01,ST_X02,ST_X03,ST_X04,ST_X05,ST_X06,ST_X07,ST_X08,ST_X09,ST_X10,ST_X11,ST_X12).sort((a,b)=>(NIVORD[a.lvl]-NIVORD[b.lvl])||a.t.localeCompare(b.t,'de'));
const MDB={base:'https://mein-deutschbuch.de/',
 lvl:{A1:'niveau-a1/',A2:'niveau-a2/',B1:'niveau-b1/',B2:'niveau-b2/',C1:'leseverstehen/',C2:'leseverstehen/'},
 /* enlace directo al apartado correspondiente de mein-deutschbuch; los temas sin
    correspondencia en el sitio no muestran botón. */
 tema:{imperativ:'imperativ/',plural:'pluralbildung/',negation:'negation-verneinung/',praepakkdat:'praepositionen-mit-dativ/',praeptemp:'temporale-praepositionen/',praeplokal:'lokale-praepositionen/',dativverben:'dativ-und-akkusativ-ergaenzung/',welcher:'interrogativartikel/',positionsverben:'situativ-ergaenzung/',genitiv:'genitiv/',plusquam:'plusquamperfekt/',ndekl:'n-deklination/',doppelkonn:'konjunktionen/',lassen:'infinitivkonstruktionen/',satzbau0:'satzarten/',praesens:'gegenwart/',artikel:'artikel-nomenbegleiter/',
  nominativ:'nominativ-ergaenzung/',akkusativ:'akkusativ-ergaenzung/',dativ:'dativ-ergaenzung/',
  pronomen:'pronomen-fuerwoerter/',wortstellung:'satzlehre/',modalverben:'modalverben/',
  trennbar:'trennbare-verben/',perfekt:'perfekt/',praeteritum:'praeteritum/',
  wechsel:'wechselpraepositionen/',adverbien:'adverbien-umstandswoerter/',adjektive:'adjektive/',
  futur:'futur-1/',nebensatz:'nebensaetze/',konnektoren:'konjunktionen/',temporal:'temporalsaetze/',
  relativ:'relativpronomen-relativsaetze/',praepverb:'praepositionalergaenzung/',reflexiv:'reflexive-verben/',
  infinitivzu:'infinitivsaetze/',passiv1:'vorgangspassiv/',konjunktiv2a:'konjunktiv-2-der-hoeflichkeit/',
  passiv2:'passiversatz/',konjunktiv2b:'irreale-bedingungssaetze/',subjektiv:'modalverben/',
  relativ2:'relativpronomen-relativsaetze/',konnektoren2:'satzverbindende-adverbien/',
  partizip:'partizipien-als-adjektive/',nomstil:'nominalisierung/',genitivpraep:'praepositionen-mit-genitiv/',
  modalpartikel:'partikeln/',konjunktiv1:'konjunktiv-1/',funktionsverb:'verbergaenzungen/',
  valenz:'verbergaenzungen/',konzessiv:'konzessivsaetze/',wortbildung:'komposita/',
  textkohaesion:'satzverbindende-adverbien/',syntaxkomplex:'satzlehre/'},
 pdf:'zusatzmaterialien/'};
const mdbBtn=(url,txt)=>'<a class="btn mdb" href="'+url+'" target="_blank" rel="noopener" title="Material de repaso en mein-deutschbuch"><b>MDB</b>'+(txt||'Repaso')+'</a>';

let stCur=null, stRate=.95, stU=null, stPlaying=false, stPausa=false, stEval=null, stNiv='';

function stList(){
  histPush({go:'lectura',niv:stNiv});
  $('#stOut').innerHTML='<p class="dicintro">'+ST.length+' relatos de la vida cotidiana graduados de A1 a C2, unos veinte por nivel. Cada uno se puede <b>escuchar</b> con seguimiento palabra por palabra, y trae <b>cinco preguntas de comprensión</b>, <b>cinco de corrección</b>, una <b>evaluación</b> de diez preguntas y exportación a <b>PDF</b>.</p>'
   +'<div class="nivtabs">'+['','A1','A2','B1','B2','C1','C2'].map(k=>
      '<button class="nvtab'+(k===stNiv?' on':'')+'" data-stn="'+k+'" style="--sc:'+(k?NIV[NIVI[k]].c:'var(--ink3)')+'">'+(k||'Todos')+'</button>').join('')+'</div>'
   +'<div class="stgrid">'+ST.map((s,i)=>[s,i]).filter(([s])=>!stNiv||s.lvl===stNiv).map(([s,i])=>{
     const n=s.txt.join(' ').split(/\s+/).length;
     return '<div class="stcard" data-s="'+i+'" style="--sc:'+s.c+'">'
      +'<div class="stimg"><svg viewBox="0 0 120 60" preserveAspectRatio="none"><defs><linearGradient id="g'+i+'" x1="0" y1="0" x2="1" y2="1">'
      +'<stop offset="0" stop-color="'+s.c+'" stop-opacity=".85"/><stop offset="1" stop-color="'+s.c+'" stop-opacity=".25"/></linearGradient></defs>'
      +'<rect width="120" height="60" fill="url(#g'+i+')"/><circle cx="96" cy="14" r="10" fill="#fff" opacity=".25"/>'
      +'<path d="M0 46 Q30 30 60 44 T120 40 V60 H0Z" fill="#fff" opacity=".22"/></svg><span class="stlv">'+s.lvl+'</span></div>'
      +'<div class="stbody"><h4>'+s.t+'</h4><p>'+s.res+'</p><div class="stmeta">'+n+' palabras · '+s.q.length+' preguntas</div></div></div>';
   }).join('')+'</div>';
  $$('#stOut [data-stn]').forEach(b=>b.onclick=()=>{sfx.tap();stNiv=b.dataset.stn;stList();});
}
$('#stOut').addEventListener('click',e=>{const c=e.target.closest('[data-s]');if(c){sfx.nav();stOpen(+c.dataset.s);}});

function stTokens(s){
  let off=0, out=[];
  s.txt.forEach((par,pi)=>{
    const piezas=par.split(/(\s+)/);
    let html='';
    piezas.forEach(t=>{
      if(/^\s+$/.test(t)){ html+=t; off+=t.length; return; }
      html+='<span class="w" data-o="'+off+'" data-w="'+t.replace(/[.,;:!?„“»«()]/g,'').replace(/"/g,'')+'">'+t+'</span>';
      off+=t.length;
    });
    out.push('<p>'+html+'</p>');
    off+=2;
  });
  return out.join('');
}
function stOpen(i){
  stCur=ST[i]; stStop();
  histPush({go:'lectura',sub:'s:'+i});
  const s=stCur;
  $('#stOut').innerHTML=
   '<div class="stbar">'
   +'<div class="stacts">'+mdbBtn(MDB.base+(MDB.lvl[s.lvl]||MDB.pdf),'Repaso '+s.lvl)
   +btnPDF('stPdf')
   +'<button class="btn pri" id="stTest">Evaluación</button></div></div>'
   +'<div class="stwrap"><div class="stmain">'
   +'<div class="sthead" style="--sc:'+s.c+'"><span class="lv">'+s.lvl+'</span><h2>'+s.t+'</h2><p>'+s.res+'</p></div>'
   +'<div class="player" id="stPlayer">'
     +'<button class="pbtn" id="stPlay" title="Reproducir o pausar">'+ICPLAY+'</button>'
     +'<button class="sbtn2" id="stStopB" title="Detener" disabled>'+ICSTOP+'</button>'
     +'<div class="pinfo"><b>Audio del texto</b><span id="stState">Pulse para escuchar y seguir la lectura</span></div>'
     +'<div class="prate">'+[['0.7','lento'],['0.85','normal'],['1','rápido']].map(([v,l])=>
        '<button class="rbtn'+(v==='0.85'?' on':'')+'" data-r="'+v+'">'+l+'</button>').join('')+'</div>'
     +volUI()+'</div>'
   +'<div class="sttext" id="stText">'+stTokens(s)+'</div>'
   +'<div class="stglos"><h4>Glosario</h4>'+s.glos.map(([a,b])=>'<div class="gl"><b>'+a+'</b>'+spkBtn(a)+'<span>'+b+'</span></div>').join('')+'</div>'
   +'<div id="stEx"></div>'
   +'</div><aside class="stside"><div class="wordbox" id="stWord"><b>Diccionario del texto</b><p>Toque cualquier palabra del relato.</p></div></aside></div>';
  $('#stPlay').onclick=stToggle;
  $('#stStopB').onclick=()=>{ if(!stPlaying) return; sfx.tap(); stStop(); $('#stState').textContent='Detenido'; };
  volWire();
  $('#stPdf').onclick=()=>stPDF(s);
  $('#stTest').onclick=()=>stPrueba(s);
  $$('.rbtn').forEach(b=>b.onclick=()=>{ $$('.rbtn').forEach(x=>x.classList.toggle('on',x===b)); stRate=+b.dataset.r;
    if(stPlaying){ stStop(); stToggle(); } });
  $('#stText').onclick=e=>{const w=e.target.closest('.w'); if(w) stWord(w.dataset.w);};
  stEjercicios(s);
  /* relato anterior / siguiente */
  const nv=document.createElement('div'); nv.className='tnav'; nv.id='stNav';
  const pa=ST[i-1], ps=ST[i+1];
  nv.innerHTML=(pa?'<button class="tnv prev" data-si="'+(i-1)+'"><span>‹ Relato anterior</span><b>'+pa.t+'</b><em>'+pa.lvl+'</em></button>':'<span></span>')
   +(ps?'<button class="tnv next" data-si="'+(i+1)+'"><span>Relato siguiente ›</span><b>'+ps.t+'</b><em>'+ps.lvl+'</em></button>':'<span></span>');
  $('#stOut').appendChild(nv);
  nv.querySelectorAll('[data-si]').forEach(b=>b.onclick=()=>{ try{sfx.nav();}catch(e){} stOpen(+b.dataset.si); window.scrollTo({top:0,behavior:'smooth'}); });
}
/* ---- ficha de diccionario del relato ----
   Cualquier palabra del texto ha de devolver definición y ejemplo. El ejemplo
   procede, por este orden, del corpus de ejemplos, del repertorio verbal o del
   propio relato; la frase del relato se muestra siempre, de modo que ninguna
   consulta queda sin uso documentado.                                        */
function stGlos(tok){
  const q=dicNorm(tok);
  if(stCur&&stCur.glos) for(const g of stCur.glos){ const n=dicNorm(g[0]);
    if(n===q||n.split(/\s+/).indexOf(q)>=0) return g; }
  return (typeof glosCorpus==='function')?glosCorpus(tok):null;
}
function stContexto(tok){
  if(!stCur) return '';
  const esc=String(tok).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const re=new RegExp('(^|[^A-Za-zÄÖÜäöüß])('+esc+')(?![A-Za-zÄÖÜäöüß])');
  for(const par of stCur.txt){
    const frases=par.match(/[^.!?…]+[.!?…]*/g)||[par];
    for(const f of frases){ if(re.test(f))
      return f.trim().replace(re,(m,a,x)=>a+'<mark>'+x+'</mark>'); }
  }
  return '';
}
function stSec(t,c){ return '<div class="wsec"><h5>'+t+'</h5>'+c+'</div>'; }
/* Cuando ninguna entrada resuelve la palabra, la morfología sigue diciendo algo:
   la desinencia identifica la clase con bastante fiabilidad y el lector recibe
   un análisis en lugar de un hueco.                                          */
const MORF=[
 [/^ge.+(t|en)$/,'Participio','Forma de participio: el circunfijo ge-…-t o ge-…-en la identifica. Cierra el paréntesis oracional en el Perfekt y en la pasiva.'],
 [/(ig|lich|isch|bar|los|sam|haft|voll)(e|en|er|es|em|ste|sten)?$/,'Adjetivo','La terminación es un sufijo adjetival productivo. Puede aparecer sin declinar como predicado o adverbio, y declinado como atributo antepuesto.'],
 [/(ete|te|ten|test|tet)$/,'Verbo · pretérito','Forma de pretérito débil: la marca -t- entre el radical y la desinencia personal lo identifica. El pretérito es el pasado de la narración escrita.'],
 [/(st|t)$/,'Verbo · presente','Desinencia personal del presente: -st para la segunda persona del singular, -t para la tercera del singular y la segunda del plural.'],
 [/(ung|heit|keit|schaft|tion|tät|ie|ei|in)$/,'Sustantivo · derivado','Sufijo nominalizador productivo. Toda la serie -ung, -heit, -keit, -schaft, -tion, -tät es femenina sin excepción, de modo que el género es predecible.'],
 [/(chen|lein|tum|ment|nis)$/,'Sustantivo · derivado','Sufijo nominalizador. Los diminutivos -chen y -lein, y los sufijos -tum, -ment y -nis, dan neutro, y los diminutivos añaden Umlaut a la vocal del radical.'],
 [/(ling|ismus|ent|ant|ist|eur|or|er)$/,'Sustantivo · derivado','Sufijo nominalizador de agente o de proceso. Toda esta serie es masculina, salvo los pocos casos en -er que designan objetos neutros.'],
 [/(eln|ern|en)$/,'Verbo','Terminación en -en, -eln o -ern: es a la vez la del infinitivo, la de la primera y tercera persona del plural del presente y la del plural del pretérito de los verbos fuertes. Solo el contexto desambigua.'],
 [/(ens|erweise|mals|falls|wärts|s)$/,'Adverbio','Terminación adverbial: el alemán forma adverbios con -s adverbial fosilizado (abends, mehrmals), con -erweise a partir de adjetivos y con -wärts para la dirección.'],
 [/^[a-zäöüß]{2,}$/,'Adjetivo o adverbio','Forma sin desinencia: en alemán el adjetivo predicativo y el adverbio son morfológicamente idénticos y no se declinan. Solo la posición sintáctica los distingue.']
];
function morfAnaliza(tok){
  const q=String(tok).toLowerCase();
  for(const [re,c,d] of MORF){ if(re.test(q)) return {c:c,d:d}; }
  return null;
}
function stWord(tok0){
  const box=$('#stWord'); if(!box) return;
  const tok=String(tok0||'').replace(/^[^A-Za-zÄÖÜäöüß]+/,'').replace(/[^A-Za-zÄÖÜäöüß]+$/,'');
  if(!tok) return;
  sfx.tap();
  const r=dicResuelve(tok), w=r&&r.w, vb=r&&r.v, fk=r&&r.fk, gl=stGlos(tok), ctx=stContexto(tok);
  const gc=(w&&w.cls==='s')?(w.g==='p'?'f':w.g):'x';
  const mayus=/^[A-ZÄÖÜ]/.test(tok);
  let h='<div class="wcard gen-'+gc+'">';

  /* encabezado: la forma tal como aparece en el texto */
  h+='<div class="wtop"><span class="wde">'+tok+'</span>'+spkBtn(tok)+'</div>';

  /* etiquetas */
  const tags=[];
  if(w) tags.push('<span class="tag k-mod">'+CLS[w.cls]+'</span>');
  else if(fk) tags.push('<span class="tag k-mod">'+fk.c+'</span>');
  else if(vb) tags.push('<span class="tag k-mod">Verbo</span>');
  else if(gl) tags.push('<span class="tag k-mod">Voz glosada en el corpus</span>');
  else if(mayus&&esPropio(tok)) tags.push('<span class="tag k-mod">Nombre propio</span>');
  else if(mayus) tags.push('<span class="tag k-mod">Sustantivo no registrado</span>');
  else { const mf=morfAnaliza(tok); if(mf) tags.push('<span class="tag k-mod">'+mf.c+'</span>'); }
  if(w&&w.cls==='s') tags.push('<span class="tag" style="background:var(--gbg);color:var(--gc)">'+GNAME[w.g]+'</span>');
  if(w&&w.lvl) tags.push('<span class="tag nivtag n-'+w.lvl+'">'+w.lvl+'</span>');
  if(r&&r.via) tags.push('<span class="tag aux">'+r.via+'</span>');
  if(tags.length) h+='<div class="wtags">'+tags.join('')+'</div>';

  /* lema, cuando la forma del texto no coincide con la entrada */
  const lemaTxt=w?w.base:(vb?vb.i:(fk?fk.l:''));
  const lema=w?((w.cls==='s'?'<span class="a">'+w.art+'</span> '+marcaGen(w.base,w.g):w.base)):(vb?vb.i:(fk?fk.l:''));
  if(lema&&dicNorm(lemaTxt)!==dicNorm(tok))
    h+='<p class="wvia">Lema: '+lema+spkBtn((w&&w.cls==='s'?w.art+' ':'')+lemaTxt)
      +(r.via&&r.via.indexOf('compuesto')===0?' · núcleo del compuesto':'')+'</p>';

  /* traducción */
  const trad=w?w.es:(vb?vb.t:(gl?gl[1]:''));
  if(trad) h+=stSec('Traducción','<p style="font-size:.95rem;color:var(--ink)">'+trad+'</p>');

  /* definición: siempre se ofrece una, aunque sea morfológica */
  let def='';
  if(fk&&!w) def=fk.d;
  else if(w&&w.def) def=w.def+(fk?' · '+fk.d:'');
  else if(vb) def='Verbo '+(vb.k==='irr'?'irregular':vb.k==='mod'?'modal':vb.k==='aux'?'auxiliar':'regular')
    +' del repertorio; auxiliar '+(vb.a==='h'?'haben':'sein')+'. '+(vb.n?vb.n.replace(/<[^>]+>/g,''):'');
  else if(gl) def='Voz glosada en el corpus de relatos: <b>'+gl[0]+'</b>, '+gl[1]+'. No tiene entrada propia en el léxico del atelier; abajo se ofrece un uso atestiguado.';
  else if(mayus&&esPropio(tok)) def='Nombre propio. No aparece nunca precedido de determinante en el corpus, que es la prueba distribucional que lo separa del sustantivo común. No se traduce.';
  else {
    const t=(typeof terminacionGen==='function')?terminacionGen(tok):null;
    def=mayus
      ? 'Sustantivo sin entrada en el léxico del atelier. La mayúscula lo identifica como tal'
        +(t?'; la terminación <b>'+t.l+'</b> permite predecir género '+GNAME[t.g]+'.':'; el género no es deducible de la terminación y hay que aprenderlo con el artículo.')
        +' Abajo, un uso atestiguado y la salida a las bases externas.'
      : (function(){ const mf=morfAnaliza(tok);
          return mf ? mf.d+' No tiene entrada propia en el léxico del atelier; abajo, un uso atestiguado y la salida a las bases externas.'
                    : 'No figura en el léxico del atelier. Abajo se ofrece un uso atestiguado en el corpus y la salida a las bases externas.'; })();
  }
  if(r&&r.via&&r.via!=='forma flexionada'&&r.via.indexOf('compuesto')!==0)
    def+=' <b>Análisis:</b> '+r.via+(r.der?', sobre <i>'+r.der+'</i>':'')+'.';
  h+=stSec('Definición','<p>'+def+'</p>');

  /* ejemplo de uso */
  let ej='';
  if(w&&typeof ejDe==='function'&&ejDe(w))
    ej='<div class="wej"><div class="de">'+marcaEj(w,ejDe(w))+spkBtn(ejDe(w))+'</div><div class="es">'+ejEs(w)+'</div></div>';
  else if(fk)
    ej='<div class="wej"><div class="de">'+ejMarca(fk.e,fk.f)+spkBtn(fk.e)+'</div><div class="es">'+fk.s+'</div></div>';
  else if(vb&&vb.e&&vb.e[0])
    ej='<div class="wej"><div class="de">'+ejMarca(vb.e[0],vb.i.slice(0,Math.max(3,vb.i.length-2)))+spkBtn(vb.e[0])+'</div><div class="es">'+((vb.s&&vb.s[0])||'')+'</div></div>';
  if(ej) h+=stSec('Ejemplo de uso',ej);

  /* la frase del propio relato y, si no la hay, una atestiguada en el corpus:
     ninguna consulta queda sin uso documentado */
  const corp=ctx?'':ejCorpus(tok);
  if(ctx) h+=stSec(ej?'En este texto':'Ejemplo de uso · en este texto',
    '<div class="wctx"><div class="de">'+ctx+'</div></div>');
  else if(corp) h+=stSec(ej?'Uso atestiguado en el corpus':'Ejemplo de uso · atestiguado en el corpus',
    '<div class="wctx"><div class="de">'+ejMarca(corp,tok)+spkBtn(corp)+'</div></div>');

  /* formas principales */
  let fm='';
  if(w&&w.cls==='s'){
    fm+='<div class="kv2"><span>Nominativo</span><b>'+w.art+' '+w.base+'</b></div>'
      +'<div class="kv2"><span>Plural</span><b>'+(w.pl&&w.pl!=='-'?'die '+w.pl:'—')+'</b></div>';
    if(typeof genitivo==='function'){ const g2=genitivo(w);
      fm+='<div class="kv2"><span>Genitivo</span><b>'+((w.g==='f'||w.g==='p'?'der ':'des ')+g2.f)+'</b></div>'; }
  } else if(vb){
    fm+='<div class="kv2"><span>Infinitivo</span><b>'+vb.i+'</b></div>'
      +'<div class="kv2"><span>Presente (er)</span><b>'+(vb.PR?vb.PR[2]:'—')+'</b></div>'
      +'<div class="kv2"><span>Pretérito (er)</span><b>'+(vb.PT?vb.PT[2]:'—')+'</b></div>'
      +'<div class="kv2"><span>Participio</span><b>'+(vb.a==='h'?'hat ':'ist ')+vb.pp+'</b></div>';
  } else if(w&&w.cls==='v'){
    fm+='<div class="kv2"><span>Infinitivo</span><b>'+w.base+'</b></div>'
      +'<div class="kv2"><span>Auxiliar</span><b>'+(w.aux==='h'?'haben':'sein')+'</b></div>'
      +(w.prat?'<div class="kv2"><span>Pretérito</span><b>'+w.prat+'</b></div>':'')
      +(w.part?'<div class="kv2"><span>Participio</span><b>'+w.part+'</b></div>':'');
  } else if(w&&w.cls==='a'){
    fm+='<div class="kv2"><span>Comparativo</span><b>'+(w.komp||w.base+'er')+'</b></div>'
      +'<div class="kv2"><span>Superlativo</span><b>am '+(w.sup||w.base+'st')+'en</b></div>';
  }
  if(fm) h+=stSec('Formas','<div class="wforms">'+fm+'</div>');

  /* glosario del relato, cuando aporta algo distinto de la traducción */
  if(gl&&(!w||dicNorm(gl[0])!==dicNorm(w.de)))
    h+=stSec('Glosario del relato','<p><b>'+gl[0]+'</b> · '+gl[1]+'</p>');

  /* acciones */
  const acts=[];
  if(w) acts.push('<button class="btn" id="wFicha">Ficha completa</button>');
  if(vb) acts.push('<button class="btn" id="wVerbo">Conjugación</button>');
  acts.push('<button class="btn" id="wBusca">Buscar en el atelier</button>');
  h+='<div class="wacts">'+acts.join('')+'</div>';
  h+='<div class="dicmini" style="margin-top:12px">'+dicLinks(tok,true)+'</div></div>';

  box.innerHTML='<b>Diccionario del texto</b>'+h;
  const f=$('#wFicha'); if(f) f.onclick=()=>{goMode('palabras');vFicha(w.id);};
  const v2=$('#wVerbo'); if(v2) v2.onclick=()=>{goMode('verbos');openV(vb.id);};
  const b3=$('#wBusca'); if(b3) b3.onclick=()=>{ goDestino('buscar'); navSel='buscar'; sideNav();
    setTimeout(()=>{ const q=$('#dicQ'); if(q){ q.value=tok; dicSearch(); } },60); };
}
/* --- audio con seguimiento --- */
function stToggle(){
  /* tres estados: parado, leyendo y en pausa */
  if(stPlaying&&!stPausa){ sfx.tap(); sayPause(); stPausa=true;
    $('#stPlay').classList.remove('on'); $('#stPlay').innerHTML=ICPLAY;
    $('#stState').textContent='En pausa'; return; }
  if(stPlaying&&stPausa){ sfx.tap(); sayResume(); stPausa=false;
    $('#stPlay').classList.add('on'); $('#stPlay').innerHTML=ICPAUSA;
    $('#stState').textContent='Leyendo…'; return; }
  if(!SPK.ready){ $('#stState').textContent='Este navegador no permite la lectura en voz alta.'; return; }
  const plano=stCur.txt.join('\n\n');
  stPlaying=true; stPausa=false; $('#stPlay').classList.add('on');
  const sb=$('#stStopB'); if(sb) sb.disabled=false;
  $('#stPlay').innerHTML=ICPAUSA;
  $('#stState').textContent='Leyendo…';
  const aviso=vozEstado(); if(aviso){ $('#stState').textContent=aviso; }
  stU=say(plano,stRate,()=>{ stStop(); $('#stState').textContent='Lectura terminada'; },
    idx=>{
      const ws=$$('#stText .w'); let cur=null;
      for(const w of ws){ if(+w.dataset.o<=idx) cur=w; else break; }
      if(cur&&!cur.classList.contains('now')){ ws.forEach(x=>x.classList.remove('now')); cur.classList.add('now');
        const r=cur.getBoundingClientRect(); if(r.top<80||r.bottom>innerHeight-80) cur.scrollIntoView({block:'center',behavior:'smooth'}); }
    });
}
function stStop(){
  stopSay(); stPlaying=false; stPausa=false;
  const b=$('#stPlay'); if(b){ b.classList.remove('on'); b.innerHTML=ICPLAY; }
  const sb=$('#stStopB'); if(sb) sb.disabled=true;
  $$('#stText .w').forEach(x=>x.classList.remove('now'));
}
/* --- ejercicios --- */
function stEjercicios(s){
  $('#stEx').innerHTML='<div class="exblock"><h3>Comprensión del texto</h3>'
   +s.q.map((q,i)=>{const p=q.split('|');
     return '<div class="exq" data-q="'+i+'"><div class="exqt">'+(i+1)+'. '+p[0]+'</div>'
      +'<div class="exopts">'+[1,2,3].map((k,j)=>'<button class="exopt" data-a="'+j+'">'+p[k]+'</button>').join('')+'</div>'
      +'<div class="exfb"></div></div>';}).join('')
   +'</div><div class="exblock"><h3>Corrección</h3><p class="exhint">Cada frase contiene una forma incorrecta marcada. Escriba la forma correcta.</p>'
   +s.korr.map((k,i)=>{const p=k.split('|');
     return '<div class="exk" data-k="'+i+'"><div class="exkt">'+p[0].replace(/~([^~]+)~/,'<em class="bad">$1</em>')+'</div>'
      +'<div class="exkin"><input type="text" placeholder="forma correcta" spellcheck="false"><button class="btn">Comprobar</button></div>'
      +'<div class="exfb"></div></div>';}).join('')+'</div>';
  $('#stEx').querySelectorAll('.exq').forEach(el=>{
    el.querySelector('.exopts').onclick=ev=>{
      const b=ev.target.closest('.exopt'); if(!b||el.classList.contains('done')) return;
      const p=s.q[+el.dataset.q].split('|'), ok=+p[4], mine=+b.dataset.a;
      el.classList.add('done');
      el.querySelectorAll('.exopt').forEach(x=>{const j=+x.dataset.a; if(j===ok)x.classList.add('ok'); else if(j===mine)x.classList.add('no');});
      el.querySelector('.exfb').innerHTML='<div class="fbline '+(mine===ok?'ok':'no')+'">'+(mine===ok?'Correcto. ':'La respuesta correcta es «'+p[ok+1]+'». ')+p[5]+'</div>';
      (mine===ok?sfx.ok:sfx.no)();
    };
  });
  $('#stEx').querySelectorAll('.exk').forEach(el=>{
    const inp=el.querySelector('input'), btn=el.querySelector('button');
    const check=()=>{
      const p=s.korr[+el.dataset.k].split('|');
      const bien=dicNorm(inp.value)===dicNorm(p[1]);
      el.querySelector('.exfb').innerHTML='<div class="fbline '+(bien?'ok':'no')+'">'+(bien?'Correcto: ':'Forma correcta: ')+'<b>'+p[1]+'</b>. '+p[2]+'</div>';
      inp.classList.toggle('ok',bien); inp.classList.toggle('no',!bien);
      (bien?sfx.ok:sfx.no)();
    };
    btn.onclick=check; inp.onkeydown=ev=>{if(ev.key==='Enter')check();};
  });
}
/* --- evaluación tipo test --- */
function stPrueba(s){
  const pool=[];
  s.q.forEach(q=>{const p=q.split('|');pool.push({t:p[0],o:[p[1],p[2],p[3]],c:+p[4],e:p[5]});});
  s.glos.forEach(([de,es],i)=>{
    const otras=s.glos.filter((_,j)=>j!==i).map(x=>x[1]);
    const opts=[es,otras[i%otras.length],otras[(i+1)%otras.length]];
    const idx=i%3; const o=[...opts]; o[0]=opts[(3-idx)%3]; o[idx]=es;
    const uniq=[...new Set(o)]; while(uniq.length<3) uniq.push(otras[uniq.length%otras.length]);
    pool.push({t:'¿Qué significa «'+de+'»?',o:uniq.slice(0,3),c:uniq.indexOf(es),e:'«'+de+'» significa «'+es+'».'});
  });
  stEval={s,pool,i:0,ok:0,res:[]};
  stPruebaQ();
}
function stPruebaQ(){
  const E=stEval, q=E.pool[E.i];
  $('#stOut').innerHTML='<div class="kw"><div class="kbar"><span class="pill2">'+E.s.t+'</span>'
   +'<span class="pill2">Pregunta '+(E.i+1)+' de '+E.pool.length+'</span><span class="pill2">'+E.ok+' aciertos</span>'
   +'<button class="btn" id="evQuit">Salir</button></div>'
   +'<div class="kprog"><i style="width:'+(E.i/E.pool.length*100)+'%"></i></div>'
   +'<div class="kq"><h3>'+q.t+'</h3></div>'
   +'<div class="kgrid">'+q.o.map((o,j)=>'<button class="kopt k'+(j%4)+'" data-a="'+j+'"><span class="sh">'+LETRAS[j%6]+'</span>'+o+'</button>').join('')+'</div>'
   +'<div class="kfb" id="evFb"></div></div>';
  $('#evQuit').onclick=()=>stOpen(ST.indexOf(E.s));
  $('.kgrid').onclick=e=>{
    const b=e.target.closest('[data-a]'); if(!b||$('#evFb').classList.contains('on')) return;
    const a=+b.dataset.a, bien=a===q.c;
    if(bien){E.ok++;sfx.ok();} else sfx.no();
    E.res.push({t:q.t,mine:q.o[a],c:q.o[q.c],ok:bien,e:q.e});
    $$('.kopt').forEach(x=>{const j=+x.dataset.a; if(j===q.c)x.classList.add('win'); else x.classList.add('dim');});
    const fb=$('#evFb'); fb.className='kfb '+(bien?'ok':'no')+' on';
    fb.innerHTML='<div><b>'+(bien?'Correcto':'La respuesta correcta es «'+q.o[q.c]+'»')+'</b>'+q.e
      +'<div style="margin-top:12px"><button class="btn pri" id="evNext">'+(E.i+1<E.pool.length?'Siguiente':'Ver resultado')+'</button></div></div>';
    $('#evNext').onclick=()=>{E.i++; if(E.i<E.pool.length) stPruebaQ(); else stPruebaFin();};
  };
}
function stPruebaFin(){
  const E=stEval, pct=Math.round(E.ok/E.pool.length*100);
  const col=pct>=80?'var(--ok)':pct>=50?'var(--c-mix)':'var(--no)';
  if(pct>=80) sfx.win();
  $('#stOut').innerHTML='<div class="kw"><div class="kres">'
   +'<div class="ring" style="background:conic-gradient('+col+' '+pct*3.6+'deg, var(--line) 0)"><div style="width:120px;height:120px;border-radius:50%;background:var(--card);display:grid;place-items:center"><b>'+pct+'%</b></div></div>'
   +'<h3>'+E.ok+' de '+E.pool.length+' correctas</h3><p>Evaluación de «'+E.s.t+'» · nivel '+E.s.lvl+'</p>'
   +'<div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap">'
   +'<button class="btn pri" id="evAgain">Repetir</button><button class="btn" id="evBack">Volver al texto</button>'
   +btnPDF('evPdf')+mdbBtn(MDB.base+(MDB.lvl[E.s.lvl]||MDB.pdf),'Repaso '+E.s.lvl)+'</div>'
   +'<div class="krev"><h4>Revisión</h4>'+E.res.map(r=>'<div class="it"><b>'+r.t+'</b><span>Su respuesta: '+r.mine+' · Correcta: <code>'+r.c+'</code></span><div style="margin-top:5px;color:var(--ink2)">'+r.e+'</div></div>').join('')+'</div>'
   +'</div></div>';
  $('#evAgain').onclick=()=>stPrueba(E.s);
  $('#evBack').onclick=()=>stOpen(ST.indexOf(E.s));
  $('#evPdf').onclick=()=>stPDFEval(E);
}
/* --- PDF --- */
function imprimir(html){
  $('#printArea').innerHTML=html;
  document.body.classList.add('printing');
  setTimeout(()=>{ window.print(); setTimeout(()=>document.body.classList.remove('printing'),300); },60);
}
const pHead=(t,st2)=>'<div class="phead"><div class="pbrand">Deutsch im Allgemeinen Atelier</div><h1>'+t+'</h1><p>'+st2+'</p></div>';
function stPDF(s){
  imprimir(pHead(s.t,'Nivel '+s.lvl+' · '+s.res)
   +'<h2>Texto</h2>'+s.txt.map(p=>'<p>'+p+'</p>').join('')
   +'<h2>Glosario</h2><table>'+s.glos.map(([a,b])=>'<tr><td><b>'+a+'</b></td><td>'+b+'</td></tr>').join('')+'</table>'
   +'<h2>Comprensión</h2><ol>'+s.q.map(q=>{const p=q.split('|');
       return '<li>'+p[0]+'<div class="popts">a) '+p[1]+' &nbsp; b) '+p[2]+' &nbsp; c) '+p[3]+'</div></li>';}).join('')+'</ol>'
   +'<h2>Corrección</h2><ol>'+s.korr.map(k=>{const p=k.split('|');
       return '<li>'+p[0].replace(/~([^~]+)~/,'<u>$1</u>')+' <span class="pline">→ ______________</span></li>';}).join('')+'</ol>'
   +'<div class="pbreak"></div><h2>Soluciones</h2><ol>'+s.q.map(q=>{const p=q.split('|');return '<li>'+p[+p[4]+1]+' — '+p[5]+'</li>';}).join('')+'</ol>'
   +'<ol>'+s.korr.map(k=>{const p=k.split('|');return '<li><b>'+p[1]+'</b> — '+p[2]+'</li>';}).join('')+'</ol>');
}
function stPDFEval(E){
  imprimir(pHead('Evaluación · '+E.s.t,'Nivel '+E.s.lvl+' · resultado: '+E.ok+' de '+E.pool.length+' ('+Math.round(E.ok/E.pool.length*100)+' %)')
   +'<ol>'+E.res.map(r=>'<li><b>'+r.t+'</b><br>Respuesta dada: '+r.mine+' · Correcta: '+r.c+'<br><i>'+r.e+'</i></li>').join('')+'</ol>');
}

/* Simulacros · bloque 1 */
const PRUEF=[].concat(PRUEF1,PRUEF2,PRUEF3);
const GOETHE={A1:'https://www.goethe.de/ins/co/es/spr/prf/gzsd1.cfm',
 A2:'https://www.goethe.de/ins/co/es/spr/prf/gzsd2.cfm',
 B1:'https://www.goethe.de/ins/co/es/spr/prf/gzb1.cfm',
 B2:'https://www.goethe.de/ins/co/es/spr/prf/gzb2.cfm',
 C1:'https://www.goethe.de/ins/co/es/spr/prf/gzc1.cfm',
 C2:'https://www.goethe.de/ins/co/es/spr/prf/gzc2.cfm'};
const GOETHEALL='https://www.goethe.de/ins/co/es/spr/prf.html';
const TESTDAF='https://www.testdaf.de/';
const DESTREZAS=[['lesen','Leseverstehen','Comprensión lectora'],
                 ['hoeren','Hörverstehen','Comprensión auditiva'],
                 ['schreiben','Schriftlicher Ausdruck','Expresión escrita'],
                 ['sprechen','Mündlicher Ausdruck','Expresión oral']];
const btnPDF=(id,txt)=>'<button class="btn rojo" id="'+id+'"><svg viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/></svg>'+(txt||'Ver en PDF')+'</button>';

/* Escucha auténtica anclada por nivel. Las preguntas puntuables siguen
   refiriéndose a la transcripción propia: este material es el entrenamiento
   de oído del nivel, no el ítem calificado.                                  */
const HOER={
 A1:{f:'Nicos Weg · DW',t:'Nicos Weg A1 · película completa',y:'4-eDoThe6qo',
   d:'Diálogos de supervivencia a velocidad reducida, con subtítulos alemanes activables. Es la escucha calibrada para A1.'},
 A2:{f:'Nicos Weg · DW',t:'Nicos Weg A2 · película completa',y:'Lg5P2w_Ro1c',
   d:'Pasado narrativo, dativo y verbos con preposición en habla continua. Escucha calibrada para A2.'},
 B1:{f:'Nicos Weg · DW',t:'Nicos Weg B1 · película completa',y:'LkufozluseI',
   d:'Habla casi natural, registro laboral y subordinación. Escucha calibrada para B1.'},
 B2:{f:'DW',t:'Das Video-Thema (B2/C1)',pl:'PL5113EDF7E1116D32',
   d:'Reportajes de redacción con transcripción disponible. Léxico periodístico sin simplificar.'},
 C1:{f:'DW',t:'Deutsche Sprache (B2/C1)',pl:'PLs7zUO7VPyJ7CNZY5CSFE0drddtUgx4sG',
   d:'Serie metalingüística de registro elevado, idónea para la toma de notas y el resumen.'},
 C2:{f:'DW',t:'Deutsch lernen mit Tagesnachrichten',pl:'PLOixzgWxGZAlkeZbFvKuGAYBO5UyrYUlA',
   d:'Actualidad diaria a velocidad íntegra. A este nivel el ejercicio es sintetizar, no descifrar.'}
};
function hoerAncla(lvl){
  const v=HOER[lvl]; if(!v) return '';
  const mini=ytMini(v);
  return '<div class="hoerbox">'
   +(mini?'<a class="immthumb sm" href="'+ytUrl(v)+'" target="_blank" rel="noopener" style="background-image:url('+mini+')"><span class="pl"><svg viewBox="0 0 24 24"><path d="m8 5 12 7-12 7z"/></svg></span></a>':'')
   +'<div><span class="immtag">Escucha auténtica · '+v.f+'</span><b>'+v.t+'</b>'
   +'<p>'+v.d+'</p>'
   +'<div class="immacts"><a class="btn pri" href="'+ytUrl(v)+'" target="_blank" rel="noopener">Escuchar en YouTube ↗</a>'
   +(SERVIDO?'<button class="btn" id="hoerEmb">Reproducir aquí</button>':'')+'</div></div>'
   +'<div id="hoerFrame" class="immframe" hidden></div></div>';
}
let EX=null;

function exOpen(k){
  stStop();
  const P=PRUEF.find(x=>x.lvl===k)||PRUEF[0];
  const n=NIV[NIVI[P.lvl]];
  const fila=(id,t,es)=>{const d=P[id]; if(!d) return '';
    const nq=(d.teile||[]).reduce((a,t2)=>a+((t2.q||[]).length),0);
    return '<tr><td><b>'+t+'</b><br><small>'+es+'</small></td><td>'+(d.teile||[]).length+' partes</td>'
      +'<td>'+(nq?nq+' preguntas':'tarea de producción')+'</td><td>'+(d.min||'—')+' min</td></tr>';};
  $('#exOut').innerHTML=nivSel(P.lvl,'data-ex')
   +'<div class="exhead" style="--sc:'+n.c+'"><span class="lv">'+P.lvl+' · '+n.n+'</span>'
   +'<h2>Pon a prueba tu nivel</h2><p>'+P.desc+'</p>'
   +'<div class="exref"><b>Formato de referencia:</b> '+P.ref+'</div></div>'
   +'<table class="endtable extab"><tr><th>Destreza</th><th>Estructura</th><th>Ítems</th><th>Tiempo</th></tr>'
   +DESTREZAS.map(([id,t,es])=>fila(id,t,es)).join('')+'</table>'
   +'<div class="exnota"><b>Cómo se califica.</b> Las dos comprensiones se corrigen automáticamente. La expresión escrita se evalúa por extensión, cobertura de los puntos exigidos y presencia de los recursos léxicos y conectores propios del nivel. La expresión oral se autoevalúa contra una lista de criterios y un modelo, porque ninguna corrección automática sustituye a un examinador. El resultado global pondera las cuatro destrezas al veinticinco por ciento; se considera superado a partir de sesenta.</div>'
   +'<div class="exacts"><button class="btn pri" id="exGo">Empezar el simulacro</button>'
   +btnPDF('exPdf0','Ver el examen en PDF')+'</div>'
   +'<p class="exlinks">Convocatorias y modelos oficiales: <a href="'+(GOETHE[P.lvl]||GOETHEALL)+'" target="_blank" rel="noopener">Goethe-Zertifikat '+P.lvl+'</a> · <a href="'+TESTDAF+'" target="_blank" rel="noopener">TestDaF</a></p>';
  $$('#exOut [data-ex]').forEach(b=>b.onclick=()=>{sfx.nav();exOpen(b.dataset.ex);});
  nivSelWire('#exOut',()=>exOpen(P.lvl));
  $('#exGo').onclick=()=>exStart(P);
  $('#exPdf0').onclick=()=>exPDFHoja(P);
}

function exStart(P){
  EX={P,d:0,resp:{},plays:{},nota:{},fallos:[],texto:'',check:[]};
  sfx.nav(); exDestreza();
}
const exBar=()=>'<div class="exbar"><span class="pill2">'+EX.P.lvl+' · '+EX.P.ref+'</span>'
  +DESTREZAS.map(([id,t],i)=>'<button class="exstep'+(i===EX.d?' on':'')+(EX.nota[id]!=null?' done':'')+'" data-dest="'+i+'">'+t+'</button>').join('')
  +'<button class="btn" id="exQuit">Salir</button></div>';

function exDestreza(){
  const [id]=DESTREZAS[EX.d];
  if(id==='lesen'||id==='hoeren') exComp(id);
  else if(id==='schreiben') exSchreiben();
  else exSprechen();
  const q=$('#exQuit'); if(q) q.onclick=()=>{stopSay();exOpen(EX.P.lvl);};
  $$('#exOut [data-dest]').forEach(b=>b.onclick=()=>{
    const i=+b.dataset.dest; if(i===EX.d) return;
    stopSay(); clearInterval(exT); EX.d=i; sfx.nav(); exDestreza(); window.scrollTo({top:0,behavior:'smooth'});
  });
  const fin=$('#exFin'); if(fin) fin.onclick=()=>{
    DESTREZAS.forEach(([id])=>{ if(EX.nota[id]==null) EX.nota[id]=0; });
    exFin();
  };
}

/* ---------- comprensión lectora y auditiva ---------- */
function exComp(id){
  const P=EX.P, D=P[id], oir=id==='hoeren';
  let n=0;
  const html=D.teile.map((t,ti)=>{
    const cuerpo=oir
      ? '<div class="audiobox"><button class="pbtn" data-oir="'+ti+'" title="Reproducir o pausar">'+ICPLAY+'</button>'
        +'<button class="sbtn2" data-oirs="'+ti+'" title="Detener" disabled>'+ICSTOP+'</button>'
        +'<div class="pinfo"><b>Audio</b><span id="exSt'+ti+'">Puede escucharlo dos veces</span></div>'
        +volUI()
        +'<span class="pill2" id="exPl'+ti+'">0 / 2</span>'
        +'<button class="btn" data-tr="'+ti+'">Ver la transcripción</button></div>'
        +'<div class="transcript" id="exTr'+ti+'" hidden><h5>Transcripción</h5><p>'+t.audio.replace(/\n\n/g,'</p><p>')+'</p></div>'
      : '<div class="extext">'+t.text.split('\n\n').map(p=>'<p>'+p+'</p>').join('')+'</div>';
    return '<div class="exteil"><div class="exth"><span class="exn">'+(ti+1)+'</span><div><b>'+t.tit+'</b><span>'+t.anleitung+'</span></div></div>'
     +cuerpo
     +'<div class="exqs">'+t.q.map(q=>{const p=q.split('|'),k=id+':'+(n++);
        return '<div class="exq" data-q="'+k+'"><div class="exqt">'+p[0]+'</div>'
         +'<div class="exopts">'+[1,2,3].map((c,j)=>'<button class="exopt" data-a="'+j+'">'+p[c]+'</button>').join('')+'</div>'
         +'<div class="exfb"></div></div>';}).join('')+'</div></div>';
  }).join('');
  const aviso=oir?vozEstado():'';
  $('#exOut').innerHTML=exBar()
   +'<div class="exwrap"><h2 class="exh2">'+DESTREZAS[EX.d][1]+'</h2>'
   +'<p class="exsub">'+DESTREZAS[EX.d][2]+' · '+(D.min||'—')+' minutos · '+D.teile.reduce((a,t)=>a+t.q.length,0)+' preguntas</p>'
   +(oir?hoerAncla(P.lvl):'')
   +(aviso?'<div class="fbline no" style="margin-bottom:14px"><b>Voz sintética no disponible.</b> '+aviso+' Puede leer la transcripción con el botón de cada parte y responder igualmente.</div>':'')
   +html
   +'<div class="exacts"><button class="btn pri" id="exNext">Corregir y continuar</button>'
   +'<button class="btn" id="exFin">Terminar y calificar</button></div></div>';

  $$('.exopts').forEach(el=>{
    el.onclick=ev=>{const b=ev.target.closest('.exopt'); if(!b) return;
      const box=b.closest('.exq'); if(box.classList.contains('done')) return;
      box.querySelectorAll('.exopt').forEach(x=>x.classList.toggle('sel',x===b));
      EX.resp[box.dataset.q]=+b.dataset.a; sfx.tap();};
  });
  if(oir){
    EX.oir=null;
    const exFin2=ti=>{ const b=$('[data-oir="'+ti+'"]'), sb=$('[data-oirs="'+ti+'"]');
      if(b){ b.classList.remove('on'); b.innerHTML=ICPLAY; }
      if(sb) sb.disabled=true; EX.oir=null; };
    $$('[data-oir]').forEach(b=>{
      const ti=+b.dataset.oir, sb=$('[data-oirs="'+ti+'"]');
      b.onclick=()=>{
        /* con la reproducción en curso el botón alterna pausa y reanudación:
           una pausa no consume ninguna de las dos escuchas permitidas */
        if(EX.oir===ti&&sayActivo()){
          if(sayPausado()){ sayResume(); b.classList.add('on'); b.innerHTML=ICPAUSA; $('#exSt'+ti).textContent='Reproduciendo…'; }
          else { sayPause(); b.classList.remove('on'); b.innerHTML=ICPLAY; $('#exSt'+ti).textContent='En pausa'; }
          sfx.tap(); return;
        }
        const v=EX.plays[ti]||0;
        if(v>=2){ $('#exSt'+ti).textContent='Ya lo ha escuchado dos veces'; sfx.no(); return; }
        if(!SPK.ready){ $('#exSt'+ti).textContent='Este navegador no permite la lectura en voz alta'; return; }
        if(EX.oir!=null&&EX.oir!==ti) exFin2(EX.oir);
        EX.plays[ti]=v+1; $('#exPl'+ti).textContent=EX.plays[ti]+' / 2';
        EX.oir=ti; $('#exSt'+ti).textContent='Reproduciendo…';
        b.classList.add('on'); b.innerHTML=ICPAUSA; if(sb) sb.disabled=false;
        say(P.hoeren.teile[ti].audio,.92,()=>{ exFin2(ti);
          $('#exSt'+ti).textContent=EX.plays[ti]>=2?'Sin más reproducciones':'Puede escucharlo una vez más'; });
      };
      if(sb) sb.onclick=()=>{ if(EX.oir!==ti) return; sfx.tap(); stopSay(); exFin2(ti);
        $('#exSt'+ti).textContent=EX.plays[ti]>=2?'Sin más reproducciones':'Puede escucharlo una vez más'; };
    });
    volWire();
  }
  $$('#exOut [data-tr]').forEach(b=>b.onclick=()=>{
    const t2=$('#exTr'+b.dataset.tr); if(!t2) return;
    t2.hidden=!t2.hidden; b.textContent=t2.hidden?'Ver la transcripción':'Ocultar la transcripción'; sfx.tap();
  });
  const he=$('#hoerEmb');
  if(he) he.onclick=()=>{
    const f=$('#hoerFrame'), v=HOER[P.lvl];
    if(!f.hidden){ f.hidden=true; f.innerHTML=''; he.textContent='Reproducir aquí'; return; }
    f.innerHTML='<iframe referrerpolicy="strict-origin-when-cross-origin" src="'+ytSrc(v)+'" title="'+v.t+'" loading="lazy" allowfullscreen allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"></iframe>';
    f.hidden=false; he.textContent='Cerrar'; sfx.tap();
  };
  $('#exNext').onclick=()=>exCorrige(id);
}
function exCorrige(id){
  const D=EX.P[id]; let n=0, ok=0, tot=0;
  D.teile.forEach((t,ti)=>{
    if(id==='hoeren'){ const tr=$('#exTr'+ti); if(tr) tr.hidden=false; }
    t.q.forEach(q=>{
      const p=q.split('|'), k=id+':'+(n++), mine=EX.resp[k], c=+p[4];
      const box=$('[data-q="'+k+'"]'); tot++;
      box.classList.add('done');
      box.querySelectorAll('.exopt').forEach(x=>{const j=+x.dataset.a;
        if(j===c) x.classList.add('ok'); else if(j===mine) x.classList.add('no');});
      const bien=mine===c; if(bien) ok++;
      else EX.fallos.push({d:DESTREZAS[EX.d][1],q:p[0],mine:mine==null?'sin responder':p[mine+1],c:p[c+1],e:p[5]});
      box.querySelector('.exfb').innerHTML='<div class="fbline '+(bien?'ok':'no')+'">'
        +(bien?'Correcto. ':'La respuesta correcta es «'+p[c+1]+'». ')+p[5]+'</div>';
    });
  });
  EX.nota[id]=tot?Math.round(ok/tot*100):0;
  (EX.nota[id]>=60?sfx.ok:sfx.no)();
  const b=$('#exNext');
  const sig=DESTREZAS[EX.d+1];
  b.textContent=ok+' de '+tot+(sig?' · continuar con '+sig[1]:' · ver el resultado');
  b.onclick=()=>{stopSay(); if(sig){EX.d++;exDestreza();window.scrollTo({top:0,behavior:'smooth'});} else exFin();};
}

/* ---------- expresión escrita ---------- */
function exSchreiben(){
  const P=EX.P, D=P.schreiben;
  $('#exOut').innerHTML=exBar()
   +'<div class="exwrap"><h2 class="exh2">Schriftlicher Ausdruck</h2>'
   +'<p class="exsub">Expresión escrita · '+(D.min||'—')+' minutos</p>'
   +D.teile.map((t,ti)=>'<div class="exteil"><div class="exth"><span class="exn">'+(ti+1)+'</span><div><b>'+t.tit+'</b><span>'+t.anleitung+'</span></div></div>'
     +'<div class="exaufg">'+t.aufgabe.replace(/\n\n/g,'<br><br>')+'</div>'
     +(t.punkte?'<ul class="expunkte">'+t.punkte.map(p=>'<li>'+p+'</li>').join('')+'</ul>':'')
     +'<textarea class="exta" id="exTa'+ti+'" rows="9" spellcheck="false" placeholder="Escriba aquí su texto en alemán. Mínimo '+t.minw+' palabras."></textarea>'
     +'<div class="acbar"><span class="acn" id="exW'+ti+'">0 palabras · mínimo '+t.minw+'</span></div>'
     +'<div id="exSf'+ti+'"></div></div>').join('')
   +'<div class="exacts"><button class="btn pri" id="exNext">Evaluar y continuar</button>'
   +'<button class="btn" id="exFin">Terminar y calificar</button></div></div>';
  D.teile.forEach((t,ti)=>{
    const ta=$('#exTa'+ti);
    ta.oninput=()=>{const w=ta.value.trim()?ta.value.trim().split(/\s+/).length:0;
      const el=$('#exW'+ti); el.textContent=w+' palabras · mínimo '+t.minw;
      el.classList.toggle('bien',w>=t.minw);};
  });
  $('#exNext').onclick=()=>exCorrigeSchreiben();
}
const exNorm=s=>s.toLowerCase().replace(/ä/g,'a').replace(/ö/g,'o').replace(/ü/g,'u').replace(/ß/g,'ss');
const KONN=['weil','denn','deshalb','trotzdem','obwohl','außerdem','allerdings','jedoch','dennoch','zwar','einerseits','andererseits','zunächst','schließlich','darüber hinaus','infolgedessen','folglich','somit','zudem','hingegen','während','nachdem','sodass','damit','falls','sofern'];
function exCorrigeSchreiben(){
  const D=EX.P.schreiben; let suma=0;
  D.teile.forEach((t,ti)=>{
    const txt=$('#exTa'+ti).value.trim(), n=exNorm(txt);
    const pal=txt?txt.split(/\s+/).length:0;
    const cExt=Math.min(1,pal/t.minw);
    const hay=(t.clave||[]).filter(k=>n.indexOf(exNorm(k))>=0);
    const cLex=(t.clave||[]).length?hay.length/t.clave.length:1;
    const kon=KONN.filter(k=>n.indexOf(k)>=0);
    const cKon=Math.min(1,kon.length/(EX.P.lvl==='A1'?1:EX.P.lvl==='A2'?2:EX.P.lvl==='B1'?3:4));
    const parr=txt.split(/\n\s*\n/).filter(Boolean).length;
    const frases=txt.split(/[.!?]+/).map(s=>s.trim()).filter(x=>x.split(/\s+/).length>2).length;
    const cEst=Math.min(1,(parr>=2?.5:parr*.25)+(frases>=(t.minw>100?8:4)?.5:frases/((t.minw>100?8:4)*2)));
    const nota=Math.round(cExt*35+cLex*30+cKon*15+cEst*20);
    suma+=nota;
    const col=nota>=80?'ok':nota>=55?'mid':'no';
    $('#exSf'+ti).innerHTML='<div class="acres '+col+'"><div class="acscore"><b>'+nota+'</b><span>/ 100</span></div>'
     +'<div class="acjud"><b>'+(nota>=80?'Respuesta suficiente para el nivel.':nota>=55?'Respuesta incompleta: cumple en parte.':'Respuesta insuficiente para el nivel.')+'</b>'
     +'<div class="acbars">'+[['Extensión',cExt],['Recursos exigidos',cLex],['Conectores',cKon],['Estructura',cEst]]
        .map(([l,v])=>'<div class="acb"><span>'+l+'</span><i><u style="width:'+Math.round(v*100)+'%"></u></i><em>'+Math.round(v*100)+' %</em></div>').join('')
     +'</div></div></div>'
     +'<div class="acdet">'
     +(hay.length?'<div class="fbline ok"><b>Recursos empleados:</b> '+hay.join(' · ')+'</div>':'')
     +((t.clave||[]).filter(k=>!hay.includes(k)).length?'<div class="fbline no"><b>No aparecen:</b> '+(t.clave||[]).filter(k=>!hay.includes(k)).join(' · ')+'</div>':'')
     +(kon.length?'<div class="fbline ok"><b>Conectores detectados:</b> '+kon.join(' · ')+'</div>':'<div class="fbline no">No se ha detectado ningún conector: el texto es una sucesión de frases sin trabazón.</div>')
     +'<details class="muster"><summary>Ver el texto modelo</summary><p>'+t.muster.replace(/\n\n/g,'</p><p>')+'</p>'+spkBtn(t.muster)+'</details></div>';
    EX.texto+=(EX.texto?'\n\n':'')+'['+t.tit+']\n'+txt;
  });
  EX.nota.schreiben=Math.round(suma/D.teile.length);
  (EX.nota.schreiben>=60?sfx.ok:sfx.no)();
  const b=$('#exNext');
  const sig=DESTREZAS[EX.d+1];
  b.textContent=sig?'Continuar con '+sig[1]:'Ver el resultado';
  b.onclick=()=>{ if(sig){EX.d++;exDestreza();window.scrollTo({top:0,behavior:'smooth'});} else exFin(); };
}

/* ---------- expresión oral ---------- */
let exT=null;
function exSprechen(){
  const D=EX.P.sprechen;
  $('#exOut').innerHTML=exBar()
   +'<div class="exwrap"><h2 class="exh2">Mündlicher Ausdruck</h2>'
   +'<p class="exsub">Expresión oral · '+(D.min||'—')+' minutos · autoevaluación contra criterios y modelo</p>'
   +D.teile.map((t,ti)=>'<div class="exteil"><div class="exth"><span class="exn">'+(ti+1)+'</span><div><b>'+t.tit+'</b><span>'+t.anleitung+'</span></div></div>'
     +'<div class="exaufg">'+t.aufgabe+spkBtn(t.aufgabe)+'</div>'
     +(t.karten?'<div class="karten">'+t.karten.map(k=>'<span>'+k+'</span>').join('')+'</div>':'')
     +'<div class="crono"><button class="btn" data-cron="'+ti+'" data-seg="'+(t.seg||90)+'">Cronómetro '+(t.seg||90)+' s</button>'
       +'<span class="cronn" id="exCr'+ti+'">'+(t.seg||90)+'</span>'
       +'<span class="cronh">Hable en voz alta durante ese tiempo sin detenerse. Grábese si puede.</span></div>'
     +'<div class="checkbox"><h5>Autoevaluación</h5>'+t.check.map((c,ci)=>
        '<label><input type="checkbox" data-ck="'+ti+'-'+ci+'"><span>'+c+'</span></label>').join('')+'</div>'
     +'<details class="muster"><summary>Ver la intervención modelo</summary><p>'+t.muster+'</p>'+spkBtn(t.muster)+'</details>'
     +'</div>').join('')
   +'<div class="exacts"><button class="btn pri" id="exNext">Cerrar el simulacro y ver el resultado</button></div></div>';
  $$('[data-cron]').forEach(b=>b.onclick=()=>{
    clearInterval(exT); const ti=+b.dataset.cron; let s=+b.dataset.seg;
    const el=$('#exCr'+ti); el.textContent=s; el.classList.add('run'); sfx.tick();
    exT=setInterval(()=>{ s--; el.textContent=s; if(s<=5) sfx.tick();
      if(s<=0){clearInterval(exT);el.classList.remove('run');sfx.win();el.textContent='fin';} },1000);
  });
  $('#exNext').onclick=()=>{
    clearInterval(exT);
    const cks=$$('[data-ck]'); const marcados=cks.filter(x=>x.checked).length;
    EX.check=cks.map(x=>x.checked);
    EX.nota.sprechen=cks.length?Math.round(marcados/cks.length*100):0;
    exFin();
  };
}

/* ---------- resultado ---------- */
function exFin(){
  stopSay();
  const N=EX.nota, P=EX.P;
  DESTREZAS.forEach(([id])=>{ if(N[id]==null) N[id]=0; });
  const tot=Math.round((N.lesen+N.hoeren+N.schreiben+N.sprechen)/4);
  const apto=tot>=60;
  if(apto) sfx.win(); else sfx.no();
  EXDONE[P.lvl]=true;
  const col=tot>=80?'var(--ok)':tot>=60?'var(--c-mix)':'var(--no)';
  const juicio=tot>=90?'Resultado excelente: el nivel está consolidado con margen.'
    :tot>=75?'Resultado sólido: el nivel se domina, con puntos menores por pulir.'
    :tot>=60?'Aprobado ajustado: conviene reforzar la destreza más floja antes de presentarse.'
    :tot>=40?'No superado. El itinerario del nivel sigue siendo necesario.'
    :'No superado con claridad. Vuelva al itinerario desde la primera unidad.';
  const floja=DESTREZAS.map(([id,t])=>[t,N[id]]).sort((a,b)=>a[1]-b[1])[0];
  $('#exOut').innerHTML='<div class="kw"><div class="kres">'
   +'<div class="ring" style="background:conic-gradient('+col+' '+tot*3.6+'deg, var(--line) 0)"><div style="width:120px;height:120px;border-radius:50%;background:var(--card);display:grid;place-items:center"><b>'+tot+'</b></div></div>'
   +'<h3>'+(apto?'Superado':'No superado')+' · '+P.lvl+'</h3><p>'+juicio+' Referencia: '+P.ref+'.</p>'
   +'<div class="exnotas">'+DESTREZAS.map(([id,t,es])=>{
       const v=N[id]||0, c2=v>=80?'ok':v>=60?'mid':'no';
       return '<div class="exnota1 '+c2+'"><b>'+v+'</b><span>'+t+'</span><small>'+es+'</small></div>';}).join('')+'</div>'
   +'<p class="exfloja">Destreza más débil: <b>'+floja[0]+'</b> ('+floja[1]+'). Es por donde conviene empezar la revisión.</p>'
   +'<div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap">'
   +'<button class="btn pri" id="exAgain">Repetir</button>'
   +'<button class="btn" id="exNiv">Volver al itinerario '+P.lvl+'</button>'
   +btnPDF('exPdf','Ver el resultado en PDF')+'</div>'
   +(EX.fallos.length?'<div class="krev"><h4>Revisión de los errores</h4>'+EX.fallos.map(f=>
      '<div class="it"><b>'+f.q+'</b><span>'+f.d+' · su respuesta: '+f.mine+' · correcta: <code>'+f.c+'</code></span>'
      +'<div style="margin-top:5px;color:var(--ink2)">'+f.e+'</div></div>').join('')+'</div>':'')
   +'</div></div>';
  $('#exAgain').onclick=()=>exStart(P);
  $('#exNiv').onclick=()=>{goMode('nivel');nvOpen(P.lvl);};
  $('#exPdf').onclick=()=>exPDFRes(tot,apto);
}

/* ---------- PDF ---------- */
function exPDFHoja(P){
  const comp=(id,t)=>{const D=P[id]; if(!D) return '';
    return '<h2>'+t+'</h2>'+D.teile.map((x,i)=>'<h3>'+x.tit+'</h3><p><i>'+x.anleitung+'</i></p>'
      +(x.text?x.text.split('\n\n').map(p=>'<p>'+p+'</p>').join(''):'')
      +(x.audio?'<p><i>Texto de audio (no leer antes de la escucha):</i></p>'+x.audio.split('\n\n').map(p=>'<p>'+p+'</p>').join(''):'')
      +'<ol>'+x.q.map(q=>{const p=q.split('|');
         return '<li>'+p[0]+'<div class="popts">a) '+p[1]+' &nbsp; b) '+p[2]+' &nbsp; c) '+p[3]+'</div></li>';}).join('')+'</ol>').join('');};
  const prod=(id,t)=>{const D=P[id]; if(!D) return '';
    return '<h2>'+t+'</h2>'+D.teile.map(x=>'<h3>'+x.tit+'</h3><p><i>'+x.anleitung+'</i></p><p>'+x.aufgabe+'</p>'
      +(x.punkte?'<ul>'+x.punkte.map(p=>'<li>'+p+'</li>').join('')+'</ul>':'')
      +(x.karten?'<p><b>'+x.karten.join(' · ')+'</b></p>':'')
      +new Array(x.minw?8:4).fill('<p class="pline">_________________________________________________________________</p>').join('')).join('');};
  const sol=(id,t)=>{const D=P[id]; if(!D||!D.teile[0].q) return '';
    let n=0;
    return '<h3>'+t+'</h3><ol>'+D.teile.map(x=>x.q.map(q=>{const p=q.split('|');n++;
      return '<li><b>'+p[+p[4]+1]+'</b> — '+p[5]+'</li>';}).join('')).join('')+'</ol>';};
  imprimir(pHead('Simulacro '+P.lvl,P.ref+' · '+P.desc)
   +comp('lesen','Leseverstehen')+'<div class="pbreak"></div>'
   +comp('hoeren','Hörverstehen')+'<div class="pbreak"></div>'
   +prod('schreiben','Schriftlicher Ausdruck')+prod('sprechen','Mündlicher Ausdruck')
   +'<div class="pbreak"></div><h2>Soluciones</h2>'+sol('lesen','Leseverstehen')+sol('hoeren','Hörverstehen')
   +'<h3>Modelos de producción</h3>'+(P.schreiben?P.schreiben.teile.map(x=>'<p><b>'+x.tit+'</b><br>'+x.muster+'</p>').join(''):'')
   +(P.sprechen?P.sprechen.teile.map(x=>'<p><b>'+x.tit+'</b><br>'+x.muster+'</p>').join(''):''));
}
function exPDFRes(tot,apto){
  const P=EX.P,N=EX.nota;
  imprimir(pHead('Resultado del simulacro '+P.lvl,P.ref+' · '+(apto?'superado':'no superado')+' · '+tot+' sobre 100')
   +'<h2>Puntuación por destreza</h2><table>'+DESTREZAS.map(([id,t,es])=>'<tr><td><b>'+t+'</b><br>'+es+'</td><td>'+(N[id]||0)+' / 100</td></tr>').join('')+'</table>'
   +'<h2>Texto entregado</h2>'+(EX.texto?EX.texto.split('\n').map(p=>'<p>'+p+'</p>').join(''):'<p>Sin texto.</p>')
   +'<div class="pbreak"></div><h2>Errores de comprensión</h2>'
   +(EX.fallos.length?'<ol>'+EX.fallos.map(f=>'<li><b>'+f.q+'</b><br>'+f.d+' · respuesta dada: '+f.mine+' · correcta: '+f.c+'<br><i>'+f.e+'</i></li>').join('')+'</ol>':'<p>Ninguno.</p>'));
}

/* ===================== INMERSIÓN AUDIOVISUAL ===================== */
/* y  = vídeo de YouTube (identificador)   pl = lista de reproducción
   u  = recurso externo sin incrustación   f  = fuente                */
const DWES='https://learngerman.dw.com/es/nicos-weg/c-47994059';
const DWDE='https://learngerman.dw.com/de/deutsch-lernen/s-9095';
const NL='https://www.nachrichtenleicht.de/';
const EG='https://www.easygerman.org/';
const EGPL='PLk1fjOl39-53GxQIn1Hxdouokf0J0SDpl';
const IMM={
 A1:[
  {f:'Easy German',t:'Super Easy German 1 · presentarse',y:'r94aqLUO0wo',
   d:'Entrevistas de calle con hablantes reales, subtituladas en alemán y en inglés, pero recortadas a lo esencial: nombre, procedencia, edad. Es la primera exposición al alemán espontáneo sin que resulte inabarcable.',
   u:EG,ul:'easygerman.org'},
  {f:'Easy German',t:'Super Easy German · gramática y léxico para principiantes',pl:EGPL,
   d:'Lista oficial de la serie para principiantes absolutos: cada entrega aísla una estructura y la muestra en boca de varios hablantes distintos.',
   u:EG,ul:'easygerman.org'},
  {f:'Nicos Weg · DW',t:'Nicos Weg A1 · película completa',y:'4-eDoThe6qo',
   d:'Los 76 episodios del nivel A1 montados como largometraje, con subtítulos activables en alemán. Nico llega a Alemania sin hablar el idioma: el espectador aprende con él.',
   u:DWES,ul:'Curso A1 en español'},
  {f:'Nicos Weg · DW',t:'Folge 1 · Hallo!',y:'dC6ZGLzdaTs',
   d:'El primer episodio suelto, de dos minutos: saludo, presentación y pregunta por el nombre. Sirve como calentamiento antes de la película entera.',
   u:DWES,ul:'Ver el curso'},
  {f:'DW Deutsch lernen',t:'Serie completa A1–B1',pl:'PLs7zUO7VPyJ5DV1iBRgSw2uDl832n0bLg',
   d:'Lista de reproducción oficial con los tres niveles de Nicos Weg. Permite continuar sin cambiar de recurso cuando se pasa de A1 a A2.',
   u:DWDE,ul:'Portal de DW'},
  {f:'DW',t:'Portal Deutsch lernen',u:DWDE,ul:'Abrir el portal',
   d:'Punto de entrada a todos los cursos gratuitos de Deutsche Welle, con ejercicios interactivos y material descargable por nivel.'}
 ],
 A2:[
  {f:'Easy German',t:'Super Easy German 76 · presentarse (principiantes absolutos)',y:'Yaelm87PTvg',
   d:'Segunda versión de la presentación personal, más extensa y con más variantes de respuesta. Sirve para contrastar registros y detectar fórmulas alternativas.',
   u:EG,ul:'easygerman.org'},
  {f:'Easy German',t:'Super Easy German · serie para principiantes',pl:EGPL,
   d:'La lista completa de la serie, útil para repasar lo visto en A1 mientras se avanza.',
   u:EG,ul:'easygerman.org'},
  {f:'Nicos Weg · DW',t:'Nicos Weg A2 · película completa',y:'Lg5P2w_Ro1c',
   d:'Continuación directa del A1. La trama se complica y aparecen el pasado narrativo, el dativo y los verbos con preposición en contexto natural.',
   u:DWES,ul:'Curso en español'},
  {f:'Nachrichtenleicht',t:'Noticias en lengua sencilla',u:NL,ul:'Leer las noticias',
   d:'Deutschlandfunk publica cada viernes la actualidad en alemán simplificado, con audio y con un diccionario de los términos difíciles. Es el primer contacto realista con la prensa.'},
  {f:'DW Deutsch lernen',t:'Serie completa A1–B1',pl:'PLs7zUO7VPyJ5DV1iBRgSw2uDl832n0bLg',
   d:'La lista oficial de los tres niveles, útil para revisar episodios del A1 mientras se avanza en el A2.',
   u:DWDE,ul:'Portal de DW'},
  {f:'DW',t:'Portal Deutsch lernen',u:DWDE,ul:'Abrir el portal',
   d:'Cursos, ejercicios y podcasts clasificados por nivel.'}
 ],
 B1:[
  {f:'Easy German',t:'Super Easy German 287 · diez minutos de conversación lenta',y:'LwJfk1NUeg4',
   d:'Conversación continuada a velocidad reducida pero con sintaxis natural: subordinadas, partículas modales y muletillas reales. El puente entre el alemán didáctico y el hablado.',
   u:EG,ul:'easygerman.org'},
  {f:'Nicos Weg · DW',t:'Nicos Weg B1 · película completa',y:'LkufozluseI',
   d:'Cierre de la serie. Diálogos a velocidad casi natural, subordinación, Konjunktiv II de cortesía y registro laboral.',
   u:DWES,ul:'Curso en español'},
  {f:'DW',t:'Deutsch lernen mit Tagesnachrichten',pl:'PLOixzgWxGZAlkeZbFvKuGAYBO5UyrYUlA',
   d:'Noticias diarias tratadas como material de clase. Es el puente entre el alemán didáctico y el alemán periodístico real.',
   u:DWDE,ul:'Portal de DW'},
  {f:'Nachrichtenleicht',t:'Wörterbuch de la actualidad',u:'https://www.nachrichtenleicht.de/woerterbuch',ul:'Abrir el diccionario',
   d:'Glosario de los términos que aparecen en las noticias, explicados en alemán sencillo. Excelente para la definición monolingüe.'},
  {f:'Nachrichtenleicht',t:'Noticias en lengua sencilla',u:NL,ul:'Leer las noticias',
   d:'Texto y audio de la semana, con velocidad reducida y sintaxis controlada.'}
 ],
 B2:[
  {f:'Easy German',t:'Easy German · entrevistas de calle',u:EG,ul:'Abrir easygerman.org',
   d:'Contraste de registro: el alemán de la calle frente al de la prensa. A este nivel el ejercicio es identificar qué marcas separan uno de otro.'},
  {f:'DW',t:'Das Video-Thema (B2/C1)',pl:'PL5113EDF7E1116D32',
   d:'Reportajes breves de la redacción de DW con transcripción y ejercicios. El vocabulario es el de la prensa, sin simplificación.',
   u:DWDE,ul:'Portal de DW'},
  {f:'DW',t:'Politik in Deutschland (B2/C1)',pl:'PLs7zUO7VPyJ5-E36PO-T418bxPksqxuoC',
   d:'Serie sobre instituciones, partidos y funcionamiento del Estado alemán. Alimenta directamente el léxico de este nivel.',
   u:DWDE,ul:'Portal de DW'},
  {f:'Nachrichtenleicht',t:'Das Grundgesetz explicado',u:'https://www.nachrichtenleicht.de/das-grundgesetz-100.html',ul:'Abrir la serie',
   d:'Los artículos de la Ley Fundamental comentados en lengua sencilla: contraste útil entre el original jurídico y su paráfrasis.'},
  {f:'DW',t:'Canal Deutsch lernen',u:'https://www.youtube.com/@dwlearngerman',ul:'Abrir el canal',
   d:'Canal oficial con todas las series de aprendizaje ordenadas por nivel.'}
 ],
 C1:[
  {f:'Easy German',t:'Easy German · entrevistas de calle',u:EG,ul:'Abrir easygerman.org',
   d:'Material de campo para el análisis: variación diatópica, elisión, partículas y fenómenos de habla espontánea que ninguna gramática recoge por completo.'},
  {f:'DW',t:'Deutsche Sprache (B2/C1)',pl:'PLs7zUO7VPyJ7CNZY5CSFE0drddtUgx4sG',
   d:'Serie metalingüística: la lengua alemana tomada como objeto de análisis. Registro elevado y terminología propia de la filología.',
   u:DWDE,ul:'Portal de DW'},
  {f:'DW',t:'Das Video-Thema (B2/C1)',pl:'PL5113EDF7E1116D32',
   d:'Reportajes con transcripción íntegra: material idóneo para el resumen y la reformulación académica.',
   u:DWDE,ul:'Portal de DW'},
  {f:'DW',t:'Deutsch lernen mit Tagesnachrichten',pl:'PLOixzgWxGZAlkeZbFvKuGAYBO5UyrYUlA',
   d:'Actualidad diaria a velocidad natural. A este nivel el ejercicio no es entender, sino tomar notas y sintetizar.',
   u:DWDE,ul:'Portal de DW'},
  {f:'DW',t:'Canal Deutsch lernen',u:'https://www.youtube.com/@dwlearngerman',ul:'Abrir el canal',
   d:'Acceso a las series avanzadas y a los archivos de Top-Thema y Video-Thema.'}
 ],
 C2:[
  {f:'Easy German',t:'Easy German · entrevistas de calle',u:EG,ul:'Abrir easygerman.org',
   d:'Corpus oral espontáneo. A este nivel se escucha para describir el uso, no para aprenderlo.'},
  {f:'DW',t:'Deutsche Sprache (B2/C1)',pl:'PLs7zUO7VPyJ7CNZY5CSFE0drddtUgx4sG',
   d:'A este nivel la serie se usa al revés: no para aprender la lengua, sino para contrastar la descripción divulgativa con la descripción gramatical rigurosa.',
   u:DWDE,ul:'Portal de DW'},
  {f:'DW',t:'Politik in Deutschland',pl:'PLs7zUO7VPyJ5-E36PO-T418bxPksqxuoC',
   d:'Fuente de léxico institucional y de fórmulas fijas del discurso público.',
   u:DWDE,ul:'Portal de DW'},
  {f:'Nachrichtenleicht',t:'Contraste de registro',u:NL,ul:'Abrir el portal',
   d:'Ejercicio de C2: leer la misma noticia en lengua sencilla y en un diario de referencia, y describir qué se pierde y qué se gana en cada versión.'},
  {f:'DW',t:'Canal Deutsch lernen',u:'https://www.youtube.com/@dwlearngerman',ul:'Abrir el canal',
   d:'Archivo completo de las series de Deutsche Welle.'}
 ]
};
let immNiv='A1', immAbierto=-1;
/* YouTube devuelve el error 153 cuando la incrustación se pide desde un origen
   que no puede comprobar: es lo que ocurre al abrir el fichero con file://.
   Servido por HTTP el reproductor funciona; sin servidor solo se ofrece el
   enlace directo, que nunca falla.                                            */
const SERVIDO=/^https?:$/.test(location.protocol);
const ytSrc=v=>v.pl?'https://www.youtube-nocookie.com/embed/videoseries?list='+v.pl+'&rel=0'
                   :'https://www.youtube-nocookie.com/embed/'+v.y+'?rel=0&modestbranding=1';
const ytUrl=v=>v.pl?'https://www.youtube.com/playlist?list='+v.pl
                   :'https://www.youtube.com/watch?v='+v.y;
const ytMini=v=>v.y?'https://i.ytimg.com/vi/'+v.y+'/hqdefault.jpg':'';
function immOpen(k){
  immNiv=k||immNiv; immAbierto=-1; immRender();
}
function immRender(){
  const k=immNiv, lista=IMM[k]||[];
  $('#immOut').innerHTML=nivSel(k,'data-nv')
   +'<p class="dicintro">Material auténtico de <b>Deutsche Welle</b>, <b>Nicos Weg</b> y <b>Nachrichtenleicht</b> ordenado por nivel. Cada ficha abre el original en su plataforma'
   +(SERVIDO?'; si prefiere no salir, el botón <b>Reproducir aquí</b> incrusta el vídeo.':'. La reproducción incrustada solo funciona cuando la página se sirve por HTTP: abierta como fichero local, YouTube la rechaza con el error 153, de modo que aquí se ofrece el enlace directo.')
   +'</p>'
   +'<div class="immgrid">'+lista.map((v,i)=>{
      const emb=(v.y||v.pl), mini=ytMini(v);
      return '<div class="immc'+(immAbierto===i?' open':'')+'">'
       +'<div class="immtop">'
         +(mini?'<a class="immthumb" href="'+ytUrl(v)+'" target="_blank" rel="noopener" style="background-image:url('+mini+')"><span class="pl"><svg viewBox="0 0 24 24"><path d="m8 5 12 7-12 7z"/></svg></span></a>':'')
         +'<div class="immmeta"><span class="immtag">'+v.f+'</span><b>'+v.t+'</b>'
           +'<p class="immd">'+v.d+'</p>'
           +'<div class="immacts">'
             +(emb?'<a class="btn pri" href="'+ytUrl(v)+'" target="_blank" rel="noopener">Ver en YouTube ↗</a>':'')
             +(emb&&SERVIDO?'<button class="btn" data-play="'+i+'">'+(immAbierto===i?'Cerrar':'Reproducir aquí')+'</button>':'')
             +(v.u?'<a class="btn" href="'+v.u+'" target="_blank" rel="noopener">'+(v.ul||'Abrir el original')+' ↗</a>':'')
           +'</div></div></div>'
       +(immAbierto===i&&emb&&SERVIDO?'<div class="immframe"><iframe referrerpolicy="strict-origin-when-cross-origin" src="'+ytSrc(v)+'" title="'+v.t+'" loading="lazy" allowfullscreen allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"></iframe></div>':'')
       +'</div>';
    }).join('')+'</div>'
   +'<div class="immfoot"><b>Cómo usar la inmersión</b>'
   +'<ol><li>Primer visionado sin subtítulos: solo para captar el asunto y el tono.</li>'
   +'<li>Segundo visionado con subtítulos alemanes, anotando cinco unidades léxicas nuevas.</li>'
   +'<li>Reformulación oral de lo visto en treinta segundos, sin mirar las notas.</li>'
   +'<li>Contraste: buscar dos de esas unidades en el diccionario del atelier y en DWDS para ver su combinatoria real.</li></ol></div>';
  $$('#immOut [data-nv]').forEach(b=>b.onclick=()=>{sfx.nav();immNiv=b.dataset.nv;immAbierto=-1;immRender();});
  nivSelWire('#immOut',()=>immRender());
  $$('#immOut [data-play]').forEach(b=>b.onclick=()=>{const i=+b.dataset.play;sfx.tap();immAbierto=(immAbierto===i?-1:i);immRender();});
}


/* ===================== ITINERARIO LINEAL POR NIVELES ===================== */


/* Secuencia gramatical: estrictamente acumulativa. Ningún tema aparece antes
   de aquello que presupone. Fonética y escritura abren el itinerario.        */
let nvCur=null;
const STDONE={}, EXDONE={};
const gramIdx=id=>GRAM.findIndex(t=>t.id===id);
const catsNivel=k=>{
  const m={};
  W.forEach(w=>{ if(w.lvl===k) m[w.cat]=(m[w.cat]||0)+1; });
  return Object.entries(m).sort((a,b)=>b[1]-a[1]);
};
const storiesNivel=k=>ST.map((s,i)=>[s,i]).filter(([s])=>s.lvl===k);
const nvHecho=(tipo,ref)=>{
  if(tipo==='gram'){ const s=GSTAT[ref]; return !!(s&&s.best>=60); }
  if(tipo==='story') return !!STDONE[ref];
  if(tipo==='pruef') return !!EXDONE[ref];
  return false;
};
function nvProgreso(k){
  const c=CURR[k]; let hechos=0, total=0;
  c.gram.forEach(id=>{ total++; if(nvHecho('gram',id)) hechos++; });
  storiesNivel(k).forEach(([s])=>{ total++; if(nvHecho('story',s.id)) hechos++; });
  total++; if(nvHecho('pruef',k)) hechos++;
  return {hechos,total,pct:total?Math.round(hechos/total*100):0};
}

function nvList(){
  histPush({go:'nivel'});
  const tarjeta=kk=>{
    const n=NIV[NIVI[kk]], c=CURR[kk], p=nvProgreso(kk), st=storiesNivel(kk).length;
    const pal=W.filter(w=>w.lvl===kk).length, vb=V.filter(v=>v.lv===kk).length;
    const fs=FASES[kk]?FASES[kk].map(f=>f[0]).join(' · '):'';
    return '<div class="nvcard" data-n="'+kk+'" style="--sc:'+n.c+'">'
     +'<div class="nvhd"><span class="nvk">'+kk+'</span><span class="nvn">'+n.n+'</span>'
       +(fs?'<span class="nvfase">'+fs+'</span>':'')+'</div>'
     +'<p>'+n.d+'</p>'
     +'<div class="nvbar"><i style="width:'+p.pct+'%"></i></div>'
     +'<div class="nvmeta"><span>'+c.gram.length+' unidades</span><span>'+pal+' palabras</span>'
       +(vb?'<span>'+vb+' verbos</span>':'')+'<span>'+st+' relatos</span><span>'+p.pct+' %</span></div>'
     +'</div>';
  };
  $('#nvOut').innerHTML='<p class="dicintro">Itinerario <b>lineal</b> en cada nivel: fonética y escritura antes que morfología, morfología antes que sintaxis compleja. Los tres primeros niveles están siempre a la vista; el botón <b>+</b> despliega lo avanzado: B2 desdoblado en B2.1 y B2.2, C1 y C2.</p>'
   +'<div class="nvgrid">'+NIVBASE.map(tarjeta).join('')+'</div>'
   +'<div class="plusbar"><button class="btn plusbtn'+(plusOpen?' on':'')+'" id="nvPlus">'
     +'<b>'+(plusOpen?'−':'+')+'</b> Avanzado · B2.1 · B2.2 · C1 · C2</button></div>'
   +(plusOpen?'<div class="nvgrid av">'+NIVPLUS.map(tarjeta).join('')+'</div>':'');
  $('#nvPlus').onclick=()=>{sfx.tap();plusOpen=!plusOpen;nvList();};
}
$('#nvOut').addEventListener('click',e=>{
  const c=e.target.closest('[data-n]'); if(c){ sfx.nav(); nvOpen(c.dataset.n); }
});

function nvUnidad(num,tipo,ref,tit,sub,extra){
  const ok=nvHecho(tipo,ref);
  return '<div class="unit'+(ok?' ok':'')+'" data-u="'+tipo+':'+ref+'">'
   +'<span class="un">'+(ok?'<svg viewBox="0 0 24 24"><path d="m4 12 5.5 5.5L20 7"/></svg>':num)+'</span>'
   +'<div class="ut"><b>'+tit+'</b><span>'+sub+'</span></div>'
   +(extra||'')+'</div>';
}
function nvOpen(k){
  nvCur=k; stStop();
  histPush({go:'nivel',niv:k,sub:'n:'+k});
  const n=NIV[NIVI[k]], c=CURR[k], p=nvProgreso(k);
  let num=0;
  const bloque=(tit,desc,cuerpo)=>'<section class="blk"><h3>'+tit+'</h3><p class="blkd">'+desc+'</p>'+cuerpo+'</section>';

  /* 1 · fonética (solo A1) y gramática */
  let faseAct='';
  const gramHTML=c.gram.map((id,gi)=>{
    const i=gramIdx(id); if(i<0) return '';
    const t=GRAM[i];
    let cab='';
    const f=faseDe(k,gi);
    if(f&&f!==faseAct){ faseAct=f; cab='<div class="fasehd"><span>'+f+'</span><i></i></div>'; }
    return cab+nvUnidad(++num,'gram',id,t.t,t.sub+' · teoría y cuestionario de diez preguntas');
  }).join('');

  /* 2 · estructuras */
  const estHTML='<div class="estgrid">'+c.estruct.map(([pat,ej,gl])=>
    '<div class="estc"><code>'+pat+'</code><div class="estej">'+ej+spkBtn(ej.replace(/<[^>]+>/g,''))+'</div><p>'+gl+'</p></div>').join('')+'</div>';

  /* 3 · léxico */
  const cats=catsNivel(k);
  const lexHTML='<div class="lexgrid">'+cats.map(([cat,n2])=>
    '<button class="lexc" data-lex="'+cat+'">'+cat+'<b>'+n2+'</b></button>').join('')
    +'</div>'+'<div class="temas"><h4>Temas que hay que poder tratar</h4><ul>'+c.temas.map(t=>'<li>'+t+'</li>').join('')+'</ul></div>';

  /* 4 · lectura */
  const sts=storiesNivel(k);
  const stHTML=sts.length?sts.map(([s,i])=>nvUnidad(++num,'story',s.id,s.t,s.res)).join('')
    :'<p class="blkd">Todavía no hay relatos propios de este nivel. Los del nivel inmediatamente inferior sirven de repaso.</p>';

  /* 5 · inmersión · 6 · prueba */
  const im=IMM[k]||[];
  const immHTML='<p class="blkd" style="margin:-6px 0 12px">'+im.map(v=>v.t).join(' · ')+'</p>'
    +'<button class="btn pri" id="nvImm">Abrir la inmersión de '+k+'</button>';

  const ex=PRUEF.find(x=>x.lvl===k);
  const exHTML='<div class="exam-cta"><div><b>Pon a prueba tu nivel</b>'
   +'<p>'+(ex?ex.desc:'Simulacro de las cuatro destrezas.')+'</p>'
   +'<div class="exchips"><span>Lesen</span><span>Hören</span><span>Schreiben</span><span>Sprechen</span></div></div>'
   +'<button class="btn pri" id="nvEx">Empezar el simulacro</button></div>';

  $('#nvOut').innerHTML='<div class="stbar">'
   +'<div class="stacts"><span class="pill2">'+p.hechos+' de '+p.total+' unidades</span>'
   +'<button class="btn rojo" id="nvPdf"><svg viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/></svg>Ver en PDF</button></div></div>'
   +'<div class="nvhead" style="--sc:'+n.c+'"><span class="lv">'+k+' · '+n.n
     +(FASES[k]?' · '+FASES[k].map(f=>f[0]).join(' + '):'')+'</span>'
     +'<h2>Itinerario '+k+'</h2><p>'+n.d+'</p>'
     +'<div class="nvbar big"><i style="width:'+p.pct+'%"></i></div>'
     +'<p class="kann"><b>Al terminar este nivel:</b> '+c.puede+'</p></div>'
   +bloque('1 · Lengua y gramática', k==='A1'
       ? 'El itinerario abre por donde debe abrir: el sistema fónico y la ortografía. Solo después llega la morfología verbal y la sintaxis. Cada unidad presupone la anterior.'
       : 'Secuencia acumulativa: ninguna unidad introduce una forma que no se haya preparado en el nivel anterior.', gramHTML)
   +bloque('2 · Estructuras de oración', 'Los esquemas oracionales productivos del nivel. El código de colores del rompecabezas de oraciones trabaja estos mismos patrones.', estHTML)
   +bloque('3 · Léxico y temas', 'Campos semánticos con vocabulario propio de este nivel y repertorio de temas que hay que ser capaz de tratar.', lexHTML)
   +bloque('4 · Lectura y escucha', 'Relatos calibrados para este nivel, con audio sincronizado, glosario, comprensión y corrección.', stHTML)
   +bloque('5 · Inmersión', 'Material audiovisual auténtico anclado: Nicos Weg, Deutsche Welle y Nachrichtenleicht.', immHTML)
   +bloque('6 · Prueba de nivel', 'Simulacro con el formato del Goethe-Zertifikat y del TestDaF: comprensión lectora, comprensión auditiva, expresión escrita y expresión oral.', exHTML);

  $('#nvImm').onclick=()=>{goMode('immers');immOpen(k);};
  $('#nvEx').onclick=()=>{goMode('examen');exOpen(k);};
  $('#nvPdf').onclick=()=>nvPDF(k);
  $$('[data-lex]').forEach(b=>b.onclick=()=>{ goMode('palabras'); vNiv=k; vCat=b.dataset.lex; vSub=null; const s=$('#vniv'); if(s) s.value=k; vRender(); });
  $$('[data-u]').forEach(el=>el.onclick=()=>{
    const [tipo,ref]=el.dataset.u.split(':'); sfx.nav();
    if(tipo==='gram'){ const i=gramIdx(ref); goMode('temas'); gramTheory(i); }
    if(tipo==='story'){ const i=ST.findIndex(s=>s.id===ref); goMode('lectura'); stOpen(i); }
  });
}
function nvPDF(k){
  const n=NIV[NIVI[k]], c=CURR[k];
  imprimir(pHead('Itinerario '+k+' · '+n.n, n.d)
   +'<h2>1 · Lengua y gramática</h2><ol>'+c.gram.map(id=>{const i=gramIdx(id);return i<0?'':'<li><b>'+GRAM[i].t+'</b> — '+GRAM[i].sub+'</li>';}).join('')+'</ol>'
   +'<h2>2 · Estructuras de oración</h2><table>'+c.estruct.map(([p,e,g])=>'<tr><td><b>'+p.replace(/<[^>]+>/g,'')+'</b></td><td>'+e.replace(/<[^>]+>/g,'')+'<br><i>'+g+'</i></td></tr>').join('')+'</table>'
   +'<h2>3 · Campos léxicos</h2><p>'+catsNivel(k).map(([c2,n2])=>c2+' ('+n2+')').join(' · ')+'</p>'
   +'<h2>Temas que hay que poder tratar</h2><ol>'+c.temas.map(t=>'<li>'+t+'</li>').join('')+'</ol>'
   +'<h2>4 · Lectura</h2><ol>'+storiesNivel(k).map(([s])=>'<li><b>'+s.t+'</b> — '+s.res+'</li>').join('')+'</ol>'
   +'<h2>5 · Inmersión</h2><ol>'+(IMM[k]||[]).map(v=>'<li><b>'+v.t+'</b> — '+v.f+' · '+(v.u||v.url||'')+'</li>').join('')+'</ol>'
   +'<h2>6 · Prueba de nivel</h2><p>'+(PRUEF.find(x=>x.lvl===k)||{desc:''}).desc+'</p>'
   +'<p><b>Descriptor de salida:</b> '+c.puede+'</p>');
}

/* Satzbau · reestructurar la oración */
const sbTeo=k=>SBTEO[k]||'<b>'+k+'.</b> Consulte la unidad de gramática correspondiente en el itinerario del nivel.';


/* ===================== ALLGEMEINE: WORTSCHATZ · THEORIE · SATZBAU · KERNSÄTZE ===================== */

/* Ámbito compartido por las prácticas cuando se entra desde Allgemeine o desde
   un nivel del itinerario: restringe el corpus sin tocar los filtros propios. */
const AMB={cls:'',niv:''};
const ambVacio=()=>!AMB.cls&&!AMB.niv;
function ambAplica(l){
  if(AMB.cls) l=l.filter(w=>w.cls===AMB.cls);
  if(AMB.niv) l=l.filter(w=>w.lvl===AMB.niv);
  return l;
}
function ambBanner(volver){
  if(ambVacio()) return '';
  const cl=AMB.cls?(CLS[AMB.cls]||AMB.cls):'todo el léxico';
  return '<div class="ambbar"><span>Ámbito restringido a <b>'+cl+'</b>'+(AMB.niv?' de nivel <b>'+AMB.niv+'</b>':'')+
    ' · '+ambAplica(W).length+' entradas</span><button class="btn" id="ambOff">Quitar el filtro</button></div>';
}
function ambWire(recarga){
  const b=$('#ambOff'); if(b) b.onclick=()=>{AMB.cls='';AMB.niv='';sfx.tap();recarga();};
}

/* ---------- 1 · Allgemeiner Wortschatz: por categoría gramatical ---------- */
const CLASES=[['s','Sustantivos','Nomen'],['v','Verbos','Verben'],['a','Adjetivos','Adjektive'],
 ['d','Adverbios','Adverbien'],['p','Palabras de función','Funktionswörter'],
 ['f','Frases hechas','Wendungen'],['z','Numerales','Zahlwörter']];
let wsCls='s', wsNiv='';
function wsLista(){ let l=W.filter(w=>w.cls===wsCls); if(wsNiv) l=l.filter(w=>w.lvl===wsNiv); return l; }
function wsRender(){
  const l=wsLista();
  $('#wsOut').innerHTML='<p class="dicintro">El léxico completo reordenado por <b>categoría gramatical</b> y no por campo semántico. Dentro de cada categoría, el corte por nivel; al final, las dos prácticas activas aplicadas exactamente a lo que esté filtrado.</p>'
   +'<div class="clstabs">'+CLASES.map(([k,es,de])=>{
      const n=W.filter(w=>w.cls===k).length;
      return '<button class="clstab'+(k===wsCls?' on':'')+'" data-cls="'+k+'"><b>'+es+'</b><span>'+de+'</span><em>'+n+'</em></button>';
    }).join('')+'</div>'
   +'<div class="nivtabs">'+['','A1','A2','B1','B2','C1','C2'].map(k=>{
      const n=k?W.filter(w=>w.cls===wsCls&&w.lvl===k).length:W.filter(w=>w.cls===wsCls).length;
      const c=k?NIV[NIVI[k]].c:'var(--ink3)';
      return '<button class="nvtab'+(k===wsNiv?' on':'')+'" data-wn="'+k+'" style="--sc:'+c+'">'+(k||'Todos')+' <i>'+n+'</i></button>';
    }).join('')+'</div>'
   +'<div class="wsacts"><span class="pill2">'+l.length+' entradas</span>'
     +'<button class="btn" id="wsFc">Tarjetas con este ámbito</button>'
     +'<button class="btn" id="wsWr">Vocabulario activo con este ámbito</button>'
     +'<button class="btn" id="wsGen"'+(wsCls==='s'?'':' disabled')+'>Entrenador de género</button></div>'
   +(l.length?'<div class="wlist">'+l.slice(0,400).map(wrowHTML).join('')+'</div>'
     :'<div class="empty"><b>Sin entradas</b>Pruebe con otro nivel.</div>')
   +(l.length>400?'<p class="blkd" style="margin-top:12px">Se muestran las primeras 400 de '+l.length+'. Afine con el nivel.</p>':'');
  $$('#wsOut [data-cls]').forEach(b=>b.onclick=()=>{sfx.nav();wsCls=b.dataset.cls;wsRender();});
  $$('#wsOut [data-wn]').forEach(b=>b.onclick=()=>{sfx.tap();wsNiv=b.dataset.wn;wsRender();});
  const ir=(destino,init)=>()=>{ AMB.cls=wsCls; AMB.niv=wsNiv; sfx.nav(); goMode(destino); init&&init(); };
  $('#wsFc').onclick=ir('tarjetas',()=>fcInit());
  $('#wsWr').onclick=ir('escribir',()=>wrInit());
  if(wsCls==='s') $('#wsGen').onclick=ir('genero',()=>gNext());
  $('#wsOut').querySelectorAll('.wrow').forEach(el=>el.onclick=()=>vFicha(+el.dataset.w));
}

/* ---------- 2 · Theorie: verbos con prefijo más frecuentes por nivel ---------- */
function prefNivel(k){
  const sep=V.filter(v=>v.sep&&(!k||v.lv===k));
  const ins=V.filter(v=>!v.sep&&/^(be|emp|ent|er|ge|miss|ver|zer)/.test(v.i)&&(!k||v.lv===k));
  const tabla=(t,arr,color)=>arr.length?'<h4 class="thh">'+t+' · '+arr.length+'</h4>'
    +'<table class="endtable"><tr><th>Infinitivo</th><th>Präteritum</th><th>Partizip II</th><th>Significado</th></tr>'
    +arr.map(v=>'<tr><td style="color:'+color+'"><b>'+v.i+'</b></td><td>'+v.PT[2]+'</td><td>'+v.pp+'</td><td>'+v.t+'</td></tr>').join('')
    +'</table>':'<p class="blkd">Sin verbos de este tipo en el nivel seleccionado.</p>';
  return '<p class="blkd" style="max-width:78ch">El prefijo <b>separable</b> lleva el acento y se desgaja al conjugar, e intercala <code>ge</code> en el participio; el <b>inseparable</b> es átono, nunca se separa y su participio carece de <code>ge</code>. La prueba fiable es el acento, no la lista.</p>'
   +tabla('Prefijo separable',sep,'var(--c-sep)')
   +tabla('Prefijo inseparable',ins,'var(--c-mod)');
}
let thNiv='';
function thRender(){
  $('#r-pref2').innerHTML='<div class="nivtabs">'+['','A1','A2','B1','B2','C1'].map(k=>
     '<button class="nvtab'+(k===thNiv?' on':'')+'" data-tn="'+k+'" style="--sc:'+(k?NIV[NIVI[k]].c:'var(--ink3)')+'">'+(k||'Todos')+'</button>').join('')+'</div>'
   +prefNivel(thNiv);
  $$('#r-pref2 [data-tn]').forEach(b=>b.onclick=()=>{sfx.tap();thNiv=b.dataset.tn;thRender();});
}

/* ---------- 3 · Satzbau: rompecabezas y reestructuración ---------- */
let sbVista='ordenar', sbNiv='A1', sbResp={}, sbHecho={};
const sbNorm=x=>String(x).toLowerCase().replace(/[.,;:!?¡¿„“»«]/g,'').replace(/\s+/g,' ').trim();
function sbRender(){
  $('#sbOut').innerHTML='<p class="dicintro">Dos maneras de trabajar el orden de la oración alemana: <b>reconstruirla</b> a partir de sus piezas desordenadas, o <b>montarla</b> pieza a pieza asignando a cada una su función sintáctica.</p>'
   +'<div class="reftabs" id="sbTabs">'
   +'<button data-sb="ordenar"'+(sbVista==='ordenar'?' class="on"':'')+'>Reestructurar la frase</button>'
   +'<button data-sb="puzzle"'+(sbVista==='puzzle'?' class="on"':'')+'>Rompecabezas por funciones</button></div>'
   +(sbVista==='ordenar'?sbOrdenar():sbPuzzleIntro());
  $$('#sbTabs button').forEach(b=>b.onclick=()=>{sfx.nav();sbVista=b.dataset.sb;sbRender();});
  if(sbVista==='ordenar') sbWire();
  else $('#sbGo').onclick=()=>{sfx.nav();goMode('puzzle');};
}
function sbPuzzleIntro(){
  return '<div class="exam-cta"><div><b>Rompecabezas de oraciones</b>'
   +'<p>Veinticuatro oraciones que se ordenan primero y se etiquetan después: nominativo en azul, verbo en rojo, acusativo en naranja claro, dativo en naranja oscuro, complementos TEKAMOLO en verde y segundo verbo en morado.</p>'
   +'<div class="exchips"><span>Orden</span><span>Función</span><span>Caso</span><span>Paréntesis oracional</span></div></div>'
   +'<button class="btn pri" id="sbGo">Abrir el rompecabezas</button></div>';
}
function sbOrdenar(){
  const l=SATZ[sbNiv]||[];
  const hechos=l.filter((_,i)=>sbHecho[sbNiv+':'+i]).length;
  return '<div class="nivtabs">'+['A1','A2','B1','B2','C1','C2'].map(k=>
     '<button class="nvtab'+(k===sbNiv?' on':'')+'" data-sn="'+k+'" style="--sc:'+NIV[NIVI[k]].c+'">'+k+'</button>').join('')
   +'<span class="pill2" style="margin-left:10px">'+hechos+' de '+l.length+'</span></div>'
   +'<p class="blkd" style="max-width:78ch">Reescriba cada secuencia como una oración correcta. Respete la mayúscula inicial y la puntuación final: el corrector las ignora, pero la norma no.</p>'
   +'<div class="sbgrid">'+l.map((e,i)=>{
      const k=sbNiv+':'+i, hecho=sbHecho[k];
      return '<div class="sbq'+(hecho?' done':'')+'" data-i="'+i+'">'
       +'<div class="sbh"><span class="sbn">'+(i+1)+'</span><span class="sbk">'+e.k+'</span>'
       +'<button class="sbmas" data-teo="'+i+'" title="Ver la teoría">+</button></div>'
       +'<div class="sbteo" id="sbT'+i+'" hidden>'+sbTeo(e.k)+'</div>'
       +'<div class="sbsrc">'+e.q+'</div>'
       +'<div class="sbin"><input type="text" spellcheck="false" placeholder="Escriba la oración correcta" value="'+(sbResp[k]||'').replace(/"/g,'&quot;')+'">'
       +'<button class="btn">Comprobar</button></div>'
       +'<div class="exfb"></div></div>';
    }).join('')+'</div>'
   +'<div class="exacts"><button class="btn pri" id="sbAll">Corregir todo</button>'
   +'<button class="btn" id="sbSol">Ver las soluciones</button>'
   +btnPDF('sbPdf')+'</div>';
}
function sbCheck(i,mostrar){
  const e=SATZ[sbNiv][i], k=sbNiv+':'+i;
  const box=$('#sbOut .sbq[data-i="'+i+'"]'); if(!box) return false;
  const inp=box.querySelector('input'), val=inp.value.trim();
  sbResp[k]=val;
  if(!val&&!mostrar){ box.querySelector('.exfb').innerHTML='<div class="fbline no">Escriba una respuesta.</div>'; return false; }
  const bien=(e.a||[e.r]).some(x=>sbNorm(x)===sbNorm(val));
  sbHecho[k]=bien;
  box.classList.toggle('done',bien);
  inp.classList.toggle('ok',bien); inp.classList.toggle('no',!bien);
  box.querySelector('.exfb').innerHTML='<div class="fbline '+(bien?'ok':'no')+'">'
    +(bien?'Correcto. ':'Solución: <b>'+e.r+'</b>. ')+e.e+'</div>';
  return bien;
}
function sbWire(){
  $$('#sbOut [data-sn]').forEach(b=>b.onclick=()=>{sfx.nav();sbNiv=b.dataset.sn;sbRender();});
  $$('#sbOut [data-teo]').forEach(b=>b.onclick=()=>{
    const t=$('#sbT'+b.dataset.teo); if(!t) return;
    t.hidden=!t.hidden; b.textContent=t.hidden?'+':'−'; b.classList.toggle('on',!t.hidden); sfx.tap();
  });
  $$('#sbOut .sbq').forEach(box=>{
    const i=+box.dataset.i, inp=box.querySelector('input'), bt=box.querySelector('.sbin button');
    const go=()=>{ const ok=sbCheck(i,false); (ok?sfx.ok:sfx.no)(); };
    bt.onclick=go; inp.onkeydown=ev=>{ if(ev.key==='Enter') go(); };
  });
  $('#sbAll').onclick=()=>{
    let ok=0; (SATZ[sbNiv]||[]).forEach((_,i)=>{ if(sbCheck(i,false)) ok++; });
    (ok>=(SATZ[sbNiv]||[]).length*0.6?sfx.win:sfx.no)();
  };
  $('#sbSol').onclick=()=>{
    (SATZ[sbNiv]||[]).forEach((e,i)=>{
      const box=$('#sbOut .sbq[data-i="'+i+'"]'); if(!box) return;
      box.querySelector('input').value=e.r;
      box.querySelector('.exfb').innerHTML='<div class="fbline ok"><b>'+e.r+'</b> — '+e.e+'</div>';
    });
    sfx.tap();
  };
  $('#sbPdf').onclick=()=>imprimir(pHead('Satzbau · reestructurar la oración','Nivel '+sbNiv+' · diez ítems')
    +'<ol>'+(SATZ[sbNiv]||[]).map(e=>'<li>'+e.q+' <span class="pline">→ ________________________________________</span></li>').join('')+'</ol>'
    +'<div class="pbreak"></div><h2>Soluciones</h2><ol>'
    +(SATZ[sbNiv]||[]).map(e=>'<li><b>'+e.r+'</b> — '+e.e.replace(/<[^>]+>/g,'')+'</li>').join('')+'</ol>');
}

/* ---------- 4 · Kernsätze: vocabulario interno integrado ---------- */
let knNiv='A1';
const ART2G={der:'m',die:'f',das:'n'};
function knMarca(s,ws){
  const items=(ws||[]).map(w=>{
    const art=(w.match(/^(der|die|das)\s+/)||[])[1];
    const b=w.replace(/^(der|die|das)\s+/,'').replace(/^sich\s+/,'');
    const raiz=(b.length>7?b.slice(0,b.length-3):b.length>5?b.slice(0,b.length-2):b).toLowerCase();
    return {raiz,g:art?ART2G[art]:null,base:b};
  }).filter(x=>x.raiz.length>2);
  return s.split(/(\s+)/).map(t=>{
    const limpio=t.replace(/[.,;:!?„“»«()]/g,'');
    const cl=limpio.toLowerCase();
    if(cl.length<3) return t;
    const hit=items.find(x=>cl.startsWith(x.raiz)||x.raiz.startsWith(cl));
    if(!hit) return t;
    const cola=t.slice(limpio.length);
    if(hit.g&&/^[A-ZÄÖÜ]/.test(limpio)){
      const te=terminacionGen(limpio);
      if(te&&te.g===hit.g){
        const p=limpio.length-te.suf.length;
        return '<mark>'+limpio.slice(0,p)+'<u class="genend '+GCLASE[hit.g]+'" title="'+te.l+' → '+GNAME[hit.g]+'">'+limpio.slice(p)+'</u></mark>'+cola;
      }
      return '<mark class="g-'+hit.g+'">'+limpio+'</mark>'+cola;
    }
    return '<mark>'+limpio+'</mark>'+cola;
  }).join('');
}
function knRender(){
  const l=KERN[knNiv]||[];
  $('#knOut').innerHTML='<p class="dicintro">El léxico esencial de cada campo semántico condensado en <b>una sola oración por campo y nivel</b>. El objetivo es tener vocabulario <b>activo</b> y no listas sueltas: se memoriza la frase, y con ella el caso, la preposición y el orden que cada palabra exige.</p>'
   +'<div class="nivtabs">'+['A1','A2','B1','B2','C1','C2'].map(k=>
      '<button class="nvtab'+(k===knNiv?' on':'')+'" data-kn="'+k+'" style="--sc:'+NIV[NIVI[k]].c+'">'+k+' <i>'+(KERN[k]||[]).length+'</i></button>').join('')+'</div>'
   +'<div class="kngrid">'+l.map((e,i)=>
      '<div class="knc" style="--sc:'+NIV[NIVI[knNiv]].c+'">'
      +'<div class="knh"><span class="knc2">'+e.c+'</span>'+spkBtn(e.s)+'</div>'
      +'<p class="kns">'+knMarca(e.s,e.w)+'</p>'
      +'<p class="knt">'+e.t+'</p>'
      +'<div class="knw">'+e.w.map(w=>{
          const art=(w.match(/^(der|die|das)\s+/)||[])[1];
          const b=w.replace(/^(der|die|das)\s+/,'');
          const et=art?'<i class="gart g-'+ART2G[art]+'">'+art+'</i> '+marcaGen(b,ART2G[art]):w;
          return '<button class="knchip" data-w="'+w.replace(/"/g,'&quot;')+'">'+et+'</button>';}).join('')+'</div>'
      +'<p class="knn">'+e.n+'</p></div>').join('')+'</div>'
   +'<div class="genleg"><span><i class="e-m"></i>masculino</span><span><i class="e-f"></i>femenino</span>'
   +'<span><i class="e-n"></i>neutro</span><span class="nd">terminación no deducible</span></div>'
   +'<div class="exacts">'+btnPDF('knPdf')+'</div>';
  $$('#knOut [data-kn]').forEach(b=>b.onclick=()=>{sfx.nav();knNiv=b.dataset.kn;knRender();});
  $$('#knOut .knchip').forEach(b=>b.onclick=()=>{
    const t=b.dataset.w, hit=W.find(x=>x.de===t)||W.find(x=>dicNorm(x.de)===dicNorm(t));
    sfx.tap();
    if(hit){ goMode('palabras'); vFicha(hit.id); }
    else { goMode('buscar'); $('#dicQ').value=t.replace(/^(der|die|das) /,''); dicSearch(); }
  });
  $('#knPdf').onclick=()=>imprimir(pHead('Vocabulario interno · '+knNiv,'Una oración nuclear por campo semántico')
    +l.map(e=>'<h2>'+e.c+'</h2><p><b>'+e.s+'</b></p><p><i>'+e.t+'</i></p>'
      +'<p>'+e.w.join(' · ')+'</p><p>'+e.n.replace(/<[^>]+>/g,'')+'</p>').join(''));
}

/* ===================== CABECERA, HISTORIAL Y RECIENTES ===================== */

/* --- historial de navegación: atrás y adelante como en un navegador ---
   Cada entrada guarda página, nivel, subestado (tema, relato o nivel abierto),
   lengua activa y posición de desplazamiento. Las flechas de la cabecera son
   el único control de retroceso: las vistas internas ya no tienen botón propio.
   Varias anotaciones dentro de una misma acción (p. ej. abrir la sección y
   luego el tema) se funden en una sola entrada.                              */
const HIST={pila:[],i:-1,bloq:false,tick:false,tt:0};
const LANGAPI={get:()=>'de',set:null};   /* lo amplía modules/idiomas.js */
const HSUB={};
function histKey(e){ return (e.lang||'de')+'|'+e.go+'|'+(e.niv||'')+'|'+(e.sub||''); }
function histPush(est){
  if(HIST.bloq) return;
  const e={go:est.go,niv:est.niv||'',sub:est.sub||'',lang:LANGAPI.get(),y:0};
  if(e.go==='nivel'&&e.niv&&!e.sub) e.sub='n:'+e.niv;
  const act=HIST.pila[HIST.i];
  if(act&&histKey(act)===histKey(e)) return;
  if(act&&HIST.tick&&act.go===e.go&&act.lang===e.lang){ HIST.pila[HIST.i]=e; }
  else {
    if(act) act.y=window.scrollY;
    HIST.pila=HIST.pila.slice(0,HIST.i+1);
    HIST.pila.push(e); HIST.i=HIST.pila.length-1;
    if(HIST.pila.length>80){ HIST.pila.shift(); HIST.i--; }
  }
  HIST.tick=true; clearTimeout(HIST.tt); HIST.tt=setTimeout(()=>{HIST.tick=false;},0);
  histBtns(); recPush(e);
}
function histIr(d){
  const j=HIST.i+d;
  if(j<0||j>=HIST.pila.length) return;
  const cur=HIST.pila[HIST.i]; if(cur) cur.y=window.scrollY;
  HIST.i=j; const e=HIST.pila[j];
  HIST.bloq=true;
  try{
    if(e.lang!==LANGAPI.get()&&LANGAPI.set) LANGAPI.set(e.lang,true);
    if(e.niv&&e.go!=='nivel') goNivel(e.niv,e.go);
    else if(e.go==='nivel'&&e.niv){ stStop(); goMode('nivel'); nvOpen(e.niv); }
    else goDestino(e.go);
    if(e.sub&&HSUB[e.go]) HSUB[e.go](e.sub);
    navSel=e.niv?e.niv+':'+e.go:e.go; sideNav();
  } finally { HIST.bloq=false; }
  histBtns();
  const y=e.y||0;
  requestAnimationFrame(()=>window.scrollTo({top:y,behavior:'auto'}));
}
HSUB.temas=s=>{ if(/^[gk]:/.test(s)) gramTheory(+s.slice(2)); };
HSUB.lectura=s=>{ if(s.indexOf('s:')===0) stOpen(+s.slice(2)); };
function histTitulo(e){
  if(!e) return '';
  const p=PAGES[e.go]; let t=p?p[0]:e.go;
  if(e.sub&&/^[gk]:/.test(e.sub)&&GRAM[+e.sub.slice(2)]) t=GRAM[+e.sub.slice(2)].t;
  else if(e.sub&&e.sub.indexOf('s:')===0&&ST[+e.sub.slice(2)]) t=ST[+e.sub.slice(2)].t;
  if(e.niv) t+=' · '+e.niv;
  return t;
}
function histBtns(){
  const a=$('#navBack'), b=$('#navFwd');
  if(a){ a.disabled=HIST.i<=0; a.title=HIST.i>0?'Atrás: '+histTitulo(HIST.pila[HIST.i-1])+' (Alt+←)':'Atrás'; }
  if(b){ b.disabled=HIST.i>=HIST.pila.length-1; b.title=HIST.i<HIST.pila.length-1?'Adelante: '+histTitulo(HIST.pila[HIST.i+1])+' (Alt+→)':'Adelante'; }
}
/* teclado (Alt+← / Alt+→), botones laterales del ratón y gesto desde el borde */
document.addEventListener('keydown',e=>{
  if(!e.altKey||e.ctrlKey||e.metaKey) return;
  if(e.key==='ArrowLeft'||e.key==='ArrowRight'){ e.preventDefault(); histIr(e.key==='ArrowLeft'?-1:1); }
});
window.addEventListener('mouseup',e=>{ if(e.button===3||e.button===4){ e.preventDefault(); histIr(e.button===3?-1:1); } });
(function(){ let x0=null,y0=0,t0=0;
  window.addEventListener('touchstart',e=>{ const t=e.touches[0]; x0=(t.clientX<28||t.clientX>innerWidth-28)?t.clientX:null; y0=t.clientY; t0=Date.now(); },{passive:true});
  window.addEventListener('touchend',e=>{ if(x0===null) return; const t=e.changedTouches[0], dx=t.clientX-x0, dy=Math.abs(t.clientY-y0);
    if(Math.abs(dx)>70&&dy<50&&Date.now()-t0<600) histIr(dx>0?-1:1); x0=null; },{passive:true});
})();

/* --- recientes: lo último visitado, sin repeticiones --- */
const REC=[];
const RECT={home:['Inicio','Portada'],nivel:['Itinerario','Recorrido del nivel'],
 palabras:['Léxico','Explorador de palabras'],verbos:['Verbos','Repertorio verbal'],
 buscar:['Buscar','Diccionario'],temas:['Gramática','Unidades y cuestionarios'],
 refer:['Theorie','Referencia gramatical'],lectura:['Geschichten','Relatos con audio'],
 hub:['Práctica','Modos de entrenamiento'],immers:['Inmersión','Vídeo auténtico'],
 examen:['Prueba de nivel','Simulacro Goethe y TestDaF'],
 wortschatz:['Wortschatz','Léxico por categoría'],satzbau:['Satzbau','Orden de la oración'],
 kern:['Vocabulario interno','Oraciones nucleares'],
 conjugar:['Conjugación','Siete tiempos'],escribir:['Vocabulario activo','Escritura'],
 tarjetas:['Tarjetas','Repetición espaciada'],genero:['Género','der, die, das'],
 puzzle:['Rompecabezas','Función sintáctica']};
function recPush(est){
  if(est.go==='home'||(est.lang&&est.lang!=='de')) return;
  const meta=RECT[est.go]||[est.go,''];
  const id=(est.niv||'')+':'+est.go;
  const i=REC.findIndex(x=>x.id===id);
  if(i>=0) REC.splice(i,1);
  REC.unshift({id,go:est.go,niv:est.niv||'',t:meta[0],d:meta[1]});
  if(REC.length>8) REC.pop();
}

/* --- cabecera --- */
function topWire(){
  $('#navBack').onclick=()=>histIr(-1);
  $('#navFwd').onclick=()=>histIr(1);
  $('#sideCollapse').onclick=()=>{ if(MOVIL.matches){ sfx.tap(); cajon(false); } else sideRepliega(true); };
  histBtns();
}

/* --- portada al modo lista de reproducción --- */
const MINI={home:'home',nivel:'steps',palabras:'book',verbos:'chat',buscar:'search',temas:'bulb',refer:'quill',
 lectura:'read',hub:'play',immers:'head',examen:'target',wortschatz:'sigma',satzbau:'puzzle',
 kern:'pen',conjugar:'chat',escribir:'pen',tarjetas:'cards',genero:'target',puzzle:'puzzle'};
const COLOR={nivel:'#8fc4ff',palabras:'#84dcc0',verbos:'#ff9fb0',buscar:'#f4b183',temas:'#f2c777',
 refer:'#c9aefc',lectura:'#f5a9a9',hub:'#c9aefc',immers:'#ffb3a7',examen:'#f4a97f',
 wortschatz:'#84dcc0',satzbau:'#7fd8c6',kern:'#9db4f5',conjugar:'#ff9fb0',escribir:'#8fc4ff',
 tarjetas:'#ffa3c8',genero:'#84dcc0',puzzle:'#7fd8c6'};
function fila(t,d,go,niv,col){
  return '<button class="row2" data-hgo="'+go+'"'+(niv?' data-hniv="'+niv+'"':'')+' style="--pc:'+(col||COLOR[go]||'var(--brand)')+'">'
   +'<span class="rmini">'+svg(MINI[go]||'grid')+(niv?'<i>'+niv+'</i>':'')+'</span>'
   +'<span class="rtxt"><b>'+t+'</b><span>'+d+'</span></span></button>';
}
function homeFilas(){
  const k=nvCur||'A1', n=NIV[NIVI[k]], p=nvProgreso(k);
  const sig=(CURR[k].gram.find(id=>!nvHecho('gram',id))||'');
  const sigT=sig?(GRAM.find(t=>t.id===sig)||{}).t:'';
  let h='';
  if(REC.length){
    h+='<div class="rowttl"><h3>Recientes</h3><span>'+REC.length+'</span></div>'
     +'<div class="rowgrid">'+REC.map(r=>fila(r.t+(r.niv?' · '+r.niv:''),r.d,r.go,r.niv)).join('')+'</div>';
  }
  h+='<div class="rowttl"><h3>Continuar</h3></div>'
   +'<div class="rowgrid">'+fila('Itinerario '+k+' · '+n.n,
      p.hechos+' de '+p.total+' unidades'+(sigT?' · siguiente: '+sigT:''),'nivel',k,n.c)+'</div>';
  h+='<div class="rowttl"><h3>Niveles</h3></div>'
   +'<div class="rowgrid">'+NIVBASE.map(x=>{const nn=NIV[NIVI[x]],pp=nvProgreso(x);
      return fila(x+' · '+nn.n,pp.pct+' % · '+CURR[x].gram.length+' unidades','curso',x,nn.c);}).join('')
   +(plusOpen?NIVPLUS.map(x=>{const nn=NIV[NIVI[x]],pp=nvProgreso(x);
      return fila(x+' · '+nn.n,pp.pct+' % · '+CURR[x].gram.length+' unidades','curso',x,nn.c);}).join(''):'')
   +'<button class="row2 mas" id="homeMas" style="--pc:'+NIV[NIVI['B2']].c+'">'
     +'<span class="rmini"><b>'+(plusOpen?'−':'+')+'</b></span>'
     +'<span class="rtxt"><b>'+(plusOpen?'Ocultar avanzados':'Niveles avanzados')+'</b><span>B2.1 · B2.2 · C1 · C2</span></span></button>'
   +'</div>';
  h+='<div class="rowttl"><h3>Grundlagen</h3></div>'
   +'<div class="rowgrid">'
   +fila('Wortschatz','Léxico por categoría gramatical','wortschatz')
   +fila('Theorie','Género, plural, prefijos y TEKAMOLO','refer')
   +fila('Satzbau','Reestructurar y rompecabezas','satzbau')
   +fila('Vocabulario interno','120 oraciones nucleares','kern')
   +fila('Grammatikbücher','Gramáticas recomendadas por nivel','biblio',null,'#8a6fd0')
   +'</div>';
  h+='<div class="rowttl"><h3>Werkzeuge</h3></div>'
   +'<div class="rowgrid">'
   +fila('Buscar','Diccionario interno y salida a DWDS','buscar')
   +fila('Repertorio verbal','184 verbos con morfología','verbos')
   +fila('Todo el léxico',W.length+' entradas en '+Object.keys(VOCAB).length+' campos','palabras')
   +fila('Todos los temas',GRAM.length+' unidades de gramática','temas')
   +fila('Geschichten',ST.length+' relatos con audio','lectura')
   +fila('Modos de práctica','Seis entrenamientos','hub')
   +'</div>';
  return h;
}

/* ---------- ARRANQUE ---------- */
sideNav();
topWire();
homeRender();
goMode('home');
