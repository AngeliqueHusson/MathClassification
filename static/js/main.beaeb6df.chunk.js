(this.webpackJsonpClassificationMathVideosEpsilonStream=this.webpackJsonpClassificationMathVideosEpsilonStream||[]).push([[0],[,,function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(1),o=a.n(i);a(15),a(2);var c=function(){return l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",null,"Classification of Mathematical Videos"),l.a.createElement("h4",{className:"project-tagline"},"Epsilon Stream Project, by Angelique Husson"),l.a.createElement("form",{action:"https://github.com/AngeliqueHusson/InternshipOneOnEpsilon"},l.a.createElement("input",{className:"btn",type:"submit",value:"View project on Github"})))};var r=function(){return l.a.createElement("div",{className:"main-content"},l.a.createElement("h3",null,"How it works"),l.a.createElement("p",null,"On this webpage you can insert a mathematical video and let our classifcation algorithm categorize it into one of the 11 Math categories."))},s=a(5),u=a(6),m=a(7),h=a(9),p=a(8),d=(a(16),a(3)),E=a.n(d),g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){e.preventDefault(),n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state={titleVideo:null,textVideo:null},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.titleVideo,t=this.state.textVideo;return l.a.createElement("div",{className:"main-content",id:"main2"},l.a.createElement("script",null,"$(document).ready(function()",E()("#sub").click((function(){E()("#ajaxtest").load("http://localhost:8080/cgi-bin/Website.py")})),");"),l.a.createElement("h3",null,"Insert the title and the text of a video below"),l.a.createElement("h4",null,"Title:"),l.a.createElement("form",{action:"http://localhost:8080/cgi-bin/Website.py",method:"post",target:"_blank"},l.a.createElement("p",null,l.a.createElement("input",{type:"text",placeholder:"Title",name:"titleVideo",onChange:this.handleInputChange})," ",e," "),l.a.createElement("h4",null,"Text:"),l.a.createElement("p",null,l.a.createElement("input",{type:"text",placeholder:"Text",name:"textVideo",onChange:this.handleInputChange}),"  ",t," "),l.a.createElement("h4",null,"Classification algorithm:"),l.a.createElement("select",{name:"dropdown"},l.a.createElement("option",{value:"Logistic Regression",selected:!0},"Logistic Regression"),l.a.createElement("option",{value:"Support Vector Machine"},"Support Vector Machine")),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("input",{id:"sub",type:"submit",value:"Submit"}))),l.a.createElement("div",{id:"ajaxtest"},l.a.createElement("p",null,".")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c,null),l.a.createElement(r,null),l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.beaeb6df.chunk.js.map