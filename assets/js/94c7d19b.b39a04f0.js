"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[8598],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>y});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,y=u["".concat(s,".").concat(k)]||u[k]||c[k]||r;return n?l.createElement(y,i(i({ref:e},d),{},{components:n})):l.createElement(y,i({ref:e},d))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9940:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const r={},i="uploadPart",o={type:"api",id:"upload-part",unversionedId:"upload-part",title:"uploadPart",description:"",slug:"/upload-part",frontMatter:{},api:{description:"Uploads part of an allowed file to the server",requestBody:{description:"Information required to upload part of a file",content:{"application/json":{schema:{type:"object",properties:{userid:{description:"The UserId",type:"string"},tokenContent:{description:"The token's content",type:"string"},file:{description:"The file being uploaded (from a form)"},originalFileName:{description:"The original file's name",type:"string"},chunkNumber:{description:"The current chunk of a part to upload",type:"integer"},amountOfChunks:{description:"The total amount of chunks as calculated by the client",type:"integer"},chunkId:{description:"The assigned upload part id given after the first chunk is uploaded",type:"string"},avatarMeta:{description:"The avatarMeta if the upload is an avatar",type:"object",properties:{Publicity:{description:"The publicity of an avatar represented as an integer from 0-1",type:"integer"},Name:{description:"The name of the avatar",type:"string"},Description:{description:"The avatar's description",type:"string"},Tags:{description:"The avatar's tags",type:"array"},ImageURL:{description:"The Image URL for an avatar",type:"string"},BuildPlatform:{description:"The BuildPlatform for the file being uploaded along with the avatarMeta",type:"integer"},Id:{description:"The Id of an existing avatar being overwritten or added to",type:"string"}}},worldMeta:{description:"The worldMeta if the upload is a world",type:"object",properties:{Publicity:{description:"The publicity of an world represented as an integer from 0-1",type:"integer"},Name:{description:"The name of the world",type:"string"},Description:{description:"The world's description",type:"string"},Tags:{description:"The world's tags",type:"array"},ThumbnailURL:{description:"The Thumbnail URL for a world",type:"string"},IconURLs:{description:"An array of Image URLs as icons for a world",type:"array"},ServerScripts:{description:"An array of Script URLs as ServerScripts for a world",type:"array"},BuildPlatform:{description:"The BuildPlatform for the file being uploaded along with the worldMeta",type:"integer"},Id:{description:"The Id of an existing world being overwritten or added to",type:"string"}}}},required:["userid","tokenContent","file","chunkNumber","amountOfChunks"]}}}},responses:{200:{description:"A successful request",content:{"application/json":{schema:{type:"object",properties:{success:{description:"Was the operation a success",type:"boolean"},message:{description:"The message returned by the server",type:"string"},result:{description:"The result of the server response",type:"object",properties:{chunkNumber:{description:"The next chunk number as calculated by the server",type:"integer"},chunkId:{description:"The assigned chunkId",type:"string"}}}},required:["success","message"]}}}}},method:"post",path:"/uploadPart",parameters:[],servers:[{url:"https://play.hypernex.dev/api/v1",description:"Version 1 API Main Server"}],jsonRequestBodyExample:{userid:"string",tokenContent:"string",originalFileName:"string",chunkNumber:0,amountOfChunks:0,chunkId:"string",avatarMeta:{Publicity:0,Name:"string",Description:"string",Tags:[null],ImageURL:"string",BuildPlatform:0,Id:"string"},worldMeta:{Publicity:0,Name:"string",Description:"string",Tags:[null],ThumbnailURL:"string",IconURLs:[null],ServerScripts:[null],BuildPlatform:0,Id:"string"}},info:{title:"Hypernex.API Documentation",version:"1"},postman:{name:"uploadPart",description:{content:"Uploads part of an allowed file to the server",type:"text/plain"},url:{path:["uploadPart"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "userid": "<string>",\n    "tokenContent": "<string>",\n    "file": "schema type not provided",\n    "chunkNumber": "<integer>",\n    "amountOfChunks": "<integer>",\n    "originalFileName": "<string>",\n    "chunkId": "<string>",\n    "avatarMeta": {\n        "Publicity": "<integer>",\n        "Name": "<string>",\n        "Description": "<string>",\n        "Tags": "<array>",\n        "ImageURL": "<string>",\n        "BuildPlatform": "<integer>",\n        "Id": "<string>"\n    },\n    "worldMeta": {\n        "Publicity": "<integer>",\n        "Name": "<string>",\n        "Description": "<string>",\n        "Tags": "<array>",\n        "ThumbnailURL": "<string>",\n        "IconURLs": "<array>",\n        "ServerScripts": "<array>",\n        "BuildPlatform": "<integer>",\n        "Id": "<string>"\n    }\n}'}}},source:"@site/openapi-docs.json",sourceDirName:".",permalink:"/docs/cloud-api/upload-part",previous:{title:"upload",permalink:"/docs/cloud-api/upload"},next:{title:"remove/avatar",permalink:"/docs/cloud-api/remove-avatar"}},s=[],p={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uploadpart"},"uploadPart"),(0,a.kt)("p",null,"Uploads part of an allowed file to the server"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("div",null,(0,a.kt)("p",null,"Information required to upload part of a file"))))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"userid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The UserId")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"tokenContent"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The token's content")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"file"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The file being uploaded (from a form)")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"originalFileName"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The original file's name")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"chunkNumber"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The current chunk of a part to upload")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"amountOfChunks"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The total amount of chunks as calculated by the client")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"chunkId"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The assigned upload part id given after the first chunk is uploaded")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"avatarMeta"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The avatarMeta if the upload is an avatar")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Publicity"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The publicity of an avatar represented as an integer from 0-1")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The name of the avatar")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Description"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The avatar's description")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Tags"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The avatar's tags")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"ImageURL"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The Image URL for an avatar")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"BuildPlatform"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The BuildPlatform for the file being uploaded along with the avatarMeta")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The Id of an existing avatar being overwritten or added to")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"worldMeta"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The worldMeta if the upload is a world")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Publicity"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The publicity of an world represented as an integer from 0-1")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The name of the world")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Description"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The world's description")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Tags"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The world's tags")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"ThumbnailURL"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The Thumbnail URL for a world")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"IconURLs"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"An array of Image URLs as icons for a world")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"ServerScripts"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"An array of Script URLs as ServerScripts for a world")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"BuildPlatform"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The BuildPlatform for the file being uploaded along with the worldMeta")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The Id of an existing world being overwritten or added to")))))))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful request"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"success"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Was the operation a success")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"message"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The message returned by the server")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The result of the server response")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"chunkNumber"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The next chunk number as calculated by the server")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"chunkId"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The assigned chunkId"))))))))))))))))}u.isMDXComponent=!0}}]);