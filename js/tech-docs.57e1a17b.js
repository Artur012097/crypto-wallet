(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tech-docs"],{"3b89":function(e,t,c){"use strict";c.r(t);var i=c("7a23"),a={class:"tech-certificate"},l=Object(i["g"])("h1",{class:"tech-certificate__title page__title"},"Техническое задание",-1),n={class:"tech-certificate-wrapper page-wrapper"},s={class:"tech-certificate-header"},o={class:"tech-certificate-header__title"},r=Object(i["i"])(" Поиск "),d={key:0},b=Object(i["i"])(": "),u={class:"tech-certificate-header__buttons"},j={class:"tech-certificate-header__kp"},O=Object(i["i"])(" по "),f=Object(i["g"])("span",{class:"upp",style:{"margin-left":"2px"}},"кп",-1),g={class:"tech-certificate-header__vendor"},p=Object(i["i"])(" по артикулу "),h={class:"tech-certificate-content"},v={key:0,class:"tech-certificate-article"},m={class:"tech-certificate-article-field article-row _kp"},_={class:"offer-create-products-field article-row-field"},k={class:"offer-create-products-add article-row-button"},y=Object(i["i"])(" Добавить "),w={class:"tech-certificate-kp"},C={class:"tech-certificate-kp-fields fields"},M={key:0,class:"tech-certificate-fields-row fields-row _number"},D={class:"tech-certificate-fields-row fields-row _email"},T={class:"tech-certificate-type"},A=Object(i["g"])("h6",{class:"tech-certificate-type__title"},"Тип",-1),E={class:"tech-certificate-types"},P={class:"base-check radio"},V=Object(i["g"])("label",{for:"techDocsKtru",class:"upp"}," ктру ",-1),x={class:"base-check radio"},I=Object(i["g"])("label",{for:"techDocsTu",class:"upp"}," ту ",-1),S={class:"base-check radio"},U=Object(i["g"])("label",{for:"techDocsKtrus"},[Object(i["g"])("span",{class:"upp"},"ктру"),Object(i["i"])(" сокр. ")],-1),F={class:"tech-certificate-buttons page-buttons _save"},K={class:"tech-certificate-buttons__send _save__button"},L=Object(i["i"])("Отправить"),$={class:"tech-certificate-buttons__download"},B=Object(i["i"])("Скачать");function R(e,t,c,R,N,J){var z=Object(i["C"])("base-button"),q=Object(i["C"])("base-input"),G=Object(i["C"])("tech-docs-table"),H=Object(i["C"])("base-modal");return Object(i["u"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("section",a,[l,Object(i["g"])("div",n,[Object(i["g"])("div",s,[Object(i["g"])("h5",o,[r,e.$isMobile?Object(i["e"])("",!0):(Object(i["u"])(),Object(i["f"])("span",d,"документа")),b]),Object(i["g"])("div",u,[Object(i["g"])("div",j,[Object(i["j"])(z,{type:"link-button",active:1==N.active,onClicked:t[0]||(t[0]=function(e){return N.active=1})},{default:Object(i["L"])((function(){return[O,f]})),_:1},8,["active"])]),Object(i["g"])("div",g,[Object(i["j"])(z,{type:"link-button",active:2==N.active,onClicked:t[1]||(t[1]=function(e){return N.active=2})},{default:Object(i["L"])((function(){return[p]})),_:1},8,["active"])])])]),Object(i["g"])("div",h,[2==N.active?(Object(i["u"])(),Object(i["f"])("div",v,[Object(i["g"])("div",m,[Object(i["g"])("div",_,[Object(i["j"])(q,{id:"offerCreateConterparty",placeholder:"Артикул или наименование",search:!0,suggestions:N.suggestions,onSetSuggestion:t[2]||(t[2]=function(e){return N.techDocsArticle=e}),modelValue:N.techDocsArticle,"onUpdate:modelValue":t[3]||(t[3]=function(e){return N.techDocsArticle=e})},null,8,["suggestions","modelValue"])]),Object(i["g"])("div",k,[Object(i["j"])(z,{type:"outlined",onClicked:J.addArticle},{default:Object(i["L"])((function(){return[y]})),_:1},8,["onClicked"])])]),Object(i["j"])(G,{articles:N.articles,onRemoveProduct:J.removeProduct},null,8,["articles","onRemoveProduct"])])):Object(i["e"])("",!0),Object(i["g"])("div",w,[Object(i["g"])("div",C,[1==N.active?(Object(i["u"])(),Object(i["f"])("div",M,[Object(i["j"])(q,{label:"№ КП",id:"techDocsKp",search:!0,suggestions:N.suggestions,onSetSuggestion:t[4]||(t[4]=function(e){return N.number=e}),modelValue:N.number,"onUpdate:modelValue":t[5]||(t[5]=function(e){return N.number=e})},null,8,["suggestions","modelValue"])])):Object(i["e"])("",!0),Object(i["g"])("div",D,[Object(i["j"])(q,{label:"Электронная почта",id:"techEmail",modelValue:N.email,"onUpdate:modelValue":t[6]||(t[6]=function(e){return N.email=e})},null,8,["modelValue"])]),Object(i["g"])("div",T,[A,Object(i["g"])("div",E,[Object(i["g"])("div",P,[Object(i["M"])(Object(i["g"])("input",{type:"radio",id:"techDocsKtru",value:"ktru","onUpdate:modelValue":t[7]||(t[7]=function(e){return N.docsType=e})},null,512),[[i["I"],N.docsType]]),V]),Object(i["g"])("div",x,[Object(i["M"])(Object(i["g"])("input",{type:"radio",id:"techDocsTu",value:"tu","onUpdate:modelValue":t[8]||(t[8]=function(e){return N.docsType=e})},null,512),[[i["I"],N.docsType]]),I]),Object(i["g"])("div",S,[Object(i["M"])(Object(i["g"])("input",{type:"radio",id:"techDocsKtrus",value:"ktrus","onUpdate:modelValue":t[9]||(t[9]=function(e){return N.docsType=e})},null,512),[[i["I"],N.docsType]]),U])])])])])])]),Object(i["g"])("div",F,[Object(i["g"])("div",K,[Object(i["j"])(z,{type:"filled",onClicked:J.send},{default:Object(i["L"])((function(){return[L]})),_:1},8,["onClicked"])]),Object(i["g"])("div",$,[Object(i["j"])(z,{type:"outlined",onClicked:J.download},{default:Object(i["L"])((function(){return[B]})),_:1},8,["onClicked"])])])]),Object(i["j"])(H,{open:N.openModal,text:"Отправлено",onClose:t[10]||(t[10]=function(e){return N.openModal=!1})},null,8,["open"])],64)}c("c740"),c("a434");var N=c("30a8"),J=c("2141"),z=c("4829"),q=(c("b0c0"),c("c8de")),G=c.n(q),H={key:0,class:"tech-certificate-article-table"},Q=Object(i["g"])("thead",null,[Object(i["g"])("tr",null,[Object(i["g"])("th",null,"Артикул"),Object(i["g"])("th",null,"Наименование"),Object(i["g"])("th")])],-1),W={class:"tooltip"},X={class:"tooltip"},Y={class:"no-wrap"},Z=["onClick"],ee=Object(i["g"])("img",{src:G.a,alt:"Remove"},null,-1),te=[ee],ce={key:1,class:"tech-certificate-table-mobile table-mobile",ref:"table"},ie=["onClick"],ae=Object(i["g"])("img",{src:G.a,alt:"Remove"},null,-1),le=[ae],ne={class:"table-mobile-row"},se=Object(i["g"])("span",{class:"table-mobile__title"}," Артикул ",-1),oe={class:"table-mobile__value"},re={class:"table-mobile-row"},de=Object(i["g"])("span",{class:"table-mobile__title"}," Наим-ие ",-1),be={class:"table-mobile__value"};function ue(e,t,c,a,l,n){return c.articles.length&&!e.$isMobile?(Object(i["u"])(),Object(i["f"])("table",H,[Q,Object(i["g"])("tbody",null,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(c.articles,(function(t,c){return Object(i["u"])(),Object(i["f"])("tr",{key:c},[Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(t.article),1),Object(i["g"])("span",W,Object(i["F"])(t.article),1)]),Object(i["g"])("td",null,[Object(i["g"])("span",null,Object(i["F"])(t.name),1),Object(i["g"])("span",X,Object(i["F"])(t.name),1)]),Object(i["g"])("td",Y,[Object(i["g"])("span",{class:"_remove",onClick:function(){e.$emit("removeProduct",t.id)}},te,8,Z)])])})),128))])])):c.articles.length&&e.$isMobile?(Object(i["u"])(),Object(i["f"])("div",ce,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(c.articles,(function(t,c){return Object(i["u"])(),Object(i["f"])("div",{class:"table-mobile-column",key:c},[Object(i["g"])("span",{class:"_remove",onClick:function(){e.$emit("removeProduct",t.id)}},le,8,ie),Object(i["g"])("div",ne,[se,Object(i["g"])("span",oe,Object(i["F"])(t.article),1)]),Object(i["g"])("div",re,[de,Object(i["g"])("span",be,Object(i["F"])(t.name),1)])])})),128))],512)):Object(i["e"])("",!0)}var je={props:{articles:{type:Array}}},Oe=c("6b0d"),fe=c.n(Oe);const ge=fe()(je,[["render",ue]]);var pe=ge,he={name:"TechDocs",components:{BaseButton:N["a"],BaseInput:J["a"],BaseModal:z["a"],TechDocsTable:pe},data:function(){return{active:1,number:"",techFieldsNumber:!1,email:"",docsType:"",techDocsArticle:"",openModal:!1,articles:[{id:0,article:"EP.01",name:"Помпа ирригационная эндоскопическая ENDOMATE PUMP"},{id:1,article:"EP.02",name:"Помпа ирригационная эндоскопическая ENDOMATE PUMP"}],suggestions:["8/21-ES","7/21-ES","6/21-ES","5/21-ES"]}},methods:{send:function(){console.log("send"),this.openModal=!0},download:function(){console.log("download")},addArticle:function(){var e=this.articles.length&&this.articles[this.articles.length-1].id,t={id:e?e+0:0,article:"adsads",name:"asdasdasdasdasdasdasdgsgsdkfgluodsf;hysglf;hdvnkbhskzluhf;dilk."};this.articles.push(t)},removeProduct:function(e){var t=this.articles.findIndex((function(t){return t.id==e}));this.articles.splice(t,1)}}};const ve=fe()(he,[["render",R]]);t["default"]=ve},a434:function(e,t,c){"use strict";var i=c("23e7"),a=c("da84"),l=c("23cb"),n=c("5926"),s=c("07fa"),o=c("7b0b"),r=c("65f0"),d=c("8418"),b=c("1dde"),u=b("splice"),j=a.TypeError,O=Math.max,f=Math.min,g=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,i,a,b,u,h,v=o(this),m=s(v),_=l(e,m),k=arguments.length;if(0===k?c=i=0:1===k?(c=0,i=m-_):(c=k-2,i=f(O(n(t),0),m-_)),m+c-i>g)throw j(p);for(a=r(v,i),b=0;b<i;b++)u=_+b,u in v&&d(a,b,v[u]);if(a.length=i,c<i){for(b=_;b<m-i;b++)u=b+i,h=b+c,u in v?v[h]=v[u]:delete v[h];for(b=m;b>m-i+c;b--)delete v[b-1]}else if(c>i)for(b=m-i;b>_;b--)u=b+i-1,h=b+c-1,u in v?v[h]=v[u]:delete v[h];for(b=0;b<c;b++)v[b+_]=arguments[b+2];return v.length=m-i+c,a}})},c740:function(e,t,c){"use strict";var i=c("23e7"),a=c("b727").findIndex,l=c("44d2"),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),l(n)}}]);
//# sourceMappingURL=tech-docs.57e1a17b.js.map