"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9021],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3090:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,c={unversionedId:"getting_started/rest-client/http-client",id:"getting_started/rest-client/http-client",isDocsHomePage:!1,title:"http-client",description:"@ensono-stacks/rest-client:http-client",source:"@site/docs/getting_started/rest-client/http-client.md",sourceDirName:"getting_started/rest-client",slug:"/getting_started/rest-client/http-client",permalink:"/docs/getting_started/rest-client/http-client",tags:[],version:"current",frontMatter:{}},p=[{value:"@ensono-stacks/rest-client:http-client",id:"ensono-stacksrest-clienthttp-client",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],u={toc:p},d="wrapper";function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksrest-clienthttp-client"},"@ensono-stacks/rest-client:http-client"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Installs and creates a new instance of Axios, ready to generate a client with custom configuration"),(0,l.kt)("p",null,"This plugin installs Axios and configures a new instance of the provider ready to be customised and consumed via your project."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:http-client\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"Library name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Subdirectory inside libs/ where the generated library is placed"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--importPath"),(0,l.kt)("td",{parentName:"tr",align:null},"What import path would you like to use for the library"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Add tags to the library (used for linting)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--skipFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"Skip formatting files"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("p",null,"The http-client will create a new library within your libs folder for the axios http client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},"\n\u251c\u2500\u2500 http-client\n\u2502   \u251c\u2500\u2500  src\n\u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u251c\u2500\u2500  README.md\n\u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2502   \u251c\u2500\u2500 project.json\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 jest.config.ts\n\u2514\u2500\u2500 \u2514\u2500\u2500 tsconfig.spec.json\n")),(0,l.kt)("p",null,"Additionally, the package.json will be updated with the axios dependency."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Modified files"',title:'"Modified','files"':!0},"\u251c\u2500\u2500 root\n\u2502   \u251c\u2500\u2500 tsconfig.base.json\n\u2514\u2500\u2500 \u2514\u2500\u2500package.json\n")),(0,l.kt)("p",null,'In order to import the http-client into your application a new entry for the client is added to the tsconfig.base.json "paths"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"paths": {\n      "@<workspace-name>/http-client": [\n        "libs/http-client/src/index.ts"\n      ]\n    }\n'))))}m.isMDXComponent=!0}}]);