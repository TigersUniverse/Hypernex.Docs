"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[1677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Graphic",p={unversionedId:"engine-api/components/graphic/index",id:"engine-api/components/graphic/index",title:"Graphic",description:"+ This class is only available in a Local environment",source:"@site/docs/engine-api/components/graphic/index.md",sourceDirName:"engine-api/components/graphic",slug:"/engine-api/components/graphic/",permalink:"/docs/engine-api/components/graphic/",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/components/graphic/index.md",tags:[],version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"Dropdown",permalink:"/docs/engine-api/components/dropdown/"},next:{title:"Interactables",permalink:"/docs/engine-api/components/interactables/"}},c={},l=[{value:"Methods",id:"methods",level:2}],s={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graphic"},"Graphic"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"This class is only available in a Local environment"))),(0,a.kt)("p",null,"The Graphic class is a component which interacts with Unity Images on UI."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The Graphic class is ",(0,a.kt)("em",{parentName:"p"},"only")," compatible with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.ugui@3.0/manual/script-Image.html"},"Image")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.ugui@3.0/manual/script-RawImage.html"},"RawImage"),".")),(0,a.kt)("p",null,"To get a Graphic from an item, use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/engine-api/item/getcomponent"},"GetComponent")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let graphicComponent = item.GetComponent("Graphic")\n')),(0,a.kt)("p",null,"You can then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"graphicComponent")," property to access the Graphic class."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Return Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SetImageFromAsset"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the image asset from the World's Resources")))))}u.isMDXComponent=!0}}]);