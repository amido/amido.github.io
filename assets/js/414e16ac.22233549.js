"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[274],{338:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(4848),s=r(8453),i=r(9557),o=r(6025);const a={id:"core_infrastructure",title:"Azure Core Infrastructure",sidebar_label:"Core Infrastructure",description:"How to bootstrap the Azure tenant",keywords:["azure devops","scaffolding cli","workload","pipeline","pipeline template","resources"]},c=void 0,l={id:"infrastructure/azure/core_infrastructure",title:"Azure Core Infrastructure",description:"How to bootstrap the Azure tenant",source:"@site/docs/infrastructure/azure/core_infrastructure.md",sourceDirName:"infrastructure/azure",slug:"/infrastructure/azure/core_infrastructure",permalink:"/docs/infrastructure/azure/core_infrastructure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"core_infrastructure",title:"Azure Core Infrastructure",sidebar_label:"Core Infrastructure",description:"How to bootstrap the Azure tenant",keywords:["azure devops","scaffolding cli","workload","pipeline","pipeline template","resources"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/infrastructure/introduction"},next:{title:"Azure DevOps",permalink:"/docs/infrastructure/azure/pipelines/azure_devops"}},d={},u=[{value:"Resources Provisioned",id:"resources-provisioned",level:2},{value:"Diagram",id:"diagram",level:3},{value:"Resource List",id:"resource-list",level:3},{value:"Deploying",id:"deploying",level:2},{value:"Bootstrap the Azure tenant",id:"bootstrap-the-azure-tenant",level:3},{value:"Using the Scaffolding CLI",id:"using-the-scaffolding-cli",level:3},{value:"Pipelines",id:"pipelines",level:3},{value:"Running Locally",id:"running-locally",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The core infrastructure is the foundation for all other Ensono Stacks Workloads. As, in most cases, this will be the first part of Ensono Stacks that you deploy we will also cover bootstrapping your Azure tenant."}),"\n",(0,t.jsx)(n.h2,{id:"resources-provisioned",children:"Resources Provisioned"}),"\n",(0,t.jsx)(n.p,{children:"Both the diagram and resource list below are for a single environment. By default, the pipeline template will create two environments (nonprod and prod)."}),"\n",(0,t.jsx)(n.h3,{id:"diagram",children:"Diagram"}),"\n",(0,t.jsx)("img",{alt:"Azure Core Infrastructure",src:(0,o.Ay)("img/azure_core_infrastructure.png")}),"\n",(0,t.jsx)(n.h3,{id:"resource-list",children:"Resource List"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Resource"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resource Group"}),(0,t.jsx)(n.td,{children:"Used to logically group infrastructure"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Virtual Network"}),(0,t.jsx)(n.td,{children:"Fundamental building block for the private network"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Subnet - AGW"}),(0,t.jsx)(n.td,{children:"Dedicated subnet required for Application Gateway"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Application Gateway"}),(0,t.jsx)(n.td,{children:"Web traffic load balancer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Public IP"}),(0,t.jsx)(n.td,{children:"IP address associated with the Application Gateway"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Subnet - k8s"}),(0,t.jsx)(n.td,{children:"Subnet used by the AKS cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AKS"}),(0,t.jsx)(n.td,{children:"Azure Kubernetes Service"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resource Group: Node Pool"}),(0,t.jsx)(n.td,{children:"AKS created resource group for nodes, load balancers, etc."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Internal Load Balancer"}),(0,t.jsx)(n.td,{children:"Load balancer used with NGINX ingress"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VM Scale Set: Nodes"}),(0,t.jsx)(n.td,{children:"Virtual Machine scaling for AKS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NGINX Ingress"}),(0,t.jsx)(n.td,{children:"Nginx ingress Kubernetes namespace, deployment and service"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Internal DNS Zone"}),(0,t.jsx)(n.td,{children:"Custom DNS domain"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Public DNS Zone"}),(0,t.jsx)(n.td,{children:"Hosted service for DNS domain"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Application Insights"}),(0,t.jsx)(n.td,{children:"Application performance management, monitoring and analytics service"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Log Analytics Workspace"}),(0,t.jsx)(n.td,{children:"Log analytics with container insights"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Managed Identity"}),(0,t.jsx)(n.td,{children:"Managed Identity with aadpodidentity binding"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ACR"}),(0,t.jsx)(n.td,{children:"Azure Container Registry"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key Vault"}),(0,t.jsx)(n.td,{children:"Cryptographic keys and secrets management service"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"deploying",children:"Deploying"}),"\n",(0,t.jsx)(n.h3,{id:"bootstrap-the-azure-tenant",children:"Bootstrap the Azure tenant"}),"\n",(0,t.jsx)(n.p,{children:"The first step is to create the Azure tenant and subscription. This process only needs to be run once on an administrators workstation."}),"\n",(0,t.jsx)(n.p,{children:"The administrator will need the following permissions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Azure AD "Global Administrator" role for the Azure AD Tenant'}),"\n",(0,t.jsx)(n.li,{children:"IAM subscription owner"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"With owner privileges:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create an ",(0,t.jsx)(n.a,{href:"https://www.terraform.io/docs/providers/azurerm/guides/service_principal_client_secret.html",children:"Azure Service Principal"})," for use with Terraform.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make note of the TenantID, SubscriptionID, ClientID and ClientSecret"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create",children:"Blob Storage instance"})," and ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/cli/azure/storage/container?view=azure-cli-latest#az_storage_container_create",children:"container"})," for storing Terraform state.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Take note of the storage account and container name."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"using-the-scaffolding-cli",children:"Using the Scaffolding CLI"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@amidostacks/scaffolding-cli",children:"Ensono Stacks Scaffolding CLI"})," can be used to create a project consisting of the core infrastructure as code scripts and the deployment pipeline."]}),"\n",(0,t.jsxs)(n.p,{children:["We are supporting and running ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en/about/releases/",children:"node@12"}),".\nPlease ensure that your local environment has the correct version ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"installed"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To run the Scaffolding CLI, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @amidostacks/scaffolding-cli@latest run -i\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You will be asked a number of questions. Make sure to select ",(0,t.jsx)(n.code,{children:"Azure"})," and ",(0,t.jsx)(n.code,{children:"Cloud platform shared services"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"pipelines",children:"Pipelines"}),"\n",(0,t.jsx)(n.p,{children:"The following pipelines are currently supported for automating the deployment:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/infrastructure/azure/pipelines/azure_devops",children:"Azure DevOps"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"running-locally",children:"Running Locally"}),"\n",(0,t.jsx)(n.p,{children:"Currently, vars.tf and provider configuration is not\nautomatically updated. Future iterations will include this."}),"\n",(0,t.jsx)(n.p,{children:"The safest way to run and maintain this locally is to rely on Docker and environment\nvariables as that is the way the pipeline will trigger the\nexecutions of Terraform."}),"\n",(0,t.jsx)(n.p,{children:"Sample commands with example environment vars:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Navigate to the infra directory\ncd ${YOUR_DIRECTORY_PATH}/deploy/azure/infra\n\n# Run Ensono Terraform Docker container\ndocker run -v $(pwd):/usr/data --rm -it amidostacks/ci-tf:0.0.4 /bin/bash\n\n###########################################################################\n# All commands from this point should be executed in the Docker container #\n###########################################################################\n\n# Navigate to /usr/data directory\ncd /usr/data\n\n# Export Azure Credentials. Replace the example values.\nexport ARM_CLIENT_ID=1111-2222-3333-444 \\\nARM_CLIENT_SECRET=1111-2222-3333-4444 \\\nARM_SUBSCRIPTION_ID=1111-2222-3333-444 \\\nARM_TENANT_ID=1111-2222-3333-444\n\n# Export Terraform variables. Replace the example values.\nexport TF_VAR_resource_group_location=uksouth \\\nTF_VAR_name_company=ensono \\\nTF_VAR_name_project=example \\\nTF_VAR_name_component=core \\\nTF_VAR_name_environment=nonprod \\\nTF_VAR_create_acr=true \\\nTF_VAR_acme_email=example@ensonostacks.com \\\nTF_VAR_is_cluster_private=true \\\nTF_VAR_cluster_version=1.17.11 \\\nTF_VAR_stage=nonprod \\\nTF_VAR_key_vault_name=example-core-nonprod \\\nTF_VAR_dns_zone=nonprod.ensonostacks.com \\\nTF_VAR_internal_dns_zone=nonprod.ensonostacks.internal\n\n# Initial Terraform. Replace the example values.\nterraform init \\\n-backend-config="resource_group_name=amido-stacks-terraform" \\\n-backend-config="storage_account_name=amidostacksterraform" \\\n-backend-config="container_name=tfstate" \\\n-backend-config="key=example-core"\n\n# Select or create the "nonprod" workspace.\nterraform workspace select nonprod || terraform workspace new nonprod\n\n# Check the plan matches your expected changes. \nterraform plan\n'})}),"\n",(0,t.jsx)(i.A,{prev:!0})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9557:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(6540),s=r(4848);const i=e=>{let{next:n,prev:r}=e;return t.useEffect((()=>{if(n){const e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(r){const e=document.querySelector("div.pagination-nav__item>a");e&&e.style&&(e.style.display="none")}})),(0,s.jsx)("div",{})}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);