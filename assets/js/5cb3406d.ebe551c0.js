"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[8990],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(p,".").concat(m)]||u[m]||y[m]||o;return a?n.createElement(d,l(l({ref:e},s),{},{components:a})):n.createElement(d,l({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81646:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l="Rotate",i={unversionedId:"engine-api/player/rotate",id:"engine-api/player/rotate",title:"Rotate",description:"This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.",source:"@site/docs/engine-api/player/rotate.md",sourceDirName:"engine-api/player",slug:"/engine-api/player/rotate",permalink:"/docs/engine-api/player/rotate",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/player/rotate.md",tags:[],version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"Respawn",permalink:"/docs/engine-api/player/respawn"},next:{title:"SetAvatar",permalink:"/docs/engine-api/player/setavatar"}},p={},c=[],s={toc:c},u="wrapper";function y(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rotate"},"Rotate"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.")),(0,r.kt)("p",null,"Rotates the LocalPlayer to a specified rotation."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This does not add to your rotation!")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rotation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/engine-api/float4/"},"float4")),(0,r.kt)("td",{parentName:"tr",align:null},"The rotation value to rotate to")))),(0,r.kt)("p",null,"The following rotates your character by 45 degrees, simulating a Snap Turn in VR."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JavaScript")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let Players = instance.GetHandler("Players")\n\nlet LocalPlayer = Players.LocalPlayer\nlet Avatar = LocalPlayer.Avatar // assuming this is not null\n\nlet avatarRoot = Avatar.GetPlayerRoot()\nlet avatarRotation = avatarRoot.Rotation\nlet newRotation = new float4(avatarRotation.x, avatarRotation.y + 45, avatarRotation.z, avatarRotation.w)\nLocalPlayer.Rotate(newRotation)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Lua")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local Players = instance.GetHandler("Players")\n\nlocal LocalPlayer = Players.LocalPlayer\nlocal Avatar = LocalPlayer.Avatar // assuming this is not null\n\nlocal avatarRoot = Avatar.GetPlayerRoot()\nlocal avatarRotation = avatarRoot.Rotation\nlocal newRotation = float4()\nnewRotation.x = avatarRotation.x\nnewRotation.y = avatarRotation.y + 45\nnewRotation.z = avatarRotation.z\nnewRotation.w = avatarRotation.w\nLocalPlayer.Rotate(newRotation)\n')))}y.isMDXComponent=!0}}]);