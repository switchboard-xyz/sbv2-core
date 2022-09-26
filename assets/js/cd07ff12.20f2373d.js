"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9172],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},v=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),v=u(t),p=r,m=v["".concat(i,".").concat(p)]||v[p]||d[p]||o;return t?n.createElement(m,l(l({ref:a},c),{},{components:t})):n.createElement(m,l({ref:a},c))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=v;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(3117),r=t(7294),o=t(6010),l=t(2389),s=t(7392),i=t(7094),u=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function v(e){var a,t;const{lazy:l,block:v,defaultValue:p,values:m,groupId:b,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,s.l)(h,((e,a)=>e.value===a.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===p?p:null!=(a=null!=p?p:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?a:f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:I}=(0,i.U)(),[S,j]=(0,r.useState)(k),A=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==S&&h.some((a=>a.value===e))&&j(e)}const D=e=>{const a=e.currentTarget,t=A.indexOf(a),n=h[t].value;n!==S&&(N(a),j(n),null!=b&&I(b,String(n)))},E=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=A.indexOf(e.currentTarget)+1;t=null!=(n=A[a])?n:A[0];break}case"ArrowLeft":{var r;const a=A.indexOf(e.currentTarget)-1;t=null!=(r=A[a])?r:A[A.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":v},g)},h.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===a?0:-1,"aria-selected":S===a,key:a,ref:e=>A.push(e),onKeyDown:E,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===a})}),null!=t?t:a)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==S})))))}function p(e){const a=(0,l.Z)();return r.createElement(v,(0,n.Z)({key:String(a)},e))}},6882:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=t(3117),r=(t(7294),t(3905)),o=t(5488),l=t(5162);const s={sidebar_position:8,title:"Sbv2 CLI"},i=void 0,u={unversionedId:"near/dev/cli",id:"near/dev/cli",title:"Sbv2 CLI",description:"Overview",source:"@site/docs/near/dev/cli.mdx",sourceDirName:"near/dev",slug:"/near/dev/cli",permalink:"/sbv2-core/near/dev/cli",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Sbv2 CLI"},sidebar:"near",previous:{title:"Developer Resources",permalink:"/sbv2-core/near/dev/"},next:{title:"@switchboard-xyz/near.js",permalink:"/sbv2-core/near/dev/javascript/"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Install",id:"install",level:3},{value:"Config",id:"config",level:3},{value:"Accounts",id:"accounts",level:3},{value:"Print an Account",id:"print-an-account",level:2},{value:"sbv2 near print",id:"sbv2-near-print",level:3},{value:"Create a Queue",id:"create-a-queue",level:2},{value:"sbv2 near queue create",id:"sbv2-near-queue-create",level:3},{value:"Create an Oracle",id:"create-an-oracle",level:2},{value:"sbv2 near oracle create",id:"sbv2-near-oracle-create",level:3},{value:"Create a Data Feed",id:"create-a-data-feed",level:2},{value:"sbv2 near aggregator create",id:"sbv2-near-aggregator-create",level:3},{value:"Create a Job",id:"create-a-job",level:2},{value:"sbv2 near job create",id:"sbv2-near-job-create",level:3},{value:"Add Job to Feed",id:"add-job-to-feed",level:2},{value:"sbv2 near aggregator job add",id:"sbv2-near-aggregator-job-add",level:3},{value:"Remove Job to Feed",id:"remove-job-to-feed",level:2},{value:"sbv2 near aggregator job remove",id:"sbv2-near-aggregator-job-remove",level:3}],v={toc:d};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @switchboard-xyz/cli^2\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -g @switchboard-xyz/cli^2\n")))),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Testnet\nsbv2 config set near testnet rpc https://rpc.testnet.near.org\nsbv2 config set near testnet default-account my-named-account.testnet\n\n# Mainnet\nsbv2 config set near mainnet rpc https://rpc.mainnet.near.org\nsbv2 config set near mainnet default-account my-named-account.near\n")),(0,r.kt)("h3",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"All commands make use of the UnencryptedFilesystemKeypair located at\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.near-credentials"),". You can override the default location by providing an\noptional path with ",(0,r.kt)("inlineCode",{parentName:"p"},"--nearCredentialsDir"),"."),(0,r.kt)("h2",{id:"print-an-account"},"Print an Account"),(0,r.kt)("p",null,"You can print an account by providing the base58 encoding of its address or the\nraw bytes, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Base58\nsbv2 near print queue 6DtC895RCzCABrkAxyxNUVxFMbhdgnBb6fAnEv8Kk7rP\n# Bytes\nsbv2 near print queue "[77,151,73,125,72,151,107,123,32,36,130,143,94,33,136,41,169,20,193,72,16,46,133,197,140,170,88,207,247,109,108,0]"\n')),(0,r.kt)("p",null,"You can print a save an aggregators state by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag, like\nso:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 near print aggregator 7tHsCcarwZUoAaEwQAqdyf5Vxt9KyfkRPg9XQGtMYDqL --json > NEAR_USD.json\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"sbv2-near-print"},"sbv2 near print")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 near print [ACCOUNTTYPE] [ADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|betanet|localnet]\n    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [--all]\n\nARGUMENTS\n  ACCOUNTTYPE  (queue|aggregator|crank|oracle|permission|lease|job) account type to print\n  ADDRESS      address of the account to print in Uint8 or Base58 encoding\n\nFLAGS\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --all                         print all account attributes including jobs, permissions, and leases\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  print a near switchboard account\n\nALIASES\n  $ sbv2 near print\n"))),(0,r.kt)("h2",{id:"create-a-queue"},"Create a Queue"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"sbv2-near-queue-create"},"sbv2 near queue create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 near queue create --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|betanet|localnet]\n    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata\n    <value>] [--minStake <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled]\n    [--unpermissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers]\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the queue\n  -h, --help                    Show CLI help.\n  -r, --reward=<value>          oracle rewards for successfully responding to an update request\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --enableBufferRelayers        enable oracles to fulfill buffer relayer requests\n  --metadata=<value>            metadata of the queue for easier identification\n  --minStake=<value>            minimum stake required by an oracle to join the queue\n  --name=<value>                name of the queue for easier identification\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --oracleTimeout=<value>       [default: 180] number of oracles to add to the queue\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n  --queueSize=<value>           [default: 100] maximum number of oracles the queue can support\n  --slashingEnabled             permit slashing malicous oracles\n  --unpermissionedFeeds         permit unpermissioned feeds\n  --unpermissionedVrf           permit unpermissioned VRF accounts\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new oracle queue\n\nALIASES\n  $ sbv2 near create queue\n"))),(0,r.kt)("h2",{id:"create-an-oracle"},"Create an Oracle"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"sbv2-near-oracle-create"},"sbv2 near oracle create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 near oracle create [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a\n    <value>] [--name <value>] [--metadata <value>]\n\nARGUMENTS\n  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the oracle\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --metadata=<value>            metadata of the oracle for easier identification\n  --name=<value>                name of the oracle for easier identification\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a near oracle for a given queue\n\nALIASES\n  $ sbv2 near create oracle\n"))),(0,r.kt)("h2",{id:"create-a-data-feed"},"Create a Data Feed"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"sbv2-near-aggregator-create"},"sbv2 near aggregator create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 near aggregator create [QUEUEADDRESS] --accountName <value> --updateInterval <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a\n    <value>] [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize\n    <value>] [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [--rewardEscrow <value>]\n    [--historyLimit <value>] [--enable]\n\nARGUMENTS\n  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the oracle\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --batchSize=<value>           number of oracles requested for each open round call\n  --crankAddress=<value>        optional, address of the crank to add the aggregator to\n  --enable                      if required and queue authority is provided, enable permissions\n  --forceReportPeriod=<value>   Number of seconds for which, even if the variance threshold is not passed, accept new\n                                responses from oracles.\n  --historyLimit=<value>        [default: 1000] number of samples to store in aggregator's history\n  --metadata=<value>            metadata of the crank for easier identification\n  --minJobs=<value>             number of jobs that must respond before an oracle responds\n  --minOracles=<value>          number of oracles that must respond before a value is accepted on-chain\n  --name=<value>                name of the crank for easier identification\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n  --rewardEscrow=<value>        where to send rewards. defaults to user's escrow account\n  --updateInterval=<value>      (required) set an aggregator's minimum update delay\n  --varianceThreshold=<value>   [default: 0] percentage change between a previous accepted result and the next round\n                                before an oracle reports a value on-chain. Used to conserve lease cost during low\n                                volatility\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a near aggregator for a given queue\n\nALIASES\n  $ sbv2 near create aggregator\n"))),(0,r.kt)("h2",{id:"create-a-job"},"Create a Job"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"sbv2-near-job-create"},"sbv2 near job create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 near job create [JOBDEFINITION] --accountName <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a\n    <value>] [--name <value>] [--metadata <value>]\n\nARGUMENTS\n  JOBDEFINITION  filesystem path to job definition\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the job account\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --metadata=<value>            metadata of the job for easier identification\n  --name=<value>                name of the job for easier identification\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a job on near\n\nALIASES\n  $ sbv2 near create job\n"))),(0,r.kt)("h2",{id:"add-job-to-feed"},"Add Job to Feed"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"sbv2-near-aggregator-job-add"},"sbv2 near aggregator job add")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 near aggregator job add [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a\n    <value>] [--name <value> | --jobKey <value>] [--metadata <value> | ] [--jobDefinition <value> | ] [--jobWeight\n    <value>]\n\nARGUMENTS\n  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate keypair that is the authority for the aggregator\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --jobDefinition=<value>       filesystem path of job json definition file\n  --jobKey=<value>              public key of an existing job account to add to an aggregator\n  --jobWeight=<value>           [default: 1] job weight\n  --metadata=<value>            metadata of the job account\n  --name=<value>                name of the job account\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  add a job to an aggregator\n\nALIASES\n  $ sbv2 near aggregator job add\n"))),(0,r.kt)("h2",{id:"remove-job-to-feed"},"Remove Job to Feed"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"sbv2-near-aggregator-job-remove"},"sbv2 near aggregator job remove")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 near aggregator remove job [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a\n    <value>] [-j <value>]\n\nARGUMENTS\n  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate keypair that is the authority for the aggregator\n  -h, --help                    Show CLI help.\n  -j, --jobAddress=<value>...   public key of an existing job account to remove from an aggregator\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  remove a job to an aggregator\n\nALIASES\n  $ sbv2 near aggregator job add\n"))),"```")}p.isMDXComponent=!0}}]);