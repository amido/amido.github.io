"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3237],{8339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(4848),i=t(8453),r=t(1470),s=t(9365);const o={id:"ide_java",title:"IDE guidelines for the Java Rest API",sidebar_label:"IDE guidelines",hide_title:!1,hide_table_of_contents:!1,description:"IDE guidelines for the Java Rest API",keywords:["java","rest","api","ide","ide guidelines","plugins","code quality","lombok","sonarlint","spring assistant","check style","google java format","spotbugs","jacoco","setups","pom"]},l=void 0,c={id:"workloads/common/backend/java/ide_java",title:"IDE guidelines for the Java Rest API",description:"IDE guidelines for the Java Rest API",source:"@site/docs/workloads/common/backend/java/ide_java.md",sourceDirName:"workloads/common/backend/java",slug:"/workloads/common/backend/java/ide_java",permalink:"/docs/workloads/common/backend/java/ide_java",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ide_java",title:"IDE guidelines for the Java Rest API",sidebar_label:"IDE guidelines",hide_title:!1,hide_table_of_contents:!1,description:"IDE guidelines for the Java Rest API",keywords:["java","rest","api","ide","ide guidelines","plugins","code quality","lombok","sonarlint","spring assistant","check style","google java format","spotbugs","jacoco","setups","pom"]},sidebar:"docs",previous:{title:"Using the Maven Scaffolding",permalink:"/docs/workloads/common/backend/java/scaffolding_java"},next:{title:"Maven & Spring Profiles",permalink:"/docs/workloads/common/backend/java/maven_spring_profiles"}},u={},d=[{value:"IDE guidelines",id:"ide-guidelines",level:2},{value:"Plugins used in POM",id:"plugins-used-in-pom",level:3},{value:"Set up the project",id:"set-up-the-project",level:3},{value:"How to import the whole project",id:"how-to-import-the-whole-project",level:4},{value:"What setup required to get it up and running",id:"what-setup-required-to-get-it-up-and-running",level:4},{value:"Code Quality",id:"code-quality",level:3},{value:"Formatter",id:"formatter",level:4},{value:"Validating and applying formatting",id:"validating-and-applying-formatting",level:5},{value:"Verifying common programming flaws",id:"verifying-common-programming-flaws",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"ide-guidelines",children:"IDE guidelines"}),"\n",(0,a.jsx)(n.p,{children:"The IDE we have used is Intellij."}),"\n",(0,a.jsx)(n.p,{children:"We recommend that you install the following plugins:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Lombok - To reduce the amount of boiler-plate code that needs to be written"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.sonarlint.org/",children:"Sonarlint"})," - Fix and detect code quality issues"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/10229-spring-assistant",children:"Spring Assistant"})," - An IntelliJ plugin for aiding Spring development projects"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"(https://spring.io/tools)",children:"Spring Tools"})," - Adds Spring support for IDEs"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://checkstyle.sourceforge.io/",children:"CheckStyle"})," - Flags up issues with coding style"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/Ensono/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml",children:"google-java-format Formatter"})," - Formats code according to configuration"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"plugins-used-in-pom",children:"Plugins used in POM"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Lombok - Avoids need to write e.g. Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode) in Java classes."}),"\n",(0,a.jsx)(n.li,{children:"JaCoCo - A free Java code test coverage library."}),"\n",(0,a.jsx)(n.li,{children:"Surefire - Used for reporting purposes (creates reports based on tests in the Java test package)."}),"\n",(0,a.jsx)(n.li,{children:"fmt-maven-plugin - Formats the java code based on rules in java-google-style.xml."}),"\n",(0,a.jsx)(n.li,{children:"Spotbugs - Performs a static analysis of the Java code to check for bugs."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"set-up-the-project",children:"Set up the project"}),"\n",(0,a.jsx)(n.h4,{id:"how-to-import-the-whole-project",children:"How to import the whole project"}),"\n",(0,a.jsxs)(n.p,{children:["In the IDE(We used Intellij) go to File -> New -> Project.\nSet project SDK to Java 11. Click Next -> Next\n",(0,a.jsx)(n.img,{alt:"New Project",src:t(1554).A+"",width:"1377",height:"929"})]}),"\n",(0,a.jsxs)(n.p,{children:["Choose the java project folder\n",(0,a.jsx)(n.img,{alt:"New Java Project",src:t(3366).A+"",width:"1366",height:"925"}),"\nclick finish."]}),"\n",(0,a.jsx)(n.h4,{id:"what-setup-required-to-get-it-up-and-running",children:"What setup required to get it up and running"}),"\n",(0,a.jsxs)(n.p,{children:['Open up the "java" folder and right click on pom.xml and choose "Add as Maven Project".\nClick on Run -> Edit Configurations\n',(0,a.jsx)(n.img,{alt:"Run Configurations",src:t(1953).A+"",width:"904",height:"622"}),"\nClick on Add new Configuration and choose Application/Spring boot\n",(0,a.jsx)(n.img,{alt:"Run Configurations_1",src:t(3851).A+"",width:"1048",height:"673"}),'\nChoose the main class as "Application.java" and set any relevant variables, such as to set environment variable\nfor ',(0,a.jsx)(n.strong,{children:"AZURE_COSMOSDB_KEY"})," and set JRE to Java 11. Click OK\n",(0,a.jsx)(n.img,{alt:"Run Configurations_2",src:t(106).A+"",width:"1345",height:"859"})]}),"\n",(0,a.jsxs)(n.p,{children:["Open Application.java file and right click and choose run Application.",(0,a.jsx)(n.img,{alt:"Run Java Application",src:t(7360).A+"",width:"1540",height:"1014"})]}),"\n",(0,a.jsx)(n.h3,{id:"code-quality",children:"Code Quality"}),"\n",(0,a.jsx)(n.h4,{id:"formatter",children:"Formatter"}),"\n",(0,a.jsxs)(n.p,{children:["Install the ",(0,a.jsx)(n.code,{children:"intellij-java-google-style.xml"})," formatter configuration file into the IDE from ",(0,a.jsx)(n.a,{href:"https://github.com/Ensono/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml",children:"here"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The Java source code will automatically be reformatted to comply with the ",(0,a.jsx)(n.a,{href:"https://google.github.io/styleguide/javaguide.html",children:"Google Java Style"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You can override the settings locally in the codebase by adding, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"//@formatter:off\nmanually formatted code\n///@formatter:on\n"})}),"\n",(0,a.jsx)(n.h5,{id:"validating-and-applying-formatting",children:"Validating and applying formatting"}),"\n",(0,a.jsxs)(n.p,{children:["From the ",(0,a.jsx)(n.code,{children:"<PROJECT-NAME>/java"})," folder run"]}),"\n",(0,a.jsxs)(r.A,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],children:[(0,a.jsx)(s.A,{value:"unix",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./mvnw com.coveo:fmt-maven-plugin:check\n"})})}),(0,a.jsx)(s.A,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mvnw.cmd com.coveo:fmt-maven-plugin:check\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"To validate the current formatting. You can then run the below code to apply formatting to the\nsource code."}),"\n",(0,a.jsxs)(r.A,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],children:[(0,a.jsx)(s.A,{value:"unix",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./mvnw com.coveo:fmt-maven-plugin:format\n"})})}),(0,a.jsx)(s.A,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mvnw.cmd com.coveo:fmt-maven-plugin:format\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"verifying-common-programming-flaws",children:"Verifying common programming flaws"}),"\n",(0,a.jsxs)(r.A,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],children:[(0,a.jsx)(s.A,{value:"unix",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./mvnw spotbugs:check\n"})})}),(0,a.jsx)(s.A,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mvnw.cmd spotbugs:check\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const i={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),i=t(4164),r=t(3104),s=t(6347),o=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,l]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=a.find((e=>e.default)))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,d]=g({queryString:t,groupId:i}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,r]=(0,u.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),f=(()=>{const e=null!=c?c:m;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),v(e)}),[d,v,r]),tabValues:r}}var v=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(c(n),s(i))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=l.indexOf(e.currentTarget)+1;t=null!=(a=l[n])?a:l[0];break}case"ArrowLeft":{var i;const n=l.indexOf(e.currentTarget)-1;t=null!=(i=l[n])?i:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(x,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},1554:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/new_java_project-e8e9490f10c6649dbb58791306565548.png"},3366:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/new_java_project_1-7a59f9d8d8bc4f4cc5c0f56c0a56a748.png"},1953:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/run_configuration-8e78ac0c89d26029063ad8ed1978e076.png"},3851:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/run_configuration_1-77d3b8880dec264fc3ef5534a982cec2.png"},106:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/run_configuration_2-c59de32a330a307b01632b81da844e19.png"},7360:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/run_java_application-5850fef9cbf5f332cbf52792d4b1c7e6.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);