(this.webpackJsonpClassificationMathVideosEpsilonStream=this.webpackJsonpClassificationMathVideosEpsilonStream||[]).push([[0],[,,,function(e,t,n){},,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(2),o=n.n(l);n(15),n(3);var c=function(){return i.a.createElement("div",{className:"page-header"},i.a.createElement("h1",null,"Classification of Mathematical Videos"),i.a.createElement("h4",{className:"project-tagline"},"Epsilon Stream Project, by Angelique Husson"),i.a.createElement("form",{action:"https://github.com/AngeliqueHusson/InternshipOneOnEpsilon"},i.a.createElement("input",{className:"btn",type:"submit",value:"View project on Github"})))};var r=function(){return i.a.createElement("div",{className:"main-content"},i.a.createElement("h3",null,"How it works"),i.a.createElement("p",null,"On this webpage you can insert a mathematical video and let our classifcation algorithm categorize it into one of the 11 Math categories."))},s=n(5),u=n(6),m=n(7),h=n(9),p=n(8),d=(n(16),n(1)),E=n.n(d),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){e.preventDefault(),a.setState(Object(s.a)({},e.target.name,e.target.value))},a.state={titleVideo:null,textVideo:null},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.titleVideo,t=this.state.textVideo;return i.a.createElement("div",{className:"main-content",id:"main2"},i.a.createElement("h3",null,"Insert the title and the text of a video below"),i.a.createElement("h4",null,"Title:"),i.a.createElement("form",{action:"http://localhost:8080/cgi-bin/Website.py",method:"post",target:"_blank"},i.a.createElement("p",null,i.a.createElement("input",{id:"input-title",type:"text",placeholder:"Title",name:"titleVideo",onChange:this.handleInputChange})," ",e," "),i.a.createElement("h4",null,"Text:"),i.a.createElement("p",null,i.a.createElement("input",{id:"input-text",type:"text",placeholder:"Text",name:"textVideo",onChange:this.handleInputChange}),"  ",t," "),i.a.createElement("h4",null,"Classification algorithm:"),i.a.createElement("select",{id:"input-method",name:"dropdown"},i.a.createElement("option",{value:"Logistic Regression",selected:!0},"Logistic Regression"),i.a.createElement("option",{value:"Support Vector Machine"},"Support Vector Machine")),i.a.createElement("p",null),i.a.createElement("p",null,i.a.createElement("input",{id:"sub",type:"submit",value:"Submit"})),i.a.createElement("p",{id:"form-message"})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c,null),i.a.createElement(r,null),i.a.createElement(f,null),i.a.createElement("script",null,"$(document).ready(function()",E()("form").submit((function(e){e.preventDefault();var t=E()("#input-title").val(),n=E()("#input-text").val(),a=E()("#input-method").val();E.a.ajax({url:"http://localhost:8080/cgi-bin/Website.py",type:"POST",data:{titleVideo:t,textVideo:n,dropdown:a},succes:function(e){E()("#form-message").html(e)}})})),");")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.ad475fc2.chunk.js.map