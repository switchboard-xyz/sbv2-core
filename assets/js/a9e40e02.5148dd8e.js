"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7682],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93773:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(83117),a=(t(67294),t(3905));const o={title:"Buffer"},i=void 0,c={unversionedId:"dev/cli/solana/print/buffer",id:"dev/cli/solana/print/buffer",title:"Buffer",description:"Print the deserialized Switchboard buffer relayer account",source:"@site/docs/dev/cli/solana/print/buffer.md",sourceDirName:"dev/cli/solana/print",slug:"/dev/cli/solana/print/buffer",permalink:"/sbv2-core/dev/cli/solana/print/buffer",draft:!1,tags:[],version:"current",frontMatter:{title:"Buffer"},sidebar:"dev",previous:{title:"Aggregator Permission",permalink:"/sbv2-core/dev/cli/solana/print/aggregator_permission"},next:{title:"Crank",permalink:"/sbv2-core/dev/cli/solana/print/crank"}},l={},s=[],p={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Print the deserialized Switchboard buffer relayer account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana print buffer [BUFFERRELAYERKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]\n    [--commitment confirmed|finalized|processed] [--job]\n\nARGUMENTS\n  BUFFERRELAYERKEY  public key of the buffer relayer account to deserialize\n\nFLAGS\n  -h, --help             Show CLI help.\n  -s, --silent           suppress cli prompts\n  -u, --rpcUrl=<value>   alternate RPC url\n  -v, --verbose          log everything\n  --commitment=<option>  [default: confirmed] transaction commitment level to use\n                         <options: confirmed|finalized|processed>\n  --job                  output job definitions\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n  --programId=<value>    alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  Print the deserialized Switchboard buffer relayer account\n\nALIASES\n  $ sbv2 solana buffer print\n\nEXAMPLES\n  $ sbv2 buffer:print 23GvzENjwgqqaLejsAtAWgTkSzWjSMo2LUYTAETT8URp\n")))}u.isMDXComponent=!0}}]);