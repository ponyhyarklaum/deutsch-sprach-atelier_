/* =====================================================================
   ENGLISH · Atelier — datos del inglés (A1–C2)
   Explicaciones y ejercicios propios, redactados para hispanohablantes.
   Los enlaces remiten a páginas oficiales y gratuitas (British Council,
   BBC Learning English, Cambridge English, Test-English, VOA); no se copia
   su contenido. Comprobados el 8 de noviembre de 2026.
   Unidad: {id,lvl,t,sub,h (horas para dominarla),pre (requisitos),ref,teoria,q}
   Pregunta: "enunciado|op0|op1|op2|op3|índice correcto|explicación"
   ===================================================================== */
const EN=(function(){
const BC='https://learnenglish.britishcouncil.org/free-resources/grammar/';
const TE='https://test-english.com/grammar-points/';
const bc=(p,t)=>['British Council · '+t,BC+p];
const te=(l)=>['Test-English · gramática '+l.toUpperCase(),TE+l+'/'];
const U=[
/* ------------------------------ A1 ------------------------------ */
{id:'en-a1-1',lvl:'A1',t:'To be: presente',sub:'Verbo',h:3,pre:[],
 ref:[bc('a1-a2/present-simple-be','Present simple: be'),te('a1')],
 teoria:`<p><b>To be</b> reúne en un solo verbo los usos de <i>ser</i> y <i>estar</i>, y además expresa la edad, el estado físico y el tiempo atmosférico. Es el único verbo inglés con tres formas en presente.</p>
<table class="oe-table"><tr><th>Persona</th><th>Forma plena</th><th>Contracción</th><th>Negación</th></tr>
<tr><td>I</td><td>am</td><td>I'm</td><td>I'm not</td></tr>
<tr><td>you / we / they</td><td>are</td><td>you're</td><td>aren't</td></tr>
<tr><td>he / she / it</td><td>is</td><td>she's</td><td>isn't</td></tr></table>
<p>En la pregunta se invierte el orden: <b>Are you</b> tired? — Yes, I am. Las respuestas cortas afirmativas no se contraen (<i>Yes, I am</i>, nunca <i>Yes, I'm</i>).</p>
<p class="xl-ej">I <b>am</b> 25 years old. · It <b>is</b> cold today. · We <b>are</b> hungry. · <b>Is</b> she at home?</p>
<div class="xl-int"><b>Interferencia del español.</b> Se dice <i>I am 25</i> (no <i>I have 25</i>), <i>I'm hungry / cold / afraid</i> (no <i>I have hunger</i>). El sujeto es obligatorio: <i>It is late</i>, nunca <i>Is late</i>.</div>`,
 q:['She ___ a doctor.|am|is|are|be|1|Tercera persona del singular: is.',
  'I ___ twenty-three years old.|have|am|is|has|1|La edad se expresa con be: I am 23.',
  '___ you from Bogotá?|Is|Do|Are|Am|2|Pregunta con you: Are you…?',
  'They ___ at work now.|isn\'t|aren\'t|am not|not are|1|Negación con they: aren\'t.',
  '— Are you Colombian? — Yes, I ___.|\'m|am|are|is|1|La respuesta corta afirmativa no se contrae.',
  '___ cold today.|Is|It is|It has|Has|1|El inglés exige sujeto: It is cold.',
  'We ___ hungry.|have|are|is|has|1|Sensaciones con be: we are hungry.',
  'My brother and I ___ students.|is|am|are|be|2|Sujeto plural (= we): are.']},
{id:'en-a1-2',lvl:'A1',t:'Present simple',sub:'Verbo',h:4,pre:['en-a1-1'],
 ref:[bc('a1-a2/present-simple','Present simple'),te('a1')],
 teoria:`<p>El <b>present simple</b> expresa hábitos, rutinas, verdades generales y estados permanentes. Solo cambia en la tercera persona del singular, que añade <b>-s</b>.</p>
<table class="oe-table"><tr><th>Regla de la -s</th><th>Ejemplo</th></tr>
<tr><td>General: + s</td><td>work → works, play → plays</td></tr>
<tr><td>-s, -sh, -ch, -x, -o: + es</td><td>watch → watches, go → goes</td></tr>
<tr><td>consonante + y: -ies</td><td>study → studies</td></tr>
<tr><td>Irregular</td><td>have → has</td></tr></table>
<p>Suele acompañarse de adverbios de frecuencia, que van <b>antes del verbo principal</b> pero <b>después de be</b>: She <b>always</b> gets up early · He is <b>never</b> late.</p>
<p class="xl-ej">Water <b>boils</b> at 100 °C. · My sister <b>teaches</b> maths. · I <b>usually</b> take the bus.</p>
<div class="xl-int"><b>Interferencia del español.</b> El olvido de la -s de tercera persona (<i>she work</i>) es el error más persistente; repáselo en voz alta. Para acciones en curso no se usa este tiempo: <i>I'm reading</i>, no <i>I read now</i>.</div>`,
 q:['My father ___ in a bank.|work|works|working|is work|1|Tercera persona: works.',
  'She ___ TV every evening.|watchs|watches|watch|watching|1|-ch añade -es.',
  'He ___ chemistry at university.|studys|studies|study|studyes|1|Consonante + y → -ies.',
  'Lucía ___ two brothers.|have|haves|has|is having|2|have → has.',
  'Choose the correct word order.|I go always to the gym.|I always go to the gym.|Always I go to the gym.|I go to the gym always every.|1|El adverbio de frecuencia va antes del verbo principal.',
  'Choose the correct word order.|She always is late.|She is always late.|Always she is late.|She is late always never.|1|Con be, el adverbio va detrás.',
  'Water ___ at 0 °C.|freeze|freezes|is freezing|freezed|1|Verdad general en tercera persona.',
  'The shop ___ at nine.|open|opens|opening|is open at nine opens|1|Horario fijo: present simple con -s.']},
{id:'en-a1-3',lvl:'A1',t:'Preguntas y negación con do / does',sub:'Oración',h:4,pre:['en-a1-2'],
 ref:[bc('a1-a2/question-forms','Question forms'),te('a1')],
 teoria:`<p>Los verbos léxicos no se invierten: necesitan el auxiliar <b>do / does</b>. El auxiliar lleva la marca de persona y el verbo queda en <b>infinitivo sin to</b>.</p>
<table class="oe-table"><tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>Negación</td><td>I <b>don't</b> like coffee.</td><td>She <b>doesn't</b> like coffee.</td></tr>
<tr><td>Pregunta</td><td><b>Do</b> you like coffee?</td><td><b>Does</b> she like coffee?</td></tr>
<tr><td>Respuesta corta</td><td>Yes, I do. / No, I don't.</td><td>Yes, she does.</td></tr></table>
<p>Orden de la pregunta con partícula interrogativa: <b>QU-A-S-V</b> (question word – auxiliary – subject – verb): <i>Where <b>do</b> you live? What time <b>does</b> the film start?</i> Si la partícula es el sujeto, no hay auxiliar: <i>Who lives here?</i></p>
<div class="xl-int"><b>Interferencia del español.</b> No se pregunta con entonación sola (<i>You like coffee?</i> es coloquial y marcado). Tras <i>does</i> el verbo pierde la -s: <i>Does she <b>work</b></i>, nunca <i>does she works</i>.</div>`,
 q:['___ you speak French?|Are|Do|Does|Is|1|Verbo léxico con you: do.',
  'She ___ eat meat.|don\'t|doesn\'t|isn\'t|not|1|Tercera persona: doesn\'t.',
  'Does he ___ in London?|lives|live|living|lived|1|Tras does, infinitivo sin -s.',
  'Where ___ your parents live?|does|do|are|is|1|Sujeto plural: do.',
  'Who ___ the guitar in your family?|does play|plays|do plays|play|1|Si who es sujeto, no hay auxiliar.',
  '— Do you have a car? — No, I ___.|haven\'t|don\'t|doesn\'t|not|1|La respuesta corta repite el auxiliar.',
  'What time ___ the train leave?|do|does|is|leaves|1|El tren = it: does.',
  'Choose the correct question.|Where you work?|Where do you work?|Where work you?|Where does you work?|1|QU-A-S-V.']},
{id:'en-a1-4',lvl:'A1',t:'Artículos, plurales y sustantivos contables',sub:'Sustantivo',h:4,pre:[],
 ref:[bc('a1-a2/nouns-countable-uncountable','Countable and uncountable nouns'),te('a1')],
 teoria:`<p><b>A / an</b> acompaña a un contable singular mencionado por primera vez; la elección depende del <b>sonido</b> inicial: <i>a university</i> [juː], <i>an hour</i> [aʊ]. <b>The</b> sirve para lo ya conocido o único. Las generalizaciones en plural o con incontables van <b>sin artículo</b>: <i>Dogs are loyal. Life is short.</i></p>
<table class="oe-table"><tr><th>Plural</th><th>Ejemplo</th></tr>
<tr><td>+ s / + es</td><td>book → books · box → boxes</td></tr>
<tr><td>consonante + y → -ies</td><td>city → cities</td></tr>
<tr><td>-f / -fe → -ves</td><td>knife → knives</td></tr>
<tr><td>Irregulares</td><td>man → men · child → children · person → people · foot → feet</td></tr></table>
<p><b>Incontables</b>: no llevan <i>a</i> ni plural: <i>information, advice, news, furniture, money, homework</i>. Se cuentan con un partitivo: <i>a piece of advice</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> En español se dice «la vida», «los perros son fieles»; en inglés, sin artículo. Las profesiones llevan <i>a</i>: <i>She is <b>a</b> nurse</i>. <i>Informations, advices</i> no existen.</div>`,
 q:['She is ___ engineer.|a|an|the|—|1|Sonido vocálico: an.',
  'He studies at ___ university in Medellín.|an|a|the|—|1|university empieza por el sonido [j]: a.',
  '___ life is beautiful.|The|A|—|An|2|Generalización con incontable: sin artículo.',
  'I need some ___ about the course.|informations|information|an information|information\'s|1|information es incontable.',
  'There are three ___ in the kitchen.|knifes|knives|knife|knivs|1|-fe → -ves.',
  'How many ___ live in your house?|persons|people|peoples|person|1|El plural habitual de person es people.',
  'Can you give me ___?|an advice|a piece of advice|advices|some advices|1|advice es incontable: a piece of advice.',
  'My mother is ___ teacher.|—|a|the|one|1|Las profesiones llevan a.']},
{id:'en-a1-5',lvl:'A1',t:'Pronombres, posesivos y genitivo sajón',sub:'Pronombre',h:3,pre:['en-a1-4'],
 ref:[bc('a1-a2/possessive-s','Possessive \'s'),te('a1')],
 teoria:`<table class="oe-table"><tr><th>Sujeto</th><th>Objeto</th><th>Adjetivo posesivo</th><th>Pronombre posesivo</th></tr>
<tr><td>I</td><td>me</td><td>my</td><td>mine</td></tr><tr><td>you</td><td>you</td><td>your</td><td>yours</td></tr>
<tr><td>he</td><td>him</td><td>his</td><td>his</td></tr><tr><td>she</td><td>her</td><td>her</td><td>hers</td></tr>
<tr><td>it</td><td>it</td><td>its</td><td>—</td></tr><tr><td>we</td><td>us</td><td>our</td><td>ours</td></tr>
<tr><td>they</td><td>them</td><td>their</td><td>theirs</td></tr></table>
<p>El posesivo concuerda con el <b>poseedor</b>, no con lo poseído: <i>Ana and <b>her</b> brother · Juan and <b>his</b> sister</i>. Para personas se prefiere el <b>genitivo sajón</b>: <i>my sister<b>'s</b> car, the students<b>'</b> books, the children<b>'s</b> room</i>.</p>
<p><i>Its</i> (posesivo) no lleva apóstrofo; <i>it's</i> = it is.</p>
<div class="xl-int"><b>Interferencia del español.</b> «Su» se desdobla en <i>his / her / its / their / your</i> según el poseedor. Las partes del cuerpo llevan posesivo: <i>I washed <b>my</b> hands</i>, no <i>the hands</i>.</div>`,
 q:['María lives with ___ parents.|his|her|their|its|1|La poseedora es María: her.',
  'This is ___ car (= el coche de mi padre).|my father car|my father\'s car|the car of my father\'s|my fathers car|1|Genitivo sajón.',
  'The dog wagged ___ tail.|it\'s|its|his|their|1|Posesivo de it, sin apóstrofo.',
  'Can you help ___?|we|us|our|ours|1|Pronombre objeto: us.',
  'Is this pen yours or ___?|my|mine|me|I|1|Pronombre posesivo: mine.',
  'The ___ toys are everywhere (= los juguetes de los niños).|childrens\'|children\'s|childs\'|children|1|Plural irregular + \'s.',
  'I brushed ___ teeth.|the|my|mine|a|1|Partes del cuerpo con posesivo.',
  'Those are the ___ books (= de los estudiantes).|student\'s|students\'|students|students\'s|1|Plural regular: solo apóstrofo.']},
{id:'en-a1-6',lvl:'A1',t:'There is / there are y preposiciones de lugar',sub:'Oración',h:3,pre:['en-a1-1','en-a1-4'],
 ref:[bc('a1-a2/using-there-there-are','There is / there are'),bc('a1-a2/prepositions-place','Prepositions of place')],
 teoria:`<p>«Hay» se dice <b>there is</b> con singular o incontable y <b>there are</b> con plural. Negación y pregunta siguen a <i>be</i>: <i>There <b>isn't</b> any milk. <b>Are there</b> any chairs?</i></p>
<table class="oe-table"><tr><th>Preposición</th><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>in</td><td>dentro; ciudades, países</td><td>in the box · in Cali</td></tr>
<tr><td>on</td><td>sobre una superficie; calles (US)</td><td>on the table · on the wall</td></tr>
<tr><td>at</td><td>punto concreto</td><td>at the bus stop · at home · at work</td></tr>
<tr><td>under / next to / between / opposite</td><td>posición</td><td>between the bank and the café</td></tr></table>
<div class="xl-int"><b>Interferencia del español.</b> «En» se reparte entre <i>in / on / at</i>. Concordancia: <i>There <b>are</b> two problems</i>, nunca <i>There is two</i>. No se dice <i>Have a bank here</i>.</div>`,
 q:['___ a supermarket near my house.|There are|There is|It has|Have|1|Singular: there is.',
  '___ any eggs in the fridge?|Is there|Are there|There are|Have|1|Plural en pregunta: are there.',
  'The keys are ___ the table.|in|on|at|between|1|Superficie: on.',
  'I\'ll meet you ___ the bus stop.|in|on|at|to|2|Punto concreto: at.',
  'My grandparents live ___ Cartagena.|at|on|in|to|2|Ciudades: in.',
  'There ___ some milk in the glass.|are|is|have|be|1|Incontable: there is.',
  'The pharmacy is ___ the bank and the school.|among|between|next|opposite to|1|Entre dos elementos: between.',
  'She is ___ home today.|in|at|on|to|1|Expresión fija: at home.']},
/* ------------------------------ A2 ------------------------------ */
{id:'en-a2-1',lvl:'A2',t:'Present continuous frente a present simple',sub:'Verbo',h:5,pre:['en-a1-2','en-a1-3'],
 ref:[bc('b1-b2/stative-verbs','Stative verbs'),te('a2')],
 teoria:`<p>El <b>present continuous</b> (<i>be + -ing</i>) describe lo que ocurre <b>ahora</b> o en un periodo temporal, y planes ya acordados. El <i>present simple</i> describe hábitos y hechos permanentes.</p>
<table class="oe-table"><tr><th>Present simple</th><th>Present continuous</th></tr>
<tr><td>I <b>work</b> in a hotel. (permanente)</td><td>I'<b>m working</b> from home this week. (temporal)</td></tr>
<tr><td>She <b>plays</b> tennis on Sundays.</td><td>She'<b>s playing</b> tennis right now.</td></tr></table>
<p>Ortografía de -ing: <i>make → making</i> (cae la -e muda), <i>lie → lying</i>, <i>run → running</i> (se duplica la consonante final tras vocal tónica breve).</p>
<p>Los <b>verbos de estado</b> (<i>know, like, want, need, believe, belong, understand</i>) casi nunca van en continuo: <i>I <b>know</b> the answer</i>, no <i>I'm knowing</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El español usa el presente simple para el «ahora» (<i>¿Qué haces?</i>); el inglés exige el continuo: <i>What <b>are</b> you <b>doing</b>?</i></div>`,
 q:['Shh! The baby ___.|sleeps|is sleeping|sleep|sleeping|1|Acción en curso: present continuous.',
  'I ___ the answer.|am knowing|know|knowing|knows|1|know es verbo de estado.',
  'She usually ___ to work, but today she ___ the bus.|walks / is taking|is walking / takes|walk / take|walks / takes|0|Hábito frente a excepción de hoy.',
  'Choose the correct spelling.|runing|running|runnning|runeing|1|Se duplica la n.',
  'What ___ you ___ this weekend? (plan acordado)|do / do|are / doing|does / do|are / do|1|Plan acordado: present continuous.',
  'This book ___ to my teacher.|is belonging|belongs|belong|belonging|1|belong es de estado.',
  'Water ___ at 100 °C.|is boiling|boils|boil|boiling|1|Verdad general: present simple.',
  'Look! It ___.|rains|is raining|rain|raining|1|Lo que ocurre ahora.']},
{id:'en-a2-2',lvl:'A2',t:'Past simple: regulares e irregulares',sub:'Verbo',h:6,pre:['en-a1-3'],
 ref:[bc('a1-a2/past-continuous-past-simple','Past continuous and past simple'),te('a2')],
 teoria:`<p>El <b>past simple</b> narra acciones terminadas en un momento pasado definido (<i>yesterday, last year, in 2019, ago</i>). Los regulares añaden <b>-ed</b>; los irregulares tienen forma propia que hay que memorizar.</p>
<table class="oe-table"><tr><th>Regla</th><th>Ejemplo</th></tr>
<tr><td>+ ed / + d</td><td>work → worked · live → lived</td></tr>
<tr><td>consonante + y → -ied</td><td>study → studied</td></tr>
<tr><td>Duplicación</td><td>stop → stopped · plan → planned</td></tr>
<tr><td>Irregulares</td><td>go → went · see → saw · buy → bought · take → took</td></tr></table>
<p>Negación y pregunta con <b>did</b> + infinitivo: <i>I <b>didn't go</b>. <b>Did</b> you <b>see</b> it?</i> La terminación -ed se pronuncia [t] (<i>worked</i>), [d] (<i>played</i>) o [ɪd] solo tras t / d (<i>wanted, needed</i>).</p>
<div class="xl-int"><b>Interferencia del español.</b> Un solo past simple equivale al pretérito y a muchos usos del imperfecto. No se duplica el pasado: <i>Did you <b>go</b></i>, no <i>did you went</i>. Evite pronunciar <i>worked</i> como «work-ed».</div>`,
 q:['We ___ to Cartagena last summer.|go|went|gone|goed|1|go → went.',
  'She ___ English at university.|studyed|studied|studies|studed|1|consonante + y → -ied.',
  'Did you ___ the match?|saw|see|seen|seeing|1|Tras did, infinitivo.',
  'They ___ the bus because it was late.|didn\'t took|didn\'t take|don\'t took|not took|1|didn\'t + infinitivo.',
  'The car ___ suddenly.|stoped|stopped|stopt|stopping|1|Se duplica la p.',
  'In which verb is -ed pronounced [ɪd]?|played|wanted|worked|lived|1|Solo tras t o d.',
  'I ___ a new phone two days ago.|buyed|bought|brought|buy|1|buy → bought (brought es de bring).',
  '___ he call you yesterday?|Does|Did|Was|Do|1|Pregunta en pasado: did.']},
{id:'en-a2-3',lvl:'A2',t:'Past continuous',sub:'Verbo',h:4,pre:['en-a2-1','en-a2-2'],
 ref:[bc('a1-a2/past-continuous-past-simple','Past continuous and past simple'),te('a2')],
 teoria:`<p>El <b>past continuous</b> (<i>was / were + -ing</i>) presenta una acción <b>en desarrollo</b> en el pasado; sirve de escenario para otra acción puntual en past simple.</p>
<table class="oe-table"><tr><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>while + continuo</td><td><b>While</b> I <b>was cooking</b>, the phone <b>rang</b>.</td></tr>
<tr><td>when + simple</td><td>I <b>was cooking when</b> the phone <b>rang</b>.</td></tr>
<tr><td>dos acciones paralelas</td><td>She <b>was reading</b> while he <b>was watching</b> TV.</td></tr></table>
<p>Compare: <i>When I arrived, they <b>had</b> dinner</i> (cenaron después) frente a <i>they <b>were having</b> dinner</i> (ya estaban cenando).</p>
<div class="xl-int"><b>Interferencia del español.</b> Corresponde al «estaba + gerundio» y a muchos imperfectos de acción; pero los verbos de estado siguen en simple: <i>I <b>knew</b> him</i> (lo conocía).</div>`,
 q:['I ___ TV when you called.|watched|was watching|were watching|am watching|1|Escenario en curso: was watching.',
  'While they ___, it started to rain.|were walking|walked|was walking|walk|0|while + continuo; they → were.',
  'She ___ her leg while she was skiing.|was breaking|broke|breaks|breaking|1|Acción puntual: past simple.',
  'At 8 p.m. yesterday we ___ dinner.|had|were having|have|are having|1|Acción en curso en un momento pasado.',
  'I ___ him when I was a child.|was knowing|knew|know|was knew|1|know es de estado.',
  'What ___ you doing at midnight?|did|were|was|are|1|you → were.',
  'When I arrived, the film ___. (ya había empezado y seguía)|started|was starting|was playing|plays|2|Acción en curso a la llegada.',
  'He was sleeping ___ the alarm went off.|while|when|during|meanwhile|1|when + past simple puntual.']},
{id:'en-a2-4',lvl:'A2',t:'Comparativos y superlativos',sub:'Adjetivo',h:4,pre:['en-a1-4'],
 ref:[bc('a1-a2/comparative-adjectives','Comparative adjectives'),te('a2')],
 teoria:`<table class="oe-table"><tr><th>Adjetivo</th><th>Comparativo</th><th>Superlativo</th></tr>
<tr><td>una sílaba: cheap</td><td>cheap<b>er</b> than</td><td>the cheap<b>est</b></td></tr>
<tr><td>-y: easy</td><td>eas<b>ier</b></td><td>the eas<b>iest</b></td></tr>
<tr><td>CVC: big</td><td>big<b>ger</b></td><td>the big<b>gest</b></td></tr>
<tr><td>dos o más sílabas: expensive</td><td><b>more</b> expensive</td><td>the <b>most</b> expensive</td></tr>
<tr><td>irregulares</td><td>better · worse · further</td><td>the best · the worst · the furthest</td></tr></table>
<p>Igualdad: <i>as tall <b>as</b></i>; desigualdad atenuada: <i>not as expensive as</i>. Tras el superlativo, el lugar va con <b>in</b>: <i>the tallest building <b>in</b> the city</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> Nunca se combinan las dos marcas: <i>more cheaper</i> es incorrecto. «Que» en la comparación es <i>than</i>, no <i>that</i>; «de» tras superlativo es <i>in</i> / <i>of</i>.</div>`,
 q:['Bogotá is ___ than Cali.|more cold|colder|coldest|more colder|1|Una sílaba: -er.',
  'This is the ___ exam of the year.|difficultest|most difficult|more difficult|difficulter|1|Adjetivo largo: the most.',
  'My car is ___ than yours.|gooder|better|best|more good|1|good → better.',
  'It\'s the biggest city ___ the country.|of|in|than|that|1|Lugar tras superlativo: in.',
  'She is as tall ___ her brother.|than|as|that|like|1|Igualdad: as … as.',
  'Today is ___ than yesterday.|hoter|hotter|more hot|hottest|1|CVC: se duplica la t.',
  'This test is ___ than the last one.|easyer|easier|more easy|easiest|1|-y → -ier.',
  'That was the ___ film I\'ve ever seen.|worse|worst|baddest|most bad|1|bad → the worst.']},
{id:'en-a2-5',lvl:'A2',t:'El futuro: going to, will y present continuous',sub:'Verbo',h:5,pre:['en-a2-1'],
 ref:[bc('b1-b2/future-forms-will-be-going-present-continuous','Future forms'),te('a2')],
 teoria:`<table class="oe-table"><tr><th>Forma</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td><b>be going to</b></td><td>intención decidida antes; predicción con evidencia</td><td>I'm going to study medicine. · Look at those clouds — it's going to rain.</td></tr>
<tr><td><b>will</b></td><td>decisión en el momento; promesa; predicción por opinión</td><td>I'll help you. · I think she'll win.</td></tr>
<tr><td><b>present continuous</b></td><td>plan acordado con fecha</td><td>We're meeting the director on Monday.</td></tr>
<tr><td><b>present simple</b></td><td>horarios oficiales</td><td>The train leaves at 6.</td></tr></table>
<p>Tras <i>when, as soon as, before, after, until</i> se usa el presente, no <i>will</i>: <i>I'll call you <b>when</b> I <b>arrive</b></i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El presente español con valor futuro (<i>mañana voy</i>) solo equivale al continuo de planes. No se dice <i>when I will arrive</i>.</div>`,
 q:['— The phone is ringing. — I ___ it.|am going to answer|\'ll answer|answer|am answering|1|Decisión en el momento: will.',
  'Look at the sky! It ___ rain.|will|is going to|rains|is raining to|1|Predicción con evidencia: going to.',
  'We ___ the dentist at 4 tomorrow. (cita concertada)|will see|are seeing|see|are going see|1|Plan con hora: present continuous.',
  'The flight ___ at 7.30. (horario)|is leaving to|leaves|will leaving|leave|1|Horario: present simple.',
  'I\'ll phone you when I ___ home.|will get|get|am going to get|got|1|Tras when, presente.',
  'I think Colombia ___ the match.|is winning|will win|wins|win|1|Predicción por opinión: will.',
  'She has decided: she ___ sell her car.|will|is going to|sells|is selling to|1|Intención previa: going to.',
  'I promise I ___ tell anyone.|won\'t|am not going|don\'t|not will|0|Promesa: will / won\'t.']},
{id:'en-a2-6',lvl:'A2',t:'Cuantificadores: some, any, much, many, a lot of',sub:'Sustantivo',h:3,pre:['en-a1-4'],
 ref:[bc('a1-a2/nouns-countable-uncountable','Countable and uncountable nouns'),te('a2')],
 teoria:`<table class="oe-table"><tr><th></th><th>Contables</th><th>Incontables</th></tr>
<tr><td>afirmativa</td><td>some / a lot of / many (formal)</td><td>some / a lot of</td></tr>
<tr><td>negativa y pregunta</td><td>any / many</td><td>any / much</td></tr>
<tr><td>cantidad pequeña</td><td>a few (algunos) · few (pocos)</td><td>a little (algo) · little (poco)</td></tr>
<tr><td>pregunta por cantidad</td><td>How many?</td><td>How much?</td></tr></table>
<p><b>Some</b> aparece en preguntas que ofrecen o piden algo: <i>Would you like <b>some</b> coffee?</i> <b>Any</b> en afirmativa significa «cualquiera»: <i>Take <b>any</b> seat.</i> <i>Too much / too many</i> = demasiado; <i>enough</i> = suficiente.</p>
<div class="xl-int"><b>Interferencia del español.</b> <i>Few</i> sin artículo es negativo («pocos»), <i>a few</i> es positivo («unos cuantos»). <i>People</i> es plural: <i>How many people</i>.</div>`,
 q:['How ___ money do you need?|many|much|lot|few|1|money es incontable.',
  'There aren\'t ___ apples left.|some|any|much|a little|1|Negativa con contable: any.',
  'Would you like ___ tea?|any|some|many|a few|1|Ofrecimiento: some.',
  'I have ___ friends in Lima, so I\'m not alone there.|few|a few|little|a little|1|Valor positivo: a few.',
  'How ___ people came to the party?|much|many|lot of|any|1|people es plural contable.',
  'We have ___ time; let\'s hurry.|a little|little|few|a few|1|Valor negativo con incontable: little.',
  'You can sit in ___ chair you like.|some|any|many|much|1|any = cualquiera.',
  'There are ___ cars in the city centre; traffic is terrible.|too much|too many|enough much|a little|1|Contable plural: too many.']},
/* ------------------------------ B1 ------------------------------ */
{id:'en-b1-1',lvl:'B1',t:'Present perfect: for, since, just, yet, already',sub:'Verbo',h:7,pre:['en-a2-2'],
 ref:[bc('b1-b2/present-perfect','Present perfect'),bc('b1-b2/present-perfect-just-yet-still-already','just, yet, still, already'),te('b1')],
 teoria:`<p>El <b>present perfect</b> (<i>have / has + participio</i>) une el pasado con el presente: experiencias sin fecha, resultados actuales y situaciones que <b>continúan</b>.</p>
<table class="oe-table"><tr><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>experiencia (ever / never)</td><td>Have you <b>ever been</b> to Peru?</td></tr>
<tr><td>resultado presente</td><td>I'<b>ve lost</b> my keys (y no las tengo).</td></tr>
<tr><td>duración hasta ahora</td><td>She <b>has lived</b> here <b>for</b> ten years / <b>since</b> 2016.</td></tr>
<tr><td>just · already · yet</td><td>I've <b>just</b> eaten. · He's <b>already</b> left. · Have you finished <b>yet</b>?</td></tr></table>
<p><b>For</b> + periodo (<i>for two hours</i>); <b>since</b> + punto de partida (<i>since Monday</i>). <i>Been</i> (ido y vuelto) frente a <i>gone</i> (sigue allí).</p>
<div class="xl-int"><b>Interferencia del español.</b> «Vivo aquí desde hace diez años» se dice con perfect: <i>I <b>have lived</b> here for ten years</i>, nunca <i>I live here since</i>.</div>`,
 q:['I ___ here since 2018.|live|have lived|lived|am living since|1|Duración hasta ahora: present perfect.',
  'She has worked here ___ five years.|since|for|during|from|1|Periodo: for.',
  'Have you finished your homework ___?|already|yet|just|still|1|Pregunta: yet al final.',
  '___ you ever ___ sushi?|Did / eat|Have / eaten|Have / ate|Do / eat|1|Experiencia: have + participio.',
  'Tom isn\'t here. He has ___ to the bank.|been|gone|went|go|1|Sigue allí: gone.',
  'I have ___ had lunch; I\'m not hungry.|yet|just|since|ever|1|Acción muy reciente: just.',
  'They\'ve known each other ___ they were children.|for|since|from|ago|1|Punto de partida: since.',
  'I\'ve lost my wallet. This means…|I lost it and found it.|I don\'t have it now.|I will lose it.|I never had it.|1|Resultado presente.']},
{id:'en-b1-2',lvl:'B1',t:'Present perfect frente a past simple',sub:'Verbo',h:6,pre:['en-b1-1'],
 ref:[bc('b1-b2/present-perfect','Present perfect'),bc('b1-b2/present-perfect-simple-continuous','Present perfect simple and continuous'),te('b1')],
 teoria:`<p>La frontera es la <b>referencia temporal</b>: si el periodo está cerrado o se nombra un momento pasado, va en <b>past simple</b>; si el periodo sigue abierto o no se precisa, en <b>present perfect</b>.</p>
<table class="oe-table"><tr><th>Past simple</th><th>Present perfect</th></tr>
<tr><td>I <b>saw</b> her <b>yesterday</b>.</td><td>I'<b>ve seen</b> her <b>this week</b> (la semana no ha terminado).</td></tr>
<tr><td>Shakespeare <b>wrote</b> 39 plays.</td><td>She <b>has written</b> three novels (sigue escribiendo).</td></tr>
<tr><td>When <b>did</b> you <b>arrive</b>?</td><td><i>When</i> pide siempre past simple.</td></tr></table>
<p>El <b>present perfect continuous</b> (<i>have been + -ing</i>) subraya la actividad y su duración: <i>I've <b>been waiting</b> for an hour</i>; el simple, el resultado: <i>I've <b>written</b> four emails</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> En Hispanoamérica se prefiere el indefinido («hoy comí») donde el inglés británico pide perfect (<i>I've eaten today</i>). Nunca se combina el perfect con <i>yesterday, ago, last</i> o <i>in 2015</i>.</div>`,
 q:['I ___ him last Monday.|have seen|saw|have saw|see|1|Momento pasado definido: past simple.',
  '___ did you move to Bogotá?|When|How long|Since when have|For how long have|0|When exige past simple.',
  'She ___ three books so far.|wrote|has written|writes|had wrote|1|Periodo abierto (so far): perfect.',
  'I ___ for an hour! Where were you?|wait|have been waiting|waited for|am waiting since|1|Duración de la actividad: perfect continuous.',
  'Picasso ___ many paintings.|has painted|painted|has been painting|paints|1|Autor fallecido, periodo cerrado.',
  'We ___ to Mexico in 2019.|have gone|went|have been|go|1|Fecha concreta: past simple.',
  'How many coffees ___ today?|did you have|have you had|you had|you have had|1|Hoy no ha terminado (inglés británico): perfect.',
  'Your hands are dirty! What ___?|did you do|have you been doing|you did|are you done|1|Resultado visible de una actividad reciente.']},
{id:'en-b1-3',lvl:'B1',t:'Modales de obligación, permiso y consejo',sub:'Verbo',h:5,pre:['en-a1-3'],
 ref:[bc('b1-b2/modals-permission-obligation','Modals: permission and obligation'),te('b1')],
 teoria:`<p>Los modales no llevan -s, no usan <i>do</i> y van seguidos de infinitivo sin <i>to</i> (salvo <i>have to</i> y <i>ought to</i>).</p>
<table class="oe-table"><tr><th>Valor</th><th>Formas</th><th>Ejemplo</th></tr>
<tr><td>obligación del hablante / norma escrita</td><td>must</td><td>You <b>must</b> wear a helmet.</td></tr>
<tr><td>obligación externa</td><td>have to</td><td>I <b>have to</b> work on Saturdays.</td></tr>
<tr><td>prohibición</td><td>mustn't / can't</td><td>You <b>mustn't</b> smoke here.</td></tr>
<tr><td>ausencia de obligación</td><td>don't have to / needn't</td><td>You <b>don't have to</b> come.</td></tr>
<tr><td>consejo</td><td>should / ought to</td><td>You <b>should</b> rest.</td></tr>
<tr><td>permiso</td><td>can / could / may</td><td><b>Could</b> I open the window?</td></tr></table>
<p><i>Must</i> no tiene pasado: se usa <i>had to</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> <i>Mustn't</i> (prohibido) y <i>don't have to</i> (no hace falta) no son sinónimos, aunque ambos se traduzcan a veces por «no tener que».</div>`,
 q:['You ___ smoke in the hospital. It\'s forbidden.|don\'t have to|mustn\'t|needn\'t|shouldn\'t to|1|Prohibición: mustn\'t.',
  'Tomorrow is Sunday, so I ___ get up early.|mustn\'t|don\'t have to|can\'t|must|1|Ausencia de obligación.',
  'You look tired. You ___ go to bed.|should|must to|have|can to|0|Consejo: should.',
  'Yesterday I ___ stay late at the office.|must|had to|musted|should|1|Pasado de must: had to.',
  '___ I use your phone, please?|Must|Could|Should|Have|1|Permiso: could.',
  'She ___ wear a uniform at work.|has to|have to|must to|musts|0|Tercera persona: has to.',
  'You ought ___ apologise.|—|to|for|that|1|ought to lleva to.',
  'Choose the correct sentence.|He cans swim.|He can swim.|He can to swim.|He does can swim.|1|Los modales no llevan -s ni to.']},
{id:'en-b1-4',lvl:'B1',t:'Condicionales 0, 1 y 2',sub:'Oración compuesta',h:6,pre:['en-a2-5','en-a2-2'],
 ref:[bc('b1-b2/conditionals-zero-first-second','Conditionals: zero, first and second'),te('b1')],
 teoria:`<table class="oe-table"><tr><th>Tipo</th><th>Condición</th><th>Resultado</th><th>Valor</th></tr>
<tr><td>0</td><td>if + presente</td><td>presente</td><td>verdad general: If you heat ice, it <b>melts</b>.</td></tr>
<tr><td>1</td><td>if + presente</td><td>will + inf.</td><td>posible y real: If it <b>rains</b>, we'<b>ll stay</b> in.</td></tr>
<tr><td>2</td><td>if + past simple</td><td>would + inf.</td><td>hipotético o improbable: If I <b>won</b> the lottery, I'<b>d travel</b>.</td></tr></table>
<p>En el tipo 2, <i>were</i> es la forma recomendada para todas las personas en registro cuidado: <i>If I <b>were</b> you…</i> <i>Unless</i> = if … not. Cuando la condición va primero, se separa con coma.</p>
<div class="xl-int"><b>Interferencia del español.</b> Nunca <i>will</i> ni <i>would</i> tras <i>if</i>: <i>If I <b>had</b> time</i> (= si tuviera), no <i>if I would have time</i>. El pasado inglés del tipo 2 equivale al imperfecto de subjuntivo español.</div>`,
 q:['If it ___ tomorrow, we\'ll cancel the trip.|will rain|rains|rained|would rain|1|Tipo 1: if + presente.',
  'If I ___ rich, I would buy a farm.|am|were|will be|would be|1|Tipo 2: were.',
  'If you heat water to 100 °C, it ___.|would boil|boils|will boiling|boiled|1|Tipo 0: verdad general.',
  'I ___ you if I knew the answer.|will tell|would tell|told|tell|1|Tipo 2: would + inf.',
  '___ you study, you won\'t pass.|If|Unless|When|Except|1|unless = if not.',
  'If I were you, I ___ that job.|will accept|would accept|accepted|accept|1|Consejo con tipo 2.',
  'What would you do if you ___ a million dollars?|find|found|would find|will find|1|if + past simple.',
  'If she calls, I ___ you.|would tell|\'ll tell|told|tell|1|Tipo 1: will.']},
{id:'en-b1-5',lvl:'B1',t:'La voz pasiva (presente y pasado)',sub:'Verbo',h:5,pre:['en-a2-2'],
 ref:[bc('b1-b2/passives','Passives'),te('b1')],
 teoria:`<p>La pasiva (<i>be + participio</i>) pone el foco en la acción o en quien la recibe; el agente se introduce con <b>by</b> solo si es relevante.</p>
<table class="oe-table"><tr><th>Tiempo</th><th>Activa</th><th>Pasiva</th></tr>
<tr><td>present simple</td><td>They make cars here.</td><td>Cars <b>are made</b> here.</td></tr>
<tr><td>past simple</td><td>Someone stole my bike.</td><td>My bike <b>was stolen</b>.</td></tr>
<tr><td>present perfect</td><td>They have opened a new road.</td><td>A new road <b>has been opened</b>.</td></tr>
<tr><td>modal</td><td>You must sign it.</td><td>It <b>must be signed</b>.</td></tr></table>
<p>Con verbos de dos objetos, lo habitual es que la persona sea sujeto: <i><b>I was given</b> a prize</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> Donde el español usa «se» impersonal o pasivo (<i>se habla inglés, se construyó en 1900</i>), el inglés usa la pasiva: <i>English <b>is spoken</b>; it <b>was built</b> in 1900</i>.</div>`,
 q:['Spanish ___ in many countries.|speaks|is spoken|is speaking|spoken|1|Pasiva de presente.',
  'The bridge ___ in 1950.|built|was built|is built|has built|1|Pasiva de pasado.',
  'My wallet ___! (ahora no lo tengo)|has been stolen|has stolen|was stealing|is stole|0|Present perfect pasivo.',
  'The documents must ___ today.|sign|be signed|signed|being signed|1|modal + be + participio.',
  '"Don Quixote" was written ___ Cervantes.|from|by|of|with|1|Agente: by.',
  'I ___ a scholarship last year.|gave|was given|was give|have given|1|La persona como sujeto pasivo.',
  'Choose the passive: "They clean the offices every day."|The offices clean every day.|The offices are cleaned every day.|The offices were cleaned every day.|The offices is cleaned every day.|1|Presente pasivo en plural.',
  'Where ___ these phones made?|is|are|do|have|1|phones es plural: are.']},
{id:'en-b1-6',lvl:'B1',t:'Gerundio o infinitivo',sub:'Verbo',h:5,pre:['en-a2-1'],
 ref:[bc('a1-a2/verbs-followed-ing-or-infinitive','Verbs followed by -ing or infinitive'),bc('b1-b2/verbs-followed-ing-or-infinitive-change-meaning','Changes in meaning'),te('b1')],
 teoria:`<table class="oe-table"><tr><th>Tras…</th><th>Forma</th><th>Ejemplo</th></tr>
<tr><td>enjoy, mind, avoid, finish, suggest, keep, consider</td><td>-ing</td><td>I <b>enjoy reading</b>.</td></tr>
<tr><td>want, decide, hope, plan, agree, refuse, promise</td><td>to + inf.</td><td>She <b>decided to leave</b>.</td></tr>
<tr><td>toda preposición</td><td>-ing</td><td>I'm good <b>at cooking</b>. · Thanks <b>for coming</b>.</td></tr>
<tr><td>finalidad</td><td>to + inf.</td><td>I went out <b>to buy</b> bread.</td></tr></table>
<p>Cambio de significado: <i>I <b>stopped smoking</b></i> (dejé de fumar) / <i>I <b>stopped to smoke</b></i> (me detuve para fumar); <i>remember doing</i> (recordar algo pasado) / <i>remember to do</i> (acordarse de hacer). <i>Look forward to</i> lleva -ing porque <i>to</i> es preposición.</p>
<div class="xl-int"><b>Interferencia del español.</b> El sujeto de una oración puede ser un gerundio: <i><b>Swimming</b> is healthy</i> («nadar es sano»). La finalidad no se expresa con <i>for</i> + verbo: <i>to buy</i>, no <i>for buy</i>.</div>`,
 q:['I enjoy ___ novels.|to read|reading|read|for reading|1|enjoy + -ing.',
  'They decided ___ a house.|buying|to buy|buy|for buy|1|decide + to.',
  'I\'m looking forward to ___ you.|see|seeing|to see|saw|1|to es preposición: -ing.',
  'He went to the shop ___ milk.|for buy|to buy|buying|for buying|1|Finalidad: to + inf.',
  '___ is good exercise.|Swim|Swimming|To swimming|Swims|1|Gerundio como sujeto.',
  'Remember ___ the door when you leave!|locking|to lock|lock|locked|1|Acordarse de hacer: to + inf.',
  'She stopped ___ because it was bad for her health.|to smoke|smoking|smoke|smoked|1|Dejar de: -ing.',
  'Would you mind ___ the window?|to open|opening|open|opened|1|mind + -ing.']},
/* ------------------------------ B2 ------------------------------ */
{id:'en-b2-1',lvl:'B2',t:'Past perfect y secuencia narrativa',sub:'Verbo',h:5,pre:['en-a2-3','en-b1-2'],
 ref:[bc('b1-b2/past-perfect','Past perfect'),te('b2')],
 teoria:`<p>El <b>past perfect</b> (<i>had + participio</i>) sitúa una acción <b>antes</b> de otra pasada. Es imprescindible cuando el orden del relato no coincide con el orden de los hechos.</p>
<table class="oe-table"><tr><th>Ejemplo</th><th>Lectura</th></tr>
<tr><td>When I arrived, the train <b>left</b>.</td><td>Llegué y entonces salió.</td></tr>
<tr><td>When I arrived, the train <b>had left</b>.</td><td>Ya había salido.</td></tr>
<tr><td>She <b>had been working</b> there for years before she was promoted.</td><td>Duración previa (continuo).</td></tr></table>
<p>Marcadores: <i>by the time, already, before, after, never … before, it was the first time</i>. En la narración, cuatro tiempos trabajan juntos: past simple (hechos), past continuous (escenario), past perfect (antecedentes) y past perfect continuous (duración previa).</p>
<div class="xl-int"><b>Interferencia del español.</b> Corresponde al pluscuamperfecto («había salido»), pero el inglés no lo usa con <i>after</i> cuando el orden ya es evidente: <i>After he <b>left</b>, I cried</i> es correcto.</div>`,
 q:['When we got to the cinema, the film ___.|already started|had already started|has already started|was already start|1|Anterioridad: past perfect.',
  'By the time she called, I ___ to bed.|went|had gone|have gone|was going|1|by the time: past perfect.',
  'It was the first time I ___ snow.|saw|had seen|have seen|see|1|It was the first time + past perfect.',
  'They ___ for two hours when the bus finally came.|waited|had been waiting|have been waiting|were waited|1|Duración previa: past perfect continuous.',
  'I didn\'t recognise him because he ___ a beard.|grew|had grown|has grown|grows|1|Antecedente del hecho pasado.',
  'After she ___ the letter, she burned it.|had read|has read|reads|was reading|0|Ambas son correctas en inglés real; la secuencia más explícita es had read.',
  'He told me he ___ never ___ to Asia before.|has / been|had / been|was / been|did / go|1|never … before en el pasado.',
  'Choose the background action.|I had lived|I lived|I was walking home|I walk|2|Escenario: past continuous.']},
{id:'en-b2-2',lvl:'B2',t:'Tercer condicional y condicionales mixtos',sub:'Oración compuesta',h:5,pre:['en-b1-4','en-b2-1'],
 ref:[bc('b1-b2/conditionals-third-mixed','Third and mixed conditionals'),te('b2')],
 teoria:`<p>El <b>tercer condicional</b> imagina un pasado distinto: <i>if + past perfect, would have + participio</i>. <i>If I <b>had studied</b>, I <b>would have passed</b>.</i></p>
<table class="oe-table"><tr><th>Mixto</th><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>pasado → presente</td><td>if + past perfect, would + inf.</td><td>If I <b>had taken</b> that job, I <b>would be</b> rich now.</td></tr>
<tr><td>presente → pasado</td><td>if + past simple, would have + part.</td><td>If I <b>were</b> braver, I <b>would have spoken</b> up.</td></tr></table>
<p>Variantes: <i>could have, might have</i>; inversión formal sin <i>if</i>: <i><b>Had I known</b>, I would have helped.</i> Se contraen: <i>I'd have</i> = I would have; <i>If I'd known</i> = If I had known.</p>
<div class="xl-int"><b>Interferencia del español.</b> «Si hubiera sabido, habría venido»: nunca <i>would have</i> en la condición (<i>if I would have known</i> es un error frecuente también entre nativos y se penaliza en exámenes).</div>`,
 q:['If I ___ earlier, I wouldn\'t have missed the bus.|left|had left|would leave|have left|1|Tercer condicional: if + past perfect.',
  'If she had asked me, I ___ her.|would help|would have helped|had helped|will help|1|would have + participio.',
  'If I had studied medicine, I ___ a doctor now.|would have been|would be|was|am|1|Mixto: resultado presente.',
  '___ I known, I would have called you.|If|Had|Have|Did|1|Inversión formal: Had I known.',
  'We might have won if we ___ harder.|trained|had trained|would train|have trained|1|Condición irreal pasada.',
  'If he weren\'t so shy, he ___ to her at the party.|would speak|would have spoken|spoke|had spoken|1|Mixto: rasgo presente, resultado pasado.',
  'In "If I\'d known", \'d means…|would|had|did|could|1|En la condición, \'d = had.',
  'If they ___ the map, they wouldn\'t be lost now.|took|had taken|would take|take|1|Pasado → presente.']},
{id:'en-b2-3',lvl:'B2',t:'Estilo indirecto',sub:'Discurso',h:6,pre:['en-b2-1'],
 ref:[bc('b1-b2/reported-speech-statements','Reported speech: statements'),bc('b1-b2/reported-speech-questions','Reported speech: questions'),bc('b1-b2/reported-speech-reporting-verbs','Reporting verbs')],
 teoria:`<p>Con verbo introductor en pasado, los tiempos suelen <b>retroceder</b> un paso (<i>backshift</i>) y cambian pronombres y deícticos.</p>
<table class="oe-table"><tr><th>Directo</th><th>Indirecto</th></tr>
<tr><td>"I <b>am</b> tired."</td><td>She said (that) she <b>was</b> tired.</td></tr>
<tr><td>"I <b>saw</b> it <b>yesterday</b>."</td><td>He said he <b>had seen</b> it <b>the day before</b>.</td></tr>
<tr><td>"I <b>will</b> call <b>tomorrow</b>."</td><td>She said she <b>would</b> call <b>the next day</b>.</td></tr>
<tr><td>"Where <b>do</b> you live?"</td><td>He asked me where I <b>lived</b>.</td></tr>
<tr><td>"<b>Are</b> you coming?"</td><td>She asked <b>if / whether</b> I was coming.</td></tr></table>
<p><b>Say</b> no lleva objeto de persona; <b>tell</b> sí: <i>She <b>told me</b> / She <b>said</b> (to me)</i>. Las preguntas indirectas tienen orden de afirmativa, sin <i>do</i>. Verbos introductores: <i>advise, warn, remind + objeto + to; suggest + -ing; deny + -ing</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> <i>He asked me where <b>did I live</b></i> es el error típico: no hay inversión. <i>Suggest</i> no admite <i>to</i>: <i>He suggested going</i>.</div>`,
 q:['"I\'m busy," she said. → She said she ___ busy.|is|was|has been|will be|1|Backshift: am → was.',
  'He ___ me that he was leaving.|said|told|asked|spoke|1|tell + persona.',
  '"Where do you work?" → She asked me where ___.|do I work|I worked|did I work|I work did|1|Sin inversión y con backshift.',
  '"Will you help me?" → He asked ___ I would help him.|that|if|what|do|1|Preguntas sí/no: if / whether.',
  '"I bought it yesterday." → She said she had bought it ___.|yesterday|the day before|tomorrow|the next day|1|yesterday → the day before.',
  'The doctor advised me ___ more water.|drink|to drink|drinking|that drink|1|advise + objeto + to.',
  'She suggested ___ a taxi.|to take|taking|take|that take|1|suggest + -ing.',
  'He denied ___ the money.|to steal|stealing|steal|that steal|1|deny + -ing.']},
{id:'en-b2-4',lvl:'B2',t:'Oraciones de relativo',sub:'Oración compuesta',h:5,pre:['en-b1-5'],
 ref:[bc('b1-b2/relative-clauses-defining-relative-clauses','Defining relative clauses'),bc('b1-b2/relative-clauses-non-defining-relative-clauses','Non-defining relative clauses')],
 teoria:`<table class="oe-table"><tr><th>Pronombre</th><th>Antecedente</th><th>Ejemplo</th></tr>
<tr><td>who</td><td>personas</td><td>The woman <b>who</b> called…</td></tr>
<tr><td>which</td><td>cosas</td><td>The car <b>which</b> I bought…</td></tr>
<tr><td>that</td><td>personas o cosas (solo especificativas)</td><td>The book <b>that</b> you lent me…</td></tr>
<tr><td>whose</td><td>posesión</td><td>The man <b>whose</b> dog bit me…</td></tr>
<tr><td>where / when</td><td>lugar / tiempo</td><td>The town <b>where</b> I grew up…</td></tr></table>
<p><b>Especificativas</b> (sin comas): identifican; el relativo objeto puede omitirse: <i>The film (that) we saw</i>. <b>Explicativas</b> (con comas): añaden información; no admiten <i>that</i> ni omisión: <i>My brother, <b>who</b> lives in Quito, is a nurse.</i> <i>Which</i> puede referirse a toda la oración: <i>He arrived late, <b>which</b> annoyed everyone.</i></p>
<div class="xl-int"><b>Interferencia del español.</b> La preposición puede ir al final: <i>the man I spoke <b>to</b></i> («con quien hablé»). No se repite el pronombre: <i>the book that I read <s>it</s></i>.</div>`,
 q:['The man ___ lives next door is a pilot.|which|who|whose|where|1|Persona: who.',
  'That\'s the restaurant ___ we had our first date.|which|where|when|who|1|Lugar: where.',
  'My sister, ___ works in Madrid, is visiting us.|that|who|which|whom that|1|Explicativa: no admite that.',
  'The student ___ phone rang had to leave.|who|whose|which|that\'s|1|Posesión: whose.',
  'Which sentence omits the relative correctly?|The man lives here is old.|The film we watched was great.|The book is on the table is mine.|The woman called is my aunt.|1|Solo se omite el relativo objeto.',
  'He didn\'t call, ___ made me angry.|that|which|what|who|1|which retoma toda la oración.',
  'This is the person I told you ___.|it|about|him|whom|1|Preposición al final.',
  'I remember the day ___ we met.|which|when|where|whose|1|Tiempo: when.']},
{id:'en-b2-5',lvl:'B2',t:'Modales de deducción',sub:'Verbo',h:5,pre:['en-b1-3','en-b1-1'],
 ref:[bc('b1-b2/modals-deductions-about-present','Deductions about the present'),bc('b1-b2/modals-deductions-about-past','Deductions about the past')],
 teoria:`<table class="oe-table"><tr><th>Certeza</th><th>Presente</th><th>Pasado</th></tr>
<tr><td>casi segura (sí)</td><td>She <b>must be</b> at home.</td><td>She <b>must have left</b>.</td></tr>
<tr><td>posible</td><td>He <b>might / may / could be</b> ill.</td><td>He <b>might have missed</b> the bus.</td></tr>
<tr><td>casi segura (no)</td><td>It <b>can't be</b> true.</td><td>They <b>can't / couldn't have seen</b> us.</td></tr></table>
<p>Para el pasado se usa <b>modal + have + participio</b>. Ojo: el contrario de <i>must</i> en deducción es <i>can't</i>, no <i>mustn't</i>. Para crítica del pasado: <i>You <b>should have told</b> me</i> («deberías habérmelo dicho»).</p>
<div class="xl-int"><b>Interferencia del español.</b> «Debe de estar en casa» = <i>must be</i>; «no puede ser» = <i>can't be</i>. No existe <i>must to</i>.</div>`,
 q:['The lights are on. They ___ be at home.|can\'t|must|mustn\'t|should to|1|Deducción afirmativa: must.',
  'That ___ be Ana; she\'s in Paris this week.|must|can\'t|mustn\'t|should|1|Deducción negativa: can\'t.',
  'He\'s very late. He ___ missed the train.|must|might have|can\'t|might|1|Posibilidad en el pasado: might have.',
  'The road is wet. It ___ rained.|must have|must|can\'t have|should|0|Deducción pasada: must have.',
  'You ___ told me! I would have helped.|must have|should have|can\'t have|might|1|Reproche: should have.',
  'She ___ have seen us; she was asleep.|must|can\'t|should|might|1|Imposible en el pasado: can\'t have.',
  'Where\'s my phone? I ___ have left it in the taxi.|can|might|mustn\'t|should to|1|Posibilidad: might have.',
  'The opposite of "must be" (deduction) is…|mustn\'t be|can\'t be|don\'t have to be|needn\'t be|1|can\'t be.']},
{id:'en-b2-6',lvl:'B2',t:'Wish e if only',sub:'Oración compuesta',h:4,pre:['en-b2-2'],
 ref:[bc('b1-b2/wishes-wish-if-only','Wishes: wish and if only'),te('b2')],
 teoria:`<table class="oe-table"><tr><th>Deseo sobre…</th><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>el presente</td><td>wish + past simple</td><td>I wish I <b>had</b> more time.</td></tr>
<tr><td>el pasado (lamento)</td><td>wish + past perfect</td><td>I wish I <b>hadn't said</b> that.</td></tr>
<tr><td>una conducta ajena que molesta</td><td>wish + would</td><td>I wish you <b>would stop</b> shouting.</td></tr></table>
<p><i>If only</i> es más enfático: <i><b>If only</b> I had listened!</i> Con <i>be</i> se prefiere <i>were</i> en registro cuidado: <i>I wish I <b>were</b> taller</i>. No se usa <i>wish + would</i> con el propio sujeto: <i>I wish I <s>would</s> could swim</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> «Ojalá tuviera» = <i>I wish I had</i>; «ojalá hubiera» = <i>I wish I had had</i>. Para deseos futuros posibles se usa <i>hope</i>: <i>I <b>hope</b> you pass</i>.</div>`,
 q:['I wish I ___ a car (no tengo).|have|had|would have|will have|1|Presente: wish + past.',
  'I wish I ___ to the party yesterday.|went|had gone|would go|go|1|Pasado: wish + past perfect.',
  'I wish my neighbours ___ so much noise.|didn\'t make|wouldn\'t make|don\'t make|won\'t make|1|Conducta ajena molesta: would.',
  'If only I ___ his advice!|took|had taken|would take|take|1|Lamento pasado.',
  'I ___ you pass your exam tomorrow.|wish|hope|would|if only|1|Deseo futuro posible: hope.',
  'I wish I ___ taller.|am|were|would be|will be|1|Registro cuidado: were.',
  'She wishes she ___ speak German.|would|could|can|will|1|Habilidad propia: could.',
  'I wish it ___ raining. (molestia)|stops|would stop|stopped to|will stop|1|wish + would para algo que se quiere que cambie.']},
/* ------------------------------ C1 ------------------------------ */
{id:'en-c1-1',lvl:'C1',t:'Inversión tras adverbios negativos',sub:'Énfasis',h:5,pre:['en-b2-2'],
 ref:[bc('c1/inversion-after-negative-adverbials','Inversion after negative adverbials'),bc('c1/inversion-conditionals','Inversion in conditionals'),te('c1')],
 teoria:`<p>En registro formal, un adverbial negativo o restrictivo al inicio provoca <b>inversión</b> sujeto–auxiliar, como en una pregunta.</p>
<table class="oe-table"><tr><th>Adverbial</th><th>Ejemplo</th></tr>
<tr><td>Never / Rarely / Seldom</td><td><b>Never have I seen</b> such chaos.</td></tr>
<tr><td>Not only … but also</td><td><b>Not only did she win</b>, but she also broke the record.</td></tr>
<tr><td>No sooner … than / Hardly … when</td><td><b>No sooner had we sat</b> down <b>than</b> the lights went out.</td></tr>
<tr><td>Only then / Only after / Only when</td><td><b>Only then did I realise</b> the truth.</td></tr>
<tr><td>Under no circumstances / On no account</td><td><b>Under no circumstances should you</b> open it.</td></tr>
<tr><td>Little</td><td><b>Little did they know</b> what was coming.</td></tr></table>
<p>Sin auxiliar previo se introduce <i>do / does / did</i>. Con <i>only when / only after</i>, la inversión va en la oración principal: <i>Only when he left <b>did I</b> relax.</i></p>
<div class="xl-int"><b>Interferencia del español.</b> El español no exige inversión gramatical; en inglés, <i>Never I have seen</i> es agramatical.</div>`,
 q:['Never ___ such a beautiful view.|I have seen|have I seen|I saw|did I saw|1|Inversión: have I seen.',
  'Not only ___ late, but he also forgot the tickets.|he was|was he|he did be|did he was|1|Inversión con be: was he.',
  'No sooner had we arrived ___ it started to rain.|when|than|that|then|1|No sooner … than.',
  'Only after the meeting ___ the problem.|I understood|did I understand|I did understand|understood I|1|Inversión en la principal.',
  'Under no circumstances ___ the door.|you should open|should you open|you open|open you|1|Inversión con modal.',
  'Little ___ that she was a famous writer.|we knew|did we know|knew we|we did know|1|Little + did.',
  'Hardly had I closed my eyes ___ the phone rang.|than|when|that|so|1|Hardly … when.',
  '___ I known about the strike, I would have walked.|If|Had|Did|Should|1|Inversión condicional.']},
{id:'en-c1-2',lvl:'C1',t:'Oraciones escindidas (cleft sentences)',sub:'Énfasis',h:4,pre:['en-b2-4'],
 ref:[bc('c1/emphasis-cleft-sentences-inversion-auxiliaries','Emphasis: cleft sentences'),te('c1')],
 teoria:`<p>Las <b>oraciones escindidas</b> dividen el mensaje en dos para focalizar un elemento.</p>
<table class="oe-table"><tr><th>Tipo</th><th>Ejemplo</th><th>Foco</th></tr>
<tr><td>It-cleft</td><td><b>It was</b> Ana <b>who</b> solved it.</td><td>la persona</td></tr>
<tr><td>It-cleft</td><td><b>It's</b> the price <b>that</b> worries me.</td><td>la causa</td></tr>
<tr><td>Wh-cleft</td><td><b>What</b> I need <b>is</b> a holiday.</td><td>lo que se necesita</td></tr>
<tr><td>Wh-cleft con do</td><td><b>What</b> she did <b>was</b> (to) call the police.</td><td>la acción</td></tr>
<tr><td>All-cleft</td><td><b>All</b> I want <b>is</b> some peace.</td><td>lo único</td></tr>
<tr><td>Reason / place</td><td><b>The reason why</b> I left <b>was</b> the noise.</td><td>la razón</td></tr></table>
<p>El verbo <i>be</i> de la escindida concuerda normalmente en singular: <i>What we need <b>is</b> more volunteers</i> (también se oye <i>are</i>).</p>
<div class="xl-int"><b>Interferencia del español.</b> Equivale a «Fue Ana quien…», «Lo que necesito es…»; en inglés el sujeto <i>it</i> o <i>what</i> es obligatorio: no <i>Was Ana who</i>.</div>`,
 q:['___ was my brother who broke the window.|He|It|What|This|1|It-cleft.',
  '___ I need is a long holiday.|That|What|Which|It|1|Wh-cleft: what.',
  'What she did ___ resign immediately.|is|was|did|had|1|What she did was (to) + inf.',
  '___ I want is to sleep.|All|Every|Only|Just that|0|All-cleft: lo único.',
  'It was in 1999 ___ they got married.|when|that|which|where|1|It-cleft temporal: that (when también se oye).',
  'The reason ___ I called is to apologise.|because|why|for|which because|1|The reason why.',
  'It\'s not the money ___ matters, it\'s the time.|what|that|who|it|1|It-cleft: that.',
  'Which sentence focuses on the action?|It was Pedro who called.|What Pedro did was call the police.|Pedro called the police.|The police were called.|1|Wh-cleft con do.']},
{id:'en-c1-3',lvl:'C1',t:'Cláusulas de participio',sub:'Oración compuesta',h:5,pre:['en-b2-4','en-b1-5'],
 ref:[bc('c1/participle-clauses','Participle clauses'),te('c1')],
 teoria:`<p>Una <b>cláusula de participio</b> condensa una subordinada cuando comparte sujeto con la principal. Es típica del inglés escrito.</p>
<table class="oe-table"><tr><th>Forma</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>-ing</td><td>simultaneidad, causa, resultado</td><td><b>Feeling</b> tired, she went to bed.</td></tr>
<tr><td>having + participio</td><td>anterioridad</td><td><b>Having finished</b> the report, he left.</td></tr>
<tr><td>participio pasado</td><td>sentido pasivo</td><td><b>Built</b> in 1890, the bridge is still in use.</td></tr>
<tr><td>reducida de relativo</td><td>especificativa</td><td>People <b>living</b> near the river… · The car <b>stolen</b> yesterday…</td></tr></table>
<p>Error clásico: el <b>participio colgante</b> (<i>dangling participle</i>), cuyo sujeto implícito no coincide con el de la principal: <i><s>Walking home, the rain started.</s></i> → <i>Walking home, <b>I</b> got caught in the rain.</i></p>
<div class="xl-int"><b>Interferencia del español.</b> Se parece al gerundio y al participio absoluto españoles («Terminado el informe, se fue»), pero el inglés vigila mucho más la identidad de sujetos.</div>`,
 q:['___ the email, she closed her laptop.|Having sent|Sent|Having been sent|To send|0|Anterioridad: having + participio.',
  '___ in 1605, the novel is still widely read.|Writing|Written|Having written|To write|1|Sentido pasivo: participio pasado.',
  '___ hungry, we stopped at a café.|Felt|Feeling|Having felt hungry being|To feel|1|Causa simultánea: -ing.',
  'Students ___ the exam must arrive at 8.|taken|taking|took|to taken|1|Relativa reducida activa.',
  'Which sentence has a dangling participle?|Opening the door, I saw a cat.|Opening the door, a cat ran out.|Having opened the door, I went in.|Opened in 2000, the shop is popular.|1|El sujeto implícito (yo) no coincide con a cat.',
  'The documents ___ yesterday are on your desk.|signing|signed|having signing|sign|1|Relativa reducida pasiva.',
  '___ by the noise, the baby started crying.|Waking|Woken|Having woke|Wake|1|Sentido pasivo.',
  'Not ___ what to say, he remained silent.|knew|knowing|known|to know|1|Causa: not + -ing.']},
{id:'en-c1-4',lvl:'C1',t:'Pasiva avanzada y have something done',sub:'Verbo',h:5,pre:['en-b1-5'],
 ref:[bc('c1/advanced-passives-review','Advanced passives'),te('c1')],
 teoria:`<table class="oe-table"><tr><th>Estructura</th><th>Ejemplo</th><th>Uso</th></tr>
<tr><td>It is said / believed / thought that…</td><td><b>It is believed that</b> the painting is a fake.</td><td>opinión impersonal</td></tr>
<tr><td>Sujeto + is said to + inf.</td><td>The painting <b>is believed to be</b> a fake.</td><td>ídem, más compacta</td></tr>
<tr><td>… to have + participio</td><td>He <b>is thought to have left</b> the country.</td><td>referencia al pasado</td></tr>
<tr><td>have / get something done</td><td>I <b>had my car repaired</b>.</td><td>servicio encargado</td></tr>
<tr><td>pasiva de infinitivo y gerundio</td><td>I hate <b>being interrupted</b>. · She expects <b>to be promoted</b>.</td><td></td></tr></table>
<p><i>Have something done</i> también expresa algo desagradable que nos sucede: <i>She <b>had her bag stolen</b>.</i> <i>Get</i> es más coloquial.</p>
<div class="xl-int"><b>Interferencia del español.</b> «Me corté el pelo» suele significar que lo cortó otra persona: <i>I <b>had</b> my hair <b>cut</b></i>, no <i>I cut my hair</i>.</div>`,
 q:['It ___ that the minister will resign.|says|is said|is saying|said to|1|Pasiva impersonal: it is said.',
  'The suspect is believed ___ the country last week.|to leave|to have left|leaving|having leave|1|Referencia pasada: to have + participio.',
  'I ___ my house painted last month.|did|had|made|was|1|have something done.',
  'She had her phone ___ on the bus.|steal|stolen|stealing|stole|1|Participio pasado.',
  'I hate ___ what to do.|telling|being told|be told|to telling|1|Gerundio pasivo.',
  'He expects ___ next year.|to promote|to be promoted|being promote|promoted|1|Infinitivo pasivo.',
  'The company is reported ___ record profits.|to make|to be making|having make|make|1|Acción en curso: to be + -ing.',
  'We need to get the roof ___.|repair|repaired|repairing|to repair|1|get something done.']},
{id:'en-c1-5',lvl:'C1',t:'Tiempo irreal: it\'s time, would rather, as if',sub:'Verbo',h:4,pre:['en-b2-6'],
 ref:[bc('c1/unreal-time','Unreal time'),te('c1')],
 teoria:`<p>Varias estructuras usan el <b>pasado con valor irreal</b> (no temporal), igual que <i>wish</i> y el segundo condicional.</p>
<table class="oe-table"><tr><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>It's (high / about) time + sujeto + past</td><td><b>It's time</b> we <b>left</b>.</td></tr>
<tr><td>would rather + sujeto + past</td><td>I'd rather you <b>didn't smoke</b> here.</td></tr>
<tr><td>would rather + inf. (mismo sujeto)</td><td>I'd rather <b>stay</b> at home.</td></tr>
<tr><td>as if / as though + past</td><td>He talks <b>as if</b> he <b>knew</b> everything.</td></tr>
<tr><td>suppose / imagine + past</td><td><b>Suppose</b> you <b>lost</b> your job…</td></tr></table>
<p>Para lo irreal en el pasado se usa el past perfect: <i>I'd rather you <b>hadn't told</b> her</i>; <i>She looked as if she <b>had seen</b> a ghost</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> Corresponde al imperfecto de subjuntivo: «ya es hora de que nos fuéramos», «como si supiera». No se usa el presente: <i>It's time we <s>go</s></i>.</div>`,
 q:['It\'s high time you ___ a job.|find|found|will find|finding|1|it\'s time + past.',
  'I\'d rather you ___ tell anyone.|don\'t|didn\'t|won\'t|not|1|would rather + otro sujeto + past.',
  'I\'d rather ___ at home tonight.|stayed|stay|to stay|staying|1|Mismo sujeto: infinitivo sin to.',
  'He behaves as if he ___ the boss.|is being|were|will be|be|1|as if + past irreal.',
  'She looked as though she ___ a ghost.|saw|had seen|has seen|sees|1|Anterioridad irreal: past perfect.',
  'I\'d rather you ___ me earlier. (pasado)|told|had told|tell|would tell|1|Irreal pasado.',
  'Suppose you ___ the lottery. What would you do?|win|won|will win|winning|1|suppose + past.',
  'It\'s about time the government ___ something.|does|did|do|will do|1|it\'s about time + past.']},
{id:'en-c1-6',lvl:'C1',t:'Elipsis y sustitución',sub:'Discurso',h:4,pre:['en-b2-3'],
 ref:[bc('c1/ellipsis','Ellipsis'),bc('c1/avoiding-repetition-text','Avoiding repetition')],
 teoria:`<p>El inglés evita repetir con dos recursos: <b>sustituir</b> (<i>one, so, do, do so</i>) u <b>omitir</b> lo recuperable (elipsis).</p>
<table class="oe-table"><tr><th>Recurso</th><th>Ejemplo</th></tr>
<tr><td>one / ones</td><td>I like the red shirt, not the blue <b>one</b>.</td></tr>
<tr><td>so / not tras think, hope, expect</td><td>— Will it rain? — I hope <b>not</b>. / I think <b>so</b>.</td></tr>
<tr><td>auxiliar en lugar del verbo</td><td>She speaks French and so <b>does</b> her brother.</td></tr>
<tr><td>elipsis tras auxiliar</td><td>I can't swim, but my sister <b>can</b>.</td></tr>
<tr><td>elipsis del infinitivo</td><td>— Do you want to come? — I'd love <b>to</b>.</td></tr>
<tr><td>neither / nor</td><td>I don't eat meat. — <b>Neither do I</b>.</td></tr></table>
<div class="xl-int"><b>Interferencia del español.</b> «Creo que sí» = <i>I think so</i>, no <i>I think yes</i>; «yo tampoco» = <i>neither do I / me neither</i>; el <i>to</i> final no se suprime: <i>I'd love <b>to</b></i>.</div>`,
 q:['— Is she coming? — I think ___.|yes|so|it|that|1|I think so.',
  'I don\'t like horror films. — ___.|So do I|Neither do I|Neither I do|Also not me|1|Acuerdo negativo: neither do I.',
  'These shoes are too small. Do you have bigger ___?|one|ones|it|them ones|1|Plural: ones.',
  'He can\'t drive, but his wife ___.|does|can|drives|is|1|Elipsis tras el auxiliar.',
  '— Will you help me? — I\'d be happy ___.|—|to|it|so|1|Se mantiene to.',
  'She enjoys jazz, and so ___ I.|am|do|have|enjoy|1|Auxiliar do.',
  '— Will it be expensive? — I hope ___.|no|not|don\'t|neither|1|I hope not.',
  'I haven\'t finished yet, but Tom ___.|has|did|have|does|0|Elipsis con has.']},
/* ------------------------------ C2 ------------------------------ */
{id:'en-c2-1',lvl:'C2',t:'Subjuntivo y construcciones mandativas',sub:'Verbo',h:4,pre:['en-c1-5'],
 ref:[['British Council · English grammar reference',BC+'english-grammar-reference'],te('c1')],
 teoria:`<p>El inglés conserva un <b>subjuntivo</b> invariable (la forma base del verbo) tras verbos y adjetivos de exigencia, sobre todo en registro formal y en inglés americano.</p>
<table class="oe-table"><tr><th>Tras…</th><th>Ejemplo</th></tr>
<tr><td>insist, demand, recommend, suggest, propose, require</td><td>They insisted that he <b>be</b> present. · I suggest she <b>apply</b> now.</td></tr>
<tr><td>it is essential / vital / important that</td><td>It is essential that every candidate <b>bring</b> ID.</td></tr>
<tr><td>negación</td><td>We recommend that he <b>not travel</b> alone.</td></tr>
<tr><td>fórmulas fijas</td><td><i>God save the King · Be that as it may · Suffice it to say · Come what may</i></td></tr></table>
<p>El inglés británico prefiere a menudo <b>should</b>: <i>They insisted that he <b>should be</b> present.</i> El indicativo (<i>he is present</i>) es habitual en registro informal británico.</p>
<div class="xl-int"><b>Interferencia del español.</b> Aunque el español use subjuntivo marcado («exigió que estuviera»), el inglés emplea la forma base sin -s y sin cambio de tiempo: <i>demanded that he <b>be</b></i>.</div>`,
 q:['The doctor recommended that she ___ more.|rests|rest|rested|resting|1|Subjuntivo: forma base.',
  'It is vital that he ___ on time.|is|be|was|being|1|it is vital that + be.',
  'They demanded that the manager ___.|resigns|resign|resigned|to resign|1|Forma base sin -s.',
  'We suggest that he ___ travel alone.|doesn\'t|not|don\'t|won\'t|1|Negación: not + forma base.',
  '___ it to say, the plan failed.|Suffices|Suffice|Sufficed|Sufficing|1|Fórmula fija.',
  'British alternative: "They insisted that he ___ there."|should be|would be|must to be|is being|0|Variante británica con should.',
  '___ that as it may, we must continue.|Is|Be|Being|Was|1|Be that as it may.',
  'It is essential that every applicant ___ a passport.|has|have|had|having|1|Forma base: have.']},
{id:'en-c2-2',lvl:'C2',t:'Phrasal verbs: orden y matices',sub:'Léxico gramatical',h:6,pre:['en-b1-6'],
 ref:[bc('c1/word-order-phrasal-verbs','Word order with phrasal verbs'),bc('b1-b2/phrasal-verbs','Phrasal verbs')],
 teoria:`<p>Un <b>phrasal verb</b> combina verbo y partícula con significado a menudo no composicional. Su sintaxis depende del tipo.</p>
<table class="oe-table"><tr><th>Tipo</th><th>Orden</th><th>Ejemplo</th></tr>
<tr><td>intransitivo</td><td>V + partícula</td><td>The plane <b>took off</b>.</td></tr>
<tr><td>transitivo separable</td><td>sustantivo: antes o después; pronombre: en medio</td><td>Turn <b>off</b> the light / Turn the light <b>off</b> / Turn <b>it off</b>.</td></tr>
<tr><td>transitivo inseparable</td><td>objeto tras la partícula</td><td>I'll <b>look after</b> the kids / <b>look after them</b>.</td></tr>
<tr><td>de tres palabras</td><td>inseparable</td><td>I can't <b>put up with</b> it. · We <b>ran out of</b> milk.</td></tr></table>
<p>Las partículas aportan valores sistemáticos: <i>up</i> (compleción: <i>eat up, use up</i>), <i>on</i> (continuidad: <i>carry on</i>), <i>off</i> (separación, inicio: <i>set off</i>), <i>over</i> (repaso: <i>think over</i>). En el registro formal se prefiere el verbo latino: <i>investigate</i> frente a <i>look into</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El pronombre nunca va detrás de la partícula en los separables: <i>turn it off</i>, no <i>turn off it</i>.</div>`,
 q:['Choose the correct order.|Turn off it.|Turn it off.|It turn off.|Off turn it.|1|Pronombre en medio.',
  'Who will look ___ your dog while you\'re away?|for|after|up|into|1|look after = cuidar.',
  'We\'ve run ___ sugar.|out|out of|off|away|1|run out of = quedarse sin.',
  'I can\'t put up ___ this noise any longer.|on|with|to|for|1|put up with = soportar.',
  'Please carry ___; don\'t let me interrupt.|out|on|off|over|1|carry on = continuar.',
  'Formal equivalent of "look into":|investigate|regard|search out|inspect up|0|Registro formal.',
  'Let me think it ___ before I decide.|up|over|on|out of|1|think over = pensarlo bien.',
  'Which is inseparable?|switch on|look after|turn down|pick up|1|look after es inseparable.']},
{id:'en-c2-3',lvl:'C2',t:'Nominalización y registro académico',sub:'Discurso',h:6,pre:['en-c1-3'],
 ref:[bc('c1/possession-noun-modifiers','Possession and noun modifiers'),['Cambridge · Write & Improve','https://www.cambridgeenglish.org/learning-english/free-resources/write-and-improve/index.aspx']],
 teoria:`<p>La escritura académica densifica la información convirtiendo procesos en <b>sustantivos</b> y apilando modificadores.</p>
<table class="oe-table"><tr><th>Estilo verbal</th><th>Estilo nominal</th></tr>
<tr><td>Prices rose quickly, so people bought less.</td><td><b>The rapid rise in prices</b> led to <b>a fall in consumption</b>.</td></tr>
<tr><td>They analysed the data carefully.</td><td><b>A careful analysis of the data</b> was carried out.</td></tr>
<tr><td>If we reduce emissions…</td><td><b>Emission reduction</b>…</td></tr></table>
<p>Recursos: sufijos (<i>-tion, -ment, -ity, -ance, -ness</i>), modificadores nominales (<i>a <b>three-year</b> study, <b>climate change</b> policy</i>), verbos de apoyo (<i>carry out, make, undergo, give rise to</i>). Abusar de la nominalización produce textos opacos; la clave es dosificarla.</p>
<div class="xl-int"><b>Interferencia del español.</b> Los compuestos nominales ingleses invierten el orden: «política de cambio climático» = <i>climate change policy</i>; el modificador numérico va en singular: <i>a five-<b>year</b> plan</i>, no <i>five-years</i>.</div>`,
 q:['Nominalise: "The population grew."|The population growth|The grow of population|The population growing it|The populated growth|0|grow → growth.',
  'Choose the correct compound.|a ten-years study|a ten-year study|a study of ten-years|a years-ten study|1|Modificador numérico en singular.',
  'Choose the academic version of "They looked into the problem."|An investigation into the problem was conducted.|They looked the problem into.|The problem was looked.|A looking was made.|0|Nominalización + verbo de apoyo.',
  'Noun from "reduce":|reducement|reduction|reducing|reducity|1|reduction.',
  '"Política de vivienda pública":|housing public policy|public housing policy|policy housing public|public policy of housing it|1|Orden: modificador general → núcleo.',
  'The new law gave rise ___ protests.|of|to|for|at|1|give rise to.',
  'Noun from "available":|availableness|availability|availance|availation|1|availability.',
  'Which sentence is most nominal?|Because they failed, they quit.|Their failure led to their resignation.|They failed and then they resigned.|They resigned when they failed.|1|Procesos convertidos en sustantivos.']},
{id:'en-c2-4',lvl:'C2',t:'Marcadores de discurso y cohesión',sub:'Discurso',h:5,pre:['en-b2-3'],
 ref:[bc('c1/contrasting-ideas','Contrasting ideas'),bc('b1-b2/contrasting-ideas-although-despite-others','Although, despite and others')],
 teoria:`<table class="oe-table"><tr><th>Función</th><th>Conjunción (+ oración)</th><th>Preposición (+ sustantivo / -ing)</th><th>Adverbio (entre oraciones)</th></tr>
<tr><td>contraste</td><td>although, even though, whereas</td><td>despite, in spite of</td><td>however, nevertheless, nonetheless</td></tr>
<tr><td>causa</td><td>because, since, as</td><td>because of, due to, owing to</td><td>—</td></tr>
<tr><td>consecuencia</td><td>so (that)</td><td>—</td><td>therefore, consequently, thus, hence</td></tr>
<tr><td>adición</td><td>—</td><td>in addition to, besides</td><td>moreover, furthermore</td></tr></table>
<p>La categoría determina la puntuación y lo que sigue: <i><b>Despite</b> the rain…</i> / <i><b>Although</b> it rained…</i> / <i>It rained. <b>However</b>, we went out.</i> <i>Hence</i> puede ir seguido de un sintagma: <i>hence the delay</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> <i>Despite</i> no lleva <i>of</i> (<i>despite of</i> es incorrecto); <i>however</i> no une dos oraciones con coma sola: se usa punto o punto y coma.</div>`,
 q:['___ the rain, the match continued.|Although|Despite|However|Even|1|Preposición + sustantivo.',
  '___ it was late, we kept working.|Despite|Although|In spite|However|1|Conjunción + oración.',
  'The trains were cancelled. ___, we arrived on time.|Although|Nevertheless|Despite|Because|1|Adverbio entre oraciones.',
  'The flight was delayed ___ fog.|because|due to|so|therefore|1|due to + sustantivo.',
  'Choose the correct form.|despite of the cost|despite the cost|despite that the cost|in despite the cost|1|despite sin of.',
  'Sales fell sharply; ___, the company cut jobs.|whereas|consequently|although|despite|1|Consecuencia.',
  'He is rich, ___ his brother is poor.|whereas|despite|nevertheless|due to|0|Contraste entre dos hechos.',
  'There was a strike, ___ the delays.|hence|thus that|therefore of|so of|0|hence + sintagma.']},
{id:'en-c2-5',lvl:'C2',t:'Énfasis: auxiliar, anteposición y refuerzo',sub:'Énfasis',h:4,pre:['en-c1-1','en-c1-2'],
 ref:[bc('c1/emphasis-cleft-sentences-inversion-auxiliaries','Emphasis with auxiliaries and inversion'),bc('b1-b2/intensifiers-so-such','Intensifiers: so and such')],
 teoria:`<table class="oe-table"><tr><th>Recurso</th><th>Ejemplo</th></tr>
<tr><td>do / does / did enfático</td><td>I <b>do</b> understand. · She <b>did</b> call you!</td></tr>
<tr><td>anteposición (fronting)</td><td><b>That</b> I can't accept. · <b>Strange</b> as it may seem, it worked.</td></tr>
<tr><td>so / such</td><td>It was <b>so</b> cold. · It was <b>such</b> a cold day.</td></tr>
<tr><td>so … that / such … that + inversión formal</td><td><b>So great was</b> the demand <b>that</b> tickets sold out.</td></tr>
<tr><td>reflexivo enfático</td><td>The CEO <b>herself</b> answered.</td></tr>
<tr><td>intensificadores</td><td><i>by far the best, the very same, whatsoever</i>: no doubt <b>whatsoever</b></td></tr></table>
<p><i>Adjective + as + subject + verb</i> expresa concesión: <i>Tired <b>as</b> she was, she finished the race.</i></p>
<div class="xl-int"><b>Interferencia del español.</b> El auxiliar enfático sustituye a recursos como «sí que» o «de verdad»: «Sí que te llamó» = <i>She <b>did</b> call you</i>.</div>`,
 q:['"Sí que lo entiendo":|I understand yes.|I do understand.|I am understand.|I understand it do.|1|Auxiliar enfático.',
  'It was ___ a long journey that we slept all day.|so|such|very|too|1|such + a + adjetivo + sustantivo.',
  '___ was the noise that nobody could sleep.|Such|So great|So|Very great|1|Inversión: So great was…',
  '___ as it may seem, it\'s true.|Strangely|Strange|Strangeness|How strange|1|Adjetivo + as + may seem.',
  'There is no evidence ___.|whatever|whatsoever|at least|anyhow|1|Intensificador negativo.',
  'The president ___ opened the ceremony.|himself|itself|self|him|0|Reflexivo enfático.',
  'She ___ tell you; you just weren\'t listening.|does|did|do|done|1|did enfático en pasado.',
  '___ as he was, he kept smiling.|Exhausted|Exhausting|Exhaust|Exhaustedly|0|Concesión con adjetivo antepuesto.']},
{id:'en-c2-6',lvl:'C2',t:'Modalidad avanzada',sub:'Verbo',h:5,pre:['en-b2-5'],
 ref:[bc('c1/modals-probability','Modals: probability'),bc('b1-b2/future-degrees-certainty','Future: degrees of certainty')],
 teoria:`<table class="oe-table"><tr><th>Forma</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>needn't have + part.</td><td>se hizo, pero era innecesario</td><td>You <b>needn't have brought</b> food.</td></tr>
<tr><td>didn't need to + inf.</td><td>no era necesario (no consta si se hizo)</td><td>I <b>didn't need to</b> wait.</td></tr>
<tr><td>be bound to / be sure to</td><td>certeza futura</td><td>It's <b>bound to</b> rain.</td></tr>
<tr><td>might well / could well</td><td>probabilidad alta</td><td>Prices <b>might well</b> rise.</td></tr>
<tr><td>may as well / might as well</td><td>no hay mejor opción</td><td>We <b>may as well</b> go home.</td></tr>
<tr><td>would have been able to</td><td>capacidad irreal pasada</td><td>I <b>would have been able to</b> help.</td></tr>
<tr><td>was to have + part.</td><td>plan pasado frustrado</td><td>She <b>was to have married</b> him.</td></tr></table>
<p>Grados de certeza futura: <i>will certainly › is bound to › will probably › is likely to › may well › might › is unlikely to › definitely won't</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> «No hacía falta que trajeras comida» (y la trajiste) = <i>You needn't have brought</i>, no <i>didn't need to bring</i>.</div>`,
 q:['You ___ bought flowers, but thank you!|didn\'t need to|needn\'t have|mustn\'t have|couldn\'t|1|Se hizo sin necesidad.',
  'Take an umbrella; it\'s ___ rain.|bound to|bound for|bounding to|bound|0|be bound to = es seguro que.',
  'The bus is late. We ___ walk.|may as well|may well as|might as good|must well|0|may as well = más vale.',
  'Inflation ___ rise next year (probable).|might well|may as well|is bound|needn\'t|0|might well = probabilidad alta.',
  'I ___ go to work yesterday, so I stayed in bed.|needn\'t have|didn\'t need to|mustn\'t|couldn\'t have|1|No era necesario y no se hizo.',
  'The ceremony ___ held last May, but it was cancelled.|was to have been|would be|is to be|must have been|0|Plan pasado frustrado.',
  'Which expresses the greatest certainty?|might|is likely to|is bound to|may well|2|is bound to.',
  'If you had told me, I ___ help.|would have been able to|could have been able|will be able to|was able|0|Capacidad irreal pasada.']}
];
/* ---------- recursos oficiales (categoría, título, URL, descripción, niveles) ---------- */
const LE='https://learnenglish.britishcouncil.org/';
const BBC='https://www.bbc.co.uk/learningenglish/english/';
const RES=[
 ['gram','British Council · Grammar A1–A2',BC+'a1-a2','Explicaciones y ejercicios interactivos de nivel elemental.','A1 A2'],
 ['gram','British Council · Grammar B1–B2',BC+'b1-b2','Gramática intermedia con prácticas autocorregibles.','B1 B2'],
 ['gram','British Council · Grammar C1',BC+'c1','Gramática avanzada: inversión, elipsis, cláusulas de participio.','C1 C2'],
 ['gram','British Council · English grammar reference',BC+'english-grammar-reference','Gramática de consulta organizada por categorías.','A1 A2 B1 B2 C1 C2'],
 ['gram','Test-English · Grammar A1',TE+'a1/','Fichas y tests por punto gramatical.','A1'],
 ['gram','Test-English · Grammar A2',TE+'a2/','Fichas y tests por punto gramatical.','A2'],
 ['gram','Test-English · Grammar B1',TE+'b1/','Fichas y tests por punto gramatical.','B1'],
 ['gram','Test-English · Grammar B1–B2',TE+'b1-b2/','Temas de transición al nivel avanzado.','B1 B2'],
 ['gram','Test-English · Grammar B2',TE+'b2/','Fichas y tests por punto gramatical.','B2'],
 ['gram','Test-English · Grammar C1',TE+'c1/','Fichas y tests por punto gramatical.','C1 C2'],
 ['gram','BBC Learning English · Grammar',BBC+'grammar','Unidades breves de gramática con vídeo.','A2 B1 B2'],
 ['video','British Council · Video zone',LE+'general/video-zone','Vídeos con transcripción y actividades.','A2 B1 B2'],
 ['video','British Council · Audio zone',LE+'general/audio-zone','Audios graduados con ejercicios.','A2 B1 B2'],
 ['video','BBC · 6 Minute English',BBC+'features/6-minute-english','Pódcast semanal de seis minutos con vocabulario.','B1 B2 C1'],
 ['video','BBC · Real Easy English',BBC+'features/real-easy-english','Conversaciones sencillas para principiantes.','A1 A2'],
 ['video','BBC · The English We Speak',BBC+'features/the-english-we-speak','Expresiones idiomáticas actuales.','B2 C1 C2'],
 ['video','BBC Learning English · Courses',BBC+'courses','Cursos completos por niveles.','A1 A2 B1 B2 C1'],
 ['video','VOA Learning English','https://learningenglish.voanews.com/','Noticias en inglés lento y sencillo (inglés americano).','A2 B1 B2'],
 ['video','YouTube · BBC Learning English','https://www.youtube.com/@BBCLearningEnglish','Canal oficial de la BBC.','A1 A2 B1 B2 C1 C2'],
 ['video','YouTube · British Council','https://www.youtube.com/@BritishCouncil','Canal oficial del British Council.','B1 B2 C1'],
 ['video','YouTube · English with Cambridge','https://www.youtube.com/@CambridgeEnglishTV','Canal oficial de Cambridge English.','A2 B1 B2 C1 C2'],
 ['video','YouTube · VOA Learning English','https://www.youtube.com/@VOALearningEnglish','Canal oficial de VOA Learning English.','A2 B1 B2'],
 ['skill','British Council · Listening A1',LE+'free-resources/listening/a1','Comprensión auditiva graduada.','A1'],
 ['skill','British Council · Listening A2',LE+'free-resources/listening/a2','Comprensión auditiva graduada.','A2'],
 ['skill','British Council · Listening B1',LE+'free-resources/listening/b1','Comprensión auditiva graduada.','B1'],
 ['skill','British Council · Listening B2',LE+'free-resources/listening/b2','Comprensión auditiva graduada.','B2'],
 ['skill','British Council · Listening C1',LE+'free-resources/listening/c1','Comprensión auditiva graduada.','C1 C2'],
 ['skill','British Council · Reading A1',LE+'free-resources/reading/a1','Comprensión lectora graduada.','A1'],
 ['skill','British Council · Reading A2',LE+'free-resources/reading/a2','Comprensión lectora graduada.','A2'],
 ['skill','British Council · Reading B1',LE+'free-resources/reading/b1','Comprensión lectora graduada.','B1'],
 ['skill','British Council · Reading B2',LE+'free-resources/reading/b2','Comprensión lectora graduada.','B2'],
 ['skill','British Council · Reading C1',LE+'free-resources/reading/c1','Comprensión lectora graduada.','C1 C2'],
 ['skill','British Council · Writing B1',LE+'free-resources/writing/b1','Modelos de textos y tareas de escritura.','B1'],
 ['skill','British Council · Writing B2',LE+'free-resources/writing/b2','Modelos de textos y tareas de escritura.','B2'],
 ['skill','British Council · Writing C1',LE+'free-resources/writing/c1','Modelos de textos y tareas de escritura.','C1 C2'],
 ['skill','British Council · Speaking B1',LE+'free-resources/speaking/b1','Funciones comunicativas en vídeo.','B1'],
 ['skill','British Council · Speaking B2',LE+'free-resources/speaking/b2','Funciones comunicativas en vídeo.','B2'],
 ['skill','British Council · Vocabulary A1–A2',LE+'free-resources/vocabulary/a1-a2','Léxico temático con ejercicios.','A1 A2'],
 ['skill','British Council · Vocabulary B1–B2',LE+'free-resources/vocabulary/b1-b2','Léxico temático con ejercicios.','B1 B2'],
 ['skill','BBC Learning English · Vocabulary',BBC+'vocabulary','Léxico en contexto.','A2 B1 B2'],
 ['skill','Cambridge · Write & Improve','https://www.cambridgeenglish.org/learning-english/free-resources/write-and-improve/index.aspx','Corrección automática gratuita de redacciones.','A2 B1 B2 C1 C2'],
 ['skill','Cambridge · Activities for learners','https://www.cambridgeenglish.org/learning-english/activities-for-learners/','Actividades breves por nivel y destreza.','A1 A2 B1 B2 C1 C2'],
 ['test','British Council · Online level test',LE+'english-levels/online-english-level-test','Prueba de nivel gratuita.','A1 A2 B1 B2 C1 C2'],
 ['test','Test-English · Level test','https://test-english.com/level-test/','Prueba de nivel con corrección inmediata.','A1 A2 B1 B2 C1'],
 ['test','Cambridge · Test your English','https://www.cambridgeenglish.org/test-your-english/','Prueba rápida que orienta hacia el examen adecuado.','A1 A2 B1 B2 C1 C2'],
 ['test','BBC · Test your level',BBC+'course/test-your-level','Prueba de la BBC.','A1 A2 B1 B2 C1'],
 ['test','Cambridge · A2 Key','https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/','Certificado oficial de nivel A2.','A2'],
 ['test','Cambridge · B1 Preliminary','https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/','Certificado oficial de nivel B1.','B1'],
 ['test','Cambridge · B2 First','https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/','Certificado oficial de nivel B2.','B2'],
 ['test','Cambridge · C1 Advanced','https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/','Certificado oficial de nivel C1.','C1'],
 ['test','Cambridge · C2 Proficiency','https://www.cambridgeenglish.org/exams-and-tests/qualifications/proficiency/','Certificado oficial de nivel C2.','C2'],
 ['dic','Cambridge Dictionary · inglés–español','https://dictionary.cambridge.org/es/diccionario/ingles-espanol/','Diccionario bilingüe con pronunciación.','A1 A2 B1 B2 C1 C2'],
 ['dic','Oxford Learner\'s Dictionaries','https://www.oxfordlearnersdictionaries.com/','Diccionario monolingüe para estudiantes.','B1 B2 C1 C2'],
 ['dic','WordReference · inglés–español','https://www.wordreference.com/enes/','Diccionario bilingüe y foros.','A1 A2 B1 B2 C1 C2']
];
const EXAM={A1:['Cambridge · Test your English','https://www.cambridgeenglish.org/test-your-english/'],
 A2:['A2 Key','https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/'],
 B1:['B1 Preliminary','https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/'],
 B2:['B2 First','https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/'],
 C1:['C1 Advanced','https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/'],
 C2:['C2 Proficiency','https://www.cambridgeenglish.org/exams-and-tests/qualifications/proficiency/']};
/* Horas de aprendizaje guiado acumuladas desde cero (Cambridge English, orientativas).
   A1 no figura en la tabla de Cambridge: se estima como la mitad de A2 y se marca así. */
const HORAS={A1:[90,100,true],A2:[180,200],B1:[350,400],B2:[500,600],C1:[700,800],C2:[1000,1200]};
const FUENTE=['Cambridge English · Guided learning hours','https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'];
const CAN={
 A1:'Presentarse, hablar de la familia, la rutina y el entorno inmediato con frases muy sencillas; entender preguntas lentas y claras.',
 A2:'Contar experiencias pasadas y planes, describir lugares y personas, resolver gestiones cotidianas (compras, transporte, citas).',
 B1:'Mantener una conversación sobre temas conocidos, narrar con varios tiempos verbales, dar opiniones breves y escribir correos coherentes.',
 B2:'Argumentar con matices, comprender artículos y reportajes, escribir ensayos y cartas formales y hablar con nativos sin tensión.',
 C1:'Comprender textos largos y exigentes, captar lo implícito y escribir textos académicos y profesionales bien estructurados.',
 C2:'Comprender prácticamente todo y expresarse con precisión estilística: ironía, registro, matiz y reformulación espontánea.'};
return {code:'en',nombre:'English',es:'Inglés',saludo:['Welcome','Bienvenido'],marca:['English','Atelier de lengua inglesa'],
  U,RES,EXAM,HORAS,FUENTE,CAN,voz:'en-GB',
  intro:'Inglés de A1 a C2 con explicaciones propias para hispanohablantes, cuestionarios corregidos al instante, conjugador y enlaces a los recursos oficiales del British Council, la BBC, Cambridge English, Test-English y VOA.'};
})();
