/*! For license information please see 28.8ec6d3f8.chunk.js.LICENSE.txt */
(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[28],{109:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),i=n.n(a),s=n(11),c=n.n(s),u=n(94),l=n.n(u),d=n(95),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,s=e.tag,c=e.form,u=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];u.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.mapToCssModules)(l()(t,a?"no-gutters":null,c?"form-row":"row",p),n);return i.a.createElement(s,Object(r.a)({},f,{className:m}))};b.propTypes=p,b.defaultProps=m,t.a=b},110:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),i=n.n(a),s=n(11),c=n.n(s),u=n(94),l=n.n(u),d=n(95),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,s=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];a.forEach((function(t,r){var o=e[t];if(delete c[t],o||""===o){var a=!r;if(Object(d.isObject)(o)){var i,s=a?"-":"-"+t+"-",f=y(a,t,o.size);u.push(Object(d.mapToCssModules)(l()(((i={})[f]=o.size||""===o.size,i["order"+s+o.order]=o.order||0===o.order,i["offset"+s+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=y(a,t,o);u.push(p)}}})),u.length||u.push("col");var f=Object(d.mapToCssModules)(l()(t,u),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};g.propTypes=m,g.defaultProps=b,t.a=g},123:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),i=n.n(a),s=n(11),c=n.n(s),u=n(94),l=n.n(u),d=n(95),f={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.color,s=e.body,c=e.inverse,u=e.outline,f=e.tag,p=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(l()(t,"card",!!c&&"text-white",!!s&&"card-body",!!a&&(u?"border":"bg")+"-"+a),n);return i.a.createElement(f,Object(r.a)({},m,{className:b,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},124:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),i=n.n(a),s=n(11),c=n.n(s),u=n(94),l=n.n(u),d=n(95),f={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,s=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.mapToCssModules)(l()(t,"card-body"),n);return i.a.createElement(s,Object(r.a)({},c,{className:u,ref:a}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},655:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(109),i=n(110),s=n(123),c=n(124),u=n(10);class l extends r.Component{constructor(...e){super(...e),this.state={notificationVar:[],new:""}}componentDidMount(){u.b.collection("Notifcations").get().then(e=>{e.forEach(e=>{var t={subject:e.data().subject,body:e.data().body};this.state.notificationVar.push(t)});let t=this.state.notificationVar.map((e,t)=>o.a.createElement("tr",{key:t},o.a.createElement("td",null,t+1),o.a.createElement("td",{className:"font-weight-bold"},e.subject),o.a.createElement("td",null,e.body)));this.setState({new:t}),console.log("componentDidMount",this.state.notificationVar)})}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{className:"page-title"},o.a.createElement(i.a,{md:3,xl:6},o.a.createElement("h4",{className:"mb-1 mt-0"},"Notifications"))),o.a.createElement(s.a,null,o.a.createElement(c.a,null,o.a.createElement(a.a,null,console.log("notificationVar",this.state.notificationVar),o.a.createElement("table",{class:"table thead-dark table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"#"),o.a.createElement("th",{scope:"col"},"Subject"),o.a.createElement("th",{scope:"col"},"Body"))),o.a.createElement("tbody",null,this.state.new))))))}}t.default=l},94:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},95:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return s})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return u})),n.d(t,"conditionallyUpdateScrollbar",(function(){return l})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return y})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return E})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return j})),n.d(t,"TransitionPropTypeKeys",(function(){return w})),n.d(t,"TransitionStatuses",(function(){return T})),n.d(t,"keyCodes",(function(){return x})),n.d(t,"PopperPlacements",(function(){return N})),n.d(t,"canUseDOM",(function(){return M})),n.d(t,"isReactRefObj",(function(){return A})),n.d(t,"toNumber",(function(){return C})),n.d(t,"isObject",(function(){return R})),n.d(t,"isFunction",(function(){return S})),n.d(t,"findDOMElements",(function(){return k})),n.d(t,"isArrayOrNodeList",(function(){return D})),n.d(t,"getTarget",(function(){return I})),n.d(t,"defaultToggleEvents",(function(){return V})),n.d(t,"addMultipleEventListeners",(function(){return $})),n.d(t,"focusableElements",(function(){return G}));var r,o=n(11),a=n.n(o);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function u(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function l(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function m(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var b={};function y(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function g(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&y('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),s=3;s<a;s++)i[s-3]=arguments[s];return e.apply(void 0,[n,r,o].concat(i))}}var h="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=a.a.oneOfType([a.a.string,a.a.func,v,a.a.shape({current:a.a.any})]),O=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},w=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],T={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},x={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},N=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function A(e){return!(!e||"object"!==typeof e)&&"current"in e}function P(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function C(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===P(e))return NaN;if(R(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=R(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function R(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(!R(e))return!1;var t=P(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function k(e){if(A(e))return e.current;if(S(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function D(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function I(e,t){var n=k(e);return t?D(n)?n:null===n?[]:[n]:D(n)?n[0]:n}var V=["touchstart","click"];function $(e,t,n,r){var o=e;D(o)||(o=[o]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!D(o)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}}var G=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']}}]);
//# sourceMappingURL=28.8ec6d3f8.chunk.js.map