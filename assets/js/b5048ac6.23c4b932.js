"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7313],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=s,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),s=n(7294),i=n(2389),r=n(9443);var o=function(){var e=(0,s.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(9521),p=n(6010),u={tabItem:"tabItem_vU9c"};function c(e){var t,n,a,i=e.lazy,r=e.block,c=e.defaultValue,d=e.values,h=e.groupId,g=e.className,m=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==f&&!y.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=o(),b=w.tabGroupChoices,k=w.setTabGroupChoices,N=(0,s.useState)(f),_=N[0],X=N[1],E=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var A=b[h];null!=A&&A!==_&&y.some((function(e){return e.value===A}))&&X(A)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==_&&(T(t),X(a),null!=h&&k(h,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var s=E.indexOf(e.currentTarget)-1;n=E[s]||E[E.length-1]}null==(t=n)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":r},g)},y.map((function(e){var t=e.value,n=e.label;return s.createElement("li",{role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,className:(0,p.Z)("tabs__item",u.tabItem,{"tabs__item--active":_===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:x,onClick:x},null!=n?n:t)}))),i?(0,s.cloneElement)(m.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function d(e){var t=(0,i.Z)();return s.createElement(c,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8039:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),r=n(6396),o=n(8215),l=["components"],p={id:"playwright_visual_testing_applitools_eyes",title:"Visual Regression Testing with Applitools Eyes",sidebar_label:"Playwright with Applitools Eyes",description:"Visual regression testing with Playwrights and Applitools Eyes",keywords:["NX","axe","tests","testing","playwright","visual","regression","applitools","eyes"]},u=void 0,c={unversionedId:"testing/testing_in_nx/playwright_visual_testing_applitools_eyes",id:"testing/testing_in_nx/playwright_visual_testing_applitools_eyes",isDocsHomePage:!1,title:"Visual Regression Testing with Applitools Eyes",description:"Visual regression testing with Playwrights and Applitools Eyes",source:"@site/docs/testing/testing_in_nx/playwright_visual_testing_applitools.md",sourceDirName:"testing/testing_in_nx",slug:"/testing/testing_in_nx/playwright_visual_testing_applitools_eyes",permalink:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes",tags:[],version:"current",frontMatter:{id:"playwright_visual_testing_applitools_eyes",title:"Visual Regression Testing with Applitools Eyes",sidebar_label:"Playwright with Applitools Eyes",description:"Visual regression testing with Playwrights and Applitools Eyes",keywords:["NX","axe","tests","testing","playwright","visual","regression","applitools","eyes"]},sidebar:"docs",previous:{title:"Playwright with Visual Comparisons",permalink:"/docs/testing/testing_in_nx/playwright_visual_testing"},next:{title:"Testing with cypress",permalink:"/docs/testing/testing_in_nx/testing_with_cypress"}},d=[{value:"Applitools eyes with Playwright",id:"applitools-eyes-with-playwright",children:[{value:"Sample tests",id:"sample-tests",children:[],level:3}],level:2},{value:"Running your visual regression tests",id:"running-your-visual-regression-tests",children:[{value:"Locally",id:"locally",children:[],level:3},{value:"CI",id:"ci",children:[],level:3}],level:2},{value:"Viewing your test results and updating baseline images",id:"viewing-your-test-results-and-updating-baseline-images",children:[],level:2}],h={toc:d},g="wrapper";function m(e){var t=e.components,n=(0,s.Z)(e,l);return(0,i.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Applitools Eyes is a powerful tool that provides a number of benefits over using Playwright's native visual comparison capabilities. Applitools Eyes automatically manages the baseline images for visual tests, making it easy to keep track of changes over time. It also automatically compares screenshots of your website or application, highlighting any differences and making it easy to identify visual bugs. "),(0,i.kt)("p",null,"Applitools Eyes supports a wide range of browsers and devices, so you can test your website or application across a greater range of platforms and ensure that it looks and behaves correctly. Additionally, Applitools Eyes provides detailed reports and analytics that can help you identify trends and patterns in your visual testing results, making it easier to understand and fix issues. With Applitools Eyes, teams can work together and identify issues quickly and efficiently. "),(0,i.kt)("p",null,"Overall, Applitools Eyes is a more powerful and flexible solution for visual testing and monitoring that can help you catch more visual bugs and improve your development process."),(0,i.kt)("h2",{id:"applitools-eyes-with-playwright"},"Applitools eyes with Playwright"),(0,i.kt)("p",null,"When scaffolding your application with Applitools Eyes the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@applitools/eyes-playwright"},"@applitools/eyes-playwright")," plugin will be added to your dependency list, additionally the following updates will be applied to the playwright configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="playwright.config.ts"',title:'"playwright.config.ts"'},"  grepInvert: /.*@visual-regression/,\n  projects: [\n    {\n      name: 'applitools',\n      grep: /.*@visual-regression/,\n      grepInvert: null,\n      retries: 0,\n    },\n    ...\n")),(0,i.kt)("p",null,"As playwright executes each test once per project and the ",(0,i.kt)("em",{parentName:"p"},"playwright.config.ts")," contains multiple project definitions this would result in the visual regression tests being ran multiple times within the Applitools cloud."),(0,i.kt)("p",null,"As browser/device requirements are specified within the eyes ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration()")," object this would result in redundant tests runs, unnecessarily consuming your snapshot allowance. To mitigate this we make use of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"grep"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"grepInvert"))," to isolate Applitools visual regression tests into their own project with unique configuration. "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Tests using Applitools Eyes ",(0,i.kt)("strong",{parentName:"p"},"MUST")," be tagged with ",(0,i.kt)("strong",{parentName:"p"},"@visual-regression")," to avoid duplicate test runs"))),(0,i.kt)("h3",{id:"sample-tests"},"Sample tests"),(0,i.kt)("p",null,"Upon scaffolding your application with Playwright and Applitools eyes a sample test file will also be provided, demonstrating/describing how visual regression tests can be ran on the Applitools Eyes Grid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="applitools-eyes-grid.spec.ts"',title:'"applitools-eyes-grid.spec.ts"'},"import { test } from '@playwright/test';\nimport {\n  BatchInfo,\n  Configuration,\n  VisualGridRunner,\n  BrowserType,\n  DeviceName,\n  ScreenOrientation,\n  Eyes,\n  Target,\n} from '@applitools/eyes-playwright';\n\nexport let Batch: BatchInfo;\nexport let Config: Configuration;\nexport let Runner: VisualGridRunner;\n\n// This method sets up the configuration for running visual tests in the Ultrafast Grid.\n// The configuration is shared by all tests in a test suite, so it belongs in a `beforeAll` method.\n// If you have more than one test class, then you should abstract this configuration to avoid duplication.\ntest.beforeAll(async () => {\n  // Concurrency refers to the number of visual checkpoints Applitools will perform in parallel.\n  // Warning: If you have a free account, then concurrency will be limited to 1.\n  Runner = new VisualGridRunner({ testConcurrency: 5 });\n\n  // Create a new batch for tests.\n  // A batch is the collection of visual checkpoints for a test suite.\n  // Batches are displayed in the dashboard, so use meaningful names.\n  Batch = new BatchInfo({\n    name: 'Example: Playwright TypeScript with the Ultrafast Grid',\n  });\n\n  // Create a configuration for Applitools Eyes.\n  Config = new Configuration();\n\n  // Set the batch for the config.\n  Config.setBatch(Batch);\n\n  // Add desktop browsers with different viewports for cross-browser testing in the Ultrafast Grid.\n  Config.addBrowser(1920, 1080, BrowserType.CHROME);\n  // Config.addBrowser(1366, 768, BrowserType.FIREFOX);\n  // Config.addBrowser(3840, 2160, BrowserType.SAFARI);\n\n  // Add mobile emulation devices with different orientations for cross-browser testing in the Ultrafast Grid.\n  Config.addDeviceEmulation(\n    DeviceName.iPhone_11_Pro_Max,\n    ScreenOrientation.LANDSCAPE\n  );\n  // Config.addDeviceEmulation(DeviceName.Galaxy_S22, ScreenOrientation.PORTRAIT);\n});\n\n// This \"describe\" method contains related test cases with per-test setup and cleanup.\n// In this example, there is only one test.\ntest.describe('Applitools-eyes - ultrafast grid - @visual-regression', () => {\n  let eyes: Eyes;\n\n  // This method sets up each test with its own Applitools Eyes object.\n  test.beforeEach(async ({ page }) => {\n    //Navigate to the base page of the NextJs app\n    await page.goto('/');\n    // Create the Applitools Eyes object connected to the VisualGridRunner and set its configuration.\n    eyes = new Eyes(Runner, Config);\n\n    // Open Eyes to start visual testing.\n    // Each test should open its own Eyes for its own snapshots.\n    // It is a recommended practice to set all four inputs below:\n    await eyes.open(\n      page, // The Playwright page object to \"watch\"\n      'next-js-app', // The name of the app under test\n      test.info().title, // The name of the test case\n      { width: 1920, height: 1080 } // The viewport size for the local browser\n    );\n  });\n\n  // This test performs a simple visual regression test, capturing/comparing a screenshot of the full window.\n  // If the page ever changes, then Applitools will detect the changes and highlight them in the dashboard.\n  test('Check the main page', async () => {\n    // This snapshot uses STRICT match level to verify that the page content matches the baseline image closely enough that the human eye would not see any difference.\n    await eyes.check('Main page', Target.window().fully().strict());\n  });\n\n  test.afterEach(async () => {\n    // Close Eyes to tell the server it should display the results.\n    await eyes.close();\n  });\n});\n\ntest.afterAll(async () => {\n  // Close the batch and report visual differences to the console.\n  // Note that it forces Playwright to wait synchronously for all visual checkpoints to complete.\n  // If any visual regressions are detected, the playwright test will fail\n  const results = await Runner.getAllTestResults();\n  console.log('Visual test results', results);\n});\n")),(0,i.kt)("h2",{id:"running-your-visual-regression-tests"},"Running your visual regression tests"),(0,i.kt)("p",null,"As a prerequisite to running Applitools Eyes tests, the API key must be set. The API key can be found by following ",(0,i.kt)("a",{parentName:"p",href:"https://applitools.com/docs/topics/overview/obtain-api-key.html"},"'How to retrieve your API key'")," guide."),(0,i.kt)("h3",{id:"locally"},"Locally"),(0,i.kt)("p",null,"As mentioned ",(0,i.kt)("a",{parentName:"p",href:"#applitools-eyes-with-playwright"},"above"),", Applitools Eyes tests should be tagged with ",(0,i.kt)("strong",{parentName:"p"},"@visual-regression")," to ensure that we do not accidentally duplicate test runs, this also enables us to target these tests through ",(0,i.kt)("strong",{parentName:"p"},"grep")," as seen in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#run-specific-tests"},"'Run specific tests'")," example."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"grouped",label:"Grouped",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"//multiple tests grouped in a describe block\ntest.describe('Applitools-eyes - ultrafast grid - @visual-regression', () => {   \n   test('visual test 1', async ({ page }) => {\n       //test code\n   });\n\n   test('visual test 2', async ({ page }) => {\n       //test code\n   });\n}\n"))),(0,i.kt)(o.Z,{value:"individual",label:"Individual",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"test('Example applitools eyes test @visual-regression', async ({ page }) => {\n   //test code\n});\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must set your runner key API before running Applitools Eyes tests locally by following ",(0,i.kt)("a",{parentName:"p",href:"https://help.applitools.com/hc/en-us/articles/360006914732-The-runner-key-API-Key-"},"this guide"),".\nIt is recommended to restart your machine to ensure that environment variable changes are registered!"))),(0,i.kt)("h3",{id:"ci"},"CI"),(0,i.kt)("p",null,"Using the preconfigured pipelines your playwright visual comparison tests will be ran automatically as part of the deployment process (As long as the API key has been set as an environment variable in the CI)."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#output-in-ci"},"CI docs")," for more information"))),(0,i.kt)("h2",{id:"viewing-your-test-results-and-updating-baseline-images"},"Viewing your test results and updating baseline images"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#viewing-your-test-results"},"viewing your test results")," for standard tests, Applitools Eyes will also output test results to the console in the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Visual test results TestResultsSummaryData {\n  _summary: {\n    results: [ [Object], [Object] ],\n    passed: 2,\n    unresolved: 0,\n    failed: 0,\n    exceptions: 0,\n    mismatches: 0,\n    missing: 0,\n    matches: 2\n  },\n  _deleteTest: [Function: deleteTest]\n}\n")),(0,i.kt)("p",null,"If any test failures occur you should see the following message, allowing you to review the test failure and either accept or reject the difference(s) by navigating to the provided URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Error: Test 'Check the main page' of 'next-js-app' detected differences! See details at: https://eyes.applitools.com/app/batches/XXXXXXXXXXXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXX?accountId=XXXXXXXXXXXXXXXXXXXXX\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Take a look at '",(0,i.kt)("a",{parentName:"p",href:"https://applitools.com/docs/topics/overview/overview-reviewing-test-results.html"},"Reviewing test results and updating the baseline"),"' for a detailed guide."))))}m.isMDXComponent=!0}}]);