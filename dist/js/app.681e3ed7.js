(function(e){function t(t){for(var n,l,c=t[0],u=t[1],i=t[2],s=0,d=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);v&&v(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var u=a[l];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function l(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c4e4d8bf","chunk-2d0df7a6":"e192eaf2","chunk-2d0f04ad":"8f085cd2","chunk-2d2268fe":"0455f95f"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}r[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-router/dist/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var v=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"31c6":function(e,t,a){"use strict";a("81a5")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={class:"navbar navbar-expand-lg navbar-light bg-light"},o={class:"container-fluid"},l=Object(n["e"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),c=Object(n["e"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["e"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},i={class:"navbar-nav"},s={class:"nav-item"},v=Object(n["g"])("Home"),d={class:"nav-item"},b=Object(n["g"])("About"),p={class:"nav-item"},f=Object(n["g"])("新增頁面"),h={class:"container"};function g(e,t){var a=Object(n["w"])("router-link"),g=Object(n["w"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("nav",r,[Object(n["e"])("div",o,[l,c,Object(n["e"])("div",u,[Object(n["e"])("ul",i,[Object(n["e"])("li",s,[Object(n["h"])(a,{to:"/",class:"nav-link"},{default:Object(n["B"])((function(){return[v]})),_:1})]),Object(n["e"])("li",d,[Object(n["h"])(a,{to:"/about",class:"nav-link"},{default:Object(n["B"])((function(){return[b]})),_:1})]),Object(n["e"])("li",p,[Object(n["h"])(a,{to:{name:"新增頁面"},class:"nav-link"},{default:Object(n["B"])((function(){return[f]})),_:1})])])])])]),Object(n["e"])("div",h,[Object(n["h"])(g)])],64)}a("31c6");const j={};j.render=g;var m=j,O=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),k=a("cf05"),y=a.n(k),w={class:"home"},_=Object(n["e"])("img",{alt:"Vue logo",src:y.a},null,-1);function x(e,t,a,r,o,l){var c=Object(n["w"])("HelloWorld");return Object(n["q"])(),Object(n["d"])("div",w,[_,Object(n["h"])(c,{msg:"Welcome to Your Vue.js App"})])}Object(n["t"])("data-v-5141a303");var P={class:"hello"},C=Object(n["f"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);function H(e,t,a,r,o,l){return Object(n["q"])(),Object(n["d"])("div",P,[Object(n["e"])("h1",null,Object(n["y"])(a.msg),1),C])}Object(n["r"])();var S={name:"HelloWorld",props:{msg:String}};a("65e4");S.render=H,S.__scopeId="data-v-5141a303";var T=S,E={name:"Home",components:{HelloWorld:T}};E.render=x;var N=E,q=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/newpage",name:"新增頁面",component:function(){return a.e("chunk-2d0f04ad").then(a.bind(null,"9c6c"))},children:[{path:"a",component:function(){return a.e("chunk-2d0df7a6").then(a.bind(null,"89a0"))}},{path:"b",component:function(){return a.e("chunk-2d2268fe").then(a.bind(null,"e8d9"))}}]}],A=Object(O["a"])({history:Object(O["b"])(),routes:q}),L=A;Object(n["c"])(m).use(L).mount("#app")},"5e10":function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},"81a5":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.681e3ed7.js.map