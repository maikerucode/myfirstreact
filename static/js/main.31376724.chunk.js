(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(14),i=n.n(s),j=(n(25),n.p,n(26),n(0)),a=function(e){return Object(j.jsxs)("div",{children:[e.children,Object(j.jsxs)("h1",{children:["Hello ",e.name]})]})},o=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"this is a children prop"})})},d=n(15),l=n(16),h=n(20),b=n(18),u=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+20})},e.state={count:0},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:this.addCounter,id:"Button",children:Object(j.jsx)("b",{children:"CLICK ME!!!"})}),Object(j.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(r.a.Component),p=n(19),O=n(17),x=n.n(O).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),m=function(){return x.get("/employees")},f=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){m().then((function(e){r(e.data)})).catch((function(){console.log("goods na goods")}))})),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"List of Employees"}),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{border:"1",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Name"}),Object(j.jsx)("td",{children:"Location"}),Object(j.jsx)("td",{children:"Department"})]}),n.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"(employee.name)"}),Object(j.jsx)("td",{children:"(employee.department)"}),Object(j.jsx)("td",{children:"(employee.location)"})]})}))]})})]})};var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:"https://pbs.twimg.com/media/FC3wflaaIAA5KnT?format=jpg&name=4096x4096",className:"App-logo",alt:"logo"}),Object(j.jsxs)("p",{children:["Edit ",Object(j.jsx)("code",{children:"src/App.js"})]}),Object(j.jsx)(f,{}),Object(j.jsx)(a,{name:"Sir Sir Japeth",children:Object(j.jsx)(o,{})}),Object(j.jsxs)(a,{name:"Tony Hawk",children:[Object(j.jsx)(u,{}),Object(j.jsx)("p",{children:"Spectacular React App"})]}),Object(j.jsx)(a,{name:"Bugoy Drilon"}),Object(j.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.31376724.chunk.js.map