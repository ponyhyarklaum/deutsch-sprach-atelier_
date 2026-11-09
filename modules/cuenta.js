/* =====================================================================
   PROGRESO Y CUENTA
   - PROG guarda el avance (cuestionarios, lecturas, traducciones, conjugador)
     en el navegador (localStorage) y lo exporta / importa en JSON.
   - Inicio de sesión con Google (Firebase Authentication + Cloud Firestore):
     desactivado mientras FIREBASE.apiKey esté vacío. Para activarlo, cree un
     proyecto en https://console.firebase.google.com, habilite el proveedor
     «Google» en Authentication, cree una base Firestore, añada el dominio
     de publicación a «Authorized domains» y copie aquí la configuración web.
     Reglas de Firestore recomendadas (cada usuario solo lee y escribe lo suyo):
       match /progreso/{uid} { allow read, write: if request.auth != null && request.auth.uid == uid; }
   - Dentro de un LMS (SCORM) no se ofrece la cuenta: el progreso lo guarda la plataforma.
   ===================================================================== */
(function(){
const FIREBASE={apiKey:'',authDomain:'',projectId:'',appId:''};
const FB_VER='10.12.2';
const KEY='da-progreso';
let D={v:1,quiz:{},lect:{},trad:{},conj:{ok:0,tot:0},act:''};
try{ const g=JSON.parse(localStorage.getItem(KEY)||'null'); if(g&&g.v===1) D=Object.assign(D,g); }catch(e){}
let user=null, fb=null, tSync=0;
function guarda(){
  D.act=new Date().toISOString();
  try{ localStorage.setItem(KEY,JSON.stringify(D)); }catch(e){}
  if(user&&fb){ clearTimeout(tSync); tSync=setTimeout(sube,1500); }
}
const PROG=window.PROG={
  get:(c,id)=>D[c]&&D[c][id]!=null?D[c][id]:null,
  set:(c,id,v)=>{ if(!D[c]) D[c]={}; if(D[c][id]==null||v>D[c][id]){ D[c][id]=v; guarda(); } },
  quita:(c,id)=>{ if(D[c]&&D[c][id]!=null){ delete D[c][id]; guarda(); } },
  conj:(ok)=>{ D.conj.tot++; if(ok) D.conj.ok++; guarda(); },
  todo:()=>JSON.parse(JSON.stringify(D)),
  importa:o=>{ if(!o||o.v!==1) return false; mezcla(o); guarda(); return true; },
  borra:()=>{ D={v:1,quiz:{},lect:{},trad:{},conj:{ok:0,tot:0},act:''}; guarda(); },
  usuario:()=>user, activa:()=>!!FIREBASE.apiKey&&!enLMS()&&location.protocol.indexOf('http')===0,
  entra:()=>entra(), sale:()=>sale()
};
function mezcla(o){
  ['quiz','lect','trad'].forEach(c=>{ Object.entries(o[c]||{}).forEach(([k,v])=>{ if(D[c][k]==null||v>D[c][k]) D[c][k]=v; }); });
  if(o.conj&&o.conj.tot>D.conj.tot) D.conj=o.conj;
}
/* alemán: los cuestionarios de la app (GSTAT) se reflejan en PROG.quiz */
try{ Object.entries(D.quiz).forEach(([k,v])=>{ if(typeof GSTAT!=='undefined'&&typeof GRAM!=='undefined'&&GRAM.some(t=>t.id===k)&&!GSTAT[k]) GSTAT[k]={best:v}; }); }catch(e){}
setInterval(()=>{ try{ let c=false; Object.entries(GSTAT).forEach(([k,v])=>{ if(v&&v.best!=null&&(D.quiz[k]==null||v.best>D.quiz[k])){ D.quiz[k]=v.best; c=true; } }); if(c) guarda(); }catch(e){} },15000);

function enLMS(){ try{ let w=window,n=0; while(w&&n<12){ if(w.API||w.API_1484_11) return true; if(w.parent===w) break; w=w.parent; n++; } }catch(e){ return true; } return false; }
async function carga(){
  if(fb) return fb;
  const base='https://www.gstatic.com/firebasejs/'+FB_VER+'/';
  const [app,auth,fs]=await Promise.all([import(base+'firebase-app.js'),import(base+'firebase-auth.js'),import(base+'firebase-firestore.js')]);
  const a=app.initializeApp(FIREBASE);
  fb={auth:auth.getAuth(a),A:auth,db:fs.getFirestore(a),F:fs};
  fb.A.onAuthStateChanged(fb.auth,async u=>{ user=u; if(u){ await baja(); } pinta(); });
  return fb;
}
async function entra(){ try{ await carga(); await fb.A.signInWithPopup(fb.auth,new fb.A.GoogleAuthProvider()); }catch(e){ alerta('No se pudo iniciar sesión: '+(e&&e.code||e)); } }
async function sale(){ try{ if(fb) await fb.A.signOut(fb.auth); user=null; pinta(); }catch(e){} }
async function baja(){ try{ const r=await fb.F.getDoc(fb.F.doc(fb.db,'progreso',user.uid)); if(r.exists()) mezcla(r.data()); guarda(); await sube(); }catch(e){} }
async function sube(){ try{ if(user&&fb) await fb.F.setDoc(fb.F.doc(fb.db,'progreso',user.uid),D); }catch(e){} }
function alerta(t){ const el=document.getElementById('pgMsg'); if(el) el.textContent=t; }
/* restaurar la sesión si ya había una abierta */
if(PROG.activa()){ try{ if(localStorage.getItem('da-sesion')==='1') carga(); }catch(e){} }

/* --- página «Mi progreso» --- */
function pinta(){ if(typeof page!=='undefined'&&page==='pprog'&&window.PRACTICA) PRACTICA.render('pprog'); }
window.CUENTA={
  html(){
    const act=PROG.activa();
    let h='<div class="oe-card pg-cuenta"><div><b>'+(user?esc(user.displayName||'Cuenta de Google'):'Progreso en este navegador')+'</b><p>'
      +(user?'Su avance se sincroniza con su cuenta y estará disponible en cualquier dispositivo.'
        :act?'Inicie sesión con Google para guardar el avance en la nube y recuperarlo en otros dispositivos.'
        :enLMS()?'Dentro de la plataforma educativa, el progreso lo guarda el propio LMS (SCORM).'
        :'El inicio de sesión con Google aún no está configurado en esta publicación. Mientras tanto, el avance se guarda en este navegador y puede exportarlo e importarlo.')+'</p></div>'
      +(act?(user?'<button class="btn" id="pgSale">Cerrar sesión</button>':'<button class="btn pri" id="pgEntra"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" fill="#4285F4"/><path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" fill="#34A853"/><path d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" fill="#FBBC05"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.4 3-4.1 5.6-4.1z" fill="#EA4335"/></svg> Continuar con Google</button>'):'')
      +'</div><p id="pgMsg" class="oe-note"></p>';
    return h;
  },
  wire(el){
    const e=el.querySelector('#pgEntra'); if(e) e.onclick=()=>{ try{localStorage.setItem('da-sesion','1');}catch(_){} entra(); };
    const s=el.querySelector('#pgSale'); if(s) s.onclick=()=>{ try{localStorage.removeItem('da-sesion');}catch(_){} sale(); };
  },
  fb:()=>FIREBASE.apiKey?FIREBASE:null
};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
})();
