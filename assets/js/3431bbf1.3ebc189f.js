"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8275],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return y}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,y=u["".concat(l,".").concat(k)]||u[k]||d[k]||i;return a?r.createElement(y,o(o({ref:t},c),{},{components:a})):r.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4172:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"pysparkle_quickstart",title:"PySparkle",sidebar_label:"Quickstart",hide_title:!1,hide_table_of_contents:!1,description:"PySparkle library overview",keywords:["pysparkle","spark","pyspark","python","etl"]},l=void 0,p={unversionedId:"workloads/common/data/pysparkle/pysparkle_quickstart",id:"workloads/common/data/pysparkle/pysparkle_quickstart",isDocsHomePage:!1,title:"PySparkle",description:"PySparkle library overview",source:"@site/docs/workloads/common/data/pysparkle/pysparkle_quickstart.md",sourceDirName:"workloads/common/data/pysparkle",slug:"/workloads/common/data/pysparkle/pysparkle_quickstart",permalink:"/docs/workloads/common/data/pysparkle/pysparkle_quickstart",tags:[],version:"current",frontMatter:{id:"pysparkle_quickstart",title:"PySparkle",sidebar_label:"Quickstart",hide_title:!1,hide_table_of_contents:!1,description:"PySparkle library overview",keywords:["pysparkle","spark","pyspark","python","etl"]},sidebar:"docs",previous:{title:"Data Quality",permalink:"/docs/workloads/azure/data/components/etl_pipelines/data_quality_azure"},next:{title:"Data Quality",permalink:"/docs/workloads/common/data/pysparkle/pysparkle_data_quality"}},c=[{value:"Key components",id:"key-components",children:[],level:2},{value:"PySparkle Usage",id:"pysparkle-usage",children:[{value:"Using CLI",id:"using-cli",children:[],level:3},{value:"Using an entrypoint script",id:"using-an-entrypoint-script",children:[],level:3}],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Local execution",id:"local-execution",children:[],level:2},{value:"Azure Data Factory setup",id:"azure-data-factory-setup",children:[],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data/tree/main/pysparkle"},"PySparkle")," is a Python library\nbuilt to streamline data processing workflows with Apache Spark."),(0,i.kt)("p",null,"As an integral component of the Stacks Data Platform, PySparkle is our example of data transformation\nin action. It's designed to showcase the capabilities of our platform. The application operates\non ",(0,i.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset"},"The Movies Dataset")," available\non Kaggle, which contains metadata and ratings for 45,000 movies released on or before July 2017."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Movies Dataset")," contains a number of CSV files and includes values of different types,\nincluding nested datatypes and arrays, which give us enough complexity for transformations."),(0,i.kt)("h2",{id:"key-components"},"Key components"),(0,i.kt)("p",null,"The naming convention for the data pipelines originates in Databricks' Medallion Architecture, which\nemphasises structured data transformation layers. The key components of PySparkle include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Silver processing"),": This represents the 'Bronze to Silver' layer transformations. It accepts\nraw data (CSV files) as an input and converts it into a more structured delta format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gold processing"),": This embodies the 'Silver to Gold' layer transformations. It performs\nadvanced transformations, creating optimised, aggregated data sets for downstream consumption."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data Quality"),": PySparkle performs data quality checks according to user-provided\nconfigurations, ensuring the reliability and accuracy of the data.")),(0,i.kt)("p",null,"We have chosen Azure Data Lake Storage (ADLS Gen2) as both the source and destination systems for\nour data processing due to its scalability, security features, and seamless integration with our\ndata processing workflows."),(0,i.kt)("h2",{id:"pysparkle-usage"},"PySparkle Usage"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f PySparkle Silver processing requires the following environment variables to be set\nto access Azure Data Lake Storage (ADLS Gen2):"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"AZURE_TENANT_ID - Directory ID for Azure Active Directory application,"),(0,i.kt)("li",{parentName:"ul"},"AZURE_CLIENT_ID - Application ID for Azure Active Directory application,"),(0,i.kt)("li",{parentName:"ul"},"AZURE_CLIENT_SECRET - Service Principal Secret,"),(0,i.kt)("li",{parentName:"ul"},"ADLS_ACCOUNT - ADLS account name,"),(0,i.kt)("li",{parentName:"ul"},"BLOB_ACCOUNT - Blob Storage account name."))),(0,i.kt)("h3",{id:"using-cli"},"Using CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pysparkle --help\npysparkle silver --help\npysparkle silver --dataset-name=movies_dataset\npysparkle --log-level=warning silver --dataset-name=movies_dataset\npysparkle data-quality --config-path "data_quality/silver_dq.json"\n')),(0,i.kt)("h3",{id:"using-an-entrypoint-script"},"Using an entrypoint script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'python pysparkle_cli.py --help\npython pysparkle_cli.py silver --help\npython pysparkle_cli.py silver --dataset-name=movies_dataset\npython pysparkle_cli.py --log-level=warning silver --dataset-name=movies_dataset\npython pysparkle_cli.py data-quality --config-path "data_quality/silver_dq.json"\n')),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Spark runs on Java 8/11/17, Java 8 prior to version 8u362 support is deprecated\nas of Spark 3.4.0. For details see: ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/"},"Spark Documentation"),"."),(0,i.kt)("h2",{id:"local-execution"},"Local execution"),(0,i.kt)("p",null,"The current setup of PySparkle doesn't include the required libraries to connect\nto Azure Data Lake Storage (they are pre-installed and configured in Azure Databricks\nenvironment). To run the application locally, appropriate jar files would have to be\nincluded in the Spark session (",(0,i.kt)("inlineCode",{parentName:"p"},"spark.jars.packages")," configuration parameter)."),(0,i.kt)("h2",{id:"azure-data-factory-setup"},"Azure Data Factory setup"),(0,i.kt)("p",null,"Example setup for running PySparkle from ADF."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "silver",\n    "properties": {\n        "activities": [\n            {\n                "name": "Silver",\n                "type": "DatabricksSparkPython",\n                "dependsOn": [],\n                "policy": {},\n                "userProperties": [],\n                "typeProperties": {\n                    "pythonFile": "dbfs:/FileStore/scripts/pysparkle_cli.py",\n                    "parameters": [\n                        "silver",\n                        "--dataset-name=movies_dataset"\n                    ],\n                    "libraries": [\n                        {\n                            "whl": "dbfs:/FileStore/jars/pysparkle-latest-py3-none-any.whl"\n                        }\n                    ]\n                },\n                "linkedServiceName": {\n                    "referenceName": "ls_Databricks_Small",\n                    "type": "LinkedServiceReference"\n                }\n            }\n        ],\n        "folder": {\n            "name": "Process"\n        },\n        "annotations": [],\n        "lastPublishTime": "2023-05-29T17:16:07Z"\n    },\n    "type": "Microsoft.DataFactory/factories/pipelines"\n}\n')))}d.isMDXComponent=!0}}]);