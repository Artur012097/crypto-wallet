(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{707:function(e,t,n){"use strict";n.r(t);n(30);var l={name:"RadioList",model:{prop:"value",event:"change"},props:{items:{type:Array,default:null},value:{type:Number,required:!0}},computed:{currentItem:{get:function(){return this.value},set:function(e){this.selectValue(e)}}},methods:{selectValue:function(e){this.$emit("change",e)}}},r=n(0),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[e._l(e.items,(function(t){return[n("li",{key:t.title},[e._t("button",null,{select:e.selectValue,item:t})],2)]}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);