/**
 * Created by max on 2016/12/15.
 */
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
    f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
    {for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*! jQuery UI - v1.10.1 - 2013-02-20
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js
 * Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n,r=this,i=!1,s=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=this.element[0];while(n&&(n=n.parentNode))n===document&&(i=!0);return!i&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window).scrollTop())+(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0];if(!r)return;t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else i.containment.constructor===Array&&(this.containment=i.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;e.each(r.sortables,function(){var s=!1,o=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=!1;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!=="y")n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!=="x")t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!=="y")t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c].height;if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1;continue}d.snapMode!=="inner"&&(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=r||i||s||o||h}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=this.data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!r.length)return;t=parseInt(e(r[0]).css("zIndex"),10)||0,e(r).each(function(n){e(this).css("zIndex",t+n)}),this.css("zIndex",t+r.length)}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($) {
    $.cookie = function (key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options, {path:'/'});

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {
                path: '/'
            };
        var decode = options.raw ? function (s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);
/*
 HHcookie = {
 // --- ����cookie
 set: function (sName, sValue, expireHours) {
 var cookieString = sName + "=" + escape(sValue);
 //;�ж��Ƿ����ù���ʱ��
 if (expireHours > 0) {
 var date = new Date();
 date.setTime(date.getTime + expireHours * 3600 * 1000);
 cookieString = cookieString + "; expire=" + date.toGMTString();
 }
 document.cookie = cookieString + "; path=/";
 },
 //--- ��ȡcookie
 get: function (sName) {
 var aCookie = document.cookie.split("; ");
 for (var j = 0; j < aCookie.length; j++) {
 var aCrumb = aCookie[j].split("=");
 if (escape(sName) == aCrumb[0])
 return unescape(aCrumb[1]);
 }
 return null;
 }
 }*/
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
//将跳转带过来的cookie转为本地cookie
function getTujiacodeCookie(name, isPortal) {
    var domain = getCookieDomain();
    var prefix = getPrefix(isPortal);
    var beforestr;
    if (domain.length > 1 && domain[0] == ".") {
        beforestr = domain.substring(1) + prefix;
    } else {
        beforestr = domain + prefix;
    }
    var nameEQ =beforestr+ name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return unescape(c.substring(nameEQ.length,c.length));
        }
    }
    return false;
}

function getCookieDomain() {
    var pos = document.domain.indexOf(".");
    if (pos > 0) {
        return document.domain.substring(pos);
    } else {
        return document.domain;
    }
}

function getPrefix(isPortal) {
    var isMobileSite = document.domain[0] == 'm';
    if (!isPortal && isMobileSite) {
        return "_MobileContext_";
    } else {
        return "_PortalContext_";
    }
}


function clearTujiacodeCookie(name) {
    setTujiacodeCookie(name, "", -1);
}


function setTujiacodeCookie(name, value, seconds) {
    var prefix = getPrefix();
    if (document.domain == "localhost") {
        document.cookie = "localhost" + prefix + name + "=" + escape(value);
        return;
    }

    var domain = getCookieDomain();
    var beforestr;
    if (domain.length > 1 && domain[0] == ".") {
        beforestr = domain.substring(1) + prefix;
    } else {
        beforestr = domain + prefix;
    }
    seconds = seconds || 0;
    var expires = "";
    if (seconds != 0 ) {
        var date = new Date();
        date.setTime(date.getTime()+(seconds*1000));
        expires = "; expires="+date.toGMTString();
    }
    document.cookie = beforestr + name + "=" + escape(value) + expires + "; path=/;domain=" + domain;
}


var TujiaCookieName = ["OriginalCustomerSourceChannelID", "OriginalCustomerSourceChannelCode", "PromotionChannelID", "PromotionChannelCode", "SubCustomerSourceChannelCode", "HisPromotionChannelCode", "HisSubCustomerSourceChannelCode", "ChannelProfile"];
var TujiaCookiehour = [0, 0, 0, 0, 0, 2592000, 2592000, 0];

for(var cookieindex=0;cookieindex<TujiaCookieName.length;cookieindex++)
{
    //gopage添加的temp cookie默认是portal prefix的，所以要用true
    if (getTujiacodeCookie("Temp" + TujiaCookieName[cookieindex], true) != false)
    {
        var tujiacookievalue = getTujiacodeCookie("Temp" + TujiaCookieName[cookieindex], true);
        setTujiacodeCookie(TujiaCookieName[cookieindex], tujiacookievalue, TujiaCookiehour[cookieindex])
    }
}
/**
 * @license
 * jQuery Tools @VERSION / Expose - Dim the lights
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/toolbox/expose.html
 *
 * Since: Mar 2010
 * Date: @DATE
 */
(function($) {

    // static constructs
    $.tools = $.tools || {version: '@VERSION'};

    var tool;

    tool = $.tools.expose = {

        conf: {
            maskId: 'exposeMask',
            loadSpeed: 'slow',
            closeSpeed: 'fast',
            closeOnClick: true,
            closeOnEsc: true,

            // css settings
            zIndex: 9998,
            opacity: 0.8,
            startOpacity: 0,
            color: '#fff',

            // callbacks
            onLoad: null,
            onClose: null
        }
    };

    /* one of the greatest headaches in the tool. finally made it */
    function viewport() {

        // the horror case
        if ($.browser.msie) {

            // if there are no scrollbars then use window.height
            var d = $(document).height(), w = $(window).height();

            return [
                window.innerWidth || 							// ie7+
                document.documentElement.clientWidth || 	// ie6
                document.body.clientWidth, 					// ie6 quirks mode
                d - w < 20 ? w : d
            ];
        }

        // other well behaving browsers
        return [$(document).width(), $(document).height()];
    }

    function call(fn) {
        if (fn) { return fn.call($.mask); }
    }

    var mask, exposed, loaded, config, overlayIndex;


    $.mask = {

        load: function(conf, els) {

            // already loaded ?
            if (loaded) { return this; }

            // configuration
            if (typeof conf == 'string') {
                conf = {color: conf};
            }

            // use latest config
            conf = conf || config;

            config = conf = $.extend($.extend({}, tool.conf), conf);

            // get the mask
            mask = $("#" + conf.maskId);

            // or create it
            if (!mask.length) {
                mask = $('<div/>').attr("id", conf.maskId);
                $("body").append(mask);
            }

            // set position and dimensions
            var size = viewport();

            mask.css({
                position:'absolute',
                top: 0,
                left: 0,
                width: size[0],
                height: size[1],
                display: 'none',
                opacity: conf.startOpacity,
                zIndex: conf.zIndex
            });

            if (conf.color) {
                mask.css("backgroundColor", conf.color);
            }

            // onBeforeLoad
            if (call(conf.onBeforeLoad) === false) {
                return this;
            }

            // esc button
            if (conf.closeOnEsc) {
                $(document).bind("keydown.mask", function(e) {
                    if (e.keyCode == 27) {
                        $.mask.close(e);
                    }
                });
            }

            // mask click closes
            if (conf.closeOnClick) {
                mask.bind("click.mask", function(e)  {
                    $.mask.close(e);
                });
            }

            // resize mask when window is resized
            $(window).bind("resize.mask", function() {
                $.mask.fit();
            });

            // exposed elements
            if (els && els.length) {

                overlayIndex = els.eq(0).css("zIndex");

                // make sure element is positioned absolutely or relatively
                $.each(els, function() {
                    var el = $(this);
                    if (!/relative|absolute|fixed/i.test(el.css("position"))) {
                        el.css("position", "relative");
                    }
                });

                // make elements sit on top of the mask
                exposed = els.css({ zIndex: Math.max(conf.zIndex + 1, overlayIndex == 'auto' ? 0 : overlayIndex)});
            }

            // reveal mask
            mask.css({display: 'block'}).fadeTo(conf.loadSpeed, conf.opacity, function() {
                $.mask.fit();
                call(conf.onLoad);
                loaded = "full";
            });

            loaded = true;
            return this;
        },

        close: function() {
            if (loaded) {

                // onBeforeClose
                if (call(config.onBeforeClose) === false) { return this; }

                mask.fadeOut(config.closeSpeed, function()  {
                    call(config.onClose);
                    if (exposed) {
                        exposed.css({zIndex: overlayIndex});
                    }
                    loaded = false;
                });

                // unbind various event listeners
                $(document).unbind("keydown.mask");
                mask.unbind("click.mask");
                $(window).unbind("resize.mask");
            }

            return this;
        },

        fit: function() {
            if (loaded) {
                var size = viewport();
                mask.css({width: size[0], height: size[1]});
            }
        },

        getMask: function() {
            return mask;
        },

        isLoaded: function(fully) {
            return fully ? loaded == 'full' : loaded;
        },

        getConf: function() {
            return config;
        },

        getExposed: function() {
            return exposed;
        }
    };

    $.fn.mask = function(conf) {
        $.mask.load(conf,this);
        return this;
    };

    $.fn.expose = function(conf) {
        $.mask.load(conf, this);
        return this;
    };


})(jQuery);

/**
 * @license
 * jQuery Tools @VERSION Overlay - Overlay base. Extend it.
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/overlay/
 *
 * Since: March 2008
 * Date: @DATE
 */
(function ($) {

    // static constructs
    $.tools = $.tools || { version: '@VERSION' };

    $.tools.overlay = {

        addEffect: function (name, loadFn, closeFn) {
            effects[name] = [loadFn, closeFn];
        },

        conf: {
            close: null,
            closeOnClick: true,
            closeOnEsc: true,
            closeSpeed: 200,
            effect: 'default',

            // since 1.2. fixed positioning not supported by IE6
            fixed: !$.browser.msie || $.browser.version > 6,

            left: 'center',
            load: false, // 1.2
            mask: null,
            oneInstance: true,
            speed: 'normal',
            target: null, // target element to be overlayed. by default taken from [rel]
            top: '10%'
        }
    };


    var instances = [], effects = {};

    // the default effect. nice and easy!
    $.tools.overlay.addEffect('default',

        /*
         onLoad/onClose functions must be called otherwise none of the
         user supplied callback methods won't be called
         */
        function (pos, onLoad) {

            var conf = this.getConf(),
                w = $(window);

            if (!conf.fixed) {
                pos.top += w.scrollTop();
                pos.left += w.scrollLeft();
            }

            pos.position = conf.fixed ? 'fixed' : 'absolute';
            this.getOverlay().css(pos).fadeIn(conf.speed, onLoad);

        }, function (onClose) {
            this.getOverlay().fadeOut(this.getConf().closeSpeed, onClose);
        }
    );


    function Overlay(trigger, conf) {

        // private variables
        var self = this,
            fire = trigger.add(self),
            w = $(window),
            closers,
            overlay,
            opened,
            maskConf = $.tools.expose && (conf.mask || conf.expose),
            uid = Math.random().toString().slice(10);


        // mask configuration
        if (maskConf) {
            if (typeof maskConf == 'string') { maskConf = { color: maskConf }; }
            maskConf.closeOnClick = maskConf.closeOnEsc = false;
        }

        // get overlay and trigger
        var jq = conf.target || trigger.attr("rel");
        overlay = jq ? $(jq) : null || trigger;

        // overlay not found. cannot continue
        if (!overlay.length) { throw "Could not find Overlay: " + jq; }

        // trigger's click event
        if (trigger && trigger.index(overlay) == -1) {
            trigger.click(function (e) {
                self.load(e);
                return e.preventDefault();
            });
        }

        // API methods
        $.extend(self, {

            load: function (e) {

                // can be opened only once
                if (self.isOpened()) { return self; }

                // find the effect
                var eff = effects[conf.effect];
                if (!eff) { throw "Overlay: cannot find effect : \"" + conf.effect + "\""; }

                // close other instances?
                if (conf.oneInstance) {
                    $.each(instances, function () {
                        this.close(e);
                    });
                }

                // onBeforeLoad
                e = e || $.Event();
                e.type = "onBeforeLoad";
                fire.trigger(e);
                if (e.isDefaultPrevented()) { return self; }

                // opened
                opened = true;

                // possible mask effect
                if (maskConf) { $(overlay).expose(maskConf); }

                // position & dimensions
                var top = conf.top,
                    left = conf.left,
                    oWidth = overlay.outerWidth(),
                    oHeight = overlay.outerHeight();

                if (typeof top == 'string') {
                    top = top == 'center' ? Math.max((w.height() - oHeight) / 2, 0) :
                    parseInt(top, 10) / 100 * w.height();
                }

                if (left == 'center') { left = Math.max((w.width() - oWidth) / 2, 0); }


                // load effect
                eff[0].call(self, { top: top, left: left }, function () {
                    if (opened) {
                        e.type = "onLoad";
                        fire.trigger(e);
                    }
                });

                // mask.click closes overlay
                if (maskConf && conf.closeOnClick) {
                    $.mask.getMask().one("click", self.close);
                }

                // when window is clicked outside overlay, we close
                if (conf.closeOnClick) {
                    $(document).on("click." + uid, function (e) {
                        if (!$(e.target).parents(overlay).length) {
                            self.close(e);
                        }
                    });
                }

                // keyboard::escape
                if (conf.closeOnEsc) {

                    // one callback is enough if multiple instances are loaded simultaneously
                    $(document).on("keydown." + uid, function (e) {
                        if (e.keyCode == 27) {
                            self.close(e);
                        }
                    });
                }


                return self;
            },

            close: function (e) {

                if (!self.isOpened()) { return self; }

                e = e || $.Event();
                e.type = "onBeforeClose";
                fire.trigger(e);
                if (e.isDefaultPrevented()) { return; }

                opened = false;

                // close effect
                effects[conf.effect][1].call(self, function () {
                    e.type = "onClose";
                    fire.trigger(e);
                });

                // unbind the keyboard / clicking actions
                $(document).off("click." + uid + " keydown." + uid);

                if (maskConf) {
                    $.mask.close();
                }

                return self;
            },

            getOverlay: function () {
                return overlay;
            },

            getTrigger: function () {
                return trigger;
            },

            getClosers: function () {
                return closers;
            },

            isOpened: function () {
                return opened;
            },

            // manipulate start, finish and speeds
            getConf: function () {
                return conf;
            }

        });

        // callbacks
        $.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function (i, name) {

            // configuration
            if ($.isFunction(conf[name])) {
                $(self).on(name, conf[name]);
            }

            // API
            self[name] = function (fn) {
                if (fn) { $(self).on(name, fn); }
                return self;
            };
        });

        // close button
        closers = overlay.find(conf.close || ".closeBtnIced");

        if (!closers.length && !conf.close) {
            closers = $('<a class="close"></a>');
            overlay.prepend(closers);
        }

        closers.live("click", function (e) {
            self.close(e);
        });

        // autoload
        if (conf.load) { self.load(); }

    }

    // jQuery plugin initialization
    $.fn.overlay = function (conf) {

        // already constructed --> return API
        var el = this.data("overlay");
        if (el) { return el; }

        if ($.isFunction(conf)) {
            conf = { onBeforeLoad: conf };
        }

        conf = $.extend(true, {}, $.tools.overlay.conf, conf);

        this.each(function () {
            var el = new Overlay($(this), conf), self = $(this);
            instances.push(el);
            self.data("overlay", el);
        });
        return conf.api ? el : this;
    };
    // bind resize event
    $(window).resize(function () {
        $.each(instances, function (i, el) {
            if (!el.isOpened()) {
                return true;
            }
            var conf = el.getConf(),
                w = $(window),
                oel = el.getOverlay(),
                top = conf.top,
                left = conf.left,
                oWidth = oel.outerWidth(true),
                oHeight = oel.outerHeight(true),
                pos;

            if (typeof top == 'string') {
                top = top == 'center' ? Math.max((w.height() - oHeight) / 2, 0) :
                parseInt(top, 10) / 100 * w.height();
            }

            if (left == 'center') { left = Math.max((w.width() - oWidth) / 2, 0); }

            pos = { top: top, left: left }

            if (!conf.fixed) {
                pos.top += w.scrollTop();
                pos.left += w.scrollLeft();
            }

            pos.position = conf.fixed ? 'fixed' : 'absolute';
            oel.css(pos);
        });
    });

})(jQuery);


/*!
 * jQuery Raty - A Star Rating Plugin - http://wbotelhos.com/raty
 * ---------------------------------------------------------------------
 *
 * jQuery Raty is a plugin that generates a customizable star rating.
 *
 * Licensed under The MIT License
 *
 * @version        2.1.0
 * @since          2010.06.11
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/raty
 * @twitter        twitter.com/wbotelhos
 *
 * Usage with default values:
 * ---------------------------------------------------------------------
 * $('#star').raty();
 *
 * <div id="star"></div>
 *
 * $('.star').raty();
 *
 * <div class="star"></div>
 * <div class="star"></div>
 * <div class="star"></div>
 *
 */

;(function($) {

    var methods = {
        init: function(options) {
            return this.each(function() {

                var opt		= $.extend({}, $.fn.raty.defaults, options),
                    $this	= $(this).data('options', opt);

                if (opt.number > 20) {
                    opt.number = 20;
                } else if (opt.number < 0) {
                    opt.number = 0;
                }

                if (opt.round.down === undefined) {
                    opt.round.down = $.fn.raty.defaults.round.down;
                }

                if (opt.round.full === undefined) {
                    opt.round.full = $.fn.raty.defaults.round.full;
                }

                if (opt.round.up === undefined) {
                    opt.round.up = $.fn.raty.defaults.round.up;
                }

                if (opt.path != "" && opt.path.substring(opt.path.length - 1, opt.path.length) != '/') {
                    opt.path += '/';
                }

                if (typeof opt.start == 'function') {
                    opt.start = opt.start.call(this);
                }

                var isValidStart	= !isNaN(parseInt(opt.start, 10)),
                    start			= '';

                if (isValidStart) {
                    start = (opt.start > opt.number) ? opt.number : opt.start;
                }

                var starFile	= opt.starOn,
                    space		= (opt.space) ? 4 : 0,
                    hint		= '';

                for (var i = 1; i <= opt.number; i++) {
                    starFile = (start < i) ? opt.starOff : opt.starOn;

                    hint = (i <= opt.hintList.length && opt.hintList[i - 1] !== null) ? opt.hintList[i - 1] : i;

                    $this.append('<img src="' + opt.path + starFile + '" alt="' + i + '" title="' + hint + '" />');

                    if (opt.space) {
                        $this.append((i < opt.number) ? '&nbsp;' : '');
                    }
                }

                var $score = $('<input/>', { type: 'hidden', name: opt.scoreName, id:opt.scoreName}).appendTo($this);

                if (isValidStart) {
                    if (opt.start > 0) {
                        $score.val(start);
                    }

                    methods.roundStar.call($this, start);
                }

                if (opt.iconRange) {
                    methods.fillStar.call($this, start);
                }

                methods.setTarget.call($this, start, opt.targetKeep);

                //var width = opt.width || (opt.number * opt.size + opt.number * space);

                if (opt.cancel) {
                    var $cancel = $('<img src="' + opt.path + opt.cancelOff + '" alt="x" title="' + opt.cancelHint + '" class="raty-cancel"/>');

                    if (opt.cancelPlace == 'left') {
                        $this.prepend('&nbsp;').prepend($cancel);
                    } else {
                        $this.append('&nbsp;').append($cancel);
                    }

                    //width += opt.size + space;
                }

                if (opt.readOnly) {
                    methods.fixHint.call($this);

                    $this.children('.raty-cancel').hide();
                } else {
                    $this.css('cursor', 'pointer');

                    methods.bindAction.call($this);
                }

                //$this.css('width', width);
            });
        }, bindAction: function() {
            var self	= this,
                opt		= this.data('options'),
                $score	= this.children('input');

            self.mouseleave(function() {
                methods.initialize.call(self, $score.val());

                methods.setTarget.call(self, $score.val(), opt.targetKeep);
            });

            var $stars	= this.children('img').not('.raty-cancel'),
                action	= (opt.half) ? 'mousemove' : 'mouseover';

            if (opt.cancel) {
                self.children('.raty-cancel').mouseenter(function() {
                    $(this).attr('src', opt.path + opt.cancelOn);

                    $stars.attr('src', opt.path + opt.starOff);

                    methods.setTarget.call(self, null, true);
                }).mouseleave(function() {
                    $(this).attr('src', opt.path + opt.cancelOff);

                    self.mouseout();
                }).click(function(evt) {
                    $score.removeAttr('value');

                    if (opt.click) {
                        opt.click.call(self[0], null, evt);
                    }
                });
            }

            $stars.bind(action, function(evt) {
                var value = parseInt(this.alt, 10);

                if (opt.half) {
                    var position	= parseFloat((evt.pageX - $(this).offset().left) / opt.size),
                        diff		= (position > .5) ? 1 : .5;

                    value = parseFloat(this.alt) - 1 + diff;

                    methods.fillStar.call(self, value);

                    if (opt.precision) {
                        value = value - diff + position;
                    }

                    methods.showHalf.call(self, value);
                } else {
                    methods.fillStar.call(self, value);
                }

                self.data('score', value);

                methods.setTarget.call(self, value, true);
            }).click(function(evt) {
                $score.val((opt.half || opt.precision) ? self.data('score') : this.alt);

                if (opt.click) {
                    opt.click.call(self[0], $score.val(), evt);
                }
            });
        }, cancel: function(isClick) {
            return this.each(function() {
                var $this = $(this);

                if ($this.data('readonly') == 'readonly') {
                    return false;
                }

                if (isClick) {
                    methods.click.call($this, null);
                } else {
                    methods.start.call($this, null);
                }

                $this.mouseleave().children('input').removeAttr('value');
            });
        }, click: function(score) {
            return this.each(function() {
                var $this = $(this);

                if ($this.data('readonly') == 'readonly') {
                    return false;
                }

                methods.initialize.call($this, score);

                var opt = $this.data('options');

                if (opt.click) {
                    opt.click.call($this[0], score);
                } else {
                    $.error('you must add the "click: function(score, evt) { }" callback.');
                }

                methods.setTarget.call($this, score, true);
            });
        }, fillStar: function(score) {
            var opt		= this.data('options'),
                $stars	= this.children('img').not('.raty-cancel'),
                qtyStar	= $stars.length,
                count	= 0,
                $star	,
                star	,
                icon	;

            for (var i = 1; i <= qtyStar; i++) {
                $star = $stars.eq(i - 1);

                if (opt.iconRange && opt.iconRange.length > count) {
                    star = opt.iconRange[count];

                    if (opt.single) {
                        icon = (i == score) ? (star.on || opt.starOn) : (star.off || opt.starOff);
                    } else {
                        icon = (i <= score) ? (star.on || opt.starOn) : (star.off || opt.starOff);
                    }

                    if (i <= star.range) {
                        $star.attr('src', opt.path + icon);
                    }

                    if (i == star.range) {
                        count++;
                    }
                } else {
                    if (opt.single) {
                        icon = (i == score) ? opt.starOn : opt.starOff;
                    } else {
                        icon = (i <= score) ? opt.starOn : opt.starOff;
                    }

                    $star.attr('src', opt.path + icon);
                }
            }
        }, fixHint: function() {
            var opt		= this.data('options'),
                $score	= this.children('input'),
                score	= parseInt($score.val(), 10),
                hint	= opt.noRatedMsg;

            if (!isNaN(score) && score > 0) {
                hint = (score <= opt.hintList.length && opt.hintList[score - 1] !== null) ? opt.hintList[score - 1] : score;
            }

            $score.attr('readonly', 'readonly');
            this.css('cursor', 'default').data('readonly', 'readonly').attr('title', hint).children('img').attr('title', hint);
        }, readOnly: function(isReadOnly) {
            return this.each(function() {
                var $this	= $(this),
                    $cancel	= $this.children('.raty-cancel');

                if ($cancel.length) {
                    if (isReadOnly) {
                        $cancel.hide();
                    } else {
                        $cancel.show();
                    }
                }

                if (isReadOnly) {
                    $this.unbind();

                    $this.children('img').unbind();

                    methods.fixHint.call($this);
                } else {
                    methods.bindAction.call($this);

                    methods.unfixHint.call($this);
                }
            });
        }, roundStar: function(score) {
            var opt		= this.data('options'),
                diff	= (score - Math.floor(score)).toFixed(2);

            if (diff > opt.round.down) {
                var icon = opt.starOn;						// Full up: [x.76 .. x.99]

                if (diff < opt.round.up && opt.halfShow) {	// Half: [x.26 .. x.75]
                    icon = opt.starHalf;
                } else if (diff < opt.round.full) {			// Full down: [x.00 .. x.5]
                    icon = opt.starOff;
                }

                this.children('img').not('.raty-cancel').eq(Math.ceil(score) - 1).attr('src', opt.path + icon);
            }												// Full down: [x.00 .. x.25]
        }, score: function() {
            var score	= [],
                value	;

            this.each(function() {
                value = $(this).children('input').val();
                value = (value == '') ? null : parseFloat(value);

                score.push(value);
            });

            return (score.length > 1) ? score : score[0];
        }, setTarget: function(value, isKeep) {
            var opt = this.data('options');

            if (opt.target) {
                var $target = $(opt.target);

                if ($target.length == 0) {
                    $.error('target selector invalid or missing!');
                } else {
                    var score = value;

                    if (score == null && !opt.cancel) {
                        $.error('you must enable the "cancel" option to set hint on target.');
                    } else {
                        if (!isKeep || score == '') {
                            score = opt.targetText;
                        } else {
                            if (opt.targetType == 'hint') {
                                if (score === null && opt.cancel) {
                                    score = opt.cancelHint;
                                } else {
                                    score = opt.hintList[Math.ceil(score - 1)];
                                }
                            } else {
                                if (score != '' && !opt.precision) {
                                    score = parseInt(score, 10);
                                } else {
                                    score = parseFloat(score).toFixed(1);
                                }
                            }
                        }

                        if (typeof (score) == "undefined")
                        {
                            score = "";
                        }


                        if (opt.targetFormat.indexOf('{score}') < 0) {
                            $.error('template "{score}" missing!');
                        } else if (value !== null) {
                            score = opt.targetFormat.toString().replace('{score}', score);
                        }

                        if ($target.is(':input')) {
                            $target.val(score);
                        } else {
                            $target.html(score);
                        }
                    }
                }
            }
        }, showHalf: function(score) {
            var opt		= this.data('options'),
                diff	= (score - Math.floor(score)).toFixed(1);

            if (diff > 0 && diff < .6) {
                this.children('img').not('.raty-cancel').eq(Math.ceil(score) - 1).attr('src', opt.path + opt.starHalf);
            }
        }, start: function(score) {
            return this.each(function() {
                var $this = $(this);

                if ($this.data('readonly') == 'readonly') {
                    return false;
                }

                methods.initialize.call($this, score);

                var opt = $this.data('options');

                methods.setTarget.call($this, score, true);
            });
        }, initialize: function(score) {
            var opt	= this.data('options');

            if (score < 0) {
                score = 0;
            } else if (score > opt.number) {
                score = opt.number;
            }

            methods.fillStar.call(this, score);

            if (score != '') {
                if (opt.halfShow) {
                    methods.roundStar.call(this, score);
                }

                this.children('input').val(score);
            }
        }, unfixHint: function() {
            var opt		= this.data('options'),
                $imgs	= this.children('img').filter(':not(.raty-cancel)');

            for (var i = 0; i < opt.number; i++) {
                $imgs.eq(i).attr('title', (i < opt.hintList.length && opt.hintList[i] !== null) ? opt.hintList[i] : i);
            }

            this.css('cursor', 'pointer').removeData('readonly').removeAttr('title').children('input').attr('readonly', 'readonly');
        }
    };

    $.fn.raty = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist!');
        }
    };

    $.fn.raty.defaults = {
        cancel:			false,
        cancelHint:		'cancel this rating!',
        cancelOff:		'cancel-off.png',
        cancelOn:		'cancel-on.png',
        cancelPlace:	'left',
        click:			undefined,
        half:			false,
        halfShow:		true,
        hintList:		['bad', 'poor', 'regular', 'good', 'gorgeous'],
        iconRange:		undefined,
        noRatedMsg:		'暂时还没有评分',
        number:			5,
        path:			'img/',
        precision:		false,
        round:			{ down: .25, full: .6, up: .76 },
        readOnly:		false,
        scoreName:		'score',
        single:			false,
        size:			16,
        space:			true,
        starHalf:		'star-half.png',
        starOff:		'star-off.png',
        starOn:			'star-on.png',
        start:			0,
        target:			undefined,
        targetFormat:	'{score}',
        targetKeep:		false,
        targetText:		'',
        targetType:		'hint'
        //	width:			undefined
    };

})(jQuery);

/*!
 * jquery-powerFloat.js
 * jQuery 万能浮动层插件
 * http://www.zhangxinxu.com/wordpress/?p=1328
 * © by zhangxinxu
 * 2010-12-06 v1.0.0	插件编写，初步调试
 * 2010-12-30 v1.0.1	限定尖角字符字体，避免受浏览器自定义字体干扰
 * 2011-01-03 v1.1.0	修复连续获得焦点显示后又隐藏的bug
 修复图片加载正则判断不准确的问题
 * 2011-02-15 v1.1.1	关于居中对齐位置判断的特殊处理
 * 2011-04-15 v1.2.0	修复浮动层含有过高select框在IE下点击会隐藏浮动层的问题，同时优化事件绑定
 * 2011-09-13 v1.3.0 	修复两个菜单hover时间间隔过短隐藏回调不执行的问题
 * 2012-01-13 v1.4.0	去除ajax加载的存储
 修复之前按照ajax地址后缀判断是否图片的问题
 修复一些脚本运行出错
 修复hover延时显示时，元素没有显示但鼠标移出依然触发隐藏回调的问题
 * 2012-02-27 v1.5.0	为无id容器创建id逻辑使用错误的问题
 修复无事件浮动出现时同页面点击空白区域浮动层不隐藏的问题
 修复点击与hover并存时特定时候o.trigger报为null错误的问题
 * 2012-03-29 v1.5.1	修复连续hover时候后面一个不触发显示的问题
 * 2012-05-02 v1.5.2	点击事件 浮动框再次点击隐藏的问题修复
 * 2012-11-02 v1.6.0	兼容jQuery 1.8.2
 * 2012-01-28 v1.6.1	target参数支持funtion类型，以实现类似动态Ajax地址功能
 */

(function ($) {
    $.fn.powerFloat = function (options) {
        return $(this).each(function () {
            var s = $.extend({}, defaults, options || {});
            var init = function (pms, trigger) {
                if (o.target && o.target.css("display") !== "none") {
                    o.targetHide();
                }
                o.s = pms;
                o.trigger = trigger;
            }, hoverTimer;

            switch (s.eventType) {
                case "hover": {
                    $(this).hover(function () {
                        if (o.timerHold) {
                            o.flagDisplay = true;
                        }

                        var numShowDelay = parseInt(s.showDelay, 10);

                        init(s, $(this));
                        //鼠标hover延时
                        if (numShowDelay) {
                            if (hoverTimer) {
                                clearTimeout(hoverTimer);
                            }
                            hoverTimer = setTimeout(function () {
                                o.targetGet.call(o);
                            }, numShowDelay);
                        } else {
                            o.targetGet();
                        }
                    }, function () {
                        if (hoverTimer) {
                            clearTimeout(hoverTimer);
                        }
                        if (o.timerHold) {
                            clearTimeout(o.timerHold);
                        }

                        o.flagDisplay = false;

                        o.targetHold();
                    });
                    if (s.hoverFollow) {
                        //鼠标跟随
                        $(this).mousemove(function (e) {
                            o.cacheData.left = e.pageX;
                            o.cacheData.top = e.pageY;
                            o.targetGet.call(o);
                            return false;
                        });
                    }
                    break;
                }
                case "degHover": {
                    $(this).on("mouseover", s.degElem,function (ev) {
                        if (o.timerHold) {
                            o.flagDisplay = true;
                        }
                        var numShowDelay = parseInt(s.showDelay, 10);
                        init(s, $(this));
                        if (numShowDelay) {
                            if (hoverTimer) {
                                clearTimeout(hoverTimer);
                            }
                            hoverTimer = setTimeout(function () {
                                o.targetGet.call(o);
                            }, numShowDelay);
                        } else {
                            o.targetGet();
                        }
                    });

                    $(this).on("mouseout",s.degElem, function () {
                        if (hoverTimer) {
                            clearTimeout(hoverTimer);
                        }
                        if (o.timerHold) {
                            clearTimeout(o.timerHold);
                        }

                        o.flagDisplay = false;

                        o.targetHold();
                    });
                    break;
                }
                case "click": {
                    $(this).click(function (e) {
                        if (o.display && o.trigger && e.target === o.trigger.get(0)) {
                            o.flagDisplay = false;
                            o.displayDetect();
                        } else {
                            init(s, $(this));
                            o.targetGet();

                            if (!$(document).data("mouseupBind")) {
                                $(document).bind("mouseup", function (e) {
                                    var flag = false;
                                    if (o.trigger) {
                                        var idTarget = o.target.attr("id");
                                        if (!idTarget) {
                                            idTarget = "R_" + Math.random();
                                            o.target.attr("id", idTarget);
                                        }
                                        $(e.target).parents().each(function () {
                                            if ($(this).attr("id") === idTarget) {
                                                flag = true;
                                            }
                                        });
                                        if (s.eventType === "click" && o.display && e.target != o.trigger.get(0) && !flag) {
                                            o.flagDisplay = false;
                                            o.displayDetect();
                                        }
                                    }
                                    return false;
                                }).data("mouseupBind", true);
                            }
                        }
                    });

                    break;
                }
                case "focus": {
                    $(this).focus(function () {
                        var self = $(this);
                        setTimeout(function () {
                            init(s, self);
                            o.targetGet();
                        }, 200);
                    }).blur(function () {
                        o.flagDisplay = false;
                        setTimeout(function () {
                            o.displayDetect();
                        }, 190);
                    });
                    break;
                }
                case "custom":
                {
                    this.showpl = function () {

                        var self = $(this);
                        setTimeout(function () {
                            init(s, self);
                            o.targetGet();
                        }, 200);
                    };

                    this.hidepl = function () {
                        o.flagDisplay = false;
                        setTimeout(function () {
                            o.displayDetect();
                        }, 190);
                    };

                    this.clear = function () {
                        this.showpl = function () { };
                        this.hidepl = function () { };
                    }

                    break;
                }

                default: {
                    init(s, $(this));
                    o.targetGet();
                    // 放置页面点击后显示的浮动内容隐掉
                    $(document).unbind("mouseup").data("mouseupBind", false);
                }
            }
        });
    };

    var o = {
        targetGet: function () {
            //一切显示的触发来源
            if (!this.trigger) { return this; }
            var attr = this.trigger.attr(this.s.targetAttr), target = typeof this.s.target == "function" ? this.s.target.call(this.trigger) : this.s.target;

            switch (this.s.targetMode) {
                case "common": {
                    if (target) {
                        var type = typeof (target);
                        if (type === "object") {
                            if (target.size()) {
                                o.target = target.eq(0);
                            }
                        } else if (type === "string") {
                            if ($(target).size()) {
                                o.target = $(target).eq(0);
                            }
                        }
                    } else {
                        if (attr && $("#" + attr).size()) {
                            o.target = $("#" + attr);
                        }
                    }
                    if (o.target) {
                        o.targetShow();
                    } else {
                        return this;
                    }

                    break;
                }
                case "ajax": {
                    //ajax元素，如图片，页面地址
                    var url = target || attr;
                    this.targetProtect = false;

                    if (!url) { return; }

                    if (!o.cacheData[url]) {
                        o.loading();
                    }

                    //优先认定为图片加载
                    var tempImage = new Image();

                    tempImage.onload = function () {
                        var w = tempImage.width, h = tempImage.height;
                        var winw = $(window).width(), winh = $(window).height();
                        var imgScale = w / h, winScale = winw / winh;
                        if (imgScale > winScale) {
                            //图片的宽高比大于显示屏幕
                            if (w > winw / 2) {
                                w = winw / 2;
                                h = w / imgScale;
                            }
                        } else {
                            //图片高度较高
                            if (h > winh / 2) {
                                h = winh / 2;
                                w = h * imgScale;
                            }
                        }
                        var imgHtml = '<img class="float_ajax_image" src="' + url + '" width="' + w + '" height = "' + h + '" />';
                        o.cacheData[url] = true;
                        o.target = $(imgHtml);
                        o.targetShow();
                    };
                    tempImage.onerror = function () {
                        //如果图片加载失败，两种可能，一是100%图片，则提示；否则作为页面加载
                        if (/(\.jpg|\.png|\.gif|\.bmp|\.jpeg)$/i.test(url)) {
                            o.target = $('<div class="float_ajax_error">图片加载失败。</div>');
                            o.targetShow();
                        } else {
                            $.ajax({
                                url: url,
                                success: function (data) {
                                    if (typeof (data) === "string") {
                                        o.cacheData[url] = true;
                                        o.target = $('<div class="float_ajax_data">' + data + '</div>');
                                        o.targetShow();
                                    }
                                },
                                error: function () {
                                    o.target = $('<div class="float_ajax_error">数据没有加载成功。</div>');
                                    o.targetShow();
                                }
                            });
                        }
                    };
                    tempImage.src = url;

                    break;
                }
                case "list": {
                    //下拉列表
                    var targetHtml = '<ul class="float_list_ul">', arrLength;
                    if ($.isArray(target) && (arrLength = target.length)) {
                        $.each(target, function (i, obj) {
                            var list = "", strClass = "", text, href;
                            if (i === 0) {
                                strClass = ' class="float_list_li_first"';
                            }
                            if (i === arrLength - 1) {
                                strClass = ' class="float_list_li_last"';
                            }
                            if (typeof (obj) === "object" && (text = obj.text.toString())) {
                                if (href = (obj.href || "javascript:")) {
                                    list = '<a href="' + href + '" class="float_list_a">' + text + '</a>';
                                } else {
                                    list = text;
                                }
                            } else if (typeof (obj) === "string" && obj) {
                                list = obj;
                            }
                            if (list) {
                                targetHtml += '<li' + strClass + '>' + list + '</li>';
                            }
                        });
                    } else {
                        targetHtml += '<li class="float_list_null">列表无数据。</li>';
                    }
                    targetHtml += '</ul>';
                    o.target = $(targetHtml);
                    this.targetProtect = false;
                    o.targetShow();
                    break;
                }
                case "remind": {
                    //内容均是字符串
                    var strRemind = target || attr;
                    this.targetProtect = false;
                    if (typeof (strRemind) === "string") {
                        o.target = $('<span>' + strRemind + '</span>');
                        o.targetShow();
                    }
                    break;
                }
                default: {
                    var objOther = target || attr, type = typeof (objOther);
                    if (objOther) {
                        if (type === "string") {
                            //选择器
                            if (/^.[^:#\[\.,]*$/.test(objOther)) {
                                if ($(objOther).size()) {
                                    o.target = $(objOther).eq(0);
                                    this.targetProtect = true;
                                } else if ($("#" + objOther).size()) {
                                    o.target = $("#" + objOther).eq(0);
                                    this.targetProtect = true;
                                } else {
                                    o.target = $('<div>' + objOther + '</div>');
                                    this.targetProtect = false;
                                }
                            } else {
                                o.target = $('<div>' + objOther + '</div>');
                                this.targetProtect = false;
                            }

                            o.targetShow();
                        } else if (type === "object") {
                            if (!$.isArray(objOther) && objOther.size()) {
                                o.target = objOther.eq(0);
                                this.targetProtect = true;
                                o.targetShow();
                            }
                        }
                    }
                }
            }
            return this;
        },
        container: function () {
            //容器(如果有)重装target
            var cont = this.s.container, mode = this.s.targetMode || "mode";
            if (mode === "ajax" || mode === "remind") {
                //显示三角
                this.s.sharpAngle = true;
            } else {
                this.s.sharpAngle = false;
            }
            //是否反向
            if (this.s.reverseSharp) {
                this.s.sharpAngle = !this.s.sharpAngle;
            }

            if (mode !== "common") {
                //common模式无新容器装载
                if (cont === null) {
                    cont = "plugin";
                }
                if (cont === "plugin") {
                    if (!$("#floatBox_" + mode).size()) {
                        $('<div id="floatBox_' + mode + '" class="float_' + mode + '_box"></div>').appendTo($("body")).hide();
                    }
                    cont = $("#floatBox_" + mode);
                }

                if (cont && typeof (cont) !== "string" && cont.size()) {
                    if (this.targetProtect) {
                        o.target.show().css("position", "static");
                    }
                    o.target = cont.empty().append(o.target);
                }
            }
            return this;
        },
        setWidth: function () {
            var w = this.s.width;
            if (w === "auto") {
                if (this.target.get(0).style.width) {
                    this.target.css("width", "auto");
                }
            } else if (w === "inherit") {
                this.target.width(this.trigger.width());
            } else {
                this.target.css("width", w);
            }
            return this;
        },
        position: function () {
            if (!this.trigger || !this.target) {
                return this;
            }
            var pos, tri_h = 0, tri_w = 0, cor_w = 0, cor_h = 0, tri_l, tri_t, tar_l, tar_t, cor_l, cor_t,
                tar_h = this.target.data("height"), tar_w = this.target.data("width"),
                st = $(window).scrollTop(),

                off_x = parseInt(this.s.offsets.x, 10) || 0, off_y = parseInt(this.s.offsets.y, 10) || 0,
                mousePos = this.cacheData;
            //缓存目标对象高度，宽度，提高鼠标跟随时显示性能，元素隐藏时缓存清除
            if (!tar_h) {
                tar_h = this.target.outerHeight();
                if (this.s.hoverFollow) {
                    this.target.data("height", tar_h);
                }
            }
            if (!tar_w) {
                tar_w = this.target.outerWidth();
                if (this.s.hoverFollow) {
                    this.target.data("width", tar_w);
                }
            }

            pos = this.trigger.offset();
            tri_h = this.trigger.outerHeight();
            tri_w = this.trigger.outerWidth();
            tri_l = pos.left;
            tri_t = pos.top;

            var funMouseL = function () {
                if (tri_l < 0) {
                    tri_l = 0;
                } else if (tri_l + tri_h > $(window).width()) {
                    tri_l = $(window).width() - tri_w;
                }
            }, funMouseT = function () {
                if (tri_t < 0) {
                    tri_t = 0;
                } else if (tri_t + tri_h > $(document).height()) {
                    tri_t = $(document).height() - tri_h;
                }
            };
            //如果是鼠标跟随
            if (this.s.hoverFollow && mousePos.left && mousePos.top) {
                if (this.s.hoverFollow === "x") {
                    //水平方向移动，说明纵坐标固定
                    tri_l = mousePos.left
                    funMouseL();
                } else if (this.s.hoverFollow === "y") {
                    //垂直方向移动，说明横坐标固定，纵坐标跟随鼠标移动
                    tri_t = mousePos.top;
                    funMouseT();
                } else {
                    tri_l = mousePos.left;
                    tri_t = mousePos.top;
                    funMouseL();
                    funMouseT();
                }
            }


            var arrLegalPos = ["4-1", "1-4", "5-7", "2-3", "2-1", "6-8", "3-4", "4-3", "8-6", "1-2", "7-5", "3-2"],
                align = this.s.position, alignMatch = false, strDirect;
            $.each(arrLegalPos, function (i, n) {
                if (n === align) {
                    alignMatch = true;
                    return;
                }
            });
            if (!alignMatch) {
                align = "4-1";
            }

            var funDirect = function (a) {
                var dir = "bottom";
                //确定方向
                switch (a) {
                    case "1-4": case "5-7": case "2-3": {
                    dir = "top";
                    break;
                }
                    case "2-1": case "6-8": case "3-4": {
                    dir = "right";
                    break;
                }
                    case "1-2": case "8-6": case "4-3": {
                    dir = "left";
                    break;
                }
                    case "4-1": case "7-5": case "3-2": {
                    dir = "bottom";
                    break;
                }
                }
                return dir;
            };

            //居中判断
            var funCenterJudge = function (a) {
                if (a === "5-7" || a === "6-8" || a === "8-6" || a === "7-5") {
                    return true;
                }
                return false;
            };

            var funJudge = function (dir) {
                var totalHeight = 0, totalWidth = 0, flagCorner = (o.s.sharpAngle && o.corner) ? true : false;
                if (dir === "right") {
                    totalWidth = tri_l + tri_w + tar_w + off_x;
                    if (flagCorner) {
                        totalWidth += o.corner.width();
                    }
                    if (totalWidth > $(window).width()) {
                        return false;
                    }
                } else if (dir === "bottom") {
                    totalHeight = tri_t + tri_h + tar_h + off_y;
                    if (flagCorner) {
                        totalHeight += o.corner.height();
                    }
                    if (totalHeight > st + $(window).height()) {
                        return false;
                    }
                } else if (dir === "top") {
                    totalHeight = tar_h + off_y;
                    if (flagCorner) {
                        totalHeight += o.corner.height();
                    }
                    if (totalHeight > tri_t - st) {
                        return false;
                    }
                } else if (dir === "left") {
                    totalWidth = tar_w + off_x;
                    if (flagCorner) {
                        totalWidth += o.corner.width();
                    }
                    if (totalWidth > tri_l) {
                        return false;
                    }
                }
                return true;
            };
            //此时的方向
            strDirect = funDirect(align);

            if (this.s.sharpAngle) {
                //创建尖角
                this.createSharp(strDirect);
            }

            //边缘过界判断
            if (this.s.edgeAdjust) {
                //根据位置是否溢出显示界面重新判定定位
                if (funJudge(strDirect)) {
                    //该方向不溢出
                    (function () {
                        if (funCenterJudge(align)) { return; }
                        var obj = {
                            top: {
                                right: "2-3",
                                left: "1-4"
                            },
                            right: {
                                top: "2-1",
                                bottom: "3-4"
                            },
                            bottom: {
                                right: "3-2",
                                left: "4-1"
                            },
                            left: {
                                top: "1-2",
                                bottom: "4-3"
                            }
                        };
                        var o = obj[strDirect], name;
                        if (o) {
                            for (name in o) {
                                if (!funJudge(name)) {
                                    align = o[name];
                                }
                            }
                        }
                    })();
                } else {
                    //该方向溢出
                    (function () {
                        if (funCenterJudge(align)) {
                            var center = {
                                "5-7": "7-5",
                                "7-5": "5-7",
                                "6-8": "8-6",
                                "8-6": "6-8"
                            };
                            align = center[align];
                        } else {
                            var obj = {
                                top: {
                                    left: "3-2",
                                    right: "4-1"
                                },
                                right: {
                                    bottom: "1-2",
                                    top: "4-3"
                                },
                                bottom: {
                                    left: "2-3",
                                    right: "1-4"
                                },
                                left: {
                                    bottom: "2-1",
                                    top: "3-4"
                                }
                            };
                            var o = obj[strDirect], arr = [];
                            for (name in o) {
                                arr.push(name);
                            }
                            if (funJudge(arr[0]) || !funJudge(arr[1])) {
                                align = o[arr[0]];
                            } else {
                                align = o[arr[1]];
                            }
                        }
                    })();
                }
            }

            //已确定的尖角
            var strNewDirect = funDirect(align), strFirst = align.split("-")[0];
            if (this.s.sharpAngle) {
                //创建尖角
                this.createSharp(strNewDirect);
                cor_w = this.corner.width(), cor_h = this.corner.height();
            }

            //确定left, top值
            if (this.s.hoverFollow) {
                //如果鼠标跟随
                if (this.s.hoverFollow === "x") {
                    //仅水平方向跟随
                    tar_l = tri_l + off_x;
                    if (strFirst === "1" || strFirst === "8" || strFirst === "4") {
                        //最左
                        tar_l = tri_l - (tar_w - tri_w) / 2 + off_x;
                    } else {
                        //右侧
                        tar_l = tri_l - (tar_w - tri_w) + off_x;
                    }

                    //这是垂直位置，固定不动
                    if (strFirst === "1" || strFirst === "5" || strFirst === "2") {
                        tar_t = tri_t - off_y - tar_h - cor_h;
                        //尖角
                        cor_t = tri_t - cor_h - off_y - 1;

                    } else {
                        //下方
                        tar_t = tri_t + tri_h + off_y + cor_h;
                        cor_t = tri_t + tri_h + off_y + 1;
                    }
                    cor_l = pos.left - (cor_w - tri_w) / 2;
                } else if (this.s.hoverFollow === "y") {
                    //仅垂直方向跟随
                    if (strFirst === "1" || strFirst === "5" || strFirst === "2") {
                        //顶部
                        tar_t = tri_t - (tar_h - tri_h) / 2 + off_y;
                    } else {
                        //底部
                        tar_t = tri_t - (tar_h - tri_h) + off_y;
                    }

                    if (strFirst === "1" || strFirst === "8" || strFirst === "4") {
                        //左侧
                        tar_l = tri_l - tar_w - off_x - cor_w;
                        cor_l = tri_l - cor_w - off_x - 1;
                    } else {
                        //右侧
                        tar_l = tri_l + tri_w - off_x + cor_w;
                        cor_l = tri_l + tri_w + off_x + 1;
                    }
                    cor_t = pos.top - (cor_h - tri_h) / 2;
                } else {
                    tar_l = tri_l + off_x;
                    tar_t = tri_t + off_y;
                }

            } else {
                switch (strNewDirect) {
                    case "top": {
                        tar_t = tri_t - off_y - tar_h - cor_h;
                        if (strFirst == "1") {
                            tar_l = tri_l - off_x;
                        } else if (strFirst === "5") {
                            tar_l = tri_l - (tar_w - tri_w) / 2 - off_x;
                        } else {
                            tar_l = tri_l - (tar_w - tri_w) - off_x;
                        }
                        cor_t = tri_t - cor_h - off_y - 1;
                        cor_l = tri_l - (cor_w - tri_w) / 2;
                        break;
                    }
                    case "right": {
                        tar_l = tri_l + tri_w + off_x + cor_w;
                        if (strFirst == "2") {
                            tar_t = tri_t + off_y;
                        } else if (strFirst === "6") {
                            tar_t = tri_t - (tar_h - tri_h) / 2 + off_y;
                        } else {
                            tar_t = tri_t - (tar_h - tri_h) + off_y;
                        }
                        cor_l = tri_l + tri_w + off_x + 1;
                        cor_t = tri_t - (cor_h - tri_h) / 2;
                        break;
                    }
                    case "bottom": {
                        tar_t = tri_t + tri_h + off_y + cor_h;
                        if (strFirst == "4") {
                            tar_l = tri_l + off_x;
                        } else if (strFirst === "7") {
                            tar_l = tri_l - (tar_w - tri_w) / 2 + off_x;
                        } else {
                            tar_l = tri_l - (tar_w - tri_w) + off_x;
                        }
                        cor_t = tri_t + tri_h + off_y + 1;
                        cor_l = tri_l - (cor_w - tri_w) / 2;
                        break;
                    }
                    case "left": {
                        tar_l = tri_l - tar_w - off_x - cor_w;
                        if (strFirst == "2") {
                            tar_t = tri_t - off_y;
                        } else if (strFirst === "8") {
                            tar_t = tri_t - (tar_h - tri_h) / 2 - off_y;
                        } else {
                            tar_t = tri_t - (tar_h - tri_h) - off_y;
                        }
                        cor_l = tar_l + tar_w - 1;
                        cor_t = tri_t + (tri_h - cor_h) / 2;
                        break;
                    }
                }
            }
            //尖角的显示
            if (cor_h && cor_w && this.corner) {
                this.corner.css({
                    left: cor_l+this.s.offsets.x,
                    top: cor_t+this.s.offsets.y,
                    zIndex: this.s.zIndex + 1
                });
            }
            //浮动框显示
            this.target.css({
                position: "absolute",
                left: tar_l,
                top: tar_t,
                zIndex: this.s.zIndex
            });
            return this;
        },
        createSharp: function (dir) {
            var bgColor, bdColor, color1 = "", color2 = "";
            var objReverse = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            }, dirReverse = objReverse[dir] || "top";

            if (this.target) {
                bgColor = this.target.css("background-color");
                if (parseInt(this.target.css("border-" + dirReverse + "-width")) > 0) {
                    bdColor = this.target.css("border-" + dirReverse + "-color");
                }

                if (bdColor && bdColor !== "transparent") {
                    color1 = 'style="color:' + bdColor + ';"';
                } else {
                    color1 = 'style="display:none;"';
                }
                if (bgColor && bgColor !== "transparent") {
                    color2 = 'style="color:' + bgColor + ';"';
                } else {
                    color2 = 'style="display:none;"';
                }
            }

            var html = '<div id="floatCorner_' + dir + '" class="float_corner float_corner_' + dir + '">' +
                '<span class="corner corner_1" ' + color1 + '>◆</span>' +
                '<span class="corner corner_2" ' + color2 + '>◆</span>' +
                '</div>';
            if (!$("#floatCorner_" + dir).size()) {
                $("body").append($(html));
            }
            this.corner = $("#floatCorner_" + dir);
            return this;
        },
        targetHold: function () {
            if (this.s.hoverHold) {
                var delay = parseInt(this.s.hideDelay, 10) || 200;
                if (this.target) {
                    this.target.hover(function () {
                        o.flagDisplay = true;
                    }, function () {
                        if (o.timerHold) {
                            clearTimeout(o.timerHold);
                        }
                        o.flagDisplay = false;
                        o.targetHold();
                    });
                }

                o.timerHold = setTimeout(function () {
                    o.displayDetect.call(o);
                }, delay);
            } else {
                this.displayDetect();
            }
            return this;
        },
        loading: function () {
            this.target = $('<div><img src="'+staticFileRoot + '/PortalSite2/Images/loading.gif/></div>');
            this.targetShow();
            this.target.removeData("width").removeData("height");
            return this;
        },
        displayDetect: function () {
            //显示与否检测与触发
            if (!this.flagDisplay && this.display) {
                this.targetHide();
                this.timerHold = null;
            }
            return this;
        },
        targetShow: function () {
            o.cornerClear();
            this.display = true;
            this.container().setWidth().position();
            this.target.show();
            if ($.isFunction(this.s.showCall)) {
                this.s.showCall.call(this.trigger, this.target);
            }
            return this;
        },
        targetHide: function () {
            this.display = false;
            this.targetClear();
            this.cornerClear();
            if ($.isFunction(this.s.hideCall)) {
                this.s.hideCall.call(this.trigger);
            }
            this.target = null;
            this.trigger = null;
            this.s = {};
            this.targetProtect = false;
            return this;
        },
        targetClear: function () {
            if (this.target) {
                if (this.target.data("width")) {
                    this.target.removeData("width").removeData("height");
                }
                if (this.targetProtect) {
                    //保护孩子
                    this.target.children().hide().appendTo($("body"));
                }
                this.target.unbind().hide();
            }
        },
        cornerClear: function () {
            if (this.corner) {
                //使用remove避免潜在的尖角颜色冲突问题
                this.corner.remove();
            }
        },
        target: null,
        trigger: null,
        s: {},
        cacheData: {},
        targetProtect: false
    };

    $.powerFloat = {};
    $.powerFloat.hide = function () {
        o.targetHide();
    };
    $.powerFloat.refresh = function () {
        if (o.target) {
            o.targetShow();
        }
    }
    var defaults = {
        width: "auto", //可选参数：inherit，数值(px)
        offsets: {
            x: 0,
            y: 0
        },
        zIndex: 999,

        eventType: "hover", //事件类型，其他可选参数有：click, focus

        showDelay: 0, //鼠标hover显示延迟
        hideDelay: 0, //鼠标移出隐藏延时

        hoverHold: true,
        hoverFollow: false, //true或是关键字x, y

        targetMode: "common", //浮动层的类型，其他可选参数有：ajax, list, remind
        target: null, //target对象获取来源，优先获取，如果为null，则从targetAttr中获取。
        targetAttr: "rel", //target对象获取来源，当targetMode为list时无效

        container: null, //转载target的容器，可以使用"plugin"关键字，则表示使用插件自带容器类型
        reverseSharp: false, //是否反向小三角的显示，默认ajax, remind是显示三角的，其他如list和自定义形式是不显示的

        position: "4-1", //trigger-target
        edgeAdjust: true, //边缘位置自动调整

        showCall: $.noop,
        hideCall: $.noop

    };
})(jQuery);
/*! jq.carousel / jQuery plugin - v2.4.3 - 2012-11-08 1:11:07
 * http://5509.github.com/jq.carousel/
 * Copyright (c) 2012 Kazunori Tokuda; Licensed MIT */

;(function($, undefined) {

    var Carousel = function(parent, conf) {
        this.namespace = 'Carousel';
        if ( this instanceof Carousel ) {
            return this.init(parent, conf);
        }
        return new Carousel(parent, conf);
    };
    Carousel.prototype = {

        init: function(parent, conf) {
            var self = this;

            self.conf = $.extend({
                vertical : false,   // boolean
                loop     : true,    // boolean
                easing   : 'swing', // or custom easing
                start    : 1,       // int
                group    : 1,       // int
                duration : 0.2,     // int or float, 0.2 => 0.2s
                indicator: false    // boolean
            }, conf);
            self.initSuccess = true;
            self.$elem = parent;
            if (self.$elem.length === 0 || self.$elem.children().length === 0) {
                self.initSuccess = false;
                return self;
            }
            self.$carousel_wrap = $('<div></div>');

            self._build();
            self._setIndicator();
            self._eventify();

            return self;
        },

        _build: function() {
            var self = this,
                conf = self.conf,
                start_pos = 0,
                box_total_size = 0;

            self.offset_prop = self.conf.vertical ? 'offsetHeight' : 'offsetWidth';
            self.float = conf.vertical ? 'none' : 'left';
            self.position = conf.vertical ? 'top' : 'left';
            self.prop = conf.vertical ? 'height' : 'width';

            self.view_size = self.$elem[0][self.offset_prop];
            self.total_size = 0;
            self.current = conf.start;

            self.$items = self.$elem.children();
            self.$items_original = self.$items.clone();
            self.items_length = self.$items.length;
            self.items_len_hidden = 0;

            self.$elem.html(
                self.$carousel_wrap
                    .html(
                        self.$items
                    )
            );

            box_total_size = self.items_length * self.$items[0][self.offset_prop];

            // setup
            self.$items.css({
                float: self.float
            });
            each(self.$items, function(i) {
                var item = this;

                item.carousel_id = i;
                item.$elem = $(this);
                item.data_size = item[self.offset_prop];
                item.orig_size = item.$elem.css(self.prop);

                if ( self.items_len_hidden > self.view_size ) return;
                self.items_len_hidden = self.items_len_hidden + item.data_size;
            });
            self.item_size = self.$items.eq(0)[0].data_size;
            self.items_len_hidden = self.items_len_hidden / self.item_size;

            if ( conf.group !== 1 ) {
                self._groupSetup();
                if ( conf.loop ) {
                    self._cloneGroup();
                }
            } else {
                // clone nodes
                if ( conf.loop ) {
                    self._cloneItem();
                }
            }

            self.$elem.css({
                overflow: 'hidden',
                position: 'relative'
            });

            // carousel width and height
            if ( conf.loop ) {
                start_pos = self.items_len_hidden + self.current - 1;
                self.current_pos = -start_pos * self.item_size;
                self.default_pos = -self.items_len_hidden * self.item_size;
            } else {
                start_pos = self.items_length < conf.start ? 1 : conf.start;
                self.current_pos = -(start_pos-1) * self.item_size;
                self.default_pos = 0;
            }
            self.$carousel_wrap.css({
                position: 'relative'
            })
                .css(self.position, self.current_pos);

            if ( self.vertical ) {
                self.$carousel_wrap.css('width', self.$items.eq(0)[0].offsetWidth);
            } else {
                self.$carousel_wrap.css('height', self.$items.eq(0)[0].offsetHeight);
            }

            // max and min point
            self.max_point = self.default_pos - (self.item_size * self.items_length);
            self.min_point = self.default_pos;

            // move size
            self.move_size = self.item_size;

            if ( conf.group === 1 ) {
                self.$items = self.$carousel_wrap.children();
            } else {
                self.$items = self.$carousel_wrap.find('.carousel_group_inner');
            }
            self._setSize();
            self.$elem.trigger('carousel.ready');
        },

        _eventify: function() {
            var self = this,
                conf = self.conf,
                indicator = undefined;

            if ( !conf.indicator ) {
                return;
            }
            indicator = self.$indicator.data('indicator');
            self.$elem.bind({
                'Carousel.prev': function() {
                    indicator.active();
                },
                'Carousel.next': function() {
                    indicator.active();
                }
            });
        },

        _groupSetup: function() {
            var self = this,
                i = 0, k = 0,
                l = self.items_length,
                conf = self.conf,
                division = l / conf.group,
                group_length = Math.ceil(division),
                group = new Array(group_length),
                group_size = self.item_size * conf.group;

            for ( ; i < l; i++ ) {
                if ( i !== 0 && i % conf.group === 0 ) {
                    k = k + 1;
                }
                if ( !group[k] ) {
                    group[k] = $('<div class="carousel_group_inner"></div>');
                    group[k]
                        .css('float', self.float)
                        .css(self.prop, group_size);
                }
                group[k].append(self.$items.eq(i));
            }
            for ( i = 0; i < group_length; i++ ) {
                self.$carousel_wrap.append(group[i]);
            }
            self.$items = self.$carousel_wrap.find('.carousel_group_inner');
            self.items_length = self.$items.length;
            self.items_len_hidden = 1;
            self.item_size = self.item_size * conf.group;
        },

        // returns first and last items
        _cloneItem: function() {
            var self = this,
                len = self.items_len_hidden,
                flexnth = function(state, n) {
                    var i, $elems = this, nth = [];
                    for ( i = 0; i < n; i++ ) {
                        if ( i === n ) break;
                        nth.push(
                            $elems.eq(
                                state !== '<' ? $elems.length-(1+i) : i
                            ).clone()
                        );
                    }
                    return $(nth);
                },
                reverse = function() {
                    var elems = [];
                    $.each(this, function(i, $item) {
                        elems.unshift($item.clone());
                    });
                    return $(elems);
                },
                $first = reverse.call(flexnth.call(self.$items, '<', len)),
                $last = reverse.call(flexnth.call(self.$items, '>', len));

            each($first, function() {
                self.$items.eq(self.$items.length-1).after(this);
            });
            each($last, function() {
                self.$items.eq(0).before(this);
            });
        },

        _cloneGroup: function() {
            var self = this,
                len = self.items_len_hidden,
                $first = self.$items.eq(0).clone(),
                $last = self.$items.eq(self.items_length-1).clone();

            self.$items.eq(0).before($last);
            self.$items.eq(self.$items.length-1).after($first);
        },

        // refresh totalWitdh
        _getSize: function(index) {
            var self = this,
                $items = undefined;

            if ( self.conf.group === 1 ) {
                $items = self.$carousel_wrap.children();
            } else {
                $items = self.$elem.find('.carousel_group_inner');
            }

            self.total_size = 0;
            each($items, function(i) {
                var item = this;

                item.data_size = item[self.offset_prop];
                // set total_width
                self.total_size = self.total_size + item.data_size;
            });
        },

        _setSize: function() {
            var self = this;
            self._getSize();
            self.$carousel_wrap
                .css(self.prop, self.total_size);
        },

        _moveState: function() {
            var self = this,
                view_size = self.view_size,
                items_block_size = self.items_length * self.item_size;

            if ( items_block_size <= view_size ) {
                return false;
            } else
            if ( self.current === self.items_length ) {
                return 'max';
            } else
            if ( self.current === 1 ) {
                return 'min';
            } else {
                return true;
            }
        },

        _getNext: function(current) {
            var self = this,
                conf = self.conf;
            if ( current + 1 > self.items_length ) {
                current = 1;
            } else {
                current = current + 1;
            }
            return current;
        },

        _getPrev: function(current) {
            var self = this,
                conf = self.conf;
            if ( current - 1 === 0 ) {
                current = self.items_length;
            } else {
                current = current - 1;
            }
            return current;
        },

        _setCurrent: function(direction) {
            var self = this,
                num = undefined,
                current = self.current;
            // direction: true => next, false => prev
            if ( direction ) {
                num = self._getNext(current);
            } else {
                num = self._getPrev(current);
            }
            self.current = num;
        },

        _toNext: function() {
            var self = this,
                conf = self.conf,
                hidden_len = self.items_len_hidden,
                prop = {};

            if ( !self.conf.loop && self.current === self.items_length ) {
                return;
            }
            self._setCurrent(true);

            self.current_pos = self.current_pos - self.move_size;
            if ( self.current_pos < self.max_point ) {
                self.$carousel_wrap.css(self.position, self.default_pos);
                self.current_pos = self.default_pos - self.move_size;
            }

            prop[self.position] = self.current_pos;

            self.$carousel_wrap
                .animate(prop, {
                    queue: false,
                    easing: conf.easing,
                    duration: conf.duration*1000,
                    complete: function() {
                        self.$elem.trigger('Carousel.next');
                    }
                });
        },

        _toPrev: function() {
            var self = this,
                conf = self.conf,
                hidden_len = self.items_len_hidden,
                total_length = self.items_length + hidden_len,
                items_size = self.item_size * self.items_length,
                prop = {};

            if ( !self.conf.loop && self.current === 1 ) {
                return;
            }
            self._setCurrent(false);

            self.current_pos = self.current_pos + self.move_size;
            if ( self.default_pos < self.current_pos ) {
                self.$carousel_wrap.css(self.position, -self.item_size * total_length);
                self.current_pos = self.default_pos - items_size + self.move_size;
            }

            prop[self.position] = self.current_pos;

            self.$carousel_wrap
                .animate(prop, {
                    queue: false,
                    easing: conf.easing,
                    duration: conf.duration*1000,
                    complete: function() {
                        self.$elem.trigger('Carousel.prev');
                    }
                });

        },

        _getIndicator: function(num) {
            var self = this,
                indicator = Indicator(self, num),
                $indicator = $('<div class="carousel_indicator"></div>');

            $indicator.data('indicator', indicator);
            $indicator.append(indicator.$elems);

            return $indicator;
        },

        _setIndicator: function(num) {
            var self = this,
                indicator = undefined;
            if ( !self.conf.indicator ) {
                return;
            }
            if ( !self.$indicator ) {
                self.$indicator = self._getIndicator(num);
                self.$elem.after(self.$indicator);
            } else {
                indicator = self.$indicator.data('indicator');
                self.$indicator.append(
                    indicator.refresh()
                );
            }
        },

        _callAPI: function(api, arguments) {
            var self = this;
            if(!self.initSuccess) {
                return;
            }
            if ( typeof self[api] !== 'function' ) {
                throw api + ' does not exist of Carousel methods.';
            } else
            if ( /^_/.test(api) && typeof self[api] === 'function' ) {
                throw 'Method begins with an underscore are not exposed.';
            }
            return self[api](arguments);
        },

        indicator: function(num) {
            var self = this;
            return self._getIndicator(num);
        },

        getCurrent: function() {
            var self = this;
            return self.current - 1;
        },

        getMoveState: function() {
            var self = this;
            return self._moveState();
        },

        prev: function() {
            var self = this;
            self._toPrev();

            return self.$elem;
        },

        next: function() {
            var self = this;
            self._toNext();

            return self.$elem;
        },

        reset: function(conf) {
            var self = this;
            self.$elem
                .empty()
                .append(self.$items_original);

            if ( conf ) {
                self.conf = $.extend(self.conf, conf);
            }
            self.$elem.trigger('Carousel.reset');
            return self.$elem;
        },

        refresh: function() {
            var self = this;
            self.total_size = 0;
            self._build();
            self._setIndicator();

            self.$elem.trigger('Carousel.refresh');
            return self.$elem;
        }
    };

    var Indicator = function(carousel, num) {
        this.namespace = 'Indicator';
        if ( this instanceof Indicator ) {
            return this.init(carousel, num);
        }
        return new Indicator(carousel, num);
    };
    Indicator.prototype = {
        init: function(carousel, num) {
            var self = this;
            self.carousel = carousel;
            self._build(num);
        },

        _build: function(num) {
            var self = this,
                carousel = self.carousel,
                current = carousel.getCurrent(),
                i = 0, l = carousel.items_length,
                indi = '',
                active = '';
            for ( ; i < l; i++ ) {
                if ( i === current ) {
                    active = ' class="active"';
                } else {
                    active = '';
                }
                indi = indi + '<span' + active + '>';
                indi = indi + (num ? i : '');
                indi = indi + '</span>';
            }
            self.$elems = $(indi);
        },

        _setActive: function() {
            var self = this,
                carousel = self.carousel;

            self.$elems.removeClass('active');
            self.$elems.eq(carousel.getCurrent()).addClass('active');
        },

        refresh: function() {
            var self = this;
            self.$elems.remove();
            self._build();
            return self.$elems;
        },

        active: function() {
            var self = this;
            self._setActive();
        }
    };

    function each(arr, func) {
        var i = 0,
            l = undefined;

        // arr === number
        if ( /^\d+$/.test(arr) ) {
            arr = new Array(arr);
        }
        l = arr.length;

        for ( ; i < l; i = i + 1 ) {
            func.apply(arr[i], ([i]).concat(arguments));
        }
    }

    // $.fn extend
    jQuery.fn.carousel = function(conf, arguments) {
        var carousel = this.data('carousel');

        if ( carousel ) {
            return carousel._callAPI(conf, arguments);
        } else {
            carousel = Carousel(this, conf);
            this.data('carousel', carousel);
            return this;
        }
    };

}(jQuery));

/*
 * DateInput zhangjingwei V1.0
 * Released under the MIT, BSD, and GPL Licenses.
 */
(function ($, undefined) {

    /* TODO:
     *  剔除键盘功能、选择日期、弹出速度、字符国际化、休息日样式
     *  增加双日历
     */

    $.tools = $.tools || { version: '1.3' };

    var instances = [],
        tool,
        LABELS = {};

    tool = $.tools.dateinput = {

        conf: {
            format: 'yyyy-mm-dd',
            monthRange: [0, 12],
            lang: 'zh-cn',
            offset: [0, 0],
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            min: 0,
            max: undefined,
            trigger: 0,
            toggle: 0,
            editable: 0,
            houseData: null,
            mindate: null,
            editable: true,
            checkin: true,  // The date is checkin or checkout

            css: {
                prefix: 'cal',
                input: 'date',

                // ids
                root: 0,
                head: 0,
                title: 0,
                prev: 0,
                next: 0,
                days: 0,

                body: 0,
                weeks: 0,
                today: 0,
                current: 0,

                // classnames
                week: 0,
                off: "disabled",
                sunday: 0,
                focus: "current",
                disabled: "disabled",
                deleted: "delete",
                trigger: 0
            }
        },

        localize: function (language, labels) {
            $.each(labels, function (key, val) {
                labels[key] = val.split(",");
            });
            LABELS[language] = labels;
        }

    };
    //@配置支持其他语言映射表
    // 多语言支持
    tool.localize("zh-cn", {
        months: '1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
        shortMonths: '1,2,3,4,5,6,7,8,9,10,11,12',
        days: '星期日,星期一,星期二,星期三,星期四,星期五,星期六',
        shortDays: '日,一,二,三,四,五,六'
    });


    //{{{ private functions


    // @return amount of days in certain month
    function dayAm(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    function zeropad(val, len) {
        val = '' + val;
        len = len || 2;
        while (val.length < len) { val = "0" + val; }
        return val;
    }

    // thanks: http://stevenlevithan.com/assets/misc/date.format.js
    var Re = /d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g, tmpTag = $("<a/>");

    function format(date, fmt, lang) {
        var d = date.getDate(),
            D = date.getDay(),
            m = date.getMonth(),
            y = date.getFullYear(),

            flags = {
                d: d,
                dd: zeropad(d),
                ddd: LABELS[lang].shortDays[D],
                dddd: LABELS[lang].days[D],
                m: m + 1,
                mm: zeropad(m + 1),
                mmm: LABELS[lang].shortMonths[m],
                mmmm: LABELS[lang].months[m],
                yy: String(y).slice(2),
                yyyy: y
            };

        var ret = fmt.replace(Re, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });

        // a small trick to handle special characters
        return tmpTag.html(ret).html();

    }

    function integer(val) {
        return parseInt(val, 10);
    }

    function isSameDay(d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() == d2.getMonth() &&
            d1.getDate() == d2.getDate();
    }

    function parseDate(val, date) {
        if (val === undefined) { return; }
        if (val.constructor == Date) { return val; }

        if (typeof val == 'string') {

            // rfc3339?
            var els = val.split("-");
            if (els.length == 3) {
                return new Date(integer(els[0]), integer(els[1]) - 1, integer(els[2]));
            }

            // invalid offset
            if (!(/^-?\d+$/).test(val)) { return; }

            // convert to integer
            val = integer(val);
        }

        date.setDate(date.getDate() + val);
        return date;
    }

    //}}}


    function Dateinput(input, conf) {
        // variables
        var self = this,
            now = parseDate(input.val()) || conf.value || new Date,
            yearNow = now.getFullYear(),
            monthNow = now.getMonth(),
            css = conf.css,
            labels = LABELS[conf.lang],
            root = $("#" + css.root),
            title = root.find("#" + css.title),
            trigger,
            pm, nm,
            currYear, currMonth, currDay,
            value = input.attr("value") || conf.value || input.val(),
            min = input.attr("min") || conf.min,
            max = input.attr("max") || conf.max,
            opened,
            original,
            scrolltimer;
        // zero min is not undefined
        if (min === 0) { min = "0"; }
        // use sane values for value, min & max
        value = parseDate(value) || now;
        //min，max使用来设置日历控件的现实范围
        min = parseDate(min || new Date(yearNow + Math.floor((monthNow + conf.monthRange[0]) / 12), monthNow + conf.monthRange[0] % 12, 1), value);
        max = parseDate(max || new Date(yearNow + Math.floor((monthNow + conf.monthRange[1]) / 12), monthNow + conf.monthRange[1] % 12, 0), value);

        // Replace built-in date input: NOTE: input.attr("type", "text") throws exception by the browser
        if (input.attr("type") == 'date') {// 如果是原生的date控件，则替换为text控件
            var original = input.clone(),
                def = original.wrap("<div/>").parent().html(),
                clone = $(def.replace(/type/i, "type=text data-orig-type"));

            if (conf.value) clone.val(conf.value);   // jquery 1.6.2 val(undefined) will clear val()

            input.replaceWith(clone);
            input = clone;
        }

        input.addClass(css.input);
        //console.log(self);
        var fire = input.add(self); //将构造函数new对象加入到jquery对象中.

        // construct layout
        /*
         * 将原来一次绘制日历的方式分为两个部分
         * 先绘制外围DOM节点
         * 日历部分构件完成后，插入到外围节点中
         */
        if (!root.length) { //如果是第一次使用控件，则先创建外部html结构

            // root
            root = $('<div><a/><a/><div/></div>')
                .hide().css({ position: 'absolute' }).attr("id", css.root).addClass("calendarBox");

            // elements
            root.children() //给初始化的html结构添加class和id属性
                .eq(0).attr("id", css.prev).addClass("calPrev").end()
                .eq(1).attr("id", css.next).addClass("calNext").end()
                .eq(2).attr("id", "calcontent");

            $("body").append(root);
        }


        // layout elements
        var weeks = root.find("#" + css.weeks);  //没发现weeks元素???

        //{{{ pick

        function select(date, conf, e) {
            // current value
            value = date;
            currYear = date.getFullYear();
            currMonth = date.getMonth();
            currDay = date.getDate();

            // beforChange
            e = e || $.Event("api");
            e.type = "beforeChange";

            fire.trigger(e, [date]);
            if (e.isDefaultPrevented()) { return; }

            // formatting
            input.val(format(date, conf.format, conf.lang));

            // change
            e.type = "change";
            fire.trigger(e, [date]);

            // store value into input
            input.data("date", date);

            self.hide(e);
        }


        function selectNoShow(date, conf, e)
        {
            value = date;
            currYear = date.getFullYear();
            currMonth = date.getMonth();
            currDay = date.getDate();

            input.data("date", date);
            input.val("");

            self.hide(e);
        }
        //}}}


        //{{{ onShow

        function onShow(ev) {

            ev.type = "onShow";
            fire.trigger(ev);

            // click outside dateinput
            $(document).bind("click.d", function (e) {
                var el = e.target;

                if (!$(el).parents("#" + css.root).length && $(el).attr("id") != css.root && el != input[0] && (!trigger || el != trigger[0])) {
                    self.hide(e);
                }

            });
        }
        //}}}

        // 获取所在月份的日历HTML
        //noOpen 设置为不打开界面
        function getCalHtml(year, month, day, noOpen,noInput) {
            var date = integer(month) >= -2 ? new Date(integer(year), integer(month), integer(day == undefined || isNaN(day) ? 1 : day)) : year || value;//,
            //noOpen = noOpen ? true : false;

            if (date < min) {
                date = min;
            } else if (date > max) {
                date = max;
            }

            if (typeof year == 'string') { date = parseDate(year); }

            year = date.getFullYear(),
                month = date.getMonth(),
                day = date.getDate();

            // roll year & month
            if (month == -1) {
                month = 11;
                year--;
            } else if (month == 12) {
                month = 0;
                year++;
            }
            if (noInput)
            {
                selectNoShow(date, conf);
                return self;
            }

            if (!opened || noOpen) {
                select(date, conf);
                return self;
            }/* else {
             // formatting
             input.val(format(date, conf.format, conf.lang));
             input.data("date", date);
             value = date;
             }*/

            currMonth = month;
            currYear = year;
            currDay = day;

            var targetMonth = currMonth + 1,
                daysInTargetMonth = dayAm(currYear, targetMonth),
                targetDay = daysInTargetMonth,
                targetYear = currYear;

            // roll next year & next month
            if (targetMonth == -1) {
                targetMonth = 11;
                targetYear--;
            } else if (targetMonth == 12) {
                targetMonth = 0;
                targetYear++;
            }

            var dateNext = new Date(targetYear, targetMonth, targetDay);

            var $calendarRoot = $("<div class='calendar'><h2/><table><thead><tr/></thead><tbody></tbody></table></div>"),
                days = $calendarRoot.children().eq(1).children().eq(0).children();

            // days of the week
            for (var d = 0; d < 7; d++) {
                days.append($("<th/>").text(labels.shortDays[(d + conf.firstDay) % 7]));
            }

            var $calendarNextRoot = $calendarRoot.clone();
            pm.add(nm).removeClass(css.disabled);  //删除向前向后按钮disable状态

            $.each([$calendarRoot, $calendarNextRoot], function (i, $n) {
                var d = i ? dateNext : date,
                    title = $n.children().eq(0),//tbody
                    weeks = $n.children().eq(1).children().eq(1),
                    dd,
                    caldata;

                var year = d.getFullYear(),
                    month = d.getMonth(),
                    day = d.getDate();

                if (conf.houseData) {
                    if ((year - min.getFullYear()) == 0) {
                        caldata = conf.houseData[month - conf.mindate.getMonth()];
                    } else {
                        caldata = conf.houseData[month + 12 - conf.mindate.getMonth()];
                    }
                }

                // variables
                var tmp = new Date(year, month, 1 - conf.firstDay), begin = tmp.getDay(),
                    days = dayAm(year, month);
                //prevDays = dayAm(year, month - 1);

                title.html(year + "年" + labels.shortMonths[month] + '月');

                // !begin === "sunday"
                //for (var j = !begin ? -7 : 0, a, num; j < (!begin ? 35 : 42); j++) {
                for (var j = 0, a, num; j < 42; j++) {
                    if (j % 7 == 0) {
                        var $curRow = $("<tr/>").appendTo(weeks);
                    }
                    $td = $("<td/>");

                    //  前后
                    //num = prevDays - begin + j + 1;
                    //date = new Date(year, month - 1, num);
                    //num = j - days - begin + 1;
                    //date = new Date(year, month + 1, num);
                    if (j < begin || j >= begin + days) {
                        $td.addClass(css.off);
                        num = "";
                        dd = null;
                    } else {
                        num = j - begin + 1;
                        dd = new Date(year, month, num);

                        // 对选中日期\今日进行样式处理
                        if (isSameDay(value, dd)) {
                            $td.attr("id", css.current).addClass(css.focus);
                        } else if (isSameDay(now, dd)) {
                            $td.attr("id", css.today);
                        }
                    }

                    // 日期正确则压入
                    $td.text(num).data("date", dd);

                    // 对不可选日期作出样式处理
                    if (min && dd < min && dd != null) {
                        $td.add(pm).addClass(css.disabled);
                    }
                    if (max && dd > max) {
                        $td.add(nm).addClass(css.disabled);
                    }

                    // 对房态进行处理
                    if (num && caldata) {
                        if (caldata[num - 1]) {
                            var type = caldata[num - 1][0];
                            if (type == 0) {
                                $td.addClass(css.deleted);
                            } else {
                                if (conf.checkin) {
                                    if (type == 2 || type == 3) {
                                        $td.addClass(css.deleted);
                                    }
                                } else {
                                    if (type == 3 || type == 2) {
                                        $td.addClass(css.deleted);
                                    }
                                }
                            }
                        }
                    }
                    $curRow.append($td);
                }
            });

            return $("<div/>").append($calendarRoot).append($calendarNextRoot);
        }

        //给构造函数new出的对象绑定一些方法
        $.extend(self, {


            /**
             *   @public
             *   展开日历
             */
            show: function (e) {
                if (input.attr("readonly") || input.attr("disabled") || opened) { return; }

                // onBeforeShow
                e = e || $.Event();
                e.type = "onBeforeShow";
                fire.trigger(e);
                if (e.isDefaultPrevented()) { return; }

                $.each(instances, function () {
                    this.hide();
                });

                opened = true;

                // prev / next month
                pm = root.find("#" + css.prev).unbind("click").click(function (e) {
                    if (!pm.hasClass(css.disabled)) {
                        self.addMonth(-2);
                    }
                    return false;
                });

                nm = root.find("#" + css.next).unbind("click").click(function (e) {
                    if (!nm.hasClass(css.disabled)) {
                        self.addMonth();
                    }
                    return false;
                });

                // set date
                self.setValue(value);

                // show calendar
                var pos = input.offset();

                // iPad position fix
                if (/iPad/i.test(navigator.userAgent)) {
                    pos.top -= $(window).scrollTop();
                }

                var bodyWidth = $(document.body).outerWidth(true);
                var posLeft = pos.left + conf.offset[1] + root.outerWidth(true);
                if ((posLeft - bodyWidth) > 0) {
                    posLeft = posLeft - (posLeft - bodyWidth)
                }

                root.css({
                    top: pos.top + input.outerHeight({ margins: true }) + conf.offset[0],
                    left: posLeft - root.outerWidth(true)
                });

                root.show();
                onShow(e);

                $(window).bind("resize.dateinput", function () {
                    var pos = input.offset(),
                        bodyWidth = $(document.body).outerWidth(true),
                        posLeft = pos.left + conf.offset[1] + root.outerWidth(true);

                    if ((posLeft - bodyWidth) > 0) {
                        posLeft = posLeft - (posLeft - bodyWidth)
                    }

                    root.css({
                        top: pos.top + input.outerHeight({ margins: true }) + conf.offset[0],
                        left: posLeft - root.outerWidth(true)
                    });
                }).bind("scroll.dateinput", function () {
                    clearTimeout(scrolltimer);
                    scrolltimer = setTimeout(function () {
                        var pos = input.offset(),
                            bodyWidth = $(document.body).outerWidth(true),
                            posLeft = pos.left + conf.offset[1] + root.outerWidth(true);

                        if ((posLeft - bodyWidth) > 0) {
                            posLeft = posLeft - (posLeft - bodyWidth)
                        }

                        root.css({
                            top: pos.top + input.outerHeight({ margins: true }) + conf.offset[0],
                            left: posLeft - root.outerWidth(true)
                        });
                    }, 10);
                });

                return self;
            },

            /**
             *   @public
             *
             *   设置日历输入框的值
             */
            setValue: function (year, month, day, noOpen,noInput) {
                var calHtml = getCalHtml(year, month, day, noOpen,noInput);
                // date picking
                $("#calcontent").html(calHtml).find("td").unbind("click").bind("click", function (e) {
                    var el = $(this);
                    if (!(el.hasClass(css.disabled) || el.hasClass(css.deleted))) {
                        $("#" + css.current).removeAttr("id");
                        el.attr("id", css.current);
                        select(el.data("date"), conf, e);
                        //console.log(el.data("date"));
                    }
                    return false;
                });

                return self;
            },
            // 设置日历的值，并且不打开日历
            setValueNoOpen: function (year, month, day) {
                var date = integer(month) >= -2 ? new Date(integer(year), integer(month), integer(day == undefined || isNaN(day) ? 1 : day)) : year || value;//,
                //noOpen = noOpen ? true : false;

                if (date < min) {
                    date = min;
                } else if (date > max) {
                    date = max;
                }

                input.val(format(date, conf.format, conf.lang));
                input.data("date", date);
                value = date;

                return self;
            },

            //}}}

            setMin: function (val, fit) {
                min = parseDate(val);
                if (fit && value < min) { self.setValue(min); }
                return self;
            },

            setMax: function (val, fit) {
                max = parseDate(val);
                if (fit && value > max) { self.setValue(max); }
                return self;
            },

            today: function () {
                return self.setValue(now);
            },

            addDay: function (amount) {
                return this.setValue(currYear, currMonth, currDay + (amount || 1));
            },

            addMonth: function (amount) {
                var targetMonth = currMonth + (amount || 2),
                    daysInTargetMonth = dayAm(currYear, targetMonth),
                    targetDay = currDay <= daysInTargetMonth ? currDay : daysInTargetMonth;

                return this.setValue(currYear, targetMonth, targetDay);
            },

            addYear: function (amount) {
                return this.setValue(currYear + (amount || 2), currMonth, currDay);
            },

            destroy: function () {
                input.add(document).unbind("click.d");
                root.add(trigger).remove();
                input.removeData("dateinput").removeClass(css.input);
                if (original) { input.replaceWith(original); }
            },

            hide: function (e) {

                if (opened) {

                    // onHide
                    e = $.Event();
                    e.type = "onHide";
                    fire.trigger(e);

                    // cancelled ?
                    if (e.isDefaultPrevented()) { return; }

                    $(document).unbind("click.d").unbind("keydown.d");

                    // do the hide
                    root.hide();
                    opened = false;

                    $(window).unbind("resize.dateinput").unbind("scroll.dateinput");
                }

                return self;
            },

            getConf: function () {
                return conf;
            },

            getInput: function () {
                return input;
            },

            getCalendar: function () {
                return root;
            },

            getValue: function (dateFormat) {
                return dateFormat ? format(value, dateFormat, conf.lang) : value;
            },

            isOpen: function () {
                return opened;
            }

        });

        // callbacks    //这里用于给self绑定事件,在each方法中可以存储遍历的值
        $.each(['onBeforeShow', 'onShow', 'change', 'onHide', 'onEmpty'], function (i, name) {

            // configuration
            if ($.isFunction(conf[name])) {
                $(self).bind(name, conf[name]);
            }

            // API methods
            self[name] = function (fn) {
                if (fn) { $(self).bind(name, fn); }
                return self;
            };
        });

        // show dateinput & assign keyboard shortcuts
        input.bind("focus.d click.d", self.show).keydown(function (e) {

            var key = e.keyCode;

            // open dateinput with navigation keyw
            if (!opened && $(KEYS).index(key) >= 0) {
                self.show(e);
                return e.preventDefault();
            }

            if (conf.editable) {
                if (opened && (key == 8 || key == 46)) {
                    input.val("");
                    e = e || $.Event();
                    e.type = "onEmpty";
                    fire.trigger(e);
                    if (e.isDefaultPrevented()) { return; }
                }
            }

            if (key == 9) {
                self.hide();
            }

            // allow tab
            return key == 9 ? true : e.preventDefault();

        });

        input.attr({
            "autocomplete": "off",
            "spellcheck": "false",
            "dir": "ltr"//,
            //"draggable": "false"
        })

        // initial value
        if (parseDate(input.val())) {
            select(value, conf);
        }

    }
    //@自定义一个:date选择器，用于选择日历控件元素
    $.expr[':'].date = function (el) {
        var type = el.getAttribute("type");
        return type && type == 'date' || !!$(el).data("dateinput");
    };

    $.fn.dateinput = function (conf) {

        // already instantiated
        if (this.data("dateinput")) { return this; }

        // configuration
        conf = $.extend(true, {}, tool.conf, conf);

        // CSS prefix @修改日历控件中的类名
        $.each(conf.css, function (key, val) {
            if (!val && key != 'prefix') {
                conf.css[key] = (conf.css.prefix || '') + (val || key);
            }
        });

        var els;

        this.each(function () {
            var el = new Dateinput($(this), conf);
            instances.push(el);
            var input = el.getInput().data("dateinput", el);
            els = els ? els.add(input) : input;
        });

        return els ? els : this;
    };


})(jQuery);
/*
 * Select zhangjingwei V1.3
 * Released under the MIT, BSD, and GPL Licenses.
 */
(function ($) {

    $.tools = $.tools || {
            version: '1.3'
        };

    var instances = [],
        // down=40, left=37, up=38, right=39
        KEYS = [38, 39, 40, 37],
        tool = $.tools.selectinput = {
            conf: {
                offset: [0, 0], // 弹出菜单偏移量
                trigger: false, // 默认触发
                pinyin: false,  // 是否需要拼音
                autowidth: false, // 是否需要自动定义宽度
                reload: false, //是否每次都重新加载
                doChange:true, //是否执行trigger的change事件,
                onChanging: function(merchantGlobalID) { return true;},
                css: {
                    // ids
                    root: 0,
                    head: 0,

                    // classnames
                    rootclass: 0,
                    headclass: 0,
                    list: 0,
                    off: 0,     // 鼠标移动上的样式
                    focus: 0,   // 获取焦点样式
                    disabled: 0, // 禁止选择样式
                    trigger: 0, // 触发后的样式
                    current: 0, // 节点被选中的样式
                    mouseon: 0  // 鼠标移动触发样式
                }
            }
        }

    function Selects(select, conf, i) {
        var self = this,
            css = conf.css,
            hid = css.head || "selhead_jQuery" + i,
            rid = css.root || "selroot_jQuery" + i,
            root = $("#" + rid),
            head = $("#" + hid),
            selLength = select.find("option").length - 1,
            currentClass = css.current,
            opened,
            selstyle = select.offset(),
            fire = select.add(self);

        var listArray, listArrayIndex, listArrayLength, $rootlis, rootTime;

        // 容灾处理
        if (!root.length && !head.length) {
            var body = $("body"),
                index = getSelectIndex(),
                title = getSelectText();

            root = $('<ul/>').css({ "position": "absolute", "z-index": 100000000, "height": "auto" }).addClass(css.rootclass).attr("id", rid).hide();

            select.find("option").each(function (i, n) {
                /*  var val = n.value, text = n.text, py = (n.getAttribute("name") || n.name) || "";*/
                var val = $(this).attr("value"), text = $(this).text(), py = $(this).attr("name") || "";
                root.append("<li data-value='" + val + "' data-index='" + i + "' data-name='" + py + "' data-text='" + text + "'><strong>" + text + "</strong><!--<span>" + py + "</span>--></li>");
            });

            root.find("li").eq(index).addClass(currentClass);

            head = $("<span/>").html(title).addClass(css.headclass).attr({
                "id": hid,
                "tabIndex": 0
            }).click(function (e) {
                if (!opened) {
                    self.show();
                } else {
                    self.hide();
                }
                return e.preventDefault();
            });
            select.after(head).css({
                "display": "none"
            });

            body.append(root);
        }

        if (conf.trigger) {
            self.show();
        }

        function onShow(ev) {
            $(document).bind("keydown.sel", function (e) {
                if (e.ctrlKey) { return true; }
                var key = e.keyCode;

                clearTimeout(rootTime);

                rootTime = setTimeout(function () {
                    self.reset();

                    // esc or tab key exits
                    if (key == 27 || key == 9) {
                        self.setValue($rootlis.filter("[data-index='" + listArray[listArrayIndex] + "']"), e);
                        return self.hide(e);
                    }

                    if ($(KEYS).index(key) >= 0) {
                        if (!opened) {
                            self.show(e);
                            return e.preventDefault();
                        }

                        if (key == 40 || key == 39) {
                            listArrayIndex = ++listArrayIndex < listArrayLength ? listArrayIndex : 0;
                        } else if (key == 38 || key == 37) {
                            listArrayIndex = --listArrayIndex >= 0 ? listArrayIndex : listArrayLength - 1;
                        }

                        self.setValue($rootlis.filter("[data-index='" + listArray[listArrayIndex] + "']"), e);
                        return e.preventDefault();
                    }

                    // enter
                    if (key == 13) {
                        self.setValue($rootlis.filter("[data-index='" + listArray[listArrayIndex] + "']"), e);
                        self.hide(e);
                        return false;
                    }
                }, 50);

                if ($(KEYS).index(key) >= 0) {
                    return e.preventDefault();
                }
            });

            // resize window
            $(window).bind("resize.sel", function () {

                var headCssNow = getPosition(head);
                if (conf.IsNotSelectState) {
                    root.css({
                        top: headCssNow.bottom,
                        left: headCssNow.left
                    });
                } else {
                    root.css({
                        top: headCssNow.bottom,
                        left: head.offset().left
                    });
                }
            });

            // click outside select
            $(document).bind("click.sel", function (e) {
                var el = e.target;

                if (el != head[0]) {
                    self.hide(e);
                }
            });

            ev.type = "onShow";
            fire.trigger(ev);
        }

        // 选择函数
        function selected(currentElem, e) {
            var currentText = currentElem.attr("data-text");

            root.find("li").removeClass(css.current);
            currentElem.addClass(css.current);
            head.html(currentText);
            setSelected(currentElem.attr("data-index"));

            // change
            e = e || $.Event("api");
            e.type = "change";

            if (conf != undefined && conf.doChange) {
                fire.trigger(e, currentElem)
            }

            // fix bug on validation, when choose a valuse, jqvalidate will validate after click event
            //fire.trigger("click");

            if (e.isDefaultPrevented()) {
                return;
            }
        }

        /*
         * 设置selectindex
         */
        function setSelected(index) {
            select[0].selectedIndex = index;
            $(select[0]).trigger('change');
        }

        /*
         * 获取选中项值
         */
        function getSelectVal() {
            return select.find("option:selected").val();
        }

        /*
         * 获取选中项文本
         */
        function getSelectText() {
            return select.find("option:selected").text();
        }

        /*
         * 获取selectindex
         */
        function getSelectIndex() {
            return select[0].selectedIndex;
        }

        /*
         * 获取节点位置
         */
        function getPosition(elem) {
            var bodyWidth = $(document.body).outerWidth(true);
            var offset = elem.offset(), elemW = elem.innerWidth(), elemH = elem.innerHeight();
            var posLeft = offset.left + conf.offset[1] + root.outerWidth(true);
            if ((posLeft - bodyWidth) > 0) {
                posLeft = posLeft - (posLeft - bodyWidth)
            }
            return {
                left: posLeft - root.outerWidth(true),
                top: elem.offset().top,
                right: offset.left + elemW,
                bottom: offset.top + elemH + conf.offset[0]
            }
        }

        $.extend(self, {
            show: function (e) {
                if (select.attr("disabled") || opened) {
                    return;
                }
                // onBeforeShow
                e = e || $.Event();
                e.type = "onBeforeShow";
                fire.trigger(e);
                if (e.isDefaultPrevented()) {
                    return;
                }

                // 关闭所有已打开select
                $.each(instances, function () {
                    this.hide();
                });
                opened = true;

                root.undelegate("li", "click mouseenter mouseleave").delegate("li", "click", function (e) {
                    var sIndex = parseInt($(this).attr("data-index"), 10);
                    var r = conf.onChanging(select.find("option").eq(sIndex).val());
                    if(r) {
                        self.setValue($(this), e);
                    }
                    self.hide(e);
                    return false;
                }).delegate("li", "mouseenter", function () {
                    $(this).addClass(css.mouseon);
                }).delegate("li", "mouseleave", function () {
                    $(this).removeClass(css.mouseon);
                });

                // show select
                var pos = select.offset();

                // iPad position fix
                if (/iPad/i.test(navigator.userAgent)) {
                    pos.top -= $(window).scrollTop();
                }

                if (conf.offset) {
                    root.css({
                        top: pos.top + conf.offset[0],
                        left: pos.left + conf.offset[1]
                    });
                }
                var headCssNow = getPosition(head);
                root.css({
                    top: headCssNow.bottom,
                    left: headCssNow.left,
                    width: conf.autowidth ? head.innerWidth() : false
                });

                root.show();
                onShow(e);

                return self;
            },
            hide: function (e) {
                if (opened) {
                    // onHide
                    e = $.Event();
                    e.type = "onHide";
                    fire.trigger(e);

                    $(document).unbind("click.sel").unbind("keydown.sel");
                    $(window).unbind("resize.sel");

                    // cancelled ?
                    if (e.isDefaultPrevented()) {
                        return;
                    }

                    // do the hide
                    root.hide();
                    root.find("li").unbind("click");
                    opened = false;
                }

                return self;
            },
            getData: function () {
                var $options = select.find("option"), data = {}, optionname;
                $options.each(function (i, n) {
                    optionname = $(this).attr("name");
                    /*optionname = n.getAttribute("name") || n.name;*/
                    if (optionname) {
                        data[$(this).attr("value")] = optionname + "|||" + $(this).text() + "|||" + i;
                        /*  data[n.value] = optionname + "|||" + (n.firstChild.nodeValue || n.innerText) + "|||" + i;*/
                    }
                });
                return data;
            },

            repaint: function () {
                $('li', root).each(function () {
                    $(this).remove();
                });
                var index = getSelectIndex();
                // alert(index);
                select.find("option").each(function (i, n) {
                    /* var val = n.value, text = n.firstChild.nodeValue || n.innerText, py = (n.getAttribute("name") || n.name) || "";*/
                    var val = $(this).attr("value"), text = $(this).text(), py = $(this).attr("name") || "";
                    root.append("<li data-value='" + val + "' data-index='" + i + "' data-name='" + py + "' data-text='" + text + "'><strong>" + text + "</strong><!--<span>" + py + "</span>--></li>");
                });
                root.find("li").eq(index).addClass(currentClass);

                $head = head;


                $head.text(select.find("option:selected").text());
                head.find("input").remove();
            },

            reset: function () {  // select 改变时重置菜单
                var index = getSelectIndex();   // 原生select中被选中项的索引;

                $rootlis = root.find("li");
                listArray = [];

                $rootlis.each(function () {
                    listArray.push($(this).attr("data-index"));    // 将当先的option对应的索引压入一个数组
                });

                listArrayLength = listArray.length;

                // 计算原生select的索引值在模拟select中索引数组的位置
                $.each(listArray, function (i, n) {
                    if (index == n) {
                        listArrayIndex = i;
                        return false;
                    }
                });

                return self;
            },
            setValue: function (elem, evt,strongFresh) { // lxq 添加参数，强制触发selected
                evt = evt || $.Event("api");

                //判断当前要切换的index是不是没有变化，如果没有变化则不触发selected
                if(strongFresh == true || getSelectIndex().toString(10) != elem.attr("data-index")) {
                    selected(elem, evt);
                }

                return self;
            },
            getValue: function () {
                return getSelectVal();
            },
            setIndex: function (index) {
                setSelected(index);
                return self;
            },
            setHeadText: function (text) {
                head.html(text);
                return self;
            },
            getConf: function () {
                return conf;
            },
            getRoot: function () {
                return root;
            },
            getHead: function () {
                return head;
            },
            getSelect: function () {
                return select;
            },
            getIndex: function () {
                return getSelectIndex();
            },
            isOpen: function () {
                return opened;
            }
        });

        // callbacks
        $.each(['onBeforeShow', 'onShow', 'change', 'onHide'], function (i, name) {

            // configuration
            if ($.isFunction(conf[name])) {
                $(self).bind(name, conf[name]);
            }

            // API methods
            self[name] = function (fn) {
                if (fn) {
                    $(self).bind(name, fn);
                }
                return self;
            };
        });
    }

    $.fn.selectinput = function (conf) {
        // 单例
        if (this.data("selectinput") && conf != undefined && !conf.reload) {
            return this;
        }
        if (conf != undefined && conf.reload) {
            $("#" + conf.css.root).remove();
            $("#" + conf.css.head).remove();
        }

        conf = $.extend(true, {}, tool.conf, conf);

        var els;
        this.each(function (key) {
            var el = new Selects($(this), conf, $.now() + Math.random());
            instances.push(el);
            var sel = el.getSelect().data("selectinput", el);
            els = els ? els.add(sel) : sel;
        });
        return els ? els : this;
    };
})(jQuery);
/*
 * Select Enter zhangjingwei
 * Released under the MIT, BSD, and GPL Licenses.
 * Version: 2.1
 */
(function ($) {
    var t = $.tools.selectinput,
        checkTime,
        normalShowForce,
        inputNochange,
        checkVal;


    // 默认展示数据
    function areaNormalShow(api) {
        var data = api.getSelect().find("option"),
            root = api.getRoot();
        root.empty().removeClass("select-list");
        root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
        $.each(data, function (i, n) {
            /*  var val = n.value, text = n.firstChild.nodeValue || n.innerText, py = (n.getAttribute("name") || n.name) || "";*/
            var val = $(this).attr("value"), text = $(this).text(), py = $(this).attr("name") || "";
            root.append("<li data-value='" + val + "' data-index='" + i + "' data-name='" + py + "' data-text='" + text + "'><strong>" + text + "</strong><span>" + py + "</span></li>");
        });
        root.find("li").eq(0).addClass(api.getConf().css.current);
        api.setIndex(root.find("li").eq(0).attr("data-index"));
    }

    // 初始化原始内容
    function initCheckVal($ipt) {
        checkVal = $ipt.val();
        inputNochange = true;
    }

    // 比对输入内容是否改变
    function checkIpt($ipt) {
        var iptVal = $ipt.val(),
            result = checkVal != iptVal;
        if (normalShowForce && inputNochange) {
            return -1;
        }
        if (result && iptVal == "") {
            checkVal = iptVal;
            result = -1; // 有变化，输入值为空值
        } else if (result) {
            checkVal = iptVal;
            result = 0; // 有变化，输入值不为空
        } else if (!result && checkVal == "") {
            result = 1; // 无变化，默认值为空
        } else {
            result = 2; // 无变化
        }

        return result;
    }

    // 开启文字输入检查
    function openCheckIpt(ipt, api, fn) {
        var $ipt = $(ipt), root = api.getRoot(), conf = api.getConf();
        checkTime = setTimeout(function () {
            var checkResult = checkIpt($ipt);   // 检查输入内容
            if (checkResult == 0) { // 如果检索到输入内容展示检索内容
                // added by liuyu 20131030
                api.getConf().IsNotSelectState = false;
                root.css('left', api.getSelect().parent().offset().left);
                fn.call(this);
            } else if (checkResult == -1) { // 如果没有检索到输入内容则展示默认数据
                // added by liuyu 20131030
                api.getConf().IsNotSelectState = false;
                root.css('left', api.getSelect().parent().offset().left);
                normalShow(api);
            }
            checkResult = undefined;
            openCheckIpt.call(this, ipt, api, fn);
        }, 80);
    }

    // 关闭文字输入检查
    function closeCheckIpt() {
        clearTimeout(checkTime)
    }


    // 获取进入输入框的文字
    function getIptVal($ipt) {
        return $ipt.val();
    }

    // 写入输入框的文字
    function setIptVal($elem, $ipt, innerText) {
        $elem.text(innerText);
        $ipt.remove();
    }

    // 检索输入属于是否在属于源内
    function checkValInData(data, val) {
        var searchResult = [];
        if (val) {
            // 为了允许屏东(垦丁)这类带括号地区能够正确匹配，需要替换掉值内的括号
            var reg = new RegExp("(?=.*" + val.toLowerCase().replace(/\(/g, "\\\(").replace(/\)/g, "\\\)") + ").+");
            $.each(data, function (i, n) {
                if (reg.test(n)) {
                    searchResult.push(i + "|||" + n);
                }
            });
        } else {
            searchResult = null;
        }

        return searchResult;
    }

    // 默认展示数据
    function normalShow(api) {
        var flag = inputNochange;
        inputNochange = false;
        var data = api.getSelect().find("option"),
            root = api.getRoot();
        root.empty().removeClass("select-list");
        root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
        $.each(data, function (i, n) {
            /* var val = n.value, text = n.firstChild.nodeValue || n.innerText, py = (n.getAttribute("name") || n.name) || "";*/
            var val = $(this).attr("value"), text = $(this).text(), py = $(this).attr("name") || "";
            root.append("<li data-value='" + val + "' data-index='" + i + "' data-name='" + py + "' data-text='" + text + "'><strong>" + text + "</strong><span>" + py + "</span></li>");
        });
        if (normalShowForce && flag) {
            var lis = root.find("li").filter(function () { return $(this).data("text") == checkVal })
            if (lis.length > 0) {
                lis.eq(0).addClass(api.getConf().css.current);
                api.setIndex(lis.eq(0).attr("data-index"));
                return;
            }
        }
        root.find("li").eq(0).addClass(api.getConf().css.current);
        api.setIndex(root.find("li").eq(0).attr("data-index"));
    }

    // 初始化展示数据
    function initShow(api) {
        var data = api.getSelect().find("option[data-show]"),
            index = api.getIndex(),
            root = api.getRoot(),
            info;

        try {
            info = cityInfo;
        } catch (e) {
            //   console.log("城市信息不存在，请检查");
            return false;
        }

        root.empty().append('<div><div class="address_tabs"></div><div class="address_content"></div></div>');
        // get cityinfo and group by tabs

        var rootDiv = root.find("div"), $tabElem = rootDiv.eq(1), $tabInfoElem = rootDiv.eq(2);

        if (api.getSelect().attr("fewItems") == "true") {//只有很少的城市的，则区域不用分组了。全部显示即可
            $tabElem.hide();
            data.each(function (i) {
                var $span = $("<span/>").text($(this).text()).attr("data-value", $(this).val());
                $span.unbind().bind("click", function () {
                    api.setHeadText($(this).text()).setIndex(i);
                });
                $tabInfoElem.append($span);
            });
        }
        else {

            // add tab of hot group
            $tabElem.append($("<span/>").text(info.hotgroup.name).attr("data-cityids", info.hotgroup.cityids).addClass("current"));

            // add tab of lettergroups
            $.each(info.lettergroups, function (i, n) {
                var $span = $("<span/>").text(n.name).attr("data-cityids", n.cityids);
                $tabElem.append($span);
            });

            var $tabElemSpan = $tabElem.find("span");
            $tabElemSpan.unbind().bind("click", function () {
                drawContent($(this).attr("data-cityids"), info.citys, $tabInfoElem, api);
                $tabElemSpan.removeClass("current");
                $(this).addClass("current");
                return false;
            })

            drawContent(info.hotgroup.cityids, info.citys, $tabInfoElem, api);
        }
        // added by liuyu 20131030
        api.getConf().IsNotSelectState = true;
    }

    //新页面地址输入，初始化显示
    function initShowHouse(api) {
        var data = api.getSelect().find("option"),
            index = api.getIndex(),
            root = api.getRoot(),
            info;

        try {
            info = cityInfo_tehui;
        } catch (e) {
            //   console.log("城市信息不存在，请检查");
            return false;
        }

        root.empty().append('<div><div class="address_tabs"></div><div class="address_content"></div></div>');
        // get cityinfo and group by tabs

        var rootDiv = root.find("div"), $tabElem = rootDiv.eq(1), $tabInfoElem = rootDiv.eq(2);

        if (api.getSelect().attr("fewItems") == "true") {//只有很少的城市的，则区域不用分组了。全部显示即可
            $tabElem.hide();
            data.each(function (i) {
                var $span = $("<span/>").text($(this).text()).attr("data-value", $(this).val()).attr("data-housenum", $(this).attr("data-housenum"));
                $span.unbind().bind("click", function () {
                    // api.setHeadText($(this).text() + "(" + $(this).attr("data-housenum") + ")").setIndex(i);
                    api.setHeadText($(this).text()).setIndex(i);
                });
                $tabInfoElem.append($span);
            });
        }
        else {

            // add tab of hot group
            $tabElem.append($("<span/>").text(info.hotgroup.name).attr("data-cityids", info.hotgroup.cityids).addClass("current"));

            // add tab of lettergroups
            $.each(info.lettergroups, function (i, n) {
                var $span = $("<span/>").text(n.name).attr("data-cityids", n.cityids);
                $tabElem.append($span);
            });

            var $tabElemSpan = $tabElem.find("span");
            $tabElemSpan.unbind().bind("click", function () {
                drawContentHouse($(this).attr("data-cityids"), info.citys, $tabInfoElem, api);
                $tabElemSpan.removeClass("current");
                $(this).addClass("current");
                return false;
            })

            drawContentHouse(info.hotgroup.cityids, info.citys, $tabInfoElem, api);
        }
        // added by liuyu 20131030
        api.getConf().IsNotSelectState = true;

    }

    // 获取关键词数据
    function getKeyData() {
        var data = {};
        if (typeof cityInfo != "undefined" && cityInfo.citys) {
            $.each(cityInfo.citys, function (i, n) {
                data[i] = n.pinyin + "|||" + n.name + "|||" + n.keyword.join("|||") + "|||" + i; // 注意这里有顺序：拼音，汉字，关键词
            });
        } else {
            data = undefined;
        }

        return data;
    }
    function getKeyDataC(obj) {
        var data = {}, citys = obj.citys;

        if (citys) {
            $.each(citys, function (i, n) {
                data[i] = n.pinyin + "|||" + n.name + "|||" + n.provinceid + "|||" + n.id + "|||" + n.keyword.join("|||") + "|||" + i; // 注意这里有顺序：拼音，汉字，关键词
            });
        } else {
            data = undefined;
        }

        return data;
    }

    function getWorldKeyData(cityInfo) {
        var data = {}, citys = cityInfo.citys;

        if (citys) {
            $.each(citys, function (i, n) {
                data[i] = n.pinyin + "|||" + n.name + "|||" + n.keyword.join("|||") + "|||" + i; // 注意这里有顺序：拼音，汉字，关键词
            });
        } else {
            data = undefined;
        }

        return data;
    }

    // draw tab content
    function drawContent(ids, citys, elem, api) {
        var cityids = typeof ids == "string" ? ids.split(",") : ids;

        elem.empty();
        $.map(cityids, function (i) {
            $.map(cityInfo.citys, function (n) {
                if (n.id == i) {
                    elem.append($("<span/>").text(n.name).attr("data-value", i));
                }
            })
        });

        // bind chose city event
        elem.find("span").unbind().bind("click", function () {
            var self = $(this), v = self.attr("data-value");
            $.each(cityInfo.citys, function (i, n) {
                if (n.id == v) {
                    api.setHeadText(self.text()).setIndex(i);
                }
            })
        });
    }

    //新页面地址输入需求
    function drawContentHouse(ids, citys, elem, api) {
        var cityids = typeof ids == "string" ? ids.split(",") : ids;

        elem.empty();
        $.map(cityids, function (i) {
            $.map(cityInfo_tehui.citys, function (n) {
                if (n.id == i) {
                    elem.append($("<span/>").text(n.name).attr({ "data-value": i, "data-url": n.url }));
                }
            })
        });

        // bind chose city event
        elem.find("span").unbind().bind("click", function () {
            var self = $(this), v = self.attr("data-value");
            $.each(cityInfo.citys, function (i, n) {
                if (n.id == v) {
                    api.setHeadText(self.text()).setIndex(i);
                }
            });
            window.location.href = self.attr("data-url");
        });
    }


    // jQuery plugin implementation
    $.fn.selEnter = function (conf) {
        var api = $(this).data("selectinput");  // 获取selectApi
        var $head = api.getHead(),  // 获取模拟select的 Head DOM
            backHtml,
            $headIpt = $("<input/>").attr("type", "text");

        // configuration
        conf = api.getConf();

        api.onBeforeShow(function () {
            $head.html($headIpt.attr("value", $head.text()));
            $headIpt.css({
                width: $head.width()
            }).addClass("selectInput")[0].select();
            initShow(api);
            api.getRoot().addClass("select-list").show();
        });


        api.onShow(function () {
            initCheckVal($headIpt);
            openCheckIpt($headIpt[0], api, function () {
                var iptval = getIptVal($headIpt);
                var data = getKeyData(), data = !!data ? data : api.getData();
                if (api.getSelect().attr("fewItems") == "true") //只有很少的城市的，则直接在select的数据里面检索
                {
                    data = api.getData();
                }
                var searchResult = checkValInData(data, iptval);
                if (searchResult != null && searchResult.length > 0) {
                    var root = api.getRoot();
                    root.empty().removeClass("select-list");
                    root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
                    $.map(searchResult, function (n) {
                        n = n.split("|||");
                        //root.append("<li data-value='" + n[0] + "' data-index='" + n[4] + "' data-name='" + n[1] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
                        root.append("<li data-value='" + n[0] + "' data-index='" + n[n.length - 1] + "' data-name='" + n[1] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
                    });
                    root.find("li").eq(0).addClass(conf.css.current);
                    api.setIndex(root.find("li").eq(0).attr("data-index"));
                } else {
                    var root = api.getRoot();
                    root.empty().removeClass("select-list");
                    root.append('<div class="address_hotcity"><strong>对不起，没有找到 ' + iptval + '</strong></div>');
                }
            })
        });

        api.change(function (e, elem) {
            var innerText = $(elem).attr("data-text");
            setIptVal($head, $headIpt, innerText);
        });

        api.onHide(function () {
            var selectIpt = api.getHead().find("input"),
                $head = api.getHead(),
                $current = api.getRoot().find("li." + conf.css.current);

            closeCheckIpt();

            if ($current.length) {
                api.setValue($current);
            } else {
                var checkResult = checkIpt(selectIpt);
                if (checkResult == 1) {
                    setIptVal($head, selectIpt, "中文/拼音");
                } else if (checkResult == 2) {
                    if (checkValInData(api.getData(), selectIpt.val()).length) {
                        setIptVal($head, selectIpt, selectIpt.val());
                    } else {
                        setIptVal($head, selectIpt, "中文/拼音");
                    }
                }
            }
        });

        return api;
    };

    // 新页面地址支持房屋数量需求情况插件
    $.fn.selHouseEnter = function (conf) {
        var api = $(this).data("selectinput");  // 获取selectApi
        var $head = api.getHead(),  // 获取模拟select的 Head DOM
            backHtml,
            //  $headIpt = $("<input/>").attr("type", "text");
            // configuration
            conf = api.getConf();

        api.onBeforeShow(function () {
            //   $head.html($headIpt.attr("value", $head.text()));
            //$headIpt.css({
            //    width: $head.width()
            //}).addClass("selectInput")[0].select();
            initShowHouse(api);
            api.getRoot().addClass("select-list").show();
        });

        var $curSel = api.getSelect().find("[sel]");

        if ($curSel.length > 0) {
            // api.setHeadText($curSel.text() + "(" + $curSel.attr("data-housenum") + ")");
            api.setHeadText($curSel.text());
            $head.addClass("title-cur");
        } else {
            api.setHeadText("更多城市");
            $head.removeClass("title-cur");
        }

        api.onShow(function () {
            // initCheckVal($headIpt);
            /*    openCheckIpt($headIpt[0], api, function () {
             var iptval = getIptVal($headIpt);
             var data = getKeyData(), data = !!data ? data : api.getData();
             if (api.getSelect().attr("fewItems") == "true") //只有很少的城市的，则直接在select的数据里面检索
             {
             data = api.getData();
             }
             var searchResult = checkValInData(data, iptval);
             if (searchResult != null && searchResult.length > 0) {
             var root = api.getRoot();
             root.empty().removeClass("select-list");
             root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
             $.map(searchResult, function (n) {
             n = n.split("|||");
             //root.append("<li data-value='" + n[0] + "' data-index='" + n[4] + "' data-name='" + n[1] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
             root.append("<li data-value='" + n[0] + "' data-index='" + n[n.length - 1] + "' data-name='" + n[1] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
             });
             root.find("li").eq(0).addClass(conf.css.current);
             api.setIndex(root.find("li").eq(0).attr("data-index"));
             } else {
             var root = api.getRoot();
             root.empty().removeClass("select-list");
             root.append('<div class="address_hotcity"><strong>对不起，没有找到 ' + iptval + '</strong></div>');
             }
             })*/
        });

        api.change(function (e, elem) {
            var innerText = $(elem).attr("data-text");
            //        setIptVal($head, $headIpt, innerText);
        });

        api.onHide(function () {
            var selectIpt = api.getHead().find("input"),
                $head = api.getHead(),
                $current = api.getSelect().find("[selected]");

            closeCheckIpt();

            if ($current.length) {
                // api.setHeadText($current.text() + "(" + $current.attr("data-housenum") + ")");
                api.setHeadText($current.text());
                // api.setValue($current);
            } else {
                /* var checkResult = checkIpt(selectIpt);
                 if (checkResult == 1) {
                 setIptVal($head, selectIpt, "更多城市");
                 } else if (checkResult == 2) {
                 if (checkValInData(api.getData(), selectIpt.val()).length) {
                 setIptVal($head, selectIpt, selectIpt.val());
                 } else {
                 setIptVal($head, selectIpt, "更多城市");
                 }
                 }*/
            }
        });

        return api;
    };
    // 默认展示数据
    function LandlordEnternormalShow(api) {
        var data = api.getSelect().find("option"),
            root = api.getRoot();
        root.empty().removeClass("select-list");
        root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
        $.each(data, function (i, n) {
            /*var val = n.value, text = n.firstChild.nodeValue || n.innerText, py = (n.getAttribute("name") || n.name) || "", province = (n.getAttribute("data-province"));*/
            var val = $(this).attr("value"), text = $(this).text(), py = $(this).attr("name") || "", province = $(this).attr("data-province");
            root.append("<li data-value='" + val + "' data-index='" + i + "' data-name='" + py + "' data-text='" + text + "' data-province='" + province + "'><strong>" + text + "</strong><span>" + py + "</span></li>");
        });
        root.find("li").eq(0).addClass(api.getConf().css.current);
        api.setIndex(root.find("li").eq(0).attr("data-index"));
    }
    $.fn.selLandlordEnter = function (conf) {
        var api = $(this).data("selectinput");  // 获取selectApi
        var $apiid = $(this).attr("id");
        var $head = api.getHead(),  // 获取模拟select的 Head DOM
            backHtml,
            $headIpt = $("<input/>").attr("type", "text");

        // configuration
        conf = api.getConf();
        normalShowForce = conf.normalShowForce ? true : false;

        api.onBeforeShow(function () {
            $head.html($headIpt.attr("value", $head.text()));
            $headIpt.css({
                width: $head.width()
            }).addClass("selectInput")[0].select();
            //  initShow(api);
            //  api.getRoot().addClass("select-list").show();
            // LandlordEnternormalShow(api);
            // setIptVal($head, $headIpt, "支持自动匹配");



            var iptval = getIptVal($headIpt);
            var data = getKeyDataC(cityInfoc), data = !!data ? data : api.getData();

            var searchResult = checkValInData(data, iptval);
            if (searchResult != null && searchResult.length > 0) {
                var root = api.getRoot();
                root.empty().removeClass("select-list");
                root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
                $.map(searchResult, function (n) {
                    n = n.split("|||");
                    //root.append("<li data-value='" + n[0] + "' data-index='" + n[4] + "' data-name='" + n[1] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
                    root.append("<li data-value='" + n[4] + "' data-index='" + n[n.length - 1] + "' data-name='" + n[1] + "' data-province='" + n[3] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
                });
                root.find("li").eq(0).addClass(conf.css.current);
                //api.setIndex(root.find("li").eq(0).attr("data-index"));
            } else {
                LandlordEnternormalShow(api);
            }


        });
        setIptVal($head, api.getHead().find("input"), api.getSelect().find("option[selected=selected]").text());

        api.onShow(function () {
            initCheckVal($headIpt);
            openCheckIpt($headIpt[0], api, function () {
                var iptval = getIptVal($headIpt);
                var data = getKeyDataC(cityInfoc), data = !!data ? data : api.getData();

                var searchResult = checkValInData(data, iptval);
                if (searchResult != null && searchResult.length > 0) {
                    var root = api.getRoot();
                    root.empty().removeClass("select-list");
                    root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
                    $.map(searchResult, function (n) {
                        n = n.split("|||");
                        //root.append("<li data-value='" + n[0] + "' data-index='" + n[4] + "' data-name='" + n[1] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
                        root.append("<li data-value='" + n[4] + "' data-index='" + n[n.length - 1] + "' data-name='" + n[1] + "' data-province='" + n[3] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
                    });
                    root.find("li").eq(0).addClass(conf.css.current);
                    api.setIndex(root.find("li").eq(0).attr("data-index"));
                } else {
                    var root = api.getRoot();
                    root.empty().removeClass("select-list");
                    root.append('<div class="address_hotcity"><strong>对不起，没有找到 ' + iptval + '</strong></div>');
                }
            })
        });

        api.change(function (e, elem) {
            var innerText = $(elem).attr("data-text");
            var innerValue = $(elem).attr("data-value");
            var innerprovince = $(elem).attr("data-province");
            $("#CityID" + $apiid).val(innerValue);
            $("#CityName" + $apiid).val(innerText);
            $("#ProvinceID" + $apiid).val(innerprovince);

            setIptVal($head, $headIpt, innerText);
        });

        api.onHide(function () {
            var selectIpt = api.getHead().find("input"),
                $head = api.getHead(),
                $current = api.getRoot().find("li." + conf.css.current);

            closeCheckIpt();

            if ($current.length) {
                api.setValue($current);
            } else {
                var checkResult = checkIpt(selectIpt);
                if (checkResult == 1) {
                    setIptVal($head, selectIpt, "中文/拼音");
                } else if (checkResult == 2) {
                    if (checkValInData(api.getData(), selectIpt.val()).length) {
                        setIptVal($head, selectIpt, selectIpt.val());
                    } else {
                        setIptVal($head, selectIpt, "中文/拼音");
                    }
                }
            }
        });

        return api;
    };

    // jQuery plugin implementation
    /*  $.fn.areaSelect = function (conf) {
     var api = $(this).data("selectinput");  // 获取selectApi
     var $head = api.getHead(),  // 获取模拟select的 Head DOM
     backHtml,
     $headIpt = $("<input/>").attr("type", "text");

     // configuration
     conf = api.getConf();

     api.onBeforeShow(function () {
     $head.html($headIpt.attr("value", $head.text()));
     $headIpt.css({
     width: $head.width()
     }).addClass("selectInput")[0].select();
     areaInitShow(api);
     api.getRoot().addClass("select-list").show();
     });


     api.onShow(function () {
     initCheckVal($headIpt);
     openCheckIpt($headIpt[0], api, function() {
     var iptval = getIptVal($headIpt);
     //     console.log(getKeyData());
     var data = getKeyData(), data = !!data ? data : api.getData();

     var searchResult = checkValInData(data, iptval);
     if (searchResult != null && searchResult.length > 0) {
     var root = api.getRoot();
     root.empty().removeClass("select-list");
     root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
     $.map(searchResult, function(n) {
     n = n.split("|||");
     root.append("<li data-value='" + n[0] + "' data-index='" + n[4] + "' data-name='" + n[1] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
     });
     root.find("li").eq(0).addClass(conf.css.current);
     api.setIndex(root.find("li").eq(0).attr("data-index"));
     } else {
     areaNormalShow(api);
     }
     });
     });

     api.change(function (e, elem) {
     var innerText = $(elem).attr("data-text");
     setIptVal($head, $headIpt, innerText);
     });

     api.onHide(function () {
     var selectIpt = api.getHead().find("input"),
     $head = api.getHead(),
     $current = api.getRoot().find("li." + conf.css.current);

     closeCheckIpt();

     if ($current.length) {
     api.setValue($current);
     } else {
     var checkResult = checkIpt(selectIpt);
     if (checkResult == 1) {
     setIptVal($head, selectIpt, "中文/拼音");
     } else if (checkResult == 2) {
     if (checkValInData(api.getData(), selectIpt.val()).length) {
     setIptVal($head, selectIpt, selectIpt.val());
     } else {
     setIptVal($head, selectIpt, "中文/拼音");
     }
     }
     }
     });
     };*/

    $.fn.worldAreaSelect = function (conf, cityInfo) {
        var api = $(this).data("selectinput");  // 获取selectApi
        var $head = api.getHead(),  // 获取模拟select的 Head DOM
            backHtml,
            $headIpt = $("<input/>").attr("type", "text");

        // configuration
        conf = api.getConf();

        api.onBeforeShow(function () {
            $head.html($headIpt.attr("value", $head.text()));
            $headIpt.css({
                width: $head.width()
            }).addClass("selectInput")[0].select();
            areaInitShow(api, cityInfo);
            api.getRoot().addClass("select-list").show();
        });


        api.onShow(function () {
            initCheckVal($headIpt);
            openCheckIpt($headIpt[0], api, function () {
                var iptval = escape(getIptVal($headIpt));
                var data = getWorldKeyData(cityInfo), data = !!data ? data : api.getData();
                var root = api.getRoot();
                var searchResult = checkValInData(data, iptval);
                if (searchResult != null && searchResult.length > 0) {
                    root.empty().removeClass("select-list");
                    root.append('<div class="address_hotcity"><strong>请选择您要入住的城市</strong></div>');
                    $.map(searchResult, function (n) {
                        n = n.split("|||");
                        root.append("<li data-value='" + n[0] + "' data-index='" + n[4] + "' data-name='" + n[1] + "' data-text=" + n[2] + "><strong>" + n[2] + "</strong><span>" + n[1] + "</span></li>");
                    });
                    root.find("li").eq(0).addClass(conf.css.current);
                    api.setIndex(root.find("li").eq(0).attr("data-index"));
                } else {
                    root.empty().removeClass("select-list");
                    root.append('<div class="address_hotcity"><strong class="error-info">对不起，找不到:' + iptval + '</strong></div>');
                    // areaNormalShow(api);
                }
            });
        });

        api.change(function (e, elem) {
            var innerText = $(elem).attr("data-text");
            setIptVal($head, $headIpt, innerText);
        });

        api.onHide(function () {
            var selectIpt = api.getHead().find("input"),
                $head = api.getHead(),
                $current = api.getRoot().find("li." + conf.css.current);

            closeCheckIpt();

            if ($current.length) {
                api.setValue($current);
            } else {
                var checkResult = checkIpt(selectIpt);
                if (checkResult == 1) {
                    setIptVal($head, selectIpt, "中文/拼音");
                } else if (checkResult == 2) {
                    if (checkValInData(api.getData(), selectIpt.val()).length) {
                        setIptVal($head, selectIpt, selectIpt.val());
                    } else {
                        setIptVal($head, selectIpt, "中文/拼音");
                    }
                }
            }
        });
        return this;
    };

    // 初始化展示数据
    /* function areaInitShow(api,cityInfo) {
     var data = api.getSelect().find("option[data-show]"),
     index = api.getIndex(),
     root = api.getRoot(),
     info;

     try {
     info = cityInfo;
     } catch (e) {
     console.log("城市信息不存在，请检查");
     return false;
     }

     root.empty().append('<div id="m-area-drop" class="m-area-drop"></div>');
     var rootDiv = root.find("div");


     // add area
     $.each(info.areagroups, function (i, n) {
     var $div = $("<div class='area-item'><h2 class='area-name'>" + n.name + "</h2><div class='area-list'></div></div>");
     rootDiv.append($div);

     if (i % 2 == 1) {
     $div.addClass("current");
     }

     if (i + 1 == info.areagroups.length) {
     $div.css("border", "0px");
     }

     $div.hover(function () {
     //$div.addClass("current");
     }, function () {
     //$div.removeClass("current");
     })

     areaDrawContent(n.cityids, info.citys, $div.find("div.area-list"), api);
     })
     }*/

    function areaInitShow(api, cityInfo) {
        var data = api.getSelect().find("option[data-show]"),
            index = api.getIndex(),
            root = api.getRoot(),
            info;
        // draw tab content
        function drawContent(ids, citys, elem, api) {
            var cityids = typeof ids == "string" ? ids.split(",") : ids;

            elem.empty();
            $.map(cityids, function (i) {
                $.map(cityInfo.citys, function (n) {
                    if (n.id == i) {
                        elem.append($("<span/>").text(n.name).attr("data-value", i));
                    }
                })
            });

            // bind chose city event
            elem.find("span").unbind().bind("click", function () {
                var self = $(this), v = self.attr("data-value");
                $.each(cityInfo.citys, function (i, n) {
                    if (n.id == v) {
                        api.setHeadText(self.text()).setIndex(i);
                    }
                })
            });
        }
        try {
            info = cityInfo;
        } catch (e) {
            //   console.log("城市信息不存在，请检查");
            return false;
        }

        root.empty().append('<div><div class="address_tabs"></div><div class="address_content"></div></div>');
        // get cityinfo and group by tabs

        var rootDiv = root.find("div"), $tabElem = rootDiv.eq(1), $tabInfoElem = rootDiv.eq(2);

        // add tab of lettergroups
        $.each(info.areagroups, function (i, n) {
            var $span = $("<span/>").text(n.name).attr("data-cityids", n.cityids);
            $tabElem.append($span);
        });

        var $tabElemSpan = $tabElem.find("span");
        $tabElemSpan.first().addClass("current");
        $tabElemSpan.unbind().bind("click", function () {
            drawContent($(this).attr("data-cityids"), info.citys, $tabInfoElem, api);
            $tabElemSpan.removeClass("current");
            $(this).addClass("current");
            return false;
        });

        drawContent(info.areagroups[0].cityids, info.citys, $tabInfoElem, api);

        // added by liuyu 20131030
        api.getConf().IsNotSelectState = true;
    }

    // draw tab content
    function areaDrawContent(ids, citys, elem, api) {

        var cityids = typeof ids == "string" ? ids.split(",") : ids;

        elem.empty();
        $.map(cityids, function (i) {
            $.map(citys, function (n) {
                if (n.id == i) {
                    elem.append($("<span/>").text(n.name).attr("data-value", i));
                }
            })
        });

        // bind chose city event
        elem.find("span").unbind().bind("click", function () {
            var self = $(this), v = self.attr("data-value");
            $.each(citys, function (i, n) {
                if (n.id == v) {
                    api.setHeadText(self.text()).setIndex(i);
                }
            })
        });
    }



})(jQuery);
var TrimPath;
!function () {
    null == TrimPath && (TrimPath = new Object);
    null == TrimPath.evalEx && (TrimPath.evalEx = function (src) { return eval(src) });
    var UNDEFINED;
    null == Array.prototype.pop && (Array.prototype.pop = function () { return 0 === this.length ? UNDEFINED : this[--this.length] });
    null == Array.prototype.push && (Array.prototype.push = function () { for (var a = 0; a < arguments.length; ++a) this[this.length] = arguments[a]; return this.length });
    TrimPath.parseTemplate = function (a, b, c) {
        null == c && (c = TrimPath.parseTemplate_etc);
        var d = parse(a, b, c);
        var e = TrimPath.evalEx(d, b, 1);
        return null != e ? new c.Template(b, a, d, e, c) : null
    };

    try {
        String.prototype.process = function (a, b) {
            var c = TrimPath.parseTemplate(this, null);
            return null != c ? c.process(a, b) : this
        }
    }
    catch (e) { }

    TrimPath.parseTemplate_etc = {};
    TrimPath.parseTemplate_etc.statementTag = "forelse|for|if|elseif|else|var|macro";
    TrimPath.parseTemplate_etc.statementDef = {
        "if": { delta: 1, prefix: "if (", suffix: ") {", paramMin: 1 },
        "else": { delta: 0, prefix: "} else {" },
        elseif: { delta: 0, prefix: "} else if (", suffix: ") {", paramDefault: "true" },
        "/if": { delta: -1, prefix: "}" },
        "for": {
            delta: 1,
            paramMin: 3,
            prefixFunc: function (a, b, c, d) {
                if ("in" != a[2])
                    throw new d.ParseError(c, b.line, "bad for loop statement: " + a.join(" "));
                var e = a[1];
                var f = "__LIST__" + e;
                return [
                    "var ",
                    f,
                    " = ",
                    a[3],
                    ";",
                    "var __LENGTH_STACK__;",
                    "if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();",
                    "__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;",
                    "if ((",
                    f,
                    ") != null) { ", "var ", e, "_ct = 0;", "for (var ", e, "_index in ", f, ") { ", e, "_ct++;", "if (typeof(", f, "[", e, "_index]) == 'function') {continue;}", "__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;", "var ", e, " = ", f, "[", e, "_index];"].join("")
            }
        },
        forelse: {
            delta: 0,
            prefix: "} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",
            suffix: ") {",
            paramDefault: "true"
        },
        "/for": {
            delta: -1,
            prefix: "} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"
        },
        "var": {
            delta: 0,
            prefix: "var ",
            suffix: ";"
        },
        macro: {
            delta: 1,
            prefixFunc: function (a) {
                var e = a[1].split("(")[0];
                return [
                    "var ",
                    e,
                    " = function",
                    a.slice(1).join(" ").substring(e.length),
                    "{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "
                ].join("")
            }
        },
        "/macro": {
            delta: -1,
            prefix: " return _OUT_arr.join(''); };"
        }
    };
    TrimPath.parseTemplate_etc.modifierDef = {
        eat: function () { return "" },
        escape: function (a) { return String(a).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">") },
        capitalize: function (a) { return String(a).toUpperCase() },
        "default": function (a, b) { return null != a ? a : b }
    };

    TrimPath.parseTemplate_etc.modifierDef.h = TrimPath.parseTemplate_etc.modifierDef.escape;
    TrimPath.parseTemplate_etc.Template = function (a, b, c, d, e) {
        this.process = function (a, b) {
            null == a && (a = {});
            null == a._MODIFIERS && (a._MODIFIERS = {});
            null == a.defined && (a.defined = function (b) { return void 0 != a[b] });
            for (var c in e.modifierDef)
                null == a._MODIFIERS[c] && (a._MODIFIERS[c] = e.modifierDef[c]);
            null == b && (b = {});
            var f = [];
            var g = {
                write: function (a) { f.push(a) }
            };

            try { d(g, a, b) } catch (h) {
                if (1 == b.throwExceptions) throw h;
                var i = new String(f.join("") + "[ERROR: " + h.toString() + (h.message ? "; " + h.message : "") + "]");
                return i.exception = h, i
            }

            return f.join("")
        };
        this.name = a;
        this.source = b;
        this.sourceFunc = c;
        this.toString = function () { return "TrimPath.Template [" + a + "]" }
    };

    TrimPath.parseTemplate_etc.ParseError = function (a, b, c) {
        this.name = a;
        this.line = b;
        this.message = c
    };

    TrimPath.parseTemplate_etc.ParseError.prototype.toString = function () {
        return "TrimPath template ParseError in " + this.name + ": line " + this.line + ", " + this.message
    };

    var parse = function (a, b, c) {
        a = cleanWhiteSpace(a);
        var d = ["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];
        var e = { stack: [], line: 1 };
        var f = -1;
        for (; f + 1 < a.length;) {
            var g = f;
            for (g = a.indexOf("{", g + 1) ; g >= 0;) {
                var h = a.indexOf("}", g + 1);
                var i = a.substring(g, h);
                var j = i.match(/^\{(cdata|minify|eval)/);
                if (j) {
                    var k = j[1];
                    var l = g + k.length + 1;
                    var m = a.indexOf("}", l);
                    if (m >= 0) {
                        var n;
                        n = 0 >= m - l ? "{/" + k + "}" : a.substring(l + 1, m);
                        var o = a.indexOf(n, m + 1);
                        if (o >= 0) {
                            emitSectionText(a.substring(f + 1, g), d);
                            var p = a.substring(m + 1, o);
                            "cdata" == k ? emitText(p, d) : "minify" == k ? emitText(scrubWhiteSpace(p), d) : "eval" == k && null != p && p.length > 0 && d.push("_OUT.write( (function() { " + p + " })() );");
                            g = f = o + n.length - 1
                        }
                    }
                } else if ("$" != a.charAt(g - 1) && "\\" != a.charAt(g - 1)) {
                    var q = "/" == a.charAt(g + 1) ? 2 : 1;
                    if (0 == a.substring(g + q, g + 10 + q).search(TrimPath.parseTemplate_etc.statementTag))
                        break
                }

                g = a.indexOf("{", g + 1)
            }

            if (0 > g)
                break;

            var h = a.indexOf("}", g + 1);

            if (0 > h)
                break;
            emitSectionText(a.substring(f + 1, g), d);
            emitStatement(a.substring(g, h + 1), e, d, b, c);
            f = h
        }

        if (emitSectionText(a.substring(f + 1), d), 0 != e.stack.length)
            throw new c.ParseError(b, e.line, "unclosed, unmatched statement(s): " + e.stack.join(","));

        return d.push("}}; TrimPath_Template_TEMP");

        d.join("")
    };

    var emitStatement = function (a, b, c, d, e) {
        var f = a.slice(1, -1).split(" ");
        var g = e.statementDef[f[0]];
        if (null == g)
            return void emitSectionText(a, c);
        if (g.delta < 0) {
            if (b.stack.length <= 0)
                throw new e.ParseError(d, b.line, "close tag does not match any previous statement: " + a);
            b.stack.pop()
        }

        if (g.delta > 0 && b.stack.push(a), null != g.paramMin && g.paramMin >= f.length)
            throw new e.ParseError(d, b.line, "statement needs more parameters: " + a);

        if (c.push(null != g.prefixFunc ? g.prefixFunc(f, b, d, e) : g.prefix), null != g.suffix) {
            if (f.length <= 1)
                null != g.paramDefault && c.push(g.paramDefault);
            else for (var h = 1; h < f.length; h++) {
                h > 1 && c.push(" ");
                c.push(f[h]);
            }

            c.push(g.suffix)
        }
    };

    var emitSectionText = function (a, b) {
        if (!(a.length <= 0)) {
            var c = 0;
            var d = a.length - 1;
            for (; c < a.length && "\n" == a.charAt(c) ;)
                c++;
            for (; d >= 0 && (" " == a.charAt(d) || "	" == a.charAt(d)) ;)
                d--;
            if (c > d && (d = c), c > 0) {
                b.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
                var e = a.substring(0, c).replace("\n", "\\n");
                "\n" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), b.push(e), b.push('");')
            }

            var f = a.substring(c, d + 1).split("\n");
            for (var g = 0; g < f.length; g++)
                emitSectionTextLine(f[g], b), g < f.length - 1 && b.push('_OUT.write("\\n");\n');

            if (d + 1 < a.length) {
                b.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
                var e = a.substring(d + 1).replace("\n", "\\n");
                "\n" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1));
                b.push(e);
                b.push('");');
            }
        }
    };

    var emitSectionTextLine = function (a, b) {
        var c = "}";
        var d = -1;
        for (; d + c.length < a.length;) {
            var e = "${", f = "}";
            var g = a.indexOf(e, d + c.length);
            if (0 > g)
                break;
            "%" == a.charAt(g + 2) && (e = "${%", f = "%}");
            var h = a.indexOf(f, g + e.length);
            if (0 > h)
                break;
            emitText(a.substring(d + c.length, g), b);
            var i = a.substring(g + e.length, h).replace(/\|\|/g, "#@@#").split("|");
            for (var j in i)
                i[j].replace && (i[j] = i[j].replace(/#@@#/g, "||"));
            b.push("_OUT.write(");
            emitExpression(i, i.length - 1, b);
            b.push(");");
            d = h, c = f
        }

        emitText(a.substring(d + c.length), b)
    };

    var emitText = function (a, b) {
        if (!(null == a || a.length <= 0)) {
            a = a.replace(/\\/g, "\\\\");
            a = a.replace(/\n/g, "\\n");
            a = a.replace(/"/g, '\\"');
            b.push('_OUT.write("');
            b.push(a), b.push('");');
        }
    };

    var emitExpression = function (a, b, c) { var d = a[b]; if (0 >= b) return void c.push(d); var e = d.split(":"); c.push('_MODIFIERS["'), c.push(e[0]), c.push('"]('), emitExpression(a, b - 1, c), e.length > 1 && (c.push(","), c.push(e[1])), c.push(")") }; var cleanWhiteSpace = function (a) { return a = a.replace(/\t/g, "    "), a = a.replace(/\r\n/g, "\n"), a = a.replace(/\r/g, "\n"), a = a.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1") }; var scrubWhiteSpace = function (a) { return a = a.replace(/^\s+/g, ""), a = a.replace(/\s+$/g, ""), a = a.replace(/\s+/g, " "), a = a.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1") }; TrimPath.parseDOMTemplate = function (a, b, c) { null == b && (b = document); var d = b.getElementById(a); var e = d.value; return null == e && (e = d.innerHTML), e = e.replace(/</g, "<").replace(/>/g, ">"), TrimPath.parseTemplate(e, a, c) }, TrimPath.processDOMTemplate = function (a, b, c, d, e) { return TrimPath.parseDOMTemplate(a, d, e).process(b, c) }
}();


/*
 * switchable
 * TODO:isFunction　放在闭包中，暂无实现，以后处理
 *
 */

(function ($, b) {
    $.tools = $.tools || { version: '1.3' };
    var instances = [], tool;

    tool = $.tools.switchable = {
        options: {
            hasCssLink: !1,
            baseVersion: "1.0.0",
            cssLinkVersion: "1.0.0",
            type: "tab",
            direction: "left",
            hasSetup: !1,
            navClass: "ui-switchable-trigger",
            navItem: "ui-switchable-item",
            navSelectedClass: "ui-switchable-selected",
            navDisabledClass: "disabled",
            navIframe: "data-iframe",
            contentClass: "ui-switchable-panel-main",
            mainClass: "ui-switchable-panel",
            mainSelectedClass: "ui-switchable-panel-selected",
            bodyClass: "ui-switchable-panel-body",
            hasPage: false,
            autoLock: false,
            prevClass: "ui-switchable-prev",
            nextClass: "ui-switchable-next",
            pagCancelClass: "ui-switchable-page-cancel",
            hasArrow: false,
            arrowClass: "ui-switchable-arrow",
            event: "mouseover",
            speed: 400,
            callback: null,
            onNext: null,
            onPrev: null,
            delay: 150,
            defaultPanel: 0,
            autoPlay: !1,
            playDirection: "next",
            stayTime: 5000,
            mouseenterStopPlay: !0,
            includeMargin: !1,
            width: 0,
            height: 0,
            seamlessLoop: !1,
            hasHash: !1,
            imgscrollClass: "ui-switchable-imgscroll-img",
            imgscrollItemClass: "ui-switchable-imgscroll-item",
            imgscrollLazyload: !1,
            step: 1,
            visible: 1,
            easing: "swing",
            hasLoop: !1
        }
    };


    var isFunction = function () { return true; };


    function Switchable(el, conf) {

        var self = this;
        var options = conf;
        self.options = conf;
        self.el = el;
        var hasLoop = true;


        $.extend(self, {
            addClass: function () { },
            bind: function () {
                // TODO:REMOVE　hack
                $.browser.isMobile = function () { return false; };

                var b = this; var c = b.options; b.nav.each(function (d) { var e = $(this); e.bind(c.event, function () { clearInterval(b.autoInterval), c.navDisabledClass && e.hasClass(c.navDisabledClass) || (0 === c.delay ? (b.current = d, b.switchTo(d, c.seamlessLoop ? d + b.cloneCount : d)) : (clearTimeout(b.eventTimer), b.eventTimer = setTimeout(function () { b.current = d, b.switchTo(d, c.seamlessLoop ? d + b.cloneCount : d) }, c.delay))) }).bind("mouseleave", function () { clearTimeout(b.eventTimer), c.mouseenterStopPlay || b.autoPlay() }), "click" == c.event && e.bind("mouseover", function () { clearTimeout(b.eventTimer), clearInterval(b.autoInterval) }) }), c.mouseenterStopPlay && b.el.each(function () { $(this).bind("mouseenter", function () { clearInterval(b.autoInterval) }).bind("mouseleave", function () { b.autoPlay() }) }), !$.browser.isMobile() || "focus" != c.type && "slider" != c.type || (b.main.swipeLeft(function () { b.next() }), b.main.swipeRight(function () { b.prev() }))
            },
            /* 根据URL中的hash显示特定屏 */
            getHash: function (b) {
                var self = this;
                var hash = window.location.hash;
                if ("" != hash) {
                    var nav = self.nav;
                    var f = null;
                    a.each(nav, function (index) {
                        if (a(this).attr("data-hash") == hash) {
                            f = index;
                        }
                    });
                    if (null != f) {
                        b = f;
                        var g = self.nav.eq(f).offset().top;
                        var h = a.browser.webkit ? 50 : 0;
                        setTimeout(function () { a(window).scrollTop(g) }, h)
                    }
                }
                return b
            },
            setHash: function (a) {
                var b = this; if (b.options.hasHash) { if (b.isInit && !window.location.hash) return; var c = b.nav.eq(a).attr("data-hash"); c = c.replace(/#/, ""), window.location.hash = c }
            },
            switchTo: function (navIndex, mainIndex) {
                var self = this;
                if ("undefined" == typeof mainIndex) {
                    var b = navIndex;
                }
                self.switchNavTo(navIndex);
                self.switchMainTo(mainIndex)
            },
            switchNavTo: function (navIndex) {
                var self = this;
                var options = self.options;
                self.nav.removeClass(options.navSelectedClass);
                self.nav.eq(navIndex).addClass(options.navSelectedClass);
                self.setHash(navIndex);

            },
            switchMainTo: function (b) {
                var c = this; var d = c.options; if (c.iframe(b), "imgscroll" != d.type && (c.main.removeClass(d.mainSelectedClass), c.main.eq(b).addClass(d.mainSelectedClass)), c.isInit || c.last != b) { if (c.switchType(b), null != d.callback) { var e = b; var f = !1; var g = this.main.eq(e); e + 1 == c.pageCount && (f = !0), d.seamlessLoop && this.main.each(function () { return e == $(this).data("switchable-clone-from") ? (g = g.add($(this)), !1) : void 0 }), d.callback.call(c, e, f, g) } c.last = b }
            },
            switchType: function (a) {
                var b = this; var c = b.options; switch (c.type) { case "tab": b.tab(a); break; case "focus": b.focus(a); break; case "slider": b.slider(a); break; case "carousel": b.carousel(a); break; case "imgscroll": b.imgscroll(a) }
            },
            switchDefault: function (a) { var b = this; b.main.hide(), b.main.eq(a).show() },
            tab: function (a) {
                var b = this; var c = b.options; if (c.hasSetup || b.switchDefault(a), c.hasArrow) { var d = c.arrowClass; var e = b.nav.eq(a).outerWidth(!0) * a; if (b.isInit) { var f = b.nav.parent(); f.prepend('<div class="' + d + '"><b></b></div>').css({ position: "relative" }), b.el.find("." + d).css({ left: e }), b.isPlayLock = !1 } else setTimeout(function () { b.isPlayLock = !1 }, c.speed), b.el.find("." + d).stop(!0).animate({ left: e }, c.speed, c.easing) } b.isInit = !1
            },
            focus: function (b) {
                var c = this; var d = c.options; c.isInit ? (c.main.parent().css({ position: "relative" }), c.main.css({ position: "absolute", zIndex: 0, opacity: 0 }).show(), c.main.eq(b).css({ zIndex: 1, opacity: 1 }), c.isPlayLock = !1) : (setTimeout(function () { c.isPlayLock = !1 }, d.speed), c.main.eq(c.last).css({ zIndex: 0 }).stop(!0).animate({ opacity: 1 }, d.speed, d.easing, function () { a(this).css("opacity", 0) })), c.main.eq(b).css({ zIndex: 1 }).stop(!0).animate({ opacity: 1 }, d.speed, d.easing), c.isInit = !1
            },
            slider: function (a) {
                var self = this;
                var options = self.options;
                var d = self.content;
                var e = self.mainHeight;
                var f = e * a;
                var g = self.mainWidth;
                var h = g * a;
                self.isInit ?
                    ("left" == options.direction ? (self.main.css({ "float": "left" }), d.css(options.seamlessLoop ? { width: g * (self.size + 2 * self.cloneCount) } : { width: g * self.size }), d.css({ left: -h })) : "top" == options.direction && d.css({ top: -f }), d.parent().css({ position: "relative" }), d.css({ position: "absolute" }), self.switchDefault(a), self.isInit = !1, self.isPlayLock = !1) :
                    (setTimeout(function () { self.isPlayLock = !1 }, options.speed), "left" == options.direction ? d.stop(!0).animate({ left: -h }, options.speed, options.easing) : "top" == options.direction && d.stop(!0).animate({ top: -f }, options.speed, options.easing));
                self.main.show()
            },
            /* 旋转木马 */
            carousel: function (a) {
                var b = this;
                b.slider(a)
            },
            imgscroll: function (b) {
                var c = this;
                var d = c.options;
                var e = c.mainWidth;
                var f = c.el.find("." + d.imgscrollClass);
                if (c.isInit) {
                    c.el.find("." + d.bodyClass).css({ position: "relative", overflow: "hidden", width: e * d.visible });
                    c.content.css({ position: "absolute", width: e * c.size });
                    c.main.css({ "float": "left" });
                    var g = d.mainSelectedClass;
                    if (c.main.eq(0).addClass(g), !f.attr("src")) {
                        var h = c.el.find("." + d.imgscrollItemClass).eq(0).attr("data-url");
                        f.attr("src", h)
                    }
                    if (d.imgscrollLazyload)
                        for (var b = c.current; b < d.visible + 1; b++) {
                            var i = c.main.eq(b).find("." + d.imgscrollItemClass);
                            var h = i.attr("data-src");
                            i.attr("src", h)
                        }
                    c.main.bind(d.event, function () { var b = a(this); var e = b.find("." + d.imgscrollItemClass).attr("data-url"); c.main.removeClass(g), b.addClass(g), f.attr("src", e) }), c.isInit = !1, c.isPlayLock = !1
                } else { setTimeout(function () { c.isPlayLock = !1 }, d.speed); var j = c.current * e; if (d.imgscrollLazyload) { var i = c.main.eq(d.visible + c.current).find("." + d.imgscrollItemClass); var h = i.attr("data-src"); i.attr("src", h) } c.content.stop(!0).animate({ left: -j }, d.speed) }
            },
            /* 注册翻页事件 */
            page: function () {
                var self = this;
                var options = self.options;
                var nextBtn = self.el.find("." + options.nextClass);
                var prevBtn = self.el.find("." + options.prevClass);
                prevBtn.bind("click", function (event) {
                    if (!self.isPlayLock || !self.content || self.content.length <= 0) {
                        if (!options.autoLock || self.current != 0) {
                            self.isPlayLock = !0;
                            self.prev();
                            event.stopPropagation();
                        }
                    }
                });
                nextBtn.bind("click", function (event) {
                    if (!self.isPlayLock || !self.content || self.content.length <= 0) {
                        if (options.autoLock && self.current >= self.size - options.visible) {

                        } else {
                            self.isPlayLock = !0;
                            self.next();
                            event.stopPropagation();
                        }
                    }
                })
            },

            /* 向后切换 */
            next: function () {
                var self = this;
                var options = self.options;
                /* 最新初始化当前页码为=原页码+步进 */
                self.current = self.current + options.step;
                self.offsetIndex();
                var d = 0;
                if (!options.seamlessLoop && options.hasLoop) {
                    d = -options.visible + options.step;
                }

                self.current >= self.size + d && (self.current = 0);
                var e = options.visible > options.step ?
                    options.visible :
                    options.step;
                !options.seamlessLoop && self.current + e > self.size && (self.current = self.size > e ? self.size - e : 0);
                var f = options.seamlessLoop ?
                self.current + self.cloneCount :
                    self.current;


                self.switchTo(self.current, f);

                self.updatePageButState();
                if (isFunction(options.onNext)) {
                    options.onNext.call(self);
                }
            },
            /* 向前 */
            prev: function () {
                var b = this;
                var c = b.options;
                c.seamlessLoop ? b.offsetIndex(!0) : (b.current -= c.step, b.current < 0 && (b.current = b.current > -c.step ? 0 : b.size - c.step));
                var d = c.seamlessLoop ? b.current + b.cloneCount : b.current;
                b.switchTo(b.current, d);
                b.updatePageButState();
                if (isFunction(c.onPrev)) {
                    c.onPrev.call(b);
                }
            },
            /* 更新前后按扭状态 */
            updatePageButState: function () {
                var self = this;
                var options = self.options;
                if (options.hasPage && options.autoLock) {
                    var nextBtn = self.el.find("." + options.nextClass);
                    var prevBtn = self.el.find("." + options.prevClass);
                    var cancelClass = options.pagCancelClass;
                    /* 到尾时隐藏下一步 */
                    self.current >= self.size - Math.max(options.visible, options.step) ?
                        nextBtn.addClass(cancelClass) :
                        nextBtn.removeClass(cancelClass);

                    /* 到头时隐藏上一步 */
                    self.current <= 0 ?
                        prevBtn.addClass(cancelClass) :
                        prevBtn.removeClass(cancelClass)
                }
            },
            /*  */
            offsetIndex: function (a) {
                var self = this;
                var contents = self.content;
                var options = self.options;
                var mainWidth = self.mainWidth;
                var mainHeight = self.mainHeight;
                var g = null;
                var h = null;
                var i = null;

                if (a && options.seamlessLoop) {
                    i = self.current;
                    /* 当前索引小于等于0时,索引为 */
                    if (self.current <= 0) {
                        i = self.size - options.step + self.current;
                        g = -((self.size + (self.cloneCount + self.current)) * mainWidth);
                        h = -((self.size + (self.cloneCount + self.current)) * mainHeight);
                    }
                    /* 当前索引大于0时,索引减去步进 */
                    else {
                        i -= options.step;
                    }

                    self.current = i;

                } else {
                    self.current >= self.size && options.seamlessLoop && (i = self.current - self.size, g = -((i + self.cloneCount - options.step) * mainWidth), h = -((i + self.cloneCount - options.step) * mainHeight), self.current = i)
                }

                null != g && "left" == options.direction ?
                    contents.css({ left: g }) :
                null != h && "top" == options.direction && contents.css({ top: h })
            },

            /* 自动播放 */
            autoPlay: function () {
                var self = this;
                if (self.options.autoPlay) {
                    self.startPlay();
                }
            },

            /* 开始自动播放 */
            startPlay: function () {
                var self = this;
                var options = self.options;
                self.stopPlay();
                self.autoInterval = setInterval(function () {
                    self.main.length <= options.step ?
                        self.stopPlay() :
                        "prev" == options.playDirection ? self.prev() : self.next()
                }, options.stayTime)
            },

            /* 停止自动播放 */
            stopPlay: function () {
                var self = this;
                clearInterval(self.autoInterval);
            },
            iframe: function (a) {
                var b = this;
                var c = b.main.eq(a);
                var d = b.nav.eq(a);
                var e = d.attr(b.options.navIframe);
                if (e) {
                    var f = document.createElement("iframe");
                    f.src = e, f.border = 0, f.frameborder = "no", f.marginwidth = 0, f.marginheight = 0, c.html(f), d.removeAttr(b.options.navIframe)
                }
            },

            /* 更新
             * 格式1:panelIndexOrPanelOrFunc为函数
             * 格式2:panelIndexOrPanelOrFunc为索引,initDataArray为更新的数据
             * 格式3:panelIndexOrPanelOrFunc为主页或子内容
             * TODO: 此功能暂不开放, 目前只支持首次初始化
             * */
            update: function (panelIndexOrPanelOrFunc, initDataArray) {
                var self = this;
                var options = self.options;
                var mainLength = self.main.length;
                var defaultPanelIndex = -1;
                var updateIndex = -1;
                var j = false;

                if (isFunction(panelIndexOrPanelOrFunc)) {
                    initDataArray = panelIndexOrPanelOrFunc;
                    panelIndexOrPanelOrFunc = 0;
                }


                /* c为非数字 */
                if (isNaN(parseInt(panelIndexOrPanelOrFunc))) {
                    if (!panelIndexOrPanelOrFunc.hasClass(options.mainClass)) {
                        panelIndexOrPanelOrFunc = panelIndexOrPanelOrFunc.closest("." + options.mainClass);
                    }

                    if (panelIndexOrPanelOrFunc.hasClass(options.mainClass)) {
                        updateIndex = panelIndexOrPanelOrFunc.data("switchable-idx");
                    }
                }
                /* c为数字 */
                else {
                    updateIndex = panelIndexOrPanelOrFunc;
                }

                defaultPanelIndex = updateIndex;

                /* 移除自动播放 */
                if (options.autoPlay) {
                    self.stopPlay();
                    options.autoPlay = false;
                    j = true;
                }

                /* 移除克隆主页 */
                if (options.seamlessLoop && mainLength > options.step) {
                    var realMainLength = self.main.length - 2 * options.step;
                    var hasMainClone = false;
                    self.main.each(function () {
                        var mainItem = $(this);
                        if (mainItem.data("switchable-clone") == "1") {
                            hasMainClone = true;
                            $(this).remove();
                        }
                    });

                    if (hasMainClone) {

                        defaultPanelIndex = updateIndex < options.step || updateIndex >= realMainLength + options.step ? updateIndex >= realMainLength + options.step ? updateIndex - realMainLength - options.step : realMainLength - options.step + updateIndex : updateIndex - options.step;
                    }
                }

                /* 解绑翻页事件 */
                if (options.hasPage) {
                    var nextBtn = self.el.find("." + options.nextClass);
                    var prevBtn = self.el.find("." + options.prevClass);
                    nextBtn.unbind("click");
                    prevBtn.unbind("click");
                }

                /* 重新初始化主页集合 */
                self.main = self.el.find("." + options.mainClass);
                mainLength = self.main.length;

                var initUpdate = function (index) {
                    if (index == b || null == index) {
                        var currentMainLength = self.el.find("." + options.mainClass).length;
                        mainLength > currentMainLength ?
                            defaultPanelIndex -= mainLength - currentMainLength :
                            defaultPanelIndex = currentMainLength > mainLength ? (currentMainLength > options.visible ? currentMainLength - options.visible : 0) : self.current;

                        0 > defaultPanelIndex && (defaultPanelIndex = 0);
                        j && (options.autoPlay = true);

                        if (options.autoLock && !options.seamlessLoop && defaultPanelIndex + options.visible >= currentMainLength) {
                            defaultPanelIndex = currentMainLength - options.visible;
                            if (defaultPanelIndex < 0) {
                                defaultPanelIndex = 0;
                            }
                        }
                    }
                    else {
                        defaultPanelIndex = index;
                    }
                    options.defaultPanel = defaultPanelIndex;
                    // TODO: Use Switchable function to reInit
                    // self.init();
                };

                initDataArray.call(self.main.eq(defaultPanelIndex), self.content, defaultPanelIndex, initUpdate) ?
                    self.el.find("." + options.mainClass).each(function (b) {
                        $(this).data("switchable-idx", b)
                    }) :
                    initUpdate()
            }
        });

        self.addClass();

        /* 可视屏小于当前设置屏，设置可视屏为设置屏 */
        if (options.visible < options.step) {
            options.visible = options.step;
        }

        /* 页导航 */
        self.nav = el.find("." + options.navItem);
        /* 页集合 */
        self.main = el.find("." + options.mainClass);
        /* 步进 */
        options.step = Math.max(options.step || 1, 1);
        /* 总页数 */
        self.size = self.main.size();
        /* 页数 */
        self.pageCount = Math.ceil(self.main.size() / options.step);
        /* 页内容 */
        self.content = self.el.find("." + options.contentClass);
        /*  */
        self.mainWidth = self.main.outerWidth(options.includeMargin);
        /* 是否可翻页(步进小于页数) */
        hasLoop = options.step < self.size;

        /* tab且有导航,初始化页码及对应内容索引 */
        if ("tab" == options.type && options.navSelectedClass && self.nav.length > 0) {
            var navIndex = -1;
            /* 初始化导航条目样式 */
            self.nav.each(function (index) {
                var navItem = $(this);
                /* 导航条目有选中样式,只保留第一个 */
                if (navItem.hasClass(options.navSelectedClass)) {
                    if (navIndex == -1) {
                        navIndex = index
                    } else {
                        navItem.removeClass(options.navSelectedClass);
                    }
                }

            });
            /* 设置默认展示内容页码 */
            if (navIndex > -1) {
                options.defaultPanel = navIndex;
            }
        }


        /* 主体宽度优先适用设置值 */
        if (options.width) {
            self.mainWidth = options.width;
        }

        /* 主体高度 */
        self.mainHeight = self.main.outerHeight(options.includeMargin);

        /* 主体高度优先使用设置值 */
        if (options.height) {
            self.mainHeight = options.height;
        }

        /* 需要克隆的个数为:步进数和可视页数的最大值 */
        self.cloneCount = Math.max(options.step, options.visible);

        /* 无缝循环时,克隆前后页 */
        if (options.seamlessLoop && hasLoop) {
            var headClones = [];
            var tailClones = [];
            var h = self.cloneCount;
            for (var i = 0; h > i; i++) {
                headClones.push(self.main.eq(i).clone().attr("data-switchable-clone", 1).data("switchable-clone-from", h + i));
                tailClones.push(self.main.eq(self.size - (i + 1)).clone().attr("data-switchable-clone", 1).data("switchable-clone-from", self.size + i));
            }

            for (var j = 0; h > j; j++)
                self.content.prepend(tailClones[j]).append(headClones[j]);

            /* 重新初始化主页面(包含克隆项) */
            self.main = self.el.find("." + options.mainClass);
        }

        /* 为每一个主页面增加switchable-idx索引值 */
        self.main.each(function (index) { $(this).data("switchable-idx", index) });

        var defaultPanelIndex = options.defaultPanel;

        /* 支持URL中Hash参数设置优先 */
        if (options.hasHash) {
            defaultPanelIndex = self.getHash(defaultPanelIndex);
        }

        /* 上页页索引值 */
        self.last = defaultPanelIndex;

        /* 当前页页码值 */
        self.current = defaultPanelIndex;

        /* 设置初始化为true */
        self.isInit = true;

        /* 转到默认页 */
        if (options.seamlessLoop && hasLoop) {
            self.switchTo(defaultPanelIndex, defaultPanelIndex + self.cloneCount);
        } else {
            self.switchTo(defaultPanelIndex, defaultPanelIndex);
        }

        self.autoInterval = null;
        self.eventTimer = null;

        /* 初始化翻页 */
        if (options.hasPage) {
            if (hasLoop) {
                self.page();
            }
            /* 更新翻页状态 */
            if (options.autoLock) {
                self.updatePageButState();
            }
        }

        if (hasLoop) {
            self.autoPlay();
            self.bind();
        }
    }

    $.fn.switchable = function (conf) {

        conf = $.extend(true, {}, tool.options, conf);

        var els;

        this.each(function () {
            var el = new Switchable($(this), conf);
        });

        return els ? els : this;
    }
})(jQuery)

/*
 * 本地存储
 */
var tjlocalstorage = {
    check: function () {
        return "object" == typeof window.localStorage
    },
    has: function (a) {
        return localStorage.getItem(a) ? !0 : !1
    },
    set: function (a, b) {
        try {
            localStorage.setItem(a, JSON.stringify(b))
        } catch (c) { }
    },
    get: function (a) {
        try { return JSON.parse(localStorage.getItem(a)) } catch (b) { }
    },
    remove: function (a) {
        localStorage.removeItem(a)
    },
    clearByReg: function (a) {
        var b = new RegExp(a);
        var c = window.localStorage;
        for (var d in c)
            b.test(d) && this.remove(d)
    },
    clear: function () { localStorage.clear() }
};
/*
 * lazyload for img,js,html
 * 2016-09-01
 */
(function ($,undefined) {

    $.tools = $.tools || { version: '1.3' };

    var instances = [], tool;

    tool = $.tools.tjlazyload = {
        options: {
            type: "img",
            source: "data-lazy-path",
            init: "data-lazy-init",
            delay: 100,
            space: 100,
            onchange: null,
            onLoadImg: null,
            placeholderClass: "loading-style2",
            errorClass: "err-poster",
            /* todo: replace tj pic */
            blankImgUrl: "//misc.360buyimg.com/lib/img/e/blank.gif"
        }
    };

    var doneVal = "done";

    function loadImage(ele, d, options) {
        var loadImageCallback = function (isSuccess) {
            ele.removeClass(options.placeholderClass);
            if ($.isFunction(options.onLoadImg)) {
                isSuccess && d == options.blankImgUrl && (isSuccess = false);
                options.onLoadImg.call(ele, isSuccess);
            }

            ele[0].onload = ele[0].onerror = null
        };
        var g = ele[0].onerror;

        ele[0].onerror = function () {
            if ($.isFunction(g)) {
                g.call(ele[0])
            } else {
                ele.attr("src", options.blankImgUrl).addClass(options.errorClass);
            }
            loadImageCallback(false);
        };

        ele[0].onload = function () {
            loadImageCallback(true);
        };

        d || ele.attr("src") || (d = options.blankImgUrl);
        ele.attr("src", d);
        ele.attr(options.source, doneVal);
        $.isFunction(options.onchange) && options.onchange.call(ele)
    }

    function loadScript(url, param, callback) {
        if ("function" == typeof define) {
            if (define.cmd) {
                seajs.use(url, function (a) { a.init(param), callback() });
            } else {
                $.ajax({ url: url, dataType: "script", cache: true });
                callback();
            }
        }
    }

    function setFloorDoneFlag(ele, options, callback) {
        if ("0" == ele.attr("data-lazyload-fn")) {
            ele.attr("data-lazyload-fn", doneVal);
            callback();
            options.onchange && options.onchange(ele);
        }
    }

    function getTop(ele) {
        var offsetTop = ele.offsetTop;
        if (null != ele.parentNode) {
            var c = ele.offsetParent;
            for (; null != c;)
                offsetTop += c.offsetTop,
                    c = c.offsetParent
        }
        return offsetTop
    }



    function TJLazyLoad(section, conf) {
        var self = section;
        var options = conf;
        var lazyItems = null;
        var lazyItemSize = null;
        var imageInstallAttr = null;
        if ("img" == options.type && "data-lazy-path" == options.source) {
            options.source = "data-lazy-img";
            imageInstallAttr = options.source + "-install";
        }

        var source = "div";
        if ("img" == options.type) {
            source = "IMG";
            lazyItems = $("img[" + options.source + "][" + options.source + "!=done]", self);
            lazyItemSize = lazyItems.size();
            if (!lazyItemSize) {
                return false;
            }
        } else if ("fn" == options.type) {
            source = options.source;
        }

        /* 是否顶级标签 */
        self.isNonTopTag = !self.is("body,html");

        var l = function () {

            /* 延迟加载的图片 */
            if ("img" == options.type) {
                lazyItems = $("img[" + options.source + "][" + options.source + "!=done]", self)
            }
            /* 延迟加载的 */
            else {
                lazyItems = $(source, self);
            }
            lazyItemSize = lazyItems.size();
            var domScrollTop = $(document).scrollTop();

            if (self.isNonTopTag && self.scrollTop()) {
                /* 页面隐藏部分+元素隐藏部分-元素高 */
                domScrollTop += self.scrollTop() - self.height() + options.space
            }


            var m = domScrollTop + $(window).height() + options.space;

            $.each(lazyItems, function () {
                var self = $(this);
                var lazyFile = null;

                if ("js" == options.type || "img" == options.type) {
                    lazyFile = self.attr(options.source);
                }

                if (lazyFile || "fn" == options.type || "img" == options.type) {
                    var selTop = getTop(self[0]);
                    if (selTop > 0 && lazyItemSize > 0 && selTop > domScrollTop - self.outerHeight() && m > selTop) {
                        var source = self.attr(options.init);
                        /* 图片 */
                        if ("img" == options.type) {
                            source = self.attr(options.source);
                            if (source != doneVal) {
                                loadImage(self, source, options);
                                lazyItemSize -= 1;
                            } else {
                                lazyItemSize -= 1;
                            }
                        }
                        /* js */
                        else if ("js" == options.type) {
                            if (self.attr(options.init) != doneVal) {
                                loadScript(lazyFile, source, function () { lazyItemSize -= 1, self.attr(options.init, doneVal) });
                            }
                        }
                        /* fn */
                        else if ("fn" == options.type) {
                            setFloorDoneFlag(self, options, function () { lazyItemSize -= 1 });
                        }
                    }
                }
            });

            if (!lazyItemSize) {
                if ("img" == options.type && imageInstallAttr) {
                    self.removeAttr(imageInstallAttr);
                }
                if (self.isNonTopTag) {
                    $(self).unbind("scroll", n);
                }
                $(window).unbind("scroll", n);
                $(window).unbind("resize", n)
            }
        };

        var m = setTimeout(l, 0);
        var n = function () {
            m && clearTimeout(m);
            m = setTimeout(l, options.delay);
        };

        if (!(imageInstallAttr && "1" == self.attr(imageInstallAttr))) {

            if (imageInstallAttr) {
                self.attr(imageInstallAttr, 1);
            }

            if (self.isNonTopTag) {
                $(self).bind("scroll", n);
            }

            $(window).bind("scroll", n);
            $(window).bind("resize", n);
        }

        if ("fn" == options.type) {
            options.source.attr("data-lazyload-fn", "0");
        }

    }

    $.fn.tjlazyload = function (conf) {

        conf = $.extend(true, {}, tool.options, conf);

        var els;

        this.each(function () {
            var el = new TJLazyLoad($(this), conf);



        });

        return els ? els : this;
    }

})(jQuery)