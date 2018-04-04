/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*doc
---
title: Lazysizes 1.5.0 RC
name: Lazysizes
category: Plugins Lazysizes
---

Lazyload de imágenes y otros elementos

url: <https://afarkas.github.io/lazysizes/>

```example
<div class="lazyload"></div>
```

*/ 

(function(window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if(typeof module == 'object' && module.exports){
		module.exports = lazySizes;
	} else if (typeof define == 'function' && define.amd) {
		define(lazySizes);
	}
}(window, function(window, document) {
	'use strict';
	/*jshint eqnull:true */
	if(!document.getElementsByClassName){return;}

	var lazySizesConfig;

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement && ('sizes' in document.createElement('img'));

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var rAF = window.requestAnimationFrame || setTimeout;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('CustomEvent');

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail || {});

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesConfig.pf) ) ){
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var Date = window.Date;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var afterAF = function(){
			setTimeout(run);
		};
		var getAF = function(){
			rAF(afterAF);
		};

		return function(){
			if(running){
				return;
			}
			var delay = 125 - (Date.now() - lastTime);

			running =  true;

			if(delay < 6){
				delay = 6;
			}
			setTimeout(getAF, delay);
		};
	};

	/*
	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var Date = window.Date;
		var requestIdleCallback = window.requestIdleCallback;
		var gDelay = 125;
		var dTimeout = 999;
		var timeout = dTimeout;
		var fastCallThreshold = 0;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var afterAF = function(){
			setTimeout(run);
		};
		var getAF = function(){
			rAF(afterAF);
		};
		if(requestIdleCallback){
			gDelay = 66;
			fastCallThreshold = 22;
			getAF = function(){
				requestIdleCallback(run, {timeout: timeout});
				if(timeout !== dTimeout){
					timeout = dTimeout;
				}
			};
		}
		return function(isPriority){
			var delay;
			if((isPriority = isPriority === true)){
				timeout = 40;
			}
			if(running){
				return;
			}
			running =  true;
			if(isPriority || (delay = gDelay - (Date.now() - lastTime)) < fastCallThreshold){
				getAF();
			} else {
				setTimeout(getAF, delay);
			}
		};
	};
	*/

	var loader = (function(){
		var lazyloadElems, preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/glebot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = 0;
		var isStarted = 0;

		var resetPreloading = function(e){
			isLoading--;
			if(e && e.target){
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
					eLleft < outerRect.right &&
					eLbottom > outerRect.top - 1 &&
					eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			if((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				if(preloadExpand == null){
					if(!('expand' in lazySizesConfig)){
						lazySizesConfig.expand = docElem.clientHeight > 600 ? docElem.clientWidth > 860 ? 500 : 410 : 359;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 3 && loadMode > 2){
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if(loadMode > 1 && lowRuns > 2 && isLoading < 6){
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesConfig.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
		};
		var rafSwitchLoadingClass = function(e){
			e = {target: e.target};
			rAF(function(){
				switchLoadingClass(e);
			});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia, parent;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if( (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}

			//https://bugzilla.mozilla.org/show_bug.cgi?id=1170572
			if(customMedia){
				parent = source.parentNode;
				parent.insertBefore(source.cloneNode(), source);
				parent.removeChild(source);
			}
		};

		var rafBatch = (function(){
			var isRunning;
			var batch = [];
			var runBatch = function(){
				while(batch.length){
					(batch.shift())();
				}
				isRunning = false;
			};
			var add = function(fn){
				batch.push(fn);
				if(!isRunning){
					isRunning = true;
					rAF(runBatch);
				}
			};

			return {
				add: add,
				run: runBatch
			};
		})();

		var unveilElement = function (elem){
			var src, srcset, parent, isPicture, event, firesLoad, width;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem.src || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass)){return;}

			if(isAuto){
				width = elem.offsetWidth;
			}

			elem._lazyRace = true;
			isLoading++;

			if(lazySizesConfig.rC){
				width = lazySizesConfig.rC(elem, width) || width;
			}

			rafBatch.add(function lazyUnveil(){
				isStarted++;

				if(!(event = triggerEvent(elem, 'lazybeforeunveil')).defaultPrevented){

					if(sizes){
						if(isAuto){
							autoSizer.updateElem(elem, true, width);
							addClass(elem, lazySizesConfig.autosizesClass);
						} else {
							elem.setAttribute('sizes', sizes);
						}
					}

					srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
					src = elem[_getAttribute](lazySizesConfig.srcAttr);

					if(isImg) {
						parent = elem.parentNode;
						isPicture = parent && regPicture.test(parent.nodeName || '');
					}

					firesLoad = event.detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

					event = {target: elem};

					if(firesLoad){
						addRemoveLoadEvents(elem, resetPreloading, true);
						clearTimeout(resetPreloadingTimer);
						resetPreloadingTimer = setTimeout(resetPreloading, 2500);

						addClass(elem, lazySizesConfig.loadingClass);
						addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
					}

					if(isPicture){
						forEach.call(parent.getElementsByTagName('source'), handleSources);
					}

					if(srcset){
						elem.setAttribute('srcset', srcset);
					} else if(src && !isPicture){
						if(regIframe.test(elem.nodeName)){
							changeIframeSrc(elem, src);
						} else {
							elem.src = src;
						}
					}

					if(srcset || isPicture){
						updatePolyfill(elem, {src: src});
					}
				}

				rAF(function(){
					if(elem._lazyRace){
						delete elem._lazyRace;
					}
					removeClass(elem, lazySizesConfig.lazyClass);

					if( !firesLoad || elem.complete ){
						if(firesLoad){
							resetPreloading(event);
						} else {
							isLoading--;
						}
						switchLoadingClass(event);
					}
				});
			});
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}
			var scrollTimer;
			var afterScroll = function(){
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			};

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			if(isStarted){
				throttledCheckElements();
			} else {
				setTimeout(function(){
					checkElements();
					rafBatch.run();
				});
			}

			addEventListener('scroll', function(){
				if(lazySizesConfig.loadMode == 3){
					lazySizesConfig.loadMode = 2;
				}
				clearTimeout(scrollTimer);
				scrollTimer = setTimeout(afterScroll, 99);
			}, true);
		};

		/*
		var onload = function(){
			var scrollTimer, timestamp;
			var wait = 99;
			var afterScroll = function(){
				var last = (Date.now()) - timestamp;
				// if the latest call was less that the wait period ago
				// then we reset the timeout to wait for the difference
				if (last < wait) {
					scrollTimer = setTimeout(afterScroll, wait - last);
					// or if not we can null out the timer and run the latest
				} else {
					scrollTimer = null;
					lazySizesConfig.loadMode = 3;
					throttledCheckElements();
				}
			};
			isCompleted = true;
			lowRuns += 8;
			lazySizesConfig.loadMode = 3;
			addEventListener('scroll', function(){
				timestamp = Date.now();
				if(!scrollTimer){
					lazySizesConfig.loadMode = 2;
					scrollTimer = setTimeout(afterScroll, wait);
				}
			}, true);
		};
		*/

		return {
			_: function(){
				started = Date.now();

				lazyloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				throttledCheckElements(lazyloadElems.length > 0);
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = function (elem, dataAttr, width){
			var sources, i, len, event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						elem._lazysizesWidth = width;
						width += 'px';
						elem.setAttribute('sizes', width);

						if(regPicture.test(parent.nodeName || '')){
							sources = parent.getElementsByTagName('source');
							for(i = 0, len = sources.length; i < len; i++){
								sources[i].setAttribute('sizes', width);
							}
						}

						if(!event.detail.dataAttr){
							updatePolyfill(elem, event.detail);
						}
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					sizeElement(autosizesElems[i]);
				}
			}
		};

		var throttledUpdateElementsSizes = throttle(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', throttledUpdateElementsSizes);
			},
			checkElems: throttledUpdateElementsSizes,
			updateElem: sizeElement
		};
	})();

	var init = function(){
		if(!init.i){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.7,
			hFac: 0.8,
			loadMode: 2
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesConfig)){
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function(){
			if(lazySizesConfig.init){
				init();
			}
		});
	})();

	return {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth
	};
}));
;(function( win, $ ) {

	function featureTest( property, value, noPrefixes ) {
		// Thanks Modernizr! https://github.com/phistuck/Modernizr/commit/3fb7217f5f8274e2f11fe6cfeda7cfaf9948a1f5
		var prop = property + ':',
			el = document.createElement( 'test' ),
			mStyle = el.style;

		if( !noPrefixes ) {
			mStyle.cssText = prop + [ '-webkit-', '-moz-', '-ms-', '-o-', '' ].join( value + ';' + prop ) + value + ';';
		} else {
			mStyle.cssText = prop + value;
		}
		return mStyle[ property ].indexOf( value ) !== -1;
	}

	function getPx( unit ) {
		return parseInt( unit, 10 ) || 0;
	}

	var uniqueIdCounter = 0;

	var S = {
		classes: {
			plugin: 'fixedsticky',
			active: 'fixedsticky-on',
			inactive: 'fixedsticky-off',
			clone: 'fixedsticky-dummy',
			withoutFixedFixed: 'fixedsticky-withoutfixedfixed'
		},
		keys: {
			offset: 'fixedStickyOffset',
			position: 'fixedStickyPosition',
			id: 'fixedStickyId'
		},
		tests: {
			sticky: featureTest( 'position', 'sticky' ),
			fixed: featureTest( 'position', 'fixed', true )
		},
		// Thanks jQuery!
		getScrollTop: function() {
			var prop = 'pageYOffset',
				method = 'scrollTop';
			return win ? (prop in win) ? win[ prop ] :
				win.document.documentElement[ method ] :
				win.document.body[ method ];
		},
		bypass: function() {
			// Check native sticky, check fixed and if fixed-fixed is also included on the page and is supported
			return ( S.tests.sticky && !S.optOut ) ||
				!S.tests.fixed ||
				win.FixedFixed && !$( win.document.documentElement ).hasClass( 'fixed-supported' );
		},
		update: function( el ) {
			if( !el.offsetWidth ) { return; }

			var $el = $( el ),
				height = $el.outerHeight(),
				initialOffset = $el.data( S.keys.offset ),
				scroll = S.getScrollTop(),
				isAlreadyOn = $el.is( '.' + S.classes.active ),
				toggle = function( turnOn ) {
					$el[ turnOn ? 'addClass' : 'removeClass' ]( S.classes.active )
						[ !turnOn ? 'addClass' : 'removeClass' ]( S.classes.inactive );
				},
				viewportHeight = $( window ).height(),
				position = $el.data( S.keys.position ),
				skipSettingToFixed,
				elTop,
				elBottom,
				$parent = $el.parent(),
				parentOffset = $parent.offset().top,
				parentHeight = $parent.outerHeight();

			if( initialOffset === undefined ) {
				initialOffset = $el.offset().top;
				$el.data( S.keys.offset, initialOffset );
				$el.after( $( '<div>' ).addClass( S.classes.clone ).height( height ) );
			}

			if( !position ) {
				// Some browsers require fixed/absolute to report accurate top/left values.
				skipSettingToFixed = $el.css( 'top' ) !== 'auto' || $el.css( 'bottom' ) !== 'auto';

				if( !skipSettingToFixed ) {
					$el.css( 'position', 'fixed' );
				}

				position = {
					top: $el.css( 'top' ) !== 'auto',
					bottom: $el.css( 'bottom' ) !== 'auto'
				};

				if( !skipSettingToFixed ) {
					$el.css( 'position', '' );
				}

				$el.data( S.keys.position, position );
			}

			function isFixedToTop() {
				var offsetTop = scroll + elTop;

				// Initial Offset Top
				return initialOffset < offsetTop &&
					// Container Bottom
					offsetTop + height <= parentOffset + parentHeight;
			}

			function isFixedToBottom() {
				// Initial Offset Top + Height
				return initialOffset + ( height || 0 ) > scroll + viewportHeight - elBottom &&
					// Container Top
					scroll + viewportHeight - elBottom >= parentOffset + ( height || 0 );
			}

			elTop = getPx( $el.css( 'top' ) );
			elBottom = getPx( $el.css( 'bottom' ) );

			if( position.top && isFixedToTop() || position.bottom && isFixedToBottom() ) {
				if( !isAlreadyOn ) {
					toggle( true );
				}
			} else {
				if( isAlreadyOn ) {
					toggle( false );
				}
			}
		},
		destroy: function( el ) {
			var $el = $( el );
			if (S.bypass()) {
				return $el;
			}

			return $el.each(function() {
				var $this = $( this );
				var id = $this.data( S.keys.id );
				$( win ).unbind( '.fixedsticky' + id );

				$this
					.removeData( [ S.keys.offset, S.keys.position, S.keys.id ] )
					.removeClass( S.classes.active )
					.removeClass( S.classes.inactive )
					.next( '.' + S.classes.clone ).remove();
			});
		},
		init: function( el ) {
			var $el = $( el );

			if( S.bypass() ) {
				return $el;
			}

			return $el.each(function() {
				var _this = this;
				var id = uniqueIdCounter++;
				$( this ).data( S.keys.id, id );

				$( win ).bind( 'scroll.fixedsticky' + id, function() {
					S.update( _this );
				}).trigger( 'scroll.fixedsticky' + id );

				$( win ).bind( 'resize.fixedsticky' + id , function() {
					if( $el.is( '.' + S.classes.active ) ) {
						S.update( _this );
					}
				});
			});
		}
	};

	win.FixedSticky = S;

	// Plugin
	$.fn.fixedsticky = function( method ) {
		if ( typeof S[ method ] === 'function') {
			return S[ method ].call( S, this);
		} else if ( typeof method === 'object' || ! method ) {
			return S.init.call( S, this );
		} else {
			throw new Error( 'Method `' +  method + '` does not exist on jQuery.fixedsticky' );
		}
	};

	// Add fallback when fixed-fixed is not available.
	if( !win.FixedFixed ) {
		$( win.document.documentElement ).addClass( S.classes.withoutFixedFixed );
	}

})( window, jQuery );

/*	----------------------------------------------------------------------------------------------------
	 Helpers Bootstrap ADN asincronos
------------------------------------------------------------------------------------------------------ */
/*	--------------------------------------------------
	Funciones y variables globales helpers
-------------------------------------------------- */


/*	--------------------------------------------------
	jQuery Ready
-------------------------------------------------- */

$(function() { // DOM Ready


	/*	--------------------------------------------------
		fixJumpyAffix: Arregla saltos de los afixes
		v:1.0		
	-------------------------------------------------- */
	
	$(window).load(function(){
		//Si hay affixes...
		if ( $('[data-spy="affix"]').length !== 0 ){
	
			// Vamos uno por uno creando contenedores para evitar saltos al hacer scroll
			$('[data-spy="affix"]').each(function(){
				
				//Aplicamos altura al holder con ID construido segun el ID original
				affixHolderHeight = $(this).outerHeight();
				affixID = $(this).attr('id');	
				$(this).wrap('<div id="'+affixID+'-holder" class="affix-holder"></div>');
				$(this).parent().height(affixHolderHeight);

				//Determinamos la altura a la que se hará fixed y se la indicamos
				affixHolderOffset = $(this).offset().top - affixHolderHeight;				
				$(this).attr('data-offset-top',affixHolderOffset);
				
			});
		}
		
	});

	/*	--------------------------------------------------
		placeholdersIE
		v:1.0		
	-------------------------------------------------- */
	
	$('html.legacy-ie [placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
		    input.val('');
		    input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() === '' || input.val() == input.attr('placeholder')) {
		    input.addClass('placeholder');
		    input.val(input.attr('placeholder'));
		  }
		}).blur().parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
		    var input = $(this);
		    if (input.val() == input.attr('placeholder')) {
		      input.val('');
	    }
	  });
	});


	/*	--------------------------------------------------
		collapseResponsive: Collapse que se cierran en XS, abren en MD
		v:1.0		
	-------------------------------------------------- */
	//Movil y iPad
	if( windowWidth <= mdBreak ){
		$('.js-responsive-auto-close').collapse({
		  toggle: true
		});
	
	}else{
		$('.js-responsive-auto-close').collapse({
		  toggle: false
		});
	}
	
	// Sólo móvil
	if( windowWidth < xsBreak ){
		$('.js-responsive-auto-close-xs').collapse({
		  toggle: true
		});
	
	}else{
		$('.js-responsive-auto-close-xs').collapse({
		  toggle: false
		});
	}		

	/*	--------------------------------------------------
		Popovers con HTML
		v:1.0		
	-------------------------------------------------- */
		//$('[data-toggle="html-popover"]').popover({ 
		//	html : true,
		//	content: function() {
		//	var popContentID = $(this).attr('data-id-content');
		//	return $(popContentID).html();
		//	}
		//});
		////Evitamos que se muestren 2 pop-overs a la vez
		//$('[data-toggle="html-popover"]').click(function () {
		//	$('[data-toggle="html-popover"]').not(this).popover('hide');
		//});		
	  
		

	/*	--------------------------------------------------
		buttonTextChange:  Botones de colapse que cambian su texto
		v:1.0
	-------------------------------------------------- */
	$('a,button').click(function(){
		
		originalText = $(this).attr('data-original-text');
		newText = $(this).attr('data-new-text');
		
		//Cambiamos los textos para el próximo click
		$(this).attr('data-original-text',newText);
		$(this).attr('data-new-text',originalText);
		
		
		$(this).html(newText);
		
		
	});
	

/*	--------------------------------------------------
		toggleClass: hacemos un toggle de una clase en un grupo de elementos
		v:1.0
	-------------------------------------------------- */
	
	$('.js-toggle-class').on('mouseup',function(e){
		
		if (e){
			e.preventDefault();
		}
		
		dataParent = $(this).closest('.js-toggle-class-parent');
		dataClass = dataParent.attr('data-class');
		
		$(dataParent).find('.js-toggle-class').not(this).removeClass(dataClass);
		$(dataParent).find(this).toggleClass(dataClass);
	});
	
/*	--------------------------------------------------
		collapseScroll: Movemos el scroll al desplegar un colapsable
		v:1.2
	-------------------------------------------------- */

	$('[data-toggle="collapse"][aria-expanded="false"]').on('click',function(){
		
		hRef = $(this).attr('href');
		
		if (!hRef){
			hRef = $(this).attr('data-target') ;
		}
		
		thisHeight = $(this).parent().height();
		
		
		
		if ( $(this).hasClass('no-scroll') ){
			
		}else{
			
			$(hRef).on('show.bs.collapse', function () {
				$('html').addClass('scroll-stop');
			});
			
			$(hRef).on('shown.bs.collapse', function () {
				moveToOffset = $(this).offset().top - thisHeight -10;
				$("html, body").animate({scrollTop: moveToOffset, useTranslate3d:true }, 700);
				
				
		
				$( window ).scroll(function() {

	    			clearTimeout( $.data( this, "scrollCheck" ) );
	    			$.data( this, "scrollCheck", setTimeout(function() {
	    				
	    				$('html').removeClass('scroll-stop');
	    				
	    			}, 250) );
	
	    		});			
			
				
			});
		}
		
	});
	
	
	/*	--------------------------------------------------
		showOnCollapse: Mostramos elementos on collapseOut
		v:1.2
	-------------------------------------------------- */
	
	$('[data-toggle="collapse"]').on('click',function(){
		
		//el href tiene que tener la clase js-show-on-collapsed
		
		hRef = $(this).attr('href');
		
		if (!hRef){
			hRef = $(this).attr('data-target') ;
		}
		
		if ($(hRef).hasClass('js-show-on-collapsed')) {
			
			var delay = parseFloat($(hRef).css('transition-duration'))*1000; //delay en ms
			var showOnCollapsed = $(this).attr('data-show-on-collapsed');
			
			//collapsed
			if ($(hRef).hasClass('collapse--in')) {
							
				setTimeout(function(){
					$(showOnCollapsed).addClass('fadeIn').removeClass('fadeOut');
				}, delay);
			}
			//open
			else {
				$(showOnCollapsed).removeClass('fadeIn').addClass('fadeOut');
			}
			
		}
		
	});
		
	/*	--------------------------------------------------
		scrollTo: Movemos el scroll al elemento indicado haciendo click
		v:1.0
	-------------------------------------------------- */
	
	
	$('[data-id-scroll]').on('click',function(){
			//ID del elemento donde queremos ir
			scrollToID = $(this).attr('data-id-scroll');
			
			//Aplicamos correción de píxeles
			pixelFix = $(this).attr('data-pixel-fix');
			
			//Lanzamos la funciónn para determinas si esta visible
			waitUntilVisible();			
			
			//Esperamos que el elemento este visible
			function waitUntilVisible(){
				existInterval = false;
				//si tiene la clase in es que esta visible
				if ($(scrollToID).hasClass('in')){
				
					//movemos scroll
					moveToOffset = $(scrollToID).offset().top-parseInt(pixelFix);
					$("html, body").animate({scrollTop: moveToOffset, useTranslate3d:true }, 700);
					
					//Cortamos la función
					if (existInterval === true){
						clearInterval(visibleInterval);
					}
				}else{
					//No es visible? Probamos en 500ms otra vez
					existInterval = true;
					visibleInterval = setInterval(waituntilVisible, 500);
				}
			}
			
			if($(this).is('a')){
				return false;
				
			}
			
			
			

				
	});
	
	
	/*	--------------------------------------------------
		aniDrop: Animación dropdowns
		v:1.0
	-------------------------------------------------- */

	//$('.dropdown').on('show.bs.dropdown', function(e){
	//	$(this).find('.dropdown-menu').first().stop(true, true).addClass('animated fadeInDown');
	//});
	//
	//
	//$('.dropdown').on('hide.bs.dropdown', function(e){
	//	$(this).find('.dropdown-menu').first().stop(true, true).addClass('animated fadeOutUp');
	//});


	
	
	/*	--------------------------------------------------
		noNumber: Evitamos caracteres no numéricos en input number
		v:1.0
	-------------------------------------------------- */
	$("[type='number']").keydown(function(event) {
		
		if ( event.keyCode > 90 && event.keyCode < 106 ){
			return;	
		}
		
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 ) {

		} else {
			if (event.keyCode < 48 || event.keyCode > 57 ) {
				event.preventDefault();	
			}	
		}
	});
	
	
	
	
	/*	--------------------------------------------------
		buttonDismiss: Boton que cierra el Id indicado
		v:1.1
	-------------------------------------------------- */

	$('[data-id-dismiss]').click(function(){
		
		idToClose = $(this).attr('data-id-dismiss');
		
		if (idToClose) {
		
			// Si el attr es this, es que quiere que se cierre a si mismo.
			if ( idToClose === 'this' ){
				
				idToClose = $(this).parent();
				
			}
		
			//Que Animación?
			exitAnimation = $(this).attr('data-animation');
			// Ocultamos el target
			$(idToClose).addClass('animated').addClass(exitAnimation);
			
			//Display none una vez termine la animación
			$(idToClose).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
				function(e) {
					$(this).addClass('hide');				
				}
			);

		}		
	});
	
	/*	--------------------------------------------------
		buttonReveal: Boton que muestra el Id indicado y oculta otro
		v:1.1
	-------------------------------------------------- */
	
	$('.js-reveal').click(function(){
		idToShow = $(this).attr('data-id-show');
		
		idToHide  = $(this).attr('data-id-hide');
		
						showAnimation = $(this).attr('data-animation-show');
						hideAnimation = $(this).attr('data-animation-hide');
		
		
		if (idToHide){
			
			$(idToHide).addClass('animated').addClass(hideAnimation);
			
			//Display none una vez termine la animación
			$(idToHide).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
				function(e) {
					$(this).addClass('hide');				

					if (idToShow) {
					
						// Si el attr es this, es que quiere que se cierre a si mismo.
						if ( idToShow === 'this' ){
							
							idToShow = $(this).parent();
							
						}
					
						//Que Animación?
						
						$(idToShow).addClass('animated').addClass(showAnimation);
						
			
					}	
				}							
				
			);

		}
			
	});	
	
	$('.js-reveal-basic').click(function(event){
		//event.preventDefault();
		idToHide = $(this).attr('data-id-hide');
		idToShow = $(this).attr('data-id-show');

		if(idToHide) { $(idToHide).hide(); } 		
		if(idToShow) { $(idToShow).show();}		

	});
	
	/*	--------------------------------------------------
		buttonToggle: Boton que alterna la visibilidad de 2 elementos
		v:1.1
	-------------------------------------------------- */
	$('.js-toggle').click(function(event){
		//event.preventDefault();
		idToHide = $(this).attr('data-id-hide');
		idToShow = $(this).attr('data-id-show');

		dataTimes = $(this).attr('data-times');
		
		//Si hay datatimes = 0, no hay límite, si hay 1..se limita cambiando el contador a 0
		
		if(dataTimes < 0){
			return false;
		}
		
		
		if(dataTimes > 0){
			$(this).attr('data-times','-1');
		}		
		//Que Animación?
		showAnimation = $(this).attr('data-animation-show');
		hideAnimation = $(this).attr('data-animation-hide');
		
		//Ocultamos y eliminamos el target		
		$(idToHide).addClass('animated').addClass(hideAnimation).removeClass(showAnimation);
		

		//Display none una vez termine la animación
		$(idToHide).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
			function(e) {
				$(this).addClass('hide');		
				$(idToShow).removeClass('hide').addClass('animated').addClass(showAnimation).removeClass(hideAnimation);		
			}
		);


		//cambiamos el orden de los atributos
		$(this).attr('data-id-show',idToHide);
		$(this).attr('data-id-hide',idToShow);
		

	});
	
	$('.js-toggle-basic').click(function(event){
		//event.preventDefault();
		idToHide = $(this).attr('data-id-hide');
		idToShow = $(this).attr('data-id-show');

		$(idToHide).hide();		
		$(idToShow).show();	
		
		$(this).attr('data-id-hide', idToShow);
		$(this).attr('data-id-show', idToHide);			

	});
	
	
	/*--------------------------------------------------
		inputNumberButtons: Botones + - para input number y pattern para forzar numérico (tiene código async)
		v:1.0		
	-------------------------------------------------- */

    $('input[type=number]').each(function(){
	    //Forzamos en movil el teclado numérico
	  //  $(this).attr('pattern',"\d");
	    
	    //Le ponemos controles si asi se indica
	    if( $(this).attr('data-controls') == "true" ){
	        $(this).after('<button class="more" title="Aumentar">+</button>');
	        $(this).before('<button class="less" title="Reducir">-</button>');
	    }
	    
    });
	
	
	/*--------------------------------------------------
		Botones + - para input number (tiene código sync)
		v:1.0
	-------------------------------------------------- */
	
    $('.more').click(function(event) {
        //Evitamos que se cierre el dropdown
        event.stopPropagation();
        event.preventDefault();
 
         //Tenemos en cuenta el limite
         curLimit = $(this).prev().attr('max');
         curVal = $(this).prev().val();
 
         if (curLimit == curVal){ return false; }                    
 
         curVal = parseFloat(curVal);
         $(this).prev().val(curVal+1);
 
    });
 
    $('.less').click(function(event) {
        //Evitamos que se cierre el dropdown
        event.stopPropagation();
        event.preventDefault();
        //Tenemos en cuenta el limite
        curLimit = $(this).next().attr('min');
        curVal = $(this).next().val();
 
        if (curLimit == curVal){ return false; }
 
        curVal = parseFloat(curVal);
        $(this).next().val(curVal-1);
    });     
 

	
	/*	--------------------------------------------------
		accordionSelect: Select que alterna visibilidad de un acordeón u otros elementos
		v:1.0
	-------------------------------------------------- */
	$('select.js-accordion-select').change(function(){
		//show hide de toda la vida
		optionShow = $('option:selected',this).attr('data-id-show');
		$(optionShow).show();
		//$(optionShow).removeClass('out').addClass('in')
		optionHide = $('option:selected',this).attr('data-id-hide');
		$(optionHide).hide();
		
		//Para acordeones
		optionSelected = $('option:selected',this).attr('data-id-trigger');
		$('a[href="'+optionSelected+'"]').trigger('click');
		
	});
	
	
	/*	--------------------------------------------------
		iOSmodalFix: Fix scroll en modales en iOS 
		v:1.0
	-------------------------------------------------- */
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
	    
	    //Guardamos la posición del scroll
        $(window).scroll(function () {
            $currentScrollPos = $(document).scrollTop();
        });
        
        
        $('[data-toggle="modal"]').click(function(){
	        
	        modalTarget = $(this).attr('data-target');
	        
	        //Al abrir un modal, ponemos fixed al body para evitar el scroll y guardamos 
	        // la variable en localStorage para evitar que cambie al hacer scroll
			$(modalTarget).on('shown.bs.modal', function (e) {
		        $('body').css({'position': 'fixed'});
		        localStorage.cachedScrollPos = $currentScrollPos;
			});        
	        
	        
	         //Al cerrar el modal quitamos el fixed y movemos el scroll a donde estábamos
			$(modalTarget).on('hidden.bs.modal', function (e) {
	            $('body').css({'position': 'relative'});
	            $('body').scrollTop(localStorage.cachedScrollPos);
			});
	        
	        
        });
    }	
	
	/*	--------------------------------------------------
		fakePlaceholderDate: Input month con placeholder falso
		v:1.0
	-------------------------------------------------- */

	$('input[type="month"], input[type="date"]').each(function(){
		
		datePlaceHolder = $(this).attr('placeholder');
		$(this).before('<span class="js-fake-placeholder">'+datePlaceHolder+'</span>');
		
	});
	

	$('input[type="month"], input[type="date"]').focus(function(){
		
		$(this).prev('.js-fake-placeholder').hide();
		
	});


	/*	--------------------------------------------------
		textareaAutoSize: Textareas que crecen para adaptar su altura al texto
		v:1.0
	-------------------------------------------------- */

	$('textarea.js-autosize').keyup(function(){
		
		textareaResize = $(this);
		
		//añadimos timeout para evitar lag.
		setTimeout(function(){ 

			//Reseteamos la altura
			textareaResize.removeAttr('style');
			
			//cogemos altura del scroll
			textareaHeight= textareaResize.get(0).scrollHeight; 

			//Se la aplicamos
			textareaResize.height(textareaHeight);
			
		}, 200);
		

	});

	
	/*	--------------------------------------------------
		uploadFileButton v:1.0
		-------------------------------------------------- */	
		
		
	// Funcionamiento del campo para subir archivo
	$('.js-upload-file').on('click', function(e){
		
		// Guarda los elementos a modificar en variables
		var inputfile='#'+$( this ).attr('for'); 
		var filenameContainer=$( this ).attr("data-file-name-holder"); 

		// Escribe el nombre del archivo si hay un elemento especificado para ello.
		if(filenameContainer){
			$(inputfile).change(function(e){
				var content = '<ul>';
			    for (var i = 0; i < $(this).get(0).files.length; ++i) {
				    content += '<li>'+$(this).get(0).files[i].name+'</li>';
			    }	
			    content += '</ul>';
				//Pintamos la lista de archivos que se adjuntaran
				$(filenameContainer).html(content);

			});
			
		}
	});
	
	
	
	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */

	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {



	});

}); // Cierre DOM Ready abierto al inicio de la página

//<button id="collapse-button" type="button" data-toggle="collapse" data-target="#collapse" data-parent="accordion" aria-expanded="false">Abrir</button>
//<div id="collapse" class="accordion__panel collapse" role="tabpanel" aria-labelledby="collapse-button" aria-expanded="false">
//	
//	<span class="h3 color-black">Empresas dedicadas a juegos de azar</span>
//	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nunc purus, porttitor ac eros id, dignissim varius urna. Quisque non blandit est. Proin ultricies dapibus lorem, eget mollis arcu pulvinar eget. Etiam eget tincidunt eros. Duis et aliquam augue, ac commodo leo. In mattis accumsan magna et ultrices. Etiam elementum velit nec dui facilisis, nec consequat tortor tincidunt. Aenean mattis urna sapien, vel elementum nisi egestas ut. Curabitur pretium vel ante vitae tincidunt.</p>
//</div>

//<div id="accordion-example" class="accordion">
//
//	<button id="collapse-button" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false">
//		Empresas dedicadas a juegos de azar
//		<span class="caret"></span>
//	</button>
//	
//	<div id="collapse" class="collapse" role="tabpanel" aria-labelledby="collapse-button">
//		
//		<div class="accordion__panel">
//			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nunc purus, porttitor ac eros id, dignissim varius urna. Quisque non blandit est. Proin ultricies dapibus lorem, eget mollis arcu pulvinar eget. Etiam eget tincidunt eros. Duis et aliquam augue, ac commodo leo. In mattis accumsan magna et ultrices. Etiam elementum velit nec dui facilisis, nec consequat tortor tincidunt. Aenean mattis urna sapien, vel elementum nisi egestas ut. Curabitur pretium vel ante vitae tincidunt.</p>
//		</div>
//	</div>
//	
//	<button id="collapse-button-2" type="button" data-toggle="collapse" data-target="#collapse2" data-parent="#accordion-example">								
//		Empresas bajo supervisión financiera
//		<span class="caret"></span>
//	</button>
//
//	<div id="collapse2" class="collapse" role="tabpanel" aria-labelledby="collapse-button-2">
//		<div class="accordion__panel">									
//			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nunc purus, porttitor ac eros id, dignissim varius urna. Quisque non blandit est. Proin ultricies dapibus lorem, eget mollis arcu pulvinar eget. Etiam eget tincidunt eros. Duis et aliquam augue, ac commodo leo. In mattis accumsan magna et ultrices. Etiam elementum velit nec dui facilisis, nec consequat tortor tincidunt. Aenean mattis urna sapien, vel elementum nisi egestas ut. Curabitur pretium vel ante vitae tincidunt.</p>
//		</div>
//	</div>
//	
//	<button id="collapse-button-3" type="button" data-toggle="collapse" data-target="#collapse3" data-parent="#accordion-example">								
//		Personas con cargo público
//		<span class="caret"></span>
//	</button>
//
//	<div id="collapse3" class="collapse" role="tabpanel" aria-labelledby="collapse-button-3">
//		<div class="accordion__panel">									
//			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nunc purus, porttitor ac eros id, dignissim varius urna. Quisque non blandit est. Proin ultricies dapibus lorem, eget mollis arcu pulvinar eget. Etiam eget tincidunt eros. Duis et aliquam augue, ac commodo leo. In mattis accumsan magna et ultrices. Etiam elementum velit nec dui facilisis, nec consequat tortor tincidunt. Aenean mattis urna sapien, vel elementum nisi egestas ut. Curabitur pretium vel ante vitae tincidunt.</p>
//		</div>
//	</div>
//
//</div>


$(function() {

	//Abrimos Collapse
	$('[data-toggle="collapse"]').on('click',function(){
		
		
		trigger = $(this);

		accordion = trigger.attr('data-parent');
		collapse = trigger.attr('data-target');

		$(accordion).find($('[data-toggle="collapse"]')).attr('aria-expanded', false);

				
		if (trigger.attr('aria-expanded') == 'true' ){
			trigger.attr('aria-expanded','false')
		}else{
			trigger.attr('aria-expanded','true')
		}
		

		
		$(accordion).find(trigger).toggleClass('accordion__open').siblings().removeClass('accordion__open');

		
		$(accordion).children('.collapse--in').not(collapse).toggleClass('collapse--in');
		$(collapse).toggleClass('collapse--in');	
		
		
		//Lo animamos a menos que tenga clase collapse--no--scroll
		if ( trigger.hasClass('no-scroll') ){
		
			
		}else{
			
			setTimeout(function(){ 
				//Donde movemos el scroll al desplegar el collapse?
				moveToOffset = trigger.offset().top -90;
				$("html, body").animate({scrollTop: moveToOffset, useTranslate3d:true }, 700);
				
				
			}, 500);
			
		}
		
		return false;
	});
	
	
});

//Para poder llamarlo por JS
$.fn.collapse = function() {
		
		this.toggleClass('collapse--in')

		return this;
		
};
$(function() {

	$('[data-toggle="dropdown"]').click(function(){
		
		parent = $(this).closest('.dropdown');
		var openDropdowns = $('.dropdown.open');
		
		if (!parent.hasClass('open')){
			$(this).closest('.dropdown').addClass(('open'));	
			$(this).attr('aria-expanded','true');			
		}
		
		openDropdowns.removeClass('open');
		openDropdowns.attr('aria-expanded','false');
		
	});
	
});

// Cerrar dropdown al hacer click fuera de él
$(document).mouseup(function (e){
    if (!$('.dropdown--menu').is(e.target) && $('.dropdown--menu').has(e.target).length === 0 && !$('.dropdown').is(e.target) && $('.dropdown').has(e.target).length === 0) {
        $('.dropdown').removeClass('open');
        $('.dropdown').attr('aria-expanded','true');
    }
}); 

//Para poder llamarlo por JS
$.fn.dropdown = function() {
		parent = this.closest('.dropdown');
		
		if (parent.hasClass('open')){
			parent.removeClass('open')
			this.attr('aria-expanded','false');
			
		}else{
			this.closest('.dropdown').addClass(('open'));	
			$(this).attr('aria-expanded','true');						
		}
		return this;
};
$(function() {

	// //Abrimos modal
	// $('[data-toggle="modal"]').click(function(){
		
	// 	modal = $(this).attr('data-target');
	// 	$(modal).removeClass('modal--close').addClass('modal--open');
	// 	$(modal).attr('aria-hidden','false');
	// 	$('body').addClass('modal--open');
		
	// 	return false;
		
	// });
	// //Cerramos modal con el boton	
	// $('[data-dismiss="modal"]').click(function(){
		
	// 	modal = '#'+$(this).closest('.modal').attr('id');
	// 	$(modal).removeClass('modal--open').addClass('modal--close');
	// 	$(modal).attr('aria-hidden','true');
	// 	$('body').removeClass('modal--open');
		
		
	// });

		//Abrimos modal
	$('[data-toggle="modal"]').on('click',function(){
		var modal = $(this).attr('data-target');
		$(modal).modal('show');

		return false;
	});

	//Cerramos modal con el boton
	$('[data-dismiss="modal"]').on('click', function() {
		var modal = '#'+$(this).closest('.modal').attr('id');
		$(modal).modal('hide');
	});

	//Cerramos modal con el boton
	$('.close').on('click', function() {
		var modal = '#'+$(this).closest('.modal').attr('id');
		$(modal).modal('hide');
	});

	$('.modal').bind('show.modal', function(){
		var modal = $(this);
		modal.removeClass('modal--close').addClass('modal--open').attr('aria-hidden','true');
		$('body').addClass('modal--open');

		setTimeout(function(){
			modal.trigger('shown.modal');
		}, 900);
	});

	$('.modal').bind('hide.modal', function(){
		var modal = $(this);
		modal.addClass('modal--close').removeClass('modal--open').attr('aria-hidden','false');
		$('body').removeClass('modal--open');

		setTimeout(function(){
			modal.trigger('hidden.modal');
		}, 900);
	});

	$('.modal').bind('shown.modal', function(){});
	$('.modal').bind('hidden.modal', function(){});
	
});

//Para poder llamarlo por JS
$.fn.modal = function( action ) {
		
		
		// if ($('body').hasClass('modal--open')){
		// 	this.addClass('modal--close').removeClass('modal--open').attr('aria-hidden','false');
		// 	$('body').removeClass('modal--open');
			
		// }else{
		// 	this.removeClass('modal--close').addClass('modal--open').attr('aria-hidden','true');;
		// 	$('body').addClass('modal--open');

		// }
		// return this;

	if ( action == 'show' || !action ) {
		this.trigger('show.modal');
	} else if( action == 'hide') {
		this.trigger('hide.modal');
	}

	return this;

		
};
/*	--------------------------------------------------
	Navegación offcanvas 1.1
-------------------------------------------------- */

//Ocultamos la navegación al pulsar fuera de ella
function closeCanvas(){

	if ($('body').hasClass('in')){
	
		//Cerramos todos los que haya abiertos
		$('.off-canvas').removeClass('out');
		
		//Abrimos el seleccionado.
		$('body').removeClass('in').addClass('out')
		$('html').removeClass('in').addClass('out')

		
		$('.canvas-wrap').hide()
		
		setTimeout(function () {
			$('body').removeClass('out left right');
			$('html').removeClass('out left right');
		}, 500);			
		
		
	}
	
	
}

/*	--------------------------------------------------
	jQuery Ready
-------------------------------------------------- */
$(function() {


	$('button.navbar-toggle').click(function(){
		
		canvasTarget = $(this).attr('data-target');
		dataSide = $(this).attr('data-side');
		
		//Indicamos en la capa la dirección para cerrarla después
		$('.canvas-wrap').addClass(dataSide);
		
		//Si el target tiene .out esta abierto, asi que lo cerramos...
		if ( $(canvasTarget).hasClass('out') ){

			closeCanvas();
			
		}else{
			//Cerramos todos los que haya abiertos
			$('.off-canvas').removeClass('out');
			
			//Abrimos el seleccionado.
			$('body').addClass('in').removeClass('left right').addClass(dataSide);	
			$('html').addClass('in').removeClass('left right').addClass(dataSide);
			$(canvasTarget).addClass('out');
			
			$('.canvas-wrap').show().css('height', '100%');
		}
		
		
	})
	
	//Cierre pulsando fuera del menu
	$('.canvas-wrap').on('click', function(){
		closeCanvas();		
	});
	
	//Cierre pulsando en botón de cerrar
	$('.off-canvas [data-toggle="close"]').on('click', function(){
		closeCanvas();		
	});
	
	
	//Control con swipes, requiere jquery.touchSwipe
	//$(".canvas-wrap").swipe( {
	//	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	//		if ( $(this).hasClass('left') && direction == 'left'){
	//			 closeCanvas();
	//		}
	//		if ( $(this).hasClass('right') && direction == 'right'){
	//			 closeCanvas();
	//		}
	//		
	//	}
	//});	
	
});
$(function() {

	//Abrimos modal
	$('.nav--tabs [aria-controls]').click(function(){
		
		tab = '#'+$(this).attr('aria-controls');		
		$(tab).addClass('active').siblings().removeClass('active');
		
		return false;
	});
	
	
	$('.js-tabs li a').click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).fadeIn().addClass('active');
		$(target).siblings().hide().removeClass('active');
		
		$(this).closest('li').addClass('active').siblings().removeClass('active');
		
		if (windowWidth < smBreak) {
			$('html,body').animate({
				scrollTop: $(target).offset().top - $('header').outerHeight(true) - $(this).outerHeight(true)
			},700);
		}
		
	});
	
});
!function($){var apiParams={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};$.fn.vectorMap=function(options){var map,methodName,map=this.children(".jvectormap-container").data("mapObject");if("addMap"===options)jvm.Map.maps[arguments[1]]=arguments[2];else{if(("set"===options||"get"===options)&&apiParams[options][arguments[1]])return methodName=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1),map[options+methodName].apply(map,Array.prototype.slice.call(arguments,2));options=options||{},options.container=this,map=new jvm.Map(options)}return this}}(jQuery),function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory:factory(jQuery)}(function($){function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;if(event=$.event.fix(orgEvent),event.type="mousewheel","detail"in orgEvent&&(deltaY=-1*orgEvent.detail),"wheelDelta"in orgEvent&&(deltaY=orgEvent.wheelDelta),"wheelDeltaY"in orgEvent&&(deltaY=orgEvent.wheelDeltaY),"wheelDeltaX"in orgEvent&&(deltaX=-1*orgEvent.wheelDeltaX),"axis"in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS&&(deltaX=-1*deltaY,deltaY=0),delta=0===deltaY?deltaX:deltaY,"deltaY"in orgEvent&&(deltaY=-1*orgEvent.deltaY,delta=deltaY),"deltaX"in orgEvent&&(deltaX=orgEvent.deltaX,0===deltaY&&(delta=-1*deltaX)),0!==deltaY||0!==deltaX){if(1===orgEvent.deltaMode){var lineHeight=$.data(this,"mousewheel-line-height");delta*=lineHeight,deltaY*=lineHeight,deltaX*=lineHeight}else if(2===orgEvent.deltaMode){var pageHeight=$.data(this,"mousewheel-page-height");delta*=pageHeight,deltaY*=pageHeight,deltaX*=pageHeight}return absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX)),(!lowestDelta||lowestDelta>absDelta)&&(lowestDelta=absDelta,shouldAdjustOldDeltas(orgEvent,absDelta)&&(lowestDelta/=40)),shouldAdjustOldDeltas(orgEvent,absDelta)&&(delta/=40,deltaX/=40,deltaY/=40),delta=Math[delta>=1?"floor":"ceil"](delta/lowestDelta),deltaX=Math[deltaX>=1?"floor":"ceil"](deltaX/lowestDelta),deltaY=Math[deltaY>=1?"floor":"ceil"](deltaY/lowestDelta),event.deltaX=deltaX,event.deltaY=deltaY,event.deltaFactor=lowestDelta,event.deltaMode=0,args.unshift(event,delta,deltaX,deltaY),nullLowestDeltaTimeout&&clearTimeout(nullLowestDeltaTimeout),nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200),($.event.dispatch||$.event.handle).apply(this,args)}}function nullLowestDelta(){lowestDelta=null}function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&"mousewheel"===orgEvent.type&&absDelta%120===0}var nullLowestDeltaTimeout,lowestDelta,toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],slice=Array.prototype.slice;if($.event.fixHooks)for(var i=toFix.length;i;)$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;var special=$.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var i=toBind.length;i;)this.addEventListener(toBind[--i],handler,!1);else this.onmousewheel=handler;$.data(this,"mousewheel-line-height",special.getLineHeight(this)),$.data(this,"mousewheel-page-height",special.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=toBind.length;i;)this.removeEventListener(toBind[--i],handler,!1);else this.onmousewheel=null},getLineHeight:function(elem){return parseInt($(elem)["offsetParent"in $.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:!0}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}})});var jvm={inherits:function(child,parent){function temp(){}temp.prototype=parent.prototype,child.prototype=new temp,child.prototype.constructor=child,child.parentClass=parent},mixin:function(target,source){var prop;for(prop in source.prototype)source.prototype.hasOwnProperty(prop)&&(target.prototype[prop]=source.prototype[prop])},min:function(values){var i,min=Number.MAX_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]<min&&(min=values[i]);else for(i in values)values[i]<min&&(min=values[i]);return min},max:function(values){var i,max=Number.MIN_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]>max&&(max=values[i]);else for(i in values)values[i]>max&&(max=values[i]);return max},keys:function(object){var key,keys=[];for(key in object)keys.push(key);return keys},values:function(object){var key,i,values=[];for(i=0;i<arguments.length;i++){object=arguments[i];for(key in object)values.push(object[key])}return values},whenImageLoaded:function(url){var deferred=new jvm.$.Deferred,img=jvm.$("<img/>");return img.error(function(){deferred.reject()}).load(function(){deferred.resolve(img)}),img.attr("src",url),deferred},isImageUrl:function(s){return/\.\w{3,4}$/.test(s)}};jvm.$=jQuery,Array.prototype.indexOf||(Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(null==this)throw new TypeError('"this" is null or not defined');var O=Object(this),len=O.length>>>0;if(0===len)return-1;var n=+fromIndex||0;if(1/0===Math.abs(n)&&(n=0),n>=len)return-1;for(k=Math.max(n>=0?n:len-Math.abs(n),0);len>k;){if(k in O&&O[k]===searchElement)return k;k++}return-1}),jvm.AbstractElement=function(name,config){this.node=this.createElement(name),this.name=name,this.properties={},config&&this.set(config)},jvm.AbstractElement.prototype.set=function(property,value){var key;if("object"==typeof property)for(key in property)this.properties[key]=property[key],this.applyAttr(key,property[key]);else this.properties[property]=value,this.applyAttr(property,value)},jvm.AbstractElement.prototype.get=function(property){return this.properties[property]},jvm.AbstractElement.prototype.applyAttr=function(property,value){this.node.setAttribute(property,value)},jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove()},jvm.AbstractCanvasElement=function(container,width,height){this.container=container,this.setSize(width,height),this.rootElement=new jvm[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},jvm.AbstractCanvasElement.prototype.add=function(element,group){group=group||this.rootElement,group.add(element),element.canvas=this},jvm.AbstractCanvasElement.prototype.addPath=function(config,style,group){var el=new jvm[this.classPrefix+"PathElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addCircle=function(config,style,group){var el=new jvm[this.classPrefix+"CircleElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addImage=function(config,style,group){var el=new jvm[this.classPrefix+"ImageElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addText=function(config,style,group){var el=new jvm[this.classPrefix+"TextElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addGroup=function(parentGroup){var el=new jvm[this.classPrefix+"GroupElement"];return parentGroup?parentGroup.node.appendChild(el.node):this.node.appendChild(el.node),el.canvas=this,el},jvm.AbstractShapeElement=function(name,config,style){this.style=style||{},this.style.current=this.style.current||{},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},jvm.AbstractShapeElement.prototype.setStyle=function(property,value){var styles={};"object"==typeof property?styles=property:styles[property]=value,jvm.$.extend(this.style.current,styles),this.updateStyle()},jvm.AbstractShapeElement.prototype.updateStyle=function(){var attrs={};jvm.AbstractShapeElement.mergeStyles(attrs,this.style.initial),jvm.AbstractShapeElement.mergeStyles(attrs,this.style.current),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.hover),this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selected),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selectedHover)),this.set(attrs)},jvm.AbstractShapeElement.mergeStyles=function(styles,newStyles){var key;newStyles=newStyles||{};for(key in newStyles)null===newStyles[key]?delete styles[key]:styles[key]=newStyles[key]},jvm.SVGElement=function(){jvm.SVGElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.SVGElement,jvm.AbstractElement),jvm.SVGElement.svgns="http://www.w3.org/2000/svg",jvm.SVGElement.prototype.createElement=function(tagName){return document.createElementNS(jvm.SVGElement.svgns,tagName)},jvm.SVGElement.prototype.addClass=function(className){this.node.setAttribute("class",className)},jvm.SVGElement.prototype.getElementCtr=function(ctr){return jvm["SVG"+ctr]},jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g")},jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement),jvm.SVGGroupElement.prototype.add=function(element){this.node.appendChild(element.node)},jvm.SVGCanvasElement=function(){this.classPrefix="SVG",jvm.SVGCanvasElement.parentClass.call(this,"svg"),this.defsElement=new jvm.SVGElement("defs"),this.node.appendChild(this.defsElement.node),jvm.AbstractCanvasElement.apply(this,arguments)},jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement),jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement),jvm.SVGCanvasElement.prototype.setSize=function(width,height){this.width=width,this.height=height,this.node.setAttribute("width",width),this.node.setAttribute("height",height)},jvm.SVGCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale,this.transX=transX,this.transY=transY,this.rootElement.node.setAttribute("transform","scale("+scale+") translate("+transX+", "+transY+")")},jvm.SVGShapeElement=function(name,config){jvm.SVGShapeElement.parentClass.call(this,name,config),jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement),jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement),jvm.SVGShapeElement.prototype.applyAttr=function(attr,value){var patternEl,imageEl,that=this;"fill"===attr&&jvm.isImageUrl(value)?jvm.SVGShapeElement.images[value]?this.applyAttr("fill","url(#image"+jvm.SVGShapeElement.images[value]+")"):jvm.whenImageLoaded(value).then(function(img){imageEl=new jvm.SVGElement("image"),imageEl.node.setAttributeNS("http://www.w3.org/1999/xlink","href",value),imageEl.applyAttr("x","0"),imageEl.applyAttr("y","0"),imageEl.applyAttr("width",img[0].width),imageEl.applyAttr("height",img[0].height),patternEl=new jvm.SVGElement("pattern"),patternEl.applyAttr("id","image"+jvm.SVGShapeElement.imageCounter),patternEl.applyAttr("x",0),patternEl.applyAttr("y",0),patternEl.applyAttr("width",img[0].width/2),patternEl.applyAttr("height",img[0].height/2),patternEl.applyAttr("viewBox","0 0 "+img[0].width+" "+img[0].height),patternEl.applyAttr("patternUnits","userSpaceOnUse"),patternEl.node.appendChild(imageEl.node),that.canvas.defsElement.node.appendChild(patternEl.node),jvm.SVGShapeElement.images[value]=jvm.SVGShapeElement.imageCounter++,that.applyAttr("fill","url(#image"+jvm.SVGShapeElement.images[value]+")")}):jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.SVGShapeElement.imageCounter=1,jvm.SVGShapeElement.images={},jvm.SVGPathElement=function(config,style){jvm.SVGPathElement.parentClass.call(this,"path",config,style),this.node.setAttribute("fill-rule","evenodd")},jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement),jvm.SVGCircleElement=function(config,style){jvm.SVGCircleElement.parentClass.call(this,"circle",config,style)},jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement),jvm.SVGImageElement=function(config,style){jvm.SVGImageElement.parentClass.call(this,"image",config,style)},jvm.inherits(jvm.SVGImageElement,jvm.SVGShapeElement),jvm.SVGImageElement.prototype.applyAttr=function(attr,value){var that=this;"image"==attr?jvm.whenImageLoaded(value).then(function(img){that.node.setAttributeNS("http://www.w3.org/1999/xlink","href",value),that.width=img[0].width,that.height=img[0].height,that.applyAttr("width",that.width),that.applyAttr("height",that.height),that.applyAttr("x",that.cx-that.width/2),that.applyAttr("y",that.cy-that.height/2),jvm.$(that.node).trigger("imageloaded",[img])}):"cx"==attr?(this.cx=value,this.width&&this.applyAttr("x",value-this.width/2)):"cy"==attr?(this.cy=value,this.height&&this.applyAttr("y",value-this.height/2)):jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.SVGTextElement=function(config,style){jvm.SVGTextElement.parentClass.call(this,"text",config,style)},jvm.inherits(jvm.SVGTextElement,jvm.SVGShapeElement),jvm.SVGTextElement.prototype.applyAttr=function(attr,value){"text"===attr?this.node.textContent=value:jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.VMLElement=function(){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(),jvm.VMLElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.VMLElement,jvm.AbstractElement),jvm.VMLElement.VMLInitialized=!1,jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<rvml:"+tagName+' class="rvml">')}}catch(e){jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<"+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),jvm.VMLElement.VMLInitialized=!0},jvm.VMLElement.prototype.getElementCtr=function(ctr){return jvm["VML"+ctr]},jvm.VMLElement.prototype.addClass=function(className){jvm.$(this.node).addClass(className)},jvm.VMLElement.prototype.applyAttr=function(attr,value){this.node[attr]=value},jvm.VMLElement.prototype.getBBox=function(){var node=jvm.$(this.node);return{x:node.position().left/this.canvas.scale,y:node.position().top/this.canvas.scale,width:node.width()/this.canvas.scale,height:node.height()/this.canvas.scale}},jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement),jvm.VMLGroupElement.prototype.add=function(element){this.node.appendChild(element.node)},jvm.VMLCanvasElement=function(){this.classPrefix="VML",jvm.VMLCanvasElement.parentClass.call(this,"group"),jvm.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement),jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement),jvm.VMLCanvasElement.prototype.setSize=function(width,height){var paths,groups,i,l;if(this.width=width,this.height=height,this.node.style.width=width+"px",this.node.style.height=height+"px",this.node.coordsize=width+" "+height,this.node.coordorigin="0 0",this.rootElement){for(paths=this.rootElement.node.getElementsByTagName("shape"),i=0,l=paths.length;l>i;i++)paths[i].coordsize=width+" "+height,paths[i].style.width=width+"px",paths[i].style.height=height+"px";for(groups=this.node.getElementsByTagName("group"),i=0,l=groups.length;l>i;i++)groups[i].coordsize=width+" "+height,groups[i].style.width=width+"px",groups[i].style.height=height+"px"}},jvm.VMLCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale,this.transX=transX,this.transY=transY,this.rootElement.node.coordorigin=this.width-transX-this.width/100+","+(this.height-transY-this.height/100),this.rootElement.node.coordsize=this.width/scale+","+this.height/scale},jvm.VMLShapeElement=function(name,config){jvm.VMLShapeElement.parentClass.call(this,name,config),this.fillElement=new jvm.VMLElement("fill"),this.strokeElement=new jvm.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement),jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement),jvm.VMLShapeElement.prototype.applyAttr=function(attr,value){switch(attr){case"fill":this.node.fillcolor=value;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(100*value)+"%";break;case"stroke":this.node.stroked="none"===value?!1:!0,this.node.strokecolor=value;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(100*value)+"%";break;case"stroke-width":this.node.stroked=0===parseInt(value,10)?!1:!0,this.node.strokeweight=value;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(value);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},jvm.VMLPathElement=function(config,style){var scale=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",config,style),this.node.coordorigin="0 0",scale.node.on=!0,scale.node.matrix="0.01,0,0,0.01,0,0",scale.node.offset="0,0",this.node.appendChild(scale.node)},jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement),jvm.VMLPathElement.prototype.applyAttr=function(attr,value){"d"===attr?this.node.path=jvm.VMLPathElement.pathSvgToVml(value):jvm.VMLShapeElement.prototype.applyAttr.call(this,attr,value)},jvm.VMLPathElement.pathSvgToVml=function(path){var ctrlx,ctrly,cx=0,cy=0;return path=path.replace(/(-?\d+)e(-?\d+)/g,"0"),path.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(segment,letter,coords){coords=coords.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","),coords[0]||coords.shift();for(var i=0,l=coords.length;l>i;i++)coords[i]=Math.round(100*coords[i]);switch(letter){case"m":return cx+=coords[0],cy+=coords[1],"t"+coords.join(",");case"M":return cx=coords[0],cy=coords[1],"m"+coords.join(",");case"l":return cx+=coords[0],cy+=coords[1],"r"+coords.join(",");case"L":return cx=coords[0],cy=coords[1],"l"+coords.join(",");case"h":return cx+=coords[0],"r"+coords[0]+",0";case"H":return cx=coords[0],"l"+cx+","+cy;case"v":return cy+=coords[0],"r0,"+coords[0];case"V":return cy=coords[0],"l"+cx+","+cy;case"c":return ctrlx=cx+coords[coords.length-4],ctrly=cy+coords[coords.length-3],cx+=coords[coords.length-2],cy+=coords[coords.length-1],"v"+coords.join(",");case"C":return ctrlx=coords[coords.length-4],ctrly=coords[coords.length-3],cx=coords[coords.length-2],cy=coords[coords.length-1],"c"+coords.join(",");case"s":return coords.unshift(cy-ctrly),coords.unshift(cx-ctrlx),ctrlx=cx+coords[coords.length-4],ctrly=cy+coords[coords.length-3],cx+=coords[coords.length-2],cy+=coords[coords.length-1],"v"+coords.join(",");case"S":return coords.unshift(cy+cy-ctrly),coords.unshift(cx+cx-ctrlx),ctrlx=coords[coords.length-4],ctrly=coords[coords.length-3],cx=coords[coords.length-2],cy=coords[coords.length-1],"c"+coords.join(",")}return""}).replace(/z/g,"e")},jvm.VMLCircleElement=function(config,style){jvm.VMLCircleElement.parentClass.call(this,"oval",config,style)},jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement),jvm.VMLCircleElement.prototype.applyAttr=function(attr,value){switch(attr){case"r":this.node.style.width=2*value+"px",this.node.style.height=2*value+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!value)return;this.node.style.left=value-(this.get("r")||0)+"px";break;case"cy":if(!value)return;this.node.style.top=value-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,attr,value)}},jvm.VectorCanvas=function(container,width,height){return this.mode=window.SVGAngle?"svg":"vml",this.impl="svg"==this.mode?new jvm.SVGCanvasElement(container,width,height):new jvm.VMLCanvasElement(container,width,height),this.impl.mode=this.mode,this.impl},jvm.SimpleScale=function(scale){this.scale=scale},jvm.SimpleScale.prototype.getValue=function(value){return value},jvm.OrdinalScale=function(scale){this.scale=scale},jvm.OrdinalScale.prototype.getValue=function(value){return this.scale[value]},jvm.OrdinalScale.prototype.getTicks=function(){var key,ticks=[];for(key in this.scale)ticks.push({label:key,value:this.scale[key]});return ticks},jvm.NumericScale=function(scale,normalizeFunction,minValue,maxValue){this.scale=[],normalizeFunction=normalizeFunction||"linear",scale&&this.setScale(scale),normalizeFunction&&this.setNormalizeFunction(normalizeFunction),"undefined"!=typeof minValue&&this.setMin(minValue),"undefined"!=typeof maxValue&&this.setMax(maxValue)},jvm.NumericScale.prototype={setMin:function(min){this.clearMinValue=min,this.minValue="function"==typeof this.normalize?this.normalize(min):min},setMax:function(max){this.clearMaxValue=max,this.maxValue="function"==typeof this.normalize?this.normalize(max):max},setScale:function(scale){var i;for(this.scale=[],i=0;i<scale.length;i++)this.scale[i]=[scale[i]]},setNormalizeFunction:function(f){"polynomial"===f?this.normalize=function(value){return Math.pow(value,.2)}:"linear"===f?delete this.normalize:this.normalize=f,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(value){var l,c,lengthes=[],fullLength=0,i=0;for("function"==typeof this.normalize&&(value=this.normalize(value)),i=0;i<this.scale.length-1;i++)l=this.vectorLength(this.vectorSubtract(this.scale[i+1],this.scale[i])),lengthes.push(l),fullLength+=l;for(c=(this.maxValue-this.minValue)/fullLength,i=0;i<lengthes.length;i++)lengthes[i]*=c;for(i=0,value-=this.minValue;value-lengthes[i]>=0;)value-=lengthes[i],i++;return value=this.vectorToNum(i==this.scale.length-1?this.scale[i]:this.vectorAdd(this.scale[i],this.vectorMult(this.vectorSubtract(this.scale[i+1],this.scale[i]),value/lengthes[i])))},vectorToNum:function(vector){var i,num=0;for(i=0;i<vector.length;i++)num+=Math.round(vector[i])*Math.pow(256,vector.length-i-1);return num},vectorSubtract:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]-vector2[i];return vector},vectorAdd:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]+vector2[i];return vector},vectorMult:function(vector,num){var i,result=[];for(i=0;i<vector.length;i++)result[i]=vector[i]*num;return result},vectorLength:function(vector){var i,result=0;for(i=0;i<vector.length;i++)result+=vector[i]*vector[i];return Math.sqrt(result)},getTicks:function(){var tick,v,m=5,extent=[this.clearMinValue,this.clearMaxValue],span=extent[1]-extent[0],step=Math.pow(10,Math.floor(Math.log(span/m)/Math.LN10)),err=m/span*step,ticks=[];for(.15>=err?step*=10:.35>=err?step*=5:.75>=err&&(step*=2),extent[0]=Math.floor(extent[0]/step)*step,extent[1]=Math.ceil(extent[1]/step)*step,tick=extent[0];tick<=extent[1];)v=tick==extent[0]?this.clearMinValue:tick==extent[1]?this.clearMaxValue:tick,ticks.push({label:tick,value:this.getValue(v)}),tick+=step;return ticks}},jvm.ColorScale=function(){jvm.ColorScale.parentClass.apply(this,arguments)},jvm.inherits(jvm.ColorScale,jvm.NumericScale),jvm.ColorScale.prototype.setScale=function(scale){var i;for(i=0;i<scale.length;i++)this.scale[i]=jvm.ColorScale.rgbToArray(scale[i])},jvm.ColorScale.prototype.getValue=function(value){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,value))},jvm.ColorScale.arrayToRgb=function(ar){var d,i,rgb="#";for(i=0;i<ar.length;i++)d=ar[i].toString(16),rgb+=1==d.length?"0"+d:d;return rgb},jvm.ColorScale.numToRgb=function(num){for(num=num.toString(16);num.length<6;)num="0"+num;return"#"+num},jvm.ColorScale.rgbToArray=function(rgb){return rgb=rgb.substr(1),[parseInt(rgb.substr(0,2),16),parseInt(rgb.substr(2,2),16),parseInt(rgb.substr(4,2),16)]},jvm.Legend=function(params){this.params=params||{},this.map=this.params.map,this.series=this.params.series,this.body=jvm.$("<div/>"),this.body.addClass("jvectormap-legend"),this.params.cssClass&&this.body.addClass(this.params.cssClass),params.vertical?this.map.legendCntVertical.append(this.body):this.map.legendCntHorizontal.append(this.body),this.render()},jvm.Legend.prototype.render=function(){var i,tick,sample,label,ticks=this.series.scale.getTicks(),inner=jvm.$("<div/>").addClass("jvectormap-legend-inner");for(this.body.html(""),this.params.title&&this.body.append(jvm.$("<div/>").addClass("jvectormap-legend-title").html(this.params.title)),this.body.append(inner),i=0;i<ticks.length;i++){switch(tick=jvm.$("<div/>").addClass("jvectormap-legend-tick"),sample=jvm.$("<div/>").addClass("jvectormap-legend-tick-sample"),this.series.params.attribute){case"fill":jvm.isImageUrl(ticks[i].value)?sample.css("background","url("+ticks[i].value+")"):sample.css("background",ticks[i].value);break;case"stroke":sample.css("background",ticks[i].value);break;case"image":sample.css("background","url("+ticks[i].value+") no-repeat center center");break;case"r":jvm.$("<div/>").css({"border-radius":ticks[i].value,border:this.map.params.markerStyle.initial["stroke-width"]+"px "+this.map.params.markerStyle.initial.stroke+" solid",width:2*ticks[i].value+"px",height:2*ticks[i].value+"px",background:this.map.params.markerStyle.initial.fill}).appendTo(sample)}tick.append(sample),label=ticks[i].label,this.params.labelRender&&(label=this.params.labelRender(label)),tick.append(jvm.$("<div>"+label+" </div>").addClass("jvectormap-legend-tick-text")),inner.append(tick)}inner.append(jvm.$("<div/>").css("clear","both"))},jvm.DataSeries=function(params,elements,map){var scaleConstructor;params=params||{},params.attribute=params.attribute||"fill",this.elements=elements,this.params=params,this.map=map,params.attributes&&this.setAttributes(params.attributes),jvm.$.isArray(params.scale)?(scaleConstructor="fill"===params.attribute||"stroke"===params.attribute?jvm.ColorScale:jvm.NumericScale,this.scale=new scaleConstructor(params.scale,params.normalizeFunction,params.min,params.max)):this.scale=params.scale?new jvm.OrdinalScale(params.scale):new jvm.SimpleScale(params.scale),this.values=params.values||{},this.setValues(this.values),this.params.legend&&(this.legend=new jvm.Legend($.extend({map:this.map,series:this},this.params.legend)))},jvm.DataSeries.prototype={setAttributes:function(key,attr){var code,attrs=key;if("string"==typeof key)this.elements[key]&&this.elements[key].setStyle(this.params.attribute,attr);else for(code in attrs)this.elements[code]&&this.elements[code].element.setStyle(this.params.attribute,attrs[code])},setValues:function(values){var val,cc,max=-Number.MAX_VALUE,min=Number.MAX_VALUE,attrs={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(cc in values)attrs[cc]=values[cc]?this.scale.getValue(values[cc]):this.elements[cc].element.style.initial[this.params.attribute];else{if("undefined"==typeof this.params.min||"undefined"==typeof this.params.max)for(cc in values)val=parseFloat(values[cc]),val>max&&(max=val),min>val&&(min=val);"undefined"==typeof this.params.min?(this.scale.setMin(min),this.params.min=min):this.scale.setMin(this.params.min),"undefined"==typeof this.params.max?(this.scale.setMax(max),this.params.max=max):this.scale.setMax(this.params.max);for(cc in values)"indexOf"!=cc&&(val=parseFloat(values[cc]),attrs[cc]=isNaN(val)?this.elements[cc].element.style.initial[this.params.attribute]:this.scale.getValue(val))}this.setAttributes(attrs),jvm.$.extend(this.values,values)},clear:function(){var key,attrs={};for(key in this.values)this.elements[key]&&(attrs[key]=this.elements[key].element.shape.style.initial[this.params.attribute]);this.setAttributes(attrs),this.values={}},setScale:function(scale){this.scale.setScale(scale),this.values&&this.setValues(this.values)},setNormalizeFunction:function(f){this.scale.setNormalizeFunction(f),this.values&&this.setValues(this.values)}},jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(n){return n>0?1:0>n?-1:n},mill:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*lat)*this.radDeg))/.8}},mill_inv:function(x,y,c){return{lat:(2.5*Math.atan(Math.exp(.8*y/this.radius))-5*Math.PI/8)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},merc:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))}},merc_inv:function(x,y,c){return{lat:(2*Math.atan(Math.exp(y/this.radius))-Math.PI/2)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},aea:function(lat,lng,c){var fi0=0,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,fi=lat*this.radDeg,lambda=lng*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),theta=n*(lambda-lambda0),ro=Math.sqrt(C-2*n*Math.sin(fi))/n,ro0=Math.sqrt(C-2*n*Math.sin(fi0))/n;return{x:ro*Math.sin(theta)*this.radius,y:-(ro0-ro*Math.cos(theta))*this.radius}},aea_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,fi0=0,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),ro0=Math.sqrt(C-2*n*Math.sin(fi0))/n,ro=Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:Math.asin((C-ro*ro*n*n)/(2*n))*this.degRad,lng:(lambda0+theta/n)*this.degRad}},lcc:function(lat,lng,c){var fi0=0,lambda0=c*this.radDeg,lambda=lng*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,fi=lat*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro=F*Math.pow(1/Math.tan(Math.PI/4+fi/2),n),ro0=F*Math.pow(1/Math.tan(Math.PI/4+fi0/2),n);return{x:ro*Math.sin(n*(lambda-lambda0))*this.radius,y:-(ro0-ro*Math.cos(n*(lambda-lambda0)))*this.radius}},lcc_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,fi0=0,lambda0=c*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro0=F*Math.pow(1/Math.tan(Math.PI/4+fi0/2),n),ro=this.sgn(n)*Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:(2*Math.atan(Math.pow(F/ro,1/n))-Math.PI/2)*this.degRad,lng:(lambda0+theta/n)*this.degRad}}},jvm.MapObject=function(){},jvm.MapObject.prototype.getLabelText=function(key){var text;return text=this.config.label?"function"==typeof this.config.label.render?this.config.label.render(key):key:null},jvm.MapObject.prototype.getLabelOffsets=function(key){var offsets;return this.config.label&&("function"==typeof this.config.label.offsets?offsets=this.config.label.offsets(key):"object"==typeof this.config.label.offsets&&(offsets=this.config.label.offsets[key])),offsets||[0,0]},jvm.MapObject.prototype.setHovered=function(isHovered){this.isHovered!==isHovered&&(this.isHovered=isHovered,this.shape.isHovered=isHovered,this.shape.updateStyle(),this.label&&(this.label.isHovered=isHovered,this.label.updateStyle()))},jvm.MapObject.prototype.setSelected=function(isSelected){this.isSelected!==isSelected&&(this.isSelected=isSelected,this.shape.isSelected=isSelected,this.shape.updateStyle(),this.label&&(this.label.isSelected=isSelected,this.label.updateStyle()),jvm.$(this.shape).trigger("selected",[isSelected]))},jvm.MapObject.prototype.setStyle=function(){this.shape.setStyle.apply(this.shape,arguments)},jvm.MapObject.prototype.remove=function(){this.shape.remove(),this.label&&this.label.remove()},jvm.Region=function(config){var bbox,text,offsets;this.config=config,this.map=this.config.map,this.shape=config.canvas.addPath({d:config.path,"data-code":config.code},config.style,config.canvas.rootElement),this.shape.addClass("jvectormap-region jvectormap-element"),bbox=this.shape.getBBox(),text=this.getLabelText(config.code),this.config.label&&text&&(offsets=this.getLabelOffsets(config.code),this.labelX=bbox.x+bbox.width/2+offsets[0],this.labelY=bbox.y+bbox.height/2+offsets[1],this.label=config.canvas.addText({text:text,"text-anchor":"middle","alignment-baseline":"central",x:this.labelX,y:this.labelY,"data-code":config.code},config.labelStyle,config.labelsGroup),this.label.addClass("jvectormap-region jvectormap-element"))
},jvm.inherits(jvm.Region,jvm.MapObject),jvm.Region.prototype.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this.map.scale+this.map.transX*this.map.scale,y:this.labelY*this.map.scale+this.map.transY*this.map.scale})},jvm.Marker=function(config){var text;this.config=config,this.map=this.config.map,this.isImage=!!this.config.style.initial.image,this.createShape(),text=this.getLabelText(config.index),this.config.label&&text&&(this.offsets=this.getLabelOffsets(config.index),this.labelX=config.cx/this.map.scale-this.map.transX,this.labelY=config.cy/this.map.scale-this.map.transY,this.label=config.canvas.addText({text:text,"data-index":config.index,dy:"0.6ex",x:this.labelX,y:this.labelY},config.labelStyle,config.labelsGroup),this.label.addClass("jvectormap-marker jvectormap-element"))},jvm.inherits(jvm.Marker,jvm.MapObject),jvm.Marker.prototype.createShape=function(){var that=this;this.shape&&this.shape.remove(),this.shape=this.config.canvas[this.isImage?"addImage":"addCircle"]({"data-index":this.config.index,cx:this.config.cx,cy:this.config.cy},this.config.style,this.config.group),this.shape.addClass("jvectormap-marker jvectormap-element"),this.isImage&&jvm.$(this.shape.node).on("imageloaded",function(){that.updateLabelPosition()})},jvm.Marker.prototype.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this.map.scale+this.offsets[0]+this.map.transX*this.map.scale+5+(this.isImage?(this.shape.width||0)/2:this.shape.properties.r),y:this.labelY*this.map.scale+this.map.transY*this.map.scale+this.offsets[1]})},jvm.Marker.prototype.setStyle=function(property){var isImage;jvm.Marker.parentClass.prototype.setStyle.apply(this,arguments),"r"===property&&this.updateLabelPosition(),isImage=!!this.shape.get("image"),isImage!=this.isImage&&(this.isImage=isImage,this.config.style=jvm.$.extend(!0,{},this.shape.style),this.createShape())},jvm.Map=function(params){var e,map=this;if(this.params=jvm.$.extend(!0,{},jvm.Map.defaultParams,params),!jvm.Map.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=jvm.Map.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=jvm.$("<div>").addClass("jvectormap-container"),this.params.container&&this.params.container.append(this.container),this.container.data("mapObject",this),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){map.updateSize()},jvm.$(window).resize(this.onResize);for(e in jvm.Map.apiEvents)this.params[e]&&this.container.bind(jvm.Map.apiEvents[e]+".jvectormap",this.params[e]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height),this.params.bindTouchEvents&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.bindContainerTouchEvents():window.MSGesture&&this.bindContainerPointerEvents()),this.bindContainerEvents(),this.bindElementEvents(),this.createTip(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.updateSize(),this.params.focusOn&&("string"==typeof this.params.focusOn?this.params.focusOn={region:this.params.focusOn}:jvm.$.isArray(this.params.focusOn)&&(this.params.focusOn={regions:this.params.focusOn}),this.setFocus(this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.legendCntHorizontal=jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h"),this.legendCntVertical=jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v"),this.container.append(this.legendCntHorizontal),this.container.append(this.legendCntVertical),this.params.series&&this.createSeries()},jvm.Map.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(backgroundColor){this.container.css("background-color",backgroundColor)},resize:function(){var curBaseScale=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/curBaseScale,this.transX*=this.baseScale/curBaseScale,this.transY*=this.baseScale/curBaseScale},updateSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var key,i;for(key in this.series)for(i=0;i<this.series[key].length;i++)this.series[key][i].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var maxTransX,maxTransY,minTransX,minTransY;this.defaultWidth*this.scale<=this.width?(maxTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale),minTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(maxTransX=0,minTransX=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(maxTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale),minTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(maxTransY=0,minTransY=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>maxTransY?this.transY=maxTransY:this.transY<minTransY&&(this.transY=minTransY),this.transX>maxTransX?this.transX=maxTransX:this.transX<minTransX&&(this.transX=minTransX),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.repositionLabels(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var oldPageX,oldPageY,mouseDown=!1,map=this;this.params.panOnDrag&&(this.container.mousemove(function(e){return mouseDown&&(map.transX-=(oldPageX-e.pageX)/map.scale,map.transY-=(oldPageY-e.pageY)/map.scale,map.applyTransform(),oldPageX=e.pageX,oldPageY=e.pageY),!1}).mousedown(function(e){return mouseDown=!0,oldPageX=e.pageX,oldPageY=e.pageY,!1}),this.onContainerMouseUp=function(){mouseDown=!1},jvm.$("body").mouseup(this.onContainerMouseUp)),this.params.zoomOnScroll&&this.container.mousewheel(function(event){var offset=jvm.$(map.container).offset(),centerX=event.pageX-offset.left,centerY=event.pageY-offset.top,zoomStep=Math.pow(1+map.params.zoomOnScrollSpeed/1e3,event.deltaFactor*event.deltaY);map.tip.hide(),map.setScale(map.scale*zoomStep,centerX,centerY),event.preventDefault()})},bindContainerTouchEvents:function(){var touchStartScale,touchStartDistance,touchX,touchY,centerTouchX,centerTouchY,lastTouchesLength,map=this,handleTouchEvent=function(e){var offset,scale,transXOld,transYOld,touches=e.originalEvent.touches;"touchstart"==e.type&&(lastTouchesLength=0),1==touches.length?(1==lastTouchesLength&&(transXOld=map.transX,transYOld=map.transY,map.transX-=(touchX-touches[0].pageX)/map.scale,map.transY-=(touchY-touches[0].pageY)/map.scale,map.applyTransform(),map.tip.hide(),(transXOld!=map.transX||transYOld!=map.transY)&&e.preventDefault()),touchX=touches[0].pageX,touchY=touches[0].pageY):2==touches.length&&(2==lastTouchesLength?(scale=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2))/touchStartDistance,map.setScale(touchStartScale*scale,centerTouchX,centerTouchY),map.tip.hide(),e.preventDefault()):(offset=jvm.$(map.container).offset(),centerTouchX=touches[0].pageX>touches[1].pageX?touches[1].pageX+(touches[0].pageX-touches[1].pageX)/2:touches[0].pageX+(touches[1].pageX-touches[0].pageX)/2,centerTouchY=touches[0].pageY>touches[1].pageY?touches[1].pageY+(touches[0].pageY-touches[1].pageY)/2:touches[0].pageY+(touches[1].pageY-touches[0].pageY)/2,centerTouchX-=offset.left,centerTouchY-=offset.top,touchStartScale=map.scale,touchStartDistance=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2)))),lastTouchesLength=touches.length};jvm.$(this.container).bind("touchstart",handleTouchEvent),jvm.$(this.container).bind("touchmove",handleTouchEvent)},bindContainerPointerEvents:function(){var map=this,gesture=new MSGesture,element=this.container[0],handlePointerDownEvent=function(e){gesture.addPointer(e.pointerId)},handleGestureEvent=function(e){var transXOld,transYOld;(0!=e.translationX||0!=e.translationY)&&(transXOld=map.transX,transYOld=map.transY,map.transX+=e.translationX/map.scale,map.transY+=e.translationY/map.scale,map.applyTransform(),map.tip.hide(),(transXOld!=map.transX||transYOld!=map.transY)&&e.preventDefault()),1!=e.scale&&(map.setScale(map.scale*e.scale,e.offsetX,e.offsetY),map.tip.hide(),e.preventDefault())};gesture.target=element,element.addEventListener("MSGestureChange",handleGestureEvent,!1),element.addEventListener("pointerdown",handlePointerDownEvent,!1)},bindElementEvents:function(){var pageX,pageY,mouseMoved,map=this;this.container.mousemove(function(e){Math.abs(pageX-e.pageX)+Math.abs(pageY-e.pageY)>2&&(mouseMoved=!0)}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(e){var baseVal=jvm.$(this).attr("class").baseVal||jvm.$(this).attr("class"),type=-1===baseVal.indexOf("jvectormap-region")?"marker":"region",code=jvm.$(this).attr("region"==type?"data-code":"data-index"),element="region"==type?map.regions[code].element:map.markers[code].element,tipText="region"==type?map.mapData.paths[code].name:map.markers[code].config.name||"",tipShowEvent=jvm.$.Event(type+"TipShow.jvectormap"),overEvent=jvm.$.Event(type+"Over.jvectormap");"mouseover"==e.type?(map.container.trigger(overEvent,[code]),overEvent.isDefaultPrevented()||element.setHovered(!0),map.tip.text(tipText),map.container.trigger(tipShowEvent,[map.tip,code]),tipShowEvent.isDefaultPrevented()||(map.tip.show(),map.tipWidth=map.tip.width(),map.tipHeight=map.tip.height())):(element.setHovered(!1),map.tip.hide(),map.container.trigger(type+"Out.jvectormap",[code]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(e){pageX=e.pageX,pageY=e.pageY,mouseMoved=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(){var baseVal=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),type=-1===baseVal.indexOf("jvectormap-region")?"marker":"region",code=jvm.$(this).attr("region"==type?"data-code":"data-index"),clickEvent=jvm.$.Event(type+"Click.jvectormap"),element="region"==type?map.regions[code].element:map.markers[code].element;mouseMoved||(map.container.trigger(clickEvent,[code]),("region"===type&&map.params.regionsSelectable||"marker"===type&&map.params.markersSelectable)&&(clickEvent.isDefaultPrevented()||(map.params[type+"sSelectableOne"]&&map.clearSelected(type+"s"),element.setSelected(!element.isSelected))))})},bindZoomButtons:function(){var map=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){map.setScale(map.scale*map.params.zoomStep,map.width/2,map.height/2,!1,map.params.zoomAnimate)}),this.container.find(".jvectormap-zoomout").click(function(){map.setScale(map.scale/map.params.zoomStep,map.width/2,map.height/2,!1,map.params.zoomAnimate)})},createTip:function(){var map=this;this.tip=jvm.$("<div/>").addClass("jvectormap-tip").appendTo(jvm.$("body")),this.container.mousemove(function(e){var left=e.pageX-15-map.tipWidth,top=e.pageY-15-map.tipHeight;5>left&&(left=e.pageX+15),5>top&&(top=e.pageY+15),map.tip.css({left:left,top:top})})},setScale:function(scale,anchorX,anchorY,isCentered,animate){var interval,scaleStart,scaleDiff,transXStart,transXDiff,transYStart,transYDiff,transX,transY,viewportChangeEvent=jvm.$.Event("zoom.jvectormap"),that=this,i=0,count=Math.abs(Math.round(60*(scale-this.scale)/Math.max(scale,this.scale))),deferred=new jvm.$.Deferred;return scale>this.params.zoomMax*this.baseScale?scale=this.params.zoomMax*this.baseScale:scale<this.params.zoomMin*this.baseScale&&(scale=this.params.zoomMin*this.baseScale),"undefined"!=typeof anchorX&&"undefined"!=typeof anchorY&&(zoomStep=scale/this.scale,isCentered?(transX=anchorX+this.defaultWidth*(this.width/(this.defaultWidth*scale))/2,transY=anchorY+this.defaultHeight*(this.height/(this.defaultHeight*scale))/2):(transX=this.transX-(zoomStep-1)/scale*anchorX,transY=this.transY-(zoomStep-1)/scale*anchorY)),animate&&count>0?(scaleStart=this.scale,scaleDiff=(scale-scaleStart)/count,transXStart=this.transX*this.scale,transYStart=this.transY*this.scale,transXDiff=(transX*scale-transXStart)/count,transYDiff=(transY*scale-transYStart)/count,interval=setInterval(function(){i+=1,that.scale=scaleStart+scaleDiff*i,that.transX=(transXStart+transXDiff*i)/that.scale,that.transY=(transYStart+transYDiff*i)/that.scale,that.applyTransform(),i==count&&(clearInterval(interval),that.container.trigger(viewportChangeEvent,[scale/that.baseScale]),deferred.resolve())},10)):(this.transX=transX,this.transY=transY,this.scale=scale,this.applyTransform(),this.container.trigger(viewportChangeEvent,[scale/this.baseScale]),deferred.resolve()),deferred},setFocus:function(config){var bbox,itemBbox,newBbox,codes,i,point;if(config=config||{},config.region?codes=[config.region]:config.regions&&(codes=config.regions),codes){for(i=0;i<codes.length;i++)this.regions[codes[i]]&&(itemBbox=this.regions[codes[i]].element.shape.getBBox(),itemBbox&&("undefined"==typeof bbox?bbox=itemBbox:(newBbox={x:Math.min(bbox.x,itemBbox.x),y:Math.min(bbox.y,itemBbox.y),width:Math.max(bbox.x+bbox.width,itemBbox.x+itemBbox.width)-Math.min(bbox.x,itemBbox.x),height:Math.max(bbox.y+bbox.height,itemBbox.y+itemBbox.height)-Math.min(bbox.y,itemBbox.y)},bbox=newBbox)));return this.setScale(Math.min(this.width/bbox.width,this.height/bbox.height),-(bbox.x+bbox.width/2),-(bbox.y+bbox.height/2),!0,config.animate)}return config.lat&&config.lng?(point=this.latLngToPoint(config.lat,config.lng),config.x=this.transX-point.x/this.scale,config.y=this.transY-point.y/this.scale):config.x&&config.y&&(config.x*=-this.defaultWidth,config.y*=-this.defaultHeight),this.setScale(config.scale*this.baseScale,config.x,config.y,!0,config.animate)},getSelected:function(type){var key,selected=[];for(key in this[type])this[type][key].element.isSelected&&selected.push(key);return selected},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(type,keys){var i;if("object"!=typeof keys&&(keys=[keys]),jvm.$.isArray(keys))for(i=0;i<keys.length;i++)this[type][keys[i]].element.setSelected(!0);else for(i in keys)this[type][i].element.setSelected(!!keys[i])},setSelectedRegions:function(keys){this.setSelected("regions",keys)},setSelectedMarkers:function(keys){this.setSelected("markers",keys)},clearSelected:function(type){var i,select={},selected=this.getSelected(type);for(i=0;i<selected.length;i++)select[selected[i]]=!1;this.setSelected(type,select)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(code){return this.mapData.paths[code].name},createRegions:function(){var key,region,map=this;this.regionLabelsGroup=this.regionLabelsGroup||this.canvas.addGroup();for(key in this.mapData.paths)region=new jvm.Region({map:this,path:this.mapData.paths[key].path,code:key,style:jvm.$.extend(!0,{},this.params.regionStyle),labelStyle:jvm.$.extend(!0,{},this.params.regionLabelStyle),canvas:this.canvas,labelsGroup:this.regionLabelsGroup,label:"vml"!=this.canvas.mode?this.params.labels&&this.params.labels.regions:null}),jvm.$(region.shape).bind("selected",function(e,isSelected){map.container.trigger("regionSelected.jvectormap",[jvm.$(this.node).attr("data-code"),isSelected,map.getSelectedRegions()])}),this.regions[key]={element:region,config:this.mapData.paths[key]}},createMarkers:function(markers){var i,marker,point,markerConfig,markersArray,map=this;if(this.markersGroup=this.markersGroup||this.canvas.addGroup(),this.markerLabelsGroup=this.markerLabelsGroup||this.canvas.addGroup(),jvm.$.isArray(markers))for(markersArray=markers.slice(),markers={},i=0;i<markersArray.length;i++)markers[i]=markersArray[i];for(i in markers)markerConfig=markers[i]instanceof Array?{latLng:markers[i]}:markers[i],point=this.getMarkerPosition(markerConfig),point!==!1&&(marker=new jvm.Marker({map:this,style:jvm.$.extend(!0,{},this.params.markerStyle,{initial:markerConfig.style||{}}),labelStyle:jvm.$.extend(!0,{},this.params.markerLabelStyle),index:i,cx:point.x,cy:point.y,group:this.markersGroup,canvas:this.canvas,labelsGroup:this.markerLabelsGroup,label:"vml"!=this.canvas.mode?this.params.labels&&this.params.labels.markers:null}),jvm.$(marker.shape).bind("selected",function(e,isSelected){map.container.trigger("markerSelected.jvectormap",[jvm.$(this.node).attr("data-index"),isSelected,map.getSelectedMarkers()])}),this.markers[i]&&this.removeMarkers([i]),this.markers[i]={element:marker,config:markerConfig})},repositionMarkers:function(){var i,point;for(i in this.markers)point=this.getMarkerPosition(this.markers[i].config),point!==!1&&this.markers[i].element.setStyle({cx:point.x,cy:point.y})},repositionLabels:function(){var key;for(key in this.regions)this.regions[key].element.updateLabelPosition();for(key in this.markers)this.markers[key].element.updateLabelPosition()},getMarkerPosition:function(markerConfig){return jvm.Map.maps[this.params.map].projection?this.latLngToPoint.apply(this,markerConfig.latLng||[0,0]):{x:markerConfig.coords[0]*this.scale+this.transX*this.scale,y:markerConfig.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(key,marker,seriesData){var values,i,markers={},data=[],seriesData=seriesData||[];for(markers[key]=marker,i=0;i<seriesData.length;i++)values={},"undefined"!=typeof seriesData[i]&&(values[key]=seriesData[i]),data.push(values);this.addMarkers(markers,data)},addMarkers:function(markers,seriesData){var i;for(seriesData=seriesData||[],this.createMarkers(markers),i=0;i<seriesData.length;i++)this.series.markers[i].setValues(seriesData[i]||{})},removeMarkers:function(markers){var i;for(i=0;i<markers.length;i++)this.markers[markers[i]].element.remove(),delete this.markers[markers[i]]},removeAllMarkers:function(){var i,markers=[];for(i in this.markers)markers.push(i);this.removeMarkers(markers)},latLngToPoint:function(lat,lng){var point,inset,bbox,proj=jvm.Map.maps[this.params.map].projection,centralMeridian=proj.centralMeridian;return-180+centralMeridian>lng&&(lng+=360),point=jvm.Proj[proj.type](lat,lng,centralMeridian),inset=this.getInsetForPoint(point.x,point.y),inset?(bbox=inset.bbox,point.x=(point.x-bbox[0].x)/(bbox[1].x-bbox[0].x)*inset.width*this.scale,point.y=(point.y-bbox[0].y)/(bbox[1].y-bbox[0].y)*inset.height*this.scale,{x:point.x+this.transX*this.scale+inset.left*this.scale,y:point.y+this.transY*this.scale+inset.top*this.scale}):!1},pointToLatLng:function(x,y){var i,inset,bbox,nx,ny,proj=jvm.Map.maps[this.params.map].projection,centralMeridian=proj.centralMeridian,insets=jvm.Map.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(inset=insets[i],bbox=inset.bbox,nx=x-(this.transX*this.scale+inset.left*this.scale),ny=y-(this.transY*this.scale+inset.top*this.scale),nx=nx/(inset.width*this.scale)*(bbox[1].x-bbox[0].x)+bbox[0].x,ny=ny/(inset.height*this.scale)*(bbox[1].y-bbox[0].y)+bbox[0].y,nx>bbox[0].x&&nx<bbox[1].x&&ny>bbox[0].y&&ny<bbox[1].y)return jvm.Proj[proj.type+"_inv"](nx,-ny,centralMeridian);return!1},getInsetForPoint:function(x,y){var i,bbox,insets=jvm.Map.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(bbox=insets[i].bbox,x>bbox[0].x&&x<bbox[1].x&&y>bbox[0].y&&y<bbox[1].y)return insets[i]},createSeries:function(){var i,key;this.series={markers:[],regions:[]};for(key in this.params.series)for(i=0;i<this.params.series[key].length;i++)this.series[key][i]=new jvm.DataSeries(this.params.series[key][i],this[key],this)},remove:function(){this.tip.remove(),this.container.remove(),jvm.$(window).unbind("resize",this.onResize),jvm.$("body").unbind("mouseup",this.onContainerMouseUp)}},jvm.Map.maps={},jvm.Map.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomOnScrollSpeed:3,panOnDrag:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,zoomAnimate:!0,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8,cursor:"pointer"},selected:{fill:"yellow"},selectedHover:{}},regionLabelStyle:{initial:{"font-family":"Verdana","font-size":"12","font-weight":"bold",cursor:"default",fill:"black"},hover:{cursor:"pointer"}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2,cursor:"pointer"},selected:{fill:"blue"},selectedHover:{}},markerLabelStyle:{initial:{"font-family":"Verdana","font-size":"12","font-weight":"bold",cursor:"default",fill:"black"},hover:{cursor:"pointer"}}},jvm.Map.apiEvents={onRegionTipShow:"regionTipShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerTipShow:"markerTipShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"},jvm.MultiMap=function(params){var that=this;this.maps={},this.params=jvm.$.extend(!0,{},jvm.MultiMap.defaultParams,params),this.params.maxLevel=this.params.maxLevel||Number.MAX_VALUE,this.params.main=this.params.main||{},this.params.main.multiMapLevel=0,this.history=[this.addMap(this.params.main.map,this.params.main)],this.defaultProjection=this.history[0].mapData.projection.type,this.mapsLoaded={},this.params.container.css({position:"relative"}),this.backButton=jvm.$("<div/>").addClass("jvectormap-goback").text("Back").appendTo(this.params.container),this.backButton.hide(),this.backButton.click(function(){that.goBack()}),this.spinner=jvm.$("<div/>").addClass("jvectormap-spinner").appendTo(this.params.container),this.spinner.hide()},jvm.MultiMap.prototype={addMap:function(name,config){var cnt=jvm.$("<div/>").css({width:"100%",height:"100%"});return this.params.container.append(cnt),this.maps[name]=new jvm.Map(jvm.$.extend(config,{container:cnt})),this.params.maxLevel>config.multiMapLevel&&this.maps[name].container.on("regionClick.jvectormap",{scope:this},function(e,code){var multimap=e.data.scope,mapName=multimap.params.mapNameByCode(code,multimap);multimap.drillDownPromise&&"pending"===multimap.drillDownPromise.state()||multimap.drillDown(mapName,code)}),this.maps[name]},downloadMap:function(code){var that=this,deferred=jvm.$.Deferred();return this.mapsLoaded[code]?deferred.resolve():jvm.$.get(this.params.mapUrlByCode(code,this)).then(function(){that.mapsLoaded[code]=!0,deferred.resolve()},function(){deferred.reject()}),deferred},drillDown:function(name,code){var currentMap=this.history[this.history.length-1],that=this,focusPromise=currentMap.setFocus({region:code,animate:!0}),downloadPromise=this.downloadMap(code);focusPromise.then(function(){"pending"===downloadPromise.state()&&that.spinner.show()}),downloadPromise.always(function(){that.spinner.hide()}),this.drillDownPromise=jvm.$.when(downloadPromise,focusPromise),this.drillDownPromise.then(function(){currentMap.params.container.hide(),that.maps[name]?that.maps[name].params.container.show():that.addMap(name,{map:name,multiMapLevel:currentMap.params.multiMapLevel+1}),that.history.push(that.maps[name]),that.backButton.show()})},goBack:function(){var currentMap=this.history.pop(),prevMap=this.history[this.history.length-1],that=this;currentMap.setFocus({scale:1,x:.5,y:.5,animate:!0}).then(function(){currentMap.params.container.hide(),prevMap.params.container.show(),prevMap.updateSize(),1===that.history.length&&that.backButton.hide(),prevMap.setFocus({scale:1,x:.5,y:.5,animate:!0})})}},jvm.MultiMap.defaultParams={mapNameByCode:function(code,multiMap){return code.toLowerCase()+"_"+multiMap.defaultProjection+"_en"},mapUrlByCode:function(code,multiMap){return"jquery-jvectormap-data-"+code.toLowerCase()+"-"+multiMap.defaultProjection+"-en.js"}};
/*doc
---
title: Masonry 4.0.0
name: Masonry
category: Plugins Masonry
---

Carrousel

url: <http://masonry.desandro.com>

*/ 

/*!
 * Masonry PACKAGED v4.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  'use strict';
  /* globals define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.0.1
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners array
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || [];
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {
  'use strict';

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',[],function() {
      return factory();
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See http://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );

  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
  body.removeChild( div );

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.1
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.0
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  'use strict';
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;

    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  if ( document.readyState == 'complete' ) {
    callback();
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('layoutname')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      function( EvEmitter, getSize ) {
        return factory( window, EvEmitter, getSize );
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window,
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( window, EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties
var vendorProperties = [
  transformProperty,
  transitionProperty,
  transitionProperty + 'Duration',
  transitionProperty + 'Property'
];

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  // convert percent to pixels
  var layoutSize = this.layout.size;
  var x = xValue.indexOf('%') != -1 ?
    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
  var y = yValue.indexOf('%') != -1 ?
    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' +
  toDashedAll( vendorProperties.transform || 'transform' );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

proto.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.0.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  queue.forEach( function( obj ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }, this );
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  items.forEach( function( item ) {
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  items.forEach( function( item ) {
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/*!
 * Masonry v4.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = colGroup.indexOf( minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/*doc
---
title: Slick 1.5.9
name: slickslider
category: Plugins Slick
---

Carrousel

url: <http://kenwheeler.github.io/slick/>

*/ 

/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: false,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = 'hidden';
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);
            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.html(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide);

            if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {

                $('li', _.$dots)
                    .off('mouseenter.slick', $.proxy(_.setPaused, _, true))
                    .off('mouseleave.slick', $.proxy(_.setPaused, _, false));

            }

        }

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.html(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.setPaused, _, true))
                .on('mouseleave.slick', $.proxy(_.setPaused, _, false));
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {
                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                        });
                };

                imageToLoad.src = imageSource;

            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger('afterChange', [_, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', null);
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();

                    if (_.options.adaptiveHeight === true) {
                        _.setPosition();
                    }
                })
                .error(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();
                });
        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, firstVisible;

        firstVisible = _.slideCount - _.options.slidesToShow;

        // check that the new breakpoint can actually accept the
        // "current slide" as the current slide, otherwise we need
        // to set it to the closest possible value.
        if ( !_.options.infinite ) {
            if ( _.slideCount <= _.options.slidesToShow ) {
                _.currentSlide = 0;
            } else if ( _.currentSlide > firstVisible ) {
                _.currentSlide = firstVisible;
            }
        }

         currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === "array" && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger('reInit', [_]);

        if (_.options.autoplay === true) {
            _.focusHandler();
        }

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this, l, item;

        if( option === "responsive" && $.type(value) === "array" ) {
            for ( item in value ) {
                if( $.type( _.options.responsive ) !== "array" ) {
                    _.options.responsive = [ value[item] ];
                } else {
                    l = _.options.responsive.length-1;
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
                            _.options.responsive.splice(l,1);
                        }
                        l--;
                    }
                    _.options.responsive.push( value[item] );
                }
            }
        } else {
            _.options[option] = value;
        }

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.setPaused = function(paused) {

        var _ = this;

        if (_.options.autoplay === true && _.options.pauseOnHover === true) {
            _.paused = paused;
            if (!paused) {
                _.autoPlay();
            } else {
                _.autoPlayClear();
            }
        }
    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'left';
            } else {
                return 'right';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'left']);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'right']);
                    break;
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if (document[_.hidden]) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            if (_.options.autoplay === true) {
                _.paused = false;
                _.autoPlay();
            }
        }

    };
    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.on('focus.slick blur.slick', '*', function(event) {
            event.stopImmediatePropagation();
            var sf = $(this);
            setTimeout(function() {
                if (_.isPlay) {
                    if (sf.is(':focus')) {
                        _.autoPlayClear();
                        _.paused = true;
                    } else {
                        _.paused = false;
                        _.autoPlay();
                    }
                }
            }, 0);
        });
    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof exports ? module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */
    function embed(svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.getAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            svg.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], svg = use.parentNode;
                if (svg && /svg/i.test(svg.nodeName)) {
                    var src = use.getAttribute("xlink:href");
                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
                        // remove the <use> element
                        svg.removeChild(use);
                        // parse the src and get the url and id
                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                        // if the link is external
                        if (url.length) {
                            // get the cached xhr request
                            var xhr = requests[url];
                            // ensure the xhr request exists
                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                            xhr._embeds.push({
                                svg: svg,
                                id: id
                            }), // prepare the xhr ready state change event
                            loadreadystatechange(xhr);
                        } else {
                            // embed the local id into the svg
                            embed(svg, document.getElementById(id));
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    return svg4everybody;
});
/*	----------------------------------------------------------------------------------------------------
	 JS para página home Async
------------------------------------------------------------------------------------------------------ */

/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */


	/*	----------------------------------------------------------------
		Para calcular altura mínima de bloque calendario de webinars
	---------------------------------------------------------------- */
	function calcHeightCardWebinars() {
		var figImg = $('.card .figure-img');
		figImg.each(function(){
			var dateW = $(this).find('.card__date');
			var datesLength = $(this).find('.card__date').length;
			var datesHeight = $(this).find('.card__dates').outerHeight(true);
			
			var dateWidth = $(this).find('.card__date').outerWidth(true);
			var datesWidth = $(this).find('.card__dates').outerWidth(true);
			var itemsPerRow = parseFloat(datesWidth / dateWidth);
			
			//min-height de la caja contenedora de la imagen
			$(this).css('min-height', datesHeight + 40); //20px de aire por arriba y por abajo
			
			//si tenemos 6 elementos, al último, que sería un ver más, añadimos clase para darle padding o lo que necesitemos
			if (datesLength == 6) {
				dateW.eq(5).addClass('more-webinars');
			}
			
			//calculo elementos por línea para añadir o quitar after 
			//console.log(datesWidth);
			//console.log(dateWidth);
			//console.log(itemsPerRow);
			
 		});
 		
	}



/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	

	/*	--------------------------------------------------
		Cuando llamamos a un paso del formulario del proceso de compra
		
	-------------------------------------------------- */

	$('#collapse-button-range').on('click',function(){
		
		$('#range-plan').toggleClass('hidden');
		
		
	});
	
   
    function showRange() {
	    $('.range-box-container').each(function(){
	    	$(this).fadeIn();
	    });
    }
    
	
	function setRangePos() {

		var max = $(this).attr('max');
		var value = $(this).val();
		var percent = value / max;
		var width = $(this).width() - 40; //40 width del track
		var left = (percent * width);
		
		$(this).siblings('.range-box-container').not('.static').css('left', left - 20);
		$(this).siblings('.range-box-container').find('.range-box').val(value);
		
		
		//percent bar coloured
		var percentBar = $(this).closest('.custom-range-parent').find('.custom-percent-bar');
		percentBar.width(left + 10);
	}
	
	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */
	
	$('.js-custom-range').each(function(){
		$(this).on('change input touchmove', setRangePos).trigger('change');
	});
	
	
	$( window ).on('load', function() {

		calcHeightCardWebinars();
		
		showRange();
		
		$('.js-custom-range').each(function(){ $(this).trigger('change'); });
	});

	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {
		
		calcHeightCardWebinars();
		
		$('.js-custom-range').each(function(){ $(this).trigger('change'); });

	});

});

/*	----------------------------------------------------------------------------------------------------
	 JS para página home Async
------------------------------------------------------------------------------------------------------ */

/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */



/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	
	/*	--------------------------------------------------
		Cerramos el menu de móvil y lanzamos el modal de login
		
	-------------------------------------------------- */

	$('#off-canvas__login').click(function(){
		
		closeCanvas();
		$('#modal-login').modal();
		
	});

	/*	--------------------------------------------------
	Paro youtube al cerrar modal
	-------------------------------------------------- */
	
	$("#modal-video .modal__close").on("click", function() {
        $("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));
	});

	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */


	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {



	});

});

/*	----------------------------------------------------------------------------------------------------
	 JS para página home Async
------------------------------------------------------------------------------------------------------ */

/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */



/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	
	/*	--------------------------------------------------
		Altura mínima de hero-img
		
	-------------------------------------------------- */
	//function setHeroHeight(_height){
	//	$('.hero-img--big').css('height', _height);
	//}
	
	/*	--------------------------------------------------
		Cuando llamamos a un paso del formulario del proceso de compra
		
	-------------------------------------------------- */

	$('.js-show-message').on('click',function(){

		var heightContainer = $(this).closest('.hero-img__form').outerHeight();
		var formHide = $(this).attr('data-hide-form');				
		var messageShow = $(this).attr('data-show-message');		
		

		$(this).closest('.hero-img__form').css('min-height', heightContainer);
		$(messageShow).addClass('visible').removeClass('hide');
		$(formHide).addClass('hide').removeClass('visible');	
		
		//var newHeight = $(this).closest('.hero-img__form').outerHeight() + parseInt($(this).closest('.hero-img--form').css('padding-top')) + 60; //aire
		//
		//
		//if (newHeight > heightContainer) {
		//	setHeroHeight(newHeight);
		//}
		//else {
		//	setHeroHeight(heightContainer);
		//}
		
		
	});
	
	
	


	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */
	//$(window).on('load', function(){
	//	var contHeight = $('.hero-img--big').outerHeight(true);
	//	setHeroHeight(contHeight);
	//});

	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {



	});

});

/*	----------------------------------------------------------------------------------------------------
	 JS para página home Async
------------------------------------------------------------------------------------------------------ */

/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */



/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	
	/*	--------------------------------------------------
		center-v
		-------------------------------------------------- */	
		
		
	// center-v
	$('.center-v').each(function() {
		var centerEl = $(this);
		var centerHeight = centerEl.height();
		var centerInner = centerEl.find('.center-inner');

		if ( $(window).width() > 768 ) {
			centerInner.each(function() {
				var centerInnerHeight = $(this).outerHeight();

				if ( centerInnerHeight < centerHeight ) {
					var marginVertical = (centerHeight - centerInnerHeight) / 2;
					$(this).css({
						'margin-top' : marginVertical,
						'margin-bottom' : marginVertical
					});
				}
			});
		} else {
			var centerInnerHeight = 0;
			centerInner.each(function() {
				centerInnerHeight += $(this).outerHeight();

				if ( centerInnerHeight < centerHeight ) {
					var marginVertical = (centerHeight - centerInnerHeight) / 2;
					centerEl.css({
						'padding-top' : marginVertical,
						'padding-bottom' : marginVertical
					});
				}
			});
		}
	});
	


	/*	--------------------------------------------------
		
		-------------------------------------------------- */	
		
		
	// 
	$( window ).scroll(function() {

		var scrollLimit = $(window).height();
		var scrollLimit = 1;
		var scrollNow = $(window).scrollTop();

		var sectVisibleN = 1;

		sectVisibleN = Math.round((scrollNow / $(window).height())) + 1;

		// $('#report')
		$('.block-verticalnav-fixed li:eq(' + (sectVisibleN - 1) + ') a').addClass('claseAqui');

		if ( !$('.block-verticalnav-fixed li:eq(' + (sectVisibleN - 1) + ') a').is('active') ) {
			$('.block-verticalnav-fixed li a.active').removeClass('active');
			$('.block-verticalnav-fixed li:eq(' + (sectVisibleN - 1) + ') a').addClass('active');
		}

		if ( !$('.fixed-report').is('.change') ) {
			if( sectVisibleN != 1 && sectVisibleN != 5 ) {
				$('.fixed-report').addClass('change');
				$('#header').removeClass('logowhite');
			}
		} else {
			if( sectVisibleN == 1 || sectVisibleN == 5 ) {
				$('.fixed-report').removeClass('change');
				$('#header').addClass('logowhite');
			}
		}
		if ( sectVisibleN == 5 ) {
			if ( $('#btn-download-report').is(':visible') ) {
				$('#btn-download-report').hide();
			}
		} else {
			if ( !$('#btn-download-report').is(':visible') ) {
				$('#btn-download-report').show();
			}
		}

	});
	
	
	


	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */
	//$(window).on('load', function(){
	//	var contHeight = $('.hero-img--big').outerHeight(true);
	//	setHeroHeight(contHeight);
	//});

	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {



	});

});

/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	

if ($('#es-map').length) {
	
	function setMap() {
		if (windowWidth < mdBreak) {
			$('#es-map').width(440);
			$('#es-map').height(395);
		}
		else {
			$('#es-map').width(555);
			$('#es-map').height(395);;
		}
		
		$('#es-map').vectorMap({
			map: 'es_map',
			backgroundColor: '#ffffff',
			zoomOnScroll: false,
			panOnDrag: false,
			regionsSelectable: false,
			zoomAnimate: false,
			zoomButtons : false,
			regionStyle: {
			  initial: {
			    fill: '#ffffff',
			    "fill-opacity": 1,
			    stroke: '#000000',
			    "stroke-width": 0.5,
			    "stroke-opacity": 1
			  },
			  hover: {
				fill: '#D72A6B',
			    "fill-opacity": 1,
			    cursor: 'pointer'
			  }
			},
			onRegionClick: function(event, code) {
				window.location.href = $(this).closest('.custom-map-div').find('[data-id='+ code +']').attr('href');
			},
			onViewportChange: function(){
				if (windowWidth < mdBreak) {
					$(this).css('width', '440px');
					$('#es-map svg').width(440);
				}
				else {
					$(this).css('width', '555px');
					$('#es-map svg').width(555);
				}
			}
		});
	}
	
	$(window).on('load', setMap);
	
	
	
}

});
/*	----------------------------------------------------------------------------------------------------
	 JS para página home Async
------------------------------------------------------------------------------------------------------ */

/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */



/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	

	/*	--------------------------------------------------
		Cuando llamamos a un paso del formulario del proceso de compra
		
	-------------------------------------------------- */

	$('[data-step]').on('click',function(){
		trigger = $(this);
		
		//Indicamos que capas se cierran y cual se abre		
		openStep = trigger.attr('data-step');
		closeStep = trigger.closest('.collapse');
		$(openStep).addClass('collapse--in');
		$(closeStep).removeClass('collapse--in');

		//Indicamos el texto del mensaje
		
		textMessage = trigger.attr('data-text');		
		
		setTimeout(function(){ 
			//Movemos el scroll para irnos a la parte superior del formulario
			moveToOffset = 90;
			$("html,body").animate({ scrollTop: moveToOffset, useTranslate3d:true }, "slow");
			
		}, 50);		
		
		//Animamos el texto del proceso de compra

		$('.js-message-info').removeClass('block-message-info__make-me-hide');		
		$('.js-message-info').addClass('block-message-info__success');
		$('.js-message-info').text(textMessage);
		
		setTimeout(function(){
			$('.js-message-info').addClass('block-message-info__make-me-hide');
			
	 	}, 5000);	

		
	});
	


	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */


	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {



	});

});

jQuery.fn.vectorMap('addMap', 'es_map',{"insets": [{"width": 0, "top": 0, "height": 0, "bbox": [{"y": -5213399.331391313, "x": -2023392.062741889}, {"y": -3158091.8374794754, "x": 483047.242935642}], "left": 0}], 

"paths": 

{
	"ES-CL": {
				"path":"M302.354717,53.8117021 L301.130189,54.3095745 C300.569811,54.7452128 300.009434,53.7494681 299.469811,53.7079787 C298.930189,53.6664894 298.411321,53.5420213 297.933962,53.5420213 C297.456604,53.5420213 297.290566,53.7909574 296.896226,53.8117021 C296.501887,53.8324468 295.484906,53.625 295.007547,53.9569149 C294.530189,54.2888298 295.54717,54.9111702 295.650943,55.3468085 C295.754717,55.7824468 294.986792,56.612234 294.779245,57.0478723 C294.571698,57.4835106 293.430189,57.8776596 293.430189,58.5414894 L293.430189,58.5414894 C294.592453,58.5414894 295.318868,58.2095745 294.986792,59.7654255 C294.986792,60.0765957 294.364151,60.7196809 294.530189,61.0515957 C294.917902,61.3207541 295.335849,61.5435514 295.775472,61.7154255 C295.879252,62.1378745 295.879252,62.5791468 295.775472,63.0015957 C295.318868,63.1260638 295.775472,64.3914894 295.775472,64.6611702 C295.775472,65.262766 295.567925,66.0925532 295.111321,65.0968085 C294.945283,64.7441489 294.384906,64.1840426 294.177358,64.7648936 C293.969811,65.3457447 295.775472,66.0095745 294.613208,66.8393617 C293.866038,67.3787234 293.803774,67.5446809 294.05283,68.4367021 C294.173505,69.5397977 294.173505,70.6527554 294.05283,71.7558511 C294.065204,72.2534047 293.973298,72.7480425 293.783019,73.2079787 C293.575472,73.5398936 293.015094,74.0585106 293.015094,74.3904255 C293.607356,74.7437161 294.055741,75.2947423 294.281132,75.9462766 C294.530189,76.7553191 295.215094,76.568617 295.443396,77.1079787 C295.9,78.2281915 296.086792,79.1824468 297.622642,78.8920213 C299.158491,78.6015957 299.407547,78.8920213 299.698113,79.9707447 C299.950449,80.8168101 300.313326,81.6259148 300.777358,82.3771277 C301.296226,83.3521277 302.520755,82.1489362 303.039623,81.7132979 C303.558491,81.2776596 304.243396,81.7132979 304.471698,80.5515957 C304.616981,79.7840426 304.949057,77.2531915 306.19434,77.6265957 C307.024528,77.8755319 307.667925,77.7510638 307.356604,79.037234 C307.045283,80.3234043 305.281132,81.381383 306.007547,82.6882979 C306.339623,83.331383 309.203774,83.3106383 309.80566,83.1239362 C311.507547,82.7505319 311.735849,83.9952128 312.815094,81.837766 C313.541509,80.406383 314.496226,79.7632979 314.496226,78.0207447 C315.181132,77.8547872 315.679245,78.2696809 316.40566,77.6473404 C318.039544,76.6145239 320.051464,76.3707727 321.884906,76.9835106 C321.931642,77.7005613 322.107413,78.403304 322.403774,79.0579787 C322.735849,79.3898936 324.832075,78.4356383 325.683019,78.4356383 C326.171584,78.4197838 326.6601,78.4686118 327.135849,78.5808511 C327.467925,78.5808511 328.15283,79.3691489 327.509434,79.5351064 C327.509434,79.7840426 326.430189,80.0744681 326.243396,80.2819149 C326.056604,80.4893617 327.343396,81.8792553 327.550943,82.1074468 C328.298113,82.8542553 327.550943,82.9994681 327.716981,83.9537234 C328.298113,85.2398936 328.049057,85.1776596 329.522642,85.4888298 C330.142091,85.5357055 330.747384,85.6975079 331.307547,85.9659574 C332.407547,86.6297872 332.283019,87.3558511 333.777358,86.712766 C334.75283,86.2978723 335.686792,85.4058511 336.766038,85.3021277 L336.766038,85.3021277 L336.766038,86.9202128 C336.766038,87.8329787 336.932075,87.9781915 337.513208,88.6212766 C338.737736,89.9904255 337.139623,91.7537234 337.139623,93.081383 C338.530189,93.4755319 337.7,95.2803191 339.215094,95.6537234 L339.215094,95.6537234 C339.215094,96.7324468 338.239623,96.8984043 338.239623,97.7281915 C338.239623,99.5952128 337.928302,98.5164894 336.662264,99.0351064 C336.537736,99.6367021 336.309434,99.9478723 335.666038,99.9478723 C335.354717,99.9478723 335.10566,100.964362 334.690566,101.275532 C334.566038,102.312766 332.760377,100.985106 332.075472,101.731915 C331.390566,102.478723 332.94717,103.557447 332.677358,104.304255 C332.407547,105.051064 332.054717,106.109043 332.490566,106.731383 C332.926415,107.353723 333.984906,109.801596 333.175472,110.361702 L331.577358,111.46117 C330.560377,112.145745 330.518868,110.403191 330.083019,109.656383 C329.596823,109.158335 328.932007,108.874619 328.235849,108.868085 C327.592453,109.054787 328.007547,111.793085 327.198113,112.539894 C326.824528,112.892553 325.807547,112.871809 326.077358,113.369681 C326.34717,113.867553 325.766038,114.365426 325.766038,114.987766 C325.973585,116.045745 326.409434,117.062234 326.679245,118.140957 C326.735938,118.623342 326.735938,119.110701 326.679245,119.593085 C326.679245,119.738298 326.554717,120.692553 326.679245,120.692553 C326.803774,120.692553 327.716981,120.9 327.820755,120.920745 C328.340442,121.033267 328.833659,121.244544 329.273585,121.543085 L329.896226,122.103191 L329.896226,122.103191 C329.962239,122.640535 329.962239,123.183933 329.896226,123.721277 C329.750943,124.094681 329.377358,124.654787 329.667925,125.11117 C329.958491,125.567553 329.813208,125.982447 329.543396,125.961702 C329.215089,125.785152 328.914415,125.561503 328.650943,125.297872 C328.270118,124.862826 327.853573,124.46036 327.40566,124.094681 C326.513208,123.51383 326.409434,124.924468 325.620755,125.028191 C325.081132,125.567553 324.562264,124.820745 324.001887,124.862234 C323.441509,124.903723 323.150943,125.775 322.798113,126.044681 C321.781132,126.853723 320.307547,126.044681 319.311321,125.650532 C318.315094,125.256383 318.086792,126.832979 317.235849,126.667021 C316.334802,126.315095 315.595641,125.642784 315.160377,124.779255 C315.160377,124.468085 315.056604,123.783511 314.807547,123.596809 C314.558491,123.410106 313.85283,123.47234 313.85283,122.704787 C313.85283,120.360638 310.843396,124.239894 311.590566,121.418617 C312.00566,119.800532 310.55283,121.273404 310.615094,120.422872 C310.615094,120.173936 311.113208,119.842021 311.320755,119.717553 C312.545283,118.991489 310.013208,118.618085 309.764151,118.493617 C309.058491,118.037234 308.601887,118.32766 308.041509,117.975 C307.481132,117.62234 307.232075,116.68883 307.086792,116.64734 C305.44717,116.004255 305.011321,118.389894 303.579245,117.35266 C302.811321,116.771809 301.835849,116.315426 301.835849,115.278191 C301.835849,113.743085 300.113208,114.552128 299.345283,115.278191 C297.740846,116.384872 295.765544,116.816993 293.845283,116.481383 C292.20566,116.481383 289.69434,114.054255 288.864151,116.854787 C288.635849,117.539362 288.490566,116.543617 288.490566,116.356915 C288.490566,115.319681 287.473585,116.149468 287.45283,116.356915 C287.432075,116.564362 287.784906,117.041489 287.577358,117.082979 L287.577358,117.082979 C286.663159,117.529264 285.626881,117.660559 284.630189,117.456383 C283.135849,117.103723 283.613208,117.726064 283.613208,118.825532 C283.613208,119.925 282.949057,119.385638 282.367925,119.447872 C281.475472,119.551596 281.454717,121.190426 280.10566,121.52234 L278.860377,121.937234 L278.860377,121.937234 L278.175472,121.937234 C278.023734,121.920449 277.870606,121.920449 277.718868,121.937234 C277.379436,122.039538 277.067345,122.216777 276.80566,122.455851 C276.60615,122.683551 276.367082,122.873307 276.1,123.015957 L274.481132,125.090426 C273.941509,125.775 273.256604,125.795745 272.716981,126.335106 C271.7,127.351596 271.098113,129.571277 269.437736,129.944681 C268.477115,129.98301 267.556782,130.340745 266.822642,130.96117 C265.870736,131.955048 265.160566,133.154653 264.74717,134.467021 C264.74717,135.193085 264.975472,135.587234 264.539623,136.18883 C264.103774,136.790426 264.539623,136.894149 264.290566,137.495745 C264.041509,138.09734 263.750943,137.889894 263.688679,138.201064 C263.377358,139.694681 261.779245,138.927128 260.637736,138.927128 C260.492453,138.927128 259.413208,140.877128 259.122642,141.188298 C258.364519,142.290016 257.704747,143.456205 257.150943,144.673404 C257.017007,145.22073 257.068091,145.796975 257.296226,146.312234 C257.566038,146.768617 256.984906,146.87234 256.65283,146.976064 C256.320755,147.079787 254.577358,147.660638 254.162264,147.121277 C254.037736,146.955319 253.498113,145.814362 253.35283,145.980319 C252.875472,146.540426 253.539623,147.245745 253.498113,147.722872 C253.456604,148.2 253.207547,149.79734 252.315094,149.921809 C252.086792,150.046277 251.796226,150.212234 251.796226,150.50266 C251.796226,150.793085 252.003774,151.353191 251.983019,151.768085 C251.943146,152.407908 251.992037,153.050168 252.128302,153.676596 C252.003774,153.987766 251.464151,154.444149 251.443396,154.693085 C251.422642,154.942021 251.837736,155.149468 251.858491,155.522872 C251.858491,156.373404 251.007547,155.896277 250.488679,156 C249.969811,156.103723 249.450943,156 248.932075,156.145213 C247.790566,156.850532 248.288679,157.057979 248.101887,158.219681 C247.915094,159.381383 247.915094,158.904255 247.354717,159.339894 C246.79434,159.775532 247.354717,159.879255 247.354717,160.148936 C247.354717,160.418617 246.088679,160.335638 245.881132,160.335638 C245.175472,160.335638 245.258491,159.609574 245.030189,159.132447 C245.030189,158.987234 244.490566,158.925 244.407547,159.132447 C244.324528,159.339894 245.050943,161.331383 244.55283,161.663298 C243.162264,162.617553 244.303774,164.256383 243.349057,165.023936 L243.349057,165.023936 C242.249057,165.023936 241.60566,165.936702 240.588679,165.874468 C239.571698,165.812234 239.426415,164.401596 239.260377,163.8 C239.09434,163.198404 238.492453,162.887234 238.845283,162.368617 C239.198113,161.85 236.998113,162.700532 236.873585,162.721277 C236.749057,162.742021 235.75283,162.16117 235.586792,162.264894 C235.420755,162.368617 235.254717,163.634043 235.171698,164.007447 C235.088679,164.380851 234.403774,165.832979 233.801887,165.459574 C233.025209,165.800298 232.32077,166.286126 231.726415,166.890957 C231.269811,167.513298 232.286792,168.280851 231.249057,168.592021 C230.211321,168.903191 228.281132,170.666489 228.281132,168.592021 C228.281132,167.181383 227.679245,167.554787 226.620755,167.990426 C225.562264,168.426064 224.711321,170.625 223.050943,170.770213 C222.137736,170.770213 221.120755,171.039894 221.183019,169.774468 L217.218868,169.504787 L217.218868,169.504787 C217.052861,168.978309 216.792673,168.4863 216.450943,168.05266 C215.99434,167.305851 216.201887,166.953191 216.243396,166.164894 L216.243396,164.837234 C216.345715,164.198255 216.586558,163.589359 216.949057,163.053191 C217.281132,162.347872 215.496226,163.281383 215.288679,163.302128 C215.081132,163.322872 214.458491,163.302128 214.250943,163.426596 C214.043396,163.551064 213.607547,164.318617 213.254717,164.754255 C212.806336,165.292861 212.12799,165.585641 211.428302,165.542553 C210.079245,166.227128 209.477358,165.39734 208.356604,164.857979 C207.235849,164.318617 207.588679,163.405851 206.737736,163.343617 C205.886792,163.281383 205.907547,162.804255 205.554717,162.389362 C205.024204,161.82249 204.24551,161.557862 203.479245,161.684043 C202.275472,162.140426 201.175472,161.870745 201.528302,160.52234 C201.69434,159.9 201.383019,159.360638 201.383019,158.738298 L201.383019,158.738298 C200.677358,158.904255 200.303774,159.775532 199.660377,159.962234 C199.016981,160.148936 198.435849,160.231915 197.854717,161.082447 C196.360377,163.322872 196.526415,161.206915 194.596226,161.082447 C193.766038,160.895745 193.932075,159.982979 193.579245,159.505851 C193.579245,159.505851 191.815094,159.111702 191.503774,158.945745 C190.507547,158.447872 192.977358,156.871277 190.756604,156.165957 C189.283019,155.730319 191.337736,154.630851 189.739623,154.879787 C189.482132,154.962661 189.200113,154.90785 188.992453,154.734574 L188.037736,153.614362 C186.792453,152.141489 184.8,154.298936 183.409434,154.796809 C182.620755,155.066489 181.89434,156.767553 181.624528,156.871277 C181.233965,156.719924 180.831265,156.601948 180.420755,156.518617 C180.00566,157.244681 179.735849,157.576596 178.864151,157.576596 C177.992453,157.576596 177.701887,158.074468 177.1,158.30266 C175.958491,158.738298 175.875472,160.065957 175.833962,161.103191 C175.833962,161.559574 174.401887,161.974468 173.966038,162.16117 C173.530189,162.347872 173.05283,162.16117 172.575472,162.16117 C171.226415,162.534574 170.977358,163.696277 170.5,161.974468 C169.856604,161.85 169.130189,163.156915 168.237736,163.094681 C167.486447,163.131943 166.73765,162.982256 166.058491,162.659043 L164.916981,162.181915 L164.916981,162.181915 C165.088355,161.553558 165.317638,160.942432 165.601887,160.356383 C166.037736,159.713298 167.013208,159.651064 167.573585,159.153191 C168.133962,158.655319 167.386792,158.364894 167.573585,157.929255 C168.092453,157.057979 167.2,157.223936 167.075472,156.66383 C166.473585,156.66383 165.74717,155.170213 165.664151,154.589362 C165.456604,153.323936 166.079245,152.743085 166.701887,151.78883 C166.888679,151.270213 167.967925,150.751596 167.324528,150.087766 C166.681132,149.423936 167.324528,149.009043 166.49434,148.86383 C165.124528,148.656383 166.639623,146.374468 166.930189,145.752128 C167.42929,144.658456 167.42929,143.402182 166.930189,142.308511 C166.14109,141.068623 165.994451,139.525798 166.535849,138.159574 C166.950943,137.454255 166.307547,136.85266 166.535849,136.437766 C166.764151,136.022872 167.449057,136.064362 167.449057,135.566489 C167.449057,134.301064 165.913208,134.031383 165.643396,133.097872 C165.373585,132.164362 165.539623,131.438298 165.083019,130.878191 C164.626415,130.318085 164.543396,130.567021 164.29434,130.172872 C163.754717,129.343085 162.696226,128.554787 162.862264,127.476064 C163.076386,127.45891 163.291538,127.45891 163.50566,127.476064 C164.522642,127.476064 165.332075,127.911702 166.328302,127.476064 C166.992453,127.247872 167.324528,126.604787 167.718868,126.023936 C168.362264,125.048936 168.798113,124.44734 168.424528,123.285638 C168.237736,122.663298 168.424528,122.53883 168.943396,122.269149 C169.569684,121.96186 170.111221,121.506049 170.520755,120.941489 C171.039623,120.298404 170.749057,119.385638 171.454717,118.867021 C172.160377,118.348404 172.243396,117.62234 172.824528,117.62234 C173.258725,117.690212 173.703194,117.640055 174.111321,117.477128 C174.298113,117.477128 174.754717,117.850532 175.045283,117.912766 C175.916981,118.120213 175.833962,116.273936 176.892453,116.585106 C176.996226,116.585106 178.59434,117.186702 178.220755,116.439894 C178.220755,116.273936 177.826415,115.693085 178.096226,115.423404 C178.366038,115.153723 178.801887,115.298936 179.237736,115.195213 C179.673585,115.091489 179.362264,114.821809 179.715094,114.38617 C180.013151,114.098758 180.178505,113.7006 180.171698,113.286702 C180.171698,112.602128 181.935849,113.390426 181.437736,112.270213 C181.167925,111.668617 181.250943,110.631383 182.143396,111.253723 C183.035849,111.876064 182.620755,111.834574 183.492453,111.50266 C184.364151,111.170745 182.516981,110.403191 183.367925,110.009043 C183.7,109.86383 183.990566,110.154255 184.322642,109.780851 C184.654717,109.407447 184.322642,109.158511 184.322642,108.702128 C184.322642,108.245745 184.198113,108.183511 184.654717,107.955319 C185.111321,107.727128 184.924528,107.623404 185.028302,107.312234 C185.132075,107.001064 185.796226,106.793617 185.962264,106.212766 C186.128302,105.631915 186.564151,105.403723 186.854717,104.885106 C187.145283,104.366489 187.103774,104.034574 187.290566,103.66117 C187.477358,103.287766 187.767925,103.163298 187.996226,102.893617 C188.111104,102.647219 188.201475,102.390132 188.266038,102.126064 C186.64717,101.503723 185.54717,99.1180851 183.969811,98.4542553 C183.264151,98.1638298 179.611321,97.8526596 179.549057,97.5829787 C178.967925,97.7281915 178.55283,99.45 177.473585,98.7861702 C176.850943,98.3712766 176.332075,97.8111702 175.667925,97.3962766 C175.003774,96.981383 175.896226,96.7324468 175.813208,96.3797872 C175.730189,96.0271277 175.045283,95.2180851 175.29434,94.4297872 C175.543396,93.6414894 176.145283,92.9154255 176.020755,91.6914894 C176.365615,90.8176751 176.602584,89.9050891 176.726415,88.9739362 L175.086792,88.6005319 L175.086792,88.6005319 C174.920755,88.6005319 175.273585,87.7085106 175.315094,87.5840426 C175.485854,87.2020103 175.597812,86.7963573 175.64717,86.3808511 C175.64717,85.9452128 174.962264,84.8042553 174.464151,84.8042553 C174.049057,86.0904255 171.24717,86.3393617 170.043396,86.0074468 C167.967925,85.4680851 168.756604,83.5388298 166.826415,83.5388298 C166.411321,85.2191489 166.701887,85.8 164.750943,85.8 C163.526415,85.8 161.720755,85.6755319 161.367925,84.2234043 L161.367925,84.2234043 L160.932075,83.3106383 C161.34717,82.9787234 162.218868,80.8835106 161.264151,80.7797872 C160.597158,80.7225528 159.961859,80.4699994 159.437736,80.0537234 C158.856604,79.6388298 160.081132,79.1409574 160.413208,78.7882979 C160.745283,78.4356383 160.662264,77.8755319 161.077358,77.6058511 C161.492453,77.3361702 162.40566,77.0457447 162.40566,76.1537234 C162.40566,75.2617021 162.841509,75.0335106 163.650943,74.4941489 C164.460377,73.9547872 164.232075,72.4196809 165.39434,72.4196809 C166.120755,72.4196809 166.826415,72.9590426 167.677358,72.9590426 C167.677358,72.3989362 166.930189,72.15 167.677358,71.3824468 C168.424528,70.6148936 169.524528,69.7021277 169.524528,68.4159574 C169.524528,67.6484043 169.75283,66.7356383 169.109434,66.2170213 C168.466038,65.6984043 166.909434,65.3457447 166.266038,64.5989362 C165.622642,63.8521277 166.411321,63.8728723 166.722642,63.4164894 C167.033962,62.9601064 166.349057,62.6696809 166.888679,61.9021277 C166.942994,61.4049386 166.886286,60.9018975 166.722642,60.4292553 C166.308633,60.3868085 165.891367,60.3868085 165.477358,60.4292553 C164.729761,60.03018 164.032927,59.5426325 163.401887,58.9771277 C162.883019,58.562234 162.198113,58.9771277 161.928302,59.4335106 C160.973585,60.968617 161.513208,59.5579787 160.20566,59.931383 C159.502776,59.7971732 158.809462,59.6169987 158.130189,59.3920213 L158.130189,59.3920213 C158.628302,59.0601064 158.233962,57.3175532 158.835849,56.5292553 C159.437736,55.7409574 158.649057,55.2845745 158.835849,54.4547872 C159.126415,53.0234043 160.350943,53.4382979 159.333962,51.7164894 C158.316981,49.9946809 160.516981,50.0361702 161.264151,49.6420213 C161.409434,49.268617 161.471698,48.8952128 161.616981,48.5425532 C161.990566,47.5675532 162.011321,48.1484043 162.301887,48.5425532 C162.592453,48.9367021 164.377358,47.0904255 164.522642,46.7585106 C164.667925,46.4265957 165.788679,45.4101064 165.809434,44.912234 C165.830189,44.4143617 164.149057,42.4228723 165.560377,42.4228723 C165.933962,42.4228723 166.369811,42.8792553 166.660377,42.4228723 C166.950943,41.9664894 165.933962,41.6760638 165.892453,41.3441489 L166.224528,40.6803191 L166.224528,40.6803191 C166.926514,40.6024264 167.600967,40.9769417 167.90566,41.6138298 C168.133962,42.0287234 168.196226,42.4228723 168.715094,42.0287234 C169.408709,41.3992666 170.219808,40.9128426 171.101887,40.5973404 C171.595406,40.4631021 172.105621,40.4002293 172.616981,40.4106383 C173.198113,40.4106383 173.716981,40.6803191 174.235849,40.6803191 C174.754717,40.6803191 175.418868,41.012234 176,40.8255319 C177.087968,40.5867157 178.151118,40.2463944 179.175472,39.8090426 C180.344686,38.6526023 181.213859,37.2284178 181.707547,35.6601064 C181.935849,35.1829787 182.828302,34.2909574 183.367925,34.8510638 C183.907547,35.4111702 185.277358,35.5978723 186.149057,36.1164894 C187.518868,36.9047872 188.224528,32.8388298 189.179245,35.2244681 C189.490566,35.9090426 190.549057,35.6601064 191.150943,35.4734043 C191.75283,35.2867021 191.04717,33.5234043 192.437736,33.5234043 C192.969406,33.7045464 193.483476,33.9336832 193.973585,34.2079787 C194.554717,34.4569149 194.928302,33.8138298 195.509434,33.8138298 C195.821177,35.2093817 196.69124,36.416386 197.916981,37.1537234 C199.020305,37.7302252 200.20196,38.1425563 201.424528,38.3776596 C203.5,38.7718085 203.728302,34.4569149 205.7,34.2287234 C206.384906,34.2287234 207.235849,34.8303191 208.024528,34.9547872 C208.813208,35.0792553 209.373585,36.0335106 210.473585,35.7845745 C211.573585,35.5356383 212.362264,36.0335106 212.549057,34.8718085 C212.818868,32.6521277 215.745283,36.075 215.849057,33.8553191 C215.849057,32.0090426 216.969811,32.2787234 218.111321,32.9010638 C219.25283,33.5234043 219.60566,32.4031915 220.477358,32.631383 C222.345283,33.1085106 222.55283,31.4696809 223.943396,31.5734043 C224.4,31.5734043 224.732075,32.5276596 225.416981,32.1542553 C226.101887,31.7808511 226.081132,30.3702128 226.288679,29.8723404 C226.496226,29.3744681 226.454717,28.6069149 226.849057,28.212766 C227.575472,27.4867021 228.758491,28.5861702 229.526415,27.8808511 C230.29434,27.1755319 230.771698,26.9265957 231.35283,26.3664894 C231.581132,26.1382979 232.058491,25.2670213 232.45283,25.35 C232.938428,25.6935046 233.390157,26.0824984 233.801887,26.5117021 C234.133962,26.9058511 234.175472,27.7356383 234.403774,28.2542553 L234.403774,28.2542553 C234.507547,28.4202128 234.922642,29.3537234 234.777358,29.5404255 C234.260318,29.9784201 234.09164,30.7033842 234.362264,31.3244681 C234.547846,31.6159795 234.787344,31.8694429 235.067925,32.0712766 C235.462264,32.3409574 236.064151,32.3617021 236.437736,32.7351064 C237.184906,33.5441489 237.018868,33.5648936 237.973585,34.0835106 C238.430189,34.3324468 237.849057,35.8468085 238.637736,35.9297872 C239.011454,35.8619555 239.379255,35.7648475 239.737736,35.6393617 C240.526415,35.4941489 240.858491,36.137234 241.813208,35.6393617 C242.311321,35.3904255 242.850943,34.8095745 243.411321,35.2037234 C245.050943,36.3861702 244.59434,34.4984043 245.715094,34.4984043 C246.524528,34.4984043 246.503774,35.3696809 247.333962,34.2702128 C247.873585,33.5441489 249.160377,34.6643617 249.928302,35.037766 C250.696226,35.4111702 250.696226,37.8175532 252.003774,37.9005319 C252.828138,37.8545276 253.654608,37.9385348 254.45283,38.1494681 C255.407547,38.3776596 255.511321,40.2239362 255.718868,40.95 C255.926415,41.6760638 255.718868,43.0244681 256.154717,43.7920213 C256.424528,44.0409574 256.445283,44.2484043 256.860377,44.2484043 C257.275472,44.2484043 257.566038,45.762766 258.333962,46.3228723 C259.620755,47.2356383 259.683019,44.8085106 260.409434,46.8 C260.783019,47.9617021 261.384906,47.5675532 261.903774,46.6132979 C262.111321,46.1984043 262.422642,46.0946809 262.733962,45.825 C263.045283,45.5553191 263.29434,43.3978723 263.584906,44.912234 C263.875472,46.4265957 263.916981,48.4595745 265.660377,47.3601064 C266.184208,47.0292416 266.624568,46.5819956 266.94717,46.0531915 C267.237736,45.6797872 268.545283,47.1734043 269.416981,46.0531915 C269.998113,45.306383 269.416981,44.7255319 269.416981,44.1654255 C269.416981,43.6053191 269.85283,43.1074468 269.416981,42.7340426 C268.981132,42.3606383 269.022642,42.0287234 268.732075,42.0494681 C268.441509,42.0702128 268.877358,43.2526596 267.569811,43.2526596 C266.988679,43.2526596 266.90566,42.0909574 267.071698,42.0287234 C266.532075,42.0287234 265.888679,41.5930851 266.449057,41.0329787 C267.009434,40.4728723 267.922642,42.0909574 268.524528,40.7010638 C268.898113,39.8712766 268.898113,40.3069149 268.524528,39.2904255 C268.150943,38.2739362 266.843396,39.912766 266.324528,40.3069149 C264.954717,41.3234043 263.958491,41.0329787 263.813208,39.2696809 C264.415094,38.7718085 264.166038,37.1952128 265.016981,36.7595745 C265.867925,36.3239362 267.092453,35.037766 268.337736,34.2909574 C269.583019,33.5441489 270.039623,34.2909574 271.015094,33.1085106 C271.662951,32.5087956 272.356906,31.9608359 273.090566,31.4696809 C274.003774,30.681383 274.460377,28.8765957 275.290566,28.275 C275.869754,28.240219 276.44473,28.3929869 276.930189,28.7106383 C277.283019,29.7478723 277.054717,29.4574468 278.279245,29.4574468 C279.048968,29.5185981 279.79785,29.7375048 280.479245,30.1005319 C281.380426,30.3288331 282.314419,30.3990242 283.239623,30.3079787 L283.239623,30.3079787 L284.983019,29.6856383 C285.750943,29.5196809 286.415094,28.6898936 287.058491,28.3787234 C287.701887,28.0675532 287.80566,27.4244681 288.324528,27.1962766 C288.843396,26.9680851 289.486792,28.1297872 290.04717,28.4202128 C290.607547,28.7106383 291.790566,28.4202128 292.558491,28.4202128 L292.558491,28.4202128 C292.558491,28.4202128 292.683019,28.7106383 292.558491,28.7521277 C292.454717,29.2085106 291.416981,30.2042553 291.416981,30.8265957 C291.416981,31.4489362 292.641509,31.718617 293.243396,31.8638298 C293.243396,32.3617021 292.558491,32.5484043 292.558491,33.1707447 C292.890566,34.4154255 292.99434,34.9547872 291.666038,35.3904255 C291.666038,35.9297872 293.430189,36.1787234 293.741509,36.3031915 C294.05283,36.4276596 294.260377,36.5521277 295.069811,36.3031915 C295.879245,36.0542553 295.858491,37.3819149 296.107547,37.7968085 C296.306037,38.1029665 296.586472,38.3473306 296.916981,38.5021277 C297.103774,38.5021277 297.933962,38.7718085 297.933962,38.937766 C298.432075,39.1037234 297.083019,40.2861702 296.875472,40.5143617 C296.102159,41.2363708 295.136214,41.7191097 294.09434,41.9042553 C293.555587,41.6844 293.057497,41.3758736 292.620755,40.9914894 C292.24717,40.5973404 292.620755,39.8920213 292.350943,39.4356383 C291.718766,39.2543441 291.073417,39.1225623 290.420755,39.0414894 C289.715094,38.8755319 289.65283,38.7510638 289.341509,39.5393617 C289.199314,40.0066626 288.958705,40.4381339 288.635849,40.8047872 C287.743396,41.6553191 287.598113,41.9042553 288.635849,42.8792553 C289.175472,43.418617 289.133962,43.9787234 289.528302,44.4765957 C289.922642,44.9744681 290.607547,44.3106383 290.918868,44.0202128 C291.230189,43.7297872 291.541509,43.7505319 291.85283,43.5223404 C292.164151,43.2941489 292.392453,42.7755319 292.890566,42.8585106 L293.866038,43.0244681 L293.866038,43.0244681 C293.388679,43.6260638 292.267925,44.8085106 292.267925,45.6382979 C292.516981,45.8457447 293.015094,45.7835106 293.139623,46.1154255 L293.139623,47.2978723 C293.975042,47.2227278 294.815524,47.2227278 295.650943,47.2978723 C296.383823,48.123536 297.197285,48.8740609 298.079245,49.5382979 C298.983156,50.0030139 299.911556,50.4185146 300.860377,50.7829787 L301.441509,51.8409574 L302.001887,52.8367021 L302.354717,53.3760638 L302.354717,53.8117021 Z M254.349057,144.071809 C254.269455,143.897434 254.113907,143.769449 253.927404,143.724872 C253.740902,143.680295 253.544253,143.7241 253.39434,143.843617 L252.730189,144.3 C252.29434,144.65266 252.60566,145.337234 253.145283,145.088298 C253.398643,144.972818 253.676992,144.922882 253.954717,144.943085 C254.064746,144.960208 254.176763,144.960208 254.286792,144.943085 C254.286792,144.943085 254.286792,144.486702 254.390566,144.382979 L254.349057,144.071809 Z M312.213208,50.0569149 C312.773585,49.5797872 312.586792,48.812234 312.939623,48.3351064 C312.616111,48.3813483 312.287663,48.3813483 311.964151,48.3351064 C311.133962,48.1069149 311.424528,47.5260638 310.2,47.5882979 C308.855237,47.391725 307.538512,47.03659 306.277358,46.5303191 C305.281132,46.281383 304.430189,45.1819149 303.849057,46.5303191 C303.539214,47.2666461 303.142032,47.963121 302.666038,48.6047872 C302.396226,48.8952128 303.99434,50.1606383 304.430189,50.5547872 C304.866038,50.9489362 305.426415,51.9654255 305.986792,52.2351064 C306.941509,52.712234 306.920755,52.6707447 307.896226,52.3595745 C309.286792,51.9031915 309.286792,52.8989362 310.262264,53.168617 C311.237736,53.4382979 312.213208,52.8574468 312.835849,53.168617 C313.126415,53.3345745 314.060377,53.8531915 314.20566,53.168617 C314.175193,52.6455716 314.105819,52.1255181 313.998113,51.612766 C313.832075,51.4675532 313.5,52.0276596 313.292453,52.0691489 C312.04717,52.4632979 310.407547,51.675 311.673585,50.3058511 L312.213208,49.9946809 L312.213208,50.0569149 Z M298.307547,54.8281915 L297.996226,54.8281915 C297.996226,54.8281915 297.871698,54.9319149 297.850943,54.9941489 C297.830189,55.056383 297.70566,55.2845745 297.850943,55.3468085 C297.996226,55.4090426 298.016981,55.3468085 298.079245,55.3468085 C298.212928,55.2464986 298.370157,55.1822086 298.535849,55.1601064 L298.307547,54.8696809 L298.307547,54.8281915 Z M300.383019,55.6579787 L300.383019,55.3675532 C300.393407,55.2235762 300.309504,55.0893959 300.175472,55.0356383 L299.864151,55.0356383 C299.781132,55.0356383 299.55283,55.2638298 299.677358,55.4505319 C299.702851,55.5315546 299.702851,55.6184454 299.677358,55.6994681 C299.677358,55.8446809 299.94717,55.8654255 300.050943,55.8654255 L300.383019,55.6579787 Z" , "name" : "Castilla y León"}
            ,"ES-LR": {
				"path":"M336.932075,85.343617 C335.832075,85.343617 334.856604,86.3601064 333.943396,86.7542553 C332.428302,87.3765957 332.573585,86.7542553 331.473585,86.0074468 C330.913422,85.7389973 330.308129,85.5771948 329.688679,85.5303191 C328.215094,85.2191489 328.484906,85.3021277 327.883019,83.9952128 C327.716981,83.0409574 328.464151,82.9164894 327.716981,82.1489362 C327.509434,81.9414894 326.264151,80.4893617 326.409434,80.3234043 C326.554717,80.1574468 327.613208,79.8255319 327.675472,79.5765957 C328.339623,79.4106383 327.675472,78.7053191 327.301887,78.6223404 C326.826137,78.5101012 326.337621,78.4612732 325.849057,78.4771277 C324.998113,78.4771277 322.901887,79.431383 322.569811,79.0994681 C322.27345,78.4447933 322.09768,77.7420507 322.050943,77.025 C320.217502,76.4122621 318.205582,76.6560133 316.571698,77.6888298 C315.845283,78.2904255 315.34717,77.8962766 314.662264,78.062234 C314.662264,79.887766 313.707547,80.4478723 312.981132,81.8792553 C311.901887,83.9537234 311.673585,82.7920213 309.971698,83.1654255 C309.349057,83.3728723 306.50566,83.393617 306.173585,82.7297872 C305.509434,81.4228723 307.232075,80.3026596 307.522642,79.0787234 C307.813208,77.8547872 307.190566,77.9170213 306.360377,77.6680851 C305.115094,77.2739362 304.783019,79.7425532 304.637736,80.5930851 C304.409434,81.8170213 304.035849,81.0909574 303.20566,81.7547872 C302.375472,82.418617 301.462264,83.3728723 300.943396,82.418617 C300.479364,81.6674042 300.116487,80.8582994 299.864151,80.012234 C299.573585,78.8505319 299.033962,78.6223404 297.788679,78.9335106 C296.543396,79.2446809 296.066038,78.2696809 295.609434,77.1494681 C295.381132,76.6101064 294.696226,76.7968085 294.44717,75.987766 C294.221779,75.3362317 293.773394,74.7852054 293.181132,74.4319149 C293.181132,74.1 293.762264,73.581383 293.949057,73.2494681 C294.139336,72.7895319 294.231242,72.294894 294.218868,71.7973404 C294.339543,70.6942448 294.339543,69.5812871 294.218868,68.4781915 C293.969811,67.5654255 294.032075,67.4202128 294.779245,66.8808511 C295.920755,66.0303191 294.09434,65.4909574 294.343396,64.806383 C294.592453,64.1218085 295.111321,64.806383 295.277358,65.1382979 C295.733962,66.1132979 296.003774,65.3042553 295.941509,64.7026596 C295.941509,64.412234 295.484906,63.1675532 295.941509,63.0430851 C296.04529,62.6206361 296.04529,62.1793639 295.941509,61.7569149 C295.458721,61.5942714 294.998462,61.3712234 294.571698,61.0930851 C294.40566,60.7819149 294.966038,60.1180851 295.028302,59.8069149 C295.339623,58.2510638 294.613208,58.5829787 293.471698,58.5829787 L293.471698,58.5829787 C293.471698,57.9191489 294.550943,57.6702128 294.820755,57.0893617 C295.090566,56.5085106 295.796226,55.8446809 295.692453,55.3882979 C295.588679,54.9319149 294.820755,54.143617 295.049057,53.9984043 C295.277358,53.8531915 296.377358,53.9984043 296.937736,53.8531915 C297.498113,53.7079787 297.581132,53.5835106 297.975472,53.5835106 C298.369811,53.5835106 299.033962,53.7287234 299.511321,53.7494681 C299.988679,53.7702128 300.611321,54.7867021 301.171698,54.3510638 L302.396226,53.8531915 L302.396226,53.8531915 L303.20566,54.1851064 C303.20566,54.7659574 302.935849,55.1601064 303.724528,55.1601064 C303.724528,55.9484043 303.164151,56.55 303.724528,57.2345745 C304.284906,57.9191489 305.675472,56.1558511 305.8,55.637234 C305.986792,54.7244681 306.630189,54.4340426 307.232075,55.2015957 C307.584906,55.6579787 308.518868,55.637234 308.498113,56.3632979 L308.498113,58.2095745 C308.498113,59.2882979 309.369811,59.6202128 309.84717,60.6574468 C310.137736,61.3005319 310.677358,60.0351064 311.403774,60.6574468 C312.483019,61.4042553 312.026415,62.918617 313.479245,60.6574468 C314.932075,58.3962766 315.907547,61.2175532 317.215094,60.6574468 L317.215094,60.6574468 C317.692453,60.6574468 318.29434,61.2175532 318.750943,61.3420213 C320.320601,61.8660642 321.847198,62.5110863 323.316981,63.2712766 C324.603774,63.831383 328.526415,63.375 328.962264,64.9308511 C329.688679,67.5239362 330.39434,66.4244681 332.55283,67.212766 C333.735849,67.6276596 334.275472,69.4117021 334.981132,70.2414894 C336.475472,72.0255319 339.256604,72.6478723 341.207547,73.7265957 C341.797254,74.0648199 342.36562,74.4389285 342.909434,74.8468085 L342.058491,76.7345745 C342.058491,77.6888298 341.311321,76.9212766 340.979245,76.7345745 C340.64717,76.5478723 340.128302,77.1287234 339.671698,76.7345745 C338.011321,75.6973404 338.509434,76.7345745 337.596226,77.4606383 C336.683019,78.1867021 335.064151,79.9707447 335.333962,81.1324468 C335.5,81.837766 335.562264,82.2734043 336.288679,82.5430851 C337.015094,82.812766 337.513208,82.7090426 337.762264,83.6632979 L337.762264,83.6632979 L337.450943,84.0367021 C337.243396,84.1611702 336.911321,84.4515957 336.911321,84.7212766 L336.911321,85.4058511 L336.932075,85.343617 Z M300.383019,55.5957447 L300.383019,55.3053191 C300.393407,55.1613422 300.309504,55.0271619 300.175472,54.9734043 L299.864151,54.9734043 C299.781132,54.9734043 299.55283,55.2015957 299.677358,55.3882979 C299.702851,55.4693205 299.702851,55.5562114 299.677358,55.637234 C299.677358,55.7824468 299.94717,55.8031915 300.050943,55.8031915 L300.383019,55.5957447 Z M298.307547,54.7659574 L297.996226,54.7659574 C297.996226,54.7659574 297.871698,54.8696809 297.850943,54.9319149 C297.830189,54.9941489 297.70566,55.2223404 297.850943,55.2845745 C297.996226,55.3468085 298.016981,55.2845745 298.079245,55.2845745 C298.212928,55.1842646 298.370157,55.1199745 298.535849,55.0978723 L298.307547,54.8074468 L298.307547,54.7659574 Z" , "name" : "La Rioja"}
            ,
            "ES-AR": {
				"path":"M337.7,83.6010638 L338.467925,83.6010638 C338.651223,83.5704015 338.837806,83.6325658 338.966038,83.7670213 C339.298113,84.1196809 339.567925,83.7670213 339.962264,83.7670213 C340.356604,83.7670213 340.543396,83.9744681 340.709434,84.306383 C341.207547,85.9037234 342.556604,85.1154255 343.718868,85.1154255 C345.316981,85.1154255 346.14717,88.1026596 348.139623,87.3351064 C349.369608,86.7620034 350.705504,86.4511515 352.062264,86.4223404 C353.432075,86.4223404 353.515094,84.9909574 353.909434,83.9744681 C354.075472,83.5803191 356.566038,80.1159574 355.466038,80.2404255 C354.366038,80.3648936 354.718868,79.4728723 354.054717,78.8920213 C353.390566,78.3111702 352.518868,77.5643617 352.684906,76.8175532 C352.850943,76.0707447 353.162264,75.2617021 352.871698,74.618617 C352.581132,73.9755319 352.249057,73.8095745 352.166038,73.4154255 C352.083019,73.0212766 352.539623,72.5026596 352.622642,72.212234 C352.741462,71.2085492 352.992701,70.2250045 353.369811,69.287234 C353.535849,68.9760638 355.756604,66.3207447 354.864151,66.2585106 C353.971698,66.1962766 353.971698,65.8021277 354.366038,65.2005319 C354.760377,64.5989362 354.781132,63.7276596 355.320755,63.1260638 C355.860377,62.5244681 356.79434,62.3170213 356.856604,61.3420213 C356.856604,60.7611702 356.441509,60.0351064 356.586792,59.5579787 C356.732075,59.0808511 356.815094,57.9191489 357.10566,57.6079787 C357.396226,57.2968085 358.662264,58.9148936 359.388679,57.6079787 C359.575472,57.2760638 359.284906,56.9856383 359.596226,56.5914894 C359.907547,56.1973404 360.8,56.1351064 360.260377,55.1808511 C359.969811,54.6829787 360.509434,54.7037234 360.8,54.8281915 C361.090566,54.9526596 361.028302,53.6457447 361.339623,53.4175532 C361.983019,52.9611702 363.166038,53.5212766 363.913208,53.4175532 C365.449057,53.9984043 364.971698,52.4010638 365.220755,51.5920213 C365.615094,50.2851064 365.822642,51.0319149 366.818868,50.8659574 C367.815094,50.7 368.562264,49.2893617 369.496226,48.7914894 C370.094056,48.4896733 370.675957,48.1573193 371.239623,47.7957447 C372.298113,47.0074468 371.239623,47.0696809 371.09434,46.3228723 C371.40566,45.887234 371.09434,44.9952128 371.364151,44.5388298 C371.674268,44.1839371 371.952098,43.8021052 372.19434,43.3978723 C372.526415,42.6925532 372.526415,41.8212766 373.169811,41.3234043 C373.913591,40.820407 374.80686,40.5862203 375.701887,40.6595745 L375.701887,40.6595745 L375.701887,41.2819149 C375.701887,41.7797872 376.158491,42.0287234 376.220755,42.3191489 C376.283019,42.6095745 377.65283,42.3191489 377.65283,42.5680851 C378.00566,42.5680851 378.524528,44.0409574 379.167925,44.1446809 C379.167925,44.2691489 379.479245,44.331383 379.5,44.4351064 C379.935849,44.4351064 379.956604,45.5138298 380.081132,45.8457447 C380.392453,46.7170213 380.932075,45.0989362 381.30566,46.1154255 C380.703774,48.1898936 382.426415,46.9037234 382.675472,46.1154255 L382.883019,45.5138298 C383.277358,44.4143617 383.796226,45.762766 384.543396,45.762766 C384.792453,46.7585106 386.162264,45.762766 386.618868,45.762766 C386.84717,46.6962766 388.964151,44.5595745 389.4,44.393617 C391.475472,43.5845745 392.450943,46.281383 393.820755,46.4680851 C394.111321,46.4680851 395.003774,46.2398936 395.128302,46.3228723 C395.87495,47.3153382 396.567771,48.3471412 397.203774,49.4138298 C397.203774,49.8287234 398.366038,50.4510638 398.698113,50.7 C399.030189,50.9489362 400.586792,51.675 400.877358,51.3015957 C401.479245,50.5547872 401.209434,50.7829787 401.998113,50.9696809 C402.786792,51.156383 402.99434,50.7414894 403.409434,50.181383 C403.824528,49.6212766 404.343396,50.0569149 404.716981,50.181383 C405.495439,50.0533176 406.246413,49.7937606 406.937736,49.4138298 C407.684906,48.9367021 408.079245,50.0154255 408.764151,49.9117021 C410.258491,49.7042553 409.760377,51.675 410.839623,51.9861702 C411.420755,52.193617 411.960377,51.8617021 411.815094,51.1771277 C411.669811,50.4925532 412.209434,50.4718085 412.5,49.9531915 C413.579245,49.6005319 413.101887,50.0569149 413.828302,50.243617 C413.85891,50.3122935 413.909546,50.3701356 413.973585,50.4095745 C413.973585,50.9074468 415.322642,51.3015957 415.737736,51.1356383 C416.291881,50.9194033 416.893733,50.8549503 417.481132,50.9489362 C418.373585,51.156383 419.141509,50.5132979 420.137736,50.8037234 C420.511321,50.8037234 420.90566,50.8037234 421.320755,50.9904255 C421.775871,51.1782215 422.260786,51.2835867 422.75283,51.3015957 C422.944229,51.2731085 423.13207,51.2244326 423.313208,51.156383 L423.313208,51.156383 L423.832075,52.0898936 C424.346459,52.6076991 424.699698,53.2633973 424.849057,53.9776596 C425.098113,54.6829787 425.886792,54.7867021 426.592453,54.7867021 C426.835211,55.7997459 426.622925,56.8682368 426.011321,57.7117021 C425.264151,59.2053191 425.824528,58.437766 426.156604,59.7861702 C426.281132,60.3255319 425.284906,60.4292553 424.932075,60.5537234 C424.579245,60.6781915 424.433962,61.1760638 424.766038,61.5702128 C425.098113,61.9643617 424.620755,62.6904255 425.34717,63.0845745 C426.073585,63.4787234 425.7,64.1010638 425.886792,64.8271277 C426.073585,65.5531915 425.513208,66.1132979 425.741509,66.4244681 C425.969811,66.7356383 427.215094,66.4244681 426.862264,67.0053191 C425.886792,68.3537234 426.862264,67.8973404 426.44717,69.0797872 C425.630076,70.8915626 425.084592,72.8138118 424.828302,74.7845745 C424.955975,76.4819878 424.663733,78.1847206 423.977358,79.7425532 C423.866573,80.1747883 423.67657,80.5827465 423.416981,80.9457447 C423.022642,81.7340426 423.728302,82.5223404 422.918868,83.393617 C422.447905,83.9002443 421.934046,84.36527 421.383019,84.7835106 C420.884906,84.7835106 420.179245,85.3228723 420.532075,85.9244681 C421.001703,86.8784121 421.283543,87.9136744 421.362264,88.9739362 C421.362264,89.8867021 419.701887,89.7207447 419.660377,90.4675532 C419.618868,91.2143617 419.120755,91.4632979 418.35283,91.4632979 C417.584906,91.4632979 416.983019,92.7909574 416.983019,93.537766 C416.983019,94.6787234 415.135849,93.9319149 414.492453,94.4505319 L414.492453,94.4505319 C414.118868,95.9648936 410.611321,97.6037234 412.167925,99.0558511 C413.060377,99.8856383 412.479245,100.176064 412.728302,101.130319 C412.977358,102.084574 414.513208,101.503723 415.301887,101.503723 C415.675472,102.644681 415.779245,106.088298 414.181132,106.58617 C413.516981,106.793617 411.379245,106.58617 412.479245,107.955319 C412.920038,108.641714 412.746846,109.55281 412.084906,110.029787 C411.524528,111.15 412.583019,111.398936 413.164151,112.104255 C413.745283,112.809574 413.309434,112.913298 412.977358,113.265957 C412.645283,113.618617 412.977358,114.137234 413.309434,114.38617 C413.641509,114.635106 413.620755,116.979255 413.475472,117.518617 C413.20566,118.618085 411.669811,118.244681 411.4,119.240426 C411.130189,120.23617 411.566038,120.858511 410.984906,121.439362 C410.403774,122.020213 409.864151,121.875 409.55283,122.165426 C409.241509,122.455851 409.55283,122.725532 408.992453,122.995213 C408.432075,123.264894 407.581132,122.663298 407.581132,123.534574 C407.613283,124.253827 407.789733,124.959285 408.1,125.609043 C408.80566,126.667021 409.59434,127.123404 410.175472,128.326596 C411.213208,130.815957 408.867925,131.811702 409.2,133.948404 C409.345283,134.840426 409.822642,135.794681 410.030189,136.665957 C410.237736,137.537234 409.158491,138.118085 408.950943,138.740426 C408.850117,139.102829 408.590729,139.400219 408.245283,139.549468 C407.855824,139.699108 407.452643,139.810277 407.041509,139.881383 C406.833962,139.881383 406.64717,139.881383 406.481132,140.026596 C406.315094,140.171809 406.481132,140.794149 406.481132,141.02234 L406.481132,141.02234 L405.920755,141.395745 C405.567925,141.540957 405.19434,141.72766 404.841509,141.395745 C404.488679,141.06383 404.592453,141.146809 404.301887,141.167553 C403.575472,141.167553 403.098113,141.893617 402.6,142.329255 C402.454717,142.557447 402.184906,142.536702 401.998113,142.640426 C401.10566,141.312766 401.603774,141.043085 399.590566,141.043085 C398.063783,141.004732 396.649383,140.232209 395.792453,138.968617 C395.792453,138.76117 395.667925,138.221809 395.439623,138.221809 C394.367071,138.185479 393.404377,138.875218 393.09434,139.902128 C392.533962,141.603191 392.762264,142.515957 391.018868,143.407979 C389.75283,144.030319 390.022642,143.615426 388.943396,143.262766 C387.864151,142.910106 388.133962,144.528191 387.822642,145.212766 C387.511321,145.89734 389.75283,146.332979 390.230189,146.332979 C390.230189,146.332979 390.707547,146.146277 390.728302,146.208511 C390.749057,146.270745 390.728302,147.764362 390.728302,147.971809 C390.728302,148.179255 390.562264,150.668617 390.85283,150.751596 C391.454717,150.959043 391.890566,151.913298 391.267925,152.390426 C390.645283,152.867553 390.001887,152.639362 389.628302,153.033511 C388.901887,153.759574 389.503774,154.257447 389.773585,154.921277 C390.043396,155.585106 391.454717,156.684574 391.330189,156.995745 C390.853392,157.333566 390.354122,157.638527 389.835849,157.908511 C389.088679,158.655319 388.860377,159.485106 387.760377,159.858511 C386.660377,160.231915 387.760377,161.061702 387.760377,161.518085 C387.760377,162.679787 384.25283,163.405851 383.401887,163.115426 C383.049057,162.990957 382.592453,162.451596 382.260377,162.451596 C381.849084,163.531356 381.550025,164.650546 381.367925,165.791489 C381.015094,167.222872 380.392453,167.575532 379.645283,168.695745 C379.167925,169.401064 379.769811,169.878191 379.769811,170.521277 C379.430111,170.604024 379.081718,170.645811 378.732075,170.645745 C377.403774,172.305319 375.598113,171.226596 374.581132,172.88617 C373.875472,174.068617 372.111321,174.276064 371.883019,175.271809 C371.82357,176.265066 372.07766,177.251907 372.609434,178.093085 C372.775472,178.300532 373.460377,178.922872 373.439623,179.026596 L373.439623,179.026596 C373.439623,179.213298 372.360377,179.545213 372.173585,179.731915 C371.986792,179.918617 371.177358,180.68617 370.803774,180.68617 C370.7,180.375 369.890566,179.690426 369.662264,179.379255 C369.433962,179.068085 370.015094,178.196809 369.662264,177.989362 C369.662264,177.221809 369.973585,176.350532 369.392453,175.769681 C368.811321,175.18883 367.316981,175.230319 367.088679,174.525 C366.320755,174.421277 365.781132,174.856915 365.013208,174.670213 C364.84717,174.17234 363.477358,174.898404 363.228302,175.002128 L361.816981,175.002128 L361.15283,173.321809 C362.045283,173.031383 364.598113,172.097872 363.996226,170.853191 C363.038372,169.598826 361.526161,168.893469 359.949057,168.965426 C358.101887,169.214362 358.24717,168.799468 357.873585,167.451064 C357.728302,167.015426 357.209434,166.787234 356.918868,166.393085 C356.556961,165.901763 356.373891,165.301584 356.4,164.692021 L356.4,164.692021 C354.179245,165.231383 356.815094,168.840957 353.411321,168.135638 L351.211321,167.741489 L351.211321,167.741489 C351.211321,167.534043 351.64717,165.418085 351.377358,165.314362 C351.107547,165.210638 350.132075,165.957447 349.530189,165.501064 C348.928302,165.044681 349.011321,165.065426 348.513208,165.231383 C348.015094,165.39734 347.454717,165.418085 346.915094,164.733511 C346.375472,164.048936 346.064151,163.364362 345.067925,163.011702 C344.071698,162.659043 343.407547,160.148936 342.681132,160.335638 C342.432075,160.335638 341.767925,161.85 341.70566,161.580319 C341.269811,161.580319 341.539623,159.754787 342.162264,159.671809 C342.162264,159.422872 342.162264,159.007979 341.74717,158.925 L339.692453,156.518617 C338.239623,156.414894 338.592453,155.64734 339.54717,155.232447 C340.066038,155.025 340.25283,154.070745 340.64717,153.69734 C341.041509,153.323936 341.643396,154.153723 341.913208,153.42766 C342.183019,152.701596 342.535849,147.702128 343.345283,147.702128 C343.946099,148.073745 344.595723,148.36 345.275472,148.55266 C346.292453,148.780851 346.209434,148.55266 346.873585,148.013298 C347.537736,147.473936 346.873585,145.378723 347.496226,145.233511 L347.496226,145.233511 C348.430189,144.756383 347.143396,141.582447 347.24717,140.731915 C347.350943,139.881383 348.118868,137.744681 347.24717,137.060106 C346.375472,136.375532 344.632075,134.86117 345.00566,133.409043 C345.254717,132.392553 345.732075,132.102128 344.528302,131.334574 C343.501471,130.571582 342.598419,129.654972 341.850943,128.617021 C340.925885,127.890334 340.162488,126.978939 339.609434,125.940957 C338.841509,124.426596 337.679245,125.256383 336.683019,124.468085 C336.24717,124.115426 336.288679,123.410106 335.977358,123.119681 C335.313208,122.455851 334.545283,124.156915 334.233962,122.393617 C334.233962,122.123936 333.777358,121.709043 333.777358,121.543085 C332.55283,121.543085 331.701887,122.435106 330.332075,122.248404 L330.332075,122.248404 L329.709434,121.688298 C329.269508,121.389756 328.776291,121.17848 328.256604,121.065957 C328.15283,121.065957 327.135849,120.858511 327.115094,120.837766 C327.09434,120.817021 327.115094,119.883511 327.115094,119.738298 C327.171787,119.255914 327.171787,118.768554 327.115094,118.28617 C326.845283,117.228191 326.409434,116.211702 326.201887,115.132979 C326.201887,114.510638 326.866038,114.157979 326.513208,113.514894 C326.160377,112.871809 327.260377,113.037766 327.633962,112.685106 C328.443396,111.917553 328.028302,109.2 328.671698,109.013298 C329.367856,109.019831 330.032672,109.303548 330.518868,109.801596 C330.954717,110.548404 330.996226,112.290957 332.013208,111.606383 L333.611321,110.506915 C334.420755,109.946809 333.445283,107.581915 332.926415,106.876596 C332.407547,106.171277 332.926415,105.134043 333.113208,104.449468 C333.3,103.764894 331.764151,102.706915 332.511321,101.877128 C333.258491,101.04734 335.001887,102.457979 335.126415,101.420745 C335.562264,101.109574 335.811321,100.093085 336.101887,100.093085 C336.766038,100.093085 336.99434,99.7819149 337.098113,99.1803191 C338.364151,98.6617021 338.675472,99.7611702 338.675472,97.8734043 C338.675472,97.1473404 339.650943,96.981383 339.650943,95.7989362 L339.650943,95.7989362 C338.135849,95.4255319 338.945283,93.7244681 337.575472,93.2265957 C337.575472,91.8989362 339.173585,90.1356383 337.949057,88.7664894 C337.367925,88.1026596 337.201887,87.9781915 337.201887,87.0654255 L337.201887,85.4473404 L337.201887,85.4473404 L337.201887,84.762766 C337.201887,84.5345745 337.533962,84.2026596 337.741509,84.0781915 L338.05283,83.7047872 L337.7,83.6010638 Z M361.132075,64.3085106 C361.132075,64.1010638 361.132075,63.8728723 361.298113,63.6654255 C361.351731,63.4825692 361.351731,63.2881755 361.298113,63.1053191 C361.298113,62.6281915 360.862264,63.1053191 360.675472,63.2505319 C360.39432,63.5668681 360.188539,63.9427694 360.073585,64.35 C360.073585,64.4537234 359.928302,64.7441489 360.073585,64.8478723 C360.218868,64.9515957 360.633962,64.6404255 360.820755,64.5159574 L361.069811,64.3085106 L361.132075,64.3085106 Z M364.016981,61.4457447 C363.622642,61.4457447 363.290566,60.2632979 362.813208,60.968617 C362.718911,61.154587 362.642469,61.3490743 362.584906,61.5494681 C362.439623,61.8606383 361.962264,62.337766 362.25283,62.7111702 C362.543396,63.0845745 363.539623,63.1053191 364.141509,63.1053191 C365.262264,63.1053191 364.141509,62.3792553 364.141509,61.8191489 L364.141509,61.4664894 L364.016981,61.4457447 Z" , "name" : "Aragón"}
            ,"ES-NA": {
				"path":"M375.743396,40.5973404 C375.755912,40.4662552 375.755912,40.3342767 375.743396,40.2031915 C375.630808,39.5538075 375.375634,38.9374336 374.996226,38.3984043 C374.498113,37.962766 370.596226,40.1824468 370.243396,38.8132979 C370.015094,38.8132979 369.122642,38.1494681 368.977358,38.8132979 L368.977358,38.8132979 C368.832075,39.4148936 367.773585,38.937766 367.690566,38.6265957 C367.15613,38.4677532 366.651334,38.2224849 366.196226,37.9005319 C365.967925,37.6723404 366.196226,37.1744681 365.760377,37.1744681 C365.449875,37.206376 365.136917,37.206376 364.826415,37.1744681 C363.975472,36.9670213 363.788679,37.1744681 363.518868,36.3239362 C363.518868,36.2202128 362.916981,36.0335106 362.771698,35.9505319 C361.962264,35.5148936 362.439623,36.137234 361.775472,36.3861702 C361.422642,36.531383 361.381132,35.3281915 360.675472,35.3281915 C359.969811,35.3281915 359.139623,33.7723404 358.433962,34.5191489 C357.728302,35.2659574 356.04717,33.8968085 356.04717,33.0462766 C356.17296,32.4101031 356.527317,31.8419301 357.043396,31.4489362 C355.839623,31.4489362 355.507547,31.5734043 354.967925,32.5484043 C354.656604,33.0462766 354.967925,35.3489362 354.283019,35.3489362 C353.224528,35.3489362 348.824528,33.5234043 350.775472,32.1542553 C351.80935,31.5210041 352.514511,30.467563 352.70566,29.2707447 C352.70566,28.0260638 353.930189,26.9680851 353.49434,25.412234 C353.058491,23.856383 351.149057,24.4164894 349.966038,23.8148936 C349.232714,23.3110307 348.33278,23.1103161 347.454717,23.2547872 C347.454717,23.2547872 347.330189,23.7734043 347.454717,23.7941489 C347.454717,24.893617 346.769811,25.4329787 345.75283,24.7069149 C344.735849,23.9808511 345.254717,23.4207447 345.254717,22.6324468 L345.254717,22.6324468 C344.756604,22.6324468 344.196226,22.362766 343.615094,22.362766 C343.033962,22.362766 342.245283,22.6946809 341.539623,22.6946809 L341.539623,22.6946809 L339.796226,23.7941489 C339.550107,24.8474169 338.902201,25.762979 337.990566,26.3457447 C337.315744,26.8039822 336.495019,26.9961311 335.686792,26.8851064 C335.458491,26.8851064 335.14717,28.275 335.126415,28.5446809 C335.126415,29.6441489 335.271698,29.3537234 335.5,30.225 C335.5,30.5361702 334.254717,32.2994681 333.964151,32.5691489 C333.673585,32.8388298 332.511321,33.2537234 332.033962,33.7101064 C331.556604,34.1664894 331.826415,34.6228723 331.49434,35.1 C330.664151,36.2617021 331.058491,35.618617 331.141509,36.987766 C331.224528,38.3569149 330.103774,37.8382979 329.25283,38.481383 C328.844083,39.2934185 328.073786,39.8631628 327.177358,40.0164894 C326.284906,40.0164894 326.118868,39.4356383 325.558491,39.4978723 C324.396226,39.6015957 323.732075,41.5723404 324.10566,42.5473404 C325.060377,44.85 322.341509,45.5138298 323.088679,47.7542553 C323.420755,48.75 322.818868,49.3101064 321.884906,49.4138298 C320.950943,49.5175532 321.635849,50.9696809 321.635849,51.8409574 C321.635849,52.712234 321.801887,52.0691489 322.175472,52.0276596 C322.549057,51.9861702 322.403774,52.9404255 322.403774,53.0856383 C322.403774,53.2308511 321.884906,53.3138298 321.635849,53.3138298 C321.386792,53.3138298 320.930189,53.8531915 320.618868,53.9361702 C319.643396,54.1851064 319.643396,53.9361702 319.186792,53.1893617 C318.460377,52.0276596 317.111321,53.9569149 316.571698,54.4547872 C316.032075,54.9526596 315.658491,54.7452128 315.637736,55.056383 C315.679613,55.4285457 315.777576,55.7922349 315.928302,56.1351064 C316.260377,56.3425532 316.530189,56.1351064 316.633962,56.5707447 C316.633962,56.5707447 316.509434,57.4005319 316.779245,57.1930851 C317.049057,56.9856383 317.54717,56.0521277 318.045283,55.512766 C318.232075,55.3053191 318.626415,55.8239362 318.750943,55.9898936 C318.842784,56.6018961 318.842784,57.2241677 318.750943,57.8361702 L318.439623,59.4957447 L317.360377,60.6989362 L317.360377,60.6989362 C317.837736,60.6989362 318.439623,61.2590426 318.896226,61.3835106 C320.465884,61.9075536 321.992481,62.5525757 323.462264,63.312766 C324.749057,63.8728723 328.671698,63.4164894 329.107547,64.9723404 C329.833962,67.5654255 330.539623,66.4659574 332.698113,67.2542553 C333.881132,67.6691489 334.420755,69.4531915 335.126415,70.2829787 C336.620755,72.0670213 339.401887,72.6893617 341.35283,73.7680851 C341.942537,74.1063093 342.510903,74.4804179 343.054717,74.8882979 L342.203774,76.7760638 C342.203774,77.7303191 341.456604,76.962766 341.124528,76.7760638 C340.792453,76.5893617 340.273585,77.1702128 339.816981,76.7760638 C338.156604,75.7388298 338.654717,76.7760638 337.741509,77.5021277 C336.828302,78.2281915 335.209434,80.012234 335.479245,81.1739362 C335.645283,81.8792553 335.707547,82.3148936 336.433962,82.5845745 C337.160377,82.8542553 337.658491,82.7505319 337.907547,83.7047872 L338.675472,83.7047872 C338.85877,83.6741249 339.045353,83.7362892 339.173585,83.8707447 C339.50566,84.2234043 339.775472,83.8707447 340.169811,83.8707447 C340.564151,83.8707447 340.750943,84.0781915 340.916981,84.4101064 C341.415094,86.0074468 342.764151,85.2191489 343.926415,85.2191489 C345.524528,85.2191489 346.354717,88.206383 348.34717,87.4388298 C349.577155,86.8657268 350.913051,86.5548749 352.269811,86.5260638 C353.639623,86.5260638 353.722642,85.0946809 354.116981,84.0781915 C354.283019,83.6840426 356.773585,80.2196809 355.673585,80.3441489 C354.573585,80.468617 354.926415,79.5765957 354.262264,78.9957447 C353.598113,78.4148936 352.726415,77.6680851 352.892453,76.9212766 C353.058491,76.1744681 353.369811,75.3654255 353.079245,74.7223404 C352.788679,74.0792553 352.456604,73.9132979 352.373585,73.5191489 C352.290566,73.125 352.74717,72.606383 352.830189,72.3159574 C352.949009,71.3122726 353.200248,70.3287279 353.577358,69.3909574 C353.743396,69.0797872 355.964151,66.4244681 355.071698,66.362234 C354.179245,66.3 354.179245,65.9058511 354.573585,65.3042553 C354.967925,64.7026596 354.988679,63.831383 355.528302,63.2297872 C356.067925,62.6281915 357.001887,62.4207447 357.064151,61.4457447 C357.064151,60.8648936 356.649057,60.1388298 356.79434,59.6617021 C356.939623,59.1845745 357.022642,58.0228723 357.313208,57.7117021 C357.603774,57.4005319 358.869811,59.018617 359.596226,57.7117021 C359.783019,57.3797872 359.492453,57.0893617 359.803774,56.6952128 C360.115094,56.3010638 361.007547,56.2388298 360.467925,55.2845745 C360.177358,54.7867021 360.716981,54.8074468 361.007547,54.9319149 C361.298113,55.056383 361.235849,53.7494681 361.54717,53.5212766 C362.190566,53.0648936 363.373585,53.625 364.120755,53.5212766 C365.656604,54.1021277 365.179245,52.5047872 365.428302,51.6957447 C365.822642,50.3888298 366.030189,51.1356383 367.026415,50.9696809 C368.022642,50.8037234 368.769811,49.3930851 369.703774,48.8952128 C370.301603,48.5933967 370.883504,48.2610427 371.44717,47.8994681 C372.50566,47.1111702 371.44717,47.1734043 371.301887,46.4265957 C371.613208,45.9909574 371.301887,45.0989362 371.571698,44.6425532 C371.881815,44.2876605 372.159645,43.9058286 372.401887,43.5015957 C372.733962,42.7962766 372.733962,41.925 373.377358,41.4271277 C374.121138,40.9241304 375.014407,40.6899437 375.909434,40.7632979 L375.743396,40.5973404 Z M361.215094,64.3085106 C361.215094,64.1010638 361.215094,63.8728723 361.381132,63.6654255 C361.43475,63.4825692 361.43475,63.2881755 361.381132,63.1053191 C361.381132,62.6281915 360.945283,63.1053191 360.758491,63.2505319 C360.477339,63.5668681 360.271558,63.9427694 360.156604,64.35 C360.156604,64.4537234 360.011321,64.7441489 360.156604,64.8478723 C360.301887,64.9515957 360.716981,64.6404255 360.903774,64.5159574 L361.15283,64.3085106 L361.215094,64.3085106 Z M364.1,61.4457447 C363.70566,61.4457447 363.373585,60.2632979 362.896226,60.968617 C362.80193,61.154587 362.725488,61.3490743 362.667925,61.5494681 C362.522642,61.8606383 362.045283,62.337766 362.335849,62.7111702 C362.626415,63.0845745 363.622642,63.1053191 364.224528,63.1053191 C365.345283,63.1053191 364.224528,62.3792553 364.224528,61.8191489 L364.224528,61.4664894 L364.1,61.4457447 Z" , "name" : "Comunidad Foral de Navarra"}
            ,"ES-PV": {
				"path":"M283.343396,30.5361702 L285.086792,29.9138298 C285.854717,29.7478723 286.518868,28.9180851 287.162264,28.6069149 C287.80566,28.2957447 287.909434,27.6526596 288.428302,27.4244681 C288.94717,27.1962766 289.590566,28.3579787 290.150943,28.6484043 C290.711321,28.9388298 291.89434,28.6484043 292.662264,28.6484043 L292.662264,28.6484043 C292.662264,28.6484043 292.786792,28.9388298 292.662264,28.9803191 C292.558491,29.4367021 291.520755,30.4324468 291.520755,31.0547872 C291.520755,31.6771277 292.745283,31.9468085 293.34717,32.0920213 C293.34717,32.5898936 292.662264,32.7765957 292.662264,33.3989362 C292.99434,34.643617 293.098113,35.1829787 291.769811,35.618617 C291.769811,36.1579787 293.533962,36.4069149 293.845283,36.531383 C294.156604,36.6558511 294.364151,36.7803191 295.173585,36.531383 C295.983019,36.2824468 295.962264,37.6101064 296.211321,38.025 C296.40981,38.331158 296.690246,38.5755221 297.020755,38.7303191 C297.207547,38.7303191 298.037736,39 298.037736,39.1659574 C298.535849,39.3319149 297.186792,40.5143617 296.979245,40.7425532 C296.205932,41.4645623 295.239988,41.9473011 294.198113,42.1324468 C293.659361,41.9125915 293.16127,41.604065 292.724528,41.2196809 C292.350943,40.8255319 292.724528,40.1202128 292.454717,39.6638298 C291.82254,39.4825356 291.17719,39.3507538 290.524528,39.2696809 C289.818868,39.1037234 289.756604,38.9792553 289.445283,39.7675532 C289.303088,40.2348541 289.062479,40.6663254 288.739623,41.0329787 C287.84717,41.8835106 287.701887,42.1324468 288.739623,43.1074468 C289.279245,43.6468085 289.237736,44.2069149 289.632075,44.7047872 C290.026415,45.2026596 290.711321,44.5388298 291.022642,44.2484043 C291.333962,43.9579787 291.645283,43.9787234 291.956604,43.7505319 C292.267925,43.5223404 292.496226,43.0037234 292.99434,43.0867021 L293.969811,43.2526596 L293.969811,43.2526596 C293.492453,43.8542553 292.371698,45.0367021 292.371698,45.8664894 C292.620755,46.0739362 293.118868,46.0117021 293.243396,46.343617 L293.243396,47.5260638 C294.078815,47.4509193 294.919298,47.4509193 295.754717,47.5260638 C296.487596,48.3517275 297.301058,49.1022524 298.183019,49.7664894 C299.086929,50.2312053 300.01533,50.646706 300.964151,51.0111702 L301.545283,52.0691489 L302.10566,53.0648936 L302.458491,53.6042553 L302.458491,53.6042553 L303.267925,53.9361702 C303.267925,54.5170213 302.998113,54.9111702 303.786792,54.9111702 C303.786792,55.6994681 303.226415,56.3010638 303.786792,56.9856383 C304.34717,57.6702128 305.737736,55.9069149 305.862264,55.3882979 C306.049057,54.4755319 306.692453,54.1851064 307.29434,54.9526596 C307.64717,55.4090426 308.581132,55.3882979 308.560377,56.1143617 L308.560377,57.9606383 C308.560377,59.0393617 309.432075,59.3712766 309.909434,60.4085106 C310.2,61.0515957 310.739623,59.7861702 311.466038,60.4085106 C312.545283,61.1553191 312.088679,62.6696809 313.541509,60.4085106 C314.99434,58.1473404 315.969811,60.968617 317.277358,60.4085106 L317.277358,60.4085106 L318.356604,59.2053191 L318.667925,57.5457447 C318.759765,56.9337422 318.759765,56.3114706 318.667925,55.6994681 C318.543396,55.512766 318.128302,55.0148936 317.962264,55.2223404 C317.484906,55.7617021 317.277358,56.4462766 316.696226,56.9026596 C316.115094,57.3590426 316.592453,56.3840426 316.550943,56.2803191 C316.44717,55.7824468 316.177358,56.0728723 315.845283,55.8446809 C315.624672,55.5473478 315.449782,55.2187143 315.326415,54.8696809 C315.326415,54.5585106 316.011321,54.4962766 316.260377,54.2680851 C316.509434,54.0398936 318.149057,51.8409574 318.875472,53.0026596 C319.332075,53.7494681 319.332075,53.9984043 320.307547,53.7494681 C320.639623,53.7494681 321.013208,53.1478723 321.324528,53.1271277 C321.635849,53.106383 322.092453,53.3138298 322.092453,52.8989362 C322.092453,52.4840426 322.092453,51.8202128 321.864151,51.8409574 C321.635849,51.8617021 321.324528,52.3803191 321.324528,51.6542553 C321.324528,50.9281915 320.535849,49.3515957 321.573585,49.2271277 C322.611321,49.1026596 323.109434,48.5632979 322.777358,47.5675532 C322.030189,45.3271277 324.85283,44.6632979 323.79434,42.3606383 C323.420755,41.468617 324.084906,39.4148936 325.24717,39.3111702 C325.807547,39.3111702 325.973585,39.9335106 326.866038,39.8297872 C327.762465,39.6764606 328.532762,39.1067164 328.941509,38.2946809 C329.813208,37.6723404 331.016981,38.087234 330.830189,36.8010638 C330.643396,35.5148936 330.332075,36.0957447 331.183019,34.9132979 C331.535849,34.4361702 331.183019,34.062766 331.722642,33.5234043 C332.262264,32.9840426 333.279245,32.9010638 333.65283,32.3824468 C334.026415,31.8638298 335.250943,30.3079787 335.188679,30.0382979 C334.960377,29.1670213 334.75283,29.4574468 334.815094,28.3579787 C334.815094,28.0882979 335.14717,26.6984043 335.375472,26.6984043 C336.183699,26.809429 337.004424,26.6172801 337.679245,26.1590426 C338.59088,25.5762769 339.238786,24.6607148 339.484906,23.6074468 L341.228302,22.5079787 L341.228302,22.5079787 C341.020755,21.8856383 341.228302,21.3047872 340.522642,20.9728723 C339.816981,20.6409574 339.50566,20.4335106 339.50566,19.6244681 C339.50566,19.6244681 339.298113,18.8361702 339.235849,18.6494681 L339.235849,18.6494681 C337.471698,18.3590426 336.288679,20.7239362 334.79434,21.1388298 L331.930189,21.8856383 C330.453156,22.3945168 328.931287,22.7626449 327.384906,22.9851064 C326.134624,22.9714297 324.88931,22.8254021 323.669811,22.5494681 C322.818868,22.5494681 322.133962,23.2755319 321.096226,23.1095745 C319.85652,22.8333169 318.698241,22.2722136 317.713208,21.4707447 C316.530189,20.5787234 315.160377,20.5164894 313.956604,19.3962766 C313.230189,18.7117021 312.690566,18.7739362 311.881132,18.4212766 C310.573585,18.4212766 310.386792,17.1558511 308.871698,17.4670213 C307.864394,17.5373498 306.894464,17.072324 306.318868,16.2430851 C306.028302,15.4340426 306.318868,15.3095745 305.177358,15.8074468 C304.220458,16.3180314 303.148666,16.5751371 302.064151,16.5542553 C299.884906,16.5542553 299.988679,15.9734043 298.556604,17.7781915 C298.058491,18.4005319 297,18.6287234 296.64717,19.3132979 C296.29434,19.9978723 297.145283,20.7239362 297.145283,21.387766 C295.941509,21.387766 294.883019,19.5414894 293.575472,19.9771277 C293.313749,20.0705143 293.027761,20.0705143 292.766038,19.9771277 L292.766038,19.9771277 L292.6,21.2840426 C292.706439,21.7006475 292.662339,22.1414349 292.475472,22.5287234 C292.226415,22.5287234 291.375472,22.7984043 291.250943,23.0265957 C291.126415,23.2547872 291.126415,23.1510638 291.043396,23.1718085 C290.79434,24.1675532 289.839623,22.5909574 289.777358,22.4042553 L289.611321,22.4042553 C289.611321,22.7984043 288.366038,23.4207447 288.013208,23.1303191 C287.660377,22.8398936 287.016981,22.9021277 286.311321,22.9021277 C286.145283,23.5659574 286.498113,23.8978723 285.501887,23.9601064 C284.887229,24.1782149 284.352203,24.575677 283.966038,25.1010638 C283.966038,25.1010638 283.966038,25.1010638 283.841509,25.1010638 C283.841509,25.4329787 282.928302,25.6819149 282.658491,25.8271277 C282.388679,25.9723404 283.09434,27.0718085 283.011321,27.5489362 C282.937984,28.2384829 282.937984,28.9338575 283.011321,29.6234043 L283.260377,30.4739362 L283.343396,30.5361702 Z M288.739623,26.1797872 C288.884906,25.9930851 288.94717,25.6819149 289.071698,25.4744681 C289.172953,25.2980124 289.223245,25.0969393 289.216981,24.893617 C289.216981,24.7069149 288.988679,24.6031915 288.864151,24.5202128 C288.739623,24.437234 288.635849,24.3542553 288.449057,24.5202128 C288.262264,24.6861702 287.515094,24.7069149 287.473585,24.8521277 C287.400964,25.0835055 287.456228,25.3360182 287.618868,25.5159574 C287.826415,25.7026596 287.618868,26.262766 287.618868,26.5324468 C287.618868,26.8021277 288.2,26.843617 288.449057,26.5324468 L288.615094,26.2212766 L288.739623,26.1797872 Z M312.233962,50.0154255 C312.79434,49.5382979 312.607547,48.7707447 312.960377,48.293617 C312.636866,48.3398589 312.308417,48.3398589 311.984906,48.293617 C311.154717,48.0654255 311.445283,47.4845745 310.220755,47.5468085 C308.875992,47.3502356 307.559266,46.9951007 306.298113,46.4888298 C305.301887,46.2398936 304.450943,45.1404255 303.869811,46.4888298 C303.559969,47.2251567 303.162786,47.9216316 302.686792,48.5632979 C302.416981,48.8537234 304.015094,50.1191489 304.450943,50.5132979 C304.886792,50.9074468 305.44717,51.9239362 306.007547,52.193617 C306.962264,52.6707447 306.941509,52.6292553 307.916981,52.3180851 C309.307547,51.8617021 309.307547,52.8574468 310.283019,53.1271277 C311.258491,53.3968085 312.233962,52.8159574 312.856604,53.1271277 C313.14717,53.2930851 314.081132,53.8117021 314.226415,53.1271277 C314.195947,52.6040822 314.126573,52.0840287 314.018868,51.5712766 C313.85283,51.4260638 313.520755,51.9861702 313.313208,52.0276596 C312.067925,52.4218085 310.428302,51.6335106 311.69434,50.2643617 L312.233962,49.9531915 L312.233962,50.0154255 Z" , "name" : "País Vasco"}
            ,"ES-CA": {
				"path":"M234.383019,28.3787234 C234.486792,28.5446809 234.901887,29.4781915 234.756604,29.6648936 C234.239563,30.1028882 234.070885,30.8278523 234.341509,31.4489362 C234.527091,31.7404476 234.766589,31.993911 235.04717,32.1957447 C235.462264,32.4654255 236.043396,32.4861702 236.416981,32.8595745 C237.164151,33.668617 236.998113,33.6893617 237.95283,34.2079787 C238.409434,34.4569149 237.828302,35.9712766 238.616981,36.0542553 C238.990699,35.9864235 239.3585,35.8893156 239.716981,35.7638298 C240.50566,35.618617 240.837736,36.2617021 241.792453,35.7638298 C242.290566,35.5148936 242.830189,34.9340426 243.390566,35.3281915 C245.030189,36.5106383 244.573585,34.6228723 245.69434,34.6228723 C246.815094,34.6228723 246.483019,35.4941489 247.313208,34.3946809 C247.85283,33.668617 249.139623,34.7888298 249.907547,35.162234 C250.675472,35.5356383 250.675472,37.9420213 251.983019,38.025 C252.807383,37.9789957 253.633853,38.0630029 254.432075,38.2739362 C255.386792,38.5021277 255.490566,40.3484043 255.698113,41.0744681 C255.90566,41.8005319 255.698113,43.1489362 256.133962,43.9164894 C256.403774,44.1654255 256.424528,44.3728723 256.839623,44.3728723 C257.254717,44.3728723 257.545283,45.887234 258.313208,46.4473404 C259.6,47.3601064 259.662264,44.9329787 260.388679,46.9244681 C260.762264,48.0861702 261.364151,47.6920213 261.883019,46.737766 C262.090566,46.3228723 262.401887,46.2191489 262.713208,45.9494681 C263.024528,45.6797872 263.273585,43.5223404 263.564151,45.0367021 C263.854717,46.5510638 263.896226,48.5840426 265.639623,47.4845745 C266.163454,47.1537097 266.603813,46.7064637 266.926415,46.1776596 C267.216981,45.8042553 268.524528,47.2978723 269.396226,46.1776596 C269.977358,45.4308511 269.396226,44.85 269.396226,44.2898936 C269.396226,43.7297872 269.832075,43.2319149 269.396226,42.8585106 C268.960377,42.4851064 269.001887,42.1531915 268.711321,42.1739362 C268.420755,42.1946809 268.856604,43.3771277 267.549057,43.3771277 C266.967925,43.3771277 266.884906,42.2154255 267.050943,42.1531915 C266.511321,42.1531915 265.867925,41.7175532 266.428302,41.1574468 C266.988679,40.5973404 267.901887,42.2154255 268.503774,40.8255319 C268.877358,39.9957447 268.877358,40.431383 268.503774,39.4148936 C268.130189,38.3984043 266.822642,40.037234 266.303774,40.431383 C264.933962,41.4478723 263.937736,41.1574468 263.792453,39.3941489 C264.39434,38.8962766 264.145283,37.3196809 264.996226,36.8840426 C265.84717,36.4484043 267.071698,35.162234 268.316981,34.4154255 C269.562264,33.668617 270.018868,34.4154255 270.99434,33.2329787 C271.642196,32.6332636 272.336151,32.085304 273.069811,31.5941489 C273.983019,30.8058511 274.439623,29.0010638 275.269811,28.3994681 C275.848999,28.3646871 276.423976,28.517455 276.909434,28.8351064 C277.262264,29.8723404 277.033962,29.5819149 278.258491,29.5819149 C279.028213,29.6430662 279.777095,29.8619729 280.458491,30.225 C281.359671,30.4533012 282.293665,30.5234923 283.218868,30.4324468 L283.218868,30.4324468 L282.969811,29.5819149 C282.896474,28.8923681 282.896474,28.1969936 282.969811,27.5074468 C282.969811,27.0095745 282.34717,25.9308511 282.616981,25.7856383 C282.886792,25.6404255 283.716981,25.412234 283.8,25.0595745 L283.924528,25.0595745 C284.310693,24.5341877 284.845719,24.1367255 285.460377,23.918617 C286.456604,23.918617 286.103774,23.5244681 286.269811,22.8606383 C286.975472,22.8606383 287.473585,22.6739362 287.971698,23.0888298 C288.469811,23.5037234 289.486792,22.7776596 289.569811,22.362766 L289.735849,22.362766 C289.735849,22.5702128 290.773585,24.1260638 291.001887,23.1303191 C291.001887,23.1303191 291.126415,22.9851064 291.209434,22.9851064 C291.292453,22.9851064 292.184906,22.5494681 292.433962,22.487234 C292.620829,22.0999455 292.66493,21.6591581 292.558491,21.2425532 L292.724528,19.9356383 L292.724528,19.9356383 C292.453798,19.7723055 292.16902,19.6334565 291.873585,19.5207447 C291.001887,19.5207447 290.545283,18.2553191 289.798113,17.8611702 C289.050943,17.4670213 287.992453,17.4255319 287.120755,17.0728723 C285.25283,16.2845745 282.637736,17.8819149 282.430189,14.9984043 C282.430189,13.9404255 280.562264,14.625 280.064151,13.7537234 C279.067925,11.9904255 277.677358,12.5920213 276.079245,13.2765957 C274.674493,13.6157782 273.389596,14.3332504 272.364151,15.3510638 C271.513208,16.2015957 270.288679,18.2138298 270.122642,16.2015957 C270.122642,15.9526596 269.686792,15.7452128 269.707547,15.537766 C269.728302,15.3303191 271.367925,14.3138298 270.392453,13.7329787 C268.838788,13.985387 267.30052,14.3247504 265.784906,14.7494681 C265.016981,14.7494681 264.954717,15.8074468 264.020755,15.8074468 C261.281132,15.8074468 259.226415,17.2388298 256.549057,18.006383 C255.483275,18.2692642 254.388218,18.3947513 253.290566,18.3797872 C252.522642,18.3797872 251.754717,17.6744681 251.049057,17.9026596 C249.387996,18.2720235 247.679999,18.3839691 245.984906,18.2345745 L245.984906,18.2345745 L245.279245,19.437766 C245.279245,19.8526596 245.113208,20.1223404 245.279245,20.5787234 C245.507547,21.4292553 246.088679,22.943617 245.279245,23.7319149 C244.469811,24.5202128 244.490566,23.2755319 244.262264,23.0058511 C244.033962,22.7361702 243.224528,22.8191489 242.975472,22.7361702 C242.373585,22.5287234 242.269811,23.4414894 241.688679,23.8148936 C240.422642,24.6446809 238.969811,23.1095745 238.845283,25.3914894 C238.845283,26.9888298 237.620755,27.7148936 236.064151,27.7978723 L234.403774,28.1505319 L234.383019,28.3787234 Z M288.781132,26.1590426 C288.926415,25.9723404 288.988679,25.6611702 289.113208,25.4537234 C289.214462,25.2772677 289.264755,25.0761946 289.258491,24.8728723 C289.258491,24.6861702 289.030189,24.5824468 288.90566,24.4994681 C288.781132,24.4164894 288.677358,24.3335106 288.490566,24.4994681 C288.303774,24.6654255 287.556604,24.6861702 287.515094,24.831383 C287.442473,25.0627608 287.497737,25.3152735 287.660377,25.4952128 C287.867925,25.6819149 287.660377,26.2420213 287.660377,26.5117021 C287.660377,26.781383 288.241509,26.8228723 288.490566,26.5117021 L288.656604,26.2005319 L288.781132,26.1590426 Z" , "name" : "Cantabria"}
            ,"ES-PA": {
				"path":"M245.943396,18.462766 L245.237736,19.6659574 C245.237736,20.0808511 245.071698,20.3505319 245.237736,20.8069149 C245.466038,21.6574468 246.04717,23.1718085 245.237736,23.9601064 C244.428302,24.7484043 244.449057,23.5037234 244.220755,23.2340426 C243.992453,22.9643617 243.183019,23.0473404 242.933962,22.9643617 C242.332075,22.7569149 242.228302,23.6696809 241.64717,24.0430851 C240.381132,24.8728723 238.928302,23.337766 238.803774,25.6196809 C238.803774,27.2170213 237.579245,27.9430851 236.022642,28.0260638 L234.362264,28.3787234 L234.362264,28.3787234 C234.133962,27.8601064 234.092453,27.0303191 233.760377,26.6361702 C233.348648,26.2069665 232.896919,25.8179727 232.411321,25.4744681 C232.016981,25.4744681 231.539623,26.262766 231.311321,26.4909574 C230.750943,27.0510638 230.086792,27.4659574 229.484906,28.0053191 C228.883019,28.5446809 227.533962,27.6111702 226.807547,28.337234 C226.413208,28.731383 226.620755,29.5404255 226.24717,29.9968085 C225.873585,30.4531915 225.790566,32.0712766 225.375472,32.2787234 C224.960377,32.4861702 224.358491,31.7393617 223.901887,31.6978723 C222.615094,31.6978723 222.303774,33.2329787 220.435849,32.7558511 C219.584906,32.5276596 219.232075,33.668617 218.069811,33.0255319 C216.907547,32.3824468 215.99434,32.1335106 215.807547,33.9797872 C215.807547,36.1787234 212.777358,32.7558511 212.507547,34.9962766 C212.362264,36.1579787 211.532075,35.8053191 210.432075,35.9090426 C209.332075,36.012766 209,35.2659574 207.983019,35.0792553 C206.966038,34.8925532 206.343396,34.2909574 205.658491,34.3531915 C203.583019,34.4984043 203.583019,38.8132979 201.383019,38.5021277 C200.160451,38.2670244 198.978796,37.8546933 197.875472,37.2781915 C196.649731,36.5408541 195.779667,35.3338498 195.467925,33.9382979 C194.886792,33.9382979 194.533962,34.5606383 193.932075,34.3324468 C193.441967,34.0581513 192.927896,33.8290145 192.396226,33.6478723 C190.984906,33.6478723 191.898113,35.3489362 191.109434,35.5978723 C190.320755,35.8468085 189.449057,36.0335106 189.137736,35.3489362 C188.079245,32.9632979 187.477358,37.0292553 186.107547,36.2409574 C185.235849,35.7430851 183.886792,35.5356383 183.326415,34.9755319 C182.766038,34.4154255 181.89434,35.3074468 181.666038,35.7845745 C181.172349,37.3528859 180.303176,38.7770704 179.133962,39.9335106 C178.109608,40.3708625 177.046459,40.7111838 175.958491,40.95 C175.377358,41.1159574 174.816981,40.8047872 174.19434,40.8047872 C173.571698,40.8047872 173.135849,40.5351064 172.575472,40.5351064 C172.064111,40.5246974 171.553896,40.5875702 171.060377,40.7218085 C170.178299,41.0373107 169.3672,41.5237347 168.673585,42.1531915 C168.154717,42.5680851 168.092453,42.1531915 167.864151,41.7382979 C167.559458,41.1014098 166.885004,40.7268945 166.183019,40.8047872 L166.183019,40.8047872 L165.913208,38.7303191 C165.269811,37.4441489 162.945283,37.6515957 162.696226,36.6558511 C161.762264,36.6558511 161.30566,37.8590426 160.973585,36.1994681 C160.973585,35.7015957 161.533962,34.6021277 161.762264,34.125 C162.613208,32.4239362 165.643396,33.2744681 166.349057,31.0340426 C166.201637,29.9461846 165.671966,28.94618 164.854717,28.212766 C164.408852,29.0780396 163.724724,29.7978261 162.883019,30.287234 C162.451797,30.3704256 162.006228,30.2512466 161.67421,29.9639069 C161.342193,29.6765672 161.160443,29.2528428 161.181132,28.8143617 C161.181132,28.3787234 161.824528,27.6526596 161.679245,27.4452128 C161.095995,27.1706471 160.492294,26.9417675 159.873585,26.7606383 C159.444217,26.7255365 159.054402,26.4963445 158.815094,26.1382979 C157.69434,25.0180851 158.483019,23.6696809 158.171698,22.425 C154.726415,22.425 157.009434,19.2303191 154.70566,18.5664894 C154.207547,18.4212766 154.70566,17.031383 154.830189,16.6994681 C156.137736,16.3675532 156.511321,17.3840426 157.403774,15.6207447 C157.735849,14.9569149 158.939623,14.0856383 158.939623,13.5462766 C158.939623,13.0069149 159.230189,12.218617 159.188679,11.8452128 L159.188679,10.6005319 L160.184906,10.6005319 C161.388679,10.6005319 162.260377,9.89521277 163.484906,10.1026596 C164.709434,10.3101064 165.373585,10.2478723 166.328302,10.4138298 C167.283019,10.5797872 167.324528,10.2271277 167.94717,10.2271277 C168.383316,10.2974355 168.808743,10.4229106 169.213208,10.6005319 C170.011626,10.6692847 170.815819,10.6203574 171.6,10.4553191 C172.293977,10.3478207 173.003247,10.3974456 173.675472,10.6005319 C174.495501,10.4972679 175.325254,10.4972679 176.145283,10.6005319 C176.619806,10.7715587 177.115684,10.8762711 177.618868,10.9117021 C178.096226,10.9117021 178.220755,10.2271277 178.677358,10.2271277 C179.133962,10.2271277 179.216981,10.6835106 179.528302,10.7664894 C181.339255,11.0215518 183.185503,10.7702389 184.862264,10.0404255 C185.318868,9.87446809 186.398113,9.10691489 186.709434,9.3143617 C187.4796,9.82846141 188.349393,10.1747968 189.262264,10.3308511 C189.760377,10.3308511 190.839623,10.1648936 191.192453,10.5382979 C191.856604,11.2643617 192.769811,9.77074468 193.786792,9.77074468 C194.803774,9.77074468 197.377358,9.77074468 197.377358,8.06968085 C197.377358,7.2606383 198.373585,7.63404255 198.933962,7.34361702 C199.49434,7.05319149 199.639623,6.26489362 199.764151,5.91223404 C200.692363,6.46910356 201.469276,7.24564076 202.026415,8.17340426 C202.379245,9.23138298 203.645283,9.68776596 204.496226,10.2478723 C204.99434,10.7457447 205.098113,11.4925532 205.907547,11.4095745 C206.716981,11.3265957 207.15283,10.8287234 208.086792,10.8287234 C209.723642,11.0477793 211.375823,11.1310423 213.026415,11.0776596 C213.441509,11.0776596 215.309434,10.6835106 215.371698,11.3058511 C215.433962,11.9281915 214.977358,12.1771277 214.935849,12.612766 C214.89434,13.0484043 215.537736,12.8409574 215.641509,12.612766 C216.015094,11.5547872 215.869811,12.0734043 216.969811,11.8867021 C217.739601,11.7616218 218.52455,11.7616218 219.29434,11.8867021 C219.413737,12.6745028 219.85395,13.3778077 220.51051,13.8297115 C221.167071,14.2816153 221.981448,14.4418323 222.760377,14.2723404 C224.171698,13.9196809 224.835849,14.4797872 226.039623,14.9154255 C228.301887,15.7452128 230.418868,15.1851064 232.701887,15.7867021 L236.292453,16.7202128 C237.419013,17.2157489 238.59469,17.5912271 239.8,17.8404255 C241.196341,17.940748 242.583602,18.1418036 243.950943,18.4420213 L245.632075,18.5664894 L245.943396,18.462766 Z" , "name" : "Principado de Asturias"}
            ,"ES-GA": {
				"path":"M159.292453,10.6005319 L159.292453,11.7414894 C159.292453,12.1148936 159.043396,12.8824468 159.043396,13.4425532 C159.043396,14.0026596 157.818868,14.8739362 157.507547,15.5170213 C156.635849,17.2803191 156.241509,16.2845745 154.933962,16.5957447 C154.933962,16.9276596 154.332075,18.3175532 154.809434,18.462766 C157.113208,19.1265957 154.809434,22.3212766 158.275472,22.3212766 C158.586792,23.5659574 157.798113,24.9143617 158.918868,26.0345745 C159.158176,26.3926211 159.547991,26.6218131 159.977358,26.6569149 C160.596067,26.8380441 161.199769,27.0669237 161.783019,27.3414894 C161.928302,27.5489362 161.284906,28.2957447 161.284906,28.7106383 C161.264217,29.1491194 161.445966,29.5728438 161.777984,29.8601835 C162.110002,30.1475232 162.555571,30.2667022 162.986792,30.1835106 C163.828497,29.6941027 164.512625,28.9743162 164.958491,28.1090426 C165.77574,28.8424566 166.30541,29.8424612 166.45283,30.9303191 C165.767925,33.1707447 162.716981,32.3409574 161.866038,34.0212766 C161.637736,34.4776596 160.973585,35.5771277 161.077358,36.0957447 C161.388679,37.7760638 161.866038,36.5521277 162.8,36.5521277 C163.049057,37.5271277 165.373585,37.3196809 166.016981,38.6265957 L166.286792,40.7010638 L166.286792,40.7010638 L165.954717,41.3648936 C165.954717,41.6968085 166.950943,42.1324468 166.722642,42.443617 C166.49434,42.7547872 165.996226,42.443617 165.622642,42.443617 C164.211321,42.443617 165.913208,44.7047872 165.871698,45.2026596 C165.830189,45.7005319 164.875472,46.6132979 164.584906,47.0489362 C164.29434,47.4845745 162.820755,49.4968085 162.364151,48.8329787 C161.907547,48.1691489 162.05283,47.8164894 161.679245,48.8329787 C161.533962,49.1856383 161.471698,49.5590426 161.326415,49.9324468 C160.579245,50.3058511 158.316981,50.1398936 159.396226,52.0069149 C160.475472,53.8739362 159.188679,53.3138298 158.898113,54.7452128 C158.732075,55.575 159.541509,55.9691489 158.898113,56.8196809 C158.254717,57.6702128 158.669811,59.3505319 158.192453,59.6824468 L158.192453,59.6824468 C158.871726,59.9074242 159.56504,60.0875987 160.267925,60.2218085 C161.575472,59.8484043 161.035849,61.2590426 161.990566,59.7239362 C162.260377,59.2882979 162.945283,58.8319149 163.464151,59.2675532 C164.095192,59.833058 164.792025,60.3206055 165.539623,60.7196809 C165.953631,60.677234 166.370898,60.677234 166.784906,60.7196809 C166.94855,61.192323 167.005258,61.6953641 166.950943,62.1925532 C166.390566,62.9601064 166.950943,63.312766 166.784906,63.7069149 C166.618868,64.1010638 165.830189,64.3292553 166.328302,64.8893617 C166.826415,65.4494681 168.403774,65.8021277 169.171698,66.5074468 C169.939623,67.212766 169.586792,67.9388298 169.586792,68.706383 C169.586792,69.9925532 168.507547,70.7808511 167.739623,71.6728723 C166.971698,72.5648936 167.739623,72.668617 167.739623,73.2494681 C166.888679,73.2494681 166.183019,72.7101064 165.456604,72.7101064 C164.29434,72.7101064 164.398113,74.2452128 163.713208,74.7845745 C163.028302,75.3239362 162.467925,75.3861702 162.467925,76.4441489 C162.467925,77.5021277 161.762264,77.481383 161.139623,77.8962766 C160.516981,78.3111702 160.786792,78.7468085 160.475472,79.0787234 C160.164151,79.4106383 158.939623,79.9085106 159.5,80.3441489 C160.024123,80.7604249 160.659422,81.0129783 161.326415,81.0702128 C162.281132,81.1739362 161.326415,83.2691489 160.99434,83.6010638 L161.430189,84.5138298 L161.430189,84.5138298 C160.912266,85.0530259 160.271337,85.4587514 159.562264,85.6962766 C157.65283,86.0696809 158.296226,85.3021277 157.486792,84.5138298 C156.768315,83.9266697 155.735459,83.9266697 155.016981,84.5138298 C154.70566,84.9494681 154.145283,83.85 154.145283,84.9909574 C154.123323,85.7337793 154.171969,86.4770073 154.290566,87.2106383 C154.539623,88.4968085 153.29434,89.0984043 152.215094,89.2851064 C151.135849,89.4718085 148.562264,91.3595745 148.064151,90.3223404 C147.732075,89.637766 146.611321,91.6085106 146.466038,91.7744681 C145.635849,92.6664894 145.59434,91.0484043 145.2,90.4882979 C144.80566,89.9281915 145.2,89.5962766 144.701887,89.5962766 C144.309455,89.6047566 143.917891,89.5558348 143.539623,89.4510638 C143.539623,89.243617 143.249057,89.2851064 143.124528,89.4510638 C143,89.6170213 143.124528,90.0111702 143.124528,90.2808511 C143.124528,90.5505319 142.522642,90.8202128 142.149057,90.9239362 C141.775472,91.0276596 139.430189,91.5670213 139.492453,90.6335106 C139.492453,90.1356383 140.426415,88.9946809 140.40566,88.9531915 C140.384906,88.9117021 140.40566,88.9531915 140.40566,88.9531915 C139.513208,88.9531915 138.454717,89.181383 137.707547,88.6420213 C135.839623,87.293617 136.503774,88.7664894 134.967925,88.4760638 C133.80566,88.2478723 134.013208,89.0569149 133.037736,89.0569149 C132.603631,89.0018049 132.164294,89.0018049 131.730189,89.0569149 C131.418868,89.243617 131.730189,89.637766 131.024528,90.0111702 C130.816981,90.1148936 130.671698,90.5505319 130.381132,90.4053191 C129.675472,90.0319149 130.630189,85.8414894 129.44717,87.1484043 C128.886792,87.7707447 129.883019,89.3473404 128.222642,89.4303191 C126.562264,89.5132979 126.541509,90.0734043 125.566038,91.3180851 C125.150943,91.8574468 124.403774,91.3180851 123.90566,91.9819149 C123.005382,92.4498818 121.947752,92.5102886 121,92.1478723 C120.481213,91.8160803 120.237599,91.1863495 120.398113,90.5920213 C120.443715,90.1922524 120.443715,89.7885986 120.398113,89.3888298 C119.650943,89.1398936 119.090566,89.8244681 119.090566,88.4760638 C119.090566,87.6670213 118.966038,87.1898936 119.54717,86.5468085 C120.11262,85.7675687 120.482731,84.8640817 120.626415,83.912234 C121.290566,83.912234 121.456604,83.912234 121.70566,83.2484043 C121.954717,82.5845745 122.577358,83.2484043 123.033962,82.7090426 C123.584605,81.6863726 123.270607,80.4130525 122.307547,79.7632979 C121.332075,79.3898936 120.896226,80.0537234 120.045283,80.2611702 C119.19434,80.468617 119.443396,78.4771277 119.484906,77.9170213 C119.526415,77.3569149 119.650943,76.7553191 118.924528,76.7760638 C117.436478,77.7100011 115.882731,78.5350301 114.275472,79.2446809 C113.735849,79.2446809 113.486792,79.0164894 113.133962,79.5973404 C112.781132,80.1781915 112.532075,79.3069149 111.992453,79.5973404 C110.996226,80.3026596 111.266038,79.5973404 110.269811,79.5973404 C109.273585,79.5973404 108.733962,79.493617 108.090566,80.2196809 C107.44717,80.9457447 107.550943,81.3191489 106.720755,81.1324468 C104.915094,80.6968085 104.333962,81.1324468 103.420755,82.6468085 C103.073044,83.3875991 102.468375,83.9772346 101.718868,84.306383 C100.369811,85.0946809 100.867925,85.3021277 100.183019,86.3808511 C99.8924528,86.837234 99.1245283,87.0446809 98.6471698,87.293617 C97.8169811,87.7085106 97.7754717,88.4345745 97.1320755,88.9117021 L95.9698113,89.7414894 L95.9698113,89.7414894 C95.9395137,89.2163937 95.9395137,88.6899893 95.9698113,88.1648936 C95.7567391,86.1878503 95.7012184,84.1970072 95.8037736,82.2111702 C95.7805168,80.9426644 95.6415767,79.678921 95.3886792,78.4356383 C96.039868,78.3060753 96.698304,78.2160171 97.3603774,78.1659574 C97.4497877,78.0882225 97.5267783,77.9972776 97.5886792,77.8962766 C99.4566038,76.4234043 96.5924528,76.3819149 97.9830189,75.8218085 C98.5973421,75.1438701 99.1015728,74.3738901 99.4773585,73.5398936 C99.6849057,72.7308511 100.390566,72.7723404 101.096226,72.4404255 C101.952282,72.0586073 102.674918,71.4302174 103.171698,70.6356383 C103.690566,69.8473404 105.433962,70.4904255 104.89434,69.3287234 C104.749057,69.0175532 104.89434,67.5239362 104.583019,67.6276596 C103.669811,68.0425532 103.628302,68.3952128 103.773585,69.3909574 C103.918868,70.3867021 102.3,70.2414894 101.698113,70.2414894 C100.784906,70.2414894 99.1660377,71.8595745 98.4811321,71.3824468 C97.7962264,70.9053191 97.4641509,71.5484043 97.1735849,71.3824468 C96.8830189,71.2164894 97.1735849,70.3452128 97.1735849,69.9718085 C97.5679245,69.9718085 98.2320755,69.743617 98.3566038,69.2664894 C98.4811321,68.7893617 97.5056604,67.5446809 98.709434,68.0425532 C100.307547,68.706383 100.618868,66.5904255 101.428302,65.4909574 C102.009434,64.6819149 103.254717,64.6404255 102.735849,63.7691489 C101.801887,62.1718085 101.739623,64.1010638 100.411321,64.412234 C99.7886792,64.8271277 99.7886792,65.3457447 99.1037736,65.0553191 C98.4188679,64.7648936 98.0245283,65.2420213 97.4433962,65.3664894 C96.509434,65.5531915 96.4679245,63.5617021 96.2603774,63.0015957 C96.2603774,62.8148936 97.1528302,62.2547872 97.2566038,62.2547872 L97.2566038,62.2547872 C98.0037736,62.2547872 97.8584906,62.2547872 97.6924528,61.5287234 C97.5264151,60.8026596 97.8584906,60.8648936 98.1075472,60.2218085 C98.3566038,59.5787234 97.0075472,57.3382979 97.5056604,56.9234043 C98.0037736,56.5085106 98.8339623,56.6329787 99.1867925,55.5542553 C99.3943396,54.9111702 100.722642,53.3138298 100.722642,52.9404255 C100.030688,53.0858237 99.3655267,53.3377628 98.7509434,53.687234 C98.190566,53.8946809 98.2943396,52.5462766 97.5471698,52.2558511 L97.3603774,52.2558511 C97.1735849,52.4218085 96.5924528,52.9404255 96.5716981,53.1893617 C96.5509434,53.4382979 97.0075472,53.8946809 96.945283,53.9154255 C96.8830189,53.9361702 96.4471698,54.1643617 96.3433962,54.3095745 C96.2396226,54.4547872 96.4471698,54.8281915 96.3433962,55.0148936 C95.4301887,55.1393617 95.9283019,54.143617 95.8660377,53.7702128 C95.1396226,53.5835106 94.1433962,54.7452128 93.790566,55.3468085 C93.4377358,55.9484043 93.790566,55.9069149 93.6037736,56.1973404 C93.4169811,56.487766 92.8773585,56.6952128 92.4207547,57.0271277 C91.9641509,57.3590426 91.9849057,58.5 91.445283,59.1015957 C91.445283,59.1015957 90.5320755,59.6617021 90.4698113,59.412766 C90.4075472,59.1638298 90.4698113,57.6909574 90.4698113,57.3382979 C90.4698113,56.9856383 90.4698113,57.3382979 90.4698113,57.2138298 C90.0032923,57.0444588 89.5460513,56.8505716 89.1,56.6329787 C89.1,55.9069149 89.6603774,55.6787234 89.9301887,55.1601064 C90.3657899,54.0012052 90.631432,52.7854324 90.7188679,51.5505319 C90.9317348,50.8289311 91.2240914,50.1331806 91.590566,49.4760638 C92.1716981,48.8952128 93.1679245,48.9989362 93.6660377,48.1484043 C94.1641509,47.2978723 93.6660377,47.2978723 94.3924528,46.9452128 C94.6415094,46.8207447 96.1150943,46.9452128 95.4301887,46.5303191 C94.7674713,46.1234324 93.9131006,46.2173677 93.354717,46.7585106 C92.939313,46.8821312 92.5164416,46.9791367 92.0886792,47.0489362 C91.2792453,47.2148936 91.2169811,46.4680851 90.8226415,46.4680851 C90.1169811,46.4680851 89.3698113,47.3601064 89.1415094,48.0031915 C88.7679245,49.0611702 88.6849057,48.9989362 88.1245283,48.293617 C87.8339623,47.9202128 86.8377358,46.8207447 86.8377358,46.3851064 C86.8377358,45.9494681 87.3981132,46.1361702 87.6264151,46.0324468 C88.7056604,45.5968085 87.6264151,44.4351064 87.1490566,43.9579787 L87.1490566,43.9579787 C86.1113208,43.1696809 87.0245283,42.2361702 87.0245283,41.1989362 C87.0245283,41.1989362 85.1773585,40.0787234 85.1773585,39.1244681 L85.1773585,39.1244681 C85.1773585,39.4148936 85.6339623,40.7632979 84.8867925,40.7632979 C84.8867925,40.3691489 84.0773585,40.0164894 84.0150943,39.7468085 C82.645283,39.7468085 82.9150943,42.2361702 82.1886792,42.2361702 C82.1886792,40.5765957 81.254717,39.6223404 82.6660377,38.3984043 C83.4962264,37.6723404 82.790566,36.593617 82.3754717,36.137234 C81.4207547,35.1 82.5,35.2452128 82.7283019,34.7680851 C82.9566038,34.2909574 83.4754717,32.112766 84.3471698,32.2787234 C85.2188679,32.4446809 85.0320755,32.6106383 85.7169811,31.9468085 C85.9905466,31.6486793 86.2403649,31.3296214 86.4641509,30.9925532 C86.3396226,30.9925532 86.2773585,30.2042553 86.1113208,30.0590426 C85.945283,29.9138298 85.2811321,31.1585106 84.845283,30.5154255 C84.409434,29.8723404 85.509434,28.9595745 86.1528302,28.4409574 C87.1283019,27.5281915 88.4981132,28.6691489 89.8886792,28.0260638 C90.6566038,27.5074468 90.6566038,26.781383 91.6528302,26.4287234 C92.6490566,26.0760638 94.0188679,27.1962766 93.4377358,25.7648936 C93.209434,25.2255319 93.4377358,24.9143617 93.0018868,24.5824468 C92.5660377,24.2505319 91.9641509,24.1882979 91.9641509,23.6904255 L91.9641509,23.6904255 C92.7113208,23.6904255 93.2924528,23.4829787 94.0396226,23.4829787 C95.1188679,23.4829787 94.745283,22.8398936 94.745283,22.1760638 L94.745283,22.1760638 L94.745283,22.1760638 C96.0735849,22.1760638 96.6339623,22.487234 97.1320755,21.0143617 C97.1320755,21.0143617 97.3603774,21.5329787 97.5471698,21.6367021 C98.1075472,21.9478723 98.3566038,22.4042553 98.8754717,22.7154255 C101.760377,24.3957447 102.756604,22.2175532 105.475472,22.2175532 C106.450943,21.906383 107.550943,22.6117021 108.464151,21.6159574 C109.377358,20.6202128 110.871698,18.7117021 111.971698,19.7281915 C113.071698,20.7446809 112.158491,21.8026596 114.04717,20.6409574 C114.877358,20.1223404 113.818868,18.7739362 114.275472,18.5664894 C115.479245,18.0271277 114.939623,18.4005319 115.541509,18.8361702 C116.143396,19.2718085 116.371698,18.8361702 116.683019,19.2303191 C117.243396,19.9978723 117.637736,21.3047872 118.758491,21.6989362 L118.758491,21.6989362 C118.858494,20.775421 118.795267,19.8415235 118.571698,18.9398936 C118.364151,18.2760638 119.526415,17.4462766 120.066038,17.3218085 C120.066038,16.6994681 116.558491,17.0728723 115.915094,16.5542553 C114.524528,15.4547872 117.118868,15.6 117.720755,15.4755319 C118.444004,15.4240661 119.13321,15.1485169 119.692453,14.687234 C119.692453,14.687234 120.003774,14.0026596 119.692453,14.1478723 C118.71777,14.4915571 117.718765,14.7619903 116.703774,14.9569149 C115.790566,15.2473404 115.084906,14.9569149 114.233962,14.9569149 C114.233962,14.562766 115.333962,14.2101064 115.043396,13.6914894 C114.4,12.5297872 115.375472,12.9239362 115.603774,12.0734043 C115.832075,11.2228723 114.79434,11.2643617 114.690566,10.8287234 C115.10566,10.8287234 115.271698,10.3515957 115.583019,10.8287234 C116.392453,11.9281915 119.19434,9.56329787 119.422642,8.58829787 C119.650943,7.61329787 119.9,8.94095745 120.522642,8.11117021 C121.415094,6.90797872 121.684906,7.07393617 123.075472,6.825 C124.466038,6.57606383 123.324528,6.2856383 123.59434,5.14468085 C123.864151,4.0037234 123.59434,3.21542553 124.964151,3.69255319 C126.333962,4.16968085 127.039623,2.94574468 128.077358,2.53085106 C128.824528,2.24042553 129.281132,0.684574468 130.15283,0.684574468 L130.028302,4.16968085 C130.028302,5.76702128 132.103774,3.75478723 132.498113,3.44361702 C133.618868,2.51010638 135.133962,1.72180851 136.213208,0.933510638 C138.288679,-0.539361702 135.943396,2.34414894 135.943396,2.86276596 C136.607547,3.0287234 137.084906,1.88776596 137.85283,1.97074468 C138.236156,2.4621218 138.569859,2.99023018 138.849057,3.54734043 C139.18973,3.9116055 139.4512,4.34246964 139.616981,4.81276596 L141.090566,3.17393617 C141.50566,2.71755319 142.335849,2.96648936 142.833962,3.04946809 C143.975472,3.25691489 143.249057,3.54734043 143.913208,3.92074468 C144.577358,4.29414894 145.116981,4.29414894 145.677358,4.56382979 C147.4,5.37287234 148.749057,7.88297872 150.118868,9.14840426 C150.803774,9.77074468 151.115094,10.787234 152.090566,10.787234 C153.114401,10.9969889 154.1591,11.0874857 155.203774,11.0569149 L158.856604,11.0569149 L159.292453,10.6005319 Z" , "name" : "Galicia"}
            ,"ES-CT": {
				"path":"M423.769811,147.702128 C423.292453,147.702128 422.773585,147.868085 422.254717,147.88883 C421.735849,147.909574 421.196226,147.88883 421.279245,148.469681 C421.393447,148.754249 421.588187,148.999359 421.839623,149.175 C422.441509,149.506915 422.835849,149.175 423.375472,148.905319 C423.915094,148.635638 424.579245,148.386702 424.184906,147.84734 L423.769811,147.702128 Z M469.679245,62.6489362 C469.099277,62.690195 468.518827,62.5755937 467.998113,62.3170213 C467.836599,62.1526745 467.76001,61.92302 467.790566,61.6946809 C467.790566,61.5079787 468.060377,61.362766 468.164151,61.1968085 C468.267925,61.0308511 468.454717,60.2840426 468.724528,60.512234 C468.99434,60.7404255 469.201887,60.8234043 469.139623,61.0308511 C469.077358,61.2382979 468.99434,61.2382979 469.139623,61.4457447 C469.284906,61.6531915 469.430189,61.7569149 469.637736,61.9643617 C469.845283,62.1718085 470.09434,62.2755319 469.928302,62.5452128 L469.720755,62.5452128 L469.679245,62.6489362 Z M418.166038,150.834574 C419.108648,149.522198 419.941646,148.13454 420.656604,146.685638 C421.424528,145.482447 425.575472,145.89734 426.883019,145.150532 L429.373585,143.698404 C430.184787,143.292796 430.74936,142.519782 430.888679,141.623936 C428.813208,141.623936 429.207547,140.234043 427.54717,139.922872 C426.888546,139.774382 426.253171,139.537104 425.658491,139.217553 C425.264151,139.010106 424.537736,138.076596 424.392453,138.035106 L425.907547,136.85266 L427.609434,135.089362 L427.609434,135.089362 C428.667925,134.881915 430.701887,131.064894 431.760377,130.152128 C433.649057,128.34734 436.554717,125.567553 439.356604,125.567553 C439.958491,125.567553 441.183019,126.812234 441.432075,126.584043 C441.681132,126.355851 441.432075,125.754255 442.013208,125.277128 C442.610388,124.812116 443.275339,124.441323 443.984906,124.17766 C445.001466,123.611387 446.125784,123.265067 447.284906,123.16117 C449.54717,123.16117 451.207547,121.460106 453.511321,120.962234 C456.251001,120.62462 458.944804,119.984542 461.543396,119.053723 C462.373585,118.742553 463.203774,118.763298 464.075472,118.369149 C465.488922,117.67275 467.000817,117.197013 468.558491,116.958511 C470.467925,116.709574 473.767925,116.522872 474.784906,114.614362 C475.691311,112.654752 476.826906,110.809432 478.167925,109.117021 C478.832075,108.619149 479.24717,107.87234 479.99434,107.457447 C481.660433,106.854055 483.25445,106.067869 484.74717,105.113298 C487.152012,103.341151 489.810957,101.942383 492.633962,100.964362 L495.684906,99.6574468 C496.930189,99.1180851 497.054717,98.3090426 498.196226,97.5829787 C499.773585,96.3797872 501.475472,97.1058511 502.762264,95.3425532 C503.696226,94.056383 504.837736,94.1393617 505.896226,93.2680851 C506.560377,92.7079787 506.664151,91.6292553 507.286792,91.0069149 C507.909434,90.3845745 508.303774,90.6542553 508.822642,90.4468085 C509.341509,90.2393617 510.026415,89.0154255 510.649057,88.5590426 C511.150751,87.8457034 511.490729,87.0315665 511.645283,86.1734043 C512.413208,84.9909574 512.267925,84.9287234 511.645283,84.0989362 C510.275472,82.6053191 511.790566,81.1117021 511.084906,79.6803191 C510.379245,78.2489362 509.590566,78.4356383 508.760377,77.481383 C507.703727,75.853647 507.703727,73.7569913 508.760377,72.1292553 C509.341509,71.112766 509.943396,71.7765957 510.586792,72.1292553 C511.601325,72.5339118 512.759411,72.2975157 513.533962,71.5276596 C514.40566,70.8015957 513.824528,70.9260638 514.135849,69.9925532 C514.327177,69.3684718 514.686111,68.8088042 515.173585,68.3744681 L515.173585,68.3744681 L515.173585,68.3744681 C513.845283,68.3744681 512.6,66.7771277 511.458491,67.212766 C509.383019,68.0010638 509.69434,65.1382979 509.798113,63.312766 L509.798113,63.312766 C508.262264,63.1260638 506.643396,64.2255319 505.64717,62.3792553 C504.650943,60.5329787 503.571698,62.3792553 502.388679,61.4457447 C501.20566,60.512234 501.330189,62.3170213 500.624528,62.3170213 C500.250943,62.3170213 499.981132,61.943617 499.607547,61.943617 C498.569811,61.943617 497.677358,63.2505319 497.033962,63.831383 C496.390566,64.412234 495.809434,64.0803191 495.269811,63.6861702 C494.730189,63.2920213 491.34717,65.5946809 492.322642,66.4244681 C494.045283,67.8973404 491.326415,67.2335106 490.6,67.1505319 C489.873585,67.0675532 489.583019,66.6526596 488.773585,66.8601064 C487.964151,67.0675532 488.358491,67.6069149 487.756604,67.8143617 C486.60374,67.6921047 485.527286,67.1797555 484.70566,66.362234 C484.124528,65.1175532 484.373585,65.3042553 482.941509,65.0553191 C481.509434,64.806383 481.281132,63.9765957 480.264151,63.5617021 C479.200123,63.232618 478.048418,63.3447428 477.067925,63.8728723 C476.196226,64.287766 475.573585,63.4579787 474.992453,63.7276596 C474.411321,63.9973404 474.286792,64.3914894 473.809434,64.6404255 C472.833962,66.1962766 472.045283,67.0882979 470.011321,66.7148936 C468.413208,66.3414894 468.143396,64.3914894 467.624528,63.1053191 C467.10566,61.8191489 466.109434,63.3542553 465.549057,62.5867021 C464.988679,61.8191489 465.030189,62.2962766 464.386792,62.0058511 C463.743396,61.7154255 464.096226,61.0723404 463.224528,60.8648936 C462.35283,60.6574468 461.771698,60.8648936 461.024528,60.7196809 L460.049057,60.4292553 L460.049057,60.4292553 C459.073585,61.0101064 458.243396,60.2632979 457.662264,61.425 C457.081132,62.5867021 455.462264,62.5244681 454.486792,62.5867021 C453.511321,62.6489362 453.033962,63.5409574 452.016981,63.3957447 C450.64717,63.2090426 450.730189,62.4414894 450.086792,61.5079787 C449.443396,60.5744681 449.816981,60.9271277 450.398113,60.5744681 C450.884439,60.3115616 451.118148,59.7426123 450.956964,59.2139832 C450.79578,58.6853541 450.284326,58.3433925 449.733962,58.3962766 C449.15283,58.3962766 450.066038,57.2760638 450.439623,57.1723404 C450.439623,56.7989362 449.754717,56.8404255 449.754717,56.55 C449.754717,56.2595745 450.066038,56.031383 450.066038,55.9691489 C450.066038,55.9069149 450.273585,55.7409574 450.315094,55.6994681 L450.315094,55.6994681 C449.879076,55.0107054 449.543619,54.2632784 449.318868,53.4797872 C448.969657,52.67883 448.508452,51.9314802 447.949057,51.2601064 C447.34717,50.9904255 447.284906,50.3058511 446.99434,50.2021277 C446.660592,50.1178298 446.311107,50.1178298 445.977358,50.2021277 C445.062067,50.5097705 444.062138,50.4426436 443.196226,50.0154255 C442.345283,49.4760638 440.996226,51.5297872 440.456604,50.2021277 C439.584906,48.9989362 439.64717,48.1276596 438.049057,47.3601064 C437.135849,46.9452128 435.226415,47.5675532 434.416981,46.7585106 C433.607547,45.9494681 433.628302,47.0489362 432.569811,46.9659574 C432.10626,46.8147406 431.695734,46.5339906 431.386792,46.1569149 C430.328302,44.8292553 428.460377,45.1819149 427.235849,44.5388298 C426.571698,44.1861702 425.928302,43.5430851 425.160377,43.5845745 C423.707547,43.5845745 423.084906,47.4638298 423.624528,47.5675532 L423.624528,47.5675532 C423.624528,47.9409574 423.188679,48.2521277 423.209434,48.5010638 C423.230189,48.75 423.686792,49.1648936 423.769811,49.4968085 C424.039623,50.4925532 424.330189,51.1356383 423.541509,51.4675532 L423.541509,51.4675532 L424.060377,52.4010638 C424.574761,52.9188694 424.928,53.5745675 425.077358,54.2888298 C425.326415,54.9941489 426.115094,55.0978723 426.820755,55.0978723 C427.063512,56.1109162 426.851227,57.1794071 426.239623,58.0228723 C425.492453,59.5164894 426.05283,58.7489362 426.384906,60.0973404 C426.509434,60.6367021 425.513208,60.7404255 425.160377,60.8648936 C424.807547,60.9893617 424.662264,61.487234 424.99434,61.881383 C425.326415,62.2755319 424.849057,63.0015957 425.575472,63.3957447 C426.301887,63.7898936 425.928302,64.412234 426.115094,65.1382979 C426.301887,65.8643617 425.741509,66.4244681 425.969811,66.7356383 C426.198113,67.0468085 427.443396,66.7356383 427.090566,67.3164894 C426.115094,68.6648936 427.090566,68.2085106 426.675472,69.3909574 C425.858378,71.2027328 425.312894,73.124982 425.056604,75.0957447 C425.184276,76.793158 424.892035,78.4958908 424.20566,80.0537234 C424.094875,80.4859585 423.904872,80.8939168 423.645283,81.2569149 C423.250943,82.0452128 423.956604,82.8335106 423.14717,83.7047872 C422.676207,84.2114145 422.162348,84.6764402 421.611321,85.0946809 C421.113208,85.0946809 420.407547,85.6340426 420.760377,86.2356383 C421.230005,87.1895823 421.511845,88.2248446 421.590566,89.2851064 C421.590566,90.1978723 419.930189,90.0319149 419.888679,90.7787234 C419.84717,91.5255319 419.349057,91.7744681 418.581132,91.7744681 C417.813208,91.7744681 417.211321,93.1021277 417.211321,93.8489362 C417.211321,94.9898936 415.364151,94.2430851 414.720755,94.7617021 L414.720755,94.7617021 C414.34717,96.2760638 410.839623,97.9148936 412.396226,99.3670213 C413.288679,100.196809 412.707547,100.487234 412.956604,101.441489 C413.20566,102.395745 414.741509,101.814894 415.530189,101.814894 C415.903774,102.955851 416.007547,106.399468 414.409434,106.89734 C413.745283,107.104787 411.607547,106.89734 412.707547,108.266489 C413.14834,108.952884 412.975148,109.86398 412.313208,110.340957 C411.75283,111.46117 412.811321,111.710106 413.392453,112.415426 C413.973585,113.120745 413.537736,113.224468 413.20566,113.577128 C412.873585,113.929787 413.20566,114.448404 413.537736,114.69734 C413.869811,114.946277 413.849057,117.290426 413.703774,117.829787 C413.433962,118.929255 411.898113,118.555851 411.628302,119.551596 C411.358491,120.54734 411.79434,121.169681 411.213208,121.750532 C410.632075,122.331383 410.092453,122.18617 409.781132,122.476596 C409.469811,122.767021 409.781132,123.036702 409.220755,123.306383 C408.660377,123.576064 407.809434,122.974468 407.809434,123.845745 C407.841585,124.564997 408.018035,125.270455 408.328302,125.920213 C409.033962,126.978191 409.822642,127.434574 410.403774,128.637766 C411.441509,131.127128 409.096226,132.122872 409.428302,134.259574 C409.573585,135.151596 410.050943,136.105851 410.258491,136.977128 C410.466038,137.848404 409.386792,138.429255 409.179245,139.051596 C409.078419,139.413999 408.81903,139.711389 408.473585,139.860638 C408.084085,140.010152 407.680916,140.121318 407.269811,140.192553 C407.062264,140.192553 406.875472,140.192553 406.709434,140.337766 C406.543396,140.482979 406.709434,141.105319 406.709434,141.333511 L406.709434,141.333511 L407.643396,141.520213 C408.162264,141.769149 408.971698,140.939362 408.971698,141.955851 C408.971698,142.97234 409.220755,142.640426 409.967925,142.640426 C411.607547,142.640426 409.967925,144.196277 410.258491,144.943085 C410.549057,145.689894 411.088679,146.104787 411.918868,146.60266 C412.749057,147.100532 414.367925,146.457447 414.949057,147.038298 C415.327746,147.487021 415.622972,147.999904 415.820755,148.55266 C415.820755,149.548404 415.467925,149.48617 416.484906,150.046277 L418.373585,150.751596 L418.166038,150.834574 Z" , "name" : "Cataluña"}
            ,"ES-RM": {
				"path":"M320.266038,261.403723 L320.473585,260.304255 C320.949908,259.835846 321.387207,259.329379 321.781132,258.789894 C322.46903,258.235482 323.089044,257.601842 323.628302,256.902128 C324.047322,256.247465 324.296946,255.498956 324.354717,254.723936 C324.541509,253.5 326.098113,252.649468 327.239623,252.504255 C328.962264,252.234574 329.045283,251.321809 329.896226,249.890426 C330.850943,249.143617 330.684906,249.662234 331.535849,249.890426 C331.992453,251.508511 337.471698,248.168617 338.135849,247.815957 C340.211321,246.592021 340.211321,246.197872 342.577358,246.467553 C342.971698,247.276596 342.45283,247.691489 343.241509,248.542021 C344.590566,250.014894 346.935849,248.542021 348.139623,247.712234 C350.069811,246.239362 349.198113,245.928191 349.841509,243.895213 C349.840527,243.124708 349.785043,242.355236 349.675472,241.592553 C349.40566,240.783511 348.845283,238.688298 349.530189,237.962234 C350.215094,237.23617 351.003774,237.692553 351.003774,235.887766 C351.067917,234.407957 351.840252,233.049305 353.079245,232.236702 C353.888679,231.842553 353.992453,232.091489 354.469811,232.568617 C354.94717,233.045745 356.150943,231.946277 356.545283,231.718085 C356.915441,231.359253 357.255572,230.97072 357.562264,230.556383 C358.267925,229.685106 361.816981,229.228723 362.149057,230.556383 C362.242828,231.298514 362.631882,231.971552 363.228302,232.423404 C363.545044,232.649501 363.849855,232.891847 364.141509,233.149468 C364.45283,233.481383 365.054717,233.543617 365.303774,233.813298 L366.092453,233.958511 L366.092453,233.958511 L366.092453,234.746809 C365.982149,234.971888 365.938922,235.223923 365.967925,235.472872 C365.967925,235.784043 366.092453,236.095213 366.154717,236.406383 C366.38356,237.138659 366.331777,237.929829 366.009434,238.626064 C365.66323,239.264041 365.610247,240.020568 365.864151,240.700532 C366.154717,241.343617 364.867925,242.318617 364.369811,242.775 C363.269811,243.584043 362.584906,247.380319 363.933962,247.732979 C365.283019,248.085638 366.009434,247.732979 366.69434,249.143617 C368.437736,252.628723 365.220755,255.367021 365.220755,258.292021 C365.220755,259.578191 366.424528,260.470213 367.067925,261.528191 C368.182497,263.88796 369.621575,266.080445 371.343396,268.042021 C372.375514,268.862272 373.531422,269.513468 374.767925,269.971277 L374.767925,269.971277 C374.767925,270.863298 374.767925,271.879787 374.622642,271.879787 C374.477358,271.879787 373.584906,270.69734 373.584906,271.40266 C373.394908,272.101441 373.01402,272.733552 372.484906,273.228191 C371.550943,274.63883 370.409434,274.742553 372.028302,276.194681 C372.799183,277.109599 373.782557,277.821845 374.892453,278.269149 C375.56424,278.370849 376.220013,278.559119 376.843396,278.829255 L376.843396,278.829255 C376.843396,280.509574 372.215094,280.903723 371.135849,281.256383 C370.056604,281.609043 369.745283,282.272872 368.686792,282.12766 C367.628302,281.982447 367.213208,281.235638 366.611321,281.235638 C366.009434,281.235638 365.55283,281.650532 365.075472,281.235638 C364.573022,280.766628 363.793015,280.766628 363.290566,281.235638 C362.501887,281.920213 362.64717,282.376596 362.64717,283.123404 L362.64717,283.123404 L360.924528,282.480319 C359.492453,281.775 359.139623,280.882979 357.416981,281.961702 C355.69434,283.040426 355.216981,281.484574 353.473585,283.310106 C352.74717,284.07766 351.398113,284.575532 350.9,285.384574 C349.696226,287.044149 350.775472,287.770213 348.575472,288.143617 C347.20675,288.485774 345.935432,289.138873 344.860377,290.052128 L344.860377,290.052128 L341.311321,287.147872 C340.377358,287.147872 340.232075,286.691489 339.235849,287.147872 C337.803774,287.873936 334.898113,282.729255 334.109434,281.526064 C333.273191,280.359832 332.576613,279.099636 332.033962,277.771277 C331.834254,277.09897 331.777693,276.392299 331.867925,275.696809 C331.946045,275.337109 332.05009,274.983527 332.179245,274.63883 C332.283019,274.120213 331.992453,273.788298 331.971698,273.31117 C332.179245,272.481383 331.660377,270.987766 332.096226,270.282447 C332.467854,269.632779 332.747261,268.934599 332.926415,268.207979 C332.366038,268.207979 331.909434,268.705851 331.266038,268.539894 C330.622642,268.373936 330.311321,267.834574 329.792453,267.917553 C328.609434,268.125 328.339623,267.523404 327.260377,267.46117 C325.66502,267.31583 324.182977,266.575167 323.109434,265.386702 C322.63578,264.648666 322.212795,263.879345 321.843396,263.084043 C321.490566,262.461702 320.535849,262.316489 320.224528,261.735638 L320.266038,261.403723 Z" , "name" : "Región de Murcia"}
            ,"ES-CC": {
				"path":"M279.233962,121.729787 L280.479245,121.314894 C281.828302,121.045213 281.849057,119.406383 282.741509,119.240426 C283.301887,119.240426 283.986792,119.468617 283.986792,118.618085 C283.986792,117.767553 283.509434,116.896277 285.003774,117.248936 C286.000466,117.453113 287.036744,117.321817 287.950943,116.875532 L287.950943,116.875532 C288.179245,116.875532 287.826415,116.294681 287.826415,116.149468 C287.826415,116.004255 288.864151,115.153723 288.864151,116.149468 C288.864151,116.356915 289.009434,117.331915 289.237736,116.64734 C290.150943,113.846809 292.579245,116.190957 294.218868,116.273936 C296.139129,116.609546 298.114431,116.177425 299.718868,115.070745 C300.486792,114.448404 302.209434,113.618617 302.209434,115.070745 C302.209434,116.190957 303.164151,116.64734 303.95283,117.145213 C305.384906,118.203191 305.841509,115.817553 307.460377,116.439894 C307.60566,116.439894 308.020755,117.539362 308.415094,117.767553 C308.809434,117.995745 309.432075,117.767553 310.137736,118.28617 C310.407547,118.410638 312.939623,118.784043 311.69434,119.510106 C311.507547,119.61383 311.009434,119.966489 310.988679,120.215426 C310.988679,121.045213 312.379245,119.593085 311.964151,121.21117 C311.216981,124.032447 314.226415,120.153191 314.226415,122.49734 C314.226415,123.264894 314.703774,123.015957 315.181132,123.389362 C315.658491,123.762766 315.430189,124.260638 315.533962,124.571809 C315.969226,125.435337 316.708387,126.107649 317.609434,126.459574 C318.418868,126.604787 318.771698,125.007447 319.684906,125.443085 C320.598113,125.878723 322.133962,126.646277 323.171698,125.837234 C323.524528,125.567553 323.918868,124.675532 324.375472,124.654787 C324.832075,124.634043 325.454717,125.360106 325.99434,124.820745 C326.783019,124.820745 326.886792,123.306383 327.779245,123.887234 C328.227158,124.252914 328.643703,124.655379 329.024528,125.090426 C329.288194,125.353832 329.588833,125.577455 329.916981,125.754255 C330.186792,125.754255 330.124528,125.069681 330.041509,124.903723 C329.958491,124.737766 330.041509,123.887234 330.269811,123.51383 C330.335824,122.976486 330.335824,122.433089 330.269811,121.895745 L330.269811,121.895745 C331.639623,122.103191 332.490566,121.190426 333.715094,121.190426 C333.715094,121.356383 334.130189,121.771277 334.171698,122.040957 C334.462264,123.804255 335.250943,122.040957 335.915094,122.767021 C336.226415,123.078191 336.184906,123.783511 336.620755,124.115426 C337.596226,124.903723 338.696226,124.115426 339.54717,125.588298 C340.100224,126.62628 340.863621,127.537674 341.788679,128.264362 C342.493932,129.36985 343.369507,130.357021 344.383019,131.189362 C345.586792,131.998404 345.130189,132.28883 344.860377,133.26383 C344.486792,134.715957 346.10566,136.18883 347.101887,136.914894 C348.098113,137.640957 347.309434,139.570213 347.101887,140.586702 C346.89434,141.603191 348.284906,144.631915 347.350943,145.088298 L347.350943,145.088298 C346.749057,145.233511 347.537736,147.162766 346.728302,147.868085 C345.918868,148.573404 346.126415,148.656383 345.130189,148.407447 C344.45044,148.214787 343.800816,147.928532 343.2,147.556915 C342.390566,147.556915 342.079245,152.45266 341.767925,153.282447 C341.456604,154.112234 340.854717,153.282447 340.501887,153.552128 C340.149057,153.821809 339.920755,154.859043 339.401887,155.087234 C338.44717,155.481383 338.09434,156.248936 339.54717,156.373404 L341.498113,158.842021 C341.830189,158.842021 341.913208,159.339894 341.913208,159.58883 C341.290566,159.58883 341.020755,161.435106 341.456604,161.49734 C341.456604,161.787766 342.183019,160.335638 342.432075,160.25266 C343.158491,160.045213 344.113208,162.679787 344.818868,162.928723 C345.524528,163.17766 346.064151,163.862234 346.666038,164.650532 C347.267925,165.43883 347.454717,165.418085 348.264151,165.148404 C349.073585,164.878723 348.907547,165.148404 349.281132,165.418085 C349.654717,165.687766 350.650943,165.044681 351.128302,165.231383 C351.60566,165.418085 350.983019,167.451064 350.962264,167.658511 L350.962264,167.658511 C350.713208,168.260106 350.713208,168.550532 351.29434,168.965426 C351.578801,169.086249 351.742275,169.387238 351.688679,169.691489 C351.688679,170.27234 352.726415,171.060638 352.954717,171.765957 C353.183019,172.471277 352.954717,172.989894 353.369811,173.301064 C353.784906,173.612234 355.445283,173.591489 356.171698,174.006383 C357.107473,174.466427 358.203848,174.466427 359.139623,174.006383 L360.696226,173.715957 L360.696226,173.715957 L361.360377,175.396277 L361.360377,175.396277 C360.779245,176.184574 359.160377,176.060106 358.99434,176.972872 C358.99434,177.346277 359.160377,177.595213 359.326415,177.947872 C359.969811,179.317021 358.869811,180.748404 358.869811,182.096809 C358.869811,183.445213 356.918868,184.58617 356.79434,186.059043 C357.541509,188.133511 356.566038,189.585638 354.511321,188.403191 C352.103774,186.992553 351.418868,192.759574 349.613208,193.547872 C348.637736,193.983511 348.990566,195.871277 348.679245,196.929255 C347.99434,199.335638 348.471698,199.003723 350.277358,200.621809 C350.796226,201.970213 350.588679,201.783511 351.854717,201.887234 C352.269811,201.887234 353.058491,202.986702 353.556604,203.194149 C354.386792,203.505319 355.320755,203.505319 356.192453,203.775 C357.410273,204.241943 358.689833,204.528482 359.990566,204.625532 C361.132075,204.625532 359.762264,209.376064 359.720755,210.164362 C359.679245,210.95266 358.454717,211.761702 358.24717,212.570745 C358.130906,213.031603 357.918746,213.462787 357.624528,213.83617 C357.250943,214.18883 357.333962,214.935638 357.188679,215.433511 C357.437736,216.304787 357.043396,216.76117 358.018868,217.217553 C358.99434,217.673936 359.7,219.292021 360.426415,220.329255 C361.15283,221.366489 361.069811,221.449468 362.792453,221.63617 C363.686663,221.732541 364.590931,221.611555 365.428302,221.283511 C365.90566,220.97234 367.503774,220.515957 367.503774,221.407979 C367.503774,222.3 368.479245,223.046809 368.479245,224.374468 L368.479245,226.013298 C368.479245,226.531915 369.20566,227.818085 368.064151,228.087766 C367.233962,228.295213 367.524528,228.751596 367.877358,229.311702 C368.416981,230.203723 369.309434,234.186702 367.109434,233.626596 L365.781132,233.771809 L365.781132,233.771809 L364.992453,233.626596 C364.743396,233.37766 364.141509,233.315426 363.830189,232.962766 C363.538511,232.705173 363.233701,232.462829 362.916981,232.236702 C362.320562,231.78485 361.931507,231.111812 361.837736,230.369681 C361.50566,229.125 357.956604,229.602128 357.250943,230.369681 C356.944251,230.784018 356.60412,231.172551 356.233962,231.531383 C355.756604,231.759574 354.59434,232.921277 354.158491,232.381915 C353.722642,231.842553 353.577358,231.676596 352.767925,232.05 C351.528931,232.862603 350.756596,234.221255 350.692453,235.701064 C350.692453,237.464362 350.173585,236.738298 349.218868,237.775532 C348.264151,238.812766 349.09434,240.596809 349.364151,241.405851 C349.473722,242.168534 349.529206,242.938005 349.530189,243.708511 C348.886792,245.782979 349.758491,246.05266 347.828302,247.525532 C346.624528,248.438298 344.279245,249.828191 342.930189,248.355319 C342.141509,247.484043 342.681132,247.069149 342.266038,246.280851 C339.941509,246.031915 339.920755,246.405319 337.824528,247.629255 C337.139623,248.023404 331.598113,251.363298 331.224528,249.703723 C330.373585,249.496277 330.539623,248.97766 329.584906,249.703723 C328.713208,251.135106 328.630189,252.047872 326.928302,252.317553 C325.786792,252.483511 324.230189,253.313298 324.043396,254.537234 C323.985625,255.312254 323.736001,256.060763 323.316981,256.715426 C322.777723,257.41514 322.157709,258.04878 321.469811,258.603191 C321.075886,259.142677 320.638587,259.649144 320.162264,260.117553 L319.954717,261.217021 L319.954717,261.217021 L318.896226,261.362234 C317.798243,261.217494 316.736066,260.87298 315.762264,260.345745 C314.691646,259.842664 313.687727,259.20855 312.773585,258.457979 C312.773585,258.229787 313.749057,257.441489 313.935849,257.254787 C314.497581,256.654778 315.017659,256.017125 315.492453,255.346277 C316.509434,253.997872 316.281132,253.914894 316.281132,252.400532 C316.281132,251.840426 316.530189,251.321809 316.530189,250.803191 C316.530189,249.745213 316.716981,249.91117 315.783019,249.620745 C315.401751,249.537415 315.084561,249.274507 314.932075,248.915426 C314.745283,247.753723 315.430189,245.285106 314.330189,244.766489 C312.254717,243.895213 311.881132,244.911702 312.545283,242.380851 C312.487946,241.609143 312.173764,240.87884 311.65283,240.306383 C310.532075,239.393617 309.577358,240.617553 308.435849,240.617553 C307.29434,240.617553 306.111321,238.543085 304.990566,239.372872 C303.869811,240.20266 302.437736,242.816489 300.715094,242.194149 C300.030189,241.945213 300.403774,241.385106 299.262264,241.717021 C298.793292,241.992485 298.372629,242.342868 298.016981,242.754255 C297.767925,243.044681 297.622642,243.895213 297.477358,244.019681 C297.332075,244.144149 296.211321,242.650532 296.128302,242.443085 C295.15283,240.368617 293.637736,243.272872 291.666038,242.878723 C290.405659,242.775055 289.156077,242.566892 287.930189,242.256383 C287.45283,242.048936 286.933962,241.239894 286.539623,241.239894 C285.829167,241.359483 285.133437,241.554193 284.464151,241.820745 C283.903774,242.526064 284.588679,243.065426 283.488679,243.75 C282.388679,244.434574 282.243396,245.139894 280.85283,244.725 C280.14717,244.725 278.943396,244.600532 278.943396,243.708511 C278.984263,243.421063 278.888994,243.130974 278.68564,242.923653 C278.482286,242.716332 278.194,242.615385 277.90566,242.650532 C276.473585,242.650532 278.092453,245.658511 275.726415,244.725 C274.789869,244.288212 273.808649,243.954342 272.8,243.729255 C272.260377,243.729255 271.824528,244.164894 271.326415,243.874468 C269.749057,242.899468 269.583019,245.34734 268.628302,245.762234 C267.044833,246.13256 265.412931,246.251569 263.792453,246.114894 C262.857508,245.999893 261.93405,245.805575 261.032075,245.534043 C260.026601,245.491187 259.01931,245.539791 258.022642,245.679255 C256.818868,245.679255 254.992453,244.310106 253.975472,245.03617 C253.456604,245.409574 252.25283,246.944681 251.733962,246.882447 C251.215094,246.820213 249.783019,245.285106 249.222642,244.994681 C247.893585,244.457363 246.7072,243.619485 245.756604,242.546809 C245.031399,241.886324 244.204447,241.346963 243.307547,240.949468 C241.626415,240.430851 242.166038,239.621809 240.9,238.875 C240.153233,238.474574 239.456555,237.987135 238.824528,237.422872 C237.775533,236.84823 236.62803,236.475296 235.441509,236.323404 C233.366038,235.929255 233.366038,234.975 233.179245,233.170213 C232.992453,231.365426 229.54717,233.751064 228.779245,231.572872 L228.260377,230.535638 L228.260377,230.535638 L229.007547,230.017021 C230.128302,229.311702 230.190566,228.378191 230.190566,227.195745 C230.229365,226.047076 230.557757,224.926803 231.145283,223.93883 C231.39434,223.461702 232.411321,223.378723 232.909434,223.503191 C233.407547,223.62766 233.490566,223.93883 233.884906,223.648404 C234.445283,222.528191 235.420755,221.262766 233.386792,220.785638 C231.35283,220.308511 231.581132,218.835638 230.896226,217.196809 C230.750943,216.823404 230.273585,216.304787 230.273585,215.931383 C230.771698,215.931383 231.290566,216.346277 231.809434,216.346277 C232.448878,216.812432 233.261903,216.97192 234.030189,216.781915 C234.290908,216.604143 234.446882,216.309072 234.446882,215.993617 C234.446882,215.678162 234.290908,215.383091 234.030189,215.205319 C232.390566,214.064362 233.55283,213.130851 233.698113,211.554255 C234.611321,211.22234 234.403774,210.848936 234.798113,210.122872 C235.192453,209.396809 236.250943,210.122872 236.873585,210.122872 C237.496226,210.122872 240.671698,211.014894 240.775472,210.890426 C240.879245,210.765957 239.841509,209.334574 239.696226,209.106383 C238.949057,207.98617 238.077358,207.737234 237.620755,206.285106 C237.454717,205.662766 236.832075,204.667021 236.749057,204.210638 C238.222642,204.210638 238.575472,203.733511 238.824528,202.426596 C239.073585,201.119681 239.8,200.891489 239.8,199.56383 C239.8,199.003723 239.05283,198.443617 239.05283,198.23617 L239.05283,198.23617 C239.05283,198.775532 235.981132,200.725532 235.462264,200.787766 C233.656604,201.036702 233.054717,202.322872 231.311321,201.078191 C230.522642,200.53883 229.339623,200.352128 228.820755,199.501596 L227.492453,197.427128 C227.056604,196.721809 226.475472,196.867021 225.790566,196.535106 C224.503774,195.892021 223.881132,194.149468 222.988679,193.029255 C222.096226,191.909043 221.266038,192.406915 222.2,191.473404 C222.792303,190.776376 223.180187,189.929187 223.320755,189.025532 C223.320755,188.278723 224.109434,186.390957 223.756604,185.830851 C223.65283,185.664894 222.449057,184.669149 223.216981,184.482447 L223.216981,184.233511 L222.94717,182.822872 L222.179245,182.94734 L221.016981,183.797872 L219.958491,184.523936 L218.9,184.731383 L217.654717,183.96383 L217.8,182.968085 C218.028302,182.262766 218.54717,179.420745 217.8,179.068085 C217.207039,178.831428 216.545791,178.831428 215.95283,179.068085 C215.6,179.068085 215.267925,179.482979 214.915094,179.379255 C214.562264,179.275532 215.101887,177.304787 215.288679,177.035106 C215.558491,176.018617 215.828302,175.105851 216.015094,174.068617 C216.107573,173.1166 216.107573,172.157868 216.015094,171.205851 C216.083471,170.599259 216.083471,169.986911 216.015094,169.380319 L217.073585,168.737234 L217.073585,168.737234 L221.037736,169.006915 C221.037736,170.27234 221.992453,170.064894 222.90566,170.00266 C224.566038,169.857447 225.209434,167.741489 226.475472,167.222872 C227.741509,166.704255 228.135849,166.41383 228.135849,167.824468 C228.135849,169.898936 230.003774,168.135638 231.103774,167.824468 C232.203774,167.513298 231.103774,166.745745 231.581132,166.123404 C232.175487,165.518573 232.879926,165.032745 233.656604,164.692021 C234.258491,165.065426 234.922642,163.717021 235.026415,163.239894 C235.130189,162.762766 235.026415,161.663298 235.441509,161.49734 C235.856604,161.331383 236.333962,161.995213 236.728302,161.953723 C237.122642,161.912234 239.011321,161.123936 238.7,161.601064 C238.388679,162.078191 238.990566,162.51383 239.115094,163.032447 C239.239623,163.551064 239.384906,165.106915 240.443396,165.106915 C241.501887,165.106915 242.103774,164.256383 243.203774,164.256383 L243.203774,164.256383 L244.179245,164.775 C245.009434,165.08617 245.237736,164.318617 245.715094,163.903723 C246.192453,163.48883 246.835849,163.281383 247.313208,162.887234 C247.790566,162.493085 249.928302,160.812766 249.928302,160.086702 C249.928302,158.945745 250.779245,160.418617 250.779245,160.812766 C250.831852,162.034003 251.165668,163.226639 251.754717,164.297872 C252.377358,165.231383 254.535849,161.601064 254.930189,161.455851 C256.735849,161.455851 258.354717,162.638298 260.30566,162.555319 C260.492453,162.555319 261.488679,162.285638 261.550943,162.555319 C261.613208,162.825 262.422642,164.007447 263.273585,164.15266 C264.124528,164.297872 264.70566,165.12766 265.245283,164.982447 C266.615094,164.629787 268.130189,166.766489 269.396226,166.289362 C270.060377,166.040426 270.641509,168.550532 272.177358,167.7 C273.298113,167.07766 274.626415,168.073404 275.684906,168.509043 C276.162264,169.380319 276.84717,169.65 276.058491,170.707979 C275.269811,171.765957 275.518868,171.807447 274.60566,172.429787 C273.358346,173.19255 272.261062,174.176816 271.367925,175.334043 C271.201887,175.562234 271.513208,176.039362 270.973585,176.080851 C270.433962,176.12234 269.935849,175.603723 269.583019,175.748936 C269.230189,175.894149 268.462264,176.661702 267.901887,176.661702 C267.341509,176.661702 267.901887,178.155319 268.088679,178.445745 C268.981132,180.520213 271.118868,177.118085 272.115094,176.371277 C273.111321,175.624468 274.750943,175.686702 275.539623,175.085106 C275.939532,174.634445 276.307112,174.156129 276.639623,173.653723 C277.760377,172.450532 279.130189,173.19734 280.271698,171.931915 L283.613208,171.931915 L284.298113,171.931915 L284.526415,171.662234 C284.526415,171.268085 284.671698,170.894681 284.692453,170.500532 C284.713208,170.106383 285.045283,169.940426 285.377358,169.898936 C286.35283,169.732979 286.726415,170.93617 287.079245,171.579255 C288.19465,171.36452 289.326533,171.246528 290.462264,171.226596 C295.339623,171.226596 293.803774,168.654255 295.173585,166.393085 L294.509434,164.754255 C294.521693,163.641104 294.235002,162.545042 293.679245,161.580319 C293.098113,160.709043 291.603774,162.596809 291.313208,163.13617 C291.022642,163.675532 290.586792,162.327128 290.628302,162.20266 C290.7789,161.960326 290.904091,161.703115 291.001887,161.435106 C291.001887,161.061702 291.001887,160.646809 291.14717,160.273404 C291.354717,159.298404 292.475472,158.198936 292.060377,157.244681 C291.811321,156.643085 292.6,156.228191 292.724528,155.709574 C292.628604,155.150548 292.360085,154.63553 291.956604,154.236702 C291.313208,153.759574 290.483019,154.236702 290.483019,153.137234 C290.612326,151.984536 290.189105,150.838547 289.341509,150.046277 C288.656604,149.403191 287.266038,149.776596 287.266038,148.760106 C287.266038,147.743617 286.892453,148.034043 286.290566,147.598404 C285.335849,146.91383 286.290566,145.523936 286.083019,144.818617 C285.979245,144.362234 285.128302,145.005319 284.816981,144.548936 C284.50566,144.092553 284.816981,143.138298 284.111321,143.138298 C283.40566,143.138298 282.492453,143.926596 281.911321,143.283511 C281.330189,142.640426 281.703774,141.623936 281.911321,140.877128 C282.118868,140.130319 282.160377,139.030851 281.620755,138.80266 C281.081132,138.574468 279.856604,138.80266 280.126415,138.118085 C280.567076,137.042538 280.941363,135.941005 281.24717,134.819681 C281.475472,134.093617 282.783019,134.23883 281.786792,133.160106 C281.330189,132.641489 281.786792,132.745213 282.015094,132.309574 C282.20191,131.745371 282.35439,131.170384 282.471698,130.587766 C282.720755,129.799468 283.135849,129.094149 283.44717,128.34734 C283.758491,127.600532 282.513208,127.393085 282.222642,126.75 C281.932075,126.106915 282.658491,125.443085 282.658491,124.882979 C282.056604,124.737766 280.583019,124.882979 280.479245,124.13617 C280.375472,123.389362 280.14717,122.746277 279.462264,122.53883 C278.777358,122.331383 278.756604,121.978723 278.756604,121.294149 L279.233962,121.729787 Z" , "name" : "Castilla La Mancha"}
            ,"ES-CV": {
				"path":"M374.767925,269.639362 C374.742658,269.238695 374.742658,268.836836 374.767925,268.43617 C375.282716,266.868175 376.077293,265.406298 377.113208,264.121277 C377.486792,263.56117 378.233962,263.125532 378.420755,262.503191 C378.606547,261.602905 378.655525,260.679771 378.566038,259.764894 C378.566038,258.561702 378.690566,254.889894 379.832075,254.309043 C380.973585,253.728191 382.115094,254.848404 383.007547,253.873404 C383.9,252.898404 382.384906,250.367553 383.007547,248.873936 C383.434691,248.091421 384.065822,247.43909 384.833962,246.98617 C385.581132,246.571277 386.016981,246.98617 386.743396,246.98617 L386.743396,246.98617 C386.743396,246.98617 386.639623,246.05266 386.618868,245.865957 C386.674451,245.164873 386.984462,244.508262 387.490566,244.019681 C388.783811,242.152226 390.745305,240.852622 392.969811,240.389362 C394.132075,240.057447 395.211321,239.040957 396.373585,239.22766 C397.535849,239.414362 397.681132,239.53883 398.449057,238.688298 C399.216981,237.837766 398.241509,237.775532 398.449057,237.111702 C398.656604,236.447872 399.901887,234.435638 400.628302,234.726064 C401.354717,235.016489 402.330189,234.165957 402.433962,234.539362 C402.433962,234.539362 402.662264,234.767553 402.662264,234.809043 C403.160377,234.809043 403.450943,233.37766 404.322642,232.734574 C404.8,232.444149 405.484906,232.734574 405.754717,232.464894 C406.522642,231.801064 406.29434,231.261702 407.373585,230.743085 C409.967925,229.519149 407.892453,229.539894 406.792453,228.108511 C406.315094,227.48617 407.373585,227.52766 407.415094,227.071277 C407.456604,226.614894 406.418868,226.614894 406.25283,226.51117 C404.738132,225.534901 403.033195,224.891439 401.250943,224.623404 C399.175472,224.270745 398.2,222.113298 396.767925,220.681915 C395.854717,219.333511 390.292453,211.201596 393.177358,210.475532 C393.364151,209.749468 391.392453,206.617021 391.101887,205.600532 C390.396613,204.350893 389.792788,203.046709 389.296226,201.700532 C388.915808,200.870122 389.062376,199.893473 389.669811,199.21117 C389.960377,198.734043 389.524528,197.821277 389.462264,197.323404 C389.352827,196.28122 389.642002,195.236247 390.271698,194.398404 C390.89434,193.506383 391.018868,192.033511 391.579245,191.328191 C391.869811,189.876064 393.198113,190.560638 393.488679,189.108511 C393.95502,186.630325 394.976802,184.289876 396.477358,182.262766 C397.701887,180.644681 400.192453,178.694681 400.628302,176.78617 C400.679038,176.456192 400.679038,176.120403 400.628302,175.790426 C401.790566,175.624468 401.603774,173.881915 402.060377,172.844681 C402.516981,171.807447 403.554717,172.014894 404.301887,171.413298 C405.796226,170.189362 405.671698,167.907447 406.377358,166.310106 C406.688679,165.625532 407.456604,165.480319 408.120755,165.335106 C409.449057,165.065426 409.303774,164.505319 409.739623,163.468085 C411.474407,161.713673 412.942814,159.714809 414.098113,157.535106 C415.115094,155.045745 416.588679,153.220213 417.688679,150.81383 L417.688679,150.81383 L415.8,150.108511 C414.803774,149.548404 415.218868,149.610638 415.135849,148.614894 C414.938066,148.062138 414.64284,147.549255 414.264151,147.100532 C413.683019,146.519681 412.188679,147.225 411.233962,146.664894 C410.279245,146.104787 409.90566,145.980319 409.573585,145.005319 C409.241509,144.030319 410.943396,142.70266 409.283019,142.70266 C408.535849,142.70266 408.286792,142.889362 408.286792,142.018085 C408.286792,141.146809 407.456604,141.852128 406.958491,141.582447 L406.024528,141.395745 L406.024528,141.395745 L405.464151,141.769149 C405.111321,141.914362 404.737736,142.101064 404.384906,141.769149 C404.032075,141.437234 404.135849,141.520213 403.845283,141.540957 C403.118868,141.540957 402.641509,142.267021 402.143396,142.70266 C401.998113,142.930851 401.728302,142.910106 401.541509,143.01383 C400.649057,141.68617 401.14717,141.416489 399.133962,141.416489 C397.607179,141.378136 396.192779,140.605613 395.335849,139.342021 C395.335849,139.134574 395.211321,138.595213 394.983019,138.595213 C393.910468,138.558883 392.947774,139.248622 392.637736,140.275532 C392.077358,141.976596 392.30566,142.889362 390.562264,143.781383 C389.296226,144.403723 389.566038,143.98883 388.486792,143.63617 C387.407547,143.283511 387.677358,144.901596 387.366038,145.58617 C387.054717,146.270745 389.296226,146.706383 389.773585,146.706383 C389.773585,146.706383 390.250943,146.519681 390.271698,146.581915 C390.292453,146.644149 390.271698,148.137766 390.271698,148.345213 C390.271698,148.55266 390.10566,151.042021 390.396226,151.125 C390.998113,151.332447 391.433962,152.286702 390.811321,152.76383 C390.188679,153.240957 389.545283,153.012766 389.171698,153.406915 C388.445283,154.132979 389.04717,154.630851 389.316981,155.294681 C389.586792,155.958511 390.998113,157.057979 390.873585,157.369149 C390.396788,157.70697 389.897519,158.011931 389.379245,158.281915 C388.632075,159.028723 388.403774,159.858511 387.303774,160.231915 C386.203774,160.605319 387.303774,161.435106 387.303774,161.891489 C387.303774,163.053191 383.796226,163.779255 382.945283,163.48883 C382.592453,163.364362 382.135849,162.825 381.803774,162.825 C381.39248,163.90476 381.093421,165.02395 380.911321,166.164894 C380.558491,167.596277 379.935849,167.948936 379.188679,169.069149 C378.711321,169.774468 379.313208,170.251596 379.313208,170.894681 C378.973507,170.977428 378.625115,171.019215 378.275472,171.019149 C376.94717,172.678723 375.141509,171.6 374.124528,173.259574 C373.418868,174.442021 371.654717,174.649468 371.426415,175.645213 C371.366967,176.63847 371.621056,177.625311 372.15283,178.466489 C372.318868,178.673936 373.003774,179.296277 372.983019,179.4 L372.983019,179.4 C372.983019,179.586702 371.903774,179.918617 371.716981,180.105319 C371.530189,180.292021 370.720755,181.059574 370.34717,181.059574 C370.243396,180.748404 369.433962,180.06383 369.20566,179.75266 C368.977358,179.441489 369.558491,178.570213 369.20566,178.362766 C369.20566,177.595213 369.516981,176.723936 368.935849,176.143085 C368.354717,175.562234 366.860377,175.603723 366.632075,174.898404 C365.864151,174.794681 365.324528,175.230319 364.556604,175.043617 C364.390566,174.545745 363.020755,175.271809 362.771698,175.375532 L361.360377,175.375532 L361.360377,175.375532 C360.779245,176.16383 359.160377,176.039362 358.99434,176.952128 C358.99434,177.325532 359.160377,177.574468 359.326415,177.927128 C359.969811,179.296277 358.869811,180.72766 358.869811,182.076064 C358.869811,183.424468 356.918868,184.565426 356.79434,186.038298 C357.541509,188.112766 356.566038,189.564894 354.511321,188.382447 C352.103774,186.971809 351.418868,192.73883 349.613208,193.527128 C348.637736,193.962766 348.990566,195.850532 348.679245,196.908511 C347.99434,199.314894 348.471698,198.982979 350.277358,200.601064 C350.796226,201.949468 350.588679,201.762766 351.854717,201.866489 C352.269811,201.866489 353.058491,202.965957 353.556604,203.173404 C354.386792,203.484574 355.320755,203.484574 356.192453,203.754255 C357.410273,204.221198 358.689833,204.507737 359.990566,204.604787 C361.132075,204.604787 359.762264,209.355319 359.720755,210.143617 C359.679245,210.931915 358.454717,211.740957 358.24717,212.55 C358.130906,213.010859 357.918746,213.442042 357.624528,213.815426 C357.250943,214.168085 357.333962,214.914894 357.188679,215.412766 C357.437736,216.284043 357.043396,216.740426 358.018868,217.196809 C358.99434,217.653191 359.7,219.271277 360.426415,220.308511 C361.15283,221.345745 361.069811,221.428723 362.792453,221.615426 C363.686663,221.711796 364.590931,221.590811 365.428302,221.262766 C365.90566,220.951596 367.503774,220.495213 367.503774,221.387234 C367.503774,222.279255 368.479245,223.026064 368.479245,224.353723 L368.479245,225.992553 C368.479245,226.51117 369.20566,227.79734 368.064151,228.067021 C367.233962,228.274468 367.524528,228.730851 367.877358,229.290957 C368.416981,230.182979 369.309434,234.165957 367.109434,233.605851 L365.781132,233.751064 L365.781132,233.751064 L365.781132,234.539362 C365.670828,234.764441 365.627601,235.016476 365.656604,235.265426 C365.656604,235.576596 365.781132,235.887766 365.843396,236.198936 C366.07224,236.931212 366.020456,237.722382 365.698113,238.418617 C365.351909,239.056594 365.298926,239.813121 365.55283,240.493085 C365.843396,241.13617 364.556604,242.11117 364.058491,242.567553 C362.958491,243.376596 362.273585,247.172872 363.622642,247.525532 C364.971698,247.878191 365.698113,247.525532 366.383019,248.93617 C368.126415,252.421277 364.909434,255.159574 364.909434,258.084574 C364.909434,259.370745 366.113208,260.262766 366.756604,261.320745 C367.983658,263.656839 369.534843,265.807894 371.364151,267.710106 C372.396269,268.530357 373.552177,269.181554 374.788679,269.639362 L374.767925,269.639362 Z M351.107547,167.803723 L353.307547,168.197872 C356.732075,168.944681 354.096226,165.293617 356.296226,164.754255 L356.296226,164.754255 C356.270117,165.363818 356.453187,165.963997 356.815094,166.455319 C357.10566,166.849468 357.603774,167.098404 357.769811,167.513298 C358.24717,168.861702 358.081132,169.276596 359.845283,169.02766 C361.408058,169.157503 362.809676,170.039863 363.601887,171.392553 C364.203774,172.637234 361.650943,173.467021 360.758491,173.840426 L360.758491,173.840426 L359.201887,174.130851 C358.266112,174.590895 357.169737,174.590895 356.233962,174.130851 C355.445283,173.736702 354.158491,173.944149 353.432075,173.425532 C352.70566,172.906915 353.162264,172.367553 353.016981,171.890426 C352.871698,171.413298 351.750943,170.438298 351.750943,169.815957 C351.804539,169.511706 351.641065,169.210717 351.356604,169.089894 C350.775472,168.695745 350.775472,168.405319 351.024528,167.782979 L351.107547,167.803723 Z" , "name" : "Comunidad Valenciana"}
            ,"ES-EX": {
				"path":"M217.633962,169.131383 L216.575472,169.774468 C216.643848,170.38106 216.643848,170.993408 216.575472,171.6 C216.667951,172.552017 216.667951,173.510749 216.575472,174.462766 C216.367925,175.5 216.118868,176.412766 215.849057,177.429255 C215.662264,177.740426 214.977358,179.628191 215.475472,179.773404 C215.973585,179.918617 216.160377,179.565957 216.513208,179.462234 C217.106169,179.225577 217.767416,179.225577 218.360377,179.462234 C219.003774,179.814894 218.50566,182.656915 218.360377,183.362234 L218.215094,184.357979 L219.460377,185.125532 L220.518868,184.918085 L221.577358,184.192021 L222.739623,183.341489 L223.507547,183.217021 L223.777358,184.62766 L223.777358,184.876596 C223.009434,185.063298 224.213208,186.059043 224.316981,186.225 C224.669811,186.785106 223.964151,188.672872 223.881132,189.419681 C223.740564,190.323336 223.35268,191.170524 222.760377,191.867553 C221.84717,192.801064 222.864151,192.572872 223.549057,193.423404 C224.233962,194.273936 225.064151,196.28617 226.350943,196.929255 C227.015094,197.26117 227.616981,197.115957 228.05283,197.821277 L229.381132,199.895745 C229.9,200.746277 231.083019,200.912234 231.871698,201.47234 C233.677358,202.717021 234.279245,201.47234 236.022642,201.181915 C236.541509,201.181915 239.613208,199.107447 239.613208,198.630319 L239.613208,198.630319 C239.613208,198.837766 240.360377,199.397872 240.360377,199.957979 C240.360377,201.285638 239.654717,201.700532 239.384906,202.820745 C239.115094,203.940957 238.720755,204.604787 237.309434,204.604787 C237.309434,204.978191 238.015094,205.953191 238.181132,206.679255 C238.554717,208.131383 239.426415,208.380319 240.256604,209.500532 C240.401887,209.728723 241.460377,211.139362 241.335849,211.284574 C241.211321,211.429787 238.160377,210.517021 237.433962,210.517021 C236.707547,210.517021 235.690566,209.894681 235.358491,210.517021 C235.026415,211.139362 235.171698,211.616489 234.258491,211.948404 C234.113208,213.504255 232.950943,214.479255 234.590566,215.599468 C234.851285,215.77724 235.007259,216.072311 235.007259,216.387766 C235.007259,216.703221 234.851285,216.998292 234.590566,217.176064 C233.82228,217.366069 233.009256,217.206581 232.369811,216.740426 C231.850943,216.740426 231.332075,216.325532 230.833962,216.325532 C230.833962,216.698936 231.290566,217.217553 231.456604,217.590957 C232.141509,219.229787 231.74717,220.66117 233.94717,221.179787 C236.14717,221.698404 235.00566,222.92234 234.445283,224.042553 C234.050943,224.332979 233.864151,224.042553 233.469811,223.89734 C233.075472,223.752128 231.954717,223.89734 231.70566,224.332979 C231.118135,225.320952 230.789743,226.441225 230.750943,227.589894 C230.750943,228.77234 230.750943,229.664362 229.567925,230.41117 L228.820755,230.929787 L228.820755,230.929787 L227.367925,230.929787 C225.624528,232.091489 225.977358,231.116489 224.503774,231.344681 C223.030189,231.572872 223.320755,230.971277 223.320755,232.900532 C223.320755,233.813298 222.469811,233.564362 221.971698,233.854787 C221.473585,234.145213 220.539623,235.28617 219.896226,235.929255 C218.630189,236.862766 218.671698,237.671809 217.177358,237.173936 C216.513208,236.945745 215.101887,240.16117 214.375472,240.679787 C213.649057,241.198404 213.483019,241.862234 212.839623,242.629787 C212.196226,243.39734 211.241509,242.339362 210.411321,243.335106 C209.884223,244.051613 209.561442,244.897608 209.477358,245.782979 C209.477358,246.280851 210.037736,246.405319 210.058491,246.778723 C210.079245,247.152128 209.477358,248.459043 209.933962,248.853191 C210.390566,249.24734 210.556604,249.164362 210.556604,249.703723 C210.556604,250.865426 211.59434,251.591489 211.532075,253.022872 C211.532075,253.85266 210.80566,254.205319 210.784906,254.682447 C210.764151,255.159574 211.013208,255.325532 210.784906,255.76117 C210.38126,256.291256 209.863435,256.72375 209.269811,257.026596 C208.855223,257.055577 208.439116,257.055577 208.024528,257.026596 C207.028302,257.296277 205.596226,259.764894 204.620755,259.101064 C204.164151,258.831383 203.396226,256.73617 204.20566,256.632447 C206.467925,256.300532 205.430189,253.334043 202.835849,254.78617 C201.798113,255.367021 199.618868,255.09734 199.224528,256.404255 C198.975472,257.213298 198,257.482979 197.564151,258.333511 C197.128302,259.184043 198.581132,259.681915 197.439623,260.802128 C196.298113,261.92234 197.273585,262.233511 195.613208,262.731383 C194.388679,263.104787 192.935849,263.021809 191.586792,263.353723 C190.65283,263.768617 189.926415,264.681383 189.096226,265.013298 C188.266038,265.345213 188.245283,264.328723 187.601887,264.328723 C187.108828,264.413832 186.602045,264.302096 186.190566,264.017553 C185.630189,263.623404 184.986792,263.851596 184.364151,263.644149 C183.594708,263.192883 182.963183,262.540144 182.537736,261.756383 C182.164151,259.827128 181.541509,260.98883 180.316981,260.159043 C179.445283,259.578191 179.735849,260.159043 179.466038,260.822872 L178.760377,262.337234 C178.760377,262.503191 176.871698,261.631915 176.581132,261.507447 C175.086792,261.175532 174.941509,262.026064 174.941509,260.138298 C174.941509,259.66117 173.675472,258.478723 173.281132,258.375 C172.542264,258.359546 171.804072,258.429153 171.081132,258.582447 C169.4,258.582447 169.75283,259.018085 168.507547,257.897872 C168.113208,257.545213 167.511321,257.897872 167.137736,257.586702 C165.996226,256.321277 169.213208,255.055851 166.909434,254.931383 C166.017836,254.980913 165.145756,254.657798 164.501887,254.039362 L163.090566,253.603723 L163.090566,253.603723 C162.343396,252.379787 162.467925,253.769681 161.575472,253.603723 C160.683019,253.437766 160.226415,254.765426 159.043396,254.703191 C157.486792,254.703191 157.445283,255.076596 156.656604,253.313298 C156.273263,252.14759 155.735803,251.038306 155.058491,250.014894 C154.70566,249.662234 154.083019,249.185106 154.083019,248.645745 C153.730189,247.836702 152.9,247.318085 152.381132,246.571277 C151.89733,245.948489 151.525158,245.246616 151.281132,244.496809 C151.135849,243.895213 151.032075,243.832979 150.450943,243.708511 C149.869811,243.584043 150.160377,242.46383 150.30566,242.15266 C150.450943,241.841489 150.575472,241.758511 150.471698,241.468085 C150.367925,241.17766 150.056604,241.468085 149.849057,241.468085 L150.015094,239.912234 C150.015094,239.518085 150.201887,239.144681 150.30566,238.750532 C150.575472,237.817021 151.301887,237.256915 151.716981,236.489362 L152.19434,235.59734 C152.401887,235.223936 151.44717,235.59734 151.488679,234.809043 C151.530189,234.020745 151.675472,233.170213 151.716981,232.40266 C151.729061,231.998041 151.777686,231.595341 151.862264,231.199468 C152.049057,230.45266 152.464151,230.639362 152.9,230.265957 C153.335849,229.892553 153.564151,229.394681 153.979245,229.042021 C154.39434,228.689362 154.518868,228.917553 154.74717,228.689362 C155.432075,228.046277 155.245283,226.988298 156.532075,226.988298 C157.362264,226.988298 158.316981,224.91383 158.939623,225.121277 C159.125535,224.50758 159.237025,223.873786 159.271698,223.233511 C159.184414,223.001595 159.14215,222.755178 159.14717,222.507447 C159.496507,222.228733 159.756303,221.853652 159.89434,221.428723 C159.89434,220.993085 160.579245,220.578191 160.828302,220.163298 C161.077358,219.748404 162.384906,217.798404 162.239623,217.404255 C162.09434,217.010106 161.741509,217.010106 161.741509,216.678191 C161.741509,216.346277 161.886792,216.076596 161.741509,215.620213 C161.596226,215.16383 160.018868,213.545745 159.167925,213.545745 C158.316981,213.545745 156.490566,214.5 155.701887,213.545745 C155.716823,212.906706 155.77228,212.269258 155.867925,211.637234 C155.867925,210.579255 154.809434,210.95266 153.896226,210.6 C152.415089,210.029061 151.66654,208.375661 152.215094,206.886702 C152.588679,206.03617 152.049057,206.119149 151.530189,205.559043 C150.99378,204.97926 150.527084,204.338735 150.139623,203.650532 C149.984481,203.195929 149.900473,202.720114 149.890566,202.239894 C149.724528,201.368617 149.475472,201.990957 149.890566,201.078191 C150.160377,200.580319 150.492453,198.464362 150.035849,198.173936 C149.41758,197.795468 148.772466,197.462667 148.10566,197.178191 C146.984906,196.659574 147.296226,195.103723 146.424528,195.103723 C145.55283,195.103723 145.59434,194.730319 145.262264,194.232447 C144.894988,193.628921 144.416003,193.100885 143.850943,192.676596 C143.333115,192.040252 142.894086,191.343718 142.543396,190.602128 L142.149057,189.253723 C142.650341,189.103003 143.16447,188.998838 143.684906,188.942553 C144.221639,189.006852 144.74212,189.168545 145.220755,189.419681 C145.780985,189.640666 146.390797,189.705203 146.984906,189.606383 C147.981132,189.481915 148.603774,190.560638 149.579245,189.81383 C150.589459,188.950223 151.99267,188.711155 153.232075,189.191489 C153.833962,189.378191 154.311321,189.793085 155.037736,189.627128 C155.703365,189.345383 156.400044,189.143444 157.113208,189.025532 C157.673585,189.025532 158.275472,189.50266 158.856604,189.274468 C159.437736,189.046277 159.520755,188.942553 159.956604,188.755851 L160.101887,187.905319 C160.101887,187.054787 160.537736,186.722872 160.786792,186.017553 C161.035849,185.312234 160.683019,184.793617 160.973585,184.275 C161.264151,183.756383 161.118868,183.569681 160.973585,183.092553 C160.828302,182.615426 161.118868,181.827128 161.679245,181.827128 C162.239623,181.827128 162.592453,180.810638 163.215094,180.354255 C164.149057,179.960106 163.671698,178.673936 163.671698,177.947872 C163.671698,177.221809 164.813208,176.682447 164.626415,175.873404 C164.190566,174.379787 165.560377,172.740957 164.128302,171.309574 C163.754717,170.915426 163.422642,171.060638 163.235849,170.438298 C162.44717,167.886702 161.7,169.65 160.184906,168.36383 C159.666038,167.948936 159.790566,166.745745 160.039623,166.289362 C160.039623,165.480319 159.250943,165.812234 159.811321,164.795745 C160.062008,164.338546 160.27042,163.859431 160.433962,163.364362 C160.830979,163.354276 161.226565,163.312656 161.616981,163.239894 C161.928302,163.115426 161.990566,162.596809 162.343396,162.430851 C163.194095,162.26595 164.053269,162.148217 164.916981,162.078191 L164.916981,162.078191 L166.058491,162.555319 C166.73765,162.878533 167.486447,163.02822 168.237736,162.990957 C169.130189,162.990957 169.856604,161.746277 170.5,161.870745 C170.935849,163.613298 171.164151,162.451596 172.575472,162.057447 C173.05283,161.932979 173.488679,162.223404 173.966038,162.057447 C174.443396,161.891489 175.813208,161.455851 175.833962,160.999468 C175.833962,159.941489 175.979245,158.634574 177.1,158.198936 C177.701887,157.970745 178.137736,157.472872 178.864151,157.472872 C179.590566,157.472872 180.00566,157.120213 180.420755,156.414894 C180.907571,156.26706 181.408326,156.169738 181.915094,156.124468 C182.164151,156.124468 182.890566,154.36117 183.7,154.05 C185.111321,153.572872 187.103774,151.394681 188.328302,152.867553 L189.283019,153.987766 C189.490679,154.161042 189.772698,154.215852 190.030189,154.132979 C191.649057,153.863298 189.573585,154.983511 191.04717,155.419149 C193.267925,156.062234 190.798113,157.701064 191.79434,158.198936 C192.14717,158.364894 193.869811,158.717553 193.869811,158.759043 C194.222642,159.23617 194.056604,160.148936 194.886792,160.335638 C196.816981,160.56383 196.671698,162.659043 198.145283,160.335638 C198.70566,159.485106 199.037736,159.464362 199.950943,159.215426 C200.864151,158.966489 200.967925,158.178191 201.673585,157.991489 L201.673585,157.991489 C201.673585,158.61383 201.964151,159.153191 201.818868,159.775532 C201.466038,161.123936 202.566038,161.393617 203.769811,160.937234 C204.536076,160.811053 205.31477,161.075681 205.845283,161.642553 C206.198113,162.036702 206.40566,162.555319 207.028302,162.596809 C207.650943,162.638298 207.713208,163.654787 208.64717,164.11117 C209.581132,164.567553 210.369811,165.459574 211.718868,164.795745 C212.418556,164.838833 213.096902,164.546052 213.545283,164.007447 C213.898113,163.571809 214.10566,162.990957 214.541509,162.679787 C214.977358,162.368617 215.330189,162.679787 215.579245,162.555319 C215.828302,162.430851 217.654717,161.601064 217.239623,162.306383 C216.877124,162.84255 216.636281,163.451446 216.533962,164.090426 L216.533962,165.418085 C216.533962,166.227128 216.284906,166.559043 216.741509,167.305851 C217.083239,167.739492 217.343427,168.231501 217.509434,168.757979 L217.633962,169.131383 Z" , "name" : "Extremadura"}
            ,"ES-AN": {
				"path":"M228.633962,230.743085 L229.15283,231.780319 C229.920755,233.854787 233.303774,231.42766 233.55283,233.37766 C233.801887,235.32766 233.698113,236.136702 235.815094,236.530851 C237.001615,236.682742 238.149118,237.055676 239.198113,237.630319 C239.830139,238.194581 240.526818,238.682021 241.273585,239.082447 C242.539623,239.912234 242,240.742021 243.681132,241.156915 C244.578031,241.55441 245.404984,242.093771 246.130189,242.754255 C247.080785,243.826932 248.26717,244.66481 249.596226,245.202128 C250.156604,245.492553 251.671698,247.048404 252.107547,247.089894 C252.543396,247.131383 253.830189,245.637766 254.349057,245.243617 C255.366038,244.496809 257.171698,245.886702 258.396226,245.886702 C259.392895,245.747238 260.400186,245.698634 261.40566,245.741489 C262.307635,246.013022 263.231093,246.20734 264.166038,246.32234 C265.786516,246.459015 267.418418,246.340007 269.001887,245.969681 C269.977358,245.534043 270.143396,243.106915 271.7,244.081915 C272.198113,244.393085 272.613208,243.874468 273.173585,243.936702 C274.182234,244.161788 275.163454,244.495659 276.1,244.932447 C278.486792,245.782979 276.84717,242.857979 278.279245,242.857979 C278.567585,242.822832 278.855871,242.923779 279.059225,243.1311 C279.262579,243.338421 279.357848,243.62851 279.316981,243.915957 C279.316981,244.807979 280.520755,244.890957 281.226415,244.932447 C282.616981,245.34734 282.741509,244.662766 283.862264,243.957447 C284.983019,243.252128 284.277358,242.712766 284.837736,242.028191 C285.507022,241.76164 286.202752,241.56693 286.913208,241.44734 C287.307547,241.44734 287.826415,242.277128 288.303774,242.46383 C289.529662,242.774339 290.779244,242.982502 292.039623,243.08617 C294.115094,243.501064 295.526415,240.555319 296.501887,242.650532 C296.501887,242.857979 297.622642,244.434574 297.850943,244.227128 C298.079245,244.019681 298.141509,243.272872 298.390566,242.961702 C298.746214,242.550315 299.166877,242.199932 299.635849,241.924468 C300.756604,241.592553 300.403774,242.173404 301.088679,242.401596 C302.811321,243.023936 304.264151,240.430851 305.364151,239.580319 C306.464151,238.729787 307.64717,240.825 308.809434,240.825 C309.971698,240.825 310.884906,239.601064 312.026415,240.51383 C312.547349,241.086287 312.861531,241.81659 312.918868,242.588298 C312.254717,245.119149 312.628302,244.10266 314.703774,244.973936 C315.783019,245.430319 315.118868,247.898936 315.30566,249.122872 C315.458146,249.481954 315.775335,249.744862 316.156604,249.828191 C317.111321,250.118617 316.903774,249.95266 316.903774,251.010638 C316.903774,251.529255 316.654717,252.047872 316.654717,252.607979 C316.654717,254.101596 316.883019,254.184574 315.866038,255.553723 C315.391244,256.224571 314.871166,256.862225 314.309434,257.462234 C314.122642,257.648936 313.14717,258.437234 313.14717,258.665426 C314.061312,259.415997 315.065231,260.050111 316.135849,260.553191 C317.109651,261.080427 318.171828,261.42494 319.269811,261.569681 L320.328302,261.424468 L320.328302,261.424468 C320.660377,262.005319 321.615094,262.150532 321.94717,262.772872 C322.316568,263.568174 322.739553,264.337496 323.213208,265.075532 C324.28675,266.263996 325.768794,267.00466 327.364151,267.15 C328.443396,267.15 328.713208,267.834574 329.896226,267.606383 C330.415094,267.606383 330.871698,268.104255 331.369811,268.228723 C331.867925,268.353191 332.469811,267.896809 333.030189,267.896809 C332.851035,268.623429 332.571628,269.321608 332.2,269.971277 C331.764151,270.676596 332.2,272.170213 332.075472,273 C332.075472,273.477128 332.386792,273.809043 332.283019,274.32766 C332.153863,274.672356 332.049818,275.025938 331.971698,275.385638 C331.881467,276.081129 331.938028,276.7878 332.137736,277.460106 C332.680387,278.788466 333.376965,280.048662 334.213208,281.214894 C335.001887,282.418085 337.907547,287.562766 339.339623,286.836702 C340.25283,286.380319 340.398113,286.836702 341.415094,286.836702 L344.964151,289.740957 L344.964151,289.740957 L343.386792,290.964894 C341.996226,293.226064 339.422642,295.11383 338.758491,297.665426 C338.427076,300.086985 337.623192,302.419943 336.392453,304.531915 C335.977358,305.776596 336.620755,307.187234 335.624528,308.182979 C334.628302,309.178723 332.739623,309.531383 332.283019,311.253191 C331.826415,312.975 332.760377,312.31117 331.349057,313.016489 C329.937736,313.721809 330.788679,315.090957 329.564151,315.651064 C328.339623,316.21117 326.990566,318.368617 325.537736,317.725532 C325.041137,317.121182 324.596774,316.475779 324.209434,315.796277 C323.586792,314.883511 322.466038,313.306915 321.283019,313.161702 C320.41579,312.6135 319.277928,312.781011 318.60566,313.555851 C317.567925,314.406383 317.443396,313.555851 316.716981,312.995745 C315.430189,311.875532 312.067925,314.57234 311.69434,315.817021 C311.346845,317.35331 310.221284,318.596336 308.726415,319.094681 C308.083019,319.426596 306.650943,319.094681 306.277358,319.405851 C305.40566,319.634043 305.218868,318.721277 304.658491,318.327128 C304.098113,317.932979 303.786792,318.783511 303.184906,318.783511 C302.783206,318.726912 302.438535,318.468533 302.271698,318.098936 C301.379245,317.704787 301.462264,316.501596 300.196226,316.501596 C298.930189,316.501596 298.245283,317.248404 297,316.812766 C294.654717,315.982979 292.433962,317.22766 290.316981,316.52234 C288.843396,316.024468 288.407547,317.103191 287.037736,316.771277 C286.145283,316.56383 286.041509,317.559574 285.377358,317.787766 C284.215094,318.16117 281.724528,320.214894 280.624528,318.264894 C279.566038,317.206915 278.818868,318.368617 277.615094,317.289894 C276.722642,316.501596 275.809434,317.289894 274.771698,317.435106 L272.696226,317.746277 C271.596226,317.912234 270.620755,316.833511 269.624528,316.626064 C267.860377,316.273404 266.407547,317.518085 264.767925,317.518085 C263.901169,317.284397 263.04878,317.000404 262.215094,316.667553 C260.554717,316.314894 260.824528,317.559574 259.620755,317.559574 C257.879752,318.080688 256.056385,318.270677 254.245283,318.119681 L250.239623,317.559574 C249.492453,317.455851 246.420755,322.455319 245.611321,323.264362 C244.801887,324.073404 242.850943,323.7 242.435849,325.587766 C241.439623,326.956915 242.435849,326.832447 240.650943,326.915426 C239.696226,326.915426 239.530189,328.160106 238.035849,327.91117 C235.150943,327.413298 233.760377,326.189362 230.854717,327.91117 C229.653113,328.601328 228.350413,329.098354 226.99434,329.384043 C226.350943,329.529255 225.707547,329.964894 225.043396,330.17234 C224.379245,330.379787 222.967925,330.649468 222.677358,331.251064 C222.075472,332.371277 221.016981,332.682447 221.016981,334.134574 C221.016981,335.192553 220.830189,334.964362 220.145283,335.648936 C219.918833,335.970168 219.769673,336.339337 219.709434,336.72766 C219.564151,337.225532 219.086792,337.578191 218.754717,337.993085 C218.422642,338.407979 218.50566,339.071809 218.15283,339.548936 C217.8,340.026064 217.716981,340.669149 217.716981,341.519681 L217.716981,341.519681 L216.492453,341.685638 L216.492453,341.685638 C216.221909,341.180054 215.714749,340.844711 215.143396,340.793617 C214.001887,340.793617 213.711321,343.86383 214.084906,344.444681 C214.873585,345.730851 213.566038,346.519149 212.507547,346.622872 C211.790922,346.821251 211.120766,347.159692 210.535849,347.618617 C208.460377,348.821809 208.190566,346.913298 206.633962,346.602128 C206.135849,346.353191 205.969811,345.81383 205.30566,345.938298 C204.8088,346.055996 204.286047,345.915623 203.915094,345.564894 C202.981132,344.901064 202.233962,345.274468 201.237736,344.195745 C200.241509,343.117021 199.162264,339.860106 196.796226,340.752128 C195.589795,341.076241 194.301477,340.840036 193.288679,340.109043 C192.369835,338.811734 191.590669,337.421039 190.964151,335.960106 C190.632075,335.960106 190.341509,336.126064 189.94717,336.105319 C189.770578,335.529015 189.534067,334.972788 189.241509,334.445745 L188.556604,333.076596 C188.07398,332.375576 187.630535,331.6484 187.228302,330.898404 C186.626415,329.19734 185.464151,327.765957 184.841509,326.044149 C184.488679,325.02766 185.754717,326.542021 186.086792,326.542021 C186.418868,326.542021 186.875472,326.147872 187.062264,325.712234 C187.365679,325.417098 187.476804,324.976256 187.349521,324.572657 C187.222239,324.169059 186.878275,323.871599 186.460377,323.803723 C185.069811,323.451064 185.630189,322.787234 184.613208,322.268617 C183.845982,321.965975 183.030373,321.804338 182.20566,321.791489 C181.10566,321.646277 181.686792,320.650532 181.375472,319.903723 C181.064151,319.156915 179.445283,317.476596 180.566038,316.937234 C181.183551,316.616926 181.727754,316.171884 182.164151,315.630319 C182.620755,315.090957 181.935849,314.842021 181.624528,314.344149 C181.211781,313.767272 180.889814,313.130644 180.669811,312.456383 L179.922642,310.651596 L179.092453,309.178723 C178.408604,307.968374 177.439726,306.942999 176.269811,306.191489 C173.92602,304.361465 171.409782,302.763524 168.756604,301.420213 C167.323587,300.520081 165.773101,299.822001 164.149057,299.345745 C161.803774,298.764894 160.143396,297.06383 157.590566,296.75266 C155.021812,296.552482 152.437775,296.798128 149.95283,297.478723 C148.898001,297.982567 147.800641,298.392142 146.673585,298.70266 L146.673585,298.70266 C146.673585,298.204787 146.445283,297.706915 146.362264,297.188298 C146.279245,296.669681 146.362264,296.835638 146.362264,296.669681 C146.362264,296.503723 145.94717,295.839894 145.801887,295.673936 C145.656604,295.507979 145.926415,294.221809 145.926415,293.599468 C145.926415,292.686702 145.303774,291.856915 145.303774,290.819681 C145.303774,290.280319 145.677358,289.699468 145.511321,289.201596 C145.345283,288.703723 144.660377,288.745213 144.80566,287.873936 C144.92481,287.29919 144.92481,286.70613 144.80566,286.131383 C144.732572,285.446531 144.49006,284.790639 144.1,284.222872 C143.830189,283.870213 143,282.978191 142.730189,282.646277 C142.751053,282.078857 142.863179,281.518495 143.062264,280.986702 C143.204999,280.772002 143.27752,280.518302 143.269811,280.260638 C143.020755,279.223404 143.809434,279.555319 144.037736,278.870745 C144.223549,278.433871 144.453015,278.016863 144.722642,277.626064 C145.02573,277.053457 145.14871,276.402699 145.075472,275.759043 C145.220755,274.887766 146.237736,274.265426 146.071698,273.435638 C145.90566,272.605851 146.798113,272.917021 147.171698,272.439894 C147.443175,272.092032 147.741577,271.766029 148.064151,271.464894 C149.454717,270.220213 150.7,269.265957 150.575472,267.315957 C150.575472,266.672872 151.966038,265.241489 151.820755,264.142021 C151.820755,263.519681 151.260377,263.187766 152.235849,262.980319 C152.816981,262.855851 153.709434,262.399468 154.124528,262.62766 C154.539623,262.855851 156.345283,262.62766 155.950943,261.92234 C156.179245,261.3 155.950943,261.030319 156.864151,260.885106 C157.340002,260.930033 157.796845,261.094131 158.192453,261.362234 C158.566038,261.673404 158.566038,262.005319 159.14717,261.839362 C160.579245,261.465957 160.828302,260.076064 160.828302,258.582447 C160.828302,257.939362 161.035849,258.167553 161.34717,257.731915 C161.990566,256.839894 161.492453,255.657447 161.720755,255.076596 C161.949057,254.495745 162.924528,253.831915 162.758491,253.562234 L162.758491,253.562234 L164.169811,253.997872 C164.813681,254.616309 165.685761,254.939424 166.577358,254.889894 C168.922642,255.014362 165.664151,256.279787 166.80566,257.545213 C167.179245,257.960106 167.781132,257.545213 168.175472,257.856383 C169.420755,258.976596 169.067925,258.603191 170.749057,258.540957 C171.471997,258.387663 172.210189,258.318056 172.949057,258.333511 C173.343396,258.333511 174.609434,259.619681 174.609434,260.096809 C174.609434,261.984574 174.775472,261.134043 176.249057,261.465957 C176.560377,261.590426 178.324528,262.461702 178.428302,262.295745 L179.133962,260.781383 C179.403774,260.200532 179.133962,259.536702 179.984906,260.117553 C181.209434,260.926596 181.832075,259.764894 182.20566,261.714894 C182.631107,262.498654 183.262633,263.151393 184.032075,263.60266 C184.654717,263.789362 185.318868,263.60266 185.858491,263.976064 C186.26997,264.260606 186.776752,264.372342 187.269811,264.287234 C187.913208,264.287234 188.120755,265.220745 188.764151,264.971809 C189.407547,264.722872 190.320755,263.727128 191.254717,263.312234 C192.603774,262.980319 194.035849,263.063298 195.281132,262.689894 C196.941509,262.171277 196.090566,261.777128 197.107547,260.760638 C198.124528,259.744149 196.775472,259.163298 197.232075,258.292021 C197.688679,257.420745 198.643396,257.171809 198.892453,256.362766 C199.307547,255.035106 201.466038,255.325532 202.503774,254.744681 C205.098113,253.292553 206.135849,256.259043 203.873585,256.590957 C203.064151,256.715426 203.873585,258.789894 204.288679,259.059574 C205.264151,259.640426 206.696226,257.151064 207.692453,256.985106 C208.107041,257.014088 208.523148,257.014088 208.937736,256.985106 C209.531359,256.68226 210.049184,256.249767 210.45283,255.719681 C210.639623,255.284043 210.45283,255.055851 210.45283,254.640957 C210.45283,254.226064 211.158491,253.81117 211.2,252.981383 C211.2,251.55 210.224528,250.906915 210.224528,249.662234 C210.224528,249.122872 209.975472,249.102128 209.601887,248.811702 C209.228302,248.521277 209.767925,247.359574 209.726415,246.737234 C209.684906,246.114894 209.124528,246.239362 209.145283,245.741489 C209.229367,244.856118 209.552148,244.010124 210.079245,243.293617 C210.909434,242.318617 211.90566,243.418085 212.507547,242.588298 C213.109434,241.758511 213.067925,241.281383 214.043396,240.638298 C215.018868,239.995213 216.118868,236.925 216.845283,237.132447 C218.339623,237.630319 218.318868,236.821277 219.564151,235.887766 C220.311321,235.348404 221.016981,234.31117 221.639623,233.813298 C222.262264,233.315426 222.988679,233.813298 222.988679,232.859043 C222.988679,230.929787 222.656604,231.552128 224.171698,231.303191 C225.686792,231.054255 225.292453,232.05 227.035849,230.888298 L228.488679,230.888298 L228.633962,230.743085 Z" , "name" : "Andalucía"}
            ,"ES-IB": {
				"path":"M540.84717,170.355319 C540.016981,172.035638 539.290566,171.24734 537.671698,171.517021 C536.05283,171.786702 533.188679,171.268085 531.881132,171.95266 C531.462241,172.335957 531.117506,172.793038 530.864151,173.301064 C530.532075,174.483511 531.3,174.255319 532.04717,174.255319 C532.078609,175.297647 532.002101,176.340429 531.818868,177.367021 C531.611321,178.279787 534.24717,177.823404 534.807547,177.740426 C535.971494,177.343698 537.234166,177.343698 538.398113,177.740426 C540.473585,178.73617 542.237736,180.416489 544.333962,181.35 C546.866038,182.490957 548.692453,184.212766 548.484906,179.939362 C548.162182,177.971594 547.647786,176.040069 546.949057,174.17234 C545.890566,174.17234 543.960377,173.176596 543.732075,172.26383 C543.4,170.853191 543.192453,171.019149 542.154717,171.558511 C541.116981,172.097872 541.781132,170.562766 541.013208,170.27234 L540.826415,170.417553 L540.84717,170.355319 Z M492.032075,184.109043 C491.098113,184.648404 490.267925,186.183511 489.396226,186.88883 C488.941045,187.246568 488.394521,187.469385 487.818868,187.531915 C486.843396,187.718617 485.743396,189.046277 484.913208,189.606383 L482.339623,191.431915 L480.513208,192.593617 C480.139623,192.821809 482.796226,195.248936 483.356604,195.331915 C483.916981,195.414894 484.996226,195.331915 485.203774,195.331915 C485.411321,195.331915 484.996226,196.078723 485.037736,196.348404 C485.183019,197.219681 487.113208,198.796277 487.69434,197.364894 C487.922642,196.680319 488.233962,195.290426 488.898113,194.896277 C489.167925,194.751064 489.5,195.020745 489.790566,194.896277 C490.081132,194.771809 489.998113,194.211702 490.164151,194.211702 C490.330189,194.211702 490.662264,194.522872 490.849057,194.356915 C491.035849,194.190957 491.098113,193.610106 491.367925,193.506383 C492.073585,193.319681 493.983019,194.937766 494.60566,195.394149 C495.228302,195.850532 494.356604,196.929255 494.356604,197.717553 C494.356604,198.505851 495.269811,198.754787 495.020755,199.439362 C494.667925,200.435106 495.539623,201.51383 496.266038,202.219149 C496.992453,202.924468 498.735849,202.592553 499.856604,202.592553 C500.375472,202.592553 500.354717,202.924468 500.89434,202.592553 C501.849057,202.198404 501.932075,202.053191 502.803774,202.924468 C503.301887,203.42234 502.803774,204.376596 503.654717,204.521809 C504.15283,204.521809 504.983019,206.409574 505.730189,206.803723 C506.477358,207.197872 507.80566,205.144149 508.2,204.729255 C508.59434,204.314362 510.130189,203.816489 510.171698,203.712766 C510.4,203.007447 510.483019,202.945213 511.14717,202.696277 C512.932075,202.032447 513.015094,199.231915 513.471698,197.717553 C514.239623,196.804787 514.696226,195.269681 515.54717,194.522872 C516.119817,193.955215 516.737563,193.434894 517.39434,192.967021 C518.224528,192.469149 516.979245,192.261702 517.39434,191.369681 C517.809434,190.47766 519.469811,190.021277 519.469811,188.610638 C519.469811,187.967553 520.092453,186.53617 519.781132,186.183511 C518.557348,184.997535 517.071323,184.1163 515.443396,183.61117 C515.277358,183.61117 514.198113,185.270745 513.783019,185.685638 C512.475472,186.660638 511.14717,185.976064 509.964151,185.125532 C509.537177,184.369698 509.013946,183.672395 508.407547,183.051064 C507.058491,181.847872 509.3,181.889362 509.984906,181.35 C510.169873,181.249044 510.295924,181.066335 510.324582,180.857645 C510.353239,180.648955 510.281102,180.439056 510.130189,180.292021 C509.860377,179.918617 510.441509,179.524468 510.441509,179.005851 C510.441509,179.005851 508.55283,179.814894 508.262264,179.918617 C507.971698,180.02234 507.058491,180.167553 507.058491,179.462234 C507.058491,178.279787 507.930189,177.781915 509.030189,177.387766 C509.528302,177.201064 511.416981,176.454255 511.416981,175.81117 C510.420755,175.81117 509.341509,175.624468 508.59434,176.350532 C507.328302,177.615957 506.332075,176.744681 504.858491,177.035106 C504.173585,177.159574 504.111321,177.657447 503.571698,177.989362 C503.032075,178.321277 502.201887,177.989362 501.496226,178.155319 C500.749057,178.611702 499.960377,178.881383 499.213208,179.420745 C498.652692,179.856863 497.97165,180.11032 497.262264,180.146809 C496.801224,180.149027 496.372229,180.382912 496.120755,180.769149 C495.311321,181.910106 493.15283,181.847872 492.467925,183.341489 L492.032075,184.005319 L492.032075,184.109043 Z M448.758491,224.001064 C448.509434,222.96383 452.577358,222.196277 453.116981,220.640426 C453.428302,219.748404 452.930189,219.478723 453.94717,219.229787 C454.964151,218.980851 454.943396,217.715426 455.898113,217.383511 C455.445888,216.905923 455.187044,216.277605 455.171698,215.620213 C455.171698,214.437766 455.835849,214.520745 454.175472,214.520745 C453.283019,214.520745 453.739623,213.960638 453.345283,213.607979 C453.345283,213.607979 452.141509,214.417021 451.518868,214.417021 C450.57018,214.534804 449.665006,214.883876 448.883019,215.433511 C448.431422,215.733851 447.880132,215.845545 447.34717,215.744681 C446.766038,215.744681 444.275472,218.71117 445.064151,219.250532 C446.371698,220.121809 445.458491,220.308511 444.337736,220.308511 C442.054717,220.308511 443.3,220.163298 443.009434,221.67766 C442.842039,222.213282 442.717124,222.761254 442.635849,223.316489 C442.635849,224.519681 443.632075,225.162766 444.067925,223.876596 L444.524528,224.001064 C445.254302,224.297531 446.023376,224.486213 446.807547,224.56117 C447.035849,224.56117 447.201887,224.934574 447.30566,225.142021 C447.409434,225.349468 447.658491,225.785106 448.05283,225.785106 C448.280005,225.753041 448.510561,225.753041 448.737736,225.785106 C448.737736,225.785106 449.069811,225.930319 449.173585,225.88883 C449.277358,225.307979 448.758491,224.727128 448.758491,224.125532 L448.758491,223.93883 L448.758491,224.001064 Z M453.054717,233.004255 C452.681132,233.004255 452.141509,232.568617 451.809434,232.381915 C451.431545,232.013429 451.097277,231.602756 450.813208,231.157979 C450.434016,231.202638 450.05089,231.202638 449.671698,231.157979 C449.232221,231.081685 448.782874,231.081685 448.343396,231.157979 C448.290212,231.751472 448.290212,232.348528 448.343396,232.942021 C448.288536,233.445319 448.288536,233.953085 448.343396,234.456383 L448.343396,234.456383 C448.592453,234.456383 449.443396,233.025 449.775472,232.796809 C450.626415,232.195213 451.850943,232.796809 452.349057,233.439894 C452.575326,233.775025 452.942046,233.988841 453.345283,234.020745 C453.511321,234.020745 454.403774,234.020745 454.424528,233.875532 C454.445283,233.730319 454.424528,233.875532 454.549057,233.875532 C454.549057,233.543617 454.839623,232.983511 454.549057,232.630851 C454.258491,232.278191 453.760377,232.879787 453.55283,233.004255 L452.84717,233.004255 L453.054717,233.004255 Z" , "name" : "Illes Balears"}
            ,"ES-CN": {
				"path":"M159.915094,321.480319 C159.858768,321.329054 159.757345,321.198716 159.624528,321.106915 C159.435339,321.048906 159.230794,321.125574 159.126415,321.293617 C159.116268,321.348471 159.116268,321.40472 159.126415,321.459574 L159.126415,321.812234 C159.292454,321.953692 159.515985,322.007622 159.728302,321.957447 L159.89434,321.480319 L159.915094,321.480319 Z M159.126415,328.533511 C159.624528,328.409043 159.977358,327.703723 160.226415,327.309574 C160.323326,327.18379 160.381069,327.032287 160.392453,326.873936 C160.392453,326.873936 160.122642,326.666489 160.060377,326.583511 C159.998113,326.500532 159.603774,325.753723 159.5,326.168617 C159.482185,326.420926 159.440489,326.67098 159.375472,326.915426 C159.251316,327.194089 159.058521,327.436751 158.815094,327.620745 C158.669811,327.620745 158.649057,327.848936 158.586792,327.973404 C158.524528,328.097872 158.586792,328.284574 158.711321,328.533511 L159.126415,328.533511 Z M162.115094,328.969149 C161.928302,328.969149 161.181132,328.326064 160.911321,328.243085 C159.043396,327.745213 159.603774,333.76117 157.590566,332.703191 C156.407547,332.080851 156.884906,331.997872 155.660377,332.703191 C152.318868,334.362766 148.624528,334.77766 148.416981,339.258511 C148.416981,340.772872 146.798113,341.332979 147.192453,342.84734 C147.192453,343.179255 148.85283,342.84734 149.267925,342.84734 C149.683019,342.84734 150.098113,343.760106 150.139623,343.573404 L150.139623,343.573404 C150.682719,341.619463 152.513851,340.307212 154.539623,340.420213 C155.305075,340.34172 156.007437,339.960836 156.490566,339.362234 C156.867746,339.04775 157.391142,338.975315 157.839623,339.175532 C158.743588,338.649941 159.579965,338.015995 160.330189,337.287766 C161.077358,336.437234 160.911321,335.814894 161.30566,334.860638 C161.7,333.906383 160.537736,332.661702 161.741509,331.624468 C162.571698,330.919149 162.467925,330.317553 162.467925,329.218085 L162.073585,329.031383 L162.115094,328.969149 Z M148.064151,350.128723 C148.155031,350.766531 148.315093,351.392558 148.541509,351.995745 C148.61048,352.477333 148.61048,352.966284 148.541509,353.447872 C148.673738,354.458698 148.453878,355.484213 147.918868,356.352128 C146.860377,357.721277 147.732075,359.816489 147.275472,361.41383 L146.009434,365.396809 C145.303774,367.595745 144.971698,366.890426 143.311321,367.471277 C140.654717,368.280319 135.611321,368.715957 134.283019,371.371277 C133.909434,372.118085 131.626415,374.71117 130.941509,374.482979 C129.938075,374.336004 128.960083,374.049731 128.035849,373.632447 C126.832075,372.844149 125.960377,373.964362 125.960377,372.221809 C129.711115,372.700337 133.385831,370.896515 135.3,367.637234 C135.964151,366.537766 135.466038,365.562766 135.69434,364.276596 C135.922642,362.990426 137.271698,362.202128 137.624528,360.584043 C137.749057,360.148404 137.624528,359.692021 137.956604,359.339362 C138.578095,358.842912 139.135786,358.271556 139.616981,357.638298 C140.745567,355.220668 141.736458,352.741177 142.584906,350.211702 C142.584906,349.817553 142.439623,349.423404 142.584906,348.987766 C142.730189,347.660106 145.428302,347.556383 146.362264,347.224468 C147.296226,346.892553 147.379245,347.701596 147.898113,348.012766 C148.790566,348.572872 148.022642,348.925532 148.230189,349.67234 L148.230189,350.190957 L148.064151,350.128723 Z M92.0264151,384.336702 C92.9188679,384.046277 93.9566038,384.067021 93.9566038,382.926064 C93.9566038,381.785106 95.1188679,381.764362 94.8490566,380.685638 C94.6416438,380.1041 94.8247961,379.455056 95.3056604,379.067553 C95.5754717,378.777128 95.3056604,377.470213 95.3056604,376.993085 C95.3056604,375.354255 94.8075472,375.478723 94.2056604,374.234043 C93.9440364,372.867441 93.8395846,371.475424 93.8943396,370.085106 L93.8943396,370.085106 C93.3754717,370.085106 93.0018868,371.018617 92.5245283,371.080851 C92.0471698,371.143085 91.2584906,370.707447 90.5943396,370.437766 C89.9301887,370.168085 86.6716981,370.977128 86.2773585,369.83617 C84.2018868,369.83617 84.5754717,370.707447 83.9528302,372.263298 C83.439692,373.993295 82.0232003,375.3057 80.2584906,375.68617 C80.115277,376.402883 79.8852826,377.099499 79.5735849,377.760638 C79.3245283,378.362234 80.0716981,379.357979 80.2169811,380.084043 C80.4839243,380.522951 80.6339732,381.022872 80.6528302,381.53617 C80.6528302,382.158511 82.0018868,382.884574 82.4584906,383.423936 C83.5835774,384.486104 84.9202419,385.299025 86.3811321,385.809574 C88.6433962,386.701596 89.2037736,385.083511 91.154717,384.564894 L92.0679245,384.295213 L92.0264151,384.336702 Z M58.3622642,358.032447 C56.7536861,359.999894 54.2732238,361.04134 51.7415094,360.812234 C49.790566,360.542553 47.590566,363.094149 45.5150943,361.164894 C45.5150943,361.164894 42.5886792,362.181383 42.6716981,362.720745 C42.7668872,362.790595 42.8508702,362.874538 42.9207547,362.969681 C43.0531223,363.047562 43.1665422,363.153842 43.2528302,363.280851 C44.4981132,363.529787 45.3283019,366.039894 45.3283019,367.077128 C45.7161689,368.977495 46.6293459,370.731097 47.9641509,372.13883 L49.6660377,374.337766 C50.1849057,375.02234 49.6660377,375.644681 50.0811321,376.246277 C50.4962264,376.847872 51.8037736,375.893617 52.1566038,375.706915 C53.2566038,375.001596 54.4188679,374.482979 55.5396226,375.354255 C55.5396226,375.354255 55.7264151,374.690426 55.9132075,374.545213 C57.2263543,373.267417 58.3388996,371.798728 59.2132075,370.18883 C59.6698113,369.545745 59.4415094,368.570745 59.7320755,367.88617 L60.7075472,365.604255 C61.6415094,364.359574 61.0811321,363.654255 61.6207547,362.451064 C62.1603774,361.247872 62.7622642,361.019681 63.6962264,360.08617 C65.0293802,358.5711 66.5994268,357.282042 68.345283,356.269149 C69.590566,355.667553 70.4207547,354.817021 69.4245283,353.510106 C69.2584906,353.30266 67.0377358,354.298404 66.4150943,354.27766 L64.1113208,354.27766 C63.4886792,354.27766 63.3018868,353.945745 62.9283019,354.443617 C62.554717,354.941489 61.3301887,354.962234 60.7490566,355.501596 C60.1679245,356.040957 59.8150943,356.891489 59.0471698,357.451596 L58.4245283,358.053191 L58.3622642,358.032447 Z M9.81698113,355.957979 C9.68461595,355.178906 9.32338589,354.456795 8.77924528,353.883511 C8.30333871,353.382366 7.97947452,352.756532 7.84528302,352.078723 C7.65849057,351.331915 6.99433962,351.145213 6.99433962,350.439894 C6.99433962,349.008511 5.87358491,347.992021 5.56226415,346.726596 C5.2509434,345.46117 6.95283019,344.465426 7.63773585,343.635638 C8.59245283,342.370213 9.06981132,343.760106 10.4811321,343.82234 C11.5811321,343.82234 12.5566038,343.034043 12.9509434,344.133511 C13.6773585,345.793085 15.6490566,347.265957 14.0716981,348.863298 C12.4943396,350.460638 14.7981132,353.136702 12.8679245,355.190426 C12.3530528,355.968992 11.9151432,356.795755 11.5603774,357.659043 C11.5603774,359.15266 9.92075472,358.281383 9.92075472,356.725532 L9.81698113,355.957979 Z M29.554717,374.337766 C28.7867925,374.005851 28.890566,373.279787 28.5169811,372.719681 C28.1433962,372.159574 27.8943396,371.78617 28.2056604,370.645213 C28.5169811,369.504255 28.6830189,367.823936 30.2811321,367.823936 C30.6962264,367.823936 31.0490566,368.155851 31.4433962,368.259574 C32.2738631,368.358216 33.0551532,368.705288 33.6849057,369.255319 C34.6396226,370.14734 36.0301887,370.292553 36.0301887,371.889894 C36.0301887,372.574468 35.5528302,372.906383 35.1169811,373.383511 C34.6811321,373.860638 33.8301887,374.420745 33.7679245,374.690426 C33.3113208,374.690426 32.7924528,375.209043 32.190566,375.229787 C31.4717034,375.228279 30.7623817,375.065214 30.1150943,374.75266 L29.554717,374.337766 Z M3.79811321,387.842553 C2.94192886,387.370711 1.973208,387.141199 0.996226415,387.178723 C-0.41509434,387.178723 0.269811321,386.72234 0.269811321,385.892553 C0.269811321,384.315957 0.913207547,385.311702 1.84716981,385.311702 C3.63955028,385.40908 5.30026096,384.371638 5.99811321,382.718617 C6.66159454,381.979682 7.65093905,381.62151 8.63396226,381.764362 C9.38113208,382.075532 9.09056604,383.963298 8.82075472,384.50266 C8.32264151,385.581383 7.16037736,386.141489 7.03584906,387.38617 C7.03584906,388.153723 5.06415094,388.423404 4.46226415,388.195213 L3.88113208,387.821809 L3.79811321,387.842553 Z" , "name" : "Canarias"}
            ,"ES-CM": {
				"path":"M254.349057,144.071809 C254.269455,143.897434 254.113907,143.769449 253.927404,143.724872 C253.740902,143.680295 253.544253,143.7241 253.39434,143.843617 L252.730189,144.3 C252.29434,144.65266 252.60566,145.337234 253.145283,145.088298 C253.398643,144.972818 253.676992,144.922882 253.954717,144.943085 C254.064746,144.960208 254.176763,144.960208 254.286792,144.943085 C254.286792,144.943085 254.286792,144.486702 254.390566,144.382979 L254.349057,144.071809 Z M243.743396,164.816489 C244.698113,164.028191 243.556604,162.410106 244.94717,161.455851 C245.445283,161.103191 244.573585,159.381383 244.801887,158.925 C245.030189,158.468617 245.341509,158.925 245.424528,158.925 C245.65283,159.381383 245.569811,160.148936 246.275472,160.128191 C246.483019,160.128191 247.728302,160.128191 247.749057,159.941489 C247.769811,159.754787 247.541509,159.319149 247.749057,159.132447 C247.956604,158.945745 248.350943,158.800532 248.496226,158.012234 C248.641509,157.223936 248.184906,156.726064 249.326415,155.937766 C249.845283,155.937766 250.384906,155.937766 250.883019,155.792553 C251.381132,155.64734 252.29434,156.165957 252.25283,155.315426 C252.25283,154.942021 251.816981,154.879787 251.837736,154.485638 C251.858491,154.091489 252.377358,153.780319 252.522642,153.469149 C252.386377,152.842721 252.337485,152.200461 252.377358,151.560638 C252.377358,151.145745 252.190566,150.710106 252.190566,150.295213 C252.190566,149.880319 252.481132,149.83883 252.709434,149.714362 C253.581132,149.714362 253.809434,148.179255 253.892453,147.515426 C253.975472,146.851596 253.269811,146.332979 253.74717,145.772872 C253.892453,145.606915 254.432075,146.747872 254.556604,146.91383 C254.909434,147.432447 256.632075,146.91383 257.04717,146.768617 C257.462264,146.623404 257.960377,146.56117 257.690566,146.104787 C257.462431,145.589528 257.411346,145.013283 257.545283,144.465957 C258.099087,143.248758 258.758859,142.082569 259.516981,140.980851 C259.786792,140.669681 260.866038,138.719681 261.032075,138.719681 C262.19434,138.719681 263.771698,139.487234 264.083019,137.993617 C264.083019,137.703191 264.581132,137.620213 264.684906,137.288298 C264.788679,136.956383 264.498113,136.582979 264.933962,135.981383 C265.369811,135.379787 265.203774,134.985638 265.141509,134.259574 C265.554906,132.947207 266.265075,131.747601 267.216981,130.753723 C267.951121,130.133298 268.871455,129.775563 269.832075,129.737234 C271.492453,129.36383 272.09434,127.164894 273.111321,126.12766 C273.650943,125.588298 274.335849,125.588298 274.875472,124.882979 L276.49434,122.808511 C276.761422,122.66586 277.00049,122.476104 277.2,122.248404 C277.461684,122.009331 277.773776,121.832092 278.113208,121.729787 C278.264946,121.713002 278.418073,121.713002 278.569811,121.729787 L279.254717,121.729787 L279.254717,121.729787 C279.254717,122.414362 279.254717,122.746277 279.960377,122.974468 C280.666038,123.20266 280.832075,123.928723 280.977358,124.571809 C281.122642,125.214894 282.554717,125.173404 283.156604,125.318617 C283.156604,125.878723 282.471698,126.667021 282.720755,127.185638 C282.969811,127.704255 283.945283,127.953191 283.945283,128.782979 C283.945283,129.612766 283.218868,130.235106 282.969811,131.023404 C282.852503,131.606022 282.700023,132.18101 282.513208,132.745213 C282.326415,133.180851 281.807547,133.077128 282.284906,133.595745 C283.281132,134.695213 281.973585,134.529255 281.745283,135.255319 C281.439426,136.376628 281.065141,137.478159 280.624528,138.553723 C280.354717,139.196809 281.683019,139.051596 282.118868,139.238298 C282.554717,139.425 282.409434,140.877128 282.409434,141.312766 C282.409434,141.748404 281.890566,143.076064 282.409434,143.719149 C282.928302,144.362234 283.883019,143.573936 284.609434,143.573936 C285.335849,143.573936 285.003774,144.569681 285.315094,144.984574 C285.626415,145.399468 286.477358,144.797872 286.581132,145.254255 C286.767925,146.063298 285.833962,147.328723 286.788679,148.034043 C287.390566,148.469681 287.764151,148.2 287.764151,149.195745 C287.764151,150.191489 289.113208,149.83883 289.839623,150.481915 C290.687218,151.274185 291.110439,152.420175 290.981132,153.572872 C290.981132,154.630851 291.811321,154.195213 292.454717,154.67234 C292.858198,155.071169 293.126717,155.586186 293.222642,156.145213 C293.098113,156.66383 292.309434,157.078723 292.558491,157.680319 C292.99434,158.696809 291.85283,159.754787 291.645283,160.709043 C291.645283,161.082447 291.645283,161.49734 291.5,161.870745 C291.402204,162.138753 291.277013,162.395965 291.126415,162.638298 C291.126415,162.762766 291.520755,164.028191 291.811321,163.571809 C292.101887,163.115426 293.596226,161.144681 294.177358,162.015957 C294.733116,162.98068 295.019806,164.076742 295.007547,165.189894 L295.671698,166.828723 C294.301887,169.089894 295.858491,171.662234 290.960377,171.662234 C289.824646,171.682166 288.692763,171.800158 287.577358,172.014894 C287.224528,171.371809 286.850943,170.168617 285.875472,170.334574 C285.564151,170.334574 285.211321,170.604255 285.190566,170.93617 C285.169811,171.268085 285.024528,171.682979 285.024528,172.097872 L284.796226,172.367553 L284.19434,172.367553 L280.85283,172.367553 C279.711321,173.632979 278.341509,172.88617 277.220755,174.089362 C276.888244,174.591767 276.520664,175.070084 276.120755,175.520745 C275.332075,176.12234 273.692453,176.16383 272.696226,176.806915 C271.7,177.45 269.562264,180.769149 268.669811,178.881383 C268.545283,178.590957 267.901887,177.09734 268.483019,177.09734 C269.064151,177.09734 269.686792,176.412766 270.164151,176.184574 C270.641509,175.956383 271.098113,176.557979 271.554717,176.516489 C272.011321,176.475 271.783019,175.997872 271.949057,175.769681 C272.842194,174.612455 273.939478,173.628188 275.186792,172.865426 C276.1,172.243085 276.079245,171.890426 276.639623,171.143617 C277.2,170.396809 276.764151,169.815957 276.266038,168.944681 C275.207547,168.509043 273.879245,167.513298 272.758491,168.135638 C271.222642,168.98617 270.683019,166.476064 269.977358,166.725 C268.75283,167.181383 267.237736,165.065426 265.826415,165.418085 C265.286792,165.563298 264.643396,164.712766 263.854717,164.588298 C263.066038,164.46383 262.298113,162.990957 262.132075,162.990957 L260.886792,162.990957 C258.935849,162.990957 257.316981,161.891489 255.511321,161.891489 C255.137736,162.036702 252.979245,165.687766 252.335849,164.733511 C251.7468,163.662277 251.412984,162.469641 251.360377,161.248404 C251.360377,160.854255 250.509434,159.360638 250.509434,160.52234 C250.509434,161.22766 248.433962,162.845745 247.89434,163.322872 C247.354717,163.8 246.79434,163.903723 246.296226,164.339362 C245.798113,164.775 245.611321,165.521809 244.760377,165.210638 L243.784906,164.692021 L243.743396,164.816489 Z" , "name" : "Comunidad de Madrid"}
				,"ES-CE": {
				"path":"M252.891509,386.971132 L243.739245,385.29566 L237.330566,382.426415 C237.330566,382.426415 234.105283,379.787547 231.801509,377.672264 C230.922008,376.921567 230.083086,376.12459 229.288302,375.284717 C229.288302,375.284717 226.44,371.745283 225.099623,369.650943 C224.106634,368.091263 223.305018,366.417714 222.712075,364.666415 L222.942453,360.477736 L224.911132,358.718491 L221.225094,357.671321 L217.078302,360.247358 L213.853019,361.524906 L209.91566,362.027547 L204.30283,363.179434 L203.046226,367.179623 L192.867736,391.662453 L252.891509,391.662453 L252.891509,386.971132 Z" , "name" : "Ceuta"}
				,"ES-ME": {
				"path":"M252.891509,391.662453 L319.763774,391.662453 L319.114528,389.316792 L312.831509,388.56283 L306.129623,388.981698 L303.197547,388.123019 L299.783774,388.416226 L298.925094,386.698868 L297.35434,382.321698 L296.537547,381.253585 L296.537547,379.431509 L296.160566,377.735094 L293.060943,381.190755 L288.432453,384.18566 C286.489432,384.761868 284.486711,385.113222 282.463585,385.23283 C280.409939,385.214961 278.362491,385.004607 276.348113,384.604528 L273.227547,382.614906 L270.190755,383.955283 L264.075283,383.955283 L253.01717,387.075849 L252.891509,387.075849 L252.891509,391.662453 Z" , "name" : "Melilla"}	
	
			
}

, "height": 390, "projection": {"type": "mill", "centralMeridian": 0.0}, "width": 555});
/*	----------------------------------------------------------------------------------------------------
	 JS ADN global para todo el proyecto de carga asíncrona
------------------------------------------------------------------------------------------------------ */

/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */
windowWidth = window.innerWidth;
//Si hacemos una llamada AJAX lanzaremos esta función para recargar los plugins
function initAsync(){
	
	
	//Validaciones formularios
//	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation(
//		{
//			filter: function () {
//				return $(this).is(":visible");
//			}
//		}		
//	);	
	
	
}

$(window).load(function(){

	//Ejecutamos Masonry
	$('.js-masonry').masonry({
	  columnWidth: 1,
	});	
	
	
	//Ejecutamos Sliders	
	$('.js-slick').slick({
		dots: true,
		arrows: false
	});
	
	
	//Ejecutamos Sliders con autoPlay
	$('.js-slick-autoplay').each(function(){
		$(this).slick({
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: $(this).attr('data-play-speed') || 10000 //10s de autoplay o por data-play-speed
		});
	});
	
	
	//Slider sin dots con arrows
	$('.js-slick-arrows').slick({
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 800,
		cssEase: 'linear',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 64 64" width="64" class="icon icon--md" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../html/svg/symbol/svg/sprite.symbol.svg#arrow_left"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 64 64" width="64" class="icon icon--md" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../html/svg/symbol/svg/sprite.symbol.svg#arrow_rigth"></use></svg></button>',
		
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        speed: 400,
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]		
		
	});
	
	$('.js-toggle-text').each(function(){
		$(this).on('click', function(){
			console.log('a');
			var _newText = $(this).attr('data-text');
			$(this).attr('data-text', _newText);
			$(this).text(_newText);
		});	
	});	
	
})	


svg4everybody();


/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	
	
	/*	--------------------------------------------------
		Recalculamos alturas cuando se ejecute el lazysizes
	-------------------------------------------------- */

	document.addEventListener('lazybeforeunveil', function(e){
	    
	    sameHeight();
	    
	});	

	/*	--------------------------------------------------
		Convertimos el header en fixed si hay hero-img,
		si no lo hay usamos sticky
	-------------------------------------------------- */
	hero = $('[data-hero]');
	// para hacerlo el efecto, al hacer scroll, al sobrepasar la altura del hero
	//if ( hero.length > 0){
	//  
	//	var topofDiv = hero.offset().top-100; //gets offset of header
	//	var height = hero.outerHeight(); //gets height of header
	//	
	//	$(window).scroll(function(){
	//	    if($(window).scrollTop() > (topofDiv + height)){
	//	       $(".header.fixedsticky").addClass('sticky');
	//	    }
	//	    else{
	//	       $(".header.fixedsticky").removeClass('sticky');
	//	    }
	//	});
	//  
	//}else{
	//	$(".header.fixedsticky").addClass('sticky');	
	//	$( '.header.fixedsticky' ).fixedsticky();	  
	//}
	
	//para hacer el efecto nada más hacer scroll
	if ( hero.length > 0){
	  
	  var topofDiv = hero.offset().top-100; //gets offset of header
	  var height = hero.outerHeight(); //gets height of header
	  
	  $(window).on('scroll load', function(){
	      if($(window).scrollTop() > 0){
	         $(".header.fixedsticky").addClass('sticky');
	      }
	      else{
	         $(".header.fixedsticky").removeClass('sticky');
	      }
	  });
	  
	}else{
	  $(".header.fixedsticky").addClass('sticky');	
	  $( '.header.fixedsticky' ).fixedsticky();	  
	}

	/*	--------------------------------------------------
		Le damos color al header al abrir el buscador
	-------------------------------------------------- */

	$('#header-search-button').click(function(){
		
		$(".header.fixedsticky").toggleClass('header--search--open');
		
	})

	/*	--------------------------------------------------
		Alertas que cambian su texto al ser pulsadas
	-------------------------------------------------- */

	$('[data-alert-text]').click(function(){
		
		target = $(this).attr('data-alert-target');
		text = $(this).attr('data-alert-text');
		$(target).removeClass('hidden')
		$(target).text(text);
		
	})

	/*	--------------------------------------------------
		Mostrar una capa
	-------------------------------------------------- */
	$('[data-show]').on('click', function(e){
		var layerToShow = $(this).attr('data-show');
		$(layerToShow).removeClass('hidden');
		
	// Vamos hasta la capa, esperamos un poco para que esté visible
	setTimeout(function(){
		
		var moveToOffset = $(layerToShow).offset().top - 80;
		$("html, body").animate({scrollTop: moveToOffset, useTranslate3d:true }, 700);
		sameHeight(); 
				
	}, 700);		
		
	});
	/*	--------------------------------------------------
		Ocultar una capa
	-------------------------------------------------- */
	$('[data-hide]').on('click', function(e){
		var layerToHide = $(this).attr('data-hide');
		$(layerToHide).addClass('hidden');
	});		
	

	/*	--------------------------------------------------
		Video players
	-------------------------------------------------- */
	$('.card-video__button').click(function(){

		videoPlayer = $('.card-video-full__player video').attr('id');

		$('.card-video-full__poster').hide();		
		$('.card-video-full__player').show();
				
		document.getElementById(videoPlayer).play();
				
	});

	// $('.hero-video__button').click(function(){

	// 	videoPlayer = $('.hero-video__player video').attr('id');

	// 	$('.hero-video__poster').hide();		
	// 	$('.hero-video__player').show();
				
	// 	$('.hero-video').css('background','black');
	// 	$('.hero-video').attr('data-background','');
	// 	$('.hero-video').attr('data-background-2x','');
				
	// 	document.getElementById(videoPlayer).play();
				
	// });


	if( windowWidth >= smBreak ) {

		$('.dropdown').hover(function() {
			$(this).addClass('open');
			$(this).closest('header').addClass('solid-bg');
		}, function() {
			$(this).removeClass('open');
			$(this).closest('header').removeClass('solid-bg');
		});	
	}

	


	/*	--------------------------------------------------
		Muestro modal de prueba kpmg impulsa
		tras 5 segundos
	-------------------------------------------------- */

	if ($('#modal-test-impulsa').length>0 ) {
		setTimeout(function(){ 
			$('#modal-test-impulsa').modal(); 
		}, 3000);

	}

	/*	--------------------------------------------------
		Muestro modal de suscripción
		por defecto
	-------------------------------------------------- */


	if ($('#modal-suscription').length>0 ) {

		$('#modal-suscription').on('show.modal', function(){
		});
		$('#modal-suscription').on('hide.modal', function(){
			
		});

		$('#modal-suscription').modal('show'); 
		$('#modal-suscription').on('shown.modal', function(){
			
		});

	}

	/*	--------------------------------------------------
		Muestro modal de preparando documentos
		por defecto
	-------------------------------------------------- */

	if ($('#modal-docs').length>0 ) {

		$('#modal-docs').modal();

	}

	/*	--------------------------------------------------
		Calculo altura del menu mobile
	-------------------------------------------------- */

	maxHeight = $(window).height() - $('.off-canvas__head').outerHeight() - $('.bottom-off-canvas').outerHeight() - 20; 

	$('.js-height-menu').css('height', maxHeight); 
	console.log($('.bottom-off-canvas').outerHeight()); 
	

	
	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */
	initAsync();


	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {



	});


	/*	--------------------------------------------------
		Llamada de funciones al abrir modales
	-------------------------------------------------- */

	$('#modal-suscription').on('hide.bs.modal', function () {
	 	insertBG(); 
	 	sameHeight(); 
	 	
	});

});

