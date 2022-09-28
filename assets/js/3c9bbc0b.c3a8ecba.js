"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const o={title:"Queue"},i=void 0,c={unversionedId:"dev/cli/solana/print/queue",id:"dev/cli/solana/print/queue",title:"Queue",description:"Print the deserialized Switchboard oraclequeue account",source:"@site/docs/dev/cli/solana/print/queue.md",sourceDirName:"dev/cli/solana/print",slug:"/dev/cli/solana/print/queue",permalink:"/sbv2-core/dev/cli/solana/print/queue",draft:!1,tags:[],version:"current",frontMatter:{title:"Queue"},sidebar:"dev",previous:{title:"Program",permalink:"/sbv2-core/dev/cli/solana/print/program"},next:{title:"Vrf",permalink:"/sbv2-core/dev/cli/solana/print/vrf"}},l={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Print the deserialized Switchboard oraclequeue account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana print queue [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [--oracles]\n\nARGUMENTS\n  QUEUEKEY  public key of the oracle queue account to deserialize\n\nFLAGS\n  -h, --help             Show CLI help.\n  -s, --silent           suppress cli prompts\n  -u, --rpcUrl=<value>   alternate RPC url\n  -v, --verbose          log everything\n  --commitment=<option>  [default: confirmed] transaction commitment level to use\n                         <options: confirmed|finalized|processed>\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n  --oracles              output oracles that are heartbeating on the queue\n  --programId=<value>    alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  Print the deserialized Switchboard oraclequeue account\n\nALIASES\n  $ sbv2 solana queue print\n\nEXAMPLES\n  $ sbv2 solana queue print GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U\n")))}p.isMDXComponent=!0}}]);