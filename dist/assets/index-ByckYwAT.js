function w0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function S0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var of={exports:{}},So={},lf={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var br=Symbol.for("react.element"),k0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),P0=Symbol.for("react.forward_ref"),O0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),L0=Symbol.for("react.lazy"),du=Symbol.iterator;function z0(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sf=Object.assign,uf={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||af}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=Xn.prototype;function Ga(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||af}var qa=Ga.prototype=new cf;qa.constructor=Ga;sf(qa,Xn.prototype);qa.isPureReactComponent=!0;var pu=Array.isArray,ff=Object.prototype.hasOwnProperty,Ja={current:null},df={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ff.call(t,r)&&!df.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:br,type:e,key:o,ref:l,props:i,_owner:Ja.current}}function M0(e,t){return{$$typeof:br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function es(e){return typeof e=="object"&&e!==null&&e.$$typeof===br}function R0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mu=/\/+/g;function ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?R0(""+e.key):t.toString(36)}function Oi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case br:case k0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ml(l,0):r,pu(i)?(n="",e!=null&&(n=e.replace(mu,"$&/")+"/"),Oi(i,t,n,"",function(u){return u})):i!=null&&(es(i)&&(i=M0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(mu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",pu(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+ml(o,a);l+=Oi(o,t,n,s,i)}else if(s=z0(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+ml(o,a++),l+=Oi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ii(e,t,n){if(e==null)return e;var r=[],i=0;return Oi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function I0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Ti={transition:null},$0={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:Ja};function mf(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Xn;R.Fragment=E0;R.Profiler=_0;R.PureComponent=Ga;R.StrictMode=C0;R.Suspense=O0;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0;R.act=mf;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ja.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ff.call(t,s)&&!df.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:br,type:e.type,key:i,ref:o,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:N0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j0,_context:e},e.Consumer=e};R.createElement=pf;R.createFactory=function(e){var t=pf.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:P0,render:e}};R.isValidElement=es;R.lazy=function(e){return{$$typeof:L0,_payload:{_status:-1,_result:e},_init:I0}};R.memo=function(e,t){return{$$typeof:T0,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};R.unstable_act=mf;R.useCallback=function(e,t){return je.current.useCallback(e,t)};R.useContext=function(e){return je.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return je.current.useDeferredValue(e)};R.useEffect=function(e,t){return je.current.useEffect(e,t)};R.useId=function(){return je.current.useId()};R.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return je.current.useMemo(e,t)};R.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};R.useRef=function(e){return je.current.useRef(e)};R.useState=function(e){return je.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return je.current.useTransition()};R.version="18.3.1";lf.exports=R;var T=lf.exports;const Ct=S0(T),Xl=w0({__proto__:null,default:Ct},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=T,D0=Symbol.for("react.element"),F0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,H0=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function hf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)B0.call(t,r)&&!U0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:D0,type:e,key:o,ref:l,props:i,_owner:H0.current}}So.Fragment=F0;So.jsx=hf;So.jsxs=hf;of.exports=So;var c=of.exports,Yl={},vf={exports:{}},He={},yf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var M=N.length;N.push(L);e:for(;0<M;){var I=M-1>>>1,J=N[I];if(0<i(J,L))N[I]=L,N[M]=J,M=I;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],M=N.pop();if(M!==L){N[0]=M;e:for(var I=0,J=N.length,Ve=J>>>1;I<Ve;){var Ee=2*(I+1)-1,pl=N[Ee],en=Ee+1,ni=N[en];if(0>i(pl,M))en<J&&0>i(ni,pl)?(N[I]=ni,N[en]=M,I=en):(N[I]=pl,N[Ee]=M,I=Ee);else if(en<J&&0>i(ni,M))N[I]=ni,N[en]=M,I=en;else break e}}return L}function i(N,L){var M=N.sortIndex-L.sortIndex;return M!==0?M:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,h=null,v=3,x=!1,w=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=N)r(u),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(u)}}function g(N){if(y=!1,m(N),!w)if(n(s)!==null)w=!0,qn(k);else{var L=n(u);L!==null&&Jn(g,L.startTime-N)}}function k(N,L){w=!1,y&&(y=!1,d(O),O=-1),x=!0;var M=v;try{for(m(L),h=n(s);h!==null&&(!(h.expirationTime>L)||N&&!ve());){var I=h.callback;if(typeof I=="function"){h.callback=null,v=h.priorityLevel;var J=I(h.expirationTime<=L);L=e.unstable_now(),typeof J=="function"?h.callback=J:h===n(s)&&r(s),m(L)}else r(s);h=n(s)}if(h!==null)var Ve=!0;else{var Ee=n(u);Ee!==null&&Jn(g,Ee.startTime-L),Ve=!1}return Ve}finally{h=null,v=M,x=!1}}var E=!1,S=null,O=-1,A=5,z=-1;function ve(){return!(e.unstable_now()-z<A)}function ye(){if(S!==null){var N=e.unstable_now();z=N;var L=!0;try{L=S(!0,N)}finally{L?Ie():(E=!1,S=null)}}else E=!1}var Ie;if(typeof f=="function")Ie=function(){f(ye)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,gn=qe.port2;qe.port1.onmessage=ye,Ie=function(){gn.postMessage(null)}}else Ie=function(){j(ye,0)};function qn(N){S=N,E||(E=!0,Ie())}function Jn(N,L){O=j(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,qn(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(v){case 1:case 2:case 3:var L=3;break;default:L=v}var M=v;v=L;try{return N()}finally{v=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=v;v=N;try{return L()}finally{v=M}},e.unstable_scheduleCallback=function(N,L,M){var I=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?I+M:I):M=I,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=M+J,N={id:p++,callback:L,priorityLevel:N,startTime:M,expirationTime:J,sortIndex:-1},M>I?(N.sortIndex=M,t(u,N),n(s)===null&&N===n(u)&&(y?(d(O),O=-1):y=!0,Jn(g,M-I))):(N.sortIndex=J,t(s,N),w||x||(w=!0,qn(k))),N},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(N){var L=v;return function(){var M=v;v=L;try{return N.apply(this,arguments)}finally{v=M}}}})(gf);yf.exports=gf;var b0=yf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=T,Be=b0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xf=new Set,kr={};function vn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(kr[e]=t,e=0;e<t.length;e++)xf.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,W0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hu={},vu={};function Q0(e){return Kl.call(vu,e)?!0:Kl.call(hu,e)?!1:W0.test(e)?vu[e]=!0:(hu[e]=!0,!1)}function X0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y0(e,t,n,r){if(t===null||typeof t>"u"||X0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var ts=/[\-:]([a-z])/g;function ns(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ts,ns);he[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ts,ns);he[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ts,ns);he[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function rs(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y0(t,n,i,r)&&(n=null),r||i===null?Q0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),wn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),is=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),ls=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),kf=Symbol.for("react.offscreen"),yu=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,hl;function ur(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function K0(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case wn:return"Portal";case Zl:return"Profiler";case is:return"StrictMode";case Gl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sf:return(e.displayName||"Context")+".Consumer";case wf:return(e._context.displayName||"Context")+".Provider";case os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ls:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function Z0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===is?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G0(e){var t=Ef(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=G0(e))}function Cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ef(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _f(e,t){t=t.checked,t!=null&&rs(e,"checked",t,!1)}function ta(e,t){_f(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,n):t.hasOwnProperty("defaultValue")&&na(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function na(e,t,n){(t!=="number"||Wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(cr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function jf(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,Pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pr[t]=pr[e]})});function Of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pr.hasOwnProperty(e)&&pr[e]?(""+t).trim():t+"px"}function Tf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var J0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(e,t){if(t){if(J0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function la(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function as(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,Mn=null,Rn=null;function ku(e){if(e=Qr(e)){if(typeof sa!="function")throw Error(C(280));var t=e.stateNode;t&&(t=jo(t),sa(e.stateNode,e.type,t))}}function Lf(e){Mn?Rn?Rn.push(e):Rn=[e]:Mn=e}function zf(){if(Mn){var e=Mn,t=Rn;if(Rn=Mn=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function Mf(e,t){return e(t)}function Rf(){}var gl=!1;function If(e,t,n){if(gl)return e(t,n);gl=!0;try{return Mf(e,t,n)}finally{gl=!1,(Mn!==null||Rn!==null)&&(Rf(),zf())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var ua=!1;if(jt)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){ua=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{ua=!1}function em(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var mr=!1,Qi=null,Xi=!1,ca=null,tm={onError:function(e){mr=!0,Qi=e}};function nm(e,t,n,r,i,o,l,a,s){mr=!1,Qi=null,em.apply(tm,arguments)}function rm(e,t,n,r,i,o,l,a,s){if(nm.apply(this,arguments),mr){if(mr){var u=Qi;mr=!1,Qi=null}else throw Error(C(198));Xi||(Xi=!0,ca=u)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eu(e){if(yn(e)!==e)throw Error(C(188))}function im(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Eu(i),e;if(o===r)return Eu(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Af(e){return e=im(e),e!==null?Df(e):null}function Df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Df(e);if(t!==null)return t;e=e.sibling}return null}var Ff=Be.unstable_scheduleCallback,Cu=Be.unstable_cancelCallback,om=Be.unstable_shouldYield,lm=Be.unstable_requestPaint,re=Be.unstable_now,am=Be.unstable_getCurrentPriorityLevel,ss=Be.unstable_ImmediatePriority,Bf=Be.unstable_UserBlockingPriority,Yi=Be.unstable_NormalPriority,sm=Be.unstable_LowPriority,Hf=Be.unstable_IdlePriority,ko=null,pt=null;function um(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:dm,cm=Math.log,fm=Math.LN2;function dm(e){return e>>>=0,e===0?32:31-(cm(e)/fm|0)|0}var si=64,ui=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=fr(a):(o&=l,o!==0&&(r=fr(o)))}else l=n&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),i=1<<n,r|=e[n],t&=~i;return r}function pm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-it(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=pm(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function fa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uf(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function hm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-it(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function us(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vf,cs,Wf,Qf,Xf,da=!1,ci=[],Ht=null,Ut=null,bt=null,_r=new Map,jr=new Map,At=[],vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qr(t),t!==null&&cs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ym(e,t,n,r,i){switch(t){case"focusin":return Ht=nr(Ht,e,t,n,r,i),!0;case"dragenter":return Ut=nr(Ut,e,t,n,r,i),!0;case"mouseover":return bt=nr(bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _r.set(o,nr(_r.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,jr.set(o,nr(jr.get(o)||null,e,t,n,r,i)),!0}return!1}function Yf(e){var t=on(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=$f(n),t!==null){e.blockedOn=t,Xf(e.priority,function(){Wf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);aa=r,n.target.dispatchEvent(r),aa=null}else return t=Qr(n),t!==null&&cs(t),e.blockedOn=n,!1;t.shift()}return!0}function ju(e,t,n){Li(e)&&n.delete(t)}function gm(){da=!1,Ht!==null&&Li(Ht)&&(Ht=null),Ut!==null&&Li(Ut)&&(Ut=null),bt!==null&&Li(bt)&&(bt=null),_r.forEach(ju),jr.forEach(ju)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,da||(da=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,gm)))}function Nr(e){function t(i){return rr(i,e)}if(0<ci.length){rr(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&rr(Ht,e),Ut!==null&&rr(Ut,e),bt!==null&&rr(bt,e),_r.forEach(t),jr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Yf(n),n.blockedOn===null&&At.shift()}var In=Tt.ReactCurrentBatchConfig,Zi=!0;function xm(e,t,n,r){var i=B,o=In.transition;In.transition=null;try{B=1,fs(e,t,n,r)}finally{B=i,In.transition=o}}function wm(e,t,n,r){var i=B,o=In.transition;In.transition=null;try{B=4,fs(e,t,n,r)}finally{B=i,In.transition=o}}function fs(e,t,n,r){if(Zi){var i=pa(e,t,n,r);if(i===null)Ol(e,t,r,Gi,n),_u(e,r);else if(ym(i,e,t,n,r))r.stopPropagation();else if(_u(e,r),t&4&&-1<vm.indexOf(e)){for(;i!==null;){var o=Qr(i);if(o!==null&&Vf(o),o=pa(e,t,n,r),o===null&&Ol(e,t,r,Gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Gi=null;function pa(e,t,n,r){if(Gi=null,e=as(r),e=on(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Kf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(am()){case ss:return 1;case Bf:return 4;case Yi:case sm:return 16;case Hf:return 536870912;default:return 16}default:return 16}}var Ft=null,ds=null,zi=null;function Zf(){if(zi)return zi;var e,t=ds,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return zi=i.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function Nu(){return!1}function Ue(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fi:Nu,this.isPropagationStopped=Nu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ps=Ue(Yn),Wr=q({},Yn,{view:0,detail:0}),Sm=Ue(Wr),wl,Sl,ir,Eo=q({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(wl=e.screenX-ir.screenX,Sl=e.screenY-ir.screenY):Sl=wl=0,ir=e),wl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Pu=Ue(Eo),km=q({},Eo,{dataTransfer:0}),Em=Ue(km),Cm=q({},Wr,{relatedTarget:0}),kl=Ue(Cm),_m=q({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=Ue(_m),Nm=q({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pm=Ue(Nm),Om=q({},Yn,{data:0}),Ou=Ue(Om),Tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zm[e])?!!t[e]:!1}function ms(){return Mm}var Rm=q({},Wr,{key:function(e){if(e.key){var t=Tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Im=Ue(Rm),$m=q({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=Ue($m),Am=q({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),Dm=Ue(Am),Fm=q({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bm=Ue(Fm),Hm=q({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Um=Ue(Hm),bm=[9,13,27,32],hs=jt&&"CompositionEvent"in window,hr=null;jt&&"documentMode"in document&&(hr=document.documentMode);var Vm=jt&&"TextEvent"in window&&!hr,Gf=jt&&(!hs||hr&&8<hr&&11>=hr),Lu=" ",zu=!1;function qf(e,t){switch(e){case"keyup":return bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Wm(e,t){switch(e){case"compositionend":return Jf(t);case"keypress":return t.which!==32?null:(zu=!0,Lu);case"textInput":return e=t.data,e===Lu&&zu?null:e;default:return null}}function Qm(e,t){if(kn)return e==="compositionend"||!hs&&qf(e,t)?(e=Zf(),zi=ds=Ft=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gf&&t.locale!=="ko"?null:t.data;default:return null}}var Xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xm[e.type]:t==="textarea"}function ed(e,t,n,r){Lf(r),t=qi(t,"onChange"),0<t.length&&(n=new ps("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Pr=null;function Ym(e){fd(e,0)}function Co(e){var t=_n(e);if(Cf(t))return e}function Km(e,t){if(e==="change")return t}var td=!1;if(jt){var El;if(jt){var Cl="oninput"in document;if(!Cl){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),Cl=typeof Ru.oninput=="function"}El=Cl}else El=!1;td=El&&(!document.documentMode||9<document.documentMode)}function Iu(){vr&&(vr.detachEvent("onpropertychange",nd),Pr=vr=null)}function nd(e){if(e.propertyName==="value"&&Co(Pr)){var t=[];ed(t,Pr,e,as(e)),If(Ym,t)}}function Zm(e,t,n){e==="focusin"?(Iu(),vr=t,Pr=n,vr.attachEvent("onpropertychange",nd)):e==="focusout"&&Iu()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Pr)}function qm(e,t){if(e==="click")return Co(t)}function Jm(e,t){if(e==="input"||e==="change")return Co(t)}function e1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:e1;function Or(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kl.call(t,i)||!lt(e[i],t[i]))return!1}return!0}function $u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var n=$u(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$u(n)}}function rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function id(){for(var e=window,t=Wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wi(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t1(e){var t=id(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rd(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Au(n,o);var l=Au(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n1=jt&&"documentMode"in document&&11>=document.documentMode,En=null,ma=null,yr=null,ha=!1;function Du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ha||En==null||En!==Wi(r)||(r=En,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Or(yr,r)||(yr=r,r=qi(ma,"onSelect"),0<r.length&&(t=new ps("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},_l={},od={};jt&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function _o(e){if(_l[e])return _l[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in od)return _l[e]=t[n];return e}var ld=_o("animationend"),ad=_o("animationiteration"),sd=_o("animationstart"),ud=_o("transitionend"),cd=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){cd.set(e,t),vn(t,[e])}for(var jl=0;jl<Fu.length;jl++){var Nl=Fu[jl],r1=Nl.toLowerCase(),i1=Nl[0].toUpperCase()+Nl.slice(1);Gt(r1,"on"+i1)}Gt(ld,"onAnimationEnd");Gt(ad,"onAnimationIteration");Gt(sd,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(ud,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o1=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Bu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rm(r,t,void 0,e),e.currentTarget=null}function fd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Bu(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Bu(i,a,u),o=s}}}if(Xi)throw e=ca,Xi=!1,ca=null,e}function V(e,t){var n=t[wa];n===void 0&&(n=t[wa]=new Set);var r=e+"__bubble";n.has(r)||(dd(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),dd(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Tr(e){if(!e[pi]){e[pi]=!0,xf.forEach(function(n){n!=="selectionchange"&&(o1.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,Pl("selectionchange",!1,t))}}function dd(e,t,n,r){switch(Kf(t)){case 1:var i=xm;break;case 4:i=wm;break;default:i=fs}n=i.bind(null,t,n,e),i=void 0,!ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=on(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}If(function(){var u=o,p=as(n),h=[];e:{var v=cd.get(e);if(v!==void 0){var x=ps,w=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":x=Im;break;case"focusin":w="focus",x=kl;break;case"focusout":w="blur",x=kl;break;case"beforeblur":case"afterblur":x=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Dm;break;case ld:case ad:case sd:x=jm;break;case ud:x=Bm;break;case"scroll":x=Sm;break;case"wheel":x=Um;break;case"copy":case"cut":case"paste":x=Pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Tu}var y=(t&4)!==0,j=!y&&e==="scroll",d=y?v!==null?v+"Capture":null:v;y=[];for(var f=u,m;f!==null;){m=f;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,d!==null&&(g=Cr(f,d),g!=null&&y.push(Lr(f,g,m)))),j)break;f=f.return}0<y.length&&(v=new x(v,w,null,n,p),h.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==aa&&(w=n.relatedTarget||n.fromElement)&&(on(w)||w[Nt]))break e;if((x||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?on(w):null,w!==null&&(j=yn(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(y=Pu,g="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Tu,g="onPointerLeave",d="onPointerEnter",f="pointer"),j=x==null?v:_n(x),m=w==null?v:_n(w),v=new y(g,f+"leave",x,n,p),v.target=j,v.relatedTarget=m,g=null,on(p)===u&&(y=new y(d,f+"enter",w,n,p),y.target=m,y.relatedTarget=j,g=y),j=g,x&&w)t:{for(y=x,d=w,f=0,m=y;m;m=xn(m))f++;for(m=0,g=d;g;g=xn(g))m++;for(;0<f-m;)y=xn(y),f--;for(;0<m-f;)d=xn(d),m--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break t;y=xn(y),d=xn(d)}y=null}else y=null;x!==null&&Hu(h,v,x,y,!1),w!==null&&j!==null&&Hu(h,j,w,y,!0)}}e:{if(v=u?_n(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var k=Km;else if(Mu(v))if(td)k=Jm;else{k=Gm;var E=Zm}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=qm);if(k&&(k=k(e,u))){ed(h,k,n,p);break e}E&&E(e,v,u),e==="focusout"&&(E=v._wrapperState)&&E.controlled&&v.type==="number"&&na(v,"number",v.value)}switch(E=u?_n(u):window,e){case"focusin":(Mu(E)||E.contentEditable==="true")&&(En=E,ma=u,yr=null);break;case"focusout":yr=ma=En=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,Du(h,n,p);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":Du(h,n,p)}var S;if(hs)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else kn?qf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Gf&&n.locale!=="ko"&&(kn||O!=="onCompositionStart"?O==="onCompositionEnd"&&kn&&(S=Zf()):(Ft=p,ds="value"in Ft?Ft.value:Ft.textContent,kn=!0)),E=qi(u,O),0<E.length&&(O=new Ou(O,e,null,n,p),h.push({event:O,listeners:E}),S?O.data=S:(S=Jf(n),S!==null&&(O.data=S)))),(S=Vm?Wm(e,n):Qm(e,n))&&(u=qi(u,"onBeforeInput"),0<u.length&&(p=new Ou("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=S))}fd(h,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Cr(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=Cr(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Cr(n,o),s!=null&&l.unshift(Lr(n,s,a))):i||(s=Cr(n,o),s!=null&&l.push(Lr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var l1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function Uu(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(a1,"")}function mi(e,t,n){if(t=Uu(t),Uu(e)!==t&&n)throw Error(C(425))}function Ji(){}var va=null,ya=null;function ga(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xa=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(c1)}:xa;function c1(e){setTimeout(function(){throw e})}function Tl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),dt="__reactFiber$"+Kn,zr="__reactProps$"+Kn,Nt="__reactContainer$"+Kn,wa="__reactEvents$"+Kn,f1="__reactListeners$"+Kn,d1="__reactHandles$"+Kn;function on(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vu(e);e!==null;){if(n=e[dt])return n;e=Vu(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){return e=e[dt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function jo(e){return e[zr]||null}var Sa=[],jn=-1;function qt(e){return{current:e}}function W(e){0>jn||(e.current=Sa[jn],Sa[jn]=null,jn--)}function b(e,t){jn++,Sa[jn]=e.current,e.current=t}var Zt={},ke=qt(Zt),Le=qt(!1),fn=Zt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function eo(){W(Le),W(ke)}function Wu(e,t,n){if(ke.current!==Zt)throw Error(C(168));b(ke,t),b(Le,n)}function pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Z0(e)||"Unknown",i));return q({},n,r)}function to(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,fn=ke.current,b(ke,e),b(Le,Le.current),!0}function Qu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=pd(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,W(Le),W(ke),b(ke,e)):W(Le),b(Le,n)}var St=null,No=!1,Ll=!1;function md(e){St===null?St=[e]:St.push(e)}function p1(e){No=!0,md(e)}function Jt(){if(!Ll&&St!==null){Ll=!0;var e=0,t=B;try{var n=St;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,No=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),Ff(ss,Jt),i}finally{B=t,Ll=!1}}return null}var Nn=[],Pn=0,no=null,ro=0,We=[],Qe=0,dn=null,kt=1,Et="";function nn(e,t){Nn[Pn++]=ro,Nn[Pn++]=no,no=e,ro=t}function hd(e,t,n){We[Qe++]=kt,We[Qe++]=Et,We[Qe++]=dn,dn=e;var r=kt;e=Et;var i=32-it(r)-1;r&=~(1<<i),n+=1;var o=32-it(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,kt=1<<32-it(t)+i|n<<i|r,Et=o+e}else kt=1<<o|n<<i|r,Et=e}function ys(e){e.return!==null&&(nn(e,1),hd(e,1,0))}function gs(e){for(;e===no;)no=Nn[--Pn],Nn[Pn]=null,ro=Nn[--Pn],Nn[Pn]=null;for(;e===dn;)dn=We[--Qe],We[Qe]=null,Et=We[--Qe],We[Qe]=null,kt=We[--Qe],We[Qe]=null}var De=null,Ae=null,X=!1,rt=null;function vd(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Ae=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:kt,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Ae=null,!0):!1;default:return!1}}function ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(X){var t=Ae;if(t){var n=t;if(!Xu(e,t)){if(ka(e))throw Error(C(418));t=Vt(n.nextSibling);var r=De;t&&Xu(e,t)?vd(r,n):(e.flags=e.flags&-4097|2,X=!1,De=e)}}else{if(ka(e))throw Error(C(418));e.flags=e.flags&-4097|2,X=!1,De=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function hi(e){if(e!==De)return!1;if(!X)return Yu(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ga(e.type,e.memoizedProps)),t&&(t=Ae)){if(ka(e))throw yd(),Error(C(418));for(;t;)vd(e,t),t=Vt(t.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=De?Vt(e.stateNode.nextSibling):null;return!0}function yd(){for(var e=Ae;e;)e=Vt(e.nextSibling)}function Hn(){Ae=De=null,X=!1}function xs(e){rt===null?rt=[e]:rt.push(e)}var m1=Tt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ku(e){var t=e._init;return t(e._payload)}function gd(e){function t(d,f){if(e){var m=d.deletions;m===null?(d.deletions=[f],d.flags|=16):m.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=Yt(d,f),d.index=0,d.sibling=null,d}function o(d,f,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<f?(d.flags|=2,f):m):(d.flags|=2,f)):(d.flags|=1048576,f)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,m,g){return f===null||f.tag!==6?(f=Dl(m,d.mode,g),f.return=d,f):(f=i(f,m),f.return=d,f)}function s(d,f,m,g){var k=m.type;return k===Sn?p(d,f,m.props.children,g,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&Ku(k)===f.type)?(g=i(f,m.props),g.ref=or(d,f,m),g.return=d,g):(g=Bi(m.type,m.key,m.props,null,d.mode,g),g.ref=or(d,f,m),g.return=d,g)}function u(d,f,m,g){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Fl(m,d.mode,g),f.return=d,f):(f=i(f,m.children||[]),f.return=d,f)}function p(d,f,m,g,k){return f===null||f.tag!==7?(f=cn(m,d.mode,g,k),f.return=d,f):(f=i(f,m),f.return=d,f)}function h(d,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Dl(""+f,d.mode,m),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oi:return m=Bi(f.type,f.key,f.props,null,d.mode,m),m.ref=or(d,null,f),m.return=d,m;case wn:return f=Fl(f,d.mode,m),f.return=d,f;case It:var g=f._init;return h(d,g(f._payload),m)}if(cr(f)||er(f))return f=cn(f,d.mode,m,null),f.return=d,f;vi(d,f)}return null}function v(d,f,m,g){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(d,f,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:return m.key===k?s(d,f,m,g):null;case wn:return m.key===k?u(d,f,m,g):null;case It:return k=m._init,v(d,f,k(m._payload),g)}if(cr(m)||er(m))return k!==null?null:p(d,f,m,g,null);vi(d,m)}return null}function x(d,f,m,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(m)||null,a(f,d,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oi:return d=d.get(g.key===null?m:g.key)||null,s(f,d,g,k);case wn:return d=d.get(g.key===null?m:g.key)||null,u(f,d,g,k);case It:var E=g._init;return x(d,f,m,E(g._payload),k)}if(cr(g)||er(g))return d=d.get(m)||null,p(f,d,g,k,null);vi(f,g)}return null}function w(d,f,m,g){for(var k=null,E=null,S=f,O=f=0,A=null;S!==null&&O<m.length;O++){S.index>O?(A=S,S=null):A=S.sibling;var z=v(d,S,m[O],g);if(z===null){S===null&&(S=A);break}e&&S&&z.alternate===null&&t(d,S),f=o(z,f,O),E===null?k=z:E.sibling=z,E=z,S=A}if(O===m.length)return n(d,S),X&&nn(d,O),k;if(S===null){for(;O<m.length;O++)S=h(d,m[O],g),S!==null&&(f=o(S,f,O),E===null?k=S:E.sibling=S,E=S);return X&&nn(d,O),k}for(S=r(d,S);O<m.length;O++)A=x(S,d,O,m[O],g),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?O:A.key),f=o(A,f,O),E===null?k=A:E.sibling=A,E=A);return e&&S.forEach(function(ve){return t(d,ve)}),X&&nn(d,O),k}function y(d,f,m,g){var k=er(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var E=k=null,S=f,O=f=0,A=null,z=m.next();S!==null&&!z.done;O++,z=m.next()){S.index>O?(A=S,S=null):A=S.sibling;var ve=v(d,S,z.value,g);if(ve===null){S===null&&(S=A);break}e&&S&&ve.alternate===null&&t(d,S),f=o(ve,f,O),E===null?k=ve:E.sibling=ve,E=ve,S=A}if(z.done)return n(d,S),X&&nn(d,O),k;if(S===null){for(;!z.done;O++,z=m.next())z=h(d,z.value,g),z!==null&&(f=o(z,f,O),E===null?k=z:E.sibling=z,E=z);return X&&nn(d,O),k}for(S=r(d,S);!z.done;O++,z=m.next())z=x(S,d,O,z.value,g),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?O:z.key),f=o(z,f,O),E===null?k=z:E.sibling=z,E=z);return e&&S.forEach(function(ye){return t(d,ye)}),X&&nn(d,O),k}function j(d,f,m,g){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:e:{for(var k=m.key,E=f;E!==null;){if(E.key===k){if(k=m.type,k===Sn){if(E.tag===7){n(d,E.sibling),f=i(E,m.props.children),f.return=d,d=f;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&Ku(k)===E.type){n(d,E.sibling),f=i(E,m.props),f.ref=or(d,E,m),f.return=d,d=f;break e}n(d,E);break}else t(d,E);E=E.sibling}m.type===Sn?(f=cn(m.props.children,d.mode,g,m.key),f.return=d,d=f):(g=Bi(m.type,m.key,m.props,null,d.mode,g),g.ref=or(d,f,m),g.return=d,d=g)}return l(d);case wn:e:{for(E=m.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(d,f.sibling),f=i(f,m.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=Fl(m,d.mode,g),f.return=d,d=f}return l(d);case It:return E=m._init,j(d,f,E(m._payload),g)}if(cr(m))return w(d,f,m,g);if(er(m))return y(d,f,m,g);vi(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,m),f.return=d,d=f):(n(d,f),f=Dl(m,d.mode,g),f.return=d,d=f),l(d)):n(d,f)}return j}var Un=gd(!0),xd=gd(!1),io=qt(null),oo=null,On=null,ws=null;function Ss(){ws=On=oo=null}function ks(e){var t=io.current;W(io),e._currentValue=t}function Ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){oo=e,ws=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(oo===null)throw Error(C(308));On=e,oo.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var ln=null;function Es(e){ln===null?ln=[e]:ln.push(e)}function wd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Es(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pt(e,n)}return i=r.interleaved,i===null?(t.next=t,Es(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pt(e,n)}function Ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,us(e,n)}}function Zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var i=e.updateQueue;$t=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;l=0,p=u=s=null,a=o;do{var v=a.lane,x=a.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(v=t,x=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){h=w.call(x,h,v);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,v=typeof w=="function"?w.call(x,h,v):w,v==null)break e;h=q({},h,v);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=x,s=h):p=p.next=x,l|=v;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;v=a,a=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(p===null&&(s=h),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mn|=l,e.lanes=l,e.memoizedState=h}}function Gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Xr={},mt=qt(Xr),Mr=qt(Xr),Rr=qt(Xr);function an(e){if(e===Xr)throw Error(C(174));return e}function _s(e,t){switch(b(Rr,t),b(Mr,e),b(mt,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ia(t,e)}W(mt),b(mt,t)}function bn(){W(mt),W(Mr),W(Rr)}function kd(e){an(Rr.current);var t=an(mt.current),n=ia(t,e.type);t!==n&&(b(Mr,e),b(mt,n))}function js(e){Mr.current===e&&(W(mt),W(Mr))}var Z=qt(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zl=[];function Ns(){for(var e=0;e<zl.length;e++)zl[e]._workInProgressVersionPrimary=null;zl.length=0}var Ii=Tt.ReactCurrentDispatcher,Ml=Tt.ReactCurrentBatchConfig,pn=0,G=null,ae=null,ue=null,so=!1,gr=!1,Ir=0,h1=0;function ge(){throw Error(C(321))}function Ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Os(e,t,n,r,i,o){if(pn=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?x1:w1,e=n(r,i),gr){o=0;do{if(gr=!1,Ir=0,25<=o)throw Error(C(301));o+=1,ue=ae=null,t.updateQueue=null,Ii.current=S1,e=n(r,i)}while(gr)}if(Ii.current=uo,t=ae!==null&&ae.next!==null,pn=0,ue=ae=G=null,so=!1,t)throw Error(C(300));return e}function Ts(){var e=Ir!==0;return Ir=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?G.memoizedState=ue=e:ue=ue.next=e,ue}function Ze(){if(ae===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?G.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(C(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?G.memoizedState=ue=e:ue=ue.next=e}return ue}function $r(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var p=u.lane;if((pn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,G.lanes|=p,mn|=p}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,lt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,mn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=Ze(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);lt(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ed(){}function Cd(e,t){var n=G,r=Ze(),i=t(),o=!lt(r.memoizedState,i);if(o&&(r.memoizedState=i,Te=!0),r=r.queue,Ls(Nd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Ar(9,jd.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(C(349));pn&30||_d(n,t,i)}return i}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jd(e,t,n,r){t.value=n,t.getSnapshot=r,Pd(t)&&Od(e)}function Nd(e,t,n){return n(function(){Pd(t)&&Od(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function Od(e){var t=Pt(e,1);t!==null&&ot(t,e,1,-1)}function qu(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=g1.bind(null,G,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Td(){return Ze().memoizedState}function $i(e,t,n,r){var i=st();G.flags|=e,i.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function Po(e,t,n,r){var i=Ze();r=r===void 0?null:r;var o=void 0;if(ae!==null){var l=ae.memoizedState;if(o=l.destroy,r!==null&&Ps(r,l.deps)){i.memoizedState=Ar(t,n,o,r);return}}G.flags|=e,i.memoizedState=Ar(1|t,n,o,r)}function Ju(e,t){return $i(8390656,8,e,t)}function Ls(e,t){return Po(2048,8,e,t)}function Ld(e,t){return Po(4,2,e,t)}function zd(e,t){return Po(4,4,e,t)}function Md(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,Md.bind(null,t,e),n)}function zs(){}function Id(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ps(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $d(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ps(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ad(e,t,n){return pn&21?(lt(n,t)||(n=Uf(),G.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function v1(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),t()}finally{B=n,Ml.transition=r}}function Dd(){return Ze().memoizedState}function y1(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fd(e))Bd(t,n);else if(n=wd(e,t,n,r),n!==null){var i=_e();ot(n,e,r,i),Hd(n,t,r)}}function g1(e,t,n){var r=Xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fd(e))Bd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,lt(a,l)){var s=t.interleaved;s===null?(i.next=i,Es(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=wd(e,t,i,r),n!==null&&(i=_e(),ot(n,e,r,i),Hd(n,t,r))}}function Fd(e){var t=e.alternate;return e===G||t!==null&&t===G}function Bd(e,t){gr=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,us(e,n)}}var uo={readContext:Ke,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},x1={readContext:Ke,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,Md.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y1.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:qu,useDebugValue:zs,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=qu(!1),t=e[0];return e=v1.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=st();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ce===null)throw Error(C(349));pn&30||_d(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ju(Nd.bind(null,r,o,e),[e]),r.flags|=2048,Ar(9,jd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ce.identifierPrefix;if(X){var n=Et,r=kt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w1={readContext:Ke,useCallback:Id,useContext:Ke,useEffect:Ls,useImperativeHandle:Rd,useInsertionEffect:Ld,useLayoutEffect:zd,useMemo:$d,useReducer:Rl,useRef:Td,useState:function(){return Rl($r)},useDebugValue:zs,useDeferredValue:function(e){var t=Ze();return Ad(t,ae.memoizedState,e)},useTransition:function(){var e=Rl($r)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:Cd,useId:Dd,unstable_isNewReconciler:!1},S1={readContext:Ke,useCallback:Id,useContext:Ke,useEffect:Ls,useImperativeHandle:Rd,useInsertionEffect:Ld,useLayoutEffect:zd,useMemo:$d,useReducer:Il,useRef:Td,useState:function(){return Il($r)},useDebugValue:zs,useDeferredValue:function(e){var t=Ze();return ae===null?t.memoizedState=e:Ad(t,ae.memoizedState,e)},useTransition:function(){var e=Il($r)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:Cd,useId:Dd,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _a(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=Xt(e),o=_t(r,i);o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,i),t!==null&&(ot(t,e,i,r),Ri(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=Xt(e),o=_t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,i),t!==null&&(ot(t,e,i,r),Ri(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Xt(e),i=_t(n,r);i.tag=2,t!=null&&(i.callback=t),t=Wt(e,i,r),t!==null&&(ot(t,e,r,n),Ri(t,e,r))}};function ec(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,o):!0}function Ud(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=ze(t)?fn:ke.current,r=t.contextTypes,o=(r=r!=null)?Bn(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Cs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=ze(t)?fn:ke.current,i.context=Bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_a(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oo.enqueueReplaceState(i,i.state,null),lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=K0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function bd(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,Aa=r),Na(e,t)},n}function Vd(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Na(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Na(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function nc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new k1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$1.bind(null,e,t,n),t.then(e,e))}function rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ic(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var E1=Tt.ReactCurrentOwner,Te=!1;function Ce(e,t,n,r){t.child=e===null?xd(t,null,n,r):Un(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var o=t.ref;return $n(t,i),r=Os(e,t,n,r,o,i),n=Ts(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ot(e,t,i)):(X&&n&&ys(t),t.flags|=1,Ce(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Bs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wd(e,t,o,r,i)):(e=Bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Or,n(l,r)&&e.ref===t.ref)return Ot(e,t,i)}return t.flags|=1,e=Yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Or(o,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,Ot(e,t,i)}return Pa(e,t,n,r,i)}function Qd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Ln,$e),$e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(Ln,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,b(Ln,$e),$e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,b(Ln,$e),$e|=r;return Ce(e,t,i,n),t.child}function Xd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pa(e,t,n,r,i){var o=ze(n)?fn:ke.current;return o=Bn(t,o),$n(t,i),n=Os(e,t,n,r,o,i),r=Ts(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ot(e,t,i)):(X&&r&&ys(t),t.flags|=1,Ce(e,t,n,i),t.child)}function ac(e,t,n,r,i){if(ze(n)){var o=!0;to(t)}else o=!1;if($n(t,i),t.stateNode===null)Ai(e,t),Ud(t,n,r),ja(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=ze(n)?fn:ke.current,u=Bn(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&tc(t,l,r,u),$t=!1;var v=t.memoizedState;l.state=v,lo(t,r,l,i),s=t.memoizedState,a!==r||v!==s||Le.current||$t?(typeof p=="function"&&(_a(t,n,p,r),s=t.memoizedState),(a=$t||ec(t,n,a,r,v,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Sd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:tt(t.type,a),l.props=u,h=t.pendingProps,v=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ke(s):(s=ze(n)?fn:ke.current,s=Bn(t,s));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||v!==s)&&tc(t,l,r,s),$t=!1,v=t.memoizedState,l.state=v,lo(t,r,l,i);var w=t.memoizedState;a!==h||v!==w||Le.current||$t?(typeof x=="function"&&(_a(t,n,x,r),w=t.memoizedState),(u=$t||ec(t,n,u,r,v,w,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Oa(e,t,n,r,o,i)}function Oa(e,t,n,r,i,o){Xd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Qu(t,n,!1),Ot(e,t,o);r=t.stateNode,E1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,a,o)):Ce(e,t,a,o),t.memoizedState=r.state,i&&Qu(t,n,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?Wu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wu(e,t.context,!1),_s(e,t.containerInfo)}function sc(e,t,n,r,i){return Hn(),xs(i),t.flags|=256,Ce(e,t,n,r),t.child}var Ta={dehydrated:null,treeContext:null,retryLane:0};function La(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kd(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b(Z,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=zo(l,r,0,null),e=cn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=La(n),t.memoizedState=Ta,e):Ms(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return C1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Yt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Yt(a,o):(o=cn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?La(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ta,r}return o=e.child,e=o.sibling,r=Yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ms(e,t){return t=zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&xs(r),Un(t,e.child,null,n),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function C1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(C(422))),yi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zo({mode:"visible",children:r.children},i,0,null),o=cn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Un(t,e.child,null,l),t.child.memoizedState=La(l),t.memoizedState=Ta,o);if(!(t.mode&1))return yi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(C(419)),r=$l(o,r,void 0),yi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Te||a){if(r=ce,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pt(e,i),ot(r,e,i,-1))}return Fs(),r=$l(Error(C(421))),yi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=A1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ae=Vt(i.nextSibling),De=t,X=!0,rt=null,e!==null&&(We[Qe++]=kt,We[Qe++]=Et,We[Qe++]=dn,kt=e.id,Et=e.overflow,dn=t),t=Ms(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ca(e.return,t,n)}function Al(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ce(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Al(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Al(t,!0,n,null,o);break;case"together":Al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _1(e,t,n){switch(t.tag){case 3:Yd(t),Hn();break;case 5:kd(t);break;case 1:ze(t.type)&&to(t);break;case 4:_s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;b(io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Kd(e,t,n):(b(Z,Z.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);b(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Qd(e,t,n)}return Ot(e,t,n)}var Gd,za,qd,Jd;Gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};za=function(){};qd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(mt.current);var o=null;switch(n){case"input":i=ea(e,i),r=ea(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=ra(e,i),r=ra(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ji)}oa(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(kr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Jd=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function j1(e,t,n){var r=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return ze(t.type)&&eo(),xe(t),null;case 3:return r=t.stateNode,bn(),W(Le),W(ke),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Ba(rt),rt=null))),za(e,t),xe(t),null;case 5:js(t);var i=an(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)qd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return xe(t),null}if(e=an(mt.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[dt]=t,r[zr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)V(dr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":gu(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":wu(r,o),V("invalid",r)}oa(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",""+a]):kr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":li(r),xu(r,o,!0);break;case"textarea":li(r),Su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ji)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[dt]=t,e[zr]=r,Gd(e,t,!1,!1),t.stateNode=e;e:{switch(l=la(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)V(dr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":gu(e,r),i=ea(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),V("invalid",e);break;case"textarea":wu(e,r),i=ra(e,r),V("invalid",e);break;default:i=r}oa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Tf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Er(e,s):typeof s=="number"&&Er(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(kr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&V("scroll",e):s!=null&&rs(e,o,s,l))}switch(n){case"input":li(e),xu(e,r,!1);break;case"textarea":li(e),Su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Jd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=an(Rr.current),an(mt.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(o=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return xe(t),null;case 13:if(W(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ae!==null&&t.mode&1&&!(t.flags&128))yd(),Hn(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[dt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),o=!1}else rt!==null&&(Ba(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?se===0&&(se=3):Fs())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return bn(),za(e,t),e===null&&Tr(t.stateNode.containerInfo),xe(t),null;case 10:return ks(t.type._context),xe(t),null;case 17:return ze(t.type)&&eo(),xe(t),null;case 19:if(W(Z),o=t.memoizedState,o===null)return xe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)lr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ao(e),l!==null){for(t.flags|=128,lr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Wn&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ao(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!X)return xe(t),null}else 2*re()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=Z.current,b(Z,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function N1(e,t){switch(gs(t),t.tag){case 1:return ze(t.type)&&eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),W(Le),W(ke),Ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return js(t),null;case 13:if(W(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Z),null;case 4:return bn(),null;case 10:return ks(t.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var gi=!1,Se=!1,P1=typeof WeakSet=="function"?WeakSet:Set,P=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Ma(e,t,n){try{n()}catch(r){ne(e,t,r)}}var cc=!1;function O1(e,t){if(va=Zi,e=id(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,h=e,v=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)v=h,h=x;for(;;){if(h===e)break t;if(v===n&&++u===i&&(a=l),v===o&&++p===r&&(s=l),(x=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ya={focusedElem:e,selectionRange:n},Zi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,j=w.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:tt(t.type,y),j);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(g){ne(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=cc,cc=!1,w}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ma(t,n,o)}i=i.next}while(i!==r)}}function To(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ep(e){var t=e.alternate;t!==null&&(e.alternate=null,ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[zr],delete t[wa],delete t[f1],delete t[d1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tp(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji));else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var de=null,nt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)np(e,t,n),n=n.sibling}function np(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:Se||Tn(n,t);case 6:var r=de,i=nt;de=null,Lt(e,t,n),de=r,nt=i,de!==null&&(nt?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(nt?(e=de,n=n.stateNode,e.nodeType===8?Tl(e.parentNode,n):e.nodeType===1&&Tl(e,n),Nr(e)):Tl(de,n.stateNode));break;case 4:r=de,i=nt,de=n.stateNode.containerInfo,nt=!0,Lt(e,t,n),de=r,nt=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ma(n,t,l),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!Se&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Lt(e,t,n),Se=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new P1),t.forEach(function(r){var i=D1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,nt=!1;break e;case 3:de=a.stateNode.containerInfo,nt=!0;break e;case 4:de=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(de===null)throw Error(C(160));np(o,l,i),de=null,nt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rp(t,e),t=t.sibling}function rp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),at(e),r&4){try{xr(3,e,e.return),To(3,e)}catch(y){ne(e,e.return,y)}try{xr(5,e,e.return)}catch(y){ne(e,e.return,y)}}break;case 1:Je(t,e),at(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(Je(t,e),at(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var i=e.stateNode;try{Er(i,"")}catch(y){ne(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_f(i,o),la(a,l);var u=la(a,o);for(l=0;l<s.length;l+=2){var p=s[l],h=s[l+1];p==="style"?Tf(i,h):p==="dangerouslySetInnerHTML"?Pf(i,h):p==="children"?Er(i,h):rs(i,p,h,u)}switch(a){case"input":ta(i,o);break;case"textarea":jf(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?zn(i,!!o.multiple,x,!1):v!==!!o.multiple&&(o.defaultValue!=null?zn(i,!!o.multiple,o.defaultValue,!0):zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[zr]=o}catch(y){ne(e,e.return,y)}}break;case 6:if(Je(t,e),at(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ne(e,e.return,y)}}break;case 3:if(Je(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(y){ne(e,e.return,y)}break;case 4:Je(t,e),at(e);break;case 13:Je(t,e),at(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($s=re())),r&4&&dc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||p,Je(t,e),Se=u):Je(t,e),at(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(h=P=p;P!==null;){switch(v=P,x=v.child,v.tag){case 0:case 11:case 14:case 15:xr(4,v,v.return);break;case 1:Tn(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Tn(v,v.return);break;case 22:if(v.memoizedState!==null){mc(h);continue}}x!==null?(x.return=v,P=x):mc(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Of("display",l))}catch(y){ne(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){ne(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Je(t,e),at(e),r&4&&dc(e);break;case 21:break;default:Je(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tp(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Er(i,""),r.flags&=-33);var o=fc(e);$a(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=fc(e);Ia(e,a,l);break;default:throw Error(C(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T1(e,t,n){P=e,ip(e)}function ip(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||gi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Se;a=gi;var u=Se;if(gi=l,(Se=s)&&!u)for(P=i;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?hc(i):s!==null?(s.return=l,P=s):hc(i);for(;o!==null;)P=o,ip(o),o=o.sibling;P=i,gi=a,Se=u}pc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):pc(e)}}function pc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||To(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Nr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Se||t.flags&512&&Ra(t)}catch(v){ne(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function mc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function hc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{To(4,t)}catch(s){ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ne(t,i,s)}}var o=t.return;try{Ra(t)}catch(s){ne(t,o,s)}break;case 5:var l=t.return;try{Ra(t)}catch(s){ne(t,l,s)}}}catch(s){ne(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var L1=Math.ceil,co=Tt.ReactCurrentDispatcher,Rs=Tt.ReactCurrentOwner,Ye=Tt.ReactCurrentBatchConfig,$=0,ce=null,oe=null,me=0,$e=0,Ln=qt(0),se=0,Dr=null,mn=0,Lo=0,Is=0,wr=null,Oe=null,$s=0,Wn=1/0,wt=null,fo=!1,Aa=null,Qt=null,xi=!1,Bt=null,po=0,Sr=0,Da=null,Di=-1,Fi=0;function _e(){return $&6?re():Di!==-1?Di:Di=re()}function Xt(e){return e.mode&1?$&2&&me!==0?me&-me:m1.transition!==null?(Fi===0&&(Fi=Uf()),Fi):(e=B,e!==0||(e=window.event,e=e===void 0?16:Kf(e.type)),e):1}function ot(e,t,n,r){if(50<Sr)throw Sr=0,Da=null,Error(C(185));Vr(e,n,r),(!($&2)||e!==ce)&&(e===ce&&(!($&2)&&(Lo|=n),se===4&&Dt(e,me)),Me(e,r),n===1&&$===0&&!(t.mode&1)&&(Wn=re()+500,No&&Jt()))}function Me(e,t){var n=e.callbackNode;mm(e,t);var r=Ki(e,e===ce?me:0);if(r===0)n!==null&&Cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cu(n),t===1)e.tag===0?p1(vc.bind(null,e)):md(vc.bind(null,e)),u1(function(){!($&6)&&Jt()}),n=null;else{switch(bf(r)){case 1:n=ss;break;case 4:n=Bf;break;case 16:n=Yi;break;case 536870912:n=Hf;break;default:n=Yi}n=dp(n,op.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function op(e,t){if(Di=-1,Fi=0,$&6)throw Error(C(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Ki(e,e===ce?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var i=$;$|=2;var o=ap();(ce!==e||me!==t)&&(wt=null,Wn=re()+500,un(e,t));do try{R1();break}catch(a){lp(e,a)}while(!0);Ss(),co.current=o,$=i,oe!==null?t=0:(ce=null,me=0,t=se)}if(t!==0){if(t===2&&(i=fa(e),i!==0&&(r=i,t=Fa(e,i))),t===1)throw n=Dr,un(e,0),Dt(e,r),Me(e,re()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!z1(i)&&(t=mo(e,r),t===2&&(o=fa(e),o!==0&&(r=o,t=Fa(e,o))),t===1))throw n=Dr,un(e,0),Dt(e,r),Me(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:rn(e,Oe,wt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=$s+500-re(),10<t)){if(Ki(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xa(rn.bind(null,e,Oe,wt),t);break}rn(e,Oe,wt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-it(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L1(r/1960))-r,10<r){e.timeoutHandle=xa(rn.bind(null,e,Oe,wt),r);break}rn(e,Oe,wt);break;case 5:rn(e,Oe,wt);break;default:throw Error(C(329))}}}return Me(e,re()),e.callbackNode===n?op.bind(null,e):null}function Fa(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=mo(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ba(t)),e}function Ba(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function z1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Is,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function vc(e){if($&6)throw Error(C(327));An();var t=Ki(e,0);if(!(t&1))return Me(e,re()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=fa(e);r!==0&&(t=r,n=Fa(e,r))}if(n===1)throw n=Dr,un(e,0),Dt(e,t),Me(e,re()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Oe,wt),Me(e,re()),null}function As(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Wn=re()+500,No&&Jt())}}function hn(e){Bt!==null&&Bt.tag===0&&!($&6)&&An();var t=$;$|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,e)return e()}finally{B=r,Ye.transition=n,$=t,!($&6)&&Jt()}}function Ds(){$e=Ln.current,W(Ln)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,s1(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:bn(),W(Le),W(ke),Ns();break;case 5:js(r);break;case 4:bn();break;case 13:W(Z);break;case 19:W(Z);break;case 10:ks(r.type._context);break;case 22:case 23:Ds()}n=n.return}if(ce=e,oe=e=Yt(e.current,null),me=$e=t,se=0,Dr=null,Is=Lo=mn=0,Oe=wr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}ln=null}return e}function lp(e,t){do{var n=oe;try{if(Ss(),Ii.current=uo,so){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}so=!1}if(pn=0,ue=ae=G=null,gr=!1,Ir=0,Rs.current=null,n===null||n.return===null){se=1,Dr=t,oe=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=me,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=rc(l);if(x!==null){x.flags&=-257,ic(x,l,a,o,t),x.mode&1&&nc(o,u,t),t=x,s=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(s),t.updateQueue=y}else w.add(s);break e}else{if(!(t&1)){nc(o,u,t),Fs();break e}s=Error(C(426))}}else if(X&&a.mode&1){var j=rc(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ic(j,l,a,o,t),xs(Vn(s,a));break e}}o=s=Vn(s,a),se!==4&&(se=2),wr===null?wr=[o]:wr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=bd(o,s,t);Zu(o,d);break e;case 1:a=s;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qt===null||!Qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Vd(o,a,t);Zu(o,g);break e}}o=o.return}while(o!==null)}up(n)}catch(k){t=k,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function ap(){var e=co.current;return co.current=uo,e===null?uo:e}function Fs(){(se===0||se===3||se===2)&&(se=4),ce===null||!(mn&268435455)&&!(Lo&268435455)||Dt(ce,me)}function mo(e,t){var n=$;$|=2;var r=ap();(ce!==e||me!==t)&&(wt=null,un(e,t));do try{M1();break}catch(i){lp(e,i)}while(!0);if(Ss(),$=n,co.current=r,oe!==null)throw Error(C(261));return ce=null,me=0,se}function M1(){for(;oe!==null;)sp(oe)}function R1(){for(;oe!==null&&!om();)sp(oe)}function sp(e){var t=fp(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?up(e):oe=t,Rs.current=null}function up(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=N1(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,oe=null;return}}else if(n=j1(n,t,$e),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);se===0&&(se=5)}function rn(e,t,n){var r=B,i=Ye.transition;try{Ye.transition=null,B=1,I1(e,t,n,r)}finally{Ye.transition=i,B=r}return null}function I1(e,t,n,r){do An();while(Bt!==null);if($&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hm(e,o),e===ce&&(oe=ce=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,dp(Yi,function(){return An(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ye.transition,Ye.transition=null;var l=B;B=1;var a=$;$|=4,Rs.current=null,O1(e,n),rp(n,e),t1(ya),Zi=!!va,ya=va=null,e.current=n,T1(n),lm(),$=a,B=l,Ye.transition=o}else e.current=n;if(xi&&(xi=!1,Bt=e,po=i),o=e.pendingLanes,o===0&&(Qt=null),um(n.stateNode),Me(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fo)throw fo=!1,e=Aa,Aa=null,e;return po&1&&e.tag!==0&&An(),o=e.pendingLanes,o&1?e===Da?Sr++:(Sr=0,Da=e):Sr=0,Jt(),null}function An(){if(Bt!==null){var e=bf(po),t=Ye.transition,n=B;try{if(Ye.transition=null,B=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,po=0,$&6)throw Error(C(331));var i=$;for($|=4,P=e.current;P!==null;){var o=P,l=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:xr(8,p,o)}var h=p.child;if(h!==null)h.return=p,P=h;else for(;P!==null;){p=P;var v=p.sibling,x=p.return;if(ep(p),p===u){P=null;break}if(v!==null){v.return=x,P=v;break}P=x}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}P=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,P=l;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,P=d;break e}P=o.return}}var f=e.current;for(P=f;P!==null;){l=P;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,P=m;else e:for(l=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:To(9,a)}}catch(k){ne(a,a.return,k)}if(a===l){P=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,P=g;break e}P=a.return}}if($=i,Jt(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{B=n,Ye.transition=t}}return!1}function yc(e,t,n){t=Vn(n,t),t=bd(e,t,1),e=Wt(e,t,1),t=_e(),e!==null&&(Vr(e,1,t),Me(e,t))}function ne(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Vn(n,e),e=Vd(t,e,1),t=Wt(t,e,1),e=_e(),t!==null&&(Vr(t,1,e),Me(t,e));break}}t=t.return}}function $1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(me&n)===n&&(se===4||se===3&&(me&130023424)===me&&500>re()-$s?un(e,0):Is|=n),Me(e,t)}function cp(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=_e();e=Pt(e,t),e!==null&&(Vr(e,t,n),Me(e,n))}function A1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cp(e,n)}function D1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),cp(e,n)}var fp;fp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,_1(e,t,n);Te=!!(e.flags&131072)}else Te=!1,X&&t.flags&1048576&&hd(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ai(e,t),e=t.pendingProps;var i=Bn(t,ke.current);$n(t,n),i=Os(null,t,r,e,i,n);var o=Ts();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(o=!0,to(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cs(t),i.updater=Oo,t.stateNode=i,i._reactInternals=t,ja(t,r,e,n),t=Oa(null,t,r,!0,o,n)):(t.tag=0,X&&o&&ys(t),Ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ai(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=B1(r),e=tt(r,e),i){case 0:t=Pa(null,t,r,e,n);break e;case 1:t=ac(null,t,r,e,n);break e;case 11:t=oc(null,t,r,e,n);break e;case 14:t=lc(null,t,r,tt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Pa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),ac(e,t,r,i,n);case 3:e:{if(Yd(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sd(e,t),lo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vn(Error(C(423)),t),t=sc(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(C(424)),t),t=sc(e,t,r,n,i);break e}else for(Ae=Vt(t.stateNode.containerInfo.firstChild),De=t,X=!0,rt=null,n=xd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=Ot(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return kd(t),e===null&&Ea(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ga(r,i)?l=null:o!==null&&ga(r,o)&&(t.flags|=32),Xd(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return Kd(e,t,n);case 4:return _s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),oc(e,t,r,i,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,b(io,r._currentValue),r._currentValue=l,o!==null)if(lt(o.value,l)){if(o.children===i.children&&!Le.current){t=Ot(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=_t(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ca(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ca(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=Ke(i),r=r(i),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,i=tt(r,t.pendingProps),i=tt(r.type,i),lc(e,t,r,i,n);case 15:return Wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Ai(e,t),t.tag=1,ze(r)?(e=!0,to(t)):e=!1,$n(t,n),Ud(t,r,i),ja(t,r,i,n),Oa(null,t,r,!0,e,n);case 19:return Zd(e,t,n);case 22:return Qd(e,t,n)}throw Error(C(156,t.tag))};function dp(e,t){return Ff(e,t)}function F1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new F1(e,t,n,r)}function Bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B1(e){if(typeof e=="function")return Bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===ls)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Bs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return cn(n.children,i,o,t);case is:l=8,i|=8;break;case Zl:return e=Xe(12,n,t,i|2),e.elementType=Zl,e.lanes=o,e;case Gl:return e=Xe(13,n,t,i),e.elementType=Gl,e.lanes=o,e;case ql:return e=Xe(19,n,t,i),e.elementType=ql,e.lanes=o,e;case kf:return zo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wf:l=10;break e;case Sf:l=9;break e;case os:l=11;break e;case ls:l=14;break e;case It:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Xe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function cn(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function zo(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=kf,e.lanes=n,e.stateNode={isHidden:!1},e}function Dl(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,i,o,l,a,s){return e=new H1(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cs(o),e}function U1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pp(e){if(!e)return Zt;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ze(n))return pd(e,n,t)}return t}function mp(e,t,n,r,i,o,l,a,s){return e=Hs(n,r,!0,e,i,o,l,a,s),e.context=pp(null),n=e.current,r=_e(),i=Xt(n),o=_t(r,i),o.callback=t??null,Wt(n,o,i),e.current.lanes=i,Vr(e,i,r),Me(e,r),e}function Mo(e,t,n,r){var i=t.current,o=_e(),l=Xt(i);return n=pp(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(i,t,l),e!==null&&(ot(e,i,l,o),Ri(e,i,l)),l}function ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Us(e,t){gc(e,t),(e=e.alternate)&&gc(e,t)}function b1(){return null}var hp=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}Ro.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Mo(e,t,null,null)};Ro.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Mo(null,e,null,null)}),t[Nt]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Yf(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function V1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ho(l);o.call(u)}}var l=mp(t,r,e,0,null,!1,!1,"",xc);return e._reactRootContainer=l,e[Nt]=l.current,Tr(e.nodeType===8?e.parentNode:e),hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ho(s);a.call(u)}}var s=Hs(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=s,e[Nt]=s.current,Tr(e.nodeType===8?e.parentNode:e),hn(function(){Mo(t,s,n,r)}),s}function $o(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=ho(l);a.call(s)}}Mo(t,l,e,i)}else l=V1(n,t,e,i,r);return ho(l)}Vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(us(t,n|1),Me(t,re()),!($&6)&&(Wn=re()+500,Jt()))}break;case 13:hn(function(){var r=Pt(e,1);if(r!==null){var i=_e();ot(r,e,1,i)}}),Us(e,1)}};cs=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=_e();ot(t,e,134217728,n)}Us(e,134217728)}};Wf=function(e){if(e.tag===13){var t=Xt(e),n=Pt(e,t);if(n!==null){var r=_e();ot(n,e,t,r)}Us(e,t)}};Qf=function(){return B};Xf=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};sa=function(e,t,n){switch(t){case"input":if(ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jo(r);if(!i)throw Error(C(90));Cf(r),ta(r,i)}}}break;case"textarea":jf(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};Mf=As;Rf=hn;var W1={usingClientEntryPoint:!1,Events:[Qr,_n,jo,Lf,zf,As]},ar={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q1={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Af(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||b1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{ko=wi.inject(Q1),pt=wi}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error(C(200));return U1(e,t,null,n)};He.createRoot=function(e,t){if(!Vs(e))throw Error(C(299));var n=!1,r="",i=hp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,Tr(e.nodeType===8?e.parentNode:e),new bs(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Af(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return hn(e)};He.hydrate=function(e,t,n){if(!Io(t))throw Error(C(200));return $o(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=hp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=mp(t,null,e,1,n??null,i,!1,o,l),e[Nt]=t.current,Tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ro(t)};He.render=function(e,t,n){if(!Io(t))throw Error(C(200));return $o(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!Io(e))throw Error(C(40));return e._reactRootContainer?(hn(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};He.unstable_batchedUpdates=As;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Io(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return $o(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function vp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vp)}catch(e){console.error(e)}}vp(),vf.exports=He;var yp=vf.exports,wc=yp;Yl.createRoot=wc.createRoot,Yl.hydrateRoot=wc.hydrateRoot;var gp={};function X1(e){if(typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(gp,"__esModule",{value:!0});var ee=T;function Y1(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var zt=Y1(ee);X1(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const K1=ee.forwardRef(function({style:t={},className:n="",autoFill:r=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:l=!1,direction:a="left",speed:s=50,delay:u=0,loop:p=0,gradient:h=!1,gradientColor:v="white",gradientWidth:x=200,onFinish:w,onCycleComplete:y,onMount:j,children:d},f){const[m,g]=ee.useState(0),[k,E]=ee.useState(0),[S,O]=ee.useState(1),[A,z]=ee.useState(!1),ve=ee.useRef(null),ye=f||ve,Ie=ee.useRef(null),qe=ee.useCallback(()=>{if(Ie.current&&ye.current){const I=ye.current.getBoundingClientRect(),J=Ie.current.getBoundingClientRect();let Ve=I.width,Ee=J.width;(a==="up"||a==="down")&&(Ve=I.height,Ee=J.height),O(r&&Ve&&Ee&&Ee<Ve?Math.ceil(Ve/Ee):1),g(Ve),E(Ee)}},[r,ye,a]);ee.useEffect(()=>{if(A&&(qe(),Ie.current&&ye.current)){const I=new ResizeObserver(()=>qe());return I.observe(ye.current),I.observe(Ie.current),()=>{I&&I.disconnect()}}},[qe,ye,A]),ee.useEffect(()=>{qe()},[qe,d]),ee.useEffect(()=>{z(!0)},[]),ee.useEffect(()=>{typeof j=="function"&&j()},[]);const gn=ee.useMemo(()=>r?k*S/s:k<m?m/s:k/s,[r,m,k,S,s]),qn=ee.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!i||o?"paused":"running","--pause-on-click":!i||o&&!l||l?"paused":"running","--width":a==="up"||a==="down"?"100vh":"100%","--transform":a==="up"?"rotate(-90deg)":a==="down"?"rotate(90deg)":"none"}),[t,i,o,l,a]),Jn=ee.useMemo(()=>({"--gradient-color":v,"--gradient-width":typeof x=="number"?`${x}px`:x}),[v,x]),N=ee.useMemo(()=>({"--play":i?"running":"paused","--direction":a==="left"?"normal":"reverse","--duration":`${gn}s`,"--delay":`${u}s`,"--iteration-count":p?`${p}`:"infinite","--min-width":r?"auto":"100%"}),[i,a,gn,u,p,r]),L=ee.useMemo(()=>({"--transform":a==="up"?"rotate(90deg)":a==="down"?"rotate(-90deg)":"none"}),[a]),M=ee.useCallback(I=>[...Array(Number.isFinite(I)&&I>=0?I:0)].map((J,Ve)=>zt.default.createElement(ee.Fragment,{key:Ve},ee.Children.map(d,Ee=>zt.default.createElement("div",{style:L,className:"rfm-child"},Ee)))),[L,d]);return A?zt.default.createElement("div",{ref:ye,style:qn,className:"rfm-marquee-container "+n},h&&zt.default.createElement("div",{style:Jn,className:"rfm-overlay"}),zt.default.createElement("div",{className:"rfm-marquee",style:N,onAnimationIteration:y,onAnimationEnd:w},zt.default.createElement("div",{className:"rfm-initial-child-container",ref:Ie},ee.Children.map(d,I=>zt.default.createElement("div",{style:L,className:"rfm-child"},I))),M(S-1)),zt.default.createElement("div",{className:"rfm-marquee",style:N},M(S))):null});var Z1=gp.default=K1;const xt="/assets/blueSlide-removebg-qgaD0Veo.png",G1="/assets/bluecaplogo-CKY_R2RL.png",Sc="data:image/webp;base64,UklGRr4PAABXRUJQVlA4TLIPAAAvX8AXEAkFbRs5Su9+9/kDXhgi+j8BPCUJ4kJKRLnV/Ni1SquA7QUsmh0RC9Zi14jQodboysOotRZ17COTBmxsyOT0cbftBdvItpUs7hoyHwmJ6L8ciqAD6YFtI0mK6sCE/xA2/+jWevGLaSTZUpr7/8/1JIr6Eokk/0gIAk31PwGAl5eeE38CXwq+AQAcEOzs7MRy5SgAtBwAwrmEs5Tu+QW0ACiVcI6pmrq4j6MHCALoRauknpRaKiXACO8HIJxLLi3nOL/LkT3ADxJwpkOaf+EcQaXqAIDATAC4AUBPj5eK/wMAiENB2gbM6l/3noOIUNu2DSNvLflDj+gRwcGAFamzf6jIjvx/jiQrv+yZ99DC0xqPI2gNByDwCK7CCbQnL6CFpTU3wMWSltZidvpvVFVWdQ3S+x4ADf/IeCp9Ip5+L0/wsLC0PMbfx6Wj3T0AblpoMJ+53pp4mhNwBbm1bavaMvf9JPoFUs/cM++CpiiCNqiAQQP/XwbOr5/cLTm2bdWqxtpPcAmBKIj/xUIPWnzXc5Yk2LZN29n7XH/Ftm3btm076dp20rJt28a3bfv/a54JoORsmyLJyciCaRpmZj6tD8B4B2ZmZsbWMPZ0VmbGoiDrCK98h1+podAcYIyllIaWXjHkbpbeMcQdrFbv4gCWd6009gkMq975ANin8NKyJFfbtkOS3u8fW2vbtm17D8DRXnsYewBmaOTOBhmruseeitpd+xf/75MdSZIkKxHZ3e/k1mjRGUMGUAAleH/3ezOdMQEC+TLqm2bF45COi/803DFkM+F2gR7tuR9bsDcb5oc2dGF9znnRafl7PNF5S8ejpbZGM1EzRUWbAtIgWXEJYrjCTigK2SjekLmNeBsithH4pooT3ueKr9/zifY2DDOGp+guJBTITBVFFIkfNrw64dtjPosX9My9SJm7f9JEw9zEREUzIdzKwhZUKCLMuPn2d60txbP1lo8dkVgjhqTwYbcGJAqMZ5qOi+gz86In5e9x0xgbNosuCWRcAYAK6JGA7kDH6WMNK1c8Ux0Sf8+EKXnLOz2OFg4YvaUcuRKQQi0sXFVairtpb59IWt+r37TyHRb2WPZiJSLDaGM7Ni3QnMPv+45ZmSnedvzvmTLnRO2UIKu2loqJ93qr1are/OTDV2aQqsrvWLsE1d38hO4P/4as5/Tw1ld0NgSCtpagDUBUTkPbN9/Hr+V43NdO1MdTAZNBWyZoRMtyd4No7laX3hKwjuc8uXSR7pfU+gddmuy84wDdGSZTluKekFfw7KeXDlvdn5LKrD8ao/9Qm/+ZTe/t7hkPLh2le4VfEtxd0JbCoKrC48WNtytbKE2j2yUV/8GS3emeMewOHe8+GHYcwFA+RflutmSqFEVNFo7GWm9Vpd33jLGLO6AZSab0H0ut2Ar+lyr+/HIP+cqw+P8LZ+XR5rmrdMv8W0zQ1Pls6Kw9WACwKj79589SJ1OgkR0RK2u7NU8/dJK7tyzyxC80a+5fdPexaINoI9F2oIkMTUGhyaTWUQ87RNwStxxv5rZKjogYSQHO9L+sAVb+rz0gidxcZfv5Bd48RKv5DKgFrgYq4PSBowTwXh244PTqQK/ghVAIFBqOyRhKCh3CE9C5ul7Nhf+lOiq+zvvNNuuEdRumcLjscBkrTz0xVjPkRDArUT0VEqvyTs4Oi+b9WvIxfLiraFmaio3RAFs3r4Xns+DkiMFTPymjWSK23bvnnVibU+tFhHvQAmhLBTQIGrzC3lioYXv1D9O2/l184veq832dySvzZBuhc5ABQYOgAfHdl79sxTlSVOeiWuoe4c46S3AixI4rH3tX/Ft08tf8HX+6mx+UKgZtusFOKaoxzL14h90aN+f1r1Xf2hPVIKMK8O4LjSFN9qLJ9wJQbT6XLWZx46p4k8Y17UAq0gFwgjbSHZOvTzh5HyRo3rmu8aJqlAvenaEPOg4dJMUUCI3H7JizNaAanbd/rzrt9HjtpflAij0ptSiaJbc7INWsp94iLOvvKaZJEJwDQOXqThIg2oFxKXJA9o4BHqNVQiGu7OR1rDjt/NXVCC1vGkRJxGUHfnzgx1DqAfgxBk3NdrE361Uvf9Uzu+uB3eccsTEakNW5LD3t0j2WOSTdmLCEuMMsqAoWXbIude5rUdGXCNrAZnV74USE6gZn7XL1aWbNq6W5/VSV2GCTRZkULXiwTUUb+5tt/tcXmTlbHaQGY4ncFEsEwjJ6l7n8JEu2oCW0aEPPwLVaT6WSuihk2+DwadBhyVPmi+s5qfo42UGbMUwsu8ZHXM3CY6w6Tm9ZaDmKGSyoFBPnokqgfrtDlNWHIhAtK2iYnhUrM172olVMW0TeTA+1NuIjoI++9XvpjbV8VywtvzOYMgrsaqBndmm8dbRaDwVHRlIq2aWCKvDjy5s+wpq63fZ/Oyvct5iVGiCFmAxFr27PP+q6y61ikNPq3ig01IgHDtN0Q4IKmotrUmqORYM7nqkgCqa2o21dLUDQJjxCCsGkoJUSoQHsWtTVN/bSPY6SULM1TWzEUyglzX8vU3AKZTLayNDsqif+1hLhU6ZNv0d+NiRASkxEfEaV56xd57pbzFqgJaENfUIPQRG+woMtbLQsEXLYjO/HstXgRpswrX0a+Fh3CqFAYG9xooZdnvGx+ARrTs+YF4kPhS7/w7inUALNB/IMOPqkGDTEoTt07w7dAZkGU/83rR5AC4YZFtBSG8jRvexcf4uF669IbkNNGOoBeGe8oMX+BFXUBzigEWQ3LlNbe0p38Cb+zkyNfhPgfebBj/XXxvQZV5bksW9YxDMAqkSvBFp+rjsVpXFZasguFQKUVJ669BKrSdzPIeRz6UMWrr2ijZoJNVGkB4CvMlq2GyzL5OtiDYua7T9lB5+M4LzMsDU+Ft8Obfy3pvEYAFVCQct5zWP7ECUwKnjSJrVkaY4wJc9gLR6YmfrIgz8el55+7W2ur0xw4ts4knq/DI8g4U+7p1OivOVo2gwg2yBTt/nDE45DtByryMEU26Pj8UG25+iqZ0INpVKa2UgnDKDeI94h8cah0w+Xh7j8SNZorok19f5jrpVlAHO/YQ+OiBnI+VRfnup3Z4HeZnrqaKDZsGAcKvWoEpSYrD/RCsaHIuJaazGm0qYefMoyVT0jxYAVajgjIvclJc5Aejxp5XHbK963f7ixwUVuQlehvvhDK0jeb1HGxDkalzoybUnJlLCTFMdUwQAYJcSoVZDcR3wZZR7n37455fA4/c7eNIqOpaFSeAraWAvZOmQJoyPNZqcpf4qtZngOBgy+yhFyoxBFyX3Y698G3Z/Pv3N1b3tpqIjxvB3bnIbZWOnQbuukZxjJpjA1mQK5IvP8v7yb1hTc3Prq7oJX1UTd+GGhnRuHUXr40JNqAHiEL9A3kpwhYkzpN7oTNLo0MApCbkz+389dtPrUzY6OL+c8SswAYcTuAntp669lTHNECkH2bazvW4/vd7jJSju3vU7LsK1IguxSGRbCTaEkqcCyGISZswalAiPbEm7tJo5oS3/SMvygc8SBI7dUgJ7IOF3yy3jSwSnRZoocSqVQB4zBAXyKD4epNNPXCPwvu6fc0EaQ1yWL2U1JS2jHZgCFOih1CjNRZAqa5PceqNTKsEKhMip5LruZOcsAzUJYdGM7A9MMJdo4gXZHfkRcoklZv3PYzn5zqMyc6Lgj6XbN/HX1S0QbgdEt3W63fT7Js0kqWB9Lh4TRJjaOX7NOrU82awiWpa2IC0x6Z9NVzZFDAHL3z9fzH//fmSbBcxYVCWKTTKvy3vHznJm1+XkTaSQlqi8mIqLRQWLmYtEMcPiRnpdrPjw9+3duG/C1oVYiw8bBUcLs2Kxdlr4g+7ym56JvXoFKVwF0d05gh868NXhkbITDD3a/XPfpZYJ324PbKsZAKs9YjLWwp8DOCX0oHdcmqXvk8DSPc/P/7SSLk7CD7iO1Uhn2vYjruCC0d3arFWqjDN3V+nTj55ee6K4L11VclWEJ6v8+09WdKZptnjbMTV8UgYIO0H3Q8RGZlE/+OaXPeK5yql8RFhCXxWUj3ivg3QEMZmi7zupTqtJKEKxxlFAGXUBRYjGGkTQkFuzr5AXsrZs8j0lrG0J6ZVi9M16geidNd5lrddFSiuPuEI25GhG32XHe7miiFkSbeCKv/1aFZuTkSY3u8Zi5+Zy7mbr5W1VNRIiTgQa1VjILFTCU5O/jWXf7eXNXnZQYBSh1UKhjmFSz9/3rM70/fCHrYD4uQ5O5GAzbIKBU3105gYV73JHH0irLqq4/+ewZZwlHXcfUelcPBwtKGodUAchhJ6/D4ZNDWhoJJ0+/enmy01pg4Nk/xKCLlcaywtb+0Jn5J2e3N6xNiAgi41/spwpGpSyIcPjwYaGQdGjYDt/xdJ56/HLO7Z+XPrlsTEb2Hq4j3VtkdbW3xewFRPlWdpp6YABEGwuiUWrdqCErEcaNHjkCpA5Jne0x03NGMLp8N7+5zpEkMDLbKE7X00vEL8BnL9+fpOmjKT0cgmELGsNKvSHPSujriDjnMkaBES10Ubrg1yUaH2OkLiKl6uwV21lSGDaOmzRj3nSTj8w35Jm4jog46p0Z+boqqSC/KSSXJqXmGZG3/3HTT5QuAuoab8p75kihjoz/mEwDsCdcliskyw1oAwaFOiK1rTay9B28SKrBasg+Yr+P/X6PAvCOM14rBSXgE90LOCAzhTOs0NUCg+4Jz8wplj9Z/6m7rdbgDg7R2LU1pAqSsFTwbvrjw5dvn3fANv/qJ7vy1ZNLBC2v/SLZZCc7TdVmW2Q/+ttKoc5YaTHKtLea3b4TYlXzTyxY6lTQdhINlZZYy64FMVjfD/OgTkCpIw3XDkioqVnKChNo5V7t7iPd6dEG3bvTveMUasdJ2n0gVEsWPXVz82ANmJRR4bIBzpKFymjQRkolaIBpSZpZwzq/otlENWpEeIwusWCpwGUg4jZba1it9ZBmmmUppbB4kIA5419X826z6yFWfImVnCTI4yb3q92zAtoOLHSx39xGsmqRp+5XatOKpVBuuOyGFi2gEdCC0RYjDQJoAfxKFbiVTaz+s51vJs9MVQ935kcjt1ABpNnG0Y/Pn+c5gyJbzTXVW0tdlo42MWqtKjmv5qjI4myKIJM9pvdM5ST+OylULopc41rqnPkmZ/dpSh7kd2Pzb5aZudJGSrgFpn+lRjcN23D1RP5y1p+u0l19674x46UTFI1Tg3TvOBQk0J3uQP+BNDCZZ6f68l1E8LnxhX41Prb6mfaWtBH1pTUlHBSoRENopjnJpEqDZX5fot9FIZ9LX6TMCQGf9VlBDnW21NpQVSZAtpAMMRzDTHaJUbi1s46dco78kp/iVRaUL5MC";var te={},Ws={},Yr={},Kr={},xp="Expected a function",kc=NaN,q1="[object Symbol]",J1=/^\s+|\s+$/g,eh=/^[-+]0x[0-9a-f]+$/i,th=/^0b[01]+$/i,nh=/^0o[0-7]+$/i,rh=parseInt,ih=typeof ri=="object"&&ri&&ri.Object===Object&&ri,oh=typeof self=="object"&&self&&self.Object===Object&&self,lh=ih||oh||Function("return this")(),ah=Object.prototype,sh=ah.toString,uh=Math.max,ch=Math.min,Bl=function(){return lh.Date.now()};function fh(e,t,n){var r,i,o,l,a,s,u=0,p=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(xp);t=Ec(t)||0,vo(n)&&(p=!!n.leading,h="maxWait"in n,o=h?uh(Ec(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v);function x(E){var S=r,O=i;return r=i=void 0,u=E,l=e.apply(O,S),l}function w(E){return u=E,a=setTimeout(d,t),p?x(E):l}function y(E){var S=E-s,O=E-u,A=t-S;return h?ch(A,o-O):A}function j(E){var S=E-s,O=E-u;return s===void 0||S>=t||S<0||h&&O>=o}function d(){var E=Bl();if(j(E))return f(E);a=setTimeout(d,y(E))}function f(E){return a=void 0,v&&r?x(E):(r=i=void 0,l)}function m(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function g(){return a===void 0?l:f(Bl())}function k(){var E=Bl(),S=j(E);if(r=arguments,i=this,s=E,S){if(a===void 0)return w(s);if(h)return a=setTimeout(d,t),x(s)}return a===void 0&&(a=setTimeout(d,t)),l}return k.cancel=m,k.flush=g,k}function dh(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(xp);return vo(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),fh(e,t,{leading:r,maxWait:t,trailing:i})}function vo(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ph(e){return!!e&&typeof e=="object"}function mh(e){return typeof e=="symbol"||ph(e)&&sh.call(e)==q1}function Ec(e){if(typeof e=="number")return e;if(mh(e))return kc;if(vo(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=vo(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(J1,"");var n=th.test(e);return n||nh.test(e)?rh(e.slice(2),n?2:8):eh.test(e)?kc:+e}var hh=dh,Zr={};Object.defineProperty(Zr,"__esModule",{value:!0});Zr.addPassiveEventListener=function(t,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),Hi.has(n)||Hi.set(n,new Set);var o=Hi.get(n);if(!o.has(i)){var l=function(){var a=!1;try{var s=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,s)}catch{}return a}();t.addEventListener(n,r,l?{passive:!0}:!1),o.add(i)}};Zr.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Hi.get(n).delete(r.name||n)};var Hi=new Map;Object.defineProperty(Kr,"__esModule",{value:!0});var vh=hh,yh=xh(vh),gh=Zr;function xh(e){return e&&e.__esModule?e:{default:e}}var wh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,yh.default)(t,n)},Y={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=wh(function(i){Y.scrollHandler(t)},n);Y.scrollSpyContainers.push(t),(0,gh.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Y.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Y.scrollSpyContainers[Y.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Y.currentPositionX(t),Y.currentPositionY(t))})},addStateHandler:function(t){Y.spySetState.push(t)},addSpyHandler:function(t,n){var r=Y.scrollSpyContainers[Y.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Y.currentPositionX(n),Y.currentPositionY(n))},updateStates:function(){Y.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Y.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Y.spySetState&&Y.spySetState.length&&Y.spySetState.indexOf(t)>-1&&Y.spySetState.splice(Y.spySetState.indexOf(t),1),document.removeEventListener("scroll",Y.scrollHandler)},update:function(){return Y.scrollSpyContainers.forEach(function(t){return Y.scrollHandler(t)})}};Kr.default=Y;var Zn={},Gr={};Object.defineProperty(Gr,"__esModule",{value:!0});var Sh=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,l=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},kh=function(){return window.location.hash.replace(/^#/,"")},Eh=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},Ch=function(t){return getComputedStyle(t).position!=="static"},Hl=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},_h=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Ch(t)){if(n.offsetParent!==t){var i=function(p){return p===t||p===document},o=Hl(n,i),l=o.offsetTop,a=o.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(p){return p===document};return Hl(n,s).offsetTop-Hl(t,s).offsetTop};Gr.default={updateHash:Sh,getHash:kh,filterElementInContainer:Eh,scrollOffset:_h};var Ao={},Qs={};Object.defineProperty(Qs,"__esModule",{value:!0});Qs.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});var jh=Zr,Nh=["mousedown","mousewheel","touchmove","keydown"];Xs.default={subscribe:function(t){return typeof document<"u"&&Nh.forEach(function(n){return(0,jh.addPassiveEventListener)(document,n,t)})}};var qr={};Object.defineProperty(qr,"__esModule",{value:!0});var Ha={registered:{},scrollEvent:{register:function(t,n){Ha.registered[t]=n},remove:function(t){Ha.registered[t]=null}}};qr.default=Ha;Object.defineProperty(Ao,"__esModule",{value:!0});var Ph=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oh=Gr;Do(Oh);var Th=Qs,Cc=Do(Th),Lh=Xs,zh=Do(Lh),Mh=qr,ut=Do(Mh);function Do(e){return e&&e.__esModule?e:{default:e}}var wp=function(t){return Cc.default[t.smooth]||Cc.default.defaultEasing},Rh=function(t){return typeof t=="function"?t:function(){return t}},Ih=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Ua=function(){return Ih()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),Sp=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},kp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},Ep=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},$h=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},Ah=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},Dh=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){ut.default.registered.end&&ut.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);Ua.call(window,o);return}ut.default.registered.end&&ut.default.registered.end(i.to,i.target,i.currentPosition)},Ys=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Jr=function(t,n,r,i){n.data=n.data||Sp(),window.clearTimeout(n.data.delayTimeout);var o=function(){n.data.cancel=!0};if(zh.default.subscribe(o),Ys(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?kp(n):Ep(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){ut.default.registered.end&&ut.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Rh(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var l=wp(n),a=Dh.bind(null,l,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){ut.default.registered.begin&&ut.default.registered.begin(n.data.to,n.data.target),Ua.call(window,a)},n.delay);return}ut.default.registered.begin&&ut.default.registered.begin(n.data.to,n.data.target),Ua.call(window,a)},Fo=function(t){return t=Ph({},t),t.data=t.data||Sp(),t.absolute=!0,t},Fh=function(t){Jr(0,Fo(t))},Bh=function(t,n){Jr(t,Fo(n))},Hh=function(t){t=Fo(t),Ys(t),Jr(t.horizontal?$h(t):Ah(t),t)},Uh=function(t,n){n=Fo(n),Ys(n);var r=n.horizontal?kp(n):Ep(n);Jr(t+r,n)};Ao.default={animateTopScroll:Jr,getAnimationType:wp,scrollToTop:Fh,scrollToBottom:Hh,scrollTo:Bh,scrollMore:Uh};Object.defineProperty(Zn,"__esModule",{value:!0});var bh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vh=Gr,Wh=Ks(Vh),Qh=Ao,Xh=Ks(Qh),Yh=qr,Si=Ks(Yh);function Ks(e){return e&&e.__esModule?e:{default:e}}var ki={},_c=void 0;Zn.default={unmount:function(){ki={}},register:function(t,n){ki[t]=n},unregister:function(t){delete ki[t]},get:function(t){return ki[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return _c=t},getActiveLink:function(){return _c},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=bh({},n,{absolute:!1});var i=n.containerId,o=n.container,l=void 0;i?l=document.getElementById(i):o&&o.nodeType?l=o:l=document,n.absolute=!0;var a=n.horizontal,s=Wh.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){Si.default.registered.begin&&Si.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,Si.default.registered.end&&Si.default.registered.end(t,r);return}Xh.default.animateTopScroll(s,n,t,r)}};var Cp={exports:{}},Kh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Zh=Kh,Gh=Zh;function _p(){}function jp(){}jp.resetWarningCache=_p;var qh=function(){function e(r,i,o,l,a,s){if(s!==Gh){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:jp,resetWarningCache:_p};return n.PropTypes=n,n};Cp.exports=qh();var Bo=Cp.exports,Ho={};Object.defineProperty(Ho,"__esModule",{value:!0});var Jh=Gr,Ul=ev(Jh);function ev(e){return e&&e.__esModule?e:{default:e}}var tv={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return Ul.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Ul.default.getHash()!==t&&Ul.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Ho.default=tv;Object.defineProperty(Yr,"__esModule",{value:!0});var Ei=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),rv=T,jc=ei(rv),iv=Kr,Ci=ei(iv),ov=Zn,lv=ei(ov),av=Bo,Q=ei(av),sv=Ho,Mt=ei(sv);function ei(e){return e&&e.__esModule?e:{default:e}}function uv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function fv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Nc={to:Q.default.string.isRequired,containerId:Q.default.string,container:Q.default.object,activeClass:Q.default.string,activeStyle:Q.default.object,spy:Q.default.bool,horizontal:Q.default.bool,smooth:Q.default.oneOfType([Q.default.bool,Q.default.string]),offset:Q.default.number,delay:Q.default.number,isDynamic:Q.default.bool,onClick:Q.default.func,duration:Q.default.oneOfType([Q.default.number,Q.default.func]),absolute:Q.default.bool,onSetActive:Q.default.func,onSetInactive:Q.default.func,ignoreCancelEvents:Q.default.bool,hashSpy:Q.default.bool,saveHashHistory:Q.default.bool,spyThrottle:Q.default.number};Yr.default=function(e,t){var n=t||lv.default,r=function(o){fv(l,o);function l(a){uv(this,l);var s=cv(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return i.call(s),s.state={active:!1},s}return nv(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();Ci.default.isMounted(s)||Ci.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Mt.default.isMounted()||Mt.default.mount(n),Mt.default.mapContainer(this.props.to,s)),Ci.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){Ci.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=Ei({},this.props.style,this.props.activeStyle):u=Ei({},this.props.style);var p=Ei({},this.props);for(var h in Nc)p.hasOwnProperty(h)&&delete p[h];return p.className=s,p.style=u,p.onClick=this.handleClick,jc.default.createElement(e,p)}}]),l}(jc.default.PureComponent),i=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,Ei({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(Mt.default.isMounted()&&!Mt.default.isInitialized())){var p=l.props.horizontal,h=l.props.to,v=null,x=void 0,w=void 0;if(p){var y=0,j=0,d=0;if(u.getBoundingClientRect){var f=u.getBoundingClientRect();d=f.left}if(!v||l.props.isDynamic){if(v=n.get(h),!v)return;var m=v.getBoundingClientRect();y=m.left-d+a,j=y+m.width}var g=a-l.props.offset;x=g>=Math.floor(y)&&g<Math.floor(j),w=g<Math.floor(y)||g>=Math.floor(j)}else{var k=0,E=0,S=0;if(u.getBoundingClientRect){var O=u.getBoundingClientRect();S=O.top}if(!v||l.props.isDynamic){if(v=n.get(h),!v)return;var A=v.getBoundingClientRect();k=A.top-S+s,E=k+A.height}var z=s-l.props.offset;x=z>=Math.floor(k)&&z<Math.floor(E),w=z<Math.floor(k)||z>=Math.floor(E)}var ve=n.getActiveLink();if(w){if(h===ve&&n.setActiveLink(void 0),l.props.hashSpy&&Mt.default.getHash()===h){var ye=l.props.saveHashHistory,Ie=ye===void 0?!1:ye;Mt.default.changeHash("",Ie)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(h,v))}if(x&&(ve!==h||l.state.active===!1)){n.setActiveLink(h);var qe=l.props.saveHashHistory,gn=qe===void 0?!1:qe;l.props.hashSpy&&Mt.default.changeHash(h,gn),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(h,v))}}}};return r.propTypes=Nc,r.defaultProps={offset:0},r};Object.defineProperty(Ws,"__esModule",{value:!0});var dv=T,Pc=Np(dv),pv=Yr,mv=Np(pv);function Np(e){return e&&e.__esModule?e:{default:e}}function hv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function vv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var yv=function(e){vv(t,e);function t(){var n,r,i,o;hv(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Oc(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.render=function(){return Pc.default.createElement("a",i.props,i.props.children)},r),Oc(i,o)}return t}(Pc.default.Component);Ws.default=(0,mv.default)(yv);var Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});var gv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),xv=T,Tc=Pp(xv),wv=Yr,Sv=Pp(wv);function Pp(e){return e&&e.__esModule?e:{default:e}}function kv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ev(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Cv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _v=function(e){Cv(t,e);function t(){return kv(this,t),Ev(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return gv(t,[{key:"render",value:function(){return Tc.default.createElement("button",this.props,this.props.children)}}]),t}(Tc.default.Component);Zs.default=(0,Sv.default)(_v);var Gs={},Uo={};Object.defineProperty(Uo,"__esModule",{value:!0});var jv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Pv=T,Lc=bo(Pv),Ov=yp;bo(Ov);var Tv=Zn,zc=bo(Tv),Lv=Bo,Mc=bo(Lv);function bo(e){return e&&e.__esModule?e:{default:e}}function zv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Rv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Uo.default=function(e){var t=function(n){Rv(r,n);function r(i){zv(this,r);var o=Mv(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return Nv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;zc.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){zc.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Lc.default.createElement(e,jv({},this.props,{parentBindings:this.childBindings}))}}]),r}(Lc.default.Component);return t.propTypes={name:Mc.default.string,id:Mc.default.string},t};Object.defineProperty(Gs,"__esModule",{value:!0});var Rc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Iv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),$v=T,Ic=qs($v),Av=Uo,Dv=qs(Av),Fv=Bo,$c=qs(Fv);function qs(e){return e&&e.__esModule?e:{default:e}}function Bv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Uv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Op=function(e){Uv(t,e);function t(){return Bv(this,t),Hv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Iv(t,[{key:"render",value:function(){var r=this,i=Rc({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,Ic.default.createElement("div",Rc({},i,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(Ic.default.Component);Op.propTypes={name:$c.default.string,id:$c.default.string};Gs.default=(0,Dv.default)(Op);var bl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ac=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Dc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Bc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _i=T,tn=Kr,Vl=Zn,K=Bo,Rt=Ho,Hc={to:K.string.isRequired,containerId:K.string,container:K.object,activeClass:K.string,spy:K.bool,smooth:K.oneOfType([K.bool,K.string]),offset:K.number,delay:K.number,isDynamic:K.bool,onClick:K.func,duration:K.oneOfType([K.number,K.func]),absolute:K.bool,onSetActive:K.func,onSetInactive:K.func,ignoreCancelEvents:K.bool,hashSpy:K.bool,spyThrottle:K.number},bv={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Vl,i=function(l){Bc(a,l);function a(s){Dc(this,a);var u=Fc(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return o.call(u),u.state={active:!1},u}return Ac(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,p=this.props.container;return u?document.getElementById(u):p&&p.nodeType?p:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();tn.isMounted(u)||tn.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Rt.isMounted()||Rt.mount(r),Rt.mapContainer(this.props.to,u)),this.props.spy&&tn.addStateHandler(this.stateHandler),tn.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){tn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var p=bl({},this.props);for(var h in Hc)p.hasOwnProperty(h)&&delete p[h];return p.className=u,p.onClick=this.handleClick,_i.createElement(t,p)}}]),a}(_i.Component),o=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,bl({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(Rt.isMounted()&&!Rt.isInitialized())){var p=a.props.to,h=null,v=0,x=0,w=0;if(u.getBoundingClientRect){var y=u.getBoundingClientRect();w=y.top}if(!h||a.props.isDynamic){if(h=r.get(p),!h)return;var j=h.getBoundingClientRect();v=j.top-w+s,x=v+j.height}var d=s-a.props.offset,f=d>=Math.floor(v)&&d<Math.floor(x),m=d<Math.floor(v)||d>=Math.floor(x),g=r.getActiveLink();if(m)return p===g&&r.setActiveLink(void 0),a.props.hashSpy&&Rt.getHash()===p&&Rt.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),tn.updateStates();if(f&&g!==p)return r.setActiveLink(p),a.props.hashSpy&&Rt.changeHash(p),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(p)),tn.updateStates()}}};return i.propTypes=Hc,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Bc(i,r);function i(o){Dc(this,i);var l=Fc(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return l.childBindings={domNode:null},l}return Ac(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Vl.unregister(this.props.name)}},{key:"registerElems",value:function(l){Vl.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return _i.createElement(t,bl({},this.props,{parentBindings:this.childBindings}))}}]),i}(_i.Component);return n.propTypes={name:K.string,id:K.string},n}},Vv=bv;Object.defineProperty(te,"__esModule",{value:!0});te.Helpers=te.ScrollElement=te.ScrollLink=te.animateScroll=te.scrollSpy=te.Events=te.scroller=te.Element=te.Button=et=te.Link=void 0;var Wv=Ws,Tp=yt(Wv),Qv=Zs,Lp=yt(Qv),Xv=Gs,zp=yt(Xv),Yv=Zn,Mp=yt(Yv),Kv=qr,Rp=yt(Kv),Zv=Kr,Ip=yt(Zv),Gv=Ao,$p=yt(Gv),qv=Yr,Ap=yt(qv),Jv=Uo,Dp=yt(Jv),ey=Vv,Fp=yt(ey);function yt(e){return e&&e.__esModule?e:{default:e}}var et=te.Link=Tp.default;te.Button=Lp.default;te.Element=zp.default;te.scroller=Mp.default;te.Events=Rp.default;te.scrollSpy=Ip.default;te.animateScroll=$p.default;te.ScrollLink=Ap.default;te.ScrollElement=Dp.default;te.Helpers=Fp.default;te.default={Link:Tp.default,Button:Lp.default,Element:zp.default,scroller:Mp.default,Events:Rp.default,scrollSpy:Ip.default,animateScroll:$p.default,ScrollLink:Ap.default,ScrollElement:Dp.default,Helpers:Fp.default};var Bp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Uc=Ct.createContext&&Ct.createContext(Bp),ty=["attr","size","title"];function ny(e,t){if(e==null)return{};var n=ry(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ry(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}function bc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function go(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bc(Object(n),!0).forEach(function(r){iy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iy(e,t,n){return t=oy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oy(e){var t=ly(e,"string");return typeof t=="symbol"?t:t+""}function ly(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hp(e){return e&&e.map((t,n)=>Ct.createElement(t.tag,go({key:n},t.attr),Hp(t.child)))}function gt(e){return t=>Ct.createElement(ay,yo({attr:go({},e.attr)},t),Hp(e.child))}function ay(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=ny(e,ty),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Ct.createElement("svg",yo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:go(go({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Ct.createElement("title",null,o),e.children)};return Uc!==void 0?Ct.createElement(Uc.Consumer,null,n=>t(n)):t(Bp)}function sy(e){return gt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function uy(e){return gt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function cy(e){return gt({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const fy=()=>{const[e,t]=T.useState(!1),n=()=>{t(!e)};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"w-full bg-main py-4 fixed top-0 left-0 z-20",children:c.jsxs(Z1,{gradient:!1,speed:45,className:"text-white font-bold text-2xl flex items-center",children:[c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})}),c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})}),c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})}),c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})}),c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})}),c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})}),c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})}),c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})}),c.jsx("div",{className:"mx-4",children:c.jsxs("div",{className:"flex",children:["$BLUECAP ",c.jsx("img",{src:xt,className:"w-8"})]})})]})}),c.jsxs("div",{className:"w-[90%] mt-12 left-1/2 transform -translate-x-1/2 bg-white mx-auto h-20 rounded-2xl justify-between fixed z-20 flex items-center shadow-lg",children:[c.jsx("div",{className:"w-[25%] md:w-[20%] lg:w-[10%]",children:c.jsx("img",{src:G1,className:"w-28"})}),c.jsxs("div",{className:"hidden lg:w-[40%] lg:justify-around md:justify-between md:flex lg:gap-8 gap-4",children:[c.jsx(et,{to:"about",smooth:!0,offset:-180,duration:500,className:"text-text font-bold lg:text-2xl md:text-lg hover:text-main",children:"About"}),c.jsx(et,{to:"why",smooth:!0,offset:-150,duration:500,className:"text-text font-bold lg:text-2xl md:text-lg hover:text-main",children:"Why"}),c.jsx(et,{to:"info",smooth:!0,offset:-110,duration:500,className:"text-text font-bold lg:text-2xl md:text-lg hover:text-main",children:"Tokenomics"}),c.jsx(et,{to:"chart",smooth:!0,offset:-125,duration:500,className:"text-text font-bold lg:text-2xl md:text-lg hover:text-main",children:"Chart"}),c.jsx(et,{to:"roadmap",smooth:!0,offset:-120,duration:500,className:"text-text font-bold lg:text-2xl md:text-lg hover:text-main",children:"Roadmap"})]}),c.jsxs("div",{className:"hidden mr-7 w-[15%] justify-around md:flex gap-3",children:[c.jsx("a",{href:"http://t.me/BlueCapCoinSOL",target:"_blank",rel:"noopener noreferrer",children:c.jsx("img",{src:Sc,className:"w-14"})}),c.jsx("a",{href:"https://x.com/bluecapsol?s=21&t=YaZ3JzgY3AG7QkJmRfCrAQ",className:"mt-2 text-4xl",target:"_blank",rel:"noopener noreferrer",children:"𝕏"})]}),c.jsx("div",{className:"text-3xl mr-4 text-main cursor-pointer sm:hidden",onClick:n,children:e?c.jsx(cy,{}):c.jsx(sy,{})})]}),c.jsxs("div",{className:`${e?"top-[7.9rem]":"-top-72"} sm:hidden w-[90%] fixed text-center left-1/2 transform -translate-x-1/2 my-auto bg-white mt-1 py-8 items-center justify-center transition-all self-center duration-400 ease-in-out text-2xl z-10 shadow-lg rounded-2xl`,children:[c.jsx(et,{to:"about",onClick:n,smooth:!0,offset:-180,duration:500,className:"justify-between",children:c.jsx("p",{className:"py-2 text-text font-bold text-3xl hover:text-main",children:"About"})}),c.jsx(et,{to:"why",onClick:n,smooth:!0,offset:-150,duration:500,className:"justify-between",children:c.jsx("p",{className:"py-2 text-text font-bold text-3xl hover:text-main",children:"Why"})}),c.jsx(et,{to:"info",onClick:n,smooth:!0,offset:-110,duration:500,className:"justify-between",children:c.jsx("p",{className:"py-2 text-text font-bold text-3xl hover:text-main",children:"Tokenomics"})}),c.jsx(et,{to:"chart",onClick:n,smooth:!0,offset:-125,duration:500,className:"justify-between",children:c.jsx("p",{className:"py-2 text-text font-bold text-3xl hover:text-main",children:"Chart"})}),c.jsx(et,{to:"roadmap",onClick:n,smooth:!0,offset:-120,duration:500,className:"justify-between",children:c.jsx("p",{className:"py-2 text-text font-bold text-3xl hover:text-main",children:"Roadmap"})}),c.jsxs("div",{className:"flex mt-4 justify-center",children:[c.jsx("a",{href:"http://t.me/BlueCapCoinSOL",target:"_blank",rel:"noopener noreferrer",children:c.jsx("img",{src:Sc,className:"w-14"})}),c.jsx("a",{href:"https://x.com/bluecapsol?s=21&t=YaZ3JzgY3AG7QkJmRfCrAQ",className:"mt-1 ml-3 text-5xl",target:"_blank",rel:"noopener noreferrer",children:"𝕏"})]})]})]})};/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const Vc="popstate";function dy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return ba("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bp(i)}return my(t,n,null,e)}function Up(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function py(){return Math.random().toString(36).substr(2,8)}function Wc(e,t){return{usr:e.state,key:e.key,idx:t}}function ba(e,t,n,r){return n===void 0&&(n=null),xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vp(t):t,{state:n,key:t&&t.key||r||py()})}function bp(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vp(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function my(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=sn.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(xo({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function h(){a=sn.Pop;let j=p(),d=j==null?null:j-u;u=j,s&&s({action:a,location:y.location,delta:d})}function v(j,d){a=sn.Push;let f=ba(y.location,j,d);u=p()+1;let m=Wc(f,u),g=y.createHref(f);try{l.pushState(m,"",g)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(g)}o&&s&&s({action:a,location:y.location,delta:1})}function x(j,d){a=sn.Replace;let f=ba(y.location,j,d);u=p();let m=Wc(f,u),g=y.createHref(f);l.replaceState(m,"",g),o&&s&&s({action:a,location:y.location,delta:0})}function w(j){let d=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof j=="string"?j:bp(j);return f=f.replace(/ $/,"%20"),Up(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let y={get action(){return a},get location(){return e(i,l)},listen(j){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Vc,h),s=j,()=>{i.removeEventListener(Vc,h),s=null}},createHref(j){return t(i,j)},createURL:w,encodeLocation(j){let d=w(j);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:x,go(j){return l.go(j)}};return y}var Qc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qc||(Qc={}));function hy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Wp=["post","put","patch","delete"];new Set(Wp);const vy=["get",...Wp];new Set(vy);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Va.apply(this,arguments)}const yy=T.createContext(null),Qp=T.createContext(null);function gy(){return T.useContext(Qp)!=null}function xy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:o,static:l=!1,future:a}=e;gy()&&Up(!1);let s=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:s,navigator:o,static:l,future:Va({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=Vp(r));let{pathname:p="/",search:h="",hash:v="",state:x=null,key:w="default"}=r,y=T.useMemo(()=>{let j=hy(p,s);return j==null?null:{location:{pathname:j,search:h,hash:v,state:x,key:w},navigationType:i}},[s,p,h,v,x,w,i]);return y==null?null:T.createElement(yy.Provider,{value:u},T.createElement(Qp.Provider,{children:n,value:y}))}new Promise(()=>{});/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const wy="6";try{window.__reactRouterVersion=wy}catch{}const Sy="startTransition",Xc=Xl[Sy];function ky(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=dy({window:i,v5Compat:!0}));let l=o.current,[a,s]=T.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=T.useCallback(h=>{u&&Xc?Xc(()=>s(h)):s(h)},[s,u]);return T.useLayoutEffect(()=>l.listen(p),[l,p]),T.createElement(xy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Yc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yc||(Yc={}));var Kc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kc||(Kc={}));const Ey="/assets/blcapmainlogo-B6eKiOkn.jpeg",Cy=()=>c.jsxs("div",{className:"hero relative w-full h-96 flex items-center justify-center bg-contain bg-center",style:{backgroundImage:`url(${Ey})`},children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"}),c.jsx("h1",{className:"text-main text-3xl md:text-5xl font-extrabold text-center relative z-5",children:"The BlueCAP stays on!"})]}),_y="/assets/blcapmainlogo2-C89r2YG2.jpeg",Xp="/assets/bluecaplogo2-BLNT7pUu.jpeg",jy="/assets/blcaplogo1-C-OOde3K.jpeg";var Ny=!1;function Py(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Oy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ty=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!Ny:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Oy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Py(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),we="-ms-",wo="-moz-",D="-webkit-",Yp="comm",Js="rule",eu="decl",Ly="@import",Kp="@keyframes",zy="@layer",My=Math.abs,Vo=String.fromCharCode,Ry=Object.assign;function Iy(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function Zp(e){return e.trim()}function $y(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Wa(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function Fr(e,t,n){return e.slice(t,n)}function ct(e){return e.length}function tu(e){return e.length}function ji(e,t){return t.push(e),e}function Ay(e,t){return e.map(t).join("")}var Wo=1,Qn=1,Gp=0,Re=0,ie=0,Gn="";function Qo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Wo,column:Qn,length:l,return:""}}function sr(e,t){return Ry(Qo("",null,null,"",null,null,0),e,{length:-e.length},t)}function Dy(){return ie}function Fy(){return ie=Re>0?pe(Gn,--Re):0,Qn--,ie===10&&(Qn=1,Wo--),ie}function Fe(){return ie=Re<Gp?pe(Gn,Re++):0,Qn++,ie===10&&(Qn=1,Wo++),ie}function ht(){return pe(Gn,Re)}function Ui(){return Re}function ti(e,t){return Fr(Gn,e,t)}function Br(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qp(e){return Wo=Qn=1,Gp=ct(Gn=e),Re=0,[]}function Jp(e){return Gn="",e}function bi(e){return Zp(ti(Re-1,Qa(e===91?e+2:e===40?e+1:e)))}function By(e){for(;(ie=ht())&&ie<33;)Fe();return Br(e)>2||Br(ie)>3?"":" "}function Hy(e,t){for(;--t&&Fe()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return ti(e,Ui()+(t<6&&ht()==32&&Fe()==32))}function Qa(e){for(;Fe();)switch(ie){case e:return Re;case 34:case 39:e!==34&&e!==39&&Qa(ie);break;case 40:e===41&&Qa(e);break;case 92:Fe();break}return Re}function Uy(e,t){for(;Fe()&&e+ie!==57;)if(e+ie===84&&ht()===47)break;return"/*"+ti(t,Re-1)+"*"+Vo(e===47?e:Fe())}function by(e){for(;!Br(ht());)Fe();return ti(e,Re)}function Vy(e){return Jp(Vi("",null,null,null,[""],e=qp(e),0,[0],e))}function Vi(e,t,n,r,i,o,l,a,s){for(var u=0,p=0,h=l,v=0,x=0,w=0,y=1,j=1,d=1,f=0,m="",g=i,k=o,E=r,S=m;j;)switch(w=f,f=Fe()){case 40:if(w!=108&&pe(S,h-1)==58){Wa(S+=F(bi(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:S+=bi(f);break;case 9:case 10:case 13:case 32:S+=By(w);break;case 92:S+=Hy(Ui()-1,7);continue;case 47:switch(ht()){case 42:case 47:ji(Wy(Uy(Fe(),Ui()),t,n),s);break;default:S+="/"}break;case 123*y:a[u++]=ct(S)*d;case 125*y:case 59:case 0:switch(f){case 0:case 125:j=0;case 59+p:d==-1&&(S=F(S,/\f/g,"")),x>0&&ct(S)-h&&ji(x>32?Gc(S+";",r,n,h-1):Gc(F(S," ","")+";",r,n,h-2),s);break;case 59:S+=";";default:if(ji(E=Zc(S,t,n,u,p,i,a,m,g=[],k=[],h),o),f===123)if(p===0)Vi(S,t,E,E,g,o,h,a,k);else switch(v===99&&pe(S,3)===110?100:v){case 100:case 108:case 109:case 115:Vi(e,E,E,r&&ji(Zc(e,E,E,0,0,i,a,m,i,g=[],h),k),i,k,h,a,r?g:k);break;default:Vi(S,E,E,E,[""],k,0,a,k)}}u=p=x=0,y=d=1,m=S="",h=l;break;case 58:h=1+ct(S),x=w;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Fy()==125)continue}switch(S+=Vo(f),f*y){case 38:d=p>0?1:(S+="\f",-1);break;case 44:a[u++]=(ct(S)-1)*d,d=1;break;case 64:ht()===45&&(S+=bi(Fe())),v=ht(),p=h=ct(m=S+=by(Ui())),f++;break;case 45:w===45&&ct(S)==2&&(y=0)}}return o}function Zc(e,t,n,r,i,o,l,a,s,u,p){for(var h=i-1,v=i===0?o:[""],x=tu(v),w=0,y=0,j=0;w<r;++w)for(var d=0,f=Fr(e,h+1,h=My(y=l[w])),m=e;d<x;++d)(m=Zp(y>0?v[d]+" "+f:F(f,/&\f/g,v[d])))&&(s[j++]=m);return Qo(e,t,n,i===0?Js:a,s,u,p)}function Wy(e,t,n){return Qo(e,t,n,Yp,Vo(Dy()),Fr(e,2,-2),0)}function Gc(e,t,n,r){return Qo(e,t,n,eu,Fr(e,0,r),Fr(e,r+1,-1),r)}function Dn(e,t){for(var n="",r=tu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Qy(e,t,n,r){switch(e.type){case zy:if(e.children.length)break;case Ly:case eu:return e.return=e.return||e.value;case Yp:return"";case Kp:return e.return=e.value+"{"+Dn(e.children,r)+"}";case Js:e.value=e.props.join(",")}return ct(n=Dn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Xy(e){var t=tu(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Yy(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ky(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Zy=function(t,n,r){for(var i=0,o=0;i=o,o=ht(),i===38&&o===12&&(n[r]=1),!Br(o);)Fe();return ti(t,Re)},Gy=function(t,n){var r=-1,i=44;do switch(Br(i)){case 0:i===38&&ht()===12&&(n[r]=1),t[r]+=Zy(Re-1,n,r);break;case 2:t[r]+=bi(i);break;case 4:if(i===44){t[++r]=ht()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Vo(i)}while(i=Fe());return t},qy=function(t,n){return Jp(Gy(qp(t),n))},qc=new WeakMap,Jy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!qc.get(r))&&!i){qc.set(t,!0);for(var o=[],l=qy(n,o),a=r.props,s=0,u=0;s<l.length;s++)for(var p=0;p<a.length;p++,u++)t.props[u]=o[s]?l[s].replace(/&\f/g,a[p]):a[p]+" "+l[s]}}},eg=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function e0(e,t){switch(Iy(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+wo+e+we+e+e;case 6828:case 4268:return D+e+we+e+e;case 6165:return D+e+we+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+we+"flex-$1$2")+e;case 5443:return D+e+we+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+we+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+we+F(e,"shrink","negative")+e;case 5292:return D+e+we+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+we+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ct(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+wo+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wa(e,"stretch")?e0(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(pe(e,t+1)!==115)break;case 6444:switch(pe(e,ct(e)-3-(~Wa(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(pe(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+we+"$2box$3")+e}break;case 5936:switch(pe(e,t+11)){case 114:return D+e+we+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+we+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+we+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+we+e+e}return e}var tg=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case eu:t.return=e0(t.value,t.length);break;case Kp:return Dn([sr(t,{value:F(t.value,"@","@"+D)})],i);case Js:if(t.length)return Ay(t.props,function(o){switch($y(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dn([sr(t,{props:[F(o,/:(read-\w+)/,":"+wo+"$1")]})],i);case"::placeholder":return Dn([sr(t,{props:[F(o,/:(plac\w+)/,":"+D+"input-$1")]}),sr(t,{props:[F(o,/:(plac\w+)/,":"+wo+"$1")]}),sr(t,{props:[F(o,/:(plac\w+)/,we+"input-$1")]})],i)}return""})}},ng=[tg],rg=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var j=y.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||ng,o={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var j=y.getAttribute("data-emotion").split(" "),d=1;d<j.length;d++)o[j[d]]=!0;a.push(y)});var s,u=[Jy,eg];{var p,h=[Qy,Yy(function(y){p.insert(y)})],v=Xy(u.concat(i,h)),x=function(j){return Dn(Vy(j),v)};s=function(j,d,f,m){p=f,x(j?j+"{"+d.styles+"}":d.styles),m&&(w.inserted[d.name]=!0)}}var w={key:n,sheet:new Ty({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return w.sheet.hydrate(a),w},t0={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=typeof Symbol=="function"&&Symbol.for,nu=fe?Symbol.for("react.element"):60103,ru=fe?Symbol.for("react.portal"):60106,Xo=fe?Symbol.for("react.fragment"):60107,Yo=fe?Symbol.for("react.strict_mode"):60108,Ko=fe?Symbol.for("react.profiler"):60114,Zo=fe?Symbol.for("react.provider"):60109,Go=fe?Symbol.for("react.context"):60110,iu=fe?Symbol.for("react.async_mode"):60111,qo=fe?Symbol.for("react.concurrent_mode"):60111,Jo=fe?Symbol.for("react.forward_ref"):60112,el=fe?Symbol.for("react.suspense"):60113,ig=fe?Symbol.for("react.suspense_list"):60120,tl=fe?Symbol.for("react.memo"):60115,nl=fe?Symbol.for("react.lazy"):60116,og=fe?Symbol.for("react.block"):60121,lg=fe?Symbol.for("react.fundamental"):60117,ag=fe?Symbol.for("react.responder"):60118,sg=fe?Symbol.for("react.scope"):60119;function be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nu:switch(e=e.type,e){case iu:case qo:case Xo:case Ko:case Yo:case el:return e;default:switch(e=e&&e.$$typeof,e){case Go:case Jo:case nl:case tl:case Zo:return e;default:return t}}case ru:return t}}}function n0(e){return be(e)===qo}H.AsyncMode=iu;H.ConcurrentMode=qo;H.ContextConsumer=Go;H.ContextProvider=Zo;H.Element=nu;H.ForwardRef=Jo;H.Fragment=Xo;H.Lazy=nl;H.Memo=tl;H.Portal=ru;H.Profiler=Ko;H.StrictMode=Yo;H.Suspense=el;H.isAsyncMode=function(e){return n0(e)||be(e)===iu};H.isConcurrentMode=n0;H.isContextConsumer=function(e){return be(e)===Go};H.isContextProvider=function(e){return be(e)===Zo};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nu};H.isForwardRef=function(e){return be(e)===Jo};H.isFragment=function(e){return be(e)===Xo};H.isLazy=function(e){return be(e)===nl};H.isMemo=function(e){return be(e)===tl};H.isPortal=function(e){return be(e)===ru};H.isProfiler=function(e){return be(e)===Ko};H.isStrictMode=function(e){return be(e)===Yo};H.isSuspense=function(e){return be(e)===el};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xo||e===qo||e===Ko||e===Yo||e===el||e===ig||typeof e=="object"&&e!==null&&(e.$$typeof===nl||e.$$typeof===tl||e.$$typeof===Zo||e.$$typeof===Go||e.$$typeof===Jo||e.$$typeof===lg||e.$$typeof===ag||e.$$typeof===sg||e.$$typeof===og)};H.typeOf=be;t0.exports=H;var ug=t0.exports,r0=ug,cg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i0={};i0[r0.ForwardRef]=cg;i0[r0.Memo]=fg;var dg=!0;function o0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var ou=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||dg===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},l0=function(t,n,r){ou(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function pg(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var mg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hg=!1,vg=/[A-Z]|^ms/g,yg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,a0=function(t){return t.charCodeAt(1)===45},Jc=function(t){return t!=null&&typeof t!="boolean"},Wl=Ky(function(e){return a0(e)?e:e.replace(vg,"-$&").toLowerCase()}),ef=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(yg,function(r,i,o){return ft={name:i,styles:o,next:ft},i})}return mg[t]!==1&&!a0(t)&&typeof n=="number"&&n!==0?n+"px":n},gg="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Hr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return ft={name:i.name,styles:i.styles,next:ft},i.name;var o=n;if(o.styles!==void 0){var l=o.next;if(l!==void 0)for(;l!==void 0;)ft={name:l.name,styles:l.styles,next:ft},l=l.next;var a=o.styles+";";return a}return xg(e,t,n)}case"function":{if(e!==void 0){var s=ft,u=n(e);return ft=s,Hr(e,t,u)}break}}var p=n;if(t==null)return p;var h=t[p];return h!==void 0?h:p}function xg(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Hr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object"){var a=l;t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Jc(a)&&(r+=Wl(o)+":"+ef(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&hg)throw new Error(gg);if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Jc(l[s])&&(r+=Wl(o)+":"+ef(o,l[s])+";");else{var u=Hr(e,t,l);switch(o){case"animation":case"animationName":{r+=Wl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}}return r}var tf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ft;function lu(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";ft=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=Hr(n,t,o);else{var l=o;i+=l[0]}for(var a=1;a<e.length;a++)if(i+=Hr(n,t,e[a]),r){var s=o;i+=s[a]}tf.lastIndex=0;for(var u="",p;(p=tf.exec(i))!==null;)u+="-"+p[1];var h=pg(i)+u;return{name:h,styles:i,next:ft}}var wg=function(t){return t()},Sg=Xl.useInsertionEffect?Xl.useInsertionEffect:!1,s0=Sg||wg,Xa=!1,u0=T.createContext(typeof HTMLElement<"u"?rg({key:"css"}):null);u0.Provider;var c0=function(t){return T.forwardRef(function(n,r){var i=T.useContext(u0);return t(n,i,r)})},f0=T.createContext({}),au={}.hasOwnProperty,Ya="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",kg=function(t,n){var r={};for(var i in n)au.call(n,i)&&(r[i]=n[i]);return r[Ya]=t,r},Eg=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ou(n,r,i),s0(function(){return l0(n,r,i)}),null},Cg=c0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ya],o=[r],l="";typeof e.className=="string"?l=o0(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var a=lu(o,void 0,T.useContext(f0));l+=t.key+"-"+a.name;var s={};for(var u in e)au.call(e,u)&&u!=="css"&&u!==Ya&&!Xa&&(s[u]=e[u]);return s.className=l,n&&(s.ref=n),T.createElement(T.Fragment,null,T.createElement(Eg,{cache:t,serialized:a,isStringTag:typeof i=="string"}),T.createElement(i,s))}),_g=Cg,jg=c.Fragment;function le(e,t,n){return au.call(t,"css")?c.jsx(_g,kg(e,t),n):c.jsx(e,t,n)}function d0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return lu(t)}var _=function(){var t=d0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ng=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var l=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))l=e(o);else{l="";for(var a in o)o[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=o}l&&(i&&(i+=" "),i+=l)}}return i};function Pg(e,t,n){var r=[],i=o0(e,r,n);return r.length<2?n:i+t(r)}var Og=function(t){var n=t.cache,r=t.serializedArr;return s0(function(){for(var i=0;i<r.length;i++)l0(n,r[i],!1)}),null},Ql=c0(function(e,t){var n=!1,r=[],i=function(){if(n&&Xa)throw new Error("css can only be used during render");for(var u=arguments.length,p=new Array(u),h=0;h<u;h++)p[h]=arguments[h];var v=lu(p,t.registered);return r.push(v),ou(t,v,!1),t.key+"-"+v.name},o=function(){if(n&&Xa)throw new Error("cx can only be used during render");for(var u=arguments.length,p=new Array(u),h=0;h<u;h++)p[h]=arguments[h];return Pg(t.registered,i,Ng(p))},l={css:i,cx:o,theme:T.useContext(f0)},a=e.children(l);return n=!0,T.createElement(T.Fragment,null,T.createElement(Og,{cache:t,serializedArr:r}),a)}),Tg=Object.defineProperty,Lg=(e,t,n)=>t in e?Tg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ni=(e,t,n)=>Lg(e,typeof t!="symbol"?t+"":t,n),Ka=new Map,Pi=new WeakMap,nf=0,zg=void 0;function Mg(e){return e?(Pi.has(e)||(nf+=1,Pi.set(e,nf.toString())),Pi.get(e)):"0"}function Rg(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Mg(e.root):e[t]}`).toString()}function Ig(e){const t=Rg(e);let n=Ka.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&i.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(p=>{p(u,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Ka.set(t,n)}return n}function p0(e,t,n={},r=zg){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:i,observer:o,elements:l}=Ig(n),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),Ka.delete(i))}}function $g(e){return typeof e.children!="function"}var rf=class extends T.Component{constructor(e){super(e),Ni(this,"node",null),Ni(this,"_unobserveCb",null),Ni(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Ni(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),$g(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=p0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:x,entry:w}=this.state;return e({inView:x,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:p,fallbackInView:h,...v}=this.props;return T.createElement(t||"div",{ref:this.handleNode,...v},e)}};function m0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var p;const[h,v]=T.useState(null),x=T.useRef(),[w,y]=T.useState({inView:!!a,entry:void 0});x.current=u,T.useEffect(()=>{if(l||!h)return;let m;return m=p0(h,(g,k)=>{y({inView:g,entry:k}),x.current&&x.current(g,k),k.isIntersecting&&o&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,h,i,r,o,l,n,s,t]);const j=(p=w.entry)==null?void 0:p.target,d=T.useRef();!h&&j&&!o&&!l&&d.current!==j&&(d.current=j,y({inView:!!a,entry:void 0}));const f=[v,w.inView,w.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var h0={exports:{}},U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su=Symbol.for("react.element"),uu=Symbol.for("react.portal"),rl=Symbol.for("react.fragment"),il=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),ll=Symbol.for("react.provider"),al=Symbol.for("react.context"),Ag=Symbol.for("react.server_context"),sl=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),dl=Symbol.for("react.lazy"),Dg=Symbol.for("react.offscreen"),v0;v0=Symbol.for("react.module.reference");function Ge(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case su:switch(e=e.type,e){case rl:case ol:case il:case ul:case cl:return e;default:switch(e=e&&e.$$typeof,e){case Ag:case al:case sl:case dl:case fl:case ll:return e;default:return t}}case uu:return t}}}U.ContextConsumer=al;U.ContextProvider=ll;U.Element=su;U.ForwardRef=sl;U.Fragment=rl;U.Lazy=dl;U.Memo=fl;U.Portal=uu;U.Profiler=ol;U.StrictMode=il;U.Suspense=ul;U.SuspenseList=cl;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return Ge(e)===al};U.isContextProvider=function(e){return Ge(e)===ll};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===su};U.isForwardRef=function(e){return Ge(e)===sl};U.isFragment=function(e){return Ge(e)===rl};U.isLazy=function(e){return Ge(e)===dl};U.isMemo=function(e){return Ge(e)===fl};U.isPortal=function(e){return Ge(e)===uu};U.isProfiler=function(e){return Ge(e)===ol};U.isStrictMode=function(e){return Ge(e)===il};U.isSuspense=function(e){return Ge(e)===ul};U.isSuspenseList=function(e){return Ge(e)===cl};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===rl||e===ol||e===il||e===ul||e===cl||e===Dg||typeof e=="object"&&e!==null&&(e.$$typeof===dl||e.$$typeof===fl||e.$$typeof===ll||e.$$typeof===al||e.$$typeof===sl||e.$$typeof===v0||e.getModuleId!==void 0)};U.typeOf=Ge;h0.exports=U;var Fg=h0.exports;_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Bg=_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Hg=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ug=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bg=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vg=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cu=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wg=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qg=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xg=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yg=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kg=_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zg=_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gg=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function qg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=cu,iterationCount:i=1}){return d0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Jg(e){return e==null}function e2(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function y0(e,t){return n=>n?e():t()}function Ur(e){return y0(e,()=>null)}function Za(e){return Ur(()=>({opacity:0}))(e)}const fu=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:l=cu,triggerOnce:a=!1,className:s,style:u,childClassName:p,childStyle:h,children:v,onVisibilityChange:x}=e,w=T.useMemo(()=>qg({keyframes:l,duration:i}),[i,l]);return Jg(v)?null:e2(v)?le(n2,{...e,animationStyles:w,children:String(v)}):Fg.isFragment(v)?le(g0,{...e,animationStyles:w}):le(jg,{children:T.Children.map(v,(y,j)=>{if(!T.isValidElement(y))return null;const d=r+(t?j*i*n:0);switch(y.type){case"ol":case"ul":return le(Ql,{children:({cx:f})=>le(y.type,{...y.props,className:f(s,y.props.className),style:Object.assign({},u,y.props.style),children:le(fu,{...e,children:y.props.children})})});case"li":return le(rf,{threshold:o,triggerOnce:a,onChange:x,children:({inView:f,ref:m})=>le(Ql,{children:({cx:g})=>le(y.type,{...y.props,ref:m,className:g(p,y.props.className),css:Ur(()=>w)(f),style:Object.assign({},h,y.props.style,Za(!f),{animationDelay:d+"ms"})})})});default:return le(rf,{threshold:o,triggerOnce:a,onChange:x,children:({inView:f,ref:m})=>le("div",{ref:m,className:s,css:Ur(()=>w)(f),style:Object.assign({},u,Za(!f),{animationDelay:d+"ms"}),children:le(Ql,{children:({cx:g})=>le(y.type,{...y.props,className:g(p,y.props.className),style:Object.assign({},h,y.props.style)})})})})}})})},t2={display:"inline-block",whiteSpace:"pre"},n2=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:p,onVisibilityChange:h}=e,{ref:v,inView:x}=m0({triggerOnce:a,threshold:l,onChange:h});return y0(()=>le("div",{ref:v,className:s,style:Object.assign({},u,t2),children:p.split("").map((w,y)=>le("span",{css:Ur(()=>t)(x),style:{animationDelay:i+y*o*r+"ms"},children:w},y))}),()=>le(g0,{...e,children:p}))(n)},g0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=m0({triggerOnce:r,threshold:n,onChange:a});return le("div",{ref:s,className:i,css:Ur(()=>t)(u),style:Object.assign({},o,Za(!u)),children:l})};_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const r2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,i2=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,o2=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,l2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,a2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,s2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,u2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,c2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,f2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,d2=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,p2=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,m2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,h2=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function v2(e,t,n){switch(n){case"bottom-left":return t?i2:Hg;case"bottom-right":return t?o2:Ug;case"down":return e?t?a2:Vg:t?l2:bg;case"left":return e?t?u2:Wg:t?s2:cu;case"right":return e?t?f2:Xg:t?c2:Qg;case"top-left":return t?d2:Yg;case"top-right":return t?p2:Kg;case"up":return e?t?h2:Gg:t?m2:Zg;default:return t?r2:Bg}}const vt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=T.useMemo(()=>v2(t,r,n),[t,n,r]);return le(fu,{keyframes:o,...i})};_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const y2=_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,g2=_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,x2=_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,w2=_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,S2=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,k2=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,E2=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,C2=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function _2(e,t){switch(t){case"down":return e?S2:y2;case"right":return e?E2:x2;case"up":return e?C2:w2;case"left":default:return e?k2:g2}}const Pe=e=>{const{direction:t,reverse:n=!1,...r}=e,i=T.useMemo(()=>_2(n,t),[t,n]);return le(fu,{keyframes:i,...r})};_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const j2=()=>c.jsxs("div",{className:"about text-center text-text mx-5 mt-16",children:[c.jsx(vt,{direction:"up",triggerOnce:!0,delay:200,children:c.jsxs("p",{className:"text-3xl md:text-5xl font-extrabold",children:["WELCOME TO ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})]})}),c.jsx(vt,{direction:"up",triggerOnce:!0,delay:200,children:c.jsxs("p",{className:"font-semibold text-xl mt-3 md:mt-8 md:mx-8",children:["The name ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," was chosen because it`s simple, memorable, and symbolizes the core values we want to represent! Trust, loyalty, and creativity. The “",c.jsx("span",{className:"text-main",children:"blue cap"}),"” is a playful symbol of reliability and community spirit. Just like how a cap is something you wear with pride, ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," is about building a project that our community can be proud to be a part of.🐶🧢"]})}),c.jsx(vt,{direction:"up",triggerOnce:!0,delay:200,children:c.jsxs("p",{className:"font-semibold text-xl mt-4 md:mt-8 md:mx-8",children:["We chose a dog as our mascot because dogs are universally seen as loyal, friendly, and reliable! Traits we want to reflect in our project and community. The ",c.jsx("span",{className:"text-main",children:"blue cap"})," adds a unique, recognizable touch, representing creativity and the idea of building something cool and approachable. The combination of the dog and the blue cap creates a character that`s both fun and easy to rally around, making it perfect for a project focused on community and inclusivity."]})}),c.jsx(Pe,{direction:"up",triggerOnce:!0,delay:200,children:c.jsxs("div",{className:"flex justify-around mt-3",children:[c.jsx("img",{src:Xp,className:"w-36 md:w-52 lg:w-64 rounded-2xl"}),c.jsx("img",{src:jy,className:"hidden md:block md:w-52 lg:w-64 rounded-2xl"}),c.jsx("img",{src:_y,className:"w-36 md:w-52 lg:w-64 rounded-2xl"})]})})]}),N2="/assets/blcapraise-C_FDTKhk.jpeg",P2="/assets/blcaplogo2-Z_oExVLw.jpeg",O2="/assets/blcaplogo3-iu0EMhue.jpeg",T2="/assets/blcapAngry-DqINlNUO.png",L2=()=>c.jsxs("div",{className:"why text-center text-text mx-5 mt-16",children:[c.jsx(Pe,{direction:"right",triggerOnce:!0,delay:300,children:c.jsxs("p",{className:"text-3xl md:text-5xl font-extrabold",children:["WHY ",c.jsx("span",{className:"text-main",children:"$BlueCAP"}),"?"]})}),c.jsx(vt,{direction:"right",triggerOnce:!0,delay:200,children:c.jsx("p",{className:"font-semibold text-xl mt-3 md:mt-8 md:mx-8",children:"Recently, the memecoin scene has been filled with rug pulls and projects that haven`t lived up to their promise."})}),c.jsx(Pe,{direction:"left",triggerOnce:!0,delay:300,children:c.jsx("img",{src:T2,className:"w-52 lg:w-64 mx-auto"})}),c.jsx(vt,{direction:"right",triggerOnce:!0,delay:200,children:c.jsxs("p",{className:"font-semibold text-xl mt-2 md:mx-8",children:[c.jsxs("span",{className:"font-bold",children:[c.jsx("span",{className:"text-main",children:"$BlueCAP"})," is here to change that trend! ",c.jsx("br",{})]}),"We want to build a future where the community actually matters and drives the project forward."]})}),c.jsx(Pe,{direction:"up",triggerOnce:!0,delay:300,children:c.jsxs("div",{className:"flex justify-around mt-3",children:[c.jsx("img",{src:N2,className:"w-36 md:w-52 lg:w-64 rounded-2xl"}),c.jsx("img",{src:P2,className:" w-36 md:w-52 lg:w-64 rounded-2xl"}),c.jsx("img",{src:O2,className:"hidden md:block md:w-52 lg:w-64 rounded-2xl"})]})})]});function z2(e){return gt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"},child:[]}]})(e)}function M2(e){return gt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"},child:[]}]})(e)}function R2(e){return gt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h88.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-23.7 12.9-44.4 32-55.4V272c0-30.5 12.2-58.2 32-78.4V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zM464 240c17.7 0 32 14.3 32 32v48H432V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"},child:[]}]})(e)}function I2(e){return gt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"},child:[]}]})(e)}function $2(e){return gt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"},child:[]}]})(e)}function A2(e){return gt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"},child:[]}]})(e)}function D2(e){return gt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"},child:[]}]})(e)}const x0="/assets/blcap6-CoIKOgkv.jpeg",F2=()=>c.jsxs("div",{className:"info w-full text-center h-auto p-10 text-text mt-16 bg-[#47a9ee] justify-center items-center",children:[c.jsx(vt,{direction:"up",triggerOnce:!0,delay:200,children:c.jsxs("p",{className:"text-3xl md:text-5xl font-extrabold flex justify-center underline",children:["TOKENOMICS ",c.jsx(M2,{className:"mx-1"})]})}),c.jsxs(Pe,{direction:"right",triggerOnce:!0,delay:300,children:[c.jsxs("div",{children:[c.jsxs("p",{className:"text-text justify-center flex pt-10 text-3xl font-semibold",children:["1,000,000,000 ",c.jsx(I2,{className:"mx-1 mt-1"})]}),c.jsx("span",{className:"text-xl font-semibold",children:"Initial Supply"})]}),c.jsx("div",{children:c.jsxs("p",{className:"text-text justify-center flex pt-3 text-2xl font-semibold",children:["Zero Tax ",c.jsx($2,{className:"mx-1 mt-1"})]})})]}),c.jsx(vt,{direction:"down",triggerOnce:!0,delay:200,children:c.jsxs("div",{className:"flex justify-between pt-10",children:[c.jsx("div",{children:c.jsxs("p",{className:"text-text font-bold justify-center flex text-sm md:text-2xl md:font-semibold",children:["85% Liquidity ",c.jsx("br",{className:"lg:hidden"})," Listing ",c.jsx(uy,{className:"mx-1 mt-1"})]})}),c.jsx("div",{children:c.jsxs("p",{className:"text-text font-bold justify-center flex text-sm md:text-2xl md:font-semibold",children:["10% Marketing ",c.jsx("br",{className:"lg:hidden"})," & Development  ",c.jsx(z2,{className:"mx-1 mt-1"})]})})]})}),c.jsx(Pe,{direction:"up",triggerOnce:!0,delay:300,children:c.jsx("div",{className:"flex justify-center",children:c.jsx("img",{src:x0,className:"rounded-full w-52 md:w-72 lg:w-96"})})}),c.jsx(vt,{direction:"up",triggerOnce:!0,delay:200,children:c.jsxs("div",{className:"flex justify-between",children:[c.jsx("div",{children:c.jsxs("p",{className:"text-text font-bold justify-center flex text-sm md:text-2xl md:font-semibold",children:["3% CEX Liquidity ",c.jsx("br",{className:"lg:hidden"}),"  ",c.jsx(R2,{className:"mx-1 mt-1"})]})}),c.jsx("div",{children:c.jsxs("p",{className:"text-text font-bold justify-center flex text-sm md:text-2xl md:font-semibold",children:["2% Dev/Team ",c.jsx("br",{className:"lg:hidden"}),"  ",c.jsx(D2,{className:"mx-1 mt-1"})]})})]})}),c.jsx(Pe,{direction:"right",triggerOnce:!0,delay:300,children:c.jsxs("div",{children:[c.jsxs("p",{className:"text-text justify-center flex pt-5 text-3xl font-semibold",children:["850,000,000 ",c.jsx(A2,{className:"mx-1 mt-1"})]}),c.jsx("span",{className:"text-xl font-semibold",children:"Circulating Supply"})]})})]}),B2="/assets/Trendlines-BaQP3gcz.png",H2=()=>c.jsxs("div",{className:"chart relative h-96 text-center text-text",children:[c.jsxs("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${B2})`,opacity:.3},children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#accefa] via-transparent to-black opacity-40"})," "]}),c.jsx("p",{className:"text-3xl md:text-5xl font-extrabold pt-7",children:"LIVE CHART📈"}),c.jsx("div",{className:"relative z-5 flex flex-col items-center justify-center h-full text-center text-text",children:c.jsxs("div",{className:"flex items-center text-3xl font-bold mt-4",children:[c.jsx("p",{children:"Coming soon... "}),c.jsx("span",{className:"animate-spin-pulse",children:"⌛"})]})})]}),U2="/assets/blcap7-CD-4p4uZ.jpeg",b2=()=>c.jsxs("div",{className:"roadmap p-6 text-text",children:[c.jsx(vt,{direction:"up",triggerOnce:!0,delay:200,children:c.jsx("h1",{className:"text-4xl text-center font-bold mb-4",children:"Roadmap"})}),c.jsxs("div",{className:"lg:flex lg:justify-around",children:[c.jsxs("div",{className:"relative pl-10",children:[c.jsx("div",{className:"absolute top-0 left-4 w-[2px] bg-gray-600 h-full"}),c.jsx(Pe,{direction:"left",triggerOnce:!0,delay:300,children:c.jsxs("div",{className:"relative mb-12 font-semibold text-xl",children:[c.jsx("div",{className:"absolute top-0 left-[-4px] w-[2px] h-6 bg-gray-600"}),c.jsx("div",{className:"absolute top-4 left-[-6px] w-6 h-[2px] bg-gray-600"}),c.jsxs("div",{className:"pl-8",children:[c.jsx("div",{className:"text-2xl font-bold mb-2",children:"PHASE 1: Foundation"}),c.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[c.jsx("li",{children:"Recruit / hire team"}),c.jsx("li",{children:"Full Website launch"}),c.jsx("li",{children:"Expand TG group to 500+ members"}),c.jsx("li",{children:"Community events (giveaways, meme-contests)"})]})]})]})}),c.jsx(Pe,{direction:"left",triggerOnce:!0,delay:300,children:c.jsxs("div",{className:"relative mb-12 font-semibold text-xl",children:[c.jsx("div",{className:"absolute top-0 left-[-4px] w-[2px] h-6 bg-gray-600"}),c.jsx("div",{className:"absolute top-4 left-[-6px] w-6 h-[2px] bg-gray-600"}),c.jsxs("div",{className:"pl-8",children:[c.jsx("div",{className:"text-2xl font-bold mb-2",children:"PHASE 2: Expansion"}),c.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[c.jsxs("li",{children:["Launch ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," on DEX"]}),c.jsx("li",{children:"CoinGecko listing"}),c.jsx("li",{children:"Marketing campaigns with influencers"}),c.jsx("li",{children:"Reach $1,000,000 market cap"}),c.jsx("li",{children:"Launch staking/rewards system"})]})]})]})}),c.jsx(Pe,{direction:"left",triggerOnce:!0,delay:300,children:c.jsxs("div",{className:"relative mb-12 font-semibold text-xl",children:[c.jsx("div",{className:"absolute top-0 left-[-4px] w-[2px] h-6 bg-gray-600"}),c.jsx("div",{className:"absolute top-4 left-[-6px] w-6 h-[2px] bg-gray-600"}),c.jsxs("div",{className:"pl-8",children:[c.jsx("div",{className:"text-2xl font-bold mb-2",children:"PHASE 3: Growth"}),c.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[c.jsx("li",{children:"Launch on additional DEXs/CEXs"}),c.jsx("li",{children:"Secure strategic partnerships"}),c.jsx("li",{children:"Integrate with Solana ecosystem projects"}),c.jsx("li",{children:"Reach $5,000,000 market cap"})]})]})]})}),c.jsx(Pe,{direction:"left",triggerOnce:!0,delay:300,children:c.jsxs("div",{className:"relative font-semibold text-xl",children:[c.jsx("div",{className:"absolute top-0 left-[-4px] w-[2px] h-6 bg-gray-600"}),c.jsx("div",{className:"absolute top-4 left-[-6px] w-6 h-[2px] bg-gray-600"}),c.jsxs("div",{className:"pl-8",children:[c.jsx("div",{className:"text-2xl font-bold mb-2",children:"PHASE 4: Mainstream Adoption"}),c.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[c.jsx("li",{children:"Major exchange listings (CEXs)"}),c.jsx("li",{children:"Begin development of utility features"}),c.jsx("li",{children:"Begin charity initiatives or sponsorships"}),c.jsx("li",{children:"Roadmap for 2026 revealed"})]})]})]})})]}),c.jsxs("div",{className:"hidden lg:block",children:[c.jsx(Pe,{direction:"right",triggerOnce:!0,delay:300,children:c.jsx("img",{src:U2,className:"w-64 h-64 rounded-xl my-2"})}),c.jsx(Pe,{direction:"right",triggerOnce:!0,delay:300,children:c.jsx("img",{src:Xp,className:"w-64 h-64 rounded-xl my-2"})}),c.jsx(Pe,{direction:"right",triggerOnce:!0,delay:300,children:c.jsx("img",{src:x0,className:"w-64 h-64 rounded-xl my-2"})})]})]})]}),V2=()=>c.jsx("div",{className:"p-6 md:p-12 lg:p-24 text-text text-center",children:c.jsxs(vt,{direction:"up",triggerOnce:!0,delay:200,children:[c.jsxs("h1",{className:"text-xl g:text-2xl font-bold mb-4",children:["LEGAL DISCLAIMER ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})]}),c.jsxs("p",{className:"mb-4",children:[c.jsx("span",{className:"text-main",children:"$BlueCAP"})," operates as a decentralized cryptocurrency. By engaging in the trading of ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," tokens, you acknowledge and agree that:"]}),c.jsxs("div",{className:"text-sm md:text-base lg:text-lg flex flex-col lg:grid lg:grid-cols-2 lg:gap-8",children:[c.jsxs("div",{className:"mb-4 lg:mb-0",children:[c.jsx("h2",{className:"font-semibold mb-1",children:"SPECULATIVE NATURE"}),c.jsxs("p",{children:["Trading ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," tokens involves considerable risk and is purely speculative. Cryptocurrency prices, including ",c.jsx("span",{className:"text-main",children:"$BlueCAP"}),", can be highly volatile and may lead to substantial losses. BlueCap does not provide any guarantees or promises concerning potential gains or losses from trading ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," tokens."]})]}),c.jsxs("div",{className:"mb-4 lg:mb-0",children:[c.jsx("h2",{className:"font-semibold mb-1",children:"INDEPENDENT DECISION"}),c.jsxs("p",{children:["You understand that you`re trading ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," tokens at your own discretion and risk. ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," won`t be held responsible for any losses, damages, or consequences resulting from your trading activities. It`s essential to be aware of the risks involved in cryptocurrency trading."]})]}),c.jsxs("div",{className:"mb-4 lg:mb-0",children:[c.jsx("h2",{className:"font-semibold mb-1",children:"REGULATORY COMPLIANCE"}),c.jsx("p",{children:"It`s crucial to make sure you comply with any relevant laws, regulations, or restrictions concerning cryptocurrency trading in your area. Stay informed about the legal aspects to ensure a smooth trading experience."})]}),c.jsxs("div",{className:"mb-4 lg:mb-0",children:[c.jsx("h2",{className:"font-semibold mb-1",children:"NO FINANCIAL ADVICE"}),c.jsxs("p",{children:["The details shared by ",c.jsx("span",{className:"text-main",children:"$BlueCAP"}),", such as whitepapers and websites, and communication channels are for informational purposes only. Remember, it`s not financial, investment, or legal advice. Stay informed and make decisions wisely!"]})]}),c.jsxs("div",{className:"mb-4 lg:mb-0 lg:col-span-2",children:[c.jsx("h2",{className:"font-semibold mb-1",children:"CHANGES AND UPDATES"}),c.jsxs("p",{children:[c.jsx("span",{className:"text-main",children:"$BlueCAP"})," reserves the right to modify, amend, or update this disclaimer at any time without prior notice. It is your responsibility to review this disclaimer periodically for any changes. By trading ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," tokens, you confirm that you have read, understood, and agreed to the terms outlined in this disclaimer. If you do not agree with any part of this disclaimer, you must refrain from trading ",c.jsx("span",{className:"text-main",children:"$BlueCAP"})," tokens."]})]})]})]})}),W2=()=>c.jsx(ky,{children:c.jsxs("div",{children:[c.jsx(fy,{}),c.jsx(Cy,{}),c.jsx(j2,{}),c.jsx(L2,{}),c.jsx(F2,{}),c.jsx(H2,{}),c.jsx(b2,{}),c.jsx(V2,{})]})});Yl.createRoot(document.getElementById("root")).render(c.jsx(Ct.StrictMode,{children:c.jsx(W2,{})}));
