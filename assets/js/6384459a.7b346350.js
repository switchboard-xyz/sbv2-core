"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),v=n,f=p["".concat(i,".").concat(v)]||p[v]||d[v]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(83117),n=(r(67294),r(3905));const o={title:"Create"},l=void 0,c={unversionedId:"dev/cli/aptos/aggregator/create",id:"dev/cli/aptos/aggregator/create",title:"Create",description:"create an aptos aggregator for a given queue",source:"@site/docs/dev/cli/aptos/aggregator/create.md",sourceDirName:"dev/cli/aptos/aggregator",slug:"/dev/cli/aptos/aggregator/create",permalink:"/sbv2-core/dev/cli/aptos/aggregator/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Add Job",permalink:"/sbv2-core/dev/cli/aptos/aggregator/add_job"},next:{title:"Job Add",permalink:"/sbv2-core/dev/cli/aptos/aggregator/job_add"}},i={},s=[],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"create an aptos aggregator for a given queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos aggregator create [QUEUEHEXSTRING] --keypair <value> --updateInterval <value> [-h] [-v] [-s] [--networkId\n    devnet|testnet] [--programId <value>] [--stateAddress <value>] [-u <value>] [--profileName <value>] [--json] [-a\n    <value>] [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize\n    <value>] [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [-j <value>] [--new]\n\nARGUMENTS\n  QUEUEHEXSTRING  HexString address of the queue\n\nFLAGS\n  -a, --authority=<value>      alternate named account that will be the authority for the oracle\n  -h, --help                   Show CLI help.\n  -j, --job=<value>...         filesystem path to job definition file\n  -s, --silent                 suppress cli prompts\n  -u, --rpcUrl=<value>         alternate RPC url\n  -v, --verbose                log everything\n  --batchSize=<value>          number of oracles requested for each open round call\n  --crankAddress=<value>       optional, address of the crank to add the aggregator to\n  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new\n                               responses from oracles.\n  --keypair=<value>            (required) Path to AptosAccount keypair or config.yaml file\n  --metadata=<value>           metadata of the aggregator for easier identification\n  --minJobs=<value>            number of jobs that must respond before an oracle responds\n  --minOracles=<value>         number of oracles that must respond before a value is accepted on-chain\n  --name=<value>               name of the aggregator for easier identification\n  --networkId=<option>         [default: devnet] Aptos network to connect to\n                               <options: devnet|testnet>\n  --new                        create account at new AptosAccount with authority set to --account\n  --profileName=<value>        [default: default] If --keypair is pointing to a yaml file, provide an optional profile\n                               to load. If none provided, default will be used\n  --programId=<value>          [default: 0x14611263909398572be034debb2e61b6751cafbeaddd994b9a1250cb76b99d38] Switchboard\n                               programId on the selected Aptos network\n  --stateAddress=<value>       [default: 0x14611263909398572be034debb2e61b6751cafbeaddd994b9a1250cb76b99d38] Switchboard\n                               state address\n  --updateInterval=<value>     (required) set an aggregator's minimum update delay\n  --varianceThreshold=<value>  [default: 0] percentage change between a previous accepted result and the next round\n                               before an oracle reports a value on-chain. Used to conserve lease cost during low\n                               volatility\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create an aptos aggregator for a given queue\n\nALIASES\n  $ sbv2 aptos create aggregator\n")))}d.isMDXComponent=!0}}]);