(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tech-docs"],{"3b89":function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),s=c("c8de"),o=c.n(s),l=function(e){return Object(n["x"])("data-v-115a3cec"),e=e(),Object(n["v"])(),e},a={class:"tech-docs"},i=l((function(){return Object(n["g"])("h1",{class:"tech-docs__title page__title"},"Техническое задание",-1)})),d={class:"tech-docs-wrapper page-wrapper"},r={class:"tech-docs-header"},u=l((function(){return Object(n["g"])("h5",{class:"tech-docs-header__title"},"Поиск документа:",-1)})),b={class:"tech-docs-header__buttons"},j={class:"tech-docs-header__kp"},f=Object(n["i"])(" по "),O=l((function(){return Object(n["g"])("span",{class:"upp",style:{"margin-left":"2px"}},"кп",-1)})),g={class:"tech-docs-header__vendor"},p=Object(n["i"])(" по артикулу "),h={class:"tech-docs-content"},v={key:0,class:"tech-docs-article"},m={class:"tech-docs-article-field article-row _kp"},_={class:"offer-create-products-field article-row-field"},k={class:"offer-create-products-add article-row-button"},y=Object(n["i"])(" Добавить "),w={class:"tech-docs-article-table"},C=l((function(){return Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Артикул"),Object(n["g"])("th",null,"Наименование"),Object(n["g"])("th")])],-1)})),D={class:"tooltip"},M={class:"tooltip"},A={class:"no-wrap"},T=["onClick"],E=l((function(){return Object(n["g"])("img",{src:o.a,alt:"Remove"},null,-1)})),V=[E],x={class:"tech-docs-kp"},I={class:"tech-docs-kp-fields fields"},S={key:0,class:"tech-docs-fields-row fields-row _number"},P={class:"tech-docs-fields-row fields-row _email"},U={class:"tech-docs-type"},F=l((function(){return Object(n["g"])("h6",{class:"tech-docs-type__title"},"Тип",-1)})),K={class:"tech-docs-types"},L={class:"base-check radio"},B=l((function(){return Object(n["g"])("label",{for:"techDocsKtru",class:"upp"}," ктру ",-1)})),N={class:"base-check radio"},J=l((function(){return Object(n["g"])("label",{for:"techDocsTu",class:"upp"}," ту ",-1)})),z={class:"base-check radio"},R=l((function(){return Object(n["g"])("label",{for:"techDocsKtrus"},[Object(n["g"])("span",{class:"upp"},"ктру"),Object(n["i"])(" сокр. ")],-1)})),q={class:"tech-docs-buttons page-buttons _save"},G={class:"tech-docs-buttons__send _save__button"},H=Object(n["i"])("Отправить"),Q={class:"tech-docs-buttons__download"},W=Object(n["i"])("Скачать");function X(e,t,c,s,o,l){var E=Object(n["C"])("base-button"),X=Object(n["C"])("base-input"),Y=Object(n["C"])("base-modal");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("section",a,[i,Object(n["g"])("div",d,[Object(n["g"])("div",r,[u,Object(n["g"])("div",b,[Object(n["g"])("div",j,[Object(n["j"])(E,{type:"link-button",active:1==o.active,onClicked:t[0]||(t[0]=function(e){return o.active=1})},{default:Object(n["L"])((function(){return[f,O]})),_:1},8,["active"])]),Object(n["g"])("div",g,[Object(n["j"])(E,{type:"link-button",active:2==o.active,onClicked:t[1]||(t[1]=function(e){return o.active=2})},{default:Object(n["L"])((function(){return[p]})),_:1},8,["active"])])])]),Object(n["g"])("div",h,[2==o.active?(Object(n["u"])(),Object(n["f"])("div",v,[Object(n["g"])("div",m,[Object(n["g"])("div",_,[Object(n["j"])(X,{id:"offerCreateConterparty",placeholder:"Артикул или наименование",search:!0,suggestions:o.suggestions,onSetSuggestion:t[2]||(t[2]=function(e){return o.techDocsArticle=e}),modelValue:o.techDocsArticle,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.techDocsArticle=e})},null,8,["suggestions","modelValue"])]),Object(n["g"])("div",k,[Object(n["j"])(E,{type:"outlined",onClicked:l.addArticle},{default:Object(n["L"])((function(){return[y]})),_:1},8,["onClicked"])])]),Object(n["g"])("table",w,[C,Object(n["g"])("tbody",null,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(o.articles,(function(e,t){return Object(n["u"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("td",null,[Object(n["g"])("span",null,Object(n["F"])(e.article),1),Object(n["g"])("span",D,Object(n["F"])(e.article),1)]),Object(n["g"])("td",null,[Object(n["g"])("span",null,Object(n["F"])(e.name),1),Object(n["g"])("span",M,Object(n["F"])(e.name),1)]),Object(n["g"])("td",A,[Object(n["g"])("span",{class:"_remove",onClick:function(t){return l.removeProduct(e.id)}},V,8,T)])])})),128))])])])):Object(n["e"])("",!0),Object(n["g"])("div",x,[Object(n["g"])("div",I,[1==o.active?(Object(n["u"])(),Object(n["f"])("div",S,[Object(n["j"])(X,{label:"№ КП",id:"techDocsKp",search:!0,suggestions:o.suggestions,onSetSuggestion:t[4]||(t[4]=function(e){return o.number=e}),modelValue:o.number,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.number=e})},null,8,["suggestions","modelValue"])])):Object(n["e"])("",!0),Object(n["g"])("div",P,[Object(n["j"])(X,{label:"Электронная почта",id:"techEmail",modelValue:o.email,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.email=e})},null,8,["modelValue"])]),Object(n["g"])("div",U,[F,Object(n["g"])("div",K,[Object(n["g"])("div",L,[Object(n["M"])(Object(n["g"])("input",{type:"radio",id:"techDocsKtru",value:"ktru","onUpdate:modelValue":t[7]||(t[7]=function(e){return o.docsType=e})},null,512),[[n["I"],o.docsType]]),B]),Object(n["g"])("div",N,[Object(n["M"])(Object(n["g"])("input",{type:"radio",id:"techDocsTu",value:"tu","onUpdate:modelValue":t[8]||(t[8]=function(e){return o.docsType=e})},null,512),[[n["I"],o.docsType]]),J]),Object(n["g"])("div",z,[Object(n["M"])(Object(n["g"])("input",{type:"radio",id:"techDocsKtrus",value:"ktrus","onUpdate:modelValue":t[9]||(t[9]=function(e){return o.docsType=e})},null,512),[[n["I"],o.docsType]]),R])])])])])])]),Object(n["g"])("div",q,[Object(n["g"])("div",G,[Object(n["j"])(E,{type:"filled",onClicked:l.send},{default:Object(n["L"])((function(){return[H]})),_:1},8,["onClicked"])]),Object(n["g"])("div",Q,[Object(n["j"])(E,{type:"outlined",onClicked:l.download},{default:Object(n["L"])((function(){return[W]})),_:1},8,["onClicked"])])])]),Object(n["j"])(Y,{open:o.openModal,text:"Отправлено",onClose:t[10]||(t[10]=function(e){return o.openModal=!1})},null,8,["open"])],64)}c("c740"),c("a434");var Y=c("30a8"),Z=c("2141"),$=c("4829"),ee={name:"TechDocs",components:{BaseButton:Y["a"],BaseInput:Z["a"],BaseModal:$["a"]},data:function(){return{active:1,number:"",techFieldsNumber:!1,email:"",docsType:"",techDocsArticleSuggestion:!1,techDocsArticle:"",openModal:!1,articles:[{id:0,article:"EP.01",name:"Помпа ирригационная эндоскопическая ENDOMATE PUMP"},{id:1,article:"EP.02",name:"Помпа ирригационная эндоскопическая ENDOMATE PUMP"}],suggestions:["8/21-ES","7/21-ES","6/21-ES","5/21-ES"]}},methods:{send:function(){console.log("send"),this.openModal=!0},download:function(){console.log("download")},addArticle:function(){var e=this.articles.length&&this.articles[this.articles.length-1].id,t={id:e?e+0:0,article:"adsads",name:"asdasdasdasdasdasdasdgsgsdkfgluodsf;hysglf;hdvnkbhskzluhf;dilk."};this.articles.push(t)},removeProduct:function(e){var t=this.articles.findIndex((function(t){return t.id==e}));this.articles.splice(t,1)}}},te=(c("99f1"),c("6b0d")),ce=c.n(te);const ne=ce()(ee,[["render",X],["__scopeId","data-v-115a3cec"]]);t["default"]=ne},"8d8d":function(e,t,c){},"99f1":function(e,t,c){"use strict";c("8d8d")},a434:function(e,t,c){"use strict";var n=c("23e7"),s=c("da84"),o=c("23cb"),l=c("5926"),a=c("07fa"),i=c("7b0b"),d=c("65f0"),r=c("8418"),u=c("1dde"),b=u("splice"),j=s.TypeError,f=Math.max,O=Math.min,g=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var c,n,s,u,b,h,v=i(this),m=a(v),_=o(e,m),k=arguments.length;if(0===k?c=n=0:1===k?(c=0,n=m-_):(c=k-2,n=O(f(l(t),0),m-_)),m+c-n>g)throw j(p);for(s=d(v,n),u=0;u<n;u++)b=_+u,b in v&&r(s,u,v[b]);if(s.length=n,c<n){for(u=_;u<m-n;u++)b=u+n,h=u+c,b in v?v[h]=v[b]:delete v[h];for(u=m;u>m-n+c;u--)delete v[u-1]}else if(c>n)for(u=m-n;u>_;u--)b=u+n-1,h=u+c-1,b in v?v[h]=v[b]:delete v[h];for(u=0;u<c;u++)v[u+_]=arguments[u+2];return v.length=m-n+c,s}})},c740:function(e,t,c){"use strict";var n=c("23e7"),s=c("b727").findIndex,o=c("44d2"),l="findIndex",a=!0;l in[]&&Array(1)[l]((function(){a=!1})),n({target:"Array",proto:!0,forced:a},{findIndex:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)}}]);
//# sourceMappingURL=tech-docs.2bf9c1b9.js.map