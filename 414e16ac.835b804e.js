(window.webpackJsonp=window.webpackJsonp||[]).push([[41,86],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(210)),c=n(50),i=n(215),l={id:"core_infrastructure",title:"Azure Core Infrastructure",sidebar_label:"Core Infrastructure"},u={unversionedId:"infrastructure/azure/core_infrastructure",id:"infrastructure/azure/core_infrastructure",isDocsHomePage:!1,title:"Azure Core Infrastructure",description:"The core infrastructure is the foundation for all other Stacks Workloads. As, in most cases, this will be the first part of Stacks that you deploy we will also cover bootstrapping your Azure tenant.",source:"@site/docs/infrastructure/azure/core_infrastructure.md",slug:"/infrastructure/azure/core_infrastructure",permalink:"/stacks/docs/infrastructure/azure/core_infrastructure",version:"current",sidebar_label:"Core Infrastructure",sidebar:"docs",previous:{title:"Infrastructure Introduction",permalink:"/stacks/docs/infrastructure/introduction"},next:{title:"Azure DevOps Pipeline",permalink:"/stacks/docs/infrastructure/azure/pipelines/azure_devops"}},s=[{value:"Resources Provisioned",id:"resources-provisioned",children:[{value:"Diagram",id:"diagram",children:[]},{value:"Resource List",id:"resource-list",children:[]}]},{value:"Deploying",id:"deploying",children:[{value:"Bootstrap the Azure tenant",id:"bootstrap-the-azure-tenant",children:[]},{value:"Using the Scaffolding CLI",id:"using-the-scaffolding-cli",children:[]},{value:"Pipelines",id:"pipelines",children:[]},{value:"Running Locally",id:"running-locally",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The core infrastructure is the foundation for all other Stacks Workloads. As, in most cases, this will be the first part of Stacks that you deploy we will also cover bootstrapping your Azure tenant."),Object(o.b)("h2",{id:"resources-provisioned"},"Resources Provisioned"),Object(o.b)("p",null,"Both the diagram and resource list below are for a single environment. By default, the pipeline template will create two environments (nonprod and prod)."),Object(o.b)("h3",{id:"diagram"},"Diagram"),Object(o.b)("img",{alt:"Azure Core Infrastructure",src:Object(i.a)("img/azure_core_infrastructure.png")}),Object(o.b)("h3",{id:"resource-list"},"Resource List"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Resource"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Resource Group"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Used to logically group infrastructure")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Virtual Network"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Fundamental building block for the private network")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subnet - AGW"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Dedicated subnet required for Application Gateway")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Application Gateway"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Web traffic load balancer")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Public IP"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IP address associated with the Application Gateway")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subnet - k8s"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subnet used by the AKS cluster")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AKS"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Azure Kubernetes Service")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Resource Group: Node Pool"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AKS created resource group for nodes, load balancers, etc.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Internal Load Balancer"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Load balancer used with NGINX ingress")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"VM Scale Set: Nodes"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Virtual Machine scaling for AKS")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NGINX Ingress"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Nginx ingress Kubernetes namespace, deployment and service")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Internal DNS Zone"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Custom DNS domain")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Public DNS Zone"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hosted service for DNS domain")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Application Insights"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Application performance management, monitoring and analytics service")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Log Analytics Workspace"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Log analytics with container insights")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Managed Identity"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Managed Identity with aadpodidentity binding")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ACR"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Azure Container Registry")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Key Vault"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cryptographic keys and secrets management service")))),Object(o.b)("h2",{id:"deploying"},"Deploying"),Object(o.b)("h3",{id:"bootstrap-the-azure-tenant"},"Bootstrap the Azure tenant"),Object(o.b)("p",null,"The first step is to create the Azure tenant and subscription. This process only needs to be run once on an administrators workstation."),Object(o.b)("p",null,"The administrator will need the following permissions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Azure AD "Global Administrator" role for the Azure AD Tenant'),Object(o.b)("li",{parentName:"ul"},"IAM subscription owner")),Object(o.b)("p",null,"With owner privileges:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.terraform.io/docs/providers/azurerm/guides/service_principal_client_secret.html"}),"Azure Service Principal")," for use with Terraform.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Make note of the TenantID, SubscriptionID, ClientID and ClientSecret"))),Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create"}),"Blob Storage instance")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/cli/azure/storage/container?view=azure-cli-latest#az_storage_container_create"}),"container")," for storing Terraform state.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Take note of the storage account and container name.")))),Object(o.b)("h3",{id:"using-the-scaffolding-cli"},"Using the Scaffolding CLI"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@amidostacks/scaffolding-cli"}),"Amido Stacks Scaffolding CLI")," can be used to create a project consisting of the core infrastructure as code scripts and the deployment pipeline."),Object(o.b)("p",null,"We are supporting and running ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/about/releases/"}),"node@12"),".\nPlease ensure that your local environment has the correct version ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"installed"),"."),Object(o.b)("p",null,"To run the Scaffolding CLI, use the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx @amidostacks/scaffolding-cli@latest run -i\n")),Object(o.b)("p",null,"You will be asked a number of questions. Make sure to select ",Object(o.b)("inlineCode",{parentName:"p"},"Azure")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Cloud platform shared services"),"."),Object(o.b)("h3",{id:"pipelines"},"Pipelines"),Object(o.b)("p",null,"The following pipelines are currently supported for automating the deployment:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/stacks/docs/infrastructure/azure/pipelines/azure_devops"}),"Azure DevOps"))),Object(o.b)("h3",{id:"running-locally"},"Running Locally"),Object(o.b)("p",null,"Currently, vars.tf and provider configuration is not\nautomatically updated. Future iterations will include this."),Object(o.b)("p",null,"The safest way to run and maintain this locally is to rely on Docker and environment\nvariables as that is the way the pipeline will trigger the\nexecutions of Terraform."),Object(o.b)("p",null,"Sample commands with example environment vars:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# Navigate to the infra directory\ncd ${YOUR_DIRECTORY_PATH}/deploy/azure/infra\n\n# Run Amido Terraform Docker container\ndocker run -v $(pwd):/usr/data --rm -it amidostacks/ci-tf:0.0.4 /bin/bash\n\n###########################################################################\n# All commands from this point should be executed in the Docker container #\n###########################################################################\n\n# Navigate to /usr/data directory\ncd /usr/data\n\n# Export Azure Credentials. Replace the example values.\nexport ARM_CLIENT_ID=1111-2222-3333-444 \\\nARM_CLIENT_SECRET=1111-2222-3333-4444 \\\nARM_SUBSCRIPTION_ID=1111-2222-3333-444 \\\nARM_TENANT_ID=1111-2222-3333-444\n\n# Export Terraform variables. Replace the example values.\nexport TF_VAR_resource_group_location=uksouth \\\nTF_VAR_name_company=amido \\\nTF_VAR_name_project=example \\\nTF_VAR_name_component=core \\\nTF_VAR_name_environment=nonprod \\\nTF_VAR_create_acr=true \\\nTF_VAR_acme_email=example@amidostacks.com \\\nTF_VAR_is_cluster_private=true \\\nTF_VAR_cluster_version=1.17.11 \\\nTF_VAR_stage=nonprod \\\nTF_VAR_key_vault_name=example-core-nonprod \\\nTF_VAR_dns_zone=nonprod.amidostacks.com \\\nTF_VAR_internal_dns_zone=nonprod.amidostacks.internal\n\n# Initial Terraform. Replace the example values.\nterraform init \\\n-backend-config="resource_group_name=amido-stacks-terraform" \\\n-backend-config="storage_account_name=amidostacksterraform" \\\n-backend-config="container_name=tfstate" \\\n-backend-config="key=example-core"\n\n# Select or create the "nonprod" workspace.\nterraform workspace select nonprod || terraform workspace new nonprod\n\n# Check the plan matches your expected changes. \nterraform plan\n')),Object(o.b)(c.default,{prev:!0,mdxType:"HideNavigation"}))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(212),a=n(218);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},218:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);t.default=function(e){var t=e.next,n=e.prev;return a.a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var r=document.querySelector("div.pagination-nav__item>a");r&&r.style&&(r.style.display="none")}})),a.a.createElement("div",null)}}}]);