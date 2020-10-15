(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(133)),c={id:"scaffolding_java",title:"Using the Scaffolding CLI to create the Java Rest API project template",sidebar_label:"Using the Scaffolding CLI to create the Java Rest API project template"},i={unversionedId:"workloads/java/scaffolding_java",id:"workloads/java/scaffolding_java",isDocsHomePage:!1,title:"Using the Scaffolding CLI to create the Java Rest API project template",description:"Create a custom Java REST API project template from the command line",source:"@site/docs/workloads/java/scaffolding_java.md",slug:"/workloads/java/scaffolding_java",permalink:"/stacks/docs/workloads/java/scaffolding_java",editUrl:"https://github.com/amido/stacks/docs/workloads/java/scaffolding_java.md",version:"current",sidebar_label:"Using the Scaffolding CLI to create the Java Rest API project template",sidebar:"docs",previous:{title:"Getting started with the Java Rest API application",permalink:"/stacks/docs/workloads/java/quickstart_java"},next:{title:"IDE guidelines for the Java Rest API",permalink:"/stacks/docs/workloads/java/ide_java"}},l=[{value:"Create a custom Java REST API project template from the command line",id:"create-a-custom-java-rest-api-project-template-from-the-command-line",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-a-custom-java-rest-api-project-template-from-the-command-line"},"Create a custom Java REST API project template from the command line"),Object(o.b)("p",null,"The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.\nIt includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI."),Object(o.b)("p",null,"We use npx to execute and create the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@amidostacks/scaffolding-cli"}),"template-cli"),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/npx"}),"npx"),"."),Object(o.b)("p",null,"We are supporting and running ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/about/releases/"}),"node@12"),".\nPlease ensure that your local environment has the correct version ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"installed"),"."),Object(o.b)("p",null,"To run the Scaffolding CLI, use the following commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"npx @amidostacks/scaffolding-cli@latest run -i  \n")),Object(o.b)("p",null,"You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced."),Object(o.b)("p",null,"An example is shown in the video below."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://asciinema.org/a/358208"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://asciinema.org/a/358208.svg",alt:"asciicast"})))))}p.isMDXComponent=!0},133:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);