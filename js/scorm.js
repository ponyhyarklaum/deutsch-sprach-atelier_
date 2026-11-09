/* ===================== SCORM 1.2 · puente con Moodle =====================
   - Busca la API del LMS (ventanas padre / opener).
   - Marca el intento como "incomplete" al entrar y "completed" tras visitar
     tres secciones distintas (o 5 minutos de uso).
   - Guarda en cmi.suspend_data el progreso (cuestionarios de gramática,
     simulacros) y la última página, y lo restaura al volver.
   - Sin LMS (abierto como archivo suelto) funciona igual, sin registrar nada. */
(function(){
  function findAPI(w){ var n=0; while(w && !w.API && w.parent && w.parent!==w && n<12){ w=w.parent; n++; } return w && w.API ? w.API : null; }
  var api=findAPI(window) || (window.opener ? findAPI(window.opener) : null);
  var t0=Date.now(), ok=false, finished=false, visited={}, last='';
  function get(k){ try{ return api.LMSGetValue(k)||''; }catch(e){ return ''; } }
  function set(k,v){ try{ return api.LMSSetValue(k,String(v)); }catch(e){} }
  function commit(){ try{ api.LMSCommit(''); }catch(e){} }
  if(api){ try{ ok=api.LMSInitialize('')+''==='true'; }catch(e){} }
  window.SCORM_ACTIVO=ok;
  if(!ok) return;
  var st=get('cmi.core.lesson_status');
  if(st==='not attempted' || st==='') set('cmi.core.lesson_status','incomplete');
  function snapshot(){
    var g={}; try{ for(var k in GSTAT) g[k]=GSTAT[k].best; }catch(e){}
    var ex=[]; try{ for(var k2 in EXDONE) if(EXDONE[k2]) ex.push(k2); }catch(e){}
    var sd=[]; try{ for(var k3 in STDONE) if(STDONE[k3]) sd.push(k3); }catch(e){}
    var h={}; try{ var e=HIST.pila[HIST.i]; if(e) h={go:e.go,niv:e.niv||'',sub:e.sub||'',l:e.lang||'de'}; }catch(e){}
    return JSON.stringify({v:1,g:g,e:ex,s:sd,p:h,th:(document.documentElement.dataset.theme||'light'),rd:(window.rdGet?window.rdGet():null)}).slice(0,4000);
  }
  function save(){ var s=snapshot(); if(s!==last){ set('cmi.suspend_data',s); last=s; commit(); } }
  function restore(){
    var raw=get('cmi.suspend_data'); if(!raw) return; var d; try{ d=JSON.parse(raw); }catch(e){ return; }
    try{ for(var k in (d.g||{})) GSTAT[k]={best:d.g[k]}; }catch(e){}
    try{ (d.e||[]).forEach(function(k){ EXDONE[k]=true; }); (d.s||[]).forEach(function(k){ STDONE[k]=true; }); }catch(e){}
    try{ if(d.rd && window.rdSet) window.rdSet(d.rd); else if(d.th==='dark' && typeof ti!=='undefined'){ ti=1; applyTheme(); } }catch(e){}
    try{ if(d.p && d.p.l && d.p.l!==LANGAPI.get() && LANGAPI.set) LANGAPI.set(d.p.l,true); }catch(e){}
    try{ if(d.p && d.p.go && d.p.go!=='home' && d.p.go!=='xhome'){ navSel=d.p.niv?d.p.niv+':'+d.p.go:d.p.go;
         if(d.p.niv) goNivel(d.p.niv,d.p.go); else goDestino(d.p.go);
         if(d.p.sub && HSUB[d.p.go]) HSUB[d.p.go](d.p.sub); sideNav(); }
         else if(d.p && d.p.go==='xhome') goDestino('xhome');
         else if(typeof homeRender==='function') homeRender(); }catch(e){}
    last=raw;
  }
  function complete(){ if(get('cmi.core.lesson_status')!=='completed'){ set('cmi.core.lesson_status','completed'); commit(); } }
  function hms(ms){ var s=Math.round(ms/1000), h=Math.floor(s/3600), m=Math.floor(s%3600/60), x=s%60;
    function p(n,l){ n=String(n); while(n.length<l) n='0'+n; return n; } return p(h,4)+':'+p(m,2)+':'+p(x,2); }
  function finish(){ if(finished) return; finished=true; save(); set('cmi.core.session_time',hms(Date.now()-t0));
    set('cmi.core.exit','suspend'); commit(); try{ api.LMSFinish(''); }catch(e){} }
  window.addEventListener('load',function(){
    restore();
    setInterval(function(){
      try{ HIST.pila.forEach(function(e){ if(e.go!=='home') visited[e.go]=1; }); }catch(x){}
      if(Object.keys(visited).length>=3 || Date.now()-t0>300000) complete();
      save();
    },10000);
  });
  window.addEventListener('pagehide',finish);
  window.addEventListener('beforeunload',finish);
})();
