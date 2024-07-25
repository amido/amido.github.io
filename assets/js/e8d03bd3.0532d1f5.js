"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7736],{6552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(4848),r=n(8453);n(1470),n(9365);const s={id:"storybook_stacks",title:"Ensono Stacks Storybook",sidebar_label:"Ensono Stacks Storybook",description:"Using Ensono Stacks with Storybook",keywords:["Nx","monorepo","stacks","Generator","Executor","ensono"]},a=void 0,i={id:"storybook/storybook_stacks",title:"Ensono Stacks Storybook",description:"Using Ensono Stacks with Storybook",source:"@site/docs/storybook/storybook_stacks.md",sourceDirName:"storybook",slug:"/storybook/storybook_stacks",permalink:"/docs/storybook/storybook_stacks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"storybook_stacks",title:"Ensono Stacks Storybook",sidebar_label:"Ensono Stacks Storybook",description:"Using Ensono Stacks with Storybook",keywords:["Nx","monorepo","stacks","Generator","Executor","ensono"]},sidebar:"docs",previous:{title:"Ensono Stacks Linting",permalink:"/docs/linting/eslint"},next:{title:"@ensono-stacks/create-stacks-workspace",permalink:"/docs/getting_started/create-stacks-workspace/ensono-stacks-create-stacks-workspace"}},l={},c=[{value:"Component Isolation",id:"component-isolation",level:4},{value:"Visual Testing",id:"visual-testing",level:4},{value:"Interactive Documentation",id:"interactive-documentation",level:4},{value:"Storybook with Ensono Stacks",id:"storybook-with-ensono-stacks",level:2}];function u(e){const t={a:"a",h2:"h2",h4:"h4",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://storybook.js.org/",children:"Storybook"})," is an open-source tool used to build, test, and showcase individual components or UI elements in isolation."]}),"\n",(0,o.jsx)(t.p,{children:"The primary purpose of Storybook is to facilitate the development and documentation of UI components in a sandboxed environment. Instead of integrating components into a full application, developers can create separate stories for each component, which are essentially individual test cases or scenarios that demonstrate the component's behaviour in different states and use cases."}),"\n",(0,o.jsx)(t.p,{children:"Some of the benefits of Storybook include:"}),"\n",(0,o.jsx)(t.h4,{id:"component-isolation",children:"Component Isolation"}),"\n",(0,o.jsx)(t.p,{children:"Storybook allows developers to work on a single UI component in isolation, without the need to navigate through the whole application. This isolation helps in quicker development, debugging, and testing of components."}),"\n",(0,o.jsx)(t.h4,{id:"visual-testing",children:"Visual Testing"}),"\n",(0,o.jsx)(t.p,{children:"Storybook provides a way to visually test components, making it simpler to catch UI-related bugs and regressions during development."}),"\n",(0,o.jsx)(t.h4,{id:"interactive-documentation",children:"Interactive Documentation"}),"\n",(0,o.jsx)(t.p,{children:"Documentation, usage examples, and interactive demos can be added for each component, which helps in onboarding new team members and maintaining a comprehensive living style guide."}),"\n",(0,o.jsx)(t.h2,{id:"storybook-with-ensono-stacks",children:"Storybook with Ensono Stacks"}),"\n",(0,o.jsxs)(t.p,{children:["Storybook can be added to Ensono Stacks using the ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"../getting_started/next/storybook",children:"Stacks Storybook generator"})}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var o=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(6540),r=n(4164),s=n(3104),a=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){var t,n;return null!=(t=null==(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[a,l]=(0,o.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=o.find((e=>e.default)))?t:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=b({queryString:n,groupId:r}),[m,k]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=null!=c?c:m;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),k(e)}),[d,k,s]),tabValues:s}}var k=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function g(e){let{className:t,block:n,selectedValue:o,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==o&&(c(t),a(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var o;const t=l.indexOf(e.currentTarget)+1;n=null!=(o=l[t])?o:l[0];break}case"ArrowLeft":{var r;const t=l.indexOf(e.currentTarget)-1;n=null!=(r=l[t])?r:l[l.length-1];break}}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":o===t}),children:null!=n?n:t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function x(e){const t=(0,k.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(6540);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);