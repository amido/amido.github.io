"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6225],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),f=n,k=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8260:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"data_processing",title:"Data Processing Workloads",sidebar_label:"Data Processing Workloads",hide_title:!1,hide_table_of_contents:!1,description:"Data Processing Workloads",keywords:["silver","adf","etl","databricks"]},l=void 0,d={unversionedId:"workloads/azure/data/etl_pipelines/data_processing",id:"workloads/azure/data/etl_pipelines/data_processing",title:"Data Processing Workloads",description:"Data Processing Workloads",source:"@site/docs/workloads/azure/data/etl_pipelines/data_processing.md",sourceDirName:"workloads/azure/data/etl_pipelines",slug:"/workloads/azure/data/etl_pipelines/data_processing",permalink:"/docs/workloads/azure/data/etl_pipelines/data_processing",draft:!1,tags:[],version:"current",frontMatter:{id:"data_processing",title:"Data Processing Workloads",sidebar_label:"Data Processing Workloads",hide_title:!1,hide_table_of_contents:!1,description:"Data Processing Workloads",keywords:["silver","adf","etl","databricks"]},sidebar:"docs",previous:{title:"Data Ingest Workloads",permalink:"/docs/workloads/azure/data/etl_pipelines/ingest_data_azure"},next:{title:"Data Quality",permalink:"/docs/workloads/azure/data/etl_pipelines/data_quality_azure"}},p={},c=[{value:"Silver processing",id:"silver-processing",level:2},{value:"Data processing pipeline overview",id:"data-processing-pipeline-overview",level:2},{value:"Data Factory pipeline design",id:"data-factory-pipeline-design",level:3}],u={toc:c},f="wrapper";function k(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)(f,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Data processing workloads in Ensono Stacks are jobs which:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Take data in the data lake as input (this can be various formats e.g. CSV, Parquet, JSON, Delta)."),(0,i.kt)("li",{parentName:"ol"},"Perform some form of data transformation / cleansing / modelling / aggregation over the data."),(0,i.kt)("li",{parentName:"ol"},"Output the into the data lake into a structured ",(0,i.kt)("a",{parentName:"li",href:"https://delta.io/"},"Delta Lake")," format.")),(0,i.kt)("p",null,"While ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/ingest_data_azure"},"data ingest workloads")," in Ensono Stacks utilise Azure Data Factory's inbuilt connectors and Copy activity, data processing workloads are based upon running Apache Spark / Python jobs on Databricks. These workloads may be used for various levels of data transformation and preparation within the data lake. Within the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/etl_intro_data_azure#medallion-architecture"},"medallion architecture")," these will include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bronze to Silver"),(0,i.kt)("li",{parentName:"ul"},"Silver to Gold")),(0,i.kt)("p",null,"Similar to ingest workloads, data processing workloads can optionally include a ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/data_quality_azure"},"Data Quality validations")," step. Depending on your requirements, you can generate a workload with or without a Data Quality step."),(0,i.kt)("p",null,"The Ensono Stacks data platform contains the following example data processing workloads:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Ensono/stacks-azure-data/tree/main/de_workloads/data_processing/silver_movies_example"},"silver_movies_example"),": Performs Bronze to Silver layer data processing over the ",(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/example_data_source"},"example dataset"),".")),(0,i.kt)("h2",{id:"silver-processing"},"Silver processing"),(0,i.kt)("p",null,"The transformation from Bronze to Silver is crucial for filtering out the noise from raw data. It ensures that analysts\nand data scientists work with a consistent, clean, and dependable dataset that can be trusted for downstream analytics."),(0,i.kt)("p",null,"As data moves to the Silver layer, it undergoes a series of transformations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Conformance"),": At this stage, inconsistencies in data representation are ironed out. For instance, disparate date\nformats, value representations, or units from different data sources are standardized to a common format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cleansing"),": Data errors, missing values, or duplicates, are identified and rectified. This ensures that downstream\nanalytics are based on clean and reliable data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enrichment"),": Data from various sources might be combined or enriched with additional information to provide a more\nholistic dataset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Structuring"),": While the Bronze layer often holds semi-structured or unstructured data, the Silver layer typically\nstructures this data into a more query-friendly format, enabling efficient data analysis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data Quality Checks"),": This stage ensures that the data conforms to predefined quality standards, making sure it's\nreliable and accurate.")),(0,i.kt)("h2",{id:"data-processing-pipeline-overview"},"Data processing pipeline overview"),(0,i.kt)("p",null,"Within Stacks, processing activities are performed using Python PySpark jobs. These jobs are orchestrated by pipelines in Data Factory, and executed in Databricks. Using PySpark jobs - as opposed to notebooks - gives full control over the processing activities (for example ensuring thorough ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/testing_data_azure"},"test coverage")," and quality control)."),(0,i.kt)("p",null,"The diagram below gives an example of a data processing data pipeline in Data Factory."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ADF_SilverPipelineDesign.png",src:a(9423).Z,width:"2776",height:"1151"})),(0,i.kt)("p",null,"The Python PySpark script executed as part of a data workload is kept inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"spark_jobs")," directory for the workload. This job will utilise the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/pysparkle"},"Pysparkle library"),", which provides a wealth of reusable utilities to assist with data transformations and loading data from/into to the data lake."),(0,i.kt)("h3",{id:"data-factory-pipeline-design"},"Data Factory pipeline design"),(0,i.kt)("p",null,"Within Data Factory, the processing pipelines are kept within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Process")," folder:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ADF_SilverPipelinesList.png",src:a(5854).Z,width:"283",height:"243"})),(0,i.kt)("p",null,"In Data Factory a standard data processing pipeline is as simple as this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ADF_Silver.png",src:a(3075).Z,width:"789",height:"567"})),(0,i.kt)("p",null,"It contains just one step - Python Databricks, configured to run a ",(0,i.kt)("inlineCode",{parentName:"p"},"silver.py")," script, which gets deployed to DBFS\n(",(0,i.kt)("inlineCode",{parentName:"p"},"dbfs:/FileStore/scripts/silver/silver.py"),"). The Datastacks / PySparkle package and library is deployed to DBFS, and made available to the cluster."))}k.isMDXComponent=!0},9423:function(e,t,a){t.Z=a.p+"assets/images/ADF_SilverPipelineDesign-e3fed23d2347cffafe54a62acf36bd3d.png"},5854:function(e,t,a){t.Z=a.p+"assets/images/ADF_SilverPipelinesList-ad113e315740f36f95fedaf0df540032.png"},3075:function(e,t,a){t.Z=a.p+"assets/images/ADF_silver-ed448a6a5a99d4709d2c4c6f2bb1394d.png"}}]);