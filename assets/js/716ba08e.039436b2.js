"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const o={title:"Test"},l=void 0,c={unversionedId:"dev/cli/solana/anchor/test",id:"dev/cli/solana/anchor/test",title:"Test",description:"run anchor test and a switchboard oracle in parallel",source:"@site/docs/dev/cli/solana/anchor/test.md",sourceDirName:"dev/cli/solana/anchor",slug:"/dev/cli/solana/anchor/test",permalink:"/sbv2-core/dev/cli/solana/anchor/test",draft:!1,tags:[],version:"current",frontMatter:{title:"Test"},sidebar:"dev",previous:{title:"Watch",permalink:"/sbv2-core/dev/cli/solana/aggregator/watch"},next:{title:"Create",permalink:"/sbv2-core/dev/cli/solana/buffer/create"}},i={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"run anchor test and a switchboard oracle in parallel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana anchor test [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [-d <value>] [--oracleKey <value>] [--nodeImage <value>] [--arm] [-t\n    <value>]\n\nFLAGS\n  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment\n  -h, --help                    Show CLI help.\n  -k, --keypair=<value>         keypair that will pay for onchain transactions. defaults to new account authority if no\n                                alternate authority provided\n  -s, --silent                  suppress docker logging\n  -t, --timeout=<value>         [default: 120] number of seconds before timing out\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --arm                         apple silicon needs to use a docker image for linux/arm64\n  --commitment=<option>         [default: confirmed] transaction commitment level to use\n                                <options: confirmed|finalized|processed>\n  --mainnetBeta                 WARNING: use mainnet-beta solana cluster\n  --nodeImage=<value>           [default: dev-v2-08-14-22a-mc-beta] public key of the oracle to start-up\n  --oracleKey=<value>           public key of the oracle to start-up\n  --programId=<value>           alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  run anchor test and a switchboard oracle in parallel\n")))}p.isMDXComponent=!0}}]);