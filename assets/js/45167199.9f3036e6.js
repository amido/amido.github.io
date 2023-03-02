"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7900],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},678:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,p={unversionedId:"nx/workspace/init",id:"nx/workspace/init",isDocsHomePage:!1,title:"init",description:"@ensono-stacks/workspace:init",source:"@site/docs/nx/workspace/init.md",sourceDirName:"nx/workspace",slug:"/nx/workspace/init",permalink:"/docs/nx/workspace/init",tags:[],version:"current",frontMatter:{}},c=[{value:"@ensono-stacks/workspace:init",id:"ensono-stacksworkspaceinit",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[{value:"Commit management",id:"commit-management",children:[],level:4},{value:"Code quality management",id:"code-quality-management",children:[],level:4}],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ensono-stacksworkspaceinit"},"@ensono-stacks/workspace:init"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Set up libraries to manage code & commit quality"),"Set up libraries to manage code & commit quality, keeping projects consistent and will generally be useful in any workspace.",(0,i.kt)("p",null,"Allows you to choose your recommended 3rd party provider options."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Initialise your NX workspace with stacks with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/workspace:init\n")),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,i.kt)("p",null,"Interactive options can instead be passed via the command line:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--husky"),(0,i.kt)("td",{parentName:"tr",align:null},"Install & configure husky"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--commitizen"),(0,i.kt)("td",{parentName:"tr",align:null},"Install & configure commitizen"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--eslint"),(0,i.kt)("td",{parentName:"tr",align:null},"Install & configure eslint"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--pipelineRunner"),(0,i.kt)("td",{parentName:"tr",align:null},"Which pipeline runner to use"),(0,i.kt)("td",{parentName:"tr",align:null},"enum"),(0,i.kt)("td",{parentName:"tr",align:null},"[taskctl, none]"),(0,i.kt)("td",{parentName:"tr",align:null},"taskctl")))),(0,i.kt)("h3",{id:"generator-output"},"Generator Output"),(0,i.kt)("p",null,"Files updated: package.json"),(0,i.kt)("p",null,"Files created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"\u251c\u2500\u2500 workspace root\n\u2502   \u251c\u2500\u2500 .husky\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 commit-msg\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 pre-commit\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 prepare-commit-msg\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 commitlint.config.js\n\u2502   \u251c\u2500\u2500 tsconfig.base.json\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"--pipelineRunner=taskctl")," is passed, the generator will also create a ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"\u251c\u2500\u2500 workspace root\n\u2502   \u251c\u2500\u2500 build\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 azDevOps\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 \u251c\u2500\u2500 azuredevops-runner.yaml - Azure Devops pipeline definition. Consumes `stages` and `vars` files in this directory\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 \u251c\u2500\u2500 azuredevops-stages.yaml - Azure Devops pipeline stages\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 \u251c\u2500\u2500 azuredevops-vars.yaml - Azure Devops variable definitions required by the pipeline\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 taskctl\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 \u251c\u2500\u2500 contexts.yaml - Context definitions for taskctl\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 \u251c\u2500\u2500 tasks.yaml - Task definitions for taskctl to be consumed by the pipeline\n")),(0,i.kt)("p",null,"This sets up a CI/CD pipeline to provide a smooth collaborative workflow."),(0,i.kt)("p",null,"Currently supported pipeline tools are ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/products/devops/"},"Azure Devops")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/taskctl/taskctl"},"taskctl"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," files will only be generated if required project values have been collected from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/nx/nx_stacks#option-1-stacks-cli"},"Stacks CLI")," or through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/nx/nx_stacks#option-2-create-stacks-workspace-generator"},"@ensono-stacks/create-stacks-workspace")," plugin. "))),(0,i.kt)("h4",{id:"commit-management"},"Commit management"),(0,i.kt)("p",null,"Keeping commits well-structured and clear is key to enabling collaboration on a project. This generator initialises three tools to empower consistent commits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/commitizen"},"Commitizen")," - Interactive tool that helps to build constructive messages on commit. The generator adds commitizen config to the package.json:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Commitizen config"',title:'"Commitizen','config"':!0},'"config": {\n    "commitizen": {\n        "path": "@commitlint/cz-commit-lint"\n    }\n  }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://commitlint.js.org/"},"Commitlint")," - Standardised commit message format to make reading commit history easy. The generator installs Commitlint and uses it for commitizen config."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://typicode.github.io/husky/#/"},"Husky")," - Git hook management tool. The generator adds a ",(0,i.kt)("inlineCode",{parentName:"li"},"prepare")," script to ensure husky is always installed:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Husky install script"',title:'"Husky',install:!0,'script"':!0},'"scripts": {\n    "prepare": "husky install"\n  },\n')),(0,i.kt)("p",null,"It also adds commitizen to the git ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare-commit-msg")," script, and Commitlint to the ",(0,i.kt)("inlineCode",{parentName:"p"},"commit-msg"),". This means that you can simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," and get the benefits of both tools."),(0,i.kt)("h4",{id:"code-quality-management"},"Code quality management"),(0,i.kt)("p",null,"Stacks projects use ESLint and Typescript to help maintain code quality. Using the same config in every Stacks project ensures consistency and allows developers to more easily onboard onto new projects."),(0,i.kt)("p",null,"This generator creates config files for both Typescript and ESLint and installs the relevant dependencies.")))}u.isMDXComponent=!0}}]);