"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2893],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4590:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,p={unversionedId:"nx/next/init-deployment",id:"nx/next/init-deployment",isDocsHomePage:!1,title:"init-deployment",description:"@ensono-stacks/next:init-deployment",source:"@site/docs/nx/next/init-deployment.md",sourceDirName:"nx/next",slug:"/nx/next/init-deployment",permalink:"/docs/nx/next/init-deployment",tags:[],version:"current",frontMatter:{}},u=[{value:"@ensono-stacks/next:init-deployment",id:"ensono-stacksnextinit-deployment",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2},{value:"Understanding the Infrastructure",id:"understanding-the-infrastructure",children:[{value:"build/azDevOps",id:"buildazdevops",children:[],level:3},{value:"taskctl",id:"taskctl",children:[],level:3},{value:"Helm",id:"helm",children:[],level:3},{value:"Versioning",id:"versioning",children:[],level:3},{value:"Package &amp; Push",id:"package--push",children:[],level:3},{value:"Terraform",id:"terraform",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksnextinit-deployment"},"@ensono-stacks/next:init-deployment"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Configure Deployment & Infra for your Next project"),(0,l.kt)("p",null,"The deployment generator will provide all the necessary tools and setup ready to host your application in a Kubernetes Cluster."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"An existing ",(0,l.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next")," application. This may already exist if you agreed to install the infra during next:init generator."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/next:init-deployment\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--project"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the project"),(0,l.kt)("td",{parentName:"tr",align:null},"nameOfApplication"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 workspace root\n    \u251c\u2500\u2500 apps\n        \u251c\u2500\u2500 myapp\n            \u251c\u2500\u2500 deploy\n                \u251c\u2500\u2500 helm\n                \u251c\u2500\u2500 terraform\n            \u251c\u2500\u2500 Dockerfile\n    \u251c\u2500\u2500 libs\n        \u251c\u2500\u2500 next-helm-chart\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Creates numerous files; main helm config as a library ",(0,l.kt)("inlineCode",{parentName:"p"},"next-helm-chart")," under libs and terraform config under the ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," folder within the app. You can then go in and update relevant parts for your use case.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Adds following files to .gitignore"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"'**/.terraform/*',\n'*.tfstate',\n'*.tfstate.*',\n'crash.log',\n'crash.*.log',\n'override.tf',\n'override.tf.json',\n'*_override.tf',\n'*_override.tf.json',\n'.terraformrc',\n'terraform.rc',\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"installs following dev dependencies")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"@nx-tools/nx-container\n@nx-tools/container-metadata\n@jscutlery/semver\n")),(0,l.kt)("h2",{id:"understanding-the-infrastructure"},"Understanding the Infrastructure"),(0,l.kt)("p",null,"Azure devops configuration exists within the build folder for each new generated app project. This folder lives at root."),(0,l.kt)("h3",{id:"buildazdevops"},"build/azDevOps"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"azuredevops-runner.yaml")),(0,l.kt)("p",null,"Here you will find the actions for triggering the pipelines. Basically, creating a PR will build as a non prod artefact and merging into main branch will build as a prod artefact, with the relevant parameter specified."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"azuredevops-stages.yaml")),(0,l.kt)("p",null,"This is of course the actual stages of the pipeline that are configured. Most of the detail is done via taskctl, which can found as the last task in the build job."),(0,l.kt)("h3",{id:"taskctl"},"taskctl"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/taskctl/taskctl"},"taskctl")," has been used to enable across different environments and builds. Cross platform, one single syntax."),(0,l.kt)("p",null,"As a rule of thumb, each task here references a target execution via Nx defined inside project.json. The flag --target is used to pass in the appropriate value."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"build/taskctl/tasks.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'helm:\n  description: Lint Helm Charts\n  command:\n    - npx nx affected --base="$BASE_SHA" --target=lint\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"apps/myapp/project.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'"lint":\n  {\n    "executor": "nx:run-commands",\n    "options":\n      {\n        "commands": [{ "command": "helm lint", "forwardAllArgs": false }],\n        "cwd": "libs/next-helm-chart/build/helm",\n      },\n  }\n')),(0,l.kt)("h3",{id:"helm"},"Helm"),(0,l.kt)("p",null,"The configuration files for Helm Charts live inside the libs folder under directory for your app, contained as its own library"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"myproject/apps/myapp/libs/next-helm-chart/build/helm")),(0,l.kt)("p",null,"As a rule of thumb, target execution is defined via Nx inside project.json. The flag --target is used to pass in the appropriate values for each intended target run."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"libs/next-helm-chart/project.json")),(0,l.kt)("p",null,"Hence, running the following will trigger the intended execution. The pipeline takes care of this for us."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'npx nx affected --base="$BASE_SHA" --target=lint\n')),(0,l.kt)("p",null,"In the infra pipeline, the steps for Helm will begin by linting, followed by either an upgrade or install. If the Helm chart is already installed, then an upgrade occurs based on the given command. If it isn't installed, then an installation occurs instead. The command accepts a ",(0,l.kt)("inlineCode",{parentName:"p"},"--atomic")," flag which will allow Helm to roll back to the previous release should a failure during upgrade occur. On install, this would cause the installation to fail if there were any issues."),(0,l.kt)("p",null,"The remaining tasks are then carried out post versioning, covered in the next section."),(0,l.kt)("h3",{id:"versioning"},"Versioning"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jscutlery/semver"},"jscutlery:semver")," is an Nx plugin which has been configured to automate semantic versioning and release in these projects. It follow conventional commits and is also applied to proceeding pipeline targets such as Helm charts."),(0,l.kt)("h3",{id:"package--push"},"Package & Push"),(0,l.kt)("p",null,"After versioning, our build is containerised using Docker and pushed to the set Azure registry."),(0,l.kt)("p",null,"Likewise, the Helm Charts are also packaged and pushed to their respective place in the Azure registry."),(0,l.kt)("p",null,"Finally a Github release is tagged with relevant notes using jscutlery."),(0,l.kt)("h3",{id:"terraform"},"Terraform"),(0,l.kt)("p",null,"This is the last group of tasks to run as part of the infrastructure. See ",(0,l.kt)("inlineCode",{parentName:"p"},"myproject/apps/myapp/deploy/terraform")," for configuration files."),(0,l.kt)("p",null,"One thing to highlight is that once the Terraform apply task is completed, a Helm install will also be executed. As mentioned earlier, the default behaviour is to deploy a non-production instance when a PR is created and once the PR is merged, then the deployment is made to production.")))}d.isMDXComponent=!0}}]);