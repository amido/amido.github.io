"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[276],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,k=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2034:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"dev_quickstart_data_azure",title:"Local Development Quickstart",sidebar_label:"3. Local Development Quickstart",hide_title:!1,hide_table_of_contents:!1,description:"Quickstart for local development",keywords:["quickstart","development"]},l=void 0,d={unversionedId:"workloads/azure/data/getting_started/dev_quickstart_data_azure",id:"workloads/azure/data/getting_started/dev_quickstart_data_azure",title:"Local Development Quickstart",description:"Quickstart for local development",source:"@site/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure.md",sourceDirName:"workloads/azure/data/getting_started",slug:"/workloads/azure/data/getting_started/dev_quickstart_data_azure",permalink:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure",draft:!1,tags:[],version:"current",frontMatter:{id:"dev_quickstart_data_azure",title:"Local Development Quickstart",sidebar_label:"3. Local Development Quickstart",hide_title:!1,hide_table_of_contents:!1,description:"Quickstart for local development",keywords:["quickstart","development"]},sidebar:"docs",previous:{title:"2. Infrastructure Deployment",permalink:"/docs/workloads/azure/data/getting_started/core_data_platform_deployment_azure"},next:{title:"4. Shared Resources Deployment",permalink:"/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure"}},u={},c=[{value:"Environment setup",id:"environment-setup",level:2},{value:"(Optional) Azure connection",id:"optional-azure-connection",level:3},{value:"Running tests",id:"running-tests",level:2},{value:"Unit tests",id:"unit-tests",level:3},{value:"End-to-end tests",id:"end-to-end-tests",level:3},{value:"Code quality checks",id:"code-quality-checks",level:3},{value:"(Optional) PySpark development in Databricks",id:"optional-pyspark-development-in-databricks",level:2},{value:"Azure Data Factory Development",id:"azure-data-factory-development",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:c},m="wrapper";function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section covers the steps required to start developing a Ensono Stacks Azure Data Platform from your machine:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure you have installed the applications in ",(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#local-development"},"local development requirements"),"."),(0,o.kt)("li",{parentName:"ol"},"Ensure that Poetry is added to your ",(0,o.kt)("inlineCode",{parentName:"li"},"$PATH"),".")),(0,o.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,o.kt)("p",null,"Poetry will be used to create a Python virtual environment for the project, and install the project's dependencies (including ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/data_engineering/stacks_data_utilities"},"stacks-data"),"). A ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," command has been created to assist with the initial setup, as well as installing other development tools such as ",(0,o.kt)("a",{parentName:"p",href:"#code-quality-checks"},"pre-commit"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You may wish to enable the ",(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/configuration/#virtualenvsin-project"},"virtualenvs.in-project")," configuration setting in Poetry - this will ensure that the Python virtual environment for the project gets created within the project directory, which can simplify management and integration with your IDE. To set this, run ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry config virtualenvs.in-project true"),".")),(0,o.kt)("p",null,"To setup your local development environment, run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Use make command to setup your local development environment\nmake setup_dev_environment\n\n# Enter the Poetry virtual environment shell\npoetry shell\n")),(0,o.kt)("h3",{id:"optional-azure-connection"},"(Optional) Azure connection"),(0,o.kt)("p",null,"In order to interact with Azure resources when developing locally, including running end-to-end tests, you must ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/data_engineering/stacks_data_utilities#azure-environment-variables"},"set up the environment variables")," required by stacks-data."),(0,o.kt)("h2",{id:"running-tests"},"Running tests"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"make")," commands are provided to assist with running tests while developing locally. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/data_engineering/testing_data_azure"},"testing")," for further details on these tests."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you encounter PATH-related issues with Poetry when running the tests, we recommend installing Poetry using\n",(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/#installing-with-pipx"},"pipx")," rather than the official installer.")),(0,o.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,o.kt)("p",null,"In order to run unit tests, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,o.kt)("h3",{id:"end-to-end-tests"},"End-to-end tests"),(0,o.kt)("p",null,"Running the end-to-end tests will involve executing Data Factory pipelines in Azure. Ensure you have setup the ",(0,o.kt)("a",{parentName:"p",href:"#optional-azure-connection"},"Azure connection")," and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make test_e2e\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Running end-to-end tests from your local machine may require additional permissions in Azure. If the tests fail whilst clearing up directories, ensure that you have ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor"},"Storage Blob Data Contributor")," access applied to your Azure Active Directory subscription. You may also be required to configure the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security"},"firewall rules")," for the storage account to whitelist your IP address.")),(0,o.kt)("h3",{id:"code-quality-checks"},"Code quality checks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"Pre-commit")," is used for code quality and linting checks on the project. It can be run using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make pre_commit\n")),(0,o.kt)("h2",{id:"optional-pyspark-development-in-databricks"},"(Optional) PySpark development in Databricks"),(0,o.kt)("p",null,"When developing with PySpark, you may wish to either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run scripts locally using a local Spark installation, or"),(0,o.kt)("li",{parentName:"ul"},"Run scripts on a Databricks cluster, through ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/databricks/repos/"},"Databricks Repos"),".")),(0,o.kt)("p",null,"To run scripts within a Databricks cluster, you will need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure the ",(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/data_engineering/stacks_data_utilities"},"stacks-data library")," is installed on the cluster."),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/data_engineering/stacks_data_utilities#azure-environment-variables"},"environment variables")," required for running Spark jobs. These should match those used in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Ensono/stacks-azure-data/blob/main/de_workloads/shared_resources/data_factory/adf_linked_services.tf"},"Data Factory linked service"),", and reference secret values from the key vault where applicable, e.g.:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"AZURE_TENANT_ID={{secrets/key-vault-backed/azure-tenant-id}}\nAZURE_CLIENT_ID={{secrets/key-vault-backed/azure-client-id}}\nAZURE_CLIENT_SECRET={{secrets/key-vault-backed/service-principal-secret}}\nADLS_ACCOUNT=amidostacksdeveuwdeadls\nCONFIG_BLOB_ACCOUNT=amidostacksdeveuwdeconfi\n")),(0,o.kt)("h2",{id:"azure-data-factory-development"},"Azure Data Factory Development"),(0,o.kt)("p",null,"A core component of the Ensono Stacks Data Platform is ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/data-factory/"},"Azure Data Factory"),", which is used for ingest activities, pipeline orchestration and scheduling. When an instance of Data Factory has been deployed, it's intuitive user interface can be used for reviewing, monitoring and editing resources."),(0,o.kt)("p",null,"While resources can be edited directly through the UI, the approach used in Stacks is to manage all resources through infrastructure-as-code using Terraform. The allows full CI/CD capabilities and control over changes across environments. Developers may use Data Factory's UI to assist in the development of new resources, and then transpose these into the project repository."),(0,o.kt)("p",null,"The following resource types will typically be added for new data workloads:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource type"),(0,o.kt)("th",{parentName:"tr",align:null},"Stacks workload types"),(0,o.kt)("th",{parentName:"tr",align:null},"Defined in"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Linked services"),(0,o.kt)("td",{parentName:"tr",align:null},"Ingest"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"data_factory/adf_linked_services.tf")),(0,o.kt)("td",{parentName:"tr",align:null},"Refer to Microsoft documentation for up-to-date details on ",(0,o.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/azure/data-factory/connector-overview"},"connector types supported by Data Factory"),", and Terraform documentation for adding ",(0,o.kt)("a",{parentName:"td",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_factory_linked_custom_service"},"custom linked services"),". Core linked services are added during deployment of ",(0,o.kt)("a",{parentName:"td",href:"/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure"},"shared resources"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Datasets"),(0,o.kt)("td",{parentName:"tr",align:null},"Ingest"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"data_factory/adf_datasets.tf")),(0,o.kt)("td",{parentName:"tr",align:null},"Refer to Terraform documentation for adding ",(0,o.kt)("a",{parentName:"td",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_factory_custom_dataset"},"custom datasets"),". Core datasets are added during deployment of ",(0,o.kt)("a",{parentName:"td",href:"/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure"},"shared resources"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pipelines"),(0,o.kt)("td",{parentName:"tr",align:null},"Ingest & Processing"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"data_factory/adf_pipelines.tf")),(0,o.kt)("td",{parentName:"tr",align:null},"Pipelines are deployed using the Terraform ",(0,o.kt)("a",{parentName:"td",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group_template_deployment"},"azurerm_resource_group_template_deployment")," type. These refer to a JSON file containing the pipeline definition. The pipeline definition JSON can be obtained after creating pipelines interactively through the Data Factory UI. If editing a pipeline in the Data Factory UI, click the ",(0,o.kt)("inlineCode",{parentName:"td"},"{}")," icon to view the underlying JSON - this can then be copied into the workload's JSON file in the project repo (under the ",(0,o.kt)("inlineCode",{parentName:"td"},"resources")," element).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Triggers"),(0,o.kt)("td",{parentName:"tr",align:null},"Ingest"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"data_factory/adf_triggers.tf")),(0,o.kt)("td",{parentName:"tr",align:null},"Refer to Terraform documentation for adding triggers, e.g. ",(0,o.kt)("a",{parentName:"td",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_factory_tumbling_window"},"tumbling window triggers"),".")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changes to Data Factory resources directly through the UI will lead to them being overwritten when deployment pipelines are next run. Ensure updates are made within the project repository to ensure updates are not lost.")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Once you setup your local development environment, you can continue with the Getting Started tutorial by ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/shared_resources_deployment_azure"},"deploying the shared resources"),"."))}k.isMDXComponent=!0}}]);