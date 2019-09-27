(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{165:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(175),m=a(170),i=a(697),s=a(698),c=a(699),l=a(700),u=a(398),d=a(360),f=a(694);var p=function(e){var n=e.request,a=e.btn,t=e.category,o=e.values,m=o.name,i=o.newName,s=o.confirmName,c=e.errors,l=e.touched,p=e.handleChange,g=e.isValid,w=e.setFieldTouched,b=function(e,n){n.persist(),p(n),w(e,!0,!1)};return r.a.createElement(f.a,{container:!0,component:"form",spacing:1,onSubmit:function(e){e.preventDefault(),n({name:m,newName:i,confirmName:s})}},"add"===t?r.a.createElement(f.a,{component:u.a,item:!0,xs:12,id:"name",name:"name",label:"Name",onChange:b.bind(null,"name"),value:m,helperText:l.name?c.name:"",error:l.name&&Boolean(c.name)}):"delete"===t?r.a.createElement(f.a,{component:u.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:b.bind(null,"confirmName"),value:s,helperText:l.confirmName?c.confirmName:"",error:l.confirmName&&Boolean(c.confirmName)}):"rename"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:u.a,item:!0,xs:12,id:"newName",name:"newName",label:"New Name",onChange:b.bind(null,"newName"),value:i,helperText:l.newName?c.newName:"",error:l.newName&&Boolean(c.newName)}),r.a.createElement(f.a,{component:u.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:b.bind(null,"confirmName"),value:s,helperText:l.confirmName?c.confirmName:"",error:l.confirmName&&Boolean(c.confirmName)})):null,r.a.createElement(f.a,{item:!0,xs:12,component:d.a,type:"submit",disabled:!g,size:"large"},a))},g=m.object({name:m.string().required("enter name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"name too short").max(50,"name too long")}),w=m.object({name:m.string(),confirmName:m.string().required("re-enter name").matches(/^[a-z0-9_]*$/i,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).oneOf([m.ref("name")],"Confirm Name does not match")}),b=m.object({name:m.string(),confirmName:m.string().required("re-enter name").oneOf([m.ref("name")],"Confirm Name does not match"),newName:m.string().required("enter new name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"new name too short").max(50,"new name too long")}),h={name:""},N=function(e){return{name:e,confirmName:""}},E=function(e){return{name:e,confirmName:"",newName:""}};n.a=function(e){var n=e.title,a=e.content,t=e.targetName,m=e.category,u=e.dialogProps;return r.a.createElement(i.a,u,r.a.createElement(s.a,{id:"dialog-title"},n),r.a.createElement(c.a,null,"add"===m||"delete"===m||"rename"===m?r.a.createElement(r.a.Fragment,null,"delete"===m?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,a),r.a.createElement(l.a,null,"Please type in the name of the target to confirm")):null,r.a.createElement(o.a,{validationSchema:"add"===m?g:"rename"===m?b:"delete"===m?w:{},initialValues:"add"===m?h:"rename"===m?E(t):"delete"===m?N(t):{},render:function(n){return r.a.createElement(p,Object.assign({},e,n))}})):"notification"===m?r.a.createElement(l.a,null,a):null))}},210:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(692),m=a(139);n.a=function(e){return r.a.createElement(m.a,Object.assign({minHeight:"100vh",component:o.a,maxWidth:"xl"},e),e.children)}},283:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(694),m=a(167),i=a.n(m),s=a(175),c=a(210),l=i()(function(e){return{root:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:e.palette.background.dark.dark}}});n.a=function(e){var n=l();return r.a.createElement(c.a,null,r.a.createElement(o.a,{container:!0,alignItems:"center",justify:"center",className:n.root},r.a.createElement(s.a,e)))}},285:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(694),m=a(360);n.a=function(e){return r.a.createElement(o.a,Object.assign({item:!0,component:m.a},e),e.children)}},701:function(e,n,a){"use strict";a.r(n);var t=a(15),r=a.n(t),o=a(26),m=a(64),i=a(0),s=a.n(i),c=a(23),l=a(398),u=a(694),d=a(305),f=a(167),p=a.n(f),g=a(35),w=a(170),b=a(283),h=a(285),N=a(65),E=a(19),v=a(165),x=p()(function(e){return{root:{padding:e.spacing(2.5),"& > div":{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},btn:{backgroundColor:e.palette.primary}}}),y=s.a.forwardRef(function(e,n){return s.a.createElement(d.a,Object.assign({component:"form"},e,{innerRef:n}))}),j=function(e){var n=x(),a=Object(g.c)(),t=Object(g.d)(function(e){return e.notification}),d=Object(g.d)(function(e){return e.authStatus}),f=Object(i.useState)(!1),p=Object(m.a)(f,2),w=p[0],b=p[1],j=e.values,C=j.username,O=j.password,P=j.confirmPassword,S=e.errors,q=e.touched,T=e.handleChange,k=e.isValid,B=e.setFieldTouched,z=function(e,n){n.persist(),T(n),B(e,!0,!1)};return d===N.i?s.a.createElement(c.a,{to:"/signin"}):d===N.j||w?s.a.createElement(c.a,{to:"/"}):s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{category:"notification",title:t.title,content:t.content,dialogProps:{open:""!==t.title&&""!==t.content,onClose:function(){return a(Object(E.e)())}}}),s.a.createElement(u.a,{component:y,container:!0,item:!0,xs:8,sm:6,className:n.root,elevation:3,onSubmit:function(){var e=Object(o.a)(r.a.mark(function e(n){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a(Object(N.c)(C,O));case 3:t=e.sent,d===N.d&&t&&b(!0);case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()},s.a.createElement(u.a,{item:!0,xs:12,component:l.a,required:!0,id:"username",name:"username",label:"Username",onChange:z.bind(null,"username"),value:C,variant:"outlined",margin:"dense",helperText:q.username?S.username:"",error:q.username&&Boolean(S.username),placeholder:"Username12345"}),s.a.createElement(u.a,{item:!0,xs:12,component:l.a,required:!0,id:"password",name:"password",label:"Password",type:"password",onChange:z.bind(null,"password"),value:O,variant:"outlined",margin:"dense",helperText:q.password?S.password:"",error:q.password&&Boolean(S.password)}),s.a.createElement(u.a,{item:!0,xs:12,component:l.a,required:!0,id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",type:"password",onChange:z.bind(null,"confirmPassword"),value:P,variant:"outlined",margin:"dense",helperText:q.confirmPassword?S.confirmPassword:"",error:q.confirmPassword&&Boolean(S.confirmPassword)}),s.a.createElement(h.a,{type:"submit",disabled:!k,xs:12,variant:"contained",color:"secondary"},"Sign Up")))},C=w.object({username:w.string().required("enter username").matches(/^[a-zA-Z0-9]*$/,{message:"input letters and numbers only",excludeEmptyString:!0}).min(5,"username too short").max(30,"username too long"),password:w.string().required("enter password").matches(/^[a-zA-Z0-9]*$/,{message:"input letters and numbers only",excludeEmptyString:!0}).min(5,"password too short").max(30,"password too long"),confirmPassword:w.string().required("re-enter your password").oneOf([w.ref("password")],"password does not match")});n.default=function(){return s.a.createElement(b.a,{validationSchema:C,render:function(e){return s.a.createElement(j,e)}})}}}]);
//# sourceMappingURL=15.d6e3337a.chunk.js.map