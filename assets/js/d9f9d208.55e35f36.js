"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[5793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="1.4.1",i={unversionedId:"changelogs/Hypernex.CCK/141",id:"changelogs/Hypernex.CCK/141",title:"1.4.1",description:"Small bugfix and addition of needed API",source:"@site/docs/changelogs/Hypernex.CCK/141.md",sourceDirName:"changelogs/Hypernex.CCK",slug:"/changelogs/Hypernex.CCK/141",permalink:"/docs/changelogs/Hypernex.CCK/141",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/changelogs/Hypernex.CCK/141.md",tags:[],version:"current",frontMatter:{},sidebar:"changelogSidebar",previous:{title:"1.4.0",permalink:"/docs/changelogs/Hypernex.CCK/140"},next:{title:"1.4.2",permalink:"/docs/changelogs/Hypernex.CCK/142"}},c={},p=[{value:"Changes",id:"changes",level:2},{value:"API Changes",id:"api-changes",level:2},{value:"RegisterForceDeleteObject",id:"registerforcedeleteobject",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"141"},"1.4.1"),(0,o.kt)("p",null,"Small bugfix and addition of needed API"),(0,o.kt)("h2",{id:"changes"},"Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"RegisterForceDeleteObject"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Will forcefully remove an entire GameObject if a specific component is found on it"),(0,o.kt)("li",{parentName:"ul"},"Useful for multiple components attached to a GameObject that are reliant on each other"))),(0,o.kt)("li",{parentName:"ul"},"Fixed bug where ApplyComponentRestrictions would fail due to a null GameObject or Component")),(0,o.kt)("h2",{id:"api-changes"},"API Changes"),(0,o.kt)("h3",{id:"registerforcedeleteobject"},"RegisterForceDeleteObject"),(0,o.kt)("p",null,"This method will remove an entire GameObject if a specific component type is found on it. This can be useful for multiple components on one GameObject that rely on each other."),(0,o.kt)("p",null,"Here is an example on how to register the ",(0,o.kt)("inlineCode",{parentName:"p"},"EventSystem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StandaloneInputModule")," component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"Security.RegisterForceDeleteObject<EventSystem>();\nSecurity.RegisterForceDeleteObject<StandaloneInputModule>();\n")),(0,o.kt)("p",null,"and that's it!"))}d.isMDXComponent=!0}}]);