/* =====================================================================
   FRANÇAIS · Atelier — datos del francés (A1–C2)
   Explicaciones y ejercicios propios, redactados para hispanohablantes.
   Los enlaces remiten a páginas oficiales y gratuitas (TV5MONDE, RFI,
   France Éducation international, Le Point du FLE, Larousse, Académie
   française); no se copia su contenido. Comprobados el 8 de noviembre de 2026.
   ===================================================================== */
const FR=(function(){
const PF='https://www.lepointdufle.net/p/';
const pf=(p,t)=>['Le Point du FLE · '+t,PF+p];
const TV='https://apprendre.tv5monde.com/fr/';
const tvg=['TV5MONDE · Aides de grammaire',TV+'aides/grammaire'];
const rfi=['RFI · Réviser les points de langue','https://francaisfacile.rfi.fr/fr/r%C3%A9viser/'];
const U=[
/* ------------------------------ A1 ------------------------------ */
{id:'fr-a1-1',lvl:'A1',t:'Être, avoir y pronombres sujeto',sub:'Verbo',h:3,pre:[],
 ref:[pf('present.htm','Présent'),pf('pronoms_sujets.htm','Pronoms sujets'),tvg],
 teoria:`<p>El francés exige siempre el <b>pronombre sujeto</b>, porque varias formas verbales suenan igual (<i>je parle, tu parles, il parle</i> se pronuncian [paʁl]).</p>
<table class="oe-table"><tr><th>Pronombre</th><th>être (ser / estar)</th><th>avoir (tener / haber)</th></tr>
<tr><td>je / j'</td><td>suis</td><td>ai (j'ai)</td></tr><tr><td>tu</td><td>es</td><td>as</td></tr>
<tr><td>il / elle / on</td><td>est</td><td>a</td></tr><tr><td>nous</td><td>sommes</td><td>avons</td></tr>
<tr><td>vous</td><td>êtes</td><td>avez</td></tr><tr><td>ils / elles</td><td>sont</td><td>ont</td></tr></table>
<p><b>On</b> equivale a menudo a «nosotros» en la lengua hablada (<i>on va au cinéma</i>). <b>Vous</b> es plural y también tratamiento de cortesía. Ante vocal o h muda, <i>je</i> se apostrofa: <i>j'ai, j'habite</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> La edad y las sensaciones van con <i>avoir</i>: <i>j'<b>ai</b> 20 ans, j'ai faim, j'ai froid</i>. <i>Être</i> cubre «ser» y «estar»: <i>je suis fatigué, je suis colombien</i>.</div>`,
 q:['Nous ___ étudiants.|sont|sommes|êtes|avons|1|nous sommes.',
  'J\'___ vingt-deux ans.|suis|ai|as|a|1|La edad con avoir.',
  'Elles ___ à Paris.|est|sont|ont|êtes|1|ils / elles sont.',
  'Tu ___ faim ?|es|as|a|est|1|avoir faim.',
  'Vous ___ français ?|êtes|sommes|avez|est|0|vous êtes.',
  '«Nosotros vamos» en registro oral:|On va|Nous va|On allons|Il va|0|on + 3.ª persona.',
  '___ habite à Lyon.|Je|J\'|Jai|Je\'|1|Elisión ante h muda.',
  'Il ___ froid.|est|a|as|ai|1|avoir froid.']},
{id:'fr-a1-2',lvl:'A1',t:'Presente de los verbos en -er',sub:'Verbo',h:4,pre:['fr-a1-1'],
 ref:[pf('present.htm','Présent'),tvg],
 teoria:`<p>El 90 % de los verbos franceses termina en <b>-er</b> y se conjuga sobre la raíz del infinitivo.</p>
<table class="oe-table"><tr><th>parler</th><th>terminación</th><th>pronunciación</th></tr>
<tr><td>je parl<b>e</b></td><td>-e</td><td rowspan="3">[paʁl] — las tres suenan igual</td></tr>
<tr><td>tu parl<b>es</b></td><td>-es</td></tr><tr><td>il parl<b>e</b></td><td>-e</td></tr>
<tr><td>nous parl<b>ons</b></td><td>-ons</td><td>[paʁlɔ̃]</td></tr>
<tr><td>vous parl<b>ez</b></td><td>-ez</td><td>[paʁle]</td></tr>
<tr><td>ils parl<b>ent</b></td><td>-ent</td><td>[paʁl] — la -ent no se pronuncia</td></tr></table>
<p>Cambios ortográficos: <i>manger → nous mang<b>e</b>ons</i>, <i>commencer → nous commen<b>ç</b>ons</i>, <i>acheter → j'ach<b>è</b>te</i>, <i>appeler → j'appe<b>ll</b>e</i>, <i>préférer → je préf<b>è</b>re</i>, <i>payer → je pa<b>i</b>e</i>. <i>Aller</i> es irregular: <i>je vais, tu vas, il va, nous allons, vous allez, ils vont</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> No pronuncie la <i>-ent</i> de la tercera del plural: <i>ils parlent</i> suena como <i>il parle</i>. El presente francés también sirve para la acción en curso: <i>je mange</i> = como / estoy comiendo.</div>`,
 q:['Nous ___ français.|parlez|parlons|parlent|parle|1|nous -ons.',
  'Ils ___ au football.|joue|jouent|jouons|jouez|1|ils -ent.',
  'Nous ___ à huit heures.|commencons|commençons|commenceons|commençeons|1|c → ç ante o.',
  'Nous ___ au restaurant.|mangons|mangeons|mangions|mangeont|1|g → ge ante o.',
  'J\'___ du pain.|achete|achète|acheter|achette|1|e → è.',
  'Je m\'___ Lucía.|appele|appelle|appèle|apelle|1|appeler duplica la l.',
  'Tu ___ au cinéma ce soir ?|alles|vas|va|allez|1|aller: tu vas.',
  'Which form sounds different from the others?|je parle|tu parles|ils parlent|nous parlons|3|Solo -ons se pronuncia.']},
{id:'fr-a1-3',lvl:'A1',t:'Artículos definidos, indefinidos y partitivos',sub:'Sustantivo',h:5,pre:[],
 ref:[pf('articles.htm','Articles'),tvg],
 teoria:`<table class="oe-table"><tr><th></th><th>masculino</th><th>femenino</th><th>ante vocal</th><th>plural</th></tr>
<tr><td>definido</td><td>le</td><td>la</td><td>l'</td><td>les</td></tr>
<tr><td>indefinido</td><td>un</td><td>une</td><td>—</td><td>des</td></tr>
<tr><td>partitivo</td><td>du</td><td>de la</td><td>de l'</td><td>des</td></tr></table>
<p>El <b>partitivo</b> indica una cantidad indeterminada de algo incontable: <i>je bois <b>du</b> café, je mange <b>de la</b> soupe</i>. Tras <b>negación</b> y expresiones de cantidad, todos se reducen a <b>de / d'</b>: <i>je ne bois pas <b>de</b> café; beaucoup <b>de</b> livres</i>. Con verbos de gusto se usa el definido: <i>j'aime <b>le</b> café</i>.</p>
<p>Contracciones obligatorias: <i>à + le = <b>au</b>, à + les = <b>aux</b>, de + le = <b>du</b>, de + les = <b>des</b></i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El francés no admite el sustantivo «desnudo»: «bebo café» = <i>je bois <b>du</b> café</i>; «hay libros» = <i>il y a <b>des</b> livres</i>.</div>`,
 q:['Je bois ___ eau.|de la|de l\'|du|des|1|Ante vocal: de l\'.',
  'Il mange ___ pain.|de la|du|le de|des|1|Partitivo masculino: du.',
  'Je ne mange pas ___ viande.|de la|de|la|du|1|Tras negación: de.',
  'J\'aime ___ chocolat.|du|le|de|un|1|Gustos: artículo definido.',
  'Il y a beaucoup ___ voitures.|des|de|les|du|1|Cantidad: de.',
  'Je vais ___ cinéma.|à le|au|à la|aux|1|à + le = au.',
  'Elle parle ___ professeurs.|aux|à les|au|des|0|à + les = aux.',
  'Elle a ___ frères (dos o más).|un|des|les|de|1|Indefinido plural: des.']},
{id:'fr-a1-4',lvl:'A1',t:'Género y número: sustantivos y adjetivos',sub:'Sustantivo',h:4,pre:['fr-a1-3'],
 ref:[pf('adjectifs.htm','Adjectifs'),pf('noms.htm','Noms')],
 teoria:`<p>El femenino del adjetivo suele añadir <b>-e</b>, que a menudo hace sonar la consonante final: <i>petit [pəti] → petite [pətit]</i>.</p>
<table class="oe-table"><tr><th>Masculino</th><th>Femenino</th><th>Regla</th></tr>
<tr><td>grand</td><td>grand<b>e</b></td><td>+ e</td></tr><tr><td>jeune</td><td>jeune</td><td>ya en -e</td></tr>
<tr><td>sportif</td><td>sporti<b>ve</b></td><td>-f → -ve</td></tr><tr><td>heureux</td><td>heureu<b>se</b></td><td>-x → -se</td></tr>
<tr><td>italien</td><td>italien<b>ne</b></td><td>-en → -enne</td></tr><tr><td>beau · nouveau · vieux</td><td>belle · nouvelle · vieille</td><td>irregulares (ante vocal: bel, nouvel, vieil)</td></tr></table>
<p>Plural: <b>-s</b> (muda); <i>-eau → -eaux, -al → -aux</i> (<i>journal → journaux</i>). La mayoría de adjetivos va <b>detrás</b> del sustantivo; algunos breves y frecuentes van delante (<i>beau, bon, grand, petit, jeune, vieux, nouveau</i>).</p>
<div class="xl-int"><b>Interferencia del español.</b> Muchos géneros no coinciden: <i>la mer</i> (el mar), <i>le lait</i> (la leche), <i>la dent</i> (el diente), <i>le nez</i> (la nariz), <i>la voiture</i>. Aprenda cada sustantivo con su artículo.</div>`,
 q:['Une femme ___.|sportif|sportive|sportife|sportiv|1|-f → -ve.',
  'Une fille ___.|heureux|heureuse|heureuxe|heureuze|1|-x → -se.',
  'Un ___ appartement.|beau|bel|belle|beaux|1|Ante vocal: bel.',
  'Des ___ (journal).|journals|journaux|journales|journeaux|1|-al → -aux.',
  'Elle est ___ (italien).|italiene|italienne|italiennee|italien|1|-en → -enne.',
  '«El mar»:|le mer|la mer|les mer|un mer|1|mer es femenino.',
  'Choose the natural order.|une rouge voiture|une voiture rouge|rouge une voiture|une voiture la rouge|1|Colores detrás.',
  '«La leche»:|la lait|le lait|l\'lait|les lait|1|lait es masculino.']},
{id:'fr-a1-5',lvl:'A1',t:'Negación e interrogación',sub:'Oración',h:4,pre:['fr-a1-2'],
 ref:[pf('negation.htm','Négation'),pf('interrogation.htm','Interrogation'),tvg],
 teoria:`<p>La negación tiene <b>dos piezas</b> que rodean el verbo conjugado: <b>ne … pas</b>. Ante vocal, <i>ne → n'</i>: <i>je <b>n'</b>aime <b>pas</b></i>. Otras: <i>ne … jamais</i> (nunca), <i>ne … plus</i> (ya no), <i>ne … rien</i> (nada), <i>ne … personne</i> (nadie). En la lengua oral el <i>ne</i> suele caer: <i>j'sais pas</i>.</p>
<table class="oe-table"><tr><th>Registro</th><th>Pregunta total</th><th>Pregunta parcial</th></tr>
<tr><td>familiar (entonación)</td><td>Tu viens ?</td><td>Tu habites où ?</td></tr>
<tr><td>estándar (est-ce que)</td><td><b>Est-ce que</b> tu viens ?</td><td>Où <b>est-ce que</b> tu habites ?</td></tr>
<tr><td>formal (inversión)</td><td>Viens-<b>tu</b> ?</td><td>Où habites-<b>tu</b> ?</td></tr></table>
<p>En la inversión con vocal final se intercala <b>-t-</b>: <i>Parle-<b>t</b>-il anglais ?</i> A una pregunta negativa se responde afirmativamente con <b>si</b>: — <i>Tu ne viens pas ? — <b>Si</b> !</i></p>
<div class="xl-int"><b>Interferencia del español.</b> No basta con <i>ne</i> (*<i>je ne parle anglais</i>) ni se pone <i>pas</i> delante del verbo. Con un indefinido, tras negación va <i>de</i>: <i>je n'ai pas <b>de</b> voiture</i>.</div>`,
 q:['Je ___ parle ___ allemand.|ne / pas|pas / ne|no / pas|ne / non|0|ne … pas rodea el verbo.',
  'Il ___ aime pas le thé.|ne|n\'|non|pas|1|Elisión ante vocal.',
  'Elle ne fume ___. (ya no)|pas|plus|jamais|rien|1|ne … plus.',
  '___ tu viens ce soir ?|Est-ce que|Est-ce qu\'|Qu\'est-ce|Que|0|Pregunta estándar.',
  'Parle-___-il espagnol ?|t|s|l|—|0|Se intercala -t-.',
  '— Tu n\'as pas faim ? — ___, j\'ai très faim !|Oui|Si|Non|Pas|1|Respuesta afirmativa a pregunta negativa.',
  'Je n\'ai pas ___ voiture.|une|de|la|des|1|un → de tras negación.',
  'Je ne vois ___. (a nadie)|rien|personne|jamais|plus|1|ne … personne.']},
{id:'fr-a1-6',lvl:'A1',t:'Preposiciones de lugar y con países',sub:'Oración',h:3,pre:['fr-a1-3','fr-a1-4'],
 ref:[pf('prepositions_pays.htm','Prépositions devant les pays'),pf('prepositions_de_lieu.htm','Prépositions de lieu')],
 teoria:`<table class="oe-table"><tr><th>Destino o lugar</th><th>Preposición</th><th>Ejemplo</th></tr>
<tr><td>ciudad</td><td>à</td><td>J'habite <b>à</b> Medellín.</td></tr>
<tr><td>país femenino (casi todos en -e) o con vocal</td><td>en</td><td><b>en</b> France, <b>en</b> Colombie, <b>en</b> Iran</td></tr>
<tr><td>país masculino</td><td>au</td><td><b>au</b> Mexique, <b>au</b> Pérou, <b>au</b> Canada</td></tr>
<tr><td>país plural</td><td>aux</td><td><b>aux</b> États-Unis</td></tr>
<tr><td>procedencia</td><td>de / d' · du · des</td><td>Je viens <b>de</b> Colombie / <b>du</b> Chili / <b>des</b> États-Unis</td></tr></table>
<p>Posición: <i>sur</i> (sobre), <i>sous</i> (debajo), <i>dans</i> (dentro), <i>devant / derrière</i>, <i>à côté de</i>, <i>en face de</i>, <i>entre</i>. Con persona o profesión: <i><b>chez</b> moi, chez le médecin</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> «En» no se traduce siempre por <i>en</i>: «vivo en Lima» = <i>j'habite <b>à</b> Lima</i>; «en casa» = <i><b>chez</b> moi</i>; «voy al médico» = <i>je vais <b>chez</b> le médecin</i>.</div>`,
 q:['J\'habite ___ Bogotá.|en|à|au|dans|1|Ciudad: à.',
  'Elle travaille ___ France.|à|en|au|aux|1|País femenino: en.',
  'Nous allons ___ Mexique.|en|au|à|aux|1|País masculino: au.',
  'Ils vivent ___ États-Unis.|aux|en|au|à les|0|Plural: aux.',
  'Je viens ___ Pérou.|de|du|des|en|1|Procedencia de país masculino: du.',
  'Le chat est ___ la table (debajo).|sur|sous|dans|entre|1|sous = debajo.',
  'Ce soir, je reste ___ moi.|à|chez|en|dans|1|chez moi = en casa.',
  'Je vais ___ dentiste.|au|chez le|à le|en|1|Profesión: chez.']},
/* ------------------------------ A2 ------------------------------ */
{id:'fr-a2-1',lvl:'A2',t:'Passé composé con avoir y être',sub:'Verbo',h:7,pre:['fr-a1-1','fr-a1-2'],
 ref:[pf('passecompose.htm','Passé composé'),pf('participespasses.htm','Participe passé'),tvg],
 teoria:`<p>El <b>passé composé</b> (auxiliar en presente + participio) es el tiempo básico para narrar hechos pasados terminados.</p>
<table class="oe-table"><tr><th>Participio</th><th>Ejemplo</th></tr>
<tr><td>-er → <b>-é</b></td><td>parler → parlé</td></tr><tr><td>-ir → <b>-i</b></td><td>finir → fini</td></tr>
<tr><td>-re / irregulares</td><td>vendre → vendu · faire → fait · prendre → pris · voir → vu · être → été · avoir → eu</td></tr></table>
<p>Llevan <b>être</b> unos 15 verbos de movimiento o cambio de estado (<i>aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, devenir</i>) y <b>todos los pronominales</b>. Con <i>être</i>, el participio <b>concuerda con el sujeto</b>: <i>elle est allé<b>e</b>, ils sont venu<b>s</b>, nous nous sommes levé<b>s</b></i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El passé composé cubre el pretérito perfecto y el indefinido españoles («he comido» y «comí»): <i>hier, j'<b>ai mangé</b></i>. «Fui a París» = <i>je <b>suis allé</b></i>, no <i>j'ai allé</i>.</div>`,
 q:['Hier, j\'___ un film.|ai vu|suis vu|ai voir|ai vus|0|voir → vu con avoir.',
  'Elle ___ à Madrid en 2020.|a allé|est allée|est allé|a allée|1|aller con être; concordancia femenina.',
  'Nous ___ le travail.|avons fini|sommes finis|avons finé|avons finit|0|finir → fini.',
  'Ils ___ très tard.|ont arrivé|sont arrivés|sont arrivé|ont arrivés|1|arriver con être; plural.',
  'Je me ___ à sept heures.|suis levé|ai levé|suis lever|ai levée|0|Pronominal con être.',
  'Tu ___ ton café ?|as pris|es pris|as prendu|as prit|0|prendre → pris.',
  'Elle ___ malade.|a été|est été|a étée|est étée|0|être → été con avoir.',
  'Mes grands-parents ___ en 1950.|ont né|sont nés|sont né|ont nés|1|naître con être: nés.']},
{id:'fr-a2-2',lvl:'A2',t:'Imparfait',sub:'Verbo',h:5,pre:['fr-a2-1'],
 ref:[pf('imparfait.htm','Imparfait'),tvg],
 teoria:`<p>El <b>imparfait</b> describe el pasado en su desarrollo: hábitos, descripciones, circunstancias y estados.</p>
<p><b>Formación:</b> raíz de <i>nous</i> en presente sin <i>-ons</i> + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. <i>nous finissons → je finiss<b>ais</b></i>; <i>nous prenons → je pren<b>ais</b></i>. Única excepción: <b>être → j'étais</b>.</p>
<table class="oe-table"><tr><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>hábito pasado</td><td>Quand j'étais petit, je <b>jouais</b> au parc.</td></tr>
<tr><td>descripción</td><td>Il <b>faisait</b> beau, la mer <b>était</b> calme.</td></tr>
<tr><td>acción en curso interrumpida</td><td>Je <b>dormais</b> quand le téléphone a sonné.</td></tr>
<tr><td>propuesta con si</td><td><b>Si</b> on <b>allait</b> au cinéma ?</td></tr></table>
<p>Ortografía: <i>manger → je mang<b>e</b>ais</i>, <i>commencer → je commen<b>ç</b>ais</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> Coincide bastante con el imperfecto español, lo que facilita mucho su uso. Las terminaciones <i>-ais, -ait, -aient</i> suenan igual [ɛ].</div>`,
 q:['Quand j\'étais enfant, je ___ beaucoup.|lisais|lis|ai lu|lirais|0|Hábito pasado: imparfait.',
  'Nous ___ à Lyon à cette époque.|habitons|habitions|habitaient|habitiez|1|nous -ions.',
  'Il ___ beau hier.|faisait|faisais|a fait beau hier faisait|fait|0|Descripción: faisait.',
  'J\'___ fatigué.|étais|été|avais|était|0|être → étais.',
  'Ils ___ quand je suis arrivé.|mangeaient|mangaient|mangeait|ont mangé|0|Acción en curso: mangeaient.',
  'Raíz del imparfait de finir:|fin-|finiss-|fini-|finis-|1|nous finissons → finiss-.',
  'Tu ___ ce film ?|commencais|commençais|commenceais|commençait|1|ç ante a.',
  'Si on ___ au restaurant ce soir ?|va|allait|irait|ira|1|Propuesta: si + imparfait.']},
{id:'fr-a2-3',lvl:'A2',t:'Futur proche y passé récent',sub:'Verbo',h:3,pre:['fr-a1-2'],
 ref:[pf('periphrases-verbales.htm','Périphrases verbales'),pf('futur.htm','Futur')],
 teoria:`<table class="oe-table"><tr><th>Perífrasis</th><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>futur proche</td><td>aller (presente) + infinitivo</td><td>Je <b>vais partir</b> demain.</td></tr>
<tr><td>passé récent</td><td>venir de (presente) + infinitivo</td><td>Il <b>vient d'arriver</b>.</td></tr>
<tr><td>présent progressif</td><td>être en train de + infinitivo</td><td>Nous <b>sommes en train de</b> manger.</td></tr>
<tr><td>a punto de</td><td>être sur le point de + infinitivo</td><td>Le film <b>est sur le point de</b> commencer.</td></tr></table>
<p>La negación rodea el verbo conjugado: <i>je <b>ne</b> vais <b>pas</b> sortir</i>. Los pronombres van delante del infinitivo: <i>je vais <b>le</b> faire</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> «Acabo de llegar» = <i>je <b>viens d'</b>arriver</i> (no <i>j'acabe de</i>). El futur proche no lleva preposición: <i>je vais partir</i>, no <i>je vais à partir</i>.</div>`,
 q:['Demain, nous ___ visiter Paris.|allons|venons de|sommes|allons à|0|futur proche: aller + inf.',
  'Le train ___ partir. (acaba de)|va|vient de|est en train|vient|1|passé récent.',
  'Je ne ___ pas ___ ce soir.|vais / sortir|va / sortir|vais / sorti|viens / sortir|0|ne … pas rodea aller.',
  'Elle ___ en train de travailler.|a|est|va|vient|1|être en train de.',
  'Je vais ___ appeler demain.|le|lui le|à lui|—|1|Pronombre ante el infinitivo: le / lui.',
  '«Acabamos de comer»:|Nous venons de manger.|Nous allons manger.|Nous acabons de manger.|Nous venons manger.|0|venir de.',
  'Ils ___ arriver dans cinq minutes.|vont|viennent de|sont|ont|0|futuro inmediato.',
  'Le concert est sur le point ___ commencer.|à|de|pour|—|1|être sur le point de.']},
{id:'fr-a2-4',lvl:'A2',t:'Pronombres complemento: COD y COI',sub:'Pronombre',h:6,pre:['fr-a1-5'],
 ref:[pf('pronomscomplements.htm','Pronoms compléments COD / COI'),tvg],
 teoria:`<table class="oe-table"><tr><th>Persona</th><th>COD (directo)</th><th>COI (indirecto, verbo + à)</th></tr>
<tr><td>1.ª / 2.ª sg.</td><td>me, te</td><td>me, te</td></tr>
<tr><td>3.ª sg.</td><td><b>le, la, l'</b></td><td><b>lui</b></td></tr>
<tr><td>1.ª / 2.ª pl.</td><td>nous, vous</td><td>nous, vous</td></tr>
<tr><td>3.ª pl.</td><td><b>les</b></td><td><b>leur</b></td></tr></table>
<p>Van <b>delante del verbo conjugado</b> (o del infinitivo si lo hay): <i>Je <b>la</b> vois. Je vais <b>lui</b> téléphoner.</i> En el imperativo afirmativo van detrás con guion: <i>Donne-<b>moi</b> ça ! Regarde-<b>le</b> !</i></p>
<p>Orden con dos pronombres: <i>me / te / nous / vous</i> › <i>le / la / les</i> › <i>lui / leur</i>: <i>Il <b>me le</b> donne. Je <b>le lui</b> donne.</i></p>
<div class="xl-int"><b>Interferencia del español.</b> Atención a los verbos con régimen distinto: <i>téléphoner <b>à</b> qqn</i> (COI: <i>je <b>lui</b> téléphone</i>), <i>aider qqn</i> (COD: <i>je <b>l'</b>aide</i>), <i>écouter / regarder / attendre qqn</i> (COD).</div>`,
 q:['Tu vois Marie ? — Oui, je ___ vois.|lui|la|le|leur|1|COD femenino: la.',
  'Je téléphone à mes parents. → Je ___ téléphone.|les|leur|lui|leurs|1|COI plural: leur.',
  'Il parle à Paul. → Il ___ parle.|le|lui|l\'|leur|1|COI singular: lui.',
  'J\'aide mon frère. → Je ___ aide.|lui|l\'|le|leur|1|aider + COD; elisión: l\'.',
  'Donne ___ le livre !|me|moi|à moi|m\'|1|Imperativo afirmativo: moi.',
  'Je donne le livre à Ana. → Je ___ donne.|lui le|le lui|la lui|lui la|1|Orden: le lui.',
  'Je vais ___ écrire. (a ella)|la|lui|leur|elle|1|écrire à: COI.',
  'Tu attends le bus ? — Oui, je ___ attends.|lui|l\'|le|y|1|attendre + COD.']},
{id:'fr-a2-5',lvl:'A2',t:'Comparativo y superlativo',sub:'Adjetivo',h:3,pre:['fr-a1-4'],
 ref:[pf('comparaison.htm','Comparaison'),tvg],
 teoria:`<table class="oe-table"><tr><th></th><th>adjetivo / adverbio</th><th>sustantivo</th><th>verbo</th></tr>
<tr><td>superioridad</td><td><b>plus</b> grand <b>que</b></td><td><b>plus de</b> livres <b>que</b></td><td>il travaille <b>plus que</b></td></tr>
<tr><td>igualdad</td><td><b>aussi</b> grand <b>que</b></td><td><b>autant de</b> livres <b>que</b></td><td>il travaille <b>autant que</b></td></tr>
<tr><td>inferioridad</td><td><b>moins</b> grand <b>que</b></td><td><b>moins de</b> livres <b>que</b></td><td>il travaille <b>moins que</b></td></tr></table>
<p>Irregulares: <i>bon → <b>meilleur</b></i> (adjetivo), <i>bien → <b>mieux</b></i> (adverbio), <i>mauvais → pire / plus mauvais</i>. Superlativo: <i><b>le plus</b> / <b>le moins</b></i> + adjetivo, concordando: <i>la ville <b>la plus</b> belle <b>du</b> monde</i> (de + le = du).</p>
<div class="xl-int"><b>Interferencia del español.</b> «Más bueno» no existe: <i>meilleur</i>. «Mejor» como adverbio es <i>mieux</i>: <i>elle chante <b>mieux</b></i>. Tras superlativo, «de» se contrae: <i>le plus grand <b>du</b> pays</i>.</div>`,
 q:['Paris est ___ grande ___ Lyon.|plus / que|plus / de|aussi / comme|plus / comme|0|plus … que.',
  'Ce gâteau est ___ que l\'autre.|plus bon|meilleur|mieux|plus meilleur|1|bon → meilleur.',
  'Elle chante ___ que moi.|meilleur|mieux|plus bien|plus meilleur|1|bien → mieux.',
  'J\'ai ___ amis que toi.|autant d\'|aussi d\'|autant|aussi|0|Igualdad con sustantivo: autant de.',
  'C\'est la plus belle ville ___ monde.|de|du|de le|en|1|de + le = du.',
  'Il est ___ grand que son frère (igualdad).|autant|aussi|même|tant|1|aussi + adjetivo.',
  'C\'est ___ restaurant de la ville.|le meilleur|le plus bon|le mieux|meilleur|0|Superlativo de bon.',
  'Il travaille ___ que moi (menos).|moins|moins de|aussi|autant|0|Verbo: moins que.']},
{id:'fr-a2-6',lvl:'A2',t:'Verbos pronominales',sub:'Verbo',h:4,pre:['fr-a1-2','fr-a2-1'],
 ref:[pf('verbes.htm','Conjugaison'),tvg],
 teoria:`<p>Los <b>verbos pronominales</b> llevan un pronombre que concuerda con el sujeto: <i>je <b>me</b> lève, tu <b>te</b> lèves, il <b>se</b> lève, nous <b>nous</b> levons, vous <b>vous</b> levez, ils <b>se</b> lèvent</i>.</p>
<table class="oe-table"><tr><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>reflexivo</td><td>Je <b>me</b> lave.</td></tr><tr><td>recíproco</td><td>Ils <b>s'</b>aiment.</td></tr>
<tr><td>propiamente pronominal</td><td>Je <b>me</b> souviens de toi. · Il <b>s'</b>en va.</td></tr>
<tr><td>sentido pasivo</td><td>Ça <b>se</b> dit souvent.</td></tr></table>
<p>En tiempos compuestos usan <b>être</b>: <i>elle <b>s'est</b> levée</i>. Negación: <i>je <b>ne me</b> lève <b>pas</b></i>. Imperativo: <i>Lève-<b>toi</b> ! / Ne te lève pas !</i></p>
<div class="xl-int"><b>Interferencia del español.</b> No siempre coinciden: <i>se promener</i> (pasear), <i>se souvenir de</i> (acordarse de), pero <i>se marier <b>avec</b></i> (casarse con) y <i>tomber malade</i> (enfermarse, sin pronombre).</div>`,
 q:['Je ___ lève à six heures.|se|me|te|nous|1|je → me.',
  'Nous ___ promenons au parc.|se|nous|vous|nos|1|nous → nous.',
  'Elle ___ couchée tard.|a|s\'est|est|s\'a|1|Pronominal con être.',
  '___-toi !|Lève|Lèves|Levez|Te lève|0|Imperativo tú: lève-toi.',
  'Je ne ___ souviens pas.|me|se|m\'en|te|0|ne me … pas.',
  'Ils ___ sont mariés en juin.|se|s\'|leur|les|0|ils se sont.',
  'Vous ___ appelez comment ?|se|vous|nous|te|1|vous → vous.',
  'Choose the correct sentence.|Elle s\'est lavée les mains.|Elle s\'est lavé les mains.|Elle a lavé ses mains se.|Elle est lavée les mains.|1|COD tras el verbo (les mains): sin concordancia.']},
/* ------------------------------ B1 ------------------------------ */
{id:'fr-b1-1',lvl:'B1',t:'Passé composé frente a imparfait',sub:'Verbo',h:7,pre:['fr-a2-1','fr-a2-2'],
 ref:[pf('passecomposeimparfait.htm','Passé composé / Imparfait'),tvg],
 teoria:`<p>En un relato, el <b>passé composé</b> hace avanzar la acción (hechos delimitados, sucesivos), mientras el <b>imparfait</b> pinta el decorado (circunstancias, estados, hábitos, acciones en curso).</p>
<table class="oe-table"><tr><th>Imparfait (fondo)</th><th>Passé composé (primer plano)</th></tr>
<tr><td>Il <b>pleuvait</b>, les rues <b>étaient</b> vides…</td><td>… quand un homme <b>est entré</b> dans le café.</td></tr>
<tr><td>Chaque été, nous <b>allions</b> à la mer.</td><td>Cet été-là, nous <b>sommes allés</b> en Corse.</td></tr>
<tr><td>Je <b>lisais</b> quand tu <b>as appelé</b>.</td><td>Acción en curso interrumpida.</td></tr></table>
<p>Pistas: <i>soudain, tout à coup, un jour, ce jour-là, pendant deux heures</i> → passé composé; <i>autrefois, d'habitude, toujours, chaque…, à cette époque</i> → imparfait. <i>Pendant</i> + duración cerrada lleva passé composé: <i>j'ai habité à Lyon pendant cinq ans</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> La oposición es casi la de indefinido / imperfecto, y su intuición de hispanohablante funciona muy bien. Cuidado: «Viví cinco años en Lyon» = <i>j'<b>ai habité</b></i>, no <i>j'habitais</i>.</div>`,
 q:['Je ___ la télé quand le téléphone ___.|regardais / a sonné|ai regardé / sonnait|regardais / sonnait|ai regardé / a sonné|0|Fondo + acción puntual.',
  'Quand j\'étais petit, je ___ à la plage chaque été.|suis allé|allais|vais|irai|1|Hábito: imparfait.',
  'Soudain, quelqu\'un ___ à la porte.|frappait|a frappé|frappe|frapperait|1|soudain: passé composé.',
  'J\'___ à Lyon pendant cinq ans.|habitais|ai habité|habite|habiterais|1|Duración cerrada: passé composé.',
  'Il ___ beau et les enfants jouaient.|a fait|faisait|fait|ferait|1|Descripción: imparfait.',
  'Hier, nous ___ un film génial.|voyions|avons vu|voyons|verrions|1|Hecho delimitado.',
  'Elle ___ fatiguée, alors elle est rentrée.|a été|était|est|serait|1|Estado: imparfait.',
  'D\'habitude, il ___ le bus.|a pris|prenait|prend pris|prendrait|1|d\'habitude: imparfait.']},
{id:'fr-b1-2',lvl:'B1',t:'Futur simple',sub:'Verbo',h:4,pre:['fr-a2-3'],
 ref:[pf('futur.htm','Futur simple'),tvg],
 teoria:`<p><b>Formación:</b> infinitivo (sin la -e final en -re) + <b>-ai, -as, -a, -ons, -ez, -ont</b> (las terminaciones de <i>avoir</i>): <i>parler<b>ai</b>, finir<b>as</b>, prendr<b>a</b></i>.</p>
<table class="oe-table"><tr><th>Raíces irregulares</th></tr>
<tr><td>être → <b>ser-</b> · avoir → <b>aur-</b> · aller → <b>ir-</b> · faire → <b>fer-</b> · venir → <b>viendr-</b> · voir → <b>verr-</b> · pouvoir → <b>pourr-</b> · vouloir → <b>voudr-</b> · savoir → <b>saur-</b> · devoir → <b>devr-</b> · falloir → <b>faudr-</b> · envoyer → <b>enverr-</b></td></tr></table>
<p>Usos: previsiones, promesas, planes más lejanos o formales. Tras <b>quand, lorsque, dès que, aussitôt que</b> con valor futuro, el francés usa futuro (no presente): <i>Quand tu <b>arriveras</b>, appelle-moi.</i> Tras <b>si</b> condicional, presente: <i>Si tu viens, on <b>ira</b> au cinéma.</i></p>
<div class="xl-int"><b>Interferencia del español.</b> A diferencia del español («cuando llegues»), el francés exige futuro tras <i>quand</i>: <i>quand tu <b>arriveras</b></i>. Pero nunca futuro tras <i>si</i>.</div>`,
 q:['Demain, il ___ beau.|fera|faira|fairera|ferait|0|faire → fer-.',
  'Nous ___ en vacances en juillet.|serons|serions|sommes|aurons|0|être → ser-.',
  'Quand tu ___ , téléphone-moi.|arrives|arriveras|arriverais|arrivais|1|quand + futuro.',
  'Si tu viens, nous ___ au cinéma.|irons|allons irons|irions|irez|0|si + presente, futuro.',
  'Je ___ te voir la semaine prochaine.|viendrai|venirai|viendrais|venrai|0|venir → viendr-.',
  'Ils ___ la réponse demain.|sauront|savront|saveront|sauraient|0|savoir → saur-.',
  'Tu ___ partir tôt.|devras|devoiras|devrais|deveras|0|devoir → devr-.',
  'Il ___ que tu signes.|faudra|fallera|faudrait|faut|0|falloir → faudr-.']},
{id:'fr-b1-3',lvl:'B1',t:'Conditionnel présent e hipótesis con si',sub:'Verbo',h:5,pre:['fr-b1-2','fr-a2-2'],
 ref:[pf('conditionnel.htm','Conditionnel'),tvg],
 teoria:`<p><b>Formación:</b> raíz del futuro + terminaciones del imparfait (<b>-ais, -ais, -ait, -ions, -iez, -aient</b>): <i>je parler<b>ais</b>, je ser<b>ais</b>, j'aur<b>ais</b>, je pourr<b>ais</b></i>.</p>
<table class="oe-table"><tr><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>cortesía</td><td>Je <b>voudrais</b> un café. · <b>Pourriez</b>-vous m'aider ?</td></tr>
<tr><td>consejo</td><td>Tu <b>devrais</b> dormir.</td></tr>
<tr><td>deseo</td><td>J'<b>aimerais</b> voyager.</td></tr>
<tr><td>hipótesis</td><td><b>Si</b> j'<b>avais</b> le temps, je <b>lirais</b> plus.</td></tr>
<tr><td>información no confirmada</td><td>Le président <b>serait</b> malade.</td></tr></table>
<p>Hipótesis: <b>si + imparfait → conditionnel</b>. Jamás condicional tras <i>si</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> «Si tuviera dinero» = <i>si j'<b>avais</b></i> (imparfait), no subjuntivo. El condicional periodístico (<i>serait</i>) equivale a «estaría, según fuentes».</div>`,
 q:['Je ___ un thé, s\'il vous plaît.|voudrais|voulais|voudrai|veux bien voudrais|0|Cortesía: voudrais.',
  'Si j\'étais riche, j\'___ une maison.|achèterai|achèterais|achetais|achète|1|si + imparfait → conditionnel.',
  'Si tu ___ plus, tu réussirais.|travaillerais|travaillais|travailles|travaillas|1|Tras si: imparfait.',
  'Tu ___ voir un médecin.|devrais|devais|devras|doit|0|Consejo: devrais.',
  '___-vous fermer la porte ?|Pouvez|Pourriez|Pourrez|Pouviez|1|Cortesía: pourriez.',
  'Nous ___ venir, mais nous sommes occupés.|aimerions|aimions|aimerons|aimons|0|Deseo: conditionnel.',
  'Selon la presse, le ministre ___ démissionner.|va|devrait|doit|dut|1|Información no confirmada.',
  'S\'il faisait beau, on ___ à la plage.|ira|irait|allait|va|1|Resultado: conditionnel.']},
{id:'fr-b1-4',lvl:'B1',t:'Pronombres y y en',sub:'Pronombre',h:5,pre:['fr-a2-4'],
 ref:[pf('pronomscomplements.htm','Pronoms compléments'),rfi],
 teoria:`<table class="oe-table"><tr><th>Pronombre</th><th>Sustituye a</th><th>Ejemplo</th></tr>
<tr><td><b>y</b></td><td>lugar (à, en, dans, chez…)</td><td>Tu vas à Paris ? — Oui, j'<b>y</b> vais.</td></tr>
<tr><td><b>y</b></td><td>à + cosa</td><td>Tu penses à ton examen ? — J'<b>y</b> pense.</td></tr>
<tr><td><b>en</b></td><td>de + lugar (procedencia)</td><td>Tu viens de la poste ? — J'<b>en</b> viens.</td></tr>
<tr><td><b>en</b></td><td>de + cosa</td><td>Tu parles de ton voyage ? — J'<b>en</b> parle.</td></tr>
<tr><td><b>en</b></td><td>partitivo / cantidad</td><td>Tu as des frères ? — J'<b>en</b> ai deux.</td></tr></table>
<p>Para <b>personas</b> se usan pronombres tónicos tras preposición: <i>je pense <b>à elle</b>, je parle <b>de lui</b></i>. Expresiones fijas: <i>il y a, on y va, je m'en vais, j'en ai marre, ça y est</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El español no tiene equivalentes y suele omitirlos: «¿Tienes hermanos? — Tengo dos» = <i>J'<b>en</b> ai deux</i>. Sin <i>en</i> la frase francesa es incorrecta.</div>`,
 q:['Tu vas au bureau ? — Oui, j\'___ vais.|en|y|le|lui|1|Lugar: y.',
  'Tu as des enfants ? — Oui, j\'___ ai trois.|y|en|les|leur|1|Cantidad: en.',
  'Tu penses à tes vacances ? — Oui, j\'___ pense.|en|y|les|lui|1|à + cosa: y.',
  'Il parle de son travail ? — Oui, il ___ parle.|y|en|le|lui|1|de + cosa: en.',
  'Tu penses à ta mère ? — Oui, je pense ___.|y|à elle|lui|en|1|Persona: pronombre tónico.',
  'Tu reviens de Lyon ? — Oui, j\'___ reviens.|y|en|le|là|1|Procedencia: en.',
  'Allez, on ___ va !|en|y|le|lui|1|Expresión fija: on y va.',
  'Tu veux du café ? — Non merci, je n\'___ veux pas.|y|en|le|lui|1|Partitivo: en.']},
{id:'fr-b1-5',lvl:'B1',t:'Relativos: qui, que, où, dont',sub:'Oración compuesta',h:5,pre:['fr-a2-4'],
 ref:[pf('pronomsrelatifs.htm','Pronoms relatifs'),tvg],
 teoria:`<table class="oe-table"><tr><th>Relativo</th><th>Función</th><th>Ejemplo</th></tr>
<tr><td><b>qui</b></td><td>sujeto (personas y cosas)</td><td>Le livre <b>qui</b> est sur la table…</td></tr>
<tr><td><b>que / qu'</b></td><td>complemento directo</td><td>Le livre <b>que</b> je lis…</td></tr>
<tr><td><b>où</b></td><td>lugar y tiempo</td><td>La ville <b>où</b> je suis né… · Le jour <b>où</b> on s'est rencontrés…</td></tr>
<tr><td><b>dont</b></td><td>complemento con de</td><td>Le film <b>dont</b> je parle… · L'homme <b>dont</b> la fille…</td></tr></table>
<p>Truco: si sigue un verbo conjugado sin sujeto, <b>qui</b>; si sigue un sujeto, <b>que</b>. <i>Qui</i> nunca se apostrofa; <i>que</i> sí (<i>qu'il</i>). Con <i>que</i> + tiempo compuesto con avoir, el participio concuerda: <i>la lettre <b>que</b> j'ai écrit<b>e</b></i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> «El día que nos conocimos» = <i>le jour <b>où</b></i>, no <i>que</i>. <i>Dont</i> resume «del que, de quien, cuyo»: <i>le professeur <b>dont</b> je t'ai parlé</i>.</div>`,
 q:['La femme ___ parle est ma tante.|que|qui|dont|où|1|Sujeto: qui.',
  'Le film ___ j\'ai vu était génial.|qui|que|dont|où|1|COD: que.',
  'C\'est la ville ___ j\'habite.|que|qui|où|dont|2|Lugar: où.',
  'Voici le livre ___ je t\'ai parlé.|que|qui|dont|où|2|parler de: dont.',
  'Le jour ___ il est parti, il pleuvait.|que|où|dont|qui|1|Tiempo: où.',
  'L\'homme ___ la voiture est rouge…|qui|que|dont|où|2|Posesión: dont.',
  'La lettre que j\'ai ___ est partie.|écrit|écrite|écrits|écrire|1|Concordancia con que antepuesto.',
  'C\'est quelque chose ___ j\'ai besoin.|que|dont|qui|où|1|avoir besoin de: dont.']},
{id:'fr-b1-6',lvl:'B1',t:'Subjonctif présent: necesidad y voluntad',sub:'Verbo',h:6,pre:['fr-a1-2','fr-b1-5'],
 ref:[pf('subjonctif.htm','Subjonctif'),tvg],
 teoria:`<p><b>Formación:</b> raíz de <i>ils</i> en presente sin <i>-ent</i> + <b>-e, -es, -e, -ions, -iez, -ent</b>: <i>ils finissent → que je finiss<b>e</b></i>. <i>Nous</i> y <i>vous</i> toman la raíz del imparfait: <i>que nous pren<b>ions</b></i>.</p>
<table class="oe-table"><tr><th>Irregulares</th><th>que je…</th></tr>
<tr><td>être · avoir</td><td>sois · aie</td></tr><tr><td>aller · faire</td><td>aille · fasse</td></tr>
<tr><td>pouvoir · savoir · vouloir</td><td>puisse · sache · veuille</td></tr></table>
<p>Se usa tras <b>il faut que</b>, verbos de voluntad (<i>vouloir, souhaiter, exiger, préférer que</i>) y algunas conjunciones (<i>pour que, avant que, bien que, à condition que</i>). Si el sujeto es el mismo, infinitivo: <i>je veux <b>partir</b></i>, pero <i>je veux <b>que tu partes</b></i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El reparto es parecido al español, lo que es una ventaja. Pero <i>espérer que</i> lleva indicativo: <i>j'espère qu'il <b>viendra</b></i> («espero que venga»). Tras <i>après que</i>, indicativo en norma culta.</div>`,
 q:['Il faut que tu ___ tes devoirs.|fais|fasses|feras|faisais|1|il faut que + subjonctif.',
  'Je veux que vous ___ à l\'heure.|êtes|soyez|serez|étiez|1|être → soyez.',
  'Je veux ___ ce soir. (mismo sujeto)|que je sorte|sortir|que sortir|sorte|1|Mismo sujeto: infinitivo.',
  'J\'espère qu\'il ___ demain.|vienne|viendra|venir|vient demain vienne|1|espérer + indicativo.',
  'Il faut que nous ___ tôt.|partons|partions|partirons|partirions|1|nous -ions.',
  'Bien qu\'il ___ malade, il travaille.|est|soit|sera|était|1|bien que + subjonctif.',
  'Je souhaite que tu ___ heureux.|es|sois|seras|serais|1|souhaiter que + subjonctif.',
  'Il faut qu\'elle ___ la vérité.|sait|sache|saura|savoir|1|savoir → sache.']},
/* ------------------------------ B2 ------------------------------ */
{id:'fr-b2-1',lvl:'B2',t:'Plus-que-parfait y concordancia de tiempos',sub:'Verbo',h:5,pre:['fr-b1-1'],
 ref:[pf('plus-que-parfait.htm','Plus-que-parfait'),tvg],
 teoria:`<p>El <b>plus-que-parfait</b> (auxiliar en imparfait + participio) expresa anterioridad respecto de otro hecho pasado: <i>Quand je suis arrivé, le film <b>avait</b> déjà <b>commencé</b>.</i></p>
<table class="oe-table"><tr><th>Relación con un pasado</th><th>Tiempo</th><th>Ejemplo</th></tr>
<tr><td>anterioridad</td><td>plus-que-parfait</td><td>Il a dit qu'il <b>avait fini</b>.</td></tr>
<tr><td>simultaneidad</td><td>imparfait</td><td>Il a dit qu'il <b>était</b> fatigué.</td></tr>
<tr><td>posterioridad</td><td>conditionnel présent</td><td>Il a dit qu'il <b>viendrait</b>.</td></tr>
<tr><td>anterioridad a un futuro del pasado</td><td>conditionnel passé</td><td>Il a dit qu'il <b>aurait fini</b> avant midi.</td></tr></table>
<p>Usos adicionales: lamento con <i>si</i> (<i>Si seulement j'<b>avais su</b> !</i>) y la hipótesis irreal del pasado (unidad C1).</p>
<div class="xl-int"><b>Interferencia del español.</b> Equivale al pluscuamperfecto («había comenzado»). La concordancia de tiempos es más estricta que en el español oral: <i>il a dit qu'il <b>viendrait</b></i>, no <i>qu'il viendra</i>, en registro cuidado.</div>`,
 q:['Quand nous sommes arrivés, ils ___ déjà ___.|ont / mangé|avaient / mangé|avaient / manger|étaient / mangé|1|Anterioridad: plus-que-parfait.',
  'Elle m\'a dit qu\'elle ___ fatiguée.|est|était|sera|serait été|1|Simultaneidad: imparfait.',
  'Il a promis qu\'il ___.|viendra|viendrait|vient|venait|1|Posterioridad: conditionnel.',
  'Si seulement j\'___ !|avais su|ai su|aurais su|savais su|0|Lamento: plus-que-parfait.',
  'Il a dit qu\'il ___ le livre la veille.|a lu|avait lu|lira|lisait lu|1|Anterioridad.',
  'Elle ___ partie quand je l\'ai appelée.|avait|était|a|est|1|partir con être: était partie.',
  'Il pensait qu\'il ___ fini avant six heures.|aura|aurait|avait|a|1|Futuro anterior del pasado.',
  'Nous ___ jamais vu la mer avant ce voyage.|n\'avions|ne sommes|n\'avons|n\'aurions|0|Experiencia anterior.']},
{id:'fr-b2-2',lvl:'B2',t:'Discours rapporté',sub:'Discurso',h:5,pre:['fr-b2-1'],
 ref:[pf('discoursrapporte.htm','Discours indirect'),tvg],
 teoria:`<table class="oe-table"><tr><th>Directo</th><th>Indirecto</th></tr>
<tr><td>« Tu viens ? »</td><td>Il me demande <b>si</b> je viens.</td></tr>
<tr><td>« Qu'est-ce que tu fais ? »</td><td>Il me demande <b>ce que</b> je fais.</td></tr>
<tr><td>« Qu'est-ce qui se passe ? »</td><td>Il demande <b>ce qui</b> se passe.</td></tr>
<tr><td>« Où vas-tu ? »</td><td>Il me demande <b>où</b> je vais.</td></tr>
<tr><td>« Partez ! »</td><td>Il nous dit <b>de partir</b>.</td></tr></table>
<p>Si el verbo introductor está en pasado, se aplica la concordancia de tiempos: presente → imparfait, passé composé → plus-que-parfait, futuro → conditionnel. Deícticos: <i>aujourd'hui → ce jour-là, demain → le lendemain, hier → la veille, ici → là</i>. Verbos introductores precisos: <i>affirmer, expliquer, avouer, prétendre, se demander, ordonner, conseiller de</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> «Me preguntó qué hacía» = <i>il m'a demandé <b>ce que</b> je faisais</i>, nunca <i>qu'est-ce que</i> ni <i>que</i> solo. El imperativo pasa a <i>de</i> + infinitivo.</div>`,
 q:['« Tu as faim ? » → Il me demande ___ j\'ai faim.|que|si|ce que|qu\'est-ce que|1|Pregunta total: si.',
  '« Qu\'est-ce que tu veux ? » → Elle demande ___ je veux.|qu\'est-ce que|ce que|ce qui|que|1|qu\'est-ce que → ce que.',
  '« Qu\'est-ce qui se passe ? » → Il demande ___ se passe.|ce que|ce qui|qu\'est-ce qui|qui|1|qu\'est-ce qui → ce qui.',
  '« Fermez la porte ! » → Il nous dit ___ la porte.|fermer|de fermer|que fermez|à fermer|1|Imperativo → de + inf.',
  '« Je suis malade. » → Il a dit qu\'il ___ malade.|est|était|serait|a été|1|Presente → imparfait.',
  '« J\'ai fini. » → Elle a dit qu\'elle ___ fini.|a|avait|aurait|est|1|PC → plus-que-parfait.',
  '« Je partirai demain. » → Il a dit qu\'il partirait ___.|demain|le lendemain|la veille|hier|1|demain → le lendemain.',
  '« Où habitez-vous ? » → Il m\'a demandé où ___.|j\'habite|j\'habitais|habitais-je|est-ce que j\'habitais|1|Sin inversión; backshift.']},
{id:'fr-b2-3',lvl:'B2',t:'Subjonctif o indicatif: opinión, sentimiento, conjunciones',sub:'Verbo',h:6,pre:['fr-b1-6'],
 ref:[pf('subjonctif.htm','Subjonctif'),rfi],
 teoria:`<table class="oe-table"><tr><th>Contexto</th><th>Indicativo</th><th>Subjuntivo</th></tr>
<tr><td>opinión</td><td>je pense / crois que il <b>vient</b></td><td>je ne pense pas qu'il <b>vienne</b> · pensez-vous qu'il <b>vienne</b> ?</td></tr>
<tr><td>certeza / duda</td><td>je suis sûr qu'il <b>a</b> raison</td><td>je doute qu'il <b>ait</b> raison</td></tr>
<tr><td>sentimiento</td><td>—</td><td>je suis content qu'elle <b>soit</b> là · j'ai peur qu'il (ne) <b>pleuve</b></td></tr>
<tr><td>conjunciones</td><td>parce que, pendant que, après que, puisque</td><td>pour que, afin que, avant que, bien que, sans que, jusqu'à ce que, à moins que</td></tr></table>
<p>El <b>subjonctif passé</b> (<i>que j'aie fini, qu'elle soit partie</i>) marca anterioridad: <i>Je suis contente que tu <b>aies réussi</b>.</i> Tras superlativo o <i>le seul, le premier</i> se prefiere el subjuntivo: <i>c'est le meilleur film que j'<b>aie</b> vu</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> «Creo que viene» = indicativo en ambas lenguas; «no creo que venga» = subjuntivo en ambas. Pero <i>après que</i> lleva indicativo y <i>espérer que</i> también, a diferencia del español.</div>`,
 q:['Je pense qu\'il ___ raison.|ait|a|aurait eu|avoir|1|Opinión afirmativa: indicativo.',
  'Je ne crois pas qu\'elle ___ venir.|peut|puisse|pourra|pouvait|1|Opinión negada: subjuntivo.',
  'Je suis heureux que tu ___ là.|es|sois|seras|étais|1|Sentimiento: subjuntivo.',
  'Je travaille pour que mes enfants ___ étudier.|peuvent|puissent|pourront|pouvaient|1|pour que + subjuntivo.',
  'Il est parti parce qu\'il ___ fatigué.|soit|était|fût|serait|1|parce que + indicativo.',
  'Je suis content que vous ___ réussi.|avez|ayez|aviez|aurez|1|Subjonctif passé.',
  'C\'est le plus beau pays que je ___ visité.|j\'ai|aie|avais|aurai|1|Tras superlativo: subjuntivo.',
  'Attends ici jusqu\'à ce que je ___.|reviens|revienne|reviendrai|revenais|1|jusqu\'à ce que + subjuntivo.']},
{id:'fr-b2-4',lvl:'B2',t:'La voix passive',sub:'Verbo',h:4,pre:['fr-a2-1'],
 ref:[pf('passif.htm','Passif'),tvg],
 teoria:`<p>La pasiva se forma con <b>être</b> en el tiempo de la activa + <b>participio concordado</b> con el sujeto: <i>La loi <b>a été votée</b>. Les résultats <b>seront publiés</b>.</i></p>
<table class="oe-table"><tr><th>Activa</th><th>Pasiva</th></tr>
<tr><td>Le jury choisit le gagnant.</td><td>Le gagnant <b>est choisi</b> par le jury.</td></tr>
<tr><td>On a construit le pont en 1900.</td><td>Le pont <b>a été construit</b> en 1900.</td></tr>
<tr><td>Tout le monde respecte ce professeur.</td><td>Ce professeur est respecté <b>de</b> tous.</td></tr></table>
<p>El agente va con <b>par</b>; con verbos de sentimiento o estado, a menudo con <b>de</b>. El francés prefiere con frecuencia alternativas: <b>on</b> (<i>on a volé ma voiture</i>), la <b>forma pronominal pasiva</b> (<i>ce plat se mange froid</i>) o <i>se faire + infinitivo</i> (<i>il s'est fait voler son portable</i>).</p>
<div class="xl-int"><b>Interferencia del español.</b> La pasiva refleja española («se venden pisos») suele traducirse por <i>on</i> o por la pasiva: <i>on vend des appartements</i>. Solo los verbos con COD admiten pasiva: no se dice <i>*il a été téléphoné</i>.</div>`,
 q:['La décision ___ hier.|a pris|a été prise|est prise hier|a été pris|1|Pasiva en PC con concordancia.',
  'Les résultats ___ demain.|publieront|seront publiés|sont publiés demain seront|seront publié|1|Pasiva en futuro, plural.',
  'Ce roman a été écrit ___ Victor Hugo.|de|par|pour|avec|1|Agente: par.',
  'Ce professeur est aimé ___ ses élèves.|de|à|pour|en|0|Sentimiento: de.',
  'Alternativa con on: «Ma voiture a été volée.»|On a volé ma voiture.|On est volé ma voiture.|On a volée ma voiture.|Ma voiture on vole.|0|on + activa.',
  'Ce vin ___ frais.|se boit|est bu se|boit|se boire|0|Pronominal pasiva.',
  'Il ___ voler son portefeuille.|s\'est fait|a été fait|s\'est faire|est fait|0|se faire + inf.',
  'La maison ___ en 1850.|a été construite|a construit|est construit|a été construit|0|Femenino: construite.']},
{id:'fr-b2-5',lvl:'B2',t:'Gérondif y participe présent',sub:'Verbo',h:4,pre:['fr-a1-2'],
 ref:[pf('participepresent.htm','Participe présent · Gérondif'),tvg],
 teoria:`<p><b>Participe présent:</b> raíz de <i>nous</i> + <b>-ant</b> (<i>nous parlons → parlant</i>); irregulares: <i>étant, ayant, sachant</i>. El <b>gérondif</b> es <b>en</b> + participe présent.</p>
<table class="oe-table"><tr><th>Forma</th><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>gérondif</td><td>simultaneidad (mismo sujeto)</td><td>Il chante <b>en se douchant</b>.</td></tr>
<tr><td>gérondif</td><td>modo / medio</td><td>On apprend <b>en pratiquant</b>.</td></tr>
<tr><td>gérondif</td><td>condición</td><td><b>En partant</b> maintenant, tu arriveras à l'heure.</td></tr>
<tr><td>participe présent</td><td>relativa o causa, escrito</td><td>Les étudiants <b>ayant</b> réussi… · <b>Étant</b> malade, il est resté.</td></tr>
<tr><td>adjetivo verbal</td><td>concuerda</td><td>des histoires <b>amusantes</b></td></tr></table>
<p>Ojo a la ortografía de algunos pares: <i>fatiguant</i> (participio) / <i>fatigant</i> (adjetivo); <i>convainquant / convaincant</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El gerundio español de acción en curso («estoy comiendo») no se traduce por el gérondif: <i>je suis en train de manger</i> o simplemente <i>je mange</i>.</div>`,
 q:['Il écoute de la musique ___ (travailler).|en travaillant|travaillant en|en travailler|en travaillé|0|Gérondif: en + -ant.',
  'Participe présent de savoir:|savant|sachant|saisant|savoirant|1|savoir → sachant.',
  '___ malade, elle n\'est pas venue.|Étant|Être|En étant|Été|0|Causa, registro escrito.',
  'On apprend une langue ___ (parler).|en parlant|parlant en|par parler|en parlé|0|Medio.',
  'Les candidats ___ le diplôme peuvent s\'inscrire.|ayants|ayant|en ayant|avoir|1|El participio presente no concuerda.',
  'C\'est un travail très ___.|fatiguant|fatigant|fatiguante|en fatiguant|1|Adjetivo verbal: fatigant.',
  '«Estoy leyendo» en francés:|Je suis lisant.|Je lis / Je suis en train de lire.|Je suis en lisant.|J\'étais lisant.|1|No se usa el gérondif.',
  '___ (prendre) le métro, tu gagneras du temps.|En prenant|Prenant en|En prendre|En pris|0|Condición.']},
{id:'fr-b2-6',lvl:'B2',t:'Relativos compuestos: lequel, auquel, duquel',sub:'Oración compuesta',h:5,pre:['fr-b1-5'],
 ref:[pf('pronomsrelatifs.htm','Pronoms relatifs'),tvg],
 teoria:`<p>Tras preposición, para cosas, se usa <b>lequel</b> concordado en género y número; con <b>à</b> y <b>de</b> se contrae.</p>
<table class="oe-table"><tr><th></th><th>m. sg.</th><th>f. sg.</th><th>m. pl.</th><th>f. pl.</th></tr>
<tr><td>preposición + lequel</td><td>lequel</td><td>laquelle</td><td>lesquels</td><td>lesquelles</td></tr>
<tr><td>à</td><td>auquel</td><td>à laquelle</td><td>auxquels</td><td>auxquelles</td></tr>
<tr><td>de (locuciones)</td><td>duquel</td><td>de laquelle</td><td>desquels</td><td>desquelles</td></tr></table>
<p>Ejemplos: <i>la table <b>sur laquelle</b>…, le projet <b>auquel</b> je pense, le parc <b>près duquel</b> j'habite</i>. Para personas se prefiere <b>qui</b>: <i>la personne <b>avec qui</b> je travaille</i>. <i>Duquel</i> se usa con locuciones (<i>près de, à côté de, au cours de</i>); con <i>de</i> simple se usa <i>dont</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> Corresponde a «el cual, la cual», pero el francés lo exige donde el español admite «que»: «el proyecto en que trabajo» = <i>le projet <b>sur lequel</b> je travaille</i>.</div>`,
 q:['La table ___ j\'ai posé mes clés.|sur lequel|sur laquelle|sur qui|dont|1|Femenino: laquelle.',
  'Le problème ___ je pense est grave.|auquel|à lequel|dont|duquel|0|à + lequel = auquel.',
  'Les amis avec ___ je pars sont sympas.|lesquels|qui|que|dont|1|Personas: qui (lesquels también posible, menos frecuente).',
  'Le parc près ___ j\'habite est grand.|dont|duquel|de qui|auquel|1|Locución: près duquel.',
  'Les questions ___ il a répondu étaient difficiles.|auxquels|auxquelles|à lesquelles|dont|1|Femenino plural.',
  'La raison pour ___ il est parti…|qui|laquelle|lequel|quoi|1|raison es femenino.',
  'C\'est le livre ___ je t\'ai parlé.|duquel|dont|auquel|lequel|1|De simple: dont.',
  'Les entreprises ___ nous travaillons…|pour lesquels|pour lesquelles|pour qui|auxquelles pour|1|entreprise es femenino.']},
/* ------------------------------ C1 ------------------------------ */
{id:'fr-c1-1',lvl:'C1',t:'Conditionnel passé e hipótesis en el pasado',sub:'Verbo',h:5,pre:['fr-b1-3','fr-b2-1'],
 ref:[pf('conditionnel.htm','Conditionnel'),tvg],
 teoria:`<p>El <b>conditionnel passé</b> (auxiliar en condicional + participio) expresa lo irreal del pasado, el reproche y la información no confirmada sobre el pasado.</p>
<table class="oe-table"><tr><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>si + plus-que-parfait → conditionnel passé</td><td>Si tu <b>m'avais prévenu</b>, je <b>serais venu</b>.</td></tr>
<tr><td>hipótesis mixta</td><td>Si j'<b>avais accepté</b> ce poste, je <b>serais</b> riche aujourd'hui.</td></tr>
<tr><td>reproche</td><td>Tu <b>aurais dû</b> me le dire.</td></tr>
<tr><td>periodismo</td><td>L'accident <b>aurait fait</b> trois victimes.</td></tr></table>
<p>Variante literaria con inversión y <i>pluperfect</i> de subjuntivo: <i><b>Eût-il su</b>, il <b>fût venu</b></i> (C2).</p>
<div class="xl-int"><b>Interferencia del español.</b> «Si hubiera sabido, habría venido»: la condición va en plus-que-parfait de indicativo (<i>si j'<b>avais</b> su</i>), nunca en condicional (*<i>si j'aurais su</i>, error típico también entre nativos).</div>`,
 q:['Si j\'avais su, je ___ venu.|serais|serai|étais|suis|0|Conditionnel passé con être.',
  'Si tu ___ plus tôt, tu aurais eu le train.|partais|étais parti|serais parti|es parti|1|si + plus-que-parfait.',
  'Tu ___ m\'appeler !|aurais dû|avais dû|auras dû|as dû|0|Reproche: aurais dû.',
  'Selon la police, le voleur ___ par la fenêtre.|serait entré|est entré|entrerait|était entré|0|Información no confirmada sobre el pasado.',
  'Si elle avait étudié la médecine, elle ___ médecin aujourd\'hui.|serait|aurait été|sera|était|0|Hipótesis mixta.',
  'Nous ___ venir, mais il pleuvait.|aurions aimé|aimions|aurons aimé|avions aimé|0|Deseo no realizado.',
  'Choose the correct sentence.|Si j\'aurais su, je serais venu.|Si j\'avais su, je serais venu.|Si je savais, je serais venu.|Si j\'avais su, je viendrais venu.|1|Tras si, nunca condicional.',
  'Ils ___ gagner s\'ils avaient joué mieux.|auraient pu|pourraient eu|avaient pu|auront pu|0|Posibilidad irreal pasada.']},
{id:'fr-c1-2',lvl:'C1',t:'Concordancia del participio pasado',sub:'Verbo',h:7,pre:['fr-a2-1','fr-a2-6','fr-b1-5'],
 ref:[pf('participespasses.htm','Participe passé'),['Académie française · Dire, ne pas dire','https://www.academie-francaise.fr/dire-ne-pas-dire']],
 teoria:`<table class="oe-table"><tr><th>Caso</th><th>Regla</th><th>Ejemplo</th></tr>
<tr><td>con être</td><td>concuerda con el sujeto</td><td>Elles sont parti<b>es</b>.</td></tr>
<tr><td>con avoir, COD detrás</td><td>no concuerda</td><td>J'ai acheté des fleurs.</td></tr>
<tr><td>con avoir, COD delante</td><td>concuerda con el COD</td><td>Les fleurs que j'ai acheté<b>es</b>. · Je les ai vu<b>s</b>.</td></tr>
<tr><td>COD = en</td><td>no concuerda</td><td>Des pommes ? J'en ai mangé.</td></tr>
<tr><td>pronominal, se = COD</td><td>concuerda</td><td>Elle s'est lavé<b>e</b>.</td></tr>
<tr><td>pronominal, se = COI</td><td>no concuerda</td><td>Elles se sont parlé. · Elle s'est lavé les mains.</td></tr>
<tr><td>fait + infinitivo</td><td>invariable</td><td>Elle s'est fait couper les cheveux.</td></tr></table>
<p>Pregúntese siempre: ¿qué es el COD y dónde está? Los verbos de comunicación (<i>se parler, se téléphoner, se sourire, se succéder</i>) tienen <i>se</i> como COI y no concuerdan.</p>
<div class="xl-int"><b>Interferencia del español.</b> El español no concuerda nunca el participio con «haber»; el francés escrito sí, cuando el COD precede. En la oralidad solo se oye en algunos participios (<i>prise, faite, écrite, mise</i>).</div>`,
 q:['Les lettres que j\'ai ___.|écrit|écrites|écrits|écrite|1|COD (que = lettres) delante.',
  'Ma sœur, je l\'ai ___ hier.|vu|vue|vus|vues|1|l\' = ma sœur, delante.',
  'Des fraises ? J\'en ai ___.|mangées|mangé|mangés|mangée|1|Con en, no concuerda.',
  'Elles se sont ___ au téléphone.|parlées|parlé|parlés|parlée|1|se es COI (parler à).',
  'Elle s\'est ___ les dents.|brossée|brossé|brossés|brossées|1|COD = les dents, detrás.',
  'Elle s\'est ___ ce matin.|levé|levée|levés|levées|1|se = COD.',
  'Ils ont ___ leurs devoirs.|fait|faits|faites|faite|0|COD detrás: invariable.',
  'Elle s\'est ___ couper les cheveux.|faite|fait|faits|faites|1|fait + infinitivo: invariable.']},
{id:'fr-c1-3',lvl:'C1',t:'Concesión y oposición',sub:'Discurso',h:5,pre:['fr-b2-3'],
 ref:[pf('relationslogiques.htm','Relations logiques'),rfi],
 teoria:`<table class="oe-table"><tr><th>Construcción</th><th>Registro</th><th>Ejemplo</th></tr>
<tr><td>bien que / quoique + subjuntivo</td><td>estándar / culto</td><td><b>Bien qu'</b>il <b>soit</b> tard, je reste.</td></tr>
<tr><td>même si + indicativo</td><td>estándar</td><td><b>Même s'</b>il pleut, on sort.</td></tr>
<tr><td>malgré + sustantivo</td><td>estándar</td><td><b>Malgré</b> la pluie…</td></tr>
<tr><td>avoir beau + infinitivo</td><td>oral y escrito</td><td>J'<b>ai beau</b> chercher, je ne trouve rien.</td></tr>
<tr><td>pourtant, cependant, néanmoins, toutefois</td><td>conectores</td><td>Il est riche ; <b>pourtant</b>, il vit simplement.</td></tr>
<tr><td>alors que / tandis que</td><td>oposición</td><td>Lui aime la mer, <b>alors qu'</b>elle préfère la montagne.</td></tr>
<tr><td>quelque / si … que + subjuntivo</td><td>culto</td><td><b>Si</b> intelligent <b>qu'</b>il <b>soit</b>…</td></tr>
<tr><td>quoi que + subjuntivo</td><td>«haga lo que haga»</td><td><b>Quoi que</b> tu <b>fasses</b>…</td></tr></table>
<div class="xl-int"><b>Interferencia del español.</b> <i>Malgré que</i> + subjuntivo es censurado por la norma; use <i>bien que</i>. No confunda <i>quoique</i> (aunque) con <i>quoi que</i> (lo que sea que).</div>`,
 q:['Bien qu\'il ___ malade, il travaille.|est|soit|sera|était|1|bien que + subjuntivo.',
  'Même s\'il ___, on ira à la plage.|pleuve|pleut|pleuvrait|a plu pleuve|1|même si + indicativo.',
  '___ la crise, l\'entreprise a embauché.|Bien que|Malgré|Même si|Quoique|1|Malgré + sustantivo.',
  'J\'ai beau ___, je n\'y arrive pas.|essayer|essaie|essayé|en essayant|0|avoir beau + infinitivo.',
  'Il est très riche ; ___, il vit simplement.|pourtant|malgré|bien que|quoi que|0|Conector adversativo.',
  '___ tu fasses, je te soutiendrai.|Quoique|Quoi que|Bien que|Même si|1|quoi que = lo que sea que.',
  'Si intelligent qu\'il ___, il fait des erreurs.|est|soit|sera|était|1|si … que + subjuntivo.',
  'Moi, j\'aime le thé, ___ mon frère préfère le café.|alors que|malgré|pourtant que|bien que|0|Oposición: alors que.']},
{id:'fr-c1-4',lvl:'C1',t:'Causa y consecuencia',sub:'Discurso',h:4,pre:['fr-b1-6'],
 ref:[pf('relationslogiques.htm','Relations logiques'),rfi],
 teoria:`<table class="oe-table"><tr><th>Causa</th><th>Matiz</th><th>Consecuencia</th><th>Matiz</th></tr>
<tr><td>parce que</td><td>responde a pourquoi</td><td>donc, alors</td><td>estándar</td></tr>
<tr><td>puisque</td><td>causa conocida</td><td>c'est pourquoi, par conséquent</td><td>argumentativo</td></tr>
<tr><td>comme (al inicio)</td><td>causa previa</td><td>si bien que, de sorte que + ind.</td><td>resultado</td></tr>
<tr><td>grâce à / à cause de</td><td>positiva / negativa</td><td>tellement … que, si … que</td><td>intensidad</td></tr>
<tr><td>en raison de, faute de, vu que, étant donné que</td><td>formal</td><td>d'où + sustantivo</td><td>conclusión</td></tr></table>
<p><i>De sorte que</i> + indicativo expresa consecuencia; + subjuntivo, finalidad: <i>Parle fort <b>de sorte qu'</b>on t'<b>entende</b></i>. <i>Tellement de</i> + sustantivo: <i>il y avait <b>tellement de</b> monde <b>que</b>…</i></p>
<div class="xl-int"><b>Interferencia del español.</b> <i>Comme</i> causal solo va al principio de la frase. <i>Grâce à</i> se reserva para causas positivas: <i>à cause de</i> para negativas.</div>`,
 q:['___ il pleuvait, nous sommes restés.|Parce que|Comme|Car|Donc|1|Comme al inicio.',
  'Il a réussi ___ son travail.|à cause de|grâce à|faute de|d\'où|1|Causa positiva.',
  'Le vol a été annulé ___ la grève.|grâce à|à cause de|parce que|puisque|1|Causa negativa.',
  'Il était ___ fatigué qu\'il s\'est endormi.|tellement|tellement de|si bien|tant de|0|Intensidad: tellement … que.',
  '___ tu sais tout, réponds !|Puisque|Comme si|Grâce à|Donc|0|Causa conocida.',
  'Il y avait une grève, ___ les retards.|d\'où|donc que|de sorte|car|0|d\'où + sustantivo.',
  '___ temps, il n\'a pas fini.|Faute de|À cause|Grâce|Comme|0|faute de = por falta de.',
  'Parle lentement de sorte qu\'on te ___.|comprend|comprenne|comprendra|comprenait|1|Finalidad: subjuntivo.']},
{id:'fr-c1-5',lvl:'C1',t:'Nominalización y estilo escrito',sub:'Discurso',h:5,pre:['fr-c1-4'],
 ref:[pf('formation_des_mots.htm','Formation des mots'),['Larousse · Dictionnaire de français','https://www.larousse.fr/dictionnaires/francais']],
 teoria:`<p>La prensa y los textos académicos franceses transforman verbos y adjetivos en <b>sustantivos</b> para condensar.</p>
<table class="oe-table"><tr><th>Sufijo</th><th>Base</th><th>Sustantivo</th></tr>
<tr><td>-tion / -sion</td><td>augmenter, décider</td><td>l'augmentation, la décision</td></tr>
<tr><td>-ment</td><td>licencier, changer</td><td>le licenciement, le changement</td></tr>
<tr><td>-age</td><td>nettoyer, chômer</td><td>le nettoyage, le chômage</td></tr>
<tr><td>-ure</td><td>ouvrir, fermer</td><td>l'ouverture, la fermeture</td></tr>
<tr><td>-ité / -esse / -eur</td><td>rapide, faible, blanc</td><td>la rapidité, la faiblesse, la blancheur</td></tr>
<tr><td>sin sufijo</td><td>reculer, choisir</td><td>le recul, le choix</td></tr></table>
<p>Ejemplo: <i>Les prix ont augmenté rapidement</i> → <i><b>La forte augmentation des prix</b></i> (titular). El verbo de apoyo sustituye al original: <i>procéder à, effectuer, faire l'objet de, donner lieu à</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> Varios géneros cambian respecto del español: <i><b>la</b> découverte, <b>le</b> choix, <b>la</b> fin</i>; todos los terminados en <i>-age</i> son masculinos salvo <i>la page, la plage, la cage, l'image</i>.</div>`,
 q:['Nominalice «licencier»:|la licenciation|le licenciement|le licenciage|la licence|1|-ment.',
  'Nominalice «ouvrir»:|l\'ouvrement|l\'ouverture|l\'ouvrage de|l\'ouvrance|1|-ure.',
  'Nominalice «choisir»:|la choisition|le choix|le choisissement|la choisie|1|Sin sufijo.',
  'Género de «chômage»:|la|le|les|l\' femenino|1|-age suele ser masculino.',
  '«Les prix ont fortement augmenté» →|La forte augmentation des prix|L\'augmentation fortement des prix|Le fort augmentement des prix|La forte augmenté des prix|0|Adjetivo + sustantivo.',
  'Nominalice «rapide»:|la rapidesse|la rapidité|le rapidement|la rapideur|1|-ité.',
  'La police ___ à l\'arrestation du suspect.|a procédé|a effectué de|a donné|a fait objet|0|procéder à.',
  'Nominalice «faible»:|la faiblité|la faiblesse|le faiblement|la faibleur|1|-esse.']},
{id:'fr-c1-6',lvl:'C1',t:'Mise en relief',sub:'Énfasis',h:4,pre:['fr-b1-5'],
 ref:[pf('pronoms_sujets.htm','C\'est / Il est / Il y a'),tvg],
 teoria:`<table class="oe-table"><tr><th>Procedimiento</th><th>Ejemplo</th></tr>
<tr><td>c'est … qui (sujeto)</td><td><b>C'est</b> Marie <b>qui</b> a gagné.</td></tr>
<tr><td>c'est … que (complemento)</td><td><b>C'est</b> à Lyon <b>que</b> je l'ai rencontré.</td></tr>
<tr><td>ce qui … c'est (sujeto)</td><td><b>Ce qui</b> m'inquiète, <b>c'est</b> le prix.</td></tr>
<tr><td>ce que … c'est (COD)</td><td><b>Ce que</b> j'aime, <b>c'est</b> voyager.</td></tr>
<tr><td>ce dont … c'est (de)</td><td><b>Ce dont</b> j'ai besoin, <b>c'est</b> de repos.</td></tr>
<tr><td>dislocación con pronombre</td><td><b>Moi</b>, je pense que… · Ce film, je <b>l'</b>ai adoré.</td></tr></table>
<p>Con <i>c'est … qui</i>, el verbo concuerda con el elemento destacado: <i>C'est <b>moi</b> qui <b>suis</b> responsable · C'est <b>nous</b> qui <b>avons</b> gagné.</i> En plural, culto: <i>Ce <b>sont</b> eux qui…</i></p>
<div class="xl-int"><b>Interferencia del español.</b> «Fui yo quien lo hizo» = <i>c'est moi qui l'<b>ai</b> fait</i> (el verbo concuerda con <i>moi</i>, no en tercera persona).</div>`,
 q:['C\'est moi qui ___ raison.|a|ai|as|avons|1|Concordancia con moi.',
  '___ m\'énerve, c\'est le bruit.|Ce que|Ce qui|Ce dont|C\'est qui|1|Sujeto: ce qui.',
  '___ j\'ai besoin, c\'est de calme.|Ce que|Ce dont|Ce qui|Ce à quoi dont|1|avoir besoin de: ce dont.',
  'C\'est à Paris ___ ils se sont mariés.|qui|que|où que|dont|1|c\'est … que.',
  '___ je préfère, c\'est le jazz.|Ce qui|Ce que|Ce dont|Qu\'est-ce|1|COD: ce que.',
  'C\'est nous qui ___ fini.|ont|avons|a|avez|1|Concordancia con nous.',
  'Ce livre, je ___ ai lu deux fois.|l\'|le|en|y|0|Dislocación con pronombre de retoma.',
  '___ eux qui ont organisé la fête (culto).|C\'est|Ce sont|C\'était|Il est|1|Plural culto.']},
/* ------------------------------ C2 ------------------------------ */
{id:'fr-c2-1',lvl:'C2',t:'Passé simple y passé antérieur',sub:'Verbo',h:5,pre:['fr-b1-1'],
 ref:[pf('passesimple.htm','Passé simple · Passé antérieur'),['Larousse · Conjugaison','https://www.larousse.fr/conjugaison/francais']],
 teoria:`<p>El <b>passé simple</b> es el tiempo de la narración literaria e histórica; en el habla lo sustituye el passé composé. Hay que <b>reconocerlo</b> y saber usarlo en tercera persona.</p>
<table class="oe-table"><tr><th>Tipo</th><th>Terminaciones</th><th>Ejemplo</th></tr>
<tr><td>-er</td><td>-ai, -as, -a, -âmes, -âtes, -èrent</td><td>il parla, ils parlèrent</td></tr>
<tr><td>-ir, -re (muchos)</td><td>-is, -is, -it, -îmes, -îtes, -irent</td><td>il finit, il prit, il fit, il dit</td></tr>
<tr><td>en -u</td><td>-us, -us, -ut, -ûmes, -ûtes, -urent</td><td>il fut, il eut, il put, il voulut, il sut</td></tr>
<tr><td>venir, tenir</td><td>-ins, -ins, -int, -înmes, -întes, -inrent</td><td>il vint, il tint</td></tr></table>
<p>El <b>passé antérieur</b> (auxiliar en passé simple + participio) marca la anterioridad inmediata tras <i>quand, lorsque, dès que, après que, à peine</i>: <i>Dès qu'il <b>eut fini</b>, il sortit.</i></p>
<div class="xl-int"><b>Interferencia del español.</b> Funcionalmente equivale al indefinido literario («habló, vino»). Cuidado con los homógrafos: <i>il finit</i> (presente y passé simple), <i>il dit</i>.</div>`,
 q:['Il ___ la porte et sortit. (ouvrir)|ouvrit|ouvra|ouvrut|ouvrait|0|Tipo -is.',
  'Ils ___ très tard. (arriver)|arrivèrent|arrivirent|arrivaient|arrivâmes|0|-er: -èrent.',
  'Elle ___ malade tout l\'hiver. (être)|fut|était fut|été|fus|0|être → fut.',
  'Le roi ___ à Paris. (venir)|venit|vint|vena|vinrent|1|venir → vint.',
  'Ils ___ la nouvelle. (apprendre)|apprirent|apprenèrent|apprendirent|apprurent|0|prendre → prirent.',
  'Dès qu\'il ___ fini, il partit.|eut|avait|ait|aura|0|Passé antérieur: eut fini.',
  'Elle ___ la vérité. (savoir)|sut|savit|savut|sachit|0|savoir → sut.',
  'Il ___ «non». (dire)|dit|disa|dut|disit|0|dire → dit.']},
{id:'fr-c2-2',lvl:'C2',t:'Subjonctif imparfait y plus-que-parfait (registro literario)',sub:'Verbo',h:4,pre:['fr-c2-1','fr-b2-3'],
 ref:[pf('subjonctif.htm','Subjonctif'),['Larousse · Conjugaison','https://www.larousse.fr/conjugaison/francais']],
 teoria:`<p>En la lengua literaria clásica, la concordancia de tiempos exige <b>subjonctif imparfait</b> cuando la principal está en pasado: <i>Il fallait qu'il <b>partît</b>.</i> Hoy se usa el subjuntivo presente (<i>il fallait qu'il parte</i>), pero hay que reconocerlo.</p>
<table class="oe-table"><tr><th>Formación</th><th>Ejemplo (3.ª sg.)</th></tr>
<tr><td>raíz del passé simple + -sse, -sses, -^t, -ssions, -ssiez, -ssent</td><td>parler → qu'il parl<b>ât</b> · finir → qu'il fin<b>ît</b> · être → qu'il <b>fût</b> · avoir → qu'il <b>eût</b> · venir → qu'il <b>vînt</b></td></tr>
<tr><td>plus-que-parfait del subjuntivo: eusse / fusse + participio</td><td>qu'il <b>eût fini</b> · qu'elle <b>fût partie</b></td></tr></table>
<p>El plus-que-parfait del subjuntivo funciona también como <b>conditionnel passé, deuxième forme</b>: <i>On <b>eût dit</b> un rêve</i> (= on aurait dit). Atención al acento circunflejo: <i>il fut</i> (passé simple) / <i>qu'il fût</i> (subjuntivo).</p>
<div class="xl-int"><b>Interferencia del español.</b> Recuerda al imperfecto de subjuntivo español («que partiera / partiese»), que sí sigue vivo; en francés es solo literario.</div>`,
 q:['Il fallait qu\'il ___. (partir, literario)|partît|partait|partirait|partit|0|Subjonctif imparfait.',
  'Je voulais qu\'elle ___ heureuse. (être, literario)|fut|fût|soit fût|était|1|qu\'elle fût.',
  'Forma moderna de «qu\'il vînt»:|qu\'il vienne|qu\'il venait|qu\'il viendra|qu\'il vint|0|Subjuntivo presente.',
  '«On eût dit un rêve» equivale a:|on aurait dit|on avait dit|on a dit|on dirait dit|0|Conditionnel passé 2e forme.',
  'Bien qu\'il ___ fini, il resta. (literario)|eût|eut|ait eu|avait|0|Plus-que-parfait du subjonctif.',
  '¿Cuál es passé simple?|qu\'il fût|il fut|qu\'il soit|il fût|1|Sin circunflejo.',
  'Qu\'il ___ (parler):|parlât|parla|parlat|parlâtes|0|-er: parlât.',
  'Il eût ___ mieux se taire.|valu|valoir|vaut|vallu|0|Il eût valu mieux…']},
{id:'fr-c2-3',lvl:'C2',t:'Ne explétif y negaciones complejas',sub:'Oración',h:4,pre:['fr-b2-3'],
 ref:[pf('subjonctif.htm','Subjonctif · Ne explétif'),pf('negation.htm','Négation')],
 teoria:`<p>El <b>ne explétif</b> no niega: es una marca culta que aparece tras expresiones de temor, prevención o comparación de desigualdad.</p>
<table class="oe-table"><tr><th>Contexto</th><th>Ejemplo</th></tr>
<tr><td>avoir peur / craindre que</td><td>Je crains qu'il <b>ne</b> pleuve.</td></tr>
<tr><td>avant que / à moins que</td><td>Pars avant qu'il <b>ne</b> soit trop tard.</td></tr>
<tr><td>comparación</td><td>C'est plus difficile que je <b>ne</b> pensais.</td></tr>
<tr><td>éviter / empêcher que</td><td>Évitez qu'il <b>ne</b> sorte.</td></tr></table>
<p>Negaciones complejas: <i>ne … que</i> (solo: <i>je <b>n'</b>ai <b>que</b> dix euros</i>), <i>ne … guère</i> (apenas), <i>ne … nullement / aucunement</i> (en absoluto), <i>ni … ni … ne</i> (<i><b>Ni</b> lui <b>ni</b> elle <b>ne</b> viendront</i>), <i>sans que</i> (que excluye <i>pas</i>), y el <i>ne</i> solo con <i>cesser, oser, pouvoir, savoir</i>: <i>je <b>ne</b> sais que faire</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El <i>ne explétif</i> se parece al «no» expletivo español («hasta que no llegue»), pero aquí es culto y facultativo. <i>Ne … que</i> es afirmativo: no añada <i>pas</i>.</div>`,
 q:['Je crains qu\'il ___ soit trop tard. (registro culto)|ne|pas|ne pas|n\'|0|ne explétif.',
  'C\'est plus cher que je ___ croyais.|ne|ne pas|pas|n\'en|0|Comparación de desigualdad.',
  'Je n\'ai ___ cinq minutes.|pas que|que|guère que|plus|1|ne … que = solo.',
  '___ Paul ___ Marie ne sont venus.|Ni / ni|Pas / pas|Ni / et|Non / non|0|ni … ni … ne.',
  'Il ne cesse ___ parler. (culto)|pas de|de|que de|de pas|1|ne solo con cesser.',
  'Il est parti sans que je ___ le voir.|puisse|ne puisse pas|peux|pouvais pas|0|sans que excluye pas.',
  'Le ne explétif…|niega la frase.|no niega; es una marca culta.|es obligatorio en el habla.|equivale a ne … pas.|1|No niega.',
  'Je ne sais ___ faire. (culto)|pas que|que|pas quoi que|guère que|1|ne … que faire / ne sais que faire.']},
{id:'fr-c2-4',lvl:'C2',t:'Futur antérieur y valores modales del futuro',sub:'Verbo',h:4,pre:['fr-b1-2','fr-c1-1'],
 ref:[pf('futur.htm','Futur'),pf('conditionnel.htm','Conditionnel')],
 teoria:`<p>El <b>futur antérieur</b> (auxiliar en futuro + participio) expresa una acción terminada antes de un momento futuro: <i>Quand tu arriveras, j'<b>aurai fini</b>.</i></p>
<table class="oe-table"><tr><th>Valor</th><th>Ejemplo</th></tr>
<tr><td>anterioridad en el futuro</td><td>Dès que tu <b>auras reçu</b> la lettre, réponds.</td></tr>
<tr><td>conjetura sobre el pasado</td><td>Il est en retard : il <b>aura raté</b> son train. (habrá perdido)</td></tr>
<tr><td>balance</td><td>Il <b>aura</b> tout <b>essayé</b>.</td></tr>
<tr><td>futuro de cortesía / mandato</td><td>Vous <b>fermerez</b> la porte en sortant.</td></tr>
<tr><td>futuro histórico</td><td>En 1789, la Révolution <b>éclatera</b>.</td></tr></table>
<p>El condicional, por su parte, expresa el <b>futuro en el pasado</b> (<i>il savait qu'il <b>reviendrait</b></i>) y la <b>información no asumida</b> (<i>selon nos sources, il <b>aurait démissionné</b></i>).</p>
<div class="xl-int"><b>Interferencia del español.</b> La conjetura sobre el pasado («habrá perdido el tren») coincide con el español; tras <i>quand</i> y <i>dès que</i> el francés exige futuro anterior donde el español usa subjuntivo («cuando hayas recibido»).</div>`,
 q:['Quand tu rentreras, j\'___ le dîner.|aurai préparé|aurais préparé|ai préparé|avais préparé|0|Anterioridad futura.',
  'Dès que vous ___ , appelez-moi.|aurez fini|avez fini|finissez|auriez fini|0|dès que + futur antérieur.',
  'Il n\'est pas là ; il ___ son bus.|aura raté|rate|aurait raté|ratera|0|Conjetura sobre el pasado.',
  'Vous ___ la porte en partant. (mandato cortés)|fermerez|fermeriez|fermez à|aurez fermer|0|Futuro de cortesía.',
  'Il savait qu\'il ___.|reviendrait|reviendra|revenait|reviendrais|0|Futuro en el pasado.',
  'Selon la presse, il ___ démissionné.|aurait|aura|avait|a|0|Información no confirmada.',
  'En 1914, la guerre ___. (futuro histórico)|éclatera|éclaterait|éclatait|a éclaté|0|Futuro histórico.',
  'Lorsque nous ___ , nous partirons.|aurons mangé|avons mangé|aurions mangé|mangeons|0|lorsque + futur antérieur.']},
{id:'fr-c2-5',lvl:'C2',t:'Registros de lengua y variación francófona',sub:'Discurso',h:6,pre:['fr-c1-6'],
 ref:[pf('varietes_du_francais.htm','Variétés du français'),['Académie française · Dire, ne pas dire','https://www.academie-francaise.fr/dire-ne-pas-dire']],
 teoria:`<table class="oe-table"><tr><th>Familiar</th><th>Estándar</th><th>Cuidado / soutenu</th></tr>
<tr><td>T'as vu ?</td><td>Tu as vu ?</td><td>As-tu vu ?</td></tr>
<tr><td>J'sais pas.</td><td>Je ne sais pas.</td><td>Je ne sais.</td></tr>
<tr><td>C'est qui ?</td><td>Qui est-ce ?</td><td>Qui est-ce donc ?</td></tr>
<tr><td>bosser, bouffer, une bagnole</td><td>travailler, manger, une voiture</td><td>œuvrer, se restaurer, un véhicule</td></tr>
<tr><td>On s'en va.</td><td>Nous partons.</td><td>Nous prenons congé.</td></tr></table>
<p>El francés es lengua oficial en una treintena de Estados. Variantes léxicas: Bélgica y Suiza dicen <i>septante, nonante</i> (Suiza también <i>huitante</i>); Quebec, <i>char</i> (coche), <i>magasiner</i> (ir de compras), <i>courriel</i> (correo electrónico); en África occidental, <i>essencerie</i> (gasolinera). El <b>verlan</b> invierte sílabas: <i>louche → chelou, fou → ouf</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> Como en español, el registro se elige por situación; pero en francés la caída de <i>ne</i> y el <i>on</i> por <i>nous</i> marcan con fuerza el registro oral.</div>`,
 q:['Versión soutenue de «T\'as vu ?»:|As-tu vu ?|Tu as vu ?|T\'as-tu vu ?|Vu, toi ?|0|Inversión.',
  '«Bosser» significa:|dormir|trabajar|comer|pelear|1|Familiar: travailler.',
  '«Septante» se usa en:|Francia|Bélgica y Suiza|Quebec|Senegal|1|70 en Bélgica y Suiza.',
  'En Quebec, «magasiner» significa:|almacenar|ir de compras|trabajar en una tienda|cerrar|1|Faire du shopping.',
  'Verlan de «fou»:|ouf|foo|uof|fouf|0|Inversión silábica.',
  '«Courriel» es el término quebequense para:|correo postal|correo electrónico|curriculum|cartero|1|Adoptado también en Francia.',
  'Rasgo típico del registro familiar:|inversión sujeto-verbo|caída de ne|uso de nous|passé simple|1|J\'sais pas.',
  'Equivalente estándar de «bouffer»:|boire|manger|bouger|dormir|1|Comer.']},
{id:'fr-c2-6',lvl:'C2',t:'Inversión del sujeto y orden marcado',sub:'Oración',h:4,pre:['fr-a1-5','fr-c1-6'],
 ref:[pf('interrogation.htm','Interrogation'),tvg],
 teoria:`<table class="oe-table"><tr><th>Contexto</th><th>Ejemplo</th></tr>
<tr><td>tras adverbios al inicio (peut-être, sans doute, aussi, à peine, ainsi)</td><td><b>Peut-être viendra-t-il</b>. · <b>À peine</b> était-il arrivé qu'il repartit.</td></tr>
<tr><td>incisos de cita</td><td>« Je pars », <b>dit-elle</b>.</td></tr>
<tr><td>inversión compleja (sujeto nominal + pronombre)</td><td><b>Votre frère</b> viendra-<b>t-il</b> ?</td></tr>
<tr><td>relativas y subordinadas</td><td>la maison qu'avaient construite <b>mes parents</b></td></tr>
<tr><td>hipótesis sin si</td><td><b>Serait-il</b> malade, il viendrait quand même.</td></tr></table>
<p><i>Aussi</i> al inicio significa «por eso» y exige inversión en registro cuidado: <i>Il pleuvait ; <b>aussi sommes-nous restés</b>.</i> Con <i>peut-être que</i> no hay inversión: <i>Peut-être qu'il viendra</i>.</p>
<div class="xl-int"><b>Interferencia del español.</b> El español invierte con libertad («dijo ella»); en francés la inversión es gramatical y obligatoria en los incisos de cita: <i>«Oui», <b>répondit-il</b></i>, no <i>il répondit</i> tras la cita.</div>`,
 q:['« Viens ! », ___.|il a dit|a-t-il dit|il dit-il|dit il|1|Inciso: inversión.',
  'Peut-être ___ en retard.|il sera|sera-t-il|qu\'il sera-t-il|sera il|1|Inversión tras peut-être.',
  'Peut-être ___ en retard.|qu\'il sera|sera-t-il qu\'|qu\'est-il|que sera-t-il|0|Con que, sin inversión.',
  'Votre mère ___ ?|viendra-t-elle|viendra-elle|vient-elle-t|elle viendra-t|0|Inversión compleja.',
  'Il était tard ; ___ sommes-nous partis.|aussi|donc|alors|pourtant|0|aussi = por eso + inversión.',
  'À peine ___ arrivé qu\'il repartit.|il était|était-il|était il|est-il|1|À peine + inversión.',
  '___ malade, il viendrait quand même.|Serait-il|Il serait|Si serait-il|Fût-il serait|0|Hipótesis sin si.',
  'La maison qu\'___ mes parents…|avaient construite|mes parents avaient construit|ont-ils construit|construite avaient|0|Sujeto nominal pospuesto.']}
];
/* ---------- recursos oficiales ---------- */
const RFI='https://francaisfacile.rfi.fr/fr/';
const FEI='https://www.france-education-international.fr/';
const RES=[
 ['gram','Le Point du FLE · Grammaire',PF+'grammaire.htm','Repertorio de cursos y ejercicios de gramática.','A1 A2 B1 B2 C1 C2'],
 ['gram','Le Point du FLE · Conjugaison',PF+'verbes.htm','Modos y tiempos con ejercicios.','A1 A2 B1 B2 C1'],
 ['gram','Le Point du FLE · Aprender francés (panorama en español)',PF+'aprenderfrances.htm','Índice completo del sitio en español.','A1 A2 B1 B2 C1 C2'],
 ['gram','TV5MONDE · Aides de grammaire',TV+'aides/grammaire','Fichas de gramática con ejemplos.','A1 A2 B1 B2'],
 ['gram','TV5MONDE · La grammaire en A2',TV+'exercices/la-grammaire-en-a2','Colección de ejercicios de gramática A2.','A2'],
 ['gram','RFI · Réviser les points de langue',RFI+'r%C3%A9viser/','Repasos gramaticales con audio.','A2 B1 B2 C1'],
 ['video','TV5MONDE · Exercices A1',TV+'exercices/a1-debutant','Vídeos auténticos con ejercicios.','A1'],
 ['video','TV5MONDE · Exercices A2',TV+'exercices/a2-elementaire','Vídeos auténticos con ejercicios.','A2'],
 ['video','TV5MONDE · Exercices B1',TV+'exercices/b1-intermediaire','Vídeos auténticos con ejercicios.','B1'],
 ['video','TV5MONDE · Exercices B2',TV+'exercices/b2-avance','Vídeos auténticos con ejercicios.','B2 C1'],
 ['video','TV5MONDE · Première classe',TV+'exercices/premiere-classe','Curso para principiantes absolutos.','A1'],
 ['video','RFI · Journal en français facile',RFI+'podcasts/journal-en-fran%C3%A7ais-facile/','Noticiario diario de diez minutos con transcripción.','A2 B1 B2'],
 ['video','RFI · Exercices A1',RFI+'exercices/a1/','Ejercicios de comprensión con audio.','A1'],
 ['video','RFI · Exercices A2',RFI+'exercices/a2/','Ejercicios de comprensión con audio.','A2'],
 ['video','RFI · Exercices B1',RFI+'exercices/b1/','Ejercicios de comprensión con audio.','B1'],
 ['video','RFI · Exercices B2',RFI+'exercices/b2/','Ejercicios de comprensión con audio.','B2'],
 ['video','RFI · Exercices C1–C2',RFI+'exercices/c1c2/','Ejercicios para usuarios autónomos.','C1 C2'],
 ['video','RFI · Les mots de l\'info',RFI+'podcasts/les-mots-de-l-info/','Léxico de la actualidad explicado.','B1 B2 C1'],
 ['video','RFI · Un mot, une histoire',RFI+'podcasts/un-mot-une-histoire/','Historia de palabras y expresiones.','B2 C1 C2'],
 ['video','YouTube · TV5MONDE','https://www.youtube.com/@TV5MONDE','Canal oficial de TV5MONDE.','B1 B2 C1 C2'],
 ['video','YouTube · Français facile – RFI','https://www.youtube.com/@rfi_francaisfacile','Canal oficial de RFI Français facile.','A2 B1 B2'],
 ['video','YouTube · Lumni','https://www.youtube.com/@lumniFR','Canal educativo público de France Télévisions.','B2 C1 C2'],
 ['skill','TV5MONDE · Vocabulaire',TV+'vocab/tous-niveaux','Léxico por dificultad.','A1 A2 B1 B2'],
 ['skill','TV5MONDE · Prononciation',TV+'aides/prononciation','Fonética con audio.','A1 A2 B1'],
 ['skill','RFI · Communiquer au quotidien',RFI+'communiquer-quotidien/','Situaciones comunicativas.','A1 A2 B1'],
 ['skill','RFI · Comprendre l\'actualité',RFI+'comprendre-actualit%C3%A9-fran%C3%A7ais/','Comprensión de noticias.','B1 B2 C1'],
 ['skill','Le Point du FLE · Compétences langagières',PF+'francais-competences-langagieres.htm','Escuchar, leer, hablar y escribir.','A1 A2 B1 B2 C1'],
 ['skill','Le Point du FLE · Phonétique',PF+'phonetique.htm','Pronunciación y fonética.','A1 A2 B1'],
 ['test','TV5MONDE · Tester son niveau',TV+'apprendre-francais/tester-son-niveau','Prueba de nivel gratuita.','A1 A2 B1 B2'],
 ['test','RFI · Tester son niveau',RFI+'tester-son-niveau/','Prueba de nivel con audio.','A1 A2 B1 B2 C1 C2'],
 ['test','TV5MONDE · S\'entraîner au TCF','https://apprendre.tv5monde.com/tcf','Preparación al Test de connaissance du français.','A2 B1 B2 C1'],
 ['test','RFI · Diplômes et tests',RFI+'dipl%C3%B4mes-tests/','Entrenamiento DELF, TCF y DFP.','A2 B1 B2 C1'],
 ['test','France Éducation international · DELF A1',FEI+'diplome/delf-tout-public/niveau-a1','Descripción oficial del examen.','A1'],
 ['test','France Éducation international · DELF A2',FEI+'diplome/delf-tout-public/niveau-a2','Descripción oficial del examen.','A2'],
 ['test','France Éducation international · DELF B1',FEI+'diplome/delf-tout-public/niveau-b1','Descripción oficial del examen.','B1'],
 ['test','France Éducation international · DELF B2',FEI+'diplome/delf-tout-public/niveau-b2','Descripción oficial del examen.','B2'],
 ['test','France Éducation international · DALF C1–C2',FEI+'diplome/dalf','Diplomas de nivel avanzado.','C1 C2'],
 ['test','France Éducation international · Ressources DELF-DALF',FEI+'diplome/ressources-dilf-delf-dalf-tcf','Ejemplos de pruebas oficiales.','A1 A2 B1 B2 C1 C2'],
 ['dic','Larousse · français–espagnol','https://www.larousse.fr/dictionnaires/francais-espagnol','Diccionario bilingüe.','A1 A2 B1 B2 C1 C2'],
 ['dic','Larousse · Dictionnaire de français','https://www.larousse.fr/dictionnaires/francais','Diccionario monolingüe.','B1 B2 C1 C2'],
 ['dic','Larousse · Conjugaison','https://www.larousse.fr/conjugaison/francais','Conjugador de referencia.','A1 A2 B1 B2 C1 C2'],
 ['dic','Dictionnaire de l\'Académie française','https://www.dictionnaire-academie.fr/','Edición oficial en línea.','C1 C2'],
 ['dic','Académie française · Dire, ne pas dire','https://www.academie-francaise.fr/dire-ne-pas-dire','Dudas de uso y norma.','B2 C1 C2'],
 ['dic','CNRTL · Portail lexical','https://www.cnrtl.fr/definition/','Definiciones, etimología y sinónimos (CNRS).','C1 C2'],
 ['dic','WordReference · francés–español','https://www.wordreference.com/fres/','Diccionario bilingüe y foros.','A1 A2 B1 B2 C1 C2']
];
const EXAM={A1:['DELF A1',FEI+'diplome/delf-tout-public/niveau-a1'],A2:['DELF A2',FEI+'diplome/delf-tout-public/niveau-a2'],
 B1:['DELF B1',FEI+'diplome/delf-tout-public/niveau-b1'],B2:['DELF B2',FEI+'diplome/delf-tout-public/niveau-b2'],
 C1:['DALF C1',FEI+'diplome/dalf'],C2:['DALF C2',FEI+'diplome/dalf']};
/* Horas acumuladas desde cero (Alliance Française du Yorkshire, FAQ; orientativas) */
const HORAS={A1:[60,100],A2:[160,200],B1:[360,400],B2:[560,650],C1:[810,950],C2:[1060,1200]};
const FUENTE=['Alliance Française du Yorkshire · FAQ (horas por nivel)','https://www.afleeds.org.uk/faq'];
const CAN={
 A1:'Saludar, presentarse, hablar de gustos y de la vida diaria con frases breves; entender indicaciones sencillas.',
 A2:'Contar lo que se hizo (passé composé) y cómo era (imparfait), hacer planes, comprar, pedir y dar direcciones.',
 B1:'Narrar con fluidez, expresar opiniones y deseos (subjonctif), formular hipótesis sencillas y escribir cartas personales.',
 B2:'Argumentar en debates, comprender la prensa y la radio, redactar ensayos y cartas formales con conectores variados.',
 C1:'Comprender textos largos e implícitos, manejar los registros y escribir textos académicos con nominalización y matiz.',
 C2:'Leer literatura clásica (passé simple, subjonctif imparfait), dominar la variación francófona y reformular con precisión.'};
return {code:'fr',nombre:'Français',es:'Francés',saludo:['Bienvenue','Bienvenido'],marca:['Français','Atelier de langue française'],
  U,RES,EXAM,HORAS,FUENTE,CAN,voz:'fr-FR',
  intro:'Francés de A1 a C2 con explicaciones propias para hispanohablantes, cuestionarios corregidos al instante, conjugador y enlaces a los recursos oficiales de TV5MONDE, RFI, France Éducation international, Le Point du FLE y Larousse.'};
})();
