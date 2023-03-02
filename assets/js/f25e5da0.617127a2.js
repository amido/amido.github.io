"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7738],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return l}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,l=i.forcePrependBaseUrl,o=void 0!==l&&l,p=i.absolute,u=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+s:s}(i,r,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2423:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(4996),o=["components"],p={id:"pipeline_netcore",title:".NET Core - Azure DevOps Pipeline",sidebar_label:"Pipeline",description:"How to configure Azure DevOps Pipeline for .NET Core",keywords:[".net core","azure devops","configure","pipeline","setting up","template","build"]},u=void 0,s={unversionedId:"workloads/azure/backend/netcore/pipeline_netcore",id:"workloads/azure/backend/netcore/pipeline_netcore",isDocsHomePage:!1,title:".NET Core - Azure DevOps Pipeline",description:"How to configure Azure DevOps Pipeline for .NET Core",source:"@site/docs/workloads/azure/backend/netcore/pipeline_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/pipeline_netcore",permalink:"/docs/workloads/azure/backend/netcore/pipeline_netcore",tags:[],version:"current",frontMatter:{id:"pipeline_netcore",title:".NET Core - Azure DevOps Pipeline",sidebar_label:"Pipeline",description:"How to configure Azure DevOps Pipeline for .NET Core",keywords:[".net core","azure devops","configure","pipeline","setting up","template","build"]},sidebar:"docs",previous:{title:"Infrastructure",permalink:"/docs/workloads/azure/backend/netcore/infrastructure_netcore"},next:{title:"Logging",permalink:"/docs/workloads/azure/backend/netcore/logging_netcore"}},c=[{value:"Pipeline Diagram",id:"pipeline-diagram",children:[],level:2},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",children:[{value:"Variable group",id:"variable-group",children:[],level:3},{value:"Update pipeline template placeholders",id:"update-pipeline-template-placeholders",children:[],level:3},{value:"Create the pipeline",id:"create-the-pipeline",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The pipeline will automate provisioning and updating the .NET Core REST API with CQRS infrastructure in Azure."),(0,i.kt)("p",null,"Where possible, we are creating reusable steps (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-pipeline-templates"},"stacks-pipeline-templates"),") that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more."),(0,i.kt)("h2",{id:"pipeline-diagram"},"Pipeline Diagram"),(0,i.kt)("img",{alt:".NET Core REST API - Azure DevOps Pipeline",src:(0,l.Z)("img/azure_netcore_azure_devops_pipeline.png")}),(0,i.kt)("h2",{id:"setting-up-azure-devops"},"Setting up Azure DevOps"),(0,i.kt)("h3",{id:"variable-group"},"Variable group"),(0,i.kt)("p",null,"A variable group will need creating for storing variables to be used for testing steps. Instructions for creating a variable group can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group"},"here"),". Give the variable group a name and description and make sure the ",(0,i.kt)("strong",{parentName:"p"},"Allow access to all pipelines")," option is checked."),(0,i.kt)("p",null,"Add the following variables:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required for"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"COSMOSDB_KEY_DEV"),(0,i.kt)("td",{parentName:"tr",align:null},"Integration Test"),(0,i.kt)("td",{parentName:"tr",align:null},"Output from infrastructure deployment. Should be enabled after first pipeline run")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"COSMOSDB_NAME_DEV"),(0,i.kt)("td",{parentName:"tr",align:null},"Integration Test"),(0,i.kt)("td",{parentName:"tr",align:null},"Output from infrastructure deployment. Should be enabled after first pipeline run")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"COSMOSDB_ACCOUNT_URI_DEV"),(0,i.kt)("td",{parentName:"tr",align:null},"Integration Test"),(0,i.kt)("td",{parentName:"tr",align:null},"Output from infrastructure deployment. Should be enabled after first pipeline run")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SONAR_ORGANIZATION"),(0,i.kt)("td",{parentName:"tr",align:null},"Static Code Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://sonarcloud.io/"},"sonarcloud"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SONAR_PROJECT_KEY"),(0,i.kt)("td",{parentName:"tr",align:null},"Static Code Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://sonarcloud.io/"},"sonarcloud"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SONAR_PROJECT_NAME"),(0,i.kt)("td",{parentName:"tr",align:null},"Static Code Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://sonarcloud.io/"},"sonarcloud"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SONAR_TOKEN"),(0,i.kt)("td",{parentName:"tr",align:null},"Static Code Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://sonarcloud.io/"},"sonarcloud"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PACT_BEARER_TOKEN"),(0,i.kt)("td",{parentName:"tr",align:null},"Contract Test"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://docs.pact.io/"},"pact"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PACT_BROKER"),(0,i.kt)("td",{parentName:"tr",align:null},"Contract Test"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://docs.pact.io/"},"pact"))))),(0,i.kt)("img",{alt:"Azure .NET Core Variable Group",src:(0,l.Z)("img/azure_netcore_variable_group.png")}),(0,i.kt)("h3",{id:"update-pipeline-template-placeholders"},"Update pipeline template placeholders"),(0,i.kt)("p",null,"Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file ",(0,i.kt)("inlineCode",{parentName:"p"},"build/azDevops/azure/api-pipeline.yml"),". The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"%REPLACE_ME_FOR"),". We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository."),(0,i.kt)("h3",{id:"create-the-pipeline"},"Create the pipeline"),(0,i.kt)("p",null,"Follow the steps below to create the pipeline and trigger the initial run."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the pipelines section of Azure DevOps, select ",(0,i.kt)("strong",{parentName:"li"},"New Pipeline"),"."),(0,i.kt)("li",{parentName:"ol"},"Select your repository."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Existing Azure Pipelines YAML files")," option and enter the path ",(0,i.kt)("inlineCode",{parentName:"li"},"build/azDevops/azure/api-pipeline.yml")),(0,i.kt)("li",{parentName:"ol"},"Click run and wait for the pipeline to complete."),(0,i.kt)("li",{parentName:"ol"},"Update the API variable group with the Cosmos DB details."),(0,i.kt)("li",{parentName:"ol"},"Enable Integration Tests in ",(0,i.kt)("inlineCode",{parentName:"li"},"build/azDevops/azure/api-pipeline.yml")),(0,i.kt)("li",{parentName:"ol"},"Commit changes to trigger the pipeline again.")))}m.isMDXComponent=!0}}]);