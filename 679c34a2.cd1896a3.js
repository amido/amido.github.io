(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),h=i,p=b["".concat(a,".").concat(h)]||b[h]||d[h]||r;return n?o.a.createElement(p,l(l({ref:t},u),{},{components:n})):o.a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(2),o=n(6),r=(n(0),n(133)),a={id:"security_netcore",title:"Application Security",sidebar_label:"Security"},l={unversionedId:"workloads/netcore/security_netcore",id:"workloads/netcore/security_netcore",isDocsHomePage:!1,title:"Application Security",description:"Overview",source:"@site/docs/workloads/netcore/security_netcore.md",slug:"/workloads/netcore/security_netcore",permalink:"/stacks/docs/workloads/netcore/security_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/netcore/security_netcore.md",version:"current",sidebar_label:"Security",sidebar:"docs",previous:{title:"Logging with Serilog and Application Insights",permalink:"/stacks/docs/workloads/netcore/logging_netcore"},next:{title:"Architecture Overview",permalink:"/stacks/docs/workloads/netcore/project_structure/architecture_overview_netcore"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Authentication (Verification of JWT access tokens)",id:"authentication-verification-of-jwt-access-tokens",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"Authenticating via Open API (Swagger) documentation",id:"authenticating-via-open-api-swagger-documentation",children:[{value:"Component testing secured API endpoints",id:"component-testing-secured-api-endpoints",children:[]},{value:"Authorization",id:"authorization",children:[]}]}],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"The .NET Core Stacks API template contains code which can easily be configured to integrate with any Identity provider via the standard OAuth 2.0 protocol."),Object(r.b)("h2",{id:"authentication-verification-of-jwt-access-tokens"},"Authentication (Verification of JWT access tokens)"),Object(r.b)("p",null,"To verify the JWT bearer tokens we use the standard ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer"}),".NET Core JWT bearer middleware"),"."),Object(r.b)("p",null,"By default this functionality is disabled but can easily be enabled by changing the configuration settings."),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"JWT bearer authentication on API endpoints can be configured by changing settings in JwtBearerAuthentication section of the application configuration file appsettings.json."),Object(r.b)("p",null,"This is the default section:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:'language-"JwtBearerAuthentication":',metastring:"{","{":!0}),'    "Audience": "<TODO>",\n    "Authority": "<TODO>",\n    "Enabled": false,\n    "OpenApi": {\n        "AuthorizationUrl": "<TODO>",\n        "ClientId": "<TODO>",\n        "TokenUrl": "<TODO>"\n    }\n')),Object(r.b)("p",null,"By default the Enabled flag in the configuration section is set to false which means that all API endpoints can be consumed without any authentication (even if the endpoint has an ",Object(r.b)("inlineCode",{parentName:"p"},"[Authorize]")," attribute on it)."),Object(r.b)("p",null,"To enable authentication on all endpoints with an ",Object(r.b)("inlineCode",{parentName:"p"},"[Authorize]")," attribute set the Enabled flag to true and set the Audience and Authority values based on the values from your identity provider."),Object(r.b)("pre",null,Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Settings"),Object(r.b)("th",null,"Description"),Object(r.b)("th",null,"Example"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Audience"),Object(r.b)("td",null,"The expected value of the aud (audience) claim in the JWT bearer token. This is usually the identifier of the OAuth 2.0 authorization server from your identity provider. For Auth0 this is the identifier or the API."),Object(r.b)("td",null,Object(r.b)("a",{href:"https://api.stacks.com"},"https://api.stacks.com"))),Object(r.b)("tr",null,Object(r.b)("td",null,"Authority"),Object(r.b)("td",null,"The expected value of the iss (issuer) claim in the JWT bearer token. This is usually the domain of the OAuth 2.0 authorization server from your identity provider. ",Object(r.b)("br",null),"This is also used by the JWT bearer middleware to retrieve the public key from the identity provider (via standard OAuth 2.0 .well-known endpoints) which was used to sign the token to check it was signed by the correct authority."),Object(r.b)("td",null,Object(r.b)("a",{href:"https://stacks-amido.eu.auth0.com/"},"https://stacks-amido.eu.auth0.com/")))))),Object(r.b)("p",null,"By setting the Enabled, Audience and Authority settings this will be enough to secure your API endpoints."),Object(r.b)("p",null,"There are however some additional configuration settings and steps available to enable JWT authentication in Open API (Swagger documentation) and to allow component testing of the API endpoints using static test bearer tokens. These will be covered in the following sections."),Object(r.b)("h2",{id:"authenticating-via-open-api-swagger-documentation"},"Authenticating via Open API (Swagger) documentation"),Object(r.b)("p",null,"To enable API users to authenticate on the Swagger documentation page via the Authorization Code with PKCE (recommended) and Implicit OAuth 2.0 flows the following settings need to be configured:"),Object(r.b)("pre",null,Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Settings"),Object(r.b)("th",null,"Description"),Object(r.b)("th",null,"Example"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"OpenApi.AuthorizationUrl"),Object(r.b)("td",null,"This url is used to authenticate the user to the authorization server.",Object(r.b)("br",null),"The user is redirected to this url where they login and are redirected back to the Swagger page.",Object(r.b)("br",null),"This is used for both the Authorization Code with PKCE and Implicit flows.",Object(r.b)("br",null),"For Authorization Code with PKCE flow a code is returned.",Object(r.b)("br",null),"For Implicit flow a token is returned."),Object(r.b)("td",null,"https://stacks-amido.eu.auth0.com/authorize?audience=https://api.stacks.com")),Object(r.b)("tr",null,Object(r.b)("td",null,"OpenApi.ClientId"),Object(r.b)("td",null,"The Client ID of the application configured in the identity provider."),Object(r.b)("td",null,"C48xVvquFoi9KlgPc0JNBdmHVCJ5kxFL")),Object(r.b)("tr",null,Object(r.b)("td",null,"OpenApi.TokenUrl"),Object(r.b)("td",null,"This url is used to retrieve a JWT access token for the user using the code returned from the AuthorizationUrl.",Object(r.b)("br",null),"This is used for the Authorization Code with PKCE flow only."),Object(r.b)("td",null,"https://stacks-amido.eu.auth0.com/oauth/token"))))),Object(r.b)("p",null,"Once set, a padlock will appear on the Swagger UI next to any API endpoint secured with an ","[Authorize]"," attribute."),Object(r.b)("p",null,"To Authenticate, click on the padlock and login using your chosen OAuth 2.0 flow."),Object(r.b)("p",null,'Alternatively, if you already have a JWT bearer token you can use the "bearer (apiKey)" authorization in Swagger UI instead.'),Object(r.b)("p",null,"Once authenticated, any calls made to API endpoints from within the Swagger UI will pass a JWT bearer token for your user in the Authorization header of the request."),Object(r.b)("h3",{id:"component-testing-secured-api-endpoints"},"Component testing secured API endpoints"),Object(r.b)("p",null,"JWT bearer authentication configuration of the API when being component tested can be found in class CustomAutoDataAttribute."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-C#"}),'// TODO - Set JWT authentication config settings if enabled\nvar jwtBearerAuthenticationConfiguration = new JwtBearerAuthenticationConfiguration\n{\n    AllowExpiredTokens = true,\n    Audience = "<TODO>",\n    Authority = "<TODO>",\n    Enabled = false,\n    OpenApi = new OpenApiJwtBearerAuthenticationConfiguration\n    {\n        AuthorizationUrl = "<TODO>",\n        ClientId = "<TODO>",\n        TokenUrl = "<TODO>"\n    },\n    UseStubbedBackChannelHandler = true\n};\n')),Object(r.b)("p",null,"By default the component tests test the API with no authentication/authorization enabled."),Object(r.b)("p",null,"To create component tests which test that a 401 (Unauthorized) response is returned when no JWT token is provided or that a 403 (Forbidden) response is returned when a JWT token with insufficient claims to fulfill the authorization policy is provided the Enabled, Audience and Authority settings must be set to match the JWT token used in the request (see Configuration section above). "),Object(r.b)("p",null,"The OpenApi settings are optional. It is up to you whether you want to set those for component testing."),Object(r.b)("p",null,"There are some additional configuration settings available for component testing:"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Settings"),Object(r.b)("th",null,"Description"),Object(r.b)("th",null,"Example"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"AllowExpiredTokens"),Object(r.b)("td",null,"Allows expired tokens to be used when authenticating against the API endpoints.",Object(r.b)("br",null),"When set to true, this allows us to use static bearer tokens in the tests."),Object(r.b)("td",null,"true")),Object(r.b)("tr",null,Object(r.b)("td",null,"UseStubbedBackChannelHandler"),Object(r.b)("td",null,"Allows us to use a handler in the tests to stub the calls to the OAuth 2.0 identity provider to retrieve the public key used to sign the JWT tokens.",Object(r.b)("br",null),"When set to true, the stubbed responses from the identity provider must be placed in the corresponding methods in file StubJwtBearerAuthenticationHttpMessageHandler.cs. The public key in the stubbed handler must match the key used to sign the test bearer tokens.",Object(r.b)("br",null),"When set to false, the JWT tokens will be verified as normal (i.e. the public key used to verify the token will be retrieved using the OAuth 2.0 identity providers .well-known endpoints). ",Object(r.b)("br",null),"The benefits of using a stubbed handler to retrieve the public key are:",Object(r.b)("br",null),"1. Component tests are more robust as they don't depend on OAuth 2.0 provider endpoints being available.",Object(r.b)("br",null),"2. Component tests are faster.",Object(r.b)("br",null),"3. When OAuth 2.0 provider public keys are rotated we don't need to regenerate the static bearer tokens we are using in component tests."),Object(r.b)("td",null,"true")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"AuthTokenFixture.cs")," class has been provided for storing the static JWT bearer tokens used for component testing."),Object(r.b)("h3",{id:"authorization"},"Authorization"),Object(r.b)("p",null,"The Stacks template does not provide any functionality for complex authorization scenarios although this is simple enough to implement using .NET Core Authorization Policies and JWT token claims."))}s.isMDXComponent=!0}}]);