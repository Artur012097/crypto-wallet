(window.webpackJsonp=window.webpackJsonp||[]).push([[116,30],{532:function(t,e,n){"use strict";n.r(e);n(30),n(98),n(8);var l=n(227),o=n.n(l),c=n(7),r={name:"SelectInput",directives:{ClickOutside:o.a},components:{CustomIcon:c.default},model:{prop:"value",event:"select"},props:{value:{type:[Number,String],required:!1,default:null},placeholder:{type:[String,Number],default:"Выберите"},options:{type:Array,required:!0},label:{type:String,default:null},defaultStyle:{type:Boolean,default:!0},withoutBorder:Boolean,underline:Boolean},data:function(){return{open:!1,top:!1}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("select",t)}},selectedOption:function(){var t=this;return void 0!==this.model?this.options.find((function(option){return(null==option?void 0:option.id)===t.model})):null},optionsStyle:function(){return this.top?{bottom:"47px"}:{top:"47px"}}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.calculateOptionsPosition()}))},methods:{select:function(option){var t=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e&&this.model===option.id?this.model=null:this.model=option.id,this.$nextTick((function(){t.closeIfOpen()}))},toggleOpen:function(){var t=this;this.open=!this.open,this.$nextTick((function(){t.calculateOptionsPosition()}))},calculateOptionsPosition:function(){var t,e,n,l;if(this.open){var o=null===(t=this.$refs)||void 0===t||null===(e=t.options)||void 0===e||null===(n=e.getBoundingClientRect)||void 0===n?void 0:n.call(e),c=null==o?void 0:o.bottom,r=window.innerHeight;null!==(l=this.$device)&&void 0!==l&&l.isMobile&&(r-=55),this.top&&(c+=null==o?void 0:o.height,c+=47),this.top=c>=r}},closeIfOpen:function(){this.open&&(this.open=!1)}}},d=r,v=n(0),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-input",class:{"select-input--default-style":t.defaultStyle,"select-input--without-border":t.withoutBorder,"select-input--underline":t.underline}},[t.label?[n("span",{staticClass:"ml-1 f-medium text-xs text-black-40"},[t._v(t._s(t.label))])]:t._e(),t._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeIfOpen,expression:"closeIfOpen"}],staticClass:"select-input--placeholder text-black-100",on:{click:function(e){return e.target!==e.currentTarget?null:t.toggleOpen.apply(null,arguments)}}},[t._v("\n    "+t._s(t.selectedOption?t.selectedOption.value:t.placeholder)+"\n    "),n("custom-icon",{staticClass:"transition-all ease-in-out duration-300",class:{"rotate-180":t.open},attrs:{"icon-id":"#i-arrow-down",classes:t.withoutBorder?"stroke-black-60":"stroke-black-100"}}),t._v(" "),n("div",{ref:"options",staticClass:"select-input__options",class:{"select-input__options--closed":!t.open},style:t.optionsStyle},[t._l(t.options,(function(option,e){return[n("div",{key:e,staticClass:"select-input__options--item",class:{"select-input__options--item--selected":option.id===t.model},on:{click:function(e){return t.select(option)}}},[t._v("\n          "+t._s(option.value)+"\n        ")])]}))],2)],1)],2)}),[],!1,null,null,null);e.default=component.exports},768:function(t,e,n){"use strict";n.r(e);var l=n(532),o=n(229),c=n(62),r={name:"GeneralSettingsPage",components:{SwitcherButton:o.default,RcButton:c.default,SelectInput:l.default},layout:"settings",data:function(){return{language:null,additionalLanguage:null,darkMode:!1,autoplay:!1,languages:[{id:"ru",value:"Русский (RU)"},{id:"en",value:"Английский (EN)"}]}},head:function(){return{title:"Общие настройки"}}},d=n(0),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-wrapper"},[n("h1",{staticClass:"settings-h1"},[t._v("Общие настройки")]),t._v(" "),n("div",{staticClass:"w-full mt-8 xs:mt-3"},[n("h3",{staticClass:"settings-h3 text-black-100 f-regular"},[t._v("Язык интерфейса")]),t._v(" "),n("p",{staticClass:"settings-text my-3"},[t._v("\n      Выберите язык, на котором вы хотите видеть заголовки, кнопки и другой\n      текст в интерфейсе\n    ")]),t._v(" "),n("select-input",{attrs:{options:t.languages,label:"язык интерфейса"},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1),t._v(" "),n("div",{staticClass:"w-full pb-3 mb-3 border-b border-white-40"},[n("h3",{staticClass:"settings-h3 text-black-100 mt-3 f-regular"},[t._v("\n      Дополнительный язык\n    ")]),t._v(" "),n("p",{staticClass:"settings-text my-3"},[t._v("\n      Выберите дполнительные языки, на которых вы хотите видеть контент\n    ")]),t._v(" "),n("select-input",{attrs:{options:t.languages,label:"дополнительный язык"},model:{value:t.additionalLanguage,callback:function(e){t.additionalLanguage=e},expression:"additionalLanguage"}}),t._v(" "),n("button",{staticClass:"pl-1 mt-1 f-medium text-xs text-purple-80"},[t._v("\n      добавить язык\n    ")])],1),t._v(" "),n("div",{staticClass:"w-full"},[n("h3",{staticClass:"settings-h3 text-black-100 f-regular"},[t._v("Оформление")]),t._v(" "),n("p",{staticClass:"settings-text my-3"},[t._v("Выберите тему оформления")]),t._v(" "),n("div",{staticClass:"flex mb-3 pt-1 pb-3 justify-between items-center border-b border-white-40"},[n("h3",{staticClass:"settings-h3 text-black-80"},[t._v("Тёмная тема")]),t._v(" "),n("switcher-button",{model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}})],1),t._v(" "),n("p",{staticClass:"settings-text"},[t._v("\n      Защитите свою учётную запись от несанкционированного доступа, включив\n      ещё один метод аутентификации в дополнение к паролю для Твиттера. Вы\n      можете выбрать СМС, приложение для аутентификации или ключ безопасности.\n      "),n("nuxt-link",{attrs:{to:"/"}},[t._v("Подробнее")])],1),t._v(" "),n("div",{staticClass:"flex mt-3 pb-3 justify-between items-center border-b border-white-40"},[n("h3",{staticClass:"settings-h3 text-black-80"},[t._v("Автовоспроизведение")]),t._v(" "),n("switcher-button",{model:{value:t.autoplay,callback:function(e){t.autoplay=e},expression:"autoplay"}})],1)]),t._v(" "),n("rc-button",{staticClass:"mt-8 px-[38px] float-right after:clear-both btn-primary xs:mt-3",attrs:{light:""}},[t._v("\n    сохранить изменения\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);