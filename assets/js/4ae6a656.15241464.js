"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9527],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4222:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,p={unversionedId:"getting_started/rest-client/openapi-client",id:"getting_started/rest-client/openapi-client",isDocsHomePage:!1,title:"openapi-client",description:"@ensono-stacks/rest-client:openapi-client",source:"@site/docs/getting_started/rest-client/openapi-client.md",sourceDirName:"getting_started/rest-client",slug:"/getting_started/rest-client/openapi-client",permalink:"/docs/getting_started/rest-client/openapi-client",tags:[],version:"current",frontMatter:{}},c=[{value:"@ensono-stacks/rest-client:openapi-client",id:"ensono-stacksrest-clientopenapi-client",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],u={toc:c},d="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksrest-clientopenapi-client"},"@ensono-stacks/rest-client:openapi-client"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Generates boilerplate configuration of types, client, stubs and validation using from your openapi schema using Orval."),(0,l.kt)("p",null,"Utilising ",(0,l.kt)("a",{parentName:"p",href:"https://orval.dev/"},"Orval"),", this plugin generates various files based off your openapi schema to enable quick acceleration from definition to implementation."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:openapi-client\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"Library name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--schema"),(0,l.kt)("td",{parentName:"tr",align:null},"The relative path to your openapi schema"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--zod"),(0,l.kt)("td",{parentName:"tr",align:null},"Validation for your openapi schema"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Add tags to the library (used for linting)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Subdirectory inside libs/ where the generated library is placed"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("p",null,"The openapi-client will create a new library within your libs folder for the various files generated:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},"\n\u251c\u2500\u2500 openapi-client\n\u2502   \u251c\u2500\u2500  src\n\u2502   \u2502   \u251c\u2500\u2500  model\n|   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 <libraryName>.msw.ts\n\u2502   \u2502   \u251c\u2500\u2500 <libraryName>.ts\n\u2502   \u2502   \u251c\u2500\u2500 <libraryName>.zod.ts\n\u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 jest.config.ts\n\u2502   \u251c\u2500\u2500 orval.config.js\n\u2502   \u251c\u2500\u2500 orval.zod.config.js\n\u2502   \u251c\u2500\u2500 openapi-schema.(json/yaml)\n\u2502   \u251c\u2500\u2500 project.json\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2514\u2500\u2500 \u2514\u2500\u2500 tsconfig.spec.json\n")),(0,l.kt)("p",null,"Key things to highlight about the generated files are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The generator first creates the orval config files ",(0,l.kt)("inlineCode",{parentName:"li"},"orval.config.js")," ",(0,l.kt)("inlineCode",{parentName:"li"},"orval.zod.config.js")," which are used to set the options for orval to be executed against. These options determine what files to generate and how."),(0,l.kt)("li",{parentName:"ul"},"Once the config files are generated, we execute the Orval generator. The 3 ",(0,l.kt)("inlineCode",{parentName:"li"},"<libraryName>...")," files are created along wih the model folder with its contents. This generation consists of the end result following the openapi definition being converted into code implementation; types, client, stubs and validation.")),(0,l.kt)("p",null,"The relevant dependencies ",(0,l.kt)("inlineCode",{parentName:"p"},"(orval, msw, @faker-js/faker, zod)")," are also installed in order for the generation to take place and to resolve the relevant syntax/prettier errors.")))}m.isMDXComponent=!0}}]);