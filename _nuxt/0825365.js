(window.webpackJsonp=window.webpackJsonp||[]).push([[62,8],{538:function(t,e,o){"use strict";o.r(e);o(30);var n={name:"OptionsPopover",components:{CustomIcon:o(7).default},model:{prop:"show",event:"toggle"},props:{show:{type:Boolean,default:!1},options:{type:Array,default:function(){return[]}},classes:{type:[String,Object],default:""},buttonClasses:{type:[String,Object],default:""},width:{type:Number,default:200},iconStroke:{type:String,default:""},textColor:{type:String,default:""}},computed:{model:{get:function(){return this.show},set:function(t){this.$emit("toggle",t)}}},methods:{showOptions:function(){this.model=!0},hideOptions:function(){this.model=!1},actionHandler:function(t){this.$emit("actionHandler",t)}}},l=o(0),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"options-popover",class:[{hidden:!t.model},t.classes],on:{mouseenter:t.showOptions,mouseleave:t.hideOptions}},[o("div",{staticClass:"options-popover-block",class:t.buttonClasses},[t._l(t.options,(function(e,n){return[o("button",{key:n,staticClass:"options-popover__button",on:{click:function(e){return t.actionHandler(n)}}},[o("custom-icon",{staticClass:"inline",attrs:{"icon-id":"#"+e.icon,width:20,height:20,classes:e.iconStroke}}),t._v(" "),o("span",{class:""+(e.textColor?e.textColor:"stroke-black-100")},[t._v(t._s(e.text))])],1)]}))],2)])}),[],!1,null,null,null);e.default=component.exports},545:function(t,e,o){"use strict";o.r(e);var n=o(7),l=o(538),c={name:"ChatListHeader",components:{CustomIcon:n.default,OptionsPopover:l.default},data:function(){return{show:!1,options:[{icon:"i-chat-list-settings",text:"настройки"},{icon:"i-chat-list-select",text:"выбрать сообщение"},{icon:"i-chat-list-notification",text:"отключить уведомления"},{icon:"i-chat-list-exit",text:"выйти из чата"}]}}},r=o(0),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative h-[70px] py-4 pl-4 pr-2 flex items-center justify-between border-b border-white-60"},[o("span",{staticClass:"f-bold text-lg text-black-100"},[t._v("Чаты")]),t._v(" "),o("div",{staticClass:"grid grid-cols-3 gap-2"},[o("button",[o("custom-icon",{attrs:{"icon-id":"#i-main-search",classes:"stroke-black-10 hover:stroke-purple-100"}})],1),t._v(" "),o("button",[o("custom-icon",{attrs:{"icon-id":"#i-chat-select",classes:"stroke-black-10 hover:stroke-purple-100"}})],1),t._v(" "),o("button",{on:{mouseenter:function(e){t.show=!0}}},[o("custom-icon",{attrs:{"icon-id":"#i-chat-add",classes:"fill-black-10 stroke-black-10 hover:stroke-purple-100 hover:fill-purple-100"}})],1)]),t._v(" "),o("options-popover",{attrs:{options:t.options,classes:"w-[260px] top-[54px]"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);