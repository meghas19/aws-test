(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[37],{259:function(e,t,a){"use strict";var s=a(0),l=a.n(s),r=a(32),n=a(123),c=a(109),o=a(110),i=a(387);class m extends s.Component{constructor(e){super(e),this.handleAcceptedFiles=e=>{var t=e;this.props.showPreview&&(e.map(e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:this.formatBytes(e.size)})),(t=this.state.selectedFiles).push(...e),this.setState({selectedFiles:t})),this.props.onFileUpload&&this.props.onFileUpload(t)},this.formatBytes=(e,t)=>{if(0===e)return"0 Bytes";const a=t<0?0:t,s=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,s)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]},this.handleAcceptedFiles=this.handleAcceptedFiles.bind(this),this.state={selectedFiles:[]}}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,Object.assign({onDrop:e=>this.handleAcceptedFiles(e)},this.props),({getRootProps:e,getInputProps:t})=>l.a.createElement("div",{className:"dropzone text-center"},l.a.createElement("div",Object.assign({className:"dz-message py-5 needsclick"},e()),l.a.createElement("input",t()),l.a.createElement("i",{className:"h1 text-muted uil-cloud-upload"}),l.a.createElement("h3",null,"Drop files here or click to upload."),l.a.createElement("span",{className:"text-muted font-13"},"(This is just a demo dropzone. Selected files are ",l.a.createElement("strong",null,"not")," actually uploaded.)")))),this.props.showPreview&&l.a.createElement("div",{className:"dropzone-previews mt-3",id:"file-previews"},this.state.selectedFiles.map((e,t)=>l.a.createElement(n.a,{className:"mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete",key:t+"-file"},l.a.createElement("div",{className:"p-2"},l.a.createElement(c.a,{className:"align-items-center"},e.preview&&l.a.createElement(o.a,{className:"col-auto"},l.a.createElement("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:e.name,src:e.preview})),!e.preview&&l.a.createElement(o.a,{className:"col-auto"},l.a.createElement("div",{className:"avatar-sm"},l.a.createElement("span",{className:"avatar-title bg-primary rounded"},e.type.split("/")[0]))),l.a.createElement(o.a,{className:"pl-0"},l.a.createElement(r.b,{to:"#",className:"text-muted font-weight-bold"},e.name),l.a.createElement("p",{className:"mb-0"},l.a.createElement("strong",null,e.formattedSize)))))))))}}m.defaultProps={showPreview:!0}},656:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var s=a(0),l=a.n(s),r=a(109),n=a(110),c=a(123),o=a(124),i=a(240),m=a(195),d=a(197),u=a(196),p=a(141),h=(a(368),a(370),a(259),a(34),a(10));class E extends s.Component{constructor(...e){super(...e),this.state={to:"Admin",subject:"",body:""},this.componentDidMount=()=>{h.b.collection("Global_Variables").doc("currentApplicationNumber").get().then(e=>{this.setState({currentAppNumber:e.data().current}),console.log("Application No.",this.state.currentAppNumber)}).catch=e=>{console.log("error")}},this.sendData=e=>{console.log("sendData function",this.state),e.preventDefault();try{h.b.collection("Issues").doc().set({uid:h.a.currentUser.uid,to:this.state.to,subject:this.state.subject,body:this.state.body}),alert("Issue Submitted"),window.location.reload()}catch(t){console.log("Issues"),console.log(t),alert(t.message)}}}render(){return console.log(this.state),l.a.createElement("div",null,l.a.createElement(r.a,{className:"page-title align-items-center"},l.a.createElement(n.a,{sm:4,xl:6},l.a.createElement("h4",{className:"mb-1 mt-0"},"Report Issue"))),l.a.createElement(c.a,null,l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(m.a,{row:!0},l.a.createElement(d.a,{for:"exampleEmail",md:3},"To"),l.a.createElement(n.a,{md:9},l.a.createElement(u.a,{type:"text",name:"to",id:"to",placeholder:"enter email",value:this.state.to,disabled:!0,onChange:e=>{this.setState({to:e.target.value}),console.log(e.target.value)}}))),l.a.createElement(m.a,{row:!0},l.a.createElement(d.a,{for:"phone",md:3},"Subject"),l.a.createElement(n.a,{md:9},l.a.createElement(u.a,{type:"text",name:"subject",id:"subject",placeholder:"Enter Subject",value:this.state.subject,onChange:e=>{this.setState({subject:e.target.value}),console.log(e.target.value)}}))),l.a.createElement(m.a,{row:!0},l.a.createElement(d.a,{for:"phone",md:3},"Body"),l.a.createElement(n.a,{md:9},l.a.createElement(u.a,{type:"textarea",name:"body",id:"body",rows:"10",placeholder:"Enter Body of the message",value:this.state.body,onChange:e=>{this.setState({body:e.target.value}),console.log(e.target.value)}}))),l.a.createElement("ul",{className:"list-inline wizard mb-0"},l.a.createElement("li",{className:"next list-inline-item float-right"},l.a.createElement(p.a,{onClick:this.sendData,color:"success"},"Submit"))))))))}}}}]);
//# sourceMappingURL=37.1fc68bca.chunk.js.map