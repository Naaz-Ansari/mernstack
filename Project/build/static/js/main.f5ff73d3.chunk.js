(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[0],{22:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(32),r=c.n(s),i=c(10),l=c(11),o=c(13),j=c(12),u=c(33),b=c(2),h=c(8),d=c(14),O=c.n(d),p=c(16),f=(c(22),c(17)),x=c.n(f),m=c(1),v=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:{}},e.onSubmitClick=function(){var t=Object(p.a)(O.a.mark((function t(c){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),console.log(e.state.user),t.next=4,x.a.post("http://localhost:5000/signup",e.state.user).then((function(e){console.info(e)})).catch((function(e){console.error(e)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"section",children:Object(m.jsxs)("form",{className:"ui form",children:[Object(m.jsx)("h4",{className:"ui dividing header",children:"SignUp"}),Object(m.jsxs)("div",{className:"feild",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsxs)("div",{className:"two-fields",children:[Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("input",{type:"text",placeholder:"Name",onChange:function(t){e.setState({user:Object(h.a)(Object(h.a)({},e.state.user),{},{Name:t.target.value})})}})}),Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("input",{type:"email",placeholder:"Email *",onChange:function(t){e.setState({user:Object(h.a)(Object(h.a)({},e.state.user),{},{email:t.target.value})})}})}),Object(m.jsx)("label",{children:"password"}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("input",{type:"password",placeholder:"password *",onChange:function(t){e.setState({user:Object(h.a)(Object(h.a)({},e.state.user),{},{password:t.target.value})})}})})]})]}),Object(m.jsx)("button",{className:"ui primary button",onClick:this.onSubmitClick,children:"Submit"})]})})}}]),c}(a.a.Component),g=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:{}},e.onSubmitClick=function(){var t=Object(p.a)(O.a.mark((function t(c){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,x.a.post("http://localhost:5000/login",e.state.user).then((function(e){console.info(e)})).catch((function(e){console.error(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"section",children:Object(m.jsxs)("form",{className:"ui form",children:[Object(m.jsx)("h4",{className:"ui dividing header",children:"Login"}),Object(m.jsx)("div",{className:"feild",children:Object(m.jsxs)("div",{className:"two-fields",children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("input",{type:"email",placeholder:"Email *",onChange:function(t){e.setState({user:Object(h.a)(Object(h.a)({},e.state.user),{},{email:t.target.value})})}})}),Object(m.jsx)("label",{children:"password"}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("input",{type:"password",placeholder:"password *",onChange:function(t){e.setState({user:Object(h.a)(Object(h.a)({},e.state.user),{},{password:t.target.value})})}})})]})}),Object(m.jsx)("button",{className:"ui primary button",onClick:this.onSubmitClick,children:"Submit"})]})})}}]),c}(a.a.Component),N=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsx)(u.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/",exact:!0,children:Object(m.jsx)("h1",{children:"This is Homepage"})}),Object(m.jsx)(b.b,{path:"/login",children:Object(m.jsx)(g,{})}),Object(m.jsx)(b.b,{path:"/signup",children:Object(m.jsx)(v,{})}),Object(m.jsx)(b.b,{path:"/about-us",children:"This is About us"}),Object(m.jsx)(b.b,{path:"/contact-us",children:"This is contact us"}),Object(m.jsx)(b.b,{path:"/404",children:Object(m.jsx)("h1",{children:"Page not found"})}),Object(m.jsx)(b.b,{path:"/**",children:Object(m.jsx)(b.a,{to:"/404"})})]})})})}}]),c}(a.a.Component),w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.f5ff73d3.chunk.js.map