(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,n){"use strict";var r=n(146),o=n.n(r),c=(n(62),"production");console.log("env==============",c);var l={baseURL:"http://127.0.0.1:5000",timeout:5e3,responseType:"json",headers:{post:{"Content-Type":"application/json"}},withCredentials:!0},d=o.a.create(l);e.a=d},149:function(t,e,n){},176:function(t,e,n){"use strict";var r=n(149);n.n(r).a},180:function(t,e,n){"use strict";n.r(e);n(46);var r=n(7),o=n(63),c=n(42),l=n(145),d={name:"filmDetail",middleware:"authorization",components:{headerBar:o.a,pageFooter:c.a},head:function(){return{title:"nuxt-demo | "+this.film.title,meta:[{hid:"description",name:"description",content:this.film.content}]}},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route.params.id,t.next=3,l.a.get("/rest/film/detail/".concat(n));case 3:if(r=t.sent,data=r.data){t.next=7;break}return t.abrupt("return",e.error({statusCode:404,message:"Post not found"}));case 7:return t.abrupt("return",{film:data});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},f=(n(176),n(5)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"film-detail-container"},[n("header-bar"),t._v(" "),n("div",{staticClass:"film-detail-wrapper"},[n("h2",[t._v(t._s(t.film.title))]),t._v(" "),n("img",{attrs:{src:t.film.imgUrl,alt:t.film.title}}),t._v(" "),n("div",{staticClass:"content-wrap",domProps:{innerHTML:t._s(t.film.content)}})]),t._v(" "),n("page-footer")],1)},[],!1,null,"e4f6a082",null);e.default=component.exports}}]);