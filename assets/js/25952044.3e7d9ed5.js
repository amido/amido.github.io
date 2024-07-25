"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7632],{5450:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(4848),o=t(8453);const i={id:"authentication",title:"Authentication and Session Management",sidebar_label:"Overview",description:"Using Ensono Stacks with NextJs Authentication and Session Management",keywords:["Nx","monorepo","stacks","Generator","Executor","ensono"]},a=void 0,r={id:"nextjs/authentication",title:"Authentication and Session Management",description:"Using Ensono Stacks with NextJs Authentication and Session Management",source:"@site/docs/nextjs/authentication.md",sourceDirName:"nextjs",slug:"/nextjs/authentication",permalink:"/docs/nextjs/authentication",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication and Session Management",sidebar_label:"Overview",description:"Using Ensono Stacks with NextJs Authentication and Session Management",keywords:["Nx","monorepo","stacks","Generator","Executor","ensono"]},sidebar:"docs",previous:{title:"Ensono Stacks Module Federation",permalink:"/docs/module_federation/nextjs_plugin"},next:{title:"Infrastructure",permalink:"/docs/nextjs/infrastructure"}},d={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Refresh Token Rotation",id:"refresh-token-rotation",level:3},{value:"Session Storage",id:"session-storage",level:2},{value:"Cookie-Based Sessions",id:"cookie-based-sessions",level:3},{value:"Database-Based Sessions (Redis)",id:"database-based-sessions-redis",level:3},{value:"Guest Sessions",id:"guest-sessions",level:2},{value:"Middleware",id:"middleware",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Authentication and Session Management is provided with a custom implementation of ",(0,n.jsx)(s.a,{href:"https://authjs.dev/",children:"Auth.js (Next-auth)"}),". To configure Authentication into your Ensono Stacks workspace follow the Next.js plugin documentation for the ",(0,n.jsxs)(s.a,{href:"/docs/getting_started/next/ensono-stacks-next#ensono-stacksnextnext-auth",children:["@ensono-stacks/next",":next-auth"," generator"]}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Ensono Stacks is currently leveraging the v5 beta builds for Auth.js, to leverage full support with Next.js' App Router."})}),"\n",(0,n.jsx)(s.h2,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(s.p,{children:"Auth.js supports a wide variety of custom authentication providers, making it easy to intergrate with any compliant OAuth2 or OpenID provider.\nEnsono Stacks continually adds full support for industry leading providers that have a proven track record and meet Ensono's internal audit standards."}),"\n",(0,n.jsx)(s.p,{children:"The current list of supported providers:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Microsoft Entra Id (Azure AD)"}),"\n",(0,n.jsx)(s.li,{children:"Auth0"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For a full list of Auth.js providers, you can ",(0,n.jsx)(s.a,{href:"https://authjs.dev/reference/core/providers",children:"review the list here"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"refresh-token-rotation",children:"Refresh Token Rotation"}),"\n",(0,n.jsx)(s.p,{children:"Ensono Stacks supports Refresh token rotation for any compliant OAuth2 or OpenID provider."}),"\n",(0,n.jsx)(s.h2,{id:"session-storage",children:"Session Storage"}),"\n",(0,n.jsx)(s.p,{children:"Auth.js has two different strategies for holding session management, cookie based or database."}),"\n",(0,n.jsx)(s.h3,{id:"cookie-based-sessions",children:"Cookie-Based Sessions"}),"\n",(0,n.jsx)(s.p,{children:"Cookie-based sessions enables a quick start without the need for additional infrastructure. All session data is stored within an encrypted cookie as a secure JWT (JSON Web Token)."}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"Browsers impose a max cookie size limit of 4096 bytes. We recommend you also consult your infrastructure limits, as there could be restrictions imposed on total request header sizes."})}),"\n",(0,n.jsx)(s.h3,{id:"database-based-sessions-redis",children:"Database-Based Sessions (Redis)"}),"\n",(0,n.jsx)(s.p,{children:"Auth.js supports adapters that transfer account, user and session data to a database. A Session cookie on the user's device links the relevant data and is composed on the server and sent back to the client."}),"\n",(0,n.jsx)(s.p,{children:"Ensono Stacks supports Redis for session storage, as it is proven, fast in-memory cache solution, essential for efficient data fetching on each request."}),"\n",(0,n.jsx)(s.h2,{id:"guest-sessions",children:"Guest Sessions"}),"\n",(0,n.jsx)(s.p,{children:"While Auth.js does not natively support guest or anonymous sessions, Ensono Stacks provides a configuration to enable this feature with full support for your chosen session storage."}),"\n",(0,n.jsx)(s.p,{children:"By default, guest users are assigned a \u201cguest\u201d user role, allowing you to implement necessary role-based controls within Next.js."}),"\n",(0,n.jsxs)(s.p,{children:["A basic Guest Session Component is added to the ",(0,n.jsx)(s.code,{children:"/src/components"})," directory in your Next.js application. Including this client component will initiate the guest session."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:'import { SessionProvider } from "next-auth/react";\n\nimport GuestSession from "../components/guest-session";\n\nexport default async function Index() {\n  return (\n    <SessionProvider>\n      <GuestSession />\n      ...\n    </SessionProvider>\n  );\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Session Merging is available with the Redis Session Storage option, allowing the guest session data to be migrated to the Authenticated session."}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"Cookie based sessions have limited functionality as all session data is stored on the user's device. Session merging is not currently possible for this storage as the previous session is removed after successfully authenticating with your provider."})}),"\n",(0,n.jsx)(s.h2,{id:"middleware",children:"Middleware"}),"\n",(0,n.jsx)(s.p,{children:"Auth.js offers Next.js middleware capable of updating session expiry with each matching request. Auth.js core is fully supported in the edge runtime, so if you\u2019re using cookie-based sessions, you should have no issues utilising this feature."}),"\n",(0,n.jsxs)(s.p,{children:["However, adapters like our Redis implementation are not supported in the edge runtime due to the need for built-in modules that are unavailable. For more information on Auth.js\u2019 approach to edge runtime compatibility, you can ",(0,n.jsx)(s.a,{href:"https://authjs.dev/guides/edge-compatibility",children:"read more here"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"To add Middleware to your Next.js application:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"title=/apps/nextApp/middleware.ts",children:'export { auth as middleware } from "@my-stacks-workspace/auth";\n'})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(6540);const o={},i=n.createContext(o);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);