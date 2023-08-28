"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[614],{8760:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return d}});var l=a(7294),r=a(4108),n=a(4160),s=a(8032);function m(e){let{homeBanner:t}=e;const{title:a,descriptionHtml:r,handle:m,image:c}=t,i=(0,s.c)(c);return l.createElement("section",{className:"relative "},l.createElement(s.G,{image:i,className:"py-11",alt:"home Banner"}),l.createElement("div",{className:"container absolute top-1/2 -translate-y-1/2 left-10"},l.createElement("h1",{className:"text-6xl text-gray-800 font-medium mb-4 capitalize w-[600px]"},a),l.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),l.createElement("div",{className:"mt-12"},l.createElement(n.rU,{to:"/collections/"+m,className:"bg-primary border border-primary text-white px-8 py-3 font-medium  rounded-md hover:bg-transparent hover:text-primary"},"Shop Now"))))}function c(e){let{homeCategory:t}=e;const{nodes:a}=t;return l.createElement("div",{className:"container py-16"},l.createElement("h2",{className:"text-2xl font-medium text-gray-800 uppercase mb-6"},"shop by category"),l.createElement("div",{className:"grid grid-cols-3 gap-3"},a.map(((e,t)=>{const a=(0,s.c)(e.image);return l.createElement("div",{className:"relative rounded-sm overflow-hidden group",key:t},l.createElement(s.G,{image:a,alt:"category 1",className:"w-full"}),l.createElement(n.rU,{to:"/collections/"+e.handle,className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"},e.title))}))))}function i(e){let{homeNewAraivals:t}=e;const{products:a}=t;return l.createElement("div",{className:"container pb-16"},l.createElement("h2",{className:"text-2xl font-medium text-gray-800 uppercase mb-6"},"top new arrival"),l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6"},a.map(((e,t)=>{var a;const r=(0,s.c)(null===(a=e.featuredImage)||void 0===a?void 0:a.gatsbyImageData);return l.createElement("div",{className:"bg-white shadow rounded overflow-hidden group flex justify-between flex-col",key:t},l.createElement("div",{className:"relative"},l.createElement(s.G,{image:r,alt:"product 1",className:"w-full"}),l.createElement("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"},l.createElement(n.rU,{to:"",className:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"view product"},l.createElement("i",{className:"fa-solid fa-magnifying-glass"})),l.createElement(n.rU,{to:"",className:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"add to wishlist"},l.createElement("i",{className:"fa-solid fa-heart"})))),l.createElement("div",{className:"pt-4 pb-3 px-4"},l.createElement(n.rU,{to:""},l.createElement("h4",{className:"uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"},e.title)),l.createElement("div",{className:"flex items-baseline mb-1 space-x-2"},l.createElement("p",{className:"text-xl text-primary font-semibold"},"$45.00"),l.createElement("p",{className:"text-sm text-gray-400 line-through"},"$55.90")),l.createElement("div",{className:"flex items-center"},l.createElement("div",{className:"flex gap-1 text-sm text-yellow-400"},l.createElement("span",null,l.createElement("i",{className:"fa-solid fa-star"})),l.createElement("span",null,l.createElement("i",{className:"fa-solid fa-star"})),l.createElement("span",null,l.createElement("i",{className:"fa-solid fa-star"})),l.createElement("span",null,l.createElement("i",{className:"fa-solid fa-star"})),l.createElement("span",null,l.createElement("i",{className:"fa-solid fa-star"}))),l.createElement("div",{className:"text-xs text-gray-500 ml-3"},"(150)"))),l.createElement(n.rU,{to:"",className:"block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"},"Add to cart"))}))))}function o(e){var t;let{blogs:a}=e;return l.createElement("div",{className:"home-blog-section"},l.createElement("div",{className:"container"},l.createElement("h1",{className:"text-center text-4xl text-[#121212] my-4"},"Our Blogs"),l.createElement("div",{className:"blogs flex items-center gap-4 py-6"},null===(t=a.nodes)||void 0===t?void 0:t.map(((e,t)=>l.createElement("div",{className:"blog w-1/3 shadow-xl p-3"},l.createElement(s.M,{src:e.articles.nodes[0].image.url,alt:e.title}),l.createElement("h1",{className:"text-center text-xl text-[#121212] my-2"},e.title),l.createElement(n.rU,{to:"/blogs/"+e.handle,className:"bg-blue-500 block text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},"View All")))))))}var d=e=>{let{data:t,pageContext:a}=e;const{homeBanner:n,homeCategory:s,homeNewAraivals:d}=t,{blogs:u}=a;return l.createElement(r.Z,{pageName:"index"},l.createElement(m,{homeBanner:n}),l.createElement(c,{homeCategory:s}),l.createElement(i,{homeNewAraivals:d}),l.createElement(o,{blogs:u}))};const u=()=>l.createElement("title",null,"Home page")}}]);
//# sourceMappingURL=component---src-templates-home-page-js-74211142b17cf86aab77.js.map