"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[4593],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7724:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},i="Bounds",o={unversionedId:"engine-api/bounds/index",id:"engine-api/bounds/index",title:"Bounds",description:"+ This class is only available on LocalAvatarScripts and LocalScripts",source:"@site/docs/engine-api/bounds/index.md",sourceDirName:"engine-api/bounds",slug:"/engine-api/bounds/",permalink:"/docs/engine-api/bounds/",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/bounds/index.md",tags:[],version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"Bindings",permalink:"/docs/engine-api/bindings/"},next:{title:"Cobalt",permalink:"/docs/engine-api/cobalt/"}},p={},d=[],s={toc:d},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bounds"},"Bounds"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This class is only available on ",(0,r.kt)("strong",{parentName:"li"},"LocalAvatarScripts")," and ",(0,r.kt)("strong",{parentName:"li"},"LocalScripts")))),(0,r.kt)("p",null,"Represents an axis aligned bounding box."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instance Properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"center"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/engine-api/float3/"},"float3")),(0,r.kt)("td",{parentName:"tr",align:null},"The center of the bounding box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/engine-api/float3/"},"float3")),(0,r.kt)("td",{parentName:"tr",align:null},"The total size of the box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extents"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/engine-api/float3/"},"float3")),(0,r.kt)("td",{parentName:"tr",align:null},"The extents of the bounding box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/engine-api/float3/"},"float3")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimal point of the box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/engine-api/float3/"},"float3")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximal point of the box")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instance Methods")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Return Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetMinMax"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the bounds to the min and max value of the box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Encapsulate"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"Grows the bounds to include the point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expand"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"Expand the bounds by increasing its size by amount along each side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Intersects"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if another bounding box intersects with this bounding box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntersectRay"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if the ray intersects this bounding box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if the point is contained in the bounding box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SqrDistance"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the smallest squared distance between the point and this bounding box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ClosestPoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/engine-api/float3/"},"float3")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the closest point on the bounding box")))))}m.isMDXComponent=!0}}]);