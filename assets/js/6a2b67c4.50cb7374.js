"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6004,9157],{1024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(4848),a=t(8453);const s={},i=void 0,o={id:"getting_started/azure-react/generator-app-insights-web",title:"generator-app-insights-web",description:"@ensono-stacks/azure-react:app-insights-web",source:"@site/docs/getting_started/azure-react/generator-app-insights-web.md",sourceDirName:"getting_started/azure-react",slug:"/getting_started/azure-react/generator-app-insights-web",permalink:"/docs/getting_started/azure-react/generator-app-insights-web",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"@ensono-stacks/azure-react",id:"ensono-stacksazure-react",level:3},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3},{value:"Using Application Insights",id:"using-application-insights",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h3,{id:"ensono-stacksazure-react",children:["@ensono-stacks/azure-react",":app-insights-web"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Installs and configures a ReactJS Library with App Insights."}),(0,r.jsx)(n.p,{children:"This enables the following:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tracking of router changes"}),"\n",(0,r.jsx)(n.li,{children:"React components usage statistics"}),"\n"]}),(0,r.jsxs)(n.p,{children:["This generator will create a new ReactJS Library with ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@microsoft/applicationinsights-react-js",children:"applicationinsights reactjs"})," and ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@microsoft/applicationinsights-web",children:"applicationinsights web"})," npm packages installed and configured for you. This can then be imported an used in an existing ReactJS application."]}),(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nx generate @ensono-stacks/azure-react:app-insights-web\n"})}),(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["App insights requires the connection string environment variable to be set to the value set within Azure. The name of the connection string variable is set in the generator options ",(0,r.jsx)(n.code,{children:"--connectionString"}),". Please see ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-gb/azure/azure-monitor/app/sdk-connection-string?tabs=net",children:"documentation on connection strings"})," for more information"]})}),(0,r.jsx)(n.h3,{id:"command-line-arguments",children:"Command line arguments"}),(0,r.jsx)(n.p,{children:"The following command line arguments are available:"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"--name"}),(0,r.jsx)(n.td,{children:"Library name"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"--connectionString"}),(0,r.jsx)(n.td,{children:"The env variable for the connection string."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"--directory"}),(0,r.jsx)(n.td,{children:"A directory where the lib is placed."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"--importPath"}),(0,r.jsx)(n.td,{children:"What import path would you like to use for the library?."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"--tags"}),(0,r.jsx)(n.td,{children:"Add tags to the library (used for linting)."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Optional"})]})]})]}),(0,r.jsx)(n.h3,{id:"generator-output",children:"Generator Output"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adds an app insights config file"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="/src/app-insights-config.ts"',children:"// eslint-disable-next-line import/no-extraneous-dependencies\nimport {\n  DistributedTracingModes,\n  IConfig,\n} from '@microsoft/applicationinsights-common';\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport type { IConfiguration } from '@microsoft/applicationinsights-core-js';\n\nconst appInsightConfig: IConfiguration & IConfig = {\n  enableAutoRouteTracking: false,\n  enableCorsCorrelation: true,\n  enableRequestHeaderTracking: true,\n  enableResponseHeaderTracking: true,\n  disableFetchTracking: false,\n  distributedTracingMode: DistributedTracingModes.AI_AND_W3C,\n  enableAjaxPerfTracking: true\n};\n\nexport default appInsightConfig;\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adds a telemetry provider"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="/src/telemetry-provider.tsx"',children:"import {\n  ReactPlugin,\n  AppInsightsContext,\n} from '@microsoft/applicationinsights-react-js';\nimport { ApplicationInsights } from '@microsoft/applicationinsights-web';\nimport { FC, ReactNode } from 'react';\n\nimport appInsightConfig from './app-insights-config';\n\nconst reactPlugin = new ReactPlugin();\nconst connectionString = process.env.<%= connectionString %>;\n\nexport const appInsights = new ApplicationInsights({\n  config: {\n    connectionString,\n    ...appInsightConfig,\n    extensions: [reactPlugin],\n  },\n});\n\nif (!appInsights.appInsights.isInitialized()) {\n  appInsights.loadAppInsights();\n}\n\nexport const TelemetryProvider: FC<{ children?: ReactNode }> = ({ children }) => (\n  <AppInsightsContext.Provider value={reactPlugin}>\n    {children}\n  </AppInsightsContext.Provider>\n);\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Installs and adds microsoft applicationinsights packages to package.json"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="/package.json"',children:'  "dependencies": {\n    ...OtherDependencies\n    "@microsoft/applicationinsights-react-js": "3.4.0",\n    "@microsoft/applicationinsights-web": "2.8.9",\n  }\n}\n'})}),(0,r.jsx)(n.h3,{id:"using-application-insights",children:"Using Application Insights"}),(0,r.jsx)(n.p,{children:"To use the Application Insights react hooks within your application please import the generated library and wrap your application in the TelemetryProvider installed by the generator for example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"import NxWelcome from './nx-welcome';\nimport { TelemetryProvider } from 'packages/nameOfGeneratedAppInsightsLibrary/src';\n\nexport function App() {\n    return (\n        <TelemetryProvider>\n            <NxWelcome title=\"welcome title\" />\n            <div />\n        </TelemetryProvider>\n    );\n}\n\nexport default App;\n\n"})}),(0,r.jsxs)(n.p,{children:["From here a ",(0,r.jsx)(n.code,{children:"useAppInsightsContext"})," hook will be available to use anywhere within your ReactJS App. For example"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'import React from "react";\nimport { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";\n\nconst MyComponent = () => {\n    const appInsights = useAppInsightsContext();\n    const metricData = {\n        average: engagementTime,\n        name: "React Component Engaged Time (seconds)",\n        sampleCount: 1\n      };\n    const additionalProperties = { "Component Name": \'MyComponent\' };\n    appInsights.trackMetric(metricData, additionalProperties);\n    \n    return (\n        <h1>My Component</h1>\n    );\n}\nexport default MyComponent;\n'})}),(0,r.jsxs)(n.p,{children:["Full documentation and a getting started guide can be found at ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-gb/azure/azure-monitor/app/javascript-react-plugin",children:"React plug-in for Application Insights JavaScript SDK"})]})]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(4848),a=t(8453),s=t(1024),i=t(1470),o=t(9365);const l={id:"ensono-stacks-azure-react",title:"@ensono-stacks/azure-react",sidebar_label:"@ensono-stacks/azure-react",description:"Configures a ReactJS application for Azure!",keywords:["Nx","monorepo","stacks","ensono","azure-react","generator","executor","appinsights"]},c=void 0,u={id:"getting_started/azure-react/ensono-stacks-azure-react",title:"@ensono-stacks/azure-react",description:"Configures a ReactJS application for Azure!",source:"@site/docs/getting_started/azure-react/plugin-information.md",sourceDirName:"getting_started/azure-react",slug:"/getting_started/azure-react/ensono-stacks-azure-react",permalink:"/docs/getting_started/azure-react/ensono-stacks-azure-react",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ensono-stacks-azure-react",title:"@ensono-stacks/azure-react",sidebar_label:"@ensono-stacks/azure-react",description:"Configures a ReactJS application for Azure!",keywords:["Nx","monorepo","stacks","ensono","azure-react","generator","executor","appinsights"]}},d={},p=[{value:"Setting up @ensono-stacks/azure-react",id:"setting-up-ensono-stacksazure-react",level:2},{value:"Executors and Generators",id:"executors-and-generators",level:2},{value:"Generators",id:"generators",level:3},...s.toc];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Configures your ReactJS application to use various Azure services:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/applicationinsights",children:"App Insights"})}),"\n",(0,r.jsx)(n.li,{children:"...more to come."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-ensono-stacksazure-react",children:"Setting up @ensono-stacks/azure-react"}),"\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsx)(n.code,{children:"@ensono-stacks/azure-react"})," plugin with the following command:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @ensono-stacks/azure-react@latest\n"})})}),(0,r.jsx)(o.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @ensono-stacks/azure-react@latest\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"executors-and-generators",children:"Executors and Generators"}),"\n",(0,r.jsx)(n.p,{children:"To see a list of the plugin capabilities run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nx list @ensono-stacks/azure-react\n"})}),"\n",(0,r.jsx)(n.p,{children:"View additional information about a plugin capability through the following commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nx g @ensono-stacks/azure-react:app-insights-web --help\n"})}),"\n",(0,r.jsx)(n.h3,{id:"generators",children:"Generators"}),"\n",(0,r.jsx)(s.default,{})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(4164),s=t(3104),i=t(6347),o=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,l]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:a}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=null!=c?c:m;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=l.indexOf(e.currentTarget)+1;t=null!=(r=l[n])?r:l[0];break}case"ArrowLeft":{var a;const n=l.indexOf(e.currentTarget)-1;t=null!=(a=l[n])?a:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);