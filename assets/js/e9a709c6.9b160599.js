"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3720],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,l=function(e,r){if(null==e)return{};var t,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),i=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(t),f=l,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||n;return t?a.createElement(m,o(o({ref:r},c),{},{components:t})):a.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=d;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<n;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(7294),l=t(6010);const n="tabItem_Ymn6";function o(e){let{children:r,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,o),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>f});var a=t(3117),l=t(7294),n=t(6010),o=t(2389),u=t(7392),s=t(7094),i=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var r,t;const{lazy:o,block:d,defaultValue:f,values:m,groupId:b,className:y}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((e=>{let{props:{value:r,label:t,attributes:a}}=e;return{value:r,label:t,attributes:a}})),h=(0,u.l)(k,((e,r)=>e.value===r.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===f?f:null!=(r=null!=f?f:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?r:v[0].props.value;if(null!==T&&!k.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[O,w]=(0,l.useState)(T),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,i.o5)();if(null!=b){const e=g[b];null!=e&&e!==O&&k.some((r=>r.value===e))&&w(e)}const C=e=>{const r=e.currentTarget,t=x.indexOf(r),a=k[t].value;a!==O&&(I(r),w(a),null!=b&&N(b,String(a)))},R=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{var a;const r=x.indexOf(e.currentTarget)+1;t=null!=(a=x[r])?a:x[0];break}case"ArrowLeft":{var l;const r=x.indexOf(e.currentTarget)-1;t=null!=(l=x[r])?l:x[x.length-1];break}}null==(r=t)||r.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":d},y)},k.map((e=>{let{value:r,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:e=>x.push(e),onKeyDown:R,onFocus:C,onClick:C},o,{className:(0,n.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===r})}),null!=t?t:r)}))),o?(0,l.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==O})))))}function f(e){const r=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(r)},e))}},5186:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var a=t(3117),l=(t(7294),t(3905)),n=t(5488),o=t(5162);const u={sidebar_position:50,title:"Buffer Relayers"},s=void 0,i={unversionedId:"developers/buffer-relayer",id:"developers/buffer-relayer",title:"Buffer Relayers",description:"Read a Buffer Relayer",source:"@site/docs/developers/buffer-relayer.mdx",sourceDirName:"developers",slug:"/developers/buffer-relayer",permalink:"/sbv2-core/developers/buffer-relayer",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Buffer Relayers"},sidebar:"tutorialSidebar",previous:{title:"Randomness",permalink:"/sbv2-core/developers/randomness"},next:{title:"Switchboard DAO",permalink:"/sbv2-core/dao"}},c={},p=[{value:"Read a Buffer Relayer",id:"read-a-buffer-relayer",level:2},{value:"Create a Buffer Relayer",id:"create-a-buffer-relayer",level:2},{value:"Request a Buffer Relayer Update",id:"request-a-buffer-relayer-update",level:2}],d={toc:p};function f(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"read-a-buffer-relayer"},"Read a Buffer Relayer"),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// Rust code\n"))),(0,l.kt)(o.Z,{value:"Typescript",label:"Typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Typescript code\n"))),(0,l.kt)(o.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# CLI command\n")))),(0,l.kt)("h2",{id:"create-a-buffer-relayer"},"Create a Buffer Relayer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bufferRelayerInit"))),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Typescript code\n"))),(0,l.kt)(o.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# CLI command\n")))),(0,l.kt)("h2",{id:"request-a-buffer-relayer-update"},"Request a Buffer Relayer Update"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bufferRelayerOpenRound"))),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Typescript code\n"))),(0,l.kt)(o.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# CLI command\n")))))}f.isMDXComponent=!0}}]);