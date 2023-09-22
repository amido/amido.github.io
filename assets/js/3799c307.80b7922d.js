"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4495],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?a.createElement(y,i(i({ref:t},l),{},{components:r})):a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7230:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],c={id:"security_data_azure",title:"Security",sidebar_label:"Security",hide_title:!1,hide_table_of_contents:!1,description:"Security",keywords:["security","service principal","managed identity"]},u=void 0,s={unversionedId:"workloads/azure/data/security_data_azure",id:"workloads/azure/data/security_data_azure",title:"Security",description:"Security",source:"@site/docs/workloads/azure/data/security_data_azure.md",sourceDirName:"workloads/azure/data",slug:"/workloads/azure/data/security_data_azure",permalink:"/docs/workloads/azure/data/security_data_azure",draft:!1,tags:[],version:"current",frontMatter:{id:"security_data_azure",title:"Security",sidebar_label:"Security",hide_title:!1,hide_table_of_contents:!1,description:"Security",keywords:["security","service principal","managed identity"]},sidebar:"docs",previous:{title:"6. Data Ingest Pipeline Deployment",permalink:"/docs/workloads/azure/data/getting_started/etl_pipelines_deployment_azure"},next:{title:"Workloads on GCP",permalink:"/docs/workloads/gcp/workloads_gcp_readme"}},l={},d=[],p={toc:d},f="wrapper";function y(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(f,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Ensono Stacks Azure Data Platform all resources are created using the application-type Azure AD service\nprincipal. Credentials for the service principal are stored in Azure Pipelines variable groups."),(0,o.kt)("p",null,"Both the service principal and the configured variable groups are the prerequisites for deploying\nour platform to Azure. For details please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/requirements_data_azure"},"Requirements")," page."),(0,o.kt)("p",null,"For internal communication between Azure services, Ensono Stacks Data Platform uses managed identities,\nwhich are created automatically within our CI/CD deployments. For instance, Azure Data Factory\ngets deployed with the managed private endpoints to access Blob Storage, Azure Data Lake Storage,\nKey Vault etc."),(0,o.kt)("p",null,"In addition, all resources are created in a private Virtual Network (VNet) with all public access\ndisabled. For details please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/infrastructure_data_azure"},"Infrastructure & Networking"),"."))}y.isMDXComponent=!0}}]);