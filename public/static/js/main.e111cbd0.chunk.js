(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{121:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),o=n(10),s=n(26),i=n(63),l=n(5),u="@@[UI] Open Modal",j="@@[UI] Close Modal",d="@@[Event] Add New",b="@@[Event] Set active",m="@@[Event] Clear event",p="@@[Event] Update event",f="@@[Event] Delete event",O="@@[Event] Delete loaded",h="@@[Auth] Cheking finish",v="@@[Auth] Login",x="@@[Auth] Logout",g={modalOpen:!1},y=n(50),N={events:[],activeEvent:null},w={cheking:!0},k=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case d:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(y.a)(e.events),[t.payload])});case m:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case p:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e._id===t.payload._id?t.payload:e}))});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case O:return Object(l.a)(Object(l.a)({},e),{},{events:Object(y.a)(t.payload)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(l.a)(Object(l.a)({},e),{},{cheking:!1},t.payload);case h:return Object(l.a)(Object(l.a)({},e),{},{cheking:!1});case x:return{cheking:!1};default:return e}}}),E="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,S=Object(s.d)(k,E(Object(s.a)(i.a))),C=n(67),_=n(8),A=n(18),D=n(13),T=n.n(D),M=(n(86),n(25)),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(A.a)(t,2),r=n[0],c=n[1],o=function(){return c(e)},s=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(M.a)({},t.name,t.value)))};return[r,s,o]},P=n(12),L=n.n(P),U=n(21),F="https://calendar-mern-express.herokuapp.com/api",R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},z=function(e){return{type:v,payload:e}},B=function(){return{type:h}},H=function(){return{type:x}},J=n(2),V=function(){var e=Object(o.b)(),t=I({lemail:"p4ulo@gmail.com",lpassword:"p4ulo123"}),n=Object(A.a)(t,2),a=n[0],r=n[1],c=I({remail:"p4ulo@gmail.com",rpassword:"p4ulo123",rpassword2:"p4ulo123",rname:"Paulo"}),s=Object(A.a)(c,2),i=s[0],l=s[1],u=i.remail,j=i.rpassword,d=i.rpassword2,b=i.rname,m=a.lemail,p=a.lpassword;return Object(J.jsx)("div",{className:"container login-container",children:Object(J.jsxs)("div",{className:"row",children:[Object(J.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(J.jsx)("h3",{children:"Ingreso"}),Object(J.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=m,a=p,function(){var e=Object(U.a)(L.a.mark((function e(t){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:c.uid,name:c.name}))):T.a.fire("error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"text",className:"form-control login_inputs",placeholder:"Correo",name:"lemail",value:m,onChange:r})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"password",className:"form-control login_inputs",placeholder:"Contrase\xf1a",name:"lpassword",value:p,onChange:r})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"submit",className:"btnSubmit login_inputs",value:"Login"})})]})]}),Object(J.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(J.jsx)("h3",{children:"Registro"}),Object(J.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),d!==j)return T.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;e((n=u,a=j,r=b,function(){var e=Object(U.a)(L.a.mark((function e(t){var c,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:o.uid,name:o.name}))):T.a.fire("error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"text",className:"form-control login_inputs",placeholder:"Nombre",name:"rname",value:b,onChange:l})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"email",className:"form-control login_inputs",placeholder:"Correo",name:"remail",value:u,onChange:l})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"password",className:"form-control login_inputs",placeholder:"Contrase\xf1a",name:"rpassword",value:j,onChange:l})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"password",className:"form-control login_inputs",placeholder:"Repita la contrase\xf1a",name:"rpassword2",value:d,onChange:l})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"submit",className:"btnSubmit login_inputs",value:"Crear cuenta"})})]})]})]})})},X=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(J.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4 px-2",children:[e&&Object(J.jsx)("span",{className:"navbar-brand",children:e}),Object(J.jsxs)("button",{className:"btn  btn-outline-danger",onClick:function(){t((function(e){localStorage.clear(),e(H())}))},children:[Object(J.jsx)("i",{className:"fa-solid fa-right-from-bracket me-1"}),Object(J.jsx)("span",{children:"Salir"})]})]})},Y=n(17),q=n.n(Y),W=n(49),K={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Q=(n(90),n(91),function(e){var t=e.event,n=t.title,a=t.user;return Object(J.jsxs)("div",{className:"single-event",children:[Object(J.jsxs)("span",{children:[n," -  "]}),Object(J.jsx)("strong",{children:a.name})]})}),Z=n(45),$=n.n(Z),ee=n(46),te=n.n(ee),ne=function(){return{type:u}},ae=function(e){return console.log(e),e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:q()(e.end).toDate(),start:q()(e.start).toDate()})}))},re=function(e){return{type:d,payload:e}},ce=function(){return{type:m}},oe=function(e){return{type:O,payload:e}},se=function(e){return{type:p,payload:e}},ie={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};$.a.setAppElement("#root");var le=q()().minutes(0).seconds(0).add(1,"hours"),ue=le.clone().add(1,"hours"),je={title:"Evento",notes:"",start:le.toDate(),end:ue.toDate()},de=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,r=Object(a.useState)(le.toDate()),c=Object(A.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(ue.toDate()),d=Object(A.a)(u,2),b=d[0],m=d[1],p=Object(a.useState)(!0),f=Object(A.a)(p,2),O=f[0],h=f[1],v=Object(a.useState)(je),x=Object(A.a)(v,2),g=x[0],y=x[1],N=g.notes,w=g.title,k=g.start,E=g.end;Object(a.useEffect)((function(){y(n||je)}),[n,y]);var S=function(e){var t=e.target;y(Object(l.a)(Object(l.a)({},g),{},Object(M.a)({},t.name,[t.value].toString())))},C=function(){e({type:j}),e(ce()),y(je)};return Object(J.jsxs)($.a,{isOpen:t,onRequestClose:C,style:ie,closeTimeoutMS:800,contentLabel:"Example Modal",className:"modal",overlayClassName:"modal-fondo",children:[Object(J.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(J.jsx)("hr",{}),Object(J.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=q()(k),c=q()(E);if(r.isSameOrAfter(c))return T.a.fire("Error","La fecha de finalizaci\xf3n debe ser mayor a la de inicio","error");w.toString().trim().length<2&&h(!1),e(n?(a=g,function(){var e=Object(U.a)(L.a.mark((function e(t){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events/".concat(a._id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?(t(se(a)),T.a.fire("Evento actualizado",r.msg,"success")):T.a.fire("Unauthorized",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(U.a)(L.a.mark((function t(n,a){var r,c,o,s,i;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,G("events/new",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento._id,e.user={_id:c,name:o},n(re(e))),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),h(!0),C()},children:[Object(J.jsxs)("div",{className:"form-group",children:[Object(J.jsx)("strong",{children:"Fecha y hora inicio"}),Object(J.jsx)(te.a,{onChange:function(e){i(e),m(e),y(Object(l.a)(Object(l.a)({},g),{},{start:e}))},value:s,format:"y-MM-dd h:mm:ss a",amPmAriaLabel:"Select AM/PM",className:"form-control"})]}),Object(J.jsxs)("div",{className:"form-group",children:[Object(J.jsx)("strong",{children:"Fecha y hora fin"}),Object(J.jsx)("div",{className:"calendar-modal",children:Object(J.jsx)(te.a,{onChange:function(e){m(e),y(Object(l.a)(Object(l.a)({},g),{},{end:e}))},value:b,format:"y-MM-dd h:mm:ss a",amPmAriaLabel:"Select AM/PM",className:"form-control"})})]}),Object(J.jsx)("hr",{}),Object(J.jsxs)("div",{className:"form-group",children:[Object(J.jsx)("strong",{children:"Titulo y notas"}),Object(J.jsx)("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:w,onChange:S,autoComplete:"off"}),Object(J.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(J.jsxs)("div",{className:"form-group",children:[Object(J.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:S}),Object(J.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(J.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(J.jsx)("i",{className:"far fa-save"}),Object(J.jsx)("span",{children:" Guardar"})]})]})]})},be=function(){var e=Object(o.b)();return Object(J.jsx)("button",{className:"btn-outline-primary btn fab",onClick:function(){e(ne())},children:Object(J.jsx)("i",{className:"fas fa-plus"})})},me=function(){var e=Object(o.b)();return Object(J.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){T.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(e(function(){var e=Object(U.a)(L.a.mark((function e(t,n){var a,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent,e.prev=1,e.next=4,G("events/".concat(a._id),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,console.log(c),console.log(a),c.ok?(t({type:f}),T.a.fire("Evento eliminado",c.msg,"success")):T.a.fire("Unauthorized",c.msg,"error"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}()),e(ce()))}))},children:Object(J.jsx)("i",{className:"fas fa-trash"})})},pe=Object(W.b)(q.a),fe=function(){var e=Object(o.c)((function(e){return e.calendar})),t=e.events,n=e.activeEvent,r=Object(o.c)((function(e){return e.auth})).uid,c=Object(o.b)();Object(a.useEffect)((function(){c(function(){var e=Object(U.a)(L.a.mark((function e(t){var n,a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=ae(a.eventos),console.log(r),t(oe(r)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[c]);return Object(J.jsxs)("div",{children:[Object(J.jsx)(X,{}),Object(J.jsxs)("div",{children:[Object(J.jsx)(W.a,{components:{event:Q},endAccessor:"end",events:t,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user._id?"#367CF7":"#465660",borderRadius:"0px",display:"block",color:"white"}}},localizer:pe,messages:K,onDoubleClickEvent:function(e){return c(ne()),!0},onSelectEvent:function(e){c({type:b,payload:e})},onSelectSlot:function(e){n&&c(ce())},selectable:!0,startAccessor:"start",style:{height:"90vh"}}),Object(J.jsx)(be,{}),n&&Object(J.jsx)(me,{}),Object(J.jsx)(de,{})]})]})},Oe=n(35),he=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Oe.a)(e,["isAuthenticated","component"]);return Object(J.jsx)(_.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(J.jsx)(n,Object(l.a)({},e)):Object(J.jsx)(_.a,{to:"/login"})}}))},ve=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Oe.a)(e,["isAuthenticated","component"]);return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(_.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(J.jsx)(_.a,{to:"/"}):Object(J.jsx)(n,Object(l.a)({},e))}}))})},xe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.cheking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(U.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:a.uid,name:a.name}))):t(B());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(J.jsx)("h5",{children:"Wait.."}):Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(C.a,{children:Object(J.jsx)("div",{children:Object(J.jsxs)(_.d,{children:[Object(J.jsx)(ve,{exact:!0,path:"/login",component:V,isAuthenticated:!!r}),Object(J.jsx)(he,{exact:!0,path:"/",component:fe,isAuthenticated:!!r}),Object(J.jsx)(_.a,{to:"/login"})]})})})})},ge=(n(121),function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(o.a,{store:S,children:Object(J.jsx)(xe,{})})})});c.a.render(Object(J.jsx)(ge,{}),document.getElementById("root"))},86:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.e111cbd0.chunk.js.map