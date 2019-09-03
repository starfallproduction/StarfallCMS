(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{166:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(175),i=a(172),s=a(704),c=a(705),m=a(706),l=a(707),d=a(403),u=a(360),f=a(243);var g=function(e){var n=e.request,a=e.btn,t=e.category,o=e.values,i=o.name,s=o.newName,c=o.confirmName,m=e.errors,l=e.touched,g=e.handleChange,p=e.isValid,x=e.setFieldTouched,w=function(e,n){n.persist(),g(n),x(e,!0,!1)};return r.a.createElement(f.a,{container:!0,component:"form",spacing:1,onSubmit:function(e){e.preventDefault(),n({name:i,newName:s,confirmName:c})}},"add"===t?r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"name",name:"name",label:"Name",onChange:w.bind(null,"name"),value:i,helperText:l.name?m.name:"",error:l.name&&Boolean(m.name)}):"delete"===t?r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:w.bind(null,"confirmName"),value:c,helperText:l.confirmName?m.confirmName:"",error:l.confirmName&&Boolean(m.confirmName)}):"rename"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"newName",name:"newName",label:"New Name",onChange:w.bind(null,"newName"),value:s,helperText:l.newName?m.newName:"",error:l.newName&&Boolean(m.newName)}),r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:w.bind(null,"confirmName"),value:c,helperText:l.confirmName?m.confirmName:"",error:l.confirmName&&Boolean(m.confirmName)})):null,r.a.createElement(f.a,{item:!0,xs:12,component:u.a,type:"submit",disabled:!p,size:"large"},a))},p=i.object({name:i.string().required("enter name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"name too short").max(50,"name too long")}),x=i.object({name:i.string(),confirmName:i.string().required("re-enter name").matches(/^[a-z0-9_]*$/i,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).oneOf([i.ref("name")],"Confirm Name does not match")}),w=i.object({name:i.string(),confirmName:i.string().required("re-enter name").oneOf([i.ref("name")],"Confirm Name does not match"),newName:i.string().required("enter new name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"new name too short").max(50,"new name too long")}),b={name:""},h=function(e){return{name:e,confirmName:""}},v=function(e){return{name:e,confirmName:"",newName:""}};n.a=function(e){var n=e.title,a=e.content,t=e.targetName,i=e.category,d=e.dialogProps;return r.a.createElement(s.a,d,r.a.createElement(c.a,{id:"dialog-title"},n),r.a.createElement(m.a,null,"add"===i||"delete"===i||"rename"===i?r.a.createElement(r.a.Fragment,null,"delete"===i?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,a),r.a.createElement(l.a,null,"Please type in the name of the target to confirm")):null,r.a.createElement(o.a,{validationSchema:"add"===i?p:"rename"===i?w:"delete"===i?x:{},initialValues:"add"===i?b:"rename"===i?v(t):"delete"===i?h(t):{},render:function(n){return r.a.createElement(g,Object.assign({},e,n))}})):"notification"===i?r.a.createElement(l.a,null,a):null))}},208:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(702),i=a(712);n.a=function(e){return r.a.createElement(i.a,Object.assign({minHeight:"100vh",component:o.a,maxWidth:"xl"},e),e.children)}},243:function(e,n,a){"use strict";var t=a(15),r=a(6),o=a(0),i=a.n(o),s=(a(4),a(46)),c=a(143),m=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/n).concat(String(e).replace(String(a),"")||"px")}var u=i.a.forwardRef(function(e,n){var a=e.alignContent,o=void 0===a?"stretch":a,c=e.alignItems,m=void 0===c?"stretch":c,l=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,g=e.container,p=void 0!==g&&g,x=e.direction,w=void 0===x?"row":x,b=e.item,h=void 0!==b&&b,v=e.justify,N=void 0===v?"flex-start":v,E=e.lg,y=void 0!==E&&E,j=e.md,C=void 0!==j&&j,S=e.sm,O=void 0!==S&&S,P=e.spacing,z=void 0===P?0:P,W=e.wrap,q=void 0===W?"wrap":W,B=e.xl,k=void 0!==B&&B,T=e.xs,F=void 0!==T&&T,I=e.zeroMinWidth,M=void 0!==I&&I,$=Object(t.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(s.a)(l.root,d,p&&[l.container,0!==z&&l["spacing-xs-".concat(String(z))]],h&&l.item,M&&l.zeroMinWidth,"row"!==w&&l["direction-xs-".concat(String(w))],"wrap"!==q&&l["wrap-xs-".concat(String(q))],"stretch"!==m&&l["align-items-xs-".concat(String(m))],"stretch"!==o&&l["align-content-xs-".concat(String(o))],"flex-start"!==N&&l["justify-xs-".concat(String(N))],!1!==F&&l["grid-xs-".concat(String(F))],!1!==O&&l["grid-sm-".concat(String(O))],!1!==C&&l["grid-md-".concat(String(C))],!1!==y&&l["grid-lg-".concat(String(y))],!1!==k&&l["grid-xl-".concat(String(k))]);return i.a.createElement(f,Object(r.a)({className:D,ref:n},$))});var f=Object(c.a)(function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var a={};return m.forEach(function(t){var r=e.spacing(t);0!==r&&(a["spacing-".concat(n,"-").concat(t)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})}),a}(e,"xs"),{},e.breakpoints.keys.reduce(function(n,a){return function(e,n,a){var t={};l.forEach(function(e){var n="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");t[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else t[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else t[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?Object(r.a)(e,t):e[n.breakpoints.up(a)]=t}(n,e,a),n},{}))},{name:"MuiGrid"})(u);n.a=f},281:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(243),i=a(163),s=a.n(i),c=a(175),m=a(208),l=s()(function(e){return{root:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:e.palette.background.dark.dark}}});n.a=function(e){var n=l();return r.a.createElement(m.a,null,r.a.createElement(o.a,{container:!0,alignItems:"center",justify:"center",className:n.root},r.a.createElement(c.a,e)))}},283:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(243),i=a(360);n.a=function(e){return r.a.createElement(o.a,Object.assign({item:!0,component:i.a},e),e.children)}},708:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(231),i=a.n(o),s=a(403),c=a(243),m=a(308),l=a(163),d=a.n(l),u=a(33),f=a(172),g=a(281),p=a(283),x=a(61),w=a(20),b=a(166),h=d()(function(e){return{root:{padding:e.spacing(2.5),"& > div":{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},btn:{backgroundColor:e.palette.primary}}}),v=r.a.forwardRef(function(e,n){return r.a.createElement(m.a,Object.assign({component:"form"},e,{innerRef:n}))}),N=function(e){var n=h(),a=Object(u.c)(),t=Object(u.d)(function(e){return e.notification}),o=Object(u.d)(function(e){return e.authStatus}),m=e.values,l=m.username,d=m.password,f=m.confirmPassword,g=e.errors,N=e.touched,E=e.handleChange,y=e.isValid,j=e.setFieldTouched,C=function(e,n){n.persist(),E(n),j(e,!0,!1)};return o===x.g?r.a.createElement(i.a,{to:"/signin"}):o===x.h?r.a.createElement(i.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{category:"notification",title:t.title,content:t.content,dialogProps:{open:""!==t.title&&""!==t.content,onClose:function(){return a(Object(w.d)())}}}),r.a.createElement(c.a,{component:v,container:!0,item:!0,xs:8,sm:6,className:n.root,elevation:3,onSubmit:function(e){e.preventDefault(),a(Object(x.c)(l,d))}},r.a.createElement(c.a,{item:!0,xs:12,component:s.a,required:!0,id:"username",name:"username",label:"Username",onChange:C.bind(null,"username"),value:l,variant:"outlined",margin:"dense",helperText:N.username?g.username:"",error:N.username&&Boolean(g.username)}),r.a.createElement(c.a,{item:!0,xs:12,component:s.a,required:!0,id:"password",name:"password",label:"Password",type:"password",onChange:C.bind(null,"password"),value:d,variant:"outlined",margin:"dense",helperText:N.password?g.password:"",error:N.password&&Boolean(g.password)}),r.a.createElement(c.a,{item:!0,xs:12,component:s.a,required:!0,id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",type:"password",onChange:C.bind(null,"confirmPassword"),value:f,variant:"outlined",margin:"dense",helperText:N.confirmPassword?g.confirmPassword:"",error:N.confirmPassword&&Boolean(g.confirmPassword)}),r.a.createElement(p.a,{type:"submit",disabled:!y,xs:12,variant:"contained",color:"secondary"},"Sign Up")))},E=f.object({username:f.string().required("enter username").matches(/^[a-zA-Z0-9]*$/,{message:"input letters and numbers only",excludeEmptyString:!0}).min(5,"username too short").max(30,"username too long"),password:f.string().required("enter password").matches(/^[a-zA-Z0-9]*$/,{message:"input letters and numbers only",excludeEmptyString:!0}).min(5,"password too short").max(30,"password too long"),confirmPassword:f.string().required("re-enter your password").oneOf([f.ref("password")],"password does not match")}),y={username:"Username12345",password:"",confirmPassword:""};n.default=function(){return r.a.createElement(g.a,{validationSchema:E,initialValues:y,render:function(e){return r.a.createElement(N,e)}})}}}]);
//# sourceMappingURL=11.053d0bb4.chunk.js.map