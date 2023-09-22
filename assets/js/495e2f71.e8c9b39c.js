"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1387],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,h=c["".concat(l,".").concat(d)]||c[d]||g[d]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),i=n(6010),r={tabItem:"tabItem_Ymn6"};function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(7462),i=n(7294),r=n(6010),s=n(2466),o=n(6550),l=n(1980),u=n(7392),p=n(12);function c(e){return function(e){var t,n;return null!=(t=null==(n=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function g(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,o.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,i.useCallback)((function(e){if(s){var t=new URLSearchParams(r.location.search);t.set(s,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[s,r])]}function m(e){var t,n,a,r,s=e.defaultValue,o=e.queryString,l=void 0!==o&&o,u=e.groupId,c=g(e),m=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:c})})),f=m[0],v=m[1],y=h({queryString:l,groupId:u}),w=y[0],b=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],r=n[1],[a,(0,i.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=k[0],x=k[1],_=function(){var e=null!=w?w:N;return d({value:e,tabValues:c})?e:null}();return(0,i.useLayoutEffect)((function(){_&&v(_)}),[_]),{selectedValue:f,selectValue:(0,i.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),b(e),x(e)}),[b,x,c]),tabValues:c}}var f=n(2389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,n=e.block,o=e.selectedValue,l=e.selectValue,u=e.tabValues,p=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),l(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var a,i=p.indexOf(e.currentTarget)+1;n=null!=(a=p[i])?a:p[0];break;case"ArrowLeft":var r,s=p.indexOf(e.currentTarget)-1;n=null!=(r=p[s])?r:p[p.length-1]}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,s=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:g},s,{className:(0,r.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=r.find((function(e){return e.props.value===a}));return s?(0,i.cloneElement)(s,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function b(e){var t=m(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},i.createElement(y,(0,a.Z)({},e,t)),i.createElement(w,(0,a.Z)({},e,t)))}function k(e){var t=(0,f.Z)();return i.createElement(b,(0,a.Z)({key:String(t)},e))}},4006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=n(4866),o=n(5162),l=["components"],u={id:"playwright_visual_testing",title:"Visual Regression Testing with Playwright",sidebar_label:"Playwright with Visual Comparisons",description:"Visual regression testing with Playwrights visual comparison API!",keywords:["NX","axe","tests","testing","playwright","visual","regression","applitools","eyes"]},p=void 0,c={unversionedId:"testing/testing_in_nx/playwright_visual_testing",id:"testing/testing_in_nx/playwright_visual_testing",title:"Visual Regression Testing with Playwright",description:"Visual regression testing with Playwrights visual comparison API!",source:"@site/docs/testing/testing_in_nx/playwright_visual_testing.md",sourceDirName:"testing/testing_in_nx",slug:"/testing/testing_in_nx/playwright_visual_testing",permalink:"/docs/testing/testing_in_nx/playwright_visual_testing",draft:!1,tags:[],version:"current",frontMatter:{id:"playwright_visual_testing",title:"Visual Regression Testing with Playwright",sidebar_label:"Playwright with Visual Comparisons",description:"Visual regression testing with Playwrights visual comparison API!",keywords:["NX","axe","tests","testing","playwright","visual","regression","applitools","eyes"]},sidebar:"docs",previous:{title:"Accessibility Testing",permalink:"/docs/testing/testing_in_nx/playwright_accessibility_testing"},next:{title:"Playwright with Applitools Eyes",permalink:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes"}},g={},d=[{value:"Playwright visual comparisons",id:"playwright-visual-comparisons",level:2},{value:"CI strategy for visual comparison",id:"ci-strategy-for-visual-comparison",level:3},{value:"Snapshot configuration",id:"snapshot-configuration",level:3},{value:"Sample tests",id:"sample-tests",level:3},{value:"Running your visual regression tests",id:"running-your-visual-regression-tests",level:2},{value:"Locally",id:"locally",level:3},{value:"CI",id:"ci",level:3},{value:"Viewing your test results",id:"viewing-your-test-results",level:2},{value:"Updating your baseline images",id:"updating-your-baseline-images",level:2}],h={toc:d},m="wrapper";function f(e){var t=e.components,u=(0,i.Z)(e,l);return(0,r.kt)(m,(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Performing visual regression testing with Playwright ensures that the visual elements of your application are functioning correctly and are consistent across different browsers, devices, and screen sizes. By catching visual bugs early on in the development process, visual regression testing helps to prevent costly and time-consuming rework, and ensures that the end user has a consistent and polished experience."),(0,r.kt)("p",null,"With Playwright this can be achieved natively through it's visual comparisons api. This is a great first step to capitalise on the benefits of visual regression testing, however, we highly recommend using a cloud based provider such as Applitools eyes. Using Applitools eyes grants multiple benefits over the native capability of playwright such as automated baseline management, greater browser/device support, rich reporting and analytics and easier collaboration. "),(0,r.kt)("h2",{id:"playwright-visual-comparisons"},"Playwright visual comparisons"),(0,r.kt)("p",null,"Scaffolding your project with a native configuration for visual regression testing will generate a sample set of tests and update your project configuration."),(0,r.kt)("h3",{id:"ci-strategy-for-visual-comparison"},"CI strategy for visual comparison"),(0,r.kt)("p",null,"When working with visual comparisons using playwright and your own CI system there are a number of challenges:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Users may have different browsers and dependency versions installed locally when capturing images, leading to pixel variance during image comparison. "),(0,r.kt)("li",{parentName:"ol"},"Images captured on different operating systems can lead to pixel variance"),(0,r.kt)("li",{parentName:"ol"},"Images captured on different CPU architecture can lead to pixel variance")),(0,r.kt)("p",null,"One possible solution to this is to utilise the ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/docker"},"Playwright Docker")," container, however, through extensive testing we still found significant differences when comparing images captured on docker containers for alternative architecture. "),(0,r.kt)("p",null,"Our strategy is to have the CI as the one and only 'source of truth', this means that any visual comparisons will be skipped locally, consequently, no baseline images will be captured on any local systems. See the ",(0,r.kt)("a",{parentName:"p",href:"#updating-your-baseline-images"},"Updating your baseline images")," section to understand how we capture baseline images in the CI."),(0,r.kt)("h3",{id:"snapshot-configuration"},"Snapshot configuration"),(0,r.kt)("p",null,"As part of native visual comparisons with playwright the following recommended configuration is added into the projects config file during scaffolding:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="playwright.config.base.ts"',title:'"playwright.config.base.ts"'},"\n  /* Visual regression config */\n  updateSnapshots: 'missing',\n  ignoreSnapshots: !process.env.CI,\n  expect: {\n    toHaveScreenshot: {\n      maxDiffPixelRatio: 0.05,\n      threshold: 0.2,\n      animations: 'disabled',\n    },\n    toMatchSnapshot: {\n      maxDiffPixelRatio: 0.05,\n      threshold: 0.2,\n    },\n  }\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"updateSnapshots",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Whether to update expected snapshots with the actual results produced by the test run."),(0,r.kt)("li",{parentName:"ul"},"Value: ",(0,r.kt)("strong",{parentName:"li"},"'missing'")," - Missing snapshots are created, for example when authoring a new test and running it for the first time."))),(0,r.kt)("li",{parentName:"ul"},"ignoreSnapshots",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Whether to skip snapshot expectations, such as expect(value).toMatchSnapshot() and await expect(page).toHaveScreenshot().."),(0,r.kt)("li",{parentName:"ul"},"Value: ",(0,r.kt)("strong",{parentName:"li"},"!process.env.CI")," - Any snapshot checks are skipped unless the test is being ran within the CI. "))),(0,r.kt)("li",{parentName:"ul"},"toHaveScreenshot/toMatchSnapshot::maxDiffPixelRatio",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: an acceptable ratio of pixels that are different to the total amount of pixels, between 0 and 1."),(0,r.kt)("li",{parentName:"ul"},"Value: ",(0,r.kt)("strong",{parentName:"li"},"0.05")," - Any images with > 0.05% pixel variance will be flagged."))),(0,r.kt)("li",{parentName:"ul"},"toHaveScreenshot/toMatchSnapshot::threshold",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: an acceptable perceived colour difference in the YIQ colour space between the same pixel in compared images, between zero (strict) and one (lax)."),(0,r.kt)("li",{parentName:"ul"},"Value: ",(0,r.kt)("strong",{parentName:"li"},"0.2")," - Any pixel with > 20% variance will be flagged"))),(0,r.kt)("li",{parentName:"ul"},"toHaveScreenshot::animations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: whether to enable or disable CSS animations, CSS transitions and Web Animations"),(0,r.kt)("li",{parentName:"ul"},"Value: ",(0,r.kt)("strong",{parentName:"li"},"disabled")," - finite animations are fast-forwarded to completion and infinite animations are cancelled to initial state.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Visual comparisons can be configured in many ways, for further details check out ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1"},"the docs!"),".")),(0,r.kt)("h3",{id:"sample-tests"},"Sample tests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="playwright-visual-regression.spec.ts"',title:'"playwright-visual-regression.spec.ts"'},"\nimport { test, expect } from '@playwright/test';\n\ntest.describe('Native @visual-regression', () => {\n  test.beforeEach(async ({ page }) => {\n    // Wait for network and body to be visible to ensure app is loaded\n    await page.goto('/', { waitUntil: 'networkidle' });\n    await page.waitForSelector('body', { state: 'visible' });\n  });\n\n  test('main page to have no visual regressions', async ({ page }) => {\n    const screenshot = await page.screenshot({ fullPage: true });\n    await expect(screenshot).toMatchSnapshot('main-page.png');\n  });\n\n  test('Expanded information blocks have no visual regressions', async ({\n    page,\n  }) => {\n    // eslint-disable-next-line no-restricted-syntax\n    for (const information of await page\n      .locator('#commands >> details')\n      .elementHandles()) {\n      /* eslint-disable no-await-in-loop */\n      await information.click();\n    }\n    await expect(page.locator('#commands')).toHaveScreenshot('info-blocks.png');\n  });\n});\n\n")),(0,r.kt)("p",null,"The sample contains two tests, showcasing playwrights ability to perform full page comparisons, or target specific areas of the web page.\nUpon first run of the test(s) Playwright will capture a baseline image, the name will vary depending on whether a value is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"toHaveScreenshot()"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"toMatchScreenshot()")," methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: auto-generated name consisting of ",(0,r.kt)("inlineCode",{parentName:"li"},"desribe block name"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"test case name"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"browser"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"operating system"),".png"),(0,r.kt)("li",{parentName:"ul"},"Defined: user specified name resulting in ",(0,r.kt)("inlineCode",{parentName:"li"},"user defined name"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"browser"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"operating system"),".png")),(0,r.kt)("p",null,"As indicated by the below folder structure, a ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright-visual-regression.spec.ts-snapshots")," folder will be generated for the ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright-visual-regression.spec.ts")," file to house all associated baseline images. Using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#project-based-configuration"},"project based configuration")," multiple screenshots will be captured for each device, in this example capturing the snapshots on windows results in each image being appended with ",(0,r.kt)("em",{parentName:"p"},"'win32'")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output from running the playwright-visual-regression.spec.ts example"',title:'"Output',from:!0,running:!0,the:!0,"playwright-visual-regression.spec.ts":!0,'example"':!0},".\n\u251c\u2500\u2500 playwright-visual-regression.spec.ts-snapshots/\n\u2502   \u251c\u2500\u2500 main-page-expanded-blocks-chromium-win32.png\n\u2502   \u251c\u2500\u2500 main-page-expanded-blocks-firefox-win32.png\n\u2502   \u251c\u2500\u2500 main-page-expanded-blocks-Mobile-Chrome-win32.png\n\u2502   \u251c\u2500\u2500 main-page-expanded-blocks-Mobile-Safari-win32.png\n\u2502   \u251c\u2500\u2500 main-page-expanded-blocks-webkit-win32.png\n\u2502   \u251c\u2500\u2500 Native-visual-regression-main-page-to-have-no-visual-regressions-1-chromium-win32.png\n\u2502   \u251c\u2500\u2500 Native-visual-regression-main-page-to-have-no-visual-regressions-1-firefox-win32.png\n\u2502   \u251c\u2500\u2500 Native-visual-regression-main-page-to-have-no-visual-regressions-1-Mobile-Chrome-win32.png\n\u2502   \u251c\u2500\u2500 Native-visual-regression-main-page-to-have-no-visual-regressions-1-Mobile-Safari-win32.png\n\u2502   \u2514\u2500\u2500 Native-visual-regression-main-page-to-have-no-visual-regressions-1-webkit-win32.png\n\u2514\u2500\u2500 playwright-visual-regression.spec.ts\n")),(0,r.kt)("h2",{id:"running-your-visual-regression-tests"},"Running your visual regression tests"),(0,r.kt)("h3",{id:"locally"},"Locally"),(0,r.kt)("p",null,"Playwright visual tests must be tagged with ",(0,r.kt)("strong",{parentName:"p"},"@visual-regression")," which enables us to target them through ",(0,r.kt)("strong",{parentName:"p"},"grep")," as seen in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#run-specific-tests"},"'Run specific tests'")," example"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"grouped",label:"Grouped",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"//multiple tests grouped in a describe block\ntest.describe('Example test group @visual-regression', () => {\n           \n   test('visual test 1', async ({ page }) => {\n       //test code\n   });\n\n   test('visual test 2', async ({ page }) => {\n       //test code\n   });\n}\n"))),(0,r.kt)(o.Z,{value:"individual",label:"Individual",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('Example visual test @visual-regression', async ({ page }) => {\n   //test code\n});\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Tests using playwright visual comparisons ",(0,r.kt)("strong",{parentName:"p"},"MUST")," be tagged with ",(0,r.kt)("strong",{parentName:"p"},"@visual-regression")," in order for the 'update snapshots' pipeline to pick up these tests.")),(0,r.kt)("h3",{id:"ci"},"CI"),(0,r.kt)("p",null,"Using the preconfigured pipelines your playwright tests will be ran automatically as part of the deployment process."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#output-in-ci"},"CI docs")," for more information")),(0,r.kt)("h2",{id:"viewing-your-test-results"},"Viewing your test results"),(0,r.kt)("p",null,"Further to the explanation given in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#running-your-playwright-tests"},"'Testing with Playwright'")," page, visual regression test results can also be found in the console output post execution.\nHowever, to see the differences in images you should look within the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"test-results"))," folder, for each failed visual comparison test 3 screenshots will be saved, the original, the expected and the difference. Viewing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"diff.png"))," file will highlight the visual difference between the actual snapshot and the expected one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="visual differences location"',title:'"visual',differences:!0,'location"':!0},".\n\u2514\u2500\u2500 test-results/\n    \u2514\u2500\u2500 src-example-chromium/\n        \u251c\u2500\u2500 example-1-actual.png\n        \u251c\u2500\u2500 example-1-diff.png\n        \u2514\u2500\u2500 example-1-expected.png\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#viewing-your-test-results"},"HTML reporter")," to easily see the differences between snapshots which do not match their baseline images!")),(0,r.kt)("h2",{id:"updating-your-baseline-images"},"Updating your baseline images"),(0,r.kt)("p",null,"When the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting_started/playwright/ensono-stacks-playwright#ensono-stacksplaywrightvisual-regression-deployment"},"@ensono-stacks/playwright:visual-regression-deployment")," generator is executed an ",(0,r.kt)("strong",{parentName:"p"},"azuredevops-updatesnapshots.yaml")," pipeline is added to your ",(0,r.kt)("strong",{parentName:"p"},"build/azDevOps")," directory. "),(0,r.kt)("p",null,"In any pull requests where you have visual regression tests to capture images for, or if you want to update baseline images, the following comment can be added to the pull request. This will automatically trigger the updatesnapshots pipeline, running through all tests tagged with ",(0,r.kt)("strong",{parentName:"p"},"@visual-regression")," and capturing/recapturing their baseline images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/azp run <pipeline-name>\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"azuredevops-updatesnapshots.yaml")," pipeline must be added as a new pipeline to azure")),(0,r.kt)("p",null,"Following this, the build for the PR will be automatically restarted, using the newly captured baseline images for comparison."),(0,r.kt)("admonition",{title:"Make sure you have enabled triggers for the update snapshots pipeline",type:"info"},(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Enable the updatesnapshots pipeline")),(0,r.kt)("div",null,(0,r.kt)("p",null,"In order for the pipeline to be automatically triggered through comments to your pull requests, please enable triggers"),(0,r.kt)("p",null,"1. Click the options menu and select 'Triggers'"),(0,r.kt)("p",{parentName:"admonition"},"  ",(0,r.kt)("img",{alt:"Trigger menu",src:n(5551).Z,width:"1754",height:"329"})),"  ",(0,r.kt)("p",null,"2. Under the pull request validation section ensure the following values are selected"),(0,r.kt)("p",{parentName:"admonition"},"  ",(0,r.kt)("img",{alt:"Trigger setup",src:n(5336).Z,width:"1741",height:"877"})),"  "))))}f.isMDXComponent=!0},5336:function(e,t,n){t.Z=n.p+"assets/images/azure-pipeline-trigger-setup-75ca20900bfc4e71a8b830b89b87abd3.png"},5551:function(e,t,n){t.Z=n.p+"assets/images/azure-pipeline-triggers-f8a39e98b406b043478e0d9d0593553e.png"}}]);