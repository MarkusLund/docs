(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return c}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,c=d["".concat(b,".").concat(p)]||d[p]||u[p]||l;return n?a.a.createElement(c,i(i({ref:t},m),{},{components:n})):a.a.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var m=2;m<l;m++)b[m]=n[m];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(106)),b={title:"Brukernavn og bruker-ID"},i={unversionedId:"iam/brukernavn",id:"iam/brukernavn",isDocsHomePage:!1,title:"Brukernavn og bruker-ID",description:"Felles IAM er autorativ kilde for brukeridentifikatorer som opprettes og forvaltes som en del av IAM. Alle eksisterende lokale brukernavn og Feide-IDer for eksisterende brukere vil bevares i nytt IAM. Brukere vil alts\xe5 ikke oppleve at brukernavn endres n\xe5r man migreres til nytt IAM.  For alle nye brukere som on-boardes etter at IAM er operativt ved institusjonen, vil lokalt brukernavn og UH-brukernavn v\xe6re det samme. Over tid vil andelen brukere i UH-sektoren som har lokalt brukernavn som ikke er unikt nasjonalt, bli mindre og mindre.",source:"@site/docs/iam/brukernavn.md",slug:"/iam/brukernavn",permalink:"/docs/docs/iam/brukernavn",editUrl:"https://scm.uninett.no/platon/docs-uninett-no/-/edit/master/docs/iam/brukernavn.md",version:"current",lastUpdatedAt:1642499915,formattedLastUpdatedAt:"1/18/2022",sidebar:"iam",previous:{title:"Livssyklus for identitet og tilgang",permalink:"/docs/docs/iam/livssyklus"},next:{title:"Kildedata",permalink:"/docs/docs/iam/kildedata"}},o=[{value:"Ulike identifikatorer",id:"ulike-identifikatorer",children:[{value:"Feide",id:"feide",children:[]},{value:"Azure AD og p\xe5logging p\xe5 klient PC",id:"azure-ad-og-p\xe5logging-p\xe5-klient-pc",children:[]},{value:"UH-ID",id:"uh-id",children:[]}]},{value:"Identifikator i kildesystemer",id:"identifikator-i-kildesystemer",children:[{value:"Identifikator i SAP",id:"identifikator-i-sap",children:[]},{value:"Identifikator i FS",id:"identifikator-i-fs",children:[]}]},{value:"Identity matching",id:"identity-matching",children:[{value:"Soft matching",id:"soft-matching",children:[]},{value:"Grensesnitt for sammensl\xe5ing av duplikater",id:"grensesnitt-for-sammensl\xe5ing-av-duplikater",children:[]}]},{value:"Use case",id:"use-case",children:[{value:"Eksisterende bruker pre-IAM",id:"eksisterende-bruker-pre-iam",children:[]},{value:"On-boarding av person f\xf8rste gang i IAM",id:"on-boarding-av-person-f\xf8rste-gang-i-iam",children:[]},{value:"Manuell sammensl\xe5ing av duplikater",id:"manuell-sammensl\xe5ing-av-duplikater",children:[]}]},{value:"Generering av nye brukernavn",id:"generering-av-nye-brukernavn",children:[]},{value:"Endre eksisterende brukernavn",id:"endre-eksisterende-brukernavn",children:[]},{value:"Om kontoaktivering",id:"om-kontoaktivering",children:[]},{value:"Om gjestebrukere",id:"om-gjestebrukere",children:[]}],m={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Felles IAM er autorativ kilde for brukeridentifikatorer som opprettes og forvaltes som en del av IAM. Alle eksisterende lokale brukernavn og Feide-IDer for eksisterende brukere vil bevares i nytt IAM. Brukere vil alts\xe5 ikke oppleve at brukernavn endres n\xe5r man migreres til nytt IAM.  For alle nye brukere som on-boardes etter at IAM er operativt ved institusjonen, vil lokalt brukernavn og UH-brukernavn v\xe6re det samme. Over tid vil andelen brukere i UH-sektoren som har lokalt brukernavn som ikke er unikt nasjonalt, bli mindre og mindre.  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Stamme for bruker-ID",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"aabbb000, der aabbb er fors\xf8kt konstruert fra for- og etternavn ihht algoritmen beskrevet nedenfor."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"eduPersonPrincipalName (ePPN)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Globalt unikt brukernavn, som er satt sammen av lokalt brukernavn og realm. Realm er domenenavnet til institusjonen"),Object(l.b)("li",{parentName:"ul"},"ePPN kalles ogs\xe5 ofte Feide ID eller Feidenavn  "),Object(l.b)("li",{parentName:"ul"},"Eksempel: ",Object(l.b)("inlineCode",{parentName:"li"},"ansol1234@uib.no")))),Object(l.b)("li",{parentName:"ul"},"Lokalt brukernavn",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Lokalt brukernavn, som brukeren skriver inn n\xe5r man skal logge inn p\xe5 Feide"),Object(l.b)("li",{parentName:"ul"},"Eksempel: ",Object(l.b)("inlineCode",{parentName:"li"},"gisle1")))),Object(l.b)("li",{parentName:"ul"},"UH-brukernavn",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Et brukernavn, som ikke har en realm-del, men allikevel er unikt p\xe5 tvers av institusjoner innad i IAM"),Object(l.b)("li",{parentName:"ul"},"En person har kun ett UH-brukernavn, ogs\xe5 p\xe5 tvers av institusjoner"),Object(l.b)("li",{parentName:"ul"},"Eksempel: ",Object(l.b)("inlineCode",{parentName:"li"},"ansol1234")))),Object(l.b)("li",{parentName:"ul"},"UH-ID",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Nasjonalt unik personsentrisk identifikator for bruk i kunnskapssektoren."),Object(l.b)("li",{parentName:"ul"},"Eksempel: ",Object(l.b)("inlineCode",{parentName:"li"},"2138972a-99bd-4aaf-aee3-8bdb3a1ab443"))))),Object(l.b)("h2",{id:"ulike-identifikatorer"},"Ulike identifikatorer"),Object(l.b)("h3",{id:"feide"},"Feide"),Object(l.b)("p",null,"Brukeren vil logge p\xe5 med sitt lokale brukernavn etter \xe5 ha valgt institusjon. Feide overf\xf8rer attributter som identifiserer brukeren til tjenesten etter p\xe5logging. Feide b\xf8r kunne tilby b\xe5de UH-ID og ePPN overf\xf8rt til tjenesten. F\xf8r UH-ID kan tilbys, m\xe5 Feides skjema oppdateres for \xe5 gj\xf8re plass til at denne identifikatoren kan provisjonenes."),Object(l.b)("h3",{id:"azure-ad-og-p\xe5logging-p\xe5-klient-pc"},"Azure AD og p\xe5logging p\xe5 klient PC"),Object(l.b)("p",null,"Normalt sett vil institusjonene sette opp Azure AD slik at brukeren logger p\xe5 med ePPN til Microsofts tjenester. \xd8nsker innspill her \u2026 Mer utfyllende info?"),Object(l.b)("h3",{id:"uh-id"},"UH-ID"),Object(l.b)("p",null,"Alle studenter i IAM vil ha en livslang personsentrisk identitet som underst\xf8tter livslang l\xe6ring. Dette ivaretas av et personsentrisk personregister i IAM. For \xe5 identifisere et personinnslag benytter vi en identifikator vi kaller UH-ID. UH-ID genereres f\xf8rste gang en person registreres inn i IAM. UH-ID skal aldri benyttes, skrives inn eller huskes av en person, men brukes kun av tjenester og systemer som skal identifisere personen over tid. UH-ID genereres som en UUIDv4, p\xe5 f\xf8lgende format:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"985651dd-8495-4d89-865b-d2187e96702c")),Object(l.b)("h2",{id:"identifikator-i-kildesystemer"},"Identifikator i kildesystemer"),Object(l.b)("h3",{id:"identifikator-i-sap"},"Identifikator i SAP"),Object(l.b)("p",null,"IAM vil motta en str\xf8m av nye person-registreringer fra SAP for nye ",Object(l.b)("strong",{parentName:"p"},"ansatte")," og ",Object(l.b)("strong",{parentName:"p"},"langvarige gjester"),". F\xf8lge identifikatorer vil f\xf8lge med:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Identifikator"),Object(l.b)("th",{parentName:"tr",align:null},"Beskrivelse"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"D-nummer"),Object(l.b)("td",{parentName:"tr",align:null},"D-nummer\u202fer et\u202fnummer\u202fsom kan tildeles utenlandske personer som ikke har norsk f\xf8dselsnummer, men har et behov for identifisering overfor norske myndigheter.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Ansattnummer"),Object(l.b)("td",{parentName:"tr",align:null},"(Scoped employee number) En identifikator som er unik for person per institusjon i SAP.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Landkode og passnr. + institusjon"),Object(l.b)("td",{parentName:"tr",align:null},"Passnr. Hos UiT registreres ogs\xe5 ansatte med passnr som ikke har D-nummer.")))),Object(l.b)("h3",{id:"identifikator-i-fs"},"Identifikator i FS"),Object(l.b)("p",null,"IAM vil motta en str\xf8m av nye person-registreringer fra FS for nye ",Object(l.b)("strong",{parentName:"p"},"studenter"),". F\xf8lgende identifikatorer vil f\xf8lge med:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Identifikator"),Object(l.b)("th",{parentName:"tr",align:null},"Beskrivelse"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"D-nummer"),Object(l.b)("td",{parentName:"tr",align:null},"D-nummer\u202fer et\u202fnummer\u202fsom kan tildeles utenlandske personer som ikke har norsk f\xf8dselsnummer, men har et behov for identifisering overfor norske myndigheter.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SO-nummer"),Object(l.b)("td",{parentName:"tr",align:null},"Nummeret utstedes av Samordna opptak, typisk til de som hverken har, og kanskje aldri skal ha, f\xf8dselsnummer eller D-nummer. Nummeret brukes bare internt i sektoren av UH-institusjonene og ikke av personen selv.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"FS l\xf8penummer"),Object(l.b)("td",{parentName:"tr",align:null},"(Scoped FS ID number) Et l\xf8penummer som tildeles i FS.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Landkode og passnr. + institusjon"),Object(l.b)("td",{parentName:"tr",align:null},"Passnr. Registreres for utenlandske utvekslingsstudenter.")))),Object(l.b)("p",null,"IAM inneholder et personregister, som inneholder identifikatorer p\xe5 alle personer som er registrert i IAM. For hvert personinnslag ligger en liste over hvilke identifikatorer (av de over) som er tilknyttet personen, og hvilke institusjoner hvor personen har en aktiv konto."),Object(l.b)("h2",{id:"identity-matching"},"Identity matching"),Object(l.b)("p",null,"Hver gang et nytt element dukker opp i datafeeden fra FS eller SAP, vil identifikatorene sjekkes mot personregisteret."),Object(l.b)("p",null,"Dersom personen"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"finnes i personregisteret og har en aktiv tilknytning til den aktuelle institusjonen, vil ingen ny brukerkonto opprettes."),Object(l.b)("li",{parentName:"ul"},"finnes I personregisteret, men ikke har en aktiv tilknytning til den aktuelle institusjonen, vil en ny brukerkonto opprettes.  Personregisteret vil oppdateres om n\xf8dvendig. UH brukernavn eksisterer allerede I personregisteret, og vil brukes som lokalt brukernavn ved institusjonen."),Object(l.b)("li",{parentName:"ul"},"Ikke finnes I personregisteret, vil et nytt innslag I personregisteret opprettes med de aktuelle identifikatorene. Et nytt UH brukernavn vil genereres for personen. Det vil ogs\xe5 opprettes en lokal konto hos institusjonen hvor dette brukernavnet brukes."),Object(l.b)("li",{parentName:"ul"},"Matcher mer enn et innslag i persontabellen; s\xe5 vil importprosessen stoppe opp, og legges i en k\xf8 for manuell prosessering.")),Object(l.b)("h3",{id:"soft-matching"},"Soft matching"),Object(l.b)("p",null,"Dersom personen finnes fra f\xf8r vil man ogs\xe5 gjennomf\xf8re en soft match prosedyre som leter etter match med f\xf8lgende kriterier:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Landkode + passnr"),Object(l.b)("li",{parentName:"ul"},"Personlig epostadresse + f\xf8dselsdato + etternavn"),Object(l.b)("li",{parentName:"ul"},"Mobilnummer + f\xf8dselsdato + etternavn")),Object(l.b)("p",null,"En slik match vil ikke forhindre duplikatoppf\xf8ring, men det nye innslaget vil tagges med en referanse til potensielle duplikat-match."),Object(l.b)("h3",{id:"grensesnitt-for-sammensl\xe5ing-av-duplikater"},"Grensesnitt for sammensl\xe5ing av duplikater"),Object(l.b)("p",null,"Sentral IAM forvaltning har et grensesnitt for \xe5 sl\xe5 sammen to personinnslag som er duplikater.  "),Object(l.b)("p",null,"Sentral IAM forvaltning har et grensesnitt for presentasjon og gjennomgang av potensielle duplikater som matcher p\xe5 tvers av institusjoner."),Object(l.b)("p",null,"Sentral IAM forvaltning har et grensesnitt for \xe5 h\xe5ndtere import av nye personer som ligger i k\xf8 og krever manuell godkjenning, siden de matcher flere enn et eksisterende innslag i personregisteret. De innslagene som matcher vil m\xe5tte sl\xe5es sammen, slik at det er maks er et innslag i personregisteret som matcher den nye personen. Alternativt m\xe5 kildedata oppdateres for den nye personen, slik at den ikke lengre matcher mer enn en person."),Object(l.b)("p",null,"Administrator ved institusjon har et grensesnitt for presentasjon og gjennomgang av potensielle duplikater som kun matcher p\xe5 innenfor samme organisasjon."),Object(l.b)("h2",{id:"use-case"},"Use case"),Object(l.b)("h3",{id:"eksisterende-bruker-pre-iam"},"Eksisterende bruker pre-IAM"),Object(l.b)("p",null,"Brukeren har brukernavn ",Object(l.b)("inlineCode",{parentName:"p"},"olanor@uib.no")," fra f\xf8r"),Object(l.b)("p",null,"Brukeren vil oppst\xe5 hos UiB med f\xf8lgende konto og personobjekt"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Scope"),Object(l.b)("th",{parentName:"tr",align:null},"Identifikator"),Object(l.b)("th",{parentName:"tr",align:null},"Eksempel"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),Object(l.b)("td",{parentName:"tr",align:null},"10017012345")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:Olnor1234@uib.no"},"Olnor1234 "))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),Object(l.b)("td",{parentName:"tr",align:null},"UiB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Ansattnummer"),Object(l.b)("td",{parentName:"tr",align:null},"100199991")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Lokalt brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Olanor")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"ePPN"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:Olanor@uib.no"},"Olanor@uib.no "))))),Object(l.b)("p",null,"Hvis brukeren senere on-boardes NTNU, vil konto og personobjekt bli som f\xf8lger:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Scope"),Object(l.b)("th",{parentName:"tr",align:null},"Identifikator"),Object(l.b)("th",{parentName:"tr",align:null},"Eksempel"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),Object(l.b)("td",{parentName:"tr",align:null},"10017012345")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:Olnor1234@uib.no"},"Olnor1234\xa0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH-ID"),Object(l.b)("td",{parentName:"tr",align:null},"7d673e3c-baea-11ea-b3de-0242ac130004")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),Object(l.b)("td",{parentName:"tr",align:null},"UiB, NTNU")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Ansattnummer"),Object(l.b)("td",{parentName:"tr",align:null},"100199991")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Olanor")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"ePPN"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:Olanor@uib.no"},"Olanor@uib.no\xa0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NTNU"),Object(l.b)("td",{parentName:"tr",align:null},"Ansattnummer"),Object(l.b)("td",{parentName:"tr",align:null},"10012223")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NTNU"),Object(l.b)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Olnor1234")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NTNU"),Object(l.b)("td",{parentName:"tr",align:null},"ePPN"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:olnor1234@ntnu.no"},"olnor1234@ntnu.no\xa0"))))),Object(l.b)("h3",{id:"on-boarding-av-person-f\xf8rste-gang-i-iam"},"On-boarding av person f\xf8rste gang i IAM"),Object(l.b)("p",null,"Kari Normann registreres som ansatt fra FS til UiB:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Scope"),Object(l.b)("th",{parentName:"tr",align:null},"Identifikator"),Object(l.b)("th",{parentName:"tr",align:null},"Eksempel"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),Object(l.b)("td",{parentName:"tr",align:null},"11037012345")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor997")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH-ID"),Object(l.b)("td",{parentName:"tr",align:null},"ccd950fe-baea-11ea-b3de-0242ac130004")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),Object(l.b)("td",{parentName:"tr",align:null},"UiB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Ansattnummer"),Object(l.b)("td",{parentName:"tr",align:null},"200299991")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor997")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"ePPN"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:kanor997@uib.no"},"kanor997@uib.no\xa0"))))),Object(l.b)("p",null,"Kari Normann dukker s\xe5 opp som student hos NTNU:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Scope"),Object(l.b)("th",{parentName:"tr",align:null},"Identifikator"),Object(l.b)("th",{parentName:"tr",align:null},"Eksempel"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),Object(l.b)("td",{parentName:"tr",align:null},"11037012345")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor997")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH-ID"),Object(l.b)("td",{parentName:"tr",align:null},"ccd950fe-baea-11ea-b3de-0242ac130004")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),Object(l.b)("td",{parentName:"tr",align:null},"UiB, NTNU")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Ansattnummer"),Object(l.b)("td",{parentName:"tr",align:null},"200299991")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor997")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"ePPN"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:kanor997@uib.no"},"kanor997@uib.no\xa0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NTNU"),Object(l.b)("td",{parentName:"tr",align:null},"FS l\xf8penummer"),Object(l.b)("td",{parentName:"tr",align:null},"19283746")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NTNU"),Object(l.b)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor997")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NTNU"),Object(l.b)("td",{parentName:"tr",align:null},"ePPN"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:kanor997@ntnu.no"},"kanor997@ntnu.no\xa0"))))),Object(l.b)("h3",{id:"manuell-sammensl\xe5ing-av-duplikater"},"Manuell sammensl\xe5ing av duplikater"),Object(l.b)("p",null,"Gitt et scenario hvor vi har to personinnslag som feilaktig har oppst\xe5tt som duplikater p\xe5 samme person:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Kari Normann \u2013 ansatt hos UiB")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Scope"),Object(l.b)("th",{parentName:"tr",align:null},"Identifikator"),Object(l.b)("th",{parentName:"tr",align:null},"Eksempel"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"D-Nummer"),Object(l.b)("td",{parentName:"tr",align:null},"11037022334")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor997")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH-ID"),Object(l.b)("td",{parentName:"tr",align:null},"2798d4fd-addd-4938-864a-c026851ec4dd")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),Object(l.b)("td",{parentName:"tr",align:null},"UiB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Ansattnummer"),Object(l.b)("td",{parentName:"tr",align:null},"200299991")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor997")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UiB"),Object(l.b)("td",{parentName:"tr",align:null},"ePPN"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:kanor997@uib.no"},"kanor997@uib.no\xa0"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Kari Normann \u2013 student hos NTNU")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Scope"),Object(l.b)("th",{parentName:"tr",align:null},"Identifikator"),Object(l.b)("th",{parentName:"tr",align:null},"Eksempel"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"F\xf8dselsnummer"),Object(l.b)("td",{parentName:"tr",align:null},"11037012345")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH-brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor384")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"UH-ID"),Object(l.b)("td",{parentName:"tr",align:null},"ccd950fe-baea-11ea-b3de-0242ac130004")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Core"),Object(l.b)("td",{parentName:"tr",align:null},"Aktiv tilh\xf8righet"),Object(l.b)("td",{parentName:"tr",align:null},"NTNU")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NTNU"),Object(l.b)("td",{parentName:"tr",align:null},"FS l\xf8penummer"),Object(l.b)("td",{parentName:"tr",align:null},"19283746")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NTNU"),Object(l.b)("td",{parentName:"tr",align:null},"Lokalt\xa0brukernavn"),Object(l.b)("td",{parentName:"tr",align:null},"Kanor384")))),Object(l.b)("h2",{id:"generering-av-nye-brukernavn"},"Generering av nye brukernavn"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If override is provided",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Generate 5-character string using characters a-z"))),Object(l.b)("li",{parentName:"ul"},"Else",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Remove all whitespace characters from first and last name"),Object(l.b)("li",{parentName:"ul"},"Replace all non-Latin characters with appropriate Latin characters from first and last name"),Object(l.b)("li",{parentName:"ul"},"Remove any characters from first and last name that are not a-z"),Object(l.b)("li",{parentName:"ul"},"Use first 2 letters of first name to generate first part of username"),Object(l.b)("li",{parentName:"ul"},"Append enough letters of last name to use 5 characters, if possible"),Object(l.b)("li",{parentName:"ul"},"Ensure that no reserved string from reserved string table is included in username, if so, replace offending characters"))),Object(l.b)("li",{parentName:"ul"},"Append enough random numbers to username to create a 9-character username"),Object(l.b)("li",{parentName:"ul"},"Verify against namespace table to ensure uniqueness"),Object(l.b)("li",{parentName:"ul"},"If not unique, regenerate",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If uniqueness not met within 5 tries, remove a character from alpha portion and replace with random digit")))),Object(l.b)("h2",{id:"endre-eksisterende-brukernavn"},"Endre eksisterende brukernavn"),Object(l.b)("p",null,"Endring av brukernavn er u\xf8nsket, og ikke noe som promoteres som et valg for brukeren. Det vil allikevel v\xe6re tilfeller der man \xf8nsker \xe5 endre brukernavnet til en eksisterende bruker. Det kan for eksempel v\xe6re at en bruker har f\xe5tt et brukernavn som oppleves som st\xf8tende, til tross for en sjekk mot en black-list."),Object(l.b)("p",null,"Helpdesk ved lokal institusjon har et grensesnitt for \xe5 oppdatere brukernavn. Denne muligheten er begrenset til brukere som kun er tilknyttet en institusjon."),Object(l.b)("p",null,"Avhengig av \xe5rsak til endringen av brukernavnet, har man to alternative valg:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Generate a new username where letters are substituted with random letters"),Object(l.b)("li",{parentName:"ul"},"Generate a new username where the exact same rules as used as first-time username generation.")),Object(l.b)("p",null,"Helpdesk godkjenner nytt automatisk generert forslag.\nHelpdesk kan velge \xe5 legge til nye ord til blacklist for \xe5 unng\xe5 flere like tilfeller.\nBrukeren f\xe5r automatisk varsel om oppdatering av brukernavnet."),Object(l.b)("h2",{id:"om-kontoaktivering"},"Om kontoaktivering"),Object(l.b)("p",null,"Alle brukere med f\xf8dselsnummer aktiverer sin konto ved bruk av ID-porten. Alle andre brukere registrerer seg ved \xe5 verifisere eierskap av e-postadresse og mobilnummer. Dersom mobilnummer ikke er registrert, verifiseres kun e-postadresse."),Object(l.b)("h2",{id:"om-gjestebrukere"},"Om gjestebrukere"),Object(l.b)("p",null,"Alle gjester (med unntak av kortvarige gjester) registreres i SAP. Kortvarige gjester kan registreres direkte i IAM av en sponsor. Institusjonene kan definere reglene for hvem som er godkjent som sponsor."))}s.isMDXComponent=!0}}]);