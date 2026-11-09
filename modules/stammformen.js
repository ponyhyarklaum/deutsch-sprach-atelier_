/* =====================================================================
   STAMMFORMEN · tabla de verbos irregulares (Werkzeuge)
   Buscador por infinitivo, forma o significado; filtro por vocal del
   Präteritum; aviso de que los compuestos se conjugan como su base.
   ===================================================================== */
(function(){
if(typeof IRREG==='undefined') return;
const I='<path d="M4 6h16M4 12h10M4 18h7"/><path d="m16 15 3 3 3-3M19 18V9"/>';
IC.stamm=I;
let q='', aux='';
const norm=x=>x.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
function render(){
  const el=document.getElementById('m-stamm'); if(!el) return;
  const f=norm(q);
  const rows=IRREG.filter(r=>(!f||norm(r.slice(0,5).join(' ')).includes(f))&&(!aux||r[3].startsWith(aux)));
  el.innerHTML='<div class="oe-hero bk-hero"><div class="oe-top"><span class="oe-kick">Stammformen</span></div>'
   +'<h1>Unregelmäßige Verben</h1><p class="oe-dateline">'+IRREG.length+' verbos irregulares · A1–B1</p>'
   +'<p>Las formas que hay que saber de memoria: presente de la 3.ª persona, Präteritum y Perfekt. Los verbos con prefijo separable se conjugan como su base: <i>abfahren</i> como <i>fahren</i> (fuhr ab, ist abgefahren), <i>einladen</i> como <i>laden</i>.</p></div>'
   +'<div class="oe-tools"><input type="search" id="stQ" placeholder="Buscar: fahren, fuhr, olvidar…" value="'+q.replace(/"/g,'&quot;')+'">'
   +'<div class="oe-cat">'+[['','Todos'],['hat','con haben'],['ist','con sein']].map(([k,l])=>'<button data-aux="'+k+'"'+(k===aux?' class="on"':'')+'>'+l+'</button>').join('')+'</div></div>'
   +'<div class="oe-tw"><table class="oe-table st-table"><tr><th>Infinitiv</th><th>Präsens (er)</th><th>Präteritum</th><th>Perfekt</th><th>Español</th></tr>'
   +(rows.length?rows.map(r=>'<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3].replace(/^(ist)/,'<b>$1</b>')+'</td><td>'+r[4]+(r[5]?'<span class="n">'+r[5]+'</span>':'')+'</td></tr>').join('')
      :'<tr><td colspan="5" style="color:var(--ink3);font-weight:400">Sin resultados.</td></tr>')+'</table></div>'
   +'<p class="oe-note">Formas contrastadas con las listas de verbos irregulares de Netzwerk A1–B1 (Klett) y de deutschlernerblog, y con el repertorio verbal de esta app: no se halló ninguna discrepancia.</p>';
  const i=document.getElementById('stQ');
  i.oninput=()=>{q=i.value;const p=i.selectionStart;render();const j=document.getElementById('stQ');j.focus();j.setSelectionRange(p,p);};
  el.querySelectorAll('[data-aux]').forEach(b=>b.onclick=()=>{aux=b.dataset.aux;render();});
}
PAGES.stamm=['Unregelmäßige Verben','lexico','stamm']; MINI.stamm='stamm'; COLOR.stamm='#ff9fb0';
RECT.stamm=['Verbos irregulares','Stammformen A1–B1'];
SECS.push('stamm');
const w=NAV.find(n=>n.t==='Werkzeuge'); if(w) w.hijos.splice(2,0,{t:'Verbos irregulares',go:'stamm'});
const _gm=goMode; goMode=function(p){ _gm(p); if(p==='stamm') render(); };
sideNav();
})();
