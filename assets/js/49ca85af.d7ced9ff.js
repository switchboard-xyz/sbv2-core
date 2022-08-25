"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4448],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),i=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s=function(e){var a=i(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(g,c(c({ref:a},s),{},{components:t})):n.createElement(g,c({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294);function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},9877:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(7462),r=t(7294),o=t(2389),c=t(1548),l=t(6010);const u="tabItem_LplD";function i(e){var a,t,o;const{lazy:i,block:s,defaultValue:p,values:d,groupId:m,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,c.lx)(y,((e,a)=>e.value===a.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===p?p:null!=(a=null!=p?p:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(o=b[0])?void 0:o.props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:v}=(0,c.UB)(),[A,w]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==A&&y.some((a=>a.value===e))&&w(e)}const O=e=>{const a=e.currentTarget,t=T.indexOf(a),n=y[t].value;n!==A&&(N(a),w(n),null!=m&&v(m,n))},j=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},g)},y.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===a?0:-1,"aria-selected":A===a,key:a,ref:e=>T.push(e),onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":A===a})}),null!=t?t:a)}))),i?(0,r.cloneElement)(b.filter((e=>e.props.value===A))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==A})))))}function s(e){const a=(0,o.Z)();return r.createElement(i,(0,n.Z)({key:String(a)},e))}},4505:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(3905)),o=(t(9960),t(9877)),c=t(8215);const l={sidebar_position:30,title:"Data Feeds"},u=void 0,i={unversionedId:"developers/feed",id:"developers/feed",title:"Data Feeds",description:"\x3c!--",source:"@site/docs/developers/feed.mdx",sourceDirName:"developers",slug:"/developers/feed",permalink:"/sbv2-core/developers/feed",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Data Feeds"},sidebar:"tutorialSidebar",previous:{title:"Oracles",permalink:"/sbv2-core/developers/oracle"},next:{title:"Randomness",permalink:"/sbv2-core/developers/randomness"}},s={},p=[{value:"Reading a Data Feed",id:"reading-a-data-feed",level:2},{value:"Creating a Data Feed",id:"creating-a-data-feed",level:2},{value:"Funding a Data Feed",id:"funding-a-data-feed",level:2},{value:"Requesting a Feed Update",id:"requesting-a-feed-update",level:2},{value:"Push to Crank",id:"push-to-crank",level:2},{value:"Add History Buffer",id:"add-history-buffer",level:2}],d={toc:p};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"reading-a-data-feed"},"Reading a Data Feed"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::AggregatorAccountData;\nuse std::convert::TryInto;\n\nlet feed_result = AggregatorAccountData::new(feed_account_info)?.get_result()?;\n\nlet decimal: f64 = feed_result.try_into()?;\n"))),(0,r.kt)(c.Z,{value:"Typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  loadSwitchboardProgram,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\n\nconst aggregatorAccount = new AggregatorAccount({\n  program,\n  publicKey: aggregatorKey,\n});\n\nconst latestResult = await aggregatorAccount.getLatestValue();\n'))),(0,r.kt)(c.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 aggregator print AGGREGATORKEY\n# OR\nsbv2 aggregator watch AGGREGATORKEY\n")))),(0,r.kt)("h2",{id:"creating-a-data-feed"},"Creating a Data Feed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aggregatorInit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leaseInit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jobInit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"permissionInit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aggregatorAddJob"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  loadSwitchboardProgram,\n  LeaseAccount,\n  OracleQueueAccount,\n  SwitchboardPermission,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nlet authority: Keypair; // queue authority\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\nconst queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\n\n// aggregator\nconst aggregatorAccount = await AggregatorAccount.create(program, {\n  name: Buffer.from("MY SOL/USD Feed"),\n  batchSize: 1,\n  minRequiredOracleResults: 1,\n  minRequiredJobResults: 1,\n  minUpdateDelaySeconds: 10,\n  queueAccount,\n  authority: authority.publicKey,\n});\n\n// permission\nconst permissionAccount = await PermissionAccount.create(program, {\n  authority: authority.publicKey,\n  granter: queueAccount.publicKey,\n  grantee: aggregatorAccount.publicKey,\n});\nawait aggregatorPermission.set({\n  authority,\n  permission: SwitchboardPermission.PERMIT_ORACLE_QUEUE_USAGE,\n  enable: true,\n});\n\n// lease\nconst leaseContract = await LeaseAccount.create(program, {\n  loadAmount: new anchor.BN(0),\n  funder: tokenAccount,\n  funderAuthority: authority,\n  oracleQueueAccount: queueAccount,\n  aggregatorAccount,\n});\n\n// job\nconst tasks: OracleJob.Task[] = [\n  OracleJob.Task.create({\n    httpTask: OracleJob.HttpTask.create({\n      url: `https://ftx.us/api/markets/SOL_USD`,\n    }),\n  }),\n  OracleJob.Task.create({\n    jsonParseTask: OracleJob.JsonParseTask.create({ path: "$.result.price" }),\n  }),\n];\nconst jobData = Buffer.from(\n  OracleJob.encodeDelimited(\n    OracleJob.create({\n      tasks,\n    })\n  ).finish()\n);\nconst jobKeypair = anchor.web3.Keypair.generate();\nconst jobAccount = await JobAccount.create(program, {\n  data: jobData,\n  keypair: jobKeypair,\n  authority: authority.publicKey,\n});\n\n// add job to aggregator\nawait aggregatorAccount.addJob(jobAccount, authority);\n'))),(0,r.kt)(c.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 aggregator create AGGREGATORKEY \\\n    --name "My Buffer" \\\n    --keypair "path/to/payer/keypair.json" \\\n    --batchSize 1 \\\n    --minOracles 1 \\\n    --minJobs 1 \\\n    --updateInterval 45 \\\n    --job "path/to/job-definition-1.json" \\\n    --job "path/to/job-definition-2.json" \\\n    --verbose\n')))),(0,r.kt)("h2",{id:"funding-a-data-feed"},"Funding a Data Feed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leeaseExtend"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  loadSwitchboardProgram,\n  LeaseAccount,\n  OracleQueueAccount,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nlet amount = new anchor.BN(1_000_000_000);\nlet authority: Keypair; // queue authority\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\nconst queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\nconst mint = await queueAccount.loadMint();\n\nconst funderTokenAccount = (\n  await mint.getOrCreateAssociatedAccountInfo(payer.publicKey)\n).address;\n\nconst signature = await leaseAccount.extend({\n  loadAmount: amount,\n  funder: funderTokenAccount,\n  funderAuthority: payer,\n});\n'))),(0,r.kt)(c.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 lease extend AGGREGATORKEY \\\n    --keypair "path/to/payer/keypair.json" \\\n    --authority "path/to/authority/keypair.json" \\\n    --amount 0.1\n')))),(0,r.kt)("h2",{id:"requesting-a-feed-update"},"Requesting a Feed Update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openRound"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  loadSwitchboardProgram,\n  LeaseAccount,\n  OracleQueueAccount,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nlet amount = new anchor.BN(1_000_000_000);\nlet authority: Keypair; // queue authority\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\nconst queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\nconst mint = await queueAccount.loadMint();\n\nconst payoutWallet = (\n  await mint.getOrCreateAssociatedAccountInfo(payer.publicKey)\n).address;\n\nconst aggregatorAccount = new AggregatorAccount({\n  program,\n  publicKey: aggregatorKey,\n});\n\nconst signature = await aggregatorAccount.openRound({\n  queueAccount,\n  payoutWallet,\n});\n'))),(0,r.kt)(c.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 aggregator update AGGREGATORKEY \\\n    --keypair "path/to/payer/keypair.json" \\\n')))),(0,r.kt)("h2",{id:"push-to-crank"},"Push to Crank"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crankPush"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  CrankAccount,\n  loadSwitchboardProgram,\n  LeaseAccount,\n  OracleQueueAccount,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\n\nconst aggregatorAccount = new AggregatorAccount({\n  program,\n  publicKey: aggregatorKey,\n});\nconst aggregator = await aggregatorAccount.loadData();\n\nconst queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: aggregator.queuePubkey,\n});\nconst mint = await queueAccount.loadMint();\n\nconst crankAccount = new CrankAccount({ program, publicKey: crankKey });\nconst crank = await crankAccount.loadData();\n\nawait crankAccount.push({ aggregatorAccount });\n'))),(0,r.kt)(c.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 crank push CRANKKEY AGGREGATORKEY \\\n    --keypair "path/to/payer/keypair.json"\n')))),(0,r.kt)("h2",{id:"add-history-buffer"},"Add History Buffer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aggregatorSetHistoryBuffer"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  CrankAccount,\n  loadSwitchboardProgram,\n  LeaseAccount,\n  OracleQueueAccount,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nlet authority: Keypair; // feed authority\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\n\nconst aggregatorAccount = new AggregatorAccount({\n  program,\n  publicKey: aggregatorKey,\n});\nconst aggregator = await aggregatorAccount.loadData();\n\nconst signature = await aggregatorAccount.setHistoryBuffer({ authority, size });\n'))),(0,r.kt)(c.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 aggregator set history AGGREGATORKEY SIZE \\\n    --keypair "path/to/payer/keypair.json"\n')))))}m.isMDXComponent=!0}}]);