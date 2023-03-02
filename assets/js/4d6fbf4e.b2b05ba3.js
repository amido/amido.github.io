"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4658],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,v=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(2263),a=r(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},6077:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4996),c=["components"],s={id:"architecture_java_cqrs",title:"Java Rest API Architecture",sidebar_label:"Architecture overview",description:"Spring Boot Rest API Architecture",keywords:["java","rest","api","architecture","spring boot","cqrs","event","controller","logs","monitoring","query service","repository","azure cosmos db","event handler","event listener","event dispatcher","authorisation"]},u=void 0,l={unversionedId:"workloads/common/backend/java/architecture/java_cqrs/architecture_java_cqrs",id:"workloads/common/backend/java/architecture/java_cqrs/architecture_java_cqrs",isDocsHomePage:!1,title:"Java Rest API Architecture",description:"Spring Boot Rest API Architecture",source:"@site/docs/workloads/common/backend/java/architecture/java_cqrs/architecture_java_cqrs.md",sourceDirName:"workloads/common/backend/java/architecture/java_cqrs",slug:"/workloads/common/backend/java/architecture/java_cqrs/architecture_java_cqrs",permalink:"/docs/workloads/common/backend/java/architecture/java_cqrs/architecture_java_cqrs",tags:[],version:"current",frontMatter:{id:"architecture_java_cqrs",title:"Java Rest API Architecture",sidebar_label:"Architecture overview",description:"Spring Boot Rest API Architecture",keywords:["java","rest","api","architecture","spring boot","cqrs","event","controller","logs","monitoring","query service","repository","azure cosmos db","event handler","event listener","event dispatcher","authorisation"]},sidebar:"docs",previous:{title:"Project structure",permalink:"/docs/workloads/common/backend/java/architecture/web_api/structure_java"},next:{title:"Project structure",permalink:"/docs/workloads/common/backend/java/architecture/java_cqrs/structure_java_cqrs"}},d=[{value:"Spring Boot Rest API Architecture",id:"spring-boot-rest-api-architecture",children:[],level:2}],p={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"spring-boot-rest-api-architecture"},"Spring Boot Rest API Architecture"),(0,o.kt)("p",null,"The diagram below represents the architecture of the Command Query Responsibility Segregation (CQRS) pattern, as it has been applied\nto this project."),(0,o.kt)("img",{alt:"Project architecture CQRS",src:(0,i.Z)("img/java-cqrs.png")}),(0,o.kt)("p",null,"The CQRS pattern separates read and update operations for a data store. Commands are defined for operations that\nare responsible for changing the date stored (i.e. inserts, updates or delete operations). Each command\nhas a corresponding handler, and it is this which coordinates the repository update and the\nsending of the associated event details. Queries, which do not change the data stored, are handled through\na query service."),(0,o.kt)("p",null,"Upon successful execution of a command (database update), the microservice publishes one or more events\ndescribing how the persistence state has changed e.g. if a \u201cCreate Category\u201d event is successful,\nthen a \u201cMenu Updated\u201d event and a \u201cCategory Created\u201d event will be published."),(0,o.kt)("p",null,"Application Events contain the following basic information:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Event Attribute"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"Unique id of the event instance (format: uuid)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventCode"),(0,o.kt)("td",{parentName:"tr",align:null},"Code identifying the type of event")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"correlationId"),(0,o.kt)("td",{parentName:"tr",align:null},"Transaction identifier. This attribute is also returned as a response header if the command was received via the REST API and can also be found in all log entries relating to the transaction. CorrelationID can either be supplied by the input event/request or generated when not supplied.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"operationCode"),(0,o.kt)("td",{parentName:"tr",align:null},"Code identifying the operation which generated the event")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"creationDate"),(0,o.kt)("td",{parentName:"tr",align:null},"When the event was created")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom Attribute(s)"),(0,o.kt)("td",{parentName:"tr",align:null},"e.g. menuId")))))}h.isMDXComponent=!0}}]);