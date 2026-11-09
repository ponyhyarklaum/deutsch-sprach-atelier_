/* =====================================================================
   ÖSTERREICH · sección nueva (variedad austríaca del alemán)
   Se integra en la navegación existente sin tocar el resto del código.
   ===================================================================== */
(function(){
const OE_IC={
 mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="m4.1 15 3.9-6 2.2 4.4"/>',
 globe:'<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19M12 2.5a14.5 14.5 0 0 0 0 19"/>',
 book:'<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
 wave:'<path d="M2 12h2l3-7 4 14 3-9 2 4h6"/>',
 grammar:'<path d="M4 7V5h16v2M9 20h6M12 5v15"/>',
 map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
 cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5v2.5M12 2.5v2.5"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="m8.5 13.9-1.5 7.6 5-3 5 3-1.5-7.6"/>',
 laptop:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
 doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
 image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
 news:'<path d="M4 22h16a2 2 0 0 0 2-2V4H8v16a2 2 0 0 1-4 0V9h4"/><path d="M12 8h6M12 12h6M12 16h4"/>',
 school:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
 speak:'<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
 ext:'<path d="M7 17 17 7M8 7h9v9"/>'
};
const ic=(k)=>'<svg viewBox="0 0 24 24">'+OE_IC[k]+'</svg>';
IC.mountain=OE_IC.mountain;

/* ---------- datos ---------- */
const AUSTR=[ // [Österreich, Deutschland, español, categoría]
 ['der Jänner','der Januar','enero','Zeit'],
 ['der Feber','der Februar','febrero','Zeit'],
 ['heuer','dieses Jahr','este año','Zeit'],
 ['die Paradeiser (Pl.)','die Tomaten','tomates','Essen'],
 ['die Erdäpfel (Pl.)','die Kartoffeln','patatas','Essen'],
 ['die Marille','die Aprikose','albaricoque','Essen'],
 ['der Topfen','der Quark','requesón','Essen'],
 ['das Schlagobers','die Sahne','nata montada','Essen'],
 ['der Karfiol','der Blumenkohl','coliflor','Essen'],
 ['der Kren','der Meerrettich','rábano picante','Essen'],
 ['die Fisolen (Pl.)','die grünen Bohnen','judías verdes','Essen'],
 ['die Zwetschke','die Zwetschge','ciruela','Essen'],
 ['die Ribisel','die Johannisbeere','grosella','Essen'],
 ['der Kukuruz','der Mais','maíz','Essen'],
 ['das Faschierte','das Hackfleisch','carne picada','Essen'],
 ['die Palatschinke','der Pfannkuchen','crep','Essen'],
 ['die Semmel','das Brötchen','panecillo','Essen'],
 ['das Zuckerl','das Bonbon','caramelo','Essen'],
 ['das Sackerl','die Tüte','bolsa','Alltag'],
 ['der Kasten','der Schrank','armario','Alltag'],
 ['der Sessel','der Stuhl','silla','Alltag'],
 ['die Stiege','die Treppe','escalera','Alltag'],
 ['der Rauchfang','der Schornstein','chimenea','Alltag'],
 ['der Gehsteig','der Bürgersteig','acera','Alltag'],
 ['die Trafik','der Kiosk','estanco, quiosco','Alltag'],
 ['die Kassa','die Kasse','caja (para pagar)','Alltag'],
 ['das Spital','das Krankenhaus','hospital','Amt & Schule'],
 ['die Matura','das Abitur','examen final del bachillerato','Amt & Schule'],
 ['der Bub','der Junge','chico, niño','Amt & Schule'],
 ['die Jause','die Brotzeit, der Imbiss','merienda','Essen']
];
const GRUSS=[ // [Ausdruck, uso, registro]
 ['Grüß Gott!','Buenos días / buenas tardes. Saludo cortés, muy extendido.','neutral · formal'],
 ['Servus!','Hola y también adiós, entre conocidos.','informal'],
 ['Griaß di! / Griaß eich!','Hola (a una persona / a varias), forma dialectal.','dialecto'],
 ['Pfiat di! / Pfiat eich!','Adiós (de «Behüt dich Gott»), forma dialectal.','dialecto'],
 ['Baba!','Chao. Despedida coloquial, típica de Viena.','coloquial'],
 ['Habe die Ehre!','Fórmula cortés y algo anticuada de saludo o despedida.','formal · vienés'],
 ['Mahlzeit!','Saludo en el trabajo a mediodía; también «buen provecho».','neutral'],
 ['Passt!','Vale, está bien, de acuerdo.','coloquial'],
 ['Leiwand!','¡Genial! (Viena).','coloquial'],
 ['Gemma!','¡Vamos! (de «gehen wir»).','coloquial']
];
const KAFFEE=[
 ['Melange','café con leche espumada, el clásico vienés'],
 ['Verlängerter','espresso alargado con agua caliente'],
 ['Großer Brauner','doble espresso con un poco de leche'],
 ['Einspänner','moca en vaso con mucho Schlagobers'],
 ['Kleiner Schwarzer','espresso solo']
];
const DIALOG=[
 ['Kellner','Grüß Gott! Was darf’s sein?','¡Buenos días! ¿Qué va a tomar?'],
 ['Gast','Servus! Eine Melange und ein Stück Marillenkuchen, bitte.','¡Hola! Un café melange y un trozo de tarta de albaricoque, por favor.'],
 ['Kellner','Gern. Mit Schlagobers?','Con gusto. ¿Con nata?'],
 ['Gast','Ja, bitte. Und ein Glas Wasser.','Sí, por favor. Y un vaso de agua.'],
 ['Kellner','Passt, kommt sofort.','Vale, enseguida.'],
 ['Gast','Zahlen, bitte!','¡La cuenta, por favor!'],
 ['Kellner','Das macht 8,40 Euro.','Son 8,40 euros.'],
 ['Gast','9 Euro, passt so. Baba!','9 euros, quédese el cambio. ¡Chao!']
];
const LAENDER=[['Wien','Wien'],['Niederösterreich','St. Pölten'],['Oberösterreich','Linz'],['Salzburg','Salzburg'],
 ['Tirol','Innsbruck'],['Vorarlberg','Bregenz'],['Kärnten','Klagenfurt'],['Steiermark','Graz'],['Burgenland','Eisenstadt']];
const OSD=[
 ['A1','ÖSD Zertifikat A1','Presentarse, comprar, pedir información sencilla.'],
 ['A2','ÖSD Zertifikat A2','Rutinas, trabajo, vivienda y viajes en situaciones conocidas.'],
 ['B1','ÖSD Zertifikat B1','Formato modular común con el Goethe-Institut: cada módulo se certifica por separado.'],
 ['B2','ÖSD Zertifikat B2','Argumentar, entender textos complejos y conversar con soltura.'],
 ['C1','ÖSD Zertifikat C1','Uso académico y profesional, con precisión y matiz.'],
 ['C2','ÖSD Zertifikat C2','Dominio pleno; equivale al uso de un hablante culto.']
];
const SP='https://sprachportal.at', OI='https://www.oesterreichinstitut.com/at';
const RES=[
 ['Sprachportal · ÖIF','school',SP+'/','Portal oficial del Fondo de Integración de Austria: cursos, ejercicios y materiales gratuitos.'],
 ['Kursraum A1','laptop',SP+'/deutsch-lernen/a1/online-lernen/kursraum-a1/','Aula virtual guiada del nivel A1, con audio y ejercicios.'],
 ['Kursraum A2','laptop',SP+'/deutsch-lernen/a2/online-lernen/kursraum-a2/','Aula virtual del nivel A2: el nivel de este curso.'],
 ['Kursraum B1','laptop',SP+'/deutsch-lernen/b1/online-lernen/kursraum-b1/','Aula virtual del nivel B1 para seguir avanzando.'],
 ['Online lernen A2','book',SP+'/deutsch-lernen/a2/online-lernen/','Todas las propuestas en línea del nivel A2.'],
 ['Jetzt online üben','wave',SP+'/alle-angebote/online-uebungen/jetzt-online-ueben/','Ejercicios interactivos por tema y nivel.'],
 ['Online-Übungstests','award',SP+'/kurse-und-pruefungen/pruefungen/online-uebungstests/','Simulacros en línea de los exámenes de integración e idioma.'],
 ['Bildwörterbuch','image',SP+'/alle-angebote/publikationen/bildwoerterbuch/','Diccionario visual temático, descargable.'],
 ['Dialekt','speak',SP+'/deutsch-unterrichten/dialekt/','Materiales sobre los dialectos de Austria.'],
 ['Österreich Spiegel (Sprachportal)','news',SP+'/deutsch-unterrichten/oesterreich-spiegel/','Revista didáctica con textos actuales sobre Austria.'],
 ['Unterrichtsmagazin','doc',SP+'/deutsch-unterrichten/unterrichtsmagazin-deutsch-lernen/','Revista con fichas y propuestas para clase.'],
 ['Österreich Institut','globe',OI+'/','Institución oficial de enseñanza del alemán de Austria en el extranjero.'],
 ['Lernplattform «ÖI Servus»','laptop',OI+'/lernmaterialien/lernplattform-oei-servus/','Plataforma de aprendizaje del Österreich Institut.'],
 ['Österreich Spiegel (ÖI)','news',OI+'/lernmaterialien/oesterreich-spiegel/','Ediciones de la revista con textos por nivel.'],
 ['Wissenswertes über Österreich','map',OI+'/lernmaterialien/wissenswertes/','Datos, cultura y vida cotidiana en Austria.'],
 ['Typisch österreichische Getränke','cup',OI+'/typisch-oesterreichische-getraenke/','Del Almdudler al Spritzer: vocabulario de bebidas.'],
 ['Deutsch lernen online','laptop',OI+'/deutsch-lernen-online/','Cursos en línea con docentes del Österreich Institut.'],
 ['Studieren in Österreich','school',OI+'/studieren-in-oesterreich/','Requisitos de idioma y vida universitaria.'],
 ['ÖSD-Prüfungen','award',OI+'/oesd-pruefungen/','Información sobre los exámenes ÖSD.'],
 ['ÖIF · Deutsch lernen','book','https://www.integrationsfonds.at/angebote/integrationsmassnahmen/deutsch-lernen/uebersicht-deutsch-lernen/','Resumen de la oferta de aprendizaje del Fondo de Integración (ÖIF).'],
 ['ORF · Einfache Sprache','news','https://orf.at/einfach/','Noticias de la radiotelevisión pública austríaca en alemán sencillo: el equivalente austríaco de las noticias fáciles de DW.'],
 ['ORF · news.ORF.at','news','https://orf.at/','Portal de noticias del ORF: actualidad austríaca en alemán estándar de Austria.'],
 ['ostarrichi.org','book','https://www.ostarrichi.org/','Diccionario colaborativo y gratuito de palabras austríacas, con su equivalente en Alemania.'],
 ['Variantengrammatik','grammar','https://www.variantengrammatik.net/','Gramática en línea de las variantes del alemán estándar (Austria, Suiza, Alemania), del IDS Mannheim.'],
 ['Atlas zur deutschen Alltagssprache','map','https://www.atlas-alltagssprache.de/','Mapas de cómo se dicen las cosas en Alemania, Austria y Suiza: Semmel, Brötchen, Weggli…']
];

/* ---------- navegación ---------- */
const OEP=[['oest','Überblick','Panorama'],['oestwort','Austriazismen','Léxico'],['oestgruss','Grüße & Kaffeehaus','Uso'],
 ['oestpruef','ÖSD-Prüfungen','Examen'],['oestlern','Lernen online','Recursos']];
OEP.forEach(([k,t])=>{ PAGES[k]=[t,'Österreich','oest']; MINI[k]='mountain'; COLOR[k]='#e5484d';
  RECT[k]=['Österreich · '+t,'Variedad austríaca del alemán']; });
SUB['Österreich']=[];
SECS.push('oest');
const pos=NAV.findIndex(n=>n.t==='Werkzeuge');
NAV.splice(pos<0?NAV.length:pos,0,{t:'Österreich',ic:'mountain',hijos:OEP.map(([k,t])=>({t,go:k}))});

let oeQ=null, oeCat='Todas', oeFil='';
const say=t=>{ try{ const u=new SpeechSynthesisUtterance(t.replace(/\(Pl\.\)/,'')); u.lang='de-AT'; u.rate=.92;
  const v=speechSynthesis.getVoices().find(v=>/de-AT/i.test(v.lang))||speechSynthesis.getVoices().find(v=>/^de/i.test(v.lang)); if(v)u.voice=v;
  speechSynthesis.cancel(); speechSynthesis.speak(u);}catch(e){} };
const sayBtn=t=>'<button class="oe-say" data-say="'+t.replace(/"/g,'&quot;')+'" title="Escuchar">'+ic('speak')+'</button>';

function hero(){
  return '<div class="oe-hero"><div class="oe-top"><span class="oe-flag"><i></i><i></i><i></i></span><span class="oe-kick">Österreichisches Deutsch</span></div>'
   +'<h1>Österreich</h1><p class="oe-dateline">Wien · Sprache und Alltag · Varietät des Deutschen</p><p>El alemán no tiene un único estándar: Alemania, Austria y Suiza tienen cada uno su norma culta. Aquí está la variedad austríaca: su léxico propio, sus saludos, el examen ÖSD y los portales oficiales para practicar.</p></div>'
   +'<div class="oe-seg" role="tablist">'+OEP.map(([k,t])=>'<button data-oe="'+k+'"'+(page===k?' class="on"':'')+'>'+t+'</button>').join('')+'</div>';
}
function vUeberblick(){
  const card=(i,t,p,ex)=>'<div class="oe-card"><div class="oe-ic">'+ic(i)+'</div><h3>'+t+'</h3><p>'+p+'</p>'+(ex?'<span class="oe-ex">'+ex+'</span>':'')+'</div>';
  return '<div class="oe-grid">'
   +card('globe','Una lengua, tres estándares','El alemán es una lengua pluricéntrica. El estándar austríaco es tan correcto como el alemán de Alemania; solo difiere en léxico, pronunciación y algunos detalles gramaticales.','<b>Jänner</b> en Viena, <b>Januar</b> en Berlín: ambos son estándar.')
   +card('book','Österreichisches Wörterbuch','El ÖWB es la obra de referencia oficial para escuelas y administración en Austria. Recoge las formas propias del país junto a las comunes.','')
   +card('wave','Pronunciación','La terminación -ig suena [ɪk]; «ch» inicial suena [k] y algunas palabras cambian el acento.','<b>König</b> [ˈkøːnɪk] · <b>Chemie</b> [keˈmiː] · <b>Kaffee</b> [kaˈfeː]')
   +card('grammar','Gramática','sitzen, stehen y liegen forman el Perfekt con sein; en lo oral casi no se usa el Präteritum. Diminutivos en -erl y -l.','Ich <b>bin</b> lange <b>gesessen</b>. · das Sack<b>erl</b>, das Busser<b>l</b>')
   +card('doc','Composición con -s-','Muchas palabras compuestas llevan una -s- de unión que en Alemania no aparece.','<b>Schweinsbraten</b> (D: Schweinebraten) · <b>Zugsverspätung</b>')
   +card('mountain','Dialectos','La mayor parte de Austria habla dialectos bávaro-austríacos; en Vorarlberg, alemánico. El estándar convive con ellos.','Griaß di! · Pfiat di!')
   +'</div>'
   +'<div class="oe-h">Die neun Bundesländer <small>estados federados y capitales</small></div>'
   +'<div class="oe-chips">'+LAENDER.map(([l,h])=>'<span class="oe-chip"><b>'+l+'</b><span>'+h+'</span></span>').join('')+'</div>'
   +'<p class="oe-note">Austria tiene unos nueve millones de habitantes; Viena es la capital federal y a la vez un estado federado.</p>';
}
function vWort(){
  const cats=['Todas',...new Set(AUSTR.map(a=>a[3]))];
  const f=oeFil.toLowerCase();
  const rows=AUSTR.filter(a=>(oeCat==='Todas'||a[3]===oeCat)&&(!f||a.slice(0,3).join(' ').toLowerCase().includes(f)));
  return '<div class="oe-tools"><input type="search" id="oeFil" placeholder="Buscar: Marille, tomate, Schrank…" value="'+oeFil.replace(/"/g,'&quot;')+'">'
   +'<div class="oe-cat">'+cats.map(c=>'<button data-cat="'+c+'"'+(c===oeCat?' class="on"':'')+'>'+c+'</button>').join('')+'</div></div>'
   +'<div class="oe-tw"><table class="oe-table"><tr><th>Österreich</th><th>Deutschland</th><th>Español</th></tr>'
   +(rows.length?rows.map(a=>'<tr><td>'+a[0]+sayBtn(a[0])+'</td><td>'+a[1]+'</td><td>'+a[2]+'<span class="n">'+a[3]+'</span></td></tr>').join('')
     :'<tr><td colspan="3" style="color:var(--ink3);font-weight:400">Sin resultados.</td></tr>')+'</table></div>'
   +'<div class="oe-h">Pon a prueba tu oído austríaco <small>10 preguntas</small></div><div class="oe-card oe-quiz" id="oeQuiz"></div>';
}
function quizNew(){
  const pool=[...AUSTR].sort(()=>Math.random()-.5).slice(0,10);
  oeQ={items:pool,i:0,ok:0,done:false,ans:null};
}
function quizHTML(){
  if(!oeQ) quizNew();
  const Q=oeQ;
  if(Q.i>=Q.items.length){
    const pct=Math.round(Q.ok/Q.items.length*100);
    return '<div class="hint">Resultado</div><div class="q">'+Q.ok+' / '+Q.items.length+' · '+pct+' %</div>'
     +'<p style="color:var(--ink2);margin:6px 0 14px">'+(pct>=80?'Ausgezeichnet! Ya reconoces el alemán de Austria.':pct>=50?'Gut gemacht. Repasa la tabla y vuelve a intentarlo.':'Repasa la tabla de arriba y prueba otra ronda.')+'</p>'
     +'<button class="btn" id="oeAgain">Otra ronda</button>';
  }
  const it=Q.items[Q.i];
  if(!Q.opts){ const wrong=AUSTR.filter(a=>a!==it).sort(()=>Math.random()-.5).slice(0,3); Q.opts=[it,...wrong].sort(()=>Math.random()-.5); }
  return '<div class="hint">¿Cómo se dice en Alemania?</div><div class="q">'+it[0]+sayBtn(it[0])+'</div><div class="hint">'+it[2]+'</div>'
   +'<div class="oe-opts">'+Q.opts.map((o,j)=>{let c=''; if(Q.ans!==null){ if(o===it)c=' class="ok"'; else if(j===Q.ans)c=' class="no"'; }
      return '<button data-op="'+j+'"'+c+(Q.ans!==null?' disabled':'')+'>'+o[1]+'</button>';}).join('')+'</div>'
   +'<div class="oe-bar"><span>'+(Q.i+1)+' / '+Q.items.length+'</span><div class="nvbar"><i style="width:'+(Q.i/Q.items.length*100)+'%"></i></div><span>'+Q.ok+' aciertos</span>'
   +(Q.ans!==null?'<button class="btn" id="oeNext">Siguiente</button>':'')+'</div>';
}
function quizWire(){
  const box=document.getElementById('oeQuiz'); if(!box) return;
  box.innerHTML=quizHTML();
  box.querySelectorAll('[data-op]').forEach(b=>b.onclick=()=>{
    const Q=oeQ, j=+b.dataset.op; Q.ans=j;
    if(Q.opts[j]===Q.items[Q.i]){Q.ok++; try{sfx.ok()}catch(e){}} else {try{sfx.no()}catch(e){}}
    quizWire();
  });
  const n=document.getElementById('oeNext'); if(n) n.onclick=()=>{oeQ.i++;oeQ.ans=null;oeQ.opts=null;quizWire();};
  const a=document.getElementById('oeAgain'); if(a) a.onclick=()=>{quizNew();quizWire();};
  wireSay(box);
}
function vGruss(){
  return '<div class="oe-h">Grüßen wie in Österreich <small>saludos y expresiones</small></div>'
   +'<div class="oe-tw"><table class="oe-table"><tr><th>Ausdruck</th><th>Uso</th><th>Registro</th></tr>'
   +GRUSS.map(g=>'<tr><td>'+g[0]+sayBtn(g[0].split(' / ')[0])+'</td><td>'+g[1]+'</td><td style="color:var(--ink3)">'+g[2]+'</td></tr>').join('')+'</table></div>'
   +'<div class="oe-h">Im Wiener Kaffeehaus <small>la carta básica</small></div>'
   +'<div class="oe-chips">'+KAFFEE.map(([k,d])=>'<span class="oe-chip"><b>'+k+'</b><span>'+d+'</span></span>').join('')+'</div>'
   +'<div class="oe-h">Dialog · Nivel A2 <small>pulsa ▸ para escuchar</small></div>'
   +'<div class="oe-dlg">'+DIALOG.map(d=>'<div><b>'+d[0]+'</b><span>'+d[1]+sayBtn(d[1])+'<em>'+d[2]+'</em></span></div>').join('')+'</div>'
   +'<p class="oe-note">La voz depende de las voces instaladas en el dispositivo; si no hay una austríaca se usa una alemana.</p>';
}
function vPruef(){
  return '<div class="oe-grid">'
   +'<div class="oe-card"><div class="oe-ic">'+ic('award')+'</div><h3>Österreichisches Sprachdiplom Deutsch</h3><p>El ÖSD es el sistema de exámenes de alemán como lengua extranjera de Austria, reconocido internacionalmente. Evalúa las cuatro destrezas y tiene en cuenta la pluricentricidad del alemán.</p></div>'
   +'<div class="oe-card"><div class="oe-ic">'+ic('doc')+'</div><h3>Cuatro destrezas</h3><p><b>Lesen</b> (leer), <b>Hören</b> (escuchar), <b>Schreiben</b> (escribir) y <b>Sprechen</b> (hablar), igual que en las pruebas Goethe de esta app.</p></div>'
   +'<div class="oe-card"><div class="oe-ic">'+ic('laptop')+'</div><h3>Practica en línea</h3><p>El Sprachportal ofrece simulacros en línea; el Österreich Institut informa de fechas y centros.</p></div>'
   +'</div>'
   +'<div class="oe-tw"><table class="oe-table"><tr><th>Nivel</th><th>Examen</th><th>Qué demuestras</th></tr>'
   +OSD.map(o=>'<tr><td>'+o[0]+'</td><td style="font-weight:600">'+o[1]+'</td><td>'+o[2]+'</td></tr>').join('')+'</table></div>'
   +'<div class="oe-h">Enlaces oficiales</div><div class="oe-grid">'
   +RES.filter(r=>/pruefung|Übungstests/i.test(r[2]+r[0])).map(linkCard).join('')+'</div>';
}
function linkCard(r){
  const host=r[2].replace(/^https?:\/\/(www\.)?/,'').split('/')[0];
  return '<a class="oe-card oe-link" href="'+r[2]+'" target="_blank" rel="noopener"><div class="oe-ic">'+ic(r[1])+'</div><div><h3>'+r[0]+'</h3><p>'+r[3]+'</p><small>'+host+'</small></div><svg class="ext" viewBox="0 0 24 24">'+OE_IC.ext+'</svg></a>';
}
function vLern(){
  const g=(t,s,arr)=>'<div class="oe-h">'+t+' <small>'+s+'</small></div><div class="oe-grid">'+arr.map(linkCard).join('')+'</div>';
  return g('Sprachportal','Fondo de Integración de Austria (ÖIF)',RES.filter(r=>r[2].indexOf('sprachportal')>0))
   +g('Österreich Institut','enseñanza oficial del alemán de Austria',RES.filter(r=>r[2].indexOf('oesterreichinstitut')>0&&!/oesd/.test(r[2])))
   +g('ÖIF','oferta de aprendizaje',RES.filter(r=>r[2].indexOf('integrationsfonds')>0))
   +g('Medien und Wörterbücher','noticias y diccionarios gratuitos de Austria',RES.filter(r=>/orf\.at|ostarrichi/.test(r[2])))
   +g('Varianten des Deutschen','recursos comunes a Austria, Suiza y Alemania',RES.filter(r=>/variantengrammatik|alltagssprache/.test(r[2])))
   +'<p class="oe-note">Todos los enlaces se abren en una pestaña nueva y fueron comprobados en noviembre de 2026.</p>';
}
function wireSay(root){ root.querySelectorAll('[data-say]').forEach(b=>b.onclick=e=>{e.stopPropagation();say(b.dataset.say);}); }
window.oeRender=function(p){
  const gi=NAV.findIndex(n=>n.t==='Österreich'); if(gi>=0&&!NAVOPEN[''+gi]){NAVOPEN[''+gi]=true; navSel=p; sideNav();}
  const el=document.getElementById('m-oest'); if(!el) return;
  const body={oest:vUeberblick,oestwort:vWort,oestgruss:vGruss,oestpruef:vPruef,oestlern:vLern}[p]||vUeberblick;
  el.innerHTML=hero()+'<div class="oe-body">'+body()+'</div>';
  el.querySelectorAll('[data-oe]').forEach(b=>b.onclick=()=>{navSel=b.dataset.oe;goDestino(b.dataset.oe);sideNav();});
  if(p==='oestwort'){
    const i=document.getElementById('oeFil');
    i.oninput=()=>{oeFil=i.value;const pos=i.selectionStart;oeRender('oestwort');const j=document.getElementById('oeFil');j.focus();j.setSelectionRange(pos,pos);};
    el.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{oeCat=b.dataset.cat;oeRender('oestwort');});
    quizWire();
  }
  wireSay(el);
};
const _gm=goMode;
const BREAD={Niveles:'Niveles',Lexico:'Léxico',Gramatica:'Gramática',Practica:'Práctica',Allgemein:'Grundlagen'};
goMode=function(p){ _gm(p); if(PAGES[p]&&PAGES[p][2]==='oest') oeRender(p);
  const sp=document.querySelector('#topTitle span'); if(sp&&BREAD[sp.textContent]) sp.textContent=BREAD[sp.textContent]; };
const _hf=homeFilas;
homeFilas=function(){
  return _hf()+'<div class="rowttl"><h3>Österreich</h3></div><div class="rowgrid">'
   +fila('Überblick','Estándar austríaco, pronunciación y dialectos','oest',null,'#e5484d')
   +fila('Austriazismen','30 palabras con su equivalente y cuestionario','oestwort',null,'#e5484d')
   +fila('Lernen online','Sprachportal, ORF, Österreich Institut y ÖIF','oestlern',null,'#e5484d')
   +'</div>';
};
sideNav();
if(page==='home') homeRender();
})();
