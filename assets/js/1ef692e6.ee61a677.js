"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[349],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var g=r.createContext({}),o=function(t){var e=r.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return r.createElement(g.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,g=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=o(n),u=a,p=m["".concat(g,".").concat(u)]||m[u]||k[u]||l;return n?r.createElement(p,i(i({ref:e},d),{},{components:n})):r.createElement(p,i({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var g in e)hasOwnProperty.call(e,g)&&(s[g]=e[g]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3571:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return g},default:function(){return u},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],s={title:"Livssyklus for identitet og tilgang"},g=void 0,o={unversionedId:"iam/livssyklus",id:"iam/livssyklus",title:"Livssyklus for identitet og tilgang",description:"Livssyklus tilganger",source:"@site/docs/iam/livssyklus.md",sourceDirName:"iam",slug:"/iam/livssyklus",permalink:"/docs/iam/livssyklus",editUrl:"https://github.com/sikt-no/docs/tree/master/docs/iam/livssyklus.md",tags:[],version:"current",lastUpdatedAt:1654845178,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"Livssyklus for identitet og tilgang"},sidebar:"iam",previous:{title:"Tilgangsstyring",permalink:"/docs/iam/tilgangsstyring"},next:{title:"Brukernavn og bruker-ID",permalink:"/docs/iam/brukernavn"}},d={},k=[{value:"Livssyklus tilganger",id:"livssyklus-tilganger",level:2},{value:"Ansatte",id:"ansatte",level:3},{value:"Studenter",id:"studenter",level:3},{value:"Gjester",id:"gjester",level:3},{value:"Deaktivering av tilganger",id:"deaktivering-av-tilganger",level:2}],m={toc:k};function u(t){var e=t.components,s=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Livssyklus tilganger",src:n(7525).Z,width:"2386",height:"1252"})),(0,l.kt)("p",null,"Integrasjonslaget, RI Connect, best\xe5r av en rekke konnektorer (Action Set) som er utviklet etter omforent kravspesifikasjon for \xe5 motta kravstilte attributter fra kildesystem som SAP, FS og OrgReg  , prosessere denne informasjonen og forsyne en rekke m\xe5lsystemer som AD, LDAP, Inspera og Adgangskontroll med informasjon om brukere og deres tilganger."),(0,l.kt)("p",null,"Konnektorene som utvikles skal videreutvikles og forvaltes med tanke p\xe5 gjenbruk p\xe5 tvers av institusjoner. Det er med andre ord et m\xe5l om at tilpasning til den enkelte institusjon ikke skal gj\xf8res i Action Set-koden, men i all hovedsak i tilgangsregelsettet som utarbeides."),(0,l.kt)("p",null,"Ettersom RI er master for \xe5 opprette og forvalte den unike digitale nasjonale identiteten til alle brukere, UH-ID, vil ogs\xe5 kildesystemene   oppdateres med denne informasjonen etter at identiteten er opprettet, eller endret. Dette illustrerer at det er flere kilder til autoritative data, data som inneholder informasjon som evalueres for \xe5 bed\xf8mme tildeling av roller og tilganger og/eller som fungerer som triggere p\xe5 slike."),(0,l.kt)("p",null,"Autoritative datakilder er:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SAP for ansatte, oppdragstakere, timel\xf8nnede og langvarige gjester"),(0,l.kt)("li",{parentName:"ul"},"FS for studenter"),(0,l.kt)("li",{parentName:"ul"},"RI for kortvarige gjester. I tillegg er RI master for UH-ID og forretningsroller"),(0,l.kt)("li",{parentName:"ul"},"OrgReg for knytningen mellom organisasjonsenheter i SAP og FS, og som supplement til manglende organisasjonsinformasjon i SAP og FS.")),(0,l.kt)("h2",{id:"livssyklus-tilganger"},"Livssyklus tilganger"),(0,l.kt)("p",null,"Tilganger til en bruker tildeles som f\xf8lge av oppstart, endring   eller avslutning av et engasjement. Dette kalles ogs\xe5 for JML-prosesser (Joiner, Mover, Leaver). De use-casene som st\xf8ttes av RI er:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Automatiske prosesser")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kildesystem"),(0,l.kt)("th",{parentName:"tr",align:null},"Brukertype"),(0,l.kt)("th",{parentName:"tr",align:null},"J"),(0,l.kt)("th",{parentName:"tr",align:null},"M"),(0,l.kt)("th",{parentName:"tr",align:null},"L"),(0,l.kt)("th",{parentName:"tr",align:null},"Spesifikasjon"),(0,l.kt)("th",{parentName:"tr",align:null},"UC Inst."),(0,l.kt)("th",{parentName:"tr",align:null},"UC Core"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAP"),(0,l.kt)("td",{parentName:"tr",align:null},"Ansatt"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Livssyklusprosess for alle brukertyper"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1-1.8"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1-1.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAP"),(0,l.kt)("td",{parentName:"tr",align:null},"Langvarig gjest"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Livssyklusprosess for gjester (som registreres i SAP)"),(0,l.kt)("td",{parentName:"tr",align:null},"3.1-3.5"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1-1.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FS"),(0,l.kt)("td",{parentName:"tr",align:null},"Student"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Livssyklusprosess for alle studenttyper"),(0,l.kt)("td",{parentName:"tr",align:null},"2.1-2.9"),(0,l.kt)("td",{parentName:"tr",align:null},"2.1-2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Identitetsmatching"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"03.jan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiv bruker tildeles organisering, inaktiv bruker aktiveres og tildeles organisering"),(0,l.kt)("td",{parentName:"tr",align:null},"4.1-4.3"),(0,l.kt)("td",{parentName:"tr",align:null},"3.2-3.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiv bruker fratas organisering og deaktiveres"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"03.apr")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI"),(0,l.kt)("td",{parentName:"tr",align:null},"Student"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Engangsforlengelse av studenttilgang med varsling"),(0,l.kt)("td",{parentName:"tr",align:null},"06.jan"),(0,l.kt)("td",{parentName:"tr",align:null},"05.jan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI+AC"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Account Claim via ID-porten eller e-post"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"05.feb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Feide"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle med NIN"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Passord reset"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"05.mar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helpdesk"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle uten NIN"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Provisjonerte kontoer slettes seks m\xe5neder etter at en konto er deaktivert (policy konfigurerbar mht brukertype, tid og system)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"05.apr")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle","*"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"UH-brukernavn vil gjenbrukes hvis det eksisterer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"05.mai")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gjester"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Livssyklusprosess for Sponsored Guests"),(0,l.kt)("td",{parentName:"tr",align:null},"06.mai"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manuelle prosesser")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kildesystem"),(0,l.kt)("th",{parentName:"tr",align:null},"Brukertype"),(0,l.kt)("th",{parentName:"tr",align:null},"J"),(0,l.kt)("th",{parentName:"tr",align:null},"M"),(0,l.kt)("th",{parentName:"tr",align:null},"L"),(0,l.kt)("th",{parentName:"tr",align:null},"Spesifikasjon"),(0,l.kt)("th",{parentName:"tr",align:null},"UC Inst."),(0,l.kt)("th",{parentName:"tr",align:null},"UC Core"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RI"),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Administrator deaktiverer tilgang lokalt eller til sentral tjeneste"),(0,l.kt)("td",{parentName:"tr",align:null},"05.jan"),(0,l.kt)("td",{parentName:"tr",align:null},"4.1, 4.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Administrator re-aktiverer inaktiv tilgang eller til sentral tjeneste"),(0,l.kt)("td",{parentName:"tr",align:null},"05.feb"),(0,l.kt)("td",{parentName:"tr",align:null},"4.2, 4.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Endring av brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"05.mar"),(0,l.kt)("td",{parentName:"tr",align:null},"04.mar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Overstyring av sentrale kildedata"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"04.jun")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Alle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"H\xe5ndtering av identitetskollisjoner"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"4.7-4.8")))),(0,l.kt)("p",null,"Tilgangsmodellen i RI er en kombinasjon av rolle- og attributtbasert modell. Alle brukere tildeles minst en forretningsrolle basert p\xe5 engasjementets art. En forretningsrolle vil v\xe6re p\xe5 formen \xabAnsatt ","[iam:employee]","\xbb, og v\xe6re unike innenfor en institusjon  . Forretningsroller kan i sin tur gi tilgang til ett eller flere m\xe5lsystemer gjennom systemtilgang, som er p\xe5 formen \xabInspera ","[inspera]","\xbb. En systemtilgang kan i sin tur inneholde en eller flere systemroller, som er p\xe5 formen \xabInspera Forfatter ","[inspera:author]","!\xbb. Not\xe9r at \xab!\xbb til slutt i rollenavnet betyr at den ikke er synlig og dermed ikke bestillbar i RI Portal. Disse rollene benyttes for automatisk tildeling alene. Bestillbare systemroller vil f\xf8lgelig v\xe6re uten denne suffiksen, for eksempel \xabInspera Sensor ","[inspera:sensor]","\xbb."),(0,l.kt)("p",null,"Det benyttes et utvidbart utvalg av parametere for \xe5 bestemme og tildele forretningsroller og systemroller."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"To-trinnsprosess for tildeling av tilganger",src:n(3057).Z,width:"2356",height:"1392"})),(0,l.kt)("h3",{id:"ansatte"},"Ansatte"),(0,l.kt)("p",null,"En JML-prosess for en ansatt kan se ut p\xe5 f\xf8lgende vis:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Eksempel p\xe5 JML for ansatt",src:n(6300).Z,width:"2380",height:"962"})),(0,l.kt)("p",null,"Figur: Eksempel p\xe5 JML for ansatt"),(0,l.kt)("p",null,"L\xf8sningen baserer seg p\xe5 en hendelsesdrevet arkitektur, der endringer p\xe5 visse autoritative attributter genererer en melding som RI vil motta og behandle. For \xabJoiner\xbb er triggeren startdato, og RI vil da f\xe5 melding om dette sammen med tilh\xf8rende informasjon slik at forsyningsprosessen kan kj\xf8res. For \xabMover\xbb er endringer p\xe5 attributter som signaliserer at det er endringer i arbeidsforholdet, enten innad p\xe5 eksisterende enhet eller at den ansatte f\xe5r en ny stilling et annet sted i organisasjonen. For \xabLeaver\xbb vil triggeren v\xe6re stoppdato."),(0,l.kt)("h3",{id:"studenter"},"Studenter"),(0,l.kt)("p",null,"En JML-prosess for en student kan se ut som f\xf8lger:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Eksempel p\xe5 JML for student",src:n(2441).Z,width:"2350",height:"982"})),(0,l.kt)("p",null,"Figur 6:"),(0,l.kt)("p",null,"Trigger for \xabJoiner\xbb vil v\xe6re en melding om aktivStudent (alternativt aktivKlasse). For \xabMover\xbb vil det v\xe6re endringer i studieforholdet inkludert nytt emne, noe som antas skje hyppig. \xabLeaver\xbb vil trigges av at studiet er fullf\xf8rt (eller avsluttet f\xf8r fullf\xf8relse) aktivStudent settes til usant."),(0,l.kt)("h3",{id:"gjester"},"Gjester"),(0,l.kt)("p",null,"Gjester kategoriseres og registreres i henhold til f\xf8lgende struktur:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kategori"),(0,l.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,l.kt)("th",{parentName:"tr",align:null},"Krav til registrering"),(0,l.kt)("th",{parentName:"tr",align:null},"Register\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kortvarige gjester"),(0,l.kt)("td",{parentName:"tr",align:null},"Eksterne uten krav til honorar, der varigheten av forholdet er 30 dager eller mindre. Rettigheter er forh\xe5ndsdefinert og begrenset. Brukeren f\xe5r ikke Feidekonto."),(0,l.kt)("td",{parentName:"tr",align:null},"Sponsor angir navn, e-post, sluttdato, og evt. mobiltelefonnummer og f\xf8dselsnummer. Gjesten gjennomg\xe5r Account claim, og knyttes til sponsorens organisasjonsenhet. Midlertidige brukernavn p\xe5 formen ",(0,l.kt)("inlineCode",{parentName:"td"},"etternavn")),(0,l.kt)("td",{parentName:"tr",align:null},"RI Institusjonskatalog via RI Portal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Langvarige gjester"),(0,l.kt)("td",{parentName:"tr",align:null},"Eksterne uten krav til honorar. Rettigheter er forh\xe5ndsdefinert og gis ihht det tilgangsregelsett som til enhver tid er gjeldende."),(0,l.kt)("td",{parentName:"tr",align:null},"Tilsvarende informasjon som ved ansattregistrering, unntatt forhold som er knyttet til l\xf8nn."),(0,l.kt)("td",{parentName:"tr",align:null},"SAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Eksterne administratorer"),(0,l.kt)("td",{parentName:"tr",align:null},"Systemleverand\xf8rer som har behov for administratortilgang for systemvedlikehold"),(0,l.kt)("td",{parentName:"tr",align:null},"TBD (ikke adressert av prosjektet) Registreres som langvarig gjest med utvidete tilgangsrettigheter."),(0,l.kt)("td",{parentName:"tr",align:null},"SAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Oppdragstaker"),(0,l.kt)("td",{parentName:"tr",align:null},"Eksterne med krav til honorar"),(0,l.kt)("td",{parentName:"tr",align:null},"De krav som ToA-prosessen stiller"),(0,l.kt)("td",{parentName:"tr",align:null},"SAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ekstern sensor"),(0,l.kt)("td",{parentName:"tr",align:null},"Ekstern med behov for tilgang til Inspera for sensur av et fag, tildelt i FS gjennom en kommisjon"),(0,l.kt)("td",{parentName:"tr",align:null},"De krav som ToA-prosessen stiller. F\xf8dselsdato og passnummer kan erstatte norsk f\xf8dselsnummer eller D-nummer. YRK 2310121 skal benyttes"),(0,l.kt)("td",{parentName:"tr",align:null},"SAP")))),(0,l.kt)("h2",{id:"deaktivering-av-tilganger"},"Deaktivering av tilganger"),(0,l.kt)("p",null,"En \xabLeaver\xbb-prosess initieres normal n\xe5r en student har fullf\xf8rt studiet eller en ansatt eller langvarig gjest slutter, men kan ogs\xe5 v\xe6re for\xe5rsaket av at vedkommende er utestengt eller liknende. Forskjellen p\xe5 disse prosessene er at ved utestengelse vil alle tilganger avsluttes umiddelbart, mens i vanlige tilfeller vil det g\xe5 30 dager f\xf8r tilgangene avsluttes. Studenter kan s\xf8ke om seks m\xe5neders forlengelse av tilganger. Langvarige gjester avsluttes angitt dato. Det samme gjelder for kortvarige gjester, dog ikke utover 30 dager fra startdato."))}u.isMDXComponent=!0},7525:function(t,e,n){e.Z=n.p+"assets/images/bilde2-0c0679841ef8f41faee3f2e503dcd6b8.png"},3057:function(t,e,n){e.Z=n.p+"assets/images/bilde4-47a7233cf73e05ff750705bb1c5233d6.png"},6300:function(t,e,n){e.Z=n.p+"assets/images/bilde5-7b14497959021881a40885145bbf2b70.png"},2441:function(t,e,n){e.Z=n.p+"assets/images/bilde6-ef5b4426d61e230ec2d97231162f898c.png"}}]);