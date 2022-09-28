"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,b=u["".concat(c,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(b,s(s({ref:t},d),{},{components:n})):a.createElement(b,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_position:10,slug:".",title:"@switchboard-xyz/aptos.js"},s=void 0,i={unversionedId:"aptos/dev/javascript/client",id:"aptos/dev/javascript/client",title:"@switchboard-xyz/aptos.js",description:"GitHub&nbsp;",source:"@site/docs/aptos/dev/javascript/client.mdx",sourceDirName:"aptos/dev/javascript",slug:"/aptos/dev/javascript/",permalink:"/sbv2-core/aptos/dev/javascript/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"@switchboard-xyz/aptos.js"},sidebar:"aptos",previous:{title:"Sbv2 CLI",permalink:"/sbv2-core/aptos/dev/cli"},next:{title:"sbv2-aptos",permalink:"/sbv2-core/aptos/dev/rust/"}},c={},l=[{value:"Live Deployment:",id:"live-deployment",level:2},{value:"Install",id:"install",level:2},{value:"Creating Feeds",id:"creating-feeds",level:2},{value:"Listening to Updates",id:"listening-to-updates",level:3},{value:"Reading Feeds",id:"reading-feeds",level:3},{value:"Move.toml",id:"movetoml",level:3},{value:"Reading Feeds",id:"reading-feeds-1",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/aptos-sdk"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"})),"\xa0","\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,r.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,r.kt)("p",null,"A library of utility functions to interact with Switchboard Modules on Aptos"),(0,r.kt)("h2",{id:"live-deployment"},"Live Deployment:"),(0,r.kt)("p",null,"We're currently on Aptos Testnet at address\n",(0,r.kt)("inlineCode",{parentName:"p"},"0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b"),". For the\nsimplest way to create and manage Switchboard feeds on Aptos, check out our\n",(0,r.kt)("a",{parentName:"p",href:"https://app.switchboard.xyz"},"publisher"),"."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i --save @switchboard-xyz/aptos.js\n")),(0,r.kt)("h2",{id:"creating-feeds"},"Creating Feeds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Buffer } from "buffer";\nimport { AptosClient, AptosAccount, FaucetClient, HexString } from "aptos";\nimport {\n  AptosEvent,\n  EventCallback,\n  OracleJob,\n  createFeed,\n} from "@switchboard-xyz/aptos.js";\nimport Big from "big.js";\n\nconst NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";\nconst FAUCET_URL = "https://faucet.testnet.aptoslabs.com";\n\nconst SWITCHBOARD_TESTNET_ADDRESS =\n  "0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b";\n\nconst SWITCHBOARD_QUEUE_ADDRESS =\n  "0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b";\n\nconst SWITCHBOARD_CRANK_ADDRESS =\n  "0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b";\n\nconst client = new AptosClient(NODE_URL);\nconst faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);\n\n// create new user\nlet user = new AptosAccount();\n\nawait faucetClient.fundAccount(user.address(), 50000);\nconsole.log(`User account ${user.address().hex()} created + funded.`);\n\n// Make Job data for btc price\nconst serializedJob = Buffer.from(\n  OracleJob.encodeDelimited(\n    OracleJob.create({\n      tasks: [\n        {\n          httpTask: {\n            url: "https://www.binance.us/api/v3/ticker/price?symbol=BTCUSD",\n          },\n        },\n        {\n          jsonParseTask: {\n            path: "$.price",\n          },\n        },\n      ],\n    })\n  ).finish()\n);\n\nconst [aggregator, createFeedTx] = await createFeed(\n  client,\n  user,\n  {\n    authority: user.address(),\n    queueAddress: SWITCHBOARD_QUEUE_ADDRESS, // account with OracleQueue resource\n    crankAddress: SWITCHBOARD_CRANK_ADDRESS, // account with Crank resource\n    batchSize: 1, // number of oracles to respond to each round\n    minJobResults: 1, // minimum # of jobs that need to return a result\n    minOracleResults: 1, // minumum # of oracles that need to respond for a result\n    minUpdateDelaySeconds: 5, // minimum delay between rounds\n    coinType: "0x1::aptos_coin::AptosCoin", // CoinType of the queue (now only AptosCoin)\n    initialLoadAmount: 1000, // load of the lease\n    jobs: [\n      {\n        name: "BTC/USD",\n        metadata: "binance",\n        authority: user.address().hex(),\n        data: serializedJob.toString("base64"), // jobs need to be base64 encoded strings\n        weight: 1,\n      },\n    ],\n  },\n  SWITCHBOARD_TESTNET_ADDRESS\n);\n\nconsole.log(\n  `Created Aggregator and Lease resources at account address ${aggregator.address}. Tx hash ${createFeedTx}`\n);\n\n// Manually trigger an update\nawait aggregator.openRound(user);\n')),(0,r.kt)("h3",{id:"listening-to-updates"},"Listening to Updates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Listen to Aggregator Updates Off-Chain\n */\n\n// create event listener\nconst onAggregatorUpdate = (\n  client: AptosClient,\n  cb: EventCallback,\n  pollIntervalMs: number = 1000\n) => {\n  const event = new AptosEvent(\n    client,\n    HexString.ensure(SWITCHBOARD_TESTNET_ADDRESS),\n    `${SWITCHBOARD_TESTNET_ADDRESS}::switchboard::State`,\n    "aggregator_update_events",\n    pollIntervalMs\n  );\n  event.onTrigger(cb);\n  return event;\n};\n\n// initialize event listener\nconst updatePoller = onAggregatorUpdate(client, async (e) => {\n  if (aggregator.address == e.data.aggregator_address) {\n    console.log(`NEW RESULT:`, e.data);\n  }\n});\n')),(0,r.kt)("h3",{id:"reading-feeds"},"Reading Feeds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/aptos.js";\n\nconst aggregatorAccount: AggregatorAccount = new AggregatorAccount(\n  client,\n  aggregator_address,\n  SWITCHBOARD_TESTNET_ADDRESS\n);\n\nconsole.log(await aggregatorAccount.loadData());\n')),(0,r.kt)("h1",{id:"aptos"},"Aptos"),(0,r.kt)("h3",{id:"movetoml"},"Move.toml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[addresses]\nswitchboard = "0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b"\n\n[dependencies]\nMoveStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/move-stdlib/", rev = "testnet" }\nAptosFramework = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-framework/", rev = "testnet" }\nAptosStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-stdlib/", rev = "testnet" }\nSwitchboard = { git = "https://github.com/switchboard-xyz/aptos-sdk.git", subdir = "switchboard-move/switchboard/", rev = "main" }\n')),(0,r.kt)("h3",{id:"reading-feeds-1"},"Reading Feeds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-move"},"use switchboard::aggregator;\nuse switchboard::math::{Self, SwitchboardDecimal};\n\n// store latest value\nstruct AggregatorInfo has copy, drop, store, key {\n    aggregator_addr: address,\n    latest_result: u128,\n    latest_result_scaling_factor: u8,\n    latest_result_neg: bool,\n}\n\n// get latest value\npublic fun save_latest_value(aggregator_addr: address) {\n    // get latest value\n    let latest_value = aggregator::latest_value(aggregator_addr);\n    let (value, scaling_factor, neg) = math::unpack(latest_value);\n    move_to(account, AggregatorInfo {\n        aggregator_addr: aggregator_addr,\n        latest_result: value,\n        latest_result_scaling_factor: scaling_factor,\n        latest_result_neg: neg,\n    });\n}\n\n// some testing that uses aggregator test utility functions\n#[test(account = @0x1)]\npublic entry fun test_aggregator(account: &signer) {\n\n    // creates test aggregator with data\n    aggregator::new_test(account, 100, 0, false);\n\n    // print out value\n    std::debug::print(&aggregator::latest_value(signer::address_of(account)));\n}\n")))}p.isMDXComponent=!0}}]);