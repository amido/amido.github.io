"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4443],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1332:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},8387:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),i=t(2389),o=t(8578);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(7673),p=t(6010),c="tabItem_2kG2";function u(e){var n,t,a,i=e.lazy,o=e.block,u=e.defaultValue,d=e.values,f=e.groupId,m=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),b=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(n=null!=u?u:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),y=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(k),S=N[0],x=N[1],P=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=y[f];null!=j&&j!==S&&v.some((function(e){return e.value===j}))&&x(j)}var _=function(e){var n=e.currentTarget,t=P.indexOf(n),a=v[t].value;a!==S&&(C(n),x(a),null!=f&&w(f,a))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},m)},v.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":S===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:T,onFocus:_,onClick:_},null!=t?t:n)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function d(e){var n=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},8578:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},4486:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=(t(8387),t(1332),["components"]),l={id:"maven_spring_profiles",title:"Maven & Spring Profiles",sidebar_label:"Maven & Spring Profiles",hide_title:!1,hide_table_of_contents:!1,description:"Maven & Spring Profiles",keywords:["java","rest","api","ide","maven","spring","profiles","pom"]},s=void 0,p={unversionedId:"workloads/common/backend/java/maven_spring_profiles",id:"workloads/common/backend/java/maven_spring_profiles",isDocsHomePage:!1,title:"Maven & Spring Profiles",description:"Maven & Spring Profiles",source:"@site/docs/workloads/common/backend/java/maven_spring_profiles.md",sourceDirName:"workloads/common/backend/java",slug:"/workloads/common/backend/java/maven_spring_profiles",permalink:"/docs/workloads/common/backend/java/maven_spring_profiles",tags:[],version:"current",frontMatter:{id:"maven_spring_profiles",title:"Maven & Spring Profiles",sidebar_label:"Maven & Spring Profiles",hide_title:!1,hide_table_of_contents:!1,description:"Maven & Spring Profiles",keywords:["java","rest","api","ide","maven","spring","profiles","pom"]},sidebar:"docs",previous:{title:"IDE guidelines",permalink:"/docs/workloads/common/backend/java/ide_java"},next:{title:"Modularity Overview",permalink:"/docs/workloads/common/backend/java/architecture/maven_modules_java"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Maven Build Profiles",id:"maven-build-profiles",children:[],level:2},{value:"Spring Profiles",id:"spring-profiles",children:[{value:"application-aws.yml",id:"application-awsyml",children:[],level:3},{value:"application-azure.yml",id:"application-azureyml",children:[],level:3}],level:2},{value:"Stacks Profile Usage",id:"stacks-profile-usage",children:[],level:2},{value:"Support Scripts",id:"support-scripts",children:[{value:"run_scenario.sh",id:"run_scenariosh",children:[],level:3},{value:"deploy_scenario.sh",id:"deploy_scenariosh",children:[],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This page describes the use of Maven Build profiles and Spring profiles to support the use of feature sets within Stacks. The\nterm 'feature sets' means provider support for common tasks such as persistence and message queue handling. It allows the selection\nof different mechanisms across different cloud providers (such as the use of CosmosDB on Azure, or DynamoDB on AWS)."),(0,i.kt)("h2",{id:"maven-build-profiles"},"Maven Build Profiles"),(0,i.kt)("p",null,"Maven build profiles can be used to create customised build configurations, like targeting a level of test granularity or a\nspecific deployment environment or feature set."),(0,i.kt)("p",null,"The profiles are specified in the applications ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," and provide the capability for a number of different elements of\nthe project object model, such as dependencies and properties to be overridden by passing switches at startup. The profiles\nare available to all Maven lifecycles such as compile, test and package."),(0,i.kt)("p",null,"An example of a profile definition is shown below: -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<profile>\n  <id>aws</id>\n  <activation>\n    <file>\n      <exists>.</exists>\n    </file>\n  </activation>\n  <properties>\n    <aws.profile.name>aws</aws.profile.name>\n  </properties>\n  <dependencies>\n    \x3c!-- AWS Specific Dependencies Go Here --\x3e\n  </dependencies>\n</profile>\n")),(0,i.kt)("p",null,"It is possible to specify profiles as being active via a number of mechanisms (one option is show above) and then for\nthese to be enabled or disabled on the command line as per requirements."),(0,i.kt)("p",null,"An example of starting the application and specifying profiles is as follows - this command switches off the ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," profile and\nswitches on the ",(0,i.kt)("inlineCode",{parentName:"p"},"azure")," profile: -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~/Stacks$ mvn clean spring-boot:run -P-aws,azure\n")),(0,i.kt)("h2",{id:"spring-profiles"},"Spring Profiles"),(0,i.kt)("p",null,"Spring Profiles are a core feature of the Spring framework, allowing developers to map beans and properties to different\nprofiles."),(0,i.kt)("p",null,"Activating a certain profile can have a huge effect on a Spring Boot application, but under the hood, a profile can merely\ncontrol two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a profile may influence the application properties, and"),(0,i.kt)("li",{parentName:"ul"},"a profile may influence which beans are loaded into the application context")),(0,i.kt)("p",null,"In the Java code it is possible to specify that Spring beans should only be loaded into the context if the profile has been\nactivated: -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@Profile("foo")\npublic class FooBean { ... }\n')),(0,i.kt)("p",null,"When using Spring Boot any application properties are typically placed into a file under ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml"),"\n(or alternatively ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties"),"). "),(0,i.kt)("p",null,"When using Spring Profiles it is possible to create individual application property files per profile; this gives a clean\nseparation between property settings. The example below shows properties that are only loaded (and overlay any similarly named\nproperties in the base file) if the relevant profile is activated on the command line."),(0,i.kt)("h3",{id:"application-awsyml"},"application-aws.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"aws:\n  xray:\n    enabled: ${AWS_XRAY_ENABLED:false}\n  secretsmanager:\n    enabled: ${AWS_SECRETS_ENABLED:false}\n")),(0,i.kt)("h3",{id:"application-azureyml"},"application-azure.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"azure:\n  application-insights:\n    instrumentation-key: xxxxxx\n    enabled: true\n")),(0,i.kt)("p",null,"There are multiple ways to specify the profiles at application startup. A few examples are shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export SPRING_PROFILES_ACTIVE=foo,bar\njava -jar profiles-0.0.1-SNAPSHOT.jar\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"java -Dspring.profiles.active=foo -jar profiles-0.0.1-SNAPSHOT.jar\n")),(0,i.kt)("h2",{id:"stacks-profile-usage"},"Stacks Profile Usage"),(0,i.kt)("p",null,"Stacks projects have been configured with both Maven and Spring profiles in order to support the capability of being able to\neasily isolate dependencies and properties between feature sets (such as cloud provider, persistence and messaging). "),(0,i.kt)("p",null,"The ultimate aim of Stacks is for a project to be able to deploy an instance that is as close to developer-written code as possible, whilst\nstill providing a rich feature set that projects can choose from. It is also a requirement to make the Stacks maintainer experience as\nsimple as possible and to allow developers and testers an easy way to switch between feature sets whilst providing a platform for them\nto extend Stacks with new feature sets in the future."),(0,i.kt)("p",null,"The use of both profile mechanisms allow dependencies and properties to be nicely ring-fenced, making it relatively easy for\nsupporting scripts to be able to re-package the Stacks project and for it to be tailored more closely to a projects requirements."),(0,i.kt)("p",null,"The three Stacks workloads differ slightly in their provided capability, so this text will now focus on the Stacks CQRS with Events\nproject as that provides the richest set of features."),(0,i.kt)("p",null,"The following areas within the project have been configured to provide profile support: -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," - default properties assigned for all features"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," - Maven build profiles created, one per feature"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"resources/application.yml")," - set of Spring profiles to auto-include based on flags passed to Maven (see ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.profiles.include"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"resources/application-PROFILE_NAME.yml")," - application properties specific to each feature")),(0,i.kt)("p",null,"As per the section above on Maven Build Profiles it can be seen that a few of the profiles have been enabled by default. This is\nto provide backwards-compatibility and to ensure that the application runs even if no profiles are specified on the command line.\nThe profiles that have been enabled at this time by default are ",(0,i.kt)("inlineCode",{parentName:"p"},"aws"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"azure"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmosdb")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"servicebus"),"."),(0,i.kt)("p",null,"To start the application using a different configuration, say to use ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamodb")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sqs")," instead, the following command can be used to\nswitch off the profiles that aren't required and activate the ones that are. Remember that some profiles are always activated (unless switched\noff by prefixing with a ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," character) so these do not need to be explicitly specified: -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~/Stacks$ mvn clean spring-boot:run -Pdynamodb,sqs,-cosmosdb,-servicebus\n")),(0,i.kt)("p",null,"Note that some profiles are mutually exclusive (the persistence and messaging handler profiles) so the application will fail at startup if\ninvalid (overlapping) profiles are specified."),(0,i.kt)("h2",{id:"support-scripts"},"Support Scripts"),(0,i.kt)("p",null,"A number of support scripts are included in the projects that aid in the use of profiles."),(0,i.kt)("h3",{id:"run_scenariosh"},"run_scenario.sh"),(0,i.kt)("p",null,"This script is aimed at ",(0,i.kt)("strong",{parentName:"p"},"Stacks developers & testers"),"."),(0,i.kt)("p",null,"This bash script provides a command line interface to the user to allow them to select the feature sets they want to start the\nSpring Boot application with. "),(0,i.kt)("p",null,"After making their choices it will display the Maven command that will be executed, and then optionally run it for the user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~/Stacks$ sh run_scenario.sh\n\n1. Please select the Cloud required:\n\n   [x]   azure (Azure Cloud)\n   [x]   aws (AWS Cloud)\n\n2. Please select the Persistence required:\n\n   [ ]   cosmosdb (CosmosDB)\n   [x]   dynamodb (DynamoDB)\n\n3. Please select the Message Handler required:\n\n   [ ]   servicebus (Azure ServiceBus)\n   [ ]   kafka (AWS Kafka)\n   [x]   sqs (AWS SQS)\n\nYou have selected these options for your project:\n\n   * azure\n   * aws\n   * dynamodb\n   * sqs\n\nAbout to execute:\n\n   mvn clean spring-boot:run -Pazure,aws,dynamodb,sqs,-cosmosdb,-servicebus\n\nPress ENTER to accept or CTRL-C to quit\n")),(0,i.kt)("h3",{id:"deploy_scenariosh"},"deploy_scenario.sh"),(0,i.kt)("p",null,"This script is aimed at ",(0,i.kt)("strong",{parentName:"p"},"Stacks adopters & end projects"),"."),(0,i.kt)("p",null,"This bash script provides a command line interface to the user to allow them to select the feature sets they want to deploy the\nSpring Boot application with. After making their feature set choice it will alter the code project from being one that supports\nmultiple feature sets to being one that has the features baked-in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~/Stacks$ sh deploy_scenario.sh\n\n1. Please select the Cloud required:\n\n   [x]   azure (Azure Cloud)\n   [x]   aws (AWS Cloud)\n\n2. Please select the Persistence required:\n\n   [ ]   cosmosdb (CosmosDB)\n   [x]   dynamodb (DynamoDB)\n\n3. Please select the Message Handler required:\n\n   [ ]   servicebus (Azure ServiceBus)\n   [x]   kafka (AWS Kafka)\n   [ ]   sqs (AWS SQS)\n\nYou have selected these options for your project:\n\n   * azure\n   * aws\n   * dynamodb\n   * kafka\n\nPress ENTER to accept or CTRL-C to quit\n")),(0,i.kt)("p",null,"After pressing ENTER the script will perform the following actions: -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Move feature-set related Maven Dependencies to the main library dependencies section in ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")),(0,i.kt)("li",{parentName:"ol"},"Remove any non-required feature-set related Maven Build profiles from ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")),(0,i.kt)("li",{parentName:"ol"},"Remove any non-required feature-set related Maven Build properties from ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")),(0,i.kt)("li",{parentName:"ol"},"Hard-code the feature-set related Spring Profile list in ",(0,i.kt)("inlineCode",{parentName:"li"},"application.yml")," (and remove any unused profiles)"),(0,i.kt)("li",{parentName:"ol"},"Remove any non-required Spring profile ",(0,i.kt)("inlineCode",{parentName:"li"},"resources/application-PROFILE_NAME.yml")," files")),(0,i.kt)("p",null,"After these operations the Stacks project code should be closer to how a Project would manually craft their application code."))}d.isMDXComponent=!0}}]);