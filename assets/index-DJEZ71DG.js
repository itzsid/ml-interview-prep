function Th(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ro(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tp={exports:{}},io={},np={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),Lh=Symbol.for("react.portal"),Ih=Symbol.for("react.fragment"),Rh=Symbol.for("react.strict_mode"),Ah=Symbol.for("react.profiler"),jh=Symbol.for("react.provider"),Oh=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),Fh=Symbol.for("react.memo"),Bh=Symbol.for("react.lazy"),Bu=Symbol.iterator;function Uh(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ip=Object.assign,lp={};function Er(e,t,n){this.props=e,this.context=t,this.refs=lp,this.updater=n||rp}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function op(){}op.prototype=Er.prototype;function Ps(e,t,n){this.props=e,this.context=t,this.refs=lp,this.updater=n||rp}var Ns=Ps.prototype=new op;Ns.constructor=Ps;ip(Ns,Er.prototype);Ns.isPureReactComponent=!0;var Uu=Array.isArray,ap=Object.prototype.hasOwnProperty,zs={current:null},sp={key:!0,ref:!0,__self:!0,__source:!0};function up(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)ap.call(t,r)&&!sp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ti,type:e,key:l,ref:o,props:i,_owner:zs.current}}function Wh(e,t){return{$$typeof:Ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ts(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ti}function Vh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wu=/\/+/g;function zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vh(""+e.key):t.toString(36)}function dl(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ti:case Lh:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+zo(o,0):r,Uu(i)?(n="",e!=null&&(n=e.replace(Wu,"$&/")+"/"),dl(i,t,n,"",function(u){return u})):i!=null&&(Ts(i)&&(i=Wh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Uu(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+zo(l,a);o+=dl(l,t,n,s,i)}else if(s=Uh(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+zo(l,a++),o+=dl(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ui(e,t,n){if(e==null)return e;var r=[],i=0;return dl(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Hh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},pl={transition:null},$h={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:pl,ReactCurrentOwner:zs};function cp(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Ui,forEach:function(e,t,n){Ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ui(e,function(){t++}),t},toArray:function(e){return Ui(e,function(t){return t})||[]},only:function(e){if(!Ts(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Er;Z.Fragment=Ih;Z.Profiler=Ah;Z.PureComponent=Ps;Z.StrictMode=Rh;Z.Suspense=Dh;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$h;Z.act=cp;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ip({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=zs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ap.call(t,s)&&!sp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ti,type:e.type,key:i,ref:l,props:r,_owner:o}};Z.createContext=function(e){return e={$$typeof:Oh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jh,_context:e},e.Consumer=e};Z.createElement=up;Z.createFactory=function(e){var t=up.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Mh,render:e}};Z.isValidElement=Ts;Z.lazy=function(e){return{$$typeof:Bh,_payload:{_status:-1,_result:e},_init:Hh}};Z.memo=function(e,t){return{$$typeof:Fh,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=pl.transition;pl.transition={};try{e()}finally{pl.transition=t}};Z.unstable_act=cp;Z.useCallback=function(e,t){return We.current.useCallback(e,t)};Z.useContext=function(e){return We.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Z.useEffect=function(e,t){return We.current.useEffect(e,t)};Z.useId=function(){return We.current.useId()};Z.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return We.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};Z.useRef=function(e){return We.current.useRef(e)};Z.useState=function(e){return We.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return We.current.useTransition()};Z.version="18.3.1";np.exports=Z;var E=np.exports;const jt=ro(E),Xh=Th({__proto__:null,default:jt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh=E,qh=Symbol.for("react.element"),Qh=Symbol.for("react.fragment"),Yh=Object.prototype.hasOwnProperty,Gh=Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zh={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Yh.call(t,r)&&!Zh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qh,type:e,key:l,ref:o,props:i,_owner:Gh.current}}io.Fragment=Qh;io.jsx=dp;io.jsxs=dp;tp.exports=io;var v=tp.exports,xa={},pp={exports:{}},ot={},fp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,H){var y=A.length;A.push(H);e:for(;0<y;){var U=y-1>>>1,X=A[U];if(0<i(X,H))A[U]=H,A[y]=X,y=U;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var H=A[0],y=A.pop();if(y!==H){A[0]=y;e:for(var U=0,X=A.length,w=X>>>1;U<w;){var te=2*(U+1)-1,ke=A[te],ae=te+1,st=A[ae];if(0>i(ke,y))ae<X&&0>i(st,ke)?(A[U]=st,A[ae]=y,U=ae):(A[U]=ke,A[te]=y,U=te);else if(ae<X&&0>i(st,y))A[U]=st,A[ae]=y,U=ae;else break e}}return H}function i(A,H){var y=A.sortIndex-H.sortIndex;return y!==0?y:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],c=1,d=null,p=3,f=!1,k=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=A)r(u),H.sortIndex=H.expirationTime,t(s,H);else break;H=n(u)}}function _(A){if(x=!1,g(A),!k)if(n(s)!==null)k=!0,K(b);else{var H=n(u);H!==null&&ee(_,H.startTime-A)}}function b(A,H){k=!1,x&&(x=!1,h(z),z=-1),f=!0;var y=p;try{for(g(H),d=n(s);d!==null&&(!(d.expirationTime>H)||A&&!F());){var U=d.callback;if(typeof U=="function"){d.callback=null,p=d.priorityLevel;var X=U(d.expirationTime<=H);H=e.unstable_now(),typeof X=="function"?d.callback=X:d===n(s)&&r(s),g(H)}else r(s);d=n(s)}if(d!==null)var w=!0;else{var te=n(u);te!==null&&ee(_,te.startTime-H),w=!1}return w}finally{d=null,p=y,f=!1}}var S=!1,P=null,z=-1,O=5,L=-1;function F(){return!(e.unstable_now()-L<O)}function V(){if(P!==null){var A=e.unstable_now();L=A;var H=!0;try{H=P(!0,A)}finally{H?Y():(S=!1,P=null)}}else S=!1}var Y;if(typeof m=="function")Y=function(){m(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,j=re.port2;re.port1.onmessage=V,Y=function(){j.postMessage(null)}}else Y=function(){C(V,0)};function K(A){P=A,S||(S=!0,Y())}function ee(A,H){z=C(function(){A(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){k||f||(k=!0,K(b))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var y=p;p=H;try{return A()}finally{p=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var y=p;p=A;try{return H()}finally{p=y}},e.unstable_scheduleCallback=function(A,H,y){var U=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?U+y:U):y=U,A){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=y+X,A={id:c++,callback:H,priorityLevel:A,startTime:y,expirationTime:X,sortIndex:-1},y>U?(A.sortIndex=y,t(u,A),n(s)===null&&A===n(u)&&(x?(h(z),z=-1):x=!0,ee(_,y-U))):(A.sortIndex=X,t(s,A),k||f||(k=!0,K(b))),A},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(A){var H=p;return function(){var y=p;p=H;try{return A.apply(this,arguments)}finally{p=y}}}})(mp);fp.exports=mp;var Jh=fp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg=E,lt=Jh;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hp=new Set,si={};function Vn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(si[e]=t,e=0;e<t.length;e++)hp.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,tg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vu={},Hu={};function ng(e){return wa.call(Hu,e)?!0:wa.call(Vu,e)?!1:tg.test(e)?Hu[e]=!0:(Vu[e]=!0,!1)}function rg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ig(e,t,n,r){if(t===null||typeof t>"u"||rg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,Is);Ie[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,Is);Ie[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,Is);Ie[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rs(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ig(t,n,i,r)&&(n=null),r||i===null?ng(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),yp=Symbol.for("react.context"),js=Symbol.for("react.forward_ref"),Sa=Symbol.for("react.suspense"),_a=Symbol.for("react.suspense_list"),Os=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),vp=Symbol.for("react.offscreen"),$u=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=$u&&e[$u]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,To;function Hr(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||""}return`
`+To+e}var Lo=!1;function Io(e,t){if(!e||Lo)return"";Lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Lo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hr(e):""}function lg(e){switch(e.tag){case 5:return Hr(e.type);case 16:return Hr("Lazy");case 13:return Hr("Suspense");case 19:return Hr("SuspenseList");case 0:case 2:case 15:return e=Io(e.type,!1),e;case 11:return e=Io(e.type.render,!1),e;case 1:return e=Io(e.type,!0),e;default:return""}}function Ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Qn:return"Portal";case ka:return"Profiler";case As:return"StrictMode";case Sa:return"Suspense";case _a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yp:return(e.displayName||"Context")+".Consumer";case gp:return(e._context.displayName||"Context")+".Provider";case js:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Os:return t=e.displayName||null,t!==null?t:Ca(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return Ca(e(t))}catch{}}return null}function og(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(t);case 8:return t===As?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ag(e){var t=xp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vi(e){e._valueTracker||(e._valueTracker=ag(e))}function wp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ea(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kp(e,t){t=t.checked,t!=null&&Rs(e,"checked",t,!1)}function ba(e,t){kp(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pa(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ku(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pa(e,t,n){(t!=="number"||Pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if($r(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function Sp(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _p(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_p(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hi,Cp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sg=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){sg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qr[t]=Qr[e]})});function Ep(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}function bp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ep(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ug=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(ug[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function La(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ia=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,ur=null,cr=null;function Yu(e){if(e=Ri(e)){if(typeof Ra!="function")throw Error(I(280));var t=e.stateNode;t&&(t=uo(t),Ra(e.stateNode,e.type,t))}}function Pp(e){ur?cr?cr.push(e):cr=[e]:ur=e}function Np(){if(ur){var e=ur,t=cr;if(cr=ur=null,Yu(e),t)for(e=0;e<t.length;e++)Yu(t[e])}}function zp(e,t){return e(t)}function Tp(){}var Ro=!1;function Lp(e,t,n){if(Ro)return e(t,n);Ro=!0;try{return zp(e,t,n)}finally{Ro=!1,(ur!==null||cr!==null)&&(Tp(),Np())}}function ci(e,t){var n=e.stateNode;if(n===null)return null;var r=uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Aa=!1;if(Kt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Aa=!1}function cg(e,t,n,r,i,l,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Yr=!1,Nl=null,zl=!1,ja=null,dg={onError:function(e){Yr=!0,Nl=e}};function pg(e,t,n,r,i,l,o,a,s){Yr=!1,Nl=null,cg.apply(dg,arguments)}function fg(e,t,n,r,i,l,o,a,s){if(pg.apply(this,arguments),Yr){if(Yr){var u=Nl;Yr=!1,Nl=null}else throw Error(I(198));zl||(zl=!0,ja=u)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ip(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gu(e){if(Hn(e)!==e)throw Error(I(188))}function mg(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Gu(i),e;if(l===r)return Gu(i),t;l=l.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Rp(e){return e=mg(e),e!==null?Ap(e):null}function Ap(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ap(e);if(t!==null)return t;e=e.sibling}return null}var jp=lt.unstable_scheduleCallback,Zu=lt.unstable_cancelCallback,hg=lt.unstable_shouldYield,gg=lt.unstable_requestPaint,Se=lt.unstable_now,yg=lt.unstable_getCurrentPriorityLevel,Ds=lt.unstable_ImmediatePriority,Op=lt.unstable_UserBlockingPriority,Tl=lt.unstable_NormalPriority,vg=lt.unstable_LowPriority,Mp=lt.unstable_IdlePriority,lo=null,Ot=null;function xg(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(lo,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Sg,wg=Math.log,kg=Math.LN2;function Sg(e){return e>>>=0,e===0?32:31-(wg(e)/kg|0)|0}var $i=64,Xi=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ll(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xr(a):(l&=o,l!==0&&(r=Xr(l)))}else o=n&~i,o!==0?r=Xr(o):l!==0&&(r=Xr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function _g(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-bt(l),a=1<<o,s=i[o];s===-1?(!(a&n)||a&r)&&(i[o]=_g(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dp(){var e=$i;return $i<<=1,!($i&4194240)&&($i=64),e}function Ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function Eg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Fs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Fp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bp,Bs,Up,Wp,Vp,Ma=!1,Ki=[],sn=null,un=null,cn=null,di=new Map,pi=new Map,nn=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ju(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function jr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Ri(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Pg(e,t,n,r,i){switch(t){case"focusin":return sn=jr(sn,e,t,n,r,i),!0;case"dragenter":return un=jr(un,e,t,n,r,i),!0;case"mouseover":return cn=jr(cn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return di.set(l,jr(di.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,pi.set(l,jr(pi.get(l)||null,e,t,n,r,i)),!0}return!1}function Hp(e){var t=Rn(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ip(n),t!==null){e.blockedOn=t,Vp(e.priority,function(){Up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ia=r,n.target.dispatchEvent(r),Ia=null}else return t=Ri(n),t!==null&&Bs(t),e.blockedOn=n,!1;t.shift()}return!0}function ec(e,t,n){fl(e)&&n.delete(t)}function Ng(){Ma=!1,sn!==null&&fl(sn)&&(sn=null),un!==null&&fl(un)&&(un=null),cn!==null&&fl(cn)&&(cn=null),di.forEach(ec),pi.forEach(ec)}function Or(e,t){e.blockedOn===t&&(e.blockedOn=null,Ma||(Ma=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Ng)))}function fi(e){function t(i){return Or(i,e)}if(0<Ki.length){Or(Ki[0],e);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Or(sn,e),un!==null&&Or(un,e),cn!==null&&Or(cn,e),di.forEach(t),pi.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&nn.shift()}var dr=Gt.ReactCurrentBatchConfig,Il=!0;function zg(e,t,n,r){var i=oe,l=dr.transition;dr.transition=null;try{oe=1,Us(e,t,n,r)}finally{oe=i,dr.transition=l}}function Tg(e,t,n,r){var i=oe,l=dr.transition;dr.transition=null;try{oe=4,Us(e,t,n,r)}finally{oe=i,dr.transition=l}}function Us(e,t,n,r){if(Il){var i=Da(e,t,n,r);if(i===null)Ho(e,t,r,Rl,n),Ju(e,r);else if(Pg(i,e,t,n,r))r.stopPropagation();else if(Ju(e,r),t&4&&-1<bg.indexOf(e)){for(;i!==null;){var l=Ri(i);if(l!==null&&Bp(l),l=Da(e,t,n,r),l===null&&Ho(e,t,r,Rl,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ho(e,t,r,null,n)}}var Rl=null;function Da(e,t,n,r){if(Rl=null,e=Ms(r),e=Rn(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ip(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rl=e,null}function $p(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yg()){case Ds:return 1;case Op:return 4;case Tl:case vg:return 16;case Mp:return 536870912;default:return 16}default:return 16}}var ln=null,Ws=null,ml=null;function Xp(){if(ml)return ml;var e,t=Ws,n=t.length,r,i="value"in ln?ln.value:ln.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return ml=i.slice(e,1<r?1-r:void 0)}function hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function tc(){return!1}function at(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?qi:tc,this.isPropagationStopped=tc,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=at(br),Ii=ye({},br,{view:0,detail:0}),Lg=at(Ii),jo,Oo,Mr,oo=ye({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(jo=e.screenX-Mr.screenX,Oo=e.screenY-Mr.screenY):Oo=jo=0,Mr=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),nc=at(oo),Ig=ye({},oo,{dataTransfer:0}),Rg=at(Ig),Ag=ye({},Ii,{relatedTarget:0}),Mo=at(Ag),jg=ye({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=at(jg),Mg=ye({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dg=at(Mg),Fg=ye({},br,{data:0}),rc=at(Fg),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wg[e])?!!t[e]:!1}function Hs(){return Vg}var Hg=ye({},Ii,{key:function(e){if(e.key){var t=Bg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ug[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$g=at(Hg),Xg=ye({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=at(Xg),Kg=ye({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),qg=at(Kg),Qg=ye({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=at(Qg),Gg=ye({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=at(Gg),Jg=[9,13,27,32],$s=Kt&&"CompositionEvent"in window,Gr=null;Kt&&"documentMode"in document&&(Gr=document.documentMode);var ey=Kt&&"TextEvent"in window&&!Gr,Kp=Kt&&(!$s||Gr&&8<Gr&&11>=Gr),lc=" ",oc=!1;function qp(e,t){switch(e){case"keyup":return Jg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function ty(e,t){switch(e){case"compositionend":return Qp(t);case"keypress":return t.which!==32?null:(oc=!0,lc);case"textInput":return e=t.data,e===lc&&oc?null:e;default:return null}}function ny(e,t){if(Gn)return e==="compositionend"||!$s&&qp(e,t)?(e=Xp(),ml=Ws=ln=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kp&&t.locale!=="ko"?null:t.data;default:return null}}var ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ry[e.type]:t==="textarea"}function Yp(e,t,n,r){Pp(r),t=Al(t,"onChange"),0<t.length&&(n=new Vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,mi=null;function iy(e){sf(e,0)}function ao(e){var t=er(e);if(wp(t))return e}function ly(e,t){if(e==="change")return t}var Gp=!1;if(Kt){var Do;if(Kt){var Fo="oninput"in document;if(!Fo){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),Fo=typeof sc.oninput=="function"}Do=Fo}else Do=!1;Gp=Do&&(!document.documentMode||9<document.documentMode)}function uc(){Zr&&(Zr.detachEvent("onpropertychange",Zp),mi=Zr=null)}function Zp(e){if(e.propertyName==="value"&&ao(mi)){var t=[];Yp(t,mi,e,Ms(e)),Lp(iy,t)}}function oy(e,t,n){e==="focusin"?(uc(),Zr=t,mi=n,Zr.attachEvent("onpropertychange",Zp)):e==="focusout"&&uc()}function ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(mi)}function sy(e,t){if(e==="click")return ao(t)}function uy(e,t){if(e==="input"||e==="change")return ao(t)}function cy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:cy;function hi(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wa.call(t,i)||!Nt(e[i],t[i]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,t){var n=cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function Jp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ef(){for(var e=window,t=Pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pl(e.document)}return t}function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dy(e){var t=ef(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jp(n.ownerDocument.documentElement,n)){if(r!==null&&Xs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=dc(n,l);var o=dc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var py=Kt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Fa=null,Jr=null,Ba=!1;function pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ba||Zn==null||Zn!==Pl(r)||(r=Zn,"selectionStart"in r&&Xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&hi(Jr,r)||(Jr=r,r=Al(Fa,"onSelect"),0<r.length&&(t=new Vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},Bo={},tf={};Kt&&(tf=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function so(e){if(Bo[e])return Bo[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tf)return Bo[e]=t[n];return e}var nf=so("animationend"),rf=so("animationiteration"),lf=so("animationstart"),of=so("transitionend"),af=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){af.set(e,t),Vn(t,[e])}for(var Uo=0;Uo<fc.length;Uo++){var Wo=fc[Uo],fy=Wo.toLowerCase(),my=Wo[0].toUpperCase()+Wo.slice(1);kn(fy,"on"+my)}kn(nf,"onAnimationEnd");kn(rf,"onAnimationIteration");kn(lf,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(of,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function mc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fg(r,t,void 0,e),e.currentTarget=null}function sf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;mc(i,a,u),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;mc(i,a,u),l=s}}}if(zl)throw e=ja,zl=!1,ja=null,e}function pe(e,t){var n=t[$a];n===void 0&&(n=t[$a]=new Set);var r=e+"__bubble";n.has(r)||(uf(t,e,2,!1),n.add(r))}function Vo(e,t,n){var r=0;t&&(r|=4),uf(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[Yi]){e[Yi]=!0,hp.forEach(function(n){n!=="selectionchange"&&(hy.has(n)||Vo(n,!1,e),Vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,Vo("selectionchange",!1,t))}}function uf(e,t,n,r){switch($p(t)){case 1:var i=zg;break;case 4:i=Tg;break;default:i=Us}n=i.bind(null,t,n,e),i=void 0,!Aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ho(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rn(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Lp(function(){var u=l,c=Ms(n),d=[];e:{var p=af.get(e);if(p!==void 0){var f=Vs,k=e;switch(e){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":f=$g;break;case"focusin":k="focus",f=Mo;break;case"focusout":k="blur",f=Mo;break;case"beforeblur":case"afterblur":f=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=qg;break;case nf:case rf:case lf:f=Og;break;case of:f=Yg;break;case"scroll":f=Lg;break;case"wheel":f=Zg;break;case"copy":case"cut":case"paste":f=Dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ic}var x=(t&4)!==0,C=!x&&e==="scroll",h=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,g;m!==null;){g=m;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,h!==null&&(_=ci(m,h),_!=null&&x.push(yi(m,_,g)))),C)break;m=m.return}0<x.length&&(p=new f(p,k,null,n,c),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==Ia&&(k=n.relatedTarget||n.fromElement)&&(Rn(k)||k[qt]))break e;if((f||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,f?(k=n.relatedTarget||n.toElement,f=u,k=k?Rn(k):null,k!==null&&(C=Hn(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(f=null,k=u),f!==k)){if(x=nc,_="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=ic,_="onPointerLeave",h="onPointerEnter",m="pointer"),C=f==null?p:er(f),g=k==null?p:er(k),p=new x(_,m+"leave",f,n,c),p.target=C,p.relatedTarget=g,_=null,Rn(c)===u&&(x=new x(h,m+"enter",k,n,c),x.target=g,x.relatedTarget=C,_=x),C=_,f&&k)t:{for(x=f,h=k,m=0,g=x;g;g=Kn(g))m++;for(g=0,_=h;_;_=Kn(_))g++;for(;0<m-g;)x=Kn(x),m--;for(;0<g-m;)h=Kn(h),g--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break t;x=Kn(x),h=Kn(h)}x=null}else x=null;f!==null&&hc(d,p,f,x,!1),k!==null&&C!==null&&hc(d,C,k,x,!0)}}e:{if(p=u?er(u):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var b=ly;else if(ac(p))if(Gp)b=uy;else{b=ay;var S=oy}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=sy);if(b&&(b=b(e,u))){Yp(d,b,n,c);break e}S&&S(e,p,u),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Pa(p,"number",p.value)}switch(S=u?er(u):window,e){case"focusin":(ac(S)||S.contentEditable==="true")&&(Zn=S,Fa=u,Jr=null);break;case"focusout":Jr=Fa=Zn=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,pc(d,n,c);break;case"selectionchange":if(py)break;case"keydown":case"keyup":pc(d,n,c)}var P;if($s)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Gn?qp(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Kp&&n.locale!=="ko"&&(Gn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Gn&&(P=Xp()):(ln=c,Ws="value"in ln?ln.value:ln.textContent,Gn=!0)),S=Al(u,z),0<S.length&&(z=new rc(z,e,null,n,c),d.push({event:z,listeners:S}),P?z.data=P:(P=Qp(n),P!==null&&(z.data=P)))),(P=ey?ty(e,n):ny(e,n))&&(u=Al(u,"onBeforeInput"),0<u.length&&(c=new rc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}sf(d,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Al(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ci(e,n),l!=null&&r.unshift(yi(e,l,i)),l=ci(e,t),l!=null&&r.push(yi(e,l,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hc(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=ci(n,l),s!=null&&o.unshift(yi(n,s,a))):i||(s=ci(n,l),s!=null&&o.push(yi(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gy=/\r\n?/g,yy=/\u0000|\uFFFD/g;function gc(e){return(typeof e=="string"?e:""+e).replace(gy,`
`).replace(yy,"")}function Gi(e,t,n){if(t=gc(t),gc(e)!==t&&n)throw Error(I(425))}function jl(){}var Ua=null,Wa=null;function Va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ha=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,xy=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(wy)}:Ha;function wy(e){setTimeout(function(){throw e})}function $o(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Pr,vi="__reactProps$"+Pr,qt="__reactContainer$"+Pr,$a="__reactEvents$"+Pr,ky="__reactListeners$"+Pr,Sy="__reactHandles$"+Pr;function Rn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vc(e);e!==null;){if(n=e[Rt])return n;e=vc(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){return e=e[Rt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function uo(e){return e[vi]||null}var Xa=[],tr=-1;function Sn(e){return{current:e}}function fe(e){0>tr||(e.current=Xa[tr],Xa[tr]=null,tr--)}function ce(e,t){tr++,Xa[tr]=e.current,e.current=t}var wn={},Me=Sn(wn),Ke=Sn(!1),Dn=wn;function yr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Ol(){fe(Ke),fe(Me)}function xc(e,t,n){if(Me.current!==wn)throw Error(I(168));ce(Me,t),ce(Ke,n)}function cf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,og(e)||"Unknown",i));return ye({},n,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Dn=Me.current,ce(Me,e),ce(Ke,Ke.current),!0}function wc(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=cf(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,fe(Ke),fe(Me),ce(Me,e)):fe(Ke),ce(Ke,n)}var Vt=null,co=!1,Xo=!1;function df(e){Vt===null?Vt=[e]:Vt.push(e)}function _y(e){co=!0,df(e)}function _n(){if(!Xo&&Vt!==null){Xo=!0;var e=0,t=oe;try{var n=Vt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,co=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),jp(Ds,_n),i}finally{oe=t,Xo=!1}}return null}var nr=[],rr=0,Dl=null,Fl=0,ct=[],dt=0,Fn=null,Ht=1,$t="";function Tn(e,t){nr[rr++]=Fl,nr[rr++]=Dl,Dl=e,Fl=t}function pf(e,t,n){ct[dt++]=Ht,ct[dt++]=$t,ct[dt++]=Fn,Fn=e;var r=Ht;e=$t;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var l=32-bt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-bt(t)+i|n<<i|r,$t=l+e}else Ht=1<<l|n<<i|r,$t=e}function Ks(e){e.return!==null&&(Tn(e,1),pf(e,1,0))}function qs(e){for(;e===Dl;)Dl=nr[--rr],nr[rr]=null,Fl=nr[--rr],nr[rr]=null;for(;e===Fn;)Fn=ct[--dt],ct[dt]=null,$t=ct[--dt],ct[dt]=null,Ht=ct[--dt],ct[dt]=null}var it=null,nt=null,me=!1,Et=null;function ff(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,nt=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:Ht,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,nt=null,!0):!1;default:return!1}}function Ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qa(e){if(me){var t=nt;if(t){var n=t;if(!kc(e,t)){if(Ka(e))throw Error(I(418));t=dn(n.nextSibling);var r=it;t&&kc(e,t)?ff(r,n):(e.flags=e.flags&-4097|2,me=!1,it=e)}}else{if(Ka(e))throw Error(I(418));e.flags=e.flags&-4097|2,me=!1,it=e}}}function Sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Zi(e){if(e!==it)return!1;if(!me)return Sc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Va(e.type,e.memoizedProps)),t&&(t=nt)){if(Ka(e))throw mf(),Error(I(418));for(;t;)ff(e,t),t=dn(t.nextSibling)}if(Sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=it?dn(e.stateNode.nextSibling):null;return!0}function mf(){for(var e=nt;e;)e=dn(e.nextSibling)}function vr(){nt=it=null,me=!1}function Qs(e){Et===null?Et=[e]:Et.push(e)}var Cy=Gt.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ji(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _c(e){var t=e._init;return t(e._payload)}function hf(e){function t(h,m){if(e){var g=h.deletions;g===null?(h.deletions=[m],h.flags|=16):g.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=hn(h,m),h.index=0,h.sibling=null,h}function l(h,m,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<m?(h.flags|=2,m):g):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,m,g,_){return m===null||m.tag!==6?(m=Jo(g,h.mode,_),m.return=h,m):(m=i(m,g),m.return=h,m)}function s(h,m,g,_){var b=g.type;return b===Yn?c(h,m,g.props.children,_,g.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===en&&_c(b)===m.type)?(_=i(m,g.props),_.ref=Dr(h,m,g),_.return=h,_):(_=Sl(g.type,g.key,g.props,null,h.mode,_),_.ref=Dr(h,m,g),_.return=h,_)}function u(h,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=ea(g,h.mode,_),m.return=h,m):(m=i(m,g.children||[]),m.return=h,m)}function c(h,m,g,_,b){return m===null||m.tag!==7?(m=Mn(g,h.mode,_,b),m.return=h,m):(m=i(m,g),m.return=h,m)}function d(h,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Jo(""+m,h.mode,g),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wi:return g=Sl(m.type,m.key,m.props,null,h.mode,g),g.ref=Dr(h,null,m),g.return=h,g;case Qn:return m=ea(m,h.mode,g),m.return=h,m;case en:var _=m._init;return d(h,_(m._payload),g)}if($r(m)||Rr(m))return m=Mn(m,h.mode,g,null),m.return=h,m;Ji(h,m)}return null}function p(h,m,g,_){var b=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wi:return g.key===b?s(h,m,g,_):null;case Qn:return g.key===b?u(h,m,g,_):null;case en:return b=g._init,p(h,m,b(g._payload),_)}if($r(g)||Rr(g))return b!==null?null:c(h,m,g,_,null);Ji(h,g)}return null}function f(h,m,g,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(g)||null,a(m,h,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wi:return h=h.get(_.key===null?g:_.key)||null,s(m,h,_,b);case Qn:return h=h.get(_.key===null?g:_.key)||null,u(m,h,_,b);case en:var S=_._init;return f(h,m,g,S(_._payload),b)}if($r(_)||Rr(_))return h=h.get(g)||null,c(m,h,_,b,null);Ji(m,_)}return null}function k(h,m,g,_){for(var b=null,S=null,P=m,z=m=0,O=null;P!==null&&z<g.length;z++){P.index>z?(O=P,P=null):O=P.sibling;var L=p(h,P,g[z],_);if(L===null){P===null&&(P=O);break}e&&P&&L.alternate===null&&t(h,P),m=l(L,m,z),S===null?b=L:S.sibling=L,S=L,P=O}if(z===g.length)return n(h,P),me&&Tn(h,z),b;if(P===null){for(;z<g.length;z++)P=d(h,g[z],_),P!==null&&(m=l(P,m,z),S===null?b=P:S.sibling=P,S=P);return me&&Tn(h,z),b}for(P=r(h,P);z<g.length;z++)O=f(P,h,z,g[z],_),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?z:O.key),m=l(O,m,z),S===null?b=O:S.sibling=O,S=O);return e&&P.forEach(function(F){return t(h,F)}),me&&Tn(h,z),b}function x(h,m,g,_){var b=Rr(g);if(typeof b!="function")throw Error(I(150));if(g=b.call(g),g==null)throw Error(I(151));for(var S=b=null,P=m,z=m=0,O=null,L=g.next();P!==null&&!L.done;z++,L=g.next()){P.index>z?(O=P,P=null):O=P.sibling;var F=p(h,P,L.value,_);if(F===null){P===null&&(P=O);break}e&&P&&F.alternate===null&&t(h,P),m=l(F,m,z),S===null?b=F:S.sibling=F,S=F,P=O}if(L.done)return n(h,P),me&&Tn(h,z),b;if(P===null){for(;!L.done;z++,L=g.next())L=d(h,L.value,_),L!==null&&(m=l(L,m,z),S===null?b=L:S.sibling=L,S=L);return me&&Tn(h,z),b}for(P=r(h,P);!L.done;z++,L=g.next())L=f(P,h,z,L.value,_),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?z:L.key),m=l(L,m,z),S===null?b=L:S.sibling=L,S=L);return e&&P.forEach(function(V){return t(h,V)}),me&&Tn(h,z),b}function C(h,m,g,_){if(typeof g=="object"&&g!==null&&g.type===Yn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wi:e:{for(var b=g.key,S=m;S!==null;){if(S.key===b){if(b=g.type,b===Yn){if(S.tag===7){n(h,S.sibling),m=i(S,g.props.children),m.return=h,h=m;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===en&&_c(b)===S.type){n(h,S.sibling),m=i(S,g.props),m.ref=Dr(h,S,g),m.return=h,h=m;break e}n(h,S);break}else t(h,S);S=S.sibling}g.type===Yn?(m=Mn(g.props.children,h.mode,_,g.key),m.return=h,h=m):(_=Sl(g.type,g.key,g.props,null,h.mode,_),_.ref=Dr(h,m,g),_.return=h,h=_)}return o(h);case Qn:e:{for(S=g.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(h,m.sibling),m=i(m,g.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=ea(g,h.mode,_),m.return=h,h=m}return o(h);case en:return S=g._init,C(h,m,S(g._payload),_)}if($r(g))return k(h,m,g,_);if(Rr(g))return x(h,m,g,_);Ji(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,g),m.return=h,h=m):(n(h,m),m=Jo(g,h.mode,_),m.return=h,h=m),o(h)):n(h,m)}return C}var xr=hf(!0),gf=hf(!1),Bl=Sn(null),Ul=null,ir=null,Ys=null;function Gs(){Ys=ir=Ul=null}function Zs(e){var t=Bl.current;fe(Bl),e._currentValue=t}function Qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){Ul=e,Ys=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Ys!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Ul===null)throw Error(I(308));ir=e,Ul.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var An=null;function Js(e){An===null?An=[e]:An.push(e)}function yf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Js(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Js(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fs(e,n)}}function Cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var i=e.updateQueue;tn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=s))}if(l!==null){var d=i.baseState;o=0,c=u=s=null,a=l;do{var p=a.lane,f=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,x=a;switch(p=t,f=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){d=k.call(f,d,p);break e}d=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,p=typeof k=="function"?k.call(f,d,p):k,p==null)break e;d=ye({},d,p);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else f={eventTime:f,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,s=d):c=c.next=f,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Un|=o,e.lanes=o,e.memoizedState=d}}function Ec(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Ai={},Mt=Sn(Ai),xi=Sn(Ai),wi=Sn(Ai);function jn(e){if(e===Ai)throw Error(I(174));return e}function tu(e,t){switch(ce(wi,t),ce(xi,e),ce(Mt,Ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=za(t,e)}fe(Mt),ce(Mt,t)}function wr(){fe(Mt),fe(xi),fe(wi)}function xf(e){jn(wi.current);var t=jn(Mt.current),n=za(t,e.type);t!==n&&(ce(xi,e),ce(Mt,n))}function nu(e){xi.current===e&&(fe(Mt),fe(xi))}var he=Sn(0);function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=[];function ru(){for(var e=0;e<Ko.length;e++)Ko[e]._workInProgressVersionPrimary=null;Ko.length=0}var yl=Gt.ReactCurrentDispatcher,qo=Gt.ReactCurrentBatchConfig,Bn=0,ge=null,be=null,Ne=null,Hl=!1,ei=!1,ki=0,Ey=0;function Re(){throw Error(I(321))}function iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function lu(e,t,n,r,i,l){if(Bn=l,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yl.current=e===null||e.memoizedState===null?zy:Ty,e=n(r,i),ei){l=0;do{if(ei=!1,ki=0,25<=l)throw Error(I(301));l+=1,Ne=be=null,t.updateQueue=null,yl.current=Ly,e=n(r,i)}while(ei)}if(yl.current=$l,t=be!==null&&be.next!==null,Bn=0,Ne=be=ge=null,Hl=!1,t)throw Error(I(300));return e}function ou(){var e=ki!==0;return ki=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ge.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function gt(){if(be===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ne===null?ge.memoizedState:Ne.next;if(t!==null)Ne=t,be=e;else{if(e===null)throw Error(I(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ne===null?ge.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Si(e,t){return typeof t=="function"?t(e):t}function Qo(e){var t=gt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,u=l;do{var c=u.lane;if((Bn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,o=r):s=s.next=d,ge.lanes|=c,Un|=c}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=a,Nt(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ge.lanes|=l,Un|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yo(e){var t=gt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Nt(l,t.memoizedState)||(Xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function wf(){}function kf(e,t){var n=ge,r=gt(),i=t(),l=!Nt(r.memoizedState,i);if(l&&(r.memoizedState=i,Xe=!0),r=r.queue,au(Cf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,_i(9,_f.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(I(349));Bn&30||Sf(n,t,i)}return i}function Sf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _f(e,t,n,r){t.value=n,t.getSnapshot=r,Ef(t)&&bf(e)}function Cf(e,t,n){return n(function(){Ef(t)&&bf(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function bf(e){var t=Qt(e,1);t!==null&&Pt(t,e,1,-1)}function bc(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t.queue=e,e=e.dispatch=Ny.bind(null,ge,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pf(){return gt().memoizedState}function vl(e,t,n,r){var i=Lt();ge.flags|=e,i.memoizedState=_i(1|t,n,void 0,r===void 0?null:r)}function po(e,t,n,r){var i=gt();r=r===void 0?null:r;var l=void 0;if(be!==null){var o=be.memoizedState;if(l=o.destroy,r!==null&&iu(r,o.deps)){i.memoizedState=_i(t,n,l,r);return}}ge.flags|=e,i.memoizedState=_i(1|t,n,l,r)}function Pc(e,t){return vl(8390656,8,e,t)}function au(e,t){return po(2048,8,e,t)}function Nf(e,t){return po(4,2,e,t)}function zf(e,t){return po(4,4,e,t)}function Tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lf(e,t,n){return n=n!=null?n.concat([e]):null,po(4,4,Tf.bind(null,t,e),n)}function su(){}function If(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Af(e,t,n){return Bn&21?(Nt(n,t)||(n=Dp(),ge.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function by(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=qo.transition;qo.transition={};try{e(!1),t()}finally{oe=n,qo.transition=r}}function jf(){return gt().memoizedState}function Py(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Of(e))Mf(t,n);else if(n=yf(e,t,n,r),n!==null){var i=Ue();Pt(n,e,r,i),Df(n,t,r)}}function Ny(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Of(e))Mf(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o)){var s=t.interleaved;s===null?(i.next=i,Js(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=yf(e,t,i,r),n!==null&&(i=Ue(),Pt(n,e,r,i),Df(n,t,r))}}function Of(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Mf(e,t){ei=Hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Df(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fs(e,n)}}var $l={readContext:ht,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},zy={readContext:ht,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Pc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vl(4194308,4,Tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vl(4194308,4,e,t)},useInsertionEffect:function(e,t){return vl(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Py.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:su,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=by.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=Lt();if(me){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ze===null)throw Error(I(349));Bn&30||Sf(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Pc(Cf.bind(null,r,l,e),[e]),r.flags|=2048,_i(9,_f.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Lt(),t=ze.identifierPrefix;if(me){var n=$t,r=Ht;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ki++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ey++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ty={readContext:ht,useCallback:If,useContext:ht,useEffect:au,useImperativeHandle:Lf,useInsertionEffect:Nf,useLayoutEffect:zf,useMemo:Rf,useReducer:Qo,useRef:Pf,useState:function(){return Qo(Si)},useDebugValue:su,useDeferredValue:function(e){var t=gt();return Af(t,be.memoizedState,e)},useTransition:function(){var e=Qo(Si)[0],t=gt().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:kf,useId:jf,unstable_isNewReconciler:!1},Ly={readContext:ht,useCallback:If,useContext:ht,useEffect:au,useImperativeHandle:Lf,useInsertionEffect:Nf,useLayoutEffect:zf,useMemo:Rf,useReducer:Yo,useRef:Pf,useState:function(){return Yo(Si)},useDebugValue:su,useDeferredValue:function(e){var t=gt();return be===null?t.memoizedState=e:Af(t,be.memoizedState,e)},useTransition:function(){var e=Yo(Si)[0],t=gt().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:kf,useId:jf,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ya(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=mn(e),l=Xt(r,i);l.payload=t,n!=null&&(l.callback=n),t=pn(e,l,i),t!==null&&(Pt(t,e,i,r),gl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=mn(e),l=Xt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=pn(e,l,i),t!==null&&(Pt(t,e,i,r),gl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=mn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(Pt(t,e,r,n),gl(t,e,r))}};function Nc(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,l):!0}function Ff(e,t,n){var r=!1,i=wn,l=t.contextType;return typeof l=="object"&&l!==null?l=ht(l):(i=qe(t)?Dn:Me.current,r=t.contextTypes,l=(r=r!=null)?yr(e,i):wn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function Ga(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eu(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ht(l):(l=qe(t)?Dn:Me.current,i.context=yr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ya(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fo.enqueueReplaceState(i,i.state,null),Wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t){try{var n="",r=t;do n+=lg(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function Bf(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Kl||(Kl=!0,ss=r),Za(e,t)},n}function Uf(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Za(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Za(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Tc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Iy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xy.bind(null,e,t,n),t.then(e,e))}function Lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ic(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var Ry=Gt.ReactCurrentOwner,Xe=!1;function Be(e,t,n,r){t.child=e===null?gf(t,null,n,r):xr(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var l=t.ref;return pr(t,i),r=lu(e,t,n,r,l,i),n=ou(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(me&&n&&Ks(t),t.flags|=1,Be(e,t,r,i),t.child)}function Ac(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!gu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Wf(e,t,l,r,i)):(e=Sl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(o,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=hn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Wf(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(hi(l,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return Ja(e,t,n,r,i)}function Vf(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(or,et),et|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(or,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ce(or,et),et|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ce(or,et),et|=r;return Be(e,t,i,n),t.child}function Hf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ja(e,t,n,r,i){var l=qe(n)?Dn:Me.current;return l=yr(t,l),pr(t,i),n=lu(e,t,n,r,l,i),r=ou(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(me&&r&&Ks(t),t.flags|=1,Be(e,t,n,i),t.child)}function jc(e,t,n,r,i){if(qe(n)){var l=!0;Ml(t)}else l=!1;if(pr(t,i),t.stateNode===null)xl(e,t),Ff(t,n,r),Ga(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ht(u):(u=qe(n)?Dn:Me.current,u=yr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&zc(t,o,r,u),tn=!1;var p=t.memoizedState;o.state=p,Wl(t,r,o,i),s=t.memoizedState,a!==r||p!==s||Ke.current||tn?(typeof c=="function"&&(Ya(t,n,c,r),s=t.memoizedState),(a=tn||Nc(t,n,a,r,p,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:_t(t.type,a),o.props=u,d=t.pendingProps,p=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ht(s):(s=qe(n)?Dn:Me.current,s=yr(t,s));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==s)&&zc(t,o,r,s),tn=!1,p=t.memoizedState,o.state=p,Wl(t,r,o,i);var k=t.memoizedState;a!==d||p!==k||Ke.current||tn?(typeof f=="function"&&(Ya(t,n,f,r),k=t.memoizedState),(u=tn||Nc(t,n,u,r,p,k,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return es(e,t,n,r,l,i)}function es(e,t,n,r,i,l){Hf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&wc(t,n,!1),Yt(e,t,l);r=t.stateNode,Ry.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=xr(t,e.child,null,l),t.child=xr(t,null,a,l)):Be(e,t,a,l),t.memoizedState=r.state,i&&wc(t,n,!0),t.child}function $f(e){var t=e.stateNode;t.pendingContext?xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xc(e,t.context,!1),tu(e,t.containerInfo)}function Oc(e,t,n,r,i){return vr(),Qs(i),t.flags|=256,Be(e,t,n,r),t.child}var ts={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xf(e,t,n){var r=t.pendingProps,i=he.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(he,i&1),e===null)return qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=go(o,r,0,null),e=Mn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ns(n),t.memoizedState=ts,e):uu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ay(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=hn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=hn(a,l):(l=Mn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ns(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ts,r}return l=e.child,e=l.sibling,r=hn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uu(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function el(e,t,n,r){return r!==null&&Qs(r),xr(t,e.child,null,n),e=uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ay(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Go(Error(I(422))),el(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=go({mode:"visible",children:r.children},i,0,null),l=Mn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&xr(t,e.child,null,o),t.child.memoizedState=ns(o),t.memoizedState=ts,l);if(!(t.mode&1))return el(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(I(419)),r=Go(l,r,void 0),el(e,t,o,r)}if(a=(o&e.childLanes)!==0,Xe||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Qt(e,i),Pt(r,e,i,-1))}return hu(),r=Go(Error(I(421))),el(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ky.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,nt=dn(i.nextSibling),it=t,me=!0,Et=null,e!==null&&(ct[dt++]=Ht,ct[dt++]=$t,ct[dt++]=Fn,Ht=e.id,$t=e.overflow,Fn=t),t=uu(t,r.children),t.flags|=4096,t)}function Mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qa(e.return,t,n)}function Zo(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Kf(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Be(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mc(e,n,t);else if(e.tag===19)Mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zo(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zo(t,!0,n,null,l);break;case"together":Zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jy(e,t,n){switch(t.tag){case 3:$f(t),vr();break;case 5:xf(t);break;case 1:qe(t.type)&&Ml(t);break;case 4:tu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(Bl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?Xf(e,t,n):(ce(he,he.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ce(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Vf(e,t,n)}return Yt(e,t,n)}var qf,rs,Qf,Yf;qf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rs=function(){};Qf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jn(Mt.current);var l=null;switch(n){case"input":i=Ea(e,i),r=Ea(e,r),l=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),l=[];break;case"textarea":i=Na(e,i),r=Na(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jl)}Ta(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(si.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(si.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&pe("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Yf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Oy(e,t,n){var r=t.pendingProps;switch(qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return qe(t.type)&&Ol(),Ae(t),null;case 3:return r=t.stateNode,wr(),fe(Ke),fe(Me),ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(ds(Et),Et=null))),rs(e,t),Ae(t),null;case 5:nu(t);var i=jn(wi.current);if(n=t.type,e!==null&&t.stateNode!=null)Qf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ae(t),null}if(e=jn(Mt.current),Zi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Rt]=t,r[vi]=l,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)pe(Kr[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Xu(r,l),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},pe("invalid",r);break;case"textarea":qu(r,l),pe("invalid",r)}Ta(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Gi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Gi(r.textContent,a,e),i=["children",""+a]):si.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Vi(r),Ku(r,l,!0);break;case"textarea":Vi(r),Qu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=jl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_p(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Rt]=t,e[vi]=r,qf(e,t,!1,!1),t.stateNode=e;e:{switch(o=La(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)pe(Kr[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":Xu(e,r),i=Ea(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),pe("invalid",e);break;case"textarea":qu(e,r),i=Na(e,r),pe("invalid",e);break;default:i=r}Ta(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?bp(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Cp(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ui(e,s):typeof s=="number"&&ui(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(si.hasOwnProperty(l)?s!=null&&l==="onScroll"&&pe("scroll",e):s!=null&&Rs(e,l,s,o))}switch(n){case"input":Vi(e),Ku(e,r,!1);break;case"textarea":Vi(e),Qu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sr(e,!!r.multiple,l,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Yf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=jn(wi.current),jn(Mt.current),Zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(l=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:Gi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Ae(t),null;case 13:if(fe(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&nt!==null&&t.mode&1&&!(t.flags&128))mf(),vr(),t.flags|=98560,l=!1;else if(l=Zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(I(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(I(317));l[Rt]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),l=!1}else Et!==null&&(ds(Et),Et=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Pe===0&&(Pe=3):hu())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return wr(),rs(e,t),e===null&&gi(t.stateNode.containerInfo),Ae(t),null;case 10:return Zs(t.type._context),Ae(t),null;case 17:return qe(t.type)&&Ol(),Ae(t),null;case 19:if(fe(he),l=t.memoizedState,l===null)return Ae(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Fr(l,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vl(e),o!==null){for(t.flags|=128,Fr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(he,he.current&1|2),t.child}e=e.sibling}l.tail!==null&&Se()>Sr&&(t.flags|=128,r=!0,Fr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Vl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!me)return Ae(t),null}else 2*Se()-l.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Fr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Se(),t.sibling=null,n=he.current,ce(he,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function My(e,t){switch(qs(t),t.tag){case 1:return qe(t.type)&&Ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),fe(Ke),fe(Me),ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nu(t),null;case 13:if(fe(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(he),null;case 4:return wr(),null;case 10:return Zs(t.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var tl=!1,Oe=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,W=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function is(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Dc=!1;function Fy(e,t){if(Ua=Il,e=ef(),Xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==l||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)p=d,d=f;for(;;){if(d===e)break t;if(p===n&&++u===i&&(a=o),p===l&&++c===r&&(s=o),(f=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=f}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wa={focusedElem:e,selectionRange:n},Il=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,C=k.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:_t(t.type,x),C);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){xe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return k=Dc,Dc=!1,k}function ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&is(t,n,l)}i=i.next}while(i!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gf(e){var t=e.alternate;t!==null&&(e.alternate=null,Gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[vi],delete t[$a],delete t[ky],delete t[Sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zf(e){return e.tag===5||e.tag===3||e.tag===4}function Fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jl));else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}var Te=null,Ct=!1;function Zt(e,t,n){for(n=n.child;n!==null;)Jf(e,t,n),n=n.sibling}function Jf(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(lo,n)}catch{}switch(n.tag){case 5:Oe||lr(n,t);case 6:var r=Te,i=Ct;Te=null,Zt(e,t,n),Te=r,Ct=i,Te!==null&&(Ct?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(Ct?(e=Te,n=n.stateNode,e.nodeType===8?$o(e.parentNode,n):e.nodeType===1&&$o(e,n),fi(e)):$o(Te,n.stateNode));break;case 4:r=Te,i=Ct,Te=n.stateNode.containerInfo,Ct=!0,Zt(e,t,n),Te=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&is(n,t,o),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Oe&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Zt(e,t,n),Oe=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dy),t.forEach(function(r){var i=qy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,Ct=!1;break e;case 3:Te=a.stateNode.containerInfo,Ct=!0;break e;case 4:Te=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(Te===null)throw Error(I(160));Jf(l,o,i),Te=null,Ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)em(t,e),t=t.sibling}function em(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),Tt(e),r&4){try{ti(3,e,e.return),mo(3,e)}catch(x){xe(e,e.return,x)}try{ti(5,e,e.return)}catch(x){xe(e,e.return,x)}}break;case 1:vt(t,e),Tt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(vt(t,e),Tt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{ui(i,"")}catch(x){xe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&kp(i,l),La(a,o);var u=La(a,l);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?bp(i,d):c==="dangerouslySetInnerHTML"?Cp(i,d):c==="children"?ui(i,d):Rs(i,c,d,u)}switch(a){case"input":ba(i,l);break;case"textarea":Sp(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var f=l.value;f!=null?sr(i,!!l.multiple,f,!1):p!==!!l.multiple&&(l.defaultValue!=null?sr(i,!!l.multiple,l.defaultValue,!0):sr(i,!!l.multiple,l.multiple?[]:"",!1))}i[vi]=l}catch(x){xe(e,e.return,x)}}break;case 6:if(vt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){xe(e,e.return,x)}}break;case 3:if(vt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(x){xe(e,e.return,x)}break;case 4:vt(t,e),Tt(e);break;case 13:vt(t,e),Tt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(pu=Se())),r&4&&Bc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||c,vt(t,e),Oe=u):vt(t,e),Tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(W=e,c=e.child;c!==null;){for(d=W=c;W!==null;){switch(p=W,f=p.child,p.tag){case 0:case 11:case 14:case 15:ti(4,p,p.return);break;case 1:lr(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:lr(p,p.return);break;case 22:if(p.memoizedState!==null){Wc(d);continue}}f!==null?(f.return=p,W=f):Wc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ep("display",o))}catch(x){xe(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){xe(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vt(t,e),Tt(e),r&4&&Bc(e);break;case 21:break;default:vt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zf(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ui(i,""),r.flags&=-33);var l=Fc(e);as(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fc(e);os(e,a,o);break;default:throw Error(I(161))}}catch(s){xe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function By(e,t,n){W=e,tm(e)}function tm(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tl;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Oe;a=tl;var u=Oe;if(tl=o,(Oe=s)&&!u)for(W=i;W!==null;)o=W,s=o.child,o.tag===22&&o.memoizedState!==null?Vc(i):s!==null?(s.return=o,W=s):Vc(i);for(;l!==null;)W=l,tm(l),l=l.sibling;W=i,tl=a,Oe=u}Uc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,W=l):Uc(e)}}function Uc(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ec(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ec(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&fi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Oe||t.flags&512&&ls(t)}catch(p){xe(t,t.return,p)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Wc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Vc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(s){xe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){xe(t,i,s)}}var l=t.return;try{ls(t)}catch(s){xe(t,l,s)}break;case 5:var o=t.return;try{ls(t)}catch(s){xe(t,o,s)}}}catch(s){xe(t,t.return,s)}if(t===e){W=null;break}var a=t.sibling;if(a!==null){a.return=t.return,W=a;break}W=t.return}}var Uy=Math.ceil,Xl=Gt.ReactCurrentDispatcher,cu=Gt.ReactCurrentOwner,mt=Gt.ReactCurrentBatchConfig,ne=0,ze=null,Ce=null,Le=0,et=0,or=Sn(0),Pe=0,Ci=null,Un=0,ho=0,du=0,ni=null,$e=null,pu=0,Sr=1/0,Wt=null,Kl=!1,ss=null,fn=null,nl=!1,on=null,ql=0,ri=0,us=null,wl=-1,kl=0;function Ue(){return ne&6?Se():wl!==-1?wl:wl=Se()}function mn(e){return e.mode&1?ne&2&&Le!==0?Le&-Le:Cy.transition!==null?(kl===0&&(kl=Dp()),kl):(e=oe,e!==0||(e=window.event,e=e===void 0?16:$p(e.type)),e):1}function Pt(e,t,n,r){if(50<ri)throw ri=0,us=null,Error(I(185));Li(e,n,r),(!(ne&2)||e!==ze)&&(e===ze&&(!(ne&2)&&(ho|=n),Pe===4&&rn(e,Le)),Qe(e,r),n===1&&ne===0&&!(t.mode&1)&&(Sr=Se()+500,co&&_n()))}function Qe(e,t){var n=e.callbackNode;Cg(e,t);var r=Ll(e,e===ze?Le:0);if(r===0)n!==null&&Zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zu(n),t===1)e.tag===0?_y(Hc.bind(null,e)):df(Hc.bind(null,e)),xy(function(){!(ne&6)&&_n()}),n=null;else{switch(Fp(r)){case 1:n=Ds;break;case 4:n=Op;break;case 16:n=Tl;break;case 536870912:n=Mp;break;default:n=Tl}n=um(n,nm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nm(e,t){if(wl=-1,kl=0,ne&6)throw Error(I(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=Ll(e,e===ze?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ql(e,r);else{t=r;var i=ne;ne|=2;var l=im();(ze!==e||Le!==t)&&(Wt=null,Sr=Se()+500,On(e,t));do try{Hy();break}catch(a){rm(e,a)}while(!0);Gs(),Xl.current=l,ne=i,Ce!==null?t=0:(ze=null,Le=0,t=Pe)}if(t!==0){if(t===2&&(i=Oa(e),i!==0&&(r=i,t=cs(e,i))),t===1)throw n=Ci,On(e,0),rn(e,r),Qe(e,Se()),n;if(t===6)rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wy(i)&&(t=Ql(e,r),t===2&&(l=Oa(e),l!==0&&(r=l,t=cs(e,l))),t===1))throw n=Ci,On(e,0),rn(e,r),Qe(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Ln(e,$e,Wt);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=pu+500-Se(),10<t)){if(Ll(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ha(Ln.bind(null,e,$e,Wt),t);break}Ln(e,$e,Wt);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-bt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uy(r/1960))-r,10<r){e.timeoutHandle=Ha(Ln.bind(null,e,$e,Wt),r);break}Ln(e,$e,Wt);break;case 5:Ln(e,$e,Wt);break;default:throw Error(I(329))}}}return Qe(e,Se()),e.callbackNode===n?nm.bind(null,e):null}function cs(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Ql(e,t),e!==2&&(t=$e,$e=n,t!==null&&ds(t)),e}function ds(e){$e===null?$e=e:$e.push.apply($e,e)}function Wy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Nt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~du,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Hc(e){if(ne&6)throw Error(I(327));fr();var t=Ll(e,0);if(!(t&1))return Qe(e,Se()),null;var n=Ql(e,t);if(e.tag!==0&&n===2){var r=Oa(e);r!==0&&(t=r,n=cs(e,r))}if(n===1)throw n=Ci,On(e,0),rn(e,t),Qe(e,Se()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,$e,Wt),Qe(e,Se()),null}function fu(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Sr=Se()+500,co&&_n())}}function Wn(e){on!==null&&on.tag===0&&!(ne&6)&&fr();var t=ne;ne|=1;var n=mt.transition,r=oe;try{if(mt.transition=null,oe=1,e)return e()}finally{oe=r,mt.transition=n,ne=t,!(ne&6)&&_n()}}function mu(){et=or.current,fe(or)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vy(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(qs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:wr(),fe(Ke),fe(Me),ru();break;case 5:nu(r);break;case 4:wr();break;case 13:fe(he);break;case 19:fe(he);break;case 10:Zs(r.type._context);break;case 22:case 23:mu()}n=n.return}if(ze=e,Ce=e=hn(e.current,null),Le=et=t,Pe=0,Ci=null,du=ho=Un=0,$e=ni=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}An=null}return e}function rm(e,t){do{var n=Ce;try{if(Gs(),yl.current=$l,Hl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hl=!1}if(Bn=0,Ne=be=ge=null,ei=!1,ki=0,cu.current=null,n===null||n.return===null){Pe=1,Ci=t,Ce=null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=Le,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Lc(o);if(f!==null){f.flags&=-257,Ic(f,o,a,l,t),f.mode&1&&Tc(l,u,t),t=f,s=u;var k=t.updateQueue;if(k===null){var x=new Set;x.add(s),t.updateQueue=x}else k.add(s);break e}else{if(!(t&1)){Tc(l,u,t),hu();break e}s=Error(I(426))}}else if(me&&a.mode&1){var C=Lc(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ic(C,o,a,l,t),Qs(kr(s,a));break e}}l=s=kr(s,a),Pe!==4&&(Pe=2),ni===null?ni=[l]:ni.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Bf(l,s,t);Cc(l,h);break e;case 1:a=s;var m=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fn===null||!fn.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var _=Uf(l,a,t);Cc(l,_);break e}}l=l.return}while(l!==null)}om(n)}catch(b){t=b,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function im(){var e=Xl.current;return Xl.current=$l,e===null?$l:e}function hu(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),ze===null||!(Un&268435455)&&!(ho&268435455)||rn(ze,Le)}function Ql(e,t){var n=ne;ne|=2;var r=im();(ze!==e||Le!==t)&&(Wt=null,On(e,t));do try{Vy();break}catch(i){rm(e,i)}while(!0);if(Gs(),ne=n,Xl.current=r,Ce!==null)throw Error(I(261));return ze=null,Le=0,Pe}function Vy(){for(;Ce!==null;)lm(Ce)}function Hy(){for(;Ce!==null&&!hg();)lm(Ce)}function lm(e){var t=sm(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?om(e):Ce=t,cu.current=null}function om(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=My(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ce=null;return}}else if(n=Oy(n,t,et),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Pe===0&&(Pe=5)}function Ln(e,t,n){var r=oe,i=mt.transition;try{mt.transition=null,oe=1,$y(e,t,n,r)}finally{mt.transition=i,oe=r}return null}function $y(e,t,n,r){do fr();while(on!==null);if(ne&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Eg(e,l),e===ze&&(Ce=ze=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,um(Tl,function(){return fr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=mt.transition,mt.transition=null;var o=oe;oe=1;var a=ne;ne|=4,cu.current=null,Fy(e,n),em(n,e),dy(Wa),Il=!!Ua,Wa=Ua=null,e.current=n,By(n),gg(),ne=a,oe=o,mt.transition=l}else e.current=n;if(nl&&(nl=!1,on=e,ql=i),l=e.pendingLanes,l===0&&(fn=null),xg(n.stateNode),Qe(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Kl)throw Kl=!1,e=ss,ss=null,e;return ql&1&&e.tag!==0&&fr(),l=e.pendingLanes,l&1?e===us?ri++:(ri=0,us=e):ri=0,_n(),null}function fr(){if(on!==null){var e=Fp(ql),t=mt.transition,n=oe;try{if(mt.transition=null,oe=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,ql=0,ne&6)throw Error(I(331));var i=ne;for(ne|=4,W=e.current;W!==null;){var l=W,o=l.child;if(W.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(W=u;W!==null;){var c=W;switch(c.tag){case 0:case 11:case 15:ti(8,c,l)}var d=c.child;if(d!==null)d.return=c,W=d;else for(;W!==null;){c=W;var p=c.sibling,f=c.return;if(Gf(c),c===u){W=null;break}if(p!==null){p.return=f,W=p;break}W=f}}}var k=l.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}W=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,W=o;else e:for(;W!==null;){if(l=W,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ti(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,W=h;break e}W=l.return}}var m=e.current;for(W=m;W!==null;){o=W;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,W=g;else e:for(o=m;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mo(9,a)}}catch(b){xe(a,a.return,b)}if(a===o){W=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,W=_;break e}W=a.return}}if(ne=i,_n(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(lo,e)}catch{}r=!0}return r}finally{oe=n,mt.transition=t}}return!1}function $c(e,t,n){t=kr(n,t),t=Bf(e,t,1),e=pn(e,t,1),t=Ue(),e!==null&&(Li(e,1,t),Qe(e,t))}function xe(e,t,n){if(e.tag===3)$c(e,e,n);else for(;t!==null;){if(t.tag===3){$c(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=kr(n,e),e=Uf(t,e,1),t=pn(t,e,1),e=Ue(),t!==null&&(Li(t,1,e),Qe(t,e));break}}t=t.return}}function Xy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Le&n)===n&&(Pe===4||Pe===3&&(Le&130023424)===Le&&500>Se()-pu?On(e,0):du|=n),Qe(e,t)}function am(e,t){t===0&&(e.mode&1?(t=Xi,Xi<<=1,!(Xi&130023424)&&(Xi=4194304)):t=1);var n=Ue();e=Qt(e,t),e!==null&&(Li(e,t,n),Qe(e,n))}function Ky(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),am(e,n)}function qy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),am(e,n)}var sm;sm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,jy(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,me&&t.flags&1048576&&pf(t,Fl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xl(e,t),e=t.pendingProps;var i=yr(t,Me.current);pr(t,n),i=lu(null,t,r,e,i,n);var l=ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(l=!0,Ml(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eu(t),i.updater=fo,t.stateNode=i,i._reactInternals=t,Ga(t,r,e,n),t=es(null,t,r,!0,l,n)):(t.tag=0,me&&l&&Ks(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yy(r),e=_t(r,e),i){case 0:t=Ja(null,t,r,e,n);break e;case 1:t=jc(null,t,r,e,n);break e;case 11:t=Rc(null,t,r,e,n);break e;case 14:t=Ac(null,t,r,_t(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Ja(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),jc(e,t,r,i,n);case 3:e:{if($f(t),e===null)throw Error(I(387));r=t.pendingProps,l=t.memoizedState,i=l.element,vf(e,t),Wl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=kr(Error(I(423)),t),t=Oc(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(I(424)),t),t=Oc(e,t,r,n,i);break e}else for(nt=dn(t.stateNode.containerInfo.firstChild),it=t,me=!0,Et=null,n=gf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===i){t=Yt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return xf(t),e===null&&qa(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Va(r,i)?o=null:l!==null&&Va(r,l)&&(t.flags|=32),Hf(e,t),Be(e,t,o,n),t.child;case 6:return e===null&&qa(t),null;case 13:return Xf(e,t,n);case 4:return tu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Rc(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,ce(Bl,r._currentValue),r._currentValue=o,l!==null)if(Nt(l.value,o)){if(l.children===i.children&&!Ke.current){t=Yt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Xt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Qa(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qa(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pr(t,n),i=ht(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=_t(r,t.pendingProps),i=_t(r.type,i),Ac(e,t,r,i,n);case 15:return Wf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),xl(e,t),t.tag=1,qe(r)?(e=!0,Ml(t)):e=!1,pr(t,n),Ff(t,r,i),Ga(t,r,i,n),es(null,t,r,!0,e,n);case 19:return Kf(e,t,n);case 22:return Vf(e,t,n)}throw Error(I(156,t.tag))};function um(e,t){return jp(e,t)}function Qy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new Qy(e,t,n,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yy(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===js)return 11;if(e===Os)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")gu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yn:return Mn(n.children,i,l,t);case As:o=8,i|=8;break;case ka:return e=ft(12,n,t,i|2),e.elementType=ka,e.lanes=l,e;case Sa:return e=ft(13,n,t,i),e.elementType=Sa,e.lanes=l,e;case _a:return e=ft(19,n,t,i),e.elementType=_a,e.lanes=l,e;case vp:return go(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gp:o=10;break e;case yp:o=9;break e;case js:o=11;break e;case Os:o=14;break e;case en:o=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=ft(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Mn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=ft(22,e,r,t),e.elementType=vp,e.lanes=n,e.stateNode={isHidden:!1},e}function Jo(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function ea(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ao(0),this.expirationTimes=Ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yu(e,t,n,r,i,l,o,a,s){return e=new Gy(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ft(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(l),e}function Zy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cm(e){if(!e)return wn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(qe(n))return cf(e,n,t)}return t}function dm(e,t,n,r,i,l,o,a,s){return e=yu(n,r,!0,e,i,l,o,a,s),e.context=cm(null),n=e.current,r=Ue(),i=mn(n),l=Xt(r,i),l.callback=t??null,pn(n,l,i),e.current.lanes=i,Li(e,i,r),Qe(e,r),e}function yo(e,t,n,r){var i=t.current,l=Ue(),o=mn(i);return n=cm(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,o),e!==null&&(Pt(e,i,o,l),gl(e,i,o)),o}function Yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vu(e,t){Xc(e,t),(e=e.alternate)&&Xc(e,t)}function Jy(){return null}var pm=typeof reportError=="function"?reportError:function(e){console.error(e)};function xu(e){this._internalRoot=e}vo.prototype.render=xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));yo(e,t,null,null)};vo.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){yo(null,e,null,null)}),t[qt]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&Hp(e)}};function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kc(){}function e0(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Yl(o);l.call(u)}}var o=dm(t,r,e,0,null,!1,!1,"",Kc);return e._reactRootContainer=o,e[qt]=o.current,gi(e.nodeType===8?e.parentNode:e),Wn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Yl(s);a.call(u)}}var s=yu(e,0,!1,null,null,!1,!1,"",Kc);return e._reactRootContainer=s,e[qt]=s.current,gi(e.nodeType===8?e.parentNode:e),Wn(function(){yo(t,s,n,r)}),s}function wo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Yl(o);a.call(s)}}yo(t,o,e,i)}else o=e0(n,t,e,i,r);return Yl(o)}Bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(Fs(t,n|1),Qe(t,Se()),!(ne&6)&&(Sr=Se()+500,_n()))}break;case 13:Wn(function(){var r=Qt(e,1);if(r!==null){var i=Ue();Pt(r,e,1,i)}}),vu(e,1)}};Bs=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Ue();Pt(t,e,134217728,n)}vu(e,134217728)}};Up=function(e){if(e.tag===13){var t=mn(e),n=Qt(e,t);if(n!==null){var r=Ue();Pt(n,e,t,r)}vu(e,t)}};Wp=function(){return oe};Vp=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Ra=function(e,t,n){switch(t){case"input":if(ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=uo(r);if(!i)throw Error(I(90));wp(r),ba(r,i)}}}break;case"textarea":Sp(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};zp=fu;Tp=Wn;var t0={usingClientEntryPoint:!1,Events:[Ri,er,uo,Pp,Np,fu]},Br={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n0={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rp(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{lo=rl.inject(n0),Ot=rl}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(t))throw Error(I(200));return Zy(e,t,null,n)};ot.createRoot=function(e,t){if(!wu(e))throw Error(I(299));var n=!1,r="",i=pm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yu(e,1,!1,null,null,n,!1,r,i),e[qt]=t.current,gi(e.nodeType===8?e.parentNode:e),new xu(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Rp(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Wn(e)};ot.hydrate=function(e,t,n){if(!xo(t))throw Error(I(200));return wo(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!wu(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=pm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dm(t,null,e,1,n??null,i,!1,l,o),e[qt]=t.current,gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vo(t)};ot.render=function(e,t,n){if(!xo(t))throw Error(I(200));return wo(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!xo(e))throw Error(I(40));return e._reactRootContainer?(Wn(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};ot.unstable_batchedUpdates=fu;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return wo(e,t,n,!1,r)};ot.version="18.3.1-next-f1338f8080-20240426";function fm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm)}catch(e){console.error(e)}}fm(),pp.exports=ot;var r0=pp.exports,qc=r0;xa.createRoot=qc.createRoot,xa.hydrateRoot=qc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ei.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const Qc="popstate";function i0(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:a}=r.location;return ps("",{pathname:l,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Gl(i)}return o0(t,n,null,e)}function we(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ku(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function l0(){return Math.random().toString(36).substr(2,8)}function Yc(e,t){return{usr:e.state,key:e.key,idx:t}}function ps(e,t,n,r){return n===void 0&&(n=null),Ei({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nr(t):t,{state:n,key:t&&t.key||r||l0()})}function Gl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Nr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function o0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a=an.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(Ei({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=an.Pop;let C=c(),h=C==null?null:C-u;u=C,s&&s({action:a,location:x.location,delta:h})}function p(C,h){a=an.Push;let m=ps(x.location,C,h);u=c()+1;let g=Yc(m,u),_=x.createHref(m);try{o.pushState(g,"",_)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(_)}l&&s&&s({action:a,location:x.location,delta:1})}function f(C,h){a=an.Replace;let m=ps(x.location,C,h);u=c();let g=Yc(m,u),_=x.createHref(m);o.replaceState(g,"",_),l&&s&&s({action:a,location:x.location,delta:0})}function k(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:Gl(C);return m=m.replace(/ $/,"%20"),we(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let x={get action(){return a},get location(){return e(i,o)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Qc,d),s=C,()=>{i.removeEventListener(Qc,d),s=null}},createHref(C){return t(i,C)},createURL:k,encodeLocation(C){let h=k(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:f,go(C){return o.go(C)}};return x}var Gc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gc||(Gc={}));function a0(e,t,n){return n===void 0&&(n="/"),s0(e,t,n)}function s0(e,t,n,r){let i=typeof t=="string"?Nr(t):t,l=_r(i.pathname||"/",n);if(l==null)return null;let o=mm(e);u0(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let u=w0(l);a=v0(o[s],u)}return a}function mm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(we(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=gn([r,s.relativePath]),c=n.concat(s);l.children&&l.children.length>0&&(we(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),mm(l.children,t,c,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:g0(u,l.index),routesMeta:c})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,o);else for(let s of hm(l.path))i(l,o,s)}),t}function hm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=hm(r.join("/")),a=[];return a.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function u0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c0=/^:[\w-]+$/,d0=3,p0=2,f0=1,m0=10,h0=-2,Zc=e=>e==="*";function g0(e,t){let n=e.split("/"),r=n.length;return n.some(Zc)&&(r+=h0),t&&(r+=p0),n.filter(i=>!Zc(i)).reduce((i,l)=>i+(c0.test(l)?d0:l===""?f0:m0),r)}function y0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function v0(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,c=l==="/"?t:t.slice(l.length)||"/",d=fs({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),p=s.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:gn([l,d.pathname]),pathnameBase:E0(gn([l,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(l=gn([l,d.pathnameBase]))}return o}function fs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=x0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:f}=c;if(p==="*"){let x=a[d]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const k=a[d];return f&&!k?u[p]=void 0:u[p]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function x0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ku(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function w0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ku(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _r(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const k0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,S0=e=>k0.test(e);function _0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Nr(e):e,l;if(n)if(S0(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),ku(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=Jc(n.substring(1),"/"):l=Jc(n,t)}else l=t;return{pathname:l,search:b0(r),hash:P0(i)}}function Jc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ta(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function C0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gm(e,t){let n=C0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ym(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Nr(e):(i=Ei({},e),we(!i.pathname||!i.pathname.includes("?"),ta("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),ta("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),ta("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?t[d]:"/"}let s=_0(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(l||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const gn=e=>e.join("/").replace(/\/\/+/g,"/"),E0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),b0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,P0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vm=["post","put","patch","delete"];new Set(vm);const z0=["get",...vm];new Set(z0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}const ko=E.createContext(null),xm=E.createContext(null),Cn=E.createContext(null),So=E.createContext(null),En=E.createContext({outlet:null,matches:[],isDataRoute:!1}),wm=E.createContext(null);function T0(e,t){let{relative:n}=t===void 0?{}:t;ji()||we(!1);let{basename:r,navigator:i}=E.useContext(Cn),{hash:l,pathname:o,search:a}=_o(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:gn([r,o])),i.createHref({pathname:s,search:a,hash:l})}function ji(){return E.useContext(So)!=null}function Oi(){return ji()||we(!1),E.useContext(So).location}function km(e){E.useContext(Cn).static||E.useLayoutEffect(e)}function L0(){let{isDataRoute:e}=E.useContext(En);return e?H0():I0()}function I0(){ji()||we(!1);let e=E.useContext(ko),{basename:t,future:n,navigator:r}=E.useContext(Cn),{matches:i}=E.useContext(En),{pathname:l}=Oi(),o=JSON.stringify(gm(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return km(()=>{a.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=ym(u,JSON.parse(o),l,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:gn([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,o,l,e])}function Sm(){let{matches:e}=E.useContext(En),t=e[e.length-1];return t?t.params:{}}function _o(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Cn),{matches:i}=E.useContext(En),{pathname:l}=Oi(),o=JSON.stringify(gm(i,r.v7_relativeSplatPath));return E.useMemo(()=>ym(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function R0(e,t){return A0(e,t)}function A0(e,t,n,r){ji()||we(!1);let{navigator:i}=E.useContext(Cn),{matches:l}=E.useContext(En),o=l[l.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Oi(),c;if(t){var d;let C=typeof t=="string"?Nr(t):t;s==="/"||(d=C.pathname)!=null&&d.startsWith(s)||we(!1),c=C}else c=u;let p=c.pathname||"/",f=p;if(s!=="/"){let C=s.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=a0(e,{pathname:f}),x=F0(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:gn([s,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:gn([s,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,r);return t&&x?E.createElement(So.Provider,{value:{location:bi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:an.Pop}},x):x}function j0(){let e=V0(),t=N0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const O0=E.createElement(j0,null);class M0 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(En.Provider,{value:this.props.routeContext},E.createElement(wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D0(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(ko);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(En.Provider,{value:t},r)}function F0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||we(!1),o=o.slice(0,Math.min(o.length,c+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:f}=n,k=d.route.loader&&p[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||k){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,p)=>{let f,k=!1,x=null,C=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||O0,s&&(u<0&&p===0?($0("route-fallback"),k=!0,C=null):u===p&&(k=!0,C=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,p+1)),m=()=>{let g;return f?g=x:k?g=C:d.route.Component?g=E.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,E.createElement(D0,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?E.createElement(M0,{location:n.location,revalidation:n.revalidation,component:x,error:f,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var _m=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_m||{}),Cm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cm||{});function B0(e){let t=E.useContext(ko);return t||we(!1),t}function U0(e){let t=E.useContext(xm);return t||we(!1),t}function W0(e){let t=E.useContext(En);return t||we(!1),t}function Em(e){let t=W0(),n=t.matches[t.matches.length-1];return n.route.id||we(!1),n.route.id}function V0(){var e;let t=E.useContext(wm),n=U0(),r=Em();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function H0(){let{router:e}=B0(_m.UseNavigateStable),t=Em(Cm.UseNavigateStable),n=E.useRef(!1);return km(()=>{n.current=!0}),E.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,bi({fromRouteId:t},l)))},[e,t])}const ed={};function $0(e,t,n){ed[e]||(ed[e]=!0)}function X0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _l(e){we(!1)}function K0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=an.Pop,navigator:l,static:o=!1,future:a}=e;ji()&&we(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:l,static:o,future:bi({v7_relativeSplatPath:!1},a)}),[s,a,l,o]);typeof r=="string"&&(r=Nr(r));let{pathname:c="/",search:d="",hash:p="",state:f=null,key:k="default"}=r,x=E.useMemo(()=>{let C=_r(c,s);return C==null?null:{location:{pathname:C,search:d,hash:p,state:f,key:k},navigationType:i}},[s,c,d,p,f,k,i]);return x==null?null:E.createElement(Cn.Provider,{value:u},E.createElement(So.Provider,{children:n,value:x}))}function q0(e){let{children:t,location:n}=e;return R0(ms(t),n)}new Promise(()=>{});function ms(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let l=[...t,i];if(r.type===E.Fragment){n.push.apply(n,ms(r.props.children,l));return}r.type!==_l&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ms(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}function bm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Q0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Y0(e,t){return e.button===0&&(!t||t==="_self")&&!Q0(e)}const G0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],J0="6";try{window.__reactRouterVersion=J0}catch{}const ev=E.createContext({isTransitioning:!1}),tv="startTransition",td=Xh[tv];function nv(e){let{basename:t,children:n,future:r,window:i}=e,l=E.useRef();l.current==null&&(l.current=i0({window:i,v5Compat:!0}));let o=l.current,[a,s]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(d=>{u&&td?td(()=>s(d)):s(d)},[s,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.useEffect(()=>X0(r),[r]),E.createElement(K0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yn=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:a,target:s,to:u,preventScrollReset:c,viewTransition:d}=t,p=bm(t,G0),{basename:f}=E.useContext(Cn),k,x=!1;if(typeof u=="string"&&iv.test(u)&&(k=u,rv))try{let g=new URL(window.location.href),_=u.startsWith("//")?new URL(g.protocol+u):new URL(u),b=_r(_.pathname,f);_.origin===g.origin&&b!=null?u=b+_.search+_.hash:x=!0}catch{}let C=T0(u,{relative:i}),h=av(u,{replace:o,state:a,target:s,preventScrollReset:c,relative:i,viewTransition:d});function m(g){r&&r(g),g.defaultPrevented||h(g)}return E.createElement("a",Zl({},p,{href:k||C,onClick:x||l?r:m,ref:n,target:s}))}),lv=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:o=!1,style:a,to:s,viewTransition:u,children:c}=t,d=bm(t,Z0),p=_o(s,{relative:d.relative}),f=Oi(),k=E.useContext(xm),{navigator:x,basename:C}=E.useContext(Cn),h=k!=null&&sv(p)&&u===!0,m=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,g=f.pathname,_=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;i||(g=g.toLowerCase(),_=_?_.toLowerCase():null,m=m.toLowerCase()),_&&C&&(_=_r(_,C)||_);const b=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let S=g===m||!o&&g.startsWith(m)&&g.charAt(b)==="/",P=_!=null&&(_===m||!o&&_.startsWith(m)&&_.charAt(m.length)==="/"),z={isActive:S,isPending:P,isTransitioning:h},O=S?r:void 0,L;typeof l=="function"?L=l(z):L=[l,S?"active":null,P?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(z):a;return E.createElement(yn,Zl({},d,{"aria-current":O,className:L,ref:n,style:F,to:s,viewTransition:u}),typeof c=="function"?c(z):c)});var hs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hs||(hs={}));var nd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nd||(nd={}));function ov(e){let t=E.useContext(ko);return t||we(!1),t}function av(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:a}=t===void 0?{}:t,s=L0(),u=Oi(),c=_o(e,{relative:o});return E.useCallback(d=>{if(Y0(d,n)){d.preventDefault();let p=r!==void 0?r:Gl(u)===Gl(c);s(e,{replace:p,state:i,preventScrollReset:l,relative:o,viewTransition:a})}},[u,s,c,r,i,n,e,l,o,a])}function sv(e,t){t===void 0&&(t={});let n=E.useContext(ev);n==null&&we(!1);let{basename:r}=ov(hs.useViewTransitionState),i=_o(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=_r(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=_r(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fs(i.pathname,o)!=null||fs(i.pathname,l)!=null}const na="ml-interview-progress",Pm=E.createContext(null);function uv({children:e}){const[t,n]=E.useState(()=>{const u=localStorage.getItem(na);return u?JSON.parse(u):{}});E.useEffect(()=>{localStorage.setItem(na,JSON.stringify(t))},[t]);const r=E.useCallback((u,c,d)=>{n(p=>{var f;return{...p,[u]:{...p[u],[c]:{...(f=p[u])==null?void 0:f[c],status:d,lastAttempt:new Date().toISOString()}}}})},[]),i=E.useCallback((u,c,d)=>{n(p=>{var f,k,x;return{...p,[u]:{...p[u],[c]:{...(f=p[u])==null?void 0:f[c],status:((x=(k=p[u])==null?void 0:k[c])==null?void 0:x.status)||"in_progress",code:d,lastAttempt:new Date().toISOString()}}}})},[]),l=E.useCallback((u,c)=>{var p;const d=(p=t[u])==null?void 0:p[c];return{status:(d==null?void 0:d.status)||"not_started",code:d==null?void 0:d.code}},[t]),o=E.useCallback((u,c)=>{const d=t[u];if(!d||c===0)return 0;const p=Object.values(d).filter(f=>f.status==="completed").length;return Math.round(p/c*100)},[t]),a=E.useCallback(u=>{const c=u.reduce((p,f)=>p+f.problemCount,0);if(c===0)return 0;let d=0;for(const p of u){const f=t[p.id];f&&(d+=Object.values(f).filter(k=>k.status==="completed").length)}return Math.round(d/c*100)},[t]),s=E.useCallback(()=>{n({}),localStorage.removeItem(na)},[]);return v.jsx(Pm.Provider,{value:{progress:t,updateProblemStatus:r,saveProblemCode:i,getProblemProgress:l,getSectionProgress:o,getOverallProgress:a,resetProgress:s},children:e})}function Mi(){const e=E.useContext(Pm);if(!e)throw new Error("useProgress must be used within a ProgressProvider");return e}const Cr=[{id:"python-basics",title:"Python Basics for ML",description:"Master NumPy arrays and essential Python operations for machine learning.",icon:"🐍",introduction:"\n# Python Basics for Machine Learning\n\nNumPy is the foundation of nearly all machine learning in Python. Before diving into complex algorithms, you need to master array operations.\n\n## Key Concepts\n\n### NumPy Arrays\n- **Creation**: `np.array()`, `np.zeros()`, `np.ones()`, `np.arange()`\n- **Shape manipulation**: `reshape()`, `flatten()`, `transpose()`\n- **Indexing**: Slicing, boolean indexing, fancy indexing\n\n### Essential Operations\n- **Element-wise**: Addition, multiplication, mathematical functions\n- **Aggregations**: `sum()`, `mean()`, `std()`, `min()`, `max()`\n- **Broadcasting**: Automatic expansion of arrays for operations\n\n### Why It Matters\nEvery ML algorithm processes data as arrays. Understanding these operations lets you:\n- Prepare data efficiently\n- Debug model issues\n- Optimize performance\n\nLet's practice with hands-on problems!\n    ",problems:["numpy-array-sum","numpy-matrix-multiply","numpy-broadcast-add"]},{id:"data-preprocessing",title:"Data Preprocessing",description:"Learn essential data cleaning and transformation techniques.",icon:"🧹",introduction:`
# Data Preprocessing

Real-world data is messy. Before training any model, you need to clean and transform your data.

## Key Concepts

### Handling Missing Data
- **Detection**: \`np.isnan()\`, \`pd.isnull()\`
- **Strategies**: Remove, fill with mean/median/mode, interpolate

### Feature Scaling
- **Normalization**: Scale to [0, 1] range using min-max scaling
- **Standardization**: Transform to zero mean, unit variance (z-score)
- **When to use**: Most algorithms need scaled features

### Encoding Categorical Data
- **One-Hot Encoding**: Convert categories to binary vectors
- **Label Encoding**: Map categories to integers
- **When to use**: Tree-based models handle label encoding; others need one-hot

### Why It Matters
Garbage in, garbage out. Proper preprocessing can:
- Improve model accuracy by 10-30%
- Prevent training failures
- Reduce overfitting

Let's practice these essential skills!
    `,problems:["normalize-features","handle-missing-data","one-hot-encode"]},{id:"supervised-learning",title:"Supervised Learning",description:"Implement core supervised learning algorithms from scratch.",icon:"📊",introduction:`
# Supervised Learning

Supervised learning is when you train a model on labeled data to make predictions.

## Key Concepts

### Linear Regression
- **Goal**: Predict continuous values
- **Formula**: y = wx + b
- **Training**: Minimize mean squared error (MSE)
- **Gradient descent**: Update weights iteratively

### Logistic Regression
- **Goal**: Binary classification
- **Sigmoid function**: Maps outputs to [0, 1] probabilities
- **Loss**: Binary cross-entropy
- **Decision boundary**: Linear separation of classes

### Decision Trees
- **Concept**: Recursive binary splits based on features
- **Splitting criteria**: Gini impurity, Information gain
- **Advantages**: Interpretable, handles non-linear relationships

### The Interview Perspective
Interviewers often ask you to:
- Implement gradient descent from scratch
- Explain the math behind these algorithms
- Discuss trade-offs between algorithms

Let's build these algorithms!
    `,problems:["linear-regression-gd","logistic-regression","logistic-regression-full","binary-cross-entropy","decision-tree-split"]},{id:"unsupervised-learning",title:"Unsupervised Learning",description:"Implement clustering and dimensionality reduction algorithms.",icon:"🔍",introduction:`
# Unsupervised Learning

Unsupervised learning finds patterns in unlabeled data.

## Key Concepts

### K-Means Clustering
- **Goal**: Group data into K clusters
- **Algorithm**:
  1. Initialize K centroids randomly
  2. Assign points to nearest centroid
  3. Update centroids as cluster means
  4. Repeat until convergence

### Principal Component Analysis (PCA)
- **Goal**: Reduce dimensionality while preserving variance
- **Steps**:
  1. Center the data (subtract mean)
  2. Compute covariance matrix
  3. Find eigenvectors/eigenvalues
  4. Project onto top components

### Why These Matter
- **K-Means**: Customer segmentation, image compression
- **PCA**: Feature reduction, visualization, noise removal

### Interview Tips
- Be ready to implement K-means from scratch
- Explain variance explained by components
- Discuss limitations (K-means assumes spherical clusters)

Let's implement these algorithms!
    `,problems:["kmeans-clustering","pca-implementation"]},{id:"neural-networks",title:"Neural Networks",description:"Build neural networks from scratch with forward and backward passes.",icon:"🧠",introduction:`
# Neural Networks

Neural networks are the foundation of deep learning. Understanding the math behind them is essential for ML interviews.

## Key Concepts

### Multi-Layer Perceptron (MLP)
- **Architecture**: Input → Hidden layers → Output
- **Forward pass**: Compute activations layer by layer
- **Activation functions**: ReLU, Sigmoid, Tanh, Softmax

### Backpropagation
- **Chain rule**: Compute gradients layer by layer
- **Weight updates**: Gradient descent on all parameters
- **Key insight**: Errors propagate backwards through the network

### Training Techniques
- **Weight Initialization**: Xavier, He initialization
- **Batch Normalization**: Normalize activations for stable training
- **Dropout**: Randomly drop neurons to prevent overfitting

### Loss Functions
- **Cross-entropy**: For classification
- **MSE**: For regression

### Common Interview Topics
- Implement forward/backward pass from scratch
- Explain vanishing/exploding gradients
- Discuss initialization strategies
- Implement regularization techniques

Let's build neural networks from scratch!
    `,problems:["cross-entropy-loss","mlp-forward","backprop-gradients","weight-init","batch-norm","dropout"]},{id:"cnn",title:"Convolutional Neural Networks",description:"Understand convolutions, pooling, and CNN architectures.",icon:"🖼️",introduction:`
# Convolutional Neural Networks (CNNs)

CNNs are the backbone of computer vision. They learn hierarchical features from images.

## Key Concepts

### Convolution Operation
- **Kernel/Filter**: Small matrix that slides over input
- **Feature maps**: Output of applying filters
- **Parameters**: Stride, padding, kernel size

### Pooling Layers
- **Max pooling**: Take maximum in each region
- **Average pooling**: Take average in each region
- **Purpose**: Reduce spatial dimensions, add translation invariance

### CNN Architecture Components
1. **Convolutional layers**: Extract features
2. **Pooling layers**: Reduce dimensions
3. **Flatten**: Convert 2D to 1D
4. **Fully connected**: Classification

### Output Size Formula
\`\`\`
output = (input - kernel + 2*padding) / stride + 1
\`\`\`

### Classic Architectures
- **LeNet**: First successful CNN
- **AlexNet**: Deep CNNs for ImageNet
- **VGG**: Very deep, small kernels
- **ResNet**: Skip connections

Let's implement CNN operations!
    `,problems:["conv-output-size","conv2d-forward","max-pool","flatten-layer"]},{id:"transformers",title:"Attention & Transformers",description:"Master attention mechanisms and transformer architecture.",icon:"🤖",introduction:`
# Attention and Transformers

Transformers have revolutionized NLP and are now used in vision, speech, and more.

## Key Concepts

### Self-Attention
- **Query, Key, Value**: Three projections of input
- **Attention scores**: Q @ K.T / sqrt(d_k)
- **Output**: Weighted sum of values

### Scaled Dot-Product Attention
\`\`\`
Attention(Q, K, V) = softmax(Q @ K.T / sqrt(d_k)) @ V
\`\`\`

### Multi-Head Attention
- **Multiple heads**: Parallel attention with different projections
- **Concatenate**: Combine all head outputs
- **Project**: Linear transformation back to model dimension

### Transformer Components
- **Positional Encoding**: Inject position information
- **Layer Normalization**: Normalize across features
- **Feed-Forward Network**: MLP after attention
- **Residual Connections**: Add input to output

### Causal Masking
- **Purpose**: Prevent attending to future tokens
- **Implementation**: Add -inf to upper triangle before softmax

### Interview Essentials
- Implement scaled dot-product attention
- Explain why we scale by sqrt(d_k)
- Multi-head attention benefits
- Positional encoding purpose

Let's build transformers from scratch!
    `,problems:["scaled-dot-product-attention","multi-head-attention","positional-encoding","layer-norm","causal-mask"]},{id:"generative-models",title:"Generative Models",description:"Learn VAEs, diffusion models, and generative AI fundamentals.",icon:"🎨",introduction:`
# Generative Models

Generative models learn to create new data similar to the training distribution.

## Key Concepts

### Variational Autoencoders (VAEs)
- **Encoder**: Maps input to latent distribution (μ, σ)
- **Decoder**: Reconstructs input from latent sample
- **Reparameterization trick**: Enable backprop through sampling
- **Loss**: Reconstruction + KL divergence

### VAE Loss (ELBO)
\`\`\`
L = Reconstruction Loss + KL Divergence
L = ||x - x_reconstructed||² + KL(q(z|x) || p(z))
\`\`\`

### Diffusion Models
- **Forward process**: Gradually add noise to data
- **Reverse process**: Learn to denoise
- **Noise schedule**: β_t controls noise at each step

### Key Formulas
\`\`\`
x_t = sqrt(α_bar_t) * x_0 + sqrt(1 - α_bar_t) * ε
\`\`\`

### KL Divergence
- Measures difference between distributions
- KL(P || Q) ≥ 0, equals 0 iff P = Q
- Not symmetric

### Interview Topics
- Explain reparameterization trick
- VAE loss components
- Diffusion forward/reverse process
- Compare GANs vs VAEs vs Diffusion

Let's implement generative models!
    `,problems:["kl-divergence","vae-reparameterization","vae-loss","diffusion-noise-schedule","diffusion-forward"]},{id:"model-evaluation",title:"Model Evaluation",description:"Learn metrics and techniques to evaluate ML models properly.",icon:"📈",introduction:`
# Model Evaluation

Building a model is only half the job. You need to evaluate it properly.

## Key Concepts

### Classification Metrics
- **Accuracy**: Correct / Total (can be misleading!)
- **Precision**: TP / (TP + FP) - "Of positive predictions, how many correct?"
- **Recall**: TP / (TP + FN) - "Of actual positives, how many found?"
- **F1 Score**: Harmonic mean of precision and recall

### Regression Metrics
- **MSE**: Mean Squared Error
- **RMSE**: Root MSE (same units as target)
- **MAE**: Mean Absolute Error (robust to outliers)
- **R²**: Proportion of variance explained

### Cross-Validation
- **Why**: Single train/test split is unreliable
- **K-Fold**: Split data into K parts, rotate test set
- **Stratified**: Maintain class distribution in folds

### Interview Essentials
- Know when to use each metric
- Implement cross-validation from scratch
- Discuss precision-recall trade-offs

Let's practice evaluation!
    `,problems:["precision-recall-f1","cross-validation","confusion-matrix"]},{id:"deep-learning",title:"Deep Learning Basics",description:"Activation functions and fundamental building blocks.",icon:"⚡",introduction:`
# Deep Learning Basics

Core building blocks that appear in every neural network.

## Key Concepts

### Activation Functions
- **ReLU**: max(0, x) - Most common, avoids vanishing gradient
- **Sigmoid**: 1/(1+e^-x) - Output in [0,1], used for binary classification
- **Softmax**: Converts logits to probabilities that sum to 1
- **Tanh**: Output in [-1, 1], zero-centered

### When to Use Each
- **Hidden layers**: ReLU (or variants like LeakyReLU)
- **Binary output**: Sigmoid
- **Multi-class output**: Softmax
- **RNNs**: Tanh (historically)

### Dense Layers
- **Forward pass**: output = activation(W @ x + b)
- **Parameters**: Weights W and biases b
- **Computation**: Matrix multiplication + bias + activation

Let's implement these fundamentals!
    `,problems:["perceptron","neural-network-forward","backpropagation"]}];function cv(){const{getOverallProgress:e}=Mi(),t=Cr.map(r=>({id:r.id,problemCount:r.problems.length})),n=e(t);return v.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm",children:v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"flex items-center justify-between h-16",children:[v.jsxs(yn,{to:"/",className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center",children:v.jsx("span",{className:"text-white font-bold text-lg",children:"ML"})}),v.jsx("span",{className:"text-xl font-semibold text-gray-900",children:"ML Interview Prep"})]}),v.jsx("div",{className:"flex items-center gap-6",children:v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"text-gray-500 text-sm",children:"Overall Progress"}),v.jsx("div",{className:"w-32 h-2 bg-gray-200 rounded-full overflow-hidden",children:v.jsx("div",{className:"h-full bg-primary-500 transition-all duration-300",style:{width:`${n}%`}})}),v.jsxs("span",{className:"text-primary-600 text-sm font-medium",children:[n,"%"]})]})})]})})})}function dv(){const{getSectionProgress:e}=Mi();return v.jsx("aside",{className:"w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)] p-4",children:v.jsxs("nav",{className:"space-y-2",children:[v.jsx("h3",{className:"text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4 px-3",children:"Learning Sections"}),Cr.map((t,n)=>{const r=e(t.id,t.problems.length);return v.jsxs(lv,{to:`/section/${t.id}`,className:({isActive:i})=>`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${i?"bg-primary-50 text-primary-700":"text-gray-700 hover:bg-gray-100 hover:text-gray-900"}`,children:[v.jsx("span",{className:"w-6 h-6 flex items-center justify-center text-lg",children:t.icon}),v.jsxs("div",{className:"flex-1 min-w-0",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsxs("span",{className:"text-gray-400 text-xs",children:[n+1,"."]}),v.jsx("span",{className:"text-sm font-medium truncate",children:t.title})]}),v.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[v.jsx("div",{className:"flex-1 h-1 bg-gray-200 rounded-full overflow-hidden",children:v.jsx("div",{className:"h-full bg-primary-500 transition-all duration-300",style:{width:`${r}%`}})}),v.jsxs("span",{className:"text-xs text-gray-400",children:[r,"%"]})]})]})]},t.id)})]})})}function pv({children:e}){return v.jsxs("div",{className:"min-h-screen bg-gray-50",children:[v.jsx(cv,{}),v.jsxs("div",{className:"flex",children:[v.jsx(dv,{}),v.jsx("main",{className:"flex-1 p-6",children:e})]})]})}function fv(){const{getSectionProgress:e,getOverallProgress:t}=Mi(),n=Cr.map(i=>({id:i.id,problemCount:i.problems.length})),r=t(n);return v.jsxs("div",{className:"max-w-5xl mx-auto",children:[v.jsxs("div",{className:"text-center mb-12",children:[v.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Master ML Interviews"}),v.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto mb-8",children:"Practice hands-on machine learning coding problems. Run Python code directly in your browser with NumPy and scikit-learn support."}),v.jsxs("div",{className:"inline-flex items-center gap-4 bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200",children:[v.jsx("span",{className:"text-gray-600",children:"Overall Progress"}),v.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full overflow-hidden",children:v.jsx("div",{className:"h-full bg-primary-500 transition-all duration-500",style:{width:`${r}%`}})}),v.jsxs("span",{className:"text-primary-600 font-medium",children:[r,"%"]})]})]}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Cr.map((i,l)=>{const o=e(i.id,i.problems.length);return v.jsx(yn,{to:`/section/${i.id}`,className:"group bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all duration-200",children:v.jsxs("div",{className:"flex items-start gap-4",children:[v.jsx("div",{className:"w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary-50 transition-colors",children:i.icon}),v.jsxs("div",{className:"flex-1",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsxs("span",{className:"text-gray-400 text-sm",children:[l+1,"."]}),v.jsx("h3",{className:"text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors",children:i.title})]}),v.jsx("p",{className:"text-gray-500 text-sm mb-4",children:i.description}),v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("span",{className:"text-gray-400 text-sm",children:[i.problems.length," problems"]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden",children:v.jsx("div",{className:"h-full bg-primary-500 transition-all duration-300",style:{width:`${o}%`}})}),v.jsxs("span",{className:"text-xs text-gray-500",children:[o,"%"]})]})]})]})]})},i.id)})}),v.jsxs("div",{className:"mt-16 grid grid-cols-1 md:grid-cols-3 gap-6",children:[v.jsxs("div",{className:"bg-white rounded-lg p-6 text-center border border-gray-200",children:[v.jsx("div",{className:"text-3xl mb-3",children:"🐍"}),v.jsx("h3",{className:"text-gray-900 font-medium mb-2",children:"Python in Browser"}),v.jsx("p",{className:"text-gray-500 text-sm",children:"Run Python code with NumPy, pandas, and more - no setup required."})]}),v.jsxs("div",{className:"bg-white rounded-lg p-6 text-center border border-gray-200",children:[v.jsx("div",{className:"text-3xl mb-3",children:"✅"}),v.jsx("h3",{className:"text-gray-900 font-medium mb-2",children:"Instant Feedback"}),v.jsx("p",{className:"text-gray-500 text-sm",children:"Test your code against multiple test cases and see results immediately."})]}),v.jsxs("div",{className:"bg-white rounded-lg p-6 text-center border border-gray-200",children:[v.jsx("div",{className:"text-3xl mb-3",children:"📊"}),v.jsx("h3",{className:"text-gray-900 font-medium mb-2",children:"Track Progress"}),v.jsx("p",{className:"text-gray-500 text-sm",children:"Your progress is saved locally. Pick up where you left off anytime."})]})]})]})}function mv(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const hv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,gv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yv={};function rd(e,t){return(yv.jsx?gv:hv).test(e)}const vv=/[ \t\n\f\r]/g;function xv(e){return typeof e=="object"?e.type==="text"?id(e.value):!1:id(e)}function id(e){return e.replace(vv,"")===""}class Di{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Di.prototype.normal={};Di.prototype.property={};Di.prototype.space=void 0;function Nm(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Di(n,r,t)}function gs(e){return e.toLowerCase()}class Ge{constructor(t,n){this.attribute=n,this.property=t}}Ge.prototype.attribute="";Ge.prototype.booleanish=!1;Ge.prototype.boolean=!1;Ge.prototype.commaOrSpaceSeparated=!1;Ge.prototype.commaSeparated=!1;Ge.prototype.defined=!1;Ge.prototype.mustUseProperty=!1;Ge.prototype.number=!1;Ge.prototype.overloadedBoolean=!1;Ge.prototype.property="";Ge.prototype.spaceSeparated=!1;Ge.prototype.space=void 0;let wv=0;const G=$n(),_e=$n(),ys=$n(),R=$n(),ue=$n(),mr=$n(),Je=$n();function $n(){return 2**++wv}const vs=Object.freeze(Object.defineProperty({__proto__:null,boolean:G,booleanish:_e,commaOrSpaceSeparated:Je,commaSeparated:mr,number:R,overloadedBoolean:ys,spaceSeparated:ue},Symbol.toStringTag,{value:"Module"})),ra=Object.keys(vs);class Su extends Ge{constructor(t,n,r,i){let l=-1;if(super(t,n),ld(this,"space",i),typeof r=="number")for(;++l<ra.length;){const o=ra[l];ld(this,ra[l],(r&vs[o])===vs[o])}}}Su.prototype.defined=!0;function ld(e,t,n){n&&(e[t]=n)}function zr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const l=new Su(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[gs(r)]=r,n[gs(l.attribute)]=r}return new Di(t,n,e.space)}const zm=zr({properties:{ariaActiveDescendant:null,ariaAtomic:_e,ariaAutoComplete:null,ariaBusy:_e,ariaChecked:_e,ariaColCount:R,ariaColIndex:R,ariaColSpan:R,ariaControls:ue,ariaCurrent:null,ariaDescribedBy:ue,ariaDetails:null,ariaDisabled:_e,ariaDropEffect:ue,ariaErrorMessage:null,ariaExpanded:_e,ariaFlowTo:ue,ariaGrabbed:_e,ariaHasPopup:null,ariaHidden:_e,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ue,ariaLevel:R,ariaLive:null,ariaModal:_e,ariaMultiLine:_e,ariaMultiSelectable:_e,ariaOrientation:null,ariaOwns:ue,ariaPlaceholder:null,ariaPosInSet:R,ariaPressed:_e,ariaReadOnly:_e,ariaRelevant:null,ariaRequired:_e,ariaRoleDescription:ue,ariaRowCount:R,ariaRowIndex:R,ariaRowSpan:R,ariaSelected:_e,ariaSetSize:R,ariaSort:null,ariaValueMax:R,ariaValueMin:R,ariaValueNow:R,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Tm(e,t){return t in e?e[t]:t}function Lm(e,t){return Tm(e,t.toLowerCase())}const kv=zr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:mr,acceptCharset:ue,accessKey:ue,action:null,allow:null,allowFullScreen:G,allowPaymentRequest:G,allowUserMedia:G,alt:null,as:null,async:G,autoCapitalize:null,autoComplete:ue,autoFocus:G,autoPlay:G,blocking:ue,capture:null,charSet:null,checked:G,cite:null,className:ue,cols:R,colSpan:null,content:null,contentEditable:_e,controls:G,controlsList:ue,coords:R|mr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:G,defer:G,dir:null,dirName:null,disabled:G,download:ys,draggable:_e,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:G,formTarget:null,headers:ue,height:R,hidden:ys,high:R,href:null,hrefLang:null,htmlFor:ue,httpEquiv:ue,id:null,imageSizes:null,imageSrcSet:null,inert:G,inputMode:null,integrity:null,is:null,isMap:G,itemId:null,itemProp:ue,itemRef:ue,itemScope:G,itemType:ue,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:G,low:R,manifest:null,max:null,maxLength:R,media:null,method:null,min:null,minLength:R,multiple:G,muted:G,name:null,nonce:null,noModule:G,noValidate:G,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:G,optimum:R,pattern:null,ping:ue,placeholder:null,playsInline:G,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:G,referrerPolicy:null,rel:ue,required:G,reversed:G,rows:R,rowSpan:R,sandbox:ue,scope:null,scoped:G,seamless:G,selected:G,shadowRootClonable:G,shadowRootDelegatesFocus:G,shadowRootMode:null,shape:null,size:R,sizes:null,slot:null,span:R,spellCheck:_e,src:null,srcDoc:null,srcLang:null,srcSet:null,start:R,step:null,style:null,tabIndex:R,target:null,title:null,translate:null,type:null,typeMustMatch:G,useMap:null,value:_e,width:R,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ue,axis:null,background:null,bgColor:null,border:R,borderColor:null,bottomMargin:R,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:G,declare:G,event:null,face:null,frame:null,frameBorder:null,hSpace:R,leftMargin:R,link:null,longDesc:null,lowSrc:null,marginHeight:R,marginWidth:R,noResize:G,noHref:G,noShade:G,noWrap:G,object:null,profile:null,prompt:null,rev:null,rightMargin:R,rules:null,scheme:null,scrolling:_e,standby:null,summary:null,text:null,topMargin:R,valueType:null,version:null,vAlign:null,vLink:null,vSpace:R,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:G,disableRemotePlayback:G,prefix:null,property:null,results:R,security:null,unselectable:null},space:"html",transform:Lm}),Sv=zr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Je,accentHeight:R,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:R,amplitude:R,arabicForm:null,ascent:R,attributeName:null,attributeType:null,azimuth:R,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:R,by:null,calcMode:null,capHeight:R,className:ue,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:R,diffuseConstant:R,direction:null,display:null,dur:null,divisor:R,dominantBaseline:null,download:G,dx:null,dy:null,edgeMode:null,editable:null,elevation:R,enableBackground:null,end:null,event:null,exponent:R,externalResourcesRequired:null,fill:null,fillOpacity:R,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:mr,g2:mr,glyphName:mr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:R,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:R,horizOriginX:R,horizOriginY:R,id:null,ideographic:R,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:R,k:R,k1:R,k2:R,k3:R,k4:R,kernelMatrix:Je,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:R,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:R,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:R,overlineThickness:R,paintOrder:null,panose1:null,path:null,pathLength:R,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ue,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:R,pointsAtY:R,pointsAtZ:R,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Je,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Je,rev:Je,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Je,requiredFeatures:Je,requiredFonts:Je,requiredFormats:Je,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:R,specularExponent:R,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:R,strikethroughThickness:R,string:null,stroke:null,strokeDashArray:Je,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:R,strokeOpacity:R,strokeWidth:null,style:null,surfaceScale:R,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Je,tabIndex:R,tableValues:null,target:null,targetX:R,targetY:R,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Je,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:R,underlineThickness:R,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:R,values:null,vAlphabetic:R,vMathematical:R,vectorEffect:null,vHanging:R,vIdeographic:R,version:null,vertAdvY:R,vertOriginX:R,vertOriginY:R,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:R,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Tm}),Im=zr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Rm=zr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Lm}),Am=zr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),_v={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Cv=/[A-Z]/g,od=/-[a-z]/g,Ev=/^data[-\w.:]+$/i;function bv(e,t){const n=gs(t);let r=t,i=Ge;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Ev.test(t)){if(t.charAt(4)==="-"){const l=t.slice(5).replace(od,Nv);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=t.slice(4);if(!od.test(l)){let o=l.replace(Cv,Pv);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=Su}return new i(r,t)}function Pv(e){return"-"+e.toLowerCase()}function Nv(e){return e.charAt(1).toUpperCase()}const zv=Nm([zm,kv,Im,Rm,Am],"html"),_u=Nm([zm,Sv,Im,Rm,Am],"svg");function Tv(e){return e.join(" ").trim()}var Cu={},ad=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Lv=/\n/g,Iv=/^\s*/,Rv=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Av=/^:\s*/,jv=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Ov=/^[;\s]*/,Mv=/^\s+|\s+$/g,Dv=`
`,sd="/",ud="*",In="",Fv="comment",Bv="declaration";function Uv(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(k){var x=k.match(Lv);x&&(n+=x.length);var C=k.lastIndexOf(Dv);r=~C?k.length-C:r+k.length}function l(){var k={line:n,column:r};return function(x){return x.position=new o(k),u(),x}}function o(k){this.start=k,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function a(k){var x=new Error(t.source+":"+n+":"+r+": "+k);if(x.reason=k,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function s(k){var x=k.exec(e);if(x){var C=x[0];return i(C),e=e.slice(C.length),x}}function u(){s(Iv)}function c(k){var x;for(k=k||[];x=d();)x!==!1&&k.push(x);return k}function d(){var k=l();if(!(sd!=e.charAt(0)||ud!=e.charAt(1))){for(var x=2;In!=e.charAt(x)&&(ud!=e.charAt(x)||sd!=e.charAt(x+1));)++x;if(x+=2,In===e.charAt(x-1))return a("End of comment missing");var C=e.slice(2,x-2);return r+=2,i(C),e=e.slice(x),r+=2,k({type:Fv,comment:C})}}function p(){var k=l(),x=s(Rv);if(x){if(d(),!s(Av))return a("property missing ':'");var C=s(jv),h=k({type:Bv,property:cd(x[0].replace(ad,In)),value:C?cd(C[0].replace(ad,In)):In});return s(Ov),h}}function f(){var k=[];c(k);for(var x;x=p();)x!==!1&&(k.push(x),c(k));return k}return u(),f()}function cd(e){return e?e.replace(Mv,In):In}var Wv=Uv,Vv=bl&&bl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.default=$v;const Hv=Vv(Wv);function $v(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Hv.default)(e),i=typeof t=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:o,value:a}=l;i?t(o,a,l):a&&(n=n||{},n[o]=a)}),n}var Co={};Object.defineProperty(Co,"__esModule",{value:!0});Co.camelCase=void 0;var Xv=/^--[a-zA-Z0-9_-]+$/,Kv=/-([a-z])/g,qv=/^[^-]+$/,Qv=/^-(webkit|moz|ms|o|khtml)-/,Yv=/^-(ms)-/,Gv=function(e){return!e||qv.test(e)||Xv.test(e)},Zv=function(e,t){return t.toUpperCase()},dd=function(e,t){return"".concat(t,"-")},Jv=function(e,t){return t===void 0&&(t={}),Gv(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Yv,dd):e=e.replace(Qv,dd),e.replace(Kv,Zv))};Co.camelCase=Jv;var ex=bl&&bl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},tx=ex(Cu),nx=Co;function xs(e,t){var n={};return!e||typeof e!="string"||(0,tx.default)(e,function(r,i){r&&i&&(n[(0,nx.camelCase)(r,t)]=i)}),n}xs.default=xs;var rx=xs;const ix=ro(rx),jm=Om("end"),Eu=Om("start");function Om(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function lx(e){const t=Eu(e),n=jm(e);if(t&&n)return{start:t,end:n}}function ii(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?pd(e.position):"start"in e||"end"in e?pd(e):"line"in e||"column"in e?ws(e):""}function ws(e){return fd(e&&e.line)+":"+fd(e&&e.column)}function pd(e){return ws(e&&e.start)+"-"+ws(e&&e.end)}function fd(e){return e&&typeof e=="number"?e:1}class De extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",l={},o=!1;if(n&&("line"in n&&"column"in n?l={place:n}:"start"in n&&"end"in n?l={place:n}:"type"in n?l={ancestors:[n],place:n.position}:l={...n}),typeof t=="string"?i=t:!l.cause&&t&&(o=!0,i=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?l.ruleId=r:(l.source=r.slice(0,s),l.ruleId=r.slice(s+1))}if(!l.place&&l.ancestors&&l.ancestors){const s=l.ancestors[l.ancestors.length-1];s&&(l.place=s.position)}const a=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=ii(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}De.prototype.file="";De.prototype.name="";De.prototype.reason="";De.prototype.message="";De.prototype.stack="";De.prototype.column=void 0;De.prototype.line=void 0;De.prototype.ancestors=void 0;De.prototype.cause=void 0;De.prototype.fatal=void 0;De.prototype.place=void 0;De.prototype.ruleId=void 0;De.prototype.source=void 0;const bu={}.hasOwnProperty,ox=new Map,ax=/[A-Z]/g,sx=new Set(["table","tbody","thead","tfoot","tr"]),ux=new Set(["td","th"]),Mm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function cx(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=vx(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=yx(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?_u:zv,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},l=Dm(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function Dm(e,t,n){if(t.type==="element")return dx(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return px(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return mx(e,t,n);if(t.type==="mdxjsEsm")return fx(e,t);if(t.type==="root")return hx(e,t,n);if(t.type==="text")return gx(e,t)}function dx(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=_u,e.schema=i),e.ancestors.push(t);const l=Bm(e,t.tagName,!1),o=xx(e,t);let a=Nu(e,t);return sx.has(t.tagName)&&(a=a.filter(function(s){return typeof s=="string"?!xv(s):!0})),Fm(e,o,l,t),Pu(o,a),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function px(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Pi(e,t.position)}function fx(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Pi(e,t.position)}function mx(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=_u,e.schema=i),e.ancestors.push(t);const l=t.name===null?e.Fragment:Bm(e,t.name,!0),o=wx(e,t),a=Nu(e,t);return Fm(e,o,l,t),Pu(o,a),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function hx(e,t,n){const r={};return Pu(r,Nu(e,t)),e.create(t,e.Fragment,r,n)}function gx(e,t){return t.value}function Fm(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Pu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function yx(e,t,n){return r;function r(i,l,o,a){const u=Array.isArray(o.children)?n:t;return a?u(l,o,a):u(l,o)}}function vx(e,t){return n;function n(r,i,l,o){const a=Array.isArray(l.children),s=Eu(r);return t(i,l,o,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function xx(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&bu.call(t.properties,i)){const l=kx(e,i,t.properties[i]);if(l){const[o,a]=l;e.tableCellAlignToStyle&&o==="align"&&typeof a=="string"&&ux.has(t.tagName)?r=a:n[o]=a}}if(r){const l=n.style||(n.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function wx(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const o=l.expression;o.type;const a=o.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Pi(e,t.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,l=e.evaluater.evaluateExpression(a.expression)}else Pi(e,t.position);else l=r.value===null?!0:r.value;n[i]=l}return n}function Nu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:ox;for(;++r<t.children.length;){const l=t.children[r];let o;if(e.passKeys){const s=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(s){const u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1)}}const a=Dm(e,l,o);a!==void 0&&n.push(a)}return n}function kx(e,t,n){const r=bv(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?mv(n):Tv(n)),r.property==="style"){let i=typeof n=="object"?n:Sx(e,String(n));return e.stylePropertyNameCase==="css"&&(i=_x(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?_v[r.property]||r.property:r.attribute,n]}}function Sx(e,t){try{return ix(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new De("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Mm+"#cannot-parse-style-attribute",i}}function Bm(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let l=-1,o;for(;++l<i.length;){const a=rd(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};o=o?{type:"MemberExpression",object:o,property:a,computed:!!(l&&a.type==="Literal"),optional:!1}:a}r=o}else r=rd(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return bu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Pi(e)}function Pi(e,t){const n=new De("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Mm+"#cannot-handle-mdx-estrees-without-createevaluater",n}function _x(e){const t={};let n;for(n in e)bu.call(e,n)&&(t[Cx(n)]=e[n]);return t}function Cx(e){let t=e.replace(ax,Ex);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Ex(e){return"-"+e.toLowerCase()}const ia={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},bx={};function Px(e,t){const n=bx,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Um(e,r,i)}function Um(e,t,n){if(Nx(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return md(e.children,t,n)}return Array.isArray(e)?md(e,t,n):""}function md(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Um(e[i],t,n);return r.join("")}function Nx(e){return!!(e&&typeof e=="object")}const hd=document.createElement("i");function zu(e){const t="&"+e+";";hd.innerHTML=t;const n=hd.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Dt(e,t,n,r){const i=e.length;let l=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);l<r.length;)o=r.slice(l,l+1e4),o.unshift(t,0),e.splice(...o),l+=1e4,t+=1e4}function pt(e,t){return e.length>0?(Dt(e,e.length,0,t),e):t}const gd={}.hasOwnProperty;function zx(e){const t={};let n=-1;for(;++n<e.length;)Tx(t,e[n]);return t}function Tx(e,t){let n;for(n in t){const i=(gd.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n];let o;if(l)for(o in l){gd.call(i,o)||(i[o]=[]);const a=l[o];Lx(i[o],Array.isArray(a)?a:a?[a]:[])}}}function Lx(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Dt(e,0,0,r)}function Wm(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function hr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const At=bn(/[A-Za-z]/),rt=bn(/[\dA-Za-z]/),Ix=bn(/[#-'*+\--9=?A-Z^-~]/);function ks(e){return e!==null&&(e<32||e===127)}const Ss=bn(/\d/),Rx=bn(/[\dA-Fa-f]/),Ax=bn(/[!-/:-@[-`{-~]/);function q(e){return e!==null&&e<-2}function Ye(e){return e!==null&&(e<0||e===32)}function ie(e){return e===-2||e===-1||e===32}const jx=bn(new RegExp("\\p{P}|\\p{S}","u")),Ox=bn(/\s/);function bn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Tr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const l=e.charCodeAt(n);let o="";if(l===37&&rt(e.charCodeAt(n+1))&&rt(e.charCodeAt(n+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const a=e.charCodeAt(n+1);l<56320&&a>56319&&a<57344?(o=String.fromCharCode(l,a),i=1):o="�"}else o=String.fromCharCode(l);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function de(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(s){return ie(s)?(e.enter(n),a(s)):t(s)}function a(s){return ie(s)&&l++<i?(e.consume(s),a):(e.exit(n),t(s))}}const Mx={tokenize:Dx};function Dx(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),de(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),l(a)}function l(a){const s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(a)}function o(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return q(a)?(e.consume(a),e.exit("chunkText"),l):(e.consume(a),o)}}const Fx={tokenize:Bx},yd={tokenize:Ux};function Bx(e){const t=this,n=[];let r=0,i,l,o;return a;function a(g){if(r<n.length){const _=n[r];return t.containerState=_[1],e.attempt(_[0].continuation,s,u)(g)}return u(g)}function s(g){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const _=t.events.length;let b=_,S;for(;b--;)if(t.events[b][0]==="exit"&&t.events[b][1].type==="chunkFlow"){S=t.events[b][1].end;break}h(r);let P=_;for(;P<t.events.length;)t.events[P][1].end={...S},P++;return Dt(t.events,b+1,0,t.events.slice(_)),t.events.length=P,u(g)}return a(g)}function u(g){if(r===n.length){if(!i)return p(g);if(i.currentConstruct&&i.currentConstruct.concrete)return k(g);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(yd,c,d)(g)}function c(g){return i&&m(),h(r),p(g)}function d(g){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,k(g)}function p(g){return t.containerState={},e.attempt(yd,f,k)(g)}function f(g){return r++,n.push([t.currentConstruct,t.containerState]),p(g)}function k(g){if(g===null){i&&m(),h(0),e.consume(g);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),x(g)}function x(g){if(g===null){C(e.exit("chunkFlow"),!0),h(0),e.consume(g);return}return q(g)?(e.consume(g),C(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(g),x)}function C(g,_){const b=t.sliceStream(g);if(_&&b.push(null),g.previous=l,l&&(l.next=g),l=g,i.defineSkip(g.start),i.write(b),t.parser.lazy[g.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<o&&(!i.events[S][1].end||i.events[S][1].end.offset>o))return;const P=t.events.length;let z=P,O,L;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){if(O){L=t.events[z][1].end;break}O=!0}for(h(r),S=P;S<t.events.length;)t.events[S][1].end={...L},S++;Dt(t.events,z+1,0,t.events.slice(P)),t.events.length=S}}function h(g){let _=n.length;for(;_-- >g;){const b=n[_];t.containerState=b[1],b[0].exit.call(t,e)}n.length=g}function m(){i.write([null]),l=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Ux(e,t,n){return de(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function vd(e){if(e===null||Ye(e)||Ox(e))return 1;if(jx(e))return 2}function Tu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const _s={name:"attention",resolveAll:Wx,tokenize:Vx};function Wx(e,t){let n=-1,r,i,l,o,a,s,u,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d={...e[r][1].end},p={...e[n][1].start};xd(d,-s),xd(p,s),o={type:s>1?"strongSequence":"emphasisSequence",start:d,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},l={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},e[r][1].end={...o.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=pt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=pt(u,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",l,t]]),u=pt(u,Tu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=pt(u,[["exit",l,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,u=pt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,Dt(e,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Vx(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=vd(r);let l;return o;function o(s){return l=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===l)return e.consume(s),a;const u=e.exit("attentionSequence"),c=vd(s),d=!c||c===2&&i||n.includes(s),p=!i||i===2&&c||n.includes(r);return u._open=!!(l===42?d:d&&(i||!p)),u._close=!!(l===42?p:p&&(c||!d)),t(s)}}function xd(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Hx={name:"autolink",tokenize:$x};function $x(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(f){return At(f)?(e.consume(f),o):f===64?n(f):u(f)}function o(f){return f===43||f===45||f===46||rt(f)?(r=1,a(f)):u(f)}function a(f){return f===58?(e.consume(f),r=0,s):(f===43||f===45||f===46||rt(f))&&r++<32?(e.consume(f),a):(r=0,u(f))}function s(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||ks(f)?n(f):(e.consume(f),s)}function u(f){return f===64?(e.consume(f),c):Ix(f)?(e.consume(f),u):n(f)}function c(f){return rt(f)?d(f):n(f)}function d(f){return f===46?(e.consume(f),r=0,c):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):p(f)}function p(f){if((f===45||rt(f))&&r++<63){const k=f===45?p:d;return e.consume(f),k}return n(f)}}const Eo={partial:!0,tokenize:Xx};function Xx(e,t,n){return r;function r(l){return ie(l)?de(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||q(l)?t(l):n(l)}}const Vm={continuation:{tokenize:qx},exit:Qx,name:"blockQuote",tokenize:Kx};function Kx(e,t,n){const r=this;return i;function i(o){if(o===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return n(o)}function l(o){return ie(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function qx(e,t,n){const r=this;return i;function i(o){return ie(o)?de(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(Vm,t,n)(o)}}function Qx(e){e.exit("blockQuote")}const Hm={name:"characterEscape",tokenize:Yx};function Yx(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return Ax(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const $m={name:"characterReference",tokenize:Gx};function Gx(e,t,n){const r=this;let i=0,l,o;return a;function a(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),l=31,o=rt,c(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=Rx,c):(e.enter("characterReferenceValue"),l=7,o=Ss,c(d))}function c(d){if(d===59&&i){const p=e.exit("characterReferenceValue");return o===rt&&!zu(r.sliceSerialize(p))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(d)&&i++<l?(e.consume(d),c):n(d)}}const wd={partial:!0,tokenize:Jx},kd={concrete:!0,name:"codeFenced",tokenize:Zx};function Zx(e,t,n){const r=this,i={partial:!0,tokenize:b};let l=0,o=0,a;return s;function s(S){return u(S)}function u(S){const P=r.events[r.events.length-1];return l=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,a=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(S)}function c(S){return S===a?(o++,e.consume(S),c):o<3?n(S):(e.exit("codeFencedFenceSequence"),ie(S)?de(e,d,"whitespace")(S):d(S))}function d(S){return S===null||q(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(wd,x,_)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(S))}function p(S){return S===null||q(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(S)):ie(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),de(e,f,"whitespace")(S)):S===96&&S===a?n(S):(e.consume(S),p)}function f(S){return S===null||q(S)?d(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(S))}function k(S){return S===null||q(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(S)):S===96&&S===a?n(S):(e.consume(S),k)}function x(S){return e.attempt(i,_,C)(S)}function C(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),h}function h(S){return l>0&&ie(S)?de(e,m,"linePrefix",l+1)(S):m(S)}function m(S){return S===null||q(S)?e.check(wd,x,_)(S):(e.enter("codeFlowValue"),g(S))}function g(S){return S===null||q(S)?(e.exit("codeFlowValue"),m(S)):(e.consume(S),g)}function _(S){return e.exit("codeFenced"),t(S)}function b(S,P,z){let O=0;return L;function L(j){return S.enter("lineEnding"),S.consume(j),S.exit("lineEnding"),F}function F(j){return S.enter("codeFencedFence"),ie(j)?de(S,V,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):V(j)}function V(j){return j===a?(S.enter("codeFencedFenceSequence"),Y(j)):z(j)}function Y(j){return j===a?(O++,S.consume(j),Y):O>=o?(S.exit("codeFencedFenceSequence"),ie(j)?de(S,re,"whitespace")(j):re(j)):z(j)}function re(j){return j===null||q(j)?(S.exit("codeFencedFence"),P(j)):z(j)}}}function Jx(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const la={name:"codeIndented",tokenize:t1},e1={partial:!0,tokenize:n1};function t1(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),de(e,l,"linePrefix",5)(u)}function l(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?o(u):n(u)}function o(u){return u===null?s(u):q(u)?e.attempt(e1,o,s)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||q(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),a)}function s(u){return e.exit("codeIndented"),t(u)}}function n1(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):q(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):de(e,l,"linePrefix",5)(o)}function l(o){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):q(o)?i(o):n(o)}}const r1={name:"codeText",previous:l1,resolve:i1,tokenize:o1};function i1(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function l1(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function o1(e,t,n){let r=0,i,l;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),a(d)}function a(d){return d===96?(e.consume(d),r++,a):(e.exit("codeTextSequence"),s(d))}function s(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),s):d===96?(l=e.enter("codeTextSequence"),i=0,c(d)):q(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||q(d)?(e.exit("codeTextData"),s(d)):(e.consume(d),u)}function c(d){return d===96?(e.consume(d),i++,c):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(l.type="codeTextData",u(d))}}class a1{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ur(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ur(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ur(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ur(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ur(this.left,n.reverse())}}}function Ur(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Xm(e){const t={};let n=-1,r,i,l,o,a,s,u;const c=new a1(e);for(;++n<c.length;){for(;n in t;)n=t[n];if(r=c.get(n),n&&r[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,l=0,l<s.length&&s[l][1].type==="lineEndingBlank"&&(l+=2),l<s.length&&s[l][1].type==="content"))for(;++l<s.length&&s[l][1].type!=="content";)s[l][1].type==="chunkText"&&(s[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,s1(c,n)),n=t[n],u=!0);else if(r[1]._container){for(l=n,i=void 0;l--;)if(o=c.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},a=c.slice(i,n),a.unshift(r),c.splice(i,n-i+1,a))}}return Dt(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function s1(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const l=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const a=o.events,s=[],u={};let c,d,p=-1,f=n,k=0,x=0;const C=[x];for(;f;){for(;e.get(++i)[1]!==f;);l.push(i),f._tokenizer||(c=r.sliceStream(f),f.next||c.push(null),d&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=f,f=f.next}for(f=n;++p<a.length;)a[p][0]==="exit"&&a[p-1][0]==="enter"&&a[p][1].type===a[p-1][1].type&&a[p][1].start.line!==a[p][1].end.line&&(x=p+1,C.push(x),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):C.pop(),p=C.length;p--;){const h=a.slice(C[p],C[p+1]),m=l.pop();s.push([m,m+h.length-1]),e.splice(m,2,h)}for(s.reverse(),p=-1;++p<s.length;)u[k+s[p][0]]=k+s[p][1],k+=s[p][1]-s[p][0]-1;return u}const u1={resolve:d1,tokenize:p1},c1={partial:!0,tokenize:f1};function d1(e){return Xm(e),e}function p1(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?l(a):q(a)?e.check(c1,o,l)(a):(e.consume(a),i)}function l(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function o(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function f1(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),de(e,l,"linePrefix")}function l(o){if(o===null||q(o))return n(o);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Km(e,t,n,r,i,l,o,a,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return d;function d(h){return h===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(h),e.exit(l),p):h===null||h===32||h===41||ks(h)?n(h):(e.enter(r),e.enter(o),e.enter(a),e.enter("chunkString",{contentType:"string"}),x(h))}function p(h){return h===62?(e.enter(l),e.consume(h),e.exit(l),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===62?(e.exit("chunkString"),e.exit(a),p(h)):h===null||h===60||q(h)?n(h):(e.consume(h),h===92?k:f)}function k(h){return h===60||h===62||h===92?(e.consume(h),f):f(h)}function x(h){return!c&&(h===null||h===41||Ye(h))?(e.exit("chunkString"),e.exit(a),e.exit(o),e.exit(r),t(h)):c<u&&h===40?(e.consume(h),c++,x):h===41?(e.consume(h),c--,x):h===null||h===32||h===40||ks(h)?n(h):(e.consume(h),h===92?C:x)}function C(h){return h===40||h===41||h===92?(e.consume(h),x):x(h)}}function qm(e,t,n,r,i,l){const o=this;let a=0,s;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(l),c}function c(f){return a>999||f===null||f===91||f===93&&!s||f===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):f===93?(e.exit(l),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):q(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===null||f===91||f===93||q(f)||a++>999?(e.exit("chunkString"),c(f)):(e.consume(f),s||(s=!ie(f)),f===92?p:d)}function p(f){return f===91||f===92||f===93?(e.consume(f),a++,d):d(f)}}function Qm(e,t,n,r,i,l){let o;return a;function a(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),o=p===40?41:p,s):n(p)}function s(p){return p===o?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(l),u(p))}function u(p){return p===o?(e.exit(l),s(o)):p===null?n(p):q(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),de(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===o||p===null||q(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?d:c)}function d(p){return p===o||p===92?(e.consume(p),c):c(p)}}function li(e,t){let n;return r;function r(i){return q(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ie(i)?de(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const m1={name:"definition",tokenize:g1},h1={partial:!0,tokenize:y1};function g1(e,t,n){const r=this;let i;return l;function l(f){return e.enter("definition"),o(f)}function o(f){return qm.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function a(f){return i=hr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),s):n(f)}function s(f){return Ye(f)?li(e,u)(f):u(f)}function u(f){return Km(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function c(f){return e.attempt(h1,d,d)(f)}function d(f){return ie(f)?de(e,p,"whitespace")(f):p(f)}function p(f){return f===null||q(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function y1(e,t,n){return r;function r(a){return Ye(a)?li(e,i)(a):n(a)}function i(a){return Qm(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function l(a){return ie(a)?de(e,o,"whitespace")(a):o(a)}function o(a){return a===null||q(a)?t(a):n(a)}}const v1={name:"hardBreakEscape",tokenize:x1};function x1(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return q(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const w1={name:"headingAtx",resolve:k1,tokenize:S1};function k1(e,t){let n=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Dt(e,r,n-r+1,[["enter",i,t],["enter",l,t],["exit",l,t],["exit",i,t]])),e}function S1(e,t,n){let r=0;return i;function i(c){return e.enter("atxHeading"),l(c)}function l(c){return e.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&r++<6?(e.consume(c),o):c===null||Ye(c)?(e.exit("atxHeadingSequence"),a(c)):n(c)}function a(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||q(c)?(e.exit("atxHeading"),t(c)):ie(c)?de(e,a,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),a(c))}function u(c){return c===null||c===35||Ye(c)?(e.exit("atxHeadingText"),a(c)):(e.consume(c),u)}}const _1=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Sd=["pre","script","style","textarea"],C1={concrete:!0,name:"htmlFlow",resolveTo:P1,tokenize:N1},E1={partial:!0,tokenize:T1},b1={partial:!0,tokenize:z1};function P1(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function N1(e,t,n){const r=this;let i,l,o,a,s;return u;function u(w){return c(w)}function c(w){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(w),d}function d(w){return w===33?(e.consume(w),p):w===47?(e.consume(w),l=!0,x):w===63?(e.consume(w),i=3,r.interrupt?t:y):At(w)?(e.consume(w),o=String.fromCharCode(w),C):n(w)}function p(w){return w===45?(e.consume(w),i=2,f):w===91?(e.consume(w),i=5,a=0,k):At(w)?(e.consume(w),i=4,r.interrupt?t:y):n(w)}function f(w){return w===45?(e.consume(w),r.interrupt?t:y):n(w)}function k(w){const te="CDATA[";return w===te.charCodeAt(a++)?(e.consume(w),a===te.length?r.interrupt?t:V:k):n(w)}function x(w){return At(w)?(e.consume(w),o=String.fromCharCode(w),C):n(w)}function C(w){if(w===null||w===47||w===62||Ye(w)){const te=w===47,ke=o.toLowerCase();return!te&&!l&&Sd.includes(ke)?(i=1,r.interrupt?t(w):V(w)):_1.includes(o.toLowerCase())?(i=6,te?(e.consume(w),h):r.interrupt?t(w):V(w)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(w):l?m(w):g(w))}return w===45||rt(w)?(e.consume(w),o+=String.fromCharCode(w),C):n(w)}function h(w){return w===62?(e.consume(w),r.interrupt?t:V):n(w)}function m(w){return ie(w)?(e.consume(w),m):L(w)}function g(w){return w===47?(e.consume(w),L):w===58||w===95||At(w)?(e.consume(w),_):ie(w)?(e.consume(w),g):L(w)}function _(w){return w===45||w===46||w===58||w===95||rt(w)?(e.consume(w),_):b(w)}function b(w){return w===61?(e.consume(w),S):ie(w)?(e.consume(w),b):g(w)}function S(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),s=w,P):ie(w)?(e.consume(w),S):z(w)}function P(w){return w===s?(e.consume(w),s=null,O):w===null||q(w)?n(w):(e.consume(w),P)}function z(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Ye(w)?b(w):(e.consume(w),z)}function O(w){return w===47||w===62||ie(w)?g(w):n(w)}function L(w){return w===62?(e.consume(w),F):n(w)}function F(w){return w===null||q(w)?V(w):ie(w)?(e.consume(w),F):n(w)}function V(w){return w===45&&i===2?(e.consume(w),K):w===60&&i===1?(e.consume(w),ee):w===62&&i===4?(e.consume(w),U):w===63&&i===3?(e.consume(w),y):w===93&&i===5?(e.consume(w),H):q(w)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(E1,X,Y)(w)):w===null||q(w)?(e.exit("htmlFlowData"),Y(w)):(e.consume(w),V)}function Y(w){return e.check(b1,re,X)(w)}function re(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),j}function j(w){return w===null||q(w)?Y(w):(e.enter("htmlFlowData"),V(w))}function K(w){return w===45?(e.consume(w),y):V(w)}function ee(w){return w===47?(e.consume(w),o="",A):V(w)}function A(w){if(w===62){const te=o.toLowerCase();return Sd.includes(te)?(e.consume(w),U):V(w)}return At(w)&&o.length<8?(e.consume(w),o+=String.fromCharCode(w),A):V(w)}function H(w){return w===93?(e.consume(w),y):V(w)}function y(w){return w===62?(e.consume(w),U):w===45&&i===2?(e.consume(w),y):V(w)}function U(w){return w===null||q(w)?(e.exit("htmlFlowData"),X(w)):(e.consume(w),U)}function X(w){return e.exit("htmlFlow"),t(w)}}function z1(e,t,n){const r=this;return i;function i(o){return q(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):n(o)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function T1(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Eo,t,n)}}const L1={name:"htmlText",tokenize:I1};function I1(e,t,n){const r=this;let i,l,o;return a;function a(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),s}function s(y){return y===33?(e.consume(y),u):y===47?(e.consume(y),b):y===63?(e.consume(y),g):At(y)?(e.consume(y),z):n(y)}function u(y){return y===45?(e.consume(y),c):y===91?(e.consume(y),l=0,k):At(y)?(e.consume(y),m):n(y)}function c(y){return y===45?(e.consume(y),f):n(y)}function d(y){return y===null?n(y):y===45?(e.consume(y),p):q(y)?(o=d,ee(y)):(e.consume(y),d)}function p(y){return y===45?(e.consume(y),f):d(y)}function f(y){return y===62?K(y):y===45?p(y):d(y)}function k(y){const U="CDATA[";return y===U.charCodeAt(l++)?(e.consume(y),l===U.length?x:k):n(y)}function x(y){return y===null?n(y):y===93?(e.consume(y),C):q(y)?(o=x,ee(y)):(e.consume(y),x)}function C(y){return y===93?(e.consume(y),h):x(y)}function h(y){return y===62?K(y):y===93?(e.consume(y),h):x(y)}function m(y){return y===null||y===62?K(y):q(y)?(o=m,ee(y)):(e.consume(y),m)}function g(y){return y===null?n(y):y===63?(e.consume(y),_):q(y)?(o=g,ee(y)):(e.consume(y),g)}function _(y){return y===62?K(y):g(y)}function b(y){return At(y)?(e.consume(y),S):n(y)}function S(y){return y===45||rt(y)?(e.consume(y),S):P(y)}function P(y){return q(y)?(o=P,ee(y)):ie(y)?(e.consume(y),P):K(y)}function z(y){return y===45||rt(y)?(e.consume(y),z):y===47||y===62||Ye(y)?O(y):n(y)}function O(y){return y===47?(e.consume(y),K):y===58||y===95||At(y)?(e.consume(y),L):q(y)?(o=O,ee(y)):ie(y)?(e.consume(y),O):K(y)}function L(y){return y===45||y===46||y===58||y===95||rt(y)?(e.consume(y),L):F(y)}function F(y){return y===61?(e.consume(y),V):q(y)?(o=F,ee(y)):ie(y)?(e.consume(y),F):O(y)}function V(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),i=y,Y):q(y)?(o=V,ee(y)):ie(y)?(e.consume(y),V):(e.consume(y),re)}function Y(y){return y===i?(e.consume(y),i=void 0,j):y===null?n(y):q(y)?(o=Y,ee(y)):(e.consume(y),Y)}function re(y){return y===null||y===34||y===39||y===60||y===61||y===96?n(y):y===47||y===62||Ye(y)?O(y):(e.consume(y),re)}function j(y){return y===47||y===62||Ye(y)?O(y):n(y)}function K(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),t):n(y)}function ee(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),A}function A(y){return ie(y)?de(e,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):H(y)}function H(y){return e.enter("htmlTextData"),o(y)}}const Lu={name:"labelEnd",resolveAll:O1,resolveTo:M1,tokenize:D1},R1={tokenize:F1},A1={tokenize:B1},j1={tokenize:U1};function O1(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Dt(e,0,e.length,n),e}function M1(e,t){let n=e.length,r=0,i,l,o,a;for(;n--;)if(i=e[n][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const s={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},c={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return a=[["enter",s,t],["enter",u,t]],a=pt(a,e.slice(l+1,l+r+3)),a=pt(a,[["enter",c,t]]),a=pt(a,Tu(t.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),t)),a=pt(a,[["exit",c,t],e[o-2],e[o-1],["exit",u,t]]),a=pt(a,e.slice(o+1)),a=pt(a,[["exit",s,t]]),Dt(e,l,e.length,a),e}function D1(e,t,n){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return a;function a(p){return l?l._inactive?d(p):(o=r.parser.defined.includes(hr(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),s):n(p)}function s(p){return p===40?e.attempt(R1,c,o?c:d)(p):p===91?e.attempt(A1,c,o?u:d)(p):o?c(p):d(p)}function u(p){return e.attempt(j1,c,d)(p)}function c(p){return t(p)}function d(p){return l._balanced=!0,n(p)}}function F1(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return Ye(d)?li(e,l)(d):l(d)}function l(d){return d===41?c(d):Km(e,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return Ye(d)?li(e,s)(d):c(d)}function a(d){return n(d)}function s(d){return d===34||d===39||d===40?Qm(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function u(d){return Ye(d)?li(e,c)(d):c(d)}function c(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function B1(e,t,n){const r=this;return i;function i(a){return qm.call(r,e,l,o,"reference","referenceMarker","referenceString")(a)}function l(a){return r.parser.defined.includes(hr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function o(a){return n(a)}}function U1(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const W1={name:"labelStartImage",resolveAll:Lu.resolveAll,tokenize:V1};function V1(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),l}function l(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),o):n(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const H1={name:"labelStartLink",resolveAll:Lu.resolveAll,tokenize:$1};function $1(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const oa={name:"lineEnding",tokenize:X1};function X1(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),de(e,t,"linePrefix")}}const Cl={name:"thematicBreak",tokenize:K1};function K1(e,t,n){let r=0,i;return l;function l(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||q(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),ie(u)?de(e,a,"whitespace")(u):a(u))}}const He={continuation:{tokenize:G1},exit:J1,name:"list",tokenize:Y1},q1={partial:!0,tokenize:ew},Q1={partial:!0,tokenize:Z1};function Y1(e,t,n){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return a;function a(f){const k=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:Ss(f)){if(r.containerState.type||(r.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(Cl,n,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(f)}return n(f)}function s(f){return Ss(f)&&++o<10?(e.consume(f),s):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):n(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Eo,r.interrupt?n:c,e.attempt(q1,p,d))}function c(f){return r.containerState.initialBlankLine=!0,l++,p(f)}function d(f){return ie(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),p):n(f)}function p(f){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function G1(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Eo,i,l);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,de(e,t,"listItemIndent",r.containerState.size+1)(a)}function l(a){return r.containerState.furtherBlankLines||!ie(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Q1,t,o)(a))}function o(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,de(e,e.attempt(He,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Z1(e,t,n){const r=this;return de(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(l):n(l)}}function J1(e){e.exit(this.containerState.type)}function ew(e,t,n){const r=this;return de(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!ie(l)&&o&&o[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const _d={name:"setextUnderline",resolveTo:tw,tokenize:nw};function tw(e,t){let n=e.length,r,i,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function nw(e,t,n){const r=this;let i;return l;function l(u){let c=r.events.length,d;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){d=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=u,o(u)):n(u)}function o(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ie(u)?de(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||q(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const rw={tokenize:iw};function iw(e){const t=this,n=e.attempt(Eo,r,e.attempt(this.parser.constructs.flowInitial,i,de(e,e.attempt(this.parser.constructs.flow,i,e.attempt(u1,i)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const lw={resolveAll:Gm()},ow=Ym("string"),aw=Ym("text");function Ym(e){return{resolveAll:Gm(e==="text"?sw:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],l=n.attempt(i,o,a);return o;function o(c){return u(c)?l(c):a(c)}function a(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),s}function s(c){return u(c)?(n.exit("data"),l(c)):(n.consume(c),s)}function u(c){if(c===null)return!0;const d=i[c];let p=-1;if(d)for(;++p<d.length;){const f=d[p];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function Gm(e){return t;function t(n,r){let i=-1,l;for(;++i<=n.length;)l===void 0?n[i]&&n[i][1].type==="data"&&(l=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==l+2&&(n[l][1].end=n[i-1][1].end,n.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(n,r):n}}function sw(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let l=i.length,o=-1,a=0,s;for(;l--;){const u=i[l];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(u===-2)s=!0,a++;else if(u!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const uw={42:He,43:He,45:He,48:He,49:He,50:He,51:He,52:He,53:He,54:He,55:He,56:He,57:He,62:Vm},cw={91:m1},dw={[-2]:la,[-1]:la,32:la},pw={35:w1,42:Cl,45:[_d,Cl],60:C1,61:_d,95:Cl,96:kd,126:kd},fw={38:$m,92:Hm},mw={[-5]:oa,[-4]:oa,[-3]:oa,33:W1,38:$m,42:_s,60:[Hx,L1],91:H1,92:[v1,Hm],93:Lu,95:_s,96:r1},hw={null:[_s,lw]},gw={null:[42,95]},yw={null:[]},vw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:gw,contentInitial:cw,disable:yw,document:uw,flow:pw,flowInitial:dw,insideSpan:hw,string:fw,text:mw},Symbol.toStringTag,{value:"Module"}));function xw(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},l=[];let o=[],a=[];const s={attempt:P(b),check:P(S),consume:m,enter:g,exit:_,interrupt:P(S,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:k,parser:e,previous:null,sliceSerialize:p,sliceStream:f,write:d};let c=t.tokenize.call(u,s);return t.resolveAll&&l.push(t),u;function d(F){return o=pt(o,F),C(),o[o.length-1]!==null?[]:(z(t,0),u.events=Tu(l,u.events,u),u.events)}function p(F,V){return kw(f(F),V)}function f(F){return ww(o,F)}function k(){const{_bufferIndex:F,_index:V,line:Y,column:re,offset:j}=r;return{_bufferIndex:F,_index:V,line:Y,column:re,offset:j}}function x(F){i[F.line]=F.column,L()}function C(){let F;for(;r._index<o.length;){const V=o[r._index];if(typeof V=="string")for(F=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===F&&r._bufferIndex<V.length;)h(V.charCodeAt(r._bufferIndex));else h(V)}}function h(F){c=c(F)}function m(F){q(F)?(r.line++,r.column=1,r.offset+=F===-3?2:1,L()):F!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=F}function g(F,V){const Y=V||{};return Y.type=F,Y.start=k(),u.events.push(["enter",Y,u]),a.push(Y),Y}function _(F){const V=a.pop();return V.end=k(),u.events.push(["exit",V,u]),V}function b(F,V){z(F,V.from)}function S(F,V){V.restore()}function P(F,V){return Y;function Y(re,j,K){let ee,A,H,y;return Array.isArray(re)?X(re):"tokenize"in re?X([re]):U(re);function U(ae){return st;function st(B){const T=B!==null&&ae[B],M=B!==null&&ae.null,$=[...Array.isArray(T)?T:T?[T]:[],...Array.isArray(M)?M:M?[M]:[]];return X($)(B)}}function X(ae){return ee=ae,A=0,ae.length===0?K:w(ae[A])}function w(ae){return st;function st(B){return y=O(),H=ae,ae.partial||(u.currentConstruct=ae),ae.name&&u.parser.constructs.disable.null.includes(ae.name)?ke():ae.tokenize.call(V?Object.assign(Object.create(u),V):u,s,te,ke)(B)}}function te(ae){return F(H,y),j}function ke(ae){return y.restore(),++A<ee.length?w(ee[A]):K}}}function z(F,V){F.resolveAll&&!l.includes(F)&&l.push(F),F.resolve&&Dt(u.events,V,u.events.length-V,F.resolve(u.events.slice(V),u)),F.resolveTo&&(u.events=F.resolveTo(u.events,u))}function O(){const F=k(),V=u.previous,Y=u.currentConstruct,re=u.events.length,j=Array.from(a);return{from:re,restore:K};function K(){r=F,u.previous=V,u.currentConstruct=Y,u.events.length=re,a=j,L()}}function L(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ww(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,l=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,l)];else{if(o=e.slice(n,i),r>-1){const a=o[0];typeof a=="string"?o[0]=a.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function kw(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const l=e[n];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function Sw(e){const r={constructs:zx([vw,...(e||{}).extensions||[]]),content:i(Mx),defined:[],document:i(Fx),flow:i(rw),lazy:{},string:i(ow),text:i(aw)};return r;function i(l){return o;function o(a){return xw(r,l,a)}}}function _w(e){for(;!Xm(e););return e}const Cd=/[\0\t\n\r]/g;function Cw(){let e=1,t="",n=!0,r;return i;function i(l,o,a){const s=[];let u,c,d,p,f;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),d=0,t="",n&&(l.charCodeAt(0)===65279&&d++,n=void 0);d<l.length;){if(Cd.lastIndex=d,u=Cd.exec(l),p=u&&u.index!==void 0?u.index:l.length,f=l.charCodeAt(p),!u){t=l.slice(d);break}if(f===10&&d===p&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),d<p&&(s.push(l.slice(d,p)),e+=p-d),f){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}d=p+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}const Ew=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function bw(e){return e.replace(Ew,Pw)}function Pw(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),l=i===120||i===88;return Wm(n.slice(l?2:1),l?16:10)}return zu(n)||e}const Zm={}.hasOwnProperty;function Nw(e,t,n){return typeof t!="string"&&(n=t,t=void 0),zw(n)(_w(Sw(n).document().write(Cw()(e,t,!0))))}function zw(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Du),autolinkProtocol:O,autolinkEmail:O,atxHeading:l(zt),blockQuote:l(M),characterEscape:O,characterReference:O,codeFenced:l($),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l($,o),codeText:l(Ee,o),codeTextData:O,data:O,codeFlowValue:O,definition:l(ve),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(Fe),hardBreakEscape:l(Pn),hardBreakTrailing:l(Pn),htmlFlow:l(Nn,o),htmlFlowData:O,htmlText:l(Nn,o),htmlTextData:O,image:l(Ch),label:o,link:l(Du),listItem:l(Eh),listItemValue:p,listOrdered:l(Fu,d),listUnordered:l(Fu),paragraph:l(bh),reference:w,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(zt),strong:l(Ph),thematicBreak:l(zh)},exit:{atxHeading:s(),atxHeadingSequence:b,autolink:s(),autolinkEmail:T,autolinkProtocol:B,blockQuote:s(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:ae,characterReference:st,codeFenced:s(C),codeFencedFence:x,codeFencedFenceInfo:f,codeFencedFenceMeta:k,codeFlowValue:L,codeIndented:s(h),codeText:s(j),codeTextData:L,data:L,definition:s(),definitionDestinationString:_,definitionLabelString:m,definitionTitleString:g,emphasis:s(),hardBreakEscape:s(V),hardBreakTrailing:s(V),htmlFlow:s(Y),htmlFlowData:L,htmlText:s(re),htmlTextData:L,image:s(ee),label:H,labelText:A,lineEnding:F,link:s(K),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:te,resourceDestinationString:y,resourceTitleString:U,resource:X,setextHeading:s(z),setextHeadingLineSequence:P,setextHeadingText:S,strong:s(),thematicBreak:s()}};Jm(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(N){let D={type:"root",children:[]};const Q={stack:[D],tokenStack:[],config:t,enter:a,exit:u,buffer:o,resume:c,data:n},J=[];let se=-1;for(;++se<N.length;)if(N[se][1].type==="listOrdered"||N[se][1].type==="listUnordered")if(N[se][0]==="enter")J.push(se);else{const yt=J.pop();se=i(N,yt,se)}for(se=-1;++se<N.length;){const yt=t[N[se][0]];Zm.call(yt,N[se][1].type)&&yt[N[se][1].type].call(Object.assign({sliceSerialize:N[se][2].sliceSerialize},Q),N[se][1])}if(Q.tokenStack.length>0){const yt=Q.tokenStack[Q.tokenStack.length-1];(yt[1]||Ed).call(Q,void 0,yt[0])}for(D.position={start:Jt(N.length>0?N[0][1].start:{line:1,column:1,offset:0}),end:Jt(N.length>0?N[N.length-2][1].end:{line:1,column:1,offset:0})},se=-1;++se<t.transforms.length;)D=t.transforms[se](D)||D;return D}function i(N,D,Q){let J=D-1,se=-1,yt=!1,zn,Ft,Lr,Ir;for(;++J<=Q;){const Ze=N[J];switch(Ze[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ze[0]==="enter"?se++:se--,Ir=void 0;break}case"lineEndingBlank":{Ze[0]==="enter"&&(zn&&!Ir&&!se&&!Lr&&(Lr=J),Ir=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ir=void 0}if(!se&&Ze[0]==="enter"&&Ze[1].type==="listItemPrefix"||se===-1&&Ze[0]==="exit"&&(Ze[1].type==="listUnordered"||Ze[1].type==="listOrdered")){if(zn){let Xn=J;for(Ft=void 0;Xn--;){const Bt=N[Xn];if(Bt[1].type==="lineEnding"||Bt[1].type==="lineEndingBlank"){if(Bt[0]==="exit")continue;Ft&&(N[Ft][1].type="lineEndingBlank",yt=!0),Bt[1].type="lineEnding",Ft=Xn}else if(!(Bt[1].type==="linePrefix"||Bt[1].type==="blockQuotePrefix"||Bt[1].type==="blockQuotePrefixWhitespace"||Bt[1].type==="blockQuoteMarker"||Bt[1].type==="listItemIndent"))break}Lr&&(!Ft||Lr<Ft)&&(zn._spread=!0),zn.end=Object.assign({},Ft?N[Ft][1].start:Ze[1].end),N.splice(Ft||J,0,["exit",zn,Ze[2]]),J++,Q++}if(Ze[1].type==="listItemPrefix"){const Xn={type:"listItem",_spread:!1,start:Object.assign({},Ze[1].start),end:void 0};zn=Xn,N.splice(J,0,["enter",Xn,Ze[2]]),J++,Q++,Lr=void 0,Ir=!0}}}return N[D][1]._spread=yt,Q}function l(N,D){return Q;function Q(J){a.call(this,N(J),J),D&&D.call(this,J)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(N,D,Q){this.stack[this.stack.length-1].children.push(N),this.stack.push(N),this.tokenStack.push([D,Q||void 0]),N.position={start:Jt(D.start),end:void 0}}function s(N){return D;function D(Q){N&&N.call(this,Q),u.call(this,Q)}}function u(N,D){const Q=this.stack.pop(),J=this.tokenStack.pop();if(J)J[0].type!==N.type&&(D?D.call(this,N,J[0]):(J[1]||Ed).call(this,N,J[0]));else throw new Error("Cannot close `"+N.type+"` ("+ii({start:N.start,end:N.end})+"): it’s not open");Q.position.end=Jt(N.end)}function c(){return Px(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(N){if(this.data.expectingFirstListItemValue){const D=this.stack[this.stack.length-2];D.start=Number.parseInt(this.sliceSerialize(N),10),this.data.expectingFirstListItemValue=void 0}}function f(){const N=this.resume(),D=this.stack[this.stack.length-1];D.lang=N}function k(){const N=this.resume(),D=this.stack[this.stack.length-1];D.meta=N}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const N=this.resume(),D=this.stack[this.stack.length-1];D.value=N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const N=this.resume(),D=this.stack[this.stack.length-1];D.value=N.replace(/(\r?\n|\r)$/g,"")}function m(N){const D=this.resume(),Q=this.stack[this.stack.length-1];Q.label=D,Q.identifier=hr(this.sliceSerialize(N)).toLowerCase()}function g(){const N=this.resume(),D=this.stack[this.stack.length-1];D.title=N}function _(){const N=this.resume(),D=this.stack[this.stack.length-1];D.url=N}function b(N){const D=this.stack[this.stack.length-1];if(!D.depth){const Q=this.sliceSerialize(N).length;D.depth=Q}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function P(N){const D=this.stack[this.stack.length-1];D.depth=this.sliceSerialize(N).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function O(N){const Q=this.stack[this.stack.length-1].children;let J=Q[Q.length-1];(!J||J.type!=="text")&&(J=Nh(),J.position={start:Jt(N.start),end:void 0},Q.push(J)),this.stack.push(J)}function L(N){const D=this.stack.pop();D.value+=this.sliceSerialize(N),D.position.end=Jt(N.end)}function F(N){const D=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Q=D.children[D.children.length-1];Q.position.end=Jt(N.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(D.type)&&(O.call(this,N),L.call(this,N))}function V(){this.data.atHardBreak=!0}function Y(){const N=this.resume(),D=this.stack[this.stack.length-1];D.value=N}function re(){const N=this.resume(),D=this.stack[this.stack.length-1];D.value=N}function j(){const N=this.resume(),D=this.stack[this.stack.length-1];D.value=N}function K(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const D=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=D,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function ee(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const D=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=D,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function A(N){const D=this.sliceSerialize(N),Q=this.stack[this.stack.length-2];Q.label=bw(D),Q.identifier=hr(D).toLowerCase()}function H(){const N=this.stack[this.stack.length-1],D=this.resume(),Q=this.stack[this.stack.length-1];if(this.data.inReference=!0,Q.type==="link"){const J=N.children;Q.children=J}else Q.alt=D}function y(){const N=this.resume(),D=this.stack[this.stack.length-1];D.url=N}function U(){const N=this.resume(),D=this.stack[this.stack.length-1];D.title=N}function X(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function te(N){const D=this.resume(),Q=this.stack[this.stack.length-1];Q.label=D,Q.identifier=hr(this.sliceSerialize(N)).toLowerCase(),this.data.referenceType="full"}function ke(N){this.data.characterReferenceType=N.type}function ae(N){const D=this.sliceSerialize(N),Q=this.data.characterReferenceType;let J;Q?(J=Wm(D,Q==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):J=zu(D);const se=this.stack[this.stack.length-1];se.value+=J}function st(N){const D=this.stack.pop();D.position.end=Jt(N.end)}function B(N){L.call(this,N);const D=this.stack[this.stack.length-1];D.url=this.sliceSerialize(N)}function T(N){L.call(this,N);const D=this.stack[this.stack.length-1];D.url="mailto:"+this.sliceSerialize(N)}function M(){return{type:"blockquote",children:[]}}function $(){return{type:"code",lang:null,meta:null,value:""}}function Ee(){return{type:"inlineCode",value:""}}function ve(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Fe(){return{type:"emphasis",children:[]}}function zt(){return{type:"heading",depth:0,children:[]}}function Pn(){return{type:"break"}}function Nn(){return{type:"html",value:""}}function Ch(){return{type:"image",title:null,url:"",alt:null}}function Du(){return{type:"link",title:null,url:"",children:[]}}function Fu(N){return{type:"list",ordered:N.type==="listOrdered",start:null,spread:N._spread,children:[]}}function Eh(N){return{type:"listItem",spread:N._spread,checked:null,children:[]}}function bh(){return{type:"paragraph",children:[]}}function Ph(){return{type:"strong",children:[]}}function Nh(){return{type:"text",value:""}}function zh(){return{type:"thematicBreak"}}}function Jt(e){return{line:e.line,column:e.column,offset:e.offset}}function Jm(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Jm(e,r):Tw(e,r)}}function Tw(e,t){let n;for(n in t)if(Zm.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Ed(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ii({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ii({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ii({start:t.start,end:t.end})+") is still open")}function Lw(e){const t=this;t.parser=n;function n(r){return Nw(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Iw(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Rw(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Aw(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function jw(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ow(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Mw(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Tr(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let o,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=l+1,a+=1,e.footnoteCounts.set(r,a);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Dw(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fw(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function eh(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Bw(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return eh(e,t);const i={src:Tr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,l),e.applyData(t,l)}function Uw(e,t){const n={src:Tr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Ww(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Vw(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return eh(e,t);const i={href:Tr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function Hw(e,t){const n={href:Tr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function $w(e,t,n){const r=e.all(t),i=n?Xw(n):th(t),l={},o=[];if(typeof t.checked=="boolean"){const c=r[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const c=r[a];(i||a!==0||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?o.push(...c.children):o.push(c)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:l,children:o};return e.patch(t,u),e.applyData(t,u)}function Xw(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=th(n[r])}return t}function th(e){const t=e.spread;return t??e.children.length>1}function Kw(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function qw(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Qw(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Yw(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gw(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Eu(t.children[1]),s=jm(t.children[t.children.length-1]);a&&s&&(o.position={start:a,end:s}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,l),e.applyData(t,l)}function Zw(e,t,n){const r=n?n.children:void 0,l=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,a=o?o.length:t.children.length;let s=-1;const u=[];for(;++s<a;){const d=t.children[s],p={},f=o?o[s]:void 0;f&&(p.align=f);let k={type:"element",tagName:l,properties:p,children:[]};d&&(k.children=e.all(d),e.patch(d,k),k=e.applyData(d,k)),u.push(k)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,c),e.applyData(t,c)}function Jw(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const bd=9,Pd=32;function ek(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const l=[];for(;r;)l.push(Nd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return l.push(Nd(t.slice(i),i>0,!1)),l.join("")}function Nd(e,t,n){let r=0,i=e.length;if(t){let l=e.codePointAt(r);for(;l===bd||l===Pd;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(i-1);for(;l===bd||l===Pd;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function tk(e,t){const n={type:"text",value:ek(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function nk(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const rk={blockquote:Iw,break:Rw,code:Aw,delete:jw,emphasis:Ow,footnoteReference:Mw,heading:Dw,html:Fw,imageReference:Bw,image:Uw,inlineCode:Ww,linkReference:Vw,link:Hw,listItem:$w,list:Kw,paragraph:qw,root:Qw,strong:Yw,table:Gw,tableCell:Jw,tableRow:Zw,text:tk,thematicBreak:nk,toml:il,yaml:il,definition:il,footnoteDefinition:il};function il(){}const nh=-1,bo=0,oi=1,Jl=2,Iu=3,Ru=4,Au=5,ju=6,rh=7,ih=8,zd=typeof self=="object"?self:globalThis,ik=(e,t)=>{const n=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,o]=t[i];switch(l){case bo:case nh:return n(o,i);case oi:{const a=n([],i);for(const s of o)a.push(r(s));return a}case Jl:{const a=n({},i);for(const[s,u]of o)a[r(s)]=r(u);return a}case Iu:return n(new Date(o),i);case Ru:{const{source:a,flags:s}=o;return n(new RegExp(a,s),i)}case Au:{const a=n(new Map,i);for(const[s,u]of o)a.set(r(s),r(u));return a}case ju:{const a=n(new Set,i);for(const s of o)a.add(r(s));return a}case rh:{const{name:a,message:s}=o;return n(new zd[a](s),i)}case ih:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:a}=new Uint8Array(o);return n(new DataView(a),o)}}return n(new zd[l](o),i)};return r},Td=e=>ik(new Map,e)(0),qn="",{toString:lk}={},{keys:ok}=Object,Wr=e=>{const t=typeof e;if(t!=="object"||!e)return[bo,t];const n=lk.call(e).slice(8,-1);switch(n){case"Array":return[oi,qn];case"Object":return[Jl,qn];case"Date":return[Iu,qn];case"RegExp":return[Ru,qn];case"Map":return[Au,qn];case"Set":return[ju,qn];case"DataView":return[oi,n]}return n.includes("Array")?[oi,n]:n.includes("Error")?[rh,n]:[Jl,n]},ll=([e,t])=>e===bo&&(t==="function"||t==="symbol"),ak=(e,t,n,r)=>{const i=(o,a)=>{const s=r.push(o)-1;return n.set(a,s),s},l=o=>{if(n.has(o))return n.get(o);let[a,s]=Wr(o);switch(a){case bo:{let c=o;switch(s){case"bigint":a=ih,c=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case"undefined":return i([nh],o)}return i([a,c],o)}case oi:{if(s){let p=o;return s==="DataView"?p=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(p=new Uint8Array(o)),i([s,[...p]],o)}const c=[],d=i([a,c],o);for(const p of o)c.push(l(p));return d}case Jl:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(t&&"toJSON"in o)return l(o.toJSON());const c=[],d=i([a,c],o);for(const p of ok(o))(e||!ll(Wr(o[p])))&&c.push([l(p),l(o[p])]);return d}case Iu:return i([a,o.toISOString()],o);case Ru:{const{source:c,flags:d}=o;return i([a,{source:c,flags:d}],o)}case Au:{const c=[],d=i([a,c],o);for(const[p,f]of o)(e||!(ll(Wr(p))||ll(Wr(f))))&&c.push([l(p),l(f)]);return d}case ju:{const c=[],d=i([a,c],o);for(const p of o)(e||!ll(Wr(p)))&&c.push(l(p));return d}}const{message:u}=o;return i([a,{name:s,message:u}],o)};return l},Ld=(e,{json:t,lossy:n}={})=>{const r=[];return ak(!(t||n),!!t,new Map,r)(e),r},eo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Td(Ld(e,t)):structuredClone(e):(e,t)=>Td(Ld(e,t));function sk(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function uk(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function ck(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||sk,r=e.options.footnoteBackLabel||uk,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const c=e.all(u),d=String(u.identifier).toUpperCase(),p=Tr(d.toLowerCase());let f=0;const k=[],x=e.footnoteCounts.get(d);for(;x!==void 0&&++f<=x;){k.length>0&&k.push({type:"text",value:" "});let m=typeof n=="string"?n:n(s,f);typeof m=="string"&&(m={type:"text",value:m}),k.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,f),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const C=c[c.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const m=C.children[C.children.length-1];m&&m.type==="text"?m.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...k)}else c.push(...k);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(c,!0)};e.patch(u,h),a.push(h)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...eo(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const lh=function(e){if(e==null)return mk;if(typeof e=="function")return Po(e);if(typeof e=="object")return Array.isArray(e)?dk(e):pk(e);if(typeof e=="string")return fk(e);throw new Error("Expected function, string, or object as test")};function dk(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=lh(e[n]);return Po(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].apply(this,i))return!0;return!1}}function pk(e){const t=e;return Po(n);function n(r){const i=r;let l;for(l in e)if(i[l]!==t[l])return!1;return!0}}function fk(e){return Po(t);function t(n){return n&&n.type===e}}function Po(e){return t;function t(n,r,i){return!!(hk(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function mk(){return!0}function hk(e){return e!==null&&typeof e=="object"&&"type"in e}const oh=[],gk=!0,Id=!1,yk="skip";function vk(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const l=lh(i),o=r?-1:1;a(e,void 0,[])();function a(s,u,c){const d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){const f=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"})}return p;function p(){let f=oh,k,x,C;if((!t||l(s,u,c[c.length-1]||void 0))&&(f=xk(n(s,c)),f[0]===Id))return f;if("children"in s&&s.children){const h=s;if(h.children&&f[0]!==yk)for(x=(r?h.children.length:-1)+o,C=c.concat(h);x>-1&&x<h.children.length;){const m=h.children[x];if(k=a(m,x,C)(),k[0]===Id)return k;x=typeof k[1]=="number"?k[1]:x+o}}return f}}}function xk(e){return Array.isArray(e)?e:typeof e=="number"?[gk,e]:e==null?oh:[e]}function ah(e,t,n,r){let i,l,o;typeof t=="function"&&typeof n!="function"?(l=void 0,o=t,i=n):(l=t,o=n,i=r),vk(e,l,a,i);function a(s,u){const c=u[u.length-1],d=c?c.children.indexOf(s):void 0;return o(s,d,c)}}const Cs={}.hasOwnProperty,wk={};function kk(e,t){const n=t||wk,r=new Map,i=new Map,l=new Map,o={...rk,...n.handlers},a={all:u,applyData:_k,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:s,options:n,patch:Sk,wrap:Ek};return ah(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const d=c.type==="definition"?r:i,p=String(c.identifier).toUpperCase();d.has(p)||d.set(p,c)}}),a;function s(c,d){const p=c.type,f=a.handlers[p];if(Cs.call(a.handlers,p)&&f)return f(a,c,d);if(a.options.passThrough&&a.options.passThrough.includes(p)){if("children"in c){const{children:x,...C}=c,h=eo(C);return h.children=a.all(c),h}return eo(c)}return(a.options.unknownHandler||Ck)(a,c,d)}function u(c){const d=[];if("children"in c){const p=c.children;let f=-1;for(;++f<p.length;){const k=a.one(p[f],c);if(k){if(f&&p[f-1].type==="break"&&(!Array.isArray(k)&&k.type==="text"&&(k.value=Rd(k.value)),!Array.isArray(k)&&k.type==="element")){const x=k.children[0];x&&x.type==="text"&&(x.value=Rd(x.value))}Array.isArray(k)?d.push(...k):d.push(k)}}}return d}}function Sk(e,t){e.position&&(t.position=lx(e))}function _k(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&l&&Object.assign(n.properties,eo(l)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Ck(e,t){const n=t.data||{},r="value"in t&&!(Cs.call(n,"hProperties")||Cs.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ek(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Rd(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ad(e,t){const n=kk(e,t),r=n.one(e,void 0),i=ck(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function bk(e,t){return e&&"run"in e?async function(n,r){const i=Ad(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ad(n,{file:r,...e||t})}}function jd(e){if(e)throw e}var El=Object.prototype.hasOwnProperty,sh=Object.prototype.toString,Od=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,Dd=function(t){return typeof Array.isArray=="function"?Array.isArray(t):sh.call(t)==="[object Array]"},Fd=function(t){if(!t||sh.call(t)!=="[object Object]")return!1;var n=El.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&El.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||El.call(t,i)},Bd=function(t,n){Od&&n.name==="__proto__"?Od(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Ud=function(t,n){if(n==="__proto__")if(El.call(t,n)){if(Md)return Md(t,n).value}else return;return t[n]},Pk=function e(){var t,n,r,i,l,o,a=arguments[0],s=1,u=arguments.length,c=!1;for(typeof a=="boolean"&&(c=a,a=arguments[1]||{},s=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=Ud(a,n),i=Ud(t,n),a!==i&&(c&&i&&(Fd(i)||(l=Dd(i)))?(l?(l=!1,o=r&&Dd(r)?r:[]):o=r&&Fd(r)?r:{},Bd(a,{name:n,newValue:e(c,o,i)})):typeof i<"u"&&Bd(a,{name:n,newValue:i}));return a};const aa=ro(Pk);function Es(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Nk(){const e=[],t={run:n,use:r};return t;function n(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...i);function a(s,...u){const c=e[++l];let d=-1;if(s){o(s);return}for(;++d<i.length;)(u[d]===null||u[d]===void 0)&&(u[d]=i[d]);i=u,c?zk(c,a)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function zk(e,t){let n;return r;function r(...o){const a=e.length>o.length;let s;a&&o.push(i);try{s=e.apply(this,o)}catch(u){const c=u;if(a&&n)throw c;return i(c)}a||(s&&s.then&&typeof s.then=="function"?s.then(l,i):s instanceof Error?i(s):l(s))}function i(o,...a){n||(n=!0,t(o,...a))}function l(o){i(null,o)}}const It={basename:Tk,dirname:Lk,extname:Ik,join:Rk,sep:"/"};function Tk(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Fi(e);let n=0,r=-1,i=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else o<0&&(l=!0,o=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function Lk(e){if(Fi(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Ik(e){Fi(e);let t=e.length,n=-1,r=0,i=-1,l=0,o;for(;t--;){const a=e.codePointAt(t);if(a===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),a===46?i<0?i=t:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||n<0||l===0||l===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Rk(...e){let t=-1,n;for(;++t<e.length;)Fi(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Ak(n)}function Ak(e){Fi(e);const t=e.codePointAt(0)===47;let n=jk(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function jk(e,t){let n="",r=0,i=-1,l=0,o=-1,a,s;for(;++o<=e.length;){if(o<e.length)a=e.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=o,l=0;continue}}else if(n.length>0){n="",r=0,i=o,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,l=0}else a===46&&l>-1?l++:l=-1}return n}function Fi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Ok={cwd:Mk};function Mk(){return"/"}function bs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Dk(e){if(typeof e=="string")e=new URL(e);else if(!bs(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Fk(e)}function Fk(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const sa=["history","path","basename","stem","extname","dirname"];class uh{constructor(t){let n;t?bs(t)?n={path:t}:typeof t=="string"||Bk(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Ok.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<sa.length;){const l=sa[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let i;for(i in n)sa.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?It.basename(this.path):void 0}set basename(t){ca(t,"basename"),ua(t,"basename"),this.path=It.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?It.dirname(this.path):void 0}set dirname(t){Wd(this.basename,"dirname"),this.path=It.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?It.extname(this.path):void 0}set extname(t){if(ua(t,"extname"),Wd(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=It.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){bs(t)&&(t=Dk(t)),ca(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?It.basename(this.path,this.extname):void 0}set stem(t){ca(t,"stem"),ua(t,"stem"),this.path=It.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new De(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function ua(e,t){if(e&&e.includes(It.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+It.sep+"`")}function ca(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Wd(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Bk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Uk=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},Wk={}.hasOwnProperty;class Ou extends Uk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Nk()}copy(){const t=new Ou;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(aa(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(fa("data",this.frozen),this.namespace[t]=n,this):Wk.call(this.namespace,t)&&this.namespace[t]||void 0:t?(fa("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=ol(t),r=this.parser||this.Parser;return da("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),da("process",this.parser||this.Parser),pa("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(l,o){const a=ol(t),s=r.parse(a);r.run(s,a,function(c,d,p){if(c||!d||!p)return u(c);const f=d,k=r.stringify(f,p);$k(k)?p.value=k:p.result=k,u(c,p)});function u(c,d){c||!d?o(c):l?l(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),da("processSync",this.parser||this.Parser),pa("processSync",this.compiler||this.Compiler),this.process(t,i),Hd("processSync","process",n),r;function i(l,o){n=!0,jd(l),r=o}}run(t,n,r){Vd(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(o,a){const s=ol(n);i.run(t,s,u);function u(c,d,p){const f=d||t;c?a(c):o?o(f):r(void 0,f,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,l),Hd("runSync","run",r),i;function l(o,a){jd(o),i=a,r=!0}}stringify(t,n){this.freeze();const r=ol(n),i=this.compiler||this.Compiler;return pa("stringify",i),Vd(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(fa("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function l(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...d]=u;s(c,d)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=aa(!0,i.settings,u.settings))}function a(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const d=u[c];l(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let d=-1,p=-1;for(;++d<r.length;)if(r[d][0]===u){p=d;break}if(p===-1)r.push([u,...c]);else if(c.length>0){let[f,...k]=c;const x=r[p][1];Es(x)&&Es(f)&&(f=aa(!0,x,f)),r[p]=[u,f,...k]}}}}const Vk=new Ou().freeze();function da(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function pa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function fa(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Vd(e){if(!Es(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Hd(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ol(e){return Hk(e)?e:new uh(e)}function Hk(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function $k(e){return typeof e=="string"||Xk(e)}function Xk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Kk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",$d=[],Xd={allowDangerousHtml:!0},qk=/^(https?|ircs?|mailto|xmpp)$/i,Qk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ch(e){const t=Yk(e),n=Gk(e);return Zk(t.runSync(t.parse(n),n),e)}function Yk(e){const t=e.rehypePlugins||$d,n=e.remarkPlugins||$d,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Xd}:Xd;return Vk().use(Lw).use(n).use(bk,r).use(t)}function Gk(e){const t=e.children||"",n=new uh;return typeof t=="string"&&(n.value=t),n}function Zk(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,l=t.disallowedElements,o=t.skipHtml,a=t.unwrapDisallowed,s=t.urlTransform||Jk;for(const c of Qk)Object.hasOwn(t,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+Kk+c.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),ah(e,u),cx(e,{Fragment:v.Fragment,components:i,ignoreInvalidStyle:!0,jsx:v.jsx,jsxs:v.jsxs,passKeys:!0,passNode:!0});function u(c,d,p){if(c.type==="raw"&&p&&typeof d=="number")return o?p.children.splice(d,1):p.children[d]={type:"text",value:c.value},d;if(c.type==="element"){let f;for(f in ia)if(Object.hasOwn(ia,f)&&Object.hasOwn(c.properties,f)){const k=c.properties[f],x=ia[f];(x===null||x.includes(c.tagName))&&(c.properties[f]=s(String(k||""),f,c))}}if(c.type==="element"){let f=n?!n.includes(c.tagName):l?l.includes(c.tagName):!1;if(!f&&r&&typeof d=="number"&&(f=!r(c,d,p)),f&&p&&typeof d=="number")return a&&c.children?p.children.splice(d,1,...c.children):p.children.splice(d,1),d}}}function Jk(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||qk.test(e.slice(0,t))?e:""}const eS=[{id:"numpy-array-sum",title:"Array Sum",section:"python-basics",difficulty:"easy",description:`
## Array Sum

Given a NumPy array of numbers, implement a function that returns the sum of all elements.

### Function Signature
\`\`\`python
def array_sum(arr: np.ndarray) -> float:
\`\`\`

### Constraints
- Array length: 1 <= n <= 1000
- Element values: -10^6 <= arr[i] <= 10^6
    `,examples:[{input:"np.array([1, 2, 3, 4, 5])",output:"15",explanation:"1 + 2 + 3 + 4 + 5 = 15"},{input:"np.array([-1, 0, 1])",output:"0",explanation:"-1 + 0 + 1 = 0"}],starterCode:`import numpy as np

def array_sum(arr: np.ndarray) -> float:
    """
    Calculate the sum of all elements in a NumPy array.

    Args:
        arr: A NumPy array of numbers

    Returns:
        The sum of all elements
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic positive numbers",input:"[1, 2, 3, 4, 5]",expected:"15",hidden:!1},{id:"2",description:"With negatives",input:"[-1, 0, 1]",expected:"0",hidden:!1},{id:"3",description:"Single element",input:"[42]",expected:"42",hidden:!1},{id:"4",description:"Larger array",input:"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",expected:"55",hidden:!0}],hints:["NumPy arrays have built-in methods for common operations.","Try using np.sum() or the .sum() method on the array."],solution:`import numpy as np

def array_sum(arr: np.ndarray) -> float:
    """
    Calculate the sum of all elements in a NumPy array.
    """
    return np.sum(arr)
`},{id:"numpy-matrix-multiply",title:"Matrix Multiplication",section:"python-basics",difficulty:"medium",description:`
## Matrix Multiplication

Implement matrix multiplication between two 2D NumPy arrays.

### Function Signature
\`\`\`python
def matrix_multiply(A: np.ndarray, B: np.ndarray) -> np.ndarray:
\`\`\`

### Constraints
- A has shape (m, n)
- B has shape (n, p)
- Result has shape (m, p)
- 1 <= m, n, p <= 100

### Note
You should use NumPy's built-in functions, not manual loops.
    `,examples:[{input:"A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]",output:"[[19, 22], [43, 50]]",explanation:"Standard matrix multiplication"}],starterCode:`import numpy as np

def matrix_multiply(A: np.ndarray, B: np.ndarray) -> np.ndarray:
    """
    Multiply two matrices A and B.

    Args:
        A: First matrix of shape (m, n)
        B: Second matrix of shape (n, p)

    Returns:
        Result matrix of shape (m, p)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"2x2 matrices",input:"([[1, 2], [3, 4]], [[5, 6], [7, 8]])",expected:"[[19, 22], [43, 50]]",hidden:!1},{id:"2",description:"Identity multiplication",input:"([[1, 0], [0, 1]], [[5, 6], [7, 8]])",expected:"[[5, 6], [7, 8]]",hidden:!1},{id:"3",description:"Different dimensions",input:"([[1, 2, 3]], [[1], [2], [3]])",expected:"[[14]]",hidden:!0}],hints:["NumPy provides several ways to do matrix multiplication.","Try np.dot(), np.matmul(), or the @ operator."],solution:`import numpy as np

def matrix_multiply(A: np.ndarray, B: np.ndarray) -> np.ndarray:
    """
    Multiply two matrices A and B.
    """
    return np.dot(A, B)
    # Alternative: return A @ B
    # Alternative: return np.matmul(A, B)
`},{id:"numpy-broadcast-add",title:"Broadcasting Addition",section:"python-basics",difficulty:"medium",description:`
## Broadcasting Addition

Given a 2D matrix and a 1D vector, add the vector to each row of the matrix using broadcasting.

### Function Signature
\`\`\`python
def broadcast_add(matrix: np.ndarray, vector: np.ndarray) -> np.ndarray:
\`\`\`

### Constraints
- Matrix has shape (m, n)
- Vector has shape (n,)
- 1 <= m, n <= 100

### Note
Broadcasting is a powerful NumPy feature that allows operations between arrays of different shapes.
    `,examples:[{input:"matrix = [[1, 2, 3], [4, 5, 6]], vector = [10, 20, 30]",output:"[[11, 22, 33], [14, 25, 36]]",explanation:"Vector is added to each row"}],starterCode:`import numpy as np

def broadcast_add(matrix: np.ndarray, vector: np.ndarray) -> np.ndarray:
    """
    Add a vector to each row of a matrix using broadcasting.

    Args:
        matrix: 2D array of shape (m, n)
        vector: 1D array of shape (n,)

    Returns:
        Result matrix of shape (m, n)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic broadcasting",input:"([[1, 2, 3], [4, 5, 6]], [10, 20, 30])",expected:"[[11, 22, 33], [14, 25, 36]]",hidden:!1},{id:"2",description:"With zeros",input:"([[1, 2], [3, 4]], [0, 0])",expected:"[[1, 2], [3, 4]]",hidden:!1},{id:"3",description:"Negative values",input:"([[1, 2], [3, 4]], [-1, -2])",expected:"[[0, 0], [2, 2]]",hidden:!0}],hints:["NumPy automatically broadcasts the vector across rows.","Simply use the + operator - NumPy handles the rest!"],solution:`import numpy as np

def broadcast_add(matrix: np.ndarray, vector: np.ndarray) -> np.ndarray:
    """
    Add a vector to each row of a matrix using broadcasting.
    """
    return matrix + vector
`}],tS=[{id:"normalize-features",title:"Normalize Features",section:"data-preprocessing",difficulty:"easy",description:`
## Normalize Features (Min-Max Scaling)

Implement min-max normalization to scale features to the range [0, 1].

### Formula
\`\`\`
X_normalized = (X - X_min) / (X_max - X_min)
\`\`\`

### Function Signature
\`\`\`python
def normalize(arr: np.ndarray) -> np.ndarray:
\`\`\`

### Constraints
- Input is a 1D array
- Array length: 2 <= n <= 1000
- All elements are finite numbers
    `,examples:[{input:"np.array([1, 2, 3, 4, 5])",output:"[0.0, 0.25, 0.5, 0.75, 1.0]",explanation:"min=1, max=5, so (x-1)/(5-1) gives [0, 0.25, 0.5, 0.75, 1]"}],starterCode:`import numpy as np

def normalize(arr: np.ndarray) -> np.ndarray:
    """
    Apply min-max normalization to scale values to [0, 1].

    Args:
        arr: Input array of numbers

    Returns:
        Normalized array with values in [0, 1]
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic normalization",input:"[1, 2, 3, 4, 5]",expected:"[0.0, 0.25, 0.5, 0.75, 1.0]",hidden:!1},{id:"2",description:"With negative values",input:"[-10, 0, 10]",expected:"[0.0, 0.5, 1.0]",hidden:!1},{id:"3",description:"Larger range",input:"[0, 50, 100]",expected:"[0.0, 0.5, 1.0]",hidden:!0}],hints:["Use np.min() and np.max() to find the range.","Apply the formula: (x - min) / (max - min)"],solution:`import numpy as np

def normalize(arr: np.ndarray) -> np.ndarray:
    """
    Apply min-max normalization to scale values to [0, 1].
    """
    arr_min = np.min(arr)
    arr_max = np.max(arr)
    return (arr - arr_min) / (arr_max - arr_min)
`},{id:"handle-missing-data",title:"Handle Missing Data",section:"data-preprocessing",difficulty:"medium",description:`
## Handle Missing Data

Replace NaN (missing) values in an array with the mean of non-NaN values.

### Function Signature
\`\`\`python
def fill_missing_with_mean(arr: np.ndarray) -> np.ndarray:
\`\`\`

### Constraints
- Input is a 1D array
- Array contains at least one non-NaN value
- NaN values are represented as np.nan
    `,examples:[{input:"np.array([1.0, np.nan, 3.0, np.nan, 5.0])",output:"[1.0, 3.0, 3.0, 3.0, 5.0]",explanation:"Mean of [1, 3, 5] is 3, which replaces NaN values"}],starterCode:`import numpy as np

def fill_missing_with_mean(arr: np.ndarray) -> np.ndarray:
    """
    Replace NaN values with the mean of non-NaN values.

    Args:
        arr: Input array that may contain NaN values

    Returns:
        Array with NaN values replaced by the mean
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic case",input:'[1.0, float("nan"), 3.0, float("nan"), 5.0]',expected:"[1.0, 3.0, 3.0, 3.0, 5.0]",hidden:!1},{id:"2",description:"Single NaN",input:'[2.0, 4.0, float("nan"), 6.0]',expected:"[2.0, 4.0, 4.0, 6.0]",hidden:!1},{id:"3",description:"NaN at start",input:'[float("nan"), 10.0, 20.0]',expected:"[15.0, 10.0, 20.0]",hidden:!0}],hints:["Use np.isnan() to find NaN values.","Use np.nanmean() to compute mean ignoring NaN values.","Use boolean indexing to replace values."],solution:`import numpy as np

def fill_missing_with_mean(arr: np.ndarray) -> np.ndarray:
    """
    Replace NaN values with the mean of non-NaN values.
    """
    arr = arr.copy()  # Don't modify original
    mean_val = np.nanmean(arr)
    arr[np.isnan(arr)] = mean_val
    return arr
`},{id:"one-hot-encode",title:"One-Hot Encoding",section:"data-preprocessing",difficulty:"medium",description:`
## One-Hot Encoding

Convert an array of categorical integers to one-hot encoded format.

### Function Signature
\`\`\`python
def one_hot_encode(labels: np.ndarray, num_classes: int) -> np.ndarray:
\`\`\`

### Example
For labels [0, 1, 2] with 3 classes:
\`\`\`
[[1, 0, 0],
 [0, 1, 0],
 [0, 0, 1]]
\`\`\`

### Constraints
- Labels are integers in range [0, num_classes - 1]
- 1 <= num_classes <= 100
    `,examples:[{input:"labels = [0, 1, 2, 1], num_classes = 3",output:"[[1, 0, 0], [0, 1, 0], [0, 0, 1], [0, 1, 0]]",explanation:"Each label becomes a row with 1 at the label index"}],starterCode:`import numpy as np

def one_hot_encode(labels: np.ndarray, num_classes: int) -> np.ndarray:
    """
    Convert integer labels to one-hot encoded format.

    Args:
        labels: 1D array of integer labels
        num_classes: Total number of classes

    Returns:
        2D array of shape (len(labels), num_classes)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic encoding",input:"([0, 1, 2], 3)",expected:"[[1, 0, 0], [0, 1, 0], [0, 0, 1]]",hidden:!1},{id:"2",description:"Repeated labels",input:"([0, 0, 1, 1], 2)",expected:"[[1, 0], [1, 0], [0, 1], [0, 1]]",hidden:!1},{id:"3",description:"More classes than used",input:"([0, 2], 4)",expected:"[[1, 0, 0, 0], [0, 0, 1, 0]]",hidden:!0}],hints:["Create a zeros matrix of shape (num_samples, num_classes).","Use array indexing to set the appropriate positions to 1.","np.eye() can be useful for creating one-hot encodings."],solution:`import numpy as np

def one_hot_encode(labels: np.ndarray, num_classes: int) -> np.ndarray:
    """
    Convert integer labels to one-hot encoded format.
    """
    # Method 1: Using np.eye
    return np.eye(num_classes)[labels].astype(int)

    # Method 2: Manual approach
    # one_hot = np.zeros((len(labels), num_classes), dtype=int)
    # one_hot[np.arange(len(labels)), labels] = 1
    # return one_hot
`}],nS=[{id:"linear-regression-gd",title:"Linear Regression with Gradient Descent",section:"supervised-learning",difficulty:"medium",description:`
## Linear Regression with Gradient Descent

Implement simple linear regression using gradient descent optimization.

### Model
\`\`\`
y = w * x + b
\`\`\`

### Gradient Descent Updates
\`\`\`
w = w - learning_rate * dw
b = b - learning_rate * db
\`\`\`

Where:
- dw = (2/n) * sum((y_pred - y) * x)
- db = (2/n) * sum(y_pred - y)

### Function Signature
\`\`\`python
def linear_regression(X: np.ndarray, y: np.ndarray,
                      learning_rate: float, iterations: int) -> tuple:
\`\`\`

Returns (w, b) - the learned weight and bias.
    `,examples:[{input:"X = [1, 2, 3, 4], y = [2, 4, 6, 8], lr = 0.1, iters = 1000",output:"w ≈ 2.0, b ≈ 0.0",explanation:"The true relationship is y = 2x, so w should be close to 2"}],starterCode:`import numpy as np

def linear_regression(X: np.ndarray, y: np.ndarray,
                      learning_rate: float = 0.01,
                      iterations: int = 1000) -> tuple:
    """
    Train a simple linear regression model using gradient descent.

    Args:
        X: Input features (1D array)
        y: Target values (1D array)
        learning_rate: Step size for gradient descent
        iterations: Number of training iterations

    Returns:
        Tuple of (weight, bias)
    """
    # Initialize parameters
    w = 0.0
    b = 0.0
    n = len(X)

    # Your gradient descent implementation here
    pass

    return (round(w, 2), round(b, 2))
`,testCases:[{id:"1",description:"Perfect linear relationship",input:"([1, 2, 3, 4], [2, 4, 6, 8], 0.1, 1000)",expected:"(2.0, 0.0)",hidden:!1},{id:"2",description:"With intercept",input:"([1, 2, 3, 4], [3, 5, 7, 9], 0.1, 1000)",expected:"(2.0, 1.0)",hidden:!1},{id:"3",description:"Different slope",input:"([0, 1, 2, 3], [1, 4, 7, 10], 0.1, 1000)",expected:"(3.0, 1.0)",hidden:!0}],hints:["First compute predictions: y_pred = w * X + b","Then compute gradients: dw = (2/n) * sum((y_pred - y) * X)","Update weights: w = w - learning_rate * dw"],solution:`import numpy as np

def linear_regression(X: np.ndarray, y: np.ndarray,
                      learning_rate: float = 0.01,
                      iterations: int = 1000) -> tuple:
    """
    Train a simple linear regression model using gradient descent.
    """
    w = 0.0
    b = 0.0
    n = len(X)

    for _ in range(iterations):
        # Forward pass
        y_pred = w * X + b

        # Compute gradients
        dw = (2/n) * np.sum((y_pred - y) * X)
        db = (2/n) * np.sum(y_pred - y)

        # Update parameters
        w = w - learning_rate * dw
        b = b - learning_rate * db

    return (round(w, 2), round(b, 2))
`},{id:"logistic-regression",title:"Sigmoid Function",section:"supervised-learning",difficulty:"easy",description:`
## Sigmoid Function

Implement the sigmoid activation function used in logistic regression.

### Formula
\`\`\`
sigmoid(x) = 1 / (1 + exp(-x))
\`\`\`

### Properties
- Output is always between 0 and 1
- sigmoid(0) = 0.5
- Monotonically increasing

### Function Signature
\`\`\`python
def sigmoid(x: np.ndarray) -> np.ndarray:
\`\`\`
    `,examples:[{input:"np.array([0, 1, -1])",output:"[0.5, 0.731059, 0.268941]",explanation:"sigmoid(0)=0.5, sigmoid(1)≈0.73, sigmoid(-1)≈0.27"}],starterCode:`import numpy as np

def sigmoid(x: np.ndarray) -> np.ndarray:
    """
    Compute the sigmoid activation function.

    Args:
        x: Input array of any shape

    Returns:
        Array of same shape with sigmoid applied element-wise
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Zero input",input:"[0]",expected:"[0.5]",hidden:!1},{id:"2",description:"Positive and negative",input:"[-1, 0, 1]",expected:"[0.268941, 0.5, 0.731059]",hidden:!1},{id:"3",description:"Large values",input:"[-10, 10]",expected:"[0.000045, 0.999955]",hidden:!0}],hints:["Use np.exp() for the exponential function.","The formula is 1 / (1 + exp(-x))"],solution:`import numpy as np

def sigmoid(x: np.ndarray) -> np.ndarray:
    """
    Compute the sigmoid activation function.
    """
    return 1 / (1 + np.exp(-x))
`},{id:"decision-tree-split",title:"Gini Impurity",section:"supervised-learning",difficulty:"medium",description:`
## Gini Impurity

Calculate the Gini impurity for a set of labels. This metric is used in decision trees to determine the best split.

### Formula
\`\`\`
Gini = 1 - sum(p_i^2)
\`\`\`

Where p_i is the proportion of class i in the set.

### Properties
- Gini = 0 means pure (all same class)
- Gini = 0.5 means maximum impurity (for binary classification with equal split)

### Function Signature
\`\`\`python
def gini_impurity(labels: np.ndarray) -> float:
\`\`\`
    `,examples:[{input:"np.array([0, 0, 0, 0])",output:"0.0",explanation:"All same class, pure node"},{input:"np.array([0, 0, 1, 1])",output:"0.5",explanation:"Equal split, maximum impurity for binary"}],starterCode:`import numpy as np

def gini_impurity(labels: np.ndarray) -> float:
    """
    Calculate Gini impurity for a set of labels.

    Args:
        labels: Array of class labels (integers)

    Returns:
        Gini impurity value between 0 and 1
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Pure node",input:"[0, 0, 0, 0]",expected:"0.0",hidden:!1},{id:"2",description:"Maximum impurity",input:"[0, 0, 1, 1]",expected:"0.5",hidden:!1},{id:"3",description:"Unequal split",input:"[0, 0, 0, 1]",expected:"0.375",hidden:!0}],hints:["Count the occurrences of each class.","Calculate the proportion (probability) of each class.","Gini = 1 - sum of squared probabilities."],solution:`import numpy as np

def gini_impurity(labels: np.ndarray) -> float:
    """
    Calculate Gini impurity for a set of labels.
    """
    if len(labels) == 0:
        return 0.0

    # Count occurrences of each class
    _, counts = np.unique(labels, return_counts=True)

    # Calculate probabilities
    probabilities = counts / len(labels)

    # Gini = 1 - sum(p^2)
    return 1 - np.sum(probabilities ** 2)
`},{id:"logistic-regression-full",title:"Logistic Regression with Gradient Descent",section:"supervised-learning",difficulty:"medium",description:`
## Logistic Regression with Gradient Descent

Implement binary logistic regression from scratch.

### Model
\`\`\`
z = X @ w + b
y_pred = sigmoid(z) = 1 / (1 + exp(-z))
\`\`\`

### Loss (Binary Cross-Entropy)
\`\`\`
L = -1/m * sum(y * log(y_pred) + (1-y) * log(1-y_pred))
\`\`\`

### Gradients
\`\`\`
dw = 1/m * X.T @ (y_pred - y)
db = 1/m * sum(y_pred - y)
\`\`\`
    `,examples:[{input:"X (100, 2), y binary labels, 1000 iterations",output:"Trained weights and bias",explanation:"Learns decision boundary separating classes"}],starterCode:`import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def logistic_regression(X, y, learning_rate=0.1, iterations=1000):
    """
    Train logistic regression using gradient descent.

    Args:
        X: Features (m samples, n features)
        y: Binary labels (m,)
        learning_rate: Step size
        iterations: Number of iterations

    Returns:
        w: Learned weights (n,)
        b: Learned bias (scalar)
    """
    m, n = X.shape
    w = np.zeros(n)
    b = 0.0

    # Your code here
    pass

    return np.round(w, 4), round(b, 4)
`,testCases:[{id:"1",description:"Simple separable data",input:"(np.array([[0, 0], [0, 1], [1, 0], [1, 1]]), np.array([0, 0, 0, 1]), 0.5, 1000)",expected:"converged",hidden:!1},{id:"2",description:"Predictions reasonable",input:"prediction_test",expected:"True",hidden:!0}],hints:["Forward: z = X @ w + b, then y_pred = sigmoid(z)","Gradients: dw = (1/m) * X.T @ (y_pred - y)","Update: w = w - lr * dw, b = b - lr * db"],solution:`import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def logistic_regression(X, y, learning_rate=0.1, iterations=1000):
    m, n = X.shape
    w = np.zeros(n)
    b = 0.0

    for _ in range(iterations):
        # Forward pass
        z = X @ w + b
        y_pred = sigmoid(z)

        # Compute gradients
        dw = (1/m) * X.T @ (y_pred - y)
        db = (1/m) * np.sum(y_pred - y)

        # Update parameters
        w = w - learning_rate * dw
        b = b - learning_rate * db

    return np.round(w, 4), round(b, 4)
`},{id:"binary-cross-entropy",title:"Binary Cross-Entropy Loss",section:"supervised-learning",difficulty:"easy",description:`
## Binary Cross-Entropy Loss

Implement the binary cross-entropy (log loss) function.

### Formula
\`\`\`
BCE = -1/m * sum(y * log(p) + (1-y) * log(1-p))
\`\`\`

Where:
- y: True labels (0 or 1)
- p: Predicted probabilities
- m: Number of samples

### Numerical Stability
Clip predictions to avoid log(0):
\`\`\`python
p = np.clip(p, 1e-15, 1 - 1e-15)
\`\`\`
    `,examples:[{input:"y = [1, 0, 1], p = [0.9, 0.1, 0.8]",output:"0.1643",explanation:"Low loss for confident correct predictions"}],starterCode:`import numpy as np

def binary_cross_entropy(y_true, y_pred):
    """
    Compute binary cross-entropy loss.

    Args:
        y_true: True labels (0 or 1)
        y_pred: Predicted probabilities

    Returns:
        loss: Scalar BCE loss
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Perfect predictions",input:"([1, 0, 1, 0], [1.0, 0.0, 1.0, 0.0])",expected:"0.0",hidden:!1},{id:"2",description:"Typical case",input:"([1, 0, 1], [0.9, 0.1, 0.8])",expected:"0.1643",hidden:!1}],hints:["Clip predictions for numerical stability","Apply the formula element-wise","Take the mean over all samples"],solution:`import numpy as np

def binary_cross_entropy(y_true, y_pred):
    y_true = np.array(y_true)
    y_pred = np.array(y_pred)

    # Clip for numerical stability
    y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)

    # BCE formula
    loss = -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

    return round(loss, 4)
`}],rS=[{id:"kmeans-clustering",title:"K-Means: Assign to Nearest Centroid",section:"unsupervised-learning",difficulty:"medium",description:`
## K-Means: Assign Points to Nearest Centroid

Implement the assignment step of K-means clustering: given data points and centroids, assign each point to its nearest centroid.

### Function Signature
\`\`\`python
def assign_clusters(X: np.ndarray, centroids: np.ndarray) -> np.ndarray:
\`\`\`

### Args
- X: Data points of shape (n_samples, n_features)
- centroids: Cluster centers of shape (k, n_features)

### Returns
- Array of cluster assignments (integers 0 to k-1)

### Distance
Use Euclidean distance: sqrt(sum((x - c)^2))
    `,examples:[{input:"X = [[0, 0], [1, 1], [10, 10]], centroids = [[0, 0], [10, 10]]",output:"[0, 0, 1]",explanation:"First two points closer to centroid 0, last point closer to centroid 1"}],starterCode:`import numpy as np

def assign_clusters(X: np.ndarray, centroids: np.ndarray) -> np.ndarray:
    """
    Assign each point to its nearest centroid.

    Args:
        X: Data points of shape (n_samples, n_features)
        centroids: Cluster centers of shape (k, n_features)

    Returns:
        Array of cluster assignments (shape: n_samples)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Simple 2D case",input:"([[0, 0], [1, 1], [10, 10]], [[0, 0], [10, 10]])",expected:"[0, 0, 1]",hidden:!1},{id:"2",description:"Three clusters",input:"([[0, 0], [5, 5], [10, 10]], [[0, 0], [5, 5], [10, 10]])",expected:"[0, 1, 2]",hidden:!1},{id:"3",description:"Tiebreaker (first centroid wins)",input:"([[5, 5]], [[0, 0], [10, 10]])",expected:"[0]",hidden:!0}],hints:["Calculate distance from each point to each centroid.","Use np.linalg.norm() for Euclidean distance.","Use np.argmin() to find the closest centroid."],solution:`import numpy as np

def assign_clusters(X: np.ndarray, centroids: np.ndarray) -> np.ndarray:
    """
    Assign each point to its nearest centroid.
    """
    # Calculate distances from each point to each centroid
    # Using broadcasting: X[:, np.newaxis] has shape (n, 1, d)
    # centroids has shape (k, d)
    # Difference has shape (n, k, d)
    distances = np.linalg.norm(X[:, np.newaxis] - centroids, axis=2)

    # Return index of minimum distance for each point
    return np.argmin(distances, axis=1)
`},{id:"pca-implementation",title:"PCA: Center Data",section:"unsupervised-learning",difficulty:"easy",description:`
## PCA: Center the Data

The first step in PCA is to center the data by subtracting the mean of each feature.

### Function Signature
\`\`\`python
def center_data(X: np.ndarray) -> np.ndarray:
\`\`\`

### Args
- X: Data matrix of shape (n_samples, n_features)

### Returns
- Centered data where each column has mean 0

### Why Center?
Centering ensures PCA finds directions of maximum variance from the origin, not from an arbitrary point.
    `,examples:[{input:"X = [[1, 2], [3, 4], [5, 6]]",output:"[[-2, -2], [0, 0], [2, 2]]",explanation:"Column means are [3, 4], so we subtract them"}],starterCode:`import numpy as np

def center_data(X: np.ndarray) -> np.ndarray:
    """
    Center the data by subtracting the mean of each feature.

    Args:
        X: Data matrix of shape (n_samples, n_features)

    Returns:
        Centered data matrix of same shape
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic centering",input:"[[1, 2], [3, 4], [5, 6]]",expected:"[[-2.0, -2.0], [0.0, 0.0], [2.0, 2.0]]",hidden:!1},{id:"2",description:"Already centered",input:"[[-1, -1], [0, 0], [1, 1]]",expected:"[[-1.0, -1.0], [0.0, 0.0], [1.0, 1.0]]",hidden:!1},{id:"3",description:"Single column",input:"[[10], [20], [30]]",expected:"[[-10.0], [0.0], [10.0]]",hidden:!0}],hints:["Calculate the mean of each column using np.mean() with axis=0.","Subtract the mean from the data (broadcasting handles this)."],solution:`import numpy as np

def center_data(X: np.ndarray) -> np.ndarray:
    """
    Center the data by subtracting the mean of each feature.
    """
    mean = np.mean(X, axis=0)
    return X - mean
`}],iS=[{id:"perceptron",title:"ReLU Activation",section:"deep-learning",difficulty:"easy",description:`
## ReLU Activation Function

Implement the Rectified Linear Unit (ReLU) activation function, one of the most popular activation functions in deep learning.

### Formula
\`\`\`
ReLU(x) = max(0, x)
\`\`\`

### Properties
- Output is x if x > 0, else 0
- Helps with vanishing gradient problem
- Computationally efficient

### Function Signature
\`\`\`python
def relu(x: np.ndarray) -> np.ndarray:
\`\`\`
    `,examples:[{input:"np.array([-2, -1, 0, 1, 2])",output:"[0, 0, 0, 1, 2]",explanation:"Negative values become 0, positive values unchanged"}],starterCode:`import numpy as np

def relu(x: np.ndarray) -> np.ndarray:
    """
    Apply ReLU activation function.

    Args:
        x: Input array of any shape

    Returns:
        Array with ReLU applied element-wise
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Mixed values",input:"[-2, -1, 0, 1, 2]",expected:"[0, 0, 0, 1, 2]",hidden:!1},{id:"2",description:"All negative",input:"[-5, -3, -1]",expected:"[0, 0, 0]",hidden:!1},{id:"3",description:"All positive",input:"[1, 2, 3]",expected:"[1, 2, 3]",hidden:!0}],hints:["Use np.maximum() to compare with 0.","Alternatively, use boolean indexing or np.where()."],solution:`import numpy as np

def relu(x: np.ndarray) -> np.ndarray:
    """
    Apply ReLU activation function.
    """
    return np.maximum(0, x)
`},{id:"neural-network-forward",title:"Dense Layer Forward Pass",section:"deep-learning",difficulty:"medium",description:`
## Dense Layer Forward Pass

Implement the forward pass of a fully-connected (dense) neural network layer.

### Formula
\`\`\`
output = activation(X @ W + b)
\`\`\`

Where:
- X: Input of shape (batch_size, input_dim)
- W: Weights of shape (input_dim, output_dim)
- b: Bias of shape (output_dim,)

### Function Signature
\`\`\`python
def dense_forward(X: np.ndarray, W: np.ndarray, b: np.ndarray) -> np.ndarray:
\`\`\`

Use ReLU as the activation function.
    `,examples:[{input:"X = [[1, 2]], W = [[1, 0], [0, 1]], b = [1, 1]",output:"[[2, 3]]",explanation:"X @ W = [[1, 2]], + b = [[2, 3]], ReLU keeps positive"}],starterCode:`import numpy as np

def dense_forward(X: np.ndarray, W: np.ndarray, b: np.ndarray) -> np.ndarray:
    """
    Compute forward pass of a dense layer with ReLU activation.

    Args:
        X: Input of shape (batch_size, input_dim)
        W: Weights of shape (input_dim, output_dim)
        b: Bias of shape (output_dim,)

    Returns:
        Output of shape (batch_size, output_dim)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic forward pass",input:"([[1, 2]], [[1, 0], [0, 1]], [1, 1])",expected:"[[2, 3]]",hidden:!1},{id:"2",description:"With negative pre-activation",input:"([[1, 1]], [[1, -2], [-1, 1]], [0, 0])",expected:"[[0, 0]]",hidden:!1},{id:"3",description:"Batch of 2",input:"([[1, 0], [0, 1]], [[2, 0], [0, 2]], [0, 0])",expected:"[[2, 0], [0, 2]]",hidden:!0}],hints:["First compute the linear transformation: Z = X @ W + b","Then apply ReLU: output = max(0, Z)"],solution:`import numpy as np

def dense_forward(X: np.ndarray, W: np.ndarray, b: np.ndarray) -> np.ndarray:
    """
    Compute forward pass of a dense layer with ReLU activation.
    """
    # Linear transformation
    Z = np.dot(X, W) + b
    # ReLU activation
    return np.maximum(0, Z)
`},{id:"backpropagation",title:"Softmax Function",section:"deep-learning",difficulty:"medium",description:`
## Softmax Function

Implement the softmax function, used to convert raw scores to probabilities in multi-class classification.

### Formula
\`\`\`
softmax(x)_i = exp(x_i) / sum(exp(x_j))
\`\`\`

### Properties
- Output sums to 1
- All outputs are positive
- Larger inputs get larger probabilities

### Function Signature
\`\`\`python
def softmax(x: np.ndarray) -> np.ndarray:
\`\`\`

**Note**: For numerical stability, subtract max(x) before computing exp.
    `,examples:[{input:"np.array([1, 2, 3])",output:"[0.090031, 0.244728, 0.665241]",explanation:"Higher values get higher probabilities, sum = 1"}],starterCode:`import numpy as np

def softmax(x: np.ndarray) -> np.ndarray:
    """
    Compute softmax probabilities.

    Args:
        x: Input array (1D)

    Returns:
        Array of same shape with softmax probabilities
    """
    # Your code here
    # Hint: subtract max for numerical stability
    pass
`,testCases:[{id:"1",description:"Basic softmax",input:"[1, 2, 3]",expected:"[0.090031, 0.244728, 0.665241]",hidden:!1},{id:"2",description:"Equal inputs",input:"[1, 1, 1]",expected:"[0.333333, 0.333333, 0.333333]",hidden:!1},{id:"3",description:"Large values",input:"[100, 101, 102]",expected:"[0.090031, 0.244728, 0.665241]",hidden:!0}],hints:["Subtract the max value for numerical stability.","Compute exp of each element.","Divide by the sum of all exp values."],solution:`import numpy as np

def softmax(x: np.ndarray) -> np.ndarray:
    """
    Compute softmax probabilities.
    """
    # Subtract max for numerical stability
    x_shifted = x - np.max(x)
    exp_x = np.exp(x_shifted)
    return exp_x / np.sum(exp_x)
`}],lS=[{id:"precision-recall-f1",title:"Precision and Recall",section:"model-evaluation",difficulty:"medium",description:`
## Precision and Recall

Calculate precision and recall from true labels and predictions.

### Formulas
\`\`\`
Precision = TP / (TP + FP)
Recall = TP / (TP + FN)
\`\`\`

Where:
- TP = True Positives (predicted 1, actual 1)
- FP = False Positives (predicted 1, actual 0)
- FN = False Negatives (predicted 0, actual 1)

### Function Signature
\`\`\`python
def precision_recall(y_true: np.ndarray, y_pred: np.ndarray) -> tuple:
\`\`\`

Returns (precision, recall) rounded to 4 decimal places.
    `,examples:[{input:"y_true = [1, 1, 0, 1, 0], y_pred = [1, 0, 0, 1, 1]",output:"(0.6667, 0.6667)",explanation:"TP=2, FP=1, FN=1. Precision=2/3, Recall=2/3"}],starterCode:`import numpy as np

def precision_recall(y_true: np.ndarray, y_pred: np.ndarray) -> tuple:
    """
    Calculate precision and recall for binary classification.

    Args:
        y_true: True labels (0 or 1)
        y_pred: Predicted labels (0 or 1)

    Returns:
        Tuple of (precision, recall) rounded to 4 decimal places
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Mixed predictions",input:"([1, 1, 0, 1, 0], [1, 0, 0, 1, 1])",expected:"(0.6667, 0.6667)",hidden:!1},{id:"2",description:"Perfect predictions",input:"([1, 1, 0, 0], [1, 1, 0, 0])",expected:"(1.0, 1.0)",hidden:!1},{id:"3",description:"High precision, low recall",input:"([1, 1, 1, 1, 0], [1, 0, 0, 0, 0])",expected:"(1.0, 0.25)",hidden:!0}],hints:["Count TP where both y_true and y_pred are 1.","Count FP where y_pred is 1 but y_true is 0.","Count FN where y_true is 1 but y_pred is 0."],solution:`import numpy as np

def precision_recall(y_true: np.ndarray, y_pred: np.ndarray) -> tuple:
    """
    Calculate precision and recall for binary classification.
    """
    y_true = np.array(y_true)
    y_pred = np.array(y_pred)

    # Calculate TP, FP, FN
    tp = np.sum((y_true == 1) & (y_pred == 1))
    fp = np.sum((y_true == 0) & (y_pred == 1))
    fn = np.sum((y_true == 1) & (y_pred == 0))

    # Calculate precision and recall
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0

    return (round(precision, 4), round(recall, 4))
`},{id:"cross-validation",title:"K-Fold Split Indices",section:"model-evaluation",difficulty:"medium",description:`
## K-Fold Cross-Validation Indices

Generate train and validation indices for K-fold cross-validation.

### Concept
Split data into K equal parts. For each fold:
- Use 1 part for validation
- Use remaining K-1 parts for training

### Function Signature
\`\`\`python
def kfold_indices(n_samples: int, k: int) -> list:
\`\`\`

Returns list of (train_indices, val_indices) tuples for each fold.
    `,examples:[{input:"n_samples = 6, k = 3",output:"[([2,3,4,5], [0,1]), ([0,1,4,5], [2,3]), ([0,1,2,3], [4,5])]",explanation:"Split [0,1,2,3,4,5] into 3 folds of size 2"}],starterCode:`import numpy as np

def kfold_indices(n_samples: int, k: int) -> list:
    """
    Generate train/validation indices for K-fold cross-validation.

    Args:
        n_samples: Total number of samples
        k: Number of folds

    Returns:
        List of (train_indices, val_indices) tuples
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic 3-fold",input:"(6, 3)",expected:"[([2, 3, 4, 5], [0, 1]), ([0, 1, 4, 5], [2, 3]), ([0, 1, 2, 3], [4, 5])]",hidden:!1},{id:"2",description:"2-fold",input:"(4, 2)",expected:"[([2, 3], [0, 1]), ([0, 1], [2, 3])]",hidden:!1},{id:"3",description:"4-fold",input:"(8, 4)",expected:"[([2, 3, 4, 5, 6, 7], [0, 1]), ([0, 1, 4, 5, 6, 7], [2, 3]), ([0, 1, 2, 3, 6, 7], [4, 5]), ([0, 1, 2, 3, 4, 5], [6, 7])]",hidden:!0}],hints:["Divide indices into k equal-sized chunks.","For each fold, one chunk is validation, rest are training.","Use np.array_split() to create chunks."],solution:`import numpy as np

def kfold_indices(n_samples: int, k: int) -> list:
    """
    Generate train/validation indices for K-fold cross-validation.
    """
    indices = np.arange(n_samples)
    fold_sizes = np.full(k, n_samples // k)
    fold_sizes[:n_samples % k] += 1

    folds = []
    current = 0
    for fold_size in fold_sizes:
        val_indices = list(range(current, current + fold_size))
        train_indices = [i for i in range(n_samples) if i not in val_indices]
        folds.append((train_indices, val_indices))
        current += fold_size

    return folds
`},{id:"confusion-matrix",title:"Accuracy Score",section:"model-evaluation",difficulty:"easy",description:`
## Accuracy Score

Calculate the accuracy of predictions - the proportion of correct predictions.

### Formula
\`\`\`
Accuracy = (Number of correct predictions) / (Total predictions)
\`\`\`

### Function Signature
\`\`\`python
def accuracy(y_true: np.ndarray, y_pred: np.ndarray) -> float:
\`\`\`

### Note
While simple, accuracy can be misleading for imbalanced datasets.
    `,examples:[{input:"y_true = [0, 1, 1, 0, 1], y_pred = [0, 1, 0, 0, 1]",output:"0.8",explanation:"4 correct out of 5 predictions"}],starterCode:`import numpy as np

def accuracy(y_true: np.ndarray, y_pred: np.ndarray) -> float:
    """
    Calculate accuracy of predictions.

    Args:
        y_true: True labels
        y_pred: Predicted labels

    Returns:
        Accuracy score between 0 and 1
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Basic accuracy",input:"([0, 1, 1, 0, 1], [0, 1, 0, 0, 1])",expected:"0.8",hidden:!1},{id:"2",description:"Perfect accuracy",input:"([1, 1, 0, 0], [1, 1, 0, 0])",expected:"1.0",hidden:!1},{id:"3",description:"Zero accuracy",input:"([0, 0, 1, 1], [1, 1, 0, 0])",expected:"0.0",hidden:!0}],hints:["Compare y_true and y_pred element-wise.","Count matches and divide by total.","np.mean() of boolean array gives proportion of True."],solution:`import numpy as np

def accuracy(y_true: np.ndarray, y_pred: np.ndarray) -> float:
    """
    Calculate accuracy of predictions.
    """
    y_true = np.array(y_true)
    y_pred = np.array(y_pred)
    return np.mean(y_true == y_pred)
`}],oS=[{id:"mlp-forward",title:"MLP Forward Pass",section:"neural-networks",difficulty:"medium",description:`
## Multi-Layer Perceptron Forward Pass

Implement the forward pass for a 2-layer MLP (Multi-Layer Perceptron).

### Architecture
\`\`\`
Input (n_features) → Hidden (n_hidden) → Output (n_classes)
\`\`\`

### Forward Pass
\`\`\`
Z1 = X @ W1 + b1
A1 = ReLU(Z1)
Z2 = A1 @ W2 + b2
output = softmax(Z2)
\`\`\`

### Function Signature
\`\`\`python
def mlp_forward(X, W1, b1, W2, b2):
    # Returns: output probabilities, cache (for backprop)
\`\`\`
    `,examples:[{input:"X shape (2, 3), hidden_size=4, output_size=2",output:"Probabilities shape (2, 2), each row sums to 1",explanation:"Batch of 2 samples through MLP to 2 classes"}],starterCode:`import numpy as np

def relu(x):
    return np.maximum(0, x)

def softmax(x):
    exp_x = np.exp(x - np.max(x, axis=1, keepdims=True))
    return exp_x / np.sum(exp_x, axis=1, keepdims=True)

def mlp_forward(X, W1, b1, W2, b2):
    """
    Forward pass for a 2-layer MLP.

    Args:
        X: Input data (batch_size, n_features)
        W1: First layer weights (n_features, n_hidden)
        b1: First layer bias (n_hidden,)
        W2: Second layer weights (n_hidden, n_classes)
        b2: Second layer bias (n_classes,)

    Returns:
        output: Class probabilities (batch_size, n_classes)
        cache: Tuple of intermediate values for backprop
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Output shape correct",input:"(np.array([[1, 2, 3], [4, 5, 6]]), np.ones((3, 4)), np.zeros(4), np.ones((4, 2)), np.zeros(2))",expected:"(2, 2)",hidden:!1},{id:"2",description:"Probabilities sum to 1",input:"(np.array([[1, 0], [0, 1]]), np.array([[1, 0], [0, 1]]), np.zeros(2), np.array([[1, 0], [0, 1]]), np.zeros(2))",expected:"1.0",hidden:!1}],hints:["First compute Z1 = X @ W1 + b1","Apply ReLU to get A1","Then Z2 = A1 @ W2 + b2","Apply softmax to get output probabilities"],solution:`import numpy as np

def relu(x):
    return np.maximum(0, x)

def softmax(x):
    exp_x = np.exp(x - np.max(x, axis=1, keepdims=True))
    return exp_x / np.sum(exp_x, axis=1, keepdims=True)

def mlp_forward(X, W1, b1, W2, b2):
    # First layer
    Z1 = X @ W1 + b1
    A1 = relu(Z1)

    # Second layer
    Z2 = A1 @ W2 + b2
    output = softmax(Z2)

    # Cache for backprop
    cache = (X, Z1, A1, Z2, W1, W2)

    return output, cache
`},{id:"backprop-gradients",title:"Backpropagation Gradients",section:"neural-networks",difficulty:"hard",description:`
## Backpropagation: Compute Gradients

Implement backpropagation to compute gradients for a 2-layer MLP with cross-entropy loss.

### Chain Rule
For each layer, we compute:
\`\`\`
dL/dW = dL/dZ * dZ/dW
dL/db = dL/dZ * dZ/db
\`\`\`

### Gradient Flow
\`\`\`
Loss → dZ2 → dW2, db2 → dA1 → dZ1 (ReLU) → dW1, db1
\`\`\`

### Key Formulas
- dZ2 = output - Y_onehot (softmax + cross-entropy)
- dW2 = A1.T @ dZ2
- dZ1 = (dZ2 @ W2.T) * (Z1 > 0)  (ReLU derivative)
- dW1 = X.T @ dZ1
    `,examples:[{input:"Predictions vs true labels",output:"Gradients dW1, db1, dW2, db2",explanation:"Gradients flow backwards through the network"}],starterCode:`import numpy as np

def backprop(X, Y, output, cache):
    """
    Compute gradients for 2-layer MLP.

    Args:
        X: Input data (batch_size, n_features)
        Y: One-hot encoded labels (batch_size, n_classes)
        output: Predicted probabilities from forward pass
        cache: Cached values from forward pass (X, Z1, A1, Z2, W1, W2)

    Returns:
        grads: Dictionary with dW1, db1, dW2, db2
    """
    m = X.shape[0]  # batch size
    X, Z1, A1, Z2, W1, W2 = cache

    # Your code here
    pass
`,testCases:[{id:"1",description:"dW2 shape matches W2",input:"shapes_match",expected:"True",hidden:!1},{id:"2",description:"Gradients are non-zero",input:"non_zero_grads",expected:"True",hidden:!0}],hints:["Start from the output: dZ2 = output - Y","dW2 = (1/m) * A1.T @ dZ2","Propagate through ReLU: dZ1 = (dZ2 @ W2.T) * (Z1 > 0)","dW1 = (1/m) * X.T @ dZ1"],solution:`import numpy as np

def backprop(X, Y, output, cache):
    m = X.shape[0]
    X, Z1, A1, Z2, W1, W2 = cache

    # Output layer gradient (softmax + cross-entropy)
    dZ2 = output - Y
    dW2 = (1/m) * A1.T @ dZ2
    db2 = (1/m) * np.sum(dZ2, axis=0)

    # Hidden layer gradient
    dA1 = dZ2 @ W2.T
    dZ1 = dA1 * (Z1 > 0)  # ReLU derivative
    dW1 = (1/m) * X.T @ dZ1
    db1 = (1/m) * np.sum(dZ1, axis=0)

    return {'dW1': dW1, 'db1': db1, 'dW2': dW2, 'db2': db2}
`},{id:"cross-entropy-loss",title:"Cross-Entropy Loss",section:"neural-networks",difficulty:"easy",description:`
## Cross-Entropy Loss

Implement the cross-entropy loss function for multi-class classification.

### Formula
\`\`\`
L = -1/m * sum(Y * log(Y_pred))
\`\`\`

Where:
- Y is one-hot encoded true labels
- Y_pred is predicted probabilities
- m is batch size

### Numerical Stability
Add small epsilon to avoid log(0):
\`\`\`python
np.log(Y_pred + 1e-15)
\`\`\`
    `,examples:[{input:"Y_pred = [[0.7, 0.2, 0.1], [0.1, 0.8, 0.1]], Y = [[1,0,0], [0,1,0]]",output:"0.2231",explanation:"-1/2 * (log(0.7) + log(0.8))"}],starterCode:`import numpy as np

def cross_entropy_loss(Y_pred, Y_true):
    """
    Compute cross-entropy loss.

    Args:
        Y_pred: Predicted probabilities (batch_size, n_classes)
        Y_true: One-hot encoded true labels (batch_size, n_classes)

    Returns:
        loss: Scalar cross-entropy loss
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Perfect prediction",input:"([[1.0, 0.0], [0.0, 1.0]], [[1, 0], [0, 1]])",expected:"0.0",hidden:!1},{id:"2",description:"Typical case",input:"([[0.7, 0.3], [0.2, 0.8]], [[1, 0], [0, 1]])",expected:"0.2899",hidden:!1}],hints:["Use np.log with a small epsilon for numerical stability","Multiply element-wise: Y_true * np.log(Y_pred)","Sum and negate, then divide by batch size"],solution:`import numpy as np

def cross_entropy_loss(Y_pred, Y_true):
    m = Y_pred.shape[0]
    epsilon = 1e-15
    log_probs = np.log(Y_pred + epsilon)
    loss = -np.sum(Y_true * log_probs) / m
    return round(loss, 4)
`},{id:"weight-init",title:"Xavier/He Weight Initialization",section:"neural-networks",difficulty:"medium",description:`
## Weight Initialization

Implement Xavier and He weight initialization to prevent vanishing/exploding gradients.

### Xavier Initialization (for tanh/sigmoid)
\`\`\`
W = randn(n_in, n_out) * sqrt(2 / (n_in + n_out))
\`\`\`

### He Initialization (for ReLU)
\`\`\`
W = randn(n_in, n_out) * sqrt(2 / n_in)
\`\`\`

### Why It Matters
- Keeps variance of activations stable across layers
- Prevents gradients from vanishing or exploding
- Enables training of deep networks
    `,examples:[{input:'n_in=784, n_out=256, method="he"',output:"Weights with std ≈ 0.0505",explanation:"sqrt(2/784) ≈ 0.0505"}],starterCode:`import numpy as np

def initialize_weights(n_in, n_out, method='xavier'):
    """
    Initialize weights using Xavier or He initialization.

    Args:
        n_in: Number of input units
        n_out: Number of output units
        method: 'xavier' or 'he'

    Returns:
        W: Initialized weight matrix (n_in, n_out)
    """
    np.random.seed(42)  # For reproducibility
    # Your code here
    pass
`,testCases:[{id:"1",description:"Xavier std correct",input:'(100, 50, "xavier")',expected:"0.1155",hidden:!1},{id:"2",description:"He std correct",input:'(100, 50, "he")',expected:"0.1414",hidden:!1}],hints:["Use np.random.randn to generate random numbers","Xavier: multiply by sqrt(2 / (n_in + n_out))","He: multiply by sqrt(2 / n_in)"],solution:`import numpy as np

def initialize_weights(n_in, n_out, method='xavier'):
    np.random.seed(42)

    if method == 'xavier':
        std = np.sqrt(2.0 / (n_in + n_out))
    elif method == 'he':
        std = np.sqrt(2.0 / n_in)
    else:
        raise ValueError("Method must be 'xavier' or 'he'")

    W = np.random.randn(n_in, n_out) * std
    return round(np.std(W), 4)
`},{id:"batch-norm",title:"Batch Normalization",section:"neural-networks",difficulty:"medium",description:`
## Batch Normalization

Implement batch normalization to stabilize training.

### Forward Pass
\`\`\`
1. Compute batch mean: μ = mean(x)
2. Compute batch variance: σ² = var(x)
3. Normalize: x_norm = (x - μ) / sqrt(σ² + ε)
4. Scale and shift: out = γ * x_norm + β
\`\`\`

### Benefits
- Reduces internal covariate shift
- Allows higher learning rates
- Acts as regularization
    `,examples:[{input:"X with mean=5, var=4, gamma=1, beta=0",output:"Normalized X with mean≈0, var≈1",explanation:"BatchNorm normalizes each feature"}],starterCode:`import numpy as np

def batch_norm_forward(X, gamma, beta, eps=1e-5):
    """
    Batch normalization forward pass.

    Args:
        X: Input (batch_size, features)
        gamma: Scale parameter (features,)
        beta: Shift parameter (features,)
        eps: Small constant for numerical stability

    Returns:
        out: Normalized output
        cache: Values needed for backward pass
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Output mean near zero",input:"(np.array([[1, 2], [3, 4], [5, 6]]), np.ones(2), np.zeros(2))",expected:"True",hidden:!1},{id:"2",description:"Gamma scales output",input:"(np.array([[0, 0], [2, 2]]), np.array([2, 3]), np.zeros(2))",expected:"[2.0, 3.0]",hidden:!0}],hints:["Compute mean along axis=0 (batch dimension)","Compute variance along axis=0","Normalize: (X - mean) / sqrt(var + eps)","Apply scale and shift: gamma * normalized + beta"],solution:`import numpy as np

def batch_norm_forward(X, gamma, beta, eps=1e-5):
    # Compute batch statistics
    mu = np.mean(X, axis=0)
    var = np.var(X, axis=0)

    # Normalize
    X_norm = (X - mu) / np.sqrt(var + eps)

    # Scale and shift
    out = gamma * X_norm + beta

    # Cache for backward pass
    cache = (X, X_norm, mu, var, gamma, eps)

    return out, cache
`},{id:"dropout",title:"Dropout",section:"neural-networks",difficulty:"easy",description:`
## Dropout Regularization

Implement dropout to prevent overfitting.

### Training Mode
\`\`\`
1. Generate mask: mask = (rand < keep_prob) / keep_prob
2. Apply mask: out = x * mask
\`\`\`

### Key Points
- Randomly "drop" neurons with probability (1 - keep_prob)
- Scale by 1/keep_prob to maintain expected value
- Disabled during inference (return input unchanged)
    `,examples:[{input:"X = [[1, 2, 3, 4]], keep_prob=0.5",output:"Some values zeroed, others scaled by 2",explanation:"Half neurons dropped, rest doubled"}],starterCode:`import numpy as np

def dropout_forward(X, keep_prob=0.5, training=True):
    """
    Apply dropout to input.

    Args:
        X: Input array
        keep_prob: Probability of keeping a neuron
        training: Whether in training mode

    Returns:
        out: Output after dropout
        mask: Dropout mask (for backward pass)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Inference returns unchanged",input:"(np.array([[1, 2, 3, 4]]), 0.5, False)",expected:"[[1, 2, 3, 4]]",hidden:!1},{id:"2",description:"Expected value preserved",input:"expected_value_test",expected:"True",hidden:!0}],hints:["In training: create binary mask with np.random.rand","Scale mask by 1/keep_prob (inverted dropout)","In inference: return input unchanged"],solution:`import numpy as np

def dropout_forward(X, keep_prob=0.5, training=True):
    if not training:
        return X, None

    # Create mask and scale
    mask = (np.random.rand(*X.shape) < keep_prob) / keep_prob
    out = X * mask

    return out, mask
`}],aS=[{id:"conv2d-forward",title:"2D Convolution",section:"cnn",difficulty:"hard",description:`
## 2D Convolution Operation

Implement the forward pass of a 2D convolution (no padding, stride=1).

### Operation
For each position (i, j) in the output:
\`\`\`
out[i, j] = sum(input[i:i+kH, j:j+kW] * kernel)
\`\`\`

### Output Size
\`\`\`
out_height = input_height - kernel_height + 1
out_width = input_width - kernel_width + 1
\`\`\`

### Function Signature
\`\`\`python
def conv2d(image, kernel):
    # image: (H, W)
    # kernel: (kH, kW)
    # output: (H-kH+1, W-kW+1)
\`\`\`
    `,examples:[{input:"image 4x4, kernel 3x3",output:"output 2x2",explanation:"4-3+1 = 2 in each dimension"}],starterCode:`import numpy as np

def conv2d(image, kernel):
    """
    Apply 2D convolution to an image.

    Args:
        image: Input image (H, W)
        kernel: Convolution kernel (kH, kW)

    Returns:
        output: Convolved image (H-kH+1, W-kW+1)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Identity kernel",input:"([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[0, 0, 0], [0, 1, 0], [0, 0, 0]])",expected:"[[5]]",hidden:!1},{id:"2",description:"Edge detection",input:"([[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[-1, -1, -1], [-1, 8, -1], [-1, -1, -1]])",expected:"[[4, 4], [4, 4]]",hidden:!1}],hints:["Use nested loops to slide the kernel over the image","At each position, compute element-wise product and sum","Output size is (H-kH+1, W-kW+1)"],solution:`import numpy as np

def conv2d(image, kernel):
    image = np.array(image)
    kernel = np.array(kernel)

    H, W = image.shape
    kH, kW = kernel.shape

    out_H = H - kH + 1
    out_W = W - kW + 1

    output = np.zeros((out_H, out_W))

    for i in range(out_H):
        for j in range(out_W):
            region = image[i:i+kH, j:j+kW]
            output[i, j] = np.sum(region * kernel)

    return output.astype(int).tolist()
`},{id:"max-pool",title:"Max Pooling",section:"cnn",difficulty:"medium",description:`
## Max Pooling

Implement 2x2 max pooling with stride 2.

### Operation
Divide input into non-overlapping 2x2 regions and take maximum of each.

### Output Size
\`\`\`
out_height = input_height // 2
out_width = input_width // 2
\`\`\`

### Purpose
- Reduces spatial dimensions
- Provides translation invariance
- Reduces computation
    `,examples:[{input:"[[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]",output:"[[6, 8], [14, 16]]",explanation:"Max of each 2x2 region"}],starterCode:`import numpy as np

def max_pool2d(image, pool_size=2):
    """
    Apply 2D max pooling.

    Args:
        image: Input image (H, W)
        pool_size: Size of pooling window

    Returns:
        output: Pooled image (H//pool_size, W//pool_size)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"4x4 to 2x2",input:"[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]",expected:"[[6, 8], [14, 16]]",hidden:!1},{id:"2",description:"With negative values",input:"[[-1, -2, -3, -4], [-5, -6, -7, -8], [-9, -10, -11, -12], [-13, -14, -15, -16]]",expected:"[[-1, -3], [-9, -11]]",hidden:!0}],hints:["Iterate with step size = pool_size","For each 2x2 region, use np.max()","Output dimensions are input dimensions // pool_size"],solution:`import numpy as np

def max_pool2d(image, pool_size=2):
    image = np.array(image)
    H, W = image.shape

    out_H = H // pool_size
    out_W = W // pool_size

    output = np.zeros((out_H, out_W))

    for i in range(out_H):
        for j in range(out_W):
            region = image[i*pool_size:(i+1)*pool_size,
                          j*pool_size:(j+1)*pool_size]
            output[i, j] = np.max(region)

    return output.astype(int).tolist()
`},{id:"flatten-layer",title:"Flatten Layer",section:"cnn",difficulty:"easy",description:`
## Flatten Layer

Implement the flatten operation that converts a 3D feature map to a 1D vector for the fully connected layer.

### Operation
\`\`\`
(batch, height, width, channels) → (batch, height * width * channels)
\`\`\`

### Usage
- Connects convolutional layers to fully connected layers
- Preserves batch dimension
    `,examples:[{input:"shape (2, 4, 4, 3)",output:"shape (2, 48)",explanation:"4 * 4 * 3 = 48 features per sample"}],starterCode:`import numpy as np

def flatten(X):
    """
    Flatten feature maps to vectors.

    Args:
        X: Input tensor (batch, height, width, channels)

    Returns:
        output: Flattened tensor (batch, height*width*channels)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Correct output shape",input:"np.random.randn(2, 4, 4, 3)",expected:"(2, 48)",hidden:!1},{id:"2",description:"Values preserved",input:"np.arange(24).reshape(1, 2, 3, 4)",expected:"True",hidden:!0}],hints:["Get batch size as X.shape[0]","Use reshape to flatten remaining dimensions","np.reshape(X, (batch_size, -1)) uses -1 to infer size"],solution:`import numpy as np

def flatten(X):
    batch_size = X.shape[0]
    return X.reshape(batch_size, -1)
`},{id:"conv-output-size",title:"Convolution Output Size",section:"cnn",difficulty:"easy",description:`
## Calculate Convolution Output Size

Implement a function to calculate the output dimensions of a convolution layer.

### Formula
\`\`\`
output_size = (input_size - kernel_size + 2 * padding) / stride + 1
\`\`\`

### Parameters
- **input_size**: Height or width of input
- **kernel_size**: Height or width of kernel
- **padding**: Zero-padding added to input
- **stride**: Step size of kernel
    `,examples:[{input:"input=32, kernel=3, padding=1, stride=1",output:"32",explanation:"(32 - 3 + 2*1) / 1 + 1 = 32"}],starterCode:`def conv_output_size(input_size, kernel_size, padding=0, stride=1):
    """
    Calculate output size of a convolution layer.

    Args:
        input_size: Input dimension (height or width)
        kernel_size: Kernel dimension
        padding: Zero-padding
        stride: Stride

    Returns:
        output_size: Output dimension
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Same padding",input:"(32, 3, 1, 1)",expected:"32",hidden:!1},{id:"2",description:"No padding, stride 2",input:"(32, 3, 0, 2)",expected:"15",hidden:!1},{id:"3",description:"Large kernel",input:"(224, 7, 3, 2)",expected:"112",hidden:!0}],hints:["Apply the formula: (input - kernel + 2*padding) / stride + 1","Use integer division (//) for the result"],solution:`def conv_output_size(input_size, kernel_size, padding=0, stride=1):
    return (input_size - kernel_size + 2 * padding) // stride + 1
`}],sS=[{id:"scaled-dot-product-attention",title:"Scaled Dot-Product Attention",section:"transformers",difficulty:"medium",description:`
## Scaled Dot-Product Attention

Implement the core attention mechanism from "Attention Is All You Need".

### Formula
\`\`\`
Attention(Q, K, V) = softmax(Q @ K.T / sqrt(d_k)) @ V
\`\`\`

Where:
- Q: Queries (seq_len, d_k)
- K: Keys (seq_len, d_k)
- V: Values (seq_len, d_v)
- d_k: Dimension of keys

### Steps
1. Compute attention scores: Q @ K.T
2. Scale by sqrt(d_k)
3. Apply softmax
4. Multiply by V
    `,examples:[{input:"Q, K, V all (4, 8) - 4 tokens, 8 dims",output:"output (4, 8)",explanation:"Each token attends to all tokens"}],starterCode:`import numpy as np

def scaled_dot_product_attention(Q, K, V):
    """
    Compute scaled dot-product attention.

    Args:
        Q: Queries (seq_len, d_k)
        K: Keys (seq_len, d_k)
        V: Values (seq_len, d_v)

    Returns:
        output: Attention output (seq_len, d_v)
        attention_weights: Attention weights (seq_len, seq_len)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Output shape correct",input:"(np.random.randn(4, 8), np.random.randn(4, 8), np.random.randn(4, 8))",expected:"(4, 8)",hidden:!1},{id:"2",description:"Attention weights sum to 1",input:"attention_sum_test",expected:"True",hidden:!1}],hints:["Compute scores = Q @ K.T","Scale by sqrt(d_k) where d_k = Q.shape[-1]","Apply softmax along the last axis","Return softmax(scores) @ V"],solution:`import numpy as np

def softmax(x, axis=-1):
    exp_x = np.exp(x - np.max(x, axis=axis, keepdims=True))
    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)

def scaled_dot_product_attention(Q, K, V):
    d_k = Q.shape[-1]

    # Compute attention scores
    scores = Q @ K.T / np.sqrt(d_k)

    # Apply softmax
    attention_weights = softmax(scores)

    # Compute output
    output = attention_weights @ V

    return output, attention_weights
`},{id:"multi-head-attention",title:"Multi-Head Attention",section:"transformers",difficulty:"hard",description:`
## Multi-Head Attention

Implement multi-head attention from the Transformer architecture.

### Concept
\`\`\`
MultiHead(Q, K, V) = Concat(head_1, ..., head_h) @ W_O

where head_i = Attention(Q @ W_Q_i, K @ W_K_i, V @ W_V_i)
\`\`\`

### Steps
1. Project Q, K, V with different learned projections for each head
2. Apply scaled dot-product attention in parallel
3. Concatenate heads
4. Project back to original dimension
    `,examples:[{input:"X (4, 64), num_heads=8, d_model=64",output:"output (4, 64)",explanation:"8 heads with d_k=8 each, concatenated to 64"}],starterCode:`import numpy as np

def multi_head_attention(Q, K, V, num_heads):
    """
    Multi-head attention mechanism.

    Args:
        Q: Queries (seq_len, d_model)
        K: Keys (seq_len, d_model)
        V: Values (seq_len, d_model)
        num_heads: Number of attention heads

    Returns:
        output: Multi-head attention output (seq_len, d_model)
    """
    seq_len, d_model = Q.shape
    assert d_model % num_heads == 0
    d_k = d_model // num_heads

    # Your code here
    pass
`,testCases:[{id:"1",description:"Output shape preserved",input:"(np.random.randn(4, 64), np.random.randn(4, 64), np.random.randn(4, 64), 8)",expected:"(4, 64)",hidden:!1}],hints:["Reshape Q, K, V to (seq_len, num_heads, d_k)","Apply attention for each head","Reshape back to (seq_len, d_model)"],solution:`import numpy as np

def softmax(x, axis=-1):
    exp_x = np.exp(x - np.max(x, axis=axis, keepdims=True))
    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)

def multi_head_attention(Q, K, V, num_heads):
    seq_len, d_model = Q.shape
    d_k = d_model // num_heads

    # Reshape to (seq_len, num_heads, d_k)
    Q = Q.reshape(seq_len, num_heads, d_k)
    K = K.reshape(seq_len, num_heads, d_k)
    V = V.reshape(seq_len, num_heads, d_k)

    # Transpose to (num_heads, seq_len, d_k)
    Q = Q.transpose(1, 0, 2)
    K = K.transpose(1, 0, 2)
    V = V.transpose(1, 0, 2)

    # Scaled dot-product attention for each head
    scores = Q @ K.transpose(0, 2, 1) / np.sqrt(d_k)
    attention = softmax(scores)
    heads = attention @ V

    # Transpose and reshape back
    heads = heads.transpose(1, 0, 2)  # (seq_len, num_heads, d_k)
    output = heads.reshape(seq_len, d_model)

    return output
`},{id:"positional-encoding",title:"Sinusoidal Positional Encoding",section:"transformers",difficulty:"medium",description:`
## Sinusoidal Positional Encoding

Implement the positional encoding from the original Transformer paper.

### Formulas
\`\`\`
PE(pos, 2i) = sin(pos / 10000^(2i/d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))
\`\`\`

Where:
- pos: Position in sequence
- i: Dimension index
- d_model: Model dimension

### Purpose
- Injects position information into embeddings
- Allows model to learn relative positions
- Fixed (not learned) encodings
    `,examples:[{input:"max_len=100, d_model=512",output:"PE matrix (100, 512)",explanation:"Position encoding for 100 positions"}],starterCode:`import numpy as np

def positional_encoding(max_len, d_model):
    """
    Generate sinusoidal positional encodings.

    Args:
        max_len: Maximum sequence length
        d_model: Model dimension

    Returns:
        PE: Positional encoding matrix (max_len, d_model)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Correct shape",input:"(50, 64)",expected:"(50, 64)",hidden:!1},{id:"2",description:"First position values",input:"(10, 4)",expected:"True",hidden:!0}],hints:["Create position indices: np.arange(max_len)","Create dimension indices for the divisor","Use div_term = 10000^(2i/d_model)","Apply sin to even indices, cos to odd indices"],solution:`import numpy as np

def positional_encoding(max_len, d_model):
    PE = np.zeros((max_len, d_model))

    position = np.arange(max_len)[:, np.newaxis]
    div_term = np.exp(np.arange(0, d_model, 2) * (-np.log(10000.0) / d_model))

    PE[:, 0::2] = np.sin(position * div_term)
    PE[:, 1::2] = np.cos(position * div_term)

    return PE
`},{id:"layer-norm",title:"Layer Normalization",section:"transformers",difficulty:"easy",description:`
## Layer Normalization

Implement layer normalization, used in Transformers instead of batch normalization.

### Formula
\`\`\`
LayerNorm(x) = γ * (x - μ) / sqrt(σ² + ε) + β
\`\`\`

### Difference from BatchNorm
- **BatchNorm**: Normalizes across batch dimension
- **LayerNorm**: Normalizes across feature dimension
- LayerNorm works better for sequence models
    `,examples:[{input:"X (batch, seq_len, features)",output:"Normalized X, each position normalized independently",explanation:"Normalize across last dimension"}],starterCode:`import numpy as np

def layer_norm(X, gamma, beta, eps=1e-5):
    """
    Apply layer normalization.

    Args:
        X: Input (batch, seq_len, features) or (seq_len, features)
        gamma: Scale parameter (features,)
        beta: Shift parameter (features,)
        eps: Small constant

    Returns:
        output: Normalized tensor
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Output mean near zero",input:"(np.array([[1, 2, 3, 4], [5, 6, 7, 8]]), np.ones(4), np.zeros(4))",expected:"True",hidden:!1},{id:"2",description:"Gamma and beta work",input:"(np.array([[0, 0, 2, 2]]), np.array([1, 2, 1, 2]), np.zeros(4))",expected:"[[-1.0, -2.0, 1.0, 2.0]]",hidden:!0}],hints:["Compute mean and variance along the last axis","Use keepdims=True for proper broadcasting","Apply normalization: (x - mean) / sqrt(var + eps)"],solution:`import numpy as np

def layer_norm(X, gamma, beta, eps=1e-5):
    # Compute statistics along last dimension
    mean = np.mean(X, axis=-1, keepdims=True)
    var = np.var(X, axis=-1, keepdims=True)

    # Normalize
    X_norm = (X - mean) / np.sqrt(var + eps)

    # Scale and shift
    return gamma * X_norm + beta
`},{id:"causal-mask",title:"Causal Attention Mask",section:"transformers",difficulty:"easy",description:`
## Causal (Autoregressive) Mask

Create a causal mask for decoder self-attention to prevent attending to future tokens.

### Mask Structure
\`\`\`
[[0, -inf, -inf, -inf],
 [0,    0, -inf, -inf],
 [0,    0,    0, -inf],
 [0,    0,    0,    0]]
\`\`\`

### Usage
- Add mask to attention scores before softmax
- -inf becomes 0 after softmax
- Ensures each position only attends to previous positions
    `,examples:[{input:"seq_len=4",output:"Lower triangular mask (4, 4)",explanation:"Position i can only attend to positions <= i"}],starterCode:`import numpy as np

def create_causal_mask(seq_len):
    """
    Create a causal attention mask.

    Args:
        seq_len: Sequence length

    Returns:
        mask: Causal mask (seq_len, seq_len)
               0 for allowed positions, -inf for masked
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Correct shape and pattern",input:"4",expected:"True",hidden:!1},{id:"2",description:"Works with attention",input:"3",expected:"[[0.0, -inf, -inf], [0.0, 0.0, -inf], [0.0, 0.0, 0.0]]",hidden:!0}],hints:["Create a matrix of ones using np.ones((seq_len, seq_len))","Use np.triu to get upper triangular matrix (excluding diagonal)","Replace 1s with -inf"],solution:`import numpy as np

def create_causal_mask(seq_len):
    # Create upper triangular matrix (above diagonal)
    mask = np.triu(np.ones((seq_len, seq_len)), k=1)
    # Replace 1s with -inf
    mask = np.where(mask == 1, float('-inf'), 0.0)
    return mask
`}],uS=[{id:"vae-reparameterization",title:"VAE Reparameterization Trick",section:"generative-models",difficulty:"medium",description:`
## VAE Reparameterization Trick

Implement the reparameterization trick that allows backpropagation through stochastic sampling in VAEs.

### The Problem
We want to sample z ~ N(μ, σ²), but sampling is not differentiable.

### The Solution
\`\`\`
ε ~ N(0, 1)
z = μ + σ * ε
\`\`\`

### Why It Works
- ε is sampled independently of parameters
- z is now a deterministic function of μ, σ, and ε
- Gradients can flow through μ and σ
    `,examples:[{input:"mu = [0, 1], log_var = [0, 0]",output:"z = mu + exp(0.5 * log_var) * epsilon",explanation:"log_var=0 means σ=1"}],starterCode:`import numpy as np

def reparameterize(mu, log_var):
    """
    Sample from latent distribution using reparameterization trick.

    Args:
        mu: Mean of latent distribution (batch, latent_dim)
        log_var: Log variance of latent distribution (batch, latent_dim)

    Returns:
        z: Sampled latent vectors (batch, latent_dim)
    """
    np.random.seed(42)  # For reproducibility
    # Your code here
    pass
`,testCases:[{id:"1",description:"Output shape matches input",input:"(np.zeros((2, 4)), np.zeros((2, 4)))",expected:"(2, 4)",hidden:!1},{id:"2",description:"Zero variance returns mu",input:"zero_var_test",expected:"True",hidden:!0}],hints:["std = exp(0.5 * log_var)","Sample epsilon from standard normal","z = mu + std * epsilon"],solution:`import numpy as np

def reparameterize(mu, log_var):
    np.random.seed(42)
    # Compute standard deviation
    std = np.exp(0.5 * log_var)
    # Sample epsilon from standard normal
    eps = np.random.randn(*mu.shape)
    # Reparameterization trick
    z = mu + std * eps
    return z
`},{id:"vae-loss",title:"VAE Loss Function",section:"generative-models",difficulty:"medium",description:`
## VAE Loss (ELBO)

Implement the VAE loss function: reconstruction loss + KL divergence.

### Loss Components
\`\`\`
L = L_reconstruction + L_KL

L_reconstruction = MSE(x, x_reconstructed)
L_KL = -0.5 * sum(1 + log_var - mu² - exp(log_var))
\`\`\`

### Intuition
- **Reconstruction loss**: Output should match input
- **KL divergence**: Latent distribution should be close to N(0,1)
    `,examples:[{input:"Perfect reconstruction, mu=0, var=1",output:"Loss ≈ 0",explanation:"Both terms are minimized"}],starterCode:`import numpy as np

def vae_loss(x, x_reconstructed, mu, log_var):
    """
    Compute VAE loss (negative ELBO).

    Args:
        x: Original input (batch, features)
        x_reconstructed: Reconstructed input (batch, features)
        mu: Latent mean (batch, latent_dim)
        log_var: Latent log variance (batch, latent_dim)

    Returns:
        total_loss: Combined loss
        recon_loss: Reconstruction loss
        kl_loss: KL divergence
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Perfect case",input:"(np.zeros((2, 4)), np.zeros((2, 4)), np.zeros((2, 2)), np.zeros((2, 2)))",expected:"(0.0, 0.0, 0.0)",hidden:!1},{id:"2",description:"Non-zero KL",input:"(np.zeros((1, 4)), np.zeros((1, 4)), np.ones((1, 2)), np.zeros((1, 2)))",expected:"True",hidden:!0}],hints:["Reconstruction: np.mean((x - x_reconstructed)²)","KL: -0.5 * sum(1 + log_var - mu² - exp(log_var))","Average over batch"],solution:`import numpy as np

def vae_loss(x, x_reconstructed, mu, log_var):
    # Reconstruction loss (MSE)
    recon_loss = np.mean((x - x_reconstructed) ** 2)

    # KL divergence
    kl_loss = -0.5 * np.mean(1 + log_var - mu**2 - np.exp(log_var))

    total_loss = recon_loss + kl_loss

    return round(total_loss, 4), round(recon_loss, 4), round(kl_loss, 4)
`},{id:"diffusion-noise-schedule",title:"Diffusion Noise Schedule",section:"generative-models",difficulty:"easy",description:`
## Diffusion Noise Schedule

Implement a linear noise schedule for diffusion models.

### Linear Schedule
\`\`\`
β_t = β_start + t * (β_end - β_start) / T

where t = 0, 1, ..., T-1
\`\`\`

### Derived Quantities
\`\`\`
α_t = 1 - β_t
ᾱ_t = prod(α_1, ..., α_t)  # cumulative product
\`\`\`

These control how much noise is added at each step.
    `,examples:[{input:"T=1000, beta_start=0.0001, beta_end=0.02",output:"betas, alphas, alpha_bars arrays",explanation:"Standard DDPM schedule"}],starterCode:`import numpy as np

def linear_noise_schedule(T, beta_start=0.0001, beta_end=0.02):
    """
    Create linear noise schedule for diffusion.

    Args:
        T: Number of diffusion steps
        beta_start: Starting beta value
        beta_end: Ending beta value

    Returns:
        betas: Beta values (T,)
        alphas: Alpha values (T,)
        alpha_bars: Cumulative alpha product (T,)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Beta range correct",input:"(100, 0.0001, 0.02)",expected:"True",hidden:!1},{id:"2",description:"Alpha bar decreases",input:"(50, 0.001, 0.01)",expected:"True",hidden:!0}],hints:["Use np.linspace for linear interpolation","alphas = 1 - betas","alpha_bars = np.cumprod(alphas)"],solution:`import numpy as np

def linear_noise_schedule(T, beta_start=0.0001, beta_end=0.02):
    # Linear schedule
    betas = np.linspace(beta_start, beta_end, T)

    # Compute alphas
    alphas = 1 - betas

    # Cumulative product
    alpha_bars = np.cumprod(alphas)

    return betas, alphas, alpha_bars
`},{id:"diffusion-forward",title:"Diffusion Forward Process",section:"generative-models",difficulty:"medium",description:`
## Diffusion Forward Process (Adding Noise)

Implement the forward diffusion process that adds noise to data.

### Formula
\`\`\`
x_t = sqrt(ᾱ_t) * x_0 + sqrt(1 - ᾱ_t) * ε

where ε ~ N(0, I)
\`\`\`

### Intuition
- As t increases, ᾱ_t decreases
- More noise is added, signal is reduced
- At t=T, x_T ≈ pure noise
    `,examples:[{input:"x_0 (image), t=500, T=1000",output:"x_t (noisy image)",explanation:"Halfway through diffusion process"}],starterCode:`import numpy as np

def diffusion_forward(x_0, t, alpha_bars):
    """
    Add noise to data using forward diffusion.

    Args:
        x_0: Original data (batch, ...)
        t: Timestep (int)
        alpha_bars: Cumulative alpha products (T,)

    Returns:
        x_t: Noisy data at timestep t
        noise: The noise that was added
    """
    np.random.seed(42)
    # Your code here
    pass
`,testCases:[{id:"1",description:"Output shape matches input",input:"(np.random.randn(2, 4), 50, np.linspace(0.99, 0.01, 100))",expected:"(2, 4)",hidden:!1},{id:"2",description:"t=0 returns near original",input:"t_zero_test",expected:"True",hidden:!0}],hints:["Get alpha_bar_t = alpha_bars[t]","Sample noise from standard normal","Apply formula: sqrt(alpha_bar_t) * x_0 + sqrt(1 - alpha_bar_t) * noise"],solution:`import numpy as np

def diffusion_forward(x_0, t, alpha_bars):
    np.random.seed(42)

    alpha_bar_t = alpha_bars[t]

    # Sample noise
    noise = np.random.randn(*x_0.shape)

    # Forward process
    x_t = np.sqrt(alpha_bar_t) * x_0 + np.sqrt(1 - alpha_bar_t) * noise

    return x_t, noise
`},{id:"kl-divergence",title:"KL Divergence (Gaussians)",section:"generative-models",difficulty:"easy",description:`
## KL Divergence Between Gaussians

Compute the KL divergence between two univariate Gaussian distributions.

### Formula
\`\`\`
KL(P || Q) = log(σ_q/σ_p) + (σ_p² + (μ_p - μ_q)²) / (2σ_q²) - 0.5
\`\`\`

Where P = N(μ_p, σ_p²) and Q = N(μ_q, σ_q²)

### Properties
- KL ≥ 0
- KL = 0 iff P = Q
- Not symmetric: KL(P||Q) ≠ KL(Q||P)
    `,examples:[{input:"P = N(0, 1), Q = N(0, 1)",output:"0",explanation:"Same distribution"}],starterCode:`import numpy as np

def kl_divergence_gaussian(mu_p, sigma_p, mu_q, sigma_q):
    """
    Compute KL divergence between two Gaussians.

    Args:
        mu_p, sigma_p: Mean and std of P
        mu_q, sigma_q: Mean and std of Q

    Returns:
        kl: KL(P || Q)
    """
    # Your code here
    pass
`,testCases:[{id:"1",description:"Same distribution",input:"(0, 1, 0, 1)",expected:"0.0",hidden:!1},{id:"2",description:"Different means",input:"(1, 1, 0, 1)",expected:"0.5",hidden:!1},{id:"3",description:"Different variances",input:"(0, 2, 0, 1)",expected:"0.4431",hidden:!0}],hints:["Apply the formula directly","Use np.log for natural logarithm","Remember: σ² is variance, σ is std"],solution:`import numpy as np

def kl_divergence_gaussian(mu_p, sigma_p, mu_q, sigma_q):
    term1 = np.log(sigma_q / sigma_p)
    term2 = (sigma_p**2 + (mu_p - mu_q)**2) / (2 * sigma_q**2)
    term3 = -0.5

    kl = term1 + term2 + term3
    return round(kl, 4)
`}],dh=[...eS,...tS,...nS,...rS,...iS,...lS,...oS,...aS,...sS,...uS];function cS(e){return dh.find(t=>t.id===e)}function dS(e){return dh.filter(t=>t.section===e)}function pS(){const{sectionId:e}=Sm(),{getProblemProgress:t,getSectionProgress:n}=Mi(),r=Cr.find(o=>o.id===e),i=e?dS(e):[];if(!r)return v.jsxs("div",{className:"text-center py-12",children:[v.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Section Not Found"}),v.jsx(yn,{to:"/",className:"text-primary-600 hover:text-primary-500",children:"Return to Home"})]});const l=n(r.id,r.problems.length);return v.jsxs("div",{className:"max-w-4xl mx-auto",children:[v.jsxs("div",{className:"mb-8",children:[v.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[v.jsx("div",{className:"w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-3xl shadow-sm",children:r.icon}),v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:r.title}),v.jsx("p",{className:"text-gray-500",children:r.description})]})]}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("div",{className:"flex-1 h-2 bg-gray-200 rounded-full overflow-hidden",children:v.jsx("div",{className:"h-full bg-primary-500 transition-all duration-300",style:{width:`${l}%`}})}),v.jsxs("span",{className:"text-primary-600 font-medium",children:[l,"% complete"]})]})]}),v.jsxs("div",{className:"bg-white rounded-xl p-6 mb-8 border border-gray-200 shadow-sm",children:[v.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Introduction"}),v.jsx("div",{className:"prose prose-sm max-w-none",children:v.jsx(ch,{components:{h1:({children:o})=>v.jsx("h1",{className:"text-xl font-bold text-gray-900 mt-0 mb-4",children:o}),h2:({children:o})=>v.jsx("h2",{className:"text-lg font-semibold text-gray-900 mt-6 mb-3",children:o}),h3:({children:o})=>v.jsx("h3",{className:"text-base font-medium text-gray-700 mt-4 mb-2",children:o}),p:({children:o})=>v.jsx("p",{className:"text-gray-600 mb-3 leading-relaxed",children:o}),code:({className:o,children:a})=>(o==null?void 0:o.includes("language-"))?v.jsx("pre",{className:"bg-gray-100 rounded-lg p-4 overflow-x-auto my-3",children:v.jsx("code",{className:"text-sm text-gray-800",children:a})}):v.jsx("code",{className:"bg-gray-100 px-1.5 py-0.5 rounded text-primary-600 text-sm",children:a}),ul:({children:o})=>v.jsx("ul",{className:"list-disc list-inside text-gray-600 space-y-1 mb-3",children:o}),li:({children:o})=>v.jsx("li",{className:"text-gray-600",children:o}),strong:({children:o})=>v.jsx("strong",{className:"text-gray-900 font-semibold",children:o})},children:r.introduction})})]}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Problems"}),v.jsx("div",{className:"space-y-3",children:i.map((o,a)=>{const s=t(r.id,o.id);return v.jsxs(yn,{to:`/problem/${r.id}/${o.id}`,className:"flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-400 hover:shadow-sm transition-all group",children:[v.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${s.status==="completed"?"bg-green-100 text-green-600":s.status==="in_progress"?"bg-yellow-100 text-yellow-600":"bg-gray-100 text-gray-500"}`,children:s.status==="completed"?"✓":a+1}),v.jsxs("div",{className:"flex-1",children:[v.jsx("h3",{className:"text-gray-900 font-medium group-hover:text-primary-600 transition-colors",children:o.title}),v.jsxs("div",{className:"flex items-center gap-3 mt-1",children:[v.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${o.difficulty==="easy"?"bg-green-100 text-green-700":o.difficulty==="medium"?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:o.difficulty}),v.jsxs("span",{className:"text-gray-400 text-xs",children:[o.testCases.length," test cases"]})]})]}),v.jsx("div",{className:"text-gray-400 group-hover:text-primary-600 transition-colors",children:"→"})]},o.id)})})]})]})}var ph={exports:{}},fS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mS=fS,hS=mS;function fh(){}function mh(){}mh.resetWarningCache=fh;var gS=function(){function e(r,i,l,o,a,s){if(s!==hS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mh,resetWarningCache:fh};return n.PropTypes=n,n};ph.exports=gS();var yS=ph.exports;const le=ro(yS);var ut=typeof window<"u"?window:null,Mu=ut===null,Ni=Mu?void 0:ut.document,xt="addEventListener",wt="removeEventListener",ma="getBoundingClientRect",Vr="_a",kt="_b",Ut="_c",al="horizontal",St=function(){return!1},vS=Mu?"calc":["","-webkit-","-moz-","-o-"].filter(function(e){var t=Ni.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length}).shift()+"calc",hh=function(e){return typeof e=="string"||e instanceof String},Kd=function(e){if(hh(e)){var t=Ni.querySelector(e);if(!t)throw new Error("Selector "+e+" did not match a DOM element");return t}return e},je=function(e,t,n){var r=e[t];return r!==void 0?r:n},sl=function(e,t,n,r){if(t){if(r==="end")return 0;if(r==="center")return e/2}else if(n){if(r==="start")return 0;if(r==="center")return e/2}return e},xS=function(e,t){var n=Ni.createElement("div");return n.className="gutter gutter-"+t,n},wS=function(e,t,n){var r={};return hh(t)?r[e]=t:r[e]=vS+"("+t+"% - "+n+"px)",r},kS=function(e,t){var n;return n={},n[e]=t+"px",n},qd=function(e,t){if(t===void 0&&(t={}),Mu)return{};var n=e,r,i,l,o,a,s;Array.from&&(n=Array.from(n));var u=Kd(n[0]),c=u.parentNode,d=getComputedStyle?getComputedStyle(c):null,p=d?d.flexDirection:null,f=je(t,"sizes")||n.map(function(){return 100/n.length}),k=je(t,"minSize",100),x=Array.isArray(k)?k:n.map(function(){return k}),C=je(t,"maxSize",1/0),h=Array.isArray(C)?C:n.map(function(){return C}),m=je(t,"expandToMin",!1),g=je(t,"gutterSize",10),_=je(t,"gutterAlign","center"),b=je(t,"snapOffset",30),S=Array.isArray(b)?b:n.map(function(){return b}),P=je(t,"dragInterval",1),z=je(t,"direction",al),O=je(t,"cursor",z===al?"col-resize":"row-resize"),L=je(t,"gutter",xS),F=je(t,"elementStyle",wS),V=je(t,"gutterStyle",kS);z===al?(r="width",i="clientX",l="left",o="right",a="clientWidth"):z==="vertical"&&(r="height",i="clientY",l="top",o="bottom",a="clientHeight");function Y(B,T,M,$){var Ee=F(r,T,M,$);Object.keys(Ee).forEach(function(ve){B.style[ve]=Ee[ve]})}function re(B,T,M){var $=V(r,T,M);Object.keys($).forEach(function(Ee){B.style[Ee]=$[Ee]})}function j(){return s.map(function(B){return B.size})}function K(B){return"touches"in B?B.touches[0][i]:B[i]}function ee(B){var T=s[this.a],M=s[this.b],$=T.size+M.size;T.size=B/this.size*$,M.size=$-B/this.size*$,Y(T.element,T.size,this[kt],T.i),Y(M.element,M.size,this[Ut],M.i)}function A(B){var T,M=s[this.a],$=s[this.b];this.dragging&&(T=K(B)-this.start+(this[kt]-this.dragOffset),P>1&&(T=Math.round(T/P)*P),T<=M.minSize+M.snapOffset+this[kt]?T=M.minSize+this[kt]:T>=this.size-($.minSize+$.snapOffset+this[Ut])&&(T=this.size-($.minSize+this[Ut])),T>=M.maxSize-M.snapOffset+this[kt]?T=M.maxSize+this[kt]:T<=this.size-($.maxSize-$.snapOffset+this[Ut])&&(T=this.size-($.maxSize+this[Ut])),ee.call(this,T),je(t,"onDrag",St)(j()))}function H(){var B=s[this.a].element,T=s[this.b].element,M=B[ma](),$=T[ma]();this.size=M[r]+$[r]+this[kt]+this[Ut],this.start=M[l],this.end=M[o]}function y(B){if(!getComputedStyle)return null;var T=getComputedStyle(B);if(!T)return null;var M=B[a];return M===0?null:(z===al?M-=parseFloat(T.paddingLeft)+parseFloat(T.paddingRight):M-=parseFloat(T.paddingTop)+parseFloat(T.paddingBottom),M)}function U(B){var T=y(c);if(T===null||x.reduce(function(ve,Fe){return ve+Fe},0)>T)return B;var M=0,$=[],Ee=B.map(function(ve,Fe){var zt=T*ve/100,Pn=sl(g,Fe===0,Fe===B.length-1,_),Nn=x[Fe]+Pn;return zt<Nn?(M+=Nn-zt,$.push(0),Nn):($.push(zt-Nn),zt)});return M===0?B:Ee.map(function(ve,Fe){var zt=ve;if(M>0&&$[Fe]-M>0){var Pn=Math.min(M,$[Fe]-M);M-=Pn,zt=ve-Pn}return zt/T*100})}function X(){var B=this,T=s[B.a].element,M=s[B.b].element;B.dragging&&je(t,"onDragEnd",St)(j()),B.dragging=!1,ut[wt]("mouseup",B.stop),ut[wt]("touchend",B.stop),ut[wt]("touchcancel",B.stop),ut[wt]("mousemove",B.move),ut[wt]("touchmove",B.move),B.stop=null,B.move=null,T[wt]("selectstart",St),T[wt]("dragstart",St),M[wt]("selectstart",St),M[wt]("dragstart",St),T.style.userSelect="",T.style.webkitUserSelect="",T.style.MozUserSelect="",T.style.pointerEvents="",M.style.userSelect="",M.style.webkitUserSelect="",M.style.MozUserSelect="",M.style.pointerEvents="",B.gutter.style.cursor="",B.parent.style.cursor="",Ni.body.style.cursor=""}function w(B){if(!("button"in B&&B.button!==0)){var T=this,M=s[T.a].element,$=s[T.b].element;T.dragging||je(t,"onDragStart",St)(j()),B.preventDefault(),T.dragging=!0,T.move=A.bind(T),T.stop=X.bind(T),ut[xt]("mouseup",T.stop),ut[xt]("touchend",T.stop),ut[xt]("touchcancel",T.stop),ut[xt]("mousemove",T.move),ut[xt]("touchmove",T.move),M[xt]("selectstart",St),M[xt]("dragstart",St),$[xt]("selectstart",St),$[xt]("dragstart",St),M.style.userSelect="none",M.style.webkitUserSelect="none",M.style.MozUserSelect="none",M.style.pointerEvents="none",$.style.userSelect="none",$.style.webkitUserSelect="none",$.style.MozUserSelect="none",$.style.pointerEvents="none",T.gutter.style.cursor=O,T.parent.style.cursor=O,Ni.body.style.cursor=O,H.call(T),T.dragOffset=K(B)-T.end}}f=U(f);var te=[];s=n.map(function(B,T){var M={element:Kd(B),size:f[T],minSize:x[T],maxSize:h[T],snapOffset:S[T],i:T},$;if(T>0&&($={a:T-1,b:T,dragging:!1,direction:z,parent:c},$[kt]=sl(g,T-1===0,!1,_),$[Ut]=sl(g,!1,T===n.length-1,_),p==="row-reverse"||p==="column-reverse")){var Ee=$.a;$.a=$.b,$.b=Ee}if(T>0){var ve=L(T,z,M.element);re(ve,g,T),$[Vr]=w.bind($),ve[xt]("mousedown",$[Vr]),ve[xt]("touchstart",$[Vr]),c.insertBefore(ve,M.element),$.gutter=ve}return Y(M.element,M.size,sl(g,T===0,T===n.length-1,_),T),T>0&&te.push($),M});function ke(B){var T=B.i===te.length,M=T?te[B.i-1]:te[B.i];H.call(M);var $=T?M.size-B.minSize-M[Ut]:B.minSize+M[kt];ee.call(M,$)}s.forEach(function(B){var T=B.element[ma]()[r];T<B.minSize&&(m?ke(B):B.minSize=T)});function ae(B){var T=U(B);T.forEach(function(M,$){if($>0){var Ee=te[$-1],ve=s[Ee.a],Fe=s[Ee.b];ve.size=T[$-1],Fe.size=M,Y(ve.element,ve.size,Ee[kt],ve.i),Y(Fe.element,Fe.size,Ee[Ut],Fe.i)}})}function st(B,T){te.forEach(function(M){if(T!==!0?M.parent.removeChild(M.gutter):(M.gutter[wt]("mousedown",M[Vr]),M.gutter[wt]("touchstart",M[Vr])),B!==!0){var $=F(r,M.a.size,M[kt]);Object.keys($).forEach(function(Ee){s[M.a].element.style[Ee]="",s[M.b].element.style[Ee]=""})}})}return{setSizes:ae,getSizes:j,collapse:function(T){ke(s[T])},destroy:st,parent:c,pairs:te}};function ha(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)===-1&&(n[r]=e[r]);return n}var to=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentDidMount=function(){var r=this.props;r.children;var i=r.gutter,l=ha(r,["children","gutter"]),o=l;o.gutter=function(a,s){var u;return i?u=i(a,s):(u=document.createElement("div"),u.className="gutter gutter-"+s),u.__isSplitGutter=!0,u},this.split=qd(this.parent.children,o)},t.prototype.componentDidUpdate=function(r){var i=this,l=this.props;l.children;var o=l.minSize,a=l.sizes,s=l.collapsed,u=ha(l,["children","minSize","sizes","collapsed"]),c=u,d=r.minSize,p=r.sizes,f=r.collapsed,k=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"],x=k.map(function(m){return i.props[m]!==r[m]}).reduce(function(m,g){return m||g},!1);if(Array.isArray(o)&&Array.isArray(d)){var C=!1;o.forEach(function(m,g){C=C||m!==d[g]}),x=x||C}else Array.isArray(o)||Array.isArray(d)?x=!0:x=x||o!==d;if(x)c.minSize=o,c.sizes=a||this.split.getSizes(),this.split.destroy(!0,!0),c.gutter=function(m,g,_){return _.previousSibling},this.split=qd(Array.from(this.parent.children).filter(function(m){return!m.__isSplitGutter}),c);else if(a){var h=!1;a.forEach(function(m,g){h=h||m!==p[g]}),h&&this.split.setSizes(this.props.sizes)}Number.isInteger(s)&&(s!==f||x)&&this.split.collapse(s)},t.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},t.prototype.render=function(){var r=this,i=this.props;i.sizes,i.minSize,i.maxSize,i.expandToMin,i.gutterSize,i.gutterAlign,i.snapOffset,i.dragInterval,i.direction,i.cursor,i.gutter,i.elementStyle,i.gutterStyle,i.onDrag,i.onDragStart,i.onDragEnd,i.collapsed;var l=i.children,o=ha(i,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]),a=o;return jt.createElement("div",Object.assign({},{ref:function(s){r.parent=s}},a),l)},t}(jt.Component);to.propTypes={sizes:le.arrayOf(le.number),minSize:le.oneOfType([le.number,le.arrayOf(le.number)]),maxSize:le.oneOfType([le.number,le.arrayOf(le.number)]),expandToMin:le.bool,gutterSize:le.number,gutterAlign:le.string,snapOffset:le.oneOfType([le.number,le.arrayOf(le.number)]),dragInterval:le.number,direction:le.string,cursor:le.string,gutter:le.func,elementStyle:le.func,gutterStyle:le.func,onDrag:le.func,onDragStart:le.func,onDragEnd:le.func,collapsed:le.number,children:le.arrayOf(le.element)};to.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};function SS(){const[e,t]=E.useState(!1),[n,r]=E.useState(!1),[i,l]=E.useState(null),[o,a]=E.useState([]),s=E.useRef(null),u=E.useRef(!1),c=E.useCallback(x=>{a(C=>[...C,x])},[]),d=E.useCallback(()=>{a([])},[]),p=E.useCallback(async()=>{if(!(s.current||u.current)){u.current=!0,t(!0),l(null);try{window.loadPyodide||await new Promise((C,h)=>{const m=document.createElement("script");m.src="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js",m.async=!0,m.onload=()=>C(),m.onerror=()=>h(new Error("Failed to load Pyodide")),document.head.appendChild(m)});const x=await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"});x.setStdout({batched:C=>{C.trim()&&c(C)}}),x.setStderr({batched:C=>{C.trim()&&c(`[Error] ${C}`)}}),await x.loadPackage(["numpy"]),s.current=x,r(!0),c("Python environment ready with NumPy loaded.")}catch(x){const C=x instanceof Error?x.message:"Failed to initialize Python";l(C),c(`[Error] ${C}`)}finally{t(!1),u.current=!1}}},[c]);E.useEffect(()=>{p()},[p]);const f=E.useCallback(async x=>{if(!s.current)return{success:!1,error:"Python environment not ready"};try{return d(),await s.current.runPythonAsync(x),{success:!0}}catch(C){const h=C instanceof Error?C.message:"Execution error";return c(`[Error] ${h}`),{success:!1,error:h}}},[c,d]),k=E.useCallback(async(x,C,h)=>{if(!s.current)return C.map(g=>({id:g.id,passed:!1,description:g.description,expected:g.expected,actual:"Python environment not ready",hidden:g.hidden}));const m=[];d();try{await s.current.runPythonAsync(x);for(const g of C)try{const _=`
import numpy as np
import json

# Parse input
test_input = ${g.input}

# Call the function
if isinstance(test_input, list):
    result = ${h}(np.array(test_input))
elif isinstance(test_input, tuple):
    result = ${h}(*[np.array(x) if isinstance(x, list) else x for x in test_input])
else:
    result = ${h}(test_input)

# Convert result to string for comparison
if isinstance(result, np.ndarray):
    result_str = str(result.tolist())
elif isinstance(result, (list, dict)):
    result_str = json.dumps(result)
elif isinstance(result, float):
    result_str = str(round(result, 6))
else:
    result_str = str(result)
result_str
`,b=await s.current.runPythonAsync(_),S=String(b),P=g.expected.replace(/\s/g,""),z=S.replace(/\s/g,""),O=P===z;m.push({id:g.id,passed:O,description:g.description,expected:g.expected,actual:S,hidden:g.hidden}),c(O?`Test ${g.id}: PASSED`:`Test ${g.id}: FAILED - Expected ${g.expected}, got ${S}`)}catch(_){const b=_ instanceof Error?_.message:"Test execution error";m.push({id:g.id,passed:!1,description:g.description,expected:g.expected,actual:b,hidden:g.hidden}),c(`Test ${g.id}: ERROR - ${b}`)}}catch(g){const _=g instanceof Error?g.message:"Code execution error";return c(`[Error] ${_}`),C.map(b=>({id:b.id,passed:!1,description:b.description,expected:b.expected,actual:_,hidden:b.hidden}))}return m},[c,d]);return{isLoading:e,isReady:n,error:i,output:o,runCode:f,runTests:k,clearOutput:d}}function Qd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function _S(e){if(Array.isArray(e))return e}function CS(e,t,n){return(t=LS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ES(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,l,o,a=[],s=!0,u=!1;try{if(l=(n=n.call(e)).next,t!==0)for(;!(s=(r=l.call(n)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function bS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yd(Object(n),!0).forEach(function(r){CS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PS(e,t){if(e==null)return{};var n,r,i=NS(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function NS(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function zS(e,t){return _S(e)||ES(e,t)||IS(e,t)||bS()}function TS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function LS(e){var t=TS(e,"string");return typeof t=="symbol"?t:t+""}function IS(e,t){if(e){if(typeof e=="string")return Qd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qd(e,t):void 0}}function RS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Jd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zd(Object(n),!0).forEach(function(r){RS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function AS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,l){return l(i)},r)}}function qr(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return t.apply(n,[].concat(i,a))}}}function no(e){return{}.toString.call(e).includes("Object")}function jS(e){return!Object.keys(e).length}function zi(e){return typeof e=="function"}function OS(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function MS(e,t){return no(t)||vn("changeType"),Object.keys(t).some(function(n){return!OS(e,n)})&&vn("changeField"),t}function DS(e){zi(e)||vn("selectorType")}function FS(e){zi(e)||no(e)||vn("handlerType"),no(e)&&Object.values(e).some(function(t){return!zi(t)})&&vn("handlersType")}function BS(e){e||vn("initialIsRequired"),no(e)||vn("initialType"),jS(e)&&vn("initialContent")}function US(e,t){throw new Error(e[t]||e.default)}var WS={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},vn=qr(US)(WS),ul={changes:MS,selector:DS,handler:FS,initial:BS};function VS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ul.initial(e),ul.handler(t);var n={current:e},r=qr(XS)(n,t),i=qr($S)(n),l=qr(ul.changes)(e),o=qr(HS)(n);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(c){return c};return ul.selector(u),u(n.current)}function s(u){AS(r,i,l,o)(u)}return[a,s]}function HS(e,t){return zi(t)?t(e.current):t}function $S(e,t){return e.current=Jd(Jd({},e.current),t),t}function XS(e,t,n){return zi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var KS={create:VS},qS={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function QS(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return t.apply(n,[].concat(i,a))}}}function YS(e){return{}.toString.call(e).includes("Object")}function GS(e){return e||ep("configIsRequired"),YS(e)||ep("configType"),e.urls?(ZS(),{paths:{vs:e.urls.monacoBase}}):e}function ZS(){console.warn(gh.deprecation)}function JS(e,t){throw new Error(e[t]||e.default)}var gh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ep=QS(JS)(gh),e_={config:GS},t_=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(l,o){return o(l)},i)}};function yh(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],yh(e[n],t[n]))}),Gd(Gd({},e),t)}var n_={type:"cancelation",msg:"operation is manually canceled"};function ga(e){var t=!1,n=new Promise(function(r,i){e.then(function(l){return t?i(n_):r(l)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var r_=["monaco"],i_=KS.create({config:qS,isInitialized:!1,resolve:null,reject:null,monaco:null}),vh=zS(i_,2),Bi=vh[0],No=vh[1];function l_(e){var t=e_.config(e),n=t.monaco,r=PS(t,r_);No(function(i){return{config:yh(i.config,r),monaco:n}})}function o_(){var e=Bi(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(No({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ga(ya);if(window.monaco&&window.monaco.editor)return xh(window.monaco),e.resolve(window.monaco),ga(ya);t_(a_,u_)(c_)}return ga(ya)}function a_(e){return document.body.appendChild(e)}function s_(e){var t=document.createElement("script");return e&&(t.src=e),t}function u_(e){var t=Bi(function(r){var i=r.config,l=r.reject;return{config:i,reject:l}}),n=s_("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function c_(){var e=Bi(function(n){var r=n.config,i=n.resolve,l=n.reject;return{config:r,resolve:i,reject:l}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;xh(r),e.resolve(r)},function(n){e.reject(n)})}function xh(e){Bi().monaco||No({monaco:e})}function d_(){return Bi(function(e){var t=e.monaco;return t})}var ya=new Promise(function(e,t){return No({resolve:e,reject:t})}),wh={config:l_,init:o_,__getMonacoInstance:d_},p_={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},va=p_,f_={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},m_=f_;function h_({children:e}){return jt.createElement("div",{style:m_.container},e)}var g_=h_,y_=g_;function v_({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:l,wrapperProps:o}){return jt.createElement("section",{style:{...va.wrapper,width:e,height:t},...o},!n&&jt.createElement(y_,null,r),jt.createElement("div",{ref:i,style:{...va.fullWidth,...!n&&va.hide},className:l}))}var x_=v_,kh=E.memo(x_);function w_(e){E.useEffect(e,[])}var Sh=w_;function k_(e,t,n=!0){let r=E.useRef(!0);E.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var tt=k_;function ai(){}function ar(e,t,n,r){return S_(e,r)||__(e,t,n,r)}function S_(e,t){return e.editor.getModel(_h(e,t))}function __(e,t,n,r){return e.editor.createModel(t,n,r?_h(e,r):void 0)}function _h(e,t){return e.Uri.parse(t)}function C_({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:l,modifiedModelPath:o,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:s=!1,theme:u="light",loading:c="Loading...",options:d={},height:p="100%",width:f="100%",className:k,wrapperProps:x={},beforeMount:C=ai,onMount:h=ai}){let[m,g]=E.useState(!1),[_,b]=E.useState(!0),S=E.useRef(null),P=E.useRef(null),z=E.useRef(null),O=E.useRef(h),L=E.useRef(C),F=E.useRef(!1);Sh(()=>{let j=wh.init();return j.then(K=>(P.current=K)&&b(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>S.current?re():j.cancel()}),tt(()=>{if(S.current&&P.current){let j=S.current.getOriginalEditor(),K=ar(P.current,e||"",r||n||"text",l||"");K!==j.getModel()&&j.setModel(K)}},[l],m),tt(()=>{if(S.current&&P.current){let j=S.current.getModifiedEditor(),K=ar(P.current,t||"",i||n||"text",o||"");K!==j.getModel()&&j.setModel(K)}},[o],m),tt(()=>{let j=S.current.getModifiedEditor();j.getOption(P.current.editor.EditorOption.readOnly)?j.setValue(t||""):t!==j.getValue()&&(j.executeEdits("",[{range:j.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),j.pushUndoStop())},[t],m),tt(()=>{var j,K;(K=(j=S.current)==null?void 0:j.getModel())==null||K.original.setValue(e||"")},[e],m),tt(()=>{let{original:j,modified:K}=S.current.getModel();P.current.editor.setModelLanguage(j,r||n||"text"),P.current.editor.setModelLanguage(K,i||n||"text")},[n,r,i],m),tt(()=>{var j;(j=P.current)==null||j.editor.setTheme(u)},[u],m),tt(()=>{var j;(j=S.current)==null||j.updateOptions(d)},[d],m);let V=E.useCallback(()=>{var ee;if(!P.current)return;L.current(P.current);let j=ar(P.current,e||"",r||n||"text",l||""),K=ar(P.current,t||"",i||n||"text",o||"");(ee=S.current)==null||ee.setModel({original:j,modified:K})},[n,t,i,e,r,l,o]),Y=E.useCallback(()=>{var j;!F.current&&z.current&&(S.current=P.current.editor.createDiffEditor(z.current,{automaticLayout:!0,...d}),V(),(j=P.current)==null||j.editor.setTheme(u),g(!0),F.current=!0)},[d,u,V]);E.useEffect(()=>{m&&O.current(S.current,P.current)},[m]),E.useEffect(()=>{!_&&!m&&Y()},[_,m,Y]);function re(){var K,ee,A,H;let j=(K=S.current)==null?void 0:K.getModel();a||((ee=j==null?void 0:j.original)==null||ee.dispose()),s||((A=j==null?void 0:j.modified)==null||A.dispose()),(H=S.current)==null||H.dispose()}return jt.createElement(kh,{width:f,height:p,isEditorReady:m,loading:c,_ref:z,className:k,wrapperProps:x})}var E_=C_;E.memo(E_);function b_(e){let t=E.useRef();return E.useEffect(()=>{t.current=e},[e]),t.current}var P_=b_,cl=new Map;function N_({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:l,theme:o="light",line:a,loading:s="Loading...",options:u={},overrideServices:c={},saveViewState:d=!0,keepCurrentModel:p=!1,width:f="100%",height:k="100%",className:x,wrapperProps:C={},beforeMount:h=ai,onMount:m=ai,onChange:g,onValidate:_=ai}){let[b,S]=E.useState(!1),[P,z]=E.useState(!0),O=E.useRef(null),L=E.useRef(null),F=E.useRef(null),V=E.useRef(m),Y=E.useRef(h),re=E.useRef(),j=E.useRef(r),K=P_(l),ee=E.useRef(!1),A=E.useRef(!1);Sh(()=>{let U=wh.init();return U.then(X=>(O.current=X)&&z(!1)).catch(X=>(X==null?void 0:X.type)!=="cancelation"&&console.error("Monaco initialization: error:",X)),()=>L.current?y():U.cancel()}),tt(()=>{var X,w,te,ke;let U=ar(O.current,e||r||"",t||i||"",l||n||"");U!==((X=L.current)==null?void 0:X.getModel())&&(d&&cl.set(K,(w=L.current)==null?void 0:w.saveViewState()),(te=L.current)==null||te.setModel(U),d&&((ke=L.current)==null||ke.restoreViewState(cl.get(l))))},[l],b),tt(()=>{var U;(U=L.current)==null||U.updateOptions(u)},[u],b),tt(()=>{!L.current||r===void 0||(L.current.getOption(O.current.editor.EditorOption.readOnly)?L.current.setValue(r):r!==L.current.getValue()&&(A.current=!0,L.current.executeEdits("",[{range:L.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),L.current.pushUndoStop(),A.current=!1))},[r],b),tt(()=>{var X,w;let U=(X=L.current)==null?void 0:X.getModel();U&&i&&((w=O.current)==null||w.editor.setModelLanguage(U,i))},[i],b),tt(()=>{var U;a!==void 0&&((U=L.current)==null||U.revealLine(a))},[a],b),tt(()=>{var U;(U=O.current)==null||U.editor.setTheme(o)},[o],b);let H=E.useCallback(()=>{var U;if(!(!F.current||!O.current)&&!ee.current){Y.current(O.current);let X=l||n,w=ar(O.current,r||e||"",t||i||"",X||"");L.current=(U=O.current)==null?void 0:U.editor.create(F.current,{model:w,automaticLayout:!0,...u},c),d&&L.current.restoreViewState(cl.get(X)),O.current.editor.setTheme(o),a!==void 0&&L.current.revealLine(a),S(!0),ee.current=!0}},[e,t,n,r,i,l,u,c,d,o,a]);E.useEffect(()=>{b&&V.current(L.current,O.current)},[b]),E.useEffect(()=>{!P&&!b&&H()},[P,b,H]),j.current=r,E.useEffect(()=>{var U,X;b&&g&&((U=re.current)==null||U.dispose(),re.current=(X=L.current)==null?void 0:X.onDidChangeModelContent(w=>{A.current||g(L.current.getValue(),w)}))},[b,g]),E.useEffect(()=>{if(b){let U=O.current.editor.onDidChangeMarkers(X=>{var te;let w=(te=L.current.getModel())==null?void 0:te.uri;if(w&&X.find(ke=>ke.path===w.path)){let ke=O.current.editor.getModelMarkers({resource:w});_==null||_(ke)}});return()=>{U==null||U.dispose()}}return()=>{}},[b,_]);function y(){var U,X;(U=re.current)==null||U.dispose(),p?d&&cl.set(l,L.current.saveViewState()):(X=L.current.getModel())==null||X.dispose(),L.current.dispose()}return jt.createElement(kh,{width:f,height:k,isEditorReady:b,loading:s,_ref:F,className:x,wrapperProps:C})}var z_=N_,T_=E.memo(z_),L_=T_;function I_({value:e,onChange:t,height:n="400px"}){const r=E.useCallback(i=>{t(i||"")},[t]);return v.jsx("div",{className:"h-full border border-gray-200 rounded-lg overflow-hidden shadow-sm",children:v.jsx(L_,{height:n,defaultLanguage:"python",theme:"light",value:e,onChange:r,options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,wordWrap:"on",padding:{top:16,bottom:16},scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8}}})})}function R_({output:e,isLoading:t=!1}){const n=E.useRef(null);return E.useEffect(()=>{var r;(r=n.current)==null||r.scrollIntoView({behavior:"smooth"})},[e]),v.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg h-full flex flex-col shadow-sm",children:[v.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50",children:[v.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Console Output"}),t&&v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"w-2 h-2 bg-primary-500 rounded-full animate-pulse"}),v.jsx("span",{className:"text-xs text-gray-500",children:"Running..."})]})]}),v.jsxs("div",{className:"flex-1 overflow-auto p-4 font-mono text-sm bg-gray-900 rounded-b-lg",children:[e.length===0?v.jsx("div",{className:"text-gray-500 italic",children:"Output will appear here when you run your code..."}):e.map((r,i)=>v.jsx("div",{className:`py-0.5 ${r.startsWith("[Error]")?"text-red-400":r.includes("PASSED")?"text-green-400":r.includes("FAILED")?"text-red-400":"text-gray-300"}`,children:r.startsWith("Test")?v.jsxs("span",{children:[r.includes("PASSED")?"✓ ":r.includes("FAILED")?"✗ ":"",r]}):v.jsxs("span",{children:["> ",r]})},i)),v.jsx("div",{ref:n})]})]})}function A_({problem:e}){return v.jsxs("div",{className:"prose prose-sm max-w-none",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("h1",{className:"text-xl font-bold text-gray-900 m-0",children:e.title}),v.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-medium ${e.difficulty==="easy"?"bg-green-100 text-green-700":e.difficulty==="medium"?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:e.difficulty})]}),v.jsx(ch,{components:{h2:({children:t})=>v.jsx("h2",{className:"text-lg font-semibold text-gray-900 mt-6 mb-3",children:t}),h3:({children:t})=>v.jsx("h3",{className:"text-base font-medium text-gray-700 mt-4 mb-2",children:t}),p:({children:t})=>v.jsx("p",{className:"text-gray-600 mb-3 leading-relaxed",children:t}),code:({className:t,children:n})=>(t==null?void 0:t.includes("language-"))?v.jsx("pre",{className:"bg-gray-100 rounded-lg p-4 overflow-x-auto my-3",children:v.jsx("code",{className:"text-sm text-gray-800",children:n})}):v.jsx("code",{className:"bg-gray-100 px-1.5 py-0.5 rounded text-primary-600 text-sm",children:n}),ul:({children:t})=>v.jsx("ul",{className:"list-disc list-inside text-gray-600 space-y-1 mb-3",children:t}),li:({children:t})=>v.jsx("li",{className:"text-gray-600",children:t})},children:e.description})]})}function j_({examples:e}){return v.jsxs("div",{className:"mt-6",children:[v.jsx("h3",{className:"text-base font-medium text-gray-900 mb-3",children:"Examples"}),v.jsx("div",{className:"space-y-4",children:e.map((t,n)=>v.jsx("div",{className:"bg-white rounded-lg p-4 border border-gray-200 shadow-sm",children:v.jsxs("div",{className:"space-y-2",children:[v.jsxs("div",{children:[v.jsx("span",{className:"text-gray-500 text-sm",children:"Input:"}),v.jsx("pre",{className:"mt-1 text-sm text-primary-600 font-mono",children:t.input})]}),v.jsxs("div",{children:[v.jsx("span",{className:"text-gray-500 text-sm",children:"Output:"}),v.jsx("pre",{className:"mt-1 text-sm text-green-600 font-mono",children:t.output})]}),t.explanation&&v.jsxs("div",{className:"pt-2 border-t border-gray-200",children:[v.jsx("span",{className:"text-gray-500 text-sm",children:"Explanation: "}),v.jsx("span",{className:"text-gray-600 text-sm",children:t.explanation})]})]})},n))})]})}function O_({hints:e,solution:t}){const[n,r]=E.useState(0),[i,l]=E.useState(!1),o=()=>{n<e.length&&r(s=>s+1)},a=()=>{l(!0)};return v.jsxs("div",{className:"mt-6 space-y-4",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsx("h3",{className:"text-base font-medium text-gray-900",children:"Hints"}),n<e.length&&v.jsxs("button",{onClick:o,className:"text-sm text-primary-600 hover:text-primary-500 transition-colors",children:["Show Hint (",n,"/",e.length,")"]})]}),n>0?v.jsx("div",{className:"space-y-2",children:e.slice(0,n).map((s,u)=>v.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:v.jsxs("div",{className:"flex items-start gap-2",children:[v.jsx("span",{className:"text-yellow-600",children:"💡"}),v.jsx("span",{className:"text-gray-700 text-sm",children:s})]})},u))}):v.jsx("div",{className:"text-gray-400 text-sm italic",children:'Click "Show Hint" if you need help'})]}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsx("h3",{className:"text-base font-medium text-gray-900",children:"Solution"}),!i&&n>=e.length&&v.jsx("button",{onClick:a,className:"text-sm text-primary-600 hover:text-primary-500 transition-colors",children:"Reveal Solution"})]}),i?v.jsxs("div",{className:"bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm",children:[v.jsx("div",{className:"px-4 py-2 bg-gray-100 border-b border-gray-200",children:v.jsx("span",{className:"text-sm text-gray-600",children:"Solution Code"})}),v.jsx("pre",{className:"p-4 text-sm text-gray-300 font-mono overflow-x-auto bg-gray-900",children:t})]}):n<e.length?v.jsx("div",{className:"text-gray-400 text-sm italic",children:"Reveal all hints first to unlock the solution"}):v.jsx("div",{className:"text-gray-400 text-sm italic",children:'Click "Reveal Solution" to see the answer'})]})]})}function M_({results:e,isRunning:t}){if(t)return v.jsxs("div",{className:"flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm",children:[v.jsx("div",{className:"w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"}),v.jsx("span",{className:"text-gray-600",children:"Running tests..."})]});if(e.length===0)return null;const n=e.filter(i=>i.passed).length,r=e.filter(i=>!i.hidden);return v.jsxs("div",{className:"bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm",children:[v.jsxs("div",{className:"px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-gray-50",children:[v.jsx("span",{className:"font-medium text-gray-900",children:"Test Results"}),v.jsxs("span",{className:`text-sm font-medium ${n===e.length?"text-green-600":"text-yellow-600"}`,children:[n,"/",e.length," passed"]})]}),v.jsxs("div",{className:"divide-y divide-gray-200",children:[r.map(i=>v.jsxs("div",{className:"p-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[v.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-xs ${i.passed?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:i.passed?"✓":"✗"}),v.jsxs("span",{className:"text-gray-700 text-sm font-medium",children:["Test ",i.id,": ",i.description]})]}),!i.passed&&v.jsxs("div",{className:"ml-7 space-y-1 text-sm",children:[v.jsxs("div",{children:[v.jsx("span",{className:"text-gray-500",children:"Expected: "}),v.jsx("span",{className:"text-green-600 font-mono",children:i.expected})]}),v.jsxs("div",{children:[v.jsx("span",{className:"text-gray-500",children:"Actual: "}),v.jsx("span",{className:"text-red-600 font-mono",children:i.actual})]})]})]},i.id)),e.some(i=>i.hidden)&&v.jsxs("div",{className:"p-4 text-gray-500 text-sm italic",children:["+ ",e.filter(i=>i.hidden).length," hidden test(s)",e.filter(i=>i.hidden&&i.passed).length===e.filter(i=>i.hidden).length?v.jsx("span",{className:"text-green-600 ml-2",children:"(all passed)"}):v.jsxs("span",{className:"text-red-600 ml-2",children:["(",e.filter(i=>i.hidden&&!i.passed).length," failed)"]})]})]})]})}function D_(){const{sectionId:e,problemId:t}=Sm(),{getProblemProgress:n,saveProblemCode:r,updateProblemStatus:i}=Mi(),{isLoading:l,isReady:o,output:a,runTests:s,clearOutput:u}=SS(),c=t?cS(t):void 0,d=Cr.find(z=>z.id===e),[p,f]=E.useState(""),[k,x]=E.useState([]),[C,h]=E.useState(!1);E.useEffect(()=>{if(c&&e){const z=n(e,c.id);f(z.code||c.starterCode)}},[c,e,n]),E.useEffect(()=>{if(p&&c&&e&&p!==c.starterCode){const z=setTimeout(()=>{r(e,c.id,p)},1e3);return()=>clearTimeout(z)}},[p,c,e,r]);const m=E.useCallback(z=>{f(z)},[]),g=E.useCallback(()=>{c&&(f(c.starterCode),x([]),u())},[c,u]),_=z=>{const O=z.match(/def\s+(\w+)\s*\(/);return O?O[1]:"solution"},b=E.useCallback(async()=>{if(!(!c||!o||!e)){h(!0),x([]);try{const z=_(c.starterCode),O=await s(p,c.testCases,z);x(O),O.every(F=>F.passed)&&i(e,c.id,"completed")}finally{h(!1)}}},[c,o,e,p,s,i]);if(!c||!d)return v.jsxs("div",{className:"text-center py-12",children:[v.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Problem Not Found"}),v.jsx(yn,{to:"/",className:"text-primary-600 hover:text-primary-500",children:"Return to Home"})]});const S=d.problems.indexOf(c.id),P=d.problems[S+1];return v.jsxs("div",{className:"h-[calc(100vh-8rem)] flex flex-col -m-6",children:[v.jsxs("div",{className:"flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs(yn,{to:`/section/${e}`,className:"text-gray-500 hover:text-gray-900 transition-colors",children:["← ",d.title]}),v.jsx("span",{className:"text-gray-300",children:"/"}),v.jsx("span",{className:"text-gray-900 font-medium",children:c.title})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[!o&&v.jsxs("span",{className:"text-gray-500 text-sm flex items-center gap-2",children:[v.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full animate-pulse"}),l?"Loading Python...":"Python ready"]}),o&&v.jsxs("span",{className:"text-gray-500 text-sm flex items-center gap-2",children:[v.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),"Python ready"]})]})]}),v.jsxs(to,{className:"flex flex-1 overflow-hidden",sizes:[40,60],minSize:300,gutterSize:8,gutterAlign:"center",children:[v.jsxs("div",{className:"overflow-auto p-6 bg-gray-50",children:[v.jsx(A_,{problem:c}),v.jsx(j_,{examples:c.examples}),v.jsx(O_,{hints:c.hints,solution:c.solution})]}),v.jsxs("div",{className:"flex flex-col overflow-hidden bg-white",children:[v.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("button",{onClick:b,disabled:!o||C,className:"px-4 py-1.5 bg-primary-500 text-white text-sm font-medium rounded-md hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:C?"Running...":"Run Tests"}),v.jsx("button",{onClick:g,className:"px-4 py-1.5 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 transition-colors",children:"Reset"})]}),k.length>0&&k.every(z=>z.passed)&&P&&v.jsx(yn,{to:`/problem/${e}/${P}`,className:"px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-md hover:bg-green-200 transition-colors",children:"Next Problem →"})]}),v.jsxs(to,{className:"flex-1 overflow-hidden",direction:"vertical",sizes:[60,40],minSize:100,gutterSize:8,children:[v.jsx("div",{className:"h-full overflow-hidden p-4",children:v.jsx(I_,{value:p,onChange:m,height:"100%"})}),v.jsxs("div",{className:"overflow-auto p-4 space-y-4 bg-gray-50",children:[v.jsx(M_,{results:k,isRunning:C}),v.jsx(R_,{output:a,isLoading:C})]})]})]})]})]})}function F_(){return v.jsx(pv,{children:v.jsxs(q0,{children:[v.jsx(_l,{path:"/",element:v.jsx(fv,{})}),v.jsx(_l,{path:"/section/:sectionId",element:v.jsx(pS,{})}),v.jsx(_l,{path:"/problem/:sectionId/:problemId",element:v.jsx(D_,{})})]})})}xa.createRoot(document.getElementById("root")).render(v.jsx(jt.StrictMode,{children:v.jsx(nv,{basename:"/ml-interview-prep",children:v.jsx(uv,{children:v.jsx(F_,{})})})}));
