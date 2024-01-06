var Bc=Object.defineProperty;var Vc=(n,e,t)=>e in n?Bc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oi=(n,e,t)=>(Vc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function $(){}function Jo(n,e){for(const t in e)n[t]=e[t];return n}function Zo(n){return n()}function Rr(){return Object.create(null)}function Ze(n){n.forEach(Zo)}function ws(n){return typeof n=="function"}function ye(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let kn;function Wn(n,e){return n===e?!0:(kn||(kn=document.createElement("a")),kn.href=e,n===kn.href)}function Hc(n){return Object.keys(n).length===0}function ea(n,...e){if(n==null){for(const i of e)i(void 0);return $}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Es(n,e,t){n.$$.on_destroy.push(ea(e,t))}function v(n,e){n.appendChild(e)}function B(n,e,t){n.insertBefore(e,t||null)}function F(n){n.parentNode&&n.parentNode.removeChild(n)}function $c(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function I(n){return document.createElement(n)}function Bn(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Ee(n){return document.createTextNode(n)}function M(){return Ee(" ")}function di(){return Ee("")}function we(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function jc(n){return function(e){return e.preventDefault(),n.call(this,e)}}function y(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ta(n){return n===""?null:+n}function qc(n){return Array.from(n.childNodes)}function nt(n,e){e=""+e,n.data!==e&&(n.data=e)}function Ve(n,e){n.value=e??""}function zc(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}function Vn(n,e){return new n(e)}let rn;function Xt(n){rn=n}function fi(){if(!rn)throw new Error("Function called outside component initialization");return rn}function na(n){fi().$$.on_mount.push(n)}function Gc(n){fi().$$.after_update.push(n)}function Kc(n){fi().$$.on_destroy.push(n)}function Yc(){const n=fi();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=zc(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function kr(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const Ct=[],Nr=[];let St=[];const Ar=[],ia=Promise.resolve();let Qi=!1;function sa(){Qi||(Qi=!0,ia.then(ra))}function Qc(){return sa(),ia}function Xi(n){St.push(n)}const Di=new Set;let Et=0;function ra(){if(Et!==0)return;const n=rn;do{try{for(;Et<Ct.length;){const e=Ct[Et];Et++,Xt(e),Xc(e.$$)}}catch(e){throw Ct.length=0,Et=0,e}for(Xt(null),Ct.length=0,Et=0;Nr.length;)Nr.pop()();for(let e=0;e<St.length;e+=1){const t=St[e];Di.has(t)||(Di.add(t),t())}St.length=0}while(Ct.length);for(;Ar.length;)Ar.pop()();Qi=!1,Di.clear(),Xt(n)}function Xc(n){if(n.fragment!==null){n.update(),Ze(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Xi)}}function Jc(n){const e=[],t=[];St.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),St=e}const Ln=new Set;let it;function pi(){it={r:0,c:[],p:it}}function _i(){it.r||Ze(it.c),it=it.p}function re(n,e){n&&n.i&&(Ln.delete(n),n.i(e))}function ce(n,e,t,i){if(n&&n.o){if(Ln.has(n))return;Ln.add(n),it.c.push(()=>{Ln.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function Pr(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Hn(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function $n(n){return typeof n=="object"&&n!==null?n:{}}function Se(n){n&&n.c()}function me(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),Xi(()=>{const r=n.$$.on_mount.map(Zo).filter(ws);n.$$.on_destroy?n.$$.on_destroy.push(...r):Ze(r),n.$$.on_mount=[]}),s.forEach(Xi)}function ve(n,e){const t=n.$$;t.fragment!==null&&(Jc(t.after_update),Ze(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Zc(n,e){n.$$.dirty[0]===-1&&(Ct.push(n),sa(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ke(n,e,t,i,s,r,o=null,a=[-1]){const l=rn;Xt(n);const c=n.$$={fragment:null,ctx:[],props:r,update:$,not_equal:s,bound:Rr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Rr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&Zc(n,h)),d}):[],c.update(),u=!0,Ze(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const h=qc(e.target);c.fragment&&c.fragment.l(h),h.forEach(F)}else c.fragment&&c.fragment.c();e.intro&&re(n.$$.fragment),me(n,e.target,e.anchor),ra()}Xt(l)}class Ne{constructor(){Oi(this,"$$");Oi(this,"$$set")}$destroy(){ve(this,1),this.$destroy=$}$on(e,t){if(!ws(t))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Hc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const eu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(eu);var Or={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw Bt(e)},Bt=function(n){return new Error("Firebase Database ("+oa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},tu=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(aa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new nu;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const la=function(n){const e=aa(n);return bs.encodeByteArray(e,!0)},jn=function(n){return la(n).replace(/\./g,"")},qn=function(n){try{return bs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n){return ca(void 0,n)}function ca(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!su(t)||(n[t]=ca(n[t],e[t]));return n}function su(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=()=>ru().__FIREBASE_DEFAULTS__,au=()=>{if(typeof process>"u"||typeof Or>"u")return;const n=Or.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qn(n[1]);return e&&JSON.parse(e)},Is=()=>{try{return ou()||au()||lu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ua=n=>{var e,t;return(t=(e=Is())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ha=n=>{const e=ua(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},da=()=>{var n;return(n=Is())===null||n===void 0?void 0:n.config},fa=n=>{var e;return(e=Is())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jn(JSON.stringify(t)),jn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function cu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _a(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uu(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ga(){return oa.NODE_ADMIN===!0}function hu(){try{return typeof indexedDB=="object"}catch{return!1}}function du(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="FirebaseError";class Ue extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=fu,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mn.prototype.create)}}class mn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?pu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ue(s,a,i)}}function pu(n,e){return n.replace(_u,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const _u=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=on(qn(r[0])||""),t=on(qn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},gu=function(n){const e=ma(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},mu=function(n){const e=ma(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Dt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ji(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Gn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Dr(r)&&Dr(o)){if(!Gn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Dr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function yu(n,e){const t=new wu(n,e);return t.subscribe.bind(t)}class wu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Eu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Li),s.error===void 0&&(s.error=Li),s.complete===void 0&&(s.complete=Li);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Li(){}function Ts(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,_(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},mi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n){return n&&n._delegate?n._delegate:n}class Qe{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new gi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tu(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Cu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cu(n){return n===et?void 0:n}function Tu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Iu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Ru={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},ku=W.INFO,Nu={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Au=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Nu[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ss{constructor(e){this.name=e,this._logLevel=ku,this._logHandler=Au,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ru[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Pu=(n,e)=>e.some(t=>n instanceof t);let Lr,Mr;function Ou(){return Lr||(Lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Du(){return Mr||(Mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const va=new WeakMap,Zi=new WeakMap,ya=new WeakMap,Mi=new WeakMap,Rs=new WeakMap;function Lu(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ge(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&va.set(t,n)}).catch(()=>{}),Rs.set(e,n),e}function Mu(n){if(Zi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Zi.set(n,e)}let es={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ya.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ge(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xu(n){es=n(es)}function Uu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(xi(this),e,...t);return ya.set(i,e.sort?e.sort():[e]),Ge(i)}:Du().includes(n)?function(...e){return n.apply(xi(this),e),Ge(va.get(this))}:function(...e){return Ge(n.apply(xi(this),e))}}function Fu(n){return typeof n=="function"?Uu(n):(n instanceof IDBTransaction&&Mu(n),Pu(n,Ou())?new Proxy(n,es):n)}function Ge(n){if(n instanceof IDBRequest)return Lu(n);if(Mi.has(n))return Mi.get(n);const e=Fu(n);return e!==n&&(Mi.set(n,e),Rs.set(e,n)),e}const xi=n=>Rs.get(n);function Wu(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Ge(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ge(o.result),l.oldVersion,l.newVersion,Ge(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Bu=["get","getKey","getAll","getAllKeys","count"],Vu=["put","add","delete","clear"],Ui=new Map;function xr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Vu.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Bu.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Ui.set(e,r),r}xu(n=>({...n,get:(e,t,i)=>xr(e,t)||n.get(e,t,i),has:(e,t)=>!!xr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($u(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function $u(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ts="@firebase/app",Ur="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Ss("@firebase/app"),ju="@firebase/app-compat",qu="@firebase/analytics-compat",zu="@firebase/analytics",Gu="@firebase/app-check-compat",Ku="@firebase/app-check",Yu="@firebase/auth",Qu="@firebase/auth-compat",Xu="@firebase/database",Ju="@firebase/database-compat",Zu="@firebase/functions",eh="@firebase/functions-compat",th="@firebase/installations",nh="@firebase/installations-compat",ih="@firebase/messaging",sh="@firebase/messaging-compat",rh="@firebase/performance",oh="@firebase/performance-compat",ah="@firebase/remote-config",lh="@firebase/remote-config-compat",ch="@firebase/storage",uh="@firebase/storage-compat",hh="@firebase/firestore",dh="@firebase/firestore-compat",fh="firebase",ph="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]",_h={[ts]:"fire-core",[ju]:"fire-core-compat",[zu]:"fire-analytics",[qu]:"fire-analytics-compat",[Ku]:"fire-app-check",[Gu]:"fire-app-check-compat",[Yu]:"fire-auth",[Qu]:"fire-auth-compat",[Xu]:"fire-rtdb",[Ju]:"fire-rtdb-compat",[Zu]:"fire-fn",[eh]:"fire-fn-compat",[th]:"fire-iid",[nh]:"fire-iid-compat",[ih]:"fire-fcm",[sh]:"fire-fcm-compat",[rh]:"fire-perf",[oh]:"fire-perf-compat",[ah]:"fire-rc",[lh]:"fire-rc-compat",[ch]:"fire-gcs",[uh]:"fire-gcs-compat",[hh]:"fire-fst",[dh]:"fire-fst-compat","fire-js":"fire-js",[fh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Map,is=new Map;function gh(n,e){try{n.container.addComponent(e)}catch(t){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ht(n){const e=n.name;if(is.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;is.set(e,n);for(const t of Kn.values())gh(t,n);return!0}function vi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ke=new mn("app","Firebase",mh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=ph;function wa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ns,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(t||(t=da()),!t)throw Ke.create("no-options");const r=Kn.get(s);if(r){if(Gn(t,r.options)&&Gn(i,r.config))return r;throw Ke.create("duplicate-app",{appName:s})}const o=new Su(s);for(const l of is.values())o.addComponent(l);const a=new vh(t,i,o);return Kn.set(s,a),a}function ks(n=ns){const e=Kn.get(n);if(!e&&n===ns&&da())return wa();if(!e)throw Ke.create("no-app",{appName:n});return e}function Ie(n,e,t){var i;let s=(i=_h[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(a.join(" "));return}ht(new Qe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="firebase-heartbeat-database",wh=1,an="firebase-heartbeat-store";let Fi=null;function Ea(){return Fi||(Fi=Wu(yh,wh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(an)}}}).catch(n=>{throw Ke.create("idb-open",{originalErrorMessage:n.message})})),Fi}async function Eh(n){try{return await(await Ea()).transaction(an).objectStore(an).get(ba(n))}catch(e){if(e instanceof Ue)ut.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(t.message)}}}async function Fr(n,e){try{const i=(await Ea()).transaction(an,"readwrite");await i.objectStore(an).put(e,ba(n)),await i.done}catch(t){if(t instanceof Ue)ut.warn(t.message);else{const i=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ut.warn(i.message)}}}function ba(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=1024,Ih=30*24*60*60*1e3;class Ch{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ih}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wr(),{heartbeatsToSend:i,unsentEntries:s}=Th(this._heartbeatsCache.heartbeats),r=jn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wr(){return new Date().toISOString().substring(0,10)}function Th(n,e=bh){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Br(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Br(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Sh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hu()?du().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Eh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Br(n){return jn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n){ht(new Qe("platform-logger",e=>new Hu(e),"PRIVATE")),ht(new Qe("heartbeat",e=>new Ch(e),"PRIVATE")),Ie(ts,Ur,n),Ie(ts,Ur,"esm2017"),Ie("fire-js","")}Rh("");function Ns(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Ia(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kh=Ia,Ca=new mn("auth","Firebase",Ia());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Ss("@firebase/auth");function Nh(n,...e){Yn.logLevel<=W.WARN&&Yn.warn(`Auth (${vt}): ${n}`,...e)}function Mn(n,...e){Yn.logLevel<=W.ERROR&&Yn.error(`Auth (${vt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n,...e){throw As(n,...e)}function Ce(n,...e){return As(n,...e)}function Ta(n,e,t){const i=Object.assign(Object.assign({},kh()),{[e]:t});return new mn("auth","Firebase",i).create(e,{appName:n.name})}function Ah(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Re(n,"argument-error"),Ta(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function As(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ca.create(n,...e)}function R(n,e,...t){if(!n)throw As(e,...t)}function Ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mn(e),new Error(e)}function Le(n,e){n||Ae(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ph(){return Vr()==="http:"||Vr()==="https:"}function Vr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ph()||cu()||"connection"in navigator)?navigator.onLine:!0}function Dh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Le(t>e,"Short delay should be less than long delay!"),this.isMobile=Cs()||_a()}get(){return Oh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n,e){Le(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new vn(3e4,6e4);function Os(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ht(n,e,t,i,s={}){return Ra(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Vt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Sa.fetch()(ka(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ra(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Lh),e);try{const s=new Uh(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Nn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Nn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Nn(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ta(n,u,c);Re(n,u)}}catch(s){if(s instanceof Ue)throw s;Re(n,"network-request-failed",{message:String(s)})}}async function xh(n,e,t,i,s={}){const r=await Ht(n,e,t,i,s);return"mfaPendingCredential"in r&&Re(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ka(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ps(n.config,s):`${n.config.apiScheme}://${s}`}class Uh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ce(this.auth,"network-request-failed")),Mh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ce(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(n,e){return Ht(n,"POST","/v1/accounts:delete",e)}async function Wh(n,e){return Ht(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bh(n,e=!1){const t=ie(n),i=await t.getIdToken(e),s=Ds(i);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Jt(Wi(s.auth_time)),issuedAtTime:Jt(Wi(s.iat)),expirationTime:Jt(Wi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Wi(n){return Number(n)*1e3}function Ds(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Mn("JWT malformed, contained fewer than 3 sections"),null;try{const s=qn(t);return s?JSON.parse(s):(Mn("Failed to decode base64 JWT payload"),null)}catch(s){return Mn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vh(n){const e=Ds(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ue&&Hh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Hh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jt(this.lastLoginAt),this.creationTime=Jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await ln(n,Wh(t,{idToken:i}));R(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?zh(r.providerUserInfo):[],a=qh(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Na(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function jh(n){const e=ie(n);await Qn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qh(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function zh(n){return n.map(e=>{var{providerId:t}=e,i=Ns(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(n,e){const t=await Ra(n,{},async()=>{const i=Vt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=ka(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sa.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Kh(n,e){return Ht(n,"POST","/v2/accounts:revokeToken",Os(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Gh(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new cn;return i&&(R(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(R(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cn,this.toJSON())}_performRefresh(){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Ns(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Na(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ln(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bh(this,e)}reload(){return jh(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Qn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ln(this,Fh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=t.createdAt)!==null&&c!==void 0?c:void 0,C=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:g,isAnonymous:m,providerData:E,stsTokenManager:S}=t;R(N&&S,e,"internal-error");const O=cn.fromJSON(this.name,S);R(typeof N=="string",e,"internal-error"),He(h,e.name),He(d,e.name),R(typeof g=="boolean",e,"internal-error"),R(typeof m=="boolean",e,"internal-error"),He(f,e.name),He(p,e.name),He(w,e.name),He(b,e.name),He(k,e.name),He(C,e.name);const L=new at({uid:N,auth:e,email:d,emailVerified:g,displayName:h,isAnonymous:m,photoURL:p,phoneNumber:f,tenantId:w,stsTokenManager:O,createdAt:k,lastLoginAt:C});return E&&Array.isArray(E)&&(L.providerData=E.map(U=>Object.assign({},U))),b&&(L._redirectEventId=b),L}static async _fromIdTokenResponse(e,t,i=!1){const s=new cn;s.updateFromServerResponse(t);const r=new at({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Qn(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map;function Pe(n){Le(n instanceof Function,"Expected a class definition");let e=Hr.get(n);return e?(Le(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Aa.type="NONE";const $r=Aa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n,e,t){return`firebase:${n}:${e}:${t}`}class Rt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=xn(this.userKey,s.apiKey,r),this.fullPersistenceKey=xn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Rt(Pe($r),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Pe($r);const o=xn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=at._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Rt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Rt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Da(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ma(e))return"Blackberry";if(xa(e))return"Webos";if(Ls(e))return"Safari";if((e.includes("chrome/")||Oa(e))&&!e.includes("edge/"))return"Chrome";if(La(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Pa(n=ne()){return/firefox\//i.test(n)}function Ls(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oa(n=ne()){return/crios\//i.test(n)}function Da(n=ne()){return/iemobile/i.test(n)}function La(n=ne()){return/android/i.test(n)}function Ma(n=ne()){return/blackberry/i.test(n)}function xa(n=ne()){return/webos/i.test(n)}function yi(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yh(n=ne()){var e;return yi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qh(){return uu()&&document.documentMode===10}function Ua(n=ne()){return yi(n)||La(n)||xa(n)||Ma(n)||/windows phone/i.test(n)||Da(n)}function Xh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n,e=[]){let t;switch(n){case"Browser":t=jr(ne());break;case"Worker":t=`${jr(ne())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(n,e={}){return Ht(n,"GET","/v2/passwordPolicy",Os(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=6;class td{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ed,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qr(this),this.idTokenSubscription=new qr(this),this.beforeStateQueue=new Jh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ca,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Rt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ie(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zh(this),t=new td(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Kh(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Nh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yn(n){return ie(n)}class qr{constructor(e){this.auth=e,this.observer=null,this.addObserver=yu(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function sd(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ce("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",id().appendChild(i)})}function rd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n,e){const t=vi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Gn(r,e??{}))return s;Re(s,"already-initialized")}return t.initialize({options:e})}function ad(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Pe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ld(n,e,t){const i=yn(n);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Wa(e),{host:o,port:a}=cd(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ud()}function Wa(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cd(n){const e=Wa(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:zr(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:zr(o)}}}function zr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ud(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ae("not implemented")}_getIdTokenResponse(e){return Ae("not implemented")}_linkToIdToken(e,t){return Ae("not implemented")}_getReauthenticationResolver(e){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(n,e){return xh(n,"POST","/v1/accounts:signInWithIdp",Os(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="http://localhost";class dt extends Ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Re("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Ns(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new dt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return kt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,kt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kt(e,t)}buildRequest(){const e={requestUri:hd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ms{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends wn{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com";$e.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends wn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dt._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return de.credential(t,i)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends wn{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends wn{constructor(){super("twitter.com")}static credential(e,t){return dt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return qe.credential(t,i)}catch{return null}}}qe.TWITTER_SIGN_IN_METHOD="twitter.com";qe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await at._fromIdTokenResponse(e,i,s),o=Gr(i);return new Lt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Gr(i);return new Lt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Gr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Ue{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Xn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Xn(e,t,i,s)}}function Va(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Xn._fromErrorAndOperation(n,r,e,i):r})}async function dd(n,e,t=!1){const i=await ln(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Lt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await ln(n,Va(i,s,e,n),t);R(r.idToken,i,"internal-error");const o=Ds(r.idToken);R(o,i,"internal-error");const{sub:a}=o;return R(n.uid===a,i,"user-mismatch"),Lt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Re(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(n,e,t=!1){const i="signIn",s=await Va(n,i,e),r=await Lt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function pd(n,e){return Ha(yn(n),e)}function _d(n,e,t,i){return ie(n).onIdTokenChanged(e,t,i)}function gd(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}const Jn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jn,"1"),this.storage.removeItem(Jn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){const n=ne();return Ls(n)||yi(n)}const vd=1e3,yd=10;class ja extends $a{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=md()&&Xh(),this.fallbackToPolling=Ua(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Qh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yd):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},vd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ja.type="LOCAL";const wd=ja;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends $a{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qa.type="SESSION";const za=qa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new wi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Ed(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=xs("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function Id(n){Te().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){return typeof Te().WorkerGlobalScope<"u"&&typeof Te().importScripts=="function"}async function Cd(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Td(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Sd(){return Ga()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="firebaseLocalStorageDb",Rd=1,Zn="firebaseLocalStorage",Ya="fbase_key";class En{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ei(n,e){return n.transaction([Zn],e?"readwrite":"readonly").objectStore(Zn)}function kd(){const n=indexedDB.deleteDatabase(Ka);return new En(n).toPromise()}function rs(){const n=indexedDB.open(Ka,Rd);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Zn,{keyPath:Ya})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Zn)?e(i):(i.close(),await kd(),e(await rs()))})})}async function Kr(n,e,t){const i=Ei(n,!0).put({[Ya]:e,value:t});return new En(i).toPromise()}async function Nd(n,e){const t=Ei(n,!1).get(e),i=await new En(t).toPromise();return i===void 0?null:i.value}function Yr(n,e){const t=Ei(n,!0).delete(e);return new En(t).toPromise()}const Ad=800,Pd=3;class Qa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Pd)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ga()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wi._getInstance(Sd()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Cd(),!this.activeServiceWorker)return;this.sender=new bd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Td()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rs();return await Kr(e,Jn,"1"),await Yr(e,Jn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Kr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Nd(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ei(s,!1).getAll();return new En(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ad)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qa.type="LOCAL";const Od=Qa;new vn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,e){return e?Pe(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dd(n){return Ha(n.auth,new Us(n),n.bypassAuthState)}function Ld(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),fd(t,new Us(n),n.bypassAuthState)}async function Md(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),dd(t,new Us(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dd;case"linkViaPopup":case"linkViaRedirect":return Md;case"reauthViaPopup":case"reauthViaRedirect":return Ld;default:Re(this.auth,"internal-error")}}resolve(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new vn(2e3,1e4);async function Ud(n,e,t){const i=yn(n);Ah(n,e,Ms);const s=Xa(i,t);return new st(i,"signInViaPopup",e,s).executeNotNull()}class st extends Ja{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,st.currentPopupAction&&st.currentPopupAction.cancel(),st.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Le(this.filter.length===1,"Popup operations only handle one event");const e=xs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,st.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xd.get())};e()}}st.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="pendingRedirect",Un=new Map;class Wd extends Ja{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const i=await Bd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bd(n,e){const t=$d(e),i=Hd(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Vd(n,e){Un.set(n._key(),e)}function Hd(n){return Pe(n._redirectPersistence)}function $d(n){return xn(Fd,n.config.apiKey,n.name)}async function jd(n,e,t=!1){const i=yn(n),s=Xa(i,e),o=await new Wd(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=10*60*1e3;class zd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gd(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Za(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ce(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qd&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qr(e))}saveEventToCache(e){this.cachedEventUids.add(Qr(e)),this.lastProcessedEventTime=Date.now()}}function Qr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Za({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gd(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Za(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(n,e={}){return Ht(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qd=/^https?/;async function Xd(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Kd(n);for(const t of e)try{if(Jd(t))return}catch{}Re(n,"unauthorized-domain")}function Jd(n){const e=ss(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Qd.test(t))return!1;if(Yd.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new vn(3e4,6e4);function Xr(){const n=Te().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ef(n){return new Promise((e,t)=>{var i,s,r;function o(){Xr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xr(),t(Ce(n,"network-request-failed"))},timeout:Zd.get()})}if(!((s=(i=Te().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Te().gapi)===null||r===void 0)&&r.load)o();else{const a=rd("iframefcb");return Te()[a]=()=>{gapi.load?o():t(Ce(n,"network-request-failed"))},sd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Fn=null,e})}let Fn=null;function tf(n){return Fn=Fn||ef(n),Fn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new vn(5e3,15e3),sf="__/auth/iframe",rf="emulator/auth/iframe",of={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},af=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lf(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ps(e,rf):`https://${n.config.authDomain}/${sf}`,i={apiKey:e.apiKey,appName:n.name,v:vt},s=af.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Vt(i).slice(1)}`}async function cf(n){const e=await tf(n),t=Te().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:lf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:of,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ce(n,"network-request-failed"),a=Te().setTimeout(()=>{r(o)},nf.get());function l(){Te().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hf=500,df=600,ff="_blank",pf="http://localhost";class Jr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _f(n,e,t,i=hf,s=df){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},uf),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ne().toLowerCase();t&&(a=Oa(c)?ff:t),Pa(c)&&(e=e||pf,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Yh(c)&&a!=="_self")return gf(e||"",a),new Jr(null);const h=window.open(e||"",a,u);R(h,n,"popup-blocked");try{h.focus()}catch{}return new Jr(h)}function gf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="__/auth/handler",vf="emulator/auth/handler",yf=encodeURIComponent("fac");async function Zr(n,e,t,i,s,r){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:vt,eventId:s};if(e instanceof Ms){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ji(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof wn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${yf}=${encodeURIComponent(l)}`:"";return`${wf(n)}?${Vt(a).slice(1)}${c}`}function wf({config:n}){return n.emulator?Ps(n,vf):`https://${n.authDomain}/${mf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="webStorageSupport";class Ef{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=za,this._completeRedirectFn=jd,this._overrideRedirectResult=Vd}async _openPopup(e,t,i,s){var r;Le((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Zr(e,t,i,ss(),s);return _f(e,o,xs())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Zr(e,t,i,ss(),s);return Id(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Le(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await cf(e),i=new zd(e);return t.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bi,{type:Bi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Bi];o!==void 0&&t(!!o),Re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ua()||Ls()||yi()}}const bf=Ef;var eo="@firebase/auth",to="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tf(n){ht(new Qe("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fa(n)},c=new nd(i,s,r,l);return ad(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ht(new Qe("auth-internal",e=>{const t=yn(e.getProvider("auth").getImmediate());return(i=>new If(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(eo,to,Cf(n)),Ie(eo,to,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=5*60,Rf=fa("authIdTokenMaxAge")||Sf;let no=null;const kf=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Rf)return;const s=t==null?void 0:t.token;no!==s&&(no=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function el(n=ks()){const e=vi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=od(n,{popupRedirectResolver:bf,persistence:[Od,wd,za]}),i=fa("authTokenSyncURL");if(i){const r=kf(i);gd(t,r,()=>r(t.currentUser)),_d(t,o=>r(o))}const s=ua("auth");return s&&ld(t,`http://${s}`),t}Tf("Browser");const bt=[];function tl(n,e){return{subscribe:Fs(n,e).subscribe}}function Fs(n,e=$){let t;const i=new Set;function s(a){if(ye(n,a)&&(n=a,t)){const l=!bt.length;for(const c of i)c[1](),bt.push(c,n);if(l){for(let c=0;c<bt.length;c+=2)bt[c][0](bt[c+1]);bt.length=0}}}function r(a){s(a(n))}function o(a,l=$){const c=[a,l];return i.add(c),i.size===1&&(t=e(s,r)||$),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function nl(n,e,t){const i=!Array.isArray(n),s=i?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return tl(t,(o,a)=>{let l=!1;const c=[];let u=0,h=$;const d=()=>{if(u)return;h();const p=e(i?c[0]:c,o,a);r?o(p):h=ws(p)?p:$},f=s.map((p,w)=>ea(p,b=>{c[w]=b,u&=~(1<<w),l&&d()},()=>{u|=1<<w}));return l=!0,d(),function(){Ze(f),h(),l=!1}})}const Mt=Fs(null);function io(n){var r;let e,t=((r=n[0])==null?void 0:r.displayName)+"",i,s;return{c(){e=I("div"),i=Ee(t),s=Ee(": 로그인 중")},m(o,a){B(o,e,a),v(e,i),v(e,s)},p(o,a){var l;a&1&&t!==(t=((l=o[0])==null?void 0:l.displayName)+"")&&nt(i,t)},d(o){o&&F(e)}}}function Nf(n){let e,t,i,s,r,o,a,l=n[0]&&io(n);return{c(){e=I("div"),l&&l.c(),t=M(),i=I("div"),i.textContent="로그인",s=M(),r=I("button"),r.innerHTML='<img class="google-img svelte-rw4oni" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAABoVBMVEX//////v80qFNEhPX///3rQjf5vATtQTfrQjU0p1VEhPdBhvVEhPP7uwbpQzU9ffmYufHk8Pw2eu8xeefpRDM1qE5Eg/n///r3vQHmRTZDhvH6///83d7hMCHqOy/qOCzcOjL75+H/uQYhnkgeoEPh9On/9vn/7+z+5OL+9/L35Njsx8XropfpiITkZ1/aSDTiLR/eRzzqpaDpmZXaa1zeRCrjcGjyzsrqQSbst7TqsZ7iZlzmbWjpl47iY2TkLiflh4rmgHXrrK7zx7/hkZHgQD/52tDiW1PwvrDzv8Lyzb342eDeYlTvpqPyNiPdTUzginffWDLjdXX74Y/udSD1kxbtP0H86Kj2rRjjTCf1xj7sYx/+8eT68sfzhSL70m7//OL16Zr826bU4/PzxzJypu9WjuT//+n998+4zO/446L50F2fv+jx13Xk36KGrClir3jkwhNgqzrE2PjDwSmPy6GgtC5Gp0LX8txIqWdcqE6y4ruCyJVOrHM1iLmHq+w8mJzB48ZXtGs4nog/jdU9k7U6m5c2oHozmq/K4eLU7d3aD+4jAAAL3ElEQVR4nO3di3fT1h0H8Cv7Wg/bMtiRLduKZMey46QQ6sAIMKAZZYSyUrrxSkt5bSEPIIwUSOs0Xqlpt7H81btXsh3ZlqxHIrlS9D2n55T4pXzO7z50ryIDECZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwvg3xO8k43awknEbdTNuB02ggFRA3zHhn0A4bqNuxkczHALZADBdn5nEmZmpT8POA7+PjBVHCUTHoJjMfnLi5NypT8uiKDZQRFEqz382d/rEzKzyPAI964hboSYmADh948wfziIdSaK1kaRSSRQLC2fOzfa/6mhaAcBPnb5YbpSkVCoVi9FDSRVS50tSeeHClOY1R88Kog6q/seLYkOiOU6h0rGiU8oPS7fESxfq3VcePSsAJuekEoXaHcdxyEPfqmdGLc5fnlFfd6SsIO7Or362KFGxAtXVMLFKxThJvD0JxtXJj8sK5cRFEfdRSrpUmlB96T0qNW53astzsHEgKTW1tLAvZcFK83OJ+lP9KFk9vCJKhVjMiRV6pFT+fBytcBxWAH5RFpVhz5kVeqxxc8p7Lc+dCAjqlxp4IhDT4JhaDUYSP0czfsJTMM+tBHAVTc45OjWsY8eKohsL04S3A6LHUujzLi/GKJqjdSrJllUhJn2NB8TgWoHpU4spPPU8sBXqwSTxRpDrauZaqVDozNIPbBXjGqe9LCwvoQiwVJZihdT+VPwgVspZT+PPeM0rgFbgnMj1JgiHYkWXz+F5bQCtrnZm6odjRaEh4tqSsk4YPKurIp06TCuaLi+py/OBszonllKHaIXOCxGVsp0RMCsoLHHKcp51KzMwuvwlfmePnDy0AvWCxHW1DsUKV5V3XZV3VgTgr0spK1Y0elYsVkD/l6JShYIRF+rWyzPAwyHQOysezKER0IoV6rAlsbEooTQajVKJpvRL6/zZSWWzLHBWBPgCL8GYWVGxUkO6fuXkjcmpOsrM5NXTc9clUaIGW6PSrfNEAK2gAKa4mErFDSyha6Q4aXH+8l8GtgEBUT8xV5bolIrVa6jzX4Ix7Ny7bwUgvClRNDfSiiqlrpybBYKAnq0Nfj1/YUGUtFbcPJ6CBtIKfCXSHSojq1viySkwwKT1+uSKSEmxVIfq2tJ4dnI8oJoSKY4bZSWJc3XAG0hBdWo+ebOhbrbGOKVbH0dcl4JgoUQbJlWgKfHUpHLpkCGWWnAXyjSaSND0/CQf0P1BCG6I2pFvyIoTL49w0pJN3ZRSMa48lm7dEyvAf00bUqEHpE/RSZ0lKwjgX0uSerocUKsLDeOyKhSki3WjLl2vMZ4uT4LxXbrmNhX/NzS1MrpKgZNuz47qqQZDgLrHWzceWkF4p3K3TOlLFajSFetOSmERAgysFeDzZP6eQV3dLy1A6w1QbYRgnBePumy1zFbY/DffSnpWty7ywEYDDLoV/4BFISvf6WBJ8w/tVVWgrSB4xOZZResxNdRpNfACVGjVCQ+esCSrYt07f78sdU5qlKq6dcFuVY39jwJcpCKIp2pV4eTZ73Bl7Vtdsk8VYCvcs/dCkuxjSVkcxlYpDi8Bh1aaPMFE+6V17yzVtSqdtDkEBt2KJ0mNFVlBkwdKtaLKs4bLVUfT6hHJasoKc7F3KWU1ePEr+1DBtrqjLatOHis7M/PTDqoqyFb8g0p+GOubb+/HGmec9FZBtlonKzqFhSbx90Ung2CArSDYqFTYYSs2T95dANBweb0T5x/sQysA/l6pkPk8ORz2H2a/EEgfd5oV97BckyLAK1RWelZs5anpUaUnMsec5TjgfWcFiZckotKrq2emHQ+ySiaTCQeJrwqudWuuWRH8s3xe14p9ZdpMVCtHXGvu9VjuWa3rlZRitWzFKpp0EGQ1IfjPCmwYUJHkhvlRKVboN7ePNZH2XxtEZzgGya+b7oY6rStsteJHK9agCT7gTS+cOoDVMfcmDe5ZLRtaKRNNt6ziz31YVy8MrMiX5hck9KyitoKxckGyYp+Yj+oOraKhlS2r+KYP+6s7+laV0ErHSr+sKhWX26AfrV6Quuc4bOVlaDWYZSOrB8rDoZUmj/StlLmo2d9mhVad5Netz9sdWPlxzrCRN7AiNwQXrTI+tCLWDa2WXbXy4/kgb9QG2Ve8m1Zp/1nhNWQDq2duWhXTblG5uef1ysiK3DiwVdzYSvCfldCZYA1J5dn8P4FyZxljL5DOTGRGZcLIKrrmwz0vnnjK6llVyPzrrc5zRhxX2iQrE3qlhaxWfWhFEA/19rzY/PdvsnLNzAqYbTy/zejXVXzTvZ1816wAwb9kh6gq5LssE8luK01wZAWYdGjHcwZWb31YVwCvyrADViz5Q4SJRCJZtbBGHtioByEs6lmhwSCTdu8PK9y0esSS/VaV/BsZQUUi8rap1eijTmficZ0OK4GGQR/upaKs5wes3v0YUcOoPZbzo36f1LWKxlddvFDGTSvwar8NYrYfqpGuVXX7AFZoQlKMR/Ws4vFNv1o90vRX7PevGdz81GTl5gGshOeZhK5VdGLFn1YQrmupfkJCPatIdktwfMNLXlhLJPSGQeTn5l3WXLTCpznq/gRbYd/12l/HCrVCp8cMN6MGpz+5VeDiLZ7ctEKNsJJXJ6Coq2L6rJhIte3wl0InizmDc8XMW+hbK/6l2v7eaJufasVkmZqjy38geJ/L6Z5Yx6NFwb9WYLmCqHpThYHs8E4uLQbPM1H9RYhiYhX4tw0KfB61P4YZaIC9/h3avy8MXJnIqVbDPXvmLTBdcj1AXLYCL/KvGV0oHBlh8faw+HQxqj8NRT07nrT7dBzECzP8T8ZUqNPaqtn71WB6LVcsGlgd2wQ+toIQ7FYNqXAz3LGDBcGKcs5sYDUh+NkKhd8ZHAL7sZi25UaorFopTVDXKne885G+tQLt6igrNClt8QCY3rUeP0N4PxEtqlb9UagSeDnGTSov7n+1lTXusXCqTNv87pfofZr/+jkeTSSMrJLv3f7rJg+savJIKjSfkFEXb2gF1MOstdDb/FJMJJLDWMo8FJWV/63ArgmWcnbYhIDgdcCU9sk3W0pLzv4XD4PJYat4LroJ3P6qQi+sUCs0w4rI8lYbr//pHV+tvSUroynDMDs/R/WsEsmi4PpfGHpiVYuYYeHHZabVbvIDL+Wbu1uMrDrhRJiPiXgxN2SFzpqh2/cw8sQKtE1boSomy8zWdrvdVNJu77Y+yLLcc+po/bqGZ6P93VVyVf0g/1tBsF0dPRZ2wyCvqibZASiUbHbnt2Q82W9VdHu+4KEV+KB/+mwtg1rMv3P9ndbEW/VLwgJghVLbcU41aBXJ/vifvi7r2HHgxbfQekQlgBpjPhhaolJ+giYPx7rzrFxuDcAAWaE0HWMNW+GT7p8TndLKraUJAQTKyjmWTl2hysp+jMaTuWK8OJEGIGBWAmzKzrD06gqX1q9ruVwiifv13ocExIqHoInnSodmhdrhb7liRksVFCvcUPZGLJJatdKyMR9RVWkTGCuIpw4jl0ltWqGZ1v/6b6cSHCv0a/Et+1hGVZXNMk38FQ1BtFIzegHehlW2ulMbvFQyUFaoCvaYkSvwVq0iyuJzkK1w+Ja1ZYeRVlmmrfPWgbMiQNtWF69HhZedda5VDpwVirCN5qVWW+JQ61OKSvfYg2iF9xosl9ZQ85O3a0D/2ANoRQio/TS3qtY6+YGqkltGUoG0UgLhnjWtvnkCg2rK+HZ+QbXCl0o1W4z5mLjfTck72zVIHEUrJb0NLROrSBXv83QunTV8t0Bb4QOotVvMqMbI4O3Dne0mD3uXohm+XWCtlAOAPD5N3Nvd2pHlKiLbjwJVrVaZD63dPeWrqvjudumodwyyVffeq3xtr73d+rCTlTEa+k9mmK3WbruJB839G92GVvifnR6br3XSXUGAfTdPDq36bu+rfjWcwR3eQyvrOcJWFo/AVQSLcRfDCoCNp4457mJYAbDx1DHHXQwrADaeOua4i2EFwMZTxxx3MXwAYCOhlfWEVtYTWllPaGU9oZX1hFbWE1pZT2hlPaGV9YRW1hNaWU9oZT2hlfWEVtbzfxTyBnl/3XKuAAAAAElFTkSuQmCC" alt=""/> <div>Google로 시작하기</div> <div></div>',y(r,"class","login-btn svelte-rw4oni")},m(c,u){B(c,e,u),l&&l.m(e,null),v(e,t),v(e,i),v(e,s),v(e,r),o||(a=we(r,"click",n[1]),o=!0)},p(c,[u]){c[0]?l?l.p(c,u):(l=io(c),l.c(),l.m(e,t)):l&&(l.d(1),l=null)},i:$,o:$,d(c){c&&F(e),l&&l.d(),o=!1,a()}}}function Af(n,e,t){let i;Es(n,Mt,a=>t(0,i=a));const s=new de,r=el();return[i,async()=>{try{const a=await Ud(r,s),c=de.credentialFromResult(a).accessToken,u=a.user;Mt.set(u),localStorage.setItem("token",c)}catch(a){console.error(a)}}]}class Pf extends Ne{constructor(e){super(),ke(this,e,Af,Nf,ye,{})}}function Of(n){let e,t;return{c(){e=Bn("svg"),t=Bn("path"),y(t,"stroke-linecap","round"),y(t,"stroke-linejoin","round"),y(t,"d","m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"fill","none"),y(e,"viewBox","0 0 24 24"),y(e,"stroke-width","1.5"),y(e,"stroke","currentColor"),y(e,"class","w-6 h-6")},m(i,s){B(i,e,s),v(e,t)},d(i){i&&F(e)}}}function Df(n){let e,t;return{c(){e=I("img"),Wn(e.src,t="assets/home.svg")||y(e,"src",t),y(e,"alt","home.svg")},m(i,s){B(i,e,s)},d(i){i&&F(e)}}}function Lf(n){let e,t;return{c(){e=I("img"),Wn(e.src,t="assets/user.svg")||y(e,"src",t),y(e,"alt","user.svg")},m(i,s){B(i,e,s)},d(i){i&&F(e)}}}function Mf(n){let e,t;return{c(){e=Bn("svg"),t=Bn("path"),y(t,"fill-rule","evenodd"),y(t,"d","M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"),y(t,"clip-rule","evenodd"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"viewBox","0 0 24 24"),y(e,"fill","currentColor"),y(e,"class","w-6 h-6")},m(i,s){B(i,e,s),v(e,t)},d(i){i&&F(e)}}}function xf(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,p,w,b,k,C,N;function g(U,Q){return U[0]==="home"?Df:Of}let m=g(n),E=m(n);function S(U,Q){return U[0]==="my"?Mf:Lf}let O=S(n),L=O(n);return{c(){e=I("footer"),t=I("div"),i=I("button"),s=I("div"),E.c(),r=M(),o=I("div"),o.textContent="홈",a=M(),l=I("button"),l.innerHTML='<div class="footer-icons__img"><img src="assets/doc.svg" alt="doc.svg"/></div> <div class="footer-icons__desc">동네생활</div>',c=M(),u=I("button"),u.innerHTML='<div class="footer-icons__img"><img src="assets/location.svg" alt="location.svg"/></div> <div class="footer-icons__desc">내근처</div>',h=M(),d=I("button"),d.innerHTML='<div class="footer-icons__img"><img src="assets/chat.svg" alt="chat.svg"/></div> <div class="footer-icons__desc">채팅</div>',f=M(),p=I("button"),w=I("div"),L.c(),b=M(),k=I("div"),k.textContent="나의당근",y(s,"class","footer-icons__img"),y(o,"class","footer-icons__desc"),y(i,"class","footer-icons"),y(l,"class","footer-icons"),y(u,"class","footer-icons"),y(d,"class","footer-icons"),y(w,"class","footer-icons__img"),y(k,"class","footer-icons__desc"),y(p,"class","footer-icons"),y(t,"class","footer-block")},m(U,Q){B(U,e,Q),v(e,t),v(t,i),v(i,s),E.m(s,null),v(i,r),v(i,o),v(t,a),v(t,l),v(t,c),v(t,u),v(t,h),v(t,d),v(t,f),v(t,p),v(p,w),L.m(w,null),v(p,b),v(p,k),C||(N=[we(i,"click",n[1]),we(p,"click",n[2])],C=!0)},p(U,[Q]){m!==(m=g(U))&&(E.d(1),E=m(U),E&&(E.c(),E.m(s,null))),O!==(O=S(U))&&(L.d(1),L=O(U),L&&(L.c(),L.m(w,null)))},i:$,o:$,d(U){U&&F(e),E.d(),L.d(),C=!1,Ze(N)}}}function Uf(n,e,t){let{location:i}=e;const s=()=>{window.location.hash="/"},r=()=>{window.location.hash="/my"};return n.$$set=o=>{"location"in o&&t(0,i=o.location)},[i,s,r]}class Ws extends Ne{constructor(e){super(),ke(this,e,Uf,xf,ye,{location:0})}}var so={};const ro="@firebase/database",oo="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il="";function Ff(n){il=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:on(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Fe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wf(e)}}catch{}return new Bf},rt=sl("localStorage"),os=sl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Ss("@firebase/database"),Vf=function(){let n=1;return function(){return n++}}(),rl=function(n){const e=bu(n),t=new vu;t.update(e);const i=t.digest();return bs.encodeByteArray(i)},bn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=bn.apply(null,i):typeof i=="object"?e+=Z(i):e+=i,e+=" "}return e};let lt=null,ao=!0;const Hf=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Nt.logLevel=W.VERBOSE,lt=Nt.log.bind(Nt),e&&os.set("logging_enabled",!0)):typeof n=="function"?lt=n:(lt=null,os.remove("logging_enabled"))},te=function(...n){if(ao===!0&&(ao=!1,lt===null&&os.get("logging_enabled")===!0&&Hf(!0)),lt){const e=bn.apply(null,n);lt(e)}},In=function(n){return function(...e){te(n,...e)}},as=function(...n){const e="FIREBASE INTERNAL ERROR: "+bn(...n);Nt.error(e)},Me=function(...n){const e=`FIREBASE FATAL ERROR: ${bn(...n)}`;throw Nt.error(e),new Error(e)},le=function(...n){const e="FIREBASE WARNING: "+bn(...n);Nt.warn(e)},$f=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ol=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},jf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},xt="[MIN_NAME]",ft="[MAX_NAME]",$t=function(n,e){if(n===e)return 0;if(n===xt||e===ft)return-1;if(e===xt||n===ft)return 1;{const t=lo(n),i=lo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},qf=function(n,e){return n===e?0:n<e?-1:1},zt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},Bs=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Z(e[i]),t+=":",t+=Bs(n[e[i]]);return t+="}",t},al=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ue(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ll=function(n){_(!ol(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},zf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Kf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Yf=new RegExp("^-?(0*)\\d{1,10}$"),Qf=-2147483648,Xf=2147483647,lo=function(n){if(Yf.test(n)){const e=Number(n);if(e>=Qf&&e<=Xf)return e}return null},jt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw le("Exception was thrown by user callback.",t),e},Math.floor(0))}},Jf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',le(e)}}class At{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}At.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="5",cl="v",ul="s",hl="r",dl="f",fl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pl="ls",_l="p",ls="ac",gl="websocket",ml="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function tp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function yl(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let i;if(e===gl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ml)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tp(n)&&(t.ns=n.namespace);const s=[];return ue(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.counters_={}}incrementCounter(e,t=1){Fe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return iu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={},Hi={};function Hs(n){const e=n.toString();return Vi[e]||(Vi[e]=new np),Vi[e]}function ip(n,e){const t=n.toString();return Hi[t]||(Hi[t]=e()),Hi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&jt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="start",rp="close",op="pLPCommand",ap="pRTLPCB",wl="id",El="pw",bl="ser",lp="cb",cp="seg",up="ts",hp="d",dp="dframe",Il=1870,Cl=30,fp=Il-Cl,pp=25e3,_p=3e4;class Tt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=In(e),this.stats_=Hs(t),this.urlFn=l=>(this.appCheckToken&&(l[ls]=this.appCheckToken),yl(t,ml,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_p)),jf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $s((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===co)this.id=a,this.password=l;else if(o===rp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[co]="t",i[bl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[lp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[cl]=Vs,this.transportSessionId&&(i[ul]=this.transportSessionId),this.lastSessionId&&(i[pl]=this.lastSessionId),this.applicationId&&(i[_l]=this.applicationId),this.appCheckToken&&(i[ls]=this.appCheckToken),typeof location<"u"&&location.hostname&&fl.test(location.hostname)&&(i[hl]=dl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tt.forceAllow_=!0}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){return Tt.forceAllow_?!0:!Tt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zf()&&!Gf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=la(t),s=al(i,fp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[dp]="t",i[wl]=e,i[El]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $s{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vf(),window[op+this.uniqueCallbackIdentifier]=e,window[ap+this.uniqueCallbackIdentifier]=t,this.myIFrame=$s.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){te("frame writing exception"),a.stack&&te(a.stack),te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||te("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wl]=this.myID,e[El]=this.myPW,e[bl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cl+i.length<=Il;){const o=this.pendingSegs.shift();i=i+"&"+cp+s+"="+o.seg+"&"+up+s+"="+o.ts+"&"+hp+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(pp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=16384,mp=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class fe{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=In(this.connId),this.stats_=Hs(t),this.connURL=fe.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[cl]=Vs,typeof location<"u"&&location.hostname&&fl.test(location.hostname)&&(o[hl]=dl),t&&(o[ul]=t),i&&(o[pl]=i),s&&(o[ls]=s),r&&(o[_l]=r),yl(e,gl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rt.set("previous_websocket_failure",!0);try{let i;ga(),this.mySock=new ei(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ei!==null&&!fe.forceDisallow_}static previouslyFailed(){return rt.isInMemoryStorage||rt.get("previous_websocket_failure")===!0}markConnectionHealthy(){rt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=on(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=al(t,gp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fe.responsesRequiredToBeHealthy=2;fe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tt,fe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=fe&&fe.isAvailable();let i=t&&!fe.previouslyFailed();if(e.webSocketOnly&&(t||le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[fe];else{const s=this.transports_=[];for(const r of un.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);un.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}un.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=6e4,yp=5e3,wp=10*1024,Ep=100*1024,$i="t",uo="d",bp="s",ho="r",Ip="e",fo="o",po="a",_o="n",go="p",Cp="h";class Tp{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=In("c:"+this.id+":"),this.transportManager_=new un(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Zt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ep?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($i in e){const t=e[$i];t===po?this.upgradeIfSecondaryHealthy_():t===ho?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zt("t",e),i=zt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:go,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:po,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_o,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zt("t",e),i=zt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zt($i,e);if(uo in e){const i=e[uo];if(t===Cp){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===_o){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bp?this.onConnectionShutdown_(i):t===ho?this.onReset_(i):t===Ip?as("Server Error: "+i):t===fo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):as("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Vs!==i&&le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Zt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:go,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Sl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ti}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=32,vo=768;class V{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function x(){return new V("")}function A(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Xe(n){return n.pieces_.length-n.pieceNum_}function H(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new V(n.pieces_,e)}function Rl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Sp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function kl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Nl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new V(e,0)}function Y(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof V)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new V(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function oe(n,e){const t=A(n),i=A(e);if(t===null)return e;if(t===i)return oe(H(n),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function js(n,e){if(Xe(n)!==Xe(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function pe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Xe(n)>Xe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Rp{constructor(e,t){this.errorPrefix_=t,this.parts_=kl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=mi(this.parts_[i]);Al(this)}}function kp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=mi(e),Al(n)}function Np(n){const e=n.parts_.pop();n.byteLength_-=mi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Al(n){if(n.byteLength_>vo)throw new Error(n.errorPrefix_+"has a key path longer than "+vo+" bytes ("+n.byteLength_+").");if(n.parts_.length>mo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mo+") or object contains a cycle "+tt(n))}function tt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Sl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new qs}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=1e3,Ap=60*5*1e3,yo=30*1e3,Pp=1.3,Op=3e4,Dp="server_kill",wo=3;class De extends Tl{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=De.nextPersistentConnectionId_++,this.log_=In("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gt,this.maxReconnectDelay_=Ap,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ga())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Z(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new gi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;De.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Fe(e,"w")){const i=Dt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):as("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Op&&(this.reconnectDelay_=Gt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+De.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?te("getToken() completed but was canceled"):(te("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Tp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{le(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dp)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&le(h),l())}}}interrupt(e){te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ji(this.interruptReasons_)&&(this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Bs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new V(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wo&&(this.reconnectDelay_=yo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+il.replace(/\./g,"-")]=1,Cs()?e["framework.cordova"]=1:_a()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return Ji(this.interruptReasons_)&&e}}De.nextPersistentConnectionId_=0;De.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new P(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new P(xt,e),s=new P(xt,t);return this.compare(i,s)!==0}minPost(){return P.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An;class Pl extends bi{static get __EMPTY_NODE(){return An}static set __EMPTY_NODE(e){An=e}compare(e,t){return $t(e.name,t.name)}isDefinedOn(e){throw Bt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return P.MIN}maxPost(){return new P(ft,An)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new P(e,An)}toString(){return".key"}}const Pt=new Pl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class J{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??J.RED,this.left=s??ae.EMPTY_NODE,this.right=r??ae.EMPTY_NODE}copy(e,t,i,s,r){return new J(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ae.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}J.RED=!0;J.BLACK=!1;class Lp{copy(e,t,i,s,r){return this}insert(e,t,i){return new J(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ae{constructor(e,t=ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,J.BLACK,null,null))}remove(e){return new ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,J.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Pn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Pn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Pn(this.root_,null,this.comparator_,!0,e)}}ae.EMPTY_NODE=new Lp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n,e){return $t(n.name,e.name)}function zs(n,e){return $t(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs;function xp(n){cs=n}const Ol=function(n){return typeof n=="number"?"number:"+ll(n):"string:"+n},Dl=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fe(e,".sv"),"Priority must be a string or number.")}else _(n===cs||n.isEmpty(),"priority of unexpected type.");_(n===cs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;class X{constructor(e,t=X.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dl(this.priorityNode_)}static set __childrenNodeConstructor(e){Eo=e}static get __childrenNodeConstructor(){return Eo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:A(e)===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:X.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=A(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||Xe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,X.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ol(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ll(this.value_):e+=this.value_,this.lazyHash_=rl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=X.VALUE_TYPE_ORDER.indexOf(t),r=X.VALUE_TYPE_ORDER.indexOf(i);return _(s>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}X.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll,Ml;function Up(n){Ll=n}function Fp(n){Ml=n}class Wp extends bi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?$t(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return P.MIN}maxPost(){return new P(ft,new X("[PRIORITY-POST]",Ml))}makePost(e,t){const i=Ll(e);return new P(t,new X("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new Wp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=Math.log(2);class Vp{constructor(e){const t=r=>parseInt(Math.log(r)/Bp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new J(d,h.node,J.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),w=s(f+1,c);return h=n[f],d=t?t(h):h,new J(d,h.node,J.BLACK,p,w)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,w){const b=h-p,k=h;h-=p;const C=s(b+1,k),N=n[b],g=t?t(N):N;f(new J(g,N.node,w,null,C))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const w=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));w?d(b,J.BLACK):(d(b,J.BLACK),d(b,J.RED))}return u},o=new Vp(n.length),a=r(o);return new ae(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;const It={};class Oe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(It&&q,"ChildrenNode.ts has not been loaded"),ji=ji||new Oe({".priority":It},{".priority":q}),ji}get(e){const t=Dt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ae?t:null}hasIndex(e){return Fe(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Pt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(P.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ni(i,e.getCompare()):a=It;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Oe(u,c)}addToIndexes(e,t){const i=zn(this.indexes_,(s,r)=>{const o=Dt(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),s===It)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(P.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ni(a,o.getCompare())}else return It;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new P(e.name,a))),l.insert(e,e.node)}});return new Oe(i,this.indexSet_)}removeFromIndexes(e,t){const i=zn(this.indexes_,s=>{if(s===It)return s;{const r=t.get(e.name);return r?s.remove(new P(e.name,r)):s}});return new Oe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt;class T{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Dl(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Kt||(Kt=new T(new ae(zs),null,Oe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kt}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Kt:t}}getChild(e){const t=A(e);return t===null?this:this.getImmediateChild(t).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new P(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Kt:this.priorityNode_;return new T(s,o,r)}}updateChild(e,t){const i=A(e);if(i===null)return t;{_(A(e)!==".priority"||Xe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(H(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(q,(o,a)=>{t[o]=a.val(e),i++,r&&T.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ol(this.getPriority().val())+":"),this.forEachChild(q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":rl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new P(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new P(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new P(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,P.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,P.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cn?-1:0}withIndex(e){if(e===Pt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(q),s=t.getIterator(q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pt?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hp extends T{constructor(){super(new ae(zs),T.EMPTY_NODE,Oe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const Cn=new Hp;Object.defineProperties(P,{MIN:{value:new P(xt,T.EMPTY_NODE)},MAX:{value:new P(ft,Cn)}});Pl.__EMPTY_NODE=T.EMPTY_NODE;X.__childrenNodeConstructor=T;xp(Cn);Fp(Cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=!0;function ee(n,e=null){if(n===null)return T.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new X(t,ee(e))}if(!(n instanceof Array)&&$p){const t=[];let i=!1;if(ue(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ee(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new P(o,l)))}}),t.length===0)return T.EMPTY_NODE;const r=ni(t,Mp,o=>o.name,zs);if(i){const o=ni(t,q.getCompare());return new T(r,ee(e),new Oe({".priority":o},{".priority":q}))}else return new T(r,ee(e),Oe.Default)}else{let t=T.EMPTY_NODE;return ue(n,(i,s)=>{if(Fe(n,i)&&i.substring(0,1)!=="."){const r=ee(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ee(e))}}Up(ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends bi{constructor(e){super(),this.indexPath_=e,_(!D(e)&&A(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?$t(e.name,t.name):r}makePost(e,t){const i=ee(e),s=T.EMPTY_NODE.updateChild(this.indexPath_,i);return new P(t,s)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,Cn);return new P(ft,e)}toString(){return kl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp extends bi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?$t(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,t){const i=ee(e);return new P(t,i)}toString(){return".value"}}const zp=new qp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n){return{type:"value",snapshotNode:n}}function Ut(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function hn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function dn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Gp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(hn(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ut(t,i)):o.trackChildChange(dn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,r)=>{t.hasChild(s)||i.trackChildChange(hn(s,r))}),t.isLeafNode()||t.forEachChild(q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(dn(s,r,o))}else i.trackChildChange(Ut(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.indexedFilter_=new Gs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fn.getStartPost_(e),this.endPost_=fn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new P(t,i))||(i=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=T.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(T.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,a)=>{r.matches(new P(o,a))||(s=s.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new fn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new P(t,i))||(i=T.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(T.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new P(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(dn(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(hn(t,h));const w=a.updateImmediateChild(t,T.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ut(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(hn(c.name,c.node)),r.trackChildChange(Ut(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,T.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xt}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ft}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new Ks;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yp(n){return n.loadsAllData()?new Gs(n.getIndex()):n.hasLimit()?new Kp(n):new fn(n)}function bo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===zp?t="$value":n.index_===Pt?t="$key":(_(n.index_ instanceof jp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Z(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Z(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Z(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Io(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Tl{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=In("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ii.getListenId_(e,i),a={};this.listens_[o]=a;const l=bo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Dt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=ii.getListenId_(e,t);delete this.listens_[i]}get(e){const t=bo(e._queryParams),i=e._path.toString(),s=new gi;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=on(a.responseText)}catch{le("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&le("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return{value:null,children:new Map}}function Ul(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=A(e);n.children.has(i)||n.children.set(i,si());const s=n.children.get(i);e=H(e),Ul(s,e,t)}}function us(n,e,t){n.value!==null?t(e,n.value):Xp(n,(i,s)=>{const r=new V(e.toString()+"/"+i);us(s,r,t)})}function Xp(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ue(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=10*1e3,Zp=30*1e3,e_=5*60*1e3;class t_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Jp(e);const i=Co+(Zp-Co)*Math.random();Zt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ue(e,(s,r)=>{r>0&&Fe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Zt(this.reportStats_.bind(this),Math.floor(Math.random()*2*e_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_e||(_e={}));function Fl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ys(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=_e.ACK_USER_WRITE,this.source=Fl()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new V(e));return new ri(x(),t,this.revert)}}else return _(A(this.path)===e,"operationForChild called for unrelated child."),new ri(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.source=e,this.path=t,this.type=_e.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new pn(this.source,x()):new pn(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=_e.OVERWRITE}operationForChild(e){return D(this.path)?new pt(this.source,x(),this.snap.getImmediateChild(e)):new pt(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=_e.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new V(e));return t.isEmpty()?null:t.value?new pt(this.source,x(),t.value):new _n(this.source,x(),t)}else return _(A(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _n(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=A(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function i_(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Gp(o.childName,o.snapshotNode))}),Yt(n,s,"child_removed",e,i,t),Yt(n,s,"child_added",e,i,t),Yt(n,s,"child_moved",r,i,t),Yt(n,s,"child_changed",e,i,t),Yt(n,s,"value",e,i,t),s}function Yt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>r_(n,a,l)),o.forEach(a=>{const l=s_(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function s_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function r_(n,e,t){if(e.childName==null||t.childName==null)throw Bt("Should only compare child_ events.");const i=new P(e.childName,e.snapshotNode),s=new P(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,e){return{eventCache:n,serverCache:e}}function en(n,e,t,i){return Ii(new _t(e,t,i),n.serverCache)}function Wl(n,e,t,i){return Ii(n.eventCache,new _t(e,t,i))}function hs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function gt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;const o_=()=>(qi||(qi=new ae(qf)),qi);class j{constructor(e,t=o_()){this.value=e,this.children=t}static fromObject(e){let t=new j(null);return ue(e,(i,s)=>{t=t.set(new V(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:x(),value:this.value};if(D(e))return null;{const i=A(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(H(e),t);return r!=null?{path:Y(new V(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=A(e),i=this.children.get(t);return i!==null?i.subtree(H(e)):new j(null)}}set(e,t){if(D(e))return new j(t,this.children);{const i=A(e),r=(this.children.get(i)||new j(null)).set(H(e),t),o=this.children.insert(i,r);return new j(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=A(e),i=this.children.get(t);if(i){const s=i.remove(H(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new j(null):new j(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=A(e),i=this.children.get(t);return i?i.get(H(e)):null}}setTree(e,t){if(D(e))return t;{const i=A(e),r=(this.children.get(i)||new j(null)).setTree(H(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new j(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Y(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,x(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(D(e))return null;{const r=A(e),o=this.children.get(r);return o?o.findOnPath_(H(e),Y(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,x(),t)}foreachOnPath_(e,t,i){if(D(e))return this;{this.value&&i(t,this.value);const s=A(e),r=this.children.get(s);return r?r.foreachOnPath_(H(e),Y(t,s),i):new j(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Y(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.writeTree_=e}static empty(){return new ge(new j(null))}}function tn(n,e,t){if(D(e))return new ge(new j(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=oe(s,e);return r=r.updateChild(o,t),new ge(n.writeTree_.set(s,r))}else{const s=new j(t),r=n.writeTree_.setTree(e,s);return new ge(r)}}}function To(n,e,t){let i=n;return ue(t,(s,r)=>{i=tn(i,Y(e,s),r)}),i}function So(n,e){if(D(e))return ge.empty();{const t=n.writeTree_.setTree(e,new j(null));return new ge(t)}}function ds(n,e){return yt(n,e)!=null}function yt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(oe(t.path,e)):null}function Ro(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(i,s)=>{e.push(new P(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new P(i,s.value))}),e}function Ye(n,e){if(D(e))return n;{const t=yt(n,e);return t!=null?new ge(new j(t)):new ge(n.writeTree_.subtree(e))}}function fs(n){return n.writeTree_.isEmpty()}function Ft(n,e){return Bl(x(),n.writeTree_,e)}function Bl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Bl(Y(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Y(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n,e){return jl(e,n)}function a_(n,e,t,i,s){_(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=tn(n.visibleWrites,e,t)),n.lastWriteId=i}function l_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function c_(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&u_(a,i.path)?s=!1:pe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return h_(n),!0;if(i.snap)n.visibleWrites=So(n.visibleWrites,i.path);else{const a=i.children;ue(a,l=>{n.visibleWrites=So(n.visibleWrites,Y(i.path,l))})}return!0}else return!1}function u_(n,e){if(n.snap)return pe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pe(Y(n.path,t),e))return!0;return!1}function h_(n){n.visibleWrites=Vl(n.allWrites,d_,x()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function d_(n){return n.visible}function Vl(n,e,t){let i=ge.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)pe(t,o)?(a=oe(t,o),i=tn(i,a,r.snap)):pe(o,t)&&(a=oe(o,t),i=tn(i,x(),r.snap.getChild(a)));else if(r.children){if(pe(t,o))a=oe(t,o),i=To(i,a,r.children);else if(pe(o,t))if(a=oe(o,t),D(a))i=To(i,x(),r.children);else{const l=Dt(r.children,A(a));if(l){const c=l.getChild(H(a));i=tn(i,x(),c)}}}else throw Bt("WriteRecord should have .snap or .children")}}return i}function Hl(n,e,t,i,s){if(!i&&!s){const r=yt(n.visibleWrites,e);if(r!=null)return r;{const o=Ye(n.visibleWrites,e);if(fs(o))return t;if(t==null&&!ds(o,x()))return null;{const a=t||T.EMPTY_NODE;return Ft(o,a)}}}else{const r=Ye(n.visibleWrites,e);if(!s&&fs(r))return t;if(!s&&t==null&&!ds(r,x()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(pe(c.path,e)||pe(e,c.path))},a=Vl(n.allWrites,o,e),l=t||T.EMPTY_NODE;return Ft(a,l)}}}function f_(n,e,t){let i=T.EMPTY_NODE;const s=yt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ye(n.visibleWrites,e);return t.forEachChild(q,(o,a)=>{const l=Ft(Ye(r,new V(o)),a);i=i.updateImmediateChild(o,l)}),Ro(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ye(n.visibleWrites,e);return Ro(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function p_(n,e,t,i,s){_(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Y(e,t);if(ds(n.visibleWrites,r))return null;{const o=Ye(n.visibleWrites,r);return fs(o)?s.getChild(t):Ft(o,s.getChild(t))}}function __(n,e,t,i){const s=Y(e,t),r=yt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ye(n.visibleWrites,s);return Ft(o,i.getNode().getImmediateChild(t))}else return null}function g_(n,e){return yt(n.visibleWrites,e)}function m_(n,e,t,i,s,r,o){let a;const l=Ye(n.visibleWrites,e),c=yt(l,x());if(c!=null)a=c;else if(t!=null)a=Ft(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function v_(){return{visibleWrites:ge.empty(),allWrites:[],lastWriteId:-1}}function oi(n,e,t,i){return Hl(n.writeTree,n.treePath,e,t,i)}function Js(n,e){return f_(n.writeTree,n.treePath,e)}function ko(n,e,t,i){return p_(n.writeTree,n.treePath,e,t,i)}function ai(n,e){return g_(n.writeTree,Y(n.treePath,e))}function y_(n,e,t,i,s,r){return m_(n.writeTree,n.treePath,e,t,i,s,r)}function Zs(n,e,t){return __(n.writeTree,n.treePath,e,t)}function $l(n,e){return jl(Y(n.treePath,e),n.writeTree)}function jl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,dn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,hn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ut(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,dn(i,e.snapshotNode,s.oldSnap));else throw Bt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const ql=new E_;class er{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new _t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gt(this.viewCache_),r=y_(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n){return{filter:n}}function I_(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function C_(n,e,t,i,s){const r=new w_;let o,a;if(t.type===_e.OVERWRITE){const c=t;c.source.fromUser?o=ps(n,e,c.path,c.snap,i,s,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!D(c.path),o=li(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===_e.MERGE){const c=t;c.source.fromUser?o=S_(n,e,c.path,c.children,i,s,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_s(n,e,c.path,c.children,i,s,a,r))}else if(t.type===_e.ACK_USER_WRITE){const c=t;c.revert?o=N_(n,e,c.path,i,s,r):o=R_(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===_e.LISTEN_COMPLETE)o=k_(n,e,t.path,i,r);else throw Bt("Unknown operation type: "+t.type);const l=r.getChanges();return T_(e,o,l),{viewCache:o,changes:l}}function T_(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=hs(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(xl(hs(e)))}}function zl(n,e,t,i,s,r){const o=e.eventCache;if(ai(i,t)!=null)return e;{let a,l;if(D(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gt(e),u=c instanceof T?c:T.EMPTY_NODE,h=Js(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=oi(i,gt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=A(t);if(c===".priority"){_(Xe(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ko(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=H(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ko(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Zs(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return en(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function li(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(D(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=A(t);if(!l.isCompleteForPath(t)&&Xe(t)>1)return e;const p=H(t),b=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),f,b,p,ql,null)}const h=Wl(e,c,l.isFullyInitialized()||D(t),u.filtersNodes()),d=new er(s,h,r);return zl(n,h,t,s,d,a)}function ps(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new er(s,e,r);if(D(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=en(e,c,!0,n.filter.filtersNodes());else{const h=A(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=en(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=H(t),f=a.getNode().getImmediateChild(h);let p;if(D(d))p=i;else{const w=u.getCompleteChild(h);w!=null?Rl(d)===".priority"&&w.getChild(Nl(d)).isEmpty()?p=w:p=w.updateChild(d,i):p=T.EMPTY_NODE}if(f.equals(p))l=e;else{const w=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=en(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function No(n,e){return n.eventCache.isCompleteForChild(e)}function S_(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Y(t,l);No(e,A(u))&&(a=ps(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Y(t,l);No(e,A(u))||(a=ps(n,a,u,c,s,r,o))}),a}function Ao(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function _s(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;D(t)?c=i:c=new j(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Ao(n,f,d);l=li(n,l,new V(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),w=Ao(n,p,d);l=li(n,l,new V(h),w,s,r,o,a)}}),l}function R_(n,e,t,i,s,r,o){if(ai(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(D(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return li(n,e,t,l.getNode().getChild(t),s,r,a,o);if(D(t)){let c=new j(null);return l.getNode().forEachChild(Pt,(u,h)=>{c=c.set(new V(u),h)}),_s(n,e,t,c,s,r,a,o)}else return e}else{let c=new j(null);return i.foreach((u,h)=>{const d=Y(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),_s(n,e,t,c,s,r,a,o)}}function k_(n,e,t,i,s){const r=e.serverCache,o=Wl(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return zl(n,o,t,i,ql,s)}function N_(n,e,t,i,s,r){let o;if(ai(i,t)!=null)return e;{const a=new er(i,e,s),l=e.eventCache.getNode();let c;if(D(t)||A(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=oi(i,gt(e));else{const h=e.serverCache.getNode();_(h instanceof T,"serverChildren would be complete if leaf node"),u=Js(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=A(t);let h=Zs(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,H(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,T.EMPTY_NODE,H(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oi(i,gt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ai(i,x())!=null,en(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Gs(i.getIndex()),r=Yp(i);this.processor_=b_(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(T.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(T.EMPTY_NODE,a.getNode(),null),u=new _t(l,o.isFullyInitialized(),s.filtersNodes()),h=new _t(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ii(h,u),this.eventGenerator_=new n_(this.query_)}get query(){return this.query_}}function P_(n){return n.viewCache_.serverCache.getNode()}function O_(n,e){const t=gt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(A(e)).isEmpty())?t.getChild(e):null}function Po(n){return n.eventRegistrations_.length===0}function D_(n,e){n.eventRegistrations_.push(e)}function Oo(n,e,t){const i=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Do(n,e,t,i){e.type===_e.MERGE&&e.source.queryId!==null&&(_(gt(n.viewCache_),"We should always have a full cache before handling merges"),_(hs(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=C_(n.processor_,s,e,t,i);return I_(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Gl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function L_(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{i.push(Ut(r,o))}),t.isFullyInitialized()&&i.push(xl(t.getNode())),Gl(n,i,t.getNode(),e)}function Gl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return i_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class M_{constructor(){this.views=new Map}}function x_(n){_(!ci,"__referenceConstructor has already been defined"),ci=n}function U_(){return _(ci,"Reference.ts has not been loaded"),ci}function F_(n){return n.views.size===0}function tr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return _(r!=null,"SyncTree gave us an op for an invalid query."),Do(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Do(o,e,t,i));return r}}function W_(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=oi(t,s?i:null),l=!1;a?l=!0:i instanceof T?(a=Js(t,i),l=!1):(a=T.EMPTY_NODE,l=!1);const c=Ii(new _t(a,l,!1),new _t(i,s,!1));return new A_(e,c)}return o}function B_(n,e,t,i,s,r){const o=W_(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),D_(o,t),L_(o,t)}function V_(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Je(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Oo(c,t,i)),Po(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Oo(l,t,i)),Po(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Je(n)&&r.push(new(U_())(e._repo,e._path)),{removed:r,events:o}}function Kl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ot(n,e){let t=null;for(const i of n.views.values())t=t||O_(i,e);return t}function Yl(n,e){if(e._queryParams.loadsAllData())return Ci(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Ql(n,e){return Yl(n,e)!=null}function Je(n){return Ci(n)!=null}function Ci(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;function H_(n){_(!ui,"__referenceConstructor has already been defined"),ui=n}function $_(){return _(ui,"Reference.ts has not been loaded"),ui}let j_=1;class Lo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=v_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xl(n,e,t,i,s){return a_(n.pendingWriteTree_,e,t,i,s),s?Tn(n,new pt(Fl(),e,t)):[]}function ot(n,e,t=!1){const i=l_(n.pendingWriteTree_,e);if(c_(n.pendingWriteTree_,e)){let r=new j(null);return i.snap!=null?r=r.set(x(),!0):ue(i.children,o=>{r=r.set(new V(o),!0)}),Tn(n,new ri(i.path,r,t))}else return[]}function Ti(n,e,t){return Tn(n,new pt(Ys(),e,t))}function q_(n,e,t){const i=j.fromObject(t);return Tn(n,new _n(Ys(),e,i))}function z_(n,e){return Tn(n,new pn(Ys(),e))}function G_(n,e,t){const i=ir(n,t);if(i){const s=sr(i),r=s.path,o=s.queryId,a=oe(r,e),l=new pn(Qs(o),a);return rr(n,r,l)}else return[]}function gs(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ql(o,e))){const l=V_(o,e,t,i);F_(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Je(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Q_(d);for(let p=0;p<f.length;++p){const w=f[p],b=w.query,k=ec(n,w);n.listenProvider_.startListening(nn(b),hi(n,b),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(nn(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Si(d));n.listenProvider_.stopListening(nn(d),f)}))}X_(n,c)}return a}function K_(n,e,t,i){const s=ir(n,i);if(s!=null){const r=sr(s),o=r.path,a=r.queryId,l=oe(o,e),c=new pt(Qs(a),l,t);return rr(n,o,c)}else return[]}function Y_(n,e,t,i){const s=ir(n,i);if(s){const r=sr(s),o=r.path,a=r.queryId,l=oe(o,e),c=j.fromObject(t),u=new _n(Qs(a),l,c);return rr(n,o,u)}else return[]}function Mo(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const p=oe(d,s);r=r||Ot(f,p),o=o||Je(f)});let a=n.syncPointTree_.get(s);a?(o=o||Je(a),r=r||Ot(a,x())):(a=new M_,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=T.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const w=Ot(p,x());w&&(r=r.updateImmediateChild(f,w))}));const c=Ql(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Si(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=J_();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Xs(n.pendingWriteTree_,s);let h=B_(a,e,t,u,r,l);if(!c&&!o&&!i){const d=Yl(a,e);h=h.concat(Z_(n,e,d))}return h}function nr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=oe(o,e),c=Ot(a,l);if(c)return c});return Hl(s,e,r,t,!0)}function Tn(n,e){return Jl(e,n.syncPointTree_,null,Xs(n.pendingWriteTree_,x()))}function Jl(n,e,t,i){if(D(n.path))return Zl(n,e,t,i);{const s=e.get(x());t==null&&s!=null&&(t=Ot(s,x()));let r=[];const o=A(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=$l(i,o);r=r.concat(Jl(a,l,c,u))}return s&&(r=r.concat(tr(s,n,i,t))),r}}function Zl(n,e,t,i){const s=e.get(x());t==null&&s!=null&&(t=Ot(s,x()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=$l(i,o),u=n.operationForChild(o);u&&(r=r.concat(Zl(u,a,l,c)))}),s&&(r=r.concat(tr(s,n,i,t))),r}function ec(n,e){const t=e.query,i=hi(n,t);return{hashFn:()=>(P_(e)||T.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?G_(n,t._path,i):z_(n,t._path);{const r=Kf(s,t);return gs(n,t,null,r)}}}}function hi(n,e){const t=Si(e);return n.queryToTagMap.get(t)}function Si(n){return n._path.toString()+"$"+n._queryIdentifier}function ir(n,e){return n.tagToQueryMap.get(e)}function sr(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new V(n.substr(0,e))}}function rr(n,e,t){const i=n.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const s=Xs(n.pendingWriteTree_,e);return tr(i,t,s,null)}function Q_(n){return n.fold((e,t,i)=>{if(t&&Je(t))return[Ci(t)];{let s=[];return t&&(s=Kl(t)),ue(i,(r,o)=>{s=s.concat(o)}),s}})}function nn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new($_())(n._repo,n._path):n}function X_(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Si(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function J_(){return j_++}function Z_(n,e,t){const i=e._path,s=hi(n,e),r=ec(n,t),o=n.listenProvider_.startListening(nn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)_(!Je(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!D(c)&&u&&Je(u))return[Ci(u).query];{let d=[];return u&&(d=d.concat(Kl(u).map(f=>f.query))),ue(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(nn(u),hi(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new or(t)}node(){return this.node_}}class ar{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Y(this.path_,e);return new ar(this.syncTree_,t)}node(){return nr(this.syncTree_,this.path_)}}const eg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},xo=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return tg(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ng(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},tg=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},ng=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const s=e.node();if(_(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ig=function(n,e,t,i){return lr(e,new ar(t,n),i)},tc=function(n,e,t){return lr(n,new or(e),t)};function lr(n,e,t){const i=n.getPriority().val(),s=xo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=xo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new X(a,ee(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new X(s))),o.forEachChild(q,(a,l)=>{const c=lr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ur(n,e){let t=e instanceof V?e:new V(e),i=n,s=A(t);for(;s!==null;){const r=Dt(i.node.children,s)||{children:{},childCount:0};i=new cr(s,i,r),t=H(t),s=A(t)}return i}function qt(n){return n.node.value}function nc(n,e){n.node.value=e,ms(n)}function ic(n){return n.node.childCount>0}function sg(n){return qt(n)===void 0&&!ic(n)}function Ri(n,e){ue(n.node.children,(t,i)=>{e(new cr(t,n,i))})}function sc(n,e,t,i){t&&!i&&e(n),Ri(n,s=>{sc(s,e,!0,i)}),t&&i&&e(n)}function rg(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Sn(n){return new V(n.parent===null?n.name:Sn(n.parent)+"/"+n.name)}function ms(n){n.parent!==null&&og(n.parent,n.name,n)}function og(n,e,t){const i=sg(t),s=Fe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ms(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ms(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=/[\[\].#$\/\u0000-\u001F\u007F]/,lg=/[\[\].#$\u0000-\u001F\u007F]/,zi=10*1024*1024,rc=function(n){return typeof n=="string"&&n.length!==0&&!ag.test(n)},oc=function(n){return typeof n=="string"&&n.length!==0&&!lg.test(n)},cg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oc(n)},ac=function(n,e,t,i){i&&e===void 0||hr(Ts(n,"value"),e,t)},hr=function(n,e,t){const i=t instanceof V?new Rp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tt(i));if(typeof e=="function")throw new Error(n+"contains a function "+tt(i)+" with contents = "+e.toString());if(ol(e))throw new Error(n+"contains "+e.toString()+" "+tt(i));if(typeof e=="string"&&e.length>zi/3&&mi(e)>zi)throw new Error(n+"contains a string greater than "+zi+" utf8 bytes "+tt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ue(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!rc(o)))throw new Error(n+" contains an invalid key ("+o+") "+tt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kp(i,o),hr(n,a,i),Np(i)}),s&&r)throw new Error(n+' contains ".value" child '+tt(i)+" in addition to actual children.")}},lc=function(n,e,t,i){if(!(i&&t===void 0)&&!oc(t))throw new Error(Ts(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ug=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lc(n,e,t,i)},cc=function(n,e){if(A(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},hg=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!cg(t))throw new Error(Ts(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dr(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!js(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function uc(n,e,t){dr(n,t),hc(n,i=>js(i,e))}function xe(n,e,t){dr(n,t),hc(n,i=>pe(i,e)||pe(e,i))}function hc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(fg(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function fg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();lt&&te("event: "+t.toString()),jt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="repo_interrupt",_g=25;class gg{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new cr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mg(n,e,t){if(n.stats_=Hs(n.repoInfo_),n.forceRestClient_||Jf())n.server_=new ii(n.repoInfo_,(i,s,r,o)=>{Uo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new De(n.repoInfo_,e,(i,s,r,o)=>{Uo(n,i,s,r,o)},i=>{Fo(n,i)},i=>{vg(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=ip(n.repoInfo_,()=>new t_(n.stats_,n.server_)),n.infoData_=new Qp,n.infoSyncTree_=new Lo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Ti(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pr(n,"connected",!1),n.serverSyncTree_=new Lo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);xe(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function dc(n){const t=n.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function fr(n){return eg({timestamp:dc(n)})}function Uo(n,e,t,i,s){n.dataUpdateCount++;const r=new V(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=zn(t,c=>ee(c));o=Y_(n.serverSyncTree_,r,l,s)}else{const l=ee(t);o=K_(n.serverSyncTree_,r,l,s)}else if(i){const l=zn(t,c=>ee(c));o=q_(n.serverSyncTree_,r,l)}else{const l=ee(t);o=Ti(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ki(n,r)),xe(n.eventQueue_,a,o)}function Fo(n,e){pr(n,"connected",e),e===!1&&wg(n)}function vg(n,e){ue(e,(t,i)=>{pr(n,t,i)})}function pr(n,e,t){const i=new V("/.info/"+e),s=ee(t);n.infoData_.updateSnapshot(i,s);const r=Ti(n.infoSyncTree_,i,s);xe(n.eventQueue_,i,r)}function fc(n){return n.nextWriteId_++}function yg(n,e,t,i,s){_r(n,"set",{path:e.toString(),value:t,priority:i});const r=fr(n),o=ee(t,i),a=nr(n.serverSyncTree_,e),l=tc(o,a,r),c=fc(n),u=Xl(n.serverSyncTree_,e,l,c,!0);dr(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||le("set at "+e+" failed: "+d);const w=ot(n.serverSyncTree_,c,!p);xe(n.eventQueue_,e,w),Ig(n,s,d,f)});const h=vc(n,e);ki(n,h),xe(n.eventQueue_,h,[])}function wg(n){_r(n,"onDisconnectEvents");const e=fr(n),t=si();us(n.onDisconnect_,x(),(s,r)=>{const o=ig(s,r,n.serverSyncTree_,e);Ul(t,s,o)});let i=[];us(t,x(),(s,r)=>{i=i.concat(Ti(n.serverSyncTree_,s,r));const o=vc(n,s);ki(n,o)}),n.onDisconnect_=si(),xe(n.eventQueue_,x(),i)}function Eg(n,e,t){let i;A(e._path)===".info"?i=Mo(n.infoSyncTree_,e,t):i=Mo(n.serverSyncTree_,e,t),uc(n.eventQueue_,e._path,i)}function Wo(n,e,t){let i;A(e._path)===".info"?i=gs(n.infoSyncTree_,e,t):i=gs(n.serverSyncTree_,e,t),uc(n.eventQueue_,e._path,i)}function bg(n){n.persistentConnection_&&n.persistentConnection_.interrupt(pg)}function _r(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),te(t,...e)}function Ig(n,e,t,i){e&&jt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function pc(n,e,t){return nr(n.serverSyncTree_,e,t)||T.EMPTY_NODE}function gr(n,e=n.transactionQueueTree_){if(e||Ni(n,e),qt(e)){const t=gc(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Cg(n,Sn(e),t)}else ic(e)&&Ri(e,t=>{gr(n,t)})}function Cg(n,e,t){const i=t.map(c=>c.currentWriteId),s=pc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=oe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{_r(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(ot(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ni(n,ur(n.transactionQueueTree_,e)),gr(n,n.transactionQueueTree_),xe(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)jt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{le("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}ki(n,e)}},o)}function ki(n,e){const t=_c(n,e),i=Sn(t),s=gc(n,t);return Tg(n,s,i),i}function Tg(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=oe(t,l.path);let u=!1,h;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(ot(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_g)u=!0,h="maxretry",s=s.concat(ot(n.serverSyncTree_,l.currentWriteId,!0));else{const d=pc(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){hr("transaction failed: Data returned ",f,l.path);let p=ee(f);typeof f=="object"&&f!=null&&Fe(f,".priority")||(p=p.updatePriority(d.getPriority()));const b=l.currentWriteId,k=fr(n),C=tc(p,d,k);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=C,l.currentWriteId=fc(n),o.splice(o.indexOf(b),1),s=s.concat(Xl(n.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),s=s.concat(ot(n.serverSyncTree_,b,!0))}else u=!0,h="nodata",s=s.concat(ot(n.serverSyncTree_,l.currentWriteId,!0))}xe(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ni(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)jt(i[a]);gr(n,n.transactionQueueTree_)}function _c(n,e){let t,i=n.transactionQueueTree_;for(t=A(e);t!==null&&qt(i)===void 0;)i=ur(i,t),e=H(e),t=A(e);return i}function gc(n,e){const t=[];return mc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function mc(n,e,t){const i=qt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ri(e,s=>{mc(n,s,t)})}function Ni(n,e){const t=qt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,nc(e,t.length>0?t:void 0)}Ri(e,i=>{Ni(n,i)})}function vc(n,e){const t=Sn(_c(n,e)),i=ur(n.transactionQueueTree_,e);return rg(i,s=>{Gi(n,s)}),Gi(n,i),sc(i,s=>{Gi(n,s)}),t}function Gi(n,e){const t=qt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ot(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?nc(e,void 0):t.length=r+1,xe(n.eventQueue_,Sn(e),s);for(let o=0;o<i.length;o++)jt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Rg(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):le(`Invalid query segment '${t}' in query '${n}'`)}return e}const Bo=function(n,e){const t=kg(n),i=t.namespace;t.domain==="firebase.com"&&Me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||$f();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new vl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new V(t.pathString)}},kg=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=Sg(n.substring(u,h)));const d=Rg(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ng=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Vo.charAt(t%64),t=Math.floor(t/64);_(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Vo.charAt(e[s]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class wc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return D(this._path)?null:Rl(this._path)}get ref(){return new We(this._repo,this._path)}get _queryIdentifier(){const e=Io(this._queryParams),t=Bs(e);return t==="{}"?"default":t}get _queryObject(){return Io(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof mr))return!1;const t=this._repo===e._repo,i=js(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sp(this._path)}}class We extends mr{constructor(e,t){super(e,t,new Ks,!1)}get parent(){const e=Nl(this._path);return e===null?null:new We(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new V(e),i=Wt(this.ref,e);return new gn(this._node.getChild(t),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new gn(s,Wt(this.ref,i),q)))}hasChild(e){const t=new V(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ec(n,e){return n=ie(n),n._checkNotDeleted("ref"),e!==void 0?Wt(n._root,e):n._root}function Wt(n,e){return n=ie(n),A(n._path)===null?ug("child","path",e,!1):lc("child","path",e,!1),new We(n._repo,Y(n._path,e))}function Pg(n,e){n=ie(n),cc("push",n._path),ac("push",e,n._path,!0);const t=dc(n._repo),i=Ng(t),s=Wt(n,i),r=Wt(n,i);let o;return e!=null?o=Og(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Og(n,e){n=ie(n),cc("set",n._path),ac("set",e,n._path,!1);const t=new gi;return yg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class vr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new yc("value",this,new gn(e.snapshotNode,new We(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wc(this,e,t):null}matches(e){return e instanceof vr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class yr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wc(this,e,t):null}createEvent(e,t){_(e.childName!=null,"Child events should have a childName.");const i=Wt(new We(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new yc(e.type,this,new gn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof yr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Dg(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{Wo(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Ag(t,r||void 0),a=e==="value"?new vr(o):new yr(e,o);return Eg(n._repo,n,a),()=>Wo(n._repo,n,a)}function Lg(n,e,t,i){return Dg(n,"value",e,t,i)}x_(We);H_(We);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="FIREBASE_DATABASE_EMULATOR_HOST",vs={};let xg=!1;function Ug(n,e,t,i){n.repoInfo_=new vl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Fg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Bo(r,s),a=o.repoInfo,l,c;typeof process<"u"&&so&&(c=so[Mg]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Bo(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new At(At.OWNER):new ep(n.name,n.options,e);hg("Invalid Firebase Database URL",o),D(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Bg(a,n,u,new Zf(n.name,t));return new Vg(h,n)}function Wg(n,e){const t=vs[e];(!t||t[n.key]!==n)&&Me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),bg(n),delete t[n.key]}function Bg(n,e,t,i){let s=vs[e.name];s||(s={},vs[e.name]=s);let r=s[n.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new gg(n,xg,t,i),s[n.toURLString()]=r,r}class Vg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new We(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function bc(n=ks(),e){const t=vi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=ha("database");i&&Hg(t,...i)}return t}function Hg(n,e,t,i={}){n=ie(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Me("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new At(At.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:pa(i.mockUserToken,n.app.options.projectId);r=new At(o)}Ug(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n){Ff(vt),ht(new Qe("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Fg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ie(ro,oo,n),Ie(ro,oo,"esm2017")}De.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};De.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};$g();function Ho(n,e,t){const i=n.slice();return i[7]=e[t],i}function $o(n){var s;let e,t=((s=n[1])==null?void 0:s.displayName)+"",i;return{c(){e=I("div"),i=Ee(t)},m(r,o){B(r,e,o),v(e,i)},p(r,o){var a;o&2&&t!==(t=((a=r[1])==null?void 0:a.displayName)+"")&&nt(i,t)},d(r){r&&F(e)}}}function jo(n){let e,t,i,s,r,o,a,l,c=n[7].title+"",u,h,d,f=n[7].place+"",p,w,b=n[4](n[7].insertAt)+"",k,C,N,g=n[7].price+"",m,E,S,O=n[7].description+"",L;return{c(){e=I("div"),t=I("div"),i=I("img"),o=M(),a=I("div"),l=I("div"),u=Ee(c),h=M(),d=I("div"),p=Ee(f),w=M(),k=Ee(b),C=M(),N=I("div"),m=Ee(g),E=M(),S=I("div"),L=Ee(O),Wn(i.src,s=n[7].imgUrl)||y(i,"src",s),y(i,"alt",r=n[7].title),y(t,"class","item-list__img"),y(l,"class","item-list__info-title"),y(d,"class","item-list__info-meta"),y(N,"class","item-list__info-price"),y(a,"class","item-list__info"),y(e,"class","item-list")},m(U,Q){B(U,e,Q),v(e,t),v(t,i),v(e,o),v(e,a),v(a,l),v(l,u),v(a,h),v(a,d),v(d,p),v(d,w),v(d,k),v(a,C),v(a,N),v(N,m),v(a,E),v(a,S),v(S,L)},p(U,Q){Q&1&&!Wn(i.src,s=U[7].imgUrl)&&y(i,"src",s),Q&1&&r!==(r=U[7].title)&&y(i,"alt",r),Q&1&&c!==(c=U[7].title+"")&&nt(u,c),Q&1&&f!==(f=U[7].place+"")&&nt(p,f),Q&1&&b!==(b=U[4](U[7].insertAt)+"")&&nt(k,b),Q&1&&g!==(g=U[7].price+"")&&nt(m,g),Q&1&&O!==(O=U[7].description+"")&&nt(L,O)},d(U){U&&F(e)}}}function jg(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,p,w,b,k,C=n[1]&&$o(n),N=Pr(n[0]),g=[];for(let m=0;m<N.length;m+=1)g[m]=jo(Ho(n,N,m));return p=new Ws({props:{location:"home"}}),{c(){e=I("header"),C&&C.c(),t=M(),i=I("div"),s=I("div"),s.textContent=`${n[2]}:${n[3]}`,r=M(),o=I("div"),o.innerHTML='<img src="assets/chart-bar.svg" alt="chart-bar"/> <img src="assets/wifi.svg" alt="wifi.svg"/> <img src="assets/battery.svg" alt="battery.svg"/>',a=M(),l=I("div"),l.innerHTML='<div class="menu-bar__location"><div>역삼1동</div> <div class="menu-bar__location-icon"><img src="assets/arrow.svg" alt="arrow.svg"/></div></div> <div class="menu-bar__icons"><img src="assets/search.svg" alt="search.svg"/> <img src="assets/menu.svg" alt="menu.svg"/> <img src="assets/aleart.svg" alt="aleart.svg"/></div>',c=M(),u=I("main");for(let m=0;m<g.length;m+=1)g[m].c();h=M(),d=I("a"),d.textContent="+ 글쓰기",f=M(),Se(p.$$.fragment),w=M(),b=I("div"),b.textContent="화면 사이즈를 줄여주세요.",y(s,"class","info-bar__time svelte-19kx2d2"),y(o,"class","info-bar__icons"),y(i,"class","info-bar"),y(l,"class","menu-bar"),y(d,"class","write-btn"),y(d,"href","#/write"),y(b,"class","media-info-msg")},m(m,E){B(m,e,E),C&&C.m(e,null),v(e,t),v(e,i),v(i,s),v(i,r),v(i,o),v(e,a),v(e,l),B(m,c,E),B(m,u,E);for(let S=0;S<g.length;S+=1)g[S]&&g[S].m(u,null);v(u,h),v(u,d),B(m,f,E),me(p,m,E),B(m,w,E),B(m,b,E),k=!0},p(m,[E]){if(m[1]?C?C.p(m,E):(C=$o(m),C.c(),C.m(e,t)):C&&(C.d(1),C=null),E&17){N=Pr(m[0]);let S;for(S=0;S<N.length;S+=1){const O=Ho(m,N,S);g[S]?g[S].p(O,E):(g[S]=jo(O),g[S].c(),g[S].m(u,h))}for(;S<g.length;S+=1)g[S].d(1);g.length=N.length}},i(m){k||(re(p.$$.fragment,m),k=!0)},o(m){ce(p.$$.fragment,m),k=!1},d(m){m&&(F(e),F(c),F(u),F(f),F(w),F(b)),C&&C.d(),$c(g,m),ve(p,m)}}}function qg(n,e,t){let i,s;Es(n,Mt,u=>t(1,s=u));let r=new Date().getHours(),o=new Date().getMinutes();const a=u=>{const h=new Date().getTime()-324e5,d=new Date(h-u),f=d.getHours(),p=d.getMinutes(),w=d.getSeconds();return f>0?`${f}시간 전`:p>0?`${p}분 전`:w>0?`${w}초 전`:"방금 전"},l=bc(),c=Ec(l,"items/");return na(()=>{Lg(c,u=>{const h=u.val();t(0,i=Object.values(h))})}),t(0,i=[]),[i,s,r,o,a]}class zg extends Ne{constructor(e){super(),ke(this,e,qg,jg,ye,{})}}function Gg(n){let e;return{c(){e=I("div"),e.textContent="잘못된 경로입니다."},m(t,i){B(t,e,i)},p:$,i:$,o:$,d(t){t&&F(e)}}}class Kg extends Ne{constructor(e){super(),ke(this,e,null,Gg,ye,{})}}function Yg(n){let e;return{c(){e=I("form"),e.innerHTML='<div>회원가입</div> <div><label for="id">아이디</label> <input type="text" id="id" name="id" required=""/></div> <div><label for="password">패스워드</label> <input type="password" id="password" name="password" required=""/></div> <div><label for="password2">패스워드 확인</label> <input type="password" id="password2" name="password2" required=""/></div> <div><label for="name">이름</label> <input type="text" id="name" name="name" required=""/></div> <div><label for="email">이메일</label> <input type="email" id="email" name="email" required=""/></div> <div><button type="submit">회원가입</button></div> <div id="info"></div>',y(e,"id","signup-form"),y(e,"action","/signup"),y(e,"method","post")},m(t,i){B(t,e,i)},p:$,i:$,o:$,d(t){t&&F(e)}}}class Qg extends Ne{constructor(e){super(),ke(this,e,null,Yg,ye,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="firebasestorage.googleapis.com",Cc="storageBucket",Xg=2*60*1e3,Jg=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G extends Ue{constructor(e,t,i=0){super(Ki(e),`Firebase Storage: ${t} (${Ki(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,G.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ki(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var z;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(z||(z={}));function Ki(n){return"storage/"+n}function wr(){const n="An unknown error occurred, please check the error payload for server response.";return new G(z.UNKNOWN,n)}function Zg(n){return new G(z.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function em(n){return new G(z.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tm(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new G(z.UNAUTHENTICATED,n)}function nm(){return new G(z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function im(n){return new G(z.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function sm(){return new G(z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rm(){return new G(z.CANCELED,"User canceled the upload/download.")}function om(n){return new G(z.INVALID_URL,"Invalid URL '"+n+"'.")}function am(n){return new G(z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function lm(){return new G(z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Cc+"' property when initializing the app?")}function cm(){return new G(z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function um(){return new G(z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hm(n){return new G(z.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ys(n){return new G(z.INVALID_ARGUMENT,n)}function Tc(){return new G(z.APP_DELETED,"The Firebase app was deleted.")}function dm(n){return new G(z.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function sn(n,e){return new G(z.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Qt(n){throw new G(z.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=he.makeFromUrl(e,t)}catch{return new he(e,"")}if(i.path==="")return i;throw am(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(g){g.path_=decodeURIComponent(g.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},w=t===Ic?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",k=new RegExp(`^https?://${w}/${s}/${b}`,"i"),N=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let g=0;g<N.length;g++){const m=N[g],E=m.regex.exec(e);if(E){const S=E[m.indices.bucket];let O=E[m.indices.path];O||(O=""),i=new he(S,O),m.postModify(i);break}}if(i==null)throw om(e);return i}}class fm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(n,e,t){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){s=setTimeout(()=>{s=null,n(f,l())},b)}function d(){r&&clearTimeout(r)}function f(b,...k){if(c){d();return}if(b){d(),u.call(null,b,...k);return}if(l()||o){d(),u.call(null,b,...k);return}i<64&&(i*=2);let N;a===1?(a=2,N=0):N=(i+Math.random())*1e3,h(N)}let p=!1;function w(b){p||(p=!0,d(),!c&&(s!==null?(b||(a=2),clearTimeout(s),h(0)):b||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,w(!0)},t),w}function _m(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){return n!==void 0}function mm(n){return typeof n=="object"&&!Array.isArray(n)}function Er(n){return typeof n=="string"||n instanceof String}function qo(n){return br()&&n instanceof Blob}function br(){return typeof Blob<"u"}function zo(n,e,t,i){if(i<e)throw ys(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw ys(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Sc(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ct||(ct={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new On(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ct.NO_ERROR,l=r.getStatus();if(!a||vm(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ct.ABORT;i(!1,new On(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new On(c,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());gm(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=wr();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Tc():rm();o(l)}else{const l=sm();o(l)}};this.canceled_?t(!1,new On(!1,null,!0)):this.backoffId_=pm(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_m(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class On{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function wm(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Em(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bm(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Im(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Cm(n,e,t,i,s,r,o=!0){const a=Sc(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return bm(c,e),wm(c,t),Em(c,r),Im(c,i),new ym(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Sm(...n){const e=Tm();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(br())return new Blob(n);throw new G(z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Rm(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n){if(typeof atob>"u")throw hm("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yi{constructor(e,t){this.data=e,this.contentType=t||null}}function Nm(n,e){switch(n){case be.RAW:return new Yi(Rc(e));case be.BASE64:case be.BASE64URL:return new Yi(kc(n,e));case be.DATA_URL:return new Yi(Pm(e),Om(e))}throw wr()}function Rc(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Am(n){let e;try{e=decodeURIComponent(n)}catch{throw sn(be.DATA_URL,"Malformed data URL.")}return Rc(e)}function kc(n,e){switch(n){case be.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw sn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case be.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw sn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=km(e)}catch(s){throw s.message.includes("polyfill")?s:sn(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Nc{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw sn(be.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=Dm(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Pm(n){const e=new Nc(n);return e.base64?kc(be.BASE64,e.rest):Am(e.rest)}function Om(n){return new Nc(n).contentType}function Dm(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){let i=0,s="";qo(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(qo(this.data_)){const i=this.data_,s=Rm(i,e,t);return s===null?null:new ze(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new ze(i,!0)}}static getBlob(...e){if(br()){const t=e.map(i=>i instanceof ze?i.data_:i);return new ze(Sm.apply(null,t))}else{const t=e.map(o=>Er(o)?Nm(be.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[r++]=o[a]}),new ze(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n){let e;try{e=JSON.parse(n)}catch{return null}return mm(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Mm(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Pc(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(n,e){return e}class se{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||xm}}let Dn=null;function Um(n){return!Er(n)||n.length<2?n:Pc(n)}function Oc(){if(Dn)return Dn;const n=[];n.push(new se("bucket")),n.push(new se("generation")),n.push(new se("metageneration")),n.push(new se("name","fullPath",!0));function e(r,o){return Um(o)}const t=new se("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new se("size");return s.xform=i,n.push(s),n.push(new se("timeCreated")),n.push(new se("updated")),n.push(new se("md5Hash",null,!0)),n.push(new se("cacheControl",null,!0)),n.push(new se("contentDisposition",null,!0)),n.push(new se("contentEncoding",null,!0)),n.push(new se("contentLanguage",null,!0)),n.push(new se("contentType",null,!0)),n.push(new se("metadata","customMetadata",!0)),Dn=n,Dn}function Fm(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new he(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function Wm(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return Fm(i,n),i}function Dc(n,e,t){const i=Ac(e);return i===null?null:Wm(n,i,t)}function Bm(n,e,t,i){const s=Ac(e);if(s===null||!Er(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=n.bucket,h=n.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Ir(d,t,i),p=Sc({alt:"media",token:c});return f+p})[0]}function Vm(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Lc{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n){if(!n)throw wr()}function Hm(n,e){function t(i,s){const r=Dc(n,s,e);return Mc(r!==null),r}return t}function $m(n,e){function t(i,s){const r=Dc(n,s,e);return Mc(r!==null),Bm(r,s,n.host,n._protocol)}return t}function xc(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=nm():s=tm():t.getStatus()===402?s=em(n.bucket):t.getStatus()===403?s=im(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function jm(n){const e=xc(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=Zg(n.path)),r.serverResponse=s.serverResponse,r}return t}function qm(n,e,t){const i=e.fullServerUrl(),s=Ir(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Lc(s,r,$m(n,t),o);return a.errorHandler=jm(e),a}function zm(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Gm(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=zm(null,e)),i}function Km(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let g=0;g<2;g++)N=N+Math.random().toString().slice(2);return N}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Gm(e,i,s),u=Vm(c,t),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=ze.getBlob(h,i,d);if(f===null)throw cm();const p={name:c.fullPath},w=Ir(r,n.host,n._protocol),b="POST",k=n.maxUploadRetryTime,C=new Lc(w,b,Hm(n,t),k);return C.urlParams=p,C.headers=o,C.body=f.uploadData(),C.errorHandler=xc(e),C}class Ym{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ct.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ct.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ct.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s){if(this.sent_)throw Qt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Qm extends Ym{initXhr(){this.xhr_.responseType="text"}}function Uc(){return new Qm}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this._service=e,t instanceof he?this._location=t:this._location=he.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new mt(e,t)}get root(){const e=new he(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Pc(this._location.path)}get storage(){return this._service}get parent(){const e=Lm(this._location.path);if(e===null)return null;const t=new he(this._location.bucket,e);return new mt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw dm(e)}}function Xm(n,e,t){n._throwIfRoot("uploadBytes");const i=Km(n.storage,n._location,Oc(),new ze(e,!0),t);return n.storage.makeRequestWithTokens(i,Uc).then(s=>({metadata:s,ref:n}))}function Jm(n){n._throwIfRoot("getDownloadURL");const e=qm(n.storage,n._location,Oc());return n.storage.makeRequestWithTokens(e,Uc).then(t=>{if(t===null)throw um();return t})}function Zm(n,e){const t=Mm(n._location.path,e),i=new he(n._location.bucket,t);return new mt(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){return/^[A-Za-z]+:\/\//.test(n)}function tv(n,e){return new mt(n,e)}function Fc(n,e){if(n instanceof Cr){const t=n;if(t._bucket==null)throw lm();const i=new mt(t,t._bucket);return e!=null?Fc(i,e):i}else return e!==void 0?Zm(n,e):n}function nv(n,e){if(e&&ev(e)){if(n instanceof Cr)return tv(n,e);throw ys("To use ref(service, url), the first argument must be a Storage instance.")}else return Fc(n,e)}function Go(n,e){const t=e==null?void 0:e[Cc];return t==null?null:he.makeFromBucketSpec(t,n)}function iv(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:pa(s,n.app.options.projectId))}class Cr{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Ic,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xg,this._maxUploadRetryTime=Jg,this._requests=new Set,s!=null?this._bucket=he.makeFromBucketSpec(s,this._host):this._bucket=Go(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=he.makeFromBucketSpec(this._url,e):this._bucket=Go(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mt(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new fm(Tc());{const o=Cm(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Ko="@firebase/storage",Yo="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="storage";function sv(n,e,t){return n=ie(n),Xm(n,e,t)}function rv(n){return n=ie(n),Jm(n)}function ov(n,e){return n=ie(n),nv(n,e)}function av(n=ks(),e){n=ie(n);const i=vi(n,Wc).getImmediate({identifier:e}),s=ha("storage");return s&&lv(i,...s),i}function lv(n,e,t,i={}){iv(n,e,t,i)}function cv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Cr(t,i,s,e,vt)}function uv(){ht(new Qe(Wc,cv,"PUBLIC").setMultipleInstances(!0)),Ie(Ko,Yo,""),Ie(Ko,Yo,"esm2017")}uv();function hv(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,p,w,b,k,C,N,g,m,E,S,O,L,U,Q,Ai,wt,Rn,Pi,Sr;return wt=new Ws({props:{location:"write"}}),{c(){e=I("form"),t=I("div"),i=I("label"),i.textContent="이미지",s=M(),r=I("input"),o=M(),a=I("div"),l=I("label"),l.textContent="제목",c=M(),u=I("input"),h=M(),d=I("div"),f=I("label"),f.textContent="가격",p=M(),w=I("input"),b=M(),k=I("div"),C=I("label"),C.textContent="설명",N=M(),g=I("input"),m=M(),E=I("div"),S=I("label"),S.textContent="장소",O=M(),L=I("input"),U=M(),Q=I("div"),Q.innerHTML='<button class="write-button svelte-kx3ykj" type="submit">글쓰기 완료</button>',Ai=M(),Se(wt.$$.fragment),y(i,"for","image"),y(r,"type","file"),y(r,"id","image"),y(r,"name","image"),y(l,"for","title"),y(u,"type","text"),y(u,"id","title"),y(u,"name","title"),y(f,"for","price"),y(w,"type","number"),y(w,"id","price"),y(w,"name","price"),y(C,"for","description"),y(g,"type","text"),y(g,"id","description"),y(g,"name","description"),y(S,"for","place"),y(L,"type","text"),y(L,"id","place"),y(L,"name","place"),y(e,"id","write-form")},m(K,Be){B(K,e,Be),v(e,t),v(t,i),v(t,s),v(t,r),v(e,o),v(e,a),v(a,l),v(a,c),v(a,u),Ve(u,n[0]),v(e,h),v(e,d),v(d,f),v(d,p),v(d,w),Ve(w,n[1]),v(e,b),v(e,k),v(k,C),v(k,N),v(k,g),Ve(g,n[2]),v(e,m),v(e,E),v(E,S),v(E,O),v(E,L),Ve(L,n[3]),v(e,U),v(e,Q),B(K,Ai,Be),me(wt,K,Be),Rn=!0,Pi||(Sr=[we(r,"change",n[6]),we(u,"input",n[7]),we(w,"input",n[8]),we(g,"input",n[9]),we(L,"input",n[10]),we(e,"submit",jc(n[5]))],Pi=!0)},p(K,[Be]){Be&1&&u.value!==K[0]&&Ve(u,K[0]),Be&2&&ta(w.value)!==K[1]&&Ve(w,K[1]),Be&4&&g.value!==K[2]&&Ve(g,K[2]),Be&8&&L.value!==K[3]&&Ve(L,K[3])},i(K){Rn||(re(wt.$$.fragment,K),Rn=!0)},o(K){ce(wt.$$.fragment,K),Rn=!1},d(K){K&&(F(e),F(Ai)),ve(wt,K),Pi=!1,Ze(Sr)}}}function dv(n,e,t){let i,s,r,o,a;const l=bc(),c=av();function u(C){Pg(Ec(l,"items/"),{title:i,price:s,description:r,place:o,insertAt:new Date().getTime(),imgUrl:C}),alert("글쓰기가 완료되었습니다."),window.location.hash="/"}const h=async()=>{const C=a[0],N=C.name,g=ov(c,N);await sv(g,C);const m=await rv(g);return console.log("응답:",m),m},d=async()=>{const C=await h();u(C)};function f(){a=this.files,t(4,a)}function p(){i=this.value,t(0,i)}function w(){s=ta(this.value),t(1,s)}function b(){r=this.value,t(2,r)}function k(){o=this.value,t(3,o)}return[i,s,r,o,a,d,f,p,w,b,k]}class fv extends Ne{constructor(e){super(),ke(this,e,dv,hv,ye,{})}}function pv(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,i,s,r,o=[],a="",l=n.split("/");for(l[0]||l.shift();s=l.shift();)t=s[0],t==="*"?(o.push("wild"),a+="/(.*)"):t===":"?(i=s.indexOf("?",1),r=s.indexOf(".",1),o.push(s.substring(1,~i?i:~r?r:s.length)),a+=~i&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(a+=(~i?"?":"")+"\\"+s.substring(r))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function _v(n){let e,t,i;const s=[n[2]];var r=n[0];function o(a,l){let c={};if(l!==void 0&&l&4)c=Hn(s,[$n(a[2])]);else for(let u=0;u<s.length;u+=1)c=Jo(c,s[u]);return{props:c}}return r&&(e=Vn(r,o(n)),e.$on("routeEvent",n[7])),{c(){e&&Se(e.$$.fragment),t=di()},m(a,l){e&&me(e,a,l),B(a,t,l),i=!0},p(a,l){if(l&1&&r!==(r=a[0])){if(e){pi();const c=e;ce(c.$$.fragment,1,0,()=>{ve(c,1)}),_i()}r?(e=Vn(r,o(a,l)),e.$on("routeEvent",a[7]),Se(e.$$.fragment),re(e.$$.fragment,1),me(e,t.parentNode,t)):e=null}else if(r){const c=l&4?Hn(s,[$n(a[2])]):{};e.$set(c)}},i(a){i||(e&&re(e.$$.fragment,a),i=!0)},o(a){e&&ce(e.$$.fragment,a),i=!1},d(a){a&&F(t),e&&ve(e,a)}}}function gv(n){let e,t,i;const s=[{params:n[1]},n[2]];var r=n[0];function o(a,l){let c={};if(l!==void 0&&l&6)c=Hn(s,[l&2&&{params:a[1]},l&4&&$n(a[2])]);else for(let u=0;u<s.length;u+=1)c=Jo(c,s[u]);return{props:c}}return r&&(e=Vn(r,o(n)),e.$on("routeEvent",n[6])),{c(){e&&Se(e.$$.fragment),t=di()},m(a,l){e&&me(e,a,l),B(a,t,l),i=!0},p(a,l){if(l&1&&r!==(r=a[0])){if(e){pi();const c=e;ce(c.$$.fragment,1,0,()=>{ve(c,1)}),_i()}r?(e=Vn(r,o(a,l)),e.$on("routeEvent",a[6]),Se(e.$$.fragment),re(e.$$.fragment,1),me(e,t.parentNode,t)):e=null}else if(r){const c=l&6?Hn(s,[l&2&&{params:a[1]},l&4&&$n(a[2])]):{};e.$set(c)}},i(a){i||(e&&re(e.$$.fragment,a),i=!0)},o(a){e&&ce(e.$$.fragment,a),i=!1},d(a){a&&F(t),e&&ve(e,a)}}}function mv(n){let e,t,i,s;const r=[gv,_v],o=[];function a(l,c){return l[1]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=di()},m(l,c){o[e].m(l,c),B(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(pi(),ce(o[u],1,1,()=>{o[u]=null}),_i(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),re(t,1),t.m(i.parentNode,i))},i(l){s||(re(t),s=!0)},o(l){ce(t),s=!1},d(l){l&&F(i),o[e].d(l)}}}function Qo(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let i="";return t>-1&&(i=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:i}}const Tr=tl(null,function(e){e(Qo());const t=()=>{e(Qo())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});nl(Tr,n=>n.location);nl(Tr,n=>n.querystring);const Xo=Fs(void 0);function vv(n){n?window.scrollTo(n.__svelte_spa_router_scrollX,n.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function yv(n,e,t){let{routes:i={}}=e,{prefix:s=""}=e,{restoreScrollState:r=!1}=e;class o{constructor(m,E){if(!E||typeof E!="function"&&(typeof E!="object"||E._sveltesparouter!==!0))throw Error("Invalid component object");if(!m||typeof m=="string"&&(m.length<1||m.charAt(0)!="/"&&m.charAt(0)!="*")||typeof m=="object"&&!(m instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:S,keys:O}=pv(m);this.path=m,typeof E=="object"&&E._sveltesparouter===!0?(this.component=E.component,this.conditions=E.conditions||[],this.userData=E.userData,this.props=E.props||{}):(this.component=()=>Promise.resolve(E),this.conditions=[],this.props={}),this._pattern=S,this._keys=O}match(m){if(s){if(typeof s=="string")if(m.startsWith(s))m=m.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const L=m.match(s);if(L&&L[0])m=m.substr(L[0].length)||"/";else return null}}const E=this._pattern.exec(m);if(E===null)return null;if(this._keys===!1)return E;const S={};let O=0;for(;O<this._keys.length;){try{S[this._keys[O]]=decodeURIComponent(E[O+1]||"")||null}catch{S[this._keys[O]]=null}O++}return S}async checkConditions(m){for(let E=0;E<this.conditions.length;E++)if(!await this.conditions[E](m))return!1;return!0}}const a=[];i instanceof Map?i.forEach((g,m)=>{a.push(new o(m,g))}):Object.keys(i).forEach(g=>{a.push(new o(g,i[g]))});let l=null,c=null,u={};const h=Yc();async function d(g,m){await Qc(),h(g,m)}let f=null,p=null;r&&(p=g=>{g.state&&(g.state.__svelte_spa_router_scrollY||g.state.__svelte_spa_router_scrollX)?f=g.state:f=null},window.addEventListener("popstate",p),Gc(()=>{vv(f)}));let w=null,b=null;const k=Tr.subscribe(async g=>{w=g;let m=0;for(;m<a.length;){const E=a[m].match(g.location);if(!E){m++;continue}const S={route:a[m].path,location:g.location,querystring:g.querystring,userData:a[m].userData,params:E&&typeof E=="object"&&Object.keys(E).length?E:null};if(!await a[m].checkConditions(S)){t(0,l=null),b=null,d("conditionsFailed",S);return}d("routeLoading",Object.assign({},S));const O=a[m].component;if(b!=O){O.loading?(t(0,l=O.loading),b=O,t(1,c=O.loadingParams),t(2,u={}),d("routeLoaded",Object.assign({},S,{component:l,name:l.name,params:c}))):(t(0,l=null),b=null);const L=await O();if(g!=w)return;t(0,l=L&&L.default||L),b=O}E&&typeof E=="object"&&Object.keys(E).length?t(1,c=E):t(1,c=null),t(2,u=a[m].props),d("routeLoaded",Object.assign({},S,{component:l,name:l.name,params:c})).then(()=>{Xo.set(c)});return}t(0,l=null),b=null,Xo.set(void 0)});Kc(()=>{k(),p&&window.removeEventListener("popstate",p)});function C(g){kr.call(this,n,g)}function N(g){kr.call(this,n,g)}return n.$$set=g=>{"routes"in g&&t(3,i=g.routes),"prefix"in g&&t(4,s=g.prefix),"restoreScrollState"in g&&t(5,r=g.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=r?"manual":"auto")},[l,c,u,i,s,r,C,N]}class wv extends Ne{constructor(e){super(),ke(this,e,yv,mv,ye,{routes:3,prefix:4,restoreScrollState:5})}}function Ev(n){let e;return{c(){e=I("div"),e.innerHTML='<div class="lds-spinner svelte-1uogpyw"><div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div> <div class="svelte-1uogpyw"></div></div>',y(e,"class","wrapper svelte-1uogpyw")},m(t,i){B(t,e,i)},p:$,i:$,o:$,d(t){t&&F(e)}}}class bv extends Ne{constructor(e){super(),ke(this,e,null,Ev,ye,{})}}function Iv(n){let e,t,i,s,r,o,a,l;return r=new Ws({props:{location:"my"}}),{c(){e=I("div"),e.textContent="나의 당근",t=M(),i=I("button"),i.textContent="로그아웃",s=M(),Se(r.$$.fragment),y(i,"class","svelte-1er8viy")},m(c,u){B(c,e,u),B(c,t,u),B(c,i,u),B(c,s,u),me(r,c,u),o=!0,a||(l=we(i,"click",n[0]),a=!0)},p:$,i(c){o||(re(r.$$.fragment,c),o=!0)},o(c){ce(r.$$.fragment,c),o=!1},d(c){c&&(F(e),F(t),F(i),F(s)),ve(r,c),a=!1,l()}}}function Cv(n){return[()=>{Mt.set(null),localStorage.removeItem("token")}]}class Tv extends Ne{constructor(e){super(),ke(this,e,Cv,Iv,ye,{})}}function Sv(n){let e,t;return e=new wv({props:{routes:n[2]}}),{c(){Se(e.$$.fragment)},m(i,s){me(e,i,s),t=!0},p:$,i(i){t||(re(e.$$.fragment,i),t=!0)},o(i){ce(e.$$.fragment,i),t=!1},d(i){ve(e,i)}}}function Rv(n){let e,t;return e=new Pf({}),{c(){Se(e.$$.fragment)},m(i,s){me(e,i,s),t=!0},p:$,i(i){t||(re(e.$$.fragment,i),t=!0)},o(i){ce(e.$$.fragment,i),t=!1},d(i){ve(e,i)}}}function kv(n){let e,t;return e=new bv({}),{c(){Se(e.$$.fragment)},m(i,s){me(e,i,s),t=!0},p:$,i(i){t||(re(e.$$.fragment,i),t=!0)},o(i){ce(e.$$.fragment,i),t=!1},d(i){ve(e,i)}}}function Nv(n){let e,t,i,s;const r=[kv,Rv,Sv],o=[];function a(l,c){return l[0]?0:l[1]?2:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=di()},m(l,c){o[e].m(l,c),B(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(pi(),ce(o[u],1,1,()=>{o[u]=null}),_i(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),re(t,1),t.m(i.parentNode,i))},i(l){s||(re(t),s=!0)},o(l){ce(t),s=!1},d(l){l&&F(i),o[e].d(l)}}}function Av(n,e,t){let i;Es(n,Mt,l=>t(1,i=l));let s=!0;const r=el(),o=async()=>{const l=localStorage.getItem("token");if(!l)return t(0,s=!1);const c=de.credential(null,l),h=(await pd(r,c)).user;Mt.set(h),t(0,s=!1)},a={"/":zg,"/signup":Qg,"/write":fv,"/my":Tv,"*":Kg};return na(()=>o()),[s,i,a]}class Pv extends Ne{constructor(e){super(),ke(this,e,Av,Nv,ye,{})}}var Ov="firebase",Dv="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(Ov,Dv,"app");const Lv={apiKey:"AIzaSyB57YEPRW5mWh531SLdoAN1r9SKhciVBUM",authDomain:"carrot-market-c220d.firebaseapp.com",databaseURL:"https://carrot-market-c220d-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"carrot-market-c220d",storageBucket:"carrot-market-c220d.appspot.com",messagingSenderId:"1057460725644",appId:"1:1057460725644:web:acd081befb8e4f5fa9d8a9"};wa(Lv);new Pv({target:document.getElementById("app")});
