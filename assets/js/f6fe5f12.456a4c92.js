"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8656],{3232:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=a(4848),o=a(8453),s=a(6025);const i={id:"setting_up_xray_daemon_locally_java",title:"Running the AWS XRay Daemon",sidebar_label:"Running the AWS XRay Daemon",hide_title:!1,hide_table_of_contents:!1,description:"How to run the AWS XRay Daemon",keywords:["aws","xray","daemon","settings"]},r=void 0,d={id:"workloads/aws/backend/java/setting_up_xray_daemon_locally_java",title:"Running the AWS XRay Daemon",description:"How to run the AWS XRay Daemon",source:"@site/docs/workloads/aws/backend/java/setting_up_xray_daemon_locally_java.md",sourceDirName:"workloads/aws/backend/java",slug:"/workloads/aws/backend/java/setting_up_xray_daemon_locally_java",permalink:"/docs/workloads/aws/backend/java/setting_up_xray_daemon_locally_java",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"setting_up_xray_daemon_locally_java",title:"Running the AWS XRay Daemon",sidebar_label:"Running the AWS XRay Daemon",hide_title:!1,hide_table_of_contents:!1,description:"How to run the AWS XRay Daemon",keywords:["aws","xray","daemon","settings"]},sidebar:"docs",previous:{title:"DynamoDB Emulator",permalink:"/docs/workloads/aws/backend/java/setting_up_dynamodb_locally_java"},next:{title:"AWS Secrets as Spring Properties",permalink:"/docs/workloads/aws/backend/java/define_aws_secrets_java"}},l={},c=[{value:"Introduction to AWS X-Ray",id:"introduction-to-aws-x-ray",level:2},{value:"AWS X-Ray Daemon",id:"aws-x-ray-daemon",level:2},{value:"Giving the daemon permission to send data to X-Ray",id:"giving-the-daemon-permission-to-send-data-to-x-ray",level:3},{value:"Example ~/.aws/credentials",id:"example-awscredentials",level:4},{value:"Running the daemon",id:"running-the-daemon",level:3},{value:"X-Ray daemon logs",id:"x-ray-daemon-logs",level:3},{value:"Adding AWX X-Ray Support to the codebase",id:"adding-awx-x-ray-support-to-the-codebase",level:2},{value:"Viewing X-Ray Traces in the AWS Management Console",id:"viewing-x-ray-traces-in-the-aws-management-console",level:2},{value:"Example Service Map",id:"example-service-map",level:3},{value:"Example Trace",id:"example-trace",level:3},{value:"Handling X-Ray Segment Errors",id:"handling-x-ray-segment-errors",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction-to-aws-x-ray",children:"Introduction to AWS X-Ray"}),"\n",(0,t.jsx)(n.p,{children:"AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices\narchitecture. With X-Ray, you can understand how your application and its underlying services are performing to identify\nand troubleshoot the root cause of performance issues and errors."}),"\n",(0,t.jsx)(n.p,{children:"X-Ray provides an end-to-end view of requests as they travel through your application, and shows a map of your application\u2019s underlying components.\nYou can use X-Ray to analyze both applications in development and in production, from simple three-tier applications to complex microservices\napplications consisting of thousands of services."}),"\n",(0,t.jsx)(n.h2,{id:"aws-x-ray-daemon",children:"AWS X-Ray Daemon"}),"\n",(0,t.jsx)(n.p,{children:"The AWS X-Ray daemon is a software application that listens for traffic on UDP port 2000, gathers raw segment data, and relays\nit to the AWS X-Ray API. The daemon works in conjunction with the AWS X-Ray SDKs and must be running so that data sent by\nthe SDKs can reach the X-Ray service."}),"\n",(0,t.jsxs)(n.p,{children:["To run the X-Ray daemon locally, on-premises, or on other AWS services, you need to download it from the  ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon.html",children:"AWS X-Ray Daemon"})," support page,\nrun it, and then give it permission to upload segment documents to X-Ray."]}),"\n",(0,t.jsx)(n.h3,{id:"giving-the-daemon-permission-to-send-data-to-x-ray",children:"Giving the daemon permission to send data to X-Ray"}),"\n",(0,t.jsx)(n.p,{children:"The X-Ray daemon uses the AWS SDK to upload trace data to X-Ray, and it needs AWS credentials with permission to do that."}),"\n",(0,t.jsxs)(n.p,{children:["On Amazon EC2, the daemon uses the instance's instance profile role automatically. Locally, save your access keys to a file\nnamed ",(0,t.jsx)(n.code,{children:"credentials"})," in your user directory under a folder named ",(0,t.jsx)(n.code,{children:".aws"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-awscredentials",children:"Example ~/.aws/credentials"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"[default]\naws_access_key_id = AKIAIOSFODNN7EXAMPLE\naws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n"})}),"\n",(0,t.jsx)(n.h3,{id:"running-the-daemon",children:"Running the daemon"}),"\n",(0,t.jsx)(n.p,{children:"Run the daemon locally from the command line. Use the -o option to run in local mode, and -n to set the region. The download\npage linked in the text above gives specific instructions on how to run the daemon on supported operating systems."}),"\n",(0,t.jsx)(n.p,{children:"For the MacOS distribution, the command is as follows (assuming the AWS London region is being used): -"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/Downloads$ ./xray_mac -o -n eu-west-2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"x-ray-daemon-logs",children:"X-Ray daemon logs"}),"\n",(0,t.jsx)(n.p,{children:"The daemon outputs information about its current configuration and segments that it sends to AWS X-Ray."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"2016-11-24T06:07:06Z [Info] Initializing AWS X-Ray daemon 2.1.0\n2016-11-24T06:07:06Z [Info] Using memory limit of 49 MB\n2016-11-24T06:07:06Z [Info] 313 segment buffers allocated\n2016-11-24T06:07:08Z [Info] Successfully sent batch of 1 segments (0.123 seconds)\n2016-11-24T06:07:09Z [Info] Successfully sent batch of 1 segments (0.006 seconds)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"adding-awx-x-ray-support-to-the-codebase",children:"Adding AWX X-Ray Support to the codebase"}),"\n",(0,t.jsxs)(n.p,{children:["AWS X-Ray support is enabled through the inclusion of the ",(0,t.jsx)(n.code,{children:"stacks-module-parent"})," dependency that imports the Spring Cloud\nsupport for AWS; at some point the use of AWS- and Azure-specific libraries are to be tidied up, so it is likely that at\nthat point a specific AWS module will need to be included."]}),"\n",(0,t.jsxs)(n.p,{children:["The code currently uses Spring AOP to add a pointcut to all Controller methods under the ",(0,t.jsx)(n.code,{children:"com.amido.stacks"})," package so no\nmanual intervention is necessary."]}),"\n",(0,t.jsx)(n.p,{children:"It is possible to enable (or disable) AWS X-Ray support using the following environment variable prior to starting the application: -"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export AWS_XRAY_ENABLED=true\n"})}),"\n",(0,t.jsx)(n.p,{children:"The AWS X-Ray SDK will fail quiescently if no authentication is provided, or if the Daemon is not running. Please check the output\nof the X-Ray daemon logs initially (see above) if traces do not seem to be arriving in CloudWatch."}),"\n",(0,t.jsx)(n.h2,{id:"viewing-x-ray-traces-in-the-aws-management-console",children:"Viewing X-Ray Traces in the AWS Management Console"}),"\n",(0,t.jsx)(n.p,{children:"Once the daemon has been setup and started any REST API controller methods should start to push trace information to the\nAWS Management console for the account whose credentials are being used."}),"\n",(0,t.jsxs)(n.p,{children:["Open the AWS Management Console and navigate to the CloudWatch section. On the toolbar on the left you should see a section\nentitled ",(0,t.jsx)(n.strong,{children:"X-Ray traces"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Expand this section and choose the ",(0,t.jsx)(n.strong,{children:"Service map"})," option. You should start to see information about REST API calls that have\nbeen made - you can click on the ",(0,t.jsx)(n.strong,{children:"Traces"})," entry to see more detailed information."]}),"\n",(0,t.jsx)(n.h3,{id:"example-service-map",children:"Example Service Map"}),"\n",(0,t.jsx)("img",{alt:"Example X-Ray Service map",src:(0,s.Ay)("img/aws_java_xray_service_map.png")}),"\n",(0,t.jsx)(n.h3,{id:"example-trace",children:"Example Trace"}),"\n",(0,t.jsx)("img",{alt:"Example X-Ray Trace",src:(0,s.Ay)("img/aws_java_xray_trace.png")}),"\n",(0,t.jsx)(n.h2,{id:"handling-x-ray-segment-errors",children:"Handling X-Ray Segment Errors"}),"\n",(0,t.jsx)(n.p,{children:"If the STS call is made before a request actually comes into the X-Ray enabled service (or out of band of the request),\nthis will cause a missing context exception."}),"\n",(0,t.jsxs)(n.p,{children:["AWS advise to either omit any calls that aren't part of the request path\n(using an un-traced AWS client) or set the ",(0,t.jsx)(n.code,{children:"AWS_XRAY_CONTEXT_MISSING"})," env variable to ",(0,t.jsx)(n.code,{children:"LOG_ERROR"})," - see ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-java-configuration.html#xray-sdk-java-configuration-envvars",children:"X-Ray Env Vars"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Normal calls to X-Ray as part of a request operations are not affected by this setting."}),"\n",(0,t.jsx)(n.p,{children:"An example of this type of error is as follows: -"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"08-08-2022 09:46:16.279 [main] |  |\n        WARN  i.a.c.s.AwsSecretsManagerPropertySources.logTo - Unable to load AWS secret from /stacks-secret/example-1/. \n              Failed to begin subsegment named 'AWSSecretsManager': segment cannot be found.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The recommended course of action is to set the ",(0,t.jsx)(n.code,{children:"AWS_XRAY_CONTEXT_MISSING"})," environment variable - if using Intellij IDE\nthis can be done by easily by setting the environment variable in the Maven Runner environment variables section. If using\nDocker or Kubernetes it is recommended that the relevant functionality be defined to set this variable (such as config maps)."]}),"\n",(0,t.jsx)("img",{alt:"Specifying X-Ray Environment Variables",src:(0,s.Ay)("img/aws_java_xray_environment_variables_secure.png")})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);