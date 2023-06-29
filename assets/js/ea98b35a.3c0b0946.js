"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4431],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return y}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8691:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"data_quality_azure",title:"Data Quality",sidebar_label:"Data Quality",hide_title:!1,hide_table_of_contents:!1,description:"Approach to DQ validations",keywords:["data quality","great expectations"]},s=void 0,p={unversionedId:"workloads/azure/data/components/etl_pipelines/data_quality_azure",id:"workloads/azure/data/components/etl_pipelines/data_quality_azure",isDocsHomePage:!1,title:"Data Quality",description:"Approach to DQ validations",source:"@site/docs/workloads/azure/data/components/etl_pipelines/data_quality_azure.md",sourceDirName:"workloads/azure/data/components/etl_pipelines",slug:"/workloads/azure/data/components/etl_pipelines/data_quality_azure",permalink:"/docs/workloads/azure/data/components/etl_pipelines/data_quality_azure",tags:[],version:"current",frontMatter:{id:"data_quality_azure",title:"Data Quality",sidebar_label:"Data Quality",hide_title:!1,hide_table_of_contents:!1,description:"Approach to DQ validations",keywords:["data quality","great expectations"]},sidebar:"docs",previous:{title:"Silver Pipeline",permalink:"/docs/workloads/azure/data/components/etl_pipelines/silver_data_azure"},next:{title:"Quickstart",permalink:"/docs/workloads/common/data/pysparkle/pysparkle_quickstart"}},c=[{value:"ADF Pipelines with DQ",id:"adf-pipelines-with-dq",children:[{value:"Ingest",id:"ingest",children:[],level:3},{value:"Silver",id:"silver",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data"},"stacks-azure-data")," ETL pipelines in Azure Data Factory\ncan be deployed with additional 'Data Quality' checks. These checks validate that the outputs of\na pipeline meet specified requirements, expressed in a simple, human-readable language. It allows\nyou to assert expectations about your data, which can help catch any discrepancies, anomalies, or\nerrors in your data as early in the pipeline as possible."),(0,i.kt)("p",null,"Data Quality checks are executed as Python Databricks jobs with the quality validation logic\npackaged within our ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/common/data/pysparkle/pysparkle_data_quality"},"PySparkle")," library.\nInternally, PySparkle leverages the capabilities of the ",(0,i.kt)("a",{parentName:"p",href:"https://greatexpectations.io/"},"Great Expectations"),"\nlibrary, an open-source Python-based library, to perform these checks."),(0,i.kt)("p",null,"The design of the Data Quality processing is outlined in the following diagram."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ADF_Ingest_AzureSql_Example_DQ.png",src:a(4537).Z})),(0,i.kt)("h2",{id:"adf-pipelines-with-dq"},"ADF Pipelines with DQ"),(0,i.kt)("h3",{id:"ingest"},"Ingest"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ADF_Ingest_AzureSql_Example_DQ.png",src:a(5323).Z})),(0,i.kt)("h3",{id:"silver"},"Silver"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ADF_silver_dq.png",src:a(8603).Z})))}d.isMDXComponent=!0},4537:function(e,t,a){t.Z=a.p+"assets/images/ADF_DataQualityDesign-dd10d4958d37b1136716ef1d27c0002e.png"},5323:function(e,t,a){t.Z=a.p+"assets/images/ADF_Ingest_AzureSql_Example_DQ-0984cf1a527965a42d99441f40ca98fd.png"},8603:function(e,t,a){t.Z=a.p+"assets/images/ADF_silver_dq-d96cf8d92fecbad74202efecb01f5510.png"}}]);