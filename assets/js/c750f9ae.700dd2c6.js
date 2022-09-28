"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8250],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,v=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(v,c(c({ref:n},s),{},{components:t})):r.createElement(v,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(83117),o=(t(67294),t(3905));const i={title:"Index"},c=void 0,a={unversionedId:"dev/cli/config/print/index",id:"dev/cli/config/print/index",title:"Index",description:"print cli config",source:"@site/docs/dev/cli/config/print/index.md",sourceDirName:"dev/cli/config/print",slug:"/dev/cli/config/print/",permalink:"/sbv2-core/dev/cli/config/print/",draft:!1,tags:[],version:"current",frontMatter:{title:"Index"},sidebar:"dev",previous:{title:"Setup",permalink:"/sbv2-core/dev/cli/"},next:{title:"Index",permalink:"/sbv2-core/dev/cli/config/set/"}},l={},p=[],s={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"print cli config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 config print [-h] [-v] [-s] [--json]\n\nFLAGS\n  -h, --help     Show CLI help.\n  -s, --silent   suppress cli prompts\n  -v, --verbose  log everything\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  print cli config\n\nEXAMPLES\n  $ sbv2 config:print\n")))}u.isMDXComponent=!0}}]);