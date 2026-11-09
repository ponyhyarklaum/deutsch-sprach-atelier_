/* =====================================================================
   GRAMMATIKBÜCHER · bibliografía de gramática recomendada
   - Página propia en «Grundlagen»: gramáticas recomendadas agrupadas por
     nivel y gramáticas gratuitas en línea.
   - En cada unidad de gramática añade «Para profundizar», con las obras
     adecuadas a su nivel y, cuando existe, el diccionario temático de grammis.
   ===================================================================== */
(function(){
const G='https://grammis.ids-mannheim.de';
/* [clave, autor, título, editorial, niveles, idioma, tipo, nota] */
const BASE=[
 ['klipp','Fandrych, C. y Tallowitz, U.','Klipp und Klar. Übungsgrammatik Grundstufe A1–B1','Klett, 2016',['A1','A2','B1'],'Alemán','Ejercicios',
  'Una doble página por tema: explicación a la izquierda, práctica a la derecha. La gramática de ejercicios más útil para A1–B1.'],
 ['gplus1','Werner, E.','Grammatik Plus A1. Deutsche Grammatik – Referenz und Praxis','ELI, 2017',['A1'],'Alemán','Referencia y práctica',
  'Explicaciones breves con cuadros y ejercicios progresivos.'],
 ['gplus2','Werner, E.','Grammatik Plus A2. Deutsche Grammatik – Referenz und Praxis','ELI',['A2'],'Alemán (resumen en español)','Referencia y práctica',
  'Volumen del nivel A2, con cuadros de referencia y práctica.'],
 ['intensiv','Lemcke, C. y Rohrmann, L.','Grammatik Intensivtrainer NEU (vol. 1 A1 · vol. 2 A2)','Klett',['A1','A2'],'Alemán','Ejercicios',
  'Entrenamiento intensivo con muchos ejercicios cortos; ideal para automatizar formas.'],
 ['aktiv','Jin, F. y Voß, U.','Grammatik aktiv A1–B1. Üben, Hören, Sprechen','Cornelsen, 2013',['A1','A2','B1'],'Alemán','Referencia y práctica',
  '80 capítulos de doble página (explicación + ejercicios), audios y anexo de verbos con dativo, con preposición e irregulares. Es la obra con la que se contrastó el itinerario A1–B1 de esta app.'],
 ['konv','Swerlowa, O.','Grammatik & Konversation (vol. 1 A1–B1 · vol. 2 B1–B2)','Klett',['A1','A2','B1','B2'],'Alemán','Gramática comunicativa',
  'Une cada estructura con actividades orales: útil para practicarla hablando en clase.'],
 ['dinsel','Geiner, S. y Dinsel, S.','Deutsch: Übungsbuch Grammatik A2–B2','Hueber, 2019',['A2','B1','B2'],'Alemán','Ejercicios',
  'Unos 500 ejercicios variados; complemento de cualquier gramática o manual.'],
 ['eggelte','Eggelte, B. (rev. R. Sánchez Prieto)','Gramática alemana','Ediciones Universidad de Salamanca, 2020',['A2','B1','B2','C1','C2'],'Español','Referencia',
  'Gramática descriptiva completa escrita para hispanohablantes. Disponible también como libro electrónico.'],
 ['ruppert','Ruppert, O.','Gramática sucinta de lengua alemana','Herder, 2004',['A1','A2','B1'],'Español','Referencia',
  'Gramática clásica en español, organizada en lecciones con lecturas y vocabulario. Ojo: sigue la ortografía anterior a la reforma de 1996 (rauh, daß, Sonnabend) y una terminología antigua (las «cinco declinaciones» del sustantivo); úsala como consulta, no como modelo ortográfico.']
];
/* obras de referencia habituales en la enseñanza del alemán */
const REF=[
 ['reimann','Reimann, M.','Gramática básica del alemán','Hueber',['A1','A2','B1'],'Español','Referencia y práctica',
  'Versión española de la «Grundstufen-Grammatik»: explicaciones contrastivas y ejercicios con soluciones.'],
 ['dreyer','Dreyer, H. y Schmitt, R.','Lehr- und Übungsbuch der deutschen Grammatik – aktuell','Hueber',['A2','B1','B2','C1'],'Alemán','Referencia y práctica',
  'El clásico para el nivel intermedio: teoría sistemática y abundantes ejercicios. Existe edición en español: «Prácticas de gramática alemana».'],
 ['billina','Billina, A. y Reimann, M.','Übungsgrammatik für die Grundstufe','Hueber, 2012',['A1','A2','B1'],'Alemán','Ejercicios',
  'Teoría en cuadros y ejercicios por bloques (verbo, sustantivo, preposiciones, oración) con lista de formas verbales y de verbos con preposición.'],
 ['hering','Hering, A., Matussek, M. y Perlmann-Balme, M.','Übungsgrammatik für die Mittelstufe – aktuell','Hueber, 2019',['B1','B2'],'Alemán','Ejercicios',
  'Repaso sistemático para B1–B2 en fichas de doble página, con tests en línea; muy completa en conectores, pasiva y Konjunktiv.'],
 ['ga2','Jin, F. y Voß, U.','Grammatik aktiv B1+ y Grammatik aktiv B2–C1','Cornelsen',['B1','B2','C1'],'Alemán','Referencia y práctica',
  'Continuación de Grammatik aktiv: repaso de B1 y 88 capítulos para B2–C1, con la misma maqueta de explicación y práctica.'],
 ['hall','Hall, K. y Scheiner, B.','Übungsgrammatik für die Oberstufe – aktuell','Hueber, 2020',['B2','C1','C2'],'Alemán','Ejercicios',
  'Para el nivel avanzado: matices de uso, nominalización, estilo.'],
 ['helbig','Helbig, G. y Buscha, J.','Deutsche Grammatik. Ein Handbuch für den Ausländerunterricht','Klett / Langenscheidt',['B2','C1','C2'],'Alemán','Referencia',
  'Manual de referencia exhaustivo pensado para la enseñanza del alemán como lengua extranjera.'],
 ['duden','Dudenredaktion','Duden. Die Grammatik (Duden, tomo 4)','Duden',['C1','C2'],'Alemán','Referencia',
  'La gramática normativa de referencia del alemán estándar.']
];
const WEB=[
 ['Propädeutische Grammatik','grammis · IDS',G+'/progr@mm','Introducción en línea a la gramática alemana, con ejemplos y ejercicios.'],
 ['Grammatik in Fragen und Antworten','grammis · IDS',G+'/fragen','Respuestas a dudas frecuentes de gramática (Dativ o Genitiv, coma, concordancia…).'],
 ['Wörterbuch der Präpositionen','grammis · IDS',G+'/praepositionen','Qué caso rige cada preposición y con qué significados.'],
 ['Wörterbuch zur Verbvalenz','grammis · IDS',G+'/verbvalenz','Qué complementos pide cada verbo (Akkusativ, Dativ, preposición).'],
 ['Wörterbuch der Konnektoren','grammis · IDS',G+'/konnektoren','weil, obwohl, trotzdem…: posición del verbo y significado.'],
 ['Deutsche Grammatik 2.0','deutschegrammatik20.de','https://deutschegrammatik20.de/','Gramática completa y gratuita en línea, organizada por categorías.'],
 ['Grammatik · mein-deutschbuch','mein-deutschbuch.de','https://mein-deutschbuch.de/','Explicaciones y ejercicios por nivel, ya enlazados en cada unidad de esta app.'],
 ['Variantengrammatik','IDS Mannheim','https://www.variantengrammatik.net/','Diferencias gramaticales entre el estándar de Alemania, Austria y Suiza.']
];

/* Capítulos de las gramáticas contrastadas, por unidad de la app.
   GA = Grammatik aktiv A1–B1 (Kapitel) · GB = Grammatik aktiv B1+ (Kapitel)
   ÜG = Übungsgrammatik Grundstufe (apartado) · MS = Übungsgrammatik Mittelstufe (apartado)
   OS = Übungsgrammatik Oberstufe (§)                                                     */
const CAP={
 aussprache:{RU:'Prosodia y ortografía'}, rechtschreibung:{MS:'8.1–8.3',RU:'Prosodia y ortografía'},
 satzbau0:{GA:'9–12',ÜG:'D 1–2',MS:'7.1, 7.6'}, praesens:{GA:'1–4',ÜG:'A 2.1',GB:'1'},
 artikel:{GA:'14',ÜG:'B 5',MS:'2.1–2.3',GB:'6, 20'}, plural:{GA:'13',ÜG:'B 2',MS:'1.2'},
 nominativ:{GA:'16',ÜG:'B 4',MS:'1.3'}, akkusativ:{GA:'16',ÜG:'B 4',MS:'1.3'},
 pronomen:{GA:'18, 20',ÜG:'B 8.1, 8.3',MS:'2.4, 4.1',GB:'7'}, wortstellung:{GA:'11–12',ÜG:'D 2',MS:'7.1–7.2',GB:'2'},
 negation:{GA:'15',MS:'7.3'}, modalverben:{GA:'5–6, 27',ÜG:'A 1.2',MS:'6.10–6.11',GB:'3'},
 trennbar:{GA:'7, 52',ÜG:'A 4',MS:'6.18–6.19'}, imperativ:{GA:'8',ÜG:'A 7',MS:'7.4–7.5'},
 perfekt:{GA:'24–26',ÜG:'A 2.2',GB:'4',OS:'1'}, dativ:{GA:'17, 20',ÜG:'B 4',MS:'1.4'},
 dativverben:{GA:'21–22',GB:'5',MS:'1.4'}, praepakkdat:{GA:'31–32',GB:'10',MS:'5.4'},
 praeptemp:{GA:'30, 78',ÜG:'C 2',GB:'9',MS:'5.6–5.7'}, praeteritum:{GA:'23, 27, 49',ÜG:'A 2.3'},
 wechsel:{GA:'33–34',ÜG:'C 1',MS:'5.5'}, praeplokal:{GA:'35, 43',ÜG:'C 1',GB:'11',MS:'5.1–5.4'},
 positionsverben:{GA:'62',MS:'6.17'}, adverbien:{GA:'43',MS:'5.1–5.3, 7.2'},
 adjektive:{GA:'36–39, 79',ÜG:'B 6–7',GB:'12–13',MS:'3.1–3.5'}, welcher:{GA:'19',ÜG:'B 5',MS:'2.1'},
 futur:{GA:'59–60',ÜG:'A 2.5',MS:'6.5–6.6'}, genitiv:{GA:'63',ÜG:'B 4',MS:'1.5'}, ndekl:{GA:'64',ÜG:'B 3',MS:'1.6'},
 nebensatz:{GA:'42, 67',ÜG:'D 3.1–3.2, 3.5–3.6',MS:'7.9–7.10'}, konnektoren:{GA:'40–41',ÜG:'D 4',GB:'15',MS:'7.8'},
 doppelkonn:{GA:'75–76',GB:'13',MS:'7.14'}, temporal:{GA:'72–73',ÜG:'D 3.4',GB:'14',MS:'7.15–7.17'},
 plusquam:{GA:'50',ÜG:'A 2.4',MS:'6.4'}, relativ:{GA:'70–71',ÜG:'D 3.3',GB:'16',MS:'7.12–7.13',OS:'14'},
 praepverb:{GA:'53–54',ÜG:'A 5',GB:'17',MS:'4.5, 6.8'}, reflexiv:{GA:'29, 51',ÜG:'A 3',GB:'8',MS:'6.9'},
 infinitivzu:{GA:'68–69, 74',ÜG:'A 6, D 3.7',MS:'7.11, 7.21',OS:'11'}, lassen:{GA:'61',MS:'6.15'},
 passiv1:{GA:'57–58',ÜG:'A 9',GB:'19',MS:'6.20',OS:'4'}, konjunktiv2a:{GA:'55–56',ÜG:'A 8',GB:'18',MS:'6.24, 6.26–6.27',OS:'6'},
 passiv2:{MS:'6.21–6.23',OS:'4–5'}, konjunktiv2b:{MS:'6.25–6.28',OS:'6'}, subjektiv:{MS:'6.12–6.13',OS:'8'},
 relativ2:{MS:'7.12–7.13',OS:'14'}, konnektoren2:{MS:'7.18–7.25',OS:'13'}, partizip:{GA:'80',MS:'3.9'},
 nomstil:{MS:'7.26–7.27',OS:'10'}, genitivpraep:{GA:'77',MS:'5.8–5.9'}, modalpartikel:{GA:'44',MS:'5.10'},
 konjunktiv1:{MS:'6.29',OS:'7'}, funktionsverb:{MS:'6.30'}, valenz:{MS:'6.7',OS:'2, 12'},
 konzessiv:{ÜG:'D 3.8–3.9',MS:'7.19–7.23',OS:'13'}, wortbildung:{GA:'45–48',MS:'1.8–1.9, 3.10'},
 textkohaesion:{MS:'4.2–4.3'}, syntaxkomplex:{MS:'7.1',OS:'12'}, stil:{}, phraseologie:{MS:'6.30'}
};
const CAPN={GA:['Grammatik aktiv A1–B1','Kap.'],GB:['Grammatik aktiv B1+','Kap.'],ÜG:['Übungsgrammatik Grundstufe','Teil'],
 MS:['Übungsgrammatik Mittelstufe','Abschnitt'],OS:['Übungsgrammatik Oberstufe','§'],RU:['Gramática sucinta (Ruppert)','']};
/* diccionario temático de grammis según el ámbito de la unidad */
const TEMA={'Preposiciones':2,'Preposición':2,'Verbo':3,'Casos':3,'Pasado':3,'Futuro':3,'Sintaxis':4};

const I={
 book:'<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
 web:'<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19M12 2.5a14.5 14.5 0 0 0 0 19"/>',
 shelf:'<rect x="4" y="3" width="4" height="18" rx="1"/><rect x="10" y="3" width="4" height="18" rx="1"/><path d="m16.5 4 3.8 16.5"/>',
 ext:'<path d="M7 17 17 7M8 7h9v9"/>'
};
const ic=k=>'<svg viewBox="0 0 24 24">'+I[k]+'</svg>';
const lv=a=>a.length>1?a[0]+'–'+a[a.length-1]:a[0];
IC.shelf=I.shelf;

function bookCard(b){
  const [k,aut,tit,ed,nv,idi,tipo,nota]=b;
  return '<div class="oe-card bk"><div class="bk-meta"><span class="bk-lv">'+lv(nv)+'</span><span>'+tipo+'</span><span>'+idi+'</span></div>'
   +'<h3><i>'+tit+'</i></h3><p class="bk-aut">'+aut+' · '+ed+'</p><p>'+nota+'</p></div>';
}
function webCard(w){
  return '<a class="oe-card oe-link" href="'+w[2]+'" target="_blank" rel="noopener"><div class="oe-ic">'+ic('web')+'</div><div><h3>'+w[0]+'</h3><p>'+w[3]+'</p><small>'+w[1]+'</small></div><svg class="ext" viewBox="0 0 24 24">'+I.ext+'</svg></a>';
}
let fNiv='';
function render(){
  const el=document.getElementById('m-bib'); if(!el) return;
  const ok=b=>!fNiv||b[4].includes(fNiv);
  const ALL=[...BASE,...REF].filter(ok);
  const banda=(t,s,f)=>{const l=ALL.filter(f); return l.length?'<div class="oe-h">'+t+' <small>'+s+'</small></div><div class="oe-grid">'+l.map(bookCard).join('')+'</div>':'';};
  el.innerHTML='<div class="oe-hero bk-hero"><div class="oe-top"><span class="oe-kick">Bibliographie</span></div>'
   +'<h1>Grammatikbücher</h1><p class="oe-dateline">Gramáticas recomendadas · Recursos gratuitos</p>'
   +'<p>Las gramáticas que conviene tener a mano para estudiar los temas de esta app, agrupadas por nivel. Se encuentran en bibliotecas públicas y universitarias y en librerías; al final de cada unidad, «Para profundizar» indica el capítulo equivalente de varias de ellas.</p></div>'
   +'<div class="oe-cat bk-filter">'+['','A1','A2','B1','B2','C1','C2'].map(k=>'<button data-bn="'+k+'"'+(k===fNiv?' class="on"':'')+'>'+(k||'Todos los niveles')+'</button>').join('')+'</div>'
   +banda('Primeros pasos','A1 – B1',b=>b[4][0]==='A1')
   +banda('Nivel intermedio','A2 – B2',b=>b[4][0]==='A2'||b[4][0]==='B1')
   +banda('Nivel avanzado','B2 – C2',b=>b[4][0]==='B2'||b[4][0]==='C1')
   +'<div class="oe-h">Gramáticas gratuitas en línea</div>'
   +'<div class="oe-grid">'+WEB.map(webCard).join('')+'</div>'
   +'<p class="oe-note">Enlaces comprobados en noviembre de 2026. Cada unidad de gramática muestra al final las obras de su nivel en «Para profundizar».</p>';
  el.querySelectorAll('[data-bn]').forEach(b=>b.onclick=()=>{fNiv=b.dataset.bn;render();});
}
/* --- «Para profundizar» al final de cada unidad --- */
function profundizar(t){
  const nv=t.lvl, libros=[...BASE,...REF].filter(b=>b[4].includes(nv)).slice(0,5);
  const web=TEMA[t.sub]!=null?[WEB[TEMA[t.sub]]]:[WEB[0]];
  const li=b=>'<li><i>'+b[2]+'</i> — '+b[1]+'</li>';
  const c=CAP[t.id]||{}, caps=Object.keys(CAPN).filter(k=>c[k]).map(k=>'<li><i>'+CAPN[k][0]+'</i> · '+(CAPN[k][1]?CAPN[k][1]+' ':'')+c[k]+'</li>').join('');
  const extra=['B2','C1','C2'].includes(nv)?'<li><i>Grammatik aktiv B2–C1</i> · capítulo del mismo tema</li>':'';
  return '<div class="bk-deep"><b>Para profundizar · '+nv+'</b>'
   +((caps||extra)?'<p class="bk-sub">Capítulos equivalentes</p><ul>'+caps+extra+'</ul>':'')
   +'<p class="bk-sub">Libros del nivel</p><ul>'+libros.map(li).join('')
   +web.map(w=>'<li>En línea: <a href="'+w[2]+'" target="_blank" rel="noopener">'+w[0]+'</a> ('+w[1]+')</li>').join('')
   +'</ul><button class="bk-all" type="button">Ver toda la bibliografía ›</button></div>';
}
const _gt=gramTheory;
gramTheory=function(i){
  _gt(i);
  const sq=document.querySelector('#gramOut .startquiz'); if(!sq) return;
  sq.insertAdjacentHTML('beforebegin',profundizar(GRAM[i]));
  const b=document.querySelector('#gramOut .bk-all'); if(b) b.onclick=()=>{navSel='biblio';goDestino('biblio');sideNav();};
};
/* --- registro en la navegación --- */
PAGES.biblio=['Grammatikbücher','allgemein','bib']; MINI.biblio='shelf'; COLOR.biblio='#8a6fd0';
RECT.biblio=['Grammatikbücher','Gramáticas recomendadas'];
if(SUB.allgemein) SUB.allgemein.push(['biblio','Grammatikbücher']);
SECS.push('bib');
const gr=NAV.find(n=>n.t==='Grundlagen'); if(gr) gr.hijos.push({t:'Grammatikbücher',go:'biblio'});
const _gm=goMode;
goMode=function(p){ _gm(p); if(p==='biblio') render(); };
sideNav();
})();
