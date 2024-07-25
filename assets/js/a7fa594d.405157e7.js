"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5650],{8653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(4848),a=n(8453),r=n(1470),l=n(9365);const i={id:"execute_serenity_api_tests",title:"Running API tests with Serenity",sidebar_label:"REST API testing with Serenity",description:"How to test rest api application with serenity bdd and serenity rest assured",keywords:["java","rest","api","serenity","serenity bdd","rest assured","run serenity tests","serenity test example","test runner","serenity test report","execute parallel tests","framework","testing","test"]},u=void 0,o={id:"workloads/azure/backend/java/testing/execute_serenity_api_tests",title:"Running API tests with Serenity",description:"How to test rest api application with serenity bdd and serenity rest assured",source:"@site/docs/workloads/azure/backend/java/testing/execute_serenity_api_tests.md",sourceDirName:"workloads/azure/backend/java/testing",slug:"/workloads/azure/backend/java/testing/execute_serenity_api_tests",permalink:"/docs/workloads/azure/backend/java/testing/execute_serenity_api_tests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"execute_serenity_api_tests",title:"Running API tests with Serenity",sidebar_label:"REST API testing with Serenity",description:"How to test rest api application with serenity bdd and serenity rest assured",keywords:["java","rest","api","serenity","serenity bdd","rest assured","run serenity tests","serenity test example","test runner","serenity test report","execute parallel tests","framework","testing","test"]},sidebar:"docs",previous:{title:"Pre-deployment tests and reports",permalink:"/docs/workloads/azure/backend/java/testing/testing_java"},next:{title:"REST API testing with Karate",permalink:"/docs/workloads/azure/backend/java/testing/execute_karate_api_tests"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Note",id:"note",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://serenity-bdd.github.io/theserenitybook/latest/index.html",children:"Serenity BDD"})," is an open source library that aims to make the idea of living documentation a reality.\nIt also uses the test results to produce illustrated, narrative reports that document and describe what your application does and how it works."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(t.p,{children:"This page explains how to setup the API testing framework built with Java and Serenity BDD."}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["Set an environment variable ",(0,s.jsx)(t.code,{children:"BASE_URL"})," (e.g. if testing locally set it to ",(0,s.jsx)(t.code,{children:"http://localhost:9000"}),") or use the ",(0,s.jsx)(t.code,{children:"export BASE_URL=http://localhost:9000"})," command."]}),"\n",(0,s.jsx)(t.h2,{id:"running-the-tests",children:"Running the tests"}),"\n",(0,s.jsxs)(t.p,{children:["To run all tests please navigate to ",(0,s.jsx)(t.code,{children:"./api-tests"})," path and execute the following command:"]}),"\n",(0,s.jsxs)(r.A,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],children:[(0,s.jsx)(l.A,{value:"unix",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"./mvnw clean verify\n"})})}),(0,s.jsx)(l.A,{value:"windows",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mvnw.cmd clean verify\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"To run the Smoke tests independently, use:"}),"\n",(0,s.jsxs)(r.A,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],children:[(0,s.jsx)(l.A,{value:"unix",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'./mvnw clean verify -Dcucumber.options="--tags @Smoke"\n'})})}),(0,s.jsx)(l.A,{value:"windows",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'mvnw.cmd clean verify -Dcucumber.options="--tags @Smoke"\n'})})})]}),"\n",(0,s.jsx)(t.p,{children:"To run the Functional tests independently, use:"}),"\n",(0,s.jsxs)(r.A,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],children:[(0,s.jsx)(l.A,{value:"unix",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'./mvnw clean verify -Dcucumber.options="--tags @Functional"\n'})})}),(0,s.jsx)(l.A,{value:"windows",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'mvnw.cmd clean verify -Dcucumber.options="--tags @Functional"\n'})})})]}),"\n",(0,s.jsx)(t.p,{children:"To run tests by other tags and ignore tests that contain @Ignore tags use:"}),"\n",(0,s.jsxs)(r.A,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],children:[(0,s.jsx)(l.A,{value:"unix",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'./mvnw clean verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"\n'})})}),(0,s.jsx)(l.A,{value:"windows",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'mvnw.cmd clean verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"\n'})})})]}),"\n",(0,s.jsx)("h3",{children:" Test Report "}),"\n",(0,s.jsxs)(t.p,{children:["As a result of the test execution - ",(0,s.jsx)(t.code,{children:"serenity-maven-plugin"})," will automatically generate the test report - ",(0,s.jsx)(t.code,{children:"./api-tests/target/site/serenity/index.html"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(t.p,{children:["To manually aggregate the Serenity report execute the following command under ",(0,s.jsx)(t.code,{children:"./api-tests"})," directory:"]}),"\n",(0,s.jsxs)(r.A,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],children:[(0,s.jsx)(l.A,{value:"unix",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:" ./mvnw serenity:aggregate\n"})})}),(0,s.jsx)(l.A,{value:"windows",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mvnw.cmd serenity:aggregate\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164);const a={tabItem:"tabItem_Ymn6"};var r=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(6540),a=n(4164),r=n(3104),l=n(6347),i=n(205),u=n(7485),o=n(1682),c=n(679);function d(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[l,u]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=s.find((e=>e.default)))?t:s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,d]=g({queryString:n,groupId:a}),[v,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,r]=(0,c.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),x=(()=>{const e=null!=o?o:v;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{x&&u(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);u(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function f(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==s&&(o(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var s;const t=u.indexOf(e.currentTarget)+1;n=null!=(s=u[t])?s:u[0];break}case"ArrowLeft":{var a;const t=u.indexOf(e.currentTarget)-1;n=null!=(a=u[t])?a:u[u.length-1];break}}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...r,className:(0,a.A)("tabs__item",x.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===t}),children:null!=n?n:t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=v(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(f,{...t,...e}),(0,b.jsx)(w,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var s=n(6540);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);