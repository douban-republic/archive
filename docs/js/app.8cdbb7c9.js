(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3c6704ff"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/archive/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0304":function(t,e,n){},"094f":function(t,e,n){"use strict";var r=n("0304"),o=n.n(r);o.a},2395:function(t,e,n){},"6e9a":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("2395"),o=n.n(r);o.a},"9b5e":function(t,e,n){},a6f4:function(t,e,n){},b645:function(t,e,n){},c726:function(t,e,n){"use strict";var r=n("a6f4"),o=n.n(r);o.a},cd49:function(t,e,n){"use strict";n.r(e);var r,o,a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("帮助")])],1),n("router-view")],1)},s=[],c=(n("7c55"),n("2877")),l={},u=Object(c["a"])(l,i,s,!1,null,null,null),d=u.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Hello Douban"}}),n("Intro")],1)},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("备份用户列表")]),n("UserList")],1)},_=[],b=n("9ab4"),m=n("60a3"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.users,(function(e){return n("li",[n("router-link",{attrs:{to:"/people/"+e.id}},[t._v(" "+t._s(e.name)+" "),n("small",[t._v("( "+t._s(e.id)+" )")])])],1)})),0)},k=[],j=[{id:"ahbei",name:"阿北"},{id:"lazurey",name:"一个无聊的人"}],O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.users=j,e}return Object(b["d"])(e,t),e=Object(b["c"])([m["a"]],e),e}(m["c"]),y=O,P=y,C=(n("f762"),Object(c["a"])(P,g,k,!1,null,"05fcb03b",null)),w=C.exports,$=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(b["d"])(e,t),Object(b["c"])([Object(m["b"])()],e.prototype,"msg",void 0),e=Object(b["c"])([Object(m["a"])({components:{UserList:w}})],e),e}(m["c"]),E=$,x=E,I=Object(c["a"])(x,h,_,!1,null,null,null),L=I.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("项目简介")]),n("p",[t._v("该项目存在仅为了备份豆瓣用户在豆瓣公开标记的书影音条目。")]),n("p",[t._v("项目依赖于豆瓣 API v2 及 zce 同学架设的 API 代理，有请求数量限制，请谨慎使用。")]),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/douban-republic/archive",target:"_blank"}},[t._v("仓库地址")])]),n("li",[n("a",{attrs:{href:"https://douban-api-docs.zce.me/",target:"_blank"}},[t._v("豆瓣 API 代理")])])])])}],A={name:"Intro"},S=A,z=(n("debe"),Object(c["a"])(S,B,U,!1,null,"d336a890",null)),D=z.exports,T={name:"Home",components:{HelloWorld:L,Intro:D}},H=T,M=Object(c["a"])(H,p,v,!1,null,null,null),F=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" "+t._s(t.user.name)+" "),n("small",[t._v("(ID: "+t._s(t.user.id)+")")])]),t.userCollections.books.length?n("div",[n("h2",[t._v("Ta 标记过的书 "),n("small",[t._v("("+t._s(t.userCollections.books.length)+")")])]),n("BookList",{attrs:{collections:t.userCollections.books}})],1):n("div",{staticClass:"nothing"},[n("p",[t._v("这个人什么都没有留下")])]),t.isProd?t._e():n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/people/"+t.$route.params.id+"/backup"}},[t._v(" > 重新备份")])],1)])},J=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"book-list"},t._l(t.collections,(function(e){return n("li",{staticClass:"collection-item"},[n("div",[n("a",{attrs:{target:"_blank",href:e.book.alt}},[n("span",{staticClass:"title"},[t._v(t._s(e.book.title))])]),e.rating?n("span",[n("ui-rating",{attrs:{rate:parseInt(e.rating.value,10)}})],1):t._e(),n("span",{staticClass:"meta"},[t._v("/ "+t._s(e.updated))])]),e.comment?n("div",{staticClass:"comment"},[t._v(t._s(e.comment))]):t._e()])})),0)},W=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"rating"},t._l(t.rate,(function(e){return n("span",{key:e},[t._v("⭐️")])})),0)},G=[],K={name:"UiRating",props:["rate"]},Q=K,V=(n("ec47"),Object(c["a"])(Q,N,G,!1,null,"78e61d30",null)),X=V.exports,Y=a["a"].extend({props:["collections"],components:{UiRating:X}}),Z=Y,tt=Z,et=(n("c726"),Object(c["a"])(tt,q,W,!1,null,"2dd625c8",null)),nt=et.exports,rt=n("2f62"),ot="fetch_user_book_collections",at="set_user_book_collections",it=n("bc3a"),st=n.n(it),ct={fetchUserBookCollections:function(t){return st.a.get("/archive/user."+t+".book.collect.json").then((function(t){return t.data})).catch((function(){return[]}))}},lt={},ut=Object(b["a"])({},lt),dt=(r={},r[ot]=function(t,e){return Object(b["b"])(this,void 0,void 0,(function(){var n,r;return Object(b["e"])(this,(function(o){switch(o.label){case 0:return[4,ct.fetchUserBookCollections(e)];case 1:return n=o.sent(),r={id:e,collections:n},t.commit(at,r),[2,r]}}))}))},r),ft=(o={},o[at]=function(t,e){var n=e.id,r=e.collections;t[n]||(t[n]={}),t[n].books=r},o),pt={getCollectionsByUserId:function(t){return function(e){return t[e]}}},vt={state:ut,actions:dt,mutations:ft,getters:pt};a["a"].use(rt["a"]);var ht,_t=new rt["a"].Store({modules:{collection:vt}}),bt={name:"People",data(){return{isProd:!0}},components:{BookList:nt},beforeRouteEnter(t,e,n){_t.getters.getCollectionsByUserId(t.params.id)?n():_t.dispatch(ot,t.params.id).then(n)},computed:{user(){return j.find(t=>t.id===this.$route.params.id)},userCollections(){return _t.getters.getCollectionsByUserId(this.$route.params.id)}}},mt=bt,gt=(n("094f"),Object(c["a"])(mt,R,J,!1,null,"39d0e28e",null)),kt=gt.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/people/"+t.$route.params.id}},[t._v("返回")]),t.isProd?n("div",[n("h2",[t._v("备份功能在生产环境不可用")]),t._m(0),n("a",{attrs:{href:"https://github.com/douban-republic/archive",target:"_blank",rel:"nofollow"}},[t._v("仓库地址")])]):n("div",[n("h1",[t._v("备份用户数据")]),t._m(1),t._m(2),n("FetchBookData",{attrs:{id:t.$route.params.id}})],1)],1)},Ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("为了安全及 API 代理流量控制起见， 请参考 "),n("code",[t._v("README")]),t._v(" 在本地备份，提交到自己备份仓库或者提交 pull request 到本仓库。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("请不要频繁使用该功能。 整个备份功能建立在 "),n("a",{attrs:{href:"https://github.com/zce",target:"_blank"}},[t._v("zce")]),t._v(" 同学架设的豆瓣API代理服务上，API请求数有限制。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("豆瓣API代理详情请见 "),n("a",{attrs:{href:"https://douban.uieee.com/",target:"_blank"}},[t._v("zce的网站。")])])}],yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.done||t.isLoading?t._e():n("ui-button",{attrs:{disabled:t.isLoading},on:{click:t.fetch}},[t._v("获取数据")]),t.isLoading?n("div",[n("p",[t._v("数据获取中……")]),n("p",[t._v("正在获取第 "+t._s(t.currentPage)+" 页。")])]):t._e(),t.done?n("div",[n("h4",[t._v("共获取已读数据： "+t._s(t.collections.length)+" 条")]),n("ui-button",{on:{click:t.save}},[t._v("保存文件")]),t._m(0)],1):t._e()],1)},Pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("文件下载后请保存在 "),n("code",[t._v("./public")]),t._v(" 以及 "),n("code",[t._v("./docs")]),t._v(" 各一份，请勿重命名该文件。")])}],Ct="https://douban.uieee.com/v2",wt=function(t,e,n,r){return st.a.get(Ct+"/book/user/"+t+"/collections?start="+e*n+"&count="+n+"&status="+r).then((function(t){return t.data})).catch((function(t){return console.error(t),{errorCode:"something wrong"}}))};(function(t){t["reading"]="reading",t["read"]="read",t["wish"]="wish"})(ht||(ht={}));var $t=n("21a6"),Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"ui-button",attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.$slots.default?n("span",[t._t("default")],2):t._e()])},xt=[],It={name:"UiButton",props:{disabled:Boolean},methods:{handleClick(t){this.$emit("click",t)}}},Lt=It,Bt=(n("d9d7"),Object(c["a"])(Lt,Et,xt,!1,null,"14a8c92f",null)),Ut=Bt.exports,At=20,St=100,zt=a["a"].extend({props:["id"],components:{UiButton:Ut},data:function(){return{isLoading:!1,done:!1,currentPage:0,total:-1,collections:[]}},methods:{save:function(){if(this.collections.length>0){var t=new File([JSON.stringify(this.collections)],"user."+this.id+".book.collect.json",{type:"application/json;charset=utf-8"});Object($t["saveAs"])(t)}else alert("你没有可保存的数据！")},fetch:function(){return Object(b["b"])(this,void 0,void 0,(function(){var t,e,n,r,o,a;return Object(b["e"])(this,(function(i){switch(i.label){case 0:console.log(this.id,"isLoading = ",this.isLoading),t=!1,this.isLoading=!0,i.label=1;case 1:return!t&&this.currentPage<At?[4,wt(this.id,this.currentPage,St,ht.read)]:[3,3];case 2:return e=i.sent(),n=e.start,r=e.count,o=e.total,a=e.collections,t=n+r>=o,this.currentPage++,-1===this.total&&(this.total=o),this.collections=this.collections.concat(a),[3,1];case 3:return this.isLoading=!1,this.done=!0,[2]}}))}))}}}),Dt=zt,Tt=Dt,Ht=Object(c["a"])(Tt,yt,Pt,!1,null,"2a74b855",null),Mt=Ht.exports,Ft={name:"UserDataFetching",components:{FetchBookData:Mt},data(){return{isProd:!0}}},Rt=Ft,Jt=Object(c["a"])(Rt,jt,Ot,!1,null,"50d5020d",null),qt=Jt.exports;a["a"].use(f["a"]);var Wt=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/people/:id",name:"个人存档",component:kt},{path:"/people/:id/backup",name:"备份用户数据",component:qt}],Nt=new f["a"]({mode:"history",base:"/archive/",routes:Wt}),Gt=Nt;a["a"].config.productionTip=!1,new a["a"]({router:Gt,store:_t,render:function(t){return t(d)}}).$mount("#app")},d9d7:function(t,e,n){"use strict";var r=n("b645"),o=n.n(r);o.a},debe:function(t,e,n){"use strict";var r=n("6e9a"),o=n.n(r);o.a},e32e:function(t,e,n){},ec47:function(t,e,n){"use strict";var r=n("9b5e"),o=n.n(r);o.a},f762:function(t,e,n){"use strict";var r=n("e32e"),o=n.n(r);o.a}});
//# sourceMappingURL=app.8cdbb7c9.js.map