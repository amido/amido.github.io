"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8757],{544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(4848),i=n(8453);const a={id:"contract_testing_pact",title:"API Contract Testing With Pact",sidebar_label:"API Contract Testing With Pact",description:"Contract testing with Pact",keywords:["contract testing","pact","consumer","provider","pact stub service","pact broker","example","java","dotnet"]},r=void 0,c={id:"testing/contract_testing_pact",title:"API Contract Testing With Pact",description:"Contract testing with Pact",source:"@site/docs/testing/contract_testing_pact.md",sourceDirName:"testing",slug:"/testing/contract_testing_pact",permalink:"/docs/testing/contract_testing_pact",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"contract_testing_pact",title:"API Contract Testing With Pact",sidebar_label:"API Contract Testing With Pact",description:"Contract testing with Pact",keywords:["contract testing","pact","consumer","provider","pact stub service","pact broker","example","java","dotnet"]},sidebar:"docs",previous:{title:"Static Code Analysis",permalink:"/docs/testing/testing_static_analysis"},next:{title:"Automated Accessibility Testing",permalink:"/docs/testing/accessibility_testing"}},o={},l=[{value:"Consumer-Driven contract testing with Pact",id:"consumer-driven-contract-testing-with-pact",level:2},{value:"<code>[Utils](./utils)</code>",id:"utilsutils",level:3},{value:"Pact stub service",id:"pact-stub-service",level:3},{value:"&#39;Can I Deploy&#39;",id:"can-i-deploy",level:3},{value:"Pact working example",id:"pact-working-example",level:3},{value:"Tests",id:"tests",level:4},{value:"Running &quot;PACT&quot; for Java Application",id:"running-pact-for-java-application",level:3}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"consumer-driven-contract-testing-with-pact",children:"Consumer-Driven contract testing with Pact"}),"\n",(0,s.jsx)(t.p,{children:"Consumer-Driven Contract (CDC) Testing is a pattern that allows a consumer (i.e:\na client) and a provider (i.e. an API provider) to communicate using an agreed\ncontract (a pact)."}),"\n",(0,s.jsx)(t.p,{children:"The following documentation is an overview of the Pact implementation as part of the templated SSR web app."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"beforeAll"})," and ",(0,s.jsx)(t.code,{children:"afterAll"})," hooks in Jest is not before all tests but\nbefore each file."]})}),"\n",(0,s.jsx)(t.h3,{id:"utilsutils",children:(0,s.jsx)(t.code,{children:"[Utils](./utils)"})}),"\n",(0,s.jsx)(t.p,{children:"These are reusable components that can be used for any Javascript consumer setup with pact-js."}),"\n",(0,s.jsxs)(t.p,{children:["We are using Jest to wrap pact-js to create the interactions and\ngenerate the Pacts for the web app as a consumer. Following the examples on\n",(0,s.jsx)(t.a,{href:"https://github.com/pact-foundation/pact-js",children:"pact-js"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["There is full documentation for how contract testing works available on the\n",(0,s.jsx)(t.a,{href:"https://docs.pact.io/how_pact_works",children:"Pact website"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["A global 'provider' variable is set up in the ",(0,s.jsx)(t.code,{children:"[pactSetup.ts](./utils/pactSetup.ts)"}),"\nfile. Then the ",(0,s.jsx)(t.code,{children:"[pactTestWrapper.ts](./utils/pactTestWrapper.ts)"})," ensures each test\nfile will have the provider setup for them."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"pactFileWriteMode"})," option been set to ",(0,s.jsx)(t.code,{children:"update"})," in the provider that the\npacts append to. Please see\n",(0,s.jsx)(t.a,{href:"https://docs.pact.io/implementation_guides/ruby/configuration#pactfile_write_mode",children:"pactFileWriteMode"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Export the Consumer and Provider names when running locally, or define in Azure Pipelines Library"',children:"export PACT_CONSUMER= \\\nexport PACT_PROVIDER=\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Generate and verify pacts against mock"',children:"npm run test:pact\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Due to the afterAll hooks in Jest not invoking after all tests, but before each\nfile, there is a ",(0,s.jsx)(t.code,{children:"[pactPublish](./utils/pactPublish.ts)"})," script to publish the\npacts to the configured broker."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Export broker credentials for running locally, or define in Azure Pipelines Library"',children:"export PACT_BROKER= \\\nexport PACT_BEARER_TOKEN= \\\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Publish the pacts to the configured broker"',children:"npm run test:pact-publish\n"})}),"\n",(0,s.jsx)(t.h3,{id:"pact-stub-service",children:"Pact stub service"}),"\n",(0,s.jsx)(t.p,{children:"Pact contracts are easily turned into locally running API stubs. They are great\nfor use as a simple service to run integration tests against. This ensures that you can test your application without\nhitting the actual endpoint, and ensures the same response every time, without\nduplicating mock definitions."}),"\n",(0,s.jsx)(t.p,{children:"If gives the consumer confidence that if the contract tests are passing with the\nprovider, then the mocks should suffice to test parts of their application\nagainst."}),"\n",(0,s.jsx)(t.p,{children:"No more updating stub responses that go out of date. Hooray!"}),"\n",(0,s.jsxs)(t.p,{children:["The Pact files (.json) are generated when the Pact tests are run\n(",(0,s.jsx)(t.code,{children:"npm run tests:pact"}),"), and are published to the broker on succeeding. To get the latest pact file to generate the stub service from, you can either:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Run the tests, which will output the Pact .json files to\n",(0,s.jsx)(t.code,{children:"[**tests**/pacts](./__tests__/pacts)"})]}),"\n",(0,s.jsxs)(t.li,{children:["Pull down the latest passing contracts from the broker\n(",(0,s.jsx)(t.code,{children:"https://PACT_BROKER/pacts/provider/PROVIDER/consumer/CONSUMER/latest"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Once the files are sourced, it's as simple as starting the stub service either\nfrom the npm script in CI, or by calling the\n",(0,s.jsx)(t.code,{children:"[pactStubServer.ts](./pact/packStubServer.ts)"})," from your test."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="To start the Pact stub server"',children:"npm run test:pact-start-stub\n"})}),"\n",(0,s.jsx)(t.p,{children:"To test the server:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="To test that the service is running and returning expected responses"',children:'curl -v localhost:8389/v1/menu/e98583ad-0feb-4e48-9d4f-b20b09cb2633 -H "Accept: application/json"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Please remember to always stop your server once done testing."}),"\n",(0,s.jsx)(t.h3,{id:"can-i-deploy",children:"'Can I Deploy'"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.pact.io/pact_broker/can_i_deploy",children:"Can I Deploy"})," tool ensures you are safe to deploy your application. Before deploying to a new environment, you need to know if the version is compatible with the provider version. Instead of checking the broker, we can poll the broker and check programmatically with the latest versions."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Run can I deploy using the pact-js SDK"',children:"npm run test:pact-can-i-deploy-ci\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The above command is called in the pipeline"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Run can I deploy using the pact CLI"',children:"npm run test:pact-can-i-deploy-cli\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Example output:"}),"\nThis demonstrates that the consumer is safe to deploy, and will return exit code 0 (this means yes!)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"INFO: Asking broker at https://amido-stacks.pact.dius.com.au if it is possible to deploy\n"})}),"\n",(0,s.jsx)(t.h3,{id:"pact-working-example",children:"Pact working example"}),"\n",(0,s.jsx)(t.p,{children:"We have included a Pact test which will deploy to a PactFlow broker, and verify against the MenuAPI .NET API. This is to ensure that there is an example working test that can be used as a reference."}),"\n",(0,s.jsx)(t.p,{children:"Example ENV_VARS:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"export PACT_BEARER_TOKEN=\nexport PACT_BROKER=https://amido-stacks.pact.dius.com.au\nexport PACT_CONSUMER=GenericMenuConsumer\nexport PACT_PROVIDER=MenuAPI\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Maintainers and contributors may obtain the ",(0,s.jsx)(t.code,{children:"PACT_BEARER_TOKEN"})," if they request access to the PactFlow instance. Else, this will be run in the Azure DevOps Pipeline."]}),"\n",(0,s.jsx)(t.h4,{id:"tests",children:"Tests"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"[get-menu-by-id.test.pact.ts](./get-menu-by-id.test.pact.ts)"})," is an example test. This calls the ",(0,s.jsx)(t.code,{children:"[menuServive](./mocks/menuService.ts)"})," Menu API when running locally."]}),"\n",(0,s.jsxs)(t.p,{children:["When the tests pass, the contract will be written to ",(0,s.jsx)(t.code,{children:"[pacts](./pacts/genericmenuconsumer-menuapi.json)"}),", following the naming convention: ",(0,s.jsx)(t.code,{children:"<PACT_CONSUMER>-<PACT_PROVIDER>"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Some good practices:\n\u2705 Use Pact Matchers to ensure we account for state change, e.g. no hardcoded values for menus in the database, see ",(0,s.jsx)(t.a,{href:"https://docs.pact.io/getting_started/matching",children:"Pact Matchers Documentation"})," for more information.\n\u2705 Ensure that the provider state has been configured by the Provider"]}),"\n",(0,s.jsxs)(t.p,{children:["It's important to get the ",(0,s.jsx)(t.code,{children:"PACT_CONSUMER"})," and ",(0,s.jsx)(t.code,{children:"PACT_PROVIDER"})," names correct, as these form the key for verify."]}),"\n",(0,s.jsx)(t.p,{children:"\u26a0\ufe0f /pacts: these are checked in for reference only. Please do not change the outputted .json files. They are created on successful test runs by Pact. These will be published to the broker upon successful run in the pipeline, with the corresponding version tags."}),"\n",(0,s.jsx)(t.h3,{id:"running-pact-for-java-application",children:'Running "PACT" for Java Application'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Prerequisite:"}),"\nPlease provide the Pact_Broker_URL and Pact_Broker_Token to the provider's pom"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"    <pactBrokerUrl>Pact_Broker_URL</pactBrokerUrl>\n    <pactBrokerToken>Pact_Broker_Token</pactBrokerToken>\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Steps:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"- Consumer: Creating the contract\n  Run the 'GenericMenuConsumer.java' class from the following path: api-tests/src/test/java/com/xxENSONOxx/xxSTACKSxx/api/pact/GenericMenuConsumer.java\n\n  Note: this step can be skipped in case the pact file already exists in .pact/pacts directory.\n- Execute mvn pact:publish from 'api-tests' directory to publish the consumer pact to broker.\n- Execute mvn pact:verify from the provider (java directory).\n- Execute mvn pact:publish from 'java' directory to publish this pact to broker.\n- Execute mvn pact:can-i-deploy -Dpacticipant=YOUR_CONSUMER_NAME -DpacticipantVersion=CONSUMER_VERSION -Dto=ENV_TO_DEPLOY from 'java' directory including this variables: to check if the versions of consumer and provider are compatible.\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);