"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[4990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),g=i,f=l["".concat(p,".").concat(g)]||l[g]||m[g]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={},o="GetMinutes",c={unversionedId:"engine-api/time/getminutes",id:"engine-api/time/getminutes",title:"GetMinutes",description:"Gets the current minutes in a time.",source:"@site/docs/engine-api/time/getminutes.md",sourceDirName:"engine-api/time",slug:"/engine-api/time/getminutes",permalink:"/docs/engine-api/time/getminutes",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/time/getminutes.md",tags:[],version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"GetMilliseconds",permalink:"/docs/engine-api/time/getmilliseconds"},next:{title:"GetMonth",permalink:"/docs/engine-api/time/getmonth"}},p={},s=[],u={toc:s},l="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getminutes"},"GetMinutes"),(0,i.kt)("p",null,"Gets the current minutes in a time."),(0,i.kt)("p",null,"The following example prints the current minutes in an hour."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'print("The current minute is " + new Date().GetMinutes())\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lua")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'print("The current minute is "..tostring(Date().GetMinutes()))\n')))}m.isMDXComponent=!0}}]);