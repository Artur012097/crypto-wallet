(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["endCustomers"],{"02dc":function(e,t,n){"use strict";n("6b3c")},"07ac":function(e,t,n){var c=n("23e7"),s=n("6f53").values;c({target:"Object",stat:!0},{values:function(e){return s(e)}})},"4fadc":function(e,t,n){var c=n("23e7"),s=n("6f53").entries;c({target:"Object",stat:!0},{entries:function(e){return s(e)}})},"582d":function(e,t,n){},"6b3c":function(e,t,n){},"6c61":function(e,t,n){"use strict";n("582d")},"6f53":function(e,t,n){var c=n("83ab"),s=n("e330"),a=n("df75"),o=n("fc6a"),i=n("d1e7").f,l=s(i),u=s([].push),r=function(e){return function(t){var n,s=o(t),i=a(s),r=i.length,d=0,b=[];while(r>d)n=i[d++],c&&!l(s,n)||u(b,e?[n,s[n]]:s[n]);return b}};e.exports={entries:r(!0),values:r(!1)}},"7db0":function(e,t,n){"use strict";var c=n("23e7"),s=n("b727").find,a=n("44d2"),o="find",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),c({target:"Array",proto:!0,forced:i},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a(o)},ed05:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),s=function(e){return Object(c["A"])("data-v-0681f7d7"),e=e(),Object(c["y"])(),e},a={class:"end-customer"},o=s((function(){return Object(c["i"])("h1",{class:"end-customer__title page__title"},"Конечный заказчик",-1)})),i={class:"end-customer-content page-wrapper"},l={class:"end-customer-fields"},u={class:"end-customer-fields-row fields-row"},r={class:"end-customer-fields-row fields-row _inn"},d={class:"end-customer-fields-row fields-row"},b={class:"end-customer-fields-row fields-row _city"},j={class:"end-customer-fields-row fields-row _bio"},O={class:"end-customer-buttons page-buttons _save"},m={class:"end-customer-buttons__send _save__button"},f=Object(c["j"])("Сохранить"),p={class:"end-customer-search page-wrapper"},h={class:"end-customer-search-field"},_={class:"page-wrapper"};function g(e,t,n,s,g,v){var y=Object(c["F"])("base-input"),C=Object(c["F"])("base-button"),k=Object(c["F"])("end-customer-table"),w=Object(c["F"])("base-modal");return Object(c["x"])(),Object(c["h"])(c["b"],null,[Object(c["i"])("section",a,[o,Object(c["i"])("div",i,[Object(c["i"])("div",l,[Object(c["i"])("div",u,[Object(c["k"])(y,{id:"end-customer-customer",label:"Конечный заказчик",required:!0,modelValue:g.data.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.data.name=e})},null,8,["modelValue"])]),Object(c["i"])("div",r,[Object(c["k"])(y,{label:"ИНН",id:"end-customer-inn",type:"number",message:g.message,onInput:t[1]||(t[1]=function(e){return g.message=""}),required:!0,modelValue:g.data.inn,"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.data.inn=e})},null,8,["message","modelValue"])]),Object(c["i"])("div",d,[Object(c["k"])(y,{label:"Регион",id:"end-customer-region",required:!0,modelValue:g.data.region,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.data.region=e})},null,8,["modelValue"])]),Object(c["i"])("div",b,[Object(c["k"])(y,{label:"Город",id:"end-customer-city",required:!0,modelValue:g.data.city,"onUpdate:modelValue":t[4]||(t[4]=function(e){return g.data.city=e})},null,8,["modelValue"])]),Object(c["i"])("div",j,[Object(c["k"])(y,{label:"ФИО заведующего эндоскопии",id:"end-customer",placeholder:"Если есть",labelStyle:{transform:"translateY(10px)"},required:!0,modelValue:g.data.head_of_endoscopy_full_name,"onUpdate:modelValue":t[5]||(t[5]=function(e){return g.data.head_of_endoscopy_full_name=e})},null,8,["labelStyle","modelValue"])])])]),Object(c["i"])("div",O,[Object(c["i"])("div",m,[Object(c["k"])(C,{type:"filled",onClicked:v.addEndCustomer},{default:Object(c["P"])((function(){return[f]})),_:1},8,["onClicked"])])]),Object(c["i"])("div",p,[Object(c["i"])("div",h,[Object(c["k"])(y,{id:"endCustomerSearch",placeholder:e.$isMobile?"Поиск":"Поиск по контрагенту или ИНН",search:!0,searchIcon:!0,suggestionWidth:380,suggestions:g.suggestions,onSetSuggestion:v.getEndCustomers,onKeypressEnter:v.getEndCustomers,onClear:t[6]||(t[6]=function(e){return g.query="",v.getEndCustomers()}),onInput:t[7]||(t[7]=function(e){return v.getEndCustomers("search")}),modelValue:g.query,"onUpdate:modelValue":t[8]||(t[8]=function(e){return g.query=e})},null,8,["placeholder","suggestions","onSetSuggestion","onKeypressEnter","modelValue"])])]),Object(c["i"])("div",_,[Object(c["k"])(k,{endCustomers:g.endCustomers,onEdit:v.editEndCustomer},null,8,["endCustomers","onEdit"])])]),Object(c["k"])(w,{open:g.openModal,text:"Отправлено",onClose:t[9]||(t[9]=function(e){return g.openModal=!1})},null,8,["open"])],64)}var v=n("3835"),y=n("b85c"),C=n("ade3"),k=(n("45fc"),n("d3b7"),n("07ac"),n("99af"),n("c740"),n("4fadc"),n("d9e2"),n("d401"),n("7db0"),n("213a")),w=function(e){return Object(c["A"])("data-v-ecf38076"),e=e(),Object(c["y"])(),e},x={key:0,class:"end-customer-table"},E=w((function(){return Object(c["i"])("thead",null,[Object(c["i"])("tr",null,[Object(c["i"])("th",null,"Конечный заказчик"),Object(c["i"])("th",{class:"upp"},"Инн"),Object(c["i"])("th",null,"Регион"),Object(c["i"])("th",null,"Город"),Object(c["i"])("th",null,"ФИО заведующего эндоскопии")])],-1)})),V={key:0},J=["onClick"],q={class:"tooltip"},$={class:"tooltip"},I={class:"tooltip"},A={class:"tooltip"},M={class:"tooltip"},S={key:1,class:"end-customer-table-mobile table-mobile",ref:"table"},U=["onClick"],Q={key:0,class:"table-mobile-row"},F=w((function(){return Object(c["i"])("span",{class:"end-customer-table-mobile__title table-mobile__title"}," Кон. заказчик ",-1)})),P={class:"table-mobile__value"},D={key:1,class:"table-mobile-row"},K=w((function(){return Object(c["i"])("span",{class:"end-customer-table-mobile__title table-mobile__title upp"}," ИНН ",-1)})),T={class:"table-mobile__value"},G={key:2,class:"table-mobile-row"},W=w((function(){return Object(c["i"])("span",{class:"end-customer-table-mobile__title table-mobile__title"}," Регион ",-1)})),Y={class:"table-mobile__value"},z={key:3,class:"table-mobile-row"},B=w((function(){return Object(c["i"])("span",{class:"end-customer-table-mobile__title table-mobile__title"}," Город ",-1)})),H={class:"table-mobile__value"},L={key:4,class:"table-mobile-row"},N=w((function(){return Object(c["i"])("span",{class:"end-customer-table-mobile__title table-mobile__title"},[Object(c["i"])("span",{class:"upp"},"фио"),Object(c["j"])(" зав. ")],-1)})),R={class:"table-mobile__value"};function X(e,t,n,s,a,o){var i=Object(c["G"])("tooltip");return e.$isMobile?n.endCustomers.length&&e.$isMobile?(Object(c["x"])(),Object(c["h"])("div",S,[(Object(c["x"])(!0),Object(c["h"])(c["b"],null,Object(c["D"])(n.endCustomers,(function(t){return Object(c["x"])(),Object(c["h"])("div",{class:"table-mobile-column",key:t.id,onClick:function(n){return e.$emit("edit",t.id)}},[t.name?(Object(c["x"])(),Object(c["h"])("div",Q,[F,Object(c["i"])("span",P,Object(c["J"])(t.name),1)])):Object(c["g"])("",!0),t.inn?(Object(c["x"])(),Object(c["h"])("div",D,[K,Object(c["i"])("span",T,Object(c["J"])(t.inn),1)])):Object(c["g"])("",!0),t.region?(Object(c["x"])(),Object(c["h"])("div",G,[W,Object(c["i"])("span",Y,Object(c["J"])(t.region),1)])):Object(c["g"])("",!0),t.city?(Object(c["x"])(),Object(c["h"])("div",z,[B,Object(c["i"])("span",H,Object(c["J"])(t.city),1)])):Object(c["g"])("",!0),t.head_of_endoscopy_full_name?(Object(c["x"])(),Object(c["h"])("div",L,[N,Object(c["i"])("span",R,Object(c["J"])(t.head_of_endoscopy_full_name),1)])):Object(c["g"])("",!0)],8,U)})),128))],512)):Object(c["g"])("",!0):(Object(c["x"])(),Object(c["h"])("table",x,[E,n.endCustomers.length?(Object(c["x"])(),Object(c["h"])("tbody",V,[(Object(c["x"])(!0),Object(c["h"])(c["b"],null,Object(c["D"])(n.endCustomers,(function(t){return Object(c["x"])(),Object(c["h"])("tr",{key:t.id,onClick:function(n){return e.$emit("edit",t.id)}},[Object(c["i"])("td",null,[Object(c["i"])("span",null,Object(c["J"])(t.name),1),Object(c["Q"])((Object(c["x"])(),Object(c["h"])("span",q,[Object(c["j"])(Object(c["J"])(t.name),1)])),[[i]])]),Object(c["i"])("td",null,[Object(c["i"])("span",null,Object(c["J"])(t.inn),1),Object(c["Q"])((Object(c["x"])(),Object(c["h"])("span",$,[Object(c["j"])(Object(c["J"])(t.inn),1)])),[[i]])]),Object(c["i"])("td",null,[Object(c["i"])("span",null,Object(c["J"])(t.region),1),Object(c["Q"])((Object(c["x"])(),Object(c["h"])("span",I,[Object(c["j"])(Object(c["J"])(t.region),1)])),[[i]])]),Object(c["i"])("td",null,[Object(c["i"])("span",null,Object(c["J"])(t.city),1),Object(c["Q"])((Object(c["x"])(),Object(c["h"])("span",A,[Object(c["j"])(Object(c["J"])(t.city),1)])),[[i]])]),Object(c["i"])("td",null,[Object(c["i"])("span",null,Object(c["J"])(t.head_of_endoscopy_full_name),1),Object(c["Q"])((Object(c["x"])(),Object(c["h"])("span",M,[Object(c["j"])(Object(c["J"])(t.head_of_endoscopy_full_name),1)])),[[i]])])],8,J)})),128))])):Object(c["g"])("",!0)]))}var Z={name:"EndCustomersTable",props:{endCustomers:{type:Array}}},ee=(n("02dc"),n("6b0d")),te=n.n(ee);const ne=te()(Z,[["render",X],["__scopeId","data-v-ecf38076"]]);var ce=ne,se={name:"EndCustomer",components:{EndCustomerTable:ce},computed:{user:function(){return this.$store.state.user}},data:function(){return{data:{name:"",inn:"",region:"",city:"",head_of_endoscopy_full_name:""},message:"",query:"",openModal:!1,edit:!1,id:"",endCustomers:[],suggestions:[]}},setup:function(){Object(k["b"])({title:"Конечный заказчик"})},mounted:function(){this.getEndCustomers()},methods:{getEndCustomers:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=Object(C["a"])({},this.query&&"search",this.query);this.suggestions=[],this.$api.get("".concat(this.$api.defaults.API,"/end-customer"),{params:n}).then((function(n){console.log(n.data.results),"search"!==t&&(e.endCustomers=[]);var c,s=Object(y["a"])(n.data.results);try{for(s.s();!(c=s.n()).done;){var a=c.value;"search"!==t&&e.endCustomers.push(a),"search"==t&&e.query&&e.suggestions.push({key:a.id,value:a.id})}}catch(o){s.e(o)}finally{s.f()}}))},addEndCustomer:function(){var e=this;Object.values(this.data).some((function(e){return!e}))||(this.edit?this.$api.patch("".concat(this.$api.defaults.API,"/end-customer/").concat(this.id),this.data).then((function(t){var n=e.endCustomers.findIndex((function(e){return e.id==t.data.id}));e.endCustomers[n]=t.data;for(var c=0,s=Object.entries(e.data);c<s.length;c++){var a=Object(v["a"])(s[c],1),o=a[0];e.data[o]=""}e.edit=!1,e.openModal=!0})).catch((function(e){new Error(e)})):this.$api.post("".concat(this.$api.defaults.API,"/end-customer"),this.data).then((function(t){e.endCustomers.push(t.data);for(var n=0,c=Object.entries(e.data);n<c.length;n++){var s=Object(v["a"])(c[n],1),a=s[0];e.data[a]=""}e.openModal=!0})).catch((function(t){t.response.data.inn&&(e.message="Данный ИНН уже существует в нашей базе данных")})))},editEndCustomer:function(e){var t=this.endCustomers.find((function(t){return t.id===e}));this.id=t.id,this.edit=!0;for(var n=0,c=Object.entries(t);n<c.length;n++){var s=Object(v["a"])(c[n],1),a=s[0];this.data[a]=t[a]}}}};n("6c61");const ae=te()(se,[["render",g],["__scopeId","data-v-0681f7d7"]]);t["default"]=ae}}]);
//# sourceMappingURL=endCustomers.db09f586.js.map