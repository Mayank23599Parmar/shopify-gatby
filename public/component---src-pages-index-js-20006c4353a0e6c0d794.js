"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{4006:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),i=n(4160);function s(){return r.createElement("header",{className:"py-4 shadow-sm bg-white"},r.createElement("div",{className:"container flex items-center justify-between"},r.createElement(i.rU,{to:"/"},"Logo"),r.createElement("div",{className:"w-full max-w-xl relative flex"},r.createElement("span",{className:"absolute left-4 top-3 text-lg text-gray-400"},r.createElement("i",{className:"fa-solid fa-magnifying-glass"})),r.createElement("input",{type:"text",name:"search",id:"search",className:"w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none",placeholder:"search"}),r.createElement("button",{className:"bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"},"Search")),r.createElement("div",{className:"flex items-center space-x-4"},r.createElement(i.rU,{to:"/",className:"text-center text-gray-700 hover:text-primary transition relative"},r.createElement("div",{className:"text-2xl"},r.createElement("i",{className:"fa-regular fa-heart"})),r.createElement("div",{className:"text-xs leading-3"},"Wishlist"),r.createElement("div",{className:"absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"},"8")),r.createElement(i.rU,{to:"/",className:"text-center text-gray-700 hover:text-primary transition relative"},r.createElement("div",{className:"text-2xl"},r.createElement("i",{className:"fa-solid fa-bag-shopping"})),r.createElement("div",{className:"text-xs leading-3"},"Cart"),r.createElement("div",{className:"absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"},"2")),r.createElement(i.rU,{to:"/",className:"text-center text-gray-700 hover:text-primary transition relative"},r.createElement("div",{className:"text-2xl"},r.createElement("i",{className:"fa-regular fa-user"})),r.createElement("div",{className:"text-xs leading-3"},"Account")))))}function a(){return r.createElement("footer",{className:"bg-white rounded-lg shadow m-4 dark:bg-gray-800"},r.createElement("div",{className:"w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"},r.createElement("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400"},"© 2023 ",r.createElement(i.rU,{to:"/",className:"hover:underline"},"Flowbite™"),". All Rights Reserved."),r.createElement("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"},r.createElement("li",null,r.createElement(i.rU,{to:"/",activeClassName:"active",className:"mr-4 hover:underline md:mr-6 "},"Home")),r.createElement("li",null,r.createElement(i.rU,{to:"/products",activeClassName:"active",className:"mr-4 hover:underline md:mr-6"},"Product")),r.createElement("li",null,r.createElement(i.rU,{to:"/about",activeClassName:"active",className:"mr-4 hover:underline md:mr-6"},"About")))))}function o(e){let{children:t,pageName:n="index"}=e;return r.createElement("div",{className:"template-"+n},r.createElement(s,null),r.createElement("main",{id:"mainContent"},t),r.createElement(a,null))}},1891:function(e,t,n){n.r(t),n.d(t,{Head:function(){return ye},default:function(){return ve}});var r=n(7294),i=n(4006),s=n(4160),a=n(8032);function o(e){let{homeBanner:t}=e;const{title:n,descriptionHtml:i,handle:o,image:c}=t,l=(0,a.c)(c);return r.createElement("section",{className:"relative "},r.createElement(a.G,{image:l,className:"py-11",alt:"home Banner"}),r.createElement("div",{className:"container absolute top-1/2 -translate-y-1/2 left-10"},r.createElement("h1",{className:"text-6xl text-gray-800 font-medium mb-4 capitalize w-[600px]"},n),r.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),r.createElement("div",{className:"mt-12"},r.createElement(s.rU,{to:"/collections/"+o,className:"bg-primary border border-primary text-white px-8 py-3 font-medium  rounded-md hover:bg-transparent hover:text-primary"},"Shop Now"))))}function c(e){let{homeCategory:t}=e;const{nodes:n}=t;return r.createElement("div",{className:"container py-16"},r.createElement("h2",{className:"text-2xl font-medium text-gray-800 uppercase mb-6"},"shop by category"),r.createElement("div",{className:"grid grid-cols-3 gap-3"},n.map(((e,t)=>{const n=(0,a.c)(e.image);return r.createElement("div",{className:"relative rounded-sm overflow-hidden group",key:t},r.createElement(a.G,{image:n,alt:"category 1",className:"w-full"}),r.createElement(s.rU,{to:"/collections/"+e.handle,className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"},e.title))}))))}function l(e){let{homeNewAraivals:t}=e;const{products:n}=t;return console.log(n,"products"),r.createElement("div",{className:"container pb-16"},r.createElement("h2",{className:"text-2xl font-medium text-gray-800 uppercase mb-6"},"top new arrival"),r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6"},n.map(((e,t)=>{var n;const i=(0,a.c)(null===(n=e.featuredImage)||void 0===n?void 0:n.gatsbyImageData);return r.createElement("div",{className:"bg-white shadow rounded overflow-hidden group flex justify-between flex-col",key:t},r.createElement("div",{className:"relative"},r.createElement(a.G,{image:i,alt:"product 1",className:"w-full"}),r.createElement("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"},r.createElement(s.rU,{to:"",className:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"view product"},r.createElement("i",{className:"fa-solid fa-magnifying-glass"})),r.createElement(s.rU,{to:"",className:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"add to wishlist"},r.createElement("i",{className:"fa-solid fa-heart"})))),r.createElement("div",{className:"pt-4 pb-3 px-4"},r.createElement(s.rU,{to:""},r.createElement("h4",{className:"uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"},e.title)),r.createElement("div",{className:"flex items-baseline mb-1 space-x-2"},r.createElement("p",{className:"text-xl text-primary font-semibold"},"$45.00"),r.createElement("p",{className:"text-sm text-gray-400 line-through"},"$55.90")),r.createElement("div",{className:"flex items-center"},r.createElement("div",{className:"flex gap-1 text-sm text-yellow-400"},r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"})),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"})),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"})),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"})),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"}))),r.createElement("div",{className:"text-xs text-gray-500 ml-3"},"(150)"))),r.createElement(s.rU,{to:"",className:"block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"},"Add to cart"))}))))}var h=n(3833),p=n(8579),u=n(9896),d=n(655),m=n(3581),E=n(8216);const f=(0,h.L)({uri:"https://e2m-testing-store.myshopify.com/api/2023-04/graphql.json"}),x=(N=()=>({headers:{"X-Shopify-Storefront-Access-Token":"cbf7f27ae7f3d4c76f7921b8b0fd58af"}}),new m.i((function(e,t){var n=(0,d._T)(e,[]);return new E.y((function(r){var i,s=!1;return Promise.resolve(n).then((function(t){return N(t,e.getContext())})).then(e.setContext).then((function(){s||(i=t(e).subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)}))})).catch(r.error.bind(r)),function(){s=!0,i&&i.unsubscribe()}}))})));var N;const v=new p.f({link:x.concat(f),cache:new u.h});function y(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const T=/\r\n|[\n\r]/g;function g(e,t){let n=0,r=1;for(const i of e.body.matchAll(T)){if("number"==typeof i.index||y(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function k(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,s=e.locationOffset.line-1,a=t.line+s,o=1===t.line?n:0,c=t.column+o,l=`${e.name}:${a}:${c}\n`,h=r.split(/\r\n|[\n\r]/g),p=h[i];if(p.length>120){const e=Math.floor(c/80),t=c%80,n=[];for(let r=0;r<p.length;r+=80)n.push(p.slice(r,r+80));return l+A([[`${a} |`,n[0]],...n.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",n[e+1]]])}return l+A([[a-1+" |",h[i-1]],[`${a} |`,p],["|","^".padStart(c)],[`${a+1} |`,h[i+1]]])}function A(e){const t=e.filter((([e,t])=>void 0!==t)),n=Math.max(...t.map((([e])=>e.length)));return t.map((([e,t])=>e.padStart(n)+(t?" "+t:""))).join("\n")}class _ extends Error{constructor(e,...t){var n,r,i;const{nodes:s,source:a,positions:o,path:c,originalError:l,extensions:h}=function(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=c?c:void 0,this.originalError=null!=l?l:void 0,this.nodes=I(Array.isArray(s)?s:s?[s]:void 0);const p=I(null===(n=this.nodes)||void 0===n?void 0:n.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!=a?a:null==p||null===(r=p[0])||void 0===r?void 0:r.source,this.positions=null!=o?o:null==p?void 0:p.map((e=>e.start)),this.locations=o&&a?o.map((e=>g(a,e))):null==p?void 0:p.map((e=>g(e.source,e.start)));const u="object"==typeof(d=null==l?void 0:l.extensions)&&null!==d?null==l?void 0:l.extensions:void 0;var d;this.extensions=null!==(i=null!=h?h:u)&&void 0!==i?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=l&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,_):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+="\n\n"+k((t=n.loc).source,g(t.source,t.start)));else if(this.source&&this.locations)for(const n of this.locations)e+="\n\n"+k(this.source,n);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function I(e){return void 0===e||0===e.length?void 0:e}function b(e,t,n){return new _(`Syntax Error: ${n}`,{source:e,positions:[t]})}var C,D=n(2380);!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(C||(C={}));var O,w=n(7359),R=n(7392),L=n(8297);!function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(O||(O={}));class S{constructor(e){const t=new D.WU(O.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;return this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==O.EOF)do{if(e.next)e=e.next;else{const t=V(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===O.COMMENT);return e}}function F(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function U(e,t){return P(e.charCodeAt(t))&&M(e.charCodeAt(t+1))}function P(e){return e>=55296&&e<=56319}function M(e){return e>=56320&&e<=57343}function B(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return O.EOF;if(n>=32&&n<=126){const e=String.fromCodePoint(n);return'"'===e?"'\"'":`"${e}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function K(e,t,n,r,i){const s=e.line,a=1+n-e.lineStart;return new D.WU(t,n,r,s,a,i)}function V(e,t){const n=e.source.body,r=n.length;let i=t;for(;i<r;){const t=n.charCodeAt(i);switch(t){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:10===n.charCodeAt(i+1)?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return j(e,i);case 33:return K(e,O.BANG,i,i+1);case 36:return K(e,O.DOLLAR,i,i+1);case 38:return K(e,O.AMP,i,i+1);case 40:return K(e,O.PAREN_L,i,i+1);case 41:return K(e,O.PAREN_R,i,i+1);case 46:if(46===n.charCodeAt(i+1)&&46===n.charCodeAt(i+2))return K(e,O.SPREAD,i,i+3);break;case 58:return K(e,O.COLON,i,i+1);case 61:return K(e,O.EQUALS,i,i+1);case 64:return K(e,O.AT,i,i+1);case 91:return K(e,O.BRACKET_L,i,i+1);case 93:return K(e,O.BRACKET_R,i,i+1);case 123:return K(e,O.BRACE_L,i,i+1);case 124:return K(e,O.PIPE,i,i+1);case 125:return K(e,O.BRACE_R,i,i+1);case 34:return 34===n.charCodeAt(i+1)&&34===n.charCodeAt(i+2)?J(e,i):Y(e,i)}if((0,L.X1)(t)||45===t)return G(e,i,t);if((0,L.LQ)(t))return W(e,i);throw b(e.source,i,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":F(t)||U(n,i)?`Unexpected character: ${B(e,i)}.`:`Invalid character: ${B(e,i)}.`)}return K(e,O.EOF,r,r)}function j(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const e=n.charCodeAt(i);if(10===e||13===e)break;if(F(e))++i;else{if(!U(n,i))break;i+=2}}return K(e,O.COMMENT,t,i,n.slice(t+1,i))}function G(e,t,n){const r=e.source.body;let i=t,s=n,a=!1;if(45===s&&(s=r.charCodeAt(++i)),48===s){if(s=r.charCodeAt(++i),(0,L.X1)(s))throw b(e.source,i,`Invalid number, unexpected digit after 0: ${B(e,i)}.`)}else i=$(e,i,s),s=r.charCodeAt(i);if(46===s&&(a=!0,s=r.charCodeAt(++i),i=$(e,i,s),s=r.charCodeAt(i)),69!==s&&101!==s||(a=!0,s=r.charCodeAt(++i),43!==s&&45!==s||(s=r.charCodeAt(++i)),i=$(e,i,s),s=r.charCodeAt(i)),46===s||(0,L.LQ)(s))throw b(e.source,i,`Invalid number, expected digit but got: ${B(e,i)}.`);return K(e,a?O.FLOAT:O.INT,t,i,r.slice(t,i))}function $(e,t,n){if(!(0,L.X1)(n))throw b(e.source,t,`Invalid number, expected digit but got: ${B(e,t)}.`);const r=e.source.body;let i=t+1;for(;(0,L.X1)(r.charCodeAt(i));)++i;return i}function Y(e,t){const n=e.source.body,r=n.length;let i=t+1,s=i,a="";for(;i<r;){const r=n.charCodeAt(i);if(34===r)return a+=n.slice(s,i),K(e,O.STRING,t,i+1,a);if(92!==r){if(10===r||13===r)break;if(F(r))++i;else{if(!U(n,i))throw b(e.source,i,`Invalid character within String: ${B(e,i)}.`);i+=2}}else{a+=n.slice(s,i);const t=117===n.charCodeAt(i+1)?123===n.charCodeAt(i+2)?Q(e,i):q(e,i):X(e,i);a+=t.value,i+=t.size,s=i}}throw b(e.source,i,"Unterminated string.")}function Q(e,t){const n=e.source.body;let r=0,i=3;for(;i<12;){const e=n.charCodeAt(t+i++);if(125===e){if(i<5||!F(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|H(e),r<0)break}throw b(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function q(e,t){const n=e.source.body,r=z(n,t+2);if(F(r))return{value:String.fromCodePoint(r),size:6};if(P(r)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const e=z(n,t+8);if(M(e))return{value:String.fromCodePoint(r,e),size:12}}throw b(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function z(e,t){return H(e.charCodeAt(t))<<12|H(e.charCodeAt(t+1))<<8|H(e.charCodeAt(t+2))<<4|H(e.charCodeAt(t+3))}function H(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function X(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw b(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function J(e,t){const n=e.source.body,r=n.length;let i=e.lineStart,s=t+3,a=s,o="";const c=[];for(;s<r;){const r=n.charCodeAt(s);if(34===r&&34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)){o+=n.slice(a,s),c.push(o);const r=K(e,O.BLOCK_STRING,t,s+3,(0,R.wv)(c).join("\n"));return e.line+=c.length-1,e.lineStart=i,r}if(92!==r||34!==n.charCodeAt(s+1)||34!==n.charCodeAt(s+2)||34!==n.charCodeAt(s+3))if(10!==r&&13!==r)if(F(r))++s;else{if(!U(n,s))throw b(e.source,s,`Invalid character within String: ${B(e,s)}.`);s+=2}else o+=n.slice(a,s),c.push(o),13===r&&10===n.charCodeAt(s+1)?s+=2:++s,o="",a=s,i=s;else o+=n.slice(a,s),a=s+1,s+=4}throw b(e.source,s,"Unterminated string.")}function W(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const e=n.charCodeAt(i);if(!(0,L.HQ)(e))break;++i}return K(e,O.NAME,t,i,n.slice(t,i))}var Z=n(4783);class ee{constructor(e,t={}){const n=(0,Z.T)(e)?e:new Z.H(e);this._lexer=new S(n),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(O.NAME);return this.node(e,{kind:w.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:w.h.DOCUMENT,definitions:this.many(O.SOF,this.parseDefinition,O.EOF)})}parseDefinition(){if(this.peek(O.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===O.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw b(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(O.BRACE_L))return this.node(e,{kind:w.h.OPERATION_DEFINITION,operation:D.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let n;return this.peek(O.NAME)&&(n=this.parseName()),this.node(e,{kind:w.h.OPERATION_DEFINITION,operation:t,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(O.NAME);switch(e.value){case"query":return D.ku.QUERY;case"mutation":return D.ku.MUTATION;case"subscription":return D.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(O.PAREN_L,this.parseVariableDefinition,O.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:w.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(O.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(O.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(O.DOLLAR),this.node(e,{kind:w.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:w.h.SELECTION_SET,selections:this.many(O.BRACE_L,this.parseSelection,O.BRACE_R)})}parseSelection(){return this.peek(O.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let n,r;return this.expectOptionalToken(O.COLON)?(n=t,r=this.parseName()):r=t,this.node(e,{kind:w.h.FIELD,alias:n,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(O.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(O.PAREN_L,t,O.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,n=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:w.h.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(O.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(O.NAME)?this.node(e,{kind:w.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:w.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:w.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:w.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case O.BRACKET_L:return this.parseList(e);case O.BRACE_L:return this.parseObject(e);case O.INT:return this.advanceLexer(),this.node(t,{kind:w.h.INT,value:t.value});case O.FLOAT:return this.advanceLexer(),this.node(t,{kind:w.h.FLOAT,value:t.value});case O.STRING:case O.BLOCK_STRING:return this.parseStringLiteral();case O.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:w.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:w.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:w.h.NULL});default:return this.node(t,{kind:w.h.ENUM,value:t.value})}case O.DOLLAR:if(e){if(this.expectToken(O.DOLLAR),this._lexer.token.kind===O.NAME){const e=this._lexer.token.value;throw b(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:w.h.STRING,value:e.value,block:e.kind===O.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:w.h.LIST,values:this.any(O.BRACKET_L,(()=>this.parseValueLiteral(e)),O.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:w.h.OBJECT,fields:this.any(O.BRACE_L,(()=>this.parseObjectField(e)),O.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,n=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:w.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(O.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(O.AT),this.node(t,{kind:w.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(O.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(O.BRACKET_R),t=this.node(e,{kind:w.h.LIST_TYPE,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(O.BANG)?this.node(e,{kind:w.h.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:w.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(O.STRING)||this.peek(O.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.many(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);return this.node(e,{kind:w.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:r})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(O.COLON);const n=this.parseNamedType();return this.node(e,{kind:w.h.OPERATION_TYPE_DEFINITION,operation:t,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();return this.node(e,{kind:w.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:r})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:w.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:r,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(O.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseFieldDefinition,O.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),r=this.parseArgumentDefs();this.expectToken(O.COLON);const i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:w.h.FIELD_DEFINITION,description:t,name:n,arguments:r,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(O.PAREN_L,this.parseInputValueDef,O.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(O.COLON);const r=this.parseTypeReference();let i;this.expectOptionalToken(O.EQUALS)&&(i=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:w.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:r,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:w.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:r,directives:i,fields:s})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:w.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:r,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(O.EQUALS)?this.delimitedMany(O.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:w.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:r,values:i})}parseEnumValuesDefinition(){return this.optionalMany(O.BRACE_L,this.parseEnumValueDefinition,O.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(e,{kind:w.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:r})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw b(this._lexer.source,this._lexer.token.start,`${te(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:w.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:r,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseInputValueDef,O.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===O.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),n=this.optionalMany(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:w.h.SCHEMA_EXTENSION,directives:t,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),n=this.parseConstDirectives();if(0===n.length)throw this.unexpected();return this.node(e,{kind:w.h.SCALAR_TYPE_EXTENSION,name:t,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===n.length&&0===r.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:w.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:r,fields:i})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===n.length&&0===r.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:w.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:r,fields:i})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),n=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(0===n.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:w.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:r})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),n=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(0===n.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:w.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:r})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),n=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(0===n.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:w.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:r})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(O.AT);const n=this.parseName(),r=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(e,{kind:w.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:r,repeatable:i,locations:s})}parseDirectiveLocations(){return this.delimitedMany(O.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(C,t.value))return t;throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new D.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw b(this._lexer.source,t.start,`Expected ${ne(e)}, found ${te(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==O.NAME||t.value!==e)throw b(this._lexer.source,t.start,`Expected "${e}", found ${te(t)}.`);this.advanceLexer()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===O.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){const t=null!=e?e:this._lexer.token;return b(this._lexer.source,t.start,`Unexpected ${te(t)}.`)}any(e,t,n){this.expectToken(e);const r=[];for(;!this.expectOptionalToken(n);)r.push(t.call(this));return r}optionalMany(e,t,n){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(n));return e}return[]}many(e,t,n){this.expectToken(e);const r=[];do{r.push(t.call(this))}while(!this.expectOptionalToken(n));return r}delimitedMany(e,t){this.expectOptionalToken(e);const n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(void 0!==e&&t.kind!==O.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw b(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function te(e){const t=e.value;return ne(e.kind)+(null!=t?` "${t}"`:"")}function ne(e){return function(e){return e===O.BANG||e===O.DOLLAR||e===O.AMP||e===O.PAREN_L||e===O.PAREN_R||e===O.SPREAD||e===O.COLON||e===O.EQUALS||e===O.AT||e===O.BRACKET_L||e===O.BRACKET_R||e===O.BRACE_L||e===O.PIPE||e===O.BRACE_R}(e)?`"${e}"`:e}var re=new Map,ie=new Map,se=!0,ae=!1;function oe(e){return e.replace(/[\s,]+/g," ").trim()}function ce(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var r=e.name.value,i=oe((a=e.loc).source.body.substring(a.start,a.end)),s=ie.get(r);s&&!s.has(i)?se&&console.warn("Warning: fragment with name "+r+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||ie.set(r,s=new Set),s.add(i),t.has(i)||(t.add(i),n.push(e))}else n.push(e);var a})),(0,d.pi)((0,d.pi)({},e),{definitions:n})}function le(e){var t=oe(e);if(!re.has(t)){var n=function(e,t){return new ee(e,t).parseDocument()}(e,{experimentalFragmentVariables:ae,allowLegacyFragmentVariables:ae});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");re.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var r=e[n];r&&"object"==typeof r&&t.add(r)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(ce(n)))}return re.get(t)}function he(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var r=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?r+=t.loc.source.body:r+=t,r+=e[n+1]})),le(r)}var pe,ue=he,de=function(){re.clear(),ie.clear()},me=function(){se=!1},Ee=function(){ae=!0},fe=function(){ae=!1};(pe=he||(he={})).gql=ue,pe.resetCaches=de,pe.disableFragmentWarnings=me,pe.enableExperimentalFragmentVariables=Ee,pe.disableExperimentalFragmentVariables=fe,he.default=he;var xe;function Ne(){var e,t,n;const{0:i,1:s}=(0,r.useState)([]);return(0,r.useEffect)((()=>{var e,t;v.query({query:he(xe||(e=["query{\n        blogs(first: 100) {\n          nodes {\n            handle\n            id\n            onlineStoreUrl\n            seo {\n              description\n              title\n            }\n            title\n            articles(first: 100) {\n              nodes {\n                handle\n                image {\n                  altText\n                  height\n                  id\n                  url\n                  width\n                }\n                title\n                excerptHtml\n                excerpt\n                content\n           contentHtml\n           publishedAt\n           authorV2 {\n            name\n          }\n              }\n            }\n          }\n        }\n      }"],t||(t=e.slice(0)),e.raw=t,xe=e))}).then((e=>{s(e),console.log(e,"wdwdddwd")}))}),[]),console.log(i,"ddddddddddd"),r.createElement("div",{className:"test-test"},null==i||null===(e=i.data)||void 0===e||null===(t=e.blogs)||void 0===t||null===(n=t.nodes)||void 0===n?void 0:n.map(((e,t)=>r.createElement("h1",null,e.title))))}var ve=e=>{console.log(e,"dwdwed");const{homeBanner:t,homeCategory:n,homeNewAraivals:s}=e.data;return r.createElement(i.Z,{pageName:"index"},r.createElement(o,{homeBanner:t}),r.createElement(c,{homeCategory:n}),r.createElement(l,{homeNewAraivals:s}),r.createElement(Ne,null))};const ye=()=>r.createElement("title",null,"Home page")}}]);
//# sourceMappingURL=component---src-pages-index-js-20006c4353a0e6c0d794.js.map