"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[717],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,f=d["".concat(i,".").concat(p)]||d[p]||v[p]||l;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[d]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,n,r){var t=r(7294);n.Z=function(e){var n=e.children,r=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},4426:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(7462),a=r(7294),l=r(2389),o=r(9443);var u=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(78),s=r(6010),c="tabItem_vU9c";function d(e){var n,r,t,l=e.lazy,o=e.block,d=e.defaultValue,v=e.values,p=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=v?v:b.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),E=(0,i.lx)(m,(function(e,n){return e.value===n.value}));if(E.length>0)throw new Error('Docusaurus error: Duplicate values "'+E.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===d?d:null!=(n=null!=d?d:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(t=b[0])?void 0:t.props.value;if(null!==_&&!m.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=u(),T=h.tabGroupChoices,y=h.setTabGroupChoices,k=(0,a.useState)(_),O=k[0],N=k[1],P=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=T[p];null!=C&&C!==O&&m.some((function(e){return e.value===C}))&&N(C)}var g=function(e){var n=e.currentTarget,r=P.indexOf(n),t=m[r].value;t!==O&&(w(n),N(t),null!=p&&y(p,t))},S=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=P.indexOf(e.currentTarget)+1;r=P[t]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;r=P[a]||P[P.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},m.map((function(e){var n=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":O===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:S,onFocus:g,onClick:g},null!=r?r:n)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function v(e){var n=(0,l.Z)();return a.createElement(d,(0,t.Z)({key:String(n)},e))}},9443:function(e,n,r){var t=(0,r(7294).createContext)(void 0);n.Z=t},9316:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return v},default:function(){return f}});var t=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(4426),u=r(8215),i=["components"],s={id:"environment_variables_nodejs_ssr",title:"Environment Variables",sidebar_label:"Environment Variables",hide_title:!1,hide_table_of_contents:!1},c=void 0,d={unversionedId:"workloads/azure/frontend-archived/SSR/environment_variables_nodejs_ssr",id:"workloads/azure/frontend-archived/SSR/environment_variables_nodejs_ssr",isDocsHomePage:!1,title:"Environment Variables",description:"Environment Variables",source:"@site/docs/workloads/azure/frontend-archived/SSR/enviroment_ssr.md",sourceDirName:"workloads/azure/frontend-archived/SSR",slug:"/workloads/azure/frontend-archived/SSR/environment_variables_nodejs_ssr",permalink:"/docs/workloads/azure/frontend-archived/SSR/environment_variables_nodejs_ssr",tags:[],version:"current",frontMatter:{id:"environment_variables_nodejs_ssr",title:"Environment Variables",sidebar_label:"Environment Variables",hide_title:!1,hide_table_of_contents:!1}},v=[{value:"Environment Variables",id:"environment-variables",children:[],level:2}],p={toc:v};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("p",null,"Before you can start developing you will need to replace your environment variables with the appropriated values.\nThis values will be automatically picked up and used by the underlying server and web client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'##\n NODE_ENV=development\n PORT={PORT}\n APP_BASE_URL=http://localhost\n APP_BASE_PATH=""\n\n')),(0,l.kt)(o.Z,{defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("div",null,"set NODE_ENV=development ",(0,l.kt)("br",null),"set PORT= #### ",(0,l.kt)("br",null),"set APP_BASE_URL=http://localhost ",(0,l.kt)("br",null),'set APP_BASE_PATH="" ',(0,l.kt)("br",null),"set NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= #### ",(0,l.kt)("br",null),"set NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET= #### ",(0,l.kt)("br",null),"set NEXT_PUBLIC_CONTENTFUL_SPACE_ID= #### ",(0,l.kt)("br",null),"set NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= ### ",(0,l.kt)("br",null))),(0,l.kt)(u.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("div",null,"export NODE_ENV=development ",(0,l.kt)("br",null),"export PORT= #### ",(0,l.kt)("br",null),"export APP_BASE_URL=http://localhost ",(0,l.kt)("br",null),'export APP_BASE_PATH= "" ',(0,l.kt)("br",null),"export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= #### ",(0,l.kt)("br",null),"export NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET= #### ",(0,l.kt)("br",null),"export NEXT_PUBLIC_CONTENTFUL_SPACE_ID= #### ",(0,l.kt)("br",null),"export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= ### ",(0,l.kt)("br",null)))))}f.isMDXComponent=!0}}]);