(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{KtMl:function(t,e,n){"use strict";var a=n("17x9"),r=n.n(a),o=r.a.shape({date:r.a.string.isRequired,path:r.a.string.isRequired,tags:r.a.string.isRequired,title:r.a.string.isRequired});r.a.shape({id:r.a.string,frontmatter:o})},UlRk:function(t,e,n){"use strict";n("KKXr");var a=n("wTIg"),r=(n("q1tI"),n("Wbzz")),o=n("qKvR"),i=Object(a.a)("small",{target:"e1czrcx60"})({name:"1lejymi",styles:"text-transform:uppercase;"}),c=Object(a.a)(r.Link,{target:"e1czrcx61"})((function(t){var e=t.theme;return{textDecoration:"none",color:e.textColor,transition:"color 250ms linear",":hover":{textDecoration:"underline",color:e.accentColor}}})),s=function(t){var e=t.tags;return Object(o.c)(i,null,"Topics:"," ",e.split(", ").map((function(t,e,n){return Object(o.c)("span",{key:t},Object(o.c)(c,{to:"/tag/"+t+"/"},t),e<n.length-1?", ":"")})))};s.defaultProps={tags:""},e.a=s},fnKU:function(t,e,n){"use strict";var a=n("17x9"),r=n.n(a);r.a.shape({siteMetadata:r.a.shape({title:r.a.string,description:r.a.string,siteUrl:r.a.string}).isRequired}).isRequired},lRrx:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return T}));n("91GP");var a=n("wTIg"),r=(n("q1tI"),n("TJpk")),o=n.n(r),i=n("ubkq"),c=n.n(i),s=(n("fnKU"),n("L12J")),l=n("UlRk"),u=n("Wbzz"),d=(n("uVLD"),n("qKvR")),m=Object(a.a)("div",{target:"e647e9g0"})((function(t){return{textAlign:t.prev?"left":"right",display:"flex",flexDirection:"column",justifyContent:"flex-start",textTransform:"uppercase"}})),g=Object(a.a)("span",{target:"e647e9g1"})((function(t){return{color:t.theme.textColor,opacity:.35,fontWeight:"bold"}})),f=Object(a.a)(u.Link,{target:"e647e9g2"})((function(t){var e=t.theme;return{color:e.textColor,textDecoration:"none",fontWeight:"bold",transition:"color 250ms linear",":hover":{color:e.accentColor}}})),p=function(t){var e=t.prev,n=t.post,a=n?Object(d.c)(f,{to:n.frontmatter.path},e?"Previous Post":"Next Post"):Object(d.c)(g,null,e?"Previous Post":"Next Post");return Object(d.c)(m,{prev:e},a,Object(d.c)("small",null,n?n.frontmatter.title:null))};p.defaultProps={prev:!1};var y=p,h=function(){return Object(d.c)(d.a,{styles:{'code[class*="language-"],pre[class*="language-"]':{background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#272822",margin:".5em 0",overflow:"auto"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal"},".token.comment, .token.prolog, .token.doctype, .token.cdata":{color:"slategray"},".token.punctuation":{color:"#f8f8f2"},".namespace":{opacity:".7"},".token.property, .token.tag, .token.constant, .token.symbol, .token.deleted":{color:"#f92672"},".token.boolean, .token.number":{color:"#ae81ff"},".token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted":{color:"#a6e22e"},".token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable":{color:"#f8f8f2"},".token.atrule, .token.attr-value, .token.function":{color:"#e6db74"},".token.keyword":{color:"#66d9ef"},".token.regex, .token.important":{color:"#fd971f"},".token.important, .token.bold":{fontWeight:"bold"},".token.italic":{fontStyle:"italic"},".token.entity":{cursor:"help"}}})},b=(n("KtMl"),Object(a.a)("main",{target:"e1s3xc650"})((function(t){return{color:t.theme.textColor}}))),k=Object(a.a)("header",{target:"e1s3xc651"})((function(t){var e,n=t.theme;return Object.assign(Object.assign({},n.centerPadding),{},((e={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"})[n.smallMedia]={flexDirection:"column",flexWrap:"nowrap"},e))})),v=Object(a.a)("h1",{target:"e1s3xc652"})((function(t){var e,n=t.theme;return(e={width:"85%",marginBottom:n.spacing})[n.smallMedia]={width:"100%",textAlign:"center",marginBottom:0},e})),x=Object(a.a)("time",{target:"e1s3xc653"})((function(t){var e;return(e={width:"15%",textAlign:"right"})[t.theme.smallMedia]={width:"100%",textAlign:"center"},e})),M=Object(a.a)("footer",{target:"e1s3xc654"})((function(t){var e=t.theme;return Object.assign({},e.centerPadding)})),O=Object(a.a)("section",{target:"e1s3xc655"})((function(t){var e=t.theme;return{display:"flex",flexDirection:"column",alignItems:"center","> *":{width:"100vw",wordWrap:"break-word",":not(.gatsby-highlight)":Object.assign({},e.centerPadding)},"> .gatsby-highlight > pre":Object.assign(Object.assign({},e.centerPadding),{},{paddingTop:e.spacing,paddingBottom:e.spacing}),">ul,>ol":{marginLeft:4*e.spacingPx+"px",width:"calc(100% - "+4*e.spacingPx+"px)"}}})),j=Object(a.a)("div",{target:"e1s3xc656"})((function(t){var e=t.theme;return Object.assign(Object.assign({},e.centerPadding),{},{display:"flex",justifyContent:"space-between",flexDirection:"row",marginTop:e.spacing})})),T=(e.default=function(t){var e=t.data,n=t.pageContext,a=e.markdownRemark,r=e.site.siteMetadata,i=r.title,u=r.siteUrl,m=n.next,g=n.prev,f=""+u+a.frontmatter.path;return Object(d.c)(s.a,null,Object(d.c)(h,null),Object(d.c)(b,null,Object(d.c)(o.a,null,Object(d.c)("title",null,a.frontmatter.title," ","·"," ",i)),Object(d.c)("article",null,Object(d.c)(k,null,Object(d.c)(v,null,a.frontmatter.title),Object(d.c)(x,{dateTime:c()(a.frontmatter.date,"isoDateTime")},c()(a.frontmatter.date,"mmmm d, yyyy")),Object(d.c)(l.a,{tags:a.frontmatter.tags})),Object(d.c)(O,{dangerouslySetInnerHTML:{__html:a.html}}),Object(d.c)(M,null,Object(d.c)(ReactDisqusComments,{shortname:"fnzv",identifier:a.frontmatter.path,title:a.frontmatter.title,url:f}))),Object(d.c)(j,null,Object(d.c)(y,{prev:!0,post:g}),Object(d.c)(y,{next:!0,post:m}))))},"1536786877")},uVLD:function(t,e,n){"use strict";var a=n("17x9"),r=n.n(a),o=r.a.oneOfType([r.a.bool,r.a.shape({frontmatter:r.a.shape({title:r.a.string.isRequired,path:r.a.string.isRequired})})]);r.a.shape({next:o,prev:o})},ubkq:function(t,e,n){var a;n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F"),n("SRfc"),n("pIFo"),function(r){"use strict";var o,i,c,s=(o=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,c=/[^-+\dA-Z]/g,function(t,e,n,a){if(1!==arguments.length||"string"!==m(t)||/\d/.test(t)||(e=t,t=void 0),(t=t||new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var r=(e=String(s.masks[e]||e||s.masks.default)).slice(0,4);"UTC:"!==r&&"GMT:"!==r||(e=e.slice(4),n=!0,"GMT:"===r&&(a=!0));var g=n?"getUTC":"get",f=t[g+"Date"](),p=t[g+"Day"](),y=t[g+"Month"](),h=t[g+"FullYear"](),b=t[g+"Hours"](),k=t[g+"Minutes"](),v=t[g+"Seconds"](),x=t[g+"Milliseconds"](),M=n?0:t.getTimezoneOffset(),O=u(t),j=d(t),T={d:f,dd:l(f),ddd:s.i18n.dayNames[p],dddd:s.i18n.dayNames[p+7],m:y+1,mm:l(y+1),mmm:s.i18n.monthNames[y],mmmm:s.i18n.monthNames[y+12],yy:String(h).slice(2),yyyy:h,h:b%12||12,hh:l(b%12||12),H:b,HH:l(b),M:k,MM:l(k),s:v,ss:l(v),l:l(x,3),L:l(Math.round(x/10)),t:b<12?"a":"p",tt:b<12?"am":"pm",T:b<12?"A":"P",TT:b<12?"AM":"PM",Z:a?"GMT":n?"UTC":(String(t).match(i)||[""]).pop().replace(c,""),o:(M>0?"-":"+")+l(100*Math.floor(Math.abs(M)/60)+Math.abs(M)%60,4),S:["th","st","nd","rd"][f%10>3?0:(f%100-f%10!=10)*f%10],W:O,N:j};return e.replace(o,(function(t){return t in T?T[t]:t.slice(1,t.length-1)}))});function l(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}function u(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var a=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-a);var r=(e-n)/6048e5;return 1+Math.floor(r)}function d(t){var e=t.getDay();return 0===e&&(e=7),e}function m(t){return null===t?"null":void 0===t?"undefined":"object"!=typeof t?typeof t:Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()}s.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},void 0===(a=function(){return s}.call(e,n,e,t))||(t.exports=a)}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-181f2ad7776ca80e02d0.js.map