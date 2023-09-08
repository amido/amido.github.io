"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6707],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3968:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],s={},o=void 0,c={unversionedId:"getting_started/playwright/accessibility",id:"getting_started/playwright/accessibility",isDocsHomePage:!1,title:"accessibility",description:"@ensono-stacks/playwright:accessibility",source:"@site/docs/getting_started/playwright/accessibility.md",sourceDirName:"getting_started/playwright",slug:"/getting_started/playwright/accessibility",permalink:"/docs/getting_started/playwright/accessibility",tags:[],version:"current",frontMatter:{}},p=[{value:"@ensono-stacks/playwright:accessibility",id:"ensono-stacksplaywrightaccessibility",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],u={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ensono-stacksplaywrightaccessibility"},"@ensono-stacks/playwright:accessibility"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Adds axe accessibility tests to your test project"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"accessibility")," generator installs ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"@axe-core/playwright"))," and configures an example accessibility test"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/playwright:accessibility\n")),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,i.kt)("p",null,"The following command line arguments are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--project -p"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the test project to add accessibility tests to"),(0,i.kt)("td",{parentName:"tr",align:null},"string")))),(0,i.kt)("h3",{id:"generator-output"},"Generator Output"),(0,i.kt)("p",null,"Scaffolding accessibility testing will add two dependencies to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"@axe-core/playwright"))," - The accessibility test engine"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/axe-result-pretty-print"},(0,i.kt)("inlineCode",{parentName:"a"},"axe-result-pretty-print"))," - Result formatter")),(0,i.kt)("p",null,"Additionally, an example accessibility test will be generated, showcasing how to utilise both ",(0,i.kt)("em",{parentName:"p"},"axe")," and ",(0,i.kt)("em",{parentName:"p"},"axe-result-pretty-print")," to scan your application for accessibility violations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},".\n\u251c\u2500\u2500 apps\n\u2502   \u251c\u2500\u2500 <app-name>-e2e\n\u2502   \u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 axe-accessibility.spec.ts #Example accessibility test using playwright\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/playwright_accessibility_testing"},(0,i.kt)("inlineCode",{parentName:"a"},"Accessibility Testing"))," documentation for further details!")))))}d.isMDXComponent=!0}}]);