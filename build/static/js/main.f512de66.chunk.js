(this["webpackJsonpmarket-app"]=this["webpackJsonpmarket-app"]||[]).push([[0],{32:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(11),i=c.n(r),s=(c(32),c(3)),d=(c(37),c.p+"static/media/logo.7c2ff2cf.svg"),u=c.p+"static/media/basket.d31aad59.svg",o=(c(38),16),l=c(0),p=function(e){var t=e.price;return Object(l.jsxs)("div",{className:"price",children:["\u20ba",function(e){return e.toFixed(2).replace(".",",")}(t)]})},j=function(){var e=Object(s.c)((function(e){return e.cartReducer.items}));return Object(l.jsxs)("header",{className:"flex",children:[Object(l.jsx)("img",{src:d,alt:"logo"}),Object(l.jsxs)("div",{id:"CartCount",children:[Object(l.jsx)("img",{src:u,alt:"basket-icon"}),Object(l.jsx)(p,{price:e.reduce((function(e,t){return e+t.price*t.quantity}),0)})]})]})},b=(c(40),c(41),c(2)),f=(c(42),function(e){return Object(l.jsx)("input",Object(b.a)(Object(b.a)({className:"main"},e),{},{placeholder:e.placeholder}))}),h=c(9),O=c(5),g=c.n(O),y=c(8),m=c(16),x=c.n(m),v=function(){var e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("http://localhost:8000/products"));case 3:if(!(t=e.sent).data){e.next=6;break}return e.abrupt("return",{products:t.data});case 6:return e.abrupt("return",null);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("http://localhost:8000/companies"));case 3:if(!(t=e.sent)||!t.data){e.next=6;break}return e.abrupt("return",t.data);case 6:return e.abrupt("return",null);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),T="GET_PRODUCTS_SUCCESS",k="GET_PRODUCTS_ERROR",S="GET_FILTERED_PRODUCTS_BY_TYPE",C="GET_SORTED_PRODUCTS",N="GET_FILTERED_PRODUCTS_BY_PAGE",R="GET_PRODUCTS_BY_BRANDS",w="GET_PRODUCTS_BY_TAGS",E="GET_COMPANIES_SUCCESS",_="GET_COMPANIES_ERROR",D=function(e){var t=e.title,c=e.data,n=e.type,r=e.placeholder,i=e.id,d=function(e,t,c){Object(s.c)((function(e){return e.productsReducer})).selectedSortType;var n=Object(s.b)(),r=function(e,t,c){return"checkbox"===t&&"brands"===c?e.map((function(e){return{name:e.name,slug:e.slug,id:c}})):"radio"===t&&"price"===c?e.map((function(e){return{name:e.name,id:e.id}})):e.map((function(e){return{name:e,value:e,id:c}}))}(e,t,c),i=Object(a.useState)(r),d=Object(h.a)(i,2),u=d[0],o=d[1],l=Object(a.useState)(r[0].value),p=Object(h.a)(l,2),j=p[0],f=p[1],O=Object(a.useState)(""),g=Object(h.a)(O,2),y=g[0],m=g[1],x={checkbox:function(e,t,c){var a=u.map((function(c){return c.name===e?Object(b.a)(Object(b.a)({},c),{},{checked:t}):c})),r=a.filter((function(e){return!0===e.checked})).map((function(e){return"brands"===c?e.slug:e.name}));n({type:"brands"===c?R:w,payload:{data:r,datatype:c}}),o(a)},radio:function(e,t,c){f(e),n({type:C,payload:{sortType:c}})}};return{list:u,handleChange:function(e){var t=e.target,c=t.name,a=t.type,n=t.checked,r=t.id;x[a](c,n,r)},currentValue:j,handleSearchChange:function(e){var t=e.target.value,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));m(t),o(c)},searchValue:y}}(c,n,i),u=d.list,o=d.handleChange,p=d.searchValue,j=d.handleSearchChange;return Object(l.jsxs)("section",{id:"filter",children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("div",{className:"card ".concat("checkbox"===n?"checkboxStyle":""),children:{radio:Object(l.jsx)("ol",{children:u.map((function(e){var t=e.name,c=e.value,a=e.checked,n=e.id;return Object(l.jsx)("li",{children:Object(l.jsxs)("label",{className:"radio-custom",children:[t,Object(l.jsx)("input",{type:"radio",id:n,name:"radio",value:c,checked:a,onChange:o}),Object(l.jsx)("span",{className:"checkmark",style:{borderRadius:"17.5px"}})]})},t)}))}),checkbox:Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(f,{value:p,onChange:j,placeholder:r}),Object(l.jsx)("ol",{style:{marginTop:"19px",height:"140px",overflow:"auto"},id:"checkbox",children:u.map((function(e){var t=e.name,c=e.checked,a=e.id;return Object(l.jsx)("li",{children:Object(l.jsxs)("label",{children:[t,Object(l.jsx)("input",{id:a,type:"checkbox",name:t,checked:c,onChange:o}),Object(l.jsx)("span",{className:"checkmark"})]})},t)}))})]})}[n]})]})},B=function(){var e=Object(s.c)((function(e){return e.productsReducer})),t=e.price,c=e.brands,a=e.tags;return Object(l.jsxs)("section",{className:"filter-panel",children:[t&&t.length>0&&Object(l.jsx)(D,{title:"Sorting",data:t,type:"radio",id:"price"}),c&&c.length>0&&Object(l.jsx)(D,{title:"Brands",data:c,type:"checkbox",placeholder:"Search brand",id:"brands"}),a&&a.length>0&&Object(l.jsx)(D,{title:"Tags",data:a,type:"checkbox",placeholder:"Search tag",id:"tags"})]})},G=(c(62),c(63),"ADD_CART"),M="REMOVE_CART",q=function(e,t,c){return function(a){a({type:G,payload:{id:e,name:t,price:c}})}},A=function(e){var t=e.product,c=t.name,a=t.price,n=Object(s.b)();return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("div",{className:"item-image",children:Object(l.jsx)("div",{})}),Object(l.jsx)(p,{price:a}),Object(l.jsx)("p",{className:"item-name",children:c}),Object(l.jsx)("button",{onClick:function(){return function(e){var t=e.slug,c=e.name,a=e.price;n(q(t,c,a))}(t)},children:"Add"})]})},I=(c(64),function(e){var t=e.types,c=e.selectedType,a=e.handleSelectedType;return Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{className:"".concat(c===e?"selected":""),onClick:function(){return a(e)},children:e},e)}))})}),F=c(25),L=c.n(F),U=(c(65),c.p+"static/media/prev.7004fdff.svg"),Y=c.p+"static/media/next.8dfedd76.svg",V=function(){var e=Object(s.c)((function(e){return e.productsReducer})),t=e.totalPage,c=e.activePage,a=Object(s.b)(),n=function(e){var t=e.target.id;a({type:N,payload:{page:t}})},r=function(e){var t=L()({active:Number(c)===e});return Object(l.jsx)("button",{onClick:n,id:e,className:"".concat(t," flex"),children:e},"page_".concat(e))};return Object(l.jsxs)("div",{className:"pagination",children:[0!==t&&Object(l.jsxs)("a",{className:"prev",onClick:function(){c>1&&a({type:N,payload:{page:parseInt(c)-1}})},children:[Object(l.jsx)("img",{src:U,alt:"prev"}),Object(l.jsx)("span",{children:"Prev"})]}),t>8?function(){for(var e=[],c=1;c<=4;c++)e.push(r(c));e.push(Object(l.jsx)("span",{className:"dots",children:"..."}));for(var a=t-4+1;a<=t;a++)e.push(r(a));return e}():function(){for(var e=[],c=1;c<=t;c++)e.push(r(c));return e}(),0!==t&&Object(l.jsxs)("a",{className:"next",onClick:function(){c<t&&a({type:N,payload:{page:parseInt(c)+1}})},children:[Object(l.jsx)("span",{children:"Next"}),Object(l.jsx)("img",{src:Y,alt:"next"})]})]})},J=function(){var e=Object(s.c)((function(e){return e.productsReducer})),t=e.products,c=e.types,n=e.selectedType,r=Object(a.useState)(n),i=Object(h.a)(r,2),d=i[0],u=i[1],o=Object(s.b)();Object(a.useEffect)((function(){o({type:S})}),[o]);return Object(l.jsxs)("section",{id:"products",children:[Object(l.jsx)("h1",{children:"Products"}),Object(l.jsx)(I,{types:c,selectedType:d,handleSelectedType:function(e){u(e),o({type:S,payload:{type:e}})}}),Object(l.jsx)("div",{id:"products-list",children:t.length>0?t.map((function(e){return Object(l.jsx)(A,{product:e},e.slug)})):Object(l.jsx)("span",{children:"No Products"})}),Object(l.jsx)(V,{})]})},W=(c(66),function(){var e=Object(s.c)((function(e){return e.cartReducer.items})),t=Object(s.b)(),c=function(e){return t(function(e){return function(t){t({type:M,payload:{id:e}})}}(e))};return Object(l.jsx)("aside",{children:Object(l.jsxs)("div",{className:"cart",children:[e.map((function(e,a){return Object(l.jsxs)("div",{id:"cart-container",children:[Object(l.jsxs)("div",{className:"cart-item",children:[Object(l.jsxs)("div",{className:"item-container",children:[Object(l.jsx)("span",{className:"item-name",children:e.name}),Object(l.jsx)(p,{price:e.price})]}),Object(l.jsxs)("div",{className:"quantity-container",children:[Object(l.jsx)("span",{onClick:function(){return c(e.id)},children:"-"}),Object(l.jsx)("span",{className:"item-quantity",children:e.quantity}),Object(l.jsx)("span",{onClick:function(){return c=e.id,a=e.name,n=e.price,t(q(c,a,n));var c,a,n},children:"+"})]})]}),Object(l.jsx)("hr",{})]})})),Object(l.jsx)("div",{className:"total-price flex",children:Object(l.jsx)(p,{price:e.reduce((function(e,t){return e+t.price*t.quantity}),0)})})]})})}),z=function(){var e=Object(s.c)((function(e){return e.cartReducer.items})),t=Object(s.c)((function(e){return e.productsReducer})).isLoading;return Object(l.jsx)(l.Fragment,{children:!t&&Object(l.jsxs)("div",{id:"container",children:[Object(l.jsx)(B,{}),Object(l.jsx)(J,{}),e&&e.length>0&&Object(l.jsx)(W,{})]})})},H=(c(67),function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("p",{children:"\xa92021 Market   \u2022  Privacy Policy"})})}),K=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){var t;e((t=1,function(){var e=Object(y.a)(g.a.mark((function e(c){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:a=e.sent,c(a?{type:T,payload:Object(b.a)(Object(b.a)({},a),{},{activePage:t})}:{type:k,payload:null});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(function(){var e=Object(y.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:c=e.sent,t(c?{type:E,payload:c}:{type:_,payload:null});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(z,{}),Object(l.jsx)(H,{})]})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))},X=c(7),Z=c(26),$=c(27),ee=c(6),te={items:[]},ce={products:[],types:[],initialProducts:[],totalPage:0,activePage:1,isLoading:!0,totalCount:0,tags:[],brands:[],price:[{name:"Price low to high",id:"low"},{name:"Price high to low",id:"high"},{name:"New to old",id:"new"},{name:"Old to new",id:"old"}],selectedType:"",selectedSortType:"",selectedBrands:[],selectedTags:[],filteredProducts:[],filteredBrands:[]},ae=function(e,t,c){return"low"===c?t.sort((function(e,t){return e.price-t.price})):"high"===c?t.sort((function(e,t){return t.price-e.price})):"old"===c?t.sort((function(e,t){return new Date(e.added)-new Date(t.added)})):t.sort((function(e,t){return new Date(t.added)-new Date(e.added)})),e.selectedBrands.length>0&&(t=ie(e,t,{payload:{data:e.selectedBrands,datatype:"brands"}}).filteredProds),e.selectedTags.length>0&&(t=se(e,t,{payload:{data:e.selectedTags,datatype:"tags"}}).filteredProds),t},ne=function(e,t){var c=Object(ee.a)(e);return 1===t?c.slice(0,o):c.slice(t*o-o,t*o)},re=function(e,t,c){var a=c.payload&&c.payload.type?c.payload.type:e.selectedType,n=t.filter((function(e){return e.itemType===a}));return e.selectedBrands.length>0&&(n=ie(e,n,c={payload:{data:e.selectedBrands,datatype:"brands"}}).filteredProds),e.selectedTags.length>0&&(n=se(e,n,c={payload:{data:e.selectedTags,datatype:"tags"}}).filteredProds),n=ae(e,n,e.selectedSortType)},ie=function(e,t,c){var a=[],n=c.payload.data;return a=n.length>0?t.filter((function(e){return n.includes(e.manufacturer)})):t,e.selectedTags.length>0&&(a=se(e,a,c={payload:{data:e.selectedTags,datatype:"tags"}}).filteredProds),{filteredProds:a,selectedData:n}},se=function(e,t,c){var a=[],n=c.payload.data;return n.length>0?(a=t.filter((function(e){return n.some((function(t){return e.tags.includes(t)}))})),a=e.selectedBrands.length>0?a.filter((function(t){return e.selectedBrands.includes(t.manufacturer)})):a):a=t,{filteredProds:a,selectedData:n}},de=Object(X.combineReducers)({cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,c=e.items.findIndex((function(e){return e.id===t.payload.id})),a=Object(ee.a)(e.items);switch(t.type){case G:return c>-1?a[c]=Object(b.a)(Object(b.a)({},a[c]),{},{quantity:a[c].quantity+1}):a.push({id:t.payload.id,name:t.payload.name,price:t.payload.price,quantity:1}),Object(b.a)(Object(b.a)({},e),{},{items:a});case M:return a[c]=Object(b.a)(Object(b.a)({},a[c]),{},{quantity:a[c].quantity-1}),Object(b.a)(Object(b.a)({},e),{},{items:a});default:return e}},productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(b.a)(Object(b.a)({},e),{},{brands:t.payload});case T:var c=Object(b.a)(Object(b.a)({},e),{},{initialProducts:t.payload.products,types:Object(ee.a)(new Set(t.payload.products.map((function(e){return e.itemType})))),price:e.price,totalCount:t.payload.products.length,totalPage:Math.ceil(t.payload.products.length/o),tags:Object(ee.a)(new Set(t.payload.products.map((function(e){return e.tags})).reduce((function(e,t){return e.concat.apply(e,Object(ee.a)(t))})))),selectedType:t.payload.products[0].itemType});return c=Object(b.a)(Object(b.a)({},e),{},{products:ne(t.payload.products,t.payload.activePage),totalPage:Math.ceil(t.payload.products.length/o),isLoading:!1,types:c.types,activePage:e.activePage,selectedType:c.selectedType,initialProducts:c.initialProducts,tags:c.tags});case k:return Object(b.a)(Object(b.a)({},e),{},{products:[]});case S:var a=re(e,e.initialProducts,t);return Object(b.a)(Object(b.a)({},e),{},{products:ne(a,e.activePage),filteredProducts:a,totalPage:Math.ceil(a.length/o),activePage:e.activePage});case N:var n=ne(e.filteredProducts,parseInt(t.payload.page));return Object(b.a)(Object(b.a)({},e),{},{products:n,activePage:t.payload.page});case C:var r=t.payload.sortType,i=ae(e,e.filteredProducts,r);return Object(b.a)(Object(b.a)({},e),{},{products:ne(i,e.activePage),selectedSortType:r,activePage:e.activePage,filteredProducts:i});case R:var s=ie(e,e.filteredProducts,t);return Object(b.a)(Object(b.a)({},e),{},{products:ne(s.filteredProds,e.activePage),totalPage:Math.ceil(s.filteredProds.length/o),selectedBrands:s.selectedData});case w:var d=se(e,e.filteredProducts,t);return Object(b.a)(Object(b.a)({},e),{},{products:ne(d.filteredProds,e.activePage),totalPage:Math.ceil(d.filteredProds.length/o),selectedTags:d.selectedData});default:return e}}}),ue=Object($.composeWithDevTools)(Object(X.applyMiddleware)(Z.a)),oe=Object(X.createStore)(de,ue);i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(s.a,{store:oe,children:Object(l.jsx)(K,{})})}),document.getElementById("root")),Q()}},[[68,1,2]]]);
//# sourceMappingURL=main.f512de66.chunk.js.map