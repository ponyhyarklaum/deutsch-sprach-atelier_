/* =====================================================================
   TIEMPOS ESTIMADOS · horas para dominar cada tema y requisitos previos
   Estimación propia para un adulto hispanohablante que estudia con
   regularidad (explicación + práctica + repaso espaciado). No es una
   norma: el tiempo real depende de la exposición a la lengua.
   TDE[id] = [horas, [unidades requisito]]  (alemán)
   Las unidades de inglés y francés llevan h y pre en su propio archivo.
   Horas por nivel: cifras orientativas de las instituciones citadas.
   ===================================================================== */
const TDE={
 aussprache:[4,[]], rechtschreibung:[3,['aussprache']], satzbau0:[2,[]], praesens:[5,['satzbau0']],
 artikel:[5,[]], plural:[4,['artikel']], nominativ:[2,['artikel']], akkusativ:[4,['nominativ']],
 pronomen:[3,['akkusativ']], wortstellung:[3,['praesens','satzbau0']], negation:[3,['akkusativ','wortstellung']],
 modalverben:[4,['praesens','wortstellung']], trennbar:[3,['praesens','wortstellung']], imperativ:[2,['praesens','trennbar']],
 perfekt:[7,['praesens','trennbar']],
 dativ:[5,['akkusativ','pronomen']], dativverben:[3,['dativ']], praepakkdat:[4,['dativ']], praeptemp:[3,['praepakkdat']],
 praeteritum:[4,['perfekt']], wechsel:[5,['praepakkdat']], praeplokal:[3,['wechsel']], positionsverben:[4,['wechsel','perfekt']],
 adverbien:[2,['wortstellung']], adjektive:[8,['dativ','akkusativ']], welcher:[2,['adjektive']], futur:[2,['modalverben']],
 genitiv:[4,['dativ']], ndekl:[3,['genitiv']], nebensatz:[5,['wortstellung','modalverben']], konnektoren:[4,['nebensatz']],
 doppelkonn:[3,['konnektoren']], temporal:[4,['nebensatz','praeteritum']], plusquam:[3,['praeteritum','temporal']],
 relativ:[6,['nebensatz','genitiv']], praepverb:[5,['praepakkdat']], reflexiv:[3,['pronomen','dativ']],
 infinitivzu:[4,['nebensatz']], lassen:[3,['modalverben','perfekt']], passiv1:[5,['perfekt','praeteritum']],
 konjunktiv2a:[5,['praeteritum','modalverben']],
 passiv2:[5,['passiv1','modalverben']], konjunktiv2b:[5,['konjunktiv2a','plusquam']], subjektiv:[5,['modalverben','konjunktiv2a']],
 relativ2:[4,['relativ','praepverb']], konnektoren2:[5,['doppelkonn']], partizip:[5,['adjektive','passiv1']],
 nomstil:[6,['partizip','genitiv']], genitivpraep:[3,['genitiv']], modalpartikel:[4,['wortstellung']],
 konjunktiv1:[5,['konjunktiv2b']], funktionsverb:[5,['nomstil']], valenz:[5,['praepverb']], konzessiv:[4,['konnektoren2']],
 wortbildung:[6,['nomstil']], textkohaesion:[5,['konnektoren2','relativ2']],
 syntaxkomplex:[8,['textkohaesion','partizip']], stil:[8,['funktionsverb','konjunktiv1']], phraseologie:[10,['funktionsverb']]
};
/* Horas de clase acumuladas desde cero para alcanzar cada nivel.
   Goethe-Institut London (FAQ): 1 Unterrichtseinheit = 45 min. */
const HDE={A1:[60,150],A2:[150,260],B1:[260,490],B2:[450,600],C1:[600,750],C2:[750,null]};
const HDE_FUENTE=['Goethe-Institut London · FAQ (horas por nivel)','https://www.goethe.de/ins/gb/en/m/sta/lon/kur/faq.html'];
/* Requisitos para empezar cada nivel (comunes a las tres lenguas) */
const HREQ={
 A1:'Ninguno. Conviene dedicar de 3 a 5 horas semanales y dominar el alfabeto y la pronunciación desde el primer día.',
 A2:'A1 completo: presente, preguntas, artículos y el léxico de la vida diaria (unas 500 palabras).',
 B1:'A2 completo: los tiempos del pasado y el futuro, comparación y unas 1 000–1 500 palabras activas.',
 B2:'B1 completo: subordinación, pasiva y condicionales sencillos; leer textos breves sin diccionario.',
 C1:'B2 completo: argumentar con conectores, todas las formas verbales y lectura regular de prensa.',
 C2:'C1 completo e inmersión prolongada: lectura literaria, escritura académica y contacto diario con la lengua.'};
