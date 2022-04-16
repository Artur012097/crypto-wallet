(window.webpackJsonp=window.webpackJsonp||[]).push([[1,23,42,43,44,45,46],{543:function(t,e,n){"use strict";n.r(e);n(30);var o={name:"LikeButton",components:{CustomIcon:n(7).default},props:{count:{type:[Number,String],required:!0},liked:Boolean,mini:Boolean},computed:{styleLike:function(){return this.liked?"fill-red-100 stroke-red-100":"stroke-black-100 fill-transparent"}}},r=n(0),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"flex items-center",on:{click:function(e){return e.stopPropagation(),t.$emit("like")}}},[t.mini?[n("custom-icon",{attrs:{width:20,height:20,"icon-id":"#i-post-comment-like",classes:t.styleLike}}),t._v(" "),t.count>0?n("span",{staticClass:"text-black-60 f-medium text-[14px]",class:{"like-count--liked":t.isLiked}},[t._v(t._s(t.count))]):t._e()]:[n("custom-icon",{staticClass:"xs:hidden",attrs:{"icon-id":"#i-post-like",classes:t.styleLike}}),t._v(" "),n("custom-icon",{staticClass:"hidden xs:block",attrs:{"icon-id":"#i-post-sm-like",height:24,width:25,classes:t.styleLike}}),t._v(" "),t.count>0?n("span",{staticClass:"like-count",class:{"like-count--liked":t.liked}},[t._v("\n      "+t._s(t.count)+"\n    ")]):t._e()]],2)}),[],!1,null,null,null);e.default=component.exports},701:function(t,e,n){"use strict";n.r(e);n(30);var o={name:"PostCommentOptions",components:{CustomIcon:n(7).default},props:{answersCount:{type:Number,required:!0},canReply:Boolean}},r=n(0),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-between xs:mt-2"},[n("div",[t.canReply?n("button",{staticClass:"post-comment--button text-purple-80 mr-2",on:{click:function(e){return t.$emit("reply")}}},[n("span",{staticClass:"xs:hidden"},[t._v("ответить")]),t._v(" "),n("custom-icon",{staticClass:"xs:inline hidden",attrs:{"icon-id":"#i-post-sm-comment",width:24,height:24}}),t._v(" "),n("span",{staticClass:"xs:inline hidden f-bold text-black-40 text-xs"},[t._v(t._s(t.answersCount))])],1):t._e(),t._v(" "),t.canReply?n("button",{staticClass:"post-comment--button text-black-20",on:{click:function(e){return t.$emit("repost")}}},[n("span",{staticClass:"xs:hidden"},[t._v("поделиться")]),t._v(" "),n("custom-icon",{staticClass:"xs:inline hidden",attrs:{"icon-id":"#i-post-sm-share",width:24,height:24,classes:"stroke-black-60"}})],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports},702:function(t,e,n){"use strict";n.r(e);n(30);var o={name:"PostCommentResponse",components:{CustomIcon:n(7).default},props:{answersCount:{type:Number,required:!0},answersShow:Boolean},computed:{toggleButtonIcon:function(){return this.answersShow?"#i-arrow-up":"#i-arrow-down"}},methods:{toggleAnswers:function(){this.$emit("toggle-answers",!this.answersShow)}}},r=n(0),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.answersCount?n("div",{staticClass:"xs:mt-[3.5px]"},[n("button",{staticClass:"text-sm f-medium text-black-60 leading-[30px] mb-2",on:{click:t.toggleAnswers}},[n("span",{staticClass:"xs:hidden"},[t._v("\n      показать\n      "+t._s(t.answersCount)+"\n      "+t._s(t.$quantDecline(t.answersCount,["ответ","ответа","ответов"]))+"\n    ")]),t._v(" "),n("span",{staticClass:"xs:inline hidden text-purple-80"},[t._v("\n      ответы ("+t._s(t.answersCount)+")\n    ")]),t._v(" "),n("custom-icon",{staticClass:"inline",attrs:{"icon-id":t.toggleButtonIcon,classes:"xs:stroke-purple-80 stroke-black-60 fill-white-100"}})],1),t._v(" "),t.answersShow?[t._t("default")]:t._e()],2):t._e()}),[],!1,null,null,null);e.default=component.exports},703:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(22),{name:"PostCommentContent",props:{commentContent:{type:String,required:!0},commentMedia:{type:Array,required:!0}},computed:{media:function(){return this.commentMedia||null}},methods:{openPreviewHandler:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$openImagePreviewModal(t,e.media);case 2:case"end":return n.stop()}}),n)})))()}}}),l=n(0),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-comment--content"},[n("p",{staticClass:"post-comment--content-text"},[t._v("\n    "+t._s(t.commentContent)+"\n  ")]),t._v(" "),t.media?n("div",{staticClass:"post-comment--content-media"},[t._l(t.media,(function(e,o){return[n("div",{key:e.id,staticClass:"post-comment--content-image",on:{click:function(e){return t.openPreviewHandler(o)}}},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.$formatUrl(e.url),alt:e.id}})])]}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},738:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(22),n(30),n(36)),l=n(701),c=n(702),m=n(703),d=n(543),f={name:"PostComment",components:{PostCommentContent:m.default,PostCommentResponse:c.default,PostCommentOptions:l.default,LikeButton:d.default,AvatarImage:r.default},props:{comment:{type:Object,required:!0},level:{type:Number,default:1},parent:{type:Object,default:null},parentRef:{type:Object,default:null}},data:function(){return{showingAnswers:!1,fetchedAnswers:!1,answers:[],isLikedTmp:void 0,countLikesTmp:void 0}},computed:{currentThis:function(){return this},commentUserProfile:function(){var t;return null===(t=this.comment)||void 0===t?void 0:t.creator},eventPayload:function(){return{comment:this.comment,level:this.level,parent:this.parent,parentRef:this.parentRef,ref:this}},commentDate:function(){var t,e,n,o,r;return null!==(t=null===(e=this.comment)||void 0===e||null===(n=e.article)||void 0===n?void 0:n.published_at)&&void 0!==t?t:null===(o=this.comment)||void 0===o||null===(r=o.article)||void 0===r?void 0:r.created_at},content:function(){var t,e,n;return null!==(t=null===(e=this.comment)||void 0===e||null===(n=e.article)||void 0===n?void 0:n.content)&&void 0!==t?t:""},media:function(){var t,e;return null!==(t=null===(e=this.comment)||void 0===e?void 0:e.media)&&void 0!==t?t:null},authorName:function(){return this.$userDisplayingName(this.commentUserProfile)},authorProfileId:function(){var t,e;return null===(t=this.comment)||void 0===t||null===(e=t.article)||void 0===e?void 0:e.profile},isLiked:{get:function(){var t,e;return void 0!==this.isLikedTmp?this.isLikedTmp:Boolean(null===(t=this.comment)||void 0===t||null===(e=t.article)||void 0===e?void 0:e.is_ilike)},set:function(t){this.isLikedTmp=t}},answersCount:function(){var t,e,n,o;return(null===(t=this.comment)||void 0===t||null===(e=t.article)||void 0===e||null===(n=e.counters)||void 0===n?void 0:n.comments)||(null===(o=this.answers)||void 0===o?void 0:o.length)||0},countLikes:{get:function(){var t,e;return void 0!==this.countLikesTmp?this.countLikesTmp:(null===(t=this.comment)||void 0===t||null===(e=t.counters)||void 0===e?void 0:e.marks)||0},set:function(t){this.countLikesTmp=t}},canReply:function(){var t,e;return this.authorProfileId!==(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id)},routeToProfile:function(){var t,e;return this.$routeToProfile(null===(t=this.comment)||void 0===t||null===(e=t.article)||void 0===e?void 0:e.creator)}},methods:{toggleAnswers:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=10;break}if(e.fetchedAnswers){n.next=7;break}return n.next=4,e.$api.feed.getComments(null===(o=e.comment)||void 0===o?void 0:o.id);case 4:r=n.sent,e.answers=(null==r?void 0:r.results)||[],e.fetchedAnswers=!0;case 7:e.showingAnswers=!0,n.next=11;break;case 10:e.showingAnswers=!1;case 11:case"end":return n.stop()}}),n)})))()},switchLike:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLiked){e.next=6;break}return e.next=3,t.$api.feed.unlike(null===(o=t.comment)||void 0===o?void 0:o.id);case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,t.$api.feed.like(null===(r=t.comment)||void 0===r?void 0:r.id);case 8:n=e.sent;case 9:isNaN(parseInt(n))||(t.isLiked?t.isLiked=!1:t.isLiked=!0,t.countLikes=n);case 10:case"end":return e.stop()}}),e)})))()}}},v=n(0),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-comment"},[n("nuxt-link",{staticClass:"comment-author flex",attrs:{to:t.routeToProfile}},[n("avatar-image",{attrs:{"img-class":"comment-author--logo",src:t.$userAvatar(t.commentUserProfile)}}),t._v(" "),n("div",{staticClass:"comment-author--name profile-user-name profile-user-name--for-feed-post-comment"},[t._v("\n      "+t._s(t.authorName)+"\n    ")]),t._v(" "),n("div",{staticClass:"comment-author-date"},[t._v(t._s(t.$postDateFormat(t.commentDate)))])],1),t._v(" "),n("div",{staticClass:"xs:ml-[39px] ml-[42px]"},[n("div",{staticClass:"relative"},[n("post-comment-content",{attrs:{"comment-media":t.media,"comment-content":t.content}}),t._v(" "),n("div",{staticClass:"flex items-center absolute bottom-0 right-0"},[n("like-button",{attrs:{count:t.countLikes,liked:t.isLiked,mini:""},on:{like:t.switchLike}})],1),t._v(" "),n("post-comment-options",{attrs:{"can-reply":t.canReply,"answers-count":t.answersCount},on:{reply:function(e){return t.$emit("reply",t.eventPayload)},repost:function(e){return t.$emit("repost",t.eventPayload)}}})],1),t._v(" "),t.parent?t._e():n("post-comment-response",{attrs:{"answers-count":t.answersCount,"answers-show":t.showingAnswers},on:{"toggle-answers":t.toggleAnswers}},[t._l(t.answers,(function(e){return[n("post-comment",{key:e.id,attrs:{comment:e,level:t.level+1,parent:t.comment,"parent-ref":t.currentThis},on:{reply:function(e){return t.$emit("reply",e)},repost:function(e){return t.$emit("repost",e)}}})]}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},739:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(22),n(30),n(12),n(8),n(57),n(117)),l=n(36),c=n(7),m=n(62),d={name:"PostCommentForm",components:{CustomIcon:c.default,RcButton:m.default,ImgWithPlaceholder:r.default,AvatarImage:l.default},props:{contentId:{type:Number,required:!0}},data:function(){return{inputComment:"",files:[],loading:!1}},computed:{hasErrors:function(){return Boolean(this.inputComment)||Boolean(this.files.length)||this.loading}},methods:{focusToTextarea:function(){var t,e,n,o;null===(t=this.$refs)||void 0===t||null===(e=t.input)||void 0===e||null===(n=e.$el)||void 0===n||null===(o=n.focus)||void 0===o||o.call(n)},onInput:function(){this.inputComment||this.$emit("clear-input-comment")},removeFile:function(t){this.files=this.files.filter((function(e){return e.id!==t}))},submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,l=t.$objectToFormData({contentId:t.contentId,content:t.inputComment,files:null===(n=t.files)||void 0===n||null===(o=n.map)||void 0===o?void 0:o.call(n,(function(t){return null==t?void 0:t.file}))}),e.next=4,t.$api.feed.createComment(t.contentId,l);case 4:if(c=e.sent,t.loading=!1,null==c||null===(r=c.content)||void 0===r||!r[0]){e.next=9;break}return t.$notify({type:"error",title:null==c||null===(m=c.content)||void 0===m?void 0:m[0]}),e.abrupt("return");case 9:t.inputComment="",t.files=[],t.$emit("refresh-post-comments"),t.$emit("clear-input-comment");case 13:case"end":return e.stop()}}),e)})))()},clickAttach:function(){var t,e,n;null===(t=this.$refs)||void 0===t||null===(e=t.postUploadImgInput)||void 0===e||null===(n=e.click)||void 0===n||n.call(e)},setFiles:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$addFilesWithPreview(e.files,t,e.$postCommentFilesLimit());case 2:e.files=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}},f=n(0),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-comment-form__container"},[n("hr",{staticClass:"border-t-[0.5px] border-white-20 w-full xs:mt-3"}),t._v(" "),n("div",{staticClass:"post-comment-form flex items-start mt-3 h-full"},[n("input",{ref:"postUploadImgInput",staticClass:"hidden",attrs:{type:"file",multiple:"",accept:t.$acceptForPostCommentFiles()},on:{change:t.setFiles}}),t._v(" "),n("avatar-image",{staticClass:"xs:hidden",attrs:{"img-class":"h-[35px] w-[35px]",src:t.$userAvatar()}}),t._v(" "),n("div",{staticClass:"relative mx-2 w-full min-h-[40px] h-full cursor-text rounded-sm bg-white-80"},[t.files&&t.files.length>0?n("div",{ref:"fileThumbnails",staticClass:"create-post-media-content--thumbnails gap-2 pr-8 pt-1 pl-1",on:{click:function(e){return e.target!==e.currentTarget?null:t.focusToTextarea.apply(null,arguments)}}},[t._l(t.files,(function(e){return[n("div",{key:e.id,staticClass:"create-post-media-content--thumbnails--item create-post-media-content--thumbnails--item--small"},[n("button",{staticClass:"absolute px-[9px] h-4 w-4 z-2 top-[3px] right-[3px] rounded-full bg-black-100 bg-opacity-70 pseudo-icon",on:{click:function(n){return n.target!==n.currentTarget?null:t.removeFile(e.id)}}}),t._v(" "),n("img-with-placeholder",{staticClass:"w-full h-full object-cover rounded-[5px] hover:opacity-95",attrs:{src:e.path,alt:"Upload img",draggable:"false"}})],1)]}))],2):t._e(),t._v(" "),n("textarea-autosize",{ref:"input",staticClass:"post-comment-form__textarea pt-2",class:{"post-comment-form__textarea--with-files":t.files&&t.files.length>0},attrs:{type:"text",rows:"1","min-height":40,"max-height":258},on:{input:t.onInput},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?t.submit.apply(null,arguments):null}},model:{value:t.inputComment,callback:function(e){t.inputComment=e},expression:"inputComment"}}),t._v(" "),n("button",{staticClass:"absolute top-[8px] right-[8px]",on:{click:t.clickAttach}},[n("custom-icon",{attrs:{"icon-id":"#i-post-attachment"}})],1)],1),t._v(" "),n("rc-button",{staticClass:"post-comment-form--submit",attrs:{"disable-outlined":"",light:"",disabled:!t.hasErrors},on:{click:t.submit}},[n("span",{staticClass:"xs:hidden"},[t._v("Опубликовать")]),t._v(" "),n("span",{staticClass:"hidden xs:inline"},[t._v(">")])])],1)])}),[],!1,null,null,null);e.default=component.exports},749:function(t,e,n){"use strict";n.r(e);n(30);var o=n(738),r={name:"PostCommentList",components:{PostCommentForm:n(739).default,PostComment:o.default},props:{firstComment:{type:Object,default:null},commentsLength:{type:Number,default:0},comments:{type:Array,default:null},contentId:{type:Number,required:!0},hiddenOnMobile:Boolean,showAll:Boolean,hasNext:Boolean},data:function(){return{commentAreaHeight:"40px",replyingComment:null,replyingCommentRef:null}},computed:{isShowComments:{get:function(){return this.showAll},set:function(t){this.$emit("refresh-post-comments",t)}},commentList:function(){return this.commentsLength>0&&this.comments},computedContentId:function(){var t,e;return this.replyingComment?null===(t=this.replyingComment)||void 0===t||null===(e=t.article)||void 0===e?void 0:e.id:this.contentId}},methods:{showAllComments:function(){this.isShowComments=!0},hideAll:function(){this.isShowComments=!1},onClearInputComment:function(){this.replyingComment=null,this.replyingCommentRef=null},replyComment:function(t,e){var n,o=null==t?void 0:t.ref,r=null==t?void 0:t.parentRef;this.replyingComment=e,this.replyingCommentRef=r||o;var l,c,m,d,f,v=null===(n=this.$refs)||void 0===n?void 0:n.postCommentForm;v&&(v.inputComment="".concat(this.$userDisplayingName(null==t||null===(l=t.comment)||void 0===l||null===(c=l.article)||void 0===c?void 0:c.creator),", "),null==v||null===(m=v.$refs)||void 0===m||null===(d=m.input)||void 0===d||null===(f=d.focus)||void 0===f||f.call(d))},repostComment:function(t){},onRefreshComments:function(){var t,e;this.replyingCommentRef&&(this.replyingCommentRef.fetchedAnswers=!1,null===(t=this.replyingCommentRef)||void 0===t||null===(e=t.toggleAnswers)||void 0===e||e.call(t,!0));this.$emit("refresh-post-comments")}}},l=n(0),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-comment-list",class:{"post-comment-list--hidden-on-mobile":t.hiddenOnMobile}},[n("div",{staticClass:"post-comment-list__comments"},[t.firstComment?[!t.isShowComments&&t.commentsLength>1?[n("button",{staticClass:"mt-4 text-purple-80 h-[30px] xs:f-medium xs:text-md",on:{click:t.showAllComments}},[t._v("\n          Посмотреть все комментарии ("+t._s(t.commentsLength)+")\n        ")])]:t._e(),t._v(" "),n("div",{staticClass:"mt-3"},[t.isShowComments?t._l(t.commentList,(function(e){return n("post-comment",{key:e.id,attrs:{comment:e},on:{reply:function(n){return t.replyComment(n,e)},repost:t.repostComment}})})):[n("post-comment",{key:t.firstComment.id,attrs:{comment:t.firstComment},on:{reply:function(e){return t.replyComment(e,t.firstComment)},repost:t.repostComment}})]],2),t._v(" "),t.isShowComments?n("div",{staticClass:"flex justify-between"},[t.hasNext?n("button",{staticClass:"text-purple-80 h-[30px] xs:f-medium xs:text-md",on:{click:function(e){return t.$emit("next-post-comments")}}},[t._v("\n          Посмотреть ещё\n        ")]):t._e(),t._v(" "),n("button",{staticClass:"xs:hidden text-black-40 h-[30px] xs:f-medium xs:text-md",on:{click:t.hideAll}},[t._v("\n          Скрыть комментарии\n        ")])]):t._e()]:[n("div",{staticClass:"xs:hidden mt-2 text-black-20 cursor-default f-medium text-md mb-[12px]"},[t._v("\n        комментариев пока нет\n      ")])]],2),t._v(" "),n("post-comment-form",{ref:"postCommentForm",attrs:{"content-id":t.computedContentId},on:{"refresh-post-comments":t.onRefreshComments,"clear-input-comment":t.onClearInputComment}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);