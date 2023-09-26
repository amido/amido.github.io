"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6830,6449],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||c[d]||l;return n?a.createElement(m,o(o({ref:t},g),{},{components:n})):a.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),u=n(7392),g=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function k(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,p=c(e),k=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),f=k[0],h=k[1],N=m({queryString:s,groupId:u}),b=N[0],v=N[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,g.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=y[0],T=y[1],x=function(){var e=null!=b?b:w;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){x&&h(x)}),[x]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),v(e),T(e)}),[v,T,p]),tabValues:p}}var f=n(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,g=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=g.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=g.indexOf(e.currentTarget)+1;n=null!=(a=g[r])?a:g[0];break;case"ArrowLeft":var l,o=g.indexOf(e.currentTarget)-1;n=null!=(l=g[o])?l:g[g.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return g.push(e)},onKeyDown:d,onClick:c},o,{className:(0,l.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function v(e){var t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){var t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},5362:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return g},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(6370),i=n(4866),s=n(5162),u=["components"],g={id:"ensono-stacks-logger",title:"@ensono-stacks/logger",sidebar_label:"@ensono-stacks/logger",description:"Using the logger with Ensono Stacks!",keywords:["Nx","monorepo","stacks","ensono","logger","generator","executor"]},p=void 0,c={unversionedId:"getting_started/logger/ensono-stacks-logger",id:"getting_started/logger/ensono-stacks-logger",title:"@ensono-stacks/logger",description:"Using the logger with Ensono Stacks!",source:"@site/docs/getting_started/logger/plugin-information.md",sourceDirName:"getting_started/logger",slug:"/getting_started/logger/ensono-stacks-logger",permalink:"/docs/getting_started/logger/ensono-stacks-logger",draft:!1,tags:[],version:"current",frontMatter:{id:"ensono-stacks-logger",title:"@ensono-stacks/logger",sidebar_label:"@ensono-stacks/logger",description:"Using the logger with Ensono Stacks!",keywords:["Nx","monorepo","stacks","ensono","logger","generator","executor"]},sidebar:"docs",previous:{title:"@ensono-stacks/cypress",permalink:"/docs/getting_started/cypress/ensono-stacks-cypress"},next:{title:"Introduction",permalink:"/docs/workloads/common/backend/java/intro_java"}},d={},m=[{value:"Setting up @ensono-stacks/logger",id:"setting-up-ensono-stackslogger",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"Executors and Generators",id:"executors-and-generators",level:2},{value:"Generators",id:"generators",level:3}],k={toc:m},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)(f,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@ensono-stacks/logger")," plugin allows you to add industry standard logging functionality to your Ensono Stacks apps."),(0,l.kt)("p",null,"Currently, the following logging libraries are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/winstonjs/winston"},"winston")))),(0,l.kt)("h2",{id:"setting-up-ensono-stackslogger"},"Setting up @ensono-stacks/logger"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"An existing Ensono Stacks workspace."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install the @ensono-stacks/logger with the following command:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @ensono-stacks/logger@latest\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @ensono-stacks/logger@latest\n")))),(0,l.kt)("h2",{id:"executors-and-generators"},"Executors and Generators"),(0,l.kt)("p",null,"To see a list of the plugin capabilities run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx list @ensono-stacks/logger\n")),(0,l.kt)("p",null,"View additional information about a plugin capability through the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/logger:[generator-executor-name] --help\n")),(0,l.kt)("h3",{id:"generators"},"Generators"),(0,l.kt)(o.default,{mdxType:"Winston"}))}h.isMDXComponent=!0},6370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s=void 0,u={unversionedId:"getting_started/logger/winston",id:"getting_started/logger/winston",title:"winston",description:"@ensono-stacks/logger:winston",source:"@site/docs/getting_started/logger/winston.md",sourceDirName:"getting_started/logger",slug:"/getting_started/logger/winston",permalink:"/docs/getting_started/logger/winston",draft:!1,tags:[],version:"current",frontMatter:{}},g={},p=[{value:"@ensono-stacks/logger:winston",id:"ensono-stacksloggerwinston",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3},{value:"Importing the logger into your app",id:"importing-the-logger-into-your-app",level:3},{value:"Log Levels",id:"log-levels",level:3},{value:"Other resources",id:"other-resources",level:3}],c={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksloggerwinston"},"@ensono-stacks/logger:winston"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Add Winston to your project"),(0,l.kt)("p",null,"Generates a new Nx library which contains a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/winstonjs/winston"},"Winston"))," logger instance and associated config."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"An existing Ensono Stacks workspace."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/logger:winston\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Available in interactive prompt?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the generated library"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Add tags to the project (used for linting)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Directory where the project is placed (within Nx libs directory)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--skipFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"Skip formatting files"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--logLevelType"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of log levels that will be used"),(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"cli/syslog/npm"),(0,l.kt)("td",{parentName:"tr",align:null},"npm"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--consoleLogs"),(0,l.kt)("td",{parentName:"tr",align:null},"Output logs to the console"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--fileTransportPath"),(0,l.kt)("td",{parentName:"tr",align:null},"File path used for logs transport"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--httpTransport"),(0,l.kt)("td",{parentName:"tr",align:null},"Add a http transport"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--httpTransportHost"),(0,l.kt)("td",{parentName:"tr",align:null},"Remote host of the HTTP logging endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--httpTransportPort"),(0,l.kt)("td",{parentName:"tr",align:null},"Remote port of the HTTP logging endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--httpTransportPath"),(0,l.kt)("td",{parentName:"tr",align:null},"Remote URI of the HTTP logging endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--httpTransportSSL"),(0,l.kt)("td",{parentName:"tr",align:null},"Use SSL for the HTTP logging endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--streamPath"),(0,l.kt)("td",{parentName:"tr",align:null},"Stream transport path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("p",null,"The generator will create a new application within your libs folder with the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 libs/[libname]\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 index.ts // Contains the Winston configuration and creates the logger instance\n\u2502   \u251c\u2500\u2500 \u251c\u2500\u2500 index.test.ts // Tests for the logger\n\u2502   \u251c\u2500\u2500 .eslintrc.json // ESLint config - extends from workspace config\n\u2502   \u251c\u2500\u2500 jest.config.ts // Jest config - extends from workspace config\n\u2502   \u251c\u2500\u2500 project.json // Nx config file for the library\n\u2502   \u251c\u2500\u2500 tsconfig.json // Main Typescript config for the library - extends workspace config & references the below two tsconfig files\n\u2502   \u251c\u2500\u2500 tsconfig.lib.json // Typescript config for the library's source files (excluding tests)\n\u2502   \u251c\u2500\u2500 tsconfig.spec.json // Typescript config for the library's test files\n\u2502   \u251c\u2500\u2500 README.md // Information on the library and how to run scripts\n\u251c\u2500\u2500 jest.config.ts // Workspace-level Jest config - created if this does not already exist\n\u2514\u2500\u2500 jest.preset.ts // Workspace-leve Jest preset that extends `@nx/jest/preset` - created if this does not already exist.\n\n")),(0,l.kt)("p",null,"Additionally, the following files will be modified"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 nx.json // Adds configuration for Jest tests if this has not already been done by another generator\n\u251c\u2500\u2500 package.json // Adds winston as a dependency\n\u2514\u2500\u2500 tsconfig.base.json // Adds new library into `paths` field\n\n")),(0,l.kt)("h3",{id:"importing-the-logger-into-your-app"},"Importing the logger into your app"),(0,l.kt)("p",null,"Having created a logger using the above ",(0,l.kt)("a",{parentName:"p",href:"#usage"},"command"),", import the Winston logger instance from the newly created library (the import name can be found within the ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.base.json")," files ",(0,l.kt)("inlineCode",{parentName:"p"},"paths")," field) into your application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import logger from '@workspace-name/mynewlogger'\n\nlogger.log({\n    level: 'info',\n    message: 'I love Ensono Stacks!', \n})\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"You would need to change the `@workspace-name` to the name of your workspace\n"))),(0,l.kt)("p",null,"To change how Winston is configured, edit the created library:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=./libs/mynewlogger/src/index.ts",title:"./libs/mynewlogger/src/index.ts"},"const logger = winston.createLogger(logConfiguration);\n\n// Custom transport for non-production\nif (process.env.NODE_ENV !== 'production') {\n    logger.add(new winston.transports.Console({\n        format: winston.format.simple(), \n    })) \n} \n \nexport default logger;\n")),(0,l.kt)("h3",{id:"log-levels"},"Log Levels"),(0,l.kt)("p",null,"Winston provides several ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston#logging-levels"},"log levels")," that you can use to categorize and filter log messages.\nThese log levels are commonly used in many logging libraries and provide a way to prioritize and categorize log messages based on their severity."),(0,l.kt)("p",null,"By default Winston uses the following npm ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston#logging-levels"},"log levels"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"error"),": Used to log errors and exceptions. This log level is for critical issues that require immediate attention.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"warn"),": Indicates a potential issue or warning that does not necessarily disrupt the application but should be noted.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"info"),": This is the default log level and is used for general information about the application's operations. It's often used to log major events or milestones.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"http"),": Logs HTTP related messages, such as host, path and response/request details.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"verbose"),": A step above debug, providing more detailed information but not as noisy as silly or debug.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"debug"),": Used for debugging and providing additional information about the application's state and behavior.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"silly"),": The lowest log level, often used internally for debugging and tracing purposes."))),(0,l.kt)("p",null,"For more information on log level severity please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston#logging-levels"},"log levels")," section of the Winston documentation."),(0,l.kt)("h3",{id:"other-resources"},"Other resources"),(0,l.kt)("p",null,"Documentation for Winston can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"here"),".")))}m.isMDXComponent=!0}}]);