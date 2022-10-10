"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),v=a,d=f["".concat(u,".").concat(v)]||f[v]||p[v]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const o={title:"Request"},i=void 0,l={unversionedId:"dev/cli/solana/vrf/request",id:"dev/cli/solana/vrf/request",title:"Request",description:"request a new value for a VRF",source:"@site/docs/dev/cli/solana/vrf/request.md",sourceDirName:"dev/cli/solana/vrf",slug:"/dev/cli/solana/vrf/request",permalink:"/dev/cli/solana/vrf/request",draft:!1,tags:[],version:"current",frontMatter:{title:"Request"},sidebar:"dev",previous:{title:"Print",permalink:"/dev/cli/solana/vrf/print"},next:{title:"Watch",permalink:"/dev/cli/solana/vrf/watch"}},u={},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"request a new value for a VRF"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},'USAGE\n  $ sbv2 solana vrf request [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [--funderAuthority <value>] [--authority <value>]\n\nARGUMENTS\n  VRFKEY  public key of the VRF account to request randomness for\n\nFLAGS\n  -h, --help                 Show CLI help.\n  -k, --keypair=<value>      keypair that will pay for onchain transactions. defaults to new account authority if no\n                             alternate authority provided\n  -s, --silent               suppress cli prompts\n  -u, --rpcUrl=<value>       alternate RPC url\n  -v, --verbose              log everything\n  --authority=<value>        alternative keypair that is the VRF authority\n  --commitment=<option>      [default: confirmed] transaction commitment level to use\n                             <options: confirmed|finalized|processed>\n  --funderAuthority=<value>  alternative keypair to pay for VRF request\n  --mainnetBeta              WARNING: use mainnet-beta solana cluster\n  --programId=<value>        alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  request a new value for a VRF\n\nEXAMPLES\n  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HpQoFL5kxPp2JCFvjsVTvBd7navx4THLefUU68SXAyd6","isSigner": false,"isWritable": true}" -a "{"pubkey": "8VdBtS8ufkXMCa6Yr9E4KVCfX2inVZVwU4KGg2CL1q7P","isSigner": false,"isWritable": false}"\n')))}p.isMDXComponent=!0}}]);