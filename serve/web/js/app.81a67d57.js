(function(){"use strict";var t={74:function(t,s,i){var e=i(144),a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=i(1),l={},c=(0,r.Z)(l,a,n,!1,null,null,null),o=c.exports,d=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card bg-white p-3 mt-3"},[s("div",{staticClass:"card-header d-flex ai-cente",class:[{"border-bottom":!t.plain},{"pb-4":!t.plain}]},[s("i",{staticClass:"iconfont",class:`icon-${t.icon}`}),s("div",{staticClass:"fs-xl flex-1 px-2"},[t._v(t._s(t.title))]),s("i",{directives:[{name:"show",rawName:"v-show",value:!t.plain,expression:"!plain"}],staticClass:"iconfont icon-menu"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])},p=[],u={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},v=u,f=(0,r.Z)(v,d,p,!1,null,null,null),m=f.exports,_=function(){var t=this,s=t._self._c;return s("div",[s("m-card",{attrs:{title:t.title,icon:t.icon}},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(i,e){return s("div",{key:e,staticClass:"nav-item",class:{active:t.active===e},on:{click:function(s){return t.$refs.list.swiper.slideTo(e)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(i.name))])])})),0),s("div",{staticClass:"pt-2"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":()=>{t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(i,e){return s("swiper-slide",{key:e},[t._t("items",null,{category:i})],2)})),1)],1)])],1)},C=[],h={data(){return{active:0}},props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}}},g=h,x=(0,r.Z)(g,_,C,!1,null,null,null),b=x.exports,w=i(345),y=function(){var t=this,s=t._self._c;return s("div",[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav d-flex jc-around nav-inverse"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},k=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[s("img",{staticClass:"m-1",attrs:{src:i(274),alt:"",height:"30"}}),s("div",{staticClass:"px-2 flex-1"},[s("div",{staticClass:"text-white"},[t._v("王者荣耀")]),s("div",{staticClass:"fs-xxs text-grey-1"},[t._v("团队成就更多")])]),s("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("点击下载")])])}],S={},j=S,Z=(0,r.Z)(j,y,k,!1,null,null,null),$=Z.exports,O=function(){var t=this,s=t._self._c;return s("div",[s("swiper",{attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:i(682),alt:""}})]),s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:i(967),alt:""}})]),s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:i(14),alt:""}})]),s("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1),s("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-dark-1"},[s("div",{staticClass:"d-flex flex-wrap"},t._l(10,(function(i){return s("div",{key:i,staticClass:"nav-item mb-3"},[s("i",{staticClass:"sprite sprite-news"}),s("div",{staticClass:"py-2"},[t._v("爆料站")])])})),0),t._m(0)]),s("m-card-list",{attrs:{title:"新闻资讯",icon:"cc-menu-circle",categories:t.newCats},scopedSlots:t._u([{key:"items",fn:function({category:i}){return t._l(i.newsList,(function(i,e){return s("router-link",{key:e,staticClass:"py-2 fs-xs d-flex",attrs:{tag:"div",to:`/article/${i._id}`}},[s("span",{staticClass:"text-info"},[t._v("["+t._s(i.categoryName)+"]")]),s("span",{staticClass:"px-2"},[t._v("|")]),s("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(i.title))]),s("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("shortDate")(i.createdAt)))])])}))}}])}),s("m-card-list",{attrs:{title:"英雄列表",icon:"card-hero",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function({category:i}){return[s("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(i.heroesList,(function(i,e){return s("router-link",{key:e,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:`heroes/${i._id}`}},[s("img",{staticClass:"w-100",attrs:{src:i.avatar}}),s("div",[t._v(t._s(i.name))])])})),1)]}}])})],1)},P=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg-light py-2"},[s("i",{staticClass:"sprite sprite-arrow mr-1"}),s("span",[t._v("收起")])])}],T=i(484),q=i.n(T),I={filters:{shortDate(t){return q()(t).format("MM / DD")}},data(){return{swiperOption:{pagination:{el:".pagination-home"}},newCats:[],heroCats:[]}},methods:{async fetchNewsCats(){const t=await this.$http.get("news/list");this.newCats=t.data},async fetchHeroCats(){const t=await this.$http.get("heroes/list");this.heroCats=t.data}},created(){this.fetchNewsCats(),this.fetchHeroCats()}},L=I,N=(0,r.Z)(L,O,P,!1,null,null,null),A=N.exports,D=function(){var t=this,s=t._self._c;return this.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 mx-2 border-bottom"},[s("i",{staticClass:"iconfont icon-fenxiang pr-2 icon-size text-blue"}),s("div",{staticClass:"flex-1 text-blue"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey"},[t._v("2023-07-05")])]),s("div",{staticClass:"mx-4 article-body",domProps:{innerHTML:t._s(t.model.body)}}),t._m(0),t._l(t.model.related,(function(i){return s("router-link",{key:i._id,staticClass:"py-2 mx-4",attrs:{tag:"div",to:`articles/${t.id}`}},[t._v(t._s(i.title))])}))],2):t._e()},H=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"px-3 border-top pt-4 pb-3"},[s("div",{staticClass:"de-flex ai-center"},[s("i",{staticClass:"iconfont icon-fenxiang"}),s("strong",{staticClass:"text-blue fs-lg ml-1"},[t._v("相关资讯")])])])}],E={data(){return{model:null}},created(){this.fetch()},watch:{id:"fetch"},props:{id:{required:!0}},methods:{async fetch(){const t=await this.$http.get(`articles/${this.id}`);this.model=t.data}}},M=E,R=(0,r.Z)(M,D,H,!1,null,null,null),U=R.exports,B=function(){var t=this,s=t._self._c;return t.model?s("div",{staticClass:"hero-page"},[s("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[s("img",{staticClass:"m-1",attrs:{src:i(274),alt:"",height:"30"}}),t._m(0),s("router-link",{staticClass:"text-white",attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),s("div",{staticClass:"top",style:{"background-image":`url(${t.model.banner})`}},[s("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[s("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),s("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),s("div",{staticClass:"fs-xs"},[t._v(" "+t._s(t.model.categories.map((t=>t.name)).join("/"))+" ")]),s("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?s("div",{staticClass:"scores d-flex ai-center"},[s("span",[t._v("难度")]),s("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),s("span",[t._v("技能")]),s("span",{staticClass:"badge bg-info"},[t._v(t._s(t.model.scores.skills))]),s("span",[t._v("攻击")]),s("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),s("span",[t._v("生存")]),s("span",{staticClass:"badge bg-green"},[t._v(t._s(t.model.scores.survive))])]):t._e(),s("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"span"}},[t._v(" 皮肤: 2 >")])],1)])]),t._m(1),s("swiper",[s("swiper-slide",[s("div",{staticClass:"bg-white border-bottom p-3"},[s("div",{staticClass:"d-flex flex-around"},[s("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[s("i",{staticClass:"iconfont icon-news"}),t._v(" 英雄介绍视频 ")]),s("router-link",{staticClass:"btn btn-lg ml-2 flex-1",attrs:{tag:"button",to:"/"}},[s("i",{staticClass:"iconfont icon-news"}),t._v(" 一图识英雄 ")])],1),s("div",{staticClass:"skills bg-white mt-4"},[s("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(i,e){return s("img",{key:i.name,staticClass:"icon",class:{active:t.currentSkillsIndex===e},attrs:{src:i.icon},on:{click:function(s){t.currentSkillsIndex=e}}})})),0)]),s("div",{staticClass:"d-flex pt-4 pb-2 ai-center"},[s("h3",{staticStyle:{margin:"0"}},[t._v(t._s(t.currentSkills.name))]),s("span",{staticClass:"text-grey-1 pl-3 fs-xxs"},[t._v(t._s(`(冷取值 :${t.currentSkills.delay} 消耗 :${t.currentSkills.cost})`))])]),s("div",[s("p",{staticClass:"mt-3 mb-0"},[t._v(t._s(t.currentSkills.description))])])]),s("m-card",{attrs:{plain:"",icon:"news",title:"出装推荐"}},[s("div",{staticClass:"fs-lg"},[t._v("顺风出装")]),s("div",{staticClass:"d-flex jc-around border-bottom"},t._l(t.model.items1,(function(i,e){return s("div",{key:e},[s("img",{staticClass:"heroesicon mt-2 mb-1",attrs:{src:i.icon}}),s("div",{staticClass:"fs-xs pb-1"},[t._v(t._s(i.name))])])})),0),s("div",{staticClass:"fs-lg pt-3"},[t._v("逆风出装")]),s("div",{staticClass:"d-flex jc-around"},t._l(t.model.items2,(function(i,e){return s("div",{key:e},[s("img",{staticClass:"heroesicon mt-2",attrs:{src:i.icon}}),s("div",{staticClass:"fs-xs pb-1"},[t._v(t._s(i.name))])])})),0)]),s("m-card",{attrs:{plain:"",icon:"news",title:"团战思路"}},[s("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),s("m-card",{attrs:{plain:"",icon:"news",title:"使用技巧"}},[s("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),s("m-card",{attrs:{plain:"",icon:"news",title:"对抗技巧"}},[s("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),s("m-card",{attrs:{plain:"",icon:"news",title:"英雄关系"}},[s("div",{staticClass:"fs-lg"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(i){return s("div",{key:i.name,staticClass:"pt-3 d-flex"},[s("img",{staticStyle:{height:"50px",width:"50px"},attrs:{src:i.hero.avatar}}),s("div",{staticClass:"fs-xs ml-3"},[t._v(t._s(i.description))])])})),s("div",{staticClass:"border-bottom mt-3"}),s("div",{staticClass:"mt-2"},[s("div",{staticClass:"fs-lg"},[t._v("被克关系")]),t._l(t.model.battleHeros,(function(i){return s("div",{key:i.name,staticClass:"pt-3 d-flex"},[s("img",{staticStyle:{height:"50px",width:"50px"},attrs:{src:i.hero.avatar}}),s("div",{staticClass:"fs-xs ml-3"},[t._v(t._s(i.description))])])})),s("div",{staticClass:"border-bottom mt-3"})],2)],2)],1),s("swiper-slide")],1)],1):t._e()},V=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"px-2 flex-1 text-white"},[s("span",{staticClass:"mr-3"},[t._v("王者荣耀")]),s("span",[t._v("攻略站")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"px-3 bg-white"},[s("div",{staticClass:"nav pt-3 pb-2 d-flex jc-around border-bottom"},[s("div",{staticClass:"nav-item active"},[t._v("英雄初识")]),s("div",{staticClass:"nav-item"},[t._v("进阶攻略")])])])}],z={props:{id:{required:!0}},data(){return{model:null,currentSkillsIndex:0}},computed:{currentSkills(){return this.model.skills[this.currentSkillsIndex]}},methods:{async fetch(){const t=await this.$http(`/heroes/${this.id}`);this.model=t.data,console.log(this.model)}},created(){this.fetch()}},F=z,G=(0,r.Z)(F,B,V,!1,null,null,null),J=G.exports;e.ZP.use(w.ZP);const K=[{path:"/",name:"main",component:$,children:[{path:"/",name:"index",component:A},{path:"/article/:id",name:"article",component:U,props:!0}]},{path:"/heroes/:id",name:"hero",component:J,props:!0}],Q=new w.ZP({routes:K});var W=Q,X=i(697),Y=i.n(X),tt=i(154);e.ZP.component("m-card",m),e.ZP.component("m-card-list",b),e.ZP.use(Y()),e.ZP.prototype.$http=tt.Z.create({baseURL:{NODE_ENV:"production",BASE_URL:"/"}.Vue_App_API_URL||"/web/api"}),e.ZP.config.productionTip=!1,new e.ZP({router:W,render:t=>t(o)}).$mount("#app")},682:function(t,s,i){t.exports=i.p+"img/index1.0c820d39.jpeg"},967:function(t,s,i){t.exports=i.p+"img/index2.4636859f.jpeg"},14:function(t,s,i){t.exports=i.p+"img/index3.a70f5609.jpeg"},274:function(t,s,i){t.exports=i.p+"img/logo.d9db2f82.png"}},s={};function i(e){var a=s[e];if(void 0!==a)return a.exports;var n=s[e]={exports:{}};return t[e].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(s,e,a,n){if(!e){var r=1/0;for(d=0;d<t.length;d++){e=t[d][0],a=t[d][1],n=t[d][2];for(var l=!0,c=0;c<e.length;c++)(!1&n||r>=n)&&Object.keys(i.O).every((function(t){return i.O[t](e[c])}))?e.splice(c--,1):(l=!1,n<r&&(r=n));if(l){t.splice(d--,1);var o=a();void 0!==o&&(s=o)}}return s}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[e,a,n]}}(),function(){i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,{a:s}),s}}(),function(){i.d=function(t,s){for(var e in s)i.o(s,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(s){return 0===t[s]};var s=function(s,e){var a,n,r=e[0],l=e[1],c=e[2],o=0;if(r.some((function(s){return 0!==t[s]}))){for(a in l)i.o(l,a)&&(i.m[a]=l[a]);if(c)var d=c(i)}for(s&&s(e);o<r.length;o++)n=r[o],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},e=self["webpackChunkweb"]=self["webpackChunkweb"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(74)}));e=i.O(e)})();
//# sourceMappingURL=app.81a67d57.js.map