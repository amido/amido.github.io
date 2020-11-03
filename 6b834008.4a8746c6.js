(window.webpackJsonp=window.webpackJsonp||[]).push([[43,69],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(176)),i=n(51),c={id:"ide_node_js",title:"IDE Setup",sidebar_label:"IDE Setup",hide_title:!1,hide_table_of_contents:!0},s={unversionedId:"workloads/azure/frontend/ide_node_js",id:"workloads/azure/frontend/ide_node_js",isDocsHomePage:!1,title:"IDE Setup",description:"We recommend using Visual Studio Code as IDE, although feel free to use any other you may wish.",source:"@site/docs/workloads/azure/frontend/ide-node.mdx",slug:"/workloads/azure/frontend/ide_node_js",permalink:"/stacks/docs/workloads/azure/frontend/ide_node_js",version:"current",sidebar_label:"IDE Setup",sidebar:"docs",previous:{title:"Introduction to workloads",permalink:"/stacks/docs/workloads/workloads"},next:{title:"Stacks Monorepo",permalink:"/stacks/docs/workloads/azure/frontend/monorepo"}},l=[{value:"Extension Recommendations",id:"extension-recommendations",children:[]}],u={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We recommend using Visual Studio Code as IDE, although feel free to use any other you may wish."),Object(a.b)("h2",{id:"extension-recommendations"},"Extension Recommendations"),Object(a.b)("p",null,"These extensions are not required, but they provide features that we find helpful while developing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"EsLint")," - To lint the code according to be practices"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"}),"Pretier")," - To Format the code in a standardized way"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint"}),"Eslint-Prettier")," - Allows eslint to be aware of prettier rules")),Object(a.b)(i.default,{prev:!0,mdxType:"HideNavigation"}))}d.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);t.default=function(e){var t=e.next,n=e.prev;return o.a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var r=document.querySelector("div.pagination-nav__item>a");r&&r.style&&(r.style.display="none")}})),o.a.createElement("div",null)}}}]);