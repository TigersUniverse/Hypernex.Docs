"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[4950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16668:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={},o="tag/world/:name/:itemsPerPage/:pageNumber",i={type:"api",id:"tag-world-name-items-per-page-page-number",unversionedId:"tag-world-name-items-per-page-page-number",title:"tag/world/:name/:itemsPerPage/:pageNumber",description:"",slug:"/tag-world-name-items-per-page-page-number",frontMatter:{},api:{description:"Searches for a world based on a tag",parameters:[{in:"path",name:"tag",description:"The tag to search for",schema:{type:"string"},required:!0},{in:"path",name:"itemsPerPage",description:"How many results to show per page. Limited to 50 or below",schema:{type:"string"},required:!0},{in:"path",name:"pageNumber",description:"The selected page number",schema:{type:"string"},required:!0}],responses:{200:{description:"A successful request",content:{"application/json":{schema:{type:"object",properties:{success:{description:"Was the operation a success",type:"boolean"},message:{description:"The message returned by the server",type:"string"},result:{description:"The result of the server response",type:"object",properties:{Candidates:{description:"The resulting WorldIds",type:"array"}}}},required:["success","message"]}}}}},method:"get",path:"/tag/world/{tag}/{itemsPerPage}/{pageNumber}",servers:[{url:"https://play.hypernex.dev/api/v1",description:"Version 1 API Main Server"}],info:{title:"Hypernex.API Documentation",version:"1"},postman:{name:"tag/world/:name/:itemsPerPage/:pageNumber",description:{content:"Searches for a world based on a tag",type:"text/plain"},url:{path:["tag","world",":tag",":itemsPerPage",":pageNumber"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The tag to search for",type:"text/plain"},type:"any",value:"<string>",key:"tag"},{description:{content:"(Required) How many results to show per page. Limited to 50 or below",type:"text/plain"},type:"any",value:"<string>",key:"itemsPerPage"},{description:{content:"(Required) The selected page number",type:"text/plain"},type:"any",value:"<string>",key:"pageNumber"}]},method:"GET"}},source:"@site/openapi-docs.json",sourceDirName:".",permalink:"/docs/cloud-api/tag-world-name-items-per-page-page-number",previous:{title:"search/world/:name/:itemsPerPage/:pageNumber",permalink:"/docs/cloud-api/search-world-name-items-per-page-page-number"},next:{title:"filemeta/:userid/:fileid",permalink:"/docs/cloud-api/filemeta-userid-fileid"}},s=[],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tagworldnameitemsperpagepagenumber"},"tag/world/:name/:itemsPerPage/:pageNumber"),(0,a.kt)("p",null,"Searches for a world based on a tag"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"tag"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The tag to search for")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"itemsPerPage"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"How many results to show per page. Limited to 50 or below")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"pageNumber"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The selected page number")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful request"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"success"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Was the operation a success")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"message"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The message returned by the server")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The result of the server response")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Candidates"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The resulting WorldIds"))))))))))))))))}d.isMDXComponent=!0}}]);