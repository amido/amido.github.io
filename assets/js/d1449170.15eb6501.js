"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4882,4422,8689],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{Z:function(){return a},b:function(){return n}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return l}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=void 0===e?{}:e,r=t.baseUrl,i=void 0===r?"/":r,l=t.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,l=i.forcePrependBaseUrl,o=void 0!==l&&l,p=i.absolute,u=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+s:s}(l,i,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},613:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(7294),a=r(2004),i="playerSection_9Es-",l="playerWrapper_yguh",o="player_P6CU";var p=function(e){var t=e.url;return n.createElement("div",{className:i},n.createElement("div",{className:l},n.createElement(a.Z,{className:o,url:t,controls:!0,width:"100%",height:"100%",config:{}})))}},3602:function(e,t,r){r.r(t);var n=r(7294);t.default=function(e){var t=e.next,r=e.prev;return n.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(r){var n=document.querySelector("div.pagination-nav__item>a");n&&n.style&&(n.style.display="none")}})),n.createElement("div",null)}},4544:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(4996),o=(r(3602),r(613)),p=["components"],u={id:"pipeline_ssr",title:"SSR Application - Azure DevOps Pipeline",sidebar_label:"Pipeline",hide_title:!1,hide_table_of_contents:!1,description:"SSR Application - Azure DevOps Pipeline",keywords:["rest","api","ssr","application","azure","pipeline","side","rendering","server","server side rendering"]},s=void 0,c={unversionedId:"workloads/azure/frontend-archived/SSR/pipeline_ssr",id:"workloads/azure/frontend-archived/SSR/pipeline_ssr",isDocsHomePage:!1,title:"SSR Application - Azure DevOps Pipeline",description:"SSR Application - Azure DevOps Pipeline",source:"@site/docs/workloads/azure/frontend-archived/SSR/pipeline_ssr.md",sourceDirName:"workloads/azure/frontend-archived/SSR",slug:"/workloads/azure/frontend-archived/SSR/pipeline_ssr",permalink:"/docs/workloads/azure/frontend-archived/SSR/pipeline_ssr",tags:[],version:"current",frontMatter:{id:"pipeline_ssr",title:"SSR Application - Azure DevOps Pipeline",sidebar_label:"Pipeline",hide_title:!1,hide_table_of_contents:!1,description:"SSR Application - Azure DevOps Pipeline",keywords:["rest","api","ssr","application","azure","pipeline","side","rendering","server","server side rendering"]}},d=[{value:"Pipeline Diagram",id:"pipeline-diagram",children:[],level:2},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",children:[{value:"Variable group",id:"variable-group",children:[],level:3},{value:"Update pipeline template placeholders",id:"update-pipeline-template-placeholders",children:[],level:3},{value:"Create the pipeline",id:"create-the-pipeline",children:[],level:3}],level:2}],m={toc:d},f="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The pipeline will automate provisioning and updating the server-side rendering infrastructure and application in Azure."),(0,i.kt)("p",null,"Where possible, we are creating reusable steps (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-pipeline-templates"},"stacks-pipeline-templates"),") that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more."),(0,i.kt)("h2",{id:"pipeline-diagram"},"Pipeline Diagram"),(0,i.kt)("img",{alt:"SSR Application - Azure DevOps Pipeline",src:(0,l.Z)("img/azure_ssr_azure_devops_pipeline.png")}),(0,i.kt)("h2",{id:"setting-up-azure-devops"},"Setting up Azure DevOps"),(0,i.kt)(o.default,{url:"https://vimeo.com/486755365",mdxType:"ResponsivePlayer"}),(0,i.kt)("h3",{id:"variable-group"},"Variable group"),(0,i.kt)("p",null,"A variable group will need creating for storing application variables to be used throughout the pipeline. Instructions for creating a variable group can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group"},"here"),". Give the variable group a name and description and make sure the ",(0,i.kt)("strong",{parentName:"p"},"Allow access to all pipelines")," option is checked."),(0,i.kt)("p",null,"Add the following variables:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required for"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MENU_API_URL"),(0,i.kt)("td",{parentName:"tr",align:null},"Application Backend"),(0,i.kt)("td",{parentName:"tr",align:null},"Output of a Stacks backend workload")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN"),(0,i.kt)("td",{parentName:"tr",align:null},"Application CMS"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"/docs/workloads/azure/frontend-archived/SSR/contentful_integration"},"Contentful"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NEXT_PUBLIC_CONTENTFUL_SPACE_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Application CMS"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"/docs/workloads/azure/frontend-archived/SSR/contentful_integration"},"Contentful"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SONAR_ORGANIZATION"),(0,i.kt)("td",{parentName:"tr",align:null},"Static Code Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://sonarcloud.io/"},"sonarcloud"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SONAR_PROJECT_KEY"),(0,i.kt)("td",{parentName:"tr",align:null},"Static Code Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://sonarcloud.io/"},"sonarcloud"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SONAR_PROJECT_NAME"),(0,i.kt)("td",{parentName:"tr",align:null},"Static Code Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://sonarcloud.io/"},"sonarcloud"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SONAR_TOKEN"),(0,i.kt)("td",{parentName:"tr",align:null},"Static Code Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"from ",(0,i.kt)("a",{parentName:"td",href:"https://sonarcloud.io/"},"sonarcloud"))))),(0,i.kt)("img",{alt:"Azure SSR Variable Group",src:(0,l.Z)("img/azure_ssr_variable_group.png")}),(0,i.kt)("h3",{id:"update-pipeline-template-placeholders"},"Update pipeline template placeholders"),(0,i.kt)("p",null,"Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file ",(0,i.kt)("inlineCode",{parentName:"p"},"build/azDevops/azure/app-pipeline.yml"),". The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"%REPLACE_ME_FOR"),". We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository."),(0,i.kt)("h3",{id:"create-the-pipeline"},"Create the pipeline"),(0,i.kt)("p",null,"Follow the steps below to create the pipeline and trigger the initial run."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the pipelines section of Azure DevOps, select ",(0,i.kt)("strong",{parentName:"li"},"New Pipeline"),"."),(0,i.kt)("li",{parentName:"ol"},"Select your repository."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Existing Azure Pipelines YAML files")," option and enter the path ",(0,i.kt)("inlineCode",{parentName:"li"},"build/azDevops/azure/app-pipeline.yml")),(0,i.kt)("li",{parentName:"ol"},"Click run and wait for the pipeline to complete.")))}h.isMDXComponent=!0}}]);