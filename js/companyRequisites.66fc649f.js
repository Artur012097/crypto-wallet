(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["companyRequisites"],{"19b0":function(e,t,l){"use strict";l("c048")},"26ad":function(e,t,l){"use strict";l.r(t);var i=l("7a23"),n=l("c8de"),s=l.n(n),o=function(e){return Object(i["x"])("data-v-452ef5b8"),e=e(),Object(i["v"])(),e},u={class:"requisites"},c=o((function(){return Object(i["g"])("h1",{class:"requisites__title page__title"},"Реквизиты компании",-1)})),a={class:"requisites-content page-wrapper"},r={class:"requisites-fields"},d={class:"requisites-fields-row fields-row"},b={class:"requisites-fields-row fields-row _inn"},j={class:"requisites-fields-row fields-row"},O={class:"requisites-fields-row fields-row"},g={class:"requisites-fields-row fields-row"},p={class:"requisites-fields-row fields-row _index"},f={class:"requisites-fields-row fields-row"},m={class:"requisites-fields-row fields-row"},q={class:"requisites-fields-row fields-row _email"},v={class:"requisites-fields-row fields-row _position"},V={class:"requisites-file _logo"},w=o((function(){return Object(i["g"])("h5",{class:"requisites-file__title"},"Логотип",-1)})),h={key:0,class:"requisites-file-field"},y=o((function(){return Object(i["g"])("label",{for:"requisitesLogo"},[Object(i["i"])(" Перетащите или "),Object(i["g"])("span",null,"выберите"),Object(i["i"])(" файл ")],-1)})),_={key:1,class:"requisites-file-loaded"},C=o((function(){return Object(i["g"])("img",{src:s.a,alt:"Remove"},null,-1)})),k=[C],U=["src"],F={class:"requisites-file"},S=o((function(){return Object(i["g"])("h5",{class:"requisites-file__title"},"Оттиск печати",-1)})),E={key:0,class:"requisites-file-field"},I=o((function(){return Object(i["g"])("label",{for:"requisitesPrint"},[Object(i["i"])(" Перетащите или "),Object(i["g"])("span",null,"выберите"),Object(i["i"])(" файл ")],-1)})),x={key:1,class:"requisites-file-loaded"},R=o((function(){return Object(i["g"])("img",{src:s.a,alt:"Remove"},null,-1)})),B=[R],L=["src"],M={class:"requisites-buttons page-buttons _save"},P={class:"requisites__send _save__button"},A=Object(i["i"])(" Отправить "),J={class:"requisites-search page-wrapper"},D={class:"requisites-search-field"},z={class:"requisites-table page-wrapper"},G=o((function(){return Object(i["g"])("thead",null,[Object(i["g"])("tr",null,[Object(i["g"])("th",null,"Компания"),Object(i["g"])("th",{class:"upp"},"Инн"),Object(i["g"])("th",null,"Адрес"),Object(i["g"])("th",null,"Телефон"),Object(i["g"])("th",null,"Эл. почта")])],-1)})),H={class:"tooltip"},K={class:"tooltip"},N={class:"tooltip"},Q={class:"tooltip"},T={class:"tooltip"};function W(e,t,l,n,s,o){var C=Object(i["C"])("base-input"),R=Object(i["C"])("base-button"),W=Object(i["C"])("base-modal");return Object(i["u"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("section",u,[c,Object(i["g"])("div",a,[Object(i["g"])("div",r,[Object(i["g"])("div",d,[Object(i["j"])(C,{id:"requisitesCompany",label:"Компания",modelValue:s.company,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.company=e})},null,8,["modelValue"])]),Object(i["g"])("div",b,[Object(i["j"])(C,{id:"requisitesInn",label:"ИНН",modelValue:s.inn,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.inn=e})},null,8,["modelValue"])]),Object(i["g"])("div",j,[Object(i["j"])(C,{id:"requisitesAddress",label:"Адрес",modelValue:s.address,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.address=e})},null,8,["modelValue"])]),Object(i["g"])("div",O,[Object(i["j"])(C,{id:"requisitesCity",label:"Город",modelValue:s.city,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.city=e})},null,8,["modelValue"])]),Object(i["g"])("div",g,[Object(i["j"])(C,{id:"requisitesCountry",label:"Страна",modelValue:s.country,"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.country=e})},null,8,["modelValue"])]),Object(i["g"])("div",p,[Object(i["j"])(C,{id:"requisitesIndex",label:"Индекс",short:!0,modelValue:s.index,"onUpdate:modelValue":t[5]||(t[5]=function(e){return s.index=e})},null,8,["modelValue"])]),Object(i["g"])("div",f,[Object(i["j"])(C,{id:"requisitesPhone",label:"Телефон",modelValue:s.phone,"onUpdate:modelValue":t[6]||(t[6]=function(e){return s.phone=e})},null,8,["modelValue"])]),Object(i["g"])("div",m,[Object(i["j"])(C,{id:"requisitesEmail",label:"Электронная почта",modelValue:s.endCustomer,"onUpdate:modelValue":t[7]||(t[7]=function(e){return s.endCustomer=e})},null,8,["modelValue"])]),Object(i["g"])("div",q,[Object(i["j"])(C,{id:"requisitesBio",label:"ФИО",modelValue:s.bio,"onUpdate:modelValue":t[8]||(t[8]=function(e){return s.bio=e})},null,8,["modelValue"])]),Object(i["g"])("div",v,[Object(i["j"])(C,{id:"requisitesPosition",label:"Должность",modelValue:s.position,"onUpdate:modelValue":t[9]||(t[9]=function(e){return s.position=e})},null,8,["modelValue"])]),Object(i["g"])("div",V,[w,s.logo?(Object(i["u"])(),Object(i["f"])("div",_,[Object(i["g"])("div",{class:"requisites-file-loaded__close",onClick:t[11]||(t[11]=function(e){return s.logo=null})},k),Object(i["g"])("img",{src:s.logo,alt:"Logo"},null,8,U)])):(Object(i["u"])(),Object(i["f"])("div",h,[y,Object(i["g"])("input",{type:"file",id:"requisitesLogo",onChange:t[10]||(t[10]=function(e){return o.uploadImage("logo")})},null,32)]))]),Object(i["g"])("div",F,[S,s.print?(Object(i["u"])(),Object(i["f"])("div",x,[Object(i["g"])("div",{class:"requisites-file-loaded__close",onClick:t[13]||(t[13]=function(e){return s.print=null})},B),Object(i["g"])("img",{src:s.print,alt:"Print"},null,8,L)])):(Object(i["u"])(),Object(i["f"])("div",E,[I,Object(i["g"])("input",{type:"file",id:"requisitesPrint",onChange:t[12]||(t[12]=function(e){return o.uploadImage("print")})},null,32)]))])])]),Object(i["g"])("div",M,[Object(i["g"])("div",P,[Object(i["j"])(R,{type:"filled",onClick:o.send},{default:Object(i["L"])((function(){return[A]})),_:1},8,["onClick"])])]),Object(i["g"])("div",J,[Object(i["g"])("div",D,[Object(i["j"])(C,{id:"requisitesSearch",placeholder:"Поиск",search:!0,searchIcon:!0,suggestions:s.suggestions,onSetSuggestion:t[14]||(t[14]=function(e){return s.requisite=e}),onClear:t[15]||(t[15]=function(e){return s.requisite=""}),modelValue:s.requisite,"onUpdate:modelValue":t[16]||(t[16]=function(e){return s.requisite=e})},null,8,["suggestions","modelValue"])])]),Object(i["g"])("table",z,[G,Object(i["g"])("tbody",null,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(s.requisites,(function(e,t){return Object(i["u"])(),Object(i["f"])("tr",{key:t},[Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(e.company),1),Object(i["g"])("span",H,Object(i["F"])(e.company),1)]),Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(e.inn),1),Object(i["g"])("span",K,Object(i["F"])(e.inn),1)]),Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(e.address),1),Object(i["g"])("span",N,Object(i["F"])(e.address),1)]),Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(e.phone),1),Object(i["g"])("span",Q,Object(i["F"])(e.phone),1)]),Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(e.email),1),Object(i["g"])("span",T,Object(i["F"])(e.email),1)])])})),128))])])]),Object(i["j"])(W,{open:s.openModal,text:"Отправлено",onClose:t[17]||(t[17]=function(e){return s.openModal=!1})},null,8,["open"])],64)}var X=l("2141"),Y=l("30a8"),Z=l("4829"),$={name:"CompanyRequisites",components:{BaseInput:X["a"],BaseButton:Y["a"],BaseModal:Z["a"]},data:function(){return{company:"",inn:"",address:"",city:"",country:"",index:"",phone:"",endCustomer:"",bio:"",position:"",requisite:"",logo:null,print:null,openModal:!1,requisites:[{id:0,company:"Эндо Сервис",inn:"5445117267",address:"ул. Депутатская, 46, оф.1173",phone:"+7 (923) 226-97-86",email:"julburdukova@gmail.com"},{id:1,company:"ООО МГ РУС",inn:"5444101730",address:"ул. Депутатская, 46, оф.1173",phone:"+7 (911) 903-04-09",email:"ugochka@mail.ru"}],suggestions:["8/21-ES","7/21-ES","6/21-ES","5/21-ES","5/21-ES","5/21-ES","5/21-ES","5/21-ES"]}},methods:{send:function(){this.openModal=!0},uploadImage:function(e){var t=this,l=window.event,i=l.target.files[0],n=new FileReader;n.readAsDataURL(i),n.onload=function(l){console.log(e),"logo"===e?t.logo=l.target.result:t.print=l.target.result}}}},ee=(l("19b0"),l("6b0d")),te=l.n(ee);const le=te()($,[["render",W],["__scopeId","data-v-452ef5b8"]]);t["default"]=le},c048:function(e,t,l){}}]);
//# sourceMappingURL=companyRequisites.66fc649f.js.map