"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[7662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),y=o,m=c["".concat(a,".").concat(y)]||c[y]||u[y]||l;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=y;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},561:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const l={},i="remove/world",s={type:"api",id:"remove-world",unversionedId:"remove-world",title:"remove/world",description:"",slug:"/remove-world",frontMatter:{},api:{description:"Removes a world by its id",requestBody:{description:"Information required to remove a world by its id",content:{"application/json":{schema:{type:"object",properties:{userid:{description:"The UserId",type:"string"},tokenContent:{description:"The token's content",type:"string"},worldid:{description:"The world's id to remove",type:"string"}},required:["userid","tokenContent","worldid"]}}}},responses:{200:{description:"A successful request",content:{"application/json":{schema:{type:"object",properties:{success:{description:"Was the operation a success",type:"boolean"},message:{description:"The message returned by the server",type:"string"},result:{description:"The result of the server response",type:"object"}},required:["success","message"]}}}}},method:"post",path:"/remove/world",parameters:[],servers:[{url:"https://play.hypernex.dev/api/v1",description:"Version 1 API Main Server"}],jsonRequestBodyExample:{userid:"string",tokenContent:"string",worldid:"string"},info:{title:"Hypernex.API Documentation",version:"1"},postman:{name:"remove/world",description:{content:"Removes a world by its id",type:"text/plain"},url:{path:["remove","world"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "userid": "<string>",\n    "tokenContent": "<string>",\n    "worldid": "<string>"\n}'}}},source:"@site/openapi-docs.json",sourceDirName:".",permalink:"/docs/cloud-api/remove-world",previous:{title:"remove/avatar",permalink:"/docs/cloud-api/remove-avatar"},next:{title:"remove/file",permalink:"/docs/cloud-api/remove-file"}},a=[],p={toc:a},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"removeworld"},"remove/world"),(0,o.kt)("p",null,"Removes a world by its id"),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,o.kt)("div",null,(0,o.kt)("p",null,"Information required to remove a world by its id"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"userid"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The UserId")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"tokenContent"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The token's content")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"worldid"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The world's id to remove")))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"A successful request"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"success"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Was the operation a success")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"message"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The message returned by the server")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"result"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The result of the server response"))))))))))))}c.isMDXComponent=!0}}]);