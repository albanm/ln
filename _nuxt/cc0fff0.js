(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{298:function(t,e,n){"use strict";n.d(e,"b",(function(){return l}));var r=n(11),o=n(0);function l(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return o.a.extend({name:"toggleable",model:{prop:e,event:n},props:Object(r.a)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(r.a)(t,e,(function(t){this.isActive=!!t})),Object(r.a)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(n,t)})),t)})}var c=l();e.a=c},305:function(t,e,n){"use strict";var r=n(3),o=n(216);r({target:"String",proto:!0,forced:n(217)("small")},{small:function(){return o(this,"small","","")}})},307:function(t,e,n){"use strict";n(305);var r=n(0);e.a=r.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},314:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"job":"Correctrice","title1":"Correction <span class=\\"avoidwrap\\">sur mesure</span>","title2":"Confiez moi votre projet !","askQuote":"Demandez un devis"},"en":{"job":"Proofreader","title1":"French proofreading","title2":"Trust me with your project!","askQuote":"Ask for a quote"}}'),delete t.options._Ctor}},326:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(11),o=n(337);function l(t,e,n){return Object(o.a)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(r.a)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}l("itemGroup")},337:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(11),o=(n(33),n(0)),l=n(51);function c(t,e){return function(){return Object(l.c)("The ".concat(t," component must be used inside a ").concat(e))}}function d(t,e,n){var l=e&&n?{register:c(e,n),unregister:c(e,n)}:null;return o.a.extend({name:"registrable-inject",inject:Object(r.a)({},t,{default:l})})}},359:function(t,e,n){"use strict";var r=n(314),o=n.n(r);e.default=o.a},369:function(t,e,n){"use strict";n.r(e);var r={props:{light:{type:Boolean}},computed:{basePath:function(){return"/"}}},o=n(80),l=n(359),c=n(109),d=n.n(c),f=n(371),h=n(349),v=n(442),m=n(343),x=n(336),_=n(443),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",attrs:{id:"section-head",fluid:""}},[n("v-card",{attrs:{tile:"",color:"primary",dark:""}},[n("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-6",attrs:{cols:"12",md:"6","order-md":"2"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",lg:"9",xl:"7"}},[n("div",{class:{"mt-12":t.$vuetify.breakpoint.mdAndUp,"mt-8":t.$vuetify.breakpoint.smAndDown}},[n("h1",[n("span",{staticClass:"text-h4 secondary--text"},[t._v("\n                  Hélène Cabillic\n                ")]),t._v(" "),n("span",{staticClass:"text-body-1 primary--text text--lighten-5"},[t._v("\n                  "+t._s(t.$t("job"))+"\n                ")])])]),t._v(" "),n("div",{class:{"mt-16":t.$vuetify.breakpoint.mdAndUp,"mt-6":t.$vuetify.breakpoint.smAndDown}},[n("p",{class:{"text-h1":t.$vuetify.breakpoint.xl,"text-h2":t.$vuetify.breakpoint.lg,"text-h3":t.$vuetify.breakpoint.mdAndDown,"secondary--text":!0},domProps:{innerHTML:t._s(t.$t("title1"))}}),t._v(" "),t.light?t._e():n("p",{staticClass:"text-h6 mt-6"},[t._v("\n                "+t._s(t.$t("title2"))+"\n              ")]),t._v(" "),t.light?t._e():n("v-btn",{staticClass:"primary--text mt-4",attrs:{nuxt:!0,light:"",depressed:"",color:"white",large:"",to:{path:"/",hash:"section-contact"}}},[t._v("\n                "+t._s(t.$t("askQuote"))+"\n              ")])],1)])],1)],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp||!t.light?n("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"6","order-md":"1"}},[n("v-img",{attrs:{src:t.basePath+"student-gacec86f97_1920.jpg",height:t.$vuetify.breakpoint.mdAndUp&&!t.light?560:400}})],1):t._e()],1)],1)],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;d()(component,{VBtn:f.a,VCard:h.a,VCol:v.a,VContainer:m.a,VImg:x.a,VRow:_.a})}}]);