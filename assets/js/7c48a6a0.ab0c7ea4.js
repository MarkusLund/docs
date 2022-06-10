"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[895],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4549:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={title:"Passordpolicy"},p=void 0,l={unversionedId:"iam/passordpolicy",id:"iam/passordpolicy",title:"Passordpolicy",description:"Valid characters",source:"@site/docs/iam/passordpolicy.md",sourceDirName:"iam",slug:"/iam/passordpolicy",permalink:"/docs/iam/passordpolicy",editUrl:"https://github.com/sikt-no/docs/tree/master/docs/iam/passordpolicy.md",tags:[],version:"current",lastUpdatedAt:1654845178,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"Passordpolicy"},sidebar:"iam",previous:{title:"REST API",permalink:"/docs/iam/rest-api"},next:{title:"Rapportering",permalink:"/docs/iam/rapportering"}},c={},u=[{value:"Valid characters",id:"valid-characters",level:2},{value:"Maximum password length",id:"maximum-password-length",level:2},{value:"Minimum password complexity",id:"minimum-password-complexity",level:2},{value:"Password cannot be reused",id:"password-cannot-be-reused",level:2},{value:"Password expiration policy",id:"password-expiration-policy",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"valid-characters"},"Valid characters"),(0,a.kt)("p",null,"Password can only contain characters that are part of ISO 8859-1."),(0,a.kt)("h2",{id:"maximum-password-length"},"Maximum password length"),(0,a.kt)("p",null,"The password cannot be more than 127 characters.  "),(0,a.kt)("h2",{id:"minimum-password-complexity"},"Minimum password complexity"),(0,a.kt)("p",null,"The password must have a complexity of more than 32 points."),(0,a.kt)("p",null,"Algorithm for calculating password complexity points:"),(0,a.kt)("p",null,"Kompleksiteten av et passord m\xe5les i poeng. Poengsummen et passord vil f\xe5 er avhengig av bl.a. lengde og antall tegngrupper som er representert i passordet."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4 poeng for det f\xf8rste tegnet i passordet"),(0,a.kt)("li",{parentName:"ul"},"2 poeng for hvert av de neste syv tegn"),(0,a.kt)("li",{parentName:"ul"},"Hvert tegn fra tegn 9 til og med tegn 20 f\xe5r 1.5 poeng"),(0,a.kt)("li",{parentName:"ul"},"Hvert tegn etter tegn 20 f\xe5r 1 poeng"),(0,a.kt)("li",{parentName:"ul"},"6 poeng bonus hvis passordet inneholder tegn av minst tre av de fire tegngruppene (store bokstaver, sm\xe5 bokstaver, tall og spesialtegn)"),(0,a.kt)("li",{parentName:"ul"},"8 poeng (total) bonus dersom passordet inneholder minst to tegn for hver av de tre tegngruppene beskrevet over")),(0,a.kt)("p",null,"Felles IAM har valgt \xe5 gjenbruke ",(0,a.kt)("a",{parentName:"p",href:"https://www.uio.no/tjenester/it/brukernavn-passord/passordtjenester/hjelp/kompleksitet.html"},"samme passord policy som er brukt ved UiO"),", som er godt begrunnet."),(0,a.kt)("h2",{id:"password-cannot-be-reused"},"Password cannot be reused"),(0,a.kt)("p",null,"The password cannot be set to one of the previous passwords (of the same user)."),(0,a.kt)("h2",{id:"password-expiration-policy"},"Password expiration policy"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"We will propose to remove this part of the policy. Given the password rules above enforcing srong passwords for all accounts, and the extended use of MFA, password expiration will be re-evaluated.")),(0,a.kt)("p",null,"The password should expire 13 months after it is set. The user will be notified and encouraged to set a new password before it expires."))}m.isMDXComponent=!0}}]);