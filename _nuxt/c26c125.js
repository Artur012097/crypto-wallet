(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{769:function(t,e,n){"use strict";n.r(e);var l=n(229),o=n(231),c=n(62),r={name:"NotificationsSettingsPage",components:{SwitcherButton:l.default,RadioButton:o.default,RcButton:c.default},layout:"settings",data:function(){return{pushNotify:!1,emailNotify:!1,filterQuality:!1,ignoreNotify:0,messageType:0}},head:function(){return{title:"Уведомления"}}},v=n(0),component=Object(v.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-notifications settings-wrapper"},[n("h1",{staticClass:"settings-h1"},[t._v("Настройка уведомлений")]),t._v(" "),n("div",{staticClass:"w-full mt-8 xs:mt-3"},[n("div",{staticClass:"w-full pb-3 mb-3 border-b border-white-40"},[n("h3",{staticClass:"settings-h3 text-black-100 f-regular"},[t._v("Уведомления")]),t._v(" "),n("p",{staticClass:"settings-text mt-3"},[t._v("Настройка уведомлений")]),t._v(" "),n("div",{staticClass:"flex py-4 justify-between items-center"},[n("h3",{staticClass:"settings-h3 text-black-80"},[t._v("Push-уведомления")]),t._v(" "),n("switcher-button",{model:{value:t.pushNotify,callback:function(e){t.pushNotify=e},expression:"pushNotify"}})],1),t._v(" "),n("p",{staticClass:"settings-text"},[t._v("\n        Подпишитесь на электронные письма, чтобы узнавать, что происходит,\n        когда вы не в сети. Рассылку можно отключить в любое время\n        "),n("nuxt-link",{attrs:{to:"/"}},[t._v("Подробнее")])],1),t._v(" "),n("div",{staticClass:"flex pt-3 justify-between items-center"},[n("h3",{staticClass:"settings-h3 text-black-80"},[t._v("\n          Уведомления по электронной почте\n        ")]),t._v(" "),n("switcher-button",{model:{value:t.emailNotify,callback:function(e){t.emailNotify=e},expression:"emailNotify"}})],1)]),t._v(" "),n("div",{staticClass:"w-full"},[n("h3",{staticClass:"settings-h3 text-black-100"},[t._v("Фильтры")]),t._v(" "),n("p",{staticClass:"settings-text pt-3"},[t._v("\n        Вы можете отфильтровать определенный контент, например повторяющиеся\n        или автоматически созданные публикации. Это не касается уведомлений\n        отучетных записей, которые вы читаете или с которыми вы недавно\n        взоимодейстовали\n        "),n("nuxt-link",{attrs:{to:"/"}},[t._v("Подробнее")])],1),t._v(" "),n("h3",{staticClass:"settings-h3 text-black-80 my-3"},[t._v("\n        Игнорировать уведомления от:\n      ")]),t._v(" "),n("div",{staticClass:"pl-4"},[n("radio-button",{staticClass:"mb-2",attrs:{"button-value":0},model:{value:t.messageType,callback:function(e){t.messageType=e},expression:"messageType"}},[n("span",{staticClass:"order-2 f-regular text-xs"},[t._v("писать в ЛС может кто угодно")])]),t._v(" "),n("radio-button",{staticClass:"mb-2",attrs:{"button-value":1},model:{value:t.messageType,callback:function(e){t.messageType=e},expression:"messageType"}},[n("span",{staticClass:"order-2 f-regular text-xs"},[t._v("писать в ЛС могут только подписчики")])]),t._v(" "),n("radio-button",{attrs:{"button-value":2},model:{value:t.messageType,callback:function(e){t.messageType=e},expression:"messageType"}},[n("span",{staticClass:"order-2 f-regular text-xs"},[t._v("писать в ЛС могут только те, на кого подписаны вы")])])],1)]),t._v(" "),n("rc-button",{staticClass:"mt-8 px-[38px] float-right after:clear-both xs:mt-3",attrs:{light:""}},[t._v("\n      сохранить изменения\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);