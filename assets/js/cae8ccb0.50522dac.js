"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[9669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,d=u["".concat(c,".").concat(y)]||u[y]||f[y]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},51459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="GetDayOfWeek",p={unversionedId:"engine-api/time/getdayofweek",id:"engine-api/time/getdayofweek",title:"GetDayOfWeek",description:"Gets the current day of the week as a string",source:"@site/docs/engine-api/time/getdayofweek.md",sourceDirName:"engine-api/time",slug:"/engine-api/time/getdayofweek",permalink:"/docs/engine-api/time/getdayofweek",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/time/getdayofweek.md",tags:[],version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"GetDay",permalink:"/docs/engine-api/time/getday"},next:{title:"GetHours",permalink:"/docs/engine-api/time/gethours"}},c={},l=[],s={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getdayofweek"},"GetDayOfWeek"),(0,a.kt)("p",null,"Gets the current day of the week as a string"),(0,a.kt)("p",null,"The following example prints the current day of the week."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JavaScript")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'print("Today is " + new Date().GetDayOfWeek())\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lua")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'print("Today is "..Date().GetDayOfWeek())\n')))}f.isMDXComponent=!0}}]);