"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8778],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8065:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"processing_pipeline_deployment_azure",title:"Data Processing Pipeline Deployment",sidebar_label:"8. Data Processing Pipeline Deployment",hide_title:!1,hide_table_of_contents:!1,description:"Data processing pipelines development & deployment",keywords:["datastacks","data","python","etl","cli","azure","template"]},l=void 0,p={unversionedId:"workloads/azure/data/getting_started/processing_pipeline_deployment_azure",id:"workloads/azure/data/getting_started/processing_pipeline_deployment_azure",title:"Data Processing Pipeline Deployment",description:"Data processing pipelines development & deployment",source:"@site/docs/workloads/azure/data/getting_started/processing_pipeline_deployment_azure.md",sourceDirName:"workloads/azure/data/getting_started",slug:"/workloads/azure/data/getting_started/processing_pipeline_deployment_azure",permalink:"/docs/workloads/azure/data/getting_started/processing_pipeline_deployment_azure",draft:!1,tags:[],version:"current",frontMatter:{id:"processing_pipeline_deployment_azure",title:"Data Processing Pipeline Deployment",sidebar_label:"8. Data Processing Pipeline Deployment",hide_title:!1,hide_table_of_contents:!1,description:"Data processing pipelines development & deployment",keywords:["datastacks","data","python","etl","cli","azure","template"]},sidebar:"docs",previous:{title:"7. Data Ingest Pipeline Deployment",permalink:"/docs/workloads/azure/data/getting_started/ingest_pipeline_deployment_azure"},next:{title:"Security",permalink:"/docs/workloads/azure/data/security_data_azure"}},d={},u=[{value:"Background",id:"background",level:2},{value:"Step 1: Create feature branch",id:"step-1-create-feature-branch",level:2},{value:"Step 2: Prepare the Datastacks config file",id:"step-2-prepare-the-datastacks-config-file",level:2},{value:"Step 3: Generate project artifacts using Datastacks",id:"step-3-generate-project-artifacts-using-datastacks",level:2},{value:"Step 4: Update PySpark job",id:"step-4-update-pyspark-job",level:2},{value:"Step 5: Update tests",id:"step-5-update-tests",level:2},{value:"Unit tests",id:"unit-tests",level:3},{value:"End-to-end tests",id:"end-to-end-tests",level:3},{value:"Step 6: Deploy new workload in non-production environment",id:"step-6-deploy-new-workload-in-non-production-environment",level:2},{value:"Step 7: Review deployed resources",id:"step-7-review-deployed-resources",level:2},{value:"Step 8: Deploy new workload in further environments",id:"step-8-deploy-new-workload-in-further-environments",level:2}],c={toc:u},m="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section provides an overview of generating a new ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/data_processing"},"data processing pipeline")," workload and deploying it into a Ensono Stacks Data Platform, using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/datastacks"},"Datastacks CLI"),"."),(0,o.kt)("p",null,"This guide assumes the following are in place:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/core_data_platform_deployment_azure"},"deployed Ensono Stacks data platform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"},"Development environment set up")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure"},"Deployed shared resources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/datastacks_deployment_azure"},"Deployed Datastacks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/ingest_pipeline_deployment_azure"},"Data ingested into the bronze layer of the data lake"))),(0,o.kt)("p",null,"This process will deploy the following resources into the project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure Data Factory Pipeline resource (defined in Terraform / ARM)"),(0,o.kt)("li",{parentName:"ul"},"Boilerplated script for performing data processing activities using PySpark (Python)."),(0,o.kt)("li",{parentName:"ul"},"Azure DevOps CI/CD pipeline (YAML)"),(0,o.kt)("li",{parentName:"ul"},"(optional) Spark job and config file for data quality tests (Python)"),(0,o.kt)("li",{parentName:"ul"},"Template unit tests (Python)")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Once you have landed data in the bronze layer of your data lake (e.g. through a ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/ingest_pipeline_deployment_azure"},"data ingest pipeline"),"), you will typically need to perform additional processing activities upon the data in order make it usable for your needs - for example loading it into the silver and gold layers of your data lake. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/data_processing"},"data processing workloads"),"."),(0,o.kt)("p",null,"In the steps below, we will generate a data processing pipeline that uses data ingested in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/ingest_pipeline_deployment_azure"},"previous task")," as its source, and loads it into the silver layer. The same approach can be used to load data from silver to gold."),(0,o.kt)("h2",{id:"step-1-create-feature-branch"},"Step 1: Create feature branch"),(0,o.kt)("p",null,"Before creating a new workload using Datastacks, open the project locally and create a new branch for the workload being created, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b feat/my-new-processing-pipeline\n")),(0,o.kt)("h2",{id:"step-2-prepare-the-datastacks-config-file"},"Step 2: Prepare the Datastacks config file"),(0,o.kt)("p",null,"Datastacks requires a YAML config file for generating a new ingest workload - see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/datastacks#configuration"},"Datastacks configuration")," for further details."),(0,o.kt)("p",null,"Create a new YAML file and populate the values relevant to your new processing pipeline. The example below will generate resources for a processing workload named ",(0,o.kt)("strong",{parentName:"p"},"my_processing_pipeline"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'#######################\n# Required parameters #\n#######################\n\n# Pipeline configurations\npipeline_name: my_processing_pipeline\n\n# Description of pipeline shown in Azure Data Factory\npipeline_description: "My example processing pipeline."\n\n# Azure DevOps configurations\nado_variable_groups_nonprod:\n  - amido-stacks-de-pipeline-nonprod\n  - stacks-credentials-nonprod-kv\n\nado_variable_groups_prod:\n  - amido-stacks-de-pipeline-prod\n  - stacks-credentials-prod-kv\n\n')),(0,o.kt)("h2",{id:"step-3-generate-project-artifacts-using-datastacks"},"Step 3: Generate project artifacts using Datastacks"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/datastacks#using-the-datastacks-cli"},"Datastacks CLI")," to generate the artifacts for the new workload, using the prepared config file (replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"path_to_config_file/my_config.yaml")," with the appropriate path).:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Activate virtual environment\npoetry shell\n\n# Generate resources for an ingest pipeline (without Data Quality steps)\ndatastacks generate processing --config="path_to_config_file/my_config.yaml"\n\n# Generate resources for an ingest pipeline (with added Data Quality steps)\ndatastacks generate processing --config="path_to_config_file/my_config.yaml" --data-quality\n')),(0,o.kt)("p",null,"This will add new project artifacts for the workload under ",(0,o.kt)("inlineCode",{parentName:"p"},"de_workloads/processing/my_processing_pipeline"),", based on the ingest workload templates. Review the resources that have been generated."),(0,o.kt)("h2",{id:"step-4-update-pyspark-job"},"Step 4: Update PySpark job"),(0,o.kt)("p",null,"Within the generated workload, the following Python file will be used as the entrypoint for the processing job: ",(0,o.kt)("inlineCode",{parentName:"p"},"spark_jobs/process.py"),". The file is structured ready to start adding any logic specific to your particular workload using Python / Spark. It will reference ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/pyspark_utilities"},"PySpark utilities")," to simplify interactions with the data platform and standard transformation activities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import logging\nfrom datastacks.logger import setup_logger\n\nWORKLOAD_NAME = "processing_demo"\n\nlogger_library = "datastacks"\nlogger = logging.getLogger(logger_library)\n\n\ndef etl_main() -> None:\n    """Execute data processing and transformation jobs."""\n    logger.info(f"Running {WORKLOAD_NAME} processing...")\n\n    #######################\n    # Add processing here #\n    #######################\n\n    logger.info(f"Finished: {WORKLOAD_NAME} processing.")\n\n\nif __name__ == "__main__":\n    setup_logger(name=logger_library, log_level=logging.INFO)\n    etl_main()\n\n')),(0,o.kt)("p",null,"For the getting started guide, we have provided a simple example - you may extend this based on whatever your workload requires. Copy the following additional imports and constants into the top of your ",(0,o.kt)("inlineCode",{parentName:"p"},"process.py")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from datastacks.pyspark.etl import (\n    TableTransformation,\n    get_spark_session_for_adls,\n    read_latest_rundate_data,\n    transform_and_save_as_delta,\n)\nfrom datastacks.pyspark.pyspark_utils import rename_columns_to_snake_case\n\nBRONZE_CONTAINER = "raw"\nSILVER_CONTAINER = "staging"\nSOURCE_DATA_TYPE = "parquet"\nINPUT_PATH_PATTERN = "Ingest_AzureSql_Example/movies.{table_name}/v1/full/"\nOUTPUT_PATH_PATTERN = "movies/{table_name}"\n')),(0,o.kt)("p",null,"Next, copy the following within the ",(0,o.kt)("inlineCode",{parentName:"p"},"etl_main")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"process.py"),", replacing the ",(0,o.kt)("inlineCode",{parentName:"p"}," # Add processing here #")," comment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    spark = get_spark_session_for_adls(WORKLOAD_NAME)\n\n    tables = [\n        TableTransformation("links", rename_columns_to_snake_case),\n        TableTransformation("ratings_small", rename_columns_to_snake_case)\n    ]\n\n    for table in tables:\n        df = read_latest_rundate_data(\n            spark,\n            BRONZE_CONTAINER,\n            INPUT_PATH_PATTERN.format(table_name=table.table_name),\n            datasource_type=SOURCE_DATA_TYPE,\n        )\n\n        output_path = OUTPUT_PATH_PATTERN.format(table_name=table.table_name)\n\n        transform_and_save_as_delta(spark, df, table.transformation_function, SILVER_CONTAINER, output_path)\n')),(0,o.kt)("p",null,"The processing script is now prepared to perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initiate a Spark session and connectivity to the data lake."),(0,o.kt)("li",{parentName:"ol"},"Define ",(0,o.kt)("inlineCode",{parentName:"li"},"TableTransformation")," objects - these consist of an input table name, and a transformation function. Here we are specifying two tables - ",(0,o.kt)("em",{parentName:"li"},"links")," and ",(0,o.kt)("em",{parentName:"li"},"ratings_small")," - and assigning the ",(0,o.kt)("inlineCode",{parentName:"li"},"rename_columns_to_snake_case")," function as their transformation function."),(0,o.kt)("li",{parentName:"ol"},"For each of the tables:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Read the latest data from the bronze layer into a Spark DataFrame."),(0,o.kt)("li",{parentName:"ol"},"Define an output path for the data in the silver layer."),(0,o.kt)("li",{parentName:"ol"},"Execute the transformation function against the DataFrame."),(0,o.kt)("li",{parentName:"ol"},"Save the transformed DataFrame into the silver layer in Delta format.")))),(0,o.kt)("p",null,"In order to run / debug the code during development, you may wish to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure#optional-pyspark-development-in-databricks"},"Databricks for development"),"."),(0,o.kt)("h2",{id:"step-5-update-tests"},"Step 5: Update tests"),(0,o.kt)("p",null,"The workload is created with placeholders for adding unit and end-to-end tests - see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/testing_data_azure"},"testing")," for further details."),(0,o.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,o.kt)("p",null,"A placeholder for adding unit tests is located within the workload under ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/unit/test_processing.py"),". The unit tests are intended as a first step to ensure the code is performing as intended and ensure no breaking changes have been introduced. The unit tests will run as part of the deployment pipeline, and can be run locally by developers."),(0,o.kt)("p",null,"Within the same directory a ",(0,o.kt)("inlineCode",{parentName:"p"},"conftest.py")," is provided. This contains a PyTest fixture to enable a local Spark session to be used for running the unit tests in isolation - for examples of this you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ensono/stacks-azure-data/blob/main/de_workloads/processing/silver_movies_example/tests/unit/"},"example silver workload"),"."),(0,o.kt)("p",null,"Add any unit tests you require to ",(0,o.kt)("inlineCode",{parentName:"p"},"test_processing.py")," (although they are not strictly required for the getting started guide). You may also add these tests to the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," command, to easily run them alongside other unit tests in the project."),(0,o.kt)("h3",{id:"end-to-end-tests"},"End-to-end tests"),(0,o.kt)("p",null,"A placeholder directory for end-to-end tests for the workload is provided under ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/unit/test_processing.py"),". These will run as part of the deployment pipeline."),(0,o.kt)("p",null,"End-to-end tests not required to be added for the getting started demo, but would be recommended when developing any production workload."),(0,o.kt)("h2",{id:"step-6-deploy-new-workload-in-non-production-environment"},"Step 6: Deploy new workload in non-production environment"),(0,o.kt)("p",null,"As for ingest workloads, processing workloads contains a YAML file containing a template Azure DevOps CI/CD pipeline, named ",(0,o.kt)("inlineCode",{parentName:"p"},"de-process-ado-pipeline.yaml"),". This should be added as the definition for a new pipeline in Azure DevOps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign-in to your Azure DevOps organization and go to your project."),(0,o.kt)("li",{parentName:"ol"},"Go to Pipelines, and then select New."),(0,o.kt)("li",{parentName:"ol"},"Name the new pipeline to match the name of your new workload, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"de-process-my-processing-pipeline"),"."),(0,o.kt)("li",{parentName:"ol"},"For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"de-process-ado-pipeline.yaml"),") and save."),(0,o.kt)("li",{parentName:"ol"},"The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the ",(0,o.kt)("a",{parentName:"li",href:"#step-2-prepare-the-datastacks-config-file"},"datastacks config file"),". Under each variable group, go to 'Pipeline permissions' and add the new pipeline."),(0,o.kt)("li",{parentName:"ol"},"Run the new pipeline.")),(0,o.kt)("p",null,"Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment and run tests. If successful, the generated resources will now be available in the nonprod Ensono Stacks environment."),(0,o.kt)("h2",{id:"step-7-review-deployed-resources"},"Step 7: Review deployed resources"),(0,o.kt)("p",null,"If successful, the workload's resources will now be deployed into the non-production resource group in Azure - these can be viewed through the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Azure Portal")," or CLI."),(0,o.kt)("p",null,"The Azure Data Factory resources can be viewed through the ",(0,o.kt)("a",{parentName:"p",href:"https://adf.azure.com/"},"Data Factory UI"),". You may also wish to run/debug the newly generated pipeline from here (see ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/data-factory/iterative-development-debugging"},"Microsoft documentation"),")."),(0,o.kt)("p",null,"\u2139\ufe0f Note: The structure of the data platform and Data Factory resources are defined in the project's code repository, and deployed through the Azure DevOps pipelines. Changes to Data Factory resources directly through the UI will lead to them be overwritten when pipelines are next run. If you wish to update Data Factory resources, update the appropriate files within the workload (under the ",(0,o.kt)("inlineCode",{parentName:"p"},"data_factory")," path)."),(0,o.kt)("p",null,"Continue to make any further amendments required to the new workload, re-running the DevOps pipeline as required. If including data quality checks, update the (",(0,o.kt)("inlineCode",{parentName:"p"},"data_quality_config.json"),") file in the repository with details of checks required on the data."),(0,o.kt)("h2",{id:"step-8-deploy-new-workload-in-further-environments"},"Step 8: Deploy new workload in further environments"),(0,o.kt)("p",null,"In the example pipeline templates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open"),(0,o.kt)("li",{parentName:"ul"},"Deployment to the production (prod) environment is triggered on merging to the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," branch, followed by manual approval of the release step.")),(0,o.kt)("p",null,"\u2139\ufe0f It is recommended in any data platform that processes for deploying and releasing across environments should be agreed and documented, ensuring sufficient review and quality assurance of any new workloads. The template CI/CD pipelines provided are based upon two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation."))}g.isMDXComponent=!0}}]);