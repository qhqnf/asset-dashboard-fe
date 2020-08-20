(this["webpackJsonpasset-dashboard-fe"]=this["webpackJsonpasset-dashboard-fe"]||[]).push([[0],{209:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(31),u=t.n(c),i=t(74),o=t(75),l=t(85),s=t(84),p=t(20),d=t(4),f=t(2),m=t(9),b=t(1);function g(){var e=Object(f.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return g=function(){return e},e}function v(){var e=Object(f.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return v=function(){return e},e}function E(){var e=Object(f.a)(["\n  display: flex;\n"]);return E=function(){return e},e}function h(){var e=Object(f.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return h=function(){return e},e}var x=b.c.header(h()),j=b.c.ul(E()),O=b.c.li(v(),(function(e){return e.current?"#3498db":"transparent"})),y=Object(b.c)(p.b)(g()),k=Object(d.h)((function(e){var n=e.location.pathname,t=Object(m.d)((function(e){return e.userReducer})).isLoggedIn;return r.a.createElement(x,null,r.a.createElement(j,null,r.a.createElement(O,{current:"/"===n},r.a.createElement(y,{to:"/"},"Home")),t?r.a.createElement(O,{current:"/logout"===n},r.a.createElement(y,{to:"/logout"},"Log out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{current:"/singin"===n},r.a.createElement(y,{to:"/signin"},"Sign in")),r.a.createElement(O,{current:"/singup"===n},r.a.createElement(y,{to:"signup"},"Sign Up")))))}));function w(){var e=Object(f.a)(["\n  width: 300px;\n  height: 50px;\n  padding: 12.5px 20px;\n  border-radius: 30px;\n  background-color: #ff5a5f;\n  border: none;\n  margin-bottom: 15px;\n  color: white;\n"]);return w=function(){return e},e}var S=b.c.button(w());function I(){var e=Object(f.a)(["\n  font-size: 28px;\n"]);return I=function(){return e},e}function C(){var e=Object(f.a)(["\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-contents: center;\n"]);return C=function(){return e},e}function _(){var e=Object(f.a)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-contents: center;\n"]);return _=function(){return e},e}var L=b.c.div(_()),F=b.c.div(C()),A=b.c.span(I()),z=function(e){var n=e.isLoggedIn,t=e.toSignIn,a=e.toSignUp,c=e.toDashBoard;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,r.a.createElement(A,null,n?"Hi":"Welcome"),n?r.a.createElement(F,null,r.a.createElement(S,{onClick:c},"Go to Dashboard")):r.a.createElement(F,null,r.a.createElement(S,{onClick:t},"Sign in"),r.a.createElement(S,{onClick:a},"Sign Up"))))},q=Object(m.b)((function(e){return{isLoggedIn:e.userReducer.isLoggedIn}}))((function(e){var n=e.isLoggedIn,t=Object(d.g)();return r.a.createElement(z,{isLoggedIn:n,toSignUp:function(){t.push("/signup")},toSignIn:function(){t.push("/signin")},toDashBoard:function(){t.push("/dashboard")}})})),U=function(){return r.a.createElement(q,null)},R=t(22),T=function(e,n){return{type:"LOGIN",payload:{id:e,token:n}}},B={isLoggedIn:!0,id:null,token:null,asset:[{stock:"005930",name:"\uc0bc\uc131\uc804\uc790",total_quantity:99,avg_price:"56800.0",price:"55,400"},{stock:"066570",name:"LG\uc804\uc790",total_quantity:20,avg_price:"74000.0",price:"84,900"},{stock:"316140",name:"\uc6b0\ub9ac\uae08\uc735\uc9c0\uc8fc",total_quantity:200,avg_price:"8300.0",price:"8,450"}]},G=t(10),D=t.n(G),N=t(16),P=t(12);function Z(){var e=Object(f.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 40px;\n"]);return Z=function(){return e},e}var H=b.c.div(Z()),J=function(){return r.a.createElement(H,null,r.a.createElement("span",{"aria-label":"Loading"},"Loading..."))},W=t(80),Y=function(e){var n=e.asset,t=[],a=[],c=0;n.forEach((function(e){t.push(e.name),a.push(e.total_quantity*parseInt(e.price))})),a.forEach((function(e){c+=e}));var u=a.map((function(e){return(e/c*100).toFixed(1)})),i={labels:t,datasets:[{data:u,backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]};return r.a.createElement(W.Pie,{data:i,width:400,height:400,options:{maintainAspectRatio:!0,responsive:!1,tooltips:{callbacks:{label:function(e,n){var t=n.labels[e.index]||"";return t&&(t+=": "),t=t+n.datasets[e.datasetIndex].data[e.index]+"%",t}}}}})};function M(){var e=Object(f.a)(["\n  width: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n"]);return M=function(){return e},e}function Q(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 2px solid #cbd5e0;\n"]);return Q=function(){return e},e}function $(){var e=Object(f.a)(["\n  padding: 20px;\n  width: 45%;\n  height: 400px;\n"]);return $=function(){return e},e}var K=b.c.div($()),V=b.c.ul(Q()),X=b.c.li(M()),ee=function(e){var n=e.stock,t=n.name,a=n.total_quantity,c=parseInt(n.avg_price.replace(",","")),u=parseInt(n.price.replace(",","")),i=100*(u/c-1);return r.a.createElement(V,null,r.a.createElement(X,null,t),r.a.createElement(X,null,a*c),r.a.createElement(X,null,a*u),r.a.createElement(X,null,i.toFixed(1)," %"))},ne=function(e){var n=e.asset,t=0,a=0;n.forEach((function(e){t+=parseInt(e.avg_price.replace(",",""))*e.total_quantity,a+=parseInt(e.price.replace(",",""))*e.total_quantity}));var c=100*(a/t-1);return r.a.createElement(V,null,r.a.createElement(X,null,"Total"),r.a.createElement(X,null,t),r.a.createElement(X,null,a),r.a.createElement(X,null,c.toFixed(1)," %"))},te=function(e){var n=e.asset;return r.a.createElement(K,null,r.a.createElement(V,null,r.a.createElement(X,null,"Stock"),r.a.createElement(X,null,"Purchase price"),r.a.createElement(X,null,"Current price"),r.a.createElement(X,null,"Yield")),n.slice(0,6).map((function(e){return r.a.createElement(ee,{stock:e,key:e.stock})})),r.a.createElement(ne,{asset:n}))};function ae(){var e=Object(f.a)(["\n  width: 60%;\n  padding: 20px;\n  margin-bottom: 24px;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ff5a5f;\n  font-size: 20px;\n  color: white;\n"]);return ae=function(){return e},e}var re=b.c.div(ae()),ce=function(e){var n=e.asset,t=0,a=0;n.forEach((function(e){t+=parseInt(e.avg_price.replace(",",""))*e.total_quantity,a+=parseInt(e.price.replace(",",""))*e.total_quantity}));var c=100*(a/t-1);return r.a.createElement(re,null,r.a.createElement("span",null,"Yield : ",c.toFixed(1)," %"))};function ue(){var e=Object(f.a)(["\n  width: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n"]);return ue=function(){return e},e}function ie(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 2px solid #cbd5e0;\n"]);return ie=function(){return e},e}function oe(){var e=Object(f.a)(["\n  padding: 20px;\n  width: 80%;\n  height: 400px;\n"]);return oe=function(){return e},e}var le=b.c.div(oe()),se=b.c.ul(ie()),pe=b.c.li(ue()),de=function(e){var n=e.stock,t=n.stock,a=n.name,c=n.total_quantity,u=parseInt(n.avg_price.replace(",","")),i=parseInt(n.price.replace(",",""));return r.a.createElement(se,null,r.a.createElement(pe,null,t),r.a.createElement(pe,null,a),r.a.createElement(pe,null,c," \uc8fc"),r.a.createElement(pe,null,u),r.a.createElement(pe,null,i))},fe=function(e){var n=e.asset;return r.a.createElement(le,null,r.a.createElement(se,null,r.a.createElement(pe,null,"Stock code"),r.a.createElement(pe,null,"Name"),r.a.createElement(pe,null,"Quantity"),r.a.createElement(pe,null,"Avg. purchase price"),r.a.createElement(pe,null,"Current price")),n.map((function(e){return r.a.createElement(de,{stock:e,key:e.stock})})))};function me(){var e=Object(f.a)(["\n  width: 80%;\n  display: flex;\n  justify-content: space-around;\n"]);return me=function(){return e},e}function be(){var e=Object(f.a)(["\n  width: 80%;\n  height: 500px;\n  padding: 20px;\n  display: flex;\n  justify-content: space-around;\n"]);return be=function(){return e},e}function ge(){var e=Object(f.a)(["\n  height: 100vh;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ge=function(){return e},e}var ve=b.c.div(ge()),Ee=b.c.div(be()),he=b.c.div(me()),xe=function(e){var n=e.isLoading,t=e.asset;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(J,null):r.a.createElement(ve,null,r.a.createElement(ce,{asset:t}),r.a.createElement(Ee,null,r.a.createElement(Y,{asset:t}),r.a.createElement(te,{asset:t})),r.a.createElement(he,null,r.a.createElement(fe,{asset:t}))))},je=t(47),Oe=t.n(je),ye=function(){var e=Object(N.a)(D.a.mark((function e(n,t,a,r){var c,u;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c={Authorization:r,"Content-Type":"application/json"},"http://asset-dashboard-dev.ap-northeast-2.elasticbeanstalk.com/api/v1",u="".concat("http://asset-dashboard-dev.ap-northeast-2.elasticbeanstalk.com/api/v1").concat(t),"get"!==n&&"delete"!==n){e.next=7;break}return e.abrupt("return",Oe.a[n](u,{headers:c}));case 7:return e.abrupt("return",Oe.a[n](u,a,{headers:c}));case 8:case"end":return e.stop()}}),e)})));return function(n,t,a,r){return e.apply(this,arguments)}}(),ke=function(e){return ye("post","/users/",e)},we=function(e){return ye("post","/users/login/",e)},Se=function(e){e.id,e.token,e.setAsset;var n=e.asset,t=Object(a.useState)(!0),c=Object(P.a)(t,2),u=c[0];c[1];return Object(a.useEffect)((function(){}),[]),r.a.createElement(xe,{isLoading:u,asset:n})},Ie=Object(m.b)((function(e){return{id:e.userReducer.id,token:e.userReducer.token,asset:e.userReducer.asset}}),(function(e){return{setAsset:function(n){return e(function(e){return{type:"SETASSET",payload:e}}(n))}}}))(Se);function Ce(){var e=Object(f.a)(["\n  width: 300px;\n  height: 50px;\n  padding: 12.5px 20px;\n  border: 1px solid grey;\n  background-color: white;\n  border-radius: 30px;\n  margin-bottom: 15px;\n"]);return Ce=function(){return e},e}var _e=b.c.input(Ce());function Le(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Le=function(){return e},e}function Fe(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n"]);return Fe=function(){return e},e}var Ae=b.c.div(Fe()),ze=b.c.form(Le()),qe=function(e){var n=Object(d.g)(),t=Object(m.c)(),c=Object(a.useState)(""),u=Object(P.a)(c,2),i=u[0],o=u[1],l=Object(a.useState)(""),s=Object(P.a)(l,2),p=s[0],f=s[1],b=function(){var e=Object(N.a)(D.a.mark((function e(a){var r,c,u,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(""!==i&&""!==p||(alert("All fields are required."),0))){e.next=16;break}return a.preventDefault(),e.prev=2,e.next=5,we({username:i,password:p});case 5:r=e.sent,c=r.data,u=c.id,o=c.token,t(T(u,o)),n.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),alert("Wrong username or password");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(Ae,null,r.a.createElement(ze,null,r.a.createElement(_e,{placeholder:"username",onChange:function(e){return o(e.target.value)}}),r.a.createElement(_e,{placeholder:"password",onChange:function(e){return f(e.target.value)}}),r.a.createElement(S,{onClick:b},"Sign In")))},Ue=function(e){return/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(e)};function Re(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Re=function(){return e},e}function Te(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n"]);return Te=function(){return e},e}var Be=b.c.div(Te()),Ge=b.c.form(Re()),De=function(){var e=Object(d.g)(),n=Object(a.useState)(""),t=Object(P.a)(n,2),c=t[0],u=t[1],i=Object(a.useState)(""),o=Object(P.a)(i,2),l=o[0],s=o[1],p=Object(a.useState)(""),f=Object(P.a)(p,2),m=f[0],b=f[1],g=Object(a.useState)(""),v=Object(P.a)(g,2),E=v[0],h=v[1],x=Object(a.useState)(""),j=Object(P.a)(x,2),O=j[0],y=j[1],k=function(){var n=Object(N.a)(D.a.mark((function n(t){var a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===m||""===E||""===O||""===l?(alert("All fields are required."),0):Ue(O)||(alert("Please add a valid email."),0)){n.next=3;break}return alert("Invalid form"),n.abrupt("return");case 3:t.preventDefault();try{a=ke({username:c,password:l,first_name:m,last_name:E,email:O}),201===a.status&&(alert("Account created, Please sign in"),e.push("/signin"))}catch(t){alert(t),console.warn(t)}case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(Be,null,r.a.createElement(Ge,null,r.a.createElement(_e,{placeholder:"Username",onChange:function(e){return u(e.target.value)}}),r.a.createElement(_e,{placeholder:"Password",onChange:function(e){return s(e.target.value)}}),r.a.createElement(_e,{placeholder:"First name",onChange:function(e){return b(e.target.value)}}),r.a.createElement(_e,{placeholder:"Last Name",onChange:function(e){return h(e.target.value)}}),r.a.createElement(_e,{placeholder:"E-mail",onChange:function(e){return y(e.target.value)}}),r.a.createElement(S,{onClick:k},"Sign Up")))};function Ne(){var e=Object(f.a)(["\n  font-size: 28px;\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n"]);return Pe=function(){return e},e}var Ze=b.c.div(Pe()),He=b.c.span(Ne()),Je=function(){var e=Object(m.c)();return Object(a.useEffect)((function(){e({type:"LOGOUT"}),console.log("See you again")})),r.a.createElement(Ze,null,r.a.createElement(He,null,"See you again!"))},We=function(){return r.a.createElement(p.a,null,r.a.createElement(k,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:U}),r.a.createElement(d.b,{path:"/dashboard",component:Ie}),r.a.createElement(d.b,{path:"/signin",component:qe}),r.a.createElement(d.b,{path:"/signup",component:De}),r.a.createElement(d.b,{path:"/logout",component:Je}),r.a.createElement(d.a,{from:"*",to:"/"})))},Ye=t(81);function Me(){var e=Object(f.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color: white;\n        color:#020202;\n        padding-top:50px;\n    }\n"]);return Me=function(){return e},e}var Qe=Object(b.a)(Me(),Ye.a),$e=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(We,null),r.a.createElement(Qe,null))}}]),t}(a.Component),Ke=t(82),Ve=t(13),Xe=Object(Ve.b)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOGIN":return Object(R.a)(Object(R.a)({},e),{},{isLoggedIn:!0,id:n.payload.id,token:n.payload.token});case"LOGOUT":return Object(R.a)(Object(R.a)({},e),{},{isLoggedIn:!1,id:null,token:null,asset:null});case"SETASSET":return Object(R.a)(Object(R.a)({},e),{},{asset:n.payload});default:return e}}}),en=t(48),nn=t(83),tn={key:"root",storage:t.n(nn).a},an=Object(en.a)(tn,Xe),rn=function(){var e=Object(Ve.c)(an);return{store:e,persistor:Object(en.b)(e)}}(),cn=rn.store,un=rn.persistor,on=function(){return r.a.createElement(m.a,{store:cn},r.a.createElement(Ke.a,{loading:null,persistor:un},r.a.createElement($e,null)))};u.a.render(r.a.createElement(on,null),document.getElementById("root"))},86:function(e,n,t){e.exports=t(209)}},[[86,1,2]]]);
//# sourceMappingURL=main.df04a987.chunk.js.map