/* =====================================================================
   ANUNCIOS · Google AdSense con consentimiento previo (solo versión web)
   ---------------------------------------------------------------------
   Desactivado por defecto: mientras ADS.client esté vacío no se carga
   nada de Google ni aparece ningún aviso.
   Para activarlo (véase docs/derechos-y-anuncios.md):
     1. Publique la web en un dominio propio y obtenga la aprobación de
        AdSense.  2. Rellene ADS.client ('ca-pub-…') y ADS.slot.
     3. Suba ads.txt a la raíz del dominio (plantilla: ads.txt.example).
     4. Si recibe visitas del EEE, Reino Unido o Suiza, Google exige una
        CMP certificada (IAB TCF): active la de Google en «Privacidad y
        mensajes» de AdSense y ponga ADS.cmpGoogle=true; este aviso propio
        deja entonces de mostrarse.
   Nunca se ejecuta dentro de un LMS (paquete SCORM) ni al abrir el archivo
   desde el disco; tools/build.py lo excluye además del paquete SCORM.
   ===================================================================== */
(function(){
const ADS=window.ADS={
  client:'',          /* 'ca-pub-0000000000000000' */
  slot:'',            /* id del bloque de anuncios adaptable */
  cmpGoogle:false,    /* true si se usa la CMP de Google (EEE / RU / CH) */
  clave:'da-consent'
};
function enLMS(){ try{ let w=window,n=0; while(w&&n<12){ if(w.API||w.API_1484_11) return true; if(w.parent===w) break; w=w.parent; n++; } }catch(e){ return true; } return false; }
ADS.activo=!!ADS.client && location.protocol.indexOf('http')===0 && !enLMS();
if(!ADS.activo) return;

window.dataLayer=window.dataLayer||[];
function gtag(){ window.dataLayer.push(arguments); }
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});

function lee(){ try{ return JSON.parse(localStorage.getItem(ADS.clave)||'null'); }catch(e){ return null; } }
function guarda(v){ try{ localStorage.setItem(ADS.clave,JSON.stringify({v,f:new Date().toISOString().slice(0,10)})); }catch(e){} }
let cargado=false;
function carga(){
  if(cargado) return; cargado=true;
  const s=document.createElement('script'); s.async=true; s.crossOrigin='anonymous';
  s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+encodeURIComponent(ADS.client);
  document.head.appendChild(s);
  /* un único bloque, al final del contenido: lejos de la navegación, los
     botones de respuesta y los vídeos, para evitar clics accidentales */
  if(ADS.slot){
    const foot=document.querySelector('.content > footer');
    const box=document.createElement('aside'); box.className='ad-slot'; box.setAttribute('aria-label','Publicidad');
    box.innerHTML='<ins class="adsbygoogle" style="display:block" data-ad-client="'+ADS.client+'" data-ad-slot="'+ADS.slot+'" data-ad-format="auto" data-full-width-responsive="true"></ins>';
    if(foot) foot.before(box);
    try{ (window.adsbygoogle=window.adsbygoogle||[]).push({}); }catch(e){}
  }
}
function decide(acepta){
  guarda(acepta?'si':'no');
  if(acepta){ gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'}); carga(); }
  const b=document.querySelector('.ck-bar'); if(b) b.remove();
}
function aviso(){
  if(document.querySelector('.ck-bar')) return;
  const b=document.createElement('div'); b.className='ck-bar'; b.setAttribute('role','dialog'); b.setAttribute('aria-label','Cookies y publicidad');
  b.innerHTML='<p>Esta web es gratuita y se financia con publicidad de <b>Google AdSense</b>. Si acepta, Google y sus socios podrán usar cookies para mostrar y medir anuncios, que pueden ser personalizados. Si rechaza, no se carga publicidad ni se instala ninguna cookie de terceros. Puede cambiar su decisión en cualquier momento desde «Preferencias de cookies», al pie de la página. <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">Cómo usa Google los datos</a>.</p>'
   +'<div class="ck-b"><button class="lnk" data-ck="info">Política de privacidad</button><button class="btn" data-ck="no">Rechazar</button><button class="btn pri" data-ck="si">Aceptar</button></div>';
  document.body.appendChild(b);
  b.querySelector('[data-ck="si"]').onclick=()=>decide(true);
  b.querySelector('[data-ck="no"]').onclick=()=>decide(false);
  b.querySelector('[data-ck="info"]').onclick=()=>{ if(window.legalOpen) legalOpen('priv'); };
}
ADS.preferencias=()=>{ try{ localStorage.removeItem(ADS.clave); }catch(e){} if(cargado){ location.reload(); return; } aviso(); };

/* enlace permanente en el pie legal */
const links=document.querySelector('.lg-links');
if(links&&!ADS.cmpGoogle){ const p=document.createElement('button'); p.textContent='Preferencias de cookies'; p.onclick=ADS.preferencias; links.appendChild(p); }

if(ADS.cmpGoogle){ carga(); return; }   /* la CMP certificada de Google gestiona el consentimiento */
const c=lee();
if(c&&c.v==='si'){ gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'}); carga(); }
else if(!c) aviso();
})();
