(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3c6704ff"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/archive/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0304":function(t,e,n){},"094f":function(t,e,n){"use strict";var r=n("0304"),o=n.n(r);o.a},2395:function(t,e,n){},"286d":function(t,e,n){"use strict";var r=n("a9c2"),o=n.n(r);o.a},6903:function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("2395"),o=n.n(r);o.a},a851:function(t,e,n){"use strict";var r=n("c240"),o=n.n(r);o.a},a9c2:function(t,e,n){},ad63:function(t,e,n){"use strict";var r=n("6903"),o=n.n(r);o.a},b645:function(t,e,n){},c240:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r,o,a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("帮助")])],1),n("router-view")],1)},s=[],c=(n("7c55"),n("2877")),u={},l=Object(c["a"])(u,i,s,!1,null,null,null),d=l.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Hello Douban"}}),n("Intro"),n("Faq")],1)},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("已备份用户列表")]),n("UserList")],1)},_=[],b=n("9ab4"),m=n("60a3"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.users,(function(e){return n("li",[n("router-link",{attrs:{to:"/people/"+e.id}},[t._v(" "+t._s(e.name)+" "),n("small",[t._v("( "+t._s(e.id)+" )")])])],1)})),0)},j=[],k=[{id:"ahbei",name:"阿北"},{id:"lazurey",name:"一个无聊的人"},{id:"moondancer",name:"撕扯的微笑"}],O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.users=k,e}return Object(b["d"])(e,t),e=Object(b["c"])([m["a"]],e),e}(m["c"]),y=O,w=y,P=(n("f762"),Object(c["a"])(w,g,j,!1,null,"05fcb03b",null)),C=P.exports,E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(b["d"])(e,t),Object(b["c"])([Object(m["b"])()],e.prototype,"msg",void 0),e=Object(b["c"])([Object(m["a"])({components:{UserList:C}})],e),e}(m["c"]),$=E,x=$,I=Object(c["a"])(x,h,_,!1,null,null,null),L=I.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("这是什么？")]),n("p",[t._v("该项目存在仅为了备份豆瓣用户在豆瓣公开标记的图书条目。")]),n("p",[t._v("项目依赖于豆瓣 API v2 及 zce 同学架设的 API 代理，有请求数量限制，请谨慎使用。")]),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/douban-republic/archive",target:"_blank"}},[t._v("仓库地址")])])])])}],U={name:"Intro"},q=U,D=(n("ad63"),Object(c["a"])(q,A,B,!1,null,"97d4e490",null)),F=D.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("常见问题")]),n("ul",t._l(t.faqs,(function(e){return n("li",[n("h4",[t._v(t._s(e.question))]),n("p",[t._v(t._s(e.answer))])])})),0)])},M=[],T=[{question:"为什么只能备份已读？",answer:"因为豆瓣 API v2 只支持批量获取用户标记的图书数据，电影和音乐暂时没找到 API。暂不支持在读和想读，因为懒。"},{question:"如何备份？",answer:"请参照代码仓库的 README。"},{question:"还有别的问题吗？",answer:"请到代码仓库提 issue，多谢。"}],z={name:"Faq",data(){return{faqs:T}}},H=z,R=Object(c["a"])(H,S,M,!1,null,"c3e45306",null),J=R.exports,W={name:"Home",components:{Faq:J,HelloWorld:L,Intro:F}},N=W,G=Object(c["a"])(N,p,v,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" "+t._s(t.user.name)+" "),n("small",[t._v("(ID: "+t._s(t.user.id)+")")])]),t.userCollections.books.length?n("div",[n("h2",[t._v("Ta 标记过的书 "),n("small",[t._v("("+t._s(t.userCollections.books.length)+")")])]),n("BookList",{attrs:{collections:t.userCollections.books}})],1):n("div",{staticClass:"nothing"},[n("p",[t._v("这个人什么都没有留下")])]),t.isProd?t._e():n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/people/"+t.$route.params.id+"/backup"}},[t._v(" > 重新备份")])],1)])},V=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"book-list"},t._l(t.collections,(function(e){return n("li",{staticClass:"collection-item"},[n("div",[n("a",{attrs:{target:"_blank",href:e.url}},[n("span",{staticClass:"title"},[t._v(t._s(e.book_title))])]),e.rating?n("span",[n("ui-rating",{attrs:{rate:e.rating}})],1):t._e(),n("span",{staticClass:"meta"},[t._v("/ "+t._s(e.updated))])]),e.comment||e.tags&&e.tags.length?n("div",{staticClass:"comment"},[n("span",[t._v(t._s(e.comment))]),e.tags&&e.tags.length?n("div",[t._v(" ("),t._l(e.tags,(function(e){return n("span",[t._v("/ "+t._s(e)+" /")])})),t._v(") ")],2):t._e()]):t._e()])})),0)},Y=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"rating"},t._l(t.rate,(function(e){return n("span",[t._v("⭐️")])})),0)},tt=[],et={name:"UiRating",props:["rate"]},nt=et,rt=(n("286d"),Object(c["a"])(nt,Z,tt,!1,null,"28b29b04",null)),ot=rt.exports,at=a["a"].extend({props:["collections"],components:{UiRating:ot}}),it=at,st=it,ct=(n("a851"),Object(c["a"])(st,X,Y,!1,null,"1e9114b6",null)),ut=ct.exports,lt=n("2f62"),dt="fetch_user_book_collections",ft="set_user_book_collections",pt=n("bc3a"),vt=n.n(pt),ht={fetchUserBookCollections:function(t){return vt.a.get("/archive/user."+t+".book.collect.json").then((function(t){return t.data})).catch((function(){return[]}))}},_t={},bt=Object(b["a"])({},_t),mt=(r={},r[dt]=function(t,e){return Object(b["b"])(this,void 0,void 0,(function(){var n,r;return Object(b["e"])(this,(function(o){switch(o.label){case 0:return[4,ht.fetchUserBookCollections(e)];case 1:return n=o.sent(),r={id:e,collections:n},t.commit(ft,r),[2,r]}}))}))},r),gt=(o={},o[ft]=function(t,e){var n=e.id,r=e.collections;t[n]||(t[n]={}),t[n].books=r},o),jt={getCollectionsByUserId:function(t){return function(e){return t[e]}}},kt={state:bt,actions:mt,mutations:gt,getters:jt};a["a"].use(lt["a"]);var Ot,yt=new lt["a"].Store({modules:{collection:kt}}),wt={name:"People",data(){return{isProd:!0}},components:{BookList:ut},beforeRouteEnter(t,e,n){yt.getters.getCollectionsByUserId(t.params.id)?n():yt.dispatch(dt,t.params.id).then(n)},computed:{user(){return k.find(t=>t.id===this.$route.params.id)},userCollections(){return yt.getters.getCollectionsByUserId(this.$route.params.id)}}},Pt=wt,Ct=(n("094f"),Object(c["a"])(Pt,Q,V,!1,null,"39d0e28e",null)),Et=Ct.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/people/"+t.$route.params.id}},[t._v("返回")]),t.isProd?n("div",[n("h2",[t._v("备份功能在生产环境不可用")]),t._m(0),n("a",{attrs:{href:"https://github.com/douban-republic/archive",target:"_blank",rel:"nofollow"}},[t._v("仓库地址")])]):n("div",[n("h1",[t._v("备份用户数据")]),t._m(1),t._m(2),n("FetchBookData",{attrs:{id:t.$route.params.id}})],1)],1)},xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("为了安全及 API 代理流量控制起见， 请参考 "),n("code",[t._v("README")]),t._v(" 在本地备份，提交到自己备份仓库或者提交 pull request 到本仓库。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("请不要频繁使用该功能。 整个备份功能建立在 "),n("a",{attrs:{href:"https://github.com/zce",target:"_blank"}},[t._v("zce")]),t._v(" 同学架设的豆瓣API代理服务上，API请求数有限制。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("豆瓣API代理详情请见 "),n("a",{attrs:{href:"https://douban.uieee.com/",target:"_blank"}},[t._v("zce的网站。")])])}],It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.done||t.isLoading?t._e():n("ui-button",{attrs:{disabled:t.isLoading},on:{click:t.fetch}},[t._v("获取数据")]),t.isLoading?n("div",[n("p",[t._v("数据获取中……")]),n("p",[t._v("正在获取第 "+t._s(t.currentPage)+" 页。")])]):t._e(),t.done?n("div",[n("h4",[t._v("共获取已读数据： "+t._s(t.collections.length)+" 条")]),n("ui-button",{on:{click:t.save}},[t._v("保存文件")]),t._m(0)],1):t._e()],1)},Lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("文件下载后请保存在 "),n("code",[t._v("./public")]),t._v(" 以及 "),n("code",[t._v("./docs")]),t._v(" 各一份，请勿重命名该文件。")])}],At="https://douban.uieee.com/v2",Bt=n("2ef0"),Ut=function(t){return Object(b["a"])(Object(b["a"])({},Object(Bt["omit"])(t,["book","rating","status","user_id"])),{rating:parseInt(Object(Bt["get"])(t,"rating.value",0),10),book_title:t.book.title,url:t.book.alt})},qt=function(t,e,n,r,o){return At+"/"+t+"/user/"+e+"/collections?start="+n*r+"&count="+r+"&status="+o},Dt=function(t,e,n,r){return vt.a.get(qt("book",t,e,n,r)).then((function(t){return t.data})).catch((function(t){return{errorCode:"something wrong"}}))};(function(t){t["reading"]="reading",t["read"]="read",t["wish"]="wish"})(Ot||(Ot={}));var Ft=n("21a6"),St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"ui-button",attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.$slots.default?n("span",[t._t("default")],2):t._e()])},Mt=[],Tt={name:"UiButton",props:{disabled:Boolean},methods:{handleClick(t){this.$emit("click",t)}}},zt=Tt,Ht=(n("d9d7"),Object(c["a"])(zt,St,Mt,!1,null,"14a8c92f",null)),Rt=Ht.exports,Jt=20,Wt=100,Nt=a["a"].extend({props:["id"],components:{UiButton:Rt},data:function(){return{isLoading:!1,done:!1,currentPage:0,total:-1,collections:[]}},methods:{save:function(){if(this.collections.length>0){var t=new File([JSON.stringify(this.collections)],"user."+this.id+".book.collect.json",{type:"application/json;charset=utf-8"});Object(Ft["saveAs"])(t)}else alert("你没有可保存的数据！")},fetch:function(){return Object(b["b"])(this,void 0,void 0,(function(){var t,e,n,r,o,a;return Object(b["e"])(this,(function(i){switch(i.label){case 0:console.log(this.id,"isLoading = ",this.isLoading),t=!1,this.isLoading=!0,i.label=1;case 1:return!t&&this.currentPage<Jt?[4,Dt(this.id,this.currentPage,Wt,Ot.read)]:[3,3];case 2:return e=i.sent(),n=e.start,r=e.count,o=e.total,a=e.collections,t=n+r>=o,this.currentPage++,-1===this.total&&(this.total=o),this.collections=this.collections.concat(Object(Bt["map"])(a,Ut)),[3,1];case 3:return this.isLoading=!1,this.done=!0,[2]}}))}))}}}),Gt=Nt,Kt=Gt,Qt=Object(c["a"])(Kt,It,Lt,!1,null,"ae800150",null),Vt=Qt.exports,Xt={name:"UserDataFetching",components:{FetchBookData:Vt},data(){return{isProd:!0}}},Yt=Xt,Zt=Object(c["a"])(Yt,$t,xt,!1,null,"50d5020d",null),te=Zt.exports;a["a"].use(f["a"]);var ee=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/people/:id",name:"个人存档",component:Et},{path:"/people/:id/backup",name:"备份用户数据",component:te}],ne=new f["a"]({mode:"history",base:"/archive/",routes:ee}),re=ne;a["a"].config.productionTip=!1,new a["a"]({router:re,store:yt,render:function(t){return t(d)}}).$mount("#app")},d9d7:function(t,e,n){"use strict";var r=n("b645"),o=n.n(r);o.a},e32e:function(t,e,n){},f762:function(t,e,n){"use strict";var r=n("e32e"),o=n.n(r);o.a}});
//# sourceMappingURL=app.c5dc6e92.js.map