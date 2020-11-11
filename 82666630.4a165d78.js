(window.webpackJsonp=window.webpackJsonp||[]).push([[73,86],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(210)),i=n(216),l=n(217),c=n(50),s={id:"getting_started_csr",title:"Getting Started",sidebar_label:"Getting Started",hide_title:!1,hide_table_of_contents:!1},u={unversionedId:"workloads/azure/frontend/CSR/getting_started_csr",id:"workloads/azure/frontend/CSR/getting_started_csr",isDocsHomePage:!1,title:"Getting Started",description:"Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command.",source:"@site/docs/workloads/azure/frontend/CSR/getting_started_csr.md",slug:"/workloads/azure/frontend/CSR/getting_started_csr",permalink:"/stacks/docs/workloads/azure/frontend/CSR/getting_started_csr",version:"current",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"State Management",permalink:"/stacks/docs/workloads/azure/frontend/state-management"},next:{title:"Api Definition",permalink:"/stacks/docs/workloads/azure/frontend/CSR/api_definition_crs"}},b=[{value:"Bootstrap your framework",id:"bootstrap-your-framework",children:[{value:"Get developing in just a few questions",id:"get-developing-in-just-a-few-questions",children:[]}]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Get developing",id:"get-developing",children:[{value:"Development",id:"development",children:[]},{value:"Production",id:"production",children:[]}]},{value:"Customising",id:"customising",children:[]},{value:"Feedback",id:"feedback",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command."),Object(o.b)("p",null,"Oh, and they come complete with infrastructure as code so you can deploy on your cloud of choice."),Object(o.b)("p",null,"Brilliant."),Object(o.b)("h2",{id:"bootstrap-your-framework"},"Bootstrap your framework"),Object(o.b)("p",null,"The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Run to start configuring your solution"',title:'"Run',to:!0,start:!0,configuring:!0,your:!0,'solution"':!0}),"npx @amidostacks/scaffolding-cli run -i\n")),Object(o.b)("h3",{id:"get-developing-in-just-a-few-questions"},"Get developing in just a few questions"),Object(o.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(o.b)("p",null,"Before you can start developing you will need to replace your environment variables with the appropriated values.\nThis values will be automatically picked up and used by the underlying server and web client."),Object(o.b)(i.a,{defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("div",null,Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set NODE_ENV=development\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set PORT=3000\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'set NODE_ENV: process.env.NODE_ENV || "development"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set PUBLIC_URL: publicUrl\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set APP_BASE_PATH: ## Stacks base path\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set MENU_API_URL: ## Used by the internal API fetcher\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Instrumentation Key"',title:'"Instrumentation','Key"':!0}),"set APPINSIGHTS_INSTRUMENTATIONKEY:{Set instrumentation hey here}\n")))),Object(o.b)(l.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("div",null,Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export NODE_ENV=development\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export PORT=<Set Port here>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'export NODE_ENV: process.env.NODE_ENV || "development"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export PUBLIC_URL: publicUrl\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export APP_BASE_PATH: ## Stacks base path\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export MENU_API_URL: ## Used by the internal API fetcher\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Instrumentation Key"',title:'"Instrumentation','Key"':!0}),"export APPINSIGHTS_INSTRUMENTATIONKEY:<Instrumentation Key here>\n"))))),Object(o.b)("h2",{id:"get-developing"},"Get developing"),Object(o.b)("p",null,"At the end of bootstrapping your example framework, you will have an output that will contain all the:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"dependencies"),Object(o.b)("li",{parentName:"ul"},"scripts"),Object(o.b)("li",{parentName:"ul"},"example tests"),Object(o.b)("li",{parentName:"ul"},"pipelines"),Object(o.b)("li",{parentName:"ul"},"and information to start testing ")),Object(o.b)("h3",{id:"development"},"Development"),Object(o.b)("p",null,"Move to the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src")," folder and run the next commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run dev\n")),Object(o.b)("p",null,"This offers live reload of both server side  - ",Object(o.b)("em",{parentName:"p"},"when using ssr")," - and client side code."),Object(o.b)("h3",{id:"production"},"Production"),Object(o.b)("p",null,"Move to the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src")," folder and run the next commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run start\n")),Object(o.b)("p",null,"This will start the app in production mode, so you can see how it would behave deployed!"),Object(o.b)("h2",{id:"customising"},"Customising"),Object(o.b)("p",null,"Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test."),Object(o.b)("h2",{id:"feedback"},"Feedback"),Object(o.b)("p",null,"As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information."),Object(o.b)(c.default,{prev:!0,mdxType:"HideNavigation"}))}d.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},211:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},213:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},214:function(e,t,n){"use strict";var a=n(0),r=n(213);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},216:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(214),i=n(211),l=n(51),c=n.n(l),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(a.useState)(l),g=O[0],j=O[1],v=Object(a.useState)(!1),h=v[0],y=v[1];if(null!=p){var w=m[p];null!=w&&w!==g&&b.some((function(e){return e.value===w}))&&j(w)}var N=function(e){j(e),null!=p&&f(p,e)},_=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},k=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",k)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e),E(e)},onFocus:function(){return N(t)},onClick:function(){N(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},217:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default=function(e){var t=e.next,n=e.prev;return r.a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var a=document.querySelector("div.pagination-nav__item>a");a&&a.style&&(a.style.display="none")}})),r.a.createElement("div",null)}}}]);