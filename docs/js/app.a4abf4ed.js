(function(e){function t(t){for(var n,o,i=t[0],u=t[1],l=t[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/bingo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"2f67":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",[r("div",{attrs:{id:"app"}},["home"!=e.mode?r("div",[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"secondary"},on:{click:function(t){e.mode="home"}}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-home")]),e._v("Home ")],1)],1):e._e(),"home"==e.mode?r("div",[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"secondary"},on:{click:function(t){e.mode="host"}}},[e._v("Host")]),r("br"),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"secondary"},on:{click:function(t){e.mode="player"}}},[e._v("Player")])],1):e._e(),"host"==e.mode?r("Host"):e._e(),"player"==e.mode?r("Player"):e._e()],1)])],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"host"}},[r("p",{attrs:{id:"number"}},[e._v(e._s(e.number))]),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"primary"},on:{click:e.drawNumber}},[e._v("Draw")]),r("v-row",{staticClass:"ma-2",attrs:{"no-gutters":""}},e._l(e.drawnNumbers.length,(function(t){return r("v-col",{key:t,attrs:{cols:"2",md:"1"}},[r("v-card",{attrs:{outlined:"",tile:""}},[r("span",{staticClass:"drawn-number"},[e._v(e._s(e.drawnNumbers[t-1]))])])],1)})),1)],1)},i=[],u=(r("caad"),r("2532"),{name:"Host",data:function(){return{number:"START",drawnNumbers:[]}},methods:{drawNumber:function(){if(isNaN(this.number)||(this.drawnNumbers.push(this.number),this.drawnNumbers.sort((function(e,t){return e<t?-1:e>t?1:0}))),this.drawnNumbers.length>=75)this.number="END";else{var e=this.getRandomNumber();while(this.drawnNumbers.includes(e))e=this.getRandomNumber();this.number=e}},getRandomNumber:function(){var e=1,t=75;return Math.floor(e+Math.random()*(t-e+1))}}}),l=u,c=(r("f824"),r("2877")),f=r("6544"),d=r.n(f),h=r("8336"),p=r("b0af"),v=r("62ad"),m=r("0fd9"),b=Object(c["a"])(l,o,i,!1,null,null,null),g=b.exports;d()(b,{VBtn:h["a"],VCard:p["a"],VCol:v["a"],VRow:m["a"]});var w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"player"}},[r("div",{staticClass:"d-flex justify-center ma-2"},[r("table",{attrs:{border:"1"}},e._l(5,(function(t){return r("tr",{key:t},e._l(5,(function(n){return r("td",{key:n,staticClass:"square",class:[{filled:e.squares[n-1][t-1].isFilled},e.squares[n-1][t-1].status],on:{click:function(r){return e.switchSquareFilled(n-1,t-1)}}},[e._v(e._s(e.squares[n-1][t-1].number))])})),0)})),0)])])},y=[],_=(r("4160"),r("fb6a"),r("159b"),{name:"Player",data:function(){return{squares:[[],[],[],[],[]]}},created:function(){for(var e=1,t=15,r=0;r<5;r++)this.squares[r]=this.initCol(e,t),e+=15,t+=15;this.squares[2][2]={number:"★",isFilled:!0,status:""}},methods:{initCol:function(e,t){for(var r=[],n=e;n<=t;n++)r.push({number:n,isFilled:!1,status:""});for(var a=r.length-1;a>0;a--){var s=Math.floor(Math.random()*(a+1)),o=r[a];r[a]=r[s],r[s]=o}return r.slice(0,5)},switchSquareFilled:function(e,t){2===e&&2===t||(this.squares[e][t].isFilled?confirm("このマスを戻しますか？")&&(this.squares[e][t].isFilled=!1):this.squares[e][t].isFilled=!0,this.resetAllSquaresStatus(this.squares),this.updateSquaresVertical(this.squares),this.updateSquaresHorizonal(this.squares),this.updateSquaresDiagonal(this.squares),this.refreshAllSquares())},updateSquaresVertical:function(e){for(var t=0;t<5;t++){var r=this.countFilled(e[t]);this.updateStatus(e[t],r)}},updateSquaresHorizonal:function(e){for(var t=0;t<5;t++){for(var r=[],n=0;n<5;n++)r.push(e[n][t]);var a=this.countFilled(r);this.updateStatus(r,a)}},updateSquaresDiagonal:function(e){for(var t=[],r=[],n=[],a=0;a<5;a++)t.push(e[a][a]),r.push(e[a][4-a]),n=[t,r];for(var s=0;s<n.length;s++){var o=this.countFilled(n[s]);this.updateStatus(n[s],o)}},countFilled:function(e){var t=0;return e.forEach((function(e){e.isFilled&&t++})),t},updateStatus:function(e,t){var r;if(4===t)r="reach";else{if(5!==t)return;r="bingo"}for(var n=0;n<5;n++)if(e[n].isFilled){if("bingo"===e[n].status)continue;e[n].status=r}},resetAllSquaresStatus:function(e){for(var t=0;t<5;t++)for(var r=0;r<5;r++)e[t][r].status=""},refreshAllSquares:function(){for(var e=0;e<5;e++)this.$set(this.squares,e,this.squares[e])}}}),q=_,S=(r("6131"),Object(c["a"])(q,w,y,!1,null,null,null)),N=S.exports,k={name:"App",data:function(){return{mode:"home"}},components:{Host:g,Player:N}},F=k,j=(r("034f"),r("7496")),O=r("a523"),C=r("132d"),P=Object(c["a"])(F,a,s,!1,null,null,null),x=P.exports;d()(P,{VApp:j["a"],VBtn:h["a"],VContainer:O["a"],VIcon:C["a"]});var A=r("9483");Object(A["a"])("".concat("/bingo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var V=r("f309");n["a"].use(V["a"]);var M=new V["a"]({});r("bf40");n["a"].config.productionTip=!1,new n["a"]({vuetify:M,render:function(e){return e(x)}}).$mount("#app")},6131:function(e,t,r){"use strict";var n=r("2f67"),a=r.n(n);a.a},"74cf":function(e,t,r){},"85ec":function(e,t,r){},f824:function(e,t,r){"use strict";var n=r("74cf"),a=r.n(n);a.a}});
//# sourceMappingURL=app.a4abf4ed.js.map