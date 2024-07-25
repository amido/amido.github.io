"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1027],{4309:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=s(4848),i=s(8453),o=s(1470),r=s(9365);const a={id:"configure_project_netcore",title:"Configure REST API with CQRS project",hide_title:!0,sidebar_label:"Configure REST API with CQRS project",hide_table_of_contents:!0,description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",keywords:[".net core","rest api","cqrs","azure","application insights","cosmos db","aws sns","build","run","application","configure","docker"]},l=void 0,c={id:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",title:"Configure REST API with CQRS project",description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api_cqrs",slug:"/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"configure_project_netcore",title:"Configure REST API with CQRS project",hide_title:!0,sidebar_label:"Configure REST API with CQRS project",hide_table_of_contents:!0,description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",keywords:[".net core","rest api","cqrs","azure","application insights","cosmos db","aws sns","build","run","application","configure","docker"]},sidebar:"docs",previous:{title:"Create REST API with CQRS project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore"},next:{title:"Build & Run REST API with CQRS",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore"}},d={},u=[{value:"Configuring the project",id:"configuring-the-project",level:2},{value:"Configuring Cosmos DB",id:"configuring-cosmos-db",level:3},{value:"Using Powershell for COSMOSDB_KEY",id:"using-powershell-for-cosmosdb_key",level:2},{value:"Using Visual Studio for COSMOSDB_KEY",id:"using-visual-studio-for-cosmosdb_key",level:2},{value:"Using VSCode for COSMOSDB_KEY",id:"using-vscode-for-cosmosdb_key",level:2},{value:"Using terminal for COSMOSDB_KEY",id:"using-terminal-for-cosmosdb_key",level:2},{value:"Using Visual Studio Code for COSMOSDB_KEY",id:"using-visual-studio-code-for-cosmosdb_key",level:2},{value:"Configuring DynamoDB",id:"configuring-dynamodb",level:3},{value:"Ensono.Stacks.DynamoDB package",id:"ensonostacksdynamodb-package",level:3},{value:"Configuring AWS SNS",id:"configuring-aws-sns",level:3},{value:"Using Powershell for TOPIC_ARN",id:"using-powershell-for-topic_arn",level:2},{value:"Using Visual Studio for TOPIC_ARN",id:"using-visual-studio-for-topic_arn",level:2},{value:"Using VSCode for TOPIC_ARN",id:"using-vscode-for-topic_arn",level:2},{value:"Using terminal for TOPIC_ARN",id:"using-terminal-for-topic_arn",level:2},{value:"Using Visual Studio Code for TOPIC_ARN",id:"using-visual-studio-code-for-topic_arn",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"configuring-the-project",children:"Configuring the project"}),"\n",(0,t.jsxs)(n.p,{children:["All security sensitive information is passed as a secret in our configuration. We have a library called ",(0,t.jsx)(n.a,{href:"https://github.com/Ensono/stacks-dotnet-packages-configuration",children:"Ensono.Stacks.Configuration"})," that reads secrets from the environment before the application starts and makes the needed substitutions in the configuration files."]}),"\n",(0,t.jsx)(n.h3,{id:"configuring-cosmos-db",children:"Configuring Cosmos DB"}),"\n",(0,t.jsxs)(n.p,{children:["The project can be set to use Azure ",(0,t.jsx)(n.strong,{children:"Cosmos DB"})," or an ",(0,t.jsx)(n.strong,{children:"InMemory"})," database to store the example application data. The ",(0,t.jsx)(n.strong,{children:"InMemory"})," database works out of the box and no further setup is required aside from creating your project. Depending on your desired setup you'll have to provide some or all of the configuration in the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file section showed below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json"',children:'"CosmosDb": {\n\t"DatabaseAccountUri": "<Add CosmosDB Account URI here>",\n\t"DatabaseName": "Stacks",\n\t"SecurityKeySecret": {\n\t\t"Identifier": "COSMOSDB_KEY",\n\t...\n\t}\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Using the Cosmos DB Emulator to run the database locally"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(n.p,{children:["For running on local environments (Windows/Linux/macOS) please follow the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21",children:"instructions provided by Microsoft."})]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Navigate to the local Cosmos DB URL in your browser as indicated in the documentation given in the above link."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Identify the ",(0,t.jsx)(n.strong,{children:"Primary Key"}),". Please refer to the field in the screenshot below. ",(0,t.jsx)(n.img,{alt:"CosmosDB",src:s(7151).A+"",width:"2432",height:"792"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Cosmos DB has to contain a fixed structure depending on your project. Create a collection ",(0,t.jsx)(n.code,{children:"Stacks"})," (this corresponds to ",(0,t.jsx)(n.code,{children:"DatabaseName"})," in the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file) with a container id ",(0,t.jsx)(n.code,{children:"Menu"})," (name of domain object) and the partition key ",(0,t.jsx)(n.code,{children:"/id"}),". Keep in mind that if you've changed the domain (default being ",(0,t.jsx)(n.code,{children:"Menu"}),"), you have to supply your own domain when creating the container."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CosmosDB",src:s(3165).A+"",width:"1238",height:"685"})}),(0,t.jsx)(n.admonition,{title:"CosmosDb environment variable",type:"note",children:(0,t.jsxs)(n.p,{children:["To interact with CosmosDb there is a environment variable called ",(0,t.jsx)(n.code,{children:"COSMOSDB_KEY"})," that needs to be set before running your application. This variable holds the value of the ",(0,t.jsx)(n.strong,{children:"Primary Key"})," you got from step 2. Please see the next section on details of how to set it on your machine."]})})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Setting the COSMOSDB_KEY environment variable"}),(0,t.jsx)("div",{children:(0,t.jsxs)(o.A,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Unix",value:"unix"}],children:[(0,t.jsxs)(r.A,{value:"windows",children:[(0,t.jsx)(n.p,{children:"There are a couple of different ways to set the environment variable"}),(0,t.jsx)(n.h2,{id:"using-powershell-for-cosmosdb_key",children:"Using Powershell for COSMOSDB_KEY"}),(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"Powershell"})," with administrator privileges to execute the command below. Substitute ",(0,t.jsx)(n.code,{children:"<PRIMARY-KEY-HERE>"})," with your own key."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="Run PS command to add the COSMOSDB_KEY system variable"',children:'[Environment]::SetEnvironmentVariable("COSMOSDB_KEY", "<PRIMARY-KEY-HERE>", [EnvironmentVariableTarget]::Machine)\n'})}),(0,t.jsx)(n.h2,{id:"using-visual-studio-for-cosmosdb_key",children:"Using Visual Studio for COSMOSDB_KEY"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the project in Visual Studio. The solution file is located at ",(0,t.jsx)(n.code,{children:"src/api/xxENSONOxx.xxSTACKSxx.API.sln"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.strong,{children:"COSMOSDB_KEY"})," environment variable to the ",(0,t.jsx)(n.strong,{children:"launchSettings.json"})," file generated by Visual Studio and add the Cosmos DB Primary Key value."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="src/api/xxENSONOxx.xxSTACKSxx.API/properties/launchSettings.json"',children:'{\n  ...\n  "profiles": {\n    "xxENSONOxx.xxSTACKSxx.API": {\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development",\n        "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>"\n        ...\n      }\n    }\n  }\n}\n'})}),(0,t.jsx)(n.h2,{id:"using-vscode-for-cosmosdb_key",children:"Using VSCode for COSMOSDB_KEY"}),(0,t.jsxs)(n.p,{children:["If you're using VSCode that means you'll have a ",(0,t.jsx)(n.code,{children:"launch.json"})," file generated when you try to run the project. In that file there's an ",(0,t.jsx)(n.code,{children:"env"})," section where you can put environment variables for the current session."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="launch.json"',children:'"env": {\n\t...\n    "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>",\n    ...\n}\n'})}),(0,t.jsxs)(n.admonition,{title:"Note on usage",type:"note",children:[(0,t.jsxs)(n.p,{children:["The variable is referenced in ",(0,t.jsx)(n.strong,{children:"appsettings.json"}),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json"',children:'"CosmosDb": {\n    ...\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n        ...\n    }\n}\n'})})]})]}),(0,t.jsxs)(r.A,{value:"unix",children:[(0,t.jsx)(n.p,{children:"There are a couple of different ways to set the environment variable"}),(0,t.jsx)(n.h2,{id:"using-terminal-for-cosmosdb_key",children:"Using terminal for COSMOSDB_KEY"}),(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"terminal"})," to execute the command below. Substitute ",(0,t.jsx)(n.code,{children:"<PRIMARY-KEY-HERE>"})," with your own key. This will set the environment variable only for the current session of your terminal."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:'title="Run terminal command to add the COSMOSDB_KEY system variable"',children:"export COSMOSDB_KEY=<PRIMARY-KEY-HERE>\n"})}),(0,t.jsxs)(n.p,{children:["To set the environment variable permanently on your system you'll have to edit your ",(0,t.jsx)(n.code,{children:"bash_profile"})," or ",(0,t.jsx)(n.code,{children:".zshenv"})," file depending on which shell are you using."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:'title="Example for setting env variable in .zchenv"',children:"echo 'export COSMOSDB_KEY=<PRIMARY-KEY-HERE>' >> ~/.zshenv\n"})}),(0,t.jsx)(n.h2,{id:"using-visual-studio-code-for-cosmosdb_key",children:"Using Visual Studio Code for COSMOSDB_KEY"}),(0,t.jsxs)(n.p,{children:["If you're using VSCode that means you'll have a ",(0,t.jsx)(n.code,{children:"launch.json"})," file generated when you try to run the project. In that file there's an ",(0,t.jsx)(n.code,{children:"env"})," section where you can put environment variables for the current session."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="launch.json"',children:'"env": {\n\t...\n    "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>",\n    ...\n}\n'})}),(0,t.jsxs)(n.admonition,{title:"Note on usage",type:"note",children:[(0,t.jsxs)(n.p,{children:["The variable is referenced in ",(0,t.jsx)(n.strong,{children:"appsettings.json"}),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json"',children:'"CosmosDb": {\n    ...\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n        ...\n    }\n}\n'})})]})]})]})})]}),"\n",(0,t.jsx)("br",{}),"\n","\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Connecting to deployed Cosmos DB instance"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(n.p,{children:["When choosing not to run the CosmosDB locally via the emulator, further configuration needs to be changed in the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file."]}),(0,t.jsxs)(n.p,{children:["Aside from setting the ",(0,t.jsx)(n.code,{children:"COSMOSDB_KEY"})," as an environment variable (described in the previous section), you'll have to set the CosmosDB URI parameter ",(0,t.jsx)(n.code,{children:"DatabaseAccountUri"})," as well."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json"',children:'"CosmosDb": {\n\t"DatabaseAccountUri": "<Add CosmosDB Account URI here>",\n\t"DatabaseName": "Stacks",\n\t"SecurityKeySecret": {\n\t\t"Identifier": "COSMOSDB_KEY",\n\t...\n\t}\n}\n'})})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h3,{id:"configuring-dynamodb",children:"Configuring DynamoDB"}),"\n",(0,t.jsxs)(n.p,{children:["You need a DynamoDB instance in order to connect the API to it. You can follow the official instructions provided by AWS ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.DynamoWebService.html",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Relevant documentation pages that you can follow to set up your profile:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html",children:"Configuration and credential file settings"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html",children:"Named profiles"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The template and NuGet package assumes you'll use the ",(0,t.jsx)(n.code,{children:"AWS CLI"})," tools and will have configured your access keys via the ",(0,t.jsx)(n.code,{children:"aws configure"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["Depending on your desired setup you'll have to provide some or all of the configuration in the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file section showed below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json"',children:'"DynamoDb": {\n    "TableName": "Menu",\n    "TablePrefix": ""\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"ensonostacksdynamodb-package",children:"Ensono.Stacks.DynamoDB package"}),"\n",(0,t.jsxs)(n.p,{children:["This template uses the ",(0,t.jsx)(n.a,{href:"https://github.com/Ensono/stacks-dotnet-packages-dynamodb",children:"Ensono.Stacks.DynamoDB"})," package to connect and use DynamoDB."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h3,{id:"configuring-aws-sns",children:"Configuring AWS SNS"}),"\n",(0,t.jsxs)(n.p,{children:["The project can be set to use AWS ",(0,t.jsx)(n.strong,{children:"SNS"})," to publish and consume events. In order to publish messages to a Queue you will also require a version of AWS SQS running on AWS cloud. For SNS to work out the box with AWS you will have to provide some configuration in the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file section showed below as well as subscribeaing your SNS topic to your SQS queue."]}),"\n",(0,t.jsxs)(n.p,{children:["You will also be required to set the ",(0,t.jsx)(n.code,{children:"TOPIC_ARN"})," as an environment variable (see section ",(0,t.jsx)(n.strong,{children:"Setting the TOPIC_ARN environment variable"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json"',children:'"AwsSnsConfiguration": {\n  "TopicArn": {\n\t\t"Identifier": "TOPIC_ARN",\n\t...\n\t}\n},\n"AWS": {\n    "Region": "eu-west-2"\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Using the AWS SNS to publish messages"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:"For running on local environments you will still require a version of AWS SNS running on AWS cloud."}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Navigate to the SNS Topic in your browser."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Identify the ",(0,t.jsx)(n.strong,{children:"TopicArn"}),". This is located within: Amazon SNS --\x3e Topics --\x3e topic-name (e.g. stacks-dev) --\x3e TopicArn"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Apply the ",(0,t.jsx)(n.strong,{children:"TopicArn"})," obtained to the environmental variable called ",(0,t.jsx)(n.code,{children:"TOPIC_ARN"})," (Please see the next section on details of how to set it on your machine)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run your application and carry out some event worth actions (create domain objects, retrieve domain objects, delete domain objects etc...). Any time you carry out an action which should raise an event, there will be an event raised within your AWS SQS queue."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the SQS Queue in your browser and select ",(0,t.jsx)(n.code,{children:"Send and receive messages"}),". Select ",(0,t.jsx)(n.code,{children:"Poll for messages"})," and see all the events raised."]}),"\n"]}),"\n"]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Setting the TOPIC_ARN environment variable"}),(0,t.jsx)("div",{children:(0,t.jsxs)(o.A,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Unix",value:"unix"}],children:[(0,t.jsxs)(r.A,{value:"windows",children:[(0,t.jsx)(n.p,{children:"There are a couple of different ways to set the environment variable"}),(0,t.jsx)(n.h2,{id:"using-powershell-for-topic_arn",children:"Using Powershell for TOPIC_ARN"}),(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"Powershell"})," with administrator privileges to execute the command below. Substitute ",(0,t.jsx)(n.code,{children:"<TOPIC-ARN-HERE>"})," with your own key."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="Run PS command to add the TOPIC_ARN system variable"',children:'[Environment]::SetEnvironmentVariable("TOPIC_ARN", "<TOPIC-ARN-HERE>", [EnvironmentVariableTarget]::Machine)\n'})}),(0,t.jsx)(n.h2,{id:"using-visual-studio-for-topic_arn",children:"Using Visual Studio for TOPIC_ARN"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the project in Visual Studio. The solution file is located at ",(0,t.jsx)(n.code,{children:"src/api/xxENSONOxx.xxSTACKSxx.API.sln"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.strong,{children:"TOPIC_ARN"})," environment variable to the ",(0,t.jsx)(n.strong,{children:"launchSettings.json"})," file generated by Visual Studio and add the SNS topic ARN value."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="src/api/xxENSONOxx.xxSTACKSxx.API/properties/launchSettings.json"',children:'{\n  ...\n  "profiles": {\n    "xxENSONOxx.xxSTACKSxx.API": {\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development",\n        "TOPIC_ARN": "<TOPIC-ARN-HERE>"\n        ...\n      }\n    }\n  }\n}\n'})}),(0,t.jsx)(n.h2,{id:"using-vscode-for-topic_arn",children:"Using VSCode for TOPIC_ARN"}),(0,t.jsxs)(n.p,{children:["If you're using VSCode that means you'll have a ",(0,t.jsx)(n.code,{children:"launch.json"})," file generated when you try to run the project. In that file there's an ",(0,t.jsx)(n.code,{children:"env"})," section where you can put environment variables for the current session."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="launch.json"',children:'"env": {\n\t...\n    "TOPIC_ARN": "<TOPIC-ARN-HERE>",\n    ...\n}\n'})}),(0,t.jsxs)(n.admonition,{title:"Note on usage",type:"note",children:[(0,t.jsxs)(n.p,{children:["The variable is referenced in ",(0,t.jsx)(n.strong,{children:"appsettings.json"}),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json"',children:'"AwsSnsConfiguration": {\n  "TopicArn": {\n\t\t"Identifier": "TOPIC_ARN",\n\t...\n\t}\n}\n'})})]})]}),(0,t.jsxs)(r.A,{value:"unix",children:[(0,t.jsx)(n.p,{children:"There are a couple of different ways to set the environment variable"}),(0,t.jsx)(n.h2,{id:"using-terminal-for-topic_arn",children:"Using terminal for TOPIC_ARN"}),(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"terminal"})," to execute the command below. Substitute ",(0,t.jsx)(n.code,{children:"<TOPIC-ARN-HERE>"})," with your own key. This will set the environment variable only for the current session of your terminal."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:'title="Run terminal command to add the TOPIC_ARN system variable"',children:"export TOPIC_ARN=<TOPIC-ARN-HERE>\n"})}),(0,t.jsxs)(n.p,{children:["To set the environment variable permanently on your system you'll have to edit your ",(0,t.jsx)(n.code,{children:"bash_profile"})," or ",(0,t.jsx)(n.code,{children:".zshenv"})," file depending on which shell are you using."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:'title="Example for setting env variable in .zchenv"',children:"echo 'export TOPIC_ARN=<TOPIC-ARN-HERE>' >> ~/.zshenv\n"})}),(0,t.jsx)(n.h2,{id:"using-visual-studio-code-for-topic_arn",children:"Using Visual Studio Code for TOPIC_ARN"}),(0,t.jsxs)(n.p,{children:["If you're using VSCode that means you'll have a ",(0,t.jsx)(n.code,{children:"launch.json"})," file generated when you try to run the project. In that file there's an ",(0,t.jsx)(n.code,{children:"env"})," section where you can put environment variables for the current session."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="launch.json"',children:'"env": {\n\t...\n    "TOPIC_ARN": "<TOPIC-ARN-HERE>",\n    ...\n}\n'})}),(0,t.jsxs)(n.admonition,{title:"Note on usage",type:"note",children:[(0,t.jsxs)(n.p,{children:["The variable is referenced in ",(0,t.jsx)(n.strong,{children:"appsettings.json"}),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json"',children:'"AwsSnsConfiguration": {\n  "TopicArn": {\n\t\t"Identifier": "TOPIC_ARN",\n\t...\n\t}\n}\n'})})]})]})]})})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var t=s(4164);const i={tabItem:"tabItem_Ymn6"};var o=s(4848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,r),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(6540),i=s(4164),o=s(3104),r=s(6347),a=s(205),l=s(7485),c=s(1682),d=s(679);function u(e){var n,s;return null!=(n=null==(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const i=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,o=h(e),[r,l]=(0,t.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const i=null!=(n=t.find((e=>e.default)))?n:t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:s,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[i,o]=(0,d.Dv)(s);return[i,(0,t.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:i}),j=(()=>{const e=null!=c?c:m;return x({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=s(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function v(e){let{className:n,block:s,selectedValue:t,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),i=a[s].value;i!==t&&(c(n),r(i))},u=e=>{var n;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=l.indexOf(e.currentTarget)+1;s=null!=(t=l[n])?t:l[0];break}case"ArrowLeft":{var i;const n=l.indexOf(e.currentTarget)-1;s=null!=(i=l[n])?i:l[l.length-1];break}}null==(n=s)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.A)("tabs__item",j.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=s?s:n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:i}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function S(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,f.jsx)(S,{...e,children:u(e.children)},String(n))}},3165:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cosmosdb_emulator_1-eb5c6355a0662db45234724a920edac3.png"},7151:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cosmosdb_emulator_3-ddb539bc14733fdf2bc3cb8dc022cf09.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);