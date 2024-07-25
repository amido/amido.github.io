"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6395],{7674:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(4848),r=s(8453);const i={id:"infrastructure",title:"Infrastructure",sidebar_label:"Infrastructure",description:"Using Ensono Stacks with NextJs Authentication and Session Management",keywords:["Nx","monorepo","stacks","Generator","Executor","ensono"]},o=void 0,l={id:"nextjs/infrastructure",title:"Infrastructure",description:"Using Ensono Stacks with NextJs Authentication and Session Management",source:"@site/docs/nextjs/infrastructure.md",sourceDirName:"nextjs",slug:"/nextjs/infrastructure",permalink:"/docs/nextjs/infrastructure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"infrastructure",title:"Infrastructure",sidebar_label:"Infrastructure",description:"Using Ensono Stacks with NextJs Authentication and Session Management",keywords:["Nx","monorepo","stacks","Generator","Executor","ensono"]},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/nextjs/authentication"},next:{title:"Ensono Stacks Linting",permalink:"/docs/linting/eslint"}},a={},c=[{value:"How to enable Redis for Next Auth",id:"how-to-enable-redis-for-next-auth",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"how-to-enable-redis-for-next-auth",children:"How to enable Redis for Next Auth"}),"\n",(0,n.jsxs)(t.p,{children:["If you wish to use Redis for authentication, please ensure that the variables within ",(0,n.jsx)(t.code,{children:"~/build/azDevOps/azure/pipeline-vars.yml"})," relating to redis have been populated; see below for more details:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"- name: create_redis\n  value: true\n- name: redis_resource_group_name\n  value: yourRGName\n- name: maxmemory_policy\n  value: allkeys-lru\n- name: sku_name\n  value: Basic\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To enable redis, ",(0,n.jsx)(t.code,{children:"create_redis"})," must always be true. ",(0,n.jsx)(t.code,{children:"redis_resource_group_name"})," should be an existing resource group that you wish for redis to be created in. ",(0,n.jsx)(t.code,{children:"maxmemory_policy"})," and ",(0,n.jsx)(t.code,{children:"sku_name"})," should be populated with your specific values, these values can be:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Accepted Values"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"sku_name"})}),(0,n.jsx)(t.td,{children:"The SKU Redis will use, and the features included"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The provider to be installed"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Basic"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/pricing/details/cache/",children:"View all available options here"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"maxmemory_policy"})}),(0,n.jsx)(t.td,{children:"Policy redis will enforce on data stored"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"volatile-lru"}),": The default eviction policy. It removes the least recently used key out of all the keys with an expiration set."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"allkeys-lru"}),": Removes the least recently used key."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"volatile-random"}),": Removes a random key that has an expiration set."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"allkeys-random"}),": Removes a random key."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"volatile-ttl"}),": Removes the key with the shortest time to live based on the expiration set for it."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"noeviction"}),": No eviction policy. Returns an error message if you attempt to insert data."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"volatile-lfu"}),": Evicts the least frequently used keys out of all keys with an expire field set."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"allkeys-lfu"}),": Evicts the least frequently used keys out of all keys."]})]})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"allkeys-lru"})}),(0,n.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var n=s(6540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);