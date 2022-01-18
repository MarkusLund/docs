(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),i=(r(0),r(106)),o={title:"Felles IAM",disableTitleTagline:!0},l={unversionedId:"iam/index",id:"iam/index",isDocsHomePage:!1,title:"Felles IAM",description:"Identitets- og tilgangsstyring (IAM) handler om \xe5 gi studenter, forskere og ansatte riktig tilgang til digitale systemer, tjenester og ressurser, samt avslutte tilgang for brukere som ikke lenger skal ha det.",source:"@site/docs/iam/index.md",slug:"/iam/index",permalink:"/docs/docs/iam/index",editUrl:"https://scm.uninett.no/platon/docs-uninett-no/-/edit/master/docs/iam/index.md",version:"current",lastUpdatedAt:1642499915,formattedLastUpdatedAt:"1/18/2022",sidebar:"iam",next:{title:"Gevinster ved Felles IAM",permalink:"/docs/docs/iam/gevinster"}},s=[],p={toc:s};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Identitets- og tilgangsstyring (IAM) handler om \xe5 gi studenter, forskere og ansatte riktig tilgang til digitale systemer, tjenester og ressurser, samt avslutte tilgang for brukere som ikke lenger skal ha det."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.uninett.no/en/node/2257"},"Les mer om IAM-tjenesten p\xe5 uninett.no")),Object(i.b)("p",null,"Her vil du finne overordnet systemdokumentasjon, og etterhvert brukerdokumentasjon. ",Object(i.b)("a",{parentName:"p",href:"./arkitektur"},"En overordnet arkitektur for IAM")," og ",Object(i.b)("a",{parentName:"p",href:"./gevinster"},"gevinster")," vil v\xe6re en gode steder \xe5 starte for \xe5 bedre forst\xe5 IAM."),Object(i.b)("p",null,"Felles IAM vil ",Object(i.b)("a",{parentName:"p",href:"./livssyklus"},"livssyklusen til studenter, ansatte og gjester"),", og opprette, endre og fjerne digitale kontoer basert p\xe5 data fra ",Object(i.b)("a",{parentName:"p",href:"./kildedata"},"kildesystemer"),". Felles IAM kan identifisere en person p\xe5 tvers av utdanningsinstitusjoner, og ",Object(i.b)("a",{parentName:"p",href:"./brukernavn"},"generere et nasjonalt unikt brukernavn og en identifikator"),". N\xe5r en bruker m\xf8ter en utdanningsinstisujon for f\xf8rste gang vil vedkommende m\xf8te ",Object(i.b)("a",{parentName:"p",href:"./kontoaktivering"},"en brukervennlig kontoaktivering"),", hvor man blant annet setter passordet, i henhold til ",Object(i.b)("a",{parentName:"p",href:"./passordpolicy"},"felles passordpolicy"),". Noe av den mest sentrale funksjonaliteten i Felles IAM er ",Object(i.b)("a",{parentName:"p",href:"./tilgangsstyring"},"tilgangsstyring til m\xe5lsystemer"),", hvor tilganger kan settes basert p\xe5 ",Object(i.b)("a",{parentName:"p",href:"./virksomhetsroller"},"virksomhetsroller"),"."),Object(i.b)("p",null,"N\xe5r tilgangsstyring er samlet og kontrollert fra et sted vil ",Object(i.b)("a",{parentName:"p",href:"./rapportering"},"rapportering")," gi oversikt og kontroll, og bidra til \xe5 hjelpe med \xe5 etterlevere lovverk og standarder."),Object(i.b)("p",null,"Forvaltning av IAM p\xe5 en institusjon er et samarbeid, hvor ",Object(i.b)("a",{parentName:"p",href:"./ansvar"},"ansvar fordeles ut i organisasjonen"),", og er ikke begrenset til IT-avdelingen."),Object(i.b)("p",null,"Felles IAM er realisert med produktet ",Object(i.b)("a",{parentName:"p",href:"./produkt"},"Rapid Identity")," levert av Identity Automations."),Object(i.b)("p",null,"For mer tekniske dypdykk:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./datamodell"},"Felles IAM datamodell")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./datamodell"},"REST API for integrasjoner mot m\xe5lsystemer"))),Object(i.b)("p",null,"I ",Object(i.b)("a",{parentName:"p",href:"./referanser"},"referanser")," vil du finne flere lenker til andre kilder som dokumenterer l\xf8sningen ytterligere."))}c.isMDXComponent=!0}}]);