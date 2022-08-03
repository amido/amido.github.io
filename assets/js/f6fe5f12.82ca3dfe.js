"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3193],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3919:function(e,n,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return o}})},4996:function(e,n,t){t.d(n,{C:function(){return r},Z:function(){return i}});var a=t(2263),o=t(3919);function r(){var e=(0,a.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,c=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(s)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+d:d}(r,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},2825:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=t(4996),s=["components"],l={id:"setting_up_xray_daemon_locally_java",title:"Running the AWS XRay Daemon",sidebar_label:"Running the AWS XRay Daemon",hide_title:!1,hide_table_of_contents:!1,description:"How to run the AWS XRay Daemon",keywords:["aws","xray","daemon","settings"]},c=void 0,d={unversionedId:"workloads/aws/backend/java/setting_up_xray_daemon_locally_java",id:"workloads/aws/backend/java/setting_up_xray_daemon_locally_java",isDocsHomePage:!1,title:"Running the AWS XRay Daemon",description:"How to run the AWS XRay Daemon",source:"@site/docs/workloads/aws/backend/java/setting_up_xray_daemon_locally_java.md",sourceDirName:"workloads/aws/backend/java",slug:"/workloads/aws/backend/java/setting_up_xray_daemon_locally_java",permalink:"/docs/workloads/aws/backend/java/setting_up_xray_daemon_locally_java",tags:[],version:"current",frontMatter:{id:"setting_up_xray_daemon_locally_java",title:"Running the AWS XRay Daemon",sidebar_label:"Running the AWS XRay Daemon",hide_title:!1,hide_table_of_contents:!1,description:"How to run the AWS XRay Daemon",keywords:["aws","xray","daemon","settings"]},sidebar:"docs",previous:{title:"DynamoDB Emulator",permalink:"/docs/workloads/aws/backend/java/setting_up_dynamodb_locally_java"},next:{title:"AWS Secrets as Spring Properties",permalink:"/docs/workloads/aws/backend/java/define_aws_secrets_java"}},u=[{value:"Introduction to AWS X-Ray",id:"introduction-to-aws-x-ray",children:[],level:2},{value:"AWS X-Ray Daemon",id:"aws-x-ray-daemon",children:[{value:"Giving the daemon permission to send data to X-Ray",id:"giving-the-daemon-permission-to-send-data-to-x-ray",children:[{value:"Example ~/.aws/credentials",id:"example-awscredentials",children:[],level:4}],level:3},{value:"Running the daemon",id:"running-the-daemon",children:[],level:3},{value:"X-Ray daemon logs",id:"x-ray-daemon-logs",children:[],level:3}],level:2},{value:"Adding AWX X-Ray Support to the codebase",id:"adding-awx-x-ray-support-to-the-codebase",children:[],level:2},{value:"Viewing X-Ray Traces in the AWS Management Console",id:"viewing-x-ray-traces-in-the-aws-management-console",children:[{value:"Example Service Map",id:"example-service-map",children:[],level:3},{value:"Example Trace",id:"example-trace",children:[],level:3}],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction-to-aws-x-ray"},"Introduction to AWS X-Ray"),(0,r.kt)("p",null,"AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices\narchitecture. With X-Ray, you can understand how your application and its underlying services are performing to identify\nand troubleshoot the root cause of performance issues and errors. "),(0,r.kt)("p",null,"X-Ray provides an end-to-end view of requests as they travel through your application, and shows a map of your application\u2019s underlying components.\nYou can use X-Ray to analyze both applications in development and in production, from simple three-tier applications to complex microservices\napplications consisting of thousands of services."),(0,r.kt)("h2",{id:"aws-x-ray-daemon"},"AWS X-Ray Daemon"),(0,r.kt)("p",null,"The AWS X-Ray daemon is a software application that listens for traffic on UDP port 2000, gathers raw segment data, and relays\nit to the AWS X-Ray API. The daemon works in conjunction with the AWS X-Ray SDKs and must be running so that data sent by\nthe SDKs can reach the X-Ray service."),(0,r.kt)("p",null,"To run the X-Ray daemon locally, on-premises, or on other AWS services, you need to download it from the  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon.html"},"AWS X-Ray Daemon")," support page,\nrun it, and then give it permission to upload segment documents to X-Ray."),(0,r.kt)("h3",{id:"giving-the-daemon-permission-to-send-data-to-x-ray"},"Giving the daemon permission to send data to X-Ray"),(0,r.kt)("p",null,"The X-Ray daemon uses the AWS SDK to upload trace data to X-Ray, and it needs AWS credentials with permission to do that."),(0,r.kt)("p",null,"On Amazon EC2, the daemon uses the instance's instance profile role automatically. Locally, save your access keys to a file\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials")," in your user directory under a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},".aws"),"."),(0,r.kt)("h4",{id:"example-awscredentials"},"Example ~/.aws/credentials"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[default]\naws_access_key_id = AKIAIOSFODNN7EXAMPLE\naws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n")),(0,r.kt)("h3",{id:"running-the-daemon"},"Running the daemon"),(0,r.kt)("p",null,"Run the daemon locally from the command line. Use the -o option to run in local mode, and -n to set the region. The download\npage linked in the text above gives specific instructions on how to run the daemon on supported operating systems."),(0,r.kt)("p",null,"For the MacOS distribution, the command is as follows (assuming the AWS London region is being used): - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~/Downloads$ ./xray_mac -o -n eu-west-2\n")),(0,r.kt)("h3",{id:"x-ray-daemon-logs"},"X-Ray daemon logs"),(0,r.kt)("p",null,"The daemon outputs information about its current configuration and segments that it sends to AWS X-Ray."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"2016-11-24T06:07:06Z [Info] Initializing AWS X-Ray daemon 2.1.0\n2016-11-24T06:07:06Z [Info] Using memory limit of 49 MB\n2016-11-24T06:07:06Z [Info] 313 segment buffers allocated\n2016-11-24T06:07:08Z [Info] Successfully sent batch of 1 segments (0.123 seconds)\n2016-11-24T06:07:09Z [Info] Successfully sent batch of 1 segments (0.006 seconds)\n")),(0,r.kt)("h2",{id:"adding-awx-x-ray-support-to-the-codebase"},"Adding AWX X-Ray Support to the codebase"),(0,r.kt)("p",null,"AWS X-Ray support is enabled through the inclusion of the ",(0,r.kt)("inlineCode",{parentName:"p"},"stacks-module-parent")," dependency that imports the Spring Cloud\nsupport for AWS; at some point the use of AWS- and Azure-specific libraries are to be tidied up, so it is likely that at\nthat point a specific AWS module will need to be included."),(0,r.kt)("p",null,"The code currently uses Spring AOP to add a pointcut to all Controller methods under the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.amido.stacks")," package so no\nmanual intervention is necessary."),(0,r.kt)("p",null,"It is possible to enable (or disable) AWS X-Ray support using the following environment variable prior to starting the application: -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export AWS_XRAY_ENABLED=true\n")),(0,r.kt)("p",null,"The AWS X-Ray SDK will fail quiescently if no authentication is provided, or if the Daemon is not running. Please check the output\nof the X-Ray daemon logs initially (see above) if traces do not seem to be arriving in CloudWatch."),(0,r.kt)("h2",{id:"viewing-x-ray-traces-in-the-aws-management-console"},"Viewing X-Ray Traces in the AWS Management Console"),(0,r.kt)("p",null,"Once the daemon has been setup and started any REST API controller methods should start to push trace information to the\nAWS Management console for the account whose credentials are being used."),(0,r.kt)("p",null,"Open the AWS Management Console and navigate to the CloudWatch section. On the toolbar on the left you should see a section\nentitled ",(0,r.kt)("strong",{parentName:"p"},"X-Ray traces"),"."),(0,r.kt)("p",null,"Expand this section and choose the ",(0,r.kt)("strong",{parentName:"p"},"Service map")," option. You should start to see information about REST API calls that have\nbeen made - you can click on the ",(0,r.kt)("strong",{parentName:"p"},"Traces")," entry to see more detailed information."),(0,r.kt)("h3",{id:"example-service-map"},"Example Service Map"),(0,r.kt)("img",{alt:"Example X-Ray Service map",src:(0,i.Z)("img/aws_java_xray_service_map.png")}),(0,r.kt)("h3",{id:"example-trace"},"Example Trace"),(0,r.kt)("img",{alt:"Example X-Ray Trace",src:(0,i.Z)("img/aws_java_xray_trace.png")}))}m.isMDXComponent=!0}}]);