"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[7364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},l="Colliders",o={unversionedId:"engine-api/colliders/index",id:"engine-api/colliders/index",title:"Colliders",description:"+ This static class is only available on LocalAvatarScripts and LocalScripts",source:"@site/docs/engine-api/colliders/index.md",sourceDirName:"engine-api/colliders",slug:"/engine-api/colliders/",permalink:"/docs/engine-api/colliders/",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/colliders/index.md",tags:[],version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"Collider",permalink:"/docs/engine-api/collider/"},next:{title:"Collision",permalink:"/docs/engine-api/collision/"}},p={},d=[],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colliders"},"Colliders"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"This static class is only available on ",(0,a.kt)("strong",{parentName:"li"},"LocalAvatarScripts")," and ",(0,a.kt)("strong",{parentName:"li"},"LocalScripts")))),(0,a.kt)("p",null,"Provides events to be registered to collision and trigger events on an Item."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Static Methods")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Return Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnTriggerEnter"),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Registers a SandboxFunc to when an ",(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/item/"},"Item"),"'s trigger is entered")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnTriggerStay"),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Registers a SandboxFunc to when an ",(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/item/"},"Item"),"'s trigger is entered and hasn't exited")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnTriggerExit"),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Registers a SandboxFunc to when an ",(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/item/"},"Item"),"'s trigger is exited")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnCollisionEnter"),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Registers a SandboxFunc to when an ",(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/item/"},"Item"),"'s collider is entered")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnCollisionStay"),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Registers a SandboxFunc to when an ",(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/item/"},"Item"),"'s collider is entered and hasn't exited")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnCollisionExit"),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Registers a SandboxFunc to when an ",(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/item/"},"Item"),"'s collider is exited")))))}m.isMDXComponent=!0}}]);