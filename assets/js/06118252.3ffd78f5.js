"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7214],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},741:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"etl_pipelines_deployment_azure",title:"ETL Pipeline Deployment",sidebar_label:"ETL Pipeline Deployment",hide_title:!1,hide_table_of_contents:!1,description:"Data pipelines development & deployment",keywords:["datastacks","data","python","etl","cli","azure","template"]},s=void 0,p={unversionedId:"workloads/azure/data/getting_started/etl_pipelines_deployment_azure",id:"workloads/azure/data/getting_started/etl_pipelines_deployment_azure",isDocsHomePage:!1,title:"ETL Pipeline Deployment",description:"Data pipelines development & deployment",source:"@site/docs/workloads/azure/data/getting_started/etl_pipelines_deployment_azure.md",sourceDirName:"workloads/azure/data/getting_started",slug:"/workloads/azure/data/getting_started/etl_pipelines_deployment_azure",permalink:"/docs/workloads/azure/data/getting_started/etl_pipelines_deployment_azure",tags:[],version:"current",frontMatter:{id:"etl_pipelines_deployment_azure",title:"ETL Pipeline Deployment",sidebar_label:"ETL Pipeline Deployment",hide_title:!1,hide_table_of_contents:!1,description:"Data pipelines development & deployment",keywords:["datastacks","data","python","etl","cli","azure","template"]},sidebar:"docs",previous:{title:"Shared Resources Deployment",permalink:"/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure"},next:{title:"Example Data Source",permalink:"/docs/workloads/azure/data/getting_started/example_data_source"}},d=[{value:"Data source pre-requisites",id:"data-source-pre-requisites",children:[{value:"Azure DevOps variable",id:"azure-devops-variable",children:[],level:3},{value:"Key Vault secret",id:"key-vault-secret",children:[],level:3}],level:2},{value:"Step 1: Create feature branch",id:"step-1-create-feature-branch",children:[],level:2},{value:"Step 2: Prepare the Datastacks config file",id:"step-2-prepare-the-datastacks-config-file",children:[],level:2},{value:"Step 3: Generate project artifacts using Datastacks",id:"step-3-generate-project-artifacts-using-datastacks",children:[],level:2},{value:"Step 4: Update ingest configuration",id:"step-4-update-ingest-configuration",children:[],level:2},{value:"Step 5: Update end-to-end tests",id:"step-5-update-end-to-end-tests",children:[],level:2},{value:"Step 6: Deploy new workload in non-production environment",id:"step-6-deploy-new-workload-in-non-production-environment",children:[],level:2},{value:"Step 7: Deploy new workload in further environments",id:"step-7-deploy-new-workload-in-further-environments",children:[],level:2}],u={toc:d},c="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section provides an overview of generating a new ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/ingest_data_azure"},"ETL ingest pipeline")," workload and deploying it into a Stacks Data Platform, using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/common/data/datastacks"},"Datastacks")," utility.\nThis aligns to the workflow shown in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/architecture/architecture_data_azure#data-engineering-workloads"},"deployment architecture")," section.\nIt assumes all prerequisites are in place, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/core_data_platform_deployment_azure"},"deployed Stacks data platform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure"},"Deployed shared resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"},"Development environment set up")),(0,i.kt)("li",{parentName:"ul"},"A data source to ingest from. The steps below are based on using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/example_data_source"},"Azure SQL example data source"))),(0,i.kt)("p",null,"This process will deploy the following resources into the project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure Data Factory resources (defined in Terraform / ARM)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Linked service"),(0,i.kt)("li",{parentName:"ul"},"Dataset"),(0,i.kt)("li",{parentName:"ul"},"Pipeline"))),(0,i.kt)("li",{parentName:"ul"},"Data ingest config files (JSON)"),(0,i.kt)("li",{parentName:"ul"},"Azure DevOps CI/CD pipeline (YAML)"),(0,i.kt)("li",{parentName:"ul"},"(optional) Spark jobs for data quality tests (Python)"),(0,i.kt)("li",{parentName:"ul"},"Template unit tests (Python)"),(0,i.kt)("li",{parentName:"ul"},"Template end-to-end tests (Python, Behave)")),(0,i.kt)("h2",{id:"data-source-pre-requisites"},"Data source pre-requisites"),(0,i.kt)("p",null,"Details required for connecting to the data source will need to be stored securely (i.e. not in the source code) and to be referenced dynamically by the deployment pipeline. This approach also allows for different versions of the data source to be used in different environments (for example non-prod / prod versions). The examples below require the following details to be set for the Azure SQL sample database in each environment:"),(0,i.kt)("h3",{id:"azure-devops-variable"},"Azure DevOps variable"),(0,i.kt)("p",null,"Azure DevOps variables will be accessed dynamically during deployments so is used for details needed to create the linked service in Data Factory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sql_connection"),": connection string for the database, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"Data Source=amidostacksdeveuwdesql.database.windows.net;Initial Catalog=exampledb;User ID=user;Integrated Security=False;Encrypt=True;Connection Timeout=30;"))),(0,i.kt)("h3",{id:"key-vault-secret"},"Key Vault secret"),(0,i.kt)("p",null,"The password will need to be accessed dynamically by Data Factory on each connection, therefore should be stored in the Key Vault linked to the factory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sql-password"),": password to use with the connection string")),(0,i.kt)("h2",{id:"step-1-create-feature-branch"},"Step 1: Create feature branch"),(0,i.kt)("p",null,"Before creating a new workload using Datastacks, open the project locally and create a new branch for the workload being created, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b feat/my-new-data-pipeline\n")),(0,i.kt)("h2",{id:"step-2-prepare-the-datastacks-config-file"},"Step 2: Prepare the Datastacks config file"),(0,i.kt)("p",null,"Datastacks requires a config file for generating a new ingest workload. This config file should be a yaml file. A sample config file is included in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data/tree/main/de_templates"},"de_templates")," folder."),(0,i.kt)("p",null,"Create a new config file and populate the values relevant to your new ingest pipeline. The example below will create an ingest workload named ",(0,i.kt)("strong",{parentName:"p"},"Ingest_AzureSql_MyNewExample"),", and connect using the data source connection details as specified in ",(0,i.kt)("a",{parentName:"p",href:"#data-source-pre-requisites"},"Data source pre-requisites")," above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# `dataset_name` parameter is used to determine names of the following ADF resources:\n# - pipeline: Ingest_<dataset_name>\n# - dataset: ds_<dataset_name>\n# - linked service: ls_<dataset_name>\ndataset_name: AzureSql_MyNewExample\npipeline_description: "Ingest from demo Azure SQL database using ingest config file."\ndata_source_type: azure_sql\n\nkey_vault_linked_service_name: ls_KeyVault\ndata_source_password_key_vault_secret_name: sql-password\ndata_source_connection_string_variable_name: sql_connection\n\n# Azure DevOps configurations\n\nado_variable_groups_nonprod:\n  - amido-stacks-de-pipeline-nonprod\n  - stacks-credentials-nonprod-kv\n\nado_variable_groups_prod:\n  - amido-stacks-de-pipeline-prod\n  - stacks-credentials-prod-kv\n\n# Datalake containers\n\nbronze_container: raw\nsilver_container: staging\ngold_container: curated\n')),(0,i.kt)("h2",{id:"step-3-generate-project-artifacts-using-datastacks"},"Step 3: Generate project artifacts using Datastacks"),(0,i.kt)("p",null,"Use the Datastacks CLI to generate the artifacts for the new workload, using the prepared config file (replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"path_to_config_file/my_config.yaml")," with the appropriate path). Note, a workload with Data Quality steps requires a data platform with a Databricks workspace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Initiate Datastacks using poetry:\npoetry run datastacks\n\n# Generate resources for an ingest pipeline (without Data Quality steps)\ndatastacks generate ingest --config="path_to_config_file/my_config.yaml"\n\n# Generate resources for an ingest pipeline (with added Data Quality steps)\ndatastacks generate ingest --config="path_to_config_file/my_config.yaml" --data-quality\n')),(0,i.kt)("p",null,"This should add new project artifacts for the workload under ",(0,i.kt)("inlineCode",{parentName:"p"},"de_workloads/ingest/Ingest_AzureSql_MyNewExample"),", based on the ingest workload templates. Review the resources that have been generated."),(0,i.kt)("h2",{id:"step-4-update-ingest-configuration"},"Step 4: Update ingest configuration"),(0,i.kt)("p",null,"Configuration of the data that the workload will ingest from the source is specified in the file in the workload's ",(0,i.kt)("inlineCode",{parentName:"p"},"config/ingest_sources/ingest_config.json")," file - see ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/ingest_data_azure#configuration"},"data ingest configuration")," for further details on this file. For the example data source, update the contents of the file with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data_source_name": "Ingest_AzureSql_MyNewExample",\n    "data_source_type": "azure_sql",\n    "enabled": true,\n    "ingest_entities": [\n        {\n            "version": 1,\n            "display_name": "movies.movies_metadata",\n            "enabled": true,\n            "schema": "movies",\n            "table": "movies_metadata",\n            "columns": "[adult], [belongs_to_collection], [budget], [genres], [homepage], [id], [imdb_id], [original_language], [original_title], [overview], [popularity], [poster_path], [production_companies], [production_countries], [release_date], [revenue], [runtime], [spoken_languages], [status], [tagline], [title], [video], [vote_average], [vote_count]",\n            "load_type": "full",\n            "delta_date_column": null,\n            "delta_upsert_key": null\n        },\n        {\n            "version": 1,\n            "display_name": "movies.ratings_small",\n            "enabled": true,\n            "schema": "movies",\n            "table": "ratings_small",\n            "columns": "[userId], [movieId], [rating], [timestamp]",\n            "load_type": "delta",\n            "delta_date_column": "DATEADD(SECOND,[timestamp],\'1970-01-01\')",\n            "delta_upsert_key": "[userId], [movieId]"\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"step-5-update-end-to-end-tests"},"Step 5: Update end-to-end tests"),(0,i.kt)("p",null,"The end-to-end tests are designed to run the ingest pipeline in a controlled fashion to ensure it functions as expected. Open the test feature file for the workload (",(0,i.kt)("inlineCode",{parentName:"p"},"tests/end_to_end/features/azure_data_ingest.feature"),") and update the parameters to reflect the data entities expected to be ingested. In our example, we will use the entities specified in the config file above, i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'|{"window_start" : "2010-01-01", "window_end": "2010-01-31"}|["movies.keywords", "movies.links", "movies.movies_metadata", "movies.ratings_small"]|\n')),(0,i.kt)("h2",{id:"step-6-deploy-new-workload-in-non-production-environment"},"Step 6: Deploy new workload in non-production environment"),(0,i.kt)("p",null,"The generated workload contains a YAML file containing a template Azure DevOps CI/CD pipeline for the workload, named ",(0,i.kt)("inlineCode",{parentName:"p"},"de-ingest-ado-pipeline.yaml"),". This should be added as the definition for a new pipeline in Azure DevOps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign-in to your Azure DevOps organization and go to your project"),(0,i.kt)("li",{parentName:"ol"},"Go to Pipelines, and then select New pipeline"),(0,i.kt)("li",{parentName:"ol"},"Name the new pipeline to match the name of your new workload, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"de-ingest-azuresql-mynewexample")),(0,i.kt)("li",{parentName:"ol"},"For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"de-ingest-ado-pipeline.yaml"),") and save"),(0,i.kt)("li",{parentName:"ol"},"The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the ",(0,i.kt)("a",{parentName:"li",href:"#step-2-prepare-the-datastacks-config-file"},"datastacks config file"),". Under each variable group, go to 'Pipeline permissions' and add the new pipeline."),(0,i.kt)("li",{parentName:"ol"},"Run the new pipeline")),(0,i.kt)("p",null,"Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment and run tests. If successful, the generated resources will now be available in the nonprod Stacks environment."),(0,i.kt)("p",null,"Continue to make any further amendments required to the new workload, re-running the pipeline as required. If including data quality checks, update the (",(0,i.kt)("inlineCode",{parentName:"p"},"ingest_dq"),") file with details of checks required on the data."),(0,i.kt)("h2",{id:"step-7-deploy-new-workload-in-further-environments"},"Step 7: Deploy new workload in further environments"),(0,i.kt)("p",null,"In the example pipeline templates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open"),(0,i.kt)("li",{parentName:"ul"},"Deployment to the production (prod) environment is triggered on merging to the ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch, followed by manual approval of the release step.")),(0,i.kt)("p",null,"It is recommended in any Stacks data platform that processes for deploying and releasing to further should be agreed and documented, ensuring sufficient review and quality assurance of any new workloads. The template CI/CD pipelines provided are based upon two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation."))}m.isMDXComponent=!0}}]);