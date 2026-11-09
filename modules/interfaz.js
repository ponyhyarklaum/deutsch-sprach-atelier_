/* =====================================================================
   IDIOMA DE LA INTERFAZ · español, Deutsch, English, Français
   Traduce la «cáscara» de la aplicación: menú lateral, cabecera, títulos,
   botones, pie, panel de lectura y bombillo. Las explicaciones y los
   ejercicios conservan su metalengua (español para hispanohablantes).
   El selector está en el panel «Aa» junto con la lengua de estudio y el
   enfoque (Práctica / Lingüística).
   ===================================================================== */
(function(){
const KEY='da-ui';
let UI='es'; try{ const g=localStorage.getItem(KEY); if(['de','en','fr','es'].includes(g)) UI=g; }catch(e){}
/* es: [de, en, fr] */
const T={
'Inicio':['Start','Home','Accueil'],'Léxico y práctica':['Wortschatz und Übung','Vocabulary and practice','Lexique et pratique'],'Vídeo e inmersión':['Video und Eintauchen','Video and immersion','Vidéo et immersion'],'Diccionario':['Wörterbuch','Dictionary','Dictionnaire'],'Plan de estudios':['Studienplan','Study plan','Plan d\'études'],'Repaso lingüístico':['Linguistischer Überblick','Linguistic overview','Révision linguistique'],'Lecturas complementarias':['Ergänzende Lektüre','Further reading','Lectures complémentaires'],'Lección':['Lektion','Lesson','Leçon'],'Enfoque':['Ausrichtung','Focus','Approche'],'Lengua de estudio':['Lernsprache','Language studied','Langue étudiée'],'Semántica':['Semantik','Semantics','Sémantique'],'Práctica':['Praxis','Practice','Pratique'],'Todos los cursos':['Alle Kurse','All courses','Tous les cours'],'Cursos':['Kurse','Courses','Cours'],'Ficha técnica':['Steckbrief','Course sheet','Fiche technique'],'Programa del curso':['Kursprogramm','Course programme','Programme du cours'],'A quién está dirigido':['Zielgruppe','Who it is for','Public visé'],'Itinerario':['Lernweg','Learning path','Parcours'],'Grundlagen':['Grundlagen','Foundations','Fondements'],'Werkzeuge':['Werkzeuge','Tools','Outils'],
'Theorie':['Theorie','Theory','Théorie'],'Satzbau':['Satzbau','Sentence structure','Structure de la phrase'],'Vocabulario interno':['Kernwortschatz','Core vocabulary','Vocabulaire de base'],
'Buscar':['Suchen','Search','Rechercher'],'Repertorio verbal':['Verbliste','Verb list','Répertoire verbal'],'Verbos irregulares':['Unregelmäßige Verben','Irregular verbs','Verbes irréguliers'],
'Todo el léxico':['Gesamter Wortschatz','All vocabulary','Tout le lexique'],'Todos los temas':['Alle Themen','All topics','Tous les thèmes'],'Modos de práctica':['Übungsmodi','Practice modes','Modes d\'entraînement'],
'Recorrido':['Lernweg','Path','Parcours'],'Léxico':['Wortschatz','Vocabulary','Lexique'],'Gramática':['Grammatik','Grammar','Grammaire'],'Lectura':['Lesen','Reading','Lecture'],
'Práctica':['Praxis','Practice','Pratique'],'Inmersión':['Eintauchen','Immersion','Immersion'],'Prueba de nivel':['Einstufungstest','Level test','Test de niveau'],
'Lenguas':['Sprachen','Languages','Langues'],'Conjugador':['Konjugator','Conjugator','Conjugueur'],'Gramática contrastiva':['Kontrastive Grammatik','Contrastive grammar','Grammaire contrastive'],
'Tiempo de aprendizaje':['Lernzeit','Learning time','Temps d\'apprentissage'],'Todas las unidades':['Alle Einheiten','All units','Toutes les unités'],'Recursos oficiales':['Offizielle Quellen','Official resources','Ressources officielles'],
'Directorio':['Verzeichnis','Directory','Répertoire'],'Vídeo y audio':['Video und Audio','Video and audio','Vidéo et audio'],'Exámenes y nivel':['Prüfungen und Niveau','Exams and level','Examens et niveau'],
'Diccionarios':['Wörterbücher','Dictionaries','Dictionnaires'],'Planificación':['Planung','Planning','Planification'],'Lectura y cultura':['Lesen und Kultur','Reading and culture','Lecture et culture'],
'Lectura crítica':['Kritisches Lesen','Critical reading','Lecture critique'],'Traducción sistemática':['Systematisches Übersetzen','Systematic translation','Traduction systématique'],
'¿Sabías que…?':['Schon gewusst?','Did you know?','Le saviez-vous ?'],'Libros y consejos':['Bücher und Tipps','Books and tips','Livres et conseils'],'Mi progreso':['Mein Fortschritt','My progress','Ma progression'],
'Inicio lingüístico':['Linguistik: Start','Linguistics home','Accueil linguistique'],'Ámbitos':['Bereiche','Fields','Domaines'],'Herramientas':['Werkzeuge','Tools','Outils'],'Biblioteca':['Bibliothek','Library','Bibliothèque'],
'Acceso abierto':['Open Access','Open access','Accès libre'],'Lingüística':['Linguistik','Linguistics','Linguistique'],'Fonética':['Phonetik','Phonetics','Phonétique'],'Fonología':['Phonologie','Phonology','Phonologie'],
'Morfología':['Morphologie','Morphology','Morphologie'],'Sintaxis':['Syntax','Syntax','Syntaxe'],'Gramática: tiempo, aspecto y modo':['Tempus, Aspekt und Modus','Tense, aspect and mood','Temps, aspect et mode'],
'Ortografía':['Orthographie','Spelling','Orthographe'],'Dialectología y sociolingüística':['Dialektologie und Soziolinguistik','Dialectology and sociolinguistics','Dialectologie et sociolinguistique'],
'Árbol sintáctico':['Syntaxbaum','Syntax tree','Arbre syntaxique'],'Inventario fonológico (AFI)':['Lautinventar (IPA)','Sound inventory (IPA)','Inventaire phonologique (API)'],'Segmentador morfológico':['Morphologische Segmentierung','Morphological segmenter','Segmenteur morphologique'],
'Concordancias (KWIC)':['Konkordanz (KWIC)','Concordance (KWIC)','Concordancier (KWIC)'],'Léxico comparado':['Wortschatzvergleich','Comparative word list','Lexique comparé'],
'Aviso legal':['Impressum','Legal notice','Mentions légales'],'Derechos de autor':['Urheberrecht','Copyright','Droits d\'auteur'],'Privacidad y cookies':['Datenschutz und Cookies','Privacy and cookies','Confidentialité et cookies'],
'Preferencias de cookies':['Cookie-Einstellungen','Cookie settings','Préférences de cookies'],'Al azar':['Zufall','Random','Au hasard'],'Unidad':['Einheit','Unit','Unité'],
'Biblioteca abierta':['Offene Bibliothek','Open library','Bibliothèque ouverte'],'Ámbito lingüístico':['Linguistischer Bereich','Linguistic field','Domaine linguistique'],'Herramientas lingüísticas':['Linguistische Werkzeuge','Linguistic tools','Outils linguistiques'],
'Fondo':['Hintergrund','Background','Fond'],'Tipo de letra':['Schriftart','Typeface','Police'],'Tamaño':['Größe','Size','Taille'],'Interlineado':['Zeilenabstand','Line spacing','Interligne'],'Márgenes':['Ränder','Margins','Marges'],
'Alineación':['Ausrichtung','Alignment','Alignement'],'Por defecto':['Standard','Default','Par défaut'],'Se aplica a todas las páginas':['Gilt für alle Seiten','Applies to all pages','S\'applique à toutes les pages'],
'Idioma de la interfaz':['Sprache der Oberfläche','Interface language','Langue de l\'interface'],'Lengua de estudio':['Lernsprache','Language studied','Langue étudiée'],'Enfoque':['Ausrichtung','Focus','Approche'],
'¿Qué quieres mejorar?':['Was möchtest du verbessern?','What would you like to improve?','Que veux-tu améliorer ?'],'Recursos oficiales y gratuitos':['Offizielle und kostenlose Quellen','Official free resources','Ressources officielles et gratuites'],
'Exámenes y niveles':['Prüfungen und Niveaus','Exams and levels','Examens et niveaux'],'Niveles':['Niveaus','Levels','Niveaux'],'Recientes':['Zuletzt besucht','Recent','Récents'],'Continuar':['Weiter','Continue','Continuer'],
'Blanco':['Weiß','White','Blanc'],'Crema':['Creme','Cream','Crème'],'Sepia':['Sepia','Sepia','Sépia'],'Verde':['Grün','Green','Vert'],'Negro':['Schwarz','Black','Noir'],
'Compacto':['Kompakt','Compact','Compact'],'Normal':['Normal','Normal','Normal'],'Amplio':['Weit','Wide','Large'],'Estrechos':['Schmal','Narrow','Étroites'],'Normales':['Normal','Normal','Normales'],'Amplios':['Breit','Wide','Larges'],
'Izquierda':['Links','Left','Gauche'],'Justificada':['Blocksatz','Justified','Justifié'],'Herramientas de análisis':['Analysewerkzeuge','Analysis tools','Outils d\'analyse'],
'A1 · Acceso':['A1 · Einstieg','A1 · Breakthrough','A1 · Découverte'],'A2 · Plataforma':['A2 · Grundlagen','A2 · Waystage','A2 · Survie'],'B1 · Umbral':['B1 · Schwelle','B1 · Threshold','B1 · Seuil'],
'B2 · Avanzado':['B2 · Fortgeschritten','B2 · Vantage','B2 · Avancé'],'C1 · Dominio operativo':['C1 · Fachkundig','C1 · Effective proficiency','C1 · Autonome'],'C2 · Maestría':['C2 · Meisterschaft','C2 · Mastery','C2 · Maîtrise'],
'Gramática por niveles':['Grammatik nach Niveau','Grammar by level','Grammaire par niveau'],'Datos':['Daten','Data','Données'],'Ejercicio':['Übung','Exercise','Exercice'],'Lecturas de acceso abierto':['Open-Access-Lektüre','Open-access readings','Lectures en accès libre'],
'Glosario':['Glossar','Glossary','Glossaire'],'Gramáticas recomendadas':['Empfohlene Grammatiken','Recommended grammars','Grammaires recommandées'],'Literatura por nivel':['Literatur nach Niveau','Literature by level','Littérature par niveau'],
'Consejos para la inmersión':['Tipps zum Eintauchen','Immersion tips','Conseils d\'immersion'],'Dónde se habla':['Wo man es spricht','Where it is spoken','Où on le parle'],'Un poco de historia':['Etwas Geschichte','A little history','Un peu d\'histoire'],
'Comparar':['Vergleichen','Compare','Comparer'],'Siguiente':['Weiter','Next','Suivant'],'Repetir':['Wiederholen','Repeat','Recommencer'],'Comprobar':['Prüfen','Check','Vérifier'],'Otra':['Noch eine','Another','Une autre'],
'▶ Escuchar':['▶ Anhören','▶ Listen','▶ Écouter'],'■ Detener':['■ Stopp','■ Stop','■ Arrêter'],'Ver en PDF':['Als PDF','View as PDF','Voir en PDF']
};
const IX={de:0,en:1,fr:2};
const ORIG=new WeakMap();
const REV={}; Object.entries(T).forEach(([es,v])=>v.forEach(x=>{ if(!REV[x]) REV[x]=es; }));
function tr(root){
  if(!root) return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null);
  let n; const L=[];
  while((n=w.nextNode())) L.push(n);
  L.forEach(n=>{
    const k=n.nodeValue.trim(); if(!k) return;
    let es=ORIG.get(n);
    if(es!==undefined&&![es,...(T[es]||[])].includes(k)){ es=undefined; ORIG.delete(n); }
    if(es===undefined){ es=T[k]?k:REV[k]; if(!es) return; ORIG.set(n,es); }
    const nuevo=UI==='es'?es:((T[es]||[])[IX[UI]]||es);
    if(k!==nuevo) n.nodeValue=n.nodeValue.replace(k,nuevo);
  });
}
const SEL=['.side','.topbar','.lg-foot','.rf-foot','#rdPanel','.bulb-pan','.modo-pan','.lengua-pan'];
const CONT=['.cu-sec h2','.cu-crumb','.oe-h','.rowttl h3','.xl-k','.lc-glos h4','.stacts .btn','.cj-dl .btn','.tr-src .btn','#lcQ .btn','#xQuiz .btn'];
let pend=false;
let usado=UI!=='es';
function todo(){ pend=false; if(UI==='es'&&!usado) return; usado=true; SEL.forEach(s=>document.querySelectorAll(s).forEach(tr)); document.querySelectorAll(CONT.join(',')).forEach(tr);
  const pt=document.getElementById('pageTitle'); if(pt) tr(pt); }
function pide(){ if(pend||(UI==='es'&&!usado)) return; pend=true; requestAnimationFrame(todo); }
const mo=new MutationObserver(pide);
setTimeout(()=>{ SEL.forEach(s=>document.querySelectorAll(s).forEach(el=>mo.observe(el,{childList:true,subtree:true}))); const c=document.querySelector('.content'); if(c) mo.observe(c,{childList:true}); pide(); },0);
const _gm=goMode; goMode=function(p){ _gm(p); pide(); };
function setUI(l){ UI=l; if(l!=='es') usado=true; try{ localStorage.setItem(KEY,l); }catch(e){} document.documentElement.lang=l; todo(); if(window.rdRepaint) rdRepaint(); }
document.documentElement.lang=UI;
/* filas extra del panel «Aa» */
window.rdExtra=function(pan){
  if(!pan) return;
  const seg=(k,cur,ops)=>'<div class="rd-seg">'+ops.map(([v,l])=>'<button data-x'+k+'="'+v+'"'+(cur===v?' class="on"':'')+'>'+l+'</button>').join('')+'</div>';
  const lg=window.IDIOMAS?IDIOMAS.get():'de', md=window.IDIOMAS?IDIOMAS.modo():'prac';
  const box=document.createElement('div'); box.className='rd-ext';
  box.innerHTML='<div class="rd-row"><span>Idioma de la interfaz</span>'+seg('ui',UI,[['es','Español'],['de','Deutsch'],['en','English'],['fr','Français']])+'</div>'
;
  const f=pan.querySelector('.rd-foot'); if(f) pan.insertBefore(box,f); else pan.appendChild(box);
  box.querySelectorAll('[data-xui]').forEach(b=>b.onclick=()=>{ setUI(b.dataset.xui); });
  box.querySelectorAll('[data-xlg]').forEach(b=>b.onclick=()=>{ if(window.IDIOMAS){ IDIOMAS.set(b.dataset.xlg); if(window.rdRepaint) rdRepaint(); } });
  box.querySelectorAll('[data-xmd]').forEach(b=>b.onclick=()=>{ if(window.IDIOMAS){ IDIOMAS.setModo(b.dataset.xmd); if(window.rdRepaint) rdRepaint(); } });
  tr(pan);
};
if(window.rdRepaint) rdRepaint();
window.INTERFAZ={set:setUI,get:()=>UI,t:k=>UI==='es'?k:((T[k]||[])[IX[UI]]||k)};
})();
