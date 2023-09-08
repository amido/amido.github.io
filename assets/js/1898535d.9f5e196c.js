"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6360],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},g="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),g=p(a),m=i,d=g["".concat(o,".").concat(m)]||g[m]||c[m]||r;return a?n.createElement(d,s(s({ref:e},u),{},{components:a})):n.createElement(d,s({ref:e},u))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[g]="string"==typeof t?t:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1761:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],l={},o=void 0,p={unversionedId:"getting_started/playwright/visual-regression",id:"getting_started/playwright/visual-regression",isDocsHomePage:!1,title:"visual-regression",description:"@ensono-stacks/playwright:visual-regression",source:"@site/docs/getting_started/playwright/visual-regression.md",sourceDirName:"getting_started/playwright",slug:"/getting_started/playwright/visual-regression",permalink:"/docs/getting_started/playwright/visual-regression",tags:[],version:"current",frontMatter:{}},u=[{value:"@ensono-stacks/playwright:visual-regression",id:"ensono-stacksplaywrightvisual-regression",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[{value:"Playwright with native visual comparisons",id:"playwright-with-native-visual-comparisons",children:[],level:4},{value:"Playwright with Applitools Eyes",id:"playwright-with-applitools-eyes",children:[],level:4}],level:3}],level:2}],g={toc:u},c="wrapper";function m(t){var e=t.components,a=(0,i.Z)(t,s);return(0,r.kt)(c,(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"ensono-stacksplaywrightvisual-regression"},"@ensono-stacks/playwright:visual-regression"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Adds native or cloud based visual regression to your test suite"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"visual-regression")," generator provides you with the option to scaffold visual regression tests and configuration through a cloud based provider or Playwrights native visual comparison API."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/playwright:visual-regression\n")),(0,r.kt)("p",null,"Upon calling the ",(0,r.kt)("em",{parentName:"p"},"visual-regression")," generator you will be presented with a number of options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What type of visual regression tests would you like to use?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"native: Generate visual regression tests using Playwrights native ",(0,r.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/test-snapshots"},"visual comparison api")),(0,r.kt)("li",{parentName:"ul"},"applitools: Generate visual regression tests using the ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@applitools/eyes-playwright"},(0,r.kt)("inlineCode",{parentName:"a"},"@applitools/eyes-playwright"))," plugin and scaffold an example visual regression test batch")))),(0,r.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,r.kt)("p",null,"The following command line arguments are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--project, -p"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the existing playwright test app to enhance"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--type, -t"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to conduct visual testing"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'[choices: "native", "applitools"]'),(0,r.kt)("td",{parentName:"tr",align:null},"none")))),(0,r.kt)("h3",{id:"generator-output"},"Generator Output"),(0,r.kt)("h4",{id:"playwright-with-native-visual-comparisons"},"Playwright with native visual comparisons"),(0,r.kt)("p",null,"Opting to scaffold ",(0,r.kt)("strong",{parentName:"p"},"native")," visual testing will make a number of amendments to your test projects configuration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../../testing/testing_in_nx/playwright_visual_testing#snapshot-configuration"},"playwright.config.ts snapshot configuration"),": Configuration for your visual tests"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../../testing/testing_in_nx/playwright_visual_testing#sample-tests"},"playwright-visual-regression.spec.ts"),": Sample test showcasing how to perform visual testing using playwrights native ",(0,r.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/test-snapshots"},"visual comparison api"),"."),(0,r.kt)("li",{parentName:"ol"},"project.json: Additional task set up to enable you to run your visual regression tests using the playwright:jammy container")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},".\n\u251c\u2500\u2500 apps\n\u2502   \u251c\u2500\u2500 <app-name>-e2e\n\u2502   \u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 playwright-visual-regression.spec.ts #Example visual test using playwright\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/playwright_visual_testing"},(0,r.kt)("inlineCode",{parentName:"a"},"Playwright with visual comparisons"))," documentation for further details!"))),(0,r.kt)("h4",{id:"playwright-with-applitools-eyes"},"Playwright with Applitools Eyes"),(0,r.kt)("p",null,"Opting to scaffold visual testing with ",(0,r.kt)("strong",{parentName:"p"},"applitools")," will make a number of amendments to your test projects configuration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@applitools/eyes-playwright"},"@applitools/eyes-playwright"),": Dependency added to ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes#applitools-eyes-with-playwright"},"playwright.config.ts project configuration"),": Standalone project configuration to isolate visual tests with Applitools Eyes"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes#sample-tests"},"applitools-eyes-grid.spec.ts"),": Sample test showcasing how to perform visual testing using the Applitools Eyes Grid.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},".\n\u251c\u2500\u2500 apps\n\u2502   \u251c\u2500\u2500 <app-name>-e2e\n\u2502   \u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 applitools-eyes-grid.spec.ts #Example visual test using playwright\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes"},(0,r.kt)("inlineCode",{parentName:"a"},"Playwright with Applitools Eyes"))," documentation for further details!")))))}m.isMDXComponent=!0}}]);