(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8899],{16084:function(e,n,t){Promise.resolve().then(t.bind(t,5424)),Promise.resolve().then(t.bind(t,47016)),Promise.resolve().then(t.bind(t,97370)),Promise.resolve().then(t.bind(t,78352)),Promise.resolve().then(t.bind(t,59593)),Promise.resolve().then(t.bind(t,24723)),Promise.resolve().then(t.bind(t,57347)),Promise.resolve().then(t.bind(t,90702)),Promise.resolve().then(t.bind(t,67944)),Promise.resolve().then(t.bind(t,59646)),Promise.resolve().then(t.bind(t,48174)),Promise.resolve().then(t.bind(t,21418)),Promise.resolve().then(t.bind(t,77828)),Promise.resolve().then(t.bind(t,50498)),Promise.resolve().then(t.bind(t,63489)),Promise.resolve().then(t.bind(t,39171)),Promise.resolve().then(t.bind(t,38131)),Promise.resolve().then(t.bind(t,41891)),Promise.resolve().then(t.bind(t,82156)),Promise.resolve().then(t.bind(t,12720)),Promise.resolve().then(t.bind(t,70401)),Promise.resolve().then(t.bind(t,62570)),Promise.resolve().then(t.bind(t,38462)),Promise.resolve().then(t.bind(t,3450)),Promise.resolve().then(t.bind(t,8659)),Promise.resolve().then(t.bind(t,23947)),Promise.resolve().then(t.bind(t,53025)),Promise.resolve().then(t.bind(t,2005)),Promise.resolve().then(t.bind(t,58628)),Promise.resolve().then(t.bind(t,98595)),Promise.resolve().then(t.bind(t,57893)),Promise.resolve().then(t.bind(t,15988)),Promise.resolve().then(t.bind(t,73207)),Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.t.bind(t,72972,23)),Promise.resolve().then(t.t.bind(t,54317,23)),Promise.resolve().then(t.bind(t,92267)),Promise.resolve().then(t.bind(t,30519))},50888:function(e,n,t){"use strict";function r(e,n=166){let t;function r(...i){clearTimeout(t),t=setTimeout(()=>{e.apply(this,i)},n)}return r.clear=()=>{clearTimeout(t)},r}t.d(n,{Z:function(){return r}})},72786:function(e,n,t){"use strict";function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},42109:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(72786);function i(e){return(0,r.Z)(e).defaultView||window}},99376:function(e,n,t){"use strict";var r=t(35475);t.o(r,"usePathname")&&t.d(n,{usePathname:function(){return r.usePathname}}),t.o(r,"useRouter")&&t.d(n,{useRouter:function(){return r.useRouter}}),t.o(r,"useServerInsertedHTML")&&t.d(n,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},43252:function(e,n,t){"use strict";t.d(n,{kz:function(){return a},ss:function(){return l},sy:function(){return u}});var r=t(2265),i=t(63861);let o="snackbar",s={action:!1,open:!1,message:"Note archived",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"default",alert:{color:"primary",variant:"filled"},transition:"Fade",close:!1,actionButton:!1,maxStack:3,dense:!1,iconVariant:"usedefault"};function a(){let{data:e}=(0,i.ZP)(o,()=>s,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1});return(0,r.useMemo)(()=>({snackbar:e}),[e])}function l(e){let{action:n,open:t,message:r,anchorOrigin:a,variant:l,alert:u,transition:c,close:d,actionButton:m}=e;(0,i.JG)(o,e=>({...e,action:n||s.action,open:t||s.open,message:r||s.message,anchorOrigin:a||s.anchorOrigin,variant:l||s.variant,alert:{color:(null==u?void 0:u.color)||s.alert.color,variant:(null==u?void 0:u.variant)||s.alert.variant},transition:c||s.transition,close:d||s.close,actionButton:m||s.actionButton}),!1)}function u(){(0,i.JG)(o,e=>({...e,open:!1}),!1)}},44177:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(57437),i=t(76741),o=t(91699);function s(e){let n,t,{children:s,type:a="scale",direction:l="right",offset:u=10,scale:c={hover:1.05,tap:.95}}=e;switch(l){case"up":case"left":n=u,t=0;break;default:n=0,t=u}let[d,m]=(0,i.n)(n,t),[h,v]=(0,i.n)(n,t);switch(a){case"rotate":return(0,r.jsx)(o.E.div,{animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:s});case"slide":if("up"===l||"down"===l)return(0,r.jsx)(o.E.div,{animate:{y:void 0!==h?h:""},onHoverEnd:()=>v(),onHoverStart:()=>v(),children:s});return(0,r.jsx)(o.E.div,{animate:{x:void 0!==d?d:""},onHoverEnd:()=>m(),onHoverStart:()=>m(),children:s});default:return"number"==typeof c&&(c={hover:c,tap:c}),(0,r.jsx)(o.E.div,{whileHover:{scale:null==c?void 0:c.hover},whileTap:{scale:null==c?void 0:c.tap},children:s})}}},42271:function(e,n,t){"use strict";var r=t(57437),i=t(2265),o=t(31691),s=t(67208),a=t(36137),l=t(97260),u=t(97494),c=t(46387),d=t(8316);let m={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}};n.Z=(0,i.forwardRef)(function(e,n){let{border:t=!0,boxShadow:i,children:h,subheader:v,content:f=!0,contentSX:b={},darkTitle:x,divider:p=!0,secondary:P,shadow:Z,sx:g={},title:j,modal:w=!1,...E}=e,R=(0,o.Z)();return i=R.palette.mode===d.hY.DARK?i||!0:i,(0,r.jsxs)(s.Z,{sx:{position:"relative",border:t?"1px solid":"none",borderRadius:1,borderColor:R.palette.mode===d.hY.DARK?"divider":"grey.A800",boxShadow:i&&(!t||R.palette.mode===d.hY.DARK)?Z||R.customShadows.z1:"none",":hover":{boxShadow:i?Z||R.customShadows.z1:"none"},...R.palette.mode===d.hY.DARK&&{backgroundImage:"none"},...w&&{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"calc( 100% - 50px)",sm:"auto"},"& .MuiCardContent-root":{overflowY:"auto",minHeight:"auto",maxHeight:"calc(100vh - 200px)"}},...g},ref:n,...E,children:[!x&&j&&(0,r.jsx)(l.Z,{sx:m,titleTypographyProps:{variant:"subtitle1"},title:j,action:P,subheader:v}),x&&j&&(0,r.jsx)(l.Z,{sx:m,title:(0,r.jsx)(c.Z,{variant:"h4",children:j}),action:P}),j&&p&&(0,r.jsx)(u.Z,{}),f&&(0,r.jsx)(a.Z,{sx:b,children:h}),!f&&h]})})},8316:function(e,n,t){"use strict";t.d(n,{Hr:function(){return v},Zb:function(){return m},aX:function(){return j},dk:function(){return P},hY:function(){return d},oR:function(){return Z},pG:function(){return g},xk:function(){return h}});var r,i,o,s,a,l,u,c,d,m,h,v,f,b,x=t(54317),p=t.n(x);let P="/home",Z=7,g=260,j=60;(r=c||(c={})).SIMPLE="simple",r.LANDING="landing",(i=d||(d={})).LIGHT="light",i.DARK="dark",(o=m||(m={})).VERTICAL="vertical",o.HORIZONTAL="horizontal",(s=h||(h={})).LTR="ltr",s.RTL="rtl",(a=v||(v={})).FUNCTION="function",a.LINK="link",(l=f||(f={})).MALE="Male",l.FEMALE="Female",(u=b||(b={})).DEFAULT="default",u.STANDARD="standard";let w={fontFamily:p().style.fontFamily,i18n:"en",menuOrientation:"vertical",miniDrawer:!1,container:!0,mode:"light",presetColor:"default",themeDirection:"ltr"};n.ZP=w},73658:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(2265);function i(){let e=(0,r.useRef)(!0);return(0,r.useEffect)(()=>()=>{e.current=!1},[]),e}},30519:function(e,n,t){"use strict";t.d(n,{default:function(){return s}});var r=t(57437),i=t(21170),o=t(42271);function s(e){let{children:n,...t}=e;return(0,r.jsx)(o.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...t,border:!1,boxShadow:!0,shadow:e=>e.customShadows.z1,children:(0,r.jsx)(i.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})})}},92267:function(e,n,t){"use strict";t.d(n,{default:function(){return x}});var r=t(57437),i=t(99376),o=t(76631),s=t(69459),a=t(62069),l=t(10020),u=t(5485),c=t(41530),d=t(46387),m=t(34422),h=t(82326),v=t(73658),f=t(44177),b=t(43252);function x(){let e=(0,v.Z)(),n=(0,i.useRouter)();return(0,r.jsx)(h.J9,{initialValues:{email:"",submit:null},validationSchema:m.Ry().shape({email:m.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:async(t,r)=>{let{setErrors:i,setStatus:o,setSubmitting:s}=r;try{o({success:!0}),s(!1),(0,b.ss)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"}}),setTimeout(()=>{n.push("/check-mail")},1500)}catch(n){e.current&&(o({success:!1}),i({submit:n.message}),s(!1))}},children:e=>{let{errors:n,handleBlur:t,handleChange:i,handleSubmit:m,isSubmitting:h,touched:v,values:b}=e;return(0,r.jsx)("form",{noValidate:!0,onSubmit:m,children:(0,r.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,r.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,r.jsxs)(c.Z,{spacing:1,children:[(0,r.jsx)(l.Z,{htmlFor:"email-forgot",children:"Email Address"}),(0,r.jsx)(u.Z,{fullWidth:!0,error:!!(v.email&&n.email),id:"email-forgot",type:"email",value:b.email,name:"email",onBlur:t,onChange:i,placeholder:"Enter email address",inputProps:{}})]}),v.email&&n.email&&(0,r.jsx)(s.Z,{error:!0,id:"helper-text-email-forgot",children:n.email})]}),n.submit&&(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsx)(s.Z,{error:!0,children:n.submit})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,sx:{mb:-2},children:(0,r.jsx)(d.Z,{variant:"caption",children:"Do not forgot to check SPAM box."})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsx)(f.Z,{children:(0,r.jsx)(o.Z,{disableElevation:!0,disabled:h,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Send Password Reset Email"})})})]})})}})}}},function(e){e.O(0,[5590,1860,7576,5169,7594,6469,2972,2257,4787,3861,4604,5147,2971,2117,1744],function(){return e(e.s=16084)}),_N_E=e.O()}]);