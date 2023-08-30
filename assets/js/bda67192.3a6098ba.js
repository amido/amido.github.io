"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9933,2774,8668],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),o=t(2389),i=t(9443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(9521),u=t(6010),p={tabItem:"tabItem_vU9c"};function c(e){var n,t,a,o=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:k.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(n=null!=c?c:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=k[0])?void 0:a.props.value;if(null!==f&&!h.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=s(),b=N.tabGroupChoices,y=N.setTabGroupChoices,x=(0,r.useState)(f),w=x[0],z=x[1],T=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=b[m];null!=O&&O!==w&&h.some((function(e){return e.value===O}))&&z(O)}var I=function(e){var n=e.currentTarget,t=T.indexOf(n),a=h[t].value;a!==w&&(C(n),z(a),null!=m&&y(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},h.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,u.Z)("tabs__item",p.tabItem,{"tabs__item--active":w===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:I,onClick:I},null!=t?t:n)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function d(e){var n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},3331:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={},l=void 0,u={unversionedId:"nx/azure-node/app-insights-deployment",id:"nx/azure-node/app-insights-deployment",isDocsHomePage:!1,title:"app-insights-deployment",description:"@ensono-stacks/azure-node:app-insights-deployment",source:"@site/docs/nx/azure-node/app-insights-deployment.md",sourceDirName:"nx/azure-node",slug:"/nx/azure-node/app-insights-deployment",permalink:"/docs/nx/azure-node/app-insights-deployment",tags:[],version:"current",frontMatter:{}},p=[{value:"@ensono-stacks/azure-node:app-insights-deployment",id:"ensono-stacksazure-nodeapp-insights-deployment",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],c={toc:p},d="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"ensono-stacksazure-nodeapp-insights-deployment"},"@ensono-stacks/azure-node:app-insights-deployment"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Configure Deployment & Infra for application insights"),(0,o.kt)("p",null,"This generator will make sure your dockerfile is using the custom server, and your environment variable is set."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Requires an existing application with deployment code already generated for it"),(0,o.kt)("li",{parentName:"ul"},"Requires the APPLICATIONINSIGHTS_CONNECTION_STRING secret to exist")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nx generate @ensono-stacks/azure-node:app-insights-deployment\n")),(0,o.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,o.kt)("p",null,"The following command line arguments are available:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--project"),(0,o.kt)("td",{parentName:"tr",align:null},"Target project name."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--applicationinsightsConnectionString"),(0,o.kt)("td",{parentName:"tr",align:null},"The env variable that stores the app insights connection string."),(0,o.kt)("td",{parentName:"tr",align:null},"string")))),(0,o.kt)("h3",{id:"generator-output"},"Generator Output"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updates ",(0,o.kt)("inlineCode",{parentName:"li"},"targets")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"project.json"),"."),(0,o.kt)("li",{parentName:"ul"},"Updates ",(0,o.kt)("inlineCode",{parentName:"li"},"pipline stages")," to make sure env variables are passed down"),(0,o.kt)("li",{parentName:"ul"},"Updates ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile")," if necessary to make sure it uses the custom server"))))}m.isMDXComponent=!0},3292:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={},l=void 0,u={unversionedId:"nx/azure-node/app-insights",id:"nx/azure-node/app-insights",isDocsHomePage:!1,title:"app-insights",description:"@ensono-stacks/azure-node:app-insights",source:"@site/docs/nx/azure-node/app-insights.md",sourceDirName:"nx/azure-node",slug:"/nx/azure-node/app-insights",permalink:"/docs/nx/azure-node/app-insights",tags:[],version:"current",frontMatter:{}},p=[{value:"@ensono-stacks/azure-node:app-insights",id:"ensono-stacksazure-nodeapp-insights",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],c={toc:p},d="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"ensono-stacksazure-nodeapp-insights"},"@ensono-stacks/azure-node:app-insights"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Installs and configures App Insights in your NodeJS app."),(0,o.kt)("p",null,"This generator will add and configure ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/applicationinsights"},"applicationinsights")," npm package for you."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Requires a NodeJs server for application insights to hook into.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://nx.dev/packages/next/generators/custom-server"},"@nx/next:custom-server")," generator which will have been added to your workspace by ",(0,o.kt)("a",{parentName:"p",href:"/docs/nx/workspace/ensono-stacks-workspace"},"@ensono-stacks/workspace`")," to generate your NodeJS server!"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Requires the APPLICATIONINSIGHTS_CONNECTION_STRING environment variable to be set.")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a known issue with the ",(0,o.kt)("a",{parentName:"p",href:"https://nx.dev/packages/next/generators/custom-server"},(0,o.kt)("inlineCode",{parentName:"a"},"@nx/next:custom-server"))," impacting ",(0,o.kt)("em",{parentName:"p"},"customServerTarget")," when typescript libraries are present in the monorepo. Please check the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nrwl/nx/issues/12032"},"Github Issue")," for the status of this issue."))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nx generate @ensono-stacks/azure-node:app-insights\n")),(0,o.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,o.kt)("p",null,"The following command line arguments are available:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--project"),(0,o.kt)("td",{parentName:"tr",align:null},"Target project name."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--applicationinsightsConnectionString"),(0,o.kt)("td",{parentName:"tr",align:null},"The env variable that stores the app insights connection string."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--server"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to custom server file inside the project."),(0,o.kt)("td",{parentName:"tr",align:null},"string")))),(0,o.kt)("h3",{id:"generator-output"},"Generator Output"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adds ",(0,o.kt)("inlineCode",{parentName:"li"},"applicationinsights")," dependency in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},"Extends ",(0,o.kt)("inlineCode",{parentName:"li"},"main()")," function in the server file to initialise and configure app insights."))))}m.isMDXComponent=!0},8461:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return g}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(3292),s=t(3331),l=t(6396),u=t(8215),p=["components"],c={id:"ensono-stacks-azure-node",title:"@ensono-stacks/azure-node",sidebar_label:"@ensono-stacks/azure-node",description:"Configure NodeJS application for Azure!",keywords:["Nx","monorepo","stacks","ensono","azure-node","generator","executor","appinsights"]},d=void 0,m={unversionedId:"nx/azure-node/ensono-stacks-azure-node",id:"nx/azure-node/ensono-stacks-azure-node",isDocsHomePage:!1,title:"@ensono-stacks/azure-node",description:"Configure NodeJS application for Azure!",source:"@site/docs/nx/azure-node/plugin-information.md",sourceDirName:"nx/azure-node",slug:"/nx/azure-node/ensono-stacks-azure-node",permalink:"/docs/nx/azure-node/ensono-stacks-azure-node",tags:[],version:"current",frontMatter:{id:"ensono-stacks-azure-node",title:"@ensono-stacks/azure-node",sidebar_label:"@ensono-stacks/azure-node",description:"Configure NodeJS application for Azure!",keywords:["Nx","monorepo","stacks","ensono","azure-node","generator","executor","appinsights"]},sidebar:"docs",previous:{title:"@ensono-stacks/next",permalink:"/docs/nx/next/ensono-stacks-next"},next:{title:"@ensono-stacks/rest-client",permalink:"/docs/nx/rest-client/ensono-stacks-rest-client"}},g=[{value:"Setting up @ensono-stacks/azure-node",id:"setting-up-ensono-stacksazure-node",children:[],level:2},{value:"Executors and Generators",id:"executors-and-generators",children:[{value:"Generators",id:"generators",children:[],level:3}],level:2}],k={toc:g},h="wrapper";function v(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)(h,(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configures your NodeJS application to use various Azure services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/applicationinsights"},"App Insights")),(0,o.kt)("li",{parentName:"ul"},"...more to come.")),(0,o.kt)("h2",{id:"setting-up-ensono-stacksazure-node"},"Setting up @ensono-stacks/azure-node"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@ensono-stacks/azure-node")," with the following command:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @ensono-stacks/azure-node@latest\n"))),(0,o.kt)(u.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @ensono-stacks/azure-node@latest\n")))),(0,o.kt)("h2",{id:"executors-and-generators"},"Executors and Generators"),(0,o.kt)("p",null,"To see a list of the plugin capabilities run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nx list @ensono-stacks/azure-node\n")),(0,o.kt)("p",null,"View additional information about a plugin capability through the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/azure-node:[generator-executor-name] --help\n")),(0,o.kt)("h3",{id:"generators"},"Generators"),(0,o.kt)(i.default,{mdxType:"GeneratorAppInsights"}),(0,o.kt)(s.default,{mdxType:"GeneratorAppInsightsDeployment"}))}v.isMDXComponent=!0}}]);