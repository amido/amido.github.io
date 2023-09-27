"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9946],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),p=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},s),{},{components:a})):r.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3944:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"requirements_data_azure",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!1,description:"Requirements",keywords:["requirements"]},u=void 0,p={unversionedId:"workloads/azure/data/requirements_data_azure",id:"workloads/azure/data/requirements_data_azure",title:"Requirements",description:"Requirements",source:"@site/docs/workloads/azure/data/requirements_data_azure.md",sourceDirName:"workloads/azure/data",slug:"/workloads/azure/data/requirements_data_azure",permalink:"/docs/workloads/azure/data/requirements_data_azure",draft:!1,tags:[],version:"current",frontMatter:{id:"requirements_data_azure",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!1,description:"Requirements",keywords:["requirements"]},sidebar:"docs",previous:{title:"Repository Structure",permalink:"/docs/workloads/azure/data/architecture/repository_data_azure"},next:{title:"Infrastructure",permalink:"/docs/workloads/azure/data/infrastructure_data_azure"}},s={},d=[{value:"Local development",id:"local-development",level:2},{value:"Git repository",id:"git-repository",level:2},{value:"Azure subscription",id:"azure-subscription",level:2},{value:"Terraform state storage",id:"terraform-state-storage",level:3},{value:"Azure DevOps",id:"azure-devops",level:2},{value:"Azure Pipelines variable groups",id:"azure-pipelines-variable-groups",level:3},{value:"Github PAT Token",id:"github-pat-token",level:3},{value:"Azure Pipelines Service Connections",id:"azure-pipelines-service-connections",level:3}],m={toc:d},c="wrapper";function k(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)(c,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"local-development"},"Local development"),(0,l.kt)("p",null,"The following tools are recommended for developing while using the Ensono Stacks data solution:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Tool"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.python.org/downloads/"},"Python 3.9+")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://python-poetry.org/docs/"},"Poetry")),(0,l.kt)("td",{parentName:"tr",align:null},"Used for Python dependency management in Stacks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A Linux distribution, e.g. ",(0,l.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL2")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional: recommended for Windows users developing the solution.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java 8/11/17"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional: Java is required to develop and run tests using PySpark locally - see ",(0,l.kt)("a",{parentName:"td",href:"https://spark.apache.org/docs/latest/"},"Spark documentation"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional: Azure CLI allows you to interact with Azure resources locally, including running end-to-end tests.")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"},"development quickstart")," for further details on getting start with developing the solution."),(0,l.kt)("h2",{id:"git-repository"},"Git repository"),(0,l.kt)("p",null,"A remote Git repository is required for storing and managing a data project's code. When scaffolding a new data project, you will need the HTTPS URL of the repo."),(0,l.kt)("p",null,"The examples and quickstart documentation assume that ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," is the primary branch in the repo."),(0,l.kt)("h2",{id:"azure-subscription"},"Azure subscription"),(0,l.kt)("p",null,"In order to deploy a Stacks data platform into Azure, you will need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One or more Azure subscriptions \u2013 for deploying the solution into"),(0,l.kt)("li",{parentName:"ul"},"Azure service principal (Application) \u2013 with permissions to deploy and configure all required\nresources into the target subscription(s)")),(0,l.kt)("h3",{id:"terraform-state-storage"},"Terraform state storage"),(0,l.kt)("p",null,"Deployment of Azure resources in Ensono Stacks is done through Terraform. Within your Azure subscription, you must provision a ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/storage/blobs/blob-containers-portal"},"storage container")," to hold ",(0,l.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/language/state"},"Terraform state data"),". Details regarding this storage are required when you first scaffold the project using the Ensono Stacks CLI. Therefore, once you have provisioned the storage container, make note of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Storage account name"),(0,l.kt)("li",{parentName:"ul"},"Resource group name"),(0,l.kt)("li",{parentName:"ul"},"Container name")),(0,l.kt)("h2",{id:"azure-devops"},"Azure DevOps"),(0,l.kt)("p",null,"CI/CD processes within the Ensono Stacks data platform are designed to be run in Azure DevOps Pipelines",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Therefore, it is a requirement to ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/devops/organizations/projects/create-project?view=azure-devops&tabs=browser"},"create a project in Azure DevOps"),"."),(0,l.kt)("h3",{id:"azure-pipelines-variable-groups"},"Azure Pipelines variable groups"),(0,l.kt)("p",null,"Our blueprint solution expects the following ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml"},"variable groups"),"\nto exist in your Azure DevOps project's Pipelines Library:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"amido-stacks-de-pipeline-",(0,l.kt)("em",{parentName:"li"},"env")),(0,l.kt)("li",{parentName:"ul"},"amido-stacks-euw-de-",(0,l.kt)("em",{parentName:"li"},"env"),"-network"),(0,l.kt)("li",{parentName:"ul"},"stacks-credentials-",(0,l.kt)("em",{parentName:"li"},"env"),"-kv")),(0,l.kt)("p",null,"Where ",(0,l.kt)("em",{parentName:"p"},"env")," can be either ",(0,l.kt)("inlineCode",{parentName:"p"},"nonprod")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"prod"),"."),(0,l.kt)("p",null,"Please refer to the following lists to identify the necessary variables for your project.\nThe specifics regarding when each variable is required have also been provided. Generally,\nthe variables fall into one of two categories based on the time of requirement: 'Project Start',\ndenoting variables required at the very outset of the project, and 'After Core Infrastructure\nDeployment', referring to variables required after the fundamental infrastructure has been deployed."),(0,l.kt)("p",null,"\u2139\ufe0f The variables under ",(0,l.kt)("inlineCode",{parentName:"p"},"amido-stacks-euw-de-env-network")," are only required if you want to provision the infrastructure within a private network."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"amido-stacks-de-pipeline-env"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"When Needed"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADLS_DataLake_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Data Lake Storage Gen2 URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blob_adls_storage"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Data Lake Storage Gen2 name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blob_configStorage"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Blob storage name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blob_ConfigStore_serviceEndpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Blob service URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"databricksHost"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Databricks URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"databricksWorkspaceResourceId"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Databricks workspace resource id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datafactoryname"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Data Factory name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"github_token"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"GitHub PAT token, see below for more details")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integration_runtime_name"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Data Factory integration runtime name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KeyVault_baseURL"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Vault URI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyvault_name"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Key Vault name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"location"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure region")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource_group"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the resource group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql_connection"),(0,l.kt)("td",{parentName:"tr",align:null},"After core infra"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection string to Azure SQL database"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"amido-stacks-euw-de-env-network"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"When Needed"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"databricks_private_subnet_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the private databricks subnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"databricks_public_subnet_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the public databricks subnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pe_resource_group_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the resource group to provision private VNet to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pe_subnet_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the subnet to provision private endpoints into")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pe_subnet_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Subnet CIDR, e.g. ",'["10.3.1.0/24"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pe_vnet_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Private VNet name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"private_subnet_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Subnet CIDR, e.g. ",'["10.3.4.0/24"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"public_subnet_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Subnet CIDR, e.g. ",'["10.3.3.0/24"]'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"stacks-credentials-env-kv"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"When Needed"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"azure-client-id"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Application ID for Azure Active Directory application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"azure-client-secret"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Service principal secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"azure-subscription-id"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Subscription ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"azure-tenant-id"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"Directory ID for Azure Active Directory application"))))),(0,l.kt)("h3",{id:"github-pat-token"},"Github PAT Token"),(0,l.kt)("p",null,"Within the pipelines we use an Azure DevOps task called UsePythonVersion@0 which allows us to install a specific version of Python onto the build agent. If the Python version doesn't exist on the build agent, it will download it from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/actions/python-versions"},"Github Actions")," however this requires a Github PAT Token otherwise you may hit by a GitHub anonymous download limit.\nYou can create a token by following this ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"},"guide"),".\nYou do not require any permissions on this token because GitHub only needs to read your public profile."),(0,l.kt)("h3",{id:"azure-pipelines-service-connections"},"Azure Pipelines Service Connections"),(0,l.kt)("p",null,"Service Connections are used in Azure DevOps Pipelines to connect to external services, like Azure and GitHub.\nYou must create the following Service Connections:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"When Needed"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Stacks.Pipeline.Builds"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"The Service Connection to Azure. The service principal or managed identity that is used to create the connection must have contributor access to the Azure Subscription.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GitHubReleases"),(0,l.kt)("td",{parentName:"tr",align:null},"Project start"),(0,l.kt)("td",{parentName:"tr",align:null},"The Service Connection to Github for releases. The access token that is used to create the connection must have read/write access to the GitHub repository.")))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"More general information on ",(0,l.kt)("a",{parentName:"li",href:"/docs/infrastructure/azure/pipelines/azure_devops"},"using Azure Pipelines in Stacks")," is also available.",(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);