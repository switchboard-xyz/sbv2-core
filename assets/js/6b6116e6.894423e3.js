"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7772],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),v=n,g=p["".concat(c,".").concat(v)]||p[v]||d[v]||o;return t?a.createElement(g,i(i({ref:r},u),{},{components:t})):a.createElement(g,i({ref:r},u))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88175:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(83117),n=(t(67294),t(3905));const o={title:"Aggregator"},i=void 0,l={unversionedId:"dev/cli/near/create/aggregator",id:"dev/cli/near/create/aggregator",title:"Aggregator",description:"create a near aggregator for a given queue",source:"@site/docs/dev/cli/near/create/aggregator.md",sourceDirName:"dev/cli/near/create",slug:"/dev/cli/near/create/aggregator",permalink:"/dev/cli/near/create/aggregator",draft:!1,tags:[],version:"current",frontMatter:{title:"Aggregator"},sidebar:"dev",previous:{title:"Push",permalink:"/dev/cli/near/crank/push"},next:{title:"Aggregator Permission",permalink:"/dev/cli/near/create/aggregator_permission"}},c={},s=[],u={toc:s};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"create a near aggregator for a given queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near create aggregator [QUEUEADDRESS] --accountName <value> --updateInterval <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a\n    <value>] [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize\n    <value>] [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [--rewardEscrow <value>]\n    [--historyLimit <value>] [--enable]\n\nARGUMENTS\n  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the oracle\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --batchSize=<value>           number of oracles requested for each open round call\n  --crankAddress=<value>        optional, address of the crank to add the aggregator to\n  --enable                      if required and queue authority is provided, enable permissions\n  --forceReportPeriod=<value>   Number of seconds for which, even if the variance threshold is not passed, accept new\n                                responses from oracles.\n  --historyLimit=<value>        [default: 1000] number of samples to store in aggregator's history\n  --metadata=<value>            metadata of the crank for easier identification\n  --minJobs=<value>             number of jobs that must respond before an oracle responds\n  --minOracles=<value>          number of oracles that must respond before a value is accepted on-chain\n  --name=<value>                name of the crank for easier identification\n  --nearCredentialsDir=<value>  [default: /home/runner/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n  --rewardEscrow=<value>        where to send rewards. defaults to user's escrow account\n  --updateInterval=<value>      (required) set an aggregator's minimum update delay\n  --varianceThreshold=<value>   [default: 0] percentage change between a previous accepted result and the next round\n                                before an oracle reports a value on-chain. Used to conserve lease cost during low\n                                volatility\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a near aggregator for a given queue\n\nALIASES\n  $ sbv2 near create aggregator\n")))}d.isMDXComponent=!0}}]);