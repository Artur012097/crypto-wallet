(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tech-docs"],{"3b89":function(e,t,c){"use strict";c.r(t);var i=c("7a23"),l={class:"tech-certificate"},a=Object(i["g"])("h1",{class:"tech-certificate__title page__title"},"Техническое задание",-1),n={class:"tech-certificate-wrapper page-wrapper"},s={class:"tech-certificate-header"},o={class:"tech-certificate-header__title"},r=Object(i["i"])(" Поиск "),d={key:0},b=Object(i["i"])(": "),u={class:"tech-certificate-header__buttons"},j={class:"tech-certificate-header__kp"},O=Object(i["i"])(" по "),f=Object(i["g"])("span",{class:"upp",style:{"margin-left":"2px"}},"кп",-1),g={class:"tech-certificate-header__vendor"},p=Object(i["i"])(" по артикулу "),h={class:"tech-certificate-content"},v={class:"tech-certificate-article-field article-row _kp"},m={class:"offer-create-products-field article-row-field"},_={class:"offer-create-products-add article-row-button"},k=Object(i["i"])(" Добавить "),y={class:"tech-certificate-kp"},w={class:"tech-certificate-kp-fields fields"},C={key:0,class:"tech-certificate-fields-row fields-row _number"},M={class:"tech-certificate-fields-row fields-row _email"},D={class:"tech-certificate-type"},T=Object(i["g"])("h6",{class:"tech-certificate-type__title"},"Тип",-1),A={class:"tech-certificate-types"},E={class:"base-check radio"},P=Object(i["g"])("label",{for:"techDocsKtru",class:"upp"}," ктру ",-1),V={class:"base-check radio"},x=Object(i["g"])("label",{for:"techDocsTu",class:"upp"}," ту ",-1),I={class:"base-check radio"},S=Object(i["g"])("label",{for:"techDocsKtrus"},[Object(i["g"])("span",{class:"upp"},"ктру"),Object(i["i"])(" сокр. ")],-1),U={class:"tech-certificate-buttons page-buttons _save"},F={class:"tech-certificate-buttons__send _save__button"},K=Object(i["i"])("Отправить"),L={class:"tech-certificate-buttons__download"},$=Object(i["i"])("Скачать");function B(e,t,c,B,R,N){var J=Object(i["C"])("base-button"),z=Object(i["C"])("base-input"),q=Object(i["C"])("tech-docs-table"),G=Object(i["C"])("base-modal");return Object(i["u"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("section",l,[a,Object(i["g"])("div",n,[Object(i["g"])("div",s,[Object(i["g"])("h5",o,[r,e.$isMobile?Object(i["e"])("",!0):(Object(i["u"])(),Object(i["f"])("span",d,"документа")),b]),Object(i["g"])("div",u,[Object(i["g"])("div",j,[Object(i["j"])(J,{type:"link-button",active:1==R.active,onClicked:t[0]||(t[0]=function(e){return R.active=1})},{default:Object(i["L"])((function(){return[O,f]})),_:1},8,["active"])]),Object(i["g"])("div",g,[Object(i["j"])(J,{type:"link-button",active:2==R.active,onClicked:t[1]||(t[1]=function(e){return R.active=2})},{default:Object(i["L"])((function(){return[p]})),_:1},8,["active"])])])]),Object(i["g"])("div",h,[2==R.active?(Object(i["u"])(),Object(i["f"])("div",{key:0,class:Object(i["p"])(["tech-certificate-article",{filled:R.articles.length}])},[Object(i["g"])("div",v,[Object(i["g"])("div",m,[Object(i["j"])(z,{id:"offerCreateConterparty",placeholder:"Артикул или наименование",search:!0,suggestions:R.suggestions,onSetSuggestion:t[2]||(t[2]=function(e){return R.techDocsArticle=e}),modelValue:R.techDocsArticle,"onUpdate:modelValue":t[3]||(t[3]=function(e){return R.techDocsArticle=e})},null,8,["suggestions","modelValue"])]),Object(i["g"])("div",_,[Object(i["j"])(J,{type:"outlined",onClicked:N.addArticle},{default:Object(i["L"])((function(){return[k]})),_:1},8,["onClicked"])])]),Object(i["j"])(q,{articles:R.articles,onRemoveProduct:N.removeProduct},null,8,["articles","onRemoveProduct"])],2)):Object(i["e"])("",!0),Object(i["g"])("div",y,[Object(i["g"])("div",w,[1==R.active?(Object(i["u"])(),Object(i["f"])("div",C,[Object(i["j"])(z,{label:"№ КП",id:"techDocsKp",search:!0,suggestions:R.suggestions,onSetSuggestion:t[4]||(t[4]=function(e){return R.number=e}),modelValue:R.number,"onUpdate:modelValue":t[5]||(t[5]=function(e){return R.number=e})},null,8,["suggestions","modelValue"])])):Object(i["e"])("",!0),Object(i["g"])("div",M,[Object(i["j"])(z,{label:"Электронная почта",id:"techEmail",modelValue:R.email,"onUpdate:modelValue":t[6]||(t[6]=function(e){return R.email=e})},null,8,["modelValue"])]),Object(i["g"])("div",D,[T,Object(i["g"])("div",A,[Object(i["g"])("div",E,[Object(i["M"])(Object(i["g"])("input",{type:"radio",id:"techDocsKtru",value:"ktru","onUpdate:modelValue":t[7]||(t[7]=function(e){return R.docsType=e})},null,512),[[i["I"],R.docsType]]),P]),Object(i["g"])("div",V,[Object(i["M"])(Object(i["g"])("input",{type:"radio",id:"techDocsTu",value:"tu","onUpdate:modelValue":t[8]||(t[8]=function(e){return R.docsType=e})},null,512),[[i["I"],R.docsType]]),x]),Object(i["g"])("div",I,[Object(i["M"])(Object(i["g"])("input",{type:"radio",id:"techDocsKtrus",value:"ktrus","onUpdate:modelValue":t[9]||(t[9]=function(e){return R.docsType=e})},null,512),[[i["I"],R.docsType]]),S])])])])])])]),Object(i["g"])("div",U,[Object(i["g"])("div",F,[Object(i["j"])(J,{type:"filled",onClicked:N.send},{default:Object(i["L"])((function(){return[K]})),_:1},8,["onClicked"])]),Object(i["g"])("div",L,[Object(i["j"])(J,{type:"outlined",onClicked:N.download},{default:Object(i["L"])((function(){return[$]})),_:1},8,["onClicked"])])])]),Object(i["j"])(G,{open:R.openModal,text:"Отправлено",onClose:t[10]||(t[10]=function(e){return R.openModal=!1})},null,8,["open"])],64)}c("c740"),c("a434");var R=c("30a8"),N=c("2141"),J=c("4829"),z=(c("b0c0"),c("c8de")),q=c.n(z),G={key:0,class:"tech-certificate-article-table"},H=Object(i["g"])("thead",null,[Object(i["g"])("tr",null,[Object(i["g"])("th",null,"Артикул"),Object(i["g"])("th",null,"Наименование"),Object(i["g"])("th")])],-1),Q={class:"tooltip"},W={class:"tooltip"},X={class:"no-wrap"},Y=["onClick"],Z=Object(i["g"])("img",{src:q.a,alt:"Remove"},null,-1),ee=[Z],te={key:1,class:"tech-certificate-table-mobile table-mobile",ref:"table"},ce=["onClick"],ie=Object(i["g"])("img",{src:q.a,alt:"Remove"},null,-1),le=[ie],ae={class:"table-mobile-row"},ne=Object(i["g"])("span",{class:"table-mobile__title"}," Артикул ",-1),se={class:"table-mobile__value"},oe={class:"table-mobile-row"},re=Object(i["g"])("span",{class:"table-mobile__title"}," Наим-ие ",-1),de={class:"table-mobile__value"};function be(e,t,c,l,a,n){return c.articles.length&&!e.$isMobile?(Object(i["u"])(),Object(i["f"])("table",G,[H,Object(i["g"])("tbody",null,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(c.articles,(function(t,c){return Object(i["u"])(),Object(i["f"])("tr",{key:c},[Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(t.article),1),Object(i["g"])("span",Q,Object(i["F"])(t.article),1)]),Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(t.name),1),Object(i["g"])("span",W,Object(i["F"])(t.name),1)]),Object(i["g"])("td",X,[Object(i["g"])("span",{class:"_remove",onClick:function(){e.$emit("removeProduct",t.id)}},ee,8,Y)])])})),128))])])):c.articles.length&&e.$isMobile?(Object(i["u"])(),Object(i["f"])("div",te,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(c.articles,(function(t,c){return Object(i["u"])(),Object(i["f"])("div",{class:"table-mobile-column",key:c},[Object(i["g"])("span",{class:"_remove",onClick:function(){e.$emit("removeProduct",t.id)}},le,8,ce),Object(i["g"])("div",ae,[ne,Object(i["g"])("span",se,Object(i["F"])(t.article),1)]),Object(i["g"])("div",oe,[re,Object(i["g"])("span",de,Object(i["F"])(t.name),1)])])})),128))],512)):Object(i["e"])("",!0)}var ue={props:{articles:{type:Array}}},je=c("6b0d"),Oe=c.n(je);const fe=Oe()(ue,[["render",be]]);var ge=fe,pe={name:"TechDocs",components:{BaseButton:R["a"],BaseInput:N["a"],BaseModal:J["a"],TechDocsTable:ge},data:function(){return{active:1,number:"",techFieldsNumber:!1,email:"",docsType:"",techDocsArticle:"",openModal:!1,articles:[{id:0,article:"EP.01",name:"Помпа ирригационная эндоскопическая ENDOMATE PUMP"},{id:1,article:"EP.02",name:"Помпа ирригационная эндоскопическая ENDOMATE PUMP"}],suggestions:["8/21-ES","7/21-ES","6/21-ES","5/21-ES"]}},methods:{send:function(){console.log("send"),this.openModal=!0},download:function(){console.log("download")},addArticle:function(){var e=this.articles.length&&this.articles[this.articles.length-1].id,t={id:e?e+0:0,article:"adsads",name:"asdasdasdasdasdasdasdgsgsdkfgluodsf;hysglf;hdvnkbhskzluhf;dilk."};this.articles.push(t)},removeProduct:function(e){var t=this.articles.findIndex((function(t){return t.id==e}));this.articles.splice(t,1)}}};const he=Oe()(pe,[["render",B]]);t["default"]=he},a434:function(e,t,c){"use strict";var i=c("23e7"),l=c("da84"),a=c("23cb"),n=c("5926"),s=c("07fa"),o=c("7b0b"),r=c("65f0"),d=c("8418"),b=c("1dde"),u=b("splice"),j=l.TypeError,O=Math.max,f=Math.min,g=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,i,l,b,u,h,v=o(this),m=s(v),_=a(e,m),k=arguments.length;if(0===k?c=i=0:1===k?(c=0,i=m-_):(c=k-2,i=f(O(n(t),0),m-_)),m+c-i>g)throw j(p);for(l=r(v,i),b=0;b<i;b++)u=_+b,u in v&&d(l,b,v[u]);if(l.length=i,c<i){for(b=_;b<m-i;b++)u=b+i,h=b+c,u in v?v[h]=v[u]:delete v[h];for(b=m;b>m-i+c;b--)delete v[b-1]}else if(c>i)for(b=m-i;b>_;b--)u=b+i-1,h=b+c-1,u in v?v[h]=v[u]:delete v[h];for(b=0;b<c;b++)v[b+_]=arguments[b+2];return v.length=m-i+c,l}})},c740:function(e,t,c){"use strict";var i=c("23e7"),l=c("b727").findIndex,a=c("44d2"),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a(n)}}]);
//# sourceMappingURL=tech-docs.a7c9fe4b.js.map