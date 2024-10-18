"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4550],{7963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=t(4848),r=t(8453);const o={id:"build_and_run_project_netcore",title:"Build & Run REST API",sidebar_label:"Build & Run REST API",hide_title:!0,hide_table_of_contents:!0,description:"Build and Run .NET Core REST API application",keywords:[".net core","rest api","azure","application insights","build","run","application"]},l=void 0,a={id:"workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore",title:"Build & Run REST API",description:"Build and Run .NET Core REST API application",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api",slug:"/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"build_and_run_project_netcore",title:"Build & Run REST API",sidebar_label:"Build & Run REST API",hide_title:!0,hide_table_of_contents:!0,description:"Build and Run .NET Core REST API application",keywords:[".net core","rest api","azure","application insights","build","run","application"]},sidebar:"docs",previous:{title:"Create REST API project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore"},next:{title:"Create REST API with CQRS project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore"}},c={},s=[{value:"Build and Run the Application",id:"build-and-run-the-application",level:2},{value:"Build and Run Locally",id:"build-and-run-locally",level:3},{value:"Instructions",id:"instructions",level:4},{value:"Build and Run in Docker Container",id:"build-and-run-in-docker-container",level:3},{value:"Instructions for Docker",id:"instructions-for-docker",level:4},{value:"Verify that the Application Has Started",id:"verify-that-the-application-has-started",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"build-and-run-the-application",children:"Build and Run the Application"}),"\n",(0,i.jsx)(n.p,{children:"The API can be configured to run locally or in a Docker container."}),"\n",(0,i.jsx)(n.h3,{id:"build-and-run-locally",children:"Build and Run Locally"}),"\n",(0,i.jsx)(n.h4,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.strong,{children:"Command Prompt"})," or ",(0,i.jsx)(n.strong,{children:"PowerShell"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"<PROJECT-NAME>/simple-api/src/api"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the following command to build the project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet build\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the following command to start the project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet run --project xxENSONOxx.xxSTACKSxx.API/xxENSONOxx.xxSTACKSxx.API.csproj\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"build-and-run-in-docker-container",children:"Build and Run in Docker Container"}),"\n",(0,i.jsx)(n.h4,{id:"instructions-for-docker",children:"Instructions for Docker"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open your ",(0,i.jsx)(n.strong,{children:"terminal"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"<PROJECT-NAME>/simple-api/src/api"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the following command to build a Docker image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -t dotnet-api .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This uses the ",(0,i.jsx)(n.strong,{children:"Dockerfile"})," in this folder to generate the Docker image."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After the Docker image is created, run the following command to start the Docker container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/simple-api/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"verify-that-the-application-has-started",children:"Verify that the Application Has Started"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your web browser."}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"http://localhost:5000/v1/menu",children:"http://localhost:5000/v1/menu"}),". This should return a valid JSON response."]}),"\n",(0,i.jsxs)(n.li,{children:["To view the Open API UI, go to ",(0,i.jsx)(n.a,{href:"http://localhost:5000/swagger/index.html",children:"http://localhost:5000/swagger/index.html"}),".\nThis will show the API endpoints."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(n.p,{children:["If you have changed the domain (originally ",(0,i.jsx)(n.code,{children:"Menu"}),"), the path will reflect that change. For example, if your domain\nis ",(0,i.jsx)(n.code,{children:"Foo"}),", then the path will be ",(0,i.jsx)(n.code,{children:"../v1/foo"})," instead of ",(0,i.jsx)(n.code,{children:"../v1/menu"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(6540);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);