"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6451],{65:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=t(4848),n=t(8453);const o={id:"visual_analysis",title:"Automated UI Visual Testing With Applitools",sidebar_label:"Automated UI Visual Testing",description:"How to run tests with Applitools",keywords:["cypress","tests","testing","applitools","visual analysis"]},l=void 0,a={id:"testing/visual_analysis",title:"Automated UI Visual Testing With Applitools",description:"How to run tests with Applitools",source:"@site/docs/testing/applitools_automated_ui_visual_testing.md",sourceDirName:"testing",slug:"/testing/visual_analysis",permalink:"/docs/testing/visual_analysis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"visual_analysis",title:"Automated UI Visual Testing With Applitools",sidebar_label:"Automated UI Visual Testing",description:"How to run tests with Applitools",keywords:["cypress","tests","testing","applitools","visual analysis"]},sidebar:"docs",previous:{title:"Static Code Analysis",permalink:"/docs/testing/testing_static_analysis"},next:{title:"API Contract Testing With Pact",permalink:"/docs/testing/contract_testing_pact"}},r={},p=[{value:"Visual Regression Testing with Applitools Eyes",id:"visual-regression-testing-with-applitools-eyes",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Running Applitools in Cypress",id:"running-applitools-in-cypress",level:3},{value:"How to run the tests locally",id:"how-to-run-the-tests-locally",level:3},{value:"Where Applitools tests should be located",id:"where-applitools-tests-should-be-located",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.admonition,{type:"danger",children:(0,i.jsxs)(s.p,{children:["We recommend and already have support within ",(0,i.jsx)(s.a,{href:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes",children:"Playwright for Applitools"}),"! Cypress support will also be moving to NX in the near future!"]})}),"\n",(0,i.jsx)(s.p,{children:"Visual Regression testing or Visual testing in software is a quality assurance activity of verifying if the visual aspects of the application\u2019s user interface seem appropriate to the user. It is also known as Visual Validation Testing."}),"\n",(0,i.jsxs)(s.p,{children:["Visual Regression testing can be implemented using a variety of tools and languages and is a fast way of checking defects of front end applications. For more information on Visual Regression testing you can look at this article ",(0,i.jsx)(s.a,{href:"https://www.softwaretestinghelp.com/visual-validation-testing/",children:"Here"})]}),"\n",(0,i.jsx)(s.h2,{id:"visual-regression-testing-with-applitools-eyes",children:"Visual Regression Testing with Applitools Eyes"}),"\n",(0,i.jsx)(s.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsxs)(s.p,{children:["An Applitools eyes account - ",(0,i.jsx)(s.a,{href:"https://applitools.com/",children:"Applitools"})]}),"\n",(0,i.jsx)(s.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(s.p,{children:["We are using ",(0,i.jsx)(s.a,{href:"https://applitools.com/",children:"Applitools"})," with Cypress for visual testing. For Ensono Stacks, we have configured the framework to use the free tier, which gives:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"1 user (normally the pipeline)"}),"\n",(0,i.jsx)(s.li,{children:"100 checkpoints per month"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Eyes-Cypress ships with official type declarations for TypeScript. This allows you to add eyes commands to your TypeScript tests."}),"\n",(0,i.jsxs)(s.p,{children:["The configuration file has been added to the ",(0,i.jsx)(s.code,{children:"[tsconfig.cypress.json](./tsconfig.cypress.json)"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"running-applitools-in-cypress",children:"Running Applitools in Cypress"}),"\n",(0,i.jsxs)(s.p,{children:["In order run Cypress with Applitools, you will need an ",(0,i.jsx)(s.a,{href:"https://applitools.com/",children:"Applitools"})," account. Once signed up (there is a free tier), the API key can be used to create a connection with Applitools."]}),"\n",(0,i.jsxs)(s.p,{children:["Please follow the nvm ",(0,i.jsx)(s.a,{href:"https://applitools.com/tutorials/cypress.html",children:"Cypress Tutorial"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"`export APPLITOOLS_API_KEY=KEY_VALUE`\n"})}),"\n",(0,i.jsx)(s.h3,{id:"how-to-run-the-tests-locally",children:"How to run the tests locally"}),"\n",(0,i.jsxs)(s.p,{children:["To spin up the server locally, running Cypress headless, use:\n",(0,i.jsx)(s.code,{children:"npm run test:cypress:eyes"}),". This is the same for running in CI pipelines."]}),"\n",(0,i.jsx)(s.h3,{id:"where-applitools-tests-should-be-located",children:"Where Applitools tests should be located"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"*.test.eyes.cy.ts"})," tests are located with the page compositions (a composition is several components that may come together to form a page)."]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>a});var i=t(6540);const n={},o=i.createContext(n);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);