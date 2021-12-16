(()=>{"use strict";var n={123:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,".add-candidate-container{\r\n    position: absolute;\r\n    display: flex;\r\n    width:100%;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    visibility: hidden;\r\n    z-index: 100;\r\n}\r\n.add-candidate-form{\r\n    background-color: white;\r\n    width: 60%;\r\n    padding: 10px;\r\n}\r\n.visible{\r\n    visibility: visible;\r\n}\r\ninput ~ span{\r\n    color: black;\r\n}",""]);const c=a},772:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"body, html{\r\n    height: 100%;\r\n    margin: 0;\r\n    background-color: #73b387;\r\n}\r\na, h1, h2, h3, h4, h5, h6, img{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.main{\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: row;\r\n    height: 100%;\r\n}\r\n.nav-container{\r\n    width: 20vw;\r\n    min-height: 100vh;\r\n    height:100%;\r\n    background-color: #538736;\r\n    box-shadow: 0 0 10px 5px rgba(0,0,0,0.05);\r\n}\r\n\r\n\r\n.profile-container{\r\n    display: grid;\r\n    grid-template-columns: 2fr 8fr;\r\n    gap: 5px;\r\n    color: white;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n.profile-container > img{\r\n    max-width: 50px;\r\n    justify-self: center;\r\n    align-self: center;\r\n    padding: 5px;\r\n}\r\n.avatar{\r\n    width: 50px;\r\n    height: 50px;\r\n    user-select: none;\r\n    border-radius: 50%;\r\n}\r\n.user-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.tab-container{\r\n    color: white;\r\n    font-weight: bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: max-content;\r\n}\r\n.tab-container > a{\r\n    padding: 10px;\r\n}\r\n.tab-container > a:not(.active){\r\n    cursor: pointer;\r\n}\r\n.tab-container > a:not(.active):hover{\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n.tab-container > a.active{\r\n    background-color: rgba(0,0,0,0.2);\r\n    pointer-events: none;\r\n}\r\n.tab-container > a:active{\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n.status{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 12px;\r\n}\r\n.nav-tab{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    user-select: none;\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n.tab-text{\r\n    width: 70%;\r\n}\r\n.log-out{\r\n    justify-self: flex-end;\r\n}\r\n.content-container{\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.content-header{\r\n    font-size: x-large;\r\n    color: #ffffff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 5px;\r\n}\r\n.line-break{\r\n    border-color: #81b181;\r\n}\r\n.add-btn{\r\n    font-size: 1.2em;\r\n}\r\n.dash-header{\r\n    color: white;\r\n    font-size: 20px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.05);\r\n    padding: 5px 10px 10px;\r\n}\r\n.card-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    gap: 10px;\r\n    padding: 5px;\r\n}\r\n.election-card{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: rgba(0,0,0,0.1);\r\n    border: 1px solid #488558;\r\n    padding: 5px;\r\n    flex-direction: column;\r\n    color: #0e2d1e;\r\n    user-select: none;\r\n    cursor: pointer;\r\n}\r\n.election-card:hover{\r\n    background-color: rgba(0,0,0,0.05);\r\n}\r\n.election-card:active{\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n.card-title{\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n.card-count{\r\n    font-size: 10px;\r\n    align-self: flex-end;\r\n}\r\n.election-card > img{\r\n    max-width: 30%;\r\n}\r\n\r\n.modal{\r\n    flex: 1;\r\n    position: absolute;\r\n    display: flex;\r\n    width:100%;\r\n    height: 100vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    visibility: hidden;\r\n    z-index: 100;\r\n}\r\n.visible{\r\n    visibility: visible;\r\n}",""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},822:(n,r,e)=>{n.exports=e.p+"30038340d1a879697f06.png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(822),r=e(379),t=e.n(r),o=e(795),i=e.n(o),a=e(569),c=e.n(a),s=e(565),l=e.n(s),d=e(216),p=e.n(d),u=e(589),f=e.n(u),h=e(772),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var b=e(123),v={};function m(n,r,e){const t=document.createElement(n);return t.className=r,e&&(t.id=e),t}v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),t()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals,document.getElementById("navElection").classList.add("active"),function(){const r=document.getElementById("cards");fetch("https://evo-poll.herokuapp.com/elections").then((n=>n.json())).then((e=>{e.elections.map((e=>{const t=function(r,e,t){const o=m("div","election-card"),i=new Image;i.src=n;const a=m("p","card-title");a.textContent=e;const c=m("h6","card-count");return c.textContent="Total Votes: 0",function(n=HTMLElement,r=[]){r.every((r=>n.appendChild(r)))}(o,[i,a,c]),o.addEventListener("click",(n=>{window.location.href=`/elections/&id=${r}`})),o}(e.election_id,e.title);r.appendChild(t)}))}))}()})()})();