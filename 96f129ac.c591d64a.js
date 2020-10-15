(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),i=(t(0),t(133)),c={id:"dependency_management",title:"Dependencies and Version Management",sidebar_label:"Dependencies and Version Management",hide_table_of_contents:!1},o={unversionedId:"packages/maven/dependency_management",id:"packages/maven/dependency_management",isDocsHomePage:!1,title:"Dependencies and Version Management",description:"Maven - build and dependency management",source:"@site/docs/packages/maven/dependency_management.md",slug:"/packages/maven/dependency_management",permalink:"/stacks/docs/packages/maven/dependency_management",editUrl:"https://github.com/amido/stacks/docs/packages/maven/dependency_management.md",version:"current",sidebar_label:"Dependencies and Version Management",sidebar:"docs",previous:{title:"Publishing NuGet Packages",permalink:"/stacks/docs/packages/nuget/publishing_nuget"},next:{title:"FAQ",permalink:"/stacks/docs/support/faq"}},p=[{value:"Maven - build and dependency management",id:"maven---build-and-dependency-management",children:[]}],l={rightToc:p};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"maven---build-and-dependency-management"},"Maven - build and dependency management"),Object(i.b)("p",null,"Java Application uses Maven as a build and dependency management tool."),Object(i.b)("p",null,"The following attributes groupId, artifactId, and version uniquely identify every Maven-managed resource in the repository.\nThese attributes at the top of the file describe your Maven project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Dependencies :")),Object(i.b)("p",null,"The dependencies section of the POM describes all project's dependencies and versions used by the dependencies.\nInstallation of maven packages, and the compilation of the application are part of Azure DevOps build pipeline."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Plugins :")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"1)Build Plugins\n2)Reporting Plugins\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Build Plugins :")),Object(i.b)("p",null,"Build plugins will be executed during the build time, and it is configured in the ",Object(i.b)("em",{parentName:"p"},"build")," element."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"i) fmt-maven-plugin.\nii) Owasp-dependency-check-plugin.\niii) Spotbug plugin\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reporting Plugins :")),Object(i.b)("p",null,"Reporting plugins will be executed during the site generation, and it is configured in the ",Object(i.b)("em",{parentName:"p"},"reporting")," element."),Object(i.b)("p",null,"i) Surefire (Unit test reports) - reports created in appropriate directory - target/surefire-reports"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Maven build lifecycle :"),"\nExecute maven build life cycle locally when new dependencies are added to make sure project deployment, project cleaning\nand documentations are fine."))}d.isMDXComponent=!0},133:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(t),b=a,m=u["".concat(c,".").concat(b)]||u[b]||s[b]||i;return t?r.a.createElement(m,o(o({ref:n},l),{},{components:t})):r.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=b;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);