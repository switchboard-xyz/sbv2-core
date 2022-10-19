"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,v=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(v,p(p({ref:t},s),{},{components:n})):r.createElement(v,p({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={title:"Pop"},p=void 0,c={unversionedId:"dev/cli/aptos/crank/pop",id:"dev/cli/aptos/crank/pop",title:"Pop",description:"pop the crank",source:"@site/docs/dev/cli/aptos/crank/pop.md",sourceDirName:"dev/cli/aptos/crank",slug:"/dev/cli/aptos/crank/pop",permalink:"/dev/cli/aptos/crank/pop",draft:!1,tags:[],version:"current",frontMatter:{title:"Pop"},sidebar:"dev",previous:{title:"List",permalink:"/dev/cli/aptos/crank/list"},next:{title:"Push",permalink:"/dev/cli/aptos/crank/push"}},i={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pop the crank"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos crank pop [CRANKHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]\n    [--programId <value>] [--stateAddress <value>] [-u <value>] [--profileName <value>] [--json]\n\nARGUMENTS\n  CRANKHEXSTRING  HexString address of the crank\n\nFLAGS\n  -h, --help              Show CLI help.\n  -s, --silent            suppress cli prompts\n  -u, --rpcUrl=<value>    alternate RPC url\n  -v, --verbose           log everything\n  --keypair=<value>       (required) Path to AptosAccount keypair or config.yaml file\n  --networkId=<option>    [default: devnet] Aptos network to connect to\n                          <options: devnet|testnet|mainnet>\n  --profileName=<value>   [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                          load. If none provided, default will be used\n  --programId=<value>     [default: 0x34e2eead0aefbc3d0af13c0522be94b002658f4bef8e0740a21086d22236ad77] Switchboard\n                          programId on the selected Aptos network\n  --stateAddress=<value>  [default: 0x34e2eead0aefbc3d0af13c0522be94b002658f4bef8e0740a21086d22236ad77] Switchboard\n                          state address\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  pop the crank\n\nALIASES\n  $ sbv2 aptos pop crank\n")))}u.isMDXComponent=!0}}]);