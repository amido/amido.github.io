"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4285],{9871:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var r=t(4848),o=t(8453);const i={id:"configure_swagger_netcore",title:"Configure Swagger",sidebar_label:"Swagger",hide_title:!0,hide_table_of_contents:!0,description:"Configure Swagger for .NET Core REST API application",keywords:[".net core","rest","api","tests","stacks","swagger","registration","controller","configuration","dotnet"]},a=void 0,s={id:"workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_netcore",title:"Configure Swagger",description:"Configure Swagger for .NET Core REST API application",source:"@site/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_netcore.md",sourceDirName:"workloads/azure/backend/netcore/architecture/swagger_configuration",slug:"/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_netcore",permalink:"/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"configure_swagger_netcore",title:"Configure Swagger",sidebar_label:"Swagger",hide_title:!0,hide_table_of_contents:!0,description:"Configure Swagger for .NET Core REST API application",keywords:[".net core","rest","api","tests","stacks","swagger","registration","controller","configuration","dotnet"]},sidebar:"docs",previous:{title:"NuGet Dependencies",permalink:"/docs/workloads/azure/backend/netcore/architecture/nuget_dependencies"},next:{title:"Swagger UI",permalink:"/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore"}},c={},g=[{value:"Configure Swagger",id:"configure-swagger",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"configure-swagger",children:"Configure Swagger"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.p,{children:["The document generation configuration is done in the Startup class of your API, within the ConfigureServices(IServiceCollection services) method. A call to the extension method ",(0,r.jsx)(n.code,{children:"AddSwaggerGen(Action<SwaggerGenOptions> setupAction)"})," is made passing an action to generate the documentation options."]}),"\n",(0,r.jsxs)(n.p,{children:["Each call to ",(0,r.jsx)(n.code,{children:"AddSwaggerGen()"})," will generate a new document. The parameters passed will be used to configure the rules for document generation. The output of a document generation process is a simple JSON file. By default the file(spec) will be available on ",(0,r.jsx)(n.code,{children:"/swagger/versionName/swagger.json"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="Startup.cs (Register doc generation)"',children:'public class Startup\n{\n    public IConfiguration Configuration { get; }\n    private readonly IHostingEnvironment _hostingEnv;\n\n    public Startup(IHostingEnvironment env, IConfiguration configuration)\n    {\n        _hostingEnv = env;\n        Configuration = configuration;\n    }\n\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddMvcCore()\n            .AddApiExplorer()\n            ... Omit for brevity ...;\n\n        services\n            .AddSwaggerGen(c =>\n            {\n                //defines the doc version\n                c.SwaggerDoc("v1", new Info\n                {\n                    Version = "v1",\n                    Title = "API",\n                    Description = "APIs endpoints"\n                });\n\n                //will generate models containing only the class name, ignoring the namespace\n                c.CustomSchemaIds(type => type.FriendlyId(false));\n\n                //Enum will be generated as strings\n                c.DescribeAllEnumsAsStrings();\n\n                //Will load the comments provided in the code using / / / , the build will generate the xml file in the output folder.\n                // Make sure the project file contains the attribute <GenerateDocumentationFile>true</GenerateDocumentationFile>\n                c.IncludeXmlComments($"{AppContext.BaseDirectory}{Path.DirectorySeparatorChar}{_hostingEnv.ApplicationName}.xml");\n\n                // Show only operations where route starts with v1\n                c.DocumentFilter<VersionPathFilter>("/v1");\n\n                // Include DataAnnotation attributes on Controller Action parameters as Swagger validation rules (e.g required, pattern, ..)\n                // Enforce parameters provided in the path to be required\n                // Use [ValidateModelState] on Actions to actually validate it in C# as well!\n                c.OperationFilter<GeneratePathParamsValidationFilter>();\n            });\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The snippet above demonstrates the usage of ",(0,r.jsx)(n.code,{children:".AddSwaggerGen()"})," to register the document generation. The output of this snipped will generate a document found on the path ",(0,r.jsx)(n.code,{children:"/swagger/v1/swagger.json"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);