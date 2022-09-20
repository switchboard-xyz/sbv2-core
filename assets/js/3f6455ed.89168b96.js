"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9074,2638],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:e},s),{},{components:n})):r.createElement(f,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5125:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(3117),a=(n(7294),n(3905));const o={toc:[]};function l(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/feeds/solana/idl/types/CrankRow"},"CrankRow"),"[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer account storing a set number of accepted onchain results for a given aggregator")))))}l.isMDXComponent=!0;var i=n(1974);const p={},c=void 0,s={unversionedId:"solana/idl/accounts/CrankBuffer",id:"solana/idl/accounts/CrankBuffer",title:"CrankBuffer",description:"Serialized buffer account storing the list of aggregators and their next update timestamp.",source:"@site/docs/solana/idl/accounts/CrankBuffer.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/CrankBuffer",permalink:"/sbv2-core/solana/idl/accounts/CrankBuffer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"CrankAccountData",permalink:"/sbv2-core/solana/idl/accounts/CrankAccountData"},next:{title:"JobAccountData",permalink:"/sbv2-core/solana/idl/accounts/JobAccountData"}},u={},d=[],m={toc:d};function f(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Serialized buffer account storing the list of aggregators and their next update timestamp."),(0,a.kt)("b",null,"Size: "),"8 Bytes + (48 Bytes \xd7 Num Aggregators)",(0,a.kt)("br",null),(0,a.kt)("b",null,"Rent Exemption: ")," Dependent on number of aggregators.",(0,a.kt)("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 1,000 aggregators: 0.335026560 SOL",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l,{mdxType:"CrankBuffer"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CrankRow")),(0,a.kt)(i.default,{mdxType:"CrankRow"}))}f.isMDXComponent=!0},1974:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"solana/idl/types/CrankRow",id:"solana/idl/types/CrankRow",title:"CrankRow",description:"| Field         | Type      | Description                                            |",source:"@site/docs/solana/idl/types/CrankRow.md",sourceDirName:"solana/idl/types",slug:"/solana/idl/types/CrankRow",permalink:"/sbv2-core/solana/idl/types/CrankRow",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"CompletedPointZC",permalink:"/sbv2-core/solana/idl/types/CompletedPointZC"},next:{title:"EcvrfIntermediate",permalink:"/sbv2-core/solana/idl/types/EcvrfIntermediate"}},p={},c=[],s={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pubkey"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"Aggregator account pubkey")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nextTimestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"i64"),(0,a.kt)("td",{parentName:"tr",align:null},"Next aggregator update timestamp to order the crank by")))))}u.isMDXComponent=!0}}]);