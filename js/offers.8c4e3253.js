(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["offers"],{"0e34":function(e,t,n){e.exports=n.p+"img/excel.847a47e8.svg"},1148:function(e,t,n){"use strict";var o=n("da84"),c=n("5926"),r=n("577e"),a=n("1d80"),l=o.RangeError;e.exports=function(e){var t=r(a(this)),n="",o=c(e);if(o<0||o==1/0)throw l("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},"1aea":function(e,t,n){e.exports=n.p+"img/pdf.ad036780.svg"},"1d60":function(e,t,n){e.exports=n.p+"img/filters.393d9f5b.svg"},"209a":function(e,t,n){e.exports=n.p+"img/ru.9a99cccd.svg"},2532:function(e,t,n){"use strict";var o=n("23e7"),c=n("e330"),r=n("5a34"),a=n("1d80"),l=n("577e"),i=n("ab13"),s=c("".indexOf);o({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~s(l(a(this)),l(r(e)),arguments.length>1?arguments[1]:void 0)}})},"43b9":function(e,t,n){"use strict";n("55d6")},"44e7":function(e,t,n){var o=n("861d"),c=n("c6b6"),r=n("b622"),a=r("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==c(e))}},"55d6":function(e,t,n){},"5a34":function(e,t,n){var o=n("da84"),c=n("44e7"),r=o.TypeError;e.exports=function(e){if(c(e))throw r("The method doesn't accept regular expressions");return e}},"8dbe":function(e,t,n){e.exports=n.p+"img/tz.3a9a68e5.svg"},ab13:function(e,t,n){var o=n("b622"),c=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[c]=!1,"/./"[e](t)}catch(o){}}return!1}},b680:function(e,t,n){"use strict";var o=n("23e7"),c=n("da84"),r=n("e330"),a=n("5926"),l=n("408a"),i=n("1148"),s=n("d039"),u=c.RangeError,d=c.String,b=Math.floor,f=r(i),p=r("".slice),g=r(1..toFixed),j=function(e,t,n){return 0===t?n:t%2===1?j(e,t-1,n*e):j(e*e,t/2,n)},O=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},m=function(e,t,n){var o=-1,c=n;while(++o<6)c+=t*e[o],e[o]=c%1e7,c=b(c/1e7)},v=function(e,t){var n=6,o=0;while(--n>=0)o+=e[n],e[n]=b(o/t),o=o%t*1e7},y=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var o=d(e[t]);n=""===n?o:n+f("0",7-o.length)+o}return n},h=s((function(){return"0.000"!==g(8e-5,3)||"1"!==g(.9,0)||"1.25"!==g(1.255,2)||"1000000000000000128"!==g(0xde0b6b3a7640080,0)}))||!s((function(){g({})}));o({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,n,o,c,r=l(this),i=a(e),s=[0,0,0,0,0,0],b="",g="0";if(i<0||i>20)throw u("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return d(r);if(r<0&&(b="-",r=-r),r>1e-21)if(t=O(r*j(2,69,1))-69,n=t<0?r*j(2,-t,1):r/j(2,t,1),n*=4503599627370496,t=52-t,t>0){m(s,0,n),o=i;while(o>=7)m(s,1e7,0),o-=7;m(s,j(10,o,1),0),o=t-1;while(o>=23)v(s,1<<23),o-=23;v(s,1<<o),m(s,1,1),v(s,2),g=y(s)}else m(s,0,n),m(s,1<<-t,0),g=y(s)+f("0",i);return i>0?(c=g.length,g=b+(c<=i?"0."+f("0",i-c)+g:p(g,0,c-i)+"."+p(g,c-i))):g=b+g,g}})},c6d9:function(e,t,n){},caad:function(e,t,n){"use strict";var o=n("23e7"),c=n("4d64").includes,r=n("44d2");o({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},da3f:function(e,t,n){"use strict";n.r(t);n("fb6a");var o=n("7a23"),c=n("1d60"),r=n.n(c),a=n("c8de"),l=n.n(a),i=function(e){return Object(o["x"])("data-v-55373b20"),e=e(),Object(o["v"])(),e},s={class:"offer"},u=i((function(){return Object(o["g"])("h1",{class:"offer__title page__title"},"Коммерческое предложение",-1)})),d={class:"offer-header__buttons"},b={class:"offer_create"},f=Object(o["i"])(" Создать "),p=i((function(){return Object(o["g"])("span",{class:"upp",style:{"margin-left":"2px"}}," кп",-1)})),g={class:"offer_copy"},j=Object(o["i"])(" Копировать "),O={class:"offer-search"},m={key:0,class:"offer-filters__button"},v={key:0,class:"offer-filters__count"},y=i((function(){return Object(o["g"])("img",{src:r.a,alt:"Filters"},null,-1)})),h={key:0,class:"offer-filters__close"},_={key:1,class:"offer-filters__title page__title"},w={class:"offer-filters_conterparty"},k={class:"offer-filters_region"},S={class:"offer-filters_customer"},F={class:"offer-filters_manager"},C={key:2,class:"offer-filters__apply page-buttons"},E={class:"offer-filters__apply-button"},T=Object(o["i"])(" Применить "),x={class:"offer-content page-wrapper"};function V(e,t,n,c,r,a){var i=Object(o["C"])("base-button"),V=Object(o["C"])("base-input"),M=Object(o["C"])("base-select"),$=Object(o["C"])("offers-table");return Object(o["u"])(),Object(o["f"])("div",s,[u,Object(o["g"])("div",{class:Object(o["p"])(["offer-header page-wrapper",{shadow:r.scrollStart}])},[Object(o["g"])("div",d,[Object(o["g"])("div",b,[Object(o["j"])(i,{type:"filled",onClicked:t[0]||(t[0]=function(t){return e.$router.push({name:"offerCreate"})})},{default:Object(o["L"])((function(){return[f,p]})),_:1})]),Object(o["g"])("div",g,[Object(o["j"])(i,{type:"outlined",onClicked:a.copy,disabled:!r.offerToCopy.length},{default:Object(o["L"])((function(){return[j]})),_:1},8,["onClicked","disabled"])])]),Object(o["g"])("div",O,[Object(o["j"])(V,{id:"offerSearch",placeholder:"Поиск по номеру КП, конечному заказчику, региону, контрагенту",search:!0,searchIcon:!0,suggestionWidth:380,suggestions:r.suggestions,onSetSuggestion:t[1]||(t[1]=function(e){return r.query=e}),onClear:a.clear,modelValue:r.query,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.query=e})},null,8,["suggestions","onClear","modelValue"])]),e.$isMobile?(Object(o["u"])(),Object(o["f"])("div",m,[r.conterparty||r.region||r.customer||r.manager?(Object(o["u"])(),Object(o["f"])("div",v," 3 ")):Object(o["e"])("",!0),Object(o["j"])(i,{type:"outlined",onClick:t[3]||(t[3]=function(t){return e.open=!0})},{default:Object(o["L"])((function(){return[y]})),_:1})])):Object(o["e"])("",!0)],2),!e.$isMobile||e.$isMobile&&e.open?(Object(o["u"])(),Object(o["f"])("div",{key:0,class:Object(o["p"])(["offer-filters page-wrapper",{open:e.showContent}])},[e.$isMobile?(Object(o["u"])(),Object(o["f"])("div",h,[Object(o["g"])("img",{src:l.a,alt:"Close",onClick:t[4]||(t[4]=function(){return e.closeDropdown&&e.closeDropdown.apply(e,arguments)})})])):Object(o["e"])("",!0),e.$isMobile?(Object(o["u"])(),Object(o["f"])("h4",_,"Фильтры")):Object(o["e"])("",!0),Object(o["g"])("div",w,[Object(o["j"])(V,{id:"offerSearch",placeholder:"Контрагент",search:!0,suggestions:r.suggestions,onSetSuggestion:t[5]||(t[5]=function(e){return r.conterparty=e}),modelValue:r.conterparty,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.conterparty=e})},null,8,["suggestions","modelValue"])]),Object(o["g"])("div",k,[Object(o["j"])(M,{options:r.regions,placeholder:"Регион",modelValue:r.region,"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.region=e})},null,8,["options","modelValue"])]),Object(o["g"])("div",S,[Object(o["j"])(M,{options:r.regions,placeholder:"Конечный заказчик",modelValue:r.customer,"onUpdate:modelValue":t[8]||(t[8]=function(e){return r.customer=e})},null,8,["options","modelValue"])]),Object(o["g"])("div",F,[Object(o["j"])(M,{options:r.regions,placeholder:"Менеджер",modelValue:r.manager,"onUpdate:modelValue":t[9]||(t[9]=function(e){return r.manager=e})},null,8,["options","modelValue"])]),e.$isMobile?(Object(o["u"])(),Object(o["f"])("div",C,[Object(o["g"])("div",E,[Object(o["j"])(i,{type:"filled",onClick:e.closeDropdown},{default:Object(o["L"])((function(){return[T]})),_:1},8,["onClick"])])])):Object(o["e"])("",!0)],2)):Object(o["e"])("",!0),Object(o["g"])("div",x,[Object(o["j"])($,{offers:r.offers.slice(0,r.count),onDownload:a.download,onCopy:t[10]||(t[10]=function(e){r.offerToCopy=e}),onScroll:t[11]||(t[11]=function(e){r.scrollStart=e>0}),onScrolled:t[12]||(t[12]=function(){r.count+=5})},null,8,["offers","onDownload"])])])}var M=n("2909"),$=(n("99af"),n("30a8")),D=n("2141"),q=n("be12"),A=n("304d"),U=(n("caad"),n("2532"),n("1aea")),I=n.n(U),R=n("0e34"),B=n.n(R),L=n("209a"),z=n.n(L),H=n("8dbe"),N=n.n(H),G=function(e){return Object(o["x"])("data-v-63d7fccd"),e=e(),Object(o["v"])(),e},J={key:0,class:"offer-table"},W=G((function(){return Object(o["g"])("thead",null,[Object(o["g"])("tr",null,[Object(o["g"])("th"),Object(o["g"])("th",null,"Номер"),Object(o["g"])("th",null,"Дата создания"),Object(o["g"])("th",null,"Стоимость"),Object(o["g"])("th",null,"Контрагент"),Object(o["g"])("th",null,"Скидка"),Object(o["g"])("th",null,"Регион"),Object(o["g"])("th",null,"Файлы")])],-1)})),P={ref:"table"},K={class:"no-wrap"},Q={class:"base-check"},X=["id","name","value","disabled"],Y=["for"],Z={class:"tooltip"},ee={class:"tooltip"},te={class:"tooltip"},ne={class:"tooltip"},oe={class:"tooltip"},ce={class:"tooltip"},re={class:"no-wrap"},ae={class:"offer-actions"},le=Object(o["h"])('<div class="offer-action _pdf" data-v-63d7fccd><img src="'+I.a+'" alt="PDF" data-v-63d7fccd></div><div class="offer-action _excel" data-v-63d7fccd><img src="'+B.a+'" alt="Excel" data-v-63d7fccd></div><div class="offer-action _ru" data-v-63d7fccd><img src="'+z.a+'" alt="Ru" data-v-63d7fccd></div>',3),ie={class:"offer-action _tz"},se=G((function(){return Object(o["g"])("img",{src:N.a,alt:"Tz"},null,-1)})),ue={class:"offer-action-dropdown"},de={class:"offer-action-dropdown-content"},be={class:"base-check radio"},fe=G((function(){return Object(o["g"])("label",{for:"ktru",class:"upp"}," ктру ",-1)})),pe={class:"base-check radio"},ge=G((function(){return Object(o["g"])("label",{for:"tu",class:"upp"}," ту ",-1)})),je={class:"base-check radio"},Oe=G((function(){return Object(o["g"])("label",{for:"ktrus",class:"upp"}," ктру сокр. ",-1)})),me=Object(o["i"])(" Скачать "),ve={key:1,class:"offer-table-mobile table-mobile",ref:"table"},ye={class:"offer-table-mobile-checkbox"},he={class:"base-check radio"},_e=["id","name","value","disabled"],we=["for"],ke={class:"table-mobile-row"},Se=G((function(){return Object(o["g"])("span",{class:"table-mobile__title"}," Номер ",-1)})),Fe={class:"table-mobile__value"},Ce={class:"table-mobile-row"},Ee=G((function(){return Object(o["g"])("span",{class:"table-mobile__title"}," Дата созд. ",-1)})),Te={class:"table-mobile__value"},xe={class:"table-mobile-row"},Ve=G((function(){return Object(o["g"])("span",{class:"table-mobile__title"}," Стоимость ",-1)})),Me={class:"table-mobile__value"},$e={class:"table-mobile-row"},De=G((function(){return Object(o["g"])("span",{class:"table-mobile__title"}," Контрагент ",-1)})),qe={class:"table-mobile__value"},Ae={class:"table-mobile-row"},Ue=G((function(){return Object(o["g"])("span",{class:"table-mobile__title"}," Скидка ",-1)})),Ie={class:"table-mobile__value"},Re={class:"table-mobile-row"},Be=G((function(){return Object(o["g"])("span",{class:"table-mobile__title"}," Регион ",-1)})),Le={class:"table-mobile__value"},ze={key:2,class:"offer-content-notFound"};function He(e,t,n,c,r,a){var l=Object(o["C"])("base-button");return n.offers.length&&!e.$isMobile?(Object(o["u"])(),Object(o["f"])("table",J,[W,Object(o["g"])("tbody",P,[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(n.offers,(function(e,n){return Object(o["u"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",K,[Object(o["g"])("div",Q,[Object(o["M"])(Object(o["g"])("input",{type:"checkbox",id:e.number,name:e.number,value:e.number,disabled:r.offerToCopy.length&&!r.offerToCopy.includes(e.number),"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.offerToCopy=e})},null,8,X),[[o["H"],r.offerToCopy]]),Object(o["g"])("label",{for:e.number},null,8,Y)])]),Object(o["g"])("td",null,[Object(o["g"])("span",null,Object(o["F"])(e.number),1),Object(o["g"])("span",Z,Object(o["F"])(e.number),1)]),Object(o["g"])("td",null,[Object(o["g"])("span",null,Object(o["F"])(e.date),1),Object(o["g"])("span",ee,Object(o["F"])(e.date),1)]),Object(o["g"])("td",null,[Object(o["g"])("span",null,Object(o["F"])(e.price)+",00 ₽ ",1),Object(o["g"])("span",te,Object(o["F"])(e.price)+",00 ₽ ",1)]),Object(o["g"])("td",null,[Object(o["g"])("span",null,Object(o["F"])(e.conterparty),1),Object(o["g"])("span",ne,Object(o["F"])(e.conterparty),1)]),Object(o["g"])("td",null,[Object(o["g"])("span",null,Object(o["F"])(e.discount)+" % ",1),Object(o["g"])("span",oe,Object(o["F"])(e.discount)+" % ",1)]),Object(o["g"])("td",null,[Object(o["g"])("span",null,Object(o["F"])(e.region),1),Object(o["g"])("span",ce,Object(o["F"])(e.region),1)]),Object(o["g"])("td",re,[Object(o["g"])("div",ae,[le,Object(o["g"])("div",ie,[se,Object(o["g"])("div",ue,[Object(o["g"])("div",de,[Object(o["g"])("div",be,[Object(o["M"])(Object(o["g"])("input",{type:"radio",id:"ktru",value:"ktru","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.downloadType=e})},null,512),[[o["I"],r.downloadType]]),fe]),Object(o["g"])("div",pe,[Object(o["M"])(Object(o["g"])("input",{type:"radio",id:"tu",value:"tu","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.downloadType=e})},null,512),[[o["I"],r.downloadType]]),ge]),Object(o["g"])("div",je,[Object(o["M"])(Object(o["g"])("input",{type:"radio",id:"ktrus",value:"ktrus","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.downloadType=e})},null,512),[[o["I"],r.downloadType]]),Oe]),Object(o["j"])(l,{type:"filled",onClicked:function(t){return a.download(e.id,r.downloadType)}},{default:Object(o["L"])((function(){return[me]})),_:2},1032,["onClicked"])])])])])])])})),128))],512)])):n.offers.length&&e.$isMobile?(Object(o["u"])(),Object(o["f"])("div",ve,[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(n.offers,(function(e,n){return Object(o["u"])(),Object(o["f"])("div",{class:"table-mobile-column",key:n},[Object(o["g"])("div",ye,[Object(o["g"])("div",he,[Object(o["M"])(Object(o["g"])("input",{type:"checkbox",id:e.number,name:e.number,value:e.number,disabled:r.offerToCopy.length&&!r.offerToCopy.includes(e.number),"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.offerToCopy=e})},null,8,_e),[[o["H"],r.offerToCopy]]),Object(o["g"])("label",{for:e.number},null,8,we)])]),Object(o["g"])("div",ke,[Se,Object(o["g"])("span",Fe,Object(o["F"])(e.number),1)]),Object(o["g"])("div",Ce,[Ee,Object(o["g"])("span",Te,Object(o["F"])(e.date),1)]),Object(o["g"])("div",xe,[Ve,Object(o["g"])("span",Me,Object(o["F"])(e.price)+",00 ₽ ",1)]),Object(o["g"])("div",$e,[De,Object(o["g"])("span",qe,Object(o["F"])(e.conterparty),1)]),Object(o["g"])("div",Ae,[Ue,Object(o["g"])("span",Ie,Object(o["F"])(e.discount)+" % ",1)]),Object(o["g"])("div",Re,[Be,Object(o["g"])("span",Le,Object(o["F"])(e.region),1)])])})),128))],512)):(Object(o["u"])(),Object(o["f"])("span",ze," Ничего не найдено "))}n("b680");var Ne={name:"OfferTable",props:{offers:{type:Array}},components:{BaseButton:$["a"]},data:function(){return{offerToCopy:[],downloadType:""}},methods:{download:function(e,t){var n={id:e,type:t};this.$emit("download",n)},onScroll:function(e){var t=e.getBoundingClientRect().height,n=e.scrollHeight,o=e.scrollTop;this.$emit("scroll",o),Math.ceil(o+t)==n.toFixed(0)&&this.$emit("scrolled")}},mounted:function(){var e=this,t=this.$refs.table;t&&t.addEventListener("scroll",(function(){e.onScroll(t)}))},watch:{offerToCopy:function(){this.$emit("copy",this.offerToCopy)}},emits:["download","scroll","scrolled","copy"]},Ge=(n("43b9"),n("6b0d")),Je=n.n(Ge);const We=Je()(Ne,[["render",He],["__scopeId","data-v-63d7fccd"]]);var Pe=We,Ke={components:{BaseButton:$["a"],BaseInput:D["a"],BaseSelect:q["a"],OffersTable:Pe},data:function(){return{query:"",conterparty:"",region:"",customer:"",manager:"",count:10,scrollStart:!1,offerToCopy:[],regions:[{key:"adsads",value:"Asdad"},{key:"ASDFR",value:"ASDFRkjhghkbjl/gkfjykguh.jbhgcfjkghkj."},{key:"eqewq",value:"ASdd"},{key:"frgg",value:"FFEFSED"},{key:"qweqweqwe",value:"FSFFD"},{key:"feewfw",value:"SFDF"},{key:"g",value:"GRASGF"},{key:"asdadadefff",value:"AEFF"}],offers:[{id:1,number:"8/21-ES",date:"25 октября 2021",price:"545 757 843",conterparty:"ООО «МГ РУС»",discount:30,region:"г. Иваново"},{id:2,number:"7/21-ES",date:"24 октября 2021",price:"333 768",conterparty:"ООО «МГ РУС»",discount:30,region:"г. Иваново"},{id:3,number:"6/21-ES",date:"25 октября 2021",price:"537 896",conterparty:"ДОРН Медицина",discount:30,region:"г. Новосибирск"},{id:4,number:"5/21-ES",date:"25 октября 2021",price:"10 000",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:5,number:"4/21-ES",date:"25 октября 2021",price:"547 678",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:6,number:"3/21-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:7,number:"5/251-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:8,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:9,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:10,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:11,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:12,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:13,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:14,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:15,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"},{id:16,number:"3/241-ES",date:"25 октября 2021",price:"478 237",conterparty:"ООО «МГ РУС» ",discount:30,region:"г. Иваново"}],suggestions:["8/21-ES","7/21-ES","6/21-ES","5/21-ES","5/21-ES","5/21-ES","5/21-ES","5/21-ES"]}},methods:{copy:function(){var e;(e=console).log.apply(e,["copy"].concat(Object(M["a"])(this.offerToCopy)))},clear:function(){this.query=""},download:function(e){console.log(e)}},mixins:[A["a"]]};n("f914");const Qe=Je()(Ke,[["render",V],["__scopeId","data-v-55373b20"]]);t["default"]=Qe},f914:function(e,t,n){"use strict";n("c6d9")}}]);
//# sourceMappingURL=offers.8c4e3253.js.map