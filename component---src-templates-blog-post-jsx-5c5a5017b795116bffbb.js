(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{KtMl:function(e,t,n){"use strict";var r=n("17x9"),a=n.n(r),o=a.a.shape({date:a.a.string.isRequired,path:a.a.string.isRequired,tags:a.a.string.isRequired,title:a.a.string.isRequired});a.a.shape({id:a.a.string,frontmatter:o})},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("pIFo"),n("8+KV"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n("q1tI")),i=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],d=!1;function f(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var m=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return u.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!d){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),d=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){f(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){f(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);m.displayName="DisqusThread",m.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m},UlRk:function(e,t,n){"use strict";n("KKXr");var r=n("wTIg"),a=(n("q1tI"),n("Wbzz")),o=n("qKvR"),i=Object(r.a)("small",{target:"e1czrcx60"})({name:"1lejymi",styles:"text-transform:uppercase;"}),s=Object(r.a)(a.Link,{target:"e1czrcx61"})((function(e){var t=e.theme;return{textDecoration:"none",color:t.textColor,transition:"color 250ms linear",":hover":{textDecoration:"underline",color:t.accentColor}}})),c=function(e){var t=e.tags;return Object(o.c)(i,null,"Topics:"," ",t.split(", ").map((function(e,t,n){return Object(o.c)("span",{key:e},Object(o.c)(s,{to:"/tag/"+e+"/"},e),t<n.length-1?", ":"")})))};c.defaultProps={tags:""},t.a=c},fnKU:function(e,t,n){"use strict";var r=n("17x9"),a=n.n(r);a.a.shape({siteMetadata:a.a.shape({title:a.a.string,description:a.a.string,siteUrl:a.a.string}).isRequired}).isRequired},lRrx:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return D}));n("91GP");var r=n("wTIg"),a=(n("q1tI"),n("TJpk")),o=n.n(a),i=n("ubkq"),s=n.n(i),c=n("RPjP"),l=n.n(c),u=(n("fnKU"),n("L12J")),d=n("UlRk"),f=n("Wbzz"),m=(n("uVLD"),n("qKvR")),p=Object(r.a)("div",{target:"e647e9g0"})((function(e){return{textAlign:e.prev?"left":"right",display:"flex",flexDirection:"column",justifyContent:"flex-start",textTransform:"uppercase"}})),g=Object(r.a)("span",{target:"e647e9g1"})((function(e){return{color:e.theme.textColor,opacity:.35,fontWeight:"bold"}})),y=Object(r.a)(f.Link,{target:"e647e9g2"})((function(e){var t=e.theme;return{color:t.textColor,textDecoration:"none",fontWeight:"bold",transition:"color 250ms linear",":hover":{color:t.accentColor}}})),h=function(e){var t=e.prev,n=e.post,r=n?Object(m.c)(y,{to:n.frontmatter.path},t?"Previous Post":"Next Post"):Object(m.c)(g,null,t?"Previous Post":"Next Post");return Object(m.c)(p,{prev:t},r,Object(m.c)("small",null,n?n.frontmatter.title:null))};h.defaultProps={prev:!1};var b=h,v=function(){return Object(m.c)(m.a,{styles:{'code[class*="language-"],pre[class*="language-"]':{background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#272822",margin:".5em 0",overflow:"auto"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal"},".token.comment, .token.prolog, .token.doctype, .token.cdata":{color:"slategray"},".token.punctuation":{color:"#f8f8f2"},".namespace":{opacity:".7"},".token.property, .token.tag, .token.constant, .token.symbol, .token.deleted":{color:"#f92672"},".token.boolean, .token.number":{color:"#ae81ff"},".token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted":{color:"#a6e22e"},".token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable":{color:"#f8f8f2"},".token.atrule, .token.attr-value, .token.function":{color:"#e6db74"},".token.keyword":{color:"#66d9ef"},".token.regex, .token.important":{color:"#fd971f"},".token.important, .token.bold":{fontWeight:"bold"},".token.italic":{fontStyle:"italic"},".token.entity":{cursor:"help"}}})},O=(n("KtMl"),Object(r.a)("main",{target:"e1s3xc650"})((function(e){return{color:e.theme.textColor}}))),j=Object(r.a)("header",{target:"e1s3xc651"})((function(e){var t,n=e.theme;return Object.assign(Object.assign({},n.centerPadding),{},((t={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"})[n.smallMedia]={flexDirection:"column",flexWrap:"nowrap"},t))})),k=Object(r.a)("h1",{target:"e1s3xc652"})((function(e){var t,n=e.theme;return(t={width:"85%",marginBottom:n.spacing})[n.smallMedia]={width:"100%",textAlign:"center",marginBottom:0},t})),w=Object(r.a)("time",{target:"e1s3xc653"})((function(e){var t;return(t={width:"15%",textAlign:"right"})[e.theme.smallMedia]={width:"100%",textAlign:"center"},t})),x=Object(r.a)("footer",{target:"e1s3xc654"})((function(e){var t=e.theme;return Object.assign({},t.centerPadding)})),M=Object(r.a)("section",{target:"e1s3xc655"})((function(e){var t=e.theme;return{display:"flex",flexDirection:"column",alignItems:"center","> *":{width:"100vw",wordWrap:"break-word",":not(.gatsby-highlight)":Object.assign({},t.centerPadding)},"> .gatsby-highlight > pre":Object.assign(Object.assign({},t.centerPadding),{},{paddingTop:t.spacing,paddingBottom:t.spacing}),">ul,>ol":{marginLeft:4*t.spacingPx+"px",width:"calc(100% - "+4*t.spacingPx+"px)"}}})),T=Object(r.a)("div",{target:"e1s3xc656"})((function(e){var t=e.theme;return Object.assign(Object.assign({},t.centerPadding),{},{display:"flex",justifyContent:"space-between",flexDirection:"row",marginTop:t.spacing})})),D=(t.default=function(e){var t=e.data,n=e.pageContext,r=t.markdownRemark,a=t.site.siteMetadata,i=a.title,c=a.siteUrl,f=n.next,p=n.prev,g=""+c+r.frontmatter.path;return Object(m.c)(u.a,null,Object(m.c)(v,null),Object(m.c)(O,null,Object(m.c)(o.a,null,Object(m.c)("title",null,r.frontmatter.title," ","·"," ",i)),Object(m.c)("article",null,Object(m.c)(j,null,Object(m.c)(k,null,r.frontmatter.title),Object(m.c)(w,{dateTime:s()(r.frontmatter.date,"isoDateTime")},s()(r.frontmatter.date,"mmmm d, yyyy")),Object(m.c)(d.a,{tags:r.frontmatter.tags})),Object(m.c)(M,{dangerouslySetInnerHTML:{__html:r.html}}),Object(m.c)(x,null,Object(m.c)(l.a,{shortname:"fnzv",identifier:r.frontmatter.path,title:r.frontmatter.title,url:g}))),Object(m.c)(T,null,Object(m.c)(b,{prev:!0,post:p}),Object(m.c)(b,{next:!0,post:f}))))},"1536786877")},uVLD:function(e,t,n){"use strict";var r=n("17x9"),a=n.n(r),o=a.a.oneOfType([a.a.bool,a.a.shape({frontmatter:a.a.shape({title:a.a.string.isRequired,path:a.a.string.isRequired})})]);a.a.shape({next:o,prev:o})},ubkq:function(e,t,n){var r;n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F"),n("SRfc"),n("pIFo"),function(a){"use strict";var o,i,s,c=(o=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,n,r){if(1!==arguments.length||"string"!==f(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var a=(t=String(c.masks[t]||t||c.masks.default)).slice(0,4);"UTC:"!==a&&"GMT:"!==a||(t=t.slice(4),n=!0,"GMT:"===a&&(r=!0));var m=n?"getUTC":"get",p=e[m+"Date"](),g=e[m+"Day"](),y=e[m+"Month"](),h=e[m+"FullYear"](),b=e[m+"Hours"](),v=e[m+"Minutes"](),O=e[m+"Seconds"](),j=e[m+"Milliseconds"](),k=n?0:e.getTimezoneOffset(),w=u(e),x=d(e),M={d:p,dd:l(p),ddd:c.i18n.dayNames[g],dddd:c.i18n.dayNames[g+7],m:y+1,mm:l(y+1),mmm:c.i18n.monthNames[y],mmmm:c.i18n.monthNames[y+12],yy:String(h).slice(2),yyyy:h,h:b%12||12,hh:l(b%12||12),H:b,HH:l(b),M:v,MM:l(v),s:O,ss:l(O),l:l(j,3),L:l(Math.round(j/10)),t:b<12?"a":"p",tt:b<12?"am":"pm",T:b<12?"A":"P",TT:b<12?"AM":"PM",Z:r?"GMT":n?"UTC":(String(e).match(i)||[""]).pop().replace(s,""),o:(k>0?"-":"+")+l(100*Math.floor(Math.abs(k)/60)+Math.abs(k)%60,4),S:["th","st","nd","rd"][p%10>3?0:(p%100-p%10!=10)*p%10],W:w,N:x};return t.replace(o,(function(e){return e in M?M[e]:e.slice(1,e.length-1)}))});function l(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function u(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)}function d(e){var t=e.getDay();return 0===t&&(t=7),t}function f(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},void 0===(r=function(){return c}.call(t,n,t,e))||(e.exports=r)}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-5c5a5017b795116bffbb.js.map