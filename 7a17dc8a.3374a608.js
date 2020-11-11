(window.webpackJsonp=window.webpackJsonp||[]).push([[67,86],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(210)),s=r(50),i={id:"browser_support",title:"Browser Support",sidebar_label:"Browser Support",hide_title:!1,hide_table_of_contents:!0},l={unversionedId:"workloads/azure/frontend/browser_support",id:"workloads/azure/frontend/browser_support",isDocsHomePage:!1,title:"Browser Support",description:"Given we provide boilerplate WebApps designing for accessibility, we would",source:"@site/docs/workloads/azure/frontend/browser_support.md",slug:"/workloads/azure/frontend/browser_support",permalink:"/stacks/docs/workloads/azure/frontend/browser_support",version:"current",sidebar_label:"Browser Support",sidebar:"docs",previous:{title:"SSR Application - Azure DevOps Pipeline",permalink:"/stacks/docs/workloads/azure/frontend/SSR/pipeline_ssr"},next:{title:"Introduction to the Java REST API application",permalink:"/stacks/docs/workloads/azure/backend/java/intro_java"}},p=[{value:"Polyfills support",id:"polyfills-support",children:[]},{value:"Tools used",id:"tools-used",children:[{value:"To find out the list of supported browsers",id:"to-find-out-the-list-of-supported-browsers",children:[]}]}],c={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Given we provide boilerplate WebApps designing for accessibility, we would\nlike to have optionality to support broad range of browsers. We look to\nfollowing the standards set by Government Digital Services (GDS) on designing\nour WebApp and testing for compatibility. Amido's stacks supports latest version\nof modern browsers."),Object(a.b)("p",null,"Next.js supports IE11 and all modern browsers out of the box using\n",Object(a.b)("inlineCode",{parentName:"p"},"@babel/preset-env"),"."),Object(a.b)("h2",{id:"polyfills-support"},"Polyfills support"),Object(a.b)("p",null,"In cases where your own code or any external NPM dependencies you are using\nrequires features not supported by your target browsers you will need to\nimplement polyfills."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Please note: Next's\n",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/zeit/next.js/tree/canary/examples/with-polyfills"}),"polyfills"),"\nexample demonstrates the recommended approach to implement polyfills.")),Object(a.b)("h2",{id:"tools-used"},"Tools used"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/browserslist/browserslist"}),"Browserslist")," -\n",Object(a.b)("inlineCode",{parentName:"li"},".browserslistrc")," contains the list of supported browsers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/browserslist/browserslist-example"}),"Examples")," - to update\nthis list"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/eslint-plugin-compat"}),"eslint-plugin-compat")," -\nenforces the browser support across stacks.")),Object(a.b)("h3",{id:"to-find-out-the-list-of-supported-browsers"},"To find out the list of supported browsers"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# run the following on the root level\n\nnpx browserslist\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'If you do not have npx already: "npm install -g npx"'),Object(a.b)(s.default,{next:!0,mdxType:"HideNavigation"})))}u.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);t.default=function(e){var t=e.next,r=e.prev;return o.a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(r){var n=document.querySelector("div.pagination-nav__item>a");n&&n.style&&(n.style.display="none")}})),o.a.createElement("div",null)}}}]);