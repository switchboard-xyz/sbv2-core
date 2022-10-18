"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(v,i(i({ref:t},u),{},{components:r})):a.createElement(v,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const l={sidebar_position:5,slug:".",title:"Table of Contents"},i=void 0,o={unversionedId:"aptos/idl/overview",id:"aptos/idl/overview",title:"Table of Contents",description:"Resources",source:"@site/docs/aptos/idl/overview.mdx",sourceDirName:"aptos/idl",slug:"/aptos/idl/",permalink:"/aptos/idl/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:".",title:"Table of Contents"},sidebar:"aptos",previous:{title:"Read a Feed",permalink:"/aptos/feeds/read"},next:{title:"Aggregator",permalink:"/aptos/idl/resources/Aggregator"}},s={},p=[{value:"Resources",id:"resources",level:2},{value:"Events",id:"events",level:2},{value:"Types",id:"types",level:2},{value:"Errors",id:"errors",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/resources/Aggregator"},"Aggregator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/resources/Crank"},"Crank")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/resources/EscrowManager"},"EscrowManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/resources/Job"},"Job")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/resources/Oracle"},"Oracle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/resources/Permission"},"Permission")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/resources/Queue"},"Queue"))),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/AggregatorCrankEvictionEvent"},"AggregatorCrankEvictionEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/AggregatorInitEvent"},"AggregatorInitEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/AggregatorOpenRoundEvent"},"AggregatorOpenRoundEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/AggregatorSaveResultEvent"},"AggregatorSaveResultEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/AggregatorUpdateEvent"},"AggregatorUpdateEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/CrankLeaseInsufficientFundsEvent"},"CrankLeaseInsufficientFundsEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/CrankPopExpectedFailureEvent"},"CrankPopExpectedFailureEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/FeedPermissionRevokedEvent"},"FeedPermissionRevokedEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/GarbageCollectFailureEvent"},"GarbageCollectFailureEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/LeaseFundEvent"},"LeaseFundEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/LeaseWithdrawEvent"},"LeaseWithdrawEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/OracleBootedEvent"},"OracleBootedEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/OracleRewardEvent"},"OracleRewardEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/OracleSlashEvent"},"OracleSlashEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/OracleWithdrawEvent"},"OracleWithdrawEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/events/ProbationBrokenEvent"},"ProbationBrokenEvent"))),(0,n.kt)("h2",{id:"types"},"Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/types/AggregatorHistoryRow"},"AggregatorHistoryRow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/types/AggregatorRound"},"AggregatorRound")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/types/OracleMetrics"},"OracleMetrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/aptos/idl/types/SwitchboardPermission"},"SwitchboardPermission"))),(0,n.kt)("h2",{id:"errors"},(0,n.kt)("a",{parentName:"h2",href:"/aptos/idl/errors"},"Errors")))}c.isMDXComponent=!0}}]);