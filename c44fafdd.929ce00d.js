(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(210)),l={id:"performance_testing_gatling",title:"Performance Testing - Gatling",sidebar_label:"Gatling Performance Testing"},o={unversionedId:"testing/performance_testing_gatling",id:"testing/performance_testing_gatling",isDocsHomePage:!1,title:"Performance Testing - Gatling",description:"The Amido Stacks Performance Tests is a sample project demonstrating performance testing (Load testing) using the Gatling tool.",source:"@site/docs/testing/performance_testing_gatling.md",slug:"/testing/performance_testing_gatling",permalink:"/stacks/docs/testing/performance_testing_gatling",version:"current",sidebar_label:"Gatling Performance Testing",sidebar:"docs",previous:{title:"Automated Accessibility Testing With Axe",permalink:"/stacks/docs/testing/accessibility_testing"}},s=[{value:"Getting started",id:"getting-started",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Quick run",id:"quick-run",children:[]},{value:"Environment settings",id:"environment-settings",children:[]},{value:"Run all simulations",id:"run-all-simulations",children:[]},{value:"Run a single simulation",id:"run-a-single-simulation",children:[]},{value:"Deleting menu resources",id:"deleting-menu-resources",children:[]},{value:"References",id:"references",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Amido Stacks Performance Tests is a sample project demonstrating performance testing (Load testing) using the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://gatling.io/"}),"Gatling")," tool."),Object(i.b)("p",null,"The tests within this repository have been written against the Amido Stacks APIs."),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("p",null,"To get started with performance testing, first clone the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/amido/stacks-performance-tests"}),"Amido Stacks Performance Tests")," repo:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"git@github.com:amido/stacks-performance-tests.git")),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Java version 11"),Object(i.b)("li",{parentName:"ul"},"Maven"),Object(i.b)("li",{parentName:"ul"},"IDE for Scala development. I.e. IntelliJ IDEA")),Object(i.b)("h2",{id:"quick-run"},"Quick run"),Object(i.b)("p",null,"Once the project has been cloned locally, tests can be run using the following command:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mvn clean gatling:test -Denv=dev")),Object(i.b)("p",null,"By default, this will run a load test against all simulations with 1 user with a ramp up duration of 1 second."),Object(i.b)("p",null,"There are optional parameters that can be added to change the load test:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-DrampUsers=X")," - This allows you to set the number of users that will be simulated in the tests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-DrampDuration=X")," - This sets the amount of seconds the test will ramp the test load from 0 users to X users in the test."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-DatOnceUsers=X")," - Injects a given number of users at once."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-DconstantUsersPerSec=X -DconstUsersDuration=X")," - Injects users at a constant rate, defined in users per second, during a given duration. Users will be injected at regular intervals.")),Object(i.b)("h2",{id:"environment-settings"},"Environment settings"),Object(i.b)("p",null,"There are 4 environment contexts that you can run the performance tests in. These are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"local, dev, test, perf"))),Object(i.b)("p",null,"You must set the system property ",Object(i.b)("inlineCode",{parentName:"p"},"-Denv")," to point to one of the above environment variables."),Object(i.b)("p",null,"For example: ",Object(i.b)("inlineCode",{parentName:"p"},"mvn clean gatling:test -Denv=test")),Object(i.b)("p",null,"Each environment variable will programmatically point to its respective properties files."),Object(i.b)("p",null,"For example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"local - local.application.properties"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"dev - dev.application.properties")))),Object(i.b)("p",null,"To a local environment of your choice, then set the ",Object(i.b)("inlineCode",{parentName:"p"},"env")," arg to ",Object(i.b)("inlineCode",{parentName:"p"},"local")," and amend the url accordingly in the ",Object(i.b)("inlineCode",{parentName:"p"},"local.application.properties")," file.  "),Object(i.b)("h2",{id:"run-all-simulations"},"Run all simulations"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mvn clean gatling:test -Denv=dev -DrampUsers=10 -DrampDuration=5 -DatOnceUsers=4")),Object(i.b)("h2",{id:"run-a-single-simulation"},"Run a single simulation"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mvn clean gatling:test -Denv=dev -Dgatling.simulationClass=com.amido.simulations.menu.GetMenuSimulation -DrampUsers=2 -DrampDuration=2")),Object(i.b)("h2",{id:"deleting-menu-resources"},"Deleting menu resources"),Object(i.b)("p",null,"As expected, performance tests can create a lot of resources. It is essential that at the end of the test executions, we delete all the resources that were created as part of the tests."),Object(i.b)("p",null,"To delete the resources, run the following command from the root project folder and passing the base uri as an argument."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"cd src/test/scala/com/amido/utils")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"sh tearDownDeleteMenuItems.sh http://localhost:9000"))),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://gatling.io/docs/current"}),"Gatling docs"),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://devqa.io/gatling-maven-performance-test-framework/"}),"Performance Testing Framework with Gatling and Maven")))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);