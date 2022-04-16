(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{729:function(e,t,n){"use strict";n.r(t);var r=n(2),o=(n(22),n(62)),l=n(7),c=n(226),m=n(233),d={name:"LoginForm",components:{CustomIcon:l.default,CheckboxButton:m.default,TextInputBox:c.default,RcButton:o.default},data:function(){return{login:"",password:"",errorMessage:null,remember:!1}},computed:{isLoginEmpty:function(){var e;return!(null!==(e=this.login)&&void 0!==e&&e.length)},hasErrors:function(){var e,t;return Boolean(!(null!==(e=this.login)&&void 0!==e&&e.length)||!(null!==(t=this.password)&&void 0!==t&&t.length)||this.errorMessage)}},watch:{login:function(e){null!==e&&(this.errorMessage=null)},password:function(e){null!==e&&(this.errorMessage=null)}},methods:{submit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$login(e.login,e.password,e.remember);case 2:(n=t.sent).success?e.$router.push("/"):e.errorMessage=n.errorMessage;case 4:case"end":return t.stop()}}),t)})))()}}},x=n(0),component=Object(x.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-form login-form"},[n("form",{staticClass:"flex flex-col items-center",on:{submit:function(e){e.preventDefault()}}},[n("custom-icon",{attrs:{classes:"xs:hidden","icon-id":"#rateclub-logo-auth-big",width:440,height:122}}),e._v(" "),n("custom-icon",{attrs:{classes:"hidden xs:block","icon-id":"#rateclub-logo-auth-small",width:240,height:64}}),e._v(" "),n("h1",{staticClass:"f-ra-semi text-[32px] leading-[37.57px] mt-8 xs:mt-[36px]"},[e._v("\n      Log in\n    ")]),e._v(" "),n("p",{staticClass:"mt-2 f-ra-regular text-sm"},[e._v("\n      No account?\n      "),n("nuxt-link",{staticClass:"text-purple-80",attrs:{to:{name:"register"}}},[e._v("\n        Sign up\n      ")])],1),e._v(" "),n("text-input-box",{staticClass:"mt-8 xs:mt-[32px]",attrs:{"input-id":"loginEmail",label:"email","input-type":"text",underline:!0,"input-class":"!h-[33px]","error-message":e.errorMessage},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}),e._v(" "),n("text-input-box",{staticClass:"mt-8 xs:mt-6",attrs:{"input-id":"loginPassword",label:"password","input-type":"password",underline:!0,"input-class":"!h-[33px]","error-message":e.errorMessage},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("checkbox-button",{staticClass:"mt-8 xs:mt-[44px]",model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}},[n("p",{staticClass:"order-2 f-ra-regular text-xm text-black-80"},[e._v("remember me")])]),e._v(" "),n("rc-button",{staticClass:"w-full mt-8 h-[48px] rounded-[4px] f-ra-semi text-base xs:mt-[32px]",attrs:{disabled:e.hasErrors},on:{click:e.submit}},[e._v("\n      Log in\n    ")]),e._v(" "),e.errorMessage?n("p",{staticClass:"f-ra-medium text-sm text-red-60 mt-4"},[e._v("\n      "+e._s(e.errorMessage)+"\n    ")]):e._e(),e._v(" "),n("div",{staticClass:"w-full flex justify-center mt-4 xs:justify-start"},[n("nuxt-link",{staticClass:"hover:underline f-ra-regular text-sm text-purple-80",attrs:{to:{name:"login"}}},[e._v("\n        Forgot your password?\n      ")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);