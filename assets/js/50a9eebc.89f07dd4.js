"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[98],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8436:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"repository_data_azure",title:"Repository Structure",sidebar_label:"Repository Structure",hide_title:!1,hide_table_of_contents:!1,description:"Repository structure explained",keywords:["data","python","repository"]},c=void 0,u={unversionedId:"workloads/azure/data/architecture/repository_data_azure",id:"workloads/azure/data/architecture/repository_data_azure",isDocsHomePage:!1,title:"Repository Structure",description:"Repository structure explained",source:"@site/docs/workloads/azure/data/architecture/repository_data_azure.md",sourceDirName:"workloads/azure/data/architecture",slug:"/workloads/azure/data/architecture/repository_data_azure",permalink:"/docs/workloads/azure/data/architecture/repository_data_azure",tags:[],version:"current",frontMatter:{id:"repository_data_azure",title:"Repository Structure",sidebar_label:"Repository Structure",hide_title:!1,hide_table_of_contents:!1,description:"Repository structure explained",keywords:["data","python","repository"]},sidebar:"docs",previous:{title:"Architecture Overview",permalink:"/docs/workloads/azure/data/architecture/architecture_data_azure"},next:{title:"Requirements",permalink:"/docs/workloads/azure/data/requirements_data_azure"}},l=[],d={toc:l},p="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Structure of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data"},"stacks-azure-data")," repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"stacks-azure-data\n\u251c\u2500\u2500 build           # Deployment pipeline configuration for building and deploying the core infrastructure\n\u251c\u2500\u2500 de_build        # Deployment pipeline configuration for building and deploying data engineering resources\n\u251c\u2500\u2500 de_templates    # Data engineering workload templates, including data pipelines, tests and deployment configuration\n\u251c\u2500\u2500 de_workloads    # Data engineering workload resources, including data pipelines, tests and deployment configuration\n\u2502   \u251c\u2500\u2500 data_processing         # Data processing and transformation workloads\n\u2502   \u251c\u2500\u2500 ingest                  # Data ingestion workloads\n\u2502   \u251c\u2500\u2500 shared_resources        # Shared resources used across data engineering workloads\n\u251c\u2500\u2500 deploy          # TF modules to deploy core Azure resources (used by `build` directory)\n\u251c\u2500\u2500 docs            # Documentation\n\u251c\u2500\u2500 pysparkle       # Python library built to streamline data processing; packaged and uploaded to DBFS\n\u251c\u2500\u2500 utils           # Python utilities package used across solution for local testing\n\u251c\u2500\u2500 .flake8         # Configuration for Flake8 linting\n\u251c\u2500\u2500 .pre-commit-config.yaml         # Configuration for pre-commit hooks\n\u251c\u2500\u2500 Makefile        # Includes commands for environment setup\n\u251c\u2500\u2500 pyproject.toml  # Project dependencies\n\u251c\u2500\u2500 README.md       # This file\n\u251c\u2500\u2500 stackscli.yml   # Tells the Stacks CLI what operations to perform when the project is scaffolded\n\u251c\u2500\u2500 taskctl.yaml    # Controls the independent runner\n\u2514\u2500\u2500 yamllint.conf   # Linter configuration for YAML files used by the independent runner\n")))}f.isMDXComponent=!0}}]);