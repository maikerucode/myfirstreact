(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(15),i=n.n(s),a=(n(25),n.p,n(26),n(0)),j=function(e){return Object(a.jsxs)("div",{children:[e.children,Object(a.jsxs)("h1",{children:["Hello ",e.name]})]})},o=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"this is a children prop"})})},l=n(16),d=n(17),h=n(20),b=n(19),u=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+20})},e.state={count:0},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:this.addCounter,id:"Button",children:Object(a.jsx)("b",{children:"CLICK ME!!!"})}),Object(a.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(r.a.Component),O=n(5),p=n(18),x=n.n(p).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),f=function(){return x.get("/employees")},m=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){f().then((function(e){r(e.data)})).catch((function(){console.log("goods na goods")}))})),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"List of Employees"}),Object(a.jsx)("div",{children:Object(a.jsxs)("table",{border:"1",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Name"}),Object(a.jsx)("td",{children:"Department"}),Object(a.jsx)("td",{children:"Location"})]}),n.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.department}),Object(a.jsx)("td",{children:e.location})]})}))]})})]})},g=function(){return x.get("/hello")},v=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){g().then((function(e){r(e.data)})).catch((function(e){console.log("something went wrong!")}))})),n};var C=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:"https://pbs.twimg.com/media/FC3wflaaIAA5KnT?format=jpg&name=4096x4096",className:"App-logo",alt:"logo"}),Object(a.jsxs)("p",{children:["Edit ",Object(a.jsx)("code",{children:"src/App.js"})]}),Object(a.jsx)("p",{children:v()}),Object(a.jsx)(m,{}),Object(a.jsx)(j,{name:"Sir Sir Japeth",children:Object(a.jsx)(o,{})}),Object(a.jsxs)(j,{name:"Tony Hawk",children:[Object(a.jsx)(u,{}),Object(a.jsx)("p",{children:"Spectacular React App"})]}),Object(a.jsx)(j,{name:"Deploy Bugoy Drilon"}),Object(a.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),y()}},[[46,1,2]]]);
//# sourceMappingURL=main.b17e27b0.chunk.js.map