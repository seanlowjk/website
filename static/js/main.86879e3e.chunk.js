(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,a,t){e.exports=t(41)},32:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),o=(t(32),t(26)),c=t(46),s=t(47);var m=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],i=function(){return l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{variant:"light",bg:"light",expand:"lg",expanded:t,fixed:"top"},r.a.createElement(s.a.Link,{style:{color:"black"},href:"/website/"},"Sean Low"),r.a.createElement(c.a.Toggle,{onClick:function(){return l(!0)},"aria-controls":"basic-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Link,{href:"#home",onClick:i},"Home"),r.a.createElement(s.a.Link,{href:"#experiences",onClick:i},"Experiences"),r.a.createElement(s.a.Link,{href:"#projects",onClick:i},"Projects")))))},u=t(43),d=t(44),g=t(45);var p=function(){return r.a.createElement("div",{className:"Introduction",id:"home"},r.a.createElement(u.a,{className:"main-hero"},r.a.createElement(d.a,{className:"main-container"},r.a.createElement("video",{className:"container-video",src:"images/3241.mp4",autoPlay:!0,muted:!0,loop:!0}),r.a.createElement("h1",{className:"container-header"},"Sean Low"),r.a.createElement("h4",{className:"container-description"}," Full Stack Web Developer "),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"outline-light",href:"Resume.pdf",target:"_blank"},"Resume"))))},h=t(48);var E=function(e){var a=e.job;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:"exp-card"},r.a.createElement(h.a.Body,null,r.a.createElement("h5",null,a.title),r.a.createElement("h6",null,a.role),r.a.createElement("h6",null,a.duration),r.a.createElement("p",null,a.description))))},v=t(17),f=t(24),k=[{title:"Source Academy",role:"Research Intern",duration:"May 2020 - Jul 2020",description:"Worked as a Full-Stack Developer to deliver a gamefied platform for students in CS1101S: Programming Methodology. Worked closely with the teaching team to gather user feedback to develop fluid user experience for incoming freshmen."},{title:"NodeFlair",role:"Software Engineering Intern",duration:"Jan 2020 - Apr 2020",description:"Worked as a Full-Stack Developer to deliver features for talents and administrators in a fast-paced tech recruitment market. Worked closely with product and engineering teams by running back-end features to deliver smoother user experience."},{title:"NUS CS2030: Programming Methodology II",role:"Teaching Assistant",duration:"Aug 2019 - ",description:"Facilitated the teaching of Object-Oriented Programming, Fundamental Software Engineering Principles and Java 11 Streams. Marked and went through coding to give feedback to undergraduates to improve general code quality and fundamental software engineering principles."},{title:"NUS CS1101S: Programming Methodology",role:"Teaching Assistant",duration:"Aug 2019 - Dec 2019",description:"Taught basic recursion, lambda calculus and data structures such as lists and binary search trees for 7 Computer Science freshmen. Marked and went through coding to give feedback to freshmen to clarify understanding and review basic concepts."}],b=[{title:"Project Aether",summary:"Aether is a co-op multiplayer adventure game developyed for CS3247: Game Development. Developed by a Team of 6 using Unity and GLSL",backgroundImageUrl:"images/aether.png",githubLink:"https://github.com/Eclmist/Aether",linkText:"Github Link"},{title:"Drop The Beat",summary:"Drop The Beat is a Flutter iOS and Android application built for real-time sharing ofmusic by geolocation! Built in a day for Hack n' Roll 2020.",backgroundImageUrl:"images/dropthebeat.png",githubLink:"https://github.com/seanlowjk/DropTheBeat",linkText:"Github Link"},{title:"$aveNUS",summary:"$aveNUS is a financial planning app for meal planning in NUS. This was developed using Java and JavaFX for CS2103T: Software Engineering",backgroundImageUrl:"images/saveNUS.png",githubLink:"https://github.com/AY1920S1-CS2103T-F13-2/main",linkText:"Github Link"},{title:"Travelling Salesman Design Task",summary:"This project aims to design an interactive calendar to help travelling salesman navigate through cities and his or her meetings",backgroundImageUrl:"images/salesman.png",githubLink:"Salesman.pdf",linkText:"View PDF"},{title:"Roommates Design Task",summary:"This project aims to design an interactive mobile application to help young adults find roommates and enhance their roommate living experience",backgroundImageUrl:"images/roommates.png",githubLink:"Roommates.pdf",linkText:"View PDF"}],y=[{buttonColor:"#545454",icon:v.a,link:"https://github.com/seanlowjk"},{buttonColor:"#0e76a8",icon:v.b,link:"https://linkedin.com/in/seanlowjk"},{buttonColor:"#0088CC",icon:v.c,link:"https://t.me/seanlowjk"},{buttonColor:"#0072c6",icon:f.a,link:"mailto:sean.low.jk@u.nus.edu"}];var S=function(){return r.a.createElement("div",{className:"Experiences",id:"experiences"},r.a.createElement(h.a,{className:"exp-container"},r.a.createElement(h.a.Header,{className:"text-center"},"Experiences"),r.a.createElement("div",{className:"exp-cards"},k.map((function(e){return r.a.createElement(E,{job:e})})))))};var N=function(e){var a=e.project;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:"text-center project-card"},r.a.createElement(h.a.Img,{variant:"top",src:a.backgroundImageUrl,alt:a.title}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,a.title),r.a.createElement(h.a.Text,null,a.summary),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(g.a,{variant:"outline-dark",href:a.githubLink,target:"_blank"},a.linkText)))))};var w=function(){return r.a.createElement("div",{className:"Projects",id:"projects"},r.a.createElement(h.a,{className:"project-container"},r.a.createElement(h.a.Header,{className:"text-center"},"Projects"),r.a.createElement("div",{className:"project-cards"},b.map((function(e){return r.a.createElement(N,{project:e})})))))},x=t(25);var j=function(e){var a=e.socialLink;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"outline-light social-card",style:{background:a.buttonColor},href:a.link,target:"_blank"},r.a.createElement(x.a,{icon:a.icon})))};var T=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{className:"Contact"},r.a.createElement(h.a.Header,null,"Contact Me"),r.a.createElement(h.a.Body,{className:"contact-body"},r.a.createElement("div",{className:"social-cards"},y.map((function(e){return r.a.createElement(j,{socialLink:e})}))),r.a.createElement("div",null,"(c) Low Jun Kai, Sean 2020"))))};var C=function(){return r.a.createElement("div",{className:"About",id:"about"},r.a.createElement(h.a,{className:"about-container"},r.a.createElement(h.a.Header,{className:"text-center"}," About Me"),r.a.createElement(h.a.Body,{className:"container-content"},r.a.createElement(h.a,{className:"content-card"},r.a.createElement(h.a.Body,{className:"text-center content-body"},r.a.createElement("img",{className:"content-img",src:"images/seanlowjk.jpg",alt:"profilepic"}),"I am a Year 3 Computer Science Student at the National University of Singapore.",r.a.createElement("br",null),"I believe in life-long learning and teaching.",r.a.createElement("br",null)," Building and designing is something I love to do too!")))))};var L=function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(C,null),r.a.createElement(S,null),r.a.createElement(w,null),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.86879e3e.chunk.js.map