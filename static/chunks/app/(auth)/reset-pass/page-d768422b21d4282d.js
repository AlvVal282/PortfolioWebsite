(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3605],{90107:function(e,r,t){Promise.resolve().then(t.bind(t,5424)),Promise.resolve().then(t.bind(t,47016)),Promise.resolve().then(t.bind(t,97370)),Promise.resolve().then(t.bind(t,78352)),Promise.resolve().then(t.bind(t,59593)),Promise.resolve().then(t.bind(t,24723)),Promise.resolve().then(t.bind(t,57347)),Promise.resolve().then(t.bind(t,90702)),Promise.resolve().then(t.bind(t,67944)),Promise.resolve().then(t.bind(t,59646)),Promise.resolve().then(t.bind(t,48174)),Promise.resolve().then(t.bind(t,21418)),Promise.resolve().then(t.bind(t,77828)),Promise.resolve().then(t.bind(t,50498)),Promise.resolve().then(t.bind(t,63489)),Promise.resolve().then(t.bind(t,39171)),Promise.resolve().then(t.bind(t,38131)),Promise.resolve().then(t.bind(t,41891)),Promise.resolve().then(t.bind(t,82156)),Promise.resolve().then(t.bind(t,12720)),Promise.resolve().then(t.bind(t,70401)),Promise.resolve().then(t.bind(t,62570)),Promise.resolve().then(t.bind(t,38462)),Promise.resolve().then(t.bind(t,3450)),Promise.resolve().then(t.bind(t,8659)),Promise.resolve().then(t.bind(t,23947)),Promise.resolve().then(t.bind(t,53025)),Promise.resolve().then(t.bind(t,2005)),Promise.resolve().then(t.bind(t,58628)),Promise.resolve().then(t.bind(t,98595)),Promise.resolve().then(t.bind(t,57893)),Promise.resolve().then(t.bind(t,15988)),Promise.resolve().then(t.bind(t,73207)),Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.t.bind(t,72972,23)),Promise.resolve().then(t.t.bind(t,54317,23)),Promise.resolve().then(t.bind(t,28508)),Promise.resolve().then(t.bind(t,30519))},99376:function(e,r,t){"use strict";var o=t(35475);t.o(o,"usePathname")&&t.d(r,{usePathname:function(){return o.usePathname}}),t.o(o,"useRouter")&&t.d(r,{useRouter:function(){return o.useRouter}}),t.o(o,"useServerInsertedHTML")&&t.d(r,{useServerInsertedHTML:function(){return o.useServerInsertedHTML}})},43252:function(e,r,t){"use strict";t.d(r,{kz:function(){return a},ss:function(){return u},sy:function(){return l}});var o=t(2265),n=t(63861);let s="snackbar",i={action:!1,open:!1,message:"Note archived",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"default",alert:{color:"primary",variant:"filled"},transition:"Fade",close:!1,actionButton:!1,maxStack:3,dense:!1,iconVariant:"usedefault"};function a(){let{data:e}=(0,n.ZP)(s,()=>i,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1});return(0,o.useMemo)(()=>({snackbar:e}),[e])}function u(e){let{action:r,open:t,message:o,anchorOrigin:a,variant:u,alert:l,transition:c,close:d,actionButton:f}=e;(0,n.JG)(s,e=>({...e,action:r||i.action,open:t||i.open,message:o||i.message,anchorOrigin:a||i.anchorOrigin,variant:u||i.variant,alert:{color:(null==l?void 0:l.color)||i.alert.color,variant:(null==l?void 0:l.variant)||i.alert.variant},transition:c||i.transition,close:d||i.close,actionButton:f||i.actionButton}),!1)}function l(){(0,n.JG)(s,e=>({...e,open:!1}),!1)}},44177:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var o=t(57437),n=t(76741),s=t(91699);function i(e){let r,t,{children:i,type:a="scale",direction:u="right",offset:l=10,scale:c={hover:1.05,tap:.95}}=e;switch(u){case"up":case"left":r=l,t=0;break;default:r=0,t=l}let[d,f]=(0,n.n)(r,t),[h,p]=(0,n.n)(r,t);switch(a){case"rotate":return(0,o.jsx)(s.E.div,{animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:i});case"slide":if("up"===u||"down"===u)return(0,o.jsx)(s.E.div,{animate:{y:void 0!==h?h:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:i});return(0,o.jsx)(s.E.div,{animate:{x:void 0!==d?d:""},onHoverEnd:()=>f(),onHoverStart:()=>f(),children:i});default:return"number"==typeof c&&(c={hover:c,tap:c}),(0,o.jsx)(s.E.div,{whileHover:{scale:null==c?void 0:c.hover},whileTap:{scale:null==c?void 0:c.tap},children:i})}}},98749:function(e,r,t){"use strict";var o=t(57437),n=t(2265),s=t(59832),i=t(88064),a=t(16210),u=t(31691),l=t(2192),c=t(29294);let d=(0,a.ZP)(s.Z,{shouldForwardProp:e=>"variant"!==e&&"shape"!==e})(e=>{let{theme:r,variant:t,shape:o,color:n}=e;return{position:"relative","::after":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",borderRadius:"rounded"===o?"50%":4,opacity:0,transition:"all 0.5s"},":active::after":{position:"absolute",borderRadius:"rounded"===o?"50%":4,left:0,top:0,opacity:1,transition:"0s"},..."rounded"===o&&{borderRadius:"50%"},..."outlined"===t&&{border:"1px solid",borderColor:"inherit"},..."dashed"===t&&{border:"1px dashed",borderColor:"inherit"},..."text"!==t&&{"&.Mui-disabled":{background:r.palette.grey[200]}},...function(e){let{variant:r,theme:t,color:o}=e,{lighter:n,light:s,dark:a,main:u,contrastText:d}=(0,l.Z)(t,o),f=(0,c.Z)(t,"".concat(o,"Button")),h={"&::after":{boxShadow:"0 0 6px 6px ".concat((0,i.Fq)(u,.9))},"&:active::after":{boxShadow:"0 0 0 0 ".concat((0,i.Fq)(u,.9))},"&:focus-visible":{outline:"2px solid ".concat(a),outlineOffset:2}};switch(r){case"contained":return{color:d,background:u,"&:hover":{background:a},...h};case"light":return{color:u,background:n,"&:hover":{background:(0,i.Fq)(s,.5)},...h};case"shadow":return{boxShadow:f,color:d,background:u,"&:hover":{boxShadow:"none",background:a},...h};case"outlined":return{"&:hover":{background:"transparent",color:a,borderColor:a},...h};case"dashed":return{background:n,"&:hover":{color:a,borderColor:a},...h};default:return{"&:hover":{color:a,background:n},...h}}}({variant:t,theme:r,color:n})}});r.Z=(0,n.forwardRef)(function(e,r){let{variant:t="text",shape:n="square",children:s,color:i="primary",...a}=e,l=(0,u.Z)();return(0,o.jsx)(d,{ref:r,disableRipple:!0,variant:t,shape:n,theme:l,color:i,...a,children:s})})},42271:function(e,r,t){"use strict";var o=t(57437),n=t(2265),s=t(31691),i=t(67208),a=t(36137),u=t(97260),l=t(97494),c=t(46387),d=t(8316);let f={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}};r.Z=(0,n.forwardRef)(function(e,r){let{border:t=!0,boxShadow:n,children:h,subheader:p,content:m=!0,contentSX:x={},darkTitle:v,divider:b=!0,secondary:w,shadow:P,sx:g={},title:y,modal:S=!1,...Z}=e,j=(0,s.Z)();return n=j.palette.mode===d.hY.DARK?n||!0:n,(0,o.jsxs)(i.Z,{sx:{position:"relative",border:t?"1px solid":"none",borderRadius:1,borderColor:j.palette.mode===d.hY.DARK?"divider":"grey.A800",boxShadow:n&&(!t||j.palette.mode===d.hY.DARK)?P||j.customShadows.z1:"none",":hover":{boxShadow:n?P||j.customShadows.z1:"none"},...j.palette.mode===d.hY.DARK&&{backgroundImage:"none"},...S&&{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"calc( 100% - 50px)",sm:"auto"},"& .MuiCardContent-root":{overflowY:"auto",minHeight:"auto",maxHeight:"calc(100vh - 200px)"}},...g},ref:r,...Z,children:[!v&&y&&(0,o.jsx)(u.Z,{sx:f,titleTypographyProps:{variant:"subtitle1"},title:y,action:w,subheader:p}),v&&y&&(0,o.jsx)(u.Z,{sx:f,title:(0,o.jsx)(c.Z,{variant:"h4",children:y}),action:w}),y&&b&&(0,o.jsx)(l.Z,{}),m&&(0,o.jsx)(a.Z,{sx:x,children:h}),!m&&h]})})},8316:function(e,r,t){"use strict";t.d(r,{Hr:function(){return p},Zb:function(){return f},aX:function(){return y},dk:function(){return w},hY:function(){return d},oR:function(){return P},pG:function(){return g},xk:function(){return h}});var o,n,s,i,a,u,l,c,d,f,h,p,m,x,v=t(54317),b=t.n(v);let w="/home",P=7,g=260,y=60;(o=c||(c={})).SIMPLE="simple",o.LANDING="landing",(n=d||(d={})).LIGHT="light",n.DARK="dark",(s=f||(f={})).VERTICAL="vertical",s.HORIZONTAL="horizontal",(i=h||(h={})).LTR="ltr",i.RTL="rtl",(a=p||(p={})).FUNCTION="function",a.LINK="link",(u=m||(m={})).MALE="Male",u.FEMALE="Female",(l=x||(x={})).DEFAULT="default",l.STANDARD="standard";let S={fontFamily:b().style.fontFamily,i18n:"en",menuOrientation:"vertical",miniDrawer:!1,container:!0,mode:"light",presetColor:"default",themeDirection:"ltr"};r.ZP=S},73658:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var o=t(2265);function n(){let e=(0,o.useRef)(!0);return(0,o.useEffect)(()=>()=>{e.current=!1},[]),e}},30519:function(e,r,t){"use strict";t.d(r,{default:function(){return i}});var o=t(57437),n=t(21170),s=t(42271);function i(e){let{children:r,...t}=e;return(0,o.jsx)(s.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...t,border:!1,boxShadow:!0,shadow:e=>e.customShadows.z1,children:(0,o.jsx)(n.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:r})})}},28508:function(e,r,t){"use strict";t.d(r,{default:function(){return _}});var o=t(57437),n=t(2265),s=t(99376),i=t(21170),a=t(76631),u=t(41327),l=t(69459),c=t(62069),d=t(23996),f=t(10020),h=t(5485),p=t(41530),m=t(46387),x=t(34422),v=t(82326),b=t(98749),w=t(44177),P=t(43252),g=t(73658),y=t(45033),S=t(26303),Z=t.n(S),j=t(65080),R=t.n(j);function _(){let e=(0,g.Z)(),r=(0,s.useRouter)(),[t,S]=(0,n.useState)(),[j,_]=(0,n.useState)(!1),k=()=>{_(!j)},E=e=>{e.preventDefault()},M=e=>{let r=(0,y.X)(e);S((0,y.V)(r))};return(0,n.useEffect)(()=>{M("")},[]),(0,o.jsx)(v.J9,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:x.Ry().shape({password:x.Z_().max(255).required("Password is required"),confirmPassword:x.Z_().required("Confirm Password is required").test("confirmPassword","Both Password must be match!",(e,r)=>r.parent.password===e)}),onSubmit:async(t,o)=>{let{setErrors:n,setStatus:s,setSubmitting:i}=o;try{e.current&&(s({success:!0}),i(!1),(0,P.ss)({open:!0,message:"Successfuly reset password.",variant:"alert",alert:{color:"success"}}),setTimeout(()=>{r.push("/login")},1500))}catch(r){console.error(r),e.current&&(s({success:!1}),n({submit:r.message}),i(!1))}},children:e=>{let{errors:r,handleBlur:n,handleChange:s,handleSubmit:x,isSubmitting:v,touched:P,values:g}=e;return(0,o.jsx)("form",{noValidate:!0,onSubmit:x,children:(0,o.jsxs)(c.ZP,{container:!0,spacing:3,children:[(0,o.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,o.jsxs)(p.Z,{spacing:1,children:[(0,o.jsx)(f.Z,{htmlFor:"password-reset",children:"Password"}),(0,o.jsx)(h.Z,{fullWidth:!0,error:!!(P.password&&r.password),id:"password-reset",type:j?"text":"password",value:g.password,name:"password",onBlur:n,onChange:e=>{s(e),M(e.target.value)},endAdornment:(0,o.jsx)(d.Z,{position:"end",children:(0,o.jsx)(b.Z,{"aria-label":"toggle password visibility",onClick:k,onMouseDown:E,edge:"end",color:"secondary",children:j?(0,o.jsx)(Z(),{}):(0,o.jsx)(R(),{})})}),placeholder:"Enter password"})]}),P.password&&r.password&&(0,o.jsx)(l.Z,{error:!0,id:"helper-text-password-reset",children:r.password}),(0,o.jsx)(u.Z,{fullWidth:!0,sx:{mt:2},children:(0,o.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,o.jsx)(c.ZP,{item:!0,children:(0,o.jsx)(i.Z,{sx:{bgcolor:null==t?void 0:t.color,width:85,height:8,borderRadius:"7px"}})}),(0,o.jsx)(c.ZP,{item:!0,children:(0,o.jsx)(m.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null==t?void 0:t.label})})]})})]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,o.jsxs)(p.Z,{spacing:1,children:[(0,o.jsx)(f.Z,{htmlFor:"confirm-password-reset",children:"Confirm Password"}),(0,o.jsx)(h.Z,{fullWidth:!0,error:!!(P.confirmPassword&&r.confirmPassword),id:"confirm-password-reset",type:"password",value:g.confirmPassword,name:"confirmPassword",onBlur:n,onChange:s,placeholder:"Enter confirm password"})]}),P.confirmPassword&&r.confirmPassword&&(0,o.jsx)(l.Z,{error:!0,id:"helper-text-confirm-password-reset",children:r.confirmPassword})]}),r.submit&&(0,o.jsx)(c.ZP,{item:!0,xs:12,children:(0,o.jsx)(l.Z,{error:!0,children:r.submit})}),(0,o.jsx)(c.ZP,{item:!0,xs:12,children:(0,o.jsx)(w.Z,{children:(0,o.jsx)(a.Z,{disableElevation:!0,disabled:v,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Reset Password"})})})]})})}})}},2192:function(e,r,t){"use strict";function o(e,r){switch(r){case"secondary":return e.palette.secondary;case"error":return e.palette.error;case"warning":return e.palette.warning;case"info":return e.palette.info;case"success":return e.palette.success;default:return e.palette.primary}}t.d(r,{Z:function(){return o}})},29294:function(e,r,t){"use strict";function o(e,r){switch(r){case"secondary":return e.customShadows.secondary;case"error":return e.customShadows.error;case"warning":return e.customShadows.warning;case"info":return e.customShadows.info;case"success":return e.customShadows.success;case"primaryButton":return e.customShadows.primaryButton;case"secondaryButton":return e.customShadows.secondaryButton;case"errorButton":return e.customShadows.errorButton;case"warningButton":return e.customShadows.warningButton;case"infoButton":return e.customShadows.infoButton;case"successButton":return e.customShadows.successButton;default:return e.customShadows.primary}}t.d(r,{Z:function(){return o}})},45033:function(e,r,t){"use strict";t.d(r,{V:function(){return i},X:function(){return a}});let o=e=>new RegExp(/[0-9]/).test(e),n=e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e),s=e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e),i=e=>e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},a=e=>{let r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),o(e)&&(r+=1),s(e)&&(r+=1),n(e)&&(r+=1),r}},52002:function(e){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=Array(r);t<r;t++)o[t]=e[t];return o},e.exports.__esModule=!0,e.exports.default=e.exports},44203:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},11753:function(e,r,t){var o=t(2887);e.exports=function(e,r,t){return(r=o(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},e.exports.__esModule=!0,e.exports.default=e.exports},82088:function(e){e.exports=function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,n,s,i,a=[],u=!0,l=!1;try{if(s=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(o=s.call(t)).done)&&(a.push(o.value),a.length!==r);u=!0);}catch(e){l=!0,n=e}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},40322:function(e){e.exports=function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},10410:function(e,r,t){var o=t(44203),n=t(82088),s=t(97752),i=t(40322);e.exports=function(e,r){return o(e)||n(e,r)||s(e,r)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},45107:function(e,r,t){var o=t(22053).default;e.exports=function(e,r){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=o(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2887:function(e,r,t){var o=t(22053).default,n=t(45107);e.exports=function(e){var r=n(e,"string");return"symbol"==o(r)?r:r+""},e.exports.__esModule=!0,e.exports.default=e.exports},22053:function(e){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},97752:function(e,r,t){var o=t(52002);e.exports=function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[5590,1860,7576,5169,7594,6469,2972,2257,4787,7989,3861,4604,5147,7152,2971,2117,1744],function(){return e(e.s=90107)}),_N_E=e.O()}]);