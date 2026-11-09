/* Unidades de gramática: teoría y cuestionarios.
   Datos puros (sin dependencias). Constantes: GRAM1, GRAM2, GRAM3, GRAM0, GRAM4, GRAM5, GRAM6, GRAM7 */
const GRAM1=[
{id:'praesens',t:'El presente (Präsens)',sub:'Verbo',lvl:'A1',
 teoria:`
<h3>Para qué sirve</h3>
<p>El <b>Präsens</b> cubre en alemán lo que en español reparten el presente y el futuro próximo: acciones habituales (<i>Ich arbeite jeden Tag</i>), estados (<i>Ich bin müde</i>), verdades generales (<i>Wasser kocht bei 100 Grad</i>) y planes con marca temporal (<i>Morgen fahre ich nach Berlin</i> = mañana voy a Berlín).</p>
<h3>Terminaciones</h3>
<table class="endtable"><tr><th>Persona</th><th>Terminación</th><th>lernen</th><th>arbeiten</th><th>heißen</th></tr>
<tr><td>ich</td><td>-e</td><td>lerne</td><td>arbeite</td><td>heiße</td></tr>
<tr><td>du</td><td>-st</td><td>lernst</td><td>arbeit<b>e</b>st</td><td>heißt</td></tr>
<tr><td>er/sie/es</td><td>-t</td><td>lernt</td><td>arbeit<b>e</b>t</td><td>heißt</td></tr>
<tr><td>wir</td><td>-en</td><td>lernen</td><td>arbeiten</td><td>heißen</td></tr>
<tr><td>ihr</td><td>-t</td><td>lernt</td><td>arbeit<b>e</b>t</td><td>heißt</td></tr>
<tr><td>sie/Sie</td><td>-en</td><td>lernen</td><td>arbeiten</td><td>heißen</td></tr></table>
<p>Dos ajustes obligatorios: si la raíz acaba en <b>-t, -d, -n</b> tras consonante se intercala una <b>-e-</b> (<i>du arbeitest, er öffnet</i>); si acaba en <b>sibilante</b> (-s, -ß, -z, -tz), la forma de <i>du</i> pierde la -s y suena igual que la de <i>er</i> (<i>du heißt, du sitzt</i>).</p>
<h3>Cambio de vocal en du y er/sie/es</h3>
<p>Un grupo de verbos fuertes altera la vocal radical <b>solo</b> en esas dos personas: <code>e → i/ie</code> (sprechen → du sprichst, lesen → du liest, nehmen → du nimmst) y <code>a → ä</code> (fahren → du fährst, schlafen → du schläfst). El plural recupera siempre la vocal del infinitivo.</p>
<h3>Los tres irregulares que hay que saber ya</h3>
<table class="endtable"><tr><th></th><th>sein</th><th>haben</th><th>werden</th></tr>
<tr><td>ich</td><td>bin</td><td>habe</td><td>werde</td></tr>
<tr><td>du</td><td>bist</td><td>hast</td><td>wirst</td></tr>
<tr><td>er/sie/es</td><td>ist</td><td>hat</td><td>wird</td></tr>
<tr><td>wir/sie/Sie</td><td>sind</td><td>haben</td><td>werden</td></tr>
<tr><td>ihr</td><td>seid</td><td>habt</td><td>werdet</td></tr></table>`,
 q:["Ich ___ jeden Tag zwei Stunden.|lerne|lernst|lernt|lernen|0|Con ich la terminación es -e: ich lerne.",
    "Du ___ sehr gut Deutsch.|sprechst|sprichst|sprecht|sprichtst|1|sprechen cambia e→i en du y er: du sprichst.",
    "___ ihr heute Zeit?|Habt|Habst|Haben|Hat|0|Con ihr la terminación es -t: ihr habt.",
    "Er ___ um sechs Uhr auf.|steht|stehst|steht auf|stehe|2|aufstehen es separable: el prefijo va al final, pero la forma verbal es steht … auf.",
    "Wir ___ am Wochenende nach Berlin.|fahrt|fährt|fahren|fährst|2|Con wir siempre -en y sin Umlaut: wir fahren.",
    "Du ___ zu schnell.|arbeitst|arbeitest|arbeites|arbeitet|1|Raíz en -t: se intercala una e: du arbeitest.",
    "Sie (ella) ___ gern Bücher.|lest|liest|list|lesen|1|lesen cambia e→ie: sie liest.",
    "Wie ___ du?|heißst|heißt|heißen|heißest|1|Raíz en -ß: la forma de du no repite la s: du heißt.",
    "Ihr ___ sehr freundlich.|sind|seid|seit|bist|1|El presente de sein con ihr es seid; seit es una preposición.",
    "Das Kind ___ acht Stunden.|schlaft|schläft|schlaffen|schlafen|1|schlafen cambia a→ä en er/sie/es: es schläft."]},

{id:'artikel',t:'Los artículos y kein',sub:'Sustantivo',lvl:'A1',
 teoria:`
<h3>Determinado frente a indeterminado</h3>
<p>El artículo <b>determinado</b> (der, die, das) señala algo ya conocido o único; el <b>indeterminado</b> (ein, eine) lo presenta por primera vez. La diferencia funciona como en español, pero el alemán lo declina según el caso.</p>
<table class="endtable"><tr><th>Caso</th><th>masculino</th><th>femenino</th><th>neutro</th><th>plural</th></tr>
<tr><td>Nominativo</td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die / —</td></tr>
<tr><td>Acusativo</td><td>den / einen</td><td>die / eine</td><td>das / ein</td><td>die / —</td></tr>
<tr><td>Dativo</td><td>dem / einem</td><td>der / einer</td><td>dem / einem</td><td>den / —</td></tr>
<tr><td>Genitivo</td><td>des / eines</td><td>der / einer</td><td>des / eines</td><td>der / —</td></tr></table>
<h3>El indefinido no tiene plural</h3>
<p><i>ein Buch</i> → <i>Bücher</i> (sin artículo). Para negar el plural o un sustantivo sin artículo se usa <b>kein</b>, que se declina exactamente como <i>ein</i> pero sí tiene plural: <i>keine Bücher</i>.</p>
<h3>nicht o kein</h3>
<p><b>kein</b> niega sustantivos con artículo indeterminado o sin artículo: <i>Ich habe kein Auto</i>. <b>nicht</b> niega todo lo demás: verbos (<i>Ich arbeite nicht</i>), adjetivos (<i>nicht teuer</i>) y sustantivos con artículo determinado o posesivo (<i>Das ist nicht mein Buch</i>).</p>
<h3>Cuándo se omite el artículo</h3>
<p>Con profesiones y nacionalidades tras <i>sein/werden</i> (<i>Er ist Lehrer</i>), con materias y sustantivos incontables en sentido general (<i>Ich trinke gern Kaffee</i>) y con la mayoría de nombres de países (<i>Ich wohne in Deutschland</i>, pero <i>in der Schweiz</i>, <i>in der Türkei</i>).</p>`,
 q:["Ich kaufe ___ Apfel.|ein|einen|einem|eines|1|Apfel es masculino y aquí es objeto directo: acusativo einen.",
    "___ Frau dort ist meine Lehrerin.|Der|Die|Das|Den|1|Frau es femenino y sujeto: nominativo die.",
    "Wir haben ___ Zeit.|nicht|keine|kein|nichts|1|Zeit es femenino y se niega un sustantivo sin artículo: keine.",
    "Das ist ___ Buch von Anna.|das|die|der|den|0|Buch es neutro y es predicado en nominativo: das.",
    "Ich gebe ___ Kind einen Apfel.|das|dem|den|der|1|Kind es el destinatario: dativo neutro dem.",
    "Er ist ___ Ingenieur.|ein|einen|—|der|2|Con profesiones tras sein no se pone artículo: Er ist Ingenieur.",
    "Ich sehe ___ Kinder im Garten.|der|die|das|den|1|Plural en acusativo: die Kinder.",
    "Das ist ___ mein Auto.|kein|keine|nicht|nichts|2|Ante un posesivo se niega con nicht, no con kein.",
    "Sie wohnt in ___ Schweiz.|—|die|der|das|2|Die Schweiz lleva artículo y tras in con dativo se convierte en der.",
    "Ich habe ___ Geschwister.|nicht|kein|keine|einen|2|Plural negado: keine Geschwister."]},

{id:'nominativ',t:'El nominativo',sub:'Casos',lvl:'A1',
 teoria:`
<h3>Qué marca</h3>
<p>El nominativo señala el <b>sujeto</b> de la oración: quien realiza la acción o de quien se predica algo. Se pregunta con <b>wer?</b> (personas) o <b>was?</b> (cosas).</p>
<p><i><b>Der Mann</b> liest die Zeitung.</i> → <i>Wer liest?</i> → der Mann.</p>
<h3>El segundo nominativo</h3>
<p>Los verbos <b>sein, werden, bleiben</b> y <b>heißen</b> no tienen objeto: lo que va detrás sigue en nominativo, porque se identifica con el sujeto.</p>
<p><i>Das ist <b>ein guter Freund</b>.</i> · <i>Er wird <b>Lehrer</b>.</i> · <i>Das bleibt <b>ein Problem</b>.</i></p>
<h3>Formas</h3>
<table class="endtable"><tr><th></th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>determinado</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>indeterminado</td><td>ein</td><td>eine</td><td>ein</td><td>—</td></tr>
<tr><td>negación</td><td>kein</td><td>keine</td><td>kein</td><td>keine</td></tr>
<tr><td>pronombre</td><td>er</td><td>sie</td><td>es</td><td>sie</td></tr></table>
<h3>Truco de reconocimiento</h3>
<p>Solo el masculino cambia visiblemente entre nominativo y acusativo (<i>der → den</i>, <i>ein → einen</i>). Si en una frase ve <i>den</i> o <i>einen</i>, ese sintagma <b>no</b> es el sujeto.</p>`,
 q:["___ Hund spielt im Garten.|Den|Der|Dem|Des|1|Sujeto masculino: nominativo der.",
    "¿Cuál es el sujeto de: Den Apfel isst das Kind?|Den Apfel|das Kind|isst|ninguno|1|Den Apfel está en acusativo; el sujeto es das Kind, aunque vaya detrás del verbo.",
    "Mein Bruder ist ___ guter Student.|einen|ein|einem|eines|1|Tras sein se mantiene el nominativo: ein guter Student.",
    "___ ist deine Tasche?|Wer|Was|Wen|Wem|1|Se pregunta por una cosa en nominativo: was.",
    "Heute kommt ___ Lehrerin später.|die|der|den|dem|0|Lehrerin es femenino y sujeto: die.",
    "Das sind ___ Kinder.|meinen|meine|meinem|meiner|1|Plural nominativo: meine Kinder.",
    "___ Mann dort kenne ich nicht.|Der|Den|Dem|Des|1|Aquí Mann es objeto directo antepuesto: acusativo den.",
    "Er wird ___ Arzt.|einen|ein|einem|dem|1|werden rige nominativo: ein Arzt.",
    "___ arbeitet heute im Büro?|Wen|Wem|Wer|Was|2|Pregunta por el sujeto persona: wer.",
    "___ Buch liegt auf dem Tisch.|Den|Das|Dem|Der|1|Buch es neutro y sujeto: das."]},

{id:'akkusativ',t:'El acusativo',sub:'Casos',lvl:'A1',
 teoria:`
<h3>Qué marca</h3>
<p>El acusativo señala el <b>objeto directo</b>: aquello sobre lo que recae la acción. Se pregunta con <b>wen?</b> (personas) o <b>was?</b> (cosas).</p>
<p><i>Ich sehe <b>den Film</b>.</i> → <i>Was sehe ich?</i> → den Film.</p>
<h3>Solo cambia el masculino</h3>
<table class="endtable"><tr><th></th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>determinado</td><td><b>den</b></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>indeterminado</td><td><b>einen</b></td><td>eine</td><td>ein</td><td>—</td></tr>
<tr><td>posesivo</td><td><b>meinen</b></td><td>meine</td><td>mein</td><td>meine</td></tr>
<tr><td>pronombre</td><td><b>ihn</b></td><td>sie</td><td>es</td><td>sie</td></tr></table>
<h3>Preposiciones que siempre rigen acusativo</h3>
<p><b>durch, für, gegen, ohne, um</b> (regla mnemotécnica: <i>dfgou</i>). <i>Ich kaufe ein Geschenk <b>für meinen</b> Vater.</i> · <i>Wir gehen <b>durch den</b> Park.</i></p>
<h3>Expresiones de tiempo</h3>
<p>La duración y la frecuencia sin preposición van en acusativo: <i>Ich bleibe <b>einen Monat</b>.</i> · <i>Er kommt <b>jeden Tag</b>.</i></p>`,
 q:["Ich sehe ___ Film.|der|den|dem|des|1|Objeto directo masculino: den Film.",
    "Sie kauft ___ Tasche.|einen|eine|einem|einer|1|Tasche es femenino: en acusativo no cambia, eine.",
    "Wir gehen ohne ___ Freund.|meinen|mein|meinem|meines|0|ohne rige acusativo: ohne meinen Freund.",
    "Kennst du ___?|er|ihn|ihm|sein|1|Pronombre masculino en acusativo: ihn.",
    "Ich lese ___ Buch.|der|dem|das|des|2|Buch es neutro: en acusativo se mantiene das.",
    "Er arbeitet für ___ Firma.|eine|einer|einen|einem|0|für rige acusativo; Firma es femenino: eine.",
    "___ besuchst du am Wochenende?|Wer|Wen|Wem|Wessen|1|Pregunta por el objeto directo persona: wen.",
    "Wir bleiben ___ Woche in Wien.|eine|einer|einem|ein|0|Duración sin preposición: acusativo eine Woche.",
    "Ich habe ___ Hunger.|einen|ein|eine|kein|0|Hunger es masculino: ich habe einen Hunger o keinen Hunger.",
    "Der Bus fährt um ___ Ecke.|der|die|dem|den|1|um rige acusativo; Ecke es femenino: die Ecke."]},

{id:'dativ',t:'El dativo',sub:'Casos',lvl:'A1',
 teoria:`
<h3>Qué marca</h3>
<p>El dativo señala el <b>objeto indirecto</b>: el destinatario o beneficiario. Se pregunta con <b>wem?</b></p>
<p><i>Ich gebe <b>dem Kind</b> einen Apfel.</i> → <i>Wem gebe ich den Apfel?</i> → dem Kind.</p>
<h3>Formas</h3>
<table class="endtable"><tr><th></th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>determinado</td><td>dem</td><td>der</td><td>dem</td><td>den + -n</td></tr>
<tr><td>indeterminado</td><td>einem</td><td>einer</td><td>einem</td><td>—</td></tr>
<tr><td>pronombre</td><td>ihm</td><td>ihr</td><td>ihm</td><td>ihnen</td></tr></table>
<p>En el <b>plural</b> el sustantivo añade una <b>-n</b> si no la tiene: <i>die Kinder → mit den Kinder<b>n</b></i>.</p>
<h3>Preposiciones que siempre rigen dativo</h3>
<p><b>aus, bei, mit, nach, seit, von, zu</b> (y también <i>gegenüber</i>). Es la lista que conviene memorizar como una canción.</p>
<h3>Verbos con dativo</h3>
<p>Algunos verbos muy frecuentes llevan su complemento en dativo aunque en español parezca directo: <b>helfen, danken, gefallen, gehören, antworten, glauben, passen, schmecken</b>.</p>
<p><i>Ich helfe <b>dir</b>.</i> · <i>Das Buch gehört <b>meinem</b> Bruder.</i> · <i>Die Suppe schmeckt <b>mir</b> gut.</i></p>
<h3>Orden de los dos objetos</h3>
<p>Si ambos son sustantivos: <b>dativo antes que acusativo</b> (<i>Ich gebe dem Kind den Ball</i>). Si el acusativo es pronombre, va primero (<i>Ich gebe ihn dem Kind</i>).</p>`,
 q:["Ich helfe ___ Mutter.|meine|meiner|meinen|meinem|1|helfen rige dativo; Mutter es femenino: meiner.",
    "Wir fahren mit ___ Bus.|der|den|dem|des|2|mit rige dativo; Bus es masculino: dem.",
    "Das Buch gehört ___.|ich|mich|mir|mein|2|gehören rige dativo: mir.",
    "Er spielt mit ___ Kindern.|die|den|dem|der|1|Dativo plural: den Kindern, con -n en el sustantivo.",
    "Ich komme aus ___ Schweiz.|die|der|dem|den|1|aus rige dativo; die Schweiz pasa a der Schweiz.",
    "Sie gibt ___ Freund ein Geschenk.|ihren|ihrem|ihre|ihres|1|Objeto indirecto masculino: ihrem Freund.",
    "___ gehört das Auto?|Wer|Wen|Wem|Wessen|2|Se pregunta por el dativo con wem.",
    "Seit ___ Jahr wohne ich hier.|ein|einen|einem|eines|2|seit rige dativo; Jahr es neutro: einem.",
    "Das Kleid passt ___ sehr gut.|dich|dir|du|dein|1|passen rige dativo: dir.",
    "Nach ___ Arbeit gehe ich nach Hause.|die|der|den|dem|1|nach rige dativo; Arbeit es femenino: der."]}
];

const GRAM2=[
{id:'pronomen',t:'Pronombres personales y posesivos',sub:'Sustituir',lvl:'A1',
 teoria:`
<h3>Personales</h3>
<table class="endtable"><tr><th>Nominativo</th><th>Acusativo</th><th>Dativo</th></tr>
<tr><td>ich</td><td>mich</td><td>mir</td></tr>
<tr><td>du</td><td>dich</td><td>dir</td></tr>
<tr><td>er</td><td>ihn</td><td>ihm</td></tr>
<tr><td>sie</td><td>sie</td><td>ihr</td></tr>
<tr><td>es</td><td>es</td><td>ihm</td></tr>
<tr><td>wir</td><td>uns</td><td>uns</td></tr>
<tr><td>ihr</td><td>euch</td><td>euch</td></tr>
<tr><td>sie / Sie</td><td>sie / Sie</td><td>ihnen / Ihnen</td></tr></table>
<p>El pronombre reproduce el <b>género gramatical</b>, no el sexo: <i>Wo ist der Tisch? — <b>Er</b> ist dort.</i> Una mesa es «él» porque <i>Tisch</i> es masculino.</p>
<h3>Posesivos</h3>
<table class="endtable"><tr><th>Persona</th><th>Posesivo</th><th>Ejemplo</th></tr>
<tr><td>ich</td><td>mein</td><td>mein Vater, meine Mutter</td></tr>
<tr><td>du</td><td>dein</td><td>dein Bruder</td></tr>
<tr><td>er / es</td><td>sein</td><td>sein Auto</td></tr>
<tr><td>sie</td><td>ihr</td><td>ihr Buch</td></tr>
<tr><td>wir</td><td>unser</td><td>unsere Wohnung</td></tr>
<tr><td>ihr</td><td>euer</td><td>eure Freunde</td></tr>
<tr><td>sie / Sie</td><td>ihr / Ihr</td><td>ihre Kinder / Ihre Adresse</td></tr></table>
<p>Se declinan <b>igual que ein/kein</b>: <i>mein Bruder</i> (nom. m), <i>meinen Bruder</i> (ac. m), <i>meinem Bruder</i> (dat. m), <i>meine Schwester</i> (f), <i>meine Eltern</i> (pl).</p>
<h3>Atención</h3>
<p><i>ihr</i> tiene tres valores: pronombre sujeto «vosotros», dativo de <i>sie</i> «a ella» y posesivo «su (de ella / de ellos)». Solo la posición y la terminación lo distinguen.</p>
<p><i>euer</i> pierde la -e- al declinarse: <i>euer Haus</i> pero <i>eure Wohnung</i>, <i>euren Freund</i>.</p>`,
 q:["Wo ist der Schlüssel? — ___ liegt auf dem Tisch.|Es|Er|Sie|Ihn|1|Schlüssel es masculino, así que el pronombre es er.",
    "Ich rufe ___ morgen an.|du|dich|dir|dein|1|anrufen rige acusativo: dich.",
    "Kannst du ___ helfen?|mich|mir|ich|mein|1|helfen rige dativo: mir.",
    "Das ist ___ Schwester.|meinen|mein|meine|meiner|2|Schwester es femenino en nominativo: meine.",
    "Wir besuchen ___ Großeltern.|unser|unsere|unseren|unserem|1|Plural en acusativo: unsere Großeltern.",
    "Ich gebe ___ das Buch.|ihn|ihm|ihr|ihnen|1|Destinatario masculino singular en dativo: ihm.",
    "___ Auto ist neu. (de ella)|Sein|Ihr|Ihre|Seine|1|Auto es neutro y la poseedora es femenina: ihr Auto.",
    "Kommt ___ heute Abend?|ihr|euch|euer|ihnen|0|Sujeto de segunda persona del plural: ihr.",
    "Ich danke ___ für alles.|Sie|Ihnen|Ihr|Sich|1|danken rige dativo; forma de cortesía: Ihnen.",
    "Wie heißt ___ Lehrer? (de vosotros)|euer|eure|euren|eurem|0|Lehrer es masculino en nominativo: euer Lehrer."]},

{id:'wortstellung',t:'El orden de la frase y la inversión',sub:'Sintaxis',lvl:'A1',
 teoria:`
<h3>La regla que lo gobierna todo</h3>
<p>En la oración enunciativa el <b>verbo conjugado ocupa siempre la segunda posición</b>. No la segunda palabra: el segundo <i>elemento</i>. Lo que va delante puede ser el sujeto o cualquier otro complemento, pero solo puede haber <b>un</b> elemento en primera posición.</p>
<table class="endtable"><tr><th>Posición 1</th><th>Verbo</th><th>Resto</th></tr>
<tr><td>Ich</td><td>fahre</td><td>morgen nach Berlin.</td></tr>
<tr><td>Morgen</td><td>fahre</td><td>ich nach Berlin.</td></tr>
<tr><td>Nach Berlin</td><td>fahre</td><td>ich morgen.</td></tr></table>
<p>Cuando algo distinto del sujeto ocupa la primera posición, el sujeto pasa <b>inmediatamente detrás del verbo</b>. Eso es la <b>inversión</b>. Nunca se dice <i>Morgen ich fahre…</i></p>
<h3>Preguntas</h3>
<p><b>Con partícula interrogativa</b> (W-Frage): la partícula ocupa la posición 1 y el verbo la 2: <i>Wann kommst du?</i> · <i>Wo wohnst du?</i></p>
<p><b>Sin partícula</b> (Ja/Nein-Frage): el verbo abre la frase: <i>Kommst du morgen?</i> · <i>Hast du Zeit?</i></p>
<h3>El paréntesis oracional (Satzklammer)</h3>
<p>Cuando hay dos elementos verbales, el conjugado se queda en posición 2 y el otro <b>cierra la frase</b>: participio, infinitivo o prefijo separable.</p>
<p><i>Ich <b>habe</b> gestern einen Film <b>gesehen</b>.</i> · <i>Ich <b>will</b> heute früh <b>schlafen</b>.</i> · <i>Ich <b>stehe</b> um sechs <b>auf</b>.</i></p>
<h3>Subordinadas</h3>
<p>Tras <b>weil, dass, wenn, ob</b> el verbo conjugado se va al <b>final</b>: <i>Ich bleibe zu Hause, <b>weil</b> ich müde <b>bin</b>.</i> En cambio <b>denn</b> y <b>aber</b> no alteran nada: <i>…, denn ich <b>bin</b> müde.</i></p>`,
 q:["¿Cuál es correcta?|Morgen ich gehe ins Kino.|Morgen gehe ich ins Kino.|Ich morgen gehe ins Kino.|Gehe morgen ich ins Kino.|1|Si Morgen ocupa la posición 1, el sujeto va detrás del verbo.",
    "Ordene: heute / ich / arbeite / nicht|Heute ich arbeite nicht.|Ich heute arbeite nicht.|Heute arbeite ich nicht.|Arbeite ich heute nicht.|2|Inversión: el verbo se mantiene en segunda posición.",
    "¿Cuál es correcta?|Wann du kommst?|Wann kommst du?|Du wann kommst?|Kommst wann du?|1|En las W-Fragen el verbo va inmediatamente tras la partícula.",
    "¿Cuál es correcta?|Du hast Zeit morgen?|Hast du morgen Zeit?|Morgen du hast Zeit?|Zeit hast du morgen?|1|Pregunta de sí o no: el verbo abre la frase.",
    "Ich ___ gestern ins Kino ___.|habe … gehen|bin … gegangen|bin … gehen|habe … gegangen|1|gehen forma el perfecto con sein y el participio cierra la frase.",
    "¿Cuál es correcta?|Ich will nach Hause gehen.|Ich will gehen nach Hause.|Ich gehen will nach Hause.|Ich will nach Hause zu gehen.|0|El infinitivo dependiente del modal cierra la oración.",
    "Ich bleibe zu Hause, weil ich krank ___.|bin|ist|sein|bist|0|En la subordinada con weil el verbo conjugado va al final: … weil ich krank bin.",
    "¿Cuál es correcta?|Ich stehe auf um sechs Uhr.|Ich auf stehe um sechs Uhr.|Ich stehe um sechs Uhr auf.|Um sechs Uhr ich stehe auf.|2|El prefijo separable cierra la oración.",
    "Er kommt heute nicht, ___ er keine Zeit hat.|denn|weil|aber|und|1|Con verbo al final la conjunción correcta es weil.",
    "¿Cuántos elementos puede haber antes del verbo conjugado?|Ninguno|Uno|Dos|Los que sean|1|Solo un elemento ocupa la primera posición en la oración enunciativa."]},

{id:'modalverben',t:'Los verbos modales',sub:'Verbo',lvl:'A1',
 teoria:`
<h3>Qué son</h3>
<p>Seis verbos que matizan a otro verbo, que va en <b>infinitivo al final</b> de la oración: <i>Ich <b>muss</b> um sechs <b>aufstehen</b>.</i></p>
<table class="endtable"><tr><th>Verbo</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>können</td><td>capacidad, posibilidad</td><td>Ich kann schwimmen.</td></tr>
<tr><td>müssen</td><td>necesidad, obligación objetiva</td><td>Ich muss arbeiten.</td></tr>
<tr><td>wollen</td><td>voluntad firme</td><td>Ich will das nicht.</td></tr>
<tr><td>dürfen</td><td>permiso</td><td>Man darf hier parken.</td></tr>
<tr><td>sollen</td><td>encargo o consejo ajeno</td><td>Du sollst mehr schlafen.</td></tr>
<tr><td>mögen / möchten</td><td>gusto / deseo cortés</td><td>Ich möchte einen Kaffee.</td></tr></table>
<h3>Conjugación anómala</h3>
<p>En singular <b>pierden el Umlaut</b> y las formas de <i>ich</i> y <i>er/sie/es</i> son idénticas y <b>sin terminación</b>: ich kann, du kannst, er kann · wir können, ihr könnt, sie können.</p>
<h3>Negación: la trampa</h3>
<p><b>nicht müssen</b> = «no hace falta», no prohibición. Para prohibir se usa <b>nicht dürfen</b>.</p>
<p><i>Du musst nicht kommen</i> = no es necesario que vengas. · <i>Du darfst nicht kommen</i> = no puedes venir.</p>
<h3>En pasado</h3>
<p>Se usa el <b>Präteritum</b>, también al hablar: <i>ich konnte, ich musste, ich wollte, ich durfte, ich sollte, ich mochte</i>. El perfecto existe pero suena rebuscado y exige el <i>Ersatzinfinitiv</i>: <i>Ich habe arbeiten müssen</i>.</p>`,
 q:["Ich ___ sehr gut kochen.|kann|kannst|könne|können|0|Con ich el modal no lleva terminación: ich kann.",
    "Wir ___ heute länger arbeiten.|muss|musst|müssen|müsst|2|Con wir: müssen.",
    "¿Cuál es correcta?|Ich will ein Auto kaufen.|Ich will kaufen ein Auto.|Ich will zu kaufen ein Auto.|Ich kaufen will ein Auto.|0|El infinitivo va al final y sin zu.",
    "Hier ___ man nicht rauchen. (prohibición)|muss|darf|kann|soll|1|La prohibición se expresa con nicht dürfen.",
    "Du ___ nicht kommen, wenn du keine Zeit hast.|darfst|musst|willst|sollst|1|nicht müssen significa que no es necesario.",
    "___ du mir bitte helfen?|Kannst|Kann|Könnt|Können|0|Con du: kannst.",
    "Ich ___ gern einen Tee. (petición cortés)|will|mag|möchte|muss|2|möchten es la forma de cortesía.",
    "Gestern ___ ich nicht kommen.|kann|konnte|gekonnt|könnte|1|En pasado se usa el Präteritum: konnte.",
    "Er ___ laut Arzt mehr Wasser trinken.|will|soll|darf|kann|1|Encargo de un tercero: sollen.",
    "Ihr ___ jetzt nach Hause gehen.|dürft|darfst|dürfen|darf|0|Con ihr: dürft."]},

{id:'trennbar',t:'Verbos separables e inseparables',sub:'Verbo',lvl:'A1',
 teoria:`
<h3>La diferencia está en el acento</h3>
<p>Si el prefijo lleva el <b>acento</b>, el verbo es <b>separable</b>: <i><b>AUF</b>stehen</i>. Si el acento recae en la raíz, es <b>inseparable</b>: <i>ver<b>STE</b>hen</i>.</p>
<h3>Cómo se comportan</h3>
<table class="endtable"><tr><th></th><th>Separable (aufstehen)</th><th>Inseparable (verstehen)</th></tr>
<tr><td>Presente</td><td>Ich stehe um sechs <b>auf</b>.</td><td>Ich verstehe alles.</td></tr>
<tr><td>Participio</td><td>auf<b>ge</b>standen</td><td>verstanden <i>(sin ge-)</i></td></tr>
<tr><td>Con zu</td><td>auf<b>zu</b>stehen</td><td>zu verstehen</td></tr>
<tr><td>Con modal</td><td>Ich muss <b>aufstehen</b>.</td><td>Ich muss verstehen.</td></tr></table>
<p>Con un verbo modal el separable <b>no se separa</b>: va entero al final.</p>
<h3>Prefijos separables (siempre tónicos)</h3>
<p><b>ab-, an-, auf-, aus-, bei-, ein-, mit-, nach-, vor-, zu-, zurück-, weg-, los-, hin-, her-, zusammen-, fern-, teil-, statt-</b></p>
<h3>Prefijos inseparables (siempre átonos)</h3>
<p><b>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</b>. Ninguno de estos verbos lleva <i>ge-</i> en el participio.</p>
<h3>Prefijos de doble comportamiento</h3>
<p><b>durch-, über-, um-, unter-, wieder-</b> son separables cuando conservan el sentido literal y espacial, e inseparables cuando el sentido es figurado.</p>
<p><i>Ich <b>ziehe um</b>.</i> (me mudo, separable) frente a <i>Ich <b>umarme</b> dich.</i> (te abrazo, inseparable).</p>
<p>Tampoco se separan los verbos terminados en <b>-ieren</b>, que además nunca llevan <i>ge-</i>: <i>studiert, telefoniert, organisiert</i>.</p>`,
 q:["Ich ___ jeden Tag um sieben ___.|stehe … auf|aufstehe … —|stehe auf … —|auf … stehe|0|El prefijo tónico se pospone: stehe … auf.",
    "El participio de einkaufen es|geeinkauft|eingekauft|einkaufen|gekauft ein|1|El ge- se intercala entre el prefijo y la raíz.",
    "El participio de verstehen es|geverstanden|verstanden|verstehen|gestanden|1|Los prefijos inseparables no admiten ge-.",
    "¿Cuál es correcta?|Ich muss früh aufstehen.|Ich muss früh auf stehen.|Ich muss auf früh stehen.|Ich auf muss früh stehen.|0|Con un modal el separable va entero al final.",
    "El participio de telefonieren es|getelefoniert|telefoniert|telefonieren|telefoniergt|1|Los verbos en -ieren no llevan ge-.",
    "¿Cuál de estos prefijos es siempre inseparable?|an-|ver-|mit-|zurück-|1|ver- es átono e inseparable.",
    "Er ruft seine Eltern jeden Abend ___.|an|auf|aus|ab|0|anrufen: el prefijo an cierra la oración.",
    "Es ist Zeit, ___.|aufzustehen|zu aufstehen|aufstehen zu|zu stehen auf|0|Con zu, la partícula se intercala: aufzustehen.",
    "Ich habe das Paket zur Post ___.|gebringt|gebracht|bringt|gebrachtet|1|bringen es mixto: gebracht.",
    "Wann ___ der Kurs ___?|fängt … an|anfängt … —|fangt … an|fängst … an|0|anfangen es separable y cambia a→ä en er/sie/es."]},

{id:'perfekt',t:'El Perfekt',sub:'Pasado',lvl:'A1',
 teoria:`
<h3>El pasado que se habla</h3>
<p>En la conversación alemana el pasado se expresa casi siempre con el <b>Perfekt</b>, no con el Präteritum. Se forma con <b>haben</b> o <b>sein</b> en presente más el <b>participio II</b>, que cierra la oración.</p>
<p><i>Ich <b>habe</b> gestern viel <b>gearbeitet</b>.</i> · <i>Ich <b>bin</b> um sieben <b>aufgestanden</b>.</i></p>
<h3>Formación del participio</h3>
<table class="endtable"><tr><th>Tipo</th><th>Esquema</th><th>Ejemplo</th></tr>
<tr><td>Regular</td><td>ge- + raíz + -t</td><td>machen → gemacht</td></tr>
<tr><td>Irregular</td><td>ge- + raíz alterada + -en</td><td>sprechen → gesprochen</td></tr>
<tr><td>Separable</td><td>prefijo + ge + raíz</td><td>aufstehen → aufgestanden</td></tr>
<tr><td>Inseparable</td><td>sin ge-</td><td>verstehen → verstanden</td></tr>
<tr><td>-ieren</td><td>sin ge-, con -t</td><td>studieren → studiert</td></tr></table>
<h3>haben o sein</h3>
<p><b>sein</b> con verbos intransitivos de <b>movimiento de un lugar a otro</b> (gehen, kommen, fahren, fliegen, laufen) y de <b>cambio de estado</b> (aufstehen, einschlafen, werden, sterben), más los irregulares <b>sein</b> y <b>bleiben</b>.</p>
<p><b>haben</b> en todos los demás casos, y siempre que haya objeto directo: <i>Ich habe das Auto gefahren.</i></p>
<h3>Errores frecuentes</h3>
<p>El participio no se conjuga nunca: solo cambia el auxiliar. Y el participio ocupa siempre la <b>última</b> posición, por muy larga que sea la frase.</p>`,
 q:["Ich ___ gestern einen Film gesehen.|bin|habe|hat|war|1|sehen forma el perfecto con haben.",
    "Wir ___ nach Berlin gefahren.|haben|sind|seid|waren|1|fahren intransitivo de movimiento: sein.",
    "El participio de arbeiten es|gearbeitet|gearbeit|arbeitet|gearbeited|0|Raíz en -t: ge + arbeit + et.",
    "Sie ___ um sechs Uhr aufgestanden.|hat|ist|haben|war|1|aufstehen indica cambio de estado: sein.",
    "El participio de studieren es|gestudiert|studiert|gestudieren|studieren|1|Los verbos en -ieren no llevan ge-.",
    "¿Cuál es correcta?|Ich habe gegessen einen Apfel.|Ich habe einen Apfel gegessen.|Ich einen Apfel habe gegessen.|Ich habe einen Apfel essen.|1|El participio cierra la oración.",
    "Er ___ zu Hause geblieben.|hat|ist|war|hatte|1|bleiben forma el perfecto con sein pese a no indicar movimiento.",
    "El participio de anrufen es|geanrufen|angerufen|anrufen|angeruft|1|Separable: an + ge + rufen.",
    "Was ___ du am Wochenende gemacht?|bist|hast|hat|warst|1|machen rige haben; con du: hast.",
    "Ich ___ gestern sehr müde ___.|habe … gewesen|bin … gewesen|habe … gewest|bin … gewest|1|sein forma su propio perfecto con sein: ich bin gewesen."]}
];

const GRAM3=[
{id:'praeteritum',t:'El Präteritum',sub:'Pasado',lvl:'A2',
 teoria:`
<h3>El pasado que se escribe</h3>
<p>El <b>Präteritum</b> es la forma narrativa: relatos, noticias, literatura, informes. En la conversación se reserva a un grupo reducido de verbos de altísima frecuencia, donde es la forma normal también al hablar: <b>sein, haben, werden</b>, los <b>modales</b> y algunos como <i>gehen, kommen, wissen, geben</i>.</p>
<h3>Verbos regulares</h3>
<p>Raíz + marca <b>-te-</b> + terminación. La raíz no cambia nunca.</p>
<table class="endtable"><tr><th>Persona</th><th>machen</th><th>arbeiten</th></tr>
<tr><td>ich</td><td>machte</td><td>arbeitete</td></tr>
<tr><td>du</td><td>machtest</td><td>arbeitetest</td></tr>
<tr><td>er/sie/es</td><td>machte</td><td>arbeitete</td></tr>
<tr><td>wir</td><td>machten</td><td>arbeiteten</td></tr>
<tr><td>ihr</td><td>machtet</td><td>arbeitetet</td></tr>
<tr><td>sie/Sie</td><td>machten</td><td>arbeiteten</td></tr></table>
<h3>Verbos irregulares</h3>
<p>Cambian la vocal de la raíz y <b>no llevan -te-</b>. Las personas <i>ich</i> y <i>er/sie/es</i> van <b>sin terminación</b>.</p>
<table class="endtable"><tr><th>Persona</th><th>gehen</th><th>fahren</th><th>sprechen</th></tr>
<tr><td>ich / er</td><td>ging</td><td>fuhr</td><td>sprach</td></tr>
<tr><td>du</td><td>gingst</td><td>fuhrst</td><td>sprachst</td></tr>
<tr><td>wir / sie</td><td>gingen</td><td>fuhren</td><td>sprachen</td></tr>
<tr><td>ihr</td><td>gingt</td><td>fuhrt</td><td>spracht</td></tr></table>
<h3>Los imprescindibles</h3>
<p><i>ich war</i> (sein) · <i>ich hatte</i> (haben) · <i>ich wurde</i> (werden) · <i>ich konnte, musste, wollte, durfte, sollte, mochte</i> · <i>ich wusste</i> (wissen) · <i>ich dachte</i> (denken).</p>
<p>Decir <i>Ich bin müde gewesen</i> no es incorrecto, pero suena forzado: la forma natural es <i>Ich <b>war</b> müde</i>.</p>`,
 q:["Gestern ___ ich sehr müde.|bin|war|hatte|wurde|1|Präteritum de sein: ich war.",
    "Als Kind ___ ich viel Zeit.|habe|hatte|hätte|hat|1|Präteritum de haben: ich hatte.",
    "Er ___ gestern früh ins Bett.|gehte|ging|gegangen|geht|1|gehen es irregular: ging, sin -te-.",
    "Wir ___ am Samstag im Park.|spielten|spielen|spielte|gespielt|0|Regular en plural: spielten.",
    "___ du gestern im Kino?|Warst|Warest|Wart|Bist|0|Präteritum de sein con du: warst.",
    "Ich ___ nicht, wo der Schlüssel war.|weiß|wusste|gewusst|wisste|1|wissen es mixto: wusste.",
    "Sie ___ letzte Woche nach Wien.|fahrte|fuhr|gefahren|fährt|1|fahren: fuhr.",
    "Ihr ___ sehr laut.|wart|wart nicht|seid|warst|0|Präteritum de sein con ihr: wart.",
    "Der Kurs ___ um neun Uhr an.|fing|fangte|angefangen|fängt|0|anfangen: fing … an.",
    "Ich ___ gestern zwei Stunden.|arbeitete|arbeitte|arbeite|gearbeitet|0|Raíz en -t: arbeit + ete."]},

{id:'futur',t:'El futuro (Futur I)',sub:'Futuro',lvl:'A2',
 teoria:`
<h3>La forma</h3>
<p><b>werden</b> conjugado + <b>infinitivo</b> al final de la oración.</p>
<table class="endtable"><tr><th>Persona</th><th>werden</th><th>Ejemplo</th></tr>
<tr><td>ich</td><td>werde</td><td>Ich werde morgen kommen.</td></tr>
<tr><td>du</td><td>wirst</td><td>Du wirst es schaffen.</td></tr>
<tr><td>er/sie/es</td><td>wird</td><td>Es wird regnen.</td></tr>
<tr><td>wir</td><td>werden</td><td>Wir werden umziehen.</td></tr>
<tr><td>ihr</td><td>werdet</td><td>Ihr werdet müde sein.</td></tr>
<tr><td>sie/Sie</td><td>werden</td><td>Sie werden anrufen.</td></tr></table>
<h3>Cuándo se usa de verdad</h3>
<p>Para hablar del futuro cercano el alemán prefiere el <b>presente con una marca temporal</b>: <i>Morgen fahre ich nach Berlin</i>. El Futur I se reserva para:</p>
<p><b>1. Predicciones y suposiciones:</b> <i>Es wird regnen.</i> · <i>Er wird wohl krank sein</i> (seguramente está enfermo).<br>
<b>2. Promesas y propósitos firmes:</b> <i>Ich werde dir helfen.</i><br>
<b>3. Futuro lejano o sin marca temporal:</b> <i>Eines Tages werde ich in Deutschland leben.</i></p>
<h3>Ojo con werden</h3>
<p><i>werden</i> tiene tres funciones distintas: verbo pleno «llegar a ser» (<i>Ich werde Lehrer</i>), auxiliar de futuro (<i>Ich werde arbeiten</i>) y auxiliar de pasiva (<i>Das Haus wird gebaut</i>). Lo que va al final decide de cuál se trata.</p>`,
 q:["Ich ___ morgen anrufen.|werde|wirst|wird|werden|0|Con ich: werde.",
    "Es ___ heute Abend regnen.|werde|wirst|wird|werden|2|Con es: wird.",
    "¿Cuál es correcta?|Ich werde kaufen ein Auto.|Ich werde ein Auto kaufen.|Ich ein Auto werde kaufen.|Ich werde ein Auto zu kaufen.|1|El infinitivo cierra la oración.",
    "Du ___ das sicher schaffen.|wirst|wird|werdest|werden|0|Con du: wirst.",
    "Para un plan de mañana lo más natural en alemán es|Morgen werde ich arbeiten.|Morgen arbeite ich.|Morgen bin ich arbeiten.|Morgen habe ich gearbeitet.|1|Con marca temporal el presente basta y es lo habitual.",
    "Wir ___ nächstes Jahr umziehen.|werde|wirst|werden|werdet|2|Con wir: werden.",
    "Er ___ wohl im Büro sein.|wird|werde|werdet|wurde|0|Suposición sobre el presente: wird … sein.",
    "Ihr ___ bald Deutsch sprechen.|werden|werdet|wird|werdest|1|Con ihr: werdet.",
    "En Ich werde Lehrer, werden funciona como|auxiliar de futuro|verbo pleno|auxiliar de pasiva|verbo modal|1|Sin infinitivo al final, werden significa llegar a ser.",
    "Sie ___ uns morgen besuchen.|wird|werden|werdet|wirst|1|Con sie plural o forma de cortesía: werden."]},

{id:'wechsel',t:'Wechselpräpositionen',sub:'Preposiciones',lvl:'A2',
 teoria:`
<h3>Nueve preposiciones, dos casos</h3>
<p><b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b> rigen <b>acusativo</b> o <b>dativo</b> según lo que se exprese:</p>
<table class="endtable"><tr><th>Caso</th><th>Pregunta</th><th>Sentido</th><th>Ejemplo</th></tr>
<tr><td>Acusativo</td><td>wohin?</td><td>movimiento con cambio de lugar</td><td>Ich gehe <b>in die</b> Küche.</td></tr>
<tr><td>Dativo</td><td>wo?</td><td>posición, sin cambio de lugar</td><td>Ich bin <b>in der</b> Küche.</td></tr></table>
<p>La clave no es que haya movimiento, sino que el movimiento <b>cruce una frontera</b>. <i>Ich laufe im Park</i> (corro dentro del parque, dativo) frente a <i>Ich laufe in den Park</i> (entro corriendo en el parque, acusativo).</p>
<h3>Verbos que las acompañan</h3>
<table class="endtable"><tr><th>Acusativo (wohin)</th><th>Dativo (wo)</th></tr>
<tr><td>stellen, legen, setzen, hängen (poner)</td><td>stehen, liegen, sitzen, hängen (estar)</td></tr>
<tr><td>Ich stelle das Glas auf den Tisch.</td><td>Das Glas steht auf dem Tisch.</td></tr></table>
<h3>Contracciones obligatorias</h3>
<p><i>in dem → <b>im</b></i> · <i>in das → <b>ins</b></i> · <i>an dem → <b>am</b></i> · <i>an das → <b>ans</b></i> · <i>auf das → <b>aufs</b></i> · <i>zu dem → <b>zum</b></i> · <i>zu der → <b>zur</b></i> · <i>bei dem → <b>beim</b></i> · <i>von dem → <b>vom</b></i></p>
<h3>Usos temporales fijos</h3>
<p>Con expresiones de tiempo estas preposiciones van <b>siempre en dativo</b>: <i>am Montag</i>, <i>am Abend</i>, <i>im Sommer</i>, <i>in einer Woche</i>, <i>vor zwei Jahren</i>.</p>`,
 q:["Ich gehe ___ Küche.|in der|in die|in den|im|1|Movimiento con cambio de lugar: acusativo, in die Küche.",
    "Das Buch liegt ___ Tisch.|auf den|auf dem|auf der|aufs|1|Posición estática: dativo, auf dem Tisch.",
    "Wir fahren ___ Berge.|in die|in den|in der|im|0|wohin con plural: acusativo, in die Berge.",
    "Das Bild hängt ___ Wand.|an die|an der|an dem|ans|1|Estado: dativo femenino, an der Wand.",
    "Ich stelle die Flasche ___ Kühlschrank.|im|in den|in dem|in der|1|stellen indica cambio de lugar: acusativo.",
    "Er wartet ___ Bahnhof.|am|ans|an den|an die|0|Posición: an dem se contrae en am.",
    "Die Katze schläft ___ Sofa.|auf das|aufs|auf dem|auf den|2|Estado: dativo neutro, auf dem Sofa.",
    "___ Montag habe ich frei.|Am|Im|An dem|In dem|0|Con días de la semana: am Montag.",
    "Setz dich bitte ___ Stuhl.|auf dem|auf den|auf der|aufs den|1|sich setzen implica cambio de posición: acusativo.",
    "Wir treffen uns ___ Kino.|ins|im|in das|in den|1|Punto de encuentro estático: im Kino."]},

{id:'adverbien',t:'Adverbios y el orden TEKAMOLO',sub:'Sintaxis',lvl:'A2',
 teoria:`
<h3>Qué es TEKAMOLO</h3>
<p>Regla mnemotécnica para ordenar los complementos circunstanciales en el centro de la oración alemana:</p>
<table class="endtable"><tr><th>Sigla</th><th>Tipo</th><th>Pregunta</th><th>Ejemplos</th></tr>
<tr><td>TE</td><td>temporal</td><td>wann? wie lange? wie oft?</td><td>heute, morgen, oft, seit zwei Jahren</td></tr>
<tr><td>KA</td><td>causal</td><td>warum? weshalb?</td><td>wegen des Wetters, aus Angst, deshalb</td></tr>
<tr><td>MO</td><td>modal</td><td>wie? womit? mit wem?</td><td>gern, schnell, mit dem Bus, allein</td></tr>
<tr><td>LO</td><td>local</td><td>wo? wohin? woher?</td><td>hier, nach Berlin, im Büro, zu Hause</td></tr></table>
<p><i>Ich fahre <b>morgen</b> (TE) <b>wegen der Arbeit</b> (KA) <b>mit dem Zug</b> (MO) <b>nach Berlin</b> (LO).</i></p>
<h3>No es una camisa de fuerza</h3>
<p>Cualquiera de los cuatro puede adelantarse a la <b>posición 1</b> para destacarlo, y entonces el sujeto pasa detrás del verbo: <i><b>Nach Berlin</b> fahre ich morgen mit dem Zug.</i> El resto conserva el orden relativo.</p>
<h3>Adverbios de frecuencia</h3>
<p>De mayor a menor: <b>immer</b> (siempre) · <b>meistens</b> (casi siempre) · <b>oft</b> (a menudo) · <b>manchmal</b> (a veces) · <b>selten</b> (raramente) · <b>nie</b> (nunca). Son temporales: ocupan el lugar de TE.</p>
<h3>La posición de nicht</h3>
<p><b>nicht</b> va al final si niega toda la frase (<i>Ich kenne ihn nicht</i>), pero se coloca <b>delante</b> del elemento que niega si es parcial: delante del adjetivo (<i>Das ist nicht teuer</i>), del complemento local (<i>Ich fahre nicht nach Berlin</i>) y siempre delante del participio o del infinitivo final.</p>`,
 q:["Ordene: mit dem Bus / ich / fahre / morgen / zur Arbeit|Ich fahre morgen mit dem Bus zur Arbeit.|Ich fahre mit dem Bus morgen zur Arbeit.|Ich fahre zur Arbeit morgen mit dem Bus.|Ich morgen fahre mit dem Bus zur Arbeit.|0|Orden TE - MO - LO.",
    "¿Qué significa la KA de TEKAMOLO?|causal|kausativ|local|modal|0|KA corresponde a los complementos causales.",
    "Ich gehe ___ ins Kino.|ins Kino oft|oft|gern oft|nach oft|1|El adverbio de frecuencia es temporal y precede al local.",
    "¿Cuál es correcta?|Er fährt nach Berlin morgen.|Er fährt morgen nach Berlin.|Er morgen fährt nach Berlin.|Morgen er fährt nach Berlin.|1|Lo temporal precede a lo local.",
    "En Ich arbeite heute zu Hause, zu Hause es un complemento|temporal|modal|local|causal|2|Responde a wo: es local.",
    "Sitúe wegen des Wetters en la secuencia TEKAMOLO|antes de lo temporal|entre lo temporal y lo modal|al final|antes del verbo|1|Lo causal ocupa el segundo lugar, tras lo temporal.",
    "Ich fahre ___ mit dem Auto.|nicht gern|gern nicht|nicht gerne nicht|kein gern|0|La negación precede al elemento negado.",
    "¿Cuál expresa mayor frecuencia?|manchmal|selten|meistens|nie|2|meistens está solo por debajo de immer.",
    "Ordene: ich / heute / bin / müde / sehr|Ich bin heute sehr müde.|Ich bin sehr müde heute.|Heute ich bin sehr müde.|Ich heute bin sehr müde.|0|El temporal precede al predicado y el verbo se mantiene en posición 2.",
    "En Morgen fahre ich nach Wien, ¿por qué va fahre antes de ich?|Es una pregunta|Porque morgen ocupa la posición 1|Porque fahren es irregular|Porque nach Wien es dativo|1|La inversión coloca el sujeto tras el verbo."]},

{id:'adjektive',t:'Declinación y comparación del adjetivo',sub:'Adjetivo',lvl:'A2',
 teoria:`
<h3>Dos posiciones, dos comportamientos</h3>
<p><b>Predicativo</b> (tras sein, werden, bleiben): <b>no se declina nunca</b>. <i>Das Haus ist <b>groß</b>.</i></p>
<p><b>Atributivo</b> (delante del sustantivo): <b>siempre</b> lleva terminación. <i>ein <b>großes</b> Haus</i>.</p>
<h3>Las tres declinaciones</h3>
<p><b>Débil</b> — tras der, die, das, dieser, jeder: el artículo ya informa del caso, así que el adjetivo se limita a <b>-e</b> o <b>-en</b>.</p>
<table class="endtable"><tr><th>Caso</th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>Nom</td><td>-e</td><td>-e</td><td>-e</td><td>-en</td></tr>
<tr><td>Akk</td><td>-en</td><td>-e</td><td>-e</td><td>-en</td></tr>
<tr><td>Dat</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
<tr><td>Gen</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr></table>
<p><b>Mixta</b> — tras ein, kein, mein: como <i>ein</i> no marca el género en tres casillas, el adjetivo asume ahí la marca fuerte (<b>-er, -es</b>).</p>
<table class="endtable"><tr><th>Caso</th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>Nom</td><td>-er</td><td>-e</td><td>-es</td><td>-en</td></tr>
<tr><td>Akk</td><td>-en</td><td>-e</td><td>-es</td><td>-en</td></tr>
<tr><td>Dat</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
<tr><td>Gen</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr></table>
<p><b>Fuerte</b> — sin artículo: el adjetivo carga con toda la información y adopta las terminaciones del artículo determinado.</p>
<table class="endtable"><tr><th>Caso</th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>Nom</td><td>-er</td><td>-e</td><td>-es</td><td>-e</td></tr>
<tr><td>Akk</td><td>-en</td><td>-e</td><td>-es</td><td>-e</td></tr>
<tr><td>Dat</td><td>-em</td><td>-er</td><td>-em</td><td>-en</td></tr>
<tr><td>Gen</td><td>-en</td><td>-er</td><td>-en</td><td>-er</td></tr></table>
<h3>Comparativo y superlativo</h3>
<p>Comparativo: <b>-er</b> + <i>als</i>. Superlativo: <b>am …-sten</b> o <b>der/die/das …-ste</b>.</p>
<p><i>klein → kleiner als → am kleinsten</i>. Los monosílabos con a, o, u suelen tomar Umlaut: <i>alt → älter → am ältesten</i>. Irregulares imprescindibles: <b>gut → besser → am besten</b>, <b>viel → mehr → am meisten</b>, <b>gern → lieber → am liebsten</b>, <b>hoch → höher</b>, <b>nah → näher</b>.</p>`,
 q:["Das ist ein ___ Haus.|groß|großes|großen|große|1|Declinación mixta, neutro nominativo: -es.",
    "Ich kaufe den ___ Wagen.|rot|rote|roten|roter|2|Declinación débil, masculino acusativo: -en.",
    "Die ___ Frau ist meine Lehrerin.|jung|junge|jungen|junger|1|Débil, femenino nominativo: -e.",
    "Er trinkt ___ Kaffee.|schwarz|schwarzer|schwarzen|schwarzes|2|Sin artículo: declinación fuerte. En acusativo masculino la terminación es -en: schwarzen Kaffee.",
    "Mit dem ___ Auto fahre ich gern.|neu|neue|neuen|neues|2|Débil, dativo: siempre -en.",
    "Das Haus ist sehr ___.|großes|groß|große|großer|1|En posición predicativa el adjetivo no se declina.",
    "Berlin ist ___ als Bonn.|groß|größer|am größten|größte|1|Comparativo con Umlaut: größer als.",
    "Das ist ___ Buch von allen.|das beste|der beste|am besten|besser|0|Superlativo atributivo con neutro: das beste Buch.",
    "Ich trinke ___ Tee als Kaffee.|lieber|gerner|mehr gern|am liebsten|0|El comparativo de gern es lieber.",
    "Sie hat eine ___ Idee.|gut|gute|guten|gutes|1|Mixta, femenino nominativo: -e."]}
];

/* ============ PREFIJOS VERBALES ============ */
const GRAM0=[
{id:'aussprache',t:'El alfabeto y la pronunciación del alemán',sub:'Fonética',lvl:'A1',
 teoria:`
<h3>El alfabeto y su deletreo</h3>
<p>El alemán emplea las veintiséis letras del alfabeto latino más tres vocales con diéresis (<i>ä, ö, ü</i>) y la <b>Eszett</b> <i>ß</i>, que no es una letra independiente sino una variante gráfica de la sibilante sorda. Deletrear (<i>buchstabieren</i>) es una destreza operativa desde el primer día, porque se pide continuamente al dar un apellido o una dirección. Conviene fijar los nombres que no coinciden con los españoles: <i>c</i> [tseː], <i>g</i> [ɡeː], <i>h</i> [haː], <i>j</i> [jɔt], <i>q</i> [kuː], <i>v</i> [faʊ̯], <i>w</i> [veː], <i>y</i> [ˈʏpsilɔn], <i>z</i> [tsɛt]. La <i>ß</i> se nombra <i>Eszett</i> o <i>scharfes S</i>.</p>
<h3>La cantidad vocálica: la oposición que el español no posee</h3>
<p>El rasgo más rentable del sistema es la <b>cantidad</b>: cada vocal se opone a sí misma por duración y, solidariamente, por timbre. La larga es tensa y cerrada; la breve, laxa y abierta. La oposición es funcional y distingue unidades léxicas: <i>Miete</i> [ˈmiːtə] frente a <i>Mitte</i> [ˈmɪtə], <i>Beet</i> [beːt] frente a <i>Bett</i> [bɛt], <i>Ofen</i> [ˈoːfn̩] frente a <i>offen</i> [ˈɔfn̩], <i>Staat</i> [ʃtaːt] frente a <i>Stadt</i> [ʃtat]. La ortografía la señala con tres marcas de longitud: <b>vocal doble</b> (<i>Saal, Meer, Boot</i>), <b>h muda</b> de alargamiento (<i>Zahn, ihn, Ruhe</i>) y el dígrafo <i>ie</i> [iː] (<i>Liebe, viel</i>). A la inversa, la <b>consonante geminada</b> no se articula doble: es solo un diacrítico que indica que la vocal precedente es breve (<i>kommen, Sonne, essen</i>). De ahí la heurística: consonante simple tras vocal, vocal larga; consonante doble, vocal breve.</p>
<h3>Diptongos y vocales anteriores redondeadas</h3>
<p>Solo hay tres diptongos: <i>ei</i> y <i>ai</i> = [aɪ̯] (<i>Ei, mein, Mai</i>), <i>au</i> = [aʊ̯] (<i>Haus, laufen</i>) y <i>eu</i> y <i>äu</i> = [ɔʏ̯] (<i>heute, Häuser</i>). El error más persistente del hispanohablante consiste en leer <i>ie</i> como el diptongo de <i>pie</i>: en alemán es una <i>i</i> larga y monoptongal. Compárese <i>Wein</i> [vaɪ̯n] con <i>Wien</i> [viːn].</p>
<p>Las vocales <b>anteriores redondeadas</b> <i>ü</i> [yː] y [ʏ] y <i>ö</i> [øː] y [œ] carecen de equivalente español y exigen disociar dos gestos articulatorios: la lengua adopta la posición de [i] o de [e] y los labios, la de [u] o de [o]. Son plenamente distintivas: <i>Kiste</i> frente a <i>Küste</i>, <i>missen</i> frente a <i>müssen</i>, <i>lesen</i> frente a <i>lösen</i>, <i>schon</i> frente a <i>schön</i>. Sustituirlas por <i>u</i> u <i>o</i> destruye pares léxicos: <i>Mutter</i> no es <i>Mütter</i>.</p>
<h3>Schwa y erre vocalizada</h3>
<p>La <i>-e</i> final átona no es la <i>e</i> española, sino un <b>schwa</b> [ə], vocal central relajada: <i>bitte</i> [ˈbɪtə], <i>Blume</i> [ˈbluːmə]. La secuencia <i>-er</i> final o átona no se realiza con consonante alguna, sino como una <b>a</b> abierta y relajada, [ɐ]: <i>Vater</i> [ˈfaːtɐ], <i>besser</i> [ˈbɛsɐ], y otro tanto ocurre en los prefijos <i>ver-, er-, zer-</i>.</p>
<h3>Consonantes críticas para un hispanohablante</h3>
<table class="endtable"><tr><th>Grafía</th><th>Sonido</th><th>Ejemplo</th></tr>
<tr><td>ch tras i, e, ä, ö, ü, ei, eu, l, n, r</td><td>[ç] Ich-Laut</td><td>ich [ɪç], Bücher [ˈbyːçɐ], Milch</td></tr>
<tr><td>ch tras a, o, u, au</td><td>[x] Ach-Laut</td><td>Bach [bax], Buch [buːx], auch</td></tr>
<tr><td>r inicial o prevocálica</td><td>[ʁ] uvular</td><td>rot [ʁoːt], Frau [fʁaʊ̯]</td></tr>
<tr><td>r final o tras vocal larga</td><td>[ɐ̯] vocalizada</td><td>Uhr [uːɐ̯], Bier [biːɐ̯]</td></tr>
<tr><td>z, tz</td><td>[ts] africada</td><td>Zeit [tsaɪ̯t], Katze [ˈkatsə]</td></tr>
<tr><td>s ante vocal</td><td>[z] sonora</td><td>Sonne [ˈzɔnə], lesen [ˈleːzn̩]</td></tr>
<tr><td>s final o ante consonante</td><td>[s] sorda</td><td>Haus [haʊ̯s], Wespe</td></tr>
<tr><td>sch</td><td>[ʃ]</td><td>Schule [ˈʃuːlə], waschen</td></tr>
<tr><td>sp-, st- en inicio de raíz</td><td>[ʃp], [ʃt]</td><td>Sport [ʃpɔʁt], Straße [ˈʃtʁaːsə]</td></tr>
<tr><td>v</td><td>[f] patrimonial, [v] en préstamos</td><td>Vater [ˈfaːtɐ], Vase [ˈvaːzə]</td></tr>
<tr><td>w</td><td>[v] labiodental</td><td>Wasser [ˈvasɐ], wo</td></tr>
<tr><td>j</td><td>[j] aproximante</td><td>ja [jaː], Jahr</td></tr>
<tr><td>h inicial de raíz</td><td>[h] aspirada</td><td>Haus, haben, woher</td></tr>
<tr><td>pf</td><td>[pf] africada</td><td>Apfel [ˈapfl̩], Kopf [kɔpf]</td></tr>
<tr><td>ng</td><td>[ŋ] sin oclusión</td><td>singen [ˈzɪŋən], lang [laŋ]</td></tr></table>
<p>Tres advertencias. La <i>w</i> no es la semiconsonante española de <i>hueso</i>, sino la fricativa labiodental sonora; la <i>z</i> nunca es [s] ni [θ], sino una africada [ts] que exige oclusión previa; y la <i>ng</i> no lleva [ɡ] audible.</p>
<h3>Ensordecimiento final y ataque glotal</h3>
<p>En final de sílaba o de palabra, las oclusivas y fricativas sonoras se ensordecen: es la <b>Auslautverhärtung</b>. Así, <i>b, d, g, s</i> se realizan [p], [t], [k], [s]: <i>Tag</i> [taːk] frente a <i>Tage</i> [ˈtaːɡə]; <i>Kind</i> [kɪnt] frente a <i>Kinder</i> [ˈkɪndɐ]; <i>gelb</i> [ɡɛlp] frente a <i>gelbe</i>. El sufijo <i>-ig</i> se pronuncia [ɪç] en la norma: <i>König</i> [ˈkøːnɪç], <i>wichtig</i>. Por otra parte, toda palabra o morfema que empieza por vocal recibe un <b>ataque glotal</b> [ʔ], breve oclusión de las cuerdas vocales: <i>am Abend</i> [am ˈʔaːbn̩t], <i>beobachten</i> [bəˈʔoːbaxtn̩]. Ese corte impide el enlace continuo que el español practica por defecto y sostiene contrastes como <i>vereisen</i> [fɛɐ̯ˈʔaɪ̯zn̩] frente a <i>verreisen</i> [fɛɐ̯ˈʁaɪ̯zn̩].</p>
<h3>Acento de palabra y entonación</h3>
<p>En la palabra patrimonial simple el acento recae en la <b>primera sílaba de la raíz</b>: <i>Arbeit, machen, Fenster</i>. El <b>compuesto</b> acentúa su primer miembro, que es el determinante: <i>Haustür, Sprachkurs, Bahnhofstraße</i>. Los verbos de <b>prefijo separable</b> acentúan el prefijo (<i>anrufen, aufstehen, mitkommen</i>); los de <b>prefijo inseparable</b> —be-, ge-, er-, ver-, zer-, ent-, emp-, miss-— acentúan la raíz (<i>verstehen, bekommen, erzählen</i>). El contraste llega a ser distintivo: <i>umfahren</i> con acento en <i>um</i> es separable y significa atropellar; con acento en <i>fahren</i> es inseparable y significa rodear. Los <b>préstamos</b> desplazan el acento a la última sílaba o a la penúltima: <i>Student, Musik, Natur, Hotel, Universität</i>. En cuanto a la entonación, el enunciado y la pregunta parcial descienden al final; la pregunta total, que carece de partícula interrogativa, <b>asciende</b>, y ese movimiento es a menudo la única marca que la separa oralmente de un enunciado.</p>
`,
 q:["¿Cómo se realiza la ch de Bücher?|[x] velar|[k] oclusiva|[ç] palatal|[ʃ] postalveolar|2|Tras vocal anterior o palatal se articula el Ich-Laut [ç]; el Ach-Laut [x] solo aparece tras a, o, u y au.",
    "¿Qué par opone vocal larga y vocal breve?|Miete y Mitte|Haus y Maus|rot y tot|Wein y mein|0|La geminada -tt- de Mitte marca vocal breve [ɪ] y la -t- simple de Miete, vocal larga [iː]; los demás pares solo difieren en una consonante.",
    "La grafía ie de viel representa...|el diptongo [je]|dos sílabas distintas|una i breve [ɪ]|una i larga [iː]|3|En alemán ie no es diptongo sino marca gráfica de longitud vocálica.",
    "¿Cuál es la pronunciación normativa de Tag?|[taːɡ]|[taːk]|[tak]|[taːx]|1|Por Auslautverhärtung la g final se ensordece en [k], aunque en Tage se conserve [ɡ] y la vocal siga siendo larga.",
    "La s inicial de Sonne se pronuncia...|[z] sonora|[s] sorda|[ʃ]|[ts]|0|Ante vocal la s alemana es sonora; solo en final de sílaba o ante consonante se ensordece.",
    "¿En qué palabra la secuencia st se realiza [ʃt]?|Fenster|Kasten|Straße|Fest|2|La pronunciación [ʃt] se limita al inicio de raíz o de palabra; en interior de palabra se mantiene [st].",
    "El acento de umfahren en el sentido de rodear recae...|en um, porque el prefijo es separable|en fahren, porque el prefijo es inseparable|siempre en la última sílaba|de forma indiferente|1|Con ese significado um es prefijo inseparable y átono, de modo que el acento se sitúa en la raíz.",
    "La secuencia final -er de Vater se realiza como...|[ɛr] con vibrante alveolar|[ər] con schwa más erre|[a] plena y tensa|[ɐ] vocálica|3|En posición final átona la erre se vocaliza y produce una a abierta y relajada.",
    "¿Cuál de estas palabras contiene la africada [ts]?|Sonne|sitzen|singen|Rasen|1|La grafía tz, igual que z, representa una africada [ts] con oclusión previa, nunca una simple sibilante.",
    "¿Qué configuración articulatoria exige la ü de Küste?|lengua en posición de i y labios redondeados|lengua en posición de u y labios estirados|lengua en posición de o y labios de e|la misma que la u española|0|Es una vocal anterior redondeada: se combina la posición lingual de [i] con el redondeamiento labial de [u]."]},

{id:'rechtschreibung',t:'Ortografía: mayúsculas, ß frente a ss y separación',sub:'Fonética',lvl:'A1',
 teoria:`
<h3>La mayúscula del sustantivo</h3>
<p>El alemán escribe con inicial mayúscula <b>todos</b> los sustantivos, no solo los propios: <i>der Tisch, die Freiheit, das Wasser</i>. No se trata de un residuo tipográfico ornamental: la mayúscula funciona como <b>señal de núcleo nominal</b> y permite delimitar de un vistazo el sintagma, ventaja considerable en una lengua de grupos nominales largos y verbo desplazado. El hispanohablante falla casi siempre por defecto, olvidando la mayúscula en los sustantivos comunes.</p>
<h3>Lo sustantivado</h3>
<p>Lleva mayúscula todo aquello que <b>funciona</b> como sustantivo, sea cual sea su clase de origen. Las señales que la obligan son:</p>
<ul>
<li>artículo o preposición contraída delante: <i>das Lesen, beim Essen, zum Schwimmen, im Voraus</i>;</li>
<li>adjetivo o participio con determinante: <i>der Alte, das Gute, die Deutschen, der Angestellte</i>;</li>
<li>adjetivo tras <i>etwas, nichts, viel, wenig, allerlei</i>: <i>etwas Neues, nichts Besonderes, viel Interessantes</i>;</li>
<li>cualquier palabra citada como unidad: <i>das Aber, ein klares Nein</i>.</li>
</ul>
<p>Permanecen en minúscula, en cambio, los adjetivos de nacionalidad en función atributiva (<i>die deutsche Sprache</i>), frente al nombre de la lengua, que es sustantivo (<i>Ich lerne Deutsch</i>, <i>auf Deutsch</i>). Los derivados de topónimo en <i>-er</i> son invariables y van en mayúscula: <i>die Berliner Mauer, der Wiener Kaffee</i>.</p>
<h3>El Sie de cortesía</h3>
<p>El pronombre de cortesía <b>Sie</b>, sus formas flexivas (<i>Ihnen</i>) y su posesivo <b>Ihr</b> se escriben siempre con mayúscula, ocupen la posición que ocupen: <i>Können Sie mir helfen?</i> · <i>Ist das Ihr Mantel?</i> La mayúscula es la <b>única</b> marca gráfica que separa <i>Sie</i> de <i>sie</i> (ella, ellos) y <i>Ihr</i> de <i>ihr</i> (vosotros, o el posesivo de ella). Desde 2006 se admite escribir <i>Du</i> y <i>Dein</i> con mayúscula en cartas, pero es facultativo.</p>
<h3>ß frente a ss</h3>
<p>La regla vigente desde la reforma de 1996 es <b>fonológica</b>, no etimológica: la sibilante sorda se escribe <b>ß</b> tras vocal larga o diptongo y <b>ss</b> tras vocal breve.</p>
<table class="endtable"><tr><th>Contexto</th><th>Grafía</th><th>Ejemplos</th></tr>
<tr><td>tras vocal larga</td><td>ß</td><td>Straße, Fuß, groß, Maß, Gruß</td></tr>
<tr><td>tras diptongo</td><td>ß</td><td>heißen, weiß, außen, beißen</td></tr>
<tr><td>tras vocal breve</td><td>ss</td><td>Fluss, muss, dass, essen, wissen</td></tr>
<tr><td>Suiza y Liechtenstein</td><td>ss siempre</td><td>Strasse, Fuss, gross</td></tr>
<tr><td>en versalitas</td><td>SS o ẞ</td><td>STRASSE, STRAẞE</td></tr></table>
<p>La regla convierte la grafía en información fonética fiable: <i>Maße</i> (medidas), con vocal larga, frente a <i>Masse</i> (masa), con vocal breve. El error más frecuente es reproducir las formas anteriores a 1996, <i>daß</i> y <i>muß</i>, hoy incorrectas.</p>
<h3>Separación silábica</h3>
<p>Se divide por sílabas habladas. Una consonante intervocálica pasa entera a la sílaba siguiente (<i>ge-hen, Bru-der, Blu-me</i>); de un grupo consonántico, solo la última (<i>Fens-ter, Wör-ter, kämp-fen, Kas-ten</i>). Desde 1996 la secuencia <i>st</i> se separa como cualquier otra. No se dividen nunca los dígrafos <i>ch, sch, ph, th, rh</i> ni <i>ck</i> (<i>la-chen, Fla-sche, Zu-cker</i>), ni la <i>ß</i> (<i>Stra-ße</i>), mientras que <i>ss</i> sí se parte (<i>Was-ser, müs-sen</i>). Los compuestos y los prefijos se separan por su <b>límite morfológico</b>: <i>Haus-tür, Vor-aus-setzung, be-arbeiten</i>. Una vocal sola en inicio de palabra no se aísla: se escribe <i>Abend</i>, no <i>A-bend</i>.</p>
<h3>Puntuación</h3>
<p>No existen los signos de apertura españoles. La divergencia decisiva está en la <b>coma</b>: el alemán la exige ante <b>toda</b> oración subordinada, aunque el español no la ponga. <i>Ich weiß, dass er kommt.</i> · <i>Der Mann, der dort steht, ist mein Onkel.</i> · <i>Ich frage mich, wann sie kommt.</i> También es obligatoria ante el <b>infinitivo con zu</b> cuando el grupo va introducido por <i>um, ohne, statt, anstatt, außer</i> o <i>als</i>, cuando depende de un sustantivo o cuando lo anuncia un correlato: <i>Er ging weg, ohne zu grüßen.</i> · <i>Ich habe keine Zeit, dir zu helfen.</i> Ante <i>und</i> y <i>oder</i> en enumeración, por el contrario, no se pone coma. Las <b>comillas</b> alemanas abren abajo y cierran arriba, „Guten Tag“, y la variante tipográfica invierte los ángulos respecto del uso español: »Guten Tag«. Los ordinales llevan punto (<i>der 3. Oktober</i>) y la coma es el separador decimal (<i>3,5</i>), con punto para los millares (<i>1.000</i>).</p>
<h3>Junto o separado</h3>
<p>Dos verbos se escriben separados (<i>schwimmen gehen, spazieren gehen</i>). Sustantivo y verbo también, y el sustantivo conserva su mayúscula: <i>Rad fahren, Auto fahren, Ski laufen</i>; solo se sueldan las lexicalizaciones plenas (<i>teilnehmen, stattfinden</i>). El adjetivo se separa si admite gradación o complemento (<i>sehr schnell fahren</i>) y se suelda cuando el conjunto tiene significado propio (<i>fernsehen, freisprechen</i>). Los verbos de partícula separable se escriben juntos en infinitivo (<i>aufstehen</i>) pero desgajados en la oración conjugada (<i>ich stehe früh auf</i>), detalle que enlaza la ortografía con la sintaxis.</p>
`,
 q:["¿Cuál es la grafía correcta?|Er mußte gehen|Er musste gehen|Er muste gehen|Er mußste gehen|1|La u de musste es breve, de modo que la reforma de 1996 impone ss; la forma mußte quedó abolida.",
    "Straße se escribe con ß porque la vocal anterior...|es breve|va seguida de consonante|es larga|es átona|2|La ß solo aparece tras vocal larga o diptongo; tras vocal breve se escribe ss.",
    "¿Qué frase respeta la mayúscula del infinitivo sustantivado?|Beim essen spricht man nicht|beim Essen spricht man nicht|Beim essen Spricht man nicht|Beim Essen spricht man nicht|3|La preposición contraída beim sustantiva el infinitivo y obliga a la mayúscula.",
    "¿Cómo se escribe Fuß en el estándar suizo?|Fuß|Fuss|Fusz|Fuz|1|Suiza y Liechtenstein han suprimido la ß y la sustituyen sistemáticamente por ss.",
    "¿Cuál es la separación silábica correcta?|Fen-ster|Fenst-er|Fens-ter|F-enster|2|De un grupo consonántico solo la última consonante pasa a la sílaba siguiente, y desde 1996 st se separa como cualquier otro grupo.",
    "¿En cuál de estas frases falta una coma obligatoria?|Ich weiß dass er kommt|Ich komme und du bleibst|Er liest heute nicht|Sie singt oder tanzt|0|Toda subordinada se separa con coma, también cuando la puntuación española no la exige.",
    "Dirigiéndose a un desconocido, lo correcto es...|Ist das ihr Mantel|Ist das euer Mantel|Ist das Ihr Mantel|Ist das ihre Mantel|2|El posesivo de cortesía se escribe siempre con mayúscula y así se distingue de ihr, posesivo de ella o pronombre de vosotros.",
    "Wir haben heute etwas ___ gelernt.|neues|neuen|neue|Neues|3|Tras etwas, nichts, viel o wenig el adjetivo queda sustantivado y se escribe con mayúscula.",
    "¿Cuál reproduce el entrecomillado doble alemán?|«Guten Tag»|„Guten Tag“|”Guten Tag”|’Guten Tag’|1|Las comillas dobles alemanas abren en la línea inferior y cierran en la superior.",
    "¿Cuál está bien puntuada?|Er ging weg ohne zu grüßen|Er ging weg, ohne zu grüßen|Er, ging weg ohne zu grüßen|Er ging, weg ohne zu grüßen|1|El grupo de infinitivo con zu introducido por ohne exige coma delante."]},

{id:'satzbau0',t:'Los tres tipos de oración y la posición del verbo',sub:'Sintaxis',lvl:'A1',
 teoria:`
<h3>Un solo principio: dónde va el verbo conjugado</h3>
<p>La sintaxis alemana no se organiza en torno al orden sujeto-verbo-objeto, sino en torno al <b>lugar del verbo finito</b>. Ese lugar define el tipo de oración y es prácticamente inamovible. Para la oración independiente bastan dos configuraciones: verbo en <b>segunda</b> posición y verbo en <b>primera</b> posición. La subordinada, con el verbo al final, se trata más adelante.</p>
<h3>El enunciado: verbo en segunda posición</h3>
<p>En el <b>Aussagesatz</b> el verbo finito ocupa siempre el segundo lugar. Lo que lo precede se llama <b>Vorfeld</b> y admite <b>un solo constituyente</b>, no una palabra suelta ni dos sintagmas. Ese constituyente no tiene por qué ser el sujeto: si el Vorfeld lo ocupa otro elemento, el sujeto se desplaza detrás del verbo, fenómeno conocido como <b>inversión</b>.</p>
<p><i>Ich fahre morgen nach Berlin.</i> · <i>Morgen fahre ich nach Berlin.</i> · <i>Nach Berlin fahre ich morgen.</i> · <i>Der alte Mann aus Hamburg kommt heute.</i></p>
<p>El error más característico del hispanohablante es <i>Morgen ich fahre nach Berlin</i>. En español el adverbio antepuesto no altera nada; en alemán empuja el verbo a la tercera posición y la oración deja de ser gramatical. Conviene contar <b>constituyentes</b>, no palabras: <i>Der alte Mann aus Hamburg</i> ocupa una sola casilla, por larga que sea.</p>
<h3>Las dos preguntas</h3>
<p>La <b>pregunta parcial</b> (W-Frage) reclama un dato concreto y sitúa en el Vorfeld la partícula interrogativa: <i>wer, was, wann, wo, wohin, woher, wie, warum, welch-</i>. El verbo conserva la segunda posición: <i>Wann kommst du?</i> · <i>Wo wohnt deine Schwester?</i> La partícula que sustituye a un participante se <b>declina</b> según el caso que rija el verbo: <i>Wer hilft dir?</i> (nominativo), <i>Wem hilfst du?</i> (dativo, porque <i>helfen</i> rige dativo), <i>Wen siehst du?</i> (acusativo).</p>
<p>La <b>pregunta total</b> (Ja/Nein-Frage) se responde con sí o no y deja el <b>Vorfeld vacío</b>: el verbo finito abre la oración. <i>Kommst du morgen?</i> · <i>Hast du Zeit?</i> La afirmación frente a una pregunta <b>negativa</b> no se expresa con <i>ja</i>, sino con <b>doch</b>: <i>Hast du kein Auto?</i> · <i>Doch, ich habe eins.</i></p>
<h3>El imperativo</h3>
<p>El imperativo también coloca el verbo en <b>primera</b> posición y, en las formas de <i>du</i> e <i>ihr</i>, suprime el pronombre. La de <i>du</i> es la raíz desnuda, sin terminación; conserva el cambio vocálico <code>e → i/ie</code> pero <b>no</b> el Umlaut <code>a → ä</code>: <i>Komm!</i>, <i>Lies!</i>, <i>Sprich!</i>, <i>Nimm!</i>, pero <i>Fahr!</i> y <i>Schlaf!</i> La de <i>ihr</i> coincide con el presente (<i>Kommt!</i>) y la de cortesía mantiene el pronombre pospuesto (<i>Kommen Sie!</i>). El verbo <i>sein</i> es irregular: <i>Sei ruhig! Seid ruhig! Seien Sie ruhig!</i></p>
<h3>Campos y paréntesis oracional</h3>
<p>Cuando concurren <b>dos elementos verbales</b> —modal más infinitivo, auxiliar más participio, <i>werden</i> más infinitivo, o un prefijo separable— el finito permanece en su posición y el segundo elemento se traslada al final. Entre ambos se abre la <b>Satzklammer</b> o paréntesis oracional, y el espacio interior es el <b>Mittelfeld</b>, donde se acumula toda la información.</p>
<table class="endtable"><tr><th>Vorfeld</th><th>Verbo finito</th><th>Mittelfeld</th><th>Segundo polo</th></tr>
<tr><td>Ich</td><td>muss</td><td>morgen früh</td><td>aufstehen</td></tr>
<tr><td>Gestern</td><td>habe</td><td>ich einen Film</td><td>gesehen</td></tr>
<tr><td>Wann</td><td>bist</td><td>du nach Hause</td><td>gekommen</td></tr>
<tr><td>—</td><td>Kannst</td><td>du mir</td><td>helfen</td></tr>
<tr><td>Ich</td><td>stehe</td><td>um sechs Uhr</td><td>auf</td></tr></table>
<p>Colocar el participio o el infinitivo junto al auxiliar, como haría el español, es el segundo gran error: <i>Ich habe gesehen einen Film</i> es agramatical. Detrás del paréntesis solo cabe el <b>Nachfeld</b>, reservado a subordinadas y comparaciones: <i>Ich habe gehört, dass er kommt.</i> · <i>Er ist größer als ich.</i></p>
<h3>La negación: nicht y kein</h3>
<p>La negación de la oración entera se hace con <b>nicht</b>, que se coloca <b>al final del campo medio</b>, esto es, inmediatamente antes del segundo polo verbal y detrás de los complementos definidos: <i>Ich kenne den Mann nicht.</i> · <i>Ich habe das Buch nicht gelesen.</i> · <i>Ich rufe dich heute nicht an.</i> Pero precede a cuanto forma unidad con el verbo: adjetivo predicativo (<i>Er ist nicht müde</i>), complemento locativo obligatorio (<i>Ich fahre nicht nach Berlin</i>) y, en la negación parcial, al elemento contrastado (<i>Ich komme nicht heute, sondern morgen</i>). Si lo negado es un sustantivo que llevaría <i>ein</i> o ningún artículo, no se dice <i>nicht ein</i> sino <b>kein</b>, declinado como <i>ein</i> pero dotado de plural: <i>Ich habe kein Auto</i>, <i>Wir haben keine Zeit</i>. Con artículo determinado o posesivo reaparece <i>nicht</i>: <i>Das ist nicht mein Auto</i>.</p>
`,
 q:["Morgen ___ nach Berlin.|ich fahre|fahre ich|ich fahre nicht|fahren wir ich|1|Con un complemento en el Vorfeld el verbo finito mantiene la segunda posición y el sujeto se pospone.",
    "¿Cuál es el orden correcto?|Ich habe gesehen gestern einen Film|Ich gestern habe einen Film gesehen|Gestern habe ich einen Film gesehen|Gestern ich habe einen Film gesehen|2|El auxiliar ocupa la segunda posición y el participio cierra el paréntesis al final.",
    "¿Cuál es una pregunta total bien formada?|Du kommst morgen|Morgen du kommst|Wann kommst du morgen|Kommst du morgen|3|La pregunta de sí o no deja el Vorfeld vacío y abre con el verbo finito.",
    "___ bitte etwas langsamer!|Sprech|Sprich|Sprichst|Spreche|1|El imperativo de du es la raíz sin terminación y conserva el cambio de e en i.",
    "___ nicht so schnell!|Fähr|Fährst|Fahr|Fahre du|2|El Umlaut de a en ä no se produce en el imperativo, que además prescinde del pronombre.",
    "¿Dónde se coloca nicht?|Ich kenne den Mann nicht|Ich kenne nicht den Mann|Ich nicht kenne den Mann|Nicht ich kenne den Mann|0|Con objeto definido la negación oracional cierra el campo medio.",
    "Ich habe ___ Auto.|nicht ein|nicht|keines|kein|3|Un sustantivo que llevaría ein se niega con kein, nunca con nicht ein.",
    "___ hilfst du am Wochenende?|Wer|Was|Wem|Wen|2|helfen rige dativo, de modo que la partícula interrogativa correspondiente es wem.",
    "Hast du kein Auto? La respuesta afirmativa correcta es...|Doch, ich habe eins|Ja, ich habe eins|Nein, ich habe eins|Doch, ich habe keins|0|Frente a una pregunta negativa la afirmación se expresa con doch, no con ja.",
    "¿Cuál es correcta con el verbo anrufen?|Ich anrufe dich morgen|Ich rufe dich morgen an|Ich rufe an dich morgen|Morgen ich rufe dich an|1|En la oración principal el prefijo separable se desgaja y ocupa el segundo polo del paréntesis oracional."]}
];

/* TEORÍA + QUIZ · bloque 4
   q: "enunciado|op0|op1|op2|op3|índice correcto|explicación"                       */
const GRAM4=[
{id:'nebensatz',t:'Oraciones subordinadas I: weil, dass, wenn, ob',sub:'Sintaxis',lvl:'B1',
 teoria:`
<h3>El principio estructural</h3>
<p>Hasta aquí toda oración alemana ha respondido a un único esquema: el verbo conjugado en <b>segunda posición</b>. La subordinación introduce el segundo esquema básico del idioma, y con él el rasgo que más distancia el alemán del español: en la oración subordinada el verbo conjugado abandona su lugar habitual y se desplaza al <b>último puesto</b>. Se habla por eso de <b>Verbletztstellung</b>, posición final del verbo. La conjunción no cuenta como posición ocupable: ocupa un lugar propio, delante del sujeto, y clausura el acceso al esquema de verbo segundo.</p>
<p>La motivación funcional es de rendimiento informativo. Una oración subordinada no vale por sí misma, sino como pieza de la principal, y el alemán la marca doblemente para que el oyente sepa desde la primera sílaba que lo que viene no es una aserción autónoma: la conjunción avisa al principio, la posición del verbo confirma al final. Entre ambos límites se despliega el campo medio con todos los complementos.</p>
<h3>Las cuatro conjunciones del bloque</h3>
<table class="endtable"><tr><th>Conjunción</th><th>Valor</th><th>Equivalente español</th><th>Verbo</th></tr>
<tr><td>weil</td><td>causa</td><td>porque</td><td>final</td></tr>
<tr><td>dass</td><td>completiva</td><td>que</td><td>final</td></tr>
<tr><td>wenn</td><td>condición real o tiempo iterativo</td><td>si, cuando</td><td>final</td></tr>
<tr><td>ob</td><td>interrogativa indirecta total</td><td>si (interrogativo)</td><td>final</td></tr></table>
<p><b>weil</b> responde a <i>warum</i> y puede quedar sola como respuesta. <b>dass</b> no aporta significado propio: se limita a convertir una oración en el complemento de un verbo de lengua, pensamiento o percepción (<i>sagen, glauben, denken, wissen, hoffen, finden</i>) o en el sujeto de una expresión valorativa (<i>Es ist wichtig, dass du kommst</i>). <b>wenn</b> cubre a la vez la condición real y el tiempo repetido. <b>ob</b> traduce el <i>si</i> de la pregunta indirecta y solo aparece tras verbos que interrogan o dudan: <i>fragen, wissen wollen, sich fragen, nicht sicher sein</i>.</p>
<h3>Qué ocupa exactamente el último lugar</h3>
<table class="endtable"><tr><th>Estructura</th><th>Ejemplo</th><th>Campo final</th></tr>
<tr><td>verbo simple</td><td>weil er heute arbeitet</td><td>arbeitet</td></tr>
<tr><td>verbo separable</td><td>weil er um sechs aufsteht</td><td>aufsteht</td></tr>
<tr><td>modal con infinitivo</td><td>weil er arbeiten muss</td><td>arbeiten muss</td></tr>
<tr><td>Perfekt</td><td>weil er lange gearbeitet hat</td><td>gearbeitet hat</td></tr>
<tr><td>Präteritum</td><td>weil er sehr müde war</td><td>war</td></tr></table>
<p>Dos consecuencias merecen atención. El <b>verbo separable</b> recupera su unidad: lo que en la principal se escinde (<i>er steht auf</i>) vuelve a soldarse en la subordinada (<i>weil er aufsteht</i>). Y cuando hay más de una forma verbal, la <b>conjugada va la última</b>, detrás del infinitivo o del participio: no <i>weil er muss arbeiten</i>, sino <i>weil er arbeiten muss</i>. El orden queda invertido respecto de la principal, y este es el punto en que más se falla.</p>
<h3>La subordinada delante</h3>
<p>La subordinada puede anteceder a la principal. En ese caso ocupa entera la <b>posición 1</b>, con lo que el verbo conjugado de la principal debe seguirla de inmediato y el sujeto queda detrás: <i>Weil ich krank bin, <b>bleibe ich</b> zu Hause</i>. El resultado es la secuencia <code>coma + verbo + sujeto</code>, que suena extraña al oído románico pero es de aplicación mecánica. Escribir <i>Weil ich krank bin, ich bleibe zu Hause</i> es el error más frecuente y el más visible.</p>
<p>La <b>coma</b> es obligatoria en alemán entre principal y subordinada, sin excepción y sin depender de la longitud ni de la entonación. No es un signo de pausa, sino de frontera sintáctica.</p>
<h3>El error típico del hispanohablante</h3>
<p>Son tres, y los tres proceden de calcar el español. Primero, mantener el orden español dentro de la subordinada: <i>porque estoy enfermo</i> se traslada como <b>weil ich bin krank</b>, que es agramatical. Segundo, confundir <b>ob</b> con <b>wenn</b>, porque el español usa <i>si</i> para las dos cosas: <i>No sé si viene</i> exige <i>Ich weiß nicht, <b>ob</b> er kommt</i>, mientras que <i>Si viene, hablamos</i> exige <i>Wenn er kommt, sprechen wir</i>. La prueba es sencilla: si el <i>si</i> admite la respuesta sí o no, es <b>ob</b>. Tercero, suprimir <b>dass</b> como en español se suprime a veces el <i>que</i>; el alemán lo admite solo en el discurso indirecto sin conjunción, y entonces la oración recupera el verbo en segunda posición: <i>Er sagt, er kommt später</i>. Con <i>dass</i> la misma frase es <i>Er sagt, dass er später kommt</i>. No caben formas intermedias.</p>
`,
 q:["Ich bleibe zu Hause, ___|weil ich bin krank|weil bin ich krank|weil ich krank bin|weil krank ich bin|2|En la subordinada el verbo conjugado ocupa el último lugar: weil ich krank bin.",
    "___, gehe ich nicht ins Kino.|Weil ich habe keine Zeit|Weil habe ich keine Zeit|Ich weil keine Zeit habe|Weil ich keine Zeit habe|3|La subordinada antepuesta llena la posición 1, de modo que el verbo de la principal la sigue de inmediato.",
    "Er schreibt, dass er uns morgen ___.|an ruft|anruft|ruft an|rufen an|1|En posición final el verbo separable recompone su prefijo: dass er anruft.",
    "Ich weiß nicht, ___ der Zug pünktlich ankommt.|wenn|dass|als|ob|3|Es una interrogativa indirecta de respuesta sí o no: se introduce con ob.",
    "___ du mich brauchst, ruf mich einfach an.|Ob|Dass|Wenn|Weil|2|Condición real referida al futuro: wenn, no ob.",
    "Ich komme später, weil ich noch zwei Stunden ___.|muss arbeiten|arbeiten muss|arbeite muss|muss arbeiten noch|1|Con modal e infinitivo, la forma conjugada cierra la oración detrás del infinitivo.",
    "Sie glaubt, dass wir den Film schon ___.|gesehen haben|haben gesehen|haben sehen|sehen haben|0|En el Perfekt subordinado el auxiliar conjugado va detrás del participio.",
    "¿Cuál de estas frases es gramatical?|Er fragt, ob kommst du mit.|Er fragt, ob du mitkommst.|Er fragt, ob du kommst mit.|Er fragt, ob mitkommst du.|1|Verbo separable soldado y en última posición: ob du mitkommst.",
    "Traduzca el si de No sé si tiene tiempo.|wenn|falls|ob|dass|2|Admite respuesta sí o no, luego corresponde ob: Ich weiß nicht, ob er Zeit hat.",
    "¿Cuál reproduce el discurso indirecto sin dass?|Er sagt, dass er keine Zeit hat.|Er sagt, er keine Zeit hat.|Er sagt, er hat keine Zeit.|Er sagt, keine Zeit er hat.|2|Suprimido dass, la oración recupera el esquema de verbo en segunda posición."]},

{id:'konnektoren',t:'Conectores y posición del verbo: denn, deshalb, trotzdem, obwohl',sub:'Sintaxis',lvl:'B1',
 teoria:`
<h3>Tres clases, no una</h3>
<p>El español dispone de un repertorio de nexos que, salvo la selección de modo, no alteran el orden de la frase: <i>porque</i>, <i>pues</i>, <i>por eso</i> y <i>aunque</i> se comportan sintácticamente igual. El alemán, en cambio, clasifica los conectores por el <b>efecto que ejercen sobre la posición del verbo</b>, y esa clasificación es la información gramaticalmente decisiva. Hay tres clases y conviene aprender cada conector con la etiqueta de su clase pegada.</p>
<table class="endtable"><tr><th>Clase</th><th>Miembros frecuentes</th><th>Posición que ocupa</th><th>Verbo de su oración</th></tr>
<tr><td>coordinantes</td><td>und, aber, oder, denn, sondern</td><td>posición 0, fuera del cómputo</td><td>segunda posición</td></tr>
<tr><td>adverbios conjuntivos</td><td>deshalb, deswegen, darum, daher, trotzdem, dann, außerdem, sonst</td><td>posición 1, dentro del cómputo</td><td>segunda posición, sujeto detrás</td></tr>
<tr><td>subordinantes</td><td>weil, da, obwohl, dass, wenn, ob</td><td>encabezan la subordinada</td><td>última posición</td></tr></table>
<h3>Los coordinantes ocupan la posición cero</h3>
<p><b>denn</b>, <b>und</b>, <b>aber</b>, <b>oder</b> y <b>sondern</b> unen dos oraciones sin integrar ninguna en la otra: no ocupan casilla y por eso la oración que sigue conserva íntegro su esquema de verbo segundo con el sujeto delante. <i>Ich bleibe zu Hause, <b>denn ich bin</b> krank.</i> Se cuenta desde el sujeto, no desde la conjunción.</p>
<p>De ahí la oposición decisiva del bloque: <b>denn</b> y <b>weil</b> significan lo mismo pero pertenecen a clases distintas. <i>Ich bleibe zu Hause, denn ich bin krank</i> frente a <i>Ich bleibe zu Hause, weil ich krank bin</i>. Además, solo <i>weil</i> puede anteponerse y solo <i>weil</i> puede responder a <i>warum</i> de forma aislada; <i>denn</i> nunca abre período ni funciona como respuesta.</p>
<h3>Los adverbios conjuntivos sí ocupan casilla</h3>
<p><b>deshalb</b>, <b>deswegen</b>, <b>darum</b>, <b>daher</b> (consecutivos), <b>trotzdem</b> (concesivo), <b>dann</b>, <b>außerdem</b>, <b>sonst</b> no son conjunciones sino adverbios. Cuando abren la oración llenan la <b>posición 1</b>, con lo que el verbo conjugado los sigue y el <b>sujeto queda detrás</b>: <i>Ich bin krank, <b>deshalb bleibe ich</b> zu Hause.</i> Al ser adverbios pueden además desplazarse al campo medio, aunque el efecto es menos enfático: <i>Ich bleibe deshalb zu Hause.</i></p>
<h3>Los subordinantes envían el verbo al final</h3>
<p><b>obwohl</b> introduce la concesión y <b>da</b> una causa que el hablante presenta como ya sabida, motivo por el que <i>da</i> suele preceder a la principal: <i><b>Da</b> du krank <b>bist</b>, bleiben wir zu Hause.</i> La diferencia respecto de <i>weil</i> es informativa, no lógica: <i>weil</i> aporta una causa nueva y es la respuesta natural a una pregunta.</p>
<h3>Las dos parejas que hay que fijar</h3>
<table class="endtable"><tr><th>Relación</th><th>Subordinante</th><th>Coordinante</th><th>Adverbio</th></tr>
<tr><td>causa</td><td>weil, da (verbo final)</td><td>denn (verbo segundo)</td><td>deshalb marca la consecuencia, no la causa</td></tr>
<tr><td>concesión</td><td>obwohl (verbo final)</td><td>aber (verbo segundo)</td><td>trotzdem (verbo segundo, sujeto detrás)</td></tr></table>
<p>Obsérvese que <b>weil</b> y <b>deshalb</b> no son sinónimos ni variantes: invierten la dirección del enunciado. <i>Ich bleibe zu Hause, weil ich krank bin</i> introduce la causa; <i>Ich bin krank, deshalb bleibe ich zu Hause</i> introduce la consecuencia. Lo mismo vale para <b>obwohl</b> y <b>trotzdem</b>: la subordinada con <i>obwohl</i> contiene el obstáculo, la oración con <i>trotzdem</i> contiene lo que sucede pese a él.</p>
<h3>El error típico del hispanohablante</h3>
<p>Primero, tratar <b>denn</b> como <i>weil</i> y mandar el verbo al final: <i>denn ich krank bin</i> es agramatical. La equivalencia semántica con <i>porque</i> encubre una diferencia de clase. Segundo, calcar <i>por eso</i> en <b>deshalb</b> sin invertir: <i>Deshalb ich bleibe zu Hause</i> reproduce el orden español y es incorrecto, porque <i>deshalb</i> ya ocupa la primera casilla. Tercero, usar <b>trotzdem</b> donde corresponde <b>obwohl</b>, ya que el español traduce ambos por <i>aunque</i> y por <i>a pesar de eso</i> según el giro; la prueba está en la posición del verbo que sigue. Y cuarto, encadenar <i>obwohl</i> con <i>aber</i> en la misma frase, calcando el <i>aunque… pero</i> del habla coloquial española: en alemán la duplicación es incorrecta.</p>
`,
 q:["Ich bleibe zu Hause, denn ___.|ich krank bin|bin ich krank|ich bin krank|krank ich bin|2|denn es coordinante y ocupa la posición cero: la oración conserva el verbo en segunda posición.",
    "Ich bin krank, deshalb ___ zu Hause.|ich bleibe|bleibe ich|ich bleiben|bleiben ich|1|deshalb llena la posición 1, de modo que el verbo lo sigue y el sujeto va detrás.",
    "___ es regnet, gehen wir spazieren.|Trotzdem|Deshalb|Obwohl|Denn|2|Solo obwohl es subordinante y admite el verbo final regnet detrás del sujeto.",
    "Es regnet. ___ gehen wir spazieren.|Obwohl|Trotzdem|Weil|Dass|1|Tras un punto se necesita un adverbio conjuntivo con inversión: Trotzdem gehen wir.",
    "¿Cuál es agramatical?|Ich komme nicht, weil ich arbeiten muss.|Ich komme nicht, denn ich muss arbeiten.|Ich muss arbeiten, deshalb komme ich nicht.|Ich komme nicht, denn ich arbeiten muss.|3|denn nunca envía el verbo al final.",
    "___ du schon alles weißt, erkläre ich es nicht noch einmal.|Denn|Deshalb|Da|Trotzdem|2|da presenta la causa como conocida y encabeza con verbo final la subordinada antepuesta.",
    "Er hat wenig Geld. ___ kauft er sich ein neues Fahrrad.|Deshalb|Weil|Trotzdem|Denn|2|La relación es concesiva, no consecutiva, y exige un adverbio con inversión.",
    "Wir haben uns beeilt, ___ waren wir zu spät.|obwohl|trotzdem|weil|denn|1|El hueco va seguido de verbo y sujeto invertidos, lo que solo permite el adverbio trotzdem.",
    "¿Qué frase mantiene el sentido de Ich nehme den Bus, weil mein Auto kaputt ist?|Mein Auto ist kaputt, deshalb nehme ich den Bus.|Mein Auto ist kaputt, obwohl ich den Bus nehme.|Ich nehme den Bus, trotzdem ist mein Auto kaputt.|Mein Auto ist kaputt, denn ich nehme den Bus.|0|La causa pasa a la primera oración y deshalb introduce la consecuencia.",
    "En Ich bleibe deshalb zu Hause, deshalb funciona como|conjunción coordinante|adverbio en el campo medio|conjunción subordinante|prefijo separable|1|Al no abrir la oración, deshalb se comporta como adverbio interior sin alterar el orden."]},

{id:'temporal',t:'Oraciones temporales: als, wenn, nachdem, bevor, während',sub:'Sintaxis',lvl:'B1',
 teoria:`
<h3>Un solo cuando español, cinco conjunciones alemanas</h3>
<p>Todas las conjunciones de este bloque son <b>subordinantes</b>: envían el verbo conjugado al final y admiten anteposición con la consiguiente inversión en la principal. Lo que las distingue no es la sintaxis, sino la <b>relación temporal</b> que establecen entre los dos hechos y, en dos de ellas, la exigencia de una determinada correlación de tiempos.</p>
<table class="endtable"><tr><th>Conjunción</th><th>Relación</th><th>Restricción</th><th>Español</th></tr>
<tr><td>als</td><td>simultaneidad</td><td>hecho único en el pasado</td><td>cuando</td></tr>
<tr><td>wenn</td><td>simultaneidad</td><td>presente, futuro o pasado iterativo</td><td>cuando, cada vez que</td></tr>
<tr><td>nachdem</td><td>anterioridad</td><td>obliga a desfase de tiempos</td><td>después de que</td></tr>
<tr><td>bevor</td><td>posterioridad</td><td>mismo tiempo en ambas</td><td>antes de que</td></tr>
<tr><td>während</td><td>simultaneidad durativa</td><td>mismo tiempo en ambas</td><td>mientras</td></tr></table>
<h3>als frente a wenn</h3>
<p>La regla es doble y no admite matices. <b>als</b> se reserva a un acontecimiento <b>único y pasado</b> o a un tramo de vida cerrado: <i>Als ich in Berlin wohnte, hatte ich kein Auto.</i> <b>wenn</b> cubre todo lo demás: el presente y el futuro (<i>Wenn ich Zeit habe, rufe ich dich an</i>) y también el pasado si el hecho se repitió (<i>Immer wenn wir uns trafen, sprachen wir Deutsch</i>). Como criterio de decisión funciona la prueba de <i>jedes Mal</i>: si cabe insertarlo, corresponde <i>wenn</i>. Y ninguna de las dos debe confundirse con <b>wann</b>, que es partícula interrogativa y aparece en preguntas directas e indirectas: <i>Ich weiß nicht, wann er kommt.</i></p>
<h3>nachdem y la concordancia de tiempos</h3>
<p><b>nachdem</b> es la única conjunción temporal que impone una <b>correlación obligatoria</b>: el hecho de la subordinada es anterior, y el alemán lo marca con un tiempo anterior al de la principal. Hay dos combinaciones válidas y una sola dirección.</p>
<table class="endtable"><tr><th>Subordinada con nachdem</th><th>Oración principal</th><th>Ejemplo</th></tr>
<tr><td>Plusquamperfekt</td><td>Präteritum</td><td>Nachdem er gegessen hatte, ging er.</td></tr>
<tr><td>Perfekt</td><td>Präsens</td><td>Nachdem er gegessen hat, geht er.</td></tr></table>
<p>El <b>Plusquamperfekt</b> se forma con el Präteritum del auxiliar más el participio: <i>hatte gearbeitet</i>, <i>war gefahren</i>. La elección de <i>haben</i> o <i>sein</i> es la misma que en el Perfekt. En la subordinada la forma conjugada del auxiliar cierra la oración, con lo que el orden resulta <i>nachdem er gegessen <b>hatte</b></i>.</p>
<h3>bevor y während</h3>
<p><b>bevor</b> expresa posterioridad respecto de la subordinada y, a diferencia de <i>nachdem</i>, mantiene el <b>mismo tiempo</b> en las dos oraciones: <i>Bevor ich schlafen gehe, lese ich noch etwas.</i> Su variante culta es <i>ehe</i>. <b>während</b> señala que los dos hechos se prolongan a la vez y también exige simetría temporal: <i>Während sie kochte, deckte er den Tisch.</i> En textos escritos <i>während</i> desarrolla un valor adversativo de contraste, próximo a <i>mientras que</i>: <i>Während der Norden regnerisch ist, bleibt der Süden trocken.</i></p>
<h3>El error típico del hispanohablante</h3>
<p>El primero y más persistente es traducir <i>cuando</i> siempre por <b>wenn</b> y decir <i>Wenn ich klein war</i> en lugar de <i>Als ich klein war</i>; el español no distingue lo único de lo repetido, así que la distinción hay que construirla de cero. El segundo es prescindir del desfase de tiempos con <b>nachdem</b>: <i>Nachdem er aß, ging er</i> no es alemán normativo, porque la conjunción ya significa posterioridad y el tiempo debe confirmarla. El tercero nace de la sintaxis española de <i>antes de que</i> y <i>después de que</i> con subjuntivo: en alemán no hay subjuntivo aquí y ambas conjunciones rigen indicativo. El cuarto es emplear <b>wann</b> como conjunción, por contagio del interrogativo español; <i>wann</i> solo introduce preguntas, directas o indirectas, nunca una circunstancial de tiempo.</p>
`,
 q:["___ ich zwölf war, zog meine Familie nach Hamburg.|Wenn|Als|Wann|Während|1|Hecho único situado en el pasado: als.",
    "Immer ___ es regnete, blieben wir zu Hause.|wenn|als|wann|nachdem|0|El pasado iterativo, reforzado por immer, exige wenn.",
    "___ er gegessen hatte, ging er sofort ins Bett.|Bevor|Während|Nachdem|Wenn|2|El Plusquamperfekt en la subordinada señala anterioridad y pide nachdem.",
    "Nachdem wir angekommen ___, riefen wir dich an.|sind|waren|hatten|gewesen waren|1|ankommen forma sus tiempos compuestos con sein: Plusquamperfekt waren angekommen.",
    "___ ich morgen Zeit habe, besuche ich dich.|Als|Wenn|Wann|Nachdem|1|Referencia al futuro: wenn, nunca als.",
    "Ich weiß noch nicht, ___ der Kurs anfängt.|wenn|als|während|wann|3|Interrogativa indirecta: se usa el interrogativo wann.",
    "___ ich das Essen koche, deckst du bitte den Tisch.|Nachdem|Bevor|Während|Als|2|Dos acciones simultáneas y durativas en el mismo tiempo verbal: während.",
    "¿Cuál es la secuencia normativa?|Nachdem er kam, aß er.|Nachdem er gekommen war, aß er.|Nachdem er kommt, aß er.|Nachdem er kommen wird, aß er.|1|Plusquamperfekt en la subordinada y Präteritum en la principal.",
    "Bevor ich zur Arbeit ___, trinke ich einen Kaffee.|ging|gegangen bin|gehe|gegangen war|2|bevor mantiene el mismo tiempo que la principal, que está en presente.",
    "Als der Film zu Ende war, ___ nach Hause.|gingen wir|wir gingen|wir sind gegangen|wir gehen gingen|0|La temporal antepuesta ocupa la posición 1 y obliga a la inversión en la principal."]},

{id:'relativ',t:'Oraciones de relativo en nominativo, acusativo y dativo',sub:'Sintaxis',lvl:'B1',
 teoria:`
<h3>Función y forma</h3>
<p>La oración de relativo es una subordinada más: el <b>verbo conjugado va al final</b> y una coma la separa siempre del resto. Su particularidad está en el nexo. El pronombre relativo alemán no es invariable como el <i>que</i> español, sino que se declina, y lo hace conforme a un doble criterio que hay que aplicar en dos pasos independientes.</p>
<p><b>Género y número</b> proceden del <b>antecedente</b>, es decir, del sustantivo al que la oración se refiere. El <b>caso</b> procede de la <b>función que el pronombre desempeña dentro de la propia oración de relativo</b>. Son dos informaciones de origen distinto y ninguna condiciona a la otra. Confundirlas es la fuente principal de error: en <i>Das ist der Mann, <b>den</b> ich gestern gesehen habe</i>, el masculino viene de <i>Mann</i>, pero el acusativo viene de <i>sehen</i>, no del papel de <i>der Mann</i> en la principal.</p>
<h3>Formas</h3>
<table class="endtable"><tr><th>Caso</th><th>masculino</th><th>femenino</th><th>neutro</th><th>plural</th></tr>
<tr><td>Nominativo</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Acusativo</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dativo</td><td>dem</td><td>der</td><td>dem</td><td>denen</td></tr></table>
<p>Las formas coinciden con las del artículo determinado salvo en una casilla: el <b>dativo plural es denen</b>, no <i>den</i>. Esa irregularidad es la marca más visible del paradigma y conviene retenerla como excepción aislada. <small>Existe además un genitivo relativo con las formas dessen y deren, que queda fuera de este bloque.</small></p>
<h3>Cómo elegir el caso</h3>
<table class="endtable"><tr><th>Función en la relativa</th><th>Caso</th><th>Ejemplo</th></tr>
<tr><td>sujeto</td><td>nominativo</td><td>der Mann, der dort steht</td></tr>
<tr><td>objeto directo</td><td>acusativo</td><td>der Mann, den ich kenne</td></tr>
<tr><td>objeto indirecto o verbo de dativo</td><td>dativo</td><td>der Mann, dem ich helfe</td></tr>
<tr><td>término de preposición</td><td>el que rija la preposición</td><td>der Mann, mit dem ich spreche</td></tr></table>
<p>El procedimiento práctico consiste en reconstruir la oración de relativo como oración independiente y observar qué caso tomaría allí el sustantivo. <i>Ich helfe dem Mann</i> da <i>dem</i>; <i>Ich kenne den Mann</i> da <i>den</i>. La principal no interviene en ese cálculo.</p>
<h3>Preposición y relativo</h3>
<p>Cuando el verbo de la relativa exige preposición, esta se antepone al pronombre y forman un bloque indisoluble que encabeza la subordinada: <i>Das ist die Kollegin, <b>mit der</b> ich arbeite.</i> El alemán no admite dejar la preposición al final ni suprimirla, y el caso lo determina la preposición, no la función sintáctica general: <i>für den</i>, <i>ohne den</i>, pero <i>mit dem</i>, <i>bei dem</i>.</p>
<h3>Colocación</h3>
<p>La relativa se coloca <b>inmediatamente detrás de su antecedente</b>, aunque ello parta la oración principal en dos: <i>Der Mann, der dort steht, ist mein Chef.</i> Solo se pospone al final cuando la relativa es larga y el resto de la principal muy breve. Si el antecedente es una oración entera o un indefinido neutro como <i>alles, etwas, nichts, das</i>, el relativo es <b>was</b>: <i>Er kam zu spät, was mich geärgert hat.</i></p>
<h3>El error típico del hispanohablante</h3>
<p>El primero es aplicar un relativo invariable, calcando el <i>que</i> español, y elegir siempre <i>der</i> o <i>das</i>. El segundo, más sutil, es tomar el caso del papel que el antecedente cumple en la oración principal en lugar del que cumple el pronombre en la subordinada. El tercero afecta a la preposición: el español coloquial admite <i>la chica que hablo con ella</i> y el escrito antepone <i>con la que</i>; el alemán solo admite la anteposición. El cuarto es olvidar que el verbo va al final, porque la distancia entre el pronombre y el verbo puede ser larga. Y el quinto es prescindir de las comas, que en alemán no son opcionales ni dependen de que la relativa sea explicativa o especificativa.</p>
`,
 q:["Das ist der Kollege, ___ mir immer hilft.|den|dem|der|die|2|El pronombre es sujeto de la relativa: nominativo masculino der.",
    "Das ist der Film, ___ ich gestern gesehen habe.|der|den|dem|das|1|Objeto directo de sehen: acusativo masculino den.",
    "Das sind die Nachbarn, ___ wir oft helfen.|die|den|denen|deren|2|helfen rige dativo y el antecedente es plural: denen.",
    "Dem Kollegen, ___ gestern angerufen hat, habe ich schon geantwortet.|den|dem|der|denen|2|El caso lo fija la función dentro de la relativa, donde el pronombre es sujeto: nominativo der.",
    "Das Kind, ___ ich das Buch gegeben habe, ist sieben.|das|dem|den|der|1|Destinatario del verbo geben: dativo neutro dem.",
    "Der Stuhl, auf ___ du sitzt, ist sehr alt.|dem|den|der|das|0|auf con valor de posición rige dativo: auf dem.",
    "Ich habe alles verstanden, ___ du gesagt hast.|das|was|welches|dem|1|Con el indefinido neutro alles el relativo es was.",
    "Die Kollegin, mit ___ ich arbeite, kommt aus Wien.|die|der|deren|denen|1|mit rige dativo y el antecedente es femenino singular: der.",
    "Die Bücher, ___ auf dem Tisch liegen, gehören mir.|das|der|denen|die|3|Sujeto plural de la relativa: nominativo die.",
    "¿Cuál es la frase correcta?|Der Mann, den dort steht, ist mein Vater.|Der Mann, der dort steht, ist mein Vater.|Der Mann, der steht dort, ist mein Vater.|Der Mann, dem dort steht, ist mein Vater.|1|Relativo en nominativo y verbo conjugado al final de la subordinada."]},

{id:'praepverb',t:'Verbos con complemento preposicional y compuestos da-/wo-',sub:'Verbo',lvl:'B1',
 teoria:`
<h3>Qué es un complemento preposicional</h3>
<p>Numerosos verbos alemanes exigen un complemento introducido por una <b>preposición fija</b> que no se elige por su significado espacial ni por lógica alguna, sino que forma parte de la entrada léxica del verbo. La preposición determina además el <b>caso</b> del sintagma, y ese caso queda igualmente fijado: <i>warten <b>auf</b></i> lleva acusativo aunque <i>auf</i> sea una preposición de doble régimen y aquí no exprese movimiento. La consecuencia metodológica es clara: el verbo se aprende en tríada, con preposición y caso, como se aprende el sustantivo con su artículo.</p>
<table class="endtable"><tr><th>Verbo</th><th>Preposición y caso</th><th>Español</th></tr>
<tr><td>warten</td><td>auf + acusativo</td><td>esperar a</td></tr>
<tr><td>denken</td><td>an + acusativo</td><td>pensar en</td></tr>
<tr><td>sich interessieren</td><td>für + acusativo</td><td>interesarse por</td></tr>
<tr><td>sich freuen</td><td>auf + acusativo (futuro), über + acusativo (presente o pasado)</td><td>alegrarse de</td></tr>
<tr><td>sich erinnern</td><td>an + acusativo</td><td>acordarse de</td></tr>
<tr><td>bitten</td><td>um + acusativo</td><td>pedir</td></tr>
<tr><td>teilnehmen</td><td>an + dativo</td><td>participar en</td></tr>
<tr><td>abhängen</td><td>von + dativo</td><td>depender de</td></tr>
<tr><td>sprechen</td><td>über + acusativo, von + dativo</td><td>hablar de</td></tr>
<tr><td>sich beschäftigen</td><td>mit + dativo</td><td>ocuparse de</td></tr></table>
<h3>Cosas y personas se comportan distinto</h3>
<p>Aquí interviene la restricción que gobierna todo el bloque. Si el complemento designa una <b>persona</b>, se mantiene la secuencia normal de preposición más pronombre personal: <i>Ich warte <b>auf ihn</b>.</i> Si designa una <b>cosa</b> o un contenido abstracto, el alemán prohíbe esa combinación y obliga a un <b>adverbio pronominal</b> formado con <b>da-</b>: <i>Ich warte <b>darauf</b>.</i> No existe <i>auf es</i>.</p>
<p>La formación es mecánica: <code>da + preposición</code>, con una <b>-r-</b> de enlace si la preposición empieza por vocal. Así <i>damit, davon, dazu, danach, dabei</i>, pero <i>darauf, daran, darin, darüber, darum</i>. El mismo mecanismo se aplica a la interrogación con <b>wo-</b>: <i>womit, wovon</i> frente a <i>worauf, woran, worüber</i>.</p>
<table class="endtable"><tr><th>Referente</th><th>Pregunta</th><th>Respuesta</th></tr>
<tr><td>persona</td><td>Auf wen wartest du?</td><td>Ich warte auf meinen Bruder.</td></tr>
<tr><td>persona ya mencionada</td><td>Auf wen wartest du?</td><td>Ich warte auf ihn.</td></tr>
<tr><td>cosa</td><td>Worauf wartest du?</td><td>Ich warte auf den Bus.</td></tr>
<tr><td>cosa ya mencionada</td><td>Worauf wartest du?</td><td>Ich warte darauf.</td></tr></table>
<h3>El da-compuesto como anticipador</h3>
<p>El adverbio pronominal cumple una segunda función de gran rendimiento: <b>anticipar una oración con dass</b>. Como el complemento preposicional no puede ser una subordinada directamente, el verbo coloca en su lugar el compuesto y la subordinada lo desarrolla: <i>Ich freue mich <b>darüber, dass</b> du kommst.</i> · <i>Wir denken <b>daran, dass</b> morgen Feiertag ist.</i> · <i>Es hängt <b>davon ab, ob</b> es regnet.</i> El compuesto queda en el campo medio y la subordinada se pospone.</p>
<h3>El error típico del hispanohablante</h3>
<p>El más frecuente es <b>traducir la preposición</b> en lugar de aprenderla: <i>pensar en</i> produce el falso <i>denken in</i> cuando corresponde <i>denken an</i>; <i>depender de</i> produce <i>abhängen aus</i> por <i>abhängen von</i>; <i>esperar a alguien</i> tiende a construirse sin preposición, calcando el objeto directo español. El segundo es combinar preposición y pronombre neutro (<i>über es</i>, <i>auf das</i>) donde el alemán exige el compuesto con <i>da-</i>. El tercero es preguntar con <i>was</i> más preposición (<i>über was</i>) en lugar de <i>worüber</i>; la forma con <i>was</i> se oye en registro coloquial, pero no es la normativa. Y el cuarto es olvidar el anticipador y decir <i>Ich freue mich, dass du kommst</i> con verbos que lo exigen; algunos lo admiten sin él, pero la construcción plena siempre es correcta.</p>
`,
 q:["Ich warte schon eine Stunde ___ den Bus.|für|auf|an|nach|1|warten rige auf con acusativo, sin valor espacial.",
    "Interessierst du dich ___ Politik?|an|über|für|auf|2|sich interessieren se construye con für y acusativo.",
    "Wir nehmen ___ dem Seminar teil.|an|auf|in|über|0|teilnehmen rige an con dativo.",
    "Erinnerst du dich noch ___ unseren ersten Tag?|von|über|auf|an|3|sich erinnern rige an con acusativo.",
    "Ich denke oft ___ dich.|an|in|auf|über|0|denken an con acusativo; la traducción literal de pensar en es errónea.",
    "___ wartest du? Auf den Zug.|Auf wen|Worauf|Woran|Auf was für|1|Se pregunta por una cosa: adverbio interrogativo worauf con r de enlace.",
    "Wir haben lange ___ dieses Problem gesprochen.|von|mit|über|aus|2|La marca de acusativo en dieses Problem solo es compatible con sprechen über.",
    "Ich habe das Buch gelesen und wir haben lange ___ gesprochen.|über es|darüber|über das|davon es|1|El referente es una cosa: se sustituye por el compuesto darüber.",
    "Es hängt ___ ab, ob wir Zeit haben.|von es|davon|darauf|davor|1|abhängen rige von y el anticipador de la subordinada es davon.",
    "Ich freue mich schon jetzt ___ das Konzert nächste Woche.|über|an|für|auf|3|sich freuen auf apunta a un acontecimiento aún futuro."]},

{id:'reflexiv',t:'Verbos reflexivos y recíprocos: acusativo frente a dativo',sub:'Verbo',lvl:'B1',
 teoria:`
<h3>El paradigma</h3>
<p>El pronombre reflexivo alemán distingue caso, pero solo en la primera y la segunda persona del singular. En todas las demás la forma es idéntica a la del pronombre personal correspondiente, y en tercera persona, singular y plural, se usa <b>sich</b> para ambos casos.</p>
<table class="endtable"><tr><th>Persona</th><th>Acusativo</th><th>Dativo</th></tr>
<tr><td>ich</td><td>mich</td><td>mir</td></tr>
<tr><td>du</td><td>dich</td><td>dir</td></tr>
<tr><td>er, sie, es</td><td>sich</td><td>sich</td></tr>
<tr><td>wir</td><td>uns</td><td>uns</td></tr>
<tr><td>ihr</td><td>euch</td><td>euch</td></tr>
<tr><td>sie, Sie</td><td>sich</td><td>sich</td></tr></table>
<h3>Reflexivos propios e impropios</h3>
<p>Los <b>reflexivos propios</b> no existen sin el pronombre: no cabe <i>beeilen</i> sin <i>sich</i>. Pertenecen a este grupo <i>sich beeilen, sich erholen, sich verspäten, sich erkälten, sich bedanken, sich schämen, sich befinden, sich weigern</i>. El pronombre no es un objeto identificable con el sujeto, sino parte del lexema; por eso no se puede sustituir por un sustantivo ni coordinar con otro elemento.</p>
<p>Los <b>reflexivos impropios</b> son verbos transitivos ordinarios usados con un objeto que coincide con el sujeto: <i>Ich wasche das Kind</i> frente a <i>Ich wasche mich</i>. Aquí el pronombre sí es un objeto pleno y la construcción es paralela a la española.</p>
<h3>La alternancia de caso</h3>
<p>La regla que gobierna el bloque es de una simplicidad engañosa: el reflexivo va en <b>acusativo</b> cuando es el único objeto del verbo, y pasa a <b>dativo</b> cuando el verbo tiene ya <b>otro objeto en acusativo</b>. La casilla de acusativo solo se ocupa una vez.</p>
<table class="endtable"><tr><th>Sin otro objeto</th><th>Con objeto en acusativo</th></tr>
<tr><td>Ich wasche mich.</td><td>Ich wasche mir die Hände.</td></tr>
<tr><td>Ich ziehe mich an.</td><td>Ich ziehe mir den Mantel an.</td></tr>
<tr><td>Ich kämme mich.</td><td>Ich kämme mir die Haare.</td></tr></table>
<p>Un grupo de verbos lleva dativo de forma estable porque siempre aparece con complemento: <i>sich etwas vorstellen</i> (imaginar), <i>sich etwas merken</i> (retener en la memoria), <i>sich etwas ansehen</i> (mirar con detenimiento), <i>sich etwas überlegen</i> (reflexionar sobre algo), <i>sich etwas leisten</i> (permitirse). Adviértase que <i>sich vorstellen</i> en acusativo significa otra cosa: <i>Ich stelle mich vor</i> es presentarse, <i>Ich stelle mir das vor</i> es imaginárselo. La diferencia de caso es aquí diferencia de significado.</p>
<h3>Partes del cuerpo y posesivo</h3>
<p>Con partes del cuerpo y prendas de vestir el alemán prefiere <b>dativo más artículo determinado</b> donde el español emplea el posesivo. Se dice <i>Ich putze mir <b>die</b> Zähne</i>, no <i>meine Zähne</i>: el dativo ya indica a quién pertenecen. Es la misma economía que en francés o italiano, no en español.</p>
<h3>Recíprocos</h3>
<p>Las formas de plural <b>uns, euch, sich</b> son ambiguas entre lectura reflexiva y recíproca: <i>Sie waschen sich</i> admite se lavan a sí mismos y se lavan unos a otros. Para deshacer la ambigüedad se emplea <b>einander</b>, invariable, o se refuerza con <i>gegenseitig</i>: <i>Sie helfen <b>einander</b>.</i> Tras preposición, <i>einander</i> se suelda con ella y forma una sola palabra: <i>miteinander, voneinander, füreinander, übereinander</i>.</p>
<h3>Posición del pronombre</h3>
<p>El reflexivo tiende al principio del campo medio, justo detrás del verbo conjugado: <i>Gestern <b>habe ich mich</b> verspätet.</i> Si el sujeto es un sustantivo y hay inversión, el pronombre puede precederlo: <i>Gestern hat <b>sich der Zug</b> verspätet.</i> En la subordinada aparece inmediatamente tras la conjunción y el sujeto pronominal: <i>weil ich mich verspätet habe</i>.</p>
<h3>El error típico del hispanohablante</h3>
<p>El más costoso es suponer una correspondencia biunívoca con el español. Muchos verbos pronominales españoles no lo son en alemán: <i>levantarse</i> es <i>aufstehen</i>, <i>quedarse</i> es <i>bleiben</i>, <i>irse</i> es <i>weggehen</i>, <i>caerse</i> es <i>hinfallen</i>, y ninguno admite pronombre. A la inversa, <i>sich erholen</i> o <i>sich befinden</i> no tienen pronominal español evidente. El segundo error es usar el acusativo cuando ya hay otro objeto (<i>Ich wasche mich die Hände</i>) y el tercero, calcar el posesivo español en las partes del cuerpo.</p>
`,
 q:["Ich muss ___ beeilen, sonst komme ich zu spät.|mir|mich|sich|mein|1|sich beeilen es reflexivo propio y lleva acusativo: mich.",
    "Wäschst du ___ bitte die Hände?|dich|du|dein|dir|3|Hay un objeto en acusativo, die Hände, luego el reflexivo pasa a dativo.",
    "Kannst du ___ das vorstellen?|dich|dir|du|dein|1|sich etwas vorstellen con el sentido de imaginar rige dativo.",
    "Ich möchte ___ kurz vorstellen. Mein Name ist Klara.|mir|meiner|mein|mich|3|Con el sentido de presentarse el reflexivo va en acusativo.",
    "Wir sehen ___ den Film heute Abend an.|uns|unser|sich|euch|0|sich etwas ansehen lleva dativo, que en primera persona del plural coincide con uns.",
    "Die Kinder helfen ___ bei den Hausaufgaben.|sich selbst|einander|sich einander|ihnen|1|Para expresar reciprocidad sin ambigüedad se emplea einander.",
    "Gestern hat ___ der Bus verspätet.|sich|ihn|ihm|es|0|El reflexivo precede al sujeto sustantivo cuando hay inversión.",
    "Ich putze ___ nach dem Essen immer die Zähne.|meine|mich|mir|mein|2|Con partes del cuerpo el alemán usa dativo y artículo determinado.",
    "¿Cuál de estos verbos NO es reflexivo en alemán?|sich erkälten|sich erholen|aufstehen|sich schämen|2|aufstehen no lleva pronombre, aunque levantarse sí sea pronominal en español.",
    "Sie haben lange ___ gesprochen.|mit sich|zueinander sich|miteinander|sich mit|2|Tras preposición, einander se suelda y forma miteinander."]},

{id:'infinitivzu',t:'Infinitivo con zu: um…zu, ohne…zu, statt…zu',sub:'Verbo',lvl:'B1',
 teoria:`
<h3>Una subordinada sin sujeto propio</h3>
<p>El grupo de infinitivo con <b>zu</b> es una construcción de subordinación reducida: no tiene sujeto ni verbo conjugado, y por eso depende de que el sujeto se recupere del contexto. Ocupa el mismo lugar que una subordinada con <i>dass</i> y compite con ella. La forma básica es <code>zu + infinitivo</code> al final del grupo, con todos los complementos delante: <i>Ich versuche, <b>den Text zu verstehen</b>.</i></p>
<h3>Cuándo aparece</h3>
<p>Tres contextos lo requieren. Primero, verbos que rigen infinitivo: <i>versuchen, beginnen, anfangen, aufhören, vergessen, vorhaben, beschließen, hoffen, scheinen, brauchen</i> en frases negativas. Segundo, expresiones formadas con sustantivo o adjetivo más <i>sein</i> o <i>haben</i>: <i>Es ist wichtig, Lust haben, Zeit haben, keine Zeit haben, die Möglichkeit haben, es ist schwer</i>. Tercero, las tres conjunciones de infinitivo del epígrafe.</p>
<p>Igual de importante es dónde <b>no</b> aparece. Los <b>verbos modales</b> se construyen con infinitivo puro, sin <i>zu</i>, y lo mismo <i>werden</i> como auxiliar de futuro y los verbos <i>sehen, hören, lassen, bleiben, gehen, fahren, lernen, helfen</i>. Se dice <i>Ich muss arbeiten</i>, <i>Ich gehe schwimmen</i>, <i>Ich höre ihn kommen</i>.</p>
<h3>Verbos separables</h3>
<p>Con un verbo separable, <b>zu se intercala entre el prefijo y la raíz</b> y todo se escribe junto: <i>anrufen</i> da <i>anzurufen</i>; <i>einkaufen</i> da <i>einzukaufen</i>; <i>aufstehen</i> da <i>aufzustehen</i>. Los inseparables no se ven afectados: <i>zu verstehen</i>, <i>zu bekommen</i>.</p>
<h3>Las tres conjunciones</h3>
<table class="endtable"><tr><th>Forma</th><th>Valor</th><th>Español</th><th>Equivalente si los sujetos difieren</th></tr>
<tr><td>um … zu</td><td>finalidad</td><td>para</td><td>damit</td></tr>
<tr><td>ohne … zu</td><td>circunstancia negada</td><td>sin</td><td>ohne dass</td></tr>
<tr><td>statt … zu</td><td>sustitución</td><td>en lugar de</td><td>statt dass</td></tr></table>
<p><i>Ich lerne Deutsch, <b>um in Wien zu studieren</b>.</i> · <i>Er ging weg, <b>ohne etwas zu sagen</b>.</i> · <i>Statt zu arbeiten, sieht er fern.</i> La conjunción abre el grupo, <i>zu</i> más infinitivo lo cierra, y en medio caben todos los complementos. El grupo puede anteponerse; en tal caso ocupa la posición 1 y la principal invierte, como cualquier subordinada.</p>
<h3>La condición de identidad de sujeto</h3>
<p>Las tres exigen que el sujeto sobreentendido del infinitivo coincida con el de la principal. Si no coincide, hay que recurrir a la subordinada con verbo conjugado. La oposición se ve con nitidez en la finalidad: <i>Ich erkläre es noch einmal, <b>um</b> mich verständlich <b>zu</b> machen</i> tiene un solo sujeto; <i>Ich erkläre es noch einmal, <b>damit</b> alle mich verstehen</i> tiene dos y por eso no admite <i>um … zu</i>. La razón es estructural: el infinitivo carece de sujeto expreso, de modo que solo puede recuperarlo del sujeto de la principal.</p>
<h3>Puntuación</h3>
<p>Desde la reforma ortográfica la coma es facultativa ante un infinitivo simple, pero es <b>obligatoria</b> ante los grupos introducidos por <i>um, ohne, statt, anstatt</i> y siempre que el grupo dependa de un sustantivo anticipador. En la práctica escrita se recomienda ponerla en todos los casos: delimita el grupo y evita ambigüedades de lectura.</p>
<h3>El error típico del hispanohablante</h3>
<p>El primero es <b>omitir zu</b> por contagio del esquema modal, ya interiorizado: <i>Ich versuche verstehen</i> reproduce <i>intento entender</i> y es agramatical. El segundo es el inverso, añadir <i>zu</i> tras modal: <i>Ich muss zu arbeiten</i>. El tercero es separar <i>zu</i> del verbo separable y escribir <i>zu anrufen</i> en lugar de <i>anzurufen</i>. El cuarto es emplear <b>um … zu</b> con sujetos distintos, porque el español admite <i>para</i> en ambos casos y solo cambia el modo: <i>para que todos entiendan</i> exige <i>damit</i>, nunca <i>um … zu</i>. El quinto es colocar el infinitivo antes de sus complementos, calcando el orden español: se dice <i>um Deutsch zu lernen</i>, no <i>um zu lernen Deutsch</i>.</p>
`,
 q:["Ich habe leider keine Zeit, dich heute ___.|besuchen|besuchen zu|zu besuchen|zu besuch|2|Tras una expresión con Zeit haben se exige zu más infinitivo al final.",
    "Ich muss morgen früh ___.|aufzustehen|zu aufstehen|aufstehen|auf zu stehen|2|Tras un verbo modal el infinitivo va sin zu.",
    "Vergiss nicht, mich später ___.|anzurufen|zu anrufen|anrufen zu|an zu rufen|0|En los verbos separables zu se intercala entre prefijo y raíz.",
    "Er ist nach Wien gefahren, ___ dort Medizin zu studieren.|damit|ohne|statt|um|3|Finalidad con un único sujeto: um … zu.",
    "Ich erkläre es langsam, ___ alle mich verstehen.|um|damit|ohne|statt|1|Los sujetos son distintos, de modo que se necesita damit con verbo conjugado.",
    "Sie ging weg, ___ sich zu verabschieden.|ohne|um|statt|damit|0|La circunstancia negada se expresa con ohne … zu.",
    "___ zu lernen, hat er den ganzen Abend ferngesehen.|Um|Ohne|Statt|Damit|2|La sustitución de una actividad por otra se expresa con statt … zu.",
    "¿Cuál es correcta?|Ich hoffe, dich bald zu sehen.|Ich hoffe, zu sehen dich bald.|Ich hoffe, dich bald sehen.|Ich hoffe, dich zu bald sehen.|0|Los complementos preceden al bloque final de zu más infinitivo.",
    "Wir gehen jeden Samstag ___.|zu schwimmen|zum schwimmen|schwimmen zu|schwimmen|3|Tras gehen el infinitivo se construye sin zu.",
    "Es ist nicht leicht, eine neue Sprache ___.|lernen|zu lernen|zu lernen sie|lernen zu|1|Expresión impersonal con es ist más adjetivo: exige zu más infinitivo."]},

{id:'passiv1',t:'La pasiva de proceso (Vorgangspassiv) en presente y pasado',sub:'Verbo',lvl:'B1',
 teoria:`
<h3>Qué hace la pasiva</h3>
<p>La <b>Vorgangspassiv</b> desplaza el foco del agente al proceso. El objeto directo de la activa asciende a sujeto en nominativo, el verbo pasa a <b>werden más participio de perfecto</b>, y el agente desaparece o se degrada a complemento opcional. Es la forma característica de los textos técnicos, administrativos y periodísticos, donde importa qué se hace y no quién lo hace.</p>
<p><i>Der Techniker repariert die Maschine</i> se convierte en <i>Die Maschine <b>wird</b> repariert.</i> Adviértase que <i>die Maschine</i> era acusativo y ahora es nominativo; si el sujeto fuera masculino, el cambio sería visible: <i>den Wagen</i> pasa a <i>der Wagen</i>.</p>
<h3>Los tiempos</h3>
<table class="endtable"><tr><th>Tiempo</th><th>Forma</th><th>Ejemplo</th></tr>
<tr><td>Präsens</td><td>wird + participio</td><td>Das Haus wird gebaut.</td></tr>
<tr><td>Präteritum</td><td>wurde + participio</td><td>Das Haus wurde gebaut.</td></tr>
<tr><td>Perfekt</td><td>ist + participio + worden</td><td>Das Haus ist gebaut worden.</td></tr>
<tr><td>Plusquamperfekt</td><td>war + participio + worden</td><td>Das Haus war gebaut worden.</td></tr></table>
<p>Dos detalles son decisivos. El Perfekt de la pasiva usa <b>worden</b>, no <i>geworden</i>: la forma sin <i>ge-</i> queda reservada al auxiliar, mientras que <i>geworden</i> pertenece a <i>werden</i> como verbo pleno. Y el auxiliar del Perfekt pasivo es siempre <b>sein</b>, aunque el verbo léxico forme sus tiempos compuestos con <i>haben</i>. En la práctica escrita el Präteritum pasivo es mucho más frecuente que el Perfekt.</p>
<h3>El agente</h3>
<p>Cuando conviene mencionarlo, el agente se expresa con <b>von más dativo</b> si es persona o fuerza actuante, y con <b>durch más acusativo</b> si es un medio, una causa intermedia o un instrumento: <i>Das Haus wurde <b>von einem Architekten</b> entworfen</i> frente a <i>Das Dorf wurde <b>durch das Hochwasser</b> zerstört.</i> La mayoría de las pasivas reales prescinden del agente, que es justamente lo que la construcción permite callar.</p>
<h3>Objetos que no ascienden</h3>
<p>Solo el acusativo puede convertirse en sujeto. Los verbos que rigen <b>dativo</b> conservan su complemento en dativo y la oración pasiva queda <b>sin sujeto</b>, con el verbo en tercera persona del singular: <i>Dem Kind <b>wird</b> geholfen.</i> Nunca <i>Das Kind wird geholfen</i>. Lo mismo ocurre con los verbos intransitivos, que admiten una <b>pasiva impersonal</b> de valor genérico: <i>Hier <b>wird</b> nicht geraucht.</i> · <i>Sonntags wird lange geschlafen.</i> Si no hay otro elemento que ocupe la primera casilla, entra el expletivo <i>es</i>: <i><b>Es</b> wird viel gearbeitet.</i></p>
<p>Carecen de pasiva los verbos que no tienen objeto afectado: <i>haben, besitzen, kennen, wissen, bekommen, es gibt</i> y los reflexivos.</p>
<h3>Pasiva y modales</h3>
<p>Con verbo modal, el bloque final es <b>participio más werden</b> en infinitivo, y el modal conjugado ocupa la segunda posición: <i>Die Arbeit <b>muss</b> heute <b>gemacht werden</b>.</i> En subordinada todo se desplaza al final: <i>…, weil die Arbeit heute gemacht werden muss.</i></p>
<h3>El error típico del hispanohablante</h3>
<p>El primero es recurrir a la pasiva donde el alemán prefiere otra cosa. El <i>se</i> impersonal español se traduce con <b>man</b> más activa (<i>Man spricht hier Deutsch</i>) o con pasiva impersonal, pero no con un reflexivo: <i>Es spricht sich Deutsch</i> no existe. El segundo es confundir <b>werden</b> con <b>sein</b>: <i>Das Fenster wird geöffnet</i> describe el proceso, mientras que <i>Das Fenster ist geöffnet</i> describe el estado resultante y no es la misma construcción. El tercero es escribir <i>geworden</i> en el Perfekt pasivo. Y el cuarto es ascender a sujeto un complemento en dativo, calcando <i>el niño es ayudado</i>: el alemán mantiene <i>dem Kind</i> y deja la oración sin sujeto.</p>
`,
 q:["Der Techniker repariert den Wagen. En pasiva: Der Wagen ___ repariert.|ist|hat|wird|wurden|2|La pasiva de proceso en presente se forma con wird más participio.",
    "Das Museum ___ 1889 eröffnet.|wird|ist|wurde|hat|2|Referencia a un hecho pasado y datado: Präteritum pasivo wurde.",
    "Die Brücke ist letztes Jahr renoviert ___.|geworden|werden|gewesen|worden|3|El Perfekt pasivo usa worden, sin ge-.",
    "___ Kind wird geholfen.|Das|Dem|Der|Den|1|helfen rige dativo y ese complemento no asciende a sujeto en la pasiva.",
    "Das Dorf wurde ___ das Erdbeben zerstört.|von|mit|durch|bei|2|Una causa no personal se introduce con durch más acusativo.",
    "Der Roman wurde ___ einer jungen Autorin geschrieben.|durch|von|mit|aus|1|El agente personal se expresa con von más dativo.",
    "Hier ___ nicht geraucht.|ist|man|hat|wird|3|Pasiva impersonal de un verbo intransitivo con werden en tercera persona.",
    "Die Rechnung muss heute noch ___.|bezahlt werden|werden bezahlt|bezahlt sein|zu bezahlen werden|0|Con modal, el bloque final es participio más werden en infinitivo.",
    "¿Cuál equivale a Man baut hier ein Hotel?|Hier wird ein Hotel gebaut.|Hier ist ein Hotel gebaut.|Hier hat ein Hotel gebaut.|Hier baut sich ein Hotel.|0|El objeto en acusativo asciende a sujeto y el verbo pasa a wird más participio.",
    "Die Tür ist schon geöffnet expresa|un proceso en curso|un estado resultante|una orden|una suposición|1|Con sein y participio se describe el estado, no el proceso."]},

{id:'konjunktiv2a',t:'Konjunktiv II: cortesía, deseo e irrealidad presente',sub:'Verbo',lvl:'B1',
 teoria:`
<h3>Qué expresa</h3>
<p>El <b>Konjunktiv II</b> no es un tiempo, sino un modo: presenta el contenido como <b>no real</b>, ya sea porque es contrario a los hechos, porque solo se desea o porque el hablante prefiere no afirmarlo de frente. De esa última función deriva su uso más cotidiano, la <b>cortesía</b>: atenuar una petición equivale a fingir que no se está formulando.</p>
<h3>Formación</h3>
<p>La base es el <b>Präteritum</b>. Los verbos fuertes añaden <b>Umlaut</b> a la vocal radical cuando esta lo admite, más las terminaciones <code>-e, -est, -e, -en, -et, -en</code>. Los verbos débiles no distinguen forma alguna del Präteritum, y por eso el idioma los resuelve con la perífrasis <b>würde más infinitivo</b>.</p>
<table class="endtable"><tr><th>Infinitivo</th><th>Präteritum</th><th>Konjunktiv II</th></tr>
<tr><td>sein</td><td>war</td><td>ich wäre</td></tr>
<tr><td>haben</td><td>hatte</td><td>ich hätte</td></tr>
<tr><td>werden</td><td>wurde</td><td>ich würde</td></tr>
<tr><td>können</td><td>konnte</td><td>ich könnte</td></tr>
<tr><td>müssen</td><td>musste</td><td>ich müsste</td></tr>
<tr><td>dürfen</td><td>durfte</td><td>ich dürfte</td></tr>
<tr><td>mögen</td><td>mochte</td><td>ich möchte</td></tr>
<tr><td>sollen</td><td>sollte</td><td>ich sollte</td></tr>
<tr><td>wissen</td><td>wusste</td><td>ich wüsste</td></tr>
<tr><td>kommen</td><td>kam</td><td>ich käme</td></tr>
<tr><td>gehen</td><td>ging</td><td>ich ginge</td></tr></table>
<p>Obsérvese que <i>sollen</i> y <i>wollen</i> no toman Umlaut, de modo que su Konjunktiv II coincide con el Präteritum. Los modales, <i>sein</i>, <i>haben</i> y <i>wissen</i> usan siempre la forma sintética; combinarlos con <i>würde</i> se considera incorrecto en la lengua cuidada. Con los demás verbos, <b>würde más infinitivo</b> es hoy la variante no marcada, y las formas fuertes como <i>käme</i> o <i>ginge</i> suenan literarias fuera de un puñado de casos.</p>
<h3>Los tres usos del bloque</h3>
<table class="endtable"><tr><th>Función</th><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>cortesía</td><td>könnten, würden, hätten, wäre</td><td>Könnten Sie mir bitte helfen?</td></tr>
<tr><td>deseo</td><td>wenn … nur, ich wünschte</td><td>Wenn ich nur mehr Zeit hätte!</td></tr>
<tr><td>irrealidad presente</td><td>wenn + Konjunktiv II, würde en la principal</td><td>Wenn ich Zeit hätte, würde ich mitkommen.</td></tr>
<tr><td>consejo</td><td>an deiner Stelle, du solltest</td><td>An deiner Stelle würde ich warten.</td></tr>
<tr><td>comparación irreal</td><td>als ob + verbo final</td><td>Er tut so, als ob er alles wüsste.</td></tr></table>
<p>En la <b>cortesía</b> las fórmulas fijadas son <i>Könnten Sie…</i>, <i>Würden Sie bitte…</i>, <i>Ich hätte gern…</i>, <i>Ich möchte…</i>, <i>Wäre es möglich…</i>, <i>Dürfte ich…</i>. Frente al indicativo <i>Können Sie mir helfen?</i>, que pregunta por la capacidad real, el Konjunktiv II convierte la pregunta en ofrecimiento de rechazo.</p>
<p>En el <b>deseo</b>, la partícula <i>nur</i> o <i>doch nur</i> es casi obligatoria y la frase se cierra con signo de exclamación. Cabe también suprimir <i>wenn</i>: entonces el verbo encabeza la oración, <i>Hätte ich nur mehr Zeit!</i></p>
<p>En la <b>irrealidad presente</b>, la condicional lleva Konjunktiv II y la principal suele llevar <i>würde</i>. Duplicar <i>würde</i> en las dos oraciones se evita en la lengua cuidada: se dice <i>Wenn ich Zeit hätte, würde ich mitkommen</i>, no <i>Wenn ich Zeit haben würde, würde ich…</i>. Igual que en las demás subordinadas, <i>wenn</i> puede suprimirse y el verbo pasa al frente: <i>Hätte ich Zeit, würde ich mitkommen.</i></p>
<h3>El error típico del hispanohablante</h3>
<p>El primero es aplicar <b>würde</b> a los verbos que exigen forma sintética: <i>ich würde sein</i>, <i>ich würde haben</i>, <i>ich würde können</i> son incorrectos frente a <i>ich wäre</i>, <i>ich hätte</i>, <i>ich könnte</i>. El segundo es traducir el imperfecto de subjuntivo español por un Präteritum alemán, porque las formas se parecen: <i>si tuviera tiempo</i> no es <i>wenn ich Zeit hatte</i> sino <i>hätte</i>. El tercero es confundir <i>möchte</i> con <i>wollte</i>: <i>quisiera</i> es <i>ich möchte</i>, mientras que <i>ich wollte</i> significa quería. El cuarto es olvidar que <i>wenn</i> sigue siendo subordinante y colocar el verbo en segunda posición dentro de la condicional.</p>
`,
 q:["___ Sie mir bitte helfen?|Können|Konnten|Könnt|Könnten|3|La petición cortés exige el Konjunktiv II könnten.",
    "Wenn ich mehr Zeit ___, würde ich öfter Sport machen.|hatte|haben würde|hätte|habe|2|haben forma su Konjunktiv II de modo sintético: hätte.",
    "Ich ___ gern einen Kaffee, bitte.|habe|hätte|würde haben|hatte|1|Fórmula de cortesía fijada: ich hätte gern.",
    "An deiner Stelle ___ ich noch einen Tag warten.|werde|würde|wurde|wäre|1|Consejo hipotético con würde más infinitivo.",
    "Wenn ich du ___, würde ich das Angebot annehmen.|war|würde sein|bin|wäre|3|sein tiene forma propia de Konjunktiv II: wäre.",
    "___ ich nur früher angerufen!|Hätte|Habe|Hatte|Würde|0|Deseo irreal con supresión de wenn y verbo al frente.",
    "Er tut so, als ob er alles ___.|weiß|wusste|wüsste|wissen würde|2|Comparación irreal con als ob y Konjunktiv II de wissen.",
    "¿Cuál es la variante más cuidada?|Wenn ich Zeit hätte, würde ich kommen.|Wenn ich Zeit haben würde, würde ich kommen.|Wenn ich Zeit hatte, komme ich.|Wenn ich Zeit habe, würde ich kommen.|0|Se evita duplicar würde y se reserva la forma sintética a la condicional.",
    "Traduzca quisiera un billete.|Ich wollte eine Fahrkarte.|Ich möchte eine Fahrkarte.|Ich will eine Fahrkarte.|Ich mochte eine Fahrkarte.|1|El valor de cortesía corresponde a möchte, no a wollte, que significa quería.",
    "Du ___ mehr schlafen, du siehst müde aus.|sollst|wolltest|solltest|würdest sollen|2|El consejo atenuado se expresa con el Konjunktiv II solltest."]}
];

/* TEORÍA + QUIZ · bloque 5
   q: "enunciado|op0|op1|op2|op3|índice correcto|explicación"                       */
const GRAM5=[
{id:'passiv2',t:'Pasiva con modales, Zustandspassiv y alternativas a la pasiva',sub:'Verbo',lvl:'B2',
 teoria:`
<h3>Punto de partida</h3>
<p>Se da por consolidada la <b>pasiva de proceso</b> (Vorgangspassiv): <i>werden</i> conjugado más participio II, con el complemento agente introducido por <i>von</i> cuando se trata de un agente propiamente dicho y por <i>durch</i> cuando se trata de un medio, una causa o una instancia intermediaria: <i>Der Text wurde von einem Fachmann geprüft</i> frente a <i>Die Stadt wurde durch ein Erdbeben zerstört</i>. Lo que sigue amplía ese esquema en tres direcciones: la combinación con verbos modales, la pasiva de estado y el repertorio de construcciones que producen el mismo efecto de despersonalización sin recurrir a la pasiva.</p>
<h3>Pasiva con verbo modal</h3>
<p>El modal se conjuga y ocupa la segunda posición; el resto del predicado se acumula al final del paréntesis verbal en el orden fijo <code>participio II + werden</code>: <i>Der Antrag muss bis Freitag eingereicht werden</i>. El infinitivo <i>werden</i> cierra siempre la cadena y no admite desplazamiento. En la subordinada el verbo finito se sitúa detrás de todo el grupo: <i>Ich weiß, dass der Antrag bis Freitag eingereicht werden muss</i>.</p>
<p>Para referir esa misma estructura al pasado, la lengua escrita prefiere sin excepción el <b>Präteritum</b> del modal: <i>Der Antrag musste eingereicht werden</i>. El Perfekt es formalmente posible con Ersatzinfinitiv (<i>Der Antrag hat eingereicht werden müssen</i>) y obliga en la subordinada a anteponer el auxiliar al bloque de infinitivos (<i>..., dass der Antrag hat eingereicht werden müssen</i>), pero resulta pesado y se evita.</p>
<h3>Vorgangspassiv frente a Zustandspassiv</h3>
<p>El <b>Zustandspassiv</b> se construye con <i>sein</i> más participio II y no describe un proceso, sino el <b>estado resultante</b> de ese proceso. La oposición es aspectual, no temporal.</p>
<table class="endtable"><tr><th>Construcción</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>werden + Part. II</td><td>proceso, transición</td><td>Der Laden wird um acht geöffnet.</td></tr>
<tr><td>sein + Part. II</td><td>estado resultante</td><td>Der Laden ist seit acht geöffnet.</td></tr>
<tr><td>Präteritum del proceso</td><td>transición pasada</td><td>Der Laden wurde um acht geöffnet.</td></tr>
<tr><td>Präteritum del estado</td><td>estado pasado</td><td>Der Laden war den ganzen Tag geöffnet.</td></tr></table>
<p>La restricción decisiva es <b>aspectual</b>: solo admiten Zustandspassiv los verbos télicos, los que dejan tras de sí un resultado observable (<i>öffnen, schließen, reparieren, verbieten, besetzen</i>). Los atélicos y los intransitivos quedan excluidos: <i>das geschlafene Kind</i> o <i>das Buch ist gelesen</i> son agramaticales o marginales, mientras que <i>Das Buch ist ausgeliehen</i> es impecable porque el préstamo deja un estado.</p>
<p>Hay además una trampa formal: <i>sein</i> más participio II es también el <b>Perfekt</b> de los verbos intransitivos de movimiento y cambio de estado. En <i>Der Zug ist angekommen</i> no hay pasiva alguna, porque <i>ankommen</i> carece de objeto que promover a sujeto. El criterio seguro es la transitividad del verbo, no la forma superficial.</p>
<h3>La pasiva impersonal</h3>
<p>Los verbos intransitivos admiten una pasiva sin sujeto que tematiza la acción misma: <i>Hier wird nicht geraucht</i>, <i>Es wurde bis Mitternacht getanzt</i>. El <i>es</i> es un mero relleno del primer campo y desaparece en cuanto otro elemento lo ocupa.</p>
<h3>Alternativas a la pasiva</h3>
<table class="endtable"><tr><th>Construcción</th><th>Valor modal</th><th>Registro</th><th>Ejemplo</th></tr>
<tr><td>man + activa</td><td>neutro, generalizador</td><td>todos</td><td>Man löst das Problem leicht.</td></tr>
<tr><td>sich lassen + Inf.</td><td>posibilidad (können)</td><td>neutro</td><td>Das Problem lässt sich leicht lösen.</td></tr>
<tr><td>sein + zu + Inf.</td><td>necesidad o posibilidad</td><td>escrito, formal</td><td>Die Formulare sind bis Montag auszufüllen.</td></tr>
<tr><td>adjetivo en -bar, -lich</td><td>propiedad, posibilidad</td><td>neutro</td><td>Das Problem ist lösbar.</td></tr>
<tr><td>reflexivo medial</td><td>disposición del objeto</td><td>neutro</td><td>Das Buch verkauft sich gut.</td></tr>
<tr><td>bekommen + Part. II</td><td>promueve el dativo</td><td>coloquial y neutro</td><td>Er bekommt das Buch geschenkt.</td></tr></table>
<p>La construcción <i>sein</i> más <i>zu</i> más infinitivo es ambigua entre necesidad y posibilidad y se desambigua por el contexto: <i>Der Text ist bis morgen zu korrigieren</i> equivale a <i>muss korrigiert werden</i>; <i>Der Fehler ist kaum zu übersehen</i> equivale a <i>kann kaum übersehen werden</i>. La construcción con <i>bekommen</i> es la única que promueve a sujeto el objeto en dativo, algo que la pasiva canónica no puede hacer.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>Primero, el calco de la pasiva refleja: la secuencia española <i>se vende pan</i> no se traduce con un reflexivo alemán, sino con <i>Brot wird verkauft</i> o <i>Man verkauft Brot</i>. Segundo, la proyección de la oposición ser y estar sobre <i>werden</i> y <i>sein</i> funciona como orientación, pero falla en los verbos atélicos, donde el alemán simplemente no forma Zustandspassiv. Tercero, la omisión del infinitivo <i>werden</i> al final de la pasiva con modal, que produce enunciados sin predicado completo. Cuarto, el uso de <i>von</i> con causas naturales, donde el alemán exige <i>durch</i>.</p>
`,
 q:["Elija la subordinada correcta.|Ich weiß, dass der Antrag muss eingereicht werden.|Ich weiß, dass der Antrag eingereicht muss werden.|Ich weiß, dass der Antrag eingereicht werden muss.|Ich weiß, dass der Antrag werden eingereicht muss.|2|En la subordinada el modal finito cierra la oración detrás del grupo formado por el participio y el infinitivo werden.",
    "Um acht Uhr ___ der Laden geöffnet, und seitdem ist er geöffnet.|ist|war|wurde|hat|2|El momento puntual de la apertura exige la pasiva de proceso en Präteritum; ist geöffnet designaría el estado resultante.",
    "Die Altstadt wurde ___ ein Hochwasser schwer beschädigt.|von|durch|mit|aus|1|durch introduce la causa o el medio; von queda reservado al agente propiamente dicho.",
    "Reformule con sich lassen: Das Problem kann leicht gelöst werden.|Das Problem lässt sich leicht lösen.|Das Problem lässt sich leicht gelöst.|Das Problem wird sich leicht lösen.|Das Problem lässt sich leicht zu lösen.|0|sich lassen más infinitivo equivale a können más pasiva y no admite ni participio ni zu.",
    "Die Formulare sind bis Montag ___.|ausfüllen|ausgefüllt zu haben|zu ausfüllen|auszufüllen|3|En sein más zu más infinitivo el verbo separable intercala zu entre el prefijo y la raíz.",
    "El adjetivo lösbar equivale semánticamente a|gelöst worden sein|gelöst werden müssen|gelöst werden können|sich lösen lassen müssen|2|El sufijo -bar expresa posibilidad pasiva, es decir, el valor de können combinado con la pasiva.",
    "Traslade al pasado: Der Termin muss verschoben werden.|Der Termin hat verschoben werden gemusst.|Der Termin musste verschoben werden.|Der Termin ist verschoben werden müssen.|Der Termin wurde verschoben müssen.|1|La pasiva con modal forma su pasado con el Präteritum del modal, que es la variante que prefiere la lengua escrita.",
    "Convierta en pasiva de proceso: Man hat den Vorschlag abgelehnt.|Der Vorschlag ist abgelehnt.|Der Vorschlag wurde abgelehnt worden.|Der Vorschlag hat abgelehnt worden.|Der Vorschlag ist abgelehnt worden.|3|El Perfekt de la pasiva de proceso se forma con sein más participio más worden, no con geworden.",
    "En Der Brief ist gestern angekommen tenemos|el Perfekt activo de un verbo intransitivo|un Zustandspassiv|un Vorgangspassiv|una pasiva con modal|0|ankommen es intransitivo y forma el Perfekt con sein; sin objeto no hay pasiva posible.",
    "¿Cuál de estos verbos no admite Zustandspassiv?|reparieren|verbieten|schlafen|besetzen|2|schlafen es intransitivo y atélico: no promueve ningún objeto ni deja un estado resultante.",
    ]},

{id:'konjunktiv2b',t:'Konjunktiv II del pasado y condicionales irreales',sub:'Verbo',lvl:'B2',
 teoria:`
<h3>Una sola forma de pasado</h3>
<p>El indicativo alemán distribuye el pasado en tres tiempos, pero el <b>Konjunktiv II</b> los reduce a uno solo: <i>hätte</i> o <i>wäre</i> más participio II. No existe correlato subjuntivo de la oposición entre Präteritum, Perfekt y Plusquamperfekt; la elección del auxiliar sigue exactamente las reglas del Perfekt indicativo.</p>
<table class="endtable"><tr><th>Indicativo</th><th>Konjunktiv II presente</th><th>Konjunktiv II pasado</th></tr>
<tr><td>ich habe Zeit</td><td>ich hätte Zeit</td><td>ich hätte Zeit gehabt</td></tr>
<tr><td>ich komme</td><td>ich käme / würde kommen</td><td>ich wäre gekommen</td></tr>
<tr><td>ich kann helfen</td><td>ich könnte helfen</td><td>ich hätte helfen können</td></tr>
<tr><td>es wird repariert</td><td>es würde repariert</td><td>es wäre repariert worden</td></tr></table>
<h3>La perífrasis con würde y sus límites</h3>
<p>La perífrasis <i>würde</i> más infinitivo sustituye a las formas sintéticas poco usuales o ambiguas de los verbos débiles y de buena parte de los fuertes (<i>ich würde fragen</i>, no <i>ich fragte</i>, que coincide con el Präteritum). Pero <b>no existe en el pasado</b>: la secuencia con infinitivo perfecto es ajena a la norma escrita. Para el pasado solo hay <i>hätte</i> o <i>wäre</i> más participio. Además, en el registro cuidado se evita <i>würde</i> dentro de la prótasis introducida por <i>wenn</i>, donde se prefiere la forma sintética o el auxiliar.</p>
<h3>Modales y pasiva: el Ersatzinfinitiv</h3>
<p>Cuando el predicado contiene un modal, el participio del modal se sustituye por su infinitivo: <i>Ich hätte dir helfen <b>können</b></i>, nunca <i>gekonnt</i>. Esto tiene una consecuencia sintáctica que suele fallar: en la subordinada, el verbo finito <b>no</b> va al final, sino <b>delante</b> del bloque de infinitivos: <i>Es ärgert mich, dass ich dir nicht <b>hätte</b> helfen können</i>. La pasiva se integra en el mismo esquema: <i>Der Fehler <b>hätte</b> vermieden werden können</i>.</p>
<h3>El período condicional irreal</h3>
<p>La prótasis va en Konjunktiv II y la apódosis también; mezclar tiempos es posible y frecuente cuando la consecuencia alcanza al presente.</p>
<table class="endtable"><tr><th>Tipo</th><th>Prótasis</th><th>Apódosis</th></tr>
<tr><td>irreal de presente</td><td>Wenn ich Zeit hätte,</td><td>käme ich mit.</td></tr>
<tr><td>irreal de pasado</td><td>Wenn ich Zeit gehabt hätte,</td><td>wäre ich mitgekommen.</td></tr>
<tr><td>mixto</td><td>Wenn ich damals studiert hätte,</td><td>hätte ich heute einen besseren Job.</td></tr></table>
<p>La conjunción <i>wenn</i> puede suprimirse; entonces la prótasis se convierte en oración con el <b>verbo en primera posición</b> y la apódosis suele abrirse con <i>so</i> o <i>dann</i>: <i>Hätte ich mehr Zeit gehabt, so hätte ich den Text überarbeitet</i>. Es un recurso de registro elevado, muy productivo en la prosa argumentativa.</p>
<h3>Otros usos del Konjunktiv II pasado</h3>
<p><b>Deseo irreal:</b> con <i>nur</i> o <i>bloß</i> y entonación exclamativa: <i>Wenn er nur früher gekommen wäre!</i> o, sin conjunción, <i>Wäre er nur früher gekommen!</i></p>
<p><b>Reproche:</b> con los modales <i>sollen</i> y <i>müssen</i>: <i>Du hättest anrufen sollen</i>, <i>Das hättest du früher sagen müssen</i>. Es la fórmula habitual de la crítica retrospectiva.</p>
<p><b>Comparación irreal:</b> <i>als ob</i> o <i>als wenn</i> con verbo final, o bien <i>als</i> con verbo en segunda posición: <i>Er tat so, als ob er nichts gewusst hätte</i> o <i>Er tat so, als hätte er nichts gewusst</i>. La variante con <i>als</i> y verbo pospuesto es agramatical.</p>
<p><b>Acontecimiento evitado por poco:</b> con <i>beinahe</i> o <i>fast</i>: <i>Ich wäre beinahe gestürzt</i>. El adverbio es obligatorio, porque es él quien cancela la realización del hecho.</p>
<p><b>Cortesía y sugerencia atenuada:</b> <i>An deiner Stelle hätte ich abgesagt</i>, <i>Das wäre alles</i>.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>El primero y más persistente es la elección del auxiliar: el condicional compuesto español se forma siempre con <i>haber</i>, de modo que <i>habría venido</i> induce a producir la forma con <i>hätte</i> cuando el alemán exige <i>wäre gekommen</i>. El segundo es el intento de trasladar <i>würde</i> al pasado. El tercero es colocar el verbo finito al final en las subordinadas con Ersatzinfinitiv. El cuarto es olvidar que el español distingue imperfecto de subjuntivo y pluscuamperfecto en la prótasis, distinción que en alemán se marca exclusivamente por la presencia o ausencia del participio.</p>
`,
 q:["Wenn ich das gewusst hätte, ___ ich nicht gekommen.|hätte|wäre|würde|war|1|kommen forma sus tiempos compuestos con sein, de modo que el Konjunktiv II de pasado es wäre gekommen.",
    "Elija la subordinada correcta con Ersatzinfinitiv.|Es ärgert mich, dass ich dir nicht helfen können hätte.|Es ärgert mich, dass ich dir nicht helfen gekonnt hätte.|Es ärgert mich, dass ich dir nicht hätte helfen können.|Es ärgert mich, dass ich dir nicht gekonnt helfen hätte.|2|Con Ersatzinfinitiv el auxiliar finito se antepone al bloque de infinitivos en lugar de cerrar la oración.",
    "Der Fehler ___ leicht vermieden werden können.|hätte|wäre|würde|müsste|0|La pasiva con modal en Konjunktiv II de pasado se construye con hätte más participio más werden más el modal en infinitivo.",
    "¿Cuál es agramatical en la norma escrita?|Ich wäre gerne gekommen.|Ich würde gerne kommen.|Ich hätte gerne geholfen.|Ich würde gerne gekommen sein.|3|El Konjunktiv II de pasado no admite perífrasis con würde: solo hätte o wäre más participio.",
    "Suprima wenn: Wenn er mich gefragt hätte, hätte ich geholfen.|Er hätte mich gefragt, hätte ich geholfen.|Hätte er mich gefragt, hätte ich geholfen.|Wäre er mich gefragt, hätte ich geholfen.|Hätte mich er gefragt, hätte ich geholfen.|1|Sin conjunción la prótasis coloca el verbo finito en primera posición y conserva el orden sujeto más complementos.",
    "Exprese un reproche: Du ___ mich anrufen ___.|hättest ... gesollt|wärest ... sollen|hättest ... sollen|würdest ... sollen|2|El reproche retrospectivo se formula con hätte más infinitivo más el modal en Ersatzinfinitiv.",
    "Er tat so, ___ er nichts bemerkt hätte.|als|als ob|als wenn er|wie ob|1|Con als ob el verbo finito va al final; con als solo se admite el verbo en segunda posición.",
    "Ich ___ beinahe den Zug verpasst.|habe|hätte|wäre|würde|1|verpassen forma sus compuestos con haben, y beinahe exige Konjunktiv II para cancelar la realización del hecho.",
    "Wenn ich damals mehr gespart hätte, ___ ich jetzt keine Sorgen.|hätte|habe|wäre|hätte gehabt|0|Condicional mixto: prótasis de pasado y apódosis de presente, que aquí es hätte sin participio.",
    "Sie ___ ohne Hilfe nicht rechtzeitig fertig geworden.|hätte|wäre|würde|hatte|1|werden forma sus tiempos compuestos con sein, de manera que el Konjunktiv II de pasado es wäre geworden.",
    ]},

{id:'subjektiv',t:'Verbos modales con significado subjetivo: la conjetura',sub:'Verbo',lvl:'B2',
 teoria:`
<h3>Dos lecturas del mismo verbo</h3>
<p>Todo verbo modal alemán admite dos interpretaciones. En la <b>objetiva</b>, el modal describe una relación entre el sujeto y la acción: obligación, permiso, capacidad, voluntad. En la <b>subjetiva</b>, el modal no dice nada del sujeto: expresa el <b>grado de compromiso del hablante</b> con la verdad de lo enunciado. <i>Er muss arbeiten</i> significa que está obligado a trabajar; <i>Er muss krank sein</i> significa que el hablante deduce, con alta certeza, que está enfermo.</p>
<p>La lectura subjetiva no es una metáfora ni una extensión ocasional: es un valor gramaticalizado con marcas formales propias, que conviene aprender como un sistema cerrado y escalado.</p>
<h3>La escala de certeza</h3>
<table class="endtable"><tr><th>Modal</th><th>Grado</th><th>Paráfrasis</th><th>Ejemplo</th></tr>
<tr><td>müssen</td><td>certeza deductiva alta</td><td>ganz sicher</td><td>Er muss krank sein.</td></tr>
<tr><td>dürfte</td><td>probabilidad moderada</td><td>wahrscheinlich</td><td>Sie dürfte schon zu Hause sein.</td></tr>
<tr><td>können / könnte</td><td>posibilidad abierta</td><td>vielleicht</td><td>Das könnte stimmen.</td></tr>
<tr><td>mögen</td><td>concesión, admisión</td><td>durchaus möglich</td><td>Das mag stimmen, aber ...</td></tr>
<tr><td>nicht können</td><td>imposibilidad</td><td>ausgeschlossen</td><td>Das kann nicht stimmen.</td></tr>
<tr><td>wollen</td><td>afirmación del sujeto, dudosa</td><td>er behauptet</td><td>Er will nichts gewusst haben.</td></tr>
<tr><td>sollen</td><td>rumor, fuente ajena</td><td>es heißt</td><td>Er soll sehr reich sein.</td></tr></table>
<p>Las dos últimas casillas son de naturaleza distinta a las anteriores: no gradúan la certeza del hablante, sino que señalan la <b>fuente de la información</b>. Con <i>wollen</i> la fuente es el propio sujeto de la oración, y el hablante se distancia de lo dicho; con <i>sollen</i> la fuente es un tercero indeterminado, y el hablante ni suscribe ni rechaza. Es el equivalente funcional del Konjunktiv I del estilo indirecto, pero disponible en cualquier registro.</p>
<h3>La marca formal del pasado</h3>
<p>Aquí está la clave técnica del capítulo. En la lectura subjetiva, el pasado <b>no se marca en el modal</b>, sino en el infinitivo, que pasa a ser <b>infinitivo perfecto</b>: participio II más <i>haben</i> o <i>sein</i>.</p>
<table class="endtable"><tr><th>Forma</th><th>Lectura</th><th>Sentido</th></tr>
<tr><td>Er muss krank sein.</td><td>subjetiva, presente</td><td>seguramente está enfermo</td></tr>
<tr><td>Er muss krank gewesen sein.</td><td>subjetiva, pasado</td><td>seguramente estuvo enfermo</td></tr>
<tr><td>Er musste krank sein.</td><td>objetiva, pasado</td><td>estaba obligado a estar enfermo</td></tr>
<tr><td>Er soll das gesagt haben.</td><td>subjetiva, pasado</td><td>dicen que lo dijo</td></tr></table>
<p>Trasladar el modal al Präteritum cancela por completo la lectura subjetiva y devuelve la objetiva. Por eso la conjetura sobre el pasado exige siempre el infinitivo perfecto, y por eso el Perfekt del propio modal (<i>hat gemusst</i>) es incompatible con este valor.</p>
<h3>Restricciones y detalles</h3>
<p><b>dürfte</b> solo funciona como conjetura en Konjunktiv II. El indicativo <i>darf</i> conserva únicamente el valor de permiso, de modo que la pareja <i>darf</i> y <i>dürfte</i> no forman un paradigma temporal sino dos unidades distintas. <b>mögen</b> en sentido concesivo pertenece al registro escrito y suele ir seguido de una restricción con <i>aber</i> o <i>doch</i>; en la lengua hablada se sustituye por <i>schon</i> más <i>aber</i>.</p>
<p>Junto a los modales, el alemán dispone de <b>werden</b> más <i>wohl</i> para la conjetura: <i>Er wird wohl im Büro sein</i>, <i>Sie wird es wohl vergessen haben</i>. Es la variante más frecuente en la conversación y compite con <i>dürfte</i>.</p>
<p>La negación se comporta de forma asimétrica. <i>Er muss nicht krank sein</i> no es la negación de la deducción, sino una lectura objetiva de ausencia de obligación; la negación de la certeza se expresa con <i>kann nicht</i>: <i>Er kann nicht krank sein</i>.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>El español distingue <i>deber</i> de <i>deber de</i> justamente para separar obligación y conjetura, distinción que se ha ido perdiendo en el uso. El alemán no dispone de dos verbos, sino de dos construcciones, y la diferencia se juega en la morfología del infinitivo. De ahí los dos errores canónicos: usar <i>musste</i> donde correspondía <i>muss ... gewesen sein</i>, y traducir <i>sollen</i> por deber, cuando en lectura subjetiva significa que se rumorea. Un tercer error consiste en interpretar <i>Er will Arzt sein</i> como una voluntad, cuando enuncia una pretensión del sujeto de la que el hablante desconfía.</p>
`,
 q:["Er hat nicht geantwortet. Er ___ schon geschlafen haben.|musste|muss|müsste haben|hat müssen|1|La conjetura sobre el pasado mantiene el modal en presente y marca el pasado en el infinitivo perfecto.",
    "Er musste um acht im Büro sein significa|seguramente estaba en la oficina|tenía la obligación de estar en la oficina|dicen que estaba en la oficina|podría haber estado en la oficina|1|El modal en Präteritum cancela la lectura subjetiva y solo admite la objetiva de obligación.",
    "Traduzca: dicen que ha escrito tres novelas.|Er will drei Romane geschrieben haben.|Er muss drei Romane geschrieben haben.|Er soll drei Romane geschrieben haben.|Er dürfte drei Romane geschrieben haben.|2|sollen en lectura subjetiva remite a una fuente ajena e indeterminada.",
    "Er will von nichts gewusst haben expresa|una deducción del hablante|un rumor de terceros|un deseo del sujeto|una afirmación del sujeto de la que el hablante se distancia|3|Con wollen subjetivo la fuente es el propio sujeto y el hablante marca su reserva.",
    "Ordene la escala de menor a mayor certeza.|könnte, dürfte, muss|muss, dürfte, könnte|dürfte, könnte, muss|könnte, muss, dürfte|0|La posibilidad abierta precede a la probabilidad moderada y esta a la deducción firme.",
    "¿Cuál es la negación de la certeza en Er muss krank sein?|Er muss nicht krank sein.|Er kann nicht krank sein.|Er darf nicht krank sein.|Er soll nicht krank sein.|1|müssen negado expresa ausencia de obligación; la imposibilidad epistémica se marca con kann nicht.",
    "Sie ___ inzwischen angekommen sein.|darf|durfte|dürfte|hat dürfen|2|El valor de probabilidad moderada solo existe en la forma de Konjunktiv II dürfte; darf significa permiso.",
    "Sustituya por una perífrasis con werden: Er ist wahrscheinlich im Büro.|Er werde wohl im Büro sein.|Er wird wohl im Büro sein.|Er wird im Büro gewesen sein wohl.|Er würde wohl im Büro sein.|1|werden más wohl más infinitivo es la fórmula corriente de conjetura sobre el presente.",
    "Das mag stimmen, aber es hilft uns nicht. Aquí mögen expresa|gusto o preferencia|obligación atenuada|concesión del hablante|rumor|2|En registro escrito mögen admite lo dicho como posible y prepara una restricción.",
    "¿Cuál combina correctamente conjetura y pasado?|Er hat krank sein gemusst.|Er musste krank gewesen sein.|Er muss krank gewesen sein.|Er muss gewesen krank sein.|2|El modal permanece en presente y el infinitivo perfecto aporta la referencia al pasado.",
    ]},

{id:'relativ2',t:'Relativos con preposición, genitivo relativo y was o wo-',sub:'Sintaxis',lvl:'B2',
 teoria:`
<h3>Recordatorio operativo</h3>
<p>El pronombre relativo toma el <b>género y el número</b> del antecedente y el <b>caso</b> de la función que desempeña dentro de la subordinada. Esta doble dependencia es el mecanismo entero; todo lo que sigue son ampliaciones de ella.</p>
<table class="endtable"><tr><th>Caso</th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>Nominativo</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Acusativo</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dativo</td><td>dem</td><td>der</td><td>dem</td><td>denen</td></tr>
<tr><td>Genitivo</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr></table>
<h3>Relativo regido por preposición</h3>
<p>Cuando el relativo depende de una preposición, esta encabeza obligatoriamente la subordinada y determina el caso: <i>Der Kollege, <b>mit dem</b> ich zusammenarbeite, ist krank</i>. El alemán no admite el desplazamiento de la preposición al final que el inglés permite y que el español tampoco tolera. El error más frecuente es tomar el caso del antecedente en la principal en lugar de la rección de la preposición.</p>
<p>Con las preposiciones de doble rección hay que decidir además entre acusativo y dativo según el criterio habitual: <i>das Haus, <b>in dem</b> ich wohne</i> frente a <i>das Haus, <b>in das</b> ich ziehe</i>.</p>
<h3>El genitivo relativo</h3>
<p>Las formas <b>dessen</b> y <b>deren</b> no concuerdan con el sustantivo que las sigue, sino con el <b>antecedente</b>, y permanecen invariables sea cual sea la función del grupo dentro de la subordinada.</p>
<p><i>Der Mann, <b>dessen</b> Auto gestohlen wurde, wohnt hier.</i> · <i>Die Frau, <b>deren</b> Bücher ich lese, ist Historikerin.</i> · <i>Der Autor, <b>mit dessen</b> Werk ich mich beschäftige, ist unbekannt.</i></p>
<p>Dos consecuencias formales suelen escaparse. Primera: el sustantivo que sigue a <i>dessen</i> o <i>deren</i> va <b>sin artículo</b>. Segunda: un adjetivo intercalado recibe <b>terminación fuerte</b>, porque <i>dessen</i> no funciona como determinante: <i>der Kollege, <b>dessen neuer</b> Wagen ...</i>, no <i>neue</i>.</p>
<h3>was y los compuestos con wo-</h3>
<p>Se usa <b>was</b>, y no <i>das</i>, cuando el antecedente es:</p>
<ul>
<li>un pronombre indefinido neutro: <i>alles, nichts, etwas, vieles, weniges, manches</i>;</li>
<li>el demostrativo <i>das</i>: <i>Das, was du sagst, stimmt nicht.</i>;</li>
<li>un superlativo neutro sustantivado: <i>das Beste, was mir passieren konnte</i>;</li>
<li>una oración entera: <i>Er hat gelogen, <b>was</b> mich sehr geärgert hat.</i></li>
</ul>
<p>Si en esos mismos contextos el relativo va regido por preposición, la lengua estándar no usa preposición más <i>was</i>, sino un <b>compuesto con wo-</b>, con <i>-r-</i> epentética ante vocal: <i>Das ist etwas, <b>worüber</b> wir reden müssen</i>, <i>Er kam zu spät, <b>womit</b> niemand gerechnet hatte</i>. La restricción decisiva es que los compuestos con <i>wo-</i> <b>no</b> se emplean con antecedentes de persona: se dice <i>der Mann, mit dem ich sprach</i> y nunca la variante con <i>womit</i>.</p>
<h3>Relativos locales y welcher</h3>
<p>El adverbio <b>wo</b> sustituye a preposición más relativo en indicaciones de lugar y de tiempo: <i>die Stadt, <b>wo</b> ich wohne</i> junto a <i>die Stadt, in der ich wohne</i>. Con <b>nombres propios</b> de lugar es la única opción, porque un topónimo sin artículo no admite pronombre: <i>Berlin, <b>wo</b> ich studiert habe</i>. Existen además <i>wohin</i> y <i>woher</i> para dirección y procedencia.</p>
<p>Las formas <b>welcher, welche, welches</b> son una variante estilística de registro elevado y algo anticuado. Su utilidad real es evitar secuencias homófonas incómodas del tipo <i>die, die</i>: <i>diejenigen, welche sich gemeldet haben</i>. No tiene genitivo propio y toma <i>dessen</i> y <i>deren</i>.</p>
<h3>Relativas libres</h3>
<p>Sin antecedente expreso se emplean <b>wer, wen, wem, wessen</b> y <b>was</b>: <i>Wer nicht fragt, bleibt dumm</i>. Si el caso de la relativa y el de la principal no coinciden, la principal retoma el elemento con un demostrativo: <i>Wem ich vertraue, <b>dem</b> helfe ich auch</i>.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>Primero, el calco de <i>el cual</i> mediante <i>welcher</i> en contextos neutros, que eleva innecesariamente el registro. Segundo, la concordancia del genitivo relativo con el sustantivo siguiente en lugar de con el antecedente. Tercero, el uso de <i>was</i> con antecedentes nominales concretos, donde el español admite un <i>lo que</i> generalizador. Cuarto, la omisión de la coma, que en alemán es obligatoria y delimita la subordinada en ambos extremos.</p>
`,
 q:["Der Kollege, ___ ich seit Jahren zusammenarbeite, geht in Rente.|mit den|mit dem|mit welchen|dem mit|1|La preposición mit rige dativo y encabeza obligatoriamente la subordinada.",
    "Die Frau, ___ Sohn in meiner Klasse ist, hat angerufen.|derer|dessen|deren|die|2|El genitivo relativo concuerda con el antecedente femenino, no con el sustantivo que le sigue.",
    "Der Professor, ___ Buch ich mich beziehe, lehrt in Wien.|auf dessen|auf deren|auf dessem|dessen auf|0|dessen es invariable y la preposición auf se antepone al grupo entero.",
    "Das ist alles, ___ ich weiß.|das|was|welches|dem|1|Tras el indefinido neutro alles el relativo es was.",
    "Er hat den Termin vergessen, ___ mich sehr geärgert hat.|das|dem|welches|was|3|Cuando el antecedente es la oración entera, el relativo es was.",
    "Das ist ein Thema, ___ wir noch sprechen müssen.|worüber|über das|über was|wovon das|1|Con un antecedente nominal concreto la lengua estándar prefiere preposición más pronombre.",
    "Berlin, ___ ich studiert habe, hat sich stark verändert.|in dem|worin|wo|in welchem|2|Los topónimos sin artículo solo admiten el adverbio relativo wo.",
    "Die Kinder, ___ ich das Buch geschenkt habe, waren begeistert.|die|denen|deren|dem|1|schenken rige dativo y el dativo plural del relativo es denen.",
    "Der Kollege, dessen ___ Wagen gestohlen wurde, ist versichert.|neue|neuer|neuen|neues|1|Tras dessen el adjetivo recibe terminación fuerte porque el genitivo relativo no funciona como determinante.",
    "___ ich vertraue, dem helfe ich auch.|Wer|Wen|Wem|Wessen|2|vertrauen rige dativo, de modo que la relativa libre se abre con wem y la principal retoma con dem.",
    ]},

{id:'konnektoren2',t:'Conectores de argumentación y arquitectura del texto',sub:'Texto',lvl:'B2',
 teoria:`
<h3>Cuatro clases sintácticas, un mismo contenido</h3>
<p>El alemán codifica una misma relación lógica de cuatro maneras distintas, y cada una impone su propio orden de palabras. Dominar el nivel B2 consiste menos en ampliar la lista de conectores que en saber qué hace cada clase con el verbo.</p>
<table class="endtable"><tr><th>Clase</th><th>Posición del verbo</th><th>Ejemplo con valor causal</th></tr>
<tr><td>Konjunktion (posición cero)</td><td>sin efecto, verbo en segunda</td><td>Er kam nicht, denn er war krank.</td></tr>
<tr><td>Subjunktor</td><td>verbo al final</td><td>Er kam nicht, weil er krank war.</td></tr>
<tr><td>Konjunktionaladverb</td><td>ocupa la primera posición e invierte</td><td>Er war krank, deshalb kam er nicht.</td></tr>
<tr><td>Preposición</td><td>rige caso, no oración</td><td>Wegen seiner Krankheit kam er nicht.</td></tr></table>
<p>Las conjunciones de posición cero son solo cinco (<i>und, oder, aber, denn, sondern</i>) y no cuentan como miembro de la oración: el sujeto sigue inmediatamente. Los adverbios conjuntivos, en cambio, sí ocupan el primer campo y arrastran la inversión, aunque muchos admiten también posición interior: <i>Er kam <b>deshalb</b> nicht</i>.</p>
<h3>Repertorio por función argumentativa</h3>
<table class="endtable"><tr><th>Función</th><th>Subjunktor</th><th>Adverbio</th><th>Preposición</th></tr>
<tr><td>causa</td><td>weil, da, zumal</td><td>deshalb, daher, nämlich</td><td>wegen, aufgrund, infolge</td></tr>
<tr><td>concesión</td><td>obwohl, obgleich, wenngleich</td><td>trotzdem, dennoch, gleichwohl</td><td>trotz, ungeachtet</td></tr>
<tr><td>consecuencia</td><td>sodass, so ... dass</td><td>folglich, somit, infolgedessen</td><td>—</td></tr>
<tr><td>restricción</td><td>insofern, sofern</td><td>allerdings, jedoch, freilich</td><td>—</td></tr>
<tr><td>contraste</td><td>während, wohingegen</td><td>hingegen, dagegen, demgegenüber</td><td>im Gegensatz zu</td></tr>
<tr><td>adición</td><td>—</td><td>zudem, überdies, ferner</td><td>neben, außer</td></tr>
<tr><td>finalidad</td><td>damit, um ... zu</td><td>dazu, zu diesem Zweck</td><td>zu, zwecks</td></tr>
<tr><td>medio</td><td>indem, dadurch dass</td><td>dadurch, somit</td><td>durch, mittels</td></tr>
<tr><td>condición</td><td>wenn, falls, sofern</td><td>sonst, andernfalls</td><td>bei, im Falle</td></tr></table>
<h3>Distinciones que deciden la corrección</h3>
<p><b>weil frente a denn:</b> el contenido es idéntico; la diferencia es sintáctica. <i>denn</i> no admite verbo final ni puede abrir el período; <i>weil</i> sí y además permite anteponer la causa. En la lengua hablada se oye <i>weil</i> con verbo en segunda posición, pero no pertenece a la norma escrita.</p>
<p><b>obwohl frente a trotzdem:</b> el español cubre ambos con aunque, lo que provoca el error más extendido. <i>obwohl</i> introduce la concesión y manda el verbo al final; <i>trotzdem</i> introduce la <b>consecuencia inesperada</b> y exige inversión: <i>Obwohl es regnete, gingen wir spazieren</i> equivale a <i>Es regnete, trotzdem gingen wir spazieren</i>.</p>
<p><b>damit frente a um ... zu:</b> la construcción de infinitivo solo es posible si el sujeto de la principal y el del propósito coinciden. Si difieren, es obligatorio <i>damit</i>: <i>Ich erkläre es noch einmal, <b>damit</b> alle es verstehen</i>.</p>
<p><b>während:</b> es simultáneamente subjuntor temporal y subjuntor adversativo; solo el contexto decide. Como preposición de genitivo es exclusivamente temporal.</p>
<h3>Pares correlativos</h3>
<p>Estructuran el párrafo argumentativo y son marca de dominio: <i><b>zwar ... aber</b></i> (concesión anticipada), <i><b>einerseits ... andererseits</b></i>, <i><b>nicht nur ... sondern auch</b></i>, <i><b>entweder ... oder</b></i>, <i><b>weder ... noch</b></i>. Los tres últimos provocan inversión en el segundo miembro cuando este es una oración completa: <i>Er hat weder angerufen, noch <b>hat</b> er geschrieben</i>.</p>
<h3>Arquitectura del texto</h3>
<p>El primer campo de la oración alemana no es un lugar neutro: es la <b>bisagra temática</b>. Colocar en él el conector, o bien un elemento ya conocido, encadena la información y produce la progresión tema y rema que caracteriza la prosa expositiva. Abrir todas las oraciones con el sujeto es gramatical pero delata inmadurez estilística; abrirlas todas con un adverbio conjuntivo produce un texto sobrearticulado. El equilibrio consiste en marcar explícitamente los giros argumentativos y dejar implícitas las adiciones sencillas.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>Tratar <i>denn</i> como subjuntor y enviar el verbo al final; usar <i>trotzdem</i> como conjunción subordinante; olvidar la inversión tras el adverbio conjuntivo en primera posición; emplear <i>also</i> con el valor del español así que sin advertir que también significa por tanto; y encadenar oraciones con <i>und</i> allí donde el alemán escrito exige una relación explícita.</p>
`,
 q:["Er ist nicht gekommen, denn ___.|er hatte keine Zeit|er keine Zeit hatte|hatte er keine Zeit|keine Zeit er hatte|0|denn ocupa la posición cero y no altera el orden: sujeto seguido del verbo finito.",
    "Es regnete stark. ___ gingen wir spazieren.|Obwohl|Trotz|Trotzdem|Wenngleich|2|Se requiere un adverbio conjuntivo que abra la oración e invierta; obwohl y wenngleich son subjuntores y trotz es preposición.",
    "Ich wiederhole die Erklärung, ___ alle sie verstehen.|um|damit|dazu|sodass|1|Los sujetos de las dos oraciones son distintos, de modo que la construcción de infinitivo queda excluida.",
    "___ des schlechten Wetters wurde das Konzert abgesagt.|Weil|Denn|Obwohl|Aufgrund|3|El grupo nominal en genitivo exige una preposición, no un conector oracional.",
    "Complete: Er hat weder angerufen, noch ___.|er hat geschrieben|hat er geschrieben|geschrieben hat er|schreibt|1|El segundo miembro de weder ... noch se comporta como oración principal con inversión.",
    "¿Cuál es agramatical en la norma escrita?|Er kam zu spät, weil der Zug Verspätung hatte.|Er kam zu spät, denn der Zug hatte Verspätung.|Er kam zu spät, weil der Zug hatte Verspätung.|Der Zug hatte Verspätung, deshalb kam er zu spät.|2|weil es subjuntor y envía obligatoriamente el verbo finito al final en la lengua escrita.",
    "Die Kosten sind hoch. ___ halte ich das Projekt für sinnvoll.|Trotz|Obwohl|Dennoch|Wegen|2|Solo dennoch es adverbio conjuntivo y puede ocupar el primer campo seguido del verbo finito.",
    "Sie verbesserte ihre Aussprache, ___ sie täglich laut las.|indem|dadurch|damit|sodass|0|indem introduce el medio o el procedimiento y manda el verbo al final.",
    "En Während die Preise stiegen, sanken die Löhne, während es|temporal|adversativo|causal|concesivo|1|El contraste entre dos evoluciones opuestas activa la lectura adversativa del subjuntor.",
    "Zwar ist der Text lang, ___ er liest sich gut.|trotzdem|aber|obwohl|dennoch aber|1|El correlato canónico de zwar es aber, conjunción de posición cero que no altera el orden.",
    ]},

{id:'partizip',t:'Participio I y II como atributo y atributos participiales ampliados',sub:'Adjetivo',lvl:'B2',
 teoria:`
<h3>Dos participios, dos valores</h3>
<p>El alemán dispone de dos participios que, colocados delante del sustantivo, se declinan como cualquier adjetivo y condensan una oración de relativo entera. La diferencia entre ellos es de <b>voz</b> y de <b>aspecto</b>, no de tiempo absoluto.</p>
<table class="endtable"><tr><th>Forma</th><th>Construcción</th><th>Valor</th><th>Paráfrasis</th></tr>
<tr><td>Partizip I</td><td>infinitivo + d</td><td>activo, simultáneo, no concluido</td><td>das schlafende Kind = das Kind, das schläft</td></tr>
<tr><td>Partizip II transitivo</td><td>participio</td><td>pasivo, concluido</td><td>das gelesene Buch = das Buch, das gelesen wurde</td></tr>
<tr><td>Partizip II intransitivo</td><td>participio</td><td>activo, concluido</td><td>der angekommene Zug = der Zug, der angekommen ist</td></tr>
<tr><td>zu + Partizip I</td><td>gerundivo</td><td>pasivo, necesidad o posibilidad</td><td>die zu lösende Aufgabe = die Aufgabe, die gelöst werden muss</td></tr></table>
<h3>Partizip I</h3>
<p>Se forma añadiendo <b>-d</b> al infinitivo y luego la terminación adjetiva: <i>lachen</i> da <i>lachend</i> y de ahí <i>der lachende Junge</i>. Los verbos en <i>-eln</i> y <i>-ern</i> mantienen la forma plena: <i>lächelnd</i>. Los reflexivos conservan el pronombre dentro del atributo: <i>das sich drehende Rad</i>. Semánticamente expresa un proceso <b>en curso y simultáneo</b> al del verbo principal, y por eso admite paráfrasis con relativa en el mismo tiempo que la oración matriz.</p>
<p>El Partizip I aparece también, <b>sin declinar</b>, como adverbio de modo: <i>Er verließ lachend den Raum</i>. Lo que no existe es una perífrasis progresiva del tipo español está trabajando: la secuencia con <i>sein</i> más Partizip I es agramatical y se sustituye por <i>gerade</i> más presente o por <i>dabei sein zu</i> más infinitivo.</p>
<h3>Partizip II</h3>
<p>La regla de interpretación depende de la <b>transitividad</b>. Con verbo transitivo el valor es pasivo y resultativo: <i>der reparierte Wagen</i>, <i>die beschlossenen Maßnahmen</i>. Con verbo intransitivo el atributo solo es posible si el verbo es <b>perfectivo</b>, es decir, si forma su Perfekt con <i>sein</i> e implica un cambio de estado: <i>der angekommene Zug</i>, <i>die eingeschlafene Katze</i>, <i>das vergangene Jahr</i>. Los intransitivos durativos quedan excluidos: no existe <i>das geschlafene Kind</i> ni <i>der gearbeitete Mann</i>. Este filtro explica la mayor parte de los atributos que un aprendiz produce como agramaticales.</p>
<h3>El gerundivo con zu</h3>
<p>La combinación <i>zu</i> más Partizip I solo se da en función atributiva, únicamente con verbos <b>transitivos</b>, y equivale a la pasiva con modal: <i>der zu erwartende Widerstand</i> es el que cabe esperar, <i>die zu bearbeitenden Anträge</i> son los que han de tramitarse. Con verbos separables <i>zu</i> se intercala: <i>die auszufüllenden Formulare</i>. Pertenece de lleno al registro escrito administrativo y científico.</p>
<h3>El atributo participial ampliado</h3>
<p>Es la construcción que define el estilo académico alemán: entre el artículo y el sustantivo se inserta un bloque completo con complementos, agente y circunstanciales.</p>
<p><i><b>Der</b> von den Studierenden heftig <b>kritisierte</b> Vorschlag wurde zurückgezogen.</i></p>
<p><i><b>Die</b> in der letzten Sitzung ohne Gegenstimme <b>beschlossenen</b> Maßnahmen treten morgen in Kraft.</i></p>
<p>El esquema es <code>artículo + complementos + participio + sustantivo</code>. La estrategia de lectura eficaz consiste en localizar el artículo, saltar directamente al sustantivo, identificar el participio inmediatamente anterior y solo entonces desplegar el interior del bloque. La conversión en relativa es siempre posible y suele ser preferible fuera de la prosa especializada: la primera oración equivale a <i>Der Vorschlag, der von den Studierenden heftig kritisiert wurde, ...</i></p>
<h3>Restricciones de uso</h3>
<p>El atributo ampliado no admite subordinadas en su interior ni suele superar tres o cuatro elementos sin volverse ilegible. Además compite con el Genitivattribut y con la nominalización, de modo que su acumulación produce el estilo denso que las guías de redacción alemanas desaconsejan.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>Primero, dejar el Partizip I sin terminación en posición atributiva, por analogía con el gerundio español invariable. Segundo, formar atributos con intransitivos durativos. Tercero, traducir el gerundio español de posterioridad o de causa por un Partizip I, cuando el alemán exige una subordinada. Cuarto, situar el complemento del participio después del sustantivo, rompiendo el paréntesis nominal que la construcción exige.</p>
`,
 q:["Complete: das ___ Kind|schlafende|schlafend|geschlafene|schlafenden|0|El Partizip I atributivo se declina; tras el artículo determinado neutro en nominativo la terminación es -e.",
    "¿Cuál es agramatical?|der angekommene Zug|die eingeschlafene Katze|das geschlafene Kind|das vergangene Jahr|2|schlafen es intransitivo durativo y forma su Perfekt con haben, de modo que no admite atributo participial.",
    "die zu lösende Aufgabe equivale a|die Aufgabe, die man löst|die Aufgabe, die gelöst wurde|die Aufgabe, die sich löst|die Aufgabe, die gelöst werden muss|3|El gerundivo con zu tiene valor pasivo y modal de necesidad o posibilidad.",
    "Transforme en relativa: der von der Presse scharf kritisierte Minister|der Minister, der die Presse scharf kritisierte|der Minister, den die Presse scharf kritisierte|der Minister, der von der Presse scharf kritisiert wurde|der Minister, der von der Presse scharf kritisierend war|2|El participio II de un verbo transitivo tiene valor pasivo, y von marca el agente.",
    "Complete el gerundivo del verbo separable ausfüllen: die ___ Formulare|ausfüllenden|zu ausfüllenden|auszufüllenden|ausgefüllten|2|En los verbos separables zu se intercala entre el prefijo y la raíz también dentro del gerundivo.",
    "Traduzca: el niño estaba jugando en el jardín.|Das Kind war spielend im Garten.|Das Kind ist spielend im Garten.|Das Kind war im Garten spielend.|Das Kind spielte gerade im Garten.|3|El alemán no dispone de perífrasis progresiva con el Partizip I y recurre al presente o al Präteritum con gerade.",
    "Er verließ ___ den Raum.|lachende|lachenden|lachend|gelacht|2|En uso adverbial el Partizip I permanece invariable.",
    "die sich ___ Diskussion|ziehende|hinziehende|hinziehend|sich hinziehende|1|En el atributo el pronombre reflexivo precede al participio, que sí lleva terminación, de modo que solo falta la forma declinada del participio.",
    "En die im Ausschuss beschlossenen Maßnahmen, el elemento nuclear del sintagma es|Ausschuss|beschlossenen|Maßnahmen|die|2|El atributo ampliado se inserta entre el artículo y el sustantivo, que sigue siendo el núcleo.",
    "das gerade ___ Buch (leer, en curso, valor activo)|lesende|gelesene|zu lesende|lesend|0|El valor activo y simultáneo corresponde al Partizip I declinado.",
    ]},

{id:'nomstil',t:'Nominalización y estilo nominal: transformación verbal y nominal',sub:'Texto',lvl:'B2',
 teoria:`
<h3>Dos maneras de decir lo mismo</h3>
<p>El alemán escrito de la administración, del derecho y de la ciencia condensa en grupos nominales lo que la lengua corriente reparte en oraciones. La operación se llama <b>Nominalisierung</b> y su resultado, <b>Nominalstil</b>. Comprenderla es requisito para leer prosa especializada; dominarla en producción es lo que separa un texto de B2 de uno de B1.</p>
<p><i>Nachdem der Antrag geprüft worden war, wurde er bewilligt.</i> y <i><b>Nach Prüfung des Antrags</b> wurde er bewilligt.</i> transmiten la misma información con una diferencia de densidad, no de contenido.</p>
<h3>Los recursos de formación</h3>
<table class="endtable"><tr><th>Procedimiento</th><th>Género</th><th>Ejemplo</th></tr>
<tr><td>sufijo -ung</td><td>femenino</td><td>prüfen da die Prüfung</td></tr>
<tr><td>infinitivo sustantivado</td><td>neutro</td><td>lesen da das Lesen</td></tr>
<tr><td>derivación sin sufijo</td><td>masculino</td><td>beginnen da der Beginn</td></tr>
<tr><td>sufijo -heit o -keit</td><td>femenino</td><td>möglich da die Möglichkeit</td></tr>
<tr><td>sufijo -nis</td><td>neutro o femenino</td><td>erleben da das Erlebnis</td></tr>
<tr><td>préstamos en -tion, -ismus</td><td>femenino, masculino</td><td>realisieren da die Realisation</td></tr></table>
<p>El <b>infinitivo sustantivado</b> es siempre neutro, carece de plural y designa el proceso en su desarrollo; el objeto directo del verbo se convierte en genitivo o se integra en un compuesto: <i>das Lesen des Textes</i>, <i>das Zeitunglesen</i>. Las derivaciones en <i>-ung</i>, en cambio, oscilan entre el proceso y su resultado, ambigüedad que el contexto resuelve: <i>die Übersetzung</i> es tanto la actividad como el texto traducido.</p>
<h3>La tabla de correspondencias</h3>
<p>Cada relación circunstancial dispone de una subordinada y de una preposición equivalente. Es el núcleo operativo de la transformación.</p>
<table class="endtable"><tr><th>Relación</th><th>Subordinada</th><th>Grupo nominal</th></tr>
<tr><td>temporal simultáneo</td><td>während verhandelt wurde</td><td>während der Verhandlungen</td></tr>
<tr><td>temporal anterior</td><td>nachdem er angekommen war</td><td>nach seiner Ankunft</td></tr>
<tr><td>temporal posterior</td><td>bevor die Sitzung beginnt</td><td>vor Beginn der Sitzung</td></tr>
<tr><td>causal</td><td>weil das Wetter schlecht war</td><td>wegen des schlechten Wetters</td></tr>
<tr><td>concesivo</td><td>obwohl die Kosten hoch waren</td><td>trotz der hohen Kosten</td></tr>
<tr><td>condicional</td><td>wenn es regnet</td><td>bei Regen</td></tr>
<tr><td>final</td><td>um die Lage zu verbessern</td><td>zur Verbesserung der Lage</td></tr>
<tr><td>modal o instrumental</td><td>indem man neue Verfahren einsetzt</td><td>durch den Einsatz neuer Verfahren</td></tr></table>
<h3>Qué se pierde en la transformación</h3>
<p>El grupo nominal <b>borra información gramatical</b> que la oración explicitaba: desaparecen el tiempo, el modo, la persona y muchas veces el sujeto. De ahí la ambigüedad clásica del genitivo adnominal. En <i>die Kritik des Autors</i> el autor puede ser quien critica (<b>genitivus subiectivus</b>) o quien es criticado (<b>genitivus obiectivus</b>). La lengua escrita desambigua asignando el genitivo al objeto y expresando el agente con <i>durch</i> o <i>seitens</i>: <i>die Entdeckung des Penicillins <b>durch</b> Fleming</i>, <i>die Kritik am Autor <b>seitens</b> der Presse</i>.</p>
<h3>La dirección inversa</h3>
<p>Convertir estilo nominal en verbal es tan importante como lo contrario, y es la operación que exige un examen de comprensión. El procedimiento es mecánico: se recupera el verbo de base, se restituye un sujeto, se elige la subordinada correspondiente a la preposición y se decide el tiempo. <i>Nach Beendigung der Bauarbeiten</i> da <i>Nachdem die Bauarbeiten beendet worden waren</i>.</p>
<h3>Criterio estilístico</h3>
<p>El estilo nominal comprime y despersonaliza, dos propiedades funcionales cuando el texto debe ser breve y objetivo. Pero acumulado produce el llamado <b>Substantivitis</b>: cadenas de genitivos, verbos vacíos como <i>erfolgen</i>, <i>durchführen</i> o <i>vornehmen</i>, y una sintaxis sin agentes. Las guías de redacción alemanas recomiendan reservarlo para los pasajes que realmente lo requieren y verbalizar el resto. Un indicio fiable de exceso es la aparición de tres genitivos encadenados o de un verbo funcional que no aporta contenido léxico: <i>Die Durchführung der Überprüfung der Anlagen erfolgte</i> se reescribe sin pérdida como <i>Die Anlagen wurden überprüft</i>.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>Primero, encadenar complementos con <i>von</i> imitando la preposición española de, donde el alemán exige genitivo o un compuesto. Segundo, escribir el infinitivo sustantivado en minúscula o asignarle género equivocado. Tercero, mantener el objeto en acusativo tras el infinitivo sustantivado. Cuarto, elegir la preposición por traducción literal y no por la relación lógica, lo que produce combinaciones como <i>für die Verbesserung</i> donde corresponde <i>zur Verbesserung</i>.</p>
`,
 q:["Nominalice: Nachdem der Antrag geprüft worden war, ...|Bei der Prüfung des Antrags|Nach Prüfung des Antrags|Während der Prüfung des Antrags|Vor Prüfung des Antrags|1|nachdem expresa anterioridad y se corresponde con nach más el nombre de acción.",
    "Verbalice: Wegen des schlechten Wetters blieben wir zu Hause.|Obwohl das Wetter schlecht war, blieben wir zu Hause.|Weil das Wetter schlecht war, blieben wir zu Hause.|Wenn das Wetter schlecht ist, bleiben wir zu Hause.|Während das Wetter schlecht war, blieben wir zu Hause.|1|wegen codifica la causa y su equivalente oracional es weil.",
    "Complete: ___ Verbesserung der Lage wurden Mittel bereitgestellt.|Für die|Zur|Bei der|Nach der|1|La finalidad se expresa con zu más el nombre de acción, no con für.",
    "Nominalice: obwohl die Kosten hoch waren|wegen der hohen Kosten|trotz der hohen Kosten|infolge der hohen Kosten|bei hohen Kosten|1|La concesión se corresponde con la preposición trotz.",
    "El infinitivo sustantivado exige que el objeto aparezca|en acusativo|en dativo|con la preposición für|en genitivo o como compuesto|3|Al perder su carácter verbal, el infinitivo sustantivado no puede regir acusativo.",
    "¿Cuál es correcto?|das lesen des Textes|Das Lesen des Text|das Lesen des Textes|der Lesen des Textes|2|El infinitivo sustantivado se escribe con mayúscula, es neutro y su complemento va en genitivo.",
    "En die Entdeckung des Penicillins durch Fleming, el genitivo es|subiectivus|obiectivus|partitivus|possessivus|1|La penicilina es el objeto de la acción de descubrir y el agente se expresa con durch.",
    "Nominalice: indem man neue Verfahren einsetzt|beim Einsatz neuer Verfahren|durch den Einsatz neuer Verfahren|zum Einsatz neuer Verfahren|trotz des Einsatzes neuer Verfahren|1|indem indica el medio y se corresponde con durch más acusativo.",
    "Reescriba sin verbo funcional: Die Überprüfung der Anlagen erfolgte gestern.|Die Anlagen wurden gestern überprüft.|Es erfolgte gestern die Anlagenüberprüfung.|Die Durchführung der Überprüfung war gestern.|Gestern erfolgte eine Überprüfung.|0|Se recupera el verbo pleno y se elimina el verbo funcional vacío junto con la cadena de genitivos.",
    "Verbalice: Bei Regen fällt das Spiel aus.|Weil es regnet, fällt das Spiel aus.|Obwohl es regnet, fällt das Spiel aus.|Wenn es regnet, fällt das Spiel aus.|Nachdem es geregnet hat, fällt das Spiel aus.|2|bei más sustantivo sin artículo tiene aquí valor condicional y equivale a wenn.",
    ]},

{id:'genitivpraep',t:'Preposiciones con genitivo y su valor de registro',sub:'Preposición',lvl:'B2',
 teoria:`
<h3>Una clase marcada estilísticamente</h3>
<p>Las preposiciones de genitivo forman un grupo abierto y en expansión, alimentado sobre todo por la lengua administrativa y científica. A diferencia de las de acusativo o dativo, que son neutras, casi todas llevan una <b>marca de registro</b>: emplearlas en la conversación resulta afectado y omitirlas en un texto formal resulta pobre. Elegirlas bien es, por tanto, una decisión estilística además de gramatical.</p>
<h3>Inventario ordenado por frecuencia y registro</h3>
<table class="endtable"><tr><th>Preposición</th><th>Valor</th><th>Registro</th><th>Ejemplo</th></tr>
<tr><td>während</td><td>temporal</td><td>neutro</td><td>während der Sitzung</td></tr>
<tr><td>wegen</td><td>causal</td><td>neutro</td><td>wegen des Regens</td></tr>
<tr><td>trotz</td><td>concesivo</td><td>neutro</td><td>trotz des Regens</td></tr>
<tr><td>statt, anstatt</td><td>sustitutivo</td><td>neutro</td><td>statt des Autos</td></tr>
<tr><td>innerhalb, außerhalb</td><td>local y temporal</td><td>neutro</td><td>innerhalb der Frist</td></tr>
<tr><td>aufgrund, infolge</td><td>causal</td><td>escrito</td><td>aufgrund der Krise</td></tr>
<tr><td>angesichts, anlässlich</td><td>circunstancial</td><td>escrito</td><td>angesichts der Lage</td></tr>
<tr><td>hinsichtlich, bezüglich</td><td>referencial</td><td>escrito formal</td><td>bezüglich Ihrer Anfrage</td></tr>
<tr><td>mittels, anhand</td><td>instrumental</td><td>técnico</td><td>mittels eines Verfahrens</td></tr>
<tr><td>mangels, zwecks, seitens</td><td>administrativo</td><td>burocrático</td><td>mangels Beweisen</td></tr>
<tr><td>ungeachtet, kraft</td><td>concesivo, autoridad</td><td>jurídico</td><td>ungeachtet aller Einwände</td></tr></table>
<h3>Cuándo el genitivo cede ante el dativo</h3>
<p>La norma prescribe genitivo, pero admite el <b>dativo</b> en dos situaciones bien delimitadas, ambas motivadas por la necesidad de que el caso sea visible.</p>
<p><b>Primera:</b> sustantivo en plural sin determinante ni adjetivo. Como el genitivo plural carecería de marca, se recurre al dativo: <i>trotz Atomkraftwerken</i>, <i>mangels Beweisen</i>. <b>Segunda:</b> sustantivo en singular sin determinante, donde simplemente no se declina: <i>wegen Umbau geschlossen</i>, <i>trotz Regen</i>. Fuera de estos casos, el dativo tras <i>wegen</i> (<i>wegen dem Wetter</i>) pertenece a la lengua hablada y es rechazado en el escrito.</p>
<p>Algunas preposiciones admiten libremente las dos rección: <b>laut</b> funciona con genitivo, con dativo o con el sustantivo sin marcar (<i>laut des Berichts</i>, <i>laut dem Bericht</i>, <i>laut Bericht</i>). Con nombres propios el genitivo se marca en el nombre mismo: <i>wegen Peters Krankheit</i>.</p>
<h3>Falsos amigos casuales</h3>
<p>Un conjunto de preposiciones de aspecto igualmente culto rige <b>dativo</b> y suele confundirse con el grupo anterior: <b>gemäß, entsprechend, entgegen, zufolge, nahe, samt, nebst, binnen</b>. Además, <i>zufolge</i> se pospone al sustantivo cuando rige dativo: <i>dem Bericht zufolge</i>. El contraste merece memorizarse en bloque, porque el error de caso es especialmente visible en un texto formal.</p>
<h3>Posición y variantes</h3>
<p><b>wegen</b> admite posposición en registro elevado o fijado: <i>der Kinder wegen</i>, y se fusiona con los pronombres personales en formas propias: <i>meinetwegen, deinetwegen, ihretwegen</i>, que además han desarrollado el valor de por mí no hay inconveniente. <b>trotz</b> conserva un dativo histórico en expresiones fijas: <i>trotz allem</i>. <b>innerhalb</b> tiende a sustituirse por <i>innerhalb von</i> más dativo cuando el complemento no puede marcar el genitivo: <i>innerhalb von drei Tagen</i>.</p>
<h3>während, statt y la doble categoría</h3>
<p>Tres piezas de esta lista funcionan también como <b>subjuntores</b>, y la diferencia se reconoce por la posición del verbo. <i>während der Sitzung</i> es preposición y rige genitivo; <i>während die Sitzung dauerte</i> es conjunción y manda el verbo al final. Lo mismo vale para <i>statt</i> y <i>anstatt</i>, que como conjunción se combinan con <i>zu</i> más infinitivo: <i>anstatt zu warten</i>. Esta ambivalencia es fuente constante de confusión y se resuelve siempre mirando qué sigue: un grupo nominal o una oración.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>Primero, el dativo automático tras <i>wegen</i>, reforzado por el hecho de que es lo que se oye. Segundo, el acusativo tras <i>trotz</i> por analogía con la construcción española a pesar de más objeto. Tercero, el uso de <i>während</i> con verbo en segunda posición. Cuarto, la elección de <i>bezüglich</i> o <i>seitens</i> en textos que no son administrativos, lo que produce un tono impostado. Quinto, olvidar la <i>-s</i> del genitivo masculino y neutro singular, que es la única marca visible en muchos de estos sintagmas.</p>
`,
 q:["___ des schlechten Wetters wurde das Spiel abgesagt.|Wegen|Weil|Denn|Obwohl|0|Solo una preposición puede regir el grupo nominal en genitivo; los demás son conectores oracionales.",
    "Complete: trotz ___ Bedenken|aller|allen|alle|allem|0|El genitivo plural del indefinido all es aller, y trotz rige genitivo.",
    "¿Cuál pertenece a la norma escrita?|wegen dem Regen|wegen den Regen|wegen des Regens|wegen der Regen|2|Regen es masculino y el genitivo singular exige artículo des más la desinencia -s.",
    "Elija la variante correcta con plural sin determinante.|mangels Beweise|mangels Beweisen|mangels der Beweise ohne Artikel|mangels Beweis|1|Sin determinante el genitivo plural no sería visible, de modo que la norma admite el dativo.",
    "Während ___ verhandelt wurde, warteten die Journalisten draußen.|der Sitzung|die Sitzung|dem Saal|des Saales|1|Aquí während es subjuntor y encabeza una oración con sujeto propio, no una preposición.",
    "¿Cuál de estas preposiciones rige dativo?|angesichts|hinsichtlich|infolge|gemäß|3|gemäß pertenece al grupo de piezas cultas que rigen dativo pese a su aspecto formal.",
    "Dem Bericht ___ sind die Zahlen gestiegen.|zufolge|infolge|aufgrund|angesichts|0|zufolge se pospone al sustantivo y rige dativo cuando aparece en esa posición.",
    "Reformule: anstatt dass er wartete|anstatt zu warten|anstatt des Wartens zu|anstatt warten|anstatt er zu warten|0|Con sujeto idéntico anstatt se combina con zu más infinitivo.",
    "Complete con la forma pronominal fusionada: Er kam ___ nicht mit.|wegen mir|meinetwegen|meinerwegen|wegen mich|1|Con pronombres personales wegen forma piezas fijas del tipo meinetwegen.",
    "¿Cuál delata un registro burocrático fuera de lugar en una carta personal?|wegen der Verspätung|trotz des Regens|seitens der Familie|während der Reise|2|seitens pertenece al léxico administrativo y resulta impostado en un texto privado.",
    ]},

{id:'modalpartikel',t:'Partículas modales: doch, mal, ja, eben, wohl, denn, halt',sub:'Léxico',lvl:'B2',
 teoria:`
<h3>Qué son y cómo se reconocen</h3>
<p>Las <b>Modalpartikeln</b> o Abtönungspartikeln no aportan contenido proposicional: modulan la actitud del hablante y su relación con el interlocutor. No cambian las condiciones de verdad del enunciado, pero su ausencia hace que el alemán suene brusco, distante o incluso descortés. Son, por tanto, un fenómeno de cortesía y de gestión conversacional, no de semántica léxica.</p>
<p>Se identifican por un haz de propiedades formales muy estable:</p>
<ul>
<li>son <b>átonas</b> en su uso normal;</li>
<li>ocupan el <b>Mittelfeld</b>, detrás del verbo finito y de los pronombres;</li>
<li><b>no pueden ocupar el primer campo</b> por sí solas, es decir, no son miembros oracionales;</li>
<li>no se pueden negar, coordinar, graduar ni usar como respuesta a una pregunta;</li>
<li>son <b>homónimas</b> de adverbios, conjunciones o adjetivos con los que no deben confundirse.</li>
</ul>
<p>La prueba decisiva es la del primer campo: si la palabra puede aparecer sola delante del verbo finito, no es partícula modal en ese uso.</p>
<h3>Reparto por tipo de oración</h3>
<table class="endtable"><tr><th>Partícula</th><th>Tipo de oración</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>denn</td><td>interrogativa</td><td>interés, implicación afectiva</td><td>Wo warst du denn?</td></tr>
<tr><td>doch</td><td>enunciativa</td><td>apela a un saber compartido</td><td>Das habe ich dir doch gesagt.</td></tr>
<tr><td>doch</td><td>imperativa</td><td>insiste y a la vez suaviza</td><td>Komm doch mit.</td></tr>
<tr><td>mal</td><td>imperativa</td><td>atenúa, presenta como trivial</td><td>Hör mal zu.</td></tr>
<tr><td>ja</td><td>enunciativa</td><td>evidencia no discutible</td><td>Du weißt ja, wie er ist.</td></tr>
<tr><td>ja tónica</td><td>imperativa</td><td>advertencia enfática</td><td>Mach das ja nicht wieder!</td></tr>
<tr><td>eben, halt</td><td>enunciativa</td><td>resignación, conclusión inevitable</td><td>Dann gehe ich eben zu Fuß.</td></tr>
<tr><td>wohl</td><td>enunciativa e interrogativa</td><td>conjetura</td><td>Er ist wohl krank.</td></tr></table>
<h3>Precisiones sobre cada una</h3>
<p><b>denn</b> se limita a las interrogativas, tanto parciales como totales, y transforma una pregunta neutra en una pregunta interesada; su ausencia puede sonar a interrogatorio. No debe confundirse con la conjunción causal <i>denn</i>, que ocupa la posición cero.</p>
<p><b>doch</b> es la más versátil y la más difícil. En la enunciativa presupone que el interlocutor ya conoce o debería conocer el dato, y por eso funciona como corrección amable. En la imperativa combina insistencia y cortesía. En la oración desiderativa con Konjunktiv II refuerza el deseo: <i>Wenn er doch endlich käme!</i> Nada de esto tiene que ver con el <i>doch</i> tónico que sirve para contradecir una pregunta negativa: <i>Kommst du nicht? Doch!</i></p>
<p><b>mal</b>, reducción de <i>einmal</i>, minimiza el esfuerzo que se pide y es prácticamente obligatoria en las peticiones cotidianas: <i>Kannst du mir mal helfen?</i> Su omisión no es agramatical pero suena seca.</p>
<p><b>ja</b> presenta el contenido como algo que no admite discusión. Por eso resulta contradictoria con una información nueva: no se dice <i>Ich habe ja geheiratet</i> si el interlocutor lo ignora. Con acento y en imperativa cambia radicalmente de valor y expresa amenaza.</p>
<p><b>eben</b> y <b>halt</b> son intercambiables en la mayoría de contextos; <i>halt</i> es la variante meridional y más coloquial, <i>eben</i> la neutra. Ambas presentan el hecho como una consecuencia que no vale la pena discutir.</p>
<p><b>wohl</b> expresa suposición y compite con <i>dürfte</i> y con el futuro de conjetura. En interrogativa indirecta con <i>ob</i> marca la deliberación: <i>Ob er wohl kommt?</i></p>
<h3>Combinación y orden</h3>
<p>Las partículas se acumulan, pero en un orden fijo que no admite permutación: <i>doch</i> precede a <i>mal</i>, y <i>ja</i> precede a <i>wohl</i>. Son correctas <i>Komm doch mal her</i> y <i>Das ist ja wohl klar</i>, y no sus inversas. Dentro del Mittelfeld se sitúan detrás de los pronombres personales y delante de los complementos que aportan información nueva: <i>Ich habe dir das doch schon erklärt</i>.</p>
<h3>Errores recurrentes del hispanohablante</h3>
<p>El error dominante es la <b>omisión</b>: un alemán sin partículas es gramaticalmente impecable y pragmáticamente frío. El segundo es colocarlas en el primer campo, calcando la posición del español pues o anda. El tercero es traducir <i>doch</i> por sin embargo, confundiendo la partícula átona con el adverbio adversativo. El cuarto es usar <i>ja</i> con información nueva. Las correspondencias españolas existen pero son indirectas: <i>doch</i> se aproxima a si o a la coletilla verdad, <i>mal</i> a a ver o un momento, <i>eben</i> y <i>halt</i> a pues o qué se le va a hacer, y <i>wohl</i> a supongo.</p>
`,
 q:["Wo warst du ___ gestern Abend?|ja|denn|halt|eben|1|Solo denn funciona como partícula modal en las interrogativas y añade implicación afectiva.",
    "Das habe ich dir ___ schon gesagt.|doch|denn|mal|wohl|0|doch en oración enunciativa apela a un saber que el interlocutor ya debería tener.",
    "¿Cuál es agramatical?|Komm doch mal her.|Komm mal doch her.|Hör mal zu.|Sag mir das doch.|1|El orden de las partículas es fijo y doch precede siempre a mal.",
    "Mach das ja nicht wieder! Aquí ja expresa|acuerdo|evidencia compartida|advertencia enfática|conjetura|2|En imperativa y con acento, ja pierde el valor de evidencia y se convierte en amenaza.",
    "Dann muss ich ___ zu Fuß gehen.|ja|denn|wohl oder|eben|3|eben presenta el hecho como una consecuencia inevitable que no se discute.",
    "¿Qué prueba demuestra que una palabra no es partícula modal en un uso dado?|que sea átona|que aparezca sola en el primer campo|que esté en el Mittelfeld|que sea monosílaba|1|Las partículas modales no son miembros oracionales y por eso no pueden ocupar solas el primer campo.",
    "Kommst du nicht mit? ___|Doch, ich komme.|Ja, ich komme nicht.|Doch komme ich.|Nein, ich komme.|0|Ante una pregunta negativa la respuesta afirmativa es doch tónico, que no es partícula modal.",
    "Er ___ krank sein, er hustet die ganze Zeit.|wird wohl|wohl wird|ist ja|denn ist|0|La conjetura se expresa con el futuro más wohl, y la partícula sigue al verbo finito.",
    "¿En qué situación resulta inadecuada la partícula ja?|Du weißt ja, wie er ist.|Das ist ja interessant.|Ich habe ja gestern geheiratet, das wusstest du nicht.|Er kommt ja immer zu spät.|2|ja presenta el contenido como sabido, de modo que contradice una información nueva para el interlocutor.",
    "Kannst du mir ___ helfen?|halt|eben|mal|denn|2|mal atenúa la petición y es la partícula habitual en las solicitudes cotidianas.",
    ]}
];

/* TEORÍA + QUIZ · bloque 6
   q: "enunciado|op0|op1|op2|op3|índice correcto|explicación"                       */
const GRAM6=[
{id:'konjunktiv1',t:'Konjunktiv I y estilo indirecto',sub:'Verbo',lvl:'C1',
 teoria:`
<h3>Función: marcar la ajenidad del enunciado</h3>
<p>El <b>Konjunktiv I</b> no expresa irrealidad —ese cometido corresponde al Konjunktiv II— sino <b>distancia enunciativa</b>: señala que quien habla reproduce palabras ajenas sin asumirlas ni pronunciarse sobre su verdad. Funciona, pues, como un morfema de <b>evidencialidad citativa</b>, y de ahí su rendimiento en la prosa periodística, jurídica y académica, donde permite encadenar párrafos enteros de discurso referido sin repetir el verbum dicendi. En español no hay equivalente morfológico: el reparto entre indicativo y subjuntivo obedece a la selección del verbo regente, no a la fuente de la información.</p>
<h3>Morfología</h3>
<p>Se forma sobre la raíz del <b>infinitivo</b> —nunca sobre la del Präteritum— más la marca <code>-e-</code> y las desinencias personales. Los verbos fuertes <b>no</b> alternan la vocal radical (<i>er gebe</i>, no <i>gibt</i>; <i>er fahre</i>, no <i>fährt</i>); los modales conservan la vocal del infinitivo con Umlaut (<i>er könne</i>, <i>er müsse</i>, <i>er dürfe</i>); <b>sein</b> es el único que prescinde de la <code>-e</code> en primera y tercera del singular.</p>
<table class="endtable"><tr><th>Persona</th><th>haben</th><th>sein</th><th>werden</th><th>können</th><th>gehen</th></tr>
<tr><td>ich</td><td>habe</td><td>sei</td><td>werde</td><td>könne</td><td>gehe</td></tr>
<tr><td>du</td><td>habest</td><td>seist</td><td>werdest</td><td>könnest</td><td>gehest</td></tr>
<tr><td>er/sie/es</td><td>habe</td><td>sei</td><td>werde</td><td>könne</td><td>gehe</td></tr>
<tr><td>wir</td><td>haben</td><td>seien</td><td>werden</td><td>können</td><td>gehen</td></tr>
<tr><td>ihr</td><td>habet</td><td>seiet</td><td>werdet</td><td>könnet</td><td>gehet</td></tr>
<tr><td>sie/Sie</td><td>haben</td><td>seien</td><td>werden</td><td>können</td><td>gehen</td></tr></table>
<h3>Homofonía y Ersatzform</h3>
<p>La tabla revela el punto débil del paradigma: en <i>ich habe</i>, <i>wir haben</i>, <i>sie haben</i> la forma coincide con el indicativo y deja de ser marca. La norma prescribe entonces la <b>Ersatzform</b> del Konjunktiv II: <i>ich hätte</i>, <i>wir hätten</i>, <i>sie hätten</i>. Si también el Konjunktiv II resulta ambiguo o anticuado (<i>sie hülfen</i>, <i>sie stürben</i>), se recurre a una segunda sustitución con <b>würde</b> más infinitivo. La forma inequívoca por excelencia es la tercera del singular, que es la que sostiene el discurso referido en la prensa. <b>sein</b> no necesita Ersatzform en ninguna persona, pues <i>seien</i> se opone claramente a <i>sind</i>.</p>
<h3>Relaciones temporales</h3>
<p>El discurso indirecto alemán no aplica una <i>consecutio temporum</i> de concordancia como la española: codifica la relación entre el momento citado y el del verbo introductor, no el tiempo absoluto.</p>
<table class="endtable"><tr><th>Relación</th><th>Forma</th><th>Ejemplo</th></tr>
<tr><td>simultaneidad</td><td>Konjunktiv I presente</td><td>Er sagte, er sei krank.</td></tr>
<tr><td>anterioridad</td><td>Konjunktiv I perfecto</td><td>Er sagte, er habe geschlafen. / er sei gekommen.</td></tr>
<tr><td>posterioridad</td><td>werde más infinitivo</td><td>Er sagte, er werde kommen.</td></tr></table>
<h3>Sintaxis del enunciado referido</h3>
<p>Al ser el modo, y no el subjuntor, el que señala la subordinación, la oración referida puede prescindir de <b>dass</b>. En tal caso conserva la estructura de oración enunciativa: el <b>Vorfeld</b> —la posición única que precede al verbo finito— sigue ocupado y el verbo finito permanece en segundo lugar, sin formar la <b>Satzklammer</b> subordinada, es decir, el paréntesis que en las subordinadas introducidas encierra el contenido entre el subjuntor y el verbo finito final. Compárese <i>Er betonte, man werde die Prüfung fortsetzen</i> con <i>Er betonte, dass man die Prüfung fortsetzen werde</i>. La primera variante es la habitual en la prosa informativa por su menor coste de procesamiento. Las interrogativas se subordinan con <b>ob</b> o con la partícula interrogativa; las órdenes exigen perífrasis con <b>sollen</b>, y los ruegos con <b>mögen</b>, porque no existe imperativo referido.</p>
<h3>Reajuste deíctico</h3>
<p>El cambio de modo es solo una parte de la operación: pronombres, adverbios temporales y locales han de recalibrarse respecto del nuevo centro deíctico (<i>morgen</i> pasa a <i>am folgenden Tag</i>, <i>hier</i> a <i>dort</i>, <i>ich</i> a <i>er</i>). Omitir este reajuste produce enunciados formalmente correctos pero referencialmente falsos.</p>
<h3>Usos independientes y error típico</h3>
<p>Fuera del discurso referido el Konjunktiv I sobrevive con valor optativo o prescriptivo en fórmulas fijas: <i>Man nehme zwei Eier</i>, <i>Es lebe die Republik</i>, <i>Sei es aus Angst, sei es aus Trägheit</i>. El error recurrente del hispanohablante consiste en interpretar el Konjunktiv I como un subjuntivo de subordinación y aplicarle las reglas españolas: emplear indicativo cuando el verbo regente es asertivo, o pasar al Konjunktiv II con valor de duda, cuando en alemán la Ersatzform con Konjunktiv II es puramente morfológica y no añade escepticismo alguno.
`,
 q:["Original: Wir haben die Mittel bereits bewilligt. Reproducido en estilo indirecto, lo normativo es|Er sagte, sie haben die Mittel bereits bewilligt.|Er sagte, sie werden die Mittel bereits bewilligen.|Er sagte, sie hätten die Mittel bereits bewilligt.|Er sagte, sie haben die Mittel bereits bewilligen.|2|El Konjunktiv I de haben en tercera del plural es homófono del indicativo, de modo que entra la Ersatzform hätten, y la anterioridad se expresa con el perfecto.",
    "Original: Ich bin krank. Referido en tercera persona del singular:|Sie erklärte, sie sei krank.|Sie erklärte, sie wäre krank.|Sie erklärte, sie ist krank.|Sie erklärte, sie sein krank.|0|La simultaneidad se codifica con Konjunktiv I presente, y sei es inequívoco frente al indicativo ist, por lo que no procede Ersatzform.",
    "Original: Ich werde den Bericht vorlegen. La posterioridad respecto del verbo introductor se expresa mediante|er lege den Bericht vor|er legte den Bericht vor|er habe den Bericht vorgelegt|er werde den Bericht vorlegen|3|La posterioridad se marca con werden en Konjunktiv I más infinitivo, no con el presente ni con el perfecto.",
    "¿En qué personas obliga el sistema a sustituir el Konjunktiv I de haben o gehen por el Konjunktiv II?|solo en la segunda del singular|solo en la tercera del singular|en la primera del singular y en la primera y tercera del plural|en ninguna, porque el paradigma siempre es distintivo|2|En esas personas la forma coincide con el indicativo y pierde su valor de marca modal, de ahí la Ersatzform.",
    "Original: Kommst du mit? En estilo indirecto:|Er fragte, dass ich mitkomme.|Er fragte, ob ich mitkäme.|Er fragte, wenn ich mitkomme.|Er fragte, mitkomme ich.|1|Las interrogativas totales se subordinan con ob, y la primera persona exige Ersatzform porque komme es homófono del indicativo.",
    "Original: Reichen Sie die Unterlagen sofort ein! El discurso indirecto de un imperativo exige|una perífrasis con sollen, o con mögen si es ruego|el Konjunktiv I del propio verbo sin más|el infinitivo con zu|el indicativo introducido por dass|0|El alemán carece de imperativo referido y traslada la fuerza directiva a un verbo modal.",
    "sein no necesita nunca Ersatzform en plural porque|el verbo es defectivo|se conjuga como los modales|seien difiere claramente de la forma indicativa sind|el plural no admite Konjunktiv|2|El paradigma de sein conserva formas propias en todas las personas, de modo que la marca modal permanece visible.",
    "En Man nehme zwei Eier und rühre sie unter, la forma verbal es|un imperativo de cortesía|un Konjunktiv I con valor prescriptivo|un Konjunktiv II irreal|un indicativo con man impersonal|1|Es el uso independiente del Konjunktiv I, conservado en recetas, demostraciones y fórmulas desiderativas.",
    "Enunciado el lunes: Ich komme morgen hierher. Referido el miércoles:|er komme morgen hierher|er komme am folgenden Tag dorthin|er kommt am folgenden Tag dorthin|er käme morgen hierher|1|Junto al cambio de modo hay que recalibrar la deixis temporal y espacial respecto del nuevo centro de referencia.",
    "En Der Sprecher betonte, man werde die Prüfung fortsetzen, el verbo finito ocupa la segunda posición porque|se trata de discurso indirecto sin dass, que conserva la estructura de oración enunciativa|el verbo betonen rige V2|el Konjunktiv I impide la posición final|es una licencia periodística no normativa|0|Sin subjuntor no se forma Satzklammer subordinada: el propio Konjunktiv I basta para señalar la dependencia."]},

{id:'funktionsverb',t:'Funktionsverbgefüge: el verbo vacío y el sustantivo predicativo',sub:'Verbo',lvl:'C1',
 teoria:`
<h3>Definición</h3>
<p>Un <b>Funktionsverbgefüge</b> (FVG) es una construcción analítica en la que el verbo ha perdido su contenido léxico y aporta solo información gramatical, mientras que la predicación reside en un <b>sustantivo predicativo</b> de base verbal o adjetiva, regularmente inserto en un sintagma preposicional o en un acusativo sin determinante. En <i>zur Anwendung kommen</i> el peso semántico está en <i>Anwendung</i>; <i>kommen</i> se limita a conjugar. Compárese con la combinación libre <i>einen Baum fällen</i>, donde el verbo conserva su significado pleno y el sustantivo es un objeto referencial.</p>
<h3>Por qué existen: la Aktionsart</h3>
<p>El FVG no es un rodeo ornamental. Suministra distinciones de <b>Aktionsart</b> —el modo de desarrollo interno del proceso— y de orientación diatética que el verbo simple no puede expresar sin perífrasis. Los Funktionsverben se organizan en series regulares: los de la columna izquierda orientan el proceso hacia el paciente y suprimen el agente; los de la derecha introducen un causante.</p>
<table class="endtable"><tr><th>Orientación pasiva o incoativa</th><th>Orientación causativa</th></tr>
<tr><td>zur Anwendung kommen</td><td>zur Anwendung bringen</td></tr>
<tr><td>zur Abstimmung kommen</td><td>zur Abstimmung bringen</td></tr>
<tr><td>zur Verfügung stehen</td><td>zur Verfügung stellen</td></tr>
<tr><td>in Vergessenheit geraten</td><td>in Vergessenheit bringen</td></tr>
<tr><td>zum Ausdruck kommen</td><td>zum Ausdruck bringen</td></tr>
<tr><td>in Bewegung geraten</td><td>in Bewegung setzen</td></tr></table>
<p><i>In Vergessenheit geraten</i> designa un proceso gradual sin agente identificable; <i>vergessen werden</i>, en cambio, implica un sujeto lógico recuperable. Ese matiz explica la persistencia del giro pese a su aparente redundancia.</p>
<h3>Rigidez formal</h3>
<p>El sustantivo predicativo está <b>fijado</b>: no admite variación de determinante ni de número ni, en los casos plenamente lexicalizados, expansión atributiva. Se dice <i>etwas in Erwägung ziehen</i>, no una variante con artículo; <i>etwas in Kauf nehmen</i>, no con contracción; <i>etwas unter Beweis stellen</i>, con preposición fijada. Muchos exigen contracción obligatoria (<i>zur, zum, ins</i>), que en estos giros no es una fusión libre sino parte del lexema complejo. Los FVG con <i>kommen</i> o <i>geraten</i> son intransitivos y de orientación ya pasiva, por lo que rechazan la pasiva perifrástica.</p>
<h3>Rendimiento sintáctico: el Nominalstil</h3>
<p>Al nominalizar el predicado, el FVG abre una posición atributiva que la construcción verbal no ofrece: <i>einen wohlbegründeten Antrag stellen</i> permite un adjetivo allí donde la variante verbal exigiría un adverbio, y ese adjetivo puede a su vez recibir complementos. Esta capacidad de acumular determinaciones en el sintagma nominal es el motor del <b>Nominalstil</b> de la lengua administrativa, jurídica y científica. El FVG dilata además la Satzklammer: el sustantivo predicativo se instala junto al miembro derecho del paréntesis y contribuye a la arquitectura de la oración compleja.</p>
<h3>Repertorio nuclear</h3>
<table class="endtable"><tr><th>Giro</th><th>Equivalente verbal</th><th>Rección</th></tr>
<tr><td>eine Entscheidung treffen</td><td>entscheiden</td><td>acusativo</td></tr>
<tr><td>Kritik üben</td><td>kritisieren</td><td>an más dativo</td></tr>
<tr><td>Anklage erheben</td><td>anklagen</td><td>gegen más acusativo</td></tr>
<tr><td>Abschied nehmen</td><td>sich verabschieden</td><td>von más dativo</td></tr>
<tr><td>etwas in Frage stellen</td><td>bezweifeln</td><td>acusativo</td></tr>
<tr><td>in Betrieb nehmen</td><td>eröffnen</td><td>acusativo</td></tr></table>
<h3>Registro y error típico</h3>
<p>Los FVG son constitutivos del registro especializado y de la prosa oficial; su empleo en la conversación resulta afectado, del mismo modo que su ausencia en un dictamen resulta incongruente. El hispanohablante comete dos errores complementarios: transferir el colocativo español (<i>tomar una decisión</i> lleva a un giro con <i>nehmen</i> en lugar de <i>treffen</i>) y restituir el artículo que el alemán suprime. Conviene además no confundir el FVG con la construcción libre homónima: la prueba decisiva es preguntar si el verbo aporta contenido propio y si el sustantivo puede ser sustituido por un pronombre sin que la secuencia se desmorone.
`,
 q:["Die notwendigen Mittel ___ dem Institut zur Verfügung.|stellen|setzen|stehen|bringen|2|En la variante no causativa el sujeto es lo puesto a disposición y el Funktionsverb es stehen; stellen exigiría un agente y un acusativo.",
    "La oposición entre Der Antrag kommt zur Abstimmung y Der Vorsitzende bringt den Antrag zur Abstimmung es de|tiempo verbal|registro|número|Aktionsart y diátesis, pues kommen orienta hacia el paciente y bringen introduce un causante|3|Los Funktionsverben se reparten en series regulares de orientación pasiva o incoativa frente a causativa.",
    "¿Cuál es la forma normativa?|Er zog die Möglichkeit in die Erwägung.|Er zog die Möglichkeit in Erwägung.|Er zog die Möglichkeit in der Erwägung.|Er zog die Möglichkeit in eine Erwägung.|1|El sustantivo predicativo de estos giros está fijado sin determinante y no admite variación.",
    "El único sintagma que no es un Funktionsverbgefüge es|Kritik üben|Anklage erheben|einen Baum fällen|in Kauf nehmen|2|En fällen el verbo conserva su significado léxico pleno y el sustantivo es un objeto referencial, no un predicado nominal.",
    "In Vergessenheit geraten se prefiere a vergessen werden cuando se quiere|presentar un proceso gradual sin agente identificable|expresar una orden|marcar anterioridad|marcar irrealidad|0|El Funktionsverb geraten aporta valor incoativo y durativo y suprime la implicación de un sujeto lógico.",
    "La ventaja sintáctica de einen wohlbegründeten Antrag stellen frente a etwas wohlbegründet beantragen es que|el sustantivo predicativo admite atributos adjetivos con sus propios complementos|la oración resulta más breve|se evita el acusativo|desaparece la Satzklammer|0|La nominalización del predicado abre una posición atributiva, recurso central del Nominalstil especializado.",
    "El criterio decisivo para reconocer un Funktionsverbgefüge es que|el verbo esté en presente|el verbo haya perdido su contenido léxico y el núcleo semántico resida en el sustantivo|el sustantivo sea femenino|intervenga una preposición|1|El Funktionsverb aporta solo información gramatical mientras el sustantivo deverbal concentra la predicación.",
    "¿Cuál de estas oraciones es agramatical?|Der Beschluss kam zur Anwendung.|Der Beschluss wurde zur Anwendung gebracht.|Es wurde zur Anwendung gekommen.|Man brachte den Beschluss zur Anwendung.|2|Los giros con kommen son intransitivos y ya poseen orientación pasiva, de modo que rechazan la pasiva perifrástica.",
    "En un dictamen jurídico corresponde escribir|Der Kläger erhob Anklage gegen die Behörde.|Der Kläger machte der Behörde eine Szene.|Der Kläger meckerte über die Behörde.|Der Kläger war sauer auf die Behörde.|0|Los Funktionsverbgefüge son un rasgo constitutivo del registro especializado y administrativo; las demás variantes son coloquiales.",
    "Er nahm die Verzögerung ___ Kauf.|im|in|zum|auf den|1|El giro está lexicalizado como in Kauf nehmen, con acusativo sin determinante y sin contracción."]},

{id:'valenz',t:'Valencia verbal: complementos obligatorios, facultativos y libres',sub:'Sintaxis',lvl:'C1',
 teoria:`
<h3>El concepto</h3>
<p>La <b>Valenz</b> es la capacidad del verbo para abrir en su entorno un número determinado de posiciones sintácticas y exigir que se cubran con formas de un tipo preciso. La metáfora procede de la química y fue introducida por Tesnière; la gramática alemana la explotó de manera sistemática en los diccionarios de valencias de Helbig y Schumacher. La distinción capital es la que separa la <b>Ergänzung</b>, complemento previsto por el verbo y sujeto a su rección, de la <b>Angabe</b>, complemento libre que puede añadirse a cualquier verbo compatible con su significado. Los circunstanciales temporales, causales o modales de la ordenación TEKAMOLO son, en su inmensa mayoría, Angaben; el objeto directo, el dativo de <i>helfen</i> o el sintagma local de <i>wohnen</i> son Ergänzungen.</p>
<h3>Pruebas de delimitación</h3>
<p>La <b>Weglassprobe</b> u omisión detecta las Ergänzungen obligatorias: <i>Er wohnt</i> sin indicación de lugar es agramatical, luego <i>in einer kleinen Stadt</i> pertenece al marco valencial. La <b>prueba de la sustitución anafórica</b> comprueba si el sintagma puede recogerse mediante una forma pronominal seleccionada por el verbo. La <b>prueba del acontecimiento</b> —parafrasear con <i>Was geschieht?</i> más el elemento en cuestión— separa lo que el verbo describe de lo que el hablante añade. Ninguna prueba es infalible por sí sola, pero su convergencia es fiable.</p>
<h3>Valencia cuantitativa</h3>
<table class="endtable"><tr><th>Grado</th><th>Verbo</th><th>Ejemplo</th></tr>
<tr><td>avalente</td><td>regnen</td><td>Es regnet.</td></tr>
<tr><td>monovalente</td><td>schlafen</td><td>Das Kind schläft.</td></tr>
<tr><td>bivalente</td><td>sehen</td><td>Ich sehe den Turm.</td></tr>
<tr><td>trivalente</td><td>geben</td><td>Er gibt dem Kind das Buch.</td></tr>
<tr><td>tetravalente</td><td>übersetzen</td><td>Sie übersetzt den Text aus dem Deutschen ins Spanische.</td></tr></table>
<p>El <i>es</i> de los verbos meteorológicos no designa entidad alguna: es un ocupante posicional exigido por la obligatoriedad estructural del sujeto en alemán, no un argumento. Por eso <i>regnen</i> se describe como avalente pese a llevar un elemento en superficie.</p>
<h3>Valencia cualitativa</h3>
<p>Más allá del número, el verbo fija la <b>forma</b> de cada posición. Las clases relevantes son la Nominativergänzung, la Akkusativergänzung, la Dativergänzung, la Genitivergänzung (<i>Der Fall bedarf einer genauen Prüfung</i>, <i>Wir gedenken der Opfer</i>, <i>Er erfreut sich großer Beliebtheit</i>), la <b>Präpositivergänzung</b>, cuya preposición está léxicamente fijada y vacía de significado propio (<i>warten auf</i>, <i>sich erinnern an</i>, <i>sich freuen über</i>), la <b>Situativergänzung</b> (<i>wohnen</i>, <i>sich befinden</i>, <i>stecken</i>), la <b>Direktivergänzung</b> (<i>legen</i>, <i>stellen</i>, <i>setzen</i>, <i>geraten</i>) y la <b>Einordnungsergänzung</b> o predicativa en nominativo que seleccionan <i>sein</i>, <i>werden</i> y <i>bleiben</i>. Algunos verbos exigen incluso una determinación modal obligatoria: <i>Er verhält sich merkwürdig</i>, <i>Man hat ihn schlecht behandelt</i>.</p>
<h3>Facultatividad</h3>
<p>Entre lo obligatorio y lo libre existe un tercer grado: la <b>Ergänzung facultativa</b>, prevista por la valencia pero suprimible sin agramaticalidad. <i>Er isst</i> es correcto, y sin embargo el objeto sigue formando parte del esquema de <i>essen</i>, como demuestra que su reposición no altere la estructura. Los diccionarios de valencias la anotan entre paréntesis. La diferencia con la Angabe es que la Ergänzung facultativa está semánticamente implicada aunque no se exprese: quien come, come algo.</p>
<h3>Errores del hispanohablante</h3>
<p>Tres son recurrentes. Primero, la transferencia de la rección preposicional española, que produce combinaciones inexistentes en lugar de <i>sich erinnern an</i> más acusativo o <i>warten auf</i> más acusativo. Segundo, la supresión de Direktivergänzungen obligatorias: <i>legen</i> y <i>stellen</i> exigen indicación de meta, y una oración con solo objeto directo queda trunca. Tercero, el tratamiento del genitivo regido como arcaísmo prescindible, cuando en registro culto sigue vivo con <i>bedürfen</i>, <i>gedenken</i>, <i>sich annehmen</i> o <i>sich enthalten</i>. Dominar la valencia es la condición previa para ordenar el Mittelfeld, es decir, la zona comprendida entre los dos miembros del paréntesis verbal, donde Ergänzungen y Angaben compiten por posición.
`,
 q:["En Er wohnt in einer kleinen Stadt, el sintagma in einer kleinen Stadt es|una Angabe libre|una Situativergänzung obligatoria exigida por la valencia|un atributo del sujeto|una Direktivergänzung|1|La Weglassprobe lo confirma: sin el complemento local la oración es agramatical, luego pertenece al marco valencial.",
    "En Er wartet seit einer Stunde auf den Bus hay|dos Ergänzungen y ninguna Angabe|dos Angaben|una Genitivergänzung y una Angabe|una Präpositivergänzung y una Angabe temporal|3|auf den Bus está regido léxicamente por warten y no es conmutable, mientras que seit einer Stunde es suprimible y libre.",
    "Der Fall bedarf ___ genauen Prüfung.|eine|einer|einem|einen|1|bedürfen conserva la Genitivergänzung, resto de un grupo verbal hoy reducido y marcado como culto.",
    "geben en Er gibt dem Kind das Buch es un verbo|monovalente|bivalente|trivalente|tetravalente|2|Selecciona Nominativergänzung, Dativergänzung y Akkusativergänzung.",
    "En Es regnet, el elemento es|es el sujeto semántico del verbo|es una Angabe temporal|es una Akkusativergänzung|es un ocupante posicional sin referencia, por lo que el verbo se considera avalente|3|El es meteorológico no designa entidad alguna: cubre la posición estructural que el alemán exige para el sujeto.",
    "¿Cuál de estas oraciones está incompleta desde el punto de vista valencial?|Er legte das Buch.|Er legte das Buch auf den Tisch.|Er las das Buch.|Er kaufte das Buch.|0|legen selecciona una Direktivergänzung obligatoria que lesen y kaufen no exigen.",
    "La diferencia entre Er schläft im Garten y Er befindet sich im Garten está en que|en la primera im Garten es Angabe y en la segunda Ergänzung|en ambas es Ergänzung|en ambas es Angabe|en la primera es Ergänzung y en la segunda Angabe|0|schlafen es monovalente y admite el local como circunstancia libre, mientras que sich befinden lo selecciona obligatoriamente.",
    "En Er isst el acusativo ausente es|obligatorio y su omisión un error|una Angabe|una Ergänzung facultativa prevista por la valencia|imposible con este verbo|2|La supresión no produce agramaticalidad, pero el argumento sigue estando implicado semánticamente.",
    "Ich erinnere mich gern ___ jenen Sommer.|von|an|auf|über|1|sich erinnern rige an más acusativo; el calco de la rección española produce aquí el error más frecuente.",
    "En Er bleibt mein bester Freund, el sintagma mein bester Freund es|una Akkusativergänzung|una Einordnungsergänzung en nominativo|una Angabe modal|un atributo sin función valencial|1|bleiben, sein y werden seleccionan un complemento predicativo que concuerda en nominativo con el sujeto."]},

{id:'konzessiv',t:'Concesivas, condicionales y consecutivas complejas',sub:'Sintaxis',lvl:'C1',
 teoria:`
<h3>Tres clases de conector, tres sintaxis</h3>
<p>Antes de repasar los significados conviene fijar la distinción formal, porque de ella depende el orden de palabras. El alemán expresa una misma relación lógica con tres categorías distintas: el <b>Subjunktor</b>, que introduce una subordinada y desplaza el verbo finito al final; el <b>Konnektor adverbial</b>, que es un miembro oracional pleno y, si ocupa el Vorfeld, obliga a posponer el sujeto; y la <b>preposición</b>, que rige un sintagma nominal. Confundirlos es el error estructural más frecuente en este ámbito, y la interferencia del español —donde <i>aunque</i> y <i>a pesar de</i> se distinguen solo por la categoría del término que sigue— lo agrava.</p>
<table class="endtable"><tr><th>Relación</th><th>Subjunktor</th><th>Adverbio conectivo</th><th>Preposición</th></tr>
<tr><td>concesiva</td><td>obwohl, obgleich, wenngleich</td><td>trotzdem, dennoch, gleichwohl</td><td>trotz más genitivo, ungeachtet más genitivo</td></tr>
<tr><td>condicional</td><td>wenn, falls, sofern</td><td>dann, andernfalls, sonst</td><td>bei, im Falle más genitivo</td></tr>
<tr><td>consecutiva</td><td>sodass, als dass</td><td>also, folglich, mithin</td><td>infolge más genitivo</td></tr></table>
<h3>Concesivas</h3>
<p>La concesiva afirma que la relación causal esperable no se cumple. Junto a <i>obwohl</i> y a sus variantes cultas <i>obgleich, obschon, wenngleich</i>, el alemán dispone de dos construcciones de gran rendimiento. La primera es la <b>concesivo-condicional</b> con <i>auch wenn</i> o <i>selbst wenn</i>, que suspende la condición: <i>Selbst wenn er sich entschuldigt, ändert das nichts</i>. La segunda antepone el elemento graduado: <i>So begabt er auch sein mag, ohne Übung erreicht er nichts</i>; el adjetivo precede al sujeto y el verbo finito cierra la subordinada. Las series con <i>auch immer</i> (<i>wie auch immer, wer auch immer, was auch immer</i>) generalizan la concesión sobre todos los valores posibles de la variable.</p>
<h3>Condicionales</h3>
<p>Además de <i>wenn</i> y del más preciso <i>falls</i>, que excluye la lectura temporal, hay que dominar el <b>condicional sin subjuntor</b>: el verbo finito se adelanta a la primera posición y el Vorfeld queda vacío, <i>Hätte ich das rechtzeitig gewusst, wäre ich nicht hingefahren</i>. Es un recurso de registro elevado, frecuente en la prosa jurídica y ensayística. La condición excluyente se expresa con <b>es sei denn</b>, giro que fosiliza un Konjunktiv I y equivale a <i>a no ser que</i>. En el irreal de pasado con modal aparece el <b>Ersatzinfinitiv</b>: el modal adopta forma de infinitivo y el auxiliar finito se antepone al grupo verbal en la subordinada, <i>wenn er hätte kommen können</i>, contra la regla general que sitúa el verbo finito al final. La variante con el auxiliar pospuesto es meridional y no pertenece a la norma escrita.</p>
<h3>Consecutivas</h3>
<p>Conviene separar <b>so ... dass</b>, que gradúa un elemento y presenta el grado como causa del resultado (<i>Er sprach so leise, dass ihn niemand verstand</i>), de <b>sodass</b>, que se limita a encadenar la consecuencia de un hecho ya dado (<i>Er sprach leise, sodass ihn niemand verstand</i>). La consecutiva irreal se construye con <b>zu ... als dass</b> más Konjunktiv II: <i>Er ist zu unerfahren, als dass man ihm die Leitung anvertrauen könnte</i>. La consecutiva negativa emplea <b>ohne dass</b> cuando los sujetos difieren y la construcción de infinitivo <b>ohne ... zu</b> cuando coinciden; esta correspondencia es exactamente la misma que rige entre <i>damit</i> y <i>um ... zu</i>.</p>
<h3>Errores típicos</h3>
<p>El hispanohablante tiende a poner Konjunktiv tras <i>obwohl</i> por analogía con <i>aunque</i> más subjuntivo, cuando la concesiva alemana va en indicativo salvo que la modalidad lo exija por otra razón. Emplea además <i>trotzdem</i> como subjuntor, olvidando que es adverbio y ocupa una posición de miembro oracional. Y transfiere la preposición <i>trotz</i> con dativo, tolerado en el habla pero desaconsejado en la norma escrita, que mantiene el genitivo.
`,
 q:["Er kam zur Sitzung, ___ er hohes Fieber hatte.|trotzdem|dennoch|obwohl|allerdings|2|Solo obwohl es Subjunktor y envía el verbo finito al final; trotzdem y dennoch son adverbios conectivos.",
    "Er hatte hohes Fieber. Trotzdem ___ er zur Sitzung.|er kam|kam|kommen|gekommen|1|trotzdem ocupa el Vorfeld como miembro oracional pleno, de modo que el verbo finito le sigue de inmediato y el sujeto pasa detrás.",
    "___ ich das rechtzeitig gewusst, wäre ich nicht hingefahren.|Wenn hätte|Würde|Hätte|Habe|2|El condicional sin subjuntor sitúa el verbo finito en primera posición y equivale a wenn ich das gewusst hätte.",
    "Forma normativa de la subordinada con doble infinitivo:|wenn er hätte kommen können|wenn er kommen können hätte|wenn er kommen gekonnt hätte|wenn er kommen hätte können|0|Con Ersatzinfinitiv el auxiliar finito se antepone al grupo de infinitivos en lugar de cerrar la Satzklammer.",
    "___ begabt er auch sein mag, ohne Übung erreicht er nichts.|Wie|Obwohl|Wenn|So|3|La construcción concesiva antepone el adjetivo graduado con so y mantiene el verbo finito al final de la subordinada.",
    "Wir fahren morgen los, ___ das Wetter umschlägt.|obwohl|damit|indem|es sei denn|3|es sei denn introduce una condición excluyente equivalente a a no ser que y fosiliza un Konjunktiv I.",
    "Er ist zu unerfahren, ___ man ihm die Leitung anvertrauen könnte.|sodass|damit|als dass|ohne dass|2|La secuencia zu más adjetivo más als dass expresa una consecuencia irreal y exige Konjunktiv II.",
    "___ aller Einwände wurde das Vorhaben gebilligt.|Trotz|Trotzdem|Obwohl|Wenngleich|0|trotz es preposición y rige genitivo en la norma escrita; las otras tres formas conectan oraciones.",
    "Er verließ den Saal, ___ jemand etwas bemerkte.|ohne zu|ohne|damit nicht|ohne dass|3|Cuando el sujeto de la subordinada difiere del de la principal no cabe la construcción de infinitivo con ohne zu.",
    "Er sprach so leise, dass ihn niemand verstand frente a Er sprach leise, sodass ihn niemand verstand:|son variantes equivalentes|en la primera so gradúa el adverbio y presenta el grado como causa, en la segunda sodass encadena el resultado|la segunda es agramatical|la primera es agramatical|1|La correlación so ... dass focaliza el grado, mientras que sodass se limita a añadir la consecuencia de un hecho ya dado."]},

{id:'wortbildung',t:'Formación de palabras: derivación, composición y prefijación',sub:'Léxico',lvl:'C1',
 teoria:`
<h3>Por qué importa</h3>
<p>El alemán compensa un léxico básico relativamente reducido con una capacidad de formación de palabras casi ilimitada. Comprender sus mecanismos no es un lujo etimológico: permite descifrar sin diccionario un compuesto de cuatro miembros, asignarle género y flexión, y sobre todo producirlo. Donde el español recurre a la paráfrasis preposicional, el alemán compone; esa asimetría es la raíz de la sensación de artificialidad que produce la prosa de un hispanohablante que traduce estructura por estructura.</p>
<h3>Composición</h3>
<p>El tipo dominante es el <b>Determinativkompositum</b>: el segundo miembro, el <b>Grundwort</b>, es el núcleo y fija género, número y declinación; el primero, el <b>Bestimmungswort</b>, lo especifica. <i>die Haustür</i> es femenino porque lo es <i>Tür</i>, y designa una clase de puerta, no de casa. La relación semántica entre los dos miembros no está codificada y ha de inferirse del contexto, lo que explica la productividad del procedimiento y también su ambigüedad. Junto a él existen el <b>Kopulativkompositum</b>, cuyos miembros están coordinados (<i>süßsauer</i>, <i>schwarzweiß</i>, <i>Dichterkomponist</i>), y el <b>Possessivkompositum</b> o bahuvrihi, en el que el referente no es el núcleo sino el portador de la propiedad: <i>der Dickkopf</i> no es una cabeza, sino un terco.</p>
<p>Entre ambos miembros aparece con frecuencia un <b>Fugenelement</b>, resto histórico de desinencias de genitivo o de plural que hoy carece de valor gramatical analizable.</p>
<table class="endtable"><tr><th>Fuga</th><th>Contexto habitual</th><th>Ejemplo</th></tr>
<tr><td>-s-</td><td>tras -ung, -heit, -keit, -schaft, -tum, -ion, -tät, -ling</td><td>Universitätsbibliothek, Wohnungstür</td></tr>
<tr><td>-(e)n-</td><td>femeninos en -e y sustantivos de declinación débil</td><td>Sonnenschein, Studentenausweis</td></tr>
<tr><td>-er-</td><td>bases con plural en -er</td><td>Bücherregal, Kindergarten</td></tr>
<tr><td>-e-</td><td>algunas bases monosilábicas</td><td>Hundehütte</td></tr>
<tr><td>cero</td><td>caso general</td><td>Haustür, Buchladen</td></tr></table>
<h3>Derivación por sufijo</h3>
<p>Los sufijos determinan la clase de palabra y, en los sustantivos, el género: <b>-ung, -heit, -keit, -schaft, -ion, -tät</b> son femeninos; <b>-er, -ling, -ismus</b>, masculinos; <b>-chen, -lein, -tum, -nis</b> tienden al neutro. El diminutivo <b>-chen</b> impone género neutro y metafonía de la vocal radical: <i>Baum</i> da <i>das Bäumchen</i>. En el adjetivo, <b>-bar</b> aporta valor pasivo-potencial y se apoya normalmente en bases transitivas (<i>lesbar</i>, <i>machbar</i>), con excepciones consolidadas como <i>brennbar</i> o <i>haltbar</i>; <b>-los</b> es privativo, <b>-haft</b> comparativo y <b>-mäßig</b> el más productivo de la lengua actual. Los <b>Affixoide</b> ocupan una zona intermedia entre composición y derivación: <i>-reich, -arm, -frei, -voll</i>, o los intensificadores <i>stein-</i> y <i>bild-</i> en <i>steinreich</i> y <i>bildschön</i>.</p>
<h3>Prefijación verbal</h3>
<p>Aquí se concentra la dificultad. Los prefijos <b>inseparables</b> —<i>be-, ver-, ent-, er-, zer-, miss-</i>— son átonos y modifican la estructura argumental o la Aktionsart. <b>be-</b> transitiviza y promueve un complemento preposicional a objeto directo: <i>auf eine Frage antworten</i> pasa a <i>eine Frage beantworten</i>. <b>er-</b> es incoativo o resultativo (<i>erblühen</i>, <i>erarbeiten</i>), <b>zer-</b> destructivo (<i>zerbrechen</i>), <b>ent-</b> privativo o inceptivo (<i>entwaffnen</i>, <i>entflammen</i>). Los prefijos <b>separables</b> son tónicos, ocupan el miembro derecho de la Satzklammer y suelen conservar valor local. Un grupo reducido admite ambas lecturas, distinguidas solo por el acento: <i>úmfahren</i>, separable, es derribar atropellando; <i>umfáhren</i>, inseparable, es rodear. Lo mismo ocurre con <i>durchschauen</i> y con <i>übersetzen</i>.</p>
<h3>Conversión y derivación implícita</h3>
<p>Sin afijo visible, el alemán convierte infinitivos en sustantivos neutros (<i>das Essen</i>) y forma nombres de acción con alternancia vocálica: <i>werfen</i> da <i>der Wurf</i>, <i>binden</i> da <i>der Bund</i>. La <b>Rückbildung</b> invierte el proceso y extrae un verbo de un compuesto nominal, como <i>notlanden</i> de <i>Notlandung</i>. El error frecuente del hispanohablante es doble: evitar la composición por inseguridad ante el género y ante la fuga, y asignar al compuesto el género del primer miembro.
`,
 q:["El compuesto determinativo die Haustür debe su género a|Haus|la vocal temática|el Fugenelement|Tür, que es el Grundwort y fija género y flexión|3|En el compuesto determinativo el núcleo está a la derecha: el Grundwort determina género, número y declinación.",
    "Universität más Bibliothek da|Universitätbibliothek|Universitätsbibliothek|Universitätenbibliothek|Universitäte Bibliothek|1|Las bases en -tät, como las terminadas en -ung, -heit, -keit, -schaft e -ion, exigen Fugen-s.",
    "En Sonnenschein el elemento -n- es|una marca de plural|una desinencia de dativo|un Fugenelement sin valor gramatical analizable|un sufijo diminutivo|2|Los Fugenelemente proceden de antiguas desinencias, pero en la lengua actual no funcionan como morfemas flexivos.",
    "auf eine Frage antworten frente a eine Frage beantworten: el prefijo be-|añade un matiz de cortesía|transitiviza el verbo y promueve el complemento preposicional a objeto directo|marca anterioridad|es separable y tónico|1|be- es el prefijo transitivizador por excelencia y reordena la estructura argumental del verbo.",
    "Er umfuhr das Hindernis significa|rodeó el obstáculo|derribó el obstáculo|se detuvo ante el obstáculo|atravesó el obstáculo|0|Con acento en la raíz el verbo es inseparable y significa rodear; con acento en el prefijo es separable y significa derribar atropellando.",
    "El sufijo -bar en lesbar aporta|un valor pasivo-potencial|un valor causativo|un valor incoativo|un valor diminutivo|0|Forma adjetivos con el sentido de que algo puede ser objeto de la acción, por lo que se apoya normalmente en verbos transitivos.",
    "El diminutivo de Baum es|die Baumchen|das Bäumchen|der Bäumchen|das Baumchen|1|El sufijo -chen impone género neutro y provoca metafonía de la vocal radical.",
    "erblühen frente a blühen: el prefijo er- expresa|destrucción|privación|el inicio del proceso|repetición|2|er- es incoativo o resultativo, frente a zer-, que es destructivo, y a ent-, que es privativo.",
    "Der Dickkopf designa|una parte del cuerpo|un objeto|una enfermedad|una persona caracterizada por ese rasgo|3|Es un compuesto posesivo o bahuvrihi: el referente no es el núcleo del compuesto sino el portador de la propiedad.",
    "der Wurf procede de werfen por|composición|conversión sin cambio vocálico|derivación implícita con alternancia vocálica|préstamo|2|La derivación implícita convierte la base verbal en sustantivo mediante Ablaut y sin sufijo visible."]},

{id:'textkohaesion',t:'Cohesión y coherencia: referencia, elipsis y progresión tema-rema',sub:'Texto',lvl:'C1',
 teoria:`
<h3>Dos planos distintos</h3>
<p>La <b>Kohäsion</b> es la trabazón observable en la superficie del texto: pronombres, artículos, conectores, elipsis, repeticiones. La <b>Kohärenz</b> es la conexión conceptual que el receptor construye entre los estados de cosas designados. Los dos planos son independientes: una secuencia puede estar impecablemente cohesionada y resultar incoherente, y a la inversa, una sucesión de enunciados sin marca formal alguna puede ser plenamente coherente si el conocimiento compartido suple las conexiones. Un texto académico alemán exige coherencia conceptual, pero la lengua es además muy exigente en cohesión explícita, más que el español.</p>
<h3>Medios referenciales</h3>
<p>La <b>anáfora</b> remite a un antecedente ya mencionado; la <b>catáfora</b> anuncia lo que sigue (<i>Folgendes ist zu beachten:</i>). El inventario alemán distingue con precisión funciones que el español fusiona.</p>
<table class="endtable"><tr><th>Medio</th><th>Función</th><th>Ejemplo</th></tr>
<tr><td>pronombre personal</td><td>continuidad del referente central</td><td>Der Verlag zögerte. Er dementierte die Meldung.</td></tr>
<tr><td>demostrativo dieser</td><td>recoge el antecedente más próximo</td><td>Peter besuchte Paul. Dieser war müde.</td></tr>
<tr><td>demostrativo der, die, das</td><td>recoge un referente saliente, registro más oral</td><td>Den kenne ich nicht.</td></tr>
<tr><td>Pronominaladverb</td><td>rección preposicional con referente no personal</td><td>Ich denke oft daran.</td></tr>
<tr><td>hiperónimo</td><td>evita la repetición sin perder identidad</td><td>Der Verlag ... Das Unternehmen ...</td></tr>
<tr><td>artículo determinado</td><td>señala identificabilidad tras la primera mención</td><td>ein Antrag ... der Antrag</td></tr></table>
<p>El <b>Pronominaladverb</b> (<i>daran, damit, dabei, darauf</i>) es obligatorio cuando el verbo rige preposición y el referente no es persona: <i>Ich denke oft daran</i>, nunca la variante con pronombre personal, que quedaría reservada a un referente humano. Su omisión es una de las marcas más audibles de acento sintáctico extranjero.</p>
<h3>Elipsis</h3>
<p>La <b>elipsis coordinativa</b> suprime en el segundo miembro el material idéntico y recuperable del primero. Su forma más característica es la supresión del verbo finito: <i>Er fährt nach Bonn, sie nach Köln</i>. Distinto es el correlato <b>es</b>, que no elide nada sino que anticipa una oración desplazada al final: <i>Es freut mich, dass du kommst</i>. Frente a esto, el alemán no admite sujeto nulo; el hispanohablante que suprime el pronombre por analogía con su lengua rompe la cadena referencial y la sintaxis a la vez.</p>
<h3>Tema y rema</h3>
<p>Se llama <b>Thema</b> a la información ya accesible, punto de partida del enunciado, y <b>Rhema</b> a la información nueva que sobre ella se predica. La ordenación alemana explota esta oposición con más rigor que la española: el <b>Vorfeld</b>, posición única que precede al verbo finito, acoge por defecto material temático o el marco de referencia, mientras que el rema y el acento oracional gravitan hacia el final, junto al miembro derecho del paréntesis verbal. Anteponer un elemento remático al Vorfeld es posible, pero equivale a una focalización marcada y contrastiva, no a un orden neutro.</p>
<h3>Progresión temática</h3>
<p>Daneš describió tres patrones básicos. En la <b>progresión lineal simple</b>, el rema de un enunciado se convierte en tema del siguiente, procedimiento propio de la exposición argumentativa. En la <b>progresión de tema constante</b>, un mismo tema recibe remas sucesivos, procedimiento propio de la descripción. En la <b>progresión con hipertema</b>, los temas particulares derivan de un tema global anunciado previamente, procedimiento propio del texto científico estructurado en apartados. Reconocer el patrón dominante permite decidir qué información puede pronominalizarse, qué debe repetirse y dónde conviene un conector explícito.</p>
<h3>Errores típicos</h3>
<p>Además de la omisión del sujeto y del Pronominaladverb, el hispanohablante tiende a variar el léxico por elegancia allí donde el alemán prefiere la recurrencia literal del término técnico, y a sobrecargar el Vorfeld con información nueva, lo que produce una prosa que suena precipitada porque anticipa el rema antes de haber asentado el tema.
`,
 q:["Ich denke oft an die Reise se pronominaliza como|Ich denke oft an sie.|Ich denke oft daran.|Ich denke oft dazu.|Ich denke oft davon.|1|Con referentes no personales la rección preposicional se recoge mediante Pronominaladverb; an sie exigiría un referente humano.",
    "Peter besuchte Paul. Dieser war müde. El demostrativo remite a|Peter|Paul|a los dos a la vez|a un tercero no mencionado|1|dieser recoge el antecedente más próximo, es decir, el mencionado en último lugar.",
    "En Es freut mich, dass du kommst, el elemento es funciona como|sujeto pleno con referencia propia|Modalpartikel|correlato que anticipa la oración desplazada al final|complemento de objeto|2|Es un Korrelat que ocupa la posición estructural del sujeto oracional extrapuesto.",
    "Er fährt nach Bonn, sie nach Köln ilustra|una elipsis coordinativa que suprime el verbo finito ya expresado|una catáfora|una recurrencia parcial|una nominalización|0|La elipsis coordinativa suprime en el segundo miembro el material idéntico y recuperable del primero.",
    "En la primera mención de un referente el alemán exige normalmente|artículo determinado|demostrativo|posesivo|artículo indeterminado o ausencia de artículo|3|La definitud codifica identificabilidad: el artículo determinado señala que el referente ya está accesible en el texto o en la situación.",
    "En la progresión temática lineal simple|el rema de un enunciado se convierte en tema del siguiente|el tema permanece constante y varían los remas|los temas derivan de un hipertema anunciado|no se distingue tema de rema|0|Es el patrón descrito por Daneš como progresión lineal, frente al tema constante y al hipertema.",
    "En la oración enunciativa alemana la información nueva tiende a situarse|en el Vorfeld|inmediatamente detrás del verbo finito|al final, junto al miembro derecho del paréntesis verbal|fuera de la oración|2|El principio de foco final concentra el rema y el acento oracional al final, mientras el Vorfeld acoge material temático.",
    "La interferencia más característica del hispanohablante en la cohesión alemana es|omitir el pronombre sujeto por analogía con su lengua|repetir el sustantivo técnico|emplear hiperónimos|abusar del artículo determinado|0|El alemán no admite sujeto nulo, de modo que la cadena referencial se sostiene sobre pronombres expresos.",
    "Der Verlag hat den Band angekündigt. Das Unternehmen dementierte die Meldung. La segunda mención emplea|recurrencia literal|sustitución por hiperónimo|elipsis|catáfora|1|Unternehmen es un hiperónimo de Verlag y evita la repetición sin romper la identidad referencial.",
    "Kohäsion y Kohärenz se distinguen en que|son términos sinónimos|la coherencia es gramatical y la cohesión semántica|solo la cohesión se da en textos orales|la cohesión es la trabazón de superficie y la coherencia la conexión conceptual subyacente|3|Que un texto pueda ser cohesivo y a la vez incoherente prueba que los dos planos son independientes."]},

{id:'syntaxkomplex',t:'Sintaxis compleja: Satzklammer, Ausklammerung y ocupación del Vorfeld',sub:'Sintaxis',lvl:'C2',
 teoria:`
<h3>El modelo topológico de campos</h3>
<p>La descripción estándar de la oración alemana no parte de constituyentes jerárquicos sino de <b>posiciones lineales</b>. El armazón lo constituye la <b>Satzklammer</b>: un paréntesis formado por un miembro izquierdo y otro derecho que encierra el material intermedio. Los campos son cuatro: el <b>Vorfeld</b>, anterior al paréntesis; el <b>Mittelfeld</b>, entre sus dos miembros; el <b>Nachfeld</b>, posterior al miembro derecho; y las dos posiciones del paréntesis mismo.</p>
<table class="endtable"><tr><th>Tipo</th><th>Vorfeld</th><th>Klammer izquierda</th><th>Mittelfeld</th><th>Klammer derecha</th></tr>
<tr><td>Kernsatz (V2)</td><td>Gestern</td><td>hat</td><td>er das Buch</td><td>gelesen</td></tr>
<tr><td>Stirnsatz (V1)</td><td>vacío</td><td>Hat</td><td>er das Buch</td><td>gelesen?</td></tr>
<tr><td>Spannsatz (VL)</td><td>vacío</td><td>weil</td><td>er das Buch</td><td>gelesen hat</td></tr></table>
<p>El miembro izquierdo lo ocupa el verbo finito en la oración enunciativa y en la interrogativa, y el subjuntor o el pronombre relativo en la subordinada; en este último caso el verbo finito se desplaza al miembro derecho, donde se acumula con las formas no finitas. El miembro derecho reúne participios, infinitivos, prefijos separables y el sustantivo predicativo de los Funktionsverbgefüge. De ahí que la nominalización propia de la lengua especializada tienda a producir paréntesis muy extensos.</p>
<h3>El Vorfeld</h3>
<p>La regla operativa es que el Vorfeld admite <b>un solo constituyente</b>, y por eso funciona como prueba de constituencia: lo que pueda anteponerse en bloque es un sintagma. La elección no es libre en términos comunicativos: por defecto acoge el tema o el marco de referencia, y la anteposición de un elemento remático produce focalización contrastiva. Un caso particular es el <b>Vorfeld-es</b>, relleno posicional sin referencia ni función sintáctica que aparece cuando ningún otro constituyente ocupa el campo: <i>Es kamen viele Gäste</i>. Basta anteponer cualquier otro elemento para que desaparezca, <i>Gestern kamen viele Gäste</i>, prueba de que no es sujeto ni correlato. En la lengua hablada es frecuente además la <b>Vorfeldellipse</b>, con supresión del elemento temático: <i>Hab ich schon erledigt</i>.</p>
<h3>Orden en el Mittelfeld</h3>
<p>El Mittelfeld no es una zona amorfa. Cuatro principios convergentes lo ordenan. Primero, los <b>pronombres átonos</b> se adelantan en bloque al comienzo del campo, inmediatamente tras el miembro izquierdo, y preceden a cualquier sintagma nominal pleno: <i>Ich habe es dem Kind gegeben</i>. Segundo, entre pronombres el orden se invierte respecto del de los sintagmas plenos, de modo que el acusativo precede al dativo: <i>Ich gebe es ihm</i>, frente a <i>Ich gebe dem Kind das Buch</i>. Tercero, lo definido y temático precede a lo indefinido y remático. Cuarto, los <b>Satzadverbien</b> del tipo <i>leider</i> o <i>wahrscheinlich</i> marcan la frontera entre la zona temática y la remática, y la negación <b>nicht</b> se ancla ante el constituyente remático, lo que en la negación oracional la sitúa justo antes del miembro derecho del paréntesis: <i>Er hat den Vertrag nicht unterschrieben</i>.</p>
<h3>Ausklammerung y Nachfeld</h3>
<p>La <b>Ausklammerung</b> consiste en trasladar material fuera del paréntesis, al Nachfeld. No es una licencia coloquial: hay extraposiciones obligatorias, otras habituales y otras marcadas. Las oraciones subordinadas y las construcciones de infinitivo con <i>zu</i> ocupan el Nachfeld salvo en usos arcaizantes; los sintagmas comparativos con <i>als</i> y <i>wie</i> se extraponen con regularidad, <i>Ich habe ihn öfter getroffen als dich</i>; los sintagmas preposicionales pesados y las aposiciones se extraponen con frecuencia creciente en la prosa actual. La motivación es de procesamiento: un paréntesis demasiado largo obliga al receptor a mantener abierta la predicación durante decenas de sílabas, y la Ausklammerung lo descarga a la vez que sitúa al final el material informativamente más pesado, en consonancia con el principio de foco final.</p>
<h3>Errores típicos</h3>
<p>El hispanohablante avanzado suele fallar en tres puntos: coloca la negación al final absoluto en lugar de anteponerla al elemento negado, inserta oraciones subordinadas en el Mittelfeld en vez de extraponerlas, y sobrecarga el Vorfeld con varios constituyentes coordinados, lo que produce oraciones sin verbo en segunda posición.
`,
 q:["En Gestern hat er das Buch gelesen, la Satzklammer la forman|gestern y hat|hat y gelesen|er y das Buch|hat y das Buch|1|El miembro izquierdo es el verbo finito y el derecho el participio; entre ambos se extiende el Mittelfeld.",
    "El Vorfeld de una oración enunciativa admite|un solo constituyente|dos constituyentes|cualquier número de constituyentes|ninguno|0|La restricción a un único constituyente convierte al Vorfeld en la prueba operativa de constituencia.",
    "En Es kamen viele Gäste el es desaparece si otro elemento ocupa el Vorfeld porque|es un pronombre personal|es un correlato del sujeto|es una Modalpartikel|es un Vorfeld-es meramente posicional|3|El Vorfeld-es es un relleno de posición sin referencia ni función sintáctica, incompatible con el Mittelfeld.",
    "Orden normativo con un pronombre y un sintagma nominal pleno:|Ich habe dem Kind es gegeben.|Ich habe es dem Kind gegeben.|Ich habe gegeben es dem Kind.|Ich habe dem Kind gegeben es.|1|Los pronombres átonos se adelantan al comienzo del Mittelfeld, inmediatamente tras el miembro izquierdo del paréntesis.",
    "Con dos pronombres el orden normativo es|Ich gebe ihm es.|Ich gebe es ihm.|Ich gebe es ihn.|Ich gebe ihm ihn.|1|Entre pronombres el acusativo precede al dativo, invirtiendo el orden habitual de los sintagmas nominales plenos.",
    "En Er hat den Vertrag nicht unterschrieben, la negación|niega solo el sujeto|se sitúa siempre en posición final absoluta|precede al miembro derecho del paréntesis porque se ancla ante el elemento remático|está mal colocada|2|En la negación oracional nicht se coloca inmediatamente antes de la parte no finita del predicado.",
    "En Ich habe ihn öfter getroffen als dich, el sintagma comparativo se sitúa|en el Vorfeld|en el Mittelfeld|en el Nachfeld, por Ausklammerung|en el miembro izquierdo del paréntesis|2|La extraposición de sintagmas comparativos con als y wie es la Ausklammerung más asentada en la lengua estándar.",
    "En la subordinada weil er den Vertrag unterschrieben hat|el subjuntor ocupa el miembro izquierdo y el verbo finito el derecho|no se forma paréntesis alguno|el verbo finito ocupa la segunda posición|el Vorfeld está ocupado por weil|0|En el Spannsatz el subjuntor sustituye al verbo finito en el miembro izquierdo y este se desplaza al extremo derecho, con el Vorfeld vacío.",
    "Las oraciones con verbo en primera posición corresponden a|interrogativas parciales con partícula interrogativa|interrogativas totales, imperativos y condicionales sin subjuntor|oraciones de relativo|oraciones enunciativas neutras|1|En todas ellas el Vorfeld queda vacío y el miembro izquierdo del paréntesis lo ocupa directamente el verbo finito.",
    "La Ausklammerung de una subordinada al Nachfeld responde sobre todo a|una exigencia morfológica|una preferencia dialectal|una regla de concordancia|razones de procesamiento y descarga de un paréntesis demasiado extenso|3|Aligerar la Satzklammer facilita el procesamiento y sitúa al final el material más pesado e informativamente relevante."]},

{id:'stil',t:'Registro y variación: gehoben, umgangssprachlich, fachsprachlich',sub:'Texto',lvl:'C2',
 teoria:`
<h3>Estratos y matices</h3>
<p>La estilística alemana distingue las <b>Stilschichten</b>, o estratos de altura, de las <b>Stilfärbungen</b>, o matices connotativos. Los estratos forman una escala continua: <i>dichterisch</i>, <i>gehoben</i>, <i>normalsprachlich</i>, <i>umgangssprachlich</i>, <i>salopp</i>, <i>derb</i>. Los matices —irónico, jocoso, despectivo, eufemístico, burocrático— se superponen a cualquier estrato. El léxico se organiza en series casi completas, y la elección de un miembro sitúa el texto entero.</p>
<table class="endtable"><tr><th>gehoben</th><th>neutro</th><th>umgangssprachlich o salopp</th></tr>
<tr><td>das Antlitz</td><td>das Gesicht</td><td>die Visage</td></tr>
<tr><td>speisen</td><td>essen</td><td>futtern</td></tr>
<tr><td>ableben, verscheiden</td><td>sterben</td><td>ins Gras beißen</td></tr>
<tr><td>erwerben</td><td>kaufen</td><td>sich zulegen</td></tr>
<tr><td>weilen</td><td>sich aufhalten</td><td>rumhängen</td></tr></table>
<h3>El registro especializado</h3>
<p>La <b>Fachsprache</b> no se define por el vocabulario técnico sino por un haz de rasgos sintácticos convergentes: predominio del <b>Nominalstil</b>, con condensación de la subordinación en sintagmas preposicionales (<i>nach Beendigung der Arbeiten</i> frente a <i>nachdem die Arbeiten beendet worden waren</i>), empleo sistemático de Funktionsverbgefüge, uso del <b>participio atributivo extendido</b> (<i>die von der Kommission vorgelegten Vorschläge</i>), que comprime una relativa dentro del sintagma nominal, y recurso a la pasiva y a sus sustitutos. Estos últimos merecen atención: <i>Das Problem lässt sich lösen</i>, <i>Das Problem ist zu lösen</i> y <i>Das Problem ist lösbar</i> son <b>Passiversatzformen</b> que añaden un valor modal de posibilidad o necesidad que la pasiva con <i>werden</i> no expresa. El precio de este estilo es la despersonalización y la pérdida de marcas de tiempo y de agente.</p>
<h3>La lengua coloquial</h3>
<p>La <b>Umgangssprache</b> tiene gramática propia, no una gramática deficiente. Sus rasgos más sistemáticos son las <b>Modalpartikeln</b> (<i>ja, doch, halt, eben, mal, denn, wohl, schon, eigentlich, bloß</i>), que no alteran el contenido proposicional sino la fuerza ilocutiva: <i>Komm doch mal vorbei</i> convierte una orden en una invitación sin compromiso. Su diagnóstico formal es nítido: son átonas, están confinadas al Mittelfeld y no pueden ocupar el Vorfeld ni recibir acento, lo que las separa de los adverbios homónimos. Otros rasgos característicos son el dativo posesivo (<i>dem Vater sein Hut</i>), la perífrasis progresiva con <i>am</i> (<i>Ich bin am Arbeiten</i>), y la subordinada con <b>weil</b> más verbo en segunda posición, que no es un descuido sino una construcción con valor propio: señala que lo que sigue justifica el acto de habla y no la causa del hecho.</p>
<h3>El estrato elevado</h3>
<p>El registro <i>gehoben</i> se reconoce por el genitivo antepuesto (<i>des Landes Wohl</i>), la preferencia del genitivo sobre <i>von</i>, el Konjunktiv I en discurso referido, el orden inverso y un léxico de baja frecuencia. Usado a destiempo produce el efecto contrario al buscado, y ese es un riesgo característico del aprendiz que ha leído más de lo que ha escuchado.</p>
<h3>Variación diatópica</h3>
<p>El alemán es una lengua <b>pluricéntrica</b>: existen tres variedades estándar plenas. <i>Jänner</i>, <i>heuer</i>, <i>Marille</i>, <i>Sackerl</i> o <i>Erdapfel</i> son estándar austriaco, no dialecto; la ortografía suiza ha suprimido la eszett y escribe siempre <i>ss</i>, además de emplear <i>Velo</i> o <i>parkieren</i>. A ello se suma el <b>Präteritumschwund</b>, la pérdida del pretérito en la lengua hablada del sur, que allí se sustituye sistemáticamente por el perfecto, mientras el norte lo conserva en la narración.</p>
<h3>Errores típicos</h3>
<p>El hispanohablante culto mezcla estratos, sobre todo introduciendo léxico elevado en un texto neutro; trata las Modalpartikeln como adverbios y las antepone al Vorfeld, donde resultan agramaticales o cambian de significado; y considera desviación lo que es norma regional plena.
`,
 q:["En Komm doch mal vorbei, las partículas doch y mal|niegan la invitación|marcan el pasado|atenúan el acto de habla y lo convierten en una invitación sin compromiso|refuerzan la orden hasta hacerla imperiosa|2|Las Modalpartikeln no alteran el contenido proposicional sino la fuerza ilocutiva del enunciado.",
    "Un diagnóstico formal fiable de las Modalpartikeln es que|son átonas y no pueden ocupar el Vorfeld|se sitúan siempre al final de la oración|se declinan como los adjetivos|solo aparecen en subordinadas|0|Su confinamiento al Mittelfeld y su carácter átono las separan de los adverbios homónimos.",
    "Ordenados de mayor a menor elevación, los términos son|Gesicht, Antlitz, Visage|Antlitz, Gesicht, Visage|Visage, Gesicht, Antlitz|Antlitz, Visage, Gesicht|1|Antlitz pertenece al estrato elevado, Gesicht es neutro y Visage es despectivo y coloquial.",
    "die von der Kommission vorgelegten Vorschläge equivale a|die Vorschläge, die die Kommission vorgelegt hat|die Vorschläge, die die Kommission vorlegen wird|die Vorschläge für die Kommission|die Vorschläge der Kommission ohne Prädikat|0|El participio atributivo extendido condensa una oración de relativo y es rasgo característico del registro especializado escrito.",
    "Das Problem lässt sich lösen equivale a|Das Problem muss gelöst werden.|Das Problem kann gelöst werden.|Das Problem wurde gelöst.|Das Problem löst sich von allein.|1|La construcción con lassen y reflexivo es un Passiversatz con valor modal de posibilidad, como el adjetivo en -bar.",
    "nach Beendigung der Arbeiten frente a nachdem die Arbeiten beendet worden waren ilustra la oposición entre|activa y pasiva|presente y pasado|singular y plural|Nominalstil y Verbalstil|3|El estilo nominal comprime la subordinación en un sintagma preposicional con sustantivo deverbal y pierde las marcas de tiempo y persona.",
    "Jänner, heuer y Marille son|un dialecto sin norma escrita|lengua coloquial de Berlín|formas suizas|variedad estándar austriaca|3|El alemán es pluricéntrico y estas formas son estándar en Austria, no desviaciones de una norma única.",
    "La variedad estándar suiza se caracteriza, entre otros rasgos, por|escribir siempre ss en lugar de la eszett|carecer de genitivo|prescindir de los artículos|exigir Konjunktiv I en toda subordinada|0|La ortografía suiza suprimió la eszett, y el léxico presenta además unidades propias como Velo o parkieren.",
    "Weil ich hab keine Zeit se caracteriza por|un error de concordancia|presentar verbo en segunda posición tras weil, con lectura justificativa del acto de habla|pertenecer al registro elevado|carecer de sujeto|1|La variante con verbo en segunda posición no rompe la sintaxis al azar: señala que lo que sigue justifica el decir y no la causa del hecho.",
    "El Präteritumschwund consiste en|la desaparición del perfecto en la lengua escrita|la pérdida del Konjunktiv en la lengua hablada|la pérdida del pretérito en el alemán meridional hablado, sustituido por el perfecto|la confusión de dativo y acusativo|2|Es un fenómeno diatópico de la lengua hablada del sur que explica el reparto desigual entre perfecto y pretérito."]},

{id:'phraseologie',t:'Fraseología: colocaciones, modismos y su rendimiento estilístico',sub:'Léxico',lvl:'C2',
 teoria:`
<h3>Criterios de definición</h3>
<p>Un <b>Phraseologismus</b> se define por tres propiedades. La <b>polilexicalidad</b>: consta de más de una palabra. La <b>fijación</b>: la combinación está almacenada como unidad y resiste las variaciones que serían normales en un sintagma libre; puede ser estructural, psicolingüística o pragmática. Y la <b>idiomaticidad</b>: el significado del conjunto no se deduce de la suma de sus componentes. Las dos primeras definen la fraseología en sentido amplio; la tercera, gradual, delimita el sentido estricto y admite tres grados.</p>
<table class="endtable"><tr><th>Grado</th><th>Descripción</th><th>Ejemplo</th></tr>
<tr><td>no idiomático</td><td>significado composicional, solo fijación</td><td>sich die Zähne putzen</td></tr>
<tr><td>parcialmente idiomático</td><td>un componente conserva su valor literal</td><td>blinder Passagier</td></tr>
<tr><td>plenamente idiomático</td><td>ningún componente conserva su valor literal</td><td>ins Gras beißen</td></tr></table>
<h3>Clasificación funcional</h3>
<p>Siguiendo a Burger, los fraseologismos <b>referenciales</b> designan objetos o hechos, y se dividen en nominativos, que ocupan el lugar de un miembro oracional (<i>jemandem reinen Wein einschenken</i>), y proposicionales, que equivalen a un enunciado completo: refranes (<i>Morgenstund hat Gold im Mund</i>) y lugares comunes (<i>Man lebt nur einmal</i>). Los <b>estructurales</b> cumplen funciones gramaticales (<i>in Bezug auf</i>, <i>sowohl ... als auch</i>). Los <b>comunicativos</b> o fórmulas rutinarias regulan la interacción (<i>Guten Appetit</i>, <i>Wie geht es Ihnen</i>).</p>
<h3>Colocaciones</h3>
<p>La <b>colocación</b> ocupa la zona intermedia entre la combinación libre y el modismo: una <b>base</b> autónoma selecciona un <b>colocativo</b> semánticamente restringido y no predecible. <i>eine Entscheidung treffen</i>, <i>Kritik üben</i>, <i>ein Gespräch führen</i>, <i>starker Raucher</i>, <i>eingefleischter Junggeselle</i>. El hablante nativo no elige el colocativo: lo recupera. Los Funktionsverbgefüge son, desde este punto de vista, colocaciones gramaticalizadas. La dificultad contrastiva es máxima precisamente aquí, porque el significado del conjunto es transparente y nada advierte al aprendiz de que la combinación española no vale: la traducción literal del colocativo de <i>tomar una decisión</i> produce un giro inexistente.</p>
<h3>Fijación y sus pruebas</h3>
<p>La fijación se comprueba negativamente. Muchos modismos rechazan la variación de determinante (<i>auf dem Holzweg sein</i> no admite artículo indeterminado), el cambio de número, la pasivización (<i>ins Gras beißen</i> no la tolera) o la expansión atributiva. Prueba adicional son los <b>componentes únicos</b>, elementos sin uso autónomo en la lengua actual que solo sobreviven dentro del giro: <i>gang und gäbe</i>, <i>klipp und klar</i>, <i>Fersengeld geben</i>, <i>Maulaffen feilhalten</i>, <i>mit Kind und Kegel</i>. Su existencia es la demostración más nítida de que la unidad se almacena entera. Las <b>Zwillingsformeln</b> o fórmulas gemelas tienen además orden fijo, motivado con frecuencia por la aliteración y por la longitud creciente de los miembros: <i>mit Sack und Pack</i>, <i>Haus und Hof</i>, <i>klipp und klar</i>.</p>
<h3>Rendimiento estilístico</h3>
<p>El fraseologismo aporta imagen, expresividad y adscripción a un grupo, y se distribuye por estratos exactamente igual que el léxico simple: para el mismo contenido, <i>verscheiden</i> es elevado, <i>sterben</i> neutro, <i>ins Gras beißen</i> o <i>den Löffel abgeben</i> son <i>salopp</i>. De ahí que el error de registro sea aquí especialmente visible. En el periodismo y la publicidad predomina la <b>modificación</b>: sustitución de un componente, expansión atributiva o reactivación del sentido literal. El efecto depende por completo de que el receptor reconozca la forma canónica, de modo que la modificación no contradice la fijación sino que la presupone. Distinta es la <b>contaminación</b> involuntaria, el cruce de dos giros, que delata inseguridad.</p>
<h3>Errores típicos</h3>
<p>El hispanohablante transfiere la imagen en lugar de la función: la equivalencia de <i>Ich drücke dir die Daumen</i> no es literal, aunque el valor pragmático coincida con el del giro español. Altera además artículos y preposiciones internos, que son inamovibles, y sobrecarga el texto de modismos coloquiales en registros que no los admiten.
`,
 q:["En la caracterización habitual, un fraseologismo se define por|polilexicalidad, fijación e idiomaticidad, siendo esta última gradual|frecuencia, brevedad y rima|origen latino, metáfora y arcaísmo|oralidad, ironía y expresividad|0|Polilexicalidad y fijación lo definen en sentido amplio, y la idiomaticidad, gradual, delimita el sentido estricto.",
    "eine Entscheidung ___|machen|nehmen|treffen|geben|2|El colocativo está fijado por la base y no es libre; el calco del español tomar una decisión conduce al error.",
    "En starker Raucher, la relación entre los dos elementos es|libre y composicional|de colocación, con base sustantiva y colocativo restringido|de idiomaticidad plena|puramente gramatical|1|El sustantivo selecciona el adjetivo intensificador, que no admite sustitución por sinónimos como kräftig o mächtig.",
    "gang und gäbe contiene|una metáfora transparente|un extranjerismo|una forma dialectal|un componente sin uso autónomo en la lengua actual|3|Los componentes únicos solo sobreviven dentro del giro y prueban que la unidad se almacena entera.",
    "auf dem Holzweg sein no admite|el plural del sujeto|la sustitución del artículo determinado por uno indeterminado|el tiempo pasado|la negación|1|La fijación estructural bloquea variaciones morfosintácticas que serían normales en un sintagma libre.",
    "Ordenados de mayor a menor elevación, los sinónimos son|sterben, verscheiden, ins Gras beißen|verscheiden, sterben, ins Gras beißen|ins Gras beißen, sterben, verscheiden|verscheiden, ins Gras beißen, sterben|1|La sinonimia fraseológica se organiza por estratos estilísticos y no por matices denotativos.",
    "blinder Passagier es un fraseologismo|no idiomático|plenamente idiomático|parcialmente idiomático|libre|2|Passagier conserva su valor literal mientras blind se reinterpreta, lo que define la idiomaticidad parcial.",
    "La modificación de un fraseologismo en un titular busca|corregir la forma establecida|simplificar el enunciado|traducirlo a otro registro|explotar la tensión entre la forma canónica esperada y la variante|3|El efecto exige que el receptor reconozca la forma canónica, de modo que la modificación presupone la fijación.",
    "El orden de la fórmula gemela mit Sack und Pack|es libre|está fijado y no admite inversión|depende del registro|varía según la región|1|Las Zwillingsformeln tienen orden fijo, motivado con frecuencia por la aliteración y por la longitud creciente de los miembros.",
    "Ich drücke dir die Daumen corresponde funcionalmente en español a|cruzo los dedos por ti|te aprieto los pulgares|te doy la mano|te echo una mano|0|La equivalencia fraseológica es funcional y no literal: las imágenes difieren aunque el valor pragmático coincida."]}
];

/* Orden curricular estricto: cada tema presupone el anterior. */
/* ---- Ampliación 2026-11: unidades añadidas tras el contraste con Grammatik aktiv (Cornelsen)
   y la Übungsgrammatik de Hueber. Redacción propia; ejemplos originales. ---- */
const GRAM7=[
{id:'imperativ',t:'El imperativo',sub:'Verbo',lvl:'A1',
 teoria:`
<h3>Tres formas, tres destinatarios</h3>
<p>El alemán distingue a quién se dirige la orden o el ruego: a una persona que se trata de <b>du</b>, a varias que se tratan de <b>ihr</b>, o a una o varias personas tratadas de <b>Sie</b>.</p>
<table class="endtable"><tr><th>Destinatario</th><th>Formación</th><th>kommen</th><th>arbeiten</th></tr>
<tr><td>du</td><td>raíz del presente, sin <i>du</i> ni <i>-st</i></td><td>Komm!</td><td>Arbeite!</td></tr>
<tr><td>ihr</td><td>forma de <i>ihr</i> sin pronombre</td><td>Kommt!</td><td>Arbeitet!</td></tr>
<tr><td>Sie</td><td>verbo + <i>Sie</i>, verbo en primera posición</td><td>Kommen Sie!</td><td>Arbeiten Sie!</td></tr></table>
<h3>Particularidades de la forma du</h3>
<p>Los verbos con cambio <b>e → i / ie</b> lo conservan: <i>geben → <b>Gib</b>!</i>, <i>lesen → <b>Lies</b>!</i>, <i>nehmen → <b>Nimm</b>!</i>. Los de cambio <b>a → ä</b> lo pierden: <i>fahren → <b>Fahr</b>!</i>, <i>schlafen → <b>Schlaf</b>!</i></p>
<p>Las raíces en <b>-t, -d</b> o con grupo difícil añaden <b>-e</b>: <i>Warte! Öffne das Fenster!</i></p>
<p><b>sein</b> es irregular en las tres formas: <i>Sei ruhig! Seid pünktlich! Seien Sie so nett!</i></p>
<h3>Separables y cortesía</h3>
<p>El prefijo separable va al final: <i>Steh auf! Ruf mich bitte an!</i> Para suavizar se añaden <b>bitte</b>, <b>doch</b> o <b>mal</b>: <i>Komm doch mal vorbei!</i> En situaciones formales se prefiere la pregunta con modal: <i>Können Sie bitte langsamer sprechen?</i></p>`,
 q:["___ bitte das Fenster! (du, öffnen)|Öffnest|Öffne|Öffnen|Öffnet|1|Raíz en -n tras consonante: se añade -e: Öffne!",
    "___ das Buch! (du, lesen)|Les|Lese|Lies|Liest|2|El cambio e → ie se conserva en el imperativo de du: Lies!",
    "___ nicht so schnell! (du, fahren)|Fähr|Fahr|Fährst|Fahrt|1|El cambio a → ä desaparece: Fahr!",
    "___ Sie bitte Platz! (nehmen)|Nimm|Nehmt|Nehmen|Nimmst|2|Con Sie: infinitivo + Sie, en primera posición.",
    "Kinder, ___ leise! (sein)|seid|sind|seien|sei|0|sein en la forma de ihr: Seid leise!",
    "Bitte ___ ruhig, Herr Weber! (sein)|sei|seid|sind|seien Sie|3|Forma de cortesía irregular: Seien Sie ruhig!",
    "___ morgen früh ___! (du, aufstehen)|Steh … auf|Aufsteh … —|Stehst … auf|Stehe auf … —|0|El prefijo separable va al final de la oración.",
    "___ mir bitte das Salz! (du, geben)|Geb|Gibst|Gib|Gebt|2|geben → gib: se conserva el cambio e → i.",
    "¿Qué palabra suaviza una orden?|nie|mal|nicht|kein|1|bitte, doch y mal suavizan el imperativo.",
    "Imperativo de «mitkommen» para ihr:|Kommt mit!|Kommen mit!|Kommst mit!|Mitkommt!|0|Forma de presente de ihr sin pronombre; el prefijo va al final: Kommt mit!"]},

{id:'plural',t:'El plural del sustantivo',sub:'Sustantivo',lvl:'A1',
 teoria:`
<h3>Cinco marcas de plural</h3>
<p>El plural se aprende con cada sustantivo, pero hay tendencias muy fiables. El artículo plural es siempre <b>die</b>.</p>
<table class="endtable"><tr><th>Marca</th><th>Típico de</th><th>Ejemplos</th></tr>
<tr><td>– / ¨–</td><td>masculinos y neutros en -er, -en, -el; diminutivos -chen, -lein</td><td>der Lehrer → die Lehrer · der Vater → die Väter · das Mädchen → die Mädchen</td></tr>
<tr><td>-e / ¨-e</td><td>muchos masculinos monosílabos</td><td>der Tag → die Tage · der Stuhl → die Stühle</td></tr>
<tr><td>-er / ¨-er</td><td>neutros monosílabos</td><td>das Kind → die Kinder · das Buch → die Bücher</td></tr>
<tr><td>-(e)n</td><td>casi todos los femeninos; masculinos de la n-Deklination</td><td>die Frau → die Frauen · die Lampe → die Lampen · der Student → die Studenten</td></tr>
<tr><td>-s</td><td>préstamos, siglas, palabras en vocal distinta de -e</td><td>das Auto → die Autos · das Handy → die Handys · das Kino → die Kinos</td></tr></table>
<h3>Reglas útiles</h3>
<p>Los femeninos en <b>-in</b> doblan la n: <i>die Lehrerin → die Lehrerin<b>nen</b></i>. Los terminados en <b>-ung, -heit, -keit, -schaft, -ion</b> forman <b>-en</b>: <i>die Wohnung<b>en</b>, die Information<b>en</b></i>.</p>
<p>En <b>dativo plural</b> se añade <b>-n</b> si el plural no termina ya en -n o -s: <i>mit den Kinder<b>n</b></i>, pero <i>mit den Autos</i>.</p>
<p>Algunos sustantivos no tienen plural (<i>die Milch, das Obst</i>) o solo plural (<i>die Leute, die Eltern, die Ferien</i>).</p>`,
 q:["Plural de «das Kind»:|die Kinds|die Kinder|die Kinden|die Kind|1|Neutro monosílabo: -er.",
    "Plural de «die Lehrerin»:|die Lehrerinen|die Lehrerinnen|die Lehrerins|die Lehrerin|1|Los femeninos en -in doblan la n: -innen.",
    "Plural de «das Auto»:|die Auto|die Autoen|die Autos|die Äuto|2|Palabras terminadas en vocal (salvo -e) y préstamos: -s.",
    "Plural de «der Lehrer»:|die Lehrer|die Lehrern|die Lehrers|die Lehrere|0|Masculinos en -er: sin marca.",
    "Plural de «die Zeitung»:|die Zeitunge|die Zeitungs|die Zeitungen|die Zeitüngen|2|-ung → -en.",
    "Plural de «der Stuhl»:|die Stuhls|die Stühle|die Stuhle|die Stühler|1|Masculino monosílabo con Umlaut: ¨-e.",
    "Ich spiele mit den ___. (Kind)|Kinder|Kindern|Kinds|Kind|1|Dativo plural: se añade -n.",
    "¿Qué sustantivo solo existe en plural?|die Frau|die Eltern|das Haus|der Freund|1|Eltern, Leute, Ferien: plural sin singular.",
    "Plural de «das Buch»:|die Buchs|die Bücher|die Buche|die Büchen|1|Neutro monosílabo con Umlaut: ¨-er.",
    "El artículo determinado en plural es siempre…|der|die|das|den|1|En nominativo y acusativo plural: die, en los tres géneros."]},

{id:'negation',t:'La negación: nicht y kein',sub:'Sintaxis',lvl:'A1',
 teoria:`
<h3>¿kein o nicht?</h3>
<p><b>kein</b> niega un sustantivo que llevaría <b>ein</b> o ningún artículo. Se declina como <i>ein</i> (y en plural como <i>meine</i>): <i>Ich habe <b>kein</b> Auto. Er trinkt <b>keinen</b> Kaffee. Wir haben <b>keine</b> Kinder.</i></p>
<p><b>nicht</b> niega todo lo demás: el verbo, adjetivos, adverbios, sustantivos con artículo determinado o posesivo y nombres propios. <i>Ich komme <b>nicht</b>. Das Essen ist <b>nicht</b> warm. Das ist <b>nicht</b> mein Buch.</i></p>
<h3>¿Dónde va nicht?</h3>
<p>Para negar toda la oración, <b>nicht</b> va lo más al final posible, pero <b>delante</b> de la segunda parte del verbo, de los complementos con preposición, de los adjetivos predicativos y de los complementos de lugar o dirección.</p>
<p><i>Ich kenne den Mann <b>nicht</b>.</i> · <i>Ich habe ihn <b>nicht</b> gesehen.</i> · <i>Er wohnt <b>nicht</b> in Berlin.</i> · <i>Ich rufe dich <b>nicht</b> an.</i></p>
<p>Para negar <b>solo un elemento</b>, nicht se coloca justo delante de él y suele seguir <b>sondern</b>: <i>Ich fahre <b>nicht</b> heute, <b>sondern</b> morgen.</i></p>
<h3>Otras palabras negativas</h3>
<p><b>nichts</b> (nada), <b>niemand</b> (nadie), <b>nie</b> / <b>niemals</b> (nunca), <b>nirgends</b> (en ningún sitio). En alemán estándar <b>no hay doble negación</b>: <i>Ich sehe <b>niemanden</b></i> (no *Ich sehe nicht niemanden).</p>
<p>A una pregunta negativa se responde afirmativamente con <b>doch</b>: <i>Hast du keinen Hunger? — <b>Doch</b>!</i></p>`,
 q:["Ich habe ___ Zeit.|nicht|kein|keine|nichts|2|Zeit es femenino sin artículo: keine.",
    "Er kommt heute ___.|kein|nicht|keinen|nie nicht|1|Se niega el verbo: nicht al final.",
    "Wir trinken ___ Kaffee.|kein|keinen|nicht|keine|1|Kaffee, masculino, acusativo: keinen.",
    "Das ist ___ mein Handy.|kein|nicht|keine|nichts|1|Con posesivo se niega con nicht.",
    "Ich habe ihn ___ gesehen.|nicht|kein|keinen|nichts|0|nicht va delante del participio.",
    "Hast du keine Geschwister? — ___, ich habe einen Bruder.|Ja|Nein|Doch|Nicht|2|Respuesta afirmativa a pregunta negativa: doch.",
    "Er wohnt ___ in Köln, sondern in Bonn.|kein|nicht|nie|nichts|1|Negación parcial con nicht … sondern.",
    "Ich sehe ___ . (nadie)|niemand|niemanden|nicht niemanden|keinen niemand|1|niemand en acusativo: niemanden; sin doble negación.",
    "Sie hat ___ Kinder.|keinen|keine|nicht|kein|1|Plural: keine.",
    "Das Wetter ist heute ___ schön.|kein|keine|nicht|nichts|2|Adjetivo predicativo: nicht."]},

{id:'praepakkdat',t:'Preposiciones con acusativo y con dativo',sub:'Preposiciones',lvl:'A2',
 teoria:`
<h3>Caso fijo</h3>
<p>Muchas preposiciones exigen siempre el mismo caso, se pregunte <i>wo</i> o <i>wohin</i>. Conviene aprenderlas en bloque.</p>
<table class="endtable"><tr><th>Siempre acusativo</th><th>Siempre dativo</th></tr>
<tr><td><b>durch</b> (a través de) · <b>für</b> (para) · <b>gegen</b> (contra; hacia las) · <b>ohne</b> (sin) · <b>um</b> (alrededor de; a las) · <b>bis</b> (hasta)</td>
<td><b>aus</b> (de, desde dentro) · <b>bei</b> (en casa de, junto a) · <b>mit</b> (con) · <b>nach</b> (hacia; después de) · <b>seit</b> (desde hace) · <b>von</b> (de) · <b>zu</b> (a, hacia) · <b>gegenüber</b> (enfrente de) · <b>ab</b> (a partir de)</td></tr></table>
<p>Truco mnemotécnico: <b>DOGFUB</b> para el acusativo (durch, ohne, gegen, für, um, bis).</p>
<h3>Contracciones obligatorias o habituales</h3>
<p><b>bei dem → beim</b>, <b>von dem → vom</b>, <b>zu dem → zum</b>, <b>zu der → zur</b>; en acusativo, coloquialmente <b>durch das → durchs</b>, <b>für das → fürs</b>, <b>um das → ums</b>.</p>
<p><i>Ich gehe <b>zum</b> Arzt und dann <b>zur</b> Apotheke.</i> · <i>Das Geschenk ist <b>für dich</b>.</i> · <i>Ich wohne <b>seit</b> zwei Jahren <b>bei</b> meiner Tante.</i></p>
<h3>Valores que conviene distinguir</h3>
<p><b>aus</b> indica procedencia de un interior o de un país (<i>aus Kolumbien, aus dem Haus</i>); <b>von</b>, punto de partida o persona (<i>vom Bahnhof, von meiner Mutter</i>). <b>nach</b> se usa con ciudades y países sin artículo y con <i>Hause</i>; <b>zu</b>, con personas, edificios e instituciones (<i>zu Anna, zur Uni</i>).</p>`,
 q:["Das Geschenk ist für ___ Mutter.|meiner|meine|meinem|meines|1|für + acusativo: meine Mutter.",
    "Ich fahre mit ___ Bus.|den|dem|der|des|1|mit + dativo: dem Bus.",
    "Wir gehen durch ___ Park.|dem|den|der|des|1|durch + acusativo: den Park.",
    "Er kommt aus ___ Schweiz.|die|der|den|dem|1|aus + dativo, femenino: der Schweiz.",
    "Ich gehe heute ___ Arzt.|zu dem|zum|zur|beim|1|zu + dem = zum.",
    "Ohne ___ Hilfe schaffe ich das nicht.|dein|deine|deiner|deinem|1|ohne + acusativo femenino: deine.",
    "Sie wohnt seit ___ Monat in Bogotá.|ein|einen|einem|eines|2|seit + dativo: einem Monat.",
    "Ich fliege morgen ___ Wien.|zu|nach|in|bei|1|Ciudades sin artículo: nach.",
    "Wir treffen uns ___ Bäcker.|beim|zum|vom|im|0|Lugar (wo?) junto a/en casa de: bei dem = beim.",
    "Der Brief ist ___ meinem Bruder.|für|von|ohne|um|1|von + dativo: von meinem Bruder."]},

{id:'praeptemp',t:'Preposiciones temporales',sub:'Preposiciones',lvl:'A2',
 teoria:`
<h3>¿Cuándo? — un momento</h3>
<table class="endtable"><tr><th>Preposición</th><th>Uso</th><th>Ejemplo</th></tr>
<tr><td><b>um</b></td><td>hora exacta</td><td>um acht Uhr</td></tr>
<tr><td><b>am</b> (an + dem)</td><td>días, fechas, partes del día</td><td>am Montag · am 3. Mai · am Abend (pero: <b>in der Nacht</b>)</td></tr>
<tr><td><b>im</b> (in + dem)</td><td>meses, estaciones, años con «Jahr»</td><td>im Juli · im Winter · im Jahr 2026</td></tr>
<tr><td>— (sin preposición)</td><td>años solos</td><td>2026 habe ich angefangen.</td></tr>
<tr><td><b>gegen</b></td><td>hora aproximada</td><td>gegen neun Uhr</td></tr></table>
<h3>¿Desde cuándo? ¿Hasta cuándo? ¿Cuánto tiempo?</h3>
<p><b>seit</b> + dativo: algo que empezó en el pasado y <b>sigue</b>: <i>Ich lerne seit einem Jahr Deutsch.</i></p>
<p><b>vor</b> + dativo: hace (algo terminado): <i>Ich war vor einem Jahr in Berlin.</i></p>
<p><b>ab</b> + dativo: a partir de (futuro): <i>Ab nächster Woche arbeite ich halbtags.</i></p>
<p><b>von … bis</b>: de … a: <i>von neun bis fünf</i>, <i>vom 1. bis (zum) 5. Juni</i>.</p>
<p><b>nach</b> y <b>vor</b> + dativo: después de / antes de: <i>nach dem Essen, vor der Arbeit</i>.</p>
<p><b>in</b> + dativo: dentro de (futuro): <i>In zwei Wochen habe ich Urlaub.</i></p>
<p><b>während</b> + genitivo (coloq. dativo): durante: <i>während des Unterrichts</i>.</p>`,
 q:["Der Kurs beginnt ___ neun Uhr.|am|um|im|in|1|Hora exacta: um.",
    "Ich habe ___ Freitag Zeit.|um|im|am|in|2|Días de la semana: am.",
    "Wir fahren ___ August nach Spanien.|am|im|um|zu|1|Meses: im.",
    "Ich lerne ___ drei Jahren Deutsch.|vor|seit|ab|für|1|Acción que continúa: seit.",
    "Ich war ___ zwei Wochen in Hamburg.|seit|vor|ab|in|1|Hace (acción terminada): vor.",
    "Die Praxis ist ___ acht ___ zwölf Uhr geöffnet.|von … bis|seit … bis|ab … um|um … bis|0|Intervalo: von … bis.",
    "___ der Nacht schlafe ich.|Am|In der|Um|Im|1|Excepción: in der Nacht.",
    "___ einer Woche habe ich Prüfung. (dentro de)|Vor|Seit|In|Ab|2|Futuro, dentro de: in.",
    "Ich putze mir ___ dem Essen die Zähne. (después)|vor|nach|seit|ab|1|Después de: nach + dativo.",
    "___ des Films hat er geschlafen.|Während|Seit|Um|Ab|0|Durante: während + genitivo."]},

{id:'praeplokal',t:'Preposiciones de lugar: wo, wohin, woher',sub:'Preposiciones',lvl:'A2',
 teoria:`
<h3>Tres preguntas, tres respuestas</h3>
<table class="endtable"><tr><th></th><th>Wo? (estar)</th><th>Wohin? (ir)</th><th>Woher? (venir)</th></tr>
<tr><td>persona</td><td>bei Anna · beim Arzt</td><td>zu Anna · zum Arzt</td><td>von Anna · vom Arzt</td></tr>
<tr><td>casa</td><td><b>zu Hause</b></td><td><b>nach Hause</b></td><td>von zu Hause</td></tr>
<tr><td>ciudad / país sin artículo</td><td>in Berlin</td><td>nach Berlin</td><td>aus Berlin</td></tr>
<tr><td>país con artículo</td><td>in der Schweiz</td><td>in die Schweiz</td><td>aus der Schweiz</td></tr>
<tr><td>edificio cerrado</td><td>im Kino</td><td>ins Kino</td><td>aus dem Kino</td></tr>
<tr><td>institución, tienda</td><td>in der Bank / bei der Post</td><td>zur Bank / zur Post</td><td>von der Bank</td></tr>
<tr><td>superficie, agua</td><td>am Meer · auf dem Markt</td><td>ans Meer · auf den Markt</td><td>vom Meer · vom Markt</td></tr></table>
<h3>Puntos delicados</h3>
<p><b>zu Hause</b> (en casa) frente a <b>nach Hause</b> (a casa): <i>Ich bin zu Hause. Ich gehe nach Hause.</i> (En Austria y Suiza también se escribe <i>zuhause</i>.)</p>
<p>Países con artículo: <i>die Schweiz, die Türkei, der Iran, die USA</i> (plural) → <i>in die USA</i>.</p>
<p>Con <b>in, an, auf</b> el caso depende de la pregunta (véase la unidad de <i>Wechselpräpositionen</i>); con <b>zu, bei, von, aus, nach</b> es siempre dativo.</p>`,
 q:["Ich gehe jetzt ___ . (a casa)|zu Hause|nach Hause|nach Haus zu|im Haus|1|Dirección a casa: nach Hause.",
    "Am Sonntag bin ich ___ . (en casa)|nach Hause|zu Hause|zum Haus|ins Haus|1|Estar en casa: zu Hause.",
    "Wir fahren im Sommer ___ Schweiz.|nach der|in die|zur|in der|1|País con artículo + dirección: in die Schweiz.",
    "Ich muss heute ___ Zahnarzt.|zum|beim|nach|im|0|Ir a una persona/profesión: zu + dem = zum.",
    "Sie ist gerade ___ Friseur.|zum|beim|vom|ins|1|Estar en (la peluquería): beim.",
    "Er kommt gerade ___ Supermarkt.|vom|aus dem|zum|beim|1|Salir de un edificio cerrado: aus dem.",
    "Am Wochenende fahren wir ___ Meer.|ins|ans|zum|am|1|Orilla/costa con dirección: an das = ans.",
    "Ich fliege nächste Woche ___ USA.|nach|in die|zu den|in den|1|Países en plural: in die USA.",
    "Woher kommst du? — Ich komme ___ Kolumbien.|von|aus|nach|in|1|País de origen: aus.",
    "Wir gehen heute Abend ___ Kino.|im|ins|zum|beim|1|Dirección a un edificio cerrado: in das = ins."]},

{id:'dativverben',t:'Verbos con dativo y con dos complementos',sub:'Casos',lvl:'A2',
 teoria:`
<h3>Verbos que piden dativo</h3>
<p>Algunos verbos frecuentes llevan un único complemento en <b>dativo</b> (la persona), aunque en español sea objeto directo:</p>
<p><b>helfen, danken, gefallen, gehören, gratulieren, antworten, passen, schmecken, stehen</b> (sentar bien), <b>fehlen, glauben</b> (a alguien), <b>zuhören</b>.</p>
<p><i>Ich helfe <b>dir</b>. Das Kleid gefällt <b>meiner Schwester</b>. Wem gehört das Fahrrad? — Es gehört <b>mir</b>.</i></p>
<h3>Verbos con dativo + acusativo</h3>
<p>Verbos de transferencia: <b>geben, schenken, schicken, zeigen, erklären, bringen, leihen, empfehlen, kaufen, schreiben</b>. La <b>persona</b> va en dativo; la <b>cosa</b>, en acusativo.</p>
<p><i>Ich schenke <b>meinem Vater</b> (D) <b>ein Buch</b> (A).</i></p>
<h3>El orden de los dos complementos</h3>
<table class="endtable"><tr><th>Caso</th><th>Orden</th><th>Ejemplo</th></tr>
<tr><td>dos sustantivos</td><td>dativo – acusativo</td><td>Ich gebe dem Kind den Ball.</td></tr>
<tr><td>un pronombre</td><td>pronombre primero</td><td>Ich gebe <b>ihm</b> den Ball. · Ich gebe <b>ihn</b> dem Kind.</td></tr>
<tr><td>dos pronombres</td><td>acusativo – dativo</td><td>Ich gebe <b>ihn ihm</b>.</td></tr></table>`,
 q:["Kannst du ___ helfen?|mich|mir|ich|meiner|1|helfen + dativo: mir.",
    "Das Buch gehört ___ Lehrerin.|die|der|den|des|1|gehören + dativo, femenino: der Lehrerin.",
    "Ich danke ___ für die Einladung.|Sie|Ihnen|Ihr|Ihrer|1|danken + dativo: Ihnen.",
    "Die Schuhe gefallen ___ nicht.|ihn|ihm|er|seinen|1|gefallen + dativo: ihm.",
    "Ich schenke ___ eine Uhr. (mein Bruder)|mein Bruder|meinen Bruder|meinem Bruder|meines Bruders|2|Persona en dativo: meinem Bruder.",
    "Er zeigt ___ die Fotos. (sie, pl.)|sie|ihnen|ihr|ihre|1|Dativo plural de sie: ihnen.",
    "Ich gebe dem Kind den Ball. → Ich gebe ___ .|ihm ihn|ihn ihm|ihn ihn|ihm ihm|1|Dos pronombres: acusativo antes que dativo: ihn ihm.",
    "Ich erkläre ___ die Aufgabe. (ihr, a ella)|sie|ihr|ihre|ihn|1|Persona en dativo femenino: ihr.",
    "Wir gratulieren ___ zum Geburtstag. (du)|dich|dir|du|dein|1|gratulieren + dativo: dir.",
    "Schmeckt ___ die Suppe?|dich|dir|du|deine|1|schmecken + dativo: dir."]},

{id:'welcher',t:'Artículos interrogativos y demostrativos: welcher, dieser, jeder',sub:'Sustantivo',lvl:'A2',
 teoria:`
<h3>Se declinan como el artículo determinado</h3>
<p><b>welcher</b> (¿qué?, ¿cuál?), <b>dieser</b> (este), <b>jeder</b> (cada, solo singular), <b>mancher</b> (algún que otro) y <b>alle</b> (todos, plural) toman las terminaciones de <i>der, die, das</i>.</p>
<table class="endtable"><tr><th></th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>Nom</td><td>dies<b>er</b></td><td>dies<b>e</b></td><td>dies<b>es</b></td><td>dies<b>e</b></td></tr>
<tr><td>Akk</td><td>dies<b>en</b></td><td>dies<b>e</b></td><td>dies<b>es</b></td><td>dies<b>e</b></td></tr>
<tr><td>Dat</td><td>dies<b>em</b></td><td>dies<b>er</b></td><td>dies<b>em</b></td><td>dies<b>en</b></td></tr>
<tr><td>Gen</td><td>dies<b>es</b></td><td>dies<b>er</b></td><td>dies<b>es</b></td><td>dies<b>er</b></td></tr></table>
<h3>Uso</h3>
<p><i><b>Welchen</b> Film möchtest du sehen? — <b>Diesen</b> hier.</i> · <i>In <b>welchem</b> Stock wohnst du?</i> · <i><b>Jeder</b> Schüler bekommt ein Heft.</i></p>
<p>En la lengua hablada, en lugar de <i>dieser</i> se usa a menudo el artículo determinado acentuado: <i>Ich nehme <b>den</b> da.</i></p>
<p>Para preguntar por el tipo y no por uno concreto se usa <b>was für ein</b>: <i>Was für ein Auto hast du? — Ein Elektroauto.</i></p>`,
 q:["___ Pullover gefällt dir?|Welche|Welcher|Welches|Welchen|1|Pullover, masculino nominativo: welcher.",
    "___ Jacke nimmst du?|Welcher|Welche|Welches|Welchem|1|Jacke, femenino acusativo: welche.",
    "Ich kaufe ___ Tisch.|dieser|diesen|diesem|dieses|1|Masculino acusativo: diesen.",
    "In ___ Haus wohnst du?|welches|welchem|welcher|welchen|1|in + dativo (wo?), neutro: welchem.",
    "___ Student braucht einen Ausweis.|Jede|Jeder|Jedes|Jeden|1|Masculino nominativo: jeder.",
    "Mit ___ Leuten sprichst du?|welche|welchen|welcher|welchem|1|Dativo plural: welchen.",
    "___ Kind bekommt ein Geschenk.|Jeder|Jede|Jedes|Jeden|2|Neutro nominativo: jedes.",
    "Was für ___ Wohnung suchst du?|ein|eine|einen|einer|1|was für eine + femenino acusativo.",
    "Ich nehme ___ Brötchen. (estos, pl.)|dieses|diese|diesen|dieser|1|Plural acusativo: diese.",
    "jeder se usa…|solo en plural|solo en singular|solo en dativo|solo con nombres propios|1|jeder es solo singular; en plural se usa alle."]},

{id:'positionsverben',t:'Verbos de posición y de colocación: liegen/legen, stehen/stellen…',sub:'Verbo',lvl:'A2',
 teoria:`
<h3>Dos series que se confunden</h3>
<table class="endtable"><tr><th>Wo? — estado (dativo)</th><th>Wohin? — acción (acusativo)</th></tr>
<tr><td><b>liegen</b>, lag, hat gelegen</td><td><b>legen</b>, legte, hat gelegt</td></tr>
<tr><td><b>stehen</b>, stand, hat gestanden</td><td><b>stellen</b>, stellte, hat gestellt</td></tr>
<tr><td><b>sitzen</b>, saß, hat gesessen</td><td><b>(sich) setzen</b>, setzte, hat gesetzt</td></tr>
<tr><td><b>hängen</b>, hing, hat gehangen</td><td><b>hängen</b>, hängte, hat gehängt</td></tr>
<tr><td><b>stecken</b> (estar metido)</td><td><b>stecken</b> (meter)</td></tr></table>
<p>Los verbos de <b>estado</b> son irregulares e intransitivos y van con <b>Wechselpräposition + dativo</b>. Los de <b>acción</b> son regulares, llevan complemento directo y van con <b>acusativo</b>.</p>
<p><i>Das Buch <b>liegt</b> auf <b>dem</b> Tisch. → Ich <b>lege</b> das Buch auf <b>den</b> Tisch.</i><br><i>Die Flasche <b>steht</b> im Kühlschrank. → Ich <b>stelle</b> die Flasche in <b>den</b> Kühlschrank.</i></p>
<h3>¿liegen o stehen?</h3>
<p>Objetos en horizontal <i>liegen</i> (un libro plano, un móvil); objetos en vertical o sobre su base <i>stehen</i> (una botella, un vaso, un libro en la estantería).</p>
<p>En el sur de Alemania, en Austria y en Suiza, <i>liegen, stehen, sitzen</i> forman el Perfekt con <b>sein</b>: <i>Ich bin lange gesessen.</i></p>`,
 q:["Das Handy ___ auf dem Tisch.|legt|liegt|stellt|setzt|1|Estado, objeto plano: liegt.",
    "Ich ___ die Tasse auf den Tisch.|stehe|stelle|liege|sitze|1|Acción, objeto vertical: stelle.",
    "Das Bild ___ an der Wand.|hängt (hing)|hängt (hängte)|legt|steht|0|Estado: hängen intransitivo (hing, gehangen).",
    "Er ___ sich auf das Sofa.|sitzt|setzt|liegt|stellt|1|Acción de sentarse: sich setzen + acusativo.",
    "Wo sind die Schuhe? — Sie ___ unter dem Bett.|stellen|stehen|legen|setzen|1|Estado: stehen + dativo.",
    "Ich habe den Schlüssel in ___ Tasche gesteckt.|der|die|dem|den|1|Acción (wohin): acusativo, femenino: die Tasche.",
    "Die Kinder ___ am Tisch.|setzen|sitzen|stellen|legen|1|Estado: sitzen.",
    "Ich habe die Milch in den Kühlschrank ___ .|gestanden|gestellt|gelegen|gesetzt|1|Acción: stellen → gestellt.",
    "Das Buch hat lange auf dem Boden ___ .|gelegt|gelegen|gelagen|liegt|1|Estado: liegen → gelegen.",
    "Wohin hast du die Jacke ___ ? — An die Garderobe.|gehangen|gehängt|gehängen|hing|1|Acción: hängen transitivo → gehängt."]},

{id:'genitiv',t:'El genitivo',sub:'Casos',lvl:'B1',
 teoria:`
<h3>Formas</h3>
<table class="endtable"><tr><th></th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>determinado</td><td>des Mann<b>es</b></td><td>der Frau</td><td>des Kind<b>es</b></td><td>der Kinder</td></tr>
<tr><td>indeterminado / posesivo</td><td>eines / meines Freund<b>es</b></td><td>einer / meiner Freundin</td><td>eines / meines Auto<b>s</b></td><td>meiner Freunde</td></tr></table>
<p>Los masculinos y neutros toman <b>-s</b> o <b>-es</b> (este último en monosílabos y en terminaciones en -s, -ß, -x, -z: <i>des Hauses, des Platzes</i>). Femeninos y plurales no cambian. Los nombres propios llevan <b>-s</b> sin apóstrofo: <i>Annas Bruder, Deutschlands Hauptstadt</i>.</p>
<h3>Usos</h3>
<p><b>Posesión y pertenencia</b>, detrás del sustantivo: <i>das Auto meines Vaters, die Farbe des Himmels</i>.</p>
<p><b>Preposiciones de genitivo</b>: <i>wegen, trotz, während, statt, innerhalb, außerhalb</i>: <i>wegen des Regens</i>.</p>
<p>En la lengua hablada se sustituye con frecuencia por <b>von + dativo</b>: <i>das Auto von meinem Vater</i>. Es obligatorio cuando no hay artículo que muestre el caso: <i>der Preis <b>von</b> Häusern</i>.</p>
<p>Pregunta: <b>Wessen</b>? — <i>Wessen Tasche ist das? — Die Tasche meiner Schwester.</i></p>`,
 q:["Das ist das Auto ___ Vaters.|meinem|meines|meiner|mein|1|Genitivo masculino: meines Vaters.",
    "Die Farbe ___ Hauses gefällt mir.|der|des|dem|das|1|Genitivo neutro: des Hauses.",
    "Der Name ___ Lehrerin ist Frau Kaya.|des|der|dem|die|1|Femenino genitivo: der Lehrerin.",
    "___ Bruder wohnt in Medellín. (Anna)|Anna's|Annas|Des Annas|Von Anna|1|Nombre propio: -s sin apóstrofo.",
    "Wegen ___ Regens bleiben wir zu Hause.|dem|des|der|den|1|wegen + genitivo: des Regens.",
    "Das Spielzeug ___ Kinder liegt überall.|den|der|des|die|1|Plural genitivo: der Kinder.",
    "___ Jacke ist das?|Wer|Wem|Wessen|Wen|2|Pregunta del genitivo: wessen.",
    "Forma coloquial de «das Haus meiner Eltern»:|das Haus von meinen Eltern|das Haus meinen Eltern|das Haus von meiner Eltern|das Haus mit meinen Eltern|0|Sustituto coloquial: von + dativo.",
    "Während ___ Unterrichts ist das Handy aus.|dem|des|der|den|1|während + genitivo: des Unterrichts.",
    "Der Preis ___ Wohnungen steigt. (sin artículo)|der|von|des|den|1|Sin artículo que marque el caso: von + dativo."]},

{id:'plusquam',t:'El pluscuamperfecto (Plusquamperfekt)',sub:'Pasado',lvl:'B1',
 teoria:`
<h3>El pasado del pasado</h3>
<p>El Plusquamperfekt expresa una acción <b>anterior</b> a otra acción pasada. Se forma con el <b>Präteritum de haben o sein</b> + <b>participio II</b>; el auxiliar se elige igual que en el Perfekt.</p>
<table class="endtable"><tr><th></th><th>machen</th><th>fahren</th></tr>
<tr><td>ich</td><td>hatte gemacht</td><td>war gefahren</td></tr>
<tr><td>du</td><td>hattest gemacht</td><td>warst gefahren</td></tr>
<tr><td>er/sie/es</td><td>hatte gemacht</td><td>war gefahren</td></tr>
<tr><td>wir/sie/Sie</td><td>hatten gemacht</td><td>waren gefahren</td></tr>
<tr><td>ihr</td><td>hattet gemacht</td><td>wart gefahren</td></tr></table>
<h3>Uso típico: con nachdem</h3>
<p><i><b>Nachdem</b> ich gegessen <b>hatte</b>, ging ich spazieren.</i> — La subordinada con <b>nachdem</b> va un tiempo «más atrás» que la principal: Plusquamperfekt + Präteritum/Perfekt, o Perfekt + Präsens.</p>
<p>En relatos: <i>Als wir ankamen, <b>war</b> der Zug schon <b>abgefahren</b>.</i></p>
<p>En la lengua oral se usa poco; en narraciones escritas es imprescindible para ordenar los hechos.</p>`,
 q:["Nachdem er gegessen ___, ging er schlafen.|hat|hatte|war|ist|1|Plusquamperfekt con haben: hatte gegessen.",
    "Als ich kam, ___ der Film schon begonnen.|hat|hatte|war|wurde|1|beginnen forma el Perfekt con haben: hatte begonnen.",
    "Wir ___ schon nach Hause gegangen.|hatten|waren|haben|wurden|1|gehen → sein: waren gegangen.",
    "Ich ___ den Schlüssel vergessen. (antes de aquello)|habe|hatte|war|bin|1|Acción anterior a otra pasada: hatte vergessen.",
    "Nachdem sie angekommen ___, rief sie an.|hatte|war|ist|hat|1|ankommen → sein: war angekommen.",
    "Formación del Plusquamperfekt:|Präsens de haben/sein + participio|Präteritum de haben/sein + participio|werden + infinitivo|würde + infinitivo|1|Auxiliar en Präteritum + participio II.",
    "Ihr ___ das Buch schon gelesen.|hattet|wart|hattest|habt|0|ihr hattet gelesen.",
    "Der Zug ___ schon abgefahren, als wir ankamen.|hatte|war|wurde|ist|1|abfahren → sein: war abgefahren.",
    "Nachdem ich die Prüfung bestanden habe, ___ ich.|feierte|feiere|hatte gefeiert|feierten|1|Perfekt en la subordinada → Präsens en la principal.",
    "¿Con qué conjunción se usa típicamente?|weil|nachdem|obwohl|damit|1|nachdem marca anterioridad."]},

{id:'ndekl',t:'La n-Deklination',sub:'Sustantivo',lvl:'B1',
 teoria:`
<h3>Masculinos que añaden -(e)n</h3>
<p>Un grupo de sustantivos <b>masculinos</b> toma <b>-(e)n en todos los casos</b> salvo en el nominativo singular.</p>
<table class="endtable"><tr><th></th><th>singular</th><th>plural</th></tr>
<tr><td>Nom</td><td>der Student</td><td>die Studenten</td></tr>
<tr><td>Akk</td><td>den Student<b>en</b></td><td>die Studenten</td></tr>
<tr><td>Dat</td><td>dem Student<b>en</b></td><td>den Studenten</td></tr>
<tr><td>Gen</td><td>des Student<b>en</b></td><td>der Studenten</td></tr></table>
<h3>¿Cuáles son?</h3>
<p>1. Masculinos en <b>-e</b> que designan personas o animales: <i>der Junge, der Kollege, der Kunde, der Neffe, der Löwe, der Affe</i>, y gentilicios en -e: <i>der Franzose, der Pole, der Türke</i>. (Los gentilicios en -er, como <i>der Kolumbianer</i>, se declinan con normalidad.)</p>
<p>2. Masculinos de origen extranjero en <b>-ent, -ant, -ist, -at, -oge, -soph</b>: <i>der Präsident, der Elefant, der Journalist, der Kandidat, der Biologe, der Philosoph</i>.</p>
<p>3. Algunos aislados: <i>der Herr</i> (den Herrn, pl. die Herren), <i>der Mensch, der Nachbar, der Bauer, der Bär, der Held</i>.</p>
<p>Excepciones con genitivo en <b>-ns</b>: <i>der Name → des Namens</i>, <i>der Gedanke, der Buchstabe, der Glaube</i>.</p>
<p><i>Kennst du <b>den</b> neuen Kolleg<b>en</b>? Ich habe <b>dem</b> Kund<b>en</b> geschrieben. Sehr geehrter <b>Herr</b> Ruiz → Ich spreche mit <b>Herrn</b> Ruiz.</i></p>`,
 q:["Ich kenne den ___ nicht. (Student)|Student|Studenten|Students|Studente|1|n-Deklination: Akkusativ -en.",
    "Wir helfen dem ___ . (Nachbar)|Nachbar|Nachbarn|Nachbars|Nachbare|1|der Nachbar es de la n-Deklination: dem Nachbarn.",
    "Ich spreche mit Herr___ Müller.|—|n|en|s|1|Herr → Herrn (singular).",
    "Das ist das Auto des ___ . (Kollege)|Kollege|Kollegen|Kolleges|Kollegs|1|Genitivo: des Kollegen.",
    "¿Qué palabra NO es de la n-Deklination?|der Junge|der Lehrer|der Präsident|der Mensch|1|der Lehrer (en -er) se declina normal.",
    "Genitivo de «der Name»:|des Namen|des Namens|des Names|der Namen|1|Excepción: des Namens.",
    "Der Tierarzt untersucht den ___ . (Elefant)|Elefant|Elefanten|Elefants|Elefante|1|Masculino en -ant: den Elefanten.",
    "Ich frage den ___ . (Kunde)|Kunde|Kunden|Kundes|Kund|1|Masculino en -e: den Kunden.",
    "Nominativo singular de la n-Deklination:|lleva -en|no lleva terminación|lleva -s|lleva -e siempre|1|Solo el nominativo singular queda sin -(e)n.",
    "Wir haben einen ___ gesehen. (Bär)|Bär|Bären|Bärs|Bäre|1|der Bär → einen Bären."]},

{id:'doppelkonn',t:'Conectores dobles y comparación con je … desto',sub:'Sintaxis',lvl:'B1',
 teoria:`
<h3>Conectores de dos partes</h3>
<table class="endtable"><tr><th>Conector</th><th>Significado</th><th>Ejemplo</th></tr>
<tr><td><b>sowohl … als auch</b></td><td>tanto … como</td><td>Sie spricht sowohl Englisch als auch Deutsch.</td></tr>
<tr><td><b>nicht nur … sondern auch</b></td><td>no solo … sino también</td><td>Er ist nicht nur Lehrer, sondern auch Musiker.</td></tr>
<tr><td><b>entweder … oder</b></td><td>o … o</td><td>Entweder wir gehen ins Kino oder wir bleiben hier.</td></tr>
<tr><td><b>weder … noch</b></td><td>ni … ni</td><td>Ich habe weder Zeit noch Geld.</td></tr>
<tr><td><b>zwar … aber</b></td><td>es cierto que … pero</td><td>Die Wohnung ist zwar klein, aber hell.</td></tr></table>
<p>Unen palabras o frases. Cuando <b>entweder</b> o <b>zwar</b> abren la oración, puede seguir el verbo (posición 1) o el sujeto: <i>Zwar <b>ist</b> die Wohnung klein, aber …</i>. <b>weder … noch</b> ya es negativo: no se añade <i>nicht</i>.</p>
<h3>je … desto / umso</h3>
<p>Comparación proporcional: «cuanto más …, más …». <b>je</b> + comparativo abre una <b>subordinada</b> (verbo al final); <b>desto</b> o <b>umso</b> + comparativo abre la principal con <b>inversión</b>.</p>
<p><i><b>Je</b> mehr ich übe, <b>desto</b> besser <b>spreche</b> ich.</i> · <i><b>Je</b> früher du kommst, <b>umso</b> mehr Zeit <b>haben</b> wir.</i></p>`,
 q:["Ich trinke ___ Kaffee ___ Tee. (ni … ni)|weder … noch|entweder … oder|sowohl … als auch|nicht … sondern|0|ni … ni: weder … noch.",
    "Sie spricht ___ Spanisch ___ Portugiesisch. (tanto … como)|weder … noch|sowohl … als auch|zwar … aber|je … desto|1|sowohl … als auch.",
    "___ du lernst jetzt, ___ du hast morgen Probleme.|Je … desto|Entweder … oder|Weder … noch|Zwar … aber|1|Alternativa excluyente: entweder … oder.",
    "Je länger ich warte, ___ nervöser werde ich.|desto|als|so|wie|0|je … desto + comparativo.",
    "Je mehr man liest, desto besser ___ man.|schreibt|schreiben|geschrieben|zu schreiben|0|Tras desto + comparativo: verbo conjugado (inversión).",
    "Je älter er ___, desto ruhiger wird er.|wird|werden|wurde er|ist er|0|La parte con je es subordinada: verbo al final.",
    "Das Hotel war ___ teuer, ___ sehr schön.|weder … noch|zwar … aber|sowohl … als|je … desto|1|Concesión: zwar … aber.",
    "Er ist nicht nur intelligent, ___ auch fleißig.|aber|sondern|oder|noch|1|nicht nur … sondern auch.",
    "Ich habe weder Hunger ___ Durst.|oder|noch|nicht|aber|1|weder … noch.",
    "Frase correcta:|Ich habe weder nicht Zeit noch Lust.|Ich habe weder Zeit noch Lust.|Ich habe nicht weder Zeit noch Lust.|Ich habe weder Zeit oder Lust.|1|weder … noch ya es negativo: sin nicht."]},

{id:'lassen',t:'El verbo lassen',sub:'Verbo',lvl:'B1',
 teoria:`
<h3>Formas</h3>
<p>Presente: <i>ich lasse, du <b>lässt</b>, er <b>lässt</b>, wir lassen, ihr lasst</i>. Präteritum: <i>ließ</i>. Perfekt: <i>hat gelassen</i>; con otro infinitivo, <b>doble infinitivo</b>: <i>Ich habe mein Auto reparieren <b>lassen</b>.</i></p>
<h3>Cuatro significados</h3>
<table class="endtable"><tr><th>Significado</th><th>Ejemplo</th></tr>
<tr><td><b>dejar, no llevarse</b></td><td>Ich lasse den Schirm zu Hause.</td></tr>
<tr><td><b>permitir</b> (+ infinitivo)</td><td>Meine Eltern lassen mich allein reisen.</td></tr>
<tr><td><b>encargar, mandar hacer</b> (+ infinitivo)</td><td>Ich lasse mir die Haare schneiden.</td></tr>
<tr><td><b>propuesta</b> (imperativo)</td><td>Lass uns gehen! · Lasst uns anfangen!</td></tr></table>
<p>Con el significado «mandar hacer», el infinitivo va al final sin <i>zu</i>, como con los modales: <i>Wir <b>lassen</b> die Wohnung <b>renovieren</b>.</i> Si la acción recae sobre uno mismo, se usa el pronombre en dativo: <i>Ich lasse <b>mir</b> die Zähne untersuchen.</i></p>
<p><b>sich lassen</b> + infinitivo expresa posibilidad, con valor pasivo: <i>Das Fenster lässt sich nicht öffnen</i> (no se puede abrir).</p>`,
 q:["Ich ___ meine Haare schneiden.|lasse|lässt|lassen|ließen|0|ich lasse.",
    "Er ___ sein Fahrrad reparieren.|lasst|lässt|lasse|lassen|1|er lässt (a → ä).",
    "Ich habe das Auto waschen ___ .|gelassen|lassen|lässt|zu lassen|1|Con otro infinitivo: doble infinitivo (lassen).",
    "Ich habe den Schlüssel im Büro ___ .|lassen|gelassen|gelasst|lässt|1|Sin infinitivo dependiente: participio gelassen.",
    "___ uns ins Kino gehen!|Lass|Lässt|Lassen|Ließ|0|Propuesta a du: Lass uns …!",
    "Die Tür ___ sich nicht öffnen.|lässt|lasst|lassen|gelassen|0|sich lassen = se puede: lässt sich.",
    "Ich lasse ___ die Zähne untersuchen.|mich|mir|ich|meine|1|Acción sobre uno mismo con complemento: pronombre dativo.",
    "Meine Eltern ___ mich nicht allein reisen. (no me permiten)|lassen|lässt|ließ|gelassen|0|Plural: lassen.",
    "Präteritum de lassen (er):|lasste|ließ|lies|lässte|1|lassen → ließ.",
    "Wir ___ die Wohnung renovieren. (mandar hacer)|lassen|lassen zu|lassen uns zu|ließen zu|0|lassen + infinitivo sin zu."]}
];
