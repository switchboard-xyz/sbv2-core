"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5519],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),s=r,k=m["".concat(o,".").concat(s)]||m[s]||c[s]||l;return a?n.createElement(k,u(u({ref:t},p),{},{components:a})):n.createElement(k,u({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var d=2;d<l;d++)u[d]=a[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));const l={},u=void 0,i={unversionedId:"idl/accounts/OracleQueueAccountData",id:"idl/accounts/OracleQueueAccountData",title:"OracleQueueAccountData",description:"Size 0.009723120 SOL",source:"@site/feeds/solana/idl/accounts/OracleQueueAccountData.md",sourceDirName:"idl/accounts",slug:"/idl/accounts/OracleQueueAccountData",permalink:"/sbv2-core/feeds/solana/idl/accounts/OracleQueueAccountData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OracleAccountData",permalink:"/sbv2-core/feeds/solana/idl/accounts/OracleAccountData"},next:{title:"OracleQueueBuffer",permalink:"/sbv2-core/feeds/solana/idl/accounts/OracleQueueBuffer"}},o={},d=[],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Size: "),"1269 Bytes",(0,r.kt)("br",null),(0,r.kt)("b",null,"Rent Exemption: "),"0.009723120 SOL",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the queue to store on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[64]"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata of the queue to store on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authority"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making account changes or assigning permissions targeted at the queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracleTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period we should remove an oracle after if no response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reward"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Rewards to provide oracles and round openers on this queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minStake"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum amount of stake oracles must present to remain on the queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slashingEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether slashing is enabled on this queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"varianceToleranceMultiplier"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/feeds/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,r.kt)("td",{parentName:"tr",align:null},"The tolerated variance amount oracle results can have from the accepted round result before being slashed. slashBound = varianceToleranceMultiplier ","*"," stdDeviation Default: 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedProbationPeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"After a feed lease is funded or re-funded, it must consecutively succeed N amount of times or its authorization to use the queue is auto-revoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currIdx"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Current index of the oracle rotation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Current number of oracles on a queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gcIdx"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Garbage collection index.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutiveFeedFailureLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Consecutive failure limit for a feed before feed permission is revoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutiveOracleFailureLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Consecutive failure limit for an oracle before oracle permission is revoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unpermissionedFeedsEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabling this setting means data feeds do not need explicit permission to join the queue and request new values from its oracles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unpermissionedVrfEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabling this setting means VRF accounts do not need explicit permission to join the queue and request new values from its oracles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"curatorRewardCut"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/feeds/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,r.kt)("td",{parentName:"tr",align:null},"Not implemented yet. Revenue percentage rewarded to job curators overall.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lockLeaseFunding"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Prevent new leases from being funded n this queue. Useful to turn down a queue for migrations, since authority is always immutable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mint"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Token mint used for the oracle queue rewards and slashing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableBufferRelayers"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether oracles are permitted to fulfill buffer relayer update request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[968]"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxSize"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of oracles a queue can support.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataBuffer"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The public key of the OracleQueueBuffer account holding a collection of Oracle pubkeys that haver successfully heartbeated before the queues ",(0,r.kt)("inlineCode",{parentName:"td"},"oracleTimeout"),".")))))}c.isMDXComponent=!0}}]);