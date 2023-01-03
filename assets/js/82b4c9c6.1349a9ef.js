"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9653],{24008:(t,e,l)=>{l.d(e,{Z:()=>u});var n=l(99226),r=l(92949),a=l(44996),o=l(67294);const u=t=>{const{colorMode:e}=(0,r.I)();let l="inherit";t.lightBg&&"dark"!==e&&(l=t.lightBg),t.darkBg&&"dark"===e&&(l=t.darkBg);let u={};return t.sx&&(u={backgroundColor:l,m:"auto",display:"flex",...u,...t.sx}),o.createElement(n.Z,{component:"img",sx:u,src:(0,a.Z)(t.img)})}},55205:(t,e,l)=>{l.d(e,{Z:()=>d});var n=l(15327),r=l(54882),a=l(15861),o=l(41899),u=l(67294);const d=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return u.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},u.createElement(r.Z,{variant:"text",size:"small",startIcon:u.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},u.createElement(a.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},94304:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=l(83117),r=(l(67294),l(3905)),a=(l(24008),l(39960),l(55205));const o={sidebar_position:30},u="Devnet",d={unversionedId:"aptos/program/devnet",id:"aptos/program/devnet",title:"Devnet",description:"Program ID",source:"@site/docs/aptos/program/devnet.mdx",sourceDirName:"aptos/program",slug:"/aptos/program/devnet",permalink:"/aptos/program/devnet",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"aptos",previous:{title:"Testnet",permalink:"/aptos/program/testnet"},next:{title:"Overview",permalink:"/aptos/feeds/"}},s={},i=[{value:"Program ID",id:"program-id",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],k={toc:i};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"devnet"},"Devnet"),(0,r.kt)("h2",{id:"program-id"},"Program ID"),(0,r.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Account"),(0,r.kt)("th",null,"Address"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program ID")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"State Address")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",mdxType:"PublicKeyButton"}))))),(0,r.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,r.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Addresses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"0x3fae0d55c5fedcbd4e24af5f4666f27bcd29253b1ab86dd9e82242eb78c9534b",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"0xa7a9c7fde3eccd77809541d558e13f051b09c7eef2fa31b361f9bc377ff60449",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Devnet Permissionless Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"True")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null,"30000")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null,"1100000")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"open_round_reward")),(0,r.kt)("td",null,"200000")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"save_confirmation_reward")),(0,r.kt)("td",null,"2000000")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"save_reward")),(0,r.kt)("td",null,"850000"))))))))}c.isMDXComponent=!0}}]);