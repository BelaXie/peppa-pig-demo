parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r="\n/* 您好，接下来让我来为您展示小猪佩奇的绘制过程，当前处于慢速状态，若觉得速度太慢，您可以在右侧随时调整速度快慢或暂停，注意哦，瞧好了您咧 */\n   .html {\n    background-color: #89b9f7;\n} \n  .header .face {\n    border: 6px solid #e795c0;\n    border-radius: 55% 45% 45% 55% / 60% 55% 45% 40%;\n    background-color: #ffc4e0;\n  } \n  .header .nose {\n    border: 6px solid #e795c0;\n    border-radius: 50%;\n    transform: rotate(20deg);\n    background-color: #ffc4e0;\n  }\n  .header .nose .nostril {\n    border: 5px solid #e795c0;\n    border-radius: 50%;\n    transform: rotate(20deg); \n    background-color: #ffc4e0;\n  }\n  .header .nose .nostril::before {\n    background-color: #e795c0;\n  }\n  .header .nose .nostril::after {\n    background-color: #e795c0;\n  }\n  .header .nose::before {\n    transform: rotate(5deg);\n    background-color: #ffc4e0;\n  }\n  .header .nose::after {\n    background-color: #ffc4e0;\n    transform: rotate(5deg);\n    border-radius: 70%;\n  }\n  .header .nose .left_eye {\n    border: 6px solid #e795c0;\n    background-color: white;\n    z-index: 1;\n  }\n  .header .nose .left_eye::before {\n    border-radius: 50%;\n    background-color: black;\n  }\n  .header .nose .right_eye {\n    z-index: 1;\n    border: 6px solid #e795c0;\n    background-color: white;\n    \n  }\n  .header .nose .right_eye::before {\n    background-color: black;\n  }\n  .header .nose .check {\n    border-radius: 50%;\n    background-color: #f5aacb;\n    z-index: 1;\n  }\n  .header .face .lip {\n    border: 6px solid #ef3f85;\n    border-radius: 60%;\n  }\n  .header .left_ear {\n    border-radius: 45%;\n    transform: rotate(18deg);\n    border: 6px solid #e795c0;\n    background-color: #ffc4e0;\n    z-index: -1;\n  }\n  .header .right_ear {\n    border-radius: 45%;\n    border: 6px solid #e795c0;\n    transform: rotate(42deg);\n    background-color: #ffc4e0;\n    z-index: -1;\n  }\n  .body .belly {\n    border: 6px solid #ee5253;\n    background-color: #f8756d;\n  }\n  .body .hidden {\n    background-color: #89b9f7;\n    border-top: 6px solid #ee5253;\n  }\n  .body .left_arm {\n    border-radius: 10%;\n    background-color: #ffc4e0;\n    transform: rotate(-30deg);\n    z-index: -1;\n  }\n  .body .left_arm::before {\n    background-color: #ffc4e0;\n    transform: rotate(45deg);\n    border-radius: 15%;\n  }\n  .body .left_arm::after {\n    background-color: #ffc4e0;\n    transform: rotate(120deg);\n    border-radius: 15%;\n  }\n  .body .right_arm {\n    background-color: #ffc4e0;\n    transform: rotate(25deg);\n    border-radius: 10%;\n    z-index: -1;\n  }\n  .body .right_arm::before {\n    background-color: #ffc4e0;\n    transform: rotate(45deg);\n    border-radius: 15%;\n  }\n  .body .right_arm::after {\n    background-color: #ffc4e0;\n    transform: rotate(120deg);\n    border-radius: 15%;\n  }\n  .body .footer .left_foot {\n    width: 8px;\n    height: 40px;\n    background-color: #ffc4e0;\n    margin-left: 50px;\n    float: left;\n  }\n  .body .footer .left_foot::before {\n    background-color: #333333;\n    border-radius: 50% 64% 64% 50%;\n  }\n  .body .footer .right_foot {\n    width: 8px;\n    height: 40px;\n    background-color: #ffc4e0;\n    float: right;\n    margin-right: 50px;\n  }\n  .body .footer .right_foot::before {\n    border-radius: 50% 64% 64% 50%;\n    background-color: #333333;\n  }  \n  .body .footer .shadow {\n    width: 170px;\n    height: 40px;\n    background-color: #678bb9;\n    border-radius: 50%;\n    margin-top: 22px;\n    margin-left: 0px;\n  }\n  /* 展示完毕，感谢您的观看 */\n",n=r;exports.default=n;
},{}],"epB2":[function(require,module,exports) {
"use strict";var n=e(require("./css.js"));function e(n){return n&&n.__esModule?n:{default:n}}var t={n:0,time:50,id:void 0,ui:{show:document.querySelector("#show"),style:document.querySelector("#style")},init:function(){t.play(),t.bindEvents()},eventsHash:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},bindEvents:function(){var n=t.eventsHash;for(var e in n)n.hasOwnProperty(e)&&(document.querySelector(e).onclick=t[n[e]])},play:function(){t.id=setInterval(function(){t.n+=1,t.ui.show.innerText=n.default.substring(0,t.n),t.ui.style.innerHTML=n.default.substring(0,t.n),t.ui.show.scrollTop=t.ui.show.scrollHeight,t.n>n.default.length-1&&clearInterval(t.id)},t.time)},pause:function(){clearInterval(t.id)},slow:function(){t.pause(),t.time=50,t.play()},normal:function(){t.pause(),t.time=20,t.play()},fast:function(){t.pause(),t.time=0,t.play()}};t.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.b7ce57d3.js.map