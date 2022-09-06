"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(3117),a=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),c=r(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r;const{lazy:l,block:m,defaultValue:d,values:b,groupId:v,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(r=y.find((e=>e.props.default)))?void 0:r.props.value)?t:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:E,setTabGroupChoices:w}=(0,s.U)(),[T,O]=(0,a.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:R}=(0,c.o5)();if(null!=v){const e=E[v];null!=e&&e!==T&&h.some((t=>t.value===e))&&O(e)}const _=e=>{const t=e.currentTarget,r=C.indexOf(t),n=h[r].value;n!==T&&(R(t),O(n),null!=v&&w(v,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;r=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var a;const t=C.indexOf(e.currentTarget)-1;r=null!=(a=C[t])?a:C[C.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:P,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},2809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(3117),a=(r(7294),r(3905)),o=r(5488),l=r(5162);const i={sidebar_position:10,title:"Docker"},s="Docker",c={unversionedId:"oracle/operator/docker",id:"oracle/operator/docker",title:"Docker",description:"You can run an oracle locally and assign it to your own oracle queue to test how your program may operate in production. Mainnet oracles should always be run in high availability environments with some set of monitoring capabilities.",source:"@site/docs/oracle/operator/docker.mdx",sourceDirName:"oracle/operator",slug:"/oracle/operator/docker",permalink:"/sbv2-core/oracle/operator/docker",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Docker"},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/sbv2-core/oracle/operator/"},next:{title:"Google Cloud Platform",permalink:"/sbv2-core/oracle/operator/gcp"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Running",id:"running",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker"},"Docker"),(0,a.kt)("p",null,"You can run an oracle locally and assign it to your own oracle queue to test how your program may operate in production. Mainnet oracles should always be run in high availability environments with some set of monitoring capabilities."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-Compose")," or another container orchestration pipeline")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Create a docker-compose.yml file with the required environment variables, as defined in ",(0,a.kt)("a",{parentName:"p",href:"./#config"},"Oracle Config"),"."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"local",label:"Local Machine",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3.3"\nservices:\n  switchboard:\n    image: "switchboardlabs/node:dev-v2-07-18-22"\n    network_mode: host\n    restart: always\n    secrets:\n      - PAYER_SECRETS\n    environment:\n      - LIVE=1\n      - CLUSTER=devnet\n      - RPC_URL=${RPC_URL}\n      - ORACLE_KEY=${ORACLE_KEY}\n      - HEARTBEAT_INTERVAL=15\n    volumes:\n      - ./configs.json:/configs.json\nsecrets:\n  PAYER_SECRETS:\n    file: /filesystem/path/to/keypair.json\n'))),(0,a.kt)(l.Z,{value:"gcp",label:"Google Container",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3.3"\nservices:\n  switchboard:\n    image: "switchboardlabs/node:dev-v2-07-18-22\n    network_mode: host\n    restart: always\n    environment:\n      - LIVE=1\n      - CLUSTER=devnet\n      - RPC_URL=${RPC_URL}\n      - ORACLE_KEY=${ORACLE_KEY}\n      - HEARTBEAT_INTERVAL=15\n      - GOOGLE_PAYER_SECRET_PATH=${GOOGLE_PAYER_SECRET_PATH}\n      - GCP_CONFIG_BUCKET=${GCP_CONFIG_BUCKET}\n')))),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("p",null,"Run the following command to start the container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")))}d.isMDXComponent=!0}}]);