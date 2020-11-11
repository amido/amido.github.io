(window.webpackJsonp=window.webpackJsonp||[]).push([[111,86],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(210)),i=n(50),c={id:"configure_swagger_ui_netcore",title:"Configure Swagger UI",hide_title:!0,sidebar_label:"Swagger UI",hide_table_of_contents:!0},l={unversionedId:"workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore",id:"workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore",isDocsHomePage:!1,title:"Configure Swagger UI",description:"Configure Swagger UI",source:"@site/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore.md",slug:"/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore",version:"current",sidebar_label:"Swagger UI",sidebar:"docs",previous:{title:"Configure Swagger",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_netcore"},next:{title:"Workloads on Google Cloud Platform",permalink:"/stacks/docs/workloads/gcp/workloads_gcp_readme"}},s=[{value:"Configure Swagger UI",id:"configure-swagger-ui",children:[{value:"Configure the Swagger U.Interface to consume the generated documents",id:"configure-the-swagger-uinterface-to-consume-the-generated-documents",children:[]}]}],g={rightToc:s};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},g,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configure-swagger-ui"},"Configure Swagger UI"),Object(o.b)("br",null),Object(o.b)("h3",{id:"configure-the-swagger-uinterface-to-consume-the-generated-documents"},"Configure the Swagger U.Interface to consume the generated documents"),Object(o.b)("p",null,"To configure the Swagger UI, spec path along with the name of the spec must be passed in the ",Object(o.b)("inlineCode",{parentName:"p"},"SwaggerEndpoint()")," method within the ",Object(o.b)("inlineCode",{parentName:"p"},"UseSwaggerUI()")," extension."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp",metastring:'{19} title="Startup.cs"',"{19}":!0,title:'"Startup.cs"'}),'public class Startup\n{\n    public Startup(IHostingEnvironment env, IConfiguration configuration){... Omit for brevity ...}\n\n    public void ConfigureServices(IServiceCollection services){ ... Omit for brevity ... }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IHostingEnvironment env)\n    {\n        app\n            .UseMvc()\n            .UseSwagger()\n            .UseSwaggerUI(c =>\n            {\n                //Display the OperationID (ActionName) in the UI\n                c.DisplayOperationId();\n\n                //Load the document generated by AddSwaggerGen() inside ConfigureServices()\n                c.SwaggerEndpoint("v1/swagger.json", "Menu (version 1)");\n            });\n    }\n}\n')),Object(o.b)("p",null,"The above snippet registers the ",Object(o.b)("inlineCode",{parentName:"p"},"v1/swagger.json")," in the UI. Once the UI is loaded,  the documents registered by ",Object(o.b)("inlineCode",{parentName:"p"},"SwaggerEndpoint()")," will be loaded."),Object(o.b)("br",null),Object(o.b)("p",null,"For registering multiple spec versions, simply register multiple document generations by calling the ",Object(o.b)("inlineCode",{parentName:"p"},".AddSwaggerGen(c => ...)")," multiple times, changing just the document filter from ",Object(o.b)("inlineCode",{parentName:"p"},"/v1")," to the version desired."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="Swagger multiple doc spec"',title:'"Swagger',multiple:!0,doc:!0,'spec"':!0}),'From:\nSwaggerDoc("v1", new Info());\nc.DocumentFilter<VersionPathFilter>("/v1");\n\nTo:\nSwaggerDoc("v2", new Info());\nc.DocumentFilter<VersionPathFilter>("/v2");\n')),Object(o.b)("p",null,"And register the new endpoint in the UI like below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="Swagger UI registration"',title:'"Swagger',UI:!0,'registration"':!0}),'app\n    .UseMvc()\n    .UseSwagger()\n    .UseSwaggerUI(c =>\n    {\n        //Display the OperationID (ActionName) in the UI\n        c.DisplayOperationId();\n\n        //Load the document generated by AddSwaggerGen() inside ConfigureServices()\n        c.SwaggerEndpoint("v1/swagger.json", "Menu (version 1)");\n        c.SwaggerEndpoint("v2/swagger.json", "Menu (version 2)");\n    });\n')),Object(o.b)("p",null,"When multiple versions are available, might be useful to register a general spec with all endpoints"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="Swagger default spec with all endpoints"',title:'"Swagger',default:!0,spec:!0,with:!0,all:!0,'endpoints"':!0}),'SwaggerDoc("all", new Info());\n//c.DocumentFilter<VersionPathFilter>("/v2"); //Remove the filter\n')),Object(o.b)("p",null,"Annotate controllers with endpoint details to group in the right spec.\nOpenAPI uses the concept of tags to group endpoints related to the same resource type, each tag will represent a group in the swagger ui."),Object(o.b)("p",null,"By default, Swagger doc generation creates a tag using the controller name. This way, multiple actions(endpoints) found inside the same controller will be grouped in the same tag."),Object(o.b)("p",null,"The problem with this approach is that makes it harder to group endpoints if they are located on different controllers. To avoid this problem, Swagger can be configured to group the endpoints by ApiGroup."),Object(o.b)("p",null,"ApiGroup is a concept introduced in ASP.NET Core. It requires the controller to be decorated with the attribute ApiExplorerSettingsAttribute, the GroupName  to be set to the Tag expected in swagger as below."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="Controller decorated with Api Group"',title:'"Controller',decorated:!0,with:!0,Api:!0,'Group"':!0}),'[ApiExplorerSettings(GroupName = "Category")]\npublic class AddMenuCategoryController : ControllerBase { ... actions ... }\n')),Object(o.b)("p",null,"To group api endpoints by something other than the default group, change the ",Object(o.b)("inlineCode",{parentName:"p"},"c.DocInclusionPredicate()")," filter used in the default group, otherwise the endpoints won't be included in the docs."),Object(o.b)("p",null,"To group endpoints pass the group predicate to the method ",Object(o.b)("inlineCode",{parentName:"p"},"c.TagActionsBy()"),"."),Object(o.b)("p",null,"The following code has to be added to the swagger doc generation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="Swagger configuration for ApiGroup"',title:'"Swagger',configuration:!0,for:!0,'ApiGroup"':!0}),'services.AddSwaggerGen(c => {\n\n    //By Default, all endpoints are grouped by the controller name\n    //We want to Group by Api Group first, then by controller name if group not provided\n    c.TagActionsBy((api) => new[] { api.GroupName ?? api.ActionDescriptor.RouteValues["controller"] });\n\n    //Include all endpoints available in the document\n    c.DocInclusionPredicate((docName, apiDesc) => { return true; });\n});\n')),Object(o.b)("p",null,"The swagger configuration is complete and the swagger ui should be available as below."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Swagger UI",src:n(289).default})),Object(o.b)(i.default,{next:!0,mdxType:"HideNavigation"}))}u.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),g=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=g(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=g(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},289:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-ui-info-6770d7c76d6846ad13f91895148c2c94.png"},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);t.default=function(e){var t=e.next,n=e.prev;return a.a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var r=document.querySelector("div.pagination-nav__item>a");r&&r.style&&(r.style.display="none")}})),a.a.createElement("div",null)}}}]);