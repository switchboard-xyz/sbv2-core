"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1024],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(83117),n=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a;const{lazy:i,block:p,defaultValue:m,values:b,groupId:v,className:h}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),f=(0,l.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:x}=(0,s.U)(),[Z,T]=(0,n.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=v){const e=w[v];null!=e&&e!==Z&&y.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,a=j.indexOf(t),r=y[a].value;r!==Z&&(E(t),T(r),null!=v&&x(v,String(r)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=j.indexOf(e.currentTarget)+1;a=null!=(r=j[t])?r:j[0];break}case"ArrowLeft":{var n;const t=j.indexOf(e.currentTarget)-1;a=null!=(n=j[t])?n:j[j.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},y.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>j.push(e),onKeyDown:O,onFocus:N,onClick:N},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":Z===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function m(e){const t=(0,i.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},35417:(e,t,a)=>{a.d(t,{Z:()=>z});var r=a(86886),n=a(67294),o=a(44267),i=a(15861),l=a(21519),s=a(80102),c=a(83117),u=a(86010),d=a(94780),p=a(33616),m=a(90948),b=a(34867);function v(e){return(0,b.Z)("MuiCardHeader",e)}const h=(0,a(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var g=a(85893);const y=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,c.Z)({[`& .${h.title}`]:t.title,[`& .${h.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),k=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),w=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),Z=n.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiCardHeader"}),{action:r,avatar:n,className:o,component:l="div",disableTypography:m=!1,subheader:b,subheaderTypographyProps:h,title:Z,titleTypographyProps:T}=a,j=(0,s.Z)(a,y),E=(0,c.Z)({},a,{component:l,disableTypography:m}),N=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)})(E);let O=Z;null==O||O.type===i.Z||m||(O=(0,g.jsx)(i.Z,(0,c.Z)({variant:n?"body2":"h5",className:N.title,component:"span",display:"block"},T,{children:O})));let P=b;return null==P||P.type===i.Z||m||(P=(0,g.jsx)(i.Z,(0,c.Z)({variant:n?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},h,{children:P}))),(0,g.jsxs)(f,(0,c.Z)({className:(0,u.Z)(N.root,o),as:l,ref:t,ownerState:E},j,{children:[n&&(0,g.jsx)(k,{className:N.avatar,ownerState:E,children:n}),(0,g.jsxs)(x,{className:N.content,ownerState:E,children:[O,P]}),r&&(0,g.jsx)(w,{className:N.action,ownerState:E,children:r})]}))}));var T=a(44073),j=a(39960),E=a(13264),N=a(92949);const O=(0,E.Z)(T.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),P=(0,E.Z)(Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function C(e){let{title:t,image:a,imageDark:r,description:s,to:c}=e;const{colorMode:u}=(0,N.I)();return n.createElement(j.Z,{href:c,style:{textDecoration:"none"}},n.createElement(O,{dark:"dark"===u?1:0},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(P,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===u&&r?r:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?n.createElement(n.Fragment,null,n.createElement(l.Z,{sx:{marginBottom:"1rem"}}),n.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):n.createElement(n.Fragment,null))))}function z(e){let{items:t,cols:a}=e;return n.createElement(r.ZP,{container:!0,spacing:3},t.map((e=>n.createElement(r.ZP,{item:!0,xs:12,md:6,lg:12/(null!=a?a:2)},n.createElement(C,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description})))))}},20379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=a(83117),n=(a(67294),a(3905)),o=a(65488),i=a(85162),l=a(35417),s=a(44996);const c={sidebar_position:30,title:"@switchboard-xyz/sbv2-utils"},u=void 0,d={unversionedId:"solana/dev/javascript/sbv2-utils",id:"solana/dev/javascript/sbv2-utils",title:"@switchboard-xyz/sbv2-utils",description:"GitHub&nbsp;&nbsp;",source:"@site/docs/solana/dev/javascript/sbv2-utils.mdx",sourceDirName:"solana/dev/javascript",slug:"/solana/dev/javascript/sbv2-utils",permalink:"/solana/dev/javascript/sbv2-utils",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"@switchboard-xyz/sbv2-utils"},sidebar:"solana",previous:{title:"@switchboard-xyz/sbv2-lite",permalink:"/solana/dev/javascript/sbv2-lite"},next:{title:"switchboardpy",permalink:"/solana/dev/python/"}},p={},m=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2}],b={toc:m};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/javascript/sbv2-utils"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"})),"\xa0","\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@switchboard-xyz/sbv2-utils"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@switchboard-xyz/sbv2-utils",alt:"npm"})),"\xa0","\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,n.kt)("p",null,"A lightweight library to decode and parse aggregator accounts"),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(l.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/javascript/sbv2-utils",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/sbv2-utils/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("hr",null),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This library will soon be merged with ",(0,n.kt)("inlineCode",{parentName:"p"},"@switchboard-xyz/switchboard-v2")," into a\nnewly created npm package ",(0,n.kt)("inlineCode",{parentName:"p"},"@switchboard-xyz/solana.js")," to follow a common\nnomenclature.")),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @switchboard-xyz/sbv2-utils\n"))),(0,n.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @switchboard-xyz/sbv2-utils\n")))))}v.isMDXComponent=!0}}]);