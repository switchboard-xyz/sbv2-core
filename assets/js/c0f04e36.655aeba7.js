"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},35417:(e,t,r)=>{r.d(t,{Z:()=>C});var a=r(86886),n=r(67294),o=r(44267),s=r(15861),i=r(21519),c=r(80102),l=r(83117),u=r(86010),d=r(94780),p=r(33616),m=r(90948),f=r(34867);function g(e){return(0,f.Z)("MuiCardHeader",e)}const h=(0,r(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var b=r(85893);const v=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],y=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,l.Z)({[`& .${h.title}`]:t.title,[`& .${h.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),k=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),_=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),w=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),x=n.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:n,className:o,component:i="div",disableTypography:m=!1,subheader:f,subheaderTypographyProps:h,title:x,titleTypographyProps:R}=r,N=(0,c.Z)(r,v),O=(0,l.Z)({},r,{component:i,disableTypography:m}),A=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},g,t)})(O);let Z=x;null==Z||Z.type===s.Z||m||(Z=(0,b.jsx)(s.Z,(0,l.Z)({variant:n?"body2":"h5",className:A.title,component:"span",display:"block"},R,{children:Z})));let D=f;return null==D||D.type===s.Z||m||(D=(0,b.jsx)(s.Z,(0,l.Z)({variant:n?"body2":"body1",className:A.subheader,color:"text.secondary",component:"span",display:"block"},h,{children:D}))),(0,b.jsxs)(y,(0,l.Z)({className:(0,u.Z)(A.root,o),as:i,ref:t,ownerState:O},N,{children:[n&&(0,b.jsx)(k,{className:A.avatar,ownerState:O,children:n}),(0,b.jsxs)(w,{className:A.content,ownerState:O,children:[Z,D]}),a&&(0,b.jsx)(_,{className:A.action,ownerState:O,children:a})]}))}));var R=r(44073),N=r(39960),O=r(13264),A=r(92949);const Z=(0,O.Z)(R.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),D=(0,O.Z)(x)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function E(e){let{title:t,image:r,imageDark:a,description:c,to:l}=e;const{colorMode:u}=(0,A.I)();return n.createElement(N.Z,{href:l,style:{textDecoration:"none"}},n.createElement(Z,{dark:"dark"===u?1:0},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(D,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===u&&a?a:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),c?n.createElement(n.Fragment,null,n.createElement(i.Z,{sx:{marginBottom:"1rem"}}),n.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},c)):n.createElement(n.Fragment,null))))}function C(e){let{items:t,cols:r}=e;return n.createElement(a.ZP,{container:!0,spacing:3},t.map((e=>n.createElement(a.ZP,{item:!0,xs:12,md:6,lg:12/(null!=r?r:2)},n.createElement(E,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description})))))}},46907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(83117),n=(r(67294),r(3905)),o=r(35417),s=r(44996);const i={sidebar_position:10,slug:".",title:"switchboard-v2"},c=void 0,l={unversionedId:"solana/dev/rust/client",id:"solana/dev/rust/client",title:"switchboard-v2",description:"cargo&nbsp;&nbsp;",source:"@site/docs/solana/dev/rust/client.mdx",sourceDirName:"solana/dev/rust",slug:"/solana/dev/rust/",permalink:"/solana/dev/rust/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"switchboard-v2"},sidebar:"solana",previous:{title:"switchboardpy",permalink:"/solana/dev/python/"},next:{title:"anchor-feed-parser",permalink:"/solana/dev/examples/anchor-feed-parser"}},u={},d=[{value:"Quick Links",id:"quick-links",level:2},{value:"Usage",id:"usage",level:2},{value:"Aggregator",id:"aggregator",level:3},{value:"Read Latest Result",id:"read-latest-result",level:4},{value:"Read Aggregator History",id:"read-aggregator-history",level:4},{value:"VRF Account",id:"vrf-account",level:3},{value:"Read Latest Result",id:"read-latest-result-1",level:4},{value:"RequestRandomness CPI",id:"requestrandomness-cpi",level:4},{value:"Buffer Relayer Account",id:"buffer-relayer-account",level:3},{value:"Read Latest Result",id:"read-latest-result-2",level:4}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/switchboard-v2"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/crates/v/switchboard-v2",alt:"cargo"})),"\xa0","\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,n.kt)("p",null,"A Rust library to interact with Switchboard V2 accounts."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h2",{parentName:"admonition",id:"features"},"Features"),(0,n.kt)("p",{parentName:"admonition"},"By default the crate will default to mainnet. You must explicitly enable the\n",(0,n.kt)("inlineCode",{parentName:"p"},"devnet")," feature to use on devnet."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nswitchboard-v2 = { version = "^0.1.14", features = ["devnet"] }\n'))),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(o.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/rust/switchboard-v2",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.rs/switchboard-v2/latest/switchboard_v2/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/rust/crab.svg")}),imageDark:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/rust/crab.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"aggregator"},"Aggregator"),(0,n.kt)("h4",{id:"read-latest-result"},"Read Latest Result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example(s)"),":\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/anchor-feed-parser/src/lib.rs"},"anchor-feed-parser"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/native-feed-parser/src/lib.rs"},"native-feed-parser")),(0,n.kt)("h4",{id:"read-aggregator-history"},"Read Aggregator History"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note: The Aggregator must have a history buffer initialized before using"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::AggregatorHistoryBuffer;\nuse std::convert::TryInto;\n\nlet history_buffer = AggregatorHistoryBuffer::new(history_account_info)?;\nlet current_timestamp = Clock::get()?.unix_timestamp;\nlet one_hour_ago: f64 = history_buffer.lower_bound(current_timestamp - 3600).unwrap().try_into()?;\n")),(0,n.kt)("h3",{id:"vrf-account"},"VRF Account"),(0,n.kt)("h4",{id:"read-latest-result-1"},"Read Latest Result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::VrfAccountData;\n\n// deserialize the account info\nlet vrf = ctx.accounts.vrf.load()?;\n// OR\nlet vrf = VrfAccountData::new(vrf_account_info)?;\n\n// read the result\nlet result_buffer = vrf.get_result()?;\nlet value: &[u128] = bytemuck::cast_slice(&result_buffer[..]);\nlet result = value[0] % 256000 as u128;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/anchor-vrf-parser/src/actions/update_result.rs"},"anchor-vrf-parser")),(0,n.kt)("h4",{id:"requestrandomness-cpi"},"RequestRandomness CPI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'pub use switchboard_v2::{VrfAccountData, VrfRequestRandomness};\n\nlet switchboard_program = ctx.accounts.switchboard_program.to_account_info();\n\nlet vrf_request_randomness = VrfRequestRandomness {\n    authority: ctx.accounts.state.to_account_info(),\n    vrf: ctx.accounts.vrf.to_account_info(),\n    oracle_queue: ctx.accounts.oracle_queue.to_account_info(),\n    queue_authority: ctx.accounts.queue_authority.to_account_info(),\n    data_buffer: ctx.accounts.data_buffer.to_account_info(),\n    permission: ctx.accounts.permission.to_account_info(),\n    escrow: ctx.accounts.escrow.clone(),\n    payer_wallet: ctx.accounts.payer_wallet.clone(),\n    payer_authority: ctx.accounts.payer_authority.to_account_info(),\n    recent_blockhashes: ctx.accounts.recent_blockhashes.to_account_info(),\n    program_state: ctx.accounts.program_state.to_account_info(),\n    token_program: ctx.accounts.token_program.to_account_info(),\n};\n\nlet vrf_key = ctx.accounts.vrf.key.clone();\nlet authority_key = ctx.accounts.authority.key.clone();\n\nlet state_seeds: &[&[&[u8]]] = &[&[\n    &STATE_SEED,\n    vrf_key.as_ref(),\n    authority_key.as_ref(),\n    &[bump],\n]];\nmsg!("requesting randomness");\nvrf_request_randomness.invoke_signed(\n    switchboard_program,\n    params.switchboard_state_bump,\n    params.permission_bump,\n    state_seeds,\n)?;\n\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/anchor-vrf-parser/src/actions/request_result.rs"},"anchor-vrf-parser")),(0,n.kt)("h3",{id:"buffer-relayer-account"},"Buffer Relayer Account"),(0,n.kt)("h4",{id:"read-latest-result-2"},"Read Latest Result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{BufferRelayerAccountData, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet buffer = BufferRelayerAccountData::new(feed_account_info)?;\n\n// get result\nlet buffer_result = buffer.get_result();\n\n// check if feed has been updated in the last 5 minutes\nbuffer.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// convert buffer to a string\nlet result_string = String::from_utf8(buffer.result)\n    .map_err(|_| error!(ErrorCode::StringConversionFailed))?;\nmsg!("Buffer string {:?}!", result_string);\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/anchor-buffer-parser/src/lib.rs"},"anchor-buffer-parser")))}m.isMDXComponent=!0}}]);