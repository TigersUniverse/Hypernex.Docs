"use strict";(self.webpackChunkhypernex_docs=self.webpackChunkhypernex_docs||[]).push([[8280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="NetworkEvent",l={unversionedId:"engine-api/networkevent/index",id:"engine-api/networkevent/index",title:"NetworkEvent",description:"+ This class is only available on ServerScripts and LocalScripts",source:"@site/docs/engine-api/networkevent/index.md",sourceDirName:"engine-api/networkevent",slug:"/engine-api/networkevent/",permalink:"/docs/engine-api/networkevent/",draft:!1,editUrl:"https://github.com/TigersUniverse/Hypernex.Docs/docs/engine-api/networkevent/index.md",tags:[],version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"Size",permalink:"/docs/engine-api/networkedobject/size"},next:{title:"SendToClient",permalink:"/docs/engine-api/networkevent/sendtoclient"}},p={},c=[],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"networkevent"},"NetworkEvent"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"This class is only available on ",(0,a.kt)("strong",{parentName:"li"},"ServerScripts")," and ",(0,a.kt)("strong",{parentName:"li"},"LocalScripts")),(0,a.kt)("li",{parentName:"ul"},"This instance of a class should be accessed through its static object ",(0,a.kt)("inlineCode",{parentName:"li"},"NetworkEvent")),(0,a.kt)("li",{parentName:"ul"},"Certain methods may only be available on certain scripts"))),(0,a.kt)("p",null,"NetworkEvents are used to send data between the Server and Client and vice versa."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instance Methods")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Return Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/networkevent/sendtoclient"},"SendToClient")),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Sends an object data array to a client (Server Only)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/networkevent/sendtoallclients"},"SendToAllClients")),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Sends an object data array to all clients (Server Only)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/engine-api/handlers/network/sendtoserver"},"SendToServer")),(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},"Sends an object data array to the server (Client Only)")))))}u.isMDXComponent=!0}}]);