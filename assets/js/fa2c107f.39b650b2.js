"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4493],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6471:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4996),l=["components"],u={id:"infrastructure_java",title:"Java REST API - Azure Infrastructure",sidebar_label:"Infrastructure",description:"Java REST API - Azure Infrastructure",keywords:["java","rest","api","azure","infrastructure","ingress","service","aks","pipelines"]},s=void 0,c={unversionedId:"workloads/azure/backend/java/infrastructure_java",id:"workloads/azure/backend/java/infrastructure_java",title:"Java REST API - Azure Infrastructure",description:"Java REST API - Azure Infrastructure",source:"@site/docs/workloads/azure/backend/java/infrastructure_java.md",sourceDirName:"workloads/azure/backend/java",slug:"/workloads/azure/backend/java/infrastructure_java",permalink:"/docs/workloads/azure/backend/java/infrastructure_java",draft:!1,tags:[],version:"current",frontMatter:{id:"infrastructure_java",title:"Java REST API - Azure Infrastructure",sidebar_label:"Infrastructure",description:"Java REST API - Azure Infrastructure",keywords:["java","rest","api","azure","infrastructure","ingress","service","aks","pipelines"]},sidebar:"docs",previous:{title:"Azure Service Bus module",permalink:"/docs/workloads/azure/backend/java/architecture/dependency_servicebus_java"},next:{title:"Pipeline",permalink:"/docs/workloads/azure/backend/java/pipeline_java"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Diagram",id:"diagram",level:3},{value:"Resource List",id:"resource-list",level:3},{value:"Deploying",id:"deploying",level:2},{value:"Pipelines",id:"pipelines",level:3},{value:"Running Locally",id:"running-locally",level:3}],m={toc:d},k="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)(k,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This page present the high level design of the reference implementation of the Java Ensono Stacks\napplication which is based on Spring Boot REST API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This page assumes that the core infrastructure has already been provisioned. Instructions and additional information on the core infrastructure can be found ",(0,o.kt)("a",{parentName:"strong",href:"/docs/infrastructure/azure/core_infrastructure"},"here"))),(0,o.kt)("p",null,"Both the diagram and resource list below are for a single environment. By default, the pipeline template will create two environments (dev and prod)."),(0,o.kt)("h3",{id:"diagram"},"Diagram"),(0,o.kt)("img",{alt:"Azure Java API Infrastructure",src:(0,i.Z)("img/azure_rest_api_infrastructure.png")}),(0,o.kt)("h3",{id:"resource-list"},"Resource List"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resource Group - Core",(0,o.kt)("strong",{parentName:"td"},"*")),(0,o.kt)("td",{parentName:"tr",align:null},"Used to logically group core infrastructure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AKS",(0,o.kt)("strong",{parentName:"td"},"*")),(0,o.kt)("td",{parentName:"tr",align:null},"Azure Kubernetes Service")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Public DNS Record"),(0,o.kt)("td",{parentName:"tr",align:null},"DNS record pointing Ingress (via application gateway",(0,o.kt)("strong",{parentName:"td"},"*")," and internal load balancer",(0,o.kt)("strong",{parentName:"td"},"*"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ACR",(0,o.kt)("strong",{parentName:"td"},"*")),(0,o.kt)("td",{parentName:"tr",align:null},"Azure Container Registry")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Namespace: {env}-api"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes namespace for the environment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes Ingress to handle routing to Service")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Service"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes Service to handle routing to Deployment Pods")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes Deployment for managing Pods")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resource Group - API"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to logically group API specific infrastructure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos DB"),(0,o.kt)("td",{parentName:"tr",align:null},"Azure managed NoSQL database")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"*")," ",(0,o.kt)("em",{parentName:"p"},"Resource is created by the core infrastructure deployment.")),(0,o.kt)("h2",{id:"deploying"},"Deploying"),(0,o.kt)("h3",{id:"pipelines"},"Pipelines"),(0,o.kt)("p",null,"The following pipelines are currently supported for automating the deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/backend/java/pipeline_java"},"Azure DevOps"))),(0,o.kt)("h3",{id:"running-locally"},"Running Locally"),(0,o.kt)("p",null,"Currently, vars.tf and provider configuration is not\nautomatically updated. Future iterations will include this."),(0,o.kt)("p",null,"The safest way to run and maintain this locally is to rely on Docker and environment\nvariables as that is the way the pipeline will trigger the\nexecutions of Terraform."),(0,o.kt)("p",null,"Sample commands with example environment vars:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Navigate to the infra directory\ncd ${YOUR_DIRECTORY_PATH}/deploy/azure/app/kube\n\n# Run Ensono Terraform Docker container\ndocker run -v $(pwd):/usr/data --rm -it amidostacks/ci-tf:0.0.4 /bin/bash\n\n###########################################################################\n# All commands from this point should be executed in the Docker container #\n###########################################################################\n\n# Navigate to /usr/data directory\ncd /usr/data\n\n# Export Azure Credentials. Replace the example values.\nexport ARM_CLIENT_ID=1111-2222-3333-444 \\\nARM_CLIENT_SECRET=1111-2222-3333-4444 \\\nARM_SUBSCRIPTION_ID=1111-2222-3333-444 \\\nARM_TENANT_ID=1111-2222-3333-444\n\n# Export Terraform variables. Replace the example values.\nexport TF_VAR_name_company=amido \\\nTF_VAR_name_project=example \\\nTF_VAR_name_domain=menu-api \\\nTF_VAR_name_component=api \\\nTF_VAR_name_role=backend \\\nTF_VAR_name_environment=dev \\\nTF_VAR_attributes=[] \\\nTF_VAR_tags={} \\\nTF_VAR_resource_group_location=uksouth \\\nTF_VAR_app_gateway_frontend_ip_name=amido-example-nonprod-uks-core \\\nTF_VAR_dns_record=dev-menu-api \\\nTF_VAR_dns_zone_name=nonprod.amidostacks.com \\\nTF_VAR_dns_zone_resource_group=amido-example-nonprod-uks-core \\\nTF_VAR_core_resource_group=amido-example-nonprod-uks-core \\\nTF_VAR_internal_dns_zone_name=nonprod.amidostacks.internal \\\nTF_VAR_create_cosmosdb=true \\\nTF_VAR_create_cache=false \\\nTF_VAR_create_dns_record=true \\\nTF_VAR_create_cdn_endpoint=false \\\nTF_VAR_cosmosdb_sql_container=Menu \\\nTF_VAR_cosmosdb_sql_container_partition_key=/id \\\nTF_VAR_cosmosdb_kind=GlobalDocumentDB \\\nTF_VAR_cosmosdb_offer_type=Standard \\\nTF_VAR_app_insights_name=amido-example-nonprod-uks-core\n\n# Initial Terraform. Replace the example values.\nterraform init \\\n-backend-config="resource_group_name=amido-stacks-terraform" \\\n-backend-config="storage_account_name=amidostacksterraform" \\\n-backend-config="container_name=tfstate" \\\n-backend-config="key=example-menu-api"\n\n# Select or create the "dev" workspace.\nterraform workspace select dev || terraform workspace new dev\n\n# Check the plan matches your expected changes.\nterraform plan\n')))}f.isMDXComponent=!0}}]);