"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8542],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),g=o,f=l["".concat(c,".").concat(g)]||l[g]||d[g]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6462:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={id:"logging_and_instrumentation_ssr",title:"Logging and Instrumentation",sidebar_label:"Logging and Instrumentation",hide_title:!1,hide_table_of_contents:!0,description:"SSR Application - Logging and Instrumentation",keywords:["rest","api","ssr","application","azure","infrastructure","logging","instrumentation","side","rendering","server","server side rendering"]},c=void 0,u={unversionedId:"workloads/azure/frontend-archived/SSR/logging_and_instrumentation_ssr",id:"workloads/azure/frontend-archived/SSR/logging_and_instrumentation_ssr",isDocsHomePage:!1,title:"Logging and Instrumentation",description:"SSR Application - Logging and Instrumentation",source:"@site/docs/workloads/azure/frontend-archived/SSR/logging_and_instrumentation_ssr.md",sourceDirName:"workloads/azure/frontend-archived/SSR",slug:"/workloads/azure/frontend-archived/SSR/logging_and_instrumentation_ssr",permalink:"/docs/workloads/azure/frontend-archived/SSR/logging_and_instrumentation_ssr",tags:[],version:"current",frontMatter:{id:"logging_and_instrumentation_ssr",title:"Logging and Instrumentation",sidebar_label:"Logging and Instrumentation",hide_title:!1,hide_table_of_contents:!0,description:"SSR Application - Logging and Instrumentation",keywords:["rest","api","ssr","application","azure","infrastructure","logging","instrumentation","side","rendering","server","server side rendering"]}},p=[],l={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"},"Application insights"),"\nis used to monitor both the node(express) instance and the NextJS client code\nrunning on the browser. "),(0,i.kt)("p",null,"AppInsights is configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"instrumentationKey"),"\n(or ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.APPINSIGHTS_INSTRUMENTATIONKEY"),") provided from the environment\nvariables. "),(0,i.kt)("p",null,"AppInsights collects the console logs provided by the Winston.\nAppInsights on Client side is implemented using a React HOC(Higher order\ncomponent) to the Next's ",(0,i.kt)("inlineCode",{parentName:"p"},"_app.ts"),"."))}d.isMDXComponent=!0}}]);