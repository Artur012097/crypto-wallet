(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["endCustomer"],{"1afa":function(e,t,n){"use strict";n("4e1b")},"4e1b":function(e,t,n){},"67bb":function(e,t,n){"use strict";n("92d7")},"92d7":function(e,t,n){},ed05:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),l=function(e){return Object(c["x"])("data-v-2dcc7dfc"),e=e(),Object(c["v"])(),e},s={class:"end-customer"},o=l((function(){return Object(c["g"])("h1",{class:"end-customer__title page__title"},"Конечный заказчик",-1)})),b={class:"end-customer-content page-wrapper"},u={class:"end-customer-fields"},a={class:"end-customer-fields-row fields-row"},i={class:"end-customer-fields-row fields-row _inn"},r={class:"end-customer-fields-row fields-row"},d={class:"end-customer-fields-row fields-row _city"},j={class:"end-customer-fields-row fields-row"},O={class:"end-customer-buttons page-buttons _save"},m={class:"end-customer-buttons__send _save__button"},g=Object(c["i"])("Сохранить"),p={class:"end-customer-search page-wrapper"},f={class:"end-customer-search-field"},_={class:"page-wrapper"};function v(e,t,n,l,v,C){var w=Object(c["C"])("base-input"),y=Object(c["C"])("base-button"),h=Object(c["C"])("end-customer-table"),V=Object(c["C"])("base-modal");return Object(c["u"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("section",s,[o,Object(c["g"])("div",b,[Object(c["g"])("div",u,[Object(c["g"])("div",a,[Object(c["j"])(w,{id:"end-customer-customer",label:"Конечный заказчик",modelValue:v.endCustomer,"onUpdate:modelValue":t[0]||(t[0]=function(e){return v.endCustomer=e})},null,8,["modelValue"])]),Object(c["g"])("div",i,[Object(c["j"])(w,{label:"ИНН",id:"end-customer-inn",modelValue:v.inn,"onUpdate:modelValue":t[1]||(t[1]=function(e){return v.inn=e})},null,8,["modelValue"])]),Object(c["g"])("div",r,[Object(c["j"])(w,{label:"Регион",id:"end-customer-region",modelValue:v.region,"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.region=e})},null,8,["modelValue"])]),Object(c["g"])("div",d,[Object(c["j"])(w,{label:"Город",id:"end-customer-city",modelValue:v.city,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.city=e})},null,8,["modelValue"])]),Object(c["g"])("div",j,[Object(c["j"])(w,{label:"ФИО заведующего эндоскопии",id:"end-customer",placeholder:"Если есть",modelValue:v.bio,"onUpdate:modelValue":t[4]||(t[4]=function(e){return v.bio=e})},null,8,["modelValue"])])])]),Object(c["g"])("div",O,[Object(c["g"])("div",m,[Object(c["j"])(y,{type:"filled",onClicked:C.send},{default:Object(c["L"])((function(){return[g]})),_:1},8,["onClicked"])])]),Object(c["g"])("div",p,[Object(c["g"])("div",f,[Object(c["j"])(w,{id:"endCustomerSearch",placeholder:"Поиск",search:!0,searchIcon:!0,suggestions:v.suggestions,onSetSuggestion:t[5]||(t[5]=function(e){return v.customers=e}),onClear:t[6]||(t[6]=function(e){return v.customers=""}),modelValue:v.customers,"onUpdate:modelValue":t[7]||(t[7]=function(e){return v.customers=e})},null,8,["suggestions","modelValue"])])]),Object(c["g"])("div",_,[Object(c["j"])(h,{endCustomers:v.endCustomers},null,8,["endCustomers"])])]),Object(c["j"])(V,{open:v.openModal,text:"Отправлено",onClose:t[8]||(t[8]=function(e){return v.openModal=!1})},null,8,["open"])],64)}var C=n("2141"),w=n("30a8"),y=n("4829"),h=function(e){return Object(c["x"])("data-v-7b845917"),e=e(),Object(c["v"])(),e},V={key:0,class:"end-customer-table"},F=h((function(){return Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",null,"Конечный заказчик"),Object(c["g"])("th",{class:"upp"},"Инн"),Object(c["g"])("th",null,"Регион"),Object(c["g"])("th",null,"Город"),Object(c["g"])("th",null,"ФИО заведующего эндоскопии")])],-1)})),k={class:"tooltip"},E={class:"tooltip"},S={class:"tooltip"},M={class:"tooltip"},U={class:"tooltip"},B={key:1,class:"end-customer-table-mobile table-mobile page-wrapper",ref:"table"},I={key:0,class:"table-mobile-row"},x=h((function(){return Object(c["g"])("span",{class:"end-customer-table-mobile__title table-mobile__title"}," Кон. заказчик ",-1)})),A={class:"table-mobile__value"},J={key:1,class:"table-mobile-row"},T=h((function(){return Object(c["g"])("span",{class:"end-customer-table-mobile__title table-mobile__title upp"}," ИНН ",-1)})),$={class:"table-mobile__value"},L={key:2,class:"table-mobile-row"},q=h((function(){return Object(c["g"])("span",{class:"end-customer-table-mobile__title table-mobile__title"}," Регион ",-1)})),z={class:"table-mobile__value"},D={key:3,class:"table-mobile-row"},G=h((function(){return Object(c["g"])("span",{class:"end-customer-table-mobile__title table-mobile__title"}," Город ",-1)})),H={class:"table-mobile__value"},K={key:4,class:"table-mobile-row"},N=h((function(){return Object(c["g"])("span",{class:"end-customer-table-mobile__title table-mobile__title"},[Object(c["g"])("span",{class:"upp"},"фио"),Object(c["i"])(" зав. ")],-1)})),P={class:"table-mobile__value"};function Q(e,t,n,l,s,o){return n.endCustomers.length&&!e.$isMobile?(Object(c["u"])(),Object(c["f"])("table",V,[F,Object(c["g"])("tbody",null,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(n.endCustomers,(function(e,t){return Object(c["u"])(),Object(c["f"])("tr",{key:t},[Object(c["g"])("td",null,[Object(c["g"])("span",null,Object(c["F"])(e.endCustomer),1),Object(c["g"])("span",k,Object(c["F"])(e.endCustomer),1)]),Object(c["g"])("td",null,[Object(c["g"])("span",null,Object(c["F"])(e.inn),1),Object(c["g"])("span",E,Object(c["F"])(e.inn),1)]),Object(c["g"])("td",null,[Object(c["g"])("span",null,Object(c["F"])(e.region),1),Object(c["g"])("span",S,Object(c["F"])(e.region),1)]),Object(c["g"])("td",null,[Object(c["g"])("span",null,Object(c["F"])(e.city),1),Object(c["g"])("span",M,Object(c["F"])(e.city),1)]),Object(c["g"])("td",null,[Object(c["g"])("span",null,Object(c["F"])(e.bio),1),Object(c["g"])("span",U,Object(c["F"])(e.bio),1)])])})),128))])])):n.endCustomers.length&&e.$isMobile?(Object(c["u"])(),Object(c["f"])("div",B,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(n.endCustomers,(function(e,t){return Object(c["u"])(),Object(c["f"])("div",{class:"table-mobile-column",key:t},[e.endCustomer?(Object(c["u"])(),Object(c["f"])("div",I,[x,Object(c["g"])("span",A,Object(c["F"])(e.endCustomer),1)])):Object(c["e"])("",!0),e.inn?(Object(c["u"])(),Object(c["f"])("div",J,[T,Object(c["g"])("span",$,Object(c["F"])(e.inn),1)])):Object(c["e"])("",!0),e.region?(Object(c["u"])(),Object(c["f"])("div",L,[q,Object(c["g"])("span",z,Object(c["F"])(e.region),1)])):Object(c["e"])("",!0),e.city?(Object(c["u"])(),Object(c["f"])("div",D,[G,Object(c["g"])("span",H,Object(c["F"])(e.city),1)])):Object(c["e"])("",!0),e.bio?(Object(c["u"])(),Object(c["f"])("div",K,[N,Object(c["g"])("span",P,Object(c["F"])(e.bio),1)])):Object(c["e"])("",!0)])})),128))],512)):Object(c["e"])("",!0)}var R={name:"EndCustomersTable",props:{endCustomers:{type:Array}}},W=(n("1afa"),n("6b0d")),X=n.n(W);const Y=X()(R,[["render",Q],["__scopeId","data-v-7b845917"]]);var Z=Y,ee={name:"EndCustomer",components:{BaseInput:C["a"],BaseButton:w["a"],BaseModal:y["a"],EndCustomerTable:Z},data:function(){return{endCustomer:"",inn:"",region:"",city:"",bio:"",customers:"",openModal:!1,endCustomers:[{id:0,endCustomer:"ОБУЗ ОКБ",inn:"4035117267",region:"Иваново",city:"Москва",bio:"Соколов Артемий Николаевич"},{id:1,endCustomer:"ГБУЗ НСО «Бердская ЦГБ»",inn:"5445117267",region:"Новосибирск",city:"Москва",bio:"Соколов Артемий Николаевич"}],suggestions:["8/21-ES","7/21-ES","6/21-ES","5/21-ES","5/21-ES","5/21-ES","5/21-ES","5/21-ES"]}},methods:{send:function(){this.openModal=!0,console.log("send")}}};n("67bb");const te=X()(ee,[["render",v],["__scopeId","data-v-2dcc7dfc"]]);t["default"]=te}}]);
//# sourceMappingURL=endCustomer.e5ae2870.js.map