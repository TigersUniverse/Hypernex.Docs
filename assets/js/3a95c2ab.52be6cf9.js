"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[6284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},i="RemoveOnUpdate",p={unversionedId:"engine-api/runtime/removeonupdate",id:"engine-api/runtime/removeonupdate",title:"RemoveOnUpdate",description:"Removes a SandboxFunc from every Update frame.",source:"@site/docs/engine-api/runtime/removeonupdate.md",sourceDirName:"engine-api/runtime",slug:"/engine-api/runtime/removeonupdate",permalink:"/docs/engine-api/runtime/removeonupdate",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/runtime/removeonupdate.md",tags:[],version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"RemoveOnLateUpdate",permalink:"/docs/engine-api/runtime/removeonlateupdate"},next:{title:"ScriptEvent",permalink:"/docs/engine-api/scriptevent/"}},l={},m=[],c={toc:m},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"removeonupdate"},"RemoveOnUpdate"),(0,a.kt)("p",null,"Removes a SandboxFunc from every Update frame."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"s"),(0,a.kt)("td",{parentName:"tr",align:null},"SandboxFunc"),(0,a.kt)("td",{parentName:"tr",align:null},"The function to remove from OnUpdate")))),(0,a.kt)("p",null,"The following example creates an Update which sets a text label to the current date, then removes it whenever. This example assumes this is a ",(0,a.kt)("strong",{parentName:"p"},"LocalScript"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JavaScript")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let t = World.GetItemInRoot("dateText")\nlet action = new SandboxFunc(engine).SetAction(() => {\n    let time = new Time()\n    UI.SetText(t, time.GetMonthName() + " " + time.GetDay() + ", " + time.GetYear())\n})\nRuntime.OnUpdate(action)\n// Do something here that signifies a wait\nRuntime.RemoveOnUpdate(action)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lua")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local t = World.GetItemInRoot("dateText")\nlocal action = SandboxFunc().SetAction(function()\n    local time = Time()\n    UI>SetText(t, time.GetMonthName().." "..tostring(time.GetDay())..", "..tostring(time.GetYear()))\nend)\nRuntime.OnUpdate(action)\n-- Do something here that signifies a wait\nRuntime.RemoveOnUpdate(action)\n')))}s.isMDXComponent=!0}}]);