"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[7832],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),u=l,k=c["".concat(s,".").concat(u)]||c[u]||y[u]||i;return n?r.createElement(k,a(a({ref:e},d),{},{components:n})):r.createElement(k,a({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9354:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const i={},a="instances/:worldid",o={type:"api",id:"instances-worldid-1",unversionedId:"instances-worldid-1",title:"instances/:worldid",description:"",slug:"/instances-worldid-1",frontMatter:{},api:{description:"Gets a list of public instances a world is hosting",parameters:[{in:"path",name:"worldid",description:"The WorldId to get instances of",schema:{type:"string"},required:!0}],responses:{200:{description:"A successful request",content:{"application/json":{schema:{type:"object",properties:{success:{description:"Was the operation a success",type:"boolean"},message:{description:"The message returned by the server",type:"string"},result:{description:"The result of the server response",type:"object",properties:{GameServers:{description:"An array of GameServers that are public",type:"object",properties:{SafeInstances:{description:"An array of SafeInstance meta",type:"array",properties:{GameServerId:{description:"The GameServerId the instance is running on",type:"string"},Region:{description:"The Id of the instance",type:"object",properties:{ContinentCode:{description:"The abbreviation for a continent",type:"string"},City:{description:"The city the GameServer resides in",type:"string"},State:{description:"The state the GameServer resides in",type:"string"},Country:{description:"The country the GameServer resides in",type:"string"},Latitude:{description:"The Latitude of the GameServer",type:"integer"},Longitude:{description:"The Longitude of the GameServer",type:"integer"}},required:["ContinentCode"]}}}}}}}},required:["success","message"]}}}}},method:"get",path:"/gameServers",servers:[{url:"https://play.hypernex.dev/api/v1",description:"Version 1 API Main Server"}],info:{title:"Hypernex.API Documentation",version:"1"},postman:{name:"instances/:worldid",description:{content:"Gets a list of public instances a world is hosting",type:"text/plain"},url:{path:["gameServers"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The WorldId to get instances of",type:"text/plain"},type:"any",value:"<string>",key:"worldid"}]},method:"GET"}},source:"@site/openapi-docs.json",sourceDirName:".",permalink:"/docs/cloud-api/instances-worldid-1",previous:{title:"instances/:worldid",permalink:"/docs/cloud-api/instances-worldid"},next:{title:"randomImage",permalink:"/docs/cloud-api/random-image"}},s=[],p={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"instancesworldid"},"instances/:worldid"),(0,l.kt)("p",null,"Gets a list of public instances a world is hosting"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"worldid"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The WorldId to get instances of")))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"A successful request"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"success"),(0,l.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Was the operation a success")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"message"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The message returned by the server")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"result"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The result of the server response")),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"GameServers"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"An array of GameServers that are public")),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"SafeInstances"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"An array of SafeInstance meta")),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"GameServerId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The GameServerId the instance is running on")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"Region"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The Id of the instance")),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"ContinentCode"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The abbreviation for a continent")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"City"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The city the GameServer resides in")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"State"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The state the GameServer resides in")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"Country"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The country the GameServer resides in")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"Latitude"),(0,l.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The Latitude of the GameServer")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"Longitude"),(0,l.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The Longitude of the GameServer"))))))))))))))))))))))))))))}c.isMDXComponent=!0}}]);