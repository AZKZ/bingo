(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/bingo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"2f67":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",[n("div",{attrs:{id:"app"}},["home"!=e.mode?n("div",[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"secondary"},on:{click:e.backHome}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-home")]),e._v("Home ")],1)],1):e._e(),"home"==e.mode?n("div",[n("p",{staticClass:"ma-8 text-h1 font-weight-medium font-italic",attrs:{id:"title"}},[e._v("Bingo")]),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"secondary"},on:{click:function(t){e.mode="host"}}},[e._v("Host")]),n("br"),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"secondary"},on:{click:function(t){e.mode="player"}}},[e._v("Player")])],1):e._e(),"host"==e.mode?n("Host"):e._e(),"player"==e.mode?n("Player"):e._e()],1)])],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"host"}},[n("p",{staticClass:"ma-2 text-h4 font-weight-thin",attrs:{color:"info"}},[e._v("ID:"+e._s(e.bingoId))]),n("p",{staticClass:"ma-2 text-h1 font-weight-black",attrs:{id:"number"}},[e._v(e._s(e.number))]),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"primary"},on:{click:e.drawNumber}},[e._v("Draw")]),n("v-row",{staticClass:"ma-2",attrs:{"no-gutters":""}},e._l(e.drawnNumbers.length,(function(t){return n("v-col",{key:t,attrs:{cols:"2",md:"1"}},[n("v-card",{attrs:{outlined:"",tile:""}},[n("span",{staticClass:"text-h4 font-weight-bold"},[e._v(e._s(e.drawnNumbers[t-1]))])])],1)})),1)],1)},s=[],u=(n("caad"),n("2532"),{name:"Host",data:function(){return{number:"START",drawnNumbers:[],bingoId:""}},created:function(){for(var e=0;e<6;e++)this.bingoId+=this.getRandomNumber(1,9)},methods:{drawNumber:function(){if(isNaN(this.number)||(this.drawnNumbers.push(this.number),this.drawnNumbers.sort((function(e,t){return e<t?-1:e>t?1:0}))),this.drawnNumbers.length>=75)this.number="END";else{var e=this.getRandomNumber(1,75);while(this.drawnNumbers.includes(e))e=this.getRandomNumber(1,75);this.showDrawAnimation(e,2)}},getRandomNumber:function(e,t){return Math.floor(e+Math.random()*(t-e+1))},showDrawAnimation:function(e,t){var n=new Date,r=this,a=function a(){r.number=r.getRandomNumber(1,75);var i=setTimeout(a,10);new Date-n>1e3*t&&(clearTimeout(i),r.number=e)};a()}}}),c=u,l=n("2877"),d=n("6544"),f=n.n(d),h=n("8336"),p=n("b0af"),v=n("62ad"),b=n("0fd9"),m=Object(l["a"])(c,o,s,!1,null,null,null),g=m.exports;f()(m,{VBtn:h["a"],VCard:p["a"],VCol:v["a"],VRow:b["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"player"}},[n("p",{staticClass:"ma-2 text-h4 font-weight-thin",attrs:{color:"info"}},[e._v("ID:"+e._s(e.bingoId))]),n("div",{staticClass:"d-flex justify-center ma-2"},[n("table",{attrs:{border:"1"}},e._l(5,(function(t){return n("tr",{key:t},e._l(5,(function(r){return n("td",{key:r,staticClass:"square",class:[{filled:e.squares[r-1][t-1].isFilled},e.squares[r-1][t-1].status],on:{click:function(n){return e.switchSquareFilled(r-1,t-1,e.squares)}}},[e._v(e._s(e.squares[r-1][t-1].number))])})),0)})),0)]),n("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"primary","x-small":""}},"v-btn",a,!1),r),[e._v(" New Bingo Game ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",[e._v("New Bingo Game")])]),n("v-card-text",[n("v-container",[n("v-text-field",{attrs:{label:"Bingo ID",required:""},model:{value:e.bingoId,callback:function(t){e.bingoId=t},expression:"bingoId"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.createBingoCard(e.bingoId)}}},[e._v("Start")])],1)],1)],1)],1)},x=[],y=(n("4160"),n("fb6a"),n("159b"),n("96cf"),n("1da1")),_=n("0581"),S={name:"Player",data:function(){return{bingoId:"",dialog:!1,squares:[[],[],[],[],[]]}},created:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.squares=this.getNewSquares(),e.next=3,this.getLatestBingoId();case 3:this.bingoId=e.sent,null===this.bingoId?this.dialog=!0:this.createBingoCard(this.bingoId);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getLatestBingoId:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getBingoObjectStore();case 2:return t=e.sent,e.next=5,t.count();case 5:if(e.t0=e.sent,0!==e.t0){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,t.index("updateDateTime");case 10:return n=e.sent,e.next=13,n.openCursor(null,"prev");case 13:return r=e.sent,e.next=16,r.value.bingoId;case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createBingoCard:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getBingoObjectStore();case 2:return n=e.sent,e.next=5,n.get(t);case 5:return r=e.sent,e.next=8,r;case 8:if(e.t0=e.sent,e.t1=void 0,e.t0!==e.t1){e.next=18;break}return e.next=13,this.getNewSquares();case 13:return this.squares=e.sent,e.next=16,n.add({bingoId:t,squares:this.squares,updateDateTime:(new Date).getTime()});case 16:e.next=21;break;case 18:return e.next=20,r.squares;case 20:this.squares=e.sent;case 21:this.dialog=!1;case 22:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),saveBingoCard:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getBingoObjectStore();case 2:return r=e.sent,e.next=5,{bingoId:t,squares:n,updateDateTime:(new Date).getTime()};case 5:return a=e.sent,e.next=8,r.put(a);case 8:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),getBingoObjectStore:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.openBingoDb();case 2:return t=e.sent,e.next=5,t.transaction("bingocards","readwrite");case 5:return n=e.sent,e.next=8,n.objectStore("bingocards");case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),openBingoDb:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(_["a"])("BingoDatabase",1,{upgrade:function(e){var t=e.createObjectStore("bingocards",{keyPath:"bingoId"});t.createIndex("updateDateTime","updateDateTime")}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getNewSquares:function(){for(var e=[[],[],[],[],[]],t=1,n=15,r=0;r<5;r++)e[r]=this.initCol(t,n),t+=15,n+=15;return e[2][2]={number:"★",isFilled:!0,status:""},e},initCol:function(e,t){for(var n=[],r=e;r<=t;r++)n.push({number:r,isFilled:!1,status:""});for(var a=n.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),o=n[a];n[a]=n[i],n[i]=o}return n.slice(0,5)},switchSquareFilled:function(e,t,n){2===e&&2===t||(n[e][t].isFilled?confirm("このマスを戻しますか？")&&(n[e][t].isFilled=!1):n[e][t].isFilled=!0,this.resetAllSquaresStatus(n),this.updateSquaresVertical(n),this.updateSquaresHorizonal(n),this.updateSquaresDiagonal(n),this.refreshAllSquares(n),this.saveBingoCard(this.bingoId,n))},updateSquaresVertical:function(e){for(var t=0;t<5;t++){var n=this.countFilled(e[t]);this.updateStatus(e[t],n)}},updateSquaresHorizonal:function(e){for(var t=0;t<5;t++){for(var n=[],r=0;r<5;r++)n.push(e[r][t]);var a=this.countFilled(n);this.updateStatus(n,a)}},updateSquaresDiagonal:function(e){for(var t=[],n=[],r=[],a=0;a<5;a++)t.push(e[a][a]),n.push(e[a][4-a]),r=[t,n];for(var i=0;i<r.length;i++){var o=this.countFilled(r[i]);this.updateStatus(r[i],o)}},countFilled:function(e){var t=0;return e.forEach((function(e){e.isFilled&&t++})),t},updateStatus:function(e,t){var n;if(4===t)n="reach";else{if(5!==t)return;n="bingo"}for(var r=0;r<5;r++)if(e[r].isFilled){if("bingo"===e[r].status)continue;e[r].status=n}},resetAllSquaresStatus:function(e){for(var t=0;t<5;t++)for(var n=0;n<5;n++)e[t][n].status=""},refreshAllSquares:function(e){this.squares=e}}},k=S,q=(n("6131"),n("99d9")),C=n("a523"),j=n("169a"),O=n("2fa4"),N=n("8654"),I=Object(l["a"])(k,w,x,!1,null,null,null),B=I.exports;f()(I,{VBtn:h["a"],VCard:p["a"],VCardActions:q["a"],VCardText:q["b"],VCardTitle:q["c"],VContainer:C["a"],VDialog:j["a"],VSpacer:O["a"],VTextField:N["a"]});var D={name:"App",data:function(){return{mode:"home"}},components:{Host:g,Player:B},methods:{backHome:function(){confirm("HOME画面に戻りますか？")&&(this.mode="home")}}},R=D,V=(n("034f"),n("7496")),F=n("132d"),T=Object(l["a"])(R,a,i,!1,null,null,null),A=T.exports;f()(T,{VApp:V["a"],VBtn:h["a"],VContainer:C["a"],VIcon:F["a"]});var P=n("9483");Object(P["a"])("".concat("/bingo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var H=n("f309");r["a"].use(H["a"]);var M=new H["a"]({});n("bf40");r["a"].config.productionTip=!1,new r["a"]({vuetify:M,render:function(e){return e(A)}}).$mount("#app")},6131:function(e,t,n){"use strict";var r=n("2f67"),a=n.n(r);a.a},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.d0520325.js.map