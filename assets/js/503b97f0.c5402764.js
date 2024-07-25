"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6537],{4241:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var a=s(4848),o=s(8453),r=s(3741);const t={id:"dependency_messaging_java",title:"Ensono Stacks Core Messaging module",sidebar_label:"Core Messaging module",hide_title:!1,hide_table_of_contents:!0,keywords:["java","maven","module","modularity","archetype","messaging"]},i=void 0,c={id:"workloads/common/backend/java/architecture/dependency_messaging_java",title:"Ensono Stacks Core Messaging module",description:"Module Overview",source:"@site/docs/workloads/common/backend/java/architecture/dependency_messaging_java.md",sourceDirName:"workloads/common/backend/java/architecture",slug:"/workloads/common/backend/java/architecture/dependency_messaging_java",permalink:"/docs/workloads/common/backend/java/architecture/dependency_messaging_java",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dependency_messaging_java",title:"Ensono Stacks Core Messaging module",sidebar_label:"Core Messaging module",hide_title:!1,hide_table_of_contents:!0,keywords:["java","maven","module","modularity","archetype","messaging"]},sidebar:"docs",previous:{title:"Core CQRS module",permalink:"/docs/workloads/common/backend/java/architecture/dependency_cqrs_java"},next:{title:"Architecture overview",permalink:"/docs/workloads/common/backend/java/architecture/web_api/architecture_java"}},l={},d=[{value:"Module Overview",id:"module-overview",level:2},{value:"Module Structure",id:"module-structure",level:2},{value:"Project structure",id:"project-structure",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Use it as a dependency",id:"use-it-as-a-dependency",level:3},{value:"Maven",id:"maven",level:4},{value:"Others",id:"others",level:4},{value:"Localized solution using Maven Archetypes",id:"localized-solution-using-maven-archetypes",level:3},{value:"Building the module locally from this repository",id:"building-the-module-locally-from-this-repository",level:3},{value:"Creating an Archetype from this repository",id:"creating-an-archetype-from-this-repository",level:3},{value:"Accessing Sonatype OSSRH",id:"accessing-sonatype-ossrh",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"module-overview",children:"Module Overview"}),"\n",(0,a.jsxs)(n.p,{children:["This module provides basic functionality to handle event management in an application. It contains the\nbase class for ",(0,a.jsx)(n.code,{children:"ApplicationEvent"})," instances as showcased in the ",(0,a.jsx)(n.a,{href:"https://github.com/Ensono/stacks-java-cqrs-events/",children:"Ensono Stacks workflow with CQRS and Events"}),"\nas well as base classes to construct publishers and listeners. There is also a decorated publisher class\nthat also initialises a listener."]}),"\n",(0,a.jsx)(n.h2,{id:"module-structure",children:"Module Structure"}),"\n",(0,a.jsx)(n.p,{children:"In the following diagram, you can see all the relevant files of this module. Be aware, pulling from\nthe repository will have some extra files that are not relevant to the logic but required to build and\ndeploy."}),"\n",(0,a.jsx)(n.h3,{id:"project-structure",children:"Project structure"}),"\n",(0,a.jsx)(n.p,{children:"java\n_.mvn\n: |_settings.xml\n|_archetype.properties\n|_pom.xml\n_src\n: _main\n:   _java\n:    _com.amido.stacks.core.messaging\n:     _event\n:      |_ApplicationEvent.java\n:     _listen\n:      |_ApplicationEventListener.java\n:      |_DefaultEventListeener.java\n:     _publish\n:      |_ApplicationEventPublisher.java\n:      |_ApplicationEventPublisherWithListener.java\n:      |_DefaultEventPublisher.java"}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,a.jsx)(n.p,{children:"There are four ways to integrate this module into your project:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use it as a ",(0,a.jsx)(n.a,{href:"#use-it-as-a-dependency",children:"dependency"})]}),"\n",(0,a.jsxs)(n.li,{children:["Create a localized solution using ",(0,a.jsx)(n.a,{href:"#localized-solution-using-maven-archetypes",children:"Maven Archetypes artifacts"})," available in our Artifactory repo"]}),"\n",(0,a.jsxs)(n.li,{children:["Clone this repo, ",(0,a.jsx)(n.a,{href:"#building-the-module-locally-from-this-repository",children:"locally build"})," and use it as a Maven dependency"]}),"\n",(0,a.jsxs)(n.li,{children:["Clone this repo, create a ",(0,a.jsx)(n.a,{href:"#creating-an-archetype-from-this-repository",children:"custom archetype"})," and then use it as a Maven dependency"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"use-it-as-a-dependency",children:"Use it as a dependency"}),"\n",(0,a.jsx)(n.h4,{id:"maven",children:"Maven"}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"dependencies"})," section of your application's ",(0,a.jsx)(n.code,{children:"pom.xml"})," add:"]}),"\n",(0,a.jsx)("pre",{children:(0,a.jsx)("code",{parentName:"pre",className:"language-xml",children:`<dependency>\n    <groupId>com.amido.stacks.modules</groupId>\n    <artifactId>stacks-core-messaging</artifactId>\n    <version>${r.l.javaMessagingVersion}</version>\n</dependency>\n`})}),"\n",(0,a.jsxs)(n.p,{children:["Then you can do a ",(0,a.jsx)(n.code,{children:"./mvnw clean compile"})," to fetch it; after that, you can use it like any other dependency."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./mvnw clean compile\n"})}),"\n",(0,a.jsx)(n.h4,{id:"others",children:"Others"}),"\n",(0,a.jsx)(n.p,{children:"Use it as you'd use any dependency in your build tool."}),"\n",(0,a.jsx)(n.h3,{id:"localized-solution-using-maven-archetypes",children:"Localized solution using Maven Archetypes"}),"\n",(0,a.jsxs)(n.p,{children:["If you wish to customise the module and use your organisation's namespaces instead of Ensono's. You can create a\n",(0,a.jsx)(n.a,{href:"https://maven.apache.org/archetype/index.html",children:"Maven archetype"}),". Archetype is Maven's tool for\nscaffolding and offers lots of extra functionality. We suggest spending some time looking into them. We use Archetype to create a template and enable you to adopt this module under your organisation's namespace.\nTo use the deployed archetypes:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make and move to a new folder"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Then run"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mvn archetype:generate \\\n    -DarchetypeGroupId='com.amido.stacks.modules' \\\n    -DarchetypeArtifactId='stacks-core-messaging-archetype' \\\n    -DarchetypeVersion='<archetype version>' \\\n    -DgroupId='<your-group-id>' \\\n    -DartifactId='<your-artifact-id>' \\\n    -Dversion='<your-version>' \\\n    -Dpackage='<package-name>'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"<your-group-id>"})," is a placeholder for your group ID"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"<your-artifact-id>"})," is a placeholder for your artefact ID"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"<your-version>"})," is a placeholder for your version"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"<package-name>"})," is a placeholder for the root package name and structure. It should start with your ",(0,a.jsx)(n.code,{children:"groupdId"})," and continue with the name of the root package."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["For example, using ",(0,a.jsx)(n.code,{children:"-DgroupId=com.test"})," and ",(0,a.jsx)(n.code,{children:"-Dpackage=com.test.stacks"})," will instruct Maven to place the code in ",(0,a.jsx)(n.code,{children:"src/main/java/com/test/stacks"})," and update all the relevant references accordingly (i.e. ",(0,a.jsx)(n.code,{children:"imports"}),")"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Go to the ",(0,a.jsx)(n.code,{children:"pom.xml"})," file of the project you'll be using this module in and add it as a ",(0,a.jsx)(n.a,{href:"#use-it-as-a-dependency",children:"dependency"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example"}),": Using ",(0,a.jsx)(n.code,{children:"-DgroupId=com.test"})," and ",(0,a.jsx)(n.code,{children:"-Dpackage=com.test.stacks"})," will instruct Maven to place the code in ",(0,a.jsx)(n.code,{children:"src/main/java/com/test/stacks"})," and update all the relevant references accordingly (i.e. ",(0,a.jsx)(n.code,{children:"imports"}),")"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["If you previously had used this module under different namespace (i.e. the default ",(0,a.jsx)(n.code,{children:"com.amido.stacks.core-messaging"}),"):"]})}),"\n",(0,a.jsx)(n.p,{children:"Maven ONLY updates the imports for the module you generated. Any references in other projects will remain to the previous namespace."}),"\n",(0,a.jsx)(n.p,{children:"You will need to"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Update them manually"}),"\n",(0,a.jsxs)(n.li,{children:["Re-create the relevant ",(0,a.jsx)(n.code,{children:"import"})," statements to use the new-made module instead"]}),"\n",(0,a.jsxs)(n.li,{children:["If you plan to use this with Ensono Stacks, include your namespace in the ",(0,a.jsx)(n.code,{children:"@ComponentScan"})," annotation of the ",(0,a.jsx)(n.code,{children:"Application"})," class."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"building-the-module-locally-from-this-repository",children:"Building the module locally from this repository"}),"\n",(0,a.jsx)(n.p,{children:"To build the module locally:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Clone this repo"}),"\n",(0,a.jsxs)(n.li,{children:["Navigate to the ",(0,a.jsx)(n.code,{children:"java"})," folder"]}),"\n",(0,a.jsxs)(n.li,{children:["run ",(0,a.jsx)(n.code,{children:"./mvnw clean install"})," to install the module locally."]}),"\n",(0,a.jsxs)(n.li,{children:["Add it as any other ",(0,a.jsx)(n.a,{href:"#use-it-as-a-dependency",children:"dependency"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"creating-an-archetype-from-this-repository",children:"Creating an Archetype from this repository"}),"\n",(0,a.jsxs)(n.p,{children:["If you wish to customise the module and use your organisation's namespaces instead of Ensono's. You can create a\n",(0,a.jsx)(n.a,{href:"https://maven.apache.org/archetype/index.html",children:"Maven archetype"}),". Archetype is Maven's tool for\nscaffolding and offers lots of extra functionality. We suggest spending some time looking into them. We use Archetype to create a template and enable you to adopt this module under your organisation's namespace.\nTo use the deployed archetypes:\nTo build, install and use the archetype follow these steps:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Clone this repo"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Navigate to the ",(0,a.jsx)(n.code,{children:"<directory you cloned the project into>/java"})," in the terminal"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Then issue the following Maven commands, using the included wrapper:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create the archetype from the existing code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./mvnw archetype:create-from-project -DpropertyFile='./archetype.properties'\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Navigate to the folder it was created in"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd target/generated-sources/archetype\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Install the archetype locally"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"..\\..\\..\\mvnw install\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make and navigate to a directory in which you'd like to create the localized project, ideally outside this project's root folder"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"To create the project, use the command below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"<path-to-mvn-executable>/mvnw archetype:generate \\\n    -DarchetypeGroupId='com.amido' \\\n    -DarchetypeArtifactId='stacks-core-messaging' \\\n    -DarchetypeVersion='1.0.0-SNAPSHOT' \\\n    -DgroupId='<your-group-id>' \\\n    -DartifactId='<your-artifact-id>' \\\n    -Dversion='<your-version>' \\\n    -Dpackage='<package-name>'`\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<your-group-id>"})," is a placeholder for your group ID"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<your-artifact-id>"})," is a placeholder for your artefact ID"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<your-version>"})," is a placeholder for your version"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<package-name>"})," is a placeholder for the root package name and structure. It should start with your ",(0,a.jsx)(n.code,{children:"groupdId"})," and continue with the name of the root package."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["For example, using ",(0,a.jsx)(n.code,{children:"-DgroupId=com.test"})," and ",(0,a.jsx)(n.code,{children:"-Dpackage=com.test.stacks"})," will instruct Maven to place the code in ",(0,a.jsx)(n.code,{children:"src/main/java/com/test/stacks"})," and update all the relevant references accordingly (i.e. ",(0,a.jsx)(n.code,{children:"imports"}),")"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Go to the ",(0,a.jsx)(n.code,{children:"pom.xml"})," file of the project you'll be using this module in and add it as a ",(0,a.jsx)(n.a,{href:"#use-it-as-a-dependency",children:"dependency"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example"}),": Using ",(0,a.jsx)(n.code,{children:"-DgroupId=com.test"})," and ",(0,a.jsx)(n.code,{children:"-Dpackage=com.test.stacks"})," will instruct Maven to place the code in ",(0,a.jsx)(n.code,{children:"src/main/java/com/test/stacks"})," and update all the relevant references accordingly (i.e. ",(0,a.jsx)(n.code,{children:"imports"}),")"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["If you previously had used this module under different namespace (i.e. the default ",(0,a.jsx)(n.code,{children:"com.amido.stacks.core-messaging"}),"):"]})}),"\n",(0,a.jsx)(n.p,{children:"Maven ONLY updates the imports for the module you generated. Any references in other projects will remain to the previous namespace."}),"\n",(0,a.jsx)(n.p,{children:"You will need to"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Update them manually"}),"\n",(0,a.jsxs)(n.li,{children:["Re-create the relevant ",(0,a.jsx)(n.code,{children:"import"})," statements to use the new-made module instead"]}),"\n",(0,a.jsxs)(n.li,{children:["If you plan to use this with Ensono Stacks, include your namespace in the ",(0,a.jsx)(n.code,{children:"@ComponentScan"})," annotation of the ",(0,a.jsx)(n.code,{children:"Application"})," class."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"accessing-sonatype-ossrh",children:"Accessing Sonatype OSSRH"}),"\n",(0,a.jsxs)(n.p,{children:["Our artefacts and archetypes get hosted on Sonatype OSSRH  then to  maven central . to access artifact from OSSRH before it get published to maven central update  ",(0,a.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<repositories>\n  <repository>\n    <snapshots/>\n    <id>snapshots</id>\n    <name>default-maven-virtual</name>\n    <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>\n  </repository>\n  <repository>\n    <releases>\n      <enabled>true</enabled>\n    </releases>\n    <id>releases</id>\n    <name>default-maven-staging</name>\n    <url>https://s01.oss.sonatype.org/content/repositories/releases/</url>\n  </repository>\n</repositories>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, you can also add this configuration as a profile in your Maven's ",(0,a.jsx)(n.code,{children:"settings.xml"})," file\nin the ",(0,a.jsx)(n.code,{children:".m2"})," folder in your home directory (any OS):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<profiles>\n  <profile>\n    <repositories>\n      <repository>\n        <snapshots/>\n        <id>snapshots</id>\n        <name>default-maven-virtual</name>\n        <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>\n      </repository>\n      <repository>\n        <releases>\n          <enabled>true</enabled>\n        </releases>\n        <id>releases</id>\n        <name>default-maven-staging</name>\n        <url>https://s01.oss.sonatype.org/content/repositories/releases/</url>\n      </repository>\n    </repositories>\n    <id>nexus</id>\n  </profile>\n</profiles>\n\n<activeProfiles>\n<activeProfile>nexus</activeProfile>\n</activeProfiles>\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3741:(e,n,s)=>{s.d(n,{l:()=>a});const a={javaModuleParentVersion:"1.0.0",javaCommonsVersion:"1.0.0",javaApiVersion:"1.0.0",javaMessagingVersion:"1.0.0",javaCqrsVersion:"1.0.0",javaAzureCosmosVersion:"1.0.0",javaAzureServicebusVersion:"1.0.0"}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var a=s(6540);const o={},r=a.createContext(o);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);