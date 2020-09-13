/*! For license information please see 19.fbaff267.chunk.js.LICENSE.txt */
(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[19],{109:function(e,t,a){"use strict";var n=a(7),s=a(14),r=a(0),o=a.n(r),l=a(11),c=a.n(l),m=a(94),i=a.n(m),d=a(95),u=c.a.oneOfType([c.a.number,c.a.string]),g={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,l=e.tag,c=e.form,m=e.widths,u=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];m.forEach((function(t,a){var n=e[t];if(delete u[t],n){var s=!a;g.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var b=Object(d.mapToCssModules)(i()(t,r?"no-gutters":null,c?"form-row":"row",g),a);return o.a.createElement(l,Object(n.a)({},u,{className:b}))};f.propTypes=g,f.defaultProps=b,t.a=f},110:function(e,t,a){"use strict";var n=a(7),s=a(14),r=a(0),o=a.n(r),l=a(11),c=a.n(l),m=a(94),i=a.n(m),d=a(95),u=c.a.oneOfType([c.a.number,c.a.string]),g=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:u,offset:u})]),b={tag:d.tagPropType,xs:g,sm:g,md:g,lg:g,xl:g,className:c.a.string,cssModule:c.a.object,widths:c.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},p=function(e){var t=e.className,a=e.cssModule,r=e.widths,l=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),m=[];r.forEach((function(t,n){var s=e[t];if(delete c[t],s||""===s){var r=!n;if(Object(d.isObject)(s)){var o,l=r?"-":"-"+t+"-",u=h(r,t,s.size);m.push(Object(d.mapToCssModules)(i()(((o={})[u]=s.size||""===s.size,o["order"+l+s.order]=s.order||0===s.order,o["offset"+l+s.offset]=s.offset||0===s.offset,o)),a))}else{var g=h(r,t,s);m.push(g)}}})),m.length||m.push("col");var u=Object(d.mapToCssModules)(i()(t,m),a);return o.a.createElement(l,Object(n.a)({},c,{className:u}))};p.propTypes=b,p.defaultProps=f,t.a=p},121:function(e,t,a){"use strict";var n=a(7),s=a(14),r=a(0),o=a.n(r),l=a(11),c=a.n(l),m=a(94),i=a.n(m),d=a(95),u={tag:d.tagPropType,listTag:d.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},g=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,l=e.children,c=e.tag,m=e.listTag,u=e["aria-label"],g=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(d.mapToCssModules)(i()(t),r),f=Object(d.mapToCssModules)(i()("breadcrumb",a),r);return o.a.createElement(c,Object(n.a)({},g,{className:b,"aria-label":u}),o.a.createElement(m,{className:f},l))};g.propTypes=u,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=g},122:function(e,t,a){"use strict";var n=a(7),s=a(14),r=a(0),o=a.n(r),l=a(11),c=a.n(l),m=a(94),i=a.n(m),d=a(95),u={tag:d.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},g=function(e){var t=e.className,a=e.cssModule,r=e.active,l=e.tag,c=Object(s.a)(e,["className","cssModule","active","tag"]),m=Object(d.mapToCssModules)(i()(t,!!r&&"active","breadcrumb-item"),a);return o.a.createElement(l,Object(n.a)({},c,{className:m,"aria-current":r?"page":void 0}))};g.propTypes=u,g.defaultProps={tag:"li"},t.a=g},123:function(e,t,a){"use strict";var n=a(7),s=a(14),r=a(0),o=a.n(r),l=a(11),c=a.n(l),m=a(94),i=a.n(m),d=a(95),u={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var t=e.className,a=e.cssModule,r=e.color,l=e.body,c=e.inverse,m=e.outline,u=e.tag,g=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.mapToCssModules)(i()(t,"card",!!c&&"text-white",!!l&&"card-body",!!r&&(m?"border":"bg")+"-"+r),a);return o.a.createElement(u,Object(n.a)({},b,{className:f,ref:g}))};g.propTypes=u,g.defaultProps={tag:"div"},t.a=g},124:function(e,t,a){"use strict";var n=a(7),s=a(14),r=a(0),o=a.n(r),l=a(11),c=a.n(l),m=a(94),i=a.n(m),d=a(95),u={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,l=e.tag,c=Object(s.a)(e,["className","cssModule","innerRef","tag"]),m=Object(d.mapToCssModules)(i()(t,"card-body"),a);return o.a.createElement(l,Object(n.a)({},c,{className:m,ref:r}))};g.propTypes=u,g.defaultProps={tag:"div"},t.a=g},141:function(e,t,a){"use strict";var n=a(7),s=a(14),r=a(97),o=a(16),l=a(0),c=a.n(l),m=a(11),i=a.n(m),d=a(94),u=a.n(d),g=a(95),b={active:i.a.bool,"aria-label":i.a.string,block:i.a.bool,color:i.a.string,disabled:i.a.bool,outline:i.a.bool,tag:g.tagPropType,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),onClick:i.a.func,size:i.a.string,children:i.a.node,className:i.a.string,cssModule:i.a.object,close:i.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,o=e.className,l=e.close,m=e.cssModule,i=e.color,d=e.outline,b=e.size,f=e.tag,h=e.innerRef,p=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof p.children&&(p.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(d?"-outline":"")+"-"+i,N=Object(g.mapToCssModules)(u()(o,{close:l},l||"btn",l||E,!!b&&"btn-"+b,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),m);p.href&&"button"===f&&(f="a");var w=l?"Close":null;return c.a.createElement(f,Object(n.a)({type:"button"===f&&p.onClick?"button":void 0},p,{className:N,ref:h,onClick:this.onClick,"aria-label":a||w}))},t}(c.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},t.a=f},650:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(0),s=a.n(n),r=a(109),o=a(110),l=a(123),c=a(124),m=a(141),i=a(99),d=a.n(i),u=a(98),g=a(10);class b extends n.Component{constructor(...e){super(...e),this.state={registerNumber:0,candidateName:"",category:"",gender:"",father_fname:"",father_lname:"",mother_fname:"",mother_lname:"",resultDate:"",currentAppNumber:"202000006",email:"",phone:"",dob:"",address:"",State:"",district:"",pincode:"",disability:"",disability_type:"",binDis:!1,reappearing:"",binReapper:!1,reappearNumber:"",paymentStatus:"",board10:"",reg10:"",yop10:"",marks10:"",board12:"",reg12:"",yop12:"",marks12:"",cert12:"",nameofdeg1:"",boarddeg1:"",degree1status:"",binDeg1:!1,regdeg1:"",yopdeg1:"",marksdeg1:"",certdeg1:"",degree2present:"",binDeg2pres:!1,nameofdeg2:"",boarddeg2:"",degree2status:"",binDeg2:!0,regdeg2:"",yopdeg2:"",marksdeg2:"",certdeg2:"",papers:"",binPaper2:!1,language1:"",language2:"",paper2subj:"",center1:"",center2:"",center3:""},this.componentDidMount=()=>{var e=localStorage.getItem("uid");this.setState({uid:e}),console.log("USER ID",this.state.uid),g.b.collection("users").doc(localStorage.getItem("uid")).get().then(e=>{this.setState({currentAppNumber:e.data().currentAppNumber}),this.setState({fname:e.data().fname}),this.setState({email:e.data().email}),this.setState({phone:e.data().phone}),console.log("users WORKS",e.data())}).catch=e=>{console.log("error")},g.b.collection("Candidate_Profile").doc(localStorage.getItem("uid")).get().then(e=>{this.setState({father_fname:e.data().father_fname}),this.setState({father_lname:e.data().father_lname}),this.setState({mother_fname:e.data().mother_fname}),this.setState({mother_lname:e.data().mother_lname}),this.setState({gender:e.data().gender}),this.setState({dob:e.data().dob}),this.setState({address:e.data().address}),this.setState({category:e.data().category}),this.setState({State:e.data().State}),this.setState({district:e.data().district}),this.setState({pincode:e.data().pincode}),console.log("Candidate_Profile WORKS",e.data())}).catch=e=>{console.log("error")},g.b.collection("Candidate_Exam_Details").doc(localStorage.getItem("uid")).get().then(e=>{this.setState({disability:e.data().disability}),this.setState({disability_type:e.data().disability_type}),this.setState({paper:e.data().paper}),this.setState({language1:e.data().language1}),this.setState({language2:e.data().language2}),this.setState({paper2subj:e.data().paper2subj}),this.setState({center1:e.data().center1}),this.setState({center2:e.data().center2}),this.setState({center3:e.data().center3}),console.log("Candidate_Exam_Details WORKS",e.data())}).catch=e=>{console.log("error")},g.b.collection("Candidate_Education").doc(localStorage.getItem("uid")).get().then(e=>{this.setState({board10:e.data().board10}),this.setState({reg10:e.data().reg10}),this.setState({yop10:e.data().yop10}),this.setState({marks10:e.data().marks10}),this.setState({board12:e.data().board12}),this.setState({reg12:e.data().reg12}),this.setState({yop12:e.data().yop12}),this.setState({marks12:e.data().marks12}),this.setState({nameofdeg1:e.data().nameofdeg1}),this.setState({boarddeg1:e.data().boarddeg1}),this.setState({degree1status:e.data().degree1status}),this.setState({regdeg1:e.data().regdeg1}),this.setState({yopdeg1:e.data().yopdeg1}),this.setState({marksdeg1:e.data().marksdeg1}),this.setState({degree2present:e.data().degree2present}),this.setState({nameofdeg2:e.data().nameofdeg2}),this.setState({boarddeg2:e.data().boarddeg2}),this.setState({degree2status:e.data().degree2status}),this.setState({regdeg2:e.data().regdeg2}),this.setState({yopdeg2:e.data().yopdeg2}),this.setState({marksdeg2:e.data().marksdeg2}),console.log("Candidate_Education WORKS",e.data())}).catch=e=>{console.log("error")}}}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{className:"page-title d-print-none"},s.a.createElement(o.a,{md:12},s.a.createElement(u.a,{breadCrumbItems:[{label:"Pages",path:"/pages/invoice"},{label:"Invoice",path:"/pages/invoice",active:!0}],title:"Result"}))),s.a.createElement(r.a,null,s.a.createElement(o.a,null,s.a.createElement(l.a,null,s.a.createElement(c.a,null,s.a.createElement("div",{className:"clearfix"},s.a.createElement(r.a,null,s.a.createElement(o.a,{md:2},s.a.createElement("div",{className:"m-0 mt-2 mb-4 text-center font-weight-bold"},s.a.createElement("img",{src:d.a,alt:"",height:"80"}))),s.a.createElement(o.a,{md:10},s.a.createElement("div",null,s.a.createElement("h4",{className:"m-0 mt-4 text-center"},"SIKKIM HUMAN RESOURCE DEVELOPMENT DEPARTMENT"),s.a.createElement("h3",{className:"m-0 mt-2 mb-2 text-center font-weight-bold"},"SIKKIM TEACHER ELIGIBILITY TEST - JULY 2020"))))),s.a.createElement("hr",{style:{border:"1px solid"}}),s.a.createElement("div",{className:"clearfix"},s.a.createElement(r.a,null,s.a.createElement(o.a,{md:12},s.a.createElement("div",null,s.a.createElement("h2",{className:"m-0 mt-2 mb-4 text-center font-weight-bold"},"APPLICATION FORM"))))),s.a.createElement("h3",{className:"m-0 mt-4 mb-4 text-center font-weight-bold"},"PERSONAL DETAILS"),s.a.createElement(r.a,null,s.a.createElement(o.a,{md:8},s.a.createElement("dl",{className:"row mb-2 mt-3"},s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Application No. :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.currentAppNumber),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Candidate Name :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.fname),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Email :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.email),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Phone No. :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.phone),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Gender :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.gender),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Father's Name :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.father_fname+" "+this.state.father_lname),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Mother's Name :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.mother_fname+" "+this.state.mother_lname),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Category :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.category),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Date of Birth :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.dob),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Disability :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.disability),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Disability Type :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.disability_type),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Reappearing :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.reappearing),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Previous Application No. :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.reappearNumber))),s.a.createElement(o.a,{md:4},s.a.createElement("div",{className:"table-responsive text-center"},s.a.createElement("table",{className:"table mt-4 table-centered",style:{border:"2px solid #000"}},s.a.createElement("tr",null,s.a.createElement("td",{className:"md-2 font-weight-bold",style:{border:"1px solid #000",height:"230px"}},"Photograph",s.a.createElement("br",null),s.a.createElement("img",{src:d.a,alt:"",width:"auto",height:"100%"})))),s.a.createElement("table",{className:"table mt-4 table-centered",style:{border:"2px solid #000"}},s.a.createElement("tr",null,s.a.createElement("td",{className:"md-2 font-weight-bold",style:{border:"1px solid #000",height:"150px"}},"Signature",s.a.createElement("br",null),s.a.createElement("img",{src:d.a,alt:"",width:"auto",height:"100%"}))))))),s.a.createElement(r.a,null,s.a.createElement(o.a,null,s.a.createElement("dl",{className:"row mb-2 mt-3"},s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Address :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.address),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"District :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.district),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"State :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.State),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Pin Code :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.pincode),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Gender :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.gender)))),s.a.createElement(r.a,null,s.a.createElement(o.a,null,s.a.createElement("dl",{className:"row mb-2 mt-3"},s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Payment Status :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.paymentStatus)))),s.a.createElement("h3",{className:"m-0 mt-4 mb-4 text-center font-weight-bold"},"EDUCATIONAL DETAILS"),s.a.createElement(r.a,null,s.a.createElement(o.a,null,s.a.createElement("dl",{className:"row mb-2 mt-3"},s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"10th standard board :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.board10),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"10th standard register no. :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.reg10),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"10th standard year of passout :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.yop10),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"10th standard percentage :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.marks10),s.a.createElement("br",null),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"12th standard board :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.board12),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"12th standard register no. :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.reg12),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"12th standard year of passout :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.yop12),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"12th standard percentage :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.marks12),s.a.createElement("br",null),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 1 name :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.nameofdeg1),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 1 board :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.boarddeg1),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 1 completetion :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.degree1status),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 1 register no. :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.regdeg1),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 1 year of passout :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.yopdeg1),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 1 percentage :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.marksdeg1),s.a.createElement("br",null),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 2 name :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.nameofdeg2),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 2 board :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.boarddeg2),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 2 completetion :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.degree2status),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 2 register no. :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.regdeg2),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 2 year of passout :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.yopdeg2),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Degree 2 percentage :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.marksdeg2),s.a.createElement("br",null)))),s.a.createElement("h3",{className:"m-0 mt-4 mb-4 text-center font-weight-bold"},"TEST DETAILS"),s.a.createElement(r.a,null,s.a.createElement(o.a,null,s.a.createElement("dl",{className:"row mb-2 mt-3"},s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Papers :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.papers),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Language 1 :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.language1),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Language 2:"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.language2),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Paper 2 Subjects :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.paper2subj),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Preferred Location 1 :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.center1),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Preferred Location 2 :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.center2),s.a.createElement("dt",{className:"mb-4 col-sm-3 font-weight-bold"},"Preferred Location 3 :"),s.a.createElement("dd",{className:"mb-4 col-sm-9 font-weight-normal"},this.state.center3)))),s.a.createElement("div",{className:"mt-5 mb-1"},s.a.createElement("div",{className:"text-right d-print-none"},s.a.createElement(m.a,{color:"primary",onClick:e=>{window.print()}},s.a.createElement("i",{className:"uil uil-print mr-1"})," ","Print"),s.a.createElement("a",{href:"/",className:"btn btn-info ml-1"},"Submit"))))))))}}},94:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=s.apply(null,n);o&&e.push(o)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},95:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return o})),a.d(t,"setScrollbarWidth",(function(){return l})),a.d(t,"isBodyOverflowing",(function(){return c})),a.d(t,"getOriginalBodyPadding",(function(){return m})),a.d(t,"conditionallyUpdateScrollbar",(function(){return i})),a.d(t,"setGlobalCssModule",(function(){return d})),a.d(t,"mapToCssModules",(function(){return u})),a.d(t,"omit",(function(){return g})),a.d(t,"pick",(function(){return b})),a.d(t,"warnOnce",(function(){return h})),a.d(t,"deprecated",(function(){return p})),a.d(t,"DOMElement",(function(){return N})),a.d(t,"targetPropType",(function(){return w})),a.d(t,"tagPropType",(function(){return y})),a.d(t,"TransitionTimeouts",(function(){return v})),a.d(t,"TransitionPropTypeKeys",(function(){return S})),a.d(t,"TransitionStatuses",(function(){return A})),a.d(t,"keyCodes",(function(){return O})),a.d(t,"PopperPlacements",(function(){return T})),a.d(t,"canUseDOM",(function(){return C})),a.d(t,"isReactRefObj",(function(){return j})),a.d(t,"toNumber",(function(){return P})),a.d(t,"isObject",(function(){return x})),a.d(t,"isFunction",(function(){return M})),a.d(t,"findDOMElements",(function(){return k})),a.d(t,"isArrayOrNodeList",(function(){return I})),a.d(t,"getTarget",(function(){return R})),a.d(t,"defaultToggleEvents",(function(){return B})),a.d(t,"addMultipleEventListeners",(function(){return L})),a.d(t,"focusableElements",(function(){return K}));var n,s=a(11),r=a.n(s);function o(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function l(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function m(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function i(){var e=o(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;c()&&l(a+e)}function d(e){n=e}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function g(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function b(e,t){for(var a,n=Array.isArray(t)?t:[t],s=n.length,r={};s>0;)r[a=n[s-=1]]=e[a];return r}var f={};function h(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}function p(e,t){return function(a,n,s){null!==a[n]&&"undefined"!==typeof a[n]&&h('"'+n+'" property of "'+s+'" has been deprecated.\n'+t);for(var r=arguments.length,o=new Array(r>3?r-3:0),l=3;l<r;l++)o[l-3]=arguments[l];return e.apply(void 0,[a,n,s].concat(o))}}var E="object"===typeof window&&window.Element||function(){};function N(e,t,a){if(!(e[t]instanceof E))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var w=r.a.oneOfType([r.a.string,r.a.func,N,r.a.shape({current:r.a.any})]),y=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},S=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],A={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],C=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(e){return!(!e||"object"!==typeof e)&&"current"in e}function D(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===D(e))return NaN;if(x(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=x(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function x(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function M(e){if(!x(e))return!1;var t=D(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function k(e){if(j(e))return e.current;if(M(e))return e();if("string"===typeof e&&C){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||C&&"number"===typeof e.length)}function R(e,t){var a=k(e);return t?I(a)?a:null===a?[]:[a]:I(a)?a[0]:a}var B=["touchstart","click"];function L(e,t,a,n){var s=e;I(s)||(s=[s]);var r=a;if("string"===typeof r&&(r=r.split(/\s+/)),!I(s)||"function"!==typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(s,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(s,(function(a){a.removeEventListener(e,t,n)}))}))}}var K=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},97:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},98:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(32),o=a(121),l=a(122);t.a=e=>{const t=e.title||"",a=e.breadCrumbItems||"";return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{className:"float-right mt-1 font-size-14"},s.a.createElement(l.a,null,s.a.createElement(r.b,{to:"/"},"Shreyu")),a.map((e,t)=>e.active?s.a.createElement(l.a,{active:!0,key:t},e.label):s.a.createElement(l.a,{key:t},s.a.createElement(r.b,{to:e.path},e.label)))),s.a.createElement("h4",{className:"mb-1 mt-0"},t))}},99:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=19.fbaff267.chunk.js.map