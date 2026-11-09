/* ---------- rendimiento ---------- */
(function(){
  /* 1 · palabras parecidas: Levenshtein acotado (corta en cuanto la distancia supera 2),
        índice por longitud y caché por palabra. Antes: ~0,5 s cada vez que se abría Wortschatz. */
  const LOW=new Map(), BYLEN=new Map();
  W.forEach(o=>{ if(o.base.length<3) return; const l=o.base.toLowerCase(); LOW.set(o.id,l);
    const n=l.length; if(!BYLEN.has(n)) BYLEN.set(n,[]); BYLEN.get(n).push(o); });
  function lev2(a,b){ const m=a.length,n=b.length; if(Math.abs(m-n)>2) return 3;
    let prev=new Array(n+1), cur=new Array(n+1); for(let j=0;j<=n;j++) prev[j]=j;
    for(let i=1;i<=m;i++){ cur[0]=i; let best=i; const ca=a.charCodeAt(i-1);
      for(let j=1;j<=n;j++){ const v=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(ca===b.charCodeAt(j-1)?0:1)); cur[j]=v; if(v<best) best=v; }
      if(best>2) return 3; const t=prev; prev=cur; cur=t; }
    return prev[n]; }
  const SIM=new Map();
  similares=function(w){
    if(SIM.has(w.id)) return SIM.get(w.id);
    const a=w.base.toLowerCase(), out=[];
    for(let n=a.length-2;n<=a.length+2;n++){ const arr=BYLEN.get(n); if(!arr) continue;
      for(const o of arr){ if(o.id===w.id) continue; const d=lev2(a,LOW.get(o.id)); if(d<=2) out.push({w:o,d}); } }
    const r=out.sort((x,y)=>x.d-y.d).slice(0,6); SIM.set(w.id,r); return r; };
  const memo=fn=>{ const c=new Map(); return function(w){ if(!w||w.id==null) return fn.apply(this,arguments);
    if(!c.has(w.id)) c.set(w.id,fn.apply(this,arguments)); return c.get(w.id); }; };
  compuesta=memo(compuesta);
  dificultad=memo(dificultad);
  /* 2 · al cambiar de vista se sube arriba al instante (el desplazamiento suave
        sobre páginas largas era lo más costoso del cambio); la vista entra con un fundido. */
  const st=window.scrollTo.bind(window);
  window.scrollTo=function(a,b){ if(a&&typeof a==='object'&&a.behavior==='smooth'&&a.top===0&&window.scrollY>window.innerHeight)
      return st({top:0,left:a.left||0,behavior:'instant'}); return st(a,b); };
  /* 3 · precálculo en tiempo muerto: la primera visita a Wortschatz ya encuentra la caché llena */
  const idle=window.requestIdleCallback||(f=>setTimeout(()=>f({timeRemaining:()=>8}),200));
  let k=0; const ws=W;
  function warm(dl){ while(k<ws.length&&dl.timeRemaining()>4){ try{ dificultad(ws[k]); }catch(e){} k++; }
    if(k<ws.length) idle(warm,{timeout:4000}); }
  const start=()=>setTimeout(()=>idle(warm,{timeout:4000}),2500);
  if(document.readyState==='complete') start(); else window.addEventListener('load',start,{once:true});
})();
