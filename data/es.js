/* =====================================================================
   ESPAÑOL · Atelier — datos del español como lengua extranjera (A1–C2)
   Explicaciones y ejercicios propios. Enlaces a fuentes oficiales y
   gratuitas (Instituto Cervantes, Centro Virtual Cervantes, RAE, FundéuRAE,
   DELE / SIELE, RTVE, ProfeDeELE, Hablacultura, VideoELE).
   Mismo formato que data/en.js y data/fr.js.
   ===================================================================== */
const ES=(function(){
const CVC=['Centro Virtual Cervantes','https://cvc.cervantes.es/'];
const RAE=['RAE · Diccionario de la lengua española','https://dle.rae.es/'];
const FUN=['FundéuRAE · dudas de uso','https://www.fundeu.es/'];
const PRO=['ProfeDeELE · materiales de gramática','https://www.profedeele.es/'];
const RAEG=['Real Academia Española · gramática y ortografía','https://www.rae.es/'];
const U=[
/* ------------------------------ A1 ------------------------------ */
{id:'es-a1-1',lvl:'A1',t:'Ser y estar: usos básicos',sub:'Verbo',h:5,pre:[],ref:[PRO,CVC],
 teoria:`<p>El español tiene dos verbos donde otras lenguas tienen uno (<i>to be, être, sein</i>). <b>Ser</b> identifica, clasifica y define; <b>estar</b> localiza y presenta estados resultantes o pasajeros.</p>
<table class="oe-table"><tr><th></th><th>ser</th><th>estar</th></tr>
<tr><td>yo</td><td>soy</td><td>estoy</td></tr><tr><td>tú / vos</td><td>eres / sos</td><td>estás</td></tr><tr><td>él, ella, usted</td><td>es</td><td>está</td></tr>
<tr><td>nosotros/as</td><td>somos</td><td>estamos</td></tr><tr><td>vosotros/as</td><td>sois</td><td>estáis</td></tr><tr><td>ellos, ellas, ustedes</td><td>son</td><td>están</td></tr></table>
<p><b>Ser</b>: nombre, origen, profesión, nacionalidad, características, hora, material, lugar de un evento (<i>La fiesta <b>es</b> en mi casa</i>). <b>Estar</b>: ubicación de personas y cosas (<i>Bogotá <b>está</b> en Colombia</i>), estados (<i>Estoy cansado</i>) y con <i>bien / mal</i>.</p>
<p class="xl-ej"><b>Soy</b> ingeniera y <b>soy</b> de Pekín. · Hoy <b>estoy</b> muy contenta. · El museo <b>está</b> cerca.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> El lugar de un objeto va con <i>estar</i>, pero el de un acontecimiento con <i>ser</i>. La edad no va con ninguno de los dos: <i>tengo 20 años</i>.</div>`,
 q:['Yo ___ de Shanghái.|estoy|soy|es|está|1|Origen: ser.',
  'Madrid ___ en España.|es|está|son|estoy|1|Ubicación: estar.',
  'Hoy nosotros ___ muy cansados.|somos|estamos|son|están|1|Estado: estar.',
  'Mi hermana ___ médica.|está|es|esté|ser|1|Profesión: ser.',
  'La reunión ___ en la sala 303.|está|es|hay|tiene|1|Lugar de un evento: ser.',
  '¿Cómo ___ (tú)? — Bien, gracias.|eres|estás|es|está|1|Con bien / mal: estar.',
  '___ las tres de la tarde.|Están|Son|Es|Hay|1|La hora: ser (plural con las dos, las tres…).',
  'Yo ___ veinte años.|soy|estoy|tengo|hay|2|La edad se expresa con tener.']},
{id:'es-a1-2',lvl:'A1',t:'Presente de indicativo regular',sub:'Verbo',h:4,pre:[],ref:[PRO,CVC],
 teoria:`<p>Los verbos se agrupan por la terminación del infinitivo: <b>-ar</b> (hablar), <b>-er</b> (comer) e <b>-ir</b> (vivir). Se quita la terminación y se añade la del presente.</p>
<table class="oe-table"><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>habl<b>o</b></td><td>com<b>o</b></td><td>viv<b>o</b></td></tr>
<tr><td>tú</td><td>habl<b>as</b></td><td>com<b>es</b></td><td>viv<b>es</b></td></tr>
<tr><td>él / usted</td><td>habl<b>a</b></td><td>com<b>e</b></td><td>viv<b>e</b></td></tr>
<tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>áis</b></td><td>com<b>éis</b></td><td>viv<b>ís</b></td></tr>
<tr><td>ellos / ustedes</td><td>habl<b>an</b></td><td>com<b>en</b></td><td>viv<b>en</b></td></tr></table>
<p>El pronombre sujeto suele omitirse porque la terminación ya indica la persona: <i>Hablo chino</i>. Se usa para contrastar o insistir: <i>Yo hablo chino y él habla inglés</i>. En casi toda América, <i>ustedes</i> sustituye a <i>vosotros</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Confundir las terminaciones de -er e -ir en <i>nosotros</i> (<i>comemos / vivimos</i>) y el acento de <i>vosotros</i> (<i>habláis</i>).</div>`,
 q:['Nosotros ___ en Bogotá. (vivir)|vivemos|vivimos|vivamos|viven|1|-ir: -imos.',
  'Tú ___ mucho café. (beber)|bebes|bebas|bebe|bebís|0|-er: -es.',
  'Ellos ___ español. (estudiar)|estudia|estudian|estudien|estudiamos|1|-ar: -an.',
  'Yo ___ en una oficina. (trabajar)|trabaja|trabajo|trabajas|trabaje|1|yo: -o.',
  'Vosotros ___ rápido. (comer)|coméis|comís|comáis|comen|0|-er: -éis.',
  'Usted ___ muy bien. (escribir)|escribes|escribe|escriba|escribís|1|usted: 3.ª persona.',
  '¿Dónde ___ ustedes? (vivir)|viven|vivís|vivan|vive|0|ustedes: -en.',
  'Choose the natural sentence:|Yo hablo chino.|Hablo chino.|Las dos son correctas; la segunda es la más neutra.|Ninguna|2|El sujeto se omite salvo para contrastar.']},
{id:'es-a1-3',lvl:'A1',t:'Género, número y artículos',sub:'Sustantivo',h:4,pre:[],ref:[PRO,RAE],
 teoria:`<p>Todo sustantivo es <b>masculino</b> o <b>femenino</b>. Tendencias: <i>-o</i> masculino (<i>el libro</i>), <i>-a</i> femenino (<i>la casa</i>); <i>-ción, -dad, -tud</i> femeninos (<i>la canción, la ciudad</i>); <i>-ma</i> de origen griego masculinos (<i>el problema, el idioma</i>). Excepciones frecuentes: <i>el día, el mapa, la mano, la foto, la moto</i>.</p>
<table class="oe-table"><tr><th></th><th>masculino</th><th>femenino</th></tr>
<tr><td>determinado</td><td>el / los</td><td>la / las</td></tr><tr><td>indeterminado</td><td>un / unos</td><td>una / unas</td></tr></table>
<p>Plural: vocal + <b>-s</b> (<i>casas</i>), consonante + <b>-es</b> (<i>ciudades</i>), <i>-z → -ces</i> (<i>lápices</i>). Contracciones: <i>a + el = <b>al</b></i>, <i>de + el = <b>del</b></i>. Ante <i>a</i> tónica, el femenino toma <i>el</i>: <i><b>el</b> agua fría</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Para quien habla una lengua sin género (chino, inglés), lo eficaz es memorizar siempre el sustantivo con su artículo: <i>la ciudad</i>, <i>el problema</i>.</div>`,
 q:['___ problema es difícil.|La|El|Lo|Los|1|-ma de origen griego: masculino.',
  '___ ciudad es grande.|El|La|Lo|Las|1|-dad: femenino.',
  'Voy ___ cine.|a el|al|del|en el|1|a + el = al.',
  'Plural de «lápiz»:|lápizes|lápices|lápizs|lápis|1|-z → -ces.',
  '___ mano derecha.|El|La|Lo|Un|1|mano es femenino (excepción).',
  '___ agua está fría.|La|El|Lo|Las|1|a tónica: el agua (sigue siendo femenino: fría).',
  'Plural de «canción»:|canciónes|canciones|cancions|canción|1|+es y desaparece la tilde.',
  'Vengo ___ mercado.|de el|del|al|da|1|de + el = del.']},
{id:'es-a1-4',lvl:'A1',t:'Presente irregular: e > ie, o > ue, e > i y la 1.ª persona',sub:'Verbo',h:6,pre:['es-a1-2'],ref:[PRO,CVC],
 teoria:`<p>Muchos verbos frecuentes cambian la vocal de la raíz cuando esta lleva el acento (todas las personas menos <i>nosotros</i> y <i>vosotros</i>): el «modelo bota».</p>
<table class="oe-table"><tr><th>cambio</th><th>ejemplo</th><th>otros</th></tr>
<tr><td>e → ie</td><td>qu<b>ie</b>ro, qu<b>ie</b>res… quer<b>e</b>mos</td><td>pensar, empezar, preferir, cerrar</td></tr>
<tr><td>o → ue</td><td>p<b>ue</b>do, p<b>ue</b>des… pod<b>e</b>mos</td><td>dormir, volver, contar, encontrar</td></tr>
<tr><td>e → i</td><td>p<b>i</b>do, p<b>i</b>des… ped<b>i</b>mos</td><td>servir, repetir, seguir, vestir</td></tr>
<tr><td>u → ue</td><td>j<b>ue</b>go</td><td>solo jugar</td></tr></table>
<p>Otros son irregulares solo en <b>yo</b>: <i>hago, pongo, salgo, traigo, sé, doy, veo, conozco</i>. Y algunos combinan ambos: <i>tengo / tienes, vengo / vienes, digo / dices</i>. <i>Ir</i>: voy, vas, va, vamos, vais, van.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Aplicar el cambio también a <i>nosotros</i> (<i>*podemos</i> es correcto; <i>*puedemos</i> no).</div>`,
 q:['Yo ___ ir al cine. (querer)|quero|quiero|queremos|quiere|1|e > ie.',
  'Nosotros ___ ocho horas. (dormir)|duermemos|dormimos|duermimos|dormemos|1|Sin cambio en nosotros.',
  'Ella ___ un café. (pedir)|pede|pide|pida|piede|1|e > i.',
  'Yo ___ la tarea por la noche. (hacer)|haco|hago|hace|hazo|1|Irregular en yo.',
  '¿A qué hora ___ la clase? (empezar)|empeza|empieza|empiezan|empiece|1|e > ie.',
  'Mis hijos ___ al fútbol. (jugar)|jugan|juegan|juegen|jugamos|1|u > ue.',
  'Yo ___ a María. (conocer)|conoco|conozco|conosco|conoce|1|-zco.',
  'Tú ___ dos hermanos. (tener)|tenes|tienes|tiene|teneis|1|e > ie en tú.']},
{id:'es-a1-5',lvl:'A1',t:'Gustar y verbos de afección',sub:'Oración',h:4,pre:['es-a1-2'],ref:[PRO,CVC],
 teoria:`<p>Con <b>gustar</b> la persona que siente es el <b>objeto indirecto</b> y lo que gusta es el <b>sujeto</b>: el verbo concuerda con la cosa.</p>
<table class="oe-table"><tr><th>(refuerzo)</th><th>pronombre</th><th>verbo</th><th>sujeto</th></tr>
<tr><td>(a mí)</td><td>me</td><td>gusta</td><td>el café / bailar</td></tr>
<tr><td>(a ti)</td><td>te</td><td>gustan</td><td>las películas</td></tr>
<tr><td>(a él, a ella, a usted)</td><td>le</td><td>gusta</td><td>leer</td></tr>
<tr><td>(a nosotros)</td><td>nos</td><td>gustan</td><td>los perros</td></tr>
<tr><td>(a ellos, a ustedes)</td><td>les</td><td>gusta</td><td>la música</td></tr></table>
<p>Funcionan igual <i>encantar, interesar, doler, molestar, parecer, quedar bien/mal</i>: <i>Me <b>duelen</b> los pies</i>. Acuerdo y desacuerdo: <i>A mí también / A mí tampoco / A mí sí / A mí no</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Traducir literalmente «I like»: <i>*Yo gusto el café</i>. Correcto: <i><b>Me gusta</b> el café</i>.</div>`,
 q:['A mí ___ los gatos.|me gusta|me gustan|gusto|me gusto|1|Concuerda con «los gatos».',
  '¿A ti ___ bailar?|te gusta|te gustan|gustas|tú gustas|0|Infinitivo: singular.',
  'A nosotros ___ el cine.|nos gusta|nos gustan|gustamos|les gusta|0|nos + singular.',
  'A Pedro ___ la cabeza.|le duele|lo duele|duele|le duelen|0|doler funciona como gustar.',
  '— No me gusta el té. — A mí ___.|también|tampoco|sí|no|1|Acuerdo con una negación: tampoco.',
  '— Me encanta el mar. — A mí ___ (no me encanta).|tampoco|no|también|sí|1|Desacuerdo con una afirmación: a mí no.',
  'A ellos ___ mucho la historia.|les interesa|los interesa|interesan|les interesan|0|les + singular.',
  'Choose the correct sentence.|Yo gusto la pizza.|Me gusta la pizza.|Me gusto la pizza.|Gusto me la pizza.|1|Estructura de gustar.']},
{id:'es-a1-6',lvl:'A1',t:'Hay y está(n): existencia y ubicación',sub:'Oración',h:3,pre:['es-a1-1','es-a1-3'],ref:[PRO,CVC],
 teoria:`<p><b>Hay</b> (forma impersonal de <i>haber</i>, invariable) presenta la existencia de algo no identificado: va con <i>un/una</i>, números, cuantificadores o sin artículo. <b>Está / están</b> localiza algo ya identificado: va con <i>el/la</i>, posesivos o nombres propios.</p>
<table class="oe-table"><tr><th>hay</th><th>está / están</th></tr>
<tr><td><b>Hay</b> un banco en la esquina.</td><td><b>El</b> banco <b>está</b> en la esquina.</td></tr>
<tr><td><b>Hay</b> muchos estudiantes.</td><td><b>Mis</b> estudiantes <b>están</b> en clase.</td></tr>
<tr><td>¿<b>Hay</b> farmacias por aquí?</td><td>¿Dónde <b>está</b> la farmacia?</td></tr></table>
<p>Preposiciones de lugar: <i>en, encima de, debajo de, al lado de, delante de, detrás de, entre, cerca de, lejos de, enfrente de</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> <i>*Hay el museo</i> o <i>*Hayn muchos</i>: <i>hay</i> nunca cambia y no lleva artículo determinado.</div>`,
 q:['___ un supermercado cerca.|Está|Hay|Es|Están|1|Existencia: hay.',
  'El supermercado ___ cerca.|hay|está|es|están|1|Ubicación de algo identificado.',
  '¿Dónde ___ mis llaves?|hay|están|son|está|1|Plural identificado: están.',
  'En mi clase ___ doce estudiantes.|están|hay|son|tienen|1|Cantidad: hay.',
  'El museo ___ en esta calle.|hay|está|es|tiene|1|Con artículo determinado: está.',
  'La lámpara está ___ la mesa.|encima de|encima|en encima|sobre de|0|Locución: encima de.',
  '¿___ un baño por aquí?|Está|Hay|Es|Están|1|Pregunta por existencia.',
  'Correct form:|Hayn muchos coches.|Hay muchos coches.|Están muchos coches.|Hay los coches.|1|hay es invariable.']},
/* ------------------------------ A2 ------------------------------ */
{id:'es-a2-1',lvl:'A2',t:'Pretérito perfecto compuesto',sub:'Verbo',h:5,pre:['es-a1-4'],ref:[PRO,CVC],
 teoria:`<p>Se forma con <b>haber</b> en presente (<i>he, has, ha, hemos, habéis, han</i>) + <b>participio</b> (<i>-ado, -ido</i>). El participio no cambia.</p>
<p>Irregulares: <i>hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto, cubierto, resuelto</i>.</p>
<table class="oe-table"><tr><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>pasado en un tiempo no terminado</td><td><b>Hoy / esta semana he trabajado</b> mucho.</td></tr>
<tr><td>experiencia (alguna vez, nunca, todavía no, ya)</td><td>¿<b>Has estado</b> alguna vez en Cartagena?</td></tr></table>
<p><b>Variación:</b> en España se usa para lo ocurrido hoy; en gran parte de América se prefiere el indefinido (<i>Hoy trabajé mucho</i>). Ambas normas son correctas.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> No se separa <i>haber</i> del participio: <i>*He ya comido</i> → <i>Ya he comido</i>.</div>`,
 q:['Esta mañana ___ al médico.|he ido|he iba|ido|ha ido yo|0|haber + participio.',
  '¿___ alguna vez paella?|Has comido|Has comida|Comiste alguna vez has|Has comer|0|Participio invariable.',
  'Participio de «escribir»:|escribido|escrito|escribiendo|escrito|1|Irregular: escrito.',
  'Nosotros todavía no ___ la película.|hemos visto|hemos vido|habemos visto|hemos veído|0|ver → visto.',
  '¿Dónde ___ (tú) las llaves?|has puesto|has ponido|has puestas|has poner|0|poner → puesto.',
  'Elige el orden correcto:|He ya terminado.|Ya he terminado.|He terminado ya ya.|Ya terminado he.|1|No se separa la forma compuesta.',
  'Participio de «abrir»:|abrido|abierto|abrido|abriendo|1|Irregular.',
  'En gran parte de América, «Hoy he comido» suele decirse…|Hoy comí.|Hoy como.|Hoy comía.|Hoy comeré.|0|Preferencia por el indefinido.']},
{id:'es-a2-2',lvl:'A2',t:'Pretérito indefinido (perfecto simple)',sub:'Verbo',h:7,pre:['es-a1-4'],ref:[PRO,CVC],
 teoria:`<table class="oe-table"><tr><th></th><th>-ar (hablar)</th><th>-er / -ir (comer, vivir)</th></tr>
<tr><td>yo</td><td>habl<b>é</b></td><td>com<b>í</b></td></tr><tr><td>tú</td><td>habl<b>aste</b></td><td>com<b>iste</b></td></tr>
<tr><td>él / usted</td><td>habl<b>ó</b></td><td>com<b>ió</b></td></tr><tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>asteis</b></td><td>com<b>isteis</b></td></tr><tr><td>ellos</td><td>habl<b>aron</b></td><td>com<b>ieron</b></td></tr></table>
<p>Irregulares fuertes (sin tilde): <i>tuve, estuve, hice, puse, pude, quise, supe, vine, dije, traje</i>; <i>ir / ser</i>: <b>fui, fuiste, fue, fuimos, fuisteis, fueron</b>; <i>dar</i>: di, diste, dio. En -ir con cambio vocálico, la 3.ª persona cambia: <i>pidió, durmió</i>. Ortografía: <i>busqué, llegué, empecé</i>; <i>leyó, construyeron</i>.</p>
<p>Uso: acciones terminadas en un momento pasado delimitado (<i>ayer, el año pasado, en 2010, hace dos días</i>).</p>
<div class="xl-int"><b>Dificultad frecuente.</b> La tilde distingue tiempo y persona: <i>hablo</i> (presente, yo) / <i>habló</i> (pasado, él).</div>`,
 q:['Ayer yo ___ con mi madre. (hablar)|hablo|hablé|hablá|hablaba|1|-ar: -é.',
  'Ellos ___ a Lima en 2019. (ir)|fueron|iron|fuieron|fueran|0|ir: fueron.',
  'Él ___ la verdad. (decir)|decí|dijo|dició|dijó|1|Irregular: dijo, sin tilde.',
  'Yo ___ la tarea anoche. (hacer)|hací|hice|hizo|hacé|1|hacer: hice.',
  'Ella ___ un café. (pedir)|pedió|pidió|pidio|pedí|1|e > i en 3.ª persona.',
  'Yo ___ tarde a clase. (llegar)|llegé|llegué|llegue|llegó|1|g → gu ante e.',
  '¿Qué ___ (tú) el fin de semana? (hacer)|hiciste|haciste|hicistes|hizo|0|Sin -s final: hiciste.',
  'Nosotros ___ en el hotel. (estar)|estamos|estuvimos|estábamos|estuvemos|1|estar: estuvimos.']},
{id:'es-a2-3',lvl:'A2',t:'Pretérito imperfecto',sub:'Verbo',h:4,pre:['es-a2-2'],ref:[PRO,CVC],
 teoria:`<p>Formación muy regular: <b>-ar → -aba</b> (hablaba), <b>-er / -ir → -ía</b> (comía, vivía). Solo tres irregulares: <b>ser</b> (era), <b>ir</b> (iba), <b>ver</b> (veía).</p>
<table class="oe-table"><tr><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>hábitos del pasado</td><td>De niño <b>jugaba</b> en la calle.</td></tr>
<tr><td>descripciones</td><td>La casa <b>era</b> grande y <b>tenía</b> un jardín.</td></tr>
<tr><td>acción en curso interrumpida</td><td><b>Leía</b> cuando sonó el teléfono.</td></tr>
<tr><td>cortesía</td><td><b>Quería</b> pedirle un favor.</td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> El inglés no distingue «played / used to play / was playing» como el español; el imperfecto cubre los tres valores de fondo.</div>`,
 q:['Cuando era pequeño, ___ en el campo. (vivir)|viví|vivía|vivo|vivaba|1|Hábito pasado.',
  'Nosotros ___ al parque cada domingo. (ir)|íbamos|fuimos|ibamos|iríamos|0|ir: íbamos (con tilde).',
  'La ciudad ___ muy tranquila. (ser)|fue|era|es|seía|1|Descripción: era.',
  '___ la televisión cuando llegaste. (ver)|Vi|Veía|Vía|Veré|1|ver: veía.',
  'Tú ___ mucho. (trabajar)|trabajabas|trabajías|trabajaste|trabajas|0|-ar: -abas.',
  '___ un café, por favor. (cortesía)|Quise|Quería|Quiero ser|Quiera|1|Imperfecto de cortesía.',
  'Mi abuela ___ cuentos. (contar)|contaba|contía|cuentaba|contó siempre|0|-ar: -aba.',
  'Antes yo no ___ café. (beber)|bebí|bebía|bebaba|bebo|1|Hábito pasado.']},
{id:'es-a2-4',lvl:'A2',t:'Futuro: ir a + infinitivo y futuro simple',sub:'Verbo',h:4,pre:['es-a1-4'],ref:[PRO,CVC],
 teoria:`<p><b>Ir a + infinitivo</b> expresa planes e intenciones cercanos: <i><b>Voy a estudiar</b> esta noche</i>. El <b>futuro simple</b> añade al infinitivo <b>-é, -ás, -á, -emos, -éis, -án</b>: <i>hablaré, comerás, vivirá</i>.</p>
<p>Raíces irregulares: <i>tendr-, vendr-, pondr-, saldr-, podr-, sabr-, habr-, querr-, har-, dir-, cabr-, valdr-</i>.</p>
<table class="oe-table"><tr><th>Forma</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>presente</td><td>plan fijo</td><td>Mañana <b>salgo</b> a las seis.</td></tr>
<tr><td>ir a + inf.</td><td>intención</td><td>Este año <b>voy a aprender</b> a nadar.</td></tr>
<tr><td>futuro simple</td><td>predicción, promesa</td><td>Mañana <b>lloverá</b>. Te <b>llamaré</b>.</td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> Olvidar la preposición: <i>*Voy estudiar</i> → <i>Voy <b>a</b> estudiar</i>. Tras <i>cuando</i> con valor futuro se usa subjuntivo, no futuro (B1).</div>`,
 q:['Esta tarde ___ estudiar.|voy|voy a|voy de|iré a ir|1|ir a + infinitivo.',
  'Mañana ___ a la playa. (nosotros, ir)|iremos|iramos|vamos a irá|irémos|0|Futuro: iremos.',
  'Yo ___ tiempo el lunes. (tener)|teneré|tendré|tendrá|tenré|1|Raíz tendr-.',
  'Ellos ___ temprano. (salir)|salirán|saldrán|saldrian|salen a|1|Raíz saldr-.',
  '¿Qué ___ (tú) mañana? (hacer)|harás|hacerás|harías|hacerás tú|0|Raíz har-.',
  'Te lo ___, no te preocupes. (decir)|deciré|diré|diría|dicé|1|Raíz dir-.',
  'Mira esas nubes, ___ a llover.|va|vas|iba|irá|0|Evidencia: va a llover.',
  'Usted ___ hacerlo. (poder)|poderá|podrá|podría|pudrá|1|Raíz podr-.']},
{id:'es-a2-5',lvl:'A2',t:'Pronombres de objeto directo e indirecto',sub:'Pronombre',h:6,pre:['es-a1-5'],ref:[PRO,FUN],
 teoria:`<table class="oe-table"><tr><th>Persona</th><th>OD</th><th>OI</th></tr>
<tr><td>yo · tú</td><td>me · te</td><td>me · te</td></tr>
<tr><td>él / ella / usted</td><td><b>lo / la</b></td><td><b>le</b></td></tr>
<tr><td>nosotros · vosotros</td><td>nos · os</td><td>nos · os</td></tr>
<tr><td>ellos / ellas / ustedes</td><td><b>los / las</b></td><td><b>les</b></td></tr></table>
<p>Van <b>delante</b> del verbo conjugado o <b>unidos</b> al infinitivo, al gerundio y al imperativo afirmativo: <i>Lo quiero ver / Quiero verlo; Dímelo</i>. Con dos pronombres, OI antes que OD, y <i>le/les + lo/la</i> se convierte en <b>se</b>: <i>Le doy el libro → <b>Se lo</b> doy</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> El OI se duplica a menudo: <i><b>Le</b> di el regalo <b>a Ana</b></i> (es normal y correcto). <i>*Le lo doy</i> no existe.</div>`,
 q:['¿Compras el pan? — Sí, ___ compro.|la|lo|le|los|1|el pan → lo.',
  '¿Ves a las chicas? — Sí, ___ veo.|les|las|los|la|1|OD femenino plural.',
  'Le doy el libro a Juan. → ___ doy.|Le lo|Se lo|Lo le|Se le|1|le + lo = se lo.',
  'Quiero comprar___. (las flores)|las|-las|las quiero|lo|1|Unido al infinitivo: comprarlas.',
  '¡Dí___! (a mí, eso)|melo|me lo|lome|lo me|0|Imperativo afirmativo: dímelo.',
  '___ escribí un correo a mis padres.|Los|Les|Las|Se|1|OI plural: les.',
  'No ___ digas. (a él, eso)|se lo|le lo|lo le|selo|0|Negativo: delante y separado.',
  '¿Llamas a tu madre? — Sí, ___ llamo.|le|la|lo|se|1|llamar + OD: la.']},
{id:'es-a2-6',lvl:'A2',t:'Comparativos y superlativos',sub:'Adjetivo',h:3,pre:['es-a1-3'],ref:[PRO,CVC],
 teoria:`<table class="oe-table"><tr><th></th><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>superioridad</td><td>más + adj. + que</td><td>Lima es <b>más grande que</b> Cusco.</td></tr>
<tr><td>inferioridad</td><td>menos + adj. + que</td><td>Es <b>menos caro que</b> el otro.</td></tr>
<tr><td>igualdad</td><td>tan + adj. + como / tanto(s) + sust. + como</td><td><b>tan alto como</b> · <b>tantos libros como</b></td></tr>
<tr><td>superlativo relativo</td><td>el / la más + adj. + de</td><td>el río <b>más largo del</b> país</td></tr>
<tr><td>superlativo absoluto</td><td>-ísimo</td><td>riqu<b>ísimo</b>, cansad<b>ísimo</b></td></tr></table>
<p>Irregulares: <i>bueno → mejor, malo → peor, grande → mayor (edad), pequeño → menor</i>. Con cantidades: <i>más <b>de</b> diez</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> <i>*más bueno</i> en registro cuidado → <i>mejor</i>. Con números, <i>más de</i>, no <i>más que</i>.</div>`,
 q:['Este hotel es ___ que el otro (bueno).|más bueno|mejor|el mejor|tan bueno|1|bueno → mejor.',
  'Mi hermano es ___ alto ___ yo.|tan / como|tan / que|tanto / como|más / como|0|Igualdad: tan … como.',
  'Es el edificio más alto ___ la ciudad.|que|de|en|como|1|Superlativo: de.',
  'Tengo ___ libros como tú.|tan|tantos|tantas|tanto|1|tantos + sustantivo masculino plural.',
  'Hay más ___ cien personas.|que|de|como|a|1|Con números: más de.',
  'La comida está ___ (muy rica).|riquísima|ricaísima|muy riquísima|ricísima|0|c → qu: riquísima.',
  'Ana es ___ que su hermana (edad).|más grande|mayor|más mayor|grandísima|1|Edad: mayor.',
  'Este examen es ___ difícil que el anterior.|menos|tan|tanto|como|0|Inferioridad.']},
/* ------------------------------ B1 ------------------------------ */
{id:'es-b1-1',lvl:'B1',t:'Indefinido frente a imperfecto',sub:'Verbo',h:8,pre:['es-a2-2','es-a2-3'],ref:[PRO,CVC],
 teoria:`<p>En la narración, el <b>indefinido</b> presenta los hechos como completos y hace avanzar la historia; el <b>imperfecto</b> los presenta en su desarrollo y construye el fondo.</p>
<table class="oe-table"><tr><th>Imperfecto (fondo)</th><th>Indefinido (acontecimiento)</th></tr>
<tr><td>Era de noche y <b>llovía</b>…</td><td>…cuando alguien <b>llamó</b> a la puerta.</td></tr>
<tr><td>Todos los veranos <b>íbamos</b> a la costa.</td><td>Aquel verano <b>fuimos</b> a la sierra.</td></tr>
<tr><td><b>Conocía</b> a Luis (ya lo conocía).</td><td><b>Conocí</b> a Luis en 2015 (lo vi por primera vez).</td></tr></table>
<p>Algunos verbos cambian de significado: <i>sabía</i> (tenía la información) / <i>supe</i> (me enteré); <i>quería</i> (deseaba) / <i>quise</i> (intenté); <i>no quise</i> (me negué).</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Pensar que la duración decide el tiempo: <i>Viví diez años en Lima</i> (periodo cerrado) va en indefinido aunque sea largo.</div>`,
 q:['___ las ocho cuando ___ el tren.|Eran / salió|Fueron / salía|Eran / salía|Fueron / salió|0|Fondo + acontecimiento.',
  'De niña ___ mucho a mis abuelos.|visité|visitaba|he visitado|visite|1|Hábito pasado.',
  '___ en Madrid durante cinco años.|Vivía|Viví|Vivo|Vivía siempre|1|Periodo cerrado.',
  'Ayer ___ la noticia del accidente. (enterarse)|sabía|supe|sé|sabré|1|supe = me enteré.',
  'Mientras yo ___, mi hermano jugaba.|estudiaba|estudié|estudio|estudie|0|Acciones simultáneas de fondo.',
  'De repente ___ la luz.|se iba|se fue|se va|iba|1|De repente: indefinido.',
  'La casa ___ grande y ___ un jardín.|fue / tuvo|era / tenía|era / tuvo|fue / tenía|1|Descripción.',
  '___ abrir la puerta, pero no pude.|Quería|Quise|Quiero|Querré|1|quise = intenté.']},
{id:'es-b1-2',lvl:'B1',t:'Presente de subjuntivo: deseo e influencia',sub:'Verbo',h:8,pre:['es-a1-4'],ref:[PRO,CVC],
 teoria:`<p><b>Formación:</b> se parte del <i>yo</i> del presente y se cambia la vocal: <b>-ar → e</b>, <b>-er / -ir → a</b>: <i>hablo → hable; como → coma; tengo → tenga; conozco → conozca</i>. Irregulares: <i>sea, esté, vaya, haya, sepa, dé</i>.</p>
<table class="oe-table"><tr><th>Contexto</th><th>Ejemplo</th></tr>
<tr><td>deseo con otro sujeto</td><td>Quiero que <b>vengas</b>. · Ojalá <b>llueva</b>.</td></tr>
<tr><td>influencia, petición, consejo</td><td>Te pido que me <b>ayudes</b>. · Te recomiendo que <b>descanses</b>.</td></tr>
<tr><td>finalidad</td><td>Lo explico <b>para que</b> lo <b>entiendas</b>.</td></tr>
<tr><td>futuro con cuando</td><td><b>Cuando llegues</b>, llámame.</td></tr></table>
<p>Con el mismo sujeto se usa el infinitivo: <i>Quiero <b>ir</b></i>, no <i>*quiero que yo vaya</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Usar futuro tras <i>cuando</i>: <i>*Cuando llegarás</i> → <i>Cuando llegues</i>.</div>`,
 q:['Quiero que tú ___ conmigo. (venir)|vienes|vengas|vendrás|venir|1|Deseo con otro sujeto.',
  'Ojalá ___ buen tiempo. (hacer)|hace|haga|hará|hizo|1|Ojalá + subjuntivo.',
  'Te recomiendo que ___ más. (dormir)|duermes|duermas|dormas|dormir|1|duerm- + -as.',
  'Cuando ___, avísame. (terminar)|terminas|termines|terminarás|terminar|1|cuando con valor futuro.',
  'Quiero ___ al cine. (mismo sujeto)|que vaya|ir|que voy|vaya|1|Mismo sujeto: infinitivo.',
  'Es necesario que ustedes ___ puntuales. (ser)|son|sean|serán|estén|1|ser: sean.',
  'Te lo digo para que lo ___. (saber)|sabes|sepas|sabas|supieras|1|saber: sepa.',
  'Mis padres me piden que ___ más. (estudiar)|estudio|estudie|estudiar|estudié|1|Petición.']},
{id:'es-b1-3',lvl:'B1',t:'Imperativo afirmativo y negativo',sub:'Verbo',h:5,pre:['es-b1-2','es-a2-5'],ref:[PRO,CVC],
 teoria:`<table class="oe-table"><tr><th>Persona</th><th>Afirmativo</th><th>Negativo (= subjuntivo)</th></tr>
<tr><td>tú</td><td>habla, come</td><td>no hables, no comas</td></tr>
<tr><td>vos</td><td>hablá, comé</td><td>no hables, no comas</td></tr>
<tr><td>usted</td><td>hable, coma</td><td>no hable, no coma</td></tr>
<tr><td>vosotros</td><td>hablad, comed</td><td>no habléis, no comáis</td></tr>
<tr><td>ustedes</td><td>hablen, coman</td><td>no hablen, no coman</td></tr></table>
<p>Irregulares de <i>tú</i>: <b>di, haz, ve, pon, sal, sé, ten, ven</b>. Pronombres: unidos al afirmativo (<i>dímelo, siéntate</i>) y delante del negativo (<i>no me lo digas, no te sientes</i>). El afirmativo con pronombre suele necesitar tilde.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Usar la forma afirmativa con <i>no</i>: <i>*No habla</i> (tú) → <i>No hables</i>.</div>`,
 q:['(tú) ___ la ventana, por favor. (abrir)|Abre|Abres|Abra|Abrir|0|Afirmativo tú.',
  '(tú) No ___ tan rápido. (hablar)|habla|hables|hablas|hable|1|Negativo = subjuntivo.',
  '(tú) ___ los deberes. (hacer)|Hace|Haz|Haga|Hazlo deberes|1|Irregular: haz.',
  '(usted) ___ asiento. (tomar)|Toma|Tome|Tomé|Tomad|1|usted: tome.',
  '(tú) ___ aquí. (venir)|Viene|Ven|Venga|Veni|1|Irregular: ven.',
  'No ___ lo digas. (a mí)|me|mí|a mí|-me|0|Negativo: pronombre delante.',
  '(tú) ___. (sentarse)|Siéntate|Sientate|Te sienta|Siéntete|0|Unido y con tilde.',
  '(ustedes) No ___ tarde. (llegar)|lleguen|llegan|llegad|lleguéis|0|ustedes: lleguen.']},
{id:'es-b1-4',lvl:'B1',t:'Condicional simple: consejo, cortesía e hipótesis',sub:'Verbo',h:4,pre:['es-a2-4'],ref:[PRO,CVC],
 teoria:`<p>Infinitivo + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>; mismas raíces irregulares que el futuro: <i>tendría, haría, diría, podría, saldría</i>.</p>
<table class="oe-table"><tr><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>consejo</td><td>Yo que tú, <b>hablaría</b> con ella. · <b>Deberías</b> descansar.</td></tr>
<tr><td>cortesía</td><td>¿<b>Podría</b> ayudarme? · Me <b>gustaría</b> un té.</td></tr>
<tr><td>deseo</td><td><b>Viajaría</b> por todo el mundo.</td></tr>
<tr><td>futuro del pasado</td><td>Dijo que <b>vendría</b>.</td></tr>
<tr><td>probabilidad en el pasado</td><td><b>Serían</b> las diez cuando llegó (= probablemente eran).</td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> En la condición con <i>si</i> no va el condicional: <i>*Si tendría</i> → <i>Si tuviera</i> (B2).</div>`,
 q:['Yo que tú, ___ al médico. (ir)|iré|iría|vaya|iba|1|Consejo: condicional.',
  '¿___ cerrar la puerta? (poder, usted)|Puede|Podría|Podrá|Pudiera ser|1|Cortesía.',
  'Me ___ visitar Japón. (gustar)|gusta|gustaría|gustará|gustaba|1|Deseo.',
  'Dijo que ___ temprano. (salir)|saldrá|saldría|salirá|salía|1|Futuro del pasado.',
  'Tú ___ estudiar más. (deber)|deberás|deberías|debes ser|debieras ser|1|Consejo.',
  '___ las tres cuando terminamos. (ser, probabilidad)|Serían|Serán|Eran ser|Sean|0|Probabilidad pasada.',
  'Nosotros ___ la casa, pero no tenemos dinero. (comprar)|compraremos|compraríamos|compramos|comprábamos|1|Deseo hipotético.',
  'Raíz del condicional de «hacer»:|hacer-|har-|hic-|hag-|1|haría.']},
{id:'es-b1-5',lvl:'B1',t:'Por y para',sub:'Preposición',h:5,pre:[],ref:[PRO,FUN],
 teoria:`<table class="oe-table"><tr><th>para</th><th>por</th></tr>
<tr><td>finalidad: Estudio <b>para</b> aprender.</td><td>causa: Lo hice <b>por</b> ti / <b>por</b> amor.</td></tr>
<tr><td>destinatario: Es <b>para</b> ti.</td><td>intercambio, precio: Lo compré <b>por</b> 10 €.</td></tr>
<tr><td>dirección: Salgo <b>para</b> Quito.</td><td>tránsito, lugar aproximado: Paseo <b>por</b> el parque.</td></tr>
<tr><td>plazo: <b>Para</b> el lunes.</td><td>tiempo aproximado: <b>Por</b> la mañana.</td></tr>
<tr><td>opinión: <b>Para</b> mí, es fácil.</td><td>medio: <b>Por</b> teléfono, <b>por</b> correo.</td></tr>
<tr><td>comparación: <b>Para</b> su edad, es alto.</td><td>agente de la pasiva: escrito <b>por</b> Cervantes.</td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> Ambas se traducen a menudo por <i>for</i>. Pregunte: ¿es la meta (para) o el motivo / el camino (por)?</div>`,
 q:['Este regalo es ___ ti.|por|para|a|de|1|Destinatario.',
  'Te llamo ___ teléfono.|para|por|en|con|1|Medio.',
  'Trabajo ___ ganar dinero.|por|para|a|de|1|Finalidad.',
  'Gracias ___ tu ayuda.|para|por|de|a|1|Causa.',
  'El informe es ___ el viernes.|por|para|hasta|a|1|Plazo.',
  'Caminamos ___ el centro.|para|por|en|a|1|Tránsito.',
  '«Cien años de soledad» fue escrita ___ García Márquez.|para|por|de|con|1|Agente.',
  '___ mí, el español es fácil.|Por|Para|A|En|1|Opinión.']},
{id:'es-b1-6',lvl:'B1',t:'Pretérito pluscuamperfecto',sub:'Verbo',h:3,pre:['es-a2-1','es-b1-1'],ref:[PRO,CVC],
 teoria:`<p>Se forma con <b>haber</b> en imperfecto (<i>había, habías, había, habíamos, habíais, habían</i>) + participio. Expresa una acción anterior a otra pasada.</p>
<p class="xl-ej">Cuando llegué a la estación, el tren ya <b>había salido</b>. · Nunca <b>había visto</b> el mar antes de aquel viaje.</p>
<p>Se usa también en el estilo indirecto (<i>Dijo que <b>había terminado</b></i>) y en la condición irreal del pasado con subjuntivo (<i>Si <b>hubiera</b> sabido…</i>, C1).</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Omitirlo cuando el orden del relato no coincide con el de los hechos; el indefinido solo no marca la anterioridad.</div>`,
 q:['Cuando llegamos, la película ya ___.|empezó|había empezado|ha empezado|empezaba|1|Anterioridad.',
  'Nunca ___ tanta gente junta.|había visto|vi había|he visto antes|veía|0|Experiencia anterior a un momento pasado.',
  'Dijo que ya ___ la cena.|había preparado|ha preparado|prepara|preparará|0|Estilo indirecto.',
  'Ellos ___ antes de las nueve. (salir)|habían salido|habían salidos|habían salió|han salido|0|Participio invariable.',
  'Auxiliar del pluscuamperfecto:|haber en presente|haber en imperfecto|estar en imperfecto|ser en imperfecto|1|había…',
  'Yo no sabía que tú ___ en Japón. (vivir)|habías vivido|has vivido|vivirías|vivieses|0|Anterioridad.',
  'Cuando lo llamé, ya se ___. (ir)|había ido|fue|iba|ha ido|0|Anterioridad.',
  'Participio de «romper»:|rompido|roto|rompió|rompiendo|1|roto.']},
/* ------------------------------ B2 ------------------------------ */
{id:'es-b2-1',lvl:'B2',t:'Subjuntivo: opinión, sentimiento y valoración',sub:'Verbo',h:7,pre:['es-b1-2'],ref:[PRO,CVC],
 teoria:`<table class="oe-table"><tr><th>Contexto</th><th>Indicativo</th><th>Subjuntivo</th></tr>
<tr><td>opinión</td><td>Creo que <b>tiene</b> razón.</td><td>No creo que <b>tenga</b> razón.</td></tr>
<tr><td>certeza / duda</td><td>Es verdad que <b>es</b> caro.</td><td>Dudo que <b>sea</b> caro.</td></tr>
<tr><td>sentimiento</td><td>—</td><td>Me alegra que <b>estés</b> aquí. · Me molesta que <b>griten</b>.</td></tr>
<tr><td>valoración</td><td>Es evidente que <b>funciona</b>.</td><td>Es lógico / normal / importante que <b>funcione</b>.</td></tr></table>
<p>Con el mismo sujeto, infinitivo: <i>Me alegra <b>verte</b></i>. En la pregunta negativa la norma admite ambos modos: <i>¿No crees que es / sea tarde?</i></p>
<div class="xl-int"><b>Dificultad frecuente.</b> Las expresiones de certeza (<i>es cierto, es evidente, está claro</i>) llevan indicativo en afirmativo y subjuntivo en negativo.</div>`,
 q:['No pienso que ___ difícil.|es|sea|será|fuera|1|Opinión negada.',
  'Creo que ___ razón.|tengas|tienes|tuvieras|tenga|1|Opinión afirmada: indicativo.',
  'Me alegra que ___ (tú) aquí.|estás|estés|estarás|estabas|1|Sentimiento.',
  'Es importante que todos ___.|participan|participen|participarán|participar|1|Valoración.',
  'Es evidente que el plan ___.|funciona|funcione|funcionara|funcionar|0|Certeza: indicativo.',
  'Dudo que ___ a tiempo.|llegan|lleguen|llegarán|llegaban|1|Duda.',
  'Me molesta ___ tarde. (mismo sujeto)|que llegue|llegar|que llego|llegue|1|Mismo sujeto: infinitivo.',
  'No es cierto que lo ___.|sabe|sepa|sabrá|supo|1|Certeza negada.']},
{id:'es-b2-2',lvl:'B2',t:'Oraciones de relativo: indicativo o subjuntivo',sub:'Oración compuesta',h:5,pre:['es-b2-1'],ref:[PRO,RAEG],
 teoria:`<p>El modo de la relativa depende de si el antecedente es <b>conocido</b> (indicativo) o <b>desconocido / inexistente</b> (subjuntivo).</p>
<table class="oe-table"><tr><th>Indicativo</th><th>Subjuntivo</th></tr>
<tr><td>Tengo un amigo que <b>habla</b> ruso.</td><td>Busco a alguien que <b>hable</b> ruso.</td></tr>
<tr><td>Hay un bar que <b>abre</b> los lunes.</td><td>No hay ningún bar que <b>abra</b> los lunes.</td></tr>
<tr><td>Haz lo que <b>quieres</b> (sé qué quieres).</td><td>Haz lo que <b>quieras</b> (lo que sea).</td></tr></table>
<p>Relativos: <i>que, quien(es), el / la / los / las que, el cual, cuyo/a/os/as, donde, como, cuando</i>. <i>Cuyo</i> concuerda con lo poseído: <i>el escritor <b>cuya</b> novela leí</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> <i>Cuyo</i> no concuerda con el poseedor: <i>la mujer <b>cuyo</b> hijo</i>, no <i>*cuya hijo</i>.</div>`,
 q:['Busco un piso que ___ balcón.|tiene|tenga|tendrá|tuvo|1|Antecedente desconocido.',
  'Vivo en un piso que ___ balcón.|tenga|tiene|tuviera|tendría|1|Antecedente conocido.',
  'No conozco a nadie que ___ japonés.|habla|hable|hablara|hablará|1|Antecedente inexistente.',
  'Es el autor ___ libros leí.|cuyo|cuyos|que sus|del que sus|1|Concuerda con libros.',
  'Haz lo que ___ (no sé qué prefieres).|prefieres|prefieras|preferirás|preferías|1|Indeterminado.',
  'La ciudad ___ nací es pequeña.|que|donde|cual|cuya|1|Lugar: donde / en la que.',
  '¿Hay alguien aquí que ___ ayudarme?|puede|pueda|podrá|pudo|1|Pregunta por existencia.',
  'Los estudiantes, ___ estaban cansados, se fueron.|cuyos|los cuales|que los|cual|1|Explicativa: los cuales / que.']},
{id:'es-b2-3',lvl:'B2',t:'Oraciones condicionales',sub:'Oración compuesta',h:6,pre:['es-b1-4','es-b2-1'],ref:[PRO,CVC],
 teoria:`<p>El <b>imperfecto de subjuntivo</b> se forma desde la 3.ª plural del indefinido: <i>tuvieron → tuviera / tuviese, fueron → fuera / fuese</i>.</p>
<table class="oe-table"><tr><th>Tipo</th><th>Condición</th><th>Resultado</th><th>Ejemplo</th></tr>
<tr><td>real</td><td>si + presente</td><td>presente / futuro / imperativo</td><td>Si <b>llueve</b>, <b>me quedo</b>.</td></tr>
<tr><td>potencial</td><td>si + imperfecto subj.</td><td>condicional</td><td>Si <b>tuviera</b> tiempo, <b>viajaría</b>.</td></tr>
<tr><td>irreal pasada</td><td>si + pluscuamperfecto subj.</td><td>condicional compuesto</td><td>Si <b>hubiera estudiado</b>, <b>habría aprobado</b>.</td></tr>
<tr><td>mixta</td><td>si + pluscuamperfecto subj.</td><td>condicional simple</td><td>Si <b>hubiera aceptado</b>, ahora <b>sería</b> rico.</td></tr></table>
<p>Otros nexos: <i>en caso de que, siempre que, con tal de que, a no ser que</i> (+ subjuntivo); <i>de + infinitivo</i>: <i><b>De haberlo sabido</b>, habría venido</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> <i>Si</i> nunca va con futuro ni con presente de subjuntivo: <i>*Si llueva</i>, <i>*Si lloverá</i>.</div>`,
 q:['Si ___ tiempo, iría contigo.|tengo|tuviera|tendría|tenga|1|Potencial.',
  'Si ___ dinero, me compraré un coche.|ahorro|ahorrara|ahorraré|ahorre|0|Real: si + presente.',
  'Si me ___, te habría ayudado.|llamaras|hubieras llamado|habrías llamado|llamabas|1|Irreal pasada.',
  'Si hubiera estudiado medicina, ahora ___ médico.|sería|habría sido|era|fuera|0|Mixta.',
  'Imperfecto de subjuntivo de «decir» (yo):|deciera|dijera|dijiera|diciera|1|dijeron → dijera.',
  'Iré, a no ser que ___.|llueve|llueva|lloverá|lloviera ya|1|a no ser que + subjuntivo.',
  'De ___ la verdad, no habría venido.|saber|haber sabido|sabiendo|supiera|1|de + infinitivo compuesto.',
  'Si yo ___ tú, aceptaría.|fuera|sería|soy|era|0|Si yo fuera tú.']},
{id:'es-b2-4',lvl:'B2',t:'Estilo indirecto',sub:'Discurso',h:5,pre:['es-b1-6','es-b2-1'],ref:[PRO,CVC],
 teoria:`<table class="oe-table"><tr><th>Directo</th><th>Indirecto (verbo introductor en pasado)</th></tr>
<tr><td>«<b>Estoy</b> cansada.»</td><td>Dijo que <b>estaba</b> cansada.</td></tr>
<tr><td>«<b>Fui</b> al médico.»</td><td>Dijo que <b>había ido</b> al médico.</td></tr>
<tr><td>«<b>Iré</b> mañana.»</td><td>Dijo que <b>iría</b> al día siguiente.</td></tr>
<tr><td>«<b>Ven</b>.»</td><td>Me pidió que <b>fuera</b>.</td></tr>
<tr><td>«¿<b>Tienes</b> hambre?»</td><td>Me preguntó <b>si</b> tenía hambre.</td></tr></table>
<p>Cambian también pronombres y deícticos: <i>aquí → allí, hoy → ese día, mañana → al día siguiente, este → ese/aquel, traer → llevar, venir → ir</i>. Si lo dicho sigue vigente, puede mantenerse el tiempo: <i>Dijo que <b>es</b> de Cali</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Las órdenes y peticiones pasan a subjuntivo: <i>Me dijo que <b>me callara</b></i>.</div>`,
 q:['«Tengo frío.» → Dijo que ___ frío.|tiene|tenía|tuvo|tuviera|1|Presente → imperfecto.',
  '«Llegué tarde.» → Dijo que ___ tarde.|llegaba|había llegado|llegue|llegará|1|Indefinido → pluscuamperfecto.',
  '«Lo haré.» → Prometió que lo ___.|hará|haría|hiciera|hacía|1|Futuro → condicional.',
  '«Cierra la puerta.» → Me pidió que ___ la puerta.|cierro|cerrara|cerraré|cierra|1|Orden → imperfecto de subjuntivo.',
  '«¿Vienes?» → Me preguntó ___ iba.|que|si|qué|cuando|1|Pregunta total: si.',
  '«Vivo aquí.» → Dijo que vivía ___.|aquí|allí|acá|ahí mismo aquí|1|aquí → allí.',
  '«Mañana te llamo.» → Dijo que me llamaría ___.|mañana|al día siguiente|ayer|el día anterior|1|mañana → al día siguiente.',
  '«¿Dónde trabajas?» → Me preguntó dónde ___.|trabajo|trabajaba|trabajaría|trabajara|1|Interrogativa parcial.']},
{id:'es-b2-5',lvl:'B2',t:'Pasiva, pasiva refleja e impersonal con se',sub:'Verbo',h:5,pre:['es-a2-5'],ref:[PRO,RAEG],
 teoria:`<table class="oe-table"><tr><th>Construcción</th><th>Ejemplo</th><th>Registro</th></tr>
<tr><td>pasiva perifrástica: ser + participio</td><td>El puente <b>fue construido</b> en 1950 (por…).</td><td>escrito, periodístico</td></tr>
<tr><td>pasiva de resultado: estar + participio</td><td>La puerta <b>está cerrada</b>.</td><td>general</td></tr>
<tr><td>pasiva refleja: se + verbo (concuerda)</td><td><b>Se venden</b> pisos. <b>Se alquila</b> habitación.</td><td>muy frecuente</td></tr>
<tr><td>impersonal con se (3.ª sg.)</td><td><b>Se vive</b> bien aquí. <b>Se busca</b> a los responsables.</td><td>general</td></tr>
<tr><td>3.ª plural impersonal</td><td><b>Dicen</b> que va a llover.</td><td>oral</td></tr></table>
<p>La pasiva refleja no admite agente: <i>*Se construyó el puente por los obreros</i>. Con personas precedidas de <i>a</i>, se usa la impersonal en singular: <i>Se <b>busca</b> a los testigos</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Calcar la pasiva inglesa en contextos cotidianos: <i>English is spoken</i> se dice <i><b>Se habla</b> inglés</i>.</div>`,
 q:['___ pisos en esta calle.|Se vende|Se venden|Son vendido|Venden se|1|Pasiva refleja: concuerda.',
  'La catedral ___ en el siglo XVI.|fue construida|fue construido|estuvo construida|se construyó por ellos|0|Pasiva perifrástica.',
  '___ bien en esta ciudad.|Se viven|Se vive|Viven se|Es vivido|1|Impersonal.',
  'La ventana ___ abierta (resultado).|es|está|se|fue|1|estar + participio.',
  '___ a los ganadores.|Se felicitan|Se felicita|Son felicitado|Felicita se|1|Con «a» + personas: singular.',
  'Alternativa natural a «El inglés es hablado aquí»:|Se habla inglés aquí.|Inglés se es hablado.|Hablan se inglés.|Está hablado inglés.|0|Pasiva refleja.',
  '___ que habrá huelga.|Dice|Dicen|Se dicen|Es dicho|1|Impersonal: dicen / se dice.',
  'Las cartas ___ ayer.|fueron enviadas|fueron enviado|se enviaron por Juan|estaban envió|0|Concordancia del participio.']},
{id:'es-b2-6',lvl:'B2',t:'Ser y estar con cambio de significado',sub:'Verbo',h:4,pre:['es-a1-1'],ref:[PRO,RAE],
 teoria:`<p>Algunos adjetivos cambian de sentido según el verbo.</p>
<table class="oe-table"><tr><th>adjetivo</th><th>ser</th><th>estar</th></tr>
<tr><td>listo</td><td>inteligente</td><td>preparado</td></tr>
<tr><td>malo</td><td>de mala calidad o mala persona</td><td>enfermo / en mal estado</td></tr>
<tr><td>rico</td><td>con dinero</td><td>sabroso</td></tr>
<tr><td>verde</td><td>de ese color</td><td>inmaduro, sin experiencia</td></tr>
<tr><td>aburrido</td><td>que aburre</td><td>que se aburre</td></tr>
<tr><td>atento</td><td>amable</td><td>concentrado</td></tr>
<tr><td>vivo</td><td>espabilado</td><td>no muerto</td></tr></table>
<p><b>Estar + participio</b> presenta un resultado (<i>está roto</i>); <b>ser + participio</b>, una acción (pasiva). Con adjetivos de cualidad, <i>estar</i> puede expresar una percepción subjetiva: <i>¡Qué alto <b>estás</b>!</i></p>
<div class="xl-int"><b>Dificultad frecuente.</b> <i>Soy aburrido</i> (soy una persona que aburre) frente a <i>Estoy aburrido</i> (siento aburrimiento).</div>`,
 q:['¿___ listos? Nos vamos.|Sois|Estáis|Son|Seáis|1|listo = preparado.',
  'Esta sopa ___ muy rica.|es|está|son|hay|1|rico = sabroso.',
  'Mi abuelo ___ malo; tiene gripe.|es|está|era|sea|1|malo = enfermo.',
  'La película ___ aburrida; me dormí.|estaba|era|está ya|fue estado|1|Que aburre: ser.',
  'Los plátanos todavía ___ verdes.|son|están|hay|eran de|1|verde = inmaduro.',
  'Pedro ___ muy listo; siempre aprueba.|está|es|esté|estaba listo de|1|listo = inteligente.',
  '___ aburrido; no hay nada que hacer.|Soy|Estoy|Es|Hay|1|Sentir aburrimiento: estar.',
  'El jarrón ___ roto.|es|está|fue estado|hay|1|Resultado: estar.']},
/* ------------------------------ C1 ------------------------------ */
{id:'es-c1-1',lvl:'C1',t:'Concordancia temporal y usos del imperfecto de subjuntivo',sub:'Verbo',h:6,pre:['es-b2-3'],ref:[RAEG,CVC],
 teoria:`<p>Cuando el verbo principal está en pasado o condicional, el subjuntivo subordinado pasa normalmente al <b>imperfecto</b>: <i>Quiero que <b>vengas</b> → Quería / Querría que <b>vinieras</b></i>.</p>
<table class="oe-table"><tr><th>Principal</th><th>Subordinada</th></tr>
<tr><td>presente, futuro, imperativo</td><td>presente / perfecto de subjuntivo: <i>No creo que lo <b>haya hecho</b></i></td></tr>
<tr><td>pasado, condicional</td><td>imperfecto / pluscuamperfecto de subjuntivo: <i>No creía que lo <b>hubiera hecho</b></i></td></tr>
<tr><td>perfecto compuesto</td><td>ambas: <i>Me ha pedido que <b>vaya / fuera</b></i></td></tr></table>
<p>Las formas en <b>-ra</b> y <b>-se</b> son equivalentes (<i>cantara / cantase</i>), salvo en usos de cortesía, donde solo vale <i>-ra</i>: <i><b>Quisiera</b> un café</i>. La forma <i>-ra</i> con valor de pluscuamperfecto de indicativo (<i>el libro que <b>escribiera</b> en 1990</i>) es literaria.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Mantener el presente de subjuntivo tras un pasado: <i>*Me pidió que venga</i> se oye en América, pero la norma culta prefiere <i>viniera</i>.</div>`,
 q:['Me pidió que lo ___.|ayude|ayudara|ayudaré|ayudo|1|Pasado → imperfecto de subjuntivo.',
  'No creía que ___ tan tarde.|sea|fuera|es|será|1|Concordancia.',
  '___ hablar con el director. (cortesía)|Quisiese|Quisiera|Quería ser|Querría que|1|Cortesía: solo -ra.',
  'Dudo que lo ___ ya. (hacer, pasado reciente)|haya hecho|hubiera hecho|ha hecho|hiciera ya|0|Presente → perfecto de subjuntivo.',
  'Me gustaría que ___ conmigo.|vienes|vinieras|vengas|vendrás|1|Condicional → imperfecto.',
  'Equivalente de «cantara»:|cantare|cantase|cantaría|cantaba|1|-ra = -se.',
  'No pensé que ___ (ellos) antes.|hayan llegado|hubieran llegado|han llegado|llegarán|1|Anterioridad en pasado.',
  'La novela que ___ en su juventud (uso literario).|escribiera|escribiese|escribirá|escriba|0|-ra con valor de pluscuamperfecto.']},
{id:'es-c1-2',lvl:'C1',t:'Perífrasis verbales',sub:'Verbo',h:6,pre:['es-b1-1'],ref:[RAEG,CVC],
 teoria:`<table class="oe-table"><tr><th>Perífrasis</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>empezar / ponerse a + inf.</td><td>inicio</td><td>Se <b>puso a</b> llorar.</td></tr>
<tr><td>dejar de + inf.</td><td>interrupción</td><td><b>Dejó de</b> fumar.</td></tr>
<tr><td>volver a + inf.</td><td>repetición</td><td><b>Volvió a</b> llamar.</td></tr>
<tr><td>acabar de + inf.</td><td>pasado reciente</td><td><b>Acabo de</b> llegar.</td></tr>
<tr><td>llevar + gerundio</td><td>duración hasta ahora</td><td><b>Llevo</b> dos años <b>estudiando</b>.</td></tr>
<tr><td>seguir / continuar + gerundio</td><td>continuidad</td><td><b>Sigue</b> lloviendo.</td></tr>
<tr><td>ir + gerundio</td><td>progresión</td><td><b>Va mejorando</b>.</td></tr>
<tr><td>llevar / tener + participio</td><td>acumulación</td><td><b>Llevo leídas</b> cien páginas.</td></tr>
<tr><td>deber + inf. / deber de + inf.</td><td>obligación / suposición</td><td><b>Debes</b> estudiar. · <b>Debe de</b> ser tarde.</td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> «Llevo dos años aquí» no se dice con presente perfecto calcado (<i>*He estado viviendo</i>): la perífrasis con <i>llevar</i> es la forma natural.</div>`,
 q:['___ tres años estudiando español.|Hago|Llevo|Tengo|Estoy|1|llevar + gerundio.',
  '¿Ya terminaste? — Sí, ___ terminar.|acabo de|vuelvo a|dejo de|llevo|0|Pasado reciente.',
  'Cuando vio la nota, se ___ a llorar.|puso|echó de|dejó|volvió|0|Inicio súbito.',
  'Tras diez años, ___ fumar.|dejó de|acabó a|volvió de|siguió|0|Interrupción.',
  'Las cosas ___ mejorando poco a poco.|van|llevan|tienen|vuelven|0|Progresión.',
  'Llamaron; ___ de ser el cartero (suposición).|debe|debe de|tiene que de|ha de de|1|deber de = suposición.',
  'Llevo ___ cien páginas del libro.|leído|leídas|leyendo leídas|leer|1|Concuerda con páginas.',
  'Después del verano, ___ a estudiar.|volvió|acabó|dejó|llevó|0|Repetición: volver a.']},
{id:'es-c1-3',lvl:'C1',t:'Concesión y causa: aunque, ya que, puesto que…',sub:'Discurso',h:5,pre:['es-b2-1'],ref:[RAEG,FUN],
 teoria:`<table class="oe-table"><tr><th>Concesión</th><th>Modo</th><th>Matiz</th></tr>
<tr><td>aunque + indicativo</td><td>hecho que se afirma</td><td><b>Aunque llueve</b>, salimos (llueve).</td></tr>
<tr><td>aunque + subjuntivo</td><td>hecho hipotético o no relevante</td><td><b>Aunque llueva</b>, saldremos.</td></tr>
<tr><td>a pesar de (que), si bien, por más que, por mucho que</td><td>ind. / subj.</td><td><b>Por mucho que</b> insistas, no iré.</td></tr>
<tr><td>Causa</td><td></td><td></td></tr>
<tr><td>porque</td><td>causa (respuesta a ¿por qué?)</td><td>No vino <b>porque</b> estaba enfermo.</td></tr>
<tr><td>como (al inicio)</td><td>causa conocida</td><td><b>Como</b> no contestabas, me fui.</td></tr>
<tr><td>ya que, puesto que, dado que</td><td>causa evidente, registro formal</td><td><b>Dado que</b> no hay quórum, se aplaza.</td></tr></table>
<p><i>No porque</i> + subjuntivo niega la causa: <i>No lo digo <b>porque sea</b> tu amigo</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> <i>Como</i> causal solo va al principio; al final es comparativo.</div>`,
 q:['___ estaba cansado, siguió trabajando.|Aunque|Porque|Como|Ya que|0|Concesión con hecho real.',
  'Aunque ___ mañana, iremos a la playa (no se sabe).|llueve|llueva|lloverá|llovía|1|Hipotético: subjuntivo.',
  '___ no contestabas, me marché.|Porque|Como|Aunque|Por más|1|Causa conocida al inicio.',
  'Por mucho que ___, no lo conseguirás.|lo intentas|lo intentes|lo intentarás|lo intentaste|1|Lo más habitual con futuro: subjuntivo.',
  '___ que no hay quórum, se suspende la sesión.|Dado|Aunque|Como|Por|0|Registro formal.',
  'No lo digo porque ___ mi hermano.|es|sea|será|era|1|Causa negada.',
  '___ de que estudió, suspendió.|A pesar|Aunque|Por más|Si bien|0|a pesar de que.',
  'Lo hizo ___ se lo pidieron.|como|porque|aunque|por|1|Causa.']},
{id:'es-c1-4',lvl:'C1',t:'Leísmo, laísmo y loísmo: norma y variación',sub:'Pronombre',h:4,pre:['es-a2-5'],ref:[RAEG,FUN],
 teoria:`<p>La norma general distingue <b>lo/la</b> (OD) de <b>le</b> (OI). En algunas zonas de España se producen confusiones:</p>
<table class="oe-table"><tr><th>Fenómeno</th><th>Ejemplo</th><th>Valoración normativa</th></tr>
<tr><td>leísmo de persona masculina singular</td><td>A Juan <b>le</b> vi ayer.</td><td>admitido (muy extendido en el centro peninsular)</td></tr>
<tr><td>leísmo de cosa / de femenino</td><td>El libro <b>le</b> compré. · A María <b>le</b> vi.</td><td>no recomendado</td></tr>
<tr><td>laísmo</td><td>A María <b>la</b> dije la verdad.</td><td>incorrecto</td></tr>
<tr><td>loísmo</td><td>A Pedro <b>lo</b> dije que viniera.</td><td>incorrecto</td></tr></table>
<p>Hay usos de cortesía (<i>¿Le ayudo?</i> a un hombre o a una mujer, por el trato de usted) y verbos que vacilan según el sentido (<i>ayudar, llamar, avisar</i>). En gran parte de América se conserva la distinción etimológica.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Aprender el leísmo de un manual peninsular y extenderlo a cosas: <i>*El coche le aparqué</i>.</div>`,
 q:['A Juan ___ vi ayer (norma general).|lo|le|la|les|0|OD masculino: lo (le admitido).',
  'A María ___ dije la verdad.|la|le|lo|las|1|OI: le (la sería laísmo).',
  'El libro ___ compré ayer.|le|lo|la|se|1|Cosa masculina: lo.',
  '«A Pedro lo dije que viniera» es un caso de…|leísmo|laísmo|loísmo|voseo|2|lo por le.',
  '«A Juan le vi» (persona masculina) es…|incorrecto|admitido|laísmo|loísmo|1|Leísmo admitido.',
  '«A mi madre la regalé flores» es…|laísmo|leísmo|correcto|loísmo|0|la por le.',
  'Se lo di ___ ellas.|a|para|de|por|0|OI duplicado.',
  'Las cartas ___ escribí ayer.|les|las|los|le|1|OD femenino plural.']},
{id:'es-c1-5',lvl:'C1',t:'Valores de se',sub:'Pronombre',h:5,pre:['es-b2-5','es-a2-5'],ref:[RAEG,CVC],
 teoria:`<table class="oe-table"><tr><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>reflexivo</td><td>Ana <b>se</b> peina.</td></tr>
<tr><td>recíproco</td><td>Ellos <b>se</b> quieren.</td></tr>
<tr><td>variante de le / les</td><td>Le doy el libro → <b>Se</b> lo doy.</td></tr>
<tr><td>verbo pronominal</td><td><b>Se</b> arrepintió. <b>Se</b> quejó.</td></tr>
<tr><td>aspectual / intensivo</td><td><b>Se</b> comió toda la tarta. <b>Se</b> fue.</td></tr>
<tr><td>involuntario (dativo de interés)</td><td><b>Se me</b> rompió el vaso. <b>Se le</b> olvidó.</td></tr>
<tr><td>pasiva refleja</td><td><b>Se</b> venden pisos.</td></tr>
<tr><td>impersonal</td><td><b>Se</b> vive bien aquí.</td></tr>
<tr><td>cambio de significado</td><td>ir / <b>ir</b>se; dormir / dormir<b>se</b>; quedar / quedar<b>se</b></td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> El <i>se</i> involuntario (<i>se me cayó</i>) exculpa al hablante y no tiene equivalente directo en muchas lenguas; se traduce «I dropped it».</div>`,
 q:['«Ellos se escriben cada día» es…|reflexivo|recíproco|impersonal|pasiva refleja|1|Uno al otro.',
  '«Se me olvidaron las llaves» expresa…|acción voluntaria|acción involuntaria|pasiva perifrástica|reflexivo|1|Dativo de interés.',
  '«Se vive bien aquí» es…|impersonal|recíproco|reflexivo|variante de le|0|Sin sujeto.',
  '«Se lo di» — se sustituye a…|lo|le|me|nos|1|le + lo → se lo.',
  '«Se comió la tarta entera» — se es…|aspectual|impersonal|recíproco|pasivo|0|Intensifica la compleción.',
  'Diferencia entre «dormir» y «dormirse»:|ninguna|dormirse = empezar a dormir|dormirse = no dormir|dormir es pronominal|1|Cambio de significado.',
  '«Se alquilan apartamentos» es…|impersonal|pasiva refleja|reflexivo|recíproco|1|Concuerda con apartamentos.',
  '«Se arrepintió de todo» — verbo…|reflexivo|pronominal|recíproco|impersonal|1|Solo existe con se.']},
{id:'es-c1-6',lvl:'C1',t:'Hipótesis en el pasado y condicional compuesto',sub:'Verbo',h:4,pre:['es-b2-3','es-c1-1'],ref:[RAEG,CVC],
 teoria:`<p>El <b>condicional compuesto</b> (<i>habría + participio</i>) y el <b>pluscuamperfecto de subjuntivo</b> (<i>hubiera / hubiese + participio</i>) expresan lo que pudo ocurrir y no ocurrió.</p>
<table class="oe-table"><tr><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>irreal del pasado</td><td>Si <b>hubieras venido</b>, lo <b>habrías visto</b>.</td></tr>
<tr><td>variante coloquial</td><td>Si <b>hubieras venido</b>, lo <b>hubieras visto</b> (aceptada).</td></tr>
<tr><td>reproche</td><td><b>Habrías podido</b> avisarme. · <b>Hubieras</b> llamado.</td></tr>
<tr><td>probabilidad anterior a un pasado</td><td>Cuando llegó, ya <b>habrían cerrado</b>.</td></tr>
<tr><td>deseo imposible</td><td>Ojalá <b>hubiera</b> estudiado más.</td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> <i>*Si habría sabido</i> es una incorrección muy extendida: tras <i>si</i>, <i>hubiera / hubiese</i>.</div>`,
 q:['Si lo ___, te lo habría dicho.|habría sabido|hubiera sabido|sabría|supiera ya|1|si + pluscuamperfecto de subjuntivo.',
  'Si hubieras estudiado, ___ aprobado.|habrías|habías|hubieses de|habrás|0|Condicional compuesto.',
  'Ojalá ___ más tiempo con ella.|hubiera pasado|habría pasado|pasé|pasaba|0|Deseo imposible.',
  '___ podido avisarme. (reproche)|Habrías|Habías|Habrás|Hayas|0|Reproche.',
  'Forma incorrecta:|Si hubiera sabido…|Si habría sabido…|Si hubiese sabido…|De haber sabido…|1|Condicional tras si.',
  'Cuando llegué, ya ___ (probabilidad).|habrían salido|hubieran salido|habían salido seguro|salieron|0|Probabilidad anterior.',
  'Si hubiera llovido, no ___ salido.|hubiéramos|habíamos|habremos|hayamos|0|Variante con -ra aceptada.',
  'De ___ antes, habríamos llegado.|salir|haber salido|saliendo|salíamos|1|de + infinitivo compuesto.']},
/* ------------------------------ C2 ------------------------------ */
{id:'es-c2-1',lvl:'C2',t:'Futuro y condicional de probabilidad',sub:'Verbo',h:4,pre:['es-a2-4','es-b1-4'],ref:[RAEG,CVC],
 teoria:`<p>El futuro y el condicional pierden su valor temporal y expresan <b>conjetura</b>:</p>
<table class="oe-table"><tr><th>Tiempo de la conjetura</th><th>Forma</th><th>Ejemplo</th></tr>
<tr><td>presente</td><td>futuro simple</td><td>¿Dónde está Ana? — <b>Estará</b> en casa.</td></tr>
<tr><td>pasado reciente</td><td>futuro compuesto</td><td><b>Habrá salido</b>.</td></tr>
<tr><td>pasado</td><td>condicional simple</td><td><b>Tendría</b> unos veinte años entonces.</td></tr>
<tr><td>anterior a un pasado</td><td>condicional compuesto</td><td>Ya <b>habrían cenado</b>.</td></tr></table>
<p>Valor concesivo: <i><b>Será</b> muy listo, pero no estudia</i> (= aunque sea listo). Valor de sorpresa: <i>¿<b>Será</b> posible?</i></p>
<div class="xl-int"><b>Dificultad frecuente.</b> Interpretar <i>estará en casa</i> como un futuro real; en la conversación es la forma natural de suponer.</div>`,
 q:['¿Qué hora es? — ___ las diez.|Son seguro|Serán|Serían|Han sido|1|Conjetura presente.',
  'No contesta; ___ salido.|habrá|habría|ha|hubo|0|Conjetura sobre pasado reciente.',
  'Cuando la conocí, ___ unos treinta años.|tendrá|tendría|tuvo|tiene|1|Conjetura en el pasado.',
  '___ muy rico, pero es tacaño. (concesivo)|Será|Sería|Es ser|Fue|0|Futuro concesivo.',
  '¿___ posible? (sorpresa)|Será|Es será|Sería ser|Habrá|0|Sorpresa.',
  'Cuando llegamos, ya ___ (probabilidad).|habrían cenado|habrán cenado|cenaron seguro|cenaban|0|Anterior a un pasado.',
  'Equivalente de «Probablemente está enfermo»:|Estará enfermo.|Estaría enfermo.|Está enfermo será.|Habrá estado.|0|Futuro de probabilidad.',
  'Equivalente de «Probablemente eran las seis»:|Serán las seis.|Serían las seis.|Eran serán.|Habrán sido.|1|Condicional de probabilidad.']},
{id:'es-c2-2',lvl:'C2',t:'Variación del español: voseo, ustedes, seseo y yeísmo',sub:'Variación',h:5,pre:['es-a1-2'],ref:[RAEG,['RTVE','https://www.rtve.es/']],
 teoria:`<p>El español es una lengua <b>pluricéntrica</b>: las academias de 23 países fijan una norma común con variantes cultas regionales.</p>
<table class="oe-table"><tr><th>Rasgo</th><th>Descripción</th><th>Zonas</th></tr>
<tr><td>voseo</td><td><i>vos</i> por <i>tú</i>, con formas propias: <i>vos tenés, vos sos, vení</i></td><td>Argentina, Uruguay, Paraguay, Centroamérica; zonas de Colombia (Antioquia, Valle), Chile (verbal)</td></tr>
<tr><td>ustedes</td><td>único plural de 2.ª persona (no hay <i>vosotros</i>)</td><td>América y Canarias, parte de Andalucía</td></tr>
<tr><td>seseo</td><td><i>z / ce, ci</i> se pronuncian [s]: <i>caza = casa</i></td><td>América, Canarias, gran parte de Andalucía</td></tr>
<tr><td>yeísmo</td><td><i>ll</i> = <i>y</i>: <i>pollo = poyo</i></td><td>mayoritario en todo el mundo hispánico</td></tr>
<tr><td>aspiración de /s/</td><td><i>los amigos</i> [loh amigoh]</td><td>Caribe, Andalucía, costas</td></tr>
<tr><td>léxico</td><td><i>coche / carro / auto; ordenador / computadora; zumo / jugo</i></td><td>—</td></tr></table>
<p>Ninguna variante es «más correcta»: el registro culto de cada país es norma.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Mezclar sistemas en un mismo texto (<i>vos tienes</i>). Elija una variedad de referencia y sea coherente.</div>`,
 q:['Forma voseante de «tú tienes»:|vos tienes|vos tenés|vos tenéis|vos tienés|1|Voseo rioplatense.',
  'Imperativo voseante de «venir»:|ven|vení|venid|venga|1|vení.',
  'El seseo consiste en…|pronunciar ll como y|pronunciar z y c (ante e, i) como s|aspirar la s|usar vos|1|Seseo.',
  '«Pollo» y «poyo» suenan igual por el…|seseo|yeísmo|ceceo|voseo|1|Yeísmo.',
  'En América, el plural de «tú» es…|vosotros|ustedes|vos|tus|1|ustedes.',
  '«Carro» por «coche» es variación…|fonética|léxica|morfológica|sintáctica|1|Léxica.',
  'Vos ___ muy amable. (ser)|eres|sos|sois|es|1|vos sos.',
  'Cuántas academias integran la ASALE (con la RAE):|10|23|30|5|1|23 academias.']},
{id:'es-c2-3',lvl:'C2',t:'Subjuntivo en contextos complejos',sub:'Verbo',h:6,pre:['es-b2-1','es-c1-1'],ref:[RAEG,FUN],
 teoria:`<table class="oe-table"><tr><th>Contexto</th><th>Ejemplo</th><th>Observación</th></tr>
<tr><td>el hecho de que</td><td><b>El hecho de que</b> no <b>venga</b> me preocupa.</td><td>subjuntivo aunque sea un hecho (valoración)</td></tr>
<tr><td>que inicial temático</td><td><b>Que</b> no lo <b>sepas</b> es extraño.</td><td>subjuntivo</td></tr>
<tr><td>verbos de comunicación con sentido de orden</td><td>Te digo que <b>vengas</b> / que <b>viene</b>.</td><td>orden / información</td></tr>
<tr><td>sentir, comprender</td><td><b>Siento</b> que <b>estés</b> mal / Siento que algo <b>falla</b>.</td><td>pesar / percepción</td></tr>
<tr><td>quizá(s), tal vez</td><td><b>Quizá</b> venga / viene.</td><td>más o menos duda</td></tr>
<tr><td>reduplicativas</td><td><b>Pase lo que pase</b>, <b>digan lo que digan</b>.</td><td>fórmulas fijas</td></tr>
<tr><td>después de que</td><td><b>Después de que se fue</b> / <b>se fuera</b>.</td><td>norma: indicativo en pasado; el subjuntivo es frecuente en la prensa</td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> Interpretar el modo como algo mecánico: con <i>decir, sentir, comprender</i> el modo cambia el significado.</div>`,
 q:['El hecho de que no ___ me sorprende.|llama|llame|llamará|llamó|1|el hecho de que + subjuntivo.',
  'Te digo que ___ (orden).|vienes|vengas|vendrás|venías|1|decir = ordenar.',
  'Te digo que ___ (información: está en camino).|viene|venga|viniera|vendría que|0|decir = informar.',
  'Siento que ___ enfermo (pesar).|estás|estés|estarás|estabas|1|Lamento: subjuntivo.',
  '___ lo que ___, iré.|Pase / pase|Pasa / pase|Pase / pasa|Pasara / pase|0|Reduplicativa.',
  '___ que no lo sepas es raro.|El|Que|Lo|Si|1|Que temático + subjuntivo.',
  'Siento que alguien me ___ (percepción).|mire|mira|mirara|mirase|1|sentir = percibir: indicativo.',
  'Quizá ___ mañana (duda).|llueve / llueva, ambos posibles|solo llueve|solo llueva|lloverá nunca|0|Ambos modos.']},
{id:'es-c2-4',lvl:'C2',t:'Nominalización y registro académico',sub:'Discurso',h:6,pre:['es-c1-3'],ref:[RAEG,FUN],
 teoria:`<p>El español académico y administrativo condensa información en sintagmas nominales.</p>
<table class="oe-table"><tr><th>Verbal</th><th>Nominal</th></tr>
<tr><td>Los precios subieron mucho y la gente consumió menos.</td><td><b>El fuerte aumento de los precios</b> provocó <b>una caída del consumo</b>.</td></tr>
<tr><td>Se analizaron los datos con cuidado.</td><td>Se llevó a cabo <b>un análisis minucioso de los datos</b>.</td></tr></table>
<p>Sufijos: <i>-ción / -sión, -miento, -dad, -ez(a), -ura, -aje, -ncia</i>. Verbos de apoyo: <i>llevar a cabo, dar lugar a, tener lugar, realizar, efectuar, proceder a</i>. Rasgos del registro: impersonalidad, conectores (<i>no obstante, por consiguiente, en este sentido</i>), citas y referencias.</p>
<p>Vicios señalados por FundéuRAE: abuso de <i>realizar</i>, <i>a nivel de</i> (por <i>en</i>), el gerundio de posterioridad (<i>*Chocó, muriendo al instante</i>).</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Calcar el orden de los compuestos ingleses: «climate change policy» es <i>política <b>contra el</b> cambio climático</i>, con preposición.</div>`,
 q:['Nominalice «crecer»:|crecimiento|creción|crecedad|crecencia|0|-miento.',
  'Nominalice «analizar»:|analización|análisis|analizamiento|analizaje|1|análisis.',
  'Verbo de apoyo: «___ a cabo una encuesta».|llevar|dar|tener|hacer de|0|llevar a cabo.',
  'La reunión ___ lugar el lunes.|tendrá|dará|llevará|hará|0|tener lugar.',
  'Vicio de estilo:|en el ámbito educativo|a nivel educativo (por «en educación»)|en la educación|en materia educativa|1|a nivel de.',
  'Gerundio incorrecto:|Salió corriendo.|Chocó, muriendo al instante.|Estudia trabajando.|Llegó cansado.|1|Gerundio de posterioridad.',
  '«Climate change policy»:|clima cambio política|política climática de cambio|política contra el cambio climático|política cambio climático de|2|Con preposiciones.',
  'Nominalice «rico»:|riquez|riqueza|ricura|ricosidad|1|-eza.']},
{id:'es-c2-5',lvl:'C2',t:'Orden de palabras, tópico y foco',sub:'Oración',h:5,pre:['es-a2-5','es-c1-5'],ref:[RAEG,CVC],
 teoria:`<p>El orden del español es flexible y responde a la <b>estructura informativa</b>: lo conocido (tópico) suele ir primero y lo nuevo (foco) al final.</p>
<table class="oe-table"><tr><th>Recurso</th><th>Ejemplo</th></tr>
<tr><td>tópico con pronombre de retoma</td><td><b>El libro</b>, ya <b>lo</b> leí.</td></tr>
<tr><td>foco contrastivo antepuesto (sin pronombre)</td><td><b>Dos libros</b> leí, no tres.</td></tr>
<tr><td>sujeto posverbal (sujeto nuevo)</td><td>Llegó <b>el tren</b>. · Me gusta <b>el jazz</b>.</td></tr>
<tr><td>perífrasis de relativo (escindidas)</td><td><b>Fue Marta quien</b> lo dijo. · <b>Lo que</b> necesito <b>es</b> tiempo.</td></tr>
<tr><td>«que» galicado</td><td><i>*Fue por eso que</i> → <b>Fue por eso por lo que</b> / <b>Por eso</b> (la norma recomienda evitarlo, aunque es general en América)</td></tr></table>
<div class="xl-int"><b>Dificultad frecuente.</b> Mantener siempre SVO: «El tren llegó» responde a «¿Qué hizo el tren?», mientras «Llegó el tren» responde a «¿Qué pasó?».</div>`,
 q:['Respuesta natural a «¿Qué pasó?»:|El tren llegó.|Llegó el tren.|Tren llegó.|Llegó tren el.|1|Sujeto nuevo posverbal.',
  'El café, ya ___ preparé.|—|lo|le|la|1|Tópico con retoma.',
  '___ Marta quien lo dijo.|Era|Fue|Es que|Sería ser|1|Escindida.',
  'Lo que necesito ___ tiempo.|son|es|está|hay|1|Perífrasis de relativo.',
  'Versión recomendada por la norma:|Fue por eso que me fui.|Fue por eso por lo que me fui.|Fue que por eso me fui.|Por eso fue que que me fui.|1|Evitar el que galicado.',
  'Foco contrastivo:|Tres manzanas compré, no dos.|Tres manzanas las compré, no dos.|Las compré tres manzanas.|Compré las tres.|0|Sin pronombre.',
  'En «Me gusta el jazz», «el jazz» es…|objeto directo|sujeto|tópico|complemento indirecto|1|Sujeto posverbal.',
  'Tópico dislocado:|A María le di el libro.|Le di el libro.|Di el libro.|El libro di.|0|A María… le.']},
{id:'es-c2-6',lvl:'C2',t:'Marcadores del discurso',sub:'Discurso',h:5,pre:['es-c1-3'],ref:[RAEG,FUN],
 teoria:`<table class="oe-table"><tr><th>Función</th><th>Marcadores</th></tr>
<tr><td>estructuradores</td><td>en primer lugar, por una parte… por otra, por último, en suma</td></tr>
<tr><td>aditivos</td><td>además, asimismo, encima (coloquial), incluso</td></tr>
<tr><td>contraargumentativos</td><td>sin embargo, no obstante, ahora bien, con todo, en cambio</td></tr>
<tr><td>consecutivos</td><td>por tanto, por consiguiente, así pues, de ahí que (+ subj.)</td></tr>
<tr><td>reformuladores</td><td>es decir, o sea, mejor dicho, en otras palabras, en definitiva</td></tr>
<tr><td>conversacionales</td><td>bueno, pues, vale, oye, mira, hombre</td></tr></table>
<p>Su posición y su puntuación son significativas: <i>Sin embargo, …</i> va entre comas; <i>de ahí que</i> exige subjuntivo: <i>Llovió mucho; <b>de ahí que se suspendiera</b> el partido</i>.</p>
<div class="xl-int"><b>Dificultad frecuente.</b> Abusar de un mismo conector (<i>entonces</i>, <i>pero</i>) en textos formales; la variación y la precisión son marcas del nivel C2.</div>`,
 q:['Llovió mucho; ___ que se suspendiera el partido.|por eso|de ahí|así pues|sin embargo|1|de ahí que + subjuntivo.',
  'Es un buen plan; ___, es caro.|además|no obstante|por tanto|es decir|1|Contraargumentativo.',
  'Marcador reformulador:|es decir|asimismo|sin embargo|por consiguiente|0|Reformulación.',
  'Marcador consecutivo:|por consiguiente|ahora bien|en cambio|incluso|0|Consecuencia.',
  'Para cerrar una enumeración:|por último|en cambio|encima|o sea|0|Estructurador.',
  'Marcador aditivo formal:|encima|asimismo|pues|bueno|1|asimismo.',
  'Puntuación correcta:|Sin embargo el plan falló.|Sin embargo, el plan falló.|Sin, embargo el plan falló.|Sin embargo; el plan, falló.|1|Entre comas.',
  'Ella prefiere el mar; él, ___, la montaña.|en cambio|por tanto|es decir|así pues|0|Contraste entre dos sujetos.']}
];
/* ---------- recursos oficiales ---------- */
const RES=[
 ['gram','Centro Virtual Cervantes','https://cvc.cervantes.es/','Portal del Instituto Cervantes: enseñanza, lengua, literatura y el Plan curricular.','A1 A2 B1 B2 C1 C2'],
 ['gram','Real Academia Española · gramática y ortografía','https://www.rae.es/','Obras normativas, «Español al día» y consultas.','B1 B2 C1 C2'],
 ['gram','FundéuRAE','https://www.fundeu.es/','Recomendaciones de uso diarias.','B2 C1 C2'],
 ['gram','ProfeDeELE','https://www.profedeele.es/','Materiales gratuitos de gramática y destrezas por nivel.','A1 A2 B1 B2 C1'],
 ['video','Hablacultura','https://hablacultura.com/','Textos y audios graduados con cultura hispánica.','A2 B1 B2 C1'],
 ['video','VideoELE','https://www.videoele.com/','Vídeos didácticos con actividades por nivel.','A1 A2 B1'],
 ['video','RTVE','https://www.rtve.es/','Radio y televisión pública de España.','B1 B2 C1 C2'],
 ['video','YouTube · RTVE Noticias','https://www.youtube.com/@RTVENoticias','Informativos de España.','B1 B2 C1 C2'],
 ['video','YouTube · DW Español','https://www.youtube.com/@dwespanol','Noticias y reportajes en español neutro.','B1 B2 C1'],
 ['video','YouTube · BBC News Mundo','https://www.youtube.com/@BBCMundo','Noticias en español para América Latina.','B1 B2 C1'],
 ['video','YouTube · Instituto Cervantes','https://www.youtube.com/@InstitutoCervantesOficial','Canal oficial del Instituto Cervantes.','A2 B1 B2 C1'],
 ['video','YouTube · FundéuRAE','https://www.youtube.com/@Fundeu','Dudas de uso en vídeo.','B2 C1 C2'],
 ['video','YouTube · RAEinforma','https://www.youtube.com/@RAEinforma','Canal de la Real Academia Española.','C1 C2'],
 ['skill','Biblioteca Virtual Miguel de Cervantes','https://www.cervantesvirtual.com/','Literatura hispánica digitalizada en acceso abierto.','B2 C1 C2'],
 ['test','DELE · Instituto Cervantes','https://examenes.cervantes.es/','Diplomas oficiales de A1 a C2.','A1 A2 B1 B2 C1 C2'],
 ['test','SIELE','https://siele.org/','Certificado digital multinivel (Instituto Cervantes, UNAM, Salamanca, UBA).','A1 A2 B1 B2 C1'],
 ['dic','Diccionario de la lengua española (RAE)','https://dle.rae.es/','Diccionario normativo.','A1 A2 B1 B2 C1 C2'],
 ['dic','CORPES XXI (RAE)','https://apps2.rae.es/CORPES/','Corpus del español del siglo XXI.','C1 C2'],
 ['dic','WordReference · español–inglés','https://www.wordreference.com/esen/','Diccionario bilingüe y foros.','A1 A2 B1 B2 C1 C2']
];
const DELE='https://examenes.cervantes.es/';
const EXAM={A1:['DELE A1',DELE],A2:['DELE A2',DELE],B1:['DELE B1',DELE],B2:['DELE B2',DELE],C1:['DELE C1',DELE],C2:['DELE C2',DELE]};
/* Horas acumuladas: cursos de 30 h del Instituto Cervantes de Los Ángeles
   (A1 3 cursos, A2 4, B1 5, B2 6, C1 7). C2 no figura: estimación propia. */
const HORAS={A1:[90,90],A2:[210,210],B1:[360,360],B2:[540,540],C1:[750,750],C2:[1000,1100,true]};
const FUENTE=['Instituto Cervantes Los Ángeles · FAQ (cursos de 30 h por nivel)','https://cervantes.org/us/los-angeles/en/learning-teaching/frequently-asked-questions-about-our-spanish-courses'];
const CAN={
 A1:'Presentarse, hablar de la familia, los gustos y la rutina; preguntar y entender indicaciones sencillas.',
 A2:'Contar experiencias y biografías, describir el pasado, hacer planes y resolver gestiones cotidianas.',
 B1:'Narrar con fluidez combinando los pasados, expresar deseos y consejos, y desenvolverse en viajes y trabajo.',
 B2:'Argumentar y matizar opiniones con subjuntivo, comprender prensa y radio de distintos países hispanohablantes.',
 C1:'Comprender textos extensos y su implícito; escribir textos académicos y profesionales con precisión normativa.',
 C2:'Dominar registros y variedades del español, la literatura y la retórica; reformular con matiz y naturalidad.'};
return {code:'es',nombre:'Español',es:'Español',saludo:['¡Bienvenidos!','Welcome'],marca:['Español','Atelier de lengua española'],
  U,RES,EXAM,HORAS,FUENTE,CAN,voz:'es-ES',
  intro:'Español como lengua extranjera de A1 a C2: explicaciones propias, cuestionarios corregidos al instante, conjugador con voseo y enlaces a los recursos oficiales del Instituto Cervantes, la RAE, FundéuRAE, DELE y SIELE.'};
})();
