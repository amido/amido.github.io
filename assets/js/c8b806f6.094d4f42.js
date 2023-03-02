"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5685],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},878:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"state_management_csr",title:"State Management",sidebar_label:"State Management Patterns",hide_title:!1,hide_table_of_contents:!0,description:"Stacks State Management Patterns",keywords:["stacks","management","pattern","react","redux","saga","logger","devtools","wrapper","webapp","ssr","node","client side rendering","server side rendering"]},l=void 0,u={unversionedId:"workloads/azure/frontend-archived/CSR/state_management_csr",id:"workloads/azure/frontend-archived/CSR/state_management_csr",isDocsHomePage:!1,title:"State Management",description:"Stacks State Management Patterns",source:"@site/docs/workloads/azure/frontend-archived/CSR/state_management_csr.md",sourceDirName:"workloads/azure/frontend-archived/CSR",slug:"/workloads/azure/frontend-archived/CSR/state_management_csr",permalink:"/docs/workloads/azure/frontend-archived/CSR/state_management_csr",tags:[],version:"current",frontMatter:{id:"state_management_csr",title:"State Management",sidebar_label:"State Management Patterns",hide_title:!1,hide_table_of_contents:!0,description:"Stacks State Management Patterns",keywords:["stacks","management","pattern","react","redux","saga","logger","devtools","wrapper","webapp","ssr","node","client side rendering","server side rendering"]}},c=[{value:"Tools used",id:"tools-used",children:[],level:2},{value:"Next based utility libraries",id:"next-based-utility-libraries",children:[],level:2},{value:"Pattern",id:"pattern",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tools-used"},"Tools used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react-redux.js.org/"},"React-redux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/redux-saga/redux-saga"},"Redux-saga")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LogRocket/redux-logger"},"Redux-logger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux-devtools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/redux-saga-routines"},"Redux-saga-routines"))),(0,i.kt)("h2",{id:"next-based-utility-libraries"},"Next based utility libraries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kirill-konshin/next-redux-wrapper"},"next-redux-wrapper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bmealhouse/next-redux-saga#readme"},"next-redux-saga"))),(0,i.kt)("p",null,"next-redux-saga uses the redux store created by next-redux-wrapper"),(0,i.kt)("h2",{id:"pattern"},"Pattern"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/erikras/ducks-modular-redux"},"Ducks")," pattern is used to\nsimplify the creation and managing the boilerplate associated with reducers,\naction creators bundles with sagas. With Ducks pattern, rather than splitting up\nall related code, It can be packaged into redux modules. This gives us clarity\nabout which piece of Redux is handling which functionality."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To create new async routine please refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"<src>/ducks/get-menus")," and it is\nconsumed in landing home functional component ",(0,i.kt)("inlineCode",{parentName:"p"},"<src>/composition/home/")))}p.isMDXComponent=!0}}]);