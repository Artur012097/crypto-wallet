(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["companies"],{"07ac":function(e,t,i){var s=i("23e7"),a=i("6f53").values;s({target:"Object",stat:!0},{values:function(e){return a(e)}})},"26ad":function(e,t,i){"use strict";i.r(t);i("b0c0"),i("d3b7");var s=i("7a23"),a=i("c8de"),n=i.n(a),l=function(e){return Object(s["A"])("data-v-6e9fee21"),e=e(),Object(s["y"])(),e},c={class:"requisites"},o=l((function(){return Object(s["i"])("h1",{class:"requisites__title page__title"},"Реквизиты компании",-1)})),r={class:"requisites-content page-wrapper"},d={class:"requisites-fields"},u={class:"requisites-fields-row fields-row"},b={class:"requisites-fields-row fields-row _inn"},j={class:"requisites-fields-row fields-row"},O={class:"requisites-fields-row fields-row"},p={class:"requisites-fields-row fields-row"},f={class:"requisites-fields-row fields-row _index"},m={class:"requisites-fields-row fields-row"},_={class:"requisites-fields-row fields-row _email"},h={class:"requisites-fields-row fields-row"},v={class:"requisites-fields-row fields-row _position"},g={class:"requisites-file _logo"},q=l((function(){return Object(s["i"])("span",{class:"requisites-file__title"},"Логотип",-1)})),y={for:"requisitesLogo"},k={key:1,class:"requisites-file-loaded"},w=l((function(){return Object(s["i"])("img",{src:n.a,alt:"Remove"},null,-1)})),V=[w],J=["src"],x={class:"requisites-file"},C=l((function(){return Object(s["i"])("span",{class:"requisites-file__title"},"Оттиск печати",-1)})),$={for:"requisitesBlankPhoto"},I={key:1,class:"requisites-file-loaded"},M=l((function(){return Object(s["i"])("img",{src:n.a,alt:"Remove"},null,-1)})),P=[M],U=["src"],A={class:"requisites-buttons page-buttons _save"},D={class:"requisites__send _save__button"},S=Object(s["j"])(" Сохранить "),B={class:"requisites-search page-wrapper"},L={class:"requisites-search-field"},R={class:"page-wrapper"};function E(e,t,i,a,n,l){var w=Object(s["F"])("base-input"),M=Object(s["F"])("base-button"),E=Object(s["F"])("company-requisites-table"),F=Object(s["F"])("base-modal");return Object(s["x"])(),Object(s["h"])(s["b"],null,[Object(s["i"])("section",c,[o,Object(s["i"])("div",r,[Object(s["i"])("div",d,[Object(s["i"])("div",u,[Object(s["k"])(w,{id:"requisitesCompany",label:"Компания",required:!0,modelValue:n.data.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.data.name=e})},null,8,["modelValue"])]),Object(s["i"])("div",b,[Object(s["k"])(w,{id:"requisitesInn",label:"ИНН",type:"number",message:n.message,onInput:t[1]||(t[1]=function(e){return n.message=""}),required:!0,modelValue:n.data.inn,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.data.inn=e})},null,8,["message","modelValue"])]),Object(s["i"])("div",j,[Object(s["k"])(w,{id:"requisitesAddress",label:"Адрес",required:!0,modelValue:n.data.address_street,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.data.address_street=e})},null,8,["modelValue"])]),Object(s["i"])("div",O,[Object(s["k"])(w,{id:"requisitesCity",label:"Город",modelValue:n.data.address_city,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.data.address_city=e})},null,8,["modelValue"])]),Object(s["i"])("div",p,[Object(s["k"])(w,{id:"requisitesCountry",label:"Страна",required:!0,modelValue:n.data.address_country,"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.data.address_country=e})},null,8,["modelValue"])]),Object(s["i"])("div",f,[Object(s["k"])(w,{id:"requisitesIndex",label:"Индекс",type:"number",short:!0,required:!0,modelValue:n.data.address_index,"onUpdate:modelValue":t[6]||(t[6]=function(e){return n.data.address_index=e})},null,8,["modelValue"])]),Object(s["i"])("div",m,[Object(s["k"])(w,{id:"requisitesPhone",label:"Телефон",type:"number",required:!0,modelValue:n.data.phone_number,"onUpdate:modelValue":t[7]||(t[7]=function(e){return n.data.phone_number=e})},null,8,["modelValue"])]),Object(s["i"])("div",_,[Object(s["k"])(w,{id:"requisitesEmail",type:"email",label:"Электронная почта",required:!0,modelValue:n.data.email,"onUpdate:modelValue":t[8]||(t[8]=function(e){return n.data.email=e})},null,8,["modelValue"])]),Object(s["i"])("div",h,[Object(s["k"])(w,{id:"requisitesBio",label:"ФИО",modelValue:n.data.director_full_name,"onUpdate:modelValue":t[9]||(t[9]=function(e){return n.data.director_full_name=e})},null,8,["modelValue"])]),Object(s["i"])("div",v,[Object(s["k"])(w,{id:"requisitesPosition",label:"Должность",required:!0,modelValue:n.data.director_position,"onUpdate:modelValue":t[10]||(t[10]=function(e){return n.data.director_position=e})},null,8,["modelValue"])]),Object(s["i"])("div",g,[q,n.data.logo?(Object(s["x"])(),Object(s["h"])("div",k,[Object(s["i"])("div",{class:"requisites-file-loaded__close",onClick:t[14]||(t[14]=function(e){return n.data.logo=null})},V),Object(s["i"])("img",{src:n.data.logo,alt:"Logo"},null,8,J)])):(Object(s["x"])(),Object(s["h"])("div",{key:0,class:"requisites-file-field",onDragover:t[12]||(t[12]=Object(s["S"])((function(){}),["prevent"])),onDrop:t[13]||(t[13]=function(e){return l.drop("logo","requisitesLogo")})},[Object(s["i"])("label",y,[Object(s["j"])(Object(s["J"])(e.$isMobile?"":"Перетащите или ")+" ",1),Object(s["i"])("span",null,Object(s["J"])(e.$isMobile?"Выберите файл":"выберите"),1),Object(s["j"])(" "+Object(s["J"])(e.$isMobile?"":"файл")+" ",1),Object(s["i"])("input",{type:"file",id:"requisitesLogo",ref:"requisitesLogo",multiple:"",onChange:t[11]||(t[11]=function(e){return l.uploadImage("logo","requisitesLogo")}),accept:".jpg,.jpeg,.png"},null,544)])],32))]),Object(s["i"])("div",x,[C,n.data.blank_photo?(Object(s["x"])(),Object(s["h"])("div",I,[Object(s["i"])("div",{class:"requisites-file-loaded__close",onClick:t[18]||(t[18]=function(e){return n.data.blank_photo=null})},P),Object(s["i"])("img",{src:n.data.blank_photo,alt:"BlankPhoto"},null,8,U)])):(Object(s["x"])(),Object(s["h"])("div",{key:0,class:"requisites-file-field",onDragover:t[16]||(t[16]=Object(s["S"])((function(){}),["prevent"])),onDrop:t[17]||(t[17]=Object(s["S"])((function(e){return l.drop("blank_photo","requisitesBlankPhoto")}),["prevent"]))},[Object(s["i"])("label",$,[Object(s["j"])(Object(s["J"])(e.$isMobile?"":"Перетащите или ")+" ",1),Object(s["i"])("span",null,Object(s["J"])(e.$isMobile?"Выберите файл":"выберите"),1),Object(s["j"])(" "+Object(s["J"])(e.$isMobile?"":"файл")+" ",1),Object(s["i"])("input",{type:"file",id:"requisitesBlankPhoto",ref:"requisitesBlankPhoto",multiple:"",onChange:t[15]||(t[15]=function(e){return l.uploadImage("blank_photo","requisitesBlankPhoto")}),accept:".pdf,.jpg,.jpeg,.png"},null,544)])],32))])])]),Object(s["i"])("div",A,[Object(s["i"])("div",D,[Object(s["k"])(M,{type:"filled",onClick:l.addCompany},{default:Object(s["P"])((function(){return[S]})),_:1},8,["onClick"])])]),Object(s["i"])("div",B,[Object(s["i"])("div",L,[Object(s["k"])(w,{id:"requisitesSearch",placeholder:e.$isMobile?"Поиск":"Поиск по контрагенту или ИНН",search:!0,searchIcon:!0,suggestionWidth:380,suggestions:n.suggestions,onSetSuggestion:l.getCompanies,onKeypressEnter:l.getCompanies,onClear:t[19]||(t[19]=function(e){return n.query="",l.getCompanies()}),onInput:t[20]||(t[20]=function(e){return l.getCompanies("search")}),modelValue:n.query,"onUpdate:modelValue":t[21]||(t[21]=function(e){return n.query=e})},null,8,["placeholder","suggestions","onSetSuggestion","onKeypressEnter","modelValue"])])]),Object(s["i"])("div",R,[Object(s["k"])(E,{companies:n.companies,onEdit:l.editCompany},null,8,["companies","onEdit"])])]),Object(s["k"])(F,{open:n.openModal,text:"Отправлено",onClose:t[22]||(t[22]=function(e){return n.openModal=!1})},null,8,["open"])],64)}var F=i("3835"),Q=i("b85c"),T=i("ade3"),K=(i("45fc"),i("07ac"),i("99af"),i("c740"),i("4fadc"),i("d9e2"),i("d401"),i("7db0"),i("213a")),G=function(e){return Object(s["A"])("data-v-591922fa"),e=e(),Object(s["y"])(),e},W={key:0,class:"requisites-table"},z=G((function(){return Object(s["i"])("thead",null,[Object(s["i"])("tr",null,[Object(s["i"])("th",null,"Компания"),Object(s["i"])("th",{class:"upp"},"Инн"),Object(s["i"])("th",null,"Адрес"),Object(s["i"])("th",null,"Телефон"),Object(s["i"])("th",null,"Эл. почта")])],-1)})),H={key:0},N=["onClick"],X={class:"tooltip"},Y={class:"tooltip"},Z={class:"tooltip"},ee={class:"tooltip"},te={class:"tooltip"},ie={key:1,class:"requisites-table-mobile table-mobile",ref:"table"},se=["onClick"],ae={class:"table-mobile-row"},ne=G((function(){return Object(s["i"])("span",{class:"table-mobile__title requisites-table-mobile__title"}," Компания ",-1)})),le={class:"table-mobile__value"},ce={class:"table-mobile-row"},oe=G((function(){return Object(s["i"])("span",{class:"table-mobile__title requisites-table-mobile__title upp"}," Инн ",-1)})),re={class:"table-mobile__value"},de={class:"table-mobile-row"},ue=G((function(){return Object(s["i"])("span",{class:"table-mobile__title requisites-table-mobile__title"}," Адрес ",-1)})),be={class:"table-mobile__value"},je={class:"table-mobile-row"},Oe=G((function(){return Object(s["i"])("span",{class:"table-mobile__title requisites-table-mobile__title"}," Телефон ",-1)})),pe={class:"table-mobile__value"},fe={class:"table-mobile-row"},me=G((function(){return Object(s["i"])("span",{class:"table-mobile__title requisites-table-mobile__title"}," Эл. почта ",-1)})),_e={class:"table-mobile__value"};function he(e,t,i,a,n,l){var c=Object(s["G"])("tooltip");return e.$isMobile?i.companies.length&&e.$isMobile?(Object(s["x"])(),Object(s["h"])("div",ie,[(Object(s["x"])(!0),Object(s["h"])(s["b"],null,Object(s["D"])(i.companies,(function(t){return Object(s["x"])(),Object(s["h"])("div",{class:"table-mobile-column",key:t.id,onClick:function(i){return e.$emit("edit",t.id)}},[Object(s["i"])("div",ae,[ne,Object(s["i"])("span",le,Object(s["J"])(t.name),1)]),Object(s["i"])("div",ce,[oe,Object(s["i"])("span",re,Object(s["J"])(t.inn),1)]),Object(s["i"])("div",de,[ue,Object(s["i"])("span",be,Object(s["J"])(t.address_street&&t.address_street+",")+" "+Object(s["J"])(t.address_city&&t.address_city+",")+" "+Object(s["J"])(t.address_country&&t.address_country+",")+" "+Object(s["J"])(t.address_index&&t.address_index),1)]),Object(s["i"])("div",je,[Oe,Object(s["i"])("span",pe,Object(s["J"])(t.phone_number),1)]),Object(s["i"])("div",fe,[me,Object(s["i"])("span",_e,Object(s["J"])(t.email),1)])],8,se)})),128))],512)):Object(s["g"])("",!0):(Object(s["x"])(),Object(s["h"])("table",W,[z,i.companies.length?(Object(s["x"])(),Object(s["h"])("tbody",H,[(Object(s["x"])(!0),Object(s["h"])(s["b"],null,Object(s["D"])(i.companies,(function(t){return Object(s["x"])(),Object(s["h"])("tr",{key:t.id,onClick:function(i){return e.$emit("edit",t.id)}},[Object(s["i"])("td",null,[Object(s["i"])("span",null,Object(s["J"])(t.name),1),Object(s["Q"])((Object(s["x"])(),Object(s["h"])("span",X,[Object(s["j"])(Object(s["J"])(t.name),1)])),[[c]])]),Object(s["i"])("td",null,[Object(s["i"])("span",null,Object(s["J"])(t.inn),1),Object(s["Q"])((Object(s["x"])(),Object(s["h"])("span",Y,[Object(s["j"])(Object(s["J"])(t.inn),1)])),[[c]])]),Object(s["i"])("td",null,[Object(s["i"])("span",null,Object(s["J"])(t.address_street&&t.address_street+",")+" "+Object(s["J"])(t.address_city&&t.address_city+",")+" "+Object(s["J"])(t.address_country&&t.address_country+",")+" "+Object(s["J"])(t.address_index&&t.address_index),1),Object(s["Q"])((Object(s["x"])(),Object(s["h"])("span",Z,[Object(s["j"])(Object(s["J"])(t.address_street&&t.address_street+",")+" "+Object(s["J"])(t.address_city&&t.address_city+",")+" "+Object(s["J"])(t.address_country&&t.address_country+",")+" "+Object(s["J"])(t.address_index&&t.address_index),1)])),[[c]])]),Object(s["i"])("td",null,[Object(s["i"])("span",null,Object(s["J"])(t.phone_number),1),Object(s["Q"])((Object(s["x"])(),Object(s["h"])("span",ee,[Object(s["j"])(Object(s["J"])(t.phone_number),1)])),[[c]])]),Object(s["i"])("td",null,[Object(s["i"])("span",null,Object(s["J"])(t.email),1),Object(s["Q"])((Object(s["x"])(),Object(s["h"])("span",te,[Object(s["j"])(Object(s["J"])(t.email),1)])),[[c]])])],8,N)})),128))])):Object(s["g"])("",!0)]))}var ve={name:"CompanyRequisitesTable",props:{companies:{type:Array}}},ge=(i("a19e"),i("6b0d")),qe=i.n(ge);const ye=qe()(ve,[["render",he],["__scopeId","data-v-591922fa"]]);var ke=ye,we={name:"CompanyRequisites",components:{CompanyRequisitesTable:ke},computed:{user:function(){return this.$store.state.user}},data:function(){return{data:{name:"",inn:"",address_street:"",address_city:"",address_country:"",address_index:"",phone_number:"",email:"",director_full_name:"",director_position:"",logo:null,blank_photo:null},message:"",query:"",openModal:!1,edit:!1,id:"",companies:[],suggestions:[]}},setup:function(){Object(K["b"])({title:"Реквизиты компании"})},mounted:function(){this.getCompanies()},methods:{getCompanies:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=Object(T["a"])({},this.query&&"search",this.query);this.suggestions=[],this.$api.get("".concat(this.$api.defaults.API,"/company"),{params:i}).then((function(i){"search"!==t&&(e.companies=[]);var s,a=Object(Q["a"])(i.data.results);try{for(a.s();!(s=a.n()).done;){var n=s.value;"search"!==t&&e.companies.push(n),"search"==t&&e.query&&e.suggestions.push({key:n.id,value:n.id})}}catch(l){a.e(l)}finally{a.f()}}))},addCompany:function(){var e=this;Object.values(this.data).some((function(e){return!e}))||(this.edit?this.$api.patch("".concat(this.$api.defaults.API,"/company/").concat(this.id),this.data).then((function(t){var i=e.companies.findIndex((function(e){return e.id==t.data.id}));e.companies[i]=t.data;for(var s=0,a=Object.entries(e.data);s<a.length;s++){var n=Object(F["a"])(a[s],1),l=n[0];e.data[l]=""}e.edit=!1,e.openModal=!0})).catch((function(e){new Error(e)})):this.$api.post("".concat(this.$api.defaults.API,"/company"),this.data).then((function(t){e.companies.push(t.data);for(var i=0,s=Object.entries(e.data);i<s.length;i++){var a=Object(F["a"])(s[i],1),n=a[0];e.data[n]=""}e.openModal=!0})).catch((function(t){t.response.data.inn&&(e.message="Данный ИНН уже существует в нашей базе данных")})))},uploadImage:function(e,t){var i=this,s=this.$refs[t].files[0],a=new FileReader;a.readAsDataURL(s),a.onload=function(t){"logo"===e?i.data.logo=t.target.result:i.data.blank_photo=t.target.result}},drop:function(e,t){var i=window.event;i.preventDefault(),this.$refs[t].files=i.dataTransfer.files,this.uploadImage(e,t)},editCompany:function(e){var t=this.companies.find((function(t){return t.id===e}));this.id=t.id,this.edit=!0;for(var i=0,s=Object.entries(t);i<s.length;i++){var a=Object(F["a"])(s[i],1),n=a[0];this.data[n]=t[n]}}}};i("56f8");const Ve=qe()(we,[["render",E],["__scopeId","data-v-6e9fee21"]]);t["default"]=Ve},"4fadc":function(e,t,i){var s=i("23e7"),a=i("6f53").entries;s({target:"Object",stat:!0},{entries:function(e){return a(e)}})},5503:function(e,t,i){},"56f8":function(e,t,i){"use strict";i("66c0")},"66c0":function(e,t,i){},"6f53":function(e,t,i){var s=i("83ab"),a=i("e330"),n=i("df75"),l=i("fc6a"),c=i("d1e7").f,o=a(c),r=a([].push),d=function(e){return function(t){var i,a=l(t),c=n(a),d=c.length,u=0,b=[];while(d>u)i=c[u++],s&&!o(a,i)||r(b,e?[i,a[i]]:a[i]);return b}};e.exports={entries:d(!0),values:d(!1)}},"7db0":function(e,t,i){"use strict";var s=i("23e7"),a=i("b727").find,n=i("44d2"),l="find",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),s({target:"Array",proto:!0,forced:c},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(l)},a19e:function(e,t,i){"use strict";i("5503")}}]);
//# sourceMappingURL=companies.c30b9c4f.js.map