(this.webpackJsonpClassificationMathVideosEpsilonStream=this.webpackJsonpClassificationMathVideosEpsilonStream||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(2),o=a.n(l);a(16),a(4);var r=function(){return i.a.createElement("div",{className:"page-header"},i.a.createElement("h1",null,"Classification of Mathematical Videos"),i.a.createElement("h4",{className:"project-tagline"},"Epsilon Stream Project, by Angelique Husson"),i.a.createElement("form",{action:"https://github.com/AngeliqueHusson/InternshipOneOnEpsilon"},i.a.createElement("input",{className:"btn",type:"submit",value:"View project on Github"})))};var c=function(){return i.a.createElement("div",{className:"main-content"},i.a.createElement("h3",null,"How it works"),i.a.createElement("p",null,"On this webpage you can insert a mathematical video and let our classifcation algorithm categorize it into one of the 11 Math categories."))},s=a(6),u=a(7),m=a(8),h=a(3),p=a(10),d=a(9),E=(a(17),a(1)),g=a.n(E),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){e.preventDefault(),n.setState(Object(s.a)({},e.target.name,e.target.value))},n.componentDidMount=function(){Object(h.a)(n);g()("form").submit((function(e){var t=g()("#input-title").val(),a=g()("#input-text").val(),n=g()("#input-method").val();alert("You pressed the button"),alert(t),alert(a),alert(n),g()(".form-message").load("http://localhost:8080/cgi-bin/Website.py",{titleVideo:t,textVideo:a,dropdown:n}),alert("succes")}))},n.state={titleVideo:null,textVideo:null,store:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.titleVideo,t=this.state.textVideo;return i.a.createElement("div",{className:"main-content",id:"main2"},i.a.createElement("h3",null,"Insert the title and the text of a video below."),i.a.createElement("h4",null,"Title:"),i.a.createElement("form",{action:"http://localhost:8080/cgi-bin/Website.py",method:"post",target:"_blank"},i.a.createElement("p",null,i.a.createElement("input",{id:"input-title",type:"text",placeholder:"Title",name:"titleVideo",onChange:this.handleInputChange})," ",e," "),i.a.createElement("h4",null,"Text:"),i.a.createElement("p",null,i.a.createElement("input",{id:"input-text",type:"text",placeholder:"Text",name:"textVideo",onChange:this.handleInputChange}),"  ",t," "),i.a.createElement("h4",null,"Classification algorithm:"),i.a.createElement("select",{id:"input-method",name:"dropdown"},i.a.createElement("option",{value:"Logistic Regression",selected:!0},"Logistic Regression"),i.a.createElement("option",{value:"Support Vector Machine"},"Support Vector Machine"),i.a.createElement("option",{value:"Recurrent Neural Network"},"Recurrent Neural Network")),i.a.createElement("p",null),i.a.createElement("p",null,i.a.createElement("input",{id:"sub",type:"submit",value:"Submit"}))),i.a.createElement("p",{class:"form-message"},this.state.store))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r,null),i.a.createElement(c,null),i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.d2842f07.chunk.js.map