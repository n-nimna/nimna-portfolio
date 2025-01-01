var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function b_(o){if(o.__esModule)return o;var e=o.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(o).forEach(function(r){var a=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return o[r]}})}),n}var xc={exports:{}},Rs={},Mc={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function P_(){if(Np)return vt;Np=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.iterator;function M(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,R={};function T(w,B,ue){this.props=w,this.context=B,this.refs=R,this.updater=ue||A}T.prototype.isReactComponent={},T.prototype.setState=function(w,B){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,B,"setState")},T.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=T.prototype;function Y(w,B,ue){this.props=w,this.context=B,this.refs=R,this.updater=ue||A}var V=Y.prototype=new _;V.constructor=Y,D(V,T.prototype),V.isPureReactComponent=!0;var k=Array.isArray,L=Object.prototype.hasOwnProperty,b={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function G(w,B,ue){var X,Q={},re=null,oe=null;if(B!=null)for(X in B.ref!==void 0&&(oe=B.ref),B.key!==void 0&&(re=""+B.key),B)L.call(B,X)&&!I.hasOwnProperty(X)&&(Q[X]=B[X]);var ge=arguments.length-2;if(ge===1)Q.children=ue;else if(1<ge){for(var Se=Array(ge),Ce=0;Ce<ge;Ce++)Se[Ce]=arguments[Ce+2];Q.children=Se}if(w&&w.defaultProps)for(X in ge=w.defaultProps,ge)Q[X]===void 0&&(Q[X]=ge[X]);return{$$typeof:o,type:w,key:re,ref:oe,props:Q,_owner:b.current}}function E(w,B){return{$$typeof:o,type:w.type,key:B,ref:w.ref,props:w.props,_owner:w._owner}}function m(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function N(w){var B={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ue){return B[ue]})}var $=/\/+/g;function F(w,B){return typeof w=="object"&&w!==null&&w.key!=null?N(""+w.key):B.toString(36)}function H(w,B,ue,X,Q){var re=typeof w;(re==="undefined"||re==="boolean")&&(w=null);var oe=!1;if(w===null)oe=!0;else switch(re){case"string":case"number":oe=!0;break;case"object":switch(w.$$typeof){case o:case e:oe=!0}}if(oe)return oe=w,Q=Q(oe),w=X===""?"."+F(oe,0):X,k(Q)?(ue="",w!=null&&(ue=w.replace($,"$&/")+"/"),H(Q,B,ue,"",function(Ce){return Ce})):Q!=null&&(m(Q)&&(Q=E(Q,ue+(!Q.key||oe&&oe.key===Q.key?"":(""+Q.key).replace($,"$&/")+"/")+w)),B.push(Q)),1;if(oe=0,X=X===""?".":X+":",k(w))for(var ge=0;ge<w.length;ge++){re=w[ge];var Se=X+F(re,ge);oe+=H(re,B,ue,Se,Q)}else if(Se=M(w),typeof Se=="function")for(w=Se.call(w),ge=0;!(re=w.next()).done;)re=re.value,Se=X+F(re,ge++),oe+=H(re,B,ue,Se,Q);else if(re==="object")throw B=String(w),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return oe}function ne(w,B,ue){if(w==null)return w;var X=[],Q=0;return H(w,X,"","",function(re){return B.call(ue,re,Q++)}),X}function K(w){if(w._status===-1){var B=w._result;B=B(),B.then(function(ue){(w._status===0||w._status===-1)&&(w._status=1,w._result=ue)},function(ue){(w._status===0||w._status===-1)&&(w._status=2,w._result=ue)}),w._status===-1&&(w._status=0,w._result=B)}if(w._status===1)return w._result.default;throw w._result}var y={current:null},q={transition:null},O={ReactCurrentDispatcher:y,ReactCurrentBatchConfig:q,ReactCurrentOwner:b};function v(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ne,forEach:function(w,B,ue){ne(w,function(){B.apply(this,arguments)},ue)},count:function(w){var B=0;return ne(w,function(){B++}),B},toArray:function(w){return ne(w,function(B){return B})||[]},only:function(w){if(!m(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},vt.Component=T,vt.Fragment=n,vt.Profiler=a,vt.PureComponent=Y,vt.StrictMode=r,vt.Suspense=p,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,vt.act=v,vt.cloneElement=function(w,B,ue){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=D({},w.props),Q=w.key,re=w.ref,oe=w._owner;if(B!=null){if(B.ref!==void 0&&(re=B.ref,oe=b.current),B.key!==void 0&&(Q=""+B.key),w.type&&w.type.defaultProps)var ge=w.type.defaultProps;for(Se in B)L.call(B,Se)&&!I.hasOwnProperty(Se)&&(X[Se]=B[Se]===void 0&&ge!==void 0?ge[Se]:B[Se])}var Se=arguments.length-2;if(Se===1)X.children=ue;else if(1<Se){ge=Array(Se);for(var Ce=0;Ce<Se;Ce++)ge[Ce]=arguments[Ce+2];X.children=ge}return{$$typeof:o,type:w.type,key:Q,ref:re,props:X,_owner:oe}},vt.createContext=function(w){return w={$$typeof:c,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},vt.createElement=G,vt.createFactory=function(w){var B=G.bind(null,w);return B.type=w,B},vt.createRef=function(){return{current:null}},vt.forwardRef=function(w){return{$$typeof:f,render:w}},vt.isValidElement=m,vt.lazy=function(w){return{$$typeof:S,_payload:{_status:-1,_result:w},_init:K}},vt.memo=function(w,B){return{$$typeof:g,type:w,compare:B===void 0?null:B}},vt.startTransition=function(w){var B=q.transition;q.transition={};try{w()}finally{q.transition=B}},vt.unstable_act=v,vt.useCallback=function(w,B){return y.current.useCallback(w,B)},vt.useContext=function(w){return y.current.useContext(w)},vt.useDebugValue=function(){},vt.useDeferredValue=function(w){return y.current.useDeferredValue(w)},vt.useEffect=function(w,B){return y.current.useEffect(w,B)},vt.useId=function(){return y.current.useId()},vt.useImperativeHandle=function(w,B,ue){return y.current.useImperativeHandle(w,B,ue)},vt.useInsertionEffect=function(w,B){return y.current.useInsertionEffect(w,B)},vt.useLayoutEffect=function(w,B){return y.current.useLayoutEffect(w,B)},vt.useMemo=function(w,B){return y.current.useMemo(w,B)},vt.useReducer=function(w,B,ue){return y.current.useReducer(w,B,ue)},vt.useRef=function(w){return y.current.useRef(w)},vt.useState=function(w){return y.current.useState(w)},vt.useSyncExternalStore=function(w,B,ue){return y.current.useSyncExternalStore(w,B,ue)},vt.useTransition=function(){return y.current.useTransition()},vt.version="18.3.1",vt}var Op;function mi(){return Op||(Op=1,Mc.exports=P_()),Mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function L_(){if(Fp)return Rs;Fp=1;var o=mi(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,g){var S,x={},M=null,A=null;g!==void 0&&(M=""+g),p.key!==void 0&&(M=""+p.key),p.ref!==void 0&&(A=p.ref);for(S in p)r.call(p,S)&&!l.hasOwnProperty(S)&&(x[S]=p[S]);if(f&&f.defaultProps)for(S in p=f.defaultProps,p)x[S]===void 0&&(x[S]=p[S]);return{$$typeof:e,type:f,key:M,ref:A,props:x,_owner:a.current}}return Rs.Fragment=n,Rs.jsx=c,Rs.jsxs=c,Rs}var kp;function D_(){return kp||(kp=1,xc.exports=L_()),xc.exports}var L1=D_(),I_=mi();const qr=lg(I_);var el={},Ec={exports:{}},Rn={},Tc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function U_(){return zp||(zp=1,function(o){function e(q,O){var v=q.length;q.push(O);e:for(;0<v;){var w=v-1>>>1,B=q[w];if(0<a(B,O))q[w]=O,q[v]=B,v=w;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var O=q[0],v=q.pop();if(v!==O){q[0]=v;e:for(var w=0,B=q.length,ue=B>>>1;w<ue;){var X=2*(w+1)-1,Q=q[X],re=X+1,oe=q[re];if(0>a(Q,v))re<B&&0>a(oe,Q)?(q[w]=oe,q[re]=v,w=re):(q[w]=Q,q[X]=v,w=X);else if(re<B&&0>a(oe,v))q[w]=oe,q[re]=v,w=re;else break e}}return O}function a(q,O){var v=q.sortIndex-O.sortIndex;return v!==0?v:q.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],g=[],S=1,x=null,M=3,A=!1,D=!1,R=!1,T=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(q){for(var O=n(g);O!==null;){if(O.callback===null)r(g);else if(O.startTime<=q)r(g),O.sortIndex=O.expirationTime,e(p,O);else break;O=n(g)}}function k(q){if(R=!1,V(q),!D)if(n(p)!==null)D=!0,K(L);else{var O=n(g);O!==null&&y(k,O.startTime-q)}}function L(q,O){D=!1,R&&(R=!1,_(G),G=-1),A=!0;var v=M;try{for(V(O),x=n(p);x!==null&&(!(x.expirationTime>O)||q&&!N());){var w=x.callback;if(typeof w=="function"){x.callback=null,M=x.priorityLevel;var B=w(x.expirationTime<=O);O=o.unstable_now(),typeof B=="function"?x.callback=B:x===n(p)&&r(p),V(O)}else r(p);x=n(p)}if(x!==null)var ue=!0;else{var X=n(g);X!==null&&y(k,X.startTime-O),ue=!1}return ue}finally{x=null,M=v,A=!1}}var b=!1,I=null,G=-1,E=5,m=-1;function N(){return!(o.unstable_now()-m<E)}function $(){if(I!==null){var q=o.unstable_now();m=q;var O=!0;try{O=I(!0,q)}finally{O?F():(b=!1,I=null)}}else b=!1}var F;if(typeof Y=="function")F=function(){Y($)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ne=H.port2;H.port1.onmessage=$,F=function(){ne.postMessage(null)}}else F=function(){T($,0)};function K(q){I=q,b||(b=!0,F())}function y(q,O){G=T(function(){q(o.unstable_now())},O)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_continueExecution=function(){D||A||(D=!0,K(L))},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(q){switch(M){case 1:case 2:case 3:var O=3;break;default:O=M}var v=M;M=O;try{return q()}finally{M=v}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(q,O){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var v=M;M=q;try{return O()}finally{M=v}},o.unstable_scheduleCallback=function(q,O,v){var w=o.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?w+v:w):v=w,q){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=v+B,q={id:S++,callback:O,priorityLevel:q,startTime:v,expirationTime:B,sortIndex:-1},v>w?(q.sortIndex=v,e(g,q),n(p)===null&&q===n(g)&&(R?(_(G),G=-1):R=!0,y(k,v-w))):(q.sortIndex=B,e(p,q),D||A||(D=!0,K(L))),q},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(q){var O=M;return function(){var v=M;M=O;try{return q.apply(this,arguments)}finally{M=v}}}}(wc)),wc}var Bp;function N_(){return Bp||(Bp=1,Tc.exports=U_()),Tc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function O_(){if(Hp)return Rn;Hp=1;var o=mi(),e=N_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},x={};function M(t){return p.call(x,t)?!0:p.call(S,t)?!1:g.test(t)?x[t]=!0:(S[t]=!0,!1)}function A(t,i,s,u){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D(t,i,s,u){if(i===null||typeof i>"u"||A(t,i,s,u))return!0;if(u)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,s,u,d,h,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=C}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){T[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];T[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){T[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){T[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){T[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){T[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){T[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){T[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){T[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function Y(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,Y);T[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,Y);T[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,Y);T[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){T[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),T.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){T[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function V(t,i,s,u){var d=T.hasOwnProperty(i)?T[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(D(i,s,d,u)&&(s=null),u||d===null?M(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):d.mustUseProperty?t[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,u=d.attributeNamespace,s===null?t.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,u?t.setAttributeNS(u,i,s):t.setAttribute(i,s))))}var k=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),b=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),N=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),q=Symbol.iterator;function O(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var v=Object.assign,w;function B(t){if(w===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+t}var ue=!1;function X(t,i){if(!t||ue)return"";ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var u=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){u=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){u=ce}t()}}catch(ce){if(ce&&u&&typeof ce.stack=="string"){for(var d=ce.stack.split(`
`),h=u.stack.split(`
`),C=d.length-1,W=h.length-1;1<=C&&0<=W&&d[C]!==h[W];)W--;for(;1<=C&&0<=W;C--,W--)if(d[C]!==h[W]){if(C!==1||W!==1)do if(C--,W--,0>W||d[C]!==h[W]){var Z=`
`+d[C].replace(" at new "," at ");return t.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",t.displayName)),Z}while(1<=C&&0<=W);break}}}finally{ue=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?B(t):""}function Q(t){switch(t.tag){case 5:return B(t.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case b:return"Portal";case E:return"Profiler";case G:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N:return(t.displayName||"Context")+".Consumer";case m:return(t._context.displayName||"Context")+".Provider";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ne:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case K:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}function oe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(t){var i=Se(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(C){u=""+C,h.call(this,C)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ze(t){t._valueTracker||(t._valueTracker=Ce(t))}function Ve(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return t&&(u=Se(t)?t.checked?"true":"false":t.value),t=u,t!==s?(i.setValue(t),!0):!1}function Ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function j(t,i){var s=i.checked;return v({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function ut(t,i){var s=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;s=ge(i.value!=null?i.value:s),t._wrapperState={initialChecked:u,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Qe(t,i){i=i.checked,i!=null&&V(t,"checked",i,!1)}function Le(t,i){Qe(t,i);var s=ge(i.value),u=i.type;if(s!=null)u==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?rt(t,i.type,s):i.hasOwnProperty("defaultValue")&&rt(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function be(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function rt(t,i,s){(i!=="number"||Ke(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Pe=Array.isArray;function z(t,i,s,u){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&u&&(t[s].defaultSelected=!0)}else{for(s=""+ge(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function P(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return v({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ae(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Pe(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:ge(s)}}function _e(t,i){var s=ge(i.value),u=ge(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),u!=null&&(t.defaultValue=""+u)}function ye(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ze(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Re,He=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,s,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function mt(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){Xe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function tt(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function ot(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var u=s.indexOf("--")===0,d=tt(s,i[s],u);s==="float"&&(s="cssFloat"),u?t.setProperty(s,d):t[s]=d}}var je=v({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(t,i){if(i){if(je[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ct(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function te(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var De=null,pe=null,ve=null;function Fe(t){if(t=hs(t)){if(typeof De!="function")throw Error(n(280));var i=t.stateNode;i&&(i=pa(i),De(t.stateNode,t.type,i))}}function Ne(t){pe?ve?ve.push(t):ve=[t]:pe=t}function ft(){if(pe){var t=pe,i=ve;if(ve=pe=null,Fe(t),i)for(t=0;t<i.length;t++)Fe(i[t])}}function Ut(t,i){return t(i)}function $t(){}var Mt=!1;function Mn(t,i,s){if(Mt)return t(i,s);Mt=!0;try{return Ut(t,i,s)}finally{Mt=!1,(pe!==null||ve!==null)&&($t(),ft())}}function gn(t,i){var s=t.stateNode;if(s===null)return null;var u=pa(s);if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Zr=!1;if(f)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Zr=!1}function gi(t,i,s,u,d,h,C,W,Z){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(s,ce)}catch(Me){this.onError(Me)}}var vi=!1,_r=null,yr=!1,Bi=null,qs={onError:function(t){vi=!0,_r=t}};function Qr(t,i,s,u,d,h,C,W,Z){vi=!1,_r=null,gi.apply(qs,arguments)}function Ys(t,i,s,u,d,h,C,W,Z){if(Qr.apply(this,arguments),vi){if(vi){var ce=_r;vi=!1,_r=null}else throw Error(n(198));yr||(yr=!0,Bi=ce)}}function ai(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function $s(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ks(t){if(ai(t)!==t)throw Error(n(188))}function Wl(t){var i=t.alternate;if(!i){if(i=ai(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,u=i;;){var d=s.return;if(d===null)break;var h=d.alternate;if(h===null){if(u=d.return,u!==null){s=u;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===s)return Ks(d),t;if(h===u)return Ks(d),i;h=h.sibling}throw Error(n(188))}if(s.return!==u.return)s=d,u=h;else{for(var C=!1,W=d.child;W;){if(W===s){C=!0,s=d,u=h;break}if(W===u){C=!0,u=d,s=h;break}W=W.sibling}if(!C){for(W=h.child;W;){if(W===s){C=!0,s=h,u=d;break}if(W===u){C=!0,u=h,s=d;break}W=W.sibling}if(!C)throw Error(n(189))}}if(s.alternate!==u)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Zs(t){return t=Wl(t),t!==null?Qs(t):null}function Qs(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qs(t);if(i!==null)return i;t=t.sibling}return null}var U=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,fe=e.unstable_shouldYield,de=e.unstable_requestPaint,J=e.unstable_now,Te=e.unstable_getCurrentPriorityLevel,Ie=e.unstable_ImmediatePriority,Be=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,st=e.unstable_LowPriority,at=e.unstable_IdlePriority,Je=null,dt=null;function Tt(t){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:et,Ft=Math.log,xt=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Ft(t)/xt|0)|0}var Ht=64,yt=4194304;function on(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qn(t,i){var s=t.pendingLanes;if(s===0)return 0;var u=0,d=t.suspendedLanes,h=t.pingedLanes,C=s&268435455;if(C!==0){var W=C&~d;W!==0?u=on(W):(h&=C,h!==0&&(u=on(h)))}else C=s&~d,C!==0?u=on(C):h!==0&&(u=on(h));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if(u&4&&(u|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)s=31-wt(i),d=1<<s,u|=t[s],i&=~d;return u}function vn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sr(t,i){for(var s=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var C=31-wt(h),W=1<<C,Z=d[C];Z===-1?(!(W&s)||W&u)&&(d[C]=vn(W,i)):Z<=i&&(t.expiredLanes|=W),h&=~W}}function Pt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _n(){var t=Ht;return Ht<<=1,!(Ht&4194240)&&(Ht=64),t}function ln(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Gt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-wt(i),t[i]=s}function un(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<s;){var d=31-wt(s),h=1<<d;i[d]=0,u[d]=-1,t[d]=-1,s&=~h}}function xr(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var u=31-wt(s),d=1<<u;d&i|t[u]&i&&(t[u]|=i),s&=~d}}var _t=0;function hd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pd,Xl,md,gd,vd,jl=!1,Js=[],Hi=null,Vi=null,Gi=null,Zo=new Map,Qo=new Map,Wi=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(t,i){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(i.pointerId)}}function Jo(t,i,s,u,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:h,targetContainers:[d]},i!==null&&(i=hs(i),i!==null&&Xl(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Qg(t,i,s,u,d){switch(i){case"focusin":return Hi=Jo(Hi,t,i,s,u,d),!0;case"dragenter":return Vi=Jo(Vi,t,i,s,u,d),!0;case"mouseover":return Gi=Jo(Gi,t,i,s,u,d),!0;case"pointerover":var h=d.pointerId;return Zo.set(h,Jo(Zo.get(h)||null,t,i,s,u,d)),!0;case"gotpointercapture":return h=d.pointerId,Qo.set(h,Jo(Qo.get(h)||null,t,i,s,u,d)),!0}return!1}function yd(t){var i=Mr(t.target);if(i!==null){var s=ai(i);if(s!==null){if(i=s.tag,i===13){if(i=$s(s),i!==null){t.blockedOn=i,vd(t.priority,function(){md(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ea(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var u=new s.constructor(s.type,s);Rt=u,s.target.dispatchEvent(u),Rt=null}else return i=hs(s),i!==null&&Xl(i),t.blockedOn=s,!1;i.shift()}return!0}function Sd(t,i,s){ea(t)&&s.delete(i)}function Jg(){jl=!1,Hi!==null&&ea(Hi)&&(Hi=null),Vi!==null&&ea(Vi)&&(Vi=null),Gi!==null&&ea(Gi)&&(Gi=null),Zo.forEach(Sd),Qo.forEach(Sd)}function es(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jg)))}function ts(t){function i(d){return es(d,t)}if(0<Js.length){es(Js[0],t);for(var s=1;s<Js.length;s++){var u=Js[s];u.blockedOn===t&&(u.blockedOn=null)}}for(Hi!==null&&es(Hi,t),Vi!==null&&es(Vi,t),Gi!==null&&es(Gi,t),Zo.forEach(i),Qo.forEach(i),s=0;s<Wi.length;s++)u=Wi[s],u.blockedOn===t&&(u.blockedOn=null);for(;0<Wi.length&&(s=Wi[0],s.blockedOn===null);)yd(s),s.blockedOn===null&&Wi.shift()}var Jr=k.ReactCurrentBatchConfig,ta=!0;function ev(t,i,s,u){var d=_t,h=Jr.transition;Jr.transition=null;try{_t=1,ql(t,i,s,u)}finally{_t=d,Jr.transition=h}}function tv(t,i,s,u){var d=_t,h=Jr.transition;Jr.transition=null;try{_t=4,ql(t,i,s,u)}finally{_t=d,Jr.transition=h}}function ql(t,i,s,u){if(ta){var d=Yl(t,i,s,u);if(d===null)fu(t,i,u,na,s),_d(t,u);else if(Qg(d,t,i,s,u))u.stopPropagation();else if(_d(t,u),i&4&&-1<Zg.indexOf(t)){for(;d!==null;){var h=hs(d);if(h!==null&&pd(h),h=Yl(t,i,s,u),h===null&&fu(t,i,u,na,s),h===d)break;d=h}d!==null&&u.stopPropagation()}else fu(t,i,u,null,s)}}var na=null;function Yl(t,i,s,u){if(na=null,t=te(u),t=Mr(t),t!==null)if(i=ai(t),i===null)t=null;else if(s=i.tag,s===13){if(t=$s(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return na=t,null}function xd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Te()){case Ie:return 1;case Be:return 4;case Ge:case st:return 16;case at:return 536870912;default:return 16}default:return 16}}var Xi=null,$l=null,ia=null;function Md(){if(ia)return ia;var t,i=$l,s=i.length,u,d="value"in Xi?Xi.value:Xi.textContent,h=d.length;for(t=0;t<s&&i[t]===d[t];t++);var C=s-t;for(u=1;u<=C&&i[s-u]===d[h-u];u++);return ia=d.slice(t,1<u?1-u:void 0)}function ra(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function Ed(){return!1}function In(t){function i(s,u,d,h,C){this._reactName=s,this._targetInst=d,this.type=u,this.nativeEvent=h,this.target=C,this.currentTarget=null;for(var W in t)t.hasOwnProperty(W)&&(s=t[W],this[W]=s?s(h):h[W]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oa:Ed,this.isPropagationStopped=Ed,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=In(eo),ns=v({},eo,{view:0,detail:0}),nv=In(ns),Zl,Ql,is,sa=v({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==is&&(is&&t.type==="mousemove"?(Zl=t.screenX-is.screenX,Ql=t.screenY-is.screenY):Ql=Zl=0,is=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Td=In(sa),iv=v({},sa,{dataTransfer:0}),rv=In(iv),ov=v({},ns,{relatedTarget:0}),Jl=In(ov),sv=v({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),av=In(sv),lv=v({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uv=In(lv),cv=v({},eo,{data:0}),wd=In(cv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=hv[t])?!!i[t]:!1}function eu(){return pv}var mv=v({},ns,{key:function(t){if(t.key){var i=fv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gv=In(mv),vv=v({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=In(vv),_v=v({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),yv=In(_v),Sv=v({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),xv=In(Sv),Mv=v({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=In(Mv),Tv=[9,13,27,32],tu=f&&"CompositionEvent"in window,rs=null;f&&"documentMode"in document&&(rs=document.documentMode);var wv=f&&"TextEvent"in window&&!rs,Cd=f&&(!tu||rs&&8<rs&&11>=rs),Rd=" ",bd=!1;function Pd(t,i){switch(t){case"keyup":return Tv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function Av(t,i){switch(t){case"compositionend":return Ld(i);case"keypress":return i.which!==32?null:(bd=!0,Rd);case"textInput":return t=i.data,t===Rd&&bd?null:t;default:return null}}function Cv(t,i){if(to)return t==="compositionend"||!tu&&Pd(t,i)?(t=Md(),ia=$l=Xi=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cd&&i.locale!=="ko"?null:i.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Rv[t.type]:i==="textarea"}function Id(t,i,s,u){Ne(u),i=fa(i,"onChange"),0<i.length&&(s=new Kl("onChange","change",null,s,u),t.push({event:s,listeners:i}))}var os=null,ss=null;function bv(t){Zd(t,0)}function aa(t){var i=so(t);if(Ve(i))return t}function Pv(t,i){if(t==="change")return i}var Ud=!1;if(f){var nu;if(f){var iu="oninput"in document;if(!iu){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),iu=typeof Nd.oninput=="function"}nu=iu}else nu=!1;Ud=nu&&(!document.documentMode||9<document.documentMode)}function Od(){os&&(os.detachEvent("onpropertychange",Fd),ss=os=null)}function Fd(t){if(t.propertyName==="value"&&aa(ss)){var i=[];Id(i,ss,t,te(t)),Mn(bv,i)}}function Lv(t,i,s){t==="focusin"?(Od(),os=i,ss=s,os.attachEvent("onpropertychange",Fd)):t==="focusout"&&Od()}function Dv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return aa(ss)}function Iv(t,i){if(t==="click")return aa(i)}function Uv(t,i){if(t==="input"||t==="change")return aa(i)}function Nv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Yn=typeof Object.is=="function"?Object.is:Nv;function as(t,i){if(Yn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var d=s[u];if(!p.call(i,d)||!Yn(t[d],i[d]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,i){var s=kd(t);t=0;for(var u;s;){if(s.nodeType===3){if(u=t+s.textContent.length,t<=i&&u>=i)return{node:s,offset:i-t};t=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=kd(s)}}function Bd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Bd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Hd(){for(var t=window,i=Ke();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ke(t.document)}return i}function ru(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ov(t){var i=Hd(),s=t.focusedElem,u=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Bd(s.ownerDocument.documentElement,s)){if(u!==null&&ru(s)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=s.textContent.length,h=Math.min(u.start,d);u=u.end===void 0?h:Math.min(u.end,d),!t.extend&&h>u&&(d=u,u=h,h=d),d=zd(s,h);var C=zd(s,u);d&&C&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==C.node||t.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>u?(t.addRange(i),t.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fv=f&&"documentMode"in document&&11>=document.documentMode,no=null,ou=null,ls=null,su=!1;function Vd(t,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;su||no==null||no!==Ke(u)||(u=no,"selectionStart"in u&&ru(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ls&&as(ls,u)||(ls=u,u=fa(ou,"onSelect"),0<u.length&&(i=new Kl("onSelect","select",null,i,s),t.push({event:i,listeners:u}),i.target=no)))}function la(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var io={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},au={},Gd={};f&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function ua(t){if(au[t])return au[t];if(!io[t])return t;var i=io[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Gd)return au[t]=i[s];return t}var Wd=ua("animationend"),Xd=ua("animationiteration"),jd=ua("animationstart"),qd=ua("transitionend"),Yd=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(t,i){Yd.set(t,i),l(i,[t])}for(var lu=0;lu<$d.length;lu++){var uu=$d[lu],kv=uu.toLowerCase(),zv=uu[0].toUpperCase()+uu.slice(1);ji(kv,"on"+zv)}ji(Wd,"onAnimationEnd"),ji(Xd,"onAnimationIteration"),ji(jd,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(qd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function Kd(t,i,s){var u=t.type||"unknown-event";t.currentTarget=s,Ys(u,i,void 0,t),t.currentTarget=null}function Zd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var u=t[s],d=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var C=u.length-1;0<=C;C--){var W=u[C],Z=W.instance,ce=W.currentTarget;if(W=W.listener,Z!==h&&d.isPropagationStopped())break e;Kd(d,W,ce),h=Z}else for(C=0;C<u.length;C++){if(W=u[C],Z=W.instance,ce=W.currentTarget,W=W.listener,Z!==h&&d.isPropagationStopped())break e;Kd(d,W,ce),h=Z}}}if(yr)throw t=Bi,yr=!1,Bi=null,t}function Nt(t,i){var s=i[vu];s===void 0&&(s=i[vu]=new Set);var u=t+"__bubble";s.has(u)||(Qd(i,t,2,!1),s.add(u))}function cu(t,i,s){var u=0;i&&(u|=4),Qd(s,t,u,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[ca]){t[ca]=!0,r.forEach(function(s){s!=="selectionchange"&&(Bv.has(s)||cu(s,!1,t),cu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ca]||(i[ca]=!0,cu("selectionchange",!1,i))}}function Qd(t,i,s,u){switch(xd(i)){case 1:var d=ev;break;case 4:d=tv;break;default:d=ql}s=d.bind(null,i,s,t),d=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function fu(t,i,s,u,d){var h=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var W=u.stateNode.containerInfo;if(W===d||W.nodeType===8&&W.parentNode===d)break;if(C===4)for(C=u.return;C!==null;){var Z=C.tag;if((Z===3||Z===4)&&(Z=C.stateNode.containerInfo,Z===d||Z.nodeType===8&&Z.parentNode===d))return;C=C.return}for(;W!==null;){if(C=Mr(W),C===null)return;if(Z=C.tag,Z===5||Z===6){u=h=C;continue e}W=W.parentNode}}u=u.return}Mn(function(){var ce=h,Me=te(s),Ee=[];e:{var xe=Yd.get(t);if(xe!==void 0){var ke=Kl,qe=t;switch(t){case"keypress":if(ra(s)===0)break e;case"keydown":case"keyup":ke=gv;break;case"focusin":qe="focus",ke=Jl;break;case"focusout":qe="blur",ke=Jl;break;case"beforeblur":case"afterblur":ke=Jl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=yv;break;case Wd:case Xd:case jd:ke=av;break;case qd:ke=xv;break;case"scroll":ke=nv;break;case"wheel":ke=Ev;break;case"copy":case"cut":case"paste":ke=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Ad}var Ye=(i&4)!==0,Wt=!Ye&&t==="scroll",se=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var ee=ce,le;ee!==null;){le=ee;var Ae=le.stateNode;if(le.tag===5&&Ae!==null&&(le=Ae,se!==null&&(Ae=gn(ee,se),Ae!=null&&Ye.push(fs(ee,Ae,le)))),Wt)break;ee=ee.return}0<Ye.length&&(xe=new ke(xe,qe,null,s,Me),Ee.push({event:xe,listeners:Ye}))}}if(!(i&7)){e:{if(xe=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",xe&&s!==Rt&&(qe=s.relatedTarget||s.fromElement)&&(Mr(qe)||qe[_i]))break e;if((ke||xe)&&(xe=Me.window===Me?Me:(xe=Me.ownerDocument)?xe.defaultView||xe.parentWindow:window,ke?(qe=s.relatedTarget||s.toElement,ke=ce,qe=qe?Mr(qe):null,qe!==null&&(Wt=ai(qe),qe!==Wt||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(ke=null,qe=ce),ke!==qe)){if(Ye=Td,Ae="onMouseLeave",se="onMouseEnter",ee="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Ad,Ae="onPointerLeave",se="onPointerEnter",ee="pointer"),Wt=ke==null?xe:so(ke),le=qe==null?xe:so(qe),xe=new Ye(Ae,ee+"leave",ke,s,Me),xe.target=Wt,xe.relatedTarget=le,Ae=null,Mr(Me)===ce&&(Ye=new Ye(se,ee+"enter",qe,s,Me),Ye.target=le,Ye.relatedTarget=Wt,Ae=Ye),Wt=Ae,ke&&qe)t:{for(Ye=ke,se=qe,ee=0,le=Ye;le;le=ro(le))ee++;for(le=0,Ae=se;Ae;Ae=ro(Ae))le++;for(;0<ee-le;)Ye=ro(Ye),ee--;for(;0<le-ee;)se=ro(se),le--;for(;ee--;){if(Ye===se||se!==null&&Ye===se.alternate)break t;Ye=ro(Ye),se=ro(se)}Ye=null}else Ye=null;ke!==null&&Jd(Ee,xe,ke,Ye,!1),qe!==null&&Wt!==null&&Jd(Ee,Wt,qe,Ye,!0)}}e:{if(xe=ce?so(ce):window,ke=xe.nodeName&&xe.nodeName.toLowerCase(),ke==="select"||ke==="input"&&xe.type==="file")var $e=Pv;else if(Dd(xe))if(Ud)$e=Uv;else{$e=Dv;var nt=Lv}else(ke=xe.nodeName)&&ke.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&($e=Iv);if($e&&($e=$e(t,ce))){Id(Ee,$e,s,Me);break e}nt&&nt(t,xe,ce),t==="focusout"&&(nt=xe._wrapperState)&&nt.controlled&&xe.type==="number"&&rt(xe,"number",xe.value)}switch(nt=ce?so(ce):window,t){case"focusin":(Dd(nt)||nt.contentEditable==="true")&&(no=nt,ou=ce,ls=null);break;case"focusout":ls=ou=no=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Vd(Ee,s,Me);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":Vd(Ee,s,Me)}var it;if(tu)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else to?Pd(t,s)&&(lt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(lt="onCompositionStart");lt&&(Cd&&s.locale!=="ko"&&(to||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&to&&(it=Md()):(Xi=Me,$l="value"in Xi?Xi.value:Xi.textContent,to=!0)),nt=fa(ce,lt),0<nt.length&&(lt=new wd(lt,t,null,s,Me),Ee.push({event:lt,listeners:nt}),it?lt.data=it:(it=Ld(s),it!==null&&(lt.data=it)))),(it=wv?Av(t,s):Cv(t,s))&&(ce=fa(ce,"onBeforeInput"),0<ce.length&&(Me=new wd("onBeforeInput","beforeinput",null,s,Me),Ee.push({event:Me,listeners:ce}),Me.data=it))}Zd(Ee,i)})}function fs(t,i,s){return{instance:t,listener:i,currentTarget:s}}function fa(t,i){for(var s=i+"Capture",u=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=gn(t,s),h!=null&&u.unshift(fs(t,h,d)),h=gn(t,i),h!=null&&u.push(fs(t,h,d))),t=t.return}return u}function ro(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jd(t,i,s,u,d){for(var h=i._reactName,C=[];s!==null&&s!==u;){var W=s,Z=W.alternate,ce=W.stateNode;if(Z!==null&&Z===u)break;W.tag===5&&ce!==null&&(W=ce,d?(Z=gn(s,h),Z!=null&&C.unshift(fs(s,Z,W))):d||(Z=gn(s,h),Z!=null&&C.push(fs(s,Z,W)))),s=s.return}C.length!==0&&t.push({event:i,listeners:C})}var Hv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(Hv,`
`).replace(Vv,"")}function da(t,i,s){if(i=eh(i),eh(t)!==i&&s)throw Error(n(425))}function ha(){}var du=null,hu=null;function pu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(Xv)}:mu;function Xv(t){setTimeout(function(){throw t})}function gu(t,i){var s=i,u=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(u===0){t.removeChild(d),ts(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=d}while(s);ts(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var oo=Math.random().toString(36).slice(2),li="__reactFiber$"+oo,ds="__reactProps$"+oo,_i="__reactContainer$"+oo,vu="__reactEvents$"+oo,jv="__reactListeners$"+oo,qv="__reactHandles$"+oo;function Mr(t){var i=t[li];if(i)return i;for(var s=t.parentNode;s;){if(i=s[_i]||s[li]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=nh(t);t!==null;){if(s=t[li])return s;t=nh(t)}return i}t=s,s=t.parentNode}return null}function hs(t){return t=t[li]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function so(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function pa(t){return t[ds]||null}var _u=[],ao=-1;function Yi(t){return{current:t}}function Ot(t){0>ao||(t.current=_u[ao],_u[ao]=null,ao--)}function It(t,i){ao++,_u[ao]=t.current,t.current=i}var $i={},cn=Yi($i),En=Yi(!1),Er=$i;function lo(t,i){var s=t.type.contextTypes;if(!s)return $i;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in s)d[h]=i[h];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Tn(t){return t=t.childContextTypes,t!=null}function ma(){Ot(En),Ot(cn)}function ih(t,i,s){if(cn.current!==$i)throw Error(n(168));It(cn,i),It(En,s)}function rh(t,i,s){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return s;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,oe(t)||"Unknown",d));return v({},s,u)}function ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Er=cn.current,It(cn,t),It(En,En.current),!0}function oh(t,i,s){var u=t.stateNode;if(!u)throw Error(n(169));s?(t=rh(t,i,Er),u.__reactInternalMemoizedMergedChildContext=t,Ot(En),Ot(cn),It(cn,t)):Ot(En),It(En,s)}var yi=null,va=!1,yu=!1;function sh(t){yi===null?yi=[t]:yi.push(t)}function Yv(t){va=!0,sh(t)}function Ki(){if(!yu&&yi!==null){yu=!0;var t=0,i=_t;try{var s=yi;for(_t=1;t<s.length;t++){var u=s[t];do u=u(!0);while(u!==null)}yi=null,va=!1}catch(d){throw yi!==null&&(yi=yi.slice(t+1)),U(Ie,Ki),d}finally{_t=i,yu=!1}}return null}var uo=[],co=0,_a=null,ya=0,zn=[],Bn=0,Tr=null,Si=1,xi="";function wr(t,i){uo[co++]=ya,uo[co++]=_a,_a=t,ya=i}function ah(t,i,s){zn[Bn++]=Si,zn[Bn++]=xi,zn[Bn++]=Tr,Tr=t;var u=Si;t=xi;var d=32-wt(u)-1;u&=~(1<<d),s+=1;var h=32-wt(i)+d;if(30<h){var C=d-d%5;h=(u&(1<<C)-1).toString(32),u>>=C,d-=C,Si=1<<32-wt(i)+d|s<<d|u,xi=h+t}else Si=1<<h|s<<d|u,xi=t}function Su(t){t.return!==null&&(wr(t,1),ah(t,1,0))}function xu(t){for(;t===_a;)_a=uo[--co],uo[co]=null,ya=uo[--co],uo[co]=null;for(;t===Tr;)Tr=zn[--Bn],zn[Bn]=null,xi=zn[--Bn],zn[Bn]=null,Si=zn[--Bn],zn[Bn]=null}var Un=null,Nn=null,kt=!1,$n=null;function lh(t,i){var s=Wn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function uh(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,Nn=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Tr!==null?{id:Si,overflow:xi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Wn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Un=t,Nn=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(kt){var i=Nn;if(i){var s=i;if(!uh(t,i)){if(Mu(t))throw Error(n(418));i=qi(s.nextSibling);var u=Un;i&&uh(t,i)?lh(u,s):(t.flags=t.flags&-4097|2,kt=!1,Un=t)}}else{if(Mu(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Un=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Sa(t){if(t!==Un)return!1;if(!kt)return ch(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pu(t.type,t.memoizedProps)),i&&(i=Nn)){if(Mu(t))throw fh(),Error(n(418));for(;i;)lh(t,i),i=qi(i.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Nn=qi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=Un?qi(t.stateNode.nextSibling):null;return!0}function fh(){for(var t=Nn;t;)t=qi(t.nextSibling)}function fo(){Nn=Un=null,kt=!1}function Tu(t){$n===null?$n=[t]:$n.push(t)}var $v=k.ReactCurrentBatchConfig;function ps(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var u=s.stateNode}if(!u)throw Error(n(147,t));var d=u,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(C){var W=d.refs;C===null?delete W[h]:W[h]=C},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function xa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function dh(t){var i=t._init;return i(t._payload)}function hh(t){function i(se,ee){if(t){var le=se.deletions;le===null?(se.deletions=[ee],se.flags|=16):le.push(ee)}}function s(se,ee){if(!t)return null;for(;ee!==null;)i(se,ee),ee=ee.sibling;return null}function u(se,ee){for(se=new Map;ee!==null;)ee.key!==null?se.set(ee.key,ee):se.set(ee.index,ee),ee=ee.sibling;return se}function d(se,ee){return se=rr(se,ee),se.index=0,se.sibling=null,se}function h(se,ee,le){return se.index=le,t?(le=se.alternate,le!==null?(le=le.index,le<ee?(se.flags|=2,ee):le):(se.flags|=2,ee)):(se.flags|=1048576,ee)}function C(se){return t&&se.alternate===null&&(se.flags|=2),se}function W(se,ee,le,Ae){return ee===null||ee.tag!==6?(ee=mc(le,se.mode,Ae),ee.return=se,ee):(ee=d(ee,le),ee.return=se,ee)}function Z(se,ee,le,Ae){var $e=le.type;return $e===I?Me(se,ee,le.props.children,Ae,le.key):ee!==null&&(ee.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&dh($e)===ee.type)?(Ae=d(ee,le.props),Ae.ref=ps(se,ee,le),Ae.return=se,Ae):(Ae=Xa(le.type,le.key,le.props,null,se.mode,Ae),Ae.ref=ps(se,ee,le),Ae.return=se,Ae)}function ce(se,ee,le,Ae){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==le.containerInfo||ee.stateNode.implementation!==le.implementation?(ee=gc(le,se.mode,Ae),ee.return=se,ee):(ee=d(ee,le.children||[]),ee.return=se,ee)}function Me(se,ee,le,Ae,$e){return ee===null||ee.tag!==7?(ee=Ir(le,se.mode,Ae,$e),ee.return=se,ee):(ee=d(ee,le),ee.return=se,ee)}function Ee(se,ee,le){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=mc(""+ee,se.mode,le),ee.return=se,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case L:return le=Xa(ee.type,ee.key,ee.props,null,se.mode,le),le.ref=ps(se,null,ee),le.return=se,le;case b:return ee=gc(ee,se.mode,le),ee.return=se,ee;case K:var Ae=ee._init;return Ee(se,Ae(ee._payload),le)}if(Pe(ee)||O(ee))return ee=Ir(ee,se.mode,le,null),ee.return=se,ee;xa(se,ee)}return null}function xe(se,ee,le,Ae){var $e=ee!==null?ee.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return $e!==null?null:W(se,ee,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case L:return le.key===$e?Z(se,ee,le,Ae):null;case b:return le.key===$e?ce(se,ee,le,Ae):null;case K:return $e=le._init,xe(se,ee,$e(le._payload),Ae)}if(Pe(le)||O(le))return $e!==null?null:Me(se,ee,le,Ae,null);xa(se,le)}return null}function ke(se,ee,le,Ae,$e){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return se=se.get(le)||null,W(ee,se,""+Ae,$e);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case L:return se=se.get(Ae.key===null?le:Ae.key)||null,Z(ee,se,Ae,$e);case b:return se=se.get(Ae.key===null?le:Ae.key)||null,ce(ee,se,Ae,$e);case K:var nt=Ae._init;return ke(se,ee,le,nt(Ae._payload),$e)}if(Pe(Ae)||O(Ae))return se=se.get(le)||null,Me(ee,se,Ae,$e,null);xa(ee,Ae)}return null}function qe(se,ee,le,Ae){for(var $e=null,nt=null,it=ee,lt=ee=0,nn=null;it!==null&&lt<le.length;lt++){it.index>lt?(nn=it,it=null):nn=it.sibling;var At=xe(se,it,le[lt],Ae);if(At===null){it===null&&(it=nn);break}t&&it&&At.alternate===null&&i(se,it),ee=h(At,ee,lt),nt===null?$e=At:nt.sibling=At,nt=At,it=nn}if(lt===le.length)return s(se,it),kt&&wr(se,lt),$e;if(it===null){for(;lt<le.length;lt++)it=Ee(se,le[lt],Ae),it!==null&&(ee=h(it,ee,lt),nt===null?$e=it:nt.sibling=it,nt=it);return kt&&wr(se,lt),$e}for(it=u(se,it);lt<le.length;lt++)nn=ke(it,se,lt,le[lt],Ae),nn!==null&&(t&&nn.alternate!==null&&it.delete(nn.key===null?lt:nn.key),ee=h(nn,ee,lt),nt===null?$e=nn:nt.sibling=nn,nt=nn);return t&&it.forEach(function(or){return i(se,or)}),kt&&wr(se,lt),$e}function Ye(se,ee,le,Ae){var $e=O(le);if(typeof $e!="function")throw Error(n(150));if(le=$e.call(le),le==null)throw Error(n(151));for(var nt=$e=null,it=ee,lt=ee=0,nn=null,At=le.next();it!==null&&!At.done;lt++,At=le.next()){it.index>lt?(nn=it,it=null):nn=it.sibling;var or=xe(se,it,At.value,Ae);if(or===null){it===null&&(it=nn);break}t&&it&&or.alternate===null&&i(se,it),ee=h(or,ee,lt),nt===null?$e=or:nt.sibling=or,nt=or,it=nn}if(At.done)return s(se,it),kt&&wr(se,lt),$e;if(it===null){for(;!At.done;lt++,At=le.next())At=Ee(se,At.value,Ae),At!==null&&(ee=h(At,ee,lt),nt===null?$e=At:nt.sibling=At,nt=At);return kt&&wr(se,lt),$e}for(it=u(se,it);!At.done;lt++,At=le.next())At=ke(it,se,lt,At.value,Ae),At!==null&&(t&&At.alternate!==null&&it.delete(At.key===null?lt:At.key),ee=h(At,ee,lt),nt===null?$e=At:nt.sibling=At,nt=At);return t&&it.forEach(function(R_){return i(se,R_)}),kt&&wr(se,lt),$e}function Wt(se,ee,le,Ae){if(typeof le=="object"&&le!==null&&le.type===I&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case L:e:{for(var $e=le.key,nt=ee;nt!==null;){if(nt.key===$e){if($e=le.type,$e===I){if(nt.tag===7){s(se,nt.sibling),ee=d(nt,le.props.children),ee.return=se,se=ee;break e}}else if(nt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&dh($e)===nt.type){s(se,nt.sibling),ee=d(nt,le.props),ee.ref=ps(se,nt,le),ee.return=se,se=ee;break e}s(se,nt);break}else i(se,nt);nt=nt.sibling}le.type===I?(ee=Ir(le.props.children,se.mode,Ae,le.key),ee.return=se,se=ee):(Ae=Xa(le.type,le.key,le.props,null,se.mode,Ae),Ae.ref=ps(se,ee,le),Ae.return=se,se=Ae)}return C(se);case b:e:{for(nt=le.key;ee!==null;){if(ee.key===nt)if(ee.tag===4&&ee.stateNode.containerInfo===le.containerInfo&&ee.stateNode.implementation===le.implementation){s(se,ee.sibling),ee=d(ee,le.children||[]),ee.return=se,se=ee;break e}else{s(se,ee);break}else i(se,ee);ee=ee.sibling}ee=gc(le,se.mode,Ae),ee.return=se,se=ee}return C(se);case K:return nt=le._init,Wt(se,ee,nt(le._payload),Ae)}if(Pe(le))return qe(se,ee,le,Ae);if(O(le))return Ye(se,ee,le,Ae);xa(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,ee!==null&&ee.tag===6?(s(se,ee.sibling),ee=d(ee,le),ee.return=se,se=ee):(s(se,ee),ee=mc(le,se.mode,Ae),ee.return=se,se=ee),C(se)):s(se,ee)}return Wt}var ho=hh(!0),ph=hh(!1),Ma=Yi(null),Ea=null,po=null,wu=null;function Au(){wu=po=Ea=null}function Cu(t){var i=Ma.current;Ot(Ma),t._currentValue=i}function Ru(t,i,s){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===s)break;t=t.return}}function mo(t,i){Ea=t,wu=po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(wn=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(wu!==t)if(t={context:t,memoizedValue:i,next:null},po===null){if(Ea===null)throw Error(n(308));po=t,Ea.dependencies={lanes:0,firstContext:t}}else po=po.next=t;return i}var Ar=null;function bu(t){Ar===null?Ar=[t]:Ar.push(t)}function mh(t,i,s,u){var d=i.interleaved;return d===null?(s.next=s,bu(i)):(s.next=d.next,d.next=s),i.interleaved=s,Mi(t,u)}function Mi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Zi=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Qi(t,i,s){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,Et&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Mi(t,s)}return d=u.interleaved,d===null?(i.next=i,bu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Mi(t,s)}function Ta(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,xr(t,s)}}function vh(t,i){var s=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var d=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var C={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?d=h=C:h=h.next=C,s=s.next}while(s!==null);h===null?d=h=i:h=h.next=i}else d=h=i;s={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:u.shared,effects:u.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function wa(t,i,s,u){var d=t.updateQueue;Zi=!1;var h=d.firstBaseUpdate,C=d.lastBaseUpdate,W=d.shared.pending;if(W!==null){d.shared.pending=null;var Z=W,ce=Z.next;Z.next=null,C===null?h=ce:C.next=ce,C=Z;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,W=Me.lastBaseUpdate,W!==C&&(W===null?Me.firstBaseUpdate=ce:W.next=ce,Me.lastBaseUpdate=Z))}if(h!==null){var Ee=d.baseState;C=0,Me=ce=Z=null,W=h;do{var xe=W.lane,ke=W.eventTime;if((u&xe)===xe){Me!==null&&(Me=Me.next={eventTime:ke,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var qe=t,Ye=W;switch(xe=i,ke=s,Ye.tag){case 1:if(qe=Ye.payload,typeof qe=="function"){Ee=qe.call(ke,Ee,xe);break e}Ee=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ye.payload,xe=typeof qe=="function"?qe.call(ke,Ee,xe):qe,xe==null)break e;Ee=v({},Ee,xe);break e;case 2:Zi=!0}}W.callback!==null&&W.lane!==0&&(t.flags|=64,xe=d.effects,xe===null?d.effects=[W]:xe.push(W))}else ke={eventTime:ke,lane:xe,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Me===null?(ce=Me=ke,Z=Ee):Me=Me.next=ke,C|=xe;if(W=W.next,W===null){if(W=d.shared.pending,W===null)break;xe=W,W=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(Me===null&&(Z=Ee),d.baseState=Z,d.firstBaseUpdate=ce,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do C|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);br|=C,t.lanes=C,t.memoizedState=Ee}}function _h(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=s,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var ms={},ui=Yi(ms),gs=Yi(ms),vs=Yi(ms);function Cr(t){if(t===ms)throw Error(n(174));return t}function Lu(t,i){switch(It(vs,i),It(gs,t),It(ui,ms),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ze(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ze(i,t)}Ot(ui),It(ui,i)}function go(){Ot(ui),Ot(gs),Ot(vs)}function yh(t){Cr(vs.current);var i=Cr(ui.current),s=ze(i,t.type);i!==s&&(It(gs,t),It(ui,s))}function Du(t){gs.current===t&&(Ot(ui),Ot(gs))}var zt=Yi(0);function Aa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Iu=[];function Uu(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Ca=k.ReactCurrentDispatcher,Nu=k.ReactCurrentBatchConfig,Rr=0,Bt=null,Kt=null,en=null,Ra=!1,_s=!1,ys=0,Kv=0;function fn(){throw Error(n(321))}function Ou(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Yn(t[s],i[s]))return!1;return!0}function Fu(t,i,s,u,d,h){if(Rr=h,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?e_:t_,t=s(u,d),_s){h=0;do{if(_s=!1,ys=0,25<=h)throw Error(n(301));h+=1,en=Kt=null,i.updateQueue=null,Ca.current=n_,t=s(u,d)}while(_s)}if(Ca.current=La,i=Kt!==null&&Kt.next!==null,Rr=0,en=Kt=Bt=null,Ra=!1,i)throw Error(n(300));return t}function ku(){var t=ys!==0;return ys=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Bt.memoizedState=en=t:en=en.next=t,en}function Vn(){if(Kt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=en===null?Bt.memoizedState:en.next;if(i!==null)en=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},en===null?Bt.memoizedState=en=t:en=en.next=t}return en}function Ss(t,i){return typeof i=="function"?i(t):i}function zu(t){var i=Vn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=Kt,d=u.baseQueue,h=s.pending;if(h!==null){if(d!==null){var C=d.next;d.next=h.next,h.next=C}u.baseQueue=d=h,s.pending=null}if(d!==null){h=d.next,u=u.baseState;var W=C=null,Z=null,ce=h;do{var Me=ce.lane;if((Rr&Me)===Me)Z!==null&&(Z=Z.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),u=ce.hasEagerState?ce.eagerState:t(u,ce.action);else{var Ee={lane:Me,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};Z===null?(W=Z=Ee,C=u):Z=Z.next=Ee,Bt.lanes|=Me,br|=Me}ce=ce.next}while(ce!==null&&ce!==h);Z===null?C=u:Z.next=W,Yn(u,i.memoizedState)||(wn=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=Z,s.lastRenderedState=u}if(t=s.interleaved,t!==null){d=t;do h=d.lane,Bt.lanes|=h,br|=h,d=d.next;while(d!==t)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Bu(t){var i=Vn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=s.dispatch,d=s.pending,h=i.memoizedState;if(d!==null){s.pending=null;var C=d=d.next;do h=t(h,C.action),C=C.next;while(C!==d);Yn(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,u]}function Sh(){}function xh(t,i){var s=Bt,u=Vn(),d=i(),h=!Yn(u.memoizedState,d);if(h&&(u.memoizedState=d,wn=!0),u=u.queue,Hu(Th.bind(null,s,u,t),[t]),u.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,xs(9,Eh.bind(null,s,u,d,i),void 0,null),tn===null)throw Error(n(349));Rr&30||Mh(s,i,d)}return d}function Mh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Eh(t,i,s,u){i.value=s,i.getSnapshot=u,wh(i)&&Ah(t)}function Th(t,i,s){return s(function(){wh(i)&&Ah(t)})}function wh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Yn(t,s)}catch{return!0}}function Ah(t){var i=Mi(t,1);i!==null&&Jn(i,t,1,-1)}function Ch(t){var i=ci();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:t},i.queue=t,t=t.dispatch=Jv.bind(null,Bt,t),[i.memoizedState,t]}function xs(t,i,s,u){return t={tag:t,create:i,destroy:s,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(u=s.next,s.next=t,t.next=u,i.lastEffect=t)),t}function Rh(){return Vn().memoizedState}function ba(t,i,s,u){var d=ci();Bt.flags|=t,d.memoizedState=xs(1|i,s,void 0,u===void 0?null:u)}function Pa(t,i,s,u){var d=Vn();u=u===void 0?null:u;var h=void 0;if(Kt!==null){var C=Kt.memoizedState;if(h=C.destroy,u!==null&&Ou(u,C.deps)){d.memoizedState=xs(i,s,h,u);return}}Bt.flags|=t,d.memoizedState=xs(1|i,s,h,u)}function bh(t,i){return ba(8390656,8,t,i)}function Hu(t,i){return Pa(2048,8,t,i)}function Ph(t,i){return Pa(4,2,t,i)}function Lh(t,i){return Pa(4,4,t,i)}function Dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ih(t,i,s){return s=s!=null?s.concat([t]):null,Pa(4,4,Dh.bind(null,i,t),s)}function Vu(){}function Uh(t,i){var s=Vn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&Ou(i,u[1])?u[0]:(s.memoizedState=[t,i],t)}function Nh(t,i){var s=Vn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&Ou(i,u[1])?u[0]:(t=t(),s.memoizedState=[t,i],t)}function Oh(t,i,s){return Rr&21?(Yn(s,i)||(s=_n(),Bt.lanes|=s,br|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=s)}function Zv(t,i){var s=_t;_t=s!==0&&4>s?s:4,t(!0);var u=Nu.transition;Nu.transition={};try{t(!1),i()}finally{_t=s,Nu.transition=u}}function Fh(){return Vn().memoizedState}function Qv(t,i,s){var u=nr(t);if(s={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null},kh(t))zh(i,s);else if(s=mh(t,i,s,u),s!==null){var d=Sn();Jn(s,t,u,d),Bh(s,i,u)}}function Jv(t,i,s){var u=nr(t),d={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null};if(kh(t))zh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var C=i.lastRenderedState,W=h(C,s);if(d.hasEagerState=!0,d.eagerState=W,Yn(W,C)){var Z=i.interleaved;Z===null?(d.next=d,bu(i)):(d.next=Z.next,Z.next=d),i.interleaved=d;return}}catch{}finally{}s=mh(t,i,d,u),s!==null&&(d=Sn(),Jn(s,t,u,d),Bh(s,i,u))}}function kh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function zh(t,i){_s=Ra=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Bh(t,i,s){if(s&4194240){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,xr(t,s)}}var La={readContext:Hn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},e_={readContext:Hn,useCallback:function(t,i){return ci().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:bh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,ba(4194308,4,Dh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ba(4194308,4,t,i)},useInsertionEffect:function(t,i){return ba(4,2,t,i)},useMemo:function(t,i){var s=ci();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var u=ci();return i=s!==void 0?s(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Qv.bind(null,Bt,t),[u.memoizedState,t]},useRef:function(t){var i=ci();return t={current:t},i.memoizedState=t},useState:Ch,useDebugValue:Vu,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Ch(!1),i=t[0];return t=Zv.bind(null,t[1]),ci().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var u=Bt,d=ci();if(kt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),tn===null)throw Error(n(349));Rr&30||Mh(u,i,s)}d.memoizedState=s;var h={value:s,getSnapshot:i};return d.queue=h,bh(Th.bind(null,u,h,t),[t]),u.flags|=2048,xs(9,Eh.bind(null,u,h,s,i),void 0,null),s},useId:function(){var t=ci(),i=tn.identifierPrefix;if(kt){var s=xi,u=Si;s=(u&~(1<<32-wt(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=ys++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Kv++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},t_={readContext:Hn,useCallback:Uh,useContext:Hn,useEffect:Hu,useImperativeHandle:Ih,useInsertionEffect:Ph,useLayoutEffect:Lh,useMemo:Nh,useReducer:zu,useRef:Rh,useState:function(){return zu(Ss)},useDebugValue:Vu,useDeferredValue:function(t){var i=Vn();return Oh(i,Kt.memoizedState,t)},useTransition:function(){var t=zu(Ss)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:xh,useId:Fh,unstable_isNewReconciler:!1},n_={readContext:Hn,useCallback:Uh,useContext:Hn,useEffect:Hu,useImperativeHandle:Ih,useInsertionEffect:Ph,useLayoutEffect:Lh,useMemo:Nh,useReducer:Bu,useRef:Rh,useState:function(){return Bu(Ss)},useDebugValue:Vu,useDeferredValue:function(t){var i=Vn();return Kt===null?i.memoizedState=t:Oh(i,Kt.memoizedState,t)},useTransition:function(){var t=Bu(Ss)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:xh,useId:Fh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=v({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Gu(t,i,s,u){i=t.memoizedState,s=s(u,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Da={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var u=Sn(),d=nr(t),h=Ei(u,d);h.payload=i,s!=null&&(h.callback=s),i=Qi(t,h,d),i!==null&&(Jn(i,t,d,u),Ta(i,t,d))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var u=Sn(),d=nr(t),h=Ei(u,d);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Qi(t,h,d),i!==null&&(Jn(i,t,d,u),Ta(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Sn(),u=nr(t),d=Ei(s,u);d.tag=2,i!=null&&(d.callback=i),i=Qi(t,d,u),i!==null&&(Jn(i,t,u,s),Ta(i,t,u))}};function Hh(t,i,s,u,d,h,C){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,h,C):i.prototype&&i.prototype.isPureReactComponent?!as(s,u)||!as(d,h):!0}function Vh(t,i,s){var u=!1,d=$i,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(d=Tn(i)?Er:cn.current,u=i.contextTypes,h=(u=u!=null)?lo(t,d):$i),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Gh(t,i,s,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==t&&Da.enqueueReplaceState(i,i.state,null)}function Wu(t,i,s,u){var d=t.stateNode;d.props=s,d.state=t.memoizedState,d.refs={},Pu(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Hn(h):(h=Tn(i)?Er:cn.current,d.context=lo(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Gu(t,i,h,s),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Da.enqueueReplaceState(d,d.state,null),wa(t,s,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function vo(t,i){try{var s="",u=i;do s+=Q(u),u=u.return;while(u);var d=s}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Xu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function ju(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var i_=typeof WeakMap=="function"?WeakMap:Map;function Wh(t,i,s){s=Ei(-1,s),s.tag=3,s.payload={element:null};var u=i.value;return s.callback=function(){za||(za=!0,ac=u),ju(t,i)},s}function Xh(t,i,s){s=Ei(-1,s),s.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;s.payload=function(){return u(d)},s.callback=function(){ju(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){ju(t,i),typeof u!="function"&&(er===null?er=new Set([this]):er.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),s}function jh(t,i,s){var u=t.pingCache;if(u===null){u=t.pingCache=new i_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(s)||(d.add(s),t=v_.bind(null,t,i,s),i.then(t,t))}function qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Yh(t,i,s,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ei(-1,1),i.tag=2,Qi(s,i,1))),s.lanes|=1),t)}var r_=k.ReactCurrentOwner,wn=!1;function yn(t,i,s,u){i.child=t===null?ph(i,null,s,u):ho(i,t.child,s,u)}function $h(t,i,s,u,d){s=s.render;var h=i.ref;return mo(i,d),u=Fu(t,i,s,u,h,d),s=ku(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ti(t,i,d)):(kt&&s&&Su(i),i.flags|=1,yn(t,i,u,d),i.child)}function Kh(t,i,s,u,d){if(t===null){var h=s.type;return typeof h=="function"&&!pc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Zh(t,i,h,u,d)):(t=Xa(s.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&d)){var C=h.memoizedProps;if(s=s.compare,s=s!==null?s:as,s(C,u)&&t.ref===i.ref)return Ti(t,i,d)}return i.flags|=1,t=rr(h,u),t.ref=i.ref,t.return=i,i.child=t}function Zh(t,i,s,u,d){if(t!==null){var h=t.memoizedProps;if(as(h,u)&&t.ref===i.ref)if(wn=!1,i.pendingProps=u=h,(t.lanes&d)!==0)t.flags&131072&&(wn=!0);else return i.lanes=t.lanes,Ti(t,i,d)}return qu(t,i,s,u,d)}function Qh(t,i,s){var u=i.pendingProps,d=u.children,h=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(yo,On),On|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(yo,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:s,It(yo,On),On|=u}else h!==null?(u=h.baseLanes|s,i.memoizedState=null):u=s,It(yo,On),On|=u;return yn(t,i,d,s),i.child}function Jh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function qu(t,i,s,u,d){var h=Tn(s)?Er:cn.current;return h=lo(i,h),mo(i,d),s=Fu(t,i,s,u,h,d),u=ku(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ti(t,i,d)):(kt&&u&&Su(i),i.flags|=1,yn(t,i,s,d),i.child)}function ep(t,i,s,u,d){if(Tn(s)){var h=!0;ga(i)}else h=!1;if(mo(i,d),i.stateNode===null)Ua(t,i),Vh(i,s,u),Wu(i,s,u,d),u=!0;else if(t===null){var C=i.stateNode,W=i.memoizedProps;C.props=W;var Z=C.context,ce=s.contextType;typeof ce=="object"&&ce!==null?ce=Hn(ce):(ce=Tn(s)?Er:cn.current,ce=lo(i,ce));var Me=s.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ee||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(W!==u||Z!==ce)&&Gh(i,C,u,ce),Zi=!1;var xe=i.memoizedState;C.state=xe,wa(i,u,C,d),Z=i.memoizedState,W!==u||xe!==Z||En.current||Zi?(typeof Me=="function"&&(Gu(i,s,Me,u),Z=i.memoizedState),(W=Zi||Hh(i,s,W,u,xe,Z,ce))?(Ee||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Z),C.props=u,C.state=Z,C.context=ce,u=W):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,gh(t,i),W=i.memoizedProps,ce=i.type===i.elementType?W:Kn(i.type,W),C.props=ce,Ee=i.pendingProps,xe=C.context,Z=s.contextType,typeof Z=="object"&&Z!==null?Z=Hn(Z):(Z=Tn(s)?Er:cn.current,Z=lo(i,Z));var ke=s.getDerivedStateFromProps;(Me=typeof ke=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(W!==Ee||xe!==Z)&&Gh(i,C,u,Z),Zi=!1,xe=i.memoizedState,C.state=xe,wa(i,u,C,d);var qe=i.memoizedState;W!==Ee||xe!==qe||En.current||Zi?(typeof ke=="function"&&(Gu(i,s,ke,u),qe=i.memoizedState),(ce=Zi||Hh(i,s,ce,u,xe,qe,Z)||!1)?(Me||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,qe,Z),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,qe,Z)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||W===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||W===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=qe),C.props=u,C.state=qe,C.context=Z,u=ce):(typeof C.componentDidUpdate!="function"||W===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||W===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),u=!1)}return Yu(t,i,s,u,h,d)}function Yu(t,i,s,u,d,h){Jh(t,i);var C=(i.flags&128)!==0;if(!u&&!C)return d&&oh(i,s,!1),Ti(t,i,h);u=i.stateNode,r_.current=i;var W=C&&typeof s.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&C?(i.child=ho(i,t.child,null,h),i.child=ho(i,null,W,h)):yn(t,i,W,h),i.memoizedState=u.state,d&&oh(i,s,!0),i.child}function tp(t){var i=t.stateNode;i.pendingContext?ih(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ih(t,i.context,!1),Lu(t,i.containerInfo)}function np(t,i,s,u,d){return fo(),Tu(d),i.flags|=256,yn(t,i,s,u),i.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function ip(t,i,s){var u=i.pendingProps,d=zt.current,h=!1,C=(i.flags&128)!==0,W;if((W=C)||(W=t!==null&&t.memoizedState===null?!1:(d&2)!==0),W?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),It(zt,d&1),t===null)return Eu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(C=u.children,t=u.fallback,h?(u=i.mode,h=i.child,C={mode:"hidden",children:C},!(u&1)&&h!==null?(h.childLanes=0,h.pendingProps=C):h=ja(C,u,0,null),t=Ir(t,u,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ku(s),i.memoizedState=$u,t):Zu(i,C));if(d=t.memoizedState,d!==null&&(W=d.dehydrated,W!==null))return o_(t,i,C,u,W,d,s);if(h){h=u.fallback,C=i.mode,d=t.child,W=d.sibling;var Z={mode:"hidden",children:u.children};return!(C&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=Z,i.deletions=null):(u=rr(d,Z),u.subtreeFlags=d.subtreeFlags&14680064),W!==null?h=rr(W,h):(h=Ir(h,C,s,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,C=t.child.memoizedState,C=C===null?Ku(s):{baseLanes:C.baseLanes|s,cachePool:null,transitions:C.transitions},h.memoizedState=C,h.childLanes=t.childLanes&~s,i.memoizedState=$u,u}return h=t.child,t=h.sibling,u=rr(h,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=s),u.return=i,u.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=u,i.memoizedState=null,u}function Zu(t,i){return i=ja({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ia(t,i,s,u){return u!==null&&Tu(u),ho(i,t.child,null,s),t=Zu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function o_(t,i,s,u,d,h,C){if(s)return i.flags&256?(i.flags&=-257,u=Xu(Error(n(422))),Ia(t,i,C,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=u.fallback,d=i.mode,u=ja({mode:"visible",children:u.children},d,0,null),h=Ir(h,d,C,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,i.mode&1&&ho(i,t.child,null,C),i.child.memoizedState=Ku(C),i.memoizedState=$u,h);if(!(i.mode&1))return Ia(t,i,C,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var W=u.dgst;return u=W,h=Error(n(419)),u=Xu(h,u,void 0),Ia(t,i,C,u)}if(W=(C&t.childLanes)!==0,wn||W){if(u=tn,u!==null){switch(C&-C){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|C)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Mi(t,d),Jn(u,t,d,-1))}return hc(),u=Xu(Error(n(421))),Ia(t,i,C,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=__.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,Nn=qi(d.nextSibling),Un=i,kt=!0,$n=null,t!==null&&(zn[Bn++]=Si,zn[Bn++]=xi,zn[Bn++]=Tr,Si=t.id,xi=t.overflow,Tr=i),i=Zu(i,u.children),i.flags|=4096,i)}function rp(t,i,s){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Ru(t.return,i,s)}function Qu(t,i,s,u,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=s,h.tailMode=d)}function op(t,i,s){var u=i.pendingProps,d=u.revealOrder,h=u.tail;if(yn(t,i,u.children,s),u=zt.current,u&2)u=u&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,s,i);else if(t.tag===19)rp(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(It(zt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&Aa(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),Qu(i,!1,d,s,h);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Aa(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}Qu(i,!0,s,null,h);break;case"together":Qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ua(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ti(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),br|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=rr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=rr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function s_(t,i,s){switch(i.tag){case 3:tp(i),fo();break;case 5:yh(i);break;case 1:Tn(i.type)&&ga(i);break;case 4:Lu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(Ma,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):s&i.child.childLanes?ip(t,i,s):(It(zt,zt.current&1),t=Ti(t,i,s),t!==null?t.sibling:null);It(zt,zt.current&1);break;case 19:if(u=(s&i.childLanes)!==0,t.flags&128){if(u)return op(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(zt,zt.current),u)break;return null;case 22:case 23:return i.lanes=0,Qh(t,i,s)}return Ti(t,i,s)}var sp,Ju,ap,lp;sp=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ju=function(){},ap=function(t,i,s,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,Cr(ui.current);var h=null;switch(s){case"input":d=j(t,d),u=j(t,u),h=[];break;case"select":d=v({},d,{value:void 0}),u=v({},u,{value:void 0}),h=[];break;case"textarea":d=P(t,d),u=P(t,u),h=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=ha)}gt(s,u);var C;s=null;for(ce in d)if(!u.hasOwnProperty(ce)&&d.hasOwnProperty(ce)&&d[ce]!=null)if(ce==="style"){var W=d[ce];for(C in W)W.hasOwnProperty(C)&&(s||(s={}),s[C]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(a.hasOwnProperty(ce)?h||(h=[]):(h=h||[]).push(ce,null));for(ce in u){var Z=u[ce];if(W=d!=null?d[ce]:void 0,u.hasOwnProperty(ce)&&Z!==W&&(Z!=null||W!=null))if(ce==="style")if(W){for(C in W)!W.hasOwnProperty(C)||Z&&Z.hasOwnProperty(C)||(s||(s={}),s[C]="");for(C in Z)Z.hasOwnProperty(C)&&W[C]!==Z[C]&&(s||(s={}),s[C]=Z[C])}else s||(h||(h=[]),h.push(ce,s)),s=Z;else ce==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,W=W?W.__html:void 0,Z!=null&&W!==Z&&(h=h||[]).push(ce,Z)):ce==="children"?typeof Z!="string"&&typeof Z!="number"||(h=h||[]).push(ce,""+Z):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(a.hasOwnProperty(ce)?(Z!=null&&ce==="onScroll"&&Nt("scroll",t),h||W===Z||(h=[])):(h=h||[]).push(ce,Z))}s&&(h=h||[]).push("style",s);var ce=h;(i.updateQueue=ce)&&(i.flags|=4)}},lp=function(t,i,s,u){s!==u&&(i.flags|=4)};function Ms(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,u=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=s,i}function a_(t,i,s){var u=i.pendingProps;switch(xu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Tn(i.type)&&ma(),dn(i),null;case 3:return u=i.stateNode,go(),Ot(En),Ot(cn),Uu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,$n!==null&&(cc($n),$n=null))),Ju(t,i),dn(i),null;case 5:Du(i);var d=Cr(vs.current);if(s=i.type,t!==null&&i.stateNode!=null)ap(t,i,s,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Cr(ui.current),Sa(i)){u=i.stateNode,s=i.type;var h=i.memoizedProps;switch(u[li]=i,u[ds]=h,t=(i.mode&1)!==0,s){case"dialog":Nt("cancel",u),Nt("close",u);break;case"iframe":case"object":case"embed":Nt("load",u);break;case"video":case"audio":for(d=0;d<us.length;d++)Nt(us[d],u);break;case"source":Nt("error",u);break;case"img":case"image":case"link":Nt("error",u),Nt("load",u);break;case"details":Nt("toggle",u);break;case"input":ut(u,h),Nt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",u);break;case"textarea":ae(u,h),Nt("invalid",u)}gt(s,h),d=null;for(var C in h)if(h.hasOwnProperty(C)){var W=h[C];C==="children"?typeof W=="string"?u.textContent!==W&&(h.suppressHydrationWarning!==!0&&da(u.textContent,W,t),d=["children",W]):typeof W=="number"&&u.textContent!==""+W&&(h.suppressHydrationWarning!==!0&&da(u.textContent,W,t),d=["children",""+W]):a.hasOwnProperty(C)&&W!=null&&C==="onScroll"&&Nt("scroll",u)}switch(s){case"input":Ze(u),be(u,h,!0);break;case"textarea":Ze(u),ye(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=ha)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=me(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=C.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=C.createElement(s,{is:u.is}):(t=C.createElement(s),s==="select"&&(C=t,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):t=C.createElementNS(t,s),t[li]=i,t[ds]=u,sp(t,i,!1,!1),i.stateNode=t;e:{switch(C=ct(s,u),s){case"dialog":Nt("cancel",t),Nt("close",t),d=u;break;case"iframe":case"object":case"embed":Nt("load",t),d=u;break;case"video":case"audio":for(d=0;d<us.length;d++)Nt(us[d],t);d=u;break;case"source":Nt("error",t),d=u;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),d=u;break;case"details":Nt("toggle",t),d=u;break;case"input":ut(t,u),d=j(t,u),Nt("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=v({},u,{value:void 0}),Nt("invalid",t);break;case"textarea":ae(t,u),d=P(t,u),Nt("invalid",t);break;default:d=u}gt(s,d),W=d;for(h in W)if(W.hasOwnProperty(h)){var Z=W[h];h==="style"?ot(t,Z):h==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&He(t,Z)):h==="children"?typeof Z=="string"?(s!=="textarea"||Z!=="")&&mt(t,Z):typeof Z=="number"&&mt(t,""+Z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?Z!=null&&h==="onScroll"&&Nt("scroll",t):Z!=null&&V(t,h,Z,C))}switch(s){case"input":Ze(t),be(t,u,!1);break;case"textarea":Ze(t),ye(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ge(u.value));break;case"select":t.multiple=!!u.multiple,h=u.value,h!=null?z(t,!!u.multiple,h,!1):u.defaultValue!=null&&z(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ha)}switch(s){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)lp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(s=Cr(vs.current),Cr(ui.current),Sa(i)){if(u=i.stateNode,s=i.memoizedProps,u[li]=i,(h=u.nodeValue!==s)&&(t=Un,t!==null))switch(t.tag){case 3:da(u.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(u.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else u=(s.nodeType===9?s:s.ownerDocument).createTextNode(u),u[li]=i,i.stateNode=u}return dn(i),null;case 13:if(Ot(zt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Nn!==null&&i.mode&1&&!(i.flags&128))fh(),fo(),i.flags|=98560,h=!1;else if(h=Sa(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[li]=i}else fo(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else $n!==null&&(cc($n),$n=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(t===null||zt.current&1?Zt===0&&(Zt=3):hc())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return go(),Ju(t,i),t===null&&cs(i.stateNode.containerInfo),dn(i),null;case 10:return Cu(i.type._context),dn(i),null;case 17:return Tn(i.type)&&ma(),dn(i),null;case 19:if(Ot(zt),h=i.memoizedState,h===null)return dn(i),null;if(u=(i.flags&128)!==0,C=h.rendering,C===null)if(u)Ms(h,!1);else{if(Zt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(C=Aa(t),C!==null){for(i.flags|=128,Ms(h,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=s,s=i.child;s!==null;)h=s,t=u,h.flags&=14680066,C=h.alternate,C===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=C.childLanes,h.lanes=C.lanes,h.child=C.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=C.memoizedProps,h.memoizedState=C.memoizedState,h.updateQueue=C.updateQueue,h.type=C.type,t=C.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return It(zt,zt.current&1|2),i.child}t=t.sibling}h.tail!==null&&J()>So&&(i.flags|=128,u=!0,Ms(h,!1),i.lanes=4194304)}else{if(!u)if(t=Aa(C),t!==null){if(i.flags|=128,u=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ms(h,!0),h.tail===null&&h.tailMode==="hidden"&&!C.alternate&&!kt)return dn(i),null}else 2*J()-h.renderingStartTime>So&&s!==1073741824&&(i.flags|=128,u=!0,Ms(h,!1),i.lanes=4194304);h.isBackwards?(C.sibling=i.child,i.child=C):(s=h.last,s!==null?s.sibling=C:i.child=C,h.last=C)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=J(),i.sibling=null,s=zt.current,It(zt,u?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return dc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?On&1073741824&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function l_(t,i){switch(xu(i),i.tag){case 1:return Tn(i.type)&&ma(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return go(),Ot(En),Ot(cn),Uu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Du(i),null;case 13:if(Ot(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(zt),null;case 4:return go(),null;case 10:return Cu(i.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var Na=!1,hn=!1,u_=typeof WeakSet=="function"?WeakSet:Set,We=null;function _o(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(u){Vt(t,i,u)}else s.current=null}function ec(t,i,s){try{s()}catch(u){Vt(t,i,u)}}var up=!1;function c_(t,i){if(du=ta,t=Hd(),ru(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var d=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var C=0,W=-1,Z=-1,ce=0,Me=0,Ee=t,xe=null;t:for(;;){for(var ke;Ee!==s||d!==0&&Ee.nodeType!==3||(W=C+d),Ee!==h||u!==0&&Ee.nodeType!==3||(Z=C+u),Ee.nodeType===3&&(C+=Ee.nodeValue.length),(ke=Ee.firstChild)!==null;)xe=Ee,Ee=ke;for(;;){if(Ee===t)break t;if(xe===s&&++ce===d&&(W=C),xe===h&&++Me===u&&(Z=C),(ke=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=ke}s=W===-1||Z===-1?null:{start:W,end:Z}}else s=null}s=s||{start:0,end:0}}else s=null;for(hu={focusedElem:t,selectionRange:s},ta=!1,We=i;We!==null;)if(i=We,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,We=t;else for(;We!==null;){i=We;try{var qe=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ye=qe.memoizedProps,Wt=qe.memoizedState,se=i.stateNode,ee=se.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:Kn(i.type,Ye),Wt);se.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Vt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,We=t;break}We=i.return}return qe=up,up=!1,qe}function Es(t,i,s){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&ec(i,s,h)}d=d.next}while(d!==u)}}function Oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var u=s.create;s.destroy=u()}s=s.next}while(s!==i)}}function tc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function cp(t){var i=t.alternate;i!==null&&(t.alternate=null,cp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[li],delete i[ds],delete i[vu],delete i[jv],delete i[qv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fp(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ha));else if(u!==4&&(t=t.child,t!==null))for(nc(t,i,s),t=t.sibling;t!==null;)nc(t,i,s),t=t.sibling}function ic(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(ic(t,i,s),t=t.sibling;t!==null;)ic(t,i,s),t=t.sibling}var sn=null,Zn=!1;function Ji(t,i,s){for(s=s.child;s!==null;)hp(t,i,s),s=s.sibling}function hp(t,i,s){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Je,s)}catch{}switch(s.tag){case 5:hn||_o(s,i);case 6:var u=sn,d=Zn;sn=null,Ji(t,i,s),sn=u,Zn=d,sn!==null&&(Zn?(t=sn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):sn.removeChild(s.stateNode));break;case 18:sn!==null&&(Zn?(t=sn,s=s.stateNode,t.nodeType===8?gu(t.parentNode,s):t.nodeType===1&&gu(t,s),ts(t)):gu(sn,s.stateNode));break;case 4:u=sn,d=Zn,sn=s.stateNode.containerInfo,Zn=!0,Ji(t,i,s),sn=u,Zn=d;break;case 0:case 11:case 14:case 15:if(!hn&&(u=s.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var h=d,C=h.destroy;h=h.tag,C!==void 0&&(h&2||h&4)&&ec(s,i,C),d=d.next}while(d!==u)}Ji(t,i,s);break;case 1:if(!hn&&(_o(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=s.memoizedProps,u.state=s.memoizedState,u.componentWillUnmount()}catch(W){Vt(s,i,W)}Ji(t,i,s);break;case 21:Ji(t,i,s);break;case 22:s.mode&1?(hn=(u=hn)||s.memoizedState!==null,Ji(t,i,s),hn=u):Ji(t,i,s);break;default:Ji(t,i,s)}}function pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new u_),i.forEach(function(u){var d=y_.bind(null,t,u);s.has(u)||(s.add(u),u.then(d,d))})}}function Qn(t,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var d=s[u];try{var h=t,C=i,W=C;e:for(;W!==null;){switch(W.tag){case 5:sn=W.stateNode,Zn=!1;break e;case 3:sn=W.stateNode.containerInfo,Zn=!0;break e;case 4:sn=W.stateNode.containerInfo,Zn=!0;break e}W=W.return}if(sn===null)throw Error(n(160));hp(h,C,d),sn=null,Zn=!1;var Z=d.alternate;Z!==null&&(Z.return=null),d.return=null}catch(ce){Vt(d,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mp(i,t),i=i.sibling}function mp(t,i){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(i,t),fi(t),u&4){try{Es(3,t,t.return),Oa(3,t)}catch(Ye){Vt(t,t.return,Ye)}try{Es(5,t,t.return)}catch(Ye){Vt(t,t.return,Ye)}}break;case 1:Qn(i,t),fi(t),u&512&&s!==null&&_o(s,s.return);break;case 5:if(Qn(i,t),fi(t),u&512&&s!==null&&_o(s,s.return),t.flags&32){var d=t.stateNode;try{mt(d,"")}catch(Ye){Vt(t,t.return,Ye)}}if(u&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,C=s!==null?s.memoizedProps:h,W=t.type,Z=t.updateQueue;if(t.updateQueue=null,Z!==null)try{W==="input"&&h.type==="radio"&&h.name!=null&&Qe(d,h),ct(W,C);var ce=ct(W,h);for(C=0;C<Z.length;C+=2){var Me=Z[C],Ee=Z[C+1];Me==="style"?ot(d,Ee):Me==="dangerouslySetInnerHTML"?He(d,Ee):Me==="children"?mt(d,Ee):V(d,Me,Ee,ce)}switch(W){case"input":Le(d,h);break;case"textarea":_e(d,h);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var ke=h.value;ke!=null?z(d,!!h.multiple,ke,!1):xe!==!!h.multiple&&(h.defaultValue!=null?z(d,!!h.multiple,h.defaultValue,!0):z(d,!!h.multiple,h.multiple?[]:"",!1))}d[ds]=h}catch(Ye){Vt(t,t.return,Ye)}}break;case 6:if(Qn(i,t),fi(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(Ye){Vt(t,t.return,Ye)}}break;case 3:if(Qn(i,t),fi(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{ts(i.containerInfo)}catch(Ye){Vt(t,t.return,Ye)}break;case 4:Qn(i,t),fi(t);break;case 13:Qn(i,t),fi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(sc=J())),u&4&&pp(t);break;case 22:if(Me=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(ce=hn)||Me,Qn(i,t),hn=ce):Qn(i,t),fi(t),u&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!Me&&t.mode&1)for(We=t,Me=t.child;Me!==null;){for(Ee=We=Me;We!==null;){switch(xe=We,ke=xe.child,xe.tag){case 0:case 11:case 14:case 15:Es(4,xe,xe.return);break;case 1:_o(xe,xe.return);var qe=xe.stateNode;if(typeof qe.componentWillUnmount=="function"){u=xe,s=xe.return;try{i=u,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(Ye){Vt(u,s,Ye)}}break;case 5:_o(xe,xe.return);break;case 22:if(xe.memoizedState!==null){_p(Ee);continue}}ke!==null?(ke.return=xe,We=ke):_p(Ee)}Me=Me.sibling}e:for(Me=null,Ee=t;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{d=Ee.stateNode,ce?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(W=Ee.stateNode,Z=Ee.memoizedProps.style,C=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,W.style.display=tt("display",C))}catch(Ye){Vt(t,t.return,Ye)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=ce?"":Ee.memoizedProps}catch(Ye){Vt(t,t.return,Ye)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Qn(i,t),fi(t),u&4&&pp(t);break;case 21:break;default:Qn(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(fp(s)){var u=s;break e}s=s.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(mt(d,""),u.flags&=-33);var h=dp(t);ic(t,h,d);break;case 3:case 4:var C=u.stateNode.containerInfo,W=dp(t);nc(t,W,C);break;default:throw Error(n(161))}}catch(Z){Vt(t,t.return,Z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function f_(t,i,s){We=t,gp(t)}function gp(t,i,s){for(var u=(t.mode&1)!==0;We!==null;){var d=We,h=d.child;if(d.tag===22&&u){var C=d.memoizedState!==null||Na;if(!C){var W=d.alternate,Z=W!==null&&W.memoizedState!==null||hn;W=Na;var ce=hn;if(Na=C,(hn=Z)&&!ce)for(We=d;We!==null;)C=We,Z=C.child,C.tag===22&&C.memoizedState!==null?yp(d):Z!==null?(Z.return=C,We=Z):yp(d);for(;h!==null;)We=h,gp(h),h=h.sibling;We=d,Na=W,hn=ce}vp(t)}else d.subtreeFlags&8772&&h!==null?(h.return=d,We=h):vp(t)}}function vp(t){for(;We!==null;){var i=We;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:hn||Oa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!hn)if(s===null)u.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:Kn(i.type,s.memoizedProps);u.componentDidUpdate(d,s.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&_h(i,h,u);break;case 3:var C=i.updateQueue;if(C!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}_h(i,C,s)}break;case 5:var W=i.stateNode;if(s===null&&i.flags&4){s=W;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&s.focus();break;case"img":Z.src&&(s.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Me=ce.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&ts(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&tc(i)}catch(xe){Vt(i,i.return,xe)}}if(i===t){We=null;break}if(s=i.sibling,s!==null){s.return=i.return,We=s;break}We=i.return}}function _p(t){for(;We!==null;){var i=We;if(i===t){We=null;break}var s=i.sibling;if(s!==null){s.return=i.return,We=s;break}We=i.return}}function yp(t){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Oa(4,i)}catch(Z){Vt(i,s,Z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(Z){Vt(i,d,Z)}}var h=i.return;try{tc(i)}catch(Z){Vt(i,h,Z)}break;case 5:var C=i.return;try{tc(i)}catch(Z){Vt(i,C,Z)}}}catch(Z){Vt(i,i.return,Z)}if(i===t){We=null;break}var W=i.sibling;if(W!==null){W.return=i.return,We=W;break}We=i.return}}var d_=Math.ceil,Fa=k.ReactCurrentDispatcher,rc=k.ReactCurrentOwner,Gn=k.ReactCurrentBatchConfig,Et=0,tn=null,qt=null,an=0,On=0,yo=Yi(0),Zt=0,Ts=null,br=0,ka=0,oc=0,ws=null,An=null,sc=0,So=1/0,wi=null,za=!1,ac=null,er=null,Ba=!1,tr=null,Ha=0,As=0,lc=null,Va=-1,Ga=0;function Sn(){return Et&6?J():Va!==-1?Va:Va=J()}function nr(t){return t.mode&1?Et&2&&an!==0?an&-an:$v.transition!==null?(Ga===0&&(Ga=_n()),Ga):(t=_t,t!==0||(t=window.event,t=t===void 0?16:xd(t.type)),t):1}function Jn(t,i,s,u){if(50<As)throw As=0,lc=null,Error(n(185));Gt(t,s,u),(!(Et&2)||t!==tn)&&(t===tn&&(!(Et&2)&&(ka|=s),Zt===4&&ir(t,an)),Cn(t,u),s===1&&Et===0&&!(i.mode&1)&&(So=J()+500,va&&Ki()))}function Cn(t,i){var s=t.callbackNode;Sr(t,i);var u=qn(t,t===tn?an:0);if(u===0)s!==null&&ie(s),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(s!=null&&ie(s),i===1)t.tag===0?Yv(xp.bind(null,t)):sh(xp.bind(null,t)),Wv(function(){!(Et&6)&&Ki()}),s=null;else{switch(hd(u)){case 1:s=Ie;break;case 4:s=Be;break;case 16:s=Ge;break;case 536870912:s=at;break;default:s=Ge}s=bp(s,Sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Sp(t,i){if(Va=-1,Ga=0,Et&6)throw Error(n(327));var s=t.callbackNode;if(xo()&&t.callbackNode!==s)return null;var u=qn(t,t===tn?an:0);if(u===0)return null;if(u&30||u&t.expiredLanes||i)i=Wa(t,u);else{i=u;var d=Et;Et|=2;var h=Ep();(tn!==t||an!==i)&&(wi=null,So=J()+500,Lr(t,i));do try{m_();break}catch(W){Mp(t,W)}while(!0);Au(),Fa.current=h,Et=d,qt!==null?i=0:(tn=null,an=0,i=Zt)}if(i!==0){if(i===2&&(d=Pt(t),d!==0&&(u=d,i=uc(t,d))),i===1)throw s=Ts,Lr(t,0),ir(t,u),Cn(t,J()),s;if(i===6)ir(t,u);else{if(d=t.current.alternate,!(u&30)&&!h_(d)&&(i=Wa(t,u),i===2&&(h=Pt(t),h!==0&&(u=h,i=uc(t,h))),i===1))throw s=Ts,Lr(t,0),ir(t,u),Cn(t,J()),s;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Dr(t,An,wi);break;case 3:if(ir(t,u),(u&130023424)===u&&(i=sc+500-J(),10<i)){if(qn(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){Sn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=mu(Dr.bind(null,t,An,wi),i);break}Dr(t,An,wi);break;case 4:if(ir(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var C=31-wt(u);h=1<<C,C=i[C],C>d&&(d=C),u&=~h}if(u=d,u=J()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*d_(u/1960))-u,10<u){t.timeoutHandle=mu(Dr.bind(null,t,An,wi),u);break}Dr(t,An,wi);break;case 5:Dr(t,An,wi);break;default:throw Error(n(329))}}}return Cn(t,J()),t.callbackNode===s?Sp.bind(null,t):null}function uc(t,i){var s=ws;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=Wa(t,i),t!==2&&(i=An,An=s,i!==null&&cc(i)),t}function cc(t){An===null?An=t:An.push.apply(An,t)}function h_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var u=0;u<s.length;u++){var d=s[u],h=d.getSnapshot;d=d.value;try{if(!Yn(h(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ir(t,i){for(i&=~oc,i&=~ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-wt(i),u=1<<s;t[s]=-1,i&=~u}}function xp(t){if(Et&6)throw Error(n(327));xo();var i=qn(t,0);if(!(i&1))return Cn(t,J()),null;var s=Wa(t,i);if(t.tag!==0&&s===2){var u=Pt(t);u!==0&&(i=u,s=uc(t,u))}if(s===1)throw s=Ts,Lr(t,0),ir(t,i),Cn(t,J()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Dr(t,An,wi),Cn(t,J()),null}function fc(t,i){var s=Et;Et|=1;try{return t(i)}finally{Et=s,Et===0&&(So=J()+500,va&&Ki())}}function Pr(t){tr!==null&&tr.tag===0&&!(Et&6)&&xo();var i=Et;Et|=1;var s=Gn.transition,u=_t;try{if(Gn.transition=null,_t=1,t)return t()}finally{_t=u,Gn.transition=s,Et=i,!(Et&6)&&Ki()}}function dc(){On=yo.current,Ot(yo)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Gv(s)),qt!==null)for(s=qt.return;s!==null;){var u=s;switch(xu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ma();break;case 3:go(),Ot(En),Ot(cn),Uu();break;case 5:Du(u);break;case 4:go();break;case 13:Ot(zt);break;case 19:Ot(zt);break;case 10:Cu(u.type._context);break;case 22:case 23:dc()}s=s.return}if(tn=t,qt=t=rr(t.current,null),an=On=i,Zt=0,Ts=null,oc=ka=br=0,An=ws=null,Ar!==null){for(i=0;i<Ar.length;i++)if(s=Ar[i],u=s.interleaved,u!==null){s.interleaved=null;var d=u.next,h=s.pending;if(h!==null){var C=h.next;h.next=d,u.next=C}s.pending=u}Ar=null}return t}function Mp(t,i){do{var s=qt;try{if(Au(),Ca.current=La,Ra){for(var u=Bt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ra=!1}if(Rr=0,en=Kt=Bt=null,_s=!1,ys=0,rc.current=null,s===null||s.return===null){Zt=1,Ts=i,qt=null;break}e:{var h=t,C=s.return,W=s,Z=i;if(i=an,W.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var ce=Z,Me=W,Ee=Me.tag;if(!(Me.mode&1)&&(Ee===0||Ee===11||Ee===15)){var xe=Me.alternate;xe?(Me.updateQueue=xe.updateQueue,Me.memoizedState=xe.memoizedState,Me.lanes=xe.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ke=qh(C);if(ke!==null){ke.flags&=-257,Yh(ke,C,W,h,i),ke.mode&1&&jh(h,ce,i),i=ke,Z=ce;var qe=i.updateQueue;if(qe===null){var Ye=new Set;Ye.add(Z),i.updateQueue=Ye}else qe.add(Z);break e}else{if(!(i&1)){jh(h,ce,i),hc();break e}Z=Error(n(426))}}else if(kt&&W.mode&1){var Wt=qh(C);if(Wt!==null){!(Wt.flags&65536)&&(Wt.flags|=256),Yh(Wt,C,W,h,i),Tu(vo(Z,W));break e}}h=Z=vo(Z,W),Zt!==4&&(Zt=2),ws===null?ws=[h]:ws.push(h),h=C;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var se=Wh(h,Z,i);vh(h,se);break e;case 1:W=Z;var ee=h.type,le=h.stateNode;if(!(h.flags&128)&&(typeof ee.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(er===null||!er.has(le)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ae=Xh(h,W,i);vh(h,Ae);break e}}h=h.return}while(h!==null)}wp(s)}catch($e){i=$e,qt===s&&s!==null&&(qt=s=s.return);continue}break}while(!0)}function Ep(){var t=Fa.current;return Fa.current=La,t===null?La:t}function hc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),tn===null||!(br&268435455)&&!(ka&268435455)||ir(tn,an)}function Wa(t,i){var s=Et;Et|=2;var u=Ep();(tn!==t||an!==i)&&(wi=null,Lr(t,i));do try{p_();break}catch(d){Mp(t,d)}while(!0);if(Au(),Et=s,Fa.current=u,qt!==null)throw Error(n(261));return tn=null,an=0,Zt}function p_(){for(;qt!==null;)Tp(qt)}function m_(){for(;qt!==null&&!fe();)Tp(qt)}function Tp(t){var i=Rp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?wp(t):qt=i,rc.current=null}function wp(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=l_(s,i),s!==null){s.flags&=32767,qt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,qt=null;return}}else if(s=a_(s,i,On),s!==null){qt=s;return}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Zt===0&&(Zt=5)}function Dr(t,i,s){var u=_t,d=Gn.transition;try{Gn.transition=null,_t=1,g_(t,i,s,u)}finally{Gn.transition=d,_t=u}return null}function g_(t,i,s,u){do xo();while(tr!==null);if(Et&6)throw Error(n(327));s=t.finishedWork;var d=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(un(t,h),t===tn&&(qt=tn=null,an=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Ba||(Ba=!0,bp(Ge,function(){return xo(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Gn.transition,Gn.transition=null;var C=_t;_t=1;var W=Et;Et|=4,rc.current=null,c_(t,s),mp(s,t),Ov(hu),ta=!!du,hu=du=null,t.current=s,f_(s),de(),Et=W,_t=C,Gn.transition=h}else t.current=s;if(Ba&&(Ba=!1,tr=t,Ha=d),h=t.pendingLanes,h===0&&(er=null),Tt(s.stateNode),Cn(t,J()),i!==null)for(u=t.onRecoverableError,s=0;s<i.length;s++)d=i[s],u(d.value,{componentStack:d.stack,digest:d.digest});if(za)throw za=!1,t=ac,ac=null,t;return Ha&1&&t.tag!==0&&xo(),h=t.pendingLanes,h&1?t===lc?As++:(As=0,lc=t):As=0,Ki(),null}function xo(){if(tr!==null){var t=hd(Ha),i=Gn.transition,s=_t;try{if(Gn.transition=null,_t=16>t?16:t,tr===null)var u=!1;else{if(t=tr,tr=null,Ha=0,Et&6)throw Error(n(331));var d=Et;for(Et|=4,We=t.current;We!==null;){var h=We,C=h.child;if(We.flags&16){var W=h.deletions;if(W!==null){for(var Z=0;Z<W.length;Z++){var ce=W[Z];for(We=ce;We!==null;){var Me=We;switch(Me.tag){case 0:case 11:case 15:Es(8,Me,h)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,We=Ee;else for(;We!==null;){Me=We;var xe=Me.sibling,ke=Me.return;if(cp(Me),Me===ce){We=null;break}if(xe!==null){xe.return=ke,We=xe;break}We=ke}}}var qe=h.alternate;if(qe!==null){var Ye=qe.child;if(Ye!==null){qe.child=null;do{var Wt=Ye.sibling;Ye.sibling=null,Ye=Wt}while(Ye!==null)}}We=h}}if(h.subtreeFlags&2064&&C!==null)C.return=h,We=C;else e:for(;We!==null;){if(h=We,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Es(9,h,h.return)}var se=h.sibling;if(se!==null){se.return=h.return,We=se;break e}We=h.return}}var ee=t.current;for(We=ee;We!==null;){C=We;var le=C.child;if(C.subtreeFlags&2064&&le!==null)le.return=C,We=le;else e:for(C=ee;We!==null;){if(W=We,W.flags&2048)try{switch(W.tag){case 0:case 11:case 15:Oa(9,W)}}catch($e){Vt(W,W.return,$e)}if(W===C){We=null;break e}var Ae=W.sibling;if(Ae!==null){Ae.return=W.return,We=Ae;break e}We=W.return}}if(Et=d,Ki(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Je,t)}catch{}u=!0}return u}finally{_t=s,Gn.transition=i}}return!1}function Ap(t,i,s){i=vo(s,i),i=Wh(t,i,1),t=Qi(t,i,1),i=Sn(),t!==null&&(Gt(t,1,i),Cn(t,i))}function Vt(t,i,s){if(t.tag===3)Ap(t,t,s);else for(;i!==null;){if(i.tag===3){Ap(i,t,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))){t=vo(s,t),t=Xh(i,t,1),i=Qi(i,t,1),t=Sn(),i!==null&&(Gt(i,1,t),Cn(i,t));break}}i=i.return}}function v_(t,i,s){var u=t.pingCache;u!==null&&u.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&s,tn===t&&(an&s)===s&&(Zt===4||Zt===3&&(an&130023424)===an&&500>J()-sc?Lr(t,0):oc|=s),Cn(t,i)}function Cp(t,i){i===0&&(t.mode&1?(i=yt,yt<<=1,!(yt&130023424)&&(yt=4194304)):i=1);var s=Sn();t=Mi(t,i),t!==null&&(Gt(t,i,s),Cn(t,s))}function __(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Cp(t,s)}function y_(t,i){var s=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Cp(t,s)}var Rp;Rp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)wn=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return wn=!1,s_(t,i,s);wn=!!(t.flags&131072)}else wn=!1,kt&&i.flags&1048576&&ah(i,ya,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ua(t,i),t=i.pendingProps;var d=lo(i,cn.current);mo(i,s),d=Fu(null,i,u,t,d,s);var h=ku();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(u)?(h=!0,ga(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Pu(i),d.updater=Da,i.stateNode=d,d._reactInternals=i,Wu(i,u,t,s),i=Yu(null,i,u,!0,h,s)):(i.tag=0,kt&&h&&Su(i),yn(null,i,d,s),i=i.child),i;case 16:u=i.elementType;e:{switch(Ua(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=x_(u),t=Kn(u,t),d){case 0:i=qu(null,i,u,t,s);break e;case 1:i=ep(null,i,u,t,s);break e;case 11:i=$h(null,i,u,t,s);break e;case 14:i=Kh(null,i,u,Kn(u.type,t),s);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Kn(u,d),qu(t,i,u,d,s);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Kn(u,d),ep(t,i,u,d,s);case 3:e:{if(tp(i),t===null)throw Error(n(387));u=i.pendingProps,h=i.memoizedState,d=h.element,gh(t,i),wa(i,u,null,s);var C=i.memoizedState;if(u=C.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=vo(Error(n(423)),i),i=np(t,i,u,s,d);break e}else if(u!==d){d=vo(Error(n(424)),i),i=np(t,i,u,s,d);break e}else for(Nn=qi(i.stateNode.containerInfo.firstChild),Un=i,kt=!0,$n=null,s=ph(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(fo(),u===d){i=Ti(t,i,s);break e}yn(t,i,u,s)}i=i.child}return i;case 5:return yh(i),t===null&&Eu(i),u=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,C=d.children,pu(u,d)?C=null:h!==null&&pu(u,h)&&(i.flags|=32),Jh(t,i),yn(t,i,C,s),i.child;case 6:return t===null&&Eu(i),null;case 13:return ip(t,i,s);case 4:return Lu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=ho(i,null,u,s):yn(t,i,u,s),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Kn(u,d),$h(t,i,u,d,s);case 7:return yn(t,i,i.pendingProps,s),i.child;case 8:return yn(t,i,i.pendingProps.children,s),i.child;case 12:return yn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,h=i.memoizedProps,C=d.value,It(Ma,u._currentValue),u._currentValue=C,h!==null)if(Yn(h.value,C)){if(h.children===d.children&&!En.current){i=Ti(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var W=h.dependencies;if(W!==null){C=h.child;for(var Z=W.firstContext;Z!==null;){if(Z.context===u){if(h.tag===1){Z=Ei(-1,s&-s),Z.tag=2;var ce=h.updateQueue;if(ce!==null){ce=ce.shared;var Me=ce.pending;Me===null?Z.next=Z:(Z.next=Me.next,Me.next=Z),ce.pending=Z}}h.lanes|=s,Z=h.alternate,Z!==null&&(Z.lanes|=s),Ru(h.return,s,i),W.lanes|=s;break}Z=Z.next}}else if(h.tag===10)C=h.type===i.type?null:h.child;else if(h.tag===18){if(C=h.return,C===null)throw Error(n(341));C.lanes|=s,W=C.alternate,W!==null&&(W.lanes|=s),Ru(C,s,i),C=h.sibling}else C=h.child;if(C!==null)C.return=h;else for(C=h;C!==null;){if(C===i){C=null;break}if(h=C.sibling,h!==null){h.return=C.return,C=h;break}C=C.return}h=C}yn(t,i,d.children,s),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,mo(i,s),d=Hn(d),u=u(d),i.flags|=1,yn(t,i,u,s),i.child;case 14:return u=i.type,d=Kn(u,i.pendingProps),d=Kn(u.type,d),Kh(t,i,u,d,s);case 15:return Zh(t,i,i.type,i.pendingProps,s);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Kn(u,d),Ua(t,i),i.tag=1,Tn(u)?(t=!0,ga(i)):t=!1,mo(i,s),Vh(i,u,d),Wu(i,u,d,s),Yu(null,i,u,!0,t,s);case 19:return op(t,i,s);case 22:return Qh(t,i,s)}throw Error(n(156,i.tag))};function bp(t,i){return U(t,i)}function S_(t,i,s,u){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,s,u){return new S_(t,i,s,u)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function x_(t){if(typeof t=="function")return pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$)return 11;if(t===ne)return 14}return 2}function rr(t,i){var s=t.alternate;return s===null?(s=Wn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Xa(t,i,s,u,d,h){var C=2;if(u=t,typeof t=="function")pc(t)&&(C=1);else if(typeof t=="string")C=5;else e:switch(t){case I:return Ir(s.children,d,h,i);case G:C=8,d|=8;break;case E:return t=Wn(12,s,i,d|2),t.elementType=E,t.lanes=h,t;case F:return t=Wn(13,s,i,d),t.elementType=F,t.lanes=h,t;case H:return t=Wn(19,s,i,d),t.elementType=H,t.lanes=h,t;case y:return ja(s,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m:C=10;break e;case N:C=9;break e;case $:C=11;break e;case ne:C=14;break e;case K:C=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(C,s,i,d),i.elementType=t,i.type=u,i.lanes=h,i}function Ir(t,i,s,u){return t=Wn(7,t,u,i),t.lanes=s,t}function ja(t,i,s,u){return t=Wn(22,t,u,i),t.elementType=y,t.lanes=s,t.stateNode={isHidden:!1},t}function mc(t,i,s){return t=Wn(6,t,null,i),t.lanes=s,t}function gc(t,i,s){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function M_(t,i,s,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ln(0),this.expirationTimes=ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function vc(t,i,s,u,d,h,C,W,Z){return t=new M_(t,i,s,W,Z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:u,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(h),t}function E_(t,i,s){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:u==null?null:""+u,children:t,containerInfo:i,implementation:s}}function Pp(t){if(!t)return $i;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Tn(s))return rh(t,s,i)}return i}function Lp(t,i,s,u,d,h,C,W,Z){return t=vc(s,u,!0,t,d,h,C,W,Z),t.context=Pp(null),s=t.current,u=Sn(),d=nr(s),h=Ei(u,d),h.callback=i??null,Qi(s,h,d),t.current.lanes=d,Gt(t,d,u),Cn(t,u),t}function qa(t,i,s,u){var d=i.current,h=Sn(),C=nr(d);return s=Pp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ei(h,C),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Qi(d,i,C),t!==null&&(Jn(t,d,C,h),Ta(t,d,C)),C}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function _c(t,i){Dp(t,i),(t=t.alternate)&&Dp(t,i)}function T_(){return null}var Ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function yc(t){this._internalRoot=t}$a.prototype.render=yc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qa(t,i,null,null)},$a.prototype.unmount=yc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Pr(function(){qa(null,t,null,null)}),i[_i]=null}};function $a(t){this._internalRoot=t}$a.prototype.unstable_scheduleHydration=function(t){if(t){var i=gd();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Wi.length&&i!==0&&i<Wi[s].priority;s++);Wi.splice(s,0,t),s===0&&yd(t)}};function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function w_(t,i,s,u,d){if(d){if(typeof u=="function"){var h=u;u=function(){var ce=Ya(C);h.call(ce)}}var C=Lp(i,u,t,0,null,!1,!1,"",Up);return t._reactRootContainer=C,t[_i]=C.current,cs(t.nodeType===8?t.parentNode:t),Pr(),C}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var W=u;u=function(){var ce=Ya(Z);W.call(ce)}}var Z=vc(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=Z,t[_i]=Z.current,cs(t.nodeType===8?t.parentNode:t),Pr(function(){qa(i,Z,s,u)}),Z}function Za(t,i,s,u,d){var h=s._reactRootContainer;if(h){var C=h;if(typeof d=="function"){var W=d;d=function(){var Z=Ya(C);W.call(Z)}}qa(i,C,t,d)}else C=w_(s,i,t,d,u);return Ya(C)}pd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=on(i.pendingLanes);s!==0&&(xr(i,s|1),Cn(i,J()),!(Et&6)&&(So=J()+500,Ki()))}break;case 13:Pr(function(){var u=Mi(t,1);if(u!==null){var d=Sn();Jn(u,t,1,d)}}),_c(t,1)}},Xl=function(t){if(t.tag===13){var i=Mi(t,134217728);if(i!==null){var s=Sn();Jn(i,t,134217728,s)}_c(t,134217728)}},md=function(t){if(t.tag===13){var i=nr(t),s=Mi(t,i);if(s!==null){var u=Sn();Jn(s,t,i,u)}_c(t,i)}},gd=function(){return _t},vd=function(t,i){var s=_t;try{return _t=t,i()}finally{_t=s}},De=function(t,i,s){switch(i){case"input":if(Le(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==t&&u.form===t.form){var d=pa(u);if(!d)throw Error(n(90));Ve(u),Le(u,d)}}}break;case"textarea":_e(t,s);break;case"select":i=s.value,i!=null&&z(t,!!s.multiple,i,!1)}},Ut=fc,$t=Pr;var A_={usingClientEntryPoint:!1,Events:[hs,so,pa,Ne,ft,fc]},Cs={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C_={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zs(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Je=Qa.inject(C_),dt=Qa}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A_,Rn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(i))throw Error(n(200));return E_(t,i,null,s)},Rn.createRoot=function(t,i){if(!Sc(t))throw Error(n(299));var s=!1,u="",d=Ip;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=vc(t,1,!1,null,null,s,!1,u,d),t[_i]=i.current,cs(t.nodeType===8?t.parentNode:t),new yc(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Zs(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Pr(t)},Rn.hydrate=function(t,i,s){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!0,s)},Rn.hydrateRoot=function(t,i,s){if(!Sc(t))throw Error(n(405));var u=s!=null&&s.hydratedSources||null,d=!1,h="",C=Ip;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(C=s.onRecoverableError)),i=Lp(i,null,t,1,s??null,d,!1,h,C),t[_i]=i.current,cs(t),u)for(t=0;t<u.length;t++)s=u[t],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new $a(i)},Rn.render=function(t,i,s){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!1,s)},Rn.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(n(40));return t._reactRootContainer?(Pr(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1},Rn.unstable_batchedUpdates=fc,Rn.unstable_renderSubtreeIntoContainer=function(t,i,s,u){if(!Ka(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Za(t,i,s,!1,u)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Vp;function F_(){if(Vp)return Ec.exports;Vp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ec.exports=O_(),Ec.exports}var Gp;function k_(){if(Gp)return el;Gp=1;var o=F_();return el.createRoot=o.createRoot,el.hydrateRoot=o.hydrateRoot,el}var D1=k_(),ug={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wp=qr.createContext&&qr.createContext(ug),z_=["attr","size","title"];function B_(o,e){if(o==null)return{};var n=H_(o,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(n[r]=o[r])}return n}function H_(o,e){if(o==null)return{};var n={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;n[r]=o[r]}return n}function Ll(){return Ll=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o},Ll.apply(this,arguments)}function Xp(o,e){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),n.push.apply(n,r)}return n}function Dl(o){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xp(Object(n),!0).forEach(function(r){V_(o,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):Xp(Object(n)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(n,r))})}return o}function V_(o,e,n){return e=G_(e),e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function G_(o){var e=W_(o,"string");return typeof e=="symbol"?e:e+""}function W_(o,e){if(typeof o!="object"||!o)return o;var n=o[Symbol.toPrimitive];if(n!==void 0){var r=n.call(o,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function cg(o){return o&&o.map((e,n)=>qr.createElement(e.tag,Dl({key:n},e.attr),cg(e.child)))}function zs(o){return e=>qr.createElement(X_,Ll({attr:Dl({},o.attr)},e),cg(o.child))}function X_(o){var e=n=>{var{attr:r,size:a,title:l}=o,c=B_(o,z_),f=a||n.size||"1em",p;return n.className&&(p=n.className),o.className&&(p=(p?p+" ":"")+o.className),qr.createElement("svg",Ll({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:p,style:Dl(Dl({color:o.color||n.color},n.style),o.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&qr.createElement("title",null,l),o.children)};return Wp!==void 0?qr.createElement(Wp.Consumer,null,n=>e(n)):e(ug)}function I1(o){return zs({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"},child:[]}]})(o)}function U1(o){return zs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"},child:[]}]})(o)}function N1(o){return zs({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function O1(o){return zs({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function F1(o){return zs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(o)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="171",j_=0,jp=1,q_=2,fg=1,Y_=2,Li=3,mr=0,Pn=1,Di=2,hr=0,ko=1,qp=2,Yp=3,$p=4,$_=5,Gr=100,K_=101,Z_=102,Q_=103,J_=104,e0=200,t0=201,n0=202,i0=203,gf=204,vf=205,r0=206,o0=207,s0=208,a0=209,l0=210,u0=211,c0=212,f0=213,d0=214,_f=0,yf=1,Sf=2,Ho=3,xf=4,Mf=5,Ef=6,Tf=7,dg=0,h0=1,p0=2,pr=0,m0=1,g0=2,v0=3,_0=4,y0=5,S0=6,x0=7,hg=300,Vo=301,Go=302,wf=303,Af=304,kl=306,Cf=1e3,Xr=1001,Rf=1002,si=1003,M0=1004,tl=1005,hi=1006,Ac=1007,jr=1008,Fi=1009,pg=1010,mg=1011,ks=1012,sd=1013,$r=1014,Ii=1015,Bs=1016,ad=1017,ld=1018,Wo=1020,gg=35902,vg=1021,_g=1022,oi=1023,yg=1024,Sg=1025,zo=1026,Xo=1027,xg=1028,ud=1029,Mg=1030,cd=1031,fd=1033,wl=33776,Al=33777,Cl=33778,Rl=33779,bf=35840,Pf=35841,Lf=35842,Df=35843,If=36196,Uf=37492,Nf=37496,Of=37808,Ff=37809,kf=37810,zf=37811,Bf=37812,Hf=37813,Vf=37814,Gf=37815,Wf=37816,Xf=37817,jf=37818,qf=37819,Yf=37820,$f=37821,bl=36492,Kf=36494,Zf=36495,Eg=36283,Qf=36284,Jf=36285,ed=36286,E0=3200,T0=3201,w0=0,A0=1,dr="",jn="srgb",jo="srgb-linear",Il="linear",Lt="srgb",Mo=7680,Kp=519,C0=512,R0=513,b0=514,Tg=515,P0=516,L0=517,D0=518,I0=519,Zp=35044,Qp="300 es",Ui=2e3,Ul=2001;class $o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,td=180/Math.PI;function Hs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function St(o,e,n){return Math.max(e,Math.min(n,o))}function U0(o,e){return(o%e+e)%e}function Rc(o,e,n){return(1-n)*o+n*e}function bs(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,n=0){Dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,n,r,a,l,c,f,p,g){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,p,g)}set(e,n,r,a,l,c,f,p,g){const S=this.elements;return S[0]=e,S[1]=a,S[2]=f,S[3]=n,S[4]=l,S[5]=p,S[6]=r,S[7]=c,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[3],p=r[6],g=r[1],S=r[4],x=r[7],M=r[2],A=r[5],D=r[8],R=a[0],T=a[3],_=a[6],Y=a[1],V=a[4],k=a[7],L=a[2],b=a[5],I=a[8];return l[0]=c*R+f*Y+p*L,l[3]=c*T+f*V+p*b,l[6]=c*_+f*k+p*I,l[1]=g*R+S*Y+x*L,l[4]=g*T+S*V+x*b,l[7]=g*_+S*k+x*I,l[2]=M*R+A*Y+D*L,l[5]=M*T+A*V+D*b,l[8]=M*_+A*k+D*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],g=e[7],S=e[8];return n*c*S-n*f*g-r*l*S+r*f*p+a*l*g-a*c*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],g=e[7],S=e[8],x=S*c-f*g,M=f*p-S*l,A=g*l-c*p,D=n*x+r*M+a*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=x*R,e[1]=(a*g-S*r)*R,e[2]=(f*r-a*c)*R,e[3]=M*R,e[4]=(S*n-a*p)*R,e[5]=(a*l-f*n)*R,e[6]=A*R,e[7]=(r*p-g*n)*R,e[8]=(c*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,f){const p=Math.cos(l),g=Math.sin(l);return this.set(r*p,r*g,-r*(p*c+g*f)+c+e,-a*g,a*p,-a*(-g*c+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new ht;function wg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Nl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function N0(){const o=Nl("canvas");return o.style.display="block",o}const Jp={};function Oo(o){o in Jp||(Jp[o]=!0,console.warn(o))}function O0(o,e,n){return new Promise(function(r,a){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function F0(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function k0(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const em=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z0(){const o={enabled:!0,workingColorSpace:jo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(a.r=Bo(a.r),a.g=Bo(a.g),a.b=Bo(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===dr?Il:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[jo]:{primaries:e,whitePoint:r,transfer:Il,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),o}const Ct=z0();function Oi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Bo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Eo;class B0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Eo===void 0&&(Eo=Nl("canvas")),Eo.width=e.width,Eo.height=e.height;const r=Eo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Eo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Oi(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oi(n[r]/255)*255):n[r]=Oi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H0=0;class Ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Pc(a[c].image)):l.push(Pc(a[c]))}else l=Pc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Pc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?B0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V0=0;class Ln extends $o{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Xr,a=Xr,l=hi,c=jr,f=oi,p=Fi,g=Ln.DEFAULT_ANISOTROPY,S=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Hs(),this.name="",this.source=new Ag(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=hg;Ln.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const p=e.elements,g=p[0],S=p[4],x=p[8],M=p[1],A=p[5],D=p[9],R=p[2],T=p[6],_=p[10];if(Math.abs(S-M)<.01&&Math.abs(x-R)<.01&&Math.abs(D-T)<.01){if(Math.abs(S+M)<.1&&Math.abs(x+R)<.1&&Math.abs(D+T)<.1&&Math.abs(g+A+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const V=(g+1)/2,k=(A+1)/2,L=(_+1)/2,b=(S+M)/4,I=(x+R)/4,G=(D+T)/4;return V>k&&V>L?V<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(V),a=b/r,l=I/r):k>L?k<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(k),r=b/a,l=G/a):L<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(L),r=I/l,a=G/l),this.set(r,a,l,n),this}let Y=Math.sqrt((T-D)*(T-D)+(x-R)*(x-R)+(M-S)*(M-S));return Math.abs(Y)<.001&&(Y=1),this.x=(T-D)/Y,this.y=(x-R)/Y,this.z=(M-S)/Y,this.w=Math.acos((g+A+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G0 extends $o{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ag(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends G0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Cg extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=si,this.minFilter=si,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W0 extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=si,this.minFilter=si,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,f){let p=r[a+0],g=r[a+1],S=r[a+2],x=r[a+3];const M=l[c+0],A=l[c+1],D=l[c+2],R=l[c+3];if(f===0){e[n+0]=p,e[n+1]=g,e[n+2]=S,e[n+3]=x;return}if(f===1){e[n+0]=M,e[n+1]=A,e[n+2]=D,e[n+3]=R;return}if(x!==R||p!==M||g!==A||S!==D){let T=1-f;const _=p*M+g*A+S*D+x*R,Y=_>=0?1:-1,V=1-_*_;if(V>Number.EPSILON){const L=Math.sqrt(V),b=Math.atan2(L,_*Y);T=Math.sin(T*b)/L,f=Math.sin(f*b)/L}const k=f*Y;if(p=p*T+M*k,g=g*T+A*k,S=S*T+D*k,x=x*T+R*k,T===1-f){const L=1/Math.sqrt(p*p+g*g+S*S+x*x);p*=L,g*=L,S*=L,x*=L}}e[n]=p,e[n+1]=g,e[n+2]=S,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,l,c){const f=r[a],p=r[a+1],g=r[a+2],S=r[a+3],x=l[c],M=l[c+1],A=l[c+2],D=l[c+3];return e[n]=f*D+S*x+p*A-g*M,e[n+1]=p*D+S*M+g*x-f*A,e[n+2]=g*D+S*A+f*M-p*x,e[n+3]=S*D-f*x-p*M-g*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,g=f(r/2),S=f(a/2),x=f(l/2),M=p(r/2),A=p(a/2),D=p(l/2);switch(c){case"XYZ":this._x=M*S*x+g*A*D,this._y=g*A*x-M*S*D,this._z=g*S*D+M*A*x,this._w=g*S*x-M*A*D;break;case"YXZ":this._x=M*S*x+g*A*D,this._y=g*A*x-M*S*D,this._z=g*S*D-M*A*x,this._w=g*S*x+M*A*D;break;case"ZXY":this._x=M*S*x-g*A*D,this._y=g*A*x+M*S*D,this._z=g*S*D+M*A*x,this._w=g*S*x-M*A*D;break;case"ZYX":this._x=M*S*x-g*A*D,this._y=g*A*x+M*S*D,this._z=g*S*D-M*A*x,this._w=g*S*x+M*A*D;break;case"YZX":this._x=M*S*x+g*A*D,this._y=g*A*x+M*S*D,this._z=g*S*D-M*A*x,this._w=g*S*x-M*A*D;break;case"XZY":this._x=M*S*x-g*A*D,this._y=g*A*x-M*S*D,this._z=g*S*D+M*A*x,this._w=g*S*x+M*A*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],f=n[5],p=n[9],g=n[2],S=n[6],x=n[10],M=r+f+x;if(M>0){const A=.5/Math.sqrt(M+1);this._w=.25/A,this._x=(S-p)*A,this._y=(l-g)*A,this._z=(c-a)*A}else if(r>f&&r>x){const A=2*Math.sqrt(1+r-f-x);this._w=(S-p)/A,this._x=.25*A,this._y=(a+c)/A,this._z=(l+g)/A}else if(f>x){const A=2*Math.sqrt(1+f-r-x);this._w=(l-g)/A,this._x=(a+c)/A,this._y=.25*A,this._z=(p+S)/A}else{const A=2*Math.sqrt(1+x-r-f);this._w=(c-a)/A,this._x=(l+g)/A,this._y=(p+S)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,f=n._x,p=n._y,g=n._z,S=n._w;return this._x=r*S+c*f+a*g-l*p,this._y=a*S+c*p+l*f-r*g,this._z=l*S+c*g+r*p-a*f,this._w=c*S-r*f-a*p-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const A=1-n;return this._w=A*c+n*this._w,this._x=A*r+n*this._x,this._y=A*a+n*this._y,this._z=A*l+n*this._z,this.normalize(),this}const g=Math.sqrt(p),S=Math.atan2(g,f),x=Math.sin((1-n)*S)/g,M=Math.sin(n*S)/g;return this._w=c*x+this._w*M,this._x=r*x+this._x*M,this._y=a*x+this._y*M,this._z=l*x+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(e=0,n=0,r=0){he.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,p=e.w,g=2*(c*a-f*r),S=2*(f*n-l*a),x=2*(l*r-c*n);return this.x=n+p*g+c*x-f*S,this.y=r+p*S+f*g-l*x,this.z=a+p*x+l*S-c*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,f=n.y,p=n.z;return this.x=a*p-l*f,this.y=l*c-r*p,this.z=r*f-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new he,nm=new Vs;class Gs{constructor(e=new he(1/0,1/0,1/0),n=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ei):ei.fromBufferAttribute(l,c),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),il.subVectors(this.max,Ps),To.subVectors(e.a,Ps),wo.subVectors(e.b,Ps),Ao.subVectors(e.c,Ps),sr.subVectors(wo,To),ar.subVectors(Ao,wo),Ur.subVectors(To,Ao);let n=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-Ur.z,Ur.y,sr.z,0,-sr.x,ar.z,0,-ar.x,Ur.z,0,-Ur.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-Ur.y,Ur.x,0];return!Dc(n,To,wo,Ao,il)||(n=[1,0,0,0,1,0,0,0,1],!Dc(n,To,wo,Ao,il))?!1:(rl.crossVectors(sr,ar),n=[rl.x,rl.y,rl.z],Dc(n,To,wo,Ao,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new he,new he,new he,new he,new he,new he,new he,new he],ei=new he,nl=new Gs,To=new he,wo=new he,Ao=new he,sr=new he,ar=new he,Ur=new he,Ps=new he,il=new he,rl=new he,Nr=new he;function Dc(o,e,n,r,a){for(let l=0,c=o.length-3;l<=c;l+=3){Nr.fromArray(o,l);const f=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),p=e.dot(Nr),g=n.dot(Nr),S=r.dot(Nr);if(Math.max(-Math.max(p,g,S),Math.min(p,g,S))>f)return!1}return!0}const X0=new Gs,Ls=new he,Ic=new he;class zl{constructor(e=new he,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):X0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const n=Ls.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ls,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Ic)),this.expandByPoint(Ls.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new he,Uc=new he,ol=new he,lr=new he,Nc=new he,sl=new he,Oc=new he;class Rg{constructor(e=new he,n=new he(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Uc.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(Uc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(ol),f=lr.dot(this.direction),p=-lr.dot(ol),g=lr.lengthSq(),S=Math.abs(1-c*c);let x,M,A,D;if(S>0)if(x=c*p-f,M=c*f-p,D=l*S,x>=0)if(M>=-D)if(M<=D){const R=1/S;x*=R,M*=R,A=x*(x+c*M+2*f)+M*(c*x+M+2*p)+g}else M=l,x=Math.max(0,-(c*M+f)),A=-x*x+M*(M+2*p)+g;else M=-l,x=Math.max(0,-(c*M+f)),A=-x*x+M*(M+2*p)+g;else M<=-D?(x=Math.max(0,-(-c*l+f)),M=x>0?-l:Math.min(Math.max(-l,-p),l),A=-x*x+M*(M+2*p)+g):M<=D?(x=0,M=Math.min(Math.max(-l,-p),l),A=M*(M+2*p)+g):(x=Math.max(0,-(c*l+f)),M=x>0?l:Math.min(Math.max(-l,-p),l),A=-x*x+M*(M+2*p)+g);else M=c>0?-l:l,x=Math.max(0,-(c*M+f)),A=-x*x+M*(M+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Uc).addScaledVector(ol,M),A}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const r=Ci.dot(this.direction),a=Ci.dot(Ci)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,p=r+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,f,p;const g=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,M=this.origin;return g>=0?(r=(e.min.x-M.x)*g,a=(e.max.x-M.x)*g):(r=(e.max.x-M.x)*g,a=(e.min.x-M.x)*g),S>=0?(l=(e.min.y-M.y)*S,c=(e.max.y-M.y)*S):(l=(e.max.y-M.y)*S,c=(e.min.y-M.y)*S),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-M.z)*x,p=(e.max.z-M.z)*x):(f=(e.max.z-M.z)*x,p=(e.min.z-M.z)*x),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,r,a,l){Nc.subVectors(n,e),sl.subVectors(r,e),Oc.crossVectors(Nc,sl);let c=this.direction.dot(Oc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;lr.subVectors(this.origin,e);const p=f*this.direction.dot(sl.crossVectors(lr,sl));if(p<0)return null;const g=f*this.direction.dot(Nc.cross(lr));if(g<0||p+g>c)return null;const S=-f*lr.dot(Oc);return S<0?null:this.at(S/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,l,c,f,p,g,S,x,M,A,D,R,T){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,p,g,S,x,M,A,D,R,T)}set(e,n,r,a,l,c,f,p,g,S,x,M,A,D,R,T){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=p,_[2]=g,_[6]=S,_[10]=x,_[14]=M,_[3]=A,_[7]=D,_[11]=R,_[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Co.setFromMatrixColumn(e,0).length(),l=1/Co.setFromMatrixColumn(e,1).length(),c=1/Co.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),p=Math.cos(a),g=Math.sin(a),S=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const M=c*S,A=c*x,D=f*S,R=f*x;n[0]=p*S,n[4]=-p*x,n[8]=g,n[1]=A+D*g,n[5]=M-R*g,n[9]=-f*p,n[2]=R-M*g,n[6]=D+A*g,n[10]=c*p}else if(e.order==="YXZ"){const M=p*S,A=p*x,D=g*S,R=g*x;n[0]=M+R*f,n[4]=D*f-A,n[8]=c*g,n[1]=c*x,n[5]=c*S,n[9]=-f,n[2]=A*f-D,n[6]=R+M*f,n[10]=c*p}else if(e.order==="ZXY"){const M=p*S,A=p*x,D=g*S,R=g*x;n[0]=M-R*f,n[4]=-c*x,n[8]=D+A*f,n[1]=A+D*f,n[5]=c*S,n[9]=R-M*f,n[2]=-c*g,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const M=c*S,A=c*x,D=f*S,R=f*x;n[0]=p*S,n[4]=D*g-A,n[8]=M*g+R,n[1]=p*x,n[5]=R*g+M,n[9]=A*g-D,n[2]=-g,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const M=c*p,A=c*g,D=f*p,R=f*g;n[0]=p*S,n[4]=R-M*x,n[8]=D*x+A,n[1]=x,n[5]=c*S,n[9]=-f*S,n[2]=-g*S,n[6]=A*x+D,n[10]=M-R*x}else if(e.order==="XZY"){const M=c*p,A=c*g,D=f*p,R=f*g;n[0]=p*S,n[4]=-x,n[8]=g*S,n[1]=M*x+R,n[5]=c*S,n[9]=A*x-D,n[2]=D*x-A,n[6]=f*S,n[10]=R*x+M}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j0,e,q0)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ur.crossVectors(r,Fn),ur.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ur.crossVectors(r,Fn)),ur.normalize(),al.crossVectors(Fn,ur),a[0]=ur.x,a[4]=al.x,a[8]=Fn.x,a[1]=ur.y,a[5]=al.y,a[9]=Fn.y,a[2]=ur.z,a[6]=al.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[4],p=r[8],g=r[12],S=r[1],x=r[5],M=r[9],A=r[13],D=r[2],R=r[6],T=r[10],_=r[14],Y=r[3],V=r[7],k=r[11],L=r[15],b=a[0],I=a[4],G=a[8],E=a[12],m=a[1],N=a[5],$=a[9],F=a[13],H=a[2],ne=a[6],K=a[10],y=a[14],q=a[3],O=a[7],v=a[11],w=a[15];return l[0]=c*b+f*m+p*H+g*q,l[4]=c*I+f*N+p*ne+g*O,l[8]=c*G+f*$+p*K+g*v,l[12]=c*E+f*F+p*y+g*w,l[1]=S*b+x*m+M*H+A*q,l[5]=S*I+x*N+M*ne+A*O,l[9]=S*G+x*$+M*K+A*v,l[13]=S*E+x*F+M*y+A*w,l[2]=D*b+R*m+T*H+_*q,l[6]=D*I+R*N+T*ne+_*O,l[10]=D*G+R*$+T*K+_*v,l[14]=D*E+R*F+T*y+_*w,l[3]=Y*b+V*m+k*H+L*q,l[7]=Y*I+V*N+k*ne+L*O,l[11]=Y*G+V*$+k*K+L*v,l[15]=Y*E+V*F+k*y+L*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],p=e[9],g=e[13],S=e[2],x=e[6],M=e[10],A=e[14],D=e[3],R=e[7],T=e[11],_=e[15];return D*(+l*p*x-a*g*x-l*f*M+r*g*M+a*f*A-r*p*A)+R*(+n*p*A-n*g*M+l*c*M-a*c*A+a*g*S-l*p*S)+T*(+n*g*x-n*f*A-l*c*x+r*c*A+l*f*S-r*g*S)+_*(-a*f*S-n*p*x+n*f*M+a*c*x-r*c*M+r*p*S)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],g=e[7],S=e[8],x=e[9],M=e[10],A=e[11],D=e[12],R=e[13],T=e[14],_=e[15],Y=x*T*g-R*M*g+R*p*A-f*T*A-x*p*_+f*M*_,V=D*M*g-S*T*g-D*p*A+c*T*A+S*p*_-c*M*_,k=S*R*g-D*x*g+D*f*A-c*R*A-S*f*_+c*x*_,L=D*x*p-S*R*p-D*f*M+c*R*M+S*f*T-c*x*T,b=n*Y+r*V+a*k+l*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/b;return e[0]=Y*I,e[1]=(R*M*l-x*T*l-R*a*A+r*T*A+x*a*_-r*M*_)*I,e[2]=(f*T*l-R*p*l+R*a*g-r*T*g-f*a*_+r*p*_)*I,e[3]=(x*p*l-f*M*l-x*a*g+r*M*g+f*a*A-r*p*A)*I,e[4]=V*I,e[5]=(S*T*l-D*M*l+D*a*A-n*T*A-S*a*_+n*M*_)*I,e[6]=(D*p*l-c*T*l-D*a*g+n*T*g+c*a*_-n*p*_)*I,e[7]=(c*M*l-S*p*l+S*a*g-n*M*g-c*a*A+n*p*A)*I,e[8]=k*I,e[9]=(D*x*l-S*R*l-D*r*A+n*R*A+S*r*_-n*x*_)*I,e[10]=(c*R*l-D*f*l+D*r*g-n*R*g-c*r*_+n*f*_)*I,e[11]=(S*f*l-c*x*l-S*r*g+n*x*g+c*r*A-n*f*A)*I,e[12]=L*I,e[13]=(S*R*a-D*x*a+D*r*M-n*R*M-S*r*T+n*x*T)*I,e[14]=(D*f*a-c*R*a-D*r*p+n*R*p+c*r*T-n*f*T)*I,e[15]=(c*x*a-S*f*a+S*r*p-n*x*p-c*r*M+n*f*M)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,f=e.y,p=e.z,g=l*c,S=l*f;return this.set(g*c+r,g*f-a*p,g*p+a*f,0,g*f+a*p,S*f+r,S*p-a*c,0,g*p-a*f,S*p+a*c,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,g=l+l,S=c+c,x=f+f,M=l*g,A=l*S,D=l*x,R=c*S,T=c*x,_=f*x,Y=p*g,V=p*S,k=p*x,L=r.x,b=r.y,I=r.z;return a[0]=(1-(R+_))*L,a[1]=(A+k)*L,a[2]=(D-V)*L,a[3]=0,a[4]=(A-k)*b,a[5]=(1-(M+_))*b,a[6]=(T+Y)*b,a[7]=0,a[8]=(D+V)*I,a[9]=(T-Y)*I,a[10]=(1-(M+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Co.set(a[0],a[1],a[2]).length();const c=Co.set(a[4],a[5],a[6]).length(),f=Co.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ti.copy(this);const g=1/l,S=1/c,x=1/f;return ti.elements[0]*=g,ti.elements[1]*=g,ti.elements[2]*=g,ti.elements[4]*=S,ti.elements[5]*=S,ti.elements[6]*=S,ti.elements[8]*=x,ti.elements[9]*=x,ti.elements[10]*=x,n.setFromRotationMatrix(ti),r.x=l,r.y=c,r.z=f,this}makePerspective(e,n,r,a,l,c,f=Ui){const p=this.elements,g=2*l/(n-e),S=2*l/(r-a),x=(n+e)/(n-e),M=(r+a)/(r-a);let A,D;if(f===Ui)A=-(c+l)/(c-l),D=-2*c*l/(c-l);else if(f===Ul)A=-c/(c-l),D=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,l,c,f=Ui){const p=this.elements,g=1/(n-e),S=1/(r-a),x=1/(c-l),M=(n+e)*g,A=(r+a)*S;let D,R;if(f===Ui)D=(c+l)*x,R=-2*x;else if(f===Ul)D=l*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-M,p[1]=0,p[5]=2*S,p[9]=0,p[13]=-A,p[2]=0,p[6]=0,p[10]=R,p[14]=-D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Co=new he,ti=new jt,j0=new he(0,0,0),q0=new he(1,1,1),ur=new he,al=new he,Fn=new he,im=new jt,rm=new Vs;class ki{constructor(e=0,n=0,r=0,a=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],p=a[1],g=a[5],S=a[9],x=a[2],M=a[6],A=a[10];switch(n){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-S,A),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(M,g),this._z=0);break;case"YXZ":this._x=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(f,A),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-x,A),this._z=Math.atan2(-c,g)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(M,A),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,g));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,A));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(M,g),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-S,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y0=0;const om=new he,Ro=new Vs,Ri=new jt,ll=new he,Ds=new he,$0=new he,K0=new Vs,sm=new he(1,0,0),am=new he(0,1,0),lm=new he(0,0,1),um={type:"added"},Z0={type:"removed"},bo={type:"childadded",child:null},Fc={type:"childremoved",child:null};class Dn extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new he,n=new ki,r=new Vs,a=new he(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ht}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ro.setFromAxisAngle(e,n),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(e,n){return Ro.setFromAxisAngle(e,n),this.quaternion.premultiply(Ro),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return om.copy(e).applyQuaternion(this.quaternion),this.position.add(om.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ds,ll,this.up):Ri.lookAt(ll,Ds,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),Ro.setFromRotationMatrix(Ri),this.quaternion.premultiply(Ro.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),bo.child=e,this.dispatchEvent(bo),bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z0),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let g=0,S=p.length;g<S;g++){const x=p[g];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,g=this.material.length;p<g;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),g=c(e.textures),S=c(e.images),x=c(e.shapes),M=c(e.skeletons),A=c(e.animations),D=c(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),S.length>0&&(r.images=S),x.length>0&&(r.shapes=x),M.length>0&&(r.skeletons=M),A.length>0&&(r.animations=A),D.length>0&&(r.nodes=D)}return r.object=a,r;function c(f){const p=[];for(const g in f){const S=f[g];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Dn.DEFAULT_UP=new he(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new he,bi=new he,kc=new he,Pi=new he,Po=new he,Lo=new he,cm=new he,zc=new he,Bc=new he,Hc=new he,Vc=new Xt,Gc=new Xt,Wc=new Xt;class ri{constructor(e=new he,n=new he,r=new he){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ni.subVectors(e,n),a.cross(ni);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ni.subVectors(a,n),bi.subVectors(r,n),kc.subVectors(e,n);const c=ni.dot(ni),f=ni.dot(bi),p=ni.dot(kc),g=bi.dot(bi),S=bi.dot(kc),x=c*g-f*f;if(x===0)return l.set(0,0,0),null;const M=1/x,A=(g*p-f*S)*M,D=(c*S-f*p)*M;return l.set(1-A-D,D,A)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,r,a,l,c,f,p){return this.getBarycoord(e,n,r,a,Pi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Pi.x),p.addScaledVector(c,Pi.y),p.addScaledVector(f,Pi.z),p)}static getInterpolatedAttribute(e,n,r,a,l,c){return Vc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,r),Wc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Vc,l.x),c.addScaledVector(Gc,l.y),c.addScaledVector(Wc,l.z),c}static isFrontFacing(e,n,r,a){return ni.subVectors(r,n),bi.subVectors(e,n),ni.cross(bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ni.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ri.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,f;Po.subVectors(a,r),Lo.subVectors(l,r),zc.subVectors(e,r);const p=Po.dot(zc),g=Lo.dot(zc);if(p<=0&&g<=0)return n.copy(r);Bc.subVectors(e,a);const S=Po.dot(Bc),x=Lo.dot(Bc);if(S>=0&&x<=S)return n.copy(a);const M=p*x-S*g;if(M<=0&&p>=0&&S<=0)return c=p/(p-S),n.copy(r).addScaledVector(Po,c);Hc.subVectors(e,l);const A=Po.dot(Hc),D=Lo.dot(Hc);if(D>=0&&A<=D)return n.copy(l);const R=A*g-p*D;if(R<=0&&g>=0&&D<=0)return f=g/(g-D),n.copy(r).addScaledVector(Lo,f);const T=S*D-A*x;if(T<=0&&x-S>=0&&A-D>=0)return cm.subVectors(l,a),f=(x-S)/(x-S+(A-D)),n.copy(a).addScaledVector(cm,f);const _=1/(T+R+M);return c=R*_,f=M*_,n.copy(r).addScaledVector(Po,c).addScaledVector(Lo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Xc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class bt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Ct.workingColorSpace){if(e=U0(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Xc(c,l,e+1/3),this.g=Xc(c,l,e),this.b=Xc(c,l,e-1/3)}return Ct.toWorkingColorSpace(this,a),this}setStyle(e,n=jn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const r=Pg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Ct.fromWorkingColorSpace(mn.copy(this),e),Math.round(St(mn.r*255,0,255))*65536+Math.round(St(mn.g*255,0,255))*256+Math.round(St(mn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,l=mn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let p,g;const S=(f+c)/2;if(f===c)p=0,g=0;else{const x=c-f;switch(g=S<=.5?x/(c+f):x/(2-c-f),c){case r:p=(a-l)/x+(a<l?6:0);break;case a:p=(l-r)/x+2;break;case l:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=g,e.l=S,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=jn){Ct.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(ul);const r=Rc(cr.h,ul.h,n),a=Rc(cr.s,ul.s,n),l=Rc(cr.l,ul.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new bt;bt.NAMES=Pg;let Q0=0;class Ws extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=ko,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=vf,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gf&&(r.blendSrc=this.blendSrc),this.blendDst!==vf&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lg extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new he,cl=new Dt;class pi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Zp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=bs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array),l=bn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class Dg extends pi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ig extends pi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Yr extends pi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let J0=0;const Xn=new jt,jc=new Dn,Do=new he,kn=new Gs,Is=new Gs,rn=new he;class vr extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?Ig:Dg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Yr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];kn.setFromBufferAttribute(l),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Is.setFromBufferAttribute(f),this.morphTargetsRelative?(rn.addVectors(kn.min,Is.min),kn.expandByPoint(rn),rn.addVectors(kn.max,Is.max),kn.expandByPoint(rn)):(kn.expandByPoint(Is.min),kn.expandByPoint(Is.max))}kn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)rn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let g=0,S=f.count;g<S;g++)rn.fromBufferAttribute(f,g),p&&(Do.fromBufferAttribute(e,g),rn.add(Do)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let G=0;G<r.count;G++)f[G]=new he,p[G]=new he;const g=new he,S=new he,x=new he,M=new Dt,A=new Dt,D=new Dt,R=new he,T=new he;function _(G,E,m){g.fromBufferAttribute(r,G),S.fromBufferAttribute(r,E),x.fromBufferAttribute(r,m),M.fromBufferAttribute(l,G),A.fromBufferAttribute(l,E),D.fromBufferAttribute(l,m),S.sub(g),x.sub(g),A.sub(M),D.sub(M);const N=1/(A.x*D.y-D.x*A.y);isFinite(N)&&(R.copy(S).multiplyScalar(D.y).addScaledVector(x,-A.y).multiplyScalar(N),T.copy(x).multiplyScalar(A.x).addScaledVector(S,-D.x).multiplyScalar(N),f[G].add(R),f[E].add(R),f[m].add(R),p[G].add(T),p[E].add(T),p[m].add(T))}let Y=this.groups;Y.length===0&&(Y=[{start:0,count:e.count}]);for(let G=0,E=Y.length;G<E;++G){const m=Y[G],N=m.start,$=m.count;for(let F=N,H=N+$;F<H;F+=3)_(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const V=new he,k=new he,L=new he,b=new he;function I(G){L.fromBufferAttribute(a,G),b.copy(L);const E=f[G];V.copy(E),V.sub(L.multiplyScalar(L.dot(E))).normalize(),k.crossVectors(b,E);const N=k.dot(p[G])<0?-1:1;c.setXYZW(G,V.x,V.y,V.z,N)}for(let G=0,E=Y.length;G<E;++G){const m=Y[G],N=m.start,$=m.count;for(let F=N,H=N+$;F<H;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new pi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let M=0,A=r.count;M<A;M++)r.setXYZ(M,0,0,0);const a=new he,l=new he,c=new he,f=new he,p=new he,g=new he,S=new he,x=new he;if(e)for(let M=0,A=e.count;M<A;M+=3){const D=e.getX(M+0),R=e.getX(M+1),T=e.getX(M+2);a.fromBufferAttribute(n,D),l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,T),S.subVectors(c,l),x.subVectors(a,l),S.cross(x),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,T),f.add(S),p.add(S),g.add(S),r.setXYZ(D,f.x,f.y,f.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(T,g.x,g.y,g.z)}else for(let M=0,A=n.count;M<A;M+=3)a.fromBufferAttribute(n,M+0),l.fromBufferAttribute(n,M+1),c.fromBufferAttribute(n,M+2),S.subVectors(c,l),x.subVectors(a,l),S.cross(x),r.setXYZ(M+0,S.x,S.y,S.z),r.setXYZ(M+1,S.x,S.y,S.z),r.setXYZ(M+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(f,p){const g=f.array,S=f.itemSize,x=f.normalized,M=new g.constructor(p.length*S);let A=0,D=0;for(let R=0,T=p.length;R<T;R++){f.isInterleavedBufferAttribute?A=p[R]*f.data.stride+f.offset:A=p[R]*S;for(let _=0;_<S;_++)M[D++]=g[A++]}return new pi(M,S,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vr,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],g=e(p,r);n.setAttribute(f,g)}const l=this.morphAttributes;for(const f in l){const p=[],g=l[f];for(let S=0,x=g.length;S<x;S++){const M=g[S],A=e(M,r);p.push(A)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],S=[];for(let x=0,M=g.length;x<M;x++){const A=g[x];S.push(A.toJSON(e.data))}S.length>0&&(a[p]=S,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const g in a){const S=a[g];this.setAttribute(g,S.clone(n))}const l=e.morphAttributes;for(const g in l){const S=[],x=l[g];for(let M=0,A=x.length;M<A;M++)S.push(x[M].clone(n));this.morphAttributes[g]=S}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let g=0,S=c.length;g<S;g++){const x=c[g];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new jt,Or=new Rg,fl=new zl,dm=new he,dl=new he,hl=new he,pl=new he,qc=new he,ml=new he,hm=new he,gl=new he;class Ni extends Dn{constructor(e=new vr,n=new Lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){ml.set(0,0,0);for(let p=0,g=l.length;p<g;p++){const S=f[p],x=l[p];S!==0&&(qc.fromBufferAttribute(x,e),c?ml.addScaledVector(qc,S):ml.addScaledVector(qc.sub(n),S))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(l),Or.copy(e.ray).recast(e.near),!(fl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(fl,dm)===null||Or.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(fm.copy(l).invert(),Or.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,g=l.attributes.uv,S=l.attributes.uv1,x=l.attributes.normal,M=l.groups,A=l.drawRange;if(f!==null)if(Array.isArray(c))for(let D=0,R=M.length;D<R;D++){const T=M[D],_=c[T.materialIndex],Y=Math.max(T.start,A.start),V=Math.min(f.count,Math.min(T.start+T.count,A.start+A.count));for(let k=Y,L=V;k<L;k+=3){const b=f.getX(k),I=f.getX(k+1),G=f.getX(k+2);a=vl(this,_,e,r,g,S,x,b,I,G),a&&(a.faceIndex=Math.floor(k/3),a.face.materialIndex=T.materialIndex,n.push(a))}}else{const D=Math.max(0,A.start),R=Math.min(f.count,A.start+A.count);for(let T=D,_=R;T<_;T+=3){const Y=f.getX(T),V=f.getX(T+1),k=f.getX(T+2);a=vl(this,c,e,r,g,S,x,Y,V,k),a&&(a.faceIndex=Math.floor(T/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let D=0,R=M.length;D<R;D++){const T=M[D],_=c[T.materialIndex],Y=Math.max(T.start,A.start),V=Math.min(p.count,Math.min(T.start+T.count,A.start+A.count));for(let k=Y,L=V;k<L;k+=3){const b=k,I=k+1,G=k+2;a=vl(this,_,e,r,g,S,x,b,I,G),a&&(a.faceIndex=Math.floor(k/3),a.face.materialIndex=T.materialIndex,n.push(a))}}else{const D=Math.max(0,A.start),R=Math.min(p.count,A.start+A.count);for(let T=D,_=R;T<_;T+=3){const Y=T,V=T+1,k=T+2;a=vl(this,c,e,r,g,S,x,Y,V,k),a&&(a.faceIndex=Math.floor(T/3),n.push(a))}}}}function ey(o,e,n,r,a,l,c,f){let p;if(e.side===Pn?p=r.intersectTriangle(c,l,a,!0,f):p=r.intersectTriangle(a,l,c,e.side===mr,f),p===null)return null;gl.copy(f),gl.applyMatrix4(o.matrixWorld);const g=n.ray.origin.distanceTo(gl);return g<n.near||g>n.far?null:{distance:g,point:gl.clone(),object:o}}function vl(o,e,n,r,a,l,c,f,p,g){o.getVertexPosition(f,dl),o.getVertexPosition(p,hl),o.getVertexPosition(g,pl);const S=ey(o,e,n,r,dl,hl,pl,hm);if(S){const x=new he;ri.getBarycoord(hm,dl,hl,pl,x),a&&(S.uv=ri.getInterpolatedAttribute(a,f,p,g,x,new Dt)),l&&(S.uv1=ri.getInterpolatedAttribute(l,f,p,g,x,new Dt)),c&&(S.normal=ri.getInterpolatedAttribute(c,f,p,g,x,new he),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const M={a:f,b:p,c:g,normal:new he,materialIndex:0};ri.getNormal(dl,hl,pl,M.normal),S.face=M,S.barycoord=x}return S}class Xs extends vr{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],g=[],S=[],x=[];let M=0,A=0;D("z","y","x",-1,-1,r,n,e,c,l,0),D("z","y","x",1,-1,r,n,-e,c,l,1),D("x","z","y",1,1,e,r,n,a,c,2),D("x","z","y",1,-1,e,r,-n,a,c,3),D("x","y","z",1,-1,e,n,r,a,l,4),D("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new Yr(g,3)),this.setAttribute("normal",new Yr(S,3)),this.setAttribute("uv",new Yr(x,2));function D(R,T,_,Y,V,k,L,b,I,G,E){const m=k/I,N=L/G,$=k/2,F=L/2,H=b/2,ne=I+1,K=G+1;let y=0,q=0;const O=new he;for(let v=0;v<K;v++){const w=v*N-F;for(let B=0;B<ne;B++){const ue=B*m-$;O[R]=ue*Y,O[T]=w*V,O[_]=H,g.push(O.x,O.y,O.z),O[R]=0,O[T]=0,O[_]=b>0?1:-1,S.push(O.x,O.y,O.z),x.push(B/I),x.push(1-v/G),y+=1}}for(let v=0;v<G;v++)for(let w=0;w<I;w++){const B=M+w+ne*v,ue=M+w+ne*(v+1),X=M+(w+1)+ne*(v+1),Q=M+(w+1)+ne*v;p.push(B,ue,Q),p.push(ue,X,Q),q+=6}f.addGroup(A,q,E),A+=q,M+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qo(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function xn(o){const e={};for(let n=0;n<o.length;n++){const r=qo(o[n]);for(const a in r)e[a]=r[a]}return e}function ty(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Ug(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const ny={clone:qo,merge:xn};var iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qo(e.uniforms),this.uniformsGroups=ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ng extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new he,pm=new Dt,mm=new Dt;class ii extends Ng{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,g=c.fullHeight;l+=c.offsetX*a/p,n-=c.offsetY*r/g,a*=c.width/p,r*=c.height/g}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Io=-90,Uo=1;class oy extends Dn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(Io,Uo,e,n);a.layers=this.layers,this.add(a);const l=new ii(Io,Uo,e,n);l.layers=this.layers,this.add(l);const c=new ii(Io,Uo,e,n);c.layers=this.layers,this.add(c);const f=new ii(Io,Uo,e,n);f.layers=this.layers,this.add(f);const p=new ii(Io,Uo,e,n);p.layers=this.layers,this.add(p);const g=new ii(Io,Uo,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,f,p]=n;for(const g of n)this.remove(g);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ul)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,g,S]=this.children,x=e.getRenderTarget(),M=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),D=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,S),e.setRenderTarget(x,M,A),e.xr.enabled=D,r.texture.needsPMREMUpdate=!0}}class Og extends Ln{constructor(e,n,r,a,l,c,f,p,g,S){e=e!==void 0?e:[],n=n!==void 0?n:Vo,super(e,n,r,a,l,c,f,p,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sy extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Og(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Xs(5,5,5),l=new gr({name:"CubemapFromEquirect",uniforms:qo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:hr});l.uniforms.tEquirect.value=n;const c=new Ni(a,l),f=n.minFilter;return n.minFilter===jr&&(n.minFilter=hi),new oy(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class k1 extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yc=new he,ay=new he,ly=new ht;class Hr{constructor(e=new he(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Yc.subVectors(r,n).cross(ay.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Yc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ly.getNormalMatrix(e),a=this.coplanarPoint(Yc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new zl,_l=new he;class Fg{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,l=new Hr,c=new Hr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ui){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],p=a[3],g=a[4],S=a[5],x=a[6],M=a[7],A=a[8],D=a[9],R=a[10],T=a[11],_=a[12],Y=a[13],V=a[14],k=a[15];if(r[0].setComponents(p-l,M-g,T-A,k-_).normalize(),r[1].setComponents(p+l,M+g,T+A,k+_).normalize(),r[2].setComponents(p+c,M+S,T+D,k+Y).normalize(),r[3].setComponents(p-c,M-S,T-D,k-Y).normalize(),r[4].setComponents(p-f,M-x,T-R,k-V).normalize(),n===Ui)r[5].setComponents(p+f,M+x,T+R,k+V).normalize();else if(n===Ul)r[5].setComponents(f,x,R,V).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uy extends Ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gm=new jt,nd=new Rg,yl=new zl,Sl=new he;class z1 extends Dn{constructor(e=new vr,n=new uy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(a),yl.radius+=l,e.ray.intersectsSphere(yl)===!1)return;gm.copy(a).invert(),nd.copy(e.ray).applyMatrix4(gm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,g=r.index,x=r.attributes.position;if(g!==null){const M=Math.max(0,c.start),A=Math.min(g.count,c.start+c.count);for(let D=M,R=A;D<R;D++){const T=g.getX(D);Sl.fromBufferAttribute(x,T),vm(Sl,T,p,a,e,n,this)}}else{const M=Math.max(0,c.start),A=Math.min(x.count,c.start+c.count);for(let D=M,R=A;D<R;D++)Sl.fromBufferAttribute(x,D),vm(Sl,D,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function vm(o,e,n,r,a,l,c){const f=nd.distanceSqToPoint(o);if(f<n){const p=new he;nd.closestPointToPoint(o,p),p.applyMatrix4(r);const g=a.ray.origin.distanceTo(p);if(g<a.near||g>a.far)return;l.push({distance:g,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class xl extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class kg extends Ln{constructor(e,n,r,a,l,c,f,p,g,S=zo){if(S!==zo&&S!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&S===zo&&(r=$r),r===void 0&&S===Xo&&(r=Wo),super(null,a,l,c,f,p,S,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:si,this.minFilter=p!==void 0?p:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bl extends vr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,f=Math.floor(r),p=Math.floor(a),g=f+1,S=p+1,x=e/f,M=n/p,A=[],D=[],R=[],T=[];for(let _=0;_<S;_++){const Y=_*M-c;for(let V=0;V<g;V++){const k=V*x-l;D.push(k,-Y,0),R.push(0,0,1),T.push(V/f),T.push(1-_/p)}}for(let _=0;_<p;_++)for(let Y=0;Y<f;Y++){const V=Y+g*_,k=Y+g*(_+1),L=Y+1+g*(_+1),b=Y+1+g*_;A.push(V,k,b),A.push(k,L,b)}this.setIndex(A),this.setAttribute("position",new Yr(D,3)),this.setAttribute("normal",new Yr(R,3)),this.setAttribute("uv",new Yr(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}class cy extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fy extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dy extends Ng{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,c=l+g*this.view.width,f-=S*this.view.offsetY,p=f-S*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class hy extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function _m(o,e,n,r){const a=py(r);switch(n){case vg:return o*e;case yg:return o*e;case Sg:return o*e*2;case xg:return o*e/a.components*a.byteLength;case ud:return o*e/a.components*a.byteLength;case Mg:return o*e*2/a.components*a.byteLength;case cd:return o*e*2/a.components*a.byteLength;case _g:return o*e*3/a.components*a.byteLength;case oi:return o*e*4/a.components*a.byteLength;case fd:return o*e*4/a.components*a.byteLength;case wl:case Al:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pf:case Df:return Math.max(o,16)*Math.max(e,8)/4;case bf:case Lf:return Math.max(o,8)*Math.max(e,8)/2;case If:case Uf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case jf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case qf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case $f:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bl:case Kf:case Zf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Eg:case Qf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Jf:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function py(o){switch(o){case Fi:case pg:return{byteLength:1,components:1};case ks:case mg:case Bs:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case $r:case sd:case Ii:return{byteLength:4,components:1};case gg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zg(){let o=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function my(o){const e=new WeakMap;function n(f,p){const g=f.array,S=f.usage,x=g.byteLength,M=o.createBuffer();o.bindBuffer(p,M),o.bufferData(p,g,S),f.onUploadCallback();let A;if(g instanceof Float32Array)A=o.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?A=o.HALF_FLOAT:A=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=o.SHORT;else if(g instanceof Uint32Array)A=o.UNSIGNED_INT;else if(g instanceof Int32Array)A=o.INT;else if(g instanceof Int8Array)A=o.BYTE;else if(g instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,p,g){const S=p.array,x=p.updateRanges;if(o.bindBuffer(g,f),x.length===0)o.bufferSubData(g,0,S);else{x.sort((A,D)=>A.start-D.start);let M=0;for(let A=1;A<x.length;A++){const D=x[M],R=x[A];R.start<=D.start+D.count+1?D.count=Math.max(D.count,R.start+R.count-D.start):(++M,x[M]=R)}x.length=M+1;for(let A=0,D=x.length;A<D;A++){const R=x[A];o.bufferSubData(g,R.start*S.BYTES_PER_ELEMENT,S,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(o.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const S=e.get(f);(!S||S.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,p),g.version=f.version}}return{get:a,remove:l,update:c}}var gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
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
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
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
#endif`,Ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ty=`#ifdef USE_BATCHING
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
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ry=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,by=`#ifdef USE_IRIDESCENCE
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
#endif`,Py=`#ifdef USE_BUMPMAP
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zy=`#define PI 3.141592653589793
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
} // validated`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hy=`vec3 transformedNormal = objectNormal;
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
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iS=`#ifdef USE_GRADIENTMAP
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
}`,rS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aS=`uniform bool receiveShadow;
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
#endif`,lS=`#ifdef USE_ENVMAP
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
#endif`,uS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
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
#endif`,pS=`struct PhysicalMaterial {
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
}`,mS=`
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
#endif`,gS=`#if defined( RE_IndirectDiffuse )
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
#endif`,vS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_S=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ES=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wS=`#if defined( USE_POINTS_UV )
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
#endif`,AS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`#ifdef USE_MORPHTARGETS
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
#endif`,DS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,US=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kS=`#ifdef USE_NORMALMAP
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
#endif`,zS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ex=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Px=`uniform vec3 diffuse;
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
}`,Lx=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Ix=`#define MATCAP
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
}`,Ux=`#define MATCAP
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
}`,Nx=`#define NORMAL
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
}`,Ox=`#define NORMAL
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
}`,Fx=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,Bx=`#define STANDARD
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
}`,Hx=`#define TOON
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
}`,Vx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,jx=`uniform vec3 color;
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
}`,qx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:gy,alphahash_pars_fragment:vy,alphamap_fragment:_y,alphamap_pars_fragment:yy,alphatest_fragment:Sy,alphatest_pars_fragment:xy,aomap_fragment:My,aomap_pars_fragment:Ey,batching_pars_vertex:Ty,batching_vertex:wy,begin_vertex:Ay,beginnormal_vertex:Cy,bsdfs:Ry,iridescence_fragment:by,bumpmap_pars_fragment:Py,clipping_planes_fragment:Ly,clipping_planes_pars_fragment:Dy,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:Uy,color_fragment:Ny,color_pars_fragment:Oy,color_pars_vertex:Fy,color_vertex:ky,common:zy,cube_uv_reflection_fragment:By,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Vy,displacementmap_vertex:Gy,emissivemap_fragment:Wy,emissivemap_pars_fragment:Xy,colorspace_fragment:jy,colorspace_pars_fragment:qy,envmap_fragment:Yy,envmap_common_pars_fragment:$y,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:lS,envmap_vertex:Qy,fog_vertex:Jy,fog_pars_vertex:eS,fog_fragment:tS,fog_pars_fragment:nS,gradientmap_pars_fragment:iS,lightmap_pars_fragment:rS,lights_lambert_fragment:oS,lights_lambert_pars_fragment:sS,lights_pars_begin:aS,lights_toon_fragment:uS,lights_toon_pars_fragment:cS,lights_phong_fragment:fS,lights_phong_pars_fragment:dS,lights_physical_fragment:hS,lights_physical_pars_fragment:pS,lights_fragment_begin:mS,lights_fragment_maps:gS,lights_fragment_end:vS,logdepthbuf_fragment:_S,logdepthbuf_pars_fragment:yS,logdepthbuf_pars_vertex:SS,logdepthbuf_vertex:xS,map_fragment:MS,map_pars_fragment:ES,map_particle_fragment:TS,map_particle_pars_fragment:wS,metalnessmap_fragment:AS,metalnessmap_pars_fragment:CS,morphinstance_vertex:RS,morphcolor_vertex:bS,morphnormal_vertex:PS,morphtarget_pars_vertex:LS,morphtarget_vertex:DS,normal_fragment_begin:IS,normal_fragment_maps:US,normal_pars_fragment:NS,normal_pars_vertex:OS,normal_vertex:FS,normalmap_pars_fragment:kS,clearcoat_normal_fragment_begin:zS,clearcoat_normal_fragment_maps:BS,clearcoat_pars_fragment:HS,iridescence_pars_fragment:VS,opaque_fragment:GS,packing:WS,premultiplied_alpha_fragment:XS,project_vertex:jS,dithering_fragment:qS,dithering_pars_fragment:YS,roughnessmap_fragment:$S,roughnessmap_pars_fragment:KS,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:QS,shadowmap_vertex:JS,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:rx,specularmap_fragment:ox,specularmap_pars_fragment:sx,tonemapping_fragment:ax,tonemapping_pars_fragment:lx,transmission_fragment:ux,transmission_pars_fragment:cx,uv_pars_fragment:fx,uv_pars_vertex:dx,uv_vertex:hx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:vx,backgroundCube_frag:_x,cube_vert:yx,cube_frag:Sx,depth_vert:xx,depth_frag:Mx,distanceRGBA_vert:Ex,distanceRGBA_frag:Tx,equirect_vert:wx,equirect_frag:Ax,linedashed_vert:Cx,linedashed_frag:Rx,meshbasic_vert:bx,meshbasic_frag:Px,meshlambert_vert:Lx,meshlambert_frag:Dx,meshmatcap_vert:Ix,meshmatcap_frag:Ux,meshnormal_vert:Nx,meshnormal_frag:Ox,meshphong_vert:Fx,meshphong_frag:kx,meshphysical_vert:zx,meshphysical_frag:Bx,meshtoon_vert:Hx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Wx,shadow_vert:Xx,shadow_frag:jx,sprite_vert:qx,sprite_frag:Yx},Ue={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},di={basic:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:xn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:xn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:xn([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:xn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:xn([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:xn([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:xn([Ue.common,Ue.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:xn([Ue.lights,Ue.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};di.physical={uniforms:xn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ml={r:0,b:0,g:0},kr=new ki,$x=new jt;function Kx(o,e,n,r,a,l,c){const f=new bt(0);let p=l===!0?0:1,g,S,x=null,M=0,A=null;function D(V){let k=V.isScene===!0?V.background:null;return k&&k.isTexture&&(k=(V.backgroundBlurriness>0?n:e).get(k)),k}function R(V){let k=!1;const L=D(V);L===null?_(f,p):L&&L.isColor&&(_(L,1),k=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,c):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(o.autoClear||k)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(V,k){const L=D(k);L&&(L.isCubeTexture||L.mapping===kl)?(S===void 0&&(S=new Ni(new Xs(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:qo(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(b,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(S)),kr.copy(k.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),S.material.uniforms.envMap.value=L,S.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(kr)),S.material.toneMapped=Ct.getTransfer(L.colorSpace)!==Lt,(x!==L||M!==L.version||A!==o.toneMapping)&&(S.material.needsUpdate=!0,x=L,M=L.version,A=o.toneMapping),S.layers.enableAll(),V.unshift(S,S.geometry,S.material,0,0,null)):L&&L.isTexture&&(g===void 0&&(g=new Ni(new Bl(2,2),new gr({name:"BackgroundMaterial",uniforms:qo(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=L,g.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,g.material.toneMapped=Ct.getTransfer(L.colorSpace)!==Lt,L.matrixAutoUpdate===!0&&L.updateMatrix(),g.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||M!==L.version||A!==o.toneMapping)&&(g.material.needsUpdate=!0,x=L,M=L.version,A=o.toneMapping),g.layers.enableAll(),V.unshift(g,g.geometry,g.material,0,0,null))}function _(V,k){V.getRGB(Ml,Ug(o)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,k,c)}function Y(){S!==void 0&&(S.geometry.dispose(),S.material.dispose()),g!==void 0&&(g.geometry.dispose(),g.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(V,k=1){f.set(V),p=k,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(V){p=V,_(f,p)},render:R,addToRenderList:T,dispose:Y}}function Zx(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=M(null);let l=a,c=!1;function f(m,N,$,F,H){let ne=!1;const K=x(F,$,N);l!==K&&(l=K,g(l.object)),ne=A(m,F,$,H),ne&&D(m,F,$,H),H!==null&&e.update(H,o.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,k(m,N,$,F),H!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function p(){return o.createVertexArray()}function g(m){return o.bindVertexArray(m)}function S(m){return o.deleteVertexArray(m)}function x(m,N,$){const F=$.wireframe===!0;let H=r[m.id];H===void 0&&(H={},r[m.id]=H);let ne=H[N.id];ne===void 0&&(ne={},H[N.id]=ne);let K=ne[F];return K===void 0&&(K=M(p()),ne[F]=K),K}function M(m){const N=[],$=[],F=[];for(let H=0;H<n;H++)N[H]=0,$[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:$,attributeDivisors:F,object:m,attributes:{},index:null}}function A(m,N,$,F){const H=l.attributes,ne=N.attributes;let K=0;const y=$.getAttributes();for(const q in y)if(y[q].location>=0){const v=H[q];let w=ne[q];if(w===void 0&&(q==="instanceMatrix"&&m.instanceMatrix&&(w=m.instanceMatrix),q==="instanceColor"&&m.instanceColor&&(w=m.instanceColor)),v===void 0||v.attribute!==w||w&&v.data!==w.data)return!0;K++}return l.attributesNum!==K||l.index!==F}function D(m,N,$,F){const H={},ne=N.attributes;let K=0;const y=$.getAttributes();for(const q in y)if(y[q].location>=0){let v=ne[q];v===void 0&&(q==="instanceMatrix"&&m.instanceMatrix&&(v=m.instanceMatrix),q==="instanceColor"&&m.instanceColor&&(v=m.instanceColor));const w={};w.attribute=v,v&&v.data&&(w.data=v.data),H[q]=w,K++}l.attributes=H,l.attributesNum=K,l.index=F}function R(){const m=l.newAttributes;for(let N=0,$=m.length;N<$;N++)m[N]=0}function T(m){_(m,0)}function _(m,N){const $=l.newAttributes,F=l.enabledAttributes,H=l.attributeDivisors;$[m]=1,F[m]===0&&(o.enableVertexAttribArray(m),F[m]=1),H[m]!==N&&(o.vertexAttribDivisor(m,N),H[m]=N)}function Y(){const m=l.newAttributes,N=l.enabledAttributes;for(let $=0,F=N.length;$<F;$++)N[$]!==m[$]&&(o.disableVertexAttribArray($),N[$]=0)}function V(m,N,$,F,H,ne,K){K===!0?o.vertexAttribIPointer(m,N,$,H,ne):o.vertexAttribPointer(m,N,$,F,H,ne)}function k(m,N,$,F){R();const H=F.attributes,ne=$.getAttributes(),K=N.defaultAttributeValues;for(const y in ne){const q=ne[y];if(q.location>=0){let O=H[y];if(O===void 0&&(y==="instanceMatrix"&&m.instanceMatrix&&(O=m.instanceMatrix),y==="instanceColor"&&m.instanceColor&&(O=m.instanceColor)),O!==void 0){const v=O.normalized,w=O.itemSize,B=e.get(O);if(B===void 0)continue;const ue=B.buffer,X=B.type,Q=B.bytesPerElement,re=X===o.INT||X===o.UNSIGNED_INT||O.gpuType===sd;if(O.isInterleavedBufferAttribute){const oe=O.data,ge=oe.stride,Se=O.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<q.locationSize;Ce++)_(q.location+Ce,oe.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)T(q.location+Ce);o.bindBuffer(o.ARRAY_BUFFER,ue);for(let Ce=0;Ce<q.locationSize;Ce++)V(q.location+Ce,w/q.locationSize,X,v,ge*Q,(Se+w/q.locationSize*Ce)*Q,re)}else{if(O.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)_(q.location+oe,O.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let oe=0;oe<q.locationSize;oe++)T(q.location+oe);o.bindBuffer(o.ARRAY_BUFFER,ue);for(let oe=0;oe<q.locationSize;oe++)V(q.location+oe,w/q.locationSize,X,v,w*Q,w/q.locationSize*oe*Q,re)}}else if(K!==void 0){const v=K[y];if(v!==void 0)switch(v.length){case 2:o.vertexAttrib2fv(q.location,v);break;case 3:o.vertexAttrib3fv(q.location,v);break;case 4:o.vertexAttrib4fv(q.location,v);break;default:o.vertexAttrib1fv(q.location,v)}}}}Y()}function L(){G();for(const m in r){const N=r[m];for(const $ in N){const F=N[$];for(const H in F)S(F[H].object),delete F[H];delete N[$]}delete r[m]}}function b(m){if(r[m.id]===void 0)return;const N=r[m.id];for(const $ in N){const F=N[$];for(const H in F)S(F[H].object),delete F[H];delete N[$]}delete r[m.id]}function I(m){for(const N in r){const $=r[N];if($[m.id]===void 0)continue;const F=$[m.id];for(const H in F)S(F[H].object),delete F[H];delete $[m.id]}}function G(){E(),c=!0,l!==a&&(l=a,g(l.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:T,disableUnusedAttributes:Y}}function Qx(o,e,n){let r;function a(g){r=g}function l(g,S){o.drawArrays(r,g,S),n.update(S,r,1)}function c(g,S,x){x!==0&&(o.drawArraysInstanced(r,g,S,x),n.update(S,r,x))}function f(g,S,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,S,0,x);let A=0;for(let D=0;D<x;D++)A+=S[D];n.update(A,r,1)}function p(g,S,x,M){if(x===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let D=0;D<g.length;D++)c(g[D],S[D],M[D]);else{A.multiDrawArraysInstancedWEBGL(r,g,0,S,0,M,0,x);let D=0;for(let R=0;R<x;R++)D+=S[R]*M[R];n.update(D,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Jx(o,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==oi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const G=I===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Fi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ii&&!G)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const S=p(g);S!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const x=n.logarithmicDepthBuffer===!0,M=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),A=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),Y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),V=o.getParameter(o.MAX_VARYING_VECTORS),k=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=D>0,b=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:x,reverseDepthBuffer:M,maxTextures:A,maxVertexTextures:D,maxTextureSize:R,maxCubemapSize:T,maxAttributes:_,maxVertexUniforms:Y,maxVaryings:V,maxFragmentUniforms:k,vertexTextures:L,maxSamples:b}}function eM(o){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Hr,f=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,M){const A=x.length!==0||M||r!==0||a;return a=M,r=x.length,A},this.beginShadows=function(){l=!0,S(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,M){n=S(x,M,0)},this.setState=function(x,M,A){const D=x.clippingPlanes,R=x.clipIntersection,T=x.clipShadows,_=o.get(x);if(!a||D===null||D.length===0||l&&!T)l?S(null):g();else{const Y=l?0:r,V=Y*4;let k=_.clippingState||null;p.value=k,k=S(D,M,V,A);for(let L=0;L!==V;++L)k[L]=n[L];_.clippingState=k,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=Y}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(x,M,A,D){const R=x!==null?x.length:0;let T=null;if(R!==0){if(T=p.value,D!==!0||T===null){const _=A+R*4,Y=M.matrixWorldInverse;f.getNormalMatrix(Y),(T===null||T.length<_)&&(T=new Float32Array(_));for(let V=0,k=A;V!==R;++V,k+=4)c.copy(x[V]).applyMatrix4(Y,f),c.normal.toArray(T,k),T[k+3]=c.constant}p.value=T,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,T}}function tM(o){let e=new WeakMap;function n(c,f){return f===wf?c.mapping=Vo:f===Af&&(c.mapping=Go),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===wf||f===Af)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const g=new sy(p.height);return g.fromEquirectangularTexture(o,c),e.set(c,g),c.addEventListener("dispose",a),n(g.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Fo=4,ym=[.125,.215,.35,.446,.526,.582],Wr=20,$c=new dy,Sm=new bt;let Kc=null,Zc=0,Qc=0,Jc=!1;const Vr=(1+Math.sqrt(5))/2,No=1/Vr,xm=[new he(-Vr,No,0),new he(Vr,No,0),new he(-No,0,Vr),new he(No,0,Vr),new he(0,Vr,-No),new he(0,Vr,No),new he(-1,1,-1),new he(1,1,-1),new he(-1,1,1),new he(1,1,1)];class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vo||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Bs,format:oi,colorSpace:jo,depthBuffer:!1},a=Em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nM(l)),this._blurMaterial=iM(l,e,n)}return a}_compileMaterial(e){const n=new Ni(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,r,a){const f=new ii(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Sm),S.toneMapping=pr,S.autoClear=!1;const A=new Lg({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),D=new Ni(new Xs,A);let R=!1;const T=e.background;T?T.isColor&&(A.color.copy(T),e.background=null,R=!0):(A.color.copy(Sm),R=!0);for(let _=0;_<6;_++){const Y=_%3;Y===0?(f.up.set(0,p[_],0),f.lookAt(g[_],0,0)):Y===1?(f.up.set(0,0,p[_]),f.lookAt(0,g[_],0)):(f.up.set(0,p[_],0),f.lookAt(0,0,g[_]));const V=this._cubeSize;El(a,Y*V,_>2?V:0,V,V),S.setRenderTarget(a),R&&S.render(D,f),S.render(e,f)}D.geometry.dispose(),D.material.dispose(),S.toneMapping=M,S.autoClear=x,e.background=T}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vo||e.mapping===Go;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Ni(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;El(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,$c)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=xm[(a-l-1)%xm.length];this._blur(e,l-1,l,c,f)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,f){const p=this._renderer,g=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,x=new Ni(this._lodPlanes[a],g),M=g.uniforms,A=this._sizeLods[r]-1,D=isFinite(l)?Math.PI/(2*A):2*Math.PI/(2*Wr-1),R=l/D,T=isFinite(l)?1+Math.floor(S*R):Wr;T>Wr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${Wr}`);const _=[];let Y=0;for(let I=0;I<Wr;++I){const G=I/R,E=Math.exp(-G*G/2);_.push(E),I===0?Y+=E:I<T&&(Y+=2*E)}for(let I=0;I<_.length;I++)_[I]=_[I]/Y;M.envMap.value=e.texture,M.samples.value=T,M.weights.value=_,M.latitudinal.value=c==="latitudinal",f&&(M.poleAxis.value=f);const{_lodMax:V}=this;M.dTheta.value=D,M.mipInt.value=V-r;const k=this._sizeLods[a],L=3*k*(a>V-Fo?a-V+Fo:0),b=4*(this._cubeSize-k);El(n,L,b,3*k,2*k),p.setRenderTarget(n),p.render(x,$c)}}function nM(o){const e=[],n=[],r=[];let a=o;const l=o-Fo+1+ym.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);n.push(f);let p=1/f;c>o-Fo?p=ym[c-o+Fo-1]:c===0&&(p=0),r.push(p);const g=1/(f-2),S=-g,x=1+g,M=[S,S,x,S,x,x,S,S,x,x,S,x],A=6,D=6,R=3,T=2,_=1,Y=new Float32Array(R*D*A),V=new Float32Array(T*D*A),k=new Float32Array(_*D*A);for(let b=0;b<A;b++){const I=b%3*2/3-1,G=b>2?0:-1,E=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];Y.set(E,R*D*b),V.set(M,T*D*b);const m=[b,b,b,b,b,b];k.set(m,_*D*b)}const L=new vr;L.setAttribute("position",new pi(Y,R)),L.setAttribute("uv",new pi(V,T)),L.setAttribute("faceIndex",new pi(k,_)),e.push(L),a>Fo&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Em(o,e,n){const r=new Kr(o,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function iM(o,e,n){const r=new Float32Array(Wr),a=new he(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:dd(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Tm(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function wm(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function dd(){return`

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
	`}function rM(o){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,g=p===wf||p===Af,S=p===Vo||p===Go;if(g||S){let x=e.get(f);const M=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==M)return n===null&&(n=new Mm(o)),x=g?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const A=f.image;return g&&A&&A.height>0||S&&A&&a(A)?(n===null&&(n=new Mm(o)),x=g?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let p=0;const g=6;for(let S=0;S<g;S++)f[S]!==void 0&&p++;return p===g}function l(f){const p=f.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function oM(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Oo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function sM(o,e,n,r){const a={},l=new WeakMap;function c(x){const M=x.target;M.index!==null&&e.remove(M.index);for(const D in M.attributes)e.remove(M.attributes[D]);M.removeEventListener("dispose",c),delete a[M.id];const A=l.get(M);A&&(e.remove(A),l.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,n.memory.geometries--}function f(x,M){return a[M.id]===!0||(M.addEventListener("dispose",c),a[M.id]=!0,n.memory.geometries++),M}function p(x){const M=x.attributes;for(const A in M)e.update(M[A],o.ARRAY_BUFFER)}function g(x){const M=[],A=x.index,D=x.attributes.position;let R=0;if(A!==null){const Y=A.array;R=A.version;for(let V=0,k=Y.length;V<k;V+=3){const L=Y[V+0],b=Y[V+1],I=Y[V+2];M.push(L,b,b,I,I,L)}}else if(D!==void 0){const Y=D.array;R=D.version;for(let V=0,k=Y.length/3-1;V<k;V+=3){const L=V+0,b=V+1,I=V+2;M.push(L,b,b,I,I,L)}}else return;const T=new(wg(M)?Ig:Dg)(M,1);T.version=R;const _=l.get(x);_&&e.remove(_),l.set(x,T)}function S(x){const M=l.get(x);if(M){const A=x.index;A!==null&&M.version<A.version&&g(x)}else g(x);return l.get(x)}return{get:f,update:p,getWireframeAttribute:S}}function aM(o,e,n){let r;function a(M){r=M}let l,c;function f(M){l=M.type,c=M.bytesPerElement}function p(M,A){o.drawElements(r,A,l,M*c),n.update(A,r,1)}function g(M,A,D){D!==0&&(o.drawElementsInstanced(r,A,l,M*c,D),n.update(A,r,D))}function S(M,A,D){if(D===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,A,0,l,M,0,D);let T=0;for(let _=0;_<D;_++)T+=A[_];n.update(T,r,1)}function x(M,A,D,R){if(D===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let _=0;_<M.length;_++)g(M[_]/c,A[_],R[_]);else{T.multiDrawElementsInstancedWEBGL(r,A,0,l,M,0,R,0,D);let _=0;for(let Y=0;Y<D;Y++)_+=A[Y]*R[Y];n.update(_,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=S,this.renderMultiDrawInstances=x}function lM(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function uM(o,e,n){const r=new WeakMap,a=new Xt;function l(c,f,p){const g=c.morphTargetInfluences,S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=S!==void 0?S.length:0;let M=r.get(f);if(M===void 0||M.count!==x){let E=function(){I.dispose(),r.delete(f),f.removeEventListener("dispose",E)};M!==void 0&&M.texture.dispose();const A=f.morphAttributes.position!==void 0,D=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],_=f.morphAttributes.normal||[],Y=f.morphAttributes.color||[];let V=0;A===!0&&(V=1),D===!0&&(V=2),R===!0&&(V=3);let k=f.attributes.position.count*V,L=1;k>e.maxTextureSize&&(L=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const b=new Float32Array(k*L*4*x),I=new Cg(b,k,L,x);I.type=Ii,I.needsUpdate=!0;const G=V*4;for(let m=0;m<x;m++){const N=T[m],$=_[m],F=Y[m],H=k*L*4*m;for(let ne=0;ne<N.count;ne++){const K=ne*G;A===!0&&(a.fromBufferAttribute(N,ne),b[H+K+0]=a.x,b[H+K+1]=a.y,b[H+K+2]=a.z,b[H+K+3]=0),D===!0&&(a.fromBufferAttribute($,ne),b[H+K+4]=a.x,b[H+K+5]=a.y,b[H+K+6]=a.z,b[H+K+7]=0),R===!0&&(a.fromBufferAttribute(F,ne),b[H+K+8]=a.x,b[H+K+9]=a.y,b[H+K+10]=a.z,b[H+K+11]=F.itemSize===4?a.w:1)}}M={count:x,texture:I,size:new Dt(k,L)},r.set(f,M),f.addEventListener("dispose",E)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let A=0;for(let R=0;R<g.length;R++)A+=g[R];const D=f.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",D),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",M.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",M.size)}return{update:l}}function cM(o,e,n,r){let a=new WeakMap;function l(p){const g=r.render.frame,S=p.geometry,x=e.get(p,S);if(a.get(x)!==g&&(e.update(x),a.set(x,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==g&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,g))),p.isSkinnedMesh){const M=p.skeleton;a.get(M)!==g&&(M.update(),a.set(M,g))}return x}function c(){a=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:c}}const Bg=new Ln,Am=new kg(1,1),Hg=new Cg,Vg=new W0,Gg=new Og,Cm=[],Rm=[],bm=new Float32Array(16),Pm=new Float32Array(9),Lm=new Float32Array(4);function Ko(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let l=Cm[a];if(l===void 0&&(l=new Float32Array(a),Cm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,o[c].toArray(l,f)}return l}function Qt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Jt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Hl(o,e){let n=Rm[e];n===void 0&&(n=new Int32Array(e),Rm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function fM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function dM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;o.uniform2fv(this.addr,e),Jt(n,e)}}function hM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;o.uniform3fv(this.addr,e),Jt(n,e)}}function pM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;o.uniform4fv(this.addr,e),Jt(n,e)}}function mM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;Lm.set(r),o.uniformMatrix2fv(this.addr,!1,Lm),Jt(n,r)}}function gM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;Pm.set(r),o.uniformMatrix3fv(this.addr,!1,Pm),Jt(n,r)}}function vM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;bm.set(r),o.uniformMatrix4fv(this.addr,!1,bm),Jt(n,r)}}function _M(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function yM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;o.uniform2iv(this.addr,e),Jt(n,e)}}function SM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;o.uniform3iv(this.addr,e),Jt(n,e)}}function xM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;o.uniform4iv(this.addr,e),Jt(n,e)}}function MM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function EM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;o.uniform2uiv(this.addr,e),Jt(n,e)}}function TM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;o.uniform3uiv(this.addr,e),Jt(n,e)}}function wM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;o.uniform4uiv(this.addr,e),Jt(n,e)}}function AM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let l;this.type===o.SAMPLER_2D_SHADOW?(Am.compareFunction=Tg,l=Am):l=Bg,n.setTexture2D(e||l,a)}function CM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Vg,a)}function RM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Gg,a)}function bM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Hg,a)}function PM(o){switch(o){case 5126:return fM;case 35664:return dM;case 35665:return hM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return vM;case 5124:case 35670:return _M;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return xM;case 5125:return MM;case 36294:return EM;case 36295:return TM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return bM}}function LM(o,e){o.uniform1fv(this.addr,e)}function DM(o,e){const n=Ko(e,this.size,2);o.uniform2fv(this.addr,n)}function IM(o,e){const n=Ko(e,this.size,3);o.uniform3fv(this.addr,n)}function UM(o,e){const n=Ko(e,this.size,4);o.uniform4fv(this.addr,n)}function NM(o,e){const n=Ko(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function OM(o,e){const n=Ko(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function FM(o,e){const n=Ko(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function kM(o,e){o.uniform1iv(this.addr,e)}function zM(o,e){o.uniform2iv(this.addr,e)}function BM(o,e){o.uniform3iv(this.addr,e)}function HM(o,e){o.uniform4iv(this.addr,e)}function VM(o,e){o.uniform1uiv(this.addr,e)}function GM(o,e){o.uniform2uiv(this.addr,e)}function WM(o,e){o.uniform3uiv(this.addr,e)}function XM(o,e){o.uniform4uiv(this.addr,e)}function jM(o,e,n){const r=this.cache,a=e.length,l=Hl(n,a);Qt(r,l)||(o.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Bg,l[c])}function qM(o,e,n){const r=this.cache,a=e.length,l=Hl(n,a);Qt(r,l)||(o.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Vg,l[c])}function YM(o,e,n){const r=this.cache,a=e.length,l=Hl(n,a);Qt(r,l)||(o.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Gg,l[c])}function $M(o,e,n){const r=this.cache,a=e.length,l=Hl(n,a);Qt(r,l)||(o.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Hg,l[c])}function KM(o){switch(o){case 5126:return LM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return OM;case 35676:return FM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return BM;case 35669:case 35673:return HM;case 5125:return VM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return $M}}class ZM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=PM(n.type)}}class QM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KM(n.type)}}class JM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function Dm(o,e){o.seq.push(e),o.map[e.id]=e}function eE(o,e,n){const r=o.name,a=r.length;for(ef.lastIndex=0;;){const l=ef.exec(r),c=ef.lastIndex;let f=l[1];const p=l[2]==="]",g=l[3];if(p&&(f=f|0),g===void 0||g==="["&&c+2===a){Dm(n,g===void 0?new ZM(f,o,e):new QM(f,o,e));break}else{let x=n.map[f];x===void 0&&(x=new JM(f),Dm(n,x)),n=x}}}class Pl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);eE(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Im(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const tE=37297;let nE=0;function iE(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const Um=new ht;function rE(o){Ct._getMatrix(Um,Ct.workingColorSpace,o);const e=`mat3( ${Um.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(o)){case Il:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Nm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+iE(o.getShaderSource(e),c)}else return a}function oE(o,e){const n=rE(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function sE(o,e){let n;switch(e){case m0:n="Linear";break;case g0:n="Reinhard";break;case v0:n="Cineon";break;case _0:n="ACESFilmic";break;case S0:n="AgX";break;case x0:n="Neutral";break;case y0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new he;function aE(){Ct.getLuminanceCoefficients(Tl);const o=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function uE(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function cE(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=o.getActiveAttrib(e,a),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(e,c),locationSize:f}}return n}function Fs(o){return o!==""}function Om(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fE=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(o){return o.replace(fE,hE)}const dE=new Map;function hE(o,e){let n=pt[e];if(n===void 0){const r=dE.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(o){return o.replace(pE,mE)}function mE(o,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function zm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function gE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function vE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Vo:case Go:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _E(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function yE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dg:e="ENVMAP_BLENDING_MULTIPLY";break;case h0:e="ENVMAP_BLENDING_MIX";break;case p0:e="ENVMAP_BLENDING_ADD";break}return e}function SE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function xE(o,e,n,r){const a=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=gE(n),g=vE(n),S=_E(n),x=yE(n),M=SE(n),A=lE(n),D=uE(l),R=a.createProgram();let T,_,Y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(T=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D].filter(Fs).join(`
`),T.length>0&&(T+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D].filter(Fs).join(`
`),_.length>0&&(_+=`
`)):(T=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+S:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),_=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+S:"",n.envMap?"#define "+x:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?pt.tonemapping_pars_fragment:"",n.toneMapping!==pr?sE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,oE("linearToOutputTexel",n.outputColorSpace),aE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fs).join(`
`)),c=id(c),c=Om(c,n),c=Fm(c,n),f=id(f),f=Om(f,n),f=Fm(f,n),c=km(c),f=km(f),n.isRawShaderMaterial!==!0&&(Y=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,_=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const V=Y+T+c,k=Y+_+f,L=Im(a,a.VERTEX_SHADER,V),b=Im(a,a.FRAGMENT_SHADER,k);a.attachShader(R,L),a.attachShader(R,b),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(N){if(o.debug.checkShaderErrors){const $=a.getProgramInfoLog(R).trim(),F=a.getShaderInfoLog(L).trim(),H=a.getShaderInfoLog(b).trim();let ne=!0,K=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,R,L,b);else{const y=Nm(a,L,"vertex"),q=Nm(a,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+y+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(F===""||H==="")&&(K=!1);K&&(N.diagnostics={runnable:ne,programLog:$,vertexShader:{log:F,prefix:T},fragmentShader:{log:H,prefix:_}})}a.deleteShader(L),a.deleteShader(b),G=new Pl(a,R),E=cE(a,R)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let m=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=a.getProgramParameter(R,tE)),m},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=L,this.fragmentShader=b,this}let ME=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new TE(e),n.set(e,r)),r}}class TE{constructor(e){this.id=ME++,this.code=e,this.usedTimes=0}}function wE(o,e,n,r,a,l,c){const f=new bg,p=new EE,g=new Set,S=[],x=a.logarithmicDepthBuffer,M=a.vertexTextures;let A=a.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(E){return g.add(E),E===0?"uv":`uv${E}`}function T(E,m,N,$,F){const H=$.fog,ne=F.geometry,K=E.isMeshStandardMaterial?$.environment:null,y=(E.isMeshStandardMaterial?n:e).get(E.envMap||K),q=y&&y.mapping===kl?y.image.height:null,O=D[E.type];E.precision!==null&&(A=a.getMaxPrecision(E.precision),A!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",A,"instead."));const v=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,w=v!==void 0?v.length:0;let B=0;ne.morphAttributes.position!==void 0&&(B=1),ne.morphAttributes.normal!==void 0&&(B=2),ne.morphAttributes.color!==void 0&&(B=3);let ue,X,Q,re;if(O){const Mt=di[O];ue=Mt.vertexShader,X=Mt.fragmentShader}else ue=E.vertexShader,X=E.fragmentShader,p.update(E),Q=p.getVertexShaderID(E),re=p.getFragmentShaderID(E);const oe=o.getRenderTarget(),ge=o.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,Ze=!!E.map,Ve=!!E.matcap,Ke=!!y,j=!!E.aoMap,ut=!!E.lightMap,Qe=!!E.bumpMap,Le=!!E.normalMap,be=!!E.displacementMap,rt=!!E.emissiveMap,Pe=!!E.metalnessMap,z=!!E.roughnessMap,P=E.anisotropy>0,ae=E.clearcoat>0,_e=E.dispersion>0,ye=E.iridescence>0,me=E.sheen>0,ze=E.transmission>0,Re=P&&!!E.anisotropyMap,He=ae&&!!E.clearcoatMap,mt=ae&&!!E.clearcoatNormalMap,we=ae&&!!E.clearcoatRoughnessMap,Xe=ye&&!!E.iridescenceMap,tt=ye&&!!E.iridescenceThicknessMap,ot=me&&!!E.sheenColorMap,je=me&&!!E.sheenRoughnessMap,gt=!!E.specularMap,ct=!!E.specularColorMap,Rt=!!E.specularIntensityMap,te=ze&&!!E.transmissionMap,De=ze&&!!E.thicknessMap,pe=!!E.gradientMap,ve=!!E.alphaMap,Fe=E.alphaTest>0,Ne=!!E.alphaHash,ft=!!E.extensions;let Ut=pr;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ut=o.toneMapping);const $t={shaderID:O,shaderType:E.type,shaderName:E.name,vertexShader:ue,fragmentShader:X,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:A,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:oe===null?o.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:jo,alphaToCoverage:!!E.alphaToCoverage,map:Ze,matcap:Ve,envMap:Ke,envMapMode:Ke&&y.mapping,envMapCubeUVHeight:q,aoMap:j,lightMap:ut,bumpMap:Qe,normalMap:Le,displacementMap:M&&be,emissiveMap:rt,normalMapObjectSpace:Le&&E.normalMapType===A0,normalMapTangentSpace:Le&&E.normalMapType===w0,metalnessMap:Pe,roughnessMap:z,anisotropy:P,anisotropyMap:Re,clearcoat:ae,clearcoatMap:He,clearcoatNormalMap:mt,clearcoatRoughnessMap:we,dispersion:_e,iridescence:ye,iridescenceMap:Xe,iridescenceThicknessMap:tt,sheen:me,sheenColorMap:ot,sheenRoughnessMap:je,specularMap:gt,specularColorMap:ct,specularIntensityMap:Rt,transmission:ze,transmissionMap:te,thicknessMap:De,gradientMap:pe,opaque:E.transparent===!1&&E.blending===ko&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Fe,alphaHash:Ne,combine:E.combine,mapUv:Ze&&R(E.map.channel),aoMapUv:j&&R(E.aoMap.channel),lightMapUv:ut&&R(E.lightMap.channel),bumpMapUv:Qe&&R(E.bumpMap.channel),normalMapUv:Le&&R(E.normalMap.channel),displacementMapUv:be&&R(E.displacementMap.channel),emissiveMapUv:rt&&R(E.emissiveMap.channel),metalnessMapUv:Pe&&R(E.metalnessMap.channel),roughnessMapUv:z&&R(E.roughnessMap.channel),anisotropyMapUv:Re&&R(E.anisotropyMap.channel),clearcoatMapUv:He&&R(E.clearcoatMap.channel),clearcoatNormalMapUv:mt&&R(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&R(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&R(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&R(E.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&R(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&R(E.sheenRoughnessMap.channel),specularMapUv:gt&&R(E.specularMap.channel),specularColorMapUv:ct&&R(E.specularColorMap.channel),specularIntensityMapUv:Rt&&R(E.specularIntensityMap.channel),transmissionMapUv:te&&R(E.transmissionMap.channel),thicknessMapUv:De&&R(E.thicknessMap.channel),alphaMapUv:ve&&R(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Le||P),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!ne.attributes.uv&&(Ze||ve),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:B,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ze&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Lt,decodeVideoTextureEmissive:rt&&E.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(E.emissiveMap.colorSpace)===Lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Di,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ft&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&E.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $t.vertexUv1s=g.has(1),$t.vertexUv2s=g.has(2),$t.vertexUv3s=g.has(3),g.clear(),$t}function _(E){const m=[];if(E.shaderID?m.push(E.shaderID):(m.push(E.customVertexShaderID),m.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)m.push(N),m.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(Y(m,E),V(m,E),m.push(o.outputColorSpace)),m.push(E.customProgramCacheKey),m.join()}function Y(E,m){E.push(m.precision),E.push(m.outputColorSpace),E.push(m.envMapMode),E.push(m.envMapCubeUVHeight),E.push(m.mapUv),E.push(m.alphaMapUv),E.push(m.lightMapUv),E.push(m.aoMapUv),E.push(m.bumpMapUv),E.push(m.normalMapUv),E.push(m.displacementMapUv),E.push(m.emissiveMapUv),E.push(m.metalnessMapUv),E.push(m.roughnessMapUv),E.push(m.anisotropyMapUv),E.push(m.clearcoatMapUv),E.push(m.clearcoatNormalMapUv),E.push(m.clearcoatRoughnessMapUv),E.push(m.iridescenceMapUv),E.push(m.iridescenceThicknessMapUv),E.push(m.sheenColorMapUv),E.push(m.sheenRoughnessMapUv),E.push(m.specularMapUv),E.push(m.specularColorMapUv),E.push(m.specularIntensityMapUv),E.push(m.transmissionMapUv),E.push(m.thicknessMapUv),E.push(m.combine),E.push(m.fogExp2),E.push(m.sizeAttenuation),E.push(m.morphTargetsCount),E.push(m.morphAttributeCount),E.push(m.numDirLights),E.push(m.numPointLights),E.push(m.numSpotLights),E.push(m.numSpotLightMaps),E.push(m.numHemiLights),E.push(m.numRectAreaLights),E.push(m.numDirLightShadows),E.push(m.numPointLightShadows),E.push(m.numSpotLightShadows),E.push(m.numSpotLightShadowsWithMaps),E.push(m.numLightProbes),E.push(m.shadowMapType),E.push(m.toneMapping),E.push(m.numClippingPlanes),E.push(m.numClipIntersection),E.push(m.depthPacking)}function V(E,m){f.disableAll(),m.supportsVertexTextures&&f.enable(0),m.instancing&&f.enable(1),m.instancingColor&&f.enable(2),m.instancingMorph&&f.enable(3),m.matcap&&f.enable(4),m.envMap&&f.enable(5),m.normalMapObjectSpace&&f.enable(6),m.normalMapTangentSpace&&f.enable(7),m.clearcoat&&f.enable(8),m.iridescence&&f.enable(9),m.alphaTest&&f.enable(10),m.vertexColors&&f.enable(11),m.vertexAlphas&&f.enable(12),m.vertexUv1s&&f.enable(13),m.vertexUv2s&&f.enable(14),m.vertexUv3s&&f.enable(15),m.vertexTangents&&f.enable(16),m.anisotropy&&f.enable(17),m.alphaHash&&f.enable(18),m.batching&&f.enable(19),m.dispersion&&f.enable(20),m.batchingColor&&f.enable(21),E.push(f.mask),f.disableAll(),m.fog&&f.enable(0),m.useFog&&f.enable(1),m.flatShading&&f.enable(2),m.logarithmicDepthBuffer&&f.enable(3),m.reverseDepthBuffer&&f.enable(4),m.skinning&&f.enable(5),m.morphTargets&&f.enable(6),m.morphNormals&&f.enable(7),m.morphColors&&f.enable(8),m.premultipliedAlpha&&f.enable(9),m.shadowMapEnabled&&f.enable(10),m.doubleSided&&f.enable(11),m.flipSided&&f.enable(12),m.useDepthPacking&&f.enable(13),m.dithering&&f.enable(14),m.transmission&&f.enable(15),m.sheen&&f.enable(16),m.opaque&&f.enable(17),m.pointsUvs&&f.enable(18),m.decodeVideoTexture&&f.enable(19),m.decodeVideoTextureEmissive&&f.enable(20),m.alphaToCoverage&&f.enable(21),E.push(f.mask)}function k(E){const m=D[E.type];let N;if(m){const $=di[m];N=ny.clone($.uniforms)}else N=E.uniforms;return N}function L(E,m){let N;for(let $=0,F=S.length;$<F;$++){const H=S[$];if(H.cacheKey===m){N=H,++N.usedTimes;break}}return N===void 0&&(N=new xE(o,m,E,l),S.push(N)),N}function b(E){if(--E.usedTimes===0){const m=S.indexOf(E);S[m]=S[S.length-1],S.pop(),E.destroy()}}function I(E){p.remove(E)}function G(){p.dispose()}return{getParameters:T,getProgramCacheKey:_,getUniforms:k,acquireProgram:L,releaseProgram:b,releaseShaderCache:I,programs:S,dispose:G}}function AE(){let o=new WeakMap;function e(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function r(c){o.delete(c)}function a(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function CE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Hm(){const o=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(x,M,A,D,R,T){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:M,material:A,groupOrder:D,renderOrder:x.renderOrder,z:R,group:T},o[e]=_):(_.id=x.id,_.object=x,_.geometry=M,_.material=A,_.groupOrder=D,_.renderOrder=x.renderOrder,_.z=R,_.group=T),e++,_}function f(x,M,A,D,R,T){const _=c(x,M,A,D,R,T);A.transmission>0?r.push(_):A.transparent===!0?a.push(_):n.push(_)}function p(x,M,A,D,R,T){const _=c(x,M,A,D,R,T);A.transmission>0?r.unshift(_):A.transparent===!0?a.unshift(_):n.unshift(_)}function g(x,M){n.length>1&&n.sort(x||CE),r.length>1&&r.sort(M||Bm),a.length>1&&a.sort(M||Bm)}function S(){for(let x=e,M=o.length;x<M;x++){const A=o[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:S,sort:g}}function RE(){let o=new WeakMap;function e(r,a){const l=o.get(r);let c;return l===void 0?(c=new Hm,o.set(r,[c])):a>=l.length?(c=new Hm,l.push(c)):c=l[a],c}function n(){o=new WeakMap}return{get:e,dispose:n}}function bE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new he,color:new bt};break;case"SpotLight":n={position:new he,direction:new he,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new he,color:new bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new he,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":n={color:new bt,position:new he,halfWidth:new he,halfHeight:new he};break}return o[e.id]=n,n}}}function PE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let LE=0;function DE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function IE(o){const e=new bE,n=PE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new he);const a=new he,l=new jt,c=new jt;function f(g){let S=0,x=0,M=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let A=0,D=0,R=0,T=0,_=0,Y=0,V=0,k=0,L=0,b=0,I=0;g.sort(DE);for(let E=0,m=g.length;E<m;E++){const N=g[E],$=N.color,F=N.intensity,H=N.distance,ne=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)S+=$.r*F,x+=$.g*F,M+=$.b*F;else if(N.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(N.sh.coefficients[K],F);I++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const y=N.shadow,q=n.get(N);q.shadowIntensity=y.intensity,q.shadowBias=y.bias,q.shadowNormalBias=y.normalBias,q.shadowRadius=y.radius,q.shadowMapSize=y.mapSize,r.directionalShadow[A]=q,r.directionalShadowMap[A]=ne,r.directionalShadowMatrix[A]=N.shadow.matrix,Y++}r.directional[A]=K,A++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy($).multiplyScalar(F),K.distance=H,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,r.spot[R]=K;const y=N.shadow;if(N.map&&(r.spotLightMap[L]=N.map,L++,y.updateMatrices(N),N.castShadow&&b++),r.spotLightMatrix[R]=y.matrix,N.castShadow){const q=n.get(N);q.shadowIntensity=y.intensity,q.shadowBias=y.bias,q.shadowNormalBias=y.normalBias,q.shadowRadius=y.radius,q.shadowMapSize=y.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=ne,k++}R++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy($).multiplyScalar(F),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),r.rectArea[T]=K,T++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const y=N.shadow,q=n.get(N);q.shadowIntensity=y.intensity,q.shadowBias=y.bias,q.shadowNormalBias=y.normalBias,q.shadowRadius=y.radius,q.shadowMapSize=y.mapSize,q.shadowCameraNear=y.camera.near,q.shadowCameraFar=y.camera.far,r.pointShadow[D]=q,r.pointShadowMap[D]=ne,r.pointShadowMatrix[D]=N.shadow.matrix,V++}r.point[D]=K,D++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(F),K.groundColor.copy(N.groundColor).multiplyScalar(F),r.hemi[_]=K,_++}}T>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=x,r.ambient[2]=M;const G=r.hash;(G.directionalLength!==A||G.pointLength!==D||G.spotLength!==R||G.rectAreaLength!==T||G.hemiLength!==_||G.numDirectionalShadows!==Y||G.numPointShadows!==V||G.numSpotShadows!==k||G.numSpotMaps!==L||G.numLightProbes!==I)&&(r.directional.length=A,r.spot.length=R,r.rectArea.length=T,r.point.length=D,r.hemi.length=_,r.directionalShadow.length=Y,r.directionalShadowMap.length=Y,r.pointShadow.length=V,r.pointShadowMap.length=V,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=Y,r.pointShadowMatrix.length=V,r.spotLightMatrix.length=k+L-b,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=I,G.directionalLength=A,G.pointLength=D,G.spotLength=R,G.rectAreaLength=T,G.hemiLength=_,G.numDirectionalShadows=Y,G.numPointShadows=V,G.numSpotShadows=k,G.numSpotMaps=L,G.numLightProbes=I,r.version=LE++)}function p(g,S){let x=0,M=0,A=0,D=0,R=0;const T=S.matrixWorldInverse;for(let _=0,Y=g.length;_<Y;_++){const V=g[_];if(V.isDirectionalLight){const k=r.directional[x];k.direction.setFromMatrixPosition(V.matrixWorld),a.setFromMatrixPosition(V.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(T),x++}else if(V.isSpotLight){const k=r.spot[A];k.position.setFromMatrixPosition(V.matrixWorld),k.position.applyMatrix4(T),k.direction.setFromMatrixPosition(V.matrixWorld),a.setFromMatrixPosition(V.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(T),A++}else if(V.isRectAreaLight){const k=r.rectArea[D];k.position.setFromMatrixPosition(V.matrixWorld),k.position.applyMatrix4(T),c.identity(),l.copy(V.matrixWorld),l.premultiply(T),c.extractRotation(l),k.halfWidth.set(V.width*.5,0,0),k.halfHeight.set(0,V.height*.5,0),k.halfWidth.applyMatrix4(c),k.halfHeight.applyMatrix4(c),D++}else if(V.isPointLight){const k=r.point[M];k.position.setFromMatrixPosition(V.matrixWorld),k.position.applyMatrix4(T),M++}else if(V.isHemisphereLight){const k=r.hemi[R];k.direction.setFromMatrixPosition(V.matrixWorld),k.direction.transformDirection(T),R++}}}return{setup:f,setupView:p,state:r}}function Vm(o){const e=new IE(o),n=[],r=[];function a(S){g.camera=S,n.length=0,r.length=0}function l(S){n.push(S)}function c(S){r.push(S)}function f(){e.setup(n)}function p(S){e.setupView(n,S)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function UE(o){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Vm(o),e.set(a,[f])):l>=c.length?(f=new Vm(o),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OE=`uniform sampler2D shadow_pass;
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
}`;function FE(o,e,n){let r=new Fg;const a=new Dt,l=new Dt,c=new Xt,f=new cy({depthPacking:T0}),p=new fy,g={},S=n.maxTextureSize,x={[mr]:Pn,[Pn]:mr,[Di]:Di},M=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:NE,fragmentShader:OE}),A=M.clone();A.defines.HORIZONTAL_PASS=1;const D=new vr;D.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ni(D,M),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg;let _=this.type;this.render=function(b,I,G){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||b.length===0)return;const E=o.getRenderTarget(),m=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),$=o.state;$.setBlending(hr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const F=_!==Li&&this.type===Li,H=_===Li&&this.type!==Li;for(let ne=0,K=b.length;ne<K;ne++){const y=b[ne],q=y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const O=q.getFrameExtents();if(a.multiply(O),l.copy(q.mapSize),(a.x>S||a.y>S)&&(a.x>S&&(l.x=Math.floor(S/O.x),a.x=l.x*O.x,q.mapSize.x=l.x),a.y>S&&(l.y=Math.floor(S/O.y),a.y=l.y*O.y,q.mapSize.y=l.y)),q.map===null||F===!0||H===!0){const w=this.type!==Li?{minFilter:si,magFilter:si}:{};q.map!==null&&q.map.dispose(),q.map=new Kr(a.x,a.y,w),q.map.texture.name=y.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const v=q.getViewportCount();for(let w=0;w<v;w++){const B=q.getViewport(w);c.set(l.x*B.x,l.y*B.y,l.x*B.z,l.y*B.w),$.viewport(c),q.updateMatrices(y,w),r=q.getFrustum(),k(I,G,q.camera,y,this.type)}q.isPointLightShadow!==!0&&this.type===Li&&Y(q,G),q.needsUpdate=!1}_=this.type,T.needsUpdate=!1,o.setRenderTarget(E,m,N)};function Y(b,I){const G=e.update(R);M.defines.VSM_SAMPLES!==b.blurSamples&&(M.defines.VSM_SAMPLES=b.blurSamples,A.defines.VSM_SAMPLES=b.blurSamples,M.needsUpdate=!0,A.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kr(a.x,a.y)),M.uniforms.shadow_pass.value=b.map.texture,M.uniforms.resolution.value=b.mapSize,M.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(I,null,G,M,R,null),A.uniforms.shadow_pass.value=b.mapPass.texture,A.uniforms.resolution.value=b.mapSize,A.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(I,null,G,A,R,null)}function V(b,I,G,E){let m=null;const N=G.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)m=N;else if(m=G.isPointLight===!0?p:f,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const $=m.uuid,F=I.uuid;let H=g[$];H===void 0&&(H={},g[$]=H);let ne=H[F];ne===void 0&&(ne=m.clone(),H[F]=ne,I.addEventListener("dispose",L)),m=ne}if(m.visible=I.visible,m.wireframe=I.wireframe,E===Li?m.side=I.shadowSide!==null?I.shadowSide:I.side:m.side=I.shadowSide!==null?I.shadowSide:x[I.side],m.alphaMap=I.alphaMap,m.alphaTest=I.alphaTest,m.map=I.map,m.clipShadows=I.clipShadows,m.clippingPlanes=I.clippingPlanes,m.clipIntersection=I.clipIntersection,m.displacementMap=I.displacementMap,m.displacementScale=I.displacementScale,m.displacementBias=I.displacementBias,m.wireframeLinewidth=I.wireframeLinewidth,m.linewidth=I.linewidth,G.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const $=o.properties.get(m);$.light=G}return m}function k(b,I,G,E,m){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&m===Li)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld);const F=e.update(b),H=b.material;if(Array.isArray(H)){const ne=F.groups;for(let K=0,y=ne.length;K<y;K++){const q=ne[K],O=H[q.materialIndex];if(O&&O.visible){const v=V(b,O,E,m);b.onBeforeShadow(o,b,I,G,F,v,q),o.renderBufferDirect(G,null,F,v,b,q),b.onAfterShadow(o,b,I,G,F,v,q)}}}else if(H.visible){const ne=V(b,H,E,m);b.onBeforeShadow(o,b,I,G,F,ne,null),o.renderBufferDirect(G,null,F,ne,b,null),b.onAfterShadow(o,b,I,G,F,ne,null)}}const $=b.children;for(let F=0,H=$.length;F<H;F++)k($[F],I,G,E,m)}function L(b){b.target.removeEventListener("dispose",L);for(const G in g){const E=g[G],m=b.target.uuid;m in E&&(E[m].dispose(),delete E[m])}}}const kE={[_f]:yf,[Sf]:Ef,[xf]:Tf,[Ho]:Mf,[yf]:_f,[Ef]:Sf,[Tf]:xf,[Mf]:Ho};function zE(o,e){function n(){let te=!1;const De=new Xt;let pe=null;const ve=new Xt(0,0,0,0);return{setMask:function(Fe){pe!==Fe&&!te&&(o.colorMask(Fe,Fe,Fe,Fe),pe=Fe)},setLocked:function(Fe){te=Fe},setClear:function(Fe,Ne,ft,Ut,$t){$t===!0&&(Fe*=Ut,Ne*=Ut,ft*=Ut),De.set(Fe,Ne,ft,Ut),ve.equals(De)===!1&&(o.clearColor(Fe,Ne,ft,Ut),ve.copy(De))},reset:function(){te=!1,pe=null,ve.set(-1,0,0,0)}}}function r(){let te=!1,De=!1,pe=null,ve=null,Fe=null;return{setReversed:function(Ne){if(De!==Ne){const ft=e.get("EXT_clip_control");De?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Fe;Fe=null,this.setClear(Ut)}De=Ne},getReversed:function(){return De},setTest:function(Ne){Ne?oe(o.DEPTH_TEST):ge(o.DEPTH_TEST)},setMask:function(Ne){pe!==Ne&&!te&&(o.depthMask(Ne),pe=Ne)},setFunc:function(Ne){if(De&&(Ne=kE[Ne]),ve!==Ne){switch(Ne){case _f:o.depthFunc(o.NEVER);break;case yf:o.depthFunc(o.ALWAYS);break;case Sf:o.depthFunc(o.LESS);break;case Ho:o.depthFunc(o.LEQUAL);break;case xf:o.depthFunc(o.EQUAL);break;case Mf:o.depthFunc(o.GEQUAL);break;case Ef:o.depthFunc(o.GREATER);break;case Tf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ve=Ne}},setLocked:function(Ne){te=Ne},setClear:function(Ne){Fe!==Ne&&(De&&(Ne=1-Ne),o.clearDepth(Ne),Fe=Ne)},reset:function(){te=!1,pe=null,ve=null,Fe=null,De=!1}}}function a(){let te=!1,De=null,pe=null,ve=null,Fe=null,Ne=null,ft=null,Ut=null,$t=null;return{setTest:function(Mt){te||(Mt?oe(o.STENCIL_TEST):ge(o.STENCIL_TEST))},setMask:function(Mt){De!==Mt&&!te&&(o.stencilMask(Mt),De=Mt)},setFunc:function(Mt,Mn,gn){(pe!==Mt||ve!==Mn||Fe!==gn)&&(o.stencilFunc(Mt,Mn,gn),pe=Mt,ve=Mn,Fe=gn)},setOp:function(Mt,Mn,gn){(Ne!==Mt||ft!==Mn||Ut!==gn)&&(o.stencilOp(Mt,Mn,gn),Ne=Mt,ft=Mn,Ut=gn)},setLocked:function(Mt){te=Mt},setClear:function(Mt){$t!==Mt&&(o.clearStencil(Mt),$t=Mt)},reset:function(){te=!1,De=null,pe=null,ve=null,Fe=null,Ne=null,ft=null,Ut=null,$t=null}}}const l=new n,c=new r,f=new a,p=new WeakMap,g=new WeakMap;let S={},x={},M=new WeakMap,A=[],D=null,R=!1,T=null,_=null,Y=null,V=null,k=null,L=null,b=null,I=new bt(0,0,0),G=0,E=!1,m=null,N=null,$=null,F=null,H=null;const ne=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,y=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(y=parseFloat(/^WebGL (\d)/.exec(q)[1]),K=y>=1):q.indexOf("OpenGL ES")!==-1&&(y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),K=y>=2);let O=null,v={};const w=o.getParameter(o.SCISSOR_BOX),B=o.getParameter(o.VIEWPORT),ue=new Xt().fromArray(w),X=new Xt().fromArray(B);function Q(te,De,pe,ve){const Fe=new Uint8Array(4),Ne=o.createTexture();o.bindTexture(te,Ne),o.texParameteri(te,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(te,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ft=0;ft<pe;ft++)te===o.TEXTURE_3D||te===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,ve,0,o.RGBA,o.UNSIGNED_BYTE,Fe):o.texImage2D(De+ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Fe);return Ne}const re={};re[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),re[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),re[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),oe(o.DEPTH_TEST),c.setFunc(Ho),Qe(!1),Le(jp),oe(o.CULL_FACE),j(hr);function oe(te){S[te]!==!0&&(o.enable(te),S[te]=!0)}function ge(te){S[te]!==!1&&(o.disable(te),S[te]=!1)}function Se(te,De){return x[te]!==De?(o.bindFramebuffer(te,De),x[te]=De,te===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=De),te===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=De),!0):!1}function Ce(te,De){let pe=A,ve=!1;if(te){pe=M.get(De),pe===void 0&&(pe=[],M.set(De,pe));const Fe=te.textures;if(pe.length!==Fe.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Ne=0,ft=Fe.length;Ne<ft;Ne++)pe[Ne]=o.COLOR_ATTACHMENT0+Ne;pe.length=Fe.length,ve=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,ve=!0);ve&&o.drawBuffers(pe)}function Ze(te){return D!==te?(o.useProgram(te),D=te,!0):!1}const Ve={[Gr]:o.FUNC_ADD,[K_]:o.FUNC_SUBTRACT,[Z_]:o.FUNC_REVERSE_SUBTRACT};Ve[Q_]=o.MIN,Ve[J_]=o.MAX;const Ke={[e0]:o.ZERO,[t0]:o.ONE,[n0]:o.SRC_COLOR,[gf]:o.SRC_ALPHA,[l0]:o.SRC_ALPHA_SATURATE,[s0]:o.DST_COLOR,[r0]:o.DST_ALPHA,[i0]:o.ONE_MINUS_SRC_COLOR,[vf]:o.ONE_MINUS_SRC_ALPHA,[a0]:o.ONE_MINUS_DST_COLOR,[o0]:o.ONE_MINUS_DST_ALPHA,[u0]:o.CONSTANT_COLOR,[c0]:o.ONE_MINUS_CONSTANT_COLOR,[f0]:o.CONSTANT_ALPHA,[d0]:o.ONE_MINUS_CONSTANT_ALPHA};function j(te,De,pe,ve,Fe,Ne,ft,Ut,$t,Mt){if(te===hr){R===!0&&(ge(o.BLEND),R=!1);return}if(R===!1&&(oe(o.BLEND),R=!0),te!==$_){if(te!==T||Mt!==E){if((_!==Gr||k!==Gr)&&(o.blendEquation(o.FUNC_ADD),_=Gr,k=Gr),Mt)switch(te){case ko:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qp:o.blendFunc(o.ONE,o.ONE);break;case Yp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $p:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case ko:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Yp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $p:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}Y=null,V=null,L=null,b=null,I.set(0,0,0),G=0,T=te,E=Mt}return}Fe=Fe||De,Ne=Ne||pe,ft=ft||ve,(De!==_||Fe!==k)&&(o.blendEquationSeparate(Ve[De],Ve[Fe]),_=De,k=Fe),(pe!==Y||ve!==V||Ne!==L||ft!==b)&&(o.blendFuncSeparate(Ke[pe],Ke[ve],Ke[Ne],Ke[ft]),Y=pe,V=ve,L=Ne,b=ft),(Ut.equals(I)===!1||$t!==G)&&(o.blendColor(Ut.r,Ut.g,Ut.b,$t),I.copy(Ut),G=$t),T=te,E=!1}function ut(te,De){te.side===Di?ge(o.CULL_FACE):oe(o.CULL_FACE);let pe=te.side===Pn;De&&(pe=!pe),Qe(pe),te.blending===ko&&te.transparent===!1?j(hr):j(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),c.setFunc(te.depthFunc),c.setTest(te.depthTest),c.setMask(te.depthWrite),l.setMask(te.colorWrite);const ve=te.stencilWrite;f.setTest(ve),ve&&(f.setMask(te.stencilWriteMask),f.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),f.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),rt(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?oe(o.SAMPLE_ALPHA_TO_COVERAGE):ge(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(te){m!==te&&(te?o.frontFace(o.CW):o.frontFace(o.CCW),m=te)}function Le(te){te!==j_?(oe(o.CULL_FACE),te!==N&&(te===jp?o.cullFace(o.BACK):te===q_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ge(o.CULL_FACE),N=te}function be(te){te!==$&&(K&&o.lineWidth(te),$=te)}function rt(te,De,pe){te?(oe(o.POLYGON_OFFSET_FILL),(F!==De||H!==pe)&&(o.polygonOffset(De,pe),F=De,H=pe)):ge(o.POLYGON_OFFSET_FILL)}function Pe(te){te?oe(o.SCISSOR_TEST):ge(o.SCISSOR_TEST)}function z(te){te===void 0&&(te=o.TEXTURE0+ne-1),O!==te&&(o.activeTexture(te),O=te)}function P(te,De,pe){pe===void 0&&(O===null?pe=o.TEXTURE0+ne-1:pe=O);let ve=v[pe];ve===void 0&&(ve={type:void 0,texture:void 0},v[pe]=ve),(ve.type!==te||ve.texture!==De)&&(O!==pe&&(o.activeTexture(pe),O=pe),o.bindTexture(te,De||re[te]),ve.type=te,ve.texture=De)}function ae(){const te=v[O];te!==void 0&&te.type!==void 0&&(o.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function _e(){try{o.compressedTexImage2D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ye(){try{o.compressedTexImage3D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function me(){try{o.texSubImage2D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ze(){try{o.texSubImage3D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function He(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function mt(){try{o.texStorage2D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function we(){try{o.texStorage3D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Xe(){try{o.texImage2D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function tt(){try{o.texImage3D.apply(o,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ot(te){ue.equals(te)===!1&&(o.scissor(te.x,te.y,te.z,te.w),ue.copy(te))}function je(te){X.equals(te)===!1&&(o.viewport(te.x,te.y,te.z,te.w),X.copy(te))}function gt(te,De){let pe=g.get(De);pe===void 0&&(pe=new WeakMap,g.set(De,pe));let ve=pe.get(te);ve===void 0&&(ve=o.getUniformBlockIndex(De,te.name),pe.set(te,ve))}function ct(te,De){const ve=g.get(De).get(te);p.get(De)!==ve&&(o.uniformBlockBinding(De,ve,te.__bindingPointIndex),p.set(De,ve))}function Rt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},O=null,v={},x={},M=new WeakMap,A=[],D=null,R=!1,T=null,_=null,Y=null,V=null,k=null,L=null,b=null,I=new bt(0,0,0),G=0,E=!1,m=null,N=null,$=null,F=null,H=null,ue.set(0,0,o.canvas.width,o.canvas.height),X.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:oe,disable:ge,bindFramebuffer:Se,drawBuffers:Ce,useProgram:Ze,setBlending:j,setMaterial:ut,setFlipSided:Qe,setCullFace:Le,setLineWidth:be,setPolygonOffset:rt,setScissorTest:Pe,activeTexture:z,bindTexture:P,unbindTexture:ae,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:Xe,texImage3D:tt,updateUBOMapping:gt,uniformBlockBinding:ct,texStorage2D:mt,texStorage3D:we,texSubImage2D:me,texSubImage3D:ze,compressedTexSubImage2D:Re,compressedTexSubImage3D:He,scissor:ot,viewport:je,reset:Rt}}function BE(o,e,n,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Dt,S=new WeakMap;let x;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(z,P){return A?new OffscreenCanvas(z,P):Nl("canvas")}function R(z,P,ae){let _e=1;const ye=Pe(z);if((ye.width>ae||ye.height>ae)&&(_e=ae/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const me=Math.floor(_e*ye.width),ze=Math.floor(_e*ye.height);x===void 0&&(x=D(me,ze));const Re=P?D(me,ze):x;return Re.width=me,Re.height=ze,Re.getContext("2d").drawImage(z,0,0,me,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+ze+")."),Re}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),z;return z}function T(z){return z.generateMipmaps}function _(z){o.generateMipmap(z)}function Y(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function V(z,P,ae,_e,ye=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let me=P;if(P===o.RED&&(ae===o.FLOAT&&(me=o.R32F),ae===o.HALF_FLOAT&&(me=o.R16F),ae===o.UNSIGNED_BYTE&&(me=o.R8)),P===o.RED_INTEGER&&(ae===o.UNSIGNED_BYTE&&(me=o.R8UI),ae===o.UNSIGNED_SHORT&&(me=o.R16UI),ae===o.UNSIGNED_INT&&(me=o.R32UI),ae===o.BYTE&&(me=o.R8I),ae===o.SHORT&&(me=o.R16I),ae===o.INT&&(me=o.R32I)),P===o.RG&&(ae===o.FLOAT&&(me=o.RG32F),ae===o.HALF_FLOAT&&(me=o.RG16F),ae===o.UNSIGNED_BYTE&&(me=o.RG8)),P===o.RG_INTEGER&&(ae===o.UNSIGNED_BYTE&&(me=o.RG8UI),ae===o.UNSIGNED_SHORT&&(me=o.RG16UI),ae===o.UNSIGNED_INT&&(me=o.RG32UI),ae===o.BYTE&&(me=o.RG8I),ae===o.SHORT&&(me=o.RG16I),ae===o.INT&&(me=o.RG32I)),P===o.RGB_INTEGER&&(ae===o.UNSIGNED_BYTE&&(me=o.RGB8UI),ae===o.UNSIGNED_SHORT&&(me=o.RGB16UI),ae===o.UNSIGNED_INT&&(me=o.RGB32UI),ae===o.BYTE&&(me=o.RGB8I),ae===o.SHORT&&(me=o.RGB16I),ae===o.INT&&(me=o.RGB32I)),P===o.RGBA_INTEGER&&(ae===o.UNSIGNED_BYTE&&(me=o.RGBA8UI),ae===o.UNSIGNED_SHORT&&(me=o.RGBA16UI),ae===o.UNSIGNED_INT&&(me=o.RGBA32UI),ae===o.BYTE&&(me=o.RGBA8I),ae===o.SHORT&&(me=o.RGBA16I),ae===o.INT&&(me=o.RGBA32I)),P===o.RGB&&ae===o.UNSIGNED_INT_5_9_9_9_REV&&(me=o.RGB9_E5),P===o.RGBA){const ze=ye?Il:Ct.getTransfer(_e);ae===o.FLOAT&&(me=o.RGBA32F),ae===o.HALF_FLOAT&&(me=o.RGBA16F),ae===o.UNSIGNED_BYTE&&(me=ze===Lt?o.SRGB8_ALPHA8:o.RGBA8),ae===o.UNSIGNED_SHORT_4_4_4_4&&(me=o.RGBA4),ae===o.UNSIGNED_SHORT_5_5_5_1&&(me=o.RGB5_A1)}return(me===o.R16F||me===o.R32F||me===o.RG16F||me===o.RG32F||me===o.RGBA16F||me===o.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function k(z,P){let ae;return z?P===null||P===$r||P===Wo?ae=o.DEPTH24_STENCIL8:P===Ii?ae=o.DEPTH32F_STENCIL8:P===ks&&(ae=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===$r||P===Wo?ae=o.DEPTH_COMPONENT24:P===Ii?ae=o.DEPTH_COMPONENT32F:P===ks&&(ae=o.DEPTH_COMPONENT16),ae}function L(z,P){return T(z)===!0||z.isFramebufferTexture&&z.minFilter!==si&&z.minFilter!==hi?Math.log2(Math.max(P.width,P.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?P.mipmaps.length:1}function b(z){const P=z.target;P.removeEventListener("dispose",b),G(P),P.isVideoTexture&&S.delete(P)}function I(z){const P=z.target;P.removeEventListener("dispose",I),m(P)}function G(z){const P=r.get(z);if(P.__webglInit===void 0)return;const ae=z.source,_e=M.get(ae);if(_e){const ye=_e[P.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&E(z),Object.keys(_e).length===0&&M.delete(ae)}r.remove(z)}function E(z){const P=r.get(z);o.deleteTexture(P.__webglTexture);const ae=z.source,_e=M.get(ae);delete _e[P.__cacheKey],c.memory.textures--}function m(z){const P=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(P.__webglFramebuffer[_e]))for(let ye=0;ye<P.__webglFramebuffer[_e].length;ye++)o.deleteFramebuffer(P.__webglFramebuffer[_e][ye]);else o.deleteFramebuffer(P.__webglFramebuffer[_e]);P.__webglDepthbuffer&&o.deleteRenderbuffer(P.__webglDepthbuffer[_e])}else{if(Array.isArray(P.__webglFramebuffer))for(let _e=0;_e<P.__webglFramebuffer.length;_e++)o.deleteFramebuffer(P.__webglFramebuffer[_e]);else o.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&o.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&o.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let _e=0;_e<P.__webglColorRenderbuffer.length;_e++)P.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(P.__webglColorRenderbuffer[_e]);P.__webglDepthRenderbuffer&&o.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ae=z.textures;for(let _e=0,ye=ae.length;_e<ye;_e++){const me=r.get(ae[_e]);me.__webglTexture&&(o.deleteTexture(me.__webglTexture),c.memory.textures--),r.remove(ae[_e])}r.remove(z)}let N=0;function $(){N=0}function F(){const z=N;return z>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+a.maxTextures),N+=1,z}function H(z){const P=[];return P.push(z.wrapS),P.push(z.wrapT),P.push(z.wrapR||0),P.push(z.magFilter),P.push(z.minFilter),P.push(z.anisotropy),P.push(z.internalFormat),P.push(z.format),P.push(z.type),P.push(z.generateMipmaps),P.push(z.premultiplyAlpha),P.push(z.flipY),P.push(z.unpackAlignment),P.push(z.colorSpace),P.join()}function ne(z,P){const ae=r.get(z);if(z.isVideoTexture&&be(z),z.isRenderTargetTexture===!1&&z.version>0&&ae.__version!==z.version){const _e=z.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(ae,z,P);return}}n.bindTexture(o.TEXTURE_2D,ae.__webglTexture,o.TEXTURE0+P)}function K(z,P){const ae=r.get(z);if(z.version>0&&ae.__version!==z.version){X(ae,z,P);return}n.bindTexture(o.TEXTURE_2D_ARRAY,ae.__webglTexture,o.TEXTURE0+P)}function y(z,P){const ae=r.get(z);if(z.version>0&&ae.__version!==z.version){X(ae,z,P);return}n.bindTexture(o.TEXTURE_3D,ae.__webglTexture,o.TEXTURE0+P)}function q(z,P){const ae=r.get(z);if(z.version>0&&ae.__version!==z.version){Q(ae,z,P);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ae.__webglTexture,o.TEXTURE0+P)}const O={[Cf]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[Rf]:o.MIRRORED_REPEAT},v={[si]:o.NEAREST,[M0]:o.NEAREST_MIPMAP_NEAREST,[tl]:o.NEAREST_MIPMAP_LINEAR,[hi]:o.LINEAR,[Ac]:o.LINEAR_MIPMAP_NEAREST,[jr]:o.LINEAR_MIPMAP_LINEAR},w={[C0]:o.NEVER,[I0]:o.ALWAYS,[R0]:o.LESS,[Tg]:o.LEQUAL,[b0]:o.EQUAL,[D0]:o.GEQUAL,[P0]:o.GREATER,[L0]:o.NOTEQUAL};function B(z,P){if(P.type===Ii&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===hi||P.magFilter===Ac||P.magFilter===tl||P.magFilter===jr||P.minFilter===hi||P.minFilter===Ac||P.minFilter===tl||P.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,O[P.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,O[P.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,O[P.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,v[P.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,v[P.minFilter]),P.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,w[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===si||P.minFilter!==tl&&P.minFilter!==jr||P.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||r.get(P).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,a.getMaxAnisotropy())),r.get(P).__currentAnisotropy=P.anisotropy}}}function ue(z,P){let ae=!1;z.__webglInit===void 0&&(z.__webglInit=!0,P.addEventListener("dispose",b));const _e=P.source;let ye=M.get(_e);ye===void 0&&(ye={},M.set(_e,ye));const me=H(P);if(me!==z.__cacheKey){ye[me]===void 0&&(ye[me]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,ae=!0),ye[me].usedTimes++;const ze=ye[z.__cacheKey];ze!==void 0&&(ye[z.__cacheKey].usedTimes--,ze.usedTimes===0&&E(P)),z.__cacheKey=me,z.__webglTexture=ye[me].texture}return ae}function X(z,P,ae){let _e=o.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),P.isData3DTexture&&(_e=o.TEXTURE_3D);const ye=ue(z,P),me=P.source;n.bindTexture(_e,z.__webglTexture,o.TEXTURE0+ae);const ze=r.get(me);if(me.version!==ze.__version||ye===!0){n.activeTexture(o.TEXTURE0+ae);const Re=Ct.getPrimaries(Ct.workingColorSpace),He=P.colorSpace===dr?null:Ct.getPrimaries(P.colorSpace),mt=P.colorSpace===dr||Re===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,P.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,P.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let we=R(P.image,!1,a.maxTextureSize);we=rt(P,we);const Xe=l.convert(P.format,P.colorSpace),tt=l.convert(P.type);let ot=V(P.internalFormat,Xe,tt,P.colorSpace,P.isVideoTexture);B(_e,P);let je;const gt=P.mipmaps,ct=P.isVideoTexture!==!0,Rt=ze.__version===void 0||ye===!0,te=me.dataReady,De=L(P,we);if(P.isDepthTexture)ot=k(P.format===Xo,P.type),Rt&&(ct?n.texStorage2D(o.TEXTURE_2D,1,ot,we.width,we.height):n.texImage2D(o.TEXTURE_2D,0,ot,we.width,we.height,0,Xe,tt,null));else if(P.isDataTexture)if(gt.length>0){ct&&Rt&&n.texStorage2D(o.TEXTURE_2D,De,ot,gt[0].width,gt[0].height);for(let pe=0,ve=gt.length;pe<ve;pe++)je=gt[pe],ct?te&&n.texSubImage2D(o.TEXTURE_2D,pe,0,0,je.width,je.height,Xe,tt,je.data):n.texImage2D(o.TEXTURE_2D,pe,ot,je.width,je.height,0,Xe,tt,je.data);P.generateMipmaps=!1}else ct?(Rt&&n.texStorage2D(o.TEXTURE_2D,De,ot,we.width,we.height),te&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,we.width,we.height,Xe,tt,we.data)):n.texImage2D(o.TEXTURE_2D,0,ot,we.width,we.height,0,Xe,tt,we.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ct&&Rt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,De,ot,gt[0].width,gt[0].height,we.depth);for(let pe=0,ve=gt.length;pe<ve;pe++)if(je=gt[pe],P.format!==oi)if(Xe!==null)if(ct){if(te)if(P.layerUpdates.size>0){const Fe=_m(je.width,je.height,P.format,P.type);for(const Ne of P.layerUpdates){const ft=je.data.subarray(Ne*Fe/je.data.BYTES_PER_ELEMENT,(Ne+1)*Fe/je.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,Ne,je.width,je.height,1,Xe,ft)}P.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,je.width,je.height,we.depth,Xe,je.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,ot,je.width,je.height,we.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?te&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,je.width,je.height,we.depth,Xe,tt,je.data):n.texImage3D(o.TEXTURE_2D_ARRAY,pe,ot,je.width,je.height,we.depth,0,Xe,tt,je.data)}else{ct&&Rt&&n.texStorage2D(o.TEXTURE_2D,De,ot,gt[0].width,gt[0].height);for(let pe=0,ve=gt.length;pe<ve;pe++)je=gt[pe],P.format!==oi?Xe!==null?ct?te&&n.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,je.width,je.height,Xe,je.data):n.compressedTexImage2D(o.TEXTURE_2D,pe,ot,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?te&&n.texSubImage2D(o.TEXTURE_2D,pe,0,0,je.width,je.height,Xe,tt,je.data):n.texImage2D(o.TEXTURE_2D,pe,ot,je.width,je.height,0,Xe,tt,je.data)}else if(P.isDataArrayTexture)if(ct){if(Rt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,De,ot,we.width,we.height,we.depth),te)if(P.layerUpdates.size>0){const pe=_m(we.width,we.height,P.format,P.type);for(const ve of P.layerUpdates){const Fe=we.data.subarray(ve*pe/we.data.BYTES_PER_ELEMENT,(ve+1)*pe/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,Xe,tt,Fe)}P.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Xe,tt,we.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,ot,we.width,we.height,we.depth,0,Xe,tt,we.data);else if(P.isData3DTexture)ct?(Rt&&n.texStorage3D(o.TEXTURE_3D,De,ot,we.width,we.height,we.depth),te&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Xe,tt,we.data)):n.texImage3D(o.TEXTURE_3D,0,ot,we.width,we.height,we.depth,0,Xe,tt,we.data);else if(P.isFramebufferTexture){if(Rt)if(ct)n.texStorage2D(o.TEXTURE_2D,De,ot,we.width,we.height);else{let pe=we.width,ve=we.height;for(let Fe=0;Fe<De;Fe++)n.texImage2D(o.TEXTURE_2D,Fe,ot,pe,ve,0,Xe,tt,null),pe>>=1,ve>>=1}}else if(gt.length>0){if(ct&&Rt){const pe=Pe(gt[0]);n.texStorage2D(o.TEXTURE_2D,De,ot,pe.width,pe.height)}for(let pe=0,ve=gt.length;pe<ve;pe++)je=gt[pe],ct?te&&n.texSubImage2D(o.TEXTURE_2D,pe,0,0,Xe,tt,je):n.texImage2D(o.TEXTURE_2D,pe,ot,Xe,tt,je);P.generateMipmaps=!1}else if(ct){if(Rt){const pe=Pe(we);n.texStorage2D(o.TEXTURE_2D,De,ot,pe.width,pe.height)}te&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Xe,tt,we)}else n.texImage2D(o.TEXTURE_2D,0,ot,Xe,tt,we);T(P)&&_(_e),ze.__version=me.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function Q(z,P,ae){if(P.image.length!==6)return;const _e=ue(z,P),ye=P.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+ae);const me=r.get(ye);if(ye.version!==me.__version||_e===!0){n.activeTexture(o.TEXTURE0+ae);const ze=Ct.getPrimaries(Ct.workingColorSpace),Re=P.colorSpace===dr?null:Ct.getPrimaries(P.colorSpace),He=P.colorSpace===dr||ze===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,P.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,P.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const mt=P.isCompressedTexture||P.image[0].isCompressedTexture,we=P.image[0]&&P.image[0].isDataTexture,Xe=[];for(let ve=0;ve<6;ve++)!mt&&!we?Xe[ve]=R(P.image[ve],!0,a.maxCubemapSize):Xe[ve]=we?P.image[ve].image:P.image[ve],Xe[ve]=rt(P,Xe[ve]);const tt=Xe[0],ot=l.convert(P.format,P.colorSpace),je=l.convert(P.type),gt=V(P.internalFormat,ot,je,P.colorSpace),ct=P.isVideoTexture!==!0,Rt=me.__version===void 0||_e===!0,te=ye.dataReady;let De=L(P,tt);B(o.TEXTURE_CUBE_MAP,P);let pe;if(mt){ct&&Rt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,De,gt,tt.width,tt.height);for(let ve=0;ve<6;ve++){pe=Xe[ve].mipmaps;for(let Fe=0;Fe<pe.length;Fe++){const Ne=pe[Fe];P.format!==oi?ot!==null?ct?te&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ne.width,Ne.height,ot,Ne.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,gt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ne.width,Ne.height,ot,je,Ne.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,gt,Ne.width,Ne.height,0,ot,je,Ne.data)}}}else{if(pe=P.mipmaps,ct&&Rt){pe.length>0&&De++;const ve=Pe(Xe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,De,gt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){ct?te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Xe[ve].width,Xe[ve].height,ot,je,Xe[ve].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,gt,Xe[ve].width,Xe[ve].height,0,ot,je,Xe[ve].data);for(let Fe=0;Fe<pe.length;Fe++){const ft=pe[Fe].image[ve].image;ct?te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,ft.width,ft.height,ot,je,ft.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,gt,ft.width,ft.height,0,ot,je,ft.data)}}else{ct?te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ot,je,Xe[ve]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,gt,ot,je,Xe[ve]);for(let Fe=0;Fe<pe.length;Fe++){const Ne=pe[Fe];ct?te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,ot,je,Ne.image[ve]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,gt,ot,je,Ne.image[ve])}}}T(P)&&_(o.TEXTURE_CUBE_MAP),me.__version=ye.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function re(z,P,ae,_e,ye,me){const ze=l.convert(ae.format,ae.colorSpace),Re=l.convert(ae.type),He=V(ae.internalFormat,ze,Re,ae.colorSpace),mt=r.get(P),we=r.get(ae);if(we.__renderTarget=P,!mt.__hasExternalTextures){const Xe=Math.max(1,P.width>>me),tt=Math.max(1,P.height>>me);ye===o.TEXTURE_3D||ye===o.TEXTURE_2D_ARRAY?n.texImage3D(ye,me,He,Xe,tt,P.depth,0,ze,Re,null):n.texImage2D(ye,me,He,Xe,tt,0,ze,Re,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),Le(P)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,ye,we.__webglTexture,0,Qe(P)):(ye===o.TEXTURE_2D||ye>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,ye,we.__webglTexture,me),n.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(z,P,ae){if(o.bindRenderbuffer(o.RENDERBUFFER,z),P.depthBuffer){const _e=P.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,me=k(P.stencilBuffer,ye),ze=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=Qe(P);Le(P)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,me,P.width,P.height):ae?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,me,P.width,P.height):o.renderbufferStorage(o.RENDERBUFFER,me,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ze,o.RENDERBUFFER,z)}else{const _e=P.textures;for(let ye=0;ye<_e.length;ye++){const me=_e[ye],ze=l.convert(me.format,me.colorSpace),Re=l.convert(me.type),He=V(me.internalFormat,ze,Re,me.colorSpace),mt=Qe(P);ae&&Le(P)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,He,P.width,P.height):Le(P)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt,He,P.width,P.height):o.renderbufferStorage(o.RENDERBUFFER,He,P.width,P.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ge(z,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(P.depthTexture);_e.__renderTarget=P,(!_e.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ne(P.depthTexture,0);const ye=_e.__webglTexture,me=Qe(P);if(P.depthTexture.format===zo)Le(P)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0);else if(P.depthTexture.format===Xo)Le(P)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Se(z){const P=r.get(z),ae=z.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==z.depthTexture){const _e=z.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),_e){const ye=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),P.__depthDisposeCallback=ye}P.__boundDepthTexture=_e}if(z.depthTexture&&!P.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");ge(P.__webglFramebuffer,z)}else if(ae){P.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(o.FRAMEBUFFER,P.__webglFramebuffer[_e]),P.__webglDepthbuffer[_e]===void 0)P.__webglDepthbuffer[_e]=o.createRenderbuffer(),oe(P.__webglDepthbuffer[_e],z,!1);else{const ye=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,me=P.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,me),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,me)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=o.createRenderbuffer(),oe(P.__webglDepthbuffer,z,!1);else{const _e=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ye=P.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ye),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,ye)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(z,P,ae){const _e=r.get(z);P!==void 0&&re(_e.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ae!==void 0&&Se(z)}function Ze(z){const P=z.texture,ae=r.get(z),_e=r.get(P);z.addEventListener("dispose",I);const ye=z.textures,me=z.isWebGLCubeRenderTarget===!0,ze=ye.length>1;if(ze||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=P.version,c.memory.textures++),me){ae.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0){ae.__webglFramebuffer[Re]=[];for(let He=0;He<P.mipmaps.length;He++)ae.__webglFramebuffer[Re][He]=o.createFramebuffer()}else ae.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Re=0;Re<P.mipmaps.length;Re++)ae.__webglFramebuffer[Re]=o.createFramebuffer()}else ae.__webglFramebuffer=o.createFramebuffer();if(ze)for(let Re=0,He=ye.length;Re<He;Re++){const mt=r.get(ye[Re]);mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&Le(z)===!1){ae.__webglMultisampledFramebuffer=o.createFramebuffer(),ae.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const He=ye[Re];ae.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ae.__webglColorRenderbuffer[Re]);const mt=l.convert(He.format,He.colorSpace),we=l.convert(He.type),Xe=V(He.internalFormat,mt,we,He.colorSpace,z.isXRRenderTarget===!0),tt=Qe(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,tt,Xe,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,ae.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(ae.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(ae.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(me){n.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),B(o.TEXTURE_CUBE_MAP,P);for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0)for(let He=0;He<P.mipmaps.length;He++)re(ae.__webglFramebuffer[Re][He],z,P,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,He);else re(ae.__webglFramebuffer[Re],z,P,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);T(P)&&_(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let Re=0,He=ye.length;Re<He;Re++){const mt=ye[Re],we=r.get(mt);n.bindTexture(o.TEXTURE_2D,we.__webglTexture),B(o.TEXTURE_2D,mt),re(ae.__webglFramebuffer,z,mt,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),T(mt)&&_(o.TEXTURE_2D)}n.unbindTexture()}else{let Re=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Re=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Re,_e.__webglTexture),B(Re,P),P.mipmaps&&P.mipmaps.length>0)for(let He=0;He<P.mipmaps.length;He++)re(ae.__webglFramebuffer[He],z,P,o.COLOR_ATTACHMENT0,Re,He);else re(ae.__webglFramebuffer,z,P,o.COLOR_ATTACHMENT0,Re,0);T(P)&&_(Re),n.unbindTexture()}z.depthBuffer&&Se(z)}function Ve(z){const P=z.textures;for(let ae=0,_e=P.length;ae<_e;ae++){const ye=P[ae];if(T(ye)){const me=Y(z),ze=r.get(ye).__webglTexture;n.bindTexture(me,ze),_(me),n.unbindTexture()}}}const Ke=[],j=[];function ut(z){if(z.samples>0){if(Le(z)===!1){const P=z.textures,ae=z.width,_e=z.height;let ye=o.COLOR_BUFFER_BIT;const me=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ze=r.get(z),Re=P.length>1;if(Re)for(let He=0;He<P.length;He++)n.bindFramebuffer(o.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let He=0;He<P.length;He++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ye|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ye|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ze.__webglColorRenderbuffer[He]);const mt=r.get(P[He]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,mt,0)}o.blitFramebuffer(0,0,ae,_e,0,0,ae,_e,ye,o.NEAREST),p===!0&&(Ke.length=0,j.length=0,Ke.push(o.COLOR_ATTACHMENT0+He),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ke.push(me),j.push(me),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,j)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let He=0;He<P.length;He++){n.bindFramebuffer(o.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,ze.__webglColorRenderbuffer[He]);const mt=r.get(P[He]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,mt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const P=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[P])}}}function Qe(z){return Math.min(a.maxSamples,z.samples)}function Le(z){const P=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function be(z){const P=c.render.frame;S.get(z)!==P&&(S.set(z,P),z.update())}function rt(z,P){const ae=z.colorSpace,_e=z.format,ye=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ae!==jo&&ae!==dr&&(Ct.getTransfer(ae)===Lt?(_e!==oi||ye!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),P}function Pe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(g.width=z.naturalWidth||z.width,g.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(g.width=z.displayWidth,g.height=z.displayHeight):(g.width=z.width,g.height=z.height),g}this.allocateTextureUnit=F,this.resetTextureUnits=$,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=y,this.setTextureCube=q,this.rebindTextures=Ce,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Le}function HE(o,e){function n(r,a=dr){let l;const c=Ct.getTransfer(a);if(r===Fi)return o.UNSIGNED_BYTE;if(r===ad)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return o.UNSIGNED_SHORT_5_5_5_1;if(r===gg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===pg)return o.BYTE;if(r===mg)return o.SHORT;if(r===ks)return o.UNSIGNED_SHORT;if(r===sd)return o.INT;if(r===$r)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===Bs)return o.HALF_FLOAT;if(r===vg)return o.ALPHA;if(r===_g)return o.RGB;if(r===oi)return o.RGBA;if(r===yg)return o.LUMINANCE;if(r===Sg)return o.LUMINANCE_ALPHA;if(r===zo)return o.DEPTH_COMPONENT;if(r===Xo)return o.DEPTH_STENCIL;if(r===xg)return o.RED;if(r===ud)return o.RED_INTEGER;if(r===Mg)return o.RG;if(r===cd)return o.RG_INTEGER;if(r===fd)return o.RGBA_INTEGER;if(r===wl||r===Al||r===Cl||r===Rl)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bf||r===Pf||r===Lf||r===Df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===bf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===If||r===Uf||r===Nf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===If||r===Uf)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Nf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Of||r===Ff||r===kf||r===zf||r===Bf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===jf||r===qf||r===Yf||r===$f)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Of)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ff)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$f)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bl||r===Kf||r===Zf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bl)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Eg||r===Qf||r===Jf||r===ed)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===bl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Qf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const VE={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const f=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){c=!0;for(const R of e.hand.values()){const T=n.getJointPose(R,r),_=this._getHandJoint(g,R);T!==null&&(_.matrix.fromArray(T.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=T.radius),_.visible=T!==null}const S=g.joints["index-finger-tip"],x=g.joints["thumb-tip"],M=S.position.distanceTo(x.position),A=.02,D=.005;g.inputState.pinching&&M>A+D?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&M<=A-D&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),g!==null&&(g.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new xl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
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

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new gr({vertexShader:GE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ni(new Bl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends $o{constructor(e,n){super();const r=this;let a=null,l=1,c=null,f="local-floor",p=1,g=null,S=null,x=null,M=null,A=null,D=null;const R=new XE,T=n.getContextAttributes();let _=null,Y=null;const V=[],k=[],L=new Dt;let b=null;const I=new ii;I.viewport=new Xt;const G=new ii;G.viewport=new Xt;const E=[I,G],m=new hy;let N=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=V[X];return Q===void 0&&(Q=new tf,V[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=V[X];return Q===void 0&&(Q=new tf,V[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=V[X];return Q===void 0&&(Q=new tf,V[X]=Q),Q.getHandSpace()};function F(X){const Q=k.indexOf(X.inputSource);if(Q===-1)return;const re=V[Q];re!==void 0&&(re.update(X.inputSource,X.frame,g||c),re.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",H),a.removeEventListener("inputsourceschange",ne);for(let X=0;X<V.length;X++){const Q=k[X];Q!==null&&(k[X]=null,V[X].disconnect(Q))}N=null,$=null,R.reset(),e.setRenderTarget(_),A=null,M=null,x=null,a=null,Y=null,ue.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||c},this.setReferenceSpace=function(X){g=X},this.getBaseLayer=function(){return M!==null?M:A},this.getBinding=function(){return x},this.getFrame=function(){return D},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",H),a.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),a.renderState.layers===void 0){const Q={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};A=new XRWebGLLayer(a,n,Q),a.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),Y=new Kr(A.framebufferWidth,A.framebufferHeight,{format:oi,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let Q=null,re=null,oe=null;T.depth&&(oe=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=T.stencil?Xo:zo,re=T.stencil?Wo:$r);const ge={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:l};x=new XRWebGLBinding(a,n),M=x.createProjectionLayer(ge),a.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),Y=new Kr(M.textureWidth,M.textureHeight,{format:oi,type:Fi,depthTexture:new kg(M.textureWidth,M.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1})}Y.isXRRenderTarget=!0,this.setFoveation(p),g=null,c=await a.requestReferenceSpace(f),ue.setContext(a),ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ne(X){for(let Q=0;Q<X.removed.length;Q++){const re=X.removed[Q],oe=k.indexOf(re);oe>=0&&(k[oe]=null,V[oe].disconnect(re))}for(let Q=0;Q<X.added.length;Q++){const re=X.added[Q];let oe=k.indexOf(re);if(oe===-1){for(let Se=0;Se<V.length;Se++)if(Se>=k.length){k.push(re),oe=Se;break}else if(k[Se]===null){k[Se]=re,oe=Se;break}if(oe===-1)break}const ge=V[oe];ge&&ge.connect(re)}}const K=new he,y=new he;function q(X,Q,re){K.setFromMatrixPosition(Q.matrixWorld),y.setFromMatrixPosition(re.matrixWorld);const oe=K.distanceTo(y),ge=Q.projectionMatrix.elements,Se=re.projectionMatrix.elements,Ce=ge[14]/(ge[10]-1),Ze=ge[14]/(ge[10]+1),Ve=(ge[9]+1)/ge[5],Ke=(ge[9]-1)/ge[5],j=(ge[8]-1)/ge[0],ut=(Se[8]+1)/Se[0],Qe=Ce*j,Le=Ce*ut,be=oe/(-j+ut),rt=be*-j;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(rt),X.translateZ(be),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Pe=Ce+be,z=Ze+be,P=Qe-rt,ae=Le+(oe-rt),_e=Ve*Ze/z*Pe,ye=Ke*Ze/z*Pe;X.projectionMatrix.makePerspective(P,ae,_e,ye,Pe,z),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function O(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let Q=X.near,re=X.far;R.texture!==null&&(R.depthNear>0&&(Q=R.depthNear),R.depthFar>0&&(re=R.depthFar)),m.near=G.near=I.near=Q,m.far=G.far=I.far=re,(N!==m.near||$!==m.far)&&(a.updateRenderState({depthNear:m.near,depthFar:m.far}),N=m.near,$=m.far),I.layers.mask=X.layers.mask|2,G.layers.mask=X.layers.mask|4,m.layers.mask=I.layers.mask|G.layers.mask;const oe=X.parent,ge=m.cameras;O(m,oe);for(let Se=0;Se<ge.length;Se++)O(ge[Se],oe);ge.length===2?q(m,I,G):m.projectionMatrix.copy(I.projectionMatrix),v(X,m,oe)};function v(X,Q,re){re===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(re.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=td*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(M===null&&A===null))return p},this.setFoveation=function(X){p=X,M!==null&&(M.fixedFoveation=X),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=X)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(m)};let w=null;function B(X,Q){if(S=Q.getViewerPose(g||c),D=Q,S!==null){const re=S.views;A!==null&&(e.setRenderTargetFramebuffer(Y,A.framebuffer),e.setRenderTarget(Y));let oe=!1;re.length!==m.cameras.length&&(m.cameras.length=0,oe=!0);for(let Se=0;Se<re.length;Se++){const Ce=re[Se];let Ze=null;if(A!==null)Ze=A.getViewport(Ce);else{const Ke=x.getViewSubImage(M,Ce);Ze=Ke.viewport,Se===0&&(e.setRenderTargetTextures(Y,Ke.colorTexture,M.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(Y))}let Ve=E[Se];Ve===void 0&&(Ve=new ii,Ve.layers.enable(Se),Ve.viewport=new Xt,E[Se]=Ve),Ve.matrix.fromArray(Ce.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ce.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Se===0&&(m.matrix.copy(Ve.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),oe===!0&&m.cameras.push(Ve)}const ge=a.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Se=x.getDepthInformation(re[0]);Se&&Se.isValid&&Se.texture&&R.init(e,Se,a.renderState)}}for(let re=0;re<V.length;re++){const oe=k[re],ge=V[re];oe!==null&&ge!==void 0&&ge.update(oe,Q,g||c)}w&&w(X,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),D=null}const ue=new zg;ue.setAnimationLoop(B),this.setAnimationLoop=function(X){w=X},this.dispose=function(){}}}const zr=new ki,qE=new jt;function YE(o,e){function n(T,_){T.matrixAutoUpdate===!0&&T.updateMatrix(),_.value.copy(T.matrix)}function r(T,_){_.color.getRGB(T.fogColor.value,Ug(o)),_.isFog?(T.fogNear.value=_.near,T.fogFar.value=_.far):_.isFogExp2&&(T.fogDensity.value=_.density)}function a(T,_,Y,V,k){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(T,_):_.isMeshToonMaterial?(l(T,_),x(T,_)):_.isMeshPhongMaterial?(l(T,_),S(T,_)):_.isMeshStandardMaterial?(l(T,_),M(T,_),_.isMeshPhysicalMaterial&&A(T,_,k)):_.isMeshMatcapMaterial?(l(T,_),D(T,_)):_.isMeshDepthMaterial?l(T,_):_.isMeshDistanceMaterial?(l(T,_),R(T,_)):_.isMeshNormalMaterial?l(T,_):_.isLineBasicMaterial?(c(T,_),_.isLineDashedMaterial&&f(T,_)):_.isPointsMaterial?p(T,_,Y,V):_.isSpriteMaterial?g(T,_):_.isShadowMaterial?(T.color.value.copy(_.color),T.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(T,_){T.opacity.value=_.opacity,_.color&&T.diffuse.value.copy(_.color),_.emissive&&T.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(T.map.value=_.map,n(_.map,T.mapTransform)),_.alphaMap&&(T.alphaMap.value=_.alphaMap,n(_.alphaMap,T.alphaMapTransform)),_.bumpMap&&(T.bumpMap.value=_.bumpMap,n(_.bumpMap,T.bumpMapTransform),T.bumpScale.value=_.bumpScale,_.side===Pn&&(T.bumpScale.value*=-1)),_.normalMap&&(T.normalMap.value=_.normalMap,n(_.normalMap,T.normalMapTransform),T.normalScale.value.copy(_.normalScale),_.side===Pn&&T.normalScale.value.negate()),_.displacementMap&&(T.displacementMap.value=_.displacementMap,n(_.displacementMap,T.displacementMapTransform),T.displacementScale.value=_.displacementScale,T.displacementBias.value=_.displacementBias),_.emissiveMap&&(T.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,T.emissiveMapTransform)),_.specularMap&&(T.specularMap.value=_.specularMap,n(_.specularMap,T.specularMapTransform)),_.alphaTest>0&&(T.alphaTest.value=_.alphaTest);const Y=e.get(_),V=Y.envMap,k=Y.envMapRotation;V&&(T.envMap.value=V,zr.copy(k),zr.x*=-1,zr.y*=-1,zr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),T.envMapRotation.value.setFromMatrix4(qE.makeRotationFromEuler(zr)),T.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=_.reflectivity,T.ior.value=_.ior,T.refractionRatio.value=_.refractionRatio),_.lightMap&&(T.lightMap.value=_.lightMap,T.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,T.lightMapTransform)),_.aoMap&&(T.aoMap.value=_.aoMap,T.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,T.aoMapTransform))}function c(T,_){T.diffuse.value.copy(_.color),T.opacity.value=_.opacity,_.map&&(T.map.value=_.map,n(_.map,T.mapTransform))}function f(T,_){T.dashSize.value=_.dashSize,T.totalSize.value=_.dashSize+_.gapSize,T.scale.value=_.scale}function p(T,_,Y,V){T.diffuse.value.copy(_.color),T.opacity.value=_.opacity,T.size.value=_.size*Y,T.scale.value=V*.5,_.map&&(T.map.value=_.map,n(_.map,T.uvTransform)),_.alphaMap&&(T.alphaMap.value=_.alphaMap,n(_.alphaMap,T.alphaMapTransform)),_.alphaTest>0&&(T.alphaTest.value=_.alphaTest)}function g(T,_){T.diffuse.value.copy(_.color),T.opacity.value=_.opacity,T.rotation.value=_.rotation,_.map&&(T.map.value=_.map,n(_.map,T.mapTransform)),_.alphaMap&&(T.alphaMap.value=_.alphaMap,n(_.alphaMap,T.alphaMapTransform)),_.alphaTest>0&&(T.alphaTest.value=_.alphaTest)}function S(T,_){T.specular.value.copy(_.specular),T.shininess.value=Math.max(_.shininess,1e-4)}function x(T,_){_.gradientMap&&(T.gradientMap.value=_.gradientMap)}function M(T,_){T.metalness.value=_.metalness,_.metalnessMap&&(T.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,T.metalnessMapTransform)),T.roughness.value=_.roughness,_.roughnessMap&&(T.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,T.roughnessMapTransform)),_.envMap&&(T.envMapIntensity.value=_.envMapIntensity)}function A(T,_,Y){T.ior.value=_.ior,_.sheen>0&&(T.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),T.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(T.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,T.sheenColorMapTransform)),_.sheenRoughnessMap&&(T.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,T.sheenRoughnessMapTransform))),_.clearcoat>0&&(T.clearcoat.value=_.clearcoat,T.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(T.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,T.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(T.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&T.clearcoatNormalScale.value.negate())),_.dispersion>0&&(T.dispersion.value=_.dispersion),_.iridescence>0&&(T.iridescence.value=_.iridescence,T.iridescenceIOR.value=_.iridescenceIOR,T.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(T.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,T.iridescenceMapTransform)),_.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),_.transmission>0&&(T.transmission.value=_.transmission,T.transmissionSamplerMap.value=Y.texture,T.transmissionSamplerSize.value.set(Y.width,Y.height),_.transmissionMap&&(T.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,T.transmissionMapTransform)),T.thickness.value=_.thickness,_.thicknessMap&&(T.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=_.attenuationDistance,T.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(T.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(T.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=_.specularIntensity,T.specularColor.value.copy(_.specularColor),_.specularColorMap&&(T.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,T.specularColorMapTransform)),_.specularIntensityMap&&(T.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,T.specularIntensityMapTransform))}function D(T,_){_.matcap&&(T.matcap.value=_.matcap)}function R(T,_){const Y=e.get(_).light;T.referencePosition.value.setFromMatrixPosition(Y.matrixWorld),T.nearDistance.value=Y.shadow.camera.near,T.farDistance.value=Y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function $E(o,e,n,r){let a={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(Y,V){const k=V.program;r.uniformBlockBinding(Y,k)}function g(Y,V){let k=a[Y.id];k===void 0&&(D(Y),k=S(Y),a[Y.id]=k,Y.addEventListener("dispose",T));const L=V.program;r.updateUBOMapping(Y,L);const b=e.render.frame;l[Y.id]!==b&&(M(Y),l[Y.id]=b)}function S(Y){const V=x();Y.__bindingPointIndex=V;const k=o.createBuffer(),L=Y.__size,b=Y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,k),o.bufferData(o.UNIFORM_BUFFER,L,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,V,k),k}function x(){for(let Y=0;Y<f;Y++)if(c.indexOf(Y)===-1)return c.push(Y),Y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(Y){const V=a[Y.id],k=Y.uniforms,L=Y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,V);for(let b=0,I=k.length;b<I;b++){const G=Array.isArray(k[b])?k[b]:[k[b]];for(let E=0,m=G.length;E<m;E++){const N=G[E];if(A(N,b,E,L)===!0){const $=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let H=0;for(let ne=0;ne<F.length;ne++){const K=F[ne],y=R(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,o.bufferSubData(o.UNIFORM_BUFFER,$+H,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,H),H+=y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function A(Y,V,k,L){const b=Y.value,I=V+"_"+k;if(L[I]===void 0)return typeof b=="number"||typeof b=="boolean"?L[I]=b:L[I]=b.clone(),!0;{const G=L[I];if(typeof b=="number"||typeof b=="boolean"){if(G!==b)return L[I]=b,!0}else if(G.equals(b)===!1)return G.copy(b),!0}return!1}function D(Y){const V=Y.uniforms;let k=0;const L=16;for(let I=0,G=V.length;I<G;I++){const E=Array.isArray(V[I])?V[I]:[V[I]];for(let m=0,N=E.length;m<N;m++){const $=E[m],F=Array.isArray($.value)?$.value:[$.value];for(let H=0,ne=F.length;H<ne;H++){const K=F[H],y=R(K),q=k%L,O=q%y.boundary,v=q+O;k+=O,v!==0&&L-v<y.storage&&(k+=L-v),$.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=k,k+=y.storage}}}const b=k%L;return b>0&&(k+=L-b),Y.__size=k,Y.__cache={},this}function R(Y){const V={boundary:0,storage:0};return typeof Y=="number"||typeof Y=="boolean"?(V.boundary=4,V.storage=4):Y.isVector2?(V.boundary=8,V.storage=8):Y.isVector3||Y.isColor?(V.boundary=16,V.storage=12):Y.isVector4?(V.boundary=16,V.storage=16):Y.isMatrix3?(V.boundary=48,V.storage=48):Y.isMatrix4?(V.boundary=64,V.storage=64):Y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",Y),V}function T(Y){const V=Y.target;V.removeEventListener("dispose",T);const k=c.indexOf(V.__bindingPointIndex);c.splice(k,1),o.deleteBuffer(a[V.id]),delete a[V.id],delete l[V.id]}function _(){for(const Y in a)o.deleteBuffer(a[Y]);c=[],a={},l={}}return{bind:p,update:g,dispose:_}}class B1{constructor(e={}){const{canvas:n=N0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:M=!1}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=c;const D=new Uint32Array(4),R=new Int32Array(4);let T=null,_=null;const Y=[],V=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=pr,this.toneMappingExposure=1;const k=this;let L=!1,b=0,I=0,G=null,E=-1,m=null;const N=new Xt,$=new Xt;let F=null;const H=new bt(0);let ne=0,K=n.width,y=n.height,q=1,O=null,v=null;const w=new Xt(0,0,K,y),B=new Xt(0,0,K,y);let ue=!1;const X=new Fg;let Q=!1,re=!1;const oe=new jt,ge=new jt,Se=new he,Ce=new Xt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ke(){return G===null?q:1}let j=r;function ut(U,ie){return n.getContext(U,ie)}try{const U={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${od}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),j===null){const ie="webgl2";if(j=ut(ie,U),j===null)throw ut(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Qe,Le,be,rt,Pe,z,P,ae,_e,ye,me,ze,Re,He,mt,we,Xe,tt,ot,je,gt,ct,Rt,te;function De(){Qe=new oM(j),Qe.init(),ct=new HE(j,Qe),Le=new Jx(j,Qe,e,ct),be=new zE(j,Qe),Le.reverseDepthBuffer&&M&&be.buffers.depth.setReversed(!0),rt=new lM(j),Pe=new AE,z=new BE(j,Qe,be,Pe,Le,ct,rt),P=new tM(k),ae=new rM(k),_e=new my(j),Rt=new Zx(j,_e),ye=new sM(j,_e,rt,Rt),me=new cM(j,ye,_e,rt),ot=new uM(j,Le,z),we=new eM(Pe),ze=new wE(k,P,ae,Qe,Le,Rt,we),Re=new YE(k,Pe),He=new RE,mt=new UE(Qe),tt=new Kx(k,P,ae,be,me,A,p),Xe=new FE(k,me,Le),te=new $E(j,rt,Le,be),je=new Qx(j,Qe,rt),gt=new aM(j,Qe,rt),rt.programs=ze.programs,k.capabilities=Le,k.extensions=Qe,k.properties=Pe,k.renderLists=He,k.shadowMap=Xe,k.state=be,k.info=rt}De();const pe=new jE(k,j);this.xr=pe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const U=Qe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Qe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(U){U!==void 0&&(q=U,this.setSize(K,y,!1))},this.getSize=function(U){return U.set(K,y)},this.setSize=function(U,ie,fe=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=U,y=ie,n.width=Math.floor(U*q),n.height=Math.floor(ie*q),fe===!0&&(n.style.width=U+"px",n.style.height=ie+"px"),this.setViewport(0,0,U,ie)},this.getDrawingBufferSize=function(U){return U.set(K*q,y*q).floor()},this.setDrawingBufferSize=function(U,ie,fe){K=U,y=ie,q=fe,n.width=Math.floor(U*fe),n.height=Math.floor(ie*fe),this.setViewport(0,0,U,ie)},this.getCurrentViewport=function(U){return U.copy(N)},this.getViewport=function(U){return U.copy(w)},this.setViewport=function(U,ie,fe,de){U.isVector4?w.set(U.x,U.y,U.z,U.w):w.set(U,ie,fe,de),be.viewport(N.copy(w).multiplyScalar(q).round())},this.getScissor=function(U){return U.copy(B)},this.setScissor=function(U,ie,fe,de){U.isVector4?B.set(U.x,U.y,U.z,U.w):B.set(U,ie,fe,de),be.scissor($.copy(B).multiplyScalar(q).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(U){be.setScissorTest(ue=U)},this.setOpaqueSort=function(U){O=U},this.setTransparentSort=function(U){v=U},this.getClearColor=function(U){return U.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(U=!0,ie=!0,fe=!0){let de=0;if(U){let J=!1;if(G!==null){const Te=G.texture.format;J=Te===fd||Te===cd||Te===ud}if(J){const Te=G.texture.type,Ie=Te===Fi||Te===$r||Te===ks||Te===Wo||Te===ad||Te===ld,Be=tt.getClearColor(),Ge=tt.getClearAlpha(),st=Be.r,at=Be.g,Je=Be.b;Ie?(D[0]=st,D[1]=at,D[2]=Je,D[3]=Ge,j.clearBufferuiv(j.COLOR,0,D)):(R[0]=st,R[1]=at,R[2]=Je,R[3]=Ge,j.clearBufferiv(j.COLOR,0,R))}else de|=j.COLOR_BUFFER_BIT}ie&&(de|=j.DEPTH_BUFFER_BIT),fe&&(de|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),tt.dispose(),He.dispose(),mt.dispose(),Pe.dispose(),P.dispose(),ae.dispose(),me.dispose(),Rt.dispose(),te.dispose(),ze.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Zr),pe.removeEventListener("sessionend",zi),gi.stop()};function ve(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const U=rt.autoReset,ie=Xe.enabled,fe=Xe.autoUpdate,de=Xe.needsUpdate,J=Xe.type;De(),rt.autoReset=U,Xe.enabled=ie,Xe.autoUpdate=fe,Xe.needsUpdate=de,Xe.type=J}function Ne(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ft(U){const ie=U.target;ie.removeEventListener("dispose",ft),Ut(ie)}function Ut(U){$t(U),Pe.remove(U)}function $t(U){const ie=Pe.get(U).programs;ie!==void 0&&(ie.forEach(function(fe){ze.releaseProgram(fe)}),U.isShaderMaterial&&ze.releaseShaderCache(U))}this.renderBufferDirect=function(U,ie,fe,de,J,Te){ie===null&&(ie=Ze);const Ie=J.isMesh&&J.matrixWorld.determinant()<0,Be=$s(U,ie,fe,de,J);be.setMaterial(de,Ie);let Ge=fe.index,st=1;if(de.wireframe===!0){if(Ge=ye.getWireframeAttribute(fe),Ge===void 0)return;st=2}const at=fe.drawRange,Je=fe.attributes.position;let dt=at.start*st,Tt=(at.start+at.count)*st;Te!==null&&(dt=Math.max(dt,Te.start*st),Tt=Math.min(Tt,(Te.start+Te.count)*st)),Ge!==null?(dt=Math.max(dt,0),Tt=Math.min(Tt,Ge.count)):Je!=null&&(dt=Math.max(dt,0),Tt=Math.min(Tt,Je.count));const wt=Tt-dt;if(wt<0||wt===1/0)return;Rt.setup(J,de,Be,fe,Ge);let Ft,xt=je;if(Ge!==null&&(Ft=_e.get(Ge),xt=gt,xt.setIndex(Ft)),J.isMesh)de.wireframe===!0?(be.setLineWidth(de.wireframeLinewidth*Ke()),xt.setMode(j.LINES)):xt.setMode(j.TRIANGLES);else if(J.isLine){let et=de.linewidth;et===void 0&&(et=1),be.setLineWidth(et*Ke()),J.isLineSegments?xt.setMode(j.LINES):J.isLineLoop?xt.setMode(j.LINE_LOOP):xt.setMode(j.LINE_STRIP)}else J.isPoints?xt.setMode(j.POINTS):J.isSprite&&xt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)xt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))xt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const et=J._multiDrawStarts,Ht=J._multiDrawCounts,yt=J._multiDrawCount,on=Ge?_e.get(Ge).bytesPerElement:1,qn=Pe.get(de).currentProgram.getUniforms();for(let vn=0;vn<yt;vn++)qn.setValue(j,"_gl_DrawID",vn),xt.render(et[vn]/on,Ht[vn])}else if(J.isInstancedMesh)xt.renderInstances(dt,wt,J.count);else if(fe.isInstancedBufferGeometry){const et=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ht=Math.min(fe.instanceCount,et);xt.renderInstances(dt,wt,Ht)}else xt.render(dt,wt)};function Mt(U,ie,fe){U.transparent===!0&&U.side===Di&&U.forceSinglePass===!1?(U.side=Pn,U.needsUpdate=!0,Qr(U,ie,fe),U.side=mr,U.needsUpdate=!0,Qr(U,ie,fe),U.side=Di):Qr(U,ie,fe)}this.compile=function(U,ie,fe=null){fe===null&&(fe=U),_=mt.get(fe),_.init(ie),V.push(_),fe.traverseVisible(function(J){J.isLight&&J.layers.test(ie.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),U!==fe&&U.traverseVisible(function(J){J.isLight&&J.layers.test(ie.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const de=new Set;return U.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Te=J.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const Be=Te[Ie];Mt(Be,fe,J),de.add(Be)}else Mt(Te,fe,J),de.add(Te)}),V.pop(),_=null,de},this.compileAsync=function(U,ie,fe=null){const de=this.compile(U,ie,fe);return new Promise(J=>{function Te(){if(de.forEach(function(Ie){Pe.get(Ie).currentProgram.isReady()&&de.delete(Ie)}),de.size===0){J(U);return}setTimeout(Te,10)}Qe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Mn=null;function gn(U){Mn&&Mn(U)}function Zr(){gi.stop()}function zi(){gi.start()}const gi=new zg;gi.setAnimationLoop(gn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(U){Mn=U,pe.setAnimationLoop(U),U===null?gi.stop():gi.start()},pe.addEventListener("sessionstart",Zr),pe.addEventListener("sessionend",zi),this.render=function(U,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(ie),ie=pe.getCamera()),U.isScene===!0&&U.onBeforeRender(k,U,ie,G),_=mt.get(U,V.length),_.init(ie),V.push(_),ge.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),X.setFromProjectionMatrix(ge),re=this.localClippingEnabled,Q=we.init(this.clippingPlanes,re),T=He.get(U,Y.length),T.init(),Y.push(T),pe.enabled===!0&&pe.isPresenting===!0){const Te=k.xr.getDepthSensingMesh();Te!==null&&vi(Te,ie,-1/0,k.sortObjects)}vi(U,ie,0,k.sortObjects),T.finish(),k.sortObjects===!0&&T.sort(O,v),Ve=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Ve&&tt.addToRenderList(T,U),this.info.render.frame++,Q===!0&&we.beginShadows();const fe=_.state.shadowsArray;Xe.render(fe,U,ie),Q===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=T.opaque,J=T.transmissive;if(_.setupLights(),ie.isArrayCamera){const Te=ie.cameras;if(J.length>0)for(let Ie=0,Be=Te.length;Ie<Be;Ie++){const Ge=Te[Ie];yr(de,J,U,Ge)}Ve&&tt.render(U);for(let Ie=0,Be=Te.length;Ie<Be;Ie++){const Ge=Te[Ie];_r(T,U,Ge,Ge.viewport)}}else J.length>0&&yr(de,J,U,ie),Ve&&tt.render(U),_r(T,U,ie);G!==null&&(z.updateMultisampleRenderTarget(G),z.updateRenderTargetMipmap(G)),U.isScene===!0&&U.onAfterRender(k,U,ie),Rt.resetDefaultState(),E=-1,m=null,V.pop(),V.length>0?(_=V[V.length-1],Q===!0&&we.setGlobalState(k.clippingPlanes,_.state.camera)):_=null,Y.pop(),Y.length>0?T=Y[Y.length-1]:T=null};function vi(U,ie,fe,de){if(U.visible===!1)return;if(U.layers.test(ie.layers)){if(U.isGroup)fe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ie);else if(U.isLight)_.pushLight(U),U.castShadow&&_.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||X.intersectsSprite(U)){de&&Ce.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ge);const Ie=me.update(U),Be=U.material;Be.visible&&T.push(U,Ie,Be,fe,Ce.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||X.intersectsObject(U))){const Ie=me.update(U),Be=U.material;if(de&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ce.copy(U.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ce.copy(Ie.boundingSphere.center)),Ce.applyMatrix4(U.matrixWorld).applyMatrix4(ge)),Array.isArray(Be)){const Ge=Ie.groups;for(let st=0,at=Ge.length;st<at;st++){const Je=Ge[st],dt=Be[Je.materialIndex];dt&&dt.visible&&T.push(U,Ie,dt,fe,Ce.z,Je)}}else Be.visible&&T.push(U,Ie,Be,fe,Ce.z,null)}}const Te=U.children;for(let Ie=0,Be=Te.length;Ie<Be;Ie++)vi(Te[Ie],ie,fe,de)}function _r(U,ie,fe,de){const J=U.opaque,Te=U.transmissive,Ie=U.transparent;_.setupLightsView(fe),Q===!0&&we.setGlobalState(k.clippingPlanes,fe),de&&be.viewport(N.copy(de)),J.length>0&&Bi(J,ie,fe),Te.length>0&&Bi(Te,ie,fe),Ie.length>0&&Bi(Ie,ie,fe),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function yr(U,ie,fe,de){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[de.id]===void 0&&(_.state.transmissionRenderTarget[de.id]=new Kr(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Bs:Fi,minFilter:jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Te=_.state.transmissionRenderTarget[de.id],Ie=de.viewport||N;Te.setSize(Ie.z,Ie.w);const Be=k.getRenderTarget();k.setRenderTarget(Te),k.getClearColor(H),ne=k.getClearAlpha(),ne<1&&k.setClearColor(16777215,.5),k.clear(),Ve&&tt.render(fe);const Ge=k.toneMapping;k.toneMapping=pr;const st=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),_.setupLightsView(de),Q===!0&&we.setGlobalState(k.clippingPlanes,de),Bi(U,fe,de),z.updateMultisampleRenderTarget(Te),z.updateRenderTargetMipmap(Te),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Je=0,dt=ie.length;Je<dt;Je++){const Tt=ie[Je],wt=Tt.object,Ft=Tt.geometry,xt=Tt.material,et=Tt.group;if(xt.side===Di&&wt.layers.test(de.layers)){const Ht=xt.side;xt.side=Pn,xt.needsUpdate=!0,qs(wt,fe,de,Ft,xt,et),xt.side=Ht,xt.needsUpdate=!0,at=!0}}at===!0&&(z.updateMultisampleRenderTarget(Te),z.updateRenderTargetMipmap(Te))}k.setRenderTarget(Be),k.setClearColor(H,ne),st!==void 0&&(de.viewport=st),k.toneMapping=Ge}function Bi(U,ie,fe){const de=ie.isScene===!0?ie.overrideMaterial:null;for(let J=0,Te=U.length;J<Te;J++){const Ie=U[J],Be=Ie.object,Ge=Ie.geometry,st=de===null?Ie.material:de,at=Ie.group;Be.layers.test(fe.layers)&&qs(Be,ie,fe,Ge,st,at)}}function qs(U,ie,fe,de,J,Te){U.onBeforeRender(k,ie,fe,de,J,Te),U.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),J.onBeforeRender(k,ie,fe,de,U,Te),J.transparent===!0&&J.side===Di&&J.forceSinglePass===!1?(J.side=Pn,J.needsUpdate=!0,k.renderBufferDirect(fe,ie,de,J,U,Te),J.side=mr,J.needsUpdate=!0,k.renderBufferDirect(fe,ie,de,J,U,Te),J.side=Di):k.renderBufferDirect(fe,ie,de,J,U,Te),U.onAfterRender(k,ie,fe,de,J,Te)}function Qr(U,ie,fe){ie.isScene!==!0&&(ie=Ze);const de=Pe.get(U),J=_.state.lights,Te=_.state.shadowsArray,Ie=J.state.version,Be=ze.getParameters(U,J.state,Te,ie,fe),Ge=ze.getProgramCacheKey(Be);let st=de.programs;de.environment=U.isMeshStandardMaterial?ie.environment:null,de.fog=ie.fog,de.envMap=(U.isMeshStandardMaterial?ae:P).get(U.envMap||de.environment),de.envMapRotation=de.environment!==null&&U.envMap===null?ie.environmentRotation:U.envMapRotation,st===void 0&&(U.addEventListener("dispose",ft),st=new Map,de.programs=st);let at=st.get(Ge);if(at!==void 0){if(de.currentProgram===at&&de.lightsStateVersion===Ie)return ai(U,Be),at}else Be.uniforms=ze.getUniforms(U),U.onBeforeCompile(Be,k),at=ze.acquireProgram(Be,Ge),st.set(Ge,at),de.uniforms=Be.uniforms;const Je=de.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Je.clippingPlanes=we.uniform),ai(U,Be),de.needsLights=Wl(U),de.lightsStateVersion=Ie,de.needsLights&&(Je.ambientLightColor.value=J.state.ambient,Je.lightProbe.value=J.state.probe,Je.directionalLights.value=J.state.directional,Je.directionalLightShadows.value=J.state.directionalShadow,Je.spotLights.value=J.state.spot,Je.spotLightShadows.value=J.state.spotShadow,Je.rectAreaLights.value=J.state.rectArea,Je.ltc_1.value=J.state.rectAreaLTC1,Je.ltc_2.value=J.state.rectAreaLTC2,Je.pointLights.value=J.state.point,Je.pointLightShadows.value=J.state.pointShadow,Je.hemisphereLights.value=J.state.hemi,Je.directionalShadowMap.value=J.state.directionalShadowMap,Je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Je.spotShadowMap.value=J.state.spotShadowMap,Je.spotLightMatrix.value=J.state.spotLightMatrix,Je.spotLightMap.value=J.state.spotLightMap,Je.pointShadowMap.value=J.state.pointShadowMap,Je.pointShadowMatrix.value=J.state.pointShadowMatrix),de.currentProgram=at,de.uniformsList=null,at}function Ys(U){if(U.uniformsList===null){const ie=U.currentProgram.getUniforms();U.uniformsList=Pl.seqWithValue(ie.seq,U.uniforms)}return U.uniformsList}function ai(U,ie){const fe=Pe.get(U);fe.outputColorSpace=ie.outputColorSpace,fe.batching=ie.batching,fe.batchingColor=ie.batchingColor,fe.instancing=ie.instancing,fe.instancingColor=ie.instancingColor,fe.instancingMorph=ie.instancingMorph,fe.skinning=ie.skinning,fe.morphTargets=ie.morphTargets,fe.morphNormals=ie.morphNormals,fe.morphColors=ie.morphColors,fe.morphTargetsCount=ie.morphTargetsCount,fe.numClippingPlanes=ie.numClippingPlanes,fe.numIntersection=ie.numClipIntersection,fe.vertexAlphas=ie.vertexAlphas,fe.vertexTangents=ie.vertexTangents,fe.toneMapping=ie.toneMapping}function $s(U,ie,fe,de,J){ie.isScene!==!0&&(ie=Ze),z.resetTextureUnits();const Te=ie.fog,Ie=de.isMeshStandardMaterial?ie.environment:null,Be=G===null?k.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:jo,Ge=(de.isMeshStandardMaterial?ae:P).get(de.envMap||Ie),st=de.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,at=!!fe.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Je=!!fe.morphAttributes.position,dt=!!fe.morphAttributes.normal,Tt=!!fe.morphAttributes.color;let wt=pr;de.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(wt=k.toneMapping);const Ft=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,xt=Ft!==void 0?Ft.length:0,et=Pe.get(de),Ht=_.state.lights;if(Q===!0&&(re===!0||U!==m)){const Gt=U===m&&de.id===E;we.setState(de,U,Gt)}let yt=!1;de.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ht.state.version||et.outputColorSpace!==Be||J.isBatchedMesh&&et.batching===!1||!J.isBatchedMesh&&et.batching===!0||J.isBatchedMesh&&et.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&et.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&et.instancing===!1||!J.isInstancedMesh&&et.instancing===!0||J.isSkinnedMesh&&et.skinning===!1||!J.isSkinnedMesh&&et.skinning===!0||J.isInstancedMesh&&et.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&et.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&et.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&et.instancingMorph===!1&&J.morphTexture!==null||et.envMap!==Ge||de.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==we.numPlanes||et.numIntersection!==we.numIntersection)||et.vertexAlphas!==st||et.vertexTangents!==at||et.morphTargets!==Je||et.morphNormals!==dt||et.morphColors!==Tt||et.toneMapping!==wt||et.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,et.__version=de.version);let on=et.currentProgram;yt===!0&&(on=Qr(de,ie,J));let qn=!1,vn=!1,Sr=!1;const Pt=on.getUniforms(),_n=et.uniforms;if(be.useProgram(on.program)&&(qn=!0,vn=!0,Sr=!0),de.id!==E&&(E=de.id,vn=!0),qn||m!==U){be.buffers.depth.getReversed()?(oe.copy(U.projectionMatrix),F0(oe),k0(oe),Pt.setValue(j,"projectionMatrix",oe)):Pt.setValue(j,"projectionMatrix",U.projectionMatrix),Pt.setValue(j,"viewMatrix",U.matrixWorldInverse);const un=Pt.map.cameraPosition;un!==void 0&&un.setValue(j,Se.setFromMatrixPosition(U.matrixWorld)),Le.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",U.isOrthographicCamera===!0),m!==U&&(m=U,vn=!0,Sr=!0)}if(J.isSkinnedMesh){Pt.setOptional(j,J,"bindMatrix"),Pt.setOptional(j,J,"bindMatrixInverse");const Gt=J.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Pt.setValue(j,"boneTexture",Gt.boneTexture,z))}J.isBatchedMesh&&(Pt.setOptional(j,J,"batchingTexture"),Pt.setValue(j,"batchingTexture",J._matricesTexture,z),Pt.setOptional(j,J,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",J._indirectTexture,z),Pt.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",J._colorsTexture,z));const ln=fe.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ot.update(J,fe,on),(vn||et.receiveShadow!==J.receiveShadow)&&(et.receiveShadow=J.receiveShadow,Pt.setValue(j,"receiveShadow",J.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(_n.envMap.value=Ge,_n.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&ie.environment!==null&&(_n.envMapIntensity.value=ie.environmentIntensity),vn&&(Pt.setValue(j,"toneMappingExposure",k.toneMappingExposure),et.needsLights&&Ks(_n,Sr),Te&&de.fog===!0&&Re.refreshFogUniforms(_n,Te),Re.refreshMaterialUniforms(_n,de,q,y,_.state.transmissionRenderTarget[U.id]),Pl.upload(j,Ys(et),_n,z)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Pl.upload(j,Ys(et),_n,z),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Pt.setValue(j,"center",J.center),Pt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Pt.setValue(j,"normalMatrix",J.normalMatrix),Pt.setValue(j,"modelMatrix",J.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const Gt=de.uniformsGroups;for(let un=0,xr=Gt.length;un<xr;un++){const _t=Gt[un];te.update(_t,on),te.bind(_t,on)}}return on}function Ks(U,ie){U.ambientLightColor.needsUpdate=ie,U.lightProbe.needsUpdate=ie,U.directionalLights.needsUpdate=ie,U.directionalLightShadows.needsUpdate=ie,U.pointLights.needsUpdate=ie,U.pointLightShadows.needsUpdate=ie,U.spotLights.needsUpdate=ie,U.spotLightShadows.needsUpdate=ie,U.rectAreaLights.needsUpdate=ie,U.hemisphereLights.needsUpdate=ie}function Wl(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(U,ie,fe){Pe.get(U.texture).__webglTexture=ie,Pe.get(U.depthTexture).__webglTexture=fe;const de=Pe.get(U);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=fe===void 0,de.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,ie){const fe=Pe.get(U);fe.__webglFramebuffer=ie,fe.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(U,ie=0,fe=0){G=U,b=ie,I=fe;let de=!0,J=null,Te=!1,Ie=!1;if(U){const Ge=Pe.get(U);if(Ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(j.FRAMEBUFFER,null),de=!1;else if(Ge.__webglFramebuffer===void 0)z.setupRenderTarget(U);else if(Ge.__hasExternalTextures)z.rebindTextures(U,Pe.get(U.texture).__webglTexture,Pe.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Je=U.depthTexture;if(Ge.__boundDepthTexture!==Je){if(Je!==null&&Pe.has(Je)&&(U.width!==Je.image.width||U.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(U)}}const st=U.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ie=!0);const at=Pe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(at[ie])?J=at[ie][fe]:J=at[ie],Te=!0):U.samples>0&&z.useMultisampledRTT(U)===!1?J=Pe.get(U).__webglMultisampledFramebuffer:Array.isArray(at)?J=at[fe]:J=at,N.copy(U.viewport),$.copy(U.scissor),F=U.scissorTest}else N.copy(w).multiplyScalar(q).floor(),$.copy(B).multiplyScalar(q).floor(),F=ue;if(be.bindFramebuffer(j.FRAMEBUFFER,J)&&de&&be.drawBuffers(U,J),be.viewport(N),be.scissor($),be.setScissorTest(F),Te){const Ge=Pe.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ge.__webglTexture,fe)}else if(Ie){const Ge=Pe.get(U.texture),st=ie||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ge.__webglTexture,fe||0,st)}E=-1},this.readRenderTargetPixels=function(U,ie,fe,de,J,Te,Ie){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Pe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){be.bindFramebuffer(j.FRAMEBUFFER,Be);try{const Ge=U.texture,st=Ge.format,at=Ge.type;if(!Le.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=U.width-de&&fe>=0&&fe<=U.height-J&&j.readPixels(ie,fe,de,J,ct.convert(st),ct.convert(at),Te)}finally{const Ge=G!==null?Pe.get(G).__webglFramebuffer:null;be.bindFramebuffer(j.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(U,ie,fe,de,J,Te,Ie){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Pe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){const Ge=U.texture,st=Ge.format,at=Ge.type;if(!Le.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ie>=0&&ie<=U.width-de&&fe>=0&&fe<=U.height-J){be.bindFramebuffer(j.FRAMEBUFFER,Be);const Je=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Je),j.bufferData(j.PIXEL_PACK_BUFFER,Te.byteLength,j.STREAM_READ),j.readPixels(ie,fe,de,J,ct.convert(st),ct.convert(at),0);const dt=G!==null?Pe.get(G).__webglFramebuffer:null;be.bindFramebuffer(j.FRAMEBUFFER,dt);const Tt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await O0(j,Tt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Je),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Te),j.deleteBuffer(Je),j.deleteSync(Tt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,ie=null,fe=0){U.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ie=arguments[0]||null,U=arguments[1]);const de=Math.pow(2,-fe),J=Math.floor(U.image.width*de),Te=Math.floor(U.image.height*de),Ie=ie!==null?ie.x:0,Be=ie!==null?ie.y:0;z.setTexture2D(U,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,Ie,Be,J,Te),be.unbindTexture()};const Zs=j.createFramebuffer(),Qs=j.createFramebuffer();this.copyTextureToTexture=function(U,ie,fe=null,de=null,J=0,Te=null){U.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,U=arguments[1],ie=arguments[2],Te=arguments[3]||0,fe=null),Te===null&&(J!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=J,J=0):Te=0);let Ie,Be,Ge,st,at,Je,dt,Tt,wt;const Ft=U.isCompressedTexture?U.mipmaps[Te]:U.image;if(fe!==null)Ie=fe.max.x-fe.min.x,Be=fe.max.y-fe.min.y,Ge=fe.isBox3?fe.max.z-fe.min.z:1,st=fe.min.x,at=fe.min.y,Je=fe.isBox3?fe.min.z:0;else{const ln=Math.pow(2,-J);Ie=Math.floor(Ft.width*ln),Be=Math.floor(Ft.height*ln),U.isDataArrayTexture?Ge=Ft.depth:U.isData3DTexture?Ge=Math.floor(Ft.depth*ln):Ge=1,st=0,at=0,Je=0}de!==null?(dt=de.x,Tt=de.y,wt=de.z):(dt=0,Tt=0,wt=0);const xt=ct.convert(ie.format),et=ct.convert(ie.type);let Ht;ie.isData3DTexture?(z.setTexture3D(ie,0),Ht=j.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(z.setTexture2DArray(ie,0),Ht=j.TEXTURE_2D_ARRAY):(z.setTexture2D(ie,0),Ht=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ie.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ie.unpackAlignment);const yt=j.getParameter(j.UNPACK_ROW_LENGTH),on=j.getParameter(j.UNPACK_IMAGE_HEIGHT),qn=j.getParameter(j.UNPACK_SKIP_PIXELS),vn=j.getParameter(j.UNPACK_SKIP_ROWS),Sr=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ft.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ft.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,st),j.pixelStorei(j.UNPACK_SKIP_ROWS,at),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Je);const Pt=U.isDataArrayTexture||U.isData3DTexture,_n=ie.isDataArrayTexture||ie.isData3DTexture;if(U.isDepthTexture){const ln=Pe.get(U),Gt=Pe.get(ie),un=Pe.get(ln.__renderTarget),xr=Pe.get(Gt.__renderTarget);be.bindFramebuffer(j.READ_FRAMEBUFFER,un.__webglFramebuffer),be.bindFramebuffer(j.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let _t=0;_t<Ge;_t++)Pt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Pe.get(U).__webglTexture,J,Je+_t),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Pe.get(ie).__webglTexture,Te,wt+_t)),j.blitFramebuffer(st,at,Ie,Be,dt,Tt,Ie,Be,j.DEPTH_BUFFER_BIT,j.NEAREST);be.bindFramebuffer(j.READ_FRAMEBUFFER,null),be.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||U.isRenderTargetTexture||Pe.has(U)){const ln=Pe.get(U),Gt=Pe.get(ie);be.bindFramebuffer(j.READ_FRAMEBUFFER,Zs),be.bindFramebuffer(j.DRAW_FRAMEBUFFER,Qs);for(let un=0;un<Ge;un++)Pt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ln.__webglTexture,J,Je+un):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ln.__webglTexture,J),_n?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Gt.__webglTexture,Te,wt+un):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Gt.__webglTexture,Te),J!==0?j.blitFramebuffer(st,at,Ie,Be,dt,Tt,Ie,Be,j.COLOR_BUFFER_BIT,j.NEAREST):_n?j.copyTexSubImage3D(Ht,Te,dt,Tt,wt+un,st,at,Ie,Be):j.copyTexSubImage2D(Ht,Te,dt,Tt,st,at,Ie,Be);be.bindFramebuffer(j.READ_FRAMEBUFFER,null),be.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else _n?U.isDataTexture||U.isData3DTexture?j.texSubImage3D(Ht,Te,dt,Tt,wt,Ie,Be,Ge,xt,et,Ft.data):ie.isCompressedArrayTexture?j.compressedTexSubImage3D(Ht,Te,dt,Tt,wt,Ie,Be,Ge,xt,Ft.data):j.texSubImage3D(Ht,Te,dt,Tt,wt,Ie,Be,Ge,xt,et,Ft):U.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Te,dt,Tt,Ie,Be,xt,et,Ft.data):U.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Te,dt,Tt,Ft.width,Ft.height,xt,Ft.data):j.texSubImage2D(j.TEXTURE_2D,Te,dt,Tt,Ie,Be,xt,et,Ft);j.pixelStorei(j.UNPACK_ROW_LENGTH,yt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,on),j.pixelStorei(j.UNPACK_SKIP_PIXELS,qn),j.pixelStorei(j.UNPACK_SKIP_ROWS,vn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Sr),Te===0&&ie.generateMipmaps&&j.generateMipmap(Ht),be.unbindTexture()},this.copyTextureToTexture3D=function(U,ie,fe=null,de=null,J=0){return U.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),fe=arguments[0]||null,de=arguments[1]||null,U=arguments[2],ie=arguments[3],J=arguments[4]||0),Oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,ie,fe,de,J)},this.initRenderTarget=function(U){Pe.get(U).__webglFramebuffer===void 0&&z.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?z.setTextureCube(U,0):U.isData3DTexture?z.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?z.setTexture2DArray(U,0):z.setTexture2D(U,0),be.unbindTexture()},this.resetState=function(){b=0,I=0,G=null,be.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}var nf={},rf={},Us={},of={},Gm;function KE(){return Gm||(Gm=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};o.default=e}(of)),of}var sf,Wm;function ZE(){if(Wm)return sf;Wm=1;var o="Expected a function",e=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,p=typeof Ja=="object"&&Ja&&Ja.Object===Object&&Ja,g=typeof self=="object"&&self&&self.Object===Object&&self,S=p||g||Function("return this")(),x=Object.prototype,M=x.toString,A=Math.max,D=Math.min,R=function(){return S.Date.now()};function T(L,b,I){var G,E,m,N,$,F,H=0,ne=!1,K=!1,y=!0;if(typeof L!="function")throw new TypeError(o);b=k(b)||0,_(I)&&(ne=!!I.leading,K="maxWait"in I,m=K?A(k(I.maxWait)||0,b):m,y="trailing"in I?!!I.trailing:y);function q(oe){var ge=G,Se=E;return G=E=void 0,H=oe,N=L.apply(Se,ge),N}function O(oe){return H=oe,$=setTimeout(B,b),ne?q(oe):N}function v(oe){var ge=oe-F,Se=oe-H,Ce=b-ge;return K?D(Ce,m-Se):Ce}function w(oe){var ge=oe-F,Se=oe-H;return F===void 0||ge>=b||ge<0||K&&Se>=m}function B(){var oe=R();if(w(oe))return ue(oe);$=setTimeout(B,v(oe))}function ue(oe){return $=void 0,y&&G?q(oe):(G=E=void 0,N)}function X(){$!==void 0&&clearTimeout($),H=0,G=F=E=$=void 0}function Q(){return $===void 0?N:ue(R())}function re(){var oe=R(),ge=w(oe);if(G=arguments,E=this,F=oe,ge){if($===void 0)return O(F);if(K)return $=setTimeout(B,b),q(F)}return $===void 0&&($=setTimeout(B,b)),N}return re.cancel=X,re.flush=Q,re}function _(L){var b=typeof L;return!!L&&(b=="object"||b=="function")}function Y(L){return!!L&&typeof L=="object"}function V(L){return typeof L=="symbol"||Y(L)&&M.call(L)==n}function k(L){if(typeof L=="number")return L;if(V(L))return e;if(_(L)){var b=typeof L.valueOf=="function"?L.valueOf():L;L=_(b)?b+"":b}if(typeof L!="string")return L===0?L:+L;L=L.replace(r,"");var I=l.test(L);return I||c.test(L)?f(L.slice(2),I?2:8):a.test(L)?e:+L}return sf=T,sf}var af={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Xm;function Vl(){return Xm||(Xm=1,function(o){(function(){var e={}.hasOwnProperty;function n(){for(var l="",c=0;c<arguments.length;c++){var f=arguments[c];f&&(l=a(l,r(f)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var c="";for(var f in l)e.call(l,f)&&l[f]&&(c=a(c,f));return c}function a(l,c){return c?l?l+" "+c:l+c:l}o.exports?(n.default=n,o.exports=n):window.classNames=n})()}(af)),af.exports}var Oe={},lf={},jm;function Wg(){return jm||(jm=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n(mi());function n(a){return a&&a.__esModule?a:{default:a}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return e.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return e.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};o.default=r}(lf)),lf}var qm;function js(){if(qm)return Oe;qm=1,Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.checkSpecKeys=Oe.checkNavigable=Oe.changeSlide=Oe.canUseDOM=Oe.canGoNext=void 0,Oe.clamp=g,Oe.extractObject=void 0,Oe.filterSettings=q,Oe.validSettings=Oe.swipeStart=Oe.swipeMove=Oe.swipeEnd=Oe.slidesOnRight=Oe.slidesOnLeft=Oe.slideHandler=Oe.siblingDirection=Oe.safePreventDefault=Oe.lazyStartIndex=Oe.lazySlidesOnRight=Oe.lazySlidesOnLeft=Oe.lazyEndIndex=Oe.keyHandler=Oe.initializedState=Oe.getWidth=Oe.getTrackLeft=Oe.getTrackCSS=Oe.getTrackAnimateCSS=Oe.getTotalSlides=Oe.getSwipeDirection=Oe.getSlideCount=Oe.getRequiredLazySlides=Oe.getPreClones=Oe.getPostClones=Oe.getOnDemandLazySlides=Oe.getNavigableIndexes=Oe.getHeight=void 0;var o=n(mi()),e=n(Wg());function n(O){return O&&O.__esModule?O:{default:O}}function r(O){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},r(O)}function a(O,v){var w=Object.keys(O);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(O);v&&(B=B.filter(function(ue){return Object.getOwnPropertyDescriptor(O,ue).enumerable})),w.push.apply(w,B)}return w}function l(O){for(var v=1;v<arguments.length;v++){var w=arguments[v]!=null?arguments[v]:{};v%2?a(Object(w),!0).forEach(function(B){c(O,B,w[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(w)):a(Object(w)).forEach(function(B){Object.defineProperty(O,B,Object.getOwnPropertyDescriptor(w,B))})}return O}function c(O,v,w){return v=f(v),v in O?Object.defineProperty(O,v,{value:w,enumerable:!0,configurable:!0,writable:!0}):O[v]=w,O}function f(O){var v=p(O,"string");return r(v)=="symbol"?v:String(v)}function p(O,v){if(r(O)!="object"||!O)return O;var w=O[Symbol.toPrimitive];if(w!==void 0){var B=w.call(O,v||"default");if(r(B)!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(O)}function g(O,v,w){return Math.max(v,Math.min(O,w))}var S=Oe.safePreventDefault=function(v){var w=["onTouchStart","onTouchMove","onWheel"];w.includes(v._reactName)||v.preventDefault()},x=Oe.getOnDemandLazySlides=function(v){for(var w=[],B=M(v),ue=A(v),X=B;X<ue;X++)v.lazyLoadedList.indexOf(X)<0&&w.push(X);return w};Oe.getRequiredLazySlides=function(v){for(var w=[],B=M(v),ue=A(v),X=B;X<ue;X++)w.push(X);return w};var M=Oe.lazyStartIndex=function(v){return v.currentSlide-D(v)},A=Oe.lazyEndIndex=function(v){return v.currentSlide+R(v)},D=Oe.lazySlidesOnLeft=function(v){return v.centerMode?Math.floor(v.slidesToShow/2)+(parseInt(v.centerPadding)>0?1:0):0},R=Oe.lazySlidesOnRight=function(v){return v.centerMode?Math.floor((v.slidesToShow-1)/2)+1+(parseInt(v.centerPadding)>0?1:0):v.slidesToShow},T=Oe.getWidth=function(v){return v&&v.offsetWidth||0},_=Oe.getHeight=function(v){return v&&v.offsetHeight||0},Y=Oe.getSwipeDirection=function(v){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,B,ue,X,Q;return B=v.startX-v.curX,ue=v.startY-v.curY,X=Math.atan2(ue,B),Q=Math.round(X*180/Math.PI),Q<0&&(Q=360-Math.abs(Q)),Q<=45&&Q>=0||Q<=360&&Q>=315?"left":Q>=135&&Q<=225?"right":w===!0?Q>=35&&Q<=135?"up":"down":"vertical"},V=Oe.canGoNext=function(v){var w=!0;return v.infinite||(v.centerMode&&v.currentSlide>=v.slideCount-1||v.slideCount<=v.slidesToShow||v.currentSlide>=v.slideCount-v.slidesToShow)&&(w=!1),w};Oe.extractObject=function(v,w){var B={};return w.forEach(function(ue){return B[ue]=v[ue]}),B},Oe.initializedState=function(v){var w=o.default.Children.count(v.children),B=v.listRef,ue=Math.ceil(T(B)),X=v.trackRef&&v.trackRef.node,Q=Math.ceil(T(X)),re;if(v.vertical)re=ue;else{var oe=v.centerMode&&parseInt(v.centerPadding)*2;typeof v.centerPadding=="string"&&v.centerPadding.slice(-1)==="%"&&(oe*=ue/100),re=Math.ceil((ue-oe)/v.slidesToShow)}var ge=B&&_(B.querySelector('[data-index="0"]')),Se=ge*v.slidesToShow,Ce=v.currentSlide===void 0?v.initialSlide:v.currentSlide;v.rtl&&v.currentSlide===void 0&&(Ce=w-1-v.initialSlide);var Ze=v.lazyLoadedList||[],Ve=x(l(l({},v),{},{currentSlide:Ce,lazyLoadedList:Ze}));Ze=Ze.concat(Ve);var Ke={slideCount:w,slideWidth:re,listWidth:ue,trackWidth:Q,currentSlide:Ce,slideHeight:ge,listHeight:Se,lazyLoadedList:Ze};return v.autoplaying===null&&v.autoplay&&(Ke.autoplaying="playing"),Ke},Oe.slideHandler=function(v){var w=v.waitForAnimate,B=v.animating,ue=v.fade,X=v.infinite,Q=v.index,re=v.slideCount,oe=v.lazyLoad,ge=v.currentSlide,Se=v.centerMode,Ce=v.slidesToScroll,Ze=v.slidesToShow,Ve=v.useCSS,Ke=v.lazyLoadedList;if(w&&B)return{};var j=Q,ut,Qe,Le,be={},rt={},Pe=X?Q:g(Q,0,re-1);if(ue){if(!X&&(Q<0||Q>=re))return{};Q<0?j=Q+re:Q>=re&&(j=Q-re),oe&&Ke.indexOf(j)<0&&(Ke=Ke.concat(j)),be={animating:!0,currentSlide:j,lazyLoadedList:Ke,targetSlide:j},rt={animating:!1,targetSlide:j}}else ut=j,j<0?(ut=j+re,X?re%Ce!==0&&(ut=re-re%Ce):ut=0):!V(v)&&j>ge?j=ut=ge:Se&&j>=re?(j=X?re:re-1,ut=X?0:re-1):j>=re&&(ut=j-re,X?re%Ce!==0&&(ut=0):ut=re-Ze),!X&&j+Ze>=re&&(ut=re-Ze),Qe=m(l(l({},v),{},{slideIndex:j})),Le=m(l(l({},v),{},{slideIndex:ut})),X||(Qe===Le&&(j=ut),Qe=Le),oe&&(Ke=Ke.concat(x(l(l({},v),{},{currentSlide:j})))),Ve?(be={animating:!0,currentSlide:ut,trackStyle:E(l(l({},v),{},{left:Qe})),lazyLoadedList:Ke,targetSlide:Pe},rt={animating:!1,currentSlide:ut,trackStyle:G(l(l({},v),{},{left:Le})),swipeLeft:null,targetSlide:Pe}):be={currentSlide:ut,trackStyle:G(l(l({},v),{},{left:Le})),lazyLoadedList:Ke,targetSlide:Pe};return{state:be,nextState:rt}},Oe.changeSlide=function(v,w){var B,ue,X,Q,re,oe=v.slidesToScroll,ge=v.slidesToShow,Se=v.slideCount,Ce=v.currentSlide,Ze=v.targetSlide,Ve=v.lazyLoad,Ke=v.infinite;if(Q=Se%oe!==0,B=Q?0:(Se-Ce)%oe,w.message==="previous")X=B===0?oe:ge-B,re=Ce-X,Ve&&!Ke&&(ue=Ce-X,re=ue===-1?Se-1:ue),Ke||(re=Ze-oe);else if(w.message==="next")X=B===0?oe:B,re=Ce+X,Ve&&!Ke&&(re=(Ce+oe)%Se+B),Ke||(re=Ze+oe);else if(w.message==="dots")re=w.index*w.slidesToScroll;else if(w.message==="children"){if(re=w.index,Ke){var j=H(l(l({},v),{},{targetSlide:re}));re>w.currentSlide&&j==="left"?re=re-Se:re<w.currentSlide&&j==="right"&&(re=re+Se)}}else w.message==="index"&&(re=Number(w.index));return re},Oe.keyHandler=function(v,w,B){return v.target.tagName.match("TEXTAREA|INPUT|SELECT")||!w?"":v.keyCode===37?B?"next":"previous":v.keyCode===39?B?"previous":"next":""},Oe.swipeStart=function(v,w,B){return v.target.tagName==="IMG"&&S(v),!w||!B&&v.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:v.touches?v.touches[0].pageX:v.clientX,startY:v.touches?v.touches[0].pageY:v.clientY,curX:v.touches?v.touches[0].pageX:v.clientX,curY:v.touches?v.touches[0].pageY:v.clientY}}},Oe.swipeMove=function(v,w){var B=w.scrolling,ue=w.animating,X=w.vertical,Q=w.swipeToSlide,re=w.verticalSwiping,oe=w.rtl,ge=w.currentSlide,Se=w.edgeFriction,Ce=w.edgeDragged,Ze=w.onEdge,Ve=w.swiped,Ke=w.swiping,j=w.slideCount,ut=w.slidesToScroll,Qe=w.infinite,Le=w.touchObject,be=w.swipeEvent,rt=w.listHeight,Pe=w.listWidth;if(!B){if(ue)return S(v);X&&Q&&re&&S(v);var z,P={},ae=m(w);Le.curX=v.touches?v.touches[0].pageX:v.clientX,Le.curY=v.touches?v.touches[0].pageY:v.clientY,Le.swipeLength=Math.round(Math.sqrt(Math.pow(Le.curX-Le.startX,2)));var _e=Math.round(Math.sqrt(Math.pow(Le.curY-Le.startY,2)));if(!re&&!Ke&&_e>10)return{scrolling:!0};re&&(Le.swipeLength=_e);var ye=(oe?-1:1)*(Le.curX>Le.startX?1:-1);re&&(ye=Le.curY>Le.startY?1:-1);var me=Math.ceil(j/ut),ze=Y(w.touchObject,re),Re=Le.swipeLength;return Qe||(ge===0&&(ze==="right"||ze==="down")||ge+1>=me&&(ze==="left"||ze==="up")||!V(w)&&(ze==="left"||ze==="up"))&&(Re=Le.swipeLength*Se,Ce===!1&&Ze&&(Ze(ze),P.edgeDragged=!0)),!Ve&&be&&(be(ze),P.swiped=!0),X?z=ae+Re*(rt/Pe)*ye:oe?z=ae-Re*ye:z=ae+Re*ye,re&&(z=ae+Re*ye),P=l(l({},P),{},{touchObject:Le,swipeLeft:z,trackStyle:G(l(l({},w),{},{left:z}))}),Math.abs(Le.curX-Le.startX)<Math.abs(Le.curY-Le.startY)*.8||Le.swipeLength>10&&(P.swiping=!0,S(v)),P}},Oe.swipeEnd=function(v,w){var B=w.dragging,ue=w.swipe,X=w.touchObject,Q=w.listWidth,re=w.touchThreshold,oe=w.verticalSwiping,ge=w.listHeight,Se=w.swipeToSlide,Ce=w.scrolling,Ze=w.onSwipe,Ve=w.targetSlide,Ke=w.currentSlide,j=w.infinite;if(!B)return ue&&S(v),{};var ut=oe?ge/re:Q/re,Qe=Y(X,oe),Le={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Ce||!X.swipeLength)return Le;if(X.swipeLength>ut){S(v),Ze&&Ze(Qe);var be,rt,Pe=j?Ke:Ve;switch(Qe){case"left":case"up":rt=Pe+b(w),be=Se?L(w,rt):rt,Le.currentDirection=0;break;case"right":case"down":rt=Pe-b(w),be=Se?L(w,rt):rt,Le.currentDirection=1;break;default:be=Pe}Le.triggerSlideHandler=be}else{var z=m(w);Le.trackStyle=E(l(l({},w),{},{left:z}))}return Le};var k=Oe.getNavigableIndexes=function(v){for(var w=v.infinite?v.slideCount*2:v.slideCount,B=v.infinite?v.slidesToShow*-1:0,ue=v.infinite?v.slidesToShow*-1:0,X=[];B<w;)X.push(B),B=ue+v.slidesToScroll,ue+=Math.min(v.slidesToScroll,v.slidesToShow);return X},L=Oe.checkNavigable=function(v,w){var B=k(v),ue=0;if(w>B[B.length-1])w=B[B.length-1];else for(var X in B){if(w<B[X]){w=ue;break}ue=B[X]}return w},b=Oe.getSlideCount=function(v){var w=v.centerMode?v.slideWidth*Math.floor(v.slidesToShow/2):0;if(v.swipeToSlide){var B,ue=v.listRef,X=ue.querySelectorAll&&ue.querySelectorAll(".slick-slide")||[];if(Array.from(X).every(function(oe){if(v.vertical){if(oe.offsetTop+_(oe)/2>v.swipeLeft*-1)return B=oe,!1}else if(oe.offsetLeft-w+T(oe)/2>v.swipeLeft*-1)return B=oe,!1;return!0}),!B)return 0;var Q=v.rtl===!0?v.slideCount-v.currentSlide:v.currentSlide,re=Math.abs(B.dataset.index-Q)||1;return re}else return v.slidesToScroll},I=Oe.checkSpecKeys=function(v,w){return w.reduce(function(B,ue){return B&&v.hasOwnProperty(ue)},!0)?null:console.error("Keys Missing:",v)},G=Oe.getTrackCSS=function(v){I(v,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var w,B,ue=v.slideCount+2*v.slidesToShow;v.vertical?B=ue*v.slideHeight:w=F(v)*v.slideWidth;var X={opacity:1,transition:"",WebkitTransition:""};if(v.useTransform){var Q=v.vertical?"translate3d(0px, "+v.left+"px, 0px)":"translate3d("+v.left+"px, 0px, 0px)",re=v.vertical?"translate3d(0px, "+v.left+"px, 0px)":"translate3d("+v.left+"px, 0px, 0px)",oe=v.vertical?"translateY("+v.left+"px)":"translateX("+v.left+"px)";X=l(l({},X),{},{WebkitTransform:Q,transform:re,msTransform:oe})}else v.vertical?X.top=v.left:X.left=v.left;return v.fade&&(X={opacity:1}),w&&(X.width=w),B&&(X.height=B),window&&!window.addEventListener&&window.attachEvent&&(v.vertical?X.marginTop=v.left+"px":X.marginLeft=v.left+"px"),X},E=Oe.getTrackAnimateCSS=function(v){I(v,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var w=G(v);return v.useTransform?(w.WebkitTransition="-webkit-transform "+v.speed+"ms "+v.cssEase,w.transition="transform "+v.speed+"ms "+v.cssEase):v.vertical?w.transition="top "+v.speed+"ms "+v.cssEase:w.transition="left "+v.speed+"ms "+v.cssEase,w},m=Oe.getTrackLeft=function(v){if(v.unslick)return 0;I(v,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var w=v.slideIndex,B=v.trackRef,ue=v.infinite,X=v.centerMode,Q=v.slideCount,re=v.slidesToShow,oe=v.slidesToScroll,ge=v.slideWidth,Se=v.listWidth,Ce=v.variableWidth,Ze=v.slideHeight,Ve=v.fade,Ke=v.vertical,j=0,ut,Qe,Le=0;if(Ve||v.slideCount===1)return 0;var be=0;if(ue?(be=-N(v),Q%oe!==0&&w+oe>Q&&(be=-(w>Q?re-(w-Q):Q%oe)),X&&(be+=parseInt(re/2))):(Q%oe!==0&&w+oe>Q&&(be=re-Q%oe),X&&(be=parseInt(re/2))),j=be*ge,Le=be*Ze,Ke?ut=w*Ze*-1+Le:ut=w*ge*-1+j,Ce===!0){var rt,Pe=B&&B.node;if(rt=w+N(v),Qe=Pe&&Pe.childNodes[rt],ut=Qe?Qe.offsetLeft*-1:0,X===!0){rt=ue?w+N(v):w,Qe=Pe&&Pe.children[rt],ut=0;for(var z=0;z<rt;z++)ut-=Pe&&Pe.children[z]&&Pe.children[z].offsetWidth;ut-=parseInt(v.centerPadding),ut+=Qe&&(Se-Qe.offsetWidth)/2}}return ut},N=Oe.getPreClones=function(v){return v.unslick||!v.infinite?0:v.variableWidth?v.slideCount:v.slidesToShow+(v.centerMode?1:0)},$=Oe.getPostClones=function(v){return v.unslick||!v.infinite?0:v.slideCount},F=Oe.getTotalSlides=function(v){return v.slideCount===1?1:N(v)+v.slideCount+$(v)},H=Oe.siblingDirection=function(v){return v.targetSlide>v.currentSlide?v.targetSlide>v.currentSlide+ne(v)?"left":"right":v.targetSlide<v.currentSlide-K(v)?"right":"left"},ne=Oe.slidesOnRight=function(v){var w=v.slidesToShow,B=v.centerMode,ue=v.rtl,X=v.centerPadding;if(B){var Q=(w-1)/2+1;return parseInt(X)>0&&(Q+=1),ue&&w%2===0&&(Q+=1),Q}return ue?0:w-1},K=Oe.slidesOnLeft=function(v){var w=v.slidesToShow,B=v.centerMode,ue=v.rtl,X=v.centerPadding;if(B){var Q=(w-1)/2+1;return parseInt(X)>0&&(Q+=1),!ue&&w%2===0&&(Q+=1),Q}return ue?w-1:0};Oe.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var y=Oe.validSettings=Object.keys(e.default);function q(O){return y.reduce(function(v,w){return O.hasOwnProperty(w)&&(v[w]=O[w]),v},{})}return Oe}var Ns={},Ym;function QE(){if(Ym)return Ns;Ym=1,Object.defineProperty(Ns,"__esModule",{value:!0}),Ns.Track=void 0;var o=r(mi()),e=r(Vl()),n=js();function r(E){return E&&E.__esModule?E:{default:E}}function a(E){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},a(E)}function l(){return l=Object.assign?Object.assign.bind():function(E){for(var m=1;m<arguments.length;m++){var N=arguments[m];for(var $ in N)Object.prototype.hasOwnProperty.call(N,$)&&(E[$]=N[$])}return E},l.apply(this,arguments)}function c(E,m){if(!(E instanceof m))throw new TypeError("Cannot call a class as a function")}function f(E,m){for(var N=0;N<m.length;N++){var $=m[N];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(E,V($.key),$)}}function p(E,m,N){return m&&f(E.prototype,m),Object.defineProperty(E,"prototype",{writable:!1}),E}function g(E,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(m&&m.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),m&&S(E,m)}function S(E,m){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function($,F){return $.__proto__=F,$},S(E,m)}function x(E){var m=D();return function(){var $=R(E),F;if(m){var H=R(this).constructor;F=Reflect.construct($,arguments,H)}else F=$.apply(this,arguments);return M(this,F)}}function M(E,m){if(m&&(a(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(E)}function A(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function D(){try{var E=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(D=function(){return!!E})()}function R(E){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},R(E)}function T(E,m){var N=Object.keys(E);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(E);m&&($=$.filter(function(F){return Object.getOwnPropertyDescriptor(E,F).enumerable})),N.push.apply(N,$)}return N}function _(E){for(var m=1;m<arguments.length;m++){var N=arguments[m]!=null?arguments[m]:{};m%2?T(Object(N),!0).forEach(function($){Y(E,$,N[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(N)):T(Object(N)).forEach(function($){Object.defineProperty(E,$,Object.getOwnPropertyDescriptor(N,$))})}return E}function Y(E,m,N){return m=V(m),m in E?Object.defineProperty(E,m,{value:N,enumerable:!0,configurable:!0,writable:!0}):E[m]=N,E}function V(E){var m=k(E,"string");return a(m)=="symbol"?m:String(m)}function k(E,m){if(a(E)!="object"||!E)return E;var N=E[Symbol.toPrimitive];if(N!==void 0){var $=N.call(E,m||"default");if(a($)!="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(E)}var L=function(m){var N,$,F,H,ne;m.rtl?ne=m.slideCount-1-m.index:ne=m.index,F=ne<0||ne>=m.slideCount,m.centerMode?(H=Math.floor(m.slidesToShow/2),$=(ne-m.currentSlide)%m.slideCount===0,ne>m.currentSlide-H-1&&ne<=m.currentSlide+H&&(N=!0)):N=m.currentSlide<=ne&&ne<m.currentSlide+m.slidesToShow;var K;m.targetSlide<0?K=m.targetSlide+m.slideCount:m.targetSlide>=m.slideCount?K=m.targetSlide-m.slideCount:K=m.targetSlide;var y=ne===K;return{"slick-slide":!0,"slick-active":N,"slick-center":$,"slick-cloned":F,"slick-current":y}},b=function(m){var N={};return(m.variableWidth===void 0||m.variableWidth===!1)&&(N.width=m.slideWidth),m.fade&&(N.position="relative",m.vertical?N.top=-m.index*parseInt(m.slideHeight):N.left=-m.index*parseInt(m.slideWidth),N.opacity=m.currentSlide===m.index?1:0,N.zIndex=m.currentSlide===m.index?999:998,m.useCSS&&(N.transition="opacity "+m.speed+"ms "+m.cssEase+", visibility "+m.speed+"ms "+m.cssEase)),N},I=function(m,N){return m.key||N},G=function(m){var N,$=[],F=[],H=[],ne=o.default.Children.count(m.children),K=(0,n.lazyStartIndex)(m),y=(0,n.lazyEndIndex)(m);return o.default.Children.forEach(m.children,function(q,O){var v,w={message:"children",index:O,slidesToScroll:m.slidesToScroll,currentSlide:m.currentSlide};!m.lazyLoad||m.lazyLoad&&m.lazyLoadedList.indexOf(O)>=0?v=q:v=o.default.createElement("div",null);var B=b(_(_({},m),{},{index:O})),ue=v.props.className||"",X=L(_(_({},m),{},{index:O}));if($.push(o.default.cloneElement(v,{key:"original"+I(v,O),"data-index":O,className:(0,e.default)(X,ue),tabIndex:"-1","aria-hidden":!X["slick-active"],style:_(_({outline:"none"},v.props.style||{}),B),onClick:function(oe){v.props&&v.props.onClick&&v.props.onClick(oe),m.focusOnSelect&&m.focusOnSelect(w)}})),m.infinite&&m.fade===!1){var Q=ne-O;Q<=(0,n.getPreClones)(m)&&(N=-Q,N>=K&&(v=q),X=L(_(_({},m),{},{index:N})),F.push(o.default.cloneElement(v,{key:"precloned"+I(v,N),"data-index":N,tabIndex:"-1",className:(0,e.default)(X,ue),"aria-hidden":!X["slick-active"],style:_(_({},v.props.style||{}),B),onClick:function(oe){v.props&&v.props.onClick&&v.props.onClick(oe),m.focusOnSelect&&m.focusOnSelect(w)}}))),N=ne+O,N<y&&(v=q),X=L(_(_({},m),{},{index:N})),H.push(o.default.cloneElement(v,{key:"postcloned"+I(v,N),"data-index":N,tabIndex:"-1",className:(0,e.default)(X,ue),"aria-hidden":!X["slick-active"],style:_(_({},v.props.style||{}),B),onClick:function(oe){v.props&&v.props.onClick&&v.props.onClick(oe),m.focusOnSelect&&m.focusOnSelect(w)}}))}}),m.rtl?F.concat($,H).reverse():F.concat($,H)};return Ns.Track=function(E){g(N,E);var m=x(N);function N(){var $;c(this,N);for(var F=arguments.length,H=new Array(F),ne=0;ne<F;ne++)H[ne]=arguments[ne];return $=m.call.apply(m,[this].concat(H)),Y(A($),"node",null),Y(A($),"handleRef",function(K){$.node=K}),$}return p(N,[{key:"render",value:function(){var F=G(this.props),H=this.props,ne=H.onMouseEnter,K=H.onMouseOver,y=H.onMouseLeave,q={onMouseEnter:ne,onMouseOver:K,onMouseLeave:y};return o.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},q),F)}}]),N}(o.default.PureComponent),Ns}var Os={},$m;function JE(){if($m)return Os;$m=1;function o(L){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},o(L)}Object.defineProperty(Os,"__esModule",{value:!0}),Os.Dots=void 0;var e=a(mi()),n=a(Vl()),r=js();function a(L){return L&&L.__esModule?L:{default:L}}function l(L,b){var I=Object.keys(L);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(L);b&&(G=G.filter(function(E){return Object.getOwnPropertyDescriptor(L,E).enumerable})),I.push.apply(I,G)}return I}function c(L){for(var b=1;b<arguments.length;b++){var I=arguments[b]!=null?arguments[b]:{};b%2?l(Object(I),!0).forEach(function(G){f(L,G,I[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(I)):l(Object(I)).forEach(function(G){Object.defineProperty(L,G,Object.getOwnPropertyDescriptor(I,G))})}return L}function f(L,b,I){return b=x(b),b in L?Object.defineProperty(L,b,{value:I,enumerable:!0,configurable:!0,writable:!0}):L[b]=I,L}function p(L,b){if(!(L instanceof b))throw new TypeError("Cannot call a class as a function")}function g(L,b){for(var I=0;I<b.length;I++){var G=b[I];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(L,x(G.key),G)}}function S(L,b,I){return b&&g(L.prototype,b),Object.defineProperty(L,"prototype",{writable:!1}),L}function x(L){var b=M(L,"string");return o(b)=="symbol"?b:String(b)}function M(L,b){if(o(L)!="object"||!L)return L;var I=L[Symbol.toPrimitive];if(I!==void 0){var G=I.call(L,b||"default");if(o(G)!="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return(b==="string"?String:Number)(L)}function A(L,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(b&&b.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),Object.defineProperty(L,"prototype",{writable:!1}),b&&D(L,b)}function D(L,b){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(G,E){return G.__proto__=E,G},D(L,b)}function R(L){var b=Y();return function(){var G=V(L),E;if(b){var m=V(this).constructor;E=Reflect.construct(G,arguments,m)}else E=G.apply(this,arguments);return T(this,E)}}function T(L,b){if(b&&(o(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _(L)}function _(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function Y(){try{var L=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Y=function(){return!!L})()}function V(L){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(I){return I.__proto__||Object.getPrototypeOf(I)},V(L)}var k=function(b){var I;return b.infinite?I=Math.ceil(b.slideCount/b.slidesToScroll):I=Math.ceil((b.slideCount-b.slidesToShow)/b.slidesToScroll)+1,I};return Os.Dots=function(L){A(I,L);var b=R(I);function I(){return p(this,I),b.apply(this,arguments)}return S(I,[{key:"clickHandler",value:function(E,m){m.preventDefault(),this.props.clickHandler(E)}},{key:"render",value:function(){for(var E=this.props,m=E.onMouseEnter,N=E.onMouseOver,$=E.onMouseLeave,F=E.infinite,H=E.slidesToScroll,ne=E.slidesToShow,K=E.slideCount,y=E.currentSlide,q=k({slideCount:K,slidesToScroll:H,slidesToShow:ne,infinite:F}),O={onMouseEnter:m,onMouseOver:N,onMouseLeave:$},v=[],w=0;w<q;w++){var B=(w+1)*H-1,ue=F?B:(0,r.clamp)(B,0,K-1),X=ue-(H-1),Q=F?X:(0,r.clamp)(X,0,K-1),re=(0,n.default)({"slick-active":F?y>=Q&&y<=ue:y===Q}),oe={message:"dots",index:w,slidesToScroll:H,currentSlide:y},ge=this.clickHandler.bind(this,oe);v=v.concat(e.default.createElement("li",{key:w,className:re},e.default.cloneElement(this.props.customPaging(w),{onClick:ge})))}return e.default.cloneElement(this.props.appendDots(v),c({className:this.props.dotsClass},O))}}]),I}(e.default.PureComponent),Os}var Br={},Km;function e1(){if(Km)return Br;Km=1;function o(L){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},o(L)}Object.defineProperty(Br,"__esModule",{value:!0}),Br.PrevArrow=Br.NextArrow=void 0;var e=a(mi()),n=a(Vl()),r=js();function a(L){return L&&L.__esModule?L:{default:L}}function l(){return l=Object.assign?Object.assign.bind():function(L){for(var b=1;b<arguments.length;b++){var I=arguments[b];for(var G in I)Object.prototype.hasOwnProperty.call(I,G)&&(L[G]=I[G])}return L},l.apply(this,arguments)}function c(L,b){var I=Object.keys(L);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(L);b&&(G=G.filter(function(E){return Object.getOwnPropertyDescriptor(L,E).enumerable})),I.push.apply(I,G)}return I}function f(L){for(var b=1;b<arguments.length;b++){var I=arguments[b]!=null?arguments[b]:{};b%2?c(Object(I),!0).forEach(function(G){p(L,G,I[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(I)):c(Object(I)).forEach(function(G){Object.defineProperty(L,G,Object.getOwnPropertyDescriptor(I,G))})}return L}function p(L,b,I){return b=M(b),b in L?Object.defineProperty(L,b,{value:I,enumerable:!0,configurable:!0,writable:!0}):L[b]=I,L}function g(L,b){if(!(L instanceof b))throw new TypeError("Cannot call a class as a function")}function S(L,b){for(var I=0;I<b.length;I++){var G=b[I];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(L,M(G.key),G)}}function x(L,b,I){return b&&S(L.prototype,b),Object.defineProperty(L,"prototype",{writable:!1}),L}function M(L){var b=A(L,"string");return o(b)=="symbol"?b:String(b)}function A(L,b){if(o(L)!="object"||!L)return L;var I=L[Symbol.toPrimitive];if(I!==void 0){var G=I.call(L,b||"default");if(o(G)!="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return(b==="string"?String:Number)(L)}function D(L,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(b&&b.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),Object.defineProperty(L,"prototype",{writable:!1}),b&&R(L,b)}function R(L,b){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(G,E){return G.__proto__=E,G},R(L,b)}function T(L){var b=V();return function(){var G=k(L),E;if(b){var m=k(this).constructor;E=Reflect.construct(G,arguments,m)}else E=G.apply(this,arguments);return _(this,E)}}function _(L,b){if(b&&(o(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(L)}function Y(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function V(){try{var L=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(V=function(){return!!L})()}function k(L){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(I){return I.__proto__||Object.getPrototypeOf(I)},k(L)}return Br.PrevArrow=function(L){D(I,L);var b=T(I);function I(){return g(this,I),b.apply(this,arguments)}return x(I,[{key:"clickHandler",value:function(E,m){m&&m.preventDefault(),this.props.clickHandler(E,m)}},{key:"render",value:function(){var E={"slick-arrow":!0,"slick-prev":!0},m=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(E["slick-disabled"]=!0,m=null);var N={key:"0","data-role":"none",className:(0,n.default)(E),style:{display:"block"},onClick:m},$={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},F;return this.props.prevArrow?F=e.default.cloneElement(this.props.prevArrow,f(f({},N),$)):F=e.default.createElement("button",l({key:"0",type:"button"},N)," ","Previous"),F}}]),I}(e.default.PureComponent),Br.NextArrow=function(L){D(I,L);var b=T(I);function I(){return g(this,I),b.apply(this,arguments)}return x(I,[{key:"clickHandler",value:function(E,m){m&&m.preventDefault(),this.props.clickHandler(E,m)}},{key:"render",value:function(){var E={"slick-arrow":!0,"slick-next":!0},m=this.clickHandler.bind(this,{message:"next"});(0,r.canGoNext)(this.props)||(E["slick-disabled"]=!0,m=null);var N={key:"1","data-role":"none",className:(0,n.default)(E),style:{display:"block"},onClick:m},$={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},F;return this.props.nextArrow?F=e.default.cloneElement(this.props.nextArrow,f(f({},N),$)):F=e.default.createElement("button",l({key:"1",type:"button"},N)," ","Next"),F}}]),I}(e.default.PureComponent),Br}var Xg=function(){if(typeof Map<"u")return Map;function o(e,n){var r=-1;return e.some(function(a,l){return a[0]===n?(r=l,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=o(this.__entries__,n),a=this.__entries__[r];return a&&a[1]},e.prototype.set=function(n,r){var a=o(this.__entries__,n);~a?this.__entries__[a][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,a=o(r,n);~a&&r.splice(a,1)},e.prototype.has=function(n){return!!~o(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var a=0,l=this.__entries__;a<l.length;a++){var c=l[a];n.call(r,c[1],c[0])}},e}()}(),rd=typeof window<"u"&&typeof document<"u"&&window.document===document,Ol=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),t1=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ol):function(o){return setTimeout(function(){return o(Date.now())},1e3/60)}}(),n1=2;function i1(o,e){var n=!1,r=!1,a=0;function l(){n&&(n=!1,o()),r&&f()}function c(){t1(l)}function f(){var p=Date.now();if(n){if(p-a<n1)return;r=!0}else n=!0,r=!1,setTimeout(c,e);a=p}return f}var r1=20,o1=["top","right","bottom","left","width","height","size","weight"],s1=typeof MutationObserver<"u",a1=function(){function o(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=i1(this.refresh.bind(this),r1)}return o.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},o.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},o.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},o.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},o.prototype.connect_=function(){!rd||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s1?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},o.prototype.disconnect_=function(){!rd||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},o.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,a=o1.some(function(l){return!!~r.indexOf(l)});a&&this.refresh()},o.getInstance=function(){return this.instance_||(this.instance_=new o),this.instance_},o.instance_=null,o}(),jg=function(o,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var a=r[n];Object.defineProperty(o,a,{value:e[a],enumerable:!1,writable:!1,configurable:!0})}return o},Yo=function(o){var e=o&&o.ownerDocument&&o.ownerDocument.defaultView;return e||Ol},qg=Gl(0,0,0,0);function Fl(o){return parseFloat(o)||0}function Zm(o){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,a){var l=o["border-"+a+"-width"];return r+Fl(l)},0)}function l1(o){for(var e=["top","right","bottom","left"],n={},r=0,a=e;r<a.length;r++){var l=a[r],c=o["padding-"+l];n[l]=Fl(c)}return n}function u1(o){var e=o.getBBox();return Gl(0,0,e.width,e.height)}function c1(o){var e=o.clientWidth,n=o.clientHeight;if(!e&&!n)return qg;var r=Yo(o).getComputedStyle(o),a=l1(r),l=a.left+a.right,c=a.top+a.bottom,f=Fl(r.width),p=Fl(r.height);if(r.boxSizing==="border-box"&&(Math.round(f+l)!==e&&(f-=Zm(r,"left","right")+l),Math.round(p+c)!==n&&(p-=Zm(r,"top","bottom")+c)),!d1(o)){var g=Math.round(f+l)-e,S=Math.round(p+c)-n;Math.abs(g)!==1&&(f-=g),Math.abs(S)!==1&&(p-=S)}return Gl(a.left,a.top,f,p)}var f1=function(){return typeof SVGGraphicsElement<"u"?function(o){return o instanceof Yo(o).SVGGraphicsElement}:function(o){return o instanceof Yo(o).SVGElement&&typeof o.getBBox=="function"}}();function d1(o){return o===Yo(o).document.documentElement}function h1(o){return rd?f1(o)?u1(o):c1(o):qg}function p1(o){var e=o.x,n=o.y,r=o.width,a=o.height,l=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,c=Object.create(l.prototype);return jg(c,{x:e,y:n,width:r,height:a,top:n,right:e+r,bottom:a+n,left:e}),c}function Gl(o,e,n,r){return{x:o,y:e,width:n,height:r}}var m1=function(){function o(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Gl(0,0,0,0),this.target=e}return o.prototype.isActive=function(){var e=h1(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},o.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},o}(),g1=function(){function o(e,n){var r=p1(n);jg(this,{target:e,contentRect:r})}return o}(),v1=function(){function o(e,n,r){if(this.activeObservations_=[],this.observations_=new Xg,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return o.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Yo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new m1(e)),this.controller_.addObserver(this),this.controller_.refresh())}},o.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Yo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},o.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},o.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},o.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new g1(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},o.prototype.clearActive=function(){this.activeObservations_.splice(0)},o.prototype.hasActive=function(){return this.activeObservations_.length>0},o}(),Yg=typeof WeakMap<"u"?new WeakMap:new Xg,$g=function(){function o(e){if(!(this instanceof o))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a1.getInstance(),r=new v1(e,n,this);Yg.set(this,r)}return o}();["observe","unobserve","disconnect"].forEach(function(o){$g.prototype[o]=function(){var e;return(e=Yg.get(this))[o].apply(e,arguments)}});var _1=function(){return typeof Ol.ResizeObserver<"u"?Ol.ResizeObserver:$g}();const y1=Object.freeze(Object.defineProperty({__proto__:null,default:_1},Symbol.toStringTag,{value:"Module"})),S1=b_(y1);var Qm;function x1(){if(Qm)return Us;Qm=1,Object.defineProperty(Us,"__esModule",{value:!0}),Us.InnerSlider=void 0;var o=g(mi()),e=g(KE()),n=g(ZE()),r=g(Vl()),a=js(),l=QE(),c=JE(),f=e1(),p=g(S1);function g(F){return F&&F.__esModule?F:{default:F}}function S(F){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},S(F)}function x(){return x=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var ne=arguments[H];for(var K in ne)Object.prototype.hasOwnProperty.call(ne,K)&&(F[K]=ne[K])}return F},x.apply(this,arguments)}function M(F,H){if(F==null)return{};var ne=A(F,H),K,y;if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(F);for(y=0;y<q.length;y++)K=q[y],!(H.indexOf(K)>=0)&&Object.prototype.propertyIsEnumerable.call(F,K)&&(ne[K]=F[K])}return ne}function A(F,H){if(F==null)return{};var ne={},K=Object.keys(F),y,q;for(q=0;q<K.length;q++)y=K[q],!(H.indexOf(y)>=0)&&(ne[y]=F[y]);return ne}function D(F,H){var ne=Object.keys(F);if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(F);H&&(K=K.filter(function(y){return Object.getOwnPropertyDescriptor(F,y).enumerable})),ne.push.apply(ne,K)}return ne}function R(F){for(var H=1;H<arguments.length;H++){var ne=arguments[H]!=null?arguments[H]:{};H%2?D(Object(ne),!0).forEach(function(K){m(F,K,ne[K])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(ne)):D(Object(ne)).forEach(function(K){Object.defineProperty(F,K,Object.getOwnPropertyDescriptor(ne,K))})}return F}function T(F,H){if(!(F instanceof H))throw new TypeError("Cannot call a class as a function")}function _(F,H){for(var ne=0;ne<H.length;ne++){var K=H[ne];K.enumerable=K.enumerable||!1,K.configurable=!0,"value"in K&&(K.writable=!0),Object.defineProperty(F,N(K.key),K)}}function Y(F,H,ne){return H&&_(F.prototype,H),Object.defineProperty(F,"prototype",{writable:!1}),F}function V(F,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(H&&H.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),H&&k(F,H)}function k(F,H){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(K,y){return K.__proto__=y,K},k(F,H)}function L(F){var H=G();return function(){var K=E(F),y;if(H){var q=E(this).constructor;y=Reflect.construct(K,arguments,q)}else y=K.apply(this,arguments);return b(this,y)}}function b(F,H){if(H&&(S(H)==="object"||typeof H=="function"))return H;if(H!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(F)}function I(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function G(){try{var F=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G=function(){return!!F})()}function E(F){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(ne){return ne.__proto__||Object.getPrototypeOf(ne)},E(F)}function m(F,H,ne){return H=N(H),H in F?Object.defineProperty(F,H,{value:ne,enumerable:!0,configurable:!0,writable:!0}):F[H]=ne,F}function N(F){var H=$(F,"string");return S(H)=="symbol"?H:String(H)}function $(F,H){if(S(F)!="object"||!F)return F;var ne=F[Symbol.toPrimitive];if(ne!==void 0){var K=ne.call(F,H||"default");if(S(K)!="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return(H==="string"?String:Number)(F)}return Us.InnerSlider=function(F){V(ne,F);var H=L(ne);function ne(K){var y;T(this,ne),y=H.call(this,K),m(I(y),"listRefHandler",function(O){return y.list=O}),m(I(y),"trackRefHandler",function(O){return y.track=O}),m(I(y),"adaptHeight",function(){if(y.props.adaptiveHeight&&y.list){var O=y.list.querySelector('[data-index="'.concat(y.state.currentSlide,'"]'));y.list.style.height=(0,a.getHeight)(O)+"px"}}),m(I(y),"componentDidMount",function(){if(y.props.onInit&&y.props.onInit(),y.props.lazyLoad){var O=(0,a.getOnDemandLazySlides)(R(R({},y.props),y.state));O.length>0&&(y.setState(function(w){return{lazyLoadedList:w.lazyLoadedList.concat(O)}}),y.props.onLazyLoad&&y.props.onLazyLoad(O))}var v=R({listRef:y.list,trackRef:y.track},y.props);y.updateState(v,!0,function(){y.adaptHeight(),y.props.autoplay&&y.autoPlay("update")}),y.props.lazyLoad==="progressive"&&(y.lazyLoadTimer=setInterval(y.progressiveLazyLoad,1e3)),y.ro=new p.default(function(){y.state.animating?(y.onWindowResized(!1),y.callbackTimers.push(setTimeout(function(){return y.onWindowResized()},y.props.speed))):y.onWindowResized()}),y.ro.observe(y.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(w){w.onfocus=y.props.pauseOnFocus?y.onSlideFocus:null,w.onblur=y.props.pauseOnFocus?y.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",y.onWindowResized):window.attachEvent("onresize",y.onWindowResized)}),m(I(y),"componentWillUnmount",function(){y.animationEndCallback&&clearTimeout(y.animationEndCallback),y.lazyLoadTimer&&clearInterval(y.lazyLoadTimer),y.callbackTimers.length&&(y.callbackTimers.forEach(function(O){return clearTimeout(O)}),y.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",y.onWindowResized):window.detachEvent("onresize",y.onWindowResized),y.autoplayTimer&&clearInterval(y.autoplayTimer),y.ro.disconnect()}),m(I(y),"componentDidUpdate",function(O){if(y.checkImagesLoad(),y.props.onReInit&&y.props.onReInit(),y.props.lazyLoad){var v=(0,a.getOnDemandLazySlides)(R(R({},y.props),y.state));v.length>0&&(y.setState(function(ue){return{lazyLoadedList:ue.lazyLoadedList.concat(v)}}),y.props.onLazyLoad&&y.props.onLazyLoad(v))}y.adaptHeight();var w=R(R({listRef:y.list,trackRef:y.track},y.props),y.state),B=y.didPropsChange(O);B&&y.updateState(w,B,function(){y.state.currentSlide>=o.default.Children.count(y.props.children)&&y.changeSlide({message:"index",index:o.default.Children.count(y.props.children)-y.props.slidesToShow,currentSlide:y.state.currentSlide}),y.props.autoplay?y.autoPlay("update"):y.pause("paused")})}),m(I(y),"onWindowResized",function(O){y.debouncedResize&&y.debouncedResize.cancel(),y.debouncedResize=(0,n.default)(function(){return y.resizeWindow(O)},50),y.debouncedResize()}),m(I(y),"resizeWindow",function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,v=!!(y.track&&y.track.node);if(v){var w=R(R({listRef:y.list,trackRef:y.track},y.props),y.state);y.updateState(w,O,function(){y.props.autoplay?y.autoPlay("update"):y.pause("paused")}),y.setState({animating:!1}),clearTimeout(y.animationEndCallback),delete y.animationEndCallback}}),m(I(y),"updateState",function(O,v,w){var B=(0,a.initializedState)(O);O=R(R(R({},O),B),{},{slideIndex:B.currentSlide});var ue=(0,a.getTrackLeft)(O);O=R(R({},O),{},{left:ue});var X=(0,a.getTrackCSS)(O);(v||o.default.Children.count(y.props.children)!==o.default.Children.count(O.children))&&(B.trackStyle=X),y.setState(B,w)}),m(I(y),"ssrInit",function(){if(y.props.variableWidth){var O=0,v=0,w=[],B=(0,a.getPreClones)(R(R(R({},y.props),y.state),{},{slideCount:y.props.children.length})),ue=(0,a.getPostClones)(R(R(R({},y.props),y.state),{},{slideCount:y.props.children.length}));y.props.children.forEach(function(Qe){w.push(Qe.props.style.width),O+=Qe.props.style.width});for(var X=0;X<B;X++)v+=w[w.length-1-X],O+=w[w.length-1-X];for(var Q=0;Q<ue;Q++)O+=w[Q];for(var re=0;re<y.state.currentSlide;re++)v+=w[re];var oe={width:O+"px",left:-v+"px"};if(y.props.centerMode){var ge="".concat(w[y.state.currentSlide],"px");oe.left="calc(".concat(oe.left," + (100% - ").concat(ge,") / 2 ) ")}return{trackStyle:oe}}var Se=o.default.Children.count(y.props.children),Ce=R(R(R({},y.props),y.state),{},{slideCount:Se}),Ze=(0,a.getPreClones)(Ce)+(0,a.getPostClones)(Ce)+Se,Ve=100/y.props.slidesToShow*Ze,Ke=100/Ze,j=-Ke*((0,a.getPreClones)(Ce)+y.state.currentSlide)*Ve/100;y.props.centerMode&&(j+=(100-Ke*Ve/100)/2);var ut={width:Ve+"%",left:j+"%"};return{slideWidth:Ke+"%",trackStyle:ut}}),m(I(y),"checkImagesLoad",function(){var O=y.list&&y.list.querySelectorAll&&y.list.querySelectorAll(".slick-slide img")||[],v=O.length,w=0;Array.prototype.forEach.call(O,function(B){var ue=function(){return++w&&w>=v&&y.onWindowResized()};if(!B.onclick)B.onclick=function(){return B.parentNode.focus()};else{var X=B.onclick;B.onclick=function(Q){X(Q),B.parentNode.focus()}}B.onload||(y.props.lazyLoad?B.onload=function(){y.adaptHeight(),y.callbackTimers.push(setTimeout(y.onWindowResized,y.props.speed))}:(B.onload=ue,B.onerror=function(){ue(),y.props.onLazyLoadError&&y.props.onLazyLoadError()}))})}),m(I(y),"progressiveLazyLoad",function(){for(var O=[],v=R(R({},y.props),y.state),w=y.state.currentSlide;w<y.state.slideCount+(0,a.getPostClones)(v);w++)if(y.state.lazyLoadedList.indexOf(w)<0){O.push(w);break}for(var B=y.state.currentSlide-1;B>=-(0,a.getPreClones)(v);B--)if(y.state.lazyLoadedList.indexOf(B)<0){O.push(B);break}O.length>0?(y.setState(function(ue){return{lazyLoadedList:ue.lazyLoadedList.concat(O)}}),y.props.onLazyLoad&&y.props.onLazyLoad(O)):y.lazyLoadTimer&&(clearInterval(y.lazyLoadTimer),delete y.lazyLoadTimer)}),m(I(y),"slideHandler",function(O){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w=y.props,B=w.asNavFor,ue=w.beforeChange,X=w.onLazyLoad,Q=w.speed,re=w.afterChange,oe=y.state.currentSlide,ge=(0,a.slideHandler)(R(R(R({index:O},y.props),y.state),{},{trackRef:y.track,useCSS:y.props.useCSS&&!v})),Se=ge.state,Ce=ge.nextState;if(Se){ue&&ue(oe,Se.currentSlide);var Ze=Se.lazyLoadedList.filter(function(Ve){return y.state.lazyLoadedList.indexOf(Ve)<0});X&&Ze.length>0&&X(Ze),!y.props.waitForAnimate&&y.animationEndCallback&&(clearTimeout(y.animationEndCallback),re&&re(oe),delete y.animationEndCallback),y.setState(Se,function(){B&&y.asNavForIndex!==O&&(y.asNavForIndex=O,B.innerSlider.slideHandler(O)),Ce&&(y.animationEndCallback=setTimeout(function(){var Ve=Ce.animating,Ke=M(Ce,["animating"]);y.setState(Ke,function(){y.callbackTimers.push(setTimeout(function(){return y.setState({animating:Ve})},10)),re&&re(Se.currentSlide),delete y.animationEndCallback})},Q))})}}),m(I(y),"changeSlide",function(O){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w=R(R({},y.props),y.state),B=(0,a.changeSlide)(w,O);if(!(B!==0&&!B)&&(v===!0?y.slideHandler(B,v):y.slideHandler(B),y.props.autoplay&&y.autoPlay("update"),y.props.focusOnSelect)){var ue=y.list.querySelectorAll(".slick-current");ue[0]&&ue[0].focus()}}),m(I(y),"clickHandler",function(O){y.clickable===!1&&(O.stopPropagation(),O.preventDefault()),y.clickable=!0}),m(I(y),"keyHandler",function(O){var v=(0,a.keyHandler)(O,y.props.accessibility,y.props.rtl);v!==""&&y.changeSlide({message:v})}),m(I(y),"selectHandler",function(O){y.changeSlide(O)}),m(I(y),"disableBodyScroll",function(){var O=function(w){w=w||window.event,w.preventDefault&&w.preventDefault(),w.returnValue=!1};window.ontouchmove=O}),m(I(y),"enableBodyScroll",function(){window.ontouchmove=null}),m(I(y),"swipeStart",function(O){y.props.verticalSwiping&&y.disableBodyScroll();var v=(0,a.swipeStart)(O,y.props.swipe,y.props.draggable);v!==""&&y.setState(v)}),m(I(y),"swipeMove",function(O){var v=(0,a.swipeMove)(O,R(R(R({},y.props),y.state),{},{trackRef:y.track,listRef:y.list,slideIndex:y.state.currentSlide}));v&&(v.swiping&&(y.clickable=!1),y.setState(v))}),m(I(y),"swipeEnd",function(O){var v=(0,a.swipeEnd)(O,R(R(R({},y.props),y.state),{},{trackRef:y.track,listRef:y.list,slideIndex:y.state.currentSlide}));if(v){var w=v.triggerSlideHandler;delete v.triggerSlideHandler,y.setState(v),w!==void 0&&(y.slideHandler(w),y.props.verticalSwiping&&y.enableBodyScroll())}}),m(I(y),"touchEnd",function(O){y.swipeEnd(O),y.clickable=!0}),m(I(y),"slickPrev",function(){y.callbackTimers.push(setTimeout(function(){return y.changeSlide({message:"previous"})},0))}),m(I(y),"slickNext",function(){y.callbackTimers.push(setTimeout(function(){return y.changeSlide({message:"next"})},0))}),m(I(y),"slickGoTo",function(O){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(O=Number(O),isNaN(O))return"";y.callbackTimers.push(setTimeout(function(){return y.changeSlide({message:"index",index:O,currentSlide:y.state.currentSlide},v)},0))}),m(I(y),"play",function(){var O;if(y.props.rtl)O=y.state.currentSlide-y.props.slidesToScroll;else if((0,a.canGoNext)(R(R({},y.props),y.state)))O=y.state.currentSlide+y.props.slidesToScroll;else return!1;y.slideHandler(O)}),m(I(y),"autoPlay",function(O){y.autoplayTimer&&clearInterval(y.autoplayTimer);var v=y.state.autoplaying;if(O==="update"){if(v==="hovered"||v==="focused"||v==="paused")return}else if(O==="leave"){if(v==="paused"||v==="focused")return}else if(O==="blur"&&(v==="paused"||v==="hovered"))return;y.autoplayTimer=setInterval(y.play,y.props.autoplaySpeed+50),y.setState({autoplaying:"playing"})}),m(I(y),"pause",function(O){y.autoplayTimer&&(clearInterval(y.autoplayTimer),y.autoplayTimer=null);var v=y.state.autoplaying;O==="paused"?y.setState({autoplaying:"paused"}):O==="focused"?(v==="hovered"||v==="playing")&&y.setState({autoplaying:"focused"}):v==="playing"&&y.setState({autoplaying:"hovered"})}),m(I(y),"onDotsOver",function(){return y.props.autoplay&&y.pause("hovered")}),m(I(y),"onDotsLeave",function(){return y.props.autoplay&&y.state.autoplaying==="hovered"&&y.autoPlay("leave")}),m(I(y),"onTrackOver",function(){return y.props.autoplay&&y.pause("hovered")}),m(I(y),"onTrackLeave",function(){return y.props.autoplay&&y.state.autoplaying==="hovered"&&y.autoPlay("leave")}),m(I(y),"onSlideFocus",function(){return y.props.autoplay&&y.pause("focused")}),m(I(y),"onSlideBlur",function(){return y.props.autoplay&&y.state.autoplaying==="focused"&&y.autoPlay("blur")}),m(I(y),"render",function(){var O=(0,r.default)("slick-slider",y.props.className,{"slick-vertical":y.props.vertical,"slick-initialized":!0}),v=R(R({},y.props),y.state),w=(0,a.extractObject)(v,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),B=y.props.pauseOnHover;w=R(R({},w),{},{onMouseEnter:B?y.onTrackOver:null,onMouseLeave:B?y.onTrackLeave:null,onMouseOver:B?y.onTrackOver:null,focusOnSelect:y.props.focusOnSelect&&y.clickable?y.selectHandler:null});var ue;if(y.props.dots===!0&&y.state.slideCount>=y.props.slidesToShow){var X=(0,a.extractObject)(v,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),Q=y.props.pauseOnDotsHover;X=R(R({},X),{},{clickHandler:y.changeSlide,onMouseEnter:Q?y.onDotsLeave:null,onMouseOver:Q?y.onDotsOver:null,onMouseLeave:Q?y.onDotsLeave:null}),ue=o.default.createElement(c.Dots,X)}var re,oe,ge=(0,a.extractObject)(v,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);ge.clickHandler=y.changeSlide,y.props.arrows&&(re=o.default.createElement(f.PrevArrow,ge),oe=o.default.createElement(f.NextArrow,ge));var Se=null;y.props.vertical&&(Se={height:y.state.listHeight});var Ce=null;y.props.vertical===!1?y.props.centerMode===!0&&(Ce={padding:"0px "+y.props.centerPadding}):y.props.centerMode===!0&&(Ce={padding:y.props.centerPadding+" 0px"});var Ze=R(R({},Se),Ce),Ve=y.props.touchMove,Ke={className:"slick-list",style:Ze,onClick:y.clickHandler,onMouseDown:Ve?y.swipeStart:null,onMouseMove:y.state.dragging&&Ve?y.swipeMove:null,onMouseUp:Ve?y.swipeEnd:null,onMouseLeave:y.state.dragging&&Ve?y.swipeEnd:null,onTouchStart:Ve?y.swipeStart:null,onTouchMove:y.state.dragging&&Ve?y.swipeMove:null,onTouchEnd:Ve?y.touchEnd:null,onTouchCancel:y.state.dragging&&Ve?y.swipeEnd:null,onKeyDown:y.props.accessibility?y.keyHandler:null},j={className:O,dir:"ltr",style:y.props.style};return y.props.unslick&&(Ke={className:"slick-list"},j={className:O}),o.default.createElement("div",j,y.props.unslick?"":re,o.default.createElement("div",x({ref:y.listRefHandler},Ke),o.default.createElement(l.Track,x({ref:y.trackRefHandler},w),y.props.children)),y.props.unslick?"":oe,y.props.unslick?"":ue)}),y.list=null,y.track=null,y.state=R(R({},e.default),{},{currentSlide:y.props.initialSlide,targetSlide:y.props.initialSlide?y.props.initialSlide:0,slideCount:o.default.Children.count(y.props.children)}),y.callbackTimers=[],y.clickable=!0,y.debouncedResize=null;var q=y.ssrInit();return y.state=R(R({},y.state),q),y}return Y(ne,[{key:"didPropsChange",value:function(y){for(var q=!1,O=0,v=Object.keys(this.props);O<v.length;O++){var w=v[O];if(!y.hasOwnProperty(w)){q=!0;break}if(!(S(y[w])==="object"||typeof y[w]=="function"||isNaN(y[w]))&&y[w]!==this.props[w]){q=!0;break}}return q||o.default.Children.count(this.props.children)!==o.default.Children.count(y.children)}}]),ne}(o.default.Component),Us}var uf,Jm;function M1(){if(Jm)return uf;Jm=1;var o=function(e){return e.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()}).toLowerCase()};return uf=o,uf}var cf,eg;function E1(){if(eg)return cf;eg=1;var o=M1(),e=function(a){var l=/[height|width]$/;return l.test(a)},n=function(a){var l="",c=Object.keys(a);return c.forEach(function(f,p){var g=a[f];f=o(f),e(f)&&typeof g=="number"&&(g=g+"px"),g===!0?l+=f:g===!1?l+="not "+f:l+="("+f+": "+g+")",p<c.length-1&&(l+=" and ")}),l},r=function(a){var l="";return typeof a=="string"?a:a instanceof Array?(a.forEach(function(c,f){l+=n(c),f<a.length-1&&(l+=", ")}),l):n(a)};return cf=r,cf}var ff,tg;function T1(){if(tg)return ff;tg=1;function o(e){this.options=e,!e.deferSetup&&this.setup()}return o.prototype={constructor:o,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},ff=o,ff}var df,ng;function Kg(){if(ng)return df;ng=1;function o(r,a){var l=0,c=r.length,f;for(l;l<c&&(f=a(r[l],l),f!==!1);l++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return df={isFunction:n,isArray:e,each:o},df}var hf,ig;function w1(){if(ig)return hf;ig=1;var o=T1(),e=Kg().each;function n(r,a){this.query=r,this.isUnconditional=a,this.handlers=[],this.mql=window.matchMedia(r);var l=this;this.listener=function(c){l.mql=c.currentTarget||c,l.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var a=new o(r);this.handlers.push(a),this.matches()&&a.on()},removeHandler:function(r){var a=this.handlers;e(a,function(l,c){if(l.equals(r))return l.destroy(),!a.splice(c,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(a){a[r]()})}},hf=n,hf}var pf,rg;function A1(){if(rg)return pf;rg=1;var o=w1(),e=Kg(),n=e.each,r=e.isFunction,a=e.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return l.prototype={constructor:l,register:function(c,f,p){var g=this.queries,S=p&&this.browserIsIncapable;return g[c]||(g[c]=new o(c,S)),r(f)&&(f={match:f}),a(f)||(f=[f]),n(f,function(x){r(x)&&(x={match:x}),g[c].addHandler(x)}),this},unregister:function(c,f){var p=this.queries[c];return p&&(f?p.removeHandler(f):(p.clear(),delete this.queries[c])),this}},pf=l,pf}var mf,og;function C1(){if(og)return mf;og=1;var o=A1();return mf=new o,mf}var sg;function R1(){return sg||(sg=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=c(mi()),n=x1(),r=c(E1()),a=c(Wg()),l=js();function c(E){return E&&E.__esModule?E:{default:E}}function f(E){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},f(E)}function p(){return p=Object.assign?Object.assign.bind():function(E){for(var m=1;m<arguments.length;m++){var N=arguments[m];for(var $ in N)Object.prototype.hasOwnProperty.call(N,$)&&(E[$]=N[$])}return E},p.apply(this,arguments)}function g(E,m){var N=Object.keys(E);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(E);m&&($=$.filter(function(F){return Object.getOwnPropertyDescriptor(E,F).enumerable})),N.push.apply(N,$)}return N}function S(E){for(var m=1;m<arguments.length;m++){var N=arguments[m]!=null?arguments[m]:{};m%2?g(Object(N),!0).forEach(function($){L(E,$,N[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(N)):g(Object(N)).forEach(function($){Object.defineProperty(E,$,Object.getOwnPropertyDescriptor(N,$))})}return E}function x(E,m){if(!(E instanceof m))throw new TypeError("Cannot call a class as a function")}function M(E,m){for(var N=0;N<m.length;N++){var $=m[N];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(E,b($.key),$)}}function A(E,m,N){return m&&M(E.prototype,m),Object.defineProperty(E,"prototype",{writable:!1}),E}function D(E,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(m&&m.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),m&&R(E,m)}function R(E,m){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function($,F){return $.__proto__=F,$},R(E,m)}function T(E){var m=V();return function(){var $=k(E),F;if(m){var H=k(this).constructor;F=Reflect.construct($,arguments,H)}else F=$.apply(this,arguments);return _(this,F)}}function _(E,m){if(m&&(f(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(E)}function Y(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function V(){try{var E=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(V=function(){return!!E})()}function k(E){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},k(E)}function L(E,m,N){return m=b(m),m in E?Object.defineProperty(E,m,{value:N,enumerable:!0,configurable:!0,writable:!0}):E[m]=N,E}function b(E){var m=I(E,"string");return f(m)=="symbol"?m:String(m)}function I(E,m){if(f(E)!="object"||!E)return E;var N=E[Symbol.toPrimitive];if(N!==void 0){var $=N.call(E,m||"default");if(f($)!="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(E)}var G=(0,l.canUseDOM)()&&C1();o.default=function(E){D(N,E);var m=T(N);function N($){var F;return x(this,N),F=m.call(this,$),L(Y(F),"innerSliderRefHandler",function(H){return F.innerSlider=H}),L(Y(F),"slickPrev",function(){return F.innerSlider.slickPrev()}),L(Y(F),"slickNext",function(){return F.innerSlider.slickNext()}),L(Y(F),"slickGoTo",function(H){var ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return F.innerSlider.slickGoTo(H,ne)}),L(Y(F),"slickPause",function(){return F.innerSlider.pause("paused")}),L(Y(F),"slickPlay",function(){return F.innerSlider.autoPlay("play")}),F.state={breakpoint:null},F._responsiveMediaHandlers=[],F}return A(N,[{key:"media",value:function(F,H){G.register(F,H),this._responsiveMediaHandlers.push({query:F,handler:H})}},{key:"componentDidMount",value:function(){var F=this;if(this.props.responsive){var H=this.props.responsive.map(function(K){return K.breakpoint});H.sort(function(K,y){return K-y}),H.forEach(function(K,y){var q;y===0?q=(0,r.default)({minWidth:0,maxWidth:K}):q=(0,r.default)({minWidth:H[y-1]+1,maxWidth:K}),(0,l.canUseDOM)()&&F.media(q,function(){F.setState({breakpoint:K})})});var ne=(0,r.default)({minWidth:H.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(ne,function(){F.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(F){G.unregister(F.query,F.handler)})}},{key:"render",value:function(){var F=this,H,ne;this.state.breakpoint?(ne=this.props.responsive.filter(function(Q){return Q.breakpoint===F.state.breakpoint}),H=ne[0].settings==="unslick"?"unslick":S(S(S({},a.default),this.props),ne[0].settings)):H=S(S({},a.default),this.props),H.centerMode&&(H.slidesToScroll>1,H.slidesToScroll=1),H.fade&&(H.slidesToShow>1,H.slidesToScroll>1,H.slidesToShow=1,H.slidesToScroll=1);var K=e.default.Children.toArray(this.props.children);K=K.filter(function(Q){return typeof Q=="string"?!!Q.trim():!!Q}),H.variableWidth&&(H.rows>1||H.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),H.variableWidth=!1);for(var y=[],q=null,O=0;O<K.length;O+=H.rows*H.slidesPerRow){for(var v=[],w=O;w<O+H.rows*H.slidesPerRow;w+=H.slidesPerRow){for(var B=[],ue=w;ue<w+H.slidesPerRow&&(H.variableWidth&&K[ue].props.style&&(q=K[ue].props.style.width),!(ue>=K.length));ue+=1)B.push(e.default.cloneElement(K[ue],{key:100*O+10*w+ue,tabIndex:-1,style:{width:"".concat(100/H.slidesPerRow,"%"),display:"inline-block"}}));v.push(e.default.createElement("div",{key:10*O+w},B))}H.variableWidth?y.push(e.default.createElement("div",{key:O,style:{width:q}},v)):y.push(e.default.createElement("div",{key:O},v))}if(H==="unslick"){var X="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:X},K)}else y.length<=H.slidesToShow&&!H.infinite&&(H.unslick=!0);return e.default.createElement(n.InnerSlider,p({style:this.props.style,ref:this.innerSliderRefHandler},(0,l.filterSettings)(H)),y)}}]),N}(e.default.Component)}(rf)),rf}var ag;function b1(){return ag||(ag=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n(R1());function n(r){return r&&r.__esModule?r:{default:r}}o.default=e.default}(nf)),nf}var P1=b1();const H1=lg(P1);export{vr as B,O1 as F,ii as P,k1 as S,B1 as W,I1 as a,U1 as b,N1 as c,F1 as d,pi as e,uy as f,z1 as g,H1 as h,D1 as i,L1 as j,I_ as r};
