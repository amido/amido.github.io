(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{149:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(t),f=n,y=l["".concat(i,".").concat(f)]||l[f]||d[f]||s;return t?o.a.createElement(y,c(c({ref:r},u),{},{components:t})):o.a.createElement(y,c({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=f;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<s;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),s=(t(0),t(149)),i={id:"repository_overview_netcore",title:"Repository Overview",sidebar_label:"Repository"},c={unversionedId:"workloads/netcore/project_structure/repository_overview_netcore",id:"workloads/netcore/project_structure/repository_overview_netcore",isDocsHomePage:!1,title:"Repository Overview",description:"`text",source:"@site/docs/workloads/netcore/project_structure/repository_overview_netcore.md",slug:"/workloads/netcore/project_structure/repository_overview_netcore",permalink:"/stacks/docs/workloads/netcore/project_structure/repository_overview_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/netcore/project_structure/repository_overview_netcore.md",version:"current",sidebar_label:"Repository",sidebar:"docs",previous:{title:"Architecture Overview",permalink:"/stacks/docs/workloads/netcore/project_structure/architecture_overview_netcore"},next:{title:"Project Structure",permalink:"/stacks/docs/workloads/netcore/project_structure/project_structure_netcore"}},a=[],u={rightToc:a};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"\u251c\u2500\u2500 build\n\u2502   \u251c\u2500\u2500 azDevOps: stores configuration, build steps and scripts used by azure dev ops only\n\u2502   \u251c\u2500\u2500 jenkins: stores configuration, build steps and scripts used by jenkins only\n\u2502   \u2514\u2500\u2500 scripts: stores scripts used by build steps that can be reused by multiple\n|                tools without changes. ie: Docker script for Container Image creation\n\u251c\u2500\u2500 deploy\n|   \u251c\u2500\u2500 k8s: stores yaml files for k8s deployments. i.e: deployments, services,\n|   |   |     configMap and related dependencies for each service in an application\n|   |   \u251c\u2500\u2500 ui: stores yaml for ui service\n|   |   \u2514\u2500\u2500 api: stores yaml for the api service and configuration files\n\u2502   \u2502       \u251c\u2500\u2500 base: store raw yaml used by k8s\n\u2502   \u2502       \u251c\u2500\u2500 kustomization: store kustomize files(for kubectl apply -k)\n\u2502   \u2502       \u2502   \u251c\u2500\u2500 dev: configuration files for dev environment\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 test: configuration files for test environment\n\u2502   \u2502       \u2514\u2500\u2500 helm-chart: store helm chart files(if helm used)\n\u2502   \u2502           \u2514\u2500\u2500 templates\n|   \u251c\u2500\u2500 serviceFabric: scripts used to deploy applications on serviceFabric\n|   \u251c\u2500\u2500 terraform: terraform scripts used to provision dependencies only needed by this application\n|   \u2514\u2500\u2500 scripts: deployment scripts shared by multiple tools. ie: Variable substitution\n\u251c\u2500\u2500 contracts: stores swagger specs, ui mocks and other documents describing the overall solution\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 services (i.e: apis, queue listener, scheduled jobs)\n    \u251c\u2500\u2500 tests: stores tests not built in other services solutions(functional tests, performance, etc)\n    \u2514\u2500\u2500 ui: stores the front end service and components\n")))}p.isMDXComponent=!0}}]);