(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function O_(o){if(o.__esModule)return o;var e=o.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(o).forEach(function(r){var a=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return o[r]}})}),n}var Ec={exports:{}},Ps={},wc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function F_(){if(Fp)return _t;Fp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function M(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,C={};function E(T,B,ce){this.props=T,this.context=B,this.refs=C,this.updater=ce||b}E.prototype.isReactComponent={},E.prototype.setState=function(T,B){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,B,"setState")},E.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function y(){}y.prototype=E.prototype;function Y(T,B,ce){this.props=T,this.context=B,this.refs=C,this.updater=ce||b}var G=Y.prototype=new y;G.constructor=Y,N(G,E.prototype),G.isPureReactComponent=!0;var k=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function V(T,B,ce){var j,Q={},re=null,oe=null;if(B!=null)for(j in B.ref!==void 0&&(oe=B.ref),B.key!==void 0&&(re=""+B.key),B)L.call(B,j)&&!D.hasOwnProperty(j)&&(Q[j]=B[j]);var ve=arguments.length-2;if(ve===1)Q.children=ce;else if(1<ve){for(var Se=Array(ve),Ce=0;Ce<ve;Ce++)Se[Ce]=arguments[Ce+2];Q.children=Se}if(T&&T.defaultProps)for(j in ve=T.defaultProps,ve)Q[j]===void 0&&(Q[j]=ve[j]);return{$$typeof:o,type:T,key:re,ref:oe,props:Q,_owner:P.current}}function w(T,B){return{$$typeof:o,type:T.type,key:B,ref:T.ref,props:T.props,_owner:T._owner}}function m(T){return typeof T=="object"&&T!==null&&T.$$typeof===o}function U(T){var B={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ce){return B[ce]})}var $=/\/+/g;function F(T,B){return typeof T=="object"&&T!==null&&T.key!=null?U(""+T.key):B.toString(36)}function H(T,B,ce,j,Q){var re=typeof T;(re==="undefined"||re==="boolean")&&(T=null);var oe=!1;if(T===null)oe=!0;else switch(re){case"string":case"number":oe=!0;break;case"object":switch(T.$$typeof){case o:case e:oe=!0}}if(oe)return oe=T,Q=Q(oe),T=j===""?"."+F(oe,0):j,k(Q)?(ce="",T!=null&&(ce=T.replace($,"$&/")+"/"),H(Q,B,ce,"",function(Ce){return Ce})):Q!=null&&(m(Q)&&(Q=w(Q,ce+(!Q.key||oe&&oe.key===Q.key?"":(""+Q.key).replace($,"$&/")+"/")+T)),B.push(Q)),1;if(oe=0,j=j===""?".":j+":",k(T))for(var ve=0;ve<T.length;ve++){re=T[ve];var Se=j+F(re,ve);oe+=H(re,B,ce,Se,Q)}else if(Se=M(T),typeof Se=="function")for(T=Se.call(T),ve=0;!(re=T.next()).done;)re=re.value,Se=j+F(re,ve++),oe+=H(re,B,ce,Se,Q);else if(re==="object")throw B=String(T),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return oe}function te(T,B,ce){if(T==null)return T;var j=[],Q=0;return H(T,j,"","",function(re){return B.call(ce,re,Q++)}),j}function Z(T){if(T._status===-1){var B=T._result;B=B(),B.then(function(ce){(T._status===0||T._status===-1)&&(T._status=1,T._result=ce)},function(ce){(T._status===0||T._status===-1)&&(T._status=2,T._result=ce)}),T._status===-1&&(T._status=0,T._result=B)}if(T._status===1)return T._result.default;throw T._result}var _={current:null},q={transition:null},O={ReactCurrentDispatcher:_,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function v(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:te,forEach:function(T,B,ce){te(T,function(){B.apply(this,arguments)},ce)},count:function(T){var B=0;return te(T,function(){B++}),B},toArray:function(T){return te(T,function(B){return B})||[]},only:function(T){if(!m(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},_t.Component=E,_t.Fragment=n,_t.Profiler=a,_t.PureComponent=Y,_t.StrictMode=r,_t.Suspense=p,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,_t.act=v,_t.cloneElement=function(T,B,ce){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var j=N({},T.props),Q=T.key,re=T.ref,oe=T._owner;if(B!=null){if(B.ref!==void 0&&(re=B.ref,oe=P.current),B.key!==void 0&&(Q=""+B.key),T.type&&T.type.defaultProps)var ve=T.type.defaultProps;for(Se in B)L.call(B,Se)&&!D.hasOwnProperty(Se)&&(j[Se]=B[Se]===void 0&&ve!==void 0?ve[Se]:B[Se])}var Se=arguments.length-2;if(Se===1)j.children=ce;else if(1<Se){ve=Array(Se);for(var Ce=0;Ce<Se;Ce++)ve[Ce]=arguments[Ce+2];j.children=ve}return{$$typeof:o,type:T.type,key:Q,ref:re,props:j,_owner:oe}},_t.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:l,_context:T},T.Consumer=T},_t.createElement=V,_t.createFactory=function(T){var B=V.bind(null,T);return B.type=T,B},_t.createRef=function(){return{current:null}},_t.forwardRef=function(T){return{$$typeof:f,render:T}},_t.isValidElement=m,_t.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:Z}},_t.memo=function(T,B){return{$$typeof:g,type:T,compare:B===void 0?null:B}},_t.startTransition=function(T){var B=q.transition;q.transition={};try{T()}finally{q.transition=B}},_t.unstable_act=v,_t.useCallback=function(T,B){return _.current.useCallback(T,B)},_t.useContext=function(T){return _.current.useContext(T)},_t.useDebugValue=function(){},_t.useDeferredValue=function(T){return _.current.useDeferredValue(T)},_t.useEffect=function(T,B){return _.current.useEffect(T,B)},_t.useId=function(){return _.current.useId()},_t.useImperativeHandle=function(T,B,ce){return _.current.useImperativeHandle(T,B,ce)},_t.useInsertionEffect=function(T,B){return _.current.useInsertionEffect(T,B)},_t.useLayoutEffect=function(T,B){return _.current.useLayoutEffect(T,B)},_t.useMemo=function(T,B){return _.current.useMemo(T,B)},_t.useReducer=function(T,B,ce){return _.current.useReducer(T,B,ce)},_t.useRef=function(T){return _.current.useRef(T)},_t.useState=function(T){return _.current.useState(T)},_t.useSyncExternalStore=function(T,B,ce){return _.current.useSyncExternalStore(T,B,ce)},_t.useTransition=function(){return _.current.useTransition()},_t.version="18.3.1",_t}var kp;function gi(){return kp||(kp=1,wc.exports=F_()),wc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function k_(){if(zp)return Ps;zp=1;var o=gi(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,g){var x,S={},M=null,b=null;g!==void 0&&(M=""+g),p.key!==void 0&&(M=""+p.key),p.ref!==void 0&&(b=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(S[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)S[x]===void 0&&(S[x]=p[x]);return{$$typeof:e,type:f,key:M,ref:b,props:S,_owner:a.current}}return Ps.Fragment=n,Ps.jsx=c,Ps.jsxs=c,Ps}var Bp;function z_(){return Bp||(Bp=1,Ec.exports=k_()),Ec.exports}var se=z_(),Kr=gi();const Yr=cg(Kr);var nl={},Tc={exports:{}},Rn={},bc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function B_(){return Hp||(Hp=1,function(o){function e(q,O){var v=q.length;q.push(O);e:for(;0<v;){var T=v-1>>>1,B=q[T];if(0<a(B,O))q[T]=O,q[v]=B,v=T;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var O=q[0],v=q.pop();if(v!==O){q[0]=v;e:for(var T=0,B=q.length,ce=B>>>1;T<ce;){var j=2*(T+1)-1,Q=q[j],re=j+1,oe=q[re];if(0>a(Q,v))re<B&&0>a(oe,Q)?(q[T]=oe,q[re]=v,T=re):(q[T]=Q,q[j]=v,T=j);else if(re<B&&0>a(oe,v))q[T]=oe,q[re]=v,T=re;else break e}}return O}function a(q,O){var v=q.sortIndex-O.sortIndex;return v!==0?v:q.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],g=[],x=1,S=null,M=3,b=!1,N=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(q){for(var O=n(g);O!==null;){if(O.callback===null)r(g);else if(O.startTime<=q)r(g),O.sortIndex=O.expirationTime,e(p,O);else break;O=n(g)}}function k(q){if(C=!1,G(q),!N)if(n(p)!==null)N=!0,Z(L);else{var O=n(g);O!==null&&_(k,O.startTime-q)}}function L(q,O){N=!1,C&&(C=!1,y(V),V=-1),b=!0;var v=M;try{for(G(O),S=n(p);S!==null&&(!(S.expirationTime>O)||q&&!U());){var T=S.callback;if(typeof T=="function"){S.callback=null,M=S.priorityLevel;var B=T(S.expirationTime<=O);O=o.unstable_now(),typeof B=="function"?S.callback=B:S===n(p)&&r(p),G(O)}else r(p);S=n(p)}if(S!==null)var ce=!0;else{var j=n(g);j!==null&&_(k,j.startTime-O),ce=!1}return ce}finally{S=null,M=v,b=!1}}var P=!1,D=null,V=-1,w=5,m=-1;function U(){return!(o.unstable_now()-m<w)}function $(){if(D!==null){var q=o.unstable_now();m=q;var O=!0;try{O=D(!0,q)}finally{O?F():(P=!1,D=null)}}else P=!1}var F;if(typeof Y=="function")F=function(){Y($)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,te=H.port2;H.port1.onmessage=$,F=function(){te.postMessage(null)}}else F=function(){E($,0)};function Z(q){D=q,P||(P=!0,F())}function _(q,O){V=E(function(){q(o.unstable_now())},O)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_continueExecution=function(){N||b||(N=!0,Z(L))},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(q){switch(M){case 1:case 2:case 3:var O=3;break;default:O=M}var v=M;M=O;try{return q()}finally{M=v}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(q,O){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var v=M;M=q;try{return O()}finally{M=v}},o.unstable_scheduleCallback=function(q,O,v){var T=o.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?T+v:T):v=T,q){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=v+B,q={id:x++,callback:O,priorityLevel:q,startTime:v,expirationTime:B,sortIndex:-1},v>T?(q.sortIndex=v,e(g,q),n(p)===null&&q===n(g)&&(C?(y(V),V=-1):C=!0,_(k,v-T))):(q.sortIndex=B,e(p,q),N||b||(N=!0,Z(L))),q},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(q){var O=M;return function(){var v=M;M=O;try{return q.apply(this,arguments)}finally{M=v}}}}(Ac)),Ac}var Vp;function H_(){return Vp||(Vp=1,bc.exports=B_()),bc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function V_(){if(Gp)return Rn;Gp=1;var o=gi(),e=H_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function M(t){return p.call(S,t)?!0:p.call(x,t)?!1:g.test(t)?S[t]=!0:(x[t]=!0,!1)}function b(t,i,s,u){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N(t,i,s,u){if(i===null||typeof i>"u"||b(t,i,s,u))return!0;if(u)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,s,u,d,h,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=A}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){E[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];E[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){E[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){E[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){E[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){E[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){E[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){E[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){E[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function Y(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(y,Y);E[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(y,Y);E[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(y,Y);E[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){E[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),E.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){E[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function G(t,i,s,u){var d=E.hasOwnProperty(i)?E[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(N(i,s,d,u)&&(s=null),u||d===null?M(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):d.mustUseProperty?t[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,u=d.attributeNamespace,s===null?t.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,u?t.setAttributeNS(u,i,s):t.setAttribute(i,s))))}var k=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),U=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),_=Symbol.for("react.offscreen"),q=Symbol.iterator;function O(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var v=Object.assign,T;function B(t){if(T===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);T=i&&i[1]||""}return`
`+T+t}var ce=!1;function j(t,i){if(!t||ce)return"";ce=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var u=fe}Reflect.construct(t,[],i)}else{try{i.call()}catch(fe){u=fe}t.call(i.prototype)}else{try{throw Error()}catch(fe){u=fe}t()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),h=u.stack.split(`
`),A=d.length-1,W=h.length-1;1<=A&&0<=W&&d[A]!==h[W];)W--;for(;1<=A&&0<=W;A--,W--)if(d[A]!==h[W]){if(A!==1||W!==1)do if(A--,W--,0>W||d[A]!==h[W]){var K=`
`+d[A].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=A&&0<=W);break}}}finally{ce=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?B(t):""}function Q(t){switch(t.tag){case 5:return B(t.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return t=j(t.type,!1),t;case 11:return t=j(t.type.render,!1),t;case 1:return t=j(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case P:return"Portal";case w:return"Profiler";case V:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U:return(t.displayName||"Context")+".Consumer";case m:return(t._context.displayName||"Context")+".Provider";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case Z:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}function oe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(t){var i=Se(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){u=""+A,h.call(this,A)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Qe(t){t._valueTracker||(t._valueTracker=Ce(t))}function Ge(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return t&&(u=Se(t)?t.checked?"true":"false":t.value),t=u,t!==s?(i.setValue(t),!0):!1}function Ze(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var s=i.checked;return v({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function ct(t,i){var s=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;s=ve(i.value!=null?i.value:s),t._wrapperState={initialChecked:u,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Je(t,i){i=i.checked,i!=null&&G(t,"checked",i,!1)}function De(t,i){Je(t,i);var s=ve(i.value),u=i.type;if(s!=null)u==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ot(t,i.type,s):i.hasOwnProperty("defaultValue")&&ot(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Pe(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function ot(t,i,s){(i!=="number"||Ze(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Le=Array.isArray;function z(t,i,s,u){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&u&&(t[s].defaultSelected=!0)}else{for(s=""+ve(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function R(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return v({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function le(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Le(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:ve(s)}}function ye(t,i){var s=ve(i.value),u=ve(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),u!=null&&(t.defaultValue=""+u)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ge(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Be(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ge(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Re,Ve=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,s,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function gt(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){Xe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function nt(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function st(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var u=s.indexOf("--")===0,d=nt(s,i[s],u);s==="float"&&(s="cssFloat"),u?t.setProperty(s,d):t[s]=d}}var qe=v({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(t,i){if(i){if(qe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ft(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function ne(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ne=null,me=null,_e=null;function ke(t){if(t=ms(t)){if(typeof Ne!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ga(i),Ne(t.stateNode,t.type,i))}}function Oe(t){me?_e?_e.push(t):_e=[t]:me=t}function dt(){if(me){var t=me,i=_e;if(_e=me=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function Ut(t,i){return t(i)}function Kt(){}var Et=!1;function En(t,i,s){if(Et)return t(i,s);Et=!0;try{return Ut(t,i,s)}finally{Et=!1,(me!==null||_e!==null)&&(Kt(),dt())}}function vn(t,i){var s=t.stateNode;if(s===null)return null;var u=ga(s);if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Jr=!1;if(f)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Jr=!1}function vi(t,i,s,u,d,h,A,W,K){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(s,fe)}catch(Ee){this.onError(Ee)}}var _i=!1,yr=null,xr=!1,Vi=null,$s={onError:function(t){_i=!0,yr=t}};function eo(t,i,s,u,d,h,A,W,K){_i=!1,yr=null,vi.apply($s,arguments)}function Ks(t,i,s,u,d,h,A,W,K){if(eo.apply(this,arguments),_i){if(_i){var fe=yr;_i=!1,yr=null}else throw Error(n(198));xr||(xr=!0,Vi=fe)}}function ui(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Zs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qs(t){if(ui(t)!==t)throw Error(n(188))}function Xl(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,u=i;;){var d=s.return;if(d===null)break;var h=d.alternate;if(h===null){if(u=d.return,u!==null){s=u;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===s)return Qs(d),t;if(h===u)return Qs(d),i;h=h.sibling}throw Error(n(188))}if(s.return!==u.return)s=d,u=h;else{for(var A=!1,W=d.child;W;){if(W===s){A=!0,s=d,u=h;break}if(W===u){A=!0,u=d,s=h;break}W=W.sibling}if(!A){for(W=h.child;W;){if(W===s){A=!0,s=h,u=d;break}if(W===u){A=!0,u=h,s=d;break}W=W.sibling}if(!A)throw Error(n(189))}}if(s.alternate!==u)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Js(t){return t=Xl(t),t!==null?ea(t):null}function ea(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ea(t);if(i!==null)return i;t=t.sibling}return null}var I=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,de=e.unstable_shouldYield,he=e.unstable_requestPaint,J=e.unstable_now,Te=e.unstable_getCurrentPriorityLevel,Ie=e.unstable_ImmediatePriority,He=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,at=e.unstable_LowPriority,lt=e.unstable_IdlePriority,et=null,ht=null;function Tt(t){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(et,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:tt,kt=Math.log,Mt=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(kt(t)/Mt|0)|0}var Vt=64,xt=4194304;function sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $n(t,i){var s=t.pendingLanes;if(s===0)return 0;var u=0,d=t.suspendedLanes,h=t.pingedLanes,A=s&268435455;if(A!==0){var W=A&~d;W!==0?u=sn(W):(h&=A,h!==0&&(u=sn(h)))}else A=s&~d,A!==0?u=sn(A):h!==0&&(u=sn(h));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if(u&4&&(u|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)s=31-bt(i),d=1<<s,u|=t[s],i&=~d;return u}function _n(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sr(t,i){for(var s=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var A=31-bt(h),W=1<<A,K=d[A];K===-1?(!(W&s)||W&u)&&(d[A]=_n(W,i)):K<=i&&(t.expiredLanes|=W),h&=~W}}function Lt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yn(){var t=Vt;return Vt<<=1,!(Vt&4194240)&&(Vt=64),t}function un(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Wt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-bt(i),t[i]=s}function cn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<s;){var d=31-bt(s),h=1<<d;i[d]=0,u[d]=-1,t[d]=-1,s&=~h}}function Mr(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var u=31-bt(s),d=1<<u;d&i|t[u]&i&&(t[u]|=i),s&=~d}}var yt=0;function md(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gd,ql,vd,_d,yd,Yl=!1,ta=[],Gi=null,Wi=null,ji=null,Jo=new Map,es=new Map,Xi=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(i.pointerId)}}function ts(t,i,s,u,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:h,targetContainers:[d]},i!==null&&(i=ms(i),i!==null&&ql(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function ov(t,i,s,u,d){switch(i){case"focusin":return Gi=ts(Gi,t,i,s,u,d),!0;case"dragenter":return Wi=ts(Wi,t,i,s,u,d),!0;case"mouseover":return ji=ts(ji,t,i,s,u,d),!0;case"pointerover":var h=d.pointerId;return Jo.set(h,ts(Jo.get(h)||null,t,i,s,u,d)),!0;case"gotpointercapture":return h=d.pointerId,es.set(h,ts(es.get(h)||null,t,i,s,u,d)),!0}return!1}function Sd(t){var i=Er(t.target);if(i!==null){var s=ui(i);if(s!==null){if(i=s.tag,i===13){if(i=Zs(s),i!==null){t.blockedOn=i,yd(t.priority,function(){vd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function na(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var u=new s.constructor(s.type,s);Rt=u,s.target.dispatchEvent(u),Rt=null}else return i=ms(s),i!==null&&ql(i),t.blockedOn=s,!1;i.shift()}return!0}function Md(t,i,s){na(t)&&s.delete(i)}function sv(){Yl=!1,Gi!==null&&na(Gi)&&(Gi=null),Wi!==null&&na(Wi)&&(Wi=null),ji!==null&&na(ji)&&(ji=null),Jo.forEach(Md),es.forEach(Md)}function ns(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sv)))}function is(t){function i(d){return ns(d,t)}if(0<ta.length){ns(ta[0],t);for(var s=1;s<ta.length;s++){var u=ta[s];u.blockedOn===t&&(u.blockedOn=null)}}for(Gi!==null&&ns(Gi,t),Wi!==null&&ns(Wi,t),ji!==null&&ns(ji,t),Jo.forEach(i),es.forEach(i),s=0;s<Xi.length;s++)u=Xi[s],u.blockedOn===t&&(u.blockedOn=null);for(;0<Xi.length&&(s=Xi[0],s.blockedOn===null);)Sd(s),s.blockedOn===null&&Xi.shift()}var to=k.ReactCurrentBatchConfig,ia=!0;function av(t,i,s,u){var d=yt,h=to.transition;to.transition=null;try{yt=1,$l(t,i,s,u)}finally{yt=d,to.transition=h}}function lv(t,i,s,u){var d=yt,h=to.transition;to.transition=null;try{yt=4,$l(t,i,s,u)}finally{yt=d,to.transition=h}}function $l(t,i,s,u){if(ia){var d=Kl(t,i,s,u);if(d===null)hu(t,i,u,ra,s),xd(t,u);else if(ov(d,t,i,s,u))u.stopPropagation();else if(xd(t,u),i&4&&-1<rv.indexOf(t)){for(;d!==null;){var h=ms(d);if(h!==null&&gd(h),h=Kl(t,i,s,u),h===null&&hu(t,i,u,ra,s),h===d)break;d=h}d!==null&&u.stopPropagation()}else hu(t,i,u,null,s)}}var ra=null;function Kl(t,i,s,u){if(ra=null,t=ne(u),t=Er(t),t!==null)if(i=ui(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Zs(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ra=t,null}function Ed(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Te()){case Ie:return 1;case He:return 4;case We:case at:return 16;case lt:return 536870912;default:return 16}default:return 16}}var qi=null,Zl=null,oa=null;function wd(){if(oa)return oa;var t,i=Zl,s=i.length,u,d="value"in qi?qi.value:qi.textContent,h=d.length;for(t=0;t<s&&i[t]===d[t];t++);var A=s-t;for(u=1;u<=A&&i[s-u]===d[h-u];u++);return oa=d.slice(t,1<u?1-u:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function Td(){return!1}function In(t){function i(s,u,d,h,A){this._reactName=s,this._targetInst=d,this.type=u,this.nativeEvent=h,this.target=A,this.currentTarget=null;for(var W in t)t.hasOwnProperty(W)&&(s=t[W],this[W]=s?s(h):h[W]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?aa:Td,this.isPropagationStopped=Td,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),i}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=In(no),rs=v({},no,{view:0,detail:0}),uv=In(rs),Jl,eu,os,la=v({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==os&&(os&&t.type==="mousemove"?(Jl=t.screenX-os.screenX,eu=t.screenY-os.screenY):eu=Jl=0,os=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),bd=In(la),cv=v({},la,{dataTransfer:0}),fv=In(cv),dv=v({},rs,{relatedTarget:0}),tu=In(dv),hv=v({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=In(hv),mv=v({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gv=In(mv),vv=v({},no,{data:0}),Ad=In(vv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=xv[t])?!!i[t]:!1}function nu(){return Sv}var Mv=v({},rs,{key:function(t){if(t.key){var i=_v[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ev=In(Mv),wv=v({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=In(wv),Tv=v({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),bv=In(Tv),Av=v({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=In(Av),Rv=v({},la,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=In(Rv),Lv=[9,13,27,32],iu=f&&"CompositionEvent"in window,ss=null;f&&"documentMode"in document&&(ss=document.documentMode);var Dv=f&&"TextEvent"in window&&!ss,Rd=f&&(!iu||ss&&8<ss&&11>=ss),Pd=" ",Ld=!1;function Dd(t,i){switch(t){case"keyup":return Lv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function Nv(t,i){switch(t){case"compositionend":return Nd(i);case"keypress":return i.which!==32?null:(Ld=!0,Pd);case"textInput":return t=i.data,t===Pd&&Ld?null:t;default:return null}}function Iv(t,i){if(io)return t==="compositionend"||!iu&&Dd(t,i)?(t=wd(),oa=Zl=qi=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rd&&i.locale!=="ko"?null:i.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Uv[t.type]:i==="textarea"}function Ud(t,i,s,u){Oe(u),i=ha(i,"onChange"),0<i.length&&(s=new Ql("onChange","change",null,s,u),t.push({event:s,listeners:i}))}var as=null,ls=null;function Ov(t){Jd(t,0)}function ua(t){var i=lo(t);if(Ge(i))return t}function Fv(t,i){if(t==="change")return i}var Od=!1;if(f){var ru;if(f){var ou="oninput"in document;if(!ou){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),ou=typeof Fd.oninput=="function"}ru=ou}else ru=!1;Od=ru&&(!document.documentMode||9<document.documentMode)}function kd(){as&&(as.detachEvent("onpropertychange",zd),ls=as=null)}function zd(t){if(t.propertyName==="value"&&ua(ls)){var i=[];Ud(i,ls,t,ne(t)),En(Ov,i)}}function kv(t,i,s){t==="focusin"?(kd(),as=i,ls=s,as.attachEvent("onpropertychange",zd)):t==="focusout"&&kd()}function zv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ua(ls)}function Bv(t,i){if(t==="click")return ua(i)}function Hv(t,i){if(t==="input"||t==="change")return ua(i)}function Vv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:Vv;function us(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var d=s[u];if(!p.call(i,d)||!Kn(t[d],i[d]))return!1}return!0}function Bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hd(t,i){var s=Bd(t);t=0;for(var u;s;){if(s.nodeType===3){if(u=t+s.textContent.length,t<=i&&u>=i)return{node:s,offset:i-t};t=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Bd(s)}}function Vd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Gd(){for(var t=window,i=Ze();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ze(t.document)}return i}function su(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Gv(t){var i=Gd(),s=t.focusedElem,u=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Vd(s.ownerDocument.documentElement,s)){if(u!==null&&su(s)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=s.textContent.length,h=Math.min(u.start,d);u=u.end===void 0?h:Math.min(u.end,d),!t.extend&&h>u&&(d=u,u=h,h=d),d=Hd(s,h);var A=Hd(s,u);d&&A&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==A.node||t.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>u?(t.addRange(i),t.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wv=f&&"documentMode"in document&&11>=document.documentMode,ro=null,au=null,cs=null,lu=!1;function Wd(t,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;lu||ro==null||ro!==Ze(u)||(u=ro,"selectionStart"in u&&su(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),cs&&us(cs,u)||(cs=u,u=ha(au,"onSelect"),0<u.length&&(i=new Ql("onSelect","select",null,i,s),t.push({event:i,listeners:u}),i.target=ro)))}function ca(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var oo={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},uu={},jd={};f&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function fa(t){if(uu[t])return uu[t];if(!oo[t])return t;var i=oo[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in jd)return uu[t]=i[s];return t}var Xd=fa("animationend"),qd=fa("animationiteration"),Yd=fa("animationstart"),$d=fa("transitionend"),Kd=new Map,Zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){Kd.set(t,i),l(i,[t])}for(var cu=0;cu<Zd.length;cu++){var fu=Zd[cu],jv=fu.toLowerCase(),Xv=fu[0].toUpperCase()+fu.slice(1);Yi(jv,"on"+Xv)}Yi(Xd,"onAnimationEnd"),Yi(qd,"onAnimationIteration"),Yi(Yd,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi($d,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function Qd(t,i,s){var u=t.type||"unknown-event";t.currentTarget=s,Ks(u,i,void 0,t),t.currentTarget=null}function Jd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var u=t[s],d=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var A=u.length-1;0<=A;A--){var W=u[A],K=W.instance,fe=W.currentTarget;if(W=W.listener,K!==h&&d.isPropagationStopped())break e;Qd(d,W,fe),h=K}else for(A=0;A<u.length;A++){if(W=u[A],K=W.instance,fe=W.currentTarget,W=W.listener,K!==h&&d.isPropagationStopped())break e;Qd(d,W,fe),h=K}}}if(xr)throw t=Vi,xr=!1,Vi=null,t}function Ot(t,i){var s=i[yu];s===void 0&&(s=i[yu]=new Set);var u=t+"__bubble";s.has(u)||(eh(i,t,2,!1),s.add(u))}function du(t,i,s){var u=0;i&&(u|=4),eh(s,t,u,i)}var da="_reactListening"+Math.random().toString(36).slice(2);function ds(t){if(!t[da]){t[da]=!0,r.forEach(function(s){s!=="selectionchange"&&(qv.has(s)||du(s,!1,t),du(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[da]||(i[da]=!0,du("selectionchange",!1,i))}}function eh(t,i,s,u){switch(Ed(i)){case 1:var d=av;break;case 4:d=lv;break;default:d=$l}s=d.bind(null,i,s,t),d=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function hu(t,i,s,u,d){var h=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var W=u.stateNode.containerInfo;if(W===d||W.nodeType===8&&W.parentNode===d)break;if(A===4)for(A=u.return;A!==null;){var K=A.tag;if((K===3||K===4)&&(K=A.stateNode.containerInfo,K===d||K.nodeType===8&&K.parentNode===d))return;A=A.return}for(;W!==null;){if(A=Er(W),A===null)return;if(K=A.tag,K===5||K===6){u=h=A;continue e}W=W.parentNode}}u=u.return}En(function(){var fe=h,Ee=ne(s),we=[];e:{var Me=Kd.get(t);if(Me!==void 0){var ze=Ql,Ye=t;switch(t){case"keypress":if(sa(s)===0)break e;case"keydown":case"keyup":ze=Ev;break;case"focusin":Ye="focus",ze=tu;break;case"focusout":Ye="blur",ze=tu;break;case"beforeblur":case"afterblur":ze=tu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=bv;break;case Xd:case qd:case Yd:ze=pv;break;case $d:ze=Cv;break;case"scroll":ze=uv;break;case"wheel":ze=Pv;break;case"copy":case"cut":case"paste":ze=gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Cd}var $e=(i&4)!==0,jt=!$e&&t==="scroll",ae=$e?Me!==null?Me+"Capture":null:Me;$e=[];for(var ee=fe,ue;ee!==null;){ue=ee;var Ae=ue.stateNode;if(ue.tag===5&&Ae!==null&&(ue=Ae,ae!==null&&(Ae=vn(ee,ae),Ae!=null&&$e.push(hs(ee,Ae,ue)))),jt)break;ee=ee.return}0<$e.length&&(Me=new ze(Me,Ye,null,s,Ee),we.push({event:Me,listeners:$e}))}}if(!(i&7)){e:{if(Me=t==="mouseover"||t==="pointerover",ze=t==="mouseout"||t==="pointerout",Me&&s!==Rt&&(Ye=s.relatedTarget||s.fromElement)&&(Er(Ye)||Ye[yi]))break e;if((ze||Me)&&(Me=Ee.window===Ee?Ee:(Me=Ee.ownerDocument)?Me.defaultView||Me.parentWindow:window,ze?(Ye=s.relatedTarget||s.toElement,ze=fe,Ye=Ye?Er(Ye):null,Ye!==null&&(jt=ui(Ye),Ye!==jt||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(ze=null,Ye=fe),ze!==Ye)){if($e=bd,Ae="onMouseLeave",ae="onMouseEnter",ee="mouse",(t==="pointerout"||t==="pointerover")&&($e=Cd,Ae="onPointerLeave",ae="onPointerEnter",ee="pointer"),jt=ze==null?Me:lo(ze),ue=Ye==null?Me:lo(Ye),Me=new $e(Ae,ee+"leave",ze,s,Ee),Me.target=jt,Me.relatedTarget=ue,Ae=null,Er(Ee)===fe&&($e=new $e(ae,ee+"enter",Ye,s,Ee),$e.target=ue,$e.relatedTarget=jt,Ae=$e),jt=Ae,ze&&Ye)t:{for($e=ze,ae=Ye,ee=0,ue=$e;ue;ue=so(ue))ee++;for(ue=0,Ae=ae;Ae;Ae=so(Ae))ue++;for(;0<ee-ue;)$e=so($e),ee--;for(;0<ue-ee;)ae=so(ae),ue--;for(;ee--;){if($e===ae||ae!==null&&$e===ae.alternate)break t;$e=so($e),ae=so(ae)}$e=null}else $e=null;ze!==null&&th(we,Me,ze,$e,!1),Ye!==null&&jt!==null&&th(we,jt,Ye,$e,!0)}}e:{if(Me=fe?lo(fe):window,ze=Me.nodeName&&Me.nodeName.toLowerCase(),ze==="select"||ze==="input"&&Me.type==="file")var Ke=Fv;else if(Id(Me))if(Od)Ke=Hv;else{Ke=zv;var it=kv}else(ze=Me.nodeName)&&ze.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(Ke=Bv);if(Ke&&(Ke=Ke(t,fe))){Ud(we,Ke,s,Ee);break e}it&&it(t,Me,fe),t==="focusout"&&(it=Me._wrapperState)&&it.controlled&&Me.type==="number"&&ot(Me,"number",Me.value)}switch(it=fe?lo(fe):window,t){case"focusin":(Id(it)||it.contentEditable==="true")&&(ro=it,au=fe,cs=null);break;case"focusout":cs=au=ro=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Wd(we,s,Ee);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":Wd(we,s,Ee)}var rt;if(iu)e:{switch(t){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else io?Dd(t,s)&&(ut="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(ut="onCompositionStart");ut&&(Rd&&s.locale!=="ko"&&(io||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&io&&(rt=wd()):(qi=Ee,Zl="value"in qi?qi.value:qi.textContent,io=!0)),it=ha(fe,ut),0<it.length&&(ut=new Ad(ut,t,null,s,Ee),we.push({event:ut,listeners:it}),rt?ut.data=rt:(rt=Nd(s),rt!==null&&(ut.data=rt)))),(rt=Dv?Nv(t,s):Iv(t,s))&&(fe=ha(fe,"onBeforeInput"),0<fe.length&&(Ee=new Ad("onBeforeInput","beforeinput",null,s,Ee),we.push({event:Ee,listeners:fe}),Ee.data=rt))}Jd(we,i)})}function hs(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ha(t,i){for(var s=i+"Capture",u=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=vn(t,s),h!=null&&u.unshift(hs(t,h,d)),h=vn(t,i),h!=null&&u.push(hs(t,h,d))),t=t.return}return u}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function th(t,i,s,u,d){for(var h=i._reactName,A=[];s!==null&&s!==u;){var W=s,K=W.alternate,fe=W.stateNode;if(K!==null&&K===u)break;W.tag===5&&fe!==null&&(W=fe,d?(K=vn(s,h),K!=null&&A.unshift(hs(s,K,W))):d||(K=vn(s,h),K!=null&&A.push(hs(s,K,W)))),s=s.return}A.length!==0&&t.push({event:i,listeners:A})}var Yv=/\r\n?/g,$v=/\u0000|\uFFFD/g;function nh(t){return(typeof t=="string"?t:""+t).replace(Yv,`
`).replace($v,"")}function pa(t,i,s){if(i=nh(i),nh(t)!==i&&s)throw Error(n(425))}function ma(){}var pu=null,mu=null;function gu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,Kv=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(t){return ih.resolve(null).then(t).catch(Qv)}:vu;function Qv(t){setTimeout(function(){throw t})}function _u(t,i){var s=i,u=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(u===0){t.removeChild(d),is(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=d}while(s);is(i)}function $i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function rh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),ci="__reactFiber$"+ao,ps="__reactProps$"+ao,yi="__reactContainer$"+ao,yu="__reactEvents$"+ao,Jv="__reactListeners$"+ao,e_="__reactHandles$"+ao;function Er(t){var i=t[ci];if(i)return i;for(var s=t.parentNode;s;){if(i=s[yi]||s[ci]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=rh(t);t!==null;){if(s=t[ci])return s;t=rh(t)}return i}t=s,s=t.parentNode}return null}function ms(t){return t=t[ci]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ga(t){return t[ps]||null}var xu=[],uo=-1;function Ki(t){return{current:t}}function Ft(t){0>uo||(t.current=xu[uo],xu[uo]=null,uo--)}function It(t,i){uo++,xu[uo]=t.current,t.current=i}var Zi={},fn=Ki(Zi),wn=Ki(!1),wr=Zi;function co(t,i){var s=t.type.contextTypes;if(!s)return Zi;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in s)d[h]=i[h];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Tn(t){return t=t.childContextTypes,t!=null}function va(){Ft(wn),Ft(fn)}function oh(t,i,s){if(fn.current!==Zi)throw Error(n(168));It(fn,i),It(wn,s)}function sh(t,i,s){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return s;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,oe(t)||"Unknown",d));return v({},s,u)}function _a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,wr=fn.current,It(fn,t),It(wn,wn.current),!0}function ah(t,i,s){var u=t.stateNode;if(!u)throw Error(n(169));s?(t=sh(t,i,wr),u.__reactInternalMemoizedMergedChildContext=t,Ft(wn),Ft(fn),It(fn,t)):Ft(wn),It(wn,s)}var xi=null,ya=!1,Su=!1;function lh(t){xi===null?xi=[t]:xi.push(t)}function t_(t){ya=!0,lh(t)}function Qi(){if(!Su&&xi!==null){Su=!0;var t=0,i=yt;try{var s=xi;for(yt=1;t<s.length;t++){var u=s[t];do u=u(!0);while(u!==null)}xi=null,ya=!1}catch(d){throw xi!==null&&(xi=xi.slice(t+1)),I(Ie,Qi),d}finally{yt=i,Su=!1}}return null}var fo=[],ho=0,xa=null,Sa=0,Bn=[],Hn=0,Tr=null,Si=1,Mi="";function br(t,i){fo[ho++]=Sa,fo[ho++]=xa,xa=t,Sa=i}function uh(t,i,s){Bn[Hn++]=Si,Bn[Hn++]=Mi,Bn[Hn++]=Tr,Tr=t;var u=Si;t=Mi;var d=32-bt(u)-1;u&=~(1<<d),s+=1;var h=32-bt(i)+d;if(30<h){var A=d-d%5;h=(u&(1<<A)-1).toString(32),u>>=A,d-=A,Si=1<<32-bt(i)+d|s<<d|u,Mi=h+t}else Si=1<<h|s<<d|u,Mi=t}function Mu(t){t.return!==null&&(br(t,1),uh(t,1,0))}function Eu(t){for(;t===xa;)xa=fo[--ho],fo[ho]=null,Sa=fo[--ho],fo[ho]=null;for(;t===Tr;)Tr=Bn[--Hn],Bn[Hn]=null,Mi=Bn[--Hn],Bn[Hn]=null,Si=Bn[--Hn],Bn[Hn]=null}var Un=null,On=null,zt=!1,Zn=null;function ch(t,i){var s=jn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function fh(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,On=$i(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Tr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=jn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Un=t,On=null,!0):!1;default:return!1}}function wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tu(t){if(zt){var i=On;if(i){var s=i;if(!fh(t,i)){if(wu(t))throw Error(n(418));i=$i(s.nextSibling);var u=Un;i&&fh(t,i)?ch(u,s):(t.flags=t.flags&-4097|2,zt=!1,Un=t)}}else{if(wu(t))throw Error(n(418));t.flags=t.flags&-4097|2,zt=!1,Un=t}}}function dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Ma(t){if(t!==Un)return!1;if(!zt)return dh(t),zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gu(t.type,t.memoizedProps)),i&&(i=On)){if(wu(t))throw hh(),Error(n(418));for(;i;)ch(t,i),i=$i(i.nextSibling)}if(dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){On=$i(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}On=null}}else On=Un?$i(t.stateNode.nextSibling):null;return!0}function hh(){for(var t=On;t;)t=$i(t.nextSibling)}function po(){On=Un=null,zt=!1}function bu(t){Zn===null?Zn=[t]:Zn.push(t)}var n_=k.ReactCurrentBatchConfig;function gs(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var u=s.stateNode}if(!u)throw Error(n(147,t));var d=u,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(A){var W=d.refs;A===null?delete W[h]:W[h]=A},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Ea(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ph(t){var i=t._init;return i(t._payload)}function mh(t){function i(ae,ee){if(t){var ue=ae.deletions;ue===null?(ae.deletions=[ee],ae.flags|=16):ue.push(ee)}}function s(ae,ee){if(!t)return null;for(;ee!==null;)i(ae,ee),ee=ee.sibling;return null}function u(ae,ee){for(ae=new Map;ee!==null;)ee.key!==null?ae.set(ee.key,ee):ae.set(ee.index,ee),ee=ee.sibling;return ae}function d(ae,ee){return ae=sr(ae,ee),ae.index=0,ae.sibling=null,ae}function h(ae,ee,ue){return ae.index=ue,t?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<ee?(ae.flags|=2,ee):ue):(ae.flags|=2,ee)):(ae.flags|=1048576,ee)}function A(ae){return t&&ae.alternate===null&&(ae.flags|=2),ae}function W(ae,ee,ue,Ae){return ee===null||ee.tag!==6?(ee=vc(ue,ae.mode,Ae),ee.return=ae,ee):(ee=d(ee,ue),ee.return=ae,ee)}function K(ae,ee,ue,Ae){var Ke=ue.type;return Ke===D?Ee(ae,ee,ue.props.children,Ae,ue.key):ee!==null&&(ee.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&ph(Ke)===ee.type)?(Ae=d(ee,ue.props),Ae.ref=gs(ae,ee,ue),Ae.return=ae,Ae):(Ae=qa(ue.type,ue.key,ue.props,null,ae.mode,Ae),Ae.ref=gs(ae,ee,ue),Ae.return=ae,Ae)}function fe(ae,ee,ue,Ae){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==ue.containerInfo||ee.stateNode.implementation!==ue.implementation?(ee=_c(ue,ae.mode,Ae),ee.return=ae,ee):(ee=d(ee,ue.children||[]),ee.return=ae,ee)}function Ee(ae,ee,ue,Ae,Ke){return ee===null||ee.tag!==7?(ee=Ir(ue,ae.mode,Ae,Ke),ee.return=ae,ee):(ee=d(ee,ue),ee.return=ae,ee)}function we(ae,ee,ue){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=vc(""+ee,ae.mode,ue),ee.return=ae,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case L:return ue=qa(ee.type,ee.key,ee.props,null,ae.mode,ue),ue.ref=gs(ae,null,ee),ue.return=ae,ue;case P:return ee=_c(ee,ae.mode,ue),ee.return=ae,ee;case Z:var Ae=ee._init;return we(ae,Ae(ee._payload),ue)}if(Le(ee)||O(ee))return ee=Ir(ee,ae.mode,ue,null),ee.return=ae,ee;Ea(ae,ee)}return null}function Me(ae,ee,ue,Ae){var Ke=ee!==null?ee.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return Ke!==null?null:W(ae,ee,""+ue,Ae);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:return ue.key===Ke?K(ae,ee,ue,Ae):null;case P:return ue.key===Ke?fe(ae,ee,ue,Ae):null;case Z:return Ke=ue._init,Me(ae,ee,Ke(ue._payload),Ae)}if(Le(ue)||O(ue))return Ke!==null?null:Ee(ae,ee,ue,Ae,null);Ea(ae,ue)}return null}function ze(ae,ee,ue,Ae,Ke){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ae=ae.get(ue)||null,W(ee,ae,""+Ae,Ke);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case L:return ae=ae.get(Ae.key===null?ue:Ae.key)||null,K(ee,ae,Ae,Ke);case P:return ae=ae.get(Ae.key===null?ue:Ae.key)||null,fe(ee,ae,Ae,Ke);case Z:var it=Ae._init;return ze(ae,ee,ue,it(Ae._payload),Ke)}if(Le(Ae)||O(Ae))return ae=ae.get(ue)||null,Ee(ee,ae,Ae,Ke,null);Ea(ee,Ae)}return null}function Ye(ae,ee,ue,Ae){for(var Ke=null,it=null,rt=ee,ut=ee=0,rn=null;rt!==null&&ut<ue.length;ut++){rt.index>ut?(rn=rt,rt=null):rn=rt.sibling;var At=Me(ae,rt,ue[ut],Ae);if(At===null){rt===null&&(rt=rn);break}t&&rt&&At.alternate===null&&i(ae,rt),ee=h(At,ee,ut),it===null?Ke=At:it.sibling=At,it=At,rt=rn}if(ut===ue.length)return s(ae,rt),zt&&br(ae,ut),Ke;if(rt===null){for(;ut<ue.length;ut++)rt=we(ae,ue[ut],Ae),rt!==null&&(ee=h(rt,ee,ut),it===null?Ke=rt:it.sibling=rt,it=rt);return zt&&br(ae,ut),Ke}for(rt=u(ae,rt);ut<ue.length;ut++)rn=ze(rt,ae,ut,ue[ut],Ae),rn!==null&&(t&&rn.alternate!==null&&rt.delete(rn.key===null?ut:rn.key),ee=h(rn,ee,ut),it===null?Ke=rn:it.sibling=rn,it=rn);return t&&rt.forEach(function(ar){return i(ae,ar)}),zt&&br(ae,ut),Ke}function $e(ae,ee,ue,Ae){var Ke=O(ue);if(typeof Ke!="function")throw Error(n(150));if(ue=Ke.call(ue),ue==null)throw Error(n(151));for(var it=Ke=null,rt=ee,ut=ee=0,rn=null,At=ue.next();rt!==null&&!At.done;ut++,At=ue.next()){rt.index>ut?(rn=rt,rt=null):rn=rt.sibling;var ar=Me(ae,rt,At.value,Ae);if(ar===null){rt===null&&(rt=rn);break}t&&rt&&ar.alternate===null&&i(ae,rt),ee=h(ar,ee,ut),it===null?Ke=ar:it.sibling=ar,it=ar,rt=rn}if(At.done)return s(ae,rt),zt&&br(ae,ut),Ke;if(rt===null){for(;!At.done;ut++,At=ue.next())At=we(ae,At.value,Ae),At!==null&&(ee=h(At,ee,ut),it===null?Ke=At:it.sibling=At,it=At);return zt&&br(ae,ut),Ke}for(rt=u(ae,rt);!At.done;ut++,At=ue.next())At=ze(rt,ae,ut,At.value,Ae),At!==null&&(t&&At.alternate!==null&&rt.delete(At.key===null?ut:At.key),ee=h(At,ee,ut),it===null?Ke=At:it.sibling=At,it=At);return t&&rt.forEach(function(U_){return i(ae,U_)}),zt&&br(ae,ut),Ke}function jt(ae,ee,ue,Ae){if(typeof ue=="object"&&ue!==null&&ue.type===D&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:e:{for(var Ke=ue.key,it=ee;it!==null;){if(it.key===Ke){if(Ke=ue.type,Ke===D){if(it.tag===7){s(ae,it.sibling),ee=d(it,ue.props.children),ee.return=ae,ae=ee;break e}}else if(it.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&ph(Ke)===it.type){s(ae,it.sibling),ee=d(it,ue.props),ee.ref=gs(ae,it,ue),ee.return=ae,ae=ee;break e}s(ae,it);break}else i(ae,it);it=it.sibling}ue.type===D?(ee=Ir(ue.props.children,ae.mode,Ae,ue.key),ee.return=ae,ae=ee):(Ae=qa(ue.type,ue.key,ue.props,null,ae.mode,Ae),Ae.ref=gs(ae,ee,ue),Ae.return=ae,ae=Ae)}return A(ae);case P:e:{for(it=ue.key;ee!==null;){if(ee.key===it)if(ee.tag===4&&ee.stateNode.containerInfo===ue.containerInfo&&ee.stateNode.implementation===ue.implementation){s(ae,ee.sibling),ee=d(ee,ue.children||[]),ee.return=ae,ae=ee;break e}else{s(ae,ee);break}else i(ae,ee);ee=ee.sibling}ee=_c(ue,ae.mode,Ae),ee.return=ae,ae=ee}return A(ae);case Z:return it=ue._init,jt(ae,ee,it(ue._payload),Ae)}if(Le(ue))return Ye(ae,ee,ue,Ae);if(O(ue))return $e(ae,ee,ue,Ae);Ea(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,ee!==null&&ee.tag===6?(s(ae,ee.sibling),ee=d(ee,ue),ee.return=ae,ae=ee):(s(ae,ee),ee=vc(ue,ae.mode,Ae),ee.return=ae,ae=ee),A(ae)):s(ae,ee)}return jt}var mo=mh(!0),gh=mh(!1),wa=Ki(null),Ta=null,go=null,Au=null;function Cu(){Au=go=Ta=null}function Ru(t){var i=wa.current;Ft(wa),t._currentValue=i}function Pu(t,i,s){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===s)break;t=t.return}}function vo(t,i){Ta=t,Au=go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(bn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(Au!==t)if(t={context:t,memoizedValue:i,next:null},go===null){if(Ta===null)throw Error(n(308));go=t,Ta.dependencies={lanes:0,firstContext:t}}else go=go.next=t;return i}var Ar=null;function Lu(t){Ar===null?Ar=[t]:Ar.push(t)}function vh(t,i,s,u){var d=i.interleaved;return d===null?(s.next=s,Lu(i)):(s.next=d.next,d.next=s),i.interleaved=s,Ei(t,u)}function Ei(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Ji=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,s){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,wt&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ei(t,s)}return d=u.interleaved,d===null?(i.next=i,Lu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ei(t,s)}function ba(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,Mr(t,s)}}function yh(t,i){var s=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var d=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var A={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?d=h=A:h=h.next=A,s=s.next}while(s!==null);h===null?d=h=i:h=h.next=i}else d=h=i;s={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:u.shared,effects:u.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Aa(t,i,s,u){var d=t.updateQueue;Ji=!1;var h=d.firstBaseUpdate,A=d.lastBaseUpdate,W=d.shared.pending;if(W!==null){d.shared.pending=null;var K=W,fe=K.next;K.next=null,A===null?h=fe:A.next=fe,A=K;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,W=Ee.lastBaseUpdate,W!==A&&(W===null?Ee.firstBaseUpdate=fe:W.next=fe,Ee.lastBaseUpdate=K))}if(h!==null){var we=d.baseState;A=0,Ee=fe=K=null,W=h;do{var Me=W.lane,ze=W.eventTime;if((u&Me)===Me){Ee!==null&&(Ee=Ee.next={eventTime:ze,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var Ye=t,$e=W;switch(Me=i,ze=s,$e.tag){case 1:if(Ye=$e.payload,typeof Ye=="function"){we=Ye.call(ze,we,Me);break e}we=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=$e.payload,Me=typeof Ye=="function"?Ye.call(ze,we,Me):Ye,Me==null)break e;we=v({},we,Me);break e;case 2:Ji=!0}}W.callback!==null&&W.lane!==0&&(t.flags|=64,Me=d.effects,Me===null?d.effects=[W]:Me.push(W))}else ze={eventTime:ze,lane:Me,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Ee===null?(fe=Ee=ze,K=we):Ee=Ee.next=ze,A|=Me;if(W=W.next,W===null){if(W=d.shared.pending,W===null)break;Me=W,W=Me.next,Me.next=null,d.lastBaseUpdate=Me,d.shared.pending=null}}while(!0);if(Ee===null&&(K=we),d.baseState=K,d.firstBaseUpdate=fe,d.lastBaseUpdate=Ee,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Pr|=A,t.lanes=A,t.memoizedState=we}}function xh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=s,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var vs={},fi=Ki(vs),_s=Ki(vs),ys=Ki(vs);function Cr(t){if(t===vs)throw Error(n(174));return t}function Nu(t,i){switch(It(ys,i),It(_s,t),It(fi,vs),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Be(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Be(i,t)}Ft(fi),It(fi,i)}function _o(){Ft(fi),Ft(_s),Ft(ys)}function Sh(t){Cr(ys.current);var i=Cr(fi.current),s=Be(i,t.type);i!==s&&(It(_s,t),It(fi,s))}function Iu(t){_s.current===t&&(Ft(fi),Ft(_s))}var Bt=Ki(0);function Ca(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uu=[];function Ou(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var Ra=k.ReactCurrentDispatcher,Fu=k.ReactCurrentBatchConfig,Rr=0,Ht=null,Zt=null,tn=null,Pa=!1,xs=!1,Ss=0,i_=0;function dn(){throw Error(n(321))}function ku(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function zu(t,i,s,u,d,h){if(Rr=h,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ra.current=t===null||t.memoizedState===null?a_:l_,t=s(u,d),xs){h=0;do{if(xs=!1,Ss=0,25<=h)throw Error(n(301));h+=1,tn=Zt=null,i.updateQueue=null,Ra.current=u_,t=s(u,d)}while(xs)}if(Ra.current=Na,i=Zt!==null&&Zt.next!==null,Rr=0,tn=Zt=Ht=null,Pa=!1,i)throw Error(n(300));return t}function Bu(){var t=Ss!==0;return Ss=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=t:tn=tn.next=t,tn}function Gn(){if(Zt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},tn===null?Ht.memoizedState=tn=t:tn=tn.next=t}return tn}function Ms(t,i){return typeof i=="function"?i(t):i}function Hu(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=Zt,d=u.baseQueue,h=s.pending;if(h!==null){if(d!==null){var A=d.next;d.next=h.next,h.next=A}u.baseQueue=d=h,s.pending=null}if(d!==null){h=d.next,u=u.baseState;var W=A=null,K=null,fe=h;do{var Ee=fe.lane;if((Rr&Ee)===Ee)K!==null&&(K=K.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:t(u,fe.action);else{var we={lane:Ee,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};K===null?(W=K=we,A=u):K=K.next=we,Ht.lanes|=Ee,Pr|=Ee}fe=fe.next}while(fe!==null&&fe!==h);K===null?A=u:K.next=W,Kn(u,i.memoizedState)||(bn=!0),i.memoizedState=u,i.baseState=A,i.baseQueue=K,s.lastRenderedState=u}if(t=s.interleaved,t!==null){d=t;do h=d.lane,Ht.lanes|=h,Pr|=h,d=d.next;while(d!==t)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Vu(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=s.dispatch,d=s.pending,h=i.memoizedState;if(d!==null){s.pending=null;var A=d=d.next;do h=t(h,A.action),A=A.next;while(A!==d);Kn(h,i.memoizedState)||(bn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,u]}function Mh(){}function Eh(t,i){var s=Ht,u=Gn(),d=i(),h=!Kn(u.memoizedState,d);if(h&&(u.memoizedState=d,bn=!0),u=u.queue,Gu(bh.bind(null,s,u,t),[t]),u.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,Es(9,Th.bind(null,s,u,d,i),void 0,null),nn===null)throw Error(n(349));Rr&30||wh(s,i,d)}return d}function wh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Th(t,i,s,u){i.value=s,i.getSnapshot=u,Ah(i)&&Ch(t)}function bh(t,i,s){return s(function(){Ah(i)&&Ch(t)})}function Ah(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function Ch(t){var i=Ei(t,1);i!==null&&ti(i,t,1,-1)}function Rh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:t},i.queue=t,t=t.dispatch=s_.bind(null,Ht,t),[i.memoizedState,t]}function Es(t,i,s,u){return t={tag:t,create:i,destroy:s,deps:u,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(u=s.next,s.next=t,t.next=u,i.lastEffect=t)),t}function Ph(){return Gn().memoizedState}function La(t,i,s,u){var d=di();Ht.flags|=t,d.memoizedState=Es(1|i,s,void 0,u===void 0?null:u)}function Da(t,i,s,u){var d=Gn();u=u===void 0?null:u;var h=void 0;if(Zt!==null){var A=Zt.memoizedState;if(h=A.destroy,u!==null&&ku(u,A.deps)){d.memoizedState=Es(i,s,h,u);return}}Ht.flags|=t,d.memoizedState=Es(1|i,s,h,u)}function Lh(t,i){return La(8390656,8,t,i)}function Gu(t,i){return Da(2048,8,t,i)}function Dh(t,i){return Da(4,2,t,i)}function Nh(t,i){return Da(4,4,t,i)}function Ih(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Uh(t,i,s){return s=s!=null?s.concat([t]):null,Da(4,4,Ih.bind(null,i,t),s)}function Wu(){}function Oh(t,i){var s=Gn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(s.memoizedState=[t,i],t)}function Fh(t,i){var s=Gn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(t=t(),s.memoizedState=[t,i],t)}function kh(t,i,s){return Rr&21?(Kn(s,i)||(s=yn(),Ht.lanes|=s,Pr|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=s)}function r_(t,i){var s=yt;yt=s!==0&&4>s?s:4,t(!0);var u=Fu.transition;Fu.transition={};try{t(!1),i()}finally{yt=s,Fu.transition=u}}function zh(){return Gn().memoizedState}function o_(t,i,s){var u=rr(t);if(s={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null},Bh(t))Hh(i,s);else if(s=vh(t,i,s,u),s!==null){var d=Sn();ti(s,t,u,d),Vh(s,i,u)}}function s_(t,i,s){var u=rr(t),d={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null};if(Bh(t))Hh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var A=i.lastRenderedState,W=h(A,s);if(d.hasEagerState=!0,d.eagerState=W,Kn(W,A)){var K=i.interleaved;K===null?(d.next=d,Lu(i)):(d.next=K.next,K.next=d),i.interleaved=d;return}}catch{}finally{}s=vh(t,i,d,u),s!==null&&(d=Sn(),ti(s,t,u,d),Vh(s,i,u))}}function Bh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Hh(t,i){xs=Pa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Vh(t,i,s){if(s&4194240){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,Mr(t,s)}}var Na={readContext:Vn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},a_={readContext:Vn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:Lh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,La(4194308,4,Ih.bind(null,i,t),s)},useLayoutEffect:function(t,i){return La(4194308,4,t,i)},useInsertionEffect:function(t,i){return La(4,2,t,i)},useMemo:function(t,i){var s=di();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var u=di();return i=s!==void 0?s(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=o_.bind(null,Ht,t),[u.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:Rh,useDebugValue:Wu,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=Rh(!1),i=t[0];return t=r_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var u=Ht,d=di();if(zt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),nn===null)throw Error(n(349));Rr&30||wh(u,i,s)}d.memoizedState=s;var h={value:s,getSnapshot:i};return d.queue=h,Lh(bh.bind(null,u,h,t),[t]),u.flags|=2048,Es(9,Th.bind(null,u,h,s,i),void 0,null),s},useId:function(){var t=di(),i=nn.identifierPrefix;if(zt){var s=Mi,u=Si;s=(u&~(1<<32-bt(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=Ss++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=i_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},l_={readContext:Vn,useCallback:Oh,useContext:Vn,useEffect:Gu,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:Nh,useMemo:Fh,useReducer:Hu,useRef:Ph,useState:function(){return Hu(Ms)},useDebugValue:Wu,useDeferredValue:function(t){var i=Gn();return kh(i,Zt.memoizedState,t)},useTransition:function(){var t=Hu(Ms)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:Mh,useSyncExternalStore:Eh,useId:zh,unstable_isNewReconciler:!1},u_={readContext:Vn,useCallback:Oh,useContext:Vn,useEffect:Gu,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:Nh,useMemo:Fh,useReducer:Vu,useRef:Ph,useState:function(){return Vu(Ms)},useDebugValue:Wu,useDeferredValue:function(t){var i=Gn();return Zt===null?i.memoizedState=t:kh(i,Zt.memoizedState,t)},useTransition:function(){var t=Vu(Ms)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:Mh,useSyncExternalStore:Eh,useId:zh,unstable_isNewReconciler:!1};function Qn(t,i){if(t&&t.defaultProps){i=v({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function ju(t,i,s,u){i=t.memoizedState,s=s(u,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ia={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var u=Sn(),d=rr(t),h=wi(u,d);h.payload=i,s!=null&&(h.callback=s),i=er(t,h,d),i!==null&&(ti(i,t,d,u),ba(i,t,d))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var u=Sn(),d=rr(t),h=wi(u,d);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=er(t,h,d),i!==null&&(ti(i,t,d,u),ba(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Sn(),u=rr(t),d=wi(s,u);d.tag=2,i!=null&&(d.callback=i),i=er(t,d,u),i!==null&&(ti(i,t,u,s),ba(i,t,u))}};function Gh(t,i,s,u,d,h,A){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,h,A):i.prototype&&i.prototype.isPureReactComponent?!us(s,u)||!us(d,h):!0}function Wh(t,i,s){var u=!1,d=Zi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(d=Tn(i)?wr:fn.current,u=i.contextTypes,h=(u=u!=null)?co(t,d):Zi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ia,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function jh(t,i,s,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==t&&Ia.enqueueReplaceState(i,i.state,null)}function Xu(t,i,s,u){var d=t.stateNode;d.props=s,d.state=t.memoizedState,d.refs={},Du(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Vn(h):(h=Tn(i)?wr:fn.current,d.context=co(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ju(t,i,h,s),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ia.enqueueReplaceState(d,d.state,null),Aa(t,s,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,i){try{var s="",u=i;do s+=Q(u),u=u.return;while(u);var d=s}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function qu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Yu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var c_=typeof WeakMap=="function"?WeakMap:Map;function Xh(t,i,s){s=wi(-1,s),s.tag=3,s.payload={element:null};var u=i.value;return s.callback=function(){Ha||(Ha=!0,uc=u),Yu(t,i)},s}function qh(t,i,s){s=wi(-1,s),s.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;s.payload=function(){return u(d)},s.callback=function(){Yu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Yu(t,i),typeof u!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),s}function Yh(t,i,s){var u=t.pingCache;if(u===null){u=t.pingCache=new c_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(s)||(d.add(s),t=w_.bind(null,t,i,s),i.then(t,t))}function $h(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Kh(t,i,s,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=wi(-1,1),i.tag=2,er(s,i,1))),s.lanes|=1),t)}var f_=k.ReactCurrentOwner,bn=!1;function xn(t,i,s,u){i.child=t===null?gh(i,null,s,u):mo(i,t.child,s,u)}function Zh(t,i,s,u,d){s=s.render;var h=i.ref;return vo(i,d),u=zu(t,i,s,u,h,d),s=Bu(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ti(t,i,d)):(zt&&s&&Mu(i),i.flags|=1,xn(t,i,u,d),i.child)}function Qh(t,i,s,u,d){if(t===null){var h=s.type;return typeof h=="function"&&!gc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Jh(t,i,h,u,d)):(t=qa(s.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&d)){var A=h.memoizedProps;if(s=s.compare,s=s!==null?s:us,s(A,u)&&t.ref===i.ref)return Ti(t,i,d)}return i.flags|=1,t=sr(h,u),t.ref=i.ref,t.return=i,i.child=t}function Jh(t,i,s,u,d){if(t!==null){var h=t.memoizedProps;if(us(h,u)&&t.ref===i.ref)if(bn=!1,i.pendingProps=u=h,(t.lanes&d)!==0)t.flags&131072&&(bn=!0);else return i.lanes=t.lanes,Ti(t,i,d)}return $u(t,i,s,u,d)}function ep(t,i,s){var u=i.pendingProps,d=u.children,h=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(So,Fn),Fn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(So,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:s,It(So,Fn),Fn|=u}else h!==null?(u=h.baseLanes|s,i.memoizedState=null):u=s,It(So,Fn),Fn|=u;return xn(t,i,d,s),i.child}function tp(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function $u(t,i,s,u,d){var h=Tn(s)?wr:fn.current;return h=co(i,h),vo(i,d),s=zu(t,i,s,u,h,d),u=Bu(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ti(t,i,d)):(zt&&u&&Mu(i),i.flags|=1,xn(t,i,s,d),i.child)}function np(t,i,s,u,d){if(Tn(s)){var h=!0;_a(i)}else h=!1;if(vo(i,d),i.stateNode===null)Oa(t,i),Wh(i,s,u),Xu(i,s,u,d),u=!0;else if(t===null){var A=i.stateNode,W=i.memoizedProps;A.props=W;var K=A.context,fe=s.contextType;typeof fe=="object"&&fe!==null?fe=Vn(fe):(fe=Tn(s)?wr:fn.current,fe=co(i,fe));var Ee=s.getDerivedStateFromProps,we=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";we||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(W!==u||K!==fe)&&jh(i,A,u,fe),Ji=!1;var Me=i.memoizedState;A.state=Me,Aa(i,u,A,d),K=i.memoizedState,W!==u||Me!==K||wn.current||Ji?(typeof Ee=="function"&&(ju(i,s,Ee,u),K=i.memoizedState),(W=Ji||Gh(i,s,W,u,Me,K,fe))?(we||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=K),A.props=u,A.state=K,A.context=fe,u=W):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{A=i.stateNode,_h(t,i),W=i.memoizedProps,fe=i.type===i.elementType?W:Qn(i.type,W),A.props=fe,we=i.pendingProps,Me=A.context,K=s.contextType,typeof K=="object"&&K!==null?K=Vn(K):(K=Tn(s)?wr:fn.current,K=co(i,K));var ze=s.getDerivedStateFromProps;(Ee=typeof ze=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(W!==we||Me!==K)&&jh(i,A,u,K),Ji=!1,Me=i.memoizedState,A.state=Me,Aa(i,u,A,d);var Ye=i.memoizedState;W!==we||Me!==Ye||wn.current||Ji?(typeof ze=="function"&&(ju(i,s,ze,u),Ye=i.memoizedState),(fe=Ji||Gh(i,s,fe,u,Me,Ye,K)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,Ye,K),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,Ye,K)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||W===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||W===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ye),A.props=u,A.state=Ye,A.context=K,u=fe):(typeof A.componentDidUpdate!="function"||W===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||W===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),u=!1)}return Ku(t,i,s,u,h,d)}function Ku(t,i,s,u,d,h){tp(t,i);var A=(i.flags&128)!==0;if(!u&&!A)return d&&ah(i,s,!1),Ti(t,i,h);u=i.stateNode,f_.current=i;var W=A&&typeof s.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&A?(i.child=mo(i,t.child,null,h),i.child=mo(i,null,W,h)):xn(t,i,W,h),i.memoizedState=u.state,d&&ah(i,s,!0),i.child}function ip(t){var i=t.stateNode;i.pendingContext?oh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&oh(t,i.context,!1),Nu(t,i.containerInfo)}function rp(t,i,s,u,d){return po(),bu(d),i.flags|=256,xn(t,i,s,u),i.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function op(t,i,s){var u=i.pendingProps,d=Bt.current,h=!1,A=(i.flags&128)!==0,W;if((W=A)||(W=t!==null&&t.memoizedState===null?!1:(d&2)!==0),W?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),It(Bt,d&1),t===null)return Tu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(A=u.children,t=u.fallback,h?(u=i.mode,h=i.child,A={mode:"hidden",children:A},!(u&1)&&h!==null?(h.childLanes=0,h.pendingProps=A):h=Ya(A,u,0,null),t=Ir(t,u,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Qu(s),i.memoizedState=Zu,t):Ju(i,A));if(d=t.memoizedState,d!==null&&(W=d.dehydrated,W!==null))return d_(t,i,A,u,W,d,s);if(h){h=u.fallback,A=i.mode,d=t.child,W=d.sibling;var K={mode:"hidden",children:u.children};return!(A&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=K,i.deletions=null):(u=sr(d,K),u.subtreeFlags=d.subtreeFlags&14680064),W!==null?h=sr(W,h):(h=Ir(h,A,s,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,A=t.child.memoizedState,A=A===null?Qu(s):{baseLanes:A.baseLanes|s,cachePool:null,transitions:A.transitions},h.memoizedState=A,h.childLanes=t.childLanes&~s,i.memoizedState=Zu,u}return h=t.child,t=h.sibling,u=sr(h,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=s),u.return=i,u.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=u,i.memoizedState=null,u}function Ju(t,i){return i=Ya({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ua(t,i,s,u){return u!==null&&bu(u),mo(i,t.child,null,s),t=Ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function d_(t,i,s,u,d,h,A){if(s)return i.flags&256?(i.flags&=-257,u=qu(Error(n(422))),Ua(t,i,A,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=u.fallback,d=i.mode,u=Ya({mode:"visible",children:u.children},d,0,null),h=Ir(h,d,A,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,i.mode&1&&mo(i,t.child,null,A),i.child.memoizedState=Qu(A),i.memoizedState=Zu,h);if(!(i.mode&1))return Ua(t,i,A,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var W=u.dgst;return u=W,h=Error(n(419)),u=qu(h,u,void 0),Ua(t,i,A,u)}if(W=(A&t.childLanes)!==0,bn||W){if(u=nn,u!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|A)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Ei(t,d),ti(u,t,d,-1))}return mc(),u=qu(Error(n(421))),Ua(t,i,A,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=T_.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,On=$i(d.nextSibling),Un=i,zt=!0,Zn=null,t!==null&&(Bn[Hn++]=Si,Bn[Hn++]=Mi,Bn[Hn++]=Tr,Si=t.id,Mi=t.overflow,Tr=i),i=Ju(i,u.children),i.flags|=4096,i)}function sp(t,i,s){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Pu(t.return,i,s)}function ec(t,i,s,u,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=s,h.tailMode=d)}function ap(t,i,s){var u=i.pendingProps,d=u.revealOrder,h=u.tail;if(xn(t,i,u.children,s),u=Bt.current,u&2)u=u&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sp(t,s,i);else if(t.tag===19)sp(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(It(Bt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&Ca(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),ec(i,!1,d,s,h);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ca(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}ec(i,!0,s,null,h);break;case"together":ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oa(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ti(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=sr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=sr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function h_(t,i,s){switch(i.tag){case 3:ip(i),po();break;case 5:Sh(i);break;case 1:Tn(i.type)&&_a(i);break;case 4:Nu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(wa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Bt,Bt.current&1),i.flags|=128,null):s&i.child.childLanes?op(t,i,s):(It(Bt,Bt.current&1),t=Ti(t,i,s),t!==null?t.sibling:null);It(Bt,Bt.current&1);break;case 19:if(u=(s&i.childLanes)!==0,t.flags&128){if(u)return ap(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,ep(t,i,s)}return Ti(t,i,s)}var lp,tc,up,cp;lp=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},tc=function(){},up=function(t,i,s,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,Cr(fi.current);var h=null;switch(s){case"input":d=X(t,d),u=X(t,u),h=[];break;case"select":d=v({},d,{value:void 0}),u=v({},u,{value:void 0}),h=[];break;case"textarea":d=R(t,d),u=R(t,u),h=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=ma)}vt(s,u);var A;s=null;for(fe in d)if(!u.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var W=d[fe];for(A in W)W.hasOwnProperty(A)&&(s||(s={}),s[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(a.hasOwnProperty(fe)?h||(h=[]):(h=h||[]).push(fe,null));for(fe in u){var K=u[fe];if(W=d!=null?d[fe]:void 0,u.hasOwnProperty(fe)&&K!==W&&(K!=null||W!=null))if(fe==="style")if(W){for(A in W)!W.hasOwnProperty(A)||K&&K.hasOwnProperty(A)||(s||(s={}),s[A]="");for(A in K)K.hasOwnProperty(A)&&W[A]!==K[A]&&(s||(s={}),s[A]=K[A])}else s||(h||(h=[]),h.push(fe,s)),s=K;else fe==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,W=W?W.__html:void 0,K!=null&&W!==K&&(h=h||[]).push(fe,K)):fe==="children"?typeof K!="string"&&typeof K!="number"||(h=h||[]).push(fe,""+K):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(a.hasOwnProperty(fe)?(K!=null&&fe==="onScroll"&&Ot("scroll",t),h||W===K||(h=[])):(h=h||[]).push(fe,K))}s&&(h=h||[]).push("style",s);var fe=h;(i.updateQueue=fe)&&(i.flags|=4)}},cp=function(t,i,s,u){s!==u&&(i.flags|=4)};function ws(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,u=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=s,i}function p_(t,i,s){var u=i.pendingProps;switch(Eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Tn(i.type)&&va(),hn(i),null;case 3:return u=i.stateNode,_o(),Ft(wn),Ft(fn),Ou(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Ma(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Zn!==null&&(dc(Zn),Zn=null))),tc(t,i),hn(i),null;case 5:Iu(i);var d=Cr(ys.current);if(s=i.type,t!==null&&i.stateNode!=null)up(t,i,s,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Cr(fi.current),Ma(i)){u=i.stateNode,s=i.type;var h=i.memoizedProps;switch(u[ci]=i,u[ps]=h,t=(i.mode&1)!==0,s){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<fs.length;d++)Ot(fs[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":ct(u,h),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",u);break;case"textarea":le(u,h),Ot("invalid",u)}vt(s,h),d=null;for(var A in h)if(h.hasOwnProperty(A)){var W=h[A];A==="children"?typeof W=="string"?u.textContent!==W&&(h.suppressHydrationWarning!==!0&&pa(u.textContent,W,t),d=["children",W]):typeof W=="number"&&u.textContent!==""+W&&(h.suppressHydrationWarning!==!0&&pa(u.textContent,W,t),d=["children",""+W]):a.hasOwnProperty(A)&&W!=null&&A==="onScroll"&&Ot("scroll",u)}switch(s){case"input":Qe(u),Pe(u,h,!0);break;case"textarea":Qe(u),xe(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=ma)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ge(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=A.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=A.createElement(s,{is:u.is}):(t=A.createElement(s),s==="select"&&(A=t,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):t=A.createElementNS(t,s),t[ci]=i,t[ps]=u,lp(t,i,!1,!1),i.stateNode=t;e:{switch(A=ft(s,u),s){case"dialog":Ot("cancel",t),Ot("close",t),d=u;break;case"iframe":case"object":case"embed":Ot("load",t),d=u;break;case"video":case"audio":for(d=0;d<fs.length;d++)Ot(fs[d],t);d=u;break;case"source":Ot("error",t),d=u;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),d=u;break;case"details":Ot("toggle",t),d=u;break;case"input":ct(t,u),d=X(t,u),Ot("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=v({},u,{value:void 0}),Ot("invalid",t);break;case"textarea":le(t,u),d=R(t,u),Ot("invalid",t);break;default:d=u}vt(s,d),W=d;for(h in W)if(W.hasOwnProperty(h)){var K=W[h];h==="style"?st(t,K):h==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&Ve(t,K)):h==="children"?typeof K=="string"?(s!=="textarea"||K!=="")&&gt(t,K):typeof K=="number"&&gt(t,""+K):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?K!=null&&h==="onScroll"&&Ot("scroll",t):K!=null&&G(t,h,K,A))}switch(s){case"input":Qe(t),Pe(t,u,!1);break;case"textarea":Qe(t),xe(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ve(u.value));break;case"select":t.multiple=!!u.multiple,h=u.value,h!=null?z(t,!!u.multiple,h,!1):u.defaultValue!=null&&z(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ma)}switch(s){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)cp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(s=Cr(ys.current),Cr(fi.current),Ma(i)){if(u=i.stateNode,s=i.memoizedProps,u[ci]=i,(h=u.nodeValue!==s)&&(t=Un,t!==null))switch(t.tag){case 3:pa(u.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(u.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else u=(s.nodeType===9?s:s.ownerDocument).createTextNode(u),u[ci]=i,i.stateNode=u}return hn(i),null;case 13:if(Ft(Bt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&On!==null&&i.mode&1&&!(i.flags&128))hh(),po(),i.flags|=98560,h=!1;else if(h=Ma(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else po(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else Zn!==null&&(dc(Zn),Zn=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(t===null||Bt.current&1?Qt===0&&(Qt=3):mc())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return _o(),tc(t,i),t===null&&ds(i.stateNode.containerInfo),hn(i),null;case 10:return Ru(i.type._context),hn(i),null;case 17:return Tn(i.type)&&va(),hn(i),null;case 19:if(Ft(Bt),h=i.memoizedState,h===null)return hn(i),null;if(u=(i.flags&128)!==0,A=h.rendering,A===null)if(u)ws(h,!1);else{if(Qt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(A=Ca(t),A!==null){for(i.flags|=128,ws(h,!1),u=A.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=s,s=i.child;s!==null;)h=s,t=u,h.flags&=14680066,A=h.alternate,A===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=A.childLanes,h.lanes=A.lanes,h.child=A.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=A.memoizedProps,h.memoizedState=A.memoizedState,h.updateQueue=A.updateQueue,h.type=A.type,t=A.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return It(Bt,Bt.current&1|2),i.child}t=t.sibling}h.tail!==null&&J()>Mo&&(i.flags|=128,u=!0,ws(h,!1),i.lanes=4194304)}else{if(!u)if(t=Ca(A),t!==null){if(i.flags|=128,u=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),ws(h,!0),h.tail===null&&h.tailMode==="hidden"&&!A.alternate&&!zt)return hn(i),null}else 2*J()-h.renderingStartTime>Mo&&s!==1073741824&&(i.flags|=128,u=!0,ws(h,!1),i.lanes=4194304);h.isBackwards?(A.sibling=i.child,i.child=A):(s=h.last,s!==null?s.sibling=A:i.child=A,h.last=A)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=J(),i.sibling=null,s=Bt.current,It(Bt,u?s&1|2:s&1),i):(hn(i),null);case 22:case 23:return pc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Fn&1073741824&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function m_(t,i){switch(Eu(i),i.tag){case 1:return Tn(i.type)&&va(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _o(),Ft(wn),Ft(fn),Ou(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Iu(i),null;case 13:if(Ft(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));po()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return _o(),null;case 10:return Ru(i.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Fa=!1,pn=!1,g_=typeof WeakSet=="function"?WeakSet:Set,je=null;function xo(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(u){Gt(t,i,u)}else s.current=null}function nc(t,i,s){try{s()}catch(u){Gt(t,i,u)}}var fp=!1;function v_(t,i){if(pu=ia,t=Gd(),su(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var d=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var A=0,W=-1,K=-1,fe=0,Ee=0,we=t,Me=null;t:for(;;){for(var ze;we!==s||d!==0&&we.nodeType!==3||(W=A+d),we!==h||u!==0&&we.nodeType!==3||(K=A+u),we.nodeType===3&&(A+=we.nodeValue.length),(ze=we.firstChild)!==null;)Me=we,we=ze;for(;;){if(we===t)break t;if(Me===s&&++fe===d&&(W=A),Me===h&&++Ee===u&&(K=A),(ze=we.nextSibling)!==null)break;we=Me,Me=we.parentNode}we=ze}s=W===-1||K===-1?null:{start:W,end:K}}else s=null}s=s||{start:0,end:0}}else s=null;for(mu={focusedElem:t,selectionRange:s},ia=!1,je=i;je!==null;)if(i=je,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,je=t;else for(;je!==null;){i=je;try{var Ye=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var $e=Ye.memoizedProps,jt=Ye.memoizedState,ae=i.stateNode,ee=ae.getSnapshotBeforeUpdate(i.elementType===i.type?$e:Qn(i.type,$e),jt);ae.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Gt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,je=t;break}je=i.return}return Ye=fp,fp=!1,Ye}function Ts(t,i,s){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&nc(i,s,h)}d=d.next}while(d!==u)}}function ka(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var u=s.create;s.destroy=u()}s=s.next}while(s!==i)}}function ic(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function dp(t){var i=t.alternate;i!==null&&(t.alternate=null,dp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[ps],delete i[yu],delete i[Jv],delete i[e_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hp(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ma));else if(u!==4&&(t=t.child,t!==null))for(rc(t,i,s),t=t.sibling;t!==null;)rc(t,i,s),t=t.sibling}function oc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(oc(t,i,s),t=t.sibling;t!==null;)oc(t,i,s),t=t.sibling}var an=null,Jn=!1;function tr(t,i,s){for(s=s.child;s!==null;)mp(t,i,s),s=s.sibling}function mp(t,i,s){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(et,s)}catch{}switch(s.tag){case 5:pn||xo(s,i);case 6:var u=an,d=Jn;an=null,tr(t,i,s),an=u,Jn=d,an!==null&&(Jn?(t=an,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):an.removeChild(s.stateNode));break;case 18:an!==null&&(Jn?(t=an,s=s.stateNode,t.nodeType===8?_u(t.parentNode,s):t.nodeType===1&&_u(t,s),is(t)):_u(an,s.stateNode));break;case 4:u=an,d=Jn,an=s.stateNode.containerInfo,Jn=!0,tr(t,i,s),an=u,Jn=d;break;case 0:case 11:case 14:case 15:if(!pn&&(u=s.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var h=d,A=h.destroy;h=h.tag,A!==void 0&&(h&2||h&4)&&nc(s,i,A),d=d.next}while(d!==u)}tr(t,i,s);break;case 1:if(!pn&&(xo(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=s.memoizedProps,u.state=s.memoizedState,u.componentWillUnmount()}catch(W){Gt(s,i,W)}tr(t,i,s);break;case 21:tr(t,i,s);break;case 22:s.mode&1?(pn=(u=pn)||s.memoizedState!==null,tr(t,i,s),pn=u):tr(t,i,s);break;default:tr(t,i,s)}}function gp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new g_),i.forEach(function(u){var d=b_.bind(null,t,u);s.has(u)||(s.add(u),u.then(d,d))})}}function ei(t,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var d=s[u];try{var h=t,A=i,W=A;e:for(;W!==null;){switch(W.tag){case 5:an=W.stateNode,Jn=!1;break e;case 3:an=W.stateNode.containerInfo,Jn=!0;break e;case 4:an=W.stateNode.containerInfo,Jn=!0;break e}W=W.return}if(an===null)throw Error(n(160));mp(h,A,d),an=null,Jn=!1;var K=d.alternate;K!==null&&(K.return=null),d.return=null}catch(fe){Gt(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)vp(i,t),i=i.sibling}function vp(t,i){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(i,t),hi(t),u&4){try{Ts(3,t,t.return),ka(3,t)}catch($e){Gt(t,t.return,$e)}try{Ts(5,t,t.return)}catch($e){Gt(t,t.return,$e)}}break;case 1:ei(i,t),hi(t),u&512&&s!==null&&xo(s,s.return);break;case 5:if(ei(i,t),hi(t),u&512&&s!==null&&xo(s,s.return),t.flags&32){var d=t.stateNode;try{gt(d,"")}catch($e){Gt(t,t.return,$e)}}if(u&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,A=s!==null?s.memoizedProps:h,W=t.type,K=t.updateQueue;if(t.updateQueue=null,K!==null)try{W==="input"&&h.type==="radio"&&h.name!=null&&Je(d,h),ft(W,A);var fe=ft(W,h);for(A=0;A<K.length;A+=2){var Ee=K[A],we=K[A+1];Ee==="style"?st(d,we):Ee==="dangerouslySetInnerHTML"?Ve(d,we):Ee==="children"?gt(d,we):G(d,Ee,we,fe)}switch(W){case"input":De(d,h);break;case"textarea":ye(d,h);break;case"select":var Me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var ze=h.value;ze!=null?z(d,!!h.multiple,ze,!1):Me!==!!h.multiple&&(h.defaultValue!=null?z(d,!!h.multiple,h.defaultValue,!0):z(d,!!h.multiple,h.multiple?[]:"",!1))}d[ps]=h}catch($e){Gt(t,t.return,$e)}}break;case 6:if(ei(i,t),hi(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch($e){Gt(t,t.return,$e)}}break;case 3:if(ei(i,t),hi(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{is(i.containerInfo)}catch($e){Gt(t,t.return,$e)}break;case 4:ei(i,t),hi(t);break;case 13:ei(i,t),hi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(lc=J())),u&4&&gp(t);break;case 22:if(Ee=s!==null&&s.memoizedState!==null,t.mode&1?(pn=(fe=pn)||Ee,ei(i,t),pn=fe):ei(i,t),hi(t),u&8192){if(fe=t.memoizedState!==null,(t.stateNode.isHidden=fe)&&!Ee&&t.mode&1)for(je=t,Ee=t.child;Ee!==null;){for(we=je=Ee;je!==null;){switch(Me=je,ze=Me.child,Me.tag){case 0:case 11:case 14:case 15:Ts(4,Me,Me.return);break;case 1:xo(Me,Me.return);var Ye=Me.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=Me,s=Me.return;try{i=u,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch($e){Gt(u,s,$e)}}break;case 5:xo(Me,Me.return);break;case 22:if(Me.memoizedState!==null){xp(we);continue}}ze!==null?(ze.return=Me,je=ze):xp(we)}Ee=Ee.sibling}e:for(Ee=null,we=t;;){if(we.tag===5){if(Ee===null){Ee=we;try{d=we.stateNode,fe?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(W=we.stateNode,K=we.memoizedProps.style,A=K!=null&&K.hasOwnProperty("display")?K.display:null,W.style.display=nt("display",A))}catch($e){Gt(t,t.return,$e)}}}else if(we.tag===6){if(Ee===null)try{we.stateNode.nodeValue=fe?"":we.memoizedProps}catch($e){Gt(t,t.return,$e)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;Ee===we&&(Ee=null),we=we.return}Ee===we&&(Ee=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:ei(i,t),hi(t),u&4&&gp(t);break;case 21:break;default:ei(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(hp(s)){var u=s;break e}s=s.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(gt(d,""),u.flags&=-33);var h=pp(t);oc(t,h,d);break;case 3:case 4:var A=u.stateNode.containerInfo,W=pp(t);rc(t,W,A);break;default:throw Error(n(161))}}catch(K){Gt(t,t.return,K)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function __(t,i,s){je=t,_p(t)}function _p(t,i,s){for(var u=(t.mode&1)!==0;je!==null;){var d=je,h=d.child;if(d.tag===22&&u){var A=d.memoizedState!==null||Fa;if(!A){var W=d.alternate,K=W!==null&&W.memoizedState!==null||pn;W=Fa;var fe=pn;if(Fa=A,(pn=K)&&!fe)for(je=d;je!==null;)A=je,K=A.child,A.tag===22&&A.memoizedState!==null?Sp(d):K!==null?(K.return=A,je=K):Sp(d);for(;h!==null;)je=h,_p(h),h=h.sibling;je=d,Fa=W,pn=fe}yp(t)}else d.subtreeFlags&8772&&h!==null?(h.return=d,je=h):yp(t)}}function yp(t){for(;je!==null;){var i=je;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:pn||ka(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!pn)if(s===null)u.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:Qn(i.type,s.memoizedProps);u.componentDidUpdate(d,s.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&xh(i,h,u);break;case 3:var A=i.updateQueue;if(A!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}xh(i,A,s)}break;case 5:var W=i.stateNode;if(s===null&&i.flags&4){s=W;var K=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&s.focus();break;case"img":K.src&&(s.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Ee=fe.memoizedState;if(Ee!==null){var we=Ee.dehydrated;we!==null&&is(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&ic(i)}catch(Me){Gt(i,i.return,Me)}}if(i===t){je=null;break}if(s=i.sibling,s!==null){s.return=i.return,je=s;break}je=i.return}}function xp(t){for(;je!==null;){var i=je;if(i===t){je=null;break}var s=i.sibling;if(s!==null){s.return=i.return,je=s;break}je=i.return}}function Sp(t){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{ka(4,i)}catch(K){Gt(i,s,K)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(K){Gt(i,d,K)}}var h=i.return;try{ic(i)}catch(K){Gt(i,h,K)}break;case 5:var A=i.return;try{ic(i)}catch(K){Gt(i,A,K)}}}catch(K){Gt(i,i.return,K)}if(i===t){je=null;break}var W=i.sibling;if(W!==null){W.return=i.return,je=W;break}je=i.return}}var y_=Math.ceil,za=k.ReactCurrentDispatcher,sc=k.ReactCurrentOwner,Wn=k.ReactCurrentBatchConfig,wt=0,nn=null,Yt=null,ln=0,Fn=0,So=Ki(0),Qt=0,bs=null,Pr=0,Ba=0,ac=0,As=null,An=null,lc=0,Mo=1/0,bi=null,Ha=!1,uc=null,nr=null,Va=!1,ir=null,Ga=0,Cs=0,cc=null,Wa=-1,ja=0;function Sn(){return wt&6?J():Wa!==-1?Wa:Wa=J()}function rr(t){return t.mode&1?wt&2&&ln!==0?ln&-ln:n_.transition!==null?(ja===0&&(ja=yn()),ja):(t=yt,t!==0||(t=window.event,t=t===void 0?16:Ed(t.type)),t):1}function ti(t,i,s,u){if(50<Cs)throw Cs=0,cc=null,Error(n(185));Wt(t,s,u),(!(wt&2)||t!==nn)&&(t===nn&&(!(wt&2)&&(Ba|=s),Qt===4&&or(t,ln)),Cn(t,u),s===1&&wt===0&&!(i.mode&1)&&(Mo=J()+500,ya&&Qi()))}function Cn(t,i){var s=t.callbackNode;Sr(t,i);var u=$n(t,t===nn?ln:0);if(u===0)s!==null&&ie(s),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(s!=null&&ie(s),i===1)t.tag===0?t_(Ep.bind(null,t)):lh(Ep.bind(null,t)),Zv(function(){!(wt&6)&&Qi()}),s=null;else{switch(md(u)){case 1:s=Ie;break;case 4:s=He;break;case 16:s=We;break;case 536870912:s=lt;break;default:s=We}s=Lp(s,Mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Mp(t,i){if(Wa=-1,ja=0,wt&6)throw Error(n(327));var s=t.callbackNode;if(Eo()&&t.callbackNode!==s)return null;var u=$n(t,t===nn?ln:0);if(u===0)return null;if(u&30||u&t.expiredLanes||i)i=Xa(t,u);else{i=u;var d=wt;wt|=2;var h=Tp();(nn!==t||ln!==i)&&(bi=null,Mo=J()+500,Dr(t,i));do try{M_();break}catch(W){wp(t,W)}while(!0);Cu(),za.current=h,wt=d,Yt!==null?i=0:(nn=null,ln=0,i=Qt)}if(i!==0){if(i===2&&(d=Lt(t),d!==0&&(u=d,i=fc(t,d))),i===1)throw s=bs,Dr(t,0),or(t,u),Cn(t,J()),s;if(i===6)or(t,u);else{if(d=t.current.alternate,!(u&30)&&!x_(d)&&(i=Xa(t,u),i===2&&(h=Lt(t),h!==0&&(u=h,i=fc(t,h))),i===1))throw s=bs,Dr(t,0),or(t,u),Cn(t,J()),s;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,An,bi);break;case 3:if(or(t,u),(u&130023424)===u&&(i=lc+500-J(),10<i)){if($n(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){Sn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=vu(Nr.bind(null,t,An,bi),i);break}Nr(t,An,bi);break;case 4:if(or(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var A=31-bt(u);h=1<<A,A=i[A],A>d&&(d=A),u&=~h}if(u=d,u=J()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*y_(u/1960))-u,10<u){t.timeoutHandle=vu(Nr.bind(null,t,An,bi),u);break}Nr(t,An,bi);break;case 5:Nr(t,An,bi);break;default:throw Error(n(329))}}}return Cn(t,J()),t.callbackNode===s?Mp.bind(null,t):null}function fc(t,i){var s=As;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Xa(t,i),t!==2&&(i=An,An=s,i!==null&&dc(i)),t}function dc(t){An===null?An=t:An.push.apply(An,t)}function x_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var u=0;u<s.length;u++){var d=s[u],h=d.getSnapshot;d=d.value;try{if(!Kn(h(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~ac,i&=~Ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-bt(i),u=1<<s;t[s]=-1,i&=~u}}function Ep(t){if(wt&6)throw Error(n(327));Eo();var i=$n(t,0);if(!(i&1))return Cn(t,J()),null;var s=Xa(t,i);if(t.tag!==0&&s===2){var u=Lt(t);u!==0&&(i=u,s=fc(t,u))}if(s===1)throw s=bs,Dr(t,0),or(t,i),Cn(t,J()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,An,bi),Cn(t,J()),null}function hc(t,i){var s=wt;wt|=1;try{return t(i)}finally{wt=s,wt===0&&(Mo=J()+500,ya&&Qi())}}function Lr(t){ir!==null&&ir.tag===0&&!(wt&6)&&Eo();var i=wt;wt|=1;var s=Wn.transition,u=yt;try{if(Wn.transition=null,yt=1,t)return t()}finally{yt=u,Wn.transition=s,wt=i,!(wt&6)&&Qi()}}function pc(){Fn=So.current,Ft(So)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Kv(s)),Yt!==null)for(s=Yt.return;s!==null;){var u=s;switch(Eu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&va();break;case 3:_o(),Ft(wn),Ft(fn),Ou();break;case 5:Iu(u);break;case 4:_o();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Ru(u.type._context);break;case 22:case 23:pc()}s=s.return}if(nn=t,Yt=t=sr(t.current,null),ln=Fn=i,Qt=0,bs=null,ac=Ba=Pr=0,An=As=null,Ar!==null){for(i=0;i<Ar.length;i++)if(s=Ar[i],u=s.interleaved,u!==null){s.interleaved=null;var d=u.next,h=s.pending;if(h!==null){var A=h.next;h.next=d,u.next=A}s.pending=u}Ar=null}return t}function wp(t,i){do{var s=Yt;try{if(Cu(),Ra.current=Na,Pa){for(var u=Ht.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Pa=!1}if(Rr=0,tn=Zt=Ht=null,xs=!1,Ss=0,sc.current=null,s===null||s.return===null){Qt=1,bs=i,Yt=null;break}e:{var h=t,A=s.return,W=s,K=i;if(i=ln,W.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var fe=K,Ee=W,we=Ee.tag;if(!(Ee.mode&1)&&(we===0||we===11||we===15)){var Me=Ee.alternate;Me?(Ee.updateQueue=Me.updateQueue,Ee.memoizedState=Me.memoizedState,Ee.lanes=Me.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var ze=$h(A);if(ze!==null){ze.flags&=-257,Kh(ze,A,W,h,i),ze.mode&1&&Yh(h,fe,i),i=ze,K=fe;var Ye=i.updateQueue;if(Ye===null){var $e=new Set;$e.add(K),i.updateQueue=$e}else Ye.add(K);break e}else{if(!(i&1)){Yh(h,fe,i),mc();break e}K=Error(n(426))}}else if(zt&&W.mode&1){var jt=$h(A);if(jt!==null){!(jt.flags&65536)&&(jt.flags|=256),Kh(jt,A,W,h,i),bu(yo(K,W));break e}}h=K=yo(K,W),Qt!==4&&(Qt=2),As===null?As=[h]:As.push(h),h=A;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var ae=Xh(h,K,i);yh(h,ae);break e;case 1:W=K;var ee=h.type,ue=h.stateNode;if(!(h.flags&128)&&(typeof ee.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(nr===null||!nr.has(ue)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ae=qh(h,W,i);yh(h,Ae);break e}}h=h.return}while(h!==null)}Ap(s)}catch(Ke){i=Ke,Yt===s&&s!==null&&(Yt=s=s.return);continue}break}while(!0)}function Tp(){var t=za.current;return za.current=Na,t===null?Na:t}function mc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),nn===null||!(Pr&268435455)&&!(Ba&268435455)||or(nn,ln)}function Xa(t,i){var s=wt;wt|=2;var u=Tp();(nn!==t||ln!==i)&&(bi=null,Dr(t,i));do try{S_();break}catch(d){wp(t,d)}while(!0);if(Cu(),wt=s,za.current=u,Yt!==null)throw Error(n(261));return nn=null,ln=0,Qt}function S_(){for(;Yt!==null;)bp(Yt)}function M_(){for(;Yt!==null&&!de();)bp(Yt)}function bp(t){var i=Pp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?Ap(t):Yt=i,sc.current=null}function Ap(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=m_(s,i),s!==null){s.flags&=32767,Yt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}else if(s=p_(s,i,Fn),s!==null){Yt=s;return}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Nr(t,i,s){var u=yt,d=Wn.transition;try{Wn.transition=null,yt=1,E_(t,i,s,u)}finally{Wn.transition=d,yt=u}return null}function E_(t,i,s,u){do Eo();while(ir!==null);if(wt&6)throw Error(n(327));s=t.finishedWork;var d=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(cn(t,h),t===nn&&(Yt=nn=null,ln=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Va||(Va=!0,Lp(We,function(){return Eo(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Wn.transition,Wn.transition=null;var A=yt;yt=1;var W=wt;wt|=4,sc.current=null,v_(t,s),vp(s,t),Gv(mu),ia=!!pu,mu=pu=null,t.current=s,__(s),he(),wt=W,yt=A,Wn.transition=h}else t.current=s;if(Va&&(Va=!1,ir=t,Ga=d),h=t.pendingLanes,h===0&&(nr=null),Tt(s.stateNode),Cn(t,J()),i!==null)for(u=t.onRecoverableError,s=0;s<i.length;s++)d=i[s],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ha)throw Ha=!1,t=uc,uc=null,t;return Ga&1&&t.tag!==0&&Eo(),h=t.pendingLanes,h&1?t===cc?Cs++:(Cs=0,cc=t):Cs=0,Qi(),null}function Eo(){if(ir!==null){var t=md(Ga),i=Wn.transition,s=yt;try{if(Wn.transition=null,yt=16>t?16:t,ir===null)var u=!1;else{if(t=ir,ir=null,Ga=0,wt&6)throw Error(n(331));var d=wt;for(wt|=4,je=t.current;je!==null;){var h=je,A=h.child;if(je.flags&16){var W=h.deletions;if(W!==null){for(var K=0;K<W.length;K++){var fe=W[K];for(je=fe;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:Ts(8,Ee,h)}var we=Ee.child;if(we!==null)we.return=Ee,je=we;else for(;je!==null;){Ee=je;var Me=Ee.sibling,ze=Ee.return;if(dp(Ee),Ee===fe){je=null;break}if(Me!==null){Me.return=ze,je=Me;break}je=ze}}}var Ye=h.alternate;if(Ye!==null){var $e=Ye.child;if($e!==null){Ye.child=null;do{var jt=$e.sibling;$e.sibling=null,$e=jt}while($e!==null)}}je=h}}if(h.subtreeFlags&2064&&A!==null)A.return=h,je=A;else e:for(;je!==null;){if(h=je,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Ts(9,h,h.return)}var ae=h.sibling;if(ae!==null){ae.return=h.return,je=ae;break e}je=h.return}}var ee=t.current;for(je=ee;je!==null;){A=je;var ue=A.child;if(A.subtreeFlags&2064&&ue!==null)ue.return=A,je=ue;else e:for(A=ee;je!==null;){if(W=je,W.flags&2048)try{switch(W.tag){case 0:case 11:case 15:ka(9,W)}}catch(Ke){Gt(W,W.return,Ke)}if(W===A){je=null;break e}var Ae=W.sibling;if(Ae!==null){Ae.return=W.return,je=Ae;break e}je=W.return}}if(wt=d,Qi(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(et,t)}catch{}u=!0}return u}finally{yt=s,Wn.transition=i}}return!1}function Cp(t,i,s){i=yo(s,i),i=Xh(t,i,1),t=er(t,i,1),i=Sn(),t!==null&&(Wt(t,1,i),Cn(t,i))}function Gt(t,i,s){if(t.tag===3)Cp(t,t,s);else for(;i!==null;){if(i.tag===3){Cp(i,t,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(nr===null||!nr.has(u))){t=yo(s,t),t=qh(i,t,1),i=er(i,t,1),t=Sn(),i!==null&&(Wt(i,1,t),Cn(i,t));break}}i=i.return}}function w_(t,i,s){var u=t.pingCache;u!==null&&u.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&s,nn===t&&(ln&s)===s&&(Qt===4||Qt===3&&(ln&130023424)===ln&&500>J()-lc?Dr(t,0):ac|=s),Cn(t,i)}function Rp(t,i){i===0&&(t.mode&1?(i=xt,xt<<=1,!(xt&130023424)&&(xt=4194304)):i=1);var s=Sn();t=Ei(t,i),t!==null&&(Wt(t,i,s),Cn(t,s))}function T_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Rp(t,s)}function b_(t,i){var s=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Rp(t,s)}var Pp;Pp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)bn=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return bn=!1,h_(t,i,s);bn=!!(t.flags&131072)}else bn=!1,zt&&i.flags&1048576&&uh(i,Sa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Oa(t,i),t=i.pendingProps;var d=co(i,fn.current);vo(i,s),d=zu(null,i,u,t,d,s);var h=Bu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(u)?(h=!0,_a(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Du(i),d.updater=Ia,i.stateNode=d,d._reactInternals=i,Xu(i,u,t,s),i=Ku(null,i,u,!0,h,s)):(i.tag=0,zt&&h&&Mu(i),xn(null,i,d,s),i=i.child),i;case 16:u=i.elementType;e:{switch(Oa(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=C_(u),t=Qn(u,t),d){case 0:i=$u(null,i,u,t,s);break e;case 1:i=np(null,i,u,t,s);break e;case 11:i=Zh(null,i,u,t,s);break e;case 14:i=Qh(null,i,u,Qn(u.type,t),s);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Qn(u,d),$u(t,i,u,d,s);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Qn(u,d),np(t,i,u,d,s);case 3:e:{if(ip(i),t===null)throw Error(n(387));u=i.pendingProps,h=i.memoizedState,d=h.element,_h(t,i),Aa(i,u,null,s);var A=i.memoizedState;if(u=A.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=yo(Error(n(423)),i),i=rp(t,i,u,s,d);break e}else if(u!==d){d=yo(Error(n(424)),i),i=rp(t,i,u,s,d);break e}else for(On=$i(i.stateNode.containerInfo.firstChild),Un=i,zt=!0,Zn=null,s=gh(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(po(),u===d){i=Ti(t,i,s);break e}xn(t,i,u,s)}i=i.child}return i;case 5:return Sh(i),t===null&&Tu(i),u=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,A=d.children,gu(u,d)?A=null:h!==null&&gu(u,h)&&(i.flags|=32),tp(t,i),xn(t,i,A,s),i.child;case 6:return t===null&&Tu(i),null;case 13:return op(t,i,s);case 4:return Nu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=mo(i,null,u,s):xn(t,i,u,s),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Qn(u,d),Zh(t,i,u,d,s);case 7:return xn(t,i,i.pendingProps,s),i.child;case 8:return xn(t,i,i.pendingProps.children,s),i.child;case 12:return xn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,h=i.memoizedProps,A=d.value,It(wa,u._currentValue),u._currentValue=A,h!==null)if(Kn(h.value,A)){if(h.children===d.children&&!wn.current){i=Ti(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var W=h.dependencies;if(W!==null){A=h.child;for(var K=W.firstContext;K!==null;){if(K.context===u){if(h.tag===1){K=wi(-1,s&-s),K.tag=2;var fe=h.updateQueue;if(fe!==null){fe=fe.shared;var Ee=fe.pending;Ee===null?K.next=K:(K.next=Ee.next,Ee.next=K),fe.pending=K}}h.lanes|=s,K=h.alternate,K!==null&&(K.lanes|=s),Pu(h.return,s,i),W.lanes|=s;break}K=K.next}}else if(h.tag===10)A=h.type===i.type?null:h.child;else if(h.tag===18){if(A=h.return,A===null)throw Error(n(341));A.lanes|=s,W=A.alternate,W!==null&&(W.lanes|=s),Pu(A,s,i),A=h.sibling}else A=h.child;if(A!==null)A.return=h;else for(A=h;A!==null;){if(A===i){A=null;break}if(h=A.sibling,h!==null){h.return=A.return,A=h;break}A=A.return}h=A}xn(t,i,d.children,s),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,vo(i,s),d=Vn(d),u=u(d),i.flags|=1,xn(t,i,u,s),i.child;case 14:return u=i.type,d=Qn(u,i.pendingProps),d=Qn(u.type,d),Qh(t,i,u,d,s);case 15:return Jh(t,i,i.type,i.pendingProps,s);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Qn(u,d),Oa(t,i),i.tag=1,Tn(u)?(t=!0,_a(i)):t=!1,vo(i,s),Wh(i,u,d),Xu(i,u,d,s),Ku(null,i,u,!0,t,s);case 19:return ap(t,i,s);case 22:return ep(t,i,s)}throw Error(n(156,i.tag))};function Lp(t,i){return I(t,i)}function A_(t,i,s,u){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,s,u){return new A_(t,i,s,u)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C_(t){if(typeof t=="function")return gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$)return 11;if(t===te)return 14}return 2}function sr(t,i){var s=t.alternate;return s===null?(s=jn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function qa(t,i,s,u,d,h){var A=2;if(u=t,typeof t=="function")gc(t)&&(A=1);else if(typeof t=="string")A=5;else e:switch(t){case D:return Ir(s.children,d,h,i);case V:A=8,d|=8;break;case w:return t=jn(12,s,i,d|2),t.elementType=w,t.lanes=h,t;case F:return t=jn(13,s,i,d),t.elementType=F,t.lanes=h,t;case H:return t=jn(19,s,i,d),t.elementType=H,t.lanes=h,t;case _:return Ya(s,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m:A=10;break e;case U:A=9;break e;case $:A=11;break e;case te:A=14;break e;case Z:A=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(A,s,i,d),i.elementType=t,i.type=u,i.lanes=h,i}function Ir(t,i,s,u){return t=jn(7,t,u,i),t.lanes=s,t}function Ya(t,i,s,u){return t=jn(22,t,u,i),t.elementType=_,t.lanes=s,t.stateNode={isHidden:!1},t}function vc(t,i,s){return t=jn(6,t,null,i),t.lanes=s,t}function _c(t,i,s){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function R_(t,i,s,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function yc(t,i,s,u,d,h,A,W,K){return t=new R_(t,i,s,W,K),i===1?(i=1,h===!0&&(i|=8)):i=0,h=jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:u,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(h),t}function P_(t,i,s){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:t,containerInfo:i,implementation:s}}function Dp(t){if(!t)return Zi;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Tn(s))return sh(t,s,i)}return i}function Np(t,i,s,u,d,h,A,W,K){return t=yc(s,u,!0,t,d,h,A,W,K),t.context=Dp(null),s=t.current,u=Sn(),d=rr(s),h=wi(u,d),h.callback=i??null,er(s,h,d),t.current.lanes=d,Wt(t,d,u),Cn(t,u),t}function $a(t,i,s,u){var d=i.current,h=Sn(),A=rr(d);return s=Dp(s),i.context===null?i.context=s:i.pendingContext=s,i=wi(h,A),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=er(d,i,A),t!==null&&(ti(t,d,A,h),ba(t,d,A)),A}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function xc(t,i){Ip(t,i),(t=t.alternate)&&Ip(t,i)}function L_(){return null}var Up=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sc(t){this._internalRoot=t}Za.prototype.render=Sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$a(t,i,null,null)},Za.prototype.unmount=Sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){$a(null,t,null,null)}),i[yi]=null}};function Za(t){this._internalRoot=t}Za.prototype.unstable_scheduleHydration=function(t){if(t){var i=_d();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Xi.length&&i!==0&&i<Xi[s].priority;s++);Xi.splice(s,0,t),s===0&&Sd(t)}};function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Op(){}function D_(t,i,s,u,d){if(d){if(typeof u=="function"){var h=u;u=function(){var fe=Ka(A);h.call(fe)}}var A=Np(i,u,t,0,null,!1,!1,"",Op);return t._reactRootContainer=A,t[yi]=A.current,ds(t.nodeType===8?t.parentNode:t),Lr(),A}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var W=u;u=function(){var fe=Ka(K);W.call(fe)}}var K=yc(t,0,!1,null,null,!1,!1,"",Op);return t._reactRootContainer=K,t[yi]=K.current,ds(t.nodeType===8?t.parentNode:t),Lr(function(){$a(i,K,s,u)}),K}function Ja(t,i,s,u,d){var h=s._reactRootContainer;if(h){var A=h;if(typeof d=="function"){var W=d;d=function(){var K=Ka(A);W.call(K)}}$a(i,A,t,d)}else A=D_(s,i,t,d,u);return Ka(A)}gd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=sn(i.pendingLanes);s!==0&&(Mr(i,s|1),Cn(i,J()),!(wt&6)&&(Mo=J()+500,Qi()))}break;case 13:Lr(function(){var u=Ei(t,1);if(u!==null){var d=Sn();ti(u,t,1,d)}}),xc(t,1)}},ql=function(t){if(t.tag===13){var i=Ei(t,134217728);if(i!==null){var s=Sn();ti(i,t,134217728,s)}xc(t,134217728)}},vd=function(t){if(t.tag===13){var i=rr(t),s=Ei(t,i);if(s!==null){var u=Sn();ti(s,t,i,u)}xc(t,i)}},_d=function(){return yt},yd=function(t,i){var s=yt;try{return yt=t,i()}finally{yt=s}},Ne=function(t,i,s){switch(i){case"input":if(De(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==t&&u.form===t.form){var d=ga(u);if(!d)throw Error(n(90));Ge(u),De(u,d)}}}break;case"textarea":ye(t,s);break;case"select":i=s.value,i!=null&&z(t,!!s.multiple,i,!1)}},Ut=hc,Kt=Lr;var N_={usingClientEntryPoint:!1,Events:[ms,lo,ga,Oe,dt,hc]},Rs={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I_={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Js(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||L_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{et=el.inject(I_),ht=el}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_,Rn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mc(i))throw Error(n(200));return P_(t,i,null,s)},Rn.createRoot=function(t,i){if(!Mc(t))throw Error(n(299));var s=!1,u="",d=Up;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=yc(t,1,!1,null,null,s,!1,u,d),t[yi]=i.current,ds(t.nodeType===8?t.parentNode:t),new Sc(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Js(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Lr(t)},Rn.hydrate=function(t,i,s){if(!Qa(i))throw Error(n(200));return Ja(null,t,i,!0,s)},Rn.hydrateRoot=function(t,i,s){if(!Mc(t))throw Error(n(405));var u=s!=null&&s.hydratedSources||null,d=!1,h="",A=Up;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(A=s.onRecoverableError)),i=Np(i,null,t,1,s??null,d,!1,h,A),t[yi]=i.current,ds(t),u)for(t=0;t<u.length;t++)s=u[t],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new Za(i)},Rn.render=function(t,i,s){if(!Qa(i))throw Error(n(200));return Ja(null,t,i,!1,s)},Rn.unmountComponentAtNode=function(t){if(!Qa(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){Ja(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},Rn.unstable_batchedUpdates=hc,Rn.unstable_renderSubtreeIntoContainer=function(t,i,s,u){if(!Qa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ja(t,i,s,!1,u)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Wp;function G_(){if(Wp)return Tc.exports;Wp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Tc.exports=V_(),Tc.exports}var jp;function W_(){if(jp)return nl;jp=1;var o=G_();return nl.createRoot=o.createRoot,nl.hydrateRoot=o.hydrateRoot,nl}var j_=W_();const X_="/nimna-portfolio/assets/pic3-DOfSqDaG.png";var fg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xp=Yr.createContext&&Yr.createContext(fg),q_=["attr","size","title"];function Y_(o,e){if(o==null)return{};var n=$_(o,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(n[r]=o[r])}return n}function $_(o,e){if(o==null)return{};var n={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;n[r]=o[r]}return n}function Nl(){return Nl=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o},Nl.apply(this,arguments)}function qp(o,e){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),n.push.apply(n,r)}return n}function Il(o){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qp(Object(n),!0).forEach(function(r){K_(o,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):qp(Object(n)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(n,r))})}return o}function K_(o,e,n){return e=Z_(e),e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function Z_(o){var e=Q_(o,"string");return typeof e=="symbol"?e:e+""}function Q_(o,e){if(typeof o!="object"||!o)return o;var n=o[Symbol.toPrimitive];if(n!==void 0){var r=n.call(o,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function dg(o){return o&&o.map((e,n)=>Yr.createElement(e.tag,Il({key:n},e.attr),dg(e.child)))}function Hs(o){return e=>Yr.createElement(J_,Nl({attr:Il({},o.attr)},e),dg(o.child))}function J_(o){var e=n=>{var{attr:r,size:a,title:l}=o,c=Y_(o,q_),f=a||n.size||"1em",p;return n.className&&(p=n.className),o.className&&(p=(p?p+" ":"")+o.className),Yr.createElement("svg",Nl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:p,style:Il(Il({color:o.color||n.color},n.style),o.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Yr.createElement("title",null,l),o.children)};return Xp!==void 0?Yr.createElement(Xp.Consumer,null,n=>e(n)):e(fg)}function hg(o){return Hs({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"},child:[]}]})(o)}function pg(o){return Hs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"},child:[]}]})(o)}function mg(o){return Hs({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function gg(o){return Hs({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function e0(o){return Hs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(o)}function t0(){return se.jsxs("section",{id:"about",className:"bg-transparent text-white flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen p-8 lg:p-16 mt-6",children:[se.jsx("div",{className:"w-full lg:w-1/3 lg:h-130 overflow-hidden rounded-lg shadow-lg mr-5 mb-6 lg:mb-0",children:se.jsx("img",{src:X_,alt:"Undergraduate Student Hero Section",className:"w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"})}),se.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6",children:[se.jsx("br",{}),se.jsxs("p",{className:"text-lg lg:text-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent",children:["Undergraduate at NSBM Green University",se.jsx("br",{})]}),se.jsx("p",{className:"text-sm lg:text-lg bg-gray-900 bg-opacity-60 backdrop-blur-md p-4 rounded-lg shadow-md",children:"I am a dedicated undergraduate student with a passion for UX/UI design and web development. My focus is on blending creativity with functionality to build seamless and engaging user interfaces. With a strong attention to detail and a commitment to user-centered design, I have completed various design projects and personal coding endeavors. Continuously learning and adapting to the evolving digital landscape, I strive to create innovative, user-friendly solutions that improve the overall user experience."}),se.jsx("div",{className:"counter-wrap ftco-animate d-flex mt-md-3",children:se.jsxs("ul",{className:"social-icons list-unstyled float-md-left mt-5 flex space-x-4 justify-center lg:justify-start",children:[se.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"45px",height:"45px"},children:se.jsx("a",{href:"https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/","aria-label":"LinkedIn",children:se.jsx(gg,{style:{fontSize:"24px",color:"#fff"}})})}),se.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"45px",height:"45px"},children:se.jsx("a",{href:"https://www.behance.net/nimeshidilshara","aria-label":"Behance",children:se.jsx(hg,{style:{fontSize:"24px",color:"#fff"}})})}),se.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"45px",height:"45px"},children:se.jsx("a",{href:"https://dribbble.com/nimna7_","aria-label":"Dribbble",children:se.jsx(pg,{style:{fontSize:"24px",color:"#fff"}})})}),se.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"45px",height:"45px"},children:se.jsx("a",{href:"https://github.com/n-nimna","aria-label":"GitHub",children:se.jsx(mg,{style:{fontSize:"24px",color:"#fff"}})})})]})}),se.jsx("div",{className:"md:flex items-center justify-center mt-6",children:se.jsxs("a",{href:"/path-to-cv.pdf","aria-label":"Download CV",download:"Nimeshi_Dilshara_CV.pdf",className:"relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none",children:[se.jsx("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"}),se.jsxs("span",{className:"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2",children:[se.jsx(e0,{className:"mr-2"}),"Download CV"]})]})})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="171",n0=0,Yp=1,i0=2,vg=1,r0=2,Di=3,vr=0,Ln=1,Ni=2,mr=0,Bo=1,$p=2,Kp=3,Zp=4,o0=5,Wr=100,s0=101,a0=102,l0=103,u0=104,c0=200,f0=201,d0=202,h0=203,_f=204,yf=205,p0=206,m0=207,g0=208,v0=209,_0=210,y0=211,x0=212,S0=213,M0=214,xf=0,Sf=1,Mf=2,Go=3,Ef=4,wf=5,Tf=6,bf=7,_g=0,E0=1,w0=2,gr=0,T0=1,b0=2,A0=3,C0=4,R0=5,P0=6,L0=7,yg=300,Wo=301,jo=302,Af=303,Cf=304,Bl=306,Rf=1e3,Xr=1001,Pf=1002,ai=1003,D0=1004,il=1005,mi=1006,Cc=1007,qr=1008,ki=1009,xg=1010,Sg=1011,Bs=1012,ld=1013,Zr=1014,Ii=1015,Vs=1016,ud=1017,cd=1018,Xo=1020,Mg=35902,Eg=1021,wg=1022,si=1023,Tg=1024,bg=1025,Ho=1026,qo=1027,Ag=1028,fd=1029,Cg=1030,dd=1031,hd=1033,Al=33776,Cl=33777,Rl=33778,Pl=33779,Lf=35840,Df=35841,Nf=35842,If=35843,Uf=36196,Of=37492,Ff=37496,kf=37808,zf=37809,Bf=37810,Hf=37811,Vf=37812,Gf=37813,Wf=37814,jf=37815,Xf=37816,qf=37817,Yf=37818,$f=37819,Kf=37820,Zf=37821,Ll=36492,Qf=36494,Jf=36495,Rg=36283,ed=36284,td=36285,nd=36286,N0=3200,I0=3201,U0=0,O0=1,pr="",qn="srgb",Yo="srgb-linear",Ul="linear",Dt="srgb",wo=7680,Qp=519,F0=512,k0=513,z0=514,Pg=515,B0=516,H0=517,V0=518,G0=519,Jp=35044,em="300 es",Ui=2e3,Ol=2001;class Zo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,id=180/Math.PI;function Gs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[o&255]+mn[o>>8&255]+mn[o>>16&255]+mn[o>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function St(o,e,n){return Math.max(e,Math.min(n,o))}function W0(o,e){return(o%e+e)%e}function Pc(o,e,n){return(1-n)*o+n*e}function Ls(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,n=0){Nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,n,r,a,l,c,f,p,g){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,p,g)}set(e,n,r,a,l,c,f,p,g){const x=this.elements;return x[0]=e,x[1]=a,x[2]=f,x[3]=n,x[4]=l,x[5]=p,x[6]=r,x[7]=c,x[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[3],p=r[6],g=r[1],x=r[4],S=r[7],M=r[2],b=r[5],N=r[8],C=a[0],E=a[3],y=a[6],Y=a[1],G=a[4],k=a[7],L=a[2],P=a[5],D=a[8];return l[0]=c*C+f*Y+p*L,l[3]=c*E+f*G+p*P,l[6]=c*y+f*k+p*D,l[1]=g*C+x*Y+S*L,l[4]=g*E+x*G+S*P,l[7]=g*y+x*k+S*D,l[2]=M*C+b*Y+N*L,l[5]=M*E+b*G+N*P,l[8]=M*y+b*k+N*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],g=e[7],x=e[8];return n*c*x-n*f*g-r*l*x+r*f*p+a*l*g-a*c*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],g=e[7],x=e[8],S=x*c-f*g,M=f*p-x*l,b=g*l-c*p,N=n*S+r*M+a*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/N;return e[0]=S*C,e[1]=(a*g-x*r)*C,e[2]=(f*r-a*c)*C,e[3]=M*C,e[4]=(x*n-a*p)*C,e[5]=(a*l-f*n)*C,e[6]=b*C,e[7]=(r*p-g*n)*C,e[8]=(c*n-r*l)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,f){const p=Math.cos(l),g=Math.sin(l);return this.set(r*p,r*g,-r*(p*c+g*f)+c+e,-a*g,a*p,-a*(-g*c+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new pt;function Lg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Fl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function j0(){const o=Fl("canvas");return o.style.display="block",o}const tm={};function ko(o){o in tm||(tm[o]=!0,console.warn(o))}function X0(o,e,n){return new Promise(function(r,a){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function q0(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Y0(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){const o={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Fi(a.r),a.g=Fi(a.g),a.b=Fi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=Vo(a.r),a.g=Vo(a.g),a.b=Vo(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===pr?Ul:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Yo]:{primaries:e,whitePoint:r,transfer:Ul,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),o}const Ct=$0();function Fi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Vo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let To;class K0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{To===void 0&&(To=Fl("canvas")),To.width=e.width,To.height=e.height;const r=To.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=To}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Fi(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fi(n[r]/255)*255):n[r]=Fi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z0=0;class Dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Dc(a[c].image)):l.push(Dc(a[c]))}else l=Dc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Dc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?K0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q0=0;class Dn extends Zo{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=Xr,a=Xr,l=mi,c=qr,f=si,p=ki,g=Dn.DEFAULT_ANISOTROPY,x=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Gs(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case Pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case Pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=yg;Dn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const p=e.elements,g=p[0],x=p[4],S=p[8],M=p[1],b=p[5],N=p[9],C=p[2],E=p[6],y=p[10];if(Math.abs(x-M)<.01&&Math.abs(S-C)<.01&&Math.abs(N-E)<.01){if(Math.abs(x+M)<.1&&Math.abs(S+C)<.1&&Math.abs(N+E)<.1&&Math.abs(g+b+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const G=(g+1)/2,k=(b+1)/2,L=(y+1)/2,P=(x+M)/4,D=(S+C)/4,V=(N+E)/4;return G>k&&G>L?G<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(G),a=P/r,l=D/r):k>L?k<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(k),r=P/a,l=V/a):L<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(L),r=D/l,a=V/l),this.set(r,a,l,n),this}let Y=Math.sqrt((E-N)*(E-N)+(S-C)*(S-C)+(M-x)*(M-x));return Math.abs(Y)<.001&&(Y=1),this.x=(E-N)/Y,this.y=(S-C)/Y,this.z=(M-x)/Y,this.w=Math.acos((g+b+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J0 extends Zo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Dn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends J0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ng extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ey extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,f){let p=r[a+0],g=r[a+1],x=r[a+2],S=r[a+3];const M=l[c+0],b=l[c+1],N=l[c+2],C=l[c+3];if(f===0){e[n+0]=p,e[n+1]=g,e[n+2]=x,e[n+3]=S;return}if(f===1){e[n+0]=M,e[n+1]=b,e[n+2]=N,e[n+3]=C;return}if(S!==C||p!==M||g!==b||x!==N){let E=1-f;const y=p*M+g*b+x*N+S*C,Y=y>=0?1:-1,G=1-y*y;if(G>Number.EPSILON){const L=Math.sqrt(G),P=Math.atan2(L,y*Y);E=Math.sin(E*P)/L,f=Math.sin(f*P)/L}const k=f*Y;if(p=p*E+M*k,g=g*E+b*k,x=x*E+N*k,S=S*E+C*k,E===1-f){const L=1/Math.sqrt(p*p+g*g+x*x+S*S);p*=L,g*=L,x*=L,S*=L}}e[n]=p,e[n+1]=g,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,l,c){const f=r[a],p=r[a+1],g=r[a+2],x=r[a+3],S=l[c],M=l[c+1],b=l[c+2],N=l[c+3];return e[n]=f*N+x*S+p*b-g*M,e[n+1]=p*N+x*M+g*S-f*b,e[n+2]=g*N+x*b+f*M-p*S,e[n+3]=x*N-f*S-p*M-g*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,g=f(r/2),x=f(a/2),S=f(l/2),M=p(r/2),b=p(a/2),N=p(l/2);switch(c){case"XYZ":this._x=M*x*S+g*b*N,this._y=g*b*S-M*x*N,this._z=g*x*N+M*b*S,this._w=g*x*S-M*b*N;break;case"YXZ":this._x=M*x*S+g*b*N,this._y=g*b*S-M*x*N,this._z=g*x*N-M*b*S,this._w=g*x*S+M*b*N;break;case"ZXY":this._x=M*x*S-g*b*N,this._y=g*b*S+M*x*N,this._z=g*x*N+M*b*S,this._w=g*x*S-M*b*N;break;case"ZYX":this._x=M*x*S-g*b*N,this._y=g*b*S+M*x*N,this._z=g*x*N-M*b*S,this._w=g*x*S+M*b*N;break;case"YZX":this._x=M*x*S+g*b*N,this._y=g*b*S+M*x*N,this._z=g*x*N-M*b*S,this._w=g*x*S-M*b*N;break;case"XZY":this._x=M*x*S-g*b*N,this._y=g*b*S-M*x*N,this._z=g*x*N+M*b*S,this._w=g*x*S+M*b*N;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],f=n[5],p=n[9],g=n[2],x=n[6],S=n[10],M=r+f+S;if(M>0){const b=.5/Math.sqrt(M+1);this._w=.25/b,this._x=(x-p)*b,this._y=(l-g)*b,this._z=(c-a)*b}else if(r>f&&r>S){const b=2*Math.sqrt(1+r-f-S);this._w=(x-p)/b,this._x=.25*b,this._y=(a+c)/b,this._z=(l+g)/b}else if(f>S){const b=2*Math.sqrt(1+f-r-S);this._w=(l-g)/b,this._x=(a+c)/b,this._y=.25*b,this._z=(p+x)/b}else{const b=2*Math.sqrt(1+S-r-f);this._w=(c-a)/b,this._x=(l+g)/b,this._y=(p+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,f=n._x,p=n._y,g=n._z,x=n._w;return this._x=r*x+c*f+a*g-l*p,this._y=a*x+c*p+l*f-r*g,this._z=l*x+c*g+r*p-a*f,this._w=c*x-r*f-a*p-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const b=1-n;return this._w=b*c+n*this._w,this._x=b*r+n*this._x,this._y=b*a+n*this._y,this._z=b*l+n*this._z,this.normalize(),this}const g=Math.sqrt(p),x=Math.atan2(g,f),S=Math.sin((1-n)*x)/g,M=Math.sin(n*x)/g;return this._w=c*S+this._w*M,this._x=r*S+this._x*M,this._y=a*S+this._y*M,this._z=l*S+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pe{constructor(e=0,n=0,r=0){pe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,p=e.w,g=2*(c*a-f*r),x=2*(f*n-l*a),S=2*(l*r-c*n);return this.x=n+p*g+c*S-f*x,this.y=r+p*x+f*g-l*S,this.z=a+p*S+l*x-c*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,f=n.y,p=n.z;return this.x=a*p-l*f,this.y=l*c-r*p,this.z=r*f-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new pe,rm=new Ws;class js{constructor(e=new pe(1/0,1/0,1/0),n=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ni):ni.fromBufferAttribute(l,c),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),ol.subVectors(this.max,Ds),bo.subVectors(e.a,Ds),Ao.subVectors(e.b,Ds),Co.subVectors(e.c,Ds),lr.subVectors(Ao,bo),ur.subVectors(Co,Ao),Ur.subVectors(bo,Co);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Ur.z,Ur.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Ur.z,0,-Ur.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Ur.y,Ur.x,0];return!Ic(n,bo,Ao,Co,ol)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,bo,Ao,Co,ol))?!1:(sl.crossVectors(lr,ur),n=[sl.x,sl.y,sl.z],Ic(n,bo,Ao,Co,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],ni=new pe,rl=new js,bo=new pe,Ao=new pe,Co=new pe,lr=new pe,ur=new pe,Ur=new pe,Ds=new pe,ol=new pe,sl=new pe,Or=new pe;function Ic(o,e,n,r,a){for(let l=0,c=o.length-3;l<=c;l+=3){Or.fromArray(o,l);const f=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),p=e.dot(Or),g=n.dot(Or),x=r.dot(Or);if(Math.max(-Math.max(p,g,x),Math.min(p,g,x))>f)return!1}return!0}const ty=new js,Ns=new pe,Uc=new pe;class Hl{constructor(e=new pe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ty.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const n=Ns.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ns,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Uc)),this.expandByPoint(Ns.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new pe,Oc=new pe,al=new pe,cr=new pe,Fc=new pe,ll=new pe,kc=new pe;class Ig{constructor(e=new pe,n=new pe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Oc.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Oc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(al),f=cr.dot(this.direction),p=-cr.dot(al),g=cr.lengthSq(),x=Math.abs(1-c*c);let S,M,b,N;if(x>0)if(S=c*p-f,M=c*f-p,N=l*x,S>=0)if(M>=-N)if(M<=N){const C=1/x;S*=C,M*=C,b=S*(S+c*M+2*f)+M*(c*S+M+2*p)+g}else M=l,S=Math.max(0,-(c*M+f)),b=-S*S+M*(M+2*p)+g;else M=-l,S=Math.max(0,-(c*M+f)),b=-S*S+M*(M+2*p)+g;else M<=-N?(S=Math.max(0,-(-c*l+f)),M=S>0?-l:Math.min(Math.max(-l,-p),l),b=-S*S+M*(M+2*p)+g):M<=N?(S=0,M=Math.min(Math.max(-l,-p),l),b=M*(M+2*p)+g):(S=Math.max(0,-(c*l+f)),M=S>0?l:Math.min(Math.max(-l,-p),l),b=-S*S+M*(M+2*p)+g);else M=c>0?-l:l,S=Math.max(0,-(c*M+f)),b=-S*S+M*(M+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(Oc).addScaledVector(al,M),b}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const r=Ci.dot(this.direction),a=Ci.dot(Ci)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,p=r+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,f,p;const g=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,M=this.origin;return g>=0?(r=(e.min.x-M.x)*g,a=(e.max.x-M.x)*g):(r=(e.max.x-M.x)*g,a=(e.min.x-M.x)*g),x>=0?(l=(e.min.y-M.y)*x,c=(e.max.y-M.y)*x):(l=(e.max.y-M.y)*x,c=(e.min.y-M.y)*x),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),S>=0?(f=(e.min.z-M.z)*S,p=(e.max.z-M.z)*S):(f=(e.max.z-M.z)*S,p=(e.min.z-M.z)*S),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,r,a,l){Fc.subVectors(n,e),ll.subVectors(r,e),kc.crossVectors(Fc,ll);let c=this.direction.dot(kc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;cr.subVectors(this.origin,e);const p=f*this.direction.dot(ll.crossVectors(cr,ll));if(p<0)return null;const g=f*this.direction.dot(Fc.cross(cr));if(g<0||p+g>c)return null;const x=-f*cr.dot(kc);return x<0?null:this.at(x/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,a,l,c,f,p,g,x,S,M,b,N,C,E){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,p,g,x,S,M,b,N,C,E)}set(e,n,r,a,l,c,f,p,g,x,S,M,b,N,C,E){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=a,y[1]=l,y[5]=c,y[9]=f,y[13]=p,y[2]=g,y[6]=x,y[10]=S,y[14]=M,y[3]=b,y[7]=N,y[11]=C,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ro.setFromMatrixColumn(e,0).length(),l=1/Ro.setFromMatrixColumn(e,1).length(),c=1/Ro.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),p=Math.cos(a),g=Math.sin(a),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const M=c*x,b=c*S,N=f*x,C=f*S;n[0]=p*x,n[4]=-p*S,n[8]=g,n[1]=b+N*g,n[5]=M-C*g,n[9]=-f*p,n[2]=C-M*g,n[6]=N+b*g,n[10]=c*p}else if(e.order==="YXZ"){const M=p*x,b=p*S,N=g*x,C=g*S;n[0]=M+C*f,n[4]=N*f-b,n[8]=c*g,n[1]=c*S,n[5]=c*x,n[9]=-f,n[2]=b*f-N,n[6]=C+M*f,n[10]=c*p}else if(e.order==="ZXY"){const M=p*x,b=p*S,N=g*x,C=g*S;n[0]=M-C*f,n[4]=-c*S,n[8]=N+b*f,n[1]=b+N*f,n[5]=c*x,n[9]=C-M*f,n[2]=-c*g,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const M=c*x,b=c*S,N=f*x,C=f*S;n[0]=p*x,n[4]=N*g-b,n[8]=M*g+C,n[1]=p*S,n[5]=C*g+M,n[9]=b*g-N,n[2]=-g,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const M=c*p,b=c*g,N=f*p,C=f*g;n[0]=p*x,n[4]=C-M*S,n[8]=N*S+b,n[1]=S,n[5]=c*x,n[9]=-f*x,n[2]=-g*x,n[6]=b*S+N,n[10]=M-C*S}else if(e.order==="XZY"){const M=c*p,b=c*g,N=f*p,C=f*g;n[0]=p*x,n[4]=-S,n[8]=g*x,n[1]=M*S+C,n[5]=c*x,n[9]=b*S-N,n[2]=N*S-b,n[6]=f*x,n[10]=C*S+M}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ny,e,iy)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),fr.crossVectors(r,kn),fr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),fr.crossVectors(r,kn)),fr.normalize(),ul.crossVectors(kn,fr),a[0]=fr.x,a[4]=ul.x,a[8]=kn.x,a[1]=fr.y,a[5]=ul.y,a[9]=kn.y,a[2]=fr.z,a[6]=ul.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[4],p=r[8],g=r[12],x=r[1],S=r[5],M=r[9],b=r[13],N=r[2],C=r[6],E=r[10],y=r[14],Y=r[3],G=r[7],k=r[11],L=r[15],P=a[0],D=a[4],V=a[8],w=a[12],m=a[1],U=a[5],$=a[9],F=a[13],H=a[2],te=a[6],Z=a[10],_=a[14],q=a[3],O=a[7],v=a[11],T=a[15];return l[0]=c*P+f*m+p*H+g*q,l[4]=c*D+f*U+p*te+g*O,l[8]=c*V+f*$+p*Z+g*v,l[12]=c*w+f*F+p*_+g*T,l[1]=x*P+S*m+M*H+b*q,l[5]=x*D+S*U+M*te+b*O,l[9]=x*V+S*$+M*Z+b*v,l[13]=x*w+S*F+M*_+b*T,l[2]=N*P+C*m+E*H+y*q,l[6]=N*D+C*U+E*te+y*O,l[10]=N*V+C*$+E*Z+y*v,l[14]=N*w+C*F+E*_+y*T,l[3]=Y*P+G*m+k*H+L*q,l[7]=Y*D+G*U+k*te+L*O,l[11]=Y*V+G*$+k*Z+L*v,l[15]=Y*w+G*F+k*_+L*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],p=e[9],g=e[13],x=e[2],S=e[6],M=e[10],b=e[14],N=e[3],C=e[7],E=e[11],y=e[15];return N*(+l*p*S-a*g*S-l*f*M+r*g*M+a*f*b-r*p*b)+C*(+n*p*b-n*g*M+l*c*M-a*c*b+a*g*x-l*p*x)+E*(+n*g*S-n*f*b-l*c*S+r*c*b+l*f*x-r*g*x)+y*(-a*f*x-n*p*S+n*f*M+a*c*S-r*c*M+r*p*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],g=e[7],x=e[8],S=e[9],M=e[10],b=e[11],N=e[12],C=e[13],E=e[14],y=e[15],Y=S*E*g-C*M*g+C*p*b-f*E*b-S*p*y+f*M*y,G=N*M*g-x*E*g-N*p*b+c*E*b+x*p*y-c*M*y,k=x*C*g-N*S*g+N*f*b-c*C*b-x*f*y+c*S*y,L=N*S*p-x*C*p-N*f*M+c*C*M+x*f*E-c*S*E,P=n*Y+r*G+a*k+l*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=Y*D,e[1]=(C*M*l-S*E*l-C*a*b+r*E*b+S*a*y-r*M*y)*D,e[2]=(f*E*l-C*p*l+C*a*g-r*E*g-f*a*y+r*p*y)*D,e[3]=(S*p*l-f*M*l-S*a*g+r*M*g+f*a*b-r*p*b)*D,e[4]=G*D,e[5]=(x*E*l-N*M*l+N*a*b-n*E*b-x*a*y+n*M*y)*D,e[6]=(N*p*l-c*E*l-N*a*g+n*E*g+c*a*y-n*p*y)*D,e[7]=(c*M*l-x*p*l+x*a*g-n*M*g-c*a*b+n*p*b)*D,e[8]=k*D,e[9]=(N*S*l-x*C*l-N*r*b+n*C*b+x*r*y-n*S*y)*D,e[10]=(c*C*l-N*f*l+N*r*g-n*C*g-c*r*y+n*f*y)*D,e[11]=(x*f*l-c*S*l-x*r*g+n*S*g+c*r*b-n*f*b)*D,e[12]=L*D,e[13]=(x*C*a-N*S*a+N*r*M-n*C*M-x*r*E+n*S*E)*D,e[14]=(N*f*a-c*C*a-N*r*p+n*C*p+c*r*E-n*f*E)*D,e[15]=(c*S*a-x*f*a+x*r*p-n*S*p-c*r*M+n*f*M)*D,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,f=e.y,p=e.z,g=l*c,x=l*f;return this.set(g*c+r,g*f-a*p,g*p+a*f,0,g*f+a*p,x*f+r,x*p-a*c,0,g*p-a*f,x*p+a*c,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,g=l+l,x=c+c,S=f+f,M=l*g,b=l*x,N=l*S,C=c*x,E=c*S,y=f*S,Y=p*g,G=p*x,k=p*S,L=r.x,P=r.y,D=r.z;return a[0]=(1-(C+y))*L,a[1]=(b+k)*L,a[2]=(N-G)*L,a[3]=0,a[4]=(b-k)*P,a[5]=(1-(M+y))*P,a[6]=(E+Y)*P,a[7]=0,a[8]=(N+G)*D,a[9]=(E-Y)*D,a[10]=(1-(M+C))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ro.set(a[0],a[1],a[2]).length();const c=Ro.set(a[4],a[5],a[6]).length(),f=Ro.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ii.copy(this);const g=1/l,x=1/c,S=1/f;return ii.elements[0]*=g,ii.elements[1]*=g,ii.elements[2]*=g,ii.elements[4]*=x,ii.elements[5]*=x,ii.elements[6]*=x,ii.elements[8]*=S,ii.elements[9]*=S,ii.elements[10]*=S,n.setFromRotationMatrix(ii),r.x=l,r.y=c,r.z=f,this}makePerspective(e,n,r,a,l,c,f=Ui){const p=this.elements,g=2*l/(n-e),x=2*l/(r-a),S=(n+e)/(n-e),M=(r+a)/(r-a);let b,N;if(f===Ui)b=-(c+l)/(c-l),N=-2*c*l/(c-l);else if(f===Ol)b=-c/(c-l),N=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=N,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,l,c,f=Ui){const p=this.elements,g=1/(n-e),x=1/(r-a),S=1/(c-l),M=(n+e)*g,b=(r+a)*x;let N,C;if(f===Ui)N=(c+l)*S,C=-2*S;else if(f===Ol)N=l*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-M,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-b,p[2]=0,p[6]=0,p[10]=C,p[14]=-N,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ro=new pe,ii=new qt,ny=new pe(0,0,0),iy=new pe(1,1,1),fr=new pe,ul=new pe,kn=new pe,om=new qt,sm=new Ws;class zi{constructor(e=0,n=0,r=0,a=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],p=a[1],g=a[5],x=a[9],S=a[2],M=a[6],b=a[10];switch(n){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(M,g),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,b),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-c,g)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(M,b),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,g));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,g),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,b));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(M,g),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ry=0;const am=new pe,Po=new Ws,Ri=new qt,cl=new pe,Is=new pe,oy=new pe,sy=new Ws,lm=new pe(1,0,0),um=new pe(0,1,0),cm=new pe(0,0,1),fm={type:"added"},ay={type:"removed"},Lo={type:"childadded",child:null},zc={type:"childremoved",child:null};class Nn extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new pe,n=new zi,r=new Ws,a=new pe(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new pt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Po.setFromAxisAngle(e,n),this.quaternion.multiply(Po),this}rotateOnWorldAxis(e,n){return Po.setFromAxisAngle(e,n),this.quaternion.premultiply(Po),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Is,cl,this.up):Ri.lookAt(cl,Is,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),Po.setFromRotationMatrix(Ri),this.quaternion.premultiply(Po.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ay),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let g=0,x=p.length;g<x;g++){const S=p[g];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,g=this.material.length;p<g;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),g=c(e.textures),x=c(e.images),S=c(e.shapes),M=c(e.skeletons),b=c(e.animations),N=c(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),M.length>0&&(r.skeletons=M),b.length>0&&(r.animations=b),N.length>0&&(r.nodes=N)}return r.object=a,r;function c(f){const p=[];for(const g in f){const x=f[g];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Nn.DEFAULT_UP=new pe(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new pe,Pi=new pe,Bc=new pe,Li=new pe,Do=new pe,No=new pe,dm=new pe,Hc=new pe,Vc=new pe,Gc=new pe,Wc=new Xt,jc=new Xt,Xc=new Xt;class oi{constructor(e=new pe,n=new pe,r=new pe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ri.subVectors(e,n),a.cross(ri);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ri.subVectors(a,n),Pi.subVectors(r,n),Bc.subVectors(e,n);const c=ri.dot(ri),f=ri.dot(Pi),p=ri.dot(Bc),g=Pi.dot(Pi),x=Pi.dot(Bc),S=c*g-f*f;if(S===0)return l.set(0,0,0),null;const M=1/S,b=(g*p-f*x)*M,N=(c*x-f*p)*M;return l.set(1-b-N,N,b)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,l,c,f,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Li.x),p.addScaledVector(c,Li.y),p.addScaledVector(f,Li.z),p)}static getInterpolatedAttribute(e,n,r,a,l,c){return Wc.setScalar(0),jc.setScalar(0),Xc.setScalar(0),Wc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,r),Xc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Wc,l.x),c.addScaledVector(jc,l.y),c.addScaledVector(Xc,l.z),c}static isFrontFacing(e,n,r,a){return ri.subVectors(r,n),Pi.subVectors(e,n),ri.cross(Pi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ri.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,f;Do.subVectors(a,r),No.subVectors(l,r),Hc.subVectors(e,r);const p=Do.dot(Hc),g=No.dot(Hc);if(p<=0&&g<=0)return n.copy(r);Vc.subVectors(e,a);const x=Do.dot(Vc),S=No.dot(Vc);if(x>=0&&S<=x)return n.copy(a);const M=p*S-x*g;if(M<=0&&p>=0&&x<=0)return c=p/(p-x),n.copy(r).addScaledVector(Do,c);Gc.subVectors(e,l);const b=Do.dot(Gc),N=No.dot(Gc);if(N>=0&&b<=N)return n.copy(l);const C=b*g-p*N;if(C<=0&&g>=0&&N<=0)return f=g/(g-N),n.copy(r).addScaledVector(No,f);const E=x*N-b*S;if(E<=0&&S-x>=0&&b-N>=0)return dm.subVectors(l,a),f=(S-x)/(S-x+(b-N)),n.copy(a).addScaledVector(dm,f);const y=1/(E+C+M);return c=C*y,f=M*y,n.copy(r).addScaledVector(Do,c).addScaledVector(No,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function qc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Ct.workingColorSpace){if(e=W0(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=qc(c,l,e+1/3),this.g=qc(c,l,e),this.b=qc(c,l,e-1/3)}return Ct.toWorkingColorSpace(this,a),this}setStyle(e,n=qn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=Og[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Ct.fromWorkingColorSpace(gn.copy(this),e),Math.round(St(gn.r*255,0,255))*65536+Math.round(St(gn.g*255,0,255))*256+Math.round(St(gn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,l=gn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let p,g;const x=(f+c)/2;if(f===c)p=0,g=0;else{const S=c-f;switch(g=x<=.5?S/(c+f):S/(2-c-f),c){case r:p=(a-l)/S+(a<l?6:0);break;case a:p=(l-r)/S+2;break;case l:p=(r-a)/S+4;break}p/=6}return e.h=p,e.s=g,e.l=x,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=qn){Ct.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(fl);const r=Pc(dr.h,fl.h,n),a=Pc(dr.s,fl.s,n),l=Pc(dr.l,fl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Pt;Pt.NAMES=Og;let ly=0;class Xs extends Zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Bo,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_f,this.blendDst=yf,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_f&&(r.blendSrc=this.blendSrc),this.blendDst!==yf&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fg extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new pe,dl=new Nt;class li{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Jp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ls(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),l=Pn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class kg extends li{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class zg extends li{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $r extends li{constructor(e,n,r){super(new Float32Array(e),n,r)}}let uy=0;const Xn=new qt,Yc=new Nn,Io=new pe,zn=new js,Us=new js,on=new pe;class Bi extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?zg:kg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new $r(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Us.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(zn.min,Us.min),zn.expandByPoint(on),on.addVectors(zn.max,Us.max),zn.expandByPoint(on)):(zn.expandByPoint(Us.min),zn.expandByPoint(Us.max))}zn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)on.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(on));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let g=0,x=f.count;g<x;g++)on.fromBufferAttribute(f,g),p&&(Io.fromBufferAttribute(e,g),on.add(Io)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<r.count;V++)f[V]=new pe,p[V]=new pe;const g=new pe,x=new pe,S=new pe,M=new Nt,b=new Nt,N=new Nt,C=new pe,E=new pe;function y(V,w,m){g.fromBufferAttribute(r,V),x.fromBufferAttribute(r,w),S.fromBufferAttribute(r,m),M.fromBufferAttribute(l,V),b.fromBufferAttribute(l,w),N.fromBufferAttribute(l,m),x.sub(g),S.sub(g),b.sub(M),N.sub(M);const U=1/(b.x*N.y-N.x*b.y);isFinite(U)&&(C.copy(x).multiplyScalar(N.y).addScaledVector(S,-b.y).multiplyScalar(U),E.copy(S).multiplyScalar(b.x).addScaledVector(x,-N.x).multiplyScalar(U),f[V].add(C),f[w].add(C),f[m].add(C),p[V].add(E),p[w].add(E),p[m].add(E))}let Y=this.groups;Y.length===0&&(Y=[{start:0,count:e.count}]);for(let V=0,w=Y.length;V<w;++V){const m=Y[V],U=m.start,$=m.count;for(let F=U,H=U+$;F<H;F+=3)y(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const G=new pe,k=new pe,L=new pe,P=new pe;function D(V){L.fromBufferAttribute(a,V),P.copy(L);const w=f[V];G.copy(w),G.sub(L.multiplyScalar(L.dot(w))).normalize(),k.crossVectors(P,w);const U=k.dot(p[V])<0?-1:1;c.setXYZW(V,G.x,G.y,G.z,U)}for(let V=0,w=Y.length;V<w;++V){const m=Y[V],U=m.start,$=m.count;for(let F=U,H=U+$;F<H;F+=3)D(e.getX(F+0)),D(e.getX(F+1)),D(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let M=0,b=r.count;M<b;M++)r.setXYZ(M,0,0,0);const a=new pe,l=new pe,c=new pe,f=new pe,p=new pe,g=new pe,x=new pe,S=new pe;if(e)for(let M=0,b=e.count;M<b;M+=3){const N=e.getX(M+0),C=e.getX(M+1),E=e.getX(M+2);a.fromBufferAttribute(n,N),l.fromBufferAttribute(n,C),c.fromBufferAttribute(n,E),x.subVectors(c,l),S.subVectors(a,l),x.cross(S),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,E),f.add(x),p.add(x),g.add(x),r.setXYZ(N,f.x,f.y,f.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(E,g.x,g.y,g.z)}else for(let M=0,b=n.count;M<b;M+=3)a.fromBufferAttribute(n,M+0),l.fromBufferAttribute(n,M+1),c.fromBufferAttribute(n,M+2),x.subVectors(c,l),S.subVectors(a,l),x.cross(S),r.setXYZ(M+0,x.x,x.y,x.z),r.setXYZ(M+1,x.x,x.y,x.z),r.setXYZ(M+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(f,p){const g=f.array,x=f.itemSize,S=f.normalized,M=new g.constructor(p.length*x);let b=0,N=0;for(let C=0,E=p.length;C<E;C++){f.isInterleavedBufferAttribute?b=p[C]*f.data.stride+f.offset:b=p[C]*x;for(let y=0;y<x;y++)M[N++]=g[b++]}return new li(M,x,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bi,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],g=e(p,r);n.setAttribute(f,g)}const l=this.morphAttributes;for(const f in l){const p=[],g=l[f];for(let x=0,S=g.length;x<S;x++){const M=g[x],b=e(M,r);p.push(b)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],x=[];for(let S=0,M=g.length;S<M;S++){const b=g[S];x.push(b.toJSON(e.data))}x.length>0&&(a[p]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const g in a){const x=a[g];this.setAttribute(g,x.clone(n))}const l=e.morphAttributes;for(const g in l){const x=[],S=l[g];for(let M=0,b=S.length;M<b;M++)x.push(S[M].clone(n));this.morphAttributes[g]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let g=0,x=c.length;g<x;g++){const S=c[g];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new qt,Fr=new Ig,hl=new Hl,pm=new pe,pl=new pe,ml=new pe,gl=new pe,$c=new pe,vl=new pe,mm=new pe,_l=new pe;class Oi extends Nn{constructor(e=new Bi,n=new Fg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){vl.set(0,0,0);for(let p=0,g=l.length;p<g;p++){const x=f[p],S=l[p];x!==0&&($c.fromBufferAttribute(S,e),c?vl.addScaledVector($c,x):vl.addScaledVector($c.sub(n),x))}n.add(vl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(l),Fr.copy(e.ray).recast(e.near),!(hl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(hl,pm)===null||Fr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(l).invert(),Fr.copy(e.ray).applyMatrix4(hm),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,g=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,M=l.groups,b=l.drawRange;if(f!==null)if(Array.isArray(c))for(let N=0,C=M.length;N<C;N++){const E=M[N],y=c[E.materialIndex],Y=Math.max(E.start,b.start),G=Math.min(f.count,Math.min(E.start+E.count,b.start+b.count));for(let k=Y,L=G;k<L;k+=3){const P=f.getX(k),D=f.getX(k+1),V=f.getX(k+2);a=yl(this,y,e,r,g,x,S,P,D,V),a&&(a.faceIndex=Math.floor(k/3),a.face.materialIndex=E.materialIndex,n.push(a))}}else{const N=Math.max(0,b.start),C=Math.min(f.count,b.start+b.count);for(let E=N,y=C;E<y;E+=3){const Y=f.getX(E),G=f.getX(E+1),k=f.getX(E+2);a=yl(this,c,e,r,g,x,S,Y,G,k),a&&(a.faceIndex=Math.floor(E/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let N=0,C=M.length;N<C;N++){const E=M[N],y=c[E.materialIndex],Y=Math.max(E.start,b.start),G=Math.min(p.count,Math.min(E.start+E.count,b.start+b.count));for(let k=Y,L=G;k<L;k+=3){const P=k,D=k+1,V=k+2;a=yl(this,y,e,r,g,x,S,P,D,V),a&&(a.faceIndex=Math.floor(k/3),a.face.materialIndex=E.materialIndex,n.push(a))}}else{const N=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let E=N,y=C;E<y;E+=3){const Y=E,G=E+1,k=E+2;a=yl(this,c,e,r,g,x,S,Y,G,k),a&&(a.faceIndex=Math.floor(E/3),n.push(a))}}}}function cy(o,e,n,r,a,l,c,f){let p;if(e.side===Ln?p=r.intersectTriangle(c,l,a,!0,f):p=r.intersectTriangle(a,l,c,e.side===vr,f),p===null)return null;_l.copy(f),_l.applyMatrix4(o.matrixWorld);const g=n.ray.origin.distanceTo(_l);return g<n.near||g>n.far?null:{distance:g,point:_l.clone(),object:o}}function yl(o,e,n,r,a,l,c,f,p,g){o.getVertexPosition(f,pl),o.getVertexPosition(p,ml),o.getVertexPosition(g,gl);const x=cy(o,e,n,r,pl,ml,gl,mm);if(x){const S=new pe;oi.getBarycoord(mm,pl,ml,gl,S),a&&(x.uv=oi.getInterpolatedAttribute(a,f,p,g,S,new Nt)),l&&(x.uv1=oi.getInterpolatedAttribute(l,f,p,g,S,new Nt)),c&&(x.normal=oi.getInterpolatedAttribute(c,f,p,g,S,new pe),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const M={a:f,b:p,c:g,normal:new pe,materialIndex:0};oi.getNormal(pl,ml,gl,M.normal),x.face=M,x.barycoord=S}return x}class qs extends Bi{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],g=[],x=[],S=[];let M=0,b=0;N("z","y","x",-1,-1,r,n,e,c,l,0),N("z","y","x",1,-1,r,n,-e,c,l,1),N("x","z","y",1,1,e,r,n,a,c,2),N("x","z","y",1,-1,e,r,-n,a,c,3),N("x","y","z",1,-1,e,n,r,a,l,4),N("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new $r(g,3)),this.setAttribute("normal",new $r(x,3)),this.setAttribute("uv",new $r(S,2));function N(C,E,y,Y,G,k,L,P,D,V,w){const m=k/D,U=L/V,$=k/2,F=L/2,H=P/2,te=D+1,Z=V+1;let _=0,q=0;const O=new pe;for(let v=0;v<Z;v++){const T=v*U-F;for(let B=0;B<te;B++){const ce=B*m-$;O[C]=ce*Y,O[E]=T*G,O[y]=H,g.push(O.x,O.y,O.z),O[C]=0,O[E]=0,O[y]=P>0?1:-1,x.push(O.x,O.y,O.z),S.push(B/D),S.push(1-v/V),_+=1}}for(let v=0;v<V;v++)for(let T=0;T<D;T++){const B=M+T+te*v,ce=M+T+te*(v+1),j=M+(T+1)+te*(v+1),Q=M+(T+1)+te*v;p.push(B,ce,Q),p.push(ce,j,Q),q+=6}f.addGroup(b,q,w),b+=q,M+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $o(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(o){const e={};for(let n=0;n<o.length;n++){const r=$o(o[n]);for(const a in r)e[a]=r[a]}return e}function fy(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Bg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const dy={clone:$o,merge:Mn};var hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hy,this.fragmentShader=py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Hg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new pe,gm=new Nt,vm=new Nt;class Yn extends Hg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,gm,vm),n.subVectors(vm,gm)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,g=c.fullHeight;l+=c.offsetX*a/p,n-=c.offsetY*r/g,a*=c.width/p,r*=c.height/g}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Uo=-90,Oo=1;class my extends Nn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Uo,Oo,e,n);a.layers=this.layers,this.add(a);const l=new Yn(Uo,Oo,e,n);l.layers=this.layers,this.add(l);const c=new Yn(Uo,Oo,e,n);c.layers=this.layers,this.add(c);const f=new Yn(Uo,Oo,e,n);f.layers=this.layers,this.add(f);const p=new Yn(Uo,Oo,e,n);p.layers=this.layers,this.add(p);const g=new Yn(Uo,Oo,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,f,p]=n;for(const g of n)this.remove(g);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,g,x]=this.children,S=e.getRenderTarget(),M=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),N=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(n,x),e.setRenderTarget(S,M,b),e.xr.enabled=N,r.texture.needsPMREMUpdate=!0}}class Vg extends Dn{constructor(e,n,r,a,l,c,f,p,g,x){e=e!==void 0?e:[],n=n!==void 0?n:Wo,super(e,n,r,a,l,c,f,p,g,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gy extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Vg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new qs(5,5,5),l=new _r({name:"CubemapFromEquirect",uniforms:$o(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:mr});l.uniforms.tEquirect.value=n;const c=new Oi(a,l),f=n.minFilter;return n.minFilter===qr&&(n.minFilter=mi),new my(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class vy extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kc=new pe,_y=new pe,yy=new pt;class Vr{constructor(e=new pe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Kc.subVectors(r,n).cross(_y.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Kc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||yy.getNormalMatrix(e),a=this.coplanarPoint(Kc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Hl,xl=new pe;class Gg{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,l=new Vr,c=new Vr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ui){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],p=a[3],g=a[4],x=a[5],S=a[6],M=a[7],b=a[8],N=a[9],C=a[10],E=a[11],y=a[12],Y=a[13],G=a[14],k=a[15];if(r[0].setComponents(p-l,M-g,E-b,k-y).normalize(),r[1].setComponents(p+l,M+g,E+b,k+y).normalize(),r[2].setComponents(p+c,M+x,E+N,k+Y).normalize(),r[3].setComponents(p-c,M-x,E-N,k-Y).normalize(),r[4].setComponents(p-f,M-S,E-C,k-G).normalize(),n===Ui)r[5].setComponents(p+f,M+S,E+C,k+G).normalize();else if(n===Ol)r[5].setComponents(f,S,C,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(xl.x=a.normal.x>0?e.max.x:e.min.x,xl.y=a.normal.y>0?e.max.y:e.min.y,xl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wg extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _m=new qt,rd=new Ig,Sl=new Hl,Ml=new pe;class xy extends Nn{constructor(e=new Bi,n=new Wg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(a),Sl.radius+=l,e.ray.intersectsSphere(Sl)===!1)return;_m.copy(a).invert(),rd.copy(e.ray).applyMatrix4(_m);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,g=r.index,S=r.attributes.position;if(g!==null){const M=Math.max(0,c.start),b=Math.min(g.count,c.start+c.count);for(let N=M,C=b;N<C;N++){const E=g.getX(N);Ml.fromBufferAttribute(S,E),ym(Ml,E,p,a,e,n,this)}}else{const M=Math.max(0,c.start),b=Math.min(S.count,c.start+c.count);for(let N=M,C=b;N<C;N++)Ml.fromBufferAttribute(S,N),ym(Ml,N,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function ym(o,e,n,r,a,l,c){const f=rd.distanceSqToPoint(o);if(f<n){const p=new pe;rd.closestPointToPoint(o,p),p.applyMatrix4(r);const g=a.ray.origin.distanceTo(p);if(g<a.near||g>a.far)return;l.push({distance:g,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class El extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class jg extends Dn{constructor(e,n,r,a,l,c,f,p,g,x=Ho){if(x!==Ho&&x!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Ho&&(r=Zr),r===void 0&&x===qo&&(r=Xo),super(null,a,l,c,f,p,x,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ai,this.minFilter=p!==void 0?p:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Vl extends Bi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,f=Math.floor(r),p=Math.floor(a),g=f+1,x=p+1,S=e/f,M=n/p,b=[],N=[],C=[],E=[];for(let y=0;y<x;y++){const Y=y*M-c;for(let G=0;G<g;G++){const k=G*S-l;N.push(k,-Y,0),C.push(0,0,1),E.push(G/f),E.push(1-y/p)}}for(let y=0;y<p;y++)for(let Y=0;Y<f;Y++){const G=Y+g*y,k=Y+g*(y+1),L=Y+1+g*(y+1),P=Y+1+g*y;b.push(G,k,P),b.push(k,L,P)}this.setIndex(b),this.setAttribute("position",new $r(N,3)),this.setAttribute("normal",new $r(C,3)),this.setAttribute("uv",new $r(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sy extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class My extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ey extends Hg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,c=l+g*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class wy extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function xm(o,e,n,r){const a=Ty(r);switch(n){case Eg:return o*e;case Tg:return o*e;case bg:return o*e*2;case Ag:return o*e/a.components*a.byteLength;case fd:return o*e/a.components*a.byteLength;case Cg:return o*e*2/a.components*a.byteLength;case dd:return o*e*2/a.components*a.byteLength;case wg:return o*e*3/a.components*a.byteLength;case si:return o*e*4/a.components*a.byteLength;case hd:return o*e*4/a.components*a.byteLength;case Al:case Cl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Pl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Df:case If:return Math.max(o,16)*Math.max(e,8)/4;case Lf:case Nf:return Math.max(o,8)*Math.max(e,8)/2;case Uf:case Of:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case jf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Qf:case Jf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Rg:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case td:case nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ty(o){switch(o){case ki:case xg:return{byteLength:1,components:1};case Bs:case Sg:case Vs:return{byteLength:2,components:1};case ud:case cd:return{byteLength:2,components:4};case Zr:case ld:case Ii:return{byteLength:4,components:1};case Mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xg(){let o=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function by(o){const e=new WeakMap;function n(f,p){const g=f.array,x=f.usage,S=g.byteLength,M=o.createBuffer();o.bindBuffer(p,M),o.bufferData(p,g,x),f.onUploadCallback();let b;if(g instanceof Float32Array)b=o.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)b=o.SHORT;else if(g instanceof Uint32Array)b=o.UNSIGNED_INT;else if(g instanceof Int32Array)b=o.INT;else if(g instanceof Int8Array)b=o.BYTE;else if(g instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,p,g){const x=p.array,S=p.updateRanges;if(o.bindBuffer(g,f),S.length===0)o.bufferSubData(g,0,x);else{S.sort((b,N)=>b.start-N.start);let M=0;for(let b=1;b<S.length;b++){const N=S[M],C=S[b];C.start<=N.start+N.count+1?N.count=Math.max(N.count,C.start+C.count-N.start):(++M,S[M]=C)}S.length=M+1;for(let b=0,N=S.length;b<N;b++){const C=S[b];o.bufferSubData(g,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(o.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,p),g.version=f.version}}return{get:a,remove:l,update:c}}var Ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,By=`#ifdef USE_IRIDESCENCE
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
#endif`,Hy=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ky=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ox=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yS=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xS=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,NS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,US=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,HS=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,GS=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jS=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,qS=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,$S=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ZS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,JS=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,iM=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Ay,alphahash_pars_fragment:Cy,alphamap_fragment:Ry,alphamap_pars_fragment:Py,alphatest_fragment:Ly,alphatest_pars_fragment:Dy,aomap_fragment:Ny,aomap_pars_fragment:Iy,batching_pars_vertex:Uy,batching_vertex:Oy,begin_vertex:Fy,beginnormal_vertex:ky,bsdfs:zy,iridescence_fragment:By,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:Wy,clipping_planes_vertex:jy,color_fragment:Xy,color_pars_fragment:qy,color_pars_vertex:Yy,color_vertex:$y,common:Ky,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Qy,displacementmap_pars_vertex:Jy,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:rx,envmap_fragment:ox,envmap_common_pars_fragment:sx,envmap_pars_fragment:ax,envmap_pars_vertex:lx,envmap_physical_pars_fragment:yx,envmap_vertex:ux,fog_vertex:cx,fog_pars_vertex:fx,fog_fragment:dx,fog_pars_fragment:hx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:vx,lights_pars_begin:_x,lights_toon_fragment:xx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Mx,lights_phong_pars_fragment:Ex,lights_physical_fragment:wx,lights_physical_pars_fragment:Tx,lights_fragment_begin:bx,lights_fragment_maps:Ax,lights_fragment_end:Cx,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Dx,map_fragment:Nx,map_pars_fragment:Ix,map_particle_fragment:Ux,map_particle_pars_fragment:Ox,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:kx,morphinstance_vertex:zx,morphcolor_vertex:Bx,morphnormal_vertex:Hx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Gx,normal_fragment_begin:Wx,normal_fragment_maps:jx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:Jx,opaque_fragment:eS,packing:tS,premultiplied_alpha_fragment:nS,project_vertex:iS,dithering_fragment:rS,dithering_pars_fragment:oS,roughnessmap_fragment:sS,roughnessmap_pars_fragment:aS,shadowmap_pars_fragment:lS,shadowmap_pars_vertex:uS,shadowmap_vertex:cS,shadowmask_pars_fragment:fS,skinbase_vertex:dS,skinning_pars_vertex:hS,skinning_vertex:pS,skinnormal_vertex:mS,specularmap_fragment:gS,specularmap_pars_fragment:vS,tonemapping_fragment:_S,tonemapping_pars_fragment:yS,transmission_fragment:xS,transmission_pars_fragment:SS,uv_pars_fragment:MS,uv_pars_vertex:ES,uv_vertex:wS,worldpos_vertex:TS,background_vert:bS,background_frag:AS,backgroundCube_vert:CS,backgroundCube_frag:RS,cube_vert:PS,cube_frag:LS,depth_vert:DS,depth_frag:NS,distanceRGBA_vert:IS,distanceRGBA_frag:US,equirect_vert:OS,equirect_frag:FS,linedashed_vert:kS,linedashed_frag:zS,meshbasic_vert:BS,meshbasic_frag:HS,meshlambert_vert:VS,meshlambert_frag:GS,meshmatcap_vert:WS,meshmatcap_frag:jS,meshnormal_vert:XS,meshnormal_frag:qS,meshphong_vert:YS,meshphong_frag:$S,meshphysical_vert:KS,meshphysical_frag:ZS,meshtoon_vert:QS,meshtoon_frag:JS,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:rM,sprite_frag:oM},Ue={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},pi={basic:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Mn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Mn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Mn([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Mn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Mn([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Mn([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Mn([Ue.common,Ue.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Mn([Ue.lights,Ue.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};pi.physical={uniforms:Mn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const wl={r:0,b:0,g:0},zr=new zi,sM=new qt;function aM(o,e,n,r,a,l,c){const f=new Pt(0);let p=l===!0?0:1,g,x,S=null,M=0,b=null;function N(G){let k=G.isScene===!0?G.background:null;return k&&k.isTexture&&(k=(G.backgroundBlurriness>0?n:e).get(k)),k}function C(G){let k=!1;const L=N(G);L===null?y(f,p):L&&L.isColor&&(y(L,1),k=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(o.autoClear||k)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(G,k){const L=N(k);L&&(L.isCubeTexture||L.mapping===Bl)?(x===void 0&&(x=new Oi(new qs(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:$o(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(P,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(x)),zr.copy(k.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),x.material.uniforms.envMap.value=L,x.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler(zr)),x.material.toneMapped=Ct.getTransfer(L.colorSpace)!==Dt,(S!==L||M!==L.version||b!==o.toneMapping)&&(x.material.needsUpdate=!0,S=L,M=L.version,b=o.toneMapping),x.layers.enableAll(),G.unshift(x,x.geometry,x.material,0,0,null)):L&&L.isTexture&&(g===void 0&&(g=new Oi(new Vl(2,2),new _r({name:"BackgroundMaterial",uniforms:$o(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=L,g.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,g.material.toneMapped=Ct.getTransfer(L.colorSpace)!==Dt,L.matrixAutoUpdate===!0&&L.updateMatrix(),g.material.uniforms.uvTransform.value.copy(L.matrix),(S!==L||M!==L.version||b!==o.toneMapping)&&(g.material.needsUpdate=!0,S=L,M=L.version,b=o.toneMapping),g.layers.enableAll(),G.unshift(g,g.geometry,g.material,0,0,null))}function y(G,k){G.getRGB(wl,Bg(o)),r.buffers.color.setClear(wl.r,wl.g,wl.b,k,c)}function Y(){x!==void 0&&(x.geometry.dispose(),x.material.dispose()),g!==void 0&&(g.geometry.dispose(),g.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(G,k=1){f.set(G),p=k,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(G){p=G,y(f,p)},render:C,addToRenderList:E,dispose:Y}}function lM(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=M(null);let l=a,c=!1;function f(m,U,$,F,H){let te=!1;const Z=S(F,$,U);l!==Z&&(l=Z,g(l.object)),te=b(m,F,$,H),te&&N(m,F,$,H),H!==null&&e.update(H,o.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,k(m,U,$,F),H!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function p(){return o.createVertexArray()}function g(m){return o.bindVertexArray(m)}function x(m){return o.deleteVertexArray(m)}function S(m,U,$){const F=$.wireframe===!0;let H=r[m.id];H===void 0&&(H={},r[m.id]=H);let te=H[U.id];te===void 0&&(te={},H[U.id]=te);let Z=te[F];return Z===void 0&&(Z=M(p()),te[F]=Z),Z}function M(m){const U=[],$=[],F=[];for(let H=0;H<n;H++)U[H]=0,$[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:F,object:m,attributes:{},index:null}}function b(m,U,$,F){const H=l.attributes,te=U.attributes;let Z=0;const _=$.getAttributes();for(const q in _)if(_[q].location>=0){const v=H[q];let T=te[q];if(T===void 0&&(q==="instanceMatrix"&&m.instanceMatrix&&(T=m.instanceMatrix),q==="instanceColor"&&m.instanceColor&&(T=m.instanceColor)),v===void 0||v.attribute!==T||T&&v.data!==T.data)return!0;Z++}return l.attributesNum!==Z||l.index!==F}function N(m,U,$,F){const H={},te=U.attributes;let Z=0;const _=$.getAttributes();for(const q in _)if(_[q].location>=0){let v=te[q];v===void 0&&(q==="instanceMatrix"&&m.instanceMatrix&&(v=m.instanceMatrix),q==="instanceColor"&&m.instanceColor&&(v=m.instanceColor));const T={};T.attribute=v,v&&v.data&&(T.data=v.data),H[q]=T,Z++}l.attributes=H,l.attributesNum=Z,l.index=F}function C(){const m=l.newAttributes;for(let U=0,$=m.length;U<$;U++)m[U]=0}function E(m){y(m,0)}function y(m,U){const $=l.newAttributes,F=l.enabledAttributes,H=l.attributeDivisors;$[m]=1,F[m]===0&&(o.enableVertexAttribArray(m),F[m]=1),H[m]!==U&&(o.vertexAttribDivisor(m,U),H[m]=U)}function Y(){const m=l.newAttributes,U=l.enabledAttributes;for(let $=0,F=U.length;$<F;$++)U[$]!==m[$]&&(o.disableVertexAttribArray($),U[$]=0)}function G(m,U,$,F,H,te,Z){Z===!0?o.vertexAttribIPointer(m,U,$,H,te):o.vertexAttribPointer(m,U,$,F,H,te)}function k(m,U,$,F){C();const H=F.attributes,te=$.getAttributes(),Z=U.defaultAttributeValues;for(const _ in te){const q=te[_];if(q.location>=0){let O=H[_];if(O===void 0&&(_==="instanceMatrix"&&m.instanceMatrix&&(O=m.instanceMatrix),_==="instanceColor"&&m.instanceColor&&(O=m.instanceColor)),O!==void 0){const v=O.normalized,T=O.itemSize,B=e.get(O);if(B===void 0)continue;const ce=B.buffer,j=B.type,Q=B.bytesPerElement,re=j===o.INT||j===o.UNSIGNED_INT||O.gpuType===ld;if(O.isInterleavedBufferAttribute){const oe=O.data,ve=oe.stride,Se=O.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<q.locationSize;Ce++)y(q.location+Ce,oe.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)E(q.location+Ce);o.bindBuffer(o.ARRAY_BUFFER,ce);for(let Ce=0;Ce<q.locationSize;Ce++)G(q.location+Ce,T/q.locationSize,j,v,ve*Q,(Se+T/q.locationSize*Ce)*Q,re)}else{if(O.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)y(q.location+oe,O.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let oe=0;oe<q.locationSize;oe++)E(q.location+oe);o.bindBuffer(o.ARRAY_BUFFER,ce);for(let oe=0;oe<q.locationSize;oe++)G(q.location+oe,T/q.locationSize,j,v,T*Q,T/q.locationSize*oe*Q,re)}}else if(Z!==void 0){const v=Z[_];if(v!==void 0)switch(v.length){case 2:o.vertexAttrib2fv(q.location,v);break;case 3:o.vertexAttrib3fv(q.location,v);break;case 4:o.vertexAttrib4fv(q.location,v);break;default:o.vertexAttrib1fv(q.location,v)}}}}Y()}function L(){V();for(const m in r){const U=r[m];for(const $ in U){const F=U[$];for(const H in F)x(F[H].object),delete F[H];delete U[$]}delete r[m]}}function P(m){if(r[m.id]===void 0)return;const U=r[m.id];for(const $ in U){const F=U[$];for(const H in F)x(F[H].object),delete F[H];delete U[$]}delete r[m.id]}function D(m){for(const U in r){const $=r[U];if($[m.id]===void 0)continue;const F=$[m.id];for(const H in F)x(F[H].object),delete F[H];delete $[m.id]}}function V(){w(),c=!0,l!==a&&(l=a,g(l.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:C,enableAttribute:E,disableUnusedAttributes:Y}}function uM(o,e,n){let r;function a(g){r=g}function l(g,x){o.drawArrays(r,g,x),n.update(x,r,1)}function c(g,x,S){S!==0&&(o.drawArraysInstanced(r,g,x,S),n.update(x,r,S))}function f(g,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,x,0,S);let b=0;for(let N=0;N<S;N++)b+=x[N];n.update(b,r,1)}function p(g,x,S,M){if(S===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let N=0;N<g.length;N++)c(g[N],x[N],M[N]);else{b.multiDrawArraysInstancedWEBGL(r,g,0,x,0,M,0,S);let N=0;for(let C=0;C<S;C++)N+=x[C]*M[C];n.update(N,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function cM(o,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(D){return!(D!==si&&r.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(D){const V=D===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ki&&r.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ii&&!V)}function p(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const x=p(g);x!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",x,"instead."),g=x);const S=n.logarithmicDepthBuffer===!0,M=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),E=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),Y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),G=o.getParameter(o.MAX_VARYING_VECTORS),k=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=N>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:S,reverseDepthBuffer:M,maxTextures:b,maxVertexTextures:N,maxTextureSize:C,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:Y,maxVaryings:G,maxFragmentUniforms:k,vertexTextures:L,maxSamples:P}}function fM(o){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Vr,f=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,M){const b=S.length!==0||M||r!==0||a;return a=M,r=S.length,b},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,M){n=x(S,M,0)},this.setState=function(S,M,b){const N=S.clippingPlanes,C=S.clipIntersection,E=S.clipShadows,y=o.get(S);if(!a||N===null||N.length===0||l&&!E)l?x(null):g();else{const Y=l?0:r,G=Y*4;let k=y.clippingState||null;p.value=k,k=x(N,M,G,b);for(let L=0;L!==G;++L)k[L]=n[L];y.clippingState=k,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=Y}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,M,b,N){const C=S!==null?S.length:0;let E=null;if(C!==0){if(E=p.value,N!==!0||E===null){const y=b+C*4,Y=M.matrixWorldInverse;f.getNormalMatrix(Y),(E===null||E.length<y)&&(E=new Float32Array(y));for(let G=0,k=b;G!==C;++G,k+=4)c.copy(S[G]).applyMatrix4(Y,f),c.normal.toArray(E,k),E[k+3]=c.constant}p.value=E,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,E}}function dM(o){let e=new WeakMap;function n(c,f){return f===Af?c.mapping=Wo:f===Cf&&(c.mapping=jo),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Af||f===Cf)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const g=new gy(p.height);return g.fromEquirectangularTexture(o,c),e.set(c,g),c.addEventListener("dispose",a),n(g.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const zo=4,Sm=[.125,.215,.35,.446,.526,.582],jr=20,Zc=new Ey,Mm=new Pt;let Qc=null,Jc=0,ef=0,tf=!1;const Gr=(1+Math.sqrt(5))/2,Fo=1/Gr,Em=[new pe(-Gr,Fo,0),new pe(Gr,Fo,0),new pe(-Fo,0,Gr),new pe(Fo,0,Gr),new pe(0,Gr,-Fo),new pe(0,Gr,Fo),new pe(-1,1,-1),new pe(1,1,-1),new pe(-1,1,1),new pe(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Vs,format:si,colorSpace:Yo,depthBuffer:!1},a=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hM(l)),this._blurMaterial=pM(l,e,n)}return a}_compileMaterial(e){const n=new Oi(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,r,a){const f=new Yn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,M=x.toneMapping;x.getClearColor(Mm),x.toneMapping=gr,x.autoClear=!1;const b=new Fg({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),N=new Oi(new qs,b);let C=!1;const E=e.background;E?E.isColor&&(b.color.copy(E),e.background=null,C=!0):(b.color.copy(Mm),C=!0);for(let y=0;y<6;y++){const Y=y%3;Y===0?(f.up.set(0,p[y],0),f.lookAt(g[y],0,0)):Y===1?(f.up.set(0,0,p[y]),f.lookAt(0,g[y],0)):(f.up.set(0,p[y],0),f.lookAt(0,0,g[y]));const G=this._cubeSize;Tl(a,Y*G,y>2?G:0,G,G),x.setRenderTarget(a),C&&x.render(N,f),x.render(e,f)}N.geometry.dispose(),N.material.dispose(),x.toneMapping=M,x.autoClear=S,e.background=E}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Wo||e.mapping===jo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Oi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Tl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Zc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Em[(a-l-1)%Em.length];this._blur(e,l-1,l,c,f)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,f){const p=this._renderer,g=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,S=new Oi(this._lodPlanes[a],g),M=g.uniforms,b=this._sizeLods[r]-1,N=isFinite(l)?Math.PI/(2*b):2*Math.PI/(2*jr-1),C=l/N,E=isFinite(l)?1+Math.floor(x*C):jr;E>jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${jr}`);const y=[];let Y=0;for(let D=0;D<jr;++D){const V=D/C,w=Math.exp(-V*V/2);y.push(w),D===0?Y+=w:D<E&&(Y+=2*w)}for(let D=0;D<y.length;D++)y[D]=y[D]/Y;M.envMap.value=e.texture,M.samples.value=E,M.weights.value=y,M.latitudinal.value=c==="latitudinal",f&&(M.poleAxis.value=f);const{_lodMax:G}=this;M.dTheta.value=N,M.mipInt.value=G-r;const k=this._sizeLods[a],L=3*k*(a>G-zo?a-G+zo:0),P=4*(this._cubeSize-k);Tl(n,L,P,3*k,2*k),p.setRenderTarget(n),p.render(S,Zc)}}function hM(o){const e=[],n=[],r=[];let a=o;const l=o-zo+1+Sm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);n.push(f);let p=1/f;c>o-zo?p=Sm[c-o+zo-1]:c===0&&(p=0),r.push(p);const g=1/(f-2),x=-g,S=1+g,M=[x,x,S,x,S,S,x,x,S,S,x,S],b=6,N=6,C=3,E=2,y=1,Y=new Float32Array(C*N*b),G=new Float32Array(E*N*b),k=new Float32Array(y*N*b);for(let P=0;P<b;P++){const D=P%3*2/3-1,V=P>2?0:-1,w=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];Y.set(w,C*N*P),G.set(M,E*N*P);const m=[P,P,P,P,P,P];k.set(m,y*N*P)}const L=new Bi;L.setAttribute("position",new li(Y,C)),L.setAttribute("uv",new li(G,E)),L.setAttribute("faceIndex",new li(k,y)),e.push(L),a>zo&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tm(o,e,n){const r=new Qr(o,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function pM(o,e,n){const r=new Float32Array(jr),a=new pe(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pd(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function bm(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Am(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function pd(){return`

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
	`}function mM(o){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,g=p===Af||p===Cf,x=p===Wo||p===jo;if(g||x){let S=e.get(f);const M=S!==void 0?S.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==M)return n===null&&(n=new wm(o)),S=g?n.fromEquirectangular(f,S):n.fromCubemap(f,S),S.texture.pmremVersion=f.pmremVersion,e.set(f,S),S.texture;if(S!==void 0)return S.texture;{const b=f.image;return g&&b&&b.height>0||x&&b&&a(b)?(n===null&&(n=new wm(o)),S=g?n.fromEquirectangular(f):n.fromCubemap(f),S.texture.pmremVersion=f.pmremVersion,e.set(f,S),f.addEventListener("dispose",l),S.texture):null}}}return f}function a(f){let p=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function l(f){const p=f.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function gM(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&ko("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function vM(o,e,n,r){const a={},l=new WeakMap;function c(S){const M=S.target;M.index!==null&&e.remove(M.index);for(const N in M.attributes)e.remove(M.attributes[N]);M.removeEventListener("dispose",c),delete a[M.id];const b=l.get(M);b&&(e.remove(b),l.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,n.memory.geometries--}function f(S,M){return a[M.id]===!0||(M.addEventListener("dispose",c),a[M.id]=!0,n.memory.geometries++),M}function p(S){const M=S.attributes;for(const b in M)e.update(M[b],o.ARRAY_BUFFER)}function g(S){const M=[],b=S.index,N=S.attributes.position;let C=0;if(b!==null){const Y=b.array;C=b.version;for(let G=0,k=Y.length;G<k;G+=3){const L=Y[G+0],P=Y[G+1],D=Y[G+2];M.push(L,P,P,D,D,L)}}else if(N!==void 0){const Y=N.array;C=N.version;for(let G=0,k=Y.length/3-1;G<k;G+=3){const L=G+0,P=G+1,D=G+2;M.push(L,P,P,D,D,L)}}else return;const E=new(Lg(M)?zg:kg)(M,1);E.version=C;const y=l.get(S);y&&e.remove(y),l.set(S,E)}function x(S){const M=l.get(S);if(M){const b=S.index;b!==null&&M.version<b.version&&g(S)}else g(S);return l.get(S)}return{get:f,update:p,getWireframeAttribute:x}}function _M(o,e,n){let r;function a(M){r=M}let l,c;function f(M){l=M.type,c=M.bytesPerElement}function p(M,b){o.drawElements(r,b,l,M*c),n.update(b,r,1)}function g(M,b,N){N!==0&&(o.drawElementsInstanced(r,b,l,M*c,N),n.update(b,r,N))}function x(M,b,N){if(N===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,l,M,0,N);let E=0;for(let y=0;y<N;y++)E+=b[y];n.update(E,r,1)}function S(M,b,N,C){if(N===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<M.length;y++)g(M[y]/c,b[y],C[y]);else{E.multiDrawElementsInstancedWEBGL(r,b,0,l,M,0,C,0,N);let y=0;for(let Y=0;Y<N;Y++)y+=b[Y]*C[Y];n.update(y,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function yM(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function xM(o,e,n){const r=new WeakMap,a=new Xt;function l(c,f,p){const g=c.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=x!==void 0?x.length:0;let M=r.get(f);if(M===void 0||M.count!==S){let m=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",m)};var b=m;M!==void 0&&M.texture.dispose();const N=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],Y=f.morphAttributes.normal||[],G=f.morphAttributes.color||[];let k=0;N===!0&&(k=1),C===!0&&(k=2),E===!0&&(k=3);let L=f.attributes.position.count*k,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*P*4*S),V=new Ng(D,L,P,S);V.type=Ii,V.needsUpdate=!0;const w=k*4;for(let U=0;U<S;U++){const $=y[U],F=Y[U],H=G[U],te=L*P*4*U;for(let Z=0;Z<$.count;Z++){const _=Z*w;N===!0&&(a.fromBufferAttribute($,Z),D[te+_+0]=a.x,D[te+_+1]=a.y,D[te+_+2]=a.z,D[te+_+3]=0),C===!0&&(a.fromBufferAttribute(F,Z),D[te+_+4]=a.x,D[te+_+5]=a.y,D[te+_+6]=a.z,D[te+_+7]=0),E===!0&&(a.fromBufferAttribute(H,Z),D[te+_+8]=a.x,D[te+_+9]=a.y,D[te+_+10]=a.z,D[te+_+11]=H.itemSize===4?a.w:1)}}M={count:S,texture:V,size:new Nt(L,P)},r.set(f,M),f.addEventListener("dispose",m)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let N=0;for(let E=0;E<g.length;E++)N+=g[E];const C=f.morphTargetsRelative?1:1-N;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",M.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",M.size)}return{update:l}}function SM(o,e,n,r){let a=new WeakMap;function l(p){const g=r.render.frame,x=p.geometry,S=e.get(p,x);if(a.get(S)!==g&&(e.update(S),a.set(S,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==g&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,g))),p.isSkinnedMesh){const M=p.skeleton;a.get(M)!==g&&(M.update(),a.set(M,g))}return S}function c(){a=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:c}}const qg=new Dn,Cm=new jg(1,1),Yg=new Ng,$g=new ey,Kg=new Vg,Rm=[],Pm=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Nm=new Float32Array(4);function Qo(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let l=Rm[a];if(l===void 0&&(l=new Float32Array(a),Rm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,o[c].toArray(l,f)}return l}function Jt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function en(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Gl(o,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function MM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function EM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2fv(this.addr,e),en(n,e)}}function wM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;o.uniform3fv(this.addr,e),en(n,e)}}function TM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4fv(this.addr,e),en(n,e)}}function bM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Nm.set(r),o.uniformMatrix2fv(this.addr,!1,Nm),en(n,r)}}function AM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Dm.set(r),o.uniformMatrix3fv(this.addr,!1,Dm),en(n,r)}}function CM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Lm.set(r),o.uniformMatrix4fv(this.addr,!1,Lm),en(n,r)}}function RM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function PM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2iv(this.addr,e),en(n,e)}}function LM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3iv(this.addr,e),en(n,e)}}function DM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4iv(this.addr,e),en(n,e)}}function NM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function IM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2uiv(this.addr,e),en(n,e)}}function UM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3uiv(this.addr,e),en(n,e)}}function OM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4uiv(this.addr,e),en(n,e)}}function FM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let l;this.type===o.SAMPLER_2D_SHADOW?(Cm.compareFunction=Pg,l=Cm):l=qg,n.setTexture2D(e||l,a)}function kM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$g,a)}function zM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Kg,a)}function BM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Yg,a)}function HM(o){switch(o){case 5126:return MM;case 35664:return EM;case 35665:return wM;case 35666:return TM;case 35674:return bM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return PM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return IM;case 36295:return UM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return BM}}function VM(o,e){o.uniform1fv(this.addr,e)}function GM(o,e){const n=Qo(e,this.size,2);o.uniform2fv(this.addr,n)}function WM(o,e){const n=Qo(e,this.size,3);o.uniform3fv(this.addr,n)}function jM(o,e){const n=Qo(e,this.size,4);o.uniform4fv(this.addr,n)}function XM(o,e){const n=Qo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function qM(o,e){const n=Qo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function YM(o,e){const n=Qo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function $M(o,e){o.uniform1iv(this.addr,e)}function KM(o,e){o.uniform2iv(this.addr,e)}function ZM(o,e){o.uniform3iv(this.addr,e)}function QM(o,e){o.uniform4iv(this.addr,e)}function JM(o,e){o.uniform1uiv(this.addr,e)}function eE(o,e){o.uniform2uiv(this.addr,e)}function tE(o,e){o.uniform3uiv(this.addr,e)}function nE(o,e){o.uniform4uiv(this.addr,e)}function iE(o,e,n){const r=this.cache,a=e.length,l=Gl(n,a);Jt(r,l)||(o.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||qg,l[c])}function rE(o,e,n){const r=this.cache,a=e.length,l=Gl(n,a);Jt(r,l)||(o.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||$g,l[c])}function oE(o,e,n){const r=this.cache,a=e.length,l=Gl(n,a);Jt(r,l)||(o.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Kg,l[c])}function sE(o,e,n){const r=this.cache,a=e.length,l=Gl(n,a);Jt(r,l)||(o.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Yg,l[c])}function aE(o){switch(o){case 5126:return VM;case 35664:return GM;case 35665:return WM;case 35666:return jM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return $M;case 35667:case 35671:return KM;case 35668:case 35672:return ZM;case 35669:case 35673:return QM;case 5125:return JM;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return sE}}class lE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=HM(n.type)}}class uE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aE(n.type)}}class cE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function Im(o,e){o.seq.push(e),o.map[e.id]=e}function fE(o,e,n){const r=o.name,a=r.length;for(nf.lastIndex=0;;){const l=nf.exec(r),c=nf.lastIndex;let f=l[1];const p=l[2]==="]",g=l[3];if(p&&(f=f|0),g===void 0||g==="["&&c+2===a){Im(n,g===void 0?new lE(f,o,e):new uE(f,o,e));break}else{let S=n.map[f];S===void 0&&(S=new cE(f),Im(n,S)),n=S}}}class Dl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);fE(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Um(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const dE=37297;let hE=0;function pE(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const Om=new pt;function mE(o){Ct._getMatrix(Om,Ct.workingColorSpace,o);const e=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(o)){case Ul:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Fm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+pE(o.getShaderSource(e),c)}else return a}function gE(o,e){const n=mE(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function vE(o,e){let n;switch(e){case T0:n="Linear";break;case b0:n="Reinhard";break;case A0:n="Cineon";break;case C0:n="ACESFilmic";break;case P0:n="AgX";break;case L0:n="Neutral";break;case R0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bl=new pe;function _E(){Ct.getLuminanceCoefficients(bl);const o=bl.x.toFixed(4),e=bl.y.toFixed(4),n=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function xE(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function SE(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=o.getActiveAttrib(e,a),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(e,c),locationSize:f}}return n}function zs(o){return o!==""}function km(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ME=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(o){return o.replace(ME,wE)}const EE=new Map;function wE(o,e){let n=mt[e];if(n===void 0){const r=EE.get(e);if(r!==void 0)n=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return od(n)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(o){return o.replace(TE,bE)}function bE(o,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Hm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===r0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function CE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Wo:case jo:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RE(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function PE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case _g:e="ENVMAP_BLENDING_MULTIPLY";break;case E0:e="ENVMAP_BLENDING_MIX";break;case w0:e="ENVMAP_BLENDING_ADD";break}return e}function LE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function DE(o,e,n,r){const a=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=AE(n),g=CE(n),x=RE(n),S=PE(n),M=LE(n),b=yE(n),N=xE(l),C=a.createProgram();let E,y,Y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,N].filter(zs).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,N].filter(zs).join(`
`),y.length>0&&(y+=`
`)):(E=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,N,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),y=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,N,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?mt.tonemapping_pars_fragment:"",n.toneMapping!==gr?vE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,gE("linearToOutputTexel",n.outputColorSpace),_E(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zs).join(`
`)),c=od(c),c=km(c,n),c=zm(c,n),f=od(f),f=km(f,n),f=zm(f,n),c=Bm(c),f=Bm(f),n.isRawShaderMaterial!==!0&&(Y=`#version 300 es
`,E=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const G=Y+E+c,k=Y+y+f,L=Um(a,a.VERTEX_SHADER,G),P=Um(a,a.FRAGMENT_SHADER,k);a.attachShader(C,L),a.attachShader(C,P),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function D(U){if(o.debug.checkShaderErrors){const $=a.getProgramInfoLog(C).trim(),F=a.getShaderInfoLog(L).trim(),H=a.getShaderInfoLog(P).trim();let te=!0,Z=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(te=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,C,L,P);else{const _=Fm(a,L,"vertex"),q=Fm(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+_+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(F===""||H==="")&&(Z=!1);Z&&(U.diagnostics={runnable:te,programLog:$,vertexShader:{log:F,prefix:E},fragmentShader:{log:H,prefix:y}})}a.deleteShader(L),a.deleteShader(P),V=new Dl(a,C),w=SE(a,C)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let m=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=a.getProgramParameter(C,dE)),m},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=P,this}let NE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new UE(e),n.set(e,r)),r}}class UE{constructor(e){this.id=NE++,this.code=e,this.usedTimes=0}}function OE(o,e,n,r,a,l,c){const f=new Ug,p=new IE,g=new Set,x=[],S=a.logarithmicDepthBuffer,M=a.vertexTextures;let b=a.precision;const N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return g.add(w),w===0?"uv":`uv${w}`}function E(w,m,U,$,F){const H=$.fog,te=F.geometry,Z=w.isMeshStandardMaterial?$.environment:null,_=(w.isMeshStandardMaterial?n:e).get(w.envMap||Z),q=_&&_.mapping===Bl?_.image.height:null,O=N[w.type];w.precision!==null&&(b=a.getMaxPrecision(w.precision),b!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const v=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,T=v!==void 0?v.length:0;let B=0;te.morphAttributes.position!==void 0&&(B=1),te.morphAttributes.normal!==void 0&&(B=2),te.morphAttributes.color!==void 0&&(B=3);let ce,j,Q,re;if(O){const Et=pi[O];ce=Et.vertexShader,j=Et.fragmentShader}else ce=w.vertexShader,j=w.fragmentShader,p.update(w),Q=p.getVertexShaderID(w),re=p.getFragmentShaderID(w);const oe=o.getRenderTarget(),ve=o.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,Qe=!!w.map,Ge=!!w.matcap,Ze=!!_,X=!!w.aoMap,ct=!!w.lightMap,Je=!!w.bumpMap,De=!!w.normalMap,Pe=!!w.displacementMap,ot=!!w.emissiveMap,Le=!!w.metalnessMap,z=!!w.roughnessMap,R=w.anisotropy>0,le=w.clearcoat>0,ye=w.dispersion>0,xe=w.iridescence>0,ge=w.sheen>0,Be=w.transmission>0,Re=R&&!!w.anisotropyMap,Ve=le&&!!w.clearcoatMap,gt=le&&!!w.clearcoatNormalMap,be=le&&!!w.clearcoatRoughnessMap,Xe=xe&&!!w.iridescenceMap,nt=xe&&!!w.iridescenceThicknessMap,st=ge&&!!w.sheenColorMap,qe=ge&&!!w.sheenRoughnessMap,vt=!!w.specularMap,ft=!!w.specularColorMap,Rt=!!w.specularIntensityMap,ne=Be&&!!w.transmissionMap,Ne=Be&&!!w.thicknessMap,me=!!w.gradientMap,_e=!!w.alphaMap,ke=w.alphaTest>0,Oe=!!w.alphaHash,dt=!!w.extensions;let Ut=gr;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ut=o.toneMapping);const Kt={shaderID:O,shaderType:w.type,shaderName:w.name,vertexShader:ce,fragmentShader:j,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:oe===null?o.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Yo,alphaToCoverage:!!w.alphaToCoverage,map:Qe,matcap:Ge,envMap:Ze,envMapMode:Ze&&_.mapping,envMapCubeUVHeight:q,aoMap:X,lightMap:ct,bumpMap:Je,normalMap:De,displacementMap:M&&Pe,emissiveMap:ot,normalMapObjectSpace:De&&w.normalMapType===O0,normalMapTangentSpace:De&&w.normalMapType===U0,metalnessMap:Le,roughnessMap:z,anisotropy:R,anisotropyMap:Re,clearcoat:le,clearcoatMap:Ve,clearcoatNormalMap:gt,clearcoatRoughnessMap:be,dispersion:ye,iridescence:xe,iridescenceMap:Xe,iridescenceThicknessMap:nt,sheen:ge,sheenColorMap:st,sheenRoughnessMap:qe,specularMap:vt,specularColorMap:ft,specularIntensityMap:Rt,transmission:Be,transmissionMap:ne,thicknessMap:Ne,gradientMap:me,opaque:w.transparent===!1&&w.blending===Bo&&w.alphaToCoverage===!1,alphaMap:_e,alphaTest:ke,alphaHash:Oe,combine:w.combine,mapUv:Qe&&C(w.map.channel),aoMapUv:X&&C(w.aoMap.channel),lightMapUv:ct&&C(w.lightMap.channel),bumpMapUv:Je&&C(w.bumpMap.channel),normalMapUv:De&&C(w.normalMap.channel),displacementMapUv:Pe&&C(w.displacementMap.channel),emissiveMapUv:ot&&C(w.emissiveMap.channel),metalnessMapUv:Le&&C(w.metalnessMap.channel),roughnessMapUv:z&&C(w.roughnessMap.channel),anisotropyMapUv:Re&&C(w.anisotropyMap.channel),clearcoatMapUv:Ve&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:gt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:st&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&C(w.sheenRoughnessMap.channel),specularMapUv:vt&&C(w.specularMap.channel),specularColorMapUv:ft&&C(w.specularColorMap.channel),specularIntensityMapUv:Rt&&C(w.specularIntensityMap.channel),transmissionMapUv:ne&&C(w.transmissionMap.channel),thicknessMapUv:Ne&&C(w.thicknessMap.channel),alphaMapUv:_e&&C(w.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(De||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!te.attributes.uv&&(Qe||_e),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:B,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Qe&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:ot&&w.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ni,flipSided:w.side===Ln,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:dt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&w.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Kt.vertexUv1s=g.has(1),Kt.vertexUv2s=g.has(2),Kt.vertexUv3s=g.has(3),g.clear(),Kt}function y(w){const m=[];if(w.shaderID?m.push(w.shaderID):(m.push(w.customVertexShaderID),m.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)m.push(U),m.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(Y(m,w),G(m,w),m.push(o.outputColorSpace)),m.push(w.customProgramCacheKey),m.join()}function Y(w,m){w.push(m.precision),w.push(m.outputColorSpace),w.push(m.envMapMode),w.push(m.envMapCubeUVHeight),w.push(m.mapUv),w.push(m.alphaMapUv),w.push(m.lightMapUv),w.push(m.aoMapUv),w.push(m.bumpMapUv),w.push(m.normalMapUv),w.push(m.displacementMapUv),w.push(m.emissiveMapUv),w.push(m.metalnessMapUv),w.push(m.roughnessMapUv),w.push(m.anisotropyMapUv),w.push(m.clearcoatMapUv),w.push(m.clearcoatNormalMapUv),w.push(m.clearcoatRoughnessMapUv),w.push(m.iridescenceMapUv),w.push(m.iridescenceThicknessMapUv),w.push(m.sheenColorMapUv),w.push(m.sheenRoughnessMapUv),w.push(m.specularMapUv),w.push(m.specularColorMapUv),w.push(m.specularIntensityMapUv),w.push(m.transmissionMapUv),w.push(m.thicknessMapUv),w.push(m.combine),w.push(m.fogExp2),w.push(m.sizeAttenuation),w.push(m.morphTargetsCount),w.push(m.morphAttributeCount),w.push(m.numDirLights),w.push(m.numPointLights),w.push(m.numSpotLights),w.push(m.numSpotLightMaps),w.push(m.numHemiLights),w.push(m.numRectAreaLights),w.push(m.numDirLightShadows),w.push(m.numPointLightShadows),w.push(m.numSpotLightShadows),w.push(m.numSpotLightShadowsWithMaps),w.push(m.numLightProbes),w.push(m.shadowMapType),w.push(m.toneMapping),w.push(m.numClippingPlanes),w.push(m.numClipIntersection),w.push(m.depthPacking)}function G(w,m){f.disableAll(),m.supportsVertexTextures&&f.enable(0),m.instancing&&f.enable(1),m.instancingColor&&f.enable(2),m.instancingMorph&&f.enable(3),m.matcap&&f.enable(4),m.envMap&&f.enable(5),m.normalMapObjectSpace&&f.enable(6),m.normalMapTangentSpace&&f.enable(7),m.clearcoat&&f.enable(8),m.iridescence&&f.enable(9),m.alphaTest&&f.enable(10),m.vertexColors&&f.enable(11),m.vertexAlphas&&f.enable(12),m.vertexUv1s&&f.enable(13),m.vertexUv2s&&f.enable(14),m.vertexUv3s&&f.enable(15),m.vertexTangents&&f.enable(16),m.anisotropy&&f.enable(17),m.alphaHash&&f.enable(18),m.batching&&f.enable(19),m.dispersion&&f.enable(20),m.batchingColor&&f.enable(21),w.push(f.mask),f.disableAll(),m.fog&&f.enable(0),m.useFog&&f.enable(1),m.flatShading&&f.enable(2),m.logarithmicDepthBuffer&&f.enable(3),m.reverseDepthBuffer&&f.enable(4),m.skinning&&f.enable(5),m.morphTargets&&f.enable(6),m.morphNormals&&f.enable(7),m.morphColors&&f.enable(8),m.premultipliedAlpha&&f.enable(9),m.shadowMapEnabled&&f.enable(10),m.doubleSided&&f.enable(11),m.flipSided&&f.enable(12),m.useDepthPacking&&f.enable(13),m.dithering&&f.enable(14),m.transmission&&f.enable(15),m.sheen&&f.enable(16),m.opaque&&f.enable(17),m.pointsUvs&&f.enable(18),m.decodeVideoTexture&&f.enable(19),m.decodeVideoTextureEmissive&&f.enable(20),m.alphaToCoverage&&f.enable(21),w.push(f.mask)}function k(w){const m=N[w.type];let U;if(m){const $=pi[m];U=dy.clone($.uniforms)}else U=w.uniforms;return U}function L(w,m){let U;for(let $=0,F=x.length;$<F;$++){const H=x[$];if(H.cacheKey===m){U=H,++U.usedTimes;break}}return U===void 0&&(U=new DE(o,m,w,l),x.push(U)),U}function P(w){if(--w.usedTimes===0){const m=x.indexOf(w);x[m]=x[x.length-1],x.pop(),w.destroy()}}function D(w){p.remove(w)}function V(){p.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:k,acquireProgram:L,releaseProgram:P,releaseShaderCache:D,programs:x,dispose:V}}function FE(){let o=new WeakMap;function e(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function r(c){o.delete(c)}function a(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function kE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Vm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Gm(){const o=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(S,M,b,N,C,E){let y=o[e];return y===void 0?(y={id:S.id,object:S,geometry:M,material:b,groupOrder:N,renderOrder:S.renderOrder,z:C,group:E},o[e]=y):(y.id=S.id,y.object=S,y.geometry=M,y.material=b,y.groupOrder=N,y.renderOrder=S.renderOrder,y.z=C,y.group=E),e++,y}function f(S,M,b,N,C,E){const y=c(S,M,b,N,C,E);b.transmission>0?r.push(y):b.transparent===!0?a.push(y):n.push(y)}function p(S,M,b,N,C,E){const y=c(S,M,b,N,C,E);b.transmission>0?r.unshift(y):b.transparent===!0?a.unshift(y):n.unshift(y)}function g(S,M){n.length>1&&n.sort(S||kE),r.length>1&&r.sort(M||Vm),a.length>1&&a.sort(M||Vm)}function x(){for(let S=e,M=o.length;S<M;S++){const b=o[S];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:x,sort:g}}function zE(){let o=new WeakMap;function e(r,a){const l=o.get(r);let c;return l===void 0?(c=new Gm,o.set(r,[c])):a>=l.length?(c=new Gm,l.push(c)):c=l[a],c}function n(){o=new WeakMap}return{get:e,dispose:n}}function BE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new pe,color:new Pt};break;case"SpotLight":n={position:new pe,direction:new pe,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new pe,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new pe,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return o[e.id]=n,n}}}function HE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let VE=0;function GE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function WE(o){const e=new BE,n=HE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new pe);const a=new pe,l=new qt,c=new qt;function f(g){let x=0,S=0,M=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let b=0,N=0,C=0,E=0,y=0,Y=0,G=0,k=0,L=0,P=0,D=0;g.sort(GE);for(let w=0,m=g.length;w<m;w++){const U=g[w],$=U.color,F=U.intensity,H=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)x+=$.r*F,S+=$.g*F,M+=$.b*F;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(U.sh.coefficients[Z],F);D++}else if(U.isDirectionalLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const _=U.shadow,q=n.get(U);q.shadowIntensity=_.intensity,q.shadowBias=_.bias,q.shadowNormalBias=_.normalBias,q.shadowRadius=_.radius,q.shadowMapSize=_.mapSize,r.directionalShadow[b]=q,r.directionalShadowMap[b]=te,r.directionalShadowMatrix[b]=U.shadow.matrix,Y++}r.directional[b]=Z,b++}else if(U.isSpotLight){const Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy($).multiplyScalar(F),Z.distance=H,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,r.spot[C]=Z;const _=U.shadow;if(U.map&&(r.spotLightMap[L]=U.map,L++,_.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[C]=_.matrix,U.castShadow){const q=n.get(U);q.shadowIntensity=_.intensity,q.shadowBias=_.bias,q.shadowNormalBias=_.normalBias,q.shadowRadius=_.radius,q.shadowMapSize=_.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=te,k++}C++}else if(U.isRectAreaLight){const Z=e.get(U);Z.color.copy($).multiplyScalar(F),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),r.rectArea[E]=Z,E++}else if(U.isPointLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const _=U.shadow,q=n.get(U);q.shadowIntensity=_.intensity,q.shadowBias=_.bias,q.shadowNormalBias=_.normalBias,q.shadowRadius=_.radius,q.shadowMapSize=_.mapSize,q.shadowCameraNear=_.camera.near,q.shadowCameraFar=_.camera.far,r.pointShadow[N]=q,r.pointShadowMap[N]=te,r.pointShadowMatrix[N]=U.shadow.matrix,G++}r.point[N]=Z,N++}else if(U.isHemisphereLight){const Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(F),Z.groundColor.copy(U.groundColor).multiplyScalar(F),r.hemi[y]=Z,y++}}E>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=M;const V=r.hash;(V.directionalLength!==b||V.pointLength!==N||V.spotLength!==C||V.rectAreaLength!==E||V.hemiLength!==y||V.numDirectionalShadows!==Y||V.numPointShadows!==G||V.numSpotShadows!==k||V.numSpotMaps!==L||V.numLightProbes!==D)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=E,r.point.length=N,r.hemi.length=y,r.directionalShadow.length=Y,r.directionalShadowMap.length=Y,r.pointShadow.length=G,r.pointShadowMap.length=G,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=Y,r.pointShadowMatrix.length=G,r.spotLightMatrix.length=k+L-P,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=D,V.directionalLength=b,V.pointLength=N,V.spotLength=C,V.rectAreaLength=E,V.hemiLength=y,V.numDirectionalShadows=Y,V.numPointShadows=G,V.numSpotShadows=k,V.numSpotMaps=L,V.numLightProbes=D,r.version=VE++)}function p(g,x){let S=0,M=0,b=0,N=0,C=0;const E=x.matrixWorldInverse;for(let y=0,Y=g.length;y<Y;y++){const G=g[y];if(G.isDirectionalLight){const k=r.directional[S];k.direction.setFromMatrixPosition(G.matrixWorld),a.setFromMatrixPosition(G.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(E),S++}else if(G.isSpotLight){const k=r.spot[b];k.position.setFromMatrixPosition(G.matrixWorld),k.position.applyMatrix4(E),k.direction.setFromMatrixPosition(G.matrixWorld),a.setFromMatrixPosition(G.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(E),b++}else if(G.isRectAreaLight){const k=r.rectArea[N];k.position.setFromMatrixPosition(G.matrixWorld),k.position.applyMatrix4(E),c.identity(),l.copy(G.matrixWorld),l.premultiply(E),c.extractRotation(l),k.halfWidth.set(G.width*.5,0,0),k.halfHeight.set(0,G.height*.5,0),k.halfWidth.applyMatrix4(c),k.halfHeight.applyMatrix4(c),N++}else if(G.isPointLight){const k=r.point[M];k.position.setFromMatrixPosition(G.matrixWorld),k.position.applyMatrix4(E),M++}else if(G.isHemisphereLight){const k=r.hemi[C];k.direction.setFromMatrixPosition(G.matrixWorld),k.direction.transformDirection(E),C++}}}return{setup:f,setupView:p,state:r}}function Wm(o){const e=new WE(o),n=[],r=[];function a(x){g.camera=x,n.length=0,r.length=0}function l(x){n.push(x)}function c(x){r.push(x)}function f(){e.setup(n)}function p(x){e.setupView(n,x)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function jE(o){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Wm(o),e.set(a,[f])):l>=c.length?(f=new Wm(o),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const XE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qE=`uniform sampler2D shadow_pass;
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
}`;function YE(o,e,n){let r=new Gg;const a=new Nt,l=new Nt,c=new Xt,f=new Sy({depthPacking:I0}),p=new My,g={},x=n.maxTextureSize,S={[vr]:Ln,[Ln]:vr,[Ni]:Ni},M=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:XE,fragmentShader:qE}),b=M.clone();b.defines.HORIZONTAL_PASS=1;const N=new Bi;N.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Oi(N,M),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let y=this.type;this.render=function(P,D,V){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||P.length===0)return;const w=o.getRenderTarget(),m=o.getActiveCubeFace(),U=o.getActiveMipmapLevel(),$=o.state;$.setBlending(mr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const F=y!==Di&&this.type===Di,H=y===Di&&this.type!==Di;for(let te=0,Z=P.length;te<Z;te++){const _=P[te],q=_.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",_,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const O=q.getFrameExtents();if(a.multiply(O),l.copy(q.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/O.x),a.x=l.x*O.x,q.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/O.y),a.y=l.y*O.y,q.mapSize.y=l.y)),q.map===null||F===!0||H===!0){const T=this.type!==Di?{minFilter:ai,magFilter:ai}:{};q.map!==null&&q.map.dispose(),q.map=new Qr(a.x,a.y,T),q.map.texture.name=_.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const v=q.getViewportCount();for(let T=0;T<v;T++){const B=q.getViewport(T);c.set(l.x*B.x,l.y*B.y,l.x*B.z,l.y*B.w),$.viewport(c),q.updateMatrices(_,T),r=q.getFrustum(),k(D,V,q.camera,_,this.type)}q.isPointLightShadow!==!0&&this.type===Di&&Y(q,V),q.needsUpdate=!1}y=this.type,E.needsUpdate=!1,o.setRenderTarget(w,m,U)};function Y(P,D){const V=e.update(C);M.defines.VSM_SAMPLES!==P.blurSamples&&(M.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,M.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Qr(a.x,a.y)),M.uniforms.shadow_pass.value=P.map.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(D,null,V,M,C,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(D,null,V,b,C,null)}function G(P,D,V,w){let m=null;const U=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)m=U;else if(m=V.isPointLight===!0?p:f,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const $=m.uuid,F=D.uuid;let H=g[$];H===void 0&&(H={},g[$]=H);let te=H[F];te===void 0&&(te=m.clone(),H[F]=te,D.addEventListener("dispose",L)),m=te}if(m.visible=D.visible,m.wireframe=D.wireframe,w===Di?m.side=D.shadowSide!==null?D.shadowSide:D.side:m.side=D.shadowSide!==null?D.shadowSide:S[D.side],m.alphaMap=D.alphaMap,m.alphaTest=D.alphaTest,m.map=D.map,m.clipShadows=D.clipShadows,m.clippingPlanes=D.clippingPlanes,m.clipIntersection=D.clipIntersection,m.displacementMap=D.displacementMap,m.displacementScale=D.displacementScale,m.displacementBias=D.displacementBias,m.wireframeLinewidth=D.wireframeLinewidth,m.linewidth=D.linewidth,V.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const $=o.properties.get(m);$.light=V}return m}function k(P,D,V,w,m){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&m===Di)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const F=e.update(P),H=P.material;if(Array.isArray(H)){const te=F.groups;for(let Z=0,_=te.length;Z<_;Z++){const q=te[Z],O=H[q.materialIndex];if(O&&O.visible){const v=G(P,O,w,m);P.onBeforeShadow(o,P,D,V,F,v,q),o.renderBufferDirect(V,null,F,v,P,q),P.onAfterShadow(o,P,D,V,F,v,q)}}}else if(H.visible){const te=G(P,H,w,m);P.onBeforeShadow(o,P,D,V,F,te,null),o.renderBufferDirect(V,null,F,te,P,null),P.onAfterShadow(o,P,D,V,F,te,null)}}const $=P.children;for(let F=0,H=$.length;F<H;F++)k($[F],D,V,w,m)}function L(P){P.target.removeEventListener("dispose",L);for(const V in g){const w=g[V],m=P.target.uuid;m in w&&(w[m].dispose(),delete w[m])}}}const $E={[xf]:Sf,[Mf]:Tf,[Ef]:bf,[Go]:wf,[Sf]:xf,[Tf]:Mf,[bf]:Ef,[wf]:Go};function KE(o,e){function n(){let ne=!1;const Ne=new Xt;let me=null;const _e=new Xt(0,0,0,0);return{setMask:function(ke){me!==ke&&!ne&&(o.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){ne=ke},setClear:function(ke,Oe,dt,Ut,Kt){Kt===!0&&(ke*=Ut,Oe*=Ut,dt*=Ut),Ne.set(ke,Oe,dt,Ut),_e.equals(Ne)===!1&&(o.clearColor(ke,Oe,dt,Ut),_e.copy(Ne))},reset:function(){ne=!1,me=null,_e.set(-1,0,0,0)}}}function r(){let ne=!1,Ne=!1,me=null,_e=null,ke=null;return{setReversed:function(Oe){if(Ne!==Oe){const dt=e.get("EXT_clip_control");Ne?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=ke;ke=null,this.setClear(Ut)}Ne=Oe},getReversed:function(){return Ne},setTest:function(Oe){Oe?oe(o.DEPTH_TEST):ve(o.DEPTH_TEST)},setMask:function(Oe){me!==Oe&&!ne&&(o.depthMask(Oe),me=Oe)},setFunc:function(Oe){if(Ne&&(Oe=$E[Oe]),_e!==Oe){switch(Oe){case xf:o.depthFunc(o.NEVER);break;case Sf:o.depthFunc(o.ALWAYS);break;case Mf:o.depthFunc(o.LESS);break;case Go:o.depthFunc(o.LEQUAL);break;case Ef:o.depthFunc(o.EQUAL);break;case wf:o.depthFunc(o.GEQUAL);break;case Tf:o.depthFunc(o.GREATER);break;case bf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_e=Oe}},setLocked:function(Oe){ne=Oe},setClear:function(Oe){ke!==Oe&&(Ne&&(Oe=1-Oe),o.clearDepth(Oe),ke=Oe)},reset:function(){ne=!1,me=null,_e=null,ke=null,Ne=!1}}}function a(){let ne=!1,Ne=null,me=null,_e=null,ke=null,Oe=null,dt=null,Ut=null,Kt=null;return{setTest:function(Et){ne||(Et?oe(o.STENCIL_TEST):ve(o.STENCIL_TEST))},setMask:function(Et){Ne!==Et&&!ne&&(o.stencilMask(Et),Ne=Et)},setFunc:function(Et,En,vn){(me!==Et||_e!==En||ke!==vn)&&(o.stencilFunc(Et,En,vn),me=Et,_e=En,ke=vn)},setOp:function(Et,En,vn){(Oe!==Et||dt!==En||Ut!==vn)&&(o.stencilOp(Et,En,vn),Oe=Et,dt=En,Ut=vn)},setLocked:function(Et){ne=Et},setClear:function(Et){Kt!==Et&&(o.clearStencil(Et),Kt=Et)},reset:function(){ne=!1,Ne=null,me=null,_e=null,ke=null,Oe=null,dt=null,Ut=null,Kt=null}}}const l=new n,c=new r,f=new a,p=new WeakMap,g=new WeakMap;let x={},S={},M=new WeakMap,b=[],N=null,C=!1,E=null,y=null,Y=null,G=null,k=null,L=null,P=null,D=new Pt(0,0,0),V=0,w=!1,m=null,U=null,$=null,F=null,H=null;const te=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,_=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=_>=1):q.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=_>=2);let O=null,v={};const T=o.getParameter(o.SCISSOR_BOX),B=o.getParameter(o.VIEWPORT),ce=new Xt().fromArray(T),j=new Xt().fromArray(B);function Q(ne,Ne,me,_e){const ke=new Uint8Array(4),Oe=o.createTexture();o.bindTexture(ne,Oe),o.texParameteri(ne,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(ne,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let dt=0;dt<me;dt++)ne===o.TEXTURE_3D||ne===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,_e,0,o.RGBA,o.UNSIGNED_BYTE,ke):o.texImage2D(Ne+dt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ke);return Oe}const re={};re[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),re[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),re[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),oe(o.DEPTH_TEST),c.setFunc(Go),Je(!1),De(Yp),oe(o.CULL_FACE),X(mr);function oe(ne){x[ne]!==!0&&(o.enable(ne),x[ne]=!0)}function ve(ne){x[ne]!==!1&&(o.disable(ne),x[ne]=!1)}function Se(ne,Ne){return S[ne]!==Ne?(o.bindFramebuffer(ne,Ne),S[ne]=Ne,ne===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ne),ne===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ce(ne,Ne){let me=b,_e=!1;if(ne){me=M.get(Ne),me===void 0&&(me=[],M.set(Ne,me));const ke=ne.textures;if(me.length!==ke.length||me[0]!==o.COLOR_ATTACHMENT0){for(let Oe=0,dt=ke.length;Oe<dt;Oe++)me[Oe]=o.COLOR_ATTACHMENT0+Oe;me.length=ke.length,_e=!0}}else me[0]!==o.BACK&&(me[0]=o.BACK,_e=!0);_e&&o.drawBuffers(me)}function Qe(ne){return N!==ne?(o.useProgram(ne),N=ne,!0):!1}const Ge={[Wr]:o.FUNC_ADD,[s0]:o.FUNC_SUBTRACT,[a0]:o.FUNC_REVERSE_SUBTRACT};Ge[l0]=o.MIN,Ge[u0]=o.MAX;const Ze={[c0]:o.ZERO,[f0]:o.ONE,[d0]:o.SRC_COLOR,[_f]:o.SRC_ALPHA,[_0]:o.SRC_ALPHA_SATURATE,[g0]:o.DST_COLOR,[p0]:o.DST_ALPHA,[h0]:o.ONE_MINUS_SRC_COLOR,[yf]:o.ONE_MINUS_SRC_ALPHA,[v0]:o.ONE_MINUS_DST_COLOR,[m0]:o.ONE_MINUS_DST_ALPHA,[y0]:o.CONSTANT_COLOR,[x0]:o.ONE_MINUS_CONSTANT_COLOR,[S0]:o.CONSTANT_ALPHA,[M0]:o.ONE_MINUS_CONSTANT_ALPHA};function X(ne,Ne,me,_e,ke,Oe,dt,Ut,Kt,Et){if(ne===mr){C===!0&&(ve(o.BLEND),C=!1);return}if(C===!1&&(oe(o.BLEND),C=!0),ne!==o0){if(ne!==E||Et!==w){if((y!==Wr||k!==Wr)&&(o.blendEquation(o.FUNC_ADD),y=Wr,k=Wr),Et)switch(ne){case Bo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $p:o.blendFunc(o.ONE,o.ONE);break;case Kp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ne);break}else switch(ne){case Bo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $p:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Kp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ne);break}Y=null,G=null,L=null,P=null,D.set(0,0,0),V=0,E=ne,w=Et}return}ke=ke||Ne,Oe=Oe||me,dt=dt||_e,(Ne!==y||ke!==k)&&(o.blendEquationSeparate(Ge[Ne],Ge[ke]),y=Ne,k=ke),(me!==Y||_e!==G||Oe!==L||dt!==P)&&(o.blendFuncSeparate(Ze[me],Ze[_e],Ze[Oe],Ze[dt]),Y=me,G=_e,L=Oe,P=dt),(Ut.equals(D)===!1||Kt!==V)&&(o.blendColor(Ut.r,Ut.g,Ut.b,Kt),D.copy(Ut),V=Kt),E=ne,w=!1}function ct(ne,Ne){ne.side===Ni?ve(o.CULL_FACE):oe(o.CULL_FACE);let me=ne.side===Ln;Ne&&(me=!me),Je(me),ne.blending===Bo&&ne.transparent===!1?X(mr):X(ne.blending,ne.blendEquation,ne.blendSrc,ne.blendDst,ne.blendEquationAlpha,ne.blendSrcAlpha,ne.blendDstAlpha,ne.blendColor,ne.blendAlpha,ne.premultipliedAlpha),c.setFunc(ne.depthFunc),c.setTest(ne.depthTest),c.setMask(ne.depthWrite),l.setMask(ne.colorWrite);const _e=ne.stencilWrite;f.setTest(_e),_e&&(f.setMask(ne.stencilWriteMask),f.setFunc(ne.stencilFunc,ne.stencilRef,ne.stencilFuncMask),f.setOp(ne.stencilFail,ne.stencilZFail,ne.stencilZPass)),ot(ne.polygonOffset,ne.polygonOffsetFactor,ne.polygonOffsetUnits),ne.alphaToCoverage===!0?oe(o.SAMPLE_ALPHA_TO_COVERAGE):ve(o.SAMPLE_ALPHA_TO_COVERAGE)}function Je(ne){m!==ne&&(ne?o.frontFace(o.CW):o.frontFace(o.CCW),m=ne)}function De(ne){ne!==n0?(oe(o.CULL_FACE),ne!==U&&(ne===Yp?o.cullFace(o.BACK):ne===i0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ve(o.CULL_FACE),U=ne}function Pe(ne){ne!==$&&(Z&&o.lineWidth(ne),$=ne)}function ot(ne,Ne,me){ne?(oe(o.POLYGON_OFFSET_FILL),(F!==Ne||H!==me)&&(o.polygonOffset(Ne,me),F=Ne,H=me)):ve(o.POLYGON_OFFSET_FILL)}function Le(ne){ne?oe(o.SCISSOR_TEST):ve(o.SCISSOR_TEST)}function z(ne){ne===void 0&&(ne=o.TEXTURE0+te-1),O!==ne&&(o.activeTexture(ne),O=ne)}function R(ne,Ne,me){me===void 0&&(O===null?me=o.TEXTURE0+te-1:me=O);let _e=v[me];_e===void 0&&(_e={type:void 0,texture:void 0},v[me]=_e),(_e.type!==ne||_e.texture!==Ne)&&(O!==me&&(o.activeTexture(me),O=me),o.bindTexture(ne,Ne||re[ne]),_e.type=ne,_e.texture=Ne)}function le(){const ne=v[O];ne!==void 0&&ne.type!==void 0&&(o.bindTexture(ne.type,null),ne.type=void 0,ne.texture=void 0)}function ye(){try{o.compressedTexImage2D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function xe(){try{o.compressedTexImage3D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function ge(){try{o.texSubImage2D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Be(){try{o.texSubImage3D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Ve(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function gt(){try{o.texStorage2D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function be(){try{o.texStorage3D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Xe(){try{o.texImage2D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function nt(){try{o.texImage3D.apply(o,arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function st(ne){ce.equals(ne)===!1&&(o.scissor(ne.x,ne.y,ne.z,ne.w),ce.copy(ne))}function qe(ne){j.equals(ne)===!1&&(o.viewport(ne.x,ne.y,ne.z,ne.w),j.copy(ne))}function vt(ne,Ne){let me=g.get(Ne);me===void 0&&(me=new WeakMap,g.set(Ne,me));let _e=me.get(ne);_e===void 0&&(_e=o.getUniformBlockIndex(Ne,ne.name),me.set(ne,_e))}function ft(ne,Ne){const _e=g.get(Ne).get(ne);p.get(Ne)!==_e&&(o.uniformBlockBinding(Ne,_e,ne.__bindingPointIndex),p.set(Ne,_e))}function Rt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},O=null,v={},S={},M=new WeakMap,b=[],N=null,C=!1,E=null,y=null,Y=null,G=null,k=null,L=null,P=null,D=new Pt(0,0,0),V=0,w=!1,m=null,U=null,$=null,F=null,H=null,ce.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:oe,disable:ve,bindFramebuffer:Se,drawBuffers:Ce,useProgram:Qe,setBlending:X,setMaterial:ct,setFlipSided:Je,setCullFace:De,setLineWidth:Pe,setPolygonOffset:ot,setScissorTest:Le,activeTexture:z,bindTexture:R,unbindTexture:le,compressedTexImage2D:ye,compressedTexImage3D:xe,texImage2D:Xe,texImage3D:nt,updateUBOMapping:vt,uniformBlockBinding:ft,texStorage2D:gt,texStorage3D:be,texSubImage2D:ge,texSubImage3D:Be,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ve,scissor:st,viewport:qe,reset:Rt}}function ZE(o,e,n,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Nt,x=new WeakMap;let S;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(z,R){return b?new OffscreenCanvas(z,R):Fl("canvas")}function C(z,R,le){let ye=1;const xe=Le(z);if((xe.width>le||xe.height>le)&&(ye=le/Math.max(xe.width,xe.height)),ye<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ge=Math.floor(ye*xe.width),Be=Math.floor(ye*xe.height);S===void 0&&(S=N(ge,Be));const Re=R?N(ge,Be):S;return Re.width=ge,Re.height=Be,Re.getContext("2d").drawImage(z,0,0,ge,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ge+"x"+Be+")."),Re}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),z;return z}function E(z){return z.generateMipmaps}function y(z){o.generateMipmap(z)}function Y(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function G(z,R,le,ye,xe=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ge=R;if(R===o.RED&&(le===o.FLOAT&&(ge=o.R32F),le===o.HALF_FLOAT&&(ge=o.R16F),le===o.UNSIGNED_BYTE&&(ge=o.R8)),R===o.RED_INTEGER&&(le===o.UNSIGNED_BYTE&&(ge=o.R8UI),le===o.UNSIGNED_SHORT&&(ge=o.R16UI),le===o.UNSIGNED_INT&&(ge=o.R32UI),le===o.BYTE&&(ge=o.R8I),le===o.SHORT&&(ge=o.R16I),le===o.INT&&(ge=o.R32I)),R===o.RG&&(le===o.FLOAT&&(ge=o.RG32F),le===o.HALF_FLOAT&&(ge=o.RG16F),le===o.UNSIGNED_BYTE&&(ge=o.RG8)),R===o.RG_INTEGER&&(le===o.UNSIGNED_BYTE&&(ge=o.RG8UI),le===o.UNSIGNED_SHORT&&(ge=o.RG16UI),le===o.UNSIGNED_INT&&(ge=o.RG32UI),le===o.BYTE&&(ge=o.RG8I),le===o.SHORT&&(ge=o.RG16I),le===o.INT&&(ge=o.RG32I)),R===o.RGB_INTEGER&&(le===o.UNSIGNED_BYTE&&(ge=o.RGB8UI),le===o.UNSIGNED_SHORT&&(ge=o.RGB16UI),le===o.UNSIGNED_INT&&(ge=o.RGB32UI),le===o.BYTE&&(ge=o.RGB8I),le===o.SHORT&&(ge=o.RGB16I),le===o.INT&&(ge=o.RGB32I)),R===o.RGBA_INTEGER&&(le===o.UNSIGNED_BYTE&&(ge=o.RGBA8UI),le===o.UNSIGNED_SHORT&&(ge=o.RGBA16UI),le===o.UNSIGNED_INT&&(ge=o.RGBA32UI),le===o.BYTE&&(ge=o.RGBA8I),le===o.SHORT&&(ge=o.RGBA16I),le===o.INT&&(ge=o.RGBA32I)),R===o.RGB&&le===o.UNSIGNED_INT_5_9_9_9_REV&&(ge=o.RGB9_E5),R===o.RGBA){const Be=xe?Ul:Ct.getTransfer(ye);le===o.FLOAT&&(ge=o.RGBA32F),le===o.HALF_FLOAT&&(ge=o.RGBA16F),le===o.UNSIGNED_BYTE&&(ge=Be===Dt?o.SRGB8_ALPHA8:o.RGBA8),le===o.UNSIGNED_SHORT_4_4_4_4&&(ge=o.RGBA4),le===o.UNSIGNED_SHORT_5_5_5_1&&(ge=o.RGB5_A1)}return(ge===o.R16F||ge===o.R32F||ge===o.RG16F||ge===o.RG32F||ge===o.RGBA16F||ge===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function k(z,R){let le;return z?R===null||R===Zr||R===Xo?le=o.DEPTH24_STENCIL8:R===Ii?le=o.DEPTH32F_STENCIL8:R===Bs&&(le=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Zr||R===Xo?le=o.DEPTH_COMPONENT24:R===Ii?le=o.DEPTH_COMPONENT32F:R===Bs&&(le=o.DEPTH_COMPONENT16),le}function L(z,R){return E(z)===!0||z.isFramebufferTexture&&z.minFilter!==ai&&z.minFilter!==mi?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function P(z){const R=z.target;R.removeEventListener("dispose",P),V(R),R.isVideoTexture&&x.delete(R)}function D(z){const R=z.target;R.removeEventListener("dispose",D),m(R)}function V(z){const R=r.get(z);if(R.__webglInit===void 0)return;const le=z.source,ye=M.get(le);if(ye){const xe=ye[R.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&w(z),Object.keys(ye).length===0&&M.delete(le)}r.remove(z)}function w(z){const R=r.get(z);o.deleteTexture(R.__webglTexture);const le=z.source,ye=M.get(le);delete ye[R.__cacheKey],c.memory.textures--}function m(z){const R=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(R.__webglFramebuffer[ye]))for(let xe=0;xe<R.__webglFramebuffer[ye].length;xe++)o.deleteFramebuffer(R.__webglFramebuffer[ye][xe]);else o.deleteFramebuffer(R.__webglFramebuffer[ye]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[ye])}else{if(Array.isArray(R.__webglFramebuffer))for(let ye=0;ye<R.__webglFramebuffer.length;ye++)o.deleteFramebuffer(R.__webglFramebuffer[ye]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ye=0;ye<R.__webglColorRenderbuffer.length;ye++)R.__webglColorRenderbuffer[ye]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[ye]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const le=z.textures;for(let ye=0,xe=le.length;ye<xe;ye++){const ge=r.get(le[ye]);ge.__webglTexture&&(o.deleteTexture(ge.__webglTexture),c.memory.textures--),r.remove(le[ye])}r.remove(z)}let U=0;function $(){U=0}function F(){const z=U;return z>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+a.maxTextures),U+=1,z}function H(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function te(z,R){const le=r.get(z);if(z.isVideoTexture&&Pe(z),z.isRenderTargetTexture===!1&&z.version>0&&le.__version!==z.version){const ye=z.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(le,z,R);return}}n.bindTexture(o.TEXTURE_2D,le.__webglTexture,o.TEXTURE0+R)}function Z(z,R){const le=r.get(z);if(z.version>0&&le.__version!==z.version){j(le,z,R);return}n.bindTexture(o.TEXTURE_2D_ARRAY,le.__webglTexture,o.TEXTURE0+R)}function _(z,R){const le=r.get(z);if(z.version>0&&le.__version!==z.version){j(le,z,R);return}n.bindTexture(o.TEXTURE_3D,le.__webglTexture,o.TEXTURE0+R)}function q(z,R){const le=r.get(z);if(z.version>0&&le.__version!==z.version){Q(le,z,R);return}n.bindTexture(o.TEXTURE_CUBE_MAP,le.__webglTexture,o.TEXTURE0+R)}const O={[Rf]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[Pf]:o.MIRRORED_REPEAT},v={[ai]:o.NEAREST,[D0]:o.NEAREST_MIPMAP_NEAREST,[il]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[Cc]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},T={[F0]:o.NEVER,[G0]:o.ALWAYS,[k0]:o.LESS,[Pg]:o.LEQUAL,[z0]:o.EQUAL,[V0]:o.GEQUAL,[B0]:o.GREATER,[H0]:o.NOTEQUAL};function B(z,R){if(R.type===Ii&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===mi||R.magFilter===Cc||R.magFilter===il||R.magFilter===qr||R.minFilter===mi||R.minFilter===Cc||R.minFilter===il||R.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,O[R.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,O[R.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,O[R.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,v[R.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,v[R.minFilter]),R.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,T[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ai||R.minFilter!==il&&R.minFilter!==qr||R.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const le=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,a.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function ce(z,R){let le=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",P));const ye=R.source;let xe=M.get(ye);xe===void 0&&(xe={},M.set(ye,xe));const ge=H(R);if(ge!==z.__cacheKey){xe[ge]===void 0&&(xe[ge]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,le=!0),xe[ge].usedTimes++;const Be=xe[z.__cacheKey];Be!==void 0&&(xe[z.__cacheKey].usedTimes--,Be.usedTimes===0&&w(R)),z.__cacheKey=ge,z.__webglTexture=xe[ge].texture}return le}function j(z,R,le){let ye=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ye=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ye=o.TEXTURE_3D);const xe=ce(z,R),ge=R.source;n.bindTexture(ye,z.__webglTexture,o.TEXTURE0+le);const Be=r.get(ge);if(ge.version!==Be.__version||xe===!0){n.activeTexture(o.TEXTURE0+le);const Re=Ct.getPrimaries(Ct.workingColorSpace),Ve=R.colorSpace===pr?null:Ct.getPrimaries(R.colorSpace),gt=R.colorSpace===pr||Re===Ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let be=C(R.image,!1,a.maxTextureSize);be=ot(R,be);const Xe=l.convert(R.format,R.colorSpace),nt=l.convert(R.type);let st=G(R.internalFormat,Xe,nt,R.colorSpace,R.isVideoTexture);B(ye,R);let qe;const vt=R.mipmaps,ft=R.isVideoTexture!==!0,Rt=Be.__version===void 0||xe===!0,ne=ge.dataReady,Ne=L(R,be);if(R.isDepthTexture)st=k(R.format===qo,R.type),Rt&&(ft?n.texStorage2D(o.TEXTURE_2D,1,st,be.width,be.height):n.texImage2D(o.TEXTURE_2D,0,st,be.width,be.height,0,Xe,nt,null));else if(R.isDataTexture)if(vt.length>0){ft&&Rt&&n.texStorage2D(o.TEXTURE_2D,Ne,st,vt[0].width,vt[0].height);for(let me=0,_e=vt.length;me<_e;me++)qe=vt[me],ft?ne&&n.texSubImage2D(o.TEXTURE_2D,me,0,0,qe.width,qe.height,Xe,nt,qe.data):n.texImage2D(o.TEXTURE_2D,me,st,qe.width,qe.height,0,Xe,nt,qe.data);R.generateMipmaps=!1}else ft?(Rt&&n.texStorage2D(o.TEXTURE_2D,Ne,st,be.width,be.height),ne&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,be.width,be.height,Xe,nt,be.data)):n.texImage2D(o.TEXTURE_2D,0,st,be.width,be.height,0,Xe,nt,be.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ft&&Rt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,st,vt[0].width,vt[0].height,be.depth);for(let me=0,_e=vt.length;me<_e;me++)if(qe=vt[me],R.format!==si)if(Xe!==null)if(ft){if(ne)if(R.layerUpdates.size>0){const ke=xm(qe.width,qe.height,R.format,R.type);for(const Oe of R.layerUpdates){const dt=qe.data.subarray(Oe*ke/qe.data.BYTES_PER_ELEMENT,(Oe+1)*ke/qe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,Oe,qe.width,qe.height,1,Xe,dt)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,0,qe.width,qe.height,be.depth,Xe,qe.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,me,st,qe.width,qe.height,be.depth,0,qe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?ne&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,0,qe.width,qe.height,be.depth,Xe,nt,qe.data):n.texImage3D(o.TEXTURE_2D_ARRAY,me,st,qe.width,qe.height,be.depth,0,Xe,nt,qe.data)}else{ft&&Rt&&n.texStorage2D(o.TEXTURE_2D,Ne,st,vt[0].width,vt[0].height);for(let me=0,_e=vt.length;me<_e;me++)qe=vt[me],R.format!==si?Xe!==null?ft?ne&&n.compressedTexSubImage2D(o.TEXTURE_2D,me,0,0,qe.width,qe.height,Xe,qe.data):n.compressedTexImage2D(o.TEXTURE_2D,me,st,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?ne&&n.texSubImage2D(o.TEXTURE_2D,me,0,0,qe.width,qe.height,Xe,nt,qe.data):n.texImage2D(o.TEXTURE_2D,me,st,qe.width,qe.height,0,Xe,nt,qe.data)}else if(R.isDataArrayTexture)if(ft){if(Rt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,st,be.width,be.height,be.depth),ne)if(R.layerUpdates.size>0){const me=xm(be.width,be.height,R.format,R.type);for(const _e of R.layerUpdates){const ke=be.data.subarray(_e*me/be.data.BYTES_PER_ELEMENT,(_e+1)*me/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,be.width,be.height,1,Xe,nt,ke)}R.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Xe,nt,be.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,st,be.width,be.height,be.depth,0,Xe,nt,be.data);else if(R.isData3DTexture)ft?(Rt&&n.texStorage3D(o.TEXTURE_3D,Ne,st,be.width,be.height,be.depth),ne&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Xe,nt,be.data)):n.texImage3D(o.TEXTURE_3D,0,st,be.width,be.height,be.depth,0,Xe,nt,be.data);else if(R.isFramebufferTexture){if(Rt)if(ft)n.texStorage2D(o.TEXTURE_2D,Ne,st,be.width,be.height);else{let me=be.width,_e=be.height;for(let ke=0;ke<Ne;ke++)n.texImage2D(o.TEXTURE_2D,ke,st,me,_e,0,Xe,nt,null),me>>=1,_e>>=1}}else if(vt.length>0){if(ft&&Rt){const me=Le(vt[0]);n.texStorage2D(o.TEXTURE_2D,Ne,st,me.width,me.height)}for(let me=0,_e=vt.length;me<_e;me++)qe=vt[me],ft?ne&&n.texSubImage2D(o.TEXTURE_2D,me,0,0,Xe,nt,qe):n.texImage2D(o.TEXTURE_2D,me,st,Xe,nt,qe);R.generateMipmaps=!1}else if(ft){if(Rt){const me=Le(be);n.texStorage2D(o.TEXTURE_2D,Ne,st,me.width,me.height)}ne&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Xe,nt,be)}else n.texImage2D(o.TEXTURE_2D,0,st,Xe,nt,be);E(R)&&y(ye),Be.__version=ge.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Q(z,R,le){if(R.image.length!==6)return;const ye=ce(z,R),xe=R.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+le);const ge=r.get(xe);if(xe.version!==ge.__version||ye===!0){n.activeTexture(o.TEXTURE0+le);const Be=Ct.getPrimaries(Ct.workingColorSpace),Re=R.colorSpace===pr?null:Ct.getPrimaries(R.colorSpace),Ve=R.colorSpace===pr||Be===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const gt=R.isCompressedTexture||R.image[0].isCompressedTexture,be=R.image[0]&&R.image[0].isDataTexture,Xe=[];for(let _e=0;_e<6;_e++)!gt&&!be?Xe[_e]=C(R.image[_e],!0,a.maxCubemapSize):Xe[_e]=be?R.image[_e].image:R.image[_e],Xe[_e]=ot(R,Xe[_e]);const nt=Xe[0],st=l.convert(R.format,R.colorSpace),qe=l.convert(R.type),vt=G(R.internalFormat,st,qe,R.colorSpace),ft=R.isVideoTexture!==!0,Rt=ge.__version===void 0||ye===!0,ne=xe.dataReady;let Ne=L(R,nt);B(o.TEXTURE_CUBE_MAP,R);let me;if(gt){ft&&Rt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,vt,nt.width,nt.height);for(let _e=0;_e<6;_e++){me=Xe[_e].mipmaps;for(let ke=0;ke<me.length;ke++){const Oe=me[ke];R.format!==si?st!==null?ft?ne&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Oe.width,Oe.height,st,Oe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,vt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?ne&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Oe.width,Oe.height,st,qe,Oe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,vt,Oe.width,Oe.height,0,st,qe,Oe.data)}}}else{if(me=R.mipmaps,ft&&Rt){me.length>0&&Ne++;const _e=Le(Xe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,vt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(be){ft?ne&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Xe[_e].width,Xe[_e].height,st,qe,Xe[_e].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,vt,Xe[_e].width,Xe[_e].height,0,st,qe,Xe[_e].data);for(let ke=0;ke<me.length;ke++){const dt=me[ke].image[_e].image;ft?ne&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,dt.width,dt.height,st,qe,dt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,vt,dt.width,dt.height,0,st,qe,dt.data)}}else{ft?ne&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,st,qe,Xe[_e]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,vt,st,qe,Xe[_e]);for(let ke=0;ke<me.length;ke++){const Oe=me[ke];ft?ne&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,st,qe,Oe.image[_e]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,vt,st,qe,Oe.image[_e])}}}E(R)&&y(o.TEXTURE_CUBE_MAP),ge.__version=xe.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function re(z,R,le,ye,xe,ge){const Be=l.convert(le.format,le.colorSpace),Re=l.convert(le.type),Ve=G(le.internalFormat,Be,Re,le.colorSpace),gt=r.get(R),be=r.get(le);if(be.__renderTarget=R,!gt.__hasExternalTextures){const Xe=Math.max(1,R.width>>ge),nt=Math.max(1,R.height>>ge);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?n.texImage3D(xe,ge,Ve,Xe,nt,R.depth,0,Be,Re,null):n.texImage2D(xe,ge,Ve,Xe,nt,0,Be,Re,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),De(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,xe,be.__webglTexture,0,Je(R)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ye,xe,be.__webglTexture,ge),n.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(z,R,le){if(o.bindRenderbuffer(o.RENDERBUFFER,z),R.depthBuffer){const ye=R.depthTexture,xe=ye&&ye.isDepthTexture?ye.type:null,ge=k(R.stencilBuffer,xe),Be=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=Je(R);De(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,ge,R.width,R.height):le?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,ge,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ge,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Be,o.RENDERBUFFER,z)}else{const ye=R.textures;for(let xe=0;xe<ye.length;xe++){const ge=ye[xe],Be=l.convert(ge.format,ge.colorSpace),Re=l.convert(ge.type),Ve=G(ge.internalFormat,Be,Re,ge.colorSpace),gt=Je(R);le&&De(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,Ve,R.width,R.height):De(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,Ve,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Ve,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ve(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(R.depthTexture);ye.__renderTarget=R,(!ye.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),te(R.depthTexture,0);const xe=ye.__webglTexture,ge=Je(R);if(R.depthTexture.format===Ho)De(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0);else if(R.depthTexture.format===qo)De(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Se(z){const R=r.get(z),le=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){const ye=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ye){const xe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ye.removeEventListener("dispose",xe)};ye.addEventListener("dispose",xe),R.__depthDisposeCallback=xe}R.__boundDepthTexture=ye}if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");ve(R.__webglFramebuffer,z)}else if(le){R.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[ye]),R.__webglDepthbuffer[ye]===void 0)R.__webglDepthbuffer[ye]=o.createRenderbuffer(),oe(R.__webglDepthbuffer[ye],z,!1);else{const xe=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=R.__webglDepthbuffer[ye];o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ge)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),oe(R.__webglDepthbuffer,z,!1);else{const ye=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,xe)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(z,R,le){const ye=r.get(z);R!==void 0&&re(ye.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),le!==void 0&&Se(z)}function Qe(z){const R=z.texture,le=r.get(z),ye=r.get(R);z.addEventListener("dispose",D);const xe=z.textures,ge=z.isWebGLCubeRenderTarget===!0,Be=xe.length>1;if(Be||(ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture()),ye.__version=R.version,c.memory.textures++),ge){le.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){le.__webglFramebuffer[Re]=[];for(let Ve=0;Ve<R.mipmaps.length;Ve++)le.__webglFramebuffer[Re][Ve]=o.createFramebuffer()}else le.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){le.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)le.__webglFramebuffer[Re]=o.createFramebuffer()}else le.__webglFramebuffer=o.createFramebuffer();if(Be)for(let Re=0,Ve=xe.length;Re<Ve;Re++){const gt=r.get(xe[Re]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&De(z)===!1){le.__webglMultisampledFramebuffer=o.createFramebuffer(),le.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Ve=xe[Re];le.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,le.__webglColorRenderbuffer[Re]);const gt=l.convert(Ve.format,Ve.colorSpace),be=l.convert(Ve.type),Xe=G(Ve.internalFormat,gt,be,Ve.colorSpace,z.isXRRenderTarget===!0),nt=Je(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,nt,Xe,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,le.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(le.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(le.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ge){n.bindTexture(o.TEXTURE_CUBE_MAP,ye.__webglTexture),B(o.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ve=0;Ve<R.mipmaps.length;Ve++)re(le.__webglFramebuffer[Re][Ve],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve);else re(le.__webglFramebuffer[Re],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);E(R)&&y(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let Re=0,Ve=xe.length;Re<Ve;Re++){const gt=xe[Re],be=r.get(gt);n.bindTexture(o.TEXTURE_2D,be.__webglTexture),B(o.TEXTURE_2D,gt),re(le.__webglFramebuffer,z,gt,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),E(gt)&&y(o.TEXTURE_2D)}n.unbindTexture()}else{let Re=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Re=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Re,ye.__webglTexture),B(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let Ve=0;Ve<R.mipmaps.length;Ve++)re(le.__webglFramebuffer[Ve],z,R,o.COLOR_ATTACHMENT0,Re,Ve);else re(le.__webglFramebuffer,z,R,o.COLOR_ATTACHMENT0,Re,0);E(R)&&y(Re),n.unbindTexture()}z.depthBuffer&&Se(z)}function Ge(z){const R=z.textures;for(let le=0,ye=R.length;le<ye;le++){const xe=R[le];if(E(xe)){const ge=Y(z),Be=r.get(xe).__webglTexture;n.bindTexture(ge,Be),y(ge),n.unbindTexture()}}}const Ze=[],X=[];function ct(z){if(z.samples>0){if(De(z)===!1){const R=z.textures,le=z.width,ye=z.height;let xe=o.COLOR_BUFFER_BIT;const ge=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Be=r.get(z),Re=R.length>1;if(Re)for(let Ve=0;Ve<R.length;Ve++)n.bindFramebuffer(o.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Be.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ve=0;Ve<R.length;Ve++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const gt=r.get(R[Ve]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,le,ye,0,0,le,ye,xe,o.NEAREST),p===!0&&(Ze.length=0,X.length=0,Ze.push(o.COLOR_ATTACHMENT0+Ve),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ze.push(ge),X.push(ge),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,X)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let Ve=0;Ve<R.length;Ve++){n.bindFramebuffer(o.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const gt=r.get(R[Ve]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Be.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,gt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const R=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Je(z){return Math.min(a.maxSamples,z.samples)}function De(z){const R=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Pe(z){const R=c.render.frame;x.get(z)!==R&&(x.set(z,R),z.update())}function ot(z,R){const le=z.colorSpace,ye=z.format,xe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||le!==Yo&&le!==pr&&(Ct.getTransfer(le)===Dt?(ye!==si||xe!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",le)),R}function Le(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(g.width=z.naturalWidth||z.width,g.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(g.width=z.displayWidth,g.height=z.displayHeight):(g.width=z.width,g.height=z.height),g}this.allocateTextureUnit=F,this.resetTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=Z,this.setTexture3D=_,this.setTextureCube=q,this.rebindTextures=Ce,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=re,this.useMultisampledRTT=De}function QE(o,e){function n(r,a=pr){let l;const c=Ct.getTransfer(a);if(r===ki)return o.UNSIGNED_BYTE;if(r===ud)return o.UNSIGNED_SHORT_4_4_4_4;if(r===cd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Mg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===xg)return o.BYTE;if(r===Sg)return o.SHORT;if(r===Bs)return o.UNSIGNED_SHORT;if(r===ld)return o.INT;if(r===Zr)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===Vs)return o.HALF_FLOAT;if(r===Eg)return o.ALPHA;if(r===wg)return o.RGB;if(r===si)return o.RGBA;if(r===Tg)return o.LUMINANCE;if(r===bg)return o.LUMINANCE_ALPHA;if(r===Ho)return o.DEPTH_COMPONENT;if(r===qo)return o.DEPTH_STENCIL;if(r===Ag)return o.RED;if(r===fd)return o.RED_INTEGER;if(r===Cg)return o.RG;if(r===dd)return o.RG_INTEGER;if(r===hd)return o.RGBA_INTEGER;if(r===Al||r===Cl||r===Rl||r===Pl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Al)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Al)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lf||r===Df||r===Nf||r===If)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Df)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===If)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uf||r===Of||r===Ff)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Uf||r===Of)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ff)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kf||r===zf||r===Bf||r===Hf||r===Vf||r===Gf||r===Wf||r===jf||r===Xf||r===qf||r===Yf||r===$f||r===Kf||r===Zf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$f)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ll||r===Qf||r===Jf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ll)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rg||r===ed||r===td||r===nd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ll)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const JE={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const f=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){c=!0;for(const C of e.hand.values()){const E=n.getJointPose(C,r),y=this._getHandJoint(g,C);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const x=g.joints["index-finger-tip"],S=g.joints["thumb-tip"],M=x.position.distanceTo(S.position),b=.02,N=.005;g.inputState.pinching&&M>b+N?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&M<=b-N&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(JE)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),g!==null&&(g.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Dn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new _r({vertexShader:e1,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oi(new Vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i1 extends Zo{constructor(e,n){super();const r=this;let a=null,l=1,c=null,f="local-floor",p=1,g=null,x=null,S=null,M=null,b=null,N=null;const C=new n1,E=n.getContextAttributes();let y=null,Y=null;const G=[],k=[],L=new Nt;let P=null;const D=new Yn;D.viewport=new Xt;const V=new Yn;V.viewport=new Xt;const w=[D,V],m=new wy;let U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=G[j];return Q===void 0&&(Q=new rf,G[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=G[j];return Q===void 0&&(Q=new rf,G[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=G[j];return Q===void 0&&(Q=new rf,G[j]=Q),Q.getHandSpace()};function F(j){const Q=k.indexOf(j.inputSource);if(Q===-1)return;const re=G[Q];re!==void 0&&(re.update(j.inputSource,j.frame,g||c),re.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",H),a.removeEventListener("inputsourceschange",te);for(let j=0;j<G.length;j++){const Q=k[j];Q!==null&&(k[j]=null,G[j].disconnect(Q))}U=null,$=null,C.reset(),e.setRenderTarget(y),b=null,M=null,S=null,a=null,Y=null,ce.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||c},this.setReferenceSpace=function(j){g=j},this.getBaseLayer=function(){return M!==null?M:b},this.getBinding=function(){return S},this.getFrame=function(){return N},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",H),a.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),a.renderState.layers===void 0){const Q={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(a,n,Q),a.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),Y=new Qr(b.framebufferWidth,b.framebufferHeight,{format:si,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let Q=null,re=null,oe=null;E.depth&&(oe=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=E.stencil?qo:Ho,re=E.stencil?Xo:Zr);const ve={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:l};S=new XRWebGLBinding(a,n),M=S.createProjectionLayer(ve),a.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),Y=new Qr(M.textureWidth,M.textureHeight,{format:si,type:ki,depthTexture:new jg(M.textureWidth,M.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1})}Y.isXRRenderTarget=!0,this.setFoveation(p),g=null,c=await a.requestReferenceSpace(f),ce.setContext(a),ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function te(j){for(let Q=0;Q<j.removed.length;Q++){const re=j.removed[Q],oe=k.indexOf(re);oe>=0&&(k[oe]=null,G[oe].disconnect(re))}for(let Q=0;Q<j.added.length;Q++){const re=j.added[Q];let oe=k.indexOf(re);if(oe===-1){for(let Se=0;Se<G.length;Se++)if(Se>=k.length){k.push(re),oe=Se;break}else if(k[Se]===null){k[Se]=re,oe=Se;break}if(oe===-1)break}const ve=G[oe];ve&&ve.connect(re)}}const Z=new pe,_=new pe;function q(j,Q,re){Z.setFromMatrixPosition(Q.matrixWorld),_.setFromMatrixPosition(re.matrixWorld);const oe=Z.distanceTo(_),ve=Q.projectionMatrix.elements,Se=re.projectionMatrix.elements,Ce=ve[14]/(ve[10]-1),Qe=ve[14]/(ve[10]+1),Ge=(ve[9]+1)/ve[5],Ze=(ve[9]-1)/ve[5],X=(ve[8]-1)/ve[0],ct=(Se[8]+1)/Se[0],Je=Ce*X,De=Ce*ct,Pe=oe/(-X+ct),ot=Pe*-X;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ot),j.translateZ(Pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ve[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Le=Ce+Pe,z=Qe+Pe,R=Je-ot,le=De+(oe-ot),ye=Ge*Qe/z*Le,xe=Ze*Qe/z*Le;j.projectionMatrix.makePerspective(R,le,ye,xe,Le,z),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function O(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let Q=j.near,re=j.far;C.texture!==null&&(C.depthNear>0&&(Q=C.depthNear),C.depthFar>0&&(re=C.depthFar)),m.near=V.near=D.near=Q,m.far=V.far=D.far=re,(U!==m.near||$!==m.far)&&(a.updateRenderState({depthNear:m.near,depthFar:m.far}),U=m.near,$=m.far),D.layers.mask=j.layers.mask|2,V.layers.mask=j.layers.mask|4,m.layers.mask=D.layers.mask|V.layers.mask;const oe=j.parent,ve=m.cameras;O(m,oe);for(let Se=0;Se<ve.length;Se++)O(ve[Se],oe);ve.length===2?q(m,D,V):m.projectionMatrix.copy(D.projectionMatrix),v(j,m,oe)};function v(j,Q,re){re===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=id*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(M===null&&b===null))return p},this.setFoveation=function(j){p=j,M!==null&&(M.fixedFoveation=j),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=j)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(m)};let T=null;function B(j,Q){if(x=Q.getViewerPose(g||c),N=Q,x!==null){const re=x.views;b!==null&&(e.setRenderTargetFramebuffer(Y,b.framebuffer),e.setRenderTarget(Y));let oe=!1;re.length!==m.cameras.length&&(m.cameras.length=0,oe=!0);for(let Se=0;Se<re.length;Se++){const Ce=re[Se];let Qe=null;if(b!==null)Qe=b.getViewport(Ce);else{const Ze=S.getViewSubImage(M,Ce);Qe=Ze.viewport,Se===0&&(e.setRenderTargetTextures(Y,Ze.colorTexture,M.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(Y))}let Ge=w[Se];Ge===void 0&&(Ge=new Yn,Ge.layers.enable(Se),Ge.viewport=new Xt,w[Se]=Ge),Ge.matrix.fromArray(Ce.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ce.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Se===0&&(m.matrix.copy(Ge.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),oe===!0&&m.cameras.push(Ge)}const ve=a.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Se=S.getDepthInformation(re[0]);Se&&Se.isValid&&Se.texture&&C.init(e,Se,a.renderState)}}for(let re=0;re<G.length;re++){const oe=k[re],ve=G[re];oe!==null&&ve!==void 0&&ve.update(oe,Q,g||c)}T&&T(j,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),N=null}const ce=new Xg;ce.setAnimationLoop(B),this.setAnimationLoop=function(j){T=j},this.dispose=function(){}}}const Br=new zi,r1=new qt;function o1(o,e){function n(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function r(E,y){y.color.getRGB(E.fogColor.value,Bg(o)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function a(E,y,Y,G,k){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(E,y):y.isMeshToonMaterial?(l(E,y),S(E,y)):y.isMeshPhongMaterial?(l(E,y),x(E,y)):y.isMeshStandardMaterial?(l(E,y),M(E,y),y.isMeshPhysicalMaterial&&b(E,y,k)):y.isMeshMatcapMaterial?(l(E,y),N(E,y)):y.isMeshDepthMaterial?l(E,y):y.isMeshDistanceMaterial?(l(E,y),C(E,y)):y.isMeshNormalMaterial?l(E,y):y.isLineBasicMaterial?(c(E,y),y.isLineDashedMaterial&&f(E,y)):y.isPointsMaterial?p(E,y,Y,G):y.isSpriteMaterial?g(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,n(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,n(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===Ln&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,n(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===Ln&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,n(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,n(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const Y=e.get(y),G=Y.envMap,k=Y.envMapRotation;G&&(E.envMap.value=G,Br.copy(k),Br.x*=-1,Br.y*=-1,Br.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),E.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(Br)),E.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,E.aoMapTransform))}function c(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,n(y.map,E.mapTransform))}function f(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function p(E,y,Y,G){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*Y,E.scale.value=G*.5,y.map&&(E.map.value=y.map,n(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function g(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,n(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function x(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function S(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function M(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function b(E,y,Y){E.ior.value=y.ior,y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ln&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=Y.texture,E.transmissionSamplerSize.value.set(Y.width,Y.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,E.specularIntensityMapTransform))}function N(E,y){y.matcap&&(E.matcap.value=y.matcap)}function C(E,y){const Y=e.get(y).light;E.referencePosition.value.setFromMatrixPosition(Y.matrixWorld),E.nearDistance.value=Y.shadow.camera.near,E.farDistance.value=Y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function s1(o,e,n,r){let a={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(Y,G){const k=G.program;r.uniformBlockBinding(Y,k)}function g(Y,G){let k=a[Y.id];k===void 0&&(N(Y),k=x(Y),a[Y.id]=k,Y.addEventListener("dispose",E));const L=G.program;r.updateUBOMapping(Y,L);const P=e.render.frame;l[Y.id]!==P&&(M(Y),l[Y.id]=P)}function x(Y){const G=S();Y.__bindingPointIndex=G;const k=o.createBuffer(),L=Y.__size,P=Y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,k),o.bufferData(o.UNIFORM_BUFFER,L,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,G,k),k}function S(){for(let Y=0;Y<f;Y++)if(c.indexOf(Y)===-1)return c.push(Y),Y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(Y){const G=a[Y.id],k=Y.uniforms,L=Y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,G);for(let P=0,D=k.length;P<D;P++){const V=Array.isArray(k[P])?k[P]:[k[P]];for(let w=0,m=V.length;w<m;w++){const U=V[w];if(b(U,P,w,L)===!0){const $=U.__offset,F=Array.isArray(U.value)?U.value:[U.value];let H=0;for(let te=0;te<F.length;te++){const Z=F[te],_=C(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,o.bufferSubData(o.UNIFORM_BUFFER,$+H,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,H),H+=_.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,U.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(Y,G,k,L){const P=Y.value,D=G+"_"+k;if(L[D]===void 0)return typeof P=="number"||typeof P=="boolean"?L[D]=P:L[D]=P.clone(),!0;{const V=L[D];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return L[D]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function N(Y){const G=Y.uniforms;let k=0;const L=16;for(let D=0,V=G.length;D<V;D++){const w=Array.isArray(G[D])?G[D]:[G[D]];for(let m=0,U=w.length;m<U;m++){const $=w[m],F=Array.isArray($.value)?$.value:[$.value];for(let H=0,te=F.length;H<te;H++){const Z=F[H],_=C(Z),q=k%L,O=q%_.boundary,v=q+O;k+=O,v!==0&&L-v<_.storage&&(k+=L-v),$.__data=new Float32Array(_.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=k,k+=_.storage}}}const P=k%L;return P>0&&(k+=L-P),Y.__size=k,Y.__cache={},this}function C(Y){const G={boundary:0,storage:0};return typeof Y=="number"||typeof Y=="boolean"?(G.boundary=4,G.storage=4):Y.isVector2?(G.boundary=8,G.storage=8):Y.isVector3||Y.isColor?(G.boundary=16,G.storage=12):Y.isVector4?(G.boundary=16,G.storage=16):Y.isMatrix3?(G.boundary=48,G.storage=48):Y.isMatrix4?(G.boundary=64,G.storage=64):Y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",Y),G}function E(Y){const G=Y.target;G.removeEventListener("dispose",E);const k=c.indexOf(G.__bindingPointIndex);c.splice(k,1),o.deleteBuffer(a[G.id]),delete a[G.id],delete l[G.id]}function y(){for(const Y in a)o.deleteBuffer(a[Y]);c=[],a={},l={}}return{bind:p,update:g,dispose:y}}class a1{constructor(e={}){const{canvas:n=j0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:M=!1}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=c;const N=new Uint32Array(4),C=new Int32Array(4);let E=null,y=null;const Y=[],G=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=gr,this.toneMappingExposure=1;const k=this;let L=!1,P=0,D=0,V=null,w=-1,m=null;const U=new Xt,$=new Xt;let F=null;const H=new Pt(0);let te=0,Z=n.width,_=n.height,q=1,O=null,v=null;const T=new Xt(0,0,Z,_),B=new Xt(0,0,Z,_);let ce=!1;const j=new Gg;let Q=!1,re=!1;const oe=new qt,ve=new qt,Se=new pe,Ce=new Xt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Ze(){return V===null?q:1}let X=r;function ct(I,ie){return n.getContext(I,ie)}try{const I={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ad}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),X===null){const ie="webgl2";if(X=ct(ie,I),X===null)throw ct(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Je,De,Pe,ot,Le,z,R,le,ye,xe,ge,Be,Re,Ve,gt,be,Xe,nt,st,qe,vt,ft,Rt,ne;function Ne(){Je=new gM(X),Je.init(),ft=new QE(X,Je),De=new cM(X,Je,e,ft),Pe=new KE(X,Je),De.reverseDepthBuffer&&M&&Pe.buffers.depth.setReversed(!0),ot=new yM(X),Le=new FE,z=new ZE(X,Je,Pe,Le,De,ft,ot),R=new dM(k),le=new mM(k),ye=new by(X),Rt=new lM(X,ye),xe=new vM(X,ye,ot,Rt),ge=new SM(X,xe,ye,ot),st=new xM(X,De,z),be=new fM(Le),Be=new OE(k,R,le,Je,De,Rt,be),Re=new o1(k,Le),Ve=new zE,gt=new jE(Je),nt=new aM(k,R,le,Pe,ge,b,p),Xe=new YE(k,ge,De),ne=new s1(X,ot,De,Pe),qe=new uM(X,Je,ot),vt=new _M(X,Je,ot),ot.programs=Be.programs,k.capabilities=De,k.extensions=Je,k.properties=Le,k.renderLists=Ve,k.shadowMap=Xe,k.state=Pe,k.info=ot}Ne();const me=new i1(k,X);this.xr=me,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const I=Je.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Je.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(I){I!==void 0&&(q=I,this.setSize(Z,_,!1))},this.getSize=function(I){return I.set(Z,_)},this.setSize=function(I,ie,de=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=I,_=ie,n.width=Math.floor(I*q),n.height=Math.floor(ie*q),de===!0&&(n.style.width=I+"px",n.style.height=ie+"px"),this.setViewport(0,0,I,ie)},this.getDrawingBufferSize=function(I){return I.set(Z*q,_*q).floor()},this.setDrawingBufferSize=function(I,ie,de){Z=I,_=ie,q=de,n.width=Math.floor(I*de),n.height=Math.floor(ie*de),this.setViewport(0,0,I,ie)},this.getCurrentViewport=function(I){return I.copy(U)},this.getViewport=function(I){return I.copy(T)},this.setViewport=function(I,ie,de,he){I.isVector4?T.set(I.x,I.y,I.z,I.w):T.set(I,ie,de,he),Pe.viewport(U.copy(T).multiplyScalar(q).round())},this.getScissor=function(I){return I.copy(B)},this.setScissor=function(I,ie,de,he){I.isVector4?B.set(I.x,I.y,I.z,I.w):B.set(I,ie,de,he),Pe.scissor($.copy(B).multiplyScalar(q).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(I){Pe.setScissorTest(ce=I)},this.setOpaqueSort=function(I){O=I},this.setTransparentSort=function(I){v=I},this.getClearColor=function(I){return I.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(I=!0,ie=!0,de=!0){let he=0;if(I){let J=!1;if(V!==null){const Te=V.texture.format;J=Te===hd||Te===dd||Te===fd}if(J){const Te=V.texture.type,Ie=Te===ki||Te===Zr||Te===Bs||Te===Xo||Te===ud||Te===cd,He=nt.getClearColor(),We=nt.getClearAlpha(),at=He.r,lt=He.g,et=He.b;Ie?(N[0]=at,N[1]=lt,N[2]=et,N[3]=We,X.clearBufferuiv(X.COLOR,0,N)):(C[0]=at,C[1]=lt,C[2]=et,C[3]=We,X.clearBufferiv(X.COLOR,0,C))}else he|=X.COLOR_BUFFER_BIT}ie&&(he|=X.DEPTH_BUFFER_BIT),de&&(he|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),nt.dispose(),Ve.dispose(),gt.dispose(),Le.dispose(),R.dispose(),le.dispose(),ge.dispose(),Rt.dispose(),ne.dispose(),Be.dispose(),me.dispose(),me.removeEventListener("sessionstart",Jr),me.removeEventListener("sessionend",Hi),vi.stop()};function _e(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const I=ot.autoReset,ie=Xe.enabled,de=Xe.autoUpdate,he=Xe.needsUpdate,J=Xe.type;Ne(),ot.autoReset=I,Xe.enabled=ie,Xe.autoUpdate=de,Xe.needsUpdate=he,Xe.type=J}function Oe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function dt(I){const ie=I.target;ie.removeEventListener("dispose",dt),Ut(ie)}function Ut(I){Kt(I),Le.remove(I)}function Kt(I){const ie=Le.get(I).programs;ie!==void 0&&(ie.forEach(function(de){Be.releaseProgram(de)}),I.isShaderMaterial&&Be.releaseShaderCache(I))}this.renderBufferDirect=function(I,ie,de,he,J,Te){ie===null&&(ie=Qe);const Ie=J.isMesh&&J.matrixWorld.determinant()<0,He=Zs(I,ie,de,he,J);Pe.setMaterial(he,Ie);let We=de.index,at=1;if(he.wireframe===!0){if(We=xe.getWireframeAttribute(de),We===void 0)return;at=2}const lt=de.drawRange,et=de.attributes.position;let ht=lt.start*at,Tt=(lt.start+lt.count)*at;Te!==null&&(ht=Math.max(ht,Te.start*at),Tt=Math.min(Tt,(Te.start+Te.count)*at)),We!==null?(ht=Math.max(ht,0),Tt=Math.min(Tt,We.count)):et!=null&&(ht=Math.max(ht,0),Tt=Math.min(Tt,et.count));const bt=Tt-ht;if(bt<0||bt===1/0)return;Rt.setup(J,he,He,de,We);let kt,Mt=qe;if(We!==null&&(kt=ye.get(We),Mt=vt,Mt.setIndex(kt)),J.isMesh)he.wireframe===!0?(Pe.setLineWidth(he.wireframeLinewidth*Ze()),Mt.setMode(X.LINES)):Mt.setMode(X.TRIANGLES);else if(J.isLine){let tt=he.linewidth;tt===void 0&&(tt=1),Pe.setLineWidth(tt*Ze()),J.isLineSegments?Mt.setMode(X.LINES):J.isLineLoop?Mt.setMode(X.LINE_LOOP):Mt.setMode(X.LINE_STRIP)}else J.isPoints?Mt.setMode(X.POINTS):J.isSprite&&Mt.setMode(X.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Mt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Mt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tt=J._multiDrawStarts,Vt=J._multiDrawCounts,xt=J._multiDrawCount,sn=We?ye.get(We).bytesPerElement:1,$n=Le.get(he).currentProgram.getUniforms();for(let _n=0;_n<xt;_n++)$n.setValue(X,"_gl_DrawID",_n),Mt.render(tt[_n]/sn,Vt[_n])}else if(J.isInstancedMesh)Mt.renderInstances(ht,bt,J.count);else if(de.isInstancedBufferGeometry){const tt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Vt=Math.min(de.instanceCount,tt);Mt.renderInstances(ht,bt,Vt)}else Mt.render(ht,bt)};function Et(I,ie,de){I.transparent===!0&&I.side===Ni&&I.forceSinglePass===!1?(I.side=Ln,I.needsUpdate=!0,eo(I,ie,de),I.side=vr,I.needsUpdate=!0,eo(I,ie,de),I.side=Ni):eo(I,ie,de)}this.compile=function(I,ie,de=null){de===null&&(de=I),y=gt.get(de),y.init(ie),G.push(y),de.traverseVisible(function(J){J.isLight&&J.layers.test(ie.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),I!==de&&I.traverseVisible(function(J){J.isLight&&J.layers.test(ie.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights();const he=new Set;return I.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Te=J.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const He=Te[Ie];Et(He,de,J),he.add(He)}else Et(Te,de,J),he.add(Te)}),G.pop(),y=null,he},this.compileAsync=function(I,ie,de=null){const he=this.compile(I,ie,de);return new Promise(J=>{function Te(){if(he.forEach(function(Ie){Le.get(Ie).currentProgram.isReady()&&he.delete(Ie)}),he.size===0){J(I);return}setTimeout(Te,10)}Je.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let En=null;function vn(I){En&&En(I)}function Jr(){vi.stop()}function Hi(){vi.start()}const vi=new Xg;vi.setAnimationLoop(vn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(I){En=I,me.setAnimationLoop(I),I===null?vi.stop():vi.start()},me.addEventListener("sessionstart",Jr),me.addEventListener("sessionend",Hi),this.render=function(I,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(ie),ie=me.getCamera()),I.isScene===!0&&I.onBeforeRender(k,I,ie,V),y=gt.get(I,G.length),y.init(ie),G.push(y),ve.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),j.setFromProjectionMatrix(ve),re=this.localClippingEnabled,Q=be.init(this.clippingPlanes,re),E=Ve.get(I,Y.length),E.init(),Y.push(E),me.enabled===!0&&me.isPresenting===!0){const Te=k.xr.getDepthSensingMesh();Te!==null&&_i(Te,ie,-1/0,k.sortObjects)}_i(I,ie,0,k.sortObjects),E.finish(),k.sortObjects===!0&&E.sort(O,v),Ge=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ge&&nt.addToRenderList(E,I),this.info.render.frame++,Q===!0&&be.beginShadows();const de=y.state.shadowsArray;Xe.render(de,I,ie),Q===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=E.opaque,J=E.transmissive;if(y.setupLights(),ie.isArrayCamera){const Te=ie.cameras;if(J.length>0)for(let Ie=0,He=Te.length;Ie<He;Ie++){const We=Te[Ie];xr(he,J,I,We)}Ge&&nt.render(I);for(let Ie=0,He=Te.length;Ie<He;Ie++){const We=Te[Ie];yr(E,I,We,We.viewport)}}else J.length>0&&xr(he,J,I,ie),Ge&&nt.render(I),yr(E,I,ie);V!==null&&(z.updateMultisampleRenderTarget(V),z.updateRenderTargetMipmap(V)),I.isScene===!0&&I.onAfterRender(k,I,ie),Rt.resetDefaultState(),w=-1,m=null,G.pop(),G.length>0?(y=G[G.length-1],Q===!0&&be.setGlobalState(k.clippingPlanes,y.state.camera)):y=null,Y.pop(),Y.length>0?E=Y[Y.length-1]:E=null};function _i(I,ie,de,he){if(I.visible===!1)return;if(I.layers.test(ie.layers)){if(I.isGroup)de=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ie);else if(I.isLight)y.pushLight(I),I.castShadow&&y.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||j.intersectsSprite(I)){he&&Ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ve);const Ie=ge.update(I),He=I.material;He.visible&&E.push(I,Ie,He,de,Ce.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||j.intersectsObject(I))){const Ie=ge.update(I),He=I.material;if(he&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ce.copy(I.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ce.copy(Ie.boundingSphere.center)),Ce.applyMatrix4(I.matrixWorld).applyMatrix4(ve)),Array.isArray(He)){const We=Ie.groups;for(let at=0,lt=We.length;at<lt;at++){const et=We[at],ht=He[et.materialIndex];ht&&ht.visible&&E.push(I,Ie,ht,de,Ce.z,et)}}else He.visible&&E.push(I,Ie,He,de,Ce.z,null)}}const Te=I.children;for(let Ie=0,He=Te.length;Ie<He;Ie++)_i(Te[Ie],ie,de,he)}function yr(I,ie,de,he){const J=I.opaque,Te=I.transmissive,Ie=I.transparent;y.setupLightsView(de),Q===!0&&be.setGlobalState(k.clippingPlanes,de),he&&Pe.viewport(U.copy(he)),J.length>0&&Vi(J,ie,de),Te.length>0&&Vi(Te,ie,de),Ie.length>0&&Vi(Ie,ie,de),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function xr(I,ie,de,he){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[he.id]===void 0&&(y.state.transmissionRenderTarget[he.id]=new Qr(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Vs:ki,minFilter:qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Te=y.state.transmissionRenderTarget[he.id],Ie=he.viewport||U;Te.setSize(Ie.z,Ie.w);const He=k.getRenderTarget();k.setRenderTarget(Te),k.getClearColor(H),te=k.getClearAlpha(),te<1&&k.setClearColor(16777215,.5),k.clear(),Ge&&nt.render(de);const We=k.toneMapping;k.toneMapping=gr;const at=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),y.setupLightsView(he),Q===!0&&be.setGlobalState(k.clippingPlanes,he),Vi(I,de,he),z.updateMultisampleRenderTarget(Te),z.updateRenderTargetMipmap(Te),Je.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let et=0,ht=ie.length;et<ht;et++){const Tt=ie[et],bt=Tt.object,kt=Tt.geometry,Mt=Tt.material,tt=Tt.group;if(Mt.side===Ni&&bt.layers.test(he.layers)){const Vt=Mt.side;Mt.side=Ln,Mt.needsUpdate=!0,$s(bt,de,he,kt,Mt,tt),Mt.side=Vt,Mt.needsUpdate=!0,lt=!0}}lt===!0&&(z.updateMultisampleRenderTarget(Te),z.updateRenderTargetMipmap(Te))}k.setRenderTarget(He),k.setClearColor(H,te),at!==void 0&&(he.viewport=at),k.toneMapping=We}function Vi(I,ie,de){const he=ie.isScene===!0?ie.overrideMaterial:null;for(let J=0,Te=I.length;J<Te;J++){const Ie=I[J],He=Ie.object,We=Ie.geometry,at=he===null?Ie.material:he,lt=Ie.group;He.layers.test(de.layers)&&$s(He,ie,de,We,at,lt)}}function $s(I,ie,de,he,J,Te){I.onBeforeRender(k,ie,de,he,J,Te),I.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(k,ie,de,he,I,Te),J.transparent===!0&&J.side===Ni&&J.forceSinglePass===!1?(J.side=Ln,J.needsUpdate=!0,k.renderBufferDirect(de,ie,he,J,I,Te),J.side=vr,J.needsUpdate=!0,k.renderBufferDirect(de,ie,he,J,I,Te),J.side=Ni):k.renderBufferDirect(de,ie,he,J,I,Te),I.onAfterRender(k,ie,de,he,J,Te)}function eo(I,ie,de){ie.isScene!==!0&&(ie=Qe);const he=Le.get(I),J=y.state.lights,Te=y.state.shadowsArray,Ie=J.state.version,He=Be.getParameters(I,J.state,Te,ie,de),We=Be.getProgramCacheKey(He);let at=he.programs;he.environment=I.isMeshStandardMaterial?ie.environment:null,he.fog=ie.fog,he.envMap=(I.isMeshStandardMaterial?le:R).get(I.envMap||he.environment),he.envMapRotation=he.environment!==null&&I.envMap===null?ie.environmentRotation:I.envMapRotation,at===void 0&&(I.addEventListener("dispose",dt),at=new Map,he.programs=at);let lt=at.get(We);if(lt!==void 0){if(he.currentProgram===lt&&he.lightsStateVersion===Ie)return ui(I,He),lt}else He.uniforms=Be.getUniforms(I),I.onBeforeCompile(He,k),lt=Be.acquireProgram(He,We),at.set(We,lt),he.uniforms=He.uniforms;const et=he.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(et.clippingPlanes=be.uniform),ui(I,He),he.needsLights=Xl(I),he.lightsStateVersion=Ie,he.needsLights&&(et.ambientLightColor.value=J.state.ambient,et.lightProbe.value=J.state.probe,et.directionalLights.value=J.state.directional,et.directionalLightShadows.value=J.state.directionalShadow,et.spotLights.value=J.state.spot,et.spotLightShadows.value=J.state.spotShadow,et.rectAreaLights.value=J.state.rectArea,et.ltc_1.value=J.state.rectAreaLTC1,et.ltc_2.value=J.state.rectAreaLTC2,et.pointLights.value=J.state.point,et.pointLightShadows.value=J.state.pointShadow,et.hemisphereLights.value=J.state.hemi,et.directionalShadowMap.value=J.state.directionalShadowMap,et.directionalShadowMatrix.value=J.state.directionalShadowMatrix,et.spotShadowMap.value=J.state.spotShadowMap,et.spotLightMatrix.value=J.state.spotLightMatrix,et.spotLightMap.value=J.state.spotLightMap,et.pointShadowMap.value=J.state.pointShadowMap,et.pointShadowMatrix.value=J.state.pointShadowMatrix),he.currentProgram=lt,he.uniformsList=null,lt}function Ks(I){if(I.uniformsList===null){const ie=I.currentProgram.getUniforms();I.uniformsList=Dl.seqWithValue(ie.seq,I.uniforms)}return I.uniformsList}function ui(I,ie){const de=Le.get(I);de.outputColorSpace=ie.outputColorSpace,de.batching=ie.batching,de.batchingColor=ie.batchingColor,de.instancing=ie.instancing,de.instancingColor=ie.instancingColor,de.instancingMorph=ie.instancingMorph,de.skinning=ie.skinning,de.morphTargets=ie.morphTargets,de.morphNormals=ie.morphNormals,de.morphColors=ie.morphColors,de.morphTargetsCount=ie.morphTargetsCount,de.numClippingPlanes=ie.numClippingPlanes,de.numIntersection=ie.numClipIntersection,de.vertexAlphas=ie.vertexAlphas,de.vertexTangents=ie.vertexTangents,de.toneMapping=ie.toneMapping}function Zs(I,ie,de,he,J){ie.isScene!==!0&&(ie=Qe),z.resetTextureUnits();const Te=ie.fog,Ie=he.isMeshStandardMaterial?ie.environment:null,He=V===null?k.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Yo,We=(he.isMeshStandardMaterial?le:R).get(he.envMap||Ie),at=he.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,lt=!!de.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),et=!!de.morphAttributes.position,ht=!!de.morphAttributes.normal,Tt=!!de.morphAttributes.color;let bt=gr;he.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(bt=k.toneMapping);const kt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Mt=kt!==void 0?kt.length:0,tt=Le.get(he),Vt=y.state.lights;if(Q===!0&&(re===!0||I!==m)){const Wt=I===m&&he.id===w;be.setState(he,I,Wt)}let xt=!1;he.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Vt.state.version||tt.outputColorSpace!==He||J.isBatchedMesh&&tt.batching===!1||!J.isBatchedMesh&&tt.batching===!0||J.isBatchedMesh&&tt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&tt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&tt.instancing===!1||!J.isInstancedMesh&&tt.instancing===!0||J.isSkinnedMesh&&tt.skinning===!1||!J.isSkinnedMesh&&tt.skinning===!0||J.isInstancedMesh&&tt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&tt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&tt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&tt.instancingMorph===!1&&J.morphTexture!==null||tt.envMap!==We||he.fog===!0&&tt.fog!==Te||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==be.numPlanes||tt.numIntersection!==be.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==lt||tt.morphTargets!==et||tt.morphNormals!==ht||tt.morphColors!==Tt||tt.toneMapping!==bt||tt.morphTargetsCount!==Mt)&&(xt=!0):(xt=!0,tt.__version=he.version);let sn=tt.currentProgram;xt===!0&&(sn=eo(he,ie,J));let $n=!1,_n=!1,Sr=!1;const Lt=sn.getUniforms(),yn=tt.uniforms;if(Pe.useProgram(sn.program)&&($n=!0,_n=!0,Sr=!0),he.id!==w&&(w=he.id,_n=!0),$n||m!==I){Pe.buffers.depth.getReversed()?(oe.copy(I.projectionMatrix),q0(oe),Y0(oe),Lt.setValue(X,"projectionMatrix",oe)):Lt.setValue(X,"projectionMatrix",I.projectionMatrix),Lt.setValue(X,"viewMatrix",I.matrixWorldInverse);const cn=Lt.map.cameraPosition;cn!==void 0&&cn.setValue(X,Se.setFromMatrixPosition(I.matrixWorld)),De.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),m!==I&&(m=I,_n=!0,Sr=!0)}if(J.isSkinnedMesh){Lt.setOptional(X,J,"bindMatrix"),Lt.setOptional(X,J,"bindMatrixInverse");const Wt=J.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Lt.setValue(X,"boneTexture",Wt.boneTexture,z))}J.isBatchedMesh&&(Lt.setOptional(X,J,"batchingTexture"),Lt.setValue(X,"batchingTexture",J._matricesTexture,z),Lt.setOptional(X,J,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",J._indirectTexture,z),Lt.setOptional(X,J,"batchingColorTexture"),J._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",J._colorsTexture,z));const un=de.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&st.update(J,de,sn),(_n||tt.receiveShadow!==J.receiveShadow)&&(tt.receiveShadow=J.receiveShadow,Lt.setValue(X,"receiveShadow",J.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(yn.envMap.value=We,yn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&ie.environment!==null&&(yn.envMapIntensity.value=ie.environmentIntensity),_n&&(Lt.setValue(X,"toneMappingExposure",k.toneMappingExposure),tt.needsLights&&Qs(yn,Sr),Te&&he.fog===!0&&Re.refreshFogUniforms(yn,Te),Re.refreshMaterialUniforms(yn,he,q,_,y.state.transmissionRenderTarget[I.id]),Dl.upload(X,Ks(tt),yn,z)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Dl.upload(X,Ks(tt),yn,z),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Lt.setValue(X,"center",J.center),Lt.setValue(X,"modelViewMatrix",J.modelViewMatrix),Lt.setValue(X,"normalMatrix",J.normalMatrix),Lt.setValue(X,"modelMatrix",J.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Wt=he.uniformsGroups;for(let cn=0,Mr=Wt.length;cn<Mr;cn++){const yt=Wt[cn];ne.update(yt,sn),ne.bind(yt,sn)}}return sn}function Qs(I,ie){I.ambientLightColor.needsUpdate=ie,I.lightProbe.needsUpdate=ie,I.directionalLights.needsUpdate=ie,I.directionalLightShadows.needsUpdate=ie,I.pointLights.needsUpdate=ie,I.pointLightShadows.needsUpdate=ie,I.spotLights.needsUpdate=ie,I.spotLightShadows.needsUpdate=ie,I.rectAreaLights.needsUpdate=ie,I.hemisphereLights.needsUpdate=ie}function Xl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(I,ie,de){Le.get(I.texture).__webglTexture=ie,Le.get(I.depthTexture).__webglTexture=de;const he=Le.get(I);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=de===void 0,he.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,ie){const de=Le.get(I);de.__webglFramebuffer=ie,de.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(I,ie=0,de=0){V=I,P=ie,D=de;let he=!0,J=null,Te=!1,Ie=!1;if(I){const We=Le.get(I);if(We.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(X.FRAMEBUFFER,null),he=!1;else if(We.__webglFramebuffer===void 0)z.setupRenderTarget(I);else if(We.__hasExternalTextures)z.rebindTextures(I,Le.get(I.texture).__webglTexture,Le.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const et=I.depthTexture;if(We.__boundDepthTexture!==et){if(et!==null&&Le.has(et)&&(I.width!==et.image.width||I.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(I)}}const at=I.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ie=!0);const lt=Le.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(lt[ie])?J=lt[ie][de]:J=lt[ie],Te=!0):I.samples>0&&z.useMultisampledRTT(I)===!1?J=Le.get(I).__webglMultisampledFramebuffer:Array.isArray(lt)?J=lt[de]:J=lt,U.copy(I.viewport),$.copy(I.scissor),F=I.scissorTest}else U.copy(T).multiplyScalar(q).floor(),$.copy(B).multiplyScalar(q).floor(),F=ce;if(Pe.bindFramebuffer(X.FRAMEBUFFER,J)&&he&&Pe.drawBuffers(I,J),Pe.viewport(U),Pe.scissor($),Pe.setScissorTest(F),Te){const We=Le.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+ie,We.__webglTexture,de)}else if(Ie){const We=Le.get(I.texture),at=ie||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,We.__webglTexture,de||0,at)}w=-1},this.readRenderTargetPixels=function(I,ie,de,he,J,Te,Ie){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){Pe.bindFramebuffer(X.FRAMEBUFFER,He);try{const We=I.texture,at=We.format,lt=We.type;if(!De.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=I.width-he&&de>=0&&de<=I.height-J&&X.readPixels(ie,de,he,J,ft.convert(at),ft.convert(lt),Te)}finally{const We=V!==null?Le.get(V).__webglFramebuffer:null;Pe.bindFramebuffer(X.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(I,ie,de,he,J,Te,Ie){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){const We=I.texture,at=We.format,lt=We.type;if(!De.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ie>=0&&ie<=I.width-he&&de>=0&&de<=I.height-J){Pe.bindFramebuffer(X.FRAMEBUFFER,He);const et=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(ie,de,he,J,ft.convert(at),ft.convert(lt),0);const ht=V!==null?Le.get(V).__webglFramebuffer:null;Pe.bindFramebuffer(X.FRAMEBUFFER,ht);const Tt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await X0(X,Tt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(et),X.deleteSync(Tt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,ie=null,de=0){I.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ie=arguments[0]||null,I=arguments[1]);const he=Math.pow(2,-de),J=Math.floor(I.image.width*he),Te=Math.floor(I.image.height*he),Ie=ie!==null?ie.x:0,He=ie!==null?ie.y:0;z.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,de,0,0,Ie,He,J,Te),Pe.unbindTexture()};const Js=X.createFramebuffer(),ea=X.createFramebuffer();this.copyTextureToTexture=function(I,ie,de=null,he=null,J=0,Te=null){I.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,I=arguments[1],ie=arguments[2],Te=arguments[3]||0,de=null),Te===null&&(J!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=J,J=0):Te=0);let Ie,He,We,at,lt,et,ht,Tt,bt;const kt=I.isCompressedTexture?I.mipmaps[Te]:I.image;if(de!==null)Ie=de.max.x-de.min.x,He=de.max.y-de.min.y,We=de.isBox3?de.max.z-de.min.z:1,at=de.min.x,lt=de.min.y,et=de.isBox3?de.min.z:0;else{const un=Math.pow(2,-J);Ie=Math.floor(kt.width*un),He=Math.floor(kt.height*un),I.isDataArrayTexture?We=kt.depth:I.isData3DTexture?We=Math.floor(kt.depth*un):We=1,at=0,lt=0,et=0}he!==null?(ht=he.x,Tt=he.y,bt=he.z):(ht=0,Tt=0,bt=0);const Mt=ft.convert(ie.format),tt=ft.convert(ie.type);let Vt;ie.isData3DTexture?(z.setTexture3D(ie,0),Vt=X.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(z.setTexture2DArray(ie,0),Vt=X.TEXTURE_2D_ARRAY):(z.setTexture2D(ie,0),Vt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ie.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ie.unpackAlignment);const xt=X.getParameter(X.UNPACK_ROW_LENGTH),sn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),$n=X.getParameter(X.UNPACK_SKIP_PIXELS),_n=X.getParameter(X.UNPACK_SKIP_ROWS),Sr=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,kt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,kt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,at),X.pixelStorei(X.UNPACK_SKIP_ROWS,lt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,et);const Lt=I.isDataArrayTexture||I.isData3DTexture,yn=ie.isDataArrayTexture||ie.isData3DTexture;if(I.isDepthTexture){const un=Le.get(I),Wt=Le.get(ie),cn=Le.get(un.__renderTarget),Mr=Le.get(Wt.__renderTarget);Pe.bindFramebuffer(X.READ_FRAMEBUFFER,cn.__webglFramebuffer),Pe.bindFramebuffer(X.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let yt=0;yt<We;yt++)Lt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Le.get(I).__webglTexture,J,et+yt),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Le.get(ie).__webglTexture,Te,bt+yt)),X.blitFramebuffer(at,lt,Ie,He,ht,Tt,Ie,He,X.DEPTH_BUFFER_BIT,X.NEAREST);Pe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(J!==0||I.isRenderTargetTexture||Le.has(I)){const un=Le.get(I),Wt=Le.get(ie);Pe.bindFramebuffer(X.READ_FRAMEBUFFER,Js),Pe.bindFramebuffer(X.DRAW_FRAMEBUFFER,ea);for(let cn=0;cn<We;cn++)Lt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,un.__webglTexture,J,et+cn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,un.__webglTexture,J),yn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Wt.__webglTexture,Te,bt+cn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Wt.__webglTexture,Te),J!==0?X.blitFramebuffer(at,lt,Ie,He,ht,Tt,Ie,He,X.COLOR_BUFFER_BIT,X.NEAREST):yn?X.copyTexSubImage3D(Vt,Te,ht,Tt,bt+cn,at,lt,Ie,He):X.copyTexSubImage2D(Vt,Te,ht,Tt,at,lt,Ie,He);Pe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else yn?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(Vt,Te,ht,Tt,bt,Ie,He,We,Mt,tt,kt.data):ie.isCompressedArrayTexture?X.compressedTexSubImage3D(Vt,Te,ht,Tt,bt,Ie,He,We,Mt,kt.data):X.texSubImage3D(Vt,Te,ht,Tt,bt,Ie,He,We,Mt,tt,kt):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Te,ht,Tt,Ie,He,Mt,tt,kt.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Te,ht,Tt,kt.width,kt.height,Mt,kt.data):X.texSubImage2D(X.TEXTURE_2D,Te,ht,Tt,Ie,He,Mt,tt,kt);X.pixelStorei(X.UNPACK_ROW_LENGTH,xt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,sn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,$n),X.pixelStorei(X.UNPACK_SKIP_ROWS,_n),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Sr),Te===0&&ie.generateMipmaps&&X.generateMipmap(Vt),Pe.unbindTexture()},this.copyTextureToTexture3D=function(I,ie,de=null,he=null,J=0){return I.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),de=arguments[0]||null,he=arguments[1]||null,I=arguments[2],ie=arguments[3],J=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,ie,de,he,J)},this.initRenderTarget=function(I){Le.get(I).__webglFramebuffer===void 0&&z.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?z.setTextureCube(I,0):I.isData3DTexture?z.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?z.setTexture2DArray(I,0):z.setTexture2D(I,0),Pe.unbindTexture()},this.resetState=function(){P=0,D=0,V=null,Pe.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}function l1(){const o=Kr.useRef(null);return Kr.useEffect(()=>{const e=o.current,n=new vy,r=new Yn(75,e.offsetWidth/e.offsetHeight,.1,1e3);r.position.z=5;const a=new a1({alpha:!0});a.setSize(e.offsetWidth,e.offsetHeight),a.setPixelRatio(window.devicePixelRatio),e.appendChild(a.domElement);const l=new Bi,c=1e3,f=new Float32Array(c*3);for(let M=0;M<c;M++)f[M*3]=(Math.random()-.5)*2e3,f[M*3+1]=(Math.random()-.5)*2e3,f[M*3+2]=(Math.random()-.5)*2e3;l.setAttribute("position",new li(f,3));const p=new Wg({color:16777215,size:1.5,transparent:!0,opacity:.8}),g=new xy(l,p);n.add(g);const x=()=>{requestAnimationFrame(x),g.rotation.y+=5e-4,a.render(n,r)};x();const S=()=>{r.aspect=e.offsetWidth/e.offsetHeight,r.updateProjectionMatrix(),a.setSize(e.offsetWidth,e.offsetHeight)};return window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S),e.removeChild(a.domElement)}},[]),se.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,overflow:"hidden",backgroundColor:"#000"}})}const u1=()=>{const[o,e]=Kr.useState(!1),n=()=>{e(!o)};return se.jsxs("div",{children:[se.jsxs("nav",{className:"bg-black text-white py-4 fixed top-0 left-0 w-full z-50 hidden md:flex justify-between items-center px-20 shadow-md mt-0 mb-3",children:[se.jsx("div",{className:"font-bold text-2xl bg-custom-gradient bg-clip-text text-transparent mt-3",children:"NIMESHI"}),se.jsxs("div",{className:"space-x-8 text-m flex relative mt-3",children:[se.jsx("a",{href:"#hero1",className:"hover:text-white-700 relative font-medium",children:"Home"}),se.jsx("a",{href:"#about",className:"hover:text-white-700 relative font-medium",children:"About"}),se.jsx("a",{href:"#service",className:"hover:text-white-700 relative font-medium",children:"Service"}),se.jsx("a",{href:"#skills",className:"hover:text-white-700 relative font-medium",children:"Skills"}),se.jsx("a",{href:"#project",className:"hover:text-white-700 relative font-medium",children:"Projects"})]})]}),se.jsxs("div",{className:"md:hidden ",children:[se.jsx("div",{className:"fixed top-0 left-0 z-10 mt-3",children:se.jsx("button",{onClick:n,className:"text-white p-4",children:se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:se.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),se.jsxs("div",{className:`fixed top-0 left-0 w-3/4 h-60 bg-[#1A1A1A] text-white p-6 transform ${o?"translate-x-0":"-translate-x-full"} transition-transform ease-in-out duration-300 z-40`,children:[se.jsx("button",{onClick:n,className:"text-white absolute top-4 right-4",children:se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:se.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),se.jsxs("div",{className:"space-y-3 text-lg mt-2",children:[se.jsx("a",{href:"#home",className:"block hover:text-gray-400 font-medium",children:"Home"}),se.jsx("a",{href:"#about",className:"block hover:text-gray-400 font-medium",children:"About"}),se.jsx("a",{href:"#service",className:"block hover:text-gray-400 font-medium",children:"Service"}),se.jsx("a",{href:"#skills",className:"block hover:text-gray-400 font-medium",children:"Skills"}),se.jsx("a",{href:"#project",className:"block hover:text-gray-400 font-medium",children:"Projects"})]})]})]})]})};var of={},sf={},Os={},af={},jm;function c1(){return jm||(jm=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};o.default=e}(af)),af}var lf,Xm;function f1(){if(Xm)return lf;Xm=1;var o="Expected a function",e=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,p=typeof tl=="object"&&tl&&tl.Object===Object&&tl,g=typeof self=="object"&&self&&self.Object===Object&&self,x=p||g||Function("return this")(),S=Object.prototype,M=S.toString,b=Math.max,N=Math.min,C=function(){return x.Date.now()};function E(L,P,D){var V,w,m,U,$,F,H=0,te=!1,Z=!1,_=!0;if(typeof L!="function")throw new TypeError(o);P=k(P)||0,y(D)&&(te=!!D.leading,Z="maxWait"in D,m=Z?b(k(D.maxWait)||0,P):m,_="trailing"in D?!!D.trailing:_);function q(oe){var ve=V,Se=w;return V=w=void 0,H=oe,U=L.apply(Se,ve),U}function O(oe){return H=oe,$=setTimeout(B,P),te?q(oe):U}function v(oe){var ve=oe-F,Se=oe-H,Ce=P-ve;return Z?N(Ce,m-Se):Ce}function T(oe){var ve=oe-F,Se=oe-H;return F===void 0||ve>=P||ve<0||Z&&Se>=m}function B(){var oe=C();if(T(oe))return ce(oe);$=setTimeout(B,v(oe))}function ce(oe){return $=void 0,_&&V?q(oe):(V=w=void 0,U)}function j(){$!==void 0&&clearTimeout($),H=0,V=F=w=$=void 0}function Q(){return $===void 0?U:ce(C())}function re(){var oe=C(),ve=T(oe);if(V=arguments,w=this,F=oe,ve){if($===void 0)return O(F);if(Z)return $=setTimeout(B,P),q(F)}return $===void 0&&($=setTimeout(B,P)),U}return re.cancel=j,re.flush=Q,re}function y(L){var P=typeof L;return!!L&&(P=="object"||P=="function")}function Y(L){return!!L&&typeof L=="object"}function G(L){return typeof L=="symbol"||Y(L)&&M.call(L)==n}function k(L){if(typeof L=="number")return L;if(G(L))return e;if(y(L)){var P=typeof L.valueOf=="function"?L.valueOf():L;L=y(P)?P+"":P}if(typeof L!="string")return L===0?L:+L;L=L.replace(r,"");var D=l.test(L);return D||c.test(L)?f(L.slice(2),D?2:8):a.test(L)?e:+L}return lf=E,lf}var uf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var qm;function Wl(){return qm||(qm=1,function(o){(function(){var e={}.hasOwnProperty;function n(){for(var l="",c=0;c<arguments.length;c++){var f=arguments[c];f&&(l=a(l,r(f)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var c="";for(var f in l)e.call(l,f)&&l[f]&&(c=a(c,f));return c}function a(l,c){return c?l?l+" "+c:l+c:l}o.exports?(n.default=n,o.exports=n):window.classNames=n})()}(uf)),uf.exports}var Fe={},cf={},Ym;function Zg(){return Ym||(Ym=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n(gi());function n(a){return a&&a.__esModule?a:{default:a}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return e.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return e.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};o.default=r}(cf)),cf}var $m;function Ys(){if($m)return Fe;$m=1,Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.checkSpecKeys=Fe.checkNavigable=Fe.changeSlide=Fe.canUseDOM=Fe.canGoNext=void 0,Fe.clamp=g,Fe.extractObject=void 0,Fe.filterSettings=q,Fe.validSettings=Fe.swipeStart=Fe.swipeMove=Fe.swipeEnd=Fe.slidesOnRight=Fe.slidesOnLeft=Fe.slideHandler=Fe.siblingDirection=Fe.safePreventDefault=Fe.lazyStartIndex=Fe.lazySlidesOnRight=Fe.lazySlidesOnLeft=Fe.lazyEndIndex=Fe.keyHandler=Fe.initializedState=Fe.getWidth=Fe.getTrackLeft=Fe.getTrackCSS=Fe.getTrackAnimateCSS=Fe.getTotalSlides=Fe.getSwipeDirection=Fe.getSlideCount=Fe.getRequiredLazySlides=Fe.getPreClones=Fe.getPostClones=Fe.getOnDemandLazySlides=Fe.getNavigableIndexes=Fe.getHeight=void 0;var o=n(gi()),e=n(Zg());function n(O){return O&&O.__esModule?O:{default:O}}function r(O){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},r(O)}function a(O,v){var T=Object.keys(O);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(O);v&&(B=B.filter(function(ce){return Object.getOwnPropertyDescriptor(O,ce).enumerable})),T.push.apply(T,B)}return T}function l(O){for(var v=1;v<arguments.length;v++){var T=arguments[v]!=null?arguments[v]:{};v%2?a(Object(T),!0).forEach(function(B){c(O,B,T[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(T)):a(Object(T)).forEach(function(B){Object.defineProperty(O,B,Object.getOwnPropertyDescriptor(T,B))})}return O}function c(O,v,T){return v=f(v),v in O?Object.defineProperty(O,v,{value:T,enumerable:!0,configurable:!0,writable:!0}):O[v]=T,O}function f(O){var v=p(O,"string");return r(v)=="symbol"?v:String(v)}function p(O,v){if(r(O)!="object"||!O)return O;var T=O[Symbol.toPrimitive];if(T!==void 0){var B=T.call(O,v||"default");if(r(B)!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(O)}function g(O,v,T){return Math.max(v,Math.min(O,T))}var x=Fe.safePreventDefault=function(v){var T=["onTouchStart","onTouchMove","onWheel"];T.includes(v._reactName)||v.preventDefault()},S=Fe.getOnDemandLazySlides=function(v){for(var T=[],B=M(v),ce=b(v),j=B;j<ce;j++)v.lazyLoadedList.indexOf(j)<0&&T.push(j);return T};Fe.getRequiredLazySlides=function(v){for(var T=[],B=M(v),ce=b(v),j=B;j<ce;j++)T.push(j);return T};var M=Fe.lazyStartIndex=function(v){return v.currentSlide-N(v)},b=Fe.lazyEndIndex=function(v){return v.currentSlide+C(v)},N=Fe.lazySlidesOnLeft=function(v){return v.centerMode?Math.floor(v.slidesToShow/2)+(parseInt(v.centerPadding)>0?1:0):0},C=Fe.lazySlidesOnRight=function(v){return v.centerMode?Math.floor((v.slidesToShow-1)/2)+1+(parseInt(v.centerPadding)>0?1:0):v.slidesToShow},E=Fe.getWidth=function(v){return v&&v.offsetWidth||0},y=Fe.getHeight=function(v){return v&&v.offsetHeight||0},Y=Fe.getSwipeDirection=function(v){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,B,ce,j,Q;return B=v.startX-v.curX,ce=v.startY-v.curY,j=Math.atan2(ce,B),Q=Math.round(j*180/Math.PI),Q<0&&(Q=360-Math.abs(Q)),Q<=45&&Q>=0||Q<=360&&Q>=315?"left":Q>=135&&Q<=225?"right":T===!0?Q>=35&&Q<=135?"up":"down":"vertical"},G=Fe.canGoNext=function(v){var T=!0;return v.infinite||(v.centerMode&&v.currentSlide>=v.slideCount-1||v.slideCount<=v.slidesToShow||v.currentSlide>=v.slideCount-v.slidesToShow)&&(T=!1),T};Fe.extractObject=function(v,T){var B={};return T.forEach(function(ce){return B[ce]=v[ce]}),B},Fe.initializedState=function(v){var T=o.default.Children.count(v.children),B=v.listRef,ce=Math.ceil(E(B)),j=v.trackRef&&v.trackRef.node,Q=Math.ceil(E(j)),re;if(v.vertical)re=ce;else{var oe=v.centerMode&&parseInt(v.centerPadding)*2;typeof v.centerPadding=="string"&&v.centerPadding.slice(-1)==="%"&&(oe*=ce/100),re=Math.ceil((ce-oe)/v.slidesToShow)}var ve=B&&y(B.querySelector('[data-index="0"]')),Se=ve*v.slidesToShow,Ce=v.currentSlide===void 0?v.initialSlide:v.currentSlide;v.rtl&&v.currentSlide===void 0&&(Ce=T-1-v.initialSlide);var Qe=v.lazyLoadedList||[],Ge=S(l(l({},v),{},{currentSlide:Ce,lazyLoadedList:Qe}));Qe=Qe.concat(Ge);var Ze={slideCount:T,slideWidth:re,listWidth:ce,trackWidth:Q,currentSlide:Ce,slideHeight:ve,listHeight:Se,lazyLoadedList:Qe};return v.autoplaying===null&&v.autoplay&&(Ze.autoplaying="playing"),Ze},Fe.slideHandler=function(v){var T=v.waitForAnimate,B=v.animating,ce=v.fade,j=v.infinite,Q=v.index,re=v.slideCount,oe=v.lazyLoad,ve=v.currentSlide,Se=v.centerMode,Ce=v.slidesToScroll,Qe=v.slidesToShow,Ge=v.useCSS,Ze=v.lazyLoadedList;if(T&&B)return{};var X=Q,ct,Je,De,Pe={},ot={},Le=j?Q:g(Q,0,re-1);if(ce){if(!j&&(Q<0||Q>=re))return{};Q<0?X=Q+re:Q>=re&&(X=Q-re),oe&&Ze.indexOf(X)<0&&(Ze=Ze.concat(X)),Pe={animating:!0,currentSlide:X,lazyLoadedList:Ze,targetSlide:X},ot={animating:!1,targetSlide:X}}else ct=X,X<0?(ct=X+re,j?re%Ce!==0&&(ct=re-re%Ce):ct=0):!G(v)&&X>ve?X=ct=ve:Se&&X>=re?(X=j?re:re-1,ct=j?0:re-1):X>=re&&(ct=X-re,j?re%Ce!==0&&(ct=0):ct=re-Qe),!j&&X+Qe>=re&&(ct=re-Qe),Je=m(l(l({},v),{},{slideIndex:X})),De=m(l(l({},v),{},{slideIndex:ct})),j||(Je===De&&(X=ct),Je=De),oe&&(Ze=Ze.concat(S(l(l({},v),{},{currentSlide:X})))),Ge?(Pe={animating:!0,currentSlide:ct,trackStyle:w(l(l({},v),{},{left:Je})),lazyLoadedList:Ze,targetSlide:Le},ot={animating:!1,currentSlide:ct,trackStyle:V(l(l({},v),{},{left:De})),swipeLeft:null,targetSlide:Le}):Pe={currentSlide:ct,trackStyle:V(l(l({},v),{},{left:De})),lazyLoadedList:Ze,targetSlide:Le};return{state:Pe,nextState:ot}},Fe.changeSlide=function(v,T){var B,ce,j,Q,re,oe=v.slidesToScroll,ve=v.slidesToShow,Se=v.slideCount,Ce=v.currentSlide,Qe=v.targetSlide,Ge=v.lazyLoad,Ze=v.infinite;if(Q=Se%oe!==0,B=Q?0:(Se-Ce)%oe,T.message==="previous")j=B===0?oe:ve-B,re=Ce-j,Ge&&!Ze&&(ce=Ce-j,re=ce===-1?Se-1:ce),Ze||(re=Qe-oe);else if(T.message==="next")j=B===0?oe:B,re=Ce+j,Ge&&!Ze&&(re=(Ce+oe)%Se+B),Ze||(re=Qe+oe);else if(T.message==="dots")re=T.index*T.slidesToScroll;else if(T.message==="children"){if(re=T.index,Ze){var X=H(l(l({},v),{},{targetSlide:re}));re>T.currentSlide&&X==="left"?re=re-Se:re<T.currentSlide&&X==="right"&&(re=re+Se)}}else T.message==="index"&&(re=Number(T.index));return re},Fe.keyHandler=function(v,T,B){return v.target.tagName.match("TEXTAREA|INPUT|SELECT")||!T?"":v.keyCode===37?B?"next":"previous":v.keyCode===39?B?"previous":"next":""},Fe.swipeStart=function(v,T,B){return v.target.tagName==="IMG"&&x(v),!T||!B&&v.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:v.touches?v.touches[0].pageX:v.clientX,startY:v.touches?v.touches[0].pageY:v.clientY,curX:v.touches?v.touches[0].pageX:v.clientX,curY:v.touches?v.touches[0].pageY:v.clientY}}},Fe.swipeMove=function(v,T){var B=T.scrolling,ce=T.animating,j=T.vertical,Q=T.swipeToSlide,re=T.verticalSwiping,oe=T.rtl,ve=T.currentSlide,Se=T.edgeFriction,Ce=T.edgeDragged,Qe=T.onEdge,Ge=T.swiped,Ze=T.swiping,X=T.slideCount,ct=T.slidesToScroll,Je=T.infinite,De=T.touchObject,Pe=T.swipeEvent,ot=T.listHeight,Le=T.listWidth;if(!B){if(ce)return x(v);j&&Q&&re&&x(v);var z,R={},le=m(T);De.curX=v.touches?v.touches[0].pageX:v.clientX,De.curY=v.touches?v.touches[0].pageY:v.clientY,De.swipeLength=Math.round(Math.sqrt(Math.pow(De.curX-De.startX,2)));var ye=Math.round(Math.sqrt(Math.pow(De.curY-De.startY,2)));if(!re&&!Ze&&ye>10)return{scrolling:!0};re&&(De.swipeLength=ye);var xe=(oe?-1:1)*(De.curX>De.startX?1:-1);re&&(xe=De.curY>De.startY?1:-1);var ge=Math.ceil(X/ct),Be=Y(T.touchObject,re),Re=De.swipeLength;return Je||(ve===0&&(Be==="right"||Be==="down")||ve+1>=ge&&(Be==="left"||Be==="up")||!G(T)&&(Be==="left"||Be==="up"))&&(Re=De.swipeLength*Se,Ce===!1&&Qe&&(Qe(Be),R.edgeDragged=!0)),!Ge&&Pe&&(Pe(Be),R.swiped=!0),j?z=le+Re*(ot/Le)*xe:oe?z=le-Re*xe:z=le+Re*xe,re&&(z=le+Re*xe),R=l(l({},R),{},{touchObject:De,swipeLeft:z,trackStyle:V(l(l({},T),{},{left:z}))}),Math.abs(De.curX-De.startX)<Math.abs(De.curY-De.startY)*.8||De.swipeLength>10&&(R.swiping=!0,x(v)),R}},Fe.swipeEnd=function(v,T){var B=T.dragging,ce=T.swipe,j=T.touchObject,Q=T.listWidth,re=T.touchThreshold,oe=T.verticalSwiping,ve=T.listHeight,Se=T.swipeToSlide,Ce=T.scrolling,Qe=T.onSwipe,Ge=T.targetSlide,Ze=T.currentSlide,X=T.infinite;if(!B)return ce&&x(v),{};var ct=oe?ve/re:Q/re,Je=Y(j,oe),De={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Ce||!j.swipeLength)return De;if(j.swipeLength>ct){x(v),Qe&&Qe(Je);var Pe,ot,Le=X?Ze:Ge;switch(Je){case"left":case"up":ot=Le+P(T),Pe=Se?L(T,ot):ot,De.currentDirection=0;break;case"right":case"down":ot=Le-P(T),Pe=Se?L(T,ot):ot,De.currentDirection=1;break;default:Pe=Le}De.triggerSlideHandler=Pe}else{var z=m(T);De.trackStyle=w(l(l({},T),{},{left:z}))}return De};var k=Fe.getNavigableIndexes=function(v){for(var T=v.infinite?v.slideCount*2:v.slideCount,B=v.infinite?v.slidesToShow*-1:0,ce=v.infinite?v.slidesToShow*-1:0,j=[];B<T;)j.push(B),B=ce+v.slidesToScroll,ce+=Math.min(v.slidesToScroll,v.slidesToShow);return j},L=Fe.checkNavigable=function(v,T){var B=k(v),ce=0;if(T>B[B.length-1])T=B[B.length-1];else for(var j in B){if(T<B[j]){T=ce;break}ce=B[j]}return T},P=Fe.getSlideCount=function(v){var T=v.centerMode?v.slideWidth*Math.floor(v.slidesToShow/2):0;if(v.swipeToSlide){var B,ce=v.listRef,j=ce.querySelectorAll&&ce.querySelectorAll(".slick-slide")||[];if(Array.from(j).every(function(oe){if(v.vertical){if(oe.offsetTop+y(oe)/2>v.swipeLeft*-1)return B=oe,!1}else if(oe.offsetLeft-T+E(oe)/2>v.swipeLeft*-1)return B=oe,!1;return!0}),!B)return 0;var Q=v.rtl===!0?v.slideCount-v.currentSlide:v.currentSlide,re=Math.abs(B.dataset.index-Q)||1;return re}else return v.slidesToScroll},D=Fe.checkSpecKeys=function(v,T){return T.reduce(function(B,ce){return B&&v.hasOwnProperty(ce)},!0)?null:console.error("Keys Missing:",v)},V=Fe.getTrackCSS=function(v){D(v,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var T,B,ce=v.slideCount+2*v.slidesToShow;v.vertical?B=ce*v.slideHeight:T=F(v)*v.slideWidth;var j={opacity:1,transition:"",WebkitTransition:""};if(v.useTransform){var Q=v.vertical?"translate3d(0px, "+v.left+"px, 0px)":"translate3d("+v.left+"px, 0px, 0px)",re=v.vertical?"translate3d(0px, "+v.left+"px, 0px)":"translate3d("+v.left+"px, 0px, 0px)",oe=v.vertical?"translateY("+v.left+"px)":"translateX("+v.left+"px)";j=l(l({},j),{},{WebkitTransform:Q,transform:re,msTransform:oe})}else v.vertical?j.top=v.left:j.left=v.left;return v.fade&&(j={opacity:1}),T&&(j.width=T),B&&(j.height=B),window&&!window.addEventListener&&window.attachEvent&&(v.vertical?j.marginTop=v.left+"px":j.marginLeft=v.left+"px"),j},w=Fe.getTrackAnimateCSS=function(v){D(v,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var T=V(v);return v.useTransform?(T.WebkitTransition="-webkit-transform "+v.speed+"ms "+v.cssEase,T.transition="transform "+v.speed+"ms "+v.cssEase):v.vertical?T.transition="top "+v.speed+"ms "+v.cssEase:T.transition="left "+v.speed+"ms "+v.cssEase,T},m=Fe.getTrackLeft=function(v){if(v.unslick)return 0;D(v,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var T=v.slideIndex,B=v.trackRef,ce=v.infinite,j=v.centerMode,Q=v.slideCount,re=v.slidesToShow,oe=v.slidesToScroll,ve=v.slideWidth,Se=v.listWidth,Ce=v.variableWidth,Qe=v.slideHeight,Ge=v.fade,Ze=v.vertical,X=0,ct,Je,De=0;if(Ge||v.slideCount===1)return 0;var Pe=0;if(ce?(Pe=-U(v),Q%oe!==0&&T+oe>Q&&(Pe=-(T>Q?re-(T-Q):Q%oe)),j&&(Pe+=parseInt(re/2))):(Q%oe!==0&&T+oe>Q&&(Pe=re-Q%oe),j&&(Pe=parseInt(re/2))),X=Pe*ve,De=Pe*Qe,Ze?ct=T*Qe*-1+De:ct=T*ve*-1+X,Ce===!0){var ot,Le=B&&B.node;if(ot=T+U(v),Je=Le&&Le.childNodes[ot],ct=Je?Je.offsetLeft*-1:0,j===!0){ot=ce?T+U(v):T,Je=Le&&Le.children[ot],ct=0;for(var z=0;z<ot;z++)ct-=Le&&Le.children[z]&&Le.children[z].offsetWidth;ct-=parseInt(v.centerPadding),ct+=Je&&(Se-Je.offsetWidth)/2}}return ct},U=Fe.getPreClones=function(v){return v.unslick||!v.infinite?0:v.variableWidth?v.slideCount:v.slidesToShow+(v.centerMode?1:0)},$=Fe.getPostClones=function(v){return v.unslick||!v.infinite?0:v.slideCount},F=Fe.getTotalSlides=function(v){return v.slideCount===1?1:U(v)+v.slideCount+$(v)},H=Fe.siblingDirection=function(v){return v.targetSlide>v.currentSlide?v.targetSlide>v.currentSlide+te(v)?"left":"right":v.targetSlide<v.currentSlide-Z(v)?"right":"left"},te=Fe.slidesOnRight=function(v){var T=v.slidesToShow,B=v.centerMode,ce=v.rtl,j=v.centerPadding;if(B){var Q=(T-1)/2+1;return parseInt(j)>0&&(Q+=1),ce&&T%2===0&&(Q+=1),Q}return ce?0:T-1},Z=Fe.slidesOnLeft=function(v){var T=v.slidesToShow,B=v.centerMode,ce=v.rtl,j=v.centerPadding;if(B){var Q=(T-1)/2+1;return parseInt(j)>0&&(Q+=1),!ce&&T%2===0&&(Q+=1),Q}return ce?T-1:0};Fe.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var _=Fe.validSettings=Object.keys(e.default);function q(O){return _.reduce(function(v,T){return O.hasOwnProperty(T)&&(v[T]=O[T]),v},{})}return Fe}var Fs={},Km;function d1(){if(Km)return Fs;Km=1,Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.Track=void 0;var o=r(gi()),e=r(Wl()),n=Ys();function r(w){return w&&w.__esModule?w:{default:w}}function a(w){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},a(w)}function l(){return l=Object.assign?Object.assign.bind():function(w){for(var m=1;m<arguments.length;m++){var U=arguments[m];for(var $ in U)Object.prototype.hasOwnProperty.call(U,$)&&(w[$]=U[$])}return w},l.apply(this,arguments)}function c(w,m){if(!(w instanceof m))throw new TypeError("Cannot call a class as a function")}function f(w,m){for(var U=0;U<m.length;U++){var $=m[U];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(w,G($.key),$)}}function p(w,m,U){return m&&f(w.prototype,m),Object.defineProperty(w,"prototype",{writable:!1}),w}function g(w,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(m&&m.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),m&&x(w,m)}function x(w,m){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function($,F){return $.__proto__=F,$},x(w,m)}function S(w){var m=N();return function(){var $=C(w),F;if(m){var H=C(this).constructor;F=Reflect.construct($,arguments,H)}else F=$.apply(this,arguments);return M(this,F)}}function M(w,m){if(m&&(a(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return b(w)}function b(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function N(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(N=function(){return!!w})()}function C(w){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(U){return U.__proto__||Object.getPrototypeOf(U)},C(w)}function E(w,m){var U=Object.keys(w);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(w);m&&($=$.filter(function(F){return Object.getOwnPropertyDescriptor(w,F).enumerable})),U.push.apply(U,$)}return U}function y(w){for(var m=1;m<arguments.length;m++){var U=arguments[m]!=null?arguments[m]:{};m%2?E(Object(U),!0).forEach(function($){Y(w,$,U[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(U)):E(Object(U)).forEach(function($){Object.defineProperty(w,$,Object.getOwnPropertyDescriptor(U,$))})}return w}function Y(w,m,U){return m=G(m),m in w?Object.defineProperty(w,m,{value:U,enumerable:!0,configurable:!0,writable:!0}):w[m]=U,w}function G(w){var m=k(w,"string");return a(m)=="symbol"?m:String(m)}function k(w,m){if(a(w)!="object"||!w)return w;var U=w[Symbol.toPrimitive];if(U!==void 0){var $=U.call(w,m||"default");if(a($)!="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(w)}var L=function(m){var U,$,F,H,te;m.rtl?te=m.slideCount-1-m.index:te=m.index,F=te<0||te>=m.slideCount,m.centerMode?(H=Math.floor(m.slidesToShow/2),$=(te-m.currentSlide)%m.slideCount===0,te>m.currentSlide-H-1&&te<=m.currentSlide+H&&(U=!0)):U=m.currentSlide<=te&&te<m.currentSlide+m.slidesToShow;var Z;m.targetSlide<0?Z=m.targetSlide+m.slideCount:m.targetSlide>=m.slideCount?Z=m.targetSlide-m.slideCount:Z=m.targetSlide;var _=te===Z;return{"slick-slide":!0,"slick-active":U,"slick-center":$,"slick-cloned":F,"slick-current":_}},P=function(m){var U={};return(m.variableWidth===void 0||m.variableWidth===!1)&&(U.width=m.slideWidth),m.fade&&(U.position="relative",m.vertical?U.top=-m.index*parseInt(m.slideHeight):U.left=-m.index*parseInt(m.slideWidth),U.opacity=m.currentSlide===m.index?1:0,U.zIndex=m.currentSlide===m.index?999:998,m.useCSS&&(U.transition="opacity "+m.speed+"ms "+m.cssEase+", visibility "+m.speed+"ms "+m.cssEase)),U},D=function(m,U){return m.key||U},V=function(m){var U,$=[],F=[],H=[],te=o.default.Children.count(m.children),Z=(0,n.lazyStartIndex)(m),_=(0,n.lazyEndIndex)(m);return o.default.Children.forEach(m.children,function(q,O){var v,T={message:"children",index:O,slidesToScroll:m.slidesToScroll,currentSlide:m.currentSlide};!m.lazyLoad||m.lazyLoad&&m.lazyLoadedList.indexOf(O)>=0?v=q:v=o.default.createElement("div",null);var B=P(y(y({},m),{},{index:O})),ce=v.props.className||"",j=L(y(y({},m),{},{index:O}));if($.push(o.default.cloneElement(v,{key:"original"+D(v,O),"data-index":O,className:(0,e.default)(j,ce),tabIndex:"-1","aria-hidden":!j["slick-active"],style:y(y({outline:"none"},v.props.style||{}),B),onClick:function(oe){v.props&&v.props.onClick&&v.props.onClick(oe),m.focusOnSelect&&m.focusOnSelect(T)}})),m.infinite&&m.fade===!1){var Q=te-O;Q<=(0,n.getPreClones)(m)&&(U=-Q,U>=Z&&(v=q),j=L(y(y({},m),{},{index:U})),F.push(o.default.cloneElement(v,{key:"precloned"+D(v,U),"data-index":U,tabIndex:"-1",className:(0,e.default)(j,ce),"aria-hidden":!j["slick-active"],style:y(y({},v.props.style||{}),B),onClick:function(oe){v.props&&v.props.onClick&&v.props.onClick(oe),m.focusOnSelect&&m.focusOnSelect(T)}}))),U=te+O,U<_&&(v=q),j=L(y(y({},m),{},{index:U})),H.push(o.default.cloneElement(v,{key:"postcloned"+D(v,U),"data-index":U,tabIndex:"-1",className:(0,e.default)(j,ce),"aria-hidden":!j["slick-active"],style:y(y({},v.props.style||{}),B),onClick:function(oe){v.props&&v.props.onClick&&v.props.onClick(oe),m.focusOnSelect&&m.focusOnSelect(T)}}))}}),m.rtl?F.concat($,H).reverse():F.concat($,H)};return Fs.Track=function(w){g(U,w);var m=S(U);function U(){var $;c(this,U);for(var F=arguments.length,H=new Array(F),te=0;te<F;te++)H[te]=arguments[te];return $=m.call.apply(m,[this].concat(H)),Y(b($),"node",null),Y(b($),"handleRef",function(Z){$.node=Z}),$}return p(U,[{key:"render",value:function(){var F=V(this.props),H=this.props,te=H.onMouseEnter,Z=H.onMouseOver,_=H.onMouseLeave,q={onMouseEnter:te,onMouseOver:Z,onMouseLeave:_};return o.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},q),F)}}]),U}(o.default.PureComponent),Fs}var ks={},Zm;function h1(){if(Zm)return ks;Zm=1;function o(L){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},o(L)}Object.defineProperty(ks,"__esModule",{value:!0}),ks.Dots=void 0;var e=a(gi()),n=a(Wl()),r=Ys();function a(L){return L&&L.__esModule?L:{default:L}}function l(L,P){var D=Object.keys(L);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(L);P&&(V=V.filter(function(w){return Object.getOwnPropertyDescriptor(L,w).enumerable})),D.push.apply(D,V)}return D}function c(L){for(var P=1;P<arguments.length;P++){var D=arguments[P]!=null?arguments[P]:{};P%2?l(Object(D),!0).forEach(function(V){f(L,V,D[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(D)):l(Object(D)).forEach(function(V){Object.defineProperty(L,V,Object.getOwnPropertyDescriptor(D,V))})}return L}function f(L,P,D){return P=S(P),P in L?Object.defineProperty(L,P,{value:D,enumerable:!0,configurable:!0,writable:!0}):L[P]=D,L}function p(L,P){if(!(L instanceof P))throw new TypeError("Cannot call a class as a function")}function g(L,P){for(var D=0;D<P.length;D++){var V=P[D];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(L,S(V.key),V)}}function x(L,P,D){return P&&g(L.prototype,P),Object.defineProperty(L,"prototype",{writable:!1}),L}function S(L){var P=M(L,"string");return o(P)=="symbol"?P:String(P)}function M(L,P){if(o(L)!="object"||!L)return L;var D=L[Symbol.toPrimitive];if(D!==void 0){var V=D.call(L,P||"default");if(o(V)!="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(L)}function b(L,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(P&&P.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),Object.defineProperty(L,"prototype",{writable:!1}),P&&N(L,P)}function N(L,P){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(V,w){return V.__proto__=w,V},N(L,P)}function C(L){var P=Y();return function(){var V=G(L),w;if(P){var m=G(this).constructor;w=Reflect.construct(V,arguments,m)}else w=V.apply(this,arguments);return E(this,w)}}function E(L,P){if(P&&(o(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(L)}function y(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function Y(){try{var L=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Y=function(){return!!L})()}function G(L){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(D){return D.__proto__||Object.getPrototypeOf(D)},G(L)}var k=function(P){var D;return P.infinite?D=Math.ceil(P.slideCount/P.slidesToScroll):D=Math.ceil((P.slideCount-P.slidesToShow)/P.slidesToScroll)+1,D};return ks.Dots=function(L){b(D,L);var P=C(D);function D(){return p(this,D),P.apply(this,arguments)}return x(D,[{key:"clickHandler",value:function(w,m){m.preventDefault(),this.props.clickHandler(w)}},{key:"render",value:function(){for(var w=this.props,m=w.onMouseEnter,U=w.onMouseOver,$=w.onMouseLeave,F=w.infinite,H=w.slidesToScroll,te=w.slidesToShow,Z=w.slideCount,_=w.currentSlide,q=k({slideCount:Z,slidesToScroll:H,slidesToShow:te,infinite:F}),O={onMouseEnter:m,onMouseOver:U,onMouseLeave:$},v=[],T=0;T<q;T++){var B=(T+1)*H-1,ce=F?B:(0,r.clamp)(B,0,Z-1),j=ce-(H-1),Q=F?j:(0,r.clamp)(j,0,Z-1),re=(0,n.default)({"slick-active":F?_>=Q&&_<=ce:_===Q}),oe={message:"dots",index:T,slidesToScroll:H,currentSlide:_},ve=this.clickHandler.bind(this,oe);v=v.concat(e.default.createElement("li",{key:T,className:re},e.default.cloneElement(this.props.customPaging(T),{onClick:ve})))}return e.default.cloneElement(this.props.appendDots(v),c({className:this.props.dotsClass},O))}}]),D}(e.default.PureComponent),ks}var Hr={},Qm;function p1(){if(Qm)return Hr;Qm=1;function o(L){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},o(L)}Object.defineProperty(Hr,"__esModule",{value:!0}),Hr.PrevArrow=Hr.NextArrow=void 0;var e=a(gi()),n=a(Wl()),r=Ys();function a(L){return L&&L.__esModule?L:{default:L}}function l(){return l=Object.assign?Object.assign.bind():function(L){for(var P=1;P<arguments.length;P++){var D=arguments[P];for(var V in D)Object.prototype.hasOwnProperty.call(D,V)&&(L[V]=D[V])}return L},l.apply(this,arguments)}function c(L,P){var D=Object.keys(L);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(L);P&&(V=V.filter(function(w){return Object.getOwnPropertyDescriptor(L,w).enumerable})),D.push.apply(D,V)}return D}function f(L){for(var P=1;P<arguments.length;P++){var D=arguments[P]!=null?arguments[P]:{};P%2?c(Object(D),!0).forEach(function(V){p(L,V,D[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(D)):c(Object(D)).forEach(function(V){Object.defineProperty(L,V,Object.getOwnPropertyDescriptor(D,V))})}return L}function p(L,P,D){return P=M(P),P in L?Object.defineProperty(L,P,{value:D,enumerable:!0,configurable:!0,writable:!0}):L[P]=D,L}function g(L,P){if(!(L instanceof P))throw new TypeError("Cannot call a class as a function")}function x(L,P){for(var D=0;D<P.length;D++){var V=P[D];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(L,M(V.key),V)}}function S(L,P,D){return P&&x(L.prototype,P),Object.defineProperty(L,"prototype",{writable:!1}),L}function M(L){var P=b(L,"string");return o(P)=="symbol"?P:String(P)}function b(L,P){if(o(L)!="object"||!L)return L;var D=L[Symbol.toPrimitive];if(D!==void 0){var V=D.call(L,P||"default");if(o(V)!="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(L)}function N(L,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(P&&P.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),Object.defineProperty(L,"prototype",{writable:!1}),P&&C(L,P)}function C(L,P){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(V,w){return V.__proto__=w,V},C(L,P)}function E(L){var P=G();return function(){var V=k(L),w;if(P){var m=k(this).constructor;w=Reflect.construct(V,arguments,m)}else w=V.apply(this,arguments);return y(this,w)}}function y(L,P){if(P&&(o(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(L)}function Y(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function G(){try{var L=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G=function(){return!!L})()}function k(L){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(D){return D.__proto__||Object.getPrototypeOf(D)},k(L)}return Hr.PrevArrow=function(L){N(D,L);var P=E(D);function D(){return g(this,D),P.apply(this,arguments)}return S(D,[{key:"clickHandler",value:function(w,m){m&&m.preventDefault(),this.props.clickHandler(w,m)}},{key:"render",value:function(){var w={"slick-arrow":!0,"slick-prev":!0},m=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(w["slick-disabled"]=!0,m=null);var U={key:"0","data-role":"none",className:(0,n.default)(w),style:{display:"block"},onClick:m},$={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},F;return this.props.prevArrow?F=e.default.cloneElement(this.props.prevArrow,f(f({},U),$)):F=e.default.createElement("button",l({key:"0",type:"button"},U)," ","Previous"),F}}]),D}(e.default.PureComponent),Hr.NextArrow=function(L){N(D,L);var P=E(D);function D(){return g(this,D),P.apply(this,arguments)}return S(D,[{key:"clickHandler",value:function(w,m){m&&m.preventDefault(),this.props.clickHandler(w,m)}},{key:"render",value:function(){var w={"slick-arrow":!0,"slick-next":!0},m=this.clickHandler.bind(this,{message:"next"});(0,r.canGoNext)(this.props)||(w["slick-disabled"]=!0,m=null);var U={key:"1","data-role":"none",className:(0,n.default)(w),style:{display:"block"},onClick:m},$={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},F;return this.props.nextArrow?F=e.default.cloneElement(this.props.nextArrow,f(f({},U),$)):F=e.default.createElement("button",l({key:"1",type:"button"},U)," ","Next"),F}}]),D}(e.default.PureComponent),Hr}var Qg=function(){if(typeof Map<"u")return Map;function o(e,n){var r=-1;return e.some(function(a,l){return a[0]===n?(r=l,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=o(this.__entries__,n),a=this.__entries__[r];return a&&a[1]},e.prototype.set=function(n,r){var a=o(this.__entries__,n);~a?this.__entries__[a][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,a=o(r,n);~a&&r.splice(a,1)},e.prototype.has=function(n){return!!~o(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var a=0,l=this.__entries__;a<l.length;a++){var c=l[a];n.call(r,c[1],c[0])}},e}()}(),sd=typeof window<"u"&&typeof document<"u"&&window.document===document,kl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),m1=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(kl):function(o){return setTimeout(function(){return o(Date.now())},1e3/60)}}(),g1=2;function v1(o,e){var n=!1,r=!1,a=0;function l(){n&&(n=!1,o()),r&&f()}function c(){m1(l)}function f(){var p=Date.now();if(n){if(p-a<g1)return;r=!0}else n=!0,r=!1,setTimeout(c,e);a=p}return f}var _1=20,y1=["top","right","bottom","left","width","height","size","weight"],x1=typeof MutationObserver<"u",S1=function(){function o(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=v1(this.refresh.bind(this),_1)}return o.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},o.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},o.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},o.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},o.prototype.connect_=function(){!sd||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),x1?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},o.prototype.disconnect_=function(){!sd||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},o.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,a=y1.some(function(l){return!!~r.indexOf(l)});a&&this.refresh()},o.getInstance=function(){return this.instance_||(this.instance_=new o),this.instance_},o.instance_=null,o}(),Jg=function(o,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var a=r[n];Object.defineProperty(o,a,{value:e[a],enumerable:!1,writable:!1,configurable:!0})}return o},Ko=function(o){var e=o&&o.ownerDocument&&o.ownerDocument.defaultView;return e||kl},ev=jl(0,0,0,0);function zl(o){return parseFloat(o)||0}function Jm(o){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,a){var l=o["border-"+a+"-width"];return r+zl(l)},0)}function M1(o){for(var e=["top","right","bottom","left"],n={},r=0,a=e;r<a.length;r++){var l=a[r],c=o["padding-"+l];n[l]=zl(c)}return n}function E1(o){var e=o.getBBox();return jl(0,0,e.width,e.height)}function w1(o){var e=o.clientWidth,n=o.clientHeight;if(!e&&!n)return ev;var r=Ko(o).getComputedStyle(o),a=M1(r),l=a.left+a.right,c=a.top+a.bottom,f=zl(r.width),p=zl(r.height);if(r.boxSizing==="border-box"&&(Math.round(f+l)!==e&&(f-=Jm(r,"left","right")+l),Math.round(p+c)!==n&&(p-=Jm(r,"top","bottom")+c)),!b1(o)){var g=Math.round(f+l)-e,x=Math.round(p+c)-n;Math.abs(g)!==1&&(f-=g),Math.abs(x)!==1&&(p-=x)}return jl(a.left,a.top,f,p)}var T1=function(){return typeof SVGGraphicsElement<"u"?function(o){return o instanceof Ko(o).SVGGraphicsElement}:function(o){return o instanceof Ko(o).SVGElement&&typeof o.getBBox=="function"}}();function b1(o){return o===Ko(o).document.documentElement}function A1(o){return sd?T1(o)?E1(o):w1(o):ev}function C1(o){var e=o.x,n=o.y,r=o.width,a=o.height,l=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,c=Object.create(l.prototype);return Jg(c,{x:e,y:n,width:r,height:a,top:n,right:e+r,bottom:a+n,left:e}),c}function jl(o,e,n,r){return{x:o,y:e,width:n,height:r}}var R1=function(){function o(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=jl(0,0,0,0),this.target=e}return o.prototype.isActive=function(){var e=A1(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},o.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},o}(),P1=function(){function o(e,n){var r=C1(n);Jg(this,{target:e,contentRect:r})}return o}(),L1=function(){function o(e,n,r){if(this.activeObservations_=[],this.observations_=new Qg,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return o.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Ko(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new R1(e)),this.controller_.addObserver(this),this.controller_.refresh())}},o.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Ko(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},o.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},o.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},o.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new P1(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},o.prototype.clearActive=function(){this.activeObservations_.splice(0)},o.prototype.hasActive=function(){return this.activeObservations_.length>0},o}(),tv=typeof WeakMap<"u"?new WeakMap:new Qg,nv=function(){function o(e){if(!(this instanceof o))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=S1.getInstance(),r=new L1(e,n,this);tv.set(this,r)}return o}();["observe","unobserve","disconnect"].forEach(function(o){nv.prototype[o]=function(){var e;return(e=tv.get(this))[o].apply(e,arguments)}});var D1=function(){return typeof kl.ResizeObserver<"u"?kl.ResizeObserver:nv}();const N1=Object.freeze(Object.defineProperty({__proto__:null,default:D1},Symbol.toStringTag,{value:"Module"})),I1=O_(N1);var eg;function U1(){if(eg)return Os;eg=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.InnerSlider=void 0;var o=g(gi()),e=g(c1()),n=g(f1()),r=g(Wl()),a=Ys(),l=d1(),c=h1(),f=p1(),p=g(I1);function g(F){return F&&F.__esModule?F:{default:F}}function x(F){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},x(F)}function S(){return S=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var te=arguments[H];for(var Z in te)Object.prototype.hasOwnProperty.call(te,Z)&&(F[Z]=te[Z])}return F},S.apply(this,arguments)}function M(F,H){if(F==null)return{};var te=b(F,H),Z,_;if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(F);for(_=0;_<q.length;_++)Z=q[_],!(H.indexOf(Z)>=0)&&Object.prototype.propertyIsEnumerable.call(F,Z)&&(te[Z]=F[Z])}return te}function b(F,H){if(F==null)return{};var te={},Z=Object.keys(F),_,q;for(q=0;q<Z.length;q++)_=Z[q],!(H.indexOf(_)>=0)&&(te[_]=F[_]);return te}function N(F,H){var te=Object.keys(F);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(F);H&&(Z=Z.filter(function(_){return Object.getOwnPropertyDescriptor(F,_).enumerable})),te.push.apply(te,Z)}return te}function C(F){for(var H=1;H<arguments.length;H++){var te=arguments[H]!=null?arguments[H]:{};H%2?N(Object(te),!0).forEach(function(Z){m(F,Z,te[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(te)):N(Object(te)).forEach(function(Z){Object.defineProperty(F,Z,Object.getOwnPropertyDescriptor(te,Z))})}return F}function E(F,H){if(!(F instanceof H))throw new TypeError("Cannot call a class as a function")}function y(F,H){for(var te=0;te<H.length;te++){var Z=H[te];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(F,U(Z.key),Z)}}function Y(F,H,te){return H&&y(F.prototype,H),Object.defineProperty(F,"prototype",{writable:!1}),F}function G(F,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(H&&H.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),H&&k(F,H)}function k(F,H){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(Z,_){return Z.__proto__=_,Z},k(F,H)}function L(F){var H=V();return function(){var Z=w(F),_;if(H){var q=w(this).constructor;_=Reflect.construct(Z,arguments,q)}else _=Z.apply(this,arguments);return P(this,_)}}function P(F,H){if(H&&(x(H)==="object"||typeof H=="function"))return H;if(H!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return D(F)}function D(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function V(){try{var F=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(V=function(){return!!F})()}function w(F){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(te){return te.__proto__||Object.getPrototypeOf(te)},w(F)}function m(F,H,te){return H=U(H),H in F?Object.defineProperty(F,H,{value:te,enumerable:!0,configurable:!0,writable:!0}):F[H]=te,F}function U(F){var H=$(F,"string");return x(H)=="symbol"?H:String(H)}function $(F,H){if(x(F)!="object"||!F)return F;var te=F[Symbol.toPrimitive];if(te!==void 0){var Z=te.call(F,H||"default");if(x(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(H==="string"?String:Number)(F)}return Os.InnerSlider=function(F){G(te,F);var H=L(te);function te(Z){var _;E(this,te),_=H.call(this,Z),m(D(_),"listRefHandler",function(O){return _.list=O}),m(D(_),"trackRefHandler",function(O){return _.track=O}),m(D(_),"adaptHeight",function(){if(_.props.adaptiveHeight&&_.list){var O=_.list.querySelector('[data-index="'.concat(_.state.currentSlide,'"]'));_.list.style.height=(0,a.getHeight)(O)+"px"}}),m(D(_),"componentDidMount",function(){if(_.props.onInit&&_.props.onInit(),_.props.lazyLoad){var O=(0,a.getOnDemandLazySlides)(C(C({},_.props),_.state));O.length>0&&(_.setState(function(T){return{lazyLoadedList:T.lazyLoadedList.concat(O)}}),_.props.onLazyLoad&&_.props.onLazyLoad(O))}var v=C({listRef:_.list,trackRef:_.track},_.props);_.updateState(v,!0,function(){_.adaptHeight(),_.props.autoplay&&_.autoPlay("update")}),_.props.lazyLoad==="progressive"&&(_.lazyLoadTimer=setInterval(_.progressiveLazyLoad,1e3)),_.ro=new p.default(function(){_.state.animating?(_.onWindowResized(!1),_.callbackTimers.push(setTimeout(function(){return _.onWindowResized()},_.props.speed))):_.onWindowResized()}),_.ro.observe(_.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(T){T.onfocus=_.props.pauseOnFocus?_.onSlideFocus:null,T.onblur=_.props.pauseOnFocus?_.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",_.onWindowResized):window.attachEvent("onresize",_.onWindowResized)}),m(D(_),"componentWillUnmount",function(){_.animationEndCallback&&clearTimeout(_.animationEndCallback),_.lazyLoadTimer&&clearInterval(_.lazyLoadTimer),_.callbackTimers.length&&(_.callbackTimers.forEach(function(O){return clearTimeout(O)}),_.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",_.onWindowResized):window.detachEvent("onresize",_.onWindowResized),_.autoplayTimer&&clearInterval(_.autoplayTimer),_.ro.disconnect()}),m(D(_),"componentDidUpdate",function(O){if(_.checkImagesLoad(),_.props.onReInit&&_.props.onReInit(),_.props.lazyLoad){var v=(0,a.getOnDemandLazySlides)(C(C({},_.props),_.state));v.length>0&&(_.setState(function(ce){return{lazyLoadedList:ce.lazyLoadedList.concat(v)}}),_.props.onLazyLoad&&_.props.onLazyLoad(v))}_.adaptHeight();var T=C(C({listRef:_.list,trackRef:_.track},_.props),_.state),B=_.didPropsChange(O);B&&_.updateState(T,B,function(){_.state.currentSlide>=o.default.Children.count(_.props.children)&&_.changeSlide({message:"index",index:o.default.Children.count(_.props.children)-_.props.slidesToShow,currentSlide:_.state.currentSlide}),_.props.autoplay?_.autoPlay("update"):_.pause("paused")})}),m(D(_),"onWindowResized",function(O){_.debouncedResize&&_.debouncedResize.cancel(),_.debouncedResize=(0,n.default)(function(){return _.resizeWindow(O)},50),_.debouncedResize()}),m(D(_),"resizeWindow",function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,v=!!(_.track&&_.track.node);if(v){var T=C(C({listRef:_.list,trackRef:_.track},_.props),_.state);_.updateState(T,O,function(){_.props.autoplay?_.autoPlay("update"):_.pause("paused")}),_.setState({animating:!1}),clearTimeout(_.animationEndCallback),delete _.animationEndCallback}}),m(D(_),"updateState",function(O,v,T){var B=(0,a.initializedState)(O);O=C(C(C({},O),B),{},{slideIndex:B.currentSlide});var ce=(0,a.getTrackLeft)(O);O=C(C({},O),{},{left:ce});var j=(0,a.getTrackCSS)(O);(v||o.default.Children.count(_.props.children)!==o.default.Children.count(O.children))&&(B.trackStyle=j),_.setState(B,T)}),m(D(_),"ssrInit",function(){if(_.props.variableWidth){var O=0,v=0,T=[],B=(0,a.getPreClones)(C(C(C({},_.props),_.state),{},{slideCount:_.props.children.length})),ce=(0,a.getPostClones)(C(C(C({},_.props),_.state),{},{slideCount:_.props.children.length}));_.props.children.forEach(function(Je){T.push(Je.props.style.width),O+=Je.props.style.width});for(var j=0;j<B;j++)v+=T[T.length-1-j],O+=T[T.length-1-j];for(var Q=0;Q<ce;Q++)O+=T[Q];for(var re=0;re<_.state.currentSlide;re++)v+=T[re];var oe={width:O+"px",left:-v+"px"};if(_.props.centerMode){var ve="".concat(T[_.state.currentSlide],"px");oe.left="calc(".concat(oe.left," + (100% - ").concat(ve,") / 2 ) ")}return{trackStyle:oe}}var Se=o.default.Children.count(_.props.children),Ce=C(C(C({},_.props),_.state),{},{slideCount:Se}),Qe=(0,a.getPreClones)(Ce)+(0,a.getPostClones)(Ce)+Se,Ge=100/_.props.slidesToShow*Qe,Ze=100/Qe,X=-Ze*((0,a.getPreClones)(Ce)+_.state.currentSlide)*Ge/100;_.props.centerMode&&(X+=(100-Ze*Ge/100)/2);var ct={width:Ge+"%",left:X+"%"};return{slideWidth:Ze+"%",trackStyle:ct}}),m(D(_),"checkImagesLoad",function(){var O=_.list&&_.list.querySelectorAll&&_.list.querySelectorAll(".slick-slide img")||[],v=O.length,T=0;Array.prototype.forEach.call(O,function(B){var ce=function(){return++T&&T>=v&&_.onWindowResized()};if(!B.onclick)B.onclick=function(){return B.parentNode.focus()};else{var j=B.onclick;B.onclick=function(Q){j(Q),B.parentNode.focus()}}B.onload||(_.props.lazyLoad?B.onload=function(){_.adaptHeight(),_.callbackTimers.push(setTimeout(_.onWindowResized,_.props.speed))}:(B.onload=ce,B.onerror=function(){ce(),_.props.onLazyLoadError&&_.props.onLazyLoadError()}))})}),m(D(_),"progressiveLazyLoad",function(){for(var O=[],v=C(C({},_.props),_.state),T=_.state.currentSlide;T<_.state.slideCount+(0,a.getPostClones)(v);T++)if(_.state.lazyLoadedList.indexOf(T)<0){O.push(T);break}for(var B=_.state.currentSlide-1;B>=-(0,a.getPreClones)(v);B--)if(_.state.lazyLoadedList.indexOf(B)<0){O.push(B);break}O.length>0?(_.setState(function(ce){return{lazyLoadedList:ce.lazyLoadedList.concat(O)}}),_.props.onLazyLoad&&_.props.onLazyLoad(O)):_.lazyLoadTimer&&(clearInterval(_.lazyLoadTimer),delete _.lazyLoadTimer)}),m(D(_),"slideHandler",function(O){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,T=_.props,B=T.asNavFor,ce=T.beforeChange,j=T.onLazyLoad,Q=T.speed,re=T.afterChange,oe=_.state.currentSlide,ve=(0,a.slideHandler)(C(C(C({index:O},_.props),_.state),{},{trackRef:_.track,useCSS:_.props.useCSS&&!v})),Se=ve.state,Ce=ve.nextState;if(Se){ce&&ce(oe,Se.currentSlide);var Qe=Se.lazyLoadedList.filter(function(Ge){return _.state.lazyLoadedList.indexOf(Ge)<0});j&&Qe.length>0&&j(Qe),!_.props.waitForAnimate&&_.animationEndCallback&&(clearTimeout(_.animationEndCallback),re&&re(oe),delete _.animationEndCallback),_.setState(Se,function(){B&&_.asNavForIndex!==O&&(_.asNavForIndex=O,B.innerSlider.slideHandler(O)),Ce&&(_.animationEndCallback=setTimeout(function(){var Ge=Ce.animating,Ze=M(Ce,["animating"]);_.setState(Ze,function(){_.callbackTimers.push(setTimeout(function(){return _.setState({animating:Ge})},10)),re&&re(Se.currentSlide),delete _.animationEndCallback})},Q))})}}),m(D(_),"changeSlide",function(O){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,T=C(C({},_.props),_.state),B=(0,a.changeSlide)(T,O);if(!(B!==0&&!B)&&(v===!0?_.slideHandler(B,v):_.slideHandler(B),_.props.autoplay&&_.autoPlay("update"),_.props.focusOnSelect)){var ce=_.list.querySelectorAll(".slick-current");ce[0]&&ce[0].focus()}}),m(D(_),"clickHandler",function(O){_.clickable===!1&&(O.stopPropagation(),O.preventDefault()),_.clickable=!0}),m(D(_),"keyHandler",function(O){var v=(0,a.keyHandler)(O,_.props.accessibility,_.props.rtl);v!==""&&_.changeSlide({message:v})}),m(D(_),"selectHandler",function(O){_.changeSlide(O)}),m(D(_),"disableBodyScroll",function(){var O=function(T){T=T||window.event,T.preventDefault&&T.preventDefault(),T.returnValue=!1};window.ontouchmove=O}),m(D(_),"enableBodyScroll",function(){window.ontouchmove=null}),m(D(_),"swipeStart",function(O){_.props.verticalSwiping&&_.disableBodyScroll();var v=(0,a.swipeStart)(O,_.props.swipe,_.props.draggable);v!==""&&_.setState(v)}),m(D(_),"swipeMove",function(O){var v=(0,a.swipeMove)(O,C(C(C({},_.props),_.state),{},{trackRef:_.track,listRef:_.list,slideIndex:_.state.currentSlide}));v&&(v.swiping&&(_.clickable=!1),_.setState(v))}),m(D(_),"swipeEnd",function(O){var v=(0,a.swipeEnd)(O,C(C(C({},_.props),_.state),{},{trackRef:_.track,listRef:_.list,slideIndex:_.state.currentSlide}));if(v){var T=v.triggerSlideHandler;delete v.triggerSlideHandler,_.setState(v),T!==void 0&&(_.slideHandler(T),_.props.verticalSwiping&&_.enableBodyScroll())}}),m(D(_),"touchEnd",function(O){_.swipeEnd(O),_.clickable=!0}),m(D(_),"slickPrev",function(){_.callbackTimers.push(setTimeout(function(){return _.changeSlide({message:"previous"})},0))}),m(D(_),"slickNext",function(){_.callbackTimers.push(setTimeout(function(){return _.changeSlide({message:"next"})},0))}),m(D(_),"slickGoTo",function(O){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(O=Number(O),isNaN(O))return"";_.callbackTimers.push(setTimeout(function(){return _.changeSlide({message:"index",index:O,currentSlide:_.state.currentSlide},v)},0))}),m(D(_),"play",function(){var O;if(_.props.rtl)O=_.state.currentSlide-_.props.slidesToScroll;else if((0,a.canGoNext)(C(C({},_.props),_.state)))O=_.state.currentSlide+_.props.slidesToScroll;else return!1;_.slideHandler(O)}),m(D(_),"autoPlay",function(O){_.autoplayTimer&&clearInterval(_.autoplayTimer);var v=_.state.autoplaying;if(O==="update"){if(v==="hovered"||v==="focused"||v==="paused")return}else if(O==="leave"){if(v==="paused"||v==="focused")return}else if(O==="blur"&&(v==="paused"||v==="hovered"))return;_.autoplayTimer=setInterval(_.play,_.props.autoplaySpeed+50),_.setState({autoplaying:"playing"})}),m(D(_),"pause",function(O){_.autoplayTimer&&(clearInterval(_.autoplayTimer),_.autoplayTimer=null);var v=_.state.autoplaying;O==="paused"?_.setState({autoplaying:"paused"}):O==="focused"?(v==="hovered"||v==="playing")&&_.setState({autoplaying:"focused"}):v==="playing"&&_.setState({autoplaying:"hovered"})}),m(D(_),"onDotsOver",function(){return _.props.autoplay&&_.pause("hovered")}),m(D(_),"onDotsLeave",function(){return _.props.autoplay&&_.state.autoplaying==="hovered"&&_.autoPlay("leave")}),m(D(_),"onTrackOver",function(){return _.props.autoplay&&_.pause("hovered")}),m(D(_),"onTrackLeave",function(){return _.props.autoplay&&_.state.autoplaying==="hovered"&&_.autoPlay("leave")}),m(D(_),"onSlideFocus",function(){return _.props.autoplay&&_.pause("focused")}),m(D(_),"onSlideBlur",function(){return _.props.autoplay&&_.state.autoplaying==="focused"&&_.autoPlay("blur")}),m(D(_),"render",function(){var O=(0,r.default)("slick-slider",_.props.className,{"slick-vertical":_.props.vertical,"slick-initialized":!0}),v=C(C({},_.props),_.state),T=(0,a.extractObject)(v,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),B=_.props.pauseOnHover;T=C(C({},T),{},{onMouseEnter:B?_.onTrackOver:null,onMouseLeave:B?_.onTrackLeave:null,onMouseOver:B?_.onTrackOver:null,focusOnSelect:_.props.focusOnSelect&&_.clickable?_.selectHandler:null});var ce;if(_.props.dots===!0&&_.state.slideCount>=_.props.slidesToShow){var j=(0,a.extractObject)(v,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),Q=_.props.pauseOnDotsHover;j=C(C({},j),{},{clickHandler:_.changeSlide,onMouseEnter:Q?_.onDotsLeave:null,onMouseOver:Q?_.onDotsOver:null,onMouseLeave:Q?_.onDotsLeave:null}),ce=o.default.createElement(c.Dots,j)}var re,oe,ve=(0,a.extractObject)(v,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);ve.clickHandler=_.changeSlide,_.props.arrows&&(re=o.default.createElement(f.PrevArrow,ve),oe=o.default.createElement(f.NextArrow,ve));var Se=null;_.props.vertical&&(Se={height:_.state.listHeight});var Ce=null;_.props.vertical===!1?_.props.centerMode===!0&&(Ce={padding:"0px "+_.props.centerPadding}):_.props.centerMode===!0&&(Ce={padding:_.props.centerPadding+" 0px"});var Qe=C(C({},Se),Ce),Ge=_.props.touchMove,Ze={className:"slick-list",style:Qe,onClick:_.clickHandler,onMouseDown:Ge?_.swipeStart:null,onMouseMove:_.state.dragging&&Ge?_.swipeMove:null,onMouseUp:Ge?_.swipeEnd:null,onMouseLeave:_.state.dragging&&Ge?_.swipeEnd:null,onTouchStart:Ge?_.swipeStart:null,onTouchMove:_.state.dragging&&Ge?_.swipeMove:null,onTouchEnd:Ge?_.touchEnd:null,onTouchCancel:_.state.dragging&&Ge?_.swipeEnd:null,onKeyDown:_.props.accessibility?_.keyHandler:null},X={className:O,dir:"ltr",style:_.props.style};return _.props.unslick&&(Ze={className:"slick-list"},X={className:O}),o.default.createElement("div",X,_.props.unslick?"":re,o.default.createElement("div",S({ref:_.listRefHandler},Ze),o.default.createElement(l.Track,S({ref:_.trackRefHandler},T),_.props.children)),_.props.unslick?"":oe,_.props.unslick?"":ce)}),_.list=null,_.track=null,_.state=C(C({},e.default),{},{currentSlide:_.props.initialSlide,targetSlide:_.props.initialSlide?_.props.initialSlide:0,slideCount:o.default.Children.count(_.props.children)}),_.callbackTimers=[],_.clickable=!0,_.debouncedResize=null;var q=_.ssrInit();return _.state=C(C({},_.state),q),_}return Y(te,[{key:"didPropsChange",value:function(_){for(var q=!1,O=0,v=Object.keys(this.props);O<v.length;O++){var T=v[O];if(!_.hasOwnProperty(T)){q=!0;break}if(!(x(_[T])==="object"||typeof _[T]=="function"||isNaN(_[T]))&&_[T]!==this.props[T]){q=!0;break}}return q||o.default.Children.count(this.props.children)!==o.default.Children.count(_.children)}}]),te}(o.default.Component),Os}var ff,tg;function O1(){if(tg)return ff;tg=1;var o=function(e){return e.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()}).toLowerCase()};return ff=o,ff}var df,ng;function F1(){if(ng)return df;ng=1;var o=O1(),e=function(a){var l=/[height|width]$/;return l.test(a)},n=function(a){var l="",c=Object.keys(a);return c.forEach(function(f,p){var g=a[f];f=o(f),e(f)&&typeof g=="number"&&(g=g+"px"),g===!0?l+=f:g===!1?l+="not "+f:l+="("+f+": "+g+")",p<c.length-1&&(l+=" and ")}),l},r=function(a){var l="";return typeof a=="string"?a:a instanceof Array?(a.forEach(function(c,f){l+=n(c),f<a.length-1&&(l+=", ")}),l):n(a)};return df=r,df}var hf,ig;function k1(){if(ig)return hf;ig=1;function o(e){this.options=e,!e.deferSetup&&this.setup()}return o.prototype={constructor:o,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},hf=o,hf}var pf,rg;function iv(){if(rg)return pf;rg=1;function o(r,a){var l=0,c=r.length,f;for(l;l<c&&(f=a(r[l],l),f!==!1);l++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return pf={isFunction:n,isArray:e,each:o},pf}var mf,og;function z1(){if(og)return mf;og=1;var o=k1(),e=iv().each;function n(r,a){this.query=r,this.isUnconditional=a,this.handlers=[],this.mql=window.matchMedia(r);var l=this;this.listener=function(c){l.mql=c.currentTarget||c,l.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var a=new o(r);this.handlers.push(a),this.matches()&&a.on()},removeHandler:function(r){var a=this.handlers;e(a,function(l,c){if(l.equals(r))return l.destroy(),!a.splice(c,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(a){a[r]()})}},mf=n,mf}var gf,sg;function B1(){if(sg)return gf;sg=1;var o=z1(),e=iv(),n=e.each,r=e.isFunction,a=e.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return l.prototype={constructor:l,register:function(c,f,p){var g=this.queries,x=p&&this.browserIsIncapable;return g[c]||(g[c]=new o(c,x)),r(f)&&(f={match:f}),a(f)||(f=[f]),n(f,function(S){r(S)&&(S={match:S}),g[c].addHandler(S)}),this},unregister:function(c,f){var p=this.queries[c];return p&&(f?p.removeHandler(f):(p.clear(),delete this.queries[c])),this}},gf=l,gf}var vf,ag;function H1(){if(ag)return vf;ag=1;var o=B1();return vf=new o,vf}var lg;function V1(){return lg||(lg=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=c(gi()),n=U1(),r=c(F1()),a=c(Zg()),l=Ys();function c(w){return w&&w.__esModule?w:{default:w}}function f(w){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},f(w)}function p(){return p=Object.assign?Object.assign.bind():function(w){for(var m=1;m<arguments.length;m++){var U=arguments[m];for(var $ in U)Object.prototype.hasOwnProperty.call(U,$)&&(w[$]=U[$])}return w},p.apply(this,arguments)}function g(w,m){var U=Object.keys(w);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(w);m&&($=$.filter(function(F){return Object.getOwnPropertyDescriptor(w,F).enumerable})),U.push.apply(U,$)}return U}function x(w){for(var m=1;m<arguments.length;m++){var U=arguments[m]!=null?arguments[m]:{};m%2?g(Object(U),!0).forEach(function($){L(w,$,U[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(U)):g(Object(U)).forEach(function($){Object.defineProperty(w,$,Object.getOwnPropertyDescriptor(U,$))})}return w}function S(w,m){if(!(w instanceof m))throw new TypeError("Cannot call a class as a function")}function M(w,m){for(var U=0;U<m.length;U++){var $=m[U];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(w,P($.key),$)}}function b(w,m,U){return m&&M(w.prototype,m),Object.defineProperty(w,"prototype",{writable:!1}),w}function N(w,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(m&&m.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),m&&C(w,m)}function C(w,m){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function($,F){return $.__proto__=F,$},C(w,m)}function E(w){var m=G();return function(){var $=k(w),F;if(m){var H=k(this).constructor;F=Reflect.construct($,arguments,H)}else F=$.apply(this,arguments);return y(this,F)}}function y(w,m){if(m&&(f(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(w)}function Y(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function G(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G=function(){return!!w})()}function k(w){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(U){return U.__proto__||Object.getPrototypeOf(U)},k(w)}function L(w,m,U){return m=P(m),m in w?Object.defineProperty(w,m,{value:U,enumerable:!0,configurable:!0,writable:!0}):w[m]=U,w}function P(w){var m=D(w,"string");return f(m)=="symbol"?m:String(m)}function D(w,m){if(f(w)!="object"||!w)return w;var U=w[Symbol.toPrimitive];if(U!==void 0){var $=U.call(w,m||"default");if(f($)!="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(w)}var V=(0,l.canUseDOM)()&&H1();o.default=function(w){N(U,w);var m=E(U);function U($){var F;return S(this,U),F=m.call(this,$),L(Y(F),"innerSliderRefHandler",function(H){return F.innerSlider=H}),L(Y(F),"slickPrev",function(){return F.innerSlider.slickPrev()}),L(Y(F),"slickNext",function(){return F.innerSlider.slickNext()}),L(Y(F),"slickGoTo",function(H){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return F.innerSlider.slickGoTo(H,te)}),L(Y(F),"slickPause",function(){return F.innerSlider.pause("paused")}),L(Y(F),"slickPlay",function(){return F.innerSlider.autoPlay("play")}),F.state={breakpoint:null},F._responsiveMediaHandlers=[],F}return b(U,[{key:"media",value:function(F,H){V.register(F,H),this._responsiveMediaHandlers.push({query:F,handler:H})}},{key:"componentDidMount",value:function(){var F=this;if(this.props.responsive){var H=this.props.responsive.map(function(Z){return Z.breakpoint});H.sort(function(Z,_){return Z-_}),H.forEach(function(Z,_){var q;_===0?q=(0,r.default)({minWidth:0,maxWidth:Z}):q=(0,r.default)({minWidth:H[_-1]+1,maxWidth:Z}),(0,l.canUseDOM)()&&F.media(q,function(){F.setState({breakpoint:Z})})});var te=(0,r.default)({minWidth:H.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(te,function(){F.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(F){V.unregister(F.query,F.handler)})}},{key:"render",value:function(){var F=this,H,te;this.state.breakpoint?(te=this.props.responsive.filter(function(Q){return Q.breakpoint===F.state.breakpoint}),H=te[0].settings==="unslick"?"unslick":x(x(x({},a.default),this.props),te[0].settings)):H=x(x({},a.default),this.props),H.centerMode&&(H.slidesToScroll>1,H.slidesToScroll=1),H.fade&&(H.slidesToShow>1,H.slidesToScroll>1,H.slidesToShow=1,H.slidesToScroll=1);var Z=e.default.Children.toArray(this.props.children);Z=Z.filter(function(Q){return typeof Q=="string"?!!Q.trim():!!Q}),H.variableWidth&&(H.rows>1||H.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),H.variableWidth=!1);for(var _=[],q=null,O=0;O<Z.length;O+=H.rows*H.slidesPerRow){for(var v=[],T=O;T<O+H.rows*H.slidesPerRow;T+=H.slidesPerRow){for(var B=[],ce=T;ce<T+H.slidesPerRow&&(H.variableWidth&&Z[ce].props.style&&(q=Z[ce].props.style.width),!(ce>=Z.length));ce+=1)B.push(e.default.cloneElement(Z[ce],{key:100*O+10*T+ce,tabIndex:-1,style:{width:"".concat(100/H.slidesPerRow,"%"),display:"inline-block"}}));v.push(e.default.createElement("div",{key:10*O+T},B))}H.variableWidth?_.push(e.default.createElement("div",{key:O,style:{width:q}},v)):_.push(e.default.createElement("div",{key:O},v))}if(H==="unslick"){var j="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:j},Z)}else _.length<=H.slidesToShow&&!H.infinite&&(H.unslick=!0);return e.default.createElement(n.InnerSlider,p({style:this.props.style,ref:this.innerSliderRefHandler},(0,l.filterSettings)(H)),_)}}]),U}(e.default.Component)}(sf)),sf}var ug;function G1(){return ug||(ug=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n(V1());function n(r){return r&&r.__esModule?r:{default:r}}o.default=e.default}(of)),of}var W1=G1();const j1=cg(W1),X1=()=>{const o={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,fade:!0,appendDots:e=>se.jsx("div",{style:{position:"absolute",bottom:"4px",width:"100%"},children:se.jsx("ul",{style:{display:"flex",justifyContent:"center",padding:0},children:e})})};return se.jsxs("section",{id:"hero1",className:"relative text-white h-[60vh] flex items-center justify-center",children:[se.jsx("style",{children:`
          /* Default styles for larger screens */
          #hero1 {
            margin-top: 200px;
            margin-bottom: -160px;
          }

          /* Adjust position for mobile screens only */
          @media (max-width: 768px) {
            #hero1 {
              margin-top: 100px; /* Move it up */
              margin-bottom: -50px; /* Adjust bottom margin */
            }
          }

          @media (max-width: 480px) {
            #hero1 {
              margin-top: 80px; /* Further adjustment for very small screens */
              margin-bottom: -120px;
            }
          }

          .slider-container {
            position: relative;
          }

          .slick-dots {
            bottom: 55px !important;
          }

          .slick-dots li {
            width: 15px; /* Increase dot width */
            height: 15px; /* Increase dot height */
            margin: 0 5px; /* Add space between dots */
          }

          .slick-dots li button:before {
            font-size: 0; /* Hide default font size */
            content: ''; /* Remove default content */
            display: block;
            width: 100%; /* Set width of dot */
            height: 100%; /* Set height of dot */
            border-radius: 50%; /* Make dots round */
            background: #ffffff; /* Default inactive dot color */
          }

          .slick-dots li.slick-active button:before {
            background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6); /* Apply gradient for active dot */
          }

          /* Responsive adjustments for mobile view */
          @media (max-width: 768px) {
            .slick-dots li {
              width: 10px; /* Smaller dots for mobile */
              height: 10px; /* Smaller dots for mobile */
            }

            .slick-dots {
              top: 190px !important; /* Adjust top for mobile */
            }
          }

          @media (max-width: 480px) {
            .slick-dots li {
              width: 12px; /* Even smaller dots for small screens */
              height: 12px;
            }

            .slick-dots {
              bottom: 10px !important; /* Adjust bottom even further */
            }
          }
        `}),se.jsxs(j1,{...o,className:"w-full relative",children:[se.jsxs("div",{className:"relative h-[60vh] flex items-center justify-center",children:[se.jsx("div",{className:"absolute w-full h-full bg-black bg-opacity-50 z-10"}),se.jsxs("div",{className:"relative z-20 text-center",children:[se.jsx("span",{className:"block text-xl lg:text-2xl text-pink-300 font-semibold tracking-widest mb-4",children:"Hello!"}),se.jsxs("h1",{className:"text-4xl lg:text-6xl font-bold leading-snug text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text",children:[se.jsx("span",{className:"text-white",children:"I'm "}),se.jsx("span",{className:"decoration-purple-300",children:"Nimeshi Dilshara"})]})]})]}),se.jsxs("div",{className:"relative h-[60vh] flex items-center justify-center",children:[se.jsx("div",{className:"absolute w-full h-full bg-black bg-opacity-50 z-10"}),se.jsxs("div",{className:"relative z-20 text-center",children:[se.jsx("span",{className:"block text-xl lg:text-2xl text-pink-300 font-semibold tracking-widest mb-4",children:"Hello!"}),se.jsxs("h1",{className:"text-4xl lg:text-6xl font-bold leading-snug text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text",children:[se.jsx("span",{className:"text-white",children:"I'm "}),se.jsx("span",{className:"text-white",children:"a "}),se.jsx("span",{className:"bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent",children:"UI/UX Designer"}),se.jsx("br",{}),se.jsx("span",{className:"text-white",children:"and "}),se.jsx("span",{className:"bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent",children:"Web Designer"})]})]})]})]})]})},q1=()=>se.jsxs("div",{id:"service",children:[se.jsx("br",{}),se.jsx("div",{className:"py-8",children:se.jsxs("div",{className:"container mx-auto px-4",children:[se.jsx("h1",{className:"text-4xl font-bold text-center mb-20 text-white p-2",children:"Services"}),se.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-20",children:[se.jsxs("div",{className:"service-card p-10 text-sm font-light rounded-lg",children:[se.jsx("i",{className:"fa-solid fa-crop text-5xl mb-8"}),se.jsx("h2",{className:"text-2xl text-[#fff] font-medium mb-4",children:"UI/UX Design"}),se.jsx("p",{className:"mb-4",children:"I focus on creating user-centered designs that are both functional and visually appealing."})]}),se.jsxs("div",{className:"service-card p-10 text-sm font-light rounded-lg",children:[se.jsx("i",{className:"fa-solid fa-code text-5xl mb-8"}),se.jsx("h2",{className:"text-2xl font-medium mb-4 text-[#fff]",children:"Web Design"}),se.jsx("p",{className:"mb-4 text-[#fff]",children:"Crafting intuitive, modern, and user-friendly web designs with creativity."})]}),se.jsxs("div",{className:"service-card p-10 text-sm font-light rounded-lg",children:[se.jsx("i",{className:"fa-brands fa-app-store text-5xl mb-8"}),se.jsx("h2",{className:"text-2xl text-[#fff] font-medium mb-4",children:"App Design"}),se.jsx("p",{className:"mb-4 text-[#fff]",children:"Designing engaging, functional, and visually appealing mobile app experiences."})]})]})]})})]}),Y1="/nimna-portfolio/assets/java-C75OIrns.png",$1="/nimna-portfolio/assets/nodejs-AVAm2jiS.png",K1="/nimna-portfolio/assets/react-DWiQIKq_.png",Z1="/nimna-portfolio/assets/css-C_mIxnK_.png",Q1="/nimna-portfolio/assets/html-Dzd6W1Yf.png",J1="/nimna-portfolio/assets/js-CQYsVOK8.png",ew="/nimna-portfolio/assets/php-CLta4eW4.png",tw="/nimna-portfolio/assets/mongodb-BdVWGrF4.png",nw="/nimna-portfolio/assets/github-BSDumq2m.png",iw="/nimna-portfolio/assets/ms365-Ci6qpyKF.png",rw="/nimna-portfolio/assets/figma-H2MGUB-Y.png",ow="/nimna-portfolio/assets/photoshop3-C5PrbbKh.png",sw=[{name:"Java",icon:Y1},{name:"JavaScript",icon:J1},{name:"PHP",icon:ew},{name:"HTML",icon:Q1},{name:"CSS",icon:Z1},{name:"React",icon:K1},{name:"Node.js",icon:$1},{name:"MongoDB",icon:tw},{name:"Figma",icon:rw},{name:"Photoshop",icon:ow},{name:"Microsoft 365",icon:iw},{name:"GitHub",icon:nw}];function aw(){const o=n=>{n.currentTarget.classList.add("scale-105","shadow-lg"),n.currentTarget.querySelector("img").classList.add("scale-110")},e=n=>{n.currentTarget.classList.remove("scale-105","shadow-lg"),n.currentTarget.querySelector("img").classList.remove("scale-110")};return se.jsxs("section",{id:"skills",className:"mt-24 p-4 max-w-7xl mx-auto",children:[" ",se.jsx("br",{}),se.jsx("br",{}),"   ",se.jsx("h1",{className:"text-4xl font-bold text-center text-white p-2 mb-10",children:"My Skills"}),se.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center",children:sw.map((n,r)=>se.jsxs("div",{className:"flex flex-col items-center p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:bg-gray-800/30",onMouseEnter:o,onMouseLeave:e,children:[se.jsx("img",{src:n.icon,alt:n.name,className:"skill-image w-16 h-16 object-contain mb-2 transition-transform duration-300 ease-in-out"}),se.jsx("p",{className:"text-white text-sm font-semibold text-center",children:n.name})]},r))})]})}const lw="/nimna-portfolio/assets/flowershop-BCw-GCxU.png",uw="/nimna-portfolio/assets/yogaclass-Icy3p6vN.jpg",cw="/nimna-portfolio/assets/medical-Dhlx6N09.jpg",fw="/nimna-portfolio/assets/lr-DHd87FZp.png",dw="/nimna-portfolio/assets/auction-BMjyi0v4.jpg",hw="/nimna-portfolio/assets/Tution-MkMhjwJY.jpg",pw="/nimna-portfolio/assets/port-7wLwR62-.jpg",mw="/nimna-portfolio/assets/volapp-DoDwUsG7.jpg",gw="/nimna-portfolio/assets/hotel-CiAvUlSe.jpg",vw="/nimna-portfolio/assets/Healix-FjK16kTX.jpg",_w=()=>{const[o,e]=Kr.useState(null),[n,r]=Kr.useState("UI Designs"),a=[{id:8,image:gw,title:"Responsive Hotel Booking Website",pharagraph:"Using React,Tailwind CSS",category:"Web Development",links:[{icon:"fab fa-github",url:"https://github.com/n-nimna/Hotel-Booking-Website"},{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_react-frontend-uiux-activity-7287400290280972288-Al9d?utm_source=share&utm_medium=member_desktop"},{icon:"fas fa-globe",url:"https://n-nimna.github.io/Hotel-Booking-Website/"}]},{id:7,image:pw,title:"Personal Portfolio Website",pharagraph:"Using React,Tailwind CSS",category:"Web Development",links:[{icon:"fab fa-github",url:"https://github.com/n-nimna/nimna-portfolio"},{icon:"fab fa-linkedin",url:"https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/details/projects/"},{icon:"fas fa-globe",url:""}]},{id:6,image:hw,title:"Website Development Tution Class",pharagraph:"Using React JS",category:"Web Development",links:[{icon:"fab fa-github",url:"https://github.com/n-nimna/BrightMind-Website"},{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_react-vite-webdevelopment-activity-7277520260579172352-cEXq?utm_source=share&utm_medium=member_desktop"},{icon:"fas fa-globe",url:"https://n-nimna.github.io/BrightMind-Website/"}]},{id:7,image:vw,title:"Bicycle Branding Website Design",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uiux-webdesign-bicyclebranding-activity-7291925724049879040-ShSk?utm_source=share&utm_medium=member_desktop"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/218323753/Bicycle-Branding-Website"},{icon:"fab fa-dribbble",url:""}]},{id:6,image:mw,title:"Volunteer Social App Design",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uiux-mobileapp-volunteerplatform-activity-7283451119257690113-mZs-?utm_source=share&utm_medium=member_desktop"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/216473633/Volunteer-Focuced-Social-App"},{icon:"fab fa-dribbble",url:""}]},{id:5,image:dw,title:"Website Design Auction",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uiuxdesign-design-auctionwebsite-activity-7275312227665002496-_w46?utm_source=share&utm_medium=member_desktop"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/215059919/Auction-Website-Design"},{icon:"fab fa-dribbble",url:""}]},{id:4,image:fw,title:"Redesign Design Leisure World Website",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/example"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/212455075/LeisureWorld-Redesign-Website"},{icon:"fab fa-dribbble",url:""}]},{id:3,image:cw,title:"Website Design Medical Center",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.behance.net/gallery/208523379/Beauty-Clinic-Website-Design"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/208523379/Beauty-Clinic-Website-Design"},{icon:"fab fa-dribbble",url:""}]},{id:2,image:uw,title:"Website Design Yoga Institute ",subtitle:"",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uxdesign-uidesign-webdesign-activity-7224998346023714816-npQq?utm_source=share&utm_medium=member_desktop"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/208132257/Yoga-Studio-Website-Design"},{icon:"fab fa-dribbble",url:""}]},{id:1,image:lw,title:"Website Design Flower Shop",subtitle:"",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uxdesign-uidesign-webdesign-activity-7221179796414734336-VA59?utm_source=share&utm_medium=member_desktop"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/208526013/Flower-Shop-Website-Design"},{icon:"fab fa-dribbble",url:""}]}];return se.jsxs("section",{id:"project",className:"bg-black p-5 md:p-[20px]",children:[se.jsx("br",{}),se.jsx("br",{}),se.jsx("br",{}),se.jsx("br",{}),se.jsx("br",{}),se.jsxs("div",{className:"text-center mb-5 md:mb-[20px]",children:[se.jsx("h1",{className:"text-4xl font-bold text-center mb-20 text-white p-2",children:"My Projects"}),se.jsx("div",{className:"flex justify-center flex-wrap gap-6 mt-8 text-white",children:["UI Designs","Web Development"].map(l=>se.jsxs("span",{className:`cursor-pointer pb-2 text-base md:text-lg lg:text-xl relative
                ${n===l?"font-bold":""}
                hover:text-white transition-colors duration-300`,onClick:()=>r(l),children:[l,n===l&&se.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-sm"})]},l))})]}),se.jsx("br",{}),se.jsx("div",{className:"mx-auto px-8 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 sm:w-4/4",children:a.filter(l=>l.category===n).map(l=>se.jsxs("div",{className:"relative overflow-hidden cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px]",onClick:()=>e(l.id===o?null:l.id),children:[se.jsx("div",{className:"w-full h-full overflow-hidden rounded-lg",children:se.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-cover"})}),se.jsxs("div",{className:`absolute inset-0 bg-[rgba(50,0,90,0.7)] backdrop-blur-sm flex flex-col justify-center items-center
                transition-opacity duration-300
                ${o===l.id?"opacity-100":"opacity-0 hover:opacity-100"}`,children:[se.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-medium text-white mb-2",children:l.title}),l.subtitle&&se.jsx("span",{className:"text-sm md:text-base text-white/80 mb-5",children:l.subtitle}),se.jsx("div",{className:"flex justify-center gap-4",children:l.links.map((c,f)=>c.url&&se.jsx("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:`w-[50px] h-[50px] md:w-[40px] md:h-[40px] bg-white/20 rounded-full\r
                          flex items-center justify-center transition-all duration-300\r
                          hover:bg-white/40 hover:scale-110`,onClick:p=>p.stopPropagation(),children:se.jsx("i",{className:`${c.icon} text-base md:text-lg text-white
                          group-hover:text-black transition-colors duration-300`})},f))})]})]},l.id))})]})},yw=()=>se.jsxs("div",{className:"bg-black p-8 m-7 rounded-lg shadow-2xl",children:[" ",se.jsx("br",{}),se.jsx("br",{}),se.jsx("br",{}),se.jsx("h1",{className:"text-4xl font-bold text-center mb-20 text-white p-2",children:"Contact"}),se.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 text-lg text-white m-20",children:[se.jsxs("div",{className:"flex items-center space-x-2",children:[se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",viewBox:"0 0 24 24",fill:"none",stroke:"#8762F6",strokeWidth:"2",children:se.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M22 16.92v3.01c0 1.1-.9 2-2 2a19.937 19.937 0 01-8.94-2.36 19.937 19.937 0 01-6.58-6.58A19.937 19.937 0 012.07 4C2.07 2.9 2.97 2 4.07 2h3.01c.88 0 1.67.57 1.88 1.44l.62 2.54c.16.64-.02 1.31-.46 1.76l-2.2 2.2a15.978 15.978 0 006.58 6.58l2.2-2.2c.45-.45 1.12-.63 1.76-.46l2.54.62c.87.21 1.44 1 1.44 1.88z"})}),se.jsx("span",{children:"070 2805593"})]}),se.jsxs("div",{className:"flex items-center space-x-2",children:[se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"#8762F6",strokeWidth:"2",children:se.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 12h.01M21 16.8c0 .39-.28.68-.64.68H3.64a.7.7 0 01-.64-.68V5.2c0-.38.28-.68.64-.68H20.4c.36 0 .64.3.64.68v11.6zM3.6 5.8l8.4 5.7 8.4-5.7"})}),se.jsx("span",{children:"nimeshid24@gmail.com"})]}),se.jsxs("div",{className:"flex items-center space-x-2",children:[se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"#8762F6",strokeWidth:"2",children:se.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 2C8.13401 2 5 5.13401 5 9C5 13.858 12 21 12 21C12 21 19 13.858 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"})}),se.jsx("span",{children:"No. 208/1, Walpita ,Batawala, Padukka"})]})]})]}),xw=()=>se.jsx("footer",{className:"bg-[#1A1A1A] text-white py-8 mt-20",children:se.jsxs("div",{className:"container mx-auto text-center",children:[se.jsx("p",{className:"mb-2",children:"©2024 Nimeshi Dilshara. All Rights Reserved."}),se.jsx("div",{className:"counter-wrap ftco-animate d-flex mt-md-3",children:se.jsxs("ul",{className:"social-icons list-unstyled flex justify-center space-x-4 mt-5",children:[se.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px"},children:se.jsx("a",{href:"https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/","aria-label":"LinkedIn",children:se.jsx(gg,{style:{fontSize:"20px",color:"#fff"}})})}),se.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px"},children:se.jsx("a",{href:"https://www.behance.net/nimeshidilshara","aria-label":"Behance",children:se.jsx(hg,{style:{fontSize:"20px",color:"#fff"}})})}),se.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px"},children:se.jsx("a",{href:"https://dribbble.com/nimna7_","aria-label":"Dribbble",children:se.jsx(pg,{style:{fontSize:"20px",color:"#fff"}})})}),se.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px"},children:se.jsx("a",{href:"https://github.com/n-nimna","aria-label":"GitHub",children:se.jsx(mg,{style:{fontSize:"20px",color:"#fff"}})})})]})})]})});function Sw(){return se.jsxs("div",{className:"relative",children:[se.jsx(l1,{})," ",se.jsx(u1,{}),se.jsxs("main",{className:"mt-16",children:[se.jsx(X1,{}),se.jsx(t0,{}),se.jsx(q1,{}),se.jsx(aw,{}),se.jsx(_w,{}),se.jsx(yw,{}),se.jsx(xw,{})]})]})}j_.createRoot(document.getElementById("root")).render(se.jsx(Kr.StrictMode,{children:se.jsx(Sw,{})}));
