"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7214],{2734:(t,l,e)=>{e.d(l,{Z:()=>r});e(7294);var n=e(6682),u=e(247);function r(){return(0,n.Z)(u.Z)}},9707:(t,l,e)=>{e.d(l,{Z:()=>o});var n=e(3117),u=e(102),r=e(9766),a=e(5578);const k=["sx"];function o(t){const{sx:l}=t,e=(0,u.Z)(t,k),{systemProps:o,otherProps:s}=(t=>{const l={systemProps:{},otherProps:{}};return Object.keys(t).forEach((e=>{a.Gc[e]?l.systemProps[e]=t[e]:l.otherProps[e]=t[e]})),l})(e);let i;return i=Array.isArray(l)?[o,...l]:"function"==typeof l?(...t)=>{const e=l(...t);return(0,r.P)(e)?(0,n.Z)({},o,e):o}:(0,n.Z)({},o,l),(0,n.Z)({},s,{sx:i})}},5480:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>k,toc:()=>s});var n=e(3117),u=(e(7294),e(3905));const r={},a=void 0,k={unversionedId:"accounts/SbState",id:"accounts/SbState",title:"SbState",description:"Size 0.008741760 SOL",source:"@site/idl/accounts/SbState.md",sourceDirName:"accounts",slug:"/accounts/SbState",permalink:"/sbv2-core/idl/accounts/SbState",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PermissionAccountData",permalink:"/sbv2-core/idl/accounts/PermissionAccountData"},next:{title:"VrfAccountData",permalink:"/sbv2-core/idl/accounts/VrfAccountData"}},o={},s=[],i={toc:s};function d(t){let{components:l,...e}=t;return(0,u.kt)("wrapper",(0,n.Z)({},i,e,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("b",null,"Size: "),"1128 Bytes",(0,u.kt)("br",null),(0,u.kt)("b",null,"Rent Exemption: "),"0.008741760 SOL",(0,u.kt)("br",null),(0,u.kt)("br",null),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Field"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"authority"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The account authority permitted to make account changes.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"tokenMint"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The token mint used for oracle rewards, aggregator leases, and other reward incentives.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"tokenVault"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"Token vault used by the program to receive kickbacks.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"daoMint"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The token mint used by the DAO.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,u.kt)("td",{parentName:"tr",align:null},"u8","[992]"),(0,u.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}d.isMDXComponent=!0},4008:(t,l,e)=>{e.d(l,{Z:()=>k});var n=e(7357),u=e(2949),r=e(4996),a=e(7294);const k=t=>{const{colorMode:l}=(0,u.I)();let e="inherit";t.lightBg&&"dark"!==l&&(e=t.lightBg),t.darkBg&&"dark"===l&&(e=t.darkBg);let k={};return t.sx&&(k={backgroundColor:e,m:"auto",display:"flex",...k,...t.sx}),a.createElement(n.Z,{component:"img",sx:k,src:(0,r.Z)(t.img)})}},5205:(t,l,e)=>{e.d(l,{Z:()=>o});var n=e(5327),u=e(4882),r=e(5861),a=e(1899),k=e(7294);const o=t=>{let l={textTransform:"none",color:"#4c6fff",fontWeight:800,margin:0};t.sx&&(l={...l,...t.sx});return k.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},k.createElement(u.Z,{variant:"text",size:"small",startIcon:k.createElement(a.Z,{sx:{fill:"#4c6fff"},fontSize:"small"}),onClick:()=>{const l=document.createElement("textarea");l.value=t.publicKey,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}},k.createElement(r.Z,{sx:l,color:"textSecondary"},t.publicKey)))}},5729:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>s,contentTitle:()=>k,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var n=e(3117),u=(e(7294),e(3905)),r=e(5205);e(4008),e(5480),e(9960);const a={sidebar_position:80,title:"Switchboard DAO"},k="Switchboard DAO",o={unversionedId:"dao",id:"dao",title:"Switchboard DAO",description:"The Switchboard DAO operates a set of oracle queues and provide the mechanisms for stakeholders to contribute, join, and vote on new proposals. More information coming soon.",source:"@site/docs/dao.mdx",sourceDirName:".",slug:"/dao",permalink:"/sbv2-core/dao",draft:!1,tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80,title:"Switchboard DAO"},sidebar:"tutorialSidebar",previous:{title:"Buffer Relayers",permalink:"/sbv2-core/developers/buffer-relayer"},next:{title:"Security",permalink:"/sbv2-core/security"}},s={},i=[{value:"Mainnet-Beta",id:"mainnet-beta",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:3},{value:"Permissioned Queue",id:"permissioned-queue",level:3},{value:"Devnet",id:"devnet",level:2},{value:"Permissionless Queue",id:"permissionless-queue-1",level:3},{value:"Permissioned Queue",id:"permissioned-queue-1",level:3}],d={toc:i};function c(t){let{components:l,...e}=t;return(0,u.kt)("wrapper",(0,n.Z)({},d,e,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"switchboard-dao"},"Switchboard DAO"),(0,u.kt)("p",null,"The Switchboard DAO operates a set of oracle queues and provide the mechanisms for stakeholders to contribute, join, and vote on new proposals. More information coming soon."),(0,u.kt)("h2",{id:"mainnet-beta"},"Mainnet-Beta"),(0,u.kt)("h3",{id:"permissionless-queue"},"Permissionless Queue"),(0,u.kt)("p",null,"The permissionless queue does not require aggregators to have ",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"5JYwqvKkqp35w8Nq3ba4z1WYUeJQ1rB36V8XvaGp6zn1",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"FozqXFMS1nQKfPqwVdChr7RJ3y7ccSux39zU682kNYjJ",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"BKtF8yyQsj3Ft6jb2nkfpEKzARZVdGgdEPs6mFmZNmbA",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedVrfEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"enableBufferRelayers")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null,"12500")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null,"0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null,"180"))))))),(0,u.kt)("h3",{id:"permissioned-queue"},"Permissioned Queue"),(0,u.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using the queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"FZ3CAm8o5zf18Ua23jhrZJRYCMtGhFxFrTux8N5yrf2T",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Mainnet Permissioned Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedVrfEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"enableBufferRelayers")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null,"12500")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null,"0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null,"180"))))))),(0,u.kt)("h2",{id:"devnet"},"Devnet"),(0,u.kt)("h3",{id:"permissionless-queue-1"},"Permissionless Queue"),(0,u.kt)("p",null,"The permissionless queue does not require aggregators to have ",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"7yJ3sSifpmUFB5BcXy6yMDje15xw2CovJjfXfBKsCfT5",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"GN9jjCy2THzZxhYqZETmPM3my8vg4R5JyNkgULddUMa5",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Devnet Permissionless Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedVrfEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"enableBufferRelayers")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null,"12500")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null,"0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null,"180"))))))),(0,u.kt)("h3",{id:"permissioned-queue-1"},"Permissioned Queue"),(0,u.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using the queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"DQXUDDcDoQ2FjzjYRi45gjdRqe1EsLwoqNhW2hf488gf",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Devnet Permissioned Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedVrfEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"enableBufferRelayers")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null,"12500")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null,"0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null,"180"))))))))}c.isMDXComponent=!0}}]);