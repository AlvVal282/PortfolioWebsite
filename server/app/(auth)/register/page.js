(()=>{var e={};e.id=566,e.ids=[566],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},98239:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),t(90742),t(95795),t(82427),t(5811);var s=t(23191),a=t(88716),n=t(37922),i=t.n(n),o=t(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["(auth)",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,90742)),"/Users/alvarovaldez-duran/Library/Mobile Documents/com~apple~CloudDocs/Desktop/School/PersonalProjects/PortfolioWebsite/src/app/(auth)/register/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,95795)),"/Users/alvarovaldez-duran/Library/Mobile Documents/com~apple~CloudDocs/Desktop/School/PersonalProjects/PortfolioWebsite/src/app/(auth)/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,82427)),"/Users/alvarovaldez-duran/Library/Mobile Documents/com~apple~CloudDocs/Desktop/School/PersonalProjects/PortfolioWebsite/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,5811)),"/Users/alvarovaldez-duran/Library/Mobile Documents/com~apple~CloudDocs/Desktop/School/PersonalProjects/PortfolioWebsite/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/alvarovaldez-duran/Library/Mobile Documents/com~apple~CloudDocs/Desktop/School/PersonalProjects/PortfolioWebsite/src/app/(auth)/register/page.tsx"],u="/(auth)/register/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3479:(e,r,t)=>{Promise.resolve().then(t.bind(t,76547))},44974:(e,r,t)=>{Promise.resolve().then(t.bind(t,11132))},47688:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(17577);function a(e,r){var t,a;return s.isValidElement(e)&&-1!==r.indexOf(null!=(t=e.type.muiName)?t:null==(a=e.type)||null==(a=a._payload)||null==(a=a.value)?void 0:a.muiName)}},46226:(e,r,t)=>{"use strict";t.d(r,{default:()=>a.a});var s=t(69029),a=t.n(s)},90434:(e,r,t)=>{"use strict";t.d(r,{default:()=>a.a});var s=t(79404),a=t.n(s)},69029:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{default:function(){return l},getImageProps:function(){return o}});let s=t(91174),a=t(23078),n=t(92481),i=s._(t(86820));function o(e){let{props:r}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(r))void 0===t&&delete r[e];return{props:r}}let l=n.Image},97930:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var s=t(10326),a=t(80112),n=t(92267);function i({children:e,type:r="scale",direction:t="right",offset:i=10,scale:o={hover:1.05,tap:.95}}){let l,d;switch(t){case"up":case"left":l=i,d=0;break;default:l=0,d=i}let[c,u]=(0,a.n)(l,d),[m,p]=(0,a.n)(l,d);switch(r){case"rotate":return s.jsx(n.E.div,{animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:e});case"slide":if("up"===t||"down"===t)return s.jsx(n.E.div,{animate:{y:void 0!==m?m:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:e});return s.jsx(n.E.div,{animate:{x:void 0!==c?c:""},onHoverEnd:()=>u(),onHoverStart:()=>u(),children:e});default:return"number"==typeof o&&(o={hover:o,tap:o}),s.jsx(n.E.div,{whileHover:{scale:o?.hover},whileTap:{scale:o?.tap},children:e})}}},65507:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var s=t(10326),a=t(17577),n=t(23743),i=t(34039),o=t(4766),l=t(50080),d=t(8597),c=t(25609),u=t(71791);let m={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},p=(0,a.forwardRef)(function({border:e=!0,boxShadow:r,children:t,subheader:a,content:p=!0,contentSX:h={},darkTitle:x,divider:g=!0,secondary:f,shadow:j,sx:v={},title:Z,modal:b=!1,...y},P){let w=(0,n.Z)();return r=w.palette.mode===u.hY.DARK?r||!0:r,(0,s.jsxs)(i.Z,{sx:{position:"relative",border:e?"1px solid":"none",borderRadius:1,borderColor:w.palette.mode===u.hY.DARK?"divider":"grey.A800",boxShadow:r&&(!e||w.palette.mode===u.hY.DARK)?j||w.customShadows.z1:"none",":hover":{boxShadow:r?j||w.customShadows.z1:"none"},...w.palette.mode===u.hY.DARK&&{backgroundImage:"none"},...b&&{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"calc( 100% - 50px)",sm:"auto"},"& .MuiCardContent-root":{overflowY:"auto",minHeight:"auto",maxHeight:"calc(100vh - 200px)"}},...v},ref:P,...y,children:[!x&&Z&&s.jsx(l.Z,{sx:m,titleTypographyProps:{variant:"subtitle1"},title:Z,action:f,subheader:a}),x&&Z&&s.jsx(l.Z,{sx:m,title:s.jsx(c.Z,{variant:"h4",children:Z}),action:f}),Z&&g&&s.jsx(d.Z,{}),p&&s.jsx(o.Z,{sx:h,children:t}),!p&&t]})})},53951:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var s=t(10326),a=t(90434),n=t(95886),i=t(12647),o=t(46226),l=t(25609);function d({reverse:e}){return(0,s.jsxs)(i.default,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,children:[s.jsx(o.default,{src:"/assets/images/PersonalLogoAVID150x150.png",alt:"AVD",width:50,height:50}),s.jsx(l.Z,{variant:"h2",sx:{fontWeight:550,color:"black",letterSpacing:"0.5px",lineHeight:1.5,textTransform:"capitalize"},children:"Portfolio"})]})}function c(){return s.jsx(o.default,{src:"/assets/images/PersonalLogoAVID150x150.png",alt:"AVD",width:50,height:50})}var u=t(71791);function m({reverse:e,isIcon:r,sx:t,to:i}){return s.jsx(a.default,{href:i||u.dk,passHref:!0,legacyBehavior:!0,children:s.jsx(n.Z,{disableRipple:!0,sx:t,children:r?s.jsx(c,{}):s.jsx(d,{reverse:e})})})}},60013:(e,r,t)=>{"use strict";t.d(r,{default:()=>i});var s=t(10326),a=t(62232),n=t(65507);function i({children:e,...r}){return s.jsx(n.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,border:!1,boxShadow:!0,shadow:e=>e.customShadows.z1,children:s.jsx(a.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:e})})}},19996:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var s=t(10326),a=t(62232),n=t(32634),i=t(60013),o=t(55771),l=t(23179),d=t(25609),c=t(15813);function u(){return s.jsx(o.Z,{maxWidth:"xl",children:(0,s.jsxs)(c.Z,{direction:{xs:"column",sm:"row"},justifyContent:{xs:"center",sm:"space-between"},spacing:2,textAlign:{xs:"center",sm:"inherit"},children:[s.jsx(d.Z,{variant:"subtitle2",color:"secondary",children:"For educational use only"}),(0,s.jsxs)(c.Z,{direction:{xs:"column",sm:"row"},spacing:{xs:1,sm:3},textAlign:{xs:"center",sm:"inherit"},children:[s.jsx(l.Z,{href:"https://www.tacoma.uw.edu/",target:"_blank",variant:"caption",color:"text.secondary",children:"University of Washington Tacoma"}),s.jsx(l.Z,{href:"https://www.tacoma.uw.edu/set",target:"_blank",variant:"caption",color:"text.secondary",children:"School of Engineering and Technology"}),s.jsx(l.Z,{href:"https://www.tacoma.uw.edu/set/css-elective-course-descriptions",target:"_blank",variant:"caption",color:"text.secondary",children:"TCSS 460"})]})]})})}var m=t(53951);function p({children:e}){return s.jsx(a.Z,{sx:{minHeight:"100vh"},children:(0,s.jsxs)(n.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[s.jsx(n.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:s.jsx(m.Z,{})}),s.jsx(n.ZP,{item:!0,xs:12,children:s.jsx(n.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:s.jsx(n.ZP,{item:!0,children:s.jsx(i.default,{children:e})})})}),s.jsx(n.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:s.jsx(u,{})})]})})}},34951:(e,r,t)=>{"use strict";t.d(r,{V:()=>i,X:()=>o});let s=e=>new RegExp(/[0-9]/).test(e),a=e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e),n=e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e),i=e=>e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},o=e=>{let r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),s(e)&&(r+=1),n(e)&&(r+=1),a(e)&&(r+=1),r}},76547:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var s=t(10326);t(17577);var a=t(35047),n=t(77109),i=t(94224);function o({children:e}){let{data:r,status:t}=(0,n.useSession)();return((0,a.useRouter)(),"loading"===t||r?.user)?s.jsx(i.Z,{}):e}t(71791)},11132:(e,r,t)=>{"use strict";t.d(r,{default:()=>E});var s=t(10326),a=t(90434),n=t(77109),i=t(32634),o=t(23179),l=t(15813),d=t(25609),c=t(19996),u=t(17577),m=t(87700),p=t(36238),h=t(53913),x=t(57329),g=t(12313),f=t(6231),j=t(62232),v=t(10123),Z=t(47259),b=t(12044),y=t(97930),P=t(71791),w=t(34951),S=t(37072),D=t.n(S),C=t(38471),_=t.n(C);function k({providers:e,csrfToken:r}){let[t,c]=(0,u.useState)(),[S,C]=(0,u.useState)(!1),k=()=>{C(!S)},E=e=>{e.preventDefault()},A=e=>{let r=(0,w.X)(e);c((0,w.V)(r))};return s.jsx(s.Fragment,{children:s.jsx(Z.J9,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:null},validationSchema:v.Ry().shape({firstname:v.Z_().max(255).required("First Name is required"),lastname:v.Z_().max(255).required("Last Name is required"),email:v.Z_().email("Must be a valid email").max(255).required("Email is required"),password:v.Z_().required("Password is required").test("no-leading-trailing-whitespace","Password cannot start or end with spaces",e=>e===e.trim()).max(10,"Password must be less than 10 characters")}),onSubmit:async(e,{setErrors:r,setSubmitting:t})=>{let s=e.email.trim();(0,n.signIn)("register",{redirect:!1,firstname:e.firstname,lastname:e.lastname,email:s,password:e.password,company:e.company,callbackUrl:P.dk}).then(e=>{e?.error&&(r({submit:e.error}),t(!1))})},children:({errors:e,handleBlur:n,handleChange:c,handleSubmit:u,isSubmitting:v,touched:Z,values:P})=>(0,s.jsxs)("form",{noValidate:!0,onSubmit:u,children:[s.jsx("input",{name:"csrfToken",type:"hidden",defaultValue:r}),(0,s.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,s.jsxs)(i.ZP,{item:!0,xs:6,children:[(0,s.jsxs)(l.Z,{spacing:1,children:[s.jsx(g.Z,{htmlFor:"firstname-signup",children:"First Name*"}),s.jsx(f.Z,{id:"firstname-login",type:"firstname",value:P.firstname,name:"firstname",onBlur:n,onChange:c,placeholder:"Enter your First Name",fullWidth:!0,error:!!(Z.firstname&&e.firstname)})]}),Z.firstname&&e.firstname&&s.jsx(p.Z,{error:!0,id:"helper-text-firstname-signup",children:e.firstname})]}),(0,s.jsxs)(i.ZP,{item:!0,xs:6,children:[(0,s.jsxs)(l.Z,{spacing:1,children:[s.jsx(g.Z,{htmlFor:"lastname-signup",children:"Last Name*"}),s.jsx(f.Z,{fullWidth:!0,error:!!(Z.lastname&&e.lastname),id:"lastname-signup",type:"lastname",value:P.lastname,name:"lastname",onBlur:n,onChange:c,placeholder:"Enter your Last Name",inputProps:{}})]}),Z.lastname&&e.lastname&&s.jsx(p.Z,{error:!0,id:"helper-text-lastname-signup",children:e.lastname})]}),(0,s.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,s.jsxs)(l.Z,{spacing:1,children:[s.jsx(g.Z,{htmlFor:"company-signup",children:"Company"}),s.jsx(f.Z,{fullWidth:!0,error:!!(Z.company&&e.company),id:"company-signup",value:P.company,name:"company",onBlur:n,onChange:c,placeholder:"Enter your company name",inputProps:{}})]}),Z.company&&e.company&&s.jsx(p.Z,{error:!0,id:"helper-text-company-signup",children:e.company})]}),(0,s.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,s.jsxs)(l.Z,{spacing:1,children:[s.jsx(g.Z,{htmlFor:"email-signup",children:"Email Address*"}),s.jsx(f.Z,{fullWidth:!0,error:!!(Z.email&&e.email),id:"email-login",type:"email",value:P.email,name:"email",onBlur:n,onChange:c,placeholder:"Enter email address",inputProps:{}})]}),Z.email&&e.email&&s.jsx(p.Z,{error:!0,id:"helper-text-email-signup",children:e.email})]}),(0,s.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,s.jsxs)(l.Z,{spacing:1,children:[s.jsx(g.Z,{htmlFor:"password-signup",children:"Password"}),s.jsx(f.Z,{fullWidth:!0,error:!!(Z.password&&e.password),id:"password-signup",type:S?"text":"password",value:P.password,name:"password",onBlur:n,onChange:e=>{c(e),A(e.target.value)},endAdornment:s.jsx(x.Z,{position:"end",children:s.jsx(b.Z,{"aria-label":"toggle password visibility",onClick:k,onMouseDown:E,edge:"end",color:"secondary",children:S?s.jsx(D(),{}):s.jsx(_(),{})})}),placeholder:"Enter password"})]}),Z.password&&e.password&&s.jsx(p.Z,{error:!0,id:"helper-text-password-signup",children:e.password}),s.jsx(h.Z,{fullWidth:!0,sx:{mt:2},children:(0,s.jsxs)(i.ZP,{container:!0,spacing:2,alignItems:"center",children:[s.jsx(i.ZP,{item:!0,children:s.jsx(j.Z,{sx:{bgcolor:t?.color,width:85,height:8,borderRadius:"7px"}})}),s.jsx(i.ZP,{item:!0,children:s.jsx(d.Z,{variant:"subtitle1",fontSize:"0.75rem",children:t?.label})})]})})]}),s.jsx(i.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,s.jsxs)(d.Z,{variant:"body2",children:["By Signing up, you agree to our \xa0",s.jsx(a.default,{href:"/",passHref:!0,legacyBehavior:!0,children:s.jsx(o.Z,{variant:"subtitle2",children:"Terms of Service"})}),"\xa0 and \xa0",s.jsx(a.default,{href:"/",passHref:!0,legacyBehavior:!0,children:s.jsx(o.Z,{variant:"subtitle2",children:"Privacy Policy"})})]})}),e.submit&&s.jsx(i.ZP,{item:!0,xs:12,children:s.jsx(p.Z,{error:!0,children:e.submit})}),s.jsx(i.ZP,{item:!0,xs:12,children:s.jsx(y.Z,{children:s.jsx(m.Z,{disableElevation:!0,disabled:v,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})]})})})}function E(){let e=(0,n.getCsrfToken)(),r=(0,n.getProviders)();return s.jsx(c.Z,{children:(0,s.jsxs)(i.ZP,{container:!0,spacing:3,children:[s.jsx(i.ZP,{item:!0,xs:12,children:(0,s.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[s.jsx(d.Z,{variant:"h3",children:"Sign up"}),s.jsx(a.default,{href:"/login",passHref:!0,legacyBehavior:!0,children:s.jsx(o.Z,{variant:"body1",color:"primary",children:"Already have an account?"})})]})}),s.jsx(i.ZP,{item:!0,xs:12,children:s.jsx(k,{providers:r,csrfToken:e})})]})})}},95795:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(19510),a=t(61066);function n({children:e}){return s.jsx(a.Z,{children:e})}},90742:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(19510);let a=(0,t(68570).createProxy)(String.raw`/Users/alvarovaldez-duran/Library/Mobile Documents/com~apple~CloudDocs/Desktop/School/PersonalProjects/PortfolioWebsite/src/views/auth/register.tsx#default`);function n(){return s.jsx(a,{})}},61066:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s=(0,t(68570).createProxy)(String.raw`/Users/alvarovaldez-duran/Library/Mobile Documents/com~apple~CloudDocs/Desktop/School/PersonalProjects/PortfolioWebsite/src/utils/route-guard/GuestGuard.tsx#default`)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,263,88,414,22,736,485,976],()=>t(98239));module.exports=s})();