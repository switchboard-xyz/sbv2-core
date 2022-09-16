"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7541],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(83117),r=(a(67294),a(3905));const s={sidebar_position:15,title:"Feed Operator"},o=void 0,i={unversionedId:"feed/operator",id:"feed/operator",title:"Feed Operator",description:"This page gives an overview on how to configure and operate a Switchboard feed.",source:"@site/docs/feed/operator.mdx",sourceDirName:"feed",slug:"/feed/operator",permalink:"/sbv2-core/feed/operator",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Feed Operator"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/sbv2-core/feed/"},next:{title:"Directory",permalink:"/sbv2-core/feed/directory"}},l={},c=[{value:"Job Consensus",id:"job-consensus",level:2},{value:"Oracle Consensus",id:"oracle-consensus",level:2},{value:"Feed Maintenance",id:"feed-maintenance",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page gives an overview on how to configure and operate a Switchboard feed."),(0,r.kt)("h2",{id:"job-consensus"},"Job Consensus"),(0,r.kt)("p",null,"Job consensus refers to how individual oracles calculate their result from a feeds assigned job accounts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Job Diversity"))),(0,r.kt)("p",null,"Data feeds should source data from a variety of sources when applicable. A feed relying on a single source is at the mercy of that sources uptime and responsiveness."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Job Weights"))),(0,r.kt)("p",null,"Data feeds should use job weights to calculate the weighted median, which is what the oracle submits on-chain as its final result. A data source that has the majority of an assets price action should be weighted higher than a dead exchange with questionable volume metrics."),(0,r.kt)("h2",{id:"oracle-consensus"},"Oracle Consensus"),(0,r.kt)("p",null,"Oracle consensus refers to how the final on-chain result is calculated from a batch of oracle responses. A feed's ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.oracleRequestBatchSize")," is the number of oracles assigned to a request, while ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.minOracleResults")," is the number of responses needed to accept a result."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Increase oracleRequestBatchSize"))),(0,r.kt)("p",null,"The quickest way to increase feed security is to request more oracles each update round because this requires a higher degree of oracle collusion in order to affect the accepted result. In reality, this increases the overall cost of a feed so its a careful consideration for feed operators when configuring a feed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," oracleRequestBatchSize ",(0,r.kt)("span",{parentName:"em",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\neq")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mord vbox"},(0,r.kt)("span",{parentName:"span",className:"thinbox"},(0,r.kt)("span",{parentName:"span",className:"rlap"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"inner"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mrel"},"\ue020"))),(0,r.kt)("span",{parentName:"span",className:"fix"}))))),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="))))))," minOracleResults "))),(0,r.kt)("p",null,"The number of oracles assigned to an update request should always be less than the number of oracles required to respond. There are a variety of reasons that may cause an oracle response to fail, such as Solana network degradation, individual oracle network issues, or transaction spamming. Your feed's lease is only deducted when an oracle successfully responds and there is no penalty for an oracle who has timed out."),(0,r.kt)("h2",{id:"feed-maintenance"},"Feed Maintenance"),(0,r.kt)("p",null,"The primary maintenance for a feed is ensuring the lease contract has sufficient funds. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/packages/lease-observer"},"@switchboard-xyz/lease-observer")," demonstrates how to emit PagerDuty events when a lease is low on funds."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When a data feed's lease contract does not have enough funds, it will be automatically removed from its crank. When extending a feed's lease, make sure to also repush the feed back onto any cranks for updates to continue.")),(0,r.kt)("p",null,"You should also monitor the feed for staleness in case of downstream changes to a data sources endpoint."))}u.isMDXComponent=!0}}]);