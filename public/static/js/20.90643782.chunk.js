(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{557:function(e,a,t){"use strict";var n=t(3),c=t(12),r=t(0),o=t.n(r),i=(t(6),t(25)),l=t(62),s=o.a.forwardRef(function(e,a){var t=e.alt,r=e.children,l=e.childrenClassName,s=e.classes,m=e.className,d=e.component,u=void 0===d?"div":d,p=e.imgProps,b=e.sizes,f=e.src,g=e.srcSet,v=Object(c.a)(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),y=null,h=f||g;return y=h?o.a.createElement("img",Object(n.a)({alt:t,src:f,srcSet:g,sizes:b,className:s.img},p)):l&&o.a.isValidElement(r)?o.a.cloneElement(r,{className:Object(i.a)(l,r.props.className)}):r,o.a.createElement(u,Object(n.a)({className:Object(i.a)(s.root,s.system,m,!h&&s.colorDefault),ref:a},v),y)});a.a=Object(l.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}},{name:"MuiAvatar"})(s)},707:function(e,a,t){"use strict";t.r(a);var n=t(64),c=t(0),r=t.n(c),o=t(694),i=t(35),l=t(139),s=t(312),m=t(3),d=t(12),u=(t(6),t(25)),p=t(305),b=t(62),f=r.a.forwardRef(function(e,a){var t=e.classes,n=e.className,c=e.raised,o=void 0!==c&&c,i=Object(d.a)(e,["classes","className","raised"]);return r.a.createElement(p.a,Object(m.a)({className:Object(u.a)(t.root,n),elevation:o?8:1,ref:a},i))}),g=Object(b.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(f),v=r.a.forwardRef(function(e,a){var t=e.classes,n=e.className,c=e.component,o=void 0===c?"div":c,i=Object(d.a)(e,["classes","className","component"]);return r.a.createElement(o,Object(m.a)({className:Object(u.a)(t.root,n),ref:a},i))}),y=Object(b.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(v),h=r.a.forwardRef(function(e,a){var t=e.action,n=e.avatar,c=e.classes,o=e.className,i=e.component,l=void 0===i?"div":i,p=e.disableTypography,b=void 0!==p&&p,f=e.subheader,g=e.subheaderTypographyProps,v=e.title,y=e.titleTypographyProps,h=Object(d.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),j=v;null==j||j.type===s.a||b||(j=r.a.createElement(s.a,Object(m.a)({variant:n?"body2":"h5",className:c.title,component:"span",display:"block"},y),j));var O=f;return null==O||O.type===s.a||b||(O=r.a.createElement(s.a,Object(m.a)({variant:n?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},g),O)),r.a.createElement(l,Object(m.a)({className:Object(u.a)(c.root,o),ref:a},h),n&&r.a.createElement("div",{className:c.avatar},n),r.a.createElement("div",{className:c.content},j,O),t&&r.a.createElement("div",{className:c.action},t))}),j=Object(b.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(h),O=(t(5),["video","audio","picture","iframe","img"]),E=r.a.forwardRef(function(e,a){var t=e.classes,n=e.className,c=e.component,o=void 0===c?"div":c,i=e.image,l=e.src,s=e.style,p=Object(d.a)(e,["classes","className","component","image","src","style"]),b=-1!==O.indexOf(o),f=!b&&i?Object(m.a)({backgroundImage:'url("'.concat(i,'")')},s):s;return r.a.createElement(o,Object(m.a)({className:Object(u.a)(t.root,n,b&&t.media),ref:a,style:f,src:b?i||l:void 0},p))}),N=Object(b.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%",objectFit:"cover"}},{name:"MuiCardMedia"})(E),x=t(557),w=t(398),k=t(167),C=t.n(k),R=Object(c.lazy)(function(){return t.e(21).then(t.bind(null,704))}),S=function(e){var a=e.index;return r.a.createElement(x.a,null,a)},z=function(e){var a=e.name;return r.a.createElement(s.a,{variant:"h4",style:{color:"black"}},a)},P=C()(function(e){return{root:{paddingBottom:e.spacing(.5),paddingTop:e.spacing(.5)},horizontal:{paddingLeft:e.spacing(.5),paddingRight:e.spacing(.5)}}});var T=function(e){var a=e.name,t=e.index,n=e.id,c=e.img,i=e.updated,m=e.created,d=e.publicKey,u=e.authorized,p=P();return r.a.createElement(o.a,{item:!0,container:!0,xs:12,justify:"center"},r.a.createElement(l.a,{component:g,bgcolor:"#fafafa",my:1.5,width:1,elevation:3},r.a.createElement(j,{avatar:r.a.createElement(S,{index:t}),title:r.a.createElement(z,{name:a}),action:u?r.a.createElement(R,{id:n,name:a}):null}),r.a.createElement(l.a,{component:N,height:250,title:a,image:c}),r.a.createElement(y,{component:o.a,container:!0},r.a.createElement(o.a,{xs:12,container:!0,item:!0,alignItems:"center",className:p.root},r.a.createElement(o.a,{component:s.a,item:!0,xs:"auto"},"Public Key:"),r.a.createElement(o.a,{component:w.a,item:!0,xs:!0,className:p.horizontal,value:d,variant:"outlined",inputProps:{onClick:function(e){e.target.select(),e.target.setSelectionRange(0,99999),document.execCommand("copy"),alert("Copied Public Key")}}})),r.a.createElement(o.a,{xs:12,item:!0,component:s.a,className:p.root},"Created At: ".concat(m)),r.a.createElement(o.a,{xs:12,item:!0,component:s.a,className:p.root},"Updated At: ".concat(i)))))},M=t(65),A=t(230),F=Object(c.lazy)(function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,708))});a.default=function(e){var a=Object(i.d)(function(e){return e.authStatus}),t=Object(i.d)(A.a),l=Object(c.useState)(!1),s=Object(n.a)(l,2),m=s[0],d=s[1];return Object(c.useEffect)(function(){a===M.d?d(!0):d(!1)},[a]),r.a.createElement(o.a,{container:!0},m?r.a.createElement(F,null):null,t.map(function(e,a){return r.a.createElement(T,Object.assign({key:e.id,index:a+1},e,{authorized:m}))}))}}}]);
//# sourceMappingURL=20.90643782.chunk.js.map