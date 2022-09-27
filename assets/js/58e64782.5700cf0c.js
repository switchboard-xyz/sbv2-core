"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,b=u["".concat(s,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(b,c(c({ref:t},d),{},{components:r})):n.createElement(b,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(83117),o=(r(67294),r(3905));const a={title:"Airdrop"},c=void 0,i={unversionedId:"dev/cli/aptos/account/airdrop",id:"dev/cli/aptos/account/airdrop",title:"Airdrop",description:"request an airdrop",source:"@site/docs/dev/cli/aptos/account/airdrop.md",sourceDirName:"dev/cli/aptos/account",slug:"/dev/cli/aptos/account/airdrop",permalink:"/sbv2-core/dev/cli/aptos/account/airdrop",draft:!1,tags:[],version:"current",frontMatter:{title:"Airdrop"},sidebar:"dev",previous:{title:"Index",permalink:"/sbv2-core/dev/cli/config/set/"},next:{title:"Add Job",permalink:"/sbv2-core/dev/cli/aptos/aggregator/add_job"}},s={},p=[],d={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"request an airdrop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos account airdrop --address <value> [-h] [-v] [-s] [--networkId devnet|testnet] [--programId <value>]\n    [--stateAddress <value>] [-u <value>] [--json] [-n <value>]\n\nFLAGS\n  -h, --help              Show CLI help.\n  -n, --amount=<value>    [default: 50000] number of airdrops to request, 10_000 coins each\n  -s, --silent            suppress cli prompts\n  -u, --rpcUrl=<value>    alternate RPC url\n  -v, --verbose           log everything\n  --address=<value>       (required) HexString address of account to fund\n  --networkId=<option>    [default: devnet] Aptos network to connect to\n                          <options: devnet|testnet>\n  --programId=<value>     [default: 0x14611263909398572be034debb2e61b6751cafbeaddd994b9a1250cb76b99d38] Switchboard\n                          programId on the selected Aptos network\n  --stateAddress=<value>  [default: 0x14611263909398572be034debb2e61b6751cafbeaddd994b9a1250cb76b99d38] Switchboard\n                          state address\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  request an airdrop\n")))}l.isMDXComponent=!0}}]);