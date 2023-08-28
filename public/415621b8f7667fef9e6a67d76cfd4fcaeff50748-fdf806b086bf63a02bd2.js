"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[867],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=r(c)===c&&n(c)!==c,i=s,s=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return R},L:function(){return f},M:function(){return N},P:function(){return w},_:function(){return i},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function m(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const m=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=i(e,g);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},x=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,y);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},x.displayName="Picture",x.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,E);return t?r.createElement(x,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(b=x.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(x,s({},e)),r.createElement("noscript",null,r.createElement(x,s({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=x.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],I=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:l().object.isRequired,alt:L},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],q=new Set;let O,D;const A=function(e){let{as:t="div",image:n,style:l,backgroundColor:c,className:d,class:u,onStartLoad:g,onLoad:p,onError:f}=e,h=i(e,j);const{width:y,height:v,layout:x}=n,b=m(y,v,x),{style:E,className:w}=b,N=i(b,T),C=(0,r.useRef)(),k=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(x,y,v);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return D=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void q.add(k);if(D&&q.has(k))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:q.has(k),image:n},h)),q.has(k)||(t=requestAnimationFrame((()=>{C.current&&(r=i(C.current,k,q,l,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{q.has(k)&&D&&(C.current.innerHTML=D(s({isLoading:q.has(k),isLoaded:q.has(k),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},N,{style:s({},E,l,{backgroundColor:c}),className:w+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));R.propTypes=S,R.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function U(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,_);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=U((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:y,objectPosition:v}=e,x=i(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=s({objectFit:y,objectPosition:v,backgroundColor:h},p);const{width:b,height:E,layout:L,images:S,placeholder:j,backgroundColor:T}=o,q=m(b,E,L),{style:O,className:D}=q,A=i(q,k),R={fallback:void 0,sources:[]};return S.fallback&&(R.fallback=s({},S.fallback,{srcSet:S.fallback.srcSet?I(S.fallback.srcSet):void 0})),S.sources&&(R.sources=S.sources.map((e=>s({},e,{srcSet:I(e.srcSet)})))),r.createElement(t,s({},A,{style:s({},O,l,{backgroundColor:h}),className:D+(a?" "+a:"")}),r.createElement(f,{layout:L,width:b,height:E},r.createElement(w,s({},u(j,!1,L,b,E,T,y,v))),r.createElement(N,s({"data-gatsby-image-ssr":"",className:g},x,d("eager"===c,!1,R,c,p)))))})),F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),z={src:l().string.isRequired,alt:L,width:F,height:F,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=z;const W=U(R);W.displayName="StaticImage",W.propTypes=z},4108:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(4160),l=a(6163),s=a(2514);function i(){const{cart:e}=(0,l.Z)(),{isCustomerLogin:t,logOut:a}=(0,s.Z)();return(0,r.useEffect)((()=>{console.log("Navbar rendering",t)})),r.createElement("header",{className:"py-4 shadow-sm bg-white"},r.createElement("div",{className:"container flex items-center justify-between"},r.createElement(n.rU,{to:"/"},"Logo"),r.createElement("div",{className:"w-full max-w-xl relative flex"},r.createElement("span",{className:"absolute left-4 top-3 text-lg text-gray-400"},r.createElement("i",{className:"fa-solid fa-magnifying-glass"})),r.createElement("input",{type:"text",name:"search",id:"search",className:"w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none",placeholder:"search"}),r.createElement("button",{className:"bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"},"Search")),r.createElement("div",{className:"flex gap-3 items-center space-x-4"},r.createElement(n.rU,{to:"/cart",className:"text-center text-gray-700 hover:text-primary transition relative"},r.createElement("div",{className:"text-2xl"},r.createElement("i",{className:"fa-solid fa-bag-shopping"})),r.createElement("div",{className:"text-lg leading-3"},"Cart"),r.createElement("div",{className:"absolute -right-4 -top-4 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"},e.totalQuantity)),r.createElement(n.rU,{to:t?"/account":"/account/login",className:"text-center text-gray-700 hover:text-primary transition relative"},r.createElement("div",{className:"text-2xl"},r.createElement("i",{className:"fa-regular fa-user"})),r.createElement("div",{className:"text-lg leading-3"},"Account")))))}function o(){return r.createElement("footer",{className:"bg-white rounded-lg shadow m-4 dark:bg-gray-800"},r.createElement("div",{className:"w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"},r.createElement("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400"},"© 2023 ",r.createElement(n.rU,{to:"/",className:"hover:underline"},"Flowbite™"),". All Rights Reserved."),r.createElement("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"},r.createElement("li",null,r.createElement(n.rU,{to:"/",activeClassName:"active",className:"mr-4 hover:underline md:mr-6 "},"Home")),r.createElement("li",null,r.createElement(n.rU,{to:"/products",activeClassName:"active",className:"mr-4 hover:underline md:mr-6"},"Product")),r.createElement("li",null,r.createElement(n.rU,{to:"/about",activeClassName:"active",className:"mr-4 hover:underline md:mr-6"},"About")))))}var c=a(6886);var m=function(e){let{cartItem:t}=e;(0,r.useEffect)((()=>{console.log("CartDrawerItem rendering")}));const a={price:t.merchandise.price.amount,currencyCode:"USD",withZero:!0};console.log(t,"cartItem");const n=(0,c.Z)(a),{updateCartLineItem:s,removeCartLineItem:i}=(0,l.Z)();return console.log(n,"pricepriceprice"),r.createElement("li",{className:"flex py-6",key:t.id},r.createElement("div",{className:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"},r.createElement("img",{src:t.merchandise.image.url,alt:t.merchandise.title,className:"h-full w-full object-cover object-center"})),r.createElement("div",{className:"ml-4 flex flex-1 flex-col"},r.createElement("div",null,r.createElement("div",{className:"flex justify-between text-base font-medium text-gray-900"},r.createElement("h3",null,r.createElement("a",{href:"#"},t.merchandise.product.title)),r.createElement("p",{className:"ml-4"},null==n?void 0:n.price)),r.createElement("p",{className:"mt-1 text-sm text-gray-500"},t.merchandise.title)),r.createElement("div",{className:"flex flex-1 items-end justify-between text-sm"},r.createElement("div",{className:"mx-auto flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max"},r.createElement("div",{className:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none",onClick:()=>s({lineId:t.id,quantity:t.quantity-1})},"-"),r.createElement("div",{className:"h-8 w-8 text-base flex items-center justify-center"},t.quantity),r.createElement("div",{className:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none",onClick:()=>s({lineId:t.id,quantity:t.quantity+1})},"+")),r.createElement("div",{className:"flex"},r.createElement("button",{type:"button",className:"font-medium text-indigo-600 hover:text-indigo-500",onClick:()=>i({lineId:t.id})},"Remove")))))};function d(){var e;const{cart:t,toggleCartDrawer:a,isCartDrawerOpen:s}=(0,l.Z)();(0,r.useEffect)((()=>{console.log("CartDrwawer rendering")}));const i=(null==t||null===(e=t.lines)||void 0===e?void 0:e.nodes)||[];return console.log(t,a,s,"cart?.cost?.subtotalAmount"),r.createElement(r.Fragment,null,s&&r.createElement("div",{className:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},r.createElement("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),r.createElement("div",{className:"fixed inset-0 overflow-hidden"},r.createElement("div",{className:"absolute inset-0 overflow-hidden"},r.createElement("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},r.createElement("div",{className:"pointer-events-auto w-screen max-w-md"},r.createElement("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl"},r.createElement("div",{className:"flex-1 overflow-y-auto px-4 py-6 sm:px-6"},r.createElement("div",{className:"flex items-start justify-between"},r.createElement("h2",{className:"text-lg font-medium text-gray-900",id:"slide-over-title"},"Shopping cart"),r.createElement("div",{className:"ml-3 flex h-7 items-center"},r.createElement("button",{type:"button",onClick:()=>a(!1),className:"-m-2 p-2 text-gray-400 hover:text-gray-500"},r.createElement("span",{className:"sr-only"},"Close panel"),r.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",ariaHidden:"true"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))))),r.createElement("div",{className:"mt-8"},r.createElement("div",{className:"flow-root"},r.createElement("ul",{role:"list",className:"-my-6 divide-y divide-gray-200"},i.map((e=>r.createElement(m,{cartItem:e}))))))),r.createElement("div",{className:"border-t border-gray-200 px-4 py-6 sm:px-6"},r.createElement("div",{className:"flex justify-between text-base font-medium text-gray-900"},r.createElement("p",null,"Subtotal")),r.createElement("p",{className:"mt-0.5 text-sm text-gray-500"},"Shipping and taxes calculated at checkout."),r.createElement("div",{className:"mt-6"},r.createElement("button",{onClick:()=>window.location.href=t.checkoutUrl,className:" w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"},"Checkout")),r.createElement("div",{className:"mt-6 flex justify-center text-center text-sm text-gray-500"},r.createElement("p",null,"or",r.createElement(n.rU,{to:"/",type:"button",className:"  font-medium text-indigo-600 hover:text-indigo-500"},"Continue Shopping",r.createElement("span",{"aria-hidden":"true"}," →"))))))))))))}var u=(0,r.memo)(d);function g(e){let{children:t,pageName:a="index"}=e;return r.createElement("div",{className:"template-"+a},r.createElement(i,null),r.createElement("main",{id:"mainContent"},t),r.createElement(u,null),r.createElement(o,null))}var p=(0,r.memo)(g)},6163:function(e,t,a){var r=a(7294),n=a(2025);t.Z=()=>{const{loading:e,addProductVariantToCart:t,removeLineItem:a,updateLineItem:l,cart:s,toggleCartDrawer:i,isCartDrawerOpen:o}=(0,r.useContext)(n.x);if(void 0===s)throw new Error("useCart must be used within StoreContext");const c=function(e,a){let{variantId:r,quantity:n}=e;void 0===a&&(a=void 0);t({variantId:r,quantity:n},a)},m=e=>{let{lineId:t,quantity:a}=e;const r={lineId:t,quantity:a,cartId:s.id};l(r)},d=e=>{let{lineId:t}=e;const r={lineId:t,cartId:s.id};a(r)};return(0,r.useMemo)((()=>({loading:e,addVariantToCart:c,removeCartLineItem:d,updateCartLineItem:m,cart:s,toggleCartDrawer:i,isCartDrawerOpen:o})),[e,c,d,m,s,i,o])}},2514:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(8653),l=a(4160);function s(){const{0:e,1:t}=(0,r.useState)(!1),a=(0,n.$1)("shopify_cat");(0,r.useEffect)((()=>{a&&t(!0)}),[]);return{isCustomerLogin:e,logOut:(0,r.useCallback)((()=>{(0,n.lE)("shopify_cat","",0),t(!1),(0,l.c4)("/account/login")}),[])}}},6886:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){let{price:t,compareAtPrice:a,currencyCode:n="USD",withZero:l=!1}=e;const{0:s,1:i}=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=new Intl.NumberFormat("en-US",{style:"currency",currency:n,minimumFractionDigits:l?2:0});i({price:e.format(t),compareAtPrice:a?e.format(a):a})}),[n,t,a,l]),console.log(s,"moneyFormatmoneyFormat"),s}},8653:function(e,t,a){a.d(t,{$1:function(){return n},fi:function(){return l},lE:function(){return r}});const r=function(e,t,a){void 0===a&&(a=1);const r=new Date;r.setTime(r.getTime()+24*a*60*60*1e3);let n="expires="+r.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"},n=e=>{let t=e+"=",a=decodeURIComponent(document.cookie).split(";");for(let r=0;r<a.length;r++){let e=a[r];for(;" "==e.charAt(0);)e=e.substring(1);if(0===e.indexOf(t))return e.substring(t.length,e.length)}return""},l=e=>{const t=new Date,a=new Date(e);return Math.round(Math.abs((t-a)/864e5))}}}]);
//# sourceMappingURL=415621b8f7667fef9e6a67d76cfd4fcaeff50748-fdf806b086bf63a02bd2.js.map