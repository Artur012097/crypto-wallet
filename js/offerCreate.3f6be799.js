(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["offerCreate"],{"0cb2":function(e,t,n){var r=n("e330"),a=n("7b0b"),c=Math.floor,l=r("".charAt),o=r("".replace),u=r("".slice),i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,s,f){var b=n+e.length,p=r.length,g=d;return void 0!==s&&(s=a(s),g=i),o(f,g,(function(a,o){var i;switch(l(o,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,n);case"'":return u(t,b);case"<":i=s[u(o,1,-1)];break;default:var d=+o;if(0===d)return a;if(d>p){var f=c(d/10);return 0===f?a:f<=p?void 0===r[f-1]?l(o,1):r[f-1]+l(o,1):a}i=r[d-1]}return void 0===i?"":i}))}},1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),l=n("d784"),o=n("44e7"),u=n("825a"),i=n("1d80"),d=n("4840"),s=n("8aa5"),f=n("50c4"),b=n("577e"),p=n("dc4a"),g=n("4dae"),j=n("14c3"),O=n("9263"),m=n("9f7f"),v=n("d039"),h=m.UNSUPPORTED_Y,y=4294967295,_=Math.min,V=[].push,x=c(/./.exec),w=c(V),C=c("".slice),k=!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));l("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=b(i(this)),l=void 0===n?y:n>>>0;if(0===l)return[];if(void 0===e)return[c];if(!o(e))return a(t,c,e,l);var u,d,s,f=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),j=0,m=new RegExp(e.source,p+"g");while(u=a(O,m,c)){if(d=m.lastIndex,d>j&&(w(f,C(c,j,u.index)),u.length>1&&u.index<c.length&&r(V,f,g(u,1)),s=u[0].length,j=d,f.length>=l))break;m.lastIndex===u.index&&m.lastIndex++}return j===c.length?!s&&x(m,"")||w(f,""):w(f,C(c,j)),f.length>l?g(f,0,l):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=i(this),l=void 0==t?void 0:p(t,e);return l?a(l,t,r,n):a(c,b(r),t,n)},function(e,r){var a=u(this),l=b(e),o=n(c,a,l,r,c!==t);if(o.done)return o.value;var i=d(a,RegExp),p=a.unicode,g=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(h?"g":"y"),O=new i(h?"^(?:"+a.source+")":a,g),m=void 0===r?y:r>>>0;if(0===m)return[];if(0===l.length)return null===j(O,l)?[l]:[];var v=0,V=0,x=[];while(V<l.length){O.lastIndex=h?0:V;var k,S=j(O,h?C(l,V):l);if(null===S||(k=_(f(O.lastIndex+(h?V:0)),l.length))===v)V=s(l,V,p);else{if(w(x,C(l,v,V)),x.length===m)return x;for(var U=1;U<=S.length-1;U++)if(w(x,S[U]),x.length===m)return x;V=v=k}}return w(x,C(l,v)),x}]}),!k,h)},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),c=n("785a"),l=n("17c2"),o=n("9112"),u=function(e){if(e&&e.forEach!==l)try{o(e,"forEach",l)}catch(t){e.forEach=l}};for(var i in a)a[i]&&u(r[i]&&r[i].prototype);u(c)},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),c=a("forEach");e.exports=c?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"25f0":function(e,t,n){"use strict";var r=n("e330"),a=n("5e77").PROPER,c=n("6eeb"),l=n("825a"),o=n("3a9b"),u=n("577e"),i=n("d039"),d=n("ad6d"),s="toString",f=RegExp.prototype,b=f[s],p=r(d),g=i((function(){return"/a/b"!=b.call({source:"a",flags:"b"})})),j=a&&b.name!=s;(g||j)&&c(RegExp.prototype,s,(function(){var e=l(this),t=u(e.source),n=e.flags,r=u(void 0===n&&o(f,e)&&!("flags"in f)?p(e):n);return"/"+t+"/"+r}),{unsafe:!0})},2860:function(e,t,n){},"4c4f":function(e,t,n){},5319:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),l=n("d784"),o=n("d039"),u=n("825a"),i=n("1626"),d=n("5926"),s=n("50c4"),f=n("577e"),b=n("1d80"),p=n("8aa5"),g=n("dc4a"),j=n("0cb2"),O=n("14c3"),m=n("b622"),v=m("replace"),h=Math.max,y=Math.min,_=c([].concat),V=c([].push),x=c("".indexOf),w=c("".slice),C=function(e){return void 0===e?e:String(e)},k=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),U=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));l("replace",(function(e,t,n){var c=S?"$":"$0";return[function(e,n){var r=b(this),c=void 0==e?void 0:g(e,v);return c?a(c,e,r,n):a(t,f(r),e,n)},function(e,a){var l=u(this),o=f(e);if("string"==typeof a&&-1===x(a,c)&&-1===x(a,"$<")){var b=n(t,l,o,a);if(b.done)return b.value}var g=i(a);g||(a=f(a));var m=l.global;if(m){var v=l.unicode;l.lastIndex=0}var k=[];while(1){var S=O(l,o);if(null===S)break;if(V(k,S),!m)break;var U=f(S[0]);""===U&&(l.lastIndex=p(o,s(l.lastIndex),v))}for(var E="",I=0,P=0;P<k.length;P++){S=k[P];for(var $=f(S[0]),q=h(y(d(S.index),o.length),0),M=[],T=1;T<S.length;T++)V(M,C(S[T]));var R=S.groups;if(g){var F=_([$],M,q,o);void 0!==R&&V(F,R);var z=f(r(a,void 0,F))}else z=j($,o,q,M,R,a);q>=I&&(E+=w(o,I,q)+z,I=q+$.length)}return E+w(o,I)}]}),!U||!k||S)},7197:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["x"])("data-v-23a026e1"),e=e(),Object(r["v"])(),e},c={class:"offer-create"},l=a((function(){return Object(r["g"])("h1",{class:"offer-create__title page__title"},[Object(r["i"])(" Коммерческое предложение №1 "),Object(r["g"])("h2",null,"30 октябра 2021")],-1)})),o={class:"offer-create-wrapper page-wrapper"},u={class:"offer-create-fields fields"},i={class:"offer-create-fields-row fields-row"},d={class:"offer-create-fields-row fields-row"},s={class:"offer-create-fields-row fields-row _area"},f={class:"offer-create-fields-row fields-row"},b={class:"offer-create-fields-row fields-row"},p={class:"offer-create-fields-row fields-row"},g={class:"offer-create-fields-row fields-row _validy"},j={class:"offer-create-fields-row fields-row _area"},O={class:"offer-create-fields-row fields-row"},m={class:"offer-create-products"},v=a((function(){return Object(r["g"])("h5",{class:"offer-create-products__title"},"Продукция",-1)})),h={class:"offer-create-products-row article-row"},y={class:"offer-create-products-field article-row-field"},_={class:"offer-create-products-add article-row-button"},V=Object(r["i"])(" Добавить "),x=a((function(){return Object(r["g"])("h5",{class:"offer-create-company__title"},"Выбрать компанию",-1)})),w={class:"offer-create-company__select"},C={class:"offer-create-type"},k=a((function(){return Object(r["g"])("h5",{class:"offer-create-type__title"},"Сохранить",-1)})),S={class:"offer-create-types"},U={class:"base-check"},E=a((function(){return Object(r["g"])("label",{for:"offerCreatePdf",class:"upp"}," pdf ",-1)})),I={class:"base-check upp _excel"},P=a((function(){return Object(r["g"])("label",{for:"offerCreateExcel"}," Excel ",-1)})),$={class:"offer-create-type _get-ready"},q=a((function(){return Object(r["g"])("h5",{class:"offer-create-type__title _get-ready"},"Подготовить",-1)})),M={class:"offer-create-types _get-ready"},T={class:"base-check"},R=a((function(){return Object(r["g"])("label",{for:"offerReadyTz",class:"upp"}," тз ",-1)})),F={class:"base-check upp _ru"},z=a((function(){return Object(r["g"])("label",{for:"offerReadyRu",class:"upp"}," ру ",-1)})),N={key:0,class:"offer-create-tzType"},A=a((function(){return Object(r["g"])("h6",null,"Тип",-1)})),B={class:"base-check radio"},L=a((function(){return Object(r["g"])("label",{for:"offerCreateKtru",class:"upp"}," ктру ",-1)})),D={class:"base-check radio"},K=a((function(){return Object(r["g"])("label",{for:"offerCreateTu",class:"upp"}," ту ",-1)})),H={class:"base-check radio"},J=a((function(){return Object(r["g"])("label",{for:"offerCreateKtrus"},[Object(r["g"])("span",{class:"upp"},"ктру"),Object(r["i"])(" сокр. ")],-1)})),G={class:"offer-create-actions page-buttons"},Y={class:"offer-create__send"},Q=Object(r["i"])(" Отправить "),W={class:"offer-create__save"},X=Object(r["i"])(" Сохранить "),Z={class:"offer-create__dl"},ee=Object(r["i"])(" Скачать ");function te(e,t,n,a,te,ne){var re=Object(r["C"])("base-input"),ae=Object(r["C"])("base-textarea"),ce=Object(r["C"])("base-button"),le=Object(r["C"])("offer-create-table"),oe=Object(r["C"])("base-select");return Object(r["u"])(),Object(r["f"])("section",c,[l,Object(r["g"])("div",o,[Object(r["g"])("div",u,[Object(r["g"])("div",i,[Object(r["j"])(re,{label:"Контрагент",id:"offerCreateConterparty",suggestions:te.suggestions,search:!0,onSetSuggestion:t[0]||(t[0]=function(e){return te.conterparty=e}),modelValue:te.conterparty,"onUpdate:modelValue":t[1]||(t[1]=function(e){return te.conterparty=e})},null,8,["suggestions","modelValue"])]),Object(r["g"])("div",d,[Object(r["j"])(re,{label:"ИНН",id:"offerCreateInn",disbled:!0,disabled:te.inn&&!0,readonly:te.inn&&!0,modelValue:te.inn,"onUpdate:modelValue":t[2]||(t[2]=function(e){return te.inn=e})},null,8,["disabled","readonly","modelValue"])]),Object(r["g"])("div",s,[Object(r["j"])(ae,{label:"Адрес",id:"offerCreateAddress",disabled:te.address&&!0,readonly:te.address&&!0,modelValue:te.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return te.address=e})},null,8,["disabled","readonly","modelValue"])]),Object(r["g"])("div",f,[Object(r["j"])(re,{label:"Телефон",id:"offerCreatePhone",disabled:te.phone&&!0,readonly:te.phone&&!0,modelValue:te.phone,"onUpdate:modelValue":t[4]||(t[4]=function(e){return te.phone=e})},null,8,["disabled","readonly","modelValue"])]),Object(r["g"])("div",b,[Object(r["j"])(re,{label:"Электронная почта",id:"offerCreateEmail",disabled:te.email&&!0,readonly:te.email&&!0,modelValue:te.email,"onUpdate:modelValue":t[5]||(t[5]=function(e){return te.email=e})},null,8,["disabled","readonly","modelValue"])]),Object(r["g"])("div",p,[Object(r["j"])(re,{label:"Контактное лицо",id:"offerCreateContact",disabled:te.contact&&!0,readonly:te.contact&&!0,modelValue:te.contact,"onUpdate:modelValue":t[6]||(t[6]=function(e){return te.contact=e})},null,8,["disabled","readonly","modelValue"])]),Object(r["g"])("div",g,[Object(r["j"])(re,{label:"Срок действия",short:!0,id:"offerCreateValidy",disabled:te.validy&&!0,readonly:te.validy&&!0,modelValue:te.validy,"onUpdate:modelValue":t[7]||(t[7]=function(e){return te.validy=e})},null,8,["disabled","readonly","modelValue"])]),Object(r["g"])("div",j,[Object(r["j"])(re,{label:"Конечный заказчик",id:"offerCreateEndCustomer",suggestions:te.suggestions,search:!0,onSetSuggestion:t[8]||(t[8]=function(e){return te.endCustomer=e}),modelValue:te.endCustomer,"onUpdate:modelValue":t[9]||(t[9]=function(e){return te.endCustomer=e})},null,8,["suggestions","modelValue"])]),Object(r["g"])("div",O,[Object(r["j"])(re,{label:"Регион",id:"offerCreateRegion",disabled:te.region&&!0,readonly:te.region&&!0,modelValue:te.region,"onUpdate:modelValue":t[10]||(t[10]=function(e){return te.region=e})},null,8,["disabled","readonly","modelValue"])])]),Object(r["g"])("div",m,[v,Object(r["g"])("div",h,[Object(r["g"])("div",y,[Object(r["j"])(re,{id:"offerCreateConterparty",placeholder:"Артикул или наименование",search:!0,suggestions:te.suggestions,onSetSuggestion:t[11]||(t[11]=function(e){return te.productsSearch=e}),modelValue:te.productsSearch,"onUpdate:modelValue":t[12]||(t[12]=function(e){return te.productsSearch=e})},null,8,["suggestions","modelValue"])]),Object(r["g"])("div",_,[Object(r["j"])(ce,{type:"outlined",onClicked:ne.addProduct},{default:Object(r["L"])((function(){return[V]})),_:1},8,["onClicked"])])]),Object(r["j"])(le,{products:te.products,onRemoveProduct:ne.removeProduct},null,8,["products","onRemoveProduct"])]),Object(r["g"])("div",{class:Object(r["p"])(["offer-create-company",{filled:te.products.length}])},[x,Object(r["g"])("div",w,[Object(r["j"])(oe,{options:te.companies,modelValue:te.company,"onUpdate:modelValue":t[13]||(t[13]=function(e){return te.company=e}),borderOnly:!0},null,8,["options","modelValue"])])],2),Object(r["g"])("div",C,[k,Object(r["g"])("div",S,[Object(r["g"])("div",U,[Object(r["M"])(Object(r["g"])("input",{type:"checkbox",id:"offerCreatePdf","onUpdate:modelValue":t[14]||(t[14]=function(e){return te.pdf=e})},null,512),[[r["H"],te.pdf]]),E]),Object(r["g"])("div",I,[Object(r["M"])(Object(r["g"])("input",{type:"checkbox",id:"offerCreateExcel","onUpdate:modelValue":t[15]||(t[15]=function(e){return te.excel=e})},null,512),[[r["H"],te.excel]]),P])])]),Object(r["g"])("div",$,[q,Object(r["g"])("div",M,[Object(r["g"])("div",T,[Object(r["M"])(Object(r["g"])("input",{type:"checkbox",id:"offerReadyTz","onUpdate:modelValue":t[16]||(t[16]=function(e){return te.tz=e})},null,512),[[r["H"],te.tz]]),R]),Object(r["g"])("div",F,[Object(r["M"])(Object(r["g"])("input",{type:"checkbox",id:"offerReadyRu","onUpdate:modelValue":t[17]||(t[17]=function(e){return te.ru=e})},null,512),[[r["H"],te.ru]]),z])]),te.tz?(Object(r["u"])(),Object(r["f"])("div",N,[A,Object(r["g"])("div",null,[Object(r["g"])("div",B,[Object(r["M"])(Object(r["g"])("input",{type:"radio",id:"offerCreateKtru",value:"ktru","onUpdate:modelValue":t[18]||(t[18]=function(e){return te.tzType=e})},null,512),[[r["I"],te.tzType]]),L]),Object(r["g"])("div",D,[Object(r["M"])(Object(r["g"])("input",{type:"radio",id:"offerCreateTu",value:"tu","onUpdate:modelValue":t[19]||(t[19]=function(e){return te.tzType=e})},null,512),[[r["I"],te.tzType]]),K]),Object(r["g"])("div",H,[Object(r["M"])(Object(r["g"])("input",{type:"radio",id:"offerCreateKtrus",value:"ktrus","onUpdate:modelValue":t[20]||(t[20]=function(e){return te.tzType=e})},null,512),[[r["I"],te.tzType]]),J])])])):Object(r["e"])("",!0)])]),Object(r["g"])("div",G,[Object(r["g"])("div",Y,[Object(r["j"])(ce,{type:"filled"},{default:Object(r["L"])((function(){return[Q]})),_:1})]),Object(r["g"])("div",W,[Object(r["j"])(ce,{type:"outlined"},{default:Object(r["L"])((function(){return[X]})),_:1})]),Object(r["g"])("div",Z,[Object(r["j"])(ce,{type:"outlined"},{default:Object(r["L"])((function(){return[ee]})),_:1})])])])}n("c740"),n("a434");var ne=n("2141"),re=["for"],ae=["id","name","required","disabled","readonly","placeholder","value","minLength","maxlength"],ce={key:1,class:"based-textarea__msg"};function le(e,t,n,a,c,l){return Object(r["u"])(),Object(r["f"])("div",{class:Object(r["p"])(["based-textarea",{"based-textarea-error":n.message,"based-textarea-row":n.label}])},[n.label?(Object(r["u"])(),Object(r["f"])("label",{key:0,for:n.id},Object(r["F"])(n.label),9,re)):Object(r["e"])("",!0),Object(r["g"])("textarea",{ref:"textarea",class:Object(r["p"])({error:n.error}),id:n.id,name:n.id,required:n.required,disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,value:n.modelValue,minLength:n.minLength?n.minLength:"",maxlength:n.maxLength?n.maxLength:"",onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value),e.$emit("input")}),onFocus:t[1]||(t[1]=function(t){return e.$emit("focus")}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")}),onClick:t[3]||(t[3]=function(t){return e.$emit("click")}),onKeyup:[t[4]||(t[4]=Object(r["N"])((function(t){return e.$emit("keyupEnter")}),["enter"])),t[5]||(t[5]=function(t){return e.$emit("keyup")})]},null,42,ae),n.error?(Object(r["u"])(),Object(r["f"])("span",ce,Object(r["F"])(n.message),1)):Object(r["e"])("",!0)],2)}n("a9e3");var oe={name:"BaseTextarea",props:{id:{type:String},label:{type:String,default:""},error:{type:Boolean,default:!1},required:{type:Boolean},message:{type:String,default:""},placeholder:{type:String,default:""},modelValue:{type:[String,Number],required:!0},minLength:{type:Number},maxLength:{type:Number},disabled:{type:Boolean},readonly:{type:Boolean}},methods:{},emits:["update:modelValue","clear","input","focus","blur","click","keyupEnter","keyup"]},ue=(n("fed8"),n("6b0d")),ie=n.n(ue);const de=ie()(oe,[["render",le],["__scopeId","data-v-fba96a7a"]]);var se=de,fe=n("30a8"),be=n("be12"),pe=(n("b0c0"),n("c8de")),ge=n.n(pe),je=function(e){return Object(r["x"])("data-v-ab91bd7a"),e=e(),Object(r["v"])(),e},Oe={key:0,class:"offer-create-table"},me=je((function(){return Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Артикул"),Object(r["g"])("th",null,"Наименование"),Object(r["g"])("th",null,"Цена"),Object(r["g"])("th",null,"Кол-во"),Object(r["g"])("th",null,"Скидка"),Object(r["g"])("th",null,"Стоимость"),Object(r["g"])("th")])],-1)})),ve={key:0},he={class:"tooltip"},ye={class:"tooltip"},_e={class:"no-wrap"},Ve={class:"no-wrap"},xe={class:"no-wrap"},we={class:"tooltip"},Ce={class:"no-wrap"},ke=["onClick"],Se=je((function(){return Object(r["g"])("img",{src:ge.a,alt:"Remove"},null,-1)})),Ue=[Se],Ee={key:1,class:"offer-create-table-mobile table-mobile",ref:"table"},Ie=["onClick"],Pe=je((function(){return Object(r["g"])("img",{src:ge.a,alt:"Remove"},null,-1)})),$e=[Pe],qe={class:"table-mobile-row"},Me=je((function(){return Object(r["g"])("span",{class:"table-mobile__title"}," Артикул ",-1)})),Te={class:"table-mobile__value"},Re={class:"table-mobile-row"},Fe=je((function(){return Object(r["g"])("span",{class:"table-mobile__title"}," Наим-ие ",-1)})),ze={class:"table-mobile__value"},Ne={class:"table-mobile-row"},Ae=je((function(){return Object(r["g"])("span",{class:"table-mobile__title"}," Цена ",-1)})),Be={class:"table-mobile__value"},Le={class:"table-mobile-row"},De=je((function(){return Object(r["g"])("span",{class:"table-mobile__title"}," Кол-во ",-1)})),Ke={class:"table-mobile__value"},He={class:"table-mobile-row"},Je=je((function(){return Object(r["g"])("span",{class:"table-mobile__title"}," Скидка ",-1)})),Ge={class:"table-mobile__value"},Ye={class:"table-mobile-row"},Qe=je((function(){return Object(r["g"])("span",{class:"table-mobile__title"}," Стоимость ",-1)})),We={class:"table-mobile__value"},Xe={key:2,class:"offer-create-price"},Ze={class:"offer-create-price__discount"},et=je((function(){return Object(r["g"])("span",null," Скидка ",-1)})),tt={class:"offer-create-price__total"},nt=je((function(){return Object(r["g"])("span",null," Общая стоимость ",-1)}));function rt(e,t,n,a,c,l){var o=Object(r["C"])("base-input");return Object(r["u"])(),Object(r["f"])(r["a"],null,[e.$isMobile?n.products.length&&e.$isMobile?(Object(r["u"])(),Object(r["f"])("div",Ee,[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(n.products,(function(t,n){return Object(r["u"])(),Object(r["f"])("div",{class:"table-mobile-column",key:n},[Object(r["g"])("span",{class:"_remove",onClick:function(){e.$emit("removeProduct",t.id)}},$e,8,Ie),Object(r["g"])("div",qe,[Me,Object(r["g"])("span",Te,Object(r["F"])(t.article),1)]),Object(r["g"])("div",Re,[Fe,Object(r["g"])("span",ze,Object(r["F"])(t.name),1)]),Object(r["g"])("div",Ne,[Ae,Object(r["g"])("span",Be,[Object(r["j"])(o,{type:"text",tableInput:!0,modelValue:t.price,"onUpdate:modelValue":function(e){return t.price=e}},null,8,["modelValue","onUpdate:modelValue"])])]),Object(r["g"])("div",Le,[De,Object(r["g"])("span",Ke,[Object(r["j"])(o,{type:"text",tableInput:!0,modelValue:t.quantity,"onUpdate:modelValue":function(e){return t.quantity=e}},null,8,["modelValue","onUpdate:modelValue"])])]),Object(r["g"])("div",He,[Je,Object(r["g"])("span",Ge,[Object(r["j"])(o,{type:"text",tableInput:!0,modelValue:t.discount,"onUpdate:modelValue":function(e){return t.discount=e}},null,8,["modelValue","onUpdate:modelValue"])])]),Object(r["g"])("div",Ye,[Qe,Object(r["g"])("span",We,Object(r["F"])(l.validateNumberString(l.price(t.price)*l.quantity(t.quantity)))+",00₽ ",1)])])})),128))],512)):Object(r["e"])("",!0):(Object(r["u"])(),Object(r["f"])("table",Oe,[me,n.products.length?(Object(r["u"])(),Object(r["f"])("tbody",ve,[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(n.products,(function(t,n){return Object(r["u"])(),Object(r["f"])("tr",{key:n},[Object(r["g"])("td",null,[Object(r["g"])("span",null,Object(r["F"])(t.article),1),Object(r["g"])("span",he,Object(r["F"])(t.article),1)]),Object(r["g"])("td",null,[Object(r["g"])("span",null,Object(r["F"])(t.name),1),Object(r["g"])("span",ye,Object(r["F"])(t.name),1)]),Object(r["g"])("td",_e,[Object(r["j"])(o,{type:"text",tableInput:!0,modelValue:t.price,"onUpdate:modelValue":function(e){return t.price=e}},null,8,["modelValue","onUpdate:modelValue"])]),Object(r["g"])("td",Ve,[Object(r["j"])(o,{type:"text",tableInput:!0,modelValue:t.quantity,"onUpdate:modelValue":function(e){return t.quantity=e}},null,8,["modelValue","onUpdate:modelValue"])]),Object(r["g"])("td",xe,[Object(r["j"])(o,{type:"text",tableInput:!0,modelValue:t.discount,"onUpdate:modelValue":function(e){return t.discount=e}},null,8,["modelValue","onUpdate:modelValue"])]),Object(r["g"])("td",null,[Object(r["g"])("span",null,Object(r["F"])(l.validateNumberString(l.price(t.price)*l.quantity(t.quantity)))+",00 ₽ ",1),Object(r["g"])("span",we,Object(r["F"])(l.validateNumberString(l.price(t.price)*l.quantity(t.quantity)))+",00 ₽ ",1)]),Object(r["g"])("td",Ce,[Object(r["g"])("span",{class:"_remove",onClick:function(){e.$emit("removeProduct",t.id)}},Ue,8,ke)])])})),128))])):Object(r["e"])("",!0)])),n.products.length?(Object(r["u"])(),Object(r["f"])("div",Xe,[Object(r["g"])("div",null,[Object(r["g"])("div",Ze,[et,Object(r["g"])("span",null,Object(r["F"])(l.validateNumberString(l.totalDiscountedPrice))+",00 ₽ ",1)]),Object(r["g"])("div",tt,[nt,Object(r["g"])("span",null,Object(r["F"])(l.validateNumberString(l.totalPrice-l.totalDiscountedPrice))+",00 ₽ ",1)])])])):Object(r["e"])("",!0)],64)}n("fb6a"),n("d3b7"),n("159b"),n("25f0"),n("ac1f"),n("5319"),n("1276");var at=function(e){return+e.replace(/\D/g,"")},ct=function(e){return e.toString().split("").reduce((function(t,n,r){return t+n+(r%3===2&&r!==e.toString().length-1?" ":"")}),"")},lt={name:"OfferCreateTable",props:{products:{type:Array}},components:{BaseInput:ne["a"]},methods:{validateNumberString:ct},computed:{price:function(){return function(e){return at(e.slice(0,-4))}},quantity:function(){return function(e){return at(e)}},totalDiscountedPrice:function(){var e=0;return console.log(),this.products.forEach((function(t){return e+=at(t.price.slice(0,-4))*at(t.quantity)*at(t.discount)/100})),e},totalPrice:function(){var e=0;return this.products.forEach((function(t){return e+=at(t.price.slice(0,-4))*at(t.quantity)})),console.log(e.toString()),e.toString()}},emits:["removeProduct"]};n("81cc");const ot=ie()(lt,[["render",rt],["__scopeId","data-v-ab91bd7a"]]);var ut=ot,it={components:{BaseInput:ne["a"],BaseTextarea:se,BaseButton:fe["a"],BaseSelect:be["a"],OfferCreateTable:ut},data:function(){return{conterparty:"",inn:"",address:"",phone:"",email:"",contact:"",validy:"",endCustomer:"",region:"",pdf:!1,excel:!1,tz:!1,ru:!1,tzType:"",ready:"",productsSearch:"",companies:[{key:"asdad",value:"Aasdads"},{key:"asdasffefsfd",value:"Fefef"},{key:"dwede",value:"Gewfwef"}],products:[{id:1,article:"EP.01",name:"Помпа ирригационная эндоскопическая ENDOMATE PUMP",price:"268 900,00 ₽",quantity:"1 шт",discount:"30%"},{id:2,article:"EM.CO2.01",name:"Эндоскопический инсуффлятор углекислого газа ENDOMATE C02",price:"542 750,00 ₽",quantity:"1 шт",discount:"30%"}],company:"",suggestions:["8/21-ES","7/21-ES","6/21-ES","5/21-ES"]}},methods:{addProduct:function(){console.log("addProduct")},removeProduct:function(e){console.log(e);var t=this.products.findIndex((function(t){return t.id==e}));this.products.splice(t,1)}}};n("9835");const dt=ie()(it,[["render",te],["__scopeId","data-v-23a026e1"]]);t["default"]=dt},"81cc":function(e,t,n){"use strict";n("4c4f")},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8dbd":function(e,t,n){},9835:function(e,t,n){"use strict";n("2860")},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),c=n("23cb"),l=n("5926"),o=n("07fa"),u=n("7b0b"),i=n("65f0"),d=n("8418"),s=n("1dde"),f=s("splice"),b=a.TypeError,p=Math.max,g=Math.min,j=9007199254740991,O="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,r,a,s,f,m,v=u(this),h=o(v),y=c(e,h),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=h-y):(n=_-2,r=g(p(l(t),0),h-y)),h+n-r>j)throw b(O);for(a=i(v,r),s=0;s<r;s++)f=y+s,f in v&&d(a,s,v[f]);if(a.length=r,n<r){for(s=y;s<h-r;s++)f=s+r,m=s+n,f in v?v[m]=v[f]:delete v[m];for(s=h;s>h-r+n;s--)delete v[s-1]}else if(n>r)for(s=h-r;s>y;s--)f=s+r-1,m=s+n-1,f in v?v[m]=v[f]:delete v[m];for(s=0;s<n;s++)v[s+y]=arguments[s+2];return v.length=h-r+n,a}})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},c740:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").findIndex,c=n("44d2"),l="findIndex",o=!0;l in[]&&Array(1)[l]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c(l)},fed8:function(e,t,n){"use strict";n("8dbd")}}]);
//# sourceMappingURL=offerCreate.3f6be799.js.map