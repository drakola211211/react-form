(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{13:function(e,s,a){},14:function(e,s,a){},15:function(e,s,a){"use strict";a.r(s);var r=a(0),t=a(1),n=a(7),c=a.n(n),i=(a(13),a(14),a(2));a(5);function o(e){var s={};return e.username.trim()||(s.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email address is invalid"):s.email="Email required",e.password?e.password.length<6&&(s.password="Password needs to be 6 characters or more"):s.password="Password is required",e.password2?e.password2!==e.password&&(s.password2="Passwords do not match"):s.password2="Password is required",s}var l=a(3),m=a(6),d=function(e,s){var a=Object(t.useState)({username:"",email:"",password:"",password2:""}),r=Object(i.a)(a,2),n=r[0],c=r[1],o=Object(t.useState)({}),d=Object(i.a)(o,2),j=d[0],u=d[1],b=Object(t.useState)(!1),p=Object(i.a)(b,2),h=p[0],f=p[1];return Object(t.useEffect)((function(){0===Object.keys(j).length&&h&&e()}),[j]),{handleChange:function(e){var s=e.target,a=s.name,r=s.value;c(Object(m.a)(Object(m.a)({},n),{},Object(l.a)({},a,r)))},handleSubmit:function(e){e.preventDefault(),u(s(n)),f(!0)},values:n,errors:j}},j=function(e){var s=e.submitForm,a=d(s,o),t=a.handleChange,n=a.handleSubmit,c=a.values,i=a.errors;return Object(r.jsx)("div",{className:"form-content-right",children:Object(r.jsxs)("form",{onSubmit:n,className:"form",noValidate:!0,children:[Object(r.jsx)("h1",{children:"Get started with us today! Create your account by filling out the information below."}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{className:"form-label",children:"Username"}),Object(r.jsx)("input",{className:"form-input",type:"text",name:"username",placeholder:"Enter your username",value:c.username,onChange:t}),i.username&&Object(r.jsx)("p",{children:i.username})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{className:"form-label",children:"Email"}),Object(r.jsx)("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:c.email,onChange:t}),i.email&&Object(r.jsx)("p",{children:i.email})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{className:"form-label",children:"Password"}),Object(r.jsx)("input",{className:"form-input",type:"password",name:"password",placeholder:"Enter your password",value:c.password,onChange:t}),i.password&&Object(r.jsx)("p",{children:i.password})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{className:"form-label",children:"Confirm Password"}),Object(r.jsx)("input",{className:"form-input",type:"password",name:"password2",placeholder:"Confirm your password",value:c.password2,onChange:t}),i.password2&&Object(r.jsx)("p",{children:i.password2})]}),Object(r.jsx)("button",{className:"form-input-btn",type:"submit",children:"Sign up"}),Object(r.jsxs)("span",{className:"form-input-login",children:["Already have an account? Login ",Object(r.jsx)("a",{href:"/",children:"here"})]})]})})},u=function(){return Object(r.jsxs)("div",{className:"form-content-right",children:[Object(r.jsx)("h1",{className:"form-success",children:"We have received your request!"}),Object(r.jsx)("img",{className:"form-img-2",src:"img/img-3.svg",alt:"success"})]})},b=function(){var e=Object(t.useState)(!1),s=Object(i.a)(e,2),a=s[0],n=s[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"form-container",children:[Object(r.jsx)("span",{className:"close-btn",children:"\xd7"}),Object(r.jsx)("div",{className:"form-content-left",children:Object(r.jsx)("img",{className:"form-img",src:"img/img-2.svg",alt:"spaceship"})}),a?Object(r.jsx)(u,{}):Object(r.jsx)(j,{submitForm:function(){n(!0)}})]})})};var p=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(b,{})})};c.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))},5:function(e,s,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.9c3353dc.chunk.js.map