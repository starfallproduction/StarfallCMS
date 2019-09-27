(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(175),c=n(170),o=n(697),i=n(698),m=n(699),u=n(700),d=n(398),s=n(360),f=n(694);var h=function(e){var t=e.request,n=e.btn,a=e.category,l=e.values,c=l.name,o=l.newName,i=l.confirmName,m=e.errors,u=e.touched,h=e.handleChange,p=e.isValid,v=e.setFieldTouched,E=function(e,t){t.persist(),h(t),v(e,!0,!1)};return r.a.createElement(f.a,{container:!0,component:"form",spacing:1,onSubmit:function(e){e.preventDefault(),t({name:c,newName:o,confirmName:i})}},"add"===a?r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"name",name:"name",label:"Name",onChange:E.bind(null,"name"),value:c,helperText:u.name?m.name:"",error:u.name&&Boolean(m.name)}):"delete"===a?r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:E.bind(null,"confirmName"),value:i,helperText:u.confirmName?m.confirmName:"",error:u.confirmName&&Boolean(m.confirmName)}):"rename"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"newName",name:"newName",label:"New Name",onChange:E.bind(null,"newName"),value:o,helperText:u.newName?m.newName:"",error:u.newName&&Boolean(m.newName)}),r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:E.bind(null,"confirmName"),value:i,helperText:u.confirmName?m.confirmName:"",error:u.confirmName&&Boolean(m.confirmName)})):null,r.a.createElement(f.a,{item:!0,xs:12,component:s.a,type:"submit",disabled:!p,size:"large"},n))},p=c.object({name:c.string().required("enter name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"name too short").max(50,"name too long")}),v=c.object({name:c.string(),confirmName:c.string().required("re-enter name").matches(/^[a-z0-9_]*$/i,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).oneOf([c.ref("name")],"Confirm Name does not match")}),E=c.object({name:c.string(),confirmName:c.string().required("re-enter name").oneOf([c.ref("name")],"Confirm Name does not match"),newName:c.string().required("enter new name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"new name too short").max(50,"new name too long")}),b={name:""},g=function(e){return{name:e,confirmName:""}},N=function(e){return{name:e,confirmName:"",newName:""}};t.a=function(e){var t=e.title,n=e.content,a=e.targetName,c=e.category,d=e.dialogProps;return r.a.createElement(o.a,d,r.a.createElement(i.a,{id:"dialog-title"},t),r.a.createElement(m.a,null,"add"===c||"delete"===c||"rename"===c?r.a.createElement(r.a.Fragment,null,"delete"===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,n),r.a.createElement(u.a,null,"Please type in the name of the target to confirm")):null,r.a.createElement(l.a,{validationSchema:"add"===c?p:"rename"===c?E:"delete"===c?v:{},initialValues:"add"===c?b:"rename"===c?N(a):"delete"===c?g(a):{},render:function(t){return r.a.createElement(h,Object.assign({},e,t))}})):"notification"===c?r.a.createElement(u.a,null,n):null))}},192:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(149)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=l},220:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(149)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),r.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),"FirstPage");t.default=l},221:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(149)).default)(r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=l},222:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(149)).default)(r.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=l},223:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(149)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),"LastPage");t.default=l},639:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(149)).default)(r.default.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.default=l},711:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(402),c=n(256),o=n.n(c),i=n(257),m=n.n(i),u=n(222),d=n.n(u),s=n(221),f=n.n(s),h=n(220),p=n.n(h),v=n(223),E=n.n(v),b=n(205),g=n.n(b),N=n(639),O=n.n(N),j=n(192),w=n.n(j),C=n(245),x=n.n(C),y=n(35),P=n(65),M=function(e){return e.users},L=function(e){return Object.values(M(e))},z=n(19),_=n(15),F=n.n(_),T=n(26),A=n(27),S=n(165);var k=function(e){var t=Object(y.c)(),n=Object(y.d)(function(e){return e.target}),a=Object(y.d)(function(e){return e.dialog}),l=Object(y.d)(function(e){return e.notification});return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{dialogProps:{open:a===z.c,onClose:function(){return t(Object(z.d)())}},category:"delete",title:'PERMANENTLY DELETE "'.concat(n.name,'"'),btn:'PERMANENTLY DELETE "'.concat(n.name,'"'),content:'This action will PERMANENTLY DELETE "'.concat(n.name,'". Proceed with caution!'),targetName:n.name,request:function(){var e=Object(T.a)(F.a.mark(function e(a){var r;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.name,e.prev=1,e.next=4,A.b.delete("user/".concat(n.id));case 4:t(Object(P.f)(n.id)),t(Object(z.d)()),t(Object(z.m)("Delete User ".concat(r),"Succeed deleting user ".concat(r))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t(Object(z.d)()),t(Object(z.m)("Delete User ".concat(r),"Fail deleting user ".concat(r,", error: ").concat(e.t0)));case 13:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()}),r.a.createElement(S.a,{category:"notification",title:l.title,content:l.content,dialogProps:{open:""!==l.title&&""!==l.content,onClose:function(){return t(Object(z.e)())}}}))},D=[{title:"#",field:"#",searchable:!1},{field:"id",searchable:!1,hidden:!0,export:!1},{title:"Username",field:"username",searchable:!0,export:!1},{title:"Is Creator?",field:"isCreator",render:function(e){return r.a.createElement(l.a,{readOnly:!0,checked:e.isCreator})}}];t.default=function(e){var t=e.history,n=Object(y.c)(),l=Object(y.d)(function(e){return L(e)});return Object(a.useEffect)(function(){n(Object(P.h)())},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(x.a,{title:"User List",columns:D,data:l.map(function(e,t){return{"#":t+1,id:e.id,username:e.username,isCreator:e.isCreator}}),actions:[function(e){return{icon:function(){return r.a.createElement(g.a,null)},tooltip:"Delete User",hidden:e.isCreator,onClick:function(e,t){var a=t.id,r=t.username;n(Object(z.i)({id:a,name:r})),n(Object(z.l)())}}},{icon:function(){return r.a.createElement(w.a,null)},tooltip:"Add User",isFreeAction:!0,onClick:function(){return t.push("/signup")}},{icon:function(){return r.a.createElement(O.a,null)},tooltip:"Refresh",isFreeAction:!0,onClick:function(){return n(Object(P.h)())}}],icons:{Search:o.a,ResetSearch:m.a,FirstPage:p.a,PreviousPage:f.a,NextPage:d.a,LastPage:E.a},options:{pageSize:10,pageSizeOptions:[10,25,50],search:!0,actionsColumnIndex:-1}}))}}}]);
//# sourceMappingURL=12.756d3653.chunk.js.map