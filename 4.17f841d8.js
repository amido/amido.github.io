(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{223:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),y=n,d=p["".concat(c,".").concat(y)]||p[y]||f[y]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},238:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function c(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var i,s,l,u;if(Array.isArray(e)){if((i=e.length)!=t.length)return!1;for(s=i;0!=s--;)if(!c(e[s],t[s]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!t.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!c(s.value[1],t.get(s.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!t.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((i=e.length)!=t.length)return!1;for(s=i;0!=s--;)if(e[s]!==t[s])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((i=(l=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(s=i;0!=s--;)if(!Object.prototype.hasOwnProperty.call(t,l[s]))return!1;if(r&&e instanceof Element)return!1;for(s=i;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!c(e[l[s]],t[l[s]]))return!1;return!0}return e!=e&&t!=t}e.exports=function(e,t){try{return c(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},245:function(e,t,r){"use strict";var n=r(2),o=r(0),a=r.n(o),c=r(232),i=r(226),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:r(21).a,theme:s};function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},h=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=p({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=p({},r,{backgroundColor:null}),o};function g(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var m=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?h(e.theme,e.language):void 0;return t.themeDict=r})),u(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=p({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),u(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var c=n?{display:"inline-block"}:{},i=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(i))}})),u(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,c=p({},g(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?p({},c.style,o):o),void 0!==r&&(c.key=r),n&&(c.className+=" "+n),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,c=0,i=[],s=[i];c>-1;){for(;(a=n[c]++)<o[c];){var l=void 0,u=t[c],p=r[c][a];if("string"==typeof p?(u=c>0?u:["plain"],l=p):(u=d(u,p.type),p.alias&&(u=d(u,p.alias)),l=p.content),"string"==typeof l){var h=l.split(f),g=h.length;i.push({types:u,content:h[0]});for(var m=1;m<g;m++)y(i),s.push(i=[]),i.push({types:u,content:h[m]})}else c++,t.push(u),r.push(l),n.push(0),o.push(l.length)}c--,t.pop(),r.pop(),n.pop(),o.pop()}return y(i),s}(void 0!==c?t.tokenize(n,c,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),v=r(310),b=r.n(v),j=r(311),O=r.n(j),k=r(224),x={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=r(247),w=function(){var e=Object(k.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,r=Object(E.a)().isDarkTheme,n=t.theme||x,o=t.darkTheme||n;return r?o:n},P=r(109),T=r.n(P),N=/{([\d,-]+)}/,S=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+r+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},C=/title=".*"/,A=function(e){var t=e.children,r=e.className,c=e.metastring,s=Object(k.a)().siteConfig.themeConfig.prism,u=void 0===s?{}:s,p=Object(o.useState)(!1),f=p[0],y=p[1],d=Object(o.useState)(!1),h=d[0],g=d[1];Object(o.useEffect)((function(){g(!0)}),[]);var v=Object(o.useRef)(null),j=[],x="",E=w();if(c&&N.test(c)){var P=c.match(N)[1];j=O.a.parse(P).filter((function(e){return e>0}))}c&&C.test(c)&&(x=c.match(C)[0].split("title=")[1].replace(/"+/g,""));var A=r&&r.replace(/language-/,"");!A&&u.defaultLanguage&&(A=u.defaultLanguage);var B=t.replace(/\n$/,"");if(0===j.length&&void 0!==A){for(var D,L="",_=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}}(A),I=t.replace(/\n$/,"").split("\n"),R=0;R<I.length;){var $=R+1,z=I[R].match(_);if(null!==z){switch(z.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=$+",";break;case"highlight-start":D=$;break;case"highlight-end":L+=D+"-"+($-1)+","}I.splice(R,1)}else R+=1}j=O.a.parse(L),B=I.join("\n")}var F=function(){b()(B),y(!0),setTimeout((function(){return y(!1)}),2e3)};return a.a.createElement(m,Object(n.a)({},l,{key:String(h),theme:E,code:B,language:A}),(function(e){var t,r,o=e.className,c=e.style,s=e.tokens,l=e.getLineProps,u=e.getTokenProps;return a.a.createElement(a.a.Fragment,null,x&&a.a.createElement("div",{style:c,className:T.a.codeBlockTitle},x),a.a.createElement("div",{className:T.a.codeBlockContent},a.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(i.a)(T.a.copyButton,(t={},t[T.a.copyButtonWithTitle]=x,t)),onClick:F},f?"Copied":"Copy"),a.a.createElement("div",{tabIndex:0,className:Object(i.a)(o,T.a.codeBlock,(r={},r[T.a.codeBlockWithTitle]=x,r))},a.a.createElement("div",{className:T.a.codeBlockLines,style:c},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var r=l({line:e,key:t});return j.includes(t+1)&&(r.className=r.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(n.a)({key:t},r),e.map((function(e,t){return a.a.createElement("span",Object(n.a)({key:t},u({token:e,key:t})))})))}))))))}))},B=r(6),D=(r(110),r(111)),L=r.n(D),_=function(e){return function(t){var r,n=t.id,o=Object(B.a)(t,["id"]),c=Object(k.a)().siteConfig,s=(c=void 0===c?{}:c).themeConfig,l=(s=void 0===s?{}:s).navbar,u=(l=void 0===l?{}:l).hideOnScroll,p=void 0!==u&&u;return n?a.a.createElement(e,o,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(i.a)("anchor",(r={},r[L.a.enhancedAnchor]=!p,r)),id:n}),o.children,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):a.a.createElement(e,o)}},I=r(112),R=r.n(I),$={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?a.a.createElement(A,e):a.a.createElement("code",e):t},a:function(e){return a.a.createElement(c.a,e)},pre:function(e){return a.a.createElement("div",Object(n.a)({className:R.a.mdxCodeBlock},e))},h1:_("h1"),h2:_("h2"),h3:_("h3"),h4:_("h4"),h5:_("h5"),h6:_("h6")};t.a=$},310:function(e,t,r){"use strict";const n=(e,{target:t=document.body}={})=>{const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(i){}return r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus(),c};e.exports=n,e.exports.default=n},311:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var r=t[1],n=t[2],o=t[3];if(r&&o){var a=[],c=(r=parseInt(r))<(o=parseInt(o))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(o+=c);for(var i=r;i!=o;i+=c)a.push(i);return a}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);