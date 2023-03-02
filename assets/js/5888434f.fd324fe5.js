"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5982],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9431:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,u={unversionedId:"nx/next/infra",id:"nx/next/infra",isDocsHomePage:!1,title:"infra",description:"@ensono-stacks/next:infrastructure",source:"@site/docs/nx/next/infra.md",sourceDirName:"nx/next",slug:"/nx/next/infra",permalink:"/docs/nx/next/infra",tags:[],version:"current",frontMatter:{}},p=[{value:"@ensono-stacks/next:infrastructure",id:"ensono-stacksnextinfrastructure",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2},{value:"Understanding the Infrastructure",id:"understanding-the-infrastructure",children:[{value:"build/azDevOps",id:"buildazdevops",children:[],level:3},{value:"taskctl",id:"taskctl",children:[],level:3},{value:"Helm",id:"helm",children:[],level:3},{value:"Versioning",id:"versioning",children:[],level:3},{value:"Package &amp; Push",id:"package--push",children:[],level:3},{value:"Terraform",id:"terraform",children:[],level:3},{value:"OpenTelemetry",id:"opentelemetry",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksnextinfrastructure"},"@ensono-stacks/next:infrastructure"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Configure Infrastructure for your Next project"),(0,l.kt)("p",null,"The infrastructure generator will provide all the necessary tools and setup ready to host your application in a Kubernetes Cluster. You can also choose to opt in to OpenTelemetry auto instrumentation."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"An existing ",(0,l.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next")," application. This may already exist if you agreed to install the infra during next:init generator."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/next:infrastructure\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--project"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the project"),(0,l.kt)("td",{parentName:"tr",align:null},"nameOfApplication"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--openTelemetry"),(0,l.kt)("td",{parentName:"tr",align:null},"Add OpenTelemetry auto instrumentation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 workspace root\n    \u251c\u2500\u2500 apps\n        \u251c\u2500\u2500 myapp\n            \u251c\u2500\u2500 build\n                \u251c\u2500\u2500 helm\n                \u251c\u2500\u2500 terraform\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Creates numerous files under the two folders, helm and terraform. You can then go in and update relevant parts for your use case.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Adds following files to .gitignore"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"'**/.terraform/*',\n'*.tfstate',\n'*.tfstate.*',\n'crash.log',\n'crash.*.log',\n'override.tf',\n'override.tf.json',\n'*_override.tf',\n'*_override.tf.json',\n'.terraformrc',\n'terraform.rc',\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"installs following dev dependencies")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"@nx-tools/nx-container\n@nx-tools/container-metadata\n@jscutlery/semver\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is a requirement for the ",(0,l.kt)("inlineCode",{parentName:"li"},"stacks")," object to exist inside ",(0,l.kt)("inlineCode",{parentName:"li"},"nx.json"),", as this is read to know how to scaffold the infrastructure as code values. This object will already be populated by this point via the previous project scaffolding steps.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"stacks": {\n    "business": {\n      "company": "Amido",\n      "domain": "stacks",\n      "component": "nx"\n    },\n    "domain": {\n      "internal": "test.com",\n      "external": "test.dev"\n    },\n    "cloud": {\n      "platform": "azure",\n      "region": "euw"\n    },\n    "pipeline": "azdo",\n    "terraform": {\n      "group": "terraform-group",\n      "storage": "terraform-storage",\n      "container": "terraform-container"\n    },\n    "vcs": {\n      "type": "github",\n      "url": "remote.git"\n    }\n  }\n')),(0,l.kt)("h2",{id:"understanding-the-infrastructure"},"Understanding the Infrastructure"),(0,l.kt)("p",null,"Azure devops configuration exists within the build folder for each new generated app project. This folder lives at root."),(0,l.kt)("h3",{id:"buildazdevops"},"build/azDevOps"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"azuredevops-runner.yaml")),(0,l.kt)("p",null,"Here you will find the actions for triggering the pipelines. Basically, creating a PR will build as a non prod artefact and merging into main branch will build as a prod artefact, with the relevant parameter specified."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"azuredevops-stages.yaml")),(0,l.kt)("p",null,"This is of course the actual stages of the pipeline that are configured. Most of the detail is done via taskctl, which can found as the last task in the build job."),(0,l.kt)("h3",{id:"taskctl"},"taskctl"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/taskctl/taskctl"},"taskctl")," has been used to enable across different environments and builds. Cross platform, one single syntax."),(0,l.kt)("p",null,"As a rule of thumb, each task here references a target execution via Nx defined inside project.json. The flag --target is used to pass in the appropriate value."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"build/taskctl/tasks.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'helm:\n    description: Lint Helm Charts\n    command:\n      - npx nx affected --base="$BASE_SHA" --target=helm-lint\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"apps/myapp/project.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'"helm-lint": {\n    "executor": "nx:run-commands",\n    "options": {\n        "commands": [\n            {\n                "command": "helm lint",\n                "forwardAllArgs": false\n            }\n        ],\n        "cwd": "apps/myapp/build/helm"\n    }\n}\n')),(0,l.kt)("p",null,"Hence, running the following will trigger the intended execution. The pipeline takes care of this for us."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'npx nx affected --base="$BASE_SHA" --target=helm-lint\n')),(0,l.kt)("p",null,"Following on from this, we can see various steps such as linting, building, running helm, versioning and terraform are subsequently executed."),(0,l.kt)("h3",{id:"helm"},"Helm"),(0,l.kt)("p",null,"The configuration files for Helm Charts live inside the build folder under directory for your app, within the project"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"myproject/apps/myapp/build/helm")),(0,l.kt)("p",null,"In the infra pipeline, the steps for Helm will begin by linting, followed by either an upgrade or install. If the Helm chart is already installed, then an upgrade occurs based on the given command. If it isn't installed, then an installation occurs instead. The command accepts a ",(0,l.kt)("inlineCode",{parentName:"p"},"--atomic")," flag which will allow Helm to roll back to the previous release should a failure during upgrade occur. On install, this would cause the installation to fail if there were any issues."),(0,l.kt)("p",null,"The remaining tasks are then carried out post versioning, covered in the next section."),(0,l.kt)("h3",{id:"versioning"},"Versioning"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jscutlery/semver"},"jscutlery:semver")," is an Nx plugin which has been configured to automate semantic versioning and release in these projects. It follow conventional commits and is also applied to proceeding pipeline targets such as Helm charts."),(0,l.kt)("h3",{id:"package--push"},"Package & Push"),(0,l.kt)("p",null,"After versioning, our build is containerised using Docker and pushed to the set Azure registry."),(0,l.kt)("p",null,"Likewise, the Helm Charts are also packaged and pushed to their respective place in the Azure registry."),(0,l.kt)("p",null,"Finally a Github release is tagged with relevant notes using jscutlery."),(0,l.kt)("h3",{id:"terraform"},"Terraform"),(0,l.kt)("p",null,"This is the last group of tasks to run as part of the infrastructure. See ",(0,l.kt)("inlineCode",{parentName:"p"},"myproject/apps/myapp/build/terraform")," for configuration files."),(0,l.kt)("p",null,"One thing to highlight is that once the Terraform apply task is completed, a Helm install will also be executed. As mentioned earlier, the default behaviour is to deploy a non-production instance when a PR is created and once the PR is merged, then the deployment is made to production."),(0,l.kt)("h3",{id:"opentelemetry"},"OpenTelemetry"),(0,l.kt)("p",null,"OpenTelemetry is a collection of tools, APIs, and SDKs. Use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyse your software\u2019s performance and behaviour."),(0,l.kt)("p",null,"If the generator is used with the openTelemetry option it will add auto instrumentation to the pods, and the application will start exporting default node metrics and traces."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"podAnnotations:\n    instrumentation.opentelemetry.io/inject-nodejs: 'true'\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"OpenTelemetry logs are in an experimental phase, this means there is no node support at the moment, and there is no known ETA either.")))))}d.isMDXComponent=!0}}]);