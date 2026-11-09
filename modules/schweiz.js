/* =====================================================================
   SCHWEIZ · sección de alemán de Suiza (Schweizer Hochdeutsch y Mundart)
   Misma arquitectura que modules/oesterreich.js: se registra en NAV,
   PAGES y SECS y envuelve goMode y homeFilas. Reutiliza las clases .oe-*.
   ===================================================================== */
(function(){
const I={
 cross:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 7.5v9M7.5 12h9"/>',
 globe:'<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19M12 2.5a14.5 14.5 0 0 0 0 19"/>',
 book:'<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
 wave:'<path d="M2 12h2l3-7 4 14 3-9 2 4h6"/>',
 grammar:'<path d="M4 7V5h16v2M9 20h6M12 5v15"/>',
 map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="m8.5 13.9-1.5 7.6 5-3 5 3-1.5-7.6"/>',
 laptop:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
 doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
 news:'<path d="M4 22h16a2 2 0 0 0 2-2V4H8v16a2 2 0 0 1-4 0V9h4"/><path d="M12 8h6M12 12h6M12 16h4"/>',
 tv:'<rect x="2.5" y="6" width="19" height="13" rx="2"/><path d="m8 2.5 4 3.5 4-3.5"/>',
 school:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
 speak:'<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
 headph:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
 ss:'<path d="M7 20V8a4 4 0 0 1 8 0c0 2-2 3-2 3s4 .5 4 4.5a4.5 4.5 0 0 1-6 4.2"/>',
 ext:'<path d="M7 17 17 7M8 7h9v9"/>'
};
const ic=k=>'<svg viewBox="0 0 24 24">'+I[k]+'</svg>';
IC.cross=I.cross;
const FLAG='<svg class="ch-flag" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="5" fill="#d52b1e"/><path fill="#fff" d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z"/></svg>';

/* ---------- datos ---------- */
const HELV=[ // [Schweiz, Deutschland, español, categoría]
 ['das Velo','das Fahrrad','bicicleta','Verkehr'],
 ['das Tram','die Straßenbahn','tranvía','Verkehr'],
 ['das Billett','die Fahrkarte','billete','Verkehr'],
 ['der Perron','der Bahnsteig','andén','Verkehr'],
 ['parkieren','parken','aparcar','Verkehr'],
 ['das Trottoir','der Bürgersteig','acera','Verkehr'],
 ['der Pneu','der Reifen','neumático','Verkehr'],
 ['das Natel','das Handy','teléfono móvil','Alltag'],
 ['der Coiffeur','der Friseur','peluquero','Alltag'],
 ['der Abwart','der Hausmeister','conserje','Alltag'],
 ['der Estrich','der Dachboden','desván','Alltag'],
 ['die Finken (Pl.)','die Hausschuhe','pantuflas','Alltag'],
 ['das Cheminée','der Kamin','chimenea','Alltag'],
 ['die Occasion','das Gebrauchte','artículo de segunda mano','Alltag'],
 ['das Rüebli','die Karotte','zanahoria','Essen'],
 ['das Poulet','das Hähnchen','pollo','Essen'],
 ['die Peperoni','die Paprika','pimiento','Essen'],
 ['der Nüsslisalat','der Feldsalat','canónigos','Essen'],
 ['das Gipfeli','das Croissant','cruasán','Essen'],
 ['der Rahm','die Sahne','nata','Essen'],
 ['die Glace','das Eis','helado','Essen'],
 ['grillieren','grillen','asar a la parrilla','Essen'],
 ['das Znüni','das zweite Frühstück','tentempié de media mañana','Essen'],
 ['das Zvieri','der Nachmittagsimbiss','merienda','Essen'],
 ['das Spital','das Krankenhaus','hospital','Amt & Schule'],
 ['die Matur','das Abitur','examen final del bachillerato','Amt & Schule'],
 ['die Busse','das Bußgeld','multa','Amt & Schule'],
 ['allfällig','eventuell','eventual','Amt & Schule']
];
const GRUSS=[
 ['Grüezi! / Grüezi mitenand!','Buenos días (a una persona / a varias). Saludo cortés de uso general.','neutral · formal'],
 ['Hoi! / Sali!','Hola, entre amigos y conocidos.','informal'],
 ['Salü!','Hola y también adiós (del francés salut).','informal'],
 ['Merci! / Merci vielmal!','Gracias / muchas gracias. Más frecuente que «danke».','neutral'],
 ['Uf Widerluege!','Adiós, forma cortés.','dialecto · formal'],
 ['Tschau! / Ciao!','Adiós entre conocidos.','informal'],
 ['En Guete!','Buen provecho.','neutral'],
 ['Exgüsi!','Perdón, disculpe (del francés excusez).','coloquial'],
 ['Gäll?','¿Verdad?, ¿no?','coloquial'],
 ['Hopp Schwiiz!','¡Vamos, Suiza! (deporte).','coloquial']
];
const KARTE=[['Café crème','café con crema, el pedido clásico'],['Rösti','tortita de patata rallada'],['Birchermüesli','muesli con fruta y yogur'],
 ['Zürcher Geschnetzeltes','ternera en salsa de nata'],['Fondue','queso fundido para compartir'],['Rivella','refresco suizo de suero de leche']];
const DIALOG=[
 ['Kundin','Grüezi! Ein Billett nach Luzern, bitte.','¡Buenos días! Un billete a Lucerna, por favor.'],
 ['Angestellter','Grüezi. Einfach oder retour?','Buenos días. ¿Solo ida o ida y vuelta?'],
 ['Kundin','Retour, bitte. Ich habe das Halbtax.','Ida y vuelta, por favor. Tengo el abono de medio precio.'],
 ['Angestellter','Gut. Das macht 28 Franken 40.','Bien. Son 28 francos con 40.'],
 ['Kundin','Kann ich mit Karte zahlen?','¿Puedo pagar con tarjeta?'],
 ['Angestellter','Ja, sicher. Der Zug fährt um 10.05 Uhr auf Perron 7.','Sí, claro. El tren sale a las 10:05 del andén 7.'],
 ['Kundin','Merci vielmal! Uf Widerluege.','¡Muchas gracias! Adiós.'],
 ['Angestellter','Adieu, gute Reise!','¡Adiós, buen viaje!']
];
const STAEDTE=[['Zürich','ciudad más grande'],['Bern','Bundesstadt (sede federal)'],['Basel','frontera con DE y FR'],['Luzern','Suiza central'],['St. Gallen','este del país'],['Winterthur','cantón de Zúrich']];
const SW='https://www.swissinfo.ch', SRF='https://www.srf.ch', FIDE='https://fide-service.ch/de', IDI='https://www.idiotikon.ch';
const RES=[
 ['SWI swissinfo.ch · Deutsch','news',SW+'/ger/','Servicio internacional de la radiotelevisión pública suiza (SRG): actualidad de Suiza en alemán. La «DW suiza».','medien'],
 ['SWI swissinfo.ch · Español','globe',SW+'/spa/','La misma redacción en español: útil para leer primero la noticia en tu lengua y después en alemán.','medien'],
 ['swissinfo · Kultur','news',SW+'/ger/kultur/','Cultura, literatura y tradiciones suizas en alemán.','medien'],
 ['swissinfo · Gesellschaft','news',SW+'/ger/gesellschaft-schweiz/','Vida cotidiana, educación y sociedad en Suiza.','medien'],
 ['SRF school','school',SRF+'/sendungen/school','Plataforma educativa gratuita de la televisión suiza de lengua alemana: vídeos por materia y nivel.','srf'],
 ['SRF Play','tv',SRF+'/play/tv','Televisión suiza a la carta: series, documentales y noticias en Hochdeutsch y en Mundart.','srf'],
 ['SRF News · Schweiz','news',SRF+'/news/schweiz','Noticias nacionales del canal público suizo.','srf'],
 ['SRF Audio','headph',SRF+'/audio','Radio y pódcast de SRF para entrenar el oído con acento suizo.','srf'],
 ['fide · Sprachniveaus','doc',FIDE+'/sprachniveaus','Qué significa cada nivel (A1–C2) en situaciones de la vida en Suiza.','fide'],
 ['fide-Test','award',FIDE+'/sprachnachweise/fide-test','Examen oficial suizo de comunicación cotidiana para residencia y naturalización.','fide'],
 ['Anerkannte Sprachzertifikate','award',FIDE+'/sprachnachweise/anerkannte-sprachzertifikate','Certificados que Suiza reconoce además del fide-Test.','fide'],
 ['fide · Sprachkurse','school',FIDE+'/fide-kurse','Buscador de cursos con el sello fide en toda Suiza.','fide'],
 ['Was ist Schweizerdeutsch?','speak',IDI+'/schweizerdeutsch-info','Explicación del Schweizerisches Idiotikon sobre la Mundart y su relación con el alemán estándar.','idi'],
 ['Wortgeschichten','book',IDI+'/wortgeschichten','Historias breves de palabras suizoalemanas, con ejemplos auténticos.','idi'],
 ['Idiotikon digital','book',IDI+'/woerterbuch/idiotikon-digital','El gran diccionario del suizoalemán, consultable gratis en línea.','idi'],
 ['Variantengrammatik','grammar','https://www.variantengrammatik.net/','Gramática de las variantes del alemán estándar (Suiza, Austria, Alemania), del IDS Mannheim.','var'],
 ['Atlas zur deutschen Alltagssprache','map','https://www.atlas-alltagssprache.de/','Mapas del alemán cotidiano: dónde se dice Weggli, Semmel o Brötchen.','var']
];

/* ---------- navegación ---------- */
const P=[['schw','Überblick'],['schwwort','Helvetismen'],['schwgruss','Grüezi & Alltag'],['schwpruef','fide-Test'],['schwlern','Lernen online']];
P.forEach(([k,t])=>{ PAGES[k]=[t,'Schweiz','schw']; MINI[k]='cross'; COLOR[k]='#d52b1e';
  RECT[k]=['Schweiz · '+t,'Alemán de Suiza']; });
SUB['Schweiz']=[];
SECS.push('schw');
const pos=NAV.findIndex(n=>n.t==='Werkzeuge');
NAV.splice(pos<0?NAV.length:pos,0,{t:'Schweiz',ic:'cross',hijos:P.map(([k,t])=>({t,go:k}))});
if(!document.getElementById('m-schw')){ const sec=document.createElement('section'); sec.id='m-schw'; sec.className='hide';
  const ref=document.getElementById('m-oest')||document.querySelector('.content>section:last-of-type'); ref.after(sec); }

let Q=null, cat='Todas', fil='';
const say=t=>{ try{ const u=new SpeechSynthesisUtterance(t.replace(/\(Pl\.\)/,'')); u.lang='de-CH'; u.rate=.92;
  const vs=speechSynthesis.getVoices(); const v=vs.find(v=>/de-CH/i.test(v.lang))||vs.find(v=>/^de/i.test(v.lang)); if(v)u.voice=v;
  speechSynthesis.cancel(); speechSynthesis.speak(u);}catch(e){} };
const sayBtn=t=>'<button class="oe-say" data-say="'+t.replace(/"/g,'&quot;')+'" title="Escuchar">'+ic('speak')+'</button>';
const card=(i,t,p,ex)=>'<div class="oe-card"><div class="oe-ic">'+ic(i)+'</div><h3>'+t+'</h3><p>'+p+'</p>'+(ex?'<span class="oe-ex">'+ex+'</span>':'')+'</div>';
const tbl=(head,rows)=>'<div class="oe-tw"><table class="oe-table"><tr>'+head.map(h=>'<th>'+h+'</th>').join('')+'</tr>'+rows+'</table></div>';

function hero(){
  return '<div class="oe-hero"><div class="oe-top">'+FLAG+'<span class="oe-kick">Schweizer Hochdeutsch</span></div>'
   +'<h1>Schweiz</h1><p class="oe-dateline">Bern · Hochdeutsch und Mundart · Varietät des Deutschen</p>'
   +'<p>En la Suiza germanófona conviven dos formas de alemán: el <b>estándar suizo</b> (Schweizer Hochdeutsch), que se escribe y se usa en la escuela y las noticias, y la <b>Mundart</b> o suizoalemán, que se habla a diario. Aquí están sus palabras propias, sus saludos, el examen fide y los portales públicos para practicar.</p></div>'
   +'<div class="oe-seg" role="tablist">'+P.map(([k,t])=>'<button data-ch="'+k+'"'+(page===k?' class="on"':'')+'>'+t+'</button>').join('')+'</div>';
}
function vUeberblick(){
  return '<div class="oe-grid">'
   +card('globe','Diglosia','Se habla Mundart en casi todas las situaciones, también con desconocidos; el alemán estándar se reserva para la escritura, la escuela, las noticias y las situaciones formales.','Mundart: <b>Chuchichäschtli</b> · Hochdeutsch: <b>Küchenschränkchen</b>')
   +card('ss','Sin ß','La ortografía suiza no usa la Eszett: siempre se escribe «ss». Es la norma oficial, no un error.','<b>Strasse</b> · <b>gross</b> · <b>Fuss</b> (D: Straße, groß, Fuß)')
   +card('wave','Pronunciación','«ch» suena siempre gutural, también después de i o e; las palabras de origen francés suelen acentuarse en la primera sílaba.','<b>ich</b> [ɪχ] · <b>Billett</b> · <b>Velo</b>')
   +card('grammar','Gramática','Como en el sur, sitzen, stehen y liegen forman el Perfekt con sein. Algunos géneros cambian, y muchos verbos toman -ieren.','<b>das</b> Tram · <b>der</b> Match · <b>parkieren</b>, <b>grillieren</b>')
   +card('map','Cuatro lenguas nacionales','Alemán, francés, italiano y romanche. Alrededor de seis de cada diez habitantes tienen el alemán como lengua principal; de ahí los préstamos franceses.','<b>Merci</b> · <b>Trottoir</b> · <b>Glace</b>')
   +card('speak','Dialectos alemánicos','Cada región tiene su Mundart: Züritüütsch, Bärndütsch, Baseldytsch, Walliserdeutsch… Todos pertenecen al alemánico, la misma familia que el dialecto de Vorarlberg.','Grüezi · Hoi · Uf Widerluege')
   +'</div>'
   +'<div class="oe-h">Städte der Deutschschweiz <small>ciudades germanófonas</small></div>'
   +'<div class="oe-chips">'+STAEDTE.map(([c,d])=>'<span class="oe-chip"><b>'+c+'</b><span>'+d+'</span></span>').join('')+'</div>'
   +'<p class="oe-note">Suiza no tiene capital oficial: Berna es la «ciudad federal» (Bundesstadt), sede del Gobierno y del Parlamento.</p>';
}
function vWort(){
  const cats=['Todas',...new Set(HELV.map(a=>a[3]))], f=fil.toLowerCase();
  const rows=HELV.filter(a=>(cat==='Todas'||a[3]===cat)&&(!f||a.slice(0,3).join(' ').toLowerCase().includes(f)));
  return '<div class="oe-tools"><input type="search" id="chFil" placeholder="Buscar: Velo, pollo, Handy…" value="'+fil.replace(/"/g,'&quot;')+'">'
   +'<div class="oe-cat">'+cats.map(c=>'<button data-cat="'+c+'"'+(c===cat?' class="on"':'')+'>'+c+'</button>').join('')+'</div></div>'
   +tbl(['Schweiz','Deutschland','Español'],rows.length?rows.map(a=>'<tr><td>'+a[0]+sayBtn(a[0])+'</td><td>'+a[1]+'</td><td>'+a[2]+'<span class="n">'+a[3]+'</span></td></tr>').join('')
      :'<tr><td colspan="3" style="color:var(--ink3);font-weight:400">Sin resultados.</td></tr>')
   +'<div class="oe-h">Pon a prueba tu oído suizo <small>10 preguntas</small></div><div class="oe-card oe-quiz" id="chQuiz"></div>';
}
function quizNew(){ Q={items:[...HELV].sort(()=>Math.random()-.5).slice(0,10),i:0,ok:0,ans:null,opts:null}; }
function quizHTML(){
  if(!Q) quizNew();
  if(Q.i>=Q.items.length){ const pct=Math.round(Q.ok/Q.items.length*100);
    return '<div class="hint">Resultado</div><div class="q">'+Q.ok+' / '+Q.items.length+' · '+pct+' %</div>'
     +'<p style="color:var(--ink2);margin:6px 0 14px">'+(pct>=80?'Super! Ya entiendes el alemán de Suiza.':pct>=50?'Guet gmacht. Repasa la tabla y vuelve a intentarlo.':'Repasa la tabla y prueba otra ronda.')+'</p>'
     +'<button class="btn" id="chAgain">Otra ronda</button>'; }
  const it=Q.items[Q.i];
  if(!Q.opts){ const w=HELV.filter(a=>a!==it).sort(()=>Math.random()-.5).slice(0,3); Q.opts=[it,...w].sort(()=>Math.random()-.5); }
  return '<div class="hint">¿Cómo se dice en Alemania?</div><div class="q">'+it[0]+sayBtn(it[0])+'</div><div class="hint">'+it[2]+'</div>'
   +'<div class="oe-opts">'+Q.opts.map((o,j)=>{let c=''; if(Q.ans!==null){ if(o===it)c=' class="ok"'; else if(j===Q.ans)c=' class="no"'; }
      return '<button data-op="'+j+'"'+c+(Q.ans!==null?' disabled':'')+'>'+o[1]+'</button>';}).join('')+'</div>'
   +'<div class="oe-bar"><span>'+(Q.i+1)+' / '+Q.items.length+'</span><div class="nvbar"><i style="width:'+(Q.i/Q.items.length*100)+'%"></i></div><span>'+Q.ok+' aciertos</span>'
   +(Q.ans!==null?'<button class="btn" id="chNext">Siguiente</button>':'')+'</div>';
}
function quizWire(){
  const box=document.getElementById('chQuiz'); if(!box) return;
  box.innerHTML=quizHTML();
  box.querySelectorAll('[data-op]').forEach(b=>b.onclick=()=>{ const j=+b.dataset.op; Q.ans=j;
    if(Q.opts[j]===Q.items[Q.i]){Q.ok++; try{sfx.ok()}catch(e){}} else {try{sfx.no()}catch(e){}} quizWire(); });
  const n=document.getElementById('chNext'); if(n) n.onclick=()=>{Q.i++;Q.ans=null;Q.opts=null;quizWire();};
  const a=document.getElementById('chAgain'); if(a) a.onclick=()=>{quizNew();quizWire();};
  wireSay(box);
}
function vGruss(){
  return '<div class="oe-h">Grüezi! <small>saludos y expresiones</small></div>'
   +tbl(['Ausdruck','Uso','Registro'],GRUSS.map(g=>'<tr><td>'+g[0]+sayBtn(g[0].split(' / ')[0])+'</td><td>'+g[1]+'</td><td style="color:var(--ink3)">'+g[2]+'</td></tr>').join(''))
   +'<div class="oe-h">Typisch Schweiz <small>en la carta</small></div>'
   +'<div class="oe-chips">'+KARTE.map(([k,d])=>'<span class="oe-chip"><b>'+k+'</b><span>'+d+'</span></span>').join('')+'</div>'
   +'<div class="oe-h">Dialog · Nivel A2 <small>en la estación · pulsa ▸ para escuchar</small></div>'
   +'<div class="oe-dlg">'+DIALOG.map(d=>'<div><b>'+d[0]+'</b><span>'+d[1]+sayBtn(d[1])+'<em>'+d[2]+'</em></span></div>').join('')+'</div>'
   +'<p class="oe-note">El diálogo está en alemán estándar suizo con las fórmulas de cortesía típicas. La voz depende de las instaladas en el dispositivo.</p>';
}
function linkCard(r){
  const host=r[2].replace(/^https?:\/\/(www\.)?/,'').split('/')[0];
  return '<a class="oe-card oe-link" href="'+r[2]+'" target="_blank" rel="noopener"><div class="oe-ic">'+ic(r[1])+'</div><div><h3>'+r[0]+'</h3><p>'+r[3]+'</p><small>'+host+'</small></div><svg class="ext" viewBox="0 0 24 24">'+I.ext+'</svg></a>';
}
const grp=(t,s,k)=>'<div class="oe-h">'+t+' <small>'+s+'</small></div><div class="oe-grid">'+RES.filter(r=>r[4]===k).map(linkCard).join('')+'</div>';
function vPruef(){
  return '<div class="oe-grid">'
   +card('award','El fide-Test','Es el examen oficial de la Confederación para demostrar el nivel de alemán, francés o italiano en trámites de residencia y naturalización. Evalúa la comunicación oral y escrita en situaciones de la vida en Suiza.','')
   +card('doc','Niveles A1 – B1','Sus tareas se basan en escenas cotidianas: el médico, la escuela de los hijos, el trabajo, la administración. Por eso entrena justo el alemán práctico del nivel A2.','')
   +card('school','Otros certificados','Suiza reconoce también otros certificados de idiomas; la lista oficial está en el portal fide (Goethe, ÖSD y otros, según las condiciones publicadas).','')
   +'</div>'+grp('Portal fide','Secretaría de Estado de Migración (SEM)','fide');
}
function vLern(){
  return grp('SWI swissinfo.ch','el servicio internacional suizo, como DW','medien')
   +grp('SRF','radiotelevisión pública de la Suiza germanófona','srf')
   +grp('Schweizerisches Idiotikon','el suizoalemán explicado','idi')
   +grp('fide','aprendizaje y exámenes oficiales','fide')
   +grp('Varianten des Deutschen','recursos comunes a Suiza, Austria y Alemania','var')
   +'<p class="oe-note">Todos los enlaces son gratuitos, se abren en una pestaña nueva y fueron comprobados en noviembre de 2026.</p>';
}
function wireSay(root){ root.querySelectorAll('[data-say]').forEach(b=>b.onclick=e=>{e.stopPropagation();say(b.dataset.say);}); }
window.chRender=function(p){
  const gi=NAV.findIndex(n=>n.t==='Schweiz'); if(gi>=0&&!NAVOPEN[''+gi]){NAVOPEN[''+gi]=true; navSel=p; sideNav();}
  const el=document.getElementById('m-schw'); if(!el) return;
  const body={schw:vUeberblick,schwwort:vWort,schwgruss:vGruss,schwpruef:vPruef,schwlern:vLern}[p]||vUeberblick;
  el.innerHTML=hero()+'<div class="oe-body">'+body()+'</div>';
  el.querySelectorAll('[data-ch]').forEach(b=>b.onclick=()=>{navSel=b.dataset.ch;goDestino(b.dataset.ch);sideNav();});
  if(p==='schwwort'){
    const i=document.getElementById('chFil');
    i.oninput=()=>{fil=i.value;const ps=i.selectionStart;chRender('schwwort');const j=document.getElementById('chFil');j.focus();j.setSelectionRange(ps,ps);};
    el.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{cat=b.dataset.cat;chRender('schwwort');});
    quizWire();
  }
  wireSay(el);
};
const _gm=goMode;
goMode=function(p){ _gm(p); if(PAGES[p]&&PAGES[p][2]==='schw') chRender(p); };
const _hf=homeFilas;
homeFilas=function(){
  return _hf()+'<div class="rowttl"><h3>Schweiz</h3></div><div class="rowgrid">'
   +fila('Überblick','Hochdeutsch, Mundart y la ortografía sin ß','schw',null,'#d52b1e')
   +fila('Helvetismen','28 palabras con su equivalente y cuestionario','schwwort',null,'#d52b1e')
   +fila('Lernen online','swissinfo, SRF, fide e Idiotikon','schwlern',null,'#d52b1e')
   +'</div>';
};
sideNav();
if(page==='home') homeRender();
})();
