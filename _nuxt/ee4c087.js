(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(t,e,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("dc093880",content,!0,{sourceMap:!1})},214:function(t,e,r){"use strict";var n={name:"DefaultLayout",data:function(){return{title:"Vuetify.js"}}},o=r(80),c=r(109),l=r.n(c),f=r(295),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a})},235:function(t,e,r){r(236),t.exports=r(237)},265:function(t,e,r){"use strict";r(200)},266:function(t,e,r){var n=r(107)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},70:function(t,e,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(265),r(80)),c=r(109),l=r.n(c),f=r(295),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[235,23,6,24]]]);