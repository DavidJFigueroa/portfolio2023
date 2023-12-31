(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function ml(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Sc(s,t,e){return t&&ml(s.prototype,t),e&&ml(s,e),s}function Wi(){return(Wi=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(s[n]=e[n])}return s}).apply(this,arguments)}function zo(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}function Du(s){return(Du=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(s)}function Ec(s,t){return(Ec=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(s,t)}function Iu(s,t,e){return(Iu=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(n,i,r){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return r&&Ec(a,r.prototype),a}).apply(null,arguments)}function Uu(s){var t=typeof Map=="function"?new Map:void 0;return(Uu=function(e){if(e===null||Function.toString.call(e).indexOf("[native code]")===-1)return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Iu(e,arguments,Du(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Ec(n,e)})(s)}function Ur(s,t){try{var e=s()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var di,Ff="2.9.7",Of=function(){};(function(s){s[s.off=0]="off",s[s.error=1]="error",s[s.warning=2]="warning",s[s.info=3]="info",s[s.debug=4]="debug"})(di||(di={}));var gl=di.off,qi=function(){function s(e){this.t=e}s.getLevel=function(){return gl},s.setLevel=function(e){return gl=di[e]};var t=s.prototype;return t.error=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.i(console.error,di.error,n)},t.warn=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.i(console.warn,di.warning,n)},t.info=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.i(console.info,di.info,n)},t.debug=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.i(console.log,di.debug,n)},t.i=function(e,n,i){n<=s.getLevel()&&e.apply(console,["["+this.t+"] "].concat(i))},s}(),zi=Tc,zf=Fu,Bf=wc,kf=Ou,Gf=zu,Nu="/",Vf=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function wc(s,t){for(var e,n=[],i=0,r=0,o="",a=t&&t.delimiter||Nu,c=t&&t.whitelist||void 0,l=!1;(e=Vf.exec(s))!==null;){var h=e[0],d=e[1],u=e.index;if(o+=s.slice(r,u),r=u+h.length,d)o+=d[1],l=!0;else{var f="",_=e[2],g=e[3],m=e[4],p=e[5];if(!l&&o.length){var v=o.length-1,x=o[v];(!c||c.indexOf(x)>-1)&&(f=x,o=o.slice(0,v))}o&&(n.push(o),o="",l=!1);var M=g||m,y=f||a;n.push({name:_||i++,prefix:f,delimiter:y,optional:p==="?"||p==="*",repeat:p==="+"||p==="*",pattern:M?Hf(M):"[^"+Kn(y===a?y:y+a)+"]+?"})}}return(o||r<s.length)&&n.push(o+s.substr(r)),n}function Fu(s,t){return function(e,n){var i=s.exec(e);if(!i)return!1;for(var r=i[0],o=i.index,a={},c=n&&n.decode||decodeURIComponent,l=1;l<i.length;l++)if(i[l]!==void 0){var h=t[l-1];a[h.name]=h.repeat?i[l].split(h.delimiter).map(function(d){return c(d,h)}):c(i[l],h)}return{path:r,index:o,params:a}}}function Ou(s,t){for(var e=new Array(s.length),n=0;n<s.length;n++)typeof s[n]=="object"&&(e[n]=new RegExp("^(?:"+s[n].pattern+")$",bc(t)));return function(i,r){for(var o="",a=r&&r.encode||encodeURIComponent,c=!r||r.validate!==!1,l=0;l<s.length;l++){var h=s[l];if(typeof h!="string"){var d,u=i?i[h.name]:void 0;if(Array.isArray(u)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but got array');if(u.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var f=0;f<u.length;f++){if(d=a(u[f],h),c&&!e[l].test(d))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'"');o+=(f===0?h.prefix:h.delimiter)+d}}else if(typeof u!="string"&&typeof u!="number"&&typeof u!="boolean"){if(!h.optional)throw new TypeError('Expected "'+h.name+'" to be '+(h.repeat?"an array":"a string"))}else{if(d=a(String(u),h),c&&!e[l].test(d))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but got "'+d+'"');o+=h.prefix+d}}else o+=h}return o}}function Kn(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Hf(s){return s.replace(/([=!:$/()])/g,"\\$1")}function bc(s){return s&&s.sensitive?"":"i"}function zu(s,t,e){for(var n=(e=e||{}).strict,i=e.start!==!1,r=e.end!==!1,o=e.delimiter||Nu,a=[].concat(e.endsWith||[]).map(Kn).concat("$").join("|"),c=i?"^":"",l=0;l<s.length;l++){var h=s[l];if(typeof h=="string")c+=Kn(h);else{var d=h.repeat?"(?:"+h.pattern+")(?:"+Kn(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),c+=h.optional?h.prefix?"(?:"+Kn(h.prefix)+"("+d+"))?":"("+d+")?":Kn(h.prefix)+"("+d+")"}}if(r)n||(c+="(?:"+Kn(o)+")?"),c+=a==="$"?"$":"(?="+a+")";else{var u=s[s.length-1],f=typeof u=="string"?u[u.length-1]===o:u===void 0;n||(c+="(?:"+Kn(o)+"(?="+a+"))?"),f||(c+="(?="+Kn(o)+"|"+a+")")}return new RegExp(c,bc(e))}function Tc(s,t,e){return s instanceof RegExp?function(n,i){if(!i)return n;var r=n.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)i.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return n}(s,t):Array.isArray(s)?function(n,i,r){for(var o=[],a=0;a<n.length;a++)o.push(Tc(n[a],i,r).source);return new RegExp("(?:"+o.join("|")+")",bc(r))}(s,t,e):function(n,i,r){return zu(wc(n,r),i,r)}(s,t,e)}zi.match=function(s,t){var e=[];return Fu(Tc(s,e,t),e)},zi.regexpToFunction=zf,zi.parse=Bf,zi.compile=function(s,t){return Ou(wc(s,t),t)},zi.tokensToFunction=kf,zi.tokensToRegExp=Gf;var On={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},Xi=new(function(){function s(){this.o=On,this.u=new DOMParser}var t=s.prototype;return t.toString=function(e){return e.outerHTML},t.toDocument=function(e){return this.u.parseFromString(e,"text/html")},t.toElement=function(e){var n=document.createElement("div");return n.innerHTML=e,n},t.getHtml=function(e){return e===void 0&&(e=document),this.toString(e.documentElement)},t.getWrapper=function(e){return e===void 0&&(e=document),e.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},t.getContainer=function(e){return e===void 0&&(e=document),e.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},t.removeContainer=function(e){document.body.contains(e)&&e.parentNode.removeChild(e)},t.addContainer=function(e,n){var i=this.getContainer();i?this.s(e,i):n.appendChild(e)},t.getNamespace=function(e){e===void 0&&(e=document);var n=e.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},t.getHref=function(e){if(e.tagName&&e.tagName.toLowerCase()==="a"){if(typeof e.href=="string")return e.href;var n=e.getAttribute("href")||e.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},t.resolveUrl=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var r=n.length;if(r===0)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],r===1)return o.href;var a=document.getElementsByTagName("head")[0];a.insertBefore(o,a.firstChild);for(var c,l=document.createElement("a"),h=1;h<r;h++)l.href=arguments[h],o.href=c=l.href;return a.removeChild(o),c},t.s=function(e,n){n.parentNode.insertBefore(e,n.nextSibling)},s}()),Bu=new(function(){function s(){this.h=[],this.v=-1}var t=s.prototype;return t.init=function(e,n){this.l="barba";var i={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:e};this.h.push(i),this.v=0;var r={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(r,"",e)},t.change=function(e,n,i){if(i&&i.state){var r=i.state,o=r.index;n=this.m(this.v-o),this.replace(r.states),this.v=o}else this.add(e,n);return n},t.add=function(e,n){var i=this.size,r=this.p(n),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:e};this.h.push(o),this.v=i;var a={from:this.l,index:i,states:[].concat(this.h)};switch(r){case"push":window.history&&window.history.pushState(a,"",e);break;case"replace":window.history&&window.history.replaceState(a,"",e)}},t.update=function(e,n){var i=n||this.v,r=Wi({},this.get(i),{},e);this.set(i,r)},t.remove=function(e){e?this.h.splice(e,1):this.h.pop(),this.v--},t.clear=function(){this.h=[],this.v=-1},t.replace=function(e){this.h=e},t.get=function(e){return this.h[e]},t.set=function(e,n){return this.h[e]=n},t.p=function(e){var n="push",i=e,r=On.prefix+"-"+On.history;return i.hasAttribute&&i.hasAttribute(r)&&(n=i.getAttribute(r)),n},t.m=function(e){return Math.abs(e)>1?e>0?"forward":"back":e===0?"popstate":e>0?"back":"forward"},Sc(s,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),s}()),Ao=function(s,t){try{var e=function(){if(!t.next.html)return Promise.resolve(s).then(function(n){var i=t.next;if(n){var r=Xi.toElement(n);i.namespace=Xi.getNamespace(r),i.container=Xi.getContainer(r),i.html=n,Bu.update({ns:i.namespace});var o=Xi.toDocument(n);document.title=o.title}})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},ku=zi,Wf={__proto__:null,update:Ao,nextTick:function(){return new Promise(function(s){window.requestAnimationFrame(s)})},pathToRegexp:ku},Gu=function(){return window.location.origin},Ts=function(s){return s===void 0&&(s=window.location.href),Ro(s).port},Ro=function(s){var t,e=s.match(/:\d+/);if(e===null)/^http/.test(s)&&(t=80),/^https/.test(s)&&(t=443);else{var n=e[0].substring(1);t=parseInt(n,10)}var i,r=s.replace(Gu(),""),o={},a=r.indexOf("#");a>=0&&(i=r.slice(a+1),r=r.slice(0,a));var c=r.indexOf("?");return c>=0&&(o=Vu(r.slice(c+1)),r=r.slice(0,c)),{hash:i,path:r,port:t,query:o}},Vu=function(s){return s.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=n[1],t},{})},Ka=function(s){return s===void 0&&(s=window.location.href),s.replace(/(\/#.*|\/|#.*)$/,"")},qf={__proto__:null,getHref:function(){return window.location.href},getOrigin:Gu,getPort:Ts,getPath:function(s){return s===void 0&&(s=window.location.href),Ro(s).path},parse:Ro,parseQuery:Vu,clean:Ka};function Xf(s,t,e){return t===void 0&&(t=2e3),new Promise(function(n,i){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){if(r.status===200)n(r.responseText);else if(r.status){var o={status:r.status,statusText:r.statusText};e(s,o),i(o)}}},r.ontimeout=function(){var o=new Error("Timeout error ["+t+"]");e(s,o),i(o)},r.onerror=function(){var o=new Error("Fetch error");e(s,o),i(o)},r.open("GET",s),r.timeout=t,r.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),r.setRequestHeader("x-barba","yes"),r.send()})}var jf=function(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"};function Fr(s,t){return t===void 0&&(t={}),function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var r=!1,o=new Promise(function(a,c){t.async=function(){return r=!0,function(h,d){h?c(h):a(d)}};var l=s.apply(t,n);r||(jf(l)?l.then(a,c):a(l))});return o}}var ui=new(function(s){function t(){var n;return(n=s.call(this)||this).logger=new qi("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}zo(t,s);var e=t.prototype;return e.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(r,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:r})})})},e.do=function(n){for(var i=this,r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(this.registered.has(n)){var c=Promise.resolve();return this.registered.get(n).forEach(function(l){c=c.then(function(){return Fr(l.fn,l.ctx).apply(void 0,o)})}),c.catch(function(l){i.logger.debug("Hook error ["+n+"]"),i.logger.error(l)})}return Promise.resolve()},e.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},e.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,r){return n.push(r)}),this.logger.info("Registered hooks: "+n.join(","))},t}(Of)),Hu=function(){function s(t){if(this.P=[],typeof t=="boolean")this.g=t;else{var e=Array.isArray(t)?t:[t];this.P=e.map(function(n){return ku(n)})}}return s.prototype.checkHref=function(t){if(typeof this.g=="boolean")return this.g;var e=Ro(t).path;return this.P.some(function(n){return n.exec(e)!==null})},s}(),Yf=function(s){function t(n){var i;return(i=s.call(this,n)||this).k=new Map,i}zo(t,s);var e=t.prototype;return e.set=function(n,i,r){return this.k.set(n,{action:r,request:i}),{action:r,request:i}},e.get=function(n){return this.k.get(n)},e.getRequest=function(n){return this.k.get(n).request},e.getAction=function(n){return this.k.get(n).action},e.has=function(n){return!this.checkHref(n)&&this.k.has(n)},e.delete=function(n){return this.k.delete(n)},e.update=function(n,i){var r=Wi({},this.k.get(n),{},i);return this.k.set(n,r),r},t}(Hu),Kf=function(){return!window.history.pushState},Zf=function(s){return!s.el||!s.href},$f=function(s){var t=s.event;return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey},Jf=function(s){var t=s.el;return t.hasAttribute("target")&&t.target==="_blank"},Qf=function(s){var t=s.el;return t.protocol!==void 0&&window.location.protocol!==t.protocol||t.hostname!==void 0&&window.location.hostname!==t.hostname},tp=function(s){var t=s.el;return t.port!==void 0&&Ts()!==Ts(t.href)},ep=function(s){var t=s.el;return t.getAttribute&&typeof t.getAttribute("download")=="string"},np=function(s){return s.el.hasAttribute(On.prefix+"-"+On.prevent)},ip=function(s){return!!s.el.closest("["+On.prefix+"-"+On.prevent+'="all"]')},rp=function(s){var t=s.href;return Ka(t)===Ka()&&Ts(t)===Ts()},sp=function(s){function t(n){var i;return(i=s.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}zo(t,s);var e=t.prototype;return e.init=function(){this.add("pushState",Kf),this.add("exists",Zf),this.add("newTab",$f),this.add("blank",Jf),this.add("corsDomain",Qf),this.add("corsPort",tp),this.add("download",ep),this.add("preventSelf",np),this.add("preventAll",ip),this.add("sameUrl",rp,!1)},e.add=function(n,i,r){r===void 0&&(r=!0),this.tests.set(n,i),r&&this.suite.push(n)},e.run=function(n,i,r,o){return this.tests.get(n)({el:i,event:r,href:o})},e.checkLink=function(n,i,r){var o=this;return this.suite.some(function(a){return o.run(a,n,i,r)})},t}(Hu),Qo=function(s){function t(e,n){var i;n===void 0&&(n="Barba error");for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return(i=s.call.apply(s,[this].concat(o))||this).error=e,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i),t),i.name="BarbaError",i}return zo(t,s),t}(Uu(Error)),op=function(){function s(e){e===void 0&&(e=[]),this.logger=new qi("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],e&&(this.all=this.all.concat(e)),this.update()}var t=s.prototype;return t.add=function(e,n){switch(e){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},t.resolve=function(e,n){var i=this;n===void 0&&(n={});var r=n.once?this.once:this.page;r=r.filter(n.self?function(u){return u.name&&u.name==="self"}:function(u){return!u.name||u.name!=="self"});var o=new Map,a=r.find(function(u){var f=!0,_={};return!(!n.self||u.name!=="self")||(i.A.reverse().forEach(function(g){f&&(f=i.R(u,g,e,_),u.from&&u.to&&(f=i.R(u,g,e,_,"from")&&i.R(u,g,e,_,"to")),u.from&&!u.to&&(f=i.R(u,g,e,_,"from")),!u.from&&u.to&&(f=i.R(u,g,e,_,"to")))}),o.set(u,_),f)}),c=o.get(a),l=[];if(l.push(n.once?"once":"page"),n.self&&l.push("self"),c){var h,d=[a];Object.keys(c).length>0&&d.push(c),(h=this.logger).info.apply(h,["Transition found ["+l.join(",")+"]"].concat(d))}else this.logger.info("No transition found ["+l.join(",")+"]");return a},t.update=function(){var e=this;this.all=this.all.map(function(n){return e.T(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},t.R=function(e,n,i,r,o){var a=!0,c=!1,l=e,h=n.name,d=h,u=h,f=h,_=o?l[o]:l,g=o==="to"?i.next:i.current;if(o?_&&_[h]:_[h]){switch(n.type){case"strings":default:var m=Array.isArray(_[d])?_[d]:[_[d]];g[d]&&m.indexOf(g[d])!==-1&&(c=!0),m.indexOf(g[d])===-1&&(a=!1);break;case"object":var p=Array.isArray(_[u])?_[u]:[_[u]];g[u]?(g[u].name&&p.indexOf(g[u].name)!==-1&&(c=!0),p.indexOf(g[u].name)===-1&&(a=!1)):a=!1;break;case"function":_[f](i)?c=!0:a=!1}c&&(o?(r[o]=r[o]||{},r[o][h]=l[o][h]):r[h]=l[h])}return a},t.O=function(e,n,i){var r=0;return(e[n]||e.from&&e.from[n]||e.to&&e.to[n])&&(r+=Math.pow(10,i),e.from&&e.from[n]&&(r+=1),e.to&&e.to[n]&&(r+=2)),r},t.T=function(e){var n=this;e.priority=0;var i=0;return this.A.forEach(function(r,o){i+=n.O(e,r.name,o+1)}),e.priority=i,e},s}(),ap=function(){function s(e){e===void 0&&(e=[]),this.logger=new qi("@barba/core"),this.S=!1,this.store=new op(e)}var t=s.prototype;return t.get=function(e,n){return this.store.resolve(e,n)},t.doOnce=function(e){var n=e.data,i=e.transition;try{var r=function(){o.S=!1},o=this,a=i||{};o.S=!0;var c=Ur(function(){return Promise.resolve(o.j("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.j("afterOnce",n,a)).then(function(){})})})},function(l){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(l)});return Promise.resolve(c&&c.then?c.then(r):r())}catch(l){return Promise.reject(l)}},t.doPage=function(e){var n=e.data,i=e.transition,r=e.page,o=e.wrapper;try{var a=function(f){if(c)return f;l.S=!1},c=!1,l=this,h=i||{},d=h.sync===!0||!1;l.S=!0;var u=Ur(function(){function f(){return Promise.resolve(l.j("before",n,h)).then(function(){var g=!1;function m(v){return g?v:Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.j("after",n,h)).then(function(){})})}var p=function(){if(d)return Ur(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.j("beforeLeave",n,h)).then(function(){return Promise.resolve(l.j("beforeEnter",n,h)).then(function(){return Promise.resolve(Promise.all([l.leave(n,h),l.enter(n,h)])).then(function(){return Promise.resolve(l.j("afterLeave",n,h)).then(function(){return Promise.resolve(l.j("afterEnter",n,h)).then(function(){})})})})})})},function(y){if(l.M(y))throw new Qo(y,"Transition error [sync]")});var v=function(y){return g?y:Ur(function(){var E=function(){if(x!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.j("beforeEnter",n,h)).then(function(){return Promise.resolve(l.enter(n,h,x)).then(function(){return Promise.resolve(l.j("afterEnter",n,h)).then(function(){})})})})}();if(E&&E.then)return E.then(function(){})},function(E){if(l.M(E))throw new Qo(E,"Transition error [before/after/enter]")})},x=!1,M=Ur(function(){return Promise.resolve(l.j("beforeLeave",n,h)).then(function(){return Promise.resolve(Promise.all([l.leave(n,h),Ao(r,n)]).then(function(y){return y[0]})).then(function(y){return x=y,Promise.resolve(l.j("afterLeave",n,h)).then(function(){})})})},function(y){if(l.M(y))throw new Qo(y,"Transition error [before/after/leave]")});return M&&M.then?M.then(v):v(M)}();return p&&p.then?p.then(m):m(p)})}var _=function(){if(d)return Promise.resolve(Ao(r,n)).then(function(){})}();return _&&_.then?_.then(f):f()},function(f){throw l.S=!1,f.name&&f.name==="BarbaError"?(l.logger.debug(f.label),l.logger.error(f.error),f):(l.logger.debug("Transition error [page]"),l.logger.error(f),f)});return Promise.resolve(u&&u.then?u.then(a):a(u))}catch(f){return Promise.reject(f)}},t.once=function(e,n){try{return Promise.resolve(ui.do("once",e,n)).then(function(){return n.once?Fr(n.once,n)(e):Promise.resolve()})}catch(i){return Promise.reject(i)}},t.leave=function(e,n){try{return Promise.resolve(ui.do("leave",e,n)).then(function(){return n.leave?Fr(n.leave,n)(e):Promise.resolve()})}catch(i){return Promise.reject(i)}},t.enter=function(e,n,i){try{return Promise.resolve(ui.do("enter",e,n)).then(function(){return n.enter?Fr(n.enter,n)(e,i):Promise.resolve()})}catch(r){return Promise.reject(r)}},t.add=function(e,n){try{return Xi.addContainer(e.next.container,n),ui.do("nextAdded",e),Promise.resolve()}catch(i){return Promise.reject(i)}},t.remove=function(e){try{return Xi.removeContainer(e.current.container),ui.do("currentRemoved",e),Promise.resolve()}catch(n){return Promise.reject(n)}},t.M=function(e){return e.message?!/Timeout error|Fetch error/.test(e.message):!e.status},t.j=function(e,n,i){try{return Promise.resolve(ui.do(e,n,i)).then(function(){return i[e]?Fr(i[e],i)(n):Promise.resolve()})}catch(r){return Promise.reject(r)}},Sc(s,[{key:"isRunning",get:function(){return this.S},set:function(e){this.S=e}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(e){return e.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(e){return e.to&&!e.to.route||e.sync})}}]),s}(),cp=function(){function s(t){var e=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,t.length!==0&&(t.forEach(function(n){e.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){ui[n](e.L(n))}))}return s.prototype.L=function(t){var e=this;return function(n){var i=t.match(/enter/i)?n.next:n.current,r=e.byNamespace.get(i.namespace);return r&&r[t]?Fr(r[t],r)(n):Promise.resolve()}},s}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(s){var t=this;do{if(t.matches(s))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null});var lp={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Ac=new(function(){function s(){this.version=Ff,this.schemaPage=lp,this.Logger=qi,this.logger=new qi("@barba/core"),this.plugins=[],this.hooks=ui,this.dom=Xi,this.helpers=Wf,this.history=Bu,this.request=Xf,this.url=qf}var t=s.prototype;return t.use=function(e,n){var i=this.plugins;i.indexOf(e)>-1?this.logger.warn("Plugin ["+e.name+"] already installed."):typeof e.install=="function"?(e.install(this,n),i.push(e)):this.logger.warn("Plugin ["+e.name+'] has no "install" method.')},t.init=function(e){var n=e===void 0?{}:e,i=n.transitions,r=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,c=n.schema,l=c===void 0?On:c,h=n.requestError,d=n.timeout,u=d===void 0?2e3:d,f=n.cacheIgnore,_=f!==void 0&&f,g=n.prefetchIgnore,m=g!==void 0&&g,p=n.preventRunning,v=p!==void 0&&p,x=n.prevent,M=x===void 0?null:x,y=n.debug,E=n.logLevel;if(qi.setLevel((y!==void 0&&y)===!0?"debug":E===void 0?"off":E),this.logger.info(this.version),Object.keys(l).forEach(function(S){On[S]&&(On[S]=l[S])}),this.$=h,this.timeout=u,this.cacheIgnore=_,this.prefetchIgnore=m,this.preventRunning=v,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var b=this.data.current;if(!b.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Yf(_),this.prevent=new sp(m),this.transitions=new ap(r),this.views=new cp(a),M!==null){if(typeof M!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",M)}this.history.init(b.url.href,b.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(S){return S.init()});var T=this.data;T.trigger="barba",T.next=T.current,T.current=Wi({},this.schemaPage),this.hooks.do("ready",T),this.once(T),this.q()},t.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},t.force=function(e){window.location.assign(e)},t.go=function(e,n,i){var r;if(n===void 0&&(n="barba"),this.transitions.isRunning)this.force(e);else if(!(r=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(e):this.prevent.run("sameUrl",null,null,e))||this.transitions.hasSelf)return n=this.history.change(e,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(e,n,r)},t.once=function(e){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",e)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",e)).then(function(){})}var r=function(){if(n.transitions.hasOnce){var o=n.transitions.get(e,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:e})).then(function(){})}}();return r&&r.then?r.then(i):i()})}catch(i){return Promise.reject(i)}},t.page=function(e,n,i){try{var r=function(){var l=o.data;return Promise.resolve(o.hooks.do("page",l)).then(function(){var h=Ur(function(){var d=o.transitions.get(l,{once:!1,self:i});return Promise.resolve(o.transitions.doPage({data:l,page:a,transition:d,wrapper:o._})).then(function(){o.q()})},function(){qi.getLevel()===0&&o.force(l.current.url.href)});if(h&&h.then)return h.then(function(){})})},o=this;o.data.next.url=Wi({href:e},o.url.parse(e)),o.data.trigger=n;var a=o.cache.has(e)?o.cache.update(e,{action:"click"}).request:o.cache.set(e,o.request(e,o.timeout,o.onRequestError.bind(o,n)),"click").request,c=function(){if(o.transitions.shouldWait)return Promise.resolve(Ao(a,o.data)).then(function(){})}();return Promise.resolve(c&&c.then?c.then(r):r())}catch(l){return Promise.reject(l)}},t.onRequestError=function(e){this.transitions.isRunning=!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var o=i[0],a=i[1],c=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&this.$(e,c,o,a)===!1||(c==="click"&&this.force(o),1))},t.prefetch=function(e){var n=this;this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(i){n.logger.error(i)}),"prefetch")},t.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},t.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},t.B=function(e){var n=this,i=this.I(e);if(i){var r=this.dom.getHref(i);this.prevent.checkHref(r)||this.cache.has(r)||this.cache.set(r,this.request(r,this.timeout,this.onRequestError.bind(this,i)).catch(function(o){n.logger.error(o)}),"enter")}},t.U=function(e){var n=this.I(e);if(n)return this.transitions.isRunning&&this.preventRunning?(e.preventDefault(),void e.stopPropagation()):void this.go(this.dom.getHref(n),n,e)},t.D=function(e){this.go(this.url.getHref(),"popstate",e)},t.I=function(e){for(var n=e.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,e,this.dom.getHref(n)))return n},t.q=function(){var e=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Wi({href:e},this.url.parse(e))};this.C={current:n,next:Wi({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},Sc(s,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),s}());function $n(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Wu(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var en={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qr={duration:.5,overwrite:!1,delay:0},Rc,Ue,se,un=1e8,Jt=1/un,Za=Math.PI*2,hp=Za/4,up=0,qu=Math.sqrt,dp=Math.cos,fp=Math.sin,be=function(t){return typeof t=="string"},oe=function(t){return typeof t=="function"},ii=function(t){return typeof t=="number"},Cc=function(t){return typeof t>"u"},kn=function(t){return typeof t=="object"},Ve=function(t){return t!==!1},Pc=function(){return typeof window<"u"},js=function(t){return oe(t)||be(t)},Xu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ne=Array.isArray,$a=/(?:-?\.?\d|\.)+/gi,ju=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ta=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yu=/[+-]=-?[.\d]+/,Ku=/[^,'"\[\]\s]+/gi,pp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ee,ln,Ja,Lc,rn={},Co={},Zu,$u=function(t){return(Co=ir(t,rn))&&je},Dc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Po=function(t,e){return!e&&console.warn(t)},Ju=function(t,e){return t&&(rn[t]=e)&&Co&&(Co[t]=e)||rn},As=function(){return 0},mp={suppressEvents:!0,isStart:!0,kill:!1},Eo={suppressEvents:!0,kill:!1},gp={suppressEvents:!0},Ic={},vi=[],Qa={},Qu,Qe={},ea={},_l=30,wo=[],Uc="",Nc=function(t){var e=t[0],n,i;if(kn(e)||oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=wo.length;i--&&!wo[i].targetTest(e););n=wo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ed(t[i],n)))||t.splice(i,1);return t},Yi=function(t){return t._gsap||Nc(dn(t))[0]._gsap},td=function(t,e,n){return(n=t[e])&&oe(n)?t[e]():Cc(n)&&t.getAttribute&&t.getAttribute(e)||n},He=function(t,e){return(t=t.split(",")).forEach(e)||t},ce=function(t){return Math.round(t*1e5)/1e5||0},Re=function(t){return Math.round(t*1e7)/1e7||0},kr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},_p=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Lo=function(){var t=vi.length,e=vi.slice(0),n,i;for(Qa={},vi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ed=function(t,e,n,i){vi.length&&!Ue&&Lo(),t.render(e,n,i||Ue&&e<0&&(t._initted||t._startAt)),vi.length&&!Ue&&Lo()},nd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ku).length<2?e:be(t)?t.trim():t},id=function(t){return t},pn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vp=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ir=function(t,e){for(var n in e)t[n]=e[n];return t},vl=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=kn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Do=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},vs=function(t){var e=t.parent||ee,n=t.keyframes?vp(Ne(t.keyframes)):pn;if(Ve(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},xp=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},rd=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Bo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Si=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ki=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},yp=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},tc=function(t,e,n,i){return t._startAt&&(Ue?t._startAt.revert(Eo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Mp=function s(t){return!t||t._ts&&s(t.parent)},xl=function(t){return t._repeat?Xr(t._tTime,t=t.duration()+t._rDelay)*t:0},Xr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Io=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ko=function(t){return t._end=Re(t._start+(t._tDur/Math.abs(t._ts||t._rts||Jt)||0))},Go=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Re(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ko(t),n._dirty||Ki(n,t)),t},sd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Io(t.rawTime(),e),(!e._dur||zs(0,e.totalDuration(),n)-e._tTime>Jt)&&e.render(n,!0)),Ki(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Jt}},Un=function(t,e,n,i){return e.parent&&Si(e),e._start=Re((ii(n)?n:n||t!==ee?cn(t,n,e):t._time)+e._delay),e._end=Re(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rd(t,e,"_first","_last",t._sort?"_start":0),ec(e)||(t._recent=e),i||sd(t,e),t._ts<0&&Go(t,t._tTime),t},od=function(t,e){return(rn.ScrollTrigger||Dc("scrollTrigger",e))&&rn.ScrollTrigger.create(e,t)},ad=function(t,e,n,i,r){if(Oc(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Qu!==tn.frame)return vi.push(t),t._lazy=[r,i],1},Sp=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ec=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ep=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Sp(t)&&!(!t._initted&&ec(t))||(t._ts<0||t._dp._ts<0)&&!ec(t))?0:1,a=t._rDelay,c=0,l,h,d;if(a&&t._repeat&&(c=zs(0,t._tDur,e),h=Xr(c,a),t._yoyo&&h&1&&(o=1-o),h!==Xr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ue||i||t._zTime===Jt||!e&&t._zTime){if(!t._initted&&ad(t,e,i,n,c))return;for(d=t._zTime,t._zTime=e||(n?Jt:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&tc(t,e,n,!0),t._onUpdate&&!n&&fn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Si(t,1),!n&&!Ue&&(fn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},wp=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},jr=function(t,e,n,i){var r=t._repeat,o=Re(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Re(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Go(t,t._tTime=t._tDur*a),t.parent&&ko(t),n||Ki(t.parent,t),t},yl=function(t){return t instanceof Ge?Ki(t):jr(t,t._dur)},bp={_start:0,endTime:As,totalDuration:As},cn=function s(t,e,n){var i=t.labels,r=t._recent||bp,o=t.duration()>=un?r.endTime(!1):t._dur,a,c,l;return be(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Ne(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},xs=function(t,e,n){var i=ii(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Ve(c.vars.inherit)&&c.parent;o.immediateRender=Ve(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new fe(e[0],o,e[r+1])},bi=function(t,e){return t||t===0?e(t):e},zs=function(t,e,n){return n<t?t:n>e?e:n},Ie=function(t,e){return!be(t)||!(e=pp.exec(t))?"":e[1]},Tp=function(t,e,n){return bi(n,function(i){return zs(t,e,i)})},nc=[].slice,cd=function(t,e){return t&&kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&kn(t[0]))&&!t.nodeType&&t!==ln},Ap=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return be(i)&&!e||cd(i,1)?(r=n).push.apply(r,dn(i)):n.push(i)})||n},dn=function(t,e,n){return se&&!e&&se.selector?se.selector(t):be(t)&&!n&&(Ja||!Yr())?nc.call((e||Lc).querySelectorAll(t),0):Ne(t)?Ap(t,n):cd(t)?nc.call(t,0):t?[t]:[]},ic=function(t){return t=dn(t)[0]||Po("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return dn(e,n.querySelectorAll?n:n===t?Po("Invalid scope")||Lc.createElement("div"):t)}},ld=function(t){return t.sort(function(){return .5-Math.random()})},hd=function(t){if(oe(t))return t;var e=kn(t)?t:{each:t},n=Zi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,d=i;return be(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],d=i[1]),function(u,f,_){var g=(_||e).length,m=o[g],p,v,x,M,y,E,b,T,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,un])[1],!S){for(b=-un;b<(b=_[S++].getBoundingClientRect().left)&&S<g;);S--}for(m=o[g]=[],p=c?Math.min(S,g)*h-.5:i%S,v=S===un?0:c?g*d/S-.5:i/S|0,b=0,T=un,E=0;E<g;E++)x=E%S-p,M=v-(E/S|0),m[E]=y=l?Math.abs(l==="y"?M:x):qu(x*x+M*M),y>b&&(b=y),y<T&&(T=y);i==="random"&&ld(m),m.max=b-T,m.min=T,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(S>g?g-1:l?l==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ie(e.amount||e.each)||0,n=n&&g<0?yd(n):n}return g=(m[u]-m.min)/m.max||0,Re(m.b+(n?n(g):g)*m.v)+m.u}},rc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Re(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ii(n)?0:Ie(n))}},ud=function(t,e){var n=Ne(t),i,r;return!n&&kn(t)&&(i=n=t.radius||un,t.values?(t=dn(t.values),(r=!ii(t[0]))&&(i*=i)):t=rc(t.increment)),bi(e,n?oe(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=un,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-c,u=u*u+f*f):u=Math.abs(t[d]-a),u<l&&(l=u,h=d);return h=!i||l<=i?t[h]:o,r||h===o||ii(o)?h:h+Ie(o)}:rc(t))},dd=function(t,e,n,i){return bi(Ne(t)?!e:n===!0?!!(n=0):!i,function(){return Ne(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Rp=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Cp=function(t,e){return function(n){return t(parseFloat(n))+(e||Ie(n))}},Pp=function(t,e,n){return pd(t,e,0,1,n)},fd=function(t,e,n){return bi(n,function(i){return t[~~e(i)]})},Lp=function s(t,e,n){var i=e-t;return Ne(t)?fd(t,s(0,t.length),e):bi(n,function(r){return(i+(r-t)%i)%i+t})},Dp=function s(t,e,n){var i=e-t,r=i*2;return Ne(t)?fd(t,s(0,t.length-1),e):bi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Rs=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Ku:$a),n+=t.substr(e,i-e)+dd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},pd=function(t,e,n,i,r){var o=e-t,a=i-n;return bi(r,function(c){return n+((c-t)/o*a||0)})},Ip=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=be(t),a={},c,l,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ne(t)&&!Ne(e)){for(h=[],d=t.length,u=d-2,l=1;l<d;l++)h.push(s(t[l-1],t[l]));d--,r=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else i||(t=ir(Ne(t)?[]:{},t));if(!h){for(c in e)Fc.call(a,t,c,"get",e[c]);r=function(_){return kc(_,a)||(o?t.p:t)}}}return bi(n,r)},Ml=function(t,e,n){var i=t.labels,r=un,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},fn=function(t,e,n){var i=t.vars,r=i[e],o=se,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&vi.length&&Lo(),a&&(se=a),h=c?r.apply(l,c):r.call(l),se=o,h},fs=function(t){return Si(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ue),t.progress()<1&&fn(t,"onInterrupt"),t},zr,md=[],gd=function(t){if(Pc()&&t){t=!t.name&&t.default||t;var e=t.name,n=oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:As,render:kc,add:Fc,kill:Kp,modifier:Yp,rawVars:0},o={targetTest:0,get:0,getSetter:Bc,aliases:{},register:0};if(Yr(),t!==i){if(Qe[e])return;pn(i,pn(Do(t,r),o)),ir(i.prototype,ir(r,Do(t,o))),Qe[i.prop=e]=i,t.targetTest&&(wo.push(i),Ic[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ju(e,i),t.register&&t.register(je,i,We)}else t&&md.push(t)},$t=255,ps={aqua:[0,$t,$t],lime:[0,$t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$t],navy:[0,0,128],white:[$t,$t,$t],olive:[128,128,0],yellow:[$t,$t,0],orange:[$t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$t,0,0],pink:[$t,192,203],cyan:[0,$t,$t],transparent:[$t,$t,$t,0]},na=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*$t+.5|0},_d=function(t,e,n){var i=t?ii(t)?[t>>16,t>>8&$t,t&$t]:0:ps.black,r,o,a,c,l,h,d,u,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ps[t])i=ps[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&$t,i&$t,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&$t,t&$t]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match($a),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=na(c+1/3,r,o),i[1]=na(c,r,o),i[2]=na(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(ju),n&&i.length<4&&(i[3]=1),i}else i=t.match($a)||ps.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/$t,o=i[1]/$t,a=i[2]/$t,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?c=l=0:(f=d-u,l=h>.5?f/(2-d-u):f/(d+u),c=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},vd=function(t){var e=[],n=[],i=-1;return t.split(xi).forEach(function(r){var o=r.match(Or)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Sl=function(t,e,n){var i="",r=(t+i).match(xi),o=e?"hsla(":"rgba(",a=0,c,l,h,d;if(!r)return t;if(r=r.map(function(u){return(u=_d(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=vd(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(xi,"1").split(Or),d=l.length-1;a<d;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(xi),d=l.length-1;a<d;a++)i+=l[a]+r[a];return i+l[d]},xi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ps)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Up=/hsl[a]?\(/,xd=function(t){var e=t.join(" "),n;if(xi.lastIndex=0,xi.test(e))return n=Up.test(e),t[1]=Sl(t[1],n),t[0]=Sl(t[0],n,vd(t[1])),!0},Cs,tn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,d,u,f,_=function g(m){var p=s()-i,v=m===!0,x,M,y,E;if(p>t&&(n+=p-e),i+=p,y=i-n,x=y-o,(x>0||v)&&(E=++d.frame,u=y-d.time*1e3,d.time=y=y/1e3,o+=x+(x>=r?4:r-x),M=1),v||(c=l(g)),M)for(f=0;f<a.length;f++)a[f](y,u,E,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Zu&&(!Ja&&Pc()&&(ln=Ja=window,Lc=ln.document||{},rn.gsap=je,(ln.gsapVersions||(ln.gsapVersions=[])).push(je.version),$u(Co||ln.GreenSockGlobals||!ln.gsap&&ln||{}),h=ln.requestAnimationFrame,md.forEach(gd)),c&&d.sleep(),l=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Cs=1,_(2))},sleep:function(){(h?ln.cancelAnimationFrame:clearTimeout)(c),Cs=0,l=As},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,p,v){var x=p?function(M,y,E,b){m(M,y,E,b),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),Yr(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},d}(),Yr=function(){return!Cs&&tn.wake()},Wt={},Np=/^[\d.\-M][\d.\-,\s]/,Fp=/["']/g,Op=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(Fp,"").trim():+l,i=c.substr(a+1).trim();return e},zp=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Bp=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Op(e[1])]:zp(t).split(",").map(nd)):Wt._CE&&Np.test(t)?Wt._CE("",t):n},yd=function(t){return function(e){return 1-t(1-e)}},Md=function s(t,e){for(var n=t._first,i;n;)n instanceof Ge?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Zi=function(t,e){return t&&(oe(t)?t:Wt[t]||Bp(t))||e},cr=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return He(t,function(a){Wt[a]=rn[a]=r,Wt[o=a.toLowerCase()]=n;for(var c in r)Wt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Wt[a+"."+c]=r[c]}),r},Sd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ia=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Za*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*fp((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Sd(a);return r=Za/r,c.config=function(l,h){return s(t,l,h)},c},ra=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Sd(n);return i.config=function(r){return s(t,r)},i};He("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;cr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;cr("Elastic",ia("in"),ia("out"),ia());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};cr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);cr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});cr("Circ",function(s){return-(qu(1-s*s)-1)});cr("Sine",function(s){return s===1?1:-dp(s*hp)+1});cr("Back",ra("in"),ra("out"),ra());Wt.SteppedEase=Wt.steps=rn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Jt;return function(a){return((i*zs(0,o,a)|0)+r)*n}}};qr.ease=Wt["quad.out"];He("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Uc+=s+","+s+"Params,"});var Ed=function(t,e){this.id=up++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:td,this.set=e?e.getSetter:Bc},Ps=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,jr(this,+e.duration,1,1),this.data=e.data,se&&(this._ctx=se,se.data.push(this)),Cs||tn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,jr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Yr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Go(this,n),!r._dp||r.parent||sd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ed(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Xr(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Jt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Io(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Jt?0:this._rts,this.totalTime(zs(-Math.abs(this._delay),this._tDur,i),!0),ko(this),yp(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Jt&&(this._tTime-=Jt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Un(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ve(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Io(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=gp);var i=Ue;return Ue=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ue=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),Ve(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ve(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Jt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Jt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Jt)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=oe(n)?n:id,a=function(){var l=i.then;i.then=null,oe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){fs(this)},s}();pn(Ps.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Jt,_prom:0,_ps:!1,_rts:1});var Ge=function(s){Wu(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ve(n.sortChildren),ee&&Un(n.parent||ee,$n(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&od($n(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return xs(0,arguments,this),this},e.from=function(i,r,o){return xs(1,arguments,this),this},e.fromTo=function(i,r,o,a){return xs(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,vs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new fe(i,r,cn(this,o),1),this},e.call=function(i,r,o){return Un(this,fe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new fe(i,o,cn(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,vs(o).immediateRender=Ve(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,d){return a.startAt=o,vs(a).immediateRender=Ve(a.immediateRender),this.staggerTo(i,r,a,c,l,h,d)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Re(i),d=this._zTime<0!=i<0&&(this._initted||!l),u,f,_,g,m,p,v,x,M,y,E,b;if(this!==ee&&h>c&&i>=0&&(h=c),h!==this._tTime||o||d){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),u=h,M=this._start,x=this._ts,p=!x,d&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(u=Re(h%m),h===c?(g=this._repeat,u=l):(g=~~(h/m),g&&g===h/m&&(u=l,g--),u>l&&(u=l)),y=Xr(this._tTime,m),!a&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),E&&g&1&&(u=l-u,b=1),g!==y&&!this._lock){var T=E&&y&1,S=T===(E&&g&1);if(g<y&&(T=!T),a=T?0:h%l?l:h,this._lock=1,this.render(a||(b?0:Re(g*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,a=T?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Md(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=wp(this,Re(a),Re(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!r&&!g&&(fn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-Jt);break}}f=_}else{f=this._last;for(var w=i<0?i:u;f;){if(_=f._prev,(f._act||w<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(w-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(w-f._start)*f._ts,r,o||Ue&&(f._initted||f._startAt)),u!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=w?-Jt:Jt);break}}f=_}}if(v&&!r&&(this.pause(),v.render(u>=a?0:-Jt)._zTime=u>=a?1:-1,this._ts))return this._start=M,ko(this),this.render(i,r,o);this._onUpdate&&!r&&fn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Si(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(fn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ii(r)||(r=cn(this,r,i)),!(i instanceof Ps)){if(Ne(i))return i.forEach(function(a){return o.add(a,r)}),this;if(be(i))return this.addLabel(i,r);if(oe(i))i=fe.delayedCall(0,i);else return this}return this!==i?Un(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-un);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof fe?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return be(i)?this.removeLabel(i):oe(i)?this.killTweensOf(i):(Bo(this,i),i===this._recent&&(this._recent=this._last),Ki(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Re(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=cn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=fe.delayedCall(0,r||As,o);return a.data="isPause",this._hasPause=1,Un(this,a,cn(this,i))},e.removePause=function(i){var r=this._first;for(i=cn(this,i);r;)r._start===i&&r.data==="isPause"&&Si(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)fi!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=dn(i),c=this._first,l=ii(r),h;c;)c instanceof fe?_p(c._targets,a)&&(l?(!fi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=cn(o,i),c=r,l=c.startAt,h=c.onStart,d=c.onStartParams,u=c.immediateRender,f,_=fe.to(o,pn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Jt,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&jr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,d||[])}},r));return u?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,pn({startAt:{time:cn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ml(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ml(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Jt)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return Ki(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ki(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=un,l,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Un(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;jr(o,o===ee&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ee._ts&&(ed(ee,Io(i,ee)),Qu=tn.frame),tn.frame>=_l){_l+=en.autoSleep||120;var r=ee._first;if((!r||!r._ts)&&en.autoSleep&&tn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||tn.sleep()}}},t}(Ps);pn(Ge.prototype,{_lock:0,_hasPause:0,_forcing:0});var kp=function(t,e,n,i,r,o,a){var c=new We(this._pt,t,e,0,1,Cd,null,r),l=0,h=0,d,u,f,_,g,m,p,v;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Rs(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(ta)||[];d=ta.exec(i);)_=d[0],g=i.substring(l,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[h++]&&(m=parseFloat(u[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?kr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},l=ta.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Yu.test(i)||p)&&(c.e=0),this._pt=c,c},Fc=function(t,e,n,i,r,o,a,c,l,h){oe(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:oe(d)?l?t[e.indexOf("set")||!oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,f=oe(d)?l?qp:Ad:zc,_;if(be(i)&&(~i.indexOf("random(")&&(i=Rs(i)),i.charAt(1)==="="&&(_=kr(u,i)+(Ie(u)||0),(_||_===0)&&(i=_))),!h||u!==i||sc)return!isNaN(u*i)&&i!==""?(_=new We(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?jp:Rd,0,f),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!d&&!(e in t)&&Dc(e,i),kp.call(this,t,e,u,i,f,c||en.stringFilter,l))},Gp=function(t,e,n,i,r){if(oe(t)&&(t=ys(t,r,e,n,i)),!kn(t)||t.style&&t.nodeType||Ne(t)||Xu(t))return be(t)?ys(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=ys(t[a],r,e,n,i);return o},wd=function(t,e,n,i,r,o){var a,c,l,h;if(Qe[t]&&(a=new Qe[t]).init(r,a.rawVars?e[t]:Gp(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new We(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==zr))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},fi,sc,Oc=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.onUpdateParams,d=i.callbackScope,u=i.runBackwards,f=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,p=t._startAt,v=t._targets,x=t.parent,M=x&&x.data==="nested"?x.vars.targets:v,y=t._overwrite==="auto"&&!Rc,E=t.timeline,b,T,S,w,O,B,C,I,D,F,k,G,W;if(E&&(!_||!r)&&(r="none"),t._ease=Zi(r,qr.ease),t._yEase=f?yd(Zi(f===!0?r:f,qr.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(I=v[0]?Yi(v[0]).harness:0,G=I&&i[I.prop],b=Do(i,Ic),p&&(p._zTime<0&&p.progress(1),e<0&&u&&a&&!g?p.render(-1,!0):p.revert(u&&m?Eo:mp),p._lazy=0),o){if(Si(t._startAt=fe.set(v,pn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!p&&Ve(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:h,callbackScope:d,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue||!a&&!g)&&t._startAt.revert(Eo),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&m&&!p){if(e&&(a=!1),S=pn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Ve(c),immediateRender:a,stagger:0,parent:x},b),G&&(S[I.prop]=G),Si(t._startAt=fe.set(v,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue?t._startAt.revert(Eo):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Jt,Jt);else if(!e)return}for(t._pt=t._ptCache=0,c=m&&Ve(c)||c&&!m,T=0;T<v.length;T++){if(O=v[T],C=O._gsap||Nc(v)[T]._gsap,t._ptLookup[T]=F={},Qa[C.id]&&vi.length&&Lo(),k=M===v?T:M.indexOf(O),I&&(D=new I).init(O,G||b,t,k,M)!==!1&&(t._pt=w=new We(t._pt,O,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(j){F[j]=w}),D.priority&&(B=1)),!I||G)for(S in b)Qe[S]&&(D=wd(S,b,t,k,O,M))?D.priority&&(B=1):F[S]=w=Fc.call(t,O,S,"get",b[S],k,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(O,t._op[T]),y&&t._pt&&(fi=t,ee.killTweensOf(O,F,t.globalTime(e)),W=!t.parent,fi=0),t._pt&&c&&(Qa[C.id]=1)}B&&Pd(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!W,_&&e<=0&&E.render(un,!0,!0)},Vp=function(t,e,n,i,r,o,a){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,d,u;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(l=d[u][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return sc=1,t.vars[e]="+=0",Oc(t,a),sc=0,1;c.push(l)}for(u=c.length;u--;)h=c[u],l=h._pt||h,l.s=(i||i===0)&&!r?i:l.s+(i||0)+o*l.c,l.c=n-l.s,h.e&&(h.e=ce(n)+Ie(h.e)),h.b&&(h.b=l.s+Ie(h.b))},Hp=function(t,e){var n=t[0]?Yi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=ir({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Wp=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Ne(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},ys=function(t,e,n,i,r){return oe(t)?t.call(e,n,i,r):be(t)&&~t.indexOf("random(")?Rs(t):t},bd=Uc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Td={};He(bd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Td[s]=1});var fe=function(s){Wu(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:vs(i))||this;var c=a.vars,l=c.duration,h=c.delay,d=c.immediateRender,u=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,v=i.parent||ee,x=(Ne(n)||Xu(n)?ii(n[0]):"length"in i)?[n]:dn(n),M,y,E,b,T,S,w,O;if(a._targets=x.length?Nc(x):Po("GSAP target "+n+" not found. https://greensock.com",!en.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||u||js(l)||js(h)){if(i=a.vars,M=a.timeline=new Ge({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),M.kill(),M.parent=M._dp=$n(a),M._start=0,u||js(l)||js(h)){if(b=x.length,w=u&&hd(u),kn(u))for(T in u)~bd.indexOf(T)&&(O||(O={}),O[T]=u[T]);for(y=0;y<b;y++)E=Do(i,Td),E.stagger=0,p&&(E.yoyoEase=p),O&&ir(E,O),S=x[y],E.duration=+ys(l,$n(a),y,S,x),E.delay=(+ys(h,$n(a),y,S,x)||0)-a._delay,!u&&b===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),M.to(S,E,w?w(y,S,x):0),M._ease=Wt.none;M.duration()?l=h=0:a.timeline=0}else if(_){vs(pn(M.vars.defaults,{ease:"none"})),M._ease=Zi(_.ease||i.ease||"none");var B=0,C,I,D;if(Ne(_))_.forEach(function(F){return M.to(x,F,">")}),M.duration();else{E={};for(T in _)T==="ease"||T==="easeEach"||Wp(T,_[T],E,_.easeEach);for(T in E)for(C=E[T].sort(function(F,k){return F.t-k.t}),B=0,y=0;y<C.length;y++)I=C[y],D={ease:I.e,duration:(I.t-(y?C[y-1].t:0))/100*l},D[T]=I.v,M.to(x,D,B),B+=D.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||a.duration(l=M.duration())}else a.timeline=0;return f===!0&&!Rc&&(fi=$n(a),ee.killTweensOf(x),fi=0),Un(v,$n(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!l&&!_&&a._start===Re(v._time)&&Ve(d)&&Mp($n(a))&&v.data!=="nested")&&(a._tTime=-Jt,a.render(Math.max(0,-h)||0)),m&&od($n(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,d=i>c-Jt&&!h?c:i<Jt?0:i,u,f,_,g,m,p,v,x,M;if(!l)Ep(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=d,x=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(u=Re(d%g),d===c?(_=this._repeat,u=l):(_=~~(d/g),_&&_===d/g&&(u=l,_--),u>l&&(u=l)),p=this._yoyo&&_&1,p&&(M=this._yEase,u=l-u),m=Xr(this._tTime,g),u===a&&!o&&this._initted)return this._tTime=d,this;_!==m&&(x&&this._yEase&&Md(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Re(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(ad(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(u/l),this._from&&(this.ratio=v=1-v),u&&!a&&!r&&!_&&(fn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:!u&&p?-Jt:x._dur*x._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&tc(this,i,r,o),fn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&fn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&tc(this,i,!0,!0),(i||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Si(this,1),!r&&!(h&&!a)&&(d||a||p)&&(fn(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a){Cs||tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Oc(this,c),l=this._ease(c/this._dur),Vp(this,i,r,o,a,l,c)?this.resetTo(i,r,o,a):(Go(this,0),this.parent||rd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?fs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,fi&&fi.vars.overwrite!==!0)._first||fs(this),this.parent&&o!==this.timeline.totalDuration()&&jr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?dn(i):a,l=this._ptLookup,h=this._pt,d,u,f,_,g,m,p;if((!r||r==="all")&&xp(a,c))return r==="all"&&(this._pt=0),fs(this);for(d=this._op=this._op||[],r!=="all"&&(be(r)&&(g={},He(r,function(v){return g[v]=1}),r=g),r=Hp(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){u=l[p],r==="all"?(d[p]=r,_=u,f={}):(f=d[p]=d[p]||{},_=r);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Bo(this,m,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&fs(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return xs(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return xs(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return ee.killTweensOf(i,r,o)},t}(Ps);pn(fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});He("staggerTo,staggerFrom,staggerFromTo",function(s){fe[s]=function(){var t=new Ge,e=nc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var zc=function(t,e,n){return t[e]=n},Ad=function(t,e,n){return t[e](n)},qp=function(t,e,n,i){return t[e](i.fp,n)},Xp=function(t,e,n){return t.setAttribute(e,n)},Bc=function(t,e){return oe(t[e])?Ad:Cc(t[e])&&t.setAttribute?Xp:zc},Rd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},jp=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Cd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},kc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Yp=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Kp=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Bo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Zp=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Pd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},We=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Rd,this.d=c||this,this.set=l||zc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Zp,this.m=n,this.mt=r,this.tween=i},s}();He(Uc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Ic[s]=1});rn.TweenMax=rn.TweenLite=fe;rn.TimelineLite=rn.TimelineMax=Ge;ee=new Ge({sortChildren:!1,defaults:qr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});en.stringFilter=xd;var $i=[],bo={},$p=[],El=0,Jp=0,sa=function(t){return(bo[t]||$p).map(function(e){return e()})},oc=function(){var t=Date.now(),e=[];t-El>2&&(sa("matchMediaInit"),$i.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=ln.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),sa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),El=t,sa("matchMedia"))},Ld=function(){function s(e,n){this.selector=n&&ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Jp++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){oe(n)&&(r=i,i=n,n=oe);var o=this,a=function(){var l=se,h=o.selector,d;return l&&l!==o&&l.data.push(o),r&&(o.selector=ic(r)),se=o,d=i.apply(o,arguments),oe(d)&&o._r.push(d),se=l,o.selector=h,o.isReverted=!1,d};return o.last=a,n===oe?a(o):n?o[n]=a:a},t.ignore=function(n){var i=se;se=null,n(this),se=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof fe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof fe)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,r)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i)for(var a=$i.length;a--;)$i[a].id===this.id&&$i.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),Qp=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){kn(n)||(n={matches:n});var o=new Ld(0,r||this.scope),a=o.conditions={},c,l,h;se&&!o.selector&&(o.selector=se.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=ln.matchMedia(n[l]),c&&($i.indexOf(o)<0&&$i.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(oc):c.addEventListener("change",oc)));return h&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Uo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return gd(i)})},timeline:function(t){return new Ge(t)},getTweensOf:function(t,e){return ee.getTweensOf(t,e)},getProperty:function(t,e,n,i){be(t)&&(t=dn(t)[0]);var r=Yi(t||{}).get,o=n?id:nd;return n==="native"&&(n=""),t&&(e?o((Qe[e]&&Qe[e].get||r)(t,e,n,i)):function(a,c,l){return o((Qe[a]&&Qe[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=dn(t),t.length>1){var i=t.map(function(h){return je.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Qe[e],a=Yi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var d=new o;zr._pt=0,d.init(t,n?h+n:h,zr,0,[t]),d.render(1,d),zr._pt&&kc(1,zr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=je.to(t,ir((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return ee.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Zi(t.ease,qr.ease)),vl(qr,t||{})},config:function(t){return vl(en,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qe[a]&&!rn[a]&&Po(e+" effect requires "+a+" plugin.")}),ea[e]=function(a,c,l){return n(dn(a),pn(c||{},r),l)},o&&(Ge.prototype[e]=function(a,c,l){return this.add(ea[e](a,kn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Wt[t]=Zi(e)},parseEase:function(t,e){return arguments.length?Zi(t,e):Wt},getById:function(t){return ee.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ge(t),i,r;for(n.smoothChildTiming=Ve(t.smoothChildTiming),ee.remove(n),n._dp=0,n._time=n._tTime=ee._time,i=ee._first;i;)r=i._next,(e||!(!i._dur&&i instanceof fe&&i.vars.onComplete===i._targets[0]))&&Un(n,i,i._start-i._delay),i=r;return Un(ee,n,0),n},context:function(t,e){return t?new Ld(t,e):se},matchMedia:function(t){return new Qp(t)},matchMediaRefresh:function(){return $i.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||oc()},addEventListener:function(t,e){var n=bo[t]||(bo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=bo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Lp,wrapYoyo:Dp,distribute:hd,random:dd,snap:ud,normalize:Pp,getUnit:Ie,clamp:Tp,splitColor:_d,toArray:dn,selector:ic,mapRange:pd,pipe:Rp,unitize:Cp,interpolate:Ip,shuffle:ld},install:$u,effects:ea,ticker:tn,updateRoot:Ge.updateRoot,plugins:Qe,globalTimeline:ee,core:{PropTween:We,globals:Ju,Tween:fe,Timeline:Ge,Animation:Ps,getCache:Yi,_removeLinkedListItem:Bo,reverting:function(){return Ue},context:function(t){return t&&se&&(se.data.push(t),t._ctx=se),se},suppressOverwrites:function(t){return Rc=t}}};He("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Uo[s]=fe[s]});tn.add(Ge.updateRoot);zr=Uo.to({},{duration:0});var tm=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},em=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=tm(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},oa=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(be(r)&&(c={},He(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}em(a,r)}}}},je=Uo.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},oa("roundProps",rc),oa("modifiers"),oa("snap",ud))||Uo;fe.version=Ge.version=je.version="3.12.2";Zu=1;Pc()&&Yr();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wl,pi,Gr,Gc,ji,bl,Vc,nm=function(){return typeof window<"u"},ri={},Bi=180/Math.PI,Vr=Math.PI/180,ur=Math.atan2,Tl=1e8,Hc=/([A-Z])/g,im=/(left|right|width|margin|padding|x)/i,rm=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ac=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sm=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},om=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},am=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Dd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Id=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},cm=function(t,e,n){return t.style[e]=n},lm=function(t,e,n){return t.style.setProperty(e,n)},hm=function(t,e,n){return t._gsap[e]=n},um=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},dm=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},fm=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ne="transform",Tn=ne+"Origin",pm=function s(t,e){var n=this,i=this.target,r=i.style;if(t in ri&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Nn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Jn(i,o)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Jn(i,t);else return Nn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(ne)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Tn,e,"")),t=ne}(r||e)&&this.props.push(t,e,r[t])},Ud=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},mm=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Hc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Vc(),(!r||!r.isStart)&&!n[ne]&&(Ud(n),i.uncache=1)}},Nd=function(t,e){var n={target:t,props:[],revert:mm,save:pm};return t._gsap||je.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Fd,cc=function(t,e){var n=pi.createElementNS?pi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):pi.createElement(t);return n.style?n:pi.createElement(t)},zn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Hc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Kr(e)||e,1)||""},Al="O,Moz,ms,Ms,Webkit".split(","),Kr=function(t,e,n){var i=e||ji,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Al[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Al[o]:"")+t},lc=function(){nm()&&window.document&&(wl=window,pi=wl.document,Gr=pi.documentElement,ji=cc("div")||{style:{}},cc("div"),ne=Kr(ne),Tn=ne+"Origin",ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Fd=!!Kr("perspective"),Vc=je.core.reverting,Gc=1)},aa=function s(t){var e=cc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Gr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Gr.removeChild(e),this.style.cssText=r,o},Rl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Od=function(t){var e;try{e=t.getBBox()}catch{e=aa.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===aa||(e=aa.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Rl(t,["x","cx","x1"])||0,y:+Rl(t,["y","cy","y1"])||0,width:0,height:0}:e},zd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Od(t))},Ls=function(t,e){if(e){var n=t.style;e in ri&&e!==Tn&&(e=ne),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Hc,"-$1").toLowerCase())):n.removeAttribute(e)}},mi=function(t,e,n,i,r,o){var a=new We(t._pt,e,n,0,1,o?Id:Dd);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Cl={deg:1,rad:1,turn:1},gm={grid:1,flex:1},Ei=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ji.style,c=im.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),d=100,u=i==="px",f=i==="%",_,g,m,p;return i===o||!r||Cl[i]||Cl[o]?r:(o!=="px"&&!u&&(r=s(t,e,n,"px")),p=t.getCTM&&zd(t),(f||o==="%")&&(ri[e]||~e.indexOf("adius"))?(_=p?t.getBBox()[c?"width":"height"]:t[h],ce(f?r/_*d:r/100*_)):(a[c?"width":"height"]=d+(u?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===pi||!g.appendChild)&&(g=pi.body),m=g._gsap,m&&f&&m.width&&c&&m.time===tn.time&&!m.uncache?ce(r/m.width*d):((f||o==="%")&&!gm[zn(g,"display")]&&(a.position=zn(t,"position")),g===t&&(a.position="static"),g.appendChild(ji),_=ji[h],g.removeChild(ji),a.position="absolute",c&&f&&(m=Yi(g),m.time=tn.time,m.width=g[h]),ce(u?_*r/d:_&&r?d/_*r:0))))},Jn=function(t,e,n,i){var r;return Gc||lc(),e in Nn&&e!=="transform"&&(e=Nn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ri[e]&&e!=="transform"?(r=Is(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Fo(zn(t,Tn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=No[e]&&No[e](t,e,n)||zn(t,e)||td(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ei(t,e,r,n)+n:r},_m=function(t,e,n,i){if(!n||n==="none"){var r=Kr(e,t,1),o=r&&zn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=zn(t,"borderTopColor"))}var a=new We(this._pt,t.style,e,0,1,Cd),c=0,l=0,h,d,u,f,_,g,m,p,v,x,M,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=zn(t,e)||i,t.style[e]=n),h=[n,i],xd(h),n=h[0],i=h[1],u=n.match(Or)||[],y=i.match(Or)||[],y.length){for(;d=Or.exec(i);)m=d[0],v=i.substring(c,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=u[l++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=kr(f,m)+M),p=parseFloat(m),x=m.substr((p+"").length),c=Or.lastIndex-x.length,x||(x=x||en.units[e]||M,c===i.length&&(i+=x,a.e+=x)),M!==x&&(f=Ei(t,e,g,x)||0),a._pt={_next:a._pt,p:v||l===1?v:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Id:Dd;return Yu.test(i)&&(a.e=0),this._pt=a,a},Pl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vm=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Pl[n]||n,e[1]=Pl[i]||i,e.join(" ")},xm=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],ri[a]&&(c=1,a=a==="transformOrigin"?Tn:ne),Ls(n,a);c&&(Ls(n,ne),o&&(o.svg&&n.removeAttribute("transform"),Is(n,1),o.uncache=1,Ud(i)))}},No={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new We(t._pt,e,n,0,0,xm);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ds=[1,0,0,1,0,0],Bd={},kd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ll=function(t){var e=zn(t,ne);return kd(e)?Ds:e.substr(7).match(ju).map(ce)},Wc=function(t,e){var n=t._gsap||Yi(t),i=t.style,r=Ll(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Ds:r):(r===Ds&&!t.offsetParent&&t!==Gr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(l=1,a=t.nextElementSibling,Gr.appendChild(t)),r=Ll(t),c?i.display=c:Ls(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):Gr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},hc=function(t,e,n,i,r,o){var a=t._gsap,c=r||Wc(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=c[0],_=c[1],g=c[2],m=c[3],p=c[4],v=c[5],x=e.split(" "),M=parseFloat(x[0])||0,y=parseFloat(x[1])||0,E,b,T,S;n?c!==Ds&&(b=f*m-_*g)&&(T=M*(m/b)+y*(-g/b)+(g*v-m*p)/b,S=M*(-_/b)+y*(f/b)-(f*v-_*p)/b,M=T,y=S):(E=Od(t),M=E.x+(~x[0].indexOf("%")?M/100*E.width:M),y=E.y+(~(x[1]||x[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&a.smooth?(p=M-l,v=y-h,a.xOffset=d+(p*f+v*g)-p,a.yOffset=u+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=y,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Tn]="0px 0px",o&&(mi(o,a,"xOrigin",l,M),mi(o,a,"yOrigin",h,y),mi(o,a,"xOffset",d,a.xOffset),mi(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+y)},Is=function(t,e){var n=t._gsap||new Ed(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=zn(t,Tn)||"0",h,d,u,f,_,g,m,p,v,x,M,y,E,b,T,S,w,O,B,C,I,D,F,k,G,W,j,Q,N,Z,et,it;return h=d=u=g=m=p=v=x=M=0,f=_=1,n.svg=!!(t.getCTM&&zd(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ne]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ne]!=="none"?c[ne]:"")),i.scale=i.rotate=i.translate="none"),b=Wc(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),hc(t,k||l,!!k||n.originIsAbsolute,n.smooth!==!1,b)),y=n.xOrigin||0,E=n.yOrigin||0,b!==Ds&&(O=b[0],B=b[1],C=b[2],I=b[3],h=D=b[4],d=F=b[5],b.length===6?(f=Math.sqrt(O*O+B*B),_=Math.sqrt(I*I+C*C),g=O||B?ur(B,O)*Bi:0,v=C||I?ur(C,I)*Bi+g:0,v&&(_*=Math.abs(Math.cos(v*Vr))),n.svg&&(h-=y-(y*O+E*C),d-=E-(y*B+E*I))):(it=b[6],Z=b[7],j=b[8],Q=b[9],N=b[10],et=b[11],h=b[12],d=b[13],u=b[14],T=ur(it,N),m=T*Bi,T&&(S=Math.cos(-T),w=Math.sin(-T),k=D*S+j*w,G=F*S+Q*w,W=it*S+N*w,j=D*-w+j*S,Q=F*-w+Q*S,N=it*-w+N*S,et=Z*-w+et*S,D=k,F=G,it=W),T=ur(-C,N),p=T*Bi,T&&(S=Math.cos(-T),w=Math.sin(-T),k=O*S-j*w,G=B*S-Q*w,W=C*S-N*w,et=I*w+et*S,O=k,B=G,C=W),T=ur(B,O),g=T*Bi,T&&(S=Math.cos(T),w=Math.sin(T),k=O*S+B*w,G=D*S+F*w,B=B*S-O*w,F=F*S-D*w,O=k,D=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=ce(Math.sqrt(O*O+B*B+C*C)),_=ce(Math.sqrt(F*F+it*it)),T=ur(D,F),v=Math.abs(T)>2e-4?T*Bi:0,M=et?1/(et<0?-et:et):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!kd(zn(t,ne)),k&&t.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=ce(f),n.scaleY=ce(_),n.rotation=ce(g)+a,n.rotationX=ce(m)+a,n.rotationY=ce(p)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Tn]=Fo(l)),n.xOffset=n.yOffset=0,n.force3D=en.force3D,n.renderTransform=n.svg?Mm:Fd?Gd:ym,n.uncache=0,n},Fo=function(t){return(t=t.split(" "))[0]+" "+t[1]},ca=function(t,e,n){var i=Ie(e);return ce(parseFloat(e)+parseFloat(Ei(t,"x",n+"px",i)))+i},ym=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Gd(t,e)},Ci="0deg",ss="0px",Pi=") ",Gd=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,M="",y=p==="auto"&&t&&t!==1||p===!0;if(x&&(d!==Ci||h!==Ci)){var E=parseFloat(h)*Vr,b=Math.sin(E),T=Math.cos(E),S;E=parseFloat(d)*Vr,S=Math.cos(E),o=ca(v,o,b*S*-x),a=ca(v,a,-Math.sin(E)*-x),c=ca(v,c,T*S*-x+x)}m!==ss&&(M+="perspective("+m+Pi),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||o!==ss||a!==ss||c!==ss)&&(M+=c!==ss||y?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Pi),l!==Ci&&(M+="rotate("+l+Pi),h!==Ci&&(M+="rotateY("+h+Pi),d!==Ci&&(M+="rotateX("+d+Pi),(u!==Ci||f!==Ci)&&(M+="skew("+u+", "+f+Pi),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Pi),v.style[ne]=M||"translate(0, 0)"},Mm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(o),M=parseFloat(a),y,E,b,T,S;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Vr,l*=Vr,y=Math.cos(c)*d,E=Math.sin(c)*d,b=Math.sin(c-l)*-u,T=Math.cos(c-l)*u,l&&(h*=Vr,S=Math.tan(l-h),S=Math.sqrt(1+S*S),b*=S,T*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),y*=S,E*=S)),y=ce(y),E=ce(E),b=ce(b),T=ce(T)):(y=d,T=u,E=b=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=Ei(f,"x",o,"px"),M=Ei(f,"y",a,"px")),(_||g||m||p)&&(x=ce(x+_-(_*y+g*b)+m),M=ce(M+g-(_*E+g*T)+p)),(i||r)&&(S=f.getBBox(),x=ce(x+i/100*S.width),M=ce(M+r/100*S.height)),S="matrix("+y+","+E+","+b+","+T+","+x+","+M+")",f.setAttribute("transform",S),v&&(f.style[ne]=S)},Sm=function(t,e,n,i,r){var o=360,a=be(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?Bi:1),l=c-i,h=i+l+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),d==="cw"&&l<0?l=(l+o*Tl)%o-~~(l/o)*o:d==="ccw"&&l>0&&(l=(l-o*Tl)%o-~~(l/o)*o)),t._pt=u=new We(t._pt,e,n,i,l,sm),u.e=h,u.u="deg",t._props.push(n),u},Dl=function(t,e){for(var n in e)t[n]=e[n];return t},Em=function(t,e,n){var i=Dl({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,d,u,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[ne]=e,a=Is(n,1),Ls(n,ne),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ne],o[ne]=e,a=Is(n,1),o[ne]=l);for(c in ri)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(f=Ie(l),_=Ie(h),d=f!==_?Ei(n,c,l,_):parseFloat(l),u=parseFloat(h),t._pt=new We(t._pt,a,c,d,u-d,ac),t._pt.u=_||0,t._props.push(c));Dl(a,i)};He("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});No[t>1?"border"+s:s]=function(a,c,l,h,d){var u,f;if(arguments.length<4)return u=o.map(function(_){return Jn(a,_,l)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),a.init(c,f,d)}});var Vd={name:"css",register:lc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,d,u,f,_,g,m,p,v,x,M,y,E,b,T;Gc||lc(),this.styles=this.styles||Nd(t),T=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Qe[g]&&wd(g,e,n,i,t,r)))){if(f=typeof h,_=No[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Rs(h)),_)_(this,t,g,h,n)&&(b=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",xi.lastIndex=0,xi.test(l)||(m=Ie(l),p=Ie(h)),p?m!==p&&(l=Ei(t,g,l,p)+p):m&&(h+=m),this.add(a,"setProperty",l,h,i,r,0,0,g),o.push(g),T.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,r):c[g],be(l)&&~l.indexOf("random(")&&(l=Rs(l)),Ie(l+"")||(l+=en.units[g]||Ie(Jn(t,g))||""),(l+"").charAt(1)==="="&&(l=Jn(t,g))):l=Jn(t,g),u=parseFloat(l),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),g in Nn&&(g==="autoAlpha"&&(u===1&&Jn(t,"visibility")==="hidden"&&d&&(u=0),T.push("visibility",0,a.visibility),mi(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Nn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ri,x){if(this.styles.save(g),M||(y=t._gsap,y.renderTransform&&!e.parseTransform||Is(t,e.parseTransform),E=e.smoothOrigin!==!1&&y.smooth,M=this._pt=new We(this._pt,a,ne,0,1,y.renderTransform,y,0,-1),M.dep=1),g==="scale")this._pt=new We(this._pt,y,"scaleY",y.scaleY,(v?kr(y.scaleY,v+d):d)-y.scaleY||0,ac),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){T.push(Tn,0,a[Tn]),h=vm(h),y.svg?hc(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==y.zOrigin&&mi(this,y,"zOrigin",y.zOrigin,p),mi(this,a,g,Fo(l),Fo(h)));continue}else if(g==="svgOrigin"){hc(t,h,1,E,0,this);continue}else if(g in Bd){Sm(this,y,g,u,v?kr(u,v+h):h);continue}else if(g==="smoothOrigin"){mi(this,y,"smooth",y.smooth,h);continue}else if(g==="force3D"){y[g]=h;continue}else if(g==="transform"){Em(this,h,t);continue}}else g in a||(g=Kr(g)||g);if(x||(d||d===0)&&(u||u===0)&&!rm.test(h)&&g in a)m=(l+"").substr((u+"").length),d||(d=0),p=Ie(h)||(g in en.units?en.units[g]:m),m!==p&&(u=Ei(t,g,l,p)),this._pt=new We(this._pt,x?y:a,g,u,(v?kr(u,v+d):d)-u,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?am:ac),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=om);else if(g in a)_m.call(this,t,g,l,v?v+h:h);else if(g in t)this.add(t,g,l||t[g],v?v+h:h,i,r);else if(g!=="parseTransform"){Dc(g,h);continue}x||(g in a?T.push(g,0,a[g]):T.push(g,1,l||t[g])),o.push(g)}}b&&Pd(this)},render:function(t,e){if(e.tween._time||!Vc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Jn,aliases:Nn,getSetter:function(t,e,n){var i=Nn[e];return i&&i.indexOf(",")<0&&(e=i),e in ri&&e!==Tn&&(t._gsap.x||Jn(t,"x"))?n&&bl===n?e==="scale"?um:hm:(bl=n||{})&&(e==="scale"?dm:fm):t.style&&!Cc(t.style[e])?cm:~e.indexOf("-")?lm:Bc(t,e)},core:{_removeProperty:Ls,_getMatrix:Wc}};je.utils.checkPrefix=Kr;je.core.getStyleSaver=Nd;(function(s,t,e,n){var i=He(s+","+t+","+e,function(r){ri[r]=1});He(t,function(r){en.units[r]="deg",Bd[r]=1}),Nn[i[13]]=s+","+t,He(n,function(r){var o=r.split(":");Nn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");He("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){en.units[s]="px"});je.registerPlugin(Vd);var sn=je.registerPlugin(Vd)||je;sn.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qc="153",dr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wm=0,Il=1,bm=2,Hd=1,Xc=2,Zn=3,wi=0,qe=1,Qn=2,yi=0,Hr=1,Ul=2,Nl=3,Fl=4,Tm=5,Nr=100,Am=101,Rm=102,Ol=103,zl=104,Cm=200,Pm=201,Lm=202,Dm=203,Wd=204,qd=205,Im=206,Um=207,Nm=208,Fm=209,Om=210,zm=0,Bm=1,km=2,uc=3,Gm=4,Vm=5,Hm=6,Wm=7,jc=0,qm=1,Xm=2,ei=0,jm=1,Ym=2,Km=3,Zm=4,$m=5,Xd=300,Zr=301,$r=302,dc=303,fc=304,Vo=306,rr=1e3,En=1001,pc=1002,Ae=1003,Bl=1004,la=1005,hn=1006,Jm=1007,Us=1008,Mi=1009,Qm=1010,tg=1011,Yc=1012,jd=1013,gi=1014,_i=1015,Ns=1016,Yd=1017,Kd=1018,Ji=1020,eg=1021,wn=1023,ng=1024,ig=1025,Qi=1026,Jr=1027,rg=1028,Zd=1029,sg=1030,$d=1031,Jd=1033,ha=33776,ua=33777,da=33778,fa=33779,kl=35840,Gl=35841,Vl=35842,Hl=35843,og=36196,Wl=37492,ql=37496,Xl=37808,jl=37809,Yl=37810,Kl=37811,Zl=37812,$l=37813,Jl=37814,Ql=37815,th=37816,eh=37817,nh=37818,ih=37819,rh=37820,sh=37821,pa=36492,ag=36283,oh=36284,ah=36285,ch=36286,Qd=3e3,tr=3001,cg=3200,lg=3201,Kc=0,hg=1,er="",It="srgb",Ye="srgb-linear",tf="display-p3",ma=7680,ug=519,dg=512,fg=513,pg=514,mg=515,gg=516,_g=517,vg=518,xg=519,lh=35044,hh="300 es",mc=1035,ti=2e3,Oo=2001;class lr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,gc=180/Math.PI;function Bs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function De(s,t,e){return Math.max(t,Math.min(e,s))}function yg(s,t){return(s%t+t)%t}function _a(s,t,e){return(1-e)*s+e*t}function uh(s){return(s&s-1)===0&&s!==0}function _c(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ys(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],x=i[4],M=i[7],y=i[2],E=i[5],b=i[8];return r[0]=o*g+a*v+c*y,r[3]=o*m+a*x+c*E,r[6]=o*p+a*M+c*b,r[1]=l*g+h*v+d*y,r[4]=l*m+h*x+d*E,r[7]=l*p+h*M+d*b,r[2]=u*g+f*v+_*y,r[5]=u*m+f*x+_*E,r[8]=u*p+f*M+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,_=e*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Ot;function ef(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const dh={};function Ms(s){s in dh||(dh[s]=!0,console.warn(s))}function Wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Mg=new Ot().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Sg=new Ot().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Eg(s){return s.convertSRGBToLinear().applyMatrix3(Sg)}function wg(s){return s.applyMatrix3(Mg).convertLinearToSRGB()}const bg={[Ye]:s=>s,[It]:s=>s.convertSRGBToLinear(),[tf]:Eg},Tg={[Ye]:s=>s,[It]:s=>s.convertLinearToSRGB(),[tf]:wg},gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Ye},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=bg[t],i=Tg[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let pr;class nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pr===void 0&&(pr=Fs("canvas")),pr.width=t.width,pr.height=t.height;const n=pr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Wr(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wr(e[n]/255)*255):e[n]=Wr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ag=0;class rf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Bs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ya(i[o].image)):r.push(ya(i[o]))}else r=ya(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rg=0;class Xe extends lr{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=En,i=En,r=hn,o=Us,a=wn,c=Mi,l=Xe.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Bs(),this.name="",this.source=new rf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===tr?It:er),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?tr:Qd}set encoding(t){Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===tr?It:er}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Xd;Xe.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(f+1)/2,y=(p+1)/2,E=(h+u)/4,b=(d+g)/4,T=(_+m)/4;return x>M&&x>y?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=b/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=T/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=b/r,i=T/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sr extends lr{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===tr?It:er),this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sf extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cg extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let or=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||c!==u||l!==f||h!==_){let m=1-a;const p=c*u+l*f+h*_+d*g,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const y=Math.sqrt(x),E=Math.atan2(y,p*v);m=Math.sin(m*E)/y,a=Math.sin(a*E)/y}const M=a*v;if(c=c*m+u*M,l=l*m+f*M,h=h*m+_*M,d=d*m+g*M,m===1-a){const y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*d+c*f-l*u,t[e+1]=c*_+h*u+l*d-a*f,t[e+2]=l*_+h*f+a*u-c*d,t[e+3]=h*_-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"YZX":this._x=u*h*d+l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d-u*f*_;break;case"XZY":this._x=u*h*d-l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-r*i,d=c*i+r*n-o*e,u=-r*e-o*n-a*i;return this.x=l*c+u*-r+h*-a-d*-o,this.y=h*c+u*-o+d*-r-l*-a,this.z=d*c+u*-a+l*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new V,fh=new or;class ks{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox),mr.applyMatrix4(t.matrixWorld),this.union(mr);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Hn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Hn)}else i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox),mr.applyMatrix4(t.matrixWorld),this.union(mr)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Ks.subVectors(this.max,os),gr.subVectors(t.a,os),_r.subVectors(t.b,os),vr.subVectors(t.c,os),oi.subVectors(_r,gr),ai.subVectors(vr,_r),Li.subVectors(gr,vr);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Li.z,Li.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Li.z,0,-Li.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Li.y,Li.x,0];return!Sa(e,gr,_r,vr,Ks)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,gr,_r,vr,Ks))?!1:(Zs.crossVectors(oi,ai),e=[Zs.x,Zs.y,Zs.z],Sa(e,gr,_r,vr,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new V,new V,new V,new V,new V,new V,new V,new V],Hn=new V,mr=new ks,gr=new V,_r=new V,vr=new V,oi=new V,ai=new V,Li=new V,os=new V,Ks=new V,Zs=new V,Di=new V;function Sa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),c=t.dot(Di),l=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Pg=new ks,as=new V,Ea=new V;let Zc=class{constructor(t=new V,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(Ea)),this.expandByPoint(as.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Wn=new V,wa=new V,$s=new V,ci=new V,ba=new V,Js=new V,Ta=new V;let of=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wa.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(wa);const r=t.distanceTo(e)*.5,o=-this.direction.dot($s),a=ci.dot(this.direction),c=-ci.dot($s),l=ci.lengthSq(),h=Math.abs(1-o*o);let d,u,f,_;if(h>0)if(d=o*c-a,u=o*a-c,_=r*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(wa).addScaledVector($s,u),f}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,i,r){ba.subVectors(e,t),Js.subVectors(n,t),Ta.crossVectors(ba,Js);let o=this.direction.dot(Ta),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const c=a*this.direction.dot(Js.crossVectors(ci,Js));if(c<0)return null;const l=a*this.direction.dot(ba.cross(ci));if(l<0||c+l>o)return null;const h=-a*ci.dot(Ta);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class _e{constructor(t,e,n,i,r,o,a,c,l,h,d,u,f,_,g,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,f,_,g,m)}set(t,e,n,i,r,o,a,c,l,h,d,u,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/xr.setFromMatrixColumn(t,0).length(),r=1/xr.setFromMatrixColumn(t,1).length(),o=1/xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,_=a*h,g=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=u-g*l,e[9]=-a*c,e[2]=g-u*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,_=l*h,g=l*d;e[0]=u+g*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,_=l*h,g=l*d;e[0]=u-g*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,_=a*h,g=a*d;e[0]=c*h,e[4]=_*l-f,e[8]=u*l+g,e[1]=c*d,e[5]=g*l+u,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+_,e[10]=u-g*d}else if(t.order==="XZY"){const u=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lg,t,Dg)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),li.crossVectors(n,$e),li.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),li.crossVectors(n,$e)),li.normalize(),Qs.crossVectors($e,li),i[0]=li.x,i[4]=Qs.x,i[8]=$e.x,i[1]=li.y,i[5]=Qs.y,i[9]=$e.y,i[2]=li.z,i[6]=Qs.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],x=n[7],M=n[11],y=n[15],E=i[0],b=i[4],T=i[8],S=i[12],w=i[1],O=i[5],B=i[9],C=i[13],I=i[2],D=i[6],F=i[10],k=i[14],G=i[3],W=i[7],j=i[11],Q=i[15];return r[0]=o*E+a*w+c*I+l*G,r[4]=o*b+a*O+c*D+l*W,r[8]=o*T+a*B+c*F+l*j,r[12]=o*S+a*C+c*k+l*Q,r[1]=h*E+d*w+u*I+f*G,r[5]=h*b+d*O+u*D+f*W,r[9]=h*T+d*B+u*F+f*j,r[13]=h*S+d*C+u*k+f*Q,r[2]=_*E+g*w+m*I+p*G,r[6]=_*b+g*O+m*D+p*W,r[10]=_*T+g*B+m*F+p*j,r[14]=_*S+g*C+m*k+p*Q,r[3]=v*E+x*w+M*I+y*G,r[7]=v*b+x*O+M*D+y*W,r[11]=v*T+x*B+M*F+y*j,r[15]=v*S+x*C+M*k+y*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+g*(+e*c*f-e*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=d*m*l-g*u*l+g*c*f-a*m*f-d*c*p+a*u*p,x=_*u*l-h*m*l-_*c*f+o*m*f+h*c*p-o*u*p,M=h*g*l-_*d*l+_*a*f-o*g*f-h*a*p+o*d*p,y=_*d*c-h*g*c-_*a*u+o*g*u+h*a*m-o*d*m,E=e*v+n*x+i*M+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(g*u*r-d*m*r-g*i*f+n*m*f+d*i*p-n*u*p)*b,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*b,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*b,t[4]=x*b,t[5]=(h*m*r-_*u*r+_*i*f-e*m*f-h*i*p+e*u*p)*b,t[6]=(_*c*r-o*m*r-_*i*l+e*m*l+o*i*p-e*c*p)*b,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*f+e*c*f)*b,t[8]=M*b,t[9]=(_*d*r-h*g*r-_*n*f+e*g*f+h*n*p-e*d*p)*b,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*b,t[12]=y*b,t[13]=(h*g*i-_*d*i+_*n*u-e*g*u-h*n*m+e*d*m)*b,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*m-e*a*m)*b,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,_=r*d,g=o*h,m=o*d,p=a*d,v=c*l,x=c*h,M=c*d,y=n.x,E=n.y,b=n.z;return i[0]=(1-(g+p))*y,i[1]=(f+M)*y,i[2]=(_-x)*y,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(u+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(_+x)*b,i[9]=(m-v)*b,i[10]=(1-(u+g))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=xr.set(i[0],i[1],i[2]).length();const o=xr.set(i[4],i[5],i[6]).length(),a=xr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],_n.copy(this);const l=1/r,h=1/o,d=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ti){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,_;if(a===ti)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Oo)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ti){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,f=(n+i)*h;let _,g;if(a===ti)_=(o+r)*d,g=-2*d;else if(a===Oo)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xr=new V,_n=new _e,Lg=new V(0,0,0),Dg=new V(1,1,1),li=new V,Qs=new V,$e=new V,ph=new _e,mh=new or;class Ho{constructor(t=0,e=0,n=0,i=Ho.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ho.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ig=0;const gh=new V,yr=new or,qn=new _e,to=new V,cs=new V,Ug=new V,Ng=new or,_h=new V(1,0,0),vh=new V(0,1,0),xh=new V(0,0,1),Fg={type:"added"},yh={type:"removed"};class Ce extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new V,e=new Ho,n=new or,i=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Ot}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(xh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(cs,to,this.up):qn.lookAt(to,cs,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),yr.setFromRotationMatrix(qn),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Fg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(yh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Ug),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ce.DEFAULT_UP=new V(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new V,Xn=new V,Aa=new V,jn=new V,Mr=new V,Sr=new V,Mh=new V,Ra=new V,Ca=new V,Pa=new V;let eo=!1;class Sn{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Xn.subVectors(n,e),Aa.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Xn),c=vn.dot(Aa),l=Xn.dot(Xn),h=Xn.dot(Aa),d=o*l-a*a;if(d===0)return r.set(-2,-1,-1);const u=1/d,f=(l*c-a*h)*u,_=(o*h-a*c)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(t,e,n,i,r,o,a,c){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,jn),c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Xn.subVectors(t,e),vn.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),vn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Mr.subVectors(i,n),Sr.subVectors(r,n),Ra.subVectors(t,n);const c=Mr.dot(Ra),l=Sr.dot(Ra);if(c<=0&&l<=0)return e.copy(n);Ca.subVectors(t,i);const h=Mr.dot(Ca),d=Sr.dot(Ca);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Mr,o);Pa.subVectors(t,r);const f=Mr.dot(Pa),_=Sr.dot(Pa);if(_>=0&&f<=_)return e.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Sr,a);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Mh.subVectors(r,i),a=(d-h)/(d-h+(f-_)),e.copy(i).addScaledVector(Mh,a);const p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(Mr,o).addScaledVector(Sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Og=0,hr=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Hr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wd,this.blendDst=qd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},no={h:0,s:0,l:0};function La(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=It){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,gn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=gn.workingColorSpace){return this.r=t,this.g=e,this.b=n,gn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=gn.workingColorSpace){if(t=yg(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=La(o,r,t+1/3),this.g=La(o,r,t),this.b=La(o,r,t-1/3)}return gn.toWorkingColorSpace(this,i),this}setStyle(t,e=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=It){const n=af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}copyLinearToSRGB(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=It){return gn.fromWorkingColorSpace(Le.copy(this),t),Math.round(De(Le.r*255,0,255))*65536+Math.round(De(Le.g*255,0,255))*256+Math.round(De(Le.b*255,0,255))}getHexString(t=It){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=gn.workingColorSpace){gn.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=gn.workingColorSpace){return gn.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=It){gn.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==It?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),xn.h+=t,xn.s+=e,xn.l+=n,this.setHSL(xn.h,xn.s,xn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(no);const n=_a(xn.h,no.h,e),i=_a(xn.s,no.s,e),r=_a(xn.l,no.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Ht;Ht.NAMES=af;class Ss extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new V,io=new Tt;class Bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lh,this.updateRange={offset:0,count:-1},this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class cf extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lf extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nn extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zg=0;const on=new _e,Da=new Ce,Er=new V,Je=new ks,ls=new ks,Se=new V;class si extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?lf:cf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Je.min,ls.min),Je.expandByPoint(Se),Se.addVectors(Je.max,ls.max),Je.expandByPoint(Se)):(Je.expandByPoint(ls.min),Je.expandByPoint(ls.max))}Je.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),c&&(Er.fromBufferAttribute(t,l),Se.add(Er)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new V,h[w]=new V;const d=new V,u=new V,f=new V,_=new Tt,g=new Tt,m=new Tt,p=new V,v=new V;function x(w,O,B){d.fromArray(i,w*3),u.fromArray(i,O*3),f.fromArray(i,B*3),_.fromArray(o,w*2),g.fromArray(o,O*2),m.fromArray(o,B*2),u.sub(d),f.sub(d),g.sub(_),m.sub(_);const C=1/(g.x*m.y-m.x*g.y);isFinite(C)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(C),v.copy(f).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(C),l[w].add(p),l[O].add(p),l[B].add(p),h[w].add(v),h[O].add(v),h[B].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,O=M.length;w<O;++w){const B=M[w],C=B.start,I=B.count;for(let D=C,F=C+I;D<F;D+=3)x(n[D+0],n[D+1],n[D+2])}const y=new V,E=new V,b=new V,T=new V;function S(w){b.fromArray(r,w*3),T.copy(b);const O=l[w];y.copy(O),y.sub(b.multiplyScalar(b.dot(O))).normalize(),E.crossVectors(T,O);const C=E.dot(h[w])<0?-1:1;c[w*4]=y.x,c[w*4+1]=y.y,c[w*4+2]=y.z,c[w*4+3]=C}for(let w=0,O=M.length;w<O;++w){const B=M[w],C=B.start,I=B.count;for(let D=C,F=C+I;D<F;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new V,r=new V,o=new V,a=new V,c=new V,l=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)u[_++]=l[f++]}return new Bn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new si,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sh=new _e,Ii=new of,ro=new Zc,Eh=new V,wr=new V,br=new V,Tr=new V,Ia=new V,so=new V,oo=new Tt,ao=new Tt,co=new Tt,wh=new V,bh=new V,Th=new V,lo=new V,ho=new V;class le extends Ce{constructor(t=new si,e=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Ia.fromBufferAttribute(d,t),o?so.addScaledVector(Ia,h):so.addScaledVector(Ia.sub(e),h))}e.add(so)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(ro.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ro,Eh)===null||Ii.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(Sh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,y=x;M<y;M+=3){const E=a.getX(M),b=a.getX(M+1),T=a.getX(M+2);i=uo(this,p,t,n,l,h,d,E,b,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=uo(this,o,t,n,l,h,d,v,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,y=x;M<y;M+=3){const E=M,b=M+1,T=M+2;i=uo(this,p,t,n,l,h,d,E,b,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,x=m+1,M=m+2;i=uo(this,o,t,n,l,h,d,v,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Bg(s,t,e,n,i,r,o,a){let c;if(t.side===qe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===wi,a),c===null)return null;ho.copy(a),ho.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ho);return l<e.near||l>e.far?null:{distance:l,point:ho.clone(),object:s}}function uo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,wr),s.getVertexPosition(c,br),s.getVertexPosition(l,Tr);const h=Bg(s,t,e,n,wr,br,Tr,lo);if(h){i&&(oo.fromBufferAttribute(i,a),ao.fromBufferAttribute(i,c),co.fromBufferAttribute(i,l),h.uv=Sn.getInterpolation(lo,wr,br,Tr,oo,ao,co,new Tt)),r&&(oo.fromBufferAttribute(r,a),ao.fromBufferAttribute(r,c),co.fromBufferAttribute(r,l),h.uv1=Sn.getInterpolation(lo,wr,br,Tr,oo,ao,co,new Tt),h.uv2=h.uv1),o&&(wh.fromBufferAttribute(o,a),bh.fromBufferAttribute(o,c),Th.fromBufferAttribute(o,l),h.normal=Sn.getInterpolation(lo,wr,br,Tr,wh,bh,Th,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new V,materialIndex:0};Sn.getNormal(wr,br,Tr,d.normal),h.face=d}return h}class ni extends si{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new nn(l,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function _(g,m,p,v,x,M,y,E,b,T,S){const w=M/b,O=y/T,B=M/2,C=y/2,I=E/2,D=b+1,F=T+1;let k=0,G=0;const W=new V;for(let j=0;j<F;j++){const Q=j*O-C;for(let N=0;N<D;N++){const Z=N*w-B;W[g]=Z*v,W[m]=Q*x,W[p]=I,l.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(N/b),d.push(1-j/T),k+=1}}for(let j=0;j<T;j++)for(let Q=0;Q<b;Q++){const N=u+Q+D*j,Z=u+Q+D*(j+1),et=u+(Q+1)+D*(j+1),it=u+(Q+1)+D*j;c.push(N,Z,it),c.push(Z,et,it),G+=6}a.addGroup(f,G,S),f+=G,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=Qr(s[e]);for(const i in n)t[i]=n[i]}return t}function kg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function hf(s){return s.getRenderTarget()===null?s.outputColorSpace:Ye}const Gg={clone:Qr,merge:ze};var Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uf extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends uf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gc*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ga*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ar=-90,Rr=1;class Wg extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Be(Ar,Rr,t,e);i.layers=this.layers,this.add(i);const r=new Be(Ar,Rr,t,e);r.layers=this.layers,this.add(r);const o=new Be(Ar,Rr,t,e);o.layers=this.layers,this.add(o);const a=new Be(Ar,Rr,t,e);a.layers=this.layers,this.add(a);const c=new Be(Ar,Rr,t,e);c.layers=this.layers,this.add(c);const l=new Be(Ar,Rr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,c,l]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=ei,t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Jc extends Xe{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Zr,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qg extends sr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===tr?It:er),this.texture=new Jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ni(5,5,5),r=new ar({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:yi});r.uniforms.tEquirect.value=e;const o=new le(i,r),a=e.minFilter;return e.minFilter===Us&&(e.minFilter=hn),new Wg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ua=new V,Xg=new V,jg=new Ot;let ki=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ua.subVectors(n,e).cross(Xg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jg.getNormalMatrix(t),i=this.coplanarPoint(Ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ui=new Zc,fo=new V;class Qc{constructor(t=new ki,e=new ki,n=new ki,i=new ki,r=new ki,o=new ki){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,u-l,m-f,M-p).normalize(),n[1].setComponents(c+r,u+l,m+f,M+p).normalize(),n[2].setComponents(c+o,u+h,m+_,M+v).normalize(),n[3].setComponents(c-o,u-h,m-_,M-v).normalize(),n[4].setComponents(c-a,u-d,m-g,M-x).normalize(),e===ti)n[5].setComponents(c+a,u+d,m+g,M+x).normalize();else if(e===Oo)n[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fo.x=i.normal.x>0?t.max.x:t.min.x,fo.y=i.normal.y>0?t.max.y:t.min.y,fo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function df(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yg(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,d){const u=h.array,f=h.updateRange;s.bindBuffer(d,l),f.count===-1?s.bufferSubData(d,0,u):(e?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(r(d.buffer,l,h),d.version=l.version)}return{get:o,remove:a,update:c}}class Gs extends si{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*u-o;for(let x=0;x<l;x++){const M=x*d-r;_.push(M,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,M=v+l*(p+1),y=v+1+l*(p+1),E=v+1+l*p;f.push(x,M,E),f.push(M,y,E)}this.setIndex(f),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_="vec3 transformed = vec3( position );",n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,r_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,p_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",S_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,z_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,W_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,J_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,o0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k0=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,J0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nt={alphamap_fragment:Kg,alphamap_pars_fragment:Zg,alphatest_fragment:$g,alphatest_pars_fragment:Jg,aomap_fragment:Qg,aomap_pars_fragment:t_,begin_vertex:e_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:r_,bumpmap_pars_fragment:s_,clipping_planes_fragment:o_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:c_,clipping_planes_vertex:l_,color_fragment:h_,color_pars_fragment:u_,color_pars_vertex:d_,color_vertex:f_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:g_,displacementmap_pars_vertex:__,displacementmap_vertex:v_,emissivemap_fragment:x_,emissivemap_pars_fragment:y_,encodings_fragment:M_,encodings_pars_fragment:S_,envmap_fragment:E_,envmap_common_pars_fragment:w_,envmap_pars_fragment:b_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:z_,envmap_vertex:A_,fog_vertex:R_,fog_pars_vertex:C_,fog_fragment:P_,fog_pars_fragment:L_,gradientmap_pars_fragment:D_,lightmap_fragment:I_,lightmap_pars_fragment:U_,lights_lambert_fragment:N_,lights_lambert_pars_fragment:F_,lights_pars_begin:O_,lights_toon_fragment:B_,lights_toon_pars_fragment:k_,lights_phong_fragment:G_,lights_phong_pars_fragment:V_,lights_physical_fragment:H_,lights_physical_pars_fragment:W_,lights_fragment_begin:q_,lights_fragment_maps:X_,lights_fragment_end:j_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:K_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:$_,map_fragment:J_,map_pars_fragment:Q_,map_particle_fragment:t0,map_particle_pars_fragment:e0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphcolor_vertex:r0,morphnormal_vertex:s0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:c0,normal_fragment_maps:l0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,output_fragment:v0,packing:x0,premultiplied_alpha_fragment:y0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:E0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:I0,specularmap_fragment:U0,specularmap_pars_fragment:N0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:z0,transmission_pars_fragment:B0,uv_pars_fragment:k0,uv_pars_vertex:G0,uv_vertex:V0,worldpos_vertex:H0,background_vert:W0,background_frag:q0,backgroundCube_vert:X0,backgroundCube_frag:j0,cube_vert:Y0,cube_frag:K0,depth_vert:Z0,depth_frag:$0,distanceRGBA_vert:J0,distanceRGBA_frag:Q0,equirect_vert:tv,equirect_frag:ev,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:rv,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:cv,meshmatcap_frag:lv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:dv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:_v,points_vert:vv,points_frag:xv,shadow_vert:yv,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:Ev},ct={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},In={basic:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ze([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ze([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ze([ct.points,ct.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ze([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ze([ct.common,ct.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ze([ct.sprite,ct.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ze([ct.common,ct.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ze([ct.lights,ct.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};In.physical={uniforms:ze([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const po={r:0,b:0,g:0};function wv(s,t,e,n,i,r,o){const a=new Ht(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function _(m,p){let v=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,c):x&&x.isColor&&(g(x,1),v=!0),s.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),v=!0;break}(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vo)?(h===void 0&&(h=new le(new ni(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Qr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=x.colorSpace!==It,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new le(new Gs(2,2),new ar({name:"BackgroundMaterial",uniforms:Qr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=x.colorSpace!==It,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB(po,hf(s)),n.buffers.color.setClear(po.r,po.g,po.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function bv(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function d(I,D,F,k,G){let W=!1;if(o){const j=g(k,F,D);l!==j&&(l=j,f(l.object)),W=p(I,k,F,G),W&&v(I,k,F,G)}else{const j=D.wireframe===!0;(l.geometry!==k.id||l.program!==F.id||l.wireframe!==j)&&(l.geometry=k.id,l.program=F.id,l.wireframe=j,W=!0)}G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,T(I,D,F,k),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,D,F){const k=F.wireframe===!0;let G=a[I.id];G===void 0&&(G={},a[I.id]=G);let W=G[D.id];W===void 0&&(W={},G[D.id]=W);let j=W[k];return j===void 0&&(j=m(u()),W[k]=j),j}function m(I){const D=[],F=[],k=[];for(let G=0;G<i;G++)D[G]=0,F[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:I,attributes:{},index:null}}function p(I,D,F,k){const G=l.attributes,W=D.attributes;let j=0;const Q=F.getAttributes();for(const N in Q)if(Q[N].location>=0){const et=G[N];let it=W[N];if(it===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),et===void 0||et.attribute!==it||it&&et.data!==it.data)return!0;j++}return l.attributesNum!==j||l.index!==k}function v(I,D,F,k){const G={},W=D.attributes;let j=0;const Q=F.getAttributes();for(const N in Q)if(Q[N].location>=0){let et=W[N];et===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));const it={};it.attribute=et,et&&et.data&&(it.data=et.data),G[N]=it,j++}l.attributes=G,l.attributesNum=j,l.index=k}function x(){const I=l.newAttributes;for(let D=0,F=I.length;D<F;D++)I[D]=0}function M(I){y(I,0)}function y(I,D){const F=l.newAttributes,k=l.enabledAttributes,G=l.attributeDivisors;F[I]=1,k[I]===0&&(s.enableVertexAttribArray(I),k[I]=1),G[I]!==D&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),G[I]=D)}function E(){const I=l.newAttributes,D=l.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==I[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function b(I,D,F,k,G,W,j){j===!0?s.vertexAttribIPointer(I,D,F,G,W):s.vertexAttribPointer(I,D,F,k,G,W)}function T(I,D,F,k){if(n.isWebGL2===!1&&(I.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const G=k.attributes,W=F.getAttributes(),j=D.defaultAttributeValues;for(const Q in W){const N=W[Q];if(N.location>=0){let Z=G[Q];if(Z===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const et=Z.normalized,it=Z.itemSize,lt=e.get(Z);if(lt===void 0)continue;const dt=lt.buffer,At=lt.type,Mt=lt.bytesPerElement,zt=n.isWebGL2===!0&&(At===s.INT||At===s.UNSIGNED_INT||Z.gpuType===jd);if(Z.isInterleavedBufferAttribute){const Bt=Z.data,q=Bt.stride,pe=Z.offset;if(Bt.isInstancedInterleavedBuffer){for(let St=0;St<N.locationSize;St++)y(N.location+St,Bt.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let St=0;St<N.locationSize;St++)M(N.location+St);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let St=0;St<N.locationSize;St++)b(N.location+St,it/N.locationSize,At,et,q*Mt,(pe+it/N.locationSize*St)*Mt,zt)}else{if(Z.isInstancedBufferAttribute){for(let Bt=0;Bt<N.locationSize;Bt++)y(N.location+Bt,Z.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Bt=0;Bt<N.locationSize;Bt++)M(N.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let Bt=0;Bt<N.locationSize;Bt++)b(N.location+Bt,it/N.locationSize,At,et,it*Mt,it/N.locationSize*Bt*Mt,zt)}}else if(j!==void 0){const et=j[Q];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(N.location,et);break;case 3:s.vertexAttrib3fv(N.location,et);break;case 4:s.vertexAttrib4fv(N.location,et);break;default:s.vertexAttrib1fv(N.location,et)}}}}E()}function S(){B();for(const I in a){const D=a[I];for(const F in D){const k=D[F];for(const G in k)_(k[G].object),delete k[G];delete D[F]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;const D=a[I.id];for(const F in D){const k=D[F];for(const G in k)_(k[G].object),delete k[G];delete D[F]}delete a[I.id]}function O(I){for(const D in a){const F=a[D];if(F[I.id]===void 0)continue;const k=F[I.id];for(const G in k)_(k[G].object),delete k[G];delete F[I.id]}}function B(){C(),h=!0,l!==c&&(l=c,f(l.object))}function C(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:B,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function Tv(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),e.update(h,r,1)}function c(l,h,d){if(d===0)return;let u,f;if(i)u=s,f="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](r,l,h,d),e.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=c}function Av(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=o||t.has("OES_texture_float"),y=x&&M,E=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:E}}function Rv(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ki,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,x=v*4;let M=p.clippingState||null;c.value=M,M=h(_,u,x,f);for(let y=0;y!==x;++y)M[y]=e[y];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==g;++x,M+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Cv(s){let t=new WeakMap;function e(o,a){return a===dc?o.mapping=Zr:a===fc&&(o.mapping=$r),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===dc||a===fc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new qg(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ff extends uf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Br=4,Ah=[.125,.215,.35,.446,.526,.582],Vi=20,Na=new ff,Rh=new Ht;let Fa=null;const Gi=(1+Math.sqrt(5))/2,Cr=1/Gi,Ch=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Gi,Cr),new V(0,Gi,-Cr),new V(Cr,0,Gi),new V(-Cr,0,Gi),new V(Gi,Cr,0),new V(-Gi,Cr,0)];class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa),t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zr||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ns,format:wn,colorSpace:Ye,depthBuffer:!1},i=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(r)),this._blurMaterial=Lv(r,t,e)}return i}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,i){const a=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Rh),h.toneMapping=ei,h.autoClear=!1;const f=new Ss({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new le(new ni,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Rh),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;mo(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zr||t.mapping===$r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;mo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ch[(i-1)%Ch.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new le(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let v=0;for(let b=0;b<Vi;++b){const T=b/g,S=Math.exp(-T*T/2);p.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;const M=this._sizeLods[i],y=3*M*(i>x-Br?i-x+Br:0),E=4*(this._cubeSize-M);mo(e,y,E,3*M,2*M),c.setRenderTarget(e),c.render(d,Na)}}function Pv(s){const t=[],e=[],n=[];let i=s;const r=s-Br+1+Ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Br?c=Ah[o-s+Br-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),x=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,T=E>2?0:-1,S=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];v.set(S,g*_*E),x.set(u,m*_*E);const w=[E,E,E,E,E,E];M.set(w,p*_*E)}const y=new si;y.setAttribute("position",new Bn(v,g)),y.setAttribute("uv",new Bn(x,m)),y.setAttribute("faceIndex",new Bn(M,p)),t.push(y),i>Br&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lh(s,t,e){const n=new sr(s,t,e);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Lv(s,t,e){const n=new Float32Array(Vi),i=new V(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Dh(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ih(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dv(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===dc||c===fc,h=c===Zr||c===$r;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Ph(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ph(s));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Iv(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Uv(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const _ in u)t.update(u[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,M=v.length;x<M;x+=3){const y=v[x+0],E=v[x+1],b=v[x+2];u.push(y,E,E,b,b,y)}}else{const v=_.array;g=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const y=x+0,E=x+1,b=x+2;u.push(y,E,E,b,b,y)}}const m=new(ef(u)?lf:cf)(u,1);m.version=g;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Nv(s,t,e,n){const i=n.isWebGL2;let r;function o(u){r=u}let a,c;function l(u){a=u.type,c=u.bytesPerElement}function h(u,f){s.drawElements(r,f,a,u*c),e.update(f,r,1)}function d(u,f,_){if(_===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,f,a,u*c,_),e.update(f,r,_)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function Fv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ov(s,t){return s[0]-t[0]}function zv(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Bv(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new we,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let D=function(){C.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var f=D;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),y===!0&&(S=3);let w=h.attributes.position.count*S,O=1;w>t.maxTextureSize&&(O=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const B=new Float32Array(w*O*4*g),C=new sf(B,w,O,g);C.type=_i,C.needsUpdate=!0;const I=S*4;for(let F=0;F<g;F++){const k=E[F],G=b[F],W=T[F],j=w*O*4*F;for(let Q=0;Q<k.count;Q++){const N=Q*I;x===!0&&(o.fromBufferAttribute(k,Q),B[j+N+0]=o.x,B[j+N+1]=o.y,B[j+N+2]=o.z,B[j+N+3]=0),M===!0&&(o.fromBufferAttribute(G,Q),B[j+N+4]=o.x,B[j+N+5]=o.y,B[j+N+6]=o.z,B[j+N+7]=0),y===!0&&(o.fromBufferAttribute(W,Q),B[j+N+8]=o.x,B[j+N+9]=o.y,B[j+N+10]=o.z,B[j+N+11]=W.itemSize===4?o.w:1)}}m={count:g,texture:C,size:new Tt(w,O)},r.set(h,m),h.addEventListener("dispose",D)}let p=0;for(let x=0;x<u.length;x++)p+=u[x];const v=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=u===void 0?0:u.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];n[h.id]=g}for(let M=0;M<_;M++){const y=g[M];y[0]=M,y[1]=u[M]}g.sort(zv);for(let M=0;M<8;M++)M<_&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Ov);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const y=a[M],E=y[0],b=y[1];E!==Number.MAX_SAFE_INTEGER&&b?(m&&h.getAttribute("morphTarget"+M)!==m[E]&&h.setAttribute("morphTarget"+M,m[E]),p&&h.getAttribute("morphNormal"+M)!==p[E]&&h.setAttribute("morphNormal"+M,p[E]),i[M]=b,v+=b):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function kv(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);return i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER)),d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const pf=new Xe,mf=new sf,gf=new Cg,_f=new Jc,Uh=[],Nh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),zh=new Float32Array(4);function ts(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Uh[i];if(r===void 0&&(r=new Float32Array(i),Uh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wo(s,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Gv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Vv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),xe(e,t)}}function Hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),xe(e,t)}}function Wv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),xe(e,t)}}function qv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;zh.set(n),s.uniformMatrix2fv(this.addr,!1,zh),xe(e,n)}}function Xv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Oh.set(n),s.uniformMatrix3fv(this.addr,!1,Oh),xe(e,n)}}function jv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Fh.set(n),s.uniformMatrix4fv(this.addr,!1,Fh),xe(e,n)}}function Yv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Kv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),xe(e,t)}}function Zv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),xe(e,t)}}function $v(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),xe(e,t)}}function Jv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Qv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),xe(e,t)}}function tx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),xe(e,t)}}function ex(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),xe(e,t)}}function nx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||pf,i)}function ix(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gf,i)}function rx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_f,i)}function sx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mf,i)}function ox(s){switch(s){case 5126:return Gv;case 35664:return Vv;case 35665:return Hv;case 35666:return Wv;case 35674:return qv;case 35675:return Xv;case 35676:return jv;case 5124:case 35670:return Yv;case 35667:case 35671:return Kv;case 35668:case 35672:return Zv;case 35669:case 35673:return $v;case 5125:return Jv;case 36294:return Qv;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(s,t){s.uniform1fv(this.addr,t)}function cx(s,t){const e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function lx(s,t){const e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function hx(s,t){const e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function ux(s,t){const e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function dx(s,t){const e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fx(s,t){const e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function px(s,t){s.uniform1iv(this.addr,t)}function mx(s,t){s.uniform2iv(this.addr,t)}function gx(s,t){s.uniform3iv(this.addr,t)}function _x(s,t){s.uniform4iv(this.addr,t)}function vx(s,t){s.uniform1uiv(this.addr,t)}function xx(s,t){s.uniform2uiv(this.addr,t)}function yx(s,t){s.uniform3uiv(this.addr,t)}function Mx(s,t){s.uniform4uiv(this.addr,t)}function Sx(s,t,e){const n=this.cache,i=t.length,r=Wo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||pf,r[o])}function Ex(s,t,e){const n=this.cache,i=t.length,r=Wo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||gf,r[o])}function wx(s,t,e){const n=this.cache,i=t.length,r=Wo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_f,r[o])}function bx(s,t,e){const n=this.cache,i=t.length,r=Wo(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||mf,r[o])}function Tx(s){switch(s){case 5126:return ax;case 35664:return cx;case 35665:return lx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return xx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return bx}}class Ax{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=ox(e.type)}}class Rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Tx(e.type)}}class Cx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Bh(s,t){s.seq.push(t),s.map[t.id]=t}function Px(s,t,e){const n=s.name,i=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),o=Oa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Bh(e,l===void 0?new Ax(a,s,t):new Rx(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Cx(a),Bh(e,d)),e=d}}}class To{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Px(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function kh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Lx=0;function Dx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ix(s){switch(s){case Ye:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Gh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Dx(s.getShaderSource(t),o)}else return i}function Ux(s,t){const e=Ix(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Nx(s,t){let e;switch(t){case jm:e="Linear";break;case Ym:e="Reinhard";break;case Km:e="OptimizedCineon";break;case Zm:e="ACESFilmic";break;case $m:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Fx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function Ox(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ms(s){return s!==""}function Vh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(s){return s.replace(Bx,kx)}function kx(s,t){const e=Nt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return vc(e)}const Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(s){return s.replace(Gx,Vx)}function Vx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zr:case $r:t="ENVMAP_TYPE_CUBE";break;case Vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $r:t="ENVMAP_MODE_REFRACTION";break}return t}function Xx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jc:t="ENVMAP_BLENDING_MULTIPLY";break;case qm:t="ENVMAP_BLENDING_MIX";break;case Xm:t="ENVMAP_BLENDING_ADD";break}return t}function jx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Yx(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Hx(e),l=Wx(e),h=qx(e),d=Xx(e),u=jx(e),f=e.isWebGL2?"":Fx(e),_=Ox(r),g=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ms).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(m=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[f,qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Nt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.encodings_pars_fragment,Ux("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),o=vc(o),o=Vh(o,e),o=Hh(o,e),a=vc(a),a=Vh(a,e),a=Hh(a,e),o=Wh(o),a=Wh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,M=v+p+a,y=kh(i,i.VERTEX_SHADER,x),E=kh(i,i.FRAGMENT_SHADER,M);if(i.attachShader(g,y),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(g).trim(),w=i.getShaderInfoLog(y).trim(),O=i.getShaderInfoLog(E).trim();let B=!0,C=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,y,E);else{const I=Gh(i,y,"vertex"),D=Gh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+I+`
`+D)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||O==="")&&(C=!1);C&&(this.diagnostics={runnable:B,programLog:S,vertexShader:{log:w,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(y),i.deleteShader(E);let b;this.getUniforms=function(){return b===void 0&&(b=new To(i,g)),b};let T;return this.getAttributes=function(){return T===void 0&&(T=zx(i,g)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}let Kx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $x(t),e.set(t,n)),n}}class $x{constructor(t){this.id=Kx++,this.code=t,this.usedTimes=0}}function Jx(s,t,e,n,i,r,o){const a=new $c,c=new Zx,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,w,O,B,C){const I=B.fog,D=C.geometry,F=S.isMeshStandardMaterial?B.environment:null,k=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),G=k&&k.mapping===Vo?k.image.height:null,W=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=j!==void 0?j.length:0;let N=0;D.morphAttributes.position!==void 0&&(N=1),D.morphAttributes.normal!==void 0&&(N=2),D.morphAttributes.color!==void 0&&(N=3);let Z,et,it,lt;if(W){const he=In[W];Z=he.vertexShader,et=he.fragmentShader}else Z=S.vertexShader,et=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),lt=c.getFragmentShaderID(S);const dt=s.getRenderTarget(),At=C.isInstancedMesh===!0,Mt=!!S.map,zt=!!S.matcap,Bt=!!k,q=!!S.aoMap,pe=!!S.lightMap,St=!!S.bumpMap,Dt=!!S.normalMap,Et=!!S.displacementMap,Zt=!!S.emissiveMap,Ft=!!S.metalnessMap,Pt=!!S.roughnessMap,Yt=S.anisotropy>0,me=S.clearcoat>0,ye=S.iridescence>0,L=S.sheen>0,A=S.transmission>0,$=Yt&&!!S.anisotropyMap,ot=me&&!!S.clearcoatMap,st=me&&!!S.clearcoatNormalMap,U=me&&!!S.clearcoatRoughnessMap,nt=ye&&!!S.iridescenceMap,rt=ye&&!!S.iridescenceThicknessMap,K=L&&!!S.sheenColorMap,gt=L&&!!S.sheenRoughnessMap,xt=!!S.specularMap,vt=!!S.specularColorMap,_t=!!S.specularIntensityMap,ft=A&&!!S.transmissionMap,bt=A&&!!S.thicknessMap,Vt=!!S.gradientMap,z=!!S.alphaMap,ht=S.alphaTest>0,Y=!!S.extensions,at=!!D.attributes.uv1,ut=!!D.attributes.uv2,Xt=!!D.attributes.uv3;return{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:et,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:At,instancingColor:At&&C.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ye,map:Mt,matcap:zt,envMap:Bt,envMapMode:Bt&&k.mapping,envMapCubeUVHeight:G,aoMap:q,lightMap:pe,bumpMap:St,normalMap:Dt,displacementMap:u&&Et,emissiveMap:Zt,normalMapObjectSpace:Dt&&S.normalMapType===hg,normalMapTangentSpace:Dt&&S.normalMapType===Kc,metalnessMap:Ft,roughnessMap:Pt,anisotropy:Yt,anisotropyMap:$,clearcoat:me,clearcoatMap:ot,clearcoatNormalMap:st,clearcoatRoughnessMap:U,iridescence:ye,iridescenceMap:nt,iridescenceThicknessMap:rt,sheen:L,sheenColorMap:K,sheenRoughnessMap:gt,specularMap:xt,specularColorMap:vt,specularIntensityMap:_t,transmission:A,transmissionMap:ft,thicknessMap:bt,gradientMap:Vt,opaque:S.transparent===!1&&S.blending===Hr,alphaMap:z,alphaTest:ht,combine:S.combine,mapUv:Mt&&g(S.map.channel),aoMapUv:q&&g(S.aoMap.channel),lightMapUv:pe&&g(S.lightMap.channel),bumpMapUv:St&&g(S.bumpMap.channel),normalMapUv:Dt&&g(S.normalMap.channel),displacementMapUv:Et&&g(S.displacementMap.channel),emissiveMapUv:Zt&&g(S.emissiveMap.channel),metalnessMapUv:Ft&&g(S.metalnessMap.channel),roughnessMapUv:Pt&&g(S.roughnessMap.channel),anisotropyMapUv:$&&g(S.anisotropyMap.channel),clearcoatMapUv:ot&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:K&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(S.sheenRoughnessMap.channel),specularMapUv:xt&&g(S.specularMap.channel),specularColorMapUv:vt&&g(S.specularColorMap.channel),specularIntensityMapUv:_t&&g(S.specularIntensityMap.channel),transmissionMapUv:ft&&g(S.transmissionMap.channel),thicknessMapUv:bt&&g(S.thicknessMap.channel),alphaMapUv:z&&g(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Dt||Yt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:ut,vertexUv3s:Xt,pointsUvs:C.isPoints===!0&&!!D.attributes.uv&&(Mt||z),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:N,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:S.toneMapped?s.toneMapping:ei,useLegacyLights:s.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qn,flipSided:S.side===qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Y&&S.extensions.derivatives===!0,extensionFragDepth:Y&&S.extensions.fragDepth===!0,extensionDrawBuffers:Y&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Y&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)w.push(O),w.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(v(w,S),x(w,S),w.push(s.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),S.push(a.mask)}function M(S){const w=_[S.type];let O;if(w){const B=In[w];O=Gg.clone(B.uniforms)}else O=S.uniforms;return O}function y(S,w){let O;for(let B=0,C=l.length;B<C;B++){const I=l[B];if(I.cacheKey===w){O=I,++O.usedTimes;break}}return O===void 0&&(O=new Yx(s,w,S,r),l.push(O)),O}function E(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function b(S){c.remove(S)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:T}}function Qx(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ty(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Xh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function jh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,_,g,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function a(d,u,f,_,g,m){const p=o(d,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,_,g,m){const p=o(d,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||ty),n.length>1&&n.sort(u||Xh),i.length>1&&i.sort(u||Xh)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ey(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new jh,s.set(n,[o])):i>=r.length?(o=new jh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ny(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Ht};break;case"SpotLight":e={position:new V,direction:new V,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function iy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let ry=0;function sy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function oy(s,t){const e=new ny,n=iy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new V);const r=new V,o=new _e,a=new _e;function c(h,d){let u=0,f=0,_=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,m=0,p=0,v=0,x=0,M=0,y=0,E=0,b=0,T=0;h.sort(sy);const S=d===!0?Math.PI:1;for(let O=0,B=h.length;O<B;O++){const C=h[O],I=C.color,D=C.intensity,F=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*D*S,f+=I.g*D*S,_+=I.b*D*S;else if(C.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],D);else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){const W=C.shadow,j=n.get(C);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[g]=j,i.directionalShadowMap[g]=k,i.directionalShadowMatrix[g]=C.shadow.matrix,M++}i.directional[g]=G,g++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(I).multiplyScalar(D*S),G.distance=F,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[p]=G;const W=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,W.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[p]=W.matrix,C.castShadow){const j=n.get(C);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=k,E++}p++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(I).multiplyScalar(D),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=G,v++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*S),G.distance=C.distance,G.decay=C.decay,C.castShadow){const W=C.shadow,j=n.get(C);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=C.shadow.matrix,y++}i.point[m]=G,m++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(D*S),G.groundColor.copy(C.groundColor).multiplyScalar(D*S),i.hemi[x]=G,x++}}v>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==v||w.hemiLength!==x||w.numDirectionalShadows!==M||w.numPointShadows!==y||w.numSpotShadows!==E||w.numSpotMaps!==b)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,w.directionalLength=g,w.pointLength=m,w.spotLength=p,w.rectAreaLength=v,w.hemiLength=x,w.numDirectionalShadows=M,w.numPointShadows=y,w.numSpotShadows=E,w.numSpotMaps=b,i.version=ry++)}function l(h,d){let u=0,f=0,_=0,g=0,m=0;const p=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),u++}else if(M.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Yh(s,t){const e=new oy(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ay(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Yh(s,t),e.set(r,[c])):o>=a.length?(c=new Yh(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class cy extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ly extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dy(s,t,e){let n=new Qc;const i=new Tt,r=new Tt,o=new we,a=new cy({depthPacking:lg}),c=new ly,l={},h=e.maxTextureSize,d={[wi]:qe,[qe]:wi,[Qn]:Qn},u=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:hy,fragmentShader:uy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new si;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new le(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd;let p=this.type;this.render=function(y,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),O=s.state;O.setBlending(yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==Zn&&this.type===Zn,C=p===Zn&&this.type!==Zn;for(let I=0,D=y.length;I<D;I++){const F=y[I],k=F.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const G=k.getFrameExtents();if(i.multiply(G),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/G.x),i.x=r.x*G.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/G.y),i.y=r.y*G.y,k.mapSize.y=r.y)),k.map===null||B===!0||C===!0){const j=this.type!==Zn?{minFilter:Ae,magFilter:Ae}:{};k.map!==null&&k.map.dispose(),k.map=new sr(i.x,i.y,j),k.map.texture.name=F.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const W=k.getViewportCount();for(let j=0;j<W;j++){const Q=k.getViewport(j);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),O.viewport(o),k.updateMatrices(F,j),n=k.getFrustum(),M(E,b,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Zn&&v(k,b),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,S,w)};function v(y,E){const b=t.update(g);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new sr(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(E,null,b,u,g,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(E,null,b,f,g,null)}function x(y,E,b,T){let S=null;const w=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)S=w;else if(S=b.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=S.uuid,B=E.uuid;let C=l[O];C===void 0&&(C={},l[O]=C);let I=C[B];I===void 0&&(I=S.clone(),C[B]=I),S=I}if(S.visible=E.visible,S.wireframe=E.wireframe,T===Zn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=s.properties.get(S);O.light=b}return S}function M(y,E,b,T,S){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Zn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const B=t.update(y),C=y.material;if(Array.isArray(C)){const I=B.groups;for(let D=0,F=I.length;D<F;D++){const k=I[D],G=C[k.materialIndex];if(G&&G.visible){const W=x(y,G,T,S);s.renderBufferDirect(b,null,B,W,y,k)}}}else if(C.visible){const I=x(y,C,T,S);s.renderBufferDirect(b,null,B,I,y,null)}}const O=y.children;for(let B=0,C=O.length;B<C;B++)M(O[B],E,b,T,S)}}function fy(s,t,e){const n=e.isWebGL2;function i(){let z=!1;const ht=new we;let Y=null;const at=new we(0,0,0,0);return{setMask:function(ut){Y!==ut&&!z&&(s.colorMask(ut,ut,ut,ut),Y=ut)},setLocked:function(ut){z=ut},setClear:function(ut,Xt,ie,he,Ti){Ti===!0&&(ut*=he,Xt*=he,ie*=he),ht.set(ut,Xt,ie,he),at.equals(ht)===!1&&(s.clearColor(ut,Xt,ie,he),at.copy(ht))},reset:function(){z=!1,Y=null,at.set(-1,0,0,0)}}}function r(){let z=!1,ht=null,Y=null,at=null;return{setTest:function(ut){ut?dt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ut){ht!==ut&&!z&&(s.depthMask(ut),ht=ut)},setFunc:function(ut){if(Y!==ut){switch(ut){case zm:s.depthFunc(s.NEVER);break;case Bm:s.depthFunc(s.ALWAYS);break;case km:s.depthFunc(s.LESS);break;case uc:s.depthFunc(s.LEQUAL);break;case Gm:s.depthFunc(s.EQUAL);break;case Vm:s.depthFunc(s.GEQUAL);break;case Hm:s.depthFunc(s.GREATER);break;case Wm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=ut}},setLocked:function(ut){z=ut},setClear:function(ut){at!==ut&&(s.clearDepth(ut),at=ut)},reset:function(){z=!1,ht=null,Y=null,at=null}}}function o(){let z=!1,ht=null,Y=null,at=null,ut=null,Xt=null,ie=null,he=null,Ti=null;return{setTest:function(re){z||(re?dt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(re){ht!==re&&!z&&(s.stencilMask(re),ht=re)},setFunc:function(re,An,Fe){(Y!==re||at!==An||ut!==Fe)&&(s.stencilFunc(re,An,Fe),Y=re,at=An,ut=Fe)},setOp:function(re,An,Fe){(Xt!==re||ie!==An||he!==Fe)&&(s.stencilOp(re,An,Fe),Xt=re,ie=An,he=Fe)},setLocked:function(re){z=re},setClear:function(re){Ti!==re&&(s.clearStencil(re),Ti=re)},reset:function(){z=!1,ht=null,Y=null,at=null,ut=null,Xt=null,ie=null,he=null,Ti=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,d=new WeakMap;let u={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,M=null,y=null,E=null,b=null,T=null,S=!1,w=null,O=null,B=null,C=null,I=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=k>=2);let W=null,j={};const Q=s.getParameter(s.SCISSOR_BOX),N=s.getParameter(s.VIEWPORT),Z=new we().fromArray(Q),et=new we().fromArray(N);function it(z,ht,Y,at){const ut=new Uint8Array(4),Xt=s.createTexture();s.bindTexture(z,Xt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<Y;ie++)n&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(ht,0,s.RGBA,1,1,at,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(ht+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return Xt}const lt={};lt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(lt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),dt(s.DEPTH_TEST),c.setFunc(uc),Et(!1),Zt(Il),dt(s.CULL_FACE),St(yi);function dt(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function At(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function Mt(z,ht){return f[z]!==ht?(s.bindFramebuffer(z,ht),f[z]=ht,n&&(z===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ht),z===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ht)),!0):!1}function zt(z,ht){let Y=g,at=!1;if(z)if(Y=_.get(ht),Y===void 0&&(Y=[],_.set(ht,Y)),z.isWebGLMultipleRenderTargets){const ut=z.texture;if(Y.length!==ut.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let Xt=0,ie=ut.length;Xt<ie;Xt++)Y[Xt]=s.COLOR_ATTACHMENT0+Xt;Y.length=ut.length,at=!0}}else Y[0]!==s.COLOR_ATTACHMENT0&&(Y[0]=s.COLOR_ATTACHMENT0,at=!0);else Y[0]!==s.BACK&&(Y[0]=s.BACK,at=!0);at&&(e.isWebGL2?s.drawBuffers(Y):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Bt(z){return m!==z?(s.useProgram(z),m=z,!0):!1}const q={[Nr]:s.FUNC_ADD,[Am]:s.FUNC_SUBTRACT,[Rm]:s.FUNC_REVERSE_SUBTRACT};if(n)q[Ol]=s.MIN,q[zl]=s.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(q[Ol]=z.MIN_EXT,q[zl]=z.MAX_EXT)}const pe={[Cm]:s.ZERO,[Pm]:s.ONE,[Lm]:s.SRC_COLOR,[Wd]:s.SRC_ALPHA,[Om]:s.SRC_ALPHA_SATURATE,[Nm]:s.DST_COLOR,[Im]:s.DST_ALPHA,[Dm]:s.ONE_MINUS_SRC_COLOR,[qd]:s.ONE_MINUS_SRC_ALPHA,[Fm]:s.ONE_MINUS_DST_COLOR,[Um]:s.ONE_MINUS_DST_ALPHA};function St(z,ht,Y,at,ut,Xt,ie,he){if(z===yi){p===!0&&(At(s.BLEND),p=!1);return}if(p===!1&&(dt(s.BLEND),p=!0),z!==Tm){if(z!==v||he!==S){if((x!==Nr||E!==Nr)&&(s.blendEquation(s.FUNC_ADD),x=Nr,E=Nr),he)switch(z){case Hr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ul:s.blendFunc(s.ONE,s.ONE);break;case Nl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Hr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ul:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,y=null,b=null,T=null,v=z,S=he}return}ut=ut||ht,Xt=Xt||Y,ie=ie||at,(ht!==x||ut!==E)&&(s.blendEquationSeparate(q[ht],q[ut]),x=ht,E=ut),(Y!==M||at!==y||Xt!==b||ie!==T)&&(s.blendFuncSeparate(pe[Y],pe[at],pe[Xt],pe[ie]),M=Y,y=at,b=Xt,T=ie),v=z,S=!1}function Dt(z,ht){z.side===Qn?At(s.CULL_FACE):dt(s.CULL_FACE);let Y=z.side===qe;ht&&(Y=!Y),Et(Y),z.blending===Hr&&z.transparent===!1?St(yi):St(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),a.setMask(z.colorWrite);const at=z.stencilWrite;l.setTest(at),at&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(z){w!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),w=z)}function Zt(z){z!==wm?(dt(s.CULL_FACE),z!==O&&(z===Il?s.cullFace(s.BACK):z===bm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),O=z}function Ft(z){z!==B&&(F&&s.lineWidth(z),B=z)}function Pt(z,ht,Y){z?(dt(s.POLYGON_OFFSET_FILL),(C!==ht||I!==Y)&&(s.polygonOffset(ht,Y),C=ht,I=Y)):At(s.POLYGON_OFFSET_FILL)}function Yt(z){z?dt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function me(z){z===void 0&&(z=s.TEXTURE0+D-1),W!==z&&(s.activeTexture(z),W=z)}function ye(z,ht,Y){Y===void 0&&(W===null?Y=s.TEXTURE0+D-1:Y=W);let at=j[Y];at===void 0&&(at={type:void 0,texture:void 0},j[Y]=at),(at.type!==z||at.texture!==ht)&&(W!==Y&&(s.activeTexture(Y),W=Y),s.bindTexture(z,ht||lt[z]),at.type=z,at.texture=ht)}function L(){const z=j[W];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function A(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(z){Z.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Z.copy(z))}function _t(z){et.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),et.copy(z))}function ft(z,ht){let Y=d.get(ht);Y===void 0&&(Y=new WeakMap,d.set(ht,Y));let at=Y.get(z);at===void 0&&(at=s.getUniformBlockIndex(ht,z.name),Y.set(z,at))}function bt(z,ht){const at=d.get(ht).get(z);h.get(ht)!==at&&(s.uniformBlockBinding(ht,at,z.__bindingPointIndex),h.set(ht,at))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},W=null,j={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,M=null,y=null,E=null,b=null,T=null,S=!1,w=null,O=null,B=null,C=null,I=null,Z.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:dt,disable:At,bindFramebuffer:Mt,drawBuffers:zt,useProgram:Bt,setBlending:St,setMaterial:Dt,setFlipSided:Et,setCullFace:Zt,setLineWidth:Ft,setPolygonOffset:Pt,setScissorTest:Yt,activeTexture:me,bindTexture:ye,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:$,texImage2D:gt,texImage3D:xt,updateUBOMapping:ft,uniformBlockBinding:bt,texStorage2D:rt,texStorage3D:K,texSubImage2D:ot,texSubImage3D:st,compressedTexSubImage2D:U,compressedTexSubImage3D:nt,scissor:vt,viewport:_t,reset:Vt}}function py(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,A){return p?new OffscreenCanvas(L,A):Fs("canvas")}function x(L,A,$,ot){let st=1;if((L.width>ot||L.height>ot)&&(st=ot/Math.max(L.width,L.height)),st<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const U=A?_c:Math.floor,nt=U(st*L.width),rt=U(st*L.height);g===void 0&&(g=v(nt,rt));const K=$?v(nt,rt):g;return K.width=nt,K.height=rt,K.getContext("2d").drawImage(L,0,0,nt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+nt+"x"+rt+")."),K}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function M(L){return uh(L.width)&&uh(L.height)}function y(L){return a?!1:L.wrapS!==En||L.wrapT!==En||L.minFilter!==Ae&&L.minFilter!==hn}function E(L,A){return L.generateMipmaps&&A&&L.minFilter!==Ae&&L.minFilter!==hn}function b(L){s.generateMipmap(L)}function T(L,A,$,ot,st=!1){if(a===!1)return A;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let U=A;return A===s.RED&&($===s.FLOAT&&(U=s.R32F),$===s.HALF_FLOAT&&(U=s.R16F),$===s.UNSIGNED_BYTE&&(U=s.R8)),A===s.RG&&($===s.FLOAT&&(U=s.RG32F),$===s.HALF_FLOAT&&(U=s.RG16F),$===s.UNSIGNED_BYTE&&(U=s.RG8)),A===s.RGBA&&($===s.FLOAT&&(U=s.RGBA32F),$===s.HALF_FLOAT&&(U=s.RGBA16F),$===s.UNSIGNED_BYTE&&(U=ot===It&&st===!1?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(U=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(U=s.RGB5_A1)),(U===s.R16F||U===s.R32F||U===s.RG16F||U===s.RG32F||U===s.RGBA16F||U===s.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function S(L,A,$){return E(L,$)===!0||L.isFramebufferTexture&&L.minFilter!==Ae&&L.minFilter!==hn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){return L===Ae||L===Bl||L===la?s.NEAREST:s.LINEAR}function O(L){const A=L.target;A.removeEventListener("dispose",O),C(A),A.isVideoTexture&&_.delete(A)}function B(L){const A=L.target;A.removeEventListener("dispose",B),D(A)}function C(L){const A=n.get(L);if(A.__webglInit===void 0)return;const $=L.source,ot=m.get($);if(ot){const st=ot[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&I(L),Object.keys(ot).length===0&&m.delete($)}n.remove(L)}function I(L){const A=n.get(L);s.deleteTexture(A.__webglTexture);const $=L.source,ot=m.get($);delete ot[A.__cacheKey],o.memory.textures--}function D(L){const A=L.texture,$=n.get(L),ot=n.get(A);if(ot.__webglTexture!==void 0&&(s.deleteTexture(ot.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)s.deleteFramebuffer($.__webglFramebuffer[st]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[st]);else{if(s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let st=0;st<$.__webglColorRenderbuffer.length;st++)$.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[st]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let st=0,U=A.length;st<U;st++){const nt=n.get(A[st]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(A[st])}n.remove(A),n.remove(L)}let F=0;function k(){F=0}function G(){const L=F;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),F+=1,L}function W(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function j(L,A){const $=n.get(L);if(L.isVideoTexture&&me(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ot=L.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt($,L,A);return}}e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+A)}function Q(L,A){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Mt($,L,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+A)}function N(L,A){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Mt($,L,A);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+A)}function Z(L,A){const $=n.get(L);if(L.version>0&&$.__version!==L.version){zt($,L,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+A)}const et={[rr]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[pc]:s.MIRRORED_REPEAT},it={[Ae]:s.NEAREST,[Bl]:s.NEAREST_MIPMAP_NEAREST,[la]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[Jm]:s.LINEAR_MIPMAP_NEAREST,[Us]:s.LINEAR_MIPMAP_LINEAR},lt={[dg]:s.NEVER,[xg]:s.ALWAYS,[fg]:s.LESS,[mg]:s.LEQUAL,[pg]:s.EQUAL,[vg]:s.GEQUAL,[gg]:s.GREATER,[_g]:s.NOTEQUAL};function dt(L,A,$){if($?(s.texParameteri(L,s.TEXTURE_WRAP_S,et[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,et[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,et[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,it[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,it[A.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==En||A.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,w(A.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Ae&&A.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,lt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ae||A.minFilter!==la&&A.minFilter!==Us||A.type===_i&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ns&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(L,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function At(L,A){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const ot=A.source;let st=m.get(ot);st===void 0&&(st={},m.set(ot,st));const U=W(A);if(U!==L.__cacheKey){st[U]===void 0&&(st[U]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),st[U].usedTimes++;const nt=st[L.__cacheKey];nt!==void 0&&(st[L.__cacheKey].usedTimes--,nt.usedTimes===0&&I(A)),L.__cacheKey=U,L.__webglTexture=st[U].texture}return $}function Mt(L,A,$){let ot=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ot=s.TEXTURE_3D);const st=At(L,A),U=A.source;e.bindTexture(ot,L.__webglTexture,s.TEXTURE0+$);const nt=n.get(U);if(U.version!==nt.__version||st===!0){e.activeTexture(s.TEXTURE0+$),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const rt=y(A)&&M(A.image)===!1;let K=x(A.image,rt,!1,h);K=ye(A,K);const gt=M(K)||a,xt=r.convert(A.format,A.colorSpace);let vt=r.convert(A.type),_t=T(A.internalFormat,xt,vt,A.colorSpace);dt(ot,A,gt);let ft;const bt=A.mipmaps,Vt=a&&A.isVideoTexture!==!0,z=nt.__version===void 0||st===!0,ht=S(A,K,gt);if(A.isDepthTexture)_t=s.DEPTH_COMPONENT,a?A.type===_i?_t=s.DEPTH_COMPONENT32F:A.type===gi?_t=s.DEPTH_COMPONENT24:A.type===Ji?_t=s.DEPTH24_STENCIL8:_t=s.DEPTH_COMPONENT16:A.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Qi&&_t===s.DEPTH_COMPONENT&&A.type!==Yc&&A.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=gi,vt=r.convert(A.type)),A.format===Jr&&_t===s.DEPTH_COMPONENT&&(_t=s.DEPTH_STENCIL,A.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ji,vt=r.convert(A.type))),z&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,_t,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,_t,K.width,K.height,0,xt,vt,null));else if(A.isDataTexture)if(bt.length>0&&gt){Vt&&z&&e.texStorage2D(s.TEXTURE_2D,ht,_t,bt[0].width,bt[0].height);for(let Y=0,at=bt.length;Y<at;Y++)ft=bt[Y],Vt?e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,xt,vt,ft.data):e.texImage2D(s.TEXTURE_2D,Y,_t,ft.width,ft.height,0,xt,vt,ft.data);A.generateMipmaps=!1}else Vt?(z&&e.texStorage2D(s.TEXTURE_2D,ht,_t,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,xt,vt,K.data)):e.texImage2D(s.TEXTURE_2D,0,_t,K.width,K.height,0,xt,vt,K.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Vt&&z&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,_t,bt[0].width,bt[0].height,K.depth);for(let Y=0,at=bt.length;Y<at;Y++)ft=bt[Y],A.format!==wn?xt!==null?Vt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,K.depth,xt,ft.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,_t,ft.width,ft.height,K.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,K.depth,xt,vt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,_t,ft.width,ft.height,K.depth,0,xt,vt,ft.data)}else{Vt&&z&&e.texStorage2D(s.TEXTURE_2D,ht,_t,bt[0].width,bt[0].height);for(let Y=0,at=bt.length;Y<at;Y++)ft=bt[Y],A.format!==wn?xt!==null?Vt?e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,xt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,_t,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,xt,vt,ft.data):e.texImage2D(s.TEXTURE_2D,Y,_t,ft.width,ft.height,0,xt,vt,ft.data)}else if(A.isDataArrayTexture)Vt?(z&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,_t,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,xt,vt,K.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,K.width,K.height,K.depth,0,xt,vt,K.data);else if(A.isData3DTexture)Vt?(z&&e.texStorage3D(s.TEXTURE_3D,ht,_t,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,xt,vt,K.data)):e.texImage3D(s.TEXTURE_3D,0,_t,K.width,K.height,K.depth,0,xt,vt,K.data);else if(A.isFramebufferTexture){if(z)if(Vt)e.texStorage2D(s.TEXTURE_2D,ht,_t,K.width,K.height);else{let Y=K.width,at=K.height;for(let ut=0;ut<ht;ut++)e.texImage2D(s.TEXTURE_2D,ut,_t,Y,at,0,xt,vt,null),Y>>=1,at>>=1}}else if(bt.length>0&&gt){Vt&&z&&e.texStorage2D(s.TEXTURE_2D,ht,_t,bt[0].width,bt[0].height);for(let Y=0,at=bt.length;Y<at;Y++)ft=bt[Y],Vt?e.texSubImage2D(s.TEXTURE_2D,Y,0,0,xt,vt,ft):e.texImage2D(s.TEXTURE_2D,Y,_t,xt,vt,ft);A.generateMipmaps=!1}else Vt?(z&&e.texStorage2D(s.TEXTURE_2D,ht,_t,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,vt,K)):e.texImage2D(s.TEXTURE_2D,0,_t,xt,vt,K);E(A,gt)&&b(ot),nt.__version=U.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function zt(L,A,$){if(A.image.length!==6)return;const ot=At(L,A),st=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+$);const U=n.get(st);if(st.version!==U.__version||ot===!0){e.activeTexture(s.TEXTURE0+$),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const nt=A.isCompressedTexture||A.image[0].isCompressedTexture,rt=A.image[0]&&A.image[0].isDataTexture,K=[];for(let Y=0;Y<6;Y++)!nt&&!rt?K[Y]=x(A.image[Y],!1,!0,l):K[Y]=rt?A.image[Y].image:A.image[Y],K[Y]=ye(A,K[Y]);const gt=K[0],xt=M(gt)||a,vt=r.convert(A.format,A.colorSpace),_t=r.convert(A.type),ft=T(A.internalFormat,vt,_t,A.colorSpace),bt=a&&A.isVideoTexture!==!0,Vt=U.__version===void 0||ot===!0;let z=S(A,gt,xt);dt(s.TEXTURE_CUBE_MAP,A,xt);let ht;if(nt){bt&&Vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,z,ft,gt.width,gt.height);for(let Y=0;Y<6;Y++){ht=K[Y].mipmaps;for(let at=0;at<ht.length;at++){const ut=ht[at];A.format!==wn?vt!==null?bt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at,0,0,ut.width,ut.height,vt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at,ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at,0,0,ut.width,ut.height,vt,_t,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at,ft,ut.width,ut.height,0,vt,_t,ut.data)}}}else{ht=A.mipmaps,bt&&Vt&&(ht.length>0&&z++,e.texStorage2D(s.TEXTURE_CUBE_MAP,z,ft,K[0].width,K[0].height));for(let Y=0;Y<6;Y++)if(rt){bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,K[Y].width,K[Y].height,vt,_t,K[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ft,K[Y].width,K[Y].height,0,vt,_t,K[Y].data);for(let at=0;at<ht.length;at++){const Xt=ht[at].image[Y].image;bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at+1,0,0,Xt.width,Xt.height,vt,_t,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at+1,ft,Xt.width,Xt.height,0,vt,_t,Xt.data)}}else{bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,vt,_t,K[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ft,vt,_t,K[Y]);for(let at=0;at<ht.length;at++){const ut=ht[at];bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at+1,0,0,vt,_t,ut.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at+1,ft,vt,_t,ut.image[Y])}}}E(A,xt)&&b(s.TEXTURE_CUBE_MAP),U.__version=st.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Bt(L,A,$,ot,st){const U=r.convert($.format,$.colorSpace),nt=r.convert($.type),rt=T($.internalFormat,U,nt,$.colorSpace);n.get(A).__hasExternalTextures||(st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,0,rt,A.width,A.height,A.depth,0,U,nt,null):e.texImage2D(st,0,rt,A.width,A.height,0,U,nt,null)),e.bindFramebuffer(s.FRAMEBUFFER,L),Yt(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,st,n.get($).__webglTexture,0,Pt(A)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,st,n.get($).__webglTexture,0),e.bindFramebuffer(s.FRAMEBUFFER,null)}function q(L,A,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let ot=s.DEPTH_COMPONENT16;if($||Yt(A)){const st=A.depthTexture;st&&st.isDepthTexture&&(st.type===_i?ot=s.DEPTH_COMPONENT32F:st.type===gi&&(ot=s.DEPTH_COMPONENT24));const U=Pt(A);Yt(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,U,ot,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,U,ot,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ot,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const ot=Pt(A);$&&Yt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,A.width,A.height):Yt(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const ot=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0;st<ot.length;st++){const U=ot[st],nt=r.convert(U.format,U.colorSpace),rt=r.convert(U.type),K=T(U.internalFormat,nt,rt,U.colorSpace),gt=Pt(A);$&&Yt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,K,A.width,A.height):Yt(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,K,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,K,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),j(A.depthTexture,0);const ot=n.get(A.depthTexture).__webglTexture,st=Pt(A);if(A.depthTexture.format===Qi)Yt(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(A.depthTexture.format===Jr)Yt(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function St(L){const A=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");pe(A.__webglFramebuffer,L)}else if($){A.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ot]),A.__webglDepthbuffer[ot]=s.createRenderbuffer(),q(A.__webglDepthbuffer[ot],L,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),q(A.__webglDepthbuffer,L,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(L,A,$){const ot=n.get(L);A!==void 0&&Bt(ot.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),$!==void 0&&St(L)}function Et(L){const A=L.texture,$=n.get(L),ot=n.get(A);L.addEventListener("dispose",B),L.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=A.version,o.memory.textures++);const st=L.isWebGLCubeRenderTarget===!0,U=L.isWebGLMultipleRenderTargets===!0,nt=M(L)||a;if(st){$.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)$.__webglFramebuffer[rt]=s.createFramebuffer()}else{if($.__webglFramebuffer=s.createFramebuffer(),U)if(i.drawBuffers){const rt=L.texture;for(let K=0,gt=rt.length;K<gt;K++){const xt=n.get(rt[K]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Yt(L)===!1){const rt=U?A:[A];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let K=0;K<rt.length;K++){const gt=rt[K];$.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[K]);const xt=r.convert(gt.format,gt.colorSpace),vt=r.convert(gt.type),_t=T(gt.internalFormat,xt,vt,gt.colorSpace,L.isXRRenderTarget===!0),ft=Pt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,_t,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,$.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),q($.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),dt(s.TEXTURE_CUBE_MAP,A,nt);for(let rt=0;rt<6;rt++)Bt($.__webglFramebuffer[rt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt);E(A,nt)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(U){const rt=L.texture;for(let K=0,gt=rt.length;K<gt;K++){const xt=rt[K],vt=n.get(xt);e.bindTexture(s.TEXTURE_2D,vt.__webglTexture),dt(s.TEXTURE_2D,xt,nt),Bt($.__webglFramebuffer,L,xt,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D),E(xt,nt)&&b(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,ot.__webglTexture),dt(rt,A,nt),Bt($.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,rt),E(A,nt)&&b(rt),e.unbindTexture()}L.depthBuffer&&St(L)}function Zt(L){const A=M(L)||a,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ot=0,st=$.length;ot<st;ot++){const U=$[ot];if(E(U,A)){const nt=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,rt=n.get(U).__webglTexture;e.bindTexture(nt,rt),b(nt),e.unbindTexture()}}}function Ft(L){if(a&&L.samples>0&&Yt(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],$=L.width,ot=L.height;let st=s.COLOR_BUFFER_BIT;const U=[],nt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=n.get(L),K=L.isWebGLMultipleRenderTargets===!0;if(K)for(let gt=0;gt<A.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let gt=0;gt<A.length;gt++){U.push(s.COLOR_ATTACHMENT0+gt),L.depthBuffer&&U.push(nt);const xt=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(xt===!1&&(L.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),K&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,rt.__webglColorRenderbuffer[gt]),xt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[nt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[nt])),K){const vt=n.get(A[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,vt,0)}s.blitFramebuffer(0,0,$,ot,0,0,$,ot,st,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,U)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let gt=0;gt<A.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,rt.__webglColorRenderbuffer[gt]);const xt=n.get(A[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function Pt(L){return Math.min(d,L.samples)}function Yt(L){const A=n.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function me(L){const A=o.render.frame;_.get(L)!==A&&(_.set(L,A),L.update())}function ye(L,A){const $=L.colorSpace,ot=L.format,st=L.type;return L.isCompressedTexture===!0||L.format===mc||$!==Ye&&$!==er&&($===It?a===!1?t.has("EXT_sRGB")===!0&&ot===wn?(L.format=mc,L.minFilter=hn,L.generateMipmaps=!1):A=nf.sRGBToLinear(A):(ot!==wn||st!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=N,this.setTextureCube=Z,this.rebindTextures=Dt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Yt}function my(s,t,e){const n=e.isWebGL2;function i(r,o=er){let a;if(r===Mi)return s.UNSIGNED_BYTE;if(r===Yd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qm)return s.BYTE;if(r===tg)return s.SHORT;if(r===Yc)return s.UNSIGNED_SHORT;if(r===jd)return s.INT;if(r===gi)return s.UNSIGNED_INT;if(r===_i)return s.FLOAT;if(r===Ns)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===eg)return s.ALPHA;if(r===wn)return s.RGBA;if(r===ng)return s.LUMINANCE;if(r===ig)return s.LUMINANCE_ALPHA;if(r===Qi)return s.DEPTH_COMPONENT;if(r===Jr)return s.DEPTH_STENCIL;if(r===mc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===rg)return s.RED;if(r===Zd)return s.RED_INTEGER;if(r===sg)return s.RG;if(r===$d)return s.RG_INTEGER;if(r===Jd)return s.RGBA_INTEGER;if(r===ha||r===ua||r===da||r===fa)if(o===It)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ha)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ha)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kl||r===Gl||r===Vl||r===Hl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===kl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===og)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wl||r===ql)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wl)return o===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ql)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===jl||r===Yl||r===Kl||r===Zl||r===$l||r===Jl||r===Ql||r===th||r===eh||r===nh||r===ih||r===rh||r===sh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xl)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jl)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yl)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kl)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zl)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$l)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jl)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ql)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===th)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nh)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ih)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rh)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sh)return o===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===pa)return o===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===ag||r===oh||r===ah||r===ch)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===pa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===oh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ch)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ji?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class gy extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gs extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&u>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vy extends Xe{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Qi,h!==Qi&&h!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qi&&(n=gi),n===void 0&&h===Jr&&(n=Ji),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xy extends lr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,_=null;const g=e.getContextAttributes();let m=null,p=null;const v=[],x=[];let M=null;const y=new Be;y.layers.enable(1),y.viewport=new we;const E=new Be;E.layers.enable(2),E.viewport=new we;const b=[y,E],T=new gy;T.layers.enable(1),T.layers.enable(2);let S=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){M=N},this.getController=function(N){let Z=v[N];return Z===void 0&&(Z=new za,v[N]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(N){let Z=v[N];return Z===void 0&&(Z=new za,v[N]=Z),Z.getGripSpace()},this.getHand=function(N){let Z=v[N];return Z===void 0&&(Z=new za,v[N]=Z),Z.getHandSpace()};function O(N){const Z=x.indexOf(N.inputSource);if(Z===-1)return;const et=v[Z];et!==void 0&&(et.update(N.inputSource,N.frame,l||o),et.dispatchEvent({type:N.type,data:N.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",C);for(let N=0;N<v.length;N++){const Z=x[N];Z!==null&&(x[N]=null,v[N].disconnect(Z))}S=null,w=null,t.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:f}),p=new sr(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,et=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=g.stencil?Jr:Qi,et=g.stencil?Ji:gi);const lt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(lt),i.updateRenderState({layers:[u]}),p=new sr(u.textureWidth,u.textureHeight,{format:wn,type:Mi,depthTexture:new vy(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const dt=t.properties.get(p);dt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(N){for(let Z=0;Z<N.removed.length;Z++){const et=N.removed[Z],it=x.indexOf(et);it>=0&&(x[it]=null,v[it].disconnect(et))}for(let Z=0;Z<N.added.length;Z++){const et=N.added[Z];let it=x.indexOf(et);if(it===-1){for(let dt=0;dt<v.length;dt++)if(dt>=x.length){x.push(et),it=dt;break}else if(x[dt]===null){x[dt]=et,it=dt;break}if(it===-1)break}const lt=v[it];lt&&lt.connect(et)}}const I=new V,D=new V;function F(N,Z,et){I.setFromMatrixPosition(Z.matrixWorld),D.setFromMatrixPosition(et.matrixWorld);const it=I.distanceTo(D),lt=Z.projectionMatrix.elements,dt=et.projectionMatrix.elements,At=lt[14]/(lt[10]-1),Mt=lt[14]/(lt[10]+1),zt=(lt[9]+1)/lt[5],Bt=(lt[9]-1)/lt[5],q=(lt[8]-1)/lt[0],pe=(dt[8]+1)/dt[0],St=At*q,Dt=At*pe,Et=it/(-q+pe),Zt=Et*-q;Z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Zt),N.translateZ(Et),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ft=At+Et,Pt=Mt+Et,Yt=St-Zt,me=Dt+(it-Zt),ye=zt*Mt/Pt*Ft,L=Bt*Mt/Pt*Ft;N.projectionMatrix.makePerspective(Yt,me,ye,L,Ft,Pt),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function k(N,Z){Z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(i===null)return N;M&&(N=M),T.near=E.near=y.near=N.near,T.far=E.far=y.far=N.far,(S!==T.near||w!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),S=T.near,w=T.far);const Z=N.parent,et=T.cameras;k(T,Z);for(let it=0;it<et.length;it++)k(et[it],Z);return et.length===2?F(T,y,E):T.projectionMatrix.copy(y.projectionMatrix),M&&G(T,Z),T};function G(N,Z){const et=M;Z===null?et.matrix.copy(N.matrixWorld):(et.matrix.copy(Z.matrixWorld),et.matrix.invert(),et.matrix.multiply(N.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0);const it=et.children;for(let lt=0,dt=it.length;lt<dt;lt++)it[lt].updateMatrixWorld(!0);et.projectionMatrix.copy(N.projectionMatrix),et.projectionMatrixInverse.copy(N.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=gc*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(N){c=N,u!==null&&(u.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let W=null;function j(N,Z){if(h=Z.getViewerPose(l||o),_=Z,h!==null){const et=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let it=!1;et.length!==T.cameras.length&&(T.cameras.length=0,it=!0);for(let lt=0;lt<et.length;lt++){const dt=et[lt];let At=null;if(f!==null)At=f.getViewport(dt);else{const zt=d.getViewSubImage(u,dt);At=zt.viewport,lt===0&&(t.setRenderTargetTextures(p,zt.colorTexture,u.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(p))}let Mt=b[lt];Mt===void 0&&(Mt=new Be,Mt.layers.enable(lt),Mt.viewport=new we,b[lt]=Mt),Mt.matrix.fromArray(dt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(dt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(At.x,At.y,At.width,At.height),lt===0&&(T.matrix.copy(Mt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),it===!0&&T.cameras.push(Mt)}}for(let et=0;et<v.length;et++){const it=x[et],lt=v[et];it!==null&&lt!==void 0&&lt.update(it,Z,l||o)}W&&W(N,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Q=new df;Q.setAnimationLoop(j),this.setAnimationLoop=function(N){W=N},this.dispose=function(){}}}function yy(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function My(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=i[v.id];M===void 0&&(_(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(v,y);const E=t.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){const x=d();v.__bindingPointIndex=x;const M=s.createBuffer(),y=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],M=v.uniforms,y=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,b=M.length;E<b;E++){const T=M[E];if(f(T,E,y)===!0){const S=T.__offset,w=Array.isArray(T.value)?T.value:[T.value];let O=0;for(let B=0;B<w.length;B++){const C=w[B],I=g(C);typeof C=="number"?(T.__data[0]=C,s.bufferSubData(s.UNIFORM_BUFFER,S+O,T.__data)):C.isMatrix3?(T.__data[0]=C.elements[0],T.__data[1]=C.elements[1],T.__data[2]=C.elements[2],T.__data[3]=C.elements[0],T.__data[4]=C.elements[3],T.__data[5]=C.elements[4],T.__data[6]=C.elements[5],T.__data[7]=C.elements[0],T.__data[8]=C.elements[6],T.__data[9]=C.elements[7],T.__data[10]=C.elements[8],T.__data[11]=C.elements[0]):(C.toArray(T.__data,O),O+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,T.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,M){const y=v.value;if(M[x]===void 0){if(typeof y=="number")M[x]=y;else{const E=Array.isArray(y)?y:[y],b=[];for(let T=0;T<E.length;T++)b.push(E[T].clone());M[x]=b}return!0}else if(typeof y=="number"){if(M[x]!==y)return M[x]=y,!0}else{const E=Array.isArray(M[x])?M[x]:[M[x]],b=Array.isArray(y)?y:[y];for(let T=0;T<E.length;T++){const S=E[T];if(S.equals(b[T])===!1)return S.copy(b[T]),!0}}return!1}function _(v){const x=v.uniforms;let M=0;const y=16;let E=0;for(let b=0,T=x.length;b<T;b++){const S=x[b],w={boundary:0,storage:0},O=Array.isArray(S.value)?S.value:[S.value];for(let B=0,C=O.length;B<C;B++){const I=O[B],D=g(I);w.boundary+=D.boundary,w.storage+=D.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,b>0){E=M%y;const B=y-E;E!==0&&B-w.boundary<0&&(M+=y-E,S.__offset=M)}M+=w.storage}return E=M%y,E>0&&(M+=y-E),v.__size=M,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}function Sy(){const s=Fs("canvas");return s.style.display="block",s}class Vs{constructor(t={}){const{canvas:e=Sy(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=It,this.useLegacyLights=!0,this.toneMapping=ei,this.toneMappingExposure=1;const x=this;let M=!1,y=0,E=0,b=null,T=-1,S=null;const w=new we,O=new we;let B=null;const C=new Ht(0);let I=0,D=e.width,F=e.height,k=1,G=null,W=null;const j=new we(0,0,D,F),Q=new we(0,0,D,F);let N=!1;const Z=new Qc;let et=!1,it=!1,lt=null;const dt=new _e,At=new Tt,Mt=new V,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Bt(){return b===null?k:1}let q=n;function pe(P,X){for(let J=0;J<P.length;J++){const H=P[J],tt=e.getContext(H,X);if(tt!==null)return tt}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",at,!1),q===null){const X=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&X.shift(),q=pe(X,P),q===null)throw pe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let St,Dt,Et,Zt,Ft,Pt,Yt,me,ye,L,A,$,ot,st,U,nt,rt,K,gt,xt,vt,_t,ft,bt;function Vt(){St=new Iv(q),Dt=new Av(q,St,t),St.init(Dt),_t=new my(q,St,Dt),Et=new fy(q,St,Dt),Zt=new Fv(q),Ft=new Qx,Pt=new py(q,St,Et,Ft,Dt,_t,Zt),Yt=new Cv(x),me=new Dv(x),ye=new Yg(q,Dt),ft=new bv(q,St,ye,Dt),L=new Uv(q,ye,Zt,ft),A=new kv(q,L,ye,Zt),gt=new Bv(q,Dt,Pt),nt=new Rv(Ft),$=new Jx(x,Yt,me,St,Dt,ft,nt),ot=new yy(x,Ft),st=new ey,U=new ay(St,Dt),K=new wv(x,Yt,me,Et,A,u,c),rt=new dy(x,A,Dt),bt=new My(q,Zt,Dt,Et),xt=new Tv(q,St,Zt,Dt),vt=new Nv(q,St,Zt,Dt),Zt.programs=$.programs,x.capabilities=Dt,x.extensions=St,x.properties=Ft,x.renderLists=st,x.shadowMap=rt,x.state=Et,x.info=Zt}Vt();const z=new xy(x,q);this.xr=z,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const P=St.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=St.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(D,F,!1))},this.getSize=function(P){return P.set(D,F)},this.setSize=function(P,X,J=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,F=X,e.width=Math.floor(P*k),e.height=Math.floor(X*k),J===!0&&(e.style.width=P+"px",e.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(D*k,F*k).floor()},this.setDrawingBufferSize=function(P,X,J){D=P,F=X,k=J,e.width=Math.floor(P*J),e.height=Math.floor(X*J),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,X,J,H){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,X,J,H),Et.viewport(w.copy(j).multiplyScalar(k).floor())},this.getScissor=function(P){return P.copy(Q)},this.setScissor=function(P,X,J,H){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,X,J,H),Et.scissor(O.copy(Q).multiplyScalar(k).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(P){Et.setScissorTest(N=P)},this.setOpaqueSort=function(P){G=P},this.setTransparentSort=function(P){W=P},this.getClearColor=function(P){return P.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(P=!0,X=!0,J=!0){let H=0;if(P){let tt=!1;if(b!==null){const pt=b.texture.format;tt=pt===Jd||pt===$d||pt===Zd}if(tt){const pt=b.texture.type,wt=pt===Mi||pt===gi||pt===Yc||pt===Ji||pt===Yd||pt===Kd,Rt=K.getClearColor(),Ct=K.getClearAlpha(),kt=Rt.r,Lt=Rt.g,Ut=Rt.b,Qt=Ft.get(b).__webglFramebuffer;wt?(f[0]=kt,f[1]=Lt,f[2]=Ut,f[3]=Ct,q.clearBufferuiv(q.COLOR,Qt,f)):(_[0]=kt,_[1]=Lt,_[2]=Ut,_[3]=Ct,q.clearBufferiv(q.COLOR,Qt,_))}else H|=q.COLOR_BUFFER_BIT}X&&(H|=q.DEPTH_BUFFER_BIT),J&&(H|=q.STENCIL_BUFFER_BIT),q.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",at,!1),st.dispose(),U.dispose(),Ft.dispose(),Yt.dispose(),me.dispose(),A.dispose(),ft.dispose(),bt.dispose(),$.dispose(),z.dispose(),z.removeEventListener("sessionstart",re),z.removeEventListener("sessionend",An),lt&&(lt.dispose(),lt=null),Fe.stop()};function ht(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const P=Zt.autoReset,X=rt.enabled,J=rt.autoUpdate,H=rt.needsUpdate,tt=rt.type;Vt(),Zt.autoReset=P,rt.enabled=X,rt.autoUpdate=J,rt.needsUpdate=H,rt.type=tt}function at(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ut(P){const X=P.target;X.removeEventListener("dispose",ut),Xt(X)}function Xt(P){ie(P),Ft.remove(P)}function ie(P){const X=Ft.get(P).programs;X!==void 0&&(X.forEach(function(J){$.releaseProgram(J)}),P.isShaderMaterial&&$.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,J,H,tt,pt){X===null&&(X=zt);const wt=tt.isMesh&&tt.matrixWorld.determinant()<0,Rt=Df(P,X,J,H,tt);Et.setMaterial(H,wt);let Ct=J.index,kt=1;H.wireframe===!0&&(Ct=L.getWireframeAttribute(J),kt=2);const Lt=J.drawRange,Ut=J.attributes.position;let Qt=Lt.start*kt,ae=(Lt.start+Lt.count)*kt;pt!==null&&(Qt=Math.max(Qt,pt.start*kt),ae=Math.min(ae,(pt.start+pt.count)*kt)),Ct!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,Ct.count)):Ut!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,Ut.count));const mn=ae-Qt;if(mn<0||mn===1/0)return;ft.setup(tt,H,Rt,J,Ct);let Gn,ue=xt;if(Ct!==null&&(Gn=ye.get(Ct),ue=vt,ue.setIndex(Gn)),tt.isMesh)H.wireframe===!0?(Et.setLineWidth(H.wireframeLinewidth*Bt()),ue.setMode(q.LINES)):ue.setMode(q.TRIANGLES);else if(tt.isLine){let qt=H.linewidth;qt===void 0&&(qt=1),Et.setLineWidth(qt*Bt()),tt.isLineSegments?ue.setMode(q.LINES):tt.isLineLoop?ue.setMode(q.LINE_LOOP):ue.setMode(q.LINE_STRIP)}else tt.isPoints?ue.setMode(q.POINTS):tt.isSprite&&ue.setMode(q.TRIANGLES);if(tt.isInstancedMesh)ue.renderInstances(Qt,mn,tt.count);else if(J.isInstancedBufferGeometry){const qt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ko=Math.min(J.instanceCount,qt);ue.renderInstances(Qt,mn,Ko)}else ue.render(Qt,mn)},this.compile=function(P,X){function J(H,tt,pt){H.transparent===!0&&H.side===Qn&&H.forceSinglePass===!1?(H.side=qe,H.needsUpdate=!0,Xs(H,tt,pt),H.side=wi,H.needsUpdate=!0,Xs(H,tt,pt),H.side=Qn):Xs(H,tt,pt)}m=U.get(P),m.init(),v.push(m),P.traverseVisible(function(H){H.isLight&&H.layers.test(X.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x.useLegacyLights),P.traverse(function(H){const tt=H.material;if(tt)if(Array.isArray(tt))for(let pt=0;pt<tt.length;pt++){const wt=tt[pt];J(wt,P,H)}else J(tt,P,H)}),v.pop(),m=null};let he=null;function Ti(P){he&&he(P)}function re(){Fe.stop()}function An(){Fe.start()}const Fe=new df;Fe.setAnimationLoop(Ti),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(P){he=P,z.setAnimationLoop(P),P===null?Fe.stop():Fe.start()},z.addEventListener("sessionstart",re),z.addEventListener("sessionend",An),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(X=z.updateCameraXR(X)),P.isScene===!0&&P.onBeforeRender(x,P,X,b),m=U.get(P,v.length),m.init(),v.push(m),dt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(dt),it=this.localClippingEnabled,et=nt.init(this.clippingPlanes,it),g=st.get(P,p.length),g.init(),p.push(g),ll(P,X,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(G,W),et===!0&&nt.beginShadows();const J=m.state.shadowsArray;if(rt.render(J,P,X),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,K.render(g,P),m.setupLights(x.useLegacyLights),X.isArrayCamera){const H=X.cameras;for(let tt=0,pt=H.length;tt<pt;tt++){const wt=H[tt];hl(g,P,wt,wt.viewport)}}else hl(g,P,X);b!==null&&(Pt.updateMultisampleRenderTarget(b),Pt.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(x,P,X),ft.resetDefaultState(),T=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ll(P,X,J,H){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){H&&Mt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(dt);const wt=A.update(P),Rt=P.material;Rt.visible&&g.push(P,wt,Rt,J,Mt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Z.intersectsObject(P))){P.isSkinnedMesh&&P.skeleton.frame!==Zt.render.frame&&(P.skeleton.update(),P.skeleton.frame=Zt.render.frame);const wt=A.update(P),Rt=P.material;if(H&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Mt.copy(P.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Mt.copy(wt.boundingSphere.center)),Mt.applyMatrix4(P.matrixWorld).applyMatrix4(dt)),Array.isArray(Rt)){const Ct=wt.groups;for(let kt=0,Lt=Ct.length;kt<Lt;kt++){const Ut=Ct[kt],Qt=Rt[Ut.materialIndex];Qt&&Qt.visible&&g.push(P,wt,Qt,J,Mt.z,Ut)}}else Rt.visible&&g.push(P,wt,Rt,J,Mt.z,null)}}const pt=P.children;for(let wt=0,Rt=pt.length;wt<Rt;wt++)ll(pt[wt],X,J,H)}function hl(P,X,J,H){const tt=P.opaque,pt=P.transmissive,wt=P.transparent;m.setupLightsView(J),et===!0&&nt.setGlobalState(x.clippingPlanes,J),pt.length>0&&Lf(tt,pt,X,J),H&&Et.viewport(w.copy(H)),tt.length>0&&qs(tt,X,J),pt.length>0&&qs(pt,X,J),wt.length>0&&qs(wt,X,J),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Lf(P,X,J,H){const tt=Dt.isWebGL2;lt===null&&(lt=new sr(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Ns:Mi,minFilter:Us,samples:tt&&a===!0?4:0})),x.getDrawingBufferSize(At),tt?lt.setSize(At.x,At.y):lt.setSize(_c(At.x),_c(At.y));const pt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(C),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const wt=x.toneMapping;x.toneMapping=ei,qs(P,J,H),Pt.updateMultisampleRenderTarget(lt),Pt.updateRenderTargetMipmap(lt);let Rt=!1;for(let Ct=0,kt=X.length;Ct<kt;Ct++){const Lt=X[Ct],Ut=Lt.object,Qt=Lt.geometry,ae=Lt.material,mn=Lt.group;if(ae.side===Qn&&Ut.layers.test(H.layers)){const Gn=ae.side;ae.side=qe,ae.needsUpdate=!0,ul(Ut,J,H,Qt,ae,mn),ae.side=Gn,ae.needsUpdate=!0,Rt=!0}}Rt===!0&&(Pt.updateMultisampleRenderTarget(lt),Pt.updateRenderTargetMipmap(lt)),x.setRenderTarget(pt),x.setClearColor(C,I),x.toneMapping=wt}function qs(P,X,J){const H=X.isScene===!0?X.overrideMaterial:null;for(let tt=0,pt=P.length;tt<pt;tt++){const wt=P[tt],Rt=wt.object,Ct=wt.geometry,kt=H===null?wt.material:H,Lt=wt.group;Rt.layers.test(J.layers)&&ul(Rt,X,J,Ct,kt,Lt)}}function ul(P,X,J,H,tt,pt){P.onBeforeRender(x,X,J,H,tt,pt),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),tt.onBeforeRender(x,X,J,H,P,pt),tt.transparent===!0&&tt.side===Qn&&tt.forceSinglePass===!1?(tt.side=qe,tt.needsUpdate=!0,x.renderBufferDirect(J,X,H,tt,P,pt),tt.side=wi,tt.needsUpdate=!0,x.renderBufferDirect(J,X,H,tt,P,pt),tt.side=Qn):x.renderBufferDirect(J,X,H,tt,P,pt),P.onAfterRender(x,X,J,H,tt,pt)}function Xs(P,X,J){X.isScene!==!0&&(X=zt);const H=Ft.get(P),tt=m.state.lights,pt=m.state.shadowsArray,wt=tt.state.version,Rt=$.getParameters(P,tt.state,pt,X,J),Ct=$.getProgramCacheKey(Rt);let kt=H.programs;H.environment=P.isMeshStandardMaterial?X.environment:null,H.fog=X.fog,H.envMap=(P.isMeshStandardMaterial?me:Yt).get(P.envMap||H.environment),kt===void 0&&(P.addEventListener("dispose",ut),kt=new Map,H.programs=kt);let Lt=kt.get(Ct);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===wt)return dl(P,Rt),Lt}else Rt.uniforms=$.getUniforms(P),P.onBuild(J,Rt,x),P.onBeforeCompile(Rt,x),Lt=$.acquireProgram(Rt,Ct),kt.set(Ct,Lt),H.uniforms=Rt.uniforms;const Ut=H.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ut.clippingPlanes=nt.uniform),dl(P,Rt),H.needsLights=Uf(P),H.lightsStateVersion=wt,H.needsLights&&(Ut.ambientLightColor.value=tt.state.ambient,Ut.lightProbe.value=tt.state.probe,Ut.directionalLights.value=tt.state.directional,Ut.directionalLightShadows.value=tt.state.directionalShadow,Ut.spotLights.value=tt.state.spot,Ut.spotLightShadows.value=tt.state.spotShadow,Ut.rectAreaLights.value=tt.state.rectArea,Ut.ltc_1.value=tt.state.rectAreaLTC1,Ut.ltc_2.value=tt.state.rectAreaLTC2,Ut.pointLights.value=tt.state.point,Ut.pointLightShadows.value=tt.state.pointShadow,Ut.hemisphereLights.value=tt.state.hemi,Ut.directionalShadowMap.value=tt.state.directionalShadowMap,Ut.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ut.spotShadowMap.value=tt.state.spotShadowMap,Ut.spotLightMatrix.value=tt.state.spotLightMatrix,Ut.spotLightMap.value=tt.state.spotLightMap,Ut.pointShadowMap.value=tt.state.pointShadowMap,Ut.pointShadowMatrix.value=tt.state.pointShadowMatrix);const Qt=Lt.getUniforms(),ae=To.seqWithValue(Qt.seq,Ut);return H.currentProgram=Lt,H.uniformsList=ae,Lt}function dl(P,X){const J=Ft.get(P);J.outputColorSpace=X.outputColorSpace,J.instancing=X.instancing,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Df(P,X,J,H,tt){X.isScene!==!0&&(X=zt),Pt.resetTextureUnits();const pt=X.fog,wt=H.isMeshStandardMaterial?X.environment:null,Rt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ye,Ct=(H.isMeshStandardMaterial?me:Yt).get(H.envMap||wt),kt=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Lt=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!J.morphAttributes.position,Qt=!!J.morphAttributes.normal,ae=!!J.morphAttributes.color,mn=H.toneMapped?x.toneMapping:ei,Gn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ue=Gn!==void 0?Gn.length:0,qt=Ft.get(H),Ko=m.state.lights;if(et===!0&&(it===!0||P!==S)){const Ke=P===S&&H.id===T;nt.setState(H,P,Ke)}let Me=!1;H.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ko.state.version||qt.outputColorSpace!==Rt||tt.isInstancedMesh&&qt.instancing===!1||!tt.isInstancedMesh&&qt.instancing===!0||tt.isSkinnedMesh&&qt.skinning===!1||!tt.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==Ct||H.fog===!0&&qt.fog!==pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==nt.numPlanes||qt.numIntersection!==nt.numIntersection)||qt.vertexAlphas!==kt||qt.vertexTangents!==Lt||qt.morphTargets!==Ut||qt.morphNormals!==Qt||qt.morphColors!==ae||qt.toneMapping!==mn||Dt.isWebGL2===!0&&qt.morphTargetsCount!==ue)&&(Me=!0):(Me=!0,qt.__version=H.version);let Ai=qt.currentProgram;Me===!0&&(Ai=Xs(H,X,tt));let fl=!1,rs=!1,Zo=!1;const Oe=Ai.getUniforms(),Ri=qt.uniforms;if(Et.useProgram(Ai.program)&&(fl=!0,rs=!0,Zo=!0),H.id!==T&&(T=H.id,rs=!0),fl||S!==P){if(Oe.setValue(q,"projectionMatrix",P.projectionMatrix),Dt.logarithmicDepthBuffer&&Oe.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),S!==P&&(S=P,rs=!0,Zo=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Ke=Oe.map.cameraPosition;Ke!==void 0&&Ke.setValue(q,Mt.setFromMatrixPosition(P.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Oe.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||tt.isSkinnedMesh)&&Oe.setValue(q,"viewMatrix",P.matrixWorldInverse)}if(tt.isSkinnedMesh){Oe.setOptional(q,tt,"bindMatrix"),Oe.setOptional(q,tt,"bindMatrixInverse");const Ke=tt.skeleton;Ke&&(Dt.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(q,"boneTexture",Ke.boneTexture,Pt),Oe.setValue(q,"boneTextureSize",Ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $o=J.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0&&Dt.isWebGL2===!0)&&gt.update(tt,J,Ai),(rs||qt.receiveShadow!==tt.receiveShadow)&&(qt.receiveShadow=tt.receiveShadow,Oe.setValue(q,"receiveShadow",tt.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ri.envMap.value=Ct,Ri.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),rs&&(Oe.setValue(q,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&If(Ri,Zo),pt&&H.fog===!0&&ot.refreshFogUniforms(Ri,pt),ot.refreshMaterialUniforms(Ri,H,k,F,lt),To.upload(q,qt.uniformsList,Ri,Pt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(To.upload(q,qt.uniformsList,Ri,Pt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Oe.setValue(q,"center",tt.center),Oe.setValue(q,"modelViewMatrix",tt.modelViewMatrix),Oe.setValue(q,"normalMatrix",tt.normalMatrix),Oe.setValue(q,"modelMatrix",tt.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ke=H.uniformsGroups;for(let Jo=0,Nf=Ke.length;Jo<Nf;Jo++)if(Dt.isWebGL2){const pl=Ke[Jo];bt.update(pl,Ai),bt.bind(pl,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function If(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Uf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,X,J){Ft.get(P.texture).__webglTexture=X,Ft.get(P.depthTexture).__webglTexture=J;const H=Ft.get(P);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=J===void 0,H.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,X){const J=Ft.get(P);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,J=0){b=P,y=X,E=J;let H=!0,tt=null,pt=!1,wt=!1;if(P){const Ct=Ft.get(P);Ct.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(q.FRAMEBUFFER,null),H=!1):Ct.__webglFramebuffer===void 0?Pt.setupRenderTarget(P):Ct.__hasExternalTextures&&Pt.rebindTextures(P,Ft.get(P.texture).__webglTexture,Ft.get(P.depthTexture).__webglTexture);const kt=P.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(wt=!0);const Lt=Ft.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(tt=Lt[X],pt=!0):Dt.isWebGL2&&P.samples>0&&Pt.useMultisampledRTT(P)===!1?tt=Ft.get(P).__webglMultisampledFramebuffer:tt=Lt,w.copy(P.viewport),O.copy(P.scissor),B=P.scissorTest}else w.copy(j).multiplyScalar(k).floor(),O.copy(Q).multiplyScalar(k).floor(),B=N;if(Et.bindFramebuffer(q.FRAMEBUFFER,tt)&&Dt.drawBuffers&&H&&Et.drawBuffers(P,tt),Et.viewport(w),Et.scissor(O),Et.setScissorTest(B),pt){const Ct=Ft.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ct.__webglTexture,J)}else if(wt){const Ct=Ft.get(P.texture),kt=X||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ct.__webglTexture,J||0,kt)}T=-1},this.readRenderTargetPixels=function(P,X,J,H,tt,pt,wt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ft.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){Et.bindFramebuffer(q.FRAMEBUFFER,Rt);try{const Ct=P.texture,kt=Ct.format,Lt=Ct.type;if(kt!==wn&&_t.convert(kt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=Lt===Ns&&(St.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Lt!==Mi&&_t.convert(Lt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===_i&&(Dt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-H&&J>=0&&J<=P.height-tt&&q.readPixels(X,J,H,tt,_t.convert(kt),_t.convert(Lt),pt)}finally{const Ct=b!==null?Ft.get(b).__webglFramebuffer:null;Et.bindFramebuffer(q.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(P,X,J=0){const H=Math.pow(2,-J),tt=Math.floor(X.image.width*H),pt=Math.floor(X.image.height*H);Pt.setTexture2D(X,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,P.x,P.y,tt,pt),Et.unbindTexture()},this.copyTextureToTexture=function(P,X,J,H=0){const tt=X.image.width,pt=X.image.height,wt=_t.convert(J.format),Rt=_t.convert(J.type);Pt.setTexture2D(J,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,H,P.x,P.y,tt,pt,wt,Rt,X.image.data):X.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,H,P.x,P.y,X.mipmaps[0].width,X.mipmaps[0].height,wt,X.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,H,P.x,P.y,wt,Rt,X.image),H===0&&J.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(P,X,J,H,tt=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=P.max.x-P.min.x+1,wt=P.max.y-P.min.y+1,Rt=P.max.z-P.min.z+1,Ct=_t.convert(H.format),kt=_t.convert(H.type);let Lt;if(H.isData3DTexture)Pt.setTexture3D(H,0),Lt=q.TEXTURE_3D;else if(H.isDataArrayTexture)Pt.setTexture2DArray(H,0),Lt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,H.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,H.unpackAlignment);const Ut=q.getParameter(q.UNPACK_ROW_LENGTH),Qt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),ae=q.getParameter(q.UNPACK_SKIP_PIXELS),mn=q.getParameter(q.UNPACK_SKIP_ROWS),Gn=q.getParameter(q.UNPACK_SKIP_IMAGES),ue=J.isCompressedTexture?J.mipmaps[0]:J.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,ue.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ue.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,P.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,P.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,P.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(Lt,tt,X.x,X.y,X.z,pt,wt,Rt,Ct,kt,ue.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Lt,tt,X.x,X.y,X.z,pt,wt,Rt,Ct,ue.data)):q.texSubImage3D(Lt,tt,X.x,X.y,X.z,pt,wt,Rt,Ct,kt,ue),q.pixelStorei(q.UNPACK_ROW_LENGTH,Ut),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Qt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ae),q.pixelStorei(q.UNPACK_SKIP_ROWS,mn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Gn),tt===0&&H.generateMipmaps&&q.generateMipmap(Lt),Et.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Pt.setTextureCube(P,0):P.isData3DTexture?Pt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Pt.setTexture2DArray(P,0):Pt.setTexture2D(P,0),Et.unbindTexture()},this.resetState=function(){y=0,E=0,b=null,Et.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?tr:Qd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===tr?It:Ye}}class Ey extends Vs{}Ey.prototype.isWebGL1Renderer=!0;class qo extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class el extends si{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new nn(r,3)),this.setAttribute("normal",new nn(r.slice(),3)),this.setAttribute("uv",new nn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new V,M=new V,y=new V;for(let E=0;E<e.length;E+=3)f(e[E+0],x),f(e[E+1],M),f(e[E+2],y),c(x,M,y,v)}function c(v,x,M,y){const E=y+1,b=[];for(let T=0;T<=E;T++){b[T]=[];const S=v.clone().lerp(M,T/E),w=x.clone().lerp(M,T/E),O=E-T;for(let B=0;B<=O;B++)B===0&&T===E?b[T][B]=S:b[T][B]=S.clone().lerp(w,B/O)}for(let T=0;T<E;T++)for(let S=0;S<2*(E-T)-1;S++){const w=Math.floor(S/2);S%2===0?(u(b[T][w+1]),u(b[T+1][w]),u(b[T][w])):(u(b[T][w+1]),u(b[T+1][w+1]),u(b[T+1][w]))}}function l(v){const x=new V;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const v=new V;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=m(v)/2/Math.PI+.5,y=p(v)/Math.PI+.5;o.push(M,1-y)}_(),d()}function d(){for(let v=0;v<o.length;v+=6){const x=o[v+0],M=o[v+2],y=o[v+4],E=Math.max(x,M,y),b=Math.min(x,M,y);E>.9&&b<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),y<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function _(){const v=new V,x=new V,M=new V,y=new V,E=new Tt,b=new Tt,T=new Tt;for(let S=0,w=0;S<r.length;S+=9,w+=6){v.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),E.set(o[w+0],o[w+1]),b.set(o[w+2],o[w+3]),T.set(o[w+4],o[w+5]),y.copy(v).add(x).add(M).divideScalar(3);const O=m(y);g(E,w+0,v,O),g(b,w+2,x,O),g(T,w+4,M,O)}}function g(v,x,M,y){y<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.vertices,t.indices,t.radius,t.details)}}class Es extends el{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Es(t.radius,t.detail)}}class Hs extends si{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new V,u=new V,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const E=y/e;d.x=-t*Math.cos(i+E*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+E*r)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(E+M,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=h[p][v+1],M=h[p][v],y=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(x,M,E),(p!==n-1||c<Math.PI)&&f.push(M,y,E)}this.setIndex(f),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vf extends hr{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ht(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class xf extends hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wy extends xf{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ws extends hr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Kh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Xo{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const by=new Xo;class nl{constructor(t){this.manager=t!==void 0?t:by,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class yf extends nl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Kh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Fs("img");function c(){h(),Kh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Mf extends nl{constructor(t){super(t)}load(t,e,n,i){const r=new Jc;r.colorSpace=It;const o=new yf(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}}class il extends nl{constructor(t){super(t)}load(t,e,n,i){const r=new Xe,o=new yf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class rl extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Sf extends rl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ba=new _e,Zh=new V,$h=new V;class Ty{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ay extends Ty{constructor(){super(new ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ef extends rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Ay}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sl extends rl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jo{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Jh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Jh(){return(typeof performance>"u"?Date:performance).now()}class Ry{constructor(t,e,n=0,i=1/0){this.ray=new of(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return xc(t,this,n,e),n.sort(Qh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)xc(t[i],this,n,e);return n.sort(Qh),n}}function Qh(s,t){return s.distance-t.distance}function xc(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)xc(i[r],t,e,!0)}}class tu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);const eu={type:"change"},ka={type:"start"},nu={type:"end"};class Yo extends lr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dr.ROTATE,MIDDLE:dr.DOLLY,RIGHT:dr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Yt),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Yt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(eu),n.update(),r=i.NONE},this.update=function(){const U=new V,nt=new or().setFromUnitVectors(t.up,new V(0,1,0)),rt=nt.clone().invert(),K=new V,gt=new or,xt=new V,vt=2*Math.PI;return function(){const ft=n.object.position;U.copy(ft).sub(n.target),U.applyQuaternion(nt),a.setFromVector3(U),n.autoRotate&&r===i.NONE&&S(b()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let bt=n.minAzimuthAngle,Vt=n.maxAzimuthAngle;return isFinite(bt)&&isFinite(Vt)&&(bt<-Math.PI?bt+=vt:bt>Math.PI&&(bt-=vt),Vt<-Math.PI?Vt+=vt:Vt>Math.PI&&(Vt-=vt),bt<=Vt?a.theta=Math.max(bt,Math.min(Vt,a.theta)):a.theta=a.theta>(bt+Vt)/2?Math.max(bt,a.theta):Math.min(Vt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),U.setFromSpherical(a),U.applyQuaternion(rt),ft.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,d||K.distanceToSquared(n.object.position)>o||8*(1-gt.dot(n.object.quaternion))>o||xt.distanceToSquared(n.target)>0?(n.dispatchEvent(eu),K.copy(n.object.position),gt.copy(n.object.quaternion),xt.copy(n.target),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",L),n.domElement.removeEventListener("pointerdown",St),n.domElement.removeEventListener("pointercancel",Et),n.domElement.removeEventListener("wheel",Pt),n.domElement.removeEventListener("pointermove",Dt),n.domElement.removeEventListener("pointerup",Et),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Yt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new tu,c=new tu;let l=1;const h=new V;let d=!1;const u=new Tt,f=new Tt,_=new Tt,g=new Tt,m=new Tt,p=new Tt,v=new Tt,x=new Tt,M=new Tt,y=[],E={};function b(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function S(U){c.theta-=U}function w(U){c.phi-=U}const O=function(){const U=new V;return function(rt,K){U.setFromMatrixColumn(K,0),U.multiplyScalar(-rt),h.add(U)}}(),B=function(){const U=new V;return function(rt,K){n.screenSpacePanning===!0?U.setFromMatrixColumn(K,1):(U.setFromMatrixColumn(K,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(rt),h.add(U)}}(),C=function(){const U=new V;return function(rt,K){const gt=n.domElement;if(n.object.isPerspectiveCamera){const xt=n.object.position;U.copy(xt).sub(n.target);let vt=U.length();vt*=Math.tan(n.object.fov/2*Math.PI/180),O(2*rt*vt/gt.clientHeight,n.object.matrix),B(2*K*vt/gt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(rt*(n.object.right-n.object.left)/n.object.zoom/gt.clientWidth,n.object.matrix),B(K*(n.object.top-n.object.bottom)/n.object.zoom/gt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(U){n.object.isPerspectiveCamera?l/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(U){n.object.isPerspectiveCamera?l*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(U){u.set(U.clientX,U.clientY)}function k(U){v.set(U.clientX,U.clientY)}function G(U){g.set(U.clientX,U.clientY)}function W(U){f.set(U.clientX,U.clientY),_.subVectors(f,u).multiplyScalar(n.rotateSpeed);const nt=n.domElement;S(2*Math.PI*_.x/nt.clientHeight),w(2*Math.PI*_.y/nt.clientHeight),u.copy(f),n.update()}function j(U){x.set(U.clientX,U.clientY),M.subVectors(x,v),M.y>0?I(T()):M.y<0&&D(T()),v.copy(x),n.update()}function Q(U){m.set(U.clientX,U.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),C(p.x,p.y),g.copy(m),n.update()}function N(U){U.deltaY<0?D(T()):U.deltaY>0&&I(T()),n.update()}function Z(U){let nt=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),nt=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),nt=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),nt=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),nt=!0;break}nt&&(U.preventDefault(),n.update())}function et(){if(y.length===1)u.set(y[0].pageX,y[0].pageY);else{const U=.5*(y[0].pageX+y[1].pageX),nt=.5*(y[0].pageY+y[1].pageY);u.set(U,nt)}}function it(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{const U=.5*(y[0].pageX+y[1].pageX),nt=.5*(y[0].pageY+y[1].pageY);g.set(U,nt)}}function lt(){const U=y[0].pageX-y[1].pageX,nt=y[0].pageY-y[1].pageY,rt=Math.sqrt(U*U+nt*nt);v.set(0,rt)}function dt(){n.enableZoom&&lt(),n.enablePan&&it()}function At(){n.enableZoom&&lt(),n.enableRotate&&et()}function Mt(U){if(y.length==1)f.set(U.pageX,U.pageY);else{const rt=st(U),K=.5*(U.pageX+rt.x),gt=.5*(U.pageY+rt.y);f.set(K,gt)}_.subVectors(f,u).multiplyScalar(n.rotateSpeed);const nt=n.domElement;S(2*Math.PI*_.x/nt.clientHeight),w(2*Math.PI*_.y/nt.clientHeight),u.copy(f)}function zt(U){if(y.length===1)m.set(U.pageX,U.pageY);else{const nt=st(U),rt=.5*(U.pageX+nt.x),K=.5*(U.pageY+nt.y);m.set(rt,K)}p.subVectors(m,g).multiplyScalar(n.panSpeed),C(p.x,p.y),g.copy(m)}function Bt(U){const nt=st(U),rt=U.pageX-nt.x,K=U.pageY-nt.y,gt=Math.sqrt(rt*rt+K*K);x.set(0,gt),M.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),I(M.y),v.copy(x)}function q(U){n.enableZoom&&Bt(U),n.enablePan&&zt(U)}function pe(U){n.enableZoom&&Bt(U),n.enableRotate&&Mt(U)}function St(U){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",Dt),n.domElement.addEventListener("pointerup",Et)),A(U),U.pointerType==="touch"?me(U):Zt(U))}function Dt(U){n.enabled!==!1&&(U.pointerType==="touch"?ye(U):Ft(U))}function Et(U){$(U),y.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",Dt),n.domElement.removeEventListener("pointerup",Et)),n.dispatchEvent(nu),r=i.NONE}function Zt(U){let nt;switch(U.button){case 0:nt=n.mouseButtons.LEFT;break;case 1:nt=n.mouseButtons.MIDDLE;break;case 2:nt=n.mouseButtons.RIGHT;break;default:nt=-1}switch(nt){case dr.DOLLY:if(n.enableZoom===!1)return;k(U),r=i.DOLLY;break;case dr.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;G(U),r=i.PAN}else{if(n.enableRotate===!1)return;F(U),r=i.ROTATE}break;case dr.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;F(U),r=i.ROTATE}else{if(n.enablePan===!1)return;G(U),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ka)}function Ft(U){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;W(U);break;case i.DOLLY:if(n.enableZoom===!1)return;j(U);break;case i.PAN:if(n.enablePan===!1)return;Q(U);break}}function Pt(U){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(U.preventDefault(),n.dispatchEvent(ka),N(U),n.dispatchEvent(nu))}function Yt(U){n.enabled===!1||n.enablePan===!1||Z(U)}function me(U){switch(ot(U),y.length){case 1:switch(n.touches.ONE){case fr.ROTATE:if(n.enableRotate===!1)return;et(),r=i.TOUCH_ROTATE;break;case fr.PAN:if(n.enablePan===!1)return;it(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case fr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;dt(),r=i.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ka)}function ye(U){switch(ot(U),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;zt(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(U),n.update();break;default:r=i.NONE}}function L(U){n.enabled!==!1&&U.preventDefault()}function A(U){y.push(U)}function $(U){delete E[U.pointerId];for(let nt=0;nt<y.length;nt++)if(y[nt].pointerId==U.pointerId){y.splice(nt,1);return}}function ot(U){let nt=E[U.pointerId];nt===void 0&&(nt=new Tt,E[U.pointerId]=nt),nt.set(U.pageX,U.pageY)}function st(U){const nt=U.pointerId===y[0].pointerId?y[1]:y[0];return E[nt.pointerId]}n.domElement.addEventListener("contextmenu",L),n.domElement.addEventListener("pointerdown",St),n.domElement.addEventListener("pointercancel",Et),n.domElement.addEventListener("wheel",Pt,{passive:!1}),this.update()}}class Fn{constructor(t=[0,0,0,0,0,0,0,0,0]){this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t=new R){const e=this.elements;t.x=e[0],t.y=e[4],t.z=e[8]}vmult(t,e=new R){const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e=new Fn){const{elements:n}=t;for(let i=0;i<3;i++)for(let r=0;r<3;r++){let o=0;for(let a=0;a<3;a++)o+=n[i+a*3]*this.elements[a+r*3];e.elements[i+r*3]=o}return e}scale(t,e=new Fn){const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e=new R){const r=[];let o,a;for(o=0;o<3*4;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+4*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,r[o+4*o]===0){for(a=o+1;a<l;a++)if(r[o+4*a]!==0){h=d;do u=d-h,r[u+4*o]+=r[u+4*a];while(--h);break}}if(r[o+4*o]!==0)for(a=o+1;a<l;a++){const f=r[o+4*a]/r[o+4*o];h=d;do u=d-h,r[u+4*a]=u<=o?0:r[u+4*a]-r[u+4*o]*f;while(--h)}}while(--c);if(e.z=r[2*4+3]/r[2*4+2],e.y=(r[1*4+3]-r[1*4+2]*e.z)/r[1*4+1],e.x=(r[0*4+3]-r[0*4+2]*e.z-r[0*4+1]*e.y)/r[0*4+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw"Could not solve equation! Got x=["+e.toString()+"], b=["+t.toString()+"], A=["+this.toString()+"]";return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t=new Fn){const i=[];let r,o;for(r=0;r<3*6;r++)i.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+6*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=6;let d;do{if(r=c-a,i[r+6*r]===0){for(o=r+1;o<c;o++)if(i[r+6*o]!==0){l=h;do d=h-l,i[d+6*r]+=i[d+6*o];while(--l);break}}if(i[r+6*r]!==0)for(o=r+1;o<c;o++){const u=i[r+6*o]/i[r+6*r];l=h;do d=h-l,i[d+6*o]=d<=r?0:i[d+6*o]-i[d+6*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{const u=i[r+6*o]/i[r+6*r];l=6;do d=6-l,i[d+6*o]=i[d+6*o]-i[d+6*r]*u;while(--l)}while(o--)}while(--r);r=2;do{const u=1/i[r+6*r];l=6;do d=6-l,i[d+6*r]=i[d+6*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=i[3+o+6*r],isNaN(d)||d===1/0)throw"Could not reverse! A=["+this.toString()+"]";t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,_=i*c,g=r*o,m=r*a,p=r*c,v=this.elements;return v[3*0+0]=1-(u+_),v[3*0+1]=h-p,v[3*0+2]=d+m,v[3*1+0]=h+p,v[3*1+1]=1-(l+_),v[3*1+2]=f-g,v[3*2+0]=d-m,v[3*2+1]=f+g,v[3*2+2]=1-(l+u),this}transpose(t=new Fn){const e=t.elements,n=this.elements;for(let i=0;i!==3;i++)for(let r=0;r!==3;r++)e[3*i+r]=n[3*r+i];return t}}class R{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}cross(t,e=new R){const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*i,e.y=c*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new R(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new R(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Fn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t=new R){const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e=new R){const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e=new R){return e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n=new R){return n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t=new R){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Cy,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Py;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return this.x+","+this.y+","+this.z}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e=1e-6){return!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t=1e-6){return!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(iu),iu.almostEquals(t,e)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const Cy=new R,Py=new R,iu=new R;class te{constructor(t={}){this.lowerBound=new R,this.upperBound=new R,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,ru),l=ru),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new te().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=su,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=su,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),_=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(_<0||f>_)}}const ru=new R,su=[new R,new R,new R,new R,new R,new R,new R,new R];class ou{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class wf{constructor(){}addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class ge{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return this.x+","+this.y+","+this.z+","+this.w}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t=new R){this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Ly,i=Dy;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e=new ge){const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-r*c,e.y=i*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-r*l,e}inverse(t=new ge){const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t=new ge){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e=new R){const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*i,d=l*i+c*n-o*r,u=l*r+o*i-a*n,f=-o*n-a*i-c*r;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e="YZX"){let n,i,r;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error("Euler order "+e+" not supported yet.")}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i="XYZ"){const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new ge(this.x,this.y,this.z,this.w)}slerp(t,e,n=new ge){const i=this.x,r=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,f,_,g,m;return f=i*c+r*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),_=Math.sin(u),g=Math.sin((1-e)*u)/_,m=Math.sin(e*u)/_):(g=1-e,m=e),n.x=g*i+m*c,n.y=g*r+m*l,n.z=g*o+m*h,n.w=g*a+m*d,n}integrate(t,e,n,i=new ge){const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*l),i.y+=u*(o*d+a*c-r*h),i.z+=u*(a*d+r*l-o*c),i.w+=u*(-r*c-o*l-a*h),i}}const Ly=new R,Dy=new R,Iy={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class yt{constructor(t={}){this.id=yt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type}volume(){throw"volume() not implemented for shape type "+this.type}calculateLocalInertia(t,e){throw"calculateLocalInertia() not implemented for shape type "+this.type}calculateWorldAABB(t,e,n,i){throw"calculateWorldAABB() not implemented for shape type "+this.type}}yt.idCounter=0;yt.types=Iy;class jt{constructor(t={}){this.position=new R,this.quaternion=new ge,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return jt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return jt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e=new R){return this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i=new R){return n.vsub(t,i),e.conjugate(au),au.vmult(i,i),i}static pointToWorldFrame(t,e,n,i=new R){return e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n=new R){return t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i=new R){return e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const au=new ge;class nr extends yt{constructor(t={}){const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:yt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new R;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error("Vertex "+this.faces[t][i]+" not found!");const e=this.faceNormals[t]||new R;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(".faceNormals["+t+"] = Vec3("+e.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(let i=0;i<this.faces[t].length;i++)console.warn(".vertices["+this.faces[t][i]+"] = Vec3("+this.vertices[this.faces[t][i]].toString()+")")}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];nr.computeNormal(i,r,o,e)}clipAgainstHull(t,e,n,i,r,o,a,c,l){const h=new R;let d=-1,u=-Number.MAX_VALUE;for(let _=0;_<n.faces.length;_++){h.copy(n.faceNormals[_]),r.vmult(h,h);const g=h.dot(o);g>u&&(u=g,d=_)}const f=[];for(let _=0;_<n.faces[d].length;_++){const g=n.vertices[n.faces[d][_]],m=new R;m.copy(g),r.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,r,o,a,c){const l=new R,h=new R,d=new R,u=new R,f=new R,_=new R;let g=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],l);const v=m.testSepAxis(l,t,e,n,i,r);if(v===!1)return!1;v<g&&(g=v,o.copy(l))}else{const p=a?a.length:m.faces.length;for(let v=0;v<p;v++){const x=a?a[v]:v;l.copy(m.faceNormals[x]),n.vmult(l,l);const M=m.testSepAxis(l,t,e,n,i,r);if(M===!1)return!1;M<g&&(g=M,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);const v=m.testSepAxis(h,t,e,n,i,r);if(v===!1)return!1;v<g&&(g=v,o.copy(h))}else{const p=c?c.length:t.faces.length;for(let v=0;v<p;v++){const x=c?c[v]:v;h.copy(t.faceNormals[x]),r.vmult(h,h);const M=m.testSepAxis(h,t,e,n,i,r);if(M===!1)return!1;M<g&&(g=M,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],f),u.cross(f,_),!_.almostZero()){_.normalize();const x=m.testSepAxis(_,t,e,n,i,r);if(x===!1)return!1;x<g&&(g=x,o.copy(_))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;nr.project(a,t,n,i,Ga),nr.project(e,t,r,o,Va);const c=Ga[0],l=Ga[1],h=Va[0],d=Va[1];if(c<d||h<l)return!1;const u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){const n=new R,i=new R;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const c=new R,l=new R,h=new R,d=new R,u=new R,f=new R,_=new R,g=new R,m=this,p=[],v=i,x=p;let M=-1,y=Number.MAX_VALUE;for(let w=0;w<m.faces.length;w++){c.copy(m.faceNormals[w]),n.vmult(c,c);const O=c.dot(t);O<y&&(y=O,M=w)}if(M<0)return;const E=m.faces[M];E.connectedFaces=[];for(let w=0;w<m.faces.length;w++)for(let O=0;O<m.faces[w].length;O++)E.indexOf(m.faces[w][O])!==-1&&w!==M&&E.connectedFaces.indexOf(w)===-1&&E.connectedFaces.push(w);const b=E.length;for(let w=0;w<b;w++){const O=m.vertices[E[w]],B=m.vertices[E[(w+1)%b]];O.vsub(B,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(O),n.vmult(f,f),e.vadd(f,f);const C=E.connectedFaces[w];_.copy(this.faceNormals[C]);const I=this.getPlaneConstantOfFace(C);g.copy(_),n.vmult(g,g);const D=I-g.dot(e);for(this.clipFaceAgainstPlane(v,x,g,D);v.length;)v.shift();for(;x.length;)v.push(x.shift())}_.copy(this.faceNormals[M]);const T=this.getPlaneConstantOfFace(M);g.copy(_),n.vmult(g,g);const S=T-g.dot(e);for(let w=0;w<v.length;w++){let O=g.dot(v[w])+S;if(O<=r&&(console.log("clamped: depth="+O+" to minDist="+r),O=r),O<=o){const B=v[w];if(O<=1e-6){const C={point:B,normal:g,depth:O};a.push(C)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,r<0)if(o<0){const d=new R;d.copy(l),e.push(d)}else{const d=new R;c.lerp(l,r/(r-o),d),e.push(d)}else if(o<0){const d=new R;c.lerp(l,r/(r-o),d),e.push(d),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new R);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,c,l,h,d,u=new R;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);const _=u;(o===void 0||_.x<o)&&(o=_.x),(l===void 0||_.x>l)&&(l=_.x),(a===void 0||_.y<a)&&(a=_.y),(h===void 0||_.y>h)&&(h=_.y),(c===void 0||_.z<c)&&(c=_.z),(d===void 0||_.z>d)&&(d=_.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t=new R){const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=new R;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new R;t.vsub(c,l);const h=a.dot(l),d=new R;r.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}}nr.computeNormal=(s,t,e,n)=>{const i=new R,r=new R;t.vsub(s,r),e.vsub(t,i),i.cross(r,n),n.isZero()||n.normalize()};const Ga=[],Va=[];nr.project=(s,t,e,n,i)=>{const r=s.vertices.length,o=new R;let a=0,c=0;const l=new R,h=s.vertices;l.setZero(),jt.vectorToLocalFrame(e,n,t,o),jt.pointToLocalFrame(e,n,l,l);const d=l.dot(o);c=a=h[0].dot(o);for(let u=1;u<r;u++){const f=h[u].dot(o);f>a&&(a=f),f<c&&(c=f)}if(c-=d,a-=d,c>a){const u=c;c=a,a=u}i[0]=a,i[1]=c};class es extends yt{constructor(t){super({type:yt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=R,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new nr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e=new R){return es.calculateInertia(this.halfExtents,t,e),e}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)hi.set(r[o][0],r[o][1],r[o][2]),e.vmult(hi,hi),t.vadd(hi,hi),n(hi.x,hi.y,hi.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;Rn[0].set(r.x,r.y,r.z),Rn[1].set(-r.x,r.y,r.z),Rn[2].set(-r.x,-r.y,r.z),Rn[3].set(-r.x,-r.y,-r.z),Rn[4].set(r.x,-r.y,-r.z),Rn[5].set(r.x,r.y,-r.z),Rn[6].set(-r.x,r.y,-r.z),Rn[7].set(r.x,-r.y,r.z);const o=Rn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=Rn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}es.calculateInertia=(s,t,e)=>{const n=s;e.x=1/12*t*(2*n.y*2*n.y+2*n.z*2*n.z),e.y=1/12*t*(2*n.x*2*n.x+2*n.z*2*n.z),e.z=1/12*t*(2*n.y*2*n.y+2*n.x*2*n.x)};const hi=new R,Rn=[new R,new R,new R,new R,new R,new R,new R,new R],ol={AWAKE:0,SLEEPY:1,SLEEPING:2};class mt extends wf{constructor(t={}){super(),this.id=mt.idCounter++,this.index=-1,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new R,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new R,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new R,this.force=new R;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?mt.STATIC:mt.DYNAMIC,typeof t.type==typeof mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new ge,this.initQuaternion=new ge,this.previousQuaternion=new ge,this.interpolatedQuaternion=new ge,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new R,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new Fn,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new Fn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new R(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new R(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new te,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=0,this.wakeUpAfterNarrowphase=!1,t===mt.SLEEPING&&this.dispatchEvent(mt.wakeupEvent)}sleep(){this.sleepState=mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===mt.AWAKE&&n<i?(this.sleepState=mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(mt.sleepyEvent)):e===mt.SLEEPY&&n>i?this.wakeUp():e===mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===mt.SLEEPING||this.type===mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e=new R){return t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e=new R){return this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e=new R){return this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e=new R){return this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new R,r=new ge;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}computeAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Uy,o=Ny,a=this.quaternion,c=this.aabb,l=Fy;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Oy,i=zy;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(this.type!==mt.DYNAMIC)return;const n=By;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(this.type!==mt.DYNAMIC)return;const n=ky,i=Gy;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyImpulse(t,e){if(this.type!==mt.DYNAMIC)return;const n=e,i=Vy;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=Hy;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(this.type!==mt.DYNAMIC)return;const n=Wy,i=qy;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Xy;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.computeAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),es.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new R;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===mt.DYNAMIC||this.type===mt.KINEMATIC)||this.sleepState===mt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const _=d.elements,g=this.angularFactor,m=c.x*g.x,p=c.y*g.y,v=c.z*g.z;r.x+=t*(_[0]*m+_[1]*p+_[2]*v),r.y+=t*(_[3]*m+_[4]*p+_[5]*v),r.z+=t*(_[6]*m+_[7]*p+_[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}mt.COLLIDE_EVENT_NAME="collide";mt.DYNAMIC=1;mt.STATIC=2;mt.KINEMATIC=4;mt.AWAKE=ol.AWAKE;mt.SLEEPY=ol.SLEEPY;mt.SLEEPING=ol.SLEEPING;mt.idCounter=0;mt.wakeupEvent={type:"wakeup"};mt.sleepyEvent={type:"sleepy"};mt.sleepEvent={type:"sleep"};const Uy=new R,Ny=new ge,Fy=new te,Oy=new Fn,zy=new Fn,By=new R,ky=new R,Gy=new R,Vy=new R,Hy=new R,Wy=new R,qy=new R,Xy=new R;class al{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&mt.STATIC||t.sleepState===mt.SLEEPING)&&(e.type&mt.STATIC||e.sleepState===mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=jy;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.computeAABB(),e.aabbNeedsUpdate&&e.computeAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Yy,i=Ky,r=Zy,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=r[a].id,h=c<l?c+","+l:l+","+c;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(r[l]),delete n[c]}}setWorld(t){}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const jy=new R,Yy={keys:[]},Ky=[],Zy=[];al.boundingSphereCheck=(s,t)=>{const e=new R;s.position.vsub(t.position,e);const n=s.shapes[0],i=t.shapes[0];return Math.pow(n.boundingSphereRadius+i.boundingSphereRadius,2)>e.lengthSquared()};class $y extends al{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n=[]){for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.computeAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class yc{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}class Kt{constructor(t=new R,e=new R){this.from=t.clone(),this.to=e.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Kt.ANY,this.result=new yc,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Kt.ANY,this.result=e.result||new yc,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(cu),Ha.length=0,t.broadphase.aabbQuery(t,cu,Ha),this.intersectBodies(Ha),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Jy,r=Qy;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(fM(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,c=this.direction,l=new R(0,0,1);e.vmult(l,l);const h=new R;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const _=new R,g=new R,m=new R;o.vsub(n,_);const p=-l.dot(_)/f;c.scale(p,g),o.vadd(g,m),this.reportIntersection(l,m,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=tM;o.from.copy(this.from),o.to.copy(this.to),jt.pointToLocalFrame(n,e,o.from,o.from),jt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=eM;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new te;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let _=l;_<d;_++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,_,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,_,!1),jt.pointToWorldFrame(n,e,t.pillarOffset,go),this._intersectConvex(t.pillarConvex,e,go,i,r,lu),this.result.shouldStop)return;t.getConvexTrianglePillar(f,_,!0),jt.pointToWorldFrame(n,e,t.pillarOffset,go),this._intersectConvex(t.pillarConvex,e,go,i,r,lu)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=nM,_=iM;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,r,i,-1);else{const g=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=rM,c=hu,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,_=this.from,g=this.to,m=_.distanceTo(g),p=l?l.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<p;x++){const M=l?l[x]:x,y=h[M],E=u[M],b=e,T=n;c.copy(d[y[0]]),b.vmult(c,c),c.vadd(T,c),c.vsub(_,c),b.vmult(E,a);const S=f.dot(a);if(Math.abs(S)<this.precision)continue;const w=a.dot(c)/S;if(!(w<0)){f.scale(w,ke),ke.vadd(_,ke),yn.copy(d[y[0]]),b.vmult(yn,yn),T.vadd(yn,yn);for(let O=1;!v.shouldStop&&O<y.length-1;O++){Cn.copy(d[y[O]]),Pn.copy(d[y[O+1]]),b.vmult(Cn,Cn),b.vmult(Pn,Pn),T.vadd(Cn,Cn),T.vadd(Pn,Pn);const B=ke.distanceTo(_);!(_s(ke,yn,Cn,Pn)||_s(ke,Cn,yn,Pn))||B>m||this.reportIntersection(a,ke,r,i,M)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=sM,c=uM,l=dM,h=hu,d=oM,u=aM,f=cM,_=hM,g=lM;o&&o.faceList;const m=t.indices;t.vertices;const p=this.from,v=this.to,x=this.direction;l.position.copy(n),l.quaternion.copy(e),jt.vectorToLocalFrame(n,e,x,d),jt.pointToLocalFrame(n,e,p,u),jt.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const M=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let y=0,E=c.length;!this.result.shouldStop&&y!==E;y++){const b=c[y];t.getNormal(b,a),t.getVertex(m[b*3],yn),yn.vsub(u,h);const T=d.dot(a),S=a.dot(h)/T;if(S<0)continue;d.scale(S,ke),ke.vadd(u,ke),t.getVertex(m[b*3+1],Cn),t.getVertex(m[b*3+2],Pn);const w=ke.distanceSquared(u);!(_s(ke,Cn,yn,Pn)||_s(ke,yn,Cn,Pn))||w>M||(jt.vectorToWorldFrame(e,a,g),jt.pointToWorldFrame(n,e,ke,_),this.reportIntersection(g,_,r,i,b))}c.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Kt.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case Kt.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case Kt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}}Kt.CLOSEST=1;Kt.ANY=2;Kt.ALL=4;const cu=new te,Ha=[],hs=new R,Wa=new R;Kt.pointInTriangle=_s;function _s(s,t,e,n){n.vsub(t,Hi),e.vsub(t,hs),s.vsub(t,Wa);const i=Hi.dot(Hi),r=Hi.dot(hs),o=Hi.dot(Wa),a=hs.dot(hs),c=hs.dot(Wa);let l,h;return(l=a*o-r*c)>=0&&(h=i*c-r*o)>=0&&l+h<i*a-r*r}const Jy=new R,Qy=new ge,ke=new R,yn=new R,Cn=new R,Pn=new R;Kt.prototype[yt.types.BOX]=Kt.prototype._intersectBox;Kt.prototype[yt.types.PLANE]=Kt.prototype._intersectPlane;const lu={faceList:[0]},go=new R,tM=new Kt,eM=[];Kt.prototype[yt.types.HEIGHTFIELD]=Kt.prototype._intersectHeightfield;const nM=new R,iM=new R;Kt.prototype[yt.types.SPHERE]=Kt.prototype._intersectSphere;const rM=new R,hu=new R;Kt.prototype[yt.types.CONVEXPOLYHEDRON]=Kt.prototype._intersectConvex;const sM=new R,oM=new R,aM=new R,cM=new R,lM=new R,hM=new R;new te;const uM=[],dM=new jt;Kt.prototype[yt.types.TRIMESH]=Kt.prototype._intersectTrimesh;const Hi=new R,_o=new R;function fM(s,t,e){e.vsub(s,Hi);const n=Hi.dot(t);return t.scale(n,_o),_o.vadd(s,_o),e.distanceTo(_o)}class bn extends al{constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,r=i.length,o=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const l=i[a];for(c=a+1;c<r;c++){const h=i[c];if(this.needBroadphaseCollision(l,h)){if(!bn.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const r=t[i];r.aabbNeedsUpdate&&r.computeAABB()}e===0?bn.insertionSortX(t):e===1?bn.insertionSortY(t):e===2&&bn.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,r=0,o=0;const a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){const _=a[f],g=_.position.x;t+=g,e+=g*g;const m=_.position.y;n+=m,i+=m*m;const p=_.position.z;r+=p,o+=p*p}const h=e-t*t*l,d=i-n*n*l,u=o-r*r*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n=[]){this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let r="x";i===1&&(r="y"),i===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const c=o[a];c.aabbNeedsUpdate&&c.computeAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}}bn.insertionSortX=s=>{for(let t=1,e=s.length;t<e;t++){const n=s[t];let i;for(i=t-1;i>=0&&!(s[i].aabb.lowerBound.x<=n.aabb.lowerBound.x);i--)s[i+1]=s[i];s[i+1]=n}return s};bn.insertionSortY=s=>{for(let t=1,e=s.length;t<e;t++){const n=s[t];let i;for(i=t-1;i>=0&&!(s[i].aabb.lowerBound.y<=n.aabb.lowerBound.y);i--)s[i+1]=s[i];s[i+1]=n}return s};bn.insertionSortZ=s=>{for(let t=1,e=s.length;t<e;t++){const n=s[t];let i;for(i=t-1;i>=0&&!(s[i].aabb.lowerBound.z<=n.aabb.lowerBound.z);i--)s[i+1]=s[i];s[i+1]=n}return s};bn.checkBounds=(s,t,e)=>{let n,i;e===0?(n=s.position.x,i=t.position.x):e===1?(n=s.position.y,i=t.position.y):e===2&&(n=s.position.z,i=t.position.z);const r=s.boundingRadius,o=t.boundingRadius,a=n+r;return i-o<a};function bf(){}bf.defaults=(s={},t)=>{for(let e in t)e in s||(s[e]=t[e]);return s};class uu{constructor(){this.spatial=new R,this.rotational=new R}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ws{constructor(t,e,n=-1e6,i=1e6){this.id=Ws.id++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new uu,this.jacobianElementB=new uu,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return r.scale(l,du),a.scale(h,fu),n.invInertiaWorldSolve.vmult(o,pu),i.invInertiaWorldSolve.vmult(c,mu),t.multiplyVectors(du,pu)+e.multiplyVectors(fu,mu)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=r+o;return a.vmult(t.rotational,vo),l+=vo.dot(t.rotational),c.vmult(e.rotational,vo),l+=vo.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=pM;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ws.id=0;const du=new R,fu=new R,pu=new R,mu=new R,vo=new R,pM=new R;class mM extends Ws{constructor(t,e,n=1e6){super(t,e,0,n),this.restitution=0,this.ri=new R,this.rj=new R,this.ni=new R}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,c=gM,l=_M,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,f=r.angularVelocity;r.force,r.torque;const _=vM,g=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(g.spatial),c.negate(g.rotational),m.spatial.copy(p),m.rotational.copy(l),_.copy(r.position),_.vadd(a,_),_.vsub(i.position,_),_.vsub(o,_);const v=p.dot(_),x=this.restitution+1,M=x*u.dot(p)-x*h.dot(p)+f.dot(l)-d.dot(c),y=this.computeGiMf();return-v*e-M*n-t*y}getImpactVelocityAlongNormal(){const t=xM,e=yM,n=MM,i=SM,r=EM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const gM=new R,_M=new R,vM=new R,xM=new R,yM=new R,MM=new R,SM=new R,EM=new R;class gu extends Ws{constructor(t,e,n){super(t,e,-n,n),this.ri=new R,this.rj=new R,this.t=new R}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=wM,o=bM,a=this.t;n.cross(a,r),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const wM=new R,bM=new R;class ns{constructor(t,e,n){n=bf.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ns.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ns.idCounter=0;class is{constructor(t={}){let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=is.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}is.idCounter=0;new Kt;class Tf extends yt{constructor(t){if(super({type:yt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e=new R){const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-r,i[c]=t[c]+r}}}class Af extends yt{constructor(){super({type:yt.types.PLANE}),this.worldNormal=new R,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e=new R){return e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Yn.set(0,0,1),e.vmult(Yn,Yn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Yn.x===1?i.x=t.x:Yn.x===-1&&(n.x=t.x),Yn.y===1?i.y=t.y:Yn.y===-1&&(n.y=t.y),Yn.z===1?i.z=t.z:Yn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Yn=new R;class Dn{constructor(t={}){this.root=t.root||null,this.aabb=t.aabb?t.aabb.clone():new te,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(t,e,n=0){const i=this.data;if(!this.aabb.contains(t))return!1;const r=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;r.length||(this.subdivide(),a=!0);for(let c=0;c!==8;c++)if(r[c].insert(t,e,n+1))return!0;a&&(r.length=0)}return i.push(e),!0}subdivide(){const t=this.aabb,e=t.lowerBound,n=t.upperBound,i=this.children;i.push(new Dn({aabb:new te({lowerBound:new R(0,0,0)})}),new Dn({aabb:new te({lowerBound:new R(1,0,0)})}),new Dn({aabb:new te({lowerBound:new R(1,1,0)})}),new Dn({aabb:new te({lowerBound:new R(1,1,1)})}),new Dn({aabb:new te({lowerBound:new R(0,1,1)})}),new Dn({aabb:new te({lowerBound:new R(0,0,1)})}),new Dn({aabb:new te({lowerBound:new R(1,0,1)})}),new Dn({aabb:new te({lowerBound:new R(0,1,0)})})),n.vsub(e,Ni),Ni.scale(.5,Ni);const r=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=r;const c=a.aabb.lowerBound;c.x*=Ni.x,c.y*=Ni.y,c.z*=Ni.z,c.vadd(e,c),c.vadd(Ni,a.aabb.upperBound)}}aabbQuery(t,e){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(t)&&Array.prototype.push.apply(e,i.data),Array.prototype.push.apply(n,i.children)}return e}rayQuery(t,e,n){return t.getAABB(xo),xo.toLocalFrame(e,xo),this.aabbQuery(xo,n),n}removeEmptyNodes(){for(let t=this.children.length-1;t>=0;t--)this.children[t].removeEmptyNodes(),!this.children[t].children.length&&!this.children[t].data.length&&this.children.splice(t,1)}}class TM extends Dn{constructor(t,e={}){super({root:null,aabb:t}),this.maxDepth=typeof e.maxDepth<"u"?e.maxDepth:8}}const Ni=new R,xo=new te;class Os extends yt{constructor(t,e){super({type:yt.types.TRIMESH}),this.vertices=new Float32Array(t),this.indices=new Int16Array(e),this.normals=new Float32Array(e.length),this.aabb=new te,this.edges=null,this.scale=new R(1,1,1),this.tree=new TM,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const t=this.tree;t.reset(),t.aabb.copy(this.aabb);const e=this.scale;t.aabb.lowerBound.x*=1/e.x,t.aabb.lowerBound.y*=1/e.y,t.aabb.lowerBound.z*=1/e.z,t.aabb.upperBound.x*=1/e.x,t.aabb.upperBound.y*=1/e.y,t.aabb.upperBound.z*=1/e.z;const n=new te,i=new R,r=new R,o=new R,a=[i,r,o];for(let c=0;c<this.indices.length/3;c++){const l=c*3;this._getUnscaledVertex(this.indices[l],i),this._getUnscaledVertex(this.indices[l+1],r),this._getUnscaledVertex(this.indices[l+2],o),n.setFromPoints(a),t.insert(n,c)}t.removeEmptyNodes()}getTrianglesInAABB(t,e){yo.copy(t);const n=this.scale,i=n.x,r=n.y,o=n.z,a=yo.lowerBound,c=yo.upperBound;return a.x/=i,a.y/=r,a.z/=o,c.x/=i,c.y/=r,c.z/=o,this.tree.aabbQuery(yo,e)}setScale(t){const e=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=t.x===t.y&&t.y===t.z;e&&n||this.updateNormals(),this.scale.copy(t),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const t=AM,e=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,r=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(r,xu),this.getVertex(o,yu),this.getVertex(a,Mu),Os.computeNormal(yu,xu,Mu,t),e[i]=t.x,e[i+1]=t.y,e[i+2]=t.z}}updateEdges(){const t={},e=(i,r)=>{const o=i<r?i+"_"+r:r+"_"+i;t[o]=!0};for(let i=0;i<this.indices.length/3;i++){const r=i*3,o=this.indices[r],a=this.indices[r+1],c=this.indices[r+2];e(o,a),e(a,c),e(c,o)}const n=Object.keys(t);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const r=n[i].split("_");this.edges[2*i]=parseInt(r[0],10),this.edges[2*i+1]=parseInt(r[1],10)}}getEdgeVertex(t,e,n){const i=this.edges[t*2+(e?1:0)];this.getVertex(i,n)}getEdgeVector(t,e){const n=RM,i=CM;this.getEdgeVertex(t,0,n),this.getEdgeVertex(t,1,i),i.vsub(n,e)}getVertex(t,e){const n=this.scale;return this._getUnscaledVertex(t,e),e.x*=n.x,e.y*=n.y,e.z*=n.z,e}_getUnscaledVertex(t,e){const n=t*3,i=this.vertices;return e.set(i[n],i[n+1],i[n+2])}getWorldVertex(t,e,n,i){return this.getVertex(t,i),jt.pointToWorldFrame(e,n,i,i),i}getTriangleVertices(t,e,n,i){const r=t*3;this.getVertex(this.indices[r],e),this.getVertex(this.indices[r+1],n),this.getVertex(this.indices[r+2],i)}getNormal(t,e){const n=t*3;return e.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(t,e){this.computeLocalAABB(Fi);const n=Fi.upperBound.x-Fi.lowerBound.x,i=Fi.upperBound.y-Fi.lowerBound.y,r=Fi.upperBound.z-Fi.lowerBound.z;return e.set(1/12*t*(2*i*2*i+2*r*2*r),1/12*t*(2*n*2*n+2*r*2*r),1/12*t*(2*i*2*i+2*n*2*n))}computeLocalAABB(t){const e=t.lowerBound,n=t.upperBound,i=this.vertices.length;this.vertices;const r=PM;this.getVertex(0,r),e.copy(r),n.copy(r);for(let o=0;o!==i;o++)this.getVertex(o,r),r.x<e.x?e.x=r.x:r.x>n.x&&(n.x=r.x),r.y<e.y?e.y=r.y:r.y>n.y&&(n.y=r.y),r.z<e.z?e.z=r.z:r.z>n.z&&(n.z=r.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let t=0;const e=this.vertices,n=new R;for(let i=0,r=e.length/3;i!==r;i++){this.getVertex(i,n);const o=n.lengthSquared();o>t&&(t=o)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=LM,o=DM;r.position=t,r.quaternion=e,this.aabb.toWorldFrame(r,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}}const AM=new R,yo=new te,RM=new R,CM=new R,_u=new R,vu=new R;Os.computeNormal=(s,t,e,n)=>{t.vsub(s,vu),e.vsub(t,_u),_u.cross(vu,n),n.isZero()||n.normalize()};const xu=new R,yu=new R,Mu=new R,Fi=new te,PM=new R,LM=new jt,DM=new te;Os.createTorus=(s=1,t=.5,e=8,n=6,i=Math.PI*2)=>{const r=[],o=[];for(let a=0;a<=e;a++)for(let c=0;c<=n;c++){const l=c/n*i,h=a/e*Math.PI*2,d=(s+t*Math.cos(h))*Math.cos(l),u=(s+t*Math.cos(h))*Math.sin(l),f=t*Math.sin(h);r.push(d,u,f)}for(let a=1;a<=e;a++)for(let c=1;c<=n;c++){const l=(n+1)*a+c-1,h=(n+1)*(a-1)+c-1,d=(n+1)*(a-1)+c,u=(n+1)*a+c;o.push(l,h,u),o.push(h,d,u)}return new Os(r,o)};class IM{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class UM extends IM{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,f,_,g,m;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const p=FM,v=OM,x=NM;p.length=a,v.length=a,x.length=a;for(let M=0;M!==a;M++){const y=o[M];x[M]=0,v[M]=y.computeB(h),p[M]=1/y.computeC()}if(a!==0){for(let E=0;E!==l;E++){const b=c[E],T=b.vlambda,S=b.wlambda;T.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){_=0;for(let E=0;E!==a;E++){const b=o[E];d=v[E],u=p[E],m=x[E],g=b.computeGWlambda(),f=u*(d-g-b.eps*m),m+f<b.minForce?f=b.minForce-m:m+f>b.maxForce&&(f=b.maxForce-m),x[E]+=f,_+=f>0?f:-f,b.addToWlambda(f)}if(_*_<r)break}for(let E=0;E!==l;E++){const b=c[E],T=b.velocity,S=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),T.vadd(b.vlambda,T),b.wlambda.vmul(b.angularFactor,b.wlambda),S.vadd(b.wlambda,S)}let M=o.length;const y=1/h;for(;M--;)o[M].multiplier=x[M]*y}return n}}const NM=[],FM=[],OM=[];mt.STATIC;class zM{constructor(){this.objects=[],this.type=Object}release(...t){const e=t.length;for(let n=0;n!==e;n++)this.objects.push(t[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class BM extends zM{constructor(){super(),this.type=R}constructObject(){return new R}}const Te={sphereSphere:yt.types.SPHERE,spherePlane:yt.types.SPHERE|yt.types.PLANE,boxBox:yt.types.BOX|yt.types.BOX,sphereBox:yt.types.SPHERE|yt.types.BOX,planeBox:yt.types.PLANE|yt.types.BOX,convexConvex:yt.types.CONVEXPOLYHEDRON,sphereConvex:yt.types.SPHERE|yt.types.CONVEXPOLYHEDRON,planeConvex:yt.types.PLANE|yt.types.CONVEXPOLYHEDRON,boxConvex:yt.types.BOX|yt.types.CONVEXPOLYHEDRON,sphereHeightfield:yt.types.SPHERE|yt.types.HEIGHTFIELD,boxHeightfield:yt.types.BOX|yt.types.HEIGHTFIELD,convexHeightfield:yt.types.CONVEXPOLYHEDRON|yt.types.HEIGHTFIELD,sphereParticle:yt.types.PARTICLE|yt.types.SPHERE,planeParticle:yt.types.PLANE|yt.types.PARTICLE,boxParticle:yt.types.BOX|yt.types.PARTICLE,convexParticle:yt.types.PARTICLE|yt.types.CONVEXPOLYHEDRON,sphereTrimesh:yt.types.SPHERE|yt.types.TRIMESH,planeTrimesh:yt.types.PLANE|yt.types.TRIMESH};class Gt{constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new BM,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new mM(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*a.gravity.length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const _=this.frictionEquationPool,g=_.length?_.pop():new gu(n,i,u*f),m=_.length?_.pop():new gu(n,i,u*f);return g.bi=m.bi=n,g.bj=m.bj=i,g.minForce=m.minForce=-u*f,g.maxForce=m.maxForce=u*f,g.ri.copy(t.ri),g.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(g.t,m.t),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.enabled=m.enabled=t.enabled,e.push(g,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Oi.setZero(),Pr.setZero(),Lr.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Oi.vadd(e.ni,Oi),Pr.vadd(e.ri,Pr),Lr.vadd(e.rj,Lr)):(Oi.vsub(e.ni,Oi),Pr.vadd(e.rj,Pr),Lr.vadd(e.ri,Lr));const o=1/t;Pr.scale(o,n.ri),Lr.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Oi.normalize(),Oi.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=VM,l=HM,h=kM,d=GM;for(let u=0,f=t.length;u!==f;u++){const _=t[u],g=e[u];let m=null;_.material&&g.material&&(m=n.getContactMaterial(_.material,g.material)||null);const p=_.type&mt.KINEMATIC&&g.type&mt.STATIC||_.type&mt.STATIC&&g.type&mt.KINEMATIC||_.type&mt.KINEMATIC&&g.type&mt.KINEMATIC;for(let v=0;v<_.shapes.length;v++){_.quaternion.mult(_.shapeOrientations[v],c),_.quaternion.vmult(_.shapeOffsets[v],h),h.vadd(_.position,h);const x=_.shapes[v];for(let M=0;M<g.shapes.length;M++){g.quaternion.mult(g.shapeOrientations[M],l),g.quaternion.vmult(g.shapeOffsets[M],d),d.vadd(g.position,d);const y=g.shapes[M];if(!(x.collisionFilterMask&y.collisionFilterGroup&&y.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+y.boundingSphereRadius)continue;let E=null;x.material&&y.material&&(E=n.getContactMaterial(x.material,y.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;const b=x.type|y.type,T=this[b];if(T){let S=!1;x.type<y.type?S=T.call(this,x,y,h,d,c,l,_,g,x,y,p):S=T.call(this,y,x,d,h,l,c,g,_,x,y,p),S&&p&&(n.shapeOverlapKeeper.set(x.id,y.id),n.bodyOverlapKeeper.set(_.id,g.id))}}}}}sphereSphere(t,e,n,i,r,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Mo),u.ni.scale(u.ni.dot(Mo),Su),Mo.vsub(Su,u.rj),-Mo.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,_=u.rj;f.vadd(n,f),f.vsub(a.position,f),_.vadd(i,_),_.vsub(c.position,_),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}sphereBox(t,e,n,i,r,o,a,c,l,h,d){const u=this.v3pool,f=mS;n.vsub(i,So),e.getSideNormals(f,o);const _=t.radius;let g=!1;const m=_S,p=vS,v=xS;let x=null,M=0,y=0,E=0,b=null;for(let F=0,k=f.length;F!==k&&g===!1;F++){const G=dS;G.copy(f[F]);const W=G.length();G.normalize();const j=So.dot(G);if(j<W+_&&j>0){const Q=fS,N=pS;Q.copy(f[(F+1)%3]),N.copy(f[(F+2)%3]);const Z=Q.length(),et=N.length();Q.normalize(),N.normalize();const it=So.dot(Q),lt=So.dot(N);if(it<Z&&it>-Z&&lt<et&&lt>-et){const dt=Math.abs(j-W-_);if((b===null||dt<b)&&(b=dt,y=it,E=lt,x=W,m.copy(G),p.copy(Q),v.copy(N),M++,d))return!0}}}if(M){g=!0;const F=this.createContactEquation(a,c,t,e,l,h);m.scale(-_,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(x,m),p.scale(y,p),m.vadd(p,m),v.scale(E,v),m.vadd(v,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let T=u.get();const S=gS;for(let F=0;F!==2&&!g;F++)for(let k=0;k!==2&&!g;k++)for(let G=0;G!==2&&!g;G++)if(T.set(0,0,0),F?T.vadd(f[0],T):T.vsub(f[0],T),k?T.vadd(f[1],T):T.vsub(f[1],T),G?T.vadd(f[2],T):T.vsub(f[2],T),i.vadd(T,S),S.vsub(n,S),S.lengthSquared()<_*_){if(d)return!0;g=!0;const W=this.createContactEquation(a,c,t,e,l,h);W.ri.copy(S),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(_,W.ri),W.rj.copy(T),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(c.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}u.release(T),T=null;const w=u.get(),O=u.get(),B=u.get(),C=u.get(),I=u.get(),D=f.length;for(let F=0;F!==D&&!g;F++)for(let k=0;k!==D&&!g;k++)if(F%3!==k%3){f[k].cross(f[F],w),w.normalize(),f[F].vadd(f[k],O),B.copy(n),B.vsub(O,B),B.vsub(i,B);const G=B.dot(w);w.scale(G,C);let W=0;for(;W===F%3||W===k%3;)W++;I.copy(n),I.vsub(C,I),I.vsub(O,I),I.vsub(i,I);const j=Math.abs(G),Q=I.length();if(j<f[W].length()&&Q<_){if(d)return!0;g=!0;const N=this.createContactEquation(a,c,t,e,l,h);O.vadd(C,N.rj),N.rj.copy(N.rj),I.negate(N.ni),N.ni.normalize(),N.ri.copy(N.rj),N.ri.vadd(i,N.ri),N.ri.vsub(n,N.ri),N.ri.normalize(),N.ri.scale(_,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}u.release(w,O,B,C,I)}planeBox(t,e,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}convexConvex(t,e,n,i,r,o,a,c,l,h,d,u,f){const _=US;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,_,u,f)){const g=[],m=NS;t.clipAgainstHull(n,r,e,i,o,_,-100,100,g);let p=0;for(let v=0;v!==g.length;v++){if(d)return!0;const x=this.createContactEquation(a,c,t,e,l,h),M=x.ri,y=x.rj;_.negate(x.ni),g[v].normal.negate(m),m.scale(g[v].depth,m),g[v].point.vadd(m,M),y.copy(g[v].point),M.vsub(n,M),y.vsub(i,y),M.vadd(n,M),M.vsub(a.position,M),y.vadd(i,y),y.vsub(c.position,y),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,r,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,yS);const f=e.faceNormals,_=e.faces,g=e.vertices,m=t.radius;let p=!1;for(let v=0;v!==g.length;v++){const x=g[v],M=wS;o.vmult(x,M),i.vadd(M,M);const y=ES;if(M.vsub(n,y),y.lengthSquared()<m*m){if(d)return!0;p=!0;const E=this.createContactEquation(a,c,t,e,l,h);E.ri.copy(y),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),M.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(c.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,x=_.length;v!==x&&p===!1;v++){const M=f[v],y=_[v],E=bS;o.vmult(M,E);const b=TS;o.vmult(g[y[0]],b),b.vadd(i,b);const T=AS;E.scale(-m,T),n.vadd(T,T);const S=RS;T.vsub(b,S);const w=S.dot(E),O=CS;if(n.vsub(b,O),w<0&&O.dot(E)>0){const B=[];for(let C=0,I=y.length;C!==I;C++){const D=u.get();o.vmult(g[y[C]],D),i.vadd(D,D),B.push(D)}if(uS(B,E,n)){if(d)return!0;p=!0;const C=this.createContactEquation(a,c,t,e,l,h);E.scale(-m,C.ri),E.negate(C.ni);const I=u.get();E.scale(-w,I);const D=u.get();E.scale(-m,D),n.vsub(i,C.rj),C.rj.vadd(D,C.rj),C.rj.vadd(I,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(c.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),u.release(I),u.release(D),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let F=0,k=B.length;F!==k;F++)u.release(B[F]);return}else for(let C=0;C!==y.length;C++){const I=u.get(),D=u.get();o.vmult(g[y[(C+1)%y.length]],I),o.vmult(g[y[(C+2)%y.length]],D),i.vadd(I,I),i.vadd(D,D);const F=MS;D.vsub(I,F);const k=SS;F.unit(k);const G=u.get(),W=u.get();n.vsub(I,W);const j=W.dot(k);k.scale(j,G),G.vadd(I,G);const Q=u.get();if(G.vsub(n,Q),j>0&&j*j<F.lengthSquared()&&Q.lengthSquared()<m*m){if(d)return!0;const N=this.createContactEquation(a,c,t,e,l,h);G.vsub(i,N.rj),G.vsub(n,N.ni),N.ni.normalize(),N.ni.scale(m,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let Z=0,et=B.length;Z!==et;Z++)u.release(B[Z]);u.release(I),u.release(D),u.release(G),u.release(Q),u.release(W);return}u.release(I),u.release(D),u.release(G),u.release(Q),u.release(W)}for(let C=0,I=B.length;C!==I;C++)u.release(B[C])}}}planeConvex(t,e,n,i,r,o,a,c,l,h,d){const u=PS,f=LS;f.set(0,0,1),r.vmult(f,f);let _=0;const g=DS;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,g),f.dot(g)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h),x=IS;f.scale(f.dot(g),x),u.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,c,l,h,d){const u=e.data,f=t.radius,_=e.elementSize,g=jS,m=XS;jt.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/_)-1,v=Math.ceil((m.x+f)/_)+1,x=Math.floor((m.y-f)/_)-1,M=Math.ceil((m.y+f)/_)+1;if(v<0||M<0||p>u.length||x>u[0].length)return;p<0&&(p=0),v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const y=[];e.getRectMinMax(p,x,v,M,y);const E=y[0],b=y[1];if(m.z-f>b||m.z+f<E)return;const T=this.result;for(let S=p;S<v;S++)for(let w=x;w<M;w++){const O=T.length;let B=!1;if(e.getConvexTrianglePillar(S,w,!1),jt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,c,t,e,d)),d&&B||(e.getConvexTrianglePillar(S,w,!0),jt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,c,t,e,d)),d&&B))return!0;if(T.length-O>2)return}}boxHeightfield(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,c,l,h,d){const u=e.data,f=e.elementSize,_=t.boundingSphereRadius,g=WS,m=qS,p=HS;jt.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-_)/f)-1,x=Math.ceil((p.x+_)/f)+1,M=Math.floor((p.y-_)/f)-1,y=Math.ceil((p.y+_)/f)+1;if(x<0||y<0||v>u.length||M>u[0].length)return;v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),y<0&&(y=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),y>=u[0].length&&(y=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const E=[];e.getRectMinMax(v,M,x,y,E);const b=E[0],T=E[1];if(!(p.z-_>T||p.z+_<b))for(let S=v;S<x;S++)for(let w=M;w<y;w++){let O=!1;if(e.getConvexTrianglePillar(S,w,!1),jt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,c,null,null,d,m,null)),d&&O||(e.getConvexTrianglePillar(S,w,!0),jt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,c,null,null,d,m,null)),d&&O))return!0}}sphereParticle(t,e,n,i,r,o,a,c,l,h,d){const u=BS;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const _=this.createContactEquation(c,a,e,t,l,h);u.normalize(),_.rj.copy(u),_.rj.scale(t.radius,_.rj),_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,c,l,h,d){const u=FS;u.set(0,0,1),a.quaternion.vmult(u,u);const f=OS;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,h);g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0);const m=zS;u.scale(u.dot(i),m),i.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexParticle(t,e,n,i,r,o,a,c,l,h,d){let u=-1;const f=GS,_=VS;let g=null;const m=kS;if(m.copy(i),m.vsub(n,m),r.conjugate(Eu),Eu.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,v=t.faces.length;p!==v;p++){const x=[t.worldVertices[t.faces[p][0]]],M=t.worldFaceNormals[p];i.vsub(x[0],wu);const y=-M.dot(wu);if(g===null||Math.abs(y)<Math.abs(g)){if(d)return!0;g=y,u=p,f.copy(M)}}if(u!==-1){const p=this.createContactEquation(c,a,e,t,l,h);f.scale(g,_),_.vadd(i,_),_.vsub(n,_),p.rj.copy(_),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,x=p.rj;v.vadd(i,v),v.vsub(c.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}sphereTrimesh(t,e,n,i,r,o,a,c,l,h,d){const u=$M,f=JM,_=QM,g=tS,m=eS,p=nS,v=oS,x=ZM,M=YM,y=aS;jt.pointToLocalFrame(i,o,n,m);const E=t.radius;v.lowerBound.set(m.x-E,m.y-E,m.z-E),v.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(v,y);const b=KM,T=t.radius*t.radius;for(let C=0;C<y.length;C++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[y[C]*3+I],b),b.vsub(m,M),M.lengthSquared()<=T){if(x.copy(b),jt.pointToWorldFrame(i,o,x,b),b.vsub(n,M),d)return!0;let D=this.createContactEquation(a,c,t,e,l,h);D.ni.copy(M),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(b),D.rj.vsub(c.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let C=0;C<y.length;C++)for(let I=0;I<3;I++){e.getVertex(e.indices[y[C]*3+I],u),e.getVertex(e.indices[y[C]*3+(I+1)%3],f),f.vsub(u,_),m.vsub(f,p);const D=p.dot(_);m.vsub(u,p);let F=p.dot(_);if(F>0&&D<0&&(m.vsub(u,p),g.copy(_),g.normalize(),F=p.dot(g),g.scale(F,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;const G=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),jt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,G.rj),jt.vectorToWorldFrame(o,G.ni,G.ni),jt.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const S=iS,w=rS,O=sS,B=jM;for(let C=0,I=y.length;C!==I;C++){e.getTriangleVertices(y[C],S,w,O),e.getNormal(y[C],B),m.vsub(S,p);let D=p.dot(B);if(B.scale(D,p),m.vsub(p,p),D=p.distanceTo(m),Kt.pointInTriangle(p,S,w,O)&&D<t.radius){if(d)return!0;let F=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),jt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,F.rj),jt.vectorToWorldFrame(o,F.ni,F.ni),jt.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}y.length=0}planeTrimesh(t,e,n,i,r,o,a,c,l,h,d){const u=new R,f=WM;f.set(0,0,1),r.vmult(f,f);for(let _=0;_<e.vertices.length/3;_++){e.getVertex(_,u);const g=new R;g.copy(u),jt.pointToWorldFrame(i,o,g,u);const m=qM;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h);v.ni.copy(f);const x=XM;f.scale(m.dot(f),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Oi=new R,Pr=new R,Lr=new R,kM=new R,GM=new R,VM=new ge,HM=new ge;Gt.prototype[Te.boxBox]=Gt.prototype.boxBox;Gt.prototype[Te.boxConvex]=Gt.prototype.boxConvex;Gt.prototype[Te.boxParticle]=Gt.prototype.boxParticle;Gt.prototype[Te.sphereSphere]=Gt.prototype.sphereSphere;const WM=new R,qM=new R,XM=new R;Gt.prototype[Te.planeTrimesh]=Gt.prototype.planeTrimesh;const jM=new R,YM=new R,KM=new R,ZM=new R,$M=new R,JM=new R,QM=new R,tS=new R,eS=new R,nS=new R,iS=new R,rS=new R,sS=new R,oS=new te,aS=[];Gt.prototype[Te.sphereTrimesh]=Gt.prototype.sphereTrimesh;const Mo=new R,Su=new R;Gt.prototype[Te.spherePlane]=Gt.prototype.spherePlane;const cS=new R,lS=new R,hS=new R;function uS(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=cS;s[(r+1)%i].vsub(o,a);const c=lS;a.cross(t,c);const l=hS;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const So=new R,dS=new R,fS=new R,pS=new R,mS=[new R,new R,new R,new R,new R,new R],gS=new R,_S=new R,vS=new R,xS=new R;Gt.prototype[Te.sphereBox]=Gt.prototype.sphereBox;const yS=new R,MS=new R,SS=new R,ES=new R,wS=new R,bS=new R,TS=new R,AS=new R,RS=new R,CS=new R;Gt.prototype[Te.sphereConvex]=Gt.prototype.sphereConvex;Gt.prototype[Te.planeBox]=Gt.prototype.planeBox;const PS=new R,LS=new R,DS=new R,IS=new R;Gt.prototype[Te.planeConvex]=Gt.prototype.planeConvex;const US=new R,NS=new R;Gt.prototype[Te.convexConvex]=Gt.prototype.convexConvex;const FS=new R,OS=new R,zS=new R;Gt.prototype[Te.planeParticle]=Gt.prototype.planeParticle;const BS=new R;Gt.prototype[Te.sphereParticle]=Gt.prototype.sphereParticle;const Eu=new ge,kS=new R,GS=new R,wu=new R,VS=new R;Gt.prototype[Te.convexParticle]=Gt.prototype.convexParticle;Gt.prototype[Te.boxHeightfield]=Gt.prototype.boxHeightfield;const HS=new R,WS=new R,qS=[0];Gt.prototype[Te.convexHeightfield]=Gt.prototype.convexHeightfield;const XS=new R,jS=new R;Gt.prototype[Te.sphereHeightfield]=Gt.prototype.sphereHeightfield;class bu{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let c=0;c<r;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Tu(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Tu(e,h)}}}function Tu(s,t){s.push((t&4294901760)>>16,t&65535)}class YS{constructor(){this.data={keys:[]}}get(t,e){if(t>e){const n=e;e=t,t=n}return this.data[t+"-"+e]}set(t,e,n){if(t>e){const r=e;e=t,t=r}const i=t+"-"+e;this.get(t,e)||this.data.keys.push(i),this.data[i]=n}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class cl extends wf{constructor(t={}){super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new R,t.gravity&&this.gravity.copy(t.gravity),this.broadphase=t.broadphase!==void 0?t.broadphase:new $y,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new UM,this.constraints=[],this.narrowphase=new Gt(this),this.collisionMatrix=new ou,this.collisionMatrixPrevious=new ou,this.bodyOverlapKeeper=new bu,this.shapeOverlapKeeper=new bu,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new YS,this.defaultMaterial=new is("default"),this.defaultContactMaterial=new ns(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}numObjects(){return this.bodies.length}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof yc?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n={},i){return n.mode=Kt.ALL,n.from=t,n.to=e,n.callback=i,qa.intersectWorld(this,n)}raycastAny(t,e,n={},i){return n.mode=Kt.ANY,n.from=t,n.to=e,n.result=i,qa.intersectWorld(this,n)}raycastClosest(t,e,n={},i){return n.mode=Kt.CLOSEST,n.from=t,n.to=e,n.result=i,qa.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0,i=e.length;n<i;n++){const r=e[n].shapes;for(let o=0,a=r.length;o<a;o++){const c=r[o];if(c.id===t)return c}}}addMaterial(t){this.materials.push(t)}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}step(t,e,n=10){if(e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ee.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ee.now()-i>t*2*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=QS,i=tE,r=this.numObjects(),o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=mt.DYNAMIC;let u=-1/0;const f=this.constraints,_=JS;c.length();const g=c.x,m=c.y,p=c.z;let v=0;for(l&&(u=Ee.now()),v=0;v!==r;v++){const C=o[v];if(C.type===d){const I=C.force,D=C.mass;I.x+=D*g,I.y+=D*m,I.z+=D*p}}for(let C=0,I=this.subsystems.length;C!==I;C++)this.subsystems[C].update();l&&(u=Ee.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Ee.now()-u);let x=f.length;for(v=0;v!==x;v++){const C=f[v];if(!C.collideConnected)for(let I=n.length-1;I>=0;I-=1)(C.bodyA===n[I]&&C.bodyB===i[I]||C.bodyB===n[I]&&C.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),l&&(u=Ee.now());const M=$S,y=e.length;for(v=0;v!==y;v++)M.push(e[v]);e.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)_.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,_),l&&(h.narrowphase=Ee.now()-u),l&&(u=Ee.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const b=e.length;for(let C=0;C!==b;C++){const I=e[C],D=I.bi,F=I.bj,k=I.si,G=I.sj;let W;if(D.material&&F.material?W=this.getContactMaterial(D.material,F.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,D.material&&F.material&&(D.material.friction>=0&&F.material.friction>=0&&D.material.friction*F.material.friction,D.material.restitution>=0&&F.material.restitution>=0&&(I.restitution=D.material.restitution*F.material.restitution)),a.addEquation(I),D.allowSleep&&D.type===mt.DYNAMIC&&D.sleepState===mt.SLEEPING&&F.sleepState===mt.AWAKE&&F.type!==mt.STATIC){const j=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),Q=F.sleepSpeedLimit**2;j>=Q*2&&(D.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===mt.DYNAMIC&&F.sleepState===mt.SLEEPING&&D.sleepState===mt.AWAKE&&D.type!==mt.STATIC){const j=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),Q=D.sleepSpeedLimit**2;j>=Q*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,F,!0),this.collisionMatrixPrevious.get(D,F)||(us.body=F,us.contact=I,D.dispatchEvent(us),us.body=D,F.dispatchEvent(us)),this.bodyOverlapKeeper.set(D.id,F.id),this.shapeOverlapKeeper.set(k.id,G.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Ee.now()-u,u=Ee.now()),v=0;v!==r;v++){const C=o[v];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(x=f.length,v=0;v!==x;v++){const C=f[v];C.update();for(let I=0,D=C.equations.length;I!==D;I++){const F=C.equations[I];a.addEquation(F)}}a.solve(t,this),l&&(h.solve=Ee.now()-u),a.removeAllEquations();const T=Math.pow;for(v=0;v!==r;v++){const C=o[v];if(C.type&d){const I=T(1-C.linearDamping,t),D=C.velocity;D.scale(I,D);const F=C.angularVelocity;if(F){const k=T(1-C.angularDamping,t);F.scale(k,F)}}}for(this.dispatchEvent(ZS),v=0;v!==r;v++){const C=o[v];C.preStep&&C.preStep.call(C)}l&&(u=Ee.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,O=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,w,O);for(this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Ee.now()-u),this.time+=t,this.stepnumber+=1,this.dispatchEvent(KS),v=0;v!==r;v++){const C=o[v],I=C.postStep;I&&I.call(C)}let B=!0;if(this.allowSleep)for(B=!1,v=0;v!==r;v++){const C=o[v];C.sleepTick(this.time),C.sleepState!==mt.SLEEPING&&(B=!0)}this.hasActiveBodies=B}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new te;const qa=new Kt,Ee=globalThis.performance||{};if(!Ee.now){let s=Date.now();Ee.timing&&Ee.timing.navigationStart&&(s=Ee.timing.navigationStart),Ee.now=()=>Date.now()-s}const KS={type:"postStep"},ZS={type:"preStep"},us={type:mt.COLLIDE_EVENT_NAME,body:null,contact:null},$S=[],JS=[],QS=[],tE=[];cl.prototype.emitContactEvents=(()=>{const s=[],t=[],e={type:"beginContact",bodyA:null,bodyB:null},n={type:"endContact",bodyA:null,bodyB:null},i={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},r={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};return function(){const o=this.hasAnyEventListener("beginContact"),a=this.hasAnyEventListener("endContact");if((o||a)&&this.bodyOverlapKeeper.getDiff(s,t),o){for(let h=0,d=s.length;h<d;h+=2)e.bodyA=this.getBodyById(s[h]),e.bodyB=this.getBodyById(s[h+1]),this.dispatchEvent(e);e.bodyA=e.bodyB=null}if(a){for(let h=0,d=t.length;h<d;h+=2)n.bodyA=this.getBodyById(t[h]),n.bodyB=this.getBodyById(t[h+1]),this.dispatchEvent(n);n.bodyA=n.bodyB=null}s.length=t.length=0;const c=this.hasAnyEventListener("beginShapeContact"),l=this.hasAnyEventListener("endShapeContact");if((c||l)&&this.shapeOverlapKeeper.getDiff(s,t),c){for(let h=0,d=s.length;h<d;h+=2){const u=this.getShapeById(s[h]),f=this.getShapeById(s[h+1]);i.shapeA=u,i.shapeB=f,i.bodyA=u.body,i.bodyB=f.body,this.dispatchEvent(i)}i.bodyA=i.bodyB=i.shapeA=i.shapeB=null}if(l){for(let h=0,d=t.length;h<d;h+=2){const u=this.getShapeById(t[h]),f=this.getShapeById(t[h+1]);r.shapeA=u,r.shapeB=f,r.bodyA=u.body,r.bodyB=f.body,this.dispatchEvent(r)}r.bodyA=r.bodyB=r.shapeA=r.shapeB=null}}})();const ds=new V;function an(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;ds.copy(t),ds[n]=0,ds.normalize();const l=.5*o/(o+a),h=1-ds.angleTo(s)/c;return Math.sign(ds[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Rf extends ni{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new V,c=new V,l=new V(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,_=new V,g=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/f)){case 0:_.set(1,0,0),u[p+0]=an(_,c,"z","y",r,n),u[p+1]=1-an(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),u[p+0]=1-an(_,c,"z","y",r,n),u[p+1]=1-an(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),u[p+0]=1-an(_,c,"x","z",r,t),u[p+1]=an(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),u[p+0]=1-an(_,c,"x","z",r,t),u[p+1]=1-an(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),u[p+0]=1-an(_,c,"x","y",r,t),u[p+1]=1-an(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),u[p+0]=an(_,c,"x","y",r,t),u[p+1]=1-an(_,c,"y","x",r,e);break}}}var eE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nE={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(eE,function(){var e=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var _=0;_<o.children.length;_++)o.children[_].style.display=_===f?"block":"none";r=f}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++r%o.children.length)},!1);var a=(performance||Date).now(),c=a,l=0,h=n(new e.Panel("FPS","#0ff","#002")),d=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){l++;var f=(performance||Date).now();if(d.update(f-a,200),f>c+1e3&&(h.update(1e3*l/(f-c),100),c=f,l=0,u)){var _=performance.memory;u.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return e.Panel=function(n,i,r){var o=1/0,a=0,c=Math.round,l=c(window.devicePixelRatio||1),h=80*l,d=48*l,u=3*l,f=2*l,_=3*l,g=15*l,m=74*l,p=30*l,v=document.createElement("canvas");v.width=h,v.height=d,v.style.cssText="width:80px;height:48px";var x=v.getContext("2d");return x.font="bold "+9*l+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=r,x.fillRect(0,0,h,d),x.fillStyle=i,x.fillText(n,u,f),x.fillRect(_,g,m,p),x.fillStyle=r,x.globalAlpha=.9,x.fillRect(_,g,m,p),{dom:v,update:function(M,y){o=Math.min(o,M),a=Math.max(a,M),x.fillStyle=r,x.globalAlpha=1,x.fillRect(0,0,h,g),x.fillStyle=i,x.fillText(c(M)+" "+n+" ("+c(o)+"-"+c(a)+")",u,f),x.drawImage(v,_+l,g,m-l,p,_,g,m-l,p),x.fillRect(_+m-l,g,l,p),x.fillStyle=r,x.globalAlpha=.9,x.fillRect(_+m-l,g,l,c((1-M/y)*p))}}},e})})(nE);const iE=()=>{const s=document.querySelector("canvas.webgl"),t=new qo,e=new Xo,n=new il(e),i="/portfolio2023/",r=n.load(`${i}textures/aigenerated/slime2.jpg`);r.repeat.x=1,r.repeat.y=1,r.wrapS=rr,r.wrapT=rr,r.generateMipmaps=!1,r.minFilter=Ae;const a=new Mf().load([`${i}textures/environmentMaps/5/px.jpg`,`${i}textures/environmentMaps/5/nx.jpg`,`${i}textures/environmentMaps/5/py.jpg`,`${i}textures/environmentMaps/5/ny.jpg`,`${i}textures/environmentMaps/5/pz.jpg`,`${i}textures/environmentMaps/5/nz.jpg`]),c=new cl;c.gravity.set(0,-15,0),c.broadphase=new bn(c),c.allowSleep=!0;const l=new is("default"),h=new ns(l,l,{friction:.15,restitution:.2});c.addContactMaterial(h),c.defaultContactMaterial=h;const d=new Af,u=new mt;u.mass=0,u.quaternion.setFromAxisAngle(new R(-1,0,0),Math.PI*.5),u.addShape(d),c.addBody(u);const f=new le(new Gs(2e3,2e3),new vf({opacity:.2}));f.receiveShadow=!0,f.rotation.x=-Math.PI*.5,t.add(f);const _=new sl(16777215,.7);t.add(_);const g=new Ef(16777215,.2);g.castShadow=!0,g.shadow.mapSize.set(1024,1024),g.shadow.camera.far=30,g.shadow.camera.left=-14,g.shadow.camera.top=14,g.shadow.camera.right=14,g.shadow.camera.bottom=-14,g.position.set(5,5,5),t.add(g);const m={color:16711803,groundColor:8050343},p=new Sf(m.color,m.groundColor,.4);t.add(p);const v={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{v.width=window.innerWidth,v.height=window.innerHeight,x.aspect=v.width/v.height,x.updateProjectionMatrix(),y.setSize(v.width,v.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2))});const x=new Be(75,v.width/v.height,.1,100);x.position.set(0,1.2,5.2),t.add(x);const M=new Yo(x,s);M.enableDamping=!0,M.autoRotate=!0;const y=new Vs({canvas:s,antialias:!0,alpha:!0});y.outputColorSpace=Ye,y.shadowMap.enabled=!0,y.shadowMap.type=Xc,y.setSize(v.width,v.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.initTexture(r,a);const E=[],b=new Hs(1,20,20),T=new wy({transparent:!0,opacity:.6,clearcoat:1,clearcoatRoughness:.1,opacity:.9,metalness:.2,roughness:.5,map:r,envMap:a,envMapIntensity:1}),S=new Rf(1,1,1,16,.2),w=new xf({metalness:.3,roughness:.07,envMap:a,envMapIntensity:.8}),O=(k,G,W,j)=>{const Q=new le(S,w);Q.castShadow=!0,Q.scale.set(k,G,W),Q.position.copy(j),t.add(Q);const N=new es(new R(k*.5,G*.5,W*.5)),Z=new mt({mass:.1,position:new R(0,3,0),shape:N,material:l});Z.allowSleep=!0,Z.sleepSpeedLimit=.8,Z.sleepTimeLimit=1,Z.position.copy(j),c.addBody(Z),E.push({mesh:Q,body:Z})},B=(k,G)=>{const W=new le(b,T);W.castShadow=!0,W.scale.set(k,k,k),W.position.copy(G),t.add(W);const j=new Tf(k),Q=new mt({mass:1,position:new R(G.x,G.y,G.z),shape:j,material:l});Q.allowSleep=!0,Q.sleepSpeedLimit=1,Q.position.copy(G),c.addBody(Q),E.push({mesh:W,body:Q})};setTimeout(()=>{O(.2,1,.5,{x:Math.random()*3,y:10,z:Math.random()*3})},4500),window.addEventListener("createSphereClicked",()=>{B(Math.random()*.3,{x:Math.random()*3,y:10,z:Math.random()*3})}),window.addEventListener("createBoxClicked",()=>{O(Math.random()*1.12,Math.random()*1.12,Math.random()*1.12,{x:Math.random()*3,y:10,z:Math.random()*3})});const C=()=>{for(const k of E)k.body.removeEventListener("collide"),c.removeBody(k.body),t.remove(k.mesh);E.splice(0,E.length)};window.addEventListener("cross1Clicked",C),window.addEventListener("cross2Clicked",C);const I=new jo;let D=0;const F=()=>{const k=I.getElapsedTime(),G=k-D;D=k,c.step(1/60,G,3);for(const W of E)W.mesh.position.copy(W.body.position),W.mesh.quaternion.copy(W.body.quaternion);M.update(),y.render(t,x),window.requestAnimationFrame(F)};F()},rE=()=>{const s=document.querySelector("canvas.webgl2"),t=new qo;let e={color:0,hovercolor:16568283};const n=new Hs(.12,16,16),i=new Ss({color:e.color,wireframe:!0}),r=new le(n,i);r.position.set(0,1,0),t.add(r);const o=new ni(.2,.2,.2,8,8,8),a=new Ss({color:e.color,wireframe:!0}),c=new le(o,a);c.position.set(0,.5,0),t.add(c);const l=new gs,h=new Ss({color:e.color,wireframe:!0}),d=new ni(.06,.3,.06,6,6,6),u=new le(d,h);u.position.set(0,0,0),u.rotation.z=Math.PI*.25,l.add(u);const f=new ni(.3,.06,.06,6,6,6),_=new le(f,h);l.add(_),_.rotation.z=Math.PI*.25,_.position.set(0,0,0),t.add(l);const g=new Ry;let m=null;const p=new V(-1.5,0,0),v=new V(10,0,0);v.normalize(),g.set(p,v),g.intersectObject(c),g.intersectObjects([r,c,u,_]);const x=new Tt;window.addEventListener("mousemove",w=>{x.x=w.clientX/M.width*2-1,x.y=-(w.clientY/M.height)*2+1}),window.addEventListener("click",()=>{if(m)switch(m.object){case r:const w=new Event("createSphereClicked");window.dispatchEvent(w);break;case c:const O=new Event("createBoxClicked");window.dispatchEvent(O);break;case u:const B=new Event("cross1Clicked");window.dispatchEvent(B);break;case _:const C=new Event("cross2Clicked");window.dispatchEvent(C);break}});const M={width:window.innerWidth/5,height:window.innerHeight};window.addEventListener("resize",()=>{M.width=window.innerWidth/5,M.height=window.innerHeight,y.aspect=M.width/M.height,y.updateProjectionMatrix(),b.setSize(M.width,M.height),b.setPixelRatio(Math.min(window.devicePixelRatio,2))});const y=new Be(75,M.width/M.height,.1,10);y.position.z=2.5,t.add(y);const E=new Yo(y,s);E.enableDamping=!0,E.enableZoom=!1;const b=new Vs({canvas:s,alpha:!0});b.outputColorSpace=Ye,b.setSize(M.width,M.height),b.setPixelRatio(Math.min(window.devicePixelRatio,2));const T=new jo,S=()=>{const w=T.getElapsedTime();g.setFromCamera(x,y);const O=[r,c,u,_],B=g.intersectObjects(O);for(const C of O)C.material.color.set(e.color);if(B.length>0){for(const C of B)B[0].object.material.color.set(e.hovercolor),document.body.style.cursor="pointer";m=B[0].object}else document.body.style.cursor="default",m=null;B.length?(m||console.log("mouse enter"),m=B[0]):(m&&console.log("mouse leave"),m=null),E.update(),c.rotation.y=w,c.rotation.z=w,r.rotation.y=w,r.rotation.x=w,u.rotation.x=w,_.rotation.x=w,b.render(t,y),window.requestAnimationFrame(S)};S()},sE=()=>{const s=document.querySelector("canvas.webgl3"),t=new qo,e=new Xo,n=new il(e),i="/portfolio2023/",r=n.load(`${i}textures/aigenerated/child11.jpg`);r.repeat.x=1,r.repeat.y=1,r.wrapS=rr,r.wrapT=rr,r.generateMipmaps=!1,r.minFilter=Ae;const o=new Mf,a=o.load([`${i}textures/environmentMaps/5/px.jpg`,`${i}textures/environmentMaps/5/nx.jpg`,`${i}textures/environmentMaps/5/py.jpg`,`${i}textures/environmentMaps/5/ny.jpg`,`${i}textures/environmentMaps/5/pz.jpg`,`${i}textures/environmentMaps/5/nz.jpg`]),c=o.load([`${i}textures/environmentMaps/2/px.jpg`,`${i}textures/environmentMaps/2/nx.jpg`,`${i}textures/environmentMaps/2/py.jpg`,`${i}textures/environmentMaps/2/ny.jpg`,`${i}textures/environmentMaps/2/pz.jpg`,`${i}textures/environmentMaps/2/nz.jpg`]),l=new cl;l.gravity.set(0,-15,0),l.broadphase=new bn(l),l.allowSleep=!0;const h=new is("default"),d=new ns(h,h,{friction:.15,restitution:.2});l.addContactMaterial(d),l.defaultContactMaterial=d;const u=new Af,f=new mt;f.mass=0,f.quaternion.setFromAxisAngle(new R(-1,0,0),Math.PI*.45),f.addShape(u),l.addBody(f);const _=new le(new Gs(2e3,2e3),new vf({opacity:.2}));_.receiveShadow=!0,_.rotation.x=-Math.PI*.45,t.add(_);const g=new sl(16777215,2);t.add(g);const m={color:272081,groundColor:8050343},p=new Sf(m.color,m.groundColor,.4);t.add(p);const v={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{v.width=window.innerWidth,v.height=window.innerHeight,x.aspect=v.width/v.height,x.updateProjectionMatrix(),y.setSize(v.width,v.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2))});const x=new Be(75,v.width/v.height,.1,100);x.position.set(0,1.2,5.2),t.add(x);const M=new Yo(x,s);M.enableDamping=!0,M.autoRotate=!0;const y=new Vs({canvas:s,antialias:!0,alpha:!0});y.outputColorSpace=Ye,y.setSize(v.width,v.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.initTexture(r,c);const E=[],b=new Hs(1,20,20),T=new ws({map:r,envMap:c}),S=new Rf(1,1,1,16,.2),w=new ws({envMap:a,shininess:1}),O=(Q,N,Z,et)=>{const it=new le(S,w);it.castShadow=!0,it.scale.set(Q,N,Z),it.position.copy(et),t.add(it);const lt=new es(new R(Q*.5,N*.5,Z*.5)),dt=new mt({mass:.1,position:new R(0,3,0),shape:lt,material:h});dt.allowSleep=!0,dt.sleepSpeedLimit=.8,dt.sleepTimeLimit=1,dt.position.copy(et),l.addBody(dt),E.push({mesh:it,body:dt})},B=(Q,N)=>{const Z=new le(b,T);Z.castShadow=!0,Z.scale.set(Q,Q,Q),Z.position.copy(N),t.add(Z);const et=new Tf(Q),it=new mt({mass:1,position:new R(N.x,N.y,N.z),shape:et,material:h});it.allowSleep=!0,it.sleepSpeedLimit=1,it.position.copy(N),l.addBody(it),E.push({mesh:Z,body:it})};function C(){B(Math.random()*.3,{x:Math.random()*3,y:10,z:Math.random()*3});const Q=Math.random()*2e3+1e3;setTimeout(C,Q)}setTimeout(()=>{C()},5e3);function I(Q){for(let N=0;N<Q;N++)setTimeout(()=>{B(Math.random()*.3,{x:Math.random()*3,y:10,z:Math.random()*3})},3e3)}I(50);function D(Q){for(let N=0;N<Q;N++)setTimeout(()=>{O(Math.random()*.7,Math.random()*.6,Math.random()*.5,{x:Math.random()*3,y:10,z:Math.random()*3})},3e3)}D(20);function F(Q){setTimeout(()=>{O(Math.random()*.7,Math.random()*.6,Math.random()*.5,{x:Math.random()*3,y:10,z:Math.random()*3})},Q)}F(5e3),F(7e3),F(9e3),F(1e4),F(12e3),window.addEventListener("createSphereClicked",()=>{B(Math.random()*.3,{x:Math.random()*3,y:10,z:Math.random()*3})}),window.addEventListener("createBoxClicked",()=>{O(Math.random()*1.12,Math.random()*1.12,Math.random()*1.12,{x:Math.random()*3,y:10,z:Math.random()*3})});const k=()=>{for(const Q of E)Q.body.removeEventListener("collide"),l.removeBody(Q.body),t.remove(Q.mesh);E.splice(0,E.length)};window.addEventListener("cross1Clicked",k),window.addEventListener("cross2Clicked",k);const G=new jo;let W=0;const j=()=>{const Q=G.getElapsedTime(),N=Q-W;W=Q,l.step(1/60,N,3);for(const Z of E)Z.mesh.position.copy(Z.body.position),Z.mesh.quaternion.copy(Z.body.quaternion);M.update(),y.render(t,x),window.requestAnimationFrame(j)};j()},oE=1/3,Ln=1/6,Xa=s=>Math.floor(s)|0,ja=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function aE(s=Math.random){const t=cE(s),e=new Float64Array(t).map(r=>ja[r%12*3]),n=new Float64Array(t).map(r=>ja[r%12*3+1]),i=new Float64Array(t).map(r=>ja[r%12*3+2]);return function(o,a,c){let l,h,d,u;const f=(o+a+c)*oE,_=Xa(o+f),g=Xa(a+f),m=Xa(c+f),p=(_+g+m)*Ln,v=_-p,x=g-p,M=m-p,y=o-v,E=a-x,b=c-M;let T,S,w,O,B,C;y>=E?E>=b?(T=1,S=0,w=0,O=1,B=1,C=0):y>=b?(T=1,S=0,w=0,O=1,B=0,C=1):(T=0,S=0,w=1,O=1,B=0,C=1):E<b?(T=0,S=0,w=1,O=0,B=1,C=1):y<b?(T=0,S=1,w=0,O=0,B=1,C=1):(T=0,S=1,w=0,O=1,B=1,C=0);const I=y-T+Ln,D=E-S+Ln,F=b-w+Ln,k=y-O+2*Ln,G=E-B+2*Ln,W=b-C+2*Ln,j=y-1+3*Ln,Q=E-1+3*Ln,N=b-1+3*Ln,Z=_&255,et=g&255,it=m&255;let lt=.6-y*y-E*E-b*b;if(lt<0)l=0;else{const zt=Z+t[et+t[it]];lt*=lt,l=lt*lt*(e[zt]*y+n[zt]*E+i[zt]*b)}let dt=.6-I*I-D*D-F*F;if(dt<0)h=0;else{const zt=Z+T+t[et+S+t[it+w]];dt*=dt,h=dt*dt*(e[zt]*I+n[zt]*D+i[zt]*F)}let At=.6-k*k-G*G-W*W;if(At<0)d=0;else{const zt=Z+O+t[et+B+t[it+C]];At*=At,d=At*At*(e[zt]*k+n[zt]*G+i[zt]*W)}let Mt=.6-j*j-Q*Q-N*N;if(Mt<0)u=0;else{const zt=Z+1+t[et+1+t[it+1]];Mt*=Mt,u=Mt*Mt*(e[zt]*j+n[zt]*Q+i[zt]*N)}return 32*(l+h+d+u)}}function cE(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const lE=()=>{const s=document.querySelector("canvas.webgl4"),t=new qo,e=new Xo,n=new il(e),i="/portfolio2023/",r=n.load(`${i}textures/aigenerated/main1.jpg`),o=n.load(`${i}textures/aigenerated/child2.jpg`),a=n.load(`${i}textures/aigenerated/child1.jpg`),c=n.load(`${i}textures/rock/rock_bumpmap.jpg`),l=new aE,h=new sl(16777215,1);t.add(h);const d=new Ef(16777215,2);d.position.set(0,50,-20),t.add(d);const u={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{u.width=window.innerWidth,u.height=window.innerHeight,f.aspect=u.width/u.height,f.updateProjectionMatrix(),g.setSize(u.width,u.height),g.setPixelRatio(Math.min(window.devicePixelRatio,2))});const f=new Be(75,u.width/u.height,.01,1e3);f.position.set(0,0,100),t.add(f);let _=new Yo(f,s);_.enableDamping=!0,_.autoRotate=!0,_.autoRotateSpeed=4,_.maxDistance=350,_.minDistance=150,_.enablePan=!1,_.enableZoom=!1;const g=new Vs({canvas:s,antialias:!0,alpha:!0});g.outputColorSpace=Ye,g.shadowMap.enabled=!0,g.shadowMap.type=Xc,g.setSize(u.width,u.height),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.initTexture(r),r.anisotropy=16;let m=new Es(30,5),p=new ws({map:r,bumpMap:c,bumpScale:2});const v=new le(m,p);t.add(v);let x=new Es(10,10),M=new ws({map:o,bumpMap:c,bumpScale:2});const y=new le(x,M);v.add(y),y.position.x=60;let E=new Es(4,10),b=new ws({map:a,bumpMap:c,bumpScale:1.5});const T=new le(E,b);v.add(T),T.position.z=60;function S(B,C,I){const D=B.geometry.attributes.position;for(let F=0;F<D.count;F++){const k=D.getX(F),G=D.getY(F),W=D.getZ(F),j=new V(k,G,W);j.normalize();const Q=B.geometry.parameters.radius+C(j.x+I*1e3*5e-4,j.y+I*1e3*3e-4,j.z+I*1e3*8e-4)*3;j.multiplyScalar(Q),D.setXYZ(F,j.x,j.y,j.z)}D.needsUpdate=!0}const w=new jo,O=()=>{const B=w.getElapsedTime();S(v,l,B),v.position.x+=-(Math.sin(B)*.4),v.position.y-=Math.sin(B)*.4,v.rotateY(.004),y.rotateY(.04),T.rotateX(.09),_.update(),g.render(t,f),window.requestAnimationFrame(O)};O()},Cf=document.getElementById("hamburger-button"),Mc=document.getElementById("mobile-menu"),Pf=()=>{Mc.classList.toggle("hidden"),Mc.classList.toggle("flex"),Cf.classList.toggle("toggle-btn")};Cf.addEventListener("click",Pf);Mc.addEventListener("click",Pf);Ac.hooks.after(()=>{const s=document.getElementById("hamburger-button"),t=document.getElementById("mobile-menu"),e=()=>{t.classList.toggle("hidden"),t.classList.toggle("flex"),s.classList.toggle("toggle-btn")};s.addEventListener("click",e),t.addEventListener("click",e)});function bs(){return/Mobi|Android/i.test(navigator.userAgent)}const Ya=document.querySelector(".square-container");function Dr(){const n=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,r=Math.floor(n/80),o=Math.ceil(i/80);Ya.style.gridTemplateColumns=`repeat(${r}, 1fr)`,Ya.style.gridTemplateRows=`repeat(${o}, 1fr)`;const a=r*o;for(let d=0;d<a;d++){const u=document.createElement("div");u.classList.add("square"),Ya.appendChild(u)}const c=Array.from(document.querySelectorAll(".square")),l=sn.utils.shuffle(c),h=sn.timeline({defaults:{duration:5e-4,ease:"expo.out"}});return l.forEach((d,u)=>{const f=bs()?.008:.001;h.to(d,{opacity:1},u*f)}),h}function Mn(){const e=document.querySelectorAll(".square"),n=sn.utils.shuffle(Array.from(e)),i=sn.timeline({defaults:{duration:.005}});return n.forEach((r,o)=>{const a=bs()?.027:.003;i.to(r,{opacity:0},o*a)}),i.eventCallback("onComplete",()=>{e.forEach(r=>{r.remove()})}),i}const hE=s=>{const t=document.querySelectorAll(".navelement");sn.timeline().fromTo(s,{duration:1,autoAlpha:0},{autoAlpha:1,ease:"power4.out"}).from(t,{opacity:0,y:30,duration:.05,stagger:.1}).to(".marquee_group",{x:"-100%",duration:30,repeat:-1,ease:"linear"},"-=2")},Au=s=>{const t=document.querySelectorAll(".navelement");sn.timeline().fromTo(s,{duration:1,autoAlpha:0},{autoAlpha:1,ease:"power4.out"}).from(t,{opacity:0,y:101,duration:.05,stagger:.1}).from(".octopus",{xPercent:-151,duration:.3}).from(".outline-title-yellow",{xPercent:200,duration:.3}).from(".cvbutton",{yPercent:-501,duration:.3}).from(".introduction",{yPercent:100,duration:.2})},Ru=s=>{const t=document.querySelectorAll(".navelement");sn.timeline().fromTo(s,{duration:1,autoAlpha:0},{autoAlpha:1,ease:"power4.out"}).from(t,{opacity:0,y:100,duration:.05,stagger:.1}).from(".front",{xPercent:101,duration:.2}).from(".back",{xPercent:-101,duration:.2}).from(".pfront",{xPercent:101,stagger:.1},"-=0.5").from(".pback",{xPercent:-101,stagger:.1},"-=0.5").from(".social",{opacity:0,y:100,duration:.2,stagger:.1},"-=0.3")},Cu=s=>{const t=document.querySelectorAll(".navelement");sn.timeline().fromTo(s,{duration:1,autoAlpha:0},{autoAlpha:1,ease:"power4.out"}).from(t,{opacity:0,y:100,duration:.05,stagger:.1}).from(".outline-title-rosa",{xPercent:-151,duration:.4}).from(".projectdiv",{xPercent:-301,stagger:.1}).from(".social",{opacity:0,y:100,duration:.2,stagger:.1},"-=0.1")},Pu=s=>{const t=document.querySelectorAll(".navelement");sn.timeline().fromTo(s,{duration:1,autoAlpha:0},{autoAlpha:1,ease:"power4.out"}).from(t,{opacity:0,y:100,duration:.05,stagger:.1}).from(".text-container",{xPercent:151,duration:.2}).from(".contact-container",{xPercent:-151,duration:.2}).from(".social",{opacity:0,y:100,duration:.2,stagger:.1},"-=0.3").from(".hand",{y:800,x:200,duration:1.5}).to(".hand",{y:20,x:-280,duration:.2,repeat:2,yoyo:!0,delay:.5}).to(".hand",{y:0,x:-300,duration:.2})},Lu=s=>{const t=document.querySelectorAll(".navelement"),e=document.querySelectorAll(".element");sn.timeline().fromTo(s,{duration:1,autoAlpha:0},{autoAlpha:1,ease:"power4.out"}).from(t,{opacity:0,y:100,duration:.05,stagger:.1}).from(e,{opacity:0,y:100,duration:.2,stagger:.2}).from(".social",{opacity:0,y:100,duration:.2,stagger:.1},"-=0.3")},Ir=s=>{sn.fromTo(s,{duration:1,autoAlpha:1},{autoAlpha:0,ease:"power4.out"})},uE=()=>{const s=sn.timeline();return s.to("#counter",{innerText:100,duration:2,snap:{innerText:4}}).to("#loading-screen",{x:"-100%",ease:"bounce",duration:2.5,onComplete:()=>{document.getElementById("loading-screen").classList.add("hidden")}}).from("#main-page",{x:"100%",ease:"bounce",duration:2.5},2).from(".questionmark",{x:"25%",y:"50%",ease:"expoScale(0.5,7,none)",scale:500,duration:window.innerWidth/720},"-=0.5").from(".marquee",{x:"100%",duration:window.innerWidth/300,ease:"linear"}).to(".marquee_group",{x:"-100%",duration:30,repeat:-1,ease:"linear"}),s};Ac.hooks.after(s=>{const t=document.getElementById("loading-screen");t&&t.classList.add("hidden")});Ac.init({views:[{namespace:"home",beforeEnter(){iE(),rE()},enter(){openModal.addEventListener("click",()=>{console.log("clicked")}),closeModal.addEventListener("click",()=>{modal.close()})}},{namespace:"aboutme",beforeEnter(){lE(),document.body.classList.remove("overflow-hidden"),document.body.classList.add("overflow-x-hidden"),document.body.classList.add("overflow-y-auto")},beforeLeave({current:s}){document.body.classList.add("overflow-hidden")}},{namespace:"skills",beforeEnter(){sE()}},{namespace:"projects",beforeEnter(){const s=document.querySelector(".bg-video video");bs||s.play(),bs()&&document.body.classList.remove("overflow-hidden")},beforeLeave(){bs()&&document.body.classList.add("overflow-hidden")}},{namespace:"project",beforeEnter(){document.body.classList.remove("overflow-hidden")},beforeLeave({current:s}){document.body.classList.add("overflow-hidden")}}],transitions:[{name:"home",to:{namespace:["home"]},once(){uE()},async leave(s){await Dr(),Ir(s.current.container)},async enter(s){await hE(s.next.container),Mn()}},{name:"aboutme",to:{namespace:["aboutme"]},async once(s){await Au(s.next.container),Mn()},async leave(s){await Dr(),Ir(s.current.container)},async enter(s){await Au(s.next.container),Mn()}},{name:"skills",to:{namespace:["skills"]},async once(s){await Ru(s.next.container),Mn()},async leave(s){await Dr(),Ir(s.current.container)},async enter(s){await Ru(s.next.container),Mn()}},{name:"contact",to:{namespace:["contact"]},async once(s){await Pu(s.next.container),Mn()},async leave(s){await Dr(),Ir(s.current.container)},async enter(s){await Pu(s.next.container),Mn()}},{name:"projects",to:{namespace:["projects"]},async once(s){await Cu(s.next.container),Mn()},async leave(s){await Dr(),Ir(s.current.container)},async enter(s){await Cu(s.next.container),Mn()}},{name:"project",to:{namespace:["project"]},async once(s){await Lu(s.next.container),Mn()},async leave(s){await Dr(),Ir(s.current.container)},async enter(s){await Lu(s.next.container),Mn()}}]});
//# sourceMappingURL=app-3e43fae3.js.map
