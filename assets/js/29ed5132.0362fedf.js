"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,v=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(v,c(c({ref:t},i),{},{components:r})):n.createElement(v,c({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(83117),a=(r(67294),r(3905));const o={title:"Push"},c=void 0,p={unversionedId:"dev/cli/aptos/crank/push",id:"dev/cli/aptos/crank/push",title:"Push",description:"push an aggregator onto the crank",source:"@site/docs/dev/cli/aptos/crank/push.md",sourceDirName:"dev/cli/aptos/crank",slug:"/dev/cli/aptos/crank/push",permalink:"/sbv2-core/dev/cli/aptos/crank/push",draft:!1,tags:[],version:"current",frontMatter:{title:"Push"},sidebar:"dev",previous:{title:"Pop",permalink:"/sbv2-core/dev/cli/aptos/crank/pop"},next:{title:"Aggregator",permalink:"/sbv2-core/dev/cli/aptos/create/aggregator"}},s={},l=[],i={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"push an aggregator onto the crank"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos crank push [CRANKHEXSTRING] --keypair <value> -a <value> [-h] [-v] [-s] [--networkId devnet|testnet]\n    [--programId <value>] [--stateAddress <value>] [-u <value>] [--profileName <value>] [--json]\n\nARGUMENTS\n  CRANKHEXSTRING  HexString address of the crank\n\nFLAGS\n  -a, --aggregatorHexString=<value>  (required) HexString address of the aggregator\n  -h, --help                         Show CLI help.\n  -s, --silent                       suppress cli prompts\n  -u, --rpcUrl=<value>               alternate RPC url\n  -v, --verbose                      log everything\n  --keypair=<value>                  (required) Path to AptosAccount keypair or config.yaml file\n  --networkId=<option>               [default: devnet] Aptos network to connect to\n                                     <options: devnet|testnet>\n  --profileName=<value>              [default: default] If --keypair is pointing to a yaml file, provide an optional\n                                     profile to load. If none provided, default will be used\n  --programId=<value>                [default: 0x14611263909398572be034debb2e61b6751cafbeaddd994b9a1250cb76b99d38]\n                                     Switchboard programId on the selected Aptos network\n  --stateAddress=<value>             [default: 0x14611263909398572be034debb2e61b6751cafbeaddd994b9a1250cb76b99d38]\n                                     Switchboard state address\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  push an aggregator onto the crank\n\nALIASES\n  $ sbv2 aptos push crank\n")))}u.isMDXComponent=!0}}]);