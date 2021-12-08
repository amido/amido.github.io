"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3427],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1332:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},8387:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(7294),o=a(2389),i=a(8578);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(7673),p=a(6010),c="tabItem_2kG2";function u(e){var t,a,n,o=e.lazy,i=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(t=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,r.useState)(f),x=y[0],j=y[1],T=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=w[m];null!=I&&I!==x&&g.some((function(e){return e.value===I}))&&j(I)}var C=function(e){var t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==x&&(A(t),j(n),null!=m&&N(m,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},h)},g.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:C,onClick:C},null!=a?a:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},8578:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},1349:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(8387),l=a(1332),s=["components"],p={id:"quickstart_java",title:"Getting started with the Java Rest API application",sidebar_label:"Getting started",description:"Getting started with the Java Rest API application",keywords:["java","rest","api","application","spring boot","authorization","docker","swagger","auth0","settings","get started"]},c=void 0,u={unversionedId:"workloads/azure/backend/java/quickstart_java",id:"workloads/azure/backend/java/quickstart_java",isDocsHomePage:!1,title:"Getting started with the Java Rest API application",description:"Getting started with the Java Rest API application",source:"@site/docs/workloads/azure/backend/java/quickstart_java.md",sourceDirName:"workloads/azure/backend/java",slug:"/workloads/azure/backend/java/quickstart_java",permalink:"/docs/workloads/azure/backend/java/quickstart_java",tags:[],version:"current",frontMatter:{id:"quickstart_java",title:"Getting started with the Java Rest API application",sidebar_label:"Getting started",description:"Getting started with the Java Rest API application",keywords:["java","rest","api","application","spring boot","authorization","docker","swagger","auth0","settings","get started"]},sidebar:"docs",previous:{title:"Cosmos DB Emulator",permalink:"/docs/workloads/azure/backend/java/setting_up_cosmos_db_locally_java"},next:{title:"Using the Maven Scaffolding",permalink:"/docs/workloads/azure/backend/java/scaffolding_java"}},d=[{value:"Using the repository to build the Java Spring Boot Rest API application",id:"using-the-repository-to-build-the-java-spring-boot-rest-api-application",children:[],level:2},{value:"Running the application locally",id:"running-the-application-locally",children:[{value:"Authorization",id:"authorization",children:[{value:"Auth0 configuration properties",id:"auth0-configuration-properties",children:[],level:4},{value:"Swagger/OAS",id:"swaggeroas",children:[],level:4},{value:"Health check",id:"health-check",children:[],level:4}],level:3}],level:2},{value:"Using a Docker image",id:"using-a-docker-image",children:[],level:2}],m={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-the-repository-to-build-the-java-spring-boot-rest-api-application"},"Using the repository to build the Java Spring Boot Rest API application"),(0,o.kt)("h2",{id:"running-the-application-locally"},"Running the application locally"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"clone-one-of-the-java-workloads-to-your-local-machine-from-one-of-the-following-repos"},"Clone one of the Java workloads to your local machine from one of the following repos"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Simple web API: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/amido/stacks-java"},"stacks-java repository")),(0,o.kt)("li",{parentName:"ol"},"Web API with CQRS: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/amido/stacks-java-cqrs"},"stacks-java-cqrs repository")),(0,o.kt)("li",{parentName:"ol"},"Web API with CQRS and events: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/amido/stacks-java-cqrs-events"},"stacks-java-cqrs-events repository")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"configure-the-application"},"Configure the application"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The application is currently configured to work with the Azure environment only."))),(0,o.kt)("p",null,"  It uses an Azure ",(0,o.kt)("strong",{parentName:"p"},"CosmosDB")," database to store the example application data. So you should have access to an instance to use with the application."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For running on a local environment you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/backend/java/setting_up_cosmos_db_locally_java"},"Cosmos DB emulator")," (CosmosDB Emulator has a known fixed key). There is no need for CosmosDB for the simple web API implementation (1.i above) as there is no persistence layer in it.\nFor further info please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21"},"link"),"."))),(0,o.kt)("p",null,"Set the cosmosdb URI, databaseName and key in main application configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),") using the values coming from the CosmosDB Emulator UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=application.yml",title:"application.yml"},"azure:\n cosmosdb:\n   uri: xxxxxx\n   database: xxxxxx\n   key: xxxxxx\n")),(0,o.kt)("p",null,"In addition, Azure ",(0,o.kt)("strong",{parentName:"p"},"ApplicationInsights")," is used for logging purposes. If this is unavailable, modify the application so that it doesn't fail to startup if it can't access ApplicationInsights, and simply log to the terminal instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3} title=application.yml","{3}":!0,title:"application.yml"},"application-insights:\n  instrumentation-key: xxxxxx\n  enabled: false\n")),(0,o.kt)("p",null,"Alternatively, you can use Spring ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," profile, which is configured to not require cloud infrastructure to run. For the details, please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-profiles#4-jvm-system-parameter"},"Spring Profiles")," article."),(0,o.kt)("p",null,"There are two corresponding environment variables that need to be set to interact with these systems:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"COSMOSDB_KEY\nAZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY\n")),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"unix",mdxType:"TabItem"},"Set the two environment variables as additional variables within e.g. ~/.profile or /etc/profile."),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},"Open the System Properties then select the Advanced tab, then click on the Environment Variables button and add the new parameters.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"build-and-run-the-application"},"Build and run the application"),(0,o.kt)("p",{parentName:"li"}," Note that at a minimum ",(0,o.kt)("a",{parentName:"p",href:"https://adoptopenjdk.net/"},"Java 11")," should be installed."),(0,o.kt)("p",{parentName:"li"}," Move to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder, then"),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"unix",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw spring-boot:run\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvnw.cmd spring-boot:run\n")))),(0,o.kt)("p",{parentName:"li"}," For instructions on how to customise the project for your company please look in the ",(0,o.kt)("a",{parentName:"p",href:"docs/workloads/azure/backend/java/scaffolding_java"},"Scaffolding")," section")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"build-and-run-the-application-using-cosmos-db-emulator"},"Build and run the application using Cosmos DB Emulator"),(0,o.kt)("p",{parentName:"li"},'Please refer to section "Determine which root certificates have been installed" in ',(0,o.kt)("a",{parentName:"p",href:"docs/workloads/azure/backend/java/setting_up_cosmos_db_locally_java."},"Setting Up CosmosDB Emulator")),(0,o.kt)("p",{parentName:"li"}," Move to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder, then\ngo to ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml")," either comment out the ",(0,o.kt)("inlineCode",{parentName:"p"},"application-insights")," block or set ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled"),"  property to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",{parentName:"li"}," In ",(0,o.kt)("inlineCode",{parentName:"p"},"logback-spring.xml")," comment out two sections relating to the application-insights (both the appender and the logger)."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=logback-spring.xml",title:"logback-spring.xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n  <appender class="ch.qos.logback.core.ConsoleAppender" name="console">\n    <encoder>\n      <pattern>%d{dd-MM-yyyy HH:mm:ss.SSS} %magenta([%thread]) | %X{CorrelationId} |\n        %highlight(%-5level) %logger{36}.%M - %msg%n\n      </pattern>\n    </encoder>\n  </appender>\n  \x3c!-- <appender class="com.microsoft.applicationinsights.logback.ApplicationInsightsAppender"\n    name="aiAppender">\n  </appender> --\x3e\n  <root level="info">\n    <appender-ref ref="console"/>\n  </root>\n  \x3c!-- <root level="info">\n    <appender-ref ref="aiAppender"/> --\x3e\n  </root>\n</configuration>\n')),(0,o.kt)("p",{parentName:"li"}," Set ",(0,o.kt)("inlineCode",{parentName:"p"},"COSMOSDB_KEY")," as an environment variable and set the value to be the primary key value on the emulator."),(0,o.kt)("br",null),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"unix",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'./mvnw spring-boot:run -Dspring-boot.run.jvmArguments=\'-Djavax.net.ssl.trustStore="<Location of the root cosmos db certificate>" -Djavax.net.ssl.trustStorePassword="changeit"\'\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvnw.cmd spring-boot:run -Dspring-boot.run.jvmArguments=\'-Djavax.net.ssl.trustStore="<Location of the root cosmos db certificate>" -Djavax.net.ssl.trustStorePassword="changeit"\'\n'))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"verify-that-the-application-has-started"},"Verify that the application has started"),(0,o.kt)("p",{parentName:"li"},"Browse to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9000/v1/menu"},"http://localhost:9000/v1/menu"),". This should return a valid JSON response."),(0,o.kt)("p",{parentName:"li"},"The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your\nbrowser to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9000/swagger/index.html"},"http://localhost:9000/swagger/index.html"),"."))),(0,o.kt)("h3",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"All API endpoints are (optionally) protected using ",(0,o.kt)("strong",{parentName:"p"},"Auth0"),". There is an ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.properties")," file within the project codebase.\nIf the following property within this file is set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"auth.isEnabled=true\n")),(0,o.kt)("p",null,"then clients will need to pass an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header containing the Bearer token generated from Auth0 as part of the endpoint request. If the value\nis set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," then no authorization is required."),(0,o.kt)("h4",{id:"auth0-configuration-properties"},"Auth0 configuration properties"),(0,o.kt)("p",null,"If using Auth0 for authorization, Auth0 itself will need to be configured with both an API definition and an associated Application.\nThere are corresponding configuration values required for the Stacks application, within the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.properties")," file, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"auth0.issuer=https://amidostacks.eu.auth0.com/\nauth0.apiAudience=https://amidostacks.eu.auth0.com/api/v2/\n")),(0,o.kt)("p",null,"These parameters are used to verify that the JWT supplied in the Authorization header of a request is valid."),(0,o.kt)("h4",{id:"swaggeroas"},"Swagger/OAS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Automatically generated for the project. Go to ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9000/swagger/index.html"},"Swagger Index")," to view."),(0,o.kt)("li",{parentName:"ul"},"Swagger Json is here: ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9000/swagger/oas.json"},"Swagger Json"))),(0,o.kt)("h4",{id:"health-check"},"Health check"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Available at: ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9000/health"},"health check"),"\n(This can also be configured to run on another port)")),(0,o.kt)("h2",{id:"using-a-docker-image"},"Using a Docker image"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/install/"},"https://docs.docker.com/docker-for-windows/install/")),(0,o.kt)("p",null,"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder, build a Docker image using e.g. the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build --tag stacks:1.0 .\n")),(0,o.kt)("p",null,"This uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in this folder to generate the Docker image."),(0,o.kt)("p",null,"If you have an ",(0,o.kt)("inlineCode",{parentName:"p"},".m2")," directory in the ",(0,o.kt)("inlineCode",{parentName:"p"},"java/")," folder, the Docker build will attempt to copy the files inside the container and use the cached versions."),(0,o.kt)("p",null,"Once the Docker image is created, you can then run a Docker container based on this image using e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 9000:9000 -e AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY -e AZURE_COSMOSDB_KEY stacks:1.0\n")),(0,o.kt)("p",null,"which passes in the two required environment variables from your own environment."))}h.isMDXComponent=!0}}]);