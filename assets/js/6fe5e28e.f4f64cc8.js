"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[8095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:0},i="parse",l={unversionedId:"engine-api/json-lua/parse",id:"engine-api/json-lua/parse",title:"parse",description:"Parses a JSON string into a lua table.",source:"@site/docs/engine-api/json-lua/parse.md",sourceDirName:"engine-api/json-lua",slug:"/engine-api/json-lua/parse",permalink:"/docs/engine-api/json-lua/parse",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/json-lua/parse.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"engineSidebar",previous:{title:"JSON (Lua)",permalink:"/docs/engine-api/json-lua/"},next:{title:"serialize",permalink:"/docs/engine-api/json-lua/serialize"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parse"},"parse"),(0,a.kt)("p",null,"Parses a JSON string into a lua table."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jsonString"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The JSON String to parse")))),(0,a.kt)("p",null,"The following example parses a json string and gets the first value of the object"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lua")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local jsonString = "\\"{\\"LetterOne\\": \\"a\\", \\"LetterTwo\\": \\"b\\"}\\""\nlocal j = json.parse(jsonString)\nfor _, k in pairs(j) do\n    print(k)\n    break\nend\n-- Expected Output: a\n')))}m.isMDXComponent=!0}}]);