"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[331],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=k(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,g=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var k={};for(var o in t)hasOwnProperty.call(t,o)&&(k[o]=t[o]);k.originalType=e,k.mdxType="string"==typeof e?e:a,i[1]=k;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],k={title:"Brukernavn og bruker-ID"},o=void 0,s={unversionedId:"iam/brukernavn",id:"iam/brukernavn",title:"Brukernavn og bruker-ID",description:"Felles IAM er autorativ kilde for brukeridentifikatorer som opprettes og forvaltes som en del av IAM. Alle eksisterende lokale brukernavn og Feide-IDer for eksisterende brukere vil bevares i nytt IAM. Brukere vil alts\xe5 ikke oppleve at brukernavn endres n\xe5r man migreres til nytt IAM.  For alle nye brukere som on-boardes etter at IAM er operativt ved institusjonen, vil lokalt brukernavn og UH-brukernavn v\xe6re det samme. Over tid vil andelen brukere i UH-sektoren som har lokalt brukernavn som ikke er unikt nasjonalt, bli mindre og mindre.",source:"@site/docs/iam/brukernavn.md",sourceDirName:"iam",slug:"/iam/brukernavn",permalink:"/docs/iam/brukernavn",editUrl:"https://github.com/sikt-no/docs/tree/master/docs/iam/brukernavn.md",tags:[],version:"current",lastUpdatedAt:1654845178,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"Brukernavn og bruker-ID"},sidebar:"iam",previous:{title:"Livssyklus for identitet og tilgang",permalink:"/docs/iam/livssyklus"},next:{title:"Virksomhetsroller",permalink:"/docs/iam/virksomhetsroller"}},m={},u=[{value:"Ulike identifikatorer",id:"ulike-identifikatorer",level:2},{value:"Feide",id:"feide",level:3},{value:"Azure AD og p\xe5logging p\xe5 klient PC",id:"azure-ad-og-p\xe5logging-p\xe5-klient-pc",level:3},{value:"UH-ID",id:"uh-id",level:3},{value:"Identifikator i kildesystemer",id:"identifikator-i-kildesystemer",level:2},{value:"Identifikator i SAP",id:"identifikator-i-sap",level:3},{value:"Identifikator i FS",id:"identifikator-i-fs",level:3},{value:"Identity matching",id:"identity-matching",level:2},{value:"Soft matching",id:"soft-matching",level:3},{value:"Grensesnitt for sammensl\xe5ing av duplikater",id:"grensesnitt-for-sammensl\xe5ing-av-duplikater",level:3},{value:"Use case",id:"use-case",level:2},{value:"Eksisterende bruker pre-IAM",id:"eksisterende-bruker-pre-iam",level:3},{value:"On-boarding av person f\xf8rste gang i IAM",id:"on-boarding-av-person-f\xf8rste-gang-i-iam",level:3},{value:"Manuell sammensl\xe5ing av duplikater",id:"manuell-sammensl\xe5ing-av-duplikater",level:3},{value:"Generering av nye brukernavn",id:"generering-av-nye-brukernavn",level:2},{value:"Endre eksisterende brukernavn",id:"endre-eksisterende-brukernavn",level:2},{value:"Om kontoaktivering",id:"om-kontoaktivering",level:2},{value:"Om gjestebrukere",id:"om-gjestebrukere",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Felles IAM er autorativ kilde for brukeridentifikatorer som opprettes og forvaltes som en del av IAM. Alle eksisterende lokale brukernavn og Feide-IDer for eksisterende brukere vil bevares i nytt IAM. Brukere vil alts\xe5 ikke oppleve at brukernavn endres n\xe5r man migreres til nytt IAM.  For alle nye brukere som on-boardes etter at IAM er operativt ved institusjonen, vil lokalt brukernavn og UH-brukernavn v\xe6re det samme. Over tid vil andelen brukere i UH-sektoren som har lokalt brukernavn som ikke er unikt nasjonalt, bli mindre og mindre.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stamme for bruker-ID",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"aabbb000, der aabbb er fors\xf8kt konstruert fra for- og etternavn ihht algoritmen beskrevet nedenfor."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eduPersonPrincipalName (ePPN)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Globalt unikt brukernavn, som er satt sammen av lokalt brukernavn og realm. Realm er domenenavnet til institusjonen"),(0,l.kt)("li",{parentName:"ul"},"ePPN kalles ogs\xe5 ofte Feide ID eller Feidenavn  "),(0,l.kt)("li",{parentName:"ul"},"Eksempel: ",(0,l.kt)("inlineCode",{parentName:"li"},"ansol1234@uib.no")))),(0,l.kt)("li",{parentName:"ul"},"Lokalt brukernavn",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Lokalt brukernavn, som brukeren skriver inn n\xe5r man skal logge inn p\xe5 Feide"),(0,l.kt)("li",{parentName:"ul"},"Eksempel: ",(0,l.kt)("inlineCode",{parentName:"li"},"gisle1")))),(0,l.kt)("li",{parentName:"ul"},"UH-brukernavn",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Et brukernavn, som ikke har en realm-del, men allikevel er unikt p\xe5 tvers av institusjoner innad i IAM"),(0,l.kt)("li",{parentName:"ul"},"En person har kun ett UH-brukernavn, ogs\xe5 p\xe5 tvers av institusjoner"),(0,l.kt)("li",{parentName:"ul"},"Eksempel: ",(0,l.kt)("inlineCode",{parentName:"li"},"ansol1234")))),(0,l.kt)("li",{parentName:"ul"},"UH-ID",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Nasjonalt unik personsentrisk identifikator for bruk i kunnskapssektoren."),(0,l.kt)("li",{parentName:"ul"},"Eksempel: ",(0,l.kt)("inlineCode",{parentName:"li"},"2138972a-99bd-4aaf-aee3-8bdb3a1ab443"))))),(0,l.kt)("h2",{id:"ulike-identifikatorer"},"Ulike identifikatorer"),(0,l.kt)("h3",{id:"feide"},"Feide"),(0,l.kt)("p",null,"Brukeren vil logge p\xe5 med sitt lokale brukernavn etter \xe5 ha valgt institusjon. Feide overf\xf8rer attributter som identifiserer brukeren til tjenesten etter p\xe5logging. Feide b\xf8r kunne tilby b\xe5de UH-ID og ePPN overf\xf8rt til tjenesten. F\xf8r UH-ID kan tilbys, m\xe5 Feides skjema oppdateres for \xe5 gj\xf8re plass til at denne identifikatoren kan provisjonenes."),(0,l.kt)("h3",{id:"azure-ad-og-p\xe5logging-p\xe5-klient-pc"},"Azure AD og p\xe5logging p\xe5 klient PC"),(0,l.kt)("p",null,"Normalt sett vil institusjonene sette opp Azure AD slik at brukeren logger p\xe5 med ePPN til Microsofts tjenester. \xd8nsker innspill her \u2026 Mer utfyllende info?"),(0,l.kt)("h3",{id:"uh-id"},"UH-ID"),(0,l.kt)("p",null,"Alle studenter i IAM vil ha en livslang personsentrisk identitet som underst\xf8tter livslang l\xe6ring. Dette ivaretas av et personsentrisk personregister i IAM. For \xe5 identifisere et personinnslag benytter vi en identifikator vi kaller UH-ID. UH-ID genereres f\xf8rste gang en person registreres inn i IAM. UH-ID skal aldri benyttes, skrives inn eller huskes av en person, men brukes kun av tjenester og systemer som skal identifisere personen over tid. UH-ID genereres som en UUIDv4, p\xe5 f\xf8lgende format:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"985651dd-8495-4d89-865b-d2187e96702c")),(0,l.kt)("h2",{id:"identifikator-i-kildesystemer"},"Identifikator i kildesystemer"),(0,l.kt)("h3",{id:"identifikator-i-sap"},"Identifikator i SAP"),(0,l.kt)("p",null,"IAM vil motta en str\xf8m av nye person-registreringer fra SAP for nye ",(0,l.kt)("strong",{parentName:"p"},"ansatte")," og ",(0,l.kt)("strong",{parentName:"p"},"langvarige gjester"),". F\xf8lge identifikatorer vil f\xf8lge med:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,l.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D-nummer"),(0,l.kt)("td",{parentName:"tr",align:null},"D-nummer\u202fer et\u202fnummer\u202fsom kan tildeles utenlandske personer som ikke har norsk f\xf8dselsnummer, men har et behov for identifisering overfor norske myndigheter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ansattnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"(Scoped employee number) En identifikator som er unik for person per institusjon i SAP.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Landkode og passnr. + institusjon"),(0,l.kt)("td",{parentName:"tr",align:null},"Passnr. Hos UiT registreres ogs\xe5 ansatte med passnr som ikke har D-nummer.")))),(0,l.kt)("h3",{id:"identifikator-i-fs"},"Identifikator i FS"),(0,l.kt)("p",null,"IAM vil motta en str\xf8m av nye person-registreringer fra FS for nye ",(0,l.kt)("strong",{parentName:"p"},"studenter"),". F\xf8lgende identifikatorer vil f\xf8lge med:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,l.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D-nummer"),(0,l.kt)("td",{parentName:"tr",align:null},"D-nummer\u202fer et\u202fnummer\u202fsom kan tildeles utenlandske personer som ikke har norsk f\xf8dselsnummer, men har et behov for identifisering overfor norske myndigheter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO-nummer"),(0,l.kt)("td",{parentName:"tr",align:null},"Nummeret utstedes av Samordna opptak, typisk til de som hverken har, og kanskje aldri skal ha, f\xf8dselsnummer eller D-nummer. Nummeret brukes bare internt i sektoren av UH-institusjonene og ikke av personen selv.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FS l\xf8penummer"),(0,l.kt)("td",{parentName:"tr",align:null},"(Scoped FS ID number) Et l\xf8penummer som tildeles i FS.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Landkode og passnr. + institusjon"),(0,l.kt)("td",{parentName:"tr",align:null},"Passnr. Registreres for utenlandske utvekslingsstudenter.")))),(0,l.kt)("p",null,"IAM inneholder et personregister, som inneholder identifikatorer p\xe5 alle personer som er registrert i IAM. For hvert personinnslag ligger en liste over hvilke identifikatorer (av de over) som er tilknyttet personen, og hvilke institusjoner hvor personen har en aktiv konto."),(0,l.kt)("h2",{id:"identity-matching"},"Identity matching"),(0,l.kt)("p",null,"Hver gang et nytt element dukker opp i datafeeden fra FS eller SAP, vil identifikatorene sjekkes mot personregisteret."),(0,l.kt)("p",null,"Dersom personen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"finnes i personregisteret og har en aktiv tilknytning til den aktuelle institusjonen, vil ingen ny brukerkonto opprettes."),(0,l.kt)("li",{parentName:"ul"},"finnes I personregisteret, men ikke har en aktiv tilknytning til den aktuelle institusjonen, vil en ny brukerkonto opprettes.  Personregisteret vil oppdateres om n\xf8dvendig. UH brukernavn eksisterer allerede I personregisteret, og vil brukes som lokalt brukernavn ved institusjonen."),(0,l.kt)("li",{parentName:"ul"},"Ikke finnes I personregisteret, vil et nytt innslag I personregisteret opprettes med de aktuelle identifikatorene. Et nytt UH brukernavn vil genereres for personen. Det vil ogs\xe5 opprettes en lokal konto hos institusjonen hvor dette brukernavnet brukes."),(0,l.kt)("li",{parentName:"ul"},"Matcher mer enn et innslag i persontabellen; s\xe5 vil importprosessen stoppe opp, og legges i en k\xf8 for manuell prosessering.")),(0,l.kt)("h3",{id:"soft-matching"},"Soft matching"),(0,l.kt)("p",null,"Dersom personen finnes fra f\xf8r vil man ogs\xe5 gjennomf\xf8re en soft match prosedyre som leter etter match med f\xf8lgende kriterier:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Landkode + passnr"),(0,l.kt)("li",{parentName:"ul"},"Personlig epostadresse + f\xf8dselsdato + etternavn"),(0,l.kt)("li",{parentName:"ul"},"Mobilnummer + f\xf8dselsdato + etternavn")),(0,l.kt)("p",null,"En slik match vil ikke forhindre duplikatoppf\xf8ring, men det nye innslaget vil tagges med en referanse til potensielle duplikat-match."),(0,l.kt)("h3",{id:"grensesnitt-for-sammensl\xe5ing-av-duplikater"},"Grensesnitt for sammensl\xe5ing av duplikater"),(0,l.kt)("p",null,"Sentral IAM forvaltning har et grensesnitt for \xe5 sl\xe5 sammen to personinnslag som er duplikater.  "),(0,l.kt)("p",null,"Sentral IAM forvaltning har et grensesnitt for presentasjon og gjennomgang av potensielle duplikater som matcher p\xe5 tvers av institusjoner."),(0,l.kt)("p",null,"Sentral IAM forvaltning har et grensesnitt for \xe5 h\xe5ndtere import av nye personer som ligger i k\xf8 og krever manuell godkjenning, siden de matcher flere enn et eksisterende innslag i personregisteret. De innslagene som matcher vil m\xe5tte sl\xe5es sammen, slik at det er maks er et innslag i personregisteret som matcher den nye personen. Alternativt m\xe5 kildedata oppdateres for den nye personen, slik at den ikke lengre matcher mer enn en person."),(0,l.kt)("p",null,"Administrator ved institusjon har et grensesnitt for presentasjon og gjennomgang av potensielle duplikater som kun matcher p\xe5 innenfor samme organisasjon."),(0,l.kt)("h2",{id:"use-case"},"Use case"),(0,l.kt)("h3",{id:"eksisterende-bruker-pre-iam"},"Eksisterende bruker pre-IAM"),(0,l.kt)("p",null,"Brukeren har brukernavn ",(0,l.kt)("inlineCode",{parentName:"p"},"olanor@uib.no")," fra f\xf8r"),(0,l.kt)("p",null,"Brukeren vil oppst\xe5 hos UiB med f\xf8lgende konto og personobjekt"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,l.kt)("th",{parentName:"tr",align:null},"Eksempel"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"10017012345")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:Olnor1234@uib.no"},"Olnor1234 "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),(0,l.kt)("td",{parentName:"tr",align:null},"UiB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Ansattnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"100199991")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Lokalt brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Olanor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"ePPN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:Olanor@uib.no"},"Olanor@uib.no "))))),(0,l.kt)("p",null,"Hvis brukeren senere on-boardes NTNU, vil konto og personobjekt bli som f\xf8lger:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,l.kt)("th",{parentName:"tr",align:null},"Eksempel"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"10017012345")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:Olnor1234@uib.no"},"Olnor1234\xa0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH-ID"),(0,l.kt)("td",{parentName:"tr",align:null},"7d673e3c-baea-11ea-b3de-0242ac130004")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),(0,l.kt)("td",{parentName:"tr",align:null},"UiB, NTNU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Ansattnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"100199991")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Olanor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"ePPN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:Olanor@uib.no"},"Olanor@uib.no\xa0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NTNU"),(0,l.kt)("td",{parentName:"tr",align:null},"Ansattnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"10012223")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NTNU"),(0,l.kt)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Olnor1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NTNU"),(0,l.kt)("td",{parentName:"tr",align:null},"ePPN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:olnor1234@ntnu.no"},"olnor1234@ntnu.no\xa0"))))),(0,l.kt)("h3",{id:"on-boarding-av-person-f\xf8rste-gang-i-iam"},"On-boarding av person f\xf8rste gang i IAM"),(0,l.kt)("p",null,"Kari Normann registreres som ansatt fra FS til UiB:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,l.kt)("th",{parentName:"tr",align:null},"Eksempel"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"11037012345")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor997")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH-ID"),(0,l.kt)("td",{parentName:"tr",align:null},"ccd950fe-baea-11ea-b3de-0242ac130004")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),(0,l.kt)("td",{parentName:"tr",align:null},"UiB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Ansattnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"200299991")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor997")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"ePPN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:kanor997@uib.no"},"kanor997@uib.no\xa0"))))),(0,l.kt)("p",null,"Kari Normann dukker s\xe5 opp som student hos NTNU:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,l.kt)("th",{parentName:"tr",align:null},"Eksempel"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"11037012345")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor997")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH-ID"),(0,l.kt)("td",{parentName:"tr",align:null},"ccd950fe-baea-11ea-b3de-0242ac130004")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),(0,l.kt)("td",{parentName:"tr",align:null},"UiB, NTNU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Ansattnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"200299991")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor997")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"ePPN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:kanor997@uib.no"},"kanor997@uib.no\xa0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NTNU"),(0,l.kt)("td",{parentName:"tr",align:null},"FS l\xf8penummer"),(0,l.kt)("td",{parentName:"tr",align:null},"19283746")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NTNU"),(0,l.kt)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor997")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NTNU"),(0,l.kt)("td",{parentName:"tr",align:null},"ePPN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:kanor997@ntnu.no"},"kanor997@ntnu.no\xa0"))))),(0,l.kt)("h3",{id:"manuell-sammensl\xe5ing-av-duplikater"},"Manuell sammensl\xe5ing av duplikater"),(0,l.kt)("p",null,"Gitt et scenario hvor vi har to personinnslag som feilaktig har oppst\xe5tt som duplikater p\xe5 samme person:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kari Normann \u2013 ansatt hos UiB")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,l.kt)("th",{parentName:"tr",align:null},"Eksempel"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"D-Nummer"),(0,l.kt)("td",{parentName:"tr",align:null},"11037022334")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor997")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH-ID"),(0,l.kt)("td",{parentName:"tr",align:null},"2798d4fd-addd-4938-864a-c026851ec4dd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),(0,l.kt)("td",{parentName:"tr",align:null},"UiB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Ansattnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"200299991")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor997")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UiB"),(0,l.kt)("td",{parentName:"tr",align:null},"ePPN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:kanor997@uib.no"},"kanor997@uib.no\xa0"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kari Normann \u2013 student hos NTNU")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,l.kt)("th",{parentName:"tr",align:null},"Eksempel"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,l.kt)("td",{parentName:"tr",align:null},"11037012345")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH-brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor384")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"UH-ID"),(0,l.kt)("td",{parentName:"tr",align:null},"ccd950fe-baea-11ea-b3de-0242ac130004")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),(0,l.kt)("td",{parentName:"tr",align:null},"NTNU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NTNU"),(0,l.kt)("td",{parentName:"tr",align:null},"FS l\xf8penummer"),(0,l.kt)("td",{parentName:"tr",align:null},"19283746")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NTNU"),(0,l.kt)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),(0,l.kt)("td",{parentName:"tr",align:null},"Kanor384")))),(0,l.kt)("h2",{id:"generering-av-nye-brukernavn"},"Generering av nye brukernavn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If override is provided",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Generate 5-character string using characters a-z"))),(0,l.kt)("li",{parentName:"ul"},"Else",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Remove all whitespace characters from first and last name"),(0,l.kt)("li",{parentName:"ul"},"Replace all non-Latin characters with appropriate Latin characters from first and last name"),(0,l.kt)("li",{parentName:"ul"},"Remove any characters from first and last name that are not a-z"),(0,l.kt)("li",{parentName:"ul"},"Use first 2 letters of first name to generate first part of username"),(0,l.kt)("li",{parentName:"ul"},"Append enough letters of last name to use 5 characters, if possible"),(0,l.kt)("li",{parentName:"ul"},"Ensure that no reserved string from reserved string table is included in username, if so, replace offending characters"))),(0,l.kt)("li",{parentName:"ul"},"Append enough random numbers to username to create a 9-character username"),(0,l.kt)("li",{parentName:"ul"},"Verify against namespace table to ensure uniqueness"),(0,l.kt)("li",{parentName:"ul"},"If not unique, regenerate",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If uniqueness not met within 5 tries, remove a character from alpha portion and replace with random digit")))),(0,l.kt)("h2",{id:"endre-eksisterende-brukernavn"},"Endre eksisterende brukernavn"),(0,l.kt)("p",null,"Endring av brukernavn er u\xf8nsket, og ikke noe som promoteres som et valg for brukeren. Det vil allikevel v\xe6re tilfeller der man \xf8nsker \xe5 endre brukernavnet til en eksisterende bruker. Det kan for eksempel v\xe6re at en bruker har f\xe5tt et brukernavn som oppleves som st\xf8tende, til tross for en sjekk mot en black-list."),(0,l.kt)("p",null,"Helpdesk ved lokal institusjon har et grensesnitt for \xe5 oppdatere brukernavn. Denne muligheten er begrenset til brukere som kun er tilknyttet en institusjon."),(0,l.kt)("p",null,"Avhengig av \xe5rsak til endringen av brukernavnet, har man to alternative valg:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generate a new username where letters are substituted with random letters"),(0,l.kt)("li",{parentName:"ul"},"Generate a new username where the exact same rules as used as first-time username generation.")),(0,l.kt)("p",null,"Helpdesk godkjenner nytt automatisk generert forslag.\nHelpdesk kan velge \xe5 legge til nye ord til blacklist for \xe5 unng\xe5 flere like tilfeller.\nBrukeren f\xe5r automatisk varsel om oppdatering av brukernavnet."),(0,l.kt)("h2",{id:"om-kontoaktivering"},"Om kontoaktivering"),(0,l.kt)("p",null,"Alle brukere med f\xf8dselsnummer aktiverer sin konto ved bruk av ID-porten. Alle andre brukere registrerer seg ved \xe5 verifisere eierskap av e-postadresse og mobilnummer. Dersom mobilnummer ikke er registrert, verifiseres kun e-postadresse."),(0,l.kt)("h2",{id:"om-gjestebrukere"},"Om gjestebrukere"),(0,l.kt)("p",null,"Alle gjester (med unntak av kortvarige gjester) registreres i SAP. Kortvarige gjester kan registreres direkte i IAM av en sponsor. Institusjonene kan definere reglene for hvem som er godkjent som sponsor."))}d.isMDXComponent=!0}}]);