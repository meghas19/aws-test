/*! For license information please see 20.2f6684c6.chunk.js.LICENSE.txt */
(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[20],{109:function(e,t,a){"use strict";var n=a(7),r=a(14),l=a(0),o=a.n(l),s=a(11),c=a.n(s),i=a(94),d=a.n(i),m=a(95),u=c.a.oneOfType([c.a.number,c.a.string]),f={tag:m.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,a=e.cssModule,l=e.noGutters,s=e.tag,c=e.form,i=e.widths,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(t,a){var n=e[t];if(delete u[t],n){var r=!a;f.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var b=Object(m.mapToCssModules)(d()(t,l?"no-gutters":null,c?"form-row":"row",f),a);return o.a.createElement(s,Object(n.a)({},u,{className:b}))};p.propTypes=f,p.defaultProps=b,t.a=p},110:function(e,t,a){"use strict";var n=a(7),r=a(14),l=a(0),o=a.n(l),s=a(11),c=a.n(s),i=a(94),d=a.n(i),m=a(95),u=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:u,offset:u})]),b={tag:m.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,l=e.widths,s=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];l.forEach((function(t,n){var r=e[t];if(delete c[t],r||""===r){var l=!n;if(Object(m.isObject)(r)){var o,s=l?"-":"-"+t+"-",u=g(l,t,r.size);i.push(Object(m.mapToCssModules)(d()(((o={})[u]=r.size||""===r.size,o["order"+s+r.order]=r.order||0===r.order,o["offset"+s+r.offset]=r.offset||0===r.offset,o)),a))}else{var f=g(l,t,r);i.push(f)}}})),i.length||i.push("col");var u=Object(m.mapToCssModules)(d()(t,i),a);return o.a.createElement(s,Object(n.a)({},c,{className:u}))};E.propTypes=b,E.defaultProps=p,t.a=E},121:function(e,t,a){"use strict";var n=a(7),r=a(14),l=a(0),o=a.n(l),s=a(11),c=a.n(s),i=a(94),d=a.n(i),m=a(95),u={tag:m.tagPropType,listTag:m.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},f=function(e){var t=e.className,a=e.listClassName,l=e.cssModule,s=e.children,c=e.tag,i=e.listTag,u=e["aria-label"],f=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.mapToCssModules)(d()(t),l),p=Object(m.mapToCssModules)(d()("breadcrumb",a),l);return o.a.createElement(c,Object(n.a)({},f,{className:b,"aria-label":u}),o.a.createElement(i,{className:p},s))};f.propTypes=u,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=f},122:function(e,t,a){"use strict";var n=a(7),r=a(14),l=a(0),o=a.n(l),s=a(11),c=a.n(s),i=a(94),d=a.n(i),m=a(95),u={tag:m.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,l=e.active,s=e.tag,c=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(m.mapToCssModules)(d()(t,!!l&&"active","breadcrumb-item"),a);return o.a.createElement(s,Object(n.a)({},c,{className:i,"aria-current":l?"page":void 0}))};f.propTypes=u,f.defaultProps={tag:"li"},t.a=f},123:function(e,t,a){"use strict";var n=a(7),r=a(14),l=a(0),o=a.n(l),s=a(11),c=a.n(s),i=a(94),d=a.n(i),m=a(95),u={tag:m.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,a=e.cssModule,l=e.color,s=e.body,c=e.inverse,i=e.outline,u=e.tag,f=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.mapToCssModules)(d()(t,"card",!!c&&"text-white",!!s&&"card-body",!!l&&(i?"border":"bg")+"-"+l),a);return o.a.createElement(u,Object(n.a)({},b,{className:p,ref:f}))};f.propTypes=u,f.defaultProps={tag:"div"},t.a=f},124:function(e,t,a){"use strict";var n=a(7),r=a(14),l=a(0),o=a.n(l),s=a(11),c=a.n(s),i=a(94),d=a.n(i),m=a(95),u={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,a=e.cssModule,l=e.innerRef,s=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.mapToCssModules)(d()(t,"card-body"),a);return o.a.createElement(s,Object(n.a)({},c,{className:i,ref:l}))};f.propTypes=u,f.defaultProps={tag:"div"},t.a=f},141:function(e,t,a){"use strict";var n=a(7),r=a(14),l=a(97),o=a(16),s=a(0),c=a.n(s),i=a(11),d=a.n(i),m=a(94),u=a.n(m),f=a(95),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,o=e.className,s=e.close,i=e.cssModule,d=e.color,m=e.outline,b=e.size,p=e.tag,g=e.innerRef,E=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof E.children&&(E.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(m?"-outline":"")+"-"+d,y=Object(f.mapToCssModules)(u()(o,{close:s},s||"btn",s||h,!!b&&"btn-"+b,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),i);E.href&&"button"===p&&(p="a");var x=s?"Close":null;return c.a.createElement(p,Object(n.a)({type:"button"===p&&E.onClick?"button":void 0},E,{className:y,ref:g,onClick:this.onClick,"aria-label":a||x}))},t}(c.a.Component);p.propTypes=b,p.defaultProps={color:"secondary",tag:"button"},t.a=p},654:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(0),r=a.n(n),l=a(109),o=a(110),s=a(123),c=a(124),i=a(141),d=a(99),m=a.n(d),u=a(98),f=a(10);class b extends n.Component{constructor(...e){super(...e),this.state={registerNumber:202000006,candidateName:"",category:"",gender:"",father_fname:"",father_lname:"",mother_fname:"",mother_lname:"",resultDate:""},this.componentDidMount=()=>{f.b.collection("users").doc(f.a.currentUser.uid).get().then(e=>{this.setState({candidateName:e.data().fname+" "+e.data().lname}),console.log("users WORKS",e.data()),console.log("USER NAME",this.state.candidateName)}).catch=e=>{console.log("error")},f.b.collection("Candidate_Profile").doc(f.a.currentUser.uid).get().then(e=>{this.setState({category:e.data().category}),this.setState({gender:e.data().gender}),this.setState({father_fname:e.data().father_fname}),this.setState({father_lname:e.data().father_lname}),this.setState({mother_fname:e.data().mother_fname}),this.setState({mother_lname:e.data().mother_lname}),console.log("Candidate_Profile WORKS",e.data())}).catch=e=>{console.log("error")},f.b.collection("Global_Variables").doc("result").get().then(e=>{this.setState({resultDate:e.data().resultDate}),console.log("Global_Variables WORKS",e.data())}).catch=e=>{console.log("error")}}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:"page-title d-print-none"},r.a.createElement(o.a,{md:12},r.a.createElement(u.a,{breadCrumbItems:[{label:"Pages",path:"/pages/invoice"},{label:"Invoice",path:"/pages/invoice",active:!0}],title:"Result"}))),r.a.createElement(l.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"clearfix"},r.a.createElement(l.a,null,r.a.createElement(o.a,{md:2},r.a.createElement("div",{className:"m-0 mt-2 mb-4 text-center font-weight-bold"},r.a.createElement("img",{src:m.a,alt:"",height:"80"}))),r.a.createElement(o.a,{md:10},r.a.createElement("div",null,r.a.createElement("h4",{className:"m-0 mt-4 text-center"},"SIKKIM HUMAN RESOURCE DEVELOPMENT DEPARTMENT"),r.a.createElement("h3",{className:"m-0 mt-2 mb-2 text-center font-weight-bold"},"SIKKIM TEACHER ELIGIBILITY TEST - JULY 2020"))))),r.a.createElement("hr",{style:{border:"1px solid"}}),r.a.createElement("div",{className:"clearfix"},r.a.createElement(l.a,null,r.a.createElement(o.a,{md:12},r.a.createElement("div",null,r.a.createElement("h2",{className:"m-0 mt-2 mb-4 text-center font-weight-bold"},"ELIGIBILITY CERTIFICATE"))))),r.a.createElement(l.a,null,r.a.createElement(o.a,{md:8},r.a.createElement("dl",{className:"row mb-2 mt-3"},r.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Roll No. :"),r.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.registerNumber),r.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Candidate Name :"),r.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.candidateName),r.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Category :"),r.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.category),r.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Gender :"),r.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.gender),r.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Father's Name :"),r.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.father_fname+" "+this.state.father_lname),r.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Mother's Name :"),r.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.mother_fname+" "+this.state.mother_lname))),r.a.createElement(o.a,{md:4},r.a.createElement("div",{className:"table-responsive text-center"},r.a.createElement("table",{className:"table mt-4 table-centered",style:{border:"2px solid #000"}},r.a.createElement("tr",null,r.a.createElement("td",{className:"md-2 font-weight-bold",style:{border:"1px solid #000",height:"230px"}},"Photograph",r.a.createElement("br",null),r.a.createElement("img",{src:m.a,alt:"",width:"auto",height:"100%"}))))))),r.a.createElement(l.a,null,r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table mt-4 text-center",style:{border:"2px solid #000"}},r.a.createElement("tr",null,r.a.createElement("td",{colspan:"3",className:"font-weight-bold text-center",style:{border:"2px solid #000"}},"Paper 1 (For Classes I to V) Primary Stage")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold",style:{border:"1px solid #000"}},"Subject"),r.a.createElement("td",{className:"font-weight-bold",style:{border:"1px solid #000"}},"Maximum Marks"),r.a.createElement("td",{className:"font-weight-bold",style:{border:"1px solid #000"}},"Marks Obtained")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Child Development and Pedagogy"),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Mathematics"),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Environemtal Studies"),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold text-left",style:{border:"1px solid #000"}},r.a.createElement(l.a,null,r.a.createElement(o.a,{md:3},"Language 1:"),r.a.createElement(o.a,{md:9},"English"))),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold text-left",style:{border:"1px solid #000"}},r.a.createElement(l.a,null,r.a.createElement(o.a,{md:3},"Language 2:"),r.a.createElement(o.a,{md:9},"Sikkimese"))),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Total"),r.a.createElement("td",{style:{border:"1px solid #000"}},"150"),r.a.createElement("td",{style:{border:"1px solid #000"}},"125")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Result"),r.a.createElement("td",{colspan:"2",className:"ml-8 font-weight-bold text-center font-size-16",style:{border:"1px solid #000"}},"QUALIFIED"))))),r.a.createElement(l.a,null,r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table mt-4 mb-4 text-center",style:{border:"2px solid #000"}},r.a.createElement("tr",null,r.a.createElement("td",{colspan:"3",className:"font-weight-bold text-center",style:{border:"2px solid #000"}},"Paper 2 (For Classes VI to VIII) Elementary Stage")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold",style:{border:"1px solid #000"}},"Subject"),r.a.createElement("td",{className:"font-weight-bold",style:{border:"1px solid #000"}},"Maximum Marks"),r.a.createElement("td",{className:"font-weight-bold",style:{border:"1px solid #000"}},"Marks Obtained")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Child Development and Pedagogy"),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Mathematics"),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Science"),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold text-left",style:{border:"1px solid #000"}},r.a.createElement(l.a,null,r.a.createElement(o.a,{md:3},"Language 1:"),r.a.createElement(o.a,{md:9},"English"))),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold text-left",style:{border:"1px solid #000"}},r.a.createElement(l.a,null,r.a.createElement(o.a,{md:3},"Language 2:"),r.a.createElement(o.a,{md:9},"Sikkimese"))),r.a.createElement("td",{style:{border:"1px solid #000"}},"30"),r.a.createElement("td",{style:{border:"1px solid #000"}},"25")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Total"),r.a.createElement("td",{style:{border:"1px solid #000"}},"150"),r.a.createElement("td",{style:{border:"1px solid #000"}},"125")),r.a.createElement("tr",null,r.a.createElement("td",{className:"ml-8 font-weight-bold text-left",style:{border:"1px solid #000"}},"Result"),r.a.createElement("td",{colspan:"2",className:"ml-8 font-weight-bold text-center font-size-16",style:{border:"1px solid #000"}},"QUALIFIED"))))),r.a.createElement(l.a,null,r.a.createElement(o.a,{md:8},r.a.createElement("dl",{className:"row mb-2 mt-3"},r.a.createElement("dt",{className:"mb-2 col-sm-3 font-weight-bold"},"Result Declared on :"),r.a.createElement("dd",{className:"mb-2 col-sm-9 font-weight-normal"},this.state.resultDate),r.a.createElement("dt",{className:"mb-2 col-sm-3 font-weight-bold"},"Dated :"),r.a.createElement("dd",{className:"mb-2 col-sm-9 font-weight-normal"},Date.now()))),r.a.createElement(o.a,{md:4},r.a.createElement("div",{className:"table-responsive text-center"},r.a.createElement("table",{className:"table mt-2 table-centered",style:{border:"2px solid #000"}},r.a.createElement("tr",null,r.a.createElement("td",{className:"md-2 font-weight-bold",style:{border:"1px solid #000",height:"100px"}},r.a.createElement("img",{src:m.a,alt:"",width:"auto",height:"100%"}),r.a.createElement("br",null),"Director (STET)")))))),r.a.createElement("div",{className:"mt-5 mb-1"},r.a.createElement("div",{className:"text-right d-print-none"},r.a.createElement(i.a,{color:"primary",onClick:e=>{window.print()}},r.a.createElement("i",{className:"uil uil-print mr-1"})," ","Print"),r.a.createElement("a",{href:"/",className:"btn btn-info ml-1"},"Submit"))))))))}}},94:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===l)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},95:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return o})),a.d(t,"setScrollbarWidth",(function(){return s})),a.d(t,"isBodyOverflowing",(function(){return c})),a.d(t,"getOriginalBodyPadding",(function(){return i})),a.d(t,"conditionallyUpdateScrollbar",(function(){return d})),a.d(t,"setGlobalCssModule",(function(){return m})),a.d(t,"mapToCssModules",(function(){return u})),a.d(t,"omit",(function(){return f})),a.d(t,"pick",(function(){return b})),a.d(t,"warnOnce",(function(){return g})),a.d(t,"deprecated",(function(){return E})),a.d(t,"DOMElement",(function(){return y})),a.d(t,"targetPropType",(function(){return x})),a.d(t,"tagPropType",(function(){return N})),a.d(t,"TransitionTimeouts",(function(){return w})),a.d(t,"TransitionPropTypeKeys",(function(){return v})),a.d(t,"TransitionStatuses",(function(){return A})),a.d(t,"keyCodes",(function(){return T})),a.d(t,"PopperPlacements",(function(){return O})),a.d(t,"canUseDOM",(function(){return C})),a.d(t,"isReactRefObj",(function(){return j})),a.d(t,"toNumber",(function(){return P})),a.d(t,"isObject",(function(){return D})),a.d(t,"isFunction",(function(){return k})),a.d(t,"findDOMElements",(function(){return S})),a.d(t,"isArrayOrNodeList",(function(){return I})),a.d(t,"getTarget",(function(){return R})),a.d(t,"defaultToggleEvents",(function(){return B})),a.d(t,"addMultipleEventListeners",(function(){return L})),a.d(t,"focusableElements",(function(){return U}));var n,r=a(11),l=a.n(r);function o(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=o(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(a+e)}function m(e){n=e}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function f(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function b(e,t){for(var a,n=Array.isArray(t)?t:[t],r=n.length,l={};r>0;)l[a=n[r-=1]]=e[a];return l}var p={};function g(e){p[e]||("undefined"!==typeof console&&console.error(e),p[e]=!0)}function E(e,t){return function(a,n,r){null!==a[n]&&"undefined"!==typeof a[n]&&g('"'+n+'" property of "'+r+'" has been deprecated.\n'+t);for(var l=arguments.length,o=new Array(l>3?l-3:0),s=3;s<l;s++)o[s-3]=arguments[s];return e.apply(void 0,[a,n,r].concat(o))}}var h="object"===typeof window&&window.Element||function(){};function y(e,t,a){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var x=l.a.oneOfType([l.a.string,l.a.func,y,l.a.shape({current:l.a.any})]),N=l.a.oneOfType([l.a.func,l.a.string,l.a.shape({$$typeof:l.a.symbol,render:l.a.func}),l.a.arrayOf(l.a.oneOfType([l.a.func,l.a.string,l.a.shape({$$typeof:l.a.symbol,render:l.a.func})]))]),w={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],A={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},O=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],C=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(e){return!(!e||"object"!==typeof e)&&"current"in e}function M(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===M(e))return NaN;if(D(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=D(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function D(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function k(e){if(!D(e))return!1;var t=M(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function S(e){if(j(e))return e.current;if(k(e))return e();if("string"===typeof e&&C){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||C&&"number"===typeof e.length)}function R(e,t){var a=S(e);return t?I(a)?a:null===a?[]:[a]:I(a)?a[0]:a}var B=["touchstart","click"];function L(e,t,a,n){var r=e;I(r)||(r=[r]);var l=a;if("string"===typeof l&&(l=l.split(/\s+/)),!I(r)||"function"!==typeof t||!Array.isArray(l))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(l,(function(e){Array.prototype.forEach.call(r,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(l,(function(e){Array.prototype.forEach.call(r,(function(a){a.removeEventListener(e,t,n)}))}))}}var U=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},97:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(32),o=a(121),s=a(122);t.a=e=>{const t=e.title||"",a=e.breadCrumbItems||"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:"float-right mt-1 font-size-14"},r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/"},"Shreyu")),a.map((e,t)=>e.active?r.a.createElement(s.a,{active:!0,key:t},e.label):r.a.createElement(s.a,{key:t},r.a.createElement(l.b,{to:e.path},e.label)))),r.a.createElement("h4",{className:"mb-1 mt-0"},t))}},99:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=20.2f6684c6.chunk.js.map