"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8241],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},968:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,c={unversionedId:"getting_started/workspace/init",id:"getting_started/workspace/init",title:"init",description:"@ensono-stacks/workspace:init",source:"@site/docs/getting_started/workspace/init.md",sourceDirName:"getting_started/workspace",slug:"/getting_started/workspace/init",permalink:"/docs/getting_started/workspace/init",draft:!1,tags:[],version:"current",frontMatter:{}},m={},p=[{value:"@ensono-stacks/workspace:init",id:"ensono-stacksworkspaceinit",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3},{value:"Commit management",id:"commit-management",level:4},{value:"Code quality management",id:"code-quality-management",level:4}],u={toc:p},d="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ensono-stacksworkspaceinit"},"@ensono-stacks/workspace:init"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Set up libraries to manage code & commit quality"),"Set up libraries to manage code & commit quality, keeping projects consistent and will generally be useful in any workspace.",(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To scaffold your workspace with FE and deployment/infrastructure there is a dependency on the ",(0,i.kt)("inlineCode",{parentName:"p"},"stacks")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"executedGenerators")," fields within ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json"),".\nIf you have already run the Ensono Stacks CLI these fields will be automatically populated. Alternatively, if you created your workspace with ",(0,i.kt)("inlineCode",{parentName:"p"},"create-stacks-workspace"),", these fields will have been populated if you passed in the relevant CLI arguments.\nIf you are Stackifying an existing Nx workspace, this must be added manually - an example ",(0,i.kt)("inlineCode",{parentName:"p"},"stacks")," field can be seen here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stacks": {\n    "config": {\n      "business": {\n        "company": "Ensono",\n        "domain": "stacks",\n        "component": "nx"\n      },\n      "domain": {\n        "internal": "test.com",\n        "external": "test.dev"\n      },\n      "cloud": {\n        "platform": "azure",\n        "region": "euw"\n      },\n      "pipeline": "azdo",\n      "terraform": {\n        "group": "terraform-group",\n        "storage": "terraform-storage",\n        "container": "terraform-container"\n      },\n      "vcs": {\n        "type": "github",\n        "url": "remote.git"\n      }\n    },\n    "executedGenerators": {\n      "project": {},\n      "workspace": []\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/stackscli/about"},"Ensono Stacks CLI documentation")," for information on each of these values."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Initialise your NX workspace with Ensono Stacks with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/workspace:init\n")),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,i.kt)("p",null,"Interactive options can instead be passed via the command line:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--husky"),(0,i.kt)("td",{parentName:"tr",align:null},"Install & configure husky"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--commitizen"),(0,i.kt)("td",{parentName:"tr",align:null},"Install & configure commitizen"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--eslint"),(0,i.kt)("td",{parentName:"tr",align:null},"Install & configure eslint"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,i.kt)("td",{parentName:"tr",align:null},"true")))),(0,i.kt)("h3",{id:"generator-output"},"Generator Output"),(0,i.kt)("p",null,"Files updated: package.json"),(0,i.kt)("p",null,"Files created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"\u251c\u2500\u2500 workspace root\n\u2502   \u251c\u2500\u2500 .husky\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 commit-msg\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 pre-commit\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 prepare-commit-msg\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 commitlint.config.js\n\u2502   \u251c\u2500\u2500 tsconfig.base.json\n")),(0,i.kt)("h4",{id:"commit-management"},"Commit management"),(0,i.kt)("p",null,"Keeping commits well-structured and clear is key to enabling collaboration on a project. This generator initialises three tools to empower consistent commits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/commitizen"},"Commitizen")," - Interactive tool that helps to build constructive messages on commit. The generator adds commitizen config to the package.json:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Commitizen config"',title:'"Commitizen','config"':!0},'"config": {\n    "commitizen": {\n        "path": "@commitlint/cz-commit-lint"\n    }\n  }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://commitlint.js.org/"},"Commitlint")," - Standardised commit message format to make reading commit history easy. The generator installs Commitlint and uses it for commitizen config."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://typicode.github.io/husky/#/"},"Husky")," - Git hook management tool. The generator adds a ",(0,i.kt)("inlineCode",{parentName:"li"},"prepare")," script to ensure husky is always installed:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Husky install script"',title:'"Husky',install:!0,'script"':!0},'"scripts": {\n    "prepare": "husky install"\n  },\n')),(0,i.kt)("p",null,"It also adds commitizen to the git ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare-commit-msg")," script, and Commitlint to the ",(0,i.kt)("inlineCode",{parentName:"p"},"commit-msg"),". This means that you can simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," and get the benefits of both tools."),(0,i.kt)("h4",{id:"code-quality-management"},"Code quality management"),(0,i.kt)("p",null,"Ensono Stacks projects use ESLint and Typescript to help maintain code quality. Using the same config in every Ensono Stacks project ensures consistency and allows developers to more easily onboard onto new projects."),(0,i.kt)("p",null,"This generator creates config files for both Typescript and ESLint and installs the relevant dependencies.")))}k.isMDXComponent=!0}}]);