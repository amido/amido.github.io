"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2270],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),g=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=g(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=g(t),u=r,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var g=2;g<o;g++)a[g]=t[g];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2587:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return c},default:function(){return p}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"logging_netcore",title:"Logging with Serilog and Application Insights",sidebar_label:"Logging",hide_title:!0,hide_table_of_contents:!1,description:"Logging for .NET Core",keywords:[".net core","logging","logger","serilog","application insights","standard","serilog configuration"]},s=void 0,g={unversionedId:"workloads/azure/backend/netcore/logging_netcore",id:"workloads/azure/backend/netcore/logging_netcore",isDocsHomePage:!1,title:"Logging with Serilog and Application Insights",description:"Logging for .NET Core",source:"@site/docs/workloads/azure/backend/netcore/logging_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/logging_netcore",permalink:"/docs/workloads/azure/backend/netcore/logging_netcore",tags:[],version:"current",frontMatter:{id:"logging_netcore",title:"Logging with Serilog and Application Insights",sidebar_label:"Logging",hide_title:!0,hide_table_of_contents:!1,description:"Logging for .NET Core",keywords:[".net core","logging","logger","serilog","application insights","standard","serilog configuration"]},sidebar:"docs",previous:{title:"Pipeline",permalink:"/docs/workloads/azure/backend/netcore/pipeline_netcore"},next:{title:"Security",permalink:"/docs/workloads/azure/backend/netcore/security_netcore"}},c=[{value:"Logging with Serilog and Application Insights",id:"logging-with-serilog-and-application-insights",children:[{value:"Sinks",id:"sinks",children:[],level:3},{value:"Serilog Configuration",id:"serilog-configuration",children:[],level:3}],level:2}],d={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"logging-with-serilog-and-application-insights"},"Logging with Serilog and Application Insights"),(0,o.kt)("br",null),(0,o.kt)("p",null,".NET Core provides a simple logging abstraction with most of required logging features used by an application. Everywhere in the application, when logging is required, the Classes generating logs should receive via dependency injection an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"ILogger<>")," to use as the logger object. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ILogger<>")," instances are created by Logging Factory registered by each application and will abstract the logging library from the application logging."),(0,o.kt)("p",null,"The standard library has limited capabilities on log forwarding and requires additional packages to add proper filtering, enrichment and forwarding. For this reason the use of Serilog is required to extend the default logging features."),(0,o.kt)("p",null,"Serilog integrates with the logger abstraction provided by DotNet Core. It provides additional Sink(outputs), Filter capabilities and Log Enrichment features to complete the limited set of features in .NET Core default loggers. Every services implemented using .NET Core should make use of Serilog library to standardize the logging approach."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"sinks"},"Sinks"),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("strong",{parentName:"p"},"Console")," and ",(0,o.kt)("strong",{parentName:"p"},"ApplicationInsights")," sinks should be used."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"console sink")," will output all logging generated by the service to the runtime console, and will make the logs available via command line tools like kubectl (kubectl get logs) providing a quick and straight forward way of getting the logs for a particular instance."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Application Insights")," sink will make sure all logs generated(and filtered) are forwarded for the logging platform for correlation and future investigations."),(0,o.kt)("p",null,"Application Insights is the chosen logging platform and will aggregated all logs generated by all services. Console sink is an useful secondary output in order to facilitate investigation of issues with particular service that are failing. Having both setup, will make very straightforward to identify issues in real time or delayed investigation."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"serilog-configuration"},"Serilog Configuration"),(0,o.kt)("p",null,"The following is a sample ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file with annotations about logging configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Serilog": {    // Logging configuration for Serilog\n    "Using": [\n      "Serilog.Sinks.Console",              // Import console sink package\n      "Serilog.Sinks.ApplicationInsights"   // Import ai sink package\n    ],\n    "MinimumLevel": {\n      "Default": "Information", // minimal log level for everything\n      "Override": {}            // Override for individual log sources\n    },\n    "WriteTo": [\n      { "Name": "Console" },    // Write Logs to console\n      {\n        "Name": "ApplicationInsights",  // Write Logs to App Insights\n        "Args": {\n          "telemetryConverter": "Serilog.Sinks.ApplicationInsights.Sinks.ApplicationInsights.TelemetryConverters.TraceTelemetryConverter, Serilog.Sinks.ApplicationInsights"\n        }\n      }\n    ],\n    "Enrich": [ "FromLogContext", "WithMachineName", "WithThreadId" ], // Add custom attributes to the logs, Hostname and the ThreadId\n    "Destructure": [],\n    "Properties": {             // fixed attributes added to every log for filtering purposes\n      "Domain": "identity",     // domain name added to every log\n      "Service": "identityapi", // service generating the logs\n      "Environment": "dev",     // environment this instance belongs to\n    },\n    "Filter": [                 // Ignore logs that matches the following filters\n      {\n        "Name": "ByExcluding",\n        "Args": {\n          "expression": "EndsWith(RequestPath, \'/health\')" // Filter out health requests to reduce useless log information. Not required for non api services.\n        }\n      }\n    ]\n  }\n}\n')))}p.isMDXComponent=!0}}]);