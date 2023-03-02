"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2375],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||k[m]||l;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[u]="string"==typeof t?t:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},4426:function(t,e,n){n.d(e,{Z:function(){return k}});var a=n(7462),r=n(7294),l=n(2389),o=n(9443);var s=function(){var t=(0,r.useContext)(o.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=n(78),p=n(6010),c="tabItem_vU9c";function u(t){var e,n,a,l=t.lazy,o=t.block,u=t.defaultValue,k=t.values,m=t.groupId,d=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:g.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),f=(0,i.lx)(N,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===u?u:null!=(e=null!=u?u:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=g[0])?void 0:a.props.value;if(null!==h&&!N.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=s(),v=w.tabGroupChoices,b=w.setTabGroupChoices,y=(0,r.useState)(h),x=y[0],E=y[1],O=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=v[m];null!=j&&j!==x&&N.some((function(t){return t.value===j}))&&E(j)}var C=function(t){var e=t.currentTarget,n=O.indexOf(e),a=N[n].value;a!==x&&(T(e),E(a),null!=m&&b(m,a))},P=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=O.indexOf(t.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(t.currentTarget)-1;n=O[r]||O[O.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},d)},N.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":x===e}),key:e,ref:function(t){return O.push(t)},onKeyDown:P,onFocus:C,onClick:C},null!=n?n:e)}))),l?(0,r.cloneElement)(g.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function k(t){var e=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},9529:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(4426),n(8215),["components"]),s={id:"ensono-stacks-create-stacks-workspace",title:"@ensono-stacks/create-stacks-workspace",sidebar_label:"@ensono-stacks/create-stacks-workspace",description:"Using the create-stacks-workspace with stacks!",keywords:["NX","monorepo","stacks","ensono","create-stacks-workspace","generator","executor"]},i=void 0,p={unversionedId:"nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace",id:"nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace",isDocsHomePage:!1,title:"@ensono-stacks/create-stacks-workspace",description:"Using the create-stacks-workspace with stacks!",source:"@site/docs/nx/create-stacks-workspace/plugin-information.md",sourceDirName:"nx/create-stacks-workspace",slug:"/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace",permalink:"/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace",tags:[],version:"current",frontMatter:{id:"ensono-stacks-create-stacks-workspace",title:"@ensono-stacks/create-stacks-workspace",sidebar_label:"@ensono-stacks/create-stacks-workspace",description:"Using the create-stacks-workspace with stacks!",keywords:["NX","monorepo","stacks","ensono","create-stacks-workspace","generator","executor"]},sidebar:"docs",previous:{title:"Stacks with Nx",permalink:"/docs/nx/nx_stacks"},next:{title:"@ensono-stacks/workspace",permalink:"/docs/nx/workspace/ensono-stacks-workspace"}},c=[{value:"Setting up @ensono-stacks/create-stacks-workspace",id:"setting-up-ensono-stackscreate-stacks-workspace",children:[{value:"Execution",id:"execution",children:[],level:3},{value:"Presets",id:"presets",children:[],level:3},{value:"Command line arguments",id:"command-line-arguments",children:[],level:3}],level:2}],u={toc:c};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create a new Stacks Nx workspace. Using the create-stacks-workspace script will quickly allow you to initialize a new NX workspace with the Stacks recommended plugins, packages and configuration to get started on a new project quickly."),(0,l.kt)("p",null,"The Stacks ",(0,l.kt)("inlineCode",{parentName:"p"},"create-stacks-workspace")," script will "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run Nx ",(0,l.kt)("a",{parentName:"li",href:"https://nx.dev/packages/nx/documents/create-nx-workspace"},"create-nx-workspace")," command to setup a new NX workspace passing along any command line arguments provided "),(0,l.kt)("li",{parentName:"ul"},"Install any recommended plugin/generators/executors from Stacks. If the ",(0,l.kt)("inlineCode",{parentName:"li"},"next")," preset is selected the ",(0,l.kt)("a",{parentName:"li",href:"/docs/nx/next/ensono-stacks-next"},"Ensono Next plugin")," will be installed. With all presets the ",(0,l.kt)("a",{parentName:"li",href:"/docs/nx/workspace/ensono-stacks-workspace"},"Ensono Workspace Plugin")," will be installed. (see ",(0,l.kt)("a",{parentName:"li",href:"/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace#presets"},"presets"),")"),(0,l.kt)("li",{parentName:"ul"},"Configure the NX workspace. This will involve updating the NX.json file with any information provided from the command line arguments"),(0,l.kt)("li",{parentName:"ul"},"Execute recommended generators from Stacks to initialize the workspace/projects depending on the options provided. "),(0,l.kt)("li",{parentName:"ul"},"Create an e2e test project if this option was selected")),(0,l.kt)("h2",{id:"setting-up-ensono-stackscreate-stacks-workspace"},"Setting up @ensono-stacks/create-stacks-workspace"),(0,l.kt)("h3",{id:"execution"},"Execution"),(0,l.kt)("p",null,"Run the @ensono-stacks/create-stacks-workspace with the following command including any options see ",(0,l.kt)("a",{parentName:"p",href:"/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace#command-line-arguments"},"command line arguments"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx @ensono-stacks/create-stacks-workspace@latest\n")),(0,l.kt)("h3",{id:"presets"},"Presets"),(0,l.kt)("p",null,"On running the script you will be asked for a monorepo preset with the following options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apps              [an empty monorepo with no plugins with a layout that works best for building apps]\nreact             [a monorepo with a single React application]\nnext.js           [a monorepo with a single Next.js application]\n")),(0,l.kt)("p",null,"Each preset will install, configure and run any recommended plugins for that specific preset. For example the next.js preset will run the ",(0,l.kt)("a",{parentName:"p",href:"https://nx.dev/packages/next"},"NX NextJS")," plugin application generator as well as the ",(0,l.kt)("a",{parentName:"p",href:"/docs/nx/next/ensono-stacks-next"},"Ensonso stacks NextJS")," init plugin generator."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You will then be asked which test runner to include for e2e testing:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"none: Creates your application without an e2e test project     "),(0,l.kt)("li",{parentName:"ol"},"playwright: Installs the ",(0,l.kt)("a",{parentName:"li",href:"/docs/nx/playwright/ensono-stacks-playwright"},"@ensono-stacks/playwright")," plugin and creates an e2e test project for your application using playwright.")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"Workspace name (e.g. org name)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"nameOfWorkspace"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--preset"),(0,l.kt)("td",{parentName:"tr",align:null},"Customizes the initial content of your workspace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"apps/ts/next/react-monorepo"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dir"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory to install to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"/path/to/dir"),(0,l.kt)("td",{parentName:"tr",align:null},"./")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--appName"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the application when a preset with pre-generated app is selected"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"nameOfApplication"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--e2eTestRunner"),(0,l.kt)("td",{parentName:"tr",align:null},"Test runner to use in generating an e2e test project"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'["none", "playwright"]'),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nxVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the version of Nx you want installed"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--packageManager"),(0,l.kt)("td",{parentName:"tr",align:null},"Package manager to use"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"pnpm/npm/yarn"),(0,l.kt)("td",{parentName:"tr",align:null},"npm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--interactive"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable interactive mode"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--overwrite"),(0,l.kt)("td",{parentName:"tr",align:null},"Overwrite the target directory on install"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--cloud.platform"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cloud provider"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"azure"),(0,l.kt)("td",{parentName:"tr",align:null},"azure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--cloud.region"),(0,l.kt)("td",{parentName:"tr",align:null},"Region name where resources should be created"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"euw")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--pipeline"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the pipeline provider"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"azdo"),(0,l.kt)("td",{parentName:"tr",align:null},"azdo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--business.company"),(0,l.kt)("td",{parentName:"tr",align:null},"Company Name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--business.domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Company Scope or area"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--business.component"),(0,l.kt)("td",{parentName:"tr",align:null},"Company component being worked on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--domain.internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal domain for nonprod resources"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--domain.external"),(0,l.kt)("td",{parentName:"tr",align:null},"External domain for prod resources"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--terraform.group"),(0,l.kt)("td",{parentName:"tr",align:null},"Terraform state group name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--terraform.container"),(0,l.kt)("td",{parentName:"tr",align:null},"Terraform storage container name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--terraform.storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Terraform storage name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--vcs.type"),(0,l.kt)("td",{parentName:"tr",align:null},"Version control provider"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"azdo/github"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--vcs.url"),(0,l.kt)("td",{parentName:"tr",align:null},"Version control remote url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);