"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6752],{4463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(4848),r=t(8453),i=t(2017);const o={id:"create_project_netcore",title:"Create REST API with CQRS project",hide_title:!0,sidebar_label:"Create REST API with CQRS project",hide_table_of_contents:!0,description:"Create .NET Core REST API application with CQRS from a template",keywords:[".net core","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github"]},a=void 0,l={id:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",title:"Create REST API with CQRS project",description:"Create .NET Core REST API application with CQRS from a template",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api_cqrs",slug:"/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"create_project_netcore",title:"Create REST API with CQRS project",hide_title:!0,sidebar_label:"Create REST API with CQRS project",hide_table_of_contents:!0,description:"Create .NET Core REST API application with CQRS from a template",keywords:[".net core","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github"]},sidebar:"docs",previous:{title:"Build & Run REST API",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore"},next:{title:"Configure REST API with CQRS project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore"}},c={},d=[{value:"Create a project using the Nuget template package",id:"create-a-project-using-the-nuget-template-package",level:2},{value:"Install the package",id:"install-the-package",level:3},{value:"Create a new project",id:"create-a-new-project",level:3},{value:"The Stacks Web API Template",id:"the-stacks-web-api-template",level:4},{value:"The Stacks Web API with CQRS Template",id:"the-stacks-web-api-with-cqrs-template",level:4},{value:"The Stacks Background Worker Template",id:"the-stacks-background-worker-template",level:4},{value:"The Stacks Azure Function: Cosmos DB Worker Template",id:"the-stacks-azure-function-cosmos-db-worker-template",level:4},{value:"The Stacks Azure Function:  Event Hub Listener Template",id:"the-stacks-azure-function--event-hub-listener-template",level:4},{value:"Stacks Azure Function:  Azure Service Bus Listener",id:"stacks-azure-function--azure-service-bus-listener",level:4},{value:"Template Parameters",id:"template-parameters",level:4},{value:"Uninstalling the templates",id:"uninstalling-the-templates",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"create-a-project-using-the-nuget-template-package",children:"Create a project using the Nuget template package"}),"\n",(0,s.jsx)(n.h3,{id:"install-the-package",children:"Install the package"}),"\n",(0,s.jsx)(i.A,{url:"https://www.youtube.com/watch?v=H6eaa8ukhq4"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.a,{href:"https://www.nuget.org/packages/Ensono.Stacks.Templates/",children:"Ensono.Stacks.Templates package page on Nuget"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Copy the installation command shown on the page."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open your terminal and run the command from Step 2.  An example of the command is shown below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet new install Ensono.Stacks.Templates\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,s.jsx)(n.p,{children:"Once the Stacks Template package has finished installing, you will have the following templates to use as starting points for your projects: -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Web API"}),": A web API built with controllers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Web API with CQRS"}),": A web API built with controllers that uses the CQRS pattern."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ServiceBus Worker"}),": A background worker that monitors an Azure Service Bus and responds when a message is received."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Azure Function: CosmosDb Worker"}),": An Azure Function that sends a message to an Azure Service Bus, when an item is created in a Cosmos DB."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Azure Function: EventHub Listener"}),": An Azure Function that monitors an Azure Event Hub and responds when a message is received."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Azure Function: ServiceBus Listener"}),": An Azure Function that monitors an Azure Service Bus and responds when a message is received."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These templates include automated testing and build pipelines, so they are ready for deployment to cloud providers.  To create a solution from one of these templates, please follow the relevant guide below."}),"\n",(0,s.jsx)(n.h4,{id:"the-stacks-web-api-template",children:"The Stacks Web API Template"}),"\n",(0,s.jsx)(n.p,{children:"This template will create a simple Web API solution that is built with ASP .NET Controllers.  It includes authentication, authorization, middleware for managing exceptions and middleware to assign or preserve correlation IDs."}),"\n",(0,s.jsx)(n.p,{children:"To create a Stacks Simple Web API solution: -"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open your command line or terminal."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change to the directory to where you would like to create your solution."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the following command, replacing the parameter values with your choices.",(0,s.jsx)(n.br,{}),"\n","For a description of each parameter and the options available, please scroll to the end of this section."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Run the command to create a Stacks Web API solution"',children:"dotnet new stacks-webapi --name Company.Project --domain Menu --cloudProvider Azure\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example command will create a folder and a solution called ",(0,s.jsx)(n.code,{children:"Company.Project"})," with a sample domain object called ",(0,s.jsx)(n.code,{children:"menu"})," and DevOps build pipelines for Microsoft Azure."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-stacks-web-api-with-cqrs-template",children:"The Stacks Web API with CQRS Template"}),"\n",(0,s.jsxs)(n.p,{children:["This template extends the Stacks Web API template.  It includes all the features of the Web API template and has been extended to implement the ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs",children:"Command Query Responsibility Segregation architectural pattern"}),".  Example commands and queries are included in the solution to demonstrate how the CQRS pattern works."]}),"\n",(0,s.jsx)(n.p,{children:"To create a Stacks Web API with CQRS solution: -"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open your command line or terminal."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change to the directory to where you would like to create your solution."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the following command, replacing the parameter values with your choices.",(0,s.jsx)(n.br,{}),"\n","For a description of each parameter and the options available, please scroll to the end of this section."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Run",metastring:'the command to create a Stacks Web API solution"',children:"dotnet new stacks-cqrs --name Company.Project --domain Menu --database CosmosDb --eventPublisher ServiceBus --cloudProvider Azure\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example command will create a folder and a solution called ",(0,s.jsx)(n.code,{children:"Company.Project"})," with a sample domain object called ",(0,s.jsx)(n.code,{children:"menu"}),".  The solution will use CosmosDB for its database and publish events to Azure Service Bus.  A DevOps build pipeline will also be created for Microsoft Azure."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-stacks-background-worker-template",children:"The Stacks Background Worker Template"}),"\n",(0,s.jsxs)(n.p,{children:["This template will create a solution for a Background Worker that monitors an ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/service-bus-messaging/",children:"Azure Service Bus"}),".  When an Event is published to the Service Bus that the worker has subscribed to, it will respond by executing the appropriate Event Handler.  The solution contains several events and their handlers to serve as examples."]}),"\n",(0,s.jsx)(n.p,{children:"To create a Stacks Background Worker: -"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open your command line or terminal."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change to the directory to where you would like to create your solution."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the following command, replacing the parameter values with your choices.",(0,s.jsx)(n.br,{}),"\n","For a description of each parameter and the options available, please scroll to the end of this section."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Run the command to create a Stacks Background Worker solution"',children:"dotnet new stacks-asb-worker --name Company.Project --domain Menu\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example command will create a folder and a solution called ",(0,s.jsx)(n.code,{children:"Company.Project"})," with a sample domain object called ",(0,s.jsx)(n.code,{children:"menu"})," and a DevOps build pipeline for Microsoft Azure."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-stacks-azure-function-cosmos-db-worker-template",children:"The Stacks Azure Function: Cosmos DB Worker Template"}),"\n",(0,s.jsxs)(n.p,{children:["This template will create a solution for an Azure Function triggered by the ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger",children:"Azure Cosmos DB change feed trigger"}),". When an item is either created or updated in a Cosmos DB container, the Azure Function will trigger.  The Function will publish a message to an Azure Service Bus to notify subscribers that an item has either been created or updated in the Cosmos DB container."]}),"\n",(0,s.jsx)(n.p,{children:"To create an Azure Function Cosmos DB Worker: -"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open your command line or terminal."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change to the directory to where you would like to create your solution."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the following command, replacing the parameter values with your choices.",(0,s.jsx)(n.br,{}),"\n","For a description of each parameter and the options available, please scroll to the end of this section."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Run the command to create an Azure Function Cosmos DB Worker solution"',children:"dotnet new stacks-az-func-cosmosdb-worker --name Company.Project\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example command will create a folder and a solution called ",(0,s.jsx)(n.code,{children:"Company.Project"})," and a DevOps build pipeline for Microsoft Azure."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-stacks-azure-function--event-hub-listener-template",children:"The Stacks Azure Function:  Event Hub Listener Template"}),"\n",(0,s.jsxs)(n.p,{children:["This template will create a solution for an Azure Function that uses the ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs-trigger",children:"Azure Event Hub Trigger"}),".  When a new event is published to the Event Hub that the function is monitoring, the function will trigger.  The function will receive the event, deserializes it to an object and write a log message that it has received a message."]}),"\n",(0,s.jsx)(n.p,{children:"To create an Azure Function Event Hub Listener: -"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open your command line or terminal."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change to the directory to where you would like to create your solution."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the following command, replacing the parameter values with your choices.",(0,s.jsx)(n.br,{}),"\n","For a description of each parameter and the options available, please scroll to the end of this section."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Run the command to create an Azure Function Event Hub Listener solution"',children:"dotnet new stacks-az-func-aeh-listener --name Company.Project --domain Menu\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example command will create a folder and a solution called ",(0,s.jsx)(n.code,{children:"Company.Project"})," with a sample event for when a ",(0,s.jsx)(n.code,{children:"menu"})," is created and a DevOps build pipeline for Microsoft Azure."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"stacks-azure-function--azure-service-bus-listener",children:"Stacks Azure Function:  Azure Service Bus Listener"}),"\n",(0,s.jsxs)(n.p,{children:["This is a template for an Azure Function that uses the ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus-trigger",children:"Azure Service Bus Trigger"}),".  When a new message is published to an Azure Service Bus that the function has subscribed to, the function will trigger.  The function will receive the message, deserializes it to an object and write a log that it has received a message."]}),"\n",(0,s.jsx)(n.p,{children:"To create an Azure Service Bus Listener: -"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open your command line or terminal."}),"\n",(0,s.jsx)(n.li,{children:"Change to the directory to where you would like to create your solution."}),"\n",(0,s.jsxs)(n.li,{children:["Run the following command, replacing the parameter values with your choices.",(0,s.jsx)(n.br,{}),"\n","For a description of each parameter and the options available, please scroll to the end of this section."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Run the command to create an Azure Function Service Bus Listener solution"',children:"dotnet new stacks-az-func-asb-listener --name Company.Project  --domain Menu\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example command will create a folder and a solution called ",(0,s.jsx)(n.code,{children:"Company.Project"})," with a sample event for when a ",(0,s.jsx)(n.code,{children:"menu"})," is created and a DevOps build pipeline for Microsoft Azure."]}),"\n",(0,s.jsx)(n.h4,{id:"template-parameters",children:"Template Parameters"}),"\n",(0,s.jsxs)(n.admonition,{title:"Template parameter details",type:"note",children:[(0,s.jsxs)(n.p,{children:["A description of the parameters used in the examples above are shown below.",(0,s.jsx)(n.br,{}),"\n","Please note that some templates may only offer a subset of the parameters shown."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"-n | --name"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sets the project name."}),"\n",(0,s.jsx)(n.li,{children:"If you do not provide this parameter, the project name will be the same as the folder where you run the command."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"-do | --domain"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sets the name of the sample domain model's aggregate root object for API templates."}),"\n",(0,s.jsx)(n.li,{children:"Sets the name the sample events that are created for for listener templates."}),"\n",(0,s.jsx)(n.li,{children:"Sets the name of the CosmosDB collection if Cosmos DB is chosen for a database."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"-db | --database"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configures which database provider will be used.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Choices: -"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CosmosDb"})," for Microsoft Azure CosmosDB,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DynamoDb"})," for Amazon Web Services DynamoDB,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InMemoryDb"})," for an in memory 'database'.  For demonstration, not suitable for production."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"-e | --eventPublisher"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configures which messaging service will be used."}),"\n",(0,s.jsxs)(n.li,{children:["Choices: -","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AwsSns"})," for Amazon Web Services Simple Notification Service,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EventHub"})," for Microsoft Azure Event Hub,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ServiceBus"})," for Microsoft Azure Event Hub,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"None"})," to not include an event publisher."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"-o | --output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sets the path where the project will be created."}),"\n",(0,s.jsx)(n.li,{children:"If you do not provide this parameter, a new folder will be created."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"-cp | --cloudProvider"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configures which cloud provider to use."}),"\n",(0,s.jsxs)(n.li,{children:["Choices: -","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AWS"})," for Amazon Web Services,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Azure"})," for Microsoft Azure,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GCP"})," for Google Cloud PLatform."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"-cicd | --cicdProvider"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configures which CI/CD provider templates to use."}),"\n",(0,s.jsxs)(n.li,{children:["Choices: -","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AZDO"})," for Microsoft Azure DevOps,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GHA"})," for GitHub Actions,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"None"})," to not include CI/CD pipelines."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"uninstalling-the-templates",children:"Uninstalling the templates"}),"\n",(0,s.jsx)(n.p,{children:"To remove the Stacks templates from your machine, uninstall the NuGet package by running the following command"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="To uninstall package execute the following command"',children:"dotnet new uninstall Ensono.Stacks.Templates\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2017:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var s=t(3554),r=t.n(s);const i="playerSection_SVZU",o="playerWrapper_cclc",a="player_oSQx";var l=t(4848);const c=function(e){let{url:n}=e;return(0,l.jsx)("div",{className:i,children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)(r(),{className:a,url:n,controls:!0,width:"100%",height:"100%",config:{}})})})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);