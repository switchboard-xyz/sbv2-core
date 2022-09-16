"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7066,6027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=p(a),N=r,d=u["".concat(i,".").concat(N)]||u[N]||c[N]||s;return a?n.createElement(d,m(m({ref:t},o),{},{components:a})):n.createElement(d,m({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,m[1]=l;for(var p=2;p<s;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25336:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const s={},m=void 0,l={unversionedId:"types/OracleMetrics",id:"types/OracleMetrics",title:"OracleMetrics",description:"| Field                   | Type | Description                                                                                                |",source:"@site/idl/types/OracleMetrics.md",sourceDirName:"types",slug:"/types/OracleMetrics",permalink:"/sbv2-core/idl/types/OracleMetrics",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lanes",permalink:"/sbv2-core/idl/types/Lanes"},next:{title:"OracleResponseType",permalink:"/sbv2-core/idl/types/OracleResponseType"}},i={},p=[],o={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutiveSuccess"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of consecutive successful update request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutiveError"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in an error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutiveDisagreement"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in a disagreement with the accepted median result")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutiveLateResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that were posted on-chain late and not included in an accepted result")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutiveFailure"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in a failure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalSuccess"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of successful update request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalError"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of update request that resulted in an error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalDisagreement"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of update request that resulted in a disagreement with the accepted median result")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalLateResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of update request that were posted on-chain late and not included in an accepted result")))))}c.isMDXComponent=!0},36276:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>m,metadata:()=>i,toc:()=>o});var n=a(83117),r=(a(67294),a(3905)),s=a(25336);const m={sidebar_position:1,slug:"oracle1",title:"Architecture"},l="Oracle Architecture",i={unversionedId:"oracle/architecture",id:"oracle/architecture",title:"Architecture",description:"A Switchboard oracle is a Node.js container that sits between the Solana",source:"@site/docs/oracle/architecture.mdx",sourceDirName:"oracle",slug:"/oracle/oracle1",permalink:"/sbv2-core/oracle/oracle1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"oracle1",title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Private Queues",permalink:"/sbv2-core/queue/private-queues"},next:{title:"Requirements",permalink:"/sbv2-core/oracle/operator/"}},p={},o=[{value:"Staking",id:"staking",level:2},{value:"Heartbeat",id:"heartbeat",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Cost &amp; Reward Estimations",id:"cost--reward-estimations",level:2},{value:"More Information",id:"more-information",level:2}],c={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oracle-architecture"},"Oracle Architecture"),(0,r.kt)("p",null,"A Switchboard oracle is a Node.js container that sits between the Solana\nblockchain and the internet and waits for update requests from an oracle queue.\nAn oracle queue assigns updates to oracles in a round robin fashion."),(0,r.kt)("p",null,"An oracle account is a program derived address (PDA) between the oracle queue\nit\u2019s being initialized for, as well as the oracles staking wallet. Before an\noracle is granted permissions to use a queue, it must transfer the minimum stake\namount, set by the queue, to its staking wallet."),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("p",null,"An oracle is required to transfer ",(0,r.kt)("inlineCode",{parentName:"p"},"queue.minStake")," tokens to its staking wallet,\n",(0,r.kt)("inlineCode",{parentName:"p"},"oracle.tokenAccount"),", before being granted queue permissions. The minStake acts\nas an insurance policy to entice honest oracle behavior."),(0,r.kt)("h2",{id:"heartbeat"},"Heartbeat"),(0,r.kt)("p",null,"An oracle is required to heartbeat on-chain in order to join the queue and be\nassigned update request. An oracle must heartbeat before the queue's specified\n",(0,r.kt)("inlineCode",{parentName:"p"},"queue.oracleTimeout")," or it will be removed from the queue by the queue's\ngarbage collector."),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"The oracle also tracks its performance, ",(0,r.kt)("inlineCode",{parentName:"p"},"oracle.metrics"),"."),(0,r.kt)(s.default,{mdxType:"OracleMetrics"}),(0,r.kt)("h2",{id:"cost--reward-estimations"},"Cost & Reward Estimations"),(0,r.kt)("p",null,"An oracle is required to submit an\n",(0,r.kt)("a",{parentName:"p",href:"/idl/instructions/aggregatorSaveResult"},"aggregatorSaveResult")," transaction each\ntime it updates a feed, which incurs a cost of 5000 lamports. This fee is set by\nthe Solana network and is subject to change."),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"T"),(0,r.kt)("mrow",{parentName:"msub"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"U"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"e"))),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"T"),(0,r.kt)("mrow",{parentName:"msub"},(0,r.kt)("mi",{parentName:"mrow"},"q"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"w"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"d"))),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"5000")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T_{perUpdate}=T_{queueReward} - 5000")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"U"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"q"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"5000")))))),(0,r.kt)("p",null,"where,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"T")," is the raw token amount in base units (",(0,r.kt)("em",{parentName:"li"},"Ex: lamports or satoshis"),")")),(0,r.kt)("p",null,"To estimate an oracles cost basis, you will need to know a queue's capacity\n(Oracles, Feeds, VRFs) and the average number of update request an oracle is\nassigned over a given time period."),(0,r.kt)("p",null,"You will also need to factor in the oracle's heartbeat cost, which is 5000\nlamports each. The number of heartbeats is dependent on its\n",(0,r.kt)("inlineCode",{parentName:"p"},"queue.oracleTimeout"),", which determines how often an oracle is required to\nheartbeat."),(0,r.kt)("h2",{id:"more-information"},"More Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/idl/accounts/OracleAccountData"},"/idl/accounts/OracleAccountData"))))}u.isMDXComponent=!0}}]);