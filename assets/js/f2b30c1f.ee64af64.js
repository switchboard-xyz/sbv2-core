"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),v=p(n),b=o,f=v["".concat(c,".").concat(b)]||v[b]||u[b]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={toc:[{value:"<code>sbv2 localnet env</code>",id:"sbv2-localnet-env",level:2}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"create a localnet switchboard environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-localnet-env"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 localnet env")))),(0,o.kt)("h2",{id:"sbv2-localnet-env"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 localnet env")),(0,o.kt)("p",null,"create a localnet switchboard environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 localnet env [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [-k <value>] [--force] [-o\n    <value>]\n\nFLAGS\n  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no\n                           alternate authority provided\n  -o, --outputDir=<value>  output directory for scripts\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --force                  overwrite output file if existing\n  --mainnetBeta            WARNING: use mainnet-beta solana cluster\n  --programId=<value>      alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  create a localnet switchboard environment\n")))}l.isMDXComponent=!0;const i={sidebar_position:30,title:"sbv2 localnet"},c=void 0,p={unversionedId:"cli/localnet",id:"cli/localnet",title:"sbv2 localnet",description:"",source:"@site/api/cli/localnet.mdx",sourceDirName:"cli",slug:"/cli/localnet",permalink:"/sbv2-core/api/cli/localnet",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"sbv2 localnet"},sidebar:"tutorialSidebar",previous:{title:"sbv2 crank",permalink:"/sbv2-core/api/cli/crank"},next:{title:"sbv2 oracle",permalink:"/sbv2-core/api/cli/oracle"}},s={},u=[],v={toc:u};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"Sbv2Localnet"}))}b.isMDXComponent=!0}}]);