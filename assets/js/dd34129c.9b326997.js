"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1194],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1332:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},8387:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),i=t(7294),o=t(2389),r=t(8578);var s=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(7673),u=t(6010),c="tabItem_2kG2";function p(e){var n,t,a,o=e.lazy,r=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var S=s(),b=S.tabGroupChoices,x=S.setTabGroupChoices,N=(0,i.useState)(f),E=N[0],y=N[1],w=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var U=b[m];null!=U&&U!==E&&g.some((function(e){return e.value===U}))&&y(U)}var _=function(e){var n=e.currentTarget,t=w.indexOf(n),a=g[t].value;a!==E&&(C(n),y(a),null!=m&&x(m,a))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var i=w.indexOf(e.currentTarget)-1;t=w[i]||w[w.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},h)},g.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":E===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:A,onFocus:_,onClick:_},null!=t?t:n)}))),o?(0,i.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,o.Z)();return i.createElement(p,(0,a.Z)({key:String(n)},e))}},8578:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},4283:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=t(8387),s=t(1332),l=["components"],u={id:"configure_project_netcore",title:"Configure REST API with CQRS project",hide_title:!0,sidebar_label:"Configure REST API with CQRS project",hide_table_of_contents:!0,description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",keywords:[".net core","rest api","cqrs","azure","application insights","cosmos db","build","run","application","configure","docker"]},c=void 0,p={unversionedId:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",id:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",isDocsHomePage:!1,title:"Configure REST API with CQRS project",description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api_cqrs",slug:"/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",tags:[],version:"current",frontMatter:{id:"configure_project_netcore",title:"Configure REST API with CQRS project",hide_title:!0,sidebar_label:"Configure REST API with CQRS project",hide_table_of_contents:!0,description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",keywords:[".net core","rest api","cqrs","azure","application insights","cosmos db","build","run","application","configure","docker"]},sidebar:"docs",previous:{title:"Create REST API with CQRS project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore"},next:{title:"Build & Run REST API with CQRS",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore"}},d=[{value:"Configuring the project",id:"configuring-the-project",children:[{value:"Configuring Cosmos DB",id:"configuring-cosmos-db",children:[],level:3}],level:2},{value:"Using Powershell for COSMOSDB_KEY",id:"using-powershell-for-cosmosdb_key",children:[],level:2},{value:"Using Visual Studio for COSMOSDB_KEY",id:"using-visual-studio-for-cosmosdb_key",children:[],level:2},{value:"Using VSCode for COSMOSDB_KEY",id:"using-vscode-for-cosmosdb_key",children:[],level:2},{value:"Using terminal for COSMOSDB_KEY",id:"using-terminal-for-cosmosdb_key",children:[],level:2},{value:"Using Visual Studio Code for COSMOSDB_KEY",id:"using-visual-studio-code-for-cosmosdb_key",children:[{value:"Configuring AWS SQS",id:"configuring-aws-sqs",children:[],level:3}],level:2},{value:"Using Powershell for SQS-QUEUE-URL",id:"using-powershell-for-sqs-queue-url",children:[],level:2},{value:"Using Visual Studio for SQS-QUEUE-URL",id:"using-visual-studio-for-sqs-queue-url",children:[],level:2},{value:"Using VSCode for SQS-QUEUE-URL",id:"using-vscode-for-sqs-queue-url",children:[],level:2},{value:"Using terminal for SQS-QUEUE-URL",id:"using-terminal-for-sqs-queue-url",children:[],level:2},{value:"Using Visual Studio Code for SQS-QUEUE-URL",id:"using-visual-studio-code-for-sqs-queue-url",children:[],level:2}],m={toc:d};function h(e){var n=e.components,u=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,u,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuring-the-project"},"Configuring the project"),(0,o.kt)("p",null,"All security sensitive information is passed as a secret in our configuration. We have a library called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-dotnet-packages-configuration"},"Amido.Stacks.Configuration")," that reads secrets from the environment before the application starts and makes the needed substitutions in the configuration files."),(0,o.kt)("h3",{id:"configuring-cosmos-db"},"Configuring Cosmos DB"),(0,o.kt)("p",null,"The project can be set to use Azure ",(0,o.kt)("strong",{parentName:"p"},"Cosmos DB")," or an ",(0,o.kt)("strong",{parentName:"p"},"InMemory")," database to store the example application data. The ",(0,o.kt)("strong",{parentName:"p"},"InMemory")," database works out of the box and no further setup is required aside from creating your project. Depending on your desired setup you'll have to provide some or all of the configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file section showed below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"CosmosDb": {\n    "DatabaseAccountUri": "<Add CosmosDB Account URI here>",\n    "DatabaseName": "Stacks",\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n    ...\n    }\n}\n')),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Using the Cosmos DB Emulator to run the database locally"),(0,o.kt)("div",null,(0,o.kt)("p",null,"For running on local environments (Windows/Linux/macOS) please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21"},"instructions provided by Microsoft.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the local Cosmos DB URL in your browser as indicated in the documentation given in the above link.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Identify the ",(0,o.kt)("strong",{parentName:"p"},"Primary Key"),". Please refer to the field in the screenshot below. ",(0,o.kt)("img",{alt:"CosmosDB",src:t(8141).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cosmos DB has to contain a fixed structure depending on your project. Create a collection ",(0,o.kt)("inlineCode",{parentName:"p"},"Stacks")," (this corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseName")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file) with a container id ",(0,o.kt)("inlineCode",{parentName:"p"},"Menu")," (name of domain object) and the partition key ",(0,o.kt)("inlineCode",{parentName:"p"},"/id"),". Keep in mind that if you've changed the domain (default being ",(0,o.kt)("inlineCode",{parentName:"p"},"Menu"),"), you have to supply your own domain when creating the container."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CosmosDB",src:t(2309).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"CosmosDb environment variable")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To interact with CosmosDb there is a environment variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"COSMOSDB_KEY")," that needs to be set before running your application. This variable holds the value of the ",(0,o.kt)("strong",{parentName:"p"},"Primary Key")," you got from step 2. Please see the next section on details of how to set it on your machine."))))),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Setting the COSMOSDB_KEY environment variable"),(0,o.kt)("div",null,(0,o.kt)(r.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Unix",value:"unix"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,"There are a couple of different ways to set the environment variable"),(0,o.kt)("h2",{id:"using-powershell-for-cosmosdb_key"},"Using Powershell for COSMOSDB_KEY"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Powershell")," with administrator privileges to execute the command below. Substitute ",(0,o.kt)("inlineCode",{parentName:"p"},"<PRIMARY-KEY-HERE>")," with your own key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Run PS command to add the COSMOSDB_KEY system variable"',title:'"Run',PS:!0,command:!0,to:!0,add:!0,the:!0,COSMOSDB_KEY:!0,system:!0,'variable"':!0},'[Environment]::SetEnvironmentVariable("COSMOSDB_KEY", "<PRIMARY-KEY-HERE>", [EnvironmentVariableTarget]::Machine)\n')),(0,o.kt)("h2",{id:"using-visual-studio-for-cosmosdb_key"},"Using Visual Studio for COSMOSDB_KEY"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the project in Visual Studio. The solution file is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/api/xxAMIDOxx.xxSTACKSxx.API.sln"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("strong",{parentName:"p"},"COSMOSDB_KEY")," environment variable to the ",(0,o.kt)("strong",{parentName:"p"},"launchSettings.json")," file generated by Visual Studio and add the Cosmos DB Primary Key value."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/properties/launchSettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/properties/launchSettings.json"'},'{\n  ...\n  "profiles": {\n    "xxAMIDOxx.xxSTACKSxx.API": {\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development",\n        "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>"\n        ...\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"using-vscode-for-cosmosdb_key"},"Using VSCode for COSMOSDB_KEY"),(0,o.kt)("p",null,"If you're using VSCode that means you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file generated when you try to run the project. In that file there's an ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," section where you can put environment variables for the current session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'"env": {\n    ...\n    "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>",\n    ...\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note on usage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The variable is referenced in ",(0,o.kt)("strong",{parentName:"p"},"appsettings.json"),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"CosmosDb": {\n    ...\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n        ...\n    }\n}\n'))))),(0,o.kt)(s.Z,{value:"unix",mdxType:"TabItem"},(0,o.kt)("p",null,"There are a couple of different ways to set the environment variable"),(0,o.kt)("h2",{id:"using-terminal-for-cosmosdb_key"},"Using terminal for COSMOSDB_KEY"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," to execute the command below. Substitute ",(0,o.kt)("inlineCode",{parentName:"p"},"<PRIMARY-KEY-HERE>")," with your own key. This will set the environment variable only for the current session of your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run terminal command to add the COSMOSDB_KEY system variable"',title:'"Run',terminal:!0,command:!0,to:!0,add:!0,the:!0,COSMOSDB_KEY:!0,system:!0,'variable"':!0},"export COSMOSDB_KEY=<PRIMARY-KEY-HERE>\n")),(0,o.kt)("p",null,"To set the environment variable permanently on your system you'll have to edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"bash_profile")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".zshenv")," file depending on which shell are you using."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example for setting env variable in .zchenv"',title:'"Example',for:!0,setting:!0,env:!0,variable:!0,in:!0,'.zchenv"':!0},"echo 'export COSMOSDB_KEY=<PRIMARY-KEY-HERE>' >> ~/.zshenv\n")),(0,o.kt)("h2",{id:"using-visual-studio-code-for-cosmosdb_key"},"Using Visual Studio Code for COSMOSDB_KEY"),(0,o.kt)("p",null,"If you're using VSCode that means you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file generated when you try to run the project. In that file there's an ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," section where you can put environment variables for the current session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'"env": {\n    ...\n    "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>",\n    ...\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note on usage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The variable is referenced in ",(0,o.kt)("strong",{parentName:"p"},"appsettings.json"),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"CosmosDb": {\n    ...\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n        ...\n    }\n}\n')))))))),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Connecting to deployed Cosmos DB instance"),(0,o.kt)("div",null,"When choosing not to run the CosmosDB locally via the emulator, further configuration needs to be changed in the `appsettings.json` file.",(0,o.kt)("p",null,"Aside from setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"COSMOSDB_KEY")," as an environment variable (described in the previous section), you'll have to set the CosmosDB URI parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseAccountUri")," as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"CosmosDb": {\n    "DatabaseAccountUri": "<Add CosmosDB Account URI here>",\n    "DatabaseName": "Stacks",\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n    ...\n    }\n}\n')))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"configuring-aws-sqs"},"Configuring AWS SQS"),(0,o.kt)("p",null,"The project can be set to use AWS ",(0,o.kt)("strong",{parentName:"p"},"SQS")," to publish and consume events. In order for SQS to work out the box with AWS you will have to provide some configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file section showed below."),(0,o.kt)("p",null,"You will also be required to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"SQS_QUEUE_URL")," as an environment variable (see section ",(0,o.kt)("strong",{parentName:"p"},"Setting the SQS_QUEUE_URL environment variable"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"AwsSqsConfiguration": {\n  "QueueUrl": {\n        "Identifier": "SQS_QUEUE_URL",\n    ...\n    }\n}\n')),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Using the AWS SQS to publish messages"),(0,o.kt)("div",null,(0,o.kt)("p",null,"For running on local environments you will still require a version of AWS SQS running on AWS cloud."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the SQS Queue in your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Identify the ",(0,o.kt)("strong",{parentName:"p"},"URL"),". This is located within: Amazon SQS --\x3e Queues --\x3e queue-name (e.g. stacks-dev) --\x3e URL")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the ",(0,o.kt)("strong",{parentName:"p"},"URL")," obtained to the environmental variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"SQS_QUEUE_URL")," (Please see the next section on details of how to set it on your machine).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run your application and carry out some event worth actions (create domain objects, retrieve domain objects, delete domain objects etc...). Any time you carry out an action which should raise an event, there will be an event raised within your AWS SQS queue.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the SQS Queue in your browser and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Send and receive messages"),". Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Poll for messages")," and see all the events raised."))))),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Setting the SQS_QUEUE_URL environment variable"),(0,o.kt)("div",null,(0,o.kt)(r.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Unix",value:"unix"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,"There are a couple of different ways to set the environment variable"),(0,o.kt)("h2",{id:"using-powershell-for-sqs-queue-url"},"Using Powershell for SQS-QUEUE-URL"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Powershell")," with administrator privileges to execute the command below. Substitute ",(0,o.kt)("inlineCode",{parentName:"p"},"<SQS-QUEUE-URL-HERE>")," with your own key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Run PS command to add the SQS_QUEUE_URL system variable"',title:'"Run',PS:!0,command:!0,to:!0,add:!0,the:!0,SQS_QUEUE_URL:!0,system:!0,'variable"':!0},'[Environment]::SetEnvironmentVariable("SQS_QUEUE_URL", "<SQS-QUEUE-URL-HERE>", [EnvironmentVariableTarget]::Machine)\n')),(0,o.kt)("h2",{id:"using-visual-studio-for-sqs-queue-url"},"Using Visual Studio for SQS-QUEUE-URL"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the project in Visual Studio. The solution file is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/api/xxAMIDOxx.xxSTACKSxx.API.sln"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("strong",{parentName:"p"},"COSMOSDB_KEY")," environment variable to the ",(0,o.kt)("strong",{parentName:"p"},"launchSettings.json")," file generated by Visual Studio and add the Cosmos DB Primary Key value."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/properties/launchSettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/properties/launchSettings.json"'},'{\n  ...\n  "profiles": {\n    "xxAMIDOxx.xxSTACKSxx.API": {\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development",\n        "SQS_QUEUE_URL": "<SQS-QUEUE-URL-HERE>"\n        ...\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"using-vscode-for-sqs-queue-url"},"Using VSCode for SQS-QUEUE-URL"),(0,o.kt)("p",null,"If you're using VSCode that means you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file generated when you try to run the project. In that file there's an ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," section where you can put environment variables for the current session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'"env": {\n    ...\n    "SQS_QUEUE_URL": "<SQS-QUEUE-URL-HERE>",\n    ...\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note on usage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The variable is referenced in ",(0,o.kt)("strong",{parentName:"p"},"appsettings.json"),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"AwsSqsConfiguration": {\n  "QueueUrl": {\n        "Identifier": "SQS_QUEUE_URL",\n    ...\n    }\n}\n'))))),(0,o.kt)(s.Z,{value:"unix",mdxType:"TabItem"},(0,o.kt)("p",null,"There are a couple of different ways to set the environment variable"),(0,o.kt)("h2",{id:"using-terminal-for-sqs-queue-url"},"Using terminal for SQS-QUEUE-URL"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," to execute the command below. Substitute ",(0,o.kt)("inlineCode",{parentName:"p"},"<SQS-QUEUE-URL-HERE>")," with your own key. This will set the environment variable only for the current session of your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run terminal command to add the SQS_QUEUE_URL system variable"',title:'"Run',terminal:!0,command:!0,to:!0,add:!0,the:!0,SQS_QUEUE_URL:!0,system:!0,'variable"':!0},"export SQS_QUEUE_URL=<SQS-QUEUE-URL-HERE>\n")),(0,o.kt)("p",null,"To set the environment variable permanently on your system you'll have to edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"bash_profile")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".zshenv")," file depending on which shell are you using."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example for setting env variable in .zchenv"',title:'"Example',for:!0,setting:!0,env:!0,variable:!0,in:!0,'.zchenv"':!0},"echo 'export SQS_QUEUE_URL=<SQS-QUEUE-URL-HERE>' >> ~/.zshenv\n")),(0,o.kt)("h2",{id:"using-visual-studio-code-for-sqs-queue-url"},"Using Visual Studio Code for SQS-QUEUE-URL"),(0,o.kt)("p",null,"If you're using VSCode that means you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file generated when you try to run the project. In that file there's an ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," section where you can put environment variables for the current session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'"env": {\n    ...\n    "SQS_QUEUE_URL": "<SQS-QUEUE-URL-HERE>",\n    ...\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note on usage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The variable is referenced in ",(0,o.kt)("strong",{parentName:"p"},"appsettings.json"),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"AwsSqsConfiguration": {\n  "QueueUrl": {\n        "Identifier": "SQS_QUEUE_URL",\n    ...\n    }\n}\n')))))))))}h.isMDXComponent=!0},2309:function(e,n,t){n.Z=t.p+"assets/images/cosmosdb_emulator_1-eb5c6355a0662db45234724a920edac3.png"},8141:function(e,n,t){n.Z=t.p+"assets/images/cosmosdb_emulator_3-ddb539bc14733fdf2bc3cb8dc022cf09.png"}}]);