"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[927],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"operations_events_exceptions_correlation_netcore",title:"Operations, Events, Exceptions and Correlation",sidebar_label:"Operations, Events, Exceptions and Correlation",hide_title:!1,hide_table_of_contents:!1,description:".NET Core REST API application - Operations, Events, Exceptions and Correlation",keywords:[".net core","rest api","cqrs","example","template","repository","structure","operations","events","exceptions","correlation"]},l=void 0,p={unversionedId:"workloads/azure/backend/netcore/architecture/operations_events_exceptions_correlation_netcore",id:"workloads/azure/backend/netcore/architecture/operations_events_exceptions_correlation_netcore",isDocsHomePage:!1,title:"Operations, Events, Exceptions and Correlation",description:".NET Core REST API application - Operations, Events, Exceptions and Correlation",source:"@site/docs/workloads/azure/backend/netcore/architecture/operations_events_exceptions_correlation_netcore.md",sourceDirName:"workloads/azure/backend/netcore/architecture",slug:"/workloads/azure/backend/netcore/architecture/operations_events_exceptions_correlation_netcore",permalink:"/docs/workloads/azure/backend/netcore/architecture/operations_events_exceptions_correlation_netcore",tags:[],version:"current",frontMatter:{id:"operations_events_exceptions_correlation_netcore",title:"Operations, Events, Exceptions and Correlation",sidebar_label:"Operations, Events, Exceptions and Correlation",hide_title:!1,hide_table_of_contents:!1,description:".NET Core REST API application - Operations, Events, Exceptions and Correlation",keywords:[".net core","rest api","cqrs","example","template","repository","structure","operations","events","exceptions","correlation"]},sidebar:"docs",previous:{title:"Data Storage - CosmosDB",permalink:"/docs/workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore"},next:{title:"NuGet Dependencies",permalink:"/docs/workloads/azure/backend/netcore/architecture/nuget_dependencies"}},c=[{value:"Triggers",id:"triggers",children:[],level:3},{value:"Operations",id:"operations",children:[{value:"Operation Types",id:"operation-types",children:[{value:"Commands",id:"commands",children:[],level:5},{value:"Queries",id:"queries",children:[],level:5}],level:4}],level:3},{value:"Events",id:"events",children:[],level:3},{value:"Exceptions",id:"exceptions",children:[],level:3},{value:"Correlation",id:"correlation",children:[],level:3},{value:"OperationCode",id:"operationcode",children:[],level:3},{value:"Unique Ids and Codes (exceptions, events and operations codes)",id:"unique-ids-and-codes-exceptions-events-and-operations-codes",children:[],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document purpose is to clarify concepts implemented in the platform in order to facilitate the monitoring and management of services deployed to the platform."),(0,i.kt)("p",null,"The entire platform will provide monitoring data via logs and metrics to the monitoring tools and requires a consistent approach across services to simplify building dashboards, report generation and alerts configuration."),(0,i.kt)("p",null,"Having a clear understanding of these concepts is crucial to make the platform consistent and simple for maintenance purposes."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"triggers"},"Triggers"),(0,i.kt)("p",null,"A trigger mechanism is required to initiate an operation. The trigger is the initiator event received from external systems or triggered internally to notify something has happened or is about to happen."),(0,i.kt)("p",null,"The common triggers are:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HTTP Request:")," An HTTP request to a RESTful API endpoint is a trigger sent to the API to initiate an operation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Queue or Topic Message:")," A message received from a queue or topic, in form of a command or event that will trigger some processing within the application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Scheduled Job:")," An stand alone application or function that executes on a defined schedule to execute a task and is considered complete when the operation finishes."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"operations"},"Operations"),(0,i.kt)("p",null,"Everything that happens within an application happens in the context of one operation, an operation will start in response from a trigger, execute and notify its completion with an event(and a response in case of synchronous operation)."),(0,i.kt)("h4",{id:"operation-types"},"Operation Types"),(0,i.kt)("h5",{id:"commands"},"Commands"),(0,i.kt)("p",null,"An operation that modifies one or multiple resource in the application. Commands can be synchronous and may return a result(if one is required) to the caller in form of a response, or asynchronous without a return result, the outcome of the asynchronous command should always be published as an event for any outcome(successful or failed results)."),(0,i.kt)("h5",{id:"queries"},"Queries"),(0,i.kt)("p",null,"Are operations that does not modify the resources in the application. It intend to retrieve data from the application but should also raise events in order to generate insights into user behaviour for platform improvement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:"),"\nHow many times the user make use of a feature (search invoice, page search results, and so on). Queries will probably also generate data in form of exceptions when the user does not permission to execute operations, for security, auditing and monitoring purposes."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All Commands and Queries must raise events in order to generate enough data for observability and behaviour analysis by data platform team."))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"Application events are generated by the application to notify external services that an action has taken place. The event will notify if an operation completed successfully or failed and should contain the required context information to identify the resource changed(if any), the operation which raised the event and possibly the user id who requested it."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"exceptions"},"Exceptions"),(0,i.kt)("p",null,"Exceptions is an execution flow mechanism used to interrupt the current processing flow either because, the application or one of it\u2019s dependent components behaved unexpectedly and can\u2019t proceed, or an application logic is aware it can\u2019t proceed because doing so will/may cause issues. All exceptions raised in an application or it\u2019s dependencies are logged by the infrastructure components, so adding a log information to notify an exception has happened is not required and will make the logging redundant."),(0,i.kt)("p",null,"Exceptions raised by the application must be specific and uniquely identifiable across the platform and must clearly describe the problem that caused the exception. Generic exceptions should be avoided because they will first difficult to implement proper exception handling logic in the application, and also will make difficult to aggregate recurrent exception in the logging platform. Having unique exception will facilitate aggregating common issues for monitoring and alerting."),(0,i.kt)("p",null,"Exceptions types can be classified as Application, Infrastructure or BCL."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Application:")," Exceptions raised by the application to interruption of an operation in case the state of a resource or the user permissions are not valid for complete the operation. These are commonly mapped to business requirements implemented as a code into the application logic."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Infrastructure:")," Exceptions raised by base packages used to support the application, they provide useful information to the application to handle issues that it can\u2019t handle by itself. These exceptions in general are related to data access problems, messaging and communication issues implemented into these base packages. The application can either handle these exceptions and provide a custom exception specific for the application, or let the infrastructure exception propagate and provide to the user a generic error message."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"BCL:")," Are base exceptions raised by dotnet framework are commonly being propagated to the application code to notify unexpected execution of some base class library code, like failure to convert type, Invalid Operations and so on. In general these exception should handled properly in the application to prevent propagating to the user, giving them a more useful information."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"correlation"},"Correlation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Definition:")," Unique identifier used to track a triggered operation and it's chain of events and exceptions."),(0,i.kt)("p",null,"Usage: Every operation triggered by an event needs to be identified individually, to make this possible, we assign a CorrelationId to the operation, so in case two events trigger an operation, we could identify the chain of events and exceptions triggered by these events using each one CorrelationId."),(0,i.kt)("p",null,"CorrelationId can be either used for the entire flow of a process or split into CorrelationId per stage."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CreateOrder operation is triggered by the customer at checkout of an e-commerce, this operation will raise OrderCreated"),(0,i.kt)("li",{parentName:"ul"},"The Stock application will get the event raised by the checkout application and trigger the ReserveStock command")),(0,i.kt)("p",null,"In both cases, a single trigger raised two operations as part of a workflow, using a single correlation in both phases of this workflow would make much easier to track all events in a chain of events across different systems, on the other hand, this approach makes all events have the same CorrelationId and in a very verbose systems might get very bloated, another scenarios are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The correlationId is provided by the client that didn't get a response on time and timed out, retrying the request using the same CorrelationId"),(0,i.kt)("li",{parentName:"ul"},"An event might be processed by multiple handlers at same time, creating a chain of events interlaced by different handlers"),(0,i.kt)("li",{parentName:"ul"},"The handling of the message can't complete because of the state of the application, connectivity or other issues, re-attempting to process the event using the same CorrelationId")),(0,i.kt)("p",null,"In these scenarios, would be useful to generate one Correlation per phase."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CreateOrder generates a correlationId and pass it to the event Raised"),(0,i.kt)("li",{parentName:"ul"},"ReserveStock capture the original event CorrelationId and Log the transition between the old and new before handling the event with a new correlation")),(0,i.kt)("p",null,"The current sample solution implements one CorrelationId for the entire flow, is up to the implementer to decide how they want to track the correlation between services"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"operationcode"},"OperationCode"),(0,i.kt)("p",null,"Definition: Unique code used to track an operation type."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:")," Every operation has a type."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Create Item, Delete Item, Update Item, Query for Items and so on. Each of these types will be given a code that will be used by the logging handler to record the chain of events, exceptions or other information generated by an operation. The code is useful to de-couple the Operation name from other resources."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Command UpdateItem can raise the ItemUpdated event when succeeded, if the Item does not exist an exception ItemDoesNotExistException is raised."),(0,i.kt)("li",{parentName:"ul"},"The Command ReserveItem can raise the ItemUpdated and ItemSoldOut event when succeeded, if the Item does not exist an exception ItemDoesNotExistException is raised.")),(0,i.kt)("p",null,"In both cases, the same application events and exceptions can be raised, but both are part of different contexts, one is updating the item directly and the other indirectly."),(0,i.kt)("p",null,"Adding the OperationCode to these events, make it easier to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identify the context of an event or exception"),(0,i.kt)("li",{parentName:"ul"},"Group and track events or exceptions generally raised by one Operation type"),(0,i.kt)("li",{parentName:"ul"},"Prevent operations with same name in different contexts to be considered the same"),(0,i.kt)("li",{parentName:"ul"},"Simplify the tracking of existing operations by Having centralized list of operation codes")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"unique-ids-and-codes-exceptions-events-and-operations-codes"},"Unique Ids and Codes (exceptions, events and operations codes)"),(0,i.kt)("p",null,"As described above, an application will create or handle operations, events and exceptions that will generates log entries in the logging platform. These log entries will be used to generate reports and alerts, in order to do so, they must be uniquely identifiable or easily aggregated to produce useful reports."),(0,i.kt)("p",null,"Exceptions, Events and possibly Operations names might conflict with names defined into different domains (i.e: AddAttachment command, AttachmentAdded event). Using the Full qualified name with a namespace would be a simple way to differentiate each domain related activity, but in some cases, like base packages shared by multiple services, exceptions or events might have the same namespaces, and it will make difficult to easily track their relationships."),(0,i.kt)("p",null,"Another scenario is linking exceptions and events to operations that triggered these, we could correlate them by the correlation id and tracking the operation who started the operation, another alternative is annotate the logs with the operation name."),(0,i.kt)("p",null,"To simplify these complexities, we will add unique ids and codes to exceptions, events and operations in order to uniquely identify them. These ids will be attached to all log entries for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Link events and exceptions to operations that triggered then. Simplifying reporting, monitoring and alerting processes."),(0,i.kt)("li",{parentName:"ul"},"Reduce the size of log entries from a long name, to an integer.")))}u.isMDXComponent=!0}}]);