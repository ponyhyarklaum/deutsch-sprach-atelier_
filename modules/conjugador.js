/* =====================================================================
   CONJUGADOR · alemán, inglés y francés (estilo cuaderno de conjugación)
   Motores propios, sin dependencias ni llamadas externas:
   - Alemán: a partir del repertorio verbal de la app (V: Präsens,
     Präteritum, Partizip II y auxiliar) se derivan los demás tiempos.
   - Inglés: reglas ortográficas (-s, -ing, -ed, duplicación) + tabla de
     irregulares; afirmativa, negativa e interrogativa.
   - Francés: tres grupos, cambios ortográficos (ç, ge, è, ll, tt, i),
     irregulares por familias (prendre → apprendre…), être / avoir,
     pronominales (se lever) y forma negativa.
   Las terminaciones se resaltan; las formas irregulares, en otro color.
   ===================================================================== */
(function(){
/* ============================ utilidades ============================ */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[’]/g,"'").replace(/\s+/g,' ').trim();
const VOC=/^[aeiouyhâàäéèêëîïôöûùü]/i;

/* ============================== INGLÉS ============================== */
const EN_IRR=('arise arose arisen|awake awoke awoken|be was been|bear bore borne|beat beat beaten|become became become|begin began begun|bend bent bent|bet bet bet|bind bound bound|bite bit bitten|bleed bled bled|blow blew blown|break broke broken|breed bred bred|bring brought brought|broadcast broadcast broadcast|build built built|burn burnt burnt|burst burst burst|buy bought bought|catch caught caught|choose chose chosen|cling clung clung|come came come|cost cost cost|creep crept crept|cut cut cut|deal dealt dealt|dig dug dug|do did done|draw drew drawn|dream dreamt dreamt|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed fed|feel felt felt|fight fought fought|find found found|flee fled fled|fly flew flown|forbid forbade forbidden|forecast forecast forecast|foresee foresaw foreseen|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got got|give gave given|go went gone|grind ground ground|grow grew grown|hang hung hung|have had had|hear heard heard|hide hid hidden|hit hit hit|hold held held|hurt hurt hurt|keep kept kept|kneel knelt knelt|know knew known|lay laid laid|lead led led|lean leant leant|learn learnt learnt|leave left left|lend lent lent|let let let|lie lay lain|light lit lit|lose lost lost|make made made|mean meant meant|meet met met|mislead misled misled|mistake mistook mistaken|misunderstand misunderstood misunderstood|overcome overcame overcome|overtake overtook overtaken|pay paid paid|prove proved proven|put put put|quit quit quit|read read read|rewrite rewrote rewritten|ride rode ridden|ring rang rung|rise rose risen|run ran run|say said said|see saw seen|seek sought sought|sell sold sold|send sent sent|set set set|sew sewed sewn|shake shook shaken|shine shone shone|shoot shot shot|show showed shown|shrink shrank shrunk|shut shut shut|sing sang sung|sink sank sunk|sit sat sat|sleep slept slept|slide slid slid|smell smelt smelt|speak spoke spoken|speed sped sped|spell spelt spelt|spend spent spent|spill spilt spilt|spin spun spun|spit spat spat|split split split|spoil spoilt spoilt|spread spread spread|spring sprang sprung|stand stood stood|steal stole stolen|stick stuck stuck|sting stung stung|stink stank stunk|strike struck struck|strive strove striven|swear swore sworn|sweep swept swept|swell swelled swollen|swim swam swum|swing swung swung|take took taken|teach taught taught|tear tore torn|tell told told|think thought thought|throw threw thrown|undergo underwent undergone|understand understood understood|undertake undertook undertaken|undo undid undone|upset upset upset|wake woke woken|wear wore worn|weave wove woven|weep wept wept|win won won|wind wound wound|withdraw withdrew withdrawn|withstand withstood withstood|write wrote written').split('|').map(x=>x.split(' '));
const EN_IRRI={}; EN_IRR.forEach(r=>EN_IRRI[r[0]]=r);
const EN_BRE={burnt:'burned',dreamt:'dreamed',leant:'leaned',learnt:'learned',smelt:'smelled',spelt:'spelled',spilt:'spilled',spoilt:'spoiled',knelt:'kneeled',proven:'proved',got:'gotten'};
const EN_DOBLE=new Set('admit begin commit compel control occur prefer refer regret permit forget submit transfer equip upset omit patrol propel rebel confer deter incur acquit expel excel emit forbid'.split(' '));
const EN_L=new Set('travel cancel label model level signal quarrel fuel marvel tunnel'.split(' '));
const sil=v=>(v.replace(/e$/,'').match(/[aeiouy]+/g)||[]).length;
function enDobla(v){
  if(EN_DOBLE.has(v)||EN_L.has(v)) return true;
  return sil(v)===1 && /[^aeiou][aeiou][bcdfgklmnprstvz]$/.test(v) && !/^(qu)/.test(v.slice(-3));
}
function en3(v){
  if(v==='have') return 'has'; if(v==='be') return 'is'; if(v==='do') return 'does'; if(v==='go') return 'goes';
  if(/(s|sh|ch|x|z|o)$/.test(v)) return v+'es';
  if(/[^aeiou]y$/.test(v)) return v.slice(0,-1)+'ies';
  return v+'s';
}
function enIng(v){
  if(v==='be') return 'being';
  if(/[^c]ic$/.test(v)) return v+'king';
  if(/ie$/.test(v)) return v.slice(0,-2)+'ying';
  if(/[^aeiouy]e$/.test(v)&&!/(ee|ye|oe)$/.test(v)) return v.slice(0,-1)+'ing';
  if(enDobla(v)) return v+v.slice(-1)+'ing';
  return v+'ing';
}
function enEd(v){
  if(/[^c]ic$/.test(v)) return v+'ked';
  if(/e$/.test(v)) return v+'d';
  if(/[^aeiou]y$/.test(v)) return v.slice(0,-1)+'ied';
  if(enDobla(v)) return v+v.slice(-1)+'ed';
  return v+'ed';
}
function enPartes(v){
  const r=EN_IRRI[v];
  if(r) return {past:r[1],pp:r[2],irr:true};
  return {past:enEd(v),pp:enEd(v),irr:false};
}
const EN_P=['I','you','he / she / it','we','you','they'];
const beP=i=>['am','are','is','are','are','are'][i], beS=i=>['was','were','was','were','were','were'][i], haveP=i=>i===2?'has':'have';
/* Cada tiempo devuelve una cadena de palabras: [auxiliares…, verbo] */
function enTiempos(v){
  const P=enPartes(v), ing=enIng(v), be=v==='be';
  const sx=i=>i===2?en3(v):(be?beP(i):v);
  return [
   ['Present simple','indic',i=>be?[beP(i)]:{simple:true,form:sx(i),aux:i===2?'does':'do'}],
   ['Present continuous','indic',i=>[beP(i),ing]],
   ['Past simple','indic',i=>be?[beS(i)]:{simple:true,form:P.past,aux:'did'}],
   ['Past continuous','indic',i=>[beS(i),ing]],
   ['Present perfect','indic',i=>[haveP(i),P.pp]],
   ['Present perfect continuous','indic',i=>[haveP(i),'been',ing]],
   ['Past perfect','indic',i=>['had',P.pp]],
   ['Past perfect continuous','indic',i=>['had','been',ing]],
   ['Future (will)','fut',i=>['will',v]],
   ['Future (be going to)','fut',i=>[beP(i),'going to',v]],
   ['Future continuous','fut',i=>['will','be',ing]],
   ['Future perfect','fut',i=>['will','have',P.pp]],
   ['Conditional (would)','cond',i=>['would',v]],
   ['Conditional continuous','cond',i=>['would','be',ing]],
   ['Conditional perfect','cond',i=>['would','have',P.pp]],
   ['Passive · present','pas',i=>[beP(i),P.pp]],
   ['Passive · past','pas',i=>[beS(i),P.pp]],
   ['Passive · present perfect','pas',i=>[haveP(i),'been',P.pp]],
   ['Passive · future','pas',i=>['will','be',P.pp]]
  ];
}
const EN_NEG={am:"'m not",is:"isn't",are:"aren't",was:"wasn't",were:"weren't",do:"don't",does:"doesn't",did:"didn't",have:"haven't",has:"hasn't",had:"hadn't",will:"won't",would:"wouldn't"};
const EN_MOD=new Set('can could may might must shall should will would ought need dare'.split(' '));
function enLinea(v,t,i,pol){
  const r=t[2](i), S=EN_P[i];
  if(!Array.isArray(r)){
    if(pol==='af') return [S,{w:r.form}];
    if(pol==='neg') return [S,EN_NEG[r.aux],{w:v}];
    return [cap(r.aux),S,{w:v},'?'];
  }
  const w=r.slice(), main=w.pop(), M={w:main};
  if(!w.length){
    if(pol==='af') return [S,M];
    if(pol==='neg') return i===0?['I',M,'not']:[S,{w:EN_NEG[main]}];
    return [{w:cap(main)},S,'?'];
  }
  const a=w.shift();
  if(pol==='af') return [S,a,...w,M];
  if(pol==='neg') return (i===0&&a==='am')?['I','am not',...w,M]:[S,EN_NEG[a]||a+' not',...w,M];
  return [cap(a),S,...w,M,'?'];
}
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);

/* ============================== FRANCÉS ============================== */
/* Especificaciones de irregulares. Clave = sufijo de familia:
   apprendre usa «prendre» con el prefijo «ap». pr: presente;
   fu: raíz de futuro; ps: [raíz, tipo a|i|u|in]; pp: participio;
   sj: subjuntivo [raíz 1, raíz 2] cuando no sale de ils / nous;
   ip: imperativo; ppr: participio presente; im: raíz de imparfait. */
const FR_IRR={
 'être':{pr:'suis es est sommes êtes sont',fu:'ser',ps:['f','u'],pp:'été',im:'ét',sjf:'sois sois soit soyons soyez soient',ip:'sois soyons soyez',ppr:'étant'},
 'avoir':{pr:'ai as a avons avez ont',fu:'aur',ps:['e','u'],pp:'eu',sjf:'aie aies ait ayons ayez aient',ip:'aie ayons ayez',ppr:'ayant'},
 'aller':{pr:'vais vas va allons allez vont',fu:'ir',ps:['all','a'],pp:'allé',sj:['aill','all'],ip:'va allons allez'},
 'faire':{pr:'fais fais fait faisons faites font',fu:'fer',ps:['f','i'],pp:'fait',sj:['fass','fass']},
 'dire':{pr:'dis dis dit disons dites disent',fu:'dir',ps:['d','i'],pp:'dit'},
 'pouvoir':{pr:'peux peux peut pouvons pouvez peuvent',fu:'pourr',ps:['p','u'],pp:'pu',sj:['puiss','puiss'],ip:'-'},
 'vouloir':{pr:'veux veux veut voulons voulez veulent',fu:'voudr',ps:['voul','u'],pp:'voulu',sj:['veuill','voul'],ip:'veuille veuillons veuillez'},
 'savoir':{pr:'sais sais sait savons savez savent',fu:'saur',ps:['s','u'],pp:'su',sj:['sach','sach'],ip:'sache sachons sachez',ppr:'sachant'},
 'devoir':{pr:'dois dois doit devons devez doivent',fu:'devr',ps:['d','u'],pp:'dû'},
 'valoir':{pr:'vaux vaux vaut valons valez valent',fu:'vaudr',ps:['val','u'],pp:'valu',sj:['vaill','val']},
 'falloir':{imp:1,pr:'- - faut - - -',fu:'faudr',ps:['fall','u'],pp:'fallu',sj:['faill','faill'],im:'fall',ip:'-',ppr:'-'},
 'pleuvoir':{imp:1,pr:'- - pleut - - -',fu:'pleuvr',ps:['pl','u'],pp:'plu',sj:['pleuv','pleuv'],im:'pleuv',ip:'-',ppr:'pleuvant'},
 'voir':{pr:'vois vois voit voyons voyez voient',fu:'verr',ps:['v','i'],pp:'vu'},
 'croire':{pr:'crois crois croit croyons croyez croient',fu:'croir',ps:['cr','u'],pp:'cru'},
 'boire':{pr:'bois bois boit buvons buvez boivent',fu:'boir',ps:['b','u'],pp:'bu'},
 'lire':{pr:'lis lis lit lisons lisez lisent',fu:'lir',ps:['l','u'],pp:'lu'},
 'crire':{pr:'cris cris crit crivons crivez crivent',fu:'crir',ps:['criv','i'],pp:'crit'},
 'vivre':{pr:'vis vis vit vivons vivez vivent',fu:'vivr',ps:['véc','u'],pp:'vécu'},
 'suivre':{pr:'suis suis suit suivons suivez suivent',fu:'suivr',ps:['suiv','i'],pp:'suivi'},
 'naître':{pr:'nais nais naît naissons naissez naissent',fu:'naîtr',ps:['naqu','i'],pp:'né'},
 'aître':{pr:'ais ais aît aissons aissez aissent',fu:'aîtr',ps:['','u'],pp:'u',fam:1},
 'mourir':{pr:'meurs meurs meurt mourons mourez meurent',fu:'mourr',ps:['mour','u'],pp:'mort'},
 'courir':{pr:'cours cours court courons courez courent',fu:'courr',ps:['cour','u'],pp:'couru'},
 'cevoir':{pr:'çois çois çoit cevons cevez çoivent',fu:'cevr',ps:['ç','u'],pp:'çu'},
 'rire':{pr:'ris ris rit rions riez rient',fu:'rir',ps:['r','i'],pp:'ri'},
 'plaire':{pr:'plais plais plaît plaisons plaisez plaisent',fu:'plair',ps:['pl','u'],pp:'plu'},
 'envoyer':{pr:'envoie envoies envoie envoyons envoyez envoient',fu:'enverr',ps:['envoy','a'],pp:'envoyé',er:1},
 'fuir':{pr:'fuis fuis fuit fuyons fuyez fuient',fu:'fuir',ps:['fu','i'],pp:'fui'},
 'battre':{pr:'bats bats bat battons battez battent',fu:'battr',ps:['batt','i'],pp:'battu'},
 'mettre':{pr:'mets mets met mettons mettez mettent',fu:'mettr',ps:['m','i'],pp:'mis'},
 'prendre':{pr:'prends prends prend prenons prenez prennent',fu:'prendr',ps:['pr','i'],pp:'pris'},
 'venir':{pr:'viens viens vient venons venez viennent',fu:'viendr',ps:['v','in'],pp:'venu'},
 'tenir':{pr:'tiens tiens tient tenons tenez tiennent',fu:'tiendr',ps:['t','in'],pp:'tenu'},
 'vrir':{pr:'vre vres vre vrons vrez vrent',fu:'vrir',ps:['vr','i'],pp:'vert',er:1},
 'frir':{pr:'fre fres fre frons frez frent',fu:'frir',ps:['fr','i'],pp:'fert',er:1},
 'uire':{pr:'uis uis uit uisons uisez uisent',fu:'uir',ps:['uis','i'],pp:'uit'},
 'indre':{pr:'ins ins int ignons ignez ignent',fu:'indr',ps:['ign','i'],pp:'int'},
 'partir':{pr:'pars pars part partons partez partent',fu:'partir',ps:['part','i'],pp:'parti'},
 'sortir':{pr:'sors sors sort sortons sortez sortent',fu:'sortir',ps:['sort','i'],pp:'sorti'},
 'dormir':{pr:'dors dors dort dormons dormez dorment',fu:'dormir',ps:['dorm','i'],pp:'dormi'},
 'sentir':{pr:'sens sens sent sentons sentez sentent',fu:'sentir',ps:['sent','i'],pp:'senti'},
 'servir':{pr:'sers sers sert servons servez servent',fu:'servir',ps:['serv','i'],pp:'servi'},
 'mentir':{pr:'mens mens ment mentons mentez mentent',fu:'mentir',ps:['ment','i'],pp:'menti'},
 'asseoir':{pr:'assieds assieds assied asseyons asseyez asseyent',fu:'assiér',ps:['ass','i'],pp:'assis'},
 'acquérir':{pr:'acquiers acquiers acquiert acquérons acquérez acquièrent',fu:'acquerr',ps:['acqu','i'],pp:'acquis'},
 'vaincre':{pr:'vaincs vaincs vainc vainquons vainquez vainquent',fu:'vaincr',ps:['vainqu','i'],pp:'vaincu'},
 'cueillir':{pr:'cueille cueilles cueille cueillons cueillez cueillent',fu:'cueiller',ps:['cueill','i'],pp:'cueilli',er:1},
 'haïr':{pr:'hais hais hait haïssons haïssez haïssent',fu:'haïr',ps:['ha','ï'],pp:'haï'}
};
const FR_KEYS=Object.keys(FR_IRR).sort((a,b)=>b.length-a.length);
/* Verbos con être en los tiempos compuestos (más todos los pronominales) */
const FR_ETRE=new Set('aller venir devenir revenir parvenir intervenir survenir arriver partir repartir sortir entrer rentrer monter remonter descendre redescendre naître renaître mourir décéder rester tomber retomber retourner apparaître'.split(' '));
const FR_DOBLE=new Set('appeler rappeler jeter rejeter projeter épeler renouveler feuilleter étinceler ficeler'.split(' '));
const PRON=['je','tu','il / elle / on','nous','vous','ils / elles'];
const REFL=['me','te','se','nous','vous','se'];

function frOrtER(st,end,mute,fut){
  /* st = raíz del infinitivo en -er; end = terminación; mute = terminación muda */
  let s=st;
  if(/[aâoô]/.test(end.charAt(0))){ if(/c$/.test(s)) s=s.slice(0,-1)+'ç'; else if(/g$/.test(s)) s=s+'e'; }
  if(mute){
    if(/[ou]y$/.test(s)||/ay$/.test(s)) s=s.slice(0,-1)+'i';
    else if(FR_DOBLE.has(st+'er')) s=s+s.slice(-1);
    else if(/e([^aeiouyéèê]|[^aeiouyéèê][rl])$/.test(s)&&s.slice(-1)!==s.slice(-2,-1)) s=s.replace(/e([^aeiouyéèê]{1,2})$/,'è$1');
    else if(/é([^aeiouyéèê]|[^aeiouyéèê][rl]|gu|qu)$/.test(s)&&!fut) s=s.replace(/é([^aeiouyéèê]{1,2}|gu|qu)$/,'è$1');
  }
  return s+end;
}
function frEtapa(st,mute){ return frOrtER(st,'',mute,true); }
function frAnaliza(inf){
  let pron=false, v=inf.trim().toLowerCase().replace(/’/g,"'");
  if(/^s'/.test(v)){ pron=true; v=v.slice(2); } else if(/^se /.test(v)){ pron=true; v=v.slice(3); }
  return {v,pron};
}
function frSpec(v){
  for(const k of FR_KEYS){ if(v.endsWith(k)){ const pre=v.slice(0,v.length-k.length);
    if(k==='voir'&&/(pou|de|sa|va|ce)$/.test(pre)) continue;
    if(k==='naître'&&!/^(re)?$/.test(pre)) continue;
    let S=FR_IRR[k];
    if(k==='dire'&&pre&&pre!=='re') S=Object.assign({},S,{pr:'dis dis dit disons disez disent'});
    return {k,pre,s:S}; } }
  return null;
}
function frConj(inf){
  const {v,pron}=frAnaliza(inf);
  if(!/(er|ir|re|ïr)$/.test(v)) return null;
  const sp=frSpec(v);
  let pres, fut, ps, pp, cls, imSt=null, sjf=null, sj=null, ip=null, ppr=null, irr=!!sp, imp=false;
  if(sp){
    const P=sp.pre, S=sp.s, add=x=>x==='-'?'-':P+x;
    pres=S.pr.split(' ').map(add); fut=add(S.fu); ps=[P+S.ps[0],S.ps[1]]; pp=P+S.pp;
    if(S.im) imSt=P+S.im; if(S.sjf) sjf=S.sjf.split(' ').map(add); if(S.sj) sj=S.sj.map(add);
    if(S.ip) ip=S.ip==='-'?'-':S.ip.split(' ').map(add); if(S.ppr) ppr=S.ppr==='-'?'-':P+S.ppr;
    cls=S.er?'er-like':'irr'; imp=!!S.imp;
  } else if(/er$/.test(v)){
    const st=v.slice(0,-2); cls='er';
    pres=['e','es','e','ons','ez','ent'].map((e,i)=>frOrtER(st,e,[0,1,2,5].includes(i)));
    fut=frEtapa(st,true)+'er';
    ps=[st,'a']; pp=st+'é';
  } else if(/ir$/.test(v)){
    const st=v.slice(0,-2); cls='ir';
    pres=['is','is','it','issons','issez','issent'].map(e=>st+e); fut=v; ps=[st,'i']; pp=st+'i';
  } else {
    const st=v.slice(0,-2); cls='re';
    pres=['s','s','','ons','ez','ent'].map(e=>st+e); fut=v.slice(0,-1); ps=[st,'i']; pp=st+'u';
  }
  const er=cls==='er';
  const im=imSt||(pres[3]!=='-'?pres[3].replace(/ons$/,''):pres[2]);
  const imEnd=['ais','ais','ait','ions','iez','aient'];
  const imparfait=imEnd.map(e=>er?frOrtER(v.slice(0,-2),e,false):im+e);
  const futur=['ai','as','a','ons','ez','ont'].map(e=>fut+e);
  const cond=imEnd.map(e=>fut+e);
  const PS={a:['ai','as','a','âmes','âtes','èrent'],i:['is','is','it','îmes','îtes','irent'],u:['us','us','ut','ûmes','ûtes','urent'],in:['ins','ins','int','înmes','întes','inrent'],'ï':['ïs','ïs','ït','ïmes','ïtes','ïrent']};
  const passeSimple=PS[ps[1]].map(e=>er?frOrtER(ps[0],e,false):ps[0]+e);
  const SI={a:['asse','asses','ât','assions','assiez','assent'],i:['isse','isses','ît','issions','issiez','issent'],u:['usse','usses','ût','ussions','ussiez','ussent'],in:['insse','insses','înt','inssions','inssiez','inssent'],'ï':['ïsse','ïsses','ït','ïssions','ïssiez','ïssent']};
  const subjImp=SI[ps[1]].map(e=>er?frOrtER(ps[0],e,false):ps[0]+e);
  let subj;
  if(sjf) subj=sjf;
  else {
    const s1=sj?sj[0]:(pres[5]!=='-'?pres[5].replace(/ent$/,''):null);
    const s2=sj?sj[1]:im;
    subj=['e','es','e','ions','iez','ent'].map((e,i)=>{
      if(er&&!sj) return [3,4].includes(i)?frOrtER(v.slice(0,-2),e,false):frOrtER(v.slice(0,-2),e,true);
      return ([3,4].includes(i)?s2:s1)+e; });
  }
  let impv;
  if(ip==='-'||imp) impv=null;
  else if(ip) impv=ip;
  else impv=[pres[1].replace(/s$/,(er||cls==='er-like')?'':'s'),pres[3],pres[4]];
  const partPres=ppr==='-'?null:(ppr||(er?frOrtER(v.slice(0,-2),'ant',false):im+'ant'));
  const aux=(pron||FR_ETRE.has(v))?'être':'avoir';
  return {v,pron,irr,cls,imp,pres,imparfait,futur,cond,passeSimple,subj,subjImp,impv,pp,partPres,aux,raiz:v.slice(0,-2)};
}
const FR_AUX={};
function frAux(a){ if(!FR_AUX[a]) FR_AUX[a]=frConj(a); return FR_AUX[a]; }
function frSuj(i,form,que){
  const p=['je','tu','il','nous','vous','ils'][i];
  const s=(p==='je'&&VOC.test(form))?"j'":p+' ';
  if(!que) return s;
  return (/^[ie]/.test(s)?"qu'":'que ')+s;
}
function frRefl(i,form){ const r=REFL[i]; return ([0,1,2,5].includes(i)&&VOC.test(form))?r.charAt(0)+"'":r+' '; }
function frTiempos(C){
  const A=frAux(C.aux), et=C.aux==='être';
  const ag=i=>et?(i<3?'(e)':'(e)s'):'';
  const simple=(arr,que)=>i=>({pre:frSuj(i,C.pron?REFL[i]:arr[i],que),refl:C.pron,f:arr[i]});
  const comp=(auxArr,que)=>i=>({pre:frSuj(i,C.pron?REFL[i]:auxArr[i],que),refl:C.pron,aux:auxArr[i],f:C.pp,ag:ag(i)});
  return [
   ['Présent','Indicatif',simple(C.pres)],['Imparfait','Indicatif',simple(C.imparfait)],
   ['Passé composé','Indicatif',comp(A.pres)],['Plus-que-parfait','Indicatif',comp(A.imparfait)],
   ['Futur simple','Indicatif',simple(C.futur)],['Futur antérieur','Indicatif',comp(A.futur)],
   ['Passé simple','Indicatif',simple(C.passeSimple)],['Passé antérieur','Indicatif',comp(A.passeSimple)],
   ['Présent','Conditionnel',simple(C.cond)],['Passé','Conditionnel',comp(A.cond)],
   ['Présent','Subjonctif',simple(C.subj,true)],['Passé','Subjonctif',comp(A.subj,true)],
   ['Imparfait','Subjonctif',simple(C.subjImp,true)],['Plus-que-parfait','Subjonctif',comp(A.subjImp,true)]
  ];
}
function frRender(o,i,neg){
  /* o: {pre, refl, aux?, f, ag} → HTML con terminación resaltada */
  let pre=o.pre, que='';
  const m=pre.match(/^(que |qu')/); if(m){ que=m[1]; pre=pre.slice(m[1].length); }
  const first=o.aux||o.f;
  let refl=o.refl?frRefl(i,first):'';
  const verb=o.aux?esc(o.aux)+' '+o.mark:o.mark;
  if(!neg) return esc(que+pre+refl)+verb+(o.ag?'<i class="cj-ag">'+o.ag+'</i>':'');
  const ne=(refl?(VOC.test(refl)?"n'":'ne '):(VOC.test(first)?"n'":'ne '));
  if(pre==="j'") pre='je ';
  if(o.aux) return esc(que+pre+ne+refl)+esc(o.aux)+' pas '+o.mark+(o.ag?'<i class="cj-ag">'+o.ag+'</i>':'');
  return esc(que+pre+ne+refl)+o.mark+' pas';
}

/* ============================== ALEMÁN ============================== */
const UML={a:'ä',o:'ö',u:'ü',A:'Ä',O:'Ö',U:'Ü'};
function deInfo(v){
  const pr=v.pr.split('|'), pt=v.pt.split('|');
  const m=pr[0].match(/ (\S+)$/), pref=m?m[1]:'';
  const base=pref?v.i.slice(pref.length):v.i;
  const strip=x=>pref?x.replace(new RegExp(' '+pref+'$'),''):x;
  return {pref,base,pr:pr.map(strip),pt:pt.map(strip)};
}
const DE_PRON=['ich','du','er / sie / es','wir','ihr','sie / Sie'];
const SYN={sein:'wäre wär(e)st wäre wären wär(e)t wären',haben:'hätte hättest hätte hätten hättet hätten',werden:'würde würdest würde würden würdet würden',
 können:'könnte könntest könnte könnten könntet könnten',müssen:'müsste müsstest müsste müssten müsstet müssten',dürfen:'dürfte dürftest dürfte dürften dürftet dürften',
 mögen:'möchte möchtest möchte möchten möchtet möchten',wollen:'wollte wolltest wollte wollten wolltet wollten',sollen:'sollte solltest sollte sollten solltet sollten',
 wissen:'wüsste wüsstest wüsste wüssten wüsstet wüssten'};
const DE_K2X=new Set(['helfen','stehen','sterben','werfen','beginnen','schwimmen','gewinnen','verderben','empfehlen']);
function deK2(v,I){
  if(SYN[v.i]) return SYN[v.i].split(' ');
  if(v.k!=='str'||DE_K2X.has(I.base)) return null;
  let st=I.pt[0];
  st=st.replace(/au/,'äu'); if(st===I.pt[0]) st=st.replace(/[aou]/,c=>UML[c]);
  const e=/e$/.test(st)?'':'e';
  return [st+e,st+e+'st',st+e,st+e+'n',st+e+'t',st+e+'n'].map(x=>x.replace(/ee/,'e'));
}
function deK1(v,I){
  if(v.i==='sein') return ['sei','sei(e)st','sei','seien','seiet','seien'];
  const b=I.base; let st=b.replace(/e?n$/,'');
  if(/(el|er)n$/.test(b)) return ['e','st','e','n','t','n'].map(e=>b.slice(0,-1)+e);
  return ['e','est','e','en','et','en'].map(e=>st+e);
}
function deImp(v,I){
  if(v.k==='mod') return null;
  if(v.i==='sein') return ['sei','seid','seien Sie'];
  if(v.i==='haben') return ['hab(e)','habt','haben Sie'];
  if(v.i==='werden') return ['werde','werdet','werden Sie'];
  const st=I.base.replace(/e?n$/,''); let du=I.pr[1];
  if(/ä|ö/.test(du)&&!/ä|ö/.test(st)) du=st;
  else if(/(s|ß|z|x)$/.test(st)&&/t$/.test(du)) du=du.slice(0,-1);
  else if(/est$/.test(du)) du=du.slice(0,-3)+'e';
  else du=du.replace(/s?t$/,'');
  const p=I.pref?' '+I.pref:'';
  return [du+p,I.pr[4]+p,I.base+' Sie'+p];
}
function deTiempos(v){
  const I=deInfo(v), p=I.pref?' '+I.pref:'';
  const aux=v.a==='s'?'sein':'haben';
  const AP={sein:'bin bist ist sind seid sind',haben:'habe hast hat haben habt haben'}[aux].split(' ');
  const AT={sein:'war warst war waren wart waren',haben:'hatte hattest hatte hatten hattet hatten'}[aux].split(' ');
  const AK={sein:'wäre wär(e)st wäre wären wär(e)t wären',haben:'hätte hättest hätte hätten hättet hätten'}[aux].split(' ');
  const W='werde wirst wird werden werdet werden'.split(' '), WU='würde würdest würde würden würdet würden'.split(' ');
  const k2=deK2(v,I), k1=deK1(v,I);
  const T=[
   ['Präsens','Indikativ',i=>({f:I.pr[i],tail:p})],
   ['Präteritum','Indikativ',i=>({f:I.pt[i],tail:p})],
   ['Perfekt','Indikativ',i=>({aux:AP[i],f:v.pp})],
   ['Plusquamperfekt','Indikativ',i=>({aux:AT[i],f:v.pp})],
   ['Futur I','Indikativ',i=>({aux:W[i],f:v.i})],
   ['Futur II','Indikativ',i=>({aux:W[i],f:v.pp+' '+aux})],
   ['Konjunktiv II','Konjunktiv',i=>k2?({f:k2[i],tail:p,alt:WU[i]+' '+v.i}):({aux:WU[i],f:v.i})],
   ['Konjunktiv II · Vergangenheit','Konjunktiv',i=>({aux:AK[i],f:v.pp})],
   ['Konjunktiv I','Konjunktiv',i=>({f:k1[i],tail:p})]
  ];
  if(v.a==='h'&&!['aux','mod'].includes(v.k)) T.push(['Passiv · Präsens','Passiv',i=>({aux:W[i],f:v.pp})],['Passiv · Präteritum','Passiv',i=>({aux:'wurde wurdest wurde wurden wurdet wurden'.split(' ')[i],f:v.pp})],['Passiv · Perfekt','Passiv',i=>({aux:AP[i].replace(/^ha.*/,x=>({habe:'bin',hast:'bist',hat:'ist',haben:'sind',habt:'seid'})[x]||x),f:v.pp+' worden'})]);
  return {I,T,imp:deImp(v,I),aux};
}
/* Passiv Perfekt siempre con sein */
function dePasPerf(i){ return 'bin bist ist sind seid sind'.split(' ')[i]; }

/* ============================ resaltado ============================ */
function marca(form,stem,irr){
  if(!form) return '—';
  stem=stem||'';
  if(!irr&&stem&&form.startsWith(stem)) return esc(stem)+(form.length>stem.length?'<em>'+esc(form.slice(stem.length))+'</em>':'');
  let k=0; while(k<form.length&&k<stem.length&&form[k]===stem[k]) k++;
  if(k>0&&(!irr||k>=Math.min(3,stem.length))) return esc(form.slice(0,k))+(k<form.length?'<em>'+esc(form.slice(k))+'</em>':'');
  return '<em class="cj-irr">'+esc(form)+'</em>';
}

/* ============================== ESPAÑOL ============================== */
/* Personas: yo, tú, vos, él/usted, nosotros, vosotros, ellos/ustedes.
   Clases: regulares -ar/-er/-ir; cambio vocálico (ie, ue, i, jugar, adquirir);
   -zc (conocer), -uir (construir), -iar/-uar acentuados (enviar, continuar);
   ortografía (c/qu, g/gu, z/c, g/j, gu/g, c/z) e irregulares por familias. */
const ES_P=['yo','tú','vos','él / ella / usted','nosotros','vosotros','ellos / ustedes'];
const ES_REFL=['me','te','te','se','nos','os','se'];
const ES_IE=new Set('pensar cerrar empezar comenzar despertar entender perder querer preferir sentir mentir divertir convertir recomendar sentar negar nevar calentar defender encender gobernar atravesar fregar regar merendar apretar confesar tender extender advertir consentir herir hervir sugerir referir requerir invertir digerir ascender descender'.split(' '));
const ES_UE=new Set('poder volver dormir morir contar encontrar recordar mostrar probar soñar costar mover llover devolver resolver envolver almorzar acostar volar sonar torcer doler morder colgar rogar soltar aprobar comprobar demostrar renovar forzar promover remover'.split(' '));
const ES_I=new Set('pedir servir repetir seguir vestir medir reír sonreír freír elegir corregir despedir conseguir competir impedir perseguir rendir gemir teñir'.split(' '));
const ES_ACC=new Set('enviar confiar guiar variar criar desviar ampliar esquiar fotografiar vaciar continuar actuar graduar evaluar situar acentuar efectuar habituar insinuar'.split(' '));
/* irregulares: pr = presente (yo tú vos él nos vos ellos), pt = raíz fuerte o lista, fu = raíz de futuro,
   sj = raíz de subjuntivo, im = imperativo tú, pp = participio, ge = gerundio */
const ES_IRR={
 ser:{pr:'soy eres sos es somos sois son',pt:'fui fuiste fuiste fue fuimos fuisteis fueron',ii:'era',sj:'se',im:'sé',ge:'siendo'},
 estar:{pr:'estoy estás estás está estamos estáis están',pt:'estuv',sjf:'esté estés estés esté estemos estéis estén'},
 ir:{pr:'voy vas vas va vamos vais van',pt:'fui fuiste fuiste fue fuimos fuisteis fueron',ii:'iba',sj:'vay',im:'ve',ge:'yendo',imvos:'andá',imvo:'id'},
 haber:{pr:'he has has ha hemos habéis han',pt:'hub',fu:'habr',sj:'hay'},
 dar:{pr:'doy das das da damos dais dan',pt:'di diste diste dio dimos disteis dieron',sjf:'dé des des dé demos deis den'},
 ver:{pr:'veo ves ves ve vemos veis ven',pt:'vi viste viste vio vimos visteis vieron',ii:'veía',pp:'visto'},
 saber:{pr:'sé sabes sabés sabe sabemos sabéis saben',pt:'sup',fu:'sabr',sj:'sep'},
 caber:{pr:'quepo cabes cabés cabe cabemos cabéis caben',pt:'cup',fu:'cabr',sj:'quep'},
 poder:{pt:'pud',fu:'podr',ge:'pudiendo'},
 querer:{pt:'quis',fu:'querr'},
 tener:{pr:'tengo tienes tenés tiene tenemos tenéis tienen',pt:'tuv',fu:'tendr',im:'ten'},
 venir:{pr:'vengo vienes venís viene venimos venís vienen',pt:'vin',fu:'vendr',im:'ven',ge:'viniendo'},
 poner:{pr:'pongo pones ponés pone ponemos ponéis ponen',pt:'pus',fu:'pondr',im:'pon',pp:'puesto'},
 hacer:{pr:'hago haces hacés hace hacemos hacéis hacen',pt:'hic',fu:'har',im:'haz',pp:'hecho'},
 satisfacer:{pr:'satisfago satisfaces satisfacés satisface satisfacemos satisfacéis satisfacen',pt:'satisfic',fu:'satisfar',im:'satisfaz',pp:'satisfecho'},
 decir:{pr:'digo dices decís dice decimos decís dicen',pt:'dij',fu:'dir',im:'di',pp:'dicho',ge:'diciendo'},
 traer:{pr:'traigo traes traés trae traemos traéis traen',pt:'traj'},
 salir:{pr:'salgo sales salís sale salimos salís salen',fu:'saldr',im:'sal'},
 valer:{pr:'valgo vales valés vale valemos valéis valen',fu:'valdr'},
 caer:{pr:'caigo caes caés cae caemos caéis caen'},
 'oír':{pr:'oigo oyes oís oye oímos oís oyen'},
 'reír':{pr:'río ríes reís ríe reímos reís ríen',pt:'reí reíste reíste rió reímos reísteis rieron',sjf:'ría rías rías ría riamos riáis rían',ge:'riendo',pp:'reído',im:'ríe'},
 andar:{pt:'anduv'},
 ducir:{pr:'duzco duces ducís duce ducimos ducís ducen',pt:'duj'},
 escribir:{pp:'escrito'}, abrir:{pp:'abierto'}, romper:{pp:'roto'}, cubrir:{pp:'cubierto'}, imprimir:{pp:'impreso'}, freír:{pp:'frito'}
};
const ES_KEYS=Object.keys(ES_IRR).sort((a,b)=>b.length-a.length);
const ES_V=/[aeiouáéíóú]/;
function esFam(v){
  for(const k of ES_KEYS){ if(v.endsWith(k)){ const pre=v.slice(0,v.length-k.length);
    if(k==='ir'&&pre) continue; if(k==='ser'&&pre) continue; if(k==='dar'&&pre) continue; if(k==='ver'&&pre&&!/^(pre|re|entre)$/.test(pre)) continue;
    if(k==='hacer'&&pre&&!/^(re|des|contra)$/.test(pre)) continue; if(k==='haber'&&pre) continue; if(k==='saber'&&pre) continue;
    if(k==='andar'&&pre) continue; if(k==='salir'&&pre&&pre!=='sobre') continue; if(k==='estar'&&pre) continue;
    return {k,pre,s:ES_IRR[k]}; } }
  return null;
}
const ACC={a:'á',e:'é',i:'í',o:'ó',u:'ú'}, DES={'á':'a','é':'e','í':'i','ó':'o','ú':'u'};
const quitaTilde=s=>s.replace(/[áéíóú]/g,c=>DES[c]);
/* sílaba tónica aproximada: devuelve el índice de la vocal que lleva el acento */
function tonica(w){
  const m=w.match(/[áéíóú]/); if(m) return w.indexOf(m[0]);
  const grupos=[]; const re=/[aeiouü]+/g; let x; while((x=re.exec(w))) grupos.push([x.index,x[0]]);
  if(!grupos.length) return -1;
  const llana=/[aeiouns]$/.test(w);
  const g=grupos[llana&&grupos.length>1?grupos.length-2:grupos.length-1];
  const fuerte=g[1].search(/[aeo]/);
  return g[0]+(fuerte>=0?fuerte:g[1].length-1);
}
/* añade enclíticos y ajusta la tilde (dímelo, levántate, levantaos) */
function enclitico(f,cl){
  if(!cl) return f;
  const i=tonica(f); const base=quitaTilde(f);
  const w=base+cl;
  const llanaNueva=w.length; // tras añadir clíticos, la forma suele ser esdrújula: marcar la vocal tónica original
  const sil=(base.match(/[aeiouü]+/g)||[]).length;
  if(sil<=1&&cl.length<=2&&!/[áéíóú]/.test(f)) return w;          // da + me = dame
  if(i<0) return w;
  const v=w[i]; return w.slice(0,i)+(ACC[v]||v)+w.slice(i+1);
}
function esConj(inf){
  let v=inf.trim().toLowerCase(), pron=false;
  if(/se$/.test(v)&&/(ar|er|ir|ír)se$/.test(v)){ pron=true; v=v.slice(0,-2); }
  if(!/(ar|er|ir|ír)$/.test(v)) return null;
  const F=esFam(v), S=F?F.s:{}, P=F?F.pre:'', add=x=>x==null?null:(Array.isArray(x)?x.map(y=>P+y):P+x);
  const cl=/ar$/.test(v)?'ar':/er$/.test(v)?'er':'ir';
  const st=v.slice(0,-2), irr=!!(F&&(S.pr||S.pt||S.fu||S.ii||S.sj||S.sjf)), base=F?F.k:v;
  const tipo=ES_IE.has(base)||ES_IE.has(v)?'ie':ES_UE.has(base)||ES_UE.has(v)?'ue':ES_I.has(base)||ES_I.has(v)?'i':v==='jugar'?'jug':/quirir$/.test(v)?'iie':null;
  const prot=s=>s.replace(/gu$/,'G').replace(/qu$/,'Q'), desp=s=>s.replace(/G$/,'gu').replace(/Q$/,'qu');
  const cambia=(s0)=>{ // cambio en la última vocal de la raíz
    if(!tipo) return s0; const s=prot(s0);
    const re=tipo==='ue'?/o(?=[^aeiou]*$)/:tipo==='jug'?/u(?=[^aeiou]*$)/:/e(?=[^aeiou]*$)/;
    if(tipo==='iie') return desp(s.replace(/i(?=[^aeiou]*$)/,'ie'));
    return desp(s.replace(re,{ie:'ie',ue:'ue',i:'i',jug:'ue'}[tipo]).replace(/^ue/,'hue'));
  };
  const debil=(s0)=>{ // e→i, o→u en -ir con cambio (pidió, durmió)
    if(cl!=='ir'||!tipo||tipo==='jug'||tipo==='iie') return s0; const s=prot(s0);
    return desp(tipo==='ue'?s.replace(/o(?=[^aeiou]*$)/,'u'):s.replace(/e(?=[^aeiou]*$)/,'i'));
  };
  const orto=(s,e)=>{ // ortografía ante e / a / o
    const f=e.charAt(0);
    if(/[eé]/.test(f)){ if(/c$/.test(s)&&cl==='ar') return s.slice(0,-1)+'qu'; if(/g$/.test(s)&&cl==='ar') return s+'u'; if(/z$/.test(s)) return s.slice(0,-1)+'c'; if(/gu$/.test(s)&&cl==='ar') return s.slice(0,-2)+'gü'; }
    if(/[aoáó]/.test(f)&&cl!=='ar'){ if(/g$/.test(s)) return s.slice(0,-1)+'j'; if(/gu$/.test(s)) return s.slice(0,-2)+'g'; if(/qu$/.test(s)) return s.slice(0,-2)+'c'; if(/[^aeiou]c$/.test(s)) return s.slice(0,-1)+'z'; if(/[aeiou]c$/.test(s)&&!S.pr&&v!=='hacer'&&!/(mecer|cocer)$/.test(v)) return s.slice(0,-1)+'zc'; }
    return s;
  };
  const y=/[aeo]ír?$|[aeo]er$|uir$/.test(v)&&!/guir$|quir$|eír$/.test(v); // leer, caer, oír, construir…
  const uir=/[^gq]uir$/.test(v);
  /* ---- presente ---- */
  const PE={ar:['o','as','ás','a','amos','áis','an'],er:['o','es','és','e','emos','éis','en'],ir:['o','es','ís','e','imos','ís','en']}[cl];
  let pres;
  if(S.pr) pres=add(S.pr.split(' '));
  else pres=PE.map((e,i)=>{
    const tonicaRaiz=[0,1,3,6].includes(i);
    let s=st;
    if(tonicaRaiz){ s=cambia(s); if(ES_ACC.has(v)) s=s.replace(/([iu])$/,c=>ACC[c]); if(uir) s=s+'y'; }
    if(i===0&&uir) s=st+'y';
    return orto(s,e)+e;
  });
  /* ---- pretérito perfecto simple ---- */
  let pret;
  if(S.pt&&S.pt.indexOf(' ')>0) pret=add(S.pt.split(' '));
  else if(S.pt){ const r=P+S.pt, j=/j$/.test(r);
    pret=['e','iste','iste','o','imos','isteis',j?'eron':'ieron'].map(e=>r+e); if(/ic$/.test(r)) pret[3]=r.slice(0,-1)+'zo'; }
  else { const E=cl==='ar'?['é','aste','aste','ó','amos','asteis','aron']:['í','iste','iste','ió','imos','isteis','ieron'];
    pret=E.map((e,i)=>{ let s=st; if([3,6].includes(i)) s=debil(s);
      if(y&&[3,6].includes(i)) return st+(uir?'':'')+(e==='ió'?'yó':'yeron');
      if(y&&!uir&&/^i/.test(e)) e='í'+e.slice(1);
      return (i===0?orto(s,e):s)+e; }); }
  /* ---- imperfecto ---- */
  const imp=S.ii?add(S.ii==='era'?['era','eras','eras','era','éramos','erais','eran']:S.ii==='iba'?['iba','ibas','ibas','iba','íbamos','ibais','iban']:['veía','veías','veías','veía','veíamos','veíais','veían']).map(x=>x)
    :(cl==='ar'?['aba','abas','abas','aba','ábamos','abais','aban']:['ía','ías','ías','ía','íamos','íais','ían']).map(e=>st+e);
  /* ---- futuro y condicional ---- */
  const fu=S.fu?P+S.fu:quitaTilde(v).replace(/ír$/,'ir');
  const fut=['é','ás','ás','á','emos','éis','án'].map(e=>(S.fu?fu:v.replace(/ír$/,'ir'))+e);
  const cond=['ía','ías','ías','ía','íamos','íais','ían'].map(e=>(S.fu?fu:v.replace(/ír$/,'ir'))+e);
  /* ---- subjuntivo presente ---- */
  let sub;
  const SE=cl==='ar'?['e','es','es','e','emos','éis','en']:['a','as','as','a','amos','áis','an'];
  if(S.sjf) sub=add(S.sjf.split(' '));
  else if(S.sj==='se') sub=['sea','seas','seas','sea','seamos','seáis','sean'];
  else if(S.sj) sub=SE.map(e=>P+S.sj+e);
  else { const yo=pres[0].replace(/o$/,''), todos=!!S.pr||/zc$/.test(yo)||uir;
    sub=SE.map((e,i)=>{
      let r=yo;
      if([4,5].includes(i)&&!todos) r=(cl==='ir')?debil(st):st;
      if(cl==='ar'&&ES_ACC.has(v)&&[4,5].includes(i)) r=st;
      return ((cl==='ar'||r!==yo)?orto(r,e):r)+e; }); }
  /* ---- subjuntivo imperfecto (desde ellos del pretérito) ---- */
  const r3=pret[6].replace(/ron$/,'');
  const tilde=s=>{ const k=s.search(/[aeiou][^aeiou]*$/); return s.slice(0,k)+(ACC[s[k]]||s[k])+s.slice(k+1); };
  const sira=['ra','ras','ras','ra','ramos','rais','ran'].map((e,i)=>i===4?tilde(r3)+e:r3+e);
  const sise=['se','ses','ses','se','semos','seis','sen'].map((e,i)=>i===4?tilde(r3)+e:r3+e);
  /* ---- formas no personales ---- */
  let ge=S.ge?P+S.ge:(cl==='ar'?st+'ando':(y?st+'yendo':debil(st)+'iendo'));
  if(F&&F.k==='ir') ge='yendo';
  let pp=S.pp?P+S.pp:(cl==='ar'?st+'ado':st+(/[aeo]$/.test(st)?'ído':'ido'));
  if(/olver$/.test(v)) pp=v.replace(/olver$/,'uelto'); if(/(morir)$/.test(v)) pp=v.replace(/morir$/,'muerto');
  if(/cubrir$/.test(v)) pp=v.replace(/cubrir$/,'cubierto'); if(/scribir$/.test(v)) pp=v.replace(/scribir$/,'scrito');
  /* ---- imperativo ---- */
  let tu=S.im?P+S.im:pres[3];
  if(P&&S.im&&/n$/.test(S.im)) tu=tu.replace(/([aeiou])n$/,(m,c)=>ACC[c]+'n');
  let vosI=S.imvos||(quitaTilde(v).replace(/r$/,'').replace(/([aei])$/,c=>ACC[c]));
  if(v.length<=3&&v!=='ser'&&!/í/.test(v)) vosI=quitaTilde(vosI);
  const vosotros=S.imvo||v.replace(/r$/,'d');
  const impA=(F&&F.k==='haber')?null:[tu,vosI,sub[3],sub[4],vosotros,sub[6]];
  const impN=[sub[1],sub[1],sub[3],sub[4],sub[5],sub[6]];
  return {v,pron,irr,cl,tipo,pres,pret,imp,fut,cond,sub,sira,sise,impA,impN,ge,pp,st};
}
const ES_HAB={pres:['he','has','has','ha','hemos','habéis','han'],imp:['había','habías','habías','había','habíamos','habíais','habían'],fut:['habré','habrás','habrás','habrá','habremos','habréis','habrán'],cond:['habría','habrías','habrías','habría','habríamos','habríais','habrían'],sub:['haya','hayas','hayas','haya','hayamos','hayáis','hayan'],sira:['hubiera','hubieras','hubieras','hubiera','hubiéramos','hubierais','hubieran'],pret:['hube','hubiste','hubiste','hubo','hubimos','hubisteis','hubieron']};
function esTiempos(C){
  const s=(a)=>i=>({f:a[i]}), c=(a)=>i=>({aux:a[i],f:C.pp});
  return [
   ['Presente','Indicativo',s(C.pres)],['Pretérito perfecto simple','Indicativo',s(C.pret)],['Pretérito imperfecto','Indicativo',s(C.imp)],
   ['Futuro simple','Indicativo',s(C.fut)],['Condicional simple','Indicativo',s(C.cond)],
   ['Pretérito perfecto compuesto','Indicativo',c(ES_HAB.pres)],['Pretérito pluscuamperfecto','Indicativo',c(ES_HAB.imp)],
   ['Futuro compuesto','Indicativo',c(ES_HAB.fut)],['Condicional compuesto','Indicativo',c(ES_HAB.cond)],['Pretérito anterior','Indicativo',c(ES_HAB.pret)],
   ['Presente','Subjuntivo',s(C.sub)],['Pretérito imperfecto (-ra)','Subjuntivo',s(C.sira)],['Pretérito imperfecto (-se)','Subjuntivo',s(C.sise)],
   ['Pretérito perfecto','Subjuntivo',c(ES_HAB.sub)],['Pretérito pluscuamperfecto','Subjuntivo',c(ES_HAB.sira)]
  ];
}

/* =============================== VISTA =============================== */
const CJ={l:null,v:'',pol:'af',drill:null};
const EJ={es:['hablar','tener','ir','pedir','conocer','levantarse','seguir','construir','decir','hacer'],de:['machen','fahren','aufstehen','sein','können','lesen','arbeiten','sprechen'],
 en:['work','go','study','stop','be','have','write','travel'],
 fr:['parler','finir','être','avoir','aller','prendre','se lever','acheter','manger','venir','vouloir','appeler']};
const SUG={es:()=>Object.keys(ES_IRR).filter(k=>k.length>3&&k!=='ducir').concat([...ES_IE,...ES_UE,...ES_I,...ES_ACC]).concat('hablar comer vivir estudiar trabajar aprender escribir abrir leer creer construir conocer conducir traducir buscar llegar coger levantarse ducharse acostarse llamarse sentirse vestirse irse quedarse'.split(' ')),en:()=>EN_IRR.map(r=>r[0]).concat('work play study stop travel live want try listen watch'.split(' ')),
 fr:()=>Object.keys(FR_IRR).filter(k=>!FR_IRR[k].fam&&k.length>4).concat('parler finir manger commencer acheter appeler jeter préférer payer nettoyer choisir réussir attendre répondre apprendre comprendre devenir revenir ouvrir offrir découvrir conduire construire craindre peindre connaître paraître recevoir écrire décrire permettre promettre se lever se laver se souvenir s\'appeler'.split(' ')),
 de:()=>V.map(v=>v.i)};
function lengua(){ return CJ.l||(typeof LANGAPI!=='undefined'?LANGAPI.get():'de'); }
function cabecera(l){
  const L={de:'Alemán',en:'Inglés',fr:'Francés',es:'Español'};
  return '<div class="oe-hero cj-hero"><div class="oe-top"><span class="oe-kick">Conjugador</span></div>'
   +'<h1>'+({de:'Konjugation',en:'Conjugation',fr:'Conjugaison',es:'Conjugación'})[l]+'</h1><p class="oe-dateline">Todas las formas · terminaciones resaltadas · irregularidades señaladas</p>'
   +'<p>Escriba un verbo en infinitivo. Las terminaciones regulares aparecen en <em class="cj-k">color</em>; las formas que se apartan del modelo, en <em class="cj-irr">otro color</em>. Debajo de la tabla hay un entrenamiento de formas al azar.</p></div>'
   +'<div class="oe-seg cj-lang" role="tablist">'+['de','en','fr','es'].map(k=>'<button data-cjl="'+k+'"'+(k===l?' class="on"':'')+'>'+L[k]+'</button>').join('')+'</div>'
   +'<div class="oe-tools cj-tools"><input type="search" id="cjQ" list="cjList" autocomplete="off" spellcheck="false" placeholder="'+({de:'machen, fahren, aufstehen…',en:'work, go, travel…',fr:'parler, finir, se lever…',es:'hablar, pedir, levantarse…'})[l]+'" value="'+esc(CJ.v)+'">'
   +'<datalist id="cjList">'+[...new Set(SUG[l]())].sort().map(x=>'<option value="'+esc(x)+'">').join('')+'</datalist>'
   +(l!=='de'?'<div class="oe-cat">'+[['af','Afirmativa'],['neg','Negativa']].concat(l==='en'?[['q','Interrogativa']]:[]).map(([k,t])=>'<button data-pol="'+k+'"'+(CJ.pol===k?' class="on"':'')+'>'+t+'</button>').join('')+'</div>':'')
   +'</div><div class="cj-ej">Ejemplos: '+EJ[l].map(x=>'<button data-ej="'+esc(x)+'">'+esc(x)+'</button>').join('')+'</div>';
}
function tarjeta(t,filas){
  return '<div class="cj-card"><h4>'+t+'</h4><table>'+filas.join('')+'</table></div>';
}
function vistaEN(v){
  if(!/^[a-z]+(-[a-z]+)?$/.test(v)) return '<p class="oe-note">Escriba un infinitivo inglés sin «to».</p>';
  if(EN_MOD.has(v)) return '<p class="oe-note"><b>'+esc(v)+'</b> es un verbo modal: no lleva -s, no usa <i>do</i>, no tiene infinitivo ni participio y va seguido de infinitivo sin <i>to</i> (salvo <i>ought to</i>). Véanse las unidades de modales en la gramática de inglés.</p>';
  const P=enPartes(v), T=enTiempos(v), pol=CJ.pol;
  const notas=[];
  if(P.irr) notas.push('Verbo <b>irregular</b>: '+v+' · '+P.past+' · '+P.pp+(EN_BRE[P.past]||EN_BRE[P.pp]?' (inglés americano: '+(EN_BRE[P.past]||P.past)+' · '+(EN_BRE[P.pp]||P.pp)+')':'')+'.');
  else notas.push('Verbo <b>regular</b>: pasado y participio en <em class="cj-k">-ed</em>.');
  if(enDobla(v)) notas.push('Duplica la consonante final: <b>'+enIng(v)+'</b>'+(P.irr?'':', <b>'+enEd(v)+'</b>')+(EN_L.has(v)?' (inglés británico; en EE. UU. '+v+'ing, '+v+'ed)':'')+'.');
  if(/[^aeiouy]e$/.test(v)) notas.push('Pierde la -e muda ante -ing: <b>'+enIng(v)+'</b>.');
  if(/[^aeiou]y$/.test(v)) notas.push('Consonante + y → <b>'+en3(v)+'</b>'+(P.irr?'':', <b>'+enEd(v)+'</b>')+'.');
  if(v==='be') notas.push('<i>Be</i> no usa <i>do</i> en negativa ni en pregunta.');
  if(v==='lie') notas.push('Aquí <i>lie</i> = «estar tumbado» (lay · lain). <i>Lie</i> = «mentir» es regular: lied · lied. No confundir con <i>lay</i> = «poner» (laid · laid).');
  if(/[^c]ic$/.test(v)) notas.push('Los verbos en -ic añaden k: <b>'+enEd(v)+'</b>, <b>'+enIng(v)+'</b>.');
  const fila=(i,t)=>{
    const L=enLinea(v,t,i,pol);
    const html=L.map(x=>typeof x==='object'?marcaEN(x.w,v,P):esc(x)).join(' ').replace(/ \?$/,'?');
    return '<tr><td>'+html+'</td></tr>';
  };
  const grupos=[['indic','Presente y pasado'],['fut','Futuro'],['cond','Condicional'],['pas','Voz pasiva']];
  let h='<div class="cj-info"><b>'+esc(v)+'</b><span>to '+esc(v)+' · '+esc(P.past)+' · '+esc(P.pp)+' · '+esc(enIng(v))+'</span>'
   +'<a class="cj-ext" href="https://dictionary.cambridge.org/es/diccionario/ingles-espanol/'+encodeURIComponent(v)+'" target="_blank" rel="noopener">Cambridge Dictionary ↗</a></div>'
   +'<ul class="cj-notas">'+notas.map(n=>'<li>'+n+'</li>').join('')+'</ul>';
  grupos.forEach(([g,tt])=>{
    h+='<div class="oe-h">'+tt+'</div><div class="cj-grid">'+T.filter(t=>t[1]===g).map(t=>tarjeta(t[0],[0,1,2,3,4,5].map(i=>fila(i,t)))).join('')+'</div>';
  });
  h+='<div class="oe-h">Imperativo y formas no personales</div><div class="cj-grid">'
   +tarjeta('Imperative',['<tr><td>'+marcaEN(v,v,P)+'!</td></tr>','<tr><td>Don\'t '+esc(v)+'!</td></tr>','<tr><td>Let\'s '+esc(v)+'!</td></tr>'])
   +tarjeta('Non-finite forms',['<tr><td><span class="cj-p">infinitive</span>to '+esc(v)+'</td></tr>','<tr><td><span class="cj-p">-ing</span>'+marcaEN(enIng(v),v,P)+'</td></tr>','<tr><td><span class="cj-p">past participle</span>'+marcaEN(P.pp,v,P)+'</td></tr>','<tr><td><span class="cj-p">perfect infinitive</span>to have '+esc(P.pp)+'</td></tr>'])
   +'</div>';
  return h;
}
function marcaEN(w,v,P){
  if(w===v) return esc(w);
  if(v==='be'||v==='have'&&/^(has|had)/.test(w)) return '<em class="cj-irr">'+esc(w)+'</em>';
  if((w===P.past||w===P.pp)&&P.irr) return '<em class="cj-irr">'+esc(w)+'</em>';
  const st=v.replace(/e$/,'').replace(/y$/,'');
  let k=0; while(k<w.length&&k<v.length&&w[k]===v[k]) k++;
  k=Math.min(k,st.length);
  return esc(w.slice(0,k))+'<em>'+esc(w.slice(k))+'</em>';
}
function vistaFR(inf){
  const C=frConj(inf);
  if(!C) return '<p class="oe-note">Escriba un infinitivo francés (‑er, ‑ir, ‑re), con o sin «se».</p>';
  const neg=CJ.pol==='neg', T=frTiempos(C);
  const st=C.raiz||'';
  const mk=(o,i)=>{ o.mark=marca(o.f,st,C.irr); return frRender(o,i,neg); };
  const notas=[];
  notas.push(C.irr?'Verbo <b>irregular</b>'+(C.cls==='er-like'?' (se conjuga en presente como un verbo en -er)':'')+'.':('Verbo regular del <b>'+(C.cls==='er'?'1.er grupo (-er)':C.cls==='ir'?'2.º grupo (-ir, tipo finir)':'3.er grupo (-re, tipo vendre)')+'</b>.'));
  notas.push('Tiempos compuestos con <b>'+C.aux+'</b>'+(C.aux==='être'?': el participio concuerda con el sujeto (marcado en gris).':'.'));
  if(C.pron) notas.push('Verbo <b>pronominal</b>: el pronombre reflexivo concuerda con el sujeto.');
  if(C.cls==='er'){
    const s=C.v.slice(0,-2);
    if(/c$/.test(s)) notas.push('<b>c → ç</b> ante a / o: nous '+C.pres[3]+'.');
    if(/g$/.test(s)) notas.push('<b>g → ge</b> ante a / o: nous '+C.pres[3]+'.');
    if(C.pres[0]!==s+'e') notas.push('Cambio en la raíz ante terminación muda: je '+C.pres[0]+', nous '+C.pres[3]+'.');
  }
  if(C.imp) notas.push('Verbo <b>impersonal</b>: solo se conjuga en tercera persona (il).');
  const grupos=['Indicatif','Conditionnel','Subjonctif'];
  let h='<div class="cj-info"><b>'+esc(inf)+'</b><span>participe passé : '+esc(C.pp)+' · participe présent : '+esc(C.partPres||'—')+' · auxiliaire : '+C.aux+'</span>'
   +'<a class="cj-ext" href="https://www.larousse.fr/conjugaison/francais/'+encodeURIComponent(C.v)+'/" target="_blank" rel="noopener">Larousse ↗</a></div>'
   +'<ul class="cj-notas">'+notas.map(n=>'<li>'+n+'</li>').join('')+'</ul>';
  grupos.forEach(g=>{
    h+='<div class="oe-h">'+g+'</div><div class="cj-grid">'+T.filter(t=>t[1]===g).map(t=>tarjeta(t[0],[0,1,2,3,4,5].map(i=>{
      if(C.imp&&i!==2) return '';
      const o=t[2](i); if(!o.f||o.f==='-') return '';
      return '<tr><td>'+mk(o,i)+'</td></tr>';
    }))).join('')+'</div>';
  });
  if(C.impv){
    const iv=C.impv.map((f,j)=>{
      const r=C.pron?['-toi','-nous','-vous'][j]:'';
      return neg?(C.pron?'ne '+(['te ','nous ','vous '][j])+esc(f)+' pas':'ne '+esc(f)+' pas').replace(/ne ([aeiouhé])/,"n'$1"):marca(f,st,C.irr)+r;
    });
    h+='<div class="oe-h">Impératif et formes impersonnelles</div><div class="cj-grid">'
     +tarjeta('Impératif',iv.map(x=>'<tr><td>'+x+(neg?'':' !')+'</td></tr>'))
     +tarjeta('Formes impersonnelles',['<tr><td><span class="cj-p">infinitif passé</span>'+(C.aux==='être'?'être':'avoir')+' '+esc(C.pp)+'</td></tr>','<tr><td><span class="cj-p">gérondif</span>'+(C.partPres?'en '+(C.pron?'se ':'')+esc(C.partPres):'—')+'</td></tr>','<tr><td><span class="cj-p">participe passé</span>'+marca(C.pp,st,C.irr)+'</td></tr>'])+'</div>';
  }
  return h;
}
function vistaES(inf){
  const C=esConj(inf);
  if(!C) return '<p class="oe-note">Escriba un infinitivo en -ar, -er o -ir (con «se» si es pronominal: levantarse).</p>';
  const neg=CJ.pol==='neg', st=C.st;
  const T=esTiempos(C);
  const fila=(i,o)=>{
    const refl=C.pron?ES_REFL[i]+' ':'';
    const f=o.aux?esc(o.aux)+' '+marca(o.f,st,C.irr):marca(o.f,st,C.irr);
    return '<tr><td><span class="cj-p">'+ES_P[i]+'</span>'+(neg?'no ':'')+esc(refl)+f+'</td></tr>';
  };
  const notas=[];
  notas.push(C.irr?'Verbo <b>irregular</b>.':'Verbo '+(C.tipo?'con <b>cambio vocálico</b> en la raíz ('+{ie:'e → ie',ue:'o → ue',i:'e → i',jug:'u → ue',iie:'i → ie'}[C.tipo]+') cuando la raíz es tónica':'<b>regular</b> de la '+{ar:'1.ª',er:'2.ª',ir:'3.ª'}[C.cl]+' conjugación (-'+C.cl+')')+'.');
  if(/zc/.test(C.pres[0])) notas.push('Primera persona en <b>-zco</b>: '+C.pres[0]+'; se extiende a todo el presente de subjuntivo.');
  if(/y/.test(C.pres[1])&&/uir$/.test(C.v)) notas.push('Los verbos en <b>-uir</b> intercalan y: '+C.pres[0]+', '+C.pret[3]+'.');
  if(/qu|gu|gü|c$/.test(C.pret[0])&&C.cl==='ar') notas.push('Cambio ortográfico ante e: <b>'+C.pret[0]+'</b>, '+C.sub[0]+'.');
  notas.push('Columna <b>vos</b>: voseo de Argentina, Uruguay, Paraguay, Centroamérica y zonas de Colombia; en los tiempos sin forma propia, vos usa la de tú.');
  if(C.pron) notas.push('Verbo <b>pronominal</b>: me, te, se, nos, os, se; en el imperativo afirmativo el pronombre va unido.');
  let h='<div class="cj-info"><b>'+esc(inf)+'</b><span>gerundio: '+esc(C.ge)+' · participio: '+esc(C.pp)+'</span>'
   +'<a class="cj-ext" href="https://dle.rae.es/'+encodeURIComponent(C.v)+'" target="_blank" rel="noopener">DLE (RAE) ↗</a></div>'
   +'<ul class="cj-notas">'+notas.map(n=>'<li>'+n+'</li>').join('')+'</ul>';
  ['Indicativo','Subjuntivo'].forEach(g=>{
    h+='<div class="oe-h">'+g+'</div><div class="cj-grid cj-es">'+T.filter(t=>t[1]===g).map(t=>tarjeta(t[0],[0,1,2,3,4,5,6].map(i=>fila(i,t[2](i))))).join('')+'</div>';
  });
  if(C.impA){
    const P=['tú','vos','usted','nosotros','vosotros','ustedes'], R=['te','te','se','nos','os','se'];
    const af=C.impA.map((f,j)=>{ if(!C.pron) return marca(f,st,C.irr);
      if(j===1) return esc(quitaTilde(f)+'te');
      if(j===3) return esc(enclitico(f.replace(/s$/,''),'nos'));
      if(j===4) return esc(f==='id'?'idos':(C.cl==='ir'?f.replace(/id$/,'í'):f.replace(/d$/,''))+'os');
      return esc(enclitico(f,R[j])); });
    const ng=C.impN.map((f,j)=>'no '+(C.pron?R[j]+' ':'')+esc(f));
    h+='<div class="oe-h">Imperativo</div><div class="cj-grid">'
     +tarjeta('Afirmativo',P.map((p,j)=>'<tr><td><span class="cj-p">'+p+'</span>'+af[j]+'</td></tr>'))
     +tarjeta('Negativo',P.map((p,j)=>'<tr><td><span class="cj-p">'+p+'</span>'+ng[j]+'</td></tr>'))
     +tarjeta('Formas no personales',['<tr><td><span class="cj-p">infinitivo</span>'+esc(C.v)+(C.pron?'se':'')+'</td></tr>','<tr><td><span class="cj-p">gerundio</span>'+marca(C.ge,st,C.irr)+'</td></tr>','<tr><td><span class="cj-p">participio</span>'+marca(C.pp,st,C.irr)+'</td></tr>'])+'</div>';
  }
  return h;
}
function vistaDE(q){
  const v=V.find(x=>x.i.toLowerCase()===q.toLowerCase());
  if(!v) return '<p class="oe-note">El conjugador alemán trabaja con los '+V.length+' verbos del repertorio de la app. Elija uno de la lista (empiece a escribir) o consulte <a href="https://www.verbformen.de/konjugation/'+encodeURIComponent(q)+'.htm" target="_blank" rel="noopener">verbformen.de</a>.</p>';
  const D=deTiempos(v), I=D.I;
  const st=I.base.replace(/e?n$/,'');
  const irr=v.k!=='reg';
  const fila=(i,o)=>{
    const s=DE_PRON[i]+' ';
    let x;
    if(o.aux) x=esc(o.aux)+' '+esc(o.f);
    else x=marca(o.f,st,irr)+esc(o.tail||'');
    if(o.alt) x+=' <span class="cj-alt">· '+esc(o.alt)+'</span>';
    return '<tr><td>'+esc(s)+x+'</td></tr>';
  };
  const notas=[];
  notas.push({reg:'Verbo <b>regular</b> (débil): Präteritum en -te y participio en -t.',str:'Verbo <b>irregular</b> (fuerte): cambia la vocal de la raíz; participio en -en.',mix:'Verbo <b>mixto</b>: cambia la vocal pero toma terminaciones débiles.',mod:'Verbo <b>modal</b>: sin -t en ich / er del presente; en tiempos compuestos con otro verbo usa el doble infinitivo (hat kommen können).',aux:'Verbo <b>auxiliar</b>.'}[v.k]);
  notas.push('Perfekt con <b>'+D.aux+'</b>.');
  if(I.pref) notas.push('Prefijo <b>separable</b> «'+I.pref+'»: va al final en los tiempos simples.');
  if(v.n) notas.push(v.n);
  let h='<div class="cj-info"><b>'+esc(v.i)+'</b><span>'+esc(v.t)+' · '+esc(I.pr[2])+(I.pref?' '+I.pref:'')+' · '+esc(I.pt[2])+(I.pref?' '+I.pref:'')+' · '+(D.aux==='sein'?'ist':'hat')+' '+esc(v.pp)+'</span>'
   +'<a class="cj-ext" href="https://www.dwds.de/wb/'+encodeURIComponent(v.i)+'" target="_blank" rel="noopener">DWDS ↗</a></div>'
   +'<ul class="cj-notas">'+notas.map(n=>'<li>'+n+'</li>').join('')+'</ul>';
  ['Indikativ','Konjunktiv','Passiv'].forEach(g=>{
    const L=D.T.filter(t=>t[1]===g); if(!L.length) return;
    h+='<div class="oe-h">'+g+(g==='Passiv'?' <small>solo verbos transitivos</small>':'')+'</div><div class="cj-grid">'+L.map(t=>tarjeta(t[0],[0,1,2,3,4,5].map(i=>{
      const o=t[2](i); if(t[0]==='Passiv · Perfekt') o.aux=dePasPerf(i); return fila(i,o); }))).join('')+'</div>';
  });
  if(D.imp) h+='<div class="oe-h">Imperativ</div><div class="cj-grid">'+tarjeta('Imperativ',['du','ihr','Sie'].map((p,j)=>'<tr><td><span class="cj-p">'+p+'</span>'+esc(D.imp[j])+'!</td></tr>'))+'</div>';
  return h;
}
/* --------- entrenamiento: una forma al azar --------- */
function drillNuevo(l,v){
  const pick=n=>Math.floor(Math.random()*n);
  try{
    if(l==='en'){ if(EN_MOD.has(v)) return null; const T=enTiempos(v).filter(t=>t[1]!=='pas'); const t=T[pick(T.length)], i=pick(6);
      const L=enLinea(v,t,i,'af'); const s=L.map(x=>typeof x==='object'?x.w:x); s[0]=s[0]==='he / she / it'?'he':s[0];
      return {t:t[0],p:s[0],r:s.join(' ')}; }
    if(l==='fr'){ const C=frConj(v); if(!C) return null;
      const T=frTiempos(C).filter(t=>!/antérieur/.test(t[0])&&!(t[1]==='Subjonctif'&&/Imparfait|Plus/.test(t[0]))); const t=T[pick(T.length)];
      const i=C.imp?2:pick(6); const o=t[2](i); o.mark=esc(o.f); const txt=frRender(o,i,false).replace(/<[^>]+>/g,'').replace(/\(e\)s?/,'').replace(/&#39;|&apos;/g,"'");
      return {t:t[0]+' · '+t[1],p:['je','tu','il','nous','vous','ils'][i],r:txt}; }
    if(l==='es'){ const C=esConj(v); if(!C) return null; const T=esTiempos(C).filter(t=>!/anterior|-se/.test(t[0])); const t=T[pick(T.length)];
      const i=[0,1,3,4,6][pick(5)]; const o=t[2](i), pr=['yo','tú','vos','él','nosotros','vosotros','ellos'][i];
      return {t:t[0]+' · '+t[1],p:pr,r:pr+' '+(C.pron?ES_REFL[i]+' ':'')+(o.aux?o.aux+' '+o.f:o.f)}; }
    if(l==='de'){ const vv=V.find(x=>x.i===v); if(!vv) return null; const D=deTiempos(vv); const T=D.T.filter(t=>t[1]!=='Passiv'); const t=T[pick(T.length)], i=pick(6);
      const o=t[2](i), pr=DE_PRON[i].split(' / ')[0]; return {t:t[0],p:pr,r:pr+' '+(o.aux?o.aux+' '+o.f:o.f+(o.tail||''))}; }
  }catch(e){ return null; }
  return null;
}
function drillHTML(){
  const d=CJ.drill; if(!d) return '';
  return '<div class="oe-h">Entrénate <small>escriba la forma completa, con el pronombre</small></div><div class="oe-card cj-drill"><div class="hint">'+esc(d.t)+' · <b>'+esc(d.p)+'</b></div>'
   +'<div class="cj-dl"><input type="text" id="cjIn" autocomplete="off" spellcheck="false" placeholder="Respuesta…" value="'+esc(d.val||'')+'"><button class="btn pri" id="cjOk">Comprobar</button><button class="btn" id="cjOtra">Otra</button></div>'
   +(d.res?'<p class="cj-res '+(d.res==='ok'?'ok':'no')+'">'+(d.res==='ok'?'Correcto: ':d.res==='casi'?'Casi: revise los acentos. Forma correcta: ':'Forma correcta: ')+'<b>'+esc(d.r)+'</b></p>':'')
   +'<div class="cj-score">'+(CJ.ok||0)+' aciertos de '+(CJ.tot||0)+'</div></div>';
}
function render(){
  const el=document.getElementById('m-conj'); if(!el) return;
  const l=lengua();
  if(!CJ.v) CJ.v=EJ[l][0];
  let cuerpo='';
  if(l==='es') cuerpo=vistaES(CJ.v);
  else if(l==='en') cuerpo=vistaEN(CJ.v.toLowerCase().replace(/^to /,'').trim());
  else if(l==='fr') cuerpo=vistaFR(CJ.v);
  else cuerpo=vistaDE(CJ.v.trim());
  if(!CJ.drill||CJ.drill.v!==CJ.v||CJ.drill.l!==l){ const d=drillNuevo(l,l==='en'?CJ.v.toLowerCase().replace(/^to /,''):CJ.v); CJ.drill=d?Object.assign(d,{v:CJ.v,l}):null; }
  el.innerHTML=cabecera(l)+'<div class="oe-body">'+cuerpo+drillHTML()+'<p class="oe-note">Formas generadas por reglas propias y contrastadas con las gramáticas de referencia; para verbos poco frecuentes, compruebe en el diccionario enlazado.</p></div>';
  wire(el);
}
function wire(el){
  const q=el.querySelector('#cjQ');
  let t=null;
  q.oninput=()=>{ clearTimeout(t); t=setTimeout(()=>{ CJ.v=q.value.trim(); if(!CJ.v) return; const p=q.selectionStart; render(); const j=document.getElementById('cjQ'); j.focus(); try{j.setSelectionRange(p,p);}catch(e){} },260); };
  el.querySelectorAll('[data-cjl]').forEach(b=>b.onclick=()=>{ CJ.l=b.dataset.cjl; CJ.v=EJ[CJ.l][0]; CJ.pol='af'; render(); });
  el.querySelectorAll('[data-pol]').forEach(b=>b.onclick=()=>{ CJ.pol=b.dataset.pol; render(); });
  el.querySelectorAll('[data-ej]').forEach(b=>b.onclick=()=>{ CJ.v=b.dataset.ej; render(); });
  const ok=el.querySelector('#cjOk'), inp=el.querySelector('#cjIn'), otra=el.querySelector('#cjOtra');
  if(ok){
    const check=()=>{ const d=CJ.drill, a=inp.value.trim(); if(!a) return; d.val=a;
      const A=a.toLowerCase().replace(/’/g,"'").replace(/\s+/g,' '), R=d.r.toLowerCase().replace(/\s+/g,' ');
      d.res=A===R?'ok':(norm(A)===norm(R)?'casi':'no'); CJ.tot=(CJ.tot||0)+1; if(window.PROG) PROG.conj(d.res==='ok'); if(d.res==='ok') CJ.ok=(CJ.ok||0)+1;
      try{ d.res==='ok'?sfx.ok():sfx.no(); }catch(e){} render(); const j=document.getElementById('cjIn'); if(j) j.focus(); };
    ok.onclick=check; inp.onkeydown=e=>{ if(e.key==='Enter') check(); };
    otra.onclick=()=>{ CJ.drill=null; const l=lengua(); const d=drillNuevo(l,l==='en'?CJ.v.toLowerCase():CJ.v); CJ.drill=d?Object.assign(d,{v:CJ.v,l}):null; render(); const j=document.getElementById('cjIn'); if(j) j.focus(); };
  }
}
/* API para otros módulos y pruebas */
window.CONJ={render,es:esConj,esT:esTiempos,fr:frConj,frT:frTiempos,en:enPartes,enLinea,enTiempos,de:deTiempos,set:(l,v)=>{ if(CJ.l!==l){ CJ.l=l; CJ.pol='af'; CJ.v=v||EJ[l][0]; CJ.drill=null; } else if(v) CJ.v=v; }};
})();
