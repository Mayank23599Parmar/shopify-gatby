"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[876],{7268:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return d}});var l=a(8032),r=a(7294);function n(e){let{image:t,title:a}=e;return r.createElement("section",{className:"relative "},r.createElement(l.G,{image:t,className:"py-11 w-full",alt:a}),r.createElement("div",{className:"container absolute top-1/2 -translate-y-1/2 left-10"},r.createElement("h1",{className:"text-6xl text-white font-medium mb-4 capitalize w-[600px]"},a)))}var s=a(4108),c=a(4160),i=a(6163);function m(e){var t;let{product:a}=e;(0,r.useEffect)((()=>{console.log("ProductCard rendering")}));const{addVariantToCart:n,toggleCartDrawer:s}=(0,i.Z)(),{0:m,1:o}=(0,r.useState)(!1),d=a.variants[0];console.log(d,"selectedVariantselectedVariant");const u=(0,l.c)(d.image)||(0,l.c)(null==a||null===(t=a.featuredImage)||void 0===t?void 0:t.gatsbyImageData);return r.createElement("div",{className:"bg-white shadow rounded overflow-hidden group flex flex-col justify-between"},r.createElement("div",{className:"relative"},r.createElement(l.G,{image:u,alt:"product 1",className:"w-full"}),r.createElement("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"},r.createElement(c.rU,{to:"/products/"+a.handle,className:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"view product"},r.createElement("i",{className:"fa-solid fa-magnifying-glass"})),r.createElement(c.rU,{to:"/products/"+a.handle,className:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"add to wishlist"},r.createElement("i",{className:"fa-solid fa-heart"})))),r.createElement("div",{className:"pt-4 pb-3 px-4"},r.createElement(c.rU,{to:"/products/"+a.handle},r.createElement("h4",{className:"uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"},a.title)),r.createElement("div",{className:"flex items-baseline mb-1 space-x-2"},r.createElement("p",{className:"text-xl text-primary font-semibold"},"$45.00"),r.createElement("p",{className:"text-sm text-gray-400 line-through"},"$55.90")),r.createElement("div",{className:"flex items-center"},r.createElement("div",{className:"flex gap-1 text-sm text-yellow-400"},r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"})),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"})),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"})),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"})),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-star"}))),r.createElement("div",{className:"text-xs text-gray-500 ml-3"},"(150)"))),r.createElement("button",{onClick:()=>(o(!0),void n({variantId:d.storefrontId,quantity:1},(()=>{o(!1),s(!0)}))),className:"block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"},m?"Adding...":"Add to cart"))}function o(e){let{products:t,title:a}=e;return r.createElement("div",{className:"container pb-16"},r.createElement("h2",{className:"text-2xl font-medium text-gray-800 uppercase mb-6"},a," (",t.length,") results"),r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6"},t.map(((e,t)=>r.createElement(m,{product:e,key:t})))))}function d(e){let{pageContext:t}=e;const{collection:a}=t,c=(0,l.c)(a.image.gatsbyImageData);return r.createElement(s.Z,null,r.createElement("div",{className:"collection-page"},r.createElement(n,{image:c,title:a.title}),r.createElement(o,{title:a.title,products:a.products})))}const u=e=>{let{pageContext:t}=e;const{collection:a}=t;return r.createElement(r.Fragment,null,r.createElement("title",null,a.title," - Collection"),r.createElement("meta",{name:"description",content:"Hello World"}))}}}]);
//# sourceMappingURL=component---src-templates-collection-js-95d31e70e865d4f18744.js.map