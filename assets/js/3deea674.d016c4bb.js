"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9670,4422],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3602:function(e,t,n){n.r(t);var a=n(7294);t.default=function(e){var t=e.next,n=e.prev;return a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var a=document.querySelector("div.pagination-nav__item>a");a&&a.style&&(a.style.display="none")}})),a.createElement("div",null)}},8803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(3602),c=["components"],s={id:"introduction_netcore",title:"Introduction to the .NET 6 REST API application",sidebar_label:"Introduction",hide_title:!1,hide_table_of_contents:!0,description:"Introduction to .NET 6 REST API application with CQRS",keywords:[".net core","rest api","cqrs","showcase","azure","application insights","cosmos db"]},l=void 0,u={unversionedId:"workloads/azure/backend/netcore/introduction_netcore",id:"workloads/azure/backend/netcore/introduction_netcore",isDocsHomePage:!1,title:"Introduction to the .NET 6 REST API application",description:"Introduction to .NET 6 REST API application with CQRS",source:"@site/docs/workloads/azure/backend/netcore/introduction_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/introduction_netcore",permalink:"/docs/workloads/azure/backend/netcore/introduction_netcore",tags:[],version:"current",frontMatter:{id:"introduction_netcore",title:"Introduction to the .NET 6 REST API application",sidebar_label:"Introduction",hide_title:!1,hide_table_of_contents:!0,description:"Introduction to .NET 6 REST API application with CQRS",keywords:[".net core","rest api","cqrs","showcase","azure","application insights","cosmos db"]},sidebar:"docs",previous:{title:"REST API testing with Karate",permalink:"/docs/workloads/azure/backend/java/testing/execute_karate_api_tests"},next:{title:"Requirements",permalink:"/docs/workloads/azure/backend/netcore/requirements_netcore"}},d=[],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stacks is a collection of sample .NET 6 template projects that contain"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simple Web API application"),(0,o.kt)("li",{parentName:"ul"},"A Web API application with CQRS functionality"),(0,o.kt)("li",{parentName:"ul"},"A Web API application with CQRS and event sourcing functionality")),(0,o.kt)("p",null,"Stacks showcases best coding practices adopted throughout Amido and helps bootstrap client projects faster with already proven and tested code."),(0,o.kt)("p",null,"All applications contain build and cloud infrastructure and are currently hosted on Azure. They use Application Insights for performance management, and different settings exist that can be set for cloud persistence."),(0,o.kt)("p",null,"The application base is designed as a restaurant menu application. Users can create a Menu.\nMenus can hold one or more Categories, and a Category holds menu Items.\nThe API provides an interface for clients to create/update and delete any or all of the menu components."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Demo")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"For a clearer understanding on the output, there is a demo API hosted ",(0,o.kt)("a",{parentName:"strong",href:"https://dev-netcore-api.nonprod.amidostacks.com/api/menu/swagger/index.html"},"here"),".")))),(0,o.kt)("p",null,"As an example below is a Json response to illustrate the structure defined by the model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "296b3d1e-c8f0-4958-8138-bf191f633cbc",\n    "restaurantId": "a6f6a3e0-7a4c-4c0a-b7cf-6115b624c2e7",\n    "name": "Restaurant Menu",\n    "description": "Restaurant Menu Description",\n    "categories": [\n        {\n            "id": "ab6df204-572b-46ef-b5b5-75a6a6b47882",\n            "name": "Main Menus",\n            "description": "Main meals",\n            "items": [\n                {\n                    "id": "5a63d477-11a6-454b-902e-f3794b723f0e",\n                    "name": "Lasagna",\n                    "description": "Pasta Item",\n                    "price": 13.56,\n                    "available": true\n                }\n            ]\n        }\n    ],\n    "enabled": true\n}\n')),(0,o.kt)("p",null,"Even though the restaurant/menu context is used as the foundation for the templates, the .NET template engine provides us with the ability to change the domain with a simple command. The templates are highly customizable and modular, so a project can be generated with only what you need. Conditional compilation is used depending on the settings you provide to generate the minimal amount of code needed for your project."),(0,o.kt)(i.default,{prev:!0,mdxType:"HideNavigation"}))}m.isMDXComponent=!0}}]);