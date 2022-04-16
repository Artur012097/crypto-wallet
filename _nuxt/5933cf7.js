(window.webpackJsonp=window.webpackJsonp||[]).push([[103,29,39,40,52,57,58,89],{521:function(e,t,n){"use strict";n.r(t);n(30);var r=n(62),o=n(522),c={name:"SubscribesButton",components:{RcButton:r.default,RcPopover:o.default},props:{profileId:{type:Number,required:!0},text:{type:String,default:""}},computed:{buttonText:function(){return this.isSubscribed?"вы подписаны":"".concat(this.text?this.text:"подписаться")},isSubscribed:function(){return this.$isSubscribed(this.$store,this.profileId)},activePlan:function(){return this.$getActivePlan(this.$store,this.profileId)},activePlanTitle:function(){var e;return null===(e=this.activePlan)||void 0===e?void 0:e.title},isMyProfile:function(){var e,t,n;return(null!==(e=null===(t=this.$auth.user)||void 0===t?void 0:t.pid)&&void 0!==e?e:null===(n=this.$auth.user)||void 0===n?void 0:n.id)===this.profileId}},mounted:function(){var e=this;this.$nuxt.$once("subscribe",(function t(n){n===e._uid&&(console.log("Subscribe!",n),e.$emit("subscribe")),e.$nuxt.$once("subscribe",t)})),this.$nuxt.$once("unsubscribe",(function t(n){n===e._uid&&(console.log("Unsubscribe!",n),e.$emit("subscribe")),e.$nuxt.$once("unsubscribe",t)}))},methods:{subscribe:function(){this.isMyProfile||this.$openSubscribeModal(this.profileId,this._uid)}}},l=n(0),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("rc-popover",{attrs:{enabled:e.isSubscribed,"auto-hide":!1},scopedSlots:e._u([{key:"popover",fn:function(){return[e._v('\n    Вы подписаны на тариф "'+e._s(e.activePlanTitle)+'"\n  ')]},proxy:!0}])},[n("rc-button",{staticClass:"subscribes-button",class:{"subscribes-button--active":e.isSubscribed},attrs:{light:!0,small:!0,disabled:e.isMyProfile},nativeOn:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.subscribe.apply(null,arguments)}}},[e._v("\n    "+e._s(e.buttonText)+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},522:function(e,t,n){"use strict";n.r(t);var r={name:"RcPopover",props:{enabled:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},autoHide:{type:Boolean,default:!0},show:{type:Boolean,default:void 0}},data:function(){return{loaded:!1}},computed:{enabledActual:function(){return!!this.loaded&&this.enabled}},mounted:function(){this.loaded=!0}},o=n(0),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.enabledActual?"v-popover":"div",{tag:"component",attrs:{trigger:e.enabled?e.trigger:void 0,"auto-hide":e.enabled?e.autoHide:void 0,show:e.enabled?e.show:void 0},scopedSlots:e._u([e.enabled?{key:"popover",fn:function(){return[e._t("popover")]},proxy:!0}:null],null,!0)},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},523:function(e,t,n){"use strict";n.r(t);n(13),n(10),n(12),n(8),n(15),n(11),n(16);var r=n(4),o=n(6),c=n(7),l=n(36),d=n(521);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"FeedRecommendationItem",components:{CustomIcon:c.default,AvatarImage:l.default,SubscribesButton:d.default},props:{item:{type:Object,required:!0}},computed:{profileUrl:function(){return this.$routeToProfile(this.item)},creatorName:function(){return this.$userDisplayingName(this.item)},countSubs:function(){var e;return(null===(e=this.item)||void 0===e?void 0:e.subscribers_total)||0},avatarUrl:function(){return this.$userAvatar(this.item)}},methods:m(m({},Object(o.b)("feed",["recommendsAction"])),{},{handleSubscribe:function(){this.recommendsAction()}})},h=n(0),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{staticClass:"recommendation-card feed-recommendation-item",attrs:{to:e.profileUrl}},[n("avatar-image",{staticClass:"flex items-center justify-center w-full",attrs:{src:e.avatarUrl,"img-class":"w-[80px] h-[80px] xs:w-[60px] xs:h-[60px]"}}),e._v(" "),n("div",{staticClass:"flex mx-auto mb-[1px] justify-center items-center mt-2 xs:mt-3"},[n("span",{staticClass:"text-black-100 f-bold leading-[18px] text-ellipsis max-w-[125px] xs:max-w-[105px] overflow-hidden whitespace-nowrap feed-recommendation-item__creator-name"},[e._v("\n      "+e._s(e.creatorName)+"\n    ")]),e._v(" "),n("custom-icon",{attrs:{"icon-id":"#i-arrow-right-sm",classes:"stroke-black-80",width:20,height:20}})],1),e._v(" "),n("p",{staticClass:"text-center text-black-60 f-regular leading-5 mb-4 xs:mb-1 feed-recommendation-item__subscribers-count"},[e._v("\n    "+e._s(e.countSubs)+"\n    "+e._s(e.$quantDecline(e.countSubs,["подписчик","подписчика","подписчиков"]))+"\n  ")]),e._v(" "),n("subscribes-button",{attrs:{"profile-id":e.item.id},on:{subscribe:e.handleSubscribe}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SubscribesButton:n(521).default})},524:function(e,t,n){"use strict";n.r(t);n(13),n(10),n(12),n(8),n(15),n(11),n(16);var r=n(4),o=n(6),c=n(7),l=n(523),d=n(525);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"FeedRecommendation",components:{CustomIcon:c.default,FeedRecommendationItem:l.default},mixins:[d.a],computed:m(m({},Object(o.e)("feed",["recommends"])),{},{items:function(){return this.recommends}}),methods:{scrollBy:function(e){var t,n;null===(t=this.$refs.itemsList)||void 0===t||null===(n=t.scrollBy)||void 0===n||n.call(t,{left:e,behavior:"smooth"})}}},h=n(0),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"itemsContainer",staticClass:"relative w-full"},[e.showScrollButtons?[n("div",{staticClass:"recommendation-arrow-button__container recommendation-arrow-button__container--left"},[n("button",{staticClass:"recommendation-arrow-button recommendation-arrow-button--left xs:hidden",on:{click:function(t){return e.scrollBy(-190)}}},[n("custom-icon",{attrs:{"icon-id":"#i-arrow-left",classes:"stroke-white-100"}})],1)]),e._v(" "),n("div",{staticClass:"recommendation-arrow-button__container"},[n("button",{staticClass:"recommendation-arrow-button xs:hidden",on:{click:function(t){return e.scrollBy(190)}}},[n("custom-icon",{attrs:{"icon-id":"#i-arrow-right",classes:"stroke-white-100"}})],1)])]:e._e(),e._v(" "),n("div",{ref:"itemsList",staticClass:"xs:mb-0 xs:py-3 overflow-x-auto flex hide-scrollbar relative mb-3"},e._l(e.items,(function(e,t){return n("feed-recommendation-item",{key:t,attrs:{item:e}})})),1)],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FeedRecommendationItem:n(523).default})},525:function(e,t,n){"use strict";n(8),n(11);t.a={data:function(){return{showScrollButtons:!1}},computed:{containerRef:function(){return this.$refs.itemsContainer},itemsRef:function(){return this.$refs.itemsList}},mounted:function(){var e=this;this.prepareScrollbar(),function(element,e){if(element){var t={root:document.documentElement};new IntersectionObserver((function(t){t.forEach((function(t){e(t.intersectionRatio>0)}))}),t).observe(element)}}(this.containerRef,(function(){e.prepareScrollbar()}))},methods:{prepareScrollbar:function(){var e,t;this.showScrollButtons=(null===(e=this.itemsRef)||void 0===e?void 0:e.scrollWidth)>(null===(t=this.containerRef)||void 0===t?void 0:t.clientWidth)}}}},529:function(e,t,n){"use strict";n(13),n(10),n(12),n(8),n(15),n(11),n(16);var r=n(4),o=n(6);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={computed:l(l({},Object(o.e)("feed",["visibleEndOfFeedAlert","hasNext"])),{},{endOfFeedAlert:{get:function(){return this.visibleEndOfFeedAlert},set:function(e){this.setVisibleEndOfFeedAlert(e)}}}),methods:l({},Object(o.d)("feed",["setVisibleEndOfFeedAlert"]))}},536:function(e,t,n){"use strict";n.r(t);n(12),n(8),n(30);var r=n(534),o=n(524),c=n(541),l=n(529),d=n(120),f={name:"FeedPostList",components:{FeedPost:r.default,FeedRecommendation:o.default,EndOfFeedAlert:c.default,InfinityScroll:d.default},mixins:[l.a],props:{posts:{type:Array,required:!0},withRecommendedBlock:Boolean,withEndOfFeedAlertBlock:Boolean,hasNextPosts:Boolean},computed:{isEmptyPosts:function(){var e;return!(null!==(e=this.posts)&&void 0!==e&&e.length)},firstPostId:function(){var e,t;return null===(e=this.postsForToday)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id},postsForToday:function(){var e=this,t=this.$backendDateFormat(new Date);return this.posts.filter((function(n){var r,o,c;return e.$backendDateFormat(new Date(null!==(r=null==n||null===(o=n.article)||void 0===o?void 0:o.published_at)&&void 0!==r?r:null==n||null===(c=n.article)||void 0===c?void 0:c.created_at))===t}))},recommendedBlockPosition:function(){var e,t,n=this.$backendDateFormat(new Date),r=-1;for(var o in this.posts){var c,l,d,f,m,v,h=Number(o)+1,O=this.posts[o],x=this.posts[h];if(x){var w=this.$backendDateFormat(new Date(null!==(c=null==O||null===(l=O.article)||void 0===l?void 0:l.published_at)&&void 0!==c?c:null==O||null===(d=O.article)||void 0===d?void 0:d.created_at)),y=this.$backendDateFormat(new Date(null!==(f=null==x||null===(m=x.article)||void 0===m?void 0:m.published_at)&&void 0!==f?f:null==x||null===(v=x.article)||void 0===v?void 0:v.created_at));if(w===n&&y!==w){r=o;break}}}return!this.hasNextPosts&&(null===(e=this.postsForToday)||void 0===e?void 0:e.length)>0?(null===(t=this.posts)||void 0===t?void 0:t.length)-1:Number(r)},endOfFeedAlertPosition:function(){return this.recommendedBlockPosition}}},m=n(0),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feed-post-list"},[e.withRecommendedBlock&&-1===e.recommendedBlockPosition?n("feed-recommendation"):e._e(),e._v(" "),e.isEmptyPosts?n("div",{staticClass:"feed-post-list__empty-message"},[e._v("\n    Публикаций нет\n  ")]):e._e(),e._v(" "),e._l(e.posts,(function(t,r){return[n("feed-post",{key:t.id,attrs:{post:t}}),e._v(" "),e.withRecommendedBlock&&Number(r)===e.recommendedBlockPosition?n("feed-recommendation",{key:t.id+"feed-recommendation"}):e._e(),e._v(" "),e.withEndOfFeedAlertBlock&&Number(r)===e.endOfFeedAlertPosition?n("end-of-feed-alert",{key:t.id+"end-of-feed-alert",attrs:{"last-post-id":e.firstPostId},model:{value:e.endOfFeedAlert,callback:function(t){e.endOfFeedAlert=t},expression:"endOfFeedAlert"}}):e._e()]})),e._v(" "),n("infinity-scroll",{on:{infinite:function(t){return e.$emit("infinite",t)}},scopedSlots:e._u([{key:"no-more",fn:function(){return[e._v("Публикации закончились")]},proxy:!0},{key:"no-results",fn:function(){return[n("div")]},proxy:!0}])})],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FeedRecommendation:n(524).default,FeedPost:n(534).default})},541:function(e,t,n){"use strict";n.r(t);n(30);var r={name:"EndOfFeedAlert",components:{CustomIcon:n(7).default},model:{prop:"visible",event:"toggle"},props:{visible:Boolean,lastPostId:{type:Number,required:!0}},computed:{model:{get:function(){return this.visible},set:function(e){this.$emit("toggle",e)}},showEndOfFeedAlert:function(){var e=this.$cookieGet("lastViewedFeedPostId");return Number(e)!==Number(this.lastPostId)&&this.model}},methods:{close:function(){this.$cookieSetForSession("lastViewedFeedPostId",this.lastPostId),this.model=!1}}},o=n(0),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showEndOfFeedAlert?n("div",{staticClass:"end-of-feed-alert"},[n("div",{staticClass:"orange-gradient rounded-[10px] flex xs:items-start items-center xs:py-2 pl-3 pt-3 pb-3 pr-6 relative"},[n("div",[n("custom-icon",{staticClass:"shrink-1 basis-[40px]",attrs:{"icon-id":"#i-main-check-circle",width:40,height:40}})],1),e._v(" "),e._m(0),e._v(" "),n("button",{staticClass:"absolute right-[4px] top-[5px]",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.close.apply(null,arguments)}}},[n("custom-icon",{attrs:{"icon-id":"#i-main-close",classes:"fill-white-100"}})],1)])]):e._e()}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xs:ml-[17px] ml-[19px]"},[n("p",{staticClass:"f-medium text-white-100 text-sm mb-1 text-left"},[e._v("\n        Вы просмотрели подписки за сегодня\n      ")]),e._v(" "),n("p",{staticClass:"f-regular text-white-100 text-xs text-left"},[e._v("\n        Далее рекомендации\n      ")])])}],!1,null,null,null);t.default=component.exports},778:function(e,t,n){"use strict";n.r(t);n(13),n(10),n(12),n(15),n(16);var r=n(4),o=n(2),c=(n(82),n(8),n(11),n(22),n(6)),l=n(529);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"IndexPage",meta:{mobileTitle:"Лента",preloader:!0},components:{FeedPostList:n(536).default},mixins:[l.a],data:function(){return{actualId:null,next:!1,page:1}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.postAction();case 2:return n=t.sent,t.next=5,e.tagsAction();case 5:return t.next=7,e.recommendsAction();case 7:n&&(e.next=!0,++e.page),e.$finishPreloader();case 9:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Лента"}},computed:f({},Object(c.e)("feed",["posts","viewedPostsIds"])),mounted:function(){var e=this;window.onbeforeunload=function(){window.scrollTo(0,0)},this.interval=setInterval((function(){e.hasNewEvents()}),1e4);var t=this.sendViewedPostsHandler();document.addEventListener("scroll",t)},beforeDestroy:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sendViewedPostsHandler(),document.removeEventListener("scroll",n),t.next=4,clearInterval(e.interval);case 4:return t.next=6,e.clearNewEventsData(null);case 6:case"end":return t.stop()}}),t)})))()},methods:f(f(f({},Object(c.d)("feed",["clearNewEventsData"])),Object(c.b)("feed",["postAction","viewedAction","tagsAction","recommendsAction","hasNewEvents"])),{},{sendViewedPostsHandler:function(){var e=this;return this.$debounce((function(){e.viewedPostsIds.forEach((function(t){return e.viewedAction(t)}))}),2e3)},getNextArticles:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.next){n.next=7;break}return n.next=3,t.postAction({page:t.page});case 3:n.sent?(++t.page,e.loaded()):(t.next=!1,e.complete()),n.next=8;break;case 7:e.complete();case 8:case"end":return n.stop()}}),n)})))()}})},v=n(0),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    max-w-[678px]\n    xs:mx-0\n    ml-[121px]\n    px-[29px]\n    xs:px-0 xs:bg-white-80\n    pt-4\n    xs:pt-0\n  "},[n("feed-post-list",{attrs:{posts:e.posts,"has-next-posts":e.hasNext,"with-recommended-block":"","with-end-of-feed-alert-block":""},on:{infinite:e.getNextArticles}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FeedPostList:n(536).default})}}]);