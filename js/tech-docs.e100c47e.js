(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tech-docs"],{"3b89":function(e,t,c){"use strict";c.r(t);var i=c("7a23"),a={class:"tech-certificate"},n=Object(i["g"])("h1",{class:"tech-certificate__title page__title"},"Техническое задание",-1),l={class:"tech-certificate-wrapper page-wrapper"},s={class:"tech-certificate-header"},o={class:"tech-certificate-header__title"},r=Object(i["i"])(" Поиск"),u={key:0},b=Object(i["i"])(": "),d={class:"tech-certificate-header__buttons"},f={class:"tech-certificate-header__kp"},j=Object(i["i"])(" по "),h=Object(i["g"])("span",{class:"upp",style:{"margin-left":"2px"}},"кп",-1),p={class:"tech-certificate-header__vendor"},O=Object(i["i"])(" по артикулу "),g={class:"tech-certificate-content"},v={class:"tech-certificate-article-field article-row _kp"},m={class:"tech-certificate-article-field article-row-field"},_={class:"tech-certificate-article-add article-row-button"},y=Object(i["i"])(" Добавить "),k={class:"tech-certificate-kp"},w={class:"tech-certificate-kp-fields fields"},C={key:0,class:"tech-certificate-fields-row fields-row _number"},A={class:"tech-certificate-fields-row fields-row _email"},M={class:"tech-certificate-type"},T=Object(i["g"])("h6",{class:"tech-certificate-type__title"},"Тип",-1),x={class:"tech-certificate-types"},V={class:"base-check radio"},$=Object(i["g"])("label",{for:"techDocsKtru",class:"upp"}," ктру ",-1),D={class:"base-check radio"},I=Object(i["g"])("label",{for:"techDocsTu",class:"upp"}," ту ",-1),S={class:"base-check radio"},G=Object(i["g"])("label",{for:"techDocsKtrus"},[Object(i["g"])("span",{class:"upp"},"ктру"),Object(i["i"])(" сокр. ")],-1),N={class:"tech-certificate-buttons page-buttons _save"},U={class:"tech-certificate-buttons__send _save__button"},J=Object(i["i"])("Отправить"),K={class:"tech-certificate-buttons__download"},B=Object(i["i"])("Скачать");function R(e,t,c,R,P,q){var E=Object(i["C"])("base-button"),W=Object(i["C"])("base-input"),F=Object(i["C"])("tech-docs-table"),z=Object(i["C"])("base-modal");return Object(i["u"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("section",a,[n,Object(i["g"])("div",l,[Object(i["g"])("div",s,[Object(i["g"])("h5",o,[r,e.$isMobile?Object(i["e"])("",!0):(Object(i["u"])(),Object(i["f"])("span",u," документа")),b]),Object(i["g"])("div",d,[Object(i["g"])("div",f,[Object(i["j"])(E,{type:"link-button",active:1==P.active,onClicked:t[0]||(t[0]=function(e){return P.active=1})},{default:Object(i["M"])((function(){return[j,h]})),_:1},8,["active"])]),Object(i["g"])("div",p,[Object(i["j"])(E,{type:"link-button",active:2==P.active,onClicked:t[1]||(t[1]=function(e){return P.active=2})},{default:Object(i["M"])((function(){return[O]})),_:1},8,["active"])])])]),Object(i["g"])("div",g,[2==P.active?(Object(i["u"])(),Object(i["f"])("div",{key:0,class:Object(i["p"])(["tech-certificate-article",{filled:P.articles.length}])},[Object(i["g"])("div",v,[Object(i["g"])("div",m,[Object(i["j"])(W,{id:"offerCreateConterparty",placeholder:"Артикул или наименование",search:!0,suggestionWidth:380,addProduct:!0,suggestions:P.articlesSuggestions,onClear:t[2]||(t[2]=function(e){return P.article=""}),onInput:q.getArticles,modelValue:P.article,"onUpdate:modelValue":t[3]||(t[3]=function(e){return P.article=e})},null,8,["suggestions","onInput","modelValue"])]),Object(i["g"])("div",_,[Object(i["j"])(E,{type:"outlined",onClicked:q.addArticle},{default:Object(i["M"])((function(){return[y]})),_:1},8,["onClicked"])])]),Object(i["j"])(F,{articles:P.articles,onRemoveArticle:q.removeArticle},null,8,["articles","onRemoveArticle"])],2)):Object(i["e"])("",!0),Object(i["g"])("div",k,[Object(i["g"])("div",w,[1==P.active?(Object(i["u"])(),Object(i["f"])("div",C,[Object(i["j"])(W,{label:"№ КП",id:"techDocsKp",search:!0,addProduct:!0,suggestions:P.kpSuggestions,suggestionWidth:380,onClear:t[4]||(t[4]=function(e){return P.number="",q.getOffers()}),onInput:q.getOffers,modelValue:P.number,"onUpdate:modelValue":t[5]||(t[5]=function(e){return P.number=e})},null,8,["suggestions","onInput","modelValue"])])):Object(i["e"])("",!0),Object(i["g"])("div",A,[Object(i["j"])(W,{label:"Электронная почта",id:"techEmail",modelValue:P.email,"onUpdate:modelValue":t[6]||(t[6]=function(e){return P.email=e})},null,8,["modelValue"])]),Object(i["g"])("div",M,[T,Object(i["g"])("div",x,[Object(i["g"])("div",V,[Object(i["N"])(Object(i["g"])("input",{type:"radio",id:"techDocsKtru",value:"ktru","onUpdate:modelValue":t[7]||(t[7]=function(e){return P.docsType=e})},null,512),[[i["J"],P.docsType]]),$]),Object(i["g"])("div",D,[Object(i["N"])(Object(i["g"])("input",{type:"radio",id:"techDocsTu",value:"tu","onUpdate:modelValue":t[8]||(t[8]=function(e){return P.docsType=e})},null,512),[[i["J"],P.docsType]]),I]),Object(i["g"])("div",S,[Object(i["N"])(Object(i["g"])("input",{type:"radio",id:"techDocsKtrus",value:"ktrus","onUpdate:modelValue":t[9]||(t[9]=function(e){return P.docsType=e})},null,512),[[i["J"],P.docsType]]),G])])])])])])]),Object(i["g"])("div",N,[Object(i["g"])("div",U,[Object(i["j"])(E,{type:"filled",onClicked:q.send},{default:Object(i["M"])((function(){return[J]})),_:1},8,["onClicked"])]),Object(i["g"])("div",K,[Object(i["j"])(E,{type:"outlined",onClicked:q.download},{default:Object(i["M"])((function(){return[B]})),_:1},8,["onClicked"])])])]),Object(i["j"])(z,{open:P.openModal,text:"Отправлено",onClose:t[10]||(t[10]=function(e){return P.openModal=!1})},null,8,["open"])],64)}var P=c("b85c"),q=c("ade3"),E=(c("99af"),c("45fc"),c("d3b7"),c("c740"),c("a434"),c("30a8")),W=c("2141"),F=c("4829"),z=(c("b0c0"),c("c8de")),H=c.n(z),L={key:0,class:"tech-certificate-article-table"},Q=Object(i["g"])("thead",null,[Object(i["g"])("tr",null,[Object(i["g"])("th",null,"Артикул"),Object(i["g"])("th",null,"Наименование"),Object(i["g"])("th")])],-1),X={key:0},Y={class:"tooltip"},Z={class:"tooltip"},ee={class:"no-wrap"},te=["onClick"],ce=Object(i["g"])("img",{src:H.a,alt:"Remove"},null,-1),ie=[ce],ae={key:1,class:"tech-certificate-table-mobile table-mobile",ref:"table"},ne=["onClick"],le=Object(i["g"])("img",{src:H.a,alt:"Remove"},null,-1),se=[le],oe={class:"table-mobile-row"},re=Object(i["g"])("span",{class:"table-mobile__title tech-certificate-table-mobile__title"}," Артикул ",-1),ue={class:"table-mobile__value"},be={class:"table-mobile-row"},de=Object(i["g"])("span",{class:"table-mobile__title tech-certificate-table-mobile__title"}," Наим-ие ",-1),fe={class:"table-mobile__value"};function je(e,t,c,a,n,l){var s=Object(i["D"])("tooltip");return e.$isMobile?c.articles.length&&e.$isMobile?(Object(i["u"])(),Object(i["f"])("div",ae,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(c.articles,(function(t){return Object(i["u"])(),Object(i["f"])("div",{class:"table-mobile-column",key:t.id},[Object(i["g"])("span",{class:"_remove",onClick:function(){e.$emit("removeArticle",t.id)}},se,8,ne),Object(i["g"])("div",oe,[re,Object(i["g"])("span",ue,Object(i["G"])(t.article),1)]),Object(i["g"])("div",be,[de,Object(i["g"])("span",fe,Object(i["G"])(t.name),1)])])})),128))],512)):Object(i["e"])("",!0):(Object(i["u"])(),Object(i["f"])("table",L,[Q,c.articles.length?(Object(i["u"])(),Object(i["f"])("tbody",X,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(c.articles,(function(t){return Object(i["u"])(),Object(i["f"])("tr",{key:t.id},[Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["G"])(t.article),1),Object(i["N"])((Object(i["u"])(),Object(i["f"])("span",Y,[Object(i["i"])(Object(i["G"])(t.article),1)])),[[s]])]),Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["G"])(t.name),1),Object(i["N"])((Object(i["u"])(),Object(i["f"])("span",Z,[Object(i["i"])(Object(i["G"])(t.name),1)])),[[s]])]),Object(i["g"])("td",ee,[Object(i["g"])("span",{class:"_remove",onClick:function(){e.$emit("removeArticle",t.id)}},ie,8,te)])])})),128))])):Object(i["e"])("",!0)]))}var he={props:{articles:{type:Array}}},pe=c("6b0d"),Oe=c.n(pe);const ge=Oe()(he,[["render",je]]);var ve=ge,me={name:"TechDocs",components:{BaseButton:E["a"],BaseInput:W["a"],BaseModal:F["a"],TechDocsTable:ve},data:function(){return{active:1,number:"",techFieldsNumber:!1,email:"",docsType:"",techDocsArticle:"",article:"",openModal:!1,articles:[],kpSuggestions:[],articlesSuggestions:[]}},mounted:function(){this.$api.get("".concat("https://51.250.6.131/api/v1","/offer")).then((function(e){console.log(e.data)}))},methods:{getOffers:function(){var e=this;this.kpSuggestions=[];var t=Object(q["a"])({},this.number&&"search",this.number);this.$api.get("".concat("https://51.250.6.131/api/v1","/company"),{params:t}).then((function(t){var c,i=Object(P["a"])(t.data.results);try{for(i.s();!(c=i.n()).done;){var a=c.value;e.number&&e.kpSuggestions.push({key:a.id,value:a.id})}}catch(n){i.e(n)}finally{i.f()}})).catch((function(e){return console.log(e)}))},getArticles:function(){var e=this;this.articlesSuggestions=[];var t=Object(q["a"])({},this.article&&"search",this.article);this.$api.get("".concat("https://51.250.6.131/api/v1","/product"),{params:t}).then((function(t){var c,i=Object(P["a"])(t.data.results);try{for(i.s();!(c=i.n()).done;){var a=c.value;e.article&&e.articlesSuggestions.push({key:a.id,value:a.id})}}catch(n){i.e(n)}finally{i.f()}})).catch((function(e){return console.log(e)}))},addArticle:function(){var e=this;this.$api.get("".concat("https://51.250.6.131/api/v1","/product/").concat(this.article)).then((function(t){!e.articles.some((function(e){return e.article==t.data.article}))&&e.articles.push(t.data),e.article=""}))},send:function(){var e=this;if(1===this.active){var t={send_to:this.email,co_format:this.docsType,required_tech_docs:!0,tech_docs_format:"excel",required_ru:!1};this.$api.post("".concat("https://51.250.6.131/api/v1","/offer/").concat(this.number,"/send-to-email"),t).then((function(){e.modalText="Отправлено",e.openModal=!0})).catch((function(e){return console.log(e)}))}else{var c,i=[],a=Object(P["a"])(this.articles);try{for(a.s();!(c=a.n()).done;){var n=c.value;i.push(n.id)}}catch(s){a.e(s)}finally{a.f()}var l={send_to:this.email,tech_docs_format:"excel",articles:i};this.$api.post("".concat("https://51.250.6.131/api/v1","/tech-docs/send-to-email"),l).then((function(){e.modalText="Отправлено",e.openModal=!0}))}},download:function(){if(1===this.active)console.log(123);else{var e,t=[],c=Object(P["a"])(this.articles);try{for(c.s();!(e=c.n()).done;){var i=e.value;t.push(i.id)}}catch(n){c.e(n)}finally{c.f()}var a={tech_docs_format:"excel",articles:t};this.$api.post("".concat("https://51.250.6.131/api/v1","/tech-docs/download"),a).then((function(e){window.open(e.data.url,"_blank")}))}},removeArticle:function(e){var t=this.articles.findIndex((function(t){return t.id===e}));this.articles.splice(t,1)}}};const _e=Oe()(me,[["render",R]]);t["default"]=_e},a434:function(e,t,c){"use strict";var i=c("23e7"),a=c("da84"),n=c("23cb"),l=c("5926"),s=c("07fa"),o=c("7b0b"),r=c("65f0"),u=c("8418"),b=c("1dde"),d=b("splice"),f=a.TypeError,j=Math.max,h=Math.min,p=9007199254740991,O="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var c,i,a,b,d,g,v=o(this),m=s(v),_=n(e,m),y=arguments.length;if(0===y?c=i=0:1===y?(c=0,i=m-_):(c=y-2,i=h(j(l(t),0),m-_)),m+c-i>p)throw f(O);for(a=r(v,i),b=0;b<i;b++)d=_+b,d in v&&u(a,b,v[d]);if(a.length=i,c<i){for(b=_;b<m-i;b++)d=b+i,g=b+c,d in v?v[g]=v[d]:delete v[g];for(b=m;b>m-i+c;b--)delete v[b-1]}else if(c>i)for(b=m-i;b>_;b--)d=b+i-1,g=b+c-1,d in v?v[g]=v[d]:delete v[g];for(b=0;b<c;b++)v[b+_]=arguments[b+2];return v.length=m-i+c,a}})},ade3:function(e,t,c){"use strict";function i(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return i}))},c740:function(e,t,c){"use strict";var i=c("23e7"),a=c("b727").findIndex,n=c("44d2"),l="findIndex",s=!0;l in[]&&Array(1)[l]((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(l)}}]);
//# sourceMappingURL=tech-docs.e100c47e.js.map