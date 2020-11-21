(function(e){function t(t){for(var a,l,o=t[0],c=t[1],u=t[2],s=0,d=[];s<o.length;s++)l=o[s],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function l(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"964c8462"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=l(e);var u=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0da5":function(e,t,n){"use strict";n("bdf3")},"51a3":function(e,t,n){},7542:function(e,t,n){"use strict";n("fa86")},bdf3:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"",permanent:!0,"expand-on-hover":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v(" PuzzlePuzzle ")])],1)],1),n("v-divider"),n("AppBar")],1),n("v-main",[n("v-container",[n("Puzzle")],1)],1)],1)},r=[],l=n("a6f4"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{attrs:{"align-content":"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"4",xl:"3"}},[n("PanelPlace")],1),n("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"4",xl:"3"}},[n("PanelList")],1)],1)],1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{"data-testid":"panelcandidates"}},[0===e.panelCandidates.length?n("div",[e._v(" Add Panel! ")]):n("div",[n("v-row",{staticClass:"mb-8"},e._l(e.panelCandidates,(function(e){return n("PanelListItem",{key:e.id,attrs:{id:e.id,asset:e.asset}})})),1)],1)])])},s=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-img",{attrs:{src:e.state.asset,width:"50",height:"50"},on:{click:e.addPanelToCanvas}}),n("v-icon",{on:{click:e.deletePanelCandidate}},[e._v("mdi-delete")])],1)},d=[],v=(n("a9e3"),Object(l["c"])({name:"PanelListItem",props:{id:Number,asset:String},setup:function(e){var t=Object(l["d"])("vuex-store"),n=Object(l["g"])({id:e.id,asset:e.asset});function a(){t.commit("panelQueue/push",n.asset,{root:!0})}function i(){t.commit("panel/delete",n,{root:!0})}return{state:n,addPanelToCanvas:a,deletePanelCandidate:i}}})),f=v,h=n("2877"),b=n("6544"),m=n.n(b),g=n("132d"),j=n("adda"),O=Object(h["a"])(f,p,d,!1,null,null,null),w=O.exports;m()(O,{VIcon:g["a"],VImg:j["a"]});var y=Object(l["c"])({name:"PanelList",setup:function(){var e=Object(l["d"])("vuex-store"),t=Object(l["a"])((function(){return e.state.panel.panel}));return{panelCandidates:t}},components:{PanelListItem:w}}),k=y,C=n("0fd9"),_=Object(h["a"])(k,u,s,!1,null,null,null),I=_.exports;m()(_,{VRow:C["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"panelRef"}),n("a",{ref:"downloadRef",attrs:{href:"",download:"myPuzzle.png"},on:{click:e.saveCanvas}}),n("img",{ref:"imgRef",attrs:{src:e.img,id:"imgRef"},on:{click:e.changeBackground}})])},x=[],L=(n("b65f"),n("18a5"),n("d4ec")),V=n("bee2"),B=n("262e"),S=n("2caf"),A=n("22a2"),E=function(e){Object(B["a"])(n,e);var t=Object(S["a"])(n);function n(e,a){var i;return Object(L["a"])(this,n),i=t.call(this),i.panelSize=e,i.texture=a,i.width=i.panelSize,i.height=i.panelSize,i.interactive=!0,i.buttonMode=!0,i.anchor.set(.5),i.dragging=!1,i.x=20,i.y=20,i.data=new A["d"],i.on("pointerdown",i.onDragStart).on("pointerup",i.onDragEnd).on("pointerupoutside",i.onDragEnd).on("pointermove",i.onDragMove),i}return Object(V["a"])(n,[{key:"onDragStart",value:function(e){this.data=e.data,this.alpha=.5,this.dragging=!0}},{key:"onDragEnd",value:function(){this.alpha=1,this.dragging=!1,this.x=Math.trunc(this.x/this.width)*this.width+this.width/2,this.y=Math.trunc(this.y/this.height)*this.height+this.height/2,(this.x<0||this.x>this.parent.parent.width||this.y<0||this.y>this.parent.parent.height)&&this.destroy()}},{key:"onDragMove",value:function(){if(this.dragging){var e=this.data.getLocalPosition(this.parent);this.x=e.x,this.y=e.y}}}]),n}(A["e"]),R=function(e){Object(B["a"])(n,e);var t=Object(S["a"])(n);function n(e,a,i,r,l){var o;return Object(L["a"])(this,n),o=t.call(this),o.width=e,o.height=a,o.numRow=i,o.numColumn=r,o.panelSize=l,o.addChild(o.createLine(o.numRow,o.numColumn,o.panelSize)),o}return Object(V["a"])(n,[{key:"createLine",value:function(e,t,n){var a=new A["c"],i=e*n,r=t*n;a.lineStyle(2,1048575,1);for(var l=0;l<t+1;l++)a.beginFill(),a.moveTo(l*n,0),a.lineTo(l*n,i),a.endFill();for(var o=0;o<e+1;o++)a.beginFill(),a.moveTo(0,o*n),a.lineTo(r,o*n),a.endFill();return a}}]),n}(A["b"]);function z(e){var t=null===e.parentElement?1:e.parentElement.offsetWidth/e.offsetWidth,n=null===e.parentElement?1:e.parentElement.offsetHeight/e.offsetHeight,a=Math.min(t,n);e.style.transformOrigin="0 0",e.style.transform="scale(".concat(a,")")}var T=Object(l["c"])({name:"PanelPlace",setup:function(){var e=Object(l["d"])("vuex-store"),t=Object(l["h"])(),n=Object(l["h"])(),a=Object(l["h"])(),i=Object(l["h"])(),r=new A["a"]({autoDensity:!0,width:240,height:480,backgroundColor:16777215,resolution:window.devicePixelRatio||1}),o=6,c=12,u=40,s=new A["b"];s.width=r.stage.width,s.height=r.stage.height;var p=new R(r.stage.width,r.stage.height,c,o,u),d=new A["b"];function v(e){var t=r.renderer.plugins.extract.canvas(r.stage);e.target.href=t.toDataURL("image/png")}function f(){var e=A["e"].from(n.value);s.addChild(e)}return d.width=r.stage.width,d.height=r.stage.height,r.stage.addChild(s),r.stage.addChild(p),r.stage.addChild(d),Object(l["e"])((function(){var e=r.view;a.value.appendChild(e),window.addEventListener("resize",(function(){z(e)})),z(e)})),Object(l["i"])((function(){var t=e.state.panelQueue.panelQueue;if(null!==t){var n=A["f"].from(t),a=new E(u,n);d.addChild(a),e.commit("panelQueue/pop",{root:!0})}})),Object(l["i"])((function(){var t=e.state.panelGrid.panelGrid;p.visible=!0===t})),Object(l["i"])((function(){var t=e.state.panelClear.panelClear;!0===t&&(d.removeChildren(),e.commit("panelClear/clear",{root:!0}))})),Object(l["i"])((function(){var t=e.state.panelSave.panelSave;!0===t&&(i.value.click(),e.commit("panelSave/save",{root:!0}))})),Object(l["i"])((function(){var a=e.state.panelBackground.panelBackground;""!==a&&(t.value=a,n.value.click())})),{panelRef:a,downloadRef:i,imgRef:n,img:t,saveCanvas:v,changeBackground:f}}}),G=T,D=(n("0da5"),Object(h["a"])(G,P,x,!1,null,"c09a003a",null)),$=D.exports,M=Object(l["c"])({name:"Puzzle",components:{PanelPlace:$,PanelList:I}}),Q=M,F=n("62ad"),N=Object(h["a"])(Q,o,c,!1,null,null,null),U=N.exports;m()(N,{VCol:F["a"],VRow:C["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-list",[n("AppBarPanel"),n("AppBarBackground"),n("AppBarGrid"),n("AppBarSave"),n("AppBarClear"),n("v-divider"),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[e._v("mdi-help-circle")])],1),n("v-list-item-title",[e._v("How to use")])],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[e._v("mdi-information")])],1),n("v-list-item-title",[e._v(" About ")])],1)],1)],1)},q=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-list-item",{on:{click:e.buttonClick}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-upload")])],1),n("v-list-item-title",[e._v("Add Panel")])],1),n("input",{ref:"fileInputRef",attrs:{type:"file",multiple:"",accept:"image/*",label:"File input"},on:{change:e.addPanelCandidate}})],1)},W=[],K=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("b85c")),X=Object(l["c"])({name:"AppBarPanel",setup:function(){var e=Object(l["h"])(),t=Object(l["d"])("vuex-store");function n(e){if(null!==e.target.files&&0!==e.target.files.length){var n,a=t.state.panel.panel.length,i=Object(K["a"])(e.target.files);try{for(i.s();!(n=i.n()).done;){var r=n.value,l=URL.createObjectURL(r);t.commit("panel/add",{id:a++,asset:l},{root:!0})}}catch(o){i.e(o)}finally{i.f()}}e.target.value=""}function a(){e.value.click()}return{addPanelCandidate:n,buttonClick:a,fileInputRef:e}}}),Y=X,Z=(n("d276"),n("da13")),ee=n("34c3"),te=n("5d23"),ne=Object(h["a"])(Y,J,W,!1,null,"a12f7c12",null),ae=ne.exports;m()(ne,{VIcon:g["a"],VListItem:Z["a"],VListItemIcon:ee["a"],VListItemTitle:te["b"]});var ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-list-item",{on:{click:e.buttonClick}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-flip-to-back")])],1),n("v-list-item-title",[e._v("Background")])],1),n("input",{ref:"backgroundInputRef",attrs:{type:"file",accept:"image/*",label:"File input"},on:{change:e.backgroundChange}})],1)},re=[],le=Object(l["c"])({name:"AppBarBackGround",setup:function(){var e=Object(l["h"])(),t=Object(l["d"])("vuex-store");function n(){e.value.click()}function a(e){if(null!==e.target.files&&0!==e.target.files.length){var n=URL.createObjectURL(e.target.files[0]);t.commit("panelBackground/add",n,{root:!0})}}return{backgroundInputRef:e,buttonClick:n,backgroundChange:a}}}),oe=le,ce=(n("7542"),Object(h["a"])(oe,ie,re,!1,null,"bb62330c",null)),ue=ce.exports;m()(ce,{VIcon:g["a"],VListItem:Z["a"],VListItemIcon:ee["a"],VListItemTitle:te["b"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{on:{click:e.showGrid}},[n("v-list-item-icon",[n("v-icon",[e._v(" mdi-grid ")])],1),n("v-list-item-title",[e._v(" Grid ")])],1)},pe=[],de=Object(l["c"])({name:"AppBarGrid",setup:function(){var e=Object(l["d"])("vuex-store");function t(){e.commit("panelGrid/show")}return{showGrid:t}}}),ve=de,fe=Object(h["a"])(ve,se,pe,!1,null,null,null),he=fe.exports;m()(fe,{VIcon:g["a"],VListItem:Z["a"],VListItemIcon:ee["a"],VListItemTitle:te["b"]});var be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{on:{click:e.panelSave}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-content-save")])],1),n("v-list-item-title",[e._v(" Save ")])],1)},me=[],ge=Object(l["c"])({name:"AppBarSave",setup:function(){var e=Object(l["d"])("vuex-store");function t(){e.commit("panelSave/save")}return{panelSave:t}}}),je=ge,Oe=Object(h["a"])(je,be,me,!1,null,null,null),we=Oe.exports;m()(Oe,{VIcon:g["a"],VListItem:Z["a"],VListItemIcon:ee["a"],VListItemTitle:te["b"]});var ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{on:{click:e.panelClear}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-close")])],1),n("v-list-item-title",[e._v(" Clear ")])],1)},ke=[],Ce=Object(l["c"])({name:"AppBarClear",setup:function(){var e=Object(l["d"])("vuex-store");function t(){e.commit("panelClear/clear")}return{panelClear:t}}}),_e=Ce,Ie=Object(h["a"])(_e,ye,ke,!1,null,null,null),Pe=Ie.exports;m()(Ie,{VIcon:g["a"],VListItem:Z["a"],VListItemIcon:ee["a"],VListItemTitle:te["b"]});var xe=Object(l["c"])({name:"AppBar",components:{AppBarPanel:ae,AppBarBackground:ue,AppBarGrid:he,AppBarSave:we,AppBarClear:Pe}}),Le=xe,Ve=n("ce7e"),Be=n("8860"),Se=Object(h["a"])(Le,H,q,!1,null,null,null),Ae=Se.exports;m()(Se,{VDivider:Ve["a"],VIcon:g["a"],VList:Be["a"],VListItem:Z["a"],VListItemIcon:ee["a"],VListItemTitle:te["b"]});var Ee=Object(l["c"])({name:"App",setup:function(){var e=Object(l["h"])(!0);return{drawer:e}},components:{Puzzle:U,AppBar:Ae}}),Re=Ee,ze=n("7496"),Te=n("a523"),Ge=n("f6c4"),De=n("f774"),$e=Object(h["a"])(Re,i,r,!1,null,null,null),Me=$e.exports;m()($e,{VApp:ze["a"],VContainer:Te["a"],VDivider:Ve["a"],VListItem:Z["a"],VListItemContent:te["a"],VListItemTitle:te["b"],VMain:Ge["a"],VNavigationDrawer:De["a"]});var Qe=n("9483");Object(Qe["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Fe=n("8c4f");a["default"].use(Fe["a"]);var Ne=[{path:"/",name:"Puzzle",component:U},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Ue=new Fe["a"]({mode:"history",base:"",routes:Ne}),He=Ue,qe=n("2f62"),Je=(n("4de4"),n("9ab4")),We=n("6fc5"),Ke=function(e){Object(B["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;return Object(L["a"])(this,n),e=t.apply(this,arguments),e.panel=[],e}return Object(V["a"])(n,[{key:"add",value:function(e){this.panel.push(e)}},{key:"delete",value:function(e){this.panel=this.panel.filter((function(t){return t.id!==e.id}))}}]),n}(We["c"]);Object(Je["a"])([We["b"]],Ke.prototype,"add",null),Object(Je["a"])([We["b"]],Ke.prototype,"delete",null),Ke=Object(Je["a"])([Object(We["a"])({namespaced:!0,name:"panel"})],Ke);var Xe=Ke,Ye=function(e){Object(B["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;return Object(L["a"])(this,n),e=t.apply(this,arguments),e.panelQueue=null,e}return Object(V["a"])(n,[{key:"push",value:function(e){this.panelQueue=e}},{key:"pop",value:function(){this.panelQueue=null}}]),n}(We["c"]);Object(Je["a"])([We["b"]],Ye.prototype,"push",null),Object(Je["a"])([We["b"]],Ye.prototype,"pop",null),Ye=Object(Je["a"])([Object(We["a"])({namespaced:!0,name:"panelQueue"})],Ye);var Ze=Ye,et=function(e){Object(B["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;return Object(L["a"])(this,n),e=t.apply(this,arguments),e.panelGrid=!0,e}return Object(V["a"])(n,[{key:"show",value:function(){this.panelGrid=!this.panelGrid}}]),n}(We["c"]);Object(Je["a"])([We["b"]],et.prototype,"show",null),et=Object(Je["a"])([Object(We["a"])({namespaced:!0,name:"panelGrid"})],et);var tt=et,nt=function(e){Object(B["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;return Object(L["a"])(this,n),e=t.apply(this,arguments),e.panelClear=!0,e}return Object(V["a"])(n,[{key:"clear",value:function(){this.panelClear=!this.panelClear}}]),n}(We["c"]);Object(Je["a"])([We["b"]],nt.prototype,"clear",null),nt=Object(Je["a"])([Object(We["a"])({namespaced:!0,name:"panelClear"})],nt);var at=nt,it=function(e){Object(B["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;return Object(L["a"])(this,n),e=t.apply(this,arguments),e.panelSave=!1,e}return Object(V["a"])(n,[{key:"save",value:function(){this.panelSave=!this.panelSave}}]),n}(We["c"]);Object(Je["a"])([We["b"]],it.prototype,"save",null),it=Object(Je["a"])([Object(We["a"])({namespaced:!0,name:"panelSave"})],it);var rt=it,lt=function(e){Object(B["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;return Object(L["a"])(this,n),e=t.apply(this,arguments),e.panelBackground="",e}return Object(V["a"])(n,[{key:"add",value:function(e){this.panelBackground=e}},{key:"delete",value:function(){this.panelBackground=""}}]),n}(We["c"]);Object(Je["a"])([We["b"]],lt.prototype,"add",null),Object(Je["a"])([We["b"]],lt.prototype,"delete",null),lt=Object(Je["a"])([Object(We["a"])({namespaced:!0,name:"panel"})],lt);var ot=lt;a["default"].use(qe["a"]);var ct=new qe["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{panel:Xe,panelQueue:Ze,panelGrid:tt,panelClear:at,panelSave:rt,panelBackground:ot}}),ut=n("f309");a["default"].use(ut["a"]);var st=new ut["a"]({});a["default"].use(l["b"]),a["default"].config.productionTip=!1,new a["default"]({setup:function(){Object(l["f"])("vuex-store",ct)},router:He,store:ct,vuetify:st,render:function(e){return e(Me)}}).$mount("#app")},d276:function(e,t,n){"use strict";n("51a3")},fa86:function(e,t,n){}});
//# sourceMappingURL=app.b602ba96.js.map