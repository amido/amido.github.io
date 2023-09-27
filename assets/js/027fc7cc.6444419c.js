"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6096],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9281:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"shared_resources_deployment_azure",title:"Shared Resources Deployment",sidebar_label:"4. Shared Resources Deployment",hide_title:!1,hide_table_of_contents:!1,description:"Deployment of common Azure Data Factory resources shared by data pipelines",keywords:["data","infrastructure","adf","cicd"]},l=void 0,p={unversionedId:"workloads/azure/data/getting_started/shared_resources_deployment_azure",id:"workloads/azure/data/getting_started/shared_resources_deployment_azure",title:"Shared Resources Deployment",description:"Deployment of common Azure Data Factory resources shared by data pipelines",source:"@site/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure.md",sourceDirName:"workloads/azure/data/getting_started",slug:"/workloads/azure/data/getting_started/shared_resources_deployment_azure",permalink:"/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure",draft:!1,tags:[],version:"current",frontMatter:{id:"shared_resources_deployment_azure",title:"Shared Resources Deployment",sidebar_label:"4. Shared Resources Deployment",hide_title:!1,hide_table_of_contents:!1,description:"Deployment of common Azure Data Factory resources shared by data pipelines",keywords:["data","infrastructure","adf","cicd"]},sidebar:"docs",previous:{title:"3. Local Development Quickstart",permalink:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"},next:{title:"5. Datastacks Build & Deployment",permalink:"/docs/workloads/azure/data/getting_started/datastacks_deployment_azure"}},d={},u=[{value:"Step 1: Create feature branch",id:"step-1-create-feature-branch",level:2},{value:"Step 2: Add a shared resources pipeline in Azure DevOps",id:"step-2-add-a-shared-resources-pipeline-in-azure-devops",level:2},{value:"Step 3: Deploy shared resources in non-production environment",id:"step-3-deploy-shared-resources-in-non-production-environment",level:2},{value:"Step 4: Deploy shared resources in further environments",id:"step-4-deploy-shared-resources-in-further-environments",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:u},m="wrapper";function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section provides an overview of deploying the shared resources for Ensono Stacks Data Platform."),(0,o.kt)("p",null,"The shared resources include Azure Data Factory resources which are shared across pipelines. These are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linked services",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"ls_ADLS_DataLake")," - Connection to the Data Lake"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"ls_Blob_ConfigStore")," - Connection to the config storage location"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"ls_Databricks_Small")," - Connection to Databricks job cluster (default 2 fixed workers)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"ls_KeyVault")," - Connection to Azure Key Vault"))),(0,o.kt)("li",{parentName:"ul"},"Datasets",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"ds_dp_ConfigStore_Json")," - For reading JSON data from ls_Blob_ConfigStore"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"ds_dp_DataLake_Parquet")," - For writing Parquet data to ls_ADLS_DataLake"))),(0,o.kt)("li",{parentName:"ul"},"Pipelines",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"pipeline_Get_Ingest_Config")," - To retrieve config data for use in a pipeline"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"pipeline_Generate_Ingest_Query")," - To generate a query for ingesting data")))),(0,o.kt)("p",null,"For details of how these resources are used in ingest pipelines, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/ingest_data_azure"},"data ingestion"),"."),(0,o.kt)("p",null,"This guide assumes the following are in place:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/core_data_platform_deployment_azure"},"deployed Ensono Stacks data platform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"},"Development environment set up"))),(0,o.kt)("h2",{id:"step-1-create-feature-branch"},"Step 1: Create feature branch"),(0,o.kt)("p",null,"Open the project locally and create a new feature branch, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b feat/de-shared-pipeline\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"de_build")," folder includes YAML file called ",(0,o.kt)("inlineCode",{parentName:"p"},"job-pipeline-vars")," that contains the variables used in the DE shared resource pipeline. These variables must be updated as per the project requirements."),(0,o.kt)("h2",{id:"step-2-add-a-shared-resources-pipeline-in-azure-devops"},"Step 2: Add a shared resources pipeline in Azure DevOps"),(0,o.kt)("p",null,"The default shared resources for the Ensono Stacks Data Platform are found under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ensono/stacks-azure-data/tree/main/de_workloads/shared_resources"},"de_workloads/shared_resources"),". This directory contains a YAML file ",(0,o.kt)("inlineCode",{parentName:"p"},"de-shared-resources.yml")," containing a template Azure DevOps CI/CD pipeline for building and deploying the shared resources.\nThis YAML file should be added as the definition for a new pipeline in Azure DevOps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign-in to your Azure DevOps organization and go to your project."),(0,o.kt)("li",{parentName:"ol"},"Go to Pipelines, and then select ",(0,o.kt)("strong",{parentName:"li"},"New pipeline"),"."),(0,o.kt)("li",{parentName:"ol"},"Name the new pipeline, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"de-shared-resources"),"."),(0,o.kt)("li",{parentName:"ol"},"For the pipeline definition, specify the YAML file in the project repository feature branch (",(0,o.kt)("inlineCode",{parentName:"li"},"de-shared-resources.yml"),") and save."),(0,o.kt)("li",{parentName:"ol"},"The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YAML. Under each variable group, go to 'Pipeline permissions' and add the pipeline.")),(0,o.kt)("h2",{id:"step-3-deploy-shared-resources-in-non-production-environment"},"Step 3: Deploy shared resources in non-production environment"),(0,o.kt)("p",null,"Run the pipeline configured in Step 2 to commence the build and deployment process."),(0,o.kt)("p",null,"Running this pipeline in Azure DevOps will initiate the deployment of artifacts into the non-production (nonprod) environment. It's important to monitor the progress of this deployment to ensure its success. You can track the progress and status of the deployment within the Pipelines section of Azure DevOps."),(0,o.kt)("p",null,"If successful, the core DE shared resources will now be available in the non-production environment. To view the deployed resources, navigate to the relevant resource group in the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Azure portal"),". The deployed Data Factory resources can be viewed through the ",(0,o.kt)("a",{parentName:"p",href:"https://adf.azure.com/"},"Data Factory UI"),"."),(0,o.kt)("p",null,"\u2139\ufe0f Note: The structure of the data platform and Data Factory resources are defined in the project's code repository, and deployed through the Azure DevOps pipelines. Changes to Data Factory resources directly through the UI will lead to them be overwritten when pipelines are next run. If you wish to update shared Data Factory resources, update the appropriate files under the path ",(0,o.kt)("inlineCode",{parentName:"p"},"de_workloads/shared_resources/data_factory"),"."),(0,o.kt)("h2",{id:"step-4-deploy-shared-resources-in-further-environments"},"Step 4: Deploy shared resources in further environments"),(0,o.kt)("p",null,"By default Ensono Stacks provides a framework for managing the platform across two environments - nonprod and prod.\nThe template CI/CD pipelines provided are based upon these two platform environments, but these may be amended depending upon the specific requirements of your project and organisation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open"),(0,o.kt)("li",{parentName:"ul"},"Deployment to the production (prod) environment is triggered on merging to the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," branch, followed by manual approval of the release step.")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Once the shared resources are deployed you should ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/datastacks_deployment_azure"},"build and deploy the Datastacks library"),"."))}h.isMDXComponent=!0}}]);