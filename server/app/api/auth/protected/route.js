(()=>{var e={};e.id=699,e.ids=[699],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},78893:e=>{"use strict";e.exports=require("buffer")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},86624:e=>{"use strict";e.exports=require("querystring")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},22134:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>f,requestAsyncStorage:()=>h,routeModule:()=>c,serverHooks:()=>b,staticGenerationAsyncStorage:()=>p});var i={};r.r(i),r.d(i,{GET:()=>d});var o=r(49303),s=r(88716),a=r(60670),n=r(75571),l=r(98277),u=r(53773);async function d(){return await (0,n.getServerSession)(u.L)?l.NextResponse.json({protected:!0}):l.NextResponse.json({protected:!1})}let c=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/auth/protected/route",pathname:"/api/auth/protected",filename:"route",bundlePath:"app/api/auth/protected/route"},resolvedPagePath:"/Users/alvarovaldez-duran/Desktop/School/PersonalProjects/PortfolioWebsite/src/app/api/auth/protected/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:h,staticGenerationAsyncStorage:p,serverHooks:b}=c,m="/api/auth/protected/route";function f(){return(0,a.patchFetch)({serverHooks:b,staticGenerationAsyncStorage:p})}},18346:(e,t,r)=>{var i;(()=>{var o={226:function(o,s){!function(a,n){"use strict";var l="function",u="undefined",d="object",c="string",h="major",p="model",b="name",m="type",f="vendor",w="version",g="architecture",v="console",x="mobile",y="tablet",P="smarttv",k="wearable",j="embedded",_="Amazon",S="Apple",O="ASUS",L="BlackBerry",R="Browser",q="Chrome",T="Firefox",E="Google",N="Huawei",U="Microsoft",A="Motorola",C="Opera",I="Samsung",M="Sharp",z="Sony",H="Xiaomi",B="Zebra",D="Facebook",W="Chromium OS",$="Mac OS",G=function(e,t){var r={};for(var i in e)t[i]&&t[i].length%2==0?r[i]=t[i].concat(e[i]):r[i]=e[i];return r},F=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},V=function(e,t){return typeof e===c&&-1!==Z(t).indexOf(Z(e))},Z=function(e){return e.toLowerCase()},X=function(e,t){if(typeof e===c)return e=e.replace(/^\s\s*/,""),typeof t===u?e:e.substring(0,350)},J=function(e,t){for(var r,i,o,s,a,u,c=0;c<t.length&&!a;){var h=t[c],p=t[c+1];for(r=i=0;r<h.length&&!a&&h[r];)if(a=h[r++].exec(e))for(o=0;o<p.length;o++)u=a[++i],typeof(s=p[o])===d&&s.length>0?2===s.length?typeof s[1]==l?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3===s.length?typeof s[1]!==l||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):void 0:this[s[0]]=u?s[1].call(this,u,s[2]):void 0:4===s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):void 0):this[s]=u||n;c+=2}},K=function(e,t){for(var r in t)if(typeof t[r]===d&&t[r].length>0){for(var i=0;i<t[r].length;i++)if(V(t[r][i],e))return"?"===r?n:r}else if(V(t[r],e))return"?"===r?n:r;return e},Q={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,w],[/opios[\/ ]+([\w\.]+)/i],[w,[b,C+" Mini"]],[/\bopr\/([\w\.]+)/i],[w,[b,C]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[b,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[b,"UC"+R]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[w,[b,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[w,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[b,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[w,[b,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure "+R],w],[/\bfocus\/([\w\.]+)/i],[w,[b,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[w,[b,C+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[b,C+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[b,"MIUI "+R]],[/fxios\/([-\w\.]+)/i],[w,[b,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 "+R]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 "+R],w],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[b,w],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,D],w],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[b,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[b,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[w,[b,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[b,q+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,q+" WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[b,"Android "+R]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,w],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[w,[b,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[w,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[w,K,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[b,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[b,w],[/(cobalt)\/([\w\.]+)/i],[b,[w,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,Z]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,"",Z]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,Z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[p,[f,I],[m,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[p,[f,I],[m,x]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[p,[f,S],[m,x]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[p,[f,S],[m,y]],[/(macintosh);/i],[p,[f,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[p,[f,M],[m,x]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[p,[f,N],[m,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[p,[f,N],[m,x]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[p,/_/g," "],[f,H],[m,x]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[p,/_/g," "],[f,H],[m,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[p,[f,"OPPO"],[m,x]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[p,[f,"Vivo"],[m,x]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[p,[f,"Realme"],[m,x]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[p,[f,A],[m,x]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[p,[f,A],[m,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[p,[f,"LG"],[m,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[p,[f,"LG"],[m,x]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[p,[f,"Lenovo"],[m,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[p,/_/g," "],[f,"Nokia"],[m,x]],[/(pixel c)\b/i],[p,[f,E],[m,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[p,[f,E],[m,x]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[p,[f,z],[m,x]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[p,"Xperia Tablet"],[f,z],[m,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[p,[f,"OnePlus"],[m,x]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[p,[f,_],[m,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[p,/(.+)/g,"Fire Phone $1"],[f,_],[m,x]],[/(playbook);[-\w\),; ]+(rim)/i],[p,f,[m,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[p,[f,L],[m,x]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[p,[f,O],[m,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[p,[f,O],[m,x]],[/(nexus 9)/i],[p,[f,"HTC"],[m,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[f,[p,/_/g," "],[m,x]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[p,[f,"Acer"],[m,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[p,[f,"Meizu"],[m,x]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,p,[m,x]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,p,[m,y]],[/(surface duo)/i],[p,[f,U],[m,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[p,[f,"Fairphone"],[m,x]],[/(u304aa)/i],[p,[f,"AT&T"],[m,x]],[/\bsie-(\w*)/i],[p,[f,"Siemens"],[m,x]],[/\b(rct\w+) b/i],[p,[f,"RCA"],[m,y]],[/\b(venue[\d ]{2,7}) b/i],[p,[f,"Dell"],[m,y]],[/\b(q(?:mv|ta)\w+) b/i],[p,[f,"Verizon"],[m,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[p,[f,"Barnes & Noble"],[m,y]],[/\b(tm\d{3}\w+) b/i],[p,[f,"NuVision"],[m,y]],[/\b(k88) b/i],[p,[f,"ZTE"],[m,y]],[/\b(nx\d{3}j) b/i],[p,[f,"ZTE"],[m,x]],[/\b(gen\d{3}) b.+49h/i],[p,[f,"Swiss"],[m,x]],[/\b(zur\d{3}) b/i],[p,[f,"Swiss"],[m,y]],[/\b((zeki)?tb.*\b) b/i],[p,[f,"Zeki"],[m,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],p,[m,y]],[/\b(ns-?\w{0,9}) b/i],[p,[f,"Insignia"],[m,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[p,[f,"NextBook"],[m,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],p,[m,x]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],p,[m,x]],[/\b(ph-1) /i],[p,[f,"Essential"],[m,x]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[p,[f,"Envizen"],[m,y]],[/\b(trio[-\w\. ]+) b/i],[p,[f,"MachSpeed"],[m,y]],[/\btu_(1491) b/i],[p,[f,"Rotor"],[m,y]],[/(shield[\w ]+) b/i],[p,[f,"Nvidia"],[m,y]],[/(sprint) (\w+)/i],[f,p,[m,x]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[f,U],[m,x]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[p,[f,B],[m,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[p,[f,B],[m,x]],[/smart-tv.+(samsung)/i],[f,[m,P]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[f,I],[m,P]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,"LG"],[m,P]],[/(apple) ?tv/i],[f,[p,S+" TV"],[m,P]],[/crkey/i],[[p,q+"cast"],[f,E],[m,P]],[/droid.+aft(\w)( bui|\))/i],[p,[f,_],[m,P]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[p,[f,M],[m,P]],[/(bravia[\w ]+)( bui|\))/i],[p,[f,z],[m,P]],[/(mitv-\w{5}) bui/i],[p,[f,H],[m,P]],[/Hbbtv.*(technisat) (.*);/i],[f,p,[m,P]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[f,X],[p,X],[m,P]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[m,P]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,p,[m,v]],[/droid.+; (shield) bui/i],[p,[f,"Nvidia"],[m,v]],[/(playstation [345portablevi]+)/i],[p,[f,z],[m,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[p,[f,U],[m,v]],[/((pebble))app/i],[f,p,[m,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[p,[f,S],[m,k]],[/droid.+; (glass) \d/i],[p,[f,E],[m,k]],[/droid.+; (wt63?0{2,3})\)/i],[p,[f,B],[m,k]],[/(quest( 2| pro)?)/i],[p,[f,D],[m,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[m,j]],[/(aeobc)\b/i],[p,[f,_],[m,j]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[p,[m,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[p,[m,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[m,y]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[m,x]],[/(android[-\w\. ]{0,9});.+buil/i],[p,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[b,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,w],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[b,[w,K,Q]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,"Windows"],[w,K,Q]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,$],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[w,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,w],[/\(bb(10);/i],[w,[b,L]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[b,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[b,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[w,[b,"watchOS"]],[/crkey\/([\d\.]+)/i],[w,[b,q+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[b,W],w],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,w],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[b,w]]},ee=function(e,t){if(typeof e===d&&(t=e,e=n),!(this instanceof ee))return new ee(e,t).getResult();var r=typeof a!==u&&a.navigator?a.navigator:n,i=e||(r&&r.userAgent?r.userAgent:""),o=r&&r.userAgentData?r.userAgentData:n,s=t?G(Y,t):Y,v=r&&r.userAgent==i;return this.getBrowser=function(){var e,t={};return t[b]=n,t[w]=n,J.call(t,i,s.browser),t[h]=typeof(e=t[w])===c?e.replace(/[^\d\.]/g,"").split(".")[0]:n,v&&r&&r.brave&&typeof r.brave.isBrave==l&&(t[b]="Brave"),t},this.getCPU=function(){var e={};return e[g]=n,J.call(e,i,s.cpu),e},this.getDevice=function(){var e={};return e[f]=n,e[p]=n,e[m]=n,J.call(e,i,s.device),v&&!e[m]&&o&&o.mobile&&(e[m]=x),v&&"Macintosh"==e[p]&&r&&typeof r.standalone!==u&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[p]="iPad",e[m]=y),e},this.getEngine=function(){var e={};return e[b]=n,e[w]=n,J.call(e,i,s.engine),e},this.getOS=function(){var e={};return e[b]=n,e[w]=n,J.call(e,i,s.os),v&&!e[b]&&o&&"Unknown"!=o.platform&&(e[b]=o.platform.replace(/chrome os/i,W).replace(/macos/i,$)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===c&&e.length>350?X(e,350):e,this},this.setUA(i),this};ee.VERSION="1.0.35",ee.BROWSER=F([b,w,h]),ee.CPU=F([g]),ee.DEVICE=F([p,f,m,v,x,P,y,k,j]),ee.ENGINE=ee.OS=F([b,w]),typeof s!==u?(o.exports&&(s=o.exports=ee),s.UAParser=ee):r.amdO?void 0!==(i=(function(){return ee}).call(t,r,t,e))&&(e.exports=i):typeof a!==u&&(a.UAParser=ee);var et=typeof a!==u&&(a.jQuery||a.Zepto);if(et&&!et.ua){var er=new ee;et.ua=er.getResult(),et.ua.get=function(){return er.getUA()},et.ua.set=function(e){er.setUA(e);var t=er.getResult();for(var r in t)et.ua[r]=t[r]}}}("object"==typeof window?window:this)}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}},i=!0;try{o[e].call(r.exports,r,r.exports,a),i=!1}finally{i&&delete s[e]}return r.exports}a.ab=__dirname+"/";var n=a(226);e.exports=n})()},44:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PageSignatureError:function(){return r},RemovedPageError:function(){return i},RemovedUAError:function(){return o}});class r extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class i extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class o extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}},98277:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ImageResponse:function(){return i.ImageResponse},NextRequest:function(){return o.NextRequest},NextResponse:function(){return s.NextResponse},URLPattern:function(){return n.URLPattern},userAgent:function(){return a.userAgent},userAgentFromString:function(){return a.userAgentFromString}});let i=r(10006),o=r(39745),s=r(59211),a=r(78471),n=r(72433)},79519:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NextURL",{enumerable:!0,get:function(){return d}});let i=r(23777),o=r(93817),s=r(61675),a=r(6111),n=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;function l(e,t){return new URL(String(e).replace(n,"localhost"),t&&String(t).replace(n,"localhost"))}let u=Symbol("NextURLInternal");class d{constructor(e,t,r){let i,o;"object"==typeof t&&"pathname"in t||"string"==typeof t?(i=t,o=r||{}):o=r||t||{},this[u]={url:l(e,i??o.base),options:o,basePath:""},this.analyze()}analyze(){var e,t,r,o,n;let l=(0,a.getNextPathnameInfo)(this[u].url.pathname,{nextConfig:this[u].options.nextConfig,parseData:!0,i18nProvider:this[u].options.i18nProvider}),d=(0,s.getHostname)(this[u].url,this[u].options.headers);this[u].domainLocale=this[u].options.i18nProvider?this[u].options.i18nProvider.detectDomainLocale(d):(0,i.detectDomainLocale)(null==(t=this[u].options.nextConfig)?void 0:null==(e=t.i18n)?void 0:e.domains,d);let c=(null==(r=this[u].domainLocale)?void 0:r.defaultLocale)||(null==(n=this[u].options.nextConfig)?void 0:null==(o=n.i18n)?void 0:o.defaultLocale);this[u].url.pathname=l.pathname,this[u].defaultLocale=c,this[u].basePath=l.basePath??"",this[u].buildId=l.buildId,this[u].locale=l.locale??c,this[u].trailingSlash=l.trailingSlash}formatPathname(){return(0,o.formatNextPathnameInfo)({basePath:this[u].basePath,buildId:this[u].buildId,defaultLocale:this[u].options.forceLocale?void 0:this[u].defaultLocale,locale:this[u].locale,pathname:this[u].url.pathname,trailingSlash:this[u].trailingSlash})}formatSearch(){return this[u].url.search}get buildId(){return this[u].buildId}set buildId(e){this[u].buildId=e}get locale(){return this[u].locale??""}set locale(e){var t,r;if(!this[u].locale||!(null==(r=this[u].options.nextConfig)?void 0:null==(t=r.i18n)?void 0:t.locales.includes(e)))throw TypeError(`The NextURL configuration includes no locale "${e}"`);this[u].locale=e}get defaultLocale(){return this[u].defaultLocale}get domainLocale(){return this[u].domainLocale}get searchParams(){return this[u].url.searchParams}get host(){return this[u].url.host}set host(e){this[u].url.host=e}get hostname(){return this[u].url.hostname}set hostname(e){this[u].url.hostname=e}get port(){return this[u].url.port}set port(e){this[u].url.port=e}get protocol(){return this[u].url.protocol}set protocol(e){this[u].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[u].url=l(e),this.analyze()}get origin(){return this[u].url.origin}get pathname(){return this[u].url.pathname}set pathname(e){this[u].url.pathname=e}get hash(){return this[u].url.hash}set hash(e){this[u].url.hash=e}get search(){return this[u].url.search}set search(e){this[u].url.search=e}get password(){return this[u].url.password}set password(e){this[u].url.password=e}get username(){return this[u].url.username}set username(e){this[u].url.username=e}get basePath(){return this[u].basePath}set basePath(e){this[u].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new d(String(this),this[u].options)}}},10006:(e,t)=>{"use strict";function r(){throw Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead')}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageResponse",{enumerable:!0,get:function(){return r}})},39745:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERNALS:function(){return n},NextRequest:function(){return l}});let i=r(79519),o=r(17636),s=r(44),a=r(92044),n=Symbol("internal request");class l extends Request{constructor(e,t={}){let r="string"!=typeof e&&"url"in e?e.url:String(e);(0,o.validateURL)(r),e instanceof Request?super(e,t):super(r,t);let s=new i.NextURL(r,{headers:(0,o.toNodeOutgoingHttpHeaders)(this.headers),nextConfig:t.nextConfig});this[n]={cookies:new a.RequestCookies(this.headers),geo:t.geo||{},ip:t.ip,nextUrl:s,url:s.toString()}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[n].cookies}get geo(){return this[n].geo}get ip(){return this[n].ip}get nextUrl(){return this[n].nextUrl}get page(){throw new s.RemovedPageError}get ua(){throw new s.RemovedUAError}get url(){return this[n].url}}},59211:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NextResponse",{enumerable:!0,get:function(){return c}});let i=r(92044),o=r(79519),s=r(17636),a=r(38238),n=r(92044),l=Symbol("internal response"),u=new Set([301,302,303,307,308]);function d(e,t){var r;if(null==e?void 0:null==(r=e.request)?void 0:r.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let r=[];for(let[i,o]of e.request.headers)t.set("x-middleware-request-"+i,o),r.push(i);t.set("x-middleware-override-headers",r.join(","))}}class c extends Response{constructor(e,t={}){super(e,t);let r=this.headers,u=new Proxy(new n.ResponseCookies(r),{get(e,o,s){switch(o){case"delete":case"set":return(...s)=>{let a=Reflect.apply(e[o],e,s),l=new Headers(r);return a instanceof n.ResponseCookies&&r.set("x-middleware-set-cookie",a.getAll().map(e=>(0,i.stringifyCookie)(e)).join(",")),d(t,l),a};default:return a.ReflectAdapter.get(e,o,s)}}});this[l]={cookies:u,url:t.url?new o.NextURL(t.url,{headers:(0,s.toNodeOutgoingHttpHeaders)(r),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[l].cookies}static json(e,t){let r=Response.json(e,t);return new c(r.body,r)}static redirect(e,t){let r="number"==typeof t?t:(null==t?void 0:t.status)??307;if(!u.has(r))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let i="object"==typeof t?t:{},o=new Headers(null==i?void 0:i.headers);return o.set("Location",(0,s.validateURL)(e)),new c(null,{...i,headers:o,status:r})}static rewrite(e,t){let r=new Headers(null==t?void 0:t.headers);return r.set("x-middleware-rewrite",(0,s.validateURL)(e)),d(t,r),new c(null,{...t,headers:r})}static next(e){let t=new Headers(null==e?void 0:e.headers);return t.set("x-middleware-next","1"),d(e,t),new c(null,{...e,headers:t})}}},72433:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"URLPattern",{enumerable:!0,get:function(){return r}});let r="undefined"==typeof URLPattern?void 0:URLPattern},78471:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isBot:function(){return o},userAgent:function(){return a},userAgentFromString:function(){return s}});let i=function(e){return e&&e.__esModule?e:{default:e}}(r(18346));function o(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}function s(e){return{...(0,i.default)(e),isBot:void 0!==e&&o(e)}}function a({headers:e}){return s(e.get("user-agent")||void 0)}},17636:(e,t)=>{"use strict";function r(e){let t=new Headers;for(let[r,i]of Object.entries(e))for(let e of Array.isArray(i)?i:[i])void 0!==e&&("number"==typeof e&&(e=e.toString()),t.append(r,e));return t}function i(e){var t,r,i,o,s,a=[],n=0;function l(){for(;n<e.length&&/\s/.test(e.charAt(n));)n+=1;return n<e.length}for(;n<e.length;){for(t=n,s=!1;l();)if(","===(r=e.charAt(n))){for(i=n,n+=1,l(),o=n;n<e.length&&"="!==(r=e.charAt(n))&&";"!==r&&","!==r;)n+=1;n<e.length&&"="===e.charAt(n)?(s=!0,n=o,a.push(e.substring(t,i)),t=n):n=i+1}else n+=1;(!s||n>=e.length)&&a.push(e.substring(t,e.length))}return a}function o(e){let t={},r=[];if(e)for(let[o,s]of e.entries())"set-cookie"===o.toLowerCase()?(r.push(...i(s)),t[o]=1===r.length?r[0]:r):t[o]=s;return t}function s(e){try{return String(new URL(String(e)))}catch(t){throw Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t})}}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fromNodeOutgoingHttpHeaders:function(){return r},splitCookiesString:function(){return i},toNodeOutgoingHttpHeaders:function(){return o},validateURL:function(){return s}})},61675:(e,t)=>{"use strict";function r(e,t){let r;if((null==t?void 0:t.host)&&!Array.isArray(t.host))r=t.host.toString().split(":",1)[0];else{if(!e.hostname)return;r=e.hostname}return r.toLowerCase()}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getHostname",{enumerable:!0,get:function(){return r}})},23777:(e,t)=>{"use strict";function r(e,t,r){if(e)for(let s of(r&&(r=r.toLowerCase()),e)){var i,o;if(t===(null==(i=s.domain)?void 0:i.split(":",1)[0].toLowerCase())||r===s.defaultLocale.toLowerCase()||(null==(o=s.locales)?void 0:o.some(e=>e.toLowerCase()===r)))return s}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"detectDomainLocale",{enumerable:!0,get:function(){return r}})},95014:(e,t)=>{"use strict";function r(e,t){let r;let i=e.split("/");return(t||[]).some(t=>!!i[1]&&i[1].toLowerCase()===t.toLowerCase()&&(r=t,i.splice(1,1),e=i.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},80225:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return s}});let i=r(91041),o=r(84329);function s(e,t,r,s){if(!t||t===r)return e;let a=e.toLowerCase();return!s&&((0,o.pathHasPrefix)(a,"/api")||(0,o.pathHasPrefix)(a,"/"+t.toLowerCase()))?e:(0,i.addPathPrefix)(e,"/"+t)}},91041:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return o}});let i=r(81693);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:s}=(0,i.parsePath)(e);return""+t+r+o+s}},98166:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathSuffix",{enumerable:!0,get:function(){return o}});let i=r(81693);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:s}=(0,i.parsePath)(e);return""+r+t+o+s}},93817:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"formatNextPathnameInfo",{enumerable:!0,get:function(){return n}});let i=r(37847),o=r(91041),s=r(98166),a=r(80225);function n(e){let t=(0,a.addLocale)(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=(0,i.removeTrailingSlash)(t)),e.buildId&&(t=(0,s.addPathSuffix)((0,o.addPathPrefix)(t,"/_next/data/"+e.buildId),"/"===e.pathname?"index.json":".json")),t=(0,o.addPathPrefix)(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:(0,s.addPathSuffix)(t,"/"):(0,i.removeTrailingSlash)(t)}},6111:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getNextPathnameInfo",{enumerable:!0,get:function(){return a}});let i=r(95014),o=r(29529),s=r(84329);function a(e,t){var r,a;let{basePath:n,i18n:l,trailingSlash:u}=null!=(r=t.nextConfig)?r:{},d={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):u};n&&(0,s.pathHasPrefix)(d.pathname,n)&&(d.pathname=(0,o.removePathPrefix)(d.pathname,n),d.basePath=n);let c=d.pathname;if(d.pathname.startsWith("/_next/data/")&&d.pathname.endsWith(".json")){let e=d.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),r=e[0];d.buildId=r,c="index"!==e[1]?"/"+e.slice(1).join("/"):"/",!0===t.parseData&&(d.pathname=c)}if(l){let e=t.i18nProvider?t.i18nProvider.analyze(d.pathname):(0,i.normalizeLocalePath)(d.pathname,l.locales);d.locale=e.detectedLocale,d.pathname=null!=(a=e.pathname)?a:d.pathname,!e.detectedLocale&&d.buildId&&(e=t.i18nProvider?t.i18nProvider.analyze(c):(0,i.normalizeLocalePath)(c,l.locales)).detectedLocale&&(d.locale=e.detectedLocale)}return d}},81693:(e,t)=>{"use strict";function r(e){let t=e.indexOf("#"),r=e.indexOf("?"),i=r>-1&&(t<0||r<t);return i||t>-1?{pathname:e.substring(0,i?r:t),query:i?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},84329:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let i=r(81693);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,i.parsePath)(e);return r===t||r.startsWith(t+"/")}},29529:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removePathPrefix",{enumerable:!0,get:function(){return o}});let i=r(84329);function o(e,t){if(!(0,i.pathHasPrefix)(e,t))return e;let r=e.slice(t.length);return r.startsWith("/")?r:"/"+r}},37847:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},53773:(e,t,r)=>{"use strict";r.d(t,{L:()=>n});var i=r(53797),o=r(29712),s=r(26465);let a=o.Z.create({baseURL:"http://localhost:4000/"});a.interceptors.request.use(async e=>{let t=await (0,s.getSession)();return t?.token.accessToken&&(e.headers.Authorization=`Bearer ${t?.token.accessToken}`),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>"ECONNREFUSED"===e.code?Promise.reject({message:"Connection refused. The credential server may be down."}):e.response.status>=500?Promise.reject({message:"Server Error. Contact support"}):(401!==e.response.status||window.location.href.includes("/login")||(window.location.pathname="/login"),Promise.reject(e.response&&e.response.data||"Wrong Services")));let n={providers:[(0,i.Z)({id:"login",name:"login",credentials:{email:{name:"email",label:"Email",type:"email",placeholder:"Enter Email"},password:{name:"password",label:"Password",type:"password",placeholder:"Enter Password"}},async authorize(e){try{let t=await a.post("/login",{password:e?.password,email:e?.email});if(t)return t.data.user.accessToken=t.data.accessToken,t.data.user}catch(e){throw console.dir(e),Error(e?.message||e?.response?.data?.message||"Something went wrong!")}}}),(0,i.Z)({id:"register",name:"register",credentials:{firstname:{name:"firstname",label:"Firstname",type:"text",placeholder:"Enter Firstname"},lastname:{name:"lastname",label:"Lastname",type:"text",placeholder:"Enter Lastname"},email:{name:"email",label:"Email",type:"email",placeholder:"Enter Email"},company:{name:"company",label:"Company",type:"text",placeholder:"Enter Company"},password:{name:"password",label:"Password",type:"password",placeholder:"Enter Password"}},async authorize(e){try{let t=await a.post("/register",{firstname:e?.firstname,lastname:e?.lastname,company:e?.company,password:e?.password,email:e?.email,role:1,username:e?.email,phone:"728-238-2380"});if(console.dir(t),t)return t.data.user.accessToken=t.data.accessToken,t.data.user}catch(e){throw Error(e?.message||e?.response?.data?.message||"Something went wrong!")}}})],callbacks:{jwt:async({token:e,user:t,account:r})=>(t&&(e.accessToken=t.accessToken,e.id=t.id,e.provider=r?.provider),e),session:({session:e,token:t})=>(t&&(e.id=t.id,e.provider=t.provider,e.token=t),e)},session:{strategy:"jwt",maxAge:Number("86400")},jwt:{secret:"ikRgjkhi15HJiU78-OLKfjngiu="},pages:{signIn:"/login",newUser:"/register"}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,365],()=>r(22134));module.exports=i})();