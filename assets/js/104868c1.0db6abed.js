"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8735],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>d});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,g=u(t,["components","mdxType","originalType","parentName"]),s=p(a),d=n,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return a?r.createElement(k,i(i({ref:e},g),{},{components:a})):r.createElement(k,i({ref:e},g))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},56722:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const l={},i=void 0,u={unversionedId:"solana/idl/instructions/aggregatorSaveResultV2",id:"solana/idl/instructions/aggregatorSaveResultV2",title:"aggregatorSaveResultV2",description:"Accounts",source:"@site/docs/solana/idl/instructions/aggregatorSaveResultV2.md",sourceDirName:"solana/idl/instructions",slug:"/solana/idl/instructions/aggregatorSaveResultV2",permalink:"/solana/idl/instructions/aggregatorSaveResultV2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"aggregatorSaveResult",permalink:"/solana/idl/instructions/aggregatorSaveResult"},next:{title:"aggregatorSetAuthority",permalink:"/solana/idl/instructions/aggregatorSetAuthority"}},o={},p=[{value:"Accounts",id:"accounts",level:2},{value:"Args",id:"args",level:2}],g={toc:p};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"accounts"},"Accounts"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"isMut"),(0,n.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"aggregator"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oracle"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oracleAuthority"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oracleQueue"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queueAuthority"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"feedPermission"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oraclePermission"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lease"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"escrow"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tokenProgram"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"programState"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"historyBuffer"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mint"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"args"},"Args"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/aggregatorsaveresultparamsv2"},"AggregatorSaveResultParamsV2")),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);